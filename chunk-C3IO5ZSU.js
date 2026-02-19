import {
  ANIMATION_SHOW_CONTRACT_EXPAND,
  AssetRequest,
  AssetStateService,
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  CommonModule,
  Component,
  CounterComponent,
  DatePipe,
  DefaultValueAccessor,
  DurationFieldComponent,
  FormsModule,
  IconComponent,
  ImageCarouselComponent,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatOption,
  MatPrefix,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  SettingsService,
  SettingsToggleComponent,
  TranslatePipe,
  __spreadProps,
  __spreadValues,
  addDays,
  addMinutes,
  combineLatest,
  differenceInMinutes,
  endOfDay,
  forwardRef,
  i18n,
  inject,
  input,
  isMobileSafari,
  map,
  notifyError,
  output,
  randomInt,
  randomString,
  setClassMetadata,
  startOfDay,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U2QHPUHR.js";

// libs/assets/src/lib/new-asset-select-modal/new-asset-details.component.ts
function NewAssetDetailsComponent_Conditional_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.NO_DESCRIPTION"), " ");
  }
}
function NewAssetDetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 1);
    \u0275\u0275element(1, "image-carousel", 2);
    \u0275\u0275elementStart(2, "button", 3);
    \u0275\u0275listener("click", function NewAssetDetailsComponent_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function NewAssetDetailsComponent_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFav.emit());
    });
    \u0275\u0275elementStart(6, "icon", 5);
    \u0275\u0275text(7, "favorite");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 6)(9, "h2", 7);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "section", 8)(12, "p", 9);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a-counter", 10);
    \u0275\u0275twoWayListener("ngModelChange", function NewAssetDetailsComponent_Conditional_0_Template_a_counter_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.item().quantity, $event) || (ctx_r1.item().quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function NewAssetDetailsComponent_Conditional_0_Template_a_counter_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.countChange.emit($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "section", 11)(16, "h2", 12);
    \u0275\u0275text(17, " Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 13)(19, "p");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, NewAssetDetailsComponent_Conditional_0_Conditional_21_Template, 3, 3, "div", 14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("images", ctx_r1.item().images);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-info-content", ctx_r1.fav());
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r1.fav() ? "material-symbols-rounded" : "material-symbols-outlined");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.item().name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.item().available != null ? ctx_r1.item().available : (tmp_5_0 = ctx_r1.item().assets) == null ? null : tmp_5_0.length) || 0, " Available ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.item().quantity);
    \u0275\u0275property("min", 1)("max", (ctx_r1.item().available != null ? ctx_r1.item().available : (tmp_8_0 = ctx_r1.item().assets) == null ? null : tmp_8_0.length) || 1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.item().description);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.item().description ? 21 : -1);
  }
}
function NewAssetDetailsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "BOOKINGS.ASSETS_SELECT"), " ");
  }
}
var _NewAssetDetailsComponent = class _NewAssetDetailsComponent {
  constructor() {
    this.item = input(void 0);
    this.active = input(false);
    this.fav = input(false);
    this.toggleFav = output();
    this.activeChange = output();
    this.countChange = output();
    this.close = output();
  }
  ngOnInit() {
    const item = this.item();
    if (item && !item.quantity)
      item.quantity = 1;
  }
  ngOnChanges(changes) {
    const item = this.item();
    if (changes.item && item) {
      if (!item.quantity)
        item.quantity = 1;
    }
  }
};
_NewAssetDetailsComponent.\u0275fac = function NewAssetDetailsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewAssetDetailsComponent)();
};
_NewAssetDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewAssetDetailsComponent, selectors: [["new-asset-details"]], inputs: { item: [1, "item"], active: [1, "active"], fav: [1, "fav"] }, outputs: { toggleFav: "toggleFav", activeChange: "activeChange", countChange: "countChange", close: "close" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 1, consts: [["empty", "", 1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], ["image", "", 1, "bg-base-200", "relative", "h-64", "w-full", "sm:h-40"], [1, "absolute", "inset-0", 3, "images"], ["icon", "", "matRipple", "", "close", "", 1, "bg-base-100", "absolute", "top-2", "left-2", "lg:hidden", 3, "click"], ["icon", "", "matRipple", "", "fav", "", 1, "bg-base-100", "absolute", "top-2", "right-2", 3, "click"], [3, "className"], [1, "h-1/2", "flex-1", "space-y-4", "p-2"], [1, "my-2", "px-2", "text-xl", "font-medium"], ["actions", "", 1, "z-0", "flex", "items-center", "justify-between"], [1, "px-2"], [3, "ngModelChange", "ngModel", "min", "max"], ["details", "", 1, "border-base-400", "relative", "space-y-2", "rounded-sm", "border", "px-3", "pt-2", "pb-2"], [1, "bg-base-100", "absolute", "top-0", "left-2", "-translate-y-1/2", "px-2", "text-lg", "font-medium"], [1, "flex", "items-center", "space-x-2", "px-2", "pb-1"], [1, "w-full", "text-center", "opacity-30"], [1, "text-center", "opacity-30"]], template: function NewAssetDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NewAssetDetailsComponent_Conditional_0_Template, 22, 11)(1, NewAssetDetailsComponent_Conditional_1_Template, 4, 3, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.item() ? 0 : 1);
  }
}, dependencies: [
  ImageCarouselComponent,
  IconComponent,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  CounterComponent,
  FormsModule,
  NgControlStatus,
  NgModel
], encapsulation: 2 });
var NewAssetDetailsComponent = _NewAssetDetailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewAssetDetailsComponent, [{
    type: Component,
    args: [{ selector: "new-asset-details", template: `
        @if (item()) {
            <section image class="bg-base-200 relative h-64 w-full sm:h-40">
                <image-carousel
                    [images]="item().images"
                    class="absolute inset-0"
                ></image-carousel>
                <button
                    icon
                    matRipple
                    close
                    (click)="close.emit()"
                    class="bg-base-100 absolute top-2 left-2 lg:hidden"
                >
                    <icon>arrow_back</icon>
                </button>
                <button
                    icon
                    matRipple
                    fav
                    [class.text-info-content]="fav()"
                    (click)="toggleFav.emit()"
                    class="bg-base-100 absolute top-2 right-2"
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
            </section>
            <div class="h-1/2 flex-1 space-y-4 p-2">
                <h2 class="my-2 px-2 text-xl font-medium">
                    {{ item().name }}
                </h2>
                <section actions class="z-0 flex items-center justify-between">
                    <p class="px-2">
                        {{
                            ($any(item()).available != null
                                ? $any(item()).available
                                : item().assets?.length) || 0
                        }}
                        Available
                    </p>
                    <a-counter
                        [(ngModel)]="item().quantity"
                        (ngModelChange)="countChange.emit($event)"
                        [min]="1"
                        [max]="
                            ($any(item()).available != null
                                ? $any(item()).available
                                : item().assets?.length) || 1
                        "
                    ></a-counter>
                </section>
                <section
                    details
                    class="border-base-400 relative space-y-2 rounded-sm border px-3 pt-2 pb-2"
                >
                    <h2
                        class="bg-base-100 absolute top-0 left-2 -translate-y-1/2 px-2 text-lg font-medium"
                    >
                        Details
                    </h2>
                    <div class="flex items-center space-x-2 px-2 pb-1">
                        <p>{{ item().description }}</p>
                        @if (!item().description) {
                            <div class="w-full text-center opacity-30">
                                {{ 'COMMON.NO_DESCRIPTION' | translate }}
                            </div>
                        }
                    </div>
                </section>
            </div>
        } @else {
            <div
                empty
                class="flex h-full w-full flex-col items-center justify-center space-y-2 p-8"
            >
                <p class="text-center opacity-30">
                    {{ 'BOOKINGS.ASSETS_SELECT' | translate }}
                </p>
            </div>
        }
    `, imports: [
      ImageCarouselComponent,
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      CounterComponent,
      FormsModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewAssetDetailsComponent, { className: "NewAssetDetailsComponent", filePath: "libs/assets/src/lib/new-asset-select-modal/new-asset-details.component.ts", lineNumber: 118 });
})();

// libs/assets/src/lib/new-asset-select-modal/new-asset-filters-display.component.ts
var _NewAssetFiltersDisplayComponent = class _NewAssetFiltersDisplayComponent {
};
_NewAssetFiltersDisplayComponent.\u0275fac = function NewAssetFiltersDisplayComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewAssetFiltersDisplayComponent)();
};
_NewAssetFiltersDisplayComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewAssetFiltersDisplayComponent, selectors: [["new-asset-filters-display"]], decls: 0, vars: 0, template: function NewAssetFiltersDisplayComponent_Template(rf, ctx) {
}, encapsulation: 2 });
var NewAssetFiltersDisplayComponent = _NewAssetFiltersDisplayComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewAssetFiltersDisplayComponent, [{
    type: Component,
    args: [{ selector: "new-asset-filters-display", template: `` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewAssetFiltersDisplayComponent, { className: "NewAssetFiltersDisplayComponent", filePath: "libs/assets/src/lib/new-asset-select-modal/new-asset-filters-display.component.ts", lineNumber: 8 });
})();

// libs/assets/src/lib/new-asset-select-modal/new-asset-filters.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function NewAssetFiltersComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.OPTIONS"), " ");
  }
}
function NewAssetFiltersComponent_Conditional_12_Conditional_3_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r4 = ctx.$implicit;
    \u0275\u0275property("value", day_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, day_r4.value, "mediumDate"), " ");
  }
}
function NewAssetFiltersComponent_Conditional_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 12)(4, "mat-select", 13);
    \u0275\u0275listener("ngModelChange", function NewAssetFiltersComponent_Conditional_12_Conditional_3_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.offset_dayChange.emit($event));
    });
    \u0275\u0275repeaterCreate(5, NewAssetFiltersComponent_Conditional_12_Conditional_3_For_6_Template, 3, 5, "mat-option", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "BOOKINGS.ASSETS_DELIVER_DATE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.offset_day());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.day_options);
  }
}
function NewAssetFiltersComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "settings-toggle", 10);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function NewAssetFiltersComponent_Conditional_12_Template_settings_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.at_timeChange.emit($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, NewAssetFiltersComponent_Conditional_12_Conditional_3_Template, 7, 4);
    \u0275\u0275elementStart(4, "label");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a-duration-field", 11);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275listener("ngModelChange", function NewAssetFiltersComponent_Conditional_12_Template_a_duration_field_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.offsetChange.emit($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("name", \u0275\u0275pipeBind1(2, 11, "BOOKINGS.ASSETS_DELIVER_TOGGLE"))("ngModel", ctx_r1.at_time())("matTooltip", ctx_r1.exact_tooltip);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.day_options.length > 1 ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 13, "BOOKINGS.ASSETS_DELIVER_TIME"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.offset())("time", ctx_r1.offset_day() > 0 ? ctx_r1.start_of_date : (tmp_7_0 = \u0275\u0275pipeBind1(8, 15, ctx_r1.options)) == null ? null : tmp_7_0.date)("step", ctx_r1.step_interval)("min", ctx_r1.min_offset)("max", ctx_r1.max_offset - 1)("use_24hr", ctx_r1.use_24hr);
  }
}
function NewAssetFiltersComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 15);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("ngModelChange", function NewAssetFiltersComponent_For_18_Template_settings_toggle_ngModelChange_0_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCategory(item_r6.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    const item_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("name", item_r6.name)("ngModel", (tmp_11_0 = \u0275\u0275pipeBind1(1, 2, ctx_r1.category)) == null ? null : tmp_11_0.includes(item_r6.id));
  }
}
var _NewAssetFiltersComponent = class _NewAssetFiltersComponent extends AsyncHandler {
  get start_of_date() {
    return startOfDay(addDays(this._state.getOptions().date, this.offset_day())).valueOf();
  }
  get min_offset() {
    return this.offset_day() > 0 ? 0 : this._min_offset;
  }
  get step_interval() {
    return this._settings.get("app.assets.step_interval") || 5;
  }
  get max_offset() {
    const end = Math.min(endOfDay(addDays(this._state.getOptions().date, this.offset_day())).valueOf(), addMinutes(this._state.getOptions().date, this._state.getOptions().duration).valueOf());
    const diff = differenceInMinutes(end, this._state.getOptions().date);
    return Math.min(diff, Math.min(24 * 60 - 1, this._max_offset));
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  constructor() {
    super();
    this._state = inject(AssetStateService);
    this._settings = inject(SettingsService);
    this.search = input(false);
    this.at_time = input(false);
    this.at_timeChange = output();
    this.offset = input(0);
    this.offsetChange = output();
    this.offset_day = input(0);
    this.offset_dayChange = output();
    this._min_offset = 0;
    this._max_offset = 60;
    this.search_value = this._state.search;
    this.category = this._state.category;
    this.categories = this._state.category_list;
    this.options = this._state.options;
    this.exact_tooltip = "Deliver at exactly specified time. \nNote that changes to the booking will not be \nreflected in the order if this is set.";
    this.day_options = [];
    this.setSearch = (s) => this._state.setSearch(s);
    this.toggleCategory = (c) => this._state.toggleCategory(c);
  }
  ngOnInit() {
    this._min_offset = Math.max(this._settings.get("app.assets.min_offset"), 0);
    this.subscription("filters", this._state.options.subscribe(() => {
      this._max_offset = Math.max(15, (this._state.getOptions().duration || 60) - this._settings.get("app.assets.end_offset"));
      this._updateDayOptions();
    }));
    this._updateDayOptions();
  }
  _updateDayOptions() {
    const { date, duration } = this._state.getOptions();
    if (duration <= 24 * 60)
      return this.day_options = [];
    let day = startOfDay(date);
    let count = 0;
    const end = endOfDay(addMinutes(date, duration)).valueOf();
    const options = [];
    while (day.valueOf() <= end) {
      options.push({ id: count, value: day.valueOf() });
      day = addDays(day, 1);
      count++;
    }
    this.day_options = options;
  }
};
_NewAssetFiltersComponent.\u0275fac = function NewAssetFiltersComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewAssetFiltersComponent)();
};
_NewAssetFiltersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewAssetFiltersComponent, selectors: [["new-asset-filters"]], inputs: { search: [1, "search"], at_time: [1, "at_time"], offset: [1, "offset"], offset_day: [1, "offset_day"] }, outputs: { at_timeChange: "at_timeChange", offsetChange: "offsetChange", offset_dayChange: "offset_dayChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 20, vars: 18, consts: [[1, "border-base-300", "bg-base-100", "sticky", "top-0", "z-10", "flex", "items-center", "border-b", "px-4", "py-4"], [1, "text-xl", "font-medium"], [1, "mt-3", "mb-2", "px-2"], ["appearance", "outline", 1, "h-14", "w-full"], ["matPrefix", "", 1, "text-xl"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], [1, "hidden", "px-2", "py-2", "font-medium", "sm:block"], [1, "flex", "flex-col", "space-y-2", "px-2"], [1, "hidden", "px-2", "py-4", "font-medium", "sm:block"], [3, "name", "ngModel"], [3, "ngModelChange", "name", "ngModel", "matTooltip"], [3, "ngModelChange", "ngModel", "time", "step", "min", "max", "use_24hr"], ["appearance", "outline", 1, "no-subscript", "mb-4", "w-full"], [3, "ngModelChange", "ngModel"], [3, "value"], [3, "ngModelChange", "name", "ngModel"]], template: function NewAssetFiltersComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 2)(5, "mat-form-field", 3)(6, "icon", 4);
    \u0275\u0275text(7, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 5);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("ngModelChange", function NewAssetFiltersComponent_Template_input_ngModelChange_8_listener($event) {
      return ctx.setSearch($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(11, NewAssetFiltersComponent_Conditional_11_Template, 3, 3, "h3", 6);
    \u0275\u0275conditionalCreate(12, NewAssetFiltersComponent_Conditional_12_Template, 9, 17, "div", 7);
    \u0275\u0275elementStart(13, "h3", 8);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 7);
    \u0275\u0275repeaterCreate(17, NewAssetFiltersComponent_For_18_Template, 2, 4, "settings-toggle", 9, _forTrack0);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, "COMMON.FILTERS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("sm:hidden", !ctx.search());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(9, 10, ctx.search_value))("placeholder", \u0275\u0275pipeBind1(10, 12, "BOOKINGS.ASSETS_SEARCH"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx.search() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.search() ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 14, "COMMON.CATEGORIES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(19, 16, ctx.categories));
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DatePipe,
  MatFormFieldModule,
  MatFormField,
  MatPrefix,
  MatInputModule,
  MatInput,
  SettingsToggleComponent,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  MatSelectModule,
  MatSelect,
  MatOption,
  MatTooltipModule,
  MatTooltip,
  TranslatePipe,
  DurationFieldComponent,
  IconComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 16rem;\n}\n/*# sourceMappingURL=new-asset-filters.component.css.map */"] });
var NewAssetFiltersComponent = _NewAssetFiltersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewAssetFiltersComponent, [{
    type: Component,
    args: [{ selector: "new-asset-filters", template: `
        <div
            class="border-base-300 bg-base-100 sticky top-0 z-10 flex items-center border-b px-4 py-4"
        >
            <h3 class="text-xl font-medium">
                {{ 'COMMON.FILTERS' | translate }}
            </h3>
        </div>
        <div class="mt-3 mb-2 px-2" [class.sm:hidden]="!search()">
            <mat-form-field appearance="outline" class="h-14 w-full">
                <icon matPrefix class="text-xl">search</icon>
                <input
                    matInput
                    [ngModel]="search_value | async"
                    (ngModelChange)="setSearch($event)"
                    [placeholder]="'BOOKINGS.ASSETS_SEARCH' | translate"
                />
            </mat-form-field>
        </div>
        @if (!search()) {
            <h3 class="hidden px-2 py-2 font-medium sm:block">
                {{ 'COMMON.OPTIONS' | translate }}
            </h3>
        }
        @if (!search()) {
            <div class="flex flex-col space-y-2 px-2">
                <settings-toggle
                    [name]="'BOOKINGS.ASSETS_DELIVER_TOGGLE' | translate"
                    [ngModel]="at_time()"
                    (ngModelChange)="at_timeChange.emit($event)"
                    [matTooltip]="exact_tooltip"
                ></settings-toggle>
                @if (day_options.length > 1) {
                    <label>{{
                        'BOOKINGS.ASSETS_DELIVER_DATE' | translate
                    }}</label>
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript mb-4 w-full"
                    >
                        <mat-select
                            [ngModel]="offset_day()"
                            (ngModelChange)="offset_dayChange.emit($event)"
                        >
                            @for (day of day_options; track day) {
                                <mat-option [value]="day.id">
                                    {{ day.value | date: 'mediumDate' }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                }
                <label>{{ 'BOOKINGS.ASSETS_DELIVER_TIME' | translate }}</label>
                <a-duration-field
                    [ngModel]="offset()"
                    (ngModelChange)="offsetChange.emit($event)"
                    [time]="
                        offset_day() > 0
                            ? start_of_date
                            : (options | async)?.date
                    "
                    [step]="step_interval"
                    [min]="min_offset"
                    [max]="max_offset - 1"
                    [use_24hr]="use_24hr"
                ></a-duration-field>
            </div>
        }
        <h3 class="hidden px-2 py-4 font-medium sm:block">
            {{ 'COMMON.CATEGORIES' | translate }}
        </h3>
        <div class="flex flex-col space-y-2 px-2">
            @for (item of categories | async; track item.id) {
                <settings-toggle
                    [name]="item.name"
                    [ngModel]="(category | async)?.includes(item.id)"
                    (ngModelChange)="toggleCategory(item.id)"
                ></settings-toggle>
            }
        </div>
    `, imports: [
      CommonModule,
      MatFormFieldModule,
      MatInputModule,
      SettingsToggleComponent,
      FormsModule,
      MatSelectModule,
      MatTooltipModule,
      TranslatePipe,
      DurationFieldComponent,
      IconComponent
    ], styles: ["/* angular:styles/component:css;36d64ad43f766c5d882a6ff09652b79772b85201d683018b64b0e6a2bff9f10c;/home/runner/work/user-interfaces/user-interfaces/libs/assets/src/lib/new-asset-select-modal/new-asset-filters.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  min-width: 16rem;\n}\n/*# sourceMappingURL=new-asset-filters.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewAssetFiltersComponent, { className: "NewAssetFiltersComponent", filePath: "libs/assets/src/lib/new-asset-select-modal/new-asset-filters.component.ts", lineNumber: 127 });
})();

// libs/assets/src/lib/new-asset-select-modal/new-asset-list.component.ts
var _c0 = (a0) => ({ count: a0 });
function NewAssetListComponent_Conditional_8_Conditional_0_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const asset_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", asset_r2.quantity || 1, " ");
  }
}
function NewAssetListComponent_Conditional_8_Conditional_0_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 9);
  }
  if (rf & 2) {
    const asset_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", asset_r2.images[0]);
  }
}
function NewAssetListComponent_Conditional_8_Conditional_0_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10);
  }
}
function NewAssetListComponent_Conditional_8_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 5)(1, "button", 6);
    \u0275\u0275listener("click", function NewAssetListComponent_Conditional_8_Conditional_0_For_2_Template_button_click_1_listener() {
      const asset_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectAsset(asset_r2));
    });
    \u0275\u0275elementStart(2, "div", 7);
    \u0275\u0275conditionalCreate(3, NewAssetListComponent_Conditional_8_Conditional_0_For_2_Conditional_3_Template, 3, 1, "div", 8);
    \u0275\u0275conditionalCreate(4, NewAssetListComponent_Conditional_8_Conditional_0_For_2_Conditional_4_Template, 1, 1, "img", 9)(5, NewAssetListComponent_Conditional_8_Conditional_0_For_2_Conditional_5_Template, 1, 0, "img", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 11)(7, "div", 12)(8, "div");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 13);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 14)(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "button", 15);
    \u0275\u0275listener("click", function NewAssetListComponent_Conditional_8_Conditional_0_For_2_Template_button_click_16_listener() {
      const asset_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleFav.emit(asset_r2));
    });
    \u0275\u0275elementStart(17, "icon", 16);
    \u0275\u0275text(18, "favorite");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const asset_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.selected().includes(asset_r2.id) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((asset_r2.images == null ? null : asset_r2.images.length) ? 4 : 5);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(asset_r2.name || "Asset");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", asset_r2.category, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(15, 8, "BOOKINGS.ASSETS_AVAILABLE", \u0275\u0275pureFunction1(11, _c0, asset_r2.available || (asset_r2.assets == null ? null : asset_r2.assets.length) || "0")), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-info", ctx_r2.isFavourite(asset_r2.id));
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r2.isFavourite(asset_r2.id) ? "material-symbols-rounded" : "material-symbols-outlined");
  }
}
function NewAssetListComponent_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 3);
    \u0275\u0275repeaterCreate(1, NewAssetListComponent_Conditional_8_Conditional_0_For_2_Template, 19, 13, "li", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r2.assets));
  }
}
function NewAssetListComponent_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "BOOKINGS.ASSETS_EMPTY"), " ");
  }
}
function NewAssetListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NewAssetListComponent_Conditional_8_Conditional_0_Template, 4, 2, "ul", 3);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalBranchCreate(2, NewAssetListComponent_Conditional_8_Conditional_2_Template, 4, 3, "div", 4);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(1, 1, ctx_r2.assets)) == null ? null : tmp_1_0.length) ? 0 : 2);
  }
}
function NewAssetListComponent_Conditional_10_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "BOOKINGS.ASSETS_LOADING"), " ");
  }
}
var _NewAssetListComponent = class _NewAssetListComponent {
  constructor() {
    this._asset_state = inject(AssetStateService);
    this.selected = input("");
    this.favorites = input([]);
    this.selected_items = input([]);
    this.requested = input({});
    this.toggleFav = output();
    this.onSelect = output();
    this._requested_items = new BehaviorSubject({});
    this.counts = new BehaviorSubject({});
    this.loading = this._asset_state.loading;
    this.assets = combineLatest([
      this.counts,
      this._asset_state.filtered_assets,
      this._requested_items
    ]).pipe(map(([counts, assets, requested]) => {
      for (const item of assets) {
        item.quantity = counts[item.id] || 0;
        const selected = this.selected_items().find((i) => i.id === item.id);
        if (selected)
          selected.assets = item.assets;
        if (requested[item.id] !== void 0) {
          item.available = Math.max((item.assets?.length || 0) - requested[item.id], 0);
        }
      }
      return assets.filter((_) => _.available != null && _.available > 0 || _.available == null && _.assets?.length > 0);
    }));
  }
  ngOnChanges(changes) {
    const selected_items = this.selected_items();
    if (changes.selected_items && selected_items?.length) {
      const counts = {};
      for (const item of selected_items) {
        counts[item.id] = item.quantity;
      }
      this.counts.next(counts);
    }
    if (changes.requested) {
      this._requested_items.next(this.requested());
    }
  }
  isFavourite(asset_id) {
    return this.favorites().includes(asset_id);
  }
  selectAsset(asset) {
    this.onSelect.emit(asset);
  }
};
_NewAssetListComponent.\u0275fac = function NewAssetListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewAssetListComponent)();
};
_NewAssetListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewAssetListComponent, selectors: [["new-asset-list"]], inputs: { selected: [1, "selected"], favorites: [1, "favorites"], selected_items: [1, "selected_items"], requested: [1, "requested"] }, outputs: { toggleFav: "toggleFav", onSelect: "onSelect" }, features: [\u0275\u0275NgOnChangesFeature], decls: 11, vars: 17, consts: [[1, "px-2", "font-bold"], ["count", "", 1, "mb-4", "px-2", "text-sm", "opacity-60"], ["loading", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [1, "list-style-none", "space-y-2"], ["empty", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], ["asset", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "relative", "w-full", "rounded-lg", "border", "p-2", "shadow-sm"], ["select", "", 1, "flex", "h-full", "w-full", "items-center", "pr-10", 3, "click"], [1, "border-base-200", "bg-base-200", "relative", "mr-4", "flex", "h-16", "w-16", "items-center", "justify-center", "overflow-hidden", "rounded-xl", "border"], [1, "border-base-300", "bg-base-200", "absolute", "top-1", "left-1", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "border"], ["auth", "", 1, "h-full", "object-cover", 3, "source"], ["src", "assets/icons/asset-placeholder.svg", 1, "m-auto"], [1, "flex-1", "space-y-2", "text-left"], [1, "flex", "items-center", "justify-between", "font-medium"], [1, "text-xs", "opacity-60"], [1, "flex", "items-center", "space-x-2", "text-sm"], ["icon", "", "matRipple", "", "fav", "", 1, "absolute", "top-1", "right-1", 3, "click"], [3, "className"], [1, "text-xs"], [1, "text-center", "opacity-30"], [3, "diameter"], [1, "opacity-30"]], template: function NewAssetListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 1);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, NewAssetListComponent_Conditional_8_Template, 3, 3);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275conditionalBranchCreate(10, NewAssetListComponent_Conditional_10_Template, 5, 4, "div", 2);
  }
  if (rf & 2) {
    let tmp_1_0;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "COMMON.RESULTS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(7, 9, "COMMON.RESULTS_COUNT", \u0275\u0275pureFunction1(15, _c0, ((tmp_1_0 = \u0275\u0275pipeBind1(5, 5, ctx.assets)) == null ? null : tmp_1_0.length) || 0), ((tmp_1_0 = \u0275\u0275pipeBind1(6, 7, ctx.assets)) == null ? null : tmp_1_0.length) || 0), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(9, 13, ctx.loading) ? 8 : 10);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatRippleModule,
  MatRipple,
  TranslatePipe,
  IconComponent,
  AuthenticatedImageDirective
], encapsulation: 2 });
var NewAssetListComponent = _NewAssetListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewAssetListComponent, [{
    type: Component,
    args: [{ selector: "new-asset-list", template: `
        <h3 class="px-2 font-bold">{{ 'COMMON.RESULTS' | translate }}</h3>
        <p count class="mb-4 px-2 text-sm opacity-60">
            {{
                'COMMON.RESULTS_COUNT'
                    | translate
                        : { count: (assets | async)?.length || 0 }
                        : (assets | async)?.length || 0
            }}
        </p>
        @if (!(loading | async)) {
            @if ((assets | async)?.length) {
                <ul class="list-style-none space-y-2">
                    @for (asset of assets | async; track asset) {
                        <li
                            asset
                            matRipple
                            class="border-base-200 bg-base-100 relative w-full rounded-lg border p-2 shadow-sm"
                        >
                            <button
                                select
                                class="flex h-full w-full items-center pr-10"
                                (click)="selectAsset(asset)"
                            >
                                <div
                                    class="border-base-200 bg-base-200 relative mr-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border"
                                >
                                    @if (selected().includes(asset.id)) {
                                        <div
                                            class="border-base-300 bg-base-200 absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border"
                                        >
                                            <span class="text-xs">
                                                {{ asset.quantity || 1 }}
                                            </span>
                                        </div>
                                    }
                                    @if (asset.images?.length) {
                                        <img
                                            auth
                                            class="h-full object-cover"
                                            [source]="asset.images[0]"
                                        />
                                    } @else {
                                        <img
                                            class="m-auto"
                                            src="assets/icons/asset-placeholder.svg"
                                        />
                                    }
                                </div>
                                <div class="flex-1 space-y-2 text-left">
                                    <div
                                        class="flex items-center justify-between font-medium"
                                    >
                                        <div>{{ asset.name || 'Asset' }}</div>
                                        <div class="text-xs opacity-60">
                                            {{ asset.category }}
                                        </div>
                                    </div>
                                    <div
                                        class="flex items-center space-x-2 text-sm"
                                    >
                                        <p>
                                            {{
                                                'BOOKINGS.ASSETS_AVAILABLE'
                                                    | translate
                                                        : {
                                                              count:
                                                                  asset.available ||
                                                                  asset.assets
                                                                      ?.length ||
                                                                  '0',
                                                          }
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
                                [class.text-info]="isFavourite(asset.id)"
                                (click)="toggleFav.emit(asset)"
                            >
                                <icon
                                    [className]="
                                        isFavourite(asset.id)
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
                        {{ 'BOOKINGS.ASSETS_EMPTY' | translate }}
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
                    {{ 'BOOKINGS.ASSETS_LOADING' | translate }}
                </p>
            </div>
        }
    `, imports: [
      CommonModule,
      MatProgressSpinnerModule,
      MatRippleModule,
      TranslatePipe,
      IconComponent,
      AuthenticatedImageDirective
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewAssetListComponent, { className: "NewAssetListComponent", filePath: "libs/assets/src/lib/new-asset-select-modal/new-asset-list.component.ts", lineNumber: 145 });
})();

// libs/assets/src/lib/new-asset-select-modal/new-asset-select-modal.component.ts
function NewAssetSelectModalComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function NewAssetSelectModalComponent_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show_filters = !ctx_r1.show_filters);
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.show_filters ? "close" : "filter_list");
  }
}
var EMPTY_FAVS = [];
var _NewAssetSelectModalComponent = class _NewAssetSelectModalComponent {
  get is_safari() {
    return isMobileSafari();
  }
  get favorites() {
    return this._settings.get("favourite_assets") || EMPTY_FAVS;
  }
  get selected_ids() {
    return this.selected.map((_) => _.id).join(",");
  }
  get count() {
    return this.selected.reduce((t, i) => t + i.quantity, 0);
  }
  isSelected(id) {
    return id && this.selected_ids.includes(id);
  }
  constructor() {
    this._settings = inject(SettingsService);
    this._state = inject(AssetStateService);
    this._data = inject(MAT_DIALOG_DATA);
    this.show_filters = false;
    this.displayed = null;
    this.selected = [...this._data.items || []];
    this.exact_time = this._data.exact_time ?? false;
    this.requested = this._data.requested;
    const { duration } = this._data.details;
    this._state.setOptions(this._data.details);
    this.offset = Math.min(Math.max(this._settings.get("app.assets.min_offset"), this._data.offset || 0), (duration || 60) - this._settings.get("app.assets.end_offset"));
    this.offset_day = this._data.offset_day || 0;
  }
  setSelected(group, state) {
    const list = this.selected.filter((_) => _.id !== group.id);
    if (state)
      list.push(group);
    this.selected = [...list];
  }
  updateSelectedCount(count) {
    if (!this.displayed)
      return;
    const item = this.selected.find((_) => _.id === this.displayed.id);
    if (item) {
      item.quantity = count;
      item.assets = this.displayed.assets;
    }
  }
  toggleFavourite(asset) {
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(asset.id);
    if (new_state) {
      this._settings.saveUserSetting("favourite_assets", [
        ...fav_list,
        asset.id
      ]);
    } else {
      this._settings.saveUserSetting("favourite_assets", fav_list.filter((_) => _ !== asset.id));
    }
  }
};
_NewAssetSelectModalComponent.\u0275fac = function NewAssetSelectModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewAssetSelectModalComponent)();
};
_NewAssetSelectModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewAssetSelectModalComponent, selectors: [["new-asset-select-modal"]], decls: 32, vars: 38, consts: [[1, "bg-base-100", "flex", "h-screen", "w-screen", "flex-col", "space-y-2", "overflow-hidden", "p-2", "sm:h-auto", "sm:w-auto"], [1, "bg-base-200", "flex", "h-14", "w-full", "items-center", "space-x-2", "rounded-sm", "border-none", "p-2"], [1, "flex-1", "px-2", "text-xl", "font-medium", "capitalize"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "relative", "flex", "h-1/2", "flex-1", "sm:h-[65vh]", "sm:flex-none", "sm:space-x-2"], [1, "border-base-300", "h-full", "w-full", "overflow-x-hidden", "overflow-y-auto", "rounded-sm", "border", "shadow-sm", "sm:block", "sm:w-[20rem]"], [1, "border-base-300", "bg-base-200", "h-full", "w-full", "overflow-auto", "rounded-sm", "border", "p-2", "sm:w-[20rem]", "lg:block"], [3, "toggleFav", "onSelect", "selected", "favorites", "selected_items", "requested"], [1, "border-base-300", "h-full", "w-full", "overflow-auto", "rounded-sm", "border", "shadow-sm", "sm:w-[20rem]", "lg:block"], [3, "activeChange", "toggleFav", "close", "item", "active", "fav"], ["icon", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "absolute", "top-3", "right-2", "z-20", "border", "sm:hidden"], [1, "bg-base-200", "flex", "w-full", "items-center", "justify-between", "space-x-2", "rounded-sm", "border-none", "p-2"], ["btn", "", "matRipple", "", "name", "asset-return", 1, "inverse", "bg-base-100", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], [1, "pr-2"], ["btn", "", "matRipple", "", "name", "toggle-asset", 3, "click", "disabled"], [1, "flex", "items-center"], [1, "mr-1"], ["icon", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "absolute", "top-3", "right-2", "z-20", "border", "sm:hidden", 3, "click"]], template: function NewAssetSelectModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 3)(6, "icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "main", 4)(9, "div", 5);
    \u0275\u0275element(10, "new-asset-filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 6);
    \u0275\u0275element(12, "new-asset-filters-display");
    \u0275\u0275elementStart(13, "new-asset-list", 7);
    \u0275\u0275listener("toggleFav", function NewAssetSelectModalComponent_Template_new_asset_list_toggleFav_13_listener($event) {
      return ctx.toggleFavourite($event);
    })("onSelect", function NewAssetSelectModalComponent_Template_new_asset_list_onSelect_13_listener($event) {
      return ctx.displayed = $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 8)(15, "new-asset-details", 9);
    \u0275\u0275listener("activeChange", function NewAssetSelectModalComponent_Template_new_asset_details_activeChange_15_listener($event) {
      return ctx.setSelected(ctx.displayed, $event);
    })("toggleFav", function NewAssetSelectModalComponent_Template_new_asset_details_toggleFav_15_listener() {
      return ctx.toggleFavourite(ctx.displayed);
    })("close", function NewAssetSelectModalComponent_Template_new_asset_details_close_15_listener() {
      return ctx.displayed = null;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(16, NewAssetSelectModalComponent_Conditional_16_Template, 3, 1, "button", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "footer", 11)(18, "button", 12)(19, "div", 13)(20, "icon", 14);
    \u0275\u0275text(21, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 15);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "button", 16);
    \u0275\u0275listener("click", function NewAssetSelectModalComponent_Template_button_click_25_listener() {
      return ctx.setSelected(ctx.displayed, !ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id));
    });
    \u0275\u0275elementStart(26, "div", 17)(27, "icon", 14);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 18);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275styleProp("height", ctx.is_safari ? "calc(100vh - 80px)" : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 32, "BOOKINGS.ASSETS_ADD_HEADER"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("hidden", !ctx.show_filters);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("hidden", ctx.show_filters || ctx.displayed)("sm:hidden", ctx.displayed)("md:block", !ctx.displayed);
    \u0275\u0275advance(2);
    \u0275\u0275property("selected", ctx.selected_ids)("favorites", ctx.favorites)("selected_items", ctx.selected)("requested", ctx.requested);
    \u0275\u0275advance();
    \u0275\u0275classProp("hidden", ctx.show_filters || !ctx.displayed)("sm:hidden", !ctx.displayed)("md:block", ctx.displayed);
    \u0275\u0275advance();
    \u0275\u0275property("item", ctx.displayed)("active", ctx.selected_ids.includes(ctx.displayed == null ? null : ctx.displayed.id))("fav", ctx.displayed && ctx.favorites.includes(ctx.displayed == null ? null : ctx.displayed.id));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.displayed ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("mat-dialog-close", ctx.selected);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 34, "COMMON.BACK_TO_FORM"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id));
    \u0275\u0275property("disabled", !ctx.displayed);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "remove" : "add");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 36, ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "COMMON.REMOVE_FROM" : "COMMON.ADD_TO"), " ");
  }
}, dependencies: [
  TranslatePipe,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatDialogModule,
  MatDialogClose,
  MatTooltipModule,
  NewAssetListComponent,
  NewAssetDetailsComponent,
  NewAssetFiltersComponent,
  NewAssetFiltersDisplayComponent
], encapsulation: 2 });
var NewAssetSelectModalComponent = _NewAssetSelectModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewAssetSelectModalComponent, [{
    type: Component,
    args: [{ selector: "new-asset-select-modal", template: `
        <div
            class="bg-base-100 flex h-screen w-screen flex-col space-y-2 overflow-hidden p-2 sm:h-auto sm:w-auto"
            [style.height]="is_safari ? 'calc(100vh - 80px)' : ''"
        >
            <header
                class="bg-base-200 flex h-14 w-full items-center space-x-2 rounded-sm border-none p-2"
            >
                <h2 class="flex-1 px-2 text-xl font-medium capitalize">
                    {{ 'BOOKINGS.ASSETS_ADD_HEADER' | translate }}
                </h2>
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </header>
            <main
                class="relative flex h-1/2 flex-1 sm:h-[65vh] sm:flex-none sm:space-x-2"
            >
                <div
                    class="border-base-300 h-full w-full overflow-x-hidden overflow-y-auto rounded-sm border shadow-sm sm:block sm:w-[20rem]"
                    [class.hidden]="!show_filters"
                >
                    <new-asset-filters></new-asset-filters>
                </div>
                <div
                    class="border-base-300 bg-base-200 h-full w-full overflow-auto rounded-sm border p-2 sm:w-[20rem] lg:block"
                    [class.hidden]="show_filters || displayed"
                    [class.sm:hidden]="displayed"
                    [class.md:block]="!displayed"
                >
                    <new-asset-filters-display></new-asset-filters-display>
                    <new-asset-list
                        [selected]="selected_ids"
                        [favorites]="favorites"
                        [selected_items]="selected"
                        [requested]="requested"
                        (toggleFav)="toggleFavourite($event)"
                        (onSelect)="displayed = $event"
                    ></new-asset-list>
                </div>
                <div
                    class="border-base-300 h-full w-full overflow-auto rounded-sm border shadow-sm sm:w-[20rem] lg:block"
                    [class.hidden]="show_filters || !displayed"
                    [class.sm:hidden]="!displayed"
                    [class.md:block]="displayed"
                >
                    <new-asset-details
                        [item]="displayed"
                        [active]="selected_ids.includes(displayed?.id)"
                        (activeChange)="setSelected(displayed, $event)"
                        [fav]="
                            displayed && this.favorites.includes(displayed?.id)
                        "
                        (toggleFav)="toggleFavourite(displayed)"
                        (close)="displayed = null"
                    ></new-asset-details>
                </div>
                @if (!displayed) {
                    <button
                        icon
                        matRipple
                        class="border-base-200 bg-base-100 absolute top-3 right-2 z-20 border sm:hidden"
                        (click)="show_filters = !show_filters"
                    >
                        <icon>{{
                            show_filters ? 'close' : 'filter_list'
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
                    name="asset-return"
                    [mat-dialog-close]="selected"
                    class="inverse bg-base-100 text-secondary"
                >
                    <div class="flex items-center space-x-2">
                        <icon class="text-xl">arrow_back</icon>
                        <div class="pr-2">
                            {{ 'COMMON.BACK_TO_FORM' | translate }}
                        </div>
                    </div>
                </button>
                <button
                    btn
                    matRipple
                    name="toggle-asset"
                    [disabled]="!displayed"
                    [class.inverse]="isSelected(displayed?.id)"
                    (click)="setSelected(displayed, !isSelected(displayed?.id))"
                >
                    <div class="flex items-center">
                        <icon class="text-xl">{{
                            isSelected(displayed?.id) ? 'remove' : 'add'
                        }}</icon>
                        <div class="mr-1">
                            {{
                                (isSelected(displayed?.id)
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
      NewAssetListComponent,
      NewAssetDetailsComponent,
      NewAssetFiltersComponent,
      NewAssetFiltersDisplayComponent
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewAssetSelectModalComponent, { className: "NewAssetSelectModalComponent", filePath: "libs/assets/src/lib/new-asset-select-modal/new-asset-select-modal.component.ts", lineNumber: 144 });
})();

// libs/assets/src/lib/asset-list-field.component.ts
var _c02 = (a0, a1) => ({ date: a0, time: a1 });
function AssetListFieldComponent_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "icon");
    \u0275\u0275text(2, "priority_high");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const request_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r2.err_tooltip(request_r2));
  }
}
function AssetListFieldComponent_For_2_For_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 10);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function AssetListFieldComponent_For_2_For_28_Template_button_click_5_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const request_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeRequestItem(request_r2, item_r5));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 15);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function AssetListFieldComponent_For_2_For_28_Template_button_click_9_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleFavourite(item_r5));
    });
    \u0275\u0275elementStart(11, "icon", 16);
    \u0275\u0275text(12, "favorite");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r5.name || "Item", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" x", item_r5.quantity, " ");
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 7, "FORM.ASSETS_REMOVE_ITEM"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-info", ctx_r2.favorites.includes(item_r5.id));
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(10, 9, ctx_r2.favorites.includes(item_r5.id) ? "COMMON.FAVOURITES_REMOVE" : "COMMON.FAVOURITES_ADD"));
    \u0275\u0275advance(2);
    \u0275\u0275property("className", ctx_r2.favorites.includes(item_r5.id) ? "material-symbols-rounded" : "material-symbols-outlined");
  }
}
function AssetListFieldComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, AssetListFieldComponent_For_2_Conditional_9_Template, 3, 1, "div", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 9);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("click", function AssetListFieldComponent_For_2_Template_button_click_10_listener() {
      const request_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.duplicateRequest(request_r2));
    });
    \u0275\u0275elementStart(12, "icon");
    \u0275\u0275text(13, "content_copy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 9);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275listener("click", function AssetListFieldComponent_For_2_Template_button_click_14_listener() {
      const request_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editRequest(request_r2));
    });
    \u0275\u0275elementStart(16, "icon");
    \u0275\u0275text(17, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 10);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275listener("click", function AssetListFieldComponent_For_2_Template_button_click_18_listener() {
      const request_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeRequest(request_r2));
    });
    \u0275\u0275elementStart(20, "icon");
    \u0275\u0275text(21, "delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "button", 9);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275listener("click", function AssetListFieldComponent_For_2_Template_button_click_22_listener() {
      const request_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.show_request[request_r2.id] = !ctx_r2.show_request[request_r2.id]);
    });
    \u0275\u0275elementStart(24, "icon");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 11);
    \u0275\u0275repeaterCreate(27, AssetListFieldComponent_For_2_For_28_Template, 13, 11, "div", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const request_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("border-error", ctx_r2.end_time < request_r2.deliver_at)("border-base-300", ctx_r2.end_time >= request_r2.deliver_at);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 18, "FORM.ASSETS_REQUESTED_FOR_DATE", \u0275\u0275pureFunction2(29, _c02, \u0275\u0275pipeBind2(6, 12, request_r2.deliver_at_time, "mediumDate"), \u0275\u0275pipeBind2(7, 15, request_r2.deliver_at_time, ctx_r2.time_format))), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.end_time <= request_r2.deliver_at || ctx_r2.rejected_ids().includes(request_r2.id) || request_r2.conflict ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(11, 21, "FORM.ASSETS_DUPLICATE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(15, 23, "FORM.ASSETS_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(19, 25, "FORM.ASSETS_REMOVE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(23, 27, ctx_r2.show_request[request_r2.id] ? "FORM.ASSETS_HIDE" : "FORM.ASSETS_SHOW"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.show_request[request_r2.id] ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx_r2.show_request[request_r2.id] ? "show" : "hide");
    \u0275\u0275advance();
    \u0275\u0275repeater(request_r2.items);
  }
}
var EMPTY_FAVS2 = [];
var _AssetListFieldComponent = class _AssetListFieldComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this._state = inject(AssetStateService);
    this.options = input({});
    this.rejected_ids = input([]);
    this.asset_requests = [];
    this.disabled = false;
    this.show_request = {};
    this.selected = [];
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (s) => this.disabled = s;
  }
  err_tooltip(request) {
    return this.rejected_ids().includes(request.id) || request.conflict ? i18n("FORM.ASSETS_CLASH_ERROR") : i18n("FORM.ASSETS_TIME_ERROR");
  }
  get favorites() {
    return this._settings.get("favourite_assets") || EMPTY_FAVS2;
  }
  get end_time() {
    const time = (this.options().date || Date.now()) + (this.options().duration || 30) * 60 * 1e3;
    return this.options().all_day ? endOfDay(time).valueOf() : time;
  }
  get time_format() {
    return this._settings.time_format || "shortTime";
  }
  ngOnChanges(changes) {
    if (changes.options) {
      this.asset_requests = (this.asset_requests || []).map((_) => new AssetRequest(__spreadProps(__spreadValues({}, _), { event: this.options() })));
      this._state.setOptions({
        date: this.options().date,
        duration: this.options().duration
      });
    }
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.asset_requests = new_value;
    if (this._onChange)
      this._onChange(this.asset_requests);
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.asset_requests = (value || []).map((_) => new AssetRequest(__spreadProps(__spreadValues({}, _), {
      event: this.options(),
      state: _.state
    })));
  }
  editRequest(order = new AssetRequest()) {
    const order_list = this.asset_requests.filter((_) => _.id !== order.id);
    const requested = {};
    for (const order2 of order_list) {
      for (const item of order2.items) {
        requested[item.id] = (requested[item.id] || 0) + item?.quantity || 0;
      }
    }
    const options = this.options();
    const optionsValue = this.options();
    const ref = this._dialog.open(NewAssetSelectModalComponent, {
      data: {
        items: order.items,
        details: __spreadProps(__spreadValues({}, this.options()), {
          date: options.all_day ? startOfDay(options.date).valueOf() : options.date,
          duration: optionsValue.all_day ? Math.max(24 * 60, optionsValue.duration) : optionsValue.duration
        }),
        exact_time: !!order.deliver_time,
        offset: order.deliver_offset,
        offset_day: order.deliver_day_offset,
        requested
      }
    });
    ref.afterClosed().subscribe((items) => {
      const orders = this.asset_requests.filter((_) => _.id !== order.id);
      if (!items?.length)
        return;
      for (const item of items) {
        if (item.assets?.length) {
          const list = [];
          item.item_ids = new Array(item.quantity).fill(0).map((_) => {
            let id = "";
            let count = 0;
            while ((!id || list.includes(id)) && count < item.assets.length) {
              id = item.assets[randomInt(item.assets.length)].id;
            }
            list.push(id);
            return id;
          });
        }
      }
      const time = new Date(this.options().date);
      const new_order = new AssetRequest(__spreadProps(__spreadValues({}, order), {
        conflict: false,
        _changed: order._changed || order.items.find((_) => items.find((__) => __.id === _.id)?.quantity !== _.quantity),
        items: items.map((_) => __spreadValues({}, _)),
        event: this.options(),
        deliver_offset: ref.componentInstance.offset,
        deliver_time: ref.componentInstance.exact_time ? time.getHours() + time.getMinutes() / 60 : null,
        deliver_day_offset: ref.componentInstance.offset_day || 0
      }));
      for (const item of new_order.items) {
        const total = orders.reduce((t, c) => t += c.items.find((_) => _.id === item.id)?.quantity || 0, 0);
        if (total + item.quantity > item.assets.length) {
          notifyError(i18n("FORM.ASSETS_QUANTITY_ERROR", { name: item.name }), void 0, void 0, { duration: 5e3 });
          return;
        }
      }
      if (new_order.item_count <= 0)
        return;
      this.setValue([...orders, new_order]);
    });
  }
  removeRequest(request) {
    const updated_list = this.asset_requests.filter((_) => _.id !== request.id);
    this.setValue(updated_list);
  }
  duplicateRequest(order) {
    const new_order = new AssetRequest(__spreadProps(__spreadValues({}, order), {
      id: `order-${randomString(8)}`
    }));
    this.setValue([...this.asset_requests, new_order]);
  }
  removeRequestItem(order, item) {
    const new_order = new AssetRequest(__spreadProps(__spreadValues({}, order), {
      items: order.items.filter((_) => _.id !== item.id)
    }));
    const updated_list = this.asset_requests.filter((_) => _.id !== order.id);
    if (new_order.items.length > 0) {
      this.setValue([...updated_list, new_order]);
    } else
      this.setValue(updated_list);
  }
  toggleFavourite(asset) {
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(asset.id);
    if (new_state) {
      this._settings.saveUserSetting("favourite_assets", [
        ...fav_list,
        asset.id
      ]);
    } else {
      this._settings.saveUserSetting("favourite_assets", fav_list.filter((_) => _ !== asset.id));
    }
  }
};
_AssetListFieldComponent.\u0275fac = function AssetListFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssetListFieldComponent)();
};
_AssetListFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetListFieldComponent, selectors: [["asset-list-field"]], inputs: { options: [1, "options"], rejected_ids: [1, "rejected_ids"] }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    /* istanbul ignore next */
    useExisting: forwardRef(() => _AssetListFieldComponent),
    multi: true
  }
]), \u0275\u0275NgOnChangesFeature], decls: 10, vars: 4, consts: [["list", "", 1, "space-y-2"], ["request", "", 1, "bg-base-100", "overflow-hidden", "rounded-xl", "border", "shadow-sm", 3, "border-error", "border-base-300"], ["btn", "", "matRipple", "", "add-space", "", 1, "inverse", "mt-2", "w-full", 3, "click", "disabled"], [1, "flex", "items-center", "justify-center", "space-x-2"], ["request", "", 1, "bg-base-100", "overflow-hidden", "rounded-xl", "border", "shadow-sm"], [1, "flex", "items-center", "space-x-2", "p-4"], [1, "flex-1"], [1, "flex", "items-center", "space-x-4"], [1, "bg-error", "text-error-content", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", 3, "matTooltip"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "text-error", 3, "click", "matTooltip"], [1, "divide-base-100", "bg-base-200", "flex", "flex-col", "divide-y"], [1, "flex", "items-center", "space-x-2", "px-4", "py-1", "hover:opacity-90"], [1, "flex", "flex-1", "items-center"], [1, "bg-success", "text-success-content", "rounded-sm", "px-2", "py-1", "text-xs"], ["icon", "", "matRipple", "", "name", "toggle-catering-item-favourite", 3, "click", "matTooltip"], [3, "className"]], template: function AssetListFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, AssetListFieldComponent_For_2_Template, 29, 32, "div", 1, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 2);
    \u0275\u0275listener("click", function AssetListFieldComponent_Template_button_click_3_listener() {
      return ctx.editRequest();
    });
    \u0275\u0275elementStart(4, "div", 3)(5, "icon");
    \u0275\u0275text(6, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.asset_requests);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.disabled);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 2, "FORM.ASSETS_ADD"));
  }
}, dependencies: [
  CommonModule,
  DatePipe,
  IconComponent,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  MatTooltipModule,
  MatTooltip,
  MatDialogModule
], encapsulation: 2, data: { animation: [ANIMATION_SHOW_CONTRACT_EXPAND] } });
var AssetListFieldComponent = _AssetListFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetListFieldComponent, [{
    type: Component,
    args: [{ selector: `asset-list-field`, template: `
        <div list class="space-y-2">
            @for (request of asset_requests; track request) {
                <div
                    request
                    class="bg-base-100 overflow-hidden rounded-xl border shadow-sm"
                    [class.border-error]="end_time < request.deliver_at"
                    [class.border-base-300]="end_time >= request.deliver_at"
                >
                    <div class="flex items-center space-x-2 p-4">
                        <div class="flex-1">
                            <div class="flex items-center space-x-4">
                                <div>
                                    {{
                                        'FORM.ASSETS_REQUESTED_FOR_DATE'
                                            | translate
                                                : {
                                                      date:
                                                          request.deliver_at_time
                                                          | date: 'mediumDate',
                                                      time:
                                                          request.deliver_at_time
                                                          | date: time_format,
                                                  }
                                    }}
                                </div>
                                @if (
                                    end_time <= request.deliver_at ||
                                    rejected_ids().includes(request.id) ||
                                    request.conflict
                                ) {
                                    <div
                                        class="bg-error text-error-content flex h-6 w-6 items-center justify-center rounded-full"
                                        [matTooltip]="err_tooltip(request)"
                                    >
                                        <icon>priority_high</icon>
                                    </div>
                                }
                            </div>
                        </div>
                        <button
                            icon
                            matRipple
                            [matTooltip]="'FORM.ASSETS_DUPLICATE' | translate"
                            (click)="duplicateRequest(request)"
                        >
                            <icon>content_copy</icon>
                        </button>
                        <button
                            icon
                            matRipple
                            [matTooltip]="'FORM.ASSETS_EDIT' | translate"
                            (click)="editRequest(request)"
                        >
                            <icon>edit</icon>
                        </button>
                        <button
                            icon
                            matRipple
                            [matTooltip]="'FORM.ASSETS_REMOVE' | translate"
                            class="text-error"
                            (click)="removeRequest(request)"
                        >
                            <icon>delete</icon>
                        </button>
                        <button
                            icon
                            matRipple
                            [matTooltip]="
                                (show_request[request.id]
                                    ? 'FORM.ASSETS_HIDE'
                                    : 'FORM.ASSETS_SHOW'
                                ) | translate
                            "
                            (click)="
                                show_request[request.id] =
                                    !show_request[request.id]
                            "
                        >
                            <icon>
                                {{
                                    show_request[request.id]
                                        ? 'expand_less'
                                        : 'expand_more'
                                }}
                            </icon>
                        </button>
                    </div>
                    <div
                        class="divide-base-100 bg-base-200 flex flex-col divide-y"
                        [@show]="show_request[request.id] ? 'show' : 'hide'"
                    >
                        @for (item of request.items; track item) {
                            <div
                                class="flex items-center space-x-2 px-4 py-1 hover:opacity-90"
                            >
                                <div class="flex flex-1 items-center">
                                    {{ item.name || 'Item' }}
                                </div>
                                <div
                                    class="bg-success text-success-content rounded-sm px-2 py-1 text-xs"
                                >
                                    x{{ item.quantity }}
                                </div>
                                <button
                                    icon
                                    matRipple
                                    [matTooltip]="
                                        'FORM.ASSETS_REMOVE_ITEM' | translate
                                    "
                                    class="text-error"
                                    (click)="removeRequestItem(request, item)"
                                >
                                    <icon>delete</icon>
                                </button>
                                <button
                                    icon
                                    matRipple
                                    name="toggle-catering-item-favourite"
                                    [matTooltip]="
                                        (favorites.includes(item.id)
                                            ? 'COMMON.FAVOURITES_REMOVE'
                                            : 'COMMON.FAVOURITES_ADD'
                                        ) | translate
                                    "
                                    [class.text-info]="
                                        favorites.includes(item.id)
                                    "
                                    (click)="toggleFavourite(item)"
                                >
                                    <icon
                                        [className]="
                                            favorites.includes(item.id)
                                                ? 'material-symbols-rounded'
                                                : 'material-symbols-outlined'
                                        "
                                        >favorite</icon
                                    >
                                </button>
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
        <button
            btn
            matRipple
            add-space
            class="inverse mt-2 w-full"
            [disabled]="disabled"
            (click)="editRequest()"
        >
            <div class="flex items-center justify-center space-x-2">
                <icon>search</icon>
                <span>{{ 'FORM.ASSETS_ADD' | translate }}</span>
            </div>
        </button>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => AssetListFieldComponent),
        multi: true
      }
    ], animations: [ANIMATION_SHOW_CONTRACT_EXPAND], imports: [
      CommonModule,
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatTooltipModule,
      MatDialogModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetListFieldComponent, { className: "AssetListFieldComponent", filePath: "libs/assets/src/lib/asset-list-field.component.ts", lineNumber: 212 });
})();

export {
  AssetListFieldComponent
};
//# sourceMappingURL=chunk-C3IO5ZSU.js.map
