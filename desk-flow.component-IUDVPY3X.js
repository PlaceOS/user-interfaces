import {
  DeskSelectModalComponent
} from "./chunk-ATLE2D6X.js";
import "./chunk-C7J3ZZDM.js";
import {
  AssetListFieldComponent,
  RecurrenceFieldComponent
} from "./chunk-ZBNDDSJV.js";
import {
  UserListFieldComponent
} from "./chunk-K5NYZM5Y.js";
import {
  LevelPipe
} from "./chunk-QQOXETP7.js";
import "./chunk-JFIBKOX5.js";
import {
  BookingFormService
} from "./chunk-FXIAH3PX.js";
import {
  MatBottomSheet,
  MatBottomSheetRef
} from "./chunk-3IGEPS5Y.js";
import {
  BuildingPipe
} from "./chunk-TDE4CEPZ.js";
import "./chunk-PDMPDUUL.js";
import {
  DurationFieldComponent
} from "./chunk-6VWXOFF3.js";
import {
  DateFieldComponent,
  UserSearchFieldComponent
} from "./chunk-OFV5AHHV.js";
import "./chunk-AOIUYVHW.js";
import "./chunk-TVCHA74G.js";
import "./chunk-SLMIDFF4.js";
import "./chunk-LRX6Y6EG.js";
import "./chunk-2BL57A35.js";
import "./chunk-HA2ZCTSS.js";
import "./chunk-I2NO6JFL.js";
import {
  generateCalendarFileLink,
  generateGoogleCalendarLink,
  generateMicrosoftCalendarLink
} from "./chunk-Q7QG3OXQ.js";
import "./chunk-MPJSJLKR.js";
import "./chunk-NX3HYSSO.js";
import "./chunk-XYVHZEPG.js";
import "./chunk-2B3QPOZE.js";
import {
  TimeFieldComponent
} from "./chunk-OGMOCJ3D.js";
import {
  AuthenticatedImageDirective,
  MatCheckbox,
  MatCheckboxModule,
  MatTooltip,
  MatTooltipModule,
  UserAvatarComponent
} from "./chunk-QTAVFI2W.js";
import {
  SpacePipe
} from "./chunk-PXWMRFEH.js";
import "./chunk-QJKMTIXW.js";
import "./chunk-OTINPVZF.js";
import {
  AsyncHandler,
  Booking,
  Building,
  BuildingLevel,
  Desk,
  FormField,
  IconComponent,
  MatDialog,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  OrganisationService,
  SETTING_KEYS,
  SafePipe,
  SanitizePipe,
  SettingsService,
  currentUser,
  findNearbyFeature,
  formatRecurrence,
  fromBookingRecurrence,
  isBefore,
  settingSignal,
  showBooking
} from "./chunk-3YCGTXG5.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DatePipe,
  FormsModule,
  Input,
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
  addDays,
  addMinutes,
  computed,
  endOfDay,
  errorMessage,
  forwardRef,
  getInvalidSignalFields,
  getTimezoneOffsetString,
  i18n,
  inject,
  input,
  model,
  notifyError,
  notifyInfo,
  output,
  set,
  setClassMetadata,
  signal,
  startOfMinute,
  unique,
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
  ɵɵdeclareLet,
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
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7MJI2IHH.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/bookings/src/lib/desk-list-field.component.ts
var _c0 = () => [];
var _c1 = () => ({ standalone: true });
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
    \u0275\u0275property("ngModel", (ctx_r3.selected_features() || \u0275\u0275pureFunction0(3, _c0)).includes(opt_r3))("ngModelOptions", \u0275\u0275pureFunction0(4, _c1));
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
var _c02 = (a0) => ({ time: a0 });
var _c12 = (a0) => ({ count: a0 });
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 10, "FORM.ASSETS_REQUESTED_FOR", \u0275\u0275pureFunction1(16, _c02, \u0275\u0275pipeBind2(5, 7, request_r4.deliver_at_time, "MMM d, " + ctx_r1.time_format))), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.end_time < request_r4.deliver_at || request_r4.conflict ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 13, "COMMON.ITEM_COUNT", \u0275\u0275pureFunction1(18, _c12, request_r4.item_count)), " ");
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
    return !!this.booking.secondary_resource && this.can_book_lockers;
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskFlowConfirmComponent, { className: "NewDeskFlowConfirmComponent", filePath: "apps/workplace/src/app/book/desk-flow/desk-flow-confirm.component.ts", lineNumber: 231 });
})();

