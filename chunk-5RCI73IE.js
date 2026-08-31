import {
  ExploreParkingInfoComponent
} from "./chunk-BNMZ4E2X.js";
import {
  BookingFormService
} from "./chunk-FXIAH3PX.js";
import {
  BuildingPipe
} from "./chunk-TDE4CEPZ.js";
import {
  DEFAULT_COLOURS
} from "./chunk-PDMPDUUL.js";
import {
  DurationFieldComponent
} from "./chunk-6VWXOFF3.js";
import {
  DateFieldComponent
} from "./chunk-OFV5AHHV.js";
import {
  ImageCarouselComponent
} from "./chunk-AOIUYVHW.js";
import {
  MapPinComponent
} from "./chunk-TVCHA74G.js";
import {
  InteractiveMapComponent
} from "./chunk-SLMIDFF4.js";
import {
  SettingsToggleComponent
} from "./chunk-2B3QPOZE.js";
import {
  TimeFieldComponent
} from "./chunk-OGMOCJ3D.js";
import {
  AuthenticatedImageDirective,
  MatCheckbox,
  MatCheckboxModule,
  MatTooltip,
  MatTooltipModule
} from "./chunk-QTAVFI2W.js";
import {
  IconComponent,
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatFormField,
  MatFormFieldModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSelect,
  MatSelectModule,
  OrganisationService,
  SettingsService
} from "./chunk-3YCGTXG5.js";
import {
  CommonModule,
  Component,
  DatePipe,
  FormsModule,
  Input,
  MatOption,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  Output,
  TranslatePipe,
  addDays,
  computed,
  effect,
  endOfDay,
  inject,
  input,
  isMobileSafari,
  model,
  output,
  setClassMetadata,
  signal,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-7MJI2IHH.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/bookings/src/lib/parking-select-modal/parking-details.component.ts
var _c0 = () => ({ disable_pan: true, disable_zoom: true });
function ParkingDetailsComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "image-carousel", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("images", ctx_r1.space().images);
  }
}
function ParkingDetailsComponent_Conditional_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11);
    \u0275\u0275element(1, "interactive-map", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.map_url())("focus", ctx_r1.space().map_id)("features", ctx_r1.features())("options", \u0275\u0275pureFunction0(4, _c0));
  }
}
function ParkingDetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 1);
    \u0275\u0275conditionalCreate(1, ParkingDetailsComponent_Conditional_0_Conditional_1_Template, 1, 1, "image-carousel", 2);
    \u0275\u0275elementStart(2, "button", 3);
    \u0275\u0275listener("click", function ParkingDetailsComponent_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function ParkingDetailsComponent_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFav.emit());
    });
    \u0275\u0275elementStart(6, "icon");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 5)(9, "section", 6)(10, "h2", 7);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "hr");
    \u0275\u0275elementStart(13, "section", 8)(14, "h2", 9);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 10)(18, "icon");
    \u0275\u0275text(19, "meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 10)(23, "icon");
    \u0275\u0275text(24, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(27, "hr");
    \u0275\u0275conditionalCreate(28, ParkingDetailsComponent_Conditional_0_Conditional_28_Template, 2, 5, "section", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("sm:h-40", ctx_r1.space().images?.length)("h-64", ctx_r1.space().images?.length)("sm:h-0", !ctx_r1.space().images?.length)("h-12", !ctx_r1.space().images?.length)("bg-transparent!", !ctx_r1.space().images?.length);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.space().images?.length ? 1 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-info-content", ctx_r1.fav())("bg-info!", ctx_r1.fav());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fav() ? "favorite" : "favorite_border");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.space().display_name || ctx_r1.space().name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 21, "COMMON.DETAILS"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.level()?.display_name || ctx_r1.level()?.name, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.building()?.address || ctx_r1.building()?.display_name || ctx_r1.building()?.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.hide_map() ? 28 : -1);
  }
}
function ParkingDetailsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "BOOKINGS.PARKING_SELECT_MSG"), " ");
  }
}
var ParkingDetailsComponent = class _ParkingDetailsComponent {
  constructor() {
    this._org = inject(OrganisationService);
    this.hide_map = input(
      false,
      ...ngDevMode ? [{ debugName: "hide_map" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.space = input(
      void 0,
      ...ngDevMode ? [{ debugName: "space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.fav = input(
      false,
      ...ngDevMode ? [{ debugName: "fav" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active = input(
      false,
      ...ngDevMode ? [{ debugName: "active" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.activeChange = output();
    this.close = output();
    this.toggleFav = output();
    this.level = computed(
      () => {
        const space = this.space();
        return this._org.levelWithID([space?.zone?.id]) || space?.zone;
      },
      ...ngDevMode ? [{ debugName: "level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.building = computed(
      () => {
        const space = this.space();
        return this._org.buildings.find((_) => space?.zone?.id === _.id || space?.zone?.parent_id === _.id);
      },
      ...ngDevMode ? [{ debugName: "building" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.map_url = computed(
      () => this.level()?.map_id || "",
      ...ngDevMode ? [{ debugName: "map_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = computed(
      () => {
        const space = this.space();
        if (!space?.map_id)
          return [];
        return [
          {
            location: space.map_id,
            content: MapPinComponent
          }
        ];
      },
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function ParkingDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingDetailsComponent, selectors: [["parking-space-details"]], inputs: { hide_map: [1, "hide_map"], space: [1, "space"], fav: [1, "fav"], active: [1, "active"] }, outputs: { activeChange: "activeChange", close: "close", toggleFav: "toggleFav" }, decls: 2, vars: 1, consts: [["empty", "", 1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], ["image", "", 1, "bg-base-200", "relative", "w-full"], [1, "absolute", "inset-0", 3, "images"], ["icon", "", "matRipple", "", "close", "", 1, "bg-base-200", "absolute", "top-2", "left-2", "sm:hidden", 3, "click"], ["icon", "", "matRipple", "", "fav", "", 1, "bg-base-200", "absolute", "top-2", "right-2", 3, "click"], [1, "h-1/2", "flex-1", "space-y-2", "p-2"], ["actions", "", 1, "z-0"], [1, "mt-4", "mb-2", "text-xl", "font-medium"], ["details", "", 1, "space-y-2"], [1, "text-xl", "font-medium"], [1, "flex", "items-center", "space-x-2"], ["map", "", 1, "border-base-200", "relative", "mx-auto", "h-64", "w-full", "overflow-hidden", "rounded-sm", "border", "sm:h-48"], [1, "pointer-events-none", 3, "src", "focus", "features", "options"], [1, "text-center", "opacity-30"]], template: function ParkingDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ParkingDetailsComponent_Conditional_0_Template, 29, 23)(1, ParkingDetailsComponent_Conditional_1_Template, 4, 3, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.space() ? 0 : 1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      InteractiveMapComponent,
      IconComponent,
      ImageCarouselComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingDetailsComponent, [{
    type: Component,
    args: [{ selector: `parking-space-details`, template: `
        @if (space()) {
            <section
                image
                class="bg-base-200 relative w-full"
                [class.sm:h-40]="space().images?.length"
                [class.h-64]="space().images?.length"
                [class.sm:h-0]="!space().images?.length"
                [class.h-12]="!space().images?.length"
                [class.bg-transparent!]="!space().images?.length"
            >
                @if (space().images?.length) {
                    <image-carousel
                        [images]="space().images"
                        class="absolute inset-0"
                    ></image-carousel>
                }
                <button
                    icon
                    matRipple
                    close
                    (click)="close.emit()"
                    class="bg-base-200 absolute top-2 left-2 sm:hidden"
                >
                    <icon>arrow_back</icon>
                </button>
                <button
                    icon
                    matRipple
                    fav
                    [class.text-info-content]="fav()"
                    [class.bg-info!]="fav()"
                    (click)="toggleFav.emit()"
                    class="bg-base-200 absolute top-2 right-2"
                >
                    <icon>{{ fav() ? 'favorite' : 'favorite_border' }}</icon>
                </button>
            </section>
            <div class="h-1/2 flex-1 space-y-2 p-2">
                <section actions class="z-0">
                    <h2 class="mt-4 mb-2 text-xl font-medium">
                        {{ space().display_name || space().name }}
                    </h2>
                </section>
                <hr />
                <section details class="space-y-2">
                    <h2 class="text-xl font-medium">
                        {{ 'COMMON.DETAILS' | translate }}
                    </h2>
                    <div class="flex items-center space-x-2">
                        <icon>meeting_room</icon>
                        <p>
                            {{ level()?.display_name || level()?.name }}
                        </p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <icon>place</icon>
                        <p>
                            {{
                                building()?.address ||
                                    building()?.display_name ||
                                    building()?.name
                            }}
                        </p>
                    </div>
                </section>
                <hr />
                @if (!hide_map()) {
                    <section
                        map
                        class="border-base-200 relative mx-auto h-64 w-full overflow-hidden rounded-sm border sm:h-48"
                    >
                        <interactive-map
                            class="pointer-events-none"
                            [src]="map_url()"
                            [focus]="space().map_id"
                            [features]="features()"
                            [options]="{
                                disable_pan: true,
                                disable_zoom: true,
                            }"
                        ></interactive-map>
                    </section>
                }
            </div>
        } @else {
            <div
                empty
                class="flex h-full w-full flex-col items-center justify-center space-y-2 p-16"
            >
                <p class="text-center opacity-30">
                    {{ 'BOOKINGS.PARKING_SELECT_MSG' | translate }}
                </p>
            </div>
        }
    `, imports: [
      TranslatePipe,
      MatRippleModule,
      InteractiveMapComponent,
      IconComponent,
      ImageCarouselComponent
    ] }]
  }], null, { hide_map: [{ type: Input, args: [{ isSignal: true, alias: "hide_map", required: false }] }], space: [{ type: Input, args: [{ isSignal: true, alias: "space", required: false }] }], fav: [{ type: Input, args: [{ isSignal: true, alias: "fav", required: false }] }], active: [{ type: Input, args: [{ isSignal: true, alias: "active", required: false }] }], activeChange: [{ type: Output, args: ["activeChange"] }], close: [{ type: Output, args: ["close"] }], toggleFav: [{ type: Output, args: ["toggleFav"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingDetailsComponent, { className: "ParkingDetailsComponent", filePath: "libs/bookings/src/lib/parking-select-modal/parking-details.component.ts", lineNumber: 118 });
})();

// libs/bookings/src/lib/parking-select-modal/parking-filters-display.component.ts
function ParkingFiltersDisplayComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.location(), " ");
  }
}
function ParkingFiltersDisplayComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 5);
    \u0275\u0275listener("click", function ParkingFiltersDisplayComponent_For_10_Template_button_click_3_listener() {
      const feat_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removeFeature(feat_r3));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feat_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feat_r3);
  }
}
var ParkingFiltersDisplayComponent = class _ParkingFiltersDisplayComponent {
  constructor() {
    this._event_form = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.view = input(
      "list",
      ...ngDevMode ? [{ debugName: "view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.viewChange = output();
    this.options = this._event_form.options;
    this.location = signal(
      "",
      ...ngDevMode ? [{ debugName: "location" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._model = this._event_form.model;
    this.start = computed(
      () => this._model().date,
      ...ngDevMode ? [{ debugName: "start" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end = computed(
      () => {
        const { date, duration } = this._model();
        return date + duration * 60 * 1e3;
      },
      ...ngDevMode ? [{ debugName: "end" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.time_format = this._settings.time_format_signal;
    effect(() => {
      const { zone_id } = this._event_form.options();
      this._updateLocation([zone_id]);
    });
  }
  removeFeature(feat) {
    const value = this._event_form.options();
    this._event_form.setOptions(__spreadProps(__spreadValues({}, value), {
      features: (value.features || []).filter((_) => _ !== feat)
    }));
  }
  _updateLocation(zone_ids = []) {
    const level = this._org.levelWithID(zone_ids);
    const item = level || this._org.building;
    this.location.set(item?.display_name || item?.name || "");
  }
  static {
    this.\u0275fac = function ParkingFiltersDisplayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingFiltersDisplayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingFiltersDisplayComponent, selectors: [["parking-space-filters-display"]], inputs: { view: [1, "view"] }, outputs: { viewChange: "viewChange" }, decls: 11, vars: 13, consts: [["filters", "", 1, "border-base-300", "bg-base-100", "sticky", "-top-1", "z-20", "-mx-1", "mb-4!", "flex", "w-[calc(100%+0.5rem)]", "flex-wrap", "items-center", "rounded-sm", "border", "p-1", "pr-10!", "sm:pr-1!"], ["filter-item", "", "zone", ""], ["filter-item", "", "date", ""], ["filter-item", "", "time", ""], ["filter-item", ""], ["icon", "", "matRipple", "", 1, "-mr-4", 3, "click"]], template: function ParkingFiltersDisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275conditionalCreate(1, ParkingFiltersDisplayComponent_Conditional_1_Template, 2, 1, "div", 1);
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "date");
        \u0275\u0275pipe(8, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(9, ParkingFiltersDisplayComponent_For_10_Template, 6, 1, "div", 4, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.location() ? 1 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 4, ctx.start(), "mediumDate"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(7, 7, ctx.start(), ctx.time_format()), " \u2014 ", \u0275\u0275pipeBind2(8, 10, ctx.end(), ctx.time_format()), " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.options()?.features);
      }
    }, dependencies: [CommonModule, IconComponent, MatRippleModule, MatRipple, DatePipe], styles: ["\n[filter-item][_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  margin: 0.25rem;\n}\n[filter-item][_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=parking-filters-display.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingFiltersDisplayComponent, [{
    type: Component,
    args: [{ selector: `parking-space-filters-display`, template: `
        <section
            filters
            class="border-base-300 bg-base-100 sticky -top-1 z-20 -mx-1 mb-4! flex w-[calc(100%+0.5rem)] flex-wrap items-center rounded-sm border p-1 pr-10! sm:pr-1!"
        >
            @if (location()) {
                <div filter-item zone>
                    {{ location() }}
                </div>
            }
            <div filter-item date>
                {{ start() | date: 'mediumDate' }}
            </div>
            <div filter-item time>
                {{ start() | date: time_format() }} &mdash;
                {{ end() | date: time_format() }}
            </div>
            @for (feat of options()?.features; track feat) {
                <div filter-item>
                    <p>{{ feat }}</p>
                    <button
                        icon
                        matRipple
                        class="-mr-4"
                        (click)="removeFeature(feat)"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            }
        </section>
    `, imports: [CommonModule, IconComponent, MatRippleModule], styles: ["/* angular:styles/component:css;40c2cfb0940879f4b472b0df17d108f20a06d9aef1b032e0c2528e24b3273369;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/parking-select-modal/parking-filters-display.component.ts */\n[filter-item] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  margin: 0.25rem;\n}\n[filter-item]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item] > * + * {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=parking-filters-display.component.css.map */\n"] }]
  }], () => [], { view: [{ type: Input, args: [{ isSignal: true, alias: "view", required: false }] }], viewChange: [{ type: Output, args: ["viewChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingFiltersDisplayComponent, { className: "ParkingFiltersDisplayComponent", filePath: "libs/bookings/src/lib/parking-select-modal/parking-filters-display.component.ts", lineNumber: 74 });
})();

// libs/bookings/src/lib/parking-select-modal/parking-filters.component.ts
var _c02 = () => ({ standalone: true });
var _c1 = () => [];
function ParkingFiltersComponent_Conditional_13_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reg_r3 = ctx.$implicit;
    \u0275\u0275property("value", reg_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reg_r3.display_name || reg_r3.name, " ");
  }
}
function ParkingFiltersComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 7)(1, "mat-select", 15);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function ParkingFiltersComponent_Conditional_13_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setRegion($event));
    });
    \u0275\u0275repeaterCreate(3, ParkingFiltersComponent_Conditional_13_For_4_Template, 2, 2, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.region())("ngModelOptions", \u0275\u0275pureFunction0(5, _c02))("placeholder", \u0275\u0275pipeBind1(2, 3, "COMMON.REGION_ANY"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.regions());
  }
}
function ParkingFiltersComponent_Conditional_14_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r5 = ctx.$implicit;
    \u0275\u0275property("value", bld_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r5.display_name || bld_r5.name, " ");
  }
}
function ParkingFiltersComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 7)(1, "mat-select", 17);
    \u0275\u0275listener("ngModelChange", function ParkingFiltersComponent_Conditional_14_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setBuilding($event));
    });
    \u0275\u0275repeaterCreate(2, ParkingFiltersComponent_Conditional_14_For_3_Template, 2, 2, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.building())("ngModelOptions", \u0275\u0275pureFunction0(3, _c02))("placeholder", ctx_r1.building()?.display_name || ctx_r1.building()?.name);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.buildings());
  }
}
function ParkingFiltersComponent_Conditional_15_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lvl_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, lvl_r7.parent_id)?.display_name, " ");
  }
}
function ParkingFiltersComponent_Conditional_15_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16)(1, "div", 19);
    \u0275\u0275conditionalCreate(2, ParkingFiltersComponent_Conditional_15_For_4_Conditional_2_Template, 5, 3, "div", 20);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lvl_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", lvl_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region() ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", lvl_r7.display_name || lvl_r7.name, " ");
  }
}
function ParkingFiltersComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 7)(1, "mat-select", 18);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function ParkingFiltersComponent_Conditional_15_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_id: $event }));
    });
    \u0275\u0275repeaterCreate(3, ParkingFiltersComponent_Conditional_15_For_4_Template, 5, 3, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.options()?.zone_id)("ngModelOptions", \u0275\u0275pureFunction0(5, _c02))("placeholder", \u0275\u0275pipeBind1(2, 3, "COMMON.LEVEL_ANY"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.levels());
  }
}
function ParkingFiltersComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "mat-checkbox", 22);
    \u0275\u0275listener("ngModelChange", function ParkingFiltersComponent_Conditional_23_Template_mat_checkbox_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.model.update((m) => __spreadProps(__spreadValues({}, m), { all_day: $event })));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.model().all_day)("ngModelOptions", \u0275\u0275pureFunction0(5, _c02));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "COMMON.ALL_DAY"), " ");
  }
}
function ParkingFiltersComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 23)(2, "label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a-time-field", 24);
    \u0275\u0275listener("ngModelChange", function ParkingFiltersComponent_Conditional_24_Template_a_time_field_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.model.update((m) => __spreadProps(__spreadValues({}, m), { date: $event })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 23)(7, "label");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a-duration-field", 25);
    \u0275\u0275listener("ngModelChange", function ParkingFiltersComponent_Conditional_24_Template_a_duration_field_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.model.update((m) => __spreadProps(__spreadValues({}, m), { duration: $event })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 16, "FORM.TIME_START"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.model().date)("ngModelOptions", \u0275\u0275pureFunction0(20, _c02))("use_24hr", ctx_r1.use_24hr())("timezone", ctx_r1.timezone())("range", ctx_r1.bookable_hours());
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 18, "FORM.TIME_END"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.model().duration)("ngModelOptions", \u0275\u0275pureFunction0(21, _c02))("time", ctx_r1.model().date)("max", 10 * 60)("min", 60)("step", 60)("use_24hr", ctx_r1.use_24hr())("timezone", ctx_r1.timezone())("end_time", ctx_r1.bookable_hours()?.end);
    \u0275\u0275control();
  }
}
function ParkingFiltersComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 12)(1, "h2", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 27)(5, "settings-toggle", 28);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("ngModelChange", function ParkingFiltersComponent_Conditional_25_Template_settings_toggle_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ show_fav: $event }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "COMMON.FAVOURITES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(6, 6, "COMMON.FAVOURITES_ONLY"))("ngModel", ctx_r1.options()?.show_fav)("ngModelOptions", \u0275\u0275pureFunction0(8, _c02));
    \u0275\u0275control();
  }
}
function ParkingFiltersComponent_Conditional_26_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-checkbox", 22);
    \u0275\u0275listener("ngModelChange", function ParkingFiltersComponent_Conditional_26_For_5_Template_mat_checkbox_ngModelChange_3_listener($event) {
      const feat_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setFeature(feat_r12, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feat_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", feat_r12, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (ctx_r1.options()?.features || \u0275\u0275pureFunction0(3, _c1)).includes(feat_r12))("ngModelOptions", \u0275\u0275pureFunction0(4, _c02));
    \u0275\u0275control();
  }
}
function ParkingFiltersComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "h2", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, ParkingFiltersComponent_Conditional_26_For_5_Template, 4, 5, "div", 29, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.TYPE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.features());
  }
}
function ParkingFiltersComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "button", 31);
    \u0275\u0275listener("click", function ParkingFiltersComponent_Conditional_27_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.APPLY"), " ");
  }
}
var ParkingFiltersComponent = class _ParkingFiltersComponent {
  constructor() {
    this._state = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._use_region = this._settings.signal("use_region", false);
    this.hide_levels = input(
      void 0,
      ...ngDevMode ? [{ debugName: "hide_levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_close = signal(
      false,
      ...ngDevMode ? [{ debugName: "can_close" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = this._state.options;
    this.features = this._state.features;
    this.buildings = this._org.active_buildings;
    this.building = this._org.active_building;
    this.form = this._state.form;
    this.model = this._state.model;
    this.regions = this._org.region_list;
    this.region = this._org.active_region;
    this.levels = computed(
      () => {
        const region = this._org.active_region();
        const bld = this._org.active_building();
        const level_list = this._use_region() ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld);
        const viewable_levels = level_list.filter((lvl) => lvl.tags.includes("parking"));
        return viewable_levels.sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || "").localeCompare(b.display_name || ""));
      },
      ...ngDevMode ? [{ debugName: "levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.setOptions = (o) => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
    this.setLevel = (l) => {
    };
    this.setBuilding = (bld) => this._org.building = bld;
    this.setRegion = (r) => this._org.region = r;
    this._parking_bookable_hours = this._settings.signal("parking.bookable_hours", null);
    this._booking_bookable_hours = this._settings.signal("bookings.bookable_hours", null);
    this._bookable_hours = computed(
      () => this._parking_bookable_hours() || this._booking_bookable_hours(),
      ...ngDevMode ? [{ debugName: "_bookable_hours" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._parking_allow_all_day = this._settings.signal("parking.allow_all_day", false);
    this._booking_allow_all_day = this._settings.signal("bookings.allow_all_day", false);
    this._allow_all_day = computed(
      () => this._parking_allow_all_day() || this._booking_allow_all_day(),
      ...ngDevMode ? [{ debugName: "_allow_all_day" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._available_period = this._settings.signal("parking.available_period", 90);
    this._use_24hr = this._settings.signal("use_24_hour_time", false);
    this._use_building_timezone = this._settings.signal("events.use_building_timezone", false);
    this.bookable_hours = this._bookable_hours;
    this.allow_all_day = this._allow_all_day;
    this.end_date = computed(
      () => endOfDay(addDays(Date.now(), this._available_period())).valueOf(),
      ...ngDevMode ? [{ debugName: "end_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.use_24hr = this._use_24hr;
    this.use_region = this._use_region;
    this.timezone = computed(
      () => this._use_building_timezone() ? this._org.building.timezone : "",
      ...ngDevMode ? [{ debugName: "timezone" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  close() {
  }
  static {
    this.\u0275fac = function ParkingFiltersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingFiltersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingFiltersComponent, selectors: [["parking-space-filters"]], inputs: { hide_levels: [1, "hide_levels"] }, decls: 28, vars: 29, consts: [[1, "border-base-300", "bg-base-100", "sticky", "top-0", "z-10", "flex", "items-center", "border-b", "px-4", "py-4"], [1, "text-xl", "font-medium"], [1, "divide-base-200", "relative", "z-0", "w-full", "divide-y", "p-2"], ["details", ""], [1, "mb-1", "text-lg", "font-medium"], [1, "flex", "min-w-32", "flex-1", "flex-col"], ["for", "location"], ["appearance", "outline", 1, "w-full"], [1, "min-w-[256px]", "flex-1"], ["name", "date", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled", "to", "timezone"], [1, "-mt-2", "mb-2", "flex", "justify-end"], [1, "flex", "items-center", "space-x-2"], ["favs", "", 1, "space-y-2", "pb-4"], ["features", "", 1, "space-y-2"], [1, "border-base-200", "w-full", "border-t", "px-2", "py-2"], ["name", "region", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value"], ["name", "building", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "w-1/3", "flex-1"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr", "timezone", "range"], [3, "ngModelChange", "ngModel", "ngModelOptions", "time", "max", "min", "step", "use_24hr", "timezone", "end_time"], [1, "text-lg", "font-medium"], [1, "flex", "w-full", "items-center"], [1, "w-full", 3, "ngModelChange", "label", "ngModel", "ngModelOptions"], [1, "flex", "flex-wrap", "items-center", "space-x-2"], ["for", "feat", 1, "w-1/2", "flex-1"], ["btn", "", "matRipple", "", "name", "apply-parking-filters", 1, "w-full", 3, "click"]], template: function ParkingFiltersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "form", 2)(5, "section", 3)(6, "h2", 4);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 5)(10, "label", 6);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(13, ParkingFiltersComponent_Conditional_13_Template, 5, 6, "mat-form-field", 7);
        \u0275\u0275conditionalCreate(14, ParkingFiltersComponent_Conditional_14_Template, 4, 4, "mat-form-field", 7);
        \u0275\u0275conditionalCreate(15, ParkingFiltersComponent_Conditional_15_Template, 5, 6, "mat-form-field", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 8)(17, "label");
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "a-date-field", 9);
        \u0275\u0275listener("ngModelChange", function ParkingFiltersComponent_Template_a_date_field_ngModelChange_20_listener($event) {
          return ctx.model.update((m) => __spreadProps(__spreadValues({}, m), { date: $event }));
        });
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(23, ParkingFiltersComponent_Conditional_23_Template, 4, 6, "div", 10);
        \u0275\u0275conditionalCreate(24, ParkingFiltersComponent_Conditional_24_Template, 11, 22, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(25, ParkingFiltersComponent_Conditional_25_Template, 7, 9, "section", 12);
        \u0275\u0275conditionalCreate(26, ParkingFiltersComponent_Conditional_26_Template, 6, 3, "section", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(27, ParkingFiltersComponent_Conditional_27_Template, 4, 3, "div", 14);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 18, "COMMON.FILTERS"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 20, "COMMON.DETAILS"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 22, "COMMON.LOCATION"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.use_region() && ctx.regions()?.length ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.use_region() && ctx.buildings()?.length > 1 ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hide_levels() ? 15 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 24, "FORM.DATE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.model().date)("ngModelOptions", \u0275\u0275pureFunction0(28, _c02))("disabled", ctx.form.date().disabled())("to", ctx.end_date())("timezone", ctx.timezone());
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 26, "FORM.DATE_ERROR"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.allow_all_day() && !ctx.form.date().disabled() ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.model().all_day ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hide_levels() ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.features()?.length && !ctx.hide_levels() ? 26 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.can_close() ? 27 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatCheckboxModule,
      MatCheckbox,
      SettingsToggleComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      FormsModule,
      \u0275NgNoValidate,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      NgForm,
      TranslatePipe,
      BuildingPipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 100vw;\n}\n/*# sourceMappingURL=parking-filters.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingFiltersComponent, [{
    type: Component,
    args: [{ selector: "parking-space-filters", template: `
        <div
            class="border-base-300 bg-base-100 sticky top-0 z-10 flex items-center border-b px-4 py-4"
        >
            <h3 class="text-xl font-medium">
                {{ 'COMMON.FILTERS' | translate }}
            </h3>
        </div>
        <form class="divide-base-200 relative z-0 w-full divide-y p-2">
            <section details>
                <h2 class="mb-1 text-lg font-medium">
                    {{ 'COMMON.DETAILS' | translate }}
                </h2>
                <div class="flex min-w-32 flex-1 flex-col">
                    <label for="location">
                        {{ 'COMMON.LOCATION' | translate }}
                    </label>
                    @if (use_region() && regions()?.length) {
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="region"
                                [ngModel]="region()"
                                (ngModelChange)="setRegion($event)"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="'COMMON.REGION_ANY' | translate"
                            >
                                @for (reg of regions(); track reg) {
                                    <mat-option [value]="reg">
                                        {{ reg.display_name || reg.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                    @if (!use_region() && buildings()?.length > 1) {
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="building"
                                [ngModel]="building()"
                                (ngModelChange)="setBuilding($event)"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="
                                    building()?.display_name || building()?.name
                                "
                            >
                                @for (bld of buildings(); track bld) {
                                    <mat-option [value]="bld">
                                        {{ bld.display_name || bld.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                    @if (!hide_levels()) {
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="location"
                                [ngModel]="options()?.zone_id"
                                (ngModelChange)="
                                    setOptions({ zone_id: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="'COMMON.LEVEL_ANY' | translate"
                            >
                                @for (lvl of levels(); track lvl) {
                                    <mat-option [value]="lvl.id">
                                        <div class="flex flex-col-reverse">
                                            @if (use_region()) {
                                                <div class="text-xs opacity-30">
                                                    {{
                                                        (
                                                            lvl.parent_id
                                                            | building
                                                        )?.display_name
                                                    }}
                                                    <span class="opacity-0">
                                                        -
                                                    </span>
                                                </div>
                                            }
                                            <div>
                                                {{
                                                    lvl.display_name || lvl.name
                                                }}
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                </div>

                <!-- Date -->
                <div class="min-w-[256px] flex-1">
                    <label>{{ 'FORM.DATE' | translate }}</label>
                    <a-date-field
                        name="date"
                        [ngModel]="model().date"
                        (ngModelChange)="
                            model.update((m) => ({ ...m, date: $event }))
                        "
                        [ngModelOptions]="{ standalone: true }"
                        [disabled]="form.date().disabled()"
                        [to]="end_date()"
                        [timezone]="timezone()"
                    >
                        {{ 'FORM.DATE_ERROR' | translate }}
                    </a-date-field>
                </div>
                <!-- All Day -->
                @if (allow_all_day() && !form.date().disabled()) {
                    <div class="-mt-2 mb-2 flex justify-end">
                        <mat-checkbox
                            [ngModel]="model().all_day"
                            (ngModelChange)="
                                model.update((m) => ({ ...m, all_day: $event }))
                            "
                            [ngModelOptions]="{ standalone: true }"
                        >
                            {{ 'COMMON.ALL_DAY' | translate }}
                        </mat-checkbox>
                    </div>
                }
                <!-- Start End -->
                @if (!model().all_day) {
                    <div class="flex items-center space-x-2">
                        <div class="w-1/3 flex-1">
                            <label>{{ 'FORM.TIME_START' | translate }}</label>
                            <a-time-field
                                name="start-time"
                                [ngModel]="model().date"
                                (ngModelChange)="
                                    model.update((m) => ({
                                        ...m,
                                        date: $event,
                                    }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [use_24hr]="use_24hr()"
                                [timezone]="timezone()"
                                [range]="bookable_hours()"
                            ></a-time-field>
                        </div>
                        <div class="w-1/3 flex-1">
                            <label>{{ 'FORM.TIME_END' | translate }}</label>
                            <a-duration-field
                                [ngModel]="model().duration"
                                (ngModelChange)="
                                    model.update((m) => ({
                                        ...m,
                                        duration: $event,
                                    }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [time]="model().date"
                                [max]="10 * 60"
                                [min]="60"
                                [step]="60"
                                [use_24hr]="use_24hr()"
                                [timezone]="timezone()"
                                [end_time]="bookable_hours()?.end"
                            >
                            </a-duration-field>
                        </div>
                    </div>
                }
            </section>
            @if (!hide_levels()) {
                <section favs class="space-y-2 pb-4">
                    <h2 class="text-lg font-medium">
                        {{ 'COMMON.FAVOURITES' | translate }}
                    </h2>
                    <div class="flex w-full items-center">
                        <settings-toggle
                            class="w-full"
                            [label]="'COMMON.FAVOURITES_ONLY' | translate"
                            [ngModel]="options()?.show_fav"
                            (ngModelChange)="setOptions({ show_fav: $event })"
                            [ngModelOptions]="{ standalone: true }"
                        ></settings-toggle>
                    </div>
                </section>
            }
            @if (features()?.length && !hide_levels()) {
                <section class="space-y-2" features>
                    <h2 class="text-lg font-medium">
                        {{ 'COMMON.TYPE' | translate }}
                    </h2>
                    @for (feat of features(); track feat) {
                        <div class="flex flex-wrap items-center space-x-2">
                            <div for="feat" class="w-1/2 flex-1">
                                {{ feat }}
                            </div>
                            <mat-checkbox
                                [ngModel]="
                                    (options()?.features || []).includes(feat)
                                "
                                (ngModelChange)="setFeature(feat, $event)"
                                [ngModelOptions]="{ standalone: true }"
                            ></mat-checkbox>
                        </div>
                    }
                </section>
            }
        </form>
        @if (can_close()) {
            <div class="border-base-200 w-full border-t px-2 py-2">
                <button
                    btn
                    matRipple
                    name="apply-parking-filters"
                    class="w-full"
                    (click)="close()"
                >
                    {{ 'COMMON.APPLY' | translate }}
                </button>
            </div>
        }
    `, imports: [
      MatRippleModule,
      TranslatePipe,
      MatCheckboxModule,
      SettingsToggleComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      BuildingPipe
    ], styles: ["/* angular:styles/component:css;23008f9198b39e4d3c7440c4c7714beae90c2987553e297566829416db332df8;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/parking-select-modal/parking-filters.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 100vw;\n}\n/*# sourceMappingURL=parking-filters.component.css.map */\n"] }]
  }], null, { hide_levels: [{ type: Input, args: [{ isSignal: true, alias: "hide_levels", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingFiltersComponent, { className: "ParkingFiltersComponent", filePath: "libs/bookings/src/lib/parking-select-modal/parking-filters.component.ts", lineNumber: 265 });
})();

// libs/bookings/src/lib/parking-select-modal/parking-list.component.ts
var _c03 = (a0) => ({ count: a0 });
function ParkingListComponent_Conditional_6_Conditional_0_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function ParkingListComponent_Conditional_6_Conditional_0_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10);
  }
  if (rf & 2) {
    const space_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", space_r2.images[0]);
  }
}
function ParkingListComponent_Conditional_6_Conditional_0_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 11);
  }
}
function ParkingListComponent_Conditional_6_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 6)(1, "button", 7);
    \u0275\u0275listener("click", function ParkingListComponent_Conditional_6_Conditional_0_For_2_Template_button_click_1_listener() {
      const space_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectSpace(space_r2));
    });
    \u0275\u0275elementStart(2, "div", 8);
    \u0275\u0275conditionalCreate(3, ParkingListComponent_Conditional_6_Conditional_0_For_2_Conditional_3_Template, 3, 0, "div", 9);
    \u0275\u0275conditionalCreate(4, ParkingListComponent_Conditional_6_Conditional_0_For_2_Conditional_4_Template, 1, 1, "img", 10)(5, ParkingListComponent_Conditional_6_Conditional_0_For_2_Conditional_5_Template, 1, 0, "img", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12)(7, "div", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 14)(10, "icon", 15);
    \u0275\u0275text(11, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "button", 16);
    \u0275\u0275listener("click", function ParkingListComponent_Conditional_6_Conditional_0_For_2_Template_button_click_14_listener() {
      const space_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleFav.emit(space_r2));
    });
    \u0275\u0275elementStart(15, "icon", 17);
    \u0275\u0275text(16, "favorite");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const space_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("border-info!", ctx_r2.active() === space_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.selected().includes(space_r2.id) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(space_r2.images?.length ? 4 : 5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", space_r2.name || "Meeting Space", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", space_r2.location || space_r2.level?.display_name || space_r2.level?.name || space_r2.zone?.display_name || space_r2.zone?.name, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("text-info", ctx_r2.isFavourite(space_r2.id));
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r2.isFavourite(space_r2.id) ? "material-symbols-rounded" : "material-symbols-outlined");
  }
}
function ParkingListComponent_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 3);
    \u0275\u0275repeaterCreate(1, ParkingListComponent_Conditional_6_Conditional_0_For_2_Template, 17, 9, "li", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.assets());
  }
}
function ParkingListComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "BOOKINGS.PARKING_LIST_EMPTY"), " ");
  }
}
function ParkingListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ParkingListComponent_Conditional_6_Conditional_0_Template, 3, 0, "ul", 3)(1, ParkingListComponent_Conditional_6_Conditional_1_Template, 4, 3, "div", 4);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.assets()?.length ? 0 : 1);
  }
}
function ParkingListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-spinner", 19);
    \u0275\u0275elementStart(2, "p", 20);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "BOOKINGS.PARKING_LIST_LOADING"), " ");
  }
}
var ParkingListComponent = class _ParkingListComponent {
  constructor() {
    this._form = inject(BookingFormService);
    this.active = input(
      "",
      ...ngDevMode ? [{ debugName: "active" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected = input(
      "",
      ...ngDevMode ? [{ debugName: "selected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.favorites = input(
      [],
      ...ngDevMode ? [{ debugName: "favorites" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.onSelect = output();
    this.toggleFav = output();
    this.assets = computed(
      () => {
        const { show_fav } = this._form.options();
        return this._form.available_resources().filter((i) => !show_fav || this.isFavourite(i.id)).sort((a, b) => {
          const a_fav = this.isFavourite(a.id) ? 1 : 0;
          const b_fav = this.isFavourite(b.id) ? 1 : 0;
          return b_fav - a_fav;
        });
      },
      ...ngDevMode ? [{ debugName: "assets" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = this._form.loading;
  }
  isFavourite(space_id) {
    return this.favorites().includes(space_id);
  }
  selectSpace(space) {
    this.onSelect.emit(space);
  }
  static {
    this.\u0275fac = function ParkingListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingListComponent, selectors: [["parking-space-list"]], inputs: { active: [1, "active"], selected: [1, "selected"], favorites: [1, "favorites"] }, outputs: { onSelect: "onSelect", toggleFav: "toggleFav" }, decls: 8, vars: 11, consts: [[1, "px-2", "font-bold"], ["count", "", 1, "mb-4", "px-2", "text-sm", "opacity-60"], ["loading", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [1, "list-style-none", "space-y-2"], ["empty", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], ["space", "", 1, "border-base-200", "bg-base-100", "relative", "w-full", "rounded-lg", "border", "p-2", "shadow-sm", 3, "border-info!"], ["space", "", 1, "border-base-200", "bg-base-100", "relative", "w-full", "rounded-lg", "border", "p-2", "shadow-sm"], ["matRipple", "", "select", "", 1, "flex", "h-full", "w-full", "items-center", 3, "click"], [1, "bg-base-200", "relative", "mr-4", "flex", "h-20", "w-20", "items-center", "justify-center", "overflow-hidden", "rounded-xl"], [1, "border-neutral", "bg-base-200", "absolute", "top-1", "left-1", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "border", "text-white"], ["auth", "", 1, "h-full", "object-cover", 3, "source"], ["src", "assets/icons/car-placeholder.svg", 1, "m-auto"], [1, "space-y-2"], [1, "mr-10", "truncate", "font-medium"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "text-info"], ["icon", "", "matRipple", "", "fav", "", 1, "absolute", "top-1", "right-1", 3, "click"], [3, "className"], [1, "text-center", "opacity-30"], [3, "diameter"], [1, "opacity-30"]], template: function ParkingListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h3", 0);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 1);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, ParkingListComponent_Conditional_6_Template, 2, 1)(7, ParkingListComponent_Conditional_7_Template, 5, 4, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "COMMON.RESULTS"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(5, 5, "COMMON.RESULTS_COUNT", \u0275\u0275pureFunction1(9, _c03, ctx.assets()?.length || 0), ctx.assets()?.length || 0), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 6 : 7);
      }
    }, dependencies: [
      IconComponent,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      AuthenticatedImageDirective,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingListComponent, [{
    type: Component,
    args: [{ selector: `parking-space-list`, template: `
        <h3 class="px-2 font-bold">{{ 'COMMON.RESULTS' | translate }}</h3>
        <p count class="mb-4 px-2 text-sm opacity-60">
            {{
                'COMMON.RESULTS_COUNT'
                    | translate
                        : { count: assets()?.length || 0 }
                        : assets()?.length || 0
            }}
        </p>
        @if (!loading()) {
            @if (assets()?.length) {
                <ul class="list-style-none space-y-2">
                    @for (space of assets(); track space) {
                        <li
                            space
                            [class.border-info!]="active() === space.id"
                            class="border-base-200 bg-base-100 relative w-full rounded-lg border p-2 shadow-sm"
                        >
                            <button
                                matRipple
                                select
                                class="flex h-full w-full items-center"
                                (click)="selectSpace(space)"
                            >
                                <div
                                    class="bg-base-200 relative mr-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl"
                                >
                                    @if (selected().includes(space.id)) {
                                        <div
                                            class="border-neutral bg-base-200 absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border text-white"
                                        >
                                            <icon>done</icon>
                                        </div>
                                    }
                                    @if (space.images?.length) {
                                        <img
                                            auth
                                            class="h-full object-cover"
                                            [source]="space.images[0]"
                                        />
                                    } @else {
                                        <img
                                            class="m-auto"
                                            src="assets/icons/car-placeholder.svg"
                                        />
                                    }
                                </div>
                                <div class="space-y-2">
                                    <div class="mr-10 truncate font-medium">
                                        {{ space.name || 'Meeting Space' }}
                                    </div>
                                    <div
                                        class="flex items-center space-x-2 text-sm"
                                    >
                                        <icon class="text-info">place</icon>
                                        <p>
                                            {{
                                                space.location ||
                                                    space.level?.display_name ||
                                                    space.level?.name ||
                                                    space.zone?.display_name ||
                                                    space.zone?.name
                                            }}
                                        </p>
                                    </div>
                                </div>
                            </button>
                            <button
                                icon
                                matRipple
                                fav
                                class="absolute top-1 right-1"
                                [class.text-info]="isFavourite(space.id)"
                                (click)="toggleFav.emit(space)"
                            >
                                <icon
                                    [className]="
                                        isFavourite(space.id)
                                            ? 'material-symbols-rounded'
                                            : 'material-symbols-outlined'
                                    "
                                    >favorite</icon
                                >
                            </button>
                        </li>
                    }
                </ul>
            } @else {
                <div
                    empty
                    class="flex flex-col items-center justify-center space-y-2 p-16"
                >
                    <p class="text-center opacity-30">
                        {{ 'BOOKINGS.PARKING_LIST_EMPTY' | translate }}
                    </p>
                </div>
            }
        } @else {
            <div
                loading
                class="flex flex-col items-center justify-center space-y-2 p-16"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="opacity-30">
                    {{ 'BOOKINGS.PARKING_LIST_LOADING' | translate }}
                </p>
            </div>
        }
    `, imports: [
      TranslatePipe,
      IconComponent,
      MatProgressSpinnerModule,
      MatRippleModule,
      AuthenticatedImageDirective
    ] }]
  }], null, { active: [{ type: Input, args: [{ isSignal: true, alias: "active", required: false }] }], selected: [{ type: Input, args: [{ isSignal: true, alias: "selected", required: false }] }], favorites: [{ type: Input, args: [{ isSignal: true, alias: "favorites", required: false }] }], onSelect: [{ type: Output, args: ["onSelect"] }], toggleFav: [{ type: Output, args: ["toggleFav"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingListComponent, { className: "ParkingListComponent", filePath: "libs/bookings/src/lib/parking-select-modal/parking-list.component.ts", lineNumber: 131 });
})();

// libs/bookings/src/lib/parking-select-modal/parking-map.component.ts
var _c04 = () => ({ controls: true });
var _c12 = () => ({ standalone: true });
function ParkingMapComponent_Conditional_0_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 8);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lvl_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, lvl_r3.parent_id)?.display_name, " ");
  }
}
function ParkingMapComponent_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 5)(1, "div", 6);
    \u0275\u0275conditionalCreate(2, ParkingMapComponent_Conditional_0_For_5_Conditional_2_Template, 5, 3, "div", 7);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lvl_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", lvl_r3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region() ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", lvl_r3.display_name || lvl_r3.name, " ");
  }
}
function ParkingMapComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 3)(2, "mat-select", 4);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ParkingMapComponent_Conditional_0_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.level, $event) || (ctx_r1.level = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ParkingMapComponent_Conditional_0_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_ids: [$event.id] }));
    });
    \u0275\u0275repeaterCreate(4, ParkingMapComponent_Conditional_0_For_5_Template, 5, 3, "mat-option", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.level);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c12))("placeholder", \u0275\u0275pipeBind1(3, 3, "COMMON.LEVEL_ANY"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.levels());
  }
}
var ParkingMapComponent = class _ParkingMapComponent {
  constructor() {
    this._state = inject(BookingFormService);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._use_region = this._settings.signal("use_region", false);
    this.is_displayed = input(
      false,
      ...ngDevMode ? [{ debugName: "is_displayed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active = model(
      "",
      ...ngDevMode ? [{ debugName: "active" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.onSelect = output();
    this.parkings = this._state.available_resources;
    this.loading = this._state.loading;
    this.zoom = model(
      1,
      ...ngDevMode ? [{ debugName: "zoom" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.center = model(
      { x: 0.5, y: 0.5 },
      ...ngDevMode ? [{ debugName: "center" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.level = signal(
      void 0,
      ...ngDevMode ? [{ debugName: "level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.coordinates = signal(
      void 0,
      ...ngDevMode ? [{ debugName: "coordinates" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._change = signal(
      0,
      ...ngDevMode ? [{ debugName: "_change" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.levels = computed(
      () => {
        const region = this._org.active_region();
        const bld = this._org.active_building();
        const level_list = this._use_region() ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld);
        const viewable_levels = level_list.filter((lvl) => lvl.tags.includes("parking"));
        return viewable_levels.sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || "").localeCompare(b.display_name || ""));
      },
      ...ngDevMode ? [{ debugName: "levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._select_default_level = effect(
      () => {
        const levels = this.levels();
        if (!this.level() && levels.length) {
          this.level.set(levels[0]);
        }
      },
      ...ngDevMode ? [{ debugName: "_select_default_level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.setOptions = (o) => this._state.setOptions(o);
    this.map_url = computed(
      () => this.level()?.map_id || "",
      ...ngDevMode ? [{ debugName: "map_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.actions = computed(
      () => this._state.available_resources().map((parking) => ({
        id: parking.map_id || parking.id,
        action: ["touchend", "mouseup"],
        callback: () => this.selectParking(parking)
      })),
      ...ngDevMode ? [{ debugName: "actions" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = computed(
      () => {
        const space_list = this._state.resources();
        const available = this._state.available_resources();
        return this._settings.get("app.parkings.hide_user") ? [] : space_list.map((space) => {
          const status = available.find((_) => _.id === space.id) ? "free" : this._state.resourceUserName(space.id) ? "busy" : "not-bookable";
          return {
            location: space.map_id,
            content: ExploreParkingInfoComponent,
            hover: true,
            data: __spreadProps(__spreadValues({}, space), {
              status
            })
          };
        });
      },
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.styles = computed(
      () => {
        const parkings = this._state.resources();
        const free_parkings = this._state.available_resources();
        this._change();
        return parkings.reduce((styles, parking) => {
          const colours = this._settings.get("app.explore.colors") || {};
          const status = this.active() === parking.id ? "pending" : free_parkings.find((_) => _.id === parking.id) ? "free" : this._state.resourceUserName(parking.id) ? "busy" : "not-bookable";
          styles[`#${parking.map_id || parking.id}`] = {
            fill: colours[`parking-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`]
          };
          return styles;
        }, {});
      },
      ...ngDevMode ? [{ debugName: "styles" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.use_region = this._use_region;
    effect(() => {
      this.active();
      this._change.set(Date.now());
    });
    effect(() => {
      const { zone_id } = this._state.options();
      const level = this._org.levelWithID([zone_id]);
      if (level)
        this.level.set(level);
    });
  }
  ngOnInit() {
    setTimeout(() => {
      if (!this.level()) {
        const list = this.levels();
        if (list.length <= 0)
          return;
        this._state.setOptions({ zone_id: list[0].id });
      }
    }, 300);
  }
  selectParking(parking) {
    this.onSelect.emit(parking);
    this.active.set(parking.id);
    this._change.set(Date.now());
  }
  setLevel(level) {
    this.setOptions({ zone_id: level?.id });
    const bld = this._org.buildings.find((_) => _.id === level?.parent_id);
    if (bld) {
      const [latitude, longitude] = bld.location.split(",").map((_) => parseFloat(_));
      this.coordinates.set({ latitude, longitude });
    }
    this.level.set(level);
  }
  setZoom(new_zoom) {
    this.zoom.set(Math.max(0.5, Math.min(10, new_zoom)));
  }
  resetMap() {
    this.zoom.set(1);
    this.center.set({ x: 0.5, y: 0.5 });
  }
  static {
    this.\u0275fac = function ParkingMapComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingMapComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingMapComponent, selectors: [["parking-space-map"]], inputs: { is_displayed: [1, "is_displayed"], active: [1, "active"], zoom: [1, "zoom"], center: [1, "center"] }, outputs: { active: "activeChange", onSelect: "onSelect", zoom: "zoomChange", center: "centerChange" }, decls: 3, vars: 9, consts: [[1, "border-base-200", "bg-base-100", "w-full", "border-b", "p-2"], [1, "relative", "w-full", "flex-1"], [3, "zoomChange", "centerChange", "src", "zoom", "center", "styles", "features", "actions", "options"], ["levels", "", "appearance", "outline", 1, "no-subscript", "w-full"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"]], template: function ParkingMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ParkingMapComponent_Conditional_0_Template, 6, 6, "div", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "interactive-map", 2);
        \u0275\u0275twoWayListener("zoomChange", function ParkingMapComponent_Template_interactive_map_zoomChange_2_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.zoom, $event) || (ctx.zoom = $event);
          return $event;
        })("centerChange", function ParkingMapComponent_Template_interactive_map_centerChange_2_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.center, $event) || (ctx.center = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.levels()?.length ? 0 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("src", ctx.map_url());
        \u0275\u0275twoWayProperty("zoom", ctx.zoom)("center", ctx.center);
        \u0275\u0275property("styles", ctx.styles())("features", ctx.features())("actions", ctx.actions())("options", \u0275\u0275pureFunction0(8, _c04));
      }
    }, dependencies: [
      InteractiveMapComponent,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      FormsModule,
      NgControlStatus,
      NgModel,
      TranslatePipe,
      BuildingPipe
    ], styles: ["\n[_nghost-%COMP%] {\n  position: relative;\n  background: rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=parking-map.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingMapComponent, [{
    type: Component,
    args: [{ selector: "parking-space-map", template: `
        @if (levels()?.length) {
            <div class="border-base-200 bg-base-100 w-full border-b p-2">
                <mat-form-field
                    levels
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <mat-select
                        name="location"
                        [(ngModel)]="level"
                        (ngModelChange)="setOptions({ zone_ids: [$event.id] })"
                        [ngModelOptions]="{ standalone: true }"
                        [placeholder]="'COMMON.LEVEL_ANY' | translate"
                    >
                        @for (lvl of levels(); track lvl) {
                            <mat-option [value]="lvl">
                                <div class="flex flex-col-reverse">
                                    @if (use_region()) {
                                        <div class="text-xs opacity-30">
                                            {{
                                                (lvl.parent_id | building)
                                                    ?.display_name
                                            }}
                                            <span class="opacity-0"> - </span>
                                        </div>
                                    }
                                    <div>
                                        {{ lvl.display_name || lvl.name }}
                                    </div>
                                </div>
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
        }
        <div class="relative w-full flex-1">
            <interactive-map
                [src]="map_url()"
                [(zoom)]="zoom"
                [(center)]="center"
                [styles]="styles()"
                [features]="features()"
                [actions]="actions()"
                [options]="{ controls: true }"
            ></interactive-map>
        </div>
    `, imports: [
      InteractiveMapComponent,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      TranslatePipe,
      BuildingPipe
    ], styles: ["/* angular:styles/component:css;5b4ed0a87238b487692a2c306efe479639b0f8e929cffac085c91f6d64279717;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/parking-select-modal/parking-map.component.ts */\n:host {\n  position: relative;\n  background: rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=parking-map.component.css.map */\n"] }]
  }], () => [], { is_displayed: [{ type: Input, args: [{ isSignal: true, alias: "is_displayed", required: false }] }], active: [{ type: Input, args: [{ isSignal: true, alias: "active", required: false }] }, { type: Output, args: ["activeChange"] }], onSelect: [{ type: Output, args: ["onSelect"] }], zoom: [{ type: Input, args: [{ isSignal: true, alias: "zoom", required: false }] }, { type: Output, args: ["zoomChange"] }], center: [{ type: Input, args: [{ isSignal: true, alias: "center", required: false }] }, { type: Output, args: ["centerChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingMapComponent, { className: "ParkingMapComponent", filePath: "libs/bookings/src/lib/parking-select-modal/parking-map.component.ts", lineNumber: 98 });
})();

// libs/bookings/src/lib/parking-select-modal/parking-select-modal.component.ts
function ParkingSelectModalComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "parking-space-filters-display", 25);
    \u0275\u0275twoWayListener("viewChange", function ParkingSelectModalComponent_Conditional_21_Template_parking_space_filters_display_viewChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.view, $event) || (ctx_r1.view = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("view", ctx_r1.view);
  }
}
function ParkingSelectModalComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "parking-space-list", 26);
    \u0275\u0275listener("toggleFav", function ParkingSelectModalComponent_Conditional_22_Template_parking_space_list_toggleFav_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFavourite($event));
    })("onSelect", function ParkingSelectModalComponent_Conditional_22_Template_parking_space_list_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.displayed.set($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("active", ctx_r1.displayed()?.id || "")("selected", ctx_r1.selected_ids())("favorites", ctx_r1.favorites());
  }
}
function ParkingSelectModalComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "parking-space-map", 27);
    \u0275\u0275listener("onSelect", function ParkingSelectModalComponent_Conditional_23_Template_parking_space_map_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.displayed.set($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("is_displayed", !!ctx_r1.displayed())("active", ctx_r1.displayed()?.id || "");
  }
}
function ParkingSelectModalComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function ParkingSelectModalComponent_Conditional_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show_filters.set(!ctx_r1.show_filters()));
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.show_filters() ? "close" : "filter_list");
  }
}
var FAV_PARKING_KEY = "favourite_parking_spaces";
var ParkingSelectModalComponent = class _ParkingSelectModalComponent {
  constructor() {
    this._dialog_ref = inject(MatDialogRef);
    this._settings = inject(SettingsService);
    this._event_form = inject(BookingFormService);
    this._data = inject(MAT_DIALOG_DATA);
    this.show_filters = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_filters" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.displayed = signal(
      null,
      ...ngDevMode ? [{ debugName: "displayed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected = signal(
      [],
      ...ngDevMode ? [{ debugName: "selected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.view = signal(
      "list",
      ...ngDevMode ? [{ debugName: "view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_safari = signal(
      isMobileSafari(),
      ...ngDevMode ? [{ debugName: "is_safari" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_ids = computed(
      () => this.selected().map((_) => _.id).join(","),
      ...ngDevMode ? [{ debugName: "selected_ids" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.favorites = signal(
      this._settings.get(FAV_PARKING_KEY) || [],
      ...ngDevMode ? [{ debugName: "favorites" }] : (
        /* istanbul ignore next */
        []
      )
    );
    const _data = this._data;
    this.selected.set([..._data.spaces || []]);
    this._event_form.setOptions(_data.options);
  }
  isSelected(id) {
    return !!id && this.selected().some((item) => item.id === id);
  }
  setSelected(item, state) {
    if (!item)
      return;
    const list = this.selected().filter((_) => _.id !== item.id);
    if (state)
      list.push(item);
    this.selected.set(list);
    if (!this._data.options.group && state)
      this._dialog_ref.close([item]);
  }
  toggleFavourite(item) {
    if (!item?.id)
      return;
    const fav_list = this.favorites();
    const new_state = !fav_list.includes(item.id);
    const next_favs = new_state ? [...fav_list, item.id] : fav_list.filter((_) => _ !== item.id);
    this.favorites.set(next_favs);
    this._settings.saveUserSetting(FAV_PARKING_KEY, next_favs);
  }
  static {
    this.\u0275fac = function ParkingSelectModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingSelectModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSelectModalComponent, selectors: [["parking-select-modal"]], decls: 42, vars: 58, consts: [[1, "bg-base-100", "mb-10", "flex", "h-[calc(100vh-2.5rem)]", "max-h-[calc(100vh-2.5rem)]", "w-screen", "flex-col", "space-y-2", "overflow-hidden", "p-2", "sm:m-0", "sm:h-auto", "sm:w-auto"], [1, "bg-base-200", "flex", "h-14", "w-full", "items-center", "space-x-2", "rounded-sm", "border-none", "p-2"], [1, "flex-1", "px-2", "text-xl", "font-medium", "capitalize"], [1, "divide-secondary", "border-secondary", "flex", "divide-x", "rounded-sm", "border"], ["icon", "", "matRipple", "", 1, "rounded-l", "rounded-r-none", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "rounded-l-none", "rounded-r", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "relative", "flex", "h-1/2", "max-h-[calc(100vh-7rem)]", "flex-1", "sm:h-[65vh]", "sm:flex-none", "sm:space-x-2"], [1, "border-base-300", "h-full", "w-full", "overflow-x-hidden", "overflow-y-auto", "rounded-sm", "border", "shadow-sm", "sm:block", "sm:w-[20rem]"], [3, "hide_levels"], [1, "border-base-300", "bg-base-200", "h-full", "w-full", "overflow-auto", "rounded-sm", "border", "sm:w-[20rem]", "lg:block"], [3, "view"], [3, "active", "selected", "favorites"], [1, "h-full", "min-h-[60vh]", "w-full", 3, "is_displayed", "active"], [1, "border-base-300", "h-full", "w-full", "overflow-auto", "rounded-sm", "border", "shadow-sm", "sm:w-[20rem]", "lg:block"], [3, "activeChange", "toggleFav", "close", "space", "active", "hide_map", "fav"], ["icon", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "absolute", "top-3", "right-2", "z-20", "border", "sm:hidden"], [1, "bg-base-200", "flex", "w-full", "items-center", "justify-between", "space-x-2", "rounded-sm", "border-none", "p-2"], ["btn", "", "matRipple", "", "name", "parking-return", 1, "inverse", "bg-base-100", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], [1, "pr-2"], ["btn", "", "matRipple", "", "name", "toggle-parking", 3, "click", "disabled"], [1, "flex", "items-center"], [1, "mr-1"], [3, "viewChange", "view"], [3, "toggleFav", "onSelect", "active", "selected", "favorites"], [1, "h-full", "min-h-[60vh]", "w-full", 3, "onSelect", "is_displayed", "active"], ["icon", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "absolute", "top-3", "right-2", "z-20", "border", "sm:hidden", 3, "click"]], template: function ParkingSelectModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3)(6, "button", 4);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275listener("click", function ParkingSelectModalComponent_Template_button_click_6_listener() {
          return ctx.view.set("list");
        });
        \u0275\u0275elementStart(8, "icon");
        \u0275\u0275text(9, "list");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "button", 5);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275listener("click", function ParkingSelectModalComponent_Template_button_click_10_listener() {
          return ctx.view.set("map");
        });
        \u0275\u0275elementStart(12, "icon");
        \u0275\u0275text(13, "map");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "button", 6)(15, "icon");
        \u0275\u0275text(16, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "main", 7)(18, "div", 8);
        \u0275\u0275element(19, "parking-space-filters", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 10);
        \u0275\u0275conditionalCreate(21, ParkingSelectModalComponent_Conditional_21_Template, 1, 1, "parking-space-filters-display", 11);
        \u0275\u0275conditionalCreate(22, ParkingSelectModalComponent_Conditional_22_Template, 1, 3, "parking-space-list", 12)(23, ParkingSelectModalComponent_Conditional_23_Template, 1, 2, "parking-space-map", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 14)(25, "parking-space-details", 15);
        \u0275\u0275listener("activeChange", function ParkingSelectModalComponent_Template_parking_space_details_activeChange_25_listener($event) {
          return ctx.setSelected(ctx.displayed(), $event);
        })("toggleFav", function ParkingSelectModalComponent_Template_parking_space_details_toggleFav_25_listener() {
          return ctx.toggleFavourite(ctx.displayed());
        })("close", function ParkingSelectModalComponent_Template_parking_space_details_close_25_listener() {
          return ctx.displayed.set(null);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(26, ParkingSelectModalComponent_Conditional_26_Template, 3, 1, "button", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "footer", 17)(28, "button", 18)(29, "div", 19)(30, "icon", 20);
        \u0275\u0275text(31, "done");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 21);
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "button", 22);
        \u0275\u0275listener("click", function ParkingSelectModalComponent_Template_button_click_35_listener() {
          return ctx.setSelected(ctx.displayed(), !ctx.isSelected(ctx.displayed()?.id));
        });
        \u0275\u0275elementStart(36, "div", 23)(37, "icon", 20);
        \u0275\u0275text(38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 24);
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("height", ctx.is_safari() ? "calc(100vh - 80px)" : "");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 48, "BOOKINGS.PARKING_FIND"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("bg-base-100", ctx.view() !== "list")("bg-secondary", ctx.view() === "list")("text-secondary-content", ctx.view() === "list");
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 50, "COMMON.LIST"));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("bg-base-100", ctx.view() !== "map")("bg-secondary", ctx.view() === "map")("text-secondary-content", ctx.view() === "map");
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(11, 52, "COMMON.MAP"));
        \u0275\u0275advance(8);
        \u0275\u0275classProp("hidden", !ctx.show_filters());
        \u0275\u0275advance();
        \u0275\u0275property("hide_levels", ctx.view() !== "list");
        \u0275\u0275advance();
        \u0275\u0275classProp("hidden", ctx.show_filters() || ctx.displayed())("sm:hidden", ctx.displayed())("md:block", !ctx.displayed())("p-2", ctx.view() === "list");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.view() === "list" ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.view() === "list" ? 22 : 23);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("hidden", ctx.show_filters() || !ctx.displayed())("sm:hidden", !ctx.displayed())("md:block", ctx.displayed());
        \u0275\u0275advance();
        \u0275\u0275property("space", ctx.displayed())("active", ctx.isSelected(ctx.displayed()?.id))("hide_map", ctx.view() === "map")("fav", ctx.displayed() ? ctx.favorites().includes(ctx.displayed()?.id) : false);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.displayed() ? 26 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("mat-dialog-close", ctx.selected());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 54, "COMMON.CONFIRM_SELECTION"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("inverse", ctx.isSelected(ctx.displayed()?.id));
        \u0275\u0275property("disabled", !ctx.displayed());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.isSelected(ctx.displayed()?.id) ? "remove" : "add");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 56, ctx.isSelected(ctx.displayed()?.id) ? "COMMON.REMOVE_FROM" : "COMMON.ADD_TO"), " ");
      }
    }, dependencies: [
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      MatTooltipModule,
      MatTooltip,
      ParkingListComponent,
      ParkingDetailsComponent,
      ParkingFiltersComponent,
      ParkingMapComponent,
      ParkingFiltersDisplayComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingSelectModalComponent, [{
    type: Component,
    args: [{ selector: "parking-select-modal", template: `
        <div
            class="bg-base-100 mb-10 flex h-[calc(100vh-2.5rem)] max-h-[calc(100vh-2.5rem)] w-screen flex-col space-y-2 overflow-hidden p-2 sm:m-0 sm:h-auto sm:w-auto"
            [style.height]="is_safari() ? 'calc(100vh - 80px)' : ''"
        >
            <header
                class="bg-base-200 flex h-14 w-full items-center space-x-2 rounded-sm border-none p-2"
            >
                <h2 class="flex-1 px-2 text-xl font-medium capitalize">
                    {{ 'BOOKINGS.PARKING_FIND' | translate }}
                </h2>
                <div
                    class="divide-secondary border-secondary flex divide-x rounded-sm border"
                >
                    <button
                        icon
                        matRipple
                        class="rounded-l rounded-r-none"
                        [class.bg-base-100]="view() !== 'list'"
                        [class.bg-secondary]="view() === 'list'"
                        [class.text-secondary-content]="view() === 'list'"
                        [matTooltip]="'COMMON.LIST' | translate"
                        (click)="view.set('list')"
                    >
                        <icon>list</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        class="rounded-l-none rounded-r"
                        [class.bg-base-100]="view() !== 'map'"
                        [class.bg-secondary]="view() === 'map'"
                        [class.text-secondary-content]="view() === 'map'"
                        [matTooltip]="'COMMON.MAP' | translate"
                        (click)="view.set('map')"
                    >
                        <icon>map</icon>
                    </button>
                </div>
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </header>
            <main
                class="relative flex h-1/2 max-h-[calc(100vh-7rem)] flex-1 sm:h-[65vh] sm:flex-none sm:space-x-2"
            >
                <div
                    class="border-base-300 h-full w-full overflow-x-hidden overflow-y-auto rounded-sm border shadow-sm sm:block sm:w-[20rem]"
                    [class.hidden]="!show_filters()"
                >
                    <parking-space-filters
                        [hide_levels]="view() !== 'list'"
                    ></parking-space-filters>
                </div>
                <div
                    class="border-base-300 bg-base-200 h-full w-full overflow-auto rounded-sm border sm:w-[20rem] lg:block"
                    [class.hidden]="show_filters() || displayed()"
                    [class.sm:hidden]="displayed()"
                    [class.md:block]="!displayed()"
                    [class.p-2]="view() === 'list'"
                >
                    @if (view() === 'list') {
                        <parking-space-filters-display
                            [(view)]="view"
                        ></parking-space-filters-display>
                    }
                    @if (view() === 'list') {
                        <parking-space-list
                            [active]="displayed()?.id || ''"
                            [selected]="selected_ids()"
                            [favorites]="favorites()"
                            (toggleFav)="toggleFavourite($event)"
                            (onSelect)="displayed.set($event)"
                        ></parking-space-list>
                    } @else {
                        <parking-space-map
                            class="h-full min-h-[60vh] w-full"
                            [is_displayed]="!!displayed()"
                            [active]="displayed()?.id || ''"
                            (onSelect)="displayed.set($event)"
                        >
                        </parking-space-map>
                    }
                </div>
                <div
                    class="border-base-300 h-full w-full overflow-auto rounded-sm border shadow-sm sm:w-[20rem] lg:block"
                    [class.hidden]="show_filters() || !displayed()"
                    [class.sm:hidden]="!displayed()"
                    [class.md:block]="displayed()"
                >
                    <parking-space-details
                        [space]="displayed()"
                        [active]="isSelected(displayed()?.id)"
                        [hide_map]="view() === 'map'"
                        (activeChange)="setSelected(displayed(), $event)"
                        [fav]="
                            displayed()
                                ? favorites().includes(displayed()?.id)
                                : false
                        "
                        (toggleFav)="toggleFavourite(displayed())"
                        (close)="displayed.set(null)"
                    ></parking-space-details>
                </div>
                @if (!displayed()) {
                    <button
                        icon
                        matRipple
                        class="border-base-200 bg-base-100 absolute top-3 right-2 z-20 border sm:hidden"
                        (click)="show_filters.set(!show_filters())"
                    >
                        <icon>{{
                            show_filters() ? 'close' : 'filter_list'
                        }}</icon>
                    </button>
                }
            </main>
            <footer
                class="bg-base-200 flex w-full items-center justify-between space-x-2 rounded-sm border-none p-2"
            >
                <button
                    btn
                    matRipple
                    name="parking-return"
                    [mat-dialog-close]="selected()"
                    class="inverse bg-base-100 text-secondary"
                >
                    <div class="flex items-center space-x-2">
                        <icon class="text-xl">done</icon>
                        <div class="pr-2">
                            {{ 'COMMON.CONFIRM_SELECTION' | translate }}
                        </div>
                    </div>
                </button>
                <button
                    btn
                    matRipple
                    name="toggle-parking"
                    [disabled]="!displayed()"
                    [class.inverse]="isSelected(displayed()?.id)"
                    (click)="
                        setSelected(displayed(), !isSelected(displayed()?.id))
                    "
                >
                    <div class="flex items-center">
                        <icon class="text-xl">{{
                            isSelected(displayed()?.id) ? 'remove' : 'add'
                        }}</icon>
                        <div class="mr-1">
                            {{
                                (isSelected(displayed()?.id)
                                    ? 'COMMON.REMOVE_FROM'
                                    : 'COMMON.ADD_TO'
                                ) | translate
                            }}
                        </div>
                    </div>
                </button>
            </footer>
        </div>
    `, imports: [
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatDialogModule,
      MatTooltipModule,
      ParkingListComponent,
      ParkingDetailsComponent,
      ParkingFiltersComponent,
      ParkingMapComponent,
      ParkingFiltersDisplayComponent
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSelectModalComponent, { className: "ParkingSelectModalComponent", filePath: "libs/bookings/src/lib/parking-select-modal/parking-select-modal.component.ts", lineNumber: 205 });
})();

export {
  FAV_PARKING_KEY,
  ParkingSelectModalComponent
};
//# sourceMappingURL=chunk-5RCI73IE.js.map
