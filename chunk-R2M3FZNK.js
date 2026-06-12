import {
  subDays
} from "./chunk-WU4ZQASG.js";
import {
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  Booking,
  BookingFormService,
  CommonModule,
  Component,
  DEFAULT_COLOURS,
  DateFieldComponent,
  DefaultValueAccessor,
  DurationFieldComponent,
  EventEmitter,
  ExploreParkingInfoComponent,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  FullscreenModalShellComponent,
  IconComponent,
  Injectable,
  InteractiveMapComponent,
  ItemListFieldComponent,
  LowerCasePipe,
  MAT_DIALOG_DATA,
  MatCheckbox,
  MatCheckboxModule,
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
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  OrganisationService,
  Output,
  ParkingSpaceListFieldComponent,
  ReactiveFormsModule,
  RecurrenceDays,
  SettingsService,
  SettingsToggleComponent,
  TimeFieldComponent,
  TranslatePipe,
  UserPipe,
  UserSearchFieldComponent,
  Validators,
  __spreadProps,
  __spreadValues,
  addDays,
  addHours,
  alignDateToBookableHours,
  approveBooking,
  approveBookingInstance,
  catchError,
  checkinBooking,
  checkinBookingInstance,
  combineLatest,
  computed,
  currentUser,
  debounceTime,
  deleteParkingFleetVehicle,
  deleteParkingSpace,
  deleteParkingUser,
  endOfDay,
  endOfWeek,
  filter,
  first,
  getInvalidFields,
  getUnixTime,
  i18n,
  inject,
  lastValueFrom,
  map,
  nextValueFrom,
  notifyError,
  notifySuccess,
  of,
  openConfirmModal,
  queryBookings,
  queryParkingFleetVehicles,
  queryParkingSpaces,
  queryParkingUsers,
  rejectBooking,
  rejectBookingInstance,
  removeBooking,
  saveBooking,
  saveParkingFleetVehicle,
  saveParkingSpace,
  saveParkingUser,
  set,
  setClassMetadata,
  settingSignal,
  shareReplay,
  showStaff,
  signal,
  startOfDay,
  startOfWeek,
  switchMap,
  tap,
  toParkingFleetVehicle,
  unique,
  updateBooking,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-32WFR5TQ.js";

// apps/concierge/src/app/parking/parking-assign-space-modal.component.ts
var _c0 = () => ({ controls: true });
var _forTrack0 = ($index, $item) => $item.id;
function ParkingAssignSpaceModalComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
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
function ParkingAssignSpaceModalComponent_Conditional_26_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function ParkingAssignSpaceModalComponent_Conditional_26_For_1_Template_button_click_0_listener() {
      const space_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.selectSpace(space_r3));
    });
    \u0275\u0275elementStart(1, "div", 19)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_12_0;
    const space_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-primary!", space_r3.id === ((tmp_11_0 = ctx_r3.selected_space()) == null ? null : tmp_11_0.id))("text-primary-content!", space_r3.id === ((tmp_12_0 = ctx_r3.selected_space()) == null ? null : tmp_12_0.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.space_label(space_r3));
  }
}
function ParkingAssignSpaceModalComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ParkingAssignSpaceModalComponent_Conditional_26_For_1_Template, 4, 5, "button", 17, _forTrack0);
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(2, 0, ctx_r3.available_spaces));
  }
}
function ParkingAssignSpaceModalComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "img", 20);
    \u0275\u0275elementStart(2, "div", 21);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.PARKING_ASSIGN_SPACE_EMPTY"), " ");
  }
}
function ParkingAssignSpaceModalComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "mat-spinner", 22);
    \u0275\u0275elementEnd();
  }
}
function ParkingAssignSpaceModalComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function ParkingAssignSpaceModalComponent_Conditional_31_Template_button_click_0_listener() {
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
var ParkingAssignSpaceModalComponent = class _ParkingAssignSpaceModalComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._org = inject(OrganisationService);
    this.levels = [];
    this.focus = "";
    this.selected_space = signal(null, ...ngDevMode ? [{ debugName: "selected_space" }] : (
      /* istanbul ignore next */
      []
    ));
    this.loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selected_level = new BehaviorSubject(null);
    this.map_url = this.selected_level.pipe(map((lvl) => lvl?.map_id || ""));
    this.map_actions = [
      {
        id: "*",
        action: "click",
        callback: (_e, p) => this._onMapClick(p || _e)
      }
    ];
    this.available_spaces = this.selected_level.pipe(switchMap((level) => {
      if (!level)
        return of([]);
      return combineLatest([
        queryParkingSpaces(level.id).pipe(catchError(() => of([]))),
        queryBookings({
          period_start: getUnixTime(startOfDay(this._data.booking.date)),
          period_end: getUnixTime(endOfDay(this._data.booking.date)),
          type: "parking",
          zones: level.id
        }).pipe(catchError(() => of([])))
      ]).pipe(map(([spaces, bookings]) => {
        const booked_ids = new Set(bookings.filter((b) => !b.asset_id?.startsWith("unallocated") && !b.rejected).map((b) => b.asset_id));
        return spaces.filter((s) => !booked_ids.has(s.id) && !s.assigned_to);
      }));
    }), shareReplay(1));
    this.map_styles = combineLatest([
      this.available_spaces,
      this.selected_level.pipe(switchMap((level) => level ? queryParkingSpaces(level.id).pipe(catchError(() => of([]))) : of([])))
    ]).pipe(map(([available, all_spaces]) => {
      const styles = {};
      const available_ids = new Set(available.map((s) => s.id));
      const selected = this.selected_space();
      for (const space of all_spaces) {
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
        } else {
          styles[`#${id}`] = {
            fill: DEFAULT_COLOURS["busy"],
            opacity: 0.6
          };
        }
      }
      return styles;
    }));
    this.map_features = combineLatest([
      this.available_spaces,
      this.selected_level.pipe(switchMap((level) => level ? queryParkingSpaces(level.id).pipe(catchError(() => of([]))) : of([])))
    ]).pipe(map(([available, all_spaces]) => {
      const features = [];
      const available_ids = new Set(available.map((s) => s.id));
      const selected = this.selected_space();
      for (const space of all_spaces) {
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
            status: is_selected ? "reserved" : is_available ? "free" : "busy"
          })
        });
      }
      return features;
    }));
    this.space_label = (space) => space?.identifier || space?.name || space?.display_name || space?.metadata?.display_name || space?.extension_data?.display_name || "";
  }
  ngOnInit() {
    this.levels = this._org.levels.filter((_) => _.tags.includes("parking"));
    const booking_zone = this._data.booking.zones?.find((z) => this.levels.some((l) => l.id === z));
    const initial_level = booking_zone ? this.levels.find((l) => l.id === booking_zone) : this.levels[0];
    if (initial_level) {
      this.selected_level.next(initial_level);
    }
  }
  selectLevel(level) {
    this.selected_level.next(level);
    this.selected_space.set(null);
    this.focus = "";
  }
  selectSpace(space) {
    this.selected_space.set(space);
    this.focus = space.map_id || space.id;
    this._refreshStyles();
  }
  async confirmAssign() {
    const space = this.selected_space();
    if (!space)
      return;
    this.loading.set(true);
    try {
      const asset_name = this.space_label(space);
      await updateBooking(this._data.booking.id, {
        asset_id: space.id,
        asset_name,
        extension_data: __spreadProps(__spreadValues({}, this._data.booking.extension_data), {
          asset_name
        })
      }).toPromise();
      await approveBooking(this._data.booking.id).toPromise();
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
      const id = e?.properties?.externalId || e?.properties?.roomId || e?.id;
      if (!id)
        return;
      const spaces = await this.available_spaces.pipe(map((_) => _)).toPromise() || [];
      const space = spaces.find((s) => s.id === id || s.map_id === id);
      if (space) {
        this.selectSpace(space);
      }
    });
  }
  _refreshStyles() {
    const current = this.selected_level.getValue();
    if (current) {
      this.selected_level.next(__spreadValues({}, current));
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingAssignSpaceModalComponent, selectors: [["parking-assign-space-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 32, vars: 31, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "mx-auto", "mt-2", "flex", "h-14", "w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-sm", "border-none", "px-4", "py-2"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "h-[75vh]", "max-h-[75vh]", "max-w-[calc(100vw-2rem)]", "min-w-[80vw]", "space-x-2", "overflow-hidden", "p-2", "sm:max-w-5xl"], [1, "bg-base-200", "relative", "h-full", "w-1/2", "flex-1", "rounded-lg"], [3, "src", "styles", "features", "actions", "options", "focus"], [1, "border-base-300", "relative", "flex", "h-full", "w-[20rem]", "flex-col", "rounded-lg", "border"], [1, "border-base-200", "flex", "flex-col", "border-b", "p-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["name", "level", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "flex", "h-1/2", "flex-1", "flex-col", "space-y-2", "overflow-auto", "px-2"], [1, "bg-base-100", "sticky", "top-0", "z-10", "w-full", "px-1", "py-3", "text-sm"], [1, "flex", "h-full", "flex-1", "flex-col", "items-center", "justify-center", "space-y-4"], [1, "border-base-200", "border-t", "p-2"], [1, "flex", "w-full", "items-center", "justify-center"], ["btn", "", "matRipple", "", 1, "w-full", 3, "disabled"], ["btn", "", "matRipple", "", 1, "clear", "hover:bg-base-200", "flex", "w-full", "items-center", "rounded-sm", "text-left", 3, "bg-primary!", "text-primary-content!"], ["btn", "", "matRipple", "", 1, "clear", "hover:bg-base-200", "flex", "w-full", "items-center", "rounded-sm", "text-left", 3, "click"], [1, "flex", "w-full", "flex-col", "font-mono", "text-sm"], ["src", "assets/icons/no-results.svg", 1, "w-36"], [1, "text-center", "opacity-30"], ["diameter", "32"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click", "disabled"]], template: function ParkingAssignSpaceModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2)(5, "icon");
        \u0275\u0275text(6, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "main", 3)(8, "div", 4);
        \u0275\u0275element(9, "interactive-map", 5);
        \u0275\u0275pipe(10, "async");
        \u0275\u0275pipe(11, "async");
        \u0275\u0275pipe(12, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 6)(14, "div", 7)(15, "mat-form-field", 8)(16, "mat-select", 9);
        \u0275\u0275pipe(17, "async");
        \u0275\u0275listener("ngModelChange", function ParkingAssignSpaceModalComponent_Template_mat_select_ngModelChange_16_listener($event) {
          return ctx.selectLevel($event);
        });
        \u0275\u0275repeaterCreate(18, ParkingAssignSpaceModalComponent_For_19_Template, 2, 2, "mat-option", 10, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 11)(21, "div", 12);
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "async");
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275pipe(25, "lowercase");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(26, ParkingAssignSpaceModalComponent_Conditional_26_Template, 3, 2);
        \u0275\u0275pipe(27, "async");
        \u0275\u0275conditionalBranchCreate(28, ParkingAssignSpaceModalComponent_Conditional_28_Template, 5, 3, "div", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 14);
        \u0275\u0275conditionalCreate(30, ParkingAssignSpaceModalComponent_Conditional_30_Template, 2, 0, "div", 15)(31, ParkingAssignSpaceModalComponent_Conditional_31_Template, 3, 4, "button", 16);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_9_0;
        let tmp_10_0;
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 12, "APP.CONCIERGE.PARKING_ASSIGN_SPACE_TITLE"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275property("src", \u0275\u0275pipeBind1(10, 14, ctx.map_url))("styles", \u0275\u0275pipeBind1(11, 16, ctx.map_styles))("features", \u0275\u0275pipeBind1(12, 18, ctx.map_features))("actions", ctx.map_actions)("options", \u0275\u0275pureFunction0(30, _c0))("focus", ctx.focus);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(17, 20, ctx.selected_level));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.levels);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate2(" ", ((tmp_9_0 = \u0275\u0275pipeBind1(23, 22, ctx.available_spaces)) == null ? null : tmp_9_0.length) || 0, " ", \u0275\u0275pipeBind1(25, 26, \u0275\u0275pipeBind1(24, 24, "APP.CONCIERGE.PARKING_TAB_SPACES")), " ");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(((tmp_10_0 = \u0275\u0275pipeBind1(27, 28, ctx.available_spaces)) == null ? null : tmp_10_0.length) ? 26 : 28);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.loading() ? 30 : 31);
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
      AsyncPipe,
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
            <div
                class="bg-base-200 relative h-full w-1/2 flex-1 rounded-lg"
            >
                <interactive-map
                    [src]="map_url | async"
                    [styles]="map_styles | async"
                    [features]="map_features | async"
                    [actions]="map_actions"
                    [options]="{ controls: true }"
                    [focus]="focus"
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
                            [ngModel]="selected_level | async"
                            (ngModelChange)="selectLevel($event)"
                        >
                            @for (lvl of levels; track lvl.id) {
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
                        {{ (available_spaces | async)?.length || 0 }}
                        {{
                            'APP.CONCIERGE.PARKING_TAB_SPACES'
                                | translate
                                | lowercase
                        }}
                    </div>
                    @if ((available_spaces | async)?.length) {
                        @for (
                            space of available_spaces | async;
                            track space.id
                        ) {
                            <button
                                btn
                                matRipple
                                class="clear hover:bg-base-200 flex w-full items-center rounded-sm text-left"
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
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingAssignSpaceModalComponent, { className: "ParkingAssignSpaceModalComponent", filePath: "apps/concierge/src/app/parking/parking-assign-space-modal.component.ts", lineNumber: 182 });
})();

// apps/concierge/src/app/parking/parking-booking-modal.component.ts
var _c02 = () => ({ standalone: true });
function ParkingBookingModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "a-user-search-field", 18);
    \u0275\u0275elementEnd();
  }
}
function ParkingBookingModalComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.ALL_DAY"), " ");
  }
}
function ParkingBookingModalComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 19)(2, "label", 20);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a-time-field", 21);
    \u0275\u0275listener("ngModelChange", function ParkingBookingModalComponent_Conditional_32_Template_a_time_field_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 22)(9, "label", 23);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "a-duration-field", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_9_0;
    let tmp_13_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 13, "FORM.TIME_START"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(17, _c02))("disabled", ctx_r1.form.controls.date.disabled)("use_24hr", ctx_r1.use_24hr())("range", ctx_r1.bookable_hours())("min_duration", ctx_r1.effective_min_duration());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 15, "FORM.TIME_END"));
    \u0275\u0275advance(4);
    \u0275\u0275property("time", ctx_r1.form == null ? null : (tmp_9_0 = ctx_r1.form.getRawValue()) == null ? null : tmp_9_0.date)("max", ctx_r1.max_duration())("custom_options", ctx_r1.custom_duration_options())("use_24hr", ctx_r1.use_24hr())("end_time", (tmp_13_0 = ctx_r1.bookable_hours()) == null ? null : tmp_13_0.end);
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
    \u0275\u0275elementStart(0, "label", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 6);
    \u0275\u0275element(4, "textarea", 26);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "FORM.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 4, "FORM.NOTES"));
  }
}
var ParkingBookingModalComponent = class _ParkingBookingModalComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._data = inject(MAT_DIALOG_DATA);
    this._booking_form = inject(BookingFormService);
    this._dialog_ref = inject(MatDialogRef);
    this._settings = inject(SettingsService);
    this.loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.user = this._data.user;
    this.date = this._data.date;
    this.allow_time_changes = this._data.allow_time_changes;
    this.form = this._booking_form.form;
    this.id = computed(() => this.form.value.id || "", ...ngDevMode ? [{ debugName: "id" }] : (
      /* istanbul ignore next */
      []
    ));
    this.end_date = computed(() => endOfDay(addDays(Date.now(), this._settings.get("app.parking.available_period") || this._settings.get("app.bookings.available_period") || 7)), ...ngDevMode ? [{ debugName: "end_date" }] : (
      /* istanbul ignore next */
      []
    ));
    this.max_duration = computed(() => this._settings.get("app.parking.max_duration") || this._settings.get("app.bookings.max_duration") || 480, ...ngDevMode ? [{ debugName: "max_duration" }] : (
      /* istanbul ignore next */
      []
    ));
    this.allow_all_day = settingSignal("parking.allow_all_day");
    this.use_24hr = computed(() => this._settings.get("app.use_24_hour_time"), ...ngDevMode ? [{ debugName: "use_24hr" }] : (
      /* istanbul ignore next */
      []
    ));
    this.bookable_hours = computed(() => this._settings.get("app.parking.bookable_hours") || this._settings.get("app.bookings.bookable_hours"), ...ngDevMode ? [{ debugName: "bookable_hours" }] : (
      /* istanbul ignore next */
      []
    ));
    this.min_duration = computed(() => this._settings.get("app.parking.min_duration") || this._settings.get("app.bookings.min_duration") || 30, ...ngDevMode ? [{ debugName: "min_duration" }] : (
      /* istanbul ignore next */
      []
    ));
    this.custom_duration_options = computed(() => this._settings.get("app.parking.custom_duration_options") || this._settings.get("app.bookings.custom_duration_options") || [], ...ngDevMode ? [{ debugName: "custom_duration_options" }] : (
      /* istanbul ignore next */
      []
    ));
    this.effective_min_duration = computed(() => Math.min(this.min_duration(), ...this.custom_duration_options()), ...ngDevMode ? [{ debugName: "effective_min_duration" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  ngOnInit() {
    this._booking_form.newForm("parking", this._data.booking);
    this._booking_form.setOptions({ type: "parking" });
    this.subscription("user_changes", this.form.controls.user.valueChanges.subscribe((user) => {
      if (!user)
        return;
      this.form.patchValue({
        user_name: user.name,
        user_email: user.email,
        attendees: [user]
      });
    }));
    this.form.patchValue({
      booking_type: "parking",
      all_day: this._data.booking ? this._data.booking.duration > 12 * 60 : true
    });
    if (!this.form.value.user) {
      this.form.patchValue({
        user: this._data.booking?.attendees[0] || currentUser()
      });
    }
    if (this._data.parent_id) {
      this.form.patchValue({
        parent_id: this._data.parent_id
      });
    }
    if (this._data.user) {
      this.form.patchValue({
        user: this._data.user,
        user_email: this._data.user.email,
        user_name: this._data.user.name,
        attendees: [this._data.user]
      });
      this.form.controls.plate_number.setValidators([
        Validators.required
      ]);
      this.form.controls.user_name.disable();
      this.form.controls.user_email.disable();
    }
    if (this._data.booking?.id) {
      this.form.controls.user.disable();
      this.form.controls.user_name.disable();
      this.form.controls.user_email.disable();
    } else {
      this.form.controls.user.enable();
      this.form.controls.user_name.enable();
      this.form.controls.user_email.enable();
    }
    if (this._data.level) {
      this._booking_form.setOptions({ zone_id: this._data.level.id });
    }
    if (this._data.link_id) {
      this.form.patchValue({ parent_id: this._data.link_id });
    }
    if (this._data.space) {
      this.form.patchValue({ resources: [this._data.space] });
    }
    if (this._data.date) {
      console.log("Date:", this._data.date);
      this.timeout("init_date", () => {
        this.form.patchValue({
          date: alignDateToBookableHours(this._data.date, this.bookable_hours(), this.form.getRawValue().date)
        });
      }, 300);
    }
  }
  async postForm() {
    if (!this.form.value.all_day && this.form.value.duration > this.max_duration()) {
      this.form.patchValue({ duration: 30 });
    }
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();
    if (this.form.invalid) {
      return notifyError(i18n("FORM.INVALID_FIELDS", {
        field_list: getInvalidFields(this.form).join(", ")
      }));
    }
    this.loading.set(true);
    this.form.patchValue({ user_id: void 0, booking_type: "parking" });
    const result = await this._booking_form.postForm().catch((e) => {
      this.loading.set(false);
      this.form.controls.plate_number.setValidators([]);
      notifyError(e);
      throw e;
    });
    this.form.controls.plate_number.setValidators([]);
    notifySuccess(i18n("APP.CONCIERGE.PARKING_SAVE"));
    this.form.get("date").enable();
    this.form.get("duration").enable();
    this.form.controls.user.disable();
    this.form.controls.user_name.disable();
    this.form.controls.user_email.disable();
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingBookingModalComponent, selectors: [["parking-booking-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 48, vars: 45, consts: [[3, "confirm", "heading", "loading"], [3, "formGroup"], [1, "mb-4", "flex", "items-center", "space-x-2"], [1, "flex", "items-center", "space-x-2"], [1, "flex-1"], ["for", "user-name"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "user-name", "formControlName", "user_name", 3, "placeholder"], ["for", "email"], ["matInput", "", "name", "email", "formControlName", "user_email", 3, "placeholder"], [1, "relative"], ["for", "date"], ["formControlName", "date"], ["formControlName", "all_day", 1, "absolute", "-top-2", "right-0"], ["for", "parking-space"], ["name", "parking-space", "formControlName", "resources", 1, "mb-2"], ["for", "plate-number"], ["matInput", "", "name", "plate-number", "formControlName", "plate_number", 3, "placeholder"], ["name", "user", "formControlName", "user", 1, "flex-1"], [1, "w-1/3", "flex-1"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled", "use_24hr", "range", "min_duration"], [1, "relative", "w-1/3", "flex-1"], ["for", "end-time"], ["name", "end-time", "formControlName", "duration", 3, "time", "max", "custom_options", "use_24hr", "end_time"], ["for", "notes"], ["matInput", "", "name", "notes", "formControlName", "notes", "rows", "3", 3, "placeholder"]], template: function ParkingBookingModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function ParkingBookingModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.postForm();
        });
        \u0275\u0275elementStart(3, "form", 1);
        \u0275\u0275conditionalCreate(4, ParkingBookingModalComponent_Conditional_4_Template, 2, 0, "div", 2);
        \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "label", 5);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "mat-form-field", 6);
        \u0275\u0275element(11, "input", 7);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementStart(13, "mat-error");
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 4)(17, "label", 8);
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-form-field", 6);
        \u0275\u0275element(21, "input", 9);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementStart(23, "mat-error");
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(26, "div", 10)(27, "label", 11);
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(30, "a-date-field", 12);
        \u0275\u0275conditionalCreate(31, ParkingBookingModalComponent_Conditional_31_Template, 3, 3, "mat-checkbox", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(32, ParkingBookingModalComponent_Conditional_32_Template, 15, 18, "div", 3);
        \u0275\u0275elementStart(33, "label", 14);
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(36, "parking-space-list-field", 15);
        \u0275\u0275elementStart(37, "label", 16);
        \u0275\u0275text(38);
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275conditionalCreate(40, ParkingBookingModalComponent_Conditional_40_Template, 2, 0, "span");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "mat-form-field", 6);
        \u0275\u0275element(42, "input", 17);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275elementStart(44, "mat-error");
        \u0275\u0275text(45);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(47, ParkingBookingModalComponent_Conditional_47_Template, 6, 6);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 19, ctx.id() ? "APP.CONCIERGE.PARKING_EDIT" : "APP.CONCIERGE.PARKING_NEW"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 21, "APP.CONCIERGE.PARKING_SAVING") : "");
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.user ? 4 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 23, "FORM.NAME"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 25, "FORM.NAME"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 27, "FORM.NAME_REQUIRED"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 29, "FORM.EMAIL"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(22, 31, "FORM.EMAIL"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 33, "FORM.EMAIL_REQUIRED"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 35, "FORM.DATE"));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.allow_all_day() && !ctx.form.controls.duration.disabled ? 31 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.form.value.all_day ? 32 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 37, "APP.CONCIERGE.PARKING_SPACE"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 39, "EXPLORE.PARKING_PLATE_NUMBER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.user ? 40 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(43, 41, "EXPLORE.PARKING_PLATE_NUMBER"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 43, "BOOKINGS.PARKING_PLATE_NUMBER_REQUIRED"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.form.value.notes ? 47 : -1);
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      FormsModule,
      NgModel,
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
            <form [formGroup]="form">
                @if (!user) {
                    <div class="mb-4 flex items-center space-x-2">
                        <a-user-search-field
                            name="user"
                            formControlName="user"
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
                                name="user-name"
                                formControlName="user_name"
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
                                name="email"
                                formControlName="user_email"
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
                    <a-date-field formControlName="date"></a-date-field>
                    @if (allow_all_day() && !form.controls.duration.disabled) {
                        <mat-checkbox
                            formControlName="all_day"
                            class="absolute -top-2 right-0"
                        >
                            {{ 'COMMON.ALL_DAY' | translate }}
                        </mat-checkbox>
                    }
                </div>
                @if (!form.value.all_day) {
                    <div class="flex items-center space-x-2">
                        <div class="w-1/3 flex-1">
                            <label for="start-time"
                                >{{ 'FORM.TIME_START' | translate
                                }}<span>*</span></label
                            >
                            <a-time-field
                                name="start-time"
                                [ngModel]="form.value.date"
                                (ngModelChange)="
                                    form.patchValue({ date: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [disabled]="form.controls.date.disabled"
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
                                name="end-time"
                                formControlName="duration"
                                [time]="form?.getRawValue()?.date"
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
                    name="parking-space"
                    formControlName="resources"
                    class="mb-2"
                ></parking-space-list-field>
                <label for="plate-number">
                    {{ 'EXPLORE.PARKING_PLATE_NUMBER' | translate }}
                    @if (user) {
                        <span>*</span>
                    }
                </label>
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        name="plate-number"
                        formControlName="plate_number"
                        [placeholder]="
                            'EXPLORE.PARKING_PLATE_NUMBER' | translate
                        "
                    />
                    <mat-error>{{
                        'BOOKINGS.PARKING_PLATE_NUMBER_REQUIRED' | translate
                    }}</mat-error>
                </mat-form-field>
                @if (form.value.notes) {
                    <label for="notes">{{ 'FORM.NOTES' | translate }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <textarea
                            matInput
                            name="notes"
                            formControlName="notes"
                            rows="3"
                            [placeholder]="'FORM.NOTES' | translate"
                        ></textarea>
                    </mat-form-field>
                }
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      ReactiveFormsModule,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingBookingModalComponent, { className: "ParkingBookingModalComponent", filePath: "apps/concierge/src/app/parking/parking-booking-modal.component.ts", lineNumber: 206 });
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
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 10)(11, "div", 11)(12, "label", 12);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-form-field", 13);
    \u0275\u0275element(16, "input", 14);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementStart(18, "mat-error");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 11)(22, "label", 15);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-form-field", 13);
    \u0275\u0275element(26, "input", 16);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "label", 17);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "mat-form-field", 13);
    \u0275\u0275element(32, "input", 18);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "label", 19);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-form-field", 8);
    \u0275\u0275element(38, "textarea", 20);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 13, "APP.CONCIERGE.PARKING_FLEET"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 15, "APP.CONCIERGE.PARKING_FLEET"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 17, "FORM.NAME_REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 19, "EXPLORE.PARKING_PLATE_NUMBER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(17, 21, "EXPLORE.PARKING_PLATE_NUMBER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 23, "APP.CONCIERGE.PARKING_PLATE_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 25, "APP.CONCIERGE.PARKING_FLEET_MODEL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(27, 27, "APP.CONCIERGE.PARKING_FLEET_MODEL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 29, "APP.CONCIERGE.PARKING_CAR_COLOUR"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(33, 31, "APP.CONCIERGE.PARKING_CAR_COLOUR"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 33, "FORM.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(39, 35, "FORM.NOTES"));
  }
}
function ParkingFleetModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 5);
    \u0275\u0275element(1, "mat-spinner", 21);
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
    \u0275\u0275elementStart(0, "footer", 6)(1, "button", 22);
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
    this.loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.id = computed(() => this._data?.id || "", ...ngDevMode ? [{ debugName: "id" }] : (
      /* istanbul ignore next */
      []
    ));
    this.form = new FormGroup({
      id: new FormControl(""),
      name: new FormControl("", [Validators.required]),
      plate_number: new FormControl("", [Validators.required]),
      car_model: new FormControl(""),
      car_colour: new FormControl(""),
      notes: new FormControl("")
    });
    if (this._data)
      this.form.patchValue(this._data);
  }
  postForm() {
    if (!this.form.valid)
      return;
    this.loading.set(true);
    this._dialog_ref.disableClose = true;
    this.event.emit({ reason: "done", metadata: this.form.getRawValue() });
  }
  static {
    this.\u0275fac = function ParkingFleetModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingFleetModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingFleetModalComponent, selectors: [["parking-fleet-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 6, consts: [[1, "w-md"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "min-h-12", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "max-h-[65vh]", "flex-col", "overflow-auto", "p-4", 3, "formGroup"], [1, "user-y-2", "flex", "flex-col", "items-center", "justify-center", "p-8"], [1, "border-base-300", "flex", "items-center", "justify-end", "space-x-2", "border-t", "px-4", "py-2"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "name", "name", "formControlName", "name", 3, "placeholder"], [1, "flex", "items-center", "space-x-2"], [1, "w-1/3", "flex-1"], ["for", "plate-number"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "plate-number", "formControlName", "plate_number", 3, "placeholder"], ["for", "car-model"], ["matInput", "", "name", "car-model", "formControlName", "car_model", 3, "placeholder"], ["for", "car-colour"], ["matInput", "", "name", "car-colour", "formControlName", "car_colour", 3, "placeholder"], ["for", "notes"], ["matInput", "", "name", "notes", "formControlName", "notes", 3, "placeholder"], ["diameter", "32"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"]], template: function ParkingFleetModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, ParkingFleetModalComponent_Conditional_5_Template, 3, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, ParkingFleetModalComponent_Conditional_6_Template, 40, 37, "main", 4)(7, ParkingFleetModalComponent_Conditional_7_Template, 5, 3, "main", 5);
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
      ReactiveFormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
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
                <main
                    class="flex max-h-[65vh] flex-col overflow-auto p-4"
                    [formGroup]="form"
                >
                    <label for="name">{{
                        'APP.CONCIERGE.PARKING_FLEET' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="name"
                            formControlName="name"
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
                                'EXPLORE.PARKING_PLATE_NUMBER' | translate
                            }}</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    name="plate-number"
                                    formControlName="plate_number"
                                    [placeholder]="
                                        'EXPLORE.PARKING_PLATE_NUMBER'
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
                                    name="car-model"
                                    formControlName="car_model"
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
                            name="car-colour"
                            formControlName="car_colour"
                            [placeholder]="
                                'APP.CONCIERGE.PARKING_CAR_COLOUR' | translate
                            "
                        />
                    </mat-form-field>
                    <label for="notes">{{ 'FORM.NOTES' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <textarea
                            matInput
                            name="notes"
                            formControlName="notes"
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
      ReactiveFormsModule,
      MatDialogModule
    ] }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingFleetModalComponent, { className: "ParkingFleetModalComponent", filePath: "apps/concierge/src/app/parking/parking-fleet-modal.component.ts", lineNumber: 162 });
})();