// apps/workplace/src/app/book/desk-flow/desk-form-details.component.ts
var _c03 = () => ({ standalone: true });
var _c13 = () => [];
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
      return \u0275\u0275resetView(ctx_r1.model.update((m) => __spreadProps(__spreadValues({}, m), { date: $event })));
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
    \u0275\u0275property("ngModel", ctx_r1.model().date)("ngModelOptions", \u0275\u0275pureFunction0(21, _c03))("range", ctx_r1.bookable_hours)("min_duration", ctx_r1.effective_min_duration)("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
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
    \u0275\u0275property("date", ctx_r1.model().date)("ngModel", ctx_r1.model())("ngModelOptions", \u0275\u0275pureFunction0(8, _c03))("available_days", ctx_r1.available_days());
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
      return \u0275\u0275resetView(ctx_r1.model.update((m) => __spreadProps(__spreadValues({}, m), { secondary_resource: $event ? "locker" : "" })));
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
    \u0275\u0275property("ngModel", !!ctx_r1.model().secondary_resource)("ngModelOptions", \u0275\u0275pureFunction0(5, _c03));
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
    \u0275\u0275property("ngModel", ctx_r1.options()?.members || \u0275\u0275pureFunction0(5, _c13))("ngModelOptions", \u0275\u0275pureFunction0(6, _c03));
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
var MINUTES_IN_DAY = 24 * 60;
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
  get needs_reason() {
    return this._settings.get("app.desks.needs_reason") === true;
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
          resources: [this.selected_desk]
        }));
      }
    }
  }
  onRecurrenceChange(recurrence) {
    this.model.update((m) => __spreadValues(__spreadValues({}, m), recurrence));
  }
  onFirstInstanceChange(date) {
    this.model.update((m) => __spreadProps(__spreadValues({}, m), { date }));
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
                                        model.update((m) => ({
                                            ...m,
                                            date: $event,
                                        }))
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
                                    [ngModel]="!!model().secondary_resource"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskFormDetailsComponent, { className: "NewDeskFormDetailsComponent", filePath: "apps/workplace/src/app/book/desk-flow/desk-form-details.component.ts", lineNumber: 355 });
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
    this._settings = inject(SettingsService);
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
      if (resources?.length && !asset_id) {
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
    if (!this.model().id) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        duration: this._settings.get("app.desks.default_duration") || 60
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
    }, dependencies: [NewDeskFormDetailsComponent, IconComponent, TranslatePipe], encapsulation: 2 });
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
    `, imports: [TranslatePipe, NewDeskFormDetailsComponent, IconComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskFlowFormComponent, { className: "NewDeskFlowFormComponent", filePath: "apps/workplace/src/app/book/desk-flow/desk-flow-form.component.ts", lineNumber: 82 });
})();

// apps/workplace/src/app/book/desk-flow/desk-flow-success.component.ts
var _c04 = () => ["/"];
var _c14 = (a0) => ({ name: a0 });
var _c22 = (a0, a1, a2, a3) => ({ date: a0, time: a1, size: a2, location: a3 });
var _c3 = (a0, a1) => ({ name: a0, email: a1 });
var _c4 = (a0) => ({ count: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function NewDeskFlowSuccessComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 2);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "BOOKINGS.ITEM_BOOKED", \u0275\u0275pureFunction1(4, _c14, ctx_r0.last_event()?.asset_name || ctx_r0.last_event()?.asset_id)), " ");
  }
}
function NewDeskFlowSuccessComponent_Conditional_4_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const details_r2 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "BOOKINGS.DESK_SUCCESS_GROUP_ALLDAY", details_r2), " ");
  }
}
function NewDeskFlowSuccessComponent_Conditional_4_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const details_r2 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "BOOKINGS.DESK_SUCCESS_GROUP", details_r2), " ");
  }
}
function NewDeskFlowSuccessComponent_Conditional_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NewDeskFlowSuccessComponent_Conditional_4_Conditional_5_Conditional_0_Template, 2, 4)(1, NewDeskFlowSuccessComponent_Conditional_4_Conditional_5_Conditional_1_Template, 2, 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.last_event()?.all_day ? 0 : 1);
  }
}
function NewDeskFlowSuccessComponent_Conditional_4_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const details_r2 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "BOOKINGS.DESK_SUCCESS_LONE_ALLDAY", details_r2), " ");
  }
}
function NewDeskFlowSuccessComponent_Conditional_4_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const details_r2 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "BOOKINGS.DESK_SUCCESS_LONE", details_r2), " ");
  }
}
function NewDeskFlowSuccessComponent_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NewDeskFlowSuccessComponent_Conditional_4_Conditional_6_Conditional_0_Template, 2, 4)(1, NewDeskFlowSuccessComponent_Conditional_4_Conditional_6_Conditional_1_Template, 2, 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.last_event()?.all_day ? 0 : 1);
  }
}
function NewDeskFlowSuccessComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275declareLet(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275conditionalCreate(5, NewDeskFlowSuccessComponent_Conditional_4_Conditional_5_Template, 2, 1)(6, NewDeskFlowSuccessComponent_Conditional_4_Conditional_6_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275storeLet(\u0275\u0275pureFunction4(11, _c22, \u0275\u0275pipeBind2(2, 1, ctx_r0.last_event()?.date || 0, "mediumDate"), \u0275\u0275pipeBind2(3, 4, ctx_r0.last_event()?.date || 0, ctx_r0.time_format) + " - " + \u0275\u0275pipeBind2(4, 7, ctx_r0.last_event().date + ctx_r0.last_event().duration * 60 * 1e3, ctx_r0.time_format), ctx_r0.group_size(), ctx_r0.location()));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.is_group() ? 5 : 6);
  }
}
function NewDeskFlowSuccessComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "icon", 12);
    \u0275\u0275text(2, "update");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.formatted_recurrence());
  }
}
function NewDeskFlowSuccessComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Booked for ", ctx_r0.booked_for_name());
  }
}
function NewDeskFlowSuccessComponent_Conditional_7_For_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.error, " ");
  }
}
function NewDeskFlowSuccessComponent_Conditional_7_For_9_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 22);
    \u0275\u0275text(1, " error ");
    \u0275\u0275elementEnd();
  }
}
function NewDeskFlowSuccessComponent_Conditional_7_For_9_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 23);
    \u0275\u0275text(1, " check_circle ");
    \u0275\u0275elementEnd();
  }
}
function NewDeskFlowSuccessComponent_Conditional_7_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "a-user-avatar", 17);
    \u0275\u0275elementStart(2, "div", 18)(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, NewDeskFlowSuccessComponent_Conditional_7_For_9_Conditional_7_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, NewDeskFlowSuccessComponent_Conditional_7_For_9_Conditional_8_Template, 2, 0, "icon", 22)(9, NewDeskFlowSuccessComponent_Conditional_7_For_9_Conditional_9_Template, 2, 0, "icon", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275classProp("border-error", item_r3.failed);
    \u0275\u0275advance();
    \u0275\u0275property("user", \u0275\u0275pureFunction2(7, _c3, item_r3.name, item_r3.email));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.name || item_r3.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r3.asset_name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r3.failed ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r3.failed ? 8 : 9);
  }
}
function NewDeskFlowSuccessComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h3", 13)(2, "icon", 12);
    \u0275\u0275text(3, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 14);
    \u0275\u0275repeaterCreate(8, NewDeskFlowSuccessComponent_Conditional_7_For_9_Template, 10, 10, "div", 15, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "BOOKINGS.DESK_GROUP_BOOKINGS"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.group_booking_items());
  }
}
function NewDeskFlowSuccessComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "BOOKINGS.ASSETS_BOOKED", \u0275\u0275pureFunction1(4, _c4, ctx_r0.last_event()?.extension_data?.assets?.length)), " ");
  }
}
function NewDeskFlowSuccessComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "BOOKINGS.SUCCESS_WAIT_APPROVED"), " ");
  }
}
function NewDeskFlowSuccessComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "a", 24);
    \u0275\u0275pipe(2, "sanitize");
    \u0275\u0275element(3, "img", 25);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 26);
    \u0275\u0275pipe(8, "sanitize");
    \u0275\u0275element(9, "img", 27);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "a", 28);
    \u0275\u0275pipe(14, "safe");
    \u0275\u0275elementStart(15, "icon", 12);
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
var NewDeskFlowSuccessComponent = class _NewDeskFlowSuccessComponent {
  constructor() {
    this._org = inject(OrganisationService);
    this._state = inject(BookingFormService);
    this._settings = inject(SettingsService);
    this._level_pipe = inject(LevelPipe);
    this._building_pipe = inject(BuildingPipe);
    this.level = signal(
      new BuildingLevel(),
      ...ngDevMode ? [{ debugName: "level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.building = signal(
      new Building(),
      ...ngDevMode ? [{ debugName: "building" }] : (
        /* istanbul ignore next */
        []
      )
    );
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
    this.group_bookings = signal(
      [],
      ...ngDevMode ? [{ debugName: "group_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group_failures = signal(
      [],
      ...ngDevMode ? [{ debugName: "group_failures" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._desk_names = signal(
      /* @__PURE__ */ new Map(),
      ...ngDevMode ? [{ debugName: "_desk_names" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.location = computed(
      () => {
        return `${this.building()?.display_name || this.level()?.name}, ${this.level()?.display_name || this.level()?.name}`;
      },
      ...ngDevMode ? [{ debugName: "location" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.last_event = signal(
      null,
      ...ngDevMode ? [{ debugName: "last_event" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group_members = computed(
      () => {
        return unique(this.last_event()?.extension_data?.group_members || [], "email");
      },
      ...ngDevMode ? [{ debugName: "group_members" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_group = computed(
      () => this.group_members().length > 1,
      ...ngDevMode ? [{ debugName: "is_group" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group_size = computed(
      () => {
        const members = this.group_members();
        return members?.length || this.group_bookings().length || 1;
      },
      ...ngDevMode ? [{ debugName: "group_size" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group_booking_items = computed(
      () => {
        const desk_names = this._desk_names();
        const items = this.group_bookings().map((booking) => ({
          id: booking.id,
          name: booking.user_name || booking.user_email,
          email: booking.user_email,
          asset_name: desk_names.get(booking.asset_id) || booking.asset_id,
          failed: false
        }));
        const booked_emails = new Set(items.map((_) => _.email));
        const failed = this.group_failures().filter((_) => !booked_emails.has(_.email)).map((failure) => ({
          id: `failed-${failure.email}`,
          name: failure.name || failure.email,
          email: failure.email,
          asset_name: failure.asset_id ? desk_names.get(failure.asset_id) || failure.asset_id : "No desk assigned",
          failed: true,
          error: failure.error
        }));
        return [...items, ...failed];
      },
      ...ngDevMode ? [{ debugName: "group_booking_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.booked_for_name = computed(
      () => {
        return this.last_event()?.user_name || this.last_event()?.user_email || "";
      },
      ...ngDevMode ? [{ debugName: "booked_for_name" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_booked_for = computed(
      () => {
        if (!this.booked_for_name())
          return false;
        const current_email = currentUser()?.email?.toLowerCase() || "";
        const booked_for_email = this.last_event()?.user_email?.toLowerCase() || "";
        if (!booked_for_email || !current_email)
          return false;
        return booked_for_email !== current_email;
      },
      ...ngDevMode ? [{ debugName: "show_booked_for" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.formatted_recurrence = computed(
      () => {
        const event = this.last_event();
        const recurrence = fromBookingRecurrence(event);
        if (!recurrence.type || recurrence.type == "none")
          return "";
        return formatRecurrence(recurrence);
      },
      ...ngDevMode ? [{ debugName: "formatted_recurrence" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.viewCalendarLinks = () => this._state.openBookingLinkModal();
  }
  get show_links() {
    return this._settings.get("app.desks.show_calendar_links");
  }
  get time_format() {
    return this._settings.time_format;
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    this.last_event.set(this._state.last_success);
    const event = __spreadProps(__spreadValues({}, this.last_event()), {
      location: `${this.location()}, ${this.last_event()?.asset_name || ""}`
    });
    this.outlook_link.set(generateMicrosoftCalendarLink(event));
    this.google_link.set(generateGoogleCalendarLink(event));
    this.ical_link.set(generateCalendarFileLink(event));
    this.level.set(this._level_pipe.transform(event.zones));
    this.building.set(this._building_pipe.transform(event.zones));
    this._group_bookings_timer = setTimeout(async () => {
      if (this.is_group())
        await this._loadGroupBookings();
    }, 100);
  }
  ngOnDestroy() {
    clearTimeout(this._group_bookings_timer);
  }
  async _loadGroupBookings() {
    const stored_ids = localStorage.getItem("PLACEOS.last_group_booking_ids");
    const booking_ids = stored_ids ? JSON.parse(stored_ids) : [];
    const stored_errors = localStorage.getItem("PLACEOS.last_group_booking_errors");
    this.group_failures.set(stored_errors ? JSON.parse(stored_errors) : []);
    if (booking_ids.length <= 1)
      return;
    try {
      const [bookings, desks] = await Promise.all([
        Promise.all(booking_ids.map((id) => showBooking(id))),
        this._state.listResources()
      ]);
      this._desk_names.set(new Map(desks.map((desk) => [desk.id, desk.name || desk.id])));
      this.group_bookings.set(bookings.filter((_) => _.booking_type !== "group"));
    } catch (e) {
      console.error("Failed to load group bookings", e);
    }
  }
  static {
    this.\u0275fac = function NewDeskFlowSuccessComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewDeskFlowSuccessComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDeskFlowSuccessComponent, selectors: [["desk-flow-success"]], features: [\u0275\u0275ProvidersFeature([LevelPipe, BuildingPipe])], decls: 15, vars: 13, consts: [[1, "bg-base-100", "absolute", "inset-0", "z-50", "flex", "flex-col", "overflow-auto"], [1, "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "text-center", "text-2xl", "font-medium"], ["src", "assets/icons/success.svg"], [1, "max-w-160", "text-center"], [1, "bg-base-200", "flex", "items-center", "space-x-2", "rounded-lg", "px-4", "py-2"], [1, "text-sm"], [1, "border-base-300", "bg-base-100", "mt-4", "w-full", "max-w-lg", "rounded-lg", "border", "p-4"], ["assets", ""], [1, "relative", "flex", "flex-col", "items-center", "space-y-4", "p-4"], [1, "border-base-200", "bg-base-100", "sticky", "bottom-0", "mt-4", "flex", "w-full", "items-center", "justify-center", "border-t", "p-2"], ["btn", "", "name", "desk-confirm-continue", "matRipple", "", 1, "mx-auto", "w-full", "max-w-lg", 3, "routerLink"], [1, "text-xl"], [1, "mb-3", "flex", "items-center", "space-x-2", "font-medium"], [1, "flex", "flex-col", "space-y-2"], [1, "bg-base-200/50", "border-base-200", "flex", "items-center", "space-x-3", "rounded", "border", "p-2", 3, "border-error"], [1, "bg-base-200/50", "border-base-200", "flex", "items-center", "space-x-3", "rounded", "border", "p-2"], [3, "user"], [1, "flex", "flex-1", "flex-col"], [1, "font-medium"], [1, "text-sm", "opacity-60"], [1, "text-error", "text-xs"], [1, "text-error", "text-2xl"], [1, "text-success", "text-2xl"], ["btn", "", "matRipple", "", "name", "desk-outlook-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["btn", "", "matRipple", "", "name", "desk-google-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "href"], ["src", "assets/icons/gcal.svg", 1, "w-6"], ["btn", "", "matRipple", "", "name", "desk-ical-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "href"]], template: function NewDeskFlowSuccessComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "main", 1);
        \u0275\u0275conditionalCreate(2, NewDeskFlowSuccessComponent_Conditional_2_Template, 3, 6, "h2", 2);
        \u0275\u0275element(3, "img", 3);
        \u0275\u0275conditionalCreate(4, NewDeskFlowSuccessComponent_Conditional_4_Template, 7, 16, "p", 4);
        \u0275\u0275conditionalCreate(5, NewDeskFlowSuccessComponent_Conditional_5_Template, 5, 1, "div", 5);
        \u0275\u0275conditionalCreate(6, NewDeskFlowSuccessComponent_Conditional_6_Template, 2, 1, "p", 6);
        \u0275\u0275conditionalCreate(7, NewDeskFlowSuccessComponent_Conditional_7_Template, 10, 3, "div", 7);
        \u0275\u0275conditionalCreate(8, NewDeskFlowSuccessComponent_Conditional_8_Template, 3, 6, "p", 8);
        \u0275\u0275conditionalCreate(9, NewDeskFlowSuccessComponent_Conditional_9_Template, 3, 3, "p");
        \u0275\u0275conditionalCreate(10, NewDeskFlowSuccessComponent_Conditional_10_Template, 20, 21, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "footer", 10)(12, "a", 11);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.is_group() ? 2 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.last_event() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.last_event()?.recurrence_type && ctx.last_event()?.recurrence_type !== "none" ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_booked_for() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.is_group() && ctx.group_booking_items().length > 0 ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.last_event()?.extension_data?.assets?.length ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(true ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_links ? 10 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c04));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 10, "APP.WORKPLACE.BOOKING_FINISHED"), " ");
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      MatRippleModule,
      MatRipple,
      RouterModule,
      RouterLink,
      UserAvatarComponent,
      DatePipe,
      TranslatePipe,
      SanitizePipe,
      SafePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewDeskFlowSuccessComponent, [{
    type: Component,
    args: [{ selector: "desk-flow-success", template: `
        <div
            class="bg-base-100 absolute inset-0 z-50 flex flex-col overflow-auto"
        >
            <main
                class="flex flex-1 flex-col items-center justify-center space-y-2 p-8"
            >
                @if (!is_group()) {
                    <h2 class="text-center text-2xl font-medium">
                        {{
                            'BOOKINGS.ITEM_BOOKED'
                                | translate
                                    : {
                                          name:
                                              last_event()?.asset_name ||
                                              last_event()?.asset_id,
                                      }
                        }}
                    </h2>
                }
                <img src="assets/icons/success.svg" />
                @if (last_event()) {
                    <p class="max-w-160 text-center">
                        @let details =
                            {
                                date:
                                    last_event()?.date || 0
                                    | date: 'mediumDate',
                                time:
                                    (last_event()?.date || 0
                                        | date: time_format) +
                                    ' - ' +
                                    (last_event().date +
                                        last_event().duration * 60 * 1000
                                        | date: time_format),
                                size: group_size(),
                                location: location(),
                            };
                        @if (is_group()) {
                            @if (last_event()?.all_day) {
                                {{
                                    'BOOKINGS.DESK_SUCCESS_GROUP_ALLDAY'
                                        | translate: details
                                }}
                            } @else {
                                {{
                                    'BOOKINGS.DESK_SUCCESS_GROUP'
                                        | translate: details
                                }}
                            }
                        } @else {
                            @if (last_event()?.all_day) {
                                {{
                                    'BOOKINGS.DESK_SUCCESS_LONE_ALLDAY'
                                        | translate: details
                                }}
                            } @else {
                                {{
                                    'BOOKINGS.DESK_SUCCESS_LONE'
                                        | translate: details
                                }}
                            }
                        }
                    </p>
                }
                @if (
                    last_event()?.recurrence_type &&
                    last_event()?.recurrence_type !== 'none'
                ) {
                    <div
                        class="bg-base-200 flex items-center space-x-2 rounded-lg px-4 py-2"
                    >
                        <icon class="text-xl">update</icon>
                        <div class="text-sm">{{ formatted_recurrence() }}</div>
                    </div>
                }
                @if (show_booked_for()) {
                    <p class="text-sm">Booked for {{ booked_for_name() }}</p>
                }
                @if (is_group() && group_booking_items().length > 0) {
                    <div
                        class="border-base-300 bg-base-100 mt-4 w-full max-w-lg rounded-lg border p-4"
                    >
                        <h3
                            class="mb-3 flex items-center space-x-2 font-medium"
                        >
                            <icon class="text-xl">group</icon>
                            <span>{{
                                'BOOKINGS.DESK_GROUP_BOOKINGS' | translate
                            }}</span>
                        </h3>
                        <div class="flex flex-col space-y-2">
                            @for (
                                item of group_booking_items();
                                track item.id
                            ) {
                                <div
                                    class="bg-base-200/50 border-base-200 flex items-center space-x-3 rounded border p-2"
                                    [class.border-error]="item.failed"
                                >
                                    <a-user-avatar
                                        [user]="
                                            $any({
                                                name: item.name,
                                                email: item.email,
                                            })
                                        "
                                    />
                                    <div class="flex flex-1 flex-col">
                                        <span class="font-medium">{{
                                            item.name || item.email
                                        }}</span>
                                        <span class="text-sm opacity-60">
                                            {{ item.asset_name }}
                                        </span>
                                        @if (item.failed) {
                                            <span class="text-error text-xs">
                                                {{ item.error }}
                                            </span>
                                        }
                                    </div>
                                    @if (item.failed) {
                                        <icon class="text-error text-2xl">
                                            error
                                        </icon>
                                    } @else {
                                        <icon class="text-success text-2xl">
                                            check_circle
                                        </icon>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                }
                @if (last_event()?.extension_data?.assets?.length) {
                    <p assets>
                        {{
                            'BOOKINGS.ASSETS_BOOKED'
                                | translate
                                    : {
                                          count: last_event()?.extension_data
                                              ?.assets?.length,
                                      }
                        }}
                    </p>
                }
                @if (true) {
                    <p>
                        {{ 'BOOKINGS.SUCCESS_WAIT_APPROVED' | translate }}
                    </p>
                }
                @if (show_links) {
                    <div
                        class="relative flex flex-col items-center space-y-4 p-4"
                    >
                        <a
                            btn
                            matRipple
                            name="desk-outlook-link"
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
                            name="desk-google-link"
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
                            name="desk-ical-link"
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
                    name="desk-confirm-continue"
                    matRipple
                    class="mx-auto w-full max-w-lg"
                    [routerLink]="['/']"
                >
                    {{ 'APP.WORKPLACE.BOOKING_FINISHED' | translate }}
                </a>
            </footer>
        </div>
    `, providers: [LevelPipe, BuildingPipe], imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      RouterModule,
      SanitizePipe,
      SafePipe,
      UserAvatarComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskFlowSuccessComponent, { className: "NewDeskFlowSuccessComponent", filePath: "apps/workplace/src/app/book/desk-flow/desk-flow-success.component.ts", lineNumber: 281 });
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
    const param = this._route.snapshot.paramMap;
    if (param.has("step"))
      this._state.setView(param.get("step"));
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
    const resources = await this._state.listAvailableResources();
    const bookable_desks = resources.map((_) => _.map_id || _.id).filter((i) => i);
    const nearby = await findNearbyFeature(level.map_id, space?.map_id, bookable_desks);
    if (!nearby)
      return notifyError(i18n("APP.WORKPLACE.MEETING_DESK_ERROR"));
    const resource = resources.find((_) => _.map_id === nearby);
    this._state.model.update((m) => __spreadProps(__spreadValues({}, m), {
      date: set(event_date, { hours: 8, minutes: 0 }).valueOf(),
      duration: 10 * 60,
      all_day: true,
      booking_type: "desk",
      asset_id: nearby,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskFlowComponent, { className: "NewDeskFlowComponent", filePath: "apps/workplace/src/app/book/desk-flow.component.ts", lineNumber: 43 });
})();
export {
  NewDeskFlowComponent
};
//# sourceMappingURL=desk-flow.component-IUDVPY3X.js.map
