import {
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  BuildingLevel,
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormsModule,
  IconComponent,
  InteractiveMapComponent,
  MAP_FEATURE_DATA,
  MAT_DIALOG_DATA,
  MapsPeopleService,
  MatDialogClose,
  MatDialogModule,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatOption,
  MatPrefix,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  NgControlStatus,
  NgModel,
  OrganisationService,
  SlicePipe,
  TranslatePipe,
  combineLatest,
  debounceTime,
  inject,
  map,
  nextValueFrom,
  of,
  setClassMetadata,
  shareReplay,
  switchMap,
  tap,
  unique,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
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
} from "./chunk-APXD2SKZ.js";

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
_SelectMapItemModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectMapItemModalComponent, selectors: [["select-map-item-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 37, vars: 35, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "mx-auto", "mt-2", "flex", "h-14", "w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-sm", "border-none", "px-4", "py-2"], [1, "text-xl", "font-medium", "capitalize"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "h-[75vh]", "max-h-[75vh]", "max-w-[calc(100vw-2rem)]", "min-w-[80vw]", "space-x-2", "overflow-hidden", "p-2", "sm:max-w-5xl"], ["map", "", 1, "bg-base-200", "relative", "h-full", "w-1/2", "flex-1", "rounded-lg"], [3, "mapInfo", "src", "actions", "features", "options", "focus"], ["poi-list", "", 1, "border-base-300", "relative", "flex", "h-full", "w-[20rem]", "flex-col", "rounded-lg", "border"], ["search", "", 1, "border-base-200", "flex", "flex-col", "border-b", "p-2"], ["appearance", "outline", 1, "no-subscript", "mb-2", "w-full"], ["name", "level", 3, "ngModelChange", "ngModel"], [3, "value"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", "name", "search", "placeholder", "Search", 3, "ngModelChange", "ngModel"], ["matPrefix", "", 1, "text-2xl"], ["list", "", 1, "flex", "h-1/2", "flex-1", "flex-col", "space-y-2", "overflow-auto", "px-2"], [1, "bg-base-100", "sticky", "top-0", "z-10", "w-full", "px-1", "py-3", "text-sm"], [1, "border-info", "bg-info-light", "rounded-full", "border", "px-2", "py-1", "text-xs"], [1, "flex", "h-full", "flex-1", "flex-col", "items-center", "justify-center", "space-y-4"], ["pagination", "", 1, "border-base-300", "bg-base-100", "sticky", "bottom-0", "z-10", "-mx-2", "flex", "w-[calc(100%+1rem)]", "items-center", "justify-center", "space-x-1", "border-t", "p-2"], ["actions", "", 1, "border-base-200", "border-t", "p-2"], ["btn", "", "matRipple", "", 1, "w-full", 3, "disabled", "mat-dialog-close"], ["btn", "", "matRipple", "", 1, "clear", "hover:bg-base-200", "flex", "w-full", "items-center", "rounded-sm", "text-left", 3, "bg-primary!", "text-primary-content!"], ["btn", "", "matRipple", "", 1, "clear", "hover:bg-base-200", "flex", "w-full", "items-center", "rounded-sm", "text-left", 3, "click", "mouseover"], [1, "flex", "w-full", "flex-col", "font-mono", "text-sm"], [1, ""], [1, "text-xs", "opacity-30"], ["src", "assets/icons/no-results.svg", 1, "w-36"], [1, "text-center", "opacity-30"], ["icon", "", "matRipple", "", 1, "border-base-200", "rounded-sm", "border", 3, "click", "disabled"], ["icon", "", "matRipple", "", 3, "click"], ["icon", ""], ["icon", "", "matRipple", "", 1, "bg-secondary!", "text-secondary-content"], ["icon", "", "matRipple", "", 1, "border-base-200", "rounded-sm", "border", 3, "click"]], template: function SelectMapItemModalComponent_Template(rf, ctx) {
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
            class="bg-base-200 sticky top-0 z-10 mx-auto mt-2 flex h-14 w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none px-4 py-2"
        >
            <h2 class="text-xl font-medium capitalize">
                {{ 'APP.CONCIERGE.POI_MAP_SELECT_HEADER' | translate }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main
            class="flex h-[75vh] max-h-[75vh] max-w-[calc(100vw-2rem)] min-w-[80vw] space-x-2 overflow-hidden p-2 sm:max-w-5xl"
        >
            <div
                map
                class="bg-base-200 relative h-full w-1/2 flex-1 rounded-lg"
            >
                <interactive-map
                    [src]="level?.map_id"
                    [actions]="actions"
                    [features]="features | async"
                    [options]="{ controls: true }"
                    [focus]="selected.value"
                    (mapInfo)="setMapInfo($any($event))"
                ></interactive-map>
            </div>
            <div
                poi-list
                class="border-base-300 relative flex h-full w-[20rem] flex-col rounded-lg border"
            >
                <div search class="border-base-200 flex flex-col border-b p-2">
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
                        class="bg-base-100 sticky top-0 z-10 w-full px-1 py-3 text-sm"
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
                                class="border-info bg-info-light rounded-full border px-2 py-1 text-xs"
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
                                class="clear hover:bg-base-200 flex w-full items-center rounded-sm text-left"
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
                            class="border-base-300 bg-base-100 sticky bottom-0 z-10 -mx-2 flex w-[calc(100%+1rem)] items-center justify-center space-x-1 border-t p-2"
                        >
                            <button
                                icon
                                matRipple
                                class="border-base-200 rounded-sm border"
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
                                class="border-base-200 rounded-sm border"
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
                                class="border-base-200 rounded-sm border"
                                [disabled]="page === last_page"
                                (click)="page = page + 1"
                            >
                                <icon>chevron_right</icon>
                            </button>
                        </div>
                    }
                </div>
                <div actions class="border-base-200 border-t p-2">
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

export {
  SelectMapItemModalComponent
};
//# sourceMappingURL=chunk-GHVUO7BW.js.map
