import {
  BookingFormService
} from "./chunk-5G6QFS7A.js";
import "./chunk-HFAMDHKE.js";
import {
  AssetListFieldComponent,
  BuildingPipe,
  DEFAULT_COLOURS,
  SettingsToggleComponent
} from "./chunk-H4WFU6RP.js";
import "./chunk-5AYLDDYO.js";
import {
  ImageCarouselComponent
} from "./chunk-6RVYK24L.js";
import "./chunk-2PAQ7CBY.js";
import {
  InteractiveMapComponent,
  MapPinComponent
} from "./chunk-TS46SHO7.js";
import "./chunk-6P6WLJIG.js";
import "./chunk-NLO2TYSQ.js";
import {
  DateFieldComponent,
  DurationFieldComponent,
  MatCheckbox,
  MatCheckboxModule,
  TimeFieldComponent
} from "./chunk-K35L3W6R.js";
import {
  AuthenticatedImageDirective
} from "./chunk-W4SY6U6D.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSelect,
  MatSelectModule
} from "./chunk-NXL7DI36.js";
import "./chunk-XYA3CRKR.js";
import "./chunk-RGDBYRTM.js";
import "./chunk-TEJQBDR7.js";
import "./chunk-QX4ZGB5I.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-NNU5VX5N.js";
import "./chunk-WCVXGRBT.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule
} from "./chunk-Y25ZPHN7.js";
import "./chunk-NWYSQBBA.js";
import {
  FormField
} from "./chunk-RAJY57NQ.js";
import {
  TranslatePipe
} from "./chunk-MW4PPV3X.js";
import {
  CustomTooltipComponent
} from "./chunk-N33Q3NP4.js";
import "./chunk-CAYKQ5AJ.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-5ZJWUDYY.js";
import {
  AsyncHandler,
  FormsModule,
  IconComponent,
  MAP_FEATURE_DATA,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatOption,
  MatRipple,
  MatRippleModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  OrganisationService,
  SETTING_KEYS,
  SettingsService,
  addDays,
  endOfDay,
  isMobileSafari,
  isSameDay,
  onFieldChange,
  settingSignal,
  ɵNgNoValidate
} from "./chunk-XVLJS4JE.js";
import {
  CommonModule,
  Component,
  DatePipe,
  ElementRef,
  Injector,
  Input,
  Output,
  Router,
  UpperCasePipe,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  model,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RKFYMMSC.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/bookings/src/lib/desk-select-modal/desk-details.component.ts
var _c0 = () => [];
var _c1 = () => ({ disable_pan: true, disable_zoom: true });
function DeskDetailsComponent_Conditional_0_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "image-carousel", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("images", ctx_r1.desk().images);
  }
}
function DeskDetailsComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1);
    \u0275\u0275conditionalCreate(1, DeskDetailsComponent_Conditional_0_Conditional_0_Conditional_1_Template, 1, 1, "image-carousel", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.desk().images?.length ? 1 : -1);
  }
}
function DeskDetailsComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "section", 2);
  }
}
function DeskDetailsComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 7);
  }
}
function DeskDetailsComponent_Conditional_0_Conditional_33_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feat_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", feat_r3, " ");
  }
}
function DeskDetailsComponent_Conditional_0_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "h2", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, DeskDetailsComponent_Conditional_0_Conditional_33_For_5_Template, 3, 1, "div", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.FEATURES"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.desk().features || \u0275\u0275pureFunction0(3, _c0));
  }
}
function DeskDetailsComponent_Conditional_0_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14);
    \u0275\u0275element(1, "interactive-map", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.map_url())("focus", ctx_r1.desk().map_id || ctx_r1.desk().id)("features", ctx_r1.features())("options", \u0275\u0275pureFunction0(4, _c1));
  }
}
function DeskDetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, DeskDetailsComponent_Conditional_0_Conditional_0_Template, 2, 1, "section", 1)(1, DeskDetailsComponent_Conditional_0_Conditional_1_Template, 1, 0, "section", 2);
    \u0275\u0275elementStart(2, "button", 3);
    \u0275\u0275listener("click", function DeskDetailsComponent_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function DeskDetailsComponent_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFav.emit());
    });
    \u0275\u0275elementStart(6, "icon", 5);
    \u0275\u0275text(7, "favorite");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 6);
    \u0275\u0275conditionalCreate(9, DeskDetailsComponent_Conditional_0_Conditional_9_Template, 1, 0, "div", 7);
    \u0275\u0275elementStart(10, "section", 8)(11, "h2", 9);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "section", 10)(14, "h2", 11);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 12)(18, "icon");
    \u0275\u0275text(19, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 12)(24, "icon");
    \u0275\u0275text(25, "desk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 12)(29, "icon");
    \u0275\u0275text(30, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(33, DeskDetailsComponent_Conditional_0_Conditional_33_Template, 6, 4, "section", 13);
    \u0275\u0275conditionalCreate(34, DeskDetailsComponent_Conditional_0_Conditional_34_Template, 2, 5, "section", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.desk().images?.length ? 0 : 1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("text-info-content", ctx_r1.fav())("bg-info!", ctx_r1.fav());
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r1.fav() ? "material-symbols-rounded" : "material-symbols-outlined");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.desk().images?.length ? 9 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.desk().display_name || ctx_r1.desk().name || ctx_r1.desk().id, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 14, "COMMON.DETAILS"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 16, "BOOKINGS.DESK_COUNT_LONE"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.desk().display_name || ctx_r1.desk().name || ctx_r1.desk().id, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.desk().zone?.display_name || ctx_r1.desk().zone?.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.desk().features?.length ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.hide_map() ? 34 : -1);
  }
}
function DeskDetailsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "BOOKINGS.DESK_SELECT_MSG"), " ");
  }
}
var DeskDetailsComponent = class _DeskDetailsComponent {
  constructor() {
    this.desk = input(
      void 0,
      ...ngDevMode ? [{ debugName: "desk" }] : (
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
    this.hide_map = input(
      false,
      ...ngDevMode ? [{ debugName: "hide_map" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.close = output();
    this.toggleFav = output();
    this.activeChange = output();
    this.map_url = computed(
      () => this.desk()?.zone?.map_id || "",
      ...ngDevMode ? [{ debugName: "map_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = computed(
      () => {
        const desk = this.desk();
        if (!desk)
          return [];
        return [
          {
            location: desk.map_id || desk.id,
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
    this.\u0275fac = function DeskDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskDetailsComponent, selectors: [["desk-details"]], inputs: { desk: [1, "desk"], fav: [1, "fav"], active: [1, "active"], hide_map: [1, "hide_map"] }, outputs: { close: "close", toggleFav: "toggleFav", activeChange: "activeChange" }, decls: 2, vars: 1, consts: [["empty", "", 1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "relative", "h-40", "w-full"], [1, "h-10", "w-full", "lg:hidden"], ["icon", "", "matRipple", "", "name", "close-desk-details", 1, "bg-base-200", "text-base-content", "absolute", "top-2", "left-2", "z-20", "lg:hidden", 3, "click"], ["icon", "", "matRipple", "", "name", "toggle-desk-favourite-details", 1, "bg-base-200", "absolute", "top-2", "right-2", "z-20", 3, "click"], [3, "className"], [1, "space-y-2", "px-2", "pt-0", "pb-2"], [1, "h-8", "w-full"], ["actions", "", 1, "z-0", "p-2"], [1, "mt-4", "mb-2", "text-2xl", "font-medium"], ["details", "", 1, "border-base-400", "relative", "space-y-2", "rounded-sm", "border", "px-3", "pt-4", "pb-2"], [1, "bg-base-100", "absolute", "top-0", "left-2", "-translate-y-1/2", "px-2", "text-lg", "font-medium"], [1, "flex", "items-center", "space-x-2"], ["facilities", "", 1, "border-base-400", "relative", "mt-4!", "space-y-2", "rounded-sm", "border", "px-2", "pt-1", "pb-1"], ["map", "", 1, "bg-base-200", "relative", "mx-auto", "h-64", "w-full", "overflow-hidden", "rounded-sm", "sm:h-48"], [1, "absolute", "inset-0", 3, "images"], [1, "flex", "flex-wrap", "items-center"], ["for", "feat", 1, "border-base-300", "m-1", "rounded-full", "border", "px-4", "py-2", "text-sm", "capitalize"], [1, "pointer-events-none", 3, "src", "focus", "features", "options"], [1, "text-center", "opacity-30"]], template: function DeskDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, DeskDetailsComponent_Conditional_0_Template, 35, 18)(1, DeskDetailsComponent_Conditional_1_Template, 4, 3, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.desk() ? 0 : 1);
      }
    }, dependencies: [
      IconComponent,
      InteractiveMapComponent,
      ImageCarouselComponent,
      MatRippleModule,
      MatRipple,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=desk-details.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskDetailsComponent, [{
    type: Component,
    args: [{ selector: "desk-details", template: `
        @if (desk()) {
            @if (desk().images?.length) {
                <section class="relative h-40 w-full">
                    @if (desk().images?.length) {
                        <image-carousel
                            [images]="desk().images"
                            class="absolute inset-0"
                        ></image-carousel>
                    }
                </section>
            } @else {
                <section class="h-10 w-full lg:hidden"></section>
            }
            <button
                icon
                matRipple
                name="close-desk-details"
                (click)="close.emit()"
                class="bg-base-200 text-base-content absolute top-2 left-2 z-20 lg:hidden"
            >
                <icon>arrow_back</icon>
            </button>
            <button
                icon
                matRipple
                name="toggle-desk-favourite-details"
                class="bg-base-200 absolute top-2 right-2 z-20"
                [class.text-info-content]="fav()"
                [class.bg-info!]="fav()"
                (click)="toggleFav.emit()"
            >
                <icon
                    [className]="
                        fav()
                            ? 'material-symbols-rounded'
                            : 'material-symbols-outlined'
                    "
                    >favorite</icon
                >
            </button>
            <div class="space-y-2 px-2 pt-0 pb-2">
                @if (!desk().images?.length) {
                    <div class="h-8 w-full"></div>
                }
                <section actions class="z-0 p-2">
                    <h2 class="mt-4 mb-2 text-2xl font-medium">
                        {{ desk().display_name || desk().name || desk().id }}
                    </h2>
                </section>
                <section
                    details
                    class="border-base-400 relative space-y-2 rounded-sm border px-3 pt-4 pb-2"
                >
                    <h2
                        class="bg-base-100 absolute top-0 left-2 -translate-y-1/2 px-2 text-lg font-medium"
                    >
                        {{ 'COMMON.DETAILS' | translate }}
                    </h2>
                    <div class="flex items-center space-x-2">
                        <icon>person</icon>
                        <p>{{ 'BOOKINGS.DESK_COUNT_LONE' | translate }}</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <icon>desk</icon>
                        <p>
                            {{
                                desk().display_name || desk().name || desk().id
                            }}
                        </p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <icon>place</icon>
                        <p>
                            {{ desk().zone?.display_name || desk().zone?.name }}
                        </p>
                    </div>
                </section>
                @if (desk().features?.length) {
                    <section
                        facilities
                        class="border-base-400 relative mt-4! space-y-2 rounded-sm border px-2 pt-1 pb-1"
                    >
                        <h2
                            class="bg-base-100 absolute top-0 left-2 -translate-y-1/2 px-2 text-lg font-medium"
                        >
                            {{ 'COMMON.FEATURES' | translate }}
                        </h2>
                        @for (feat of desk().features || []; track feat) {
                            <div class="flex flex-wrap items-center">
                                <div
                                    for="feat"
                                    class="border-base-300 m-1 rounded-full border px-4 py-2 text-sm capitalize"
                                >
                                    {{ feat }}
                                </div>
                            </div>
                        }
                    </section>
                }
                @if (!hide_map()) {
                    <section
                        map
                        class="bg-base-200 relative mx-auto h-64 w-full overflow-hidden rounded-sm sm:h-48"
                    >
                        <interactive-map
                            class="pointer-events-none"
                            [src]="map_url()"
                            [focus]="desk().map_id || desk().id"
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
                class="flex h-full w-full flex-col items-center justify-center space-y-2"
            >
                <p class="text-center opacity-30">
                    {{ 'BOOKINGS.DESK_SELECT_MSG' | translate }}
                </p>
            </div>
        }
    `, imports: [
      TranslatePipe,
      IconComponent,
      InteractiveMapComponent,
      ImageCarouselComponent,
      MatRippleModule
    ], styles: ["/* angular:styles/component:css;726748c2414197d0b1210ead97f5552a150ccdc9b0475e0053e8ed5e76b597ad;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/desk-select-modal/desk-details.component.ts */\n:host {\n  position: relative;\n}\n/*# sourceMappingURL=desk-details.component.css.map */\n"] }]
  }], null, { desk: [{ type: Input, args: [{ isSignal: true, alias: "desk", required: false }] }], fav: [{ type: Input, args: [{ isSignal: true, alias: "fav", required: false }] }], active: [{ type: Input, args: [{ isSignal: true, alias: "active", required: false }] }], hide_map: [{ type: Input, args: [{ isSignal: true, alias: "hide_map", required: false }] }], close: [{ type: Output, args: ["close"] }], toggleFav: [{ type: Output, args: ["toggleFav"] }], activeChange: [{ type: Output, args: ["activeChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskDetailsComponent, { className: "DeskDetailsComponent", filePath: "libs/bookings/src/lib/desk-select-modal/desk-details.component.ts", lineNumber: 158 });
})();

// libs/bookings/src/lib/desk-select-modal/desk-filters-display.component.ts
var _c02 = () => [];
function DeskFiltersDisplayComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function DeskFiltersDisplayComponent_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFeatures());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.FILTERS_CLEAR"), " ");
  }
}
function DeskFiltersDisplayComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "date");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, ctx_r1.start(), ctx_r1.time_format()), " \u2014 ", \u0275\u0275pipeBind2(2, 5, ctx_r1.end(), ctx_r1.time_format()), " ");
  }
}
function DeskFiltersDisplayComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "COMMON.ALL_DAY"), " ");
  }
}
function DeskFiltersDisplayComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 7);
    \u0275\u0275listener("click", function DeskFiltersDisplayComponent_For_9_Template_button_click_3_listener() {
      const feat_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFeature(feat_r4, false));
    });
    \u0275\u0275elementStart(4, "icon", 8);
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feat_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feat_r4);
  }
}
function DeskFiltersDisplayComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 9);
    \u0275\u0275listener("click", function DeskFiltersDisplayComponent_Conditional_10_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ show_fav: false }));
    });
    \u0275\u0275elementStart(5, "icon", 8);
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "COMMON.FAVOURITES_ONLY"));
  }
}
var DeskFiltersDisplayComponent = class _DeskFiltersDisplayComponent {
  constructor() {
    this._state = inject(BookingFormService);
    this._settings = inject(SettingsService);
    this.view = input(
      "list",
      ...ngDevMode ? [{ debugName: "view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.viewChange = output();
    this.options = this._state.options;
    this.setOptions = (o) => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
    this.clearFeatures = () => this._state.setOptions({ features: [] });
    this._form_value = this._state.model;
    this.all_day = computed(
      () => this._form_value().all_day,
      ...ngDevMode ? [{ debugName: "all_day" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.start = computed(
      () => this._form_value().date,
      ...ngDevMode ? [{ debugName: "start" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end = computed(
      () => {
        const { date, duration, all_day } = this._form_value();
        if (all_day)
          return endOfDay(date);
        return date + duration * 60 * 1e3;
      },
      ...ngDevMode ? [{ debugName: "end" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.time_format = this._settings.time_format_signal;
  }
  static {
    this.\u0275fac = function DeskFiltersDisplayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskFiltersDisplayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskFiltersDisplayComponent, selectors: [["desk-filters-display"]], inputs: { view: [1, "view"] }, outputs: { viewChange: "viewChange" }, decls: 11, vars: 10, consts: [["filters", "", 1, "border-base-300", "bg-base-100", "sticky", "-top-1", "z-20", "-mx-1", "mb-4!", "flex", "w-[calc(100%+0.5rem)]", "flex-wrap", "items-center", "rounded-sm", "border", "p-1", "pr-10!", "sm:pr-1!"], ["btn", "", "matRipple", "", "name", "clear-desk-filters", 1, "mr-2", "mb-2", "min-h-8"], ["filter-item", "", "date", ""], ["filter-item", "", "time", ""], ["filter-item", "", "features", ""], ["filter-item", ""], ["btn", "", "matRipple", "", "name", "clear-desk-filters", 1, "mr-2", "mb-2", "min-h-8", 3, "click"], ["icon", "", "matRipple", "", "name", "remove-desk-filter", 1, "-mr-4", 3, "click"], [1, "text-base"], ["icon", "", "matRipple", "", "name", "remove-desk-favs-filter", 1, "-mr-4", 3, "click"]], template: function DeskFiltersDisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275conditionalCreate(1, DeskFiltersDisplayComponent_Conditional_1_Template, 3, 3, "button", 1);
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275conditionalCreate(6, DeskFiltersDisplayComponent_Conditional_6_Template, 3, 8);
        \u0275\u0275conditionalCreate(7, DeskFiltersDisplayComponent_Conditional_7_Template, 2, 3);
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(8, DeskFiltersDisplayComponent_For_9_Template, 6, 1, "div", 4, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275conditionalCreate(10, DeskFiltersDisplayComponent_Conditional_10_Template, 7, 3, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.options()?.features || \u0275\u0275pureFunction0(8, _c02)).length > 1 ? 1 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 5, ctx.start(), "mediumDate"));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.all_day() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.all_day() ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.options()?.features || \u0275\u0275pureFunction0(9, _c02));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.options()?.show_fav ? 10 : -1);
      }
    }, dependencies: [CommonModule, IconComponent, MatRippleModule, MatRipple, DatePipe, TranslatePipe], styles: ["\n[filter-item][_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  margin: 0.25rem;\n  background-color: var(--%NS%base-100);\n}\n[filter-item][_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=desk-filters-display.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskFiltersDisplayComponent, [{
    type: Component,
    args: [{ selector: "desk-filters-display", template: `
        <section
            filters
            class="border-base-300 bg-base-100 sticky -top-1 z-20 -mx-1 mb-4! flex w-[calc(100%+0.5rem)] flex-wrap items-center rounded-sm border p-1 pr-10! sm:pr-1!"
        >
            @if ((options()?.features || []).length > 1) {
                <button
                    btn
                    matRipple
                    name="clear-desk-filters"
                    class="mr-2 mb-2 min-h-8"
                    (click)="clearFeatures()"
                >
                    {{ 'COMMON.FILTERS_CLEAR' | translate }}
                </button>
            }
            <div filter-item date>{{ start() | date: 'mediumDate' }}</div>
            <div filter-item time>
                @if (!all_day()) {
                    {{ start() | date: time_format() }} &mdash;
                    {{ end() | date: time_format() }}
                }
                @if (all_day()) {
                    {{ 'COMMON.ALL_DAY' | translate }}
                }
            </div>
            @for (feat of options()?.features || []; track feat) {
                <div filter-item features>
                    <p>{{ feat }}</p>
                    <button
                        icon
                        matRipple
                        name="remove-desk-filter"
                        class="-mr-4"
                        (click)="setFeature(feat, false)"
                    >
                        <icon class="text-base">close</icon>
                    </button>
                </div>
            }
            @if (options()?.show_fav) {
                <div filter-item>
                    <span>{{ 'COMMON.FAVOURITES_ONLY' | translate }}</span>
                    <button
                        icon
                        matRipple
                        name="remove-desk-favs-filter"
                        class="-mr-4"
                        (click)="setOptions({ show_fav: false })"
                    >
                        <icon class="text-base">close</icon>
                    </button>
                </div>
            }
        </section>
    `, imports: [CommonModule, IconComponent, TranslatePipe, MatRippleModule], styles: ["/* angular:styles/component:css;67385409023e7f9d0ece1c14973329370a186514fd6492d3d6b63f11e621d9e3;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/desk-select-modal/desk-filters-display.component.ts */\n[filter-item] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  margin: 0.25rem;\n  background-color: var(--base-100);\n}\n[filter-item]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item] > * + * {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=desk-filters-display.component.css.map */\n"] }]
  }], null, { view: [{ type: Input, args: [{ isSignal: true, alias: "view", required: false }] }], viewChange: [{ type: Output, args: ["viewChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskFiltersDisplayComponent, { className: "DeskFiltersDisplayComponent", filePath: "libs/bookings/src/lib/desk-select-modal/desk-filters-display.component.ts", lineNumber: 94 });
})();

// libs/bookings/src/lib/desk-select-modal/desk-filters.component.ts
var _c03 = () => ({ standalone: true });
var _c12 = () => [];
function DeskFiltersComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.LOCATION"), " ");
  }
}
function DeskFiltersComponent_Conditional_11_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
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
function DeskFiltersComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 7)(1, "mat-select", 14);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function DeskFiltersComponent_Conditional_11_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setRegion($event));
    });
    \u0275\u0275repeaterCreate(3, DeskFiltersComponent_Conditional_11_For_4_Template, 2, 2, "mat-option", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.region())("ngModelOptions", \u0275\u0275pureFunction0(5, _c03))("placeholder", \u0275\u0275pipeBind1(2, 3, "COMMON.REGION_ANY"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.regions());
  }
}
function DeskFiltersComponent_Conditional_12_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
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
function DeskFiltersComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 7)(1, "mat-select", 16);
    \u0275\u0275listener("ngModelChange", function DeskFiltersComponent_Conditional_12_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setBuilding($event));
    });
    \u0275\u0275repeaterCreate(2, DeskFiltersComponent_Conditional_12_For_3_Template, 2, 2, "mat-option", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.building())("ngModelOptions", \u0275\u0275pureFunction0(3, _c03))("placeholder", ctx_r1.building()?.display_name || ctx_r1.building()?.name);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.buildings());
  }
}
function DeskFiltersComponent_Conditional_13_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lvl_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, lvl_r7.parent_id)?.display_name, " ");
  }
}
function DeskFiltersComponent_Conditional_13_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15)(1, "div", 18);
    \u0275\u0275conditionalCreate(2, DeskFiltersComponent_Conditional_13_For_4_Conditional_2_Template, 5, 3, "div", 19);
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
function DeskFiltersComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 7)(1, "mat-select", 17);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function DeskFiltersComponent_Conditional_13_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_id: $event }));
    });
    \u0275\u0275repeaterCreate(3, DeskFiltersComponent_Conditional_13_For_4_Template, 5, 3, "mat-option", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.options()?.zone_id)("ngModelOptions", \u0275\u0275pureFunction0(5, _c03))("placeholder", \u0275\u0275pipeBind1(2, 3, "COMMON.LEVEL_ANY"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.levels());
  }
}
function DeskFiltersComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "mat-checkbox", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.all_day);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.ALL_DAY"), " ");
  }
}
function DeskFiltersComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 22)(2, "label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a-time-field", 23);
    \u0275\u0275listener("ngModelChange", function DeskFiltersComponent_Conditional_22_Template_a_time_field_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.model.update((m) => __spreadProps(__spreadValues({}, m), { date: $event })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 22)(7, "label");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "a-duration-field", 24);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 15, "FORM.TIME_START"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.model().date)("ngModelOptions", \u0275\u0275pureFunction0(19, _c03))("use_24hr", ctx_r1.use_24hr())("timezone", ctx_r1.timezone())("range", ctx_r1.bookable_hours());
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 17, "FORM.TIME_END"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r1.form.duration)("time", ctx_r1.model().date)("max", 10 * 60)("min", 60)("step", 60)("use_24hr", ctx_r1.use_24hr())("timezone", ctx_r1.timezone())("end_time", ctx_r1.bookable_hours()?.end);
    \u0275\u0275control();
  }
}
function DeskFiltersComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 12)(1, "h2", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 26)(5, "settings-toggle", 27);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("ngModelChange", function DeskFiltersComponent_Conditional_23_Template_settings_toggle_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
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
    \u0275\u0275property("label", \u0275\u0275pipeBind1(6, 6, "COMMON.FAVOURITES_ONLY"))("ngModel", ctx_r1.options()?.show_fav)("ngModelOptions", \u0275\u0275pureFunction0(8, _c03));
    \u0275\u0275control();
  }
}
function DeskFiltersComponent_Conditional_24_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "settings-toggle", 29);
    \u0275\u0275listener("ngModelChange", function DeskFiltersComponent_Conditional_24_For_5_Template_settings_toggle_ngModelChange_1_listener($event) {
      const feat_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setFeature(feat_r11, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feat_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("label", feat_r11)("ngModel", (ctx_r1.options()?.features || \u0275\u0275pureFunction0(3, _c12)).includes(feat_r11))("ngModelOptions", \u0275\u0275pureFunction0(4, _c03));
    \u0275\u0275control();
  }
}
function DeskFiltersComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "h2", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, DeskFiltersComponent_Conditional_24_For_5_Template, 2, 5, "div", 28, \u0275\u0275repeaterTrackByIdentity);
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
var DeskFiltersComponent = class _DeskFiltersComponent {
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
        const resources = this._state.resources();
        const level_list = this._use_region() ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld);
        const level_ids = new Set(resources.map((resource) => resource.zone?.id).filter((_) => _));
        const viewable_levels = level_list.filter((lvl) => !lvl.tags.includes("parking") && level_ids.has(lvl.id));
        return viewable_levels.sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || "").localeCompare(b.display_name || ""));
      },
      ...ngDevMode ? [{ debugName: "levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_level_select = computed(
      () => !this.hide_levels() && this.levels().length > 1,
      ...ngDevMode ? [{ debugName: "show_level_select" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._clear_invalid_level = effect(
      () => {
        const zone_id = this.options()?.zone_id;
        if (!zone_id)
          return;
        if (!this._state.resources().length)
          return;
        if (!this.levels().some((lvl) => lvl.id === zone_id)) {
          this._state.setOptions({ zone_id: void 0 });
        }
      },
      ...ngDevMode ? [{ debugName: "_clear_invalid_level" }] : (
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
    this._desk_bookable_hours = this._settings.signal("desks.bookable_hours", null);
    this._booking_bookable_hours = this._settings.signal("bookings.bookable_hours", null);
    this._bookable_hours = computed(
      () => this._desk_bookable_hours() || this._booking_bookable_hours(),
      ...ngDevMode ? [{ debugName: "_bookable_hours" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._allow_time_changes = this._settings.signal("desks.allow_time_changes", false);
    this._allow_all_day = this._settings.signal("desks.allow_all_day", false);
    this._available_period = this._settings.signal("desks.available_period", 90);
    this._use_24hr = this._settings.signal("use_24_hour_time", false);
    this._use_building_timezone = this._settings.signal("events.use_building_timezone", false);
    this.bookable_hours = this._bookable_hours;
    this.allow_time_changes = this._allow_time_changes;
    this.allow_all_day = computed(
      () => this.allow_time_changes() && this._allow_all_day(),
      ...ngDevMode ? [{ debugName: "allow_all_day" }] : (
        /* istanbul ignore next */
        []
      )
    );
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
  static {
    this.\u0275fac = function DeskFiltersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskFiltersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskFiltersComponent, selectors: [["desk-filters"]], inputs: { hide_levels: [1, "hide_levels"] }, decls: 25, vars: 25, consts: [[1, "border-base-300", "bg-base-100", "sticky", "top-0", "z-10", "flex", "items-center", "border-b", "px-4", "py-4"], [1, "text-xl", "font-medium"], [1, "divide-base-200", "relative", "z-0", "w-full", "divide-y", "p-2"], ["details", ""], [1, "mb-1", "text-lg", "font-medium"], [1, "flex", "min-w-32", "flex-1", "flex-col"], ["for", "location"], ["appearance", "outline", 1, "w-full"], [1, "flex-1"], ["name", "date", 3, "ngModelChange", "ngModel", "ngModelOptions", "to", "timezone"], [1, "-mt-2", "mb-2", "flex", "justify-end"], [1, "flex", "items-center", "space-x-2"], ["favs", "", 1, "space-y-2", "pb-4"], ["features", "", 1, "space-y-2"], ["name", "region", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value"], ["name", "building", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [3, "formField"], [1, "w-1/3", "flex-1"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr", "timezone", "range"], [3, "formField", "time", "max", "min", "step", "use_24hr", "timezone", "end_time"], [1, "mt-2", "text-lg", "font-medium"], [1, "flex", "w-full", "items-center"], [1, "w-full", 3, "ngModelChange", "label", "ngModel", "ngModelOptions"], [1, "flex", "flex-wrap", "items-center", "space-x-2"], [1, "w-full", "capitalize", 3, "ngModelChange", "label", "ngModel", "ngModelOptions"]], template: function DeskFiltersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "form", 2)(5, "section", 3)(6, "h2", 4);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 5);
        \u0275\u0275conditionalCreate(10, DeskFiltersComponent_Conditional_10_Template, 3, 3, "label", 6);
        \u0275\u0275conditionalCreate(11, DeskFiltersComponent_Conditional_11_Template, 5, 6, "mat-form-field", 7);
        \u0275\u0275conditionalCreate(12, DeskFiltersComponent_Conditional_12_Template, 4, 4, "mat-form-field", 7);
        \u0275\u0275conditionalCreate(13, DeskFiltersComponent_Conditional_13_Template, 5, 6, "mat-form-field", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 8)(15, "label");
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "a-date-field", 9);
        \u0275\u0275listener("ngModelChange", function DeskFiltersComponent_Template_a_date_field_ngModelChange_18_listener($event) {
          return ctx.model.update((m) => __spreadProps(__spreadValues({}, m), { date: $event }));
        });
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(21, DeskFiltersComponent_Conditional_21_Template, 4, 4, "div", 10);
        \u0275\u0275conditionalCreate(22, DeskFiltersComponent_Conditional_22_Template, 11, 20, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(23, DeskFiltersComponent_Conditional_23_Template, 7, 9, "section", 12);
        \u0275\u0275conditionalCreate(24, DeskFiltersComponent_Conditional_24_Template, 6, 3, "section", 13);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 16, "COMMON.FILTERS"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 18, "COMMON.DETAILS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.show_level_select() && !(ctx.use_region() && ctx.regions()?.length) && !(!ctx.use_region() && ctx.buildings()?.length > 1) ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.use_region() && ctx.regions()?.length ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.use_region() && ctx.buildings()?.length > 1 ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_level_select() ? 13 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 20, "FORM.DATE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.model().date)("ngModelOptions", \u0275\u0275pureFunction0(24, _c03))("to", ctx.end_date())("timezone", ctx.timezone());
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 22, "FORM.DATE_ERROR"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.allow_all_day() ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.model().all_day ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hide_levels() ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.features()?.length && !ctx.hide_levels() ? 24 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      SettingsToggleComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatCheckboxModule,
      MatCheckbox,
      FormsModule,
      \u0275NgNoValidate,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      NgForm,
      FormField,
      TranslatePipe,
      BuildingPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskFiltersComponent, [{
    type: Component,
    args: [{ selector: "desk-filters", template: `
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
                    @if (
                        show_level_select() &&
                        !(use_region() && regions()?.length) &&
                        !(!use_region() && buildings()?.length > 1)
                    ) {
                        <label for="location">
                            {{ 'COMMON.LOCATION' | translate }}
                        </label>
                    }
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
                    @if (show_level_select()) {
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
                <div class="flex-1">
                    <label>{{ 'FORM.DATE' | translate }}</label>
                    <a-date-field
                        name="date"
                        [ngModel]="model().date"
                        (ngModelChange)="
                            model.update((m) => ({ ...m, date: $event }))
                        "
                        [ngModelOptions]="{ standalone: true }"
                        [to]="end_date()"
                        [timezone]="timezone()"
                    >
                        {{ 'FORM.DATE_ERROR' | translate }}
                    </a-date-field>
                </div>
                <!-- All Day -->
                @if (allow_all_day()) {
                    <div class="-mt-2 mb-2 flex justify-end">
                        <mat-checkbox [formField]="form.all_day">
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
                                [formField]="form.duration"
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
                    <h2 class="mt-2 text-lg font-medium">
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
                    <h2 class="mt-2 text-lg font-medium">
                        {{ 'COMMON.TYPE' | translate }}
                    </h2>
                    @for (feat of features(); track feat) {
                        <div class="flex flex-wrap items-center space-x-2">
                            <settings-toggle
                                class="w-full capitalize"
                                [label]="feat"
                                [ngModel]="
                                    (options()?.features || []).includes(feat)
                                "
                                (ngModelChange)="setFeature(feat, $event)"
                                [ngModelOptions]="{ standalone: true }"
                            ></settings-toggle>
                        </div>
                    }
                </section>
            }
        </form>
    `, imports: [
      TranslatePipe,
      MatRippleModule,
      SettingsToggleComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      MatFormFieldModule,
      MatSelectModule,
      MatCheckboxModule,
      FormsModule,
      FormField,
      BuildingPipe
    ] }]
  }], null, { hide_levels: [{ type: Input, args: [{ isSignal: true, alias: "hide_levels", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskFiltersComponent, { className: "DeskFiltersComponent", filePath: "libs/bookings/src/lib/desk-select-modal/desk-filters.component.ts", lineNumber: 243 });
})();

// libs/bookings/src/lib/desk-select-modal/desk-list.component.ts
var _c04 = (a0) => ({ count: a0 });
function DeskListComponent_Conditional_6_Conditional_0_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function DeskListComponent_Conditional_6_Conditional_0_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 11);
  }
  if (rf & 2) {
    const desk_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", desk_r2.images[0]);
  }
}
function DeskListComponent_Conditional_6_Conditional_0_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 12);
  }
}
function DeskListComponent_Conditional_6_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 7)(1, "button", 8);
    \u0275\u0275listener("click", function DeskListComponent_Conditional_6_Conditional_0_For_2_Template_button_click_1_listener() {
      const desk_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectDesk(desk_r2));
    });
    \u0275\u0275elementStart(2, "div", 9);
    \u0275\u0275conditionalCreate(3, DeskListComponent_Conditional_6_Conditional_0_For_2_Conditional_3_Template, 3, 0, "div", 10);
    \u0275\u0275conditionalCreate(4, DeskListComponent_Conditional_6_Conditional_0_For_2_Conditional_4_Template, 1, 1, "img", 11)(5, DeskListComponent_Conditional_6_Conditional_0_For_2_Conditional_5_Template, 1, 0, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 13)(7, "div", 14);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 15)(10, "icon", 16);
    \u0275\u0275text(11, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 17);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "button", 18);
    \u0275\u0275listener("click", function DeskListComponent_Conditional_6_Conditional_0_For_2_Template_button_click_14_listener() {
      const desk_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleFav.emit(desk_r2));
    });
    \u0275\u0275elementStart(15, "icon", 19);
    \u0275\u0275text(16, "favorite");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const desk_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("border-info!", ctx_r2.active() === desk_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.selected().includes(desk_r2.id) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(desk_r2.images?.length ? 4 : 5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", desk_r2.name || desk_r2.id || "Desk", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", desk_r2.zone?.display_name || desk_r2.zone?.name || "<No Level>", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("text-info", ctx_r2.isFavourite(desk_r2.id));
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r2.isFavourite(desk_r2.id) ? "material-symbols-rounded" : "material-symbols-outlined");
  }
}
function DeskListComponent_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 3);
    \u0275\u0275repeaterCreate(1, DeskListComponent_Conditional_6_Conditional_0_For_2_Template, 17, 9, "li", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(3, "li", 6);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.desks());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "COMMON.END_OF_LIST"), " ");
  }
}
function DeskListComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "BOOKINGS.DESK_LIST_EMPTY"), " ");
  }
}
function DeskListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DeskListComponent_Conditional_6_Conditional_0_Template, 6, 3, "ul", 3)(1, DeskListComponent_Conditional_6_Conditional_1_Template, 4, 3, "div", 4);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.desks()?.length ? 0 : 1);
  }
}
function DeskListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-spinner", 21);
    \u0275\u0275elementStart(2, "p", 22);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "BOOKINGS.DESK_LIST_LOADING"), " ");
  }
}
var DeskListComponent = class _DeskListComponent {
  constructor() {
    this._state = inject(BookingFormService);
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
    this.desks = computed(
      () => {
        const { show_fav } = this._state.options();
        return this._state.available_resources().filter((i) => !show_fav || this.isFavourite(i.id)).sort((a, b) => {
          const a_fav = this.isFavourite(a.id) ? 1 : 0;
          const b_fav = this.isFavourite(b.id) ? 1 : 0;
          return b_fav - a_fav;
        });
      },
      ...ngDevMode ? [{ debugName: "desks" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = this._state.loading;
  }
  isFavourite(desk_id) {
    return this.favorites().includes(desk_id);
  }
  selectDesk(desk) {
    this.onSelect.emit(desk);
  }
  static {
    this.\u0275fac = function DeskListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskListComponent, selectors: [["desk-list"]], inputs: { active: [1, "active"], selected: [1, "selected"], favorites: [1, "favorites"] }, outputs: { onSelect: "onSelect", toggleFav: "toggleFav" }, decls: 8, vars: 11, consts: [[1, "px-2", "font-bold"], ["count", "", 1, "mb-4", "px-2", "text-sm", "opacity-60"], ["loading", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [1, "list-style-none", "space-y-2"], ["empty", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], ["desk", "", 1, "border-base-200", "bg-base-100", "relative", "w-full", "overflow-hidden", "rounded-lg", "border", "shadow-sm", 3, "border-info!"], [1, "bg-base-400", "rounded-sm", "p-2", "text-center", "text-sm", "opacity-30"], ["desk", "", 1, "border-base-200", "bg-base-100", "relative", "w-full", "overflow-hidden", "rounded-lg", "border", "shadow-sm"], ["name", "select-desk", "matRipple", "", 1, "flex", "h-full", "w-full", "p-2", 3, "click"], [1, "bg-base-200", "relative", "mr-4", "flex", "h-20", "w-20", "items-center", "justify-center", "rounded-xl"], [1, "border-neutral", "bg-base-200", "absolute", "top-1", "left-1", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "border"], ["auth", "", 1, "h-full", "object-cover", 3, "source"], ["src", "assets/icons/desk-placeholder.svg", 1, "m-auto"], [1, "flex-1", "space-y-2", "pt-2", "text-left"], [1, "w-[calc(100%-2rem)]", "truncate", "font-medium"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "text-info"], [1, "text-xs"], ["icon", "", "matRipple", "", "name", "toggle-desk-favourite", 1, "absolute", "top-1", "right-1", 3, "click"], [3, "className"], [1, "text-center", "opacity-30"], [3, "diameter"], [1, "opacity-30"]], template: function DeskListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h3", 0);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 1);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, DeskListComponent_Conditional_6_Template, 2, 1)(7, DeskListComponent_Conditional_7_Template, 5, 4, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "COMMON.RESULTS"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(5, 5, "COMMON.RESULTS_COUNT", \u0275\u0275pureFunction1(9, _c04, ctx.desks()?.length || 0), ctx.desks()?.length || 0), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading()?.length ? 6 : 7);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      IconComponent,
      AuthenticatedImageDirective,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskListComponent, [{
    type: Component,
    args: [{ selector: "desk-list", template: `
        <h3 class="px-2 font-bold">{{ 'COMMON.RESULTS' | translate }}</h3>
        <p count class="mb-4 px-2 text-sm opacity-60">
            {{
                'COMMON.RESULTS_COUNT'
                    | translate
                        : { count: desks()?.length || 0 }
                        : desks()?.length || 0
            }}
        </p>
        @if (!loading()?.length) {
            @if (desks()?.length) {
                <ul class="list-style-none space-y-2">
                    @for (desk of desks(); track desk) {
                        <li
                            desk
                            class="border-base-200 bg-base-100 relative w-full overflow-hidden rounded-lg border shadow-sm"
                            [class.border-info!]="active() === desk.id"
                        >
                            <button
                                name="select-desk"
                                matRipple
                                class="flex h-full w-full p-2"
                                (click)="selectDesk(desk)"
                            >
                                <div
                                    class="bg-base-200 relative mr-4 flex h-20 w-20 items-center justify-center rounded-xl"
                                >
                                    @if (selected().includes(desk.id)) {
                                        <div
                                            class="border-neutral bg-base-200 absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border"
                                        >
                                            <icon>done</icon>
                                        </div>
                                    }
                                    @if (desk.images?.length) {
                                        <img
                                            auth
                                            class="h-full object-cover"
                                            [source]="desk.images[0]"
                                        />
                                    } @else {
                                        <img
                                            class="m-auto"
                                            src="assets/icons/desk-placeholder.svg"
                                        />
                                    }
                                </div>
                                <div class="flex-1 space-y-2 pt-2 text-left">
                                    <div
                                        class="w-[calc(100%-2rem)] truncate font-medium"
                                    >
                                        {{ desk.name || desk.id || 'Desk' }}
                                    </div>
                                    <div
                                        class="flex items-center space-x-2 text-sm"
                                    >
                                        <icon class="text-info">place</icon>
                                        <p class="text-xs">
                                            {{
                                                desk.zone?.display_name ||
                                                    desk.zone?.name ||
                                                    '&lt;No Level&gt;'
                                            }}
                                        </p>
                                    </div>
                                </div>
                            </button>
                            <button
                                icon
                                matRipple
                                name="toggle-desk-favourite"
                                class="absolute top-1 right-1"
                                [class.text-info]="isFavourite(desk.id)"
                                (click)="toggleFav.emit(desk)"
                            >
                                <icon
                                    [className]="
                                        isFavourite(desk.id)
                                            ? 'material-symbols-rounded'
                                            : 'material-symbols-outlined'
                                    "
                                    >favorite</icon
                                >
                            </button>
                        </li>
                    }
                    <li
                        class="bg-base-400 rounded-sm p-2 text-center text-sm opacity-30"
                    >
                        {{ 'COMMON.END_OF_LIST' | translate }}
                    </li>
                </ul>
            } @else {
                <div
                    empty
                    class="flex flex-col items-center justify-center space-y-2 p-16"
                >
                    <p class="text-center opacity-30">
                        {{ 'BOOKINGS.DESK_LIST_EMPTY' | translate }}
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
                    {{ 'BOOKINGS.DESK_LIST_LOADING' | translate }}
                </p>
            </div>
        }
    `, imports: [
      TranslatePipe,
      MatRippleModule,
      MatProgressSpinnerModule,
      IconComponent,
      AuthenticatedImageDirective
    ] }]
  }], null, { active: [{ type: Input, args: [{ isSignal: true, alias: "active", required: false }] }], selected: [{ type: Input, args: [{ isSignal: true, alias: "selected", required: false }] }], favorites: [{ type: Input, args: [{ isSignal: true, alias: "favorites", required: false }] }], onSelect: [{ type: Output, args: ["onSelect"] }], toggleFav: [{ type: Output, args: ["toggleFav"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskListComponent, { className: "DeskListComponent", filePath: "libs/bookings/src/lib/desk-select-modal/desk-list.component.ts", lineNumber: 135 });
})();

// libs/explore/src/lib/explore-desk-info.component.ts
function ExploreDeskInfoComponent_ng_template_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.display_user(), " ");
  }
}
function ExploreDeskInfoComponent_ng_template_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.department(), " ");
  }
}
function ExploreDeskInfoComponent_ng_template_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "uppercase");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap("text-light border-base-100 rounded-sm border p-1 px-2 capitalize shadow-sm " + ctx_r0.status());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, ctx_r0.status() === "not-bookable" ? "COMMON.STATUS_NOT_BOOKABLE" : "COMMON.STATUS_" + \u0275\u0275pipeBind1(3, 3, ctx_r0.status())), " ");
  }
}
function ExploreDeskInfoComponent_ng_template_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "icon");
    \u0275\u0275text(2, "alarm");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" Free ", ctx_r0.current_booking() ? "at" : "until", " ", \u0275\u0275pipeBind2(5, 2, ctx_r0.current_booking() ? ctx_r0.current_booking().date_end : ctx_r0.next_booking().date, "shortTime"), " ");
  }
}
function ExploreDeskInfoComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275element(2, "div", 4);
    \u0275\u0275elementStart(3, "div", 5)(4, "div", 6)(5, "h4", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ExploreDeskInfoComponent_ng_template_1_Conditional_7_Template, 2, 1, "p", 8);
    \u0275\u0275conditionalCreate(8, ExploreDeskInfoComponent_ng_template_1_Conditional_8_Template, 2, 1, "p", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, ExploreDeskInfoComponent_ng_template_1_Conditional_9_Template, 5, 7, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ExploreDeskInfoComponent_ng_template_1_Conditional_10_Template, 6, 5, "div", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap("bg-base-100 pointer-events-none absolute top-0 left-0 w-64 p-1 shadow-sm " + ctx_r0.x_pos() + " " + ctx_r0.y_pos());
    \u0275\u0275property("id", ctx_r0.map_id());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.name() || ctx_r0.map_id() || ctx_r0.id(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.display_user() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.display_user() && ctx_r0.department() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.status() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.next_booking() || ctx_r0.current_booking() ? 10 : -1);
  }
}
var ExploreDeskInfoComponent = class _ExploreDeskInfoComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._details = inject(MAP_FEATURE_DATA);
    this._element = inject(ElementRef);
    this.status = computed(
      () => this._details.status?.(),
      ...ngDevMode ? [{ debugName: "status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.id = signal(
      this._details.id,
      ...ngDevMode ? [{ debugName: "id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.map_id = signal(
      this._details.map_id,
      ...ngDevMode ? [{ debugName: "map_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.name = signal(
      this._details.name,
      ...ngDevMode ? [{ debugName: "name" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.user = this._details.user;
    this.start = signal(
      this._details.start,
      ...ngDevMode ? [{ debugName: "start" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end = signal(
      this._details.end,
      ...ngDevMode ? [{ debugName: "end" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.department = signal(
      this._details.department,
      ...ngDevMode ? [{ debugName: "department" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.bookings = this._details.bookings;
    this.date = signal(
      this._details.date || Date.now(),
      ...ngDevMode ? [{ debugName: "date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.now = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "now" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_time = computed(
      () => isSameDay(this.date(), Date.now()) ? this.now() : this.date(),
      ...ngDevMode ? [{ debugName: "active_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.next_booking = computed(
      () => this.bookings?.().filter((booking) => booking.date > this.active_time() && isSameDay(booking.date, this.date())).sort((a, b) => a.date - b.date)[0],
      ...ngDevMode ? [{ debugName: "next_booking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.current_booking = computed(
      () => this.bookings?.().find((booking) => this.active_time() >= booking.date && this.active_time() < booking.date_end),
      ...ngDevMode ? [{ debugName: "current_booking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display_booking = computed(
      () => this.next_booking() || null,
      ...ngDevMode ? [{ debugName: "display_booking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display_user = computed(
      () => this.display_booking()?.user_name || this.display_booking()?.booked_by_name || this.user?.(),
      ...ngDevMode ? [{ debugName: "display_user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display_start = computed(
      () => this.display_booking()?.date || this.start(),
      ...ngDevMode ? [{ debugName: "display_start" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display_end = computed(
      () => this.display_booking()?.date_end || this.end(),
      ...ngDevMode ? [{ debugName: "display_end" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.y_pos = signal(
      "top",
      ...ngDevMode ? [{ debugName: "y_pos" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.x_pos = signal(
      "left",
      ...ngDevMode ? [{ debugName: "x_pos" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit(tries = 0) {
    if (tries > 10)
      return;
    setTimeout(() => this.updatePosition(), 200);
    this.interval("time", () => this.now.set(Date.now()), 5e3);
  }
  updatePosition(tries = 0) {
    const parent = this._element.nativeElement.parentElement?.parentElement;
    if (!parent)
      return setTimeout(() => this.updatePosition(++tries), 200);
    const box = parent?.getBoundingClientRect();
    const wbox = document.body?.getBoundingClientRect();
    this.y_pos.set(box.y >= wbox.height / 2 ? "bottom" : "top");
    this.x_pos.set(box.x >= wbox.width / 2 ? "right" : "left");
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ExploreDeskInfoComponent_BaseFactory;
      return function ExploreDeskInfoComponent_Factory(__ngFactoryType__) {
        return (\u0275ExploreDeskInfoComponent_BaseFactory || (\u0275ExploreDeskInfoComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ExploreDeskInfoComponent)))(__ngFactoryType__ || _ExploreDeskInfoComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreDeskInfoComponent, selectors: [["explore-desk-info"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 8, consts: [["desk_tooltip", ""], ["customTooltip", "", 1, "pointer-events-auto", "relative", "z-20", "h-full", "w-full", 3, "mouseenter", "touchdown", "content", "backdrop", "xPosition", "yPosition", "hover", "delay"], ["name", "space-info", 3, "id"], [1, "border-base-200", "rounded-md", "border", "p-1"], [1, "triangle", "absolute"], [1, "flex", "w-full", "items-center", "space-x-4"], [1, "flex", "flex-1", "flex-col", "px-2", "py-1"], ["map-id", "", 1, "m-0", "truncate", "font-medium"], ["user", "", 1, "text-xs"], [1, "relative", "flex", "flex-wrap", "text-sm"], [1, "mt-1", "flex", "items-center", "space-x-2", "px-2", "pb-2", "text-sm"], ["status", ""]], template: function ExploreDeskInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275listener("mouseenter", function ExploreDeskInfoComponent_Template_div_mouseenter_0_listener() {
          return ctx.updatePosition();
        })("touchdown", function ExploreDeskInfoComponent_Template_div_touchdown_0_listener() {
          return ctx.updatePosition();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(1, ExploreDeskInfoComponent_ng_template_1_Template, 11, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const desk_tooltip_r2 = \u0275\u0275reference(2);
        \u0275\u0275property("content", desk_tooltip_r2)("backdrop", false)("xPosition", "center")("yPosition", "center")("hover", true)("delay", 3e3);
        \u0275\u0275attribute("id", ctx.id())("map_id", ctx.map_id());
      }
    }, dependencies: [
      CommonModule,
      CustomTooltipComponent,
      IconComponent,
      UpperCasePipe,
      DatePipe,
      TranslatePipe
    ], styles: ["\n.top.left[_ngcontent-%COMP%] {\n  border-radius: 0 0.5rem 0.5rem 0.5rem;\n}\n.top.right[_ngcontent-%COMP%] {\n  border-radius: 0.5rem 0 0.5rem 0.5rem;\n}\n.bottom.left[_ngcontent-%COMP%] {\n  border-radius: 0.5rem 0.5rem 0.5rem 0;\n}\n.bottom.right[_ngcontent-%COMP%] {\n  border-radius: 0.5rem 0.5rem 0 0.5rem;\n}\n.triangle[_ngcontent-%COMP%] {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  transform: rotate(0deg);\n}\n.top.left[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%] {\n  top: 0.25rem;\n  left: 0.25rem;\n  border-width: 0.5rem 0.5rem 0 0;\n  border-color: currentColor transparent transparent transparent;\n}\n.top.right[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%] {\n  top: 0.25rem;\n  right: 0.25rem;\n  border-width: 0.5rem 0 0 0.5rem;\n  border-color: currentColor transparent transparent transparent;\n}\n.bottom.left[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%] {\n  bottom: 0.25rem;\n  left: 0.25rem;\n  border-width: 0 0.5rem 0.5rem 0;\n  border-color: transparent transparent currentColor transparent;\n}\n.bottom.right[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%] {\n  bottom: 0.25rem;\n  right: 0.25rem;\n  border-width: 0 0 0.5rem 0.5rem;\n  border-color: transparent transparent currentColor transparent;\n}\n[status][_ngcontent-%COMP%] {\n  background-color: var(--%NS%success);\n  color: var(--%NS%success-content);\n}\n[status].busy[_ngcontent-%COMP%] {\n  background-color: var(--%NS%error);\n  color: var(--%NS%error-content);\n}\n[status].pending[_ngcontent-%COMP%] {\n  background-color: var(--%NS%warn);\n  color: var(--%NS%warn-content);\n}\n[status].not-bookable[_ngcontent-%COMP%] {\n  background-color: var(--%NS%base-300);\n}\n/*# sourceMappingURL=explore-desk-info.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreDeskInfoComponent, [{
    type: Component,
    args: [{ selector: "explore-desk-info", template: `
        <div
            customTooltip
            [content]="desk_tooltip"
            [backdrop]="false"
            [xPosition]="'center'"
            [yPosition]="'center'"
            [hover]="true"
            [delay]="3000"
            class="pointer-events-auto relative z-20 h-full w-full"
            [attr.id]="id()"
            [attr.map_id]="map_id()"
            (mouseenter)="updatePosition()"
            (touchdown)="updatePosition()"
        ></div>
        <ng-template #desk_tooltip>
            <div
                name="space-info"
                [id]="map_id()"
                [class]="
                    'bg-base-100 pointer-events-none absolute top-0 left-0 w-64 p-1 shadow-sm ' +
                    x_pos() +
                    ' ' +
                    y_pos()
                "
            >
                <div class="border-base-200 rounded-md border p-1">
                    <div class="triangle absolute"></div>
                    <div class="flex w-full items-center space-x-4">
                        <div class="flex flex-1 flex-col px-2 py-1">
                            <h4 map-id class="m-0 truncate font-medium">
                                {{ name() || map_id() || id() }}
                            </h4>
                            @if (display_user()) {
                                <p user class="text-xs">
                                    {{ display_user() }}
                                </p>
                            }
                            @if (display_user() && department()) {
                                <p user class="text-xs">
                                    {{ department() }}
                                </p>
                            }
                        </div>
                        @if (status()) {
                            <div class="relative flex flex-wrap text-sm">
                                <div
                                    status
                                    [class]="
                                        'text-light border-base-100 rounded-sm border p-1 px-2 capitalize shadow-sm ' +
                                        status()
                                    "
                                >
                                    {{
                                        (status() === 'not-bookable'
                                            ? 'COMMON.STATUS_NOT_BOOKABLE'
                                            : 'COMMON.STATUS_' +
                                              (status() | uppercase)
                                        ) | translate
                                    }}
                                </div>
                            </div>
                        }
                    </div>
                    @if (next_booking() || current_booking()) {
                        <div
                            class="mt-1 flex items-center space-x-2 px-2 pb-2 text-sm"
                        >
                            <icon>alarm</icon>
                            <div>
                                Free
                                {{ current_booking() ? 'at' : 'until' }}
                                {{
                                    (current_booking()
                                        ? current_booking().date_end
                                        : next_booking().date
                                    ) | date: 'shortTime'
                                }}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </ng-template>
    `, imports: [
      CommonModule,
      CustomTooltipComponent,
      IconComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;be9e427f23d2cfa533bc3f1a2b3a60abe03093f3828dce67e30b4276b95b0771;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-desk-info.component.ts */\n.top.left {\n  border-radius: 0 0.5rem 0.5rem 0.5rem;\n}\n.top.right {\n  border-radius: 0.5rem 0 0.5rem 0.5rem;\n}\n.bottom.left {\n  border-radius: 0.5rem 0.5rem 0.5rem 0;\n}\n.bottom.right {\n  border-radius: 0.5rem 0.5rem 0 0.5rem;\n}\n.triangle {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  transform: rotate(0deg);\n}\n.top.left .triangle {\n  top: 0.25rem;\n  left: 0.25rem;\n  border-width: 0.5rem 0.5rem 0 0;\n  border-color: currentColor transparent transparent transparent;\n}\n.top.right .triangle {\n  top: 0.25rem;\n  right: 0.25rem;\n  border-width: 0.5rem 0 0 0.5rem;\n  border-color: currentColor transparent transparent transparent;\n}\n.bottom.left .triangle {\n  bottom: 0.25rem;\n  left: 0.25rem;\n  border-width: 0 0.5rem 0.5rem 0;\n  border-color: transparent transparent currentColor transparent;\n}\n.bottom.right .triangle {\n  bottom: 0.25rem;\n  right: 0.25rem;\n  border-width: 0 0 0.5rem 0.5rem;\n  border-color: transparent transparent currentColor transparent;\n}\n[status] {\n  background-color: var(--success);\n  color: var(--success-content);\n}\n[status].busy {\n  background-color: var(--error);\n  color: var(--error-content);\n}\n[status].pending {\n  background-color: var(--warn);\n  color: var(--warn-content);\n}\n[status].not-bookable {\n  background-color: var(--base-300);\n}\n/*# sourceMappingURL=explore-desk-info.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreDeskInfoComponent, { className: "ExploreDeskInfoComponent", filePath: "libs/explore/src/lib/explore-desk-info.component.ts", lineNumber: 220 });
})();

// libs/bookings/src/lib/desk-select-modal/desk-map.component.ts
var _c05 = () => ({ controls: true });
var _c13 = () => ({ standalone: true });
function DeskMapComponent_Conditional_1_For_4_Conditional_2_Template(rf, ctx) {
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
function DeskMapComponent_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 5)(1, "div", 6);
    \u0275\u0275conditionalCreate(2, DeskMapComponent_Conditional_1_For_4_Conditional_2_Template, 5, 3, "div", 7);
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
function DeskMapComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 1)(1, "mat-select", 4);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function DeskMapComponent_Conditional_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.level, $event) || (ctx_r1.level = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function DeskMapComponent_Conditional_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setLevel($event));
    });
    \u0275\u0275repeaterCreate(3, DeskMapComponent_Conditional_1_For_4_Template, 5, 3, "mat-option", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.level);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c13))("placeholder", \u0275\u0275pipeBind1(2, 3, "COMMON.LEVEL_ANY"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.levels());
  }
}
var DeskMapComponent = class _DeskMapComponent {
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
    this.active = input(
      "",
      ...ngDevMode ? [{ debugName: "active" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.onSelect = output();
    this.desks = this._state.available_resources;
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
    this.statuses = {};
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
        const viewable_levels = level_list.filter((lvl) => !lvl.tags.includes("parking"));
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
      () => this._state.available_resources().map((desk) => ({
        id: desk.map_id || desk.id,
        action: ["touchend", "mouseup"],
        callback: () => this.selectDesk(desk)
      })),
      ...ngDevMode ? [{ debugName: "actions" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = computed(
      () => {
        const desks = this._state.resources();
        return this._settings.get("app.desks.hide_user") ? [] : desks.map((desk) => ({
          location: desk.id,
          content: ExploreDeskInfoComponent,
          full_size: true,
          no_scale: true,
          data: {
            id: desk.map_id || desk.id,
            map_id: desk.name,
            name: desk.name || desk.map_id,
            user: signal(this._state.resourceUserName(desk.id)),
            status: this.statuses[desk.id]
          },
          z_index: 20
        }));
      },
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.styles = signal(
      {},
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
      const desks = this._state.resources();
      const free_desks = this._state.available_resources();
      this._change();
      const styles = desks.reduce((styles2, desk) => {
        const colours = this._settings.get("app.explore.colors") || {};
        if (!(desk.id in this.statuses))
          this.statuses[desk.id] = signal("not-bookable");
        const status = this.active() === desk.id ? "active" : free_desks.find((_) => _.id === desk.id) ? "free" : this._state.resourceUserName(desk.id) ? "busy" : "not-bookable";
        this.statuses[desk.id].set(status);
        styles2[`#${desk.map_id || desk.id}`] = {
          fill: status === "active" ? "#512DA8" : colours[`desk-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`]
        };
        return styles2;
      }, {});
      this.styles.set(styles);
    });
    effect(() => {
      const { zone_id } = this._state.options();
      const level = this._org.levelWithID([zone_id]);
      if (level)
        this.level.set(level);
    });
  }
  selectDesk(desk) {
    this.onSelect.emit(desk);
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
    this.\u0275fac = function DeskMapComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskMapComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskMapComponent, selectors: [["desk-map"]], inputs: { is_displayed: [1, "is_displayed"], active: [1, "active"], zoom: [1, "zoom"], center: [1, "center"] }, outputs: { onSelect: "onSelect", zoom: "zoomChange", center: "centerChange" }, decls: 4, vars: 9, consts: [[1, "border-base-200", "bg-base-100", "w-full", "border-b", "p-2"], ["levels", "", "appearance", "outline", 1, "no-subscript", "w-full"], [1, "relative", "w-full", "flex-1"], [3, "zoomChange", "centerChange", "src", "zoom", "center", "styles", "features", "actions", "options"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"]], template: function DeskMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, DeskMapComponent_Conditional_1_Template, 5, 6, "mat-form-field", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 2)(3, "interactive-map", 3);
        \u0275\u0275twoWayListener("zoomChange", function DeskMapComponent_Template_interactive_map_zoomChange_3_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.zoom, $event) || (ctx.zoom = $event);
          return $event;
        })("centerChange", function DeskMapComponent_Template_interactive_map_centerChange_3_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.center, $event) || (ctx.center = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.levels()?.length ? 1 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("src", ctx.map_url());
        \u0275\u0275twoWayProperty("zoom", ctx.zoom)("center", ctx.center);
        \u0275\u0275property("styles", ctx.styles())("features", ctx.features())("actions", ctx.actions())("options", \u0275\u0275pureFunction0(8, _c05));
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
    ], styles: ["\n[_nghost-%COMP%] {\n  position: relative;\n  background: rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\nbutton[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n/*# sourceMappingURL=desk-map.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskMapComponent, [{
    type: Component,
    args: [{ selector: "desk-map", template: `
        <div class="border-base-200 bg-base-100 w-full border-b p-2">
            @if (levels()?.length) {
                <mat-form-field
                    levels
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <mat-select
                        name="location"
                        [(ngModel)]="level"
                        (ngModelChange)="setLevel($event)"
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
            }
        </div>
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
      TranslatePipe,
      FormsModule,
      BuildingPipe
    ], styles: ["/* angular:styles/component:css;3e52039fa2b2dc4b43d4f232e06fb31261aaccd73f5b7c706cba74f59e7ddeb1;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/desk-select-modal/desk-map.component.ts */\n:host {\n  position: relative;\n  background: rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\nbutton {\n  border-radius: 0;\n}\n/*# sourceMappingURL=desk-map.component.css.map */\n"] }]
  }], () => [], { is_displayed: [{ type: Input, args: [{ isSignal: true, alias: "is_displayed", required: false }] }], active: [{ type: Input, args: [{ isSignal: true, alias: "active", required: false }] }], onSelect: [{ type: Output, args: ["onSelect"] }], zoom: [{ type: Input, args: [{ isSignal: true, alias: "zoom", required: false }] }, { type: Output, args: ["zoomChange"] }], center: [{ type: Input, args: [{ isSignal: true, alias: "center", required: false }] }, { type: Output, args: ["centerChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskMapComponent, { className: "DeskMapComponent", filePath: "libs/bookings/src/lib/desk-select-modal/desk-map.component.ts", lineNumber: 102 });
})();

// libs/bookings/src/lib/desk-select-modal/desk-select-modal.component.ts
function DeskSelectModalComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "desk-filters-display", 24);
    \u0275\u0275twoWayListener("viewChange", function DeskSelectModalComponent_Conditional_21_Template_desk_filters_display_viewChange_0_listener($event) {
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
function DeskSelectModalComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "desk-list", 25);
    \u0275\u0275listener("toggleFav", function DeskSelectModalComponent_Conditional_22_Template_desk_list_toggleFav_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFavourite($event));
    })("onSelect", function DeskSelectModalComponent_Conditional_22_Template_desk_list_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.displayed.set($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("active", ctx_r1.displayed()?.id)("selected", ctx_r1.selected_ids())("favorites", ctx_r1.favorites());
  }
}
function DeskSelectModalComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "desk-map", 26);
    \u0275\u0275listener("onSelect", function DeskSelectModalComponent_Conditional_23_Template_desk_map_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.displayed.set($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("is_displayed", !!ctx_r1.displayed())("active", ctx_r1.displayed()?.id);
  }
}
function DeskSelectModalComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function DeskSelectModalComponent_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.displayed.set(null));
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function DeskSelectModalComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function DeskSelectModalComponent_Conditional_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
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
function DeskSelectModalComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 19)(1, "div", 29)(2, "icon", 22);
    \u0275\u0275text(3, "done");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("mat-dialog-close", ctx_r1.selected());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "COMMON.CONFIRM_SELECTION"), " ");
  }
}
var FAV_DESK_KEY = "favourite_desks";
var DeskSelectModalComponent = class _DeskSelectModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this._event_form = inject(BookingFormService);
    this._dialog_ref = inject(MatDialogRef);
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
    this.displayed = signal(
      null,
      ...ngDevMode ? [{ debugName: "displayed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_filters = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_filters" }] : (
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
    this._default_select_as_map = this._settings.signal("desks.default_select_as_map", false);
    this.favorites = signal(
      this._settings.get(FAV_DESK_KEY) || [],
      ...ngDevMode ? [{ debugName: "favorites" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allow_multiple = computed(
      () => !!this._data.options?.group,
      ...ngDevMode ? [{ debugName: "allow_multiple" }] : (
        /* istanbul ignore next */
        []
      )
    );
    const selected_desks = typeof this._data?.items === "function" ? this._data.items() : this._data?.items || [];
    this.selected.set([...selected_desks]);
    this._event_form.setOptions(this._data?.options || {});
    this.view.set(this._default_select_as_map() ? "map" : "list");
  }
  isSelected(id) {
    return !!id && this.selected().some((item) => item.id === id);
  }
  setSelected(item, state) {
    const list = this.selected().filter((_) => _.id !== item.id);
    if (state)
      list.push(item);
    this.selected.set(list);
    if (!this._data.options.group && state) {
      this.displayed.set(null);
      setTimeout(() => this._dialog_ref.close([item]), 50);
    }
  }
  toggleDisplayedDesk() {
    if (!this.displayed())
      return;
    this.setSelected(this.displayed(), this.allow_multiple() ? !this.isSelected(this.displayed()?.id) : true);
  }
  toggleFavourite(item) {
    const fav_list = this.favorites();
    const new_state = !fav_list.includes(item.id);
    const next_favs = new_state ? [...fav_list, item.id] : fav_list.filter((_) => _ !== item.id);
    this._settings.saveUserSetting(FAV_DESK_KEY, next_favs);
    this.favorites.set(next_favs);
  }
  static {
    this.\u0275fac = function DeskSelectModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskSelectModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskSelectModalComponent, selectors: [["desk-select-modal"]], decls: 37, vars: 64, consts: [[1, "bg-base-100", "mb-18", "flex", "h-[calc(100vh-4.5rem)]", "max-h-[calc(100vh-4.5rem)]", "w-screen", "flex-col", "space-y-2", "overflow-hidden", "p-2", "sm:m-0", "sm:h-auto", "sm:w-auto"], [1, "bg-base-200", "flex", "h-14", "w-full", "items-center", "space-x-2", "rounded-sm", "border-none", "p-2"], [1, "flex-1", "px-2", "text-xl", "font-medium", "capitalize"], [1, "divide-secondary", "border-secondary", "flex", "divide-x", "rounded-sm", "border"], ["icon", "", "matRipple", "", 1, "rounded-l", "rounded-r-none", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "rounded-l-none", "rounded-r", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "relative", "flex", "h-1/2", "max-h-[calc(100vh-7rem)]", "flex-1", "sm:h-[65vh]", "sm:flex-none", "sm:space-x-2"], [1, "border-base-300", "h-full", "w-full", "overflow-x-hidden", "overflow-y-auto", "rounded-sm", "border", "shadow-sm", "sm:block", "sm:w-[20rem]"], [3, "hide_levels"], ["list", "", 1, "border-base-300", "bg-base-200", "h-full", "w-full", "min-w-[20rem]", "overflow-auto", "rounded-sm", "border", "sm:w-[20rem]", "lg:block"], [3, "view"], [3, "active", "selected", "favorites"], [1, "h-full", "min-h-[60vh]", "w-full", 3, "is_displayed", "active"], [1, "border-base-300", "relative", "h-full", "w-full", "overflow-auto", "rounded-sm", "border", "shadow-sm", "sm:w-[20rem]"], ["icon", "", "matRipple", "", 1, "border-base-300", "bg-base-100", "absolute", "top-2", "left-2", "z-20", "hidden", "border", "md:flex"], [3, "activeChange", "toggleFav", "close", "desk", "active", "hide_map", "fav"], ["icon", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "absolute", "top-3", "right-2", "z-20", "border", "sm:hidden"], [1, "bg-base-200", "flex", "w-full", "items-center", "space-x-2", "rounded-sm", "border-none", "p-2"], ["btn", "", "matRipple", "", "name", "desk-return", 1, "inverse", "bg-base-100", "text-secondary", 3, "mat-dialog-close"], ["btn", "", "matRipple", "", "name", "toggle-desk", 3, "click", "disabled"], [1, "flex", "items-center"], [1, "text-xl"], [1, "mr-1"], [3, "viewChange", "view"], [3, "toggleFav", "onSelect", "active", "selected", "favorites"], [1, "h-full", "min-h-[60vh]", "w-full", 3, "onSelect", "is_displayed", "active"], ["icon", "", "matRipple", "", 1, "border-base-300", "bg-base-100", "absolute", "top-2", "left-2", "z-20", "hidden", "border", "md:flex", 3, "click"], ["icon", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "absolute", "top-3", "right-2", "z-20", "border", "sm:hidden", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"]], template: function DeskSelectModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3)(6, "button", 4);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275listener("click", function DeskSelectModalComponent_Template_button_click_6_listener() {
          return ctx.view.set("list");
        });
        \u0275\u0275elementStart(8, "icon");
        \u0275\u0275text(9, "list");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "button", 5);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275listener("click", function DeskSelectModalComponent_Template_button_click_10_listener() {
          return ctx.view.set("map");
        });
        \u0275\u0275elementStart(12, "icon");
        \u0275\u0275text(13, "map");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "button", 6)(15, "icon");
        \u0275\u0275text(16, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "main", 7)(18, "div", 8);
        \u0275\u0275element(19, "desk-filters", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 10);
        \u0275\u0275conditionalCreate(21, DeskSelectModalComponent_Conditional_21_Template, 1, 1, "desk-filters-display", 11);
        \u0275\u0275conditionalCreate(22, DeskSelectModalComponent_Conditional_22_Template, 1, 3, "desk-list", 12)(23, DeskSelectModalComponent_Conditional_23_Template, 1, 2, "desk-map", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 14);
        \u0275\u0275conditionalCreate(25, DeskSelectModalComponent_Conditional_25_Template, 3, 0, "button", 15);
        \u0275\u0275elementStart(26, "desk-details", 16);
        \u0275\u0275listener("activeChange", function DeskSelectModalComponent_Template_desk_details_activeChange_26_listener() {
          return ctx.setSelected(ctx.displayed(), !ctx.isSelected(ctx.displayed()?.id));
        })("toggleFav", function DeskSelectModalComponent_Template_desk_details_toggleFav_26_listener() {
          return ctx.toggleFavourite(ctx.displayed());
        })("close", function DeskSelectModalComponent_Template_desk_details_close_26_listener() {
          return ctx.displayed.set(null);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(27, DeskSelectModalComponent_Conditional_27_Template, 3, 1, "button", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "footer", 18);
        \u0275\u0275conditionalCreate(29, DeskSelectModalComponent_Conditional_29_Template, 7, 4, "button", 19);
        \u0275\u0275elementStart(30, "button", 20);
        \u0275\u0275listener("click", function DeskSelectModalComponent_Template_button_click_30_listener() {
          return ctx.toggleDisplayedDesk();
        });
        \u0275\u0275elementStart(31, "div", 21)(32, "icon", 22);
        \u0275\u0275text(33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 23);
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("height", ctx.is_safari() ? "calc(100vh - 80px)" : "");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 56, "BOOKINGS.DESK_FIND"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("bg-base-100", ctx.view() !== "list")("bg-secondary", ctx.view() === "list")("text-secondary-content", ctx.view() === "list");
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 58, "COMMON.LIST"));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("bg-base-100", ctx.view() !== "map")("bg-secondary", ctx.view() === "map")("text-secondary-content", ctx.view() === "map");
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(11, 60, "COMMON.MAP"));
        \u0275\u0275advance(8);
        \u0275\u0275classProp("hidden", !ctx.show_filters());
        \u0275\u0275advance();
        \u0275\u0275property("hide_levels", ctx.view() !== "list");
        \u0275\u0275advance();
        \u0275\u0275styleProp("width", ctx.view() !== "list" ? ctx.displayed() ? "calc(100vw - 44rem)" : "calc(100vw - 24rem)" : "");
        \u0275\u0275classProp("hidden", ctx.show_filters() || ctx.displayed())("sm:hidden", ctx.displayed())("md:block", !ctx.displayed())("p-2", ctx.view() === "list");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.view() === "list" ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.view() === "list" ? 22 : 23);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("hidden", ctx.show_filters() || !ctx.displayed())("sm:hidden", !ctx.displayed())("md:block", ctx.displayed())("lg:block", ctx.view() === "list");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.displayed() ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("desk", ctx.displayed())("active", ctx.selected_ids().includes(ctx.displayed()?.id))("hide_map", ctx.view() === "map")("fav", ctx.displayed() && ctx.favorites().includes(ctx.displayed()?.id));
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.displayed() ? 27 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("justify-between", ctx.allow_multiple())("justify-end", !ctx.allow_multiple());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.allow_multiple() ? 29 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("inverse", ctx.allow_multiple() && ctx.isSelected(ctx.displayed()?.id));
        \u0275\u0275property("disabled", !ctx.displayed());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.allow_multiple() ? ctx.isSelected(ctx.displayed()?.id) ? "remove" : "add" : "done");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.allow_multiple() ? \u0275\u0275pipeBind1(36, 62, ctx.isSelected(ctx.displayed()?.id) ? "COMMON.REMOVE_FROM" : "COMMON.ADD_TO") : "Select Desk", " ");
      }
    }, dependencies: [
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      MatTooltipModule,
      MatTooltip,
      DeskListComponent,
      DeskDetailsComponent,
      DeskFiltersComponent,
      DeskMapComponent,
      DeskFiltersDisplayComponent,
      TranslatePipe
    ], styles: ["\n@media screen and (max-width: 640px) {\n  [list][_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=desk-select-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskSelectModalComponent, [{
    type: Component,
    args: [{ selector: "desk-select-modal", template: `
        <div
            class="bg-base-100 mb-18 flex h-[calc(100vh-4.5rem)] max-h-[calc(100vh-4.5rem)] w-screen flex-col space-y-2 overflow-hidden p-2 sm:m-0 sm:h-auto sm:w-auto"
            [style.height]="is_safari() ? 'calc(100vh - 80px)' : ''"
        >
            <header
                class="bg-base-200 flex h-14 w-full items-center space-x-2 rounded-sm border-none p-2"
            >
                <h2 class="flex-1 px-2 text-xl font-medium capitalize">
                    {{ 'BOOKINGS.DESK_FIND' | translate }}
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
                    <desk-filters
                        [hide_levels]="view() !== 'list'"
                    ></desk-filters>
                </div>
                <div
                    list
                    class="border-base-300 bg-base-200 h-full w-full min-w-[20rem] overflow-auto rounded-sm border sm:w-[20rem] lg:block"
                    [class.hidden]="show_filters() || displayed()"
                    [class.sm:hidden]="displayed()"
                    [class.md:block]="!displayed()"
                    [class.p-2]="view() === 'list'"
                    [style.width]="
                        view() !== 'list'
                            ? displayed()
                                ? 'calc(100vw - 44rem)'
                                : 'calc(100vw - 24rem)'
                            : ''
                    "
                >
                    @if (view() === 'list') {
                        <desk-filters-display
                            [(view)]="view"
                        ></desk-filters-display>
                    }
                    @if (view() === 'list') {
                        <desk-list
                            [active]="displayed()?.id"
                            [selected]="selected_ids()"
                            [favorites]="favorites()"
                            (toggleFav)="toggleFavourite($event)"
                            (onSelect)="displayed.set($event)"
                        ></desk-list>
                    } @else {
                        <desk-map
                            class="h-full min-h-[60vh] w-full"
                            [is_displayed]="!!displayed()"
                            [active]="displayed()?.id"
                            (onSelect)="displayed.set($event)"
                        >
                        </desk-map>
                    }
                </div>
                <div
                    class="border-base-300 relative h-full w-full overflow-auto rounded-sm border shadow-sm sm:w-[20rem]"
                    [class.hidden]="show_filters() || !displayed()"
                    [class.sm:hidden]="!displayed()"
                    [class.md:block]="displayed()"
                    [class.lg:block]="view() === 'list'"
                >
                    @if (displayed()) {
                        <button
                            icon
                            matRipple
                            class="border-base-300 bg-base-100 absolute top-2 left-2 z-20 hidden border md:flex"
                            (click)="displayed.set(null)"
                        >
                            <icon>close</icon>
                        </button>
                    }
                    <desk-details
                        [desk]="displayed()"
                        [active]="selected_ids().includes(displayed()?.id)"
                        [hide_map]="view() === 'map'"
                        (activeChange)="
                            setSelected(
                                displayed(),
                                !isSelected(displayed()?.id)
                            )
                        "
                        [fav]="
                            displayed() &&
                            this.favorites().includes(displayed()?.id)
                        "
                        (toggleFav)="toggleFavourite(displayed())"
                        (close)="displayed.set(null)"
                    ></desk-details>
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
                class="bg-base-200 flex w-full items-center space-x-2 rounded-sm border-none p-2"
                [class.justify-between]="allow_multiple()"
                [class.justify-end]="!allow_multiple()"
            >
                @if (allow_multiple()) {
                    <button
                        btn
                        matRipple
                        name="desk-return"
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
                }
                <button
                    btn
                    matRipple
                    name="toggle-desk"
                    [disabled]="!displayed()"
                    [class.inverse]="
                        allow_multiple() && isSelected(displayed()?.id)
                    "
                    (click)="toggleDisplayedDesk()"
                >
                    <div class="flex items-center">
                        <icon class="text-xl">{{
                            allow_multiple()
                                ? isSelected(displayed()?.id)
                                    ? 'remove'
                                    : 'add'
                                : 'done'
                        }}</icon>
                        <div class="mr-1">
                            {{
                                allow_multiple()
                                    ? ((isSelected(displayed()?.id)
                                          ? 'COMMON.REMOVE_FROM'
                                          : 'COMMON.ADD_TO'
                                      ) | translate)
                                    : 'Select Desk'
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
      DeskListComponent,
      DeskDetailsComponent,
      DeskFiltersComponent,
      DeskMapComponent,
      DeskFiltersDisplayComponent
    ], styles: ["/* angular:styles/component:css;14c104e27b816f236ef6867be998c5d0dffab973e73a494beaad3760a220040a;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/desk-select-modal/desk-select-modal.component.ts */\n@media screen and (max-width: 640px) {\n  [list] {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=desk-select-modal.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskSelectModalComponent, { className: "DeskSelectModalComponent", filePath: "libs/bookings/src/lib/desk-select-modal/desk-select-modal.component.ts", lineNumber: 245 });
})();

// libs/bookings/src/lib/desk-list-field.component.ts
var _c06 = () => [];
var _c14 = () => ({ standalone: true });
function DeskListFieldComponent_For_2_Conditional_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 23);
    \u0275\u0275listener("ngModelChange", function DeskListFieldComponent_For_2_Conditional_1_For_5_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const opt_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.setFeatures(opt_r3, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngModel", (ctx_r3.selected_features() || \u0275\u0275pureFunction0(3, _c06)).includes(opt_r3))("ngModelOptions", \u0275\u0275pureFunction0(4, _c14));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r3, " ");
  }
}
function DeskListFieldComponent_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 20);
    \u0275\u0275text(2, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21);
    \u0275\u0275repeaterCreate(4, DeskListFieldComponent_For_2_Conditional_1_For_5_Template, 2, 5, "mat-checkbox", 22, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r3.features());
  }
}
function DeskListFieldComponent_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", item_r5.images[0]);
  }
}
function DeskListFieldComponent_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 9);
  }
}
function DeskListFieldComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275conditionalCreate(1, DeskListFieldComponent_For_2_Conditional_1_Template, 6, 0, "div", 6);
    \u0275\u0275elementStart(2, "div", 7);
    \u0275\u0275conditionalCreate(3, DeskListFieldComponent_For_2_Conditional_3_Template, 1, 1, "img", 8)(4, DeskListFieldComponent_For_2_Conditional_4_Template, 1, 0, "img", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 10)(6, "div", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 12)(9, "icon", 13);
    \u0275\u0275text(10, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 14)(14, "button", 15);
    \u0275\u0275listener("click", function DeskListFieldComponent_For_2_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.changeResources());
    });
    \u0275\u0275elementStart(15, "div", 16)(16, "icon");
    \u0275\u0275text(17, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 17);
    \u0275\u0275listener("click", function DeskListFieldComponent_For_2_Template_button_click_20_listener() {
      const item_r5 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeResource(item_r5));
    });
    \u0275\u0275elementStart(21, "div", 16)(22, "icon");
    \u0275\u0275text(23, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "button", 18);
    \u0275\u0275listener("click", function DeskListFieldComponent_For_2_Template_button_click_26_listener() {
      const item_r5 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleFavourite(item_r5));
    });
    \u0275\u0275elementStart(27, "icon", 19);
    \u0275\u0275text(28, "favorite");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.features()?.length ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r5.images?.length ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r5.name || item_r5.id || item_r5.map_id || "Desk", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", item_r5.zone?.display_name || item_r5.zone?.name, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 9, "COMMON.CHANGE"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 11, "COMMON.REMOVE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-info", ctx_r3.favorites().includes(item_r5?.id));
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r3.favorites().includes(item_r5?.id) ? "material-symbols-rounded" : "material-symbols-outlined");
  }
}
var EMPTY_FAVS = [];
var DeskListFieldComponent = class _DeskListFieldComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this.features = input(
      [],
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.room_size = signal(
      3,
      ...ngDevMode ? [{ debugName: "room_size" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.items = signal(
      [],
      ...ngDevMode ? [{ debugName: "items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disabled = signal(
      false,
      ...ngDevMode ? [{ debugName: "disabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_features = signal(
      [],
      ...ngDevMode ? [{ debugName: "selected_features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.favorites = this._settings.signal(SETTING_KEYS.FAVORITE_DESKS, EMPTY_FAVS, true);
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (s) => this.disabled.set(s);
  }
  /** Add or edit selected items */
  changeResources() {
    const ref = this._dialog.open(DeskSelectModalComponent, {
      data: {
        items: this.items,
        options: { capacity: this.room_size() }
      }
    });
    ref.afterClosed().subscribe((items) => {
      if (!items)
        items = ref.componentInstance.selected();
      this.setValue(items);
    });
  }
  /** Remove the selected space from the list */
  removeResource(space) {
    this.setValue(this.items().filter((_) => _.id !== space.id));
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.items.set(new_value);
    if (this._onChange)
      this._onChange(this.items());
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.items.set(value || []);
  }
  setFeatures(opt, value) {
    const features = this.selected_features() || [];
    if (value) {
      this.selected_features.set([...features, opt]);
    } else {
      this.selected_features.set(features.filter((f) => f !== opt));
    }
  }
  toggleFavourite(space) {
    if (!space?.id)
      return;
    const fav_list = this.favorites() || EMPTY_FAVS;
    const new_state = !fav_list.includes(space.id);
    if (new_state) {
      this._settings.saveUserSetting(SETTING_KEYS.FAVORITE_DESKS, [
        ...fav_list,
        space.id
      ]);
    } else {
      this._settings.saveUserSetting(SETTING_KEYS.FAVORITE_DESKS, fav_list.filter((_) => _ !== space.id));
    }
  }
  static {
    this.\u0275fac = function DeskListFieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskListFieldComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskListFieldComponent, selectors: [["desk-list-field"]], inputs: { features: [1, "features"] }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _DeskListFieldComponent),
        multi: true
      }
    ])], decls: 12, vars: 3, consts: [["list", "", 1, "space-y-2"], ["desk", "", 1, "border-base-200", "relative", "flex", "w-full", "items-center", "rounded-lg", "border", "p-2", "shadow-sm"], ["btn", "", "matRipple", "", "name", "add-desk", 1, "inverse", "mt-2", "w-full", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "mb-2", "flex", "flex-wrap", "items-center", "sm:space-x-2"], [1, "min-w-[256px]", "flex-1", "space-y-2"], [1, "flex", "flex-col"], [1, "bg-base-200", "mr-4", "flex", "h-20", "w-20", "items-center", "justify-center", "overflow-hidden", "rounded-xl"], ["auth", "", 1, "min-h-full", "object-cover", 3, "source"], ["src", "assets/icons/desk-placeholder.svg", 1, "m-auto"], [1, "space-y-2", "pb-4"], [1, "font-medium"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "text-blue-500"], [1, "absolute", "right-0", "bottom-0", "flex", "items-center", "justify-end", "text-xs"], ["btn", "", "matRipple", "", "name", "edit-desk", 1, "clear", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", "name", "remove-desk", 1, "clear", 3, "click"], ["icon", "", "matRipple", "", "name", "toggle-desk-favourite", 1, "absolute", "top-1", "right-1", 3, "click"], [3, "className"], ["for", "title"], ["features", "", 1, "flex", "flex-wrap", "items-center", "space-x-2"], [3, "ngModel", "ngModelOptions"], [3, "ngModelChange", "ngModel", "ngModelOptions"]], template: function DeskListFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275repeaterCreate(1, DeskListFieldComponent_For_2_Template, 29, 13, "div", 1, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 2);
        \u0275\u0275listener("click", function DeskListFieldComponent_Template_button_click_3_listener() {
          return ctx.changeResources();
        });
        \u0275\u0275elementStart(4, "div", 3)(5, "icon");
        \u0275\u0275text(6, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span");
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 4);
        \u0275\u0275element(11, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.items());
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 1, "BOOKINGS.DESK_ADD"));
      }
    }, dependencies: [
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatCheckboxModule,
      MatCheckbox,
      FormsModule,
      NgControlStatus,
      NgModel,
      AuthenticatedImageDirective,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskListFieldComponent, [{
    type: Component,
    args: [{ selector: `desk-list-field`, template: `
        <div list class="space-y-2">
            @for (item of items(); track item) {
                <div
                    desk
                    class="border-base-200 relative flex w-full items-center rounded-lg border p-2 shadow-sm"
                >
                    @if (features()?.length) {
                        <div class="flex flex-col">
                            <label for="title">Type</label>
                            <div
                                features
                                class="flex flex-wrap items-center space-x-2"
                            >
                                @for (opt of features(); track opt) {
                                    <mat-checkbox
                                        [ngModel]="
                                            (
                                                selected_features() || []
                                            ).includes(opt)
                                        "
                                        (ngModelChange)="
                                            setFeatures(opt, $event)
                                        "
                                        [ngModelOptions]="{ standalone: true }"
                                    >
                                        {{ opt }}
                                    </mat-checkbox>
                                }
                            </div>
                        </div>
                    }
                    <div
                        class="bg-base-200 mr-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl"
                    >
                        @if (item.images?.length) {
                            <img
                                auth
                                [source]="item.images[0]"
                                class="min-h-full object-cover"
                            />
                        } @else {
                            <img
                                class="m-auto"
                                src="assets/icons/desk-placeholder.svg"
                            />
                        }
                    </div>
                    <div class="space-y-2 pb-4">
                        <div class="font-medium">
                            {{ item.name || item.id || item.map_id || 'Desk' }}
                        </div>
                        <div class="flex items-center space-x-2 text-sm">
                            <icon class="text-blue-500">place</icon>
                            <p>
                                {{ item.zone?.display_name || item.zone?.name }}
                            </p>
                        </div>
                        <div
                            class="absolute right-0 bottom-0 flex items-center justify-end text-xs"
                        >
                            <button
                                btn
                                matRipple
                                name="edit-desk"
                                class="clear"
                                (click)="changeResources()"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon>edit</icon>
                                    {{ 'COMMON.CHANGE' | translate }}
                                </div>
                            </button>
                            <button
                                btn
                                matRipple
                                name="remove-desk"
                                class="clear"
                                (click)="removeResource(item)"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon>close</icon>
                                    {{ 'COMMON.REMOVE' | translate }}
                                </div>
                            </button>
                        </div>
                    </div>
                    <button
                        icon
                        matRipple
                        name="toggle-desk-favourite"
                        class="absolute top-1 right-1"
                        [class.text-info]="favorites().includes(item?.id)"
                        (click)="toggleFavourite(item)"
                    >
                        <icon
                            [className]="
                                favorites().includes(item?.id)
                                    ? 'material-symbols-rounded'
                                    : 'material-symbols-outlined'
                            "
                            >favorite</icon
                        >
                    </button>
                </div>
            }
        </div>
        <button
            btn
            matRipple
            name="add-desk"
            class="inverse mt-2 w-full"
            (click)="changeResources()"
        >
            <div class="flex items-center justify-center space-x-2">
                <icon>search</icon>
                <span>{{ 'BOOKINGS.DESK_ADD' | translate }}</span>
            </div>
        </button>
        <div class="mb-2 flex flex-wrap items-center sm:space-x-2">
            <div class="min-w-[256px] flex-1 space-y-2"></div>
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DeskListFieldComponent),
        multi: true
      }
    ], imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatCheckboxModule,
      FormsModule,
      AuthenticatedImageDirective
    ] }]
  }], null, { features: [{ type: Input, args: [{ isSignal: true, alias: "features", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskListFieldComponent, { className: "DeskListFieldComponent", filePath: "libs/bookings/src/lib/desk-list-field.component.ts", lineNumber: 160 });
})();

// apps/outlook-addin/src/app/desks/desk-form.component.ts
var _c07 = () => ({ standalone: true });
var _c15 = (a0, a1) => ({ date: a0, duration: a1 });
function DeskBookingFormComponent_Conditional_0_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 16);
    \u0275\u0275text(1, " All Day ");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formField", ctx_r1.form.all_day);
    \u0275\u0275control();
  }
}
function DeskBookingFormComponent_Conditional_0_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "mat-checkbox", 19);
    \u0275\u0275listener("ngModelChange", function DeskBookingFormComponent_Conditional_0_Conditional_38_Template_mat_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.model.update((m) => __spreadProps(__spreadValues({}, m), { secondary_resource: $event ? "locker" : "" })));
    });
    \u0275\u0275text(3, " Require locker ");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", !!ctx_r1.model().secondary_resource)("ngModelOptions", \u0275\u0275pureFunction0(2, _c07));
    \u0275\u0275control();
  }
}
function DeskBookingFormComponent_Conditional_0_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1)(1, "h3", 2)(2, "div", 3);
    \u0275\u0275text(3, " 3 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275text(5, "Request Asset");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "asset-list-field", 20);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("options", \u0275\u0275pureFunction2(2, _c15, ctx_r1.model().date, ctx_r1.model().duration))("formField", ctx_r1.form.assets);
    \u0275\u0275control();
  }
}
function DeskBookingFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "h3", 2)(3, "div", 3);
    \u0275\u0275text(4, " 1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4);
    \u0275\u0275text(6, "Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "label", 7);
    \u0275\u0275text(10, "Add Title");
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "mat-form-field", 8);
    \u0275\u0275element(14, "input", 9);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(15, "mat-error");
    \u0275\u0275text(16, "Booking title is required.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 6)(18, "label", 10);
    \u0275\u0275text(19, "Date");
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "a-date-field", 11);
    \u0275\u0275text(23, " Date and time must be in the future ");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 5)(25, "div", 6)(26, "label", 12);
    \u0275\u0275text(27, "Start Time");
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "a-time-field", 13);
    \u0275\u0275listener("ngModelChange", function DeskBookingFormComponent_Conditional_0_Template_a_time_field_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.model.update((m) => __spreadProps(__spreadValues({}, m), { date: $event })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 6)(32, "label", 14);
    \u0275\u0275text(33, "End Time");
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(36, "a-duration-field", 15);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(37, DeskBookingFormComponent_Conditional_0_Conditional_37_Template, 2, 1, "mat-checkbox", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(38, DeskBookingFormComponent_Conditional_0_Conditional_38_Template, 4, 3, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "section", 1)(40, "h3", 2)(41, "div", 3);
    \u0275\u0275text(42, " 2 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 4);
    \u0275\u0275text(44, "Desk");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(45, "desk-list-field", 11);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(46, DeskBookingFormComponent_Conditional_0_Conditional_46_Template, 7, 5, "section", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275property("formField", ctx_r1.form.title);
    \u0275\u0275control();
    \u0275\u0275advance(8);
    \u0275\u0275property("formField", ctx_r1.form.date);
    \u0275\u0275control();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngModel", ctx_r1.model().date)("ngModelOptions", \u0275\u0275pureFunction0(13, _c07));
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r1.form.duration)("time", ctx_r1.model().date)("max", 10 * 60)("min", 60)("step", 60);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.allow_all_day() ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_book_lockers() ? 38 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275property("formField", ctx_r1.form.resources);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.allow_assets() ? 46 : -1);
  }
}
var DeskBookingFormComponent = class _DeskBookingFormComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._service = inject(BookingFormService);
    this._injector = inject(Injector);
    this.form = this._service.form;
    this.model = this._service.model;
    this.allow_assets = settingSignal("desks.allow_assets", false);
    this.allow_all_day = settingSignal("desks.allow_all_day", false);
    this.can_book_lockers = settingSignal("desks.can_book_lockers", false);
  }
  ngOnInit() {
    this._service.setOptions({ type: "desk" });
    onFieldChange(this._service.model, (m) => m.resources, (list) => list?.length ? this.setBookingAsset(list[0]) : "", this._injector);
  }
  setBookingAsset(desk) {
    if (!desk)
      return;
    this._service.model.update((m) => __spreadProps(__spreadValues({}, m), {
      asset_id: desk?.id,
      asset_name: desk.name,
      map_id: desk?.map_id || desk?.id,
      description: desk.name,
      booking_type: "desk",
      zones: desk.zone ? [desk.zone?.parent_id, desk.zone?.id] : [],
      booking_asset: desk
    }));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275DeskBookingFormComponent_BaseFactory;
      return function DeskBookingFormComponent_Factory(__ngFactoryType__) {
        return (\u0275DeskBookingFormComponent_BaseFactory || (\u0275DeskBookingFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DeskBookingFormComponent)))(__ngFactoryType__ || _DeskBookingFormComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskBookingFormComponent, selectors: [["desk-booking-form"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[1, "divide-base-200", "space-y-2", "divide-y"], [1, "p-4"], [1, "mb-4", "flex", "items-center", "space-x-2"], [1, "bg-base-200", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full"], [1, "text-xl"], [1, "flex", "flex-wrap", "items-center", "sm:space-x-2"], [1, "w-full", "sm:flex-1"], ["for", "title"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "placeholder", "e.g. Focus Time", 3, "formField"], ["for", "date"], [3, "formField"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["for", "end-time"], [3, "formField", "time", "max", "min", "step"], [1, "absolute", "top-0", "right-0", 3, "formField"], [1, "flex", "items-center", "space-x-2"], [1, "w-1/3", "flex-1"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "options", "formField"]], template: function DeskBookingFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, DeskBookingFormComponent_Conditional_0_Template, 47, 14, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.form ? 0 : -1);
      }
    }, dependencies: [
      AssetListFieldComponent,
      DeskListFieldComponent,
      MatCheckboxModule,
      MatCheckbox,
      FormsModule,
      NgControlStatus,
      NgModel,
      FormField,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskBookingFormComponent, [{
    type: Component,
    args: [{ selector: "desk-booking-form", template: `
        @if (form) {
            <div class="divide-base-200 space-y-2 divide-y">
                <section class="p-4">
                    <h3 class="mb-4 flex items-center space-x-2">
                        <div
                            class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                        >
                            1
                        </div>
                        <div class="text-xl">Details</div>
                    </h3>
                    <div class="flex flex-wrap items-center sm:space-x-2">
                        <div class="w-full sm:flex-1">
                            <label for="title">Add Title<span>*</span></label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    [formField]="form.title"
                                    placeholder="e.g. Focus Time"
                                />
                                <mat-error
                                    >Booking title is required.</mat-error
                                >
                            </mat-form-field>
                        </div>
                        <div class="w-full sm:flex-1">
                            <label for="date">Date<span>*</span></label>
                            <a-date-field [formField]="form.date">
                                Date and time must be in the future
                            </a-date-field>
                        </div>
                    </div>
                    <div class="flex flex-wrap items-center sm:space-x-2">
                        <div class="w-full sm:flex-1">
                            <label for="start-time"
                                >Start Time<span>*</span></label
                            >
                            <a-time-field
                                name="start-time"
                                [ngModel]="model().date"
                                (ngModelChange)="
                                    model.update((m) => ({ ...m, date: $event }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                            ></a-time-field>
                        </div>
                        <div class="w-full sm:flex-1">
                            <label for="end-time">End Time<span>*</span></label>
                            <a-duration-field
                                [formField]="form.duration"
                                [time]="model().date"
                                [max]="10 * 60"
                                [min]="60"
                                [step]="60"
                            >
                            </a-duration-field>
                            @if (allow_all_day()) {
                                <mat-checkbox
                                    [formField]="form.all_day"
                                    class="absolute top-0 right-0"
                                >
                                    All Day
                                </mat-checkbox>
                            }
                        </div>
                    </div>
                    @if (can_book_lockers()) {
                        <div class="flex items-center space-x-2">
                            <div class="w-1/3 flex-1">
                                <mat-checkbox
                                    [ngModel]="
                                        !!model().secondary_resource
                                    "
                                    (ngModelChange)="
                                        model.update((m) => ({
                                            ...m,
                                            secondary_resource: $event
                                                ? 'locker'
                                                : '',
                                        }))
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                >
                                    Require locker
                                </mat-checkbox>
                            </div>
                        </div>
                    }
                </section>
                <section class="p-4">
                    <h3 class="mb-4 flex items-center space-x-2">
                        <div
                            class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                        >
                            2
                        </div>
                        <div class="text-xl">Desk</div>
                    </h3>
                    <desk-list-field
                        [formField]="form.resources"
                    ></desk-list-field>
                </section>
                @if (allow_assets()) {
                    <section class="p-4">
                        <h3 class="mb-4 flex items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                3
                            </div>
                            <div class="text-xl">Request Asset</div>
                        </h3>
                        <asset-list-field
                            [options]="{
                                date: model().date,
                                duration: model().duration,
                            }"
                            [formField]="form.assets"
                        ></asset-list-field>
                    </section>
                }
            </div>
        }
    `, imports: [
      AssetListFieldComponent,
      DeskListFieldComponent,
      MatCheckboxModule,
      FormsModule,
      FormField,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      MatFormFieldModule,
      MatInputModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskBookingFormComponent, { className: "DeskBookingFormComponent", filePath: "apps/outlook-addin/src/app/desks/desk-form.component.ts", lineNumber: 167 });
})();

// apps/outlook-addin/src/app/desks/desk-booking.component.ts
var DeskBookingComponent = class _DeskBookingComponent {
  constructor() {
    this._service = inject(BookingFormService);
    this._router = inject(Router);
    this.form = this._service.form;
    this.model = this._service.model;
    this.can_book = computed(
      () => !!this.model().asset_id,
      ...ngDevMode ? [{ debugName: "can_book" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.clearForm = () => this._service.clearForm();
  }
  async makeBooking() {
    await this._service.confirmPost();
    this._router.navigate(["/book", "desks", "success"]);
  }
  static {
    this.\u0275fac = function DeskBookingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskBookingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskBookingComponent, selectors: [["desk-booking"]], decls: 11, vars: 1, consts: [[1, "bg-base-200", "absolute", "inset-0", "overflow-auto"], [1, "border-base-300", "bg-base-100", "mx-auto", "min-h-full", "w-160", "max-w-full", "border-x", "pt-2"], [1, "bg-base-200", "sticky", "top-0", "z-10", "mx-auto", "mb-2", "flex", "h-14", "w-full", "max-w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-sm", "border-none", "px-4", "py-2"], [1, "text-xl", "font-medium", "capitalize"], [1, "border-base-200", "bg-base-100", "sticky", "bottom-0", "flex", "flex-col", "items-center", "space-y-2", "border-t", "px-4", "py-2", "sm:flex-row", "sm:space-y-0", "sm:space-x-2"], ["btn", "", "matRipple", "", 1, "w-full", "sm:flex-1", 3, "click", "disabled"], ["btn", "", "matRipple", "", 1, "inverse", "w-full", "sm:flex-1", 3, "click"]], template: function DeskBookingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "header", 2)(3, "h2", 3);
        \u0275\u0275text(4, "Book Desk");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(5, "desk-booking-form");
        \u0275\u0275elementStart(6, "div", 4)(7, "button", 5);
        \u0275\u0275listener("click", function DeskBookingComponent_Template_button_click_7_listener() {
          return ctx.makeBooking();
        });
        \u0275\u0275text(8, " Book Desk ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "button", 6);
        \u0275\u0275listener("click", function DeskBookingComponent_Template_button_click_9_listener() {
          return ctx.clearForm();
        });
        \u0275\u0275text(10, " Clear Form ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("disabled", !ctx.can_book());
      }
    }, dependencies: [DeskBookingFormComponent, MatRippleModule, MatRipple], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskBookingComponent, [{
    type: Component,
    args: [{ selector: "desk-booking", template: `
        <div class="bg-base-200 absolute inset-0 overflow-auto">
            <div
                class="border-base-300 bg-base-100 mx-auto min-h-full w-160 max-w-full border-x pt-2"
            >
                <header
                    class="bg-base-200 sticky top-0 z-10 mx-auto mb-2 flex h-14 w-full max-w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none px-4 py-2"
                >
                    <h2 class="text-xl font-medium capitalize">Book Desk</h2>
                </header>
                <desk-booking-form></desk-booking-form>
                <div
                    class="border-base-200 bg-base-100 sticky bottom-0 flex flex-col items-center space-y-2 border-t px-4 py-2 sm:flex-row sm:space-y-0 sm:space-x-2"
                >
                    <button
                        btn
                        matRipple
                        class="w-full sm:flex-1"
                        [disabled]="!can_book()"
                        (click)="makeBooking()"
                    >
                        Book Desk
                    </button>
                    <button
                        btn
                        matRipple
                        class="inverse w-full sm:flex-1"
                        (click)="clearForm()"
                    >
                        Clear Form
                    </button>
                </div>
            </div>
        </div>
    `, imports: [DeskBookingFormComponent, MatRippleModule] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskBookingComponent, { className: "DeskBookingComponent", filePath: "apps/outlook-addin/src/app/desks/desk-booking.component.ts", lineNumber: 51 });
})();
export {
  DeskBookingComponent
};
//# debugId=8f91b378-3710-55f4-924f-e353037dffb9
//# sourceMappingURL=desk-booking.component-EWQA5UNL.js.map
