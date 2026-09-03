import {
  LockerGridComponent
} from "./chunk-CFFGOHVA.js";
import {
  LevelPipe
} from "./chunk-FXNHTIGR.js";
import {
  ExploreDeskInfoComponent
} from "./chunk-ARANS6QM.js";
import {
  BookingFormService
} from "./chunk-HMHNINPX.js";
import {
  BuildingPipe
} from "./chunk-Q3FWPFLQ.js";
import {
  DEFAULT_COLOURS
} from "./chunk-PO7COAOQ.js";
import {
  DurationFieldComponent
} from "./chunk-HOIF25TY.js";
import {
  DateFieldComponent
} from "./chunk-CDKBW3NC.js";
import {
  InteractiveMapComponent
} from "./chunk-GAUYNR6I.js";
import {
  SettingsToggleComponent
} from "./chunk-DOSJYTUP.js";
import {
  TimeFieldComponent
} from "./chunk-GINQHFO3.js";
import {
  AuthenticatedImageDirective,
  MatCheckbox,
  MatCheckboxModule,
  MatTooltip,
  MatTooltipModule
} from "./chunk-IIZSAZAC.js";
import {
  AsyncHandler,
  FormField,
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
  SettingsService,
  loadLockerBanksForScope,
  loadLockersForScope
} from "./chunk-C7WVCQQJ.js";
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
  resource,
  setClassMetadata,
  signal,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
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
} from "./chunk-BNHBVNSC.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/bookings/src/lib/locker-select-modal/locker-bank-list.component.ts
var _c0 = (a0) => ({ count: a0 });
var _c1 = (a0, a1) => ({ count: a0, total: a1 });
function LockerBankListComponent_Conditional_6_Conditional_0_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function LockerBankListComponent_Conditional_6_Conditional_0_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10);
  }
  if (rf & 2) {
    const locker_bank_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", locker_bank_r2.images[0]);
  }
}
function LockerBankListComponent_Conditional_6_Conditional_0_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 11);
  }
}
function LockerBankListComponent_Conditional_6_Conditional_0_For_2_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const locker_bank_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", locker_bank_r2.tags[0], " ");
  }
}
function LockerBankListComponent_Conditional_6_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 6)(1, "button", 7);
    \u0275\u0275listener("click", function LockerBankListComponent_Conditional_6_Conditional_0_For_2_Template_button_click_1_listener() {
      const locker_bank_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectLockerBank(locker_bank_r2));
    });
    \u0275\u0275elementStart(2, "div", 8);
    \u0275\u0275conditionalCreate(3, LockerBankListComponent_Conditional_6_Conditional_0_For_2_Conditional_3_Template, 3, 0, "div", 9);
    \u0275\u0275conditionalCreate(4, LockerBankListComponent_Conditional_6_Conditional_0_For_2_Conditional_4_Template, 1, 1, "img", 10)(5, LockerBankListComponent_Conditional_6_Conditional_0_For_2_Conditional_5_Template, 1, 0, "img", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12)(7, "h3", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 14)(10, "icon", 15);
    \u0275\u0275text(11, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 16);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "level");
    \u0275\u0275pipe(15, "level");
    \u0275\u0275pipe(16, "level");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 17)(18, "icon", 15);
    \u0275\u0275text(19, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 16);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(23, LockerBankListComponent_Conditional_6_Conditional_0_For_2_Conditional_23_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const locker_bank_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("!border-blue-400", ctx_r2.active() === locker_bank_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.selected().includes(locker_bank_r2.id) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(locker_bank_r2.images?.length ? 4 : 5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", locker_bank_r2.name || locker_bank_r2.id || "Locker_bank", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 8, locker_bank_r2.zones) ? \u0275\u0275pipeBind1(15, 10, locker_bank_r2.zones)?.display_name || \u0275\u0275pipeBind1(16, 12, locker_bank_r2.zones)?.name : "", " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(22, 14, "COMMON.AVAILABLE_COUNT", \u0275\u0275pureFunction2(17, _c1, locker_bank_r2.available || 0, locker_bank_r2.lockers.length || 1)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(locker_bank_r2.tags?.length ? 23 : -1);
  }
}
function LockerBankListComponent_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 3);
    \u0275\u0275repeaterCreate(1, LockerBankListComponent_Conditional_6_Conditional_0_For_2_Template, 24, 20, "li", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.locker_banks());
  }
}
function LockerBankListComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "BOOKINGS.LOCKER_LIST_EMPTY"), " ");
  }
}
function LockerBankListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LockerBankListComponent_Conditional_6_Conditional_0_Template, 3, 0, "ul", 3)(1, LockerBankListComponent_Conditional_6_Conditional_1_Template, 4, 3, "div", 4);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.locker_banks()?.length ? 0 : 1);
  }
}
function LockerBankListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-spinner", 20);
    \u0275\u0275elementStart(2, "p", 21);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "BOOKINGS.LOCKER_LIST_LOADING"), " ");
  }
}
var LockerBankListComponent = class _LockerBankListComponent {
  constructor() {
    this._state = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
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
    this._use_region = this._settings.signal("use_region", false);
    this._scope_id = computed(
      () => {
        const region = this._org.active_region();
        const bld = this._org.active_building();
        if (this._use_region())
          return region?.id || this._org.region?.id;
        return bld?.id;
      },
      ...ngDevMode ? [{ debugName: "_scope_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._locker_banks_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_locker_banks_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        const scope_id = this._scope_id();
        return scope_id ? { scope_id } : void 0;
      },
      loader: ({ params: { scope_id } }) => loadLockerBanksForScope(this._org, scope_id)
    }));
    this._banks = computed(
      () => this._locker_banks_resource.value() ?? [],
      ...ngDevMode ? [{ debugName: "_banks" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._lockers_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_lockers_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        const scope_id = this._scope_id();
        const banks = this._banks();
        return scope_id && banks.length ? { scope_id, banks } : void 0;
      },
      loader: ({ params: { scope_id, banks } }) => loadLockersForScope(this._org, scope_id, banks)
    }));
    this._lockers = computed(
      () => this._lockers_resource.value() ?? [],
      ...ngDevMode ? [{ debugName: "_lockers" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.locker_banks = computed(
      () => {
        const { show_fav, show_accessible } = this._state.options();
        const resources = this._state.available_resources();
        const banks = this._banks();
        this._lockers();
        return banks.filter((i) => (!show_fav || this.isFavourite(i.id)) && (!show_accessible || i.lockers.find((_) => _.accessible)) && resources.find((_) => _.bank_id === i.id)).map((bank) => {
          const locker_list = bank.lockers.map((_) => __spreadProps(__spreadValues({}, _), {
            available: !!resources.find((lkr) => lkr.id === _.id) && (!show_accessible || _.accessible),
            map_id: bank.map_id || bank.id,
            zone: bank.zone,
            zones: bank.zones
          }));
          return __spreadProps(__spreadValues({}, bank), {
            available: locker_list.reduce((c, l) => c + (l.available ? 1 : 0), 0),
            lockers: locker_list
          });
        });
      },
      ...ngDevMode ? [{ debugName: "locker_banks" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = this._state.loading;
  }
  isFavourite(locker_bank_id) {
    return this.favorites().includes(locker_bank_id);
  }
  selectLockerBank(locker_bank) {
    this.onSelect.emit(locker_bank);
  }
  static {
    this.\u0275fac = function LockerBankListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockerBankListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerBankListComponent, selectors: [["locker-bank-list"]], inputs: { active: [1, "active"], selected: [1, "selected"], favorites: [1, "favorites"] }, outputs: { onSelect: "onSelect", toggleFav: "toggleFav" }, decls: 8, vars: 10, consts: [[1, "font-bold"], ["count", "", 1, "mb-4", "text-sm", "opacity-60"], ["loading", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [1, "list-style-none", "space-y-2", "overflow-hidden"], ["empty", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], ["locker_bank", "", 1, "border-base-200", "bg-base-100", "relative", "w-full", "overflow-hidden", "rounded-lg", "border", "shadow-sm", 3, "!border-blue-400"], ["locker_bank", "", 1, "border-base-200", "bg-base-100", "relative", "w-full", "overflow-hidden", "rounded-lg", "border", "shadow-sm"], ["name", "select-locker_bank", "matRipple", "", 1, "flex", "h-full", "w-full", "p-2", 3, "click"], [1, "bg-base-200", "relative", "mr-4", "flex", "h-20", "w-20", "items-center", "justify-center", "rounded-xl"], [1, "border-neutral", "bg-base-200", "absolute", "top-1", "left-1", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "border", "text-white"], ["auth", "", 1, "h-full", "object-cover", 3, "source"], ["src", "assets/icons/locker-placeholder.svg", 1, "m-auto"], [1, "flex-1pt-2", "text-left"], [1, "mb-2", "font-medium"], [1, "mb-1", "flex", "items-center", "space-x-2", "text-sm"], [1, "text-blue-500"], [1, "text-xs"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "bg-base-200", "absolute", "right-2", "bottom-2", "rounded-sm", "px-2", "py-1", "font-mono", "text-xs"], [1, "text-center", "opacity-30"], [3, "diameter"], [1, "opacity-30"]], template: function LockerBankListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h3", 0);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 1);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, LockerBankListComponent_Conditional_6_Template, 2, 1)(7, LockerBankListComponent_Conditional_7_Template, 5, 4, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "COMMON.RESULTS"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 5, "COMMON.RESULTS_COUNT", \u0275\u0275pureFunction1(8, _c0, ctx.locker_banks()?.length || 0)), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading()?.length ? 6 : 7);
      }
    }, dependencies: [
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      AuthenticatedImageDirective,
      TranslatePipe,
      LevelPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockerBankListComponent, [{
    type: Component,
    args: [{ selector: "locker-bank-list", template: `
        <h3 class="font-bold">{{ 'COMMON.RESULTS' | translate }}</h3>
        <p count class="mb-4 text-sm opacity-60">
            {{
                'COMMON.RESULTS_COUNT'
                    | translate: { count: locker_banks()?.length || 0 }
            }}
        </p>
        @if (!loading()?.length) {
            @if (locker_banks()?.length) {
                <ul class="list-style-none space-y-2 overflow-hidden">
                    @for (locker_bank of locker_banks(); track locker_bank) {
                        <li
                            locker_bank
                            class="border-base-200 bg-base-100 relative w-full overflow-hidden rounded-lg border shadow-sm"
                            [class.!border-blue-400]="
                                active() === locker_bank.id
                            "
                        >
                            <button
                                name="select-locker_bank"
                                matRipple
                                class="flex h-full w-full p-2"
                                (click)="selectLockerBank($any(locker_bank))"
                            >
                                <div
                                    class="bg-base-200 relative mr-4 flex h-20 w-20 items-center justify-center rounded-xl"
                                >
                                    @if (selected().includes(locker_bank.id)) {
                                        <div
                                            class="border-neutral bg-base-200 absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border text-white"
                                        >
                                            <icon>done</icon>
                                        </div>
                                    }
                                    @if (locker_bank.images?.length) {
                                        <img
                                            auth
                                            class="h-full object-cover"
                                            [source]="locker_bank.images[0]"
                                        />
                                    } @else {
                                        <img
                                            class="m-auto"
                                            src="assets/icons/locker-placeholder.svg"
                                        />
                                    }
                                </div>
                                <div class="flex-1pt-2 text-left">
                                    <h3 class="mb-2 font-medium">
                                        {{
                                            locker_bank.name ||
                                                locker_bank.id ||
                                                'Locker_bank'
                                        }}
                                    </h3>
                                    <div
                                        class="mb-1 flex items-center space-x-2 text-sm"
                                    >
                                        <icon class="text-blue-500">place</icon>
                                        <p class="text-xs">
                                            {{
                                                (locker_bank.zones | level)
                                                    ? (
                                                          locker_bank.zones
                                                          | level
                                                      )?.display_name ||
                                                      (
                                                          locker_bank.zones
                                                          | level
                                                      )?.name
                                                    : ''
                                            }}
                                        </p>
                                    </div>
                                    <div
                                        class="flex items-center space-x-2 text-sm"
                                    >
                                        <icon class="text-blue-500"
                                            >people</icon
                                        >
                                        <p class="text-xs">
                                            {{
                                                'COMMON.AVAILABLE_COUNT'
                                                    | translate
                                                        : {
                                                              count:
                                                                  locker_bank.available ||
                                                                  0,
                                                              total:
                                                                  locker_bank
                                                                      .lockers
                                                                      .length ||
                                                                  1,
                                                          }
                                            }}
                                        </p>
                                    </div>
                                </div>
                            </button>
                            <!-- <button
                icon
                matRipple
                name="toggle-locker_bank-favourite"
                class="absolute top-1 right-1"
                [class.text-info]="isFavourite(locker_bank.id)"
                (click)="toggleFav.emit(locker_bank)"
                >
                <icon
                        [className]="
                        isFavourite(locker_bank.id)
                                ? 'material-symbols-rounded'
                                : 'material-symbols-outlined'
                        ">favorite</icon>
              </button> -->
                            @if (locker_bank.tags?.length) {
                                <div
                                    class="bg-base-200 absolute right-2 bottom-2 rounded-sm px-2 py-1 font-mono text-xs"
                                >
                                    {{ locker_bank.tags[0] }}
                                </div>
                            }
                        </li>
                    }
                </ul>
            } @else {
                <div
                    empty
                    class="flex flex-col items-center justify-center space-y-2 p-16"
                >
                    <p class="text-center opacity-30">
                        {{ 'BOOKINGS.LOCKER_LIST_EMPTY' | translate }}
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
                    {{ 'BOOKINGS.LOCKER_LIST_LOADING' | translate }}
                </p>
            </div>
        }
    `, imports: [
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatProgressSpinnerModule,
      AuthenticatedImageDirective,
      LevelPipe
    ] }]
  }], null, { active: [{ type: Input, args: [{ isSignal: true, alias: "active", required: false }] }], selected: [{ type: Input, args: [{ isSignal: true, alias: "selected", required: false }] }], favorites: [{ type: Input, args: [{ isSignal: true, alias: "favorites", required: false }] }], onSelect: [{ type: Output, args: ["onSelect"] }], toggleFav: [{ type: Output, args: ["toggleFav"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerBankListComponent, { className: "LockerBankListComponent", filePath: "libs/bookings/src/lib/locker-select-modal/locker-bank-list.component.ts", lineNumber: 181 });
})();

// libs/bookings/src/lib/locker-select-modal/locker-filters-display.component.ts
var _c02 = () => [];
function LockerFiltersDisplayComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 5);
    \u0275\u0275listener("click", function LockerFiltersDisplayComponent_For_9_Template_button_click_3_listener() {
      const feat_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setFeature(feat_r2, false));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feat_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feat_r2);
  }
}
function LockerFiltersDisplayComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 6);
    \u0275\u0275listener("click", function LockerFiltersDisplayComponent_Conditional_10_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setOptions({ show_fav: false }));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "COMMON.FAVOURITES_ONLY"));
  }
}
function LockerFiltersDisplayComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 7);
    \u0275\u0275listener("click", function LockerFiltersDisplayComponent_Conditional_11_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setOptions({ show_accessible: false }));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "COMMON.ACCESSIBLE_ONLY"));
  }
}
var LockerFiltersDisplayComponent = class _LockerFiltersDisplayComponent {
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
    this._model = this._state.model;
    this.start = computed(
      () => this._model().date,
      ...ngDevMode ? [{ debugName: "start" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end = computed(
      () => {
        const { date, duration, all_day } = this._model();
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
    this.\u0275fac = function LockerFiltersDisplayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockerFiltersDisplayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerFiltersDisplayComponent, selectors: [["locker-filters-display"]], inputs: { view: [1, "view"] }, outputs: { viewChange: "viewChange" }, decls: 12, vars: 15, consts: [["filters", "", 1, "border-base-300", "bg-base-100", "sticky", "-top-1", "z-20", "-mx-1", "mb-4!", "flex", "w-[calc(100%+0.5rem)]", "flex-wrap", "items-center", "rounded-sm", "border", "p-1", "pr-10!", "sm:pr-1!"], ["filter-item", "", "date", ""], ["filter-item", "", "time", ""], ["filter-item", "", "features", ""], ["filter-item", ""], ["icon", "", "matRipple", "", "name", "remove-locker-filter", 1, "-mr-4", 3, "click"], ["icon", "", "matRipple", "", "name", "remove-locker-favs-filter", 1, "-mr-4", 3, "click"], ["icon", "", "matRipple", "", "name", "remove-locker-accessible-filter", 1, "-mr-4", 3, "click"]], template: function LockerFiltersDisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "date");
        \u0275\u0275pipe(7, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(8, LockerFiltersDisplayComponent_For_9_Template, 6, 1, "div", 3, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275conditionalCreate(10, LockerFiltersDisplayComponent_Conditional_10_Template, 7, 3, "div", 4);
        \u0275\u0275conditionalCreate(11, LockerFiltersDisplayComponent_Conditional_11_Template, 7, 3, "div", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 5, ctx.start(), "mediumDate"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(6, 8, ctx.start(), ctx.time_format()), " \u2014 ", \u0275\u0275pipeBind2(7, 11, ctx.end(), ctx.time_format()), " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.options()?.features || \u0275\u0275pureFunction0(14, _c02));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.options()?.show_fav ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.options()?.show_accessible ? 11 : -1);
      }
    }, dependencies: [CommonModule, IconComponent, MatRippleModule, MatRipple, DatePipe, TranslatePipe], styles: ["\n[filter-item][_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  margin: 0.25rem;\n}\n[filter-item][_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=locker-filters-display.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockerFiltersDisplayComponent, [{
    type: Component,
    args: [{ selector: "locker-filters-display", template: `
        <section
            filters
            class="border-base-300 bg-base-100 sticky -top-1 z-20 -mx-1 mb-4! flex w-[calc(100%+0.5rem)] flex-wrap items-center rounded-sm border p-1 pr-10! sm:pr-1!"
        >
            <!-- TODO: filter chips -->
            <div filter-item date>{{ start() | date: 'mediumDate' }}</div>
            <div filter-item time>
                {{ start() | date: time_format() }} &mdash;
                {{ end() | date: time_format() }}
            </div>
            @for (feat of options()?.features || []; track feat) {
                <div filter-item features>
                    <p>{{ feat }}</p>
                    <button
                        icon
                        matRipple
                        name="remove-locker-filter"
                        class="-mr-4"
                        (click)="setFeature(feat, false)"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            }
            @if (options()?.show_fav) {
                <div filter-item>
                    <span>{{ 'COMMON.FAVOURITES_ONLY' | translate }}</span>
                    <button
                        icon
                        matRipple
                        name="remove-locker-favs-filter"
                        class="-mr-4"
                        (click)="setOptions({ show_fav: false })"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            }
            @if (options()?.show_accessible) {
                <div filter-item>
                    <span>{{ 'COMMON.ACCESSIBLE_ONLY' | translate }}</span>
                    <button
                        icon
                        matRipple
                        name="remove-locker-accessible-filter"
                        class="-mr-4"
                        (click)="setOptions({ show_accessible: false })"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            }
        </section>
    `, imports: [CommonModule, TranslatePipe, IconComponent, MatRippleModule], styles: ["/* angular:styles/component:css;40c2cfb0940879f4b472b0df17d108f20a06d9aef1b032e0c2528e24b3273369;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/locker-select-modal/locker-filters-display.component.ts */\n[filter-item] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  margin: 0.25rem;\n}\n[filter-item]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item] > * + * {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=locker-filters-display.component.css.map */\n"] }]
  }], null, { view: [{ type: Input, args: [{ isSignal: true, alias: "view", required: false }] }], viewChange: [{ type: Output, args: ["viewChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerFiltersDisplayComponent, { className: "LockerFiltersDisplayComponent", filePath: "libs/bookings/src/lib/locker-select-modal/locker-filters-display.component.ts", lineNumber: 92 });
})();

// libs/bookings/src/lib/locker-select-modal/locker-filters.component.ts
var _c03 = () => ({ standalone: true });
var _c12 = () => [];
function LockerFiltersComponent_Conditional_9_Conditional_4_For_4_Template(rf, ctx) {
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
function LockerFiltersComponent_Conditional_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 14)(1, "mat-select", 15);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function LockerFiltersComponent_Conditional_9_Conditional_4_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setRegion($event));
    });
    \u0275\u0275repeaterCreate(3, LockerFiltersComponent_Conditional_9_Conditional_4_For_4_Template, 2, 2, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.region())("ngModelOptions", \u0275\u0275pureFunction0(5, _c03))("placeholder", \u0275\u0275pipeBind1(2, 3, "COMMON.REGION_ANY"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.regions());
  }
}
function LockerFiltersComponent_Conditional_9_Conditional_5_For_3_Template(rf, ctx) {
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
function LockerFiltersComponent_Conditional_9_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 14)(1, "mat-select", 17);
    \u0275\u0275listener("ngModelChange", function LockerFiltersComponent_Conditional_9_Conditional_5_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setBuilding($event));
    });
    \u0275\u0275repeaterCreate(2, LockerFiltersComponent_Conditional_9_Conditional_5_For_3_Template, 2, 2, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.building())("ngModelOptions", \u0275\u0275pureFunction0(3, _c03))("placeholder", ctx_r1.building()?.display_name || ctx_r1.building()?.name);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.buildings());
  }
}
function LockerFiltersComponent_Conditional_9_Conditional_6_For_4_Conditional_2_Template(rf, ctx) {
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
function LockerFiltersComponent_Conditional_9_Conditional_6_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16)(1, "div", 19);
    \u0275\u0275conditionalCreate(2, LockerFiltersComponent_Conditional_9_Conditional_6_For_4_Conditional_2_Template, 5, 3, "div", 20);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lvl_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", lvl_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region() ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", lvl_r7.display_name || lvl_r7.name, " ");
  }
}
function LockerFiltersComponent_Conditional_9_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 14)(1, "mat-select", 18);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function LockerFiltersComponent_Conditional_9_Conditional_6_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_id: $event }));
    });
    \u0275\u0275repeaterCreate(3, LockerFiltersComponent_Conditional_9_Conditional_6_For_4_Template, 5, 3, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.options()?.zone_id)("ngModelOptions", \u0275\u0275pureFunction0(5, _c03))("placeholder", \u0275\u0275pipeBind1(2, 3, "COMMON.LEVEL_ANY"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.levels());
  }
}
function LockerFiltersComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "label", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, LockerFiltersComponent_Conditional_9_Conditional_4_Template, 5, 6, "mat-form-field", 14);
    \u0275\u0275conditionalCreate(5, LockerFiltersComponent_Conditional_9_Conditional_5_Template, 4, 4, "mat-form-field", 14);
    \u0275\u0275conditionalCreate(6, LockerFiltersComponent_Conditional_9_Conditional_6_Template, 5, 6, "mat-form-field", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "COMMON.LOCATION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region() && ctx_r1.regions()?.length ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.use_region() && ctx_r1.buildings()?.length > 1 ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.hide_levels() ? 6 : -1);
  }
}
function LockerFiltersComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "mat-checkbox", 22);
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
function LockerFiltersComponent_Conditional_18_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a-duration-field", 25);
    \u0275\u0275listener("ngModelChange", function LockerFiltersComponent_Conditional_18_Conditional_6_Template_a_duration_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.model.update((m) => __spreadProps(__spreadValues({}, m), { duration: $event })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 9, "FORM.TIME_END"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.model().duration)("ngModelOptions", \u0275\u0275pureFunction0(11, _c03))("time", ctx_r1.model().date)("max", 10 * 60)("min", 60)("step", 60)("use_24hr", ctx_r1.use_24hr())("end_time", ctx_r1.bookable_hours()?.end);
    \u0275\u0275control();
  }
}
function LockerFiltersComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 23)(2, "label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a-time-field", 24);
    \u0275\u0275listener("ngModelChange", function LockerFiltersComponent_Conditional_18_Template_a_time_field_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.model.update((m) => __spreadProps(__spreadValues({}, m), { date: $event })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, LockerFiltersComponent_Conditional_18_Conditional_6_Template, 5, 12, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 7, "FORM.TIME_START"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.model().date)("ngModelOptions", \u0275\u0275pureFunction0(9, _c03))("use_24hr", ctx_r1.use_24hr())("disabled", ctx_r1.disable_start())("range", ctx_r1.bookable_hours());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.hide_end() ? 6 : -1);
  }
}
function LockerFiltersComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 10)(1, "settings-toggle", 26);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function LockerFiltersComponent_Conditional_19_Template_settings_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ show_accessible: $event }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(2, 3, "BOOKINGS.LOCKER_ACCESSIBLE_SHOW"))("ngModel", ctx_r1.options()?.show_accessible)("ngModelOptions", \u0275\u0275pureFunction0(5, _c03));
    \u0275\u0275control();
  }
}
function LockerFiltersComponent_Conditional_20_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "settings-toggle", 29);
    \u0275\u0275listener("ngModelChange", function LockerFiltersComponent_Conditional_20_For_5_Template_settings_toggle_ngModelChange_1_listener($event) {
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
    \u0275\u0275advance();
    \u0275\u0275property("label", feat_r12)("ngModel", (ctx_r1.options()?.features || \u0275\u0275pureFunction0(3, _c12)).includes(feat_r12))("ngModelOptions", \u0275\u0275pureFunction0(4, _c03));
    \u0275\u0275control();
  }
}
function LockerFiltersComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11)(1, "h2", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, LockerFiltersComponent_Conditional_20_For_5_Template, 2, 5, "div", 28, \u0275\u0275repeaterTrackByIdentity);
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
function LockerFiltersComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "button", 30);
    \u0275\u0275listener("click", function LockerFiltersComponent_Conditional_21_Template_button_click_1_listener() {
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
var LockerFiltersComponent = class _LockerFiltersComponent extends AsyncHandler {
  close() {
  }
  constructor() {
    super();
    this._state = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
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
        return level_list.sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || "").localeCompare(b.display_name || ""));
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
    this.setRegion = (reg) => this._org.region = reg;
    this._locker_bookable_hours = this._settings.signal("lockers.bookable_hours", null);
    this._booking_bookable_hours = this._settings.signal("bookings.bookable_hours", null);
    this._bookable_hours = computed(
      () => this._locker_bookable_hours() || this._booking_bookable_hours(),
      ...ngDevMode ? [{ debugName: "_bookable_hours" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._disable_date = this._settings.signal("lockers.disabled_date_select", false);
    this._disable_start = this._settings.signal("lockers.disabled_start_time", false);
    this._hide_end = this._settings.signal("lockers.hide_end_time", false);
    this._allow_time_changes = this._settings.signal("lockers.allow_time_changes", false);
    this._allow_all_day = this._settings.signal("lockers.allow_all_day", false);
    this._available_period = this._settings.signal("lockers.available_period", 90);
    this._use_24hr = this._settings.signal("use_24_hour_time", false);
    this._use_region = this._settings.signal("use_region", false);
    this.bookable_hours = this._bookable_hours;
    this.disable_date = this._disable_date;
    this.disable_start = this._disable_start;
    this.hide_end = this._hide_end;
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
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function LockerFiltersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockerFiltersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerFiltersComponent, selectors: [["locker-filters"]], inputs: { hide_levels: [1, "hide_levels"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 22, vars: 20, consts: [[1, "border-base-300", "bg-base-100", "sticky", "top-0", "z-10", "flex", "items-center", "border-b", "px-4", "py-4"], [1, "text-xl", "font-medium"], [1, "divide-base-200", "relative", "z-0", "w-full", "divide-y", "p-2"], ["details", ""], [1, "mb-1", "text-lg", "font-medium"], [1, "flex", "min-w-32", "flex-1", "flex-col"], [1, "min-w-[256px]", "flex-1"], [3, "formField", "to"], [1, "-mt-2", "mb-2", "flex", "justify-end"], [1, "flex", "items-center", "space-x-2"], ["favs", "", 1, "space-y-4", "pb-4"], ["features", "", 1, "space-y-2"], [1, "border-base-200", "w-full", "border-t", "px-2", "py-2"], ["for", "location"], ["appearance", "outline", 1, "w-full"], ["name", "region", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value"], ["name", "building", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [3, "formField"], [1, "w-1/3", "flex-1"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr", "disabled", "range"], [3, "ngModelChange", "ngModel", "ngModelOptions", "time", "max", "min", "step", "use_24hr", "end_time"], [3, "ngModelChange", "label", "ngModel", "ngModelOptions"], [1, "mt-2", "text-lg", "font-medium"], [1, "flex", "flex-wrap", "items-center", "space-x-2"], [1, "w-full", "capitalize", 3, "ngModelChange", "label", "ngModel", "ngModelOptions"], ["btn", "", "matRipple", "", "name", "apply-locker-filters", 1, "w-full", 3, "click"]], template: function LockerFiltersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "form", 2)(5, "section", 3)(6, "h2", 4);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(9, LockerFiltersComponent_Conditional_9_Template, 7, 6, "div", 5);
        \u0275\u0275elementStart(10, "div", 6)(11, "label");
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "a-date-field", 7);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(17, LockerFiltersComponent_Conditional_17_Template, 4, 4, "div", 8);
        \u0275\u0275conditionalCreate(18, LockerFiltersComponent_Conditional_18_Template, 7, 10, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(19, LockerFiltersComponent_Conditional_19_Template, 3, 6, "section", 10);
        \u0275\u0275conditionalCreate(20, LockerFiltersComponent_Conditional_20_Template, 6, 3, "section", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(21, LockerFiltersComponent_Conditional_21_Template, 4, 3, "div", 12);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 12, "COMMON.FILTERS"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 14, "COMMON.DETAILS"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.hide_levels() && (!(ctx.use_region() && ctx.regions()?.length) || !(!ctx.use_region() && ctx.buildings()?.length > 1)) ? 9 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 16, "FORM.DATE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.date)("to", ctx.end_date());
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 18, "FORM.DATE_ERROR"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.allow_all_day() ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.model().all_day ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hide_levels() ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.features()?.length && !ctx.hide_levels() ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.can_close() ? 21 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      SettingsToggleComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      FormField,
      FormsModule,
      \u0275NgNoValidate,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      NgForm,
      MatCheckboxModule,
      MatCheckbox,
      TranslatePipe,
      BuildingPipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 100vw;\n}\n/*# sourceMappingURL=locker-filters.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockerFiltersComponent, [{
    type: Component,
    args: [{ selector: "locker-filters", template: `
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
                @if (
                    !hide_levels() &&
                    (!(use_region() && regions()?.length) ||
                        !(!use_region() && buildings()?.length > 1))
                ) {
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
                                    [placeholder]="
                                        'COMMON.REGION_ANY' | translate
                                    "
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
                                        building()?.display_name ||
                                        building()?.name
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
                                    [placeholder]="
                                        'COMMON.LEVEL_ANY' | translate
                                    "
                                >
                                    @for (lvl of levels(); track lvl) {
                                        <mat-option [value]="lvl.id">
                                            <div class="flex flex-col-reverse">
                                                @if (use_region()) {
                                                    <div
                                                        class="text-xs opacity-30"
                                                    >
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
                                                        lvl.display_name ||
                                                            lvl.name
                                                    }}
                                                </div>
                                            </div>
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                    </div>
                }

                <!-- Date -->
                <div class="min-w-[256px] flex-1">
                    <label>{{ 'FORM.DATE' | translate }}</label>
                    <a-date-field [formField]="form.date" [to]="end_date()">
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
                                [disabled]="disable_start()"
                                [range]="bookable_hours()"
                            ></a-time-field>
                        </div>
                        @if (!hide_end()) {
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
                                    [end_time]="bookable_hours()?.end"
                                >
                                </a-duration-field>
                            </div>
                        }
                    </div>
                }
            </section>
            @if (!hide_levels()) {
                <section favs class="space-y-4 pb-4">
                    <!-- <settings-toggle
              [label]="'APP.WORKPLACE.FAVOURITES_SHOW' | translate"
              [ngModel]="options()?.show_fav"
              (ngModelChange)="setOptions({ show_fav: $event })"
              [ngModelOptions]="{ standalone: true }"
            ></settings-toggle> -->
                    <settings-toggle
                        [label]="'BOOKINGS.LOCKER_ACCESSIBLE_SHOW' | translate"
                        [ngModel]="options()?.show_accessible"
                        (ngModelChange)="
                            setOptions({ show_accessible: $event })
                        "
                        [ngModelOptions]="{ standalone: true }"
                    ></settings-toggle>
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
        @if (can_close()) {
            <div class="border-base-200 w-full border-t px-2 py-2">
                <button
                    btn
                    matRipple
                    name="apply-locker-filters"
                    class="w-full"
                    (click)="close()"
                >
                    {{ 'COMMON.APPLY' | translate }}
                </button>
            </div>
        }
    `, imports: [
      TranslatePipe,
      MatRippleModule,
      SettingsToggleComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      MatFormFieldModule,
      MatSelectModule,
      FormField,
      FormsModule,
      MatCheckboxModule,
      BuildingPipe
    ], styles: ["/* angular:styles/component:css;23008f9198b39e4d3c7440c4c7714beae90c2987553e297566829416db332df8;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/locker-select-modal/locker-filters.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 100vw;\n}\n/*# sourceMappingURL=locker-filters.component.css.map */\n"] }]
  }], () => [], { hide_levels: [{ type: Input, args: [{ isSignal: true, alias: "hide_levels", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerFiltersComponent, { className: "LockerFiltersComponent", filePath: "libs/bookings/src/lib/locker-select-modal/locker-filters.component.ts", lineNumber: 274 });
})();

// libs/bookings/src/lib/locker-select-modal/locker-map.component.ts
var _c04 = () => ({ controls: true });
var _c13 = () => ({ standalone: true });
function LockerMapComponent_Conditional_1_For_4_Conditional_2_Template(rf, ctx) {
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
function LockerMapComponent_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 5)(1, "div", 6);
    \u0275\u0275conditionalCreate(2, LockerMapComponent_Conditional_1_For_4_Conditional_2_Template, 5, 3, "div", 7);
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
function LockerMapComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 1)(1, "mat-select", 4);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function LockerMapComponent_Conditional_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.level, $event) || (ctx_r1.level = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function LockerMapComponent_Conditional_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_ids: [$event.id] }));
    });
    \u0275\u0275repeaterCreate(3, LockerMapComponent_Conditional_1_For_4_Template, 5, 3, "mat-option", 5, \u0275\u0275repeaterTrackByIdentity);
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
var LockerMapComponent = class _LockerMapComponent {
  constructor() {
    this._state = inject(BookingFormService);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
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
    this._use_region = this._settings.signal("use_region", false);
    this._scope_id = computed(
      () => {
        const region = this._org.active_region();
        const bld = this._org.active_building();
        if (this._use_region())
          return region?.id || this._org.region?.id;
        return bld?.id;
      },
      ...ngDevMode ? [{ debugName: "_scope_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._locker_banks_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_locker_banks_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        const scope_id = this._scope_id();
        return scope_id ? { scope_id } : void 0;
      },
      loader: ({ params: { scope_id } }) => loadLockerBanksForScope(this._org, scope_id)
    }));
    this.lockers_banks = computed(
      () => this._locker_banks_resource.value() ?? [],
      ...ngDevMode ? [{ debugName: "lockers_banks" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._lockers_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_lockers_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        const scope_id = this._scope_id();
        const banks = this.lockers_banks();
        return scope_id && banks.length ? { scope_id, banks } : void 0;
      },
      loader: ({ params: { scope_id, banks } }) => loadLockersForScope(this._org, scope_id, banks)
    }));
    this.lockers = computed(
      () => this._lockers_resource.value() ?? [],
      ...ngDevMode ? [{ debugName: "lockers" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._decorated_banks = computed(
      () => {
        const { show_accessible } = this._state.options();
        const resources = this._state.available_resources();
        const banks = this.lockers_banks();
        this.lockers();
        return banks.filter((i) => resources.find((_) => _.bank_id === i.id) && (!show_accessible || i.lockers.find((_) => _.accessible))).map((bank) => __spreadProps(__spreadValues({}, bank), {
          available: resources.filter((_) => _.bank_id === bank.id).length,
          lockers: bank.lockers.map((_) => __spreadProps(__spreadValues({}, _), {
            map_id: bank.map_id || bank.id,
            zone: bank.zone
          }))
        }));
      },
      ...ngDevMode ? [{ debugName: "_decorated_banks" }] : (
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
    this.setOptions = (o) => this._state.setOptions(o);
    this.map_url = computed(
      () => this.level()?.map_id || "",
      ...ngDevMode ? [{ debugName: "map_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.actions = computed(
      () => this._decorated_banks().map((locker) => ({
        id: locker.map_id || locker.id,
        action: ["touchend", "mouseup"],
        callback: () => this.selectLocker(locker)
      })),
      ...ngDevMode ? [{ debugName: "actions" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = computed(
      () => {
        const lockers = this._decorated_banks();
        this._state.available_resources();
        return this._settings.get("app.lockers.hide_user") ? [] : lockers.map((locker) => ({
          location: locker.id,
          content: ExploreDeskInfoComponent,
          full_size: true,
          no_scale: true,
          data: {
            id: locker.map_id || locker.id,
            map_id: locker.name,
            name: locker.name || locker.map_id,
            user: this._state.resourceUserName(locker.id)
          },
          z_index: 20
        }));
      },
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.styles = computed(
      () => {
        const banks = this._decorated_banks();
        const free_lockers = this._state.available_resources();
        this._change();
        return banks.reduce((styles, bank) => {
          const colours = this._settings.get("app.explore.colors") || {};
          const status = this.active() === bank.id ? "active" : free_lockers.find((_) => bank.lockers.find((lkr) => lkr.id === _.id)) ? "free" : this._state.resourceUserName(bank.id) ? "busy" : "not-bookable";
          styles[`#${bank.map_id || bank.id}`] = {
            fill: status === "active" ? "#512DA8" : colours[`locker-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`]
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
  selectLocker(locker) {
    this.onSelect.emit(locker);
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
    this.\u0275fac = function LockerMapComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockerMapComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerMapComponent, selectors: [["locker-map"]], inputs: { is_displayed: [1, "is_displayed"], active: [1, "active"], zoom: [1, "zoom"], center: [1, "center"] }, outputs: { onSelect: "onSelect", zoom: "zoomChange", center: "centerChange" }, decls: 4, vars: 9, consts: [[1, "border-base-200", "bg-base-100", "w-full", "border-b", "p-2"], ["levels", "", "appearance", "outline", 1, "no-subscript", "w-full"], [1, "relative", "w-full", "flex-1"], [3, "zoomChange", "centerChange", "src", "zoom", "center", "styles", "features", "actions", "options"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"]], template: function LockerMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, LockerMapComponent_Conditional_1_Template, 5, 6, "mat-form-field", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 2)(3, "interactive-map", 3);
        \u0275\u0275twoWayListener("zoomChange", function LockerMapComponent_Template_interactive_map_zoomChange_3_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.zoom, $event) || (ctx.zoom = $event);
          return $event;
        })("centerChange", function LockerMapComponent_Template_interactive_map_centerChange_3_listener($event) {
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
    ], styles: ["\n[_nghost-%COMP%] {\n  position: relative;\n  background: rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=locker-map.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockerMapComponent, [{
    type: Component,
    args: [{ selector: "locker-map", template: `
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
      FormsModule,
      TranslatePipe,
      BuildingPipe
    ], styles: ["/* angular:styles/component:css;5b4ed0a87238b487692a2c306efe479639b0f8e929cffac085c91f6d64279717;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/locker-select-modal/locker-map.component.ts */\n:host {\n  position: relative;\n  background: rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=locker-map.component.css.map */\n"] }]
  }], () => [], { is_displayed: [{ type: Input, args: [{ isSignal: true, alias: "is_displayed", required: false }] }], active: [{ type: Input, args: [{ isSignal: true, alias: "active", required: false }] }], onSelect: [{ type: Output, args: ["onSelect"] }], zoom: [{ type: Input, args: [{ isSignal: true, alias: "zoom", required: false }] }, { type: Output, args: ["zoomChange"] }], center: [{ type: Input, args: [{ isSignal: true, alias: "center", required: false }] }, { type: Output, args: ["centerChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerMapComponent, { className: "LockerMapComponent", filePath: "libs/bookings/src/lib/locker-select-modal/locker-map.component.ts", lineNumber: 102 });
})();

// libs/bookings/src/lib/locker-select-modal/locker-select-modal.component.ts
function LockerSelectModalComponent_Conditional_21_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "locker-filters-display", 24);
    \u0275\u0275twoWayListener("viewChange", function LockerSelectModalComponent_Conditional_21_Conditional_0_Template_locker_filters_display_viewChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.view, $event) || (ctx_r1.view = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("view", ctx_r1.view);
  }
}
function LockerSelectModalComponent_Conditional_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "locker-bank-list", 25);
    \u0275\u0275listener("toggleFav", function LockerSelectModalComponent_Conditional_21_Conditional_1_Template_locker_bank_list_toggleFav_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFavourite($event));
    })("onSelect", function LockerSelectModalComponent_Conditional_21_Conditional_1_Template_locker_bank_list_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.bank.set($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("active", ctx_r1.displayed()?.id || "")("selected", ctx_r1.selected_ids())("favorites", ctx_r1.favorites());
  }
}
function LockerSelectModalComponent_Conditional_21_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "locker-map", 26);
    \u0275\u0275listener("onSelect", function LockerSelectModalComponent_Conditional_21_Conditional_2_Template_locker_map_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.displayed.set($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("is_displayed", !!ctx_r1.displayed())("active", ctx_r1.displayed()?.id || "");
  }
}
function LockerSelectModalComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LockerSelectModalComponent_Conditional_21_Conditional_0_Template, 1, 1, "locker-filters-display", 21);
    \u0275\u0275conditionalCreate(1, LockerSelectModalComponent_Conditional_21_Conditional_1_Template, 1, 3, "locker-bank-list", 22)(2, LockerSelectModalComponent_Conditional_21_Conditional_2_Template, 1, 2, "locker-map", 23);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.view() === "list" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.view() === "list" ? 1 : 2);
  }
}
function LockerSelectModalComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 27)(2, "button", 28);
    \u0275\u0275listener("click", function LockerSelectModalComponent_Conditional_22_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.bank.set(null));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 29);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "locker-grid", 30);
    \u0275\u0275listener("clicked", function LockerSelectModalComponent_Conditional_22_Template_locker_grid_clicked_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.displayed.set($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.bank()?.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("bank", ctx_r1.bank())("selected", ctx_r1.displayed()?.id || "");
  }
}
function LockerSelectModalComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function LockerSelectModalComponent_Conditional_23_Template_button_click_0_listener() {
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
var FAV_LOCKER_KEY = "favourite_lockers";
var LockerSelectModalComponent = class _LockerSelectModalComponent {
  constructor() {
    this._dialog_ref = inject(MatDialogRef);
    this._settings = inject(SettingsService);
    this._event_form = inject(BookingFormService);
    this._data = inject(MAT_DIALOG_DATA);
    this._options = this._event_form.options;
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
    this.bank = signal(
      null,
      ...ngDevMode ? [{ debugName: "bank" }] : (
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
      this._settings.get(FAV_LOCKER_KEY) || [],
      ...ngDevMode ? [{ debugName: "favorites" }] : (
        /* istanbul ignore next */
        []
      )
    );
    const _data = this._data;
    this.selected.set([..._data.items || []]);
    this._event_form.setOptions(_data.options);
    effect(() => {
      this._options();
      this.displayed.set(null);
      this.bank.set(null);
    });
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
    this._settings.saveUserSetting(FAV_LOCKER_KEY, next_favs);
  }
  static {
    this.\u0275fac = function LockerSelectModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockerSelectModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerSelectModalComponent, selectors: [["locker-select-modal"]], decls: 39, vars: 43, consts: [[1, "bg-base-100", "mb-10", "flex", "h-[calc(100vh-2.5rem)]", "max-h-[calc(100vh-2.5rem)]", "w-screen", "flex-col", "space-y-2", "overflow-hidden", "p-2", "sm:m-0", "sm:h-auto", "sm:w-auto"], [1, "bg-base-200", "flex", "h-14", "w-full", "items-center", "space-x-2", "rounded-sm", "border-none", "p-2"], [1, "flex-1", "px-2", "text-xl", "font-medium", "capitalize"], [1, "divide-secondary", "border-secondary", "flex", "divide-x", "rounded-sm", "border"], ["icon", "", "matRipple", "", 1, "rounded-l", "rounded-r-none", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "rounded-l-none", "rounded-r", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "relative", "flex", "h-1/2", "max-h-[calc(100vh-7rem)]", "flex-1", "sm:h-[65vh]", "sm:flex-none", "sm:space-x-2"], [1, "border-base-300", "h-full", "w-full", "overflow-x-hidden", "overflow-y-auto", "rounded-sm", "border", "shadow-sm", "sm:block", "sm:w-[20rem]"], [3, "hide_levels"], [1, "border-base-300", "bg-base-200", "h-full", "w-full", "overflow-auto", "rounded-sm", "border", "sm:w-[20rem]", "md:w-160", "lg:block"], [1, "bg-base-200", "flex", "h-full", "w-full", "flex-col", "overflow-auto"], ["icon", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "absolute", "top-3", "right-2", "z-20", "border", "sm:hidden"], [1, "bg-base-200", "flex", "w-full", "items-center", "justify-between", "space-x-2", "rounded-sm", "border-none", "p-2"], ["btn", "", "matRipple", "", "name", "locker-return", 1, "inverse", "bg-base-100", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], [1, "pr-2"], ["btn", "", "matRipple", "", "name", "toggle-locker", 3, "click", "disabled"], [1, "flex", "items-center"], [1, "mr-1"], [3, "view"], [3, "active", "selected", "favorites"], [1, "h-full", "min-h-[60vh]", "w-full", 3, "is_displayed", "active"], [3, "viewChange", "view"], [3, "toggleFav", "onSelect", "active", "selected", "favorites"], [1, "h-full", "min-h-[60vh]", "w-full", 3, "onSelect", "is_displayed", "active"], [1, "sticky", "left-0", "flex", "w-full", "items-center", "space-x-2"], ["icon", "", "matRipple", "", 1, "border-base-300", "bg-base-100", "border", 3, "click"], [1, "px-2", "py-2", "font-medium"], [1, "h-1/2", "w-full", "flex-1", 3, "clicked", "bank", "selected"], ["icon", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "absolute", "top-3", "right-2", "z-20", "border", "sm:hidden", 3, "click"]], template: function LockerSelectModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3)(6, "button", 4);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275listener("click", function LockerSelectModalComponent_Template_button_click_6_listener() {
          return ctx.view.set("list");
        });
        \u0275\u0275elementStart(8, "icon");
        \u0275\u0275text(9, "list");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "button", 5);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275listener("click", function LockerSelectModalComponent_Template_button_click_10_listener() {
          return ctx.view.set("map");
        });
        \u0275\u0275elementStart(12, "icon");
        \u0275\u0275text(13, "map");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "button", 6)(15, "icon");
        \u0275\u0275text(16, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "main", 7)(18, "div", 8);
        \u0275\u0275element(19, "locker-filters", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 10);
        \u0275\u0275conditionalCreate(21, LockerSelectModalComponent_Conditional_21_Template, 3, 2)(22, LockerSelectModalComponent_Conditional_22_Template, 8, 3, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(23, LockerSelectModalComponent_Conditional_23_Template, 3, 1, "button", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "footer", 13)(25, "button", 14)(26, "div", 15)(27, "icon", 16);
        \u0275\u0275text(28, "done");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 17);
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "button", 18);
        \u0275\u0275listener("click", function LockerSelectModalComponent_Template_button_click_32_listener() {
          return ctx.setSelected(ctx.displayed(), !ctx.isSelected(ctx.displayed()?.id));
        });
        \u0275\u0275elementStart(33, "div", 19)(34, "icon", 16);
        \u0275\u0275text(35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 20);
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("height", ctx.is_safari() ? "calc(100vh - 80px)" : "");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 33, "BOOKINGS.DESK_FIND"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("bg-base-100", ctx.view() !== "list")("bg-secondary", ctx.view() === "list")("text-secondary-content", ctx.view() === "list");
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 35, "COMMON.LIST"));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("bg-base-100", ctx.view() !== "map")("bg-secondary", ctx.view() === "map")("text-secondary-content", ctx.view() === "map");
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(11, 37, "COMMON.MAP"));
        \u0275\u0275advance(8);
        \u0275\u0275classProp("hidden", !ctx.show_filters());
        \u0275\u0275advance();
        \u0275\u0275property("hide_levels", ctx.view() !== "list");
        \u0275\u0275advance();
        \u0275\u0275classProp("hidden", ctx.show_filters())("p-2", ctx.view() === "list");
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.bank() ? 21 : 22);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.displayed() ? 23 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("mat-dialog-close", ctx.selected());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 39, "COMMON.CONFIRM_SELECTION"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("inverse", ctx.isSelected(ctx.displayed()?.id));
        \u0275\u0275property("disabled", !ctx.displayed());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.isSelected(ctx.displayed()?.id) ? "remove" : "add");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 41, ctx.isSelected(ctx.displayed()?.id) ? "COMMON.REMOVE_FROM" : "COMMON.ADD_TO"), " ");
      }
    }, dependencies: [
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      MatTooltipModule,
      MatTooltip,
      LockerBankListComponent,
      LockerFiltersComponent,
      LockerMapComponent,
      LockerFiltersDisplayComponent,
      LockerGridComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockerSelectModalComponent, [{
    type: Component,
    args: [{ selector: "locker-select-modal", template: `
        <div
            class="bg-base-100 mb-10 flex h-[calc(100vh-2.5rem)] max-h-[calc(100vh-2.5rem)] w-screen flex-col space-y-2 overflow-hidden p-2 sm:m-0 sm:h-auto sm:w-auto"
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
                    <locker-filters
                        [hide_levels]="view() !== 'list'"
                    ></locker-filters>
                </div>
                <div
                    class="border-base-300 bg-base-200 h-full w-full overflow-auto rounded-sm border sm:w-[20rem] md:w-160 lg:block"
                    [class.hidden]="show_filters()"
                    [class.p-2]="view() === 'list'"
                >
                    @if (!bank()) {
                        @if (view() === 'list') {
                            <locker-filters-display
                                [(view)]="view"
                            ></locker-filters-display>
                        }
                        @if (view() === 'list') {
                            <locker-bank-list
                                [active]="displayed()?.id || ''"
                                [selected]="selected_ids()"
                                [favorites]="favorites()"
                                (toggleFav)="toggleFavourite($event)"
                                (onSelect)="bank.set($any($event))"
                            ></locker-bank-list>
                        } @else {
                            <locker-map
                                class="h-full min-h-[60vh] w-full"
                                [is_displayed]="!!displayed()"
                                [active]="displayed()?.id || ''"
                                (onSelect)="displayed.set($event)"
                            >
                            </locker-map>
                        }
                    } @else {
                        <div
                            class="bg-base-200 flex h-full w-full flex-col overflow-auto"
                        >
                            <div
                                class="sticky left-0 flex w-full items-center space-x-2"
                            >
                                <button
                                    icon
                                    matRipple
                                    class="border-base-300 bg-base-100 border"
                                    (click)="bank.set(null)"
                                >
                                    <icon>arrow_back</icon>
                                </button>
                                <div class="px-2 py-2 font-medium">
                                    {{ bank()?.name }}
                                </div>
                            </div>
                            <locker-grid
                                class="h-1/2 w-full flex-1"
                                [bank]="bank()"
                                [selected]="displayed()?.id || ''"
                                (clicked)="displayed.set($event)"
                            >
                            </locker-grid>
                        </div>
                    }
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
                    name="locker-return"
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
                    name="toggle-locker"
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
      LockerBankListComponent,
      LockerFiltersComponent,
      LockerMapComponent,
      LockerFiltersDisplayComponent,
      LockerGridComponent
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerSelectModalComponent, { className: "LockerSelectModalComponent", filePath: "libs/bookings/src/lib/locker-select-modal/locker-select-modal.component.ts", lineNumber: 212 });
})();

export {
  FAV_LOCKER_KEY,
  LockerSelectModalComponent
};
//# debugId=3198598a-a4a7-59ec-a2be-5561aa3348b2
//# sourceMappingURL=chunk-6SJSURGD.js.map