// apps/concierge/src/app/parking/parking-space-modal.component.ts
function ParkingSpaceModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
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
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "label", 10);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-form-field", 8);
    \u0275\u0275element(14, "input", 11);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementStart(16, "mat-error");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "label", 12);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 13);
    \u0275\u0275element(23, "a-user-search-field", 14);
    \u0275\u0275elementStart(24, "button", 15);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275listener("click", function ParkingSpaceModalComponent_Conditional_6_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ assigned_user: null, assigned_to: null, assigned_name: null }));
    });
    \u0275\u0275elementStart(26, "icon", 16);
    \u0275\u0275text(27, " person_cancel ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 17);
    \u0275\u0275element(29, "settings-toggle", 18);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "label");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "item-list-field", 19);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementStart(36, "label");
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "item-list-field", 20);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementStart(41, "label", 21);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "mat-form-field", 8);
    \u0275\u0275element(45, "textarea", 22);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 16, "APP.CONCIERGE.PARKING_SPACE_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 18, "APP.CONCIERGE.PARKING_SPACE_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 20, "FORM.NAME_REQUIRED"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 22, "EXPLORE.MAP_ID"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(15, 24, "EXPLORE.MAP_ID_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 26, "EXPLORE.MAP_ID_REQUIRED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 28, "APP.CONCIERGE.USER_ASSIGNED"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(25, 30, "APP.CONCIERGE.USER_CLEAR"));
    \u0275\u0275advance(5);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(30, 32, "COMMON.BOOKABLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 34, "COMMON.GROUPS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(35, 36, "BOOKINGS.GROUPS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 38, "COMMON.FEATURES"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(40, 40, "COMMON.FEATURES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 42, "FORM.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(46, 44, "FORM.NOTES"));
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
    this.loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.form = new FormGroup({
      id: new FormControl(""),
      identifier: new FormControl("", [Validators.required]),
      map_id: new FormControl("", [Validators.required]),
      assigned_user: new FormControl(null),
      assigned_to: new FormControl(""),
      assigned_name: new FormControl(""),
      bookable: new FormControl(false),
      place_groups: new FormControl([]),
      features: new FormControl([]),
      notes: new FormControl(""),
      map_rotation: new FormControl(0)
    });
    const _data = this._data;
    if (_data) {
      this.form.patchValue(__spreadProps(__spreadValues({}, _data), {
        features: [..._data.features || []],
        place_groups: [..._data.place_groups || []],
        map_id: _data.map_id || _data.other_data?.map_id
      }));
    }
  }
  async ngOnInit() {
    if (this._data.assigned_to) {
      const user = await showStaff(this._data.assigned_to).toPromise();
      if (user) {
        this.form.patchValue({
          assigned_user: user,
          assigned_to: user.email,
          assigned_name: user.name
        });
      }
    }
  }
  postForm() {
    if (!this.form.valid)
      return;
    this.loading.set(true);
    const value = __spreadValues({}, this.form.getRawValue());
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceModalComponent, selectors: [["parking-space-modal"]], outputs: { event: "event" }, decls: 9, vars: 6, consts: [[1, "w-md"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "min-h-12", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "max-h-[65vh]", "flex-col", "overflow-auto", "p-4", 3, "formGroup"], [1, "flex", "min-h-48", "flex-col", "items-center", "justify-center", "space-y-2", "p-12"], [1, "border-base-300", "flex", "items-center", "justify-end", "space-x-2", "border-t", "px-4", "py-2"], ["for", "identifier"], ["appearance", "outline"], ["matInput", "", "name", "identifier", "formControlName", "identifier", 3, "placeholder"], ["for", "map-id"], ["matInput", "", "name", "map-id", "formControlName", "map_id", 3, "placeholder"], ["for", "user"], [1, "mb-4", "flex", "space-x-2"], ["name", "user", "formControlName", "assigned_user", 1, "flex-1"], ["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "min-w-12", "rounded-sm", 3, "click", "matTooltip"], ["className", "material-symbols-outlined"], [1, "flex", "space-x-4", "pb-4"], ["formControlName", "bookable", 1, "w-full", 3, "name"], ["formControlName", "place_groups", 1, "w-full", 3, "placeholder"], ["formControlName", "features", 1, "w-full", 3, "placeholder"], ["for", "notes"], ["matInput", "", "name", "notes", "formControlName", "notes", 3, "placeholder"], ["diameter", "32"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"]], template: function ParkingSpaceModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, ParkingSpaceModalComponent_Conditional_5_Template, 3, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, ParkingSpaceModalComponent_Conditional_6_Template, 47, 46, "main", 4)(7, ParkingSpaceModalComponent_Conditional_7_Template, 5, 3, "main", 5);
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
      ReactiveFormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
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
                <main
                    class="flex max-h-[65vh] flex-col overflow-auto p-4"
                    [formGroup]="form"
                >
                    <label for="identifier">{{
                        'APP.CONCIERGE.PARKING_SPACE_NAME' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="identifier"
                            [placeholder]="
                                'APP.CONCIERGE.PARKING_SPACE_NAME' | translate
                            "
                            formControlName="identifier"
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
                            name="map-id"
                            [placeholder]="
                                'EXPLORE.MAP_ID_PLACEHOLDER' | translate
                            "
                            formControlName="map_id"
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
                            name="user"
                            formControlName="assigned_user"
                            class="flex-1"
                        ></a-user-search-field>
                        <button
                            icon
                            matRipple
                            class="bg-secondary text-secondary-content h-12 w-12 min-w-12 rounded-sm"
                            [matTooltip]="
                                'APP.CONCIERGE.USER_CLEAR' | translate
                            "
                            (click)="
                                form.patchValue({
                                    assigned_user: null,
                                    assigned_to: null,
                                    assigned_name: null,
                                })
                            "
                        >
                            <icon className="material-symbols-outlined">
                                person_cancel
                            </icon>
                        </button>
                    </div>
                    <div class="flex space-x-4 pb-4">
                        <settings-toggle
                            formControlName="bookable"
                            class="w-full"
                            [name]="'COMMON.BOOKABLE' | translate"
                        >
                        </settings-toggle>
                    </div>
                    <label>{{ 'COMMON.GROUPS' | translate }}</label>
                    <item-list-field
                        class="w-full"
                        [placeholder]="'BOOKINGS.GROUPS' | translate"
                        formControlName="place_groups"
                    ></item-list-field>
                    <label>{{ 'COMMON.FEATURES' | translate }}</label>
                    <item-list-field
                        class="w-full"
                        [placeholder]="'COMMON.FEATURES' | translate"
                        formControlName="features"
                    ></item-list-field>
                    <label for="notes">{{ 'FORM.NOTES' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <textarea
                            matInput
                            name="notes"
                            [placeholder]="'FORM.NOTES' | translate"
                            formControlName="notes"
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
      ReactiveFormsModule,
      MatTooltipModule
    ] }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceModalComponent, { className: "ParkingSpaceModalComponent", filePath: "apps/concierge/src/app/parking/parking-space-modal.component.ts", lineNumber: 190 });
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
    \u0275\u0275elementStart(3, "button", 9);
    \u0275\u0275listener("click", function ParkingUserModalComponent_Conditional_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ user: null, email: null, name: null }));
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
    \u0275\u0275elementStart(20, "mat-error");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 16)(24, "div", 17)(25, "label", 18);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-form-field", 19);
    \u0275\u0275element(29, "input", 20);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 17)(32, "label", 21);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-form-field", 19);
    \u0275\u0275element(36, "input", 22);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "label", 23);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "mat-form-field", 12);
    \u0275\u0275element(42, "textarea", 24);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 25);
    \u0275\u0275element(45, "settings-toggle", 26);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 13, "FORM.NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 15, "FORM.NAME_REQUIRED"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 17, "FORM.EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(19, 19, "FORM.EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 21, "FORM.EMAIL_REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 23, "EXPLORE.PARKING_PLATE_NUMBER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(30, 25, "EXPLORE.PARKING_PLATE_NUMBER"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 27, "APP.CONCIERGE.PARKING_CAR_COLOUR"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(37, 29, "APP.CONCIERGE.PARKING_CAR_COLOUR"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 31, "FORM.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(43, 33, "FORM.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(46, 35, "APP.CONCIERGE.PARKING_USER_DENY_PLACEHOLER"));
  }
}
function ParkingUserModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 5);
    \u0275\u0275element(1, "mat-spinner", 27);
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
    \u0275\u0275elementStart(0, "footer", 6)(1, "button", 28);
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
    this.loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.id = computed(() => this._data?.id || "", ...ngDevMode ? [{ debugName: "id" }] : (
      /* istanbul ignore next */
      []
    ));
    this.form = new FormGroup({
      id: new FormControl(""),
      user: new FormControl(null),
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      plate_number: new FormControl(""),
      car_colour: new FormControl(""),
      notes: new FormControl(""),
      deny: new FormControl(false)
    });
    const _data = this._data;
    if (_data) {
      this.form.patchValue(__spreadProps(__spreadValues({}, _data), {
        car_colour: _data.car_colour || _data.car_color || ""
      }));
    }
  }
  ngOnInit() {
    this.subscription("user", this.form.valueChanges.subscribe((value) => {
      if (value.user?.id && value.user?.email !== this.form.value.email) {
        this.form.patchValue({
          email: value.user.email,
          name: value.user.name
        });
      }
    }));
  }
  postForm() {
    if (!this.form.valid)
      return;
    this.loading.set(true);
    const value = this.form.value;
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingUserModalComponent, selectors: [["parking-user-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 6, consts: [[1, "w-md"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "min-h-12", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "max-h-[65vh]", "flex-col", "overflow-auto", "p-4", 3, "formGroup"], [1, "user-y-2", "flex", "flex-col", "items-center", "justify-center", "p-8"], [1, "border-base-300", "flex", "items-center", "justify-end", "space-x-2", "border-t", "px-4", "py-2"], [1, "mb-4", "flex", "space-x-2"], ["name", "user", "formControlName", "user", 1, "flex-1"], ["icon", "", "matRipple", "", "matTooltip", "Clear Selected User", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "min-w-12", "rounded-sm", 3, "click"], ["className", "material-symbols-outlined"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "name", "name", "formControlName", "name", "placeholder", "Name"], ["for", "email"], ["matInput", "", "name", "email", "formControlName", "email", 3, "placeholder"], [1, "flex", "items-center", "space-x-2"], [1, "w-1/3", "flex-1"], ["for", "plate-number"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "plate-number", "formControlName", "plate_number", 3, "placeholder"], ["for", "car-color"], ["matInput", "", "name", "car-color", "formControlName", "car_colour", 3, "placeholder"], ["for", "notes"], ["matInput", "", "name", "notes", "formControlName", "notes", 3, "placeholder"], [1, "mb-4", "flex", "items-center"], ["formControlName", "deny", 1, "flex-1", 3, "name"], ["diameter", "32"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"]], template: function ParkingUserModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, ParkingUserModalComponent_Conditional_5_Template, 3, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, ParkingUserModalComponent_Conditional_6_Template, 47, 37, "main", 4)(7, ParkingUserModalComponent_Conditional_7_Template, 5, 3, "main", 5);
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
      ReactiveFormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      FormsModule,
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
                <main
                    class="flex max-h-[65vh] flex-col overflow-auto p-4"
                    [formGroup]="form"
                >
                    <div class="mb-4 flex space-x-2">
                        <a-user-search-field
                            name="user"
                            formControlName="user"
                            class="flex-1"
                        ></a-user-search-field>
                        <button
                            icon
                            matRipple
                            class="bg-secondary text-secondary-content h-12 w-12 min-w-12 rounded-sm"
                            matTooltip="Clear Selected User"
                            (click)="
                                form.patchValue({
                                    user: null,
                                    email: null,
                                    name: null,
                                })
                            "
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
                            name="name"
                            formControlName="name"
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
                            name="email"
                            formControlName="email"
                            [placeholder]="'FORM.EMAIL' | translate"
                        />
                        <mat-error>{{
                            'FORM.EMAIL_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                    <div class="flex items-center space-x-2">
                        <div class="w-1/3 flex-1">
                            <label for="plate-number">{{
                                'EXPLORE.PARKING_PLATE_NUMBER' | translate
                            }}</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    name="plate-number"
                                    formControlName="plate_number"
                                    [placeholder]="
                                        'EXPLORE.PARKING_PLATE_NUMBER'
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
                                    name="car-color"
                                    formControlName="car_colour"
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
                            name="notes"
                            formControlName="notes"
                            [placeholder]="'FORM.NOTES' | translate"
                        ></textarea>
                    </mat-form-field>
                    <div class="mb-4 flex items-center">
                        <settings-toggle
                            class="flex-1"
                            [name]="
                                'APP.CONCIERGE.PARKING_USER_DENY_PLACEHOLER'
                                    | translate
                            "
                            formControlName="deny"
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
      ReactiveFormsModule,
      FormsModule,
      MatTooltipModule,
      UserSearchFieldComponent,
      MatDialogModule
    ] }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingUserModalComponent, { className: "ParkingUserModalComponent", filePath: "apps/concierge/src/app/parking/parking-user-modal.component.ts", lineNumber: 200 });
})();

