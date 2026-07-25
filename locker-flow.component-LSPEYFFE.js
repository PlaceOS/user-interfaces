import {
  LockerSelectModalComponent
} from "./chunk-OSXNQZWU.js";
import "./chunk-RHCFLBRG.js";
import "./chunk-O53MRUIW.js";
import {
  LevelPipe
} from "./chunk-33YNKRH4.js";
import {
  BookingFormService
} from "./chunk-UEHTNZVE.js";
import {
  MatBottomSheet,
  MatBottomSheetRef
} from "./chunk-N6VANVNJ.js";
import "./chunk-Z626YI4Q.js";
import "./chunk-3PT7KR7D.js";
import {
  DurationFieldComponent
} from "./chunk-STQRIHXZ.js";
import {
  DateFieldComponent
} from "./chunk-S4UW3CZ4.js";
import "./chunk-U2NMECJN.js";
import "./chunk-IQ5YKLIN.js";
import "./chunk-WPKFCFBW.js";
import "./chunk-EGW53QGF.js";
import "./chunk-BJCFGM7Y.js";
import {
  generateCalendarFileLink,
  generateGoogleCalendarLink,
  generateMicrosoftCalendarLink
} from "./chunk-3NTZ4I6Y.js";
import "./chunk-S3HIXA4G.js";
import "./chunk-PHAXUJDF.js";
import {
  TimeFieldComponent
} from "./chunk-HUC7VMCA.js";
import {
  AuthenticatedImageDirective,
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-6HFJDHLH.js";
import "./chunk-22T7R5QI.js";
import "./chunk-KJTUY4N4.js";
import "./chunk-JC2LAWYU.js";
import {
  AsyncHandler,
  Booking,
  FormField,
  IconComponent,
  MatDialog,
  MatFormField,
  MatFormFieldModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSelect,
  MatSelectModule,
  OrganisationService,
  SETTING_KEYS,
  SafePipe,
  SanitizePipe,
  SettingsService,
  currentUser,
  getUnixTime,
  isBefore,
  loadLockerResources,
  queryBookings
} from "./chunk-AM5MUWVH.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DatePipe,
  FormsModule,
  Injector,
  Input,
  MatOption,
  MatRipple,
  MatRippleModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  Output,
  Router,
  RouterLink,
  RouterModule,
  TranslatePipe,
  addHours,
  computed,
  effect,
  endOfDay,
  forwardRef,
  getInvalidSignalFields,
  i18n,
  inject,
  input,
  model,
  notifyError,
  onFieldChange,
  output,
  setClassMetadata,
  signal,
  startOfDay,
  startOfMinute,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction4,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NUJFPPHE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/bookings/src/lib/locker-list-field.component.ts
var _c0 = () => [];
var _c1 = () => ({ standalone: true });
function LockerListFieldComponent_For_2_Conditional_1_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 21);
    \u0275\u0275listener("ngModelChange", function LockerListFieldComponent_For_2_Conditional_1_For_6_Template_mat_checkbox_ngModelChange_0_listener($event) {
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
    \u0275\u0275property("ngModel", (ctx_r3.selected_features() || \u0275\u0275pureFunction0(3, _c0)).includes(opt_r3))("ngModelOptions", \u0275\u0275pureFunction0(4, _c1));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r3, " ");
  }
}
function LockerListFieldComponent_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19);
    \u0275\u0275repeaterCreate(5, LockerListFieldComponent_For_2_Conditional_1_For_6_Template, 2, 5, "mat-checkbox", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "COMMON.TYPE"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.features());
  }
}
function LockerListFieldComponent_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", item_r5.images[0]);
  }
}
function LockerListFieldComponent_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 9);
  }
}
function LockerListFieldComponent_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "icon", 22);
    \u0275\u0275text(2, "accessible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "BOOKINGS.LOCKER_ACCESSIBLE"), " ");
  }
}
function LockerListFieldComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275conditionalCreate(1, LockerListFieldComponent_For_2_Conditional_1_Template, 7, 3, "div", 6);
    \u0275\u0275elementStart(2, "div", 7);
    \u0275\u0275conditionalCreate(3, LockerListFieldComponent_For_2_Conditional_3_Template, 1, 1, "img", 8)(4, LockerListFieldComponent_For_2_Conditional_4_Template, 1, 0, "img", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 10)(6, "div", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 12)(9, "icon", 13);
    \u0275\u0275text(10, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "level");
    \u0275\u0275pipe(14, "level");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(15, LockerListFieldComponent_For_2_Conditional_15_Template, 6, 3, "div", 12);
    \u0275\u0275elementStart(16, "div", 14)(17, "button", 15);
    \u0275\u0275listener("click", function LockerListFieldComponent_For_2_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.changeResources());
    });
    \u0275\u0275elementStart(18, "div", 16)(19, "icon");
    \u0275\u0275text(20, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "button", 17);
    \u0275\u0275listener("click", function LockerListFieldComponent_For_2_Template_button_click_23_listener() {
      const item_r5 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeResource(item_r5));
    });
    \u0275\u0275elementStart(24, "div", 16)(25, "icon");
    \u0275\u0275text(26, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.features()?.length ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r5.images?.length ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r5.name || "Locker", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 7, item_r5?.zone?.id)?.display_name || \u0275\u0275pipeBind1(14, 9, item_r5?.zone?.id)?.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(item_r5.accessible ? 15 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 11, "COMMON.CHANGE"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 13, "COMMON.REMOVE"), " ");
  }
}
var EMPTY_FAVS = [];
var LockerListFieldComponent = class _LockerListFieldComponent {
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
    this.favorites = this._settings.signal(SETTING_KEYS.FAVORITE_LOCKERS, EMPTY_FAVS, true);
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (s) => this.disabled.set(s);
  }
  /** Add or edit selected items */
  changeResources() {
    const ref = this._dialog.open(LockerSelectModalComponent, {
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
    this.items.set(new_value || []);
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
    const fav_list = this.favorites() || EMPTY_FAVS;
    const new_state = !fav_list.includes(space.id);
    if (new_state) {
      this._settings.saveUserSetting(SETTING_KEYS.FAVORITE_LOCKERS, [
        ...fav_list,
        space.id
      ]);
    } else {
      this._settings.saveUserSetting(SETTING_KEYS.FAVORITE_LOCKERS, fav_list.filter((_) => _ !== space.id));
    }
  }
  static {
    this.\u0275fac = function LockerListFieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockerListFieldComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerListFieldComponent, selectors: [["locker-list-field"]], inputs: { features: [1, "features"] }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _LockerListFieldComponent),
        multi: true
      }
    ])], decls: 12, vars: 3, consts: [["list", "", 1, "space-y-2"], ["locker", "", 1, "border-base-200", "relative", "flex", "w-full", "items-center", "rounded-lg", "border", "p-2", "shadow-sm"], ["btn", "", "matRipple", "", "name", "add-locker", 1, "inverse", "mt-2", "w-full", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "mb-2", "flex", "flex-wrap", "items-center", "sm:space-x-2"], [1, "min-w-[256px]", "flex-1", "space-y-2"], [1, "flex", "flex-col"], [1, "bg-base-200", "mr-4", "flex", "h-20", "w-20", "items-center", "justify-center", "overflow-hidden", "rounded-xl"], ["auth", "", 1, "min-h-full", "object-cover", 3, "source"], ["src", "assets/icons/locker-placeholder.svg", 1, "m-auto"], [1, "space-y-2", "pb-4"], [1, "font-medium"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "text-base", "text-blue-500"], [1, "absolute", "right-0", "bottom-0", "flex", "items-center", "justify-end", "text-xs"], ["btn", "", "matRipple", "", "name", "edit-locker", 1, "clear", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", "name", "remove-locker", 1, "clear", 3, "click"], ["for", "title"], ["features", "", 1, "flex", "flex-wrap", "items-center", "space-x-2"], [3, "ngModel", "ngModelOptions"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "text-info", "text-base"]], template: function LockerListFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275repeaterCreate(1, LockerListFieldComponent_For_2_Template, 29, 15, "div", 1, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 2);
        \u0275\u0275listener("click", function LockerListFieldComponent_Template_button_click_3_listener() {
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
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 1, "BOOKINGS.LOCKER_ADD"));
      }
    }, dependencies: [
      IconComponent,
      MatRippleModule,
      MatRipple,
      AuthenticatedImageDirective,
      MatCheckboxModule,
      MatCheckbox,
      FormsModule,
      NgControlStatus,
      NgModel,
      TranslatePipe,
      LevelPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockerListFieldComponent, [{
    type: Component,
    args: [{ selector: `locker-list-field`, template: `
        <div list class="space-y-2">
            @for (item of items(); track item) {
                <div
                    locker
                    class="border-base-200 relative flex w-full items-center rounded-lg border p-2 shadow-sm"
                >
                    @if (features()?.length) {
                        <div class="flex flex-col">
                            <label for="title">{{
                                'COMMON.TYPE' | translate
                            }}</label>
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
                                src="assets/icons/locker-placeholder.svg"
                            />
                        }
                    </div>
                    <div class="space-y-2 pb-4">
                        <div class="font-medium">
                            {{ item.name || 'Locker' }}
                        </div>
                        <div class="flex items-center space-x-2 text-sm">
                            <icon class="text-base text-blue-500">place</icon>
                            <p>
                                {{
                                    (item?.zone?.id | level)?.display_name ||
                                        (item?.zone?.id | level)?.name
                                }}
                            </p>
                        </div>
                        @if ($any(item).accessible) {
                            <div class="flex items-center space-x-2 text-sm">
                                <icon class="text-info text-base"
                                    >accessible</icon
                                >
                                <p>
                                    {{
                                        'BOOKINGS.LOCKER_ACCESSIBLE' | translate
                                    }}
                                </p>
                            </div>
                        }
                        <div
                            class="absolute right-0 bottom-0 flex items-center justify-end text-xs"
                        >
                            <button
                                btn
                                matRipple
                                name="edit-locker"
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
                                name="remove-locker"
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
                </div>
            }
        </div>
        <button
            btn
            matRipple
            name="add-locker"
            class="inverse mt-2 w-full"
            (click)="changeResources()"
        >
            <div class="flex items-center justify-center space-x-2">
                <icon>search</icon>
                <span>{{ 'BOOKINGS.LOCKER_ADD' | translate }}</span>
            </div>
        </button>
        <div class="mb-2 flex flex-wrap items-center sm:space-x-2">
            <div class="min-w-[256px] flex-1 space-y-2"></div>
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => LockerListFieldComponent),
        multi: true
      }
    ], imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      AuthenticatedImageDirective,
      MatCheckboxModule,
      LevelPipe,
      FormsModule
    ] }]
  }], null, { features: [{ type: Input, args: [{ isSignal: true, alias: "features", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerListFieldComponent, { className: "LockerListFieldComponent", filePath: "libs/bookings/src/lib/locker-list-field.component.ts", lineNumber: 162 });
})();

// apps/workplace/src/app/book/locker-flow/locker-flow-confirm.component.ts
function BookLockerFlowConfirmComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 3);
  }
}
function BookLockerFlowConfirmComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function BookLockerFlowConfirmComponent_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismiss());
    });
    \u0275\u0275elementStart(1, "icon", 16);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function BookLockerFlowConfirmComponent_Conditional_27_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "icon");
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
function BookLockerFlowConfirmComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 12)(1, "icon", 6);
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
    \u0275\u0275repeaterCreate(17, BookLockerFlowConfirmComponent_Conditional_27_For_18_Template, 5, 1, "div", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.booking_asset?.name || ctx_r1.booking_asset?.id || "", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 3, "RESOURCE.LOCKER"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.location);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.booking_asset.features);
  }
}
function BookLockerFlowConfirmComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function BookLockerFlowConfirmComponent_Conditional_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
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
var BookLockerFlowConfirmComponent = class _BookLockerFlowConfirmComponent extends AsyncHandler {
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
    this.loading = this._state.loading;
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
        notifyError(e);
      }
    };
    this.dismiss = (e) => this._sheet_ref?.dismiss(e);
  }
  get time_format() {
    return this._settings.time_format;
  }
  get booking() {
    return this._state.model();
  }
  get assets() {
    return this.booking.assets || null;
  }
  get assets_count() {
    return this.assets?.length ? this.assets.reduce((a, b) => a + b.amount, 0) : 0;
  }
  get booking_asset() {
    return this.booking.booking_asset;
  }
  get location() {
    const building = this._org.buildings.find((b) => this.booking.zones.includes(b.id));
    const level = this._org.levelWithID(this.booking_asset.zones);
    return `${level?.display_name || level?.name}${building ? "," : ""} ${building?.address || building?.display_name || building?.name || ""}`;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275BookLockerFlowConfirmComponent_BaseFactory;
      return function BookLockerFlowConfirmComponent_Factory(__ngFactoryType__) {
        return (\u0275BookLockerFlowConfirmComponent_BaseFactory || (\u0275BookLockerFlowConfirmComponent_BaseFactory = \u0275\u0275getInheritedFactory(_BookLockerFlowConfirmComponent)))(__ngFactoryType__ || _BookLockerFlowConfirmComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookLockerFlowConfirmComponent, selectors: [["locker-flow-confirm"]], inputs: { show_close: [1, "show_close"] }, outputs: { show_close: "show_closeChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 30, vars: 21, consts: [[1, "bg-base-200", "sticky", "top-2", "z-10", "mx-auto", "mb-4", "flex", "h-14", "w-full", "max-w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-sm", "border-none", "p-2"], [1, "m-0", "flex-1", "px-2", "text-xl", "font-medium", "capitalize"], [1, ""], ["diameter", "32"], ["icon", "", "name", "close-locker-confirm", "matRipple", ""], ["period", "", 1, "flex", "space-x-1", "px-2", "py-4"], [1, "text-success", "text-2xl"], ["details", "", 1, "space-y-2", "text-base"], [1, "text-xl"], [1, "flex", "items-center", "space-x-2"], ["date", ""], ["time", ""], ["resource", "", 1, "flex", "space-x-1", "border-t", "px-2", "py-4", "text-base"], [1, "border-base-200", "mt-4", "w-full", "border-t", "p-2"], ["name", "confirm-locker", "btn", "", "matRipple", "", 1, "w-full"], ["icon", "", "name", "close-locker-confirm", "matRipple", "", 3, "click"], [1, "text-2xl"], ["features", "", 1, "flex", "items-center", "space-x-2"], ["name", "confirm-locker", "btn", "", "matRipple", "", 1, "w-full", 3, "click"]], template: function BookLockerFlowConfirmComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2);
        \u0275\u0275conditionalCreate(5, BookLockerFlowConfirmComponent_Conditional_5_Template, 1, 0, "mat-spinner", 3);
        \u0275\u0275conditionalCreate(6, BookLockerFlowConfirmComponent_Conditional_6_Template, 3, 0, "button", 4);
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
        \u0275\u0275elementStart(19, "div", 9)(20, "icon", 8);
        \u0275\u0275text(21, "schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 11);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275pipe(25, "date");
        \u0275\u0275pipe(26, "date");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(27, BookLockerFlowConfirmComponent_Conditional_27_Template, 19, 5, "section", 12);
        \u0275\u0275elementStart(28, "footer", 13);
        \u0275\u0275conditionalCreate(29, BookLockerFlowConfirmComponent_Conditional_29_Template, 3, 3, "button", 14);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, "APP.WORKPLACE.LOCKER_CONFIRM_TITLE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_close() ? 6 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.booking.title || "~Untitled~");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 10, ctx.booking.date, "fullDate"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.booking.all_day ? \u0275\u0275pipeBind1(24, 13, "COMMON.ALL_DAY") : \u0275\u0275pipeBind2(25, 15, ctx.booking.date, ctx.time_format) + " - " + \u0275\u0275pipeBind2(26, 18, ctx.booking.date + ctx.booking.duration * 60 * 1e3, ctx.time_format + " (z)"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.booking_asset?.id ? 27 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 29 : -1);
      }
    }, dependencies: [
      CommonModule,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      IconComponent,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookLockerFlowConfirmComponent, [{
    type: Component,
    args: [{ selector: "locker-flow-confirm", template: `
        <header
            class="bg-base-200 sticky top-2 z-10 mx-auto mb-4 flex h-14 w-full max-w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none p-2"
        >
            <h2 class="m-0 flex-1 px-2 text-xl font-medium capitalize">
                {{ 'APP.WORKPLACE.LOCKER_CONFIRM_TITLE' | translate }}
            </h2>
            <div class="">
                @if (loading()) {
                    <mat-spinner diameter="32"></mat-spinner>
                }
                @if (show_close()) {
                    <button
                        icon
                        name="close-locker-confirm"
                        matRipple
                        (click)="dismiss()"
                    >
                        <icon class="text-2xl">close</icon>
                    </button>
                }
            </div>
        </header>
        <section period class="flex space-x-1 px-2 py-4">
            <icon class="text-success text-2xl">done</icon>
            <div details class="space-y-2 text-base">
                <h3 class="text-xl">{{ booking.title || '~Untitled~' }}</h3>
                <div class="flex items-center space-x-2">
                    <icon class="text-xl">calendar_today</icon>
                    <div date>{{ booking.date | date: 'fullDate' }}</div>
                </div>
                <div class="flex items-center space-x-2">
                    <icon class="text-xl">schedule</icon>
                    <div time>
                        {{
                            booking.all_day
                                ? ('COMMON.ALL_DAY' | translate)
                                : (booking.date | date: time_format) +
                                  ' - ' +
                                  (booking.date + booking.duration * 60 * 1000
                                      | date: time_format + ' (z)')
                        }}
                    </div>
                </div>
            </div>
        </section>
        @if (booking_asset?.id) {
            <section
                resource
                class="flex space-x-1 border-t px-2 py-4 text-base"
            >
                <icon class="text-success text-2xl">done</icon>
                <div details class="space-y-2 text-base">
                    <h3 class="text-xl">
                        {{ booking_asset?.name || booking_asset?.id || '' }}
                    </h3>
                    <div class="flex items-center space-x-2">
                        <icon>person</icon>
                        <span>{{ 'RESOURCE.LOCKER' | translate }}</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <icon>place</icon>
                        <div>{{ location }}</div>
                    </div>
                    @for (feat of booking_asset.features; track feat) {
                        <div features class="flex items-center space-x-2">
                            <icon>arrow_upward</icon>
                            <div>{{ feat }}</div>
                        </div>
                    }
                </div>
            </section>
        }
        <footer class="border-base-200 mt-4 w-full border-t p-2">
            @if (!loading()) {
                <button
                    name="confirm-locker"
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
      MatProgressSpinnerModule,
      MatRippleModule,
      IconComponent
    ] }]
  }], null, { show_close: [{ type: Input, args: [{ isSignal: true, alias: "show_close", required: false }] }, { type: Output, args: ["show_closeChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookLockerFlowConfirmComponent, { className: "BookLockerFlowConfirmComponent", filePath: "apps/workplace/src/app/book/locker-flow/locker-flow-confirm.component.ts", lineNumber: 114 });
})();

// apps/workplace/src/app/book/locker-flow/locker-form-details.component.ts
var _c02 = () => ({ standalone: true });
function LockerFormDetailsComponent_Conditional_0_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r3 = ctx.$implicit;
    \u0275\u0275property("value", b_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", b_r3.display_name || b_r3.name, " ");
  }
}
function LockerFormDetailsComponent_Conditional_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 13);
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
function LockerFormDetailsComponent_Conditional_0_Conditional_29_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "label", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "a-duration-field", 20);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 9, "FORM.TIME_END"));
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r1.form().duration)("time", ctx_r1.model().date)("max", ctx_r1.max_duration)("min", 60)("step", 60)("custom_options", ctx_r1.custom_durations())("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
    \u0275\u0275control();
  }
}
function LockerFormDetailsComponent_Conditional_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "label", 16);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a-time-field", 17);
    \u0275\u0275listener("ngModelChange", function LockerFormDetailsComponent_Conditional_0_Conditional_29_Template_a_time_field_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.model.update((m) => __spreadProps(__spreadValues({}, m), { date: $event })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, LockerFormDetailsComponent_Conditional_0_Conditional_29_Conditional_8_Template, 7, 11, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "FORM.TIME_START"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.model().date)("ngModelOptions", \u0275\u0275pureFunction0(9, _c02))("use_24hr", ctx_r1.use_24hr)("disabled", ctx_r1.form().date().disabled() || ctx_r1.model().duration > 24 * 60 - 1 || ctx_r1.disable_start)("timezone", ctx_r1.timezone);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.hide_end ? 8 : -1);
  }
}
function LockerFormDetailsComponent_Conditional_0_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1)(1, "h3", 2)(2, "div", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "locker-list-field", 21);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.options()?.group ? "3" : "2", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 3, "RESOURCE.LOCKER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r1.form().resources);
    \u0275\u0275control();
  }
}
function LockerFormDetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "h3", 2)(3, "div", 3);
    \u0275\u0275text(4, " 1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "label", 7);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-form-field", 8)(16, "mat-select", 9);
    \u0275\u0275twoWayListener("ngModelChange", function LockerFormDetailsComponent_Conditional_0_Template_mat_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.building, $event) || (ctx_r1.building = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(17, LockerFormDetailsComponent_Conditional_0_For_18_Template, 2, 2, "mat-option", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 11)(20, "label", 7);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "a-date-field", 12);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(28, LockerFormDetailsComponent_Conditional_0_Conditional_28_Template, 3, 4, "mat-checkbox", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(29, LockerFormDetailsComponent_Conditional_0_Conditional_29_Template, 9, 10, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(30, LockerFormDetailsComponent_Conditional_0_Conditional_30_Template, 8, 5, "section", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 11, "BOOKINGS.DETAILS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 13, "RESOURCE.BUILDING"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.building);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(19, _c02));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.buildings());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 15, "FORM.DATE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r1.form().date)("timezone", ctx_r1.timezone);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 17, "FORM.DATE_REQUIRED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.allow_all_day && !ctx_r1.disable_date ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.model().all_day ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form().resources ? 30 : -1);
  }
}
var LockerFormDetailsComponent = class _LockerFormDetailsComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._injector = inject(Injector);
    this.form = input(
      void 0,
      ...ngDevMode ? [{ debugName: "form" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.find = output();
    this.model = this._state.model;
    this.buildings = this._org.building_list;
    this.levels = this._org.active_levels;
    this.options = this._state.options;
    this.features = this._state.features;
    this.from_id = false;
    this.custom_durations = signal(
      [],
      ...ngDevMode ? [{ debugName: "custom_durations" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.recurrence_options = ["daily", "weekly", "monthly"];
    this.setOptions = (o) => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
  }
  get building() {
    return this._org.building;
  }
  set building(bld) {
    this._org.building = bld;
  }
  get max_duration() {
    return this._settings.get("app.lockers.max_duration") || this._settings.get("app.bookings.max_duration") || 8 * 60;
  }
  get disable_date() {
    return this._settings.get("app.lockers.disabled_date_select");
  }
  get disable_start() {
    return this._settings.get("app.lockers.disabled_start_time");
  }
  get hide_end() {
    return this._settings.get("app.lockers.hide_end_time");
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  get allow_all_day() {
    return this.allow_time_changes && (this._settings.get("app.lockers.allow_all_day") ?? this._settings.get("app.bookings.allow_all_day") ?? true);
  }
  get allow_time_changes() {
    return this._settings.get("app.lockers.allow_time_changes") !== false;
  }
  get timezone() {
    return this._settings.get("app.bookings.use_building_timezone") || this._settings.get("app.lockers.use_building_timezone") ? this._org.building.timezone : "";
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    this._state.model.update((m) => __spreadProps(__spreadValues({}, m), {
      all_day: !this.allow_time_changes || m.all_day
    }));
  }
  ngOnChanges(changes) {
    const form = this.form();
    if (changes.form && form) {
      const resource_change = onFieldChange(this._state.model, (m) => m.resources, (list) => list?.length ? this.setBookingAsset(list[0]) : "", this._injector);
      this.subscription("change", () => resource_change.destroy());
      const date_change = onFieldChange(this._state.model, (m) => m.date, () => this._setCustomDateOptions(), this._injector);
      this.subscription("date", () => date_change.destroy());
      this._setCustomDateOptions();
    }
  }
  _setCustomDateOptions() {
    const today = /* @__PURE__ */ new Date();
    const hours = 22 - today.getHours();
    const days = 5 - today.getDay();
    const durations = [];
    for (let i = 1; i <= days; i++) {
      durations.push((24 * i + hours) * 60);
    }
    this.custom_durations.set(durations);
  }
  setBookingAsset(locker) {
    this._state.model.update((m) => __spreadProps(__spreadValues({}, m), { asset_id: void 0 }));
    if (!locker)
      return;
    this.selected_locker = locker;
    this._state.model.update((m) => __spreadProps(__spreadValues({}, m), {
      asset_id: locker?.id,
      asset_name: locker.name,
      map_id: locker.map_id || locker?.bank_id || locker?.id,
      description: locker.name,
      booking_type: "locker",
      zones: [this.building.id],
      booking_asset: locker,
      tags: locker.bank?.tags || []
    }));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275LockerFormDetailsComponent_BaseFactory;
      return function LockerFormDetailsComponent_Factory(__ngFactoryType__) {
        return (\u0275LockerFormDetailsComponent_BaseFactory || (\u0275LockerFormDetailsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_LockerFormDetailsComponent)))(__ngFactoryType__ || _LockerFormDetailsComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerFormDetailsComponent, selectors: [["new-locker-form-details"]], inputs: { form: [1, "form"] }, outputs: { find: "find" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [[1, "divide-base-200", "space-y-2", "divide-y", "p-0", "sm:px-16", "sm:py-4"], [1, "p-2"], [1, "mb-4", "flex", "items-center", "space-x-2"], [1, "bg-base-200", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full"], [1, "text-xl"], [1, "flex", "flex-wrap", "items-center", "sm:space-x-2"], [1, "min-w-[256px]", "flex-1"], ["for", "date"], ["appearance", "outline", 1, "w-full"], ["placeholder", "Select Building", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], [1, "relative", "min-w-[256px]", "flex-1"], [3, "formField", "timezone"], [1, "absolute", "-top-2", "right-0", 3, "formField"], [1, "flex", "items-center", "space-x-2"], [1, "w-1/3", "flex-1"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr", "disabled", "timezone"], [1, "relative", "w-1/3", "flex-1"], ["for", "end-time"], [3, "formField", "time", "max", "min", "step", "custom_options", "use_24hr", "timezone"], [3, "formField"]], template: function LockerFormDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, LockerFormDetailsComponent_Conditional_0_Template, 31, 20, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.form() ? 0 : -1);
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      NgControlStatus,
      NgModel,
      FormField,
      LockerListFieldComponent,
      DateFieldComponent,
      TimeFieldComponent,
      DurationFieldComponent,
      MatFormFieldModule,
      MatFormField,
      MatCheckboxModule,
      MatCheckbox,
      MatSelectModule,
      MatSelect,
      MatOption,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockerFormDetailsComponent, [{
    type: Component,
    args: [{ selector: "new-locker-form-details", template: `
        @if (form()) {
            <div
                class="divide-base-200 space-y-2 divide-y p-0 sm:px-16 sm:py-4"
            >
                <section class="p-2">
                    <h3 class="mb-4 flex items-center space-x-2">
                        <div
                            class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                        >
                            1
                        </div>
                        <div class="text-xl">
                            {{ 'BOOKINGS.DETAILS' | translate }}
                        </div>
                    </h3>
                    <div class="flex flex-wrap items-center sm:space-x-2">
                        <div class="min-w-[256px] flex-1">
                            <label for="date">
                                {{ 'RESOURCE.BUILDING' | translate
                                }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    [(ngModel)]="building"
                                    [ngModelOptions]="{ standalone: true }"
                                    placeholder="Select Building"
                                >
                                    @for (b of buildings(); track b) {
                                        <mat-option [value]="b">
                                            {{ b.display_name || b.name }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                        <div class="relative min-w-[256px] flex-1">
                            <label for="date">
                                {{ 'FORM.DATE' | translate }}<span>*</span>
                            </label>
                            <a-date-field
                                [formField]="form().date"
                                [timezone]="timezone"
                            >
                                {{ 'FORM.DATE_REQUIRED' | translate }}
                            </a-date-field>
                            @if (allow_all_day && !disable_date) {
                                <mat-checkbox
                                    [formField]="form().all_day"
                                    class="absolute -top-2 right-0"
                                >
                                    {{ 'COMMON.ALL_DAY' | translate }}
                                </mat-checkbox>
                            }
                        </div>
                    </div>
                    @if (!model().all_day) {
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
                                        model.update((m) => ({
                                            ...m,
                                            date: $event,
                                        }))
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [use_24hr]="use_24hr"
                                    [disabled]="
                                        form().date().disabled() ||
                                        model().duration > 24 * 60 - 1 ||
                                        disable_start
                                    "
                                    [timezone]="timezone"
                                ></a-time-field>
                            </div>
                            @if (!hide_end) {
                                <div class="relative w-1/3 flex-1">
                                    <label for="end-time">
                                        {{ 'FORM.TIME_END' | translate
                                        }}<span>*</span>
                                    </label>
                                    <a-duration-field
                                        [formField]="form().duration"
                                        [time]="model().date"
                                        [max]="max_duration"
                                        [min]="60"
                                        [step]="60"
                                        [custom_options]="custom_durations()"
                                        [use_24hr]="use_24hr"
                                        [timezone]="timezone"
                                    >
                                    </a-duration-field>
                                </div>
                            }
                        </div>
                    }
                </section>
                @if (form().resources) {
                    <section class="p-2">
                        <h3 class="mb-4 flex items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                {{ options()?.group ? '3' : '2' }}
                            </div>
                            <div class="text-xl">
                                {{ 'RESOURCE.LOCKER' | translate }}
                            </div>
                        </h3>
                        <locker-list-field
                            [formField]="form().resources"
                        ></locker-list-field>
                    </section>
                }
            </div>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      FormsModule,
      FormField,
      LockerListFieldComponent,
      DateFieldComponent,
      TimeFieldComponent,
      DurationFieldComponent,
      MatFormFieldModule,
      MatCheckboxModule,
      MatSelectModule
    ] }]
  }], null, { form: [{ type: Input, args: [{ isSignal: true, alias: "form", required: false }] }], find: [{ type: Output, args: ["find"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerFormDetailsComponent, { className: "LockerFormDetailsComponent", filePath: "apps/workplace/src/app/book/locker-flow/locker-form-details.component.ts", lineNumber: 178 });
})();

// apps/workplace/src/app/book/locker-flow/locker-flow-form.component.ts
var BookLockerFlowFormComponent = class _BookLockerFlowFormComponent {
  constructor() {
    this._state = inject(BookingFormService);
    this._router = inject(Router);
    this._org = inject(OrganisationService);
    this._bottom_sheet = inject(MatBottomSheet);
    this.level = "";
    this.levels = [];
    this.clearForm = () => {
      this.level = this._org.building.id;
      this._state.clearForm();
    };
    this.viewConfirm = () => {
      if (!this.form().valid())
        return notifyError(i18n("FORM.INVALID_FIELDS", {
          field_list: getInvalidSignalFields(this.form, this.model).join(", ")
        }));
      this.sheet_ref = this._bottom_sheet.open(BookLockerFlowConfirmComponent);
      this.sheet_ref.instance.show_close.set(true);
      this.sheet_ref.afterDismissed().subscribe((value) => {
        if (value) {
          this._router.navigate(["/book", "locker", "success"]);
          this._state.setView("success");
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
    this._state.setOptions({ type: "locker" });
    this.level = this._org.building?.id;
    this.levels = [
      { id: this._org.building?.id, name: "Any Level" },
      ...this._org.levelsForBuilding(this._org.building)
    ];
    if (isBefore(this.model().date, Date.now())) {
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
    this.\u0275fac = function BookLockerFlowFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookLockerFlowFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookLockerFlowFormComponent, selectors: [["locker-flow-form"]], decls: 11, vars: 7, consts: [[1, "bg-base-200", "h-full", "w-full", "overflow-auto"], [1, "border-base-200", "bg-base-100", "mx-auto", "w-3xl", "max-w-full", "border", "sm:my-4"], [1, "border-base-200", "w-full", "border-b", "p-4", "text-2xl", "font-medium", "sm:px-16", "sm:py-4"], [3, "form"], [1, "border-base-200", "w-full", "border-b", "sm:mb-2"], [1, "flex", "flex-col", "items-center", "p-2", "sm:mb-2", "sm:flex-row", "sm:space-x-2", "sm:px-16"], ["btn", "", "name", "open-locker-confirm", "matRipple", "", "confirm", "", 1, "w-full", "sm:w-auto", 3, "click"]], template: function BookLockerFlowFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "new-locker-form-details", 3)(6, "div", 4);
        \u0275\u0275elementStart(7, "section", 5)(8, "button", 6);
        \u0275\u0275listener("click", function BookLockerFlowFormComponent_Template_button_click_8_listener() {
          return ctx.viewConfirm();
        });
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "BOOKINGS.LOCKER_TITLE"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("form", ctx.form);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 5, "BOOKINGS.LOCKER_CONFIRM"), " ");
      }
    }, dependencies: [MatRippleModule, MatRipple, LockerFormDetailsComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookLockerFlowFormComponent, [{
    type: Component,
    args: [{ selector: "locker-flow-form", template: `
        <div class="bg-base-200 h-full w-full overflow-auto">
            <div
                class="border-base-200 bg-base-100 mx-auto w-3xl max-w-full border sm:my-4"
            >
                <h2
                    class="border-base-200 w-full border-b p-4 text-2xl font-medium sm:px-16 sm:py-4"
                >
                    {{ 'BOOKINGS.LOCKER_TITLE' | translate }}
                </h2>
                <new-locker-form-details
                    [form]="form"
                ></new-locker-form-details>
                <div class="border-base-200 w-full border-b sm:mb-2"></div>
                <section
                    class="flex flex-col items-center p-2 sm:mb-2 sm:flex-row sm:space-x-2 sm:px-16"
                >
                    <button
                        btn
                        name="open-locker-confirm"
                        matRipple
                        confirm
                        class="w-full sm:w-auto"
                        (click)="viewConfirm()"
                    >
                        {{ 'BOOKINGS.LOCKER_CONFIRM' | translate }}
                    </button>
                </section>
            </div>
        </div>
    `, imports: [MatRippleModule, TranslatePipe, LockerFormDetailsComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookLockerFlowFormComponent, { className: "BookLockerFlowFormComponent", filePath: "apps/workplace/src/app/book/locker-flow/locker-flow-form.component.ts", lineNumber: 56 });
})();

// apps/workplace/src/app/book/locker-flow/locker-flow-success.component.ts
var _c03 = (a0) => ({ name: a0 });
var _c12 = (a0, a1, a2, a3) => ({ name: a0, place: a1, date: a2, time: a3 });
var _c2 = () => ["/"];
function BookLockerFlowSuccessComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "a", 8);
    \u0275\u0275pipe(2, "sanitize");
    \u0275\u0275element(3, "img", 9);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 10);
    \u0275\u0275pipe(8, "sanitize");
    \u0275\u0275element(9, "img", 11);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "a", 12);
    \u0275\u0275pipe(14, "safe");
    \u0275\u0275elementStart(15, "icon", 13);
    \u0275\u0275text(16, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("href", \u0275\u0275pipeBind2(2, 6, ctx_r0.outlook_link(), "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, "BOOKINGS.LINK_OUTLOOK"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(8, 11, ctx_r0.google_link(), "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 14, "BOOKINGS.LINK_GOOGLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(14, 16, ctx_r0.ical_link(), "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 19, "BOOKINGS.LINK_ICAL"));
  }
}
var BookLockerFlowSuccessComponent = class _BookLockerFlowSuccessComponent {
  constructor() {
    this._state = inject(BookingFormService);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.outlook_link = signal(
      "",
      ...ngDevMode ? [{ debugName: "outlook_link" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.google_link = signal(
      "",
      ...ngDevMode ? [{ debugName: "google_link" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.ical_link = signal(
      "",
      ...ngDevMode ? [{ debugName: "ical_link" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.viewCalendarLinks = () => this._state.openBookingLinkModal();
  }
  get location() {
    if (!this.last_event)
      return "Unknown";
    const building = this._org.buildings.find((_) => this.last_event.zones.includes(_.id));
    const level = this._org.levelWithID(this.last_event.zones);
    return (building ? `${building.display_name || building.name}, ` : "") + (level ? `${level.display_name || level.name}, ` : "");
  }
  get last_event() {
    return this._state.last_success;
  }
  get show_links() {
    return this._settings.get("app.lockers.show_calendar_links");
  }
  get time_format() {
    return this._settings.time_format;
  }
  ngOnInit() {
    this.outlook_link.set(generateMicrosoftCalendarLink(this.last_event));
    this.google_link.set(generateGoogleCalendarLink(this.last_event));
    this.ical_link.set(generateCalendarFileLink(this.last_event));
  }
  static {
    this.\u0275fac = function BookLockerFlowSuccessComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookLockerFlowSuccessComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookLockerFlowSuccessComponent, selectors: [["locker-flow-success"]], decls: 17, vars: 30, consts: [[1, "bg-base-100", "absolute", "inset-0", "z-50", "flex", "flex-col", "overflow-auto"], [1, "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "text-center", "text-2xl", "font-medium"], ["src", "assets/icons/locker-success.svg"], [1, "text-center"], [1, "relative", "flex", "flex-col", "items-center", "space-y-4", "p-4"], [1, "border-base-200", "bg-base-100", "sticky", "bottom-0", "mt-4", "flex", "w-full", "items-center", "justify-center", "border-t", "p-2"], ["btn", "", "name", "locker-confirm-continue", "matRipple", "", 1, "mx-auto", "w-full", "max-w-lg", 3, "routerLink"], ["btn", "", "matRipple", "", "name", "locker-outlook-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["btn", "", "matRipple", "", "name", "locker-google-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "href"], ["src", "assets/icons/gcal.svg", 1, "w-6"], ["btn", "", "matRipple", "", "name", "locker-ical-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "href"], [1, "text-xl"]], template: function BookLockerFlowSuccessComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "main", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "img", 3);
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "date");
        \u0275\u0275pipe(9, "date");
        \u0275\u0275pipe(10, "date");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(12, BookLockerFlowSuccessComponent_Conditional_12_Template, 20, 21, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "footer", 6)(14, "a", 7);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 5, "BOOKINGS.ITEM_BOOKED", \u0275\u0275pureFunction1(22, _c03, (ctx.last_event.asset_name || ctx.last_event.asset_id) + ", " + ctx.location)), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 17, "APP.WORKPLACE.LOCKER_SUCCESS_MSG", \u0275\u0275pureFunction4(24, _c12, ctx.last_event.asset_name, ctx.location, \u0275\u0275pipeBind2(8, 8, ctx.last_event.date, "mediumDate"), \u0275\u0275pipeBind2(9, 11, ctx.last_event.date, ctx.time_format) + " - " + \u0275\u0275pipeBind2(10, 14, ctx.last_event.date + ctx.last_event.duration * 60 * 1e3, ctx.time_format))), " ");
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.show_links ? 12 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(29, _c2));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 20, "APP.WORKPLACE.BOOKING_FINISHED"), " ");
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      RouterModule,
      RouterLink,
      MatRippleModule,
      MatRipple,
      DatePipe,
      TranslatePipe,
      SanitizePipe,
      SafePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookLockerFlowSuccessComponent, [{
    type: Component,
    args: [{ selector: "locker-flow-success", template: `
        <div
            class="bg-base-100 absolute inset-0 z-50 flex flex-col overflow-auto"
        >
            <main
                class="flex flex-1 flex-col items-center justify-center space-y-2 p-8"
            >
                <h2 class="text-center text-2xl font-medium">
                    {{
                        'BOOKINGS.ITEM_BOOKED'
                            | translate
                                : {
                                      name:
                                          (last_event.asset_name ||
                                              last_event.asset_id) +
                                          ', ' +
                                          location,
                                  }
                    }}
                </h2>
                <img src="assets/icons/locker-success.svg" />
                <p class="text-center">
                    {{
                        'APP.WORKPLACE.LOCKER_SUCCESS_MSG'
                            | translate
                                : {
                                      name: last_event.asset_name,
                                      place: location,
                                      date:
                                          last_event.date | date: 'mediumDate',
                                      time:
                                          (last_event.date
                                              | date: time_format) +
                                          ' - ' +
                                          (last_event.date +
                                              last_event.duration * 60 * 1000
                                              | date: time_format),
                                  }
                    }}
                </p>
                @if (show_links) {
                    <div
                        class="relative flex flex-col items-center space-y-4 p-4"
                    >
                        <a
                            btn
                            matRipple
                            name="locker-outlook-link"
                            class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                            [href]="outlook_link() | sanitize: 'url'"
                            target="_blank"
                            rel="noopener noreferer"
                        >
                            <img src="assets/icons/outlook.svg" class="w-6" />
                            <span>{{
                                'BOOKINGS.LINK_OUTLOOK' | translate
                            }}</span>
                        </a>
                        <a
                            btn
                            matRipple
                            name="locker-google-link"
                            class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                            [href]="google_link() | sanitize: 'url'"
                            target="_blank"
                            rel="noopener noreferer"
                        >
                            <img src="assets/icons/gcal.svg" class="w-6" />
                            <span>{{
                                'BOOKINGS.LINK_GOOGLE' | translate
                            }}</span>
                        </a>
                        <a
                            btn
                            matRipple
                            name="locker-ical-link"
                            class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                            [href]="ical_link() | safe: 'url'"
                            target="_blank"
                            rel="noopener noreferer"
                        >
                            <icon class="text-xl">download</icon>
                            <span>{{ 'BOOKINGS.LINK_ICAL' | translate }}</span>
                        </a>
                    </div>
                }
            </main>
            <footer
                class="border-base-200 bg-base-100 sticky bottom-0 mt-4 flex w-full items-center justify-center border-t p-2"
            >
                <a
                    btn
                    name="locker-confirm-continue"
                    matRipple
                    class="mx-auto w-full max-w-lg"
                    [routerLink]="['/']"
                >
                    {{ 'APP.WORKPLACE.BOOKING_FINISHED' | translate }}
                </a>
            </footer>
        </div>
    `, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      RouterModule,
      MatRippleModule,
      SanitizePipe,
      SafePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookLockerFlowSuccessComponent, { className: "BookLockerFlowSuccessComponent", filePath: "apps/workplace/src/app/book/locker-flow/locker-flow-success.component.ts", lineNumber: 134 });
})();

// apps/workplace/src/app/book/locker-flow.component.ts
var _c04 = (a0) => ({ name: a0 });
var _c13 = () => ["/your-bookings"];
function BookLockerFlowComponent_Conditional_0_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "locker-flow-success");
  }
}
function BookLockerFlowComponent_Conditional_0_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "locker-flow-confirm");
  }
}
function BookLockerFlowComponent_Conditional_0_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "locker-flow-form");
  }
}
function BookLockerFlowComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, BookLockerFlowComponent_Conditional_0_Case_1_Template, 1, 0, "locker-flow-success")(2, BookLockerFlowComponent_Conditional_0_Case_2_Template, 1, 0, "locker-flow-confirm")(3, BookLockerFlowComponent_Conditional_0_Case_3_Template, 1, 0, "locker-flow-form");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_1_0 = ctx_r0.view()) === "success" ? 1 : tmp_1_0 === "confirm" ? 2 : 3);
  }
}
function BookLockerFlowComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "img", 2);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 3);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 3, "APP.WORKPLACE.LOCKER_ASSIGNED", \u0275\u0275pureFunction1(8, _c04, ctx_r0.assigned_space()?.name)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c13));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 6, "APP.WORKPLACE.VIEW_SCHEDULE"), " ");
  }
}
var BookLockerFlowComponent = class _BookLockerFlowComponent extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(BookingFormService);
    this._route = inject(ActivatedRoute);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.view = this._state.view;
    this._lockers = signal(
      [],
      ...ngDevMode ? [{ debugName: "_lockers" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.assigned_space = computed(
      () => this._lockers().find((_) => _.assigned_to?.toLowerCase() === currentUser().email?.toLowerCase()),
      ...ngDevMode ? [{ debugName: "assigned_space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_booking = signal(
      false,
      ...ngDevMode ? [{ debugName: "has_booking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(async () => {
      const bld = this._org.active_building();
      const region = this._org.active_region();
      const scope_id = this._settings.get("app.use_region") ? region?.id || this._org.region?.id : bld?.id;
      this._lockers.set(await loadLockerResources(this._org, scope_id));
    });
    void this._loadTodaysBookings();
  }
  get last_success() {
    return this._state.last_success;
  }
  ngOnInit() {
    this._state.loadForm("locker");
    this._state.setOptions({ type: "locker" });
    if (!this._state.model().id)
      this._state.newForm("locker");
    this._state.model.update((m) => __spreadProps(__spreadValues({}, m), { booking_type: "locker" }));
    if (this._state.model().id) {
      const booking = new Booking(this._state.model());
      const is_group = !!booking.parent_id || !!booking.group || !!booking.extension_data?.group_members?.length;
      if (is_group) {
        this._state.loadGroupMembersForBooking(booking).then((members) => this._state.setOptions({
          group: true,
          members
        }));
      }
    }
    const param = this._route.snapshot.paramMap;
    if (param.has("step"))
      this._state.setView(param.get("step"));
    const query = this._route.snapshot.queryParamMap;
    if (query.has("success"))
      this._state.setView("success");
  }
  async _loadTodaysBookings() {
    const bookings = await queryBookings({
      period_start: getUnixTime(addHours(startOfDay(Date.now()), 1)),
      period_end: getUnixTime(addHours(endOfDay(Date.now()), -1)),
      type: "locker"
    }).catch(() => []);
    this.has_booking.set(bookings.length > 0);
  }
  static {
    this.\u0275fac = function BookLockerFlowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookLockerFlowComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookLockerFlowComponent, selectors: [["placeos-book-locker-flow"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 1, consts: [[1, "bg-base-100", "z-50", "h-full", "w-full"], [1, "bg-base-100", "z-50", "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-4"], ["src", "assets/icons/parking-success.svg", 1, "h-64", "w-64"], ["btn", "", "matRipple", "", 1, "w-48", 3, "routerLink"]], template: function BookLockerFlowComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, BookLockerFlowComponent_Conditional_0_Template, 4, 1, "div", 0)(1, BookLockerFlowComponent_Conditional_1_Template, 8, 11, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!(ctx.assigned_space() && ctx.has_booking()) ? 0 : 1);
      }
    }, dependencies: [
      CommonModule,
      BookLockerFlowConfirmComponent,
      BookLockerFlowFormComponent,
      BookLockerFlowSuccessComponent,
      RouterModule,
      RouterLink,
      MatRippleModule,
      MatRipple,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=locker-flow.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookLockerFlowComponent, [{
    type: Component,
    args: [{ selector: "placeos-book-locker-flow", template: `
        @if (!(assigned_space() && has_booking())) {
            <div class="bg-base-100 z-50 h-full w-full">
                @switch (view()) {
                    @case ('success') {
                        <locker-flow-success> </locker-flow-success>
                    }
                    @case ('confirm') {
                        <locker-flow-confirm> </locker-flow-confirm>
                    }
                    @default {
                        <locker-flow-form></locker-flow-form>
                    }
                }
            </div>
        } @else {
            <div
                class="bg-base-100 z-50 flex h-full w-full flex-col items-center justify-center space-y-4"
            >
                <img src="assets/icons/parking-success.svg" class="h-64 w-64" />
                <p>
                    {{
                        'APP.WORKPLACE.LOCKER_ASSIGNED'
                            | translate
                                : {
                                      name: assigned_space()?.name,
                                  }
                    }}
                </p>
                <a btn matRipple class="w-48" [routerLink]="['/your-bookings']">
                    {{ 'APP.WORKPLACE.VIEW_SCHEDULE' | translate }}
                </a>
            </div>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      BookLockerFlowConfirmComponent,
      BookLockerFlowFormComponent,
      BookLockerFlowSuccessComponent,
      RouterModule,
      MatRippleModule
    ], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/book/locker-flow.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=locker-flow.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookLockerFlowComponent, { className: "BookLockerFlowComponent", filePath: "apps/workplace/src/app/book/locker-flow.component.ts", lineNumber: 85 });
})();
export {
  BookLockerFlowComponent
};
//# sourceMappingURL=locker-flow.component-LSPEYFFE.js.map
