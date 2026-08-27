import {
  BookingHistoryModalComponent
} from "./chunk-4MA6WQW6.js";
import {
  ImageCarouselComponent
} from "./chunk-DTQUETFZ.js";
import {
  BookingFormService
} from "./chunk-GZZUMO4U.js";
import {
  ItemListFieldComponent
} from "./chunk-G26YIFAG.js";
import {
  DEFAULT_COLOURS
} from "./chunk-4J2CHCIS.js";
import {
  DurationFieldComponent
} from "./chunk-HVQMCMP7.js";
import {
  ParkingSpacePipe
} from "./chunk-2BYJAH7J.js";
import {
  deleteParkingFleetVehicle,
  deleteParkingSpace,
  deleteParkingUser,
  queryParkingFleetVehicles,
  queryParkingSpaces,
  queryParkingSpacesForZones,
  queryParkingUsers,
  saveParkingFleetVehicle,
  saveParkingSpace,
  saveParkingUser,
  toParkingFleetVehicle
} from "./chunk-JYRGKRWL.js";
import {
  MapPinComponent
} from "./chunk-4HCCL2MT.js";
import {
  parkingRequestStatus
} from "./chunk-4PNJ33HU.js";
import {
  DateFieldComponent
} from "./chunk-DPMEJ3KZ.js";
import {
  InteractiveMapComponent
} from "./chunk-XYIURMLZ.js";
import {
  openConfirmModal
} from "./chunk-YYNQUF4U.js";
import {
  UserSearchFieldComponent
} from "./chunk-C3OJ6TPY.js";
import {
  UserPipe
} from "./chunk-SKZLYBNO.js";
import {
  showStaff
} from "./chunk-MW5L6XB7.js";
import {
  BuildingPipe
} from "./chunk-M33GMDCD.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-FRJMLACI.js";
import {
  approveBooking,
  approveBookingInstance,
  bookedResourceList,
  findBookingClashes,
  queryBookings,
  queryPagedBookings,
  rejectBooking,
  rejectBookingInstance,
  rejectOverlappingRecurringBookings,
  removeBooking,
  saveBooking,
  setBookingCheckedIn,
  updateBooking,
  updateBookingInstance
} from "./chunk-RFY2Q4RB.js";
import {
  AuthenticatedImageDirective,
  FullscreenModalShellComponent,
  MatCheckbox,
  MatCheckboxModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
  MatSelect,
  MatSelectModule,
  MatSelectTrigger,
  SettingsToggleComponent,
  TimeFieldComponent
} from "./chunk-H5FMDY3A.js";
import {
  subDays
} from "./chunk-X4FVLD5M.js";
import {
  AsyncHandler,
  AsyncPipe,
  Booking,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  DefaultValueAccessor,
  Desk,
  ElementRef,
  EventEmitter,
  FormField,
  FormsModule,
  IconComponent,
  Injectable,
  Injector,
  Input,
  LowerCasePipe,
  MAP_FEATURE_DATA,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatOption,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  OrganisationService,
  Output,
  Pn,
  RecurrenceDays,
  SETTING_KEYS,
  SafePipe,
  SanitizePipe,
  SettingsService,
  TranslatePipe,
  UploadsService,
  ViewChildren,
  addDays,
  addHours,
  addMinutes,
  addMonths,
  alignDateToBookableHours,
  computed,
  csvToJson,
  currentUser,
  debounced,
  downloadFile,
  effect,
  endOfDay,
  endOfWeek,
  flatten,
  form,
  forwardRef,
  getFormTimeSyncHandle,
  getInvalidSignalFields,
  getTimeInTimezone,
  getTimezoneDifferenceInHours,
  getUnixTime,
  i18n,
  inject,
  input,
  isMobileSafari,
  jsonToCsv,
  loadTextFileFromInputEvent,
  model,
  nc,
  notifyError,
  notifySuccess,
  onFieldChange,
  output,
  randomString,
  required,
  resource,
  roundToNearestMinutes,
  runInInjectionContext,
  setClassMetadata,
  setTimeInTimezone,
  settingSignal,
  signal,
  startOfDay,
  startOfDayInTimezone,
  startOfWeek,
  unique,
  untracked,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeResourceUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-OAKJKJVS.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/bookings/src/lib/parking.service.ts
var ParkingService = class _ParkingService extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._loading = signal(
      [],
      ...ngDevMode ? [{ debugName: "_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._spaces = signal(
      [],
      ...ngDevMode ? [{ debugName: "_spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._users = signal(
      [],
      ...ngDevMode ? [{ debugName: "_users" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._has_booking = signal(
      false,
      ...ngDevMode ? [{ debugName: "_has_booking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._booked_space = signal(
      null,
      ...ngDevMode ? [{ debugName: "_booked_space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._home_building_id = signal(
      null,
      ...ngDevMode ? [{ debugName: "_home_building_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._load_bookings = signal(
      false,
      ...ngDevMode ? [{ debugName: "_load_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._bookings_request = null;
    this.loading = computed(
      () => this._loading().length > 0,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.levels = computed(
      () => {
        const levels = this._org.level_list();
        if (!this._settings.get("app.use_region")) {
          const blds = this._org.buildingsForRegion();
          const bld_ids = blds.map((bld) => bld.id);
          const list = levels.filter((lvl) => bld_ids.includes(lvl.parent_id) && lvl.tags.includes("parking"));
          list.map((lvl) => __spreadProps(__spreadValues({}, lvl), {
            display_name: `${blds.find((_) => _.id === lvl.parent_id)?.display_name} - ${lvl.display_name}`
          }));
          return list;
        }
        return levels.filter((lvl) => lvl.parent_id === this._org.building.id && lvl.tags.includes("parking"));
      },
      ...ngDevMode ? [{ debugName: "levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.spaces = this._spaces.asReadonly();
    this.users = this._users.asReadonly();
    this.has_booking = this._has_booking.asReadonly();
    this.assigned_space = computed(
      () => this._spaces().find((_) => _.assigned_to?.toLowerCase() === currentUser().email?.toLowerCase()),
      ...ngDevMode ? [{ debugName: "assigned_space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.user_details = computed(
      () => this._users().find((_) => _.email?.toLowerCase() === currentUser().email?.toLowerCase()),
      ...ngDevMode ? [{ debugName: "user_details" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.deny_parking_access = computed(
      () => !!this.user_details()?.deny,
      ...ngDevMode ? [{ debugName: "deny_parking_access" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.booked_space = this._booked_space.asReadonly();
    this.home_building_id = this._home_building_id.asReadonly();
    this.is_home_location = computed(
      () => {
        if (!this._settings.get("app.parking.restrict_home_location"))
          return false;
        const home_id = this._home_building_id();
        const bld = this._org.active_building();
        return !!home_id && bld?.id === home_id;
      },
      ...ngDevMode ? [{ debugName: "is_home_location" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const levels = this.levels();
      if (levels[0]?.id)
        untracked(() => this._loadSpaces(levels.map((l) => l.id)));
    });
    effect(() => {
      const bld = this._org.active_building();
      if (!bld?.id)
        return;
      untracked(() => {
        this._loadUsers(bld.id);
        this._loadHomeBuilding();
      });
    });
    effect(() => {
      const spaces = this._spaces();
      if (this._load_bookings() && spaces.length) {
        untracked(() => this._loadBookings(spaces));
      }
    });
  }
  loadBookings() {
    this._load_bookings.set(true);
  }
  async _loadSpaces(level_ids) {
    this._loading.set([...this._loading(), "spaces"]);
    this._spaces.set(await queryParkingSpacesForZones(level_ids));
    this._loading.set(this._loading().filter((_) => _ !== "spaces"));
  }
  async _loadUsers(building_id) {
    this._loading.set([...this._loading(), "users"]);
    this._users.set(await queryParkingUsers(building_id));
    this._loading.set(this._loading().filter((_) => _ !== "users"));
  }
  async _loadBookings(spaces) {
    this._bookings_request = this._bookings_request || queryBookings({
      period_start: getUnixTime(startOfDay(Date.now())),
      period_end: getUnixTime(endOfDay(Date.now())),
      type: "parking"
    }).catch(() => []).finally(() => this._bookings_request = null);
    const bookings = await this._bookings_request;
    this._has_booking.set(bookings.length > 0);
    const booked_spaces = bookings.map((booking) => spaces.find((space) => space.id === booking.asset_id)).filter((space) => !!space);
    this._booked_space.set(booked_spaces[0] || null);
  }
  async _loadHomeBuilding() {
    const buildings = this._org.building_list();
    if (!buildings?.length)
      return;
    const results = await Promise.all(buildings.map((bld) => nc(bld.id, { name: "desks" }).then((data) => ({
      building_id: bld.id,
      desks: flatten(data.map((meta) => (meta?.metadata?.desks?.details instanceof Array ? meta.metadata.desks.details : []).map((d) => new Desk(__spreadProps(__spreadValues({}, d), {
        zone: meta.zone
      })))))
    })).catch(() => ({
      building_id: bld.id,
      desks: []
    }))));
    const email = currentUser()?.email?.toLowerCase();
    if (!email)
      return this._home_building_id.set(null);
    const match = results.find((r) => r.desks.some((d) => d.assigned_to?.toLowerCase() === email));
    this._home_building_id.set(match?.building_id || null);
  }
  static {
    this.\u0275fac = function ParkingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ParkingService, factory: _ParkingService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "BOOKINGS.PARKING_PLATE_NUMBER"), " ");
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
                            {{ 'BOOKINGS.PARKING_PLATE_NUMBER' | translate }}
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
      this._settings.get(SETTING_KEYS.FAVORITE_PARKING_SPACES) || [],
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
    this._settings.saveUserSetting(SETTING_KEYS.FAVORITE_PARKING_SPACES, next_favs);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSelectModalComponent, { className: "ParkingSelectModalComponent", filePath: "libs/bookings/src/lib/parking-select-modal/parking-select-modal.component.ts", lineNumber: 203 });
})();

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
    this.favorites = this._settings.signal(SETTING_KEYS.FAVORITE_PARKING_SPACES, EMPTY_FAVS, true);
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
      this._settings.saveUserSetting(SETTING_KEYS.FAVORITE_PARKING_SPACES, [...fav_list, space.id]);
    } else {
      this._settings.saveUserSetting(SETTING_KEYS.FAVORITE_PARKING_SPACES, fav_list.filter((_) => _ !== space.id));
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceListFieldComponent, { className: "ParkingSpaceListFieldComponent", filePath: "libs/bookings/src/lib/parking-space-list-field.component.ts", lineNumber: 141 });
})();

// apps/concierge/src/app/parking/parking-assign-space-modal.component.ts
var _c05 = ["space_list_item"];
var _c13 = () => ({ controls: true });
var _forTrack0 = ($index, $item) => $item.id;
function ParkingAssignSpaceModalComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lvl_r1 = ctx.$implicit;
    \u0275\u0275property("value", lvl_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lvl_r1.display_name || lvl_r1.name, " ");
  }
}
function ParkingAssignSpaceModalComponent_Conditional_21_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19, 0);
    \u0275\u0275listener("click", function ParkingAssignSpaceModalComponent_Conditional_21_For_1_Template_button_click_0_listener() {
      const space_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.selectSpace(space_r3));
    });
    \u0275\u0275elementStart(2, "div", 20)(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const space_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-primary!", space_r3.id === ctx_r3.selected_space()?.id)("text-primary-content!", space_r3.id === ctx_r3.selected_space()?.id);
    \u0275\u0275attribute("data-space-id", space_r3.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.space_label(space_r3));
  }
}
function ParkingAssignSpaceModalComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ParkingAssignSpaceModalComponent_Conditional_21_For_1_Template, 5, 6, "button", 18, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r3.available_spaces());
  }
}
function ParkingAssignSpaceModalComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "img", 21);
    \u0275\u0275elementStart(2, "div", 22);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.PARKING_ASSIGN_SPACE_EMPTY"), " ");
  }
}
function ParkingAssignSpaceModalComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "mat-spinner", 23);
    \u0275\u0275elementEnd();
  }
}
function ParkingAssignSpaceModalComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function ParkingAssignSpaceModalComponent_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirmAssign());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !ctx_r3.selected_space());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "APP.CONCIERGE.PARKING_ASSIGN_SPACE_CONFIRM"), " ");
  }
}
function bookingZonesForLevel(org, level) {
  return unique([
    org.organisation?.id,
    org.region?.id,
    level?.parent_id,
    level?.id
  ]).filter((_) => _);
}
function mapLocationFromClick(e, map_info = {}) {
  const id = e?.properties?.externalId || e?.properties?.roomId || e?.id;
  if (id)
    return id;
  if (typeof e?.x !== "number" || typeof e?.y !== "number")
    return "";
  const short_list = [];
  for (const [location2, bbox] of Object.entries(map_info)) {
    if (bbox.x <= e.x && e.x <= bbox.x + bbox.w && bbox.y <= e.y && e.y <= bbox.y + bbox.h) {
      short_list.push([location2, bbox.h * bbox.w]);
    }
  }
  short_list.sort((a, b) => a[1] - b[1]);
  return short_list[0]?.[0] || "";
}
function availableParkingSpaces(spaces, booked_ids, clash_ids) {
  return spaces.filter((space) => !booked_ids.has(space.id) && !clash_ids.has(space.id) && !space.assigned_to && space.bookable !== false);
}
function bookedResourcePeriodForBooking(booking) {
  const start = booking.booking_start || Math.floor(booking.date / 1e3);
  const end = booking.booking_end || Math.floor((booking.date_end || booking.date + (booking.duration || 0) * 60 * 1e3) / 1e3);
  return {
    period_start: start - 5 * 60,
    period_end: end + 5 * 60
  };
}
var ParkingAssignSpaceModalComponent = class _ParkingAssignSpaceModalComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._org = inject(OrganisationService);
    this.levels = signal(
      [],
      ...ngDevMode ? [{ debugName: "levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.focus = signal(
      "",
      ...ngDevMode ? [{ debugName: "focus" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_space = signal(
      null,
      ...ngDevMode ? [{ debugName: "selected_space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_level = signal(
      null,
      ...ngDevMode ? [{ debugName: "selected_level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.map_info = signal(
      {},
      ...ngDevMode ? [{ debugName: "map_info" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.map_url = computed(
      () => this.selected_level()?.map_id || "",
      ...ngDevMode ? [{ debugName: "map_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.map_actions = [
      {
        id: "*",
        action: "click",
        callback: (_e, p) => this._onMapClick(p || _e)
      }
    ];
    this.setMapInfo = (info) => this.map_info.set(info);
    this._all_spaces_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_all_spaces_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this.selected_level(),
      loader: ({ params: level }) => level ? queryParkingSpaces(level.id).catch(() => []) : Promise.resolve([])
    }));
    this._all_spaces = computed(
      () => this._all_spaces_resource.value() ?? [],
      ...ngDevMode ? [{ debugName: "_all_spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._booked_ids_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_booked_ids_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this.selected_level(),
      loader: ({ params: level }) => level ? bookedResourceList(__spreadProps(__spreadValues({}, bookedResourcePeriodForBooking(this._data.booking)), {
        type: "parking",
        zones: bookingZonesForLevel(this._org, level).join(",")
      })).catch(() => []) : Promise.resolve([])
    }));
    this._booked_ids = computed(
      () => new Set(this._booked_ids_resource.value() ?? []),
      ...ngDevMode ? [{ debugName: "_booked_ids" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._recurring_clash_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_recurring_clash_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        const booking = this._data.booking;
        const level = this.selected_level();
        const spaces = this._all_spaces();
        const is_recurring = booking.recurrence_type && booking.recurrence_type !== "none";
        if (!level || !spaces.length || !is_recurring)
          return null;
        return { level, space_ids: spaces.map((s) => s.id) };
      },
      loader: ({ params }) => {
        if (!params)
          return Promise.resolve([]);
        const booking = new Booking(__spreadProps(__spreadValues({}, this._data.booking), {
          booking_type: "parking",
          zones: bookingZonesForLevel(this._org, params.level),
          asset_ids: params.space_ids
        }));
        return findBookingClashes(booking).catch(() => []);
      }
    }));
    this._recurring_clash_ids = computed(
      () => new Set(this._recurring_clash_resource.value() ?? []),
      ...ngDevMode ? [{ debugName: "_recurring_clash_ids" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.available_spaces = computed(
      () => availableParkingSpaces(this._all_spaces(), this._booked_ids(), this._recurring_clash_ids()),
      ...ngDevMode ? [{ debugName: "available_spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.map_styles = computed(
      () => {
        const styles = {};
        const available_ids = new Set(this.available_spaces().map((s) => s.id));
        const selected = this.selected_space();
        for (const space of this._all_spaces()) {
          const id = space.map_id || space.id;
          if (selected && space.id === selected.id) {
            styles[`#${id}`] = {
              fill: DEFAULT_COLOURS["pending"],
              opacity: 0.6
            };
          } else if (available_ids.has(space.id)) {
            styles[`#${id}`] = {
              fill: DEFAULT_COLOURS["free"],
              opacity: 0.6
            };
          } else if (space.bookable === false) {
            styles[`#${id}`] = {
              fill: DEFAULT_COLOURS["not-bookable"],
              opacity: 0.6
            };
          } else {
            styles[`#${id}`] = {
              fill: DEFAULT_COLOURS["busy"],
              opacity: 0.6
            };
          }
        }
        return styles;
      },
      ...ngDevMode ? [{ debugName: "map_styles" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.map_features = computed(
      () => {
        const features = [];
        const available_ids = new Set(this.available_spaces().map((s) => s.id));
        const selected = this.selected_space();
        for (const space of this._all_spaces()) {
          const id = space.map_id || space.id;
          const is_available = available_ids.has(space.id);
          const is_selected = selected?.id === space.id;
          features.push({
            location: `${id}`,
            content: ExploreParkingInfoComponent,
            z_index: 20,
            hover: true,
            data: __spreadProps(__spreadValues({}, space), {
              name: this.space_label(space),
              user: space.assigned_to || "",
              plate_number: "",
              status: is_selected ? "reserved" : space.bookable === false ? "not-bookable" : is_available ? "free" : "busy"
            })
          });
        }
        return features;
      },
      ...ngDevMode ? [{ debugName: "map_features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.space_label = (space) => space?.identifier || space?.name || space?.display_name || space?.metadata?.display_name || space?.extension_data?.display_name || "";
  }
  ngOnInit() {
    this.levels.set(this._org.levels.filter((_) => _.tags.includes("parking")));
    const booking_zone = this._data.booking.zones?.find((z) => this.levels().some((l) => l.id === z));
    const initial_level = booking_zone ? this.levels().find((l) => l.id === booking_zone) : this.levels()[0];
    if (initial_level) {
      this.selected_level.set(initial_level);
    }
  }
  selectLevel(level) {
    this.selected_level.set(level);
    this.selected_space.set(null);
    this.focus.set("");
  }
  selectSpace(space) {
    this.selected_space.set(space);
    this.focus.set(space.map_id || space.id);
    this._refreshStyles();
  }
  async confirmAssign() {
    const space = this.selected_space();
    const level = this.selected_level();
    if (!space)
      return;
    if (!this.available_spaces().some((s) => s.id === space.id)) {
      this.selected_space.set(null);
      notifyError(i18n("APP.CONCIERGE.PARKING_ASSIGN_SPACE_CLASH"));
      return;
    }
    this.loading.set(true);
    try {
      const asset_name = this.space_label(space) || space.name || space.id;
      await updateBooking(this._data.booking.id, {
        asset_id: space.id,
        asset_name,
        zones: level ? bookingZonesForLevel(this._org, level) : this._data.booking.zones,
        extension_data: __spreadProps(__spreadValues({}, this._data.booking.extension_data), {
          asset_name
        })
      });
      await approveBooking(this._data.booking.id);
      await rejectOverlappingRecurringBookings(this._data.booking, "parking").catch(() => []);
      notifySuccess(i18n("APP.CONCIERGE.PARKING_ASSIGN_SPACE_SUCCESS"));
      this._dialog_ref.close(true);
    } catch (e) {
      notifyError(i18n("APP.CONCIERGE.PARKING_ASSIGN_SPACE_ERROR", {
        error: e.message || e.error || e
      }));
      this.loading.set(false);
    }
  }
  _onMapClick(e) {
    this.timeout("map_click", async () => {
      const id = mapLocationFromClick(e, this.map_info());
      if (!id)
        return;
      const space = this.available_spaces().find((s) => s.id === id || s.map_id === id);
      if (space) {
        this.selectSpace(space);
        this._scrollSelectedSpaceIntoView();
      }
    });
  }
  _scrollSelectedSpaceIntoView() {
    const selected_id = this.selected_space()?.id;
    if (!selected_id)
      return;
    this.timeout("scroll_selected_space", () => {
      const item = this._space_list_items?.find(({ nativeElement }) => nativeElement.dataset.spaceId === selected_id);
      item?.nativeElement.scrollIntoView({
        block: "nearest",
        inline: "nearest",
        behavior: "smooth"
      });
    }, 0);
  }
  _refreshStyles() {
    const selected = this.selected_space();
    if (selected) {
      this.selected_space.set(__spreadValues({}, selected));
    }
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ParkingAssignSpaceModalComponent_BaseFactory;
      return function ParkingAssignSpaceModalComponent_Factory(__ngFactoryType__) {
        return (\u0275ParkingAssignSpaceModalComponent_BaseFactory || (\u0275ParkingAssignSpaceModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ParkingAssignSpaceModalComponent)))(__ngFactoryType__ || _ParkingAssignSpaceModalComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingAssignSpaceModalComponent, selectors: [["parking-assign-space-modal"]], viewQuery: function ParkingAssignSpaceModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c05, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._space_list_items = _t);
      }
    }, features: [\u0275\u0275InheritDefinitionFeature], decls: 26, vars: 19, consts: [["space_list_item", ""], [1, "bg-base-200", "sticky", "top-0", "z-10", "mx-auto", "mt-2", "flex", "h-14", "w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-sm", "border-none", "px-4", "py-2"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "h-[75vh]", "max-h-[75vh]", "max-w-[calc(100vw-2rem)]", "min-w-[80vw]", "space-x-2", "overflow-hidden", "p-2", "sm:max-w-5xl"], [1, "bg-base-200", "relative", "h-full", "w-1/2", "flex-1", "rounded-lg"], [3, "mapInfo", "src", "styles", "features", "actions", "options", "focus"], [1, "border-base-300", "relative", "flex", "h-full", "w-[20rem]", "flex-col", "rounded-lg", "border"], [1, "border-base-200", "flex", "flex-col", "border-b", "p-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["name", "level", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "flex", "h-1/2", "flex-1", "flex-col", "space-y-2", "overflow-auto", "px-2"], [1, "bg-base-100", "sticky", "top-0", "z-10", "w-full", "px-1", "py-3", "text-sm"], [1, "flex", "h-full", "flex-1", "flex-col", "items-center", "justify-center", "space-y-4"], [1, "border-base-200", "border-t", "p-2"], [1, "flex", "w-full", "items-center", "justify-center"], ["btn", "", "matRipple", "", 1, "w-full", 3, "disabled"], ["btn", "", "matRipple", "", 1, "clear", "hover:bg-base-200", "flex", "w-full", "items-center", "rounded-sm", "text-left", 3, "bg-primary!", "text-primary-content!"], ["btn", "", "matRipple", "", 1, "clear", "hover:bg-base-200", "flex", "w-full", "items-center", "rounded-sm", "text-left", 3, "click"], [1, "flex", "w-full", "flex-col", "font-mono", "text-sm"], ["src", "assets/icons/no-results.svg", 1, "w-36"], [1, "text-center", "opacity-30"], ["diameter", "32"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click", "disabled"]], template: function ParkingAssignSpaceModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 1)(1, "h2", 2);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3)(5, "icon");
        \u0275\u0275text(6, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "main", 4)(8, "div", 5)(9, "interactive-map", 6);
        \u0275\u0275listener("mapInfo", function ParkingAssignSpaceModalComponent_Template_interactive_map_mapInfo_9_listener($event) {
          return ctx.setMapInfo($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "mat-form-field", 9)(13, "mat-select", 10);
        \u0275\u0275listener("ngModelChange", function ParkingAssignSpaceModalComponent_Template_mat_select_ngModelChange_13_listener($event) {
          return ctx.selectLevel($event);
        });
        \u0275\u0275repeaterCreate(14, ParkingAssignSpaceModalComponent_For_15_Template, 2, 2, "mat-option", 11, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 12)(17, "div", 13);
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275pipe(20, "lowercase");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(21, ParkingAssignSpaceModalComponent_Conditional_21_Template, 2, 0)(22, ParkingAssignSpaceModalComponent_Conditional_22_Template, 5, 3, "div", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 15);
        \u0275\u0275conditionalCreate(24, ParkingAssignSpaceModalComponent_Conditional_24_Template, 2, 0, "div", 16)(25, ParkingAssignSpaceModalComponent_Conditional_25_Template, 3, 4, "button", 17);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 12, "APP.CONCIERGE.PARKING_ASSIGN_SPACE_TITLE"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275property("src", ctx.map_url())("styles", ctx.map_styles())("features", ctx.map_features())("actions", ctx.map_actions)("options", \u0275\u0275pureFunction0(18, _c13))("focus", ctx.focus());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.selected_level());
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.levels());
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate2(" ", ctx.available_spaces().length || 0, " ", \u0275\u0275pipeBind1(20, 16, \u0275\u0275pipeBind1(19, 14, "APP.CONCIERGE.PARKING_TAB_SPACES")), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.available_spaces().length ? 21 : 22);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading() ? 24 : 25);
      }
    }, dependencies: [
      CommonModule,
      MatDialogModule,
      MatDialogClose,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      FormsModule,
      NgControlStatus,
      NgModel,
      IconComponent,
      InteractiveMapComponent,
      LowerCasePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingAssignSpaceModalComponent, [{
    type: Component,
    args: [{ selector: "parking-assign-space-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 mx-auto mt-2 flex h-14 w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none px-4 py-2"
        >
            <h2 class="text-xl font-medium">
                {{ 'APP.CONCIERGE.PARKING_ASSIGN_SPACE_TITLE' | translate }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main
            class="flex h-[75vh] max-h-[75vh] max-w-[calc(100vw-2rem)] min-w-[80vw] space-x-2 overflow-hidden p-2 sm:max-w-5xl"
        >
            <div class="bg-base-200 relative h-full w-1/2 flex-1 rounded-lg">
                <interactive-map
                    [src]="map_url()"
                    [styles]="map_styles()"
                    [features]="map_features()"
                    [actions]="map_actions"
                    [options]="{ controls: true }"
                    [focus]="focus()"
                    (mapInfo)="setMapInfo($any($event))"
                ></interactive-map>
            </div>
            <div
                class="border-base-300 relative flex h-full w-[20rem] flex-col rounded-lg border"
            >
                <div class="border-base-200 flex flex-col border-b p-2">
                    <mat-form-field
                        class="no-subscript w-full"
                        appearance="outline"
                    >
                        <mat-select
                            name="level"
                            [ngModel]="selected_level()"
                            (ngModelChange)="selectLevel($event)"
                        >
                            @for (lvl of levels(); track lvl.id) {
                                <mat-option [value]="lvl">
                                    {{ lvl.display_name || lvl.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
                <div
                    class="flex h-1/2 flex-1 flex-col space-y-2 overflow-auto px-2"
                >
                    <div
                        class="bg-base-100 sticky top-0 z-10 w-full px-1 py-3 text-sm"
                    >
                        {{ available_spaces().length || 0 }}
                        {{
                            'APP.CONCIERGE.PARKING_TAB_SPACES'
                                | translate
                                | lowercase
                        }}
                    </div>
                    @if (available_spaces().length) {
                        @for (space of available_spaces(); track space.id) {
                            <button
                                #space_list_item
                                btn
                                matRipple
                                class="clear hover:bg-base-200 flex w-full items-center rounded-sm text-left"
                                [attr.data-space-id]="space.id"
                                [class.bg-primary!]="
                                    space.id === selected_space()?.id
                                "
                                [class.text-primary-content!]="
                                    space.id === selected_space()?.id
                                "
                                (click)="selectSpace(space)"
                            >
                                <div
                                    class="flex w-full flex-col font-mono text-sm"
                                >
                                    <div>{{ space_label(space) }}</div>
                                </div>
                            </button>
                        }
                    } @else {
                        <div
                            class="flex h-full flex-1 flex-col items-center justify-center space-y-4"
                        >
                            <img
                                src="assets/icons/no-results.svg"
                                class="w-36"
                            />
                            <div class="text-center opacity-30">
                                {{
                                    'APP.CONCIERGE.PARKING_ASSIGN_SPACE_EMPTY'
                                        | translate
                                }}
                            </div>
                        </div>
                    }
                </div>
                <div class="border-base-200 border-t p-2">
                    @if (loading()) {
                        <div class="flex w-full items-center justify-center">
                            <mat-spinner diameter="32"></mat-spinner>
                        </div>
                    } @else {
                        <button
                            btn
                            matRipple
                            [disabled]="!selected_space()"
                            class="w-full"
                            (click)="confirmAssign()"
                        >
                            {{
                                'APP.CONCIERGE.PARKING_ASSIGN_SPACE_CONFIRM'
                                    | translate
                            }}
                        </button>
                    }
                </div>
            </div>
        </main>
    `, imports: [
      CommonModule,
      MatDialogModule,
      MatRippleModule,
      MatFormFieldModule,
      MatSelectModule,
      MatProgressSpinnerModule,
      FormsModule,
      IconComponent,
      InteractiveMapComponent,
      TranslatePipe
    ] }]
  }], null, { _space_list_items: [{
    type: ViewChildren,
    args: ["space_list_item"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingAssignSpaceModalComponent, { className: "ParkingAssignSpaceModalComponent", filePath: "apps/concierge/src/app/parking/parking-assign-space-modal.component.ts", lineNumber: 253 });
})();

// apps/concierge/src/app/parking/parking-booking-modal.component.ts
var _c06 = () => ({ standalone: true });
function ParkingBookingModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "a-user-search-field", 15);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r0.form.user);
    \u0275\u0275control();
  }
}
function ParkingBookingModalComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formField", ctx_r0.form.all_day);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.ALL_DAY"), " ");
  }
}
function ParkingBookingModalComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 16)(2, "label", 17);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a-time-field", 18);
    \u0275\u0275listener("ngModelChange", function ParkingBookingModalComponent_Conditional_32_Template_a_time_field_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.model.update((m) => __spreadProps(__spreadValues({}, m), { date: $event })));
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
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 14, "FORM.TIME_START"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r0.model().date)("ngModelOptions", \u0275\u0275pureFunction0(18, _c06))("disabled", ctx_r0.form.date().disabled())("use_24hr", ctx_r0.use_24hr())("range", ctx_r0.bookable_hours())("min_duration", ctx_r0.effective_min_duration());
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 16, "FORM.TIME_END"));
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r0.form.duration)("time", ctx_r0.model().date)("max", ctx_r0.max_duration())("custom_options", ctx_r0.custom_duration_options())("use_24hr", ctx_r0.use_24hr())("end_time", ctx_r0.bookable_hours()?.end);
    \u0275\u0275control();
  }
}
function ParkingBookingModalComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ParkingBookingModalComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 5);
    \u0275\u0275element(4, "textarea", 23);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "FORM.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r0.form.notes)("placeholder", \u0275\u0275pipeBind1(5, 5, "FORM.NOTES"));
    \u0275\u0275control();
  }
}
var ParkingBookingModalComponent = class _ParkingBookingModalComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._data = inject(MAT_DIALOG_DATA);
    this._booking_form = inject(BookingFormService);
    this._dialog_ref = inject(MatDialogRef);
    this._settings = inject(SettingsService);
    this._injector = inject(Injector);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.user = this._data.user;
    this.date = this._data.date;
    this.allow_time_changes = this._data.allow_time_changes;
    this.form = this._booking_form.form;
    this.model = this._booking_form.model;
    this.id = computed(
      () => this.model().id || "",
      ...ngDevMode ? [{ debugName: "id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end_date = computed(
      () => endOfDay(addDays(Date.now(), this._settings.get("app.parking.available_period") || this._settings.get("app.bookings.available_period") || 7)),
      ...ngDevMode ? [{ debugName: "end_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.max_duration = computed(
      () => this._settings.get("app.parking.max_duration") || this._settings.get("app.bookings.max_duration") || 480,
      ...ngDevMode ? [{ debugName: "max_duration" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allow_all_day = settingSignal("parking.allow_all_day");
    this.use_24hr = computed(
      () => this._settings.get("app.use_24_hour_time"),
      ...ngDevMode ? [{ debugName: "use_24hr" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.bookable_hours = computed(
      () => this._settings.get("app.parking.bookable_hours") || this._settings.get("app.bookings.bookable_hours"),
      ...ngDevMode ? [{ debugName: "bookable_hours" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.min_duration = computed(
      () => this._settings.get("app.parking.min_duration") || this._settings.get("app.bookings.min_duration") || 30,
      ...ngDevMode ? [{ debugName: "min_duration" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.custom_duration_options = computed(
      () => this._settings.get("app.parking.custom_duration_options") || this._settings.get("app.bookings.custom_duration_options") || [],
      ...ngDevMode ? [{ debugName: "custom_duration_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.effective_min_duration = computed(
      () => Math.min(this.min_duration(), ...this.custom_duration_options()),
      ...ngDevMode ? [{ debugName: "effective_min_duration" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    this._booking_form.newForm("parking", this._data.booking);
    this._booking_form.setOptions({ type: "parking" });
    const user_changes = onFieldChange(this.model, (m) => m.user, (user) => {
      if (!user)
        return;
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        user_name: user.name,
        user_email: user.email,
        attendees: [user]
      }));
    }, this._injector);
    this.subscription("user_changes", {
      unsubscribe: () => user_changes.destroy()
    });
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      booking_type: "parking",
      all_day: this._data.booking ? this._data.booking.duration > 12 * 60 : true
    }));
    if (!this.model().user) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        user: this._data.booking?.attendees[0] || currentUser()
      }));
    }
    if (this._data.parent_id) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        parent_id: this._data.parent_id
      }));
    }
    if (this._data.user) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        user: this._data.user,
        user_email: this._data.user.email,
        user_name: this._data.user.name,
        attendees: [this._data.user]
      }));
    }
    if (this._data.level) {
      this._booking_form.setOptions({ zone_id: this._data.level.id });
    }
    if (this._data.link_id) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { parent_id: this._data.link_id }));
    }
    if (this._data.space) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { resources: [this._data.space] }));
    }
    if (this._data.date) {
      console.log("Date:", this._data.date);
      this.timeout("init_date", () => {
        this.model.update((m) => __spreadProps(__spreadValues({}, m), {
          date: alignDateToBookableHours(this._data.date, this.bookable_hours(), this.model().date)
        }));
      }, 300);
    }
  }
  async postForm() {
    if (!this.model().all_day && this.model().duration > this.max_duration()) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { duration: 30 }));
    }
    this.form().markAsTouched();
    if (this.form().invalid()) {
      return notifyError(i18n("FORM.INVALID_FIELDS", {
        field_list: getInvalidSignalFields(this.form, this.model).join(", ")
      }));
    }
    this.loading.set(true);
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      user_id: void 0,
      booking_type: "parking"
    }));
    const result = await this._booking_form.postForm().catch((e) => {
      this.loading.set(false);
      notifyError(e);
      throw e;
    });
    notifySuccess(i18n("APP.CONCIERGE.PARKING_SAVE"));
    this._dialog_ref.close(result.id);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ParkingBookingModalComponent_BaseFactory;
      return function ParkingBookingModalComponent_Factory(__ngFactoryType__) {
        return (\u0275ParkingBookingModalComponent_BaseFactory || (\u0275ParkingBookingModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ParkingBookingModalComponent)))(__ngFactoryType__ || _ParkingBookingModalComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingBookingModalComponent, selectors: [["parking-booking-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 48, vars: 49, consts: [[3, "confirm", "heading", "loading"], [1, "mb-4", "flex", "items-center", "space-x-2"], [1, "flex", "items-center", "space-x-2"], [1, "flex-1"], ["for", "user-name"], ["appearance", "outline", 1, "w-full"], ["matInput", "", 3, "formField", "placeholder"], ["for", "email"], [1, "relative"], ["for", "date"], [3, "formField"], [1, "absolute", "-top-2", "right-0", 3, "formField"], ["for", "parking-space"], [1, "mb-2", 3, "formField"], ["for", "plate-number"], [1, "flex-1", 3, "formField"], [1, "w-1/3", "flex-1"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled", "use_24hr", "range", "min_duration"], [1, "relative", "w-1/3", "flex-1"], ["for", "end-time"], [3, "formField", "time", "max", "custom_options", "use_24hr", "end_time"], ["for", "notes"], ["matInput", "", "rows", "3", 3, "formField", "placeholder"]], template: function ParkingBookingModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function ParkingBookingModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.postForm();
        });
        \u0275\u0275elementStart(3, "form");
        \u0275\u0275conditionalCreate(4, ParkingBookingModalComponent_Conditional_4_Template, 2, 1, "div", 1);
        \u0275\u0275elementStart(5, "div", 2)(6, "div", 3)(7, "label", 4);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "mat-form-field", 5);
        \u0275\u0275element(11, "input", 6);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(13, "mat-error");
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 3)(17, "label", 7);
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-form-field", 5);
        \u0275\u0275element(21, "input", 6);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(23, "mat-error");
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(26, "div", 8)(27, "label", 9);
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(30, "a-date-field", 10);
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(31, ParkingBookingModalComponent_Conditional_31_Template, 3, 4, "mat-checkbox", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(32, ParkingBookingModalComponent_Conditional_32_Template, 15, 19, "div", 2);
        \u0275\u0275elementStart(33, "label", 12);
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(36, "parking-space-list-field", 13);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(37, "label", 14);
        \u0275\u0275text(38);
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275conditionalCreate(40, ParkingBookingModalComponent_Conditional_40_Template, 2, 0, "span");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "mat-form-field", 5);
        \u0275\u0275element(42, "input", 6);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(44, "mat-error");
        \u0275\u0275text(45);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(47, ParkingBookingModalComponent_Conditional_47_Template, 6, 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 23, ctx.id() ? "APP.CONCIERGE.PARKING_EDIT" : "APP.CONCIERGE.PARKING_NEW"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 25, "APP.CONCIERGE.PARKING_SAVING") : "");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(!ctx.user ? 4 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 27, "FORM.NAME"));
        \u0275\u0275advance(3);
        \u0275\u0275property("formField", ctx.form.user_name)("placeholder", \u0275\u0275pipeBind1(12, 29, "FORM.NAME"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 31, "FORM.NAME_REQUIRED"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 33, "FORM.EMAIL"));
        \u0275\u0275advance(3);
        \u0275\u0275property("formField", ctx.form.user_email)("placeholder", \u0275\u0275pipeBind1(22, 35, "FORM.EMAIL"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 37, "FORM.EMAIL_REQUIRED"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 39, "FORM.DATE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.date);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.allow_all_day() && !ctx.form.duration().disabled() ? 31 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.model().all_day ? 32 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 41, "APP.CONCIERGE.PARKING_SPACE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.resources);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 43, "BOOKINGS.PARKING_PLATE_NUMBER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.user ? 40 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.plate_number)("placeholder", \u0275\u0275pipeBind1(43, 45, "BOOKINGS.PARKING_PLATE_NUMBER"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 47, "BOOKINGS.PARKING_PLATE_NUMBER_REQUIRED"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.model().notes ? 47 : -1);
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      FormField,
      FormsModule,
      \u0275NgNoValidate,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      NgForm,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      DurationFieldComponent,
      TimeFieldComponent,
      MatCheckboxModule,
      MatCheckbox,
      DateFieldComponent,
      UserSearchFieldComponent,
      ParkingSpaceListFieldComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingBookingModalComponent, [{
    type: Component,
    args: [{ selector: "parking-booking-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (id()
                    ? 'APP.CONCIERGE.PARKING_EDIT'
                    : 'APP.CONCIERGE.PARKING_NEW'
                ) | translate
            "
            [loading]="
                loading() ? ('APP.CONCIERGE.PARKING_SAVING' | translate) : ''
            "
            (confirm)="postForm()"
        >
            <form>
                @if (!user) {
                    <div class="mb-4 flex items-center space-x-2">
                        <a-user-search-field
                            [formField]="form.user"
                            class="flex-1"
                        ></a-user-search-field>
                    </div>
                }
                <div class="flex items-center space-x-2">
                    <div class="flex-1">
                        <label for="user-name">{{
                            'FORM.NAME' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [formField]="form.user_name"
                                [placeholder]="'FORM.NAME' | translate"
                            />
                            <mat-error>{{
                                'FORM.NAME_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex-1">
                        <label for="email">{{
                            'FORM.EMAIL' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [formField]="form.user_email"
                                [placeholder]="'FORM.EMAIL' | translate"
                            />
                            <mat-error>{{
                                'FORM.EMAIL_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                </div>
                <div class="relative">
                    <label for="date">{{ 'FORM.DATE' | translate }}</label>
                    <a-date-field [formField]="form.date"></a-date-field>
                    @if (allow_all_day() && !form.duration().disabled()) {
                        <mat-checkbox
                            [formField]="form.all_day"
                            class="absolute -top-2 right-0"
                        >
                            {{ 'COMMON.ALL_DAY' | translate }}
                        </mat-checkbox>
                    }
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
                                [disabled]="form.date().disabled()"
                                [use_24hr]="use_24hr()"
                                [range]="bookable_hours()"
                                [min_duration]="effective_min_duration()"
                            ></a-time-field>
                        </div>
                        <div class="relative w-1/3 flex-1">
                            <label for="end-time"
                                >{{ 'FORM.TIME_END' | translate
                                }}<span>*</span></label
                            >
                            <a-duration-field
                                [formField]="form.duration"
                                [time]="model().date"
                                [max]="max_duration()"
                                [custom_options]="custom_duration_options()"
                                [use_24hr]="use_24hr()"
                                [end_time]="bookable_hours()?.end"
                            >
                            </a-duration-field>
                        </div>
                    </div>
                }
                <label for="parking-space">{{
                    'APP.CONCIERGE.PARKING_SPACE' | translate
                }}</label>
                <parking-space-list-field
                    [formField]="form.resources"
                    class="mb-2"
                ></parking-space-list-field>
                <label for="plate-number">
                    {{ 'BOOKINGS.PARKING_PLATE_NUMBER' | translate }}
                    @if (user) {
                        <span>*</span>
                    }
                </label>
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        [formField]="form.plate_number"
                        [placeholder]="
                            'BOOKINGS.PARKING_PLATE_NUMBER' | translate
                        "
                    />
                    <mat-error>{{
                        'BOOKINGS.PARKING_PLATE_NUMBER_REQUIRED' | translate
                    }}</mat-error>
                </mat-form-field>
                @if (model().notes) {
                    <label for="notes">{{ 'FORM.NOTES' | translate }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <textarea
                            matInput
                            [formField]="form.notes"
                            rows="3"
                            [placeholder]="'FORM.NOTES' | translate"
                        ></textarea>
                    </mat-form-field>
                }
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      FormField,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      DurationFieldComponent,
      TimeFieldComponent,
      MatCheckboxModule,
      DateFieldComponent,
      MatInputModule,
      TranslatePipe,
      UserSearchFieldComponent,
      ParkingSpaceListFieldComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingBookingModalComponent, { className: "ParkingBookingModalComponent", filePath: "apps/concierge/src/app/parking/parking-booking-modal.component.ts", lineNumber: 211 });
})();

// apps/concierge/src/app/parking/parking-fleet-modal.component.ts
function ParkingFleetModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ParkingFleetModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 4)(1, "label", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 8);
    \u0275\u0275element(5, "input", 9);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 10)(11, "div", 11)(12, "label", 12);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-form-field", 13);
    \u0275\u0275element(16, "input", 9);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(18, "mat-error");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 11)(22, "label", 14);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-form-field", 13);
    \u0275\u0275element(26, "input", 9);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "label", 15);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "mat-form-field", 13);
    \u0275\u0275element(32, "input", 9);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "label", 16);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-form-field", 8);
    \u0275\u0275element(38, "textarea", 9);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 17, "APP.CONCIERGE.PARKING_FLEET"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r0.form.name)("placeholder", \u0275\u0275pipeBind1(6, 19, "APP.CONCIERGE.PARKING_FLEET"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 21, "FORM.NAME_REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 23, "BOOKINGS.PARKING_PLATE_NUMBER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r0.form.plate_number)("placeholder", \u0275\u0275pipeBind1(17, 25, "BOOKINGS.PARKING_PLATE_NUMBER"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 27, "APP.CONCIERGE.PARKING_PLATE_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 29, "APP.CONCIERGE.PARKING_FLEET_MODEL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r0.form.car_model)("placeholder", \u0275\u0275pipeBind1(27, 31, "APP.CONCIERGE.PARKING_FLEET_MODEL"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 33, "APP.CONCIERGE.PARKING_CAR_COLOUR"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r0.form.car_colour)("placeholder", \u0275\u0275pipeBind1(33, 35, "APP.CONCIERGE.PARKING_CAR_COLOUR"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 37, "FORM.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r0.form.notes)("placeholder", \u0275\u0275pipeBind1(39, 39, "FORM.NOTES"));
    \u0275\u0275control();
  }
}
function ParkingFleetModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 5);
    \u0275\u0275element(1, "mat-spinner", 17);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.PARKING_FLEET_SAVE"));
  }
}
function ParkingFleetModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 6)(1, "button", 18);
    \u0275\u0275listener("click", function ParkingFleetModalComponent_Conditional_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.postForm());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.SAVE"), " ");
  }
}
var ParkingFleetModalComponent = class _ParkingFleetModalComponent extends AsyncHandler {
  constructor() {
    super();
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.event = new EventEmitter();
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.id = computed(
      () => this._data?.id || "",
      ...ngDevMode ? [{ debugName: "id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.model = signal(
      {
        id: "",
        name: "",
        plate_number: "",
        car_model: "",
        car_colour: "",
        notes: ""
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (p) => {
      required(p.name);
      required(p.plate_number);
    });
    const data = this._data;
    if (data) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        id: data.id ?? m.id,
        name: data.name ?? m.name,
        plate_number: data.plate_number ?? m.plate_number,
        car_model: data.car_model ?? m.car_model,
        car_colour: data.car_colour ?? m.car_colour,
        notes: data.notes ?? m.notes
      }));
    }
  }
  postForm() {
    this.form().markAsTouched();
    if (!this.form().valid())
      return;
    this.loading.set(true);
    this._dialog_ref.disableClose = true;
    this.event.emit({ reason: "done", metadata: this.model() });
  }
  static {
    this.\u0275fac = function ParkingFleetModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingFleetModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingFleetModalComponent, selectors: [["parking-fleet-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 6, consts: [[1, "w-md"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "min-h-12", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "max-h-[65vh]", "flex-col", "overflow-auto", "p-4"], [1, "user-y-2", "flex", "flex-col", "items-center", "justify-center", "p-8"], [1, "border-base-300", "flex", "items-center", "justify-end", "space-x-2", "border-t", "px-4", "py-2"], ["for", "name"], ["appearance", "outline"], ["matInput", "", 3, "formField", "placeholder"], [1, "flex", "items-center", "space-x-2"], [1, "w-1/3", "flex-1"], ["for", "plate-number"], ["appearance", "outline", 1, "w-full"], ["for", "car-model"], ["for", "car-colour"], ["for", "notes"], ["diameter", "32"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"]], template: function ParkingFleetModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, ParkingFleetModalComponent_Conditional_5_Template, 3, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, ParkingFleetModalComponent_Conditional_6_Template, 40, 41, "main", 4)(7, ParkingFleetModalComponent_Conditional_7_Template, 5, 3, "main", 5);
        \u0275\u0275conditionalCreate(8, ParkingFleetModalComponent_Conditional_8_Template, 4, 3, "footer", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, ctx.id() ? "APP.CONCIERGE.PARKING_FLEET_EDIT" : "APP.CONCIERGE.PARKING_FLEET_NEW"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 6 : 7);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 8 : -1);
      }
    }, dependencies: [
      IconComponent,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      FormField,
      MatDialogModule,
      MatDialogClose,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingFleetModalComponent, [{
    type: Component,
    args: [{ selector: "parking-fleet-modal", template: `
        <div class="w-md">
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 min-h-12 w-[calc(100%-1rem)] rounded-sm border-none p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    {{
                        (id()
                            ? 'APP.CONCIERGE.PARKING_FLEET_EDIT'
                            : 'APP.CONCIERGE.PARKING_FLEET_NEW'
                        ) | translate
                    }}
                </h2>
                @if (!loading()) {
                    <button icon matRipple mat-dialog-close>
                        <icon>close</icon>
                    </button>
                }
            </header>
            @if (!loading()) {
                <main class="flex max-h-[65vh] flex-col overflow-auto p-4">
                    <label for="name">{{
                        'APP.CONCIERGE.PARKING_FLEET' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [formField]="form.name"
                            [placeholder]="
                                'APP.CONCIERGE.PARKING_FLEET' | translate
                            "
                        />
                        <mat-error>{{
                            'FORM.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                    <div class="flex items-center space-x-2">
                        <div class="w-1/3 flex-1">
                            <label for="plate-number">{{
                                'BOOKINGS.PARKING_PLATE_NUMBER' | translate
                            }}</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    [formField]="form.plate_number"
                                    [placeholder]="
                                        'BOOKINGS.PARKING_PLATE_NUMBER'
                                            | translate
                                    "
                                />
                                <mat-error>{{
                                    'APP.CONCIERGE.PARKING_PLATE_REQUIRED'
                                        | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                        <div class="w-1/3 flex-1">
                            <label for="car-model">{{
                                'APP.CONCIERGE.PARKING_FLEET_MODEL' | translate
                            }}</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    [formField]="form.car_model"
                                    [placeholder]="
                                        'APP.CONCIERGE.PARKING_FLEET_MODEL'
                                            | translate
                                    "
                                />
                            </mat-form-field>
                        </div>
                    </div>
                    <label for="car-colour">{{
                        'APP.CONCIERGE.PARKING_CAR_COLOUR' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            [formField]="form.car_colour"
                            [placeholder]="
                                'APP.CONCIERGE.PARKING_CAR_COLOUR' | translate
                            "
                        />
                    </mat-form-field>
                    <label for="notes">{{ 'FORM.NOTES' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <textarea
                            matInput
                            [formField]="form.notes"
                            [placeholder]="'FORM.NOTES' | translate"
                        ></textarea>
                    </mat-form-field>
                </main>
            } @else {
                <main
                    class="user-y-2 flex flex-col items-center justify-center p-8"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ 'APP.CONCIERGE.PARKING_FLEET_SAVE' | translate }}</p>
                </main>
            }
            @if (!loading()) {
                <footer
                    class="border-base-300 flex items-center justify-end space-x-2 border-t px-4 py-2"
                >
                    <button btn matRipple class="w-32" (click)="postForm()">
                        {{ 'COMMON.SAVE' | translate }}
                    </button>
                </footer>
            }
        </div>
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatProgressSpinnerModule,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      FormField,
      MatDialogModule
    ] }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingFleetModalComponent, { className: "ParkingFleetModalComponent", filePath: "apps/concierge/src/app/parking/parking-fleet-modal.component.ts", lineNumber: 149 });
})();

// apps/workplace/src/app/components/fullscreen-embed.component.ts
var FullscreenEmbedComponent = class _FullscreenEmbedComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this.embed_url = signal(
      this._data,
      ...ngDevMode ? [{ debugName: "embed_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function FullscreenEmbedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FullscreenEmbedComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FullscreenEmbedComponent, selectors: [["fullscreen-embed"]], decls: 6, vars: 4, consts: [[1, "relative", "h-screen", "w-screen", "bg-base-200"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "right-2", "top-2", "rounded", "border", "border-base-300", "bg-base-100"], [1, "h-full", "w-full", 3, "src"]], template: function FullscreenEmbedComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "button", 1)(2, "icon");
        \u0275\u0275text(3, "close");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(4, "iframe", 2);
        \u0275\u0275pipe(5, "safe");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("src", \u0275\u0275pipeBind2(5, 1, ctx.embed_url(), "resource"), \u0275\u0275sanitizeResourceUrl);
      }
    }, dependencies: [IconComponent, MatRippleModule, MatRipple, MatDialogModule, MatDialogClose, SafePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FullscreenEmbedComponent, [{
    type: Component,
    args: [{ selector: "fullscreen-embed", template: `
        <div class="relative h-screen w-screen bg-base-200">
            <button
                icon
                matRipple
                mat-dialog-close
                class="absolute right-2 top-2 rounded border border-base-300 bg-base-100"
            >
                <icon>close</icon>
            </button>
            <iframe
                class="h-full w-full"
                [src]="embed_url() | safe: 'resource'"
            ></iframe>
        </div>
    `, imports: [IconComponent, MatRippleModule, SafePipe, MatDialogModule] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FullscreenEmbedComponent, { className: "FullscreenEmbedComponent", filePath: "apps/workplace/src/app/components/fullscreen-embed.component.ts", lineNumber: 27 });
})();

// apps/workplace/src/app/book/parking-request-flow/parking-request-form-details.component.ts
var _c07 = () => ({ standalone: true });
var _c14 = (a0) => ({ weeks: a0 });
function _forTrack02($index, $item) {
  return this.trackById($item);
}
var _forTrack1 = ($index, $item) => $item.index;
var _forTrack2 = ($index, $item) => $item.value;
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 21);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 21);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_21_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_21_For_6_Template_button_click_0_listener($event) {
      const day_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.toggleDay(day_r5.index));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("border-info", ctx_r2.isDaySelected(day_r5.index))("bg-info", ctx_r2.isDaySelected(day_r5.index))("text-info-content", ctx_r2.isDaySelected(day_r5.index))("border-base-300", !ctx_r2.isDaySelected(day_r5.index));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 9, day_r5.date, "EEE"), " ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_21_Conditional_7_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_21_Conditional_7_For_5_Template_button_click_0_listener($event) {
      const w_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.setNumWeeks(w_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("border-info", ctx_r2.num_weeks() === w_r7)("bg-info", ctx_r2.num_weeks() === w_r7)("text-info-content", ctx_r2.num_weeks() === w_r7)("border-base-300", ctx_r2.num_weeks() !== w_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 9, w_r7 === 1 ? "BOOKINGS.PARKING_FREQUENCY_WEEK" : "BOOKINGS.PARKING_FREQUENCY_WEEKS", \u0275\u0275pureFunction1(12, _c14, w_r7)), " ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_21_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 26);
    \u0275\u0275repeaterCreate(4, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_21_Conditional_7_For_5_Template, 3, 14, "button", 31, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "BOOKINGS.PARKING_FREQUENCY_NUM_WEEKS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.week_options());
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_21_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "div", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, day_r8, "EEEE, d MMMM yyyy"), " ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 26);
    \u0275\u0275repeaterCreate(5, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_21_For_6_Template, 3, 12, "button", 27, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_21_Conditional_7_Template, 6, 3);
    \u0275\u0275elementStart(8, "div", 25);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 28);
    \u0275\u0275repeaterCreate(12, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_21_For_13_Template, 4, 4, "div", 29, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "BOOKINGS.PARKING_FREQUENCY_SELECT_DAYS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.WEEKDAY_OPTIONS);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.max_weeks() > 1 ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 5, "BOOKINGS.PARKING_FREQUENCY_DATES_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.weekdays);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 19);
    \u0275\u0275listener("click", function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setBookingFrequency("single"));
    });
    \u0275\u0275elementStart(2, "div", 20);
    \u0275\u0275conditionalCreate(3, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_3_Template, 1, 0, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 22);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 23);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 19);
    \u0275\u0275listener("click", function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Template_div_click_11_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setBookingFrequency("daily"));
    });
    \u0275\u0275elementStart(12, "div", 20);
    \u0275\u0275conditionalCreate(13, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_13_Template, 1, 0, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 12)(15, "div", 22);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 23);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_21_Template, 14, 7, "div", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-info", ctx_r2.booking_frequency() === "single")("border-base-300", ctx_r2.booking_frequency() !== "single");
    \u0275\u0275advance();
    \u0275\u0275classProp("border-info", ctx_r2.booking_frequency() === "single")("border-base-300", ctx_r2.booking_frequency() !== "single");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.booking_frequency() === "single" ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 23, "BOOKINGS.PARKING_FREQUENCY_SINGLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 25, "BOOKINGS.PARKING_FREQUENCY_SINGLE_DESC"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-info", ctx_r2.booking_frequency() === "daily")("border-base-300", ctx_r2.booking_frequency() !== "daily");
    \u0275\u0275advance();
    \u0275\u0275classProp("border-info", ctx_r2.booking_frequency() === "daily")("border-base-300", ctx_r2.booking_frequency() !== "daily");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.booking_frequency() === "daily" ? 13 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 27, "BOOKINGS.PARKING_FREQUENCY_DAILY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 29, "BOOKINGS.PARKING_FREQUENCY_DAILY_DESC"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.booking_frequency() === "daily" ? 21 : -1);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_For_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 21);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_For_19_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, type_r10.badge));
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("click", function ParkingRequestFormDetailsComponent_Conditional_0_For_19_Template_div_click_0_listener() {
      const type_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setRequestType(type_r10.id));
    });
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275conditionalCreate(2, ParkingRequestFormDetailsComponent_Conditional_0_For_19_Conditional_2_Template, 1, 0, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 34)(5, "span", 22);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, ParkingRequestFormDetailsComponent_Conditional_0_For_19_Conditional_8_Template, 3, 3, "span", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 23);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const type_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-info", ctx_r2.model().request_type === type_r10.id)("border-base-300", ctx_r2.model().request_type !== type_r10.id);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-info", ctx_r2.model().request_type === type_r10.id)("border-base-300", ctx_r2.model().request_type !== type_r10.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.model().request_type === type_r10.id ? 2 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 12, type_r10.name));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(type_r10.badge ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 14, type_r10.description), " ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h4", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-user-search-field", 36);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "BOOKINGS.REQUEST_SPACE_FOR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r2.form().user)("guests", ctx_r2.allow_any_host() || ctx_r2.can_book_for_anyone() && ctx_r2.host_book_as() !== "internals")("guests_only", !ctx_r2.allow_any_host() && ctx_r2.can_book_for_anyone() && ctx_r2.host_book_as() === "externals")("disable_search", !ctx_r2.allow_any_host() && ctx_r2.can_book_for_anyone() && ctx_r2.host_book_as() === "externals")("allow_externals", ctx_r2.allow_any_host() || ctx_r2.can_book_for_anyone() && ctx_r2.host_book_as() !== "internals");
    \u0275\u0275control();
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "label", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 14);
    \u0275\u0275element(5, "textarea", 37);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "FORM.NOTES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r2.form().notes);
    \u0275\u0275control();
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_22_Conditional_30_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 51)(4, "button", 52);
    \u0275\u0275listener("click", function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_22_Conditional_30_For_2_Template_button_click_4_listener() {
      const $index_r13 = \u0275\u0275restoreView(_r12).$index;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.previewSupportingDoc($index_r13));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 52);
    \u0275\u0275listener("click", function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_22_Conditional_30_For_2_Template_button_click_7_listener() {
      const $index_r13 = \u0275\u0275restoreView(_r12).$index;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.removeSupportingDoc($index_r13));
    });
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const file_name_r14 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", file_name_r14, " ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_22_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275repeaterCreate(1, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_22_Conditional_30_For_2_Template, 10, 1, "div", 49, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.supporting_doc_names());
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "icon");
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 39)(7, "div")(8, "label", 40);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementStart(11, "span", 41);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "textarea", 42);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div")(16, "div", 43);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "label", 44)(20, "icon", 45);
    \u0275\u0275text(21, "upload_file");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div")(23, "div", 22);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 46);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "input", 47);
    \u0275\u0275listener("change", function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_22_Template_input_change_29_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSupportingDocsSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(30, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_22_Conditional_30_Template, 3, 0, "div", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 7, "BOOKINGS.P2_SPECIAL_NEEDS_DETAILS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 9, "BOOKINGS.P2_REASON_FOR_REQUEST"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(14, 11, "BOOKINGS.P2_REASON_PLACEHOLDER"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 13, "BOOKINGS.P2_ATTACH_SUPPORTING_DOCS"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 15, "BOOKINGS.P2_UPLOAD_FILE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 17, "BOOKINGS.P2_ACCEPTED_FORMATS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.supporting_doc_names().length ? 30 : -1);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const forced_time_r15 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(2, 3, ctx_r2.selected_request_type()?.name), ": ", \u0275\u0275pipeBind2(3, 5, ctx_r2.shiftTime(forced_time_r15.start_time), ctx_r2.time_format), " - ", \u0275\u0275pipeBind2(4, 8, ctx_r2.shiftTime(forced_time_r15.end_time), ctx_r2.time_format), " ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_31_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "date");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate2(" : ", \u0275\u0275pipeBind2(1, 2, ctx_r2.shiftTime(ctx_r2.all_day_shift_window().start_time), ctx_r2.time_format), " - ", \u0275\u0275pipeBind2(2, 5, ctx_r2.shiftTime(ctx_r2.all_day_shift_window().end_time), ctx_r2.time_format), " ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275conditionalCreate(3, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_31_Conditional_3_Template, 3, 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "BOOKINGS.PARKING_SHIFT_ALL_DAY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.show_all_day_shift_window() ? 3 : -1);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
  }
  if (rf & 2) {
    const option_r17 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(1, 3, option_r17.name), " (", \u0275\u0275pipeBind2(2, 5, ctx_r2.shiftTime(option_r17.start_time), ctx_r2.time_format), " - ", \u0275\u0275pipeBind2(3, 8, ctx_r2.shiftTime(option_r17.end_time), ctx_r2.time_format), ") ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(1, 3, "BOOKINGS.PARKING_SHIFT_CUSTOM"), " (", \u0275\u0275pipeBind2(2, 5, ctx_r2.shiftTime(ctx_r2.start_time_mins()), ctx_r2.time_format), " - ", \u0275\u0275pipeBind2(3, 8, ctx_r2.shiftTime(ctx_r2.end_time_mins()), ctx_r2.time_format), ") ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_2_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r18 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("value", option_r18.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(2, 4, option_r18.name), " (", \u0275\u0275pipeBind2(3, 6, ctx_r2.shiftTime(option_r18.start_time), ctx_r2.time_format), " - ", \u0275\u0275pipeBind2(4, 9, ctx_r2.shiftTime(option_r18.end_time), ctx_r2.time_format), ") ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("value", ctx_r2.CUSTOM_SHIFT_ID);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(2, 4, "BOOKINGS.PARKING_SHIFT_CUSTOM"), " (", \u0275\u0275pipeBind2(3, 6, ctx_r2.shiftTime(ctx_r2.custom_start_time_mins()), ctx_r2.time_format), " - ", \u0275\u0275pipeBind2(4, 9, ctx_r2.shiftTime(ctx_r2.custom_end_time_mins()), ctx_r2.time_format), ") ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 14)(4, "mat-select", 54);
    \u0275\u0275listener("selectionChange", function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_2_Template_mat_select_selectionChange_4_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setShiftType($event.value));
    });
    \u0275\u0275elementStart(5, "mat-select-trigger");
    \u0275\u0275conditionalCreate(6, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_2_Conditional_6_Template, 4, 11)(7, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_2_Conditional_7_Template, 4, 11);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_2_For_9_Template, 5, 12, "mat-option", 16, _forTrack02, true);
    \u0275\u0275conditionalCreate(10, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_2_Conditional_10_Template, 5, 12, "mat-option", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, "BOOKINGS.PARKING_SHIFT_TYPE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r2.shift_type());
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_6_0 = ctx_r2.selected_shift_option()) ? 6 : 7, tmp_6_0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.shift_options());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.allow_custom_shift() ? 10 : -1);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r19 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, "BOOKINGS.PARKING_SHIFT_TYPE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(5, 6, option_r19.name), " (", \u0275\u0275pipeBind2(6, 8, ctx_r2.shiftTime(option_r19.start_time), ctx_r2.time_format), " - ", \u0275\u0275pipeBind2(7, 11, ctx_r2.shiftTime(option_r19.end_time), ctx_r2.time_format), ") ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_4_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r21 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("value", opt_r21.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 2, ctx_r2.shiftTime(opt_r21.value), ctx_r2.time_format));
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_4_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r22 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("value", opt_r22.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 2, ctx_r2.shiftTime(opt_r22.value), ctx_r2.time_format));
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 12)(2, "label", 13);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 14)(6, "mat-select", 54);
    \u0275\u0275listener("selectionChange", function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_4_Template_mat_select_selectionChange_6_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setStartTime($event.value));
    });
    \u0275\u0275repeaterCreate(7, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_4_For_8_Template, 3, 5, "mat-option", 16, _forTrack2);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 12)(10, "label", 13);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-form-field", 14)(14, "mat-select", 54);
    \u0275\u0275listener("selectionChange", function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_4_Template_mat_select_selectionChange_14_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setEndTime($event.value));
    });
    \u0275\u0275repeaterCreate(15, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_4_For_16_Template, 3, 5, "mat-option", 16, _forTrack2);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "FORM.TIME_START"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r2.start_time_mins());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.time_options());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 6, "FORM.TIME_END"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r2.end_time_mins());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.time_options());
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div");
    \u0275\u0275conditionalCreate(2, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_2_Template, 11, 6)(3, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_3_Template, 8, 14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_4_Template, 17, 8, "div", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.show_shift_select() ? 2 : (tmp_3_0 = ctx_r2.selected_shift_option()) ? 3 : -1, tmp_3_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.show_custom_time_inputs() ? 4 : -1);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.region_name, " ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_For_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 21);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_For_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "icon", 60);
    \u0275\u0275text(2, "desk");
    \u0275\u0275elementEnd()();
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_For_10_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r24 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getBayInfo(bld_r24), " ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_For_10_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275text(1, " Checking... ");
    \u0275\u0275elementEnd();
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_For_10_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "icon", 62);
    \u0275\u0275text(3, "car_lock");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 63);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    const percent_r25 = ctx_r2.usage_ratio();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r2.spaces_in_use_count(), " of ", ctx_r2.total_space_count(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-error", percent_r25 === 1)("text-error-content", percent_r25 === 1)("bg-warning", percent_r25 > 0.5 && percent_r25 < 1)("text-warning-content", percent_r25 > 0.5 && percent_r25 < 1)("bg-success", percent_r25 < 0.5)("text-success-content", percent_r25 < 0.5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 15, percent_r25 * 100, "1.0-0"), "% ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_For_10_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275conditionalCreate(1, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_For_10_Conditional_9_Conditional_1_Template, 2, 0, "div", 61)(2, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_For_10_Conditional_9_Conditional_2_Template, 7, 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.availability_loading() ? 1 : ctx_r2.available_space_count() !== null ? 2 : -1);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275listener("click", function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_For_10_Template_div_click_0_listener() {
      const bld_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setBuilding(bld_r24));
    });
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275conditionalCreate(2, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_For_10_Conditional_2_Template, 1, 0, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_For_10_Conditional_3_Template, 3, 0, "div", 57);
    \u0275\u0275elementStart(4, "div", 58)(5, "div")(6, "div", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_For_10_Conditional_8_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_For_10_Conditional_9_Template, 3, 1, "div", 59);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bld_r24 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("border-info", ctx_r2.building()?.id === bld_r24.id)("border-base-300", ctx_r2.building()?.id !== bld_r24.id);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-info", ctx_r2.building()?.id === bld_r24.id)("border-base-300", ctx_r2.building()?.id !== bld_r24.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.building()?.id === bld_r24.id ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.desk_booking_building_id() === bld_r24.id ? 3 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", bld_r24.display_name || bld_r24.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.getBayInfo(bld_r24) ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.building()?.id === bld_r24.id && !ctx_r2.hide_availability_counter() ? 9 : -1);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "settings-toggle", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formField", ctx_r2.form().prefer_booked_location_first);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "BOOKINGS.PARKING_PREFER_BOOKED_LOCATION_FIRST"), " ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "icon");
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 3);
    \u0275\u0275conditionalCreate(7, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_Conditional_7_Template, 2, 1, "div", 25);
    \u0275\u0275elementStart(8, "div", 5);
    \u0275\u0275repeaterCreate(9, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_For_10_Template, 10, 13, "div", 55, _forTrack02, true);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_Conditional_11_Template, 3, 4, "settings-toggle", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, "BOOKINGS.PARKING_LOCATION_PREFERENCE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.region_name ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.building_list());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.hide_prefer_toggle() ? 11 : -1);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_34_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getBayInfo(ctx_r2.building()), " ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_34_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1, " Checking... ");
    \u0275\u0275elementEnd();
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_34_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "icon", 62);
    \u0275\u0275text(3, "car_lock");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 63);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    const percent_r26 = ctx_r2.usage_ratio();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r2.spaces_in_use_count() || 0, " of ", ctx_r2.total_space_count() || 0, " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-error", percent_r26 === 1)("text-error-content", percent_r26 === 1)("bg-warning", percent_r26 > 0.5 && percent_r26 < 1)("text-warning-content", percent_r26 > 0.5 && percent_r26 < 1)("bg-success", percent_r26 < 0.5)("text-success-content", percent_r26 < 0.5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 15, percent_r26 * 100, "2.0-0"), "% ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_34_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275conditionalCreate(1, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_34_Conditional_11_Conditional_1_Template, 2, 0, "div", 68)(2, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_34_Conditional_11_Conditional_2_Template, 7, 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.availability_loading() ? 1 : 2);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h3", 64)(2, "icon", 65);
    \u0275\u0275text(3, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 66)(7, "div")(8, "div", 22);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_34_Conditional_10_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_34_Conditional_11_Template, 3, 1, "div", 67);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "BOOKINGS.PARKING_LOCATION_PREFERENCE"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.building()?.display_name || ctx_r2.building()?.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.getBayInfo(ctx_r2.building()) ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.hide_availability_counter() ? 11 : -1);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_For_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vtype_r27 = ctx.$implicit;
    \u0275\u0275property("value", vtype_r27.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, vtype_r27.name));
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_For_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 16)(1, "div", 69)(2, "span", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 70);
    \u0275\u0275listener("mousedown", function ParkingRequestFormDetailsComponent_Conditional_0_For_62_Template_button_mousedown_4_listener($event) {
      return $event.stopPropagation();
    })("click", function ParkingRequestFormDetailsComponent_Conditional_0_For_62_Template_button_click_4_listener($event) {
      const plate_number_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removePlateNumber($event, plate_number_r29));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const plate_number_r29 = ctx.$implicit;
    \u0275\u0275property("value", plate_number_r29);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(plate_number_r29);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Remove " + plate_number_r29);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "BOOKINGS.PARKING_PLATE_NUMBER_REQUIRED"), " ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_64_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r30 = ctx.$implicit;
    \u0275\u0275property("value", option_r30.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, option_r30.name));
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "h3", 71)(2, "icon", 65);
    \u0275\u0275text(3, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 14)(7, "mat-select", 72);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275repeaterCreate(9, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_64_For_10_Template, 3, 4, "mat-option", 16, _forTrack02, true);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, "BOOKINGS.PARKING_APPROVER_GROUP_TITLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r2.form().approver_group)("placeholder", \u0275\u0275pipeBind1(8, 5, "BOOKINGS.PARKING_APPROVER_GROUP_PLACEHOLDER"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.filtered_approver_group_options());
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_65_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_65_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-button", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r31 = ctx.$implicit;
    \u0275\u0275property("value", option_r31.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, option_r31.name), " ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_65_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 77);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "BOOKINGS.PARKING_SPACE_RESTRICTION_REQUIRED"), " ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_65_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-group", 76);
    \u0275\u0275repeaterCreate(1, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_65_Conditional_11_For_2_Template, 3, 4, "mat-radio-button", 16, _forTrack02, true);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(3, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_65_Conditional_11_Conditional_3_Template, 3, 3, "p", 77);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formField", ctx_r2.form().space_restrictions);
    \u0275\u0275attribute("aria-required", ctx_r2.require_space_restriction())("aria-invalid", ctx_r2.form().space_restrictions().invalid());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.space_restriction_options());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.require_space_restriction() && ctx_r2.form().space_restrictions().touched() && ctx_r2.form().space_restrictions().invalid() ? 3 : -1);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_65_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 79);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("ngModelChange", function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_65_Conditional_12_For_2_Template_settings_toggle_ngModelChange_0_listener($event) {
      const option_r33 = \u0275\u0275restoreView(_r32).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.setExtraRestriction(option_r33.id, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const option_r33 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 3, option_r33.name))("ngModel", ctx_r2.isExtraRestrictionSelected(option_r33.id))("ngModelOptions", \u0275\u0275pureFunction0(5, _c07));
    \u0275\u0275control();
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_65_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275repeaterCreate(1, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_65_Conditional_12_For_2_Template, 2, 6, "settings-toggle", 78, _forTrack02, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.extra_space_restriction_options());
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "icon");
    \u0275\u0275text(2, "tune");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 73);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275conditionalCreate(6, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_65_Conditional_6_Template, 2, 0, "span", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 3)(8, "p", 23);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_65_Conditional_11_Template, 4, 4);
    \u0275\u0275conditionalCreate(12, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_65_Conditional_12_Template, 3, 0, "div", 75);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "BOOKINGS.PARKING_SPACE_RESTRICTIONS_TITLE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.require_space_restriction() ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 7, "BOOKINGS.PARKING_SPACE_RESTRICTIONS_DESC"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.space_restriction_options().length ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.extra_space_restriction_options().length ? 12 : -1);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "icon");
    \u0275\u0275text(3, "date_range");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 3);
    \u0275\u0275element(8, "a-date-field", 4);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(9, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Template, 22, 31, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 2)(11, "icon");
    \u0275\u0275text(12, "ballot");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 3)(17, "div", 5);
    \u0275\u0275repeaterCreate(18, ParkingRequestFormDetailsComponent_Conditional_0_For_19_Template, 12, 16, "div", 6, _forTrack02, true);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_20_Template, 5, 8, "div", 7);
    \u0275\u0275conditionalCreate(21, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_21_Template, 6, 4, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(22, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_22_Template, 31, 19);
    \u0275\u0275elementStart(23, "div", 2)(24, "icon");
    \u0275\u0275text(25, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 3);
    \u0275\u0275conditionalCreate(30, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_30_Template, 5, 11, "div", 8)(31, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_31_Template, 4, 4, "div", 8)(32, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Template, 5, 2, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(33, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_Template, 12, 5)(34, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_34_Template, 12, 6, "div", 10);
    \u0275\u0275elementStart(35, "div", 2)(36, "icon");
    \u0275\u0275text(37, "directions_car");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 3)(42, "div", 11)(43, "div", 12)(44, "label", 13);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "mat-form-field", 14)(48, "mat-select", 15);
    \u0275\u0275repeaterCreate(49, ParkingRequestFormDetailsComponent_Conditional_0_For_50_Template, 3, 4, "mat-option", 16, _forTrack02, true);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 12)(52, "label", 13);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275conditionalCreate(55, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_55_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "mat-form-field", 14)(57, "input", 17);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275listener("ngModelChange", function ParkingRequestFormDetailsComponent_Conditional_0_Template_input_ngModelChange_57_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setPlateNumber($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(59, "mat-autocomplete", null, 0);
    \u0275\u0275repeaterCreate(61, ParkingRequestFormDetailsComponent_Conditional_0_For_62_Template, 7, 3, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(63, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_63_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(64, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_64_Template, 11, 7, "div", 18);
    \u0275\u0275conditionalCreate(65, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_65_Template, 13, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_14_0;
    const plate_number_auto_r34 = \u0275\u0275reference(60);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 24, "BOOKINGS.PARKING_BOOKING_FREQUENCY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r2.form().date)("to", ctx_r2.end_date())("timezone", ctx_r2.timezone);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.allow_recurrence() ? 9 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 26, "BOOKINGS.PARKING_REQUEST_TYPE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.request_types());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.show_host_select() ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.show_notes() ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.model().request_type === "special" && ctx_r2.show_special_needs() ? 22 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 28, "BOOKINGS.PARKING_SHIFT_SELECTION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_14_0 = ctx_r2.forced_request_time()) ? 30 : ctx_r2.is_all_day_forced() ? 31 : 32, tmp_14_0);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.hasMultipleBuildings(ctx_r2.building_list()) ? 33 : 34);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 30, "BOOKINGS.PARKING_VEHICLE_DETAILS"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 32, "BOOKINGS.PARKING_VEHICLE_TYPE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r2.form().vehicle_type);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.vehicle_type_options());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(54, 34, "BOOKINGS.PARKING_REGISTRATION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.require_plate_number() ? 55 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.model().plate_number)("ngModelOptions", \u0275\u0275pureFunction0(38, _c07))("matAutocomplete", plate_number_auto_r34)("placeholder", \u0275\u0275pipeBind1(58, 36, "BOOKINGS.PARKING_REGISTRATION_PLACEHOLDER"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.plate_number_options());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.showPlateNumberError() ? 63 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.filtered_approver_group_options().length && !ctx_r2.is_auto_approved() ? 64 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.space_restriction_options().length || ctx_r2.extra_space_restriction_options().length ? 65 : -1);
  }
}
var SHIFT_PRESETS = {
  day_worker: { start: 420, end: 1020 },
  day_shift_12hr: { start: 330, end: 1110 },
  night_shift_12hr: { start: 1050, end: 390 },
  half_day_am: { start: 420, end: 720 },
  half_day_pm: { start: 750, end: 1020 }
};
var CUSTOM_SHIFT_ID = "custom";
var ALL_DAY_SHIFT_ID = "all_day";
var ALL_DAY_START_MINS = 0;
var ALL_DAY_END_MINS = 1440;
var DEFAULT_DAY_DURATION_MINS = 540;
var DEFAULT_SHIFT_OPTIONS = [
  {
    id: "day_worker",
    name: "BOOKINGS.PARKING_SHIFT_DAY_WORKER",
    start_time: SHIFT_PRESETS.day_worker.start,
    end_time: SHIFT_PRESETS.day_worker.end
  },
  {
    id: "day_shift_12hr",
    name: "BOOKINGS.PARKING_SHIFT_DAY_12HR",
    start_time: SHIFT_PRESETS.day_shift_12hr.start,
    end_time: SHIFT_PRESETS.day_shift_12hr.end
  },
  {
    id: "night_shift_12hr",
    name: "BOOKINGS.PARKING_SHIFT_NIGHT_12HR",
    start_time: SHIFT_PRESETS.night_shift_12hr.start,
    end_time: SHIFT_PRESETS.night_shift_12hr.end
  },
  {
    id: "half_day_am",
    name: "BOOKINGS.PARKING_SHIFT_HALF_DAY_AM",
    start_time: SHIFT_PRESETS.half_day_am.start,
    end_time: SHIFT_PRESETS.half_day_am.end
  },
  {
    id: "half_day_pm",
    name: "BOOKINGS.PARKING_SHIFT_HALF_DAY_PM",
    start_time: SHIFT_PRESETS.half_day_pm.start,
    end_time: SHIFT_PRESETS.half_day_pm.end
  }
];
var DEFAULT_VEHICLE_TYPE_OPTIONS = [
  { id: "car", name: "BOOKINGS.PARKING_VEHICLE_CAR" },
  { id: "bike", name: "BOOKINGS.PARKING_VEHICLE_BIKE" },
  { id: "van", name: "BOOKINGS.PARKING_VEHICLE_VAN" },
  { id: "truck", name: "BOOKINGS.PARKING_VEHICLE_TRUCK" },
  { id: "other", name: "BOOKINGS.PARKING_VEHICLE_OTHER" }
];
var ParkingRequestFormDetailsComponent = class _ParkingRequestFormDetailsComponent extends AsyncHandler {
  constructor() {
    super();
    this._prefilled_plate_number = "";
    this._parking = inject(ParkingService);
    this._injector = inject(Injector);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._uploads = inject(UploadsService);
    this._dialog = inject(MatDialog);
    this._saved_shift_state = null;
    this._removed_plate_numbers = signal(
      [],
      ...ngDevMode ? [{ debugName: "_removed_plate_numbers" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._selected_shift_duration = signal(
      0,
      ...ngDevMode ? [{ debugName: "_selected_shift_duration" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._user_selected_shift = false;
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
    this.show_special_needs = input(
      true,
      ...ngDevMode ? [{ debugName: "show_special_needs" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.force_show_host_select = input(
      false,
      ...ngDevMode ? [{ debugName: "force_show_host_select" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.force_allow_any_host = input(
      false,
      ...ngDevMode ? [{ debugName: "force_allow_any_host" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.building = this._org.active_building;
    this.hidden_buildings = settingSignal("parking.hidden_buildings", []);
    this.building_list = computed(
      () => {
        const hidden_ids = new Set(this.hidden_buildings() || []);
        const levels = this._org.level_list();
        return (this._org.active_buildings() || []).filter((bld) => !hidden_ids.has(bld.id) && (levels || []).some((lvl) => lvl.parent_id === bld.id && lvl.tags.includes("parking")));
      },
      ...ngDevMode ? [{ debugName: "building_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.desk_booking_building_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "desk_booking_building_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.available_space_count = signal(
      0,
      ...ngDevMode ? [{ debugName: "available_space_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.total_space_count = signal(
      0,
      ...ngDevMode ? [{ debugName: "total_space_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.availability_loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "availability_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.spaces_in_use_count = computed(
      () => {
        const available = this.available_space_count();
        const total = this.total_space_count();
        if (available === null || total === null)
          return null;
        return Math.max(total - available, 0);
      },
      ...ngDevMode ? [{ debugName: "spaces_in_use_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.usage_percentage = computed(
      () => {
        const used = this.spaces_in_use_count();
        const total = this.total_space_count();
        if (used === null || total === null || total <= 0)
          return 0;
        return Math.round(used / total * 100);
      },
      ...ngDevMode ? [{ debugName: "usage_percentage" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.usage_ratio = computed(
      () => {
        const used = this.spaces_in_use_count();
        const total = this.total_space_count();
        if (used === null || total === null || total <= 0)
          return 0;
        return used / total;
      },
      ...ngDevMode ? [{ debugName: "usage_ratio" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_book_for_anyone = computed(
      () => settingSignal("parking.can_book_for_anyone")() ?? settingSignal("bookings.can_book_for_anyone")(),
      ...ngDevMode ? [{ debugName: "can_book_for_anyone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_book_for_others = computed(
      () => settingSignal("parking.can_book_for_others")() ?? settingSignal("bookings.can_book_for_others")(),
      ...ngDevMode ? [{ debugName: "can_book_for_others" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.available_days = settingSignal("parking.available_period", 14);
    this.allow_recurrence = settingSignal("parking.allow_recurrence", true);
    this.shift_options_setting = settingSignal("parking.request_shift_options", DEFAULT_SHIFT_OPTIONS);
    this.hide_custom_shift = settingSignal("parking.hide_custom_shift", false);
    this.space_restriction_options_setting = settingSignal("parking.request_space_restrictions", []);
    this.extra_space_restriction_options_setting = settingSignal("parking.extra_space_restrictions", []);
    this.approver_groups_setting = settingSignal("parking.approver_groups", []);
    this.vehicle_type_options_setting = settingSignal("parking.vehicle_types", DEFAULT_VEHICLE_TYPE_OPTIONS);
    this.hide_prefer_toggle = settingSignal("parking.hide_prefer_toggle", false);
    this.hide_availability_counter = settingSignal("parking.hide_availability_counter", false);
    this.default_location_from_desk_booking = settingSignal("parking.default_location_from_desk_booking", false);
    this.require_plate_number = settingSignal("parking.require_plate_number", false);
    this.require_space_restriction = settingSignal("parking.require_space_restriction", false);
    this.auto_approved_groups_setting = settingSignal("parking.auto_approved_groups", []);
    this.is_auto_approved = computed(
      () => {
        const auto_groups = this.auto_approved_groups_setting();
        if (!auto_groups?.length)
          return false;
        const user_groups = currentUser()?.groups || [];
        return auto_groups.some((g) => user_groups.includes(g));
      },
      ...ngDevMode ? [{ debugName: "is_auto_approved" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end_date = computed(
      () => endOfDay(addDays(Date.now(), this.available_days())).valueOf(),
      ...ngDevMode ? [{ debugName: "end_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.booking_frequency = signal(
      "single",
      ...ngDevMode ? [{ debugName: "booking_frequency" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_days = signal(
      /* @__PURE__ */ new Set([1, 2, 3, 4, 5]),
      ...ngDevMode ? [{ debugName: "selected_days" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.num_weeks = signal(
      1,
      ...ngDevMode ? [{ debugName: "num_weeks" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.max_weeks = computed(
      () => Math.max(1, Math.floor(this.available_days() / 7)),
      ...ngDevMode ? [{ debugName: "max_weeks" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.week_options = computed(
      () => Array.from({ length: this.max_weeks() }, (_, i) => i + 1),
      ...ngDevMode ? [{ debugName: "week_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.CUSTOM_SHIFT_ID = CUSTOM_SHIFT_ID;
    this.shift_type = signal(
      CUSTOM_SHIFT_ID,
      ...ngDevMode ? [{ debugName: "shift_type" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.start_time_mins = signal(
      480,
      ...ngDevMode ? [{ debugName: "start_time_mins" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end_time_mins = signal(
      1020,
      ...ngDevMode ? [{ debugName: "end_time_mins" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.supporting_doc_names = signal(
      [],
      ...ngDevMode ? [{ debugName: "supporting_doc_names" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.custom_start_time_mins = signal(
      480,
      ...ngDevMode ? [{ debugName: "custom_start_time_mins" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.custom_end_time_mins = signal(
      600,
      ...ngDevMode ? [{ debugName: "custom_end_time_mins" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.shift_options = computed(
      () => {
        const user_groups = currentUser()?.groups || [];
        return this._normaliseShiftOptions(this.shift_options_setting()).filter((option) => {
          if (option.groups?.length) {
            return option.groups.some((group) => user_groups.includes(group));
          }
          return true;
        });
      },
      ...ngDevMode ? [{ debugName: "shift_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_shift_option = computed(
      () => this.shift_options().find((_) => _.id === this.shift_type()),
      ...ngDevMode ? [{ debugName: "selected_shift_option" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_preset_shifts = computed(
      () => this.shift_options().length > 0,
      ...ngDevMode ? [{ debugName: "has_preset_shifts" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.all_day_shift_window = computed(
      () => {
        const [first_option] = this._normaliseShiftOptions(this.shift_options_setting());
        return first_option || {
          start_time: ALL_DAY_START_MINS,
          end_time: ALL_DAY_END_MINS
        };
      },
      ...ngDevMode ? [{ debugName: "all_day_shift_window" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_all_day_shift_window = computed(
      () => this._normaliseShiftOptions(this.shift_options_setting()).length > 0,
      ...ngDevMode ? [{ debugName: "show_all_day_shift_window" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allow_custom_shift = computed(
      () => !this.hide_custom_shift(),
      ...ngDevMode ? [{ debugName: "allow_custom_shift" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_all_day_forced = computed(
      () => !this.has_preset_shifts() && !this.allow_custom_shift(),
      ...ngDevMode ? [{ debugName: "is_all_day_forced" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_shift_select = computed(
      () => {
        if (this.forced_request_time())
          return false;
        if (this.is_all_day_forced())
          return false;
        const preset_count = this.shift_options().length;
        const custom_count = this.allow_custom_shift() ? 1 : 0;
        return preset_count + custom_count > 1;
      },
      ...ngDevMode ? [{ debugName: "show_shift_select" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_custom_time_inputs = computed(
      () => !this.forced_request_time() && this.shift_type() === CUSTOM_SHIFT_ID && this.allow_custom_shift(),
      ...ngDevMode ? [{ debugName: "show_custom_time_inputs" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.vehicle_type_options = computed(
      () => this._normaliseOptions(this.vehicle_type_options_setting()),
      ...ngDevMode ? [{ debugName: "vehicle_type_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.plate_number_options = computed(
      () => {
        const saved_plate_numbers = this._settings.get("plate_numbers");
        const preferred_plate_number = this._settings.get("plate_number");
        const removed_plate_numbers = new Set(this._removed_plate_numbers());
        const plate_numbers = [
          ...typeof preferred_plate_number === "string" ? [preferred_plate_number] : [],
          ...Array.isArray(saved_plate_numbers) ? saved_plate_numbers : []
        ];
        const search = `${this.model?.()?.plate_number || ""}`.trim().toLowerCase();
        return plate_numbers.filter((_) => typeof _ === "string" && _.trim()).map((_) => _.trim()).filter((plate_number, index, list) => list.findIndex((_) => _.toLowerCase() === plate_number.toLowerCase()) === index && plate_number.toLowerCase().includes(search) && !removed_plate_numbers.has(plate_number.toLowerCase()));
      },
      ...ngDevMode ? [{ debugName: "plate_number_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.space_restriction_options = computed(
      () => this._normaliseOptions(this.space_restriction_options_setting()),
      ...ngDevMode ? [{ debugName: "space_restriction_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.extra_space_restriction_options = computed(
      () => this._normaliseOptions(this.extra_space_restriction_options_setting()),
      ...ngDevMode ? [{ debugName: "extra_space_restriction_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_request_type_id = signal(
      "standard",
      ...ngDevMode ? [{ debugName: "selected_request_type_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_request_type = computed(
      () => this.request_types().find((_) => _.id === this.selected_request_type_id()),
      ...ngDevMode ? [{ debugName: "selected_request_type" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.forced_request_time = computed(
      () => this.selected_request_type()?.forced_time || null,
      ...ngDevMode ? [{ debugName: "forced_request_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_notes = computed(
      () => !!this.selected_request_type()?.show_notes,
      ...ngDevMode ? [{ debugName: "show_notes" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.host_book_as = computed(
      () => {
        const book_as = this.selected_request_type()?.book_as;
        return book_as === "internals" || book_as === "externals" || book_as === "both" ? book_as : null;
      },
      ...ngDevMode ? [{ debugName: "host_book_as" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_host_select = computed(
      () => !!this.force_show_host_select() || this.can_book_for_anyone() && !!this.host_book_as(),
      ...ngDevMode ? [{ debugName: "show_host_select" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allow_any_host = computed(
      () => !!this.force_allow_any_host() && !!this.can_book_for_anyone(),
      ...ngDevMode ? [{ debugName: "allow_any_host" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.approver_group_options = computed(
      () => this._normaliseOptions(this.approver_groups_setting()),
      ...ngDevMode ? [{ debugName: "approver_group_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_approver_group_options = computed(
      () => {
        const all_options = this.approver_group_options();
        const allowed_ids = this.selected_request_type()?.approver_groups;
        if (!allowed_ids?.length)
          return all_options;
        return all_options.filter((_) => allowed_ids.includes(_.id));
      },
      ...ngDevMode ? [{ debugName: "filtered_approver_group_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_space_restriction = computed(
      () => {
        const value = this.model()?.space_restrictions;
        if (typeof value === "string" && value)
          return value;
        return false;
      },
      ...ngDevMode ? [{ debugName: "selected_space_restriction" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.WEEKDAY_OPTIONS = [1, 2, 3, 4, 5, 6, 7].map((index) => ({
      index,
      date: addDays(startOfWeek(Date.now(), { weekStartsOn: 1 }), index - 1)
    }));
    this._default_request_types = [
      {
        id: "standard",
        name: "BOOKINGS.PARKING_REQUEST_STANDARD_TITLE",
        description: "BOOKINGS.PARKING_REQUEST_STANDARD_DESC",
        book_as: "internals"
      },
      {
        id: "special",
        name: "BOOKINGS.PARKING_REQUEST_SPECIAL_TITLE",
        description: "BOOKINGS.PARKING_REQUEST_SPECIAL_DESC",
        badge: "BOOKINGS.PARKING_REQUIRES_APPROVAL"
      },
      {
        id: "after_hours",
        name: "BOOKINGS.PARKING_REQUEST_AFTER_HOURS_TITLE",
        description: "BOOKINGS.PARKING_REQUEST_AFTER_HOURS_DESC",
        badge: "BOOKINGS.PARKING_REQUIRES_APPROVAL",
        book_as: "externals"
      }
    ];
    this.request_types_setting = settingSignal("parking.request_types", null);
    this.request_types = computed(
      () => {
        const custom_types = this._normaliseRequestTypes(this.request_types_setting());
        const all_types = custom_types?.length > 0 ? custom_types : this._default_request_types;
        const user_groups = currentUser()?.groups || [];
        return all_types.filter((t) => {
          if (t.groups?.length)
            return t.groups.some((g) => user_groups.includes(g));
          return true;
        });
      },
      ...ngDevMode ? [{ debugName: "request_types" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.time_options = computed(
      () => {
        const values = new Set(Array.from({ length: 48 }, (_, i) => i * 30));
        values.add(this.start_time_mins());
        values.add(this.end_time_mins());
        return [...values].filter((value) => value >= 0 && value < 1440).sort((left, right) => left - right).map((value) => ({ value }));
      },
      ...ngDevMode ? [{ debugName: "time_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      this.shift_options();
      this.allow_custom_shift();
      const form2 = this.form();
      if (!form2)
        return;
      if (this._user_selected_shift)
        return;
      if (this.forced_request_time())
        return;
      this._applyPreferredShift();
    });
    effect(() => {
      const form2 = this.form();
      const model2 = this.model;
      if (!form2 || !model2)
        return;
      const requires_manual_approval = !!this.selected_request_type()?.requires_manual_approval;
      if (model2().requires_manual_approval === requires_manual_approval)
        return;
      model2.update((m) => __spreadProps(__spreadValues({}, m), { requires_manual_approval }));
    });
    effect(() => {
      const form2 = this.form();
      const model2 = this.model;
      const duration = this._selected_shift_duration();
      if (!form2 || !model2 || !duration)
        return;
      const value = model2();
      const date = value.date || Date.now();
      const date_end = date + duration * 60 * 1e3;
      if (value.duration === duration && value.date_end === date_end)
        return;
      this._timeSync(model2)?.updateOptions({
        bookable_hours: null,
        default_duration: duration,
        timezone: this.timezone
      });
      model2.update((m) => __spreadProps(__spreadValues({}, m), {
        duration,
        date_end
      }));
    });
  }
  /** Writable signal holding the raw booking form value */
  get model() {
    return this.model_input();
  }
  get weekdays() {
    if (this.booking_frequency() !== "daily")
      return [];
    return this._computeRecurrenceDates();
  }
  get region_name() {
    return this._org.region?.display_name || this._org.region?.name || "";
  }
  get timezone() {
    return this._settings.get("app.bookings.use_building_timezone") || this._settings.get("app.parking.use_building_timezone") ? this._org.building?.timezone : "";
  }
  get time_format() {
    return this._settings.time_format;
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    const form2 = this.form();
    const model2 = this.model;
    if (!form2 || !model2)
      return;
    this.supporting_doc_names.set((model2().attachments || []).map((url) => this._fileNameFromUrl(url)));
    runInInjectionContext(this._injector, () => effect((onCleanup) => {
      const buildings = this.building_list();
      const bld = this.building();
      let active = true;
      let timeout = null;
      onCleanup(() => {
        active = false;
        if (timeout)
          clearTimeout(timeout);
      });
      if (buildings.length > 0 && !buildings.some((_) => _.id === bld?.id)) {
        timeout = setTimeout(() => {
          if (active)
            this._org.building = buildings[0];
        });
      }
    }));
    const availability_window = computed(() => {
      const v = model2();
      return { date: v.date, duration: v.duration };
    }, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "availability_window" } : (
      /* istanbul ignore next */
      {}
    )), { equal: (a, b) => a.date === b.date && a.duration === b.duration }));
    runInInjectionContext(this._injector, () => effect((onCleanup) => {
      if (this.hide_availability_counter()) {
        this.availability_loading.set(false);
        return;
      }
      const bld = this.building();
      const spaces = this._parking.spaces();
      const { date, duration } = availability_window();
      let active = true;
      const timeout = setTimeout(async () => {
        if (!active)
          return;
        if (!bld?.id) {
          this.availability_loading.set(false);
          return;
        }
        const space_ids = new Set(spaces.filter((space) => space.bookable !== false).map((space) => space.id));
        this.total_space_count.set(space_ids.size);
        if (!space_ids.size) {
          this.available_space_count.set(0);
          this.availability_loading.set(false);
          return;
        }
        if (Pn()) {
          this.available_space_count.set(space_ids.size);
          this.availability_loading.set(false);
          return;
        }
        const start_date = date || Date.now();
        const window_duration = duration || 540;
        this.availability_loading.set(true);
        const booked_assets = await bookedResourceList({
          period_start: getUnixTime(start_date),
          period_end: getUnixTime(addMinutes(start_date, window_duration)),
          type: "parking",
          zones: bld.id,
          rejected: false
        }).catch(() => []);
        if (!active)
          return;
        const booked_ids = new Set(booked_assets.filter((id) => space_ids.has(id)));
        this.available_space_count.set([...space_ids].filter((id) => !booked_ids.has(id)).length);
        this.availability_loading.set(false);
      }, 300);
      onCleanup(() => {
        active = false;
        clearTimeout(timeout);
      });
    }));
    const desk_lookup_inputs = computed(() => {
      const { date, user, id } = model2();
      return { date, email: user?.email || "", id };
    }, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "desk_lookup_inputs" } : (
      /* istanbul ignore next */
      {}
    )), { equal: (a, b) => a.date === b.date && a.email === b.email && a.id === b.id }));
    runInInjectionContext(this._injector, () => effect(async () => {
      const buildings = this.building_list();
      const { date, email: model_email, id } = desk_lookup_inputs();
      if (!this.default_location_from_desk_booking() || Pn() || id || !date || buildings?.length <= 1) {
        this.desk_booking_building_id.set("");
        return;
      }
      const email = model_email || currentUser()?.email || "";
      if (!email)
        return;
      const period_start = getUnixTime(startOfDay(date));
      const period_end = getUnixTime(endOfDay(date));
      const bookings = await queryBookings({
        type: "desk",
        period_start,
        period_end,
        email,
        rejected: false
      }).catch(() => []);
      const booking = bookings.find((_) => _.user_email?.toLowerCase() === email.toLowerCase());
      const building = booking ? this._buildingForBookingZones(booking.zones, buildings) : null;
      this.desk_booking_building_id.set(building?.id || "");
      if (building && building.id !== this._org.building?.id) {
        this._org.building = building;
      }
    }));
    this._initShiftStateFromForm(model2);
    if (model2().request_type) {
      this.selected_request_type_id.set(model2().request_type);
    }
    this._syncRequestTypeTime();
    this._syncRequestTypeUser(model2);
    this._syncPrefilledPlateNumber(model2);
    this._syncPlateNumberUser(model2);
    if (this.filtered_approver_group_options().length && !this.is_auto_approved()) {
      const current = model2().approver_group;
      if (!current || !this.filtered_approver_group_options().find((_) => _.id === current)) {
        model2.update((m) => __spreadProps(__spreadValues({}, m), {
          approver_group: this.filtered_approver_group_options()[0].id
        }));
      }
    }
    if (this.space_restriction_options().length) {
      const current = model2().space_restrictions;
      if (current === true || typeof current === "string" && !this.space_restriction_options().find((_) => _.id === current)) {
        this.setSpaceRestriction(false);
      }
    }
    const is_daily = this.allow_recurrence() && model2().recurrence_type === "daily";
    this.booking_frequency.set(is_daily ? "daily" : "single");
    if (!this.allow_recurrence() && model2().recurrence_type !== "none") {
      model2.update((m) => __spreadProps(__spreadValues({}, m), {
        recurrence_type: "none",
        recurrence_days: null,
        recurrence_interval: null,
        recurrence_end: null
      }));
    }
    if (is_daily) {
      if (model2().recurrence_days) {
        const days = /* @__PURE__ */ new Set();
        for (let i = 1; i <= 7; i++) {
          if (model2().recurrence_days & 1 << i)
            days.add(i);
        }
        if (days.size > 0)
          this.selected_days.set(days);
      }
      const raw_date = model2().date;
      if (model2().recurrence_end && raw_date) {
        const recurrence_end = model2().recurrence_end < 1e12 ? model2().recurrence_end * 1e3 : model2().recurrence_end;
        const reference = startOfDay(raw_date);
        const ref_dow = reference.getDay() === 0 ? 7 : reference.getDay();
        const selected = [...this.selected_days()];
        const max_offset_days = selected.length ? Math.max(...selected.map((d) => (d - ref_dow + 7) % 7)) : 0;
        const day_ms = 24 * 60 * 60 * 1e3;
        const diff_days = Math.floor((startOfDay(recurrence_end).valueOf() - reference.valueOf()) / day_ms);
        const weeks = Math.max(1, Math.floor((diff_days - max_offset_days) / 7) + 1);
        this.num_weeks.set(Math.min(weeks, this.max_weeks()));
      }
    }
  }
  isDaySelected(day_index) {
    return this.selected_days().has(day_index);
  }
  toggleDay(day_index) {
    const days = new Set(this.selected_days());
    if (days.has(day_index)) {
      if (days.size > 1)
        days.delete(day_index);
    } else {
      days.add(day_index);
    }
    this.selected_days.set(days);
    this._updateRecurrenceDays();
    this._updateRecurrenceEnd();
  }
  setNumWeeks(weeks) {
    this.num_weeks.set(weeks);
    this._updateRecurrenceEnd();
  }
  setRequestType(type_id) {
    this.selected_request_type_id.set(type_id);
    const model2 = this.model;
    if (!model2)
      return;
    model2.update((m) => __spreadProps(__spreadValues({}, m), { request_type: type_id }));
    this._syncRequestTypeTime();
    this._syncRequestTypeUser(model2);
    const options = this.filtered_approver_group_options();
    if (options.length && !this.is_auto_approved()) {
      const current = model2().approver_group;
      if (!current || !options.find((_) => _.id === current)) {
        model2.update((m) => __spreadProps(__spreadValues({}, m), { approver_group: options[0].id }));
      }
    }
  }
  setBookingFrequency(freq) {
    if (freq === "daily" && !this.allow_recurrence())
      return;
    this.booking_frequency.set(freq);
    const model2 = this.model;
    if (!model2)
      return;
    if (freq === "single") {
      model2.update((m) => __spreadProps(__spreadValues({}, m), {
        recurrence_type: "none",
        recurrence_days: null,
        recurrence_interval: null,
        recurrence_end: null
      }));
    } else {
      this.selected_days.set(/* @__PURE__ */ new Set([1, 2, 3, 4, 5]));
      this.num_weeks.set(1);
      model2.update((m) => __spreadProps(__spreadValues({}, m), {
        recurrence_type: "daily",
        recurrence_interval: 1,
        recurrence_days: this._computeDaysBitmask()
      }));
      this._updateRecurrenceEnd();
    }
  }
  /**
   * Public entry point for shift selection — wired to the dropdown
   * `(selectionChange)` handler. Marks the shift as user-chosen so the
   * settings-load effect won't override it.
   */
  setShiftType(type) {
    this._user_selected_shift = true;
    this._applyShift(type);
  }
  /**
   * Internal shift application — used by auto-init paths
   * (`_applyPreferredShift`, `_restoreShiftState`, etc.) that should not
   * count as a user selection.
   */
  _applyShift(type) {
    if (type === ALL_DAY_SHIFT_ID) {
      const { start_time, end_time } = this.all_day_shift_window();
      this.shift_type.set(ALL_DAY_SHIFT_ID);
      this.start_time_mins.set(start_time);
      this.end_time_mins.set(end_time);
      this._updateFormTimes(start_time, end_time);
      return;
    }
    if (type === CUSTOM_SHIFT_ID) {
      this.shift_type.set(CUSTOM_SHIFT_ID);
      const { start_time, end_time } = this._normaliseShiftTime(this.custom_start_time_mins(), this.custom_end_time_mins());
      this.custom_start_time_mins.set(start_time);
      this.custom_end_time_mins.set(end_time);
      this.start_time_mins.set(start_time);
      this.end_time_mins.set(end_time);
      this._updateFormTimes(start_time, end_time);
      return;
    }
    const preset = this.shift_options().find((_) => _.id === type);
    if (!preset)
      return;
    this.shift_type.set(type);
    this.start_time_mins.set(preset.start_time);
    this.end_time_mins.set(preset.end_time);
    this._updateFormTimes(preset.start_time, preset.end_time);
  }
  setStartTime(mins) {
    this._user_selected_shift = true;
    this._applyCustomShift(mins, this.end_time_mins());
  }
  setEndTime(mins) {
    this._user_selected_shift = true;
    this._applyCustomShift(this.start_time_mins(), mins);
  }
  _applyCustomShift(start_mins, end_mins) {
    const { start_time, end_time } = this._normaliseShiftTime(start_mins, end_mins);
    this.start_time_mins.set(start_time);
    this.end_time_mins.set(end_time);
    this.custom_start_time_mins.set(start_time);
    this.custom_end_time_mins.set(end_time);
    this.shift_type.set(CUSTOM_SHIFT_ID);
    this._updateFormTimes(start_time, end_time);
  }
  setSpaceRestriction(value) {
    const model2 = this.model;
    if (!model2)
      return;
    model2.update((m) => __spreadProps(__spreadValues({}, m), {
      space_restrictions: value || false
    }));
  }
  isExtraRestrictionSelected(id) {
    const value = this.model?.()?.extra_space_restrictions;
    return Array.isArray(value) && value.includes(id);
  }
  setExtraRestriction(id, enabled) {
    const model2 = this.model;
    if (!model2)
      return;
    const current = model2()?.extra_space_restrictions;
    const list = Array.isArray(current) ? [...current] : [];
    const index = list.indexOf(id);
    if (enabled && index === -1)
      list.push(id);
    if (!enabled && index !== -1)
      list.splice(index, 1);
    model2.update((m) => __spreadProps(__spreadValues({}, m), { extra_space_restrictions: list }));
  }
  setBuilding(bld) {
    this.desk_booking_building_id.set("");
    this._org.building = bld;
  }
  async onSupportingDocsSelected(event) {
    const input2 = event.target;
    const files = Array.from(input2.files || []);
    const valid_files = files.filter((file) => file.size <= 10 * 1024 * 1024);
    if (valid_files.length !== files.length) {
      notifyError("Some files exceeded 10MB and were skipped.");
    }
    const model2 = this.model;
    const existing_urls = model2?.().attachments || [];
    const existing_names = this.supporting_doc_names();
    const new_urls = [];
    const uploaded_names = [];
    for (const file of valid_files) {
      const upload_id = await this._uploads.uploadFile(file, true).catch(() => "");
      if (!upload_id)
        continue;
      uploaded_names.push(file.name);
      new_urls.push(`${location.origin}/api/engine/v2/uploads/${encodeURIComponent(upload_id)}/url`);
    }
    const names = [...existing_names, ...uploaded_names];
    const urls = [...existing_urls, ...new_urls];
    this.supporting_doc_names.set(names);
    model2?.update((m) => __spreadProps(__spreadValues({}, m), {
      attachments: urls
    }));
    input2.value = "";
  }
  removeSupportingDoc(index) {
    const model2 = this.model;
    const names = [...this.supporting_doc_names()];
    const urls = [...model2?.().attachments || []];
    if (index < 0 || index >= names.length)
      return;
    names.splice(index, 1);
    if (index < urls.length)
      urls.splice(index, 1);
    this.supporting_doc_names.set(names);
    model2?.update((m) => __spreadProps(__spreadValues({}, m), {
      attachments: urls
    }));
  }
  previewSupportingDoc(index) {
    const urls = [...this.model?.().attachments || []];
    const url = urls[index];
    if (!url)
      return;
    this._dialog.open(FullscreenEmbedComponent, { data: url });
  }
  _fileNameFromUrl(url) {
    const last_part = `${url || ""}`.split("/").pop() || "";
    return decodeURIComponent(last_part || "Uploaded file");
  }
  shiftTime(mins) {
    const raw_date = this.model?.()?.date || Date.now();
    const tz = this.timezone;
    return startOfDayInTimezone(raw_date, tz) + mins * 60 * 1e3;
  }
  getBayInfo(bld) {
    if (!bld)
      return "";
    const metadata = bld.metadata || {};
    const parking = metadata.parking?.details || {};
    const car_bays = parking.car_bays;
    const motorcycle_bays = parking.motorcycle_bays;
    const parts = [];
    if (car_bays)
      parts.push(`${car_bays} Car bays`);
    if (motorcycle_bays)
      parts.push(`${motorcycle_bays} Motorcycle bays`);
    return parts.join(" + ") || "";
  }
  hasMultipleBuildings(buildings) {
    const ids = new Set((buildings || []).filter(Boolean).map((_) => _.id));
    return ids.size > 1;
  }
  trackById(item) {
    return item?.id || item?.value || item?.name || item;
  }
  setPlateNumber(plate_number) {
    const model2 = this.model;
    if (!model2 || model2().plate_number === plate_number)
      return;
    model2.update((m) => __spreadProps(__spreadValues({}, m), { plate_number }));
  }
  removePlateNumber(event, plate_number) {
    event.preventDefault();
    event.stopPropagation();
    const key = plate_number.trim().toLowerCase();
    const saved_plate_numbers = this._settings.get("plate_numbers");
    this._settings.saveUserSetting("plate_numbers", Array.isArray(saved_plate_numbers) ? saved_plate_numbers.filter((_) => typeof _ !== "string" || _.trim().toLowerCase() !== key) : []);
    const preferred_plate_number = this._settings.get("plate_number");
    if (typeof preferred_plate_number === "string" && preferred_plate_number.trim().toLowerCase() === key) {
      this._settings.saveUserSetting("plate_number", "");
    }
    this._removed_plate_numbers.update((removed) => [...removed, key]);
  }
  _timeSync(model2 = this.model) {
    return model2?._time_sync || getFormTimeSyncHandle(this.form());
  }
  showPlateNumberError() {
    const field = this.form()?.plate_number;
    const state = field?.();
    return !!state?.touched?.() && !!state?.invalid?.();
  }
  _buildingForBookingZones(zones, buildings) {
    const zone_ids = new Set((zones || []).filter((_) => !!_));
    return (buildings || []).find((bld) => zone_ids.has(bld.id) || bld.levels?.some((level) => zone_ids.has(level.id)));
  }
  _updateFormTimes(start_mins, end_mins) {
    const model2 = this.model;
    if (!model2)
      return;
    const current = untracked(model2);
    const raw_date = current.date || Date.now();
    const tz = this.timezone;
    const day = startOfDayInTimezone(raw_date, tz);
    let new_date = day + start_mins * 60 * 1e3;
    const raw_duration = end_mins > start_mins ? end_mins - start_mins : end_mins + 1440 - start_mins;
    const duration = Math.max(raw_duration, 30);
    this._selected_shift_duration.set(duration);
    if (!current.id) {
      while (new_date + duration * 60 * 1e3 <= Date.now()) {
        new_date = addDays(new_date, 1).valueOf();
      }
    }
    const new_date_end = new_date + duration * 60 * 1e3;
    if (current.all_day === false && current.date === new_date && current.date_end === new_date_end && current.duration === duration) {
      return;
    }
    this._timeSync(model2)?.updateOptions({
      bookable_hours: null,
      default_duration: duration,
      timezone: this.timezone
    });
    model2.update((m) => __spreadProps(__spreadValues(__spreadValues({}, m), m.all_day ? { all_day: false } : {}), {
      date: new_date,
      date_end: new_date_end,
      duration
    }));
    this.timeout("parking-request-shift-duration", () => {
      const value = untracked(model2);
      if (value.date !== new_date || value.duration === duration && value.date_end === new_date_end) {
        return;
      }
      model2.update((m) => __spreadProps(__spreadValues({}, m), {
        duration,
        date_end: new_date_end
      }));
    }, 0);
  }
  _computeDaysBitmask() {
    let bitmask = 0;
    this.selected_days().forEach((day) => bitmask |= 1 << day);
    return bitmask;
  }
  _updateRecurrenceDays() {
    const model2 = this.model;
    if (!model2 || this.booking_frequency() !== "daily")
      return;
    model2.update((m) => __spreadProps(__spreadValues({}, m), {
      recurrence_days: this._computeDaysBitmask()
    }));
  }
  _updateRecurrenceEnd() {
    const model2 = this.model;
    if (!model2 || this.booking_frequency() !== "daily")
      return;
    const dates = this._computeRecurrenceDates();
    if (!dates.length)
      return;
    model2.update((m) => __spreadProps(__spreadValues({}, m), {
      recurrence_end: getUnixTime(endOfDay(dates[dates.length - 1]))
    }));
  }
  _computeRecurrenceDates() {
    const model2 = this.model;
    if (!model2)
      return [];
    const raw_date = model2()?.date || Date.now();
    const reference = startOfDay(raw_date);
    const latest_date = this.end_date();
    const ref_dow = reference.getDay() === 0 ? 7 : reference.getDay();
    const selected = [...this.selected_days()].sort((a, b) => a - b);
    const weeks = Math.max(1, this.num_weeks());
    const dates = [];
    for (const day of selected) {
      const offset = (day - ref_dow + 7) % 7;
      for (let w = 0; w < weeks; w++) {
        dates.push(addDays(reference, offset + w * 7).valueOf());
      }
    }
    return dates.filter((date) => date <= latest_date).sort((a, b) => a - b);
  }
  _defaultCustomShift() {
    const tz = this.timezone;
    const { hours, minutes } = getTimeInTimezone(Date.now(), tz || void 0);
    const current_mins = hours * 60 + minutes;
    const start_time = Math.min((Math.floor(current_mins / 30) + 1) * 30, 1410);
    return {
      start_time,
      end_time: Math.min(start_time + 120, 1439)
    };
  }
  _normaliseShiftTime(start_mins, end_mins) {
    return {
      start_time: Math.max(0, Math.min(start_mins, 1439)),
      end_time: Math.max(0, Math.min(end_mins, 1439))
    };
  }
  _normaliseShiftOptions(options) {
    return (options || []).filter((option) => !!option?.id && option.id !== CUSTOM_SHIFT_ID && option.id !== ALL_DAY_SHIFT_ID && typeof option.start_time === "number" && typeof option.end_time === "number").map((option) => __spreadProps(__spreadValues({
      id: option.id,
      name: option.name || option.id
    }, this._normaliseShiftTime(option.start_time, option.end_time)), {
      groups: option.groups?.filter((group) => !!group)
    }));
  }
  _normaliseOptions(options) {
    return (options || []).filter((option) => !!option?.id).map((option) => ({
      id: option.id,
      name: option.name || option.id
    }));
  }
  _normaliseRequestTypes(request_types) {
    return (request_types || []).map((type) => {
      const id = type?.id || type?.value;
      if (!id)
        return null;
      const forced_time = typeof type.forced_time?.start_time === "number" && typeof type.forced_time?.end_time === "number" ? this._normaliseShiftTime(type.forced_time.start_time, type.forced_time.end_time) : void 0;
      return {
        id,
        name: type.name || type.label || id,
        description: type.description,
        badge: type.badge,
        groups: type.groups?.filter((group) => !!group),
        approver_groups: type.approver_groups?.filter((group) => !!group),
        book_as: type.book_as === "internals" || type.book_as === "externals" || type.book_as === "both" ? type.book_as : void 0,
        show_notes: !!type.show_notes,
        requires_manual_approval: !!type.requires_manual_approval,
        forced_time
      };
    }).filter((type) => !!type) || [];
  }
  /**
   * Seed the shift state from the form's current date/duration and then
   * pick the preferred shift for the active configuration. Called once
   * on initialisation.
   */
  _initShiftStateFromForm(model2) {
    const default_custom_shift = this._defaultCustomShift();
    this.custom_start_time_mins.set(default_custom_shift.start_time);
    this.custom_end_time_mins.set(default_custom_shift.end_time);
    const date = model2().date;
    if (date) {
      const { hours, minutes } = getTimeInTimezone(date, this.timezone || void 0);
      const start = hours * 60 + minutes;
      const duration = model2().duration || DEFAULT_DAY_DURATION_MINS;
      this.start_time_mins.set(start);
      this.end_time_mins.set(start + duration);
      const { start_time, end_time } = this._normaliseShiftTime(start, (start + duration) % 1440);
      this.custom_start_time_mins.set(start_time);
      this.custom_end_time_mins.set(end_time);
    } else {
      this.start_time_mins.set(default_custom_shift.start_time);
      this.end_time_mins.set(default_custom_shift.end_time);
    }
    this._applyPreferredShift();
  }
  /**
   * Pick and apply the best shift for the active configuration. The
   * resolution order matches the user-facing rules:
   *
   * 1. No presets and no custom → force all-day.
   * 2. Presets exist → prefer a preset matching the current start/end
   *    times, otherwise default to the first preset. Custom is only
   *    reached via an explicit user action against the dropdown — auto
   *    initialisation must always land on a preset when one is offered.
   * 3. No presets but custom is allowed → custom.
   */
  _applyPreferredShift() {
    if (this.is_all_day_forced()) {
      this._applyShift(ALL_DAY_SHIFT_ID);
      return;
    }
    if (this.has_preset_shifts()) {
      const matching_preset = this.shift_options().find((_) => this._matchesShiftOption(_, this.start_time_mins(), this.end_time_mins()));
      this._applyShift((matching_preset || this.shift_options()[0]).id);
      return;
    }
    this._applyShift(CUSTOM_SHIFT_ID);
  }
  _syncRequestTypeTime() {
    const forced_time = this.forced_request_time();
    if (forced_time) {
      if (!this._saved_shift_state) {
        this._saved_shift_state = {
          type: this.shift_type(),
          start_time: this.start_time_mins(),
          end_time: this.end_time_mins()
        };
      }
      this.custom_start_time_mins.set(forced_time.start_time);
      this.custom_end_time_mins.set(forced_time.end_time);
      this.start_time_mins.set(forced_time.start_time);
      this.end_time_mins.set(forced_time.end_time);
      this.shift_type.set(CUSTOM_SHIFT_ID);
      this._updateFormTimes(forced_time.start_time, forced_time.end_time);
      return;
    }
    if (this._saved_shift_state) {
      const saved_shift = this._saved_shift_state;
      this._saved_shift_state = null;
      this._restoreShiftState(saved_shift);
      return;
    }
    this._applyPreferredShift();
  }
  _restoreShiftState(shift) {
    if (this.is_all_day_forced()) {
      this._applyShift(ALL_DAY_SHIFT_ID);
      return;
    }
    const preset = shift.type !== CUSTOM_SHIFT_ID && this.shift_options().find((_) => _.id === shift.type) || this.shift_options().find((_) => this._matchesShiftOption(_, shift.start_time, shift.end_time));
    if (preset) {
      this._applyShift(preset.id);
      return;
    }
    if (!this.allow_custom_shift()) {
      this._applyShift(this.shift_options()[0].id);
      return;
    }
    const { start_time, end_time } = this._normaliseShiftTime(shift.start_time, shift.end_time);
    this.custom_start_time_mins.set(start_time);
    this.custom_end_time_mins.set(end_time);
    this._applyShift(CUSTOM_SHIFT_ID);
  }
  _matchesShiftOption(option, start_time, end_time) {
    return option.start_time === start_time && this._shiftDuration(option.start_time, option.end_time) === this._shiftDuration(start_time, end_time);
  }
  _shiftDuration(start_time, end_time) {
    return end_time > start_time ? end_time - start_time : 1440 - start_time + end_time;
  }
  _syncRequestTypeUser(model2) {
    const current_user = currentUser();
    const selected_user = model2().user;
    if (this.allow_any_host())
      return;
    if (!this.can_book_for_anyone() || !this.host_book_as()) {
      if (this.force_show_host_select()) {
        if (selected_user?.is_external) {
          model2.update((m) => __spreadProps(__spreadValues({}, m), { user: current_user || null }));
        }
        return;
      }
      if (current_user && selected_user?.email !== current_user.email) {
        model2.update((m) => __spreadProps(__spreadValues({}, m), { user: current_user }));
      }
      return;
    }
    if (this.host_book_as() === "externals" && !selected_user?.is_external) {
      model2.update((m) => __spreadProps(__spreadValues({}, m), { user: null }));
      return;
    }
    if (this.host_book_as() === "internals" && selected_user?.is_external) {
      model2.update((m) => __spreadProps(__spreadValues({}, m), { user: current_user || null }));
    }
  }
  _syncPrefilledPlateNumber(model2) {
    runInInjectionContext(this._injector, () => effect(() => {
      const plate_number = model2().plate_number;
      if (this._prefilled_plate_number)
        return;
      if (this._userEmail(model2().user) !== this._userEmail(currentUser())) {
        return;
      }
      if (!plate_number)
        return;
      this._prefilled_plate_number = plate_number;
    }));
  }
  _syncPlateNumberUser(model2) {
    let previous_email = this._userEmail(model2().user);
    runInInjectionContext(this._injector, () => effect(() => {
      const selected_user = model2().user;
      const current_email = this._userEmail(currentUser());
      const selected_email = this._userEmail(selected_user);
      const user_changed = selected_email !== previous_email;
      previous_email = selected_email;
      if (!user_changed || !current_email || !selected_email)
        return;
      if (selected_email === current_email) {
        if (this._prefilled_plate_number && model2().plate_number !== this._prefilled_plate_number) {
          model2.update((m) => __spreadProps(__spreadValues({}, m), {
            plate_number: this._prefilled_plate_number
          }));
        }
        return;
      }
      if (!model2().plate_number)
        return;
      model2.update((m) => __spreadProps(__spreadValues({}, m), { plate_number: "" }));
    }));
  }
  _userEmail(user) {
    return user?.email?.trim().toLowerCase() || "";
  }
  static {
    this.\u0275fac = function ParkingRequestFormDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingRequestFormDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingRequestFormDetailsComponent, selectors: [["parking-request-form-details"]], inputs: { form: [1, "form"], model_input: [1, "model_input"], show_special_needs: [1, "show_special_needs"], force_show_host_select: [1, "force_show_host_select"], force_allow_any_host: [1, "force_allow_any_host"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [["plate_number_auto", "matAutocomplete"], [1, "flex", "flex-col", "gap-2", "sm:gap-4"], [1, "gradient", "border-base-content", "flex", "items-center", "space-x-2", "border-l-8", "px-4", "py-3", "font-medium"], [1, "space-y-3", "p-4"], [3, "formField", "to", "timezone"], [1, "space-y-2"], [1, "flex", "cursor-pointer", "items-start", "gap-3", "rounded-lg", "border", "p-4", "transition-colors", 3, "border-info", "border-base-300"], [1, "border-base-300", "space-y-3", "border-t", "pt-3"], [1, "border-base-300", "bg-base-200", "rounded-lg", "border", "px-4", "py-3"], [1, "space-y-3"], [1, "border-base-300", "mx-4", "space-y-3", "rounded-lg", "border", "p-4"], [1, "flex", "flex-col", "gap-3", "sm:flex-row", "sm:gap-4"], [1, "flex-1"], [1, "mb-1", "block", "text-sm", "font-medium"], ["appearance", "outline", 1, "w-full"], [3, "formField"], [3, "value"], ["matInput", "", "autocomplete", "off", 3, "ngModelChange", "ngModel", "ngModelOptions", "matAutocomplete", "placeholder"], [1, "border-base-300", "space-y-3", "rounded-lg", "border", "p-4"], [1, "flex", "cursor-pointer", "items-start", "gap-3", "rounded-lg", "border", "p-4", "transition-colors", 3, "click"], [1, "mt-0.5", "flex", "h-5", "w-5", "shrink-0", "items-center", "justify-center", "rounded-full", "border-2"], [1, "bg-info", "h-2.5", "w-2.5", "rounded-full"], [1, "font-medium"], [1, "text-sm", "opacity-60"], [1, "border-base-300", "mt-3", "space-y-3", "rounded-lg", "border", "p-3"], [1, "text-sm", "font-medium"], [1, "flex", "gap-2"], ["type", "button", 1, "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", "border-2", "text-sm", "font-medium", "transition-colors", 3, "border-info", "bg-info", "text-info-content", "border-base-300"], [1, "space-y-1"], [1, "flex", "items-center", "gap-2", "text-sm"], ["type", "button", 1, "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", "border-2", "text-sm", "font-medium", "transition-colors", 3, "click"], ["type", "button", 1, "flex", "h-10", "min-w-10", "items-center", "justify-center", "rounded-full", "border-2", "px-3", "text-sm", "font-medium", "transition-colors", 3, "border-info", "bg-info", "text-info-content", "border-base-300"], ["type", "button", 1, "flex", "h-10", "min-w-10", "items-center", "justify-center", "rounded-full", "border-2", "px-3", "text-sm", "font-medium", "transition-colors", 3, "click"], [1, "bg-success", "h-2", "w-2", "rounded-full"], [1, "flex", "items-center", "gap-2"], [1, "bg-base-200", "rounded", "px-2", "py-0.5", "text-center", "text-xs"], [3, "formField", "guests", "guests_only", "disable_search", "allow_externals"], ["matInput", "", "rows", "3", 3, "formField"], [1, "gradient", "border-base-content", "text-warning", "flex", "items-center", "space-x-2", "border-l-8", "px-4", "py-3", "font-medium"], [1, "space-y-6", "p-4"], [1, "mb-2", "block", "text-sm", "font-medium"], [1, "text-error"], ["matInput", "", "formControlName", "notes", "rows", "6", 1, "border-base-content", "w-full", "rounded-lg", "border", "p-4", "text-base", 3, "placeholder"], [1, "mb-2", "text-sm", "font-medium"], ["for", "p2-supporting-docs", 1, "border-base-300", "hover:border-info", "flex", "cursor-pointer", "items-start", "gap-3", "rounded-lg", "border", "p-4", "transition-colors"], [1, "mt-0.5", "text-xl"], [1, "text-sm", "opacity-70"], ["id", "p2-supporting-docs", "type", "file", "multiple", "", "accept", ".pdf,.doc,.docx,.jpg,.jpeg,.png", 1, "hidden", 3, "change"], [1, "mt-3", "space-y-2"], [1, "border-base-300", "bg-base-100", "flex", "items-center", "justify-between", "rounded-lg", "border", "p-1"], [1, "truncate", "px-4", "py-2", "text-sm"], [1, "flex", "items-center"], ["icon", "", "type", "button", "matRipple", "", 3, "click"], [1, "flex", "gap-4"], [3, "selectionChange", "value"], [1, "flex", "min-h-15", "cursor-pointer", "items-center", "gap-3", "rounded-lg", "border", "px-4", "py-2", "transition-colors", 3, "border-info", "border-base-300"], [1, "flex", "min-h-15", "cursor-pointer", "items-center", "gap-3", "rounded-lg", "border", "px-4", "py-2", "transition-colors", 3, "click"], ["matTooltip", "Matched to desk booking", 1, "bg-info", "text-info-content", "flex", "h-6", "w-6", "shrink-0", "items-center", "justify-center", "rounded-full"], [1, "flex", "flex-1", "items-center", "justify-between", "gap-3"], [1, "border-base-300", "flex", "shrink-0", "items-center", "space-x-2", "rounded-md", "border", "py-1", "pr-1", "pl-3", "text-sm"], [1, "text-base!"], [1, "p-2", "text-sm", "font-medium", "opacity-60"], [1, "ml-1!", "text-lg"], [1, "rounded-sm", "px-2", "py-1", "font-mono", "text-xs"], [1, "text-success", "flex", "items-center", "gap-2", "text-sm", "font-bold", "tracking-wider", "uppercase"], [1, "text-lg"], [1, "flex", "items-center", "justify-between", "gap-3"], [1, "border-base-300", "mr-2", "flex", "shrink-0", "items-center", "space-x-2", "rounded-md", "border", "py-1", "pr-1", "pl-3", "text-sm"], [1, "pr-2", "text-sm", "font-medium", "opacity-60"], [1, "flex", "w-full", "items-center", "gap-2"], ["icon", "", "default", "", "error", "", "type", "button", 1, "text-xs", 3, "mousedown", "click"], [1, "text-info", "flex", "items-center", "gap-2", "text-sm", "font-bold", "tracking-wider", "uppercase"], [3, "formField", "placeholder"], ["id", "parking-space-restrictions-label"], ["aria-hidden", "true"], [1, "flex", "flex-col", "gap-2"], ["aria-labelledby", "parking-space-restrictions-label", 1, "flex", "flex-col", "gap-2", 3, "formField"], ["role", "alert", 1, "text-error", "text-sm"], [3, "label", "ngModel", "ngModelOptions"], [3, "ngModelChange", "label", "ngModel", "ngModelOptions"]], template: function ParkingRequestFormDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ParkingRequestFormDetailsComponent_Conditional_0_Template, 66, 39, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.form() && ctx.model ? 0 : -1);
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      FormField,
      MatAutocompleteModule,
      MatAutocomplete,
      MatOption,
      MatAutocompleteTrigger,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      MatRadioModule,
      MatRadioGroup,
      MatRadioButton,
      MatSelectModule,
      MatSelect,
      MatSelectTrigger,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      DateFieldComponent,
      UserSearchFieldComponent,
      SettingsToggleComponent,
      MatRippleModule,
      MatRipple,
      DecimalPipe,
      DatePipe,
      TranslatePipe
    ], styles: ["\n.gradient[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      105deg,\n      var(--base-200) 0%,\n      var(--base-200) 50%,\n      var(--base-100) 100%);\n}\n/*# sourceMappingURL=parking-request-form-details.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingRequestFormDetailsComponent, [{
    type: Component,
    args: [{ selector: "parking-request-form-details", template: `
        @if (form() && model) {
            <div class="flex flex-col gap-2 sm:gap-4">
                <!-- BOOKING FREQUENCY -->
                <div
                    class="gradient border-base-content flex items-center space-x-2 border-l-8 px-4 py-3 font-medium"
                >
                    <icon>date_range</icon>
                    <div>
                        {{ 'BOOKINGS.PARKING_BOOKING_FREQUENCY' | translate }}
                    </div>
                </div>
                <div class="space-y-3 p-4">
                    <a-date-field
                        [formField]="form().date"
                        [to]="end_date()"
                        [timezone]="timezone"
                    ></a-date-field>
                    @if (allow_recurrence()) {
                        <div class="space-y-2">
                            <div
                                class="flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors"
                                [class.border-info]="
                                    booking_frequency() === 'single'
                                "
                                [class.border-base-300]="
                                    booking_frequency() !== 'single'
                                "
                                (click)="setBookingFrequency('single')"
                            >
                                <div
                                    class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2"
                                    [class.border-info]="
                                        booking_frequency() === 'single'
                                    "
                                    [class.border-base-300]="
                                        booking_frequency() !== 'single'
                                    "
                                >
                                    @if (booking_frequency() === 'single') {
                                        <div
                                            class="bg-info h-2.5 w-2.5 rounded-full"
                                        ></div>
                                    }
                                </div>
                                <div>
                                    <div class="font-medium">
                                        {{
                                            'BOOKINGS.PARKING_FREQUENCY_SINGLE'
                                                | translate
                                        }}
                                    </div>
                                    <div class="text-sm opacity-60">
                                        {{
                                            'BOOKINGS.PARKING_FREQUENCY_SINGLE_DESC'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </div>
                            <div
                                class="flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors"
                                [class.border-info]="
                                    booking_frequency() === 'daily'
                                "
                                [class.border-base-300]="
                                    booking_frequency() !== 'daily'
                                "
                                (click)="setBookingFrequency('daily')"
                            >
                                <div
                                    class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2"
                                    [class.border-info]="
                                        booking_frequency() === 'daily'
                                    "
                                    [class.border-base-300]="
                                        booking_frequency() !== 'daily'
                                    "
                                >
                                    @if (booking_frequency() === 'daily') {
                                        <div
                                            class="bg-info h-2.5 w-2.5 rounded-full"
                                        ></div>
                                    }
                                </div>
                                <div class="flex-1">
                                    <div class="font-medium">
                                        {{
                                            'BOOKINGS.PARKING_FREQUENCY_DAILY'
                                                | translate
                                        }}
                                    </div>
                                    <div class="text-sm opacity-60">
                                        {{
                                            'BOOKINGS.PARKING_FREQUENCY_DAILY_DESC'
                                                | translate
                                        }}
                                    </div>
                                    @if (booking_frequency() === 'daily') {
                                        <div
                                            class="border-base-300 mt-3 space-y-3 rounded-lg border p-3"
                                        >
                                            <div class="text-sm font-medium">
                                                {{
                                                    'BOOKINGS.PARKING_FREQUENCY_SELECT_DAYS'
                                                        | translate
                                                }}
                                            </div>
                                            <div class="flex gap-2">
                                                @for (
                                                    day of WEEKDAY_OPTIONS;
                                                    track day.index
                                                ) {
                                                    <button
                                                        type="button"
                                                        class="flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-medium transition-colors"
                                                        [class.border-info]="
                                                            isDaySelected(
                                                                day.index
                                                            )
                                                        "
                                                        [class.bg-info]="
                                                            isDaySelected(
                                                                day.index
                                                            )
                                                        "
                                                        [class.text-info-content]="
                                                            isDaySelected(
                                                                day.index
                                                            )
                                                        "
                                                        [class.border-base-300]="
                                                            !isDaySelected(
                                                                day.index
                                                            )
                                                        "
                                                        (click)="
                                                            $event.stopPropagation();
                                                            toggleDay(day.index)
                                                        "
                                                    >
                                                        {{
                                                            day.date
                                                                | date: 'EEE'
                                                        }}
                                                    </button>
                                                }
                                            </div>
                                            @if (max_weeks() > 1) {
                                                <div
                                                    class="text-sm font-medium"
                                                >
                                                    {{
                                                        'BOOKINGS.PARKING_FREQUENCY_NUM_WEEKS'
                                                            | translate
                                                    }}
                                                </div>
                                                <div class="flex gap-2">
                                                    @for (
                                                        w of week_options();
                                                        track w
                                                    ) {
                                                        <button
                                                            type="button"
                                                            class="flex h-10 min-w-10 items-center justify-center rounded-full border-2 px-3 text-sm font-medium transition-colors"
                                                            [class.border-info]="
                                                                num_weeks() ===
                                                                w
                                                            "
                                                            [class.bg-info]="
                                                                num_weeks() ===
                                                                w
                                                            "
                                                            [class.text-info-content]="
                                                                num_weeks() ===
                                                                w
                                                            "
                                                            [class.border-base-300]="
                                                                num_weeks() !==
                                                                w
                                                            "
                                                            (click)="
                                                                $event.stopPropagation();
                                                                setNumWeeks(w)
                                                            "
                                                        >
                                                            {{
                                                                (w === 1
                                                                    ? 'BOOKINGS.PARKING_FREQUENCY_WEEK'
                                                                    : 'BOOKINGS.PARKING_FREQUENCY_WEEKS'
                                                                )
                                                                    | translate
                                                                        : {
                                                                              weeks: w,
                                                                          }
                                                            }}
                                                        </button>
                                                    }
                                                </div>
                                            }
                                            <div class="text-sm font-medium">
                                                {{
                                                    'BOOKINGS.PARKING_FREQUENCY_DATES_HEADER'
                                                        | translate
                                                }}
                                            </div>
                                            <div class="space-y-1">
                                                @for (
                                                    day of weekdays;
                                                    track $index
                                                ) {
                                                    <div
                                                        class="flex items-center gap-2 text-sm"
                                                    >
                                                        <div
                                                            class="bg-success h-2 w-2 rounded-full"
                                                        ></div>
                                                        {{
                                                            day
                                                                | date
                                                                    : 'EEEE, d MMMM yyyy'
                                                        }}
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    }
                </div>

                <!-- REQUEST TYPE -->
                <div
                    class="gradient border-base-content flex items-center space-x-2 border-l-8 px-4 py-3 font-medium"
                >
                    <icon>ballot</icon>
                    <div>
                        {{ 'BOOKINGS.PARKING_REQUEST_TYPE' | translate }}
                    </div>
                </div>
                <div class="space-y-3 p-4">
                    <div class="space-y-2">
                        @for (type of request_types(); track trackById(type)) {
                            <div
                                class="flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors"
                                [class.border-info]="
                                    model().request_type === type.id
                                "
                                [class.border-base-300]="
                                    model().request_type !== type.id
                                "
                                (click)="setRequestType(type.id)"
                            >
                                <div
                                    class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2"
                                    [class.border-info]="
                                        model().request_type === type.id
                                    "
                                    [class.border-base-300]="
                                        model().request_type !== type.id
                                    "
                                >
                                    @if (model().request_type === type.id) {
                                        <div
                                            class="bg-info h-2.5 w-2.5 rounded-full"
                                        ></div>
                                    }
                                </div>
                                <div>
                                    <div class="flex items-center gap-2">
                                        <span class="font-medium">{{
                                            type.name | translate
                                        }}</span>
                                        @if (type.badge) {
                                            <span
                                                class="bg-base-200 rounded px-2 py-0.5 text-center text-xs"
                                                >{{
                                                    type.badge | translate
                                                }}</span
                                            >
                                        }
                                    </div>
                                    <div class="text-sm opacity-60">
                                        {{ type.description | translate }}
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    @if (show_host_select()) {
                        <div class="border-base-300 space-y-3 border-t pt-3">
                            <h4 class="text-sm font-medium">
                                {{ 'BOOKINGS.REQUEST_SPACE_FOR' | translate }}
                            </h4>
                            <a-user-search-field
                                [formField]="form().user"
                                [guests]="
                                    allow_any_host() ||
                                    (can_book_for_anyone() &&
                                        host_book_as() !== 'internals')
                                "
                                [guests_only]="
                                    !allow_any_host() &&
                                    can_book_for_anyone() &&
                                    host_book_as() === 'externals'
                                "
                                [disable_search]="
                                    !allow_any_host() &&
                                    can_book_for_anyone() &&
                                    host_book_as() === 'externals'
                                "
                                [allow_externals]="
                                    allow_any_host() ||
                                    (can_book_for_anyone() &&
                                        host_book_as() !== 'internals')
                                "
                            ></a-user-search-field>
                        </div>
                    }
                    @if (show_notes()) {
                        <div class="border-base-300 space-y-3 border-t pt-3">
                            <label class="text-sm font-medium">
                                {{ 'FORM.NOTES' | translate }}
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <textarea
                                    matInput
                                    [formField]="form().notes"
                                    rows="3"
                                ></textarea>
                            </mat-form-field>
                        </div>
                    }
                </div>
                @if (
                    model().request_type === 'special' && show_special_needs()
                ) {
                    <!-- P2 SPECIAL NEEDS DETAILS -->
                    <div
                        class="gradient border-base-content text-warning flex items-center space-x-2 border-l-8 px-4 py-3 font-medium"
                    >
                        <icon>description</icon>
                        <div>
                            {{
                                'BOOKINGS.P2_SPECIAL_NEEDS_DETAILS' | translate
                            }}
                        </div>
                    </div>
                    <div class="space-y-6 p-4">
                        <div>
                            <label class="mb-2 block text-sm font-medium">
                                {{
                                    'BOOKINGS.P2_REASON_FOR_REQUEST' | translate
                                }}
                                <span class="text-error">*</span>
                            </label>
                            <textarea
                                matInput
                                formControlName="notes"
                                rows="6"
                                class="border-base-content w-full rounded-lg border p-4 text-base"
                                [placeholder]="
                                    'BOOKINGS.P2_REASON_PLACEHOLDER' | translate
                                "
                            ></textarea>
                        </div>

                        <div>
                            <div class="mb-2 text-sm font-medium">
                                {{
                                    'BOOKINGS.P2_ATTACH_SUPPORTING_DOCS'
                                        | translate
                                }}
                            </div>
                            <label
                                class="border-base-300 hover:border-info flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors"
                                for="p2-supporting-docs"
                            >
                                <icon class="mt-0.5 text-xl">upload_file</icon>
                                <div>
                                    <div class="font-medium">
                                        {{
                                            'BOOKINGS.P2_UPLOAD_FILE'
                                                | translate
                                        }}
                                    </div>
                                    <div class="text-sm opacity-70">
                                        {{
                                            'BOOKINGS.P2_ACCEPTED_FORMATS'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </label>
                            <input
                                id="p2-supporting-docs"
                                type="file"
                                class="hidden"
                                multiple
                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                (change)="onSupportingDocsSelected($event)"
                            />
                            @if (supporting_doc_names().length) {
                                <div class="mt-3 space-y-2">
                                    @for (
                                        file_name of supporting_doc_names();
                                        track $index
                                    ) {
                                        <div
                                            class="border-base-300 bg-base-100 flex items-center justify-between rounded-lg border p-1"
                                        >
                                            <div
                                                class="truncate px-4 py-2 text-sm"
                                            >
                                                {{ file_name }}
                                            </div>
                                            <div class="flex items-center">
                                                <button
                                                    icon
                                                    type="button"
                                                    matRipple
                                                    (click)="
                                                        previewSupportingDoc(
                                                            $index
                                                        )
                                                    "
                                                >
                                                    <icon>open_in_new</icon>
                                                </button>
                                                <button
                                                    icon
                                                    type="button"
                                                    matRipple
                                                    (click)="
                                                        removeSupportingDoc(
                                                            $index
                                                        )
                                                    "
                                                >
                                                    <icon>close</icon>
                                                </button>
                                            </div>
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                }

                <!-- SHIFT SELECTION -->
                <div
                    class="gradient border-base-content flex items-center space-x-2 border-l-8 px-4 py-3 font-medium"
                >
                    <icon>schedule</icon>
                    <div>
                        {{ 'BOOKINGS.PARKING_SHIFT_SELECTION' | translate }}
                    </div>
                </div>
                <div class="space-y-3 p-4">
                    @if (forced_request_time(); as forced_time) {
                        <div
                            class="border-base-300 bg-base-200 rounded-lg border px-4 py-3"
                        >
                            {{ selected_request_type()?.name | translate }}:
                            {{
                                shiftTime(forced_time.start_time)
                                    | date: time_format
                            }}
                            -
                            {{
                                shiftTime(forced_time.end_time)
                                    | date: time_format
                            }}
                        </div>
                    } @else if (is_all_day_forced()) {
                        <div
                            class="border-base-300 bg-base-200 rounded-lg border px-4 py-3"
                        >
                            {{ 'BOOKINGS.PARKING_SHIFT_ALL_DAY' | translate }}
                            @if (show_all_day_shift_window()) {
                                :
                                {{
                                    shiftTime(all_day_shift_window().start_time)
                                        | date: time_format
                                }}
                                -
                                {{
                                    shiftTime(all_day_shift_window().end_time)
                                        | date: time_format
                                }}
                            }
                        </div>
                    } @else {
                        <div class="space-y-3">
                            <div>
                                @if (show_shift_select()) {
                                    <label
                                        class="mb-1 block text-sm font-medium"
                                    >
                                        {{
                                            'BOOKINGS.PARKING_SHIFT_TYPE'
                                                | translate
                                        }}
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            [value]="shift_type()"
                                            (selectionChange)="
                                                setShiftType($event.value)
                                            "
                                        >
                                            <mat-select-trigger>
                                                @if (
                                                    selected_shift_option();
                                                    as option
                                                ) {
                                                    {{
                                                        option.name | translate
                                                    }}
                                                    ({{
                                                        shiftTime(
                                                            option.start_time
                                                        ) | date: time_format
                                                    }}
                                                    -
                                                    {{
                                                        shiftTime(
                                                            option.end_time
                                                        ) | date: time_format
                                                    }})
                                                } @else {
                                                    {{
                                                        'BOOKINGS.PARKING_SHIFT_CUSTOM'
                                                            | translate
                                                    }}
                                                    ({{
                                                        shiftTime(
                                                            start_time_mins()
                                                        ) | date: time_format
                                                    }}
                                                    -
                                                    {{
                                                        shiftTime(
                                                            end_time_mins()
                                                        ) | date: time_format
                                                    }})
                                                }
                                            </mat-select-trigger>
                                            @for (
                                                option of shift_options();
                                                track trackById(option)
                                            ) {
                                                <mat-option [value]="option.id">
                                                    {{
                                                        option.name | translate
                                                    }}
                                                    ({{
                                                        shiftTime(
                                                            option.start_time
                                                        ) | date: time_format
                                                    }}
                                                    -
                                                    {{
                                                        shiftTime(
                                                            option.end_time
                                                        ) | date: time_format
                                                    }})
                                                </mat-option>
                                            }
                                            @if (allow_custom_shift()) {
                                                <mat-option
                                                    [value]="CUSTOM_SHIFT_ID"
                                                >
                                                    {{
                                                        'BOOKINGS.PARKING_SHIFT_CUSTOM'
                                                            | translate
                                                    }}
                                                    ({{
                                                        shiftTime(
                                                            custom_start_time_mins()
                                                        ) | date: time_format
                                                    }}
                                                    -
                                                    {{
                                                        shiftTime(
                                                            custom_end_time_mins()
                                                        ) | date: time_format
                                                    }})
                                                </mat-option>
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                } @else if (
                                    selected_shift_option();
                                    as option
                                ) {
                                    <label
                                        class="mb-1 block text-sm font-medium"
                                    >
                                        {{
                                            'BOOKINGS.PARKING_SHIFT_TYPE'
                                                | translate
                                        }}
                                    </label>
                                    <div
                                        class="border-base-300 bg-base-200 rounded-lg border px-4 py-3"
                                    >
                                        {{ option.name | translate }}
                                        ({{
                                            shiftTime(option.start_time)
                                                | date: time_format
                                        }}
                                        -
                                        {{
                                            shiftTime(option.end_time)
                                                | date: time_format
                                        }})
                                    </div>
                                }
                            </div>
                            @if (show_custom_time_inputs()) {
                                <div class="flex gap-4">
                                    <div class="flex-1">
                                        <label
                                            class="mb-1 block text-sm font-medium"
                                        >
                                            {{ 'FORM.TIME_START' | translate }}
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [value]="start_time_mins()"
                                                (selectionChange)="
                                                    setStartTime($event.value)
                                                "
                                            >
                                                @for (
                                                    opt of time_options();
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            shiftTime(opt.value)
                                                                | date
                                                                    : time_format
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                    <div class="flex-1">
                                        <label
                                            class="mb-1 block text-sm font-medium"
                                        >
                                            {{ 'FORM.TIME_END' | translate }}
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [value]="end_time_mins()"
                                                (selectionChange)="
                                                    setEndTime($event.value)
                                                "
                                            >
                                                @for (
                                                    opt of time_options();
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            shiftTime(opt.value)
                                                                | date
                                                                    : time_format
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                </div>
                            }
                        </div>
                    }
                </div>

                <!-- LOCATION PREFERENCE -->
                @if (hasMultipleBuildings(building_list())) {
                    <div
                        class="gradient border-base-content flex items-center space-x-2 border-l-8 px-4 py-3 font-medium"
                    >
                        <icon>place</icon>
                        <div>
                            {{
                                'BOOKINGS.PARKING_LOCATION_PREFERENCE'
                                    | translate
                            }}
                        </div>
                    </div>
                    <div class="space-y-3 p-4">
                        @if (region_name) {
                            <div class="text-sm font-medium">
                                {{ region_name }}
                            </div>
                        }
                        <div class="space-y-2">
                            @for (
                                bld of building_list();
                                track trackById(bld)
                            ) {
                                <div
                                    class="flex min-h-15 cursor-pointer items-center gap-3 rounded-lg border px-4 py-2 transition-colors"
                                    [class.border-info]="
                                        building()?.id === bld.id
                                    "
                                    [class.border-base-300]="
                                        building()?.id !== bld.id
                                    "
                                    (click)="setBuilding(bld)"
                                >
                                    <div
                                        class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2"
                                        [class.border-info]="
                                            building()?.id === bld.id
                                        "
                                        [class.border-base-300]="
                                            building()?.id !== bld.id
                                        "
                                    >
                                        @if (building()?.id === bld.id) {
                                            <div
                                                class="bg-info h-2.5 w-2.5 rounded-full"
                                            ></div>
                                        }
                                    </div>
                                    @if (
                                        desk_booking_building_id() === bld.id
                                    ) {
                                        <div
                                            class="bg-info text-info-content flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                                            matTooltip="Matched to desk booking"
                                        >
                                            <icon class="text-base!">desk</icon>
                                        </div>
                                    }
                                    <div
                                        class="flex flex-1 items-center justify-between gap-3"
                                    >
                                        <div>
                                            <div class="font-medium">
                                                {{
                                                    bld.display_name || bld.name
                                                }}
                                            </div>
                                            @if (getBayInfo(bld)) {
                                                <div class="text-sm opacity-60">
                                                    {{ getBayInfo(bld) }}
                                                </div>
                                            }
                                        </div>
                                        @if (
                                            building()?.id === bld.id &&
                                            !hide_availability_counter()
                                        ) {
                                            <div
                                                class="border-base-300 flex shrink-0 items-center space-x-2 rounded-md border py-1 pr-1 pl-3 text-sm"
                                            >
                                                @if (availability_loading()) {
                                                    <div
                                                        class="p-2 text-sm font-medium opacity-60"
                                                    >
                                                        Checking...
                                                    </div>
                                                } @else if (
                                                    available_space_count() !==
                                                    null
                                                ) {
                                                    @let percent =
                                                        usage_ratio();
                                                    <div
                                                        class="flex items-center"
                                                    >
                                                        {{
                                                            spaces_in_use_count()
                                                        }}
                                                        of
                                                        {{
                                                            total_space_count()
                                                        }}
                                                        <icon
                                                            class="ml-1! text-lg"
                                                            >car_lock</icon
                                                        >
                                                    </div>
                                                    <div
                                                        class="rounded-sm px-2 py-1 font-mono text-xs"
                                                        [class.bg-error]="
                                                            percent === 1
                                                        "
                                                        [class.text-error-content]="
                                                            percent === 1
                                                        "
                                                        [class.bg-warning]="
                                                            percent > 0.5 &&
                                                            percent < 1
                                                        "
                                                        [class.text-warning-content]="
                                                            percent > 0.5 &&
                                                            percent < 1
                                                        "
                                                        [class.bg-success]="
                                                            percent < 0.5
                                                        "
                                                        [class.text-success-content]="
                                                            percent < 0.5
                                                        "
                                                    >
                                                        {{
                                                            percent * 100
                                                                | number
                                                                    : '1.0-0'
                                                        }}%
                                                    </div>
                                                }
                                            </div>
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                        @if (!hide_prefer_toggle()) {
                            <settings-toggle
                                [formField]="
                                    form().prefer_booked_location_first
                                "
                            >
                                {{
                                    'BOOKINGS.PARKING_PREFER_BOOKED_LOCATION_FIRST'
                                        | translate
                                }}
                            </settings-toggle>
                        }
                    </div>
                } @else {
                    <div
                        class="border-base-300 mx-4 space-y-3 rounded-lg border p-4"
                    >
                        <h3
                            class="text-success flex items-center gap-2 text-sm font-bold tracking-wider uppercase"
                        >
                            <icon class="text-lg">place</icon>
                            {{
                                'BOOKINGS.PARKING_LOCATION_PREFERENCE'
                                    | translate
                            }}
                        </h3>
                        <div class="flex items-center justify-between gap-3">
                            <div>
                                <div class="font-medium">
                                    {{
                                        building()?.display_name ||
                                            building()?.name
                                    }}
                                </div>
                                @if (getBayInfo(building())) {
                                    <div class="text-sm opacity-60">
                                        {{ getBayInfo(building()) }}
                                    </div>
                                }
                            </div>
                            @if (!hide_availability_counter()) {
                                <div
                                    class="border-base-300 mr-2 flex shrink-0 items-center space-x-2 rounded-md border py-1 pr-1 pl-3 text-sm"
                                >
                                    @if (availability_loading()) {
                                        <div
                                            class="pr-2 text-sm font-medium opacity-60"
                                        >
                                            Checking...
                                        </div>
                                    } @else {
                                        @let percent = usage_ratio();
                                        <div class="flex items-center">
                                            {{ spaces_in_use_count() || 0 }} of
                                            {{ total_space_count() || 0 }}
                                            <icon class="ml-1! text-lg"
                                                >car_lock</icon
                                            >
                                        </div>
                                        <div
                                            class="rounded-sm px-2 py-1 font-mono text-xs"
                                            [class.bg-error]="percent === 1"
                                            [class.text-error-content]="
                                                percent === 1
                                            "
                                            [class.bg-warning]="
                                                percent > 0.5 && percent < 1
                                            "
                                            [class.text-warning-content]="
                                                percent > 0.5 && percent < 1
                                            "
                                            [class.bg-success]="percent < 0.5"
                                            [class.text-success-content]="
                                                percent < 0.5
                                            "
                                        >
                                            {{
                                                percent * 100 | number: '2.0-0'
                                            }}%
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                }
                <!-- VEHICLE DETAILS -->
                <div
                    class="gradient border-base-content flex items-center space-x-2 border-l-8 px-4 py-3 font-medium"
                >
                    <icon>directions_car</icon>
                    <div>
                        {{ 'BOOKINGS.PARKING_VEHICLE_DETAILS' | translate }}
                    </div>
                </div>
                <div class="space-y-3 p-4">
                    <div class="flex flex-col gap-3 sm:flex-row sm:gap-4">
                        <div class="flex-1">
                            <label class="mb-1 block text-sm font-medium">
                                {{
                                    'BOOKINGS.PARKING_VEHICLE_TYPE' | translate
                                }}
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select [formField]="form().vehicle_type">
                                    @for (
                                        vtype of vehicle_type_options();
                                        track trackById(vtype)
                                    ) {
                                        <mat-option [value]="vtype.id">{{
                                            vtype.name | translate
                                        }}</mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                        <div class="flex-1">
                            <label class="mb-1 block text-sm font-medium">
                                {{
                                    'BOOKINGS.PARKING_REGISTRATION' | translate
                                }}
                                @if (require_plate_number()) {
                                    <span>*</span>
                                }
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    autocomplete="off"
                                    [ngModel]="model().plate_number"
                                    [ngModelOptions]="{ standalone: true }"
                                    (ngModelChange)="setPlateNumber($event)"
                                    [matAutocomplete]="plate_number_auto"
                                    [placeholder]="
                                        'BOOKINGS.PARKING_REGISTRATION_PLACEHOLDER'
                                            | translate
                                    "
                                />
                                <mat-autocomplete
                                    #plate_number_auto="matAutocomplete"
                                >
                                    @for (
                                        plate_number of plate_number_options();
                                        track plate_number
                                    ) {
                                        <mat-option [value]="plate_number">
                                            <div
                                                class="flex w-full items-center gap-2"
                                            >
                                                <span class="flex-1">{{
                                                    plate_number
                                                }}</span>
                                                <button
                                                    icon
                                                    default
                                                    error
                                                    type="button"
                                                    class="text-xs"
                                                    [attr.aria-label]="
                                                        'Remove ' + plate_number
                                                    "
                                                    (mousedown)="
                                                        $event.stopPropagation()
                                                    "
                                                    (click)="
                                                        removePlateNumber(
                                                            $event,
                                                            plate_number
                                                        )
                                                    "
                                                >
                                                    <icon>close</icon>
                                                </button>
                                            </div>
                                        </mat-option>
                                    }
                                </mat-autocomplete>
                                @if (showPlateNumberError()) {
                                    <mat-error>
                                        {{
                                            'BOOKINGS.PARKING_PLATE_NUMBER_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                }
                            </mat-form-field>
                        </div>
                    </div>
                </div>

                <!-- APPROVER GROUP -->
                @if (
                    filtered_approver_group_options().length &&
                    !is_auto_approved()
                ) {
                    <div
                        class="border-base-300 space-y-3 rounded-lg border p-4"
                    >
                        <h3
                            class="text-info flex items-center gap-2 text-sm font-bold tracking-wider uppercase"
                        >
                            <icon class="text-lg">group</icon>
                            {{
                                'BOOKINGS.PARKING_APPROVER_GROUP_TITLE'
                                    | translate
                            }}
                        </h3>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                [formField]="form().approver_group"
                                [placeholder]="
                                    'BOOKINGS.PARKING_APPROVER_GROUP_PLACEHOLDER'
                                        | translate
                                "
                            >
                                @for (
                                    option of filtered_approver_group_options();
                                    track trackById(option)
                                ) {
                                    <mat-option [value]="option.id">{{
                                        option.name | translate
                                    }}</mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }

                <!-- SPACE RESTRICTIONS -->
                @if (
                    space_restriction_options().length ||
                    extra_space_restriction_options().length
                ) {
                    <div
                        class="gradient border-base-content flex items-center space-x-2 border-l-8 px-4 py-3 font-medium"
                    >
                        <icon>tune</icon>
                        <div id="parking-space-restrictions-label">
                            {{
                                'BOOKINGS.PARKING_SPACE_RESTRICTIONS_TITLE'
                                    | translate
                            }}
                            @if (require_space_restriction()) {
                                <span aria-hidden="true">*</span>
                            }
                        </div>
                    </div>
                    <div class="space-y-3 p-4">
                        <p class="text-sm opacity-60">
                            {{
                                'BOOKINGS.PARKING_SPACE_RESTRICTIONS_DESC'
                                    | translate
                            }}
                        </p>
                        @if (space_restriction_options().length) {
                            <mat-radio-group
                                class="flex flex-col gap-2"
                                aria-labelledby="parking-space-restrictions-label"
                                [attr.aria-required]="
                                    require_space_restriction()
                                "
                                [attr.aria-invalid]="
                                    form().space_restrictions().invalid()
                                "
                                [formField]="form().space_restrictions"
                            >
                                @for (
                                    option of space_restriction_options();
                                    track trackById(option)
                                ) {
                                    <mat-radio-button [value]="option.id">
                                        {{ option.name | translate }}
                                    </mat-radio-button>
                                }
                            </mat-radio-group>
                            @if (
                                require_space_restriction() &&
                                form().space_restrictions().touched() &&
                                form().space_restrictions().invalid()
                            ) {
                                <p class="text-error text-sm" role="alert">
                                    {{
                                        'BOOKINGS.PARKING_SPACE_RESTRICTION_REQUIRED'
                                            | translate
                                    }}
                                </p>
                            }
                        }
                        @if (extra_space_restriction_options().length) {
                            <div class="flex flex-col gap-2">
                                @for (
                                    option of extra_space_restriction_options();
                                    track trackById(option)
                                ) {
                                    <settings-toggle
                                        [label]="option.name | translate"
                                        [ngModel]="
                                            isExtraRestrictionSelected(
                                                option.id
                                            )
                                        "
                                        (ngModelChange)="
                                            setExtraRestriction(
                                                option.id,
                                                $event
                                            )
                                        "
                                        [ngModelOptions]="{ standalone: true }"
                                    ></settings-toggle>
                                }
                            </div>
                        }
                    </div>
                }
            </div>
        }
    `, imports: [
      CommonModule,
      FormsModule,
      FormField,
      MatAutocompleteModule,
      MatFormFieldModule,
      MatInputModule,
      MatRadioModule,
      MatSelectModule,
      MatTooltipModule,
      TranslatePipe,
      IconComponent,
      DateFieldComponent,
      UserSearchFieldComponent,
      SettingsToggleComponent,
      MatRippleModule
    ], styles: ["/* angular:styles/component:css;3969732fa8a6995c9449a9ed86fb4979a28ba38038cac555e3a6a8befda2e8d7;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/book/parking-request-flow/parking-request-form-details.component.ts */\n.gradient {\n  background:\n    linear-gradient(\n      105deg,\n      var(--base-200) 0%,\n      var(--base-200) 50%,\n      var(--base-100) 100%);\n}\n/*# sourceMappingURL=parking-request-form-details.component.css.map */\n"] }]
  }], () => [], { form: [{ type: Input, args: [{ isSignal: true, alias: "form", required: false }] }], model_input: [{ type: Input, args: [{ isSignal: true, alias: "model_input", required: false }] }], show_special_needs: [{ type: Input, args: [{ isSignal: true, alias: "show_special_needs", required: false }] }], force_show_host_select: [{ type: Input, args: [{ isSignal: true, alias: "force_show_host_select", required: false }] }], force_allow_any_host: [{ type: Input, args: [{ isSignal: true, alias: "force_allow_any_host", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingRequestFormDetailsComponent, { className: "ParkingRequestFormDetailsComponent", filePath: "apps/workplace/src/app/book/parking-request-flow/parking-request-form-details.component.ts", lineNumber: 1364 });
})();

// apps/concierge/src/app/parking/parking-request-modal.component.ts
function ParkingRequestModalComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "icon");
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 8);
    \u0275\u0275element(7, "div", 9);
    \u0275\u0275pipe(8, "sanitize");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "BOOKINGS.PARKING_SUMMARY_TITLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(8, 4, ctx_r0.submission_notes_html()), \u0275\u0275sanitizeHtml);
  }
}
var ParkingRequestModalComponent = class _ParkingRequestModalComponent extends AsyncHandler {
  constructor() {
    super();
    this._data = inject(MAT_DIALOG_DATA);
    this._booking_form = inject(BookingFormService);
    this._parking = inject(ParkingService);
    this._dialog_ref = inject(MatDialogRef);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_special_needs = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_special_needs" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_book_for_anyone = settingSignal("parking.can_book_for_anyone", false);
    this.submission_notes_html = settingSignal("parking.request_submission_notes_html", "");
    this.form = this._booking_form.form;
    this.model = this._booking_form.model;
    this._parking.loadBookings();
  }
  async ngOnInit() {
    this._booking_form.newForm("parking", this._data.booking);
    this._booking_form.setOptions({ type: "parking" });
    const form_value = this.model();
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      user: form_value.user || currentUser(),
      title: form_value.title || "Parking Request",
      booking_type: "parking",
      request_type: form_value.request_type || "standard",
      vehicle_type: form_value.vehicle_type || "car",
      space_restrictions: form_value.space_restrictions ?? false,
      extra_space_restrictions: form_value.extra_space_restrictions || [],
      prefer_booked_location_first: form_value.prefer_booked_location_first ?? false,
      date: form_value.date || this._defaultStartDate(),
      duration: form_value.duration || 540,
      all_day: form_value.all_day ?? false,
      recurrence_type: form_value.recurrence_type || "none"
    }));
    const parking_user = this._parking.user_details();
    if (parking_user?.email) {
      if (!this.model().plate_number) {
        this.model.update((m) => __spreadProps(__spreadValues({}, m), {
          plate_number: this._settings.get("plate_number") || parking_user.plate_number || ""
        }));
      }
      this.show_special_needs.set(!!parking_user.special_needs);
    }
  }
  async postForm() {
    if (!this.model().date) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        date: roundToNearestMinutes(Date.now(), {
          nearestTo: 5,
          roundingMethod: "ceil"
        }).valueOf()
      }));
    }
    const building = this._org.building;
    const form_value = this.model();
    const plate_number = `${form_value.plate_number || ""}`.trim();
    const booking_user_email = form_value.user?.email?.trim().toLowerCase();
    const current_user_email = currentUser()?.email?.trim().toLowerCase();
    const save_plate_number = !!current_user_email && booking_user_email === current_user_email;
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      asset_id: form_value.asset_id || `unallocated-${randomString(8)}`,
      asset_name: "Parking Request",
      description: "Parking Request",
      title: form_value.title || "Parking Request",
      booking_type: "parking",
      plate_number,
      zones: unique([
        this._org.organisation.id,
        this._org.region?.id,
        building?.id
      ]).filter((_) => _)
    }));
    this.form().markAsTouched();
    if (this.form().invalid()) {
      return notifyError(i18n("FORM.INVALID_FIELDS", {
        field_list: getInvalidSignalFields(this.form, this.model).join(", ")
      }));
    }
    this.loading.set(true);
    this._dialog_ref.disableClose = true;
    const result = await this._booking_form.postForm(false, false).catch((e) => {
      notifyError(e?.message || e?.error || e);
      this.loading.set(false);
      this._dialog_ref.disableClose = false;
      throw e;
    });
    if (!form_value.id && result?.id && result.status !== "approved") {
      await approveBooking(result.id).catch((e) => {
        notifyError(e?.message || e?.error || e);
        this.loading.set(false);
        this._dialog_ref.disableClose = false;
        throw e;
      });
    }
    if (save_plate_number)
      this._savePlateNumber(plate_number);
    notifySuccess(i18n("APP.CONCIERGE.PARKING_REQUEST_SAVE"));
    this._booking_form.clearForm();
    this._dialog_ref.close(result.id);
  }
  _savePlateNumber(plate_number) {
    if (!plate_number)
      return;
    const saved_plate_numbers = this._settings.get("plate_numbers");
    const plate_numbers = Array.isArray(saved_plate_numbers) ? saved_plate_numbers : [];
    this._settings.saveUserSetting("plate_numbers", [
      plate_number,
      ...plate_numbers.filter((_) => typeof _ === "string" && _.trim().toLowerCase() !== plate_number.toLowerCase())
    ]);
  }
  _defaultStartDate() {
    const date = this._data.date || Date.now();
    const today_start = startOfDay(Date.now()).valueOf();
    const day_start = startOfDay(date).valueOf();
    if (day_start > today_start)
      return day_start + 8 * 60 * 60 * 1e3;
    return roundToNearestMinutes(Date.now(), {
      nearestTo: 5,
      roundingMethod: "ceil"
    }).valueOf();
  }
  static {
    this.\u0275fac = function ParkingRequestModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingRequestModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingRequestModalComponent, selectors: [["parking-request-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 19, vars: 22, consts: [[3, "confirm", "heading", "loading"], [1, "mx-auto", "-mb-4", "w-7xl", "max-w-full", "space-y-4"], [1, "flex", "w-full", "flex-col"], [1, "gradient", "border-base-content", "relative", "flex", "items-center", "space-x-2", "border-l-8", "px-4", "py-3", "text-xl", "font-medium"], [1, "px-6", "py-4"], [1, "opacity-60"], [3, "form", "model_input", "show_special_needs", "force_show_host_select", "force_allow_any_host"], [1, "gradient", "border-base-content", "flex", "items-center", "space-x-2", "border-l-8", "px-4", "py-3", "font-medium"], [1, "border-base-300", "bg-base-100", "rounded-xl", "border", "p-4"], [1, "prose", "prose-sm", "max-w-none", 3, "innerHTML"]], template: function ParkingRequestModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275listener("confirm", function ParkingRequestModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.postForm();
        });
        \u0275\u0275elementStart(4, "div", 1)(5, "div", 2)(6, "div", 3)(7, "icon");
        \u0275\u0275text(8, "local_parking");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div");
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 4)(14, "p", 5);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(17, "parking-request-form-details", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(18, ParkingRequestModalComponent_Conditional_18_Template, 9, 6);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", ctx.model().id ? \u0275\u0275pipeBind1(1, 10, "APP.CONCIERGE.PARKING_REQUEST_EDIT") : \u0275\u0275pipeBind1(2, 12, "APP.CONCIERGE.PARKING_REQUEST_NEW"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(3, 14, "COMMON.SAVING") : "");
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1(" ", ctx.model().id ? \u0275\u0275pipeBind1(11, 16, "APP.CONCIERGE.PARKING_REQUEST_EDIT") : \u0275\u0275pipeBind1(12, 18, "BOOKINGS.PARKING_REQUEST_TITLE"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 20, "BOOKINGS.PARKING_REQUEST_SUBTITLE"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("form", ctx.form)("model_input", ctx.model)("show_special_needs", ctx.show_special_needs())("force_show_host_select", true)("force_allow_any_host", ctx.can_book_for_anyone());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.submission_notes_html() ? 18 : -1);
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      IconComponent,
      ParkingRequestFormDetailsComponent,
      TranslatePipe,
      SanitizePipe
    ], styles: ["\n.gradient[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      105deg,\n      var(--base-200) 0%,\n      var(--base-200) 50%,\n      var(--base-100) 100%);\n}\n/*# sourceMappingURL=parking-request-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingRequestModalComponent, [{
    type: Component,
    args: [{ selector: "parking-request-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                model().id
                    ? ('APP.CONCIERGE.PARKING_REQUEST_EDIT' | translate)
                    : ('APP.CONCIERGE.PARKING_REQUEST_NEW' | translate)
            "
            [loading]="loading() ? ('COMMON.SAVING' | translate) : ''"
            (confirm)="postForm()"
        >
            <div class="mx-auto -mb-4 w-7xl max-w-full space-y-4">
                <div class="flex w-full flex-col">
                    <div
                        class="gradient border-base-content relative flex items-center space-x-2 border-l-8 px-4 py-3 text-xl font-medium"
                    >
                        <icon>local_parking</icon>
                        <div>
                            {{
                                model().id
                                    ? ('APP.CONCIERGE.PARKING_REQUEST_EDIT'
                                      | translate)
                                    : ('BOOKINGS.PARKING_REQUEST_TITLE'
                                      | translate)
                            }}
                        </div>
                    </div>
                    <div class="px-6 py-4">
                        <p class="opacity-60">
                            {{
                                'BOOKINGS.PARKING_REQUEST_SUBTITLE' | translate
                            }}
                        </p>
                    </div>

                    <parking-request-form-details
                        [form]="form"
                        [model_input]="model"
                        [show_special_needs]="show_special_needs()"
                        [force_show_host_select]="true"
                        [force_allow_any_host]="can_book_for_anyone()"
                    ></parking-request-form-details>
                </div>
                @if (submission_notes_html()) {
                    <div
                        class="gradient border-base-content flex items-center space-x-2 border-l-8 px-4 py-3 font-medium"
                    >
                        <icon>info</icon>
                        <div>
                            {{ 'BOOKINGS.PARKING_SUMMARY_TITLE' | translate }}
                        </div>
                    </div>
                    <div
                        class="border-base-300 bg-base-100 rounded-xl border p-4"
                    >
                        <div
                            class="prose prose-sm max-w-none"
                            [innerHTML]="submission_notes_html() | sanitize"
                        ></div>
                    </div>
                }
            </div>
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      TranslatePipe,
      SanitizePipe,
      IconComponent,
      ParkingRequestFormDetailsComponent
    ], styles: ["/* angular:styles/component:css;3969732fa8a6995c9449a9ed86fb4979a28ba38038cac555e3a6a8befda2e8d7;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/parking/parking-request-modal.component.ts */\n.gradient {\n  background:\n    linear-gradient(\n      105deg,\n      var(--base-200) 0%,\n      var(--base-200) 50%,\n      var(--base-100) 100%);\n}\n/*# sourceMappingURL=parking-request-modal.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingRequestModalComponent, { className: "ParkingRequestModalComponent", filePath: "apps/concierge/src/app/parking/parking-request-modal.component.ts", lineNumber: 116 });
})();

// apps/concierge/src/app/parking/parking-space-modal.component.ts
var _c08 = (a0) => ({ count: a0 });
function ParkingSpaceModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ParkingSpaceModalComponent_Conditional_6_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "icon", 21);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 22);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(5, 1, "APP.CONCIERGE.ASSIGNED_FUTURE_PARKING_BOOKINGS", \u0275\u0275pureFunction1(5, _c08, ctx_r1.future_bookings().length), ctx_r1.future_bookings().length), " ");
  }
}
function ParkingSpaceModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 4)(1, "label", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 8);
    \u0275\u0275element(5, "input", 9);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "label", 10);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-form-field", 8);
    \u0275\u0275element(14, "input", 9);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(16, "mat-error");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "label", 11);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 12);
    \u0275\u0275element(23, "a-user-search-field", 13);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(24, "button", 14);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275listener("click", function ParkingSpaceModalComponent_Conditional_6_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearUser());
    });
    \u0275\u0275elementStart(26, "icon", 15);
    \u0275\u0275text(27, " person_cancel ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(28, ParkingSpaceModalComponent_Conditional_6_Conditional_28_Template, 6, 7, "div", 16);
    \u0275\u0275elementStart(29, "div", 17);
    \u0275\u0275element(30, "settings-toggle", 18);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "label");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "item-list-field", 19);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(37, "label");
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "item-list-field", 19);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(42, "label", 20);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "mat-form-field", 8);
    \u0275\u0275element(46, "textarea", 9);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 23, "APP.CONCIERGE.PARKING_SPACE_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 25, "APP.CONCIERGE.PARKING_SPACE_NAME"))("formField", ctx_r1.form.identifier);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 27, "FORM.NAME_REQUIRED"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 29, "EXPLORE.MAP_ID"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(15, 31, "EXPLORE.MAP_ID_PLACEHOLDER"))("formField", ctx_r1.form.map_id);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 33, "EXPLORE.MAP_ID_REQUIRED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 35, "APP.CONCIERGE.USER_ASSIGNED"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.assigned_user);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(25, 37, "APP.CONCIERGE.USER_CLEAR"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.future_bookings().length ? 28 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r1.form.bookable)("label", \u0275\u0275pipeBind1(31, 39, "COMMON.BOOKABLE"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 41, "COMMON.GROUPS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(36, 43, "BOOKINGS.GROUPS"))("formField", ctx_r1.form.place_groups);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 45, "COMMON.FEATURES"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(41, 47, "COMMON.FEATURES"))("formField", ctx_r1.form.features);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 49, "FORM.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(47, 51, "FORM.NOTES"))("formField", ctx_r1.form.notes);
    \u0275\u0275control();
  }
}
function ParkingSpaceModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 5);
    \u0275\u0275element(1, "mat-spinner", 23);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.PARKING_SPACE_SAVE"));
  }
}
function ParkingSpaceModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 6)(1, "button", 24);
    \u0275\u0275listener("click", function ParkingSpaceModalComponent_Conditional_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.postForm());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.SAVE"), " ");
  }
}
var ParkingSpaceModalComponent = class _ParkingSpaceModalComponent {
  get id() {
    return this._data?.id || "";
  }
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.event = new EventEmitter();
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.future_bookings = signal(
      [],
      ...ngDevMode ? [{ debugName: "future_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._assigned_email = computed(
      () => this.model().assigned_to,
      ...ngDevMode ? [{ debugName: "_assigned_email" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.model = signal(
      {
        id: "",
        identifier: "",
        map_id: "",
        assigned_user: null,
        assigned_to: "",
        assigned_name: "",
        bookable: false,
        place_groups: [],
        features: [],
        notes: "",
        map_rotation: 0
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (p) => {
      required(p.identifier);
      required(p.map_id);
    });
    const data = this._data;
    if (data) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        id: data.id ?? m.id,
        identifier: data.identifier ?? m.identifier,
        map_id: data.map_id || data.other_data?.map_id || m.map_id,
        assigned_to: data.assigned_to ?? m.assigned_to,
        assigned_name: data.assigned_name ?? m.assigned_name,
        bookable: data.bookable ?? m.bookable,
        place_groups: [...data.place_groups || m.place_groups],
        features: [...data.features || m.features],
        notes: data.notes ?? m.notes,
        map_rotation: data.map_rotation ?? m.map_rotation
      }));
    }
    effect(() => this._checkFutureBookings(this._assigned_email()));
  }
  /**
   * Warn when the assigned user already has upcoming parking bookings. The
   * space being edited is excluded so its own assignment booking does not
   * trigger the warning.
   */
  async _checkFutureBookings(email) {
    if (!email) {
      this.future_bookings.set([]);
      return;
    }
    const now = Date.now();
    const bookings = await queryBookings({
      period_start: getUnixTime(now),
      period_end: getUnixTime(addMonths(now, 12)),
      type: "parking",
      email,
      include_checked_out: true
    });
    if (this._assigned_email() !== email)
      return;
    this.future_bookings.set(bookings.filter((booking) => booking.asset_id !== this.id));
  }
  async ngOnInit() {
    if (this._data.assigned_to) {
      const user = await showStaff(this._data.assigned_to);
      if (user) {
        this.model.update((m) => __spreadProps(__spreadValues({}, m), {
          assigned_user: user,
          assigned_to: user.email,
          assigned_name: user.name
        }));
      }
    }
  }
  clearUser() {
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      assigned_user: null,
      assigned_to: "",
      assigned_name: ""
    }));
  }
  postForm() {
    this.form().markAsTouched();
    if (!this.form().valid())
      return;
    this.loading.set(true);
    const value = __spreadValues({}, this.model());
    if (value.assigned_user) {
      value.assigned_to = value.assigned_user.email;
      value.assigned_name = value.assigned_user.name;
    }
    delete value.assigned_user;
    this._dialog_ref.disableClose = true;
    this.event.emit({ reason: "done", metadata: value });
  }
  static {
    this.\u0275fac = function ParkingSpaceModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingSpaceModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceModalComponent, selectors: [["parking-space-modal"]], outputs: { event: "event" }, decls: 9, vars: 6, consts: [[1, "w-md"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "min-h-12", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "max-h-[65vh]", "flex-col", "overflow-auto", "p-4"], [1, "flex", "min-h-48", "flex-col", "items-center", "justify-center", "space-y-2", "p-12"], [1, "border-base-300", "flex", "items-center", "justify-end", "space-x-2", "border-t", "px-4", "py-2"], ["for", "identifier"], ["appearance", "outline"], ["matInput", "", 3, "placeholder", "formField"], ["for", "map-id"], ["for", "user"], [1, "mb-4", "flex", "space-x-2"], [1, "flex-1", 3, "formField"], ["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "min-w-12", "rounded-sm", 3, "click", "matTooltip"], ["className", "material-symbols-outlined"], [1, "bg-warning/10", "border-warning", "text-warning-content", "mb-4", "flex", "items-start", "space-x-2", "rounded-sm", "border", "p-2", "text-sm"], [1, "flex", "space-x-4", "pb-4"], [1, "w-full", 3, "formField", "label"], [1, "w-full", 3, "placeholder", "formField"], ["for", "notes"], [1, "text-warning"], [1, "flex-1"], ["diameter", "32"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"]], template: function ParkingSpaceModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, ParkingSpaceModalComponent_Conditional_5_Template, 3, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, ParkingSpaceModalComponent_Conditional_6_Template, 48, 53, "main", 4)(7, ParkingSpaceModalComponent_Conditional_7_Template, 5, 3, "main", 5);
        \u0275\u0275conditionalCreate(8, ParkingSpaceModalComponent_Conditional_8_Template, 4, 3, "footer", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, ctx.id ? "APP.CONCIERGE.PARKING_SPACE_EDIT" : "APP.CONCIERGE.PARKING_SPACE_NEW"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 6 : 7);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 8 : -1);
      }
    }, dependencies: [
      MatDialogModule,
      MatDialogClose,
      MatRippleModule,
      MatRipple,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      IconComponent,
      ItemListFieldComponent,
      SettingsToggleComponent,
      UserSearchFieldComponent,
      FormField,
      MatTooltipModule,
      MatTooltip,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingSpaceModalComponent, [{
    type: Component,
    args: [{ selector: "parking-space-modal", template: `
        <div class="w-md">
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 min-h-12 w-[calc(100%-1rem)] rounded-sm border-none p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    {{
                        (id
                            ? 'APP.CONCIERGE.PARKING_SPACE_EDIT'
                            : 'APP.CONCIERGE.PARKING_SPACE_NEW'
                        ) | translate
                    }}
                </h2>
                @if (!loading()) {
                    <button icon matRipple mat-dialog-close>
                        <icon>close</icon>
                    </button>
                }
            </header>
            @if (!loading()) {
                <main class="flex max-h-[65vh] flex-col overflow-auto p-4">
                    <label for="identifier">{{
                        'APP.CONCIERGE.PARKING_SPACE_NAME' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="
                                'APP.CONCIERGE.PARKING_SPACE_NAME' | translate
                            "
                            [formField]="form.identifier"
                        />
                        <mat-error>{{
                            'FORM.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                    <label for="map-id">{{
                        'EXPLORE.MAP_ID' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="
                                'EXPLORE.MAP_ID_PLACEHOLDER' | translate
                            "
                            [formField]="form.map_id"
                        />
                        <mat-error>
                            {{ 'EXPLORE.MAP_ID_REQUIRED' | translate }}
                        </mat-error>
                    </mat-form-field>
                    <label for="user">{{
                        'APP.CONCIERGE.USER_ASSIGNED' | translate
                    }}</label>
                    <div class="mb-4 flex space-x-2">
                        <a-user-search-field
                            [formField]="form.assigned_user"
                            class="flex-1"
                        ></a-user-search-field>
                        <button
                            icon
                            matRipple
                            class="bg-secondary text-secondary-content h-12 w-12 min-w-12 rounded-sm"
                            [matTooltip]="
                                'APP.CONCIERGE.USER_CLEAR' | translate
                            "
                            (click)="clearUser()"
                        >
                            <icon className="material-symbols-outlined">
                                person_cancel
                            </icon>
                        </button>
                    </div>
                    @if (future_bookings().length) {
                        <div
                            class="bg-warning/10 border-warning text-warning-content mb-4 flex items-start space-x-2 rounded-sm border p-2 text-sm"
                        >
                            <icon class="text-warning">warning</icon>
                            <p class="flex-1">
                                {{
                                    'APP.CONCIERGE.ASSIGNED_FUTURE_PARKING_BOOKINGS'
                                        | translate
                                            : { count: future_bookings().length }
                                            : future_bookings().length
                                }}
                            </p>
                        </div>
                    }
                    <div class="flex space-x-4 pb-4">
                        <settings-toggle
                            [formField]="form.bookable"
                            class="w-full"
                            [label]="'COMMON.BOOKABLE' | translate"
                        >
                        </settings-toggle>
                    </div>
                    <label>{{ 'COMMON.GROUPS' | translate }}</label>
                    <item-list-field
                        class="w-full"
                        [placeholder]="'BOOKINGS.GROUPS' | translate"
                        [formField]="form.place_groups"
                    ></item-list-field>
                    <label>{{ 'COMMON.FEATURES' | translate }}</label>
                    <item-list-field
                        class="w-full"
                        [placeholder]="'COMMON.FEATURES' | translate"
                        [formField]="form.features"
                    ></item-list-field>
                    <label for="notes">{{ 'FORM.NOTES' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <textarea
                            matInput
                            [placeholder]="'FORM.NOTES' | translate"
                            [formField]="form.notes"
                        ></textarea>
                    </mat-form-field>
                </main>
            } @else {
                <main
                    class="flex min-h-48 flex-col items-center justify-center space-y-2 p-12"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ 'APP.CONCIERGE.PARKING_SPACE_SAVE' | translate }}</p>
                </main>
            }
            @if (!loading()) {
                <footer
                    class="border-base-300 flex items-center justify-end space-x-2 border-t px-4 py-2"
                >
                    <button btn matRipple class="w-32" (click)="postForm()">
                        {{ 'COMMON.SAVE' | translate }}
                    </button>
                </footer>
            }
        </div>
    `, imports: [
      MatDialogModule,
      TranslatePipe,
      MatRippleModule,
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatInputModule,
      IconComponent,
      ItemListFieldComponent,
      SettingsToggleComponent,
      UserSearchFieldComponent,
      FormField,
      MatTooltipModule
    ] }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceModalComponent, { className: "ParkingSpaceModalComponent", filePath: "apps/concierge/src/app/parking/parking-space-modal.component.ts", lineNumber: 191 });
})();

// apps/concierge/src/app/parking/parking-user-modal.component.ts
function ParkingUserModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ParkingUserModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 4)(1, "div", 7);
    \u0275\u0275element(2, "a-user-search-field", 8);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(3, "button", 9);
    \u0275\u0275listener("click", function ParkingUserModalComponent_Conditional_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearUser());
    });
    \u0275\u0275elementStart(4, "icon", 10);
    \u0275\u0275text(5, " person_cancel ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "label", 11);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-form-field", 12);
    \u0275\u0275element(10, "input", 13);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(11, "mat-error");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "label", 14);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-form-field", 12);
    \u0275\u0275element(18, "input", 15);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(20, "mat-error");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 16)(24, "div", 17)(25, "label", 18);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-form-field", 19);
    \u0275\u0275element(29, "input", 15);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 17)(32, "label", 20);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-form-field", 19);
    \u0275\u0275element(36, "input", 15);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "label", 21);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "mat-form-field", 12);
    \u0275\u0275element(42, "textarea", 15);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 22);
    \u0275\u0275element(45, "settings-toggle", 23);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r1.form.user);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 19, "FORM.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.name);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 21, "FORM.NAME_REQUIRED"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 23, "FORM.EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.email)("placeholder", \u0275\u0275pipeBind1(19, 25, "FORM.EMAIL"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 27, "FORM.EMAIL_REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 29, "BOOKINGS.PARKING_PLATE_NUMBER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.plate_number)("placeholder", \u0275\u0275pipeBind1(30, 31, "BOOKINGS.PARKING_PLATE_NUMBER"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 33, "APP.CONCIERGE.PARKING_CAR_COLOUR"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.car_colour)("placeholder", \u0275\u0275pipeBind1(37, 35, "APP.CONCIERGE.PARKING_CAR_COLOUR"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 37, "FORM.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.notes)("placeholder", \u0275\u0275pipeBind1(43, 39, "FORM.NOTES"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(46, 41, "APP.CONCIERGE.PARKING_USER_DENY_PLACEHOLER"))("formField", ctx_r1.form.deny);
    \u0275\u0275control();
  }
}
function ParkingUserModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 5);
    \u0275\u0275element(1, "mat-spinner", 24);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.PARKING_USER_SAVE"));
  }
}
function ParkingUserModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 6)(1, "button", 25);
    \u0275\u0275listener("click", function ParkingUserModalComponent_Conditional_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.postForm());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.SAVE"), " ");
  }
}
var ParkingUserModalComponent = class _ParkingUserModalComponent extends AsyncHandler {
  constructor() {
    super();
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.event = new EventEmitter();
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.id = computed(
      () => this._data?.id || "",
      ...ngDevMode ? [{ debugName: "id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._injector = inject(Injector);
    this.model = signal(
      {
        id: "",
        user: null,
        name: "",
        email: "",
        plate_number: "",
        car_colour: "",
        notes: "",
        deny: false
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (p) => {
      required(p.name);
      required(p.email);
    });
    const data = this._data;
    if (data) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        id: data.id ?? m.id,
        name: data.name ?? m.name,
        email: data.email ?? m.email,
        plate_number: data.plate_number ?? m.plate_number,
        car_colour: data.car_colour || data.car_color || "",
        notes: data.notes ?? m.notes,
        deny: data.deny ?? m.deny
      }));
    }
    onFieldChange(this.model, (m) => m.user, (user) => {
      if (user?.id && user?.email !== this.model().email) {
        this.model.update((m) => __spreadProps(__spreadValues({}, m), {
          email: user.email,
          name: user.name
        }));
      }
    }, this._injector);
  }
  clearUser() {
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      user: null,
      email: "",
      name: ""
    }));
  }
  postForm() {
    this.form().markAsTouched();
    if (!this.form().valid())
      return;
    this.loading.set(true);
    const value = __spreadValues({}, this.model());
    if (value.user) {
      value.email = value.user.email;
      value.name = value.user.name;
    }
    this._dialog_ref.disableClose = true;
    this.event.emit({ reason: "done", metadata: value });
  }
  static {
    this.\u0275fac = function ParkingUserModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingUserModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingUserModalComponent, selectors: [["parking-user-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 6, consts: [[1, "w-md"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "min-h-12", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "max-h-[65vh]", "flex-col", "overflow-auto", "p-4"], [1, "user-y-2", "flex", "flex-col", "items-center", "justify-center", "p-8"], [1, "border-base-300", "flex", "items-center", "justify-end", "space-x-2", "border-t", "px-4", "py-2"], [1, "mb-4", "flex", "space-x-2"], [1, "flex-1", 3, "formField"], ["icon", "", "matRipple", "", "matTooltip", "Clear Selected User", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "min-w-12", "rounded-sm", 3, "click"], ["className", "material-symbols-outlined"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "placeholder", "Name", 3, "formField"], ["for", "email"], ["matInput", "", 3, "formField", "placeholder"], [1, "flex", "items-center", "space-x-2"], [1, "w-1/3", "flex-1"], ["for", "plate-number"], ["appearance", "outline", 1, "w-full"], ["for", "car-color"], ["for", "notes"], [1, "mb-4", "flex", "items-center"], [1, "flex-1", 3, "label", "formField"], ["diameter", "32"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"]], template: function ParkingUserModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, ParkingUserModalComponent_Conditional_5_Template, 3, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, ParkingUserModalComponent_Conditional_6_Template, 47, 43, "main", 4)(7, ParkingUserModalComponent_Conditional_7_Template, 5, 3, "main", 5);
        \u0275\u0275conditionalCreate(8, ParkingUserModalComponent_Conditional_8_Template, 4, 3, "footer", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, ctx.id() ? "APP.CONCIERGE.PARKING_USER_EDIT" : "APP.CONCIERGE.PARKING_USER_NEW"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 6 : 7);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 8 : -1);
      }
    }, dependencies: [
      IconComponent,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      SettingsToggleComponent,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      FormField,
      MatTooltipModule,
      MatTooltip,
      UserSearchFieldComponent,
      MatDialogModule,
      MatDialogClose,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingUserModalComponent, [{
    type: Component,
    args: [{ selector: "parking-user-modal", template: `
        <div class="w-md">
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 min-h-12 w-[calc(100%-1rem)] rounded-sm border-none p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    {{
                        (id()
                            ? 'APP.CONCIERGE.PARKING_USER_EDIT'
                            : 'APP.CONCIERGE.PARKING_USER_NEW'
                        ) | translate
                    }}
                </h2>
                @if (!loading()) {
                    <button icon matRipple mat-dialog-close>
                        <icon>close</icon>
                    </button>
                }
            </header>
            @if (!loading()) {
                <main class="flex max-h-[65vh] flex-col overflow-auto p-4">
                    <div class="mb-4 flex space-x-2">
                        <a-user-search-field
                            [formField]="form.user"
                            class="flex-1"
                        ></a-user-search-field>
                        <button
                            icon
                            matRipple
                            class="bg-secondary text-secondary-content h-12 w-12 min-w-12 rounded-sm"
                            matTooltip="Clear Selected User"
                            (click)="clearUser()"
                        >
                            <icon className="material-symbols-outlined">
                                person_cancel
                            </icon>
                        </button>
                    </div>
                    <label for="name">{{ 'FORM.NAME' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [formField]="form.name"
                            placeholder="Name"
                        />
                        <mat-error>{{
                            'FORM.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                    <label for="email">{{ 'FORM.EMAIL' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [formField]="form.email"
                            [placeholder]="'FORM.EMAIL' | translate"
                        />
                        <mat-error>{{
                            'FORM.EMAIL_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                    <div class="flex items-center space-x-2">
                        <div class="w-1/3 flex-1">
                            <label for="plate-number">{{
                                'BOOKINGS.PARKING_PLATE_NUMBER' | translate
                            }}</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    [formField]="form.plate_number"
                                    [placeholder]="
                                        'BOOKINGS.PARKING_PLATE_NUMBER'
                                            | translate
                                    "
                                />
                            </mat-form-field>
                        </div>
                        <div class="w-1/3 flex-1">
                            <label for="car-color">{{
                                'APP.CONCIERGE.PARKING_CAR_COLOUR' | translate
                            }}</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    [formField]="form.car_colour"
                                    [placeholder]="
                                        'APP.CONCIERGE.PARKING_CAR_COLOUR'
                                            | translate
                                    "
                                />
                            </mat-form-field>
                        </div>
                    </div>
                    <label for="notes">{{ 'FORM.NOTES' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <textarea
                            matInput
                            [formField]="form.notes"
                            [placeholder]="'FORM.NOTES' | translate"
                        ></textarea>
                    </mat-form-field>
                    <div class="mb-4 flex items-center">
                        <settings-toggle
                            class="flex-1"
                            [label]="
                                'APP.CONCIERGE.PARKING_USER_DENY_PLACEHOLER'
                                    | translate
                            "
                            [formField]="form.deny"
                        >
                        </settings-toggle>
                    </div>
                </main>
            } @else {
                <main
                    class="user-y-2 flex flex-col items-center justify-center p-8"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ 'APP.CONCIERGE.PARKING_USER_SAVE' | translate }}</p>
                </main>
            }
            @if (!loading()) {
                <footer
                    class="border-base-300 flex items-center justify-end space-x-2 border-t px-4 py-2"
                >
                    <button btn matRipple class="w-32" (click)="postForm()">
                        {{ 'COMMON.SAVE' | translate }}
                    </button>
                </footer>
            }
        </div>
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatProgressSpinnerModule,
      MatRippleModule,
      SettingsToggleComponent,
      MatFormFieldModule,
      MatInputModule,
      FormField,
      MatTooltipModule,
      UserSearchFieldComponent,
      MatDialogModule
    ] }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingUserModalComponent, { className: "ParkingUserModalComponent", filePath: "apps/concierge/src/app/parking/parking-user-modal.component.ts", lineNumber: 183 });
})();

// apps/concierge/src/app/parking/parking-state.service.ts
var USER_PIPE = new UserPipe();
var PARKING_SPACE_PIPE = new ParkingSpacePipe();
var MAX_BOOKING_PAGES = 50;
function csvList(value) {
  const list = Array.isArray(value) ? value : String(value || "").split(/[|,]/);
  return list.map((_) => String(_).trim()).filter(Boolean);
}
function csvString(value) {
  return value === null || value === void 0 ? "" : String(value).trim();
}
function csvBoolean(value) {
  return value === true || csvString(value).toLowerCase() === "true";
}
function stripParkingZones(space) {
  const metadata = __spreadValues({}, space);
  Reflect.deleteProperty(metadata, "zone_id");
  Reflect.deleteProperty(metadata, "zones");
  return metadata;
}
var ParkingStateService = class _ParkingStateService extends AsyncHandler {
  get timezone() {
    return this._settings.get("app.bookings.use_building_timezone") || this._settings.get("app.parking.use_building_timezone") ? this._org.building?.timezone : "";
  }
  get tz_offset() {
    const tz = this.timezone;
    const current_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return !tz ? 0 : getTimezoneDifferenceInHours(current_tz, tz);
  }
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this._options = signal(
      {
        date: Date.now(),
        period: "day",
        all_day: true,
        duration: 60,
        search: "",
        zones: [],
        request_filter: "all"
      },
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.org_initialised = this._org.initialised;
    this.options = this._options.asReadonly();
    this.period = computed(
      () => this._options().period,
      ...ngDevMode ? [{ debugName: "period" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._use_region = this._settings.signal("use_region", false);
    this.levels = computed(
      () => {
        const use_region = this._use_region();
        this._org.active_region();
        const bld = this._org.active_building();
        if (!bld)
          return [];
        const levels = this._org.levels.filter((_) => _.tags.includes("parking"));
        if (use_region) {
          const blds = this._org.buildingsForRegion();
          const bld_ids = blds.map((building) => building.id);
          return levels.filter((lvl) => bld_ids.includes(lvl.parent_id));
        }
        return levels.filter((lvl) => lvl.parent_id === bld.id);
      },
      ...ngDevMode ? [{ debugName: "levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._bookable_levels_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_bookable_levels_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this.levels(),
      loader: async ({ params: levels }) => {
        if (!levels.length)
          return [];
        const checks = await Promise.all(levels.map(async (level) => {
          const spaces = await queryParkingSpacesForZones([
            level.id
          ]).catch(() => []);
          return { level, has_bookable: spaces.length > 0 };
        }));
        return checks.filter((item) => item.has_bookable).map((item) => item.level);
      }
    }));
    this.bookable_levels = computed(
      () => this._bookable_levels_resource.value() ?? [],
      ...ngDevMode ? [{ debugName: "bookable_levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._spaces_params = computed(() => {
      const levels = this.levels();
      const options = this._options();
      const zone_ids = options.zones.length ? options.zones : levels.map((lvl) => lvl.id);
      return zone_ids.length ? { zone_ids } : void 0;
    }, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_spaces_params" } : (
      /* istanbul ignore next */
      {}
    )), { equal: (a, b) => a === b || !!a && !!b && a.zone_ids.join() === b.zone_ids.join() }));
    this._spaces_params_debounced = debounced(this._spaces_params, 300);
    this._spaces_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_spaces_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._spaces_params_debounced.value(),
      loader: async ({ params: { zone_ids } }) => {
        const list = await queryParkingSpacesForZones(zone_ids);
        return list.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
      }
    }));
    this.spaces = computed(
      () => this._spaces_resource.value() ?? [],
      ...ngDevMode ? [{ debugName: "spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._bay_identifiers = signal(
      {},
      ...ngDevMode ? [{ debugName: "_bay_identifiers" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._users_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_users_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        const bld = this._org.active_building();
        return bld?.id ? { building: bld.id } : void 0;
      },
      loader: ({ params: { building } }) => queryParkingUsers(building)
    }));
    this.users = computed(
      () => this._users_resource.value() ?? [],
      ...ngDevMode ? [{ debugName: "users" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._fleet_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_fleet_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        const bld = this._org.active_building();
        return bld?.id ? { building: bld.id } : void 0;
      },
      loader: ({ params: { building } }) => queryParkingFleetVehicles(building)
    }));
    this.fleet_vehicles = computed(
      () => this._fleet_resource.value() ?? [],
      ...ngDevMode ? [{ debugName: "fleet_vehicles" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._bookings_params = computed(() => {
      const bld = this._org.active_building();
      const users = this._users_resource.value();
      return bld?.id && users ? { bld, options: this._options(), users } : void 0;
    }, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_bookings_params" } : (
      /* istanbul ignore next */
      {}
    )), { equal: (a, b) => a === b || !!a && !!b && a.bld === b.bld && a.users === b.users && a.options.date === b.options.date && a.options.period === b.options.period && a.options.zones.join() === b.options.zones.join() }));
    this._bookings_params_debounced = debounced(this._bookings_params, 500);
    this._bookings_state = signal(
      { list: [], total: 0, has_next: false },
      ...ngDevMode ? [{ debugName: "_bookings_state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._first_page = null;
    this._next_page_fn = null;
    this._load_token = 0;
    this._bookings_loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "_bookings_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._last_updated = signal(
      0,
      ...ngDevMode ? [{ debugName: "_last_updated" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.last_updated = this._last_updated.asReadonly();
    this.has_more_pages = computed(
      () => this._bookings_state().has_next,
      ...ngDevMode ? [{ debugName: "has_more_pages" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.bookings = computed(
      () => this._bookings_state().list,
      ...ngDevMode ? [{ debugName: "bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = computed(
      () => {
        const list = [];
        if (this._spaces_resource.isLoading())
          list.push("spaces");
        if (this._users_resource.isLoading())
          list.push("users");
        if (this._fleet_resource.isLoading())
          list.push("fleet");
        if (this._bookings_loading())
          list.push("[BOOKINGS]");
        return list;
      },
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const params = this._bookings_params_debounced.value();
      if (!params)
        return;
      this._first_page = this._buildFirstPage(params.options, params.bld);
      this._next_page_fn = this._first_page;
      this._loadPage(true);
    });
    effect(() => {
      const ids = unique(this.bookings().map((booking) => booking.asset_id).filter((id) => id && !id.startsWith("unallocated")));
      const known = untracked(this._bay_identifiers);
      const missing = ids.filter((id) => !(id in known));
      if (!missing.length)
        return;
      Promise.all(missing.map(async (id) => [
        id,
        (await PARKING_SPACE_PIPE.transform(id))?.identifier || ""
      ])).then((entries) => {
        this._bay_identifiers.update((current) => {
          const next = __spreadValues({}, current);
          for (const [id, identifier] of entries) {
            next[id] = identifier;
          }
          return next;
        });
      });
    });
  }
  nextPage() {
    this._loadPage(false);
  }
  /** Reload the first page of bookings for the active options */
  refresh() {
    this._next_page_fn = this._first_page;
    this._loadPage(true);
  }
  /** Build the first page query function for the given options */
  _buildFirstPage(options, bld) {
    const week_start = this._settings.get("app.week_start") || 0;
    const range_start = options.period === "week" ? startOfWeek(options.date, { weekStartsOn: week_start }) : startOfDay(options.date);
    const range_end = options.period === "week" ? endOfWeek(options.date, { weekStartsOn: week_start }) : endOfDay(options.date);
    const period_start = addMinutes(range_start, this.tz_offset * 60);
    const period_end = addMinutes(range_end, this.tz_offset * 60);
    return () => queryPagedBookings({
      period_start: getUnixTime(period_start),
      period_end: getUnixTime(period_end),
      type: "parking",
      zones: this._bookingQueryZone(options, bld),
      include_checked_out: true,
      include_deleted: true,
      limit: 500
    });
  }
  /**
   * Load a page of parking bookings, either resetting the list or appending
   * the next page. Stale responses are discarded if a newer load started.
   */
  async _loadPage(reset, page_count = 1) {
    const fetch = reset ? this._first_page : this._next_page_fn;
    if (!fetch) {
      if (reset) {
        this._bookings_state.set({
          list: [],
          total: 0,
          has_next: false
        });
      }
      return;
    }
    const token = ++this._load_token;
    this._bookings_loading.set(true);
    const resp = await Promise.resolve(fetch()).catch(() => ({
      data: [],
      total: 0,
      next: null
    }));
    if (token !== this._load_token)
      return;
    const { data = [], total = 0, next = null } = resp || {};
    const users = this._users_resource.value() || [];
    for (const booking of data) {
      const user = users.find((_) => _.email.toLowerCase() === booking.user_email.toLowerCase());
      if (user) {
        booking.extension_data.plate_number = booking.extension_data.plate_number || user.plate_number;
      }
    }
    const loaded_count = reset ? data.length : this._bookings_state().list.length + data.length;
    const has_next = !!next && page_count < MAX_BOOKING_PAGES && (!total || loaded_count < total);
    this._next_page_fn = has_next ? next : null;
    this._bookings_state.update((acc) => reset ? {
      list: data,
      total,
      has_next
    } : {
      list: [...acc.list, ...data],
      total,
      has_next
    });
    if (has_next) {
      await this._loadPage(false, page_count + 1);
      return;
    }
    this._bookings_loading.set(false);
    this._last_updated.set(Date.now());
  }
  get week_start() {
    return this._settings.get("app.week_start") || 0;
  }
  get show_waitlist() {
    return this._settings.get("app.parking.show_waitlist") !== false;
  }
  setOptions(options) {
    this._options.update((current) => __spreadValues(__spreadValues({}, current), options));
  }
  setPeriod(period) {
    this.setOptions({ period });
  }
  /** Reload all parking data resources after a mutation */
  _reloadResources() {
    this._spaces_resource.reload();
    this._users_resource.reload();
    this._fleet_resource.reload();
    this.refresh();
  }
  /**
   * Resolve once a modal emits a `done` event or the dialog is closed,
   * whichever happens first.
   */
  _waitForModalResult(ref) {
    return new Promise((resolve) => {
      let resolved = false;
      let event_sub;
      let close_sub;
      const done = (value) => {
        if (resolved)
          return;
        resolved = true;
        event_sub?.unsubscribe();
        close_sub?.unsubscribe();
        resolve(value);
      };
      close_sub = ref.afterClosed().subscribe((value) => done(value));
      event_sub = ref.componentInstance?.event?.subscribe((e) => {
        if (e?.reason === "done")
          done(e);
      });
    });
  }
  _bookingQueryZone(options, bld) {
    const allow_level_filter = options.request_filter === "all" || options.request_filter === "bookings";
    if (allow_level_filter && options.zones?.length) {
      return options.zones.join(",");
    }
    return (this._settings.get("app.use_region") ? this._org.region?.id : "") || bld?.id;
  }
  isRequest(booking) {
    return !!booking.asset_id?.startsWith("unallocated");
  }
  canApproveBooking(booking, user_groups = currentUser()?.groups || []) {
    const approver_group = booking.extension_data?.approver_group;
    return !approver_group || user_groups.includes(approver_group);
  }
  isManualRequest(booking) {
    return booking.status === "tentative" && parkingRequestStatus(booking) === "approval_required";
  }
  isWaitlisted(booking) {
    return booking.status === "tentative" && parkingRequestStatus(booking) === "waitlist";
  }
  filterEventList(list, filter_type) {
    const show_requests = !!this._settings.get("app.parking.show_requests");
    const visible_list = show_requests ? list : list.filter((booking) => !this.isRequest(booking));
    if (filter_type === "bookings") {
      return visible_list.filter((booking) => !this.isRequest(booking));
    }
    if (filter_type === "requests") {
      return visible_list.filter((booking) => this.isRequest(booking));
    }
    if (filter_type === "manual") {
      return visible_list.filter((booking) => this.isManualRequest(booking) && booking.status === "tentative");
    }
    if (filter_type === "waitlist") {
      return this.show_waitlist ? visible_list.filter((booking) => this.isWaitlisted(booking)) : visible_list.filter((booking) => this.isRequest(booking));
    }
    if (filter_type === "pending") {
      return visible_list.filter((booking) => this.isRequest(booking) && booking.status === "tentative" && (!this.show_waitlist || !this.isWaitlisted(booking)));
    }
    return visible_list;
  }
  filterEventSearch(list, search = "") {
    const search_term = search.toLowerCase();
    if (!search_term)
      return list;
    const spaces = this.spaces();
    return list.filter((booking) => booking.user_name?.toLowerCase().includes(search_term) || booking.user_email?.toLowerCase().includes(search_term) || booking.booked_by_name?.toLowerCase().includes(search_term) || booking.booked_by_email?.toLowerCase().includes(search_term) || booking.asset_name?.toLowerCase().includes(search_term) || booking.extension_data?.plate_number?.toLowerCase().includes(search_term) || this.bayNumber(booking, spaces)?.toLowerCase().includes(search_term));
  }
  /** Resolve the bay number (parking space identifier) for a booking */
  bayNumber(booking, spaces = this.spaces()) {
    const asset_id = booking?.asset_id;
    if (!asset_id || asset_id.startsWith("unallocated"))
      return "";
    const resolved = this._bay_identifiers()[asset_id];
    if (resolved)
      return resolved;
    const space = spaces.find((_) => _.id === asset_id);
    return space?.identifier || "";
  }
  activeBookings(list) {
    return list.filter((booking) => !this.isRequest(booking));
  }
  /** Download current parking spaces as a CSV file */
  async downloadSpacesCSV() {
    const spaces = this.spaces();
    const rows = spaces.map((space) => ({
      id: space.id || "",
      identifier: space.identifier || "",
      map_id: space.map_id || "",
      assigned_to: space.assigned_to || "",
      assigned_name: space.assigned_name || "",
      bookable: space.bookable ?? false,
      place_groups: (space.place_groups || []).join("|"),
      features: (space.features || []).join("|"),
      notes: space.notes || ""
    }));
    if (!rows.length) {
      rows.push({
        id: "",
        identifier: "",
        map_id: "",
        assigned_to: "",
        assigned_name: "",
        bookable: false,
        place_groups: "",
        features: "",
        notes: ""
      });
    }
    const csv = jsonToCsv(rows);
    downloadFile("parking-spaces.csv", csv);
  }
  /** Upload a CSV file to create or update parking spaces */
  async uploadSpacesCSV(event) {
    const data = await loadTextFileFromInputEvent(event).catch(([m, e]) => {
      notifyError(m);
      throw e;
    });
    try {
      const rows = csvToJson(data) || [];
      if (!rows.length) {
        notifyError(i18n("APP.CONCIERGE.PARKING_CSV_EMPTY"));
        return;
      }
      const zone_id = this._options().zones[0] || "";
      const has_new_spaces = rows.some((row) => !csvString(row.id));
      if (has_new_spaces && !zone_id) {
        notifyError(i18n("APP.CONCIERGE.PARKING_CSV_NO_ZONE"));
        return;
      }
      let success_count = 0;
      let error_count = 0;
      for (const row of rows) {
        try {
          const space_data = __spreadValues(__spreadProps(__spreadValues({}, csvString(row.id) ? { id: csvString(row.id) } : {}), {
            identifier: csvString(row.identifier),
            map_id: csvString(row.map_id),
            assigned_to: csvString(row.assigned_to),
            assigned_name: csvString(row.assigned_name),
            bookable: csvBoolean(row.bookable),
            place_groups: csvList(row.place_groups),
            features: csvList(row.features),
            notes: csvString(row.notes)
          }), !csvString(row.id) ? { zone_id } : {});
          if (space_data.assigned_to) {
            await this._checkAssignedParkingLimit(space_data.assigned_to, space_data.id);
          }
          await saveParkingSpace(space_data);
          success_count++;
        } catch (e) {
          console.error("Failed to save parking space row:", row, e);
          error_count++;
        }
      }
      if (error_count > 0) {
        notifyError(i18n("APP.CONCIERGE.PARKING_CSV_SAVE_ERROR", {
          count: error_count
        }));
      }
      if (success_count > 0) {
        notifySuccess(i18n("APP.CONCIERGE.PARKING_CSV_SAVE_SUCCESS", {
          count: success_count
        }));
      }
      this._reloadResources();
    } catch (e) {
      console.error("CSV parsing error:", e);
      notifyError(i18n("APP.CONCIERGE.PARKING_CSV_PARSE_ERROR"));
    }
  }
  /** Add or update a space in the available list */
  async editSpace(space = {}) {
    const ref = this._dialog.open(ParkingSpaceModalComponent, {
      data: space
    });
    const state = await this._waitForModalResult(ref);
    if (state?.reason !== "done")
      return;
    const zone_id = space.zone_id || this._options().zones[0] || this._org.levelsForBuilding()[0]?.id;
    const asset_data = __spreadProps(__spreadValues({}, stripParkingZones(state.metadata)), {
      id: state.metadata.id || void 0
    });
    if (asset_data.assigned_to && (space.assigned_to !== asset_data.assigned_to || space.id !== asset_data.id)) {
      try {
        await this._checkAssignedParkingLimit(asset_data.assigned_to, space.id);
      } catch (error) {
        notifyError(error instanceof Error ? error.message : `${error}`);
        ref.componentInstance.loading.set(false);
        throw error;
      }
    }
    const original_space_data = stripParkingZones(space);
    let recreate = false;
    if (space.assigned_to && (space.assigned_to !== asset_data.assigned_to || space.id !== asset_data.id)) {
      try {
        await this._clearAssignedBooking(space);
      } catch (e) {
        notifyError(i18n("APP.CONCIERGE.PARKING_ASSIGN_SPACE_ERROR", {
          error: e
        }));
        ref.componentInstance.loading.set(false);
        throw e;
      }
      recreate = true;
    }
    const zones = unique([
      this._org.organisation.id,
      this._org.region?.id,
      this._org.building?.id,
      zone_id
    ]);
    const saved = await saveParkingSpace(space.id ? asset_data : __spreadProps(__spreadValues({}, asset_data), { zone_id, zones })).catch((e) => {
      notifyError(i18n("APP.CONCIERGE.PARKING_ASSIGN_SPACE_ERROR", {
        error: e
      }));
      ref.componentInstance.loading.set(false);
      throw e;
    });
    if ((space.assigned_to !== asset_data.assigned_to || recreate) && asset_data.assigned_to) {
      await saveBooking(await this._createAssignedParkingBooking(saved, asset_data.assigned_to, zones)).catch(async (e) => {
        if (space.id) {
          await saveParkingSpace(original_space_data);
        } else if (saved.id) {
          await deleteParkingSpace(saved.id);
        }
        if (recreate) {
          await this._restoreAssignedBooking(space).catch((restore_err) => console.error("Failed to restore assigned parking booking during rollback", restore_err));
        }
        notifyError(i18n("APP.CONCIERGE.PARKING_ASSIGN_SPACE_ERROR", {
          error: e
        }));
        ref.componentInstance.loading.set(false);
        throw e;
      });
    }
    this._reloadResources();
    ref.close();
  }
  /** Remove the given space from the available list */
  async removeSpace(space) {
    const state = await openConfirmModal({
      title: "Remove Parking Space",
      content: `Are you sure you wish to remove the parking space "${space.name}"?`,
      icon: { content: "delete" }
    }, this._dialog);
    if (state?.reason !== "done")
      return;
    state.loading("Removing parking space...");
    await this._clearAssignedBooking(space);
    await deleteParkingSpace(space.id);
    this._reloadResources();
    state.close();
  }
  /** Add or update a user in the available list */
  async editUser(user) {
    const ref = this._dialog.open(ParkingUserModalComponent, {
      data: user
    });
    const state = await this._waitForModalResult(ref);
    if (state?.reason !== "done")
      return;
    const zone = this._org.building.id;
    const new_user = __spreadProps(__spreadValues({}, state.metadata), {
      id: state.metadata.id || void 0
    });
    if ("user" in new_user)
      delete new_user.user;
    await saveParkingUser(new_user, zone);
    this._reloadResources();
    ref.close();
  }
  /** Remove the given user from the available list */
  async removeUser(user) {
    const state = await openConfirmModal({
      title: i18n("APP.CONCIERGE.PARKING_USER_REMOVE"),
      content: i18n("APP.CONCIERGE.PARKING_USER_REMOVE_MSG", {
        name: user.name
      }),
      icon: { content: "delete" }
    }, this._dialog);
    if (state?.reason !== "done")
      return;
    state.loading(i18n("APP.CONCIERGE.PARKING_USER_REMOVE_LOADING"));
    await deleteParkingUser(user.id).catch((e) => {
      notifyError(i18n("APP.CONCIERGE.PARKING_USER_REMOVE_ERROR", {
        error: e
      }));
      throw e;
    });
    state.close();
    notifySuccess(i18n("APP.CONCIERGE.PARKING_USER_REMOVE_SUCCESS"));
    this._reloadResources();
  }
  /** Add or update a fleet vehicle in the available list */
  async editFleetVehicle(vehicle) {
    const ref = this._dialog.open(ParkingFleetModalComponent, {
      data: vehicle
    });
    const state = await this._waitForModalResult(ref);
    if (state?.reason !== "done")
      return;
    const zone = this._org.building.id;
    const new_vehicle = __spreadProps(__spreadValues({}, state.metadata), {
      id: state.metadata.id || void 0
    });
    const saved = await saveParkingFleetVehicle(new_vehicle, zone);
    this._upsertFleetVehicle(toParkingFleetVehicle(saved));
    ref.close();
  }
  /** Remove the given fleet vehicle from the available list */
  async removeFleetVehicle(vehicle) {
    const state = await openConfirmModal({
      title: i18n("APP.CONCIERGE.PARKING_FLEET_REMOVE"),
      content: i18n("APP.CONCIERGE.PARKING_FLEET_REMOVE_MSG", {
        name: vehicle.name
      }),
      icon: { content: "delete" }
    }, this._dialog);
    if (state?.reason !== "done")
      return;
    state.loading(i18n("APP.CONCIERGE.PARKING_FLEET_REMOVE_LOADING"));
    await deleteParkingFleetVehicle(vehicle.id).catch((e) => {
      notifyError(i18n("APP.CONCIERGE.PARKING_FLEET_REMOVE_ERROR", {
        error: e
      }));
      throw e;
    });
    state.close();
    notifySuccess(i18n("APP.CONCIERGE.PARKING_FLEET_REMOVE_SUCCESS"));
    this._removeFleetVehicleFromList(vehicle.id);
  }
  async editReservation(reservation, { parent_id, user, link_id, date, space, allow_time_changes, external_user } = {}) {
    if (reservation?.asset_id?.startsWith("unallocated")) {
      return new Promise((resolve) => {
        const ref = this._dialog.open(ParkingRequestModalComponent, {
          data: { booking: reservation, date }
        });
        ref.afterClosed().subscribe((id) => {
          resolve(id);
          if (id)
            this._reloadResources();
          else
            this.refresh();
        });
      });
    }
    const levels = this.levels();
    const spaces = this.spaces();
    if (!space && reservation?.asset_id) {
      space = spaces.find((_) => _.id === reservation.asset_id);
    }
    return new Promise((resolve) => {
      const ref = this._dialog.open(ParkingBookingModalComponent, {
        data: {
          parent_id,
          booking: reservation,
          user,
          link_id,
          date,
          level: levels[0],
          space,
          allow_time_changes,
          external_user
        }
      });
      ref.afterClosed().subscribe((id) => {
        resolve(id);
        this.refresh();
      });
    });
  }
  viewBookingHistory(booking) {
    if (!booking)
      return;
    this._dialog.open(BookingHistoryModalComponent, {
      data: { booking },
      width: "32rem",
      maxWidth: "100vw"
    });
  }
  requestParking(date) {
    return new Promise((resolve) => {
      const ref = this._dialog.open(ParkingRequestModalComponent, {
        data: { date }
      });
      ref.afterClosed().subscribe((id) => {
        resolve(id);
        if (id)
          this._reloadResources();
      });
    });
  }
  async setBookingCheckinState(booking, state = true) {
    const promise = setBookingCheckedIn(booking, state).catch((_) => ({
      state: "failed",
      error: _
    }));
    const success = await promise;
    success.state === "failed" ? notifyError(i18n(state ? "APP.CONCIERGE.PARKING_CHECKIN_ERROR" : "APP.CONCIERGE.PARKING_CHECKOUT_ERROR", { error: success.error })) : notifySuccess(i18n(state ? "APP.CONCIERGE.PARKING_CHECKIN_SUCCESS" : "APP.CONCIERGE.PARKING_CHECKOUT_SUCCESS"));
    if (success.state !== "failed")
      this._reloadResources();
  }
  async approveBooking(booking, series = false) {
    if (!series && this._settings.get("app.parking.assign_space_on_approve") && this.isRequest(booking)) {
      try {
        await this._assignSpaceForApproval(booking);
      } catch (error) {
        notifyError(i18n("APP.CONCIERGE.PARKING_APPROVE_ERROR", {
          error: error?.message || error?.error || error
        }));
        return;
      }
    }
    const booking_id = series ? booking.parent_id || booking.id : booking.id;
    const promise = (!series && booking.instance ? approveBookingInstance(booking_id, booking.instance) : approveBooking(booking_id)).catch((_) => ({ state: "failed", error: _ }));
    const success = await promise;
    success.state === "failed" ? notifyError(i18n("APP.CONCIERGE.PARKING_APPROVE_ERROR", {
      error: success.error
    })) : notifySuccess(i18n("APP.CONCIERGE.PARKING_APPROVE_SUCCESS"));
    if (success.state !== "failed")
      this._reloadResources();
  }
  async rejectBooking(booking, series = false) {
    const booking_id = series ? booking.parent_id || booking.id : booking.id;
    const promise = (!series && booking.instance ? rejectBookingInstance(booking_id, booking.instance) : rejectBooking(booking_id)).catch((_) => ({ state: "failed", error: _ }));
    const success = await promise;
    success.state === "failed" ? notifyError(i18n("APP.CONCIERGE.PARKING_DECLINE_ERROR", {
      error: success.error
    })) : notifySuccess(i18n("APP.CONCIERGE.PARKING_DECLINE_SUCCESS"));
    if (success.state !== "failed")
      this._reloadResources();
  }
  async assignSpace(booking) {
    const ref = this._dialog.open(ParkingAssignSpaceModalComponent, {
      data: { booking }
    });
    const result = await ref.afterClosed().toPromise();
    if (result)
      this._reloadResources();
  }
  async _assignSpaceForApproval(booking) {
    const building = this._org.building;
    const levels = this._org.levelsForBuilding(building).filter((level2) => level2.tags.includes("parking"));
    if (!building?.id || !levels.length) {
      throw i18n("APP.CONCIERGE.PARKING_ASSIGN_SPACE_EMPTY");
    }
    const [booked_ids, level_spaces] = await Promise.all([
      bookedResourceList({
        period_start: getUnixTime(startOfDay(booking.date)),
        period_end: getUnixTime(endOfDay(booking.date)),
        type: "parking",
        zones: building.id
      }),
      Promise.all(levels.map((level2) => queryParkingSpaces(level2.id)))
    ]);
    const booked_resource_ids = new Set(booked_ids);
    const available_space = level_spaces.flat().find((space) => !booked_resource_ids.has(space.id) && !space.assigned_to && space.bookable !== false);
    if (!available_space) {
      throw i18n("APP.CONCIERGE.PARKING_ASSIGN_SPACE_EMPTY");
    }
    const level = levels.find((item) => item.id === available_space.zone_id);
    const asset_name = available_space.name || available_space.id;
    const patch = {
      asset_id: available_space.id,
      asset_name,
      zones: level ? unique([
        this._org.organisation.id,
        this._org.region?.id,
        level.parent_id,
        level.id
      ]).filter((_) => _) : booking.zones,
      extension_data: __spreadProps(__spreadValues({}, booking.extension_data), {
        asset_name
      })
    };
    await (booking.instance ? updateBookingInstance(booking.id, booking.instance || booking.booking_start, patch) : updateBooking(booking.id, patch));
  }
  async removeBooking(booking) {
    const details = await openConfirmModal({
      title: i18n("APP.CONCIERGE.BOOKING_REMOVE_TITLE"),
      content: i18n("APP.CONCIERGE.BOOKING_REMOVE_MSG", {
        name: booking.asset_name || booking.user_name || booking.user_email || booking.id,
        time: new Date(booking.date).toLocaleString()
      }),
      icon: { class: "material-symbols-rounded", content: "delete" }
    }, this._dialog);
    if (details?.reason !== "done")
      return;
    details.loading(i18n("APP.CONCIERGE.BOOKING_REMOVE_LOADING"));
    const query = booking.instance ? { instance: true, start_time: booking.instance } : {};
    await removeBooking(booking.id, query).catch((e) => {
      notifyError(i18n("APP.CONCIERGE.BOOKING_REMOVE_ERROR", { error: e }));
      details.close();
      throw e;
    });
    details.close();
    notifySuccess(i18n("APP.CONCIERGE.BOOKING_REMOVE_SUCCESS"));
    this._reloadResources();
  }
  async _checkAssignedParkingLimit(user_email, current_space_id) {
    const max_assigned_count = Math.max(Number(this._settings.get("app.parking.max_assigned_count")) || 0, 0);
    if (!max_assigned_count || !user_email)
      return;
    const level_ids = this._org.levelsForBuilding(this._org.building).filter((level) => level.tags.includes("parking")).map((level) => level.id);
    if (!level_ids.length)
      return;
    const email = user_email.toLowerCase();
    const assigned_count = (await queryParkingSpacesForZones(level_ids).catch(() => [])).filter((space) => space.id !== current_space_id && space.assigned_to?.toLowerCase() === email).length;
    if (assigned_count >= max_assigned_count) {
      const key = "APP.CONCIERGE.PARKING_ASSIGN_LIMIT_ERROR";
      const message = i18n(key, { count: max_assigned_count }, max_assigned_count);
      throw !message || message === key ? `Users can only have ${max_assigned_count} assigned parking space${max_assigned_count === 1 ? "" : "s"} at a time.` : message;
    }
  }
  async _clearAssignedBooking(resource2) {
    const today = Date.now();
    const booking_list = await queryBookings({
      period_start: getUnixTime(startOfDay(today)),
      period_end: getUnixTime(endOfDay(today)),
      type: "parking",
      email: resource2.assigned_to,
      include_checked_out: true,
      limit: 1e3
    });
    const filtered = booking_list.filter((_) => _.asset_id === resource2.id);
    for (const booking of filtered) {
      const is_recurring = booking.instance;
      if (is_recurring) {
        const yesterday_end = getUnixTime(endOfDay(subDays(today, 1)));
        await updateBooking(booking.id, { recurrence_end: yesterday_end }, "patch");
      } else {
        await removeBooking(booking.id);
      }
    }
  }
  async _restoreAssignedBooking(resource2) {
    if (!resource2.assigned_to)
      return;
    await saveBooking(await this._createAssignedParkingBooking(resource2, resource2.assigned_to, unique(resource2.zones || []).filter((_) => _)));
  }
  async _createAssignedParkingBooking(resource2, user_email, zones) {
    const users = this.users();
    const user = users.find((_) => _.email === user_email);
    const user_details = await USER_PIPE.transform(user_email);
    const timezone = this.timezone;
    const date = setTimeInTimezone(Date.now(), 1, 0, timezone);
    const asset_name = resource2.name || resource2.identifier || resource2.id;
    return new Booking({
      user_id: user_details.id || user_email,
      user_email,
      user_name: user_details.name,
      booking_start: getUnixTime(date),
      booking_end: getUnixTime(addHours(date, 22)),
      type: "parking",
      booking_type: "parking",
      asset_id: resource2.id,
      asset_name,
      recurrence_type: "daily",
      recurrence_days: RecurrenceDays.MONDAY | RecurrenceDays.TUESDAY | RecurrenceDays.WEDNESDAY | RecurrenceDays.THURSDAY | RecurrenceDays.FRIDAY,
      zones,
      extension_data: {
        asset_name,
        is_assigned: true,
        plate_number: user?.plate_number || ""
      }
    });
  }
  _upsertFleetVehicle(vehicle) {
    const fleet_list = this._fleet_resource.value() ?? [];
    const index = fleet_list.findIndex((_) => _.id === vehicle.id);
    this._fleet_resource.value.set(index >= 0 ? fleet_list.map((item, idx) => idx === index ? vehicle : item) : [...fleet_list, vehicle]);
  }
  _removeFleetVehicleFromList(vehicle_id) {
    this._fleet_resource.value.set((this._fleet_resource.value() ?? []).filter((_) => _.id !== vehicle_id));
  }
  static {
    this.\u0275fac = function ParkingStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingStateService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ParkingStateService, factory: _ParkingStateService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  ParkingService,
  ExploreParkingInfoComponent,
  ParkingStateService
};
//# sourceMappingURL=chunk-WWQBGF5I.js.map