// apps/concierge/src/app/parking/parking-state.service.ts
var USER_PIPE = new UserPipe();
var ParkingStateService = class _ParkingStateService extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this._poll = new BehaviorSubject(0);
    this._change = new BehaviorSubject(0);
    this._fleet_vehicles = new BehaviorSubject([]);
    this._options = new BehaviorSubject({
      date: Date.now(),
      period: "day",
      search: "",
      zones: []
    });
    this._loading = new BehaviorSubject([]);
    this.levels = combineLatest([
      this._org.active_region,
      this._org.active_building
    ]).pipe(filter(([_, bld]) => !!bld), map(([_, bld]) => {
      const levels = this._org.levels.filter((_2) => _2.tags.includes("parking"));
      if (this._settings.get("app.use_region")) {
        const blds = this._org.buildingsForRegion();
        const bld_ids = blds.map((bld2) => bld2.id);
        const list = levels.filter((lvl) => bld_ids.includes(lvl.parent_id));
        list.map((lvl) => __spreadProps(__spreadValues({}, lvl), {
          display_name: `${blds.find((_2) => _2.id === lvl.parent_id)?.display_name} - ${lvl.display_name}`
        }));
        return list;
      }
      return levels.filter((lvl) => lvl.parent_id === bld.id);
    }));
    this.spaces = combineLatest([
      this.levels,
      this._options,
      this._change
    ]).pipe(debounceTime(300), switchMap(([levels, options]) => {
      const zone_id = options.zones[0] || levels[0]?.id;
      if (!zone_id) {
        return of([]);
      }
      this._loading.next([...this._loading.getValue(), "spaces"]);
      return queryParkingSpaces(zone_id);
    }), tap(() => this._loading.next(this._loading.getValue().filter((_) => _ !== "spaces"))), shareReplay(1));
    this.users = combineLatest([
      this._org.active_building,
      this._change
    ]).pipe(filter(([bld]) => !!bld?.id), switchMap(([bld]) => {
      this._loading.next([...this._loading.getValue(), "users"]);
      return queryParkingUsers(bld.id);
    }), tap(() => this._loading.next(this._loading.getValue().filter((_) => _ !== "users"))), shareReplay(1));
    this.fleet_vehicles = this._fleet_vehicles.asObservable();
    this.bookings = combineLatest([
      this._org.active_building,
      this._options,
      this.users,
      this._poll,
      this._change
    ]).pipe(debounceTime(500), switchMap(([bld, options, users]) => {
      const period_start = options.period === "week" ? startOfWeek(options.date, {
        weekStartsOn: this._week_start
      }) : startOfDay(options.date);
      const period_end = options.period === "week" ? endOfWeek(options.date, {
        weekStartsOn: this._week_start
      }) : endOfDay(options.date);
      this._loading.next([...this._loading.getValue(), "[BOOKINGS]"]);
      return queryBookings({
        period_start: getUnixTime(period_start),
        period_end: getUnixTime(period_end),
        type: "parking",
        zones: options.zones?.length ? options.zones.join(",") : (this._settings.get("app.use_region") ? this._org.region?.id : "") || bld?.id,
        include_checked_out: true
      }).pipe(map((list) => {
        for (const booking of list) {
          const user = users.find((_) => _.email.toLowerCase() === booking.user_email.toLowerCase());
          if (user) {
            booking.extension_data.plate_number = booking.extension_data.plate_number || user.plate_number;
          }
        }
        return list;
      }));
    }), tap(() => this._loading.next(this._loading.getValue().filter((_) => _ !== "[BOOKINGS]"))), shareReplay(1));
    this.options = this._options.asObservable();
    this.loading = this._loading.asObservable();
    this.subscription("fleet_vehicles", combineLatest([this._org.active_building, this._change]).pipe(filter(([bld]) => !!bld?.id), switchMap(([bld]) => this._loadFleetVehicles(bld.id))).subscribe((list) => this._fleet_vehicles.next(list)));
  }
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
  startPolling(delay = 2 * 60 * 1e3) {
    this._poll.next(Date.now());
    this.interval("poll", () => this._poll.next(Date.now()), delay);
    return () => this.stopPolling();
  }
  stopPolling() {
    this.clearInterval("poll");
  }
  /** Add or update a space in the available list */
  async editSpace(space = {}) {
    const ref = this._dialog.open(ParkingSpaceModalComponent, {
      data: space
    });
    const state = await Promise.race([
      ref.afterClosed().toPromise(),
      ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise()
    ]);
    if (state?.reason !== "done")
      return;
    const zone_id = this._options.getValue().zones[0] || space.zone_id || this._org.levelsForBuilding()[0]?.id;
    const asset_data = __spreadProps(__spreadValues({}, state.metadata), {
      zone_id,
      id: state.metadata.id || void 0
    });
    let recreate = false;
    if (space.assigned_to && (space.assigned_to !== asset_data.assigned_to || space.id !== asset_data.id)) {
      this._clearAssignedBooking(space);
      recreate = true;
    }
    const saved = await saveParkingSpace(asset_data).toPromise();
    if ((space.assigned_to !== asset_data.assigned_to || recreate) && asset_data.assigned_to) {
      const users = await nextValueFrom(this.users);
      const user = users.find((_) => _.email === asset_data.assigned_to);
      const user_details = await USER_PIPE.transform(asset_data.assigned_to);
      const date = set(Date.now(), { hours: 1, minutes: 0, seconds: 0 });
      await saveBooking(new Booking({
        user_id: user_details.id || asset_data.assigned_to,
        user_email: asset_data.assigned_to,
        user_name: user_details.name,
        booking_start: getUnixTime(date),
        booking_end: getUnixTime(addHours(date, 22)),
        type: "parking",
        booking_type: "parking",
        asset_id: saved.id,
        asset_name: saved.name,
        recurrence_type: "daily",
        recurrence_days: RecurrenceDays.MONDAY | RecurrenceDays.TUESDAY | RecurrenceDays.WEDNESDAY | RecurrenceDays.THURSDAY | RecurrenceDays.FRIDAY,
        zones: unique([
          this._org.organisation.id,
          this._org.region?.id,
          this._org.building?.id,
          zone_id
        ]),
        extension_data: {
          asset_name: saved.name,
          is_assigned: true,
          plate_number: user?.plate_number || ""
        }
      })).toPromise().catch((e) => {
        ref.close();
        throw e;
      });
    }
    this._change.next(Date.now());
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
    this._clearAssignedBooking(space);
    await deleteParkingSpace(space.id).toPromise();
    this._change.next(Date.now());
    state.close();
  }
  /** Add or update a user in the available list */
  async editUser(user) {
    const ref = this._dialog.open(ParkingUserModalComponent, {
      data: user
    });
    const state = await Promise.race([
      ref.afterClosed().toPromise(),
      ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise()
    ]);
    if (state?.reason !== "done")
      return;
    const zone = this._org.building.id;
    const new_user = __spreadProps(__spreadValues({}, state.metadata), {
      id: state.metadata.id || void 0
    });
    if ("user" in new_user)
      delete new_user.user;
    await saveParkingUser(new_user, zone).toPromise();
    this._change.next(Date.now());
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
    await deleteParkingUser(user.id).toPromise().catch((e) => {
      notifyError(i18n("APP.CONCIERGE.PARKING_USER_REMOVE_ERROR", {
        error: e
      }));
      throw e;
    });
    state.close();
    notifySuccess(i18n("APP.CONCIERGE.PARKING_USER_REMOVE_SUCCESS"));
    this._change.next(Date.now());
  }
  /** Add or update a fleet vehicle in the available list */
  async editFleetVehicle(vehicle) {
    const ref = this._dialog.open(ParkingFleetModalComponent, {
      data: vehicle
    });
    const state = await Promise.race([
      ref.afterClosed().toPromise(),
      ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise()
    ]);
    if (state?.reason !== "done")
      return;
    const zone = this._org.building.id;
    const new_vehicle = __spreadProps(__spreadValues({}, state.metadata), {
      id: state.metadata.id || void 0
    });
    const saved = await saveParkingFleetVehicle(new_vehicle, zone).toPromise();
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
    await deleteParkingFleetVehicle(vehicle.id).toPromise().catch((e) => {
      notifyError(i18n("APP.CONCIERGE.PARKING_FLEET_REMOVE_ERROR", {
        error: e
      }));
      throw e;
    });
    state.close();
    notifySuccess(i18n("APP.CONCIERGE.PARKING_FLEET_REMOVE_SUCCESS"));
    this._removeFleetVehicleFromList(vehicle.id);
  }
  editReservation(reservation, { parent_id, user, link_id, date, space, allow_time_changes, external_user } = {}) {
    return new Promise(async (resolve) => {
      const levels = await nextValueFrom(this.levels);
      const spaces = await nextValueFrom(this.spaces);
      if (!space && reservation?.asset_id) {
        space = spaces.find((_) => _.id === reservation.asset_id);
      }
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
        this._poll.next(Date.now());
      });
    });
  }
  async setBookingCheckinState(booking, state = true) {
    const promise = (booking.instance ? checkinBookingInstance(booking.id, booking.instance, state) : checkinBooking(booking.id, state)).toPromise().catch((_) => ({ state: "failed", error: _ }));
    const success = await promise;
    success.state === "failed" ? notifyError(i18n(state ? "APP.CONCIERGE.PARKING_CHECKIN_ERROR" : "APP.CONCIERGE.PARKING_CHECKOUT_ERROR", { error: success.error })) : notifySuccess(i18n(state ? "APP.CONCIERGE.PARKING_CHECKIN_SUCCESS" : "APP.CONCIERGE.PARKING_CHECKOUT_SUCCESS"));
    if (success.state !== "failed")
      this._change.next(Date.now());
  }
  async approveBooking(booking) {
    const promise = (booking.instance ? approveBookingInstance(booking.id, booking.instance) : approveBooking(booking.id)).toPromise().catch((_) => ({ state: "failed", error: _ }));
    const success = await promise;
    success.state === "failed" ? notifyError(i18n("APP.CONCIERGE.PARKING_APPROVE_ERROR", {
      error: success.error
    })) : notifySuccess(i18n("APP.CONCIERGE.PARKING_APPROVE_SUCCESS"));
    if (success.state !== "failed")
      this._change.next(Date.now());
  }
  async rejectBooking(booking) {
    const promise = (booking.instance ? rejectBookingInstance(booking.id, booking.instance) : rejectBooking(booking.id)).toPromise().catch((_) => ({ state: "failed", error: _ }));
    const success = await promise;
    success.state === "failed" ? notifyError(i18n("APP.CONCIERGE.PARKING_DECLINE_ERROR", {
      error: success.error
    })) : notifySuccess(i18n("APP.CONCIERGE.PARKING_DECLINE_SUCCESS"));
    if (success.state !== "failed")
      this._change.next(Date.now());
  }
  async assignSpace(booking) {
    const ref = this._dialog.open(ParkingAssignSpaceModalComponent, {
      data: { booking }
    });
    const result = await ref.afterClosed().toPromise();
    if (result)
      this._change.next(Date.now());
  }
  async _clearAssignedBooking(resource) {
    const today = Date.now();
    const booking_list = await lastValueFrom(queryBookings({
      period_start: getUnixTime(startOfDay(today)),
      period_end: getUnixTime(endOfDay(today)),
      type: "parking",
      email: resource.assigned_to,
      include_checked_out: true
    }));
    const filtered = booking_list.filter((_) => _.asset_id === resource.id);
    for (const booking of filtered) {
      const is_recurring = booking.recurrence_type && booking.recurrence_type !== "none";
      if (is_recurring && booking.instance) {
        const yesterday_end = getUnixTime(endOfDay(subDays(today, 1)));
        await lastValueFrom(updateBooking(booking.id, {
          recurrence_end: yesterday_end
        }));
      } else {
        await lastValueFrom(removeBooking(booking.id));
      }
    }
  }
  get _week_start() {
    return this._settings.get("app.week_start") || 0;
  }
  _loadFleetVehicles(building_id) {
    this._loading.next([...this._loading.getValue(), "fleet"]);
    return queryParkingFleetVehicles(building_id).pipe(tap(() => this._loading.next(this._loading.getValue().filter((_) => _ !== "fleet"))));
  }
  _upsertFleetVehicle(vehicle) {
    const fleet_list = this._fleet_vehicles.getValue();
    const index = fleet_list.findIndex((_) => _.id === vehicle.id);
    this._fleet_vehicles.next(index >= 0 ? fleet_list.map((item, idx) => idx === index ? vehicle : item) : [...fleet_list, vehicle]);
  }
  _removeFleetVehicleFromList(vehicle_id) {
    this._fleet_vehicles.next(this._fleet_vehicles.getValue().filter((_) => _.id !== vehicle_id));
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
  ParkingStateService
};
//# sourceMappingURL=chunk-R2M3FZNK.js.map
