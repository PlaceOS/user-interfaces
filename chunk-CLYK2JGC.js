import {
  ItemListFieldComponent,
  UserSearchFieldComponent
} from "./chunk-2TMQ6H3Q.js";
import {
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  Booking,
  BuildingLevel,
  CommonModule,
  Component,
  DefaultValueAccessor,
  Desk,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  IconComponent,
  Injectable,
  InteractiveMapComponent,
  MAP_FEATURE_DATA,
  MAT_DIALOG_DATA,
  MapsPeopleService,
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
  MatPrefix,
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
  ReactiveFormsModule,
  RecurrenceDays,
  SettingsService,
  SettingsToggleComponent,
  SlicePipe,
  Subject,
  TranslatePipe,
  Validators,
  Xu,
  __spreadProps,
  __spreadValues,
  addHours,
  approveBooking,
  catchError,
  checkinBooking,
  combineLatest,
  computed,
  debounceTime,
  distinctUntilChanged,
  ec,
  endOfDay,
  first,
  getUnixTime,
  i18n,
  inject,
  lastValueFrom,
  map,
  nextValueFrom,
  notifyError,
  notifyInfo,
  notifySuccess,
  of,
  openConfirmModal,
  output,
  outputToObservable,
  queryBookings,
  queryPagedBookings,
  randomInt,
  randomString,
  rc,
  rejectBooking,
  removeBooking,
  saveBooking,
  scan,
  set,
  setClassMetadata,
  shareReplay,
  showStaff,
  signal,
  startOfDay,
  switchMap,
  tap,
  toObservable,
  toSignal,
  unique,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-B2WI2KLR.js";

// apps/concierge/src/app/poi-manager/map-show-element.component.ts
var _MapShowElementComponent = class _MapShowElementComponent {
  constructor() {
    this._data = inject(MAP_FEATURE_DATA);
  }
  get hover() {
    return !!this._data?.hover;
  }
};
_MapShowElementComponent.\u0275fac = function MapShowElementComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MapShowElementComponent)();
};
_MapShowElementComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MapShowElementComponent, selectors: [["map-show-element"]], decls: 2, vars: 8, consts: [[1, "relative", "h-full", "w-full", "border-4"], [1, "absolute", "inset-0", "opacity-40"]], template: function MapShowElementComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275classProp("border-warning", ctx.hover)("border-success", !ctx.hover);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-warning", ctx.hover)("bg-success", !ctx.hover);
  }
}, encapsulation: 2 });
var MapShowElementComponent = _MapShowElementComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapShowElementComponent, [{
    type: Component,
    args: [{ selector: "map-show-element", template: `
        <div
            class="relative h-full w-full border-4"
            [class.border-warning]="hover"
            [class.border-success]="!hover"
        >
            <div
                class="absolute inset-0 opacity-40"
                [class.bg-warning]="hover"
                [class.bg-success]="!hover"
            ></div>
        </div>
    `, imports: [] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapShowElementComponent, { className: "MapShowElementComponent", filePath: "apps/concierge/src/app/poi-manager/map-show-element.component.ts", lineNumber: 22 });
})();

// apps/concierge/src/app/ui/select-map-item-modal.component.ts
var _c0 = () => ({ controls: true });
var _c1 = (a0) => ({ count: a0 });
function SelectMapItemModalComponent_For_16_Template(rf, ctx) {
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
function SelectMapItemModalComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.page * 100 + 1, " - ", ((tmp_1_0 = \u0275\u0275pipeBind1(2, 2, ctx_r1.search_results)) == null ? null : tmp_1_0.length) > ctx_r1.page * 100 + 100 ? ctx_r1.page * 100 + 100 : (tmp_1_0 = \u0275\u0275pipeBind1(3, 4, ctx_r1.search_results)) == null ? null : tmp_1_0.length, " ");
  }
}
function SelectMapItemModalComponent_Conditional_29_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const poi_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", poi_r4.location, " ");
  }
}
function SelectMapItemModalComponent_Conditional_29_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function SelectMapItemModalComponent_Conditional_29_For_1_Template_button_click_0_listener() {
      const poi_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selected.next(poi_r4.id));
    })("mouseover", function SelectMapItemModalComponent_Conditional_29_For_1_Template_button_mouseover_0_listener() {
      const poi_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.hovered.next(poi_r4.id));
    });
    \u0275\u0275elementStart(1, "div", 23)(2, "div", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, SelectMapItemModalComponent_Conditional_29_For_1_Conditional_4_Template, 2, 1, "div", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const poi_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-primary!", poi_r4.id === ctx_r1.selected.value)("text-primary-content!", poi_r4.id === ctx_r1.selected.value);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(poi_r4.name || poi_r4.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(poi_r4.location ? 4 : -1);
  }
}
function SelectMapItemModalComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SelectMapItemModalComponent_Conditional_29_For_1_Template, 5, 6, "button", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "slice");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(\u0275\u0275pipeBind3(3, 2, \u0275\u0275pipeBind1(2, 0, ctx_r1.search_results), ctx_r1.page * 100, ctx_r1.page * 100 + 100));
  }
}
function SelectMapItemModalComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "img", 26);
    \u0275\u0275elementStart(2, "div", 27);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.POI_MAP_SELECT_RESULTS_EMPTY"), " ");
  }
}
function SelectMapItemModalComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 28);
    \u0275\u0275listener("click", function SelectMapItemModalComponent_Conditional_32_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.page = ctx_r1.page - 1);
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 29);
    \u0275\u0275listener("click", function SelectMapItemModalComponent_Conditional_32_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.page = 0);
    });
    \u0275\u0275text(5, " 1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 30)(7, "icon");
    \u0275\u0275text(8, "more_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 31);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 30)(12, "icon");
    \u0275\u0275text(13, "more_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 32);
    \u0275\u0275listener("click", function SelectMapItemModalComponent_Conditional_32_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.page = ctx_r1.last_page);
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 28);
    \u0275\u0275listener("click", function SelectMapItemModalComponent_Conditional_32_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.page = ctx_r1.page + 1);
    });
    \u0275\u0275elementStart(17, "icon");
    \u0275\u0275text(18, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.page === 0);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-secondary!", ctx_r1.page === 0)("text-secondary-content", ctx_r1.page === 0)("rounded-full!", ctx_r1.page === 0);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("opacity-0", ctx_r1.page < 2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("opacity-0", ctx_r1.page == 0 || ctx_r1.page == ctx_r1.last_page);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.page + 1, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-0", ctx_r1.page > ctx_r1.last_page - 2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-secondary!", ctx_r1.page === ctx_r1.last_page)("text-secondary-content", ctx_r1.page === ctx_r1.last_page)("rounded-full!", ctx_r1.page === ctx_r1.last_page);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.last_page + 1, " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.page === ctx_r1.last_page);
  }
}
var _SelectMapItemModalComponent = class _SelectMapItemModalComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._data = inject(MAT_DIALOG_DATA);
    this._org = inject(OrganisationService);
    this._maps_people = inject(MapsPeopleService);
    this.level = new BuildingLevel();
    this.map_info = {};
    this.page = 0;
    this.last_page = 0;
    this.selected = new BehaviorSubject("");
    this.hovered = new BehaviorSubject("");
    this.search = new BehaviorSubject("");
    this.changed = new BehaviorSubject(0);
    this.level_list = this._org.active_levels;
    this.actions = [
      { id: "*", action: "click", callback: (e, p) => this.selectID(p || e) }
    ];
    this.features = combineLatest([
      this.selected,
      this.hovered
    ]).pipe(map(([s_id, h_id]) => unique([
      {
        location: s_id,
        content: MapShowElementComponent,
        full_size: true,
        no_scale: true
      },
      {
        location: h_id,
        content: MapShowElementComponent,
        data: { hover: true },
        full_size: true,
        no_scale: true
      }
    ].filter((_) => _.location), "location")));
    this.search_results = combineLatest([
      this.search,
      this._maps_people.available$,
      this.changed
    ]).pipe(debounceTime(300), switchMap(([q, available]) => {
      return available ? q.length > 2 ? mapsindoors?.services.LocationsService.getLocations({
        q
      }).then((l) => {
        const list = l.map((i) => this.itemFromMapsIndoorsItem(i));
        if (this.selected_item) {
          list.unshift(this.itemFromMapsIndoorsItem(this.selected_item));
        }
        return list;
      }) : of(this.selected_item ? [
        this.itemFromMapsIndoorsItem(this.selected_item)
      ] : []) : of(Object.entries(this.map_info).map(([id, bbox]) => ({
        id,
        area: bbox.w * bbox.h
      })).filter(({ id, area }) => id.toLowerCase().includes(q.toLowerCase()) && area < 0.5).sort((a, b) => b.area - a.area));
    }), tap((l) => {
      this.page = 0;
      this.last_page = Math.floor(l.length / 100);
    }), shareReplay(1));
    this.setMapInfo = (info) => this.map_info = info;
  }
  itemFromMapsIndoorsItem(item) {
    return {
      id: item.properties.externalId || item.properties.roomId || item.id,
      name: item.properties.name,
      location: item.properties.building ? `${item.properties.building}, Level ${item.properties.floorName}` : "",
      area: Math.abs(item.geometry.bbox[0] - item.geometry.bbox[2]) * Math.abs(item.geometry.bbox[1] - item.geometry.bbox[3])
    };
  }
  async ngOnInit() {
    if (this._data?.location && typeof this._data.location === "string") {
      this.selected.next(this._data.location);
    }
    const levels = await nextValueFrom(this.level_list);
    if (levels.length) {
      let level = levels[0];
      if (this._data?.level_id) {
        level = levels.find((_) => _.id === this._data.level_id) || level;
      }
      this.level = level;
    }
  }
  onChange() {
    this.changed.next(Date.now());
  }
  selectID(e) {
    this.timeout("select_id", async () => {
      const use_maps_indoors = await nextValueFrom(this._maps_people.available$);
      if (!use_maps_indoors) {
        const pos = e;
        const short_list = [];
        for (const [id, bbox] of Object.entries(this.map_info)) {
          if (bbox.x <= pos.x && pos.x <= bbox.x + bbox.w && bbox.y <= pos.y && pos.y <= bbox.y + bbox.h) {
            short_list.push([id, bbox.h * bbox.w]);
          }
        }
        short_list.sort((a, b) => a[1] - b[1]);
        short_list.filter(([_, a]) => a <= 0.5);
        if (short_list.length) {
          this.selected.next(short_list[0][0]);
        }
      } else {
        const id = e.properties?.externalId || e.properties?.roomId || e.id;
        this.selected_item = e;
        if (id)
          this.selected.next(id);
        this.changed.next(Date.now());
      }
    });
  }
};
_SelectMapItemModalComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SelectMapItemModalComponent_BaseFactory;
  return function SelectMapItemModalComponent_Factory(__ngFactoryType__) {
    return (\u0275SelectMapItemModalComponent_BaseFactory || (\u0275SelectMapItemModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SelectMapItemModalComponent)))(__ngFactoryType__ || _SelectMapItemModalComponent);
  };
})();
_SelectMapItemModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectMapItemModalComponent, selectors: [["select-map-item-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 37, vars: 35, consts: [[1, "sticky", "top-0", "z-10", "mx-auto", "mt-2", "flex", "h-14", "w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-sm", "border-none", "bg-base-200", "px-4", "py-2"], [1, "text-xl", "font-medium", "capitalize"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "h-[75vh]", "max-h-[75vh]", "min-w-[80vw]", "max-w-[calc(100vw-2rem)]", "space-x-2", "overflow-hidden", "p-2", "sm:max-w-5xl"], ["map", "", 1, "relative", "h-full", "w-1/2", "flex-1", "rounded-lg", "bg-base-200"], [3, "mapInfo", "src", "actions", "features", "options", "focus"], ["poi-list", "", 1, "relative", "flex", "h-full", "w-[20rem]", "flex-col", "rounded-lg", "border", "border-base-300"], ["search", "", 1, "flex", "flex-col", "border-b", "border-base-200", "p-2"], ["appearance", "outline", 1, "no-subscript", "mb-2", "w-full"], ["name", "level", 3, "ngModelChange", "ngModel"], [3, "value"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", "name", "search", "placeholder", "Search", 3, "ngModelChange", "ngModel"], ["matPrefix", "", 1, "text-2xl"], ["list", "", 1, "flex", "h-1/2", "flex-1", "flex-col", "space-y-2", "overflow-auto", "px-2"], [1, "sticky", "top-0", "z-10", "w-full", "bg-base-100", "px-1", "py-3", "text-sm"], [1, "rounded-full", "border", "border-info", "bg-info-light", "px-2", "py-1", "text-xs"], [1, "flex", "h-full", "flex-1", "flex-col", "items-center", "justify-center", "space-y-4"], ["pagination", "", 1, "sticky", "bottom-0", "z-10", "-mx-2", "flex", "w-[calc(100%+1rem)]", "items-center", "justify-center", "space-x-1", "border-t", "border-base-300", "bg-base-100", "p-2"], ["actions", "", 1, "border-t", "border-base-200", "p-2"], ["btn", "", "matRipple", "", 1, "w-full", 3, "disabled", "mat-dialog-close"], ["btn", "", "matRipple", "", 1, "clear", "flex", "w-full", "items-center", "rounded-sm", "text-left", "hover:bg-base-200", 3, "bg-primary!", "text-primary-content!"], ["btn", "", "matRipple", "", 1, "clear", "flex", "w-full", "items-center", "rounded-sm", "text-left", "hover:bg-base-200", 3, "click", "mouseover"], [1, "flex", "w-full", "flex-col", "font-mono", "text-sm"], [1, ""], [1, "text-xs", "opacity-30"], ["src", "assets/icons/no-results.svg", 1, "w-36"], [1, "text-center", "opacity-30"], ["icon", "", "matRipple", "", 1, "rounded-sm", "border", "border-base-200", 3, "click", "disabled"], ["icon", "", "matRipple", "", 3, "click"], ["icon", ""], ["icon", "", "matRipple", "", 1, "bg-secondary!", "text-secondary-content"], ["icon", "", "matRipple", "", 1, "rounded-sm", "border", "border-base-200", 3, "click"]], template: function SelectMapItemModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 2)(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "main", 3)(8, "div", 4)(9, "interactive-map", 5);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275listener("mapInfo", function SelectMapItemModalComponent_Template_interactive_map_mapInfo_9_listener($event) {
      return ctx.setMapInfo($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 6)(12, "div", 7)(13, "mat-form-field", 8)(14, "mat-select", 9);
    \u0275\u0275twoWayListener("ngModelChange", function SelectMapItemModalComponent_Template_mat_select_ngModelChange_14_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.level, $event) || (ctx.level = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function SelectMapItemModalComponent_Template_mat_select_ngModelChange_14_listener() {
      return ctx.onChange();
    });
    \u0275\u0275repeaterCreate(15, SelectMapItemModalComponent_For_16_Template, 2, 2, "mat-option", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "mat-form-field", 11)(19, "input", 12);
    \u0275\u0275pipe(20, "async");
    \u0275\u0275listener("ngModelChange", function SelectMapItemModalComponent_Template_input_ngModelChange_19_listener($event) {
      return ctx.search.next($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "icon", 13);
    \u0275\u0275text(22, "search");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 14)(24, "div", 15);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "async");
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275conditionalCreate(28, SelectMapItemModalComponent_Conditional_28_Template, 4, 6, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(29, SelectMapItemModalComponent_Conditional_29_Template, 4, 6);
    \u0275\u0275pipe(30, "async");
    \u0275\u0275conditionalBranchCreate(31, SelectMapItemModalComponent_Conditional_31_Template, 5, 3, "div", 17);
    \u0275\u0275conditionalCreate(32, SelectMapItemModalComponent_Conditional_32_Template, 19, 22, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 19)(34, "button", 20);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_9_0;
    let tmp_11_0;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 15, "APP.CONCIERGE.POI_MAP_SELECT_HEADER"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275property("src", ctx.level == null ? null : ctx.level.map_id)("actions", ctx.actions)("features", \u0275\u0275pipeBind1(10, 17, ctx.features))("options", \u0275\u0275pureFunction0(32, _c0))("focus", ctx.selected.value);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.level);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(17, 19, ctx.level_list));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(20, 21, ctx.search));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(27, 25, "APP.CONCIERGE.POI_MAP_SELECT_RESULTS", \u0275\u0275pureFunction1(33, _c1, ((tmp_9_0 = \u0275\u0275pipeBind1(26, 23, ctx.search_results)) == null ? null : tmp_9_0.length) || 0)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.last_page ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_11_0 = \u0275\u0275pipeBind1(30, 28, ctx.search_results)) == null ? null : tmp_11_0.length) ? 29 : 31);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.last_page > 0 ? 32 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx.selected.value)("mat-dialog-close", ctx.selected.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 30, "COMMON.SAVE"), " ");
  }
}, dependencies: [
  MatDialogModule,
  MatDialogClose,
  MatRippleModule,
  MatRipple,
  IconComponent,
  TranslatePipe,
  CommonModule,
  AsyncPipe,
  SlicePipe,
  MatFormFieldModule,
  MatFormField,
  MatPrefix,
  MatInputModule,
  MatInput,
  MatSelectModule,
  MatSelect,
  MatOption,
  InteractiveMapComponent,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel
], encapsulation: 2 });
var SelectMapItemModalComponent = _SelectMapItemModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMapItemModalComponent, [{
    type: Component,
    args: [{ selector: "select-map-item-modal", template: `
        <header
            class="sticky top-0 z-10 mx-auto mt-2 flex h-14 w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none bg-base-200 px-4 py-2"
        >
            <h2 class="text-xl font-medium capitalize">
                {{ 'APP.CONCIERGE.POI_MAP_SELECT_HEADER' | translate }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main
            class="flex h-[75vh] max-h-[75vh] min-w-[80vw] max-w-[calc(100vw-2rem)] space-x-2 overflow-hidden p-2 sm:max-w-5xl"
        >
            <div
                map
                class="relative h-full w-1/2 flex-1 rounded-lg bg-base-200"
            >
                <interactive-map
                    [src]="level?.map_id"
                    [actions]="actions"
                    [features]="features | async"
                    [options]="{ controls: true }"
                    [focus]="selected.value"
                    (mapInfo)="setMapInfo($event)"
                ></interactive-map>
            </div>
            <div
                poi-list
                class="relative flex h-full w-[20rem] flex-col rounded-lg border border-base-300"
            >
                <div search class="flex flex-col border-b border-base-200 p-2">
                    <mat-form-field
                        class="no-subscript mb-2 w-full"
                        appearance="outline"
                    >
                        <mat-select
                            name="level"
                            [(ngModel)]="level"
                            (ngModelChange)="onChange()"
                        >
                            @for (lvl of level_list | async; track lvl) {
                                <mat-option [value]="lvl">
                                    {{ lvl.display_name || lvl.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    <mat-form-field
                        class="no-subscript w-full"
                        appearance="outline"
                    >
                        <input
                            matInput
                            name="search"
                            placeholder="Search"
                            [ngModel]="search | async"
                            (ngModelChange)="search.next($event)"
                        />
                        <icon matPrefix class="text-2xl">search</icon>
                    </mat-form-field>
                </div>
                <div
                    list
                    class="flex h-1/2 flex-1 flex-col space-y-2 overflow-auto px-2"
                >
                    <div
                        class="sticky top-0 z-10 w-full bg-base-100 px-1 py-3 text-sm"
                    >
                        {{
                            'APP.CONCIERGE.POI_MAP_SELECT_RESULTS'
                                | translate
                                    : {
                                          count:
                                              (search_results | async)
                                                  ?.length || 0,
                                      }
                        }}
                        @if (last_page) {
                            <span
                                class="rounded-full border border-info bg-info-light px-2 py-1 text-xs"
                            >
                                {{ page * 100 + 1 }} -
                                {{
                                    (search_results | async)?.length >
                                    page * 100 + 100
                                        ? page * 100 + 100
                                        : (search_results | async)?.length
                                }}
                            </span>
                        }
                    </div>
                    @if ((search_results | async)?.length) {
                        @for (
                            poi of search_results
                                | async
                                | slice: page * 100 : page * 100 + 100;
                            track poi
                        ) {
                            <button
                                btn
                                matRipple
                                class="clear flex w-full items-center rounded-sm text-left hover:bg-base-200"
                                [class.bg-primary!]="poi.id === selected.value"
                                [class.text-primary-content!]="
                                    poi.id === selected.value
                                "
                                (click)="selected.next(poi.id)"
                                (mouseover)="hovered.next(poi.id)"
                            >
                                <div
                                    class="flex w-full flex-col font-mono text-sm"
                                >
                                    <div class="">{{ poi.name || poi.id }}</div>
                                    @if (poi.location) {
                                        <div class="text-xs opacity-30">
                                            {{ poi.location }}
                                        </div>
                                    }
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
                                    'APP.CONCIERGE.POI_MAP_SELECT_RESULTS_EMPTY'
                                        | translate
                                }}
                            </div>
                        </div>
                    }
                    @if (last_page > 0) {
                        <div
                            pagination
                            class="sticky bottom-0 z-10 -mx-2 flex w-[calc(100%+1rem)] items-center justify-center space-x-1 border-t border-base-300 bg-base-100 p-2"
                        >
                            <button
                                icon
                                matRipple
                                class="rounded-sm border border-base-200"
                                [disabled]="page === 0"
                                (click)="page = page - 1"
                            >
                                <icon>chevron_left</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                [class.bg-secondary!]="page === 0"
                                [class.text-secondary-content]="page === 0"
                                [class.rounded-full!]="page === 0"
                                (click)="page = 0"
                            >
                                1
                            </button>
                            <button icon [class.opacity-0]="page < 2">
                                <icon>more_horiz</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                class="bg-secondary! text-secondary-content"
                                [class.opacity-0]="
                                    page == 0 || page == last_page
                                "
                            >
                                {{ page + 1 }}
                            </button>
                            <button
                                icon
                                [class.opacity-0]="page > last_page - 2"
                            >
                                <icon>more_horiz</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                class="rounded-sm border border-base-200"
                                [class.bg-secondary!]="page === last_page"
                                [class.text-secondary-content]="
                                    page === last_page
                                "
                                [class.rounded-full!]="page === last_page"
                                (click)="page = last_page"
                            >
                                {{ last_page + 1 }}
                            </button>
                            <button
                                icon
                                matRipple
                                class="rounded-sm border border-base-200"
                                [disabled]="page === last_page"
                                (click)="page = page + 1"
                            >
                                <icon>chevron_right</icon>
                            </button>
                        </div>
                    }
                </div>
                <div actions class="border-t border-base-200 p-2">
                    <button
                        btn
                        matRipple
                        [disabled]="!selected.value"
                        class="w-full"
                        [mat-dialog-close]="selected.value"
                    >
                        {{ 'COMMON.SAVE' | translate }}
                    </button>
                </div>
            </div>
        </main>
    `, imports: [
      MatDialogModule,
      MatRippleModule,
      IconComponent,
      TranslatePipe,
      CommonModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      InteractiveMapComponent,
      FormsModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectMapItemModalComponent, { className: "SelectMapItemModalComponent", filePath: "apps/concierge/src/app/ui/select-map-item-modal.component.ts", lineNumber: 268 });
})();

// apps/concierge/src/app/desks/desk-modal.component.ts
function DeskModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function DeskModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 4)(1, "div", 8)(2, "label", 9);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-form-field", 10);
    \u0275\u0275element(8, "input", 11);
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "div", 13)(14, "label", 14);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-form-field", 10);
    \u0275\u0275element(20, "input", 15);
    \u0275\u0275elementStart(21, "mat-error");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 13)(25, "label", 16);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 12)(31, "mat-form-field", 10);
    \u0275\u0275element(32, "input", 17);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementStart(34, "mat-error");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "button", 18);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275listener("click", function DeskModalComponent_Conditional_6_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectItemfromMap());
    });
    \u0275\u0275elementStart(39, "icon");
    \u0275\u0275text(40, "place");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(41, "label", 19);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 20);
    \u0275\u0275element(45, "a-user-search-field", 21);
    \u0275\u0275elementStart(46, "button", 22);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275listener("click", function DeskModalComponent_Conditional_6_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ assigned_user: null, assigned_to: null, assigned_name: null }));
    });
    \u0275\u0275elementStart(48, "icon", 23);
    \u0275\u0275text(49, " person_cancel ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div", 24);
    \u0275\u0275element(51, "settings-toggle", 25);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275element(53, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "label", 27);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(57, "item-list-field", 28);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementStart(59, "label", 27);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "item-list-field", 29);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementStart(64, "label", 27);
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "mat-form-field", 30);
    \u0275\u0275element(68, "textarea", 31);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "label", 32);
    \u0275\u0275text(71);
    \u0275\u0275pipe(72, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "mat-form-field", 10);
    \u0275\u0275element(74, "input", 33);
    \u0275\u0275pipe(75, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 20, "APP.CONCIERGE.DESKS_ID"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 22, "FORM.ID_REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 24, "APP.CONCIERGE.DESKS_NAME"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 26, "FORM.NAME_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 28, "EXPLORE.MAP_ID"));
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(33, 30, "APP.CONCIERGE.DESKS_MAP_ID_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 32, "EXPLORE.MAP_ID_REQUIRED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(38, 34, "APP.CONCIERGE.POI_MAP_SELECT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 36, "APP.CONCIERGE.USER_ASSIGNED"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(47, 38, "APP.CONCIERGE.USER_CLEAR"));
    \u0275\u0275advance(5);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(52, 40, "COMMON.BOOKABLE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 42, "COMMON.GROUPS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(58, 44, "BOOKINGS.GROUPS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 46, "COMMON.FEATURES"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(63, 48, "COMMON.FEATURES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(66, 50, "FORM.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(69, 52, "FORM.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(72, 54, "APP.CONCIERGE.DESKS_SECURITY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(75, 56, "APP.CONCIERGE.DESKS_SECURITY"));
  }
}
function DeskModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 5);
    \u0275\u0275element(1, "mat-spinner", 34);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.DESKS_SAVING"));
  }
}
var CHARS = "0123456789ABCDEF";
var _DeskModalComponent = class _DeskModalComponent {
  get id() {
    return this._data?.desk?.id || "";
  }
  get desk() {
    return this._data?.desk;
  }
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this.event = output();
    this.loading = signal(false);
    this.form = new FormGroup({
      id: new FormControl(``),
      name: new FormControl("", [Validators.required]),
      map_id: new FormControl("", [Validators.required]),
      groups: new FormControl([]),
      features: new FormControl([]),
      bookable: new FormControl(false),
      notes: new FormControl(""),
      assigned_user: new FormControl(null),
      assigned_to: new FormControl(""),
      assigned_name: new FormControl(""),
      security: new FormControl("")
    });
    const _data = this._data;
    if (_data?.desk)
      this.form.patchValue(_data.desk);
    if (!this.form.value.id) {
      this.form.patchValue({
        id: `desk-${randomString(3, CHARS)}_${randomString(5, CHARS)}`
      });
    }
  }
  async ngOnInit() {
    if (this.desk?.assigned_to) {
      const user = await lastValueFrom(showStaff(this.desk.assigned_to));
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
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();
    if (!this.form.valid)
      return;
    this.loading.set(true);
    const value = __spreadValues({}, this.form.getRawValue());
    if (value.assigned_user) {
      value.assigned_to = value.assigned_user?.email || value.assigned_to;
      value.assigned_name = value.assigned_user?.name || value.assigned_name;
    } else {
      delete value.assigned_to;
      delete value.assigned_name;
    }
    delete value.assigned_user;
    this._dialog_ref.disableClose = true;
    const has_changes = Object.keys(this.desk).some((key) => value[key] !== this.desk[key]);
    if (has_changes) {
      this.event.emit({ reason: "done", metadata: value });
    } else {
      this._dialog_ref.disableClose = false;
      notifyInfo("No changes were made.");
      this._dialog_ref.close();
    }
  }
  selectItemfromMap() {
    let level = this.desk.zone;
    const ref = this._dialog.open(SelectMapItemModalComponent, {
      data: {
        location: this.form.value.map_id,
        level_id: this.form
      }
    });
    ref.afterClosed().subscribe((d) => {
      if (!d)
        return;
      level = ref.componentInstance.level || level;
      const zones = unique([
        this._org.organisation.id,
        this._org.building.parent_id,
        this._org.building.id,
        level?.id
      ]);
      this.form.patchValue({ map_id: d });
    });
  }
};
_DeskModalComponent.\u0275fac = function DeskModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeskModalComponent)();
};
_DeskModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskModalComponent, selectors: [["desk-modal"]], outputs: { event: "event" }, decls: 12, vars: 8, consts: [[1, "w-lg"], [1, "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "bg-base-200", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "max-h-[65vh]", "flex-col", "overflow-auto", "p-4", 3, "formGroup"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "flex", "items-center", "justify-end", "space-x-2", "border-t", "border-base-300", "px-4", "py-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "w-full"], ["for", "id"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "id", "formControlName", "id", "placeholder", "desk-10.123"], [1, "flex", "space-x-2"], [1, "w-1/3", "flex-1"], ["for", "name"], ["matInput", "", "name", "name", "formControlName", "name", "placeholder", "e.g. Office Desk"], ["for", "map-id"], ["matInput", "", "name", "map-id", "formControlName", "map_id", 3, "placeholder"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "min-w-12", "rounded-sm", "border", "border-secondary", "text-secondary", 3, "click", "matTooltip"], ["for", "user"], [1, "mb-4", "flex", "space-x-2"], ["name", "user", "formControlName", "assigned_user", 1, "flex-1"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "min-w-12", "rounded-sm", "bg-secondary", "text-secondary-content", 3, "click", "matTooltip"], ["className", "material-symbols-outlined"], [1, "flex", "space-x-4", "pb-4"], ["formControlName", "bookable", 1, "flex-1", 3, "name"], [1, "flex-1"], ["for", "notes"], ["formControlName", "groups", 1, "w-full", 3, "placeholder"], ["formControlName", "features", 1, "w-full", 3, "placeholder"], ["appearance", "outline"], ["matInput", "", "name", "notes", "formControlName", "notes", 3, "placeholder"], ["for", "security"], ["matInput", "", "name", "security", "formControlName", "security", 3, "placeholder"], ["diameter", "32"]], template: function DeskModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, DeskModalComponent_Conditional_5_Template, 3, 0, "button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, DeskModalComponent_Conditional_6_Template, 76, 58, "main", 4)(7, DeskModalComponent_Conditional_7_Template, 5, 3, "main", 5);
    \u0275\u0275elementStart(8, "footer", 6)(9, "button", 7);
    \u0275\u0275listener("click", function DeskModalComponent_Template_button_click_9_listener() {
      return ctx.postForm();
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, ctx.id ? "APP.CONCIERGE.DESKS_EDIT" : "APP.CONCIERGE.DESKS_NEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading() ? 6 : 7);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 6, "COMMON.SAVE"), " ");
  }
}, dependencies: [
  MatDialogModule,
  MatDialogClose,
  TranslatePipe,
  IconComponent,
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
  MatProgressSpinnerModule,
  MatProgressSpinner,
  ItemListFieldComponent,
  SettingsToggleComponent,
  UserSearchFieldComponent,
  MatTooltipModule,
  MatTooltip
], encapsulation: 2 });
var DeskModalComponent = _DeskModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskModalComponent, [{
    type: Component,
    args: [{ selector: "desk-modal", template: `
        <div class="w-lg">
            <header
                class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none bg-base-200 p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    {{
                        (id
                            ? 'APP.CONCIERGE.DESKS_EDIT'
                            : 'APP.CONCIERGE.DESKS_NEW'
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
                    <div class="w-full">
                        <label for="id">
                            {{ 'APP.CONCIERGE.DESKS_ID' | translate }}
                            <span>*</span>
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                name="id"
                                formControlName="id"
                                placeholder="desk-10.123"
                            />
                            <mat-error>{{
                                'FORM.ID_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex space-x-2">
                        <div class="w-1/3 flex-1">
                            <label for="name">
                                {{ 'APP.CONCIERGE.DESKS_NAME' | translate }}
                                <span>*</span>
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    name="name"
                                    formControlName="name"
                                    placeholder="e.g. Office Desk"
                                />
                                <mat-error>{{
                                    'FORM.NAME_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                        <div class="w-1/3 flex-1">
                            <label for="map-id">
                                {{ 'EXPLORE.MAP_ID' | translate }}<span>*</span>
                            </label>
                            <div class="flex space-x-2">
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        matInput
                                        name="map-id"
                                        formControlName="map_id"
                                        [placeholder]="
                                            'APP.CONCIERGE.DESKS_MAP_ID_PLACEHOLDER'
                                                | translate
                                        "
                                    />
                                    <mat-error>
                                        {{
                                            'EXPLORE.MAP_ID_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                </mat-form-field>
                                <button
                                    icon
                                    matRipple
                                    class="h-12 w-12 min-w-12 rounded-sm border border-secondary text-secondary"
                                    [matTooltip]="
                                        'APP.CONCIERGE.POI_MAP_SELECT'
                                            | translate
                                    "
                                    (click)="selectItemfromMap()"
                                >
                                    <icon>place</icon>
                                </button>
                            </div>
                        </div>
                    </div>
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
                            class="h-12 w-12 min-w-12 rounded-sm bg-secondary text-secondary-content"
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
                            class="flex-1"
                            [name]="'COMMON.BOOKABLE' | translate"
                        >
                        </settings-toggle>
                        <div class="flex-1"></div>
                    </div>
                    <label for="notes">{{ 'COMMON.GROUPS' | translate }}</label>
                    <item-list-field
                        class="w-full"
                        [placeholder]="'BOOKINGS.GROUPS' | translate"
                        formControlName="groups"
                    ></item-list-field>
                    <label for="notes">{{
                        'COMMON.FEATURES' | translate
                    }}</label>
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
                    <label for="security">
                        {{ 'APP.CONCIERGE.DESKS_SECURITY' | translate }}
                    </label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="security"
                            [placeholder]="
                                'APP.CONCIERGE.DESKS_SECURITY' | translate
                            "
                            formControlName="security"
                        />
                    </mat-form-field>
                </main>
            } @else {
                <main
                    class="flex flex-col items-center justify-center space-y-2 p-8"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ 'APP.CONCIERGE.DESKS_SAVING' | translate }}</p>
                </main>
            }
            <footer
                class="flex items-center justify-end space-x-2 border-t border-base-300 px-4 py-2"
            >
                <button btn matRipple class="w-32" (click)="postForm()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        </div>
    `, imports: [
      MatDialogModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      MatProgressSpinnerModule,
      ItemListFieldComponent,
      SettingsToggleComponent,
      UserSearchFieldComponent,
      MatTooltipModule
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskModalComponent, { className: "DeskModalComponent", filePath: "apps/concierge/src/app/desks/desk-modal.component.ts", lineNumber: 252 });
})();

// apps/concierge/src/app/desks/desks-state.service.ts
var _DesksStateService = class _DesksStateService extends AsyncHandler {
  nextPage() {
    this._call_next_page.next(`NEXT_${Date.now()}`);
  }
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this._filters = signal({});
    this._desk_bookings = [];
    this._loading = signal(false);
    this._change = signal(0);
    this.loading = this._loading.asReadonly();
    this.filters = this._filters.asReadonly();
    this._desks$ = combineLatest([
      toObservable(this._filters),
      toObservable(this._change)
    ]).pipe(debounceTime(500), switchMap(([filters]) => {
      if (filters.view !== "manage") {
        return of([]);
      }
      this._loading.set(true);
      const zones = filters.zones || [];
      return zones && !zones.includes("All") ? Xu(zones[0], "desks").pipe(map((m) => m.details instanceof Array ? m.details : []), catchError((_) => of([]))) : rc(this._org.building?.id, {
        name: "desks"
      }).pipe(map((m) => m.map((i) => i.metadata?.desks?.details || []).reduce((c, i) => [...c, ...i], [])), catchError((_) => of([])));
    }), map((list) => {
      if (!(list instanceof Array))
        list = [];
      list.sort((a, b) => a.name?.localeCompare(b.name));
      this._loading.set(false);
      return list.map((i) => new Desk(__spreadProps(__spreadValues({}, i), { qr_code: "" })));
    }), shareReplay(1));
    this.desks = toSignal(this._desks$, {
      initialValue: []
    });
    this._next_page = new Subject();
    this._call_next_page = new Subject();
    this._all_zones_keys = ["All", -1, "-1", ""];
    this.setup_paging = combineLatest([
      toObservable(this._filters),
      this._org.initialised
    ]).pipe(debounceTime(500), tap(([filters, loaded]) => {
      if (!loaded || filters.view !== "events")
        return;
      const date = filters.date || Date.now();
      const active_zones = (filters.zones || []).filter((_) => !this._all_zones_keys.includes(_));
      const zones = !active_zones.length ? this._settings.get("app.use_region") ? this._org.buildingsForRegion().map((_) => _.id) : [this._org.building.id] : filters.zones;
      this._next_page.next(() => queryPagedBookings({
        period_start: getUnixTime(startOfDay(date)),
        period_end: getUnixTime(endOfDay(date)),
        type: "desk",
        zones: zones.join(","),
        include_checked_out: true,
        include_deleted: "all",
        limit: 500
      }).pipe(catchError((_) => of({ data: [], total: 0, next: null }))));
      this._call_next_page.next(`RESET_${Date.now()}`);
    }));
    this._paged_bookings$ = combineLatest([
      this._next_page,
      this._call_next_page
    ]).pipe(debounceTime(500), distinctUntilChanged((a, b) => a[1] === b[1]), switchMap(([next_page, action]) => {
      this._loading.set(true);
      if (!next_page) {
        return of({
          data: [],
          total: 0,
          next: null,
          reset: action.includes("RESET")
        });
      }
      if (action.includes("RESET")) {
        return next_page().pipe(map((data) => __spreadProps(__spreadValues({}, data), { reset: true })), catchError((_) => of({ data: [], total: 0, next: null })));
      }
      return next_page().pipe(map((data) => __spreadProps(__spreadValues({}, data), { reset: false })), catchError((_) => of({ data: [], total: 0, next: null })));
    }), scan((acc, { data, total, next, reset }) => {
      const list = data;
      this._next_page.next(next);
      if (reset)
        return {
          list,
          total,
          has_next: list.length < total && !!next
        };
      return {
        list: [...acc.list, ...list],
        has_next: !!next,
        total
      };
    }, { list: [], total: 0, has_next: false }), tap((_) => this._loading.set(false)), shareReplay(1));
    this.paged_bookings = toSignal(this._paged_bookings$, {
      initialValue: { list: [], total: 0, has_next: false }
    });
    this.has_more_pages = computed(() => this.paged_bookings().has_next);
    this.bookings = computed(() => this.paged_bookings().list);
    this.setup_paging.subscribe();
  }
  setFilters(filters) {
    if (filters.zones?.includes("All")) {
      filters.zones = [
        "All",
        ...this._org.levelsForBuilding(this._org.building).map((lvl) => lvl.id)
      ];
    } else if (filters.zones && this._filters()?.zones?.includes("All")) {
      filters.zones = [];
    }
    this._filters.set(__spreadValues(__spreadValues({}, this._filters()), filters));
  }
  refresh() {
    this._loading.set(true);
    this.timeout("poll", () => this.setFilters(this._filters()));
  }
  async addDesks(list) {
    const zone = this._filters().zones[0];
    const desk_list = [...this.desks()];
    for (const desk of list) {
      const idx = desk_list.findIndex((_) => _.id === desk.id);
      if (idx >= 0)
        desk_list[idx] = desk;
      else
        desk_list.push(desk);
    }
    await ec(zone, {
      name: "desks",
      details: desk_list,
      description: "List of available desks"
    }).toPromise();
    this._change.set(Date.now());
  }
  async editDesk(desk = new Desk()) {
    const ref = this._dialog.open(DeskModalComponent, { data: { desk } });
    const state = await Promise.race([
      lastValueFrom(ref.afterClosed()),
      lastValueFrom(outputToObservable(ref.componentInstance.event).pipe(first((_) => _.reason === "done")))
    ]);
    if (state?.reason !== "done")
      return;
    const zone = this._filters().zones[0];
    const new_desk = __spreadProps(__spreadValues({}, state.metadata), {
      id: state.metadata.id || `desk-${zone.slice(-3)}.${randomInt(999999)}`
    });
    const desk_list = [...this.desks()];
    const idx = desk_list.findIndex((_) => _.id === desk.id);
    if (idx >= 0)
      desk_list[idx] = new_desk;
    else
      desk_list.push(new_desk);
    if (!new_desk.bookable) {
      new_desk.assigned_to = "";
      delete new_desk.assigned_name;
      delete new_desk.assigned_user;
    }
    await lastValueFrom(ec(zone, {
      name: "desks",
      details: desk_list,
      description: "List of available desks"
    })).catch((e) => {
      notifyError(i18n("APP.CONCIERGE.DESKS_SAVE_ERROR", { error: e }));
      ref.componentInstance.loading.set(false);
      throw e;
    });
    let recreate = false;
    if (desk.assigned_to && (desk.assigned_to !== new_desk.assigned_to || desk.id !== new_desk.id)) {
      await this._clearAssignedBooking(desk);
      recreate = true;
    }
    if ((desk.assigned_to !== new_desk.assigned_to || recreate) && new_desk.assigned_to) {
      const date = set(Date.now(), { hours: 1, minutes: 0, seconds: 0 });
      await saveBooking(new Booking({
        user_id: new_desk.assigned_to,
        user_email: new_desk.assigned_to,
        user_name: new_desk.assigned_name,
        booking_start: getUnixTime(date),
        booking_end: getUnixTime(addHours(date, 22)),
        type: "desk",
        booking_type: "desk",
        asset_id: new_desk.id,
        asset_name: new_desk.name,
        recurrence_type: "daily",
        recurrence_days: RecurrenceDays.MONDAY | RecurrenceDays.TUESDAY | RecurrenceDays.WEDNESDAY | RecurrenceDays.THURSDAY | RecurrenceDays.FRIDAY | RecurrenceDays.SATURDAY | RecurrenceDays.SUNDAY,
        zones: unique([
          this._org.organisation.id,
          this._org.region?.id,
          this._org.building?.id,
          new_desk.zone?.id,
          new_desk.zone,
          ...new_desk?.zones || [],
          zone
        ]).filter((_) => !!_),
        extension_data: {
          asset_name: new_desk.name,
          is_assigned: true
        }
      })).toPromise();
    }
    this._change.set(Date.now());
    ref.close();
  }
  async checkinDesk(desk, state = true) {
    const status = await checkinBooking(desk.id, state ?? true).toPromise().catch((_) => ({ failed: true, error: _ }));
    if (status.failed) {
      notifyError(i18n(state ? "APP.CONCIERGE.DESKS_CHECKIN_ERROR" : "APP.CONCIERGE.DESKS_CHECKOUT_ERROR", { error: status.error }));
      throw status.error;
    }
    notifySuccess(i18n(state ? "APP.CONCIERGE.DESKS_CHECKIN_SUCCESS" : "APP.CONCIERGE.DESKS_CHECKOUT_SUCCESS"));
  }
  async approveDesk(desk) {
    const status = await approveBooking(desk.id).toPromise().catch((_) => ({ failed: true, error: _ }));
    if (status.failed) {
      return notifyError(i18n("APP.CONCIERGE.DESKS_APPROVE_ERROR", {
        error: status.error
      }));
    }
    notifySuccess(i18n("APP.CONCIERGE.DESKS_APPROVE_SUCCESS"));
    desk.approved = true;
    desk.rejected = false;
    this.setFilters({});
  }
  async rejectDesk(desk) {
    const status = await rejectBooking(desk.id).toPromise().catch((_) => ({ failed: true, error: _ }));
    if (status.failed) {
      return notifyError(i18n("APP.CONCIERGE.DESKS_REJECT_ERROR", {
        error: status.error
      }));
    }
    notifySuccess(i18n("APP.CONCIERGE.DESKS_REJECT_SUCCESS"));
    desk.approved = false;
    desk.rejected = true;
    this.setFilters({});
  }
  async cancelBooking(booking) {
    const result = await openConfirmModal({
      title: i18n("APP.CONCIERGE.DESKS_BOOKING_DELETE_TITLE"),
      content: i18n("APP.CONCIERGE.DESKS_BOOKING_DELETE_CONTENT"),
      icon: { content: "event_busy" }
    }, this._dialog);
    if (result.reason !== "done")
      return;
    result.loading(i18n("APP.CONCIERGE.DESKS_BOOKING_DELETE_LOADING"));
    await nextValueFrom(removeBooking(booking.id)).catch((e) => {
      notifyError(i18n("APP.CONCIERGE.DESKS_BOOKING_DELETE_ERROR", { error: e }));
      result.close();
      throw e;
    });
    notifySuccess(i18n("APP.CONCIERGE.DESKS_BOOKING_DELETE_SUCCESS"));
    result.close();
    this.setFilters({});
  }
  async giveAccess(desk) {
    const status = await saveBooking(new Booking(__spreadProps(__spreadValues({}, desk), { access: true }))).toPromise().catch((_) => ({ failed: true, error: _ }));
    if (status.failed) {
      return notifyError(i18n("APP.CONCIERGE.DESKS_ACCESS_ERROR", {
        error: status.error
      }));
    }
    notifySuccess(i18n("APP.CONCIERGE.DESKS_ACCESS_SUCCESS"));
    this.setFilters({});
  }
  async rejectAllDesks() {
    const list = this.bookings();
    if (list.length <= 0)
      return notifyInfo("No desks to reject for the selected date");
    const resp = await openConfirmModal({
      title: i18n("APP.CONCIERGE.DESKS_REJECT_ALL_TITLE"),
      content: i18n("APP.CONCIERGE.DESKS_REJECT_ALL_MSG"),
      icon: {
        type: "icon",
        class: "material-symbols-rounded",
        content: "delete"
      }
    }, this._dialog);
    if (resp.reason !== "done")
      return;
    resp.loading(i18n("APP.CONCIERGE.DESKS_REJECT_ALL_LOADING"));
    await Promise.all(list.map((desk) => rejectBooking(desk.id).toPromise())).catch((e) => {
      notifyError(i18n("APP.CONCIERGE.DESKS_REJECT_ALL_ERROR", { error: e }));
      throw e;
    });
    notifySuccess(i18n("APP.CONCIERGE.DESKS_REJECT_ALL_SUCCESS"));
    this.setFilters({});
    resp.close();
  }
  async _clearAssignedBooking(desk) {
    const booking_list = await lastValueFrom(queryBookings({
      period_start: getUnixTime(startOfDay(Date.now())),
      period_end: getUnixTime(endOfDay(Date.now())),
      type: "desk",
      email: desk.assigned_to,
      include_checked_out: true
    }));
    const filtered = booking_list.filter((_) => _.asset_id === desk.id);
    await Promise.all(filtered.map((_) => lastValueFrom(removeBooking(_.id))));
  }
};
_DesksStateService.\u0275fac = function DesksStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DesksStateService)();
};
_DesksStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DesksStateService, factory: _DesksStateService.\u0275fac, providedIn: "root" });
var DesksStateService = _DesksStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DesksStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  SelectMapItemModalComponent,
  DesksStateService
};
//# sourceMappingURL=chunk-CLYK2JGC.js.map
