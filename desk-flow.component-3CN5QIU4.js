import {
  NewDeskFlowSuccessComponent
} from "./chunk-T225X67C.js";
import {
  ExploreDeskInfoComponent
} from "./chunk-ORKS23NZ.js";
import "./chunk-GBJOW3S7.js";
import {
  AssetListFieldComponent,
  RecurrenceFieldComponent
} from "./chunk-G6J7EJE5.js";
import {
  MatBottomSheet,
  MatBottomSheetRef
} from "./chunk-4QCLI2CP.js";
import {
  MapPinComponent
} from "./chunk-D6RI74QI.js";
import {
  BuildingPipe
} from "./chunk-522KCILF.js";
import {
  DEFAULT_COLOURS
} from "./chunk-DSYSKWZO.js";
import {
  ImageCarouselComponent
} from "./chunk-YJXNKBR5.js";
import {
  InteractiveMapComponent
} from "./chunk-SWGDBPVT.js";
import {
  UserListFieldComponent
} from "./chunk-GXAOWMZT.js";
import "./chunk-V6QJECXO.js";
import {
  DurationFieldComponent
} from "./chunk-FTZKDMD6.js";
import {
  DateFieldComponent
} from "./chunk-QETXAJ5D.js";
import {
  UserSearchFieldComponent
} from "./chunk-X6SMJPDZ.js";
import "./chunk-UOZZZTZT.js";
import "./chunk-H2DZYM74.js";
import {
  SettingsToggleComponent
} from "./chunk-6GIBONXV.js";
import "./chunk-TC3NM2KE.js";
import {
  TimeFieldComponent
} from "./chunk-HEWP2W5O.js";
import {
  AuthenticatedImageDirective,
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-D3VYGJ6G.js";
import "./chunk-RVKWVUYC.js";
import "./chunk-7XVV4HK4.js";
import "./chunk-U66A4PGJ.js";
import "./chunk-I3OEOK2P.js";
import {
  BookingFormService,
  requiresLocker
} from "./chunk-56C27J3X.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSelect,
  MatSelectModule,
  findNearbyFeature
} from "./chunk-IVWYWRG7.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef
} from "./chunk-YEF7L372.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule
} from "./chunk-GBEZ2XD5.js";
import "./chunk-N4IXGM4A.js";
import "./chunk-DVFRHLZI.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-I5IZZO3Z.js";
import {
  MatOption
} from "./chunk-AFTIF56Q.js";
import {
  SpacePipe
} from "./chunk-5XMRXOYP.js";
import "./chunk-CRZDCPNP.js";
import "./chunk-7VF5TD5Y.js";
import {
  TranslatePipe
} from "./chunk-VZSWYXPT.js";
import {
  FormField
} from "./chunk-IB6WR7JO.js";
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-JZU6NIMO.js";
import {
  Booking,
  Desk,
  OrganisationService,
  SETTING_KEYS,
  SettingsService,
  currentUser,
  formatRecurrence,
  fromBookingRecurrence,
  isBefore,
  settingSignal
} from "./chunk-KTADYPHH.js";
import {
  IconComponent
} from "./chunk-3ZDLFGP6.js";
import {
  AsyncHandler
} from "./chunk-2FYBYRLM.js";
import {
  addDays,
  addMinutes,
  endOfDay,
  errorMessage,
  getInvalidSignalFields,
  getTimezoneOffsetString,
  i18n,
  isMobileSafari,
  notifyError,
  notifyInfo,
  set,
  startOfMinute
} from "./chunk-LSVIIU5S.js";
import "./chunk-3E4LH6FR.js";
import "./chunk-CL7UDZVD.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-FFDIHN6G.js";
import "./chunk-CENZX4JC.js";
import "./chunk-WWAEQFU7.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-ZTX66HDZ.js";
import {
  CommonModule,
  Component,
  DatePipe,
  Input,
  Output,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  model,
  output,
  setClassMetadata,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
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
  ɵɵpureFunction3,
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
} from "./chunk-6OEACKVR.js";
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
    this.hide_map = input(
      false,
      ...ngDevMode ? [{ debugName: "hide_map" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.close = output();
    this.toggleFav = output();
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskDetailsComponent, selectors: [["desk-details"]], inputs: { desk: [1, "desk"], fav: [1, "fav"], hide_map: [1, "hide_map"] }, outputs: { close: "close", toggleFav: "toggleFav" }, decls: 2, vars: 1, consts: [["empty", "", 1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "relative", "h-40", "w-full"], [1, "h-10", "w-full", "lg:hidden"], ["icon", "", "matRipple", "", "name", "close-desk-details", 1, "bg-base-200", "text-base-content", "absolute", "top-2", "left-2", "z-20", "lg:hidden", 3, "click"], ["icon", "", "matRipple", "", "name", "toggle-desk-favourite-details", 1, "bg-base-200", "absolute", "top-2", "right-2", "z-20", 3, "click"], [3, "className"], [1, "space-y-2", "px-2", "pt-0", "pb-2"], [1, "h-8", "w-full"], ["actions", "", 1, "z-0", "p-2"], [1, "mt-4", "mb-2", "text-2xl", "font-medium"], ["details", "", 1, "border-base-400", "relative", "space-y-2", "rounded-sm", "border", "px-3", "pt-4", "pb-2"], [1, "bg-base-100", "absolute", "top-0", "left-2", "-translate-y-1/2", "px-2", "text-lg", "font-medium"], [1, "flex", "items-center", "space-x-2"], ["facilities", "", 1, "border-base-400", "relative", "mt-4!", "space-y-2", "rounded-sm", "border", "px-2", "pt-1", "pb-1"], ["map", "", 1, "bg-base-200", "relative", "mx-auto", "h-64", "w-full", "overflow-hidden", "rounded-sm", "sm:h-48"], [1, "absolute", "inset-0", 3, "images"], [1, "flex", "flex-wrap", "items-center"], ["for", "feat", 1, "border-base-300", "m-1", "rounded-full", "border", "px-4", "py-2", "text-sm", "capitalize"], [1, "pointer-events-none", 3, "src", "focus", "features", "options"], [1, "text-center", "opacity-30"]], template: function DeskDetailsComponent_Template(rf, ctx) {
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
  }], null, { desk: [{ type: Input, args: [{ isSignal: true, alias: "desk", required: false }] }], fav: [{ type: Input, args: [{ isSignal: true, alias: "fav", required: false }] }], hide_map: [{ type: Input, args: [{ isSignal: true, alias: "hide_map", required: false }] }], close: [{ type: Output, args: ["close"] }], toggleFav: [{ type: Output, args: ["toggleFav"] }] });
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskFiltersDisplayComponent, selectors: [["desk-filters-display"]], decls: 11, vars: 10, consts: [["filters", "", 1, "border-base-300", "bg-base-100", "sticky", "-top-1", "z-20", "-mx-1", "mb-4!", "flex", "w-[calc(100%+0.5rem)]", "flex-wrap", "items-center", "rounded-sm", "border", "p-1", "pr-10!", "sm:pr-1!"], ["btn", "", "matRipple", "", "name", "clear-desk-filters", 1, "mr-2", "mb-2", "min-h-8"], ["filter-item", "", "date", ""], ["filter-item", "", "time", ""], ["filter-item", "", "features", ""], ["filter-item", ""], ["btn", "", "matRipple", "", "name", "clear-desk-filters", 1, "mr-2", "mb-2", "min-h-8", 3, "click"], ["icon", "", "matRipple", "", "name", "remove-desk-filter", 1, "-mr-4", 3, "click"], [1, "text-base"], ["icon", "", "matRipple", "", "name", "remove-desk-favs-filter", 1, "-mr-4", 3, "click"]], template: function DeskFiltersDisplayComponent_Template(rf, ctx) {
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
  }], null, null);
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
      return \u0275\u0275resetView(ctx_r1.setOptions({ zones: $event }));
    });
    \u0275\u0275repeaterCreate(3, DeskFiltersComponent_Conditional_13_For_4_Template, 5, 3, "mat-option", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.options()?.zones)("ngModelOptions", \u0275\u0275pureFunction0(6, _c03))("placeholder", \u0275\u0275pipeBind1(2, 4, "COMMON.LEVEL_ANY"))("multiple", true);
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
    this._clear_invalid_levels = effect(
      () => {
        const zones = this.options()?.zones || [];
        if (!zones.length)
          return;
        if (!this._state.resources().length)
          return;
        const valid_zones = zones.filter((zone_id) => this.levels().some((lvl) => lvl.id === zone_id));
        if (valid_zones.length !== zones.length) {
          this._state.setOptions({ zones: valid_zones });
        }
      },
      ...ngDevMode ? [{ debugName: "_clear_invalid_levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.setOptions = (o) => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
    this.setLevel = (_l) => {
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskFiltersComponent, selectors: [["desk-filters"]], inputs: { hide_levels: [1, "hide_levels"] }, decls: 25, vars: 25, consts: [[1, "border-base-300", "bg-base-100", "sticky", "top-0", "z-10", "flex", "items-center", "border-b", "px-4", "py-4"], [1, "text-xl", "font-medium"], [1, "divide-base-200", "relative", "z-0", "w-full", "divide-y", "p-2"], ["details", ""], [1, "mb-1", "text-lg", "font-medium"], [1, "flex", "min-w-32", "flex-1", "flex-col"], ["for", "location"], ["appearance", "outline", 1, "w-full"], [1, "flex-1"], ["name", "date", 3, "ngModelChange", "ngModel", "ngModelOptions", "to", "timezone"], [1, "-mt-2", "mb-2", "flex", "justify-end"], [1, "flex", "items-center", "space-x-2"], ["favs", "", 1, "space-y-2", "pb-4"], ["features", "", 1, "space-y-2"], ["name", "region", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value"], ["name", "building", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder", "multiple"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [3, "formField"], [1, "w-1/3", "flex-1"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr", "timezone", "range"], [3, "formField", "time", "max", "min", "step", "use_24hr", "timezone", "end_time"], [1, "mt-2", "text-lg", "font-medium"], [1, "flex", "w-full", "items-center"], [1, "w-full", 3, "ngModelChange", "label", "ngModel", "ngModelOptions"], [1, "flex", "flex-wrap", "items-center", "space-x-2"], [1, "w-full", "capitalize", 3, "ngModelChange", "label", "ngModel", "ngModelOptions"]], template: function DeskFiltersComponent_Template(rf, ctx) {
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
        \u0275\u0275conditionalCreate(13, DeskFiltersComponent_Conditional_13_Template, 5, 7, "mat-form-field", 7);
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
                                [ngModel]="options()?.zones"
                                (ngModelChange)="setOptions({ zones: $event })"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="'COMMON.LEVEL_ANY' | translate"
                                [multiple]="true"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskFiltersComponent, { className: "DeskFiltersComponent", filePath: "libs/bookings/src/lib/desk-select-modal/desk-filters.component.ts", lineNumber: 242 });
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskListComponent, { className: "DeskListComponent", filePath: "libs/bookings/src/lib/desk-select-modal/desk-list.component.ts", lineNumber: 136 });
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
    this.active = input(
      "",
      ...ngDevMode ? [{ debugName: "active" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.onSelect = output();
    this.available = input(
      null,
      ...ngDevMode ? [{ debugName: "available" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.desks = computed(
      () => this.available() ?? this._state.available_resources(),
      ...ngDevMode ? [{ debugName: "desks" }] : (
        /* istanbul ignore next */
        []
      )
    );
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
      () => this.desks().map((desk) => ({
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
      const free_desks = this.desks();
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
      const { zones, zone_id } = this._state.options();
      const level_ids = zones?.length ? zones : [zone_id];
      if (level_ids.includes(untracked(this.level)?.id))
        return;
      const level = this._org.levelWithID(level_ids);
      if (level)
        this.level.set(level);
    });
  }
  selectDesk(desk) {
    this.onSelect.emit(desk);
  }
  setLevel(level) {
    this.setOptions({
      zones: level ? [level.id] : [],
      zone_id: level?.id
    });
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskMapComponent, selectors: [["desk-map"]], inputs: { active: [1, "active"], available: [1, "available"], zoom: [1, "zoom"], center: [1, "center"] }, outputs: { onSelect: "onSelect", zoom: "zoomChange", center: "centerChange" }, decls: 4, vars: 9, consts: [[1, "border-base-200", "bg-base-100", "w-full", "border-b", "p-2"], ["levels", "", "appearance", "outline", 1, "no-subscript", "w-full"], [1, "relative", "w-full", "flex-1"], [3, "zoomChange", "centerChange", "src", "zoom", "center", "styles", "features", "actions", "options"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"]], template: function DeskMapComponent_Template(rf, ctx) {
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
  }], () => [], { active: [{ type: Input, args: [{ isSignal: true, alias: "active", required: false }] }], onSelect: [{ type: Output, args: ["onSelect"] }], available: [{ type: Input, args: [{ isSignal: true, alias: "available", required: false }] }], zoom: [{ type: Input, args: [{ isSignal: true, alias: "zoom", required: false }] }, { type: Output, args: ["zoomChange"] }], center: [{ type: Input, args: [{ isSignal: true, alias: "center", required: false }] }, { type: Output, args: ["centerChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskMapComponent, { className: "DeskMapComponent", filePath: "libs/bookings/src/lib/desk-select-modal/desk-map.component.ts", lineNumber: 104 });
})();

// libs/bookings/src/lib/desk-select-modal/desk-select-modal.component.ts
function DeskSelectModalComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "desk-filters-display");
  }
}
function DeskSelectModalComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "desk-list", 23);
    \u0275\u0275listener("toggleFav", function DeskSelectModalComponent_Conditional_22_Template_desk_list_toggleFav_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFavourite($event));
    })("onSelect", function DeskSelectModalComponent_Conditional_22_Template_desk_list_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r1);
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
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "desk-map", 24);
    \u0275\u0275listener("onSelect", function DeskSelectModalComponent_Conditional_23_Template_desk_map_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.displayed.set($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("active", ctx_r1.displayed()?.id);
  }
}
function DeskSelectModalComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function DeskSelectModalComponent_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
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
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function DeskSelectModalComponent_Conditional_27_Template_button_click_0_listener() {
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
function DeskSelectModalComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 18)(1, "div", 27)(2, "icon", 21);
    \u0275\u0275text(3, "done");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 28);
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
      this._settings.get(SETTING_KEYS.FAVORITE_DESKS) || [],
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
    if (!item?.id)
      return;
    const fav_list = this._settings.get(SETTING_KEYS.FAVORITE_DESKS) || this.favorites();
    const new_state = !fav_list.includes(item.id);
    const next_favs = new_state ? [...fav_list, item.id] : fav_list.filter((_) => _ !== item.id);
    this.favorites.set(next_favs);
    this._settings.saveUserSetting(SETTING_KEYS.FAVORITE_DESKS, next_favs);
  }
  static {
    this.\u0275fac = function DeskSelectModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskSelectModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskSelectModalComponent, selectors: [["desk-select-modal"]], decls: 37, vars: 63, consts: [[1, "bg-base-100", "mb-18", "flex", "h-[calc(100vh-4.5rem)]", "max-h-[calc(100vh-4.5rem)]", "w-screen", "flex-col", "space-y-2", "overflow-hidden", "p-2", "sm:m-0", "sm:h-auto", "sm:w-auto"], [1, "bg-base-200", "flex", "h-14", "w-full", "items-center", "space-x-2", "rounded-sm", "border-none", "p-2"], [1, "flex-1", "px-2", "text-xl", "font-medium", "capitalize"], [1, "divide-secondary", "border-secondary", "flex", "divide-x", "rounded-sm", "border"], ["icon", "", "matRipple", "", 1, "rounded-l", "rounded-r-none", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "rounded-l-none", "rounded-r", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "relative", "flex", "h-1/2", "max-h-[calc(100vh-7rem)]", "flex-1", "sm:h-[65vh]", "sm:flex-none", "sm:space-x-2"], [1, "border-base-300", "h-full", "w-full", "overflow-x-hidden", "overflow-y-auto", "rounded-sm", "border", "shadow-sm", "sm:block", "sm:w-[20rem]"], [3, "hide_levels"], ["list", "", 1, "border-base-300", "bg-base-200", "h-full", "w-full", "min-w-[20rem]", "overflow-auto", "rounded-sm", "border", "sm:w-[20rem]", "lg:block"], [3, "active", "selected", "favorites"], [1, "h-full", "min-h-[60vh]", "w-full", 3, "active"], [1, "border-base-300", "relative", "h-full", "w-full", "overflow-auto", "rounded-sm", "border", "shadow-sm", "sm:w-[20rem]"], ["icon", "", "matRipple", "", 1, "border-base-300", "bg-base-100", "absolute", "top-2", "left-2", "z-20", "hidden", "border", "md:flex"], [3, "toggleFav", "close", "desk", "hide_map", "fav"], ["icon", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "absolute", "top-3", "right-2", "z-20", "border", "sm:hidden"], [1, "bg-base-200", "flex", "w-full", "items-center", "space-x-2", "rounded-sm", "border-none", "p-2"], ["btn", "", "matRipple", "", "name", "desk-return", 1, "inverse", "bg-base-100", "text-secondary", 3, "mat-dialog-close"], ["btn", "", "matRipple", "", "name", "toggle-desk", 3, "click", "disabled"], [1, "flex", "items-center"], [1, "text-xl"], [1, "mr-1"], [3, "toggleFav", "onSelect", "active", "selected", "favorites"], [1, "h-full", "min-h-[60vh]", "w-full", 3, "onSelect", "active"], ["icon", "", "matRipple", "", 1, "border-base-300", "bg-base-100", "absolute", "top-2", "left-2", "z-20", "hidden", "border", "md:flex", 3, "click"], ["icon", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "absolute", "top-3", "right-2", "z-20", "border", "sm:hidden", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"]], template: function DeskSelectModalComponent_Template(rf, ctx) {
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
        \u0275\u0275conditionalCreate(21, DeskSelectModalComponent_Conditional_21_Template, 1, 0, "desk-filters-display");
        \u0275\u0275conditionalCreate(22, DeskSelectModalComponent_Conditional_22_Template, 1, 3, "desk-list", 11)(23, DeskSelectModalComponent_Conditional_23_Template, 1, 1, "desk-map", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 13);
        \u0275\u0275conditionalCreate(25, DeskSelectModalComponent_Conditional_25_Template, 3, 0, "button", 14);
        \u0275\u0275elementStart(26, "desk-details", 15);
        \u0275\u0275listener("toggleFav", function DeskSelectModalComponent_Template_desk_details_toggleFav_26_listener() {
          return ctx.toggleFavourite(ctx.displayed());
        })("close", function DeskSelectModalComponent_Template_desk_details_close_26_listener() {
          return ctx.displayed.set(null);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(27, DeskSelectModalComponent_Conditional_27_Template, 3, 1, "button", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "footer", 17);
        \u0275\u0275conditionalCreate(29, DeskSelectModalComponent_Conditional_29_Template, 7, 4, "button", 18);
        \u0275\u0275elementStart(30, "button", 19);
        \u0275\u0275listener("click", function DeskSelectModalComponent_Template_button_click_30_listener() {
          return ctx.toggleDisplayedDesk();
        });
        \u0275\u0275elementStart(31, "div", 20)(32, "icon", 21);
        \u0275\u0275text(33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 22);
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("height", ctx.is_safari() ? "calc(100vh - 80px)" : "");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 55, "BOOKINGS.DESK_FIND"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("bg-base-100", ctx.view() !== "list")("bg-secondary", ctx.view() === "list")("text-secondary-content", ctx.view() === "list");
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 57, "COMMON.LIST"));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("bg-base-100", ctx.view() !== "map")("bg-secondary", ctx.view() === "map")("text-secondary-content", ctx.view() === "map");
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(11, 59, "COMMON.MAP"));
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
        \u0275\u0275property("desk", ctx.displayed())("hide_map", ctx.view() === "map")("fav", ctx.displayed() && ctx.favorites().includes(ctx.displayed()?.id));
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
        \u0275\u0275textInterpolate1(" ", ctx.allow_multiple() ? \u0275\u0275pipeBind1(36, 61, ctx.isSelected(ctx.displayed()?.id) ? "COMMON.REMOVE_FROM" : "COMMON.ADD_TO") : "Select Desk", " ");
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
                        <desk-filters-display></desk-filters-display>
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
                        [hide_map]="view() === 'map'"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskSelectModalComponent, { className: "DeskSelectModalComponent", filePath: "libs/bookings/src/lib/desk-select-modal/desk-select-modal.component.ts", lineNumber: 230 });
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

// apps/workplace/src/app/book/desk-flow/desk-flow-confirm.component.ts
var _c07 = (a0) => ({ time: a0 });
var _c15 = (a0) => ({ count: a0 });
function NewDeskFlowConfirmComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 3);
  }
}
function NewDeskFlowConfirmComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function NewDeskFlowConfirmComponent_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismiss());
    });
    \u0275\u0275elementStart(1, "icon", 19);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function NewDeskFlowConfirmComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "icon", 8);
    \u0275\u0275text(2, "update");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatted_recurrence);
  }
}
function NewDeskFlowConfirmComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formattedTime(ctx_r1.tz), " ");
  }
}
function NewDeskFlowConfirmComponent_Conditional_27_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "icon");
    \u0275\u0275text(2, "arrow_upward");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feat_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(feat_r3);
  }
}
function NewDeskFlowConfirmComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "icon", 6);
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7)(4, "h3", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 9)(7, "icon");
    \u0275\u0275text(8, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 9)(13, "icon");
    \u0275\u0275text(14, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(17, NewDeskFlowConfirmComponent_Conditional_27_For_18_Template, 5, 1, "div", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.booking_asset()?.name || ctx_r1.booking_asset()?.id || "", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 3, ctx_r1.is_group() ? "BOOKINGS.DESK_COUNT_GROUP" : "BOOKINGS.DESK_COUNT_LONE"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.location);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.booking_asset().features);
  }
}
function NewDeskFlowConfirmComponent_Conditional_28_For_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "icon");
    \u0275\u0275text(2, "priority_high");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const request_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matTooltip", ctx_r1.err_tooltip(request_r4));
  }
}
function NewDeskFlowConfirmComponent_Conditional_28_For_8_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "span", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.name || "Item");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" x", item_r5.quantity, " ");
  }
}
function NewDeskFlowConfirmComponent_Conditional_28_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "div", 26)(3, "div", 27);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, NewDeskFlowConfirmComponent_Conditional_28_For_8_Conditional_7_Template, 3, 1, "div", 28);
    \u0275\u0275element(8, "div", 29);
    \u0275\u0275elementStart(9, "div", 30);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 31);
    \u0275\u0275repeaterCreate(13, NewDeskFlowConfirmComponent_Conditional_28_For_8_For_14_Template, 6, 2, "div", 32, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const request_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-error", ctx_r1.end_time < request_r4.deliver_at)("border-base-300", ctx_r1.end_time >= request_r4.deliver_at);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 10, "FORM.ASSETS_REQUESTED_FOR", \u0275\u0275pureFunction1(16, _c07, \u0275\u0275pipeBind2(5, 7, request_r4.deliver_at_time, "MMM d, " + ctx_r1.time_format))), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.end_time < request_r4.deliver_at || request_r4.conflict ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 13, "COMMON.ITEM_COUNT", \u0275\u0275pureFunction1(18, _c15, request_r4.item_count)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(request_r4.items);
  }
}
function NewDeskFlowConfirmComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14)(1, "icon", 21);
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22)(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(7, NewDeskFlowConfirmComponent_Conditional_28_For_8_Template, 15, 20, "div", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "BOOKINGS.DESK_ASSETS_REQUESTED"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.assets);
  }
}
function NewDeskFlowConfirmComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 15)(1, "icon", 21);
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 34)(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 35)(8, "span");
    \u0275\u0275text(9, "Locker E-043");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "BOOKINGS.DESK_LOCKER_REQUESTED"));
  }
}
function NewDeskFlowConfirmComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function NewDeskFlowConfirmComponent_Conditional_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.postForm());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.CONFIRM"), " ");
  }
}
var NewDeskFlowConfirmComponent = class _NewDeskFlowConfirmComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this._sheet_ref = inject(MatBottomSheetRef, { optional: true });
    this._settings = inject(SettingsService);
    this.show_close = model(
      false,
      ...ngDevMode ? [{ debugName: "show_close" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._date = new DatePipe("en");
    this.booking_asset = signal(
      null,
      ...ngDevMode ? [{ debugName: "booking_asset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = this._state.loading;
    this.is_group = computed(
      () => this._state.options().group,
      ...ngDevMode ? [{ debugName: "is_group" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.postForm = async () => {
      try {
        if (this._state.options()?.group) {
          const booking = new Booking(this._state.model());
          if (booking.id) {
            const sibling_list = await this._state.loadGroupSiblings(booking);
            await this._state.editFormForGroup(sibling_list.length ? sibling_list : [booking]);
          } else {
            await this._state.postFormForGroup();
          }
        } else {
          await this._state.postForm();
        }
        this.dismiss(true);
      } catch (e) {
        notifyError(errorMessage(e) || i18n(`BOOKINGS.DESK_AVAILABLE_ERROR`));
      }
    };
    this.dismiss = (e) => this._sheet_ref?.dismiss(e);
  }
  err_tooltip(request) {
    return request.conflict ? i18n("FORM.ASSETS_CLASH_ERROR") : i18n("FORM.ASSETS_TIME_ERROR");
  }
  formattedTime(tz) {
    const date = this.booking.date;
    const date_end = this.booking.date_end;
    const all_day = this.booking.all_day;
    const tz_format = this._date.transform(date, "zzzz", tz);
    const start_date = this._date.transform(date, "MMM d", tz);
    const start_time = this._date.transform(date, this.time_format, tz);
    const end_date = this._date.transform(date_end, "MMM d", tz);
    const end_time = this._date.transform(date_end, this.time_format, tz);
    if (this.is_multiday) {
      return `${start_date}${all_day ? "" : ", " + start_time} - ${end_date}${all_day ? "" : ", " + end_time}`;
    } else if (all_day) {
      return i18n("COMMON.ALL_DAY");
    }
    return `${start_time} - ${end_time} ${"(" + tz_format + ")"}`;
  }
  get end_time() {
    const end = addMinutes(this.booking.date, this.booking.duration).valueOf();
    return this.booking.all_day ? endOfDay(end).valueOf() : end;
  }
  get booking() {
    return this._state.model();
  }
  get is_multiday() {
    return this.booking.duration > 24 * 60;
  }
  get time_format() {
    return this._settings.time_format;
  }
  get timezone() {
    return this._settings.get("app.desks.use_building_timezone") ? this._org.building.timezone : "";
  }
  get can_book_lockers() {
    return this._settings.get("app.desks.can_book_lockers");
  }
  get tz() {
    const tz = this.timezone;
    if (!tz)
      return "";
    return getTimezoneOffsetString(tz);
  }
  get assets() {
    return this.booking.assets || null;
  }
  get needs_locker() {
    return requiresLocker(this.booking.secondary_resource) && this.can_book_lockers;
  }
  get assets_count() {
    return this.assets?.length ? this.assets.reduce((a, b) => a + b.amount, 0) : 0;
  }
  get location() {
    const building = this._org.buildings.find((b) => b.id === this.booking_asset()?.zone?.parent_id);
    const level = this._org.levels.find((l) => l.id === this.booking_asset()?.zone?.id);
    return `${level?.display_name || level?.name}${building ? "," : ""} ${building?.address || building?.display_name || building?.name || ""}`;
  }
  get formatted_recurrence() {
    return formatRecurrence(fromBookingRecurrence(this.booking), this.booking?.date);
  }
  async ngOnInit() {
    const resources = await this._state.listResources();
    const asset = this.booking.booking_asset;
    this.booking_asset.set(resources.find((_) => _.id == asset.id));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NewDeskFlowConfirmComponent_BaseFactory;
      return function NewDeskFlowConfirmComponent_Factory(__ngFactoryType__) {
        return (\u0275NewDeskFlowConfirmComponent_BaseFactory || (\u0275NewDeskFlowConfirmComponent_BaseFactory = \u0275\u0275getInheritedFactory(_NewDeskFlowConfirmComponent)))(__ngFactoryType__ || _NewDeskFlowConfirmComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDeskFlowConfirmComponent, selectors: [["desk-flow-confirm"]], inputs: { show_close: [1, "show_close"] }, outputs: { show_close: "show_closeChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 32, vars: 17, consts: [[1, "bg-base-200", "sticky", "top-2", "z-10", "mx-auto", "mb-4", "flex", "h-14", "w-full", "max-w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-sm", "border-none", "p-2"], [1, "m-0", "flex-1", "px-2", "text-xl", "font-medium", "capitalize"], [1, ""], ["diameter", "32"], ["icon", "", "name", "close-desk-confirm", "matRipple", ""], ["period", "", 1, "flex", "space-x-1", "px-2", "py-4", "text-base"], [1, "text-success", "text-2xl"], ["details", "", 1, "space-y-2"], [1, "text-xl"], [1, "flex", "items-center", "space-x-2"], ["date", ""], ["time", ""], [1, "text-xs", "opacity-30"], ["desk", "", 1, "border-neutral", "flex", "space-x-1", "border-t", "px-2", "py-4", "text-base"], ["assets", "", 1, "flex", "max-h-[50vh]", "space-x-1", "overflow-auto", "border-t", "px-2", "py-4"], ["locker", "", 1, "flex", "space-x-1", "border-t", "px-2", "py-4"], [1, "border-base-200", "mt-4", "w-full", "border-t", "p-2"], ["name", "confirm-desk", "btn", "", "matRipple", "", 1, "w-full"], ["icon", "", "name", "close-desk-confirm", "matRipple", "", 3, "click"], [1, "text-2xl"], ["features", "", 1, "flex", "items-center", "space-x-2"], [1, "text-success"], ["details", "", 1, "w-1/2", "flex-1", "pr-2", "leading-6"], ["request", "", 1, "bg-base-100", "overflow-hidden", "rounded-xl", "border", 3, "border-error", "border-base-300"], ["request", "", 1, "bg-base-100", "overflow-hidden", "rounded-xl", "border"], [1, "flex", "items-center", "space-x-2", "p-3"], [1, "flex", "flex-1", "items-center", "space-x-2"], [1, "text-sm"], [1, "bg-error", "text-error-content", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", 3, "matTooltip"], [1, "flex-1"], [1, "bg-success", "text-success-content", "rounded-sm", "px-2", "py-1", "text-xs"], [1, "divide-base-100", "bg-base-200", "flex", "flex-col", "divide-y"], [1, "flex", "items-center", "space-x-2", "px-3", "py-1", "hover:opacity-90"], [1, "flex", "flex-1", "items-center"], ["details", "", 1, "leading-6"], [1, "flex", "space-x-2"], ["name", "confirm-desk", "btn", "", "matRipple", "", 1, "w-full", 3, "click"]], template: function NewDeskFlowConfirmComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2);
        \u0275\u0275conditionalCreate(5, NewDeskFlowConfirmComponent_Conditional_5_Template, 1, 0, "mat-spinner", 3);
        \u0275\u0275conditionalCreate(6, NewDeskFlowConfirmComponent_Conditional_6_Template, 3, 0, "button", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "section", 5)(8, "icon", 6);
        \u0275\u0275text(9, "done");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 7)(11, "h3", 8);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 9)(14, "icon", 8);
        \u0275\u0275text(15, "calendar_today");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 10);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(19, NewDeskFlowConfirmComponent_Conditional_19_Template, 5, 1, "div", 9);
        \u0275\u0275elementStart(20, "div", 9)(21, "icon", 8);
        \u0275\u0275text(22, "schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 11)(24, "div", 11);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(26, NewDeskFlowConfirmComponent_Conditional_26_Template, 2, 1, "div", 12);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(27, NewDeskFlowConfirmComponent_Conditional_27_Template, 19, 5, "section", 13);
        \u0275\u0275conditionalCreate(28, NewDeskFlowConfirmComponent_Conditional_28_Template, 9, 3, "section", 14);
        \u0275\u0275conditionalCreate(29, NewDeskFlowConfirmComponent_Conditional_29_Template, 10, 3, "section", 15);
        \u0275\u0275elementStart(30, "footer", 16);
        \u0275\u0275conditionalCreate(31, NewDeskFlowConfirmComponent_Conditional_31_Template, 3, 3, "button", 17);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 12, "APP.WORKPLACE.DESK_CONFIRM_TITLE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_close() && !ctx.loading() ? 6 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.booking.title || "~Untitled~");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 14, ctx.booking.date, "fullDate"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.booking.recurrence_type && ctx.booking.recurrence_type !== "none" ? 19 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.formattedTime());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.timezone ? 26 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.booking_asset()?.id ? 27 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.assets.length ? 28 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.needs_locker ? 29 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 31 : -1);
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatTooltipModule,
      MatTooltip,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewDeskFlowConfirmComponent, [{
    type: Component,
    args: [{ selector: "desk-flow-confirm", template: `
        <header
            class="bg-base-200 sticky top-2 z-10 mx-auto mb-4 flex h-14 w-full max-w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none p-2"
        >
            <h2 class="m-0 flex-1 px-2 text-xl font-medium capitalize">
                {{ 'APP.WORKPLACE.DESK_CONFIRM_TITLE' | translate }}
            </h2>
            <div class="">
                @if (loading()) {
                    <mat-spinner diameter="32"></mat-spinner>
                }
                @if (show_close() && !loading()) {
                    <button
                        icon
                        name="close-desk-confirm"
                        matRipple
                        (click)="dismiss()"
                    >
                        <icon class="text-2xl">close</icon>
                    </button>
                }
            </div>
        </header>
        <section period class="flex space-x-1 px-2 py-4 text-base">
            <icon class="text-success text-2xl">done</icon>
            <div details class="space-y-2">
                <h3 class="text-xl">{{ booking.title || '~Untitled~' }}</h3>
                <div class="flex items-center space-x-2">
                    <icon class="text-xl">calendar_today</icon>
                    <div date>{{ booking.date | date: 'fullDate' }}</div>
                </div>
                @if (
                    booking.recurrence_type &&
                    booking.recurrence_type !== 'none'
                ) {
                    <div class="flex items-center space-x-2">
                        <icon class="text-xl">update</icon>
                        <div date>{{ formatted_recurrence }}</div>
                    </div>
                }
                <div class="flex items-center space-x-2">
                    <icon class="text-xl">schedule</icon>
                    <div time>
                        <div time>{{ formattedTime() }}</div>
                        @if (timezone) {
                            <div class="text-xs opacity-30">
                                {{ formattedTime(tz) }}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
        @if (booking_asset()?.id) {
            <section
                desk
                class="border-neutral flex space-x-1 border-t px-2 py-4 text-base"
            >
                <icon class="text-success text-2xl">done</icon>
                <div details class="space-y-2">
                    <h3 class="text-xl">
                        {{ booking_asset()?.name || booking_asset()?.id || '' }}
                    </h3>
                    <div class="flex items-center space-x-2">
                        <icon>person</icon>
                        <span>
                            {{
                                (is_group()
                                    ? 'BOOKINGS.DESK_COUNT_GROUP'
                                    : 'BOOKINGS.DESK_COUNT_LONE'
                                ) | translate
                            }}
                        </span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <icon>place</icon>
                        <div>{{ location }}</div>
                    </div>
                    @for (feat of booking_asset().features; track feat) {
                        <div features class="flex items-center space-x-2">
                            <icon>arrow_upward</icon>
                            <div>{{ feat }}</div>
                        </div>
                    }
                </div>
            </section>
        }
        @if (assets.length) {
            <section
                assets
                class="flex max-h-[50vh] space-x-1 overflow-auto border-t px-2 py-4"
            >
                <icon class="text-success">done</icon>
                <div details class="w-1/2 flex-1 pr-2 leading-6">
                    <h3>{{ 'BOOKINGS.DESK_ASSETS_REQUESTED' | translate }}</h3>
                    @for (request of assets; track request) {
                        <div
                            request
                            class="bg-base-100 overflow-hidden rounded-xl border"
                            [class.border-error]="end_time < request.deliver_at"
                            [class.border-base-300]="
                                end_time >= request.deliver_at
                            "
                        >
                            <div class="flex items-center space-x-2 p-3">
                                <div class="flex flex-1 items-center space-x-2">
                                    <div class="text-sm">
                                        {{
                                            'FORM.ASSETS_REQUESTED_FOR'
                                                | translate
                                                    : {
                                                          time:
                                                              request.deliver_at_time
                                                              | date
                                                                  : 'MMM d, ' +
                                                                        time_format,
                                                      }
                                        }}
                                    </div>
                                    @if (
                                        end_time < request.deliver_at ||
                                        request.conflict
                                    ) {
                                        <div
                                            class="bg-error text-error-content flex h-6 w-6 items-center justify-center rounded-full"
                                            [matTooltip]="err_tooltip(request)"
                                        >
                                            <icon>priority_high</icon>
                                        </div>
                                    }
                                    <div class="flex-1"></div>
                                    <div
                                        class="bg-success text-success-content rounded-sm px-2 py-1 text-xs"
                                    >
                                        {{
                                            'COMMON.ITEM_COUNT'
                                                | translate
                                                    : {
                                                          count: request.item_count,
                                                      }
                                        }}
                                    </div>
                                </div>
                            </div>
                            <div
                                class="divide-base-100 bg-base-200 flex flex-col divide-y"
                            >
                                @for (item of request.items; track item) {
                                    <div
                                        class="flex items-center space-x-2 px-3 py-1 hover:opacity-90"
                                    >
                                        <div class="flex flex-1 items-center">
                                            <span class="text-sm">{{
                                                item.name || 'Item'
                                            }}</span>
                                        </div>
                                        <div
                                            class="bg-success text-success-content rounded-sm px-2 py-1 text-xs"
                                        >
                                            x{{ item.quantity }}
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    }
                </div>
            </section>
        }
        @if (needs_locker) {
            <section locker class="flex space-x-1 border-t px-2 py-4">
                <icon class="text-success">done</icon>
                <div details class="leading-6">
                    <h3>{{ 'BOOKINGS.DESK_LOCKER_REQUESTED' | translate }}</h3>
                    <div class="flex space-x-2">
                        <span>Locker E-043</span>
                    </div>
                </div>
            </section>
        }
        <footer class="border-base-200 mt-4 w-full border-t p-2">
            @if (!loading()) {
                <button
                    name="confirm-desk"
                    btn
                    matRipple
                    class="w-full"
                    (click)="postForm()"
                >
                    {{ 'COMMON.CONFIRM' | translate }}
                </button>
            }
        </footer>
    `, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatProgressSpinnerModule,
      MatTooltipModule
    ] }]
  }], null, { show_close: [{ type: Input, args: [{ isSignal: true, alias: "show_close", required: false }] }, { type: Output, args: ["show_closeChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskFlowConfirmComponent, { className: "NewDeskFlowConfirmComponent", filePath: "apps/workplace/src/app/book/desk-flow/desk-flow-confirm.component.ts", lineNumber: 238 });
})();

// apps/workplace/src/app/book/desk-flow/desk-form-details.component.ts
var _c08 = () => ({ standalone: true });
var _c16 = () => [];
var _c2 = (a0, a1, a2) => ({ date: a0, duration: a1, all_day: a2 });
function NewDeskFormDetailsComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 1)(1, "button", 18);
    \u0275\u0275listener("click", function NewDeskFormDetailsComponent_Conditional_0_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ group: false, members: [] }));
    });
    \u0275\u0275elementStart(2, "icon", 19);
    \u0275\u0275text(3, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 18);
    \u0275\u0275listener("click", function NewDeskFormDetailsComponent_Conditional_0_Conditional_1_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ group: true }));
    });
    \u0275\u0275elementStart(9, "icon", 19);
    \u0275\u0275text(10, "group_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 20);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "div", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-secondary", !ctx_r1.options()?.group);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 14, "BOOKINGS.DESK_LONE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-base-200", ctx_r1.options()?.group)("bg-secondary", !ctx_r1.options()?.group);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-secondary", ctx_r1.options()?.group);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 16, "COMMON.GROUP"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-base-200", !ctx_r1.options()?.group)("bg-secondary", ctx_r1.options()?.group);
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-user-search-field", 22);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "FORM.HOST"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r1.form().user);
    \u0275\u0275control();
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formField", ctx_r1.form().all_day);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.ALL_DAY"), " ");
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 23)(2, "label", 24);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a-time-field", 25);
    \u0275\u0275listener("ngModelChange", function NewDeskFormDetailsComponent_Conditional_0_Conditional_33_Template_a_time_field_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setUserValues({ date: $event }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 23)(9, "label", 26);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "a-duration-field", 27);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 17, "FORM.TIME_START"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.model().date)("ngModelOptions", \u0275\u0275pureFunction0(21, _c08))("range", ctx_r1.bookable_hours)("min_duration", ctx_r1.effective_min_duration)("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 19, "FORM.TIME_END"));
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r1.form().duration)("time", ctx_r1.model().date)("max", ctx_r1.max_duration)("min", ctx_r1.min_duration)("step", ctx_r1.duration_step)("custom_options", ctx_r1.custom_duration_options)("end_time", ctx_r1.bookable_hours?.end)("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
    \u0275\u0275control();
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Conditional_34_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 30);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formField", ctx_r1.form().update_master);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "FORM.UPDATE_FUTURE"), " ");
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "label", 28);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "recurrence-field", 29);
    \u0275\u0275listener("ngModelChange", function NewDeskFormDetailsComponent_Conditional_0_Conditional_34_Template_recurrence_field_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onRecurrenceChange($event));
    })("first_instance", function NewDeskFormDetailsComponent_Conditional_0_Conditional_34_Template_recurrence_field_first_instance_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFirstInstanceChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(7, NewDeskFormDetailsComponent_Conditional_0_Conditional_34_Conditional_7_Template, 3, 4, "mat-checkbox", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "FORM.RECURRENCE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("date", ctx_r1.model().date)("ngModel", ctx_r1.model())("ngModelOptions", \u0275\u0275pureFunction0(8, _c08))("available_days", ctx_r1.available_days());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.model().id ? 7 : -1);
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 23)(2, "mat-checkbox", 31);
    \u0275\u0275listener("ngModelChange", function NewDeskFormDetailsComponent_Conditional_0_Conditional_35_Template_mat_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setUserValues({ secondary_resource: $event ? "locker" : "" }));
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.requires_locker())("ngModelOptions", \u0275\u0275pureFunction0(5, _c08));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "BOOKINGS.DESK_REQUIRE_LOCKER"), " ");
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 2)(1, "h3", 16)(2, "div", 4);
    \u0275\u0275text(3, " 2 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 33)(9, "a-user-list-field", 34);
    \u0275\u0275listener("ngModelChange", function NewDeskFormDetailsComponent_Conditional_0_Conditional_36_Template_a_user_list_field_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ members: $event }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 3, "BOOKINGS.DESK_GROUP_MEMBERS"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.options()?.members || \u0275\u0275pureFunction0(5, _c16))("ngModelOptions", \u0275\u0275pureFunction0(6, _c08));
    \u0275\u0275control();
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Conditional_37_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 35);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "BOOKINGS.DESK_GROUP_INFO"), " ");
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "h3", 3)(2, "div", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "desk-list-field", 30);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(8, NewDeskFormDetailsComponent_Conditional_0_Conditional_37_Conditional_8_Template, 3, 3, "p", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.options()?.group ? 3 : 2, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, ctx_r1.options()?.group ? "BOOKINGS.DESK_GROUP_SELECT" : "RESOURCE.DESK"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r1.form().resources);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.options()?.group ? 8 : -1);
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "p", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "BOOKINGS.DESK_AUTO_ALLOCATION_INFO"), " ");
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "h3", 3)(2, "div", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "asset-list-field", 37);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.options()?.group ? 4 : 3, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "RESOURCE.ASSETS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("options", \u0275\u0275pureFunction3(6, _c2, ctx_r1.model().date, ctx_r1.model().duration, ctx_r1.model().all_day))("formField", ctx_r1.form().assets);
    \u0275\u0275control();
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, NewDeskFormDetailsComponent_Conditional_0_Conditional_1_Template, 15, 18, "section", 1);
    \u0275\u0275elementStart(2, "section", 2)(3, "h3", 3)(4, "div", 4);
    \u0275\u0275text(5, " 1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, NewDeskFormDetailsComponent_Conditional_0_Conditional_9_Template, 5, 4, "div", 6);
    \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "label", 9);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "mat-form-field", 10);
    \u0275\u0275element(18, "input", 11);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(20, "mat-error");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 12)(24, "label", 13);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "a-date-field", 14);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(32, NewDeskFormDetailsComponent_Conditional_0_Conditional_32_Template, 3, 4, "mat-checkbox", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(33, NewDeskFormDetailsComponent_Conditional_0_Conditional_33_Template, 15, 22, "div", 16);
    \u0275\u0275conditionalCreate(34, NewDeskFormDetailsComponent_Conditional_0_Conditional_34_Template, 8, 9, "div", 17);
    \u0275\u0275conditionalCreate(35, NewDeskFormDetailsComponent_Conditional_0_Conditional_35_Template, 5, 6, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(36, NewDeskFormDetailsComponent_Conditional_0_Conditional_36_Template, 10, 7, "section", 2);
    \u0275\u0275conditionalCreate(37, NewDeskFormDetailsComponent_Conditional_0_Conditional_37_Template, 9, 6, "section", 2);
    \u0275\u0275conditionalCreate(38, NewDeskFormDetailsComponent_Conditional_0_Conditional_38_Template, 4, 3, "section", 2);
    \u0275\u0275conditionalCreate(39, NewDeskFormDetailsComponent_Conditional_0_Conditional_39_Template, 8, 10, "section", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.allow_groups ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-none!", ctx_r1.allow_groups);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 22, "COMMON.DETAILS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can_book_for_others && !ctx_r1.options()?.group ? 9 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 24, "FORM.TITLE"));
    \u0275\u0275advance(5);
    \u0275\u0275property("formField", ctx_r1.form().title)("placeholder", \u0275\u0275pipeBind1(19, 26, "BOOKINGS.DESK_TITLE_PLACEHOLDER"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 28, "FORM.TITLE_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 30, "FORM.DATE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r1.form().date)("to", ctx_r1.end_date())("timezone", ctx_r1.timezone);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 32, "FORM.DATE_REQUIRED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.allow_all_day ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.model().all_day && ctx_r1.allow_time_changes ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_recurr ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_book_lockers ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.options()?.group ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.model().resources && !ctx_r1.auto_allocation ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.auto_allocation ? 38 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.has_assets && !ctx_r1.options()?.group ? 39 : -1);
  }
}
var NewDeskFormDetailsComponent = class _NewDeskFormDetailsComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.form = input(
      void 0,
      ...ngDevMode ? [{ debugName: "form" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.model_input = input(
      void 0,
      ...ngDevMode ? [{ debugName: "model_input" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.find = output();
    this.buildings = this._org.building_list;
    this.levels = this._org.active_levels;
    this.options = this._state.options;
    this.features = this._state.features;
    this.minimum_duration = 60;
    this.from_id = false;
    this.recurrence_options = ["daily", "weekly", "monthly"];
    this.setOptions = (o) => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
    this.setUserValues = (value) => this._state.setUserValues(value);
    this.requires_locker = computed(
      () => requiresLocker(this.model().secondary_resource),
      ...ngDevMode ? [{ debugName: "requires_locker" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.available_days = settingSignal("desks.available_period", 90);
    this.end_date = computed(
      () => {
        return endOfDay(addDays(Date.now(), this.available_days())).valueOf();
      },
      ...ngDevMode ? [{ debugName: "end_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  /** Writable signal holding the raw booking form value */
  get model() {
    return this.model_input();
  }
  get building() {
    return this._org.building;
  }
  set building(bld) {
    this._org.building = bld;
  }
  get max_duration() {
    return this._settings.get("app.desks.max_duration") || this._settings.get("app.bookings.max_duration") || 8 * 60;
  }
  get can_book_for_others() {
    return this._settings.get("app.bookings.can_book_for_others") || this._settings.get("app.desks.can_book_for_others");
  }
  get can_book_lockers() {
    return this._settings.get("app.desks.can_book_lockers");
  }
  get can_recurr() {
    return this._settings.get("app.desks.allow_recurrence");
  }
  get allow_groups() {
    return this._settings.get("app.desks.allow_groups");
  }
  get has_assets() {
    return !!this._settings.get("app.bookings.has_assets") || !!this._settings.get("app.desks.has_assets");
  }
  get auto_allocation() {
    return !!this._state.auto_allocation;
  }
  get allow_time_changes() {
    return this._settings.get("app.desks.allow_time_changes") !== false;
  }
  get allow_all_day() {
    return this.allow_time_changes && (this._settings.get("app.desks.allow_all_day") ?? !!this._settings.get("app.bookings.allow_all_day"));
  }
  get timezone() {
    return this._settings.get("app.bookings.use_building_timezone") || this._settings.get("app.desks.use_building_timezone") ? this._org.building?.timezone || "" : "";
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  get bookable_hours() {
    return this._settings.get("app.desks.bookable_hours") || this._settings.get("app.bookings.bookable_hours");
  }
  get min_duration() {
    return this._settings.get("app.desks.min_duration") || this._settings.get("app.bookings.min_duration") || 60;
  }
  get duration_step() {
    return this._settings.get("app.desks.duration_step") || this._settings.get("app.bookings.duration_step") || 30;
  }
  get custom_duration_options() {
    return this._settings.get("app.desks.custom_duration_options") || this._settings.get("app.bookings.custom_duration_options") || [];
  }
  get effective_min_duration() {
    return Math.min(this.min_duration, ...this.custom_duration_options);
  }
  ngOnChanges(changes) {
    const model2 = this.model;
    if (changes.form && model2) {
      if (this.selected_desk?.id) {
        model2.update((m) => __spreadProps(__spreadValues({}, m), {
          resources: [this.selected_desk],
          asset_id: this.selected_desk.id
        }));
      }
    }
  }
  onRecurrenceChange(recurrence) {
    this.setUserValues(recurrence);
  }
  onFirstInstanceChange(date) {
    this.setUserValues({ date });
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NewDeskFormDetailsComponent_BaseFactory;
      return function NewDeskFormDetailsComponent_Factory(__ngFactoryType__) {
        return (\u0275NewDeskFormDetailsComponent_BaseFactory || (\u0275NewDeskFormDetailsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_NewDeskFormDetailsComponent)))(__ngFactoryType__ || _NewDeskFormDetailsComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDeskFormDetailsComponent, selectors: [["desk-form-details"]], inputs: { form: [1, "form"], model_input: [1, "model_input"] }, outputs: { find: "find" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [[1, "divide-base-200", "space-y-2", "divide-y"], [1, "flex", "items-center"], [1, "p-2"], [1, "mb-4", "flex", "items-center", "space-x-2"], [1, "bg-base-200", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full"], [1, "text-xl"], [1, "w-full"], [1, "flex", "flex-wrap", "items-center", "sm:space-x-2"], [1, "min-w-[256px]", "flex-1"], ["for", "title"], ["appearance", "outline", 1, "w-full"], ["matInput", "", 3, "formField", "placeholder"], [1, "relative", "min-w-[256px]", "flex-1"], ["for", "date"], [3, "formField", "to", "timezone"], [1, "absolute", "-top-2", "right-0", 3, "formField"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "flex-col"], ["matRipple", "", 1, "relative", "flex", "h-16", "flex-1", "items-center", "justify-center", "space-x-2", 3, "click"], [1, "text-2xl"], [1, ""], [1, "absolute", "inset-x-0", "bottom-0", "m-0!", "h-1"], [1, "mb-4", 3, "formField"], [1, "w-1/3", "flex-1"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "range", "min_duration", "use_24hr", "timezone"], ["for", "end-time"], [3, "formField", "time", "max", "min", "step", "custom_options", "end_time", "use_24hr", "timezone"], ["for", "recurrence"], ["name", "recurrence", 3, "ngModelChange", "first_instance", "date", "ngModel", "ngModelOptions", "available_days"], [3, "formField"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "w-px", "flex-1"], [1, "overflow-hidden"], [1, "mt-4", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "bg-warning", "rounded-sm", "px-2", "py-1", "text-center", "text-xs", "shadow-sm"], [1, "bg-info/10", "text-info", "rounded-sm", "px-4", "py-3", "text-center", "text-sm"], [3, "options", "formField"]], template: function NewDeskFormDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, NewDeskFormDetailsComponent_Conditional_0_Template, 40, 34, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.form() && ctx.model ? 0 : -1);
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      AssetListFieldComponent,
      DeskListFieldComponent,
      UserListFieldComponent,
      MatCheckboxModule,
      MatCheckbox,
      RecurrenceFieldComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      FormsModule,
      NgControlStatus,
      NgModel,
      FormField,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      UserSearchFieldComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewDeskFormDetailsComponent, [{
    type: Component,
    args: [{ selector: "desk-form-details", template: `
        <!-- <div class="m-2 bg-warning p-2 text-center rounded-sm shadow-sm text-sm">
        The selected desk hasn't been booked. Please book the desk to be
        able to check-in.
        </div> -->
        @if (form() && model) {
            <div class="divide-base-200 space-y-2 divide-y">
                @if (allow_groups) {
                    <section class="flex items-center">
                        <button
                            matRipple
                            class="relative flex h-16 flex-1 items-center justify-center space-x-2"
                            [class.text-secondary]="!options()?.group"
                            (click)="setOptions({ group: false, members: [] })"
                        >
                            <icon class="text-2xl">person</icon>
                            <div class="">
                                {{ 'BOOKINGS.DESK_LONE' | translate }}
                            </div>
                            <div
                                class="absolute inset-x-0 bottom-0 m-0! h-1"
                                [class.bg-base-200]="options()?.group"
                                [class.bg-secondary]="!options()?.group"
                            ></div>
                        </button>
                        <button
                            matRipple
                            class="relative flex h-16 flex-1 items-center justify-center space-x-2"
                            [class.text-secondary]="options()?.group"
                            (click)="setOptions({ group: true })"
                        >
                            <icon class="text-2xl">group_add</icon>
                            <div class="">
                                {{ 'COMMON.GROUP' | translate }}
                            </div>
                            <div
                                class="absolute inset-x-0 bottom-0 m-0! h-1"
                                [class.bg-base-200]="!options()?.group"
                                [class.bg-secondary]="options()?.group"
                            ></div>
                        </button>
                    </section>
                }
                <section class="p-2" [class.border-none!]="allow_groups">
                    <h3 class="mb-4 flex items-center space-x-2">
                        <div
                            class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                        >
                            1
                        </div>
                        <div class="text-xl">
                            {{ 'COMMON.DETAILS' | translate }}
                        </div>
                    </h3>
                    @if (can_book_for_others && !options()?.group) {
                        <div class="w-full">
                            <label for="title">{{
                                'FORM.HOST' | translate
                            }}</label>
                            <a-user-search-field
                                [formField]="form().user"
                                class="mb-4"
                            ></a-user-search-field>
                        </div>
                    }
                    <div class="flex flex-wrap items-center sm:space-x-2">
                        <div class="min-w-[256px] flex-1">
                            <label for="title"
                                >{{ 'FORM.TITLE' | translate
                                }}<span>*</span></label
                            >
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    [formField]="form().title"
                                    [placeholder]="
                                        'BOOKINGS.DESK_TITLE_PLACEHOLDER'
                                            | translate
                                    "
                                />
                                <mat-error>{{
                                    'FORM.TITLE_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                        <div class="relative min-w-[256px] flex-1">
                            <label for="date">
                                {{ 'FORM.DATE' | translate }}<span>*</span>
                            </label>
                            <a-date-field
                                [formField]="form().date"
                                [to]="end_date()"
                                [timezone]="timezone"
                            >
                                {{ 'FORM.DATE_REQUIRED' | translate }}
                            </a-date-field>
                            @if (allow_all_day) {
                                <mat-checkbox
                                    [formField]="form().all_day"
                                    class="absolute -top-2 right-0"
                                >
                                    {{ 'COMMON.ALL_DAY' | translate }}
                                </mat-checkbox>
                            }
                        </div>
                    </div>
                    @if (!model().all_day && allow_time_changes) {
                        <div class="flex items-center space-x-2">
                            <div class="w-1/3 flex-1">
                                <label for="start-time">
                                    {{ 'FORM.TIME_START' | translate
                                    }}<span>*</span>
                                </label>
                                <a-time-field
                                    name="start-time"
                                    [ngModel]="model().date"
                                    (ngModelChange)="
                                        setUserValues({ date: $event })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [range]="bookable_hours"
                                    [min_duration]="effective_min_duration"
                                    [use_24hr]="use_24hr"
                                    [timezone]="timezone"
                                ></a-time-field>
                            </div>
                            <div class="w-1/3 flex-1">
                                <label for="end-time">
                                    {{ 'FORM.TIME_END' | translate
                                    }}<span>*</span>
                                </label>
                                <a-duration-field
                                    [formField]="form().duration"
                                    [time]="model().date"
                                    [max]="max_duration"
                                    [min]="min_duration"
                                    [step]="duration_step"
                                    [custom_options]="custom_duration_options"
                                    [end_time]="bookable_hours?.end"
                                    [use_24hr]="use_24hr"
                                    [timezone]="timezone"
                                >
                                </a-duration-field>
                            </div>
                        </div>
                    }
                    @if (can_recurr) {
                        <div class="flex flex-col">
                            <label for="recurrence">
                                {{ 'FORM.RECURRENCE' | translate
                                }}<span>*</span>
                            </label>
                            <recurrence-field
                                name="recurrence"
                                [date]="model().date"
                                [ngModel]="model()"
                                (ngModelChange)="onRecurrenceChange($event)"
                                (first_instance)="onFirstInstanceChange($event)"
                                [ngModelOptions]="{ standalone: true }"
                                [available_days]="available_days()"
                            ></recurrence-field>
                            @if (model().id) {
                                <mat-checkbox
                                    [formField]="form().update_master"
                                >
                                    {{ 'FORM.UPDATE_FUTURE' | translate }}
                                </mat-checkbox>
                            }
                        </div>
                    }
                    @if (can_book_lockers) {
                        <div class="flex items-center space-x-2">
                            <div class="w-1/3 flex-1">
                                <mat-checkbox
                                    [ngModel]="requires_locker()"
                                    (ngModelChange)="
                                        setUserValues({
                                            secondary_resource: $event
                                                ? 'locker'
                                                : '',
                                        })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                >
                                    {{
                                        'BOOKINGS.DESK_REQUIRE_LOCKER'
                                            | translate
                                    }}
                                </mat-checkbox>
                            </div>
                        </div>
                    }
                </section>
                @if (options()?.group) {
                    <section class="p-2">
                        <h3 class="flex items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                2
                            </div>
                            <div class="text-xl">
                                {{ 'BOOKINGS.DESK_GROUP_MEMBERS' | translate }}
                            </div>
                            <div class="w-px flex-1"></div>
                        </h3>
                        <div class="overflow-hidden">
                            <a-user-list-field
                                class="mt-4"
                                [ngModel]="options()?.members || []"
                                (ngModelChange)="
                                    setOptions({ members: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                            ></a-user-list-field>
                        </div>
                    </section>
                }
                @if (model().resources && !auto_allocation) {
                    <section class="p-2">
                        <h3 class="mb-4 flex items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                {{ options()?.group ? 3 : 2 }}
                            </div>
                            <div class="text-xl">
                                {{
                                    (options()?.group
                                        ? 'BOOKINGS.DESK_GROUP_SELECT'
                                        : 'RESOURCE.DESK'
                                    ) | translate
                                }}
                            </div>
                        </h3>
                        <desk-list-field
                            [formField]="form().resources"
                        ></desk-list-field>
                        @if (options()?.group) {
                            <p
                                class="bg-warning rounded-sm px-2 py-1 text-center text-xs shadow-sm"
                            >
                                {{ 'BOOKINGS.DESK_GROUP_INFO' | translate }}
                            </p>
                        }
                    </section>
                }
                @if (auto_allocation) {
                    <section class="p-2">
                        <p
                            class="bg-info/10 text-info rounded-sm px-4 py-3 text-center text-sm"
                        >
                            {{
                                'BOOKINGS.DESK_AUTO_ALLOCATION_INFO' | translate
                            }}
                        </p>
                    </section>
                }
                @if (has_assets && !options()?.group) {
                    <section class="p-2">
                        <h3 class="mb-4 flex items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                {{ options()?.group ? 4 : 3 }}
                            </div>
                            <div class="text-xl">
                                {{ 'RESOURCE.ASSETS' | translate }}
                            </div>
                        </h3>
                        <asset-list-field
                            [options]="{
                                date: model().date,
                                duration: model().duration,
                                all_day: model().all_day,
                            }"
                            [formField]="form().assets"
                        ></asset-list-field>
                    </section>
                }
            </div>
        }
    `, imports: [
      CommonModule,
      IconComponent,
      TranslatePipe,
      AssetListFieldComponent,
      DeskListFieldComponent,
      UserListFieldComponent,
      MatCheckboxModule,
      RecurrenceFieldComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      FormsModule,
      FormField,
      MatFormFieldModule,
      MatInputModule,
      UserSearchFieldComponent
    ] }]
  }], null, { form: [{ type: Input, args: [{ isSignal: true, alias: "form", required: false }] }], model_input: [{ type: Input, args: [{ isSignal: true, alias: "model_input", required: false }] }], find: [{ type: Output, args: ["find"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskFormDetailsComponent, { className: "NewDeskFormDetailsComponent", filePath: "apps/workplace/src/app/book/desk-flow/desk-form-details.component.ts", lineNumber: 350 });
})();

// apps/workplace/src/app/book/desk-flow/desk-flow-form.component.ts
function NewDeskFlowFormComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "icon", 10);
    \u0275\u0275text(3, "chair_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 11);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 12);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "BOOKINGS.DESK_RESERVED_TITLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 4, "BOOKINGS.DESK_RESERVED_MESSAGE"), " ");
  }
}
var NewDeskFlowFormComponent = class _NewDeskFlowFormComponent {
  constructor() {
    this._state = inject(BookingFormService);
    this._router = inject(Router);
    this._org = inject(OrganisationService);
    this._bottom_sheet = inject(MatBottomSheet);
    this.level = "";
    this.levels = [];
    this.show_reserved_desk_overlay = computed(
      () => this._state.has_assigned_desk() && this._state.assignedResourceBooking("desk") === "deny",
      ...ngDevMode ? [{ debugName: "show_reserved_desk_overlay" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.clearForm = () => {
      this.level = this._org.building.id;
      this._state.clearForm();
    };
    this.viewConfirm = async () => {
      if (this._state.auto_allocation) {
        try {
          await this._state.autoAllocateDesk();
        } catch (e) {
          return notifyError(typeof e === "string" ? e : i18n("BOOKINGS.DESK_AVAILABLE_ERROR"));
        }
      }
      const { asset_id, resources } = this.model();
      if (resources?.length && asset_id !== resources[0].id) {
        this.model.update((m) => __spreadProps(__spreadValues({}, m), { asset_id: resources[0].id }));
      }
      if (!this.form().valid())
        return notifyError(i18n("FORM.INVALID_FIELDS", {
          field_list: getInvalidSignalFields(this.form, this.model).join(", ")
        }));
      this.sheet_ref = this._bottom_sheet.open(NewDeskFlowConfirmComponent);
      this.sheet_ref.instance.show_close.set(true);
      this.sheet_ref.afterDismissed().subscribe((value) => {
        if (value) {
          this._state.setView("success");
          this._router.navigate(["/book", "desk", "success"]);
        }
      });
    };
  }
  get form() {
    return this._state.form;
  }
  get model() {
    return this._state.model;
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    await this._waitForActiveLevels();
    this._state.setOptions({ type: "desk" });
    this.level = this._org.building?.id;
    this.levels = [
      { id: this._org.building?.id, name: "Any Level" },
      ...this._org.levelsForBuilding(this._org.building)
    ];
    if (!this.model().id && isBefore(this.model().date, Date.now())) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        date: startOfMinute(Date.now()).valueOf()
      }));
    }
  }
  async _waitForActiveLevels() {
    while (!this._org.active_levels()?.length) {
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
  }
  static {
    this.\u0275fac = function NewDeskFlowFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewDeskFlowFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDeskFlowFormComponent, selectors: [["desk-flow-form"]], decls: 13, vars: 13, consts: [[1, "relative", "h-full", "w-full"], [1, "bg-base-200", "h-full", "w-full"], [1, "border-base-200", "bg-base-100", "mx-auto", "w-3xl", "max-w-full", "border", "sm:my-4"], [1, "border-base-200", "w-full", "border-b", "p-4", "text-2xl", "font-medium", "sm:px-16", "sm:py-4"], [1, "block", "p-0", "sm:px-16", "sm:py-4", 3, "form", "model_input"], [1, "border-base-200", "w-full", "border-b", "sm:mb-2"], [1, "flex", "flex-col", "items-center", "p-2", "sm:mb-2", "sm:flex-row", "sm:space-x-2", "sm:px-16"], ["btn", "", "name", "open-desk-confirm", "matRipple", "", "confirm", "", 1, "w-full", "sm:w-auto", 3, "click"], ["name", "reserved-desk-overlay", 1, "bg-base-200/80", "absolute", "inset-0", "z-20", "flex", "items-center", "justify-center", "p-4", "backdrop-blur-sm"], [1, "bg-base-100", "border-base-200", "flex", "w-[26rem]", "max-w-full", "flex-col", "items-center", "space-y-2", "rounded-lg", "border", "p-8", "text-center", "shadow-lg"], [1, "text-info", "text-6xl"], [1, "text-xl", "font-medium"], [1, "opacity-60"]], template: function NewDeskFlowFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "desk-form-details", 4)(7, "div", 5);
        \u0275\u0275elementStart(8, "section", 6)(9, "button", 7);
        \u0275\u0275listener("click", function NewDeskFlowFormComponent_Template_button_click_9_listener() {
          return ctx.viewConfirm();
        });
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(12, NewDeskFlowFormComponent_Conditional_12_Template, 10, 6, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275classProp("overflow-auto", !ctx.show_reserved_desk_overlay())("overflow-hidden", ctx.show_reserved_desk_overlay());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 9, "BOOKINGS.DESK_TITLE"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("form", ctx.form)("model_input", ctx.model);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 11, "BOOKINGS.DESK_CONFIRM"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.show_reserved_desk_overlay() ? 12 : -1);
      }
    }, dependencies: [
      NewDeskFormDetailsComponent,
      MatRippleModule,
      MatRipple,
      IconComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewDeskFlowFormComponent, [{
    type: Component,
    args: [{ selector: "desk-flow-form", template: `
        <div class="relative h-full w-full">
            <div
                class="bg-base-200 h-full w-full"
                [class.overflow-auto]="!show_reserved_desk_overlay()"
                [class.overflow-hidden]="show_reserved_desk_overlay()"
            >
                <div
                    class="border-base-200 bg-base-100 mx-auto w-3xl max-w-full border sm:my-4"
                >
                    <h2
                        class="border-base-200 w-full border-b p-4 text-2xl font-medium sm:px-16 sm:py-4"
                    >
                        {{ 'BOOKINGS.DESK_TITLE' | translate }}
                    </h2>
                    <desk-form-details
                        class="block p-0 sm:px-16 sm:py-4"
                        [form]="form"
                        [model_input]="model"
                    ></desk-form-details>
                    <div class="border-base-200 w-full border-b sm:mb-2"></div>
                    <section
                        class="flex flex-col items-center p-2 sm:mb-2 sm:flex-row sm:space-x-2 sm:px-16"
                    >
                        <button
                            btn
                            name="open-desk-confirm"
                            matRipple
                            confirm
                            class="w-full sm:w-auto"
                            (click)="viewConfirm()"
                        >
                            {{ 'BOOKINGS.DESK_CONFIRM' | translate }}
                        </button>
                    </section>
                </div>
            </div>
            @if (show_reserved_desk_overlay()) {
                <div
                    name="reserved-desk-overlay"
                    class="bg-base-200/80 absolute inset-0 z-20 flex items-center justify-center p-4 backdrop-blur-sm"
                >
                    <div
                        class="bg-base-100 border-base-200 flex w-[26rem] max-w-full flex-col items-center space-y-2 rounded-lg border p-8 text-center shadow-lg"
                    >
                        <icon class="text-info text-6xl">chair_alt</icon>
                        <h3 class="text-xl font-medium">
                            {{ 'BOOKINGS.DESK_RESERVED_TITLE' | translate }}
                        </h3>
                        <p class="opacity-60">
                            {{ 'BOOKINGS.DESK_RESERVED_MESSAGE' | translate }}
                        </p>
                    </div>
                </div>
            }
        </div>
    `, imports: [
      TranslatePipe,
      NewDeskFormDetailsComponent,
      MatRippleModule,
      IconComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskFlowFormComponent, { className: "NewDeskFlowFormComponent", filePath: "apps/workplace/src/app/book/desk-flow/desk-flow-form.component.ts", lineNumber: 87 });
})();

// apps/workplace/src/app/book/desk-flow.component.ts
function NewDeskFlowComponent_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "desk-flow-success");
  }
}
function NewDeskFlowComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "desk-flow-form");
  }
}
var NewDeskFlowComponent = class _NewDeskFlowComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this._route = inject(ActivatedRoute);
    this._space_pipe = new SpacePipe(this._org);
    this.view = this._state.view;
  }
  get last_success() {
    return this._state.last_success;
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    await new Promise((resolve) => setTimeout(resolve, 300));
    const active_form = this._state.model();
    const has_edit_state = !!active_form?.id && active_form?.booking_type === "desk";
    if (!has_edit_state)
      this._state.loadForm("desk");
    this._state.setOptions({ type: "desk" });
    const { id, booking_type } = this._state.model();
    if (!id || booking_type !== "desk")
      this._state.newForm("desk");
    this._state.model.update((m) => __spreadProps(__spreadValues({}, m), { booking_type: "desk" }));
    if (id && booking_type === "desk") {
      const booking = new Booking(this._state.model());
      const is_group = !!booking.parent_id || !!booking.group || !!booking.extension_data?.group_members?.length;
      if (is_group) {
        const members = await this._state.loadGroupMembersForBooking(booking);
        this._state.setOptions({
          group: true,
          members
        });
      }
    }
    this.subscription("route.params", this._route.paramMap.subscribe((param) => {
      if (param.has("step"))
        this._state.setView(param.get("step"));
    }));
    const params = this._route.snapshot.queryParamMap;
    if (params.has("success")) {
      this._state.setView(params.get("success"));
    }
    if (params.has("asset_id")) {
      const id2 = params.get("asset_id");
      await this._waitForResources();
      const resources = await this._state.listResources();
      const asset = resources.find((_) => _.id === id2);
      if (!asset) {
        return notifyInfo("Unable to find desk with given asset ID.");
      }
      this._state.model.update((m) => __spreadProps(__spreadValues({}, m), {
        asset_id: asset.id,
        resources: [
          new Desk({
            id: asset.id,
            name: asset.name || asset.id,
            zone: asset.zone || this._org.levelsForBuilding()[0]
          })
        ]
      }));
    }
    if (params.has("nearby_space")) {
      await this._initNearbyDeskBooking(params.get("nearby_space"), parseInt(params.get("date"), 10) || Date.now());
    }
  }
  async _waitForResources() {
    while (this._state.loading()) {
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
  }
  async _initNearbyDeskBooking(space_id, event_date) {
    const space = await this._space_pipe.transform(space_id);
    const level = this._org.levelWithID(space?.zones);
    this._state.setOptions({ type: "desk", zone_id: level?.id });
    this._state.model.update((m) => __spreadProps(__spreadValues({}, m), {
      date: set(event_date, { hours: 8, minutes: 0 }).valueOf(),
      duration: 10 * 60,
      all_day: true,
      booking_type: "desk",
      user: currentUser()
    }));
    if (!level?.map_id)
      return notifyError(i18n("APP.WORKPLACE.MEETING_DESK_ERROR"));
    const resources = await this._state.listAvailableResources();
    const mapID = (resource2) => resource2.map_id || resource2.id;
    const bookable_desks = resources.map(mapID).filter((i) => i);
    const nearby = await findNearbyFeature(level.map_id, space?.map_id, bookable_desks);
    const resource = resources.find((_) => mapID(_) === nearby);
    if (!resource)
      return notifyError(i18n("APP.WORKPLACE.MEETING_DESK_ERROR"));
    this._state.model.update((m) => __spreadProps(__spreadValues({}, m), {
      date: set(event_date, { hours: 8, minutes: 0 }).valueOf(),
      duration: 10 * 60,
      all_day: true,
      booking_type: "desk",
      asset_id: resource.id,
      asset_name: resource.name,
      resources: [resource]
    }));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NewDeskFlowComponent_BaseFactory;
      return function NewDeskFlowComponent_Factory(__ngFactoryType__) {
        return (\u0275NewDeskFlowComponent_BaseFactory || (\u0275NewDeskFlowComponent_BaseFactory = \u0275\u0275getInheritedFactory(_NewDeskFlowComponent)))(__ngFactoryType__ || _NewDeskFlowComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDeskFlowComponent, selectors: [["placeos-new-book-desk-flow"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 1, consts: [[1, "bg-base-100", "z-50", "h-full", "w-full"]], template: function NewDeskFlowComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, NewDeskFlowComponent_Case_1_Template, 1, 0, "desk-flow-success")(2, NewDeskFlowComponent_Case_2_Template, 1, 0, "desk-flow-form");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_0_0 = ctx.view()) === "success" ? 1 : 2);
      }
    }, dependencies: [NewDeskFlowSuccessComponent, NewDeskFlowFormComponent], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=desk-flow.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewDeskFlowComponent, [{
    type: Component,
    args: [{ selector: "placeos-new-book-desk-flow", template: `
        <div class="bg-base-100 z-50 h-full w-full">
            @switch (view()) {
                @case ('success') {
                    <desk-flow-success></desk-flow-success>
                }
                @default {
                    <desk-flow-form></desk-flow-form>
                }
            }
        </div>
    `, imports: [NewDeskFlowSuccessComponent, NewDeskFlowFormComponent], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/book/desk-flow.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=desk-flow.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskFlowComponent, { className: "NewDeskFlowComponent", filePath: "apps/workplace/src/app/book/desk-flow.component.ts", lineNumber: 47 });
})();
export {
  NewDeskFlowComponent
};
//# debugId=ea3668e3-d327-5804-ab3c-1ccc949198db
//# sourceMappingURL=desk-flow.component-3CN5QIU4.js.map
