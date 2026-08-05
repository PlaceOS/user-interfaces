import {
  FAV_PARKING_KEY,
  ParkingSelectModalComponent
} from "./chunk-YOJT5LA6.js";
import "./chunk-BAQ42FUR.js";
import {
  ParkingService
} from "./chunk-RAKDRS4O.js";
import {
  BookingFormService
} from "./chunk-JX3LZLVN.js";
import {
  HostSelectFieldComponent
} from "./chunk-CVZZBM37.js";
import {
  MatBottomSheet,
  MatBottomSheetRef
} from "./chunk-C74JPN7M.js";
import "./chunk-J22MDNK3.js";
import "./chunk-YLSVKGRD.js";
import {
  DurationFieldComponent
} from "./chunk-36X5ZAYB.js";
import {
  DateFieldComponent
} from "./chunk-Q3DS54GC.js";
import "./chunk-RKGM2L4F.js";
import "./chunk-YYM4NA22.js";
import "./chunk-L72LXZJ6.js";
import "./chunk-PKJVKN42.js";
import "./chunk-U2GCCJEG.js";
import "./chunk-7JM5RN57.js";
import "./chunk-CUL63NNE.js";
import {
  generateCalendarFileLink,
  generateGoogleCalendarLink,
  generateMicrosoftCalendarLink
} from "./chunk-6ZKV2FW4.js";
import "./chunk-BYZ2E7T2.js";
import "./chunk-UKJYLCYH.js";
import {
  TimeFieldComponent
} from "./chunk-NFZ6TFST.js";
import {
  AuthenticatedImageDirective,
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-Y42OYCIX.js";
import "./chunk-2S2UDS6N.js";
import "./chunk-5HOTIMGX.js";
import "./chunk-XGRJVGH2.js";
import {
  ANIMATION_SHOW_CONTRACT_EXPAND,
  AsyncHandler,
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
  MatSelect,
  MatSelectModule,
  OrganisationService,
  SafePipe,
  SanitizePipe,
  SettingsService,
  currentUser
} from "./chunk-TKBUED64.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DatePipe,
  FormsModule,
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
  addDays,
  endOfDay,
  forwardRef,
  getInvalidSignalFields,
  inject,
  input,
  model,
  notifyError,
  roundToNearestMinutes,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
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
  ɵɵtextInterpolate1
} from "./chunk-CKWNTDV3.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/bookings/src/lib/parking-space-list-field.component.ts
function ParkingSpaceListFieldComponent_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
  }
  if (rf & 2) {
    const space_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", space_r2.images[0]);
  }
}
function ParkingSpaceListFieldComponent_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 9);
  }
}
function ParkingSpaceListFieldComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 7);
    \u0275\u0275conditionalCreate(2, ParkingSpaceListFieldComponent_For_2_Conditional_2_Template, 1, 1, "img", 8)(3, ParkingSpaceListFieldComponent_For_2_Conditional_3_Template, 1, 0, "img", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10)(5, "div", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "icon", 13);
    \u0275\u0275text(9, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 14)(13, "button", 15);
    \u0275\u0275listener("click", function ParkingSpaceListFieldComponent_For_2_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changeResources());
    });
    \u0275\u0275elementStart(14, "div", 16)(15, "icon", 4);
    \u0275\u0275text(16, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "button", 17);
    \u0275\u0275listener("click", function ParkingSpaceListFieldComponent_For_2_Template_button_click_20_listener() {
      const space_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeResource(space_r2));
    });
    \u0275\u0275elementStart(21, "div", 16)(22, "icon", 4);
    \u0275\u0275text(23, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(27, "button", 18);
    \u0275\u0275listener("click", function ParkingSpaceListFieldComponent_For_2_Template_button_click_27_listener() {
      const space_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFavourite(space_r2));
    });
    \u0275\u0275elementStart(28, "icon", 19);
    \u0275\u0275text(29, "favorite");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const space_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(space_r2.images?.length ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", space_r2.name || "Meeting Resource", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", space_r2.location || space_r2.level?.display_name || space_r2.level?.name || space_r2.zone?.display_name || space_r2.zone?.name, " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 8, "COMMON.CHANGE"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 10, "COMMON.REMOVE"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-info", ctx_r2.favorites().includes(space_r2?.id));
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r2.favorites().includes(space_r2?.id) ? "material-symbols-rounded" : "material-symbols-outlined");
  }
}
var EMPTY_FAVS = [];
var ParkingSpaceListFieldComponent = class _ParkingSpaceListFieldComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this.disable_date = input(
      false,
      ...ngDevMode ? [{ debugName: "disable_date" }] : (
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
    this.spaces = signal(
      [],
      ...ngDevMode ? [{ debugName: "spaces" }] : (
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
    this.favorites = this._settings.signal(FAV_PARKING_KEY, EMPTY_FAVS, true);
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (s) => this.disabled.set(s);
  }
  /** Add or edit selected spaces */
  changeResources() {
    const ref = this._dialog.open(ParkingSelectModalComponent, {
      data: {
        spaces: this.spaces(),
        options: {
          capacity: this.room_size(),
          disable_date: this.disable_date()
        }
      }
    });
    ref.afterClosed().subscribe((spaces) => {
      if (!spaces)
        return;
      this.setValue(spaces);
    });
  }
  /** Remove the selected space from the list */
  removeResource(space) {
    this.setValue(this.spaces().filter((_) => _.id !== space.id));
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.spaces.set(new_value || []);
    if (this._onChange)
      this._onChange(this.spaces());
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.spaces.set(value || []);
  }
  toggleFavourite(space) {
    const fav_list = this.favorites() || EMPTY_FAVS;
    const new_state = !fav_list.includes(space.id);
    if (new_state) {
      this._settings.saveUserSetting(FAV_PARKING_KEY, [
        ...fav_list,
        space.id
      ]);
    } else {
      this._settings.saveUserSetting(FAV_PARKING_KEY, fav_list.filter((_) => _ !== space.id));
    }
  }
  static {
    this.\u0275fac = function ParkingSpaceListFieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingSpaceListFieldComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceListFieldComponent, selectors: [["parking-space-list-field"]], inputs: { disable_date: [1, "disable_date"] }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _ParkingSpaceListFieldComponent),
        multi: true
      }
    ])], decls: 12, vars: 3, consts: [["list", "", 1, "space-y-2"], ["space", "", 1, "border-base-200", "relative", "flex", "w-full", "items-center", "rounded-lg", "border", "p-2", "shadow-sm"], ["btn", "", "matRipple", "", "add-space", "", "type", "button", 1, "inverse", "mt-2", "w-full", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "text-2xl"], [1, "mb-2", "flex", "flex-wrap", "items-center", "sm:space-x-2"], [1, "min-w-[256px]", "flex-1", "space-y-2"], [1, "bg-base-200", "mr-4", "flex", "h-24", "w-24", "items-center", "justify-center", "overflow-hidden", "rounded-xl"], ["auth", "", 1, "h-full", "object-cover", 3, "source"], ["src", "assets/icons/car-placeholder.svg", 1, "m-auto"], [1, "space-y-2", "pb-4"], [1, "font-medium"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "text-blue-500"], [1, "absolute", "right-0", "bottom-0", "flex", "items-center", "justify-end", "text-xs"], ["btn", "", "matRipple", "", "edit-space", "", "type", "button", 1, "clear", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", "remove-space", "", "type", "button", 1, "clear", 3, "click"], ["icon", "", "matRipple", "", "fav", "", "type", "button", 1, "absolute", "top-1", "right-1", 3, "click"], [3, "className"]], template: function ParkingSpaceListFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275repeaterCreate(1, ParkingSpaceListFieldComponent_For_2_Template, 30, 12, "div", 1, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 2);
        \u0275\u0275listener("click", function ParkingSpaceListFieldComponent_Template_button_click_3_listener() {
          return ctx.changeResources();
        });
        \u0275\u0275elementStart(4, "div", 3)(5, "icon", 4);
        \u0275\u0275text(6, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span");
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 5);
        \u0275\u0275element(11, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.spaces());
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 1, "BOOKINGS.PARKING_ADD"));
      }
    }, dependencies: [
      IconComponent,
      MatRippleModule,
      MatRipple,
      AuthenticatedImageDirective,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingSpaceListFieldComponent, [{
    type: Component,
    args: [{ selector: `parking-space-list-field`, template: `
        <div list class="space-y-2">
            @for (space of spaces(); track space) {
                <div
                    space
                    class="border-base-200 relative flex w-full items-center rounded-lg border p-2 shadow-sm"
                >
                    <div
                        class="bg-base-200 mr-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-xl"
                    >
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
                    <div class="space-y-2 pb-4">
                        <div class="font-medium">
                            {{ space.name || 'Meeting Resource' }}
                        </div>
                        <div class="flex items-center space-x-2 text-sm">
                            <icon class="text-blue-500">place</icon>
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
                        <div
                            class="absolute right-0 bottom-0 flex items-center justify-end text-xs"
                        >
                            <button
                                btn
                                matRipple
                                edit-space
                                type="button"
                                class="clear"
                                (click)="changeResources()"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">edit</icon>
                                    <div>{{ 'COMMON.CHANGE' | translate }}</div>
                                </div>
                            </button>
                            <button
                                btn
                                matRipple
                                remove-space
                                type="button"
                                class="clear"
                                (click)="removeResource(space)"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">close</icon>
                                    <div>{{ 'COMMON.REMOVE' | translate }}</div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <button
                        icon
                        matRipple
                        fav
                        type="button"
                        class="absolute top-1 right-1"
                        [class.text-info]="favorites().includes(space?.id)"
                        (click)="toggleFavourite(space)"
                    >
                        <icon
                            [className]="
                                favorites().includes(space?.id)
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
            add-space
            type="button"
            class="inverse mt-2 w-full"
            (click)="changeResources()"
        >
            <div class="flex items-center justify-center space-x-2">
                <icon class="text-2xl">search</icon>
                <span>{{ 'BOOKINGS.PARKING_ADD' | translate }}</span>
            </div>
        </button>
        <div class="mb-2 flex flex-wrap items-center sm:space-x-2">
            <div class="min-w-[256px] flex-1 space-y-2"></div>
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ParkingSpaceListFieldComponent),
        multi: true
      }
    ], imports: [
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      AuthenticatedImageDirective
    ] }]
  }], null, { disable_date: [{ type: Input, args: [{ isSignal: true, alias: "disable_date", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceListFieldComponent, { className: "ParkingSpaceListFieldComponent", filePath: "libs/bookings/src/lib/parking-space-list-field.component.ts", lineNumber: 143 });
})();

// apps/workplace/src/app/book/parking-flow/parking-flow-confirm.component.ts
function NewParkingFlowConfirmComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 3);
  }
}
function NewParkingFlowConfirmComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function NewParkingFlowConfirmComponent_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismiss());
    });
    \u0275\u0275elementStart(1, "icon", 16);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function NewParkingFlowConfirmComponent_Conditional_27_For_18_Template(rf, ctx) {
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
function NewParkingFlowConfirmComponent_Conditional_27_Template(rf, ctx) {
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
    \u0275\u0275repeaterCreate(17, NewParkingFlowConfirmComponent_Conditional_27_For_18_Template, 5, 1, "div", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.booking_asset?.name || ctx_r1.booking_asset?.id || "", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 3, "RESOURCE.PARKING_SPACE"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.location);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.booking_asset.features);
  }
}
function NewParkingFlowConfirmComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function NewParkingFlowConfirmComponent_Conditional_29_Template_button_click_0_listener() {
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
var NewParkingFlowConfirmComponent = class _NewParkingFlowConfirmComponent extends AsyncHandler {
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
      const r = await this._state.postForm().catch((_) => {
        notifyError(`Unable to complete booking. ${_}`);
      });
      if (!r)
        return;
      this.dismiss(true);
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
    const building = this._org.buildings.find((b) => b.id === this.booking_asset?.zone?.parent_id);
    const level = this._org.levels.find((l) => l.id === this.booking_asset?.zone?.id);
    return `${level?.display_name || level?.name}${building ? "," : ""} ${building?.address || building?.display_name || building?.name || ""}`;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NewParkingFlowConfirmComponent_BaseFactory;
      return function NewParkingFlowConfirmComponent_Factory(__ngFactoryType__) {
        return (\u0275NewParkingFlowConfirmComponent_BaseFactory || (\u0275NewParkingFlowConfirmComponent_BaseFactory = \u0275\u0275getInheritedFactory(_NewParkingFlowConfirmComponent)))(__ngFactoryType__ || _NewParkingFlowConfirmComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewParkingFlowConfirmComponent, selectors: [["parking-flow-confirm"]], inputs: { show_close: [1, "show_close"] }, outputs: { show_close: "show_closeChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 30, vars: 21, consts: [[1, "bg-base-200", "sticky", "top-2", "z-10", "mx-auto", "mb-4", "flex", "h-14", "w-full", "max-w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-sm", "border-none", "px-4", "py-2"], [1, "m-0", "flex-1", "text-xl", "font-medium", "capitalize"], [1, ""], ["diameter", "32"], ["icon", "", "name", "close-locker-confirm", "matRipple", ""], ["period", "", 1, "flex", "space-x-1", "px-2", "py-4", "text-base"], [1, "text-success", "text-2xl"], ["details", "", 1, "space-y-2", "text-base"], [1, "text-xl"], [1, "flex", "items-center", "space-x-2"], ["date", ""], ["time", ""], ["resource", "", 1, "flex", "space-x-1", "border-t", "px-2", "py-4", "text-base"], [1, "border-base-200", "mt-4", "w-full", "border-t", "p-2"], ["confirm", "", "btn", "", "matRipple", "", 1, "w-full"], ["icon", "", "name", "close-locker-confirm", "matRipple", "", 3, "click"], [1, "text-2xl"], ["features", "", 1, "flex", "items-center", "space-x-2"], ["confirm", "", "btn", "", "matRipple", "", 1, "w-full", 3, "click"]], template: function NewParkingFlowConfirmComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2);
        \u0275\u0275conditionalCreate(5, NewParkingFlowConfirmComponent_Conditional_5_Template, 1, 0, "mat-spinner", 3);
        \u0275\u0275conditionalCreate(6, NewParkingFlowConfirmComponent_Conditional_6_Template, 3, 0, "button", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "section", 5)(8, "icon", 6);
        \u0275\u0275text(9, "done");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 7)(11, "h3", 8);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 9)(14, "icon");
        \u0275\u0275text(15, "calendar_today");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 10);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 9)(20, "icon");
        \u0275\u0275text(21, "schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 11);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275pipe(25, "date");
        \u0275\u0275pipe(26, "date");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(27, NewParkingFlowConfirmComponent_Conditional_27_Template, 19, 5, "section", 12);
        \u0275\u0275elementStart(28, "footer", 13);
        \u0275\u0275conditionalCreate(29, NewParkingFlowConfirmComponent_Conditional_29_Template, 3, 3, "button", 14);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, "APP.WORKPLACE.PARKING_CONFIRM_TITLE"), " ");
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
      MatRippleModule,
      MatRipple,
      IconComponent,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      DatePipe,
      TranslatePipe
    ], styles: ["\nsection[_ngcontent-%COMP%]    > icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-top: 0.3rem;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: medium;\n  margin: 0.5rem 0;\n}\n/*# sourceMappingURL=parking-flow-confirm.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewParkingFlowConfirmComponent, [{
    type: Component,
    args: [{ selector: "parking-flow-confirm", template: `
        <header
            class="bg-base-200 sticky top-2 z-10 mx-auto mb-4 flex h-14 w-full max-w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none px-4 py-2"
        >
            <h2 class="m-0 flex-1 text-xl font-medium capitalize">
                {{ 'APP.WORKPLACE.PARKING_CONFIRM_TITLE' | translate }}
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
        <section period class="flex space-x-1 px-2 py-4 text-base">
            <icon class="text-success text-2xl">done</icon>
            <div details class="space-y-2 text-base">
                <h3 class="text-xl">{{ booking.title || '~Untitled~' }}</h3>
                <div class="flex items-center space-x-2">
                    <icon>calendar_today</icon>
                    <div date>{{ booking.date | date: 'fullDate' }}</div>
                </div>
                <div class="flex items-center space-x-2">
                    <icon>schedule</icon>
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
                        <span>{{ 'RESOURCE.PARKING_SPACE' | translate }}</span>
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
                    confirm
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
      MatRippleModule,
      IconComponent,
      TranslatePipe,
      MatProgressSpinnerModule
    ], styles: ["/* angular:styles/component:css;d8e0e1826953817bc38718c2e6f9d8a20c56c3d3f17bf3ea7d0dcbb90967a675;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/book/parking-flow/parking-flow-confirm.component.ts */\nsection > icon {\n  font-size: 1.5rem;\n  margin-top: 0.3rem;\n}\nh3 {\n  font-size: 1.25rem;\n  font-weight: medium;\n  margin: 0.5rem 0;\n}\n/*# sourceMappingURL=parking-flow-confirm.component.css.map */\n"] }]
  }], null, { show_close: [{ type: Input, args: [{ isSignal: true, alias: "show_close", required: false }] }, { type: Output, args: ["show_closeChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewParkingFlowConfirmComponent, { className: "NewParkingFlowConfirmComponent", filePath: "apps/workplace/src/app/book/parking-flow/parking-flow-confirm.component.ts", lineNumber: 126 });
})();

// apps/workplace/src/app/book/parking-flow/parking-form-details.component.ts
var _c0 = () => ({ standalone: true });
function ParkingFormDetailsComponent_Conditional_0_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r3 = ctx.$implicit;
    \u0275\u0275property("value", bld_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r3.display_name || bld_r3.name, " ");
  }
}
function ParkingFormDetailsComponent_Conditional_0_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 10);
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
function ParkingFormDetailsComponent_Conditional_0_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 16)(2, "label", 17);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a-time-field", 18);
    \u0275\u0275listener("ngModelChange", function ParkingFormDetailsComponent_Conditional_0_Conditional_36_Template_a_time_field_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.model.update((m) => __spreadProps(__spreadValues({}, m), { date: $event })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 19)(9, "label", 20);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "a-duration-field", 21);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 16, "FORM.TIME_START"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.model().date)("ngModelOptions", \u0275\u0275pureFunction0(20, _c0))("use_24hr", ctx_r1.use_24hr)("range", ctx_r1.bookable_hours)("min_duration", ctx_r1.effective_min_duration)("disabled", ctx_r1.form().date().disabled())("timezone", ctx_r1.timezone);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 18, "FORM.TIME_END"));
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r1.form().duration)("time", ctx_r1.model().date)("max", ctx_r1.max_duration)("custom_options", ctx_r1.custom_duration_options)("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone)("end_time", ctx_r1.bookable_hours?.end);
    \u0275\u0275control();
  }
}
function ParkingFormDetailsComponent_Conditional_0_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "label", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "host-select-field", 23);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "FORM.HOST"));
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r1.form().user);
    \u0275\u0275control();
  }
}
function ParkingFormDetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 0)(2, "div", 1)(3, "label", 2);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-form-field", 3)(9, "mat-select", 4);
    \u0275\u0275listener("ngModelChange", function ParkingFormDetailsComponent_Conditional_0_Template_mat_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setBuilding($event));
    });
    \u0275\u0275repeaterCreate(10, ParkingFormDetailsComponent_Conditional_0_For_11_Template, 2, 2, "mat-option", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(12, "mat-error");
    \u0275\u0275text(13, "Building is required");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "div", 0)(15, "div", 1)(16, "label", 2);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "mat-form-field", 3);
    \u0275\u0275element(22, "input", 6);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(23, "mat-error");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 7)(27, "label", 8);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "a-date-field", 9);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(35, ParkingFormDetailsComponent_Conditional_0_Conditional_35_Template, 3, 4, "mat-checkbox", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(36, ParkingFormDetailsComponent_Conditional_0_Conditional_36_Template, 15, 21, "div", 11);
    \u0275\u0275conditionalCreate(37, ParkingFormDetailsComponent_Conditional_0_Conditional_37_Template, 7, 4, "div", 12);
    \u0275\u0275elementStart(38, "div", 13)(39, "label", 14);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "mat-form-field", 3);
    \u0275\u0275element(43, "input", 15);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(45, "mat-error");
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 18, "RESOURCE.BUILDING"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.building())("ngModelOptions", \u0275\u0275pureFunction0(34, _c0));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.building_list());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 20, "FORM.TITLE"));
    \u0275\u0275advance(5);
    \u0275\u0275property("formField", ctx_r1.form().title);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 22, "FORM.TITLE_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 24, "FORM.DATE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r1.form().date)("to", ctx_r1.end_date)("timezone", ctx_r1.timezone);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 26, "FORM.DATE_REQUIRED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.allow_all_day ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.model().all_day ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_book_for_others ? 37 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 28, "BOOKINGS.PARKING_PLATE_NUMBER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form().plate_number)("placeholder", \u0275\u0275pipeBind1(44, 30, "BOOKINGS.PARKING_PLATE_NUMBER_PLACEHOLDER"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(47, 32, "BOOKINGS.PARKING_PLATE_NUMBER_REQUIRED"), " ");
  }
}
var ParkingFormDetailsComponent = class _ParkingFormDetailsComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(BookingFormService);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.form = input(
      void 0,
      ...ngDevMode ? [{ debugName: "form" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.model = this._state.model;
    this.building = this._org.active_building;
    this.building_list = this._org.building_list;
    this.setBuilding = (bld) => this._org.building = bld;
  }
  get end_date() {
    return endOfDay(addDays(Date.now(), this._settings.get("app.parking.available_period") || 7)).valueOf();
  }
  get max_duration() {
    return this._settings.get("app.parking.max_duration") || this._settings.get("app.bookings.max_duration") || 480;
  }
  get allow_all_day() {
    return (this._settings.get("app.parking.allow_all_day") || this._settings.get("app.bookings.allow_all_day")) ?? true;
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  get can_book_for_others() {
    return this._settings.get("app.bookings.can_book_for_others") || this._settings.get("app.parking.can_book_for_others");
  }
  get timezone() {
    return this._settings.get("app.bookings.use_building_timezone") || this._settings.get("app.parking.use_building_timezone") ? this._org.building.timezone : "";
  }
  get bookable_hours() {
    return this._settings.get("app.parking.bookable_hours") || this._settings.get("app.bookings.bookable_hours");
  }
  get min_duration() {
    return this._settings.get("app.parking.min_duration") || this._settings.get("app.bookings.min_duration") || 30;
  }
  get custom_duration_options() {
    return this._settings.get("app.parking.custom_duration_options") || this._settings.get("app.bookings.custom_duration_options") || [];
  }
  get effective_min_duration() {
    return Math.min(this.min_duration, ...this.custom_duration_options);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ParkingFormDetailsComponent_BaseFactory;
      return function ParkingFormDetailsComponent_Factory(__ngFactoryType__) {
        return (\u0275ParkingFormDetailsComponent_BaseFactory || (\u0275ParkingFormDetailsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ParkingFormDetailsComponent)))(__ngFactoryType__ || _ParkingFormDetailsComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingFormDetailsComponent, selectors: [["parking-form-details"]], inputs: { form: [1, "form"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[1, "flex", "flex-wrap", "items-center", "sm:space-x-2"], [1, "min-w-[256px]", "flex-1"], ["for", "title"], ["appearance", "outline", 1, "w-full"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], ["matInput", "", "placeholder", "e.g. Team Meeting", 3, "formField"], [1, "relative", "min-w-[256px]", "flex-1"], ["for", "date"], [3, "formField", "to", "timezone"], [1, "absolute", "-top-2", "right-0", 3, "formField"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "w-full", "flex-col"], [1, "flex", "flex-col"], ["for", "plate-number"], ["matInput", "", 3, "formField", "placeholder"], [1, "w-1/3", "flex-1"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr", "range", "min_duration", "disabled", "timezone"], [1, "relative", "w-1/3", "flex-1"], ["for", "end-time"], [3, "formField", "time", "max", "custom_options", "use_24hr", "timezone", "end_time"], ["for", "host"], [3, "formField"]], template: function ParkingFormDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ParkingFormDetailsComponent_Conditional_0_Template, 48, 35, "div");
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
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatCheckboxModule,
      MatCheckbox,
      HostSelectFieldComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingFormDetailsComponent, [{
    type: Component,
    args: [{ selector: "parking-form-details", template: `
        @if (form()) {
            <div>
                <div class="flex flex-wrap items-center sm:space-x-2">
                    <div class="min-w-[256px] flex-1">
                        <label for="title">
                            {{ 'RESOURCE.BUILDING' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                [ngModel]="building()"
                                (ngModelChange)="setBuilding($event)"
                                [ngModelOptions]="{ standalone: true }"
                            >
                                @for (bld of building_list(); track bld) {
                                    <mat-option [value]="bld">
                                        {{ bld.display_name || bld.name }}
                                    </mat-option>
                                }
                            </mat-select>
                            <mat-error>Building is required</mat-error>
                        </mat-form-field>
                    </div>
                </div>
                <div class="flex flex-wrap items-center sm:space-x-2">
                    <div class="min-w-[256px] flex-1">
                        <label for="title">
                            {{ 'FORM.TITLE' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [formField]="form().title"
                                placeholder="e.g. Team Meeting"
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
                            [to]="end_date"
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
                @if (!model().all_day) {
                    <div class="flex items-center space-x-2">
                        <div class="w-1/3 flex-1">
                            <label for="start-time"
                                >{{ 'FORM.TIME_START' | translate
                                }}<span>*</span></label
                            >
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
                                [range]="bookable_hours"
                                [min_duration]="effective_min_duration"
                                [disabled]="form().date().disabled()"
                                [timezone]="timezone"
                            ></a-time-field>
                        </div>
                        <div class="relative w-1/3 flex-1">
                            <label for="end-time">
                                {{ 'FORM.TIME_END' | translate }}<span>*</span>
                            </label>
                            <a-duration-field
                                [formField]="form().duration"
                                [time]="model().date"
                                [max]="max_duration"
                                [custom_options]="custom_duration_options"
                                [use_24hr]="use_24hr"
                                [timezone]="timezone"
                                [end_time]="bookable_hours?.end"
                            >
                            </a-duration-field>
                        </div>
                    </div>
                }
                @if (can_book_for_others) {
                    <div class="flex w-full flex-col">
                        <label for="host">
                            {{ 'FORM.HOST' | translate }}<span>*</span>
                        </label>
                        <host-select-field
                            [formField]="form().user"
                        ></host-select-field>
                    </div>
                }
                <div class="flex flex-col">
                    <label for="plate-number">
                        {{ 'BOOKINGS.PARKING_PLATE_NUMBER' | translate }}
                    </label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            [formField]="form().plate_number"
                            [placeholder]="
                                'BOOKINGS.PARKING_PLATE_NUMBER_PLACEHOLDER'
                                    | translate
                            "
                        />
                        <mat-error>
                            {{
                                'BOOKINGS.PARKING_PLATE_NUMBER_REQUIRED'
                                    | translate
                            }}
                        </mat-error>
                    </mat-form-field>
                </div>
            </div>
        }
    `, imports: [
      CommonModule,
      FormsModule,
      FormField,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatCheckboxModule,
      TranslatePipe,
      HostSelectFieldComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent
    ] }]
  }], null, { form: [{ type: Input, args: [{ isSignal: true, alias: "form", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingFormDetailsComponent, { className: "ParkingFormDetailsComponent", filePath: "apps/workplace/src/app/book/parking-flow/parking-form-details.component.ts", lineNumber: 178 });
})();

// apps/workplace/src/app/book/parking-flow/parking-flow-form.component.ts
var ParkingFlowFormComponent = class _ParkingFlowFormComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(BookingFormService);
    this._settings = inject(SettingsService);
    this._router = inject(Router);
    this._bottom_sheet = inject(MatBottomSheet);
    this._parking = inject(ParkingService);
    this.hide_block = {};
    this.clearForm = () => this._state.resetForm();
    this.viewConfirm = () => {
      const { asset_id, resources, date } = this.model();
      if (resources?.length && !asset_id) {
        this.model.update((m) => __spreadProps(__spreadValues({}, m), { asset_id: resources[0].id }));
      }
      if (!date) {
        this.model.update((m) => __spreadProps(__spreadValues({}, m), {
          date: roundToNearestMinutes(Date.now(), {
            nearestTo: 5,
            roundingMethod: "ceil"
          }).valueOf()
        }));
      }
      if (!this.form().valid())
        return notifyError(`Some fields are invalid. [${getInvalidSignalFields(this.form, this.model).join(", ")}]`);
      this.sheet_ref = this._bottom_sheet.open(NewParkingFlowConfirmComponent);
      this.sheet_ref.instance.show_close.set(true);
      this.sheet_ref.afterDismissed().subscribe((value) => {
        if (value) {
          this._router.navigate(["/book", "parking", "success"]);
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
    this._state.setOptions({ type: "parking" });
    this.model.update((m) => __spreadProps(__spreadValues({}, m), { user: currentUser() }));
    const user = this._parking.user_details();
    if (user?.email && !this.model().plate_number) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        plate_number: this._settings.get("plate_number") || user.plate_number || ""
      }));
    }
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ParkingFlowFormComponent_BaseFactory;
      return function ParkingFlowFormComponent_Factory(__ngFactoryType__) {
        return (\u0275ParkingFlowFormComponent_BaseFactory || (\u0275ParkingFlowFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ParkingFlowFormComponent)))(__ngFactoryType__ || _ParkingFlowFormComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingFlowFormComponent, selectors: [["parking-flow-form"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 39, vars: 21, consts: [[1, "bg-base-200", "h-full", "w-full", "overflow-auto"], [1, "border-base-200", "bg-base-100", "mx-auto", "w-3xl", "max-w-full", "border", "sm:my-4"], [1, "border-base-200", "w-full", "border-b", "p-4", "text-2xl", "font-medium", "sm:px-16", "sm:py-4"], [1, "divide-base-200", "space-y-2", "divide-y", "p-0", "sm:px-16", "sm:py-4"], [1, "p-2"], [1, "flex", "items-center", "space-x-2"], [1, "bg-base-200", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full"], [1, "text-xl"], [1, "w-px", "flex-1"], ["icon", "", "type", "button", "matRipple", "", 3, "click"], [1, "overflow-hidden"], [1, "mt-4", 3, "form"], [3, "formField"], [1, "flex", "flex-col", "items-center", "p-2", "sm:flex-row", "sm:space-x-2"], ["btn", "", "type", "button", "matRipple", "", "confirm", "", 1, "mb-2", "w-full", "sm:mb-0", "sm:w-auto", 3, "click"], ["btn", "", "type", "button", "matRipple", "", "clear-form", "", 1, "inverse", "w-full", "sm:w-auto", 3, "click"]], template: function ParkingFlowFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "form", 3)(6, "section", 4)(7, "h3", 5)(8, "div", 6);
        \u0275\u0275text(9, " 1 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "div", 8);
        \u0275\u0275elementStart(14, "button", 9);
        \u0275\u0275listener("click", function ParkingFlowFormComponent_Template_button_click_14_listener() {
          return ctx.hide_block.details = !ctx.hide_block.details;
        });
        \u0275\u0275elementStart(15, "icon");
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 10);
        \u0275\u0275element(18, "parking-form-details", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "section", 4)(20, "h3", 5)(21, "div", 6);
        \u0275\u0275text(22, " 2 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 7);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(26, "div", 8);
        \u0275\u0275elementStart(27, "button", 9);
        \u0275\u0275listener("click", function ParkingFlowFormComponent_Template_button_click_27_listener() {
          return ctx.hide_block.space = !ctx.hide_block.space;
        });
        \u0275\u0275elementStart(28, "icon");
        \u0275\u0275text(29);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 10);
        \u0275\u0275element(31, "parking-space-list-field", 12);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "section", 13)(33, "button", 14);
        \u0275\u0275listener("click", function ParkingFlowFormComponent_Template_button_click_33_listener() {
          return ctx.viewConfirm();
        });
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "button", 15);
        \u0275\u0275listener("click", function ParkingFlowFormComponent_Template_button_click_36_listener() {
          return ctx.clearForm();
        });
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 11, ctx.model().id ? "APP.WORKPLACE.PARKING_EDIT_HEADER" : "APP.WORKPLACE.PARKING_NEW_HEADER"), " ");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 13, "COMMON.DETAILS"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.hide_block.details ? "expand_more" : "expand_less");
        \u0275\u0275advance();
        \u0275\u0275property("@show", ctx.hide_block.details ? "hide" : "show");
        \u0275\u0275advance();
        \u0275\u0275property("form", ctx.form);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 15, "RESOURCE.PARKING_SPACE"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.hide_block.space ? "expand_more" : "expand_less");
        \u0275\u0275advance();
        \u0275\u0275property("@show", ctx.hide_block.space ? "hide" : "show");
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.resources);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 17, "BOOKINGS.PARKING_CONFIRM"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 19, ctx.model().id ? "FORM.RESET" : "FORM.CLEAR"), " ");
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      FormField,
      IconComponent,
      ParkingFormDetailsComponent,
      ParkingSpaceListFieldComponent,
      TranslatePipe
    ], encapsulation: 2, data: { animation: [ANIMATION_SHOW_CONTRACT_EXPAND] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingFlowFormComponent, [{
    type: Component,
    args: [{ selector: "parking-flow-form", template: `
        <div class="bg-base-200 h-full w-full overflow-auto">
            <div
                class="border-base-200 bg-base-100 mx-auto w-3xl max-w-full border sm:my-4"
            >
                <h2
                    class="border-base-200 w-full border-b p-4 text-2xl font-medium sm:px-16 sm:py-4"
                >
                    {{
                        (model().id
                            ? 'APP.WORKPLACE.PARKING_EDIT_HEADER'
                            : 'APP.WORKPLACE.PARKING_NEW_HEADER'
                        ) | translate
                    }}
                </h2>
                <form
                    class="divide-base-200 space-y-2 divide-y p-0 sm:px-16 sm:py-4"
                >
                    <section class="p-2">
                        <h3 class="flex items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                1
                            </div>
                            <div class="text-xl">
                                {{ 'COMMON.DETAILS' | translate }}
                            </div>
                            <div class="w-px flex-1"></div>
                            <button
                                icon
                                type="button"
                                matRipple
                                (click)="
                                    hide_block.details = !hide_block.details
                                "
                            >
                                <icon>{{
                                    hide_block.details
                                        ? 'expand_more'
                                        : 'expand_less'
                                }}</icon>
                            </button>
                        </h3>
                        <div
                            class="overflow-hidden"
                            [@show]="hide_block.details ? 'hide' : 'show'"
                        >
                            <parking-form-details
                                class="mt-4"
                                [form]="form"
                            ></parking-form-details>
                        </div>
                    </section>
                    <section class="p-2">
                        <h3 class="flex items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                2
                            </div>
                            <div class="text-xl">
                                {{ 'RESOURCE.PARKING_SPACE' | translate }}
                            </div>
                            <div class="w-px flex-1"></div>
                            <button
                                icon
                                type="button"
                                matRipple
                                (click)="hide_block.space = !hide_block.space"
                            >
                                <icon>{{
                                    hide_block.space
                                        ? 'expand_more'
                                        : 'expand_less'
                                }}</icon>
                            </button>
                        </h3>
                        <div
                            class="overflow-hidden"
                            [@show]="hide_block.space ? 'hide' : 'show'"
                        >
                            <parking-space-list-field
                                [formField]="form.resources"
                            ></parking-space-list-field>
                        </div>
                    </section>
                    <section
                        class="flex flex-col items-center p-2 sm:flex-row sm:space-x-2"
                    >
                        <button
                            btn
                            type="button"
                            matRipple
                            confirm
                            class="mb-2 w-full sm:mb-0 sm:w-auto"
                            (click)="viewConfirm()"
                        >
                            {{ 'BOOKINGS.PARKING_CONFIRM' | translate }}
                        </button>
                        <button
                            btn
                            type="button"
                            matRipple
                            clear-form
                            class="inverse w-full sm:w-auto"
                            (click)="clearForm()"
                        >
                            {{
                                (model().id ? 'FORM.RESET' : 'FORM.CLEAR')
                                    | translate
                            }}
                        </button>
                    </section>
                </form>
            </div>
        </div>
    `, animations: [ANIMATION_SHOW_CONTRACT_EXPAND], imports: [
      MatRippleModule,
      FormField,
      TranslatePipe,
      IconComponent,
      ParkingFormDetailsComponent,
      ParkingSpaceListFieldComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingFlowFormComponent, { className: "ParkingFlowFormComponent", filePath: "apps/workplace/src/app/book/parking-flow/parking-flow-form.component.ts", lineNumber: 155 });
})();

// apps/workplace/src/app/book/parking-flow/parking-flow-success.component.ts
var _c02 = (a0, a1, a2, a3) => ({ name: a0, place: a1, date: a2, time: a3 });
var _c1 = () => ["/"];
function ParkingFlowSuccessComponent_Conditional_12_Template(rf, ctx) {
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
var ParkingFlowSuccessComponent = class _ParkingFlowSuccessComponent {
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
  get time_format() {
    return this._settings.time_format;
  }
  get show_links() {
    return this._settings.get("app.parking.show_calendar_links");
  }
  ngOnInit() {
    const event = __spreadProps(__spreadValues({}, this.last_event), {
      location: `${this.location}, ${this.last_event.asset_name || ""}`
    });
    this.outlook_link.set(generateMicrosoftCalendarLink(event));
    this.google_link.set(generateGoogleCalendarLink(event));
    this.ical_link.set(generateCalendarFileLink(event));
  }
  static {
    this.\u0275fac = function ParkingFlowSuccessComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingFlowSuccessComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingFlowSuccessComponent, selectors: [["parking-flow-success"]], decls: 17, vars: 27, consts: [[1, "bg-base-100", "absolute", "inset-0", "z-50", "flex", "flex-col", "overflow-auto"], [1, "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "pb-4", "text-2xl", "font-medium"], [1, "max-w-lg", "text-center"], ["src", "assets/icons/parking-success.svg", 1, "h-80"], [1, "relative", "flex", "flex-col", "items-center", "space-y-4", "p-4"], [1, "border-base-200", "bg-base-100", "sticky", "bottom-0", "mt-4", "flex", "w-full", "items-center", "justify-center", "border-t", "p-2"], ["btn", "", "matRipple", "", 1, "w-full", "max-w-lg", 3, "routerLink"], ["btn", "", "matRipple", "", "name", "desk-outlook-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["btn", "", "matRipple", "", "name", "desk-google-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "href"], ["src", "assets/icons/gcal.svg", 1, "w-6"], ["btn", "", "matRipple", "", "name", "desk-ical-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "href"], [1, "text-xl"]], template: function ParkingFlowSuccessComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "main", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "date");
        \u0275\u0275pipe(8, "date");
        \u0275\u0275pipe(9, "date");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "img", 4);
        \u0275\u0275conditionalCreate(12, ParkingFlowSuccessComponent_Conditional_12_Template, 20, 21, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "footer", 6)(14, "a", 7);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, "APP.WORKPLACE.PARKING_SUCCESS_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 16, "APP.WORKPLACE.PARKING_SUCCESS_MSG", \u0275\u0275pureFunction4(21, _c02, ctx.last_event.asset_name, ctx.location, \u0275\u0275pipeBind2(7, 7, ctx.last_event.date, "mediumDate"), \u0275\u0275pipeBind2(8, 10, ctx.last_event.date, ctx.time_format) + " - " + \u0275\u0275pipeBind2(9, 13, ctx.last_event.date + ctx.last_event.duration * 60 * 1e3, ctx.time_format))), " ");
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.show_links ? 12 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(26, _c1));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 19, "APP.WORKPLACE.BOOKING_FINISHED"), " ");
      }
    }, dependencies: [
      CommonModule,
      RouterModule,
      RouterLink,
      MatRippleModule,
      MatRipple,
      IconComponent,
      DatePipe,
      TranslatePipe,
      SafePipe,
      SanitizePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingFlowSuccessComponent, [{
    type: Component,
    args: [{ selector: "parking-flow-success", template: `
        <div
            class="bg-base-100 absolute inset-0 z-50 flex flex-col overflow-auto"
        >
            <main
                class="flex flex-1 flex-col items-center justify-center space-y-2 p-8"
            >
                <h2 class="pb-4 text-2xl font-medium">
                    {{ 'APP.WORKPLACE.PARKING_SUCCESS_HEADER' | translate }}
                </h2>
                <p class="max-w-lg text-center">
                    {{
                        'APP.WORKPLACE.PARKING_SUCCESS_MSG'
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
                <img class="h-80" src="assets/icons/parking-success.svg" />
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
                <a btn matRipple class="w-full max-w-lg" [routerLink]="['/']">
                    {{ 'APP.WORKPLACE.BOOKING_FINISHED' | translate }}
                </a>
            </footer>
        </div>
    `, imports: [
      CommonModule,
      RouterModule,
      TranslatePipe,
      MatRippleModule,
      SafePipe,
      SanitizePipe,
      IconComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingFlowSuccessComponent, { className: "ParkingFlowSuccessComponent", filePath: "apps/workplace/src/app/book/parking-flow/parking-flow-success.component.ts", lineNumber: 118 });
})();

// apps/workplace/src/app/book/parking-flow.component.ts
var _c03 = (a0) => ({ name: a0 });
var _c12 = () => ["/your-bookings"];
function NewParkingFlowComponent_Conditional_0_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "img", 3);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.WORKPLACE.PARKING_HOME_LOCATION_RESTRICTED"), " ");
  }
}
function NewParkingFlowComponent_Conditional_0_Conditional_0_Conditional_1_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "parking-flow-success");
  }
}
function NewParkingFlowComponent_Conditional_0_Conditional_0_Conditional_1_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "parking-flow-confirm");
  }
}
function NewParkingFlowComponent_Conditional_0_Conditional_0_Conditional_1_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "parking-flow-form");
  }
}
function NewParkingFlowComponent_Conditional_0_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275conditionalCreate(1, NewParkingFlowComponent_Conditional_0_Conditional_0_Conditional_1_Case_1_Template, 1, 0, "parking-flow-success")(2, NewParkingFlowComponent_Conditional_0_Conditional_0_Conditional_1_Case_2_Template, 1, 0, "parking-flow-confirm")(3, NewParkingFlowComponent_Conditional_0_Conditional_0_Conditional_1_Case_3_Template, 1, 0, "parking-flow-form");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_3_0 = ctx_r0.view()) === "success" ? 1 : tmp_3_0 === "confirm" ? 2 : 3);
  }
}
function NewParkingFlowComponent_Conditional_0_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "img", 4);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 5);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 3, "APP.WORKPLACE.PARKING_ASSIGNED", \u0275\u0275pureFunction1(8, _c03, ctx_r0.assigned_space()?.name)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c12));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 6, "APP.WORKPLACE.VIEW_SCHEDULE"), " ");
  }
}
function NewParkingFlowComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NewParkingFlowComponent_Conditional_0_Conditional_0_Conditional_0_Template, 5, 3, "div", 1)(1, NewParkingFlowComponent_Conditional_0_Conditional_0_Conditional_1_Template, 4, 1, "div", 2)(2, NewParkingFlowComponent_Conditional_0_Conditional_0_Conditional_2_Template, 8, 11, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.is_home_location() ? 0 : !ctx_r0.assigned_space() || !ctx_r0.has_booking() ? 1 : 2);
  }
}
function NewParkingFlowComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "img", 3);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, " Your user account is not allowed to book parking in this building. ");
    \u0275\u0275elementEnd()();
  }
}
function NewParkingFlowComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NewParkingFlowComponent_Conditional_0_Conditional_0_Template, 3, 1)(1, NewParkingFlowComponent_Conditional_0_Conditional_1_Template, 4, 0, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r0.deny_parking_access() ? 0 : 1);
  }
}
function NewParkingFlowComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 0);
  }
}
var NewParkingFlowComponent = class _NewParkingFlowComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(BookingFormService);
    this._route = inject(ActivatedRoute);
    this._parking = inject(ParkingService);
    this._org = inject(OrganisationService);
    this.deny_parking_access = this._parking.deny_parking_access;
    this.assigned_space = this._parking.assigned_space;
    this.has_booking = this._parking.has_booking;
    this.is_home_location = this._parking.is_home_location;
    this.view = this._state.view;
    this.ready = signal(
      false,
      ...ngDevMode ? [{ debugName: "ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  get last_success() {
    return this._state.last_success;
  }
  async ngOnInit() {
    this._parking.loadBookings();
    await this._org.waitUntilInitialised();
    await new Promise((resolve) => setTimeout(resolve, 300));
    const active_form = this._state.model();
    const has_edit_state = !!active_form?.id && active_form?.booking_type === "parking";
    if (!has_edit_state)
      this._state.loadForm("parking");
    this._state.setOptions({ type: "parking" });
    const { id, booking_type } = this._state.model();
    if (!id || booking_type !== "parking")
      this._state.newForm("parking");
    this._state.model.update((m) => __spreadProps(__spreadValues({}, m), { booking_type: "parking" }));
    this.ready.set(true);
    const param = this._route.snapshot.paramMap;
    if (param.has("step"))
      this._state.setView(param.get("step"));
    const query = this._route.snapshot.queryParamMap;
    if (query.has("success"))
      this._state.setView("success");
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NewParkingFlowComponent_BaseFactory;
      return function NewParkingFlowComponent_Factory(__ngFactoryType__) {
        return (\u0275NewParkingFlowComponent_BaseFactory || (\u0275NewParkingFlowComponent_BaseFactory = \u0275\u0275getInheritedFactory(_NewParkingFlowComponent)))(__ngFactoryType__ || _NewParkingFlowComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewParkingFlowComponent, selectors: [["placeos-parking-flow"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 1, consts: [[1, "bg-base-100", "h-full", "w-full"], [1, "bg-base-100", "z-50", "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-4"], [1, "bg-base-100", "z-50", "h-full", "w-full"], ["src", "assets/icons/permission-none.svg", 1, "h-64", "w-64"], ["src", "assets/icons/parking-success.svg", 1, "h-64", "w-64"], ["btn", "", "matRipple", "", 1, "w-48", 3, "routerLink"]], template: function NewParkingFlowComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, NewParkingFlowComponent_Conditional_0_Template, 2, 1)(1, NewParkingFlowComponent_Conditional_1_Template, 1, 0, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.ready() ? 0 : 1);
      }
    }, dependencies: [
      CommonModule,
      RouterModule,
      RouterLink,
      ParkingFlowSuccessComponent,
      NewParkingFlowConfirmComponent,
      ParkingFlowFormComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=parking-flow.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewParkingFlowComponent, [{
    type: Component,
    args: [{ selector: "placeos-parking-flow", template: `
        @if (ready()) {
            @if (!deny_parking_access()) {
                @if (is_home_location()) {
                    <div
                        class="bg-base-100 z-50 flex h-full w-full flex-col items-center justify-center space-y-4"
                    >
                        <img
                            src="assets/icons/permission-none.svg"
                            class="h-64 w-64"
                        />
                        <p>
                            {{
                                'APP.WORKPLACE.PARKING_HOME_LOCATION_RESTRICTED'
                                    | translate
                            }}
                        </p>
                    </div>
                } @else if (!assigned_space() || !has_booking()) {
                    <div class="bg-base-100 z-50 h-full w-full">
                        @switch (view()) {
                            @case ('success') {
                                <parking-flow-success> </parking-flow-success>
                            }
                            @case ('confirm') {
                                <parking-flow-confirm> </parking-flow-confirm>
                            }
                            @default {
                                <parking-flow-form></parking-flow-form>
                            }
                        }
                    </div>
                } @else {
                    <div
                        class="bg-base-100 z-50 flex h-full w-full flex-col items-center justify-center space-y-4"
                    >
                        <img
                            src="assets/icons/parking-success.svg"
                            class="h-64 w-64"
                        />
                        <p>
                            {{
                                'APP.WORKPLACE.PARKING_ASSIGNED'
                                    | translate
                                        : {
                                              name: assigned_space()?.name,
                                          }
                            }}
                        </p>
                        <a
                            btn
                            matRipple
                            class="w-48"
                            [routerLink]="['/your-bookings']"
                        >
                            {{ 'APP.WORKPLACE.VIEW_SCHEDULE' | translate }}
                        </a>
                    </div>
                }
            } @else {
                <div
                    class="bg-base-100 z-50 flex h-full w-full flex-col items-center justify-center space-y-4"
                >
                    <img
                        src="assets/icons/permission-none.svg"
                        class="h-64 w-64"
                    />
                    <p>
                        Your user account is not allowed to book parking in this
                        building.
                    </p>
                </div>
            }
        } @else {
            <div class="bg-base-100 h-full w-full"></div>
        }
    `, imports: [
      CommonModule,
      RouterModule,
      TranslatePipe,
      ParkingFlowSuccessComponent,
      NewParkingFlowConfirmComponent,
      ParkingFlowFormComponent
    ], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/book/parking-flow.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=parking-flow.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewParkingFlowComponent, { className: "NewParkingFlowComponent", filePath: "apps/workplace/src/app/book/parking-flow.component.ts", lineNumber: 107 });
})();
export {
  NewParkingFlowComponent
};
//# sourceMappingURL=parking-flow.component-OS6SQB2E.js.map
