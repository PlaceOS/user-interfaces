import {
  subMinutes
} from "./chunk-QUETR2BI.js";
import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-XEZHXF4D.js";
import {
  CounterComponent,
  DurationFieldComponent,
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
  newCalendarEventFromBooking,
  queryBookings,
  queryEvents,
  setHours,
  showEventMetadata,
  updateBooking,
  updateEventMetadata
} from "./chunk-ATM6RBBO.js";
import {
  ANIMATION_SHOW_CONTRACT_EXPAND,
  AsyncHandler,
  AsyncPipe,
  AttachedResourceConfigModalComponent,
  AuthenticatedImageDirective,
  BehaviorSubject,
  COMMA,
  CalendarEvent,
  CateringItem,
  CateringOrder,
  CommonModule,
  Component,
  CurrencyPipe,
  CustomTooltipComponent,
  DatePipe,
  DefaultValueAccessor,
  ENTER,
  EventEmitter,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  IconComponent,
  ImageCarouselComponent,
  ImageListFieldComponent,
  Injectable,
  MAT_DIALOG_DATA,
  MatCheckbox,
  MatCheckboxModule,
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatOption,
  MatPrefix,
  MatProgressBar,
  MatProgressBarModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  MinValidator,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NumberValueAccessor,
  OrganisationService,
  Output,
  ReactiveFormsModule,
  SPACE,
  SettingsService,
  SettingsToggleComponent,
  SimpleTableComponent,
  SpacePipe,
  TranslatePipe,
  Validators,
  addDays,
  addMinutes,
  catchError,
  combineLatest,
  csvToJson,
  currentUser,
  debounceTime,
  differenceInMinutes,
  downloadFile,
  endOfDay,
  filter,
  first,
  flatten,
  format,
  forwardRef,
  getUnixTime,
  i18n,
  inject,
  input,
  isAfter,
  isBefore,
  lastValueFrom,
  map,
  model,
  nc,
  nextValueFrom,
  notifyError,
  notifySuccess,
  of,
  openConfirmModal,
  output,
  randomInt,
  randomString,
  rc,
  setClassMetadata,
  shareReplay,
  signal,
  startOfDay,
  stringToMinutes,
  switchMap,
  tap,
  unique,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵpureFunction6,
  ɵɵpureFunctionV,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2YDW5TOP.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// libs/catering/src/lib/catering-orders.service.ts
var SPACE_PIPE = new SpacePipe();
function checkOrder(order, filters) {
  const s = (filters.search || "").toLowerCase();
  const space = SPACE_PIPE.get(order.event?.extension_data.system_id);
  const location = order.event?.location || space.display_name || space.name;
  const host = order.event?.host || order.event?.organiser?.email || "";
  return !!order.items.find((item) => {
    return (!filters?.caterer || filters.caterer === "<empty>" && !item.caterer || item.caterer === filters.caterer) && (item.name.toLowerCase().includes(s) || !!item.options.find((option) => option.name.toLowerCase().includes(s)) || location.toLowerCase().includes(s) || host.toLowerCase().includes(s));
  });
}
var BOOKINGS = {};
var _CateringOrdersService = class _CateringOrdersService extends AsyncHandler {
  /** Order filters */
  get filters() {
    return this._filters.getValue();
  }
  /** Order filters */
  set filters(filters) {
    this._filters.next(filters);
  }
  get using_bookings() {
    return this._settings.get("app.catering.use_bookings") == true;
  }
  constructor() {
    super();
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._poll = new BehaviorSubject(0);
    this._loading = new BehaviorSubject(false);
    this._space_pipe = new SpacePipe();
    this._filters = new BehaviorSubject({
      caterer: ""
    });
    this._embedded_orders = combineLatest([this._filters, this._poll]).pipe(debounceTime(300), switchMap(([{ date, zones }]) => {
      const start = getUnixTime(startOfDay(date || Date.now()));
      const end = getUnixTime(endOfDay(date || Date.now()));
      if (!zones?.length) {
        zones = this._settings.get("app.use_region") ? [this._org.region?.id] : [this._org.building?.id];
      }
      return queryEvents({
        zone_ids: (zones || []).join(","),
        period_start: start,
        period_end: end
      }).pipe(catchError(() => of([])), map((events) => flatten(events.map((event) => event.valid_catering.map((o) => new CateringOrder(__spreadProps(__spreadValues({}, o), { event })))))));
    }), shareReplay(1));
    this._booking_orders = combineLatest([this._filters, this._poll]).pipe(debounceTime(300), switchMap(([{ date, zones }]) => {
      const start = getUnixTime(startOfDay(date || Date.now()));
      const end = getUnixTime(endOfDay(date || Date.now()));
      if (!zones?.length) {
        zones = this._settings.get("app.use_region") ? [this._org.region.id] : [this._org.building.id];
      }
      return queryBookings({
        type: "catering-order",
        zones: (zones || []).join(","),
        period_start: start,
        period_end: end
      }).pipe(catchError(() => of([])), map((bookings) => flatten(bookings.map((bkn) => {
        BOOKINGS[bkn.asset_id] = bkn;
        const order = new CateringOrder(__spreadProps(__spreadValues({}, bkn.extension_data.details), {
          event: bkn.linked_event ? new CalendarEvent(__spreadValues({}, bkn.linked_event)) : newCalendarEventFromBooking(bkn.linked_bookings[0] || bkn)
        }));
        if (bkn.linked_event) {
          this._space_pipe.transform(bkn.linked_event.system_id).then((space) => {
            order.space = space;
            order.event.system = space;
          });
        }
        return order;
      }))));
    }), shareReplay(1));
    this.orders = combineLatest([
      this._org.active_building
    ]).pipe(filter((_) => !!_), switchMap(() => {
      this._loading.next(true);
      return this.using_bookings ? this._booking_orders : this._embedded_orders;
    }), map((orders) => {
      const start = startOfDay(this._filters.getValue().date || Date.now());
      return unique(orders.filter((o) => format(o.deliver_at, "yyyy-MM-dd") === format(start, "yyyy-MM-dd")), "id");
    }), tap(() => this._loading.next(false)), shareReplay(1));
    this.loading = this._loading.asObservable();
    this.order_filters = this._filters.asObservable();
    this.caterers = this.orders.pipe(map((_) => {
      const provider_groups = this._settings.get("app.catering_provider_groups") || {};
      let provider_list = Object.keys(provider_groups);
      const is_admin = currentUser()?.groups?.includes("placeos_admin") || currentUser()?.groups?.includes("placeos_support");
      if (!provider_list.length || is_admin)
        return unique(_.map((i) => i.caterer));
      provider_list = provider_list.filter((caterer) => provider_groups[caterer].find((group) => currentUser()?.groups?.includes(group)));
      if (provider_list.length <= 1 && this._filters.getValue()?.caterer !== provider_list[0]) {
        this._filters.next(__spreadProps(__spreadValues({}, this._filters.getValue()), {
          caterer: provider_list[0]
        }));
      }
      return unique(provider_list);
    }), shareReplay(1));
    this.filtered = combineLatest([this.orders, this._filters]).pipe(map(([list, filters]) => list.filter((order) => checkOrder(order, filters)).sort((a, b) => a.deliver_at - b.deliver_at)));
    this._space_pipe.org = this._org;
    this.subscription("changes", this.orders.subscribe());
  }
  /** Start polling for catering orders */
  startPolling(delay = 15 * 1e3) {
    this.interval("polling", () => this._poll.next((/* @__PURE__ */ new Date()).valueOf()), delay);
    return () => this.stopPolling();
  }
  /** Stop polling for new catering orders */
  stopPolling() {
    this.clearInterval("polling");
  }
  /**
   * Update the status of the order
   * @param order Order to update
   * @param status New order status
   */
  async updateStatus(order, status) {
    order.status = status;
    const updated_order = new CateringOrder(__spreadProps(__spreadValues({}, order), {
      status,
      event: null
    }));
    updated_order._status = status;
    const catering = [
      ...(order.event.extension_data.catering || []).filter((o) => o.id !== order.id),
      updated_order
    ].map((i) => new CateringOrder(__spreadValues({}, i)).toJSON());
    const system_id = order.event?.resources[0]?.id || order.event?.system?.id;
    let booking;
    if (system_id) {
      const extension_data = await lastValueFrom(showEventMetadata(order.event.id, system_id));
      const event = new CalendarEvent(__spreadProps(__spreadValues({}, __spreadProps(__spreadValues({}, order.event), { extension_data })), {
        catering
      }));
      await lastValueFrom(updateEventMetadata(event.id, system_id, event.extension_data));
    }
    if (this.using_bookings) {
      booking = BOOKINGS[order.id];
      await lastValueFrom(updateBooking(booking.id, __spreadProps(__spreadValues({}, booking.toJSON()), {
        extension_data: __spreadProps(__spreadValues({}, booking.extension_data), {
          details: updated_order.toJSON()
        })
      })));
    }
    this.timeout("refresh-list", () => this._poll.next(Date.now()), 1e3);
    order.status = status;
    return booking;
  }
};
_CateringOrdersService.\u0275fac = function CateringOrdersService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringOrdersService)();
};
_CateringOrdersService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CateringOrdersService, factory: _CateringOrdersService.\u0275fac, providedIn: "root" });
var CateringOrdersService = _CateringOrdersService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringOrdersService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/catering/src/lib/catering-import-menu-modal.component.ts
function CateringImportMenuModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 2)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function CateringImportMenuModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main")(1, "div", 4)(2, "icon", 5);
    \u0275\u0275text(3, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 6);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 7);
    \u0275\u0275listener("change", function CateringImportMenuModalComponent_Conditional_5_Template_input_change_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleFileEvent($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 8)(9, "button", 9);
    \u0275\u0275listener("click", function CateringImportMenuModalComponent_Conditional_5_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "CATERING.MENU_IMPORT_FILE_SELECT"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 4, "CATERING.MENU_IMPORT_TEMPLATE"), " ");
  }
}
function CateringImportMenuModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3);
    \u0275\u0275element(1, "mat-spinner", 10);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.loading);
  }
}
var _CateringImportMenuModalComponent = class _CateringImportMenuModalComponent {
  constructor() {
    this.event = new EventEmitter();
  }
  /** Upload the image to the cloud */
  handleFileEvent(event) {
    this.loading = "Processing menu data...";
    const element = event.target;
    if (!element?.files)
      return this.loading = "";
    const files = element.files;
    if (!files.length)
      return this.loading = "";
    const file = files[0];
    const fileReader = new FileReader();
    fileReader.addEventListener("loadend", (e) => {
      const contents = e.target.result;
      const data = csvToJson(contents);
      const new_items = this._processData(data);
      this.loading = "";
      this.event.emit({
        reason: "done",
        metadata: new_items
      });
    });
    fileReader.readAsText(file);
  }
  _processData(list) {
    const items = [];
    const isType = (i, t) => i.type.toLowerCase() === t;
    for (const item of list) {
      if (!isType(item, "item"))
        continue;
      const opt_list = list.filter((o) => isType(o, "option") && (o.tags === item.id || o.description === item.id));
      items.push(new CateringItem(__spreadProps(__spreadValues({}, item), {
        options: opt_list.map((o) => ({
          id: o.id,
          name: o.name,
          group: o.category,
          multiple: o.multiple,
          unit_price: o.unit_price
        }))
      })));
    }
    return items;
  }
  downloadTemplate() {
    const template = `ID,Type,Name,Unit Price,Category,Caterer,Description,Tags,Multiple
item-1,item,Coffee,200,Drink,Wake Up Cafe,Wake Up,,
option-1,option,1 Sugar,20,Sugars,,,item-1,false`;
    downloadFile("import-menu-template.csv", template);
  }
};
_CateringImportMenuModalComponent.\u0275fac = function CateringImportMenuModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringImportMenuModalComponent)();
};
_CateringImportMenuModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringImportMenuModalComponent, selectors: [["catering-import-menu-modal"]], outputs: { event: "event" }, decls: 7, vars: 5, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "h-96", "w-[24rem]", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "border-base-300", "hover:bg-base-200", "relative", "mx-2", "flex", "h-96", "w-[24rem]", "cursor-pointer", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-xl", "border-4", "border-dashed", "p-4"], [1, "text-8xl", "opacity-30"], [1, "px-4", "text-center", "opacity-30"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], [1, "flex", "items-center", "justify-center", "p-2"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], ["diameter", "32"]], template: function CateringImportMenuModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, CateringImportMenuModalComponent_Conditional_4_Template, 3, 0, "button", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, CateringImportMenuModalComponent_Conditional_5_Template, 12, 6, "main")(6, CateringImportMenuModalComponent_Conditional_6_Template, 4, 1, "main", 3);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "CATERING.MENU_IMPORT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading ? 5 : 6);
  }
}, dependencies: [
  TranslatePipe,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatDialogModule,
  MatDialogClose
], encapsulation: 2 });
var CateringImportMenuModalComponent = _CateringImportMenuModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringImportMenuModalComponent, [{
    type: Component,
    args: [{ selector: "catering-import-menu-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'CATERING.MENU_IMPORT' | translate }}
            </h2>
            @if (!loading) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading) {
            <main>
                <div
                    class="border-base-300 hover:bg-base-200 relative mx-2 flex h-96 w-[24rem] cursor-pointer flex-col items-center justify-center space-y-4 rounded-xl border-4 border-dashed p-4"
                >
                    <icon class="text-8xl opacity-30">cloud_upload</icon>
                    <p class="px-4 text-center opacity-30">
                        {{ 'CATERING.MENU_IMPORT_FILE_SELECT' | translate }}
                    </p>
                    <input
                        type="file"
                        class="absolute inset-0 opacity-0"
                        (change)="handleFileEvent($event)"
                    />
                </div>
                <div class="flex items-center justify-center p-2">
                    <button
                        btn
                        matRipple
                        class="w-full"
                        (click)="downloadTemplate()"
                    >
                        {{ 'CATERING.MENU_IMPORT_TEMPLATE' | translate }}
                    </button>
                </div>
            </main>
        } @else {
            <main
                class="flex h-96 w-[24rem] flex-col items-center justify-center space-y-2 p-8"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ loading }}</p>
            </main>
        }
    `, imports: [
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatProgressSpinnerModule,
      MatDialogModule
    ] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringImportMenuModalComponent, { className: "CateringImportMenuModalComponent", filePath: "libs/catering/src/lib/catering-import-menu-modal.component.ts", lineNumber: 86 });
})();

// libs/catering/src/lib/catering-item-modal.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ item: a0 });
function CateringItemModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 5)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function CateringItemModalComponent_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "label", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 25);
    \u0275\u0275element(8, "input", 28);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementStart(10, "mat-error");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.name.invalid && ctx_r1.form.controls.name.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "FORM.NAME"));
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 7, "FORM.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 9, "FORM.NAME_REQUIRED"));
  }
}
function CateringItemModalComponent_Conditional_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "label", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 25);
    \u0275\u0275element(8, "input", 30);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementStart(10, "mat-error");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const auto_r3 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.category.invalid && ctx_r1.form.controls.category.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "COMMON.CATEGORY"));
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 8, "COMMON.CATEGORY"))("matAutocomplete", auto_r3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, "COMMON.CATEGORY_REQUIRED"));
  }
}
function CateringItemModalComponent_Conditional_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "label", 31);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 25);
    \u0275\u0275element(8, "input", 32);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const caterer_auto_r4 = \u0275\u0275reference(13);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "CATERING.CATERER"));
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 5, "CATERING.CATERER"))("matAutocomplete", caterer_auto_r4);
  }
}
function CateringItemModalComponent_Conditional_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "label", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "a-counter", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.unit_price.invalid && ctx_r1.form.controls.unit_price.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, "CATERING.ITEM_PRICE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("min", 0)("max", 1e5)("step", 10)("render_fn", ctx_r1.renderPrice);
  }
}
function CateringItemModalComponent_Conditional_5_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "label", 34);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 25);
    \u0275\u0275element(5, "textarea", 35);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "COMMON.DESCRIPTION"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "COMMON.DESCRIPTION"));
  }
}
function CateringItemModalComponent_Conditional_5_Conditional_18_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 39);
    \u0275\u0275listener("removed", function CateringItemModalComponent_Conditional_5_Conditional_18_For_8_Template_mat_chip_row_removed_0_listener() {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeTag(item_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 40);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r7, " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(3, 2, "COMMON.REMOVE_ITEM", \u0275\u0275pureFunction1(5, _c1, item_r7)));
  }
}
function CateringItemModalComponent_Conditional_5_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "label", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 25)(5, "mat-chip-grid", 37, 2);
    \u0275\u0275repeaterCreate(7, CateringItemModalComponent_Conditional_5_Conditional_18_For_8_Template, 6, 7, "mat-chip-row", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 38);
    \u0275\u0275listener("matChipInputTokenEnd", function CateringItemModalComponent_Conditional_5_Conditional_18_Template_input_matChipInputTokenEnd_9_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addTag($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const chipList_r8 = \u0275\u0275reference(6);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.tags.invalid && ctx_r1.form.controls.tags.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "COMMON.TAGS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.tag_list);
    \u0275\u0275advance(2);
    \u0275\u0275property("matChipInputFor", chipList_r8)("matChipInputSeparatorKeyCodes", ctx_r1.separators)("matChipInputAddOnBlur", true);
  }
}
function CateringItemModalComponent_Conditional_5_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "label", 41);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "image-list-field", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "COMMON.IMAGES"));
  }
}
function CateringItemModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 6)(1, "div", 10);
    \u0275\u0275conditionalCreate(2, CateringItemModalComponent_Conditional_5_Conditional_2_Template, 13, 11, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275conditionalCreate(4, CateringItemModalComponent_Conditional_5_Conditional_4_Template, 13, 12, "div", 11);
    \u0275\u0275conditionalCreate(5, CateringItemModalComponent_Conditional_5_Conditional_5_Template, 10, 7, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275conditionalCreate(7, CateringItemModalComponent_Conditional_5_Conditional_7_Template, 7, 9, "div", 11);
    \u0275\u0275elementStart(8, "div", 13);
    \u0275\u0275element(9, "settings-toggle", 14);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 15)(12, "label", 16);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 17);
    \u0275\u0275element(16, "a-counter", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(17, CateringItemModalComponent_Conditional_5_Conditional_17_Template, 7, 6, "div", 19);
    \u0275\u0275conditionalCreate(18, CateringItemModalComponent_Conditional_5_Conditional_18_Template, 10, 8, "div", 19);
    \u0275\u0275elementStart(19, "label");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 20)(23, "settings-toggle", 21);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275listener("ngModelChange", function CateringItemModalComponent_Conditional_5_Template_settings_toggle_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r1.addTag({ value: "Gluten Free" }) : ctx_r1.removeTag("Gluten Free"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "settings-toggle", 21);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275listener("ngModelChange", function CateringItemModalComponent_Conditional_5_Template_settings_toggle_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r1.addTag({ value: "Vegan" }) : ctx_r1.removeTag("Vegan"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "settings-toggle", 21);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275listener("ngModelChange", function CateringItemModalComponent_Conditional_5_Template_settings_toggle_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r1.addTag({ value: "Vegetarian" }) : ctx_r1.removeTag("Vegetarian"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "settings-toggle", 21);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275listener("ngModelChange", function CateringItemModalComponent_Conditional_5_Template_settings_toggle_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r1.addTag({ value: "Contains Dairy" }) : ctx_r1.removeTag("Contains Dairy"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "settings-toggle", 22);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275listener("ngModelChange", function CateringItemModalComponent_Conditional_5_Template_settings_toggle_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r1.addTag({ value: "Contains Nuts" }) : ctx_r1.removeTag("Contains Nuts"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 23)(34, "label", 24);
    \u0275\u0275text(35, "Refund Lead Time (days)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "mat-form-field", 25);
    \u0275\u0275element(37, "input", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(38, CateringItemModalComponent_Conditional_5_Conditional_38_Template, 5, 3, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.controls.name ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.controls.category ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.caterer ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.controls.unit_price ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(10, 31, "CATERING.ITEM_POINTS"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 33, "CATERING.ITEM_DISCOUNT"));
    \u0275\u0275advance(3);
    \u0275\u0275property("min", 0)("max", 100)("step", 5)("render_fn", ctx_r1.renderPercent);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.description ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.tags ? 18 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 35, "CATERING.TAGS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(24, 37, "CATERING.TAG_GLUTEN_FREE"))("ngModel", ctx_r1.hasTag("Gluten Free"))("ngModelOptions", \u0275\u0275pureFunction0(47, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(26, 39, "CATERING.TAG_VEGAN"))("ngModel", ctx_r1.hasTag("Vegan"))("ngModelOptions", \u0275\u0275pureFunction0(48, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(28, 41, "CATERING.TAG_VEGETARIAN"))("ngModel", ctx_r1.hasTag("Vegetarian"))("ngModelOptions", \u0275\u0275pureFunction0(49, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(30, 43, "CATERING.TAG_DAIRY"))("ngModel", ctx_r1.hasTag("Contains Dairy"))("ngModelOptions", \u0275\u0275pureFunction0(50, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(32, 45, "CATERING.TAG_NUTS"))("ngModel", ctx_r1.hasTag("Contains Nuts"))("ngModelOptions", \u0275\u0275pureFunction0(51, _c0));
    \u0275\u0275advance(6);
    \u0275\u0275property("min", 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.images ? 38 : -1);
  }
}
function CateringItemModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 43);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "CATERING.ITEM_SAVING"));
  }
}
function CateringItemModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 8)(1, "button", 44);
    \u0275\u0275listener("click", function CateringItemModalComponent_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveChanges());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.form.dirty);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.SAVE"), " ");
  }
}
function CateringItemModalComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r10 = ctx.$implicit;
    \u0275\u0275property("value", option_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r10, " ");
  }
}
function CateringItemModalComponent_For_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "CATERING.CATERER_EMPTY"));
  }
}
function CateringItemModalComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 9);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, CateringItemModalComponent_For_15_Conditional_2_Template, 3, 3, "i");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r11 = ctx.$implicit;
    \u0275\u0275property("value", option_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r11, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!option_r11 ? 2 : -1);
  }
}
var _CateringItemModalComponent = class _CateringItemModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._org = inject(OrganisationService);
    this.event = new EventEmitter();
    this.form = new FormGroup({
      name: new FormControl(this.item.name || "", [Validators.required]),
      description: new FormControl(this.item.description || ""),
      category: new FormControl(this.item.category || "", [
        Validators.required
      ]),
      caterer: new FormControl(this.item.caterer || ""),
      unit_price: new FormControl(this.item.unit_price, [
        Validators.required
      ]),
      tags: new FormControl(this.item.tags || []),
      accept_points: new FormControl(this.item.accept_points || false),
      discount_cap: new FormControl(this.item.discount_cap || 0),
      images: new FormControl(this.item.images || []),
      refund_lead_days: new FormControl(this.item.refund_lead_days ?? null)
    });
    this.loading = false;
    this.separators = [ENTER, COMMA, SPACE];
    this._currency_pipe = new CurrencyPipe("en");
    this.renderPrice = (v) => this._renderPrice(v);
  }
  /** Current item details */
  get item() {
    return this._data.item || new CateringItem();
  }
  /** List of available categories */
  get categories() {
    return this._data.categories || [];
  }
  /** List of available caterers */
  get caterers() {
    return this._data.caterers || [];
  }
  get tag_list() {
    return this.form.controls.tags.value;
  }
  renderPercent(value = 0) {
    return `${value}%`;
  }
  _renderPrice(value = 0) {
    return this._currency_pipe?.transform(value / 100, this._org.currency_code) || String(value);
  }
  hasTag(tag) {
    return this.tag_list.includes(tag);
  }
  /**
   * Add a tag to the list of tags for the item
   * @param event Input event
   */
  addTag(event) {
    if (!this.form || !this.form.controls.tags)
      return;
    this.form.controls.tags.markAsDirty();
    const input2 = event.input;
    const value = event.value;
    const tag_list = this.tag_list;
    if ((value || "").trim()) {
      tag_list.push(value);
      this.form.controls.tags.setValue(tag_list);
    }
    if (input2)
      input2.value = "";
  }
  /**
   * Remove tag from the list
   * @param existing_tag Tag to remove
   */
  removeTag(existing_tag) {
    if (!this.form || !this.form.controls.tags)
      return;
    const tag_list = this.tag_list;
    this.form.controls.tags.markAsDirty();
    const index = tag_list.indexOf(existing_tag);
    if (index >= 0) {
      tag_list.splice(index, 1);
      this.form.controls.tags.setValue(tag_list);
    }
  }
  saveChanges() {
    this.loading = true;
    this.event.emit({
      reason: "done",
      metadata: {
        item: new CateringItem(__spreadValues(__spreadProps(__spreadValues({}, this.item), {
          id: this.item.id || `item-${randomInt(99999999)}`
        }), this.form.value))
      }
    });
  }
};
_CateringItemModalComponent.\u0275fac = function CateringItemModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringItemModalComponent)();
};
_CateringItemModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringItemModalComponent, selectors: [["catering-item-modal"]], outputs: { event: "event" }, decls: 16, vars: 6, consts: [["auto", "matAutocomplete"], ["caterer_auto", "matAutocomplete"], ["chipList", ""], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "max-h-[65vh]", "max-w-xl", "overflow-auto", "px-4", 3, "formGroup"], [1, "flex", "w-64", "flex-col", "items-center", "space-y-2", "p-8"], [1, "border-base-200", "flex", "items-center", "justify-end", "border-t", "border-solid", "px-4", "py-2"], [3, "value"], [1, "flex", "w-full", "items-center", "space-x-2"], [1, "flex", "flex-1", "flex-col"], [1, "flex", "space-x-4"], [1, "flex", "flex-1", "items-center", "py-4"], ["formControlName", "accept_points", 1, "w-full", 3, "name"], [1, "mb-4", "space-y-2"], [1, "w-24", "min-w-0", "flex-1"], [1, "max-w-[calc(50%-0.5rem)]"], ["formControlName", "discount_cap", 3, "min", "max", "step", "render_fn"], [1, "flex", "flex-col"], ["list", "", 1, "-mx-2", "flex", "flex-wrap", "items-center", "pb-2"], [1, "min-w-[40%]", "flex-1", "p-2", 3, "ngModelChange", "name", "ngModel", "ngModelOptions"], [1, "w-1/2", "min-w-[40%]", "p-2", 3, "ngModelChange", "name", "ngModel", "ngModelOptions"], [1, "flex", "flex-col", "space-y-2", "mb-4"], ["for", "refund-lead-days"], ["appearance", "outline"], ["matInput", "", "type", "number", "name", "refund-lead-days", "placeholder", "Days before event for refund cutoff", "formControlName", "refund_lead_days", 3, "min"], ["for", "title"], ["matInput", "", "name", "name", "formControlName", "name", 3, "placeholder"], ["for", "category"], ["matInput", "", "name", "category", "formControlName", "category", 3, "placeholder", "matAutocomplete"], ["for", "caterer"], ["matInput", "", "name", "caterer", "formControlName", "caterer", 3, "placeholder", "matAutocomplete"], ["formControlName", "unit_price", 3, "min", "max", "step", "render_fn"], ["for", "description"], ["matInput", "", "name", "description", "formControlName", "description", 3, "placeholder"], ["for", "tags"], ["aria-label", "Item Tags"], ["name", "tags", "placeholder", "Item tags e.g. Gluten Free, Vegan etc.", 3, "matChipInputTokenEnd", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed"], ["matChipRemove", ""], ["for", "images"], ["name", "images", "formControlName", "images"], ["diameter", "32"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click", "disabled"]], template: function CateringItemModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 3)(1, "h2", 4);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, CateringItemModalComponent_Conditional_4_Template, 3, 0, "button", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, CateringItemModalComponent_Conditional_5_Template, 39, 52, "form", 6)(6, CateringItemModalComponent_Conditional_6_Template, 5, 3, "div", 7);
    \u0275\u0275conditionalCreate(7, CateringItemModalComponent_Conditional_7_Template, 4, 4, "footer", 8);
    \u0275\u0275elementStart(8, "mat-autocomplete", null, 0);
    \u0275\u0275repeaterCreate(10, CateringItemModalComponent_For_11_Template, 2, 2, "mat-option", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-autocomplete", null, 1);
    \u0275\u0275repeaterCreate(14, CateringItemModalComponent_For_15_Template, 3, 3, "mat-option", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, ctx.item.id ? "CATERING.ITEM_EDIT" : "CATERING.ITEM_NEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form && !ctx.loading ? 5 : 6);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.categories);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.caterers);
  }
}, dependencies: [
  IconComponent,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  MatAutocompleteModule,
  MatAutocomplete,
  MatOption,
  MatAutocompleteTrigger,
  MatDialogModule,
  MatDialogClose,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatFormFieldModule,
  MatFormField,
  MatError,
  MatInputModule,
  MatInput,
  CounterComponent,
  ImageListFieldComponent,
  SettingsToggleComponent,
  MatChipsModule,
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NumberValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  MinValidator,
  FormGroupDirective,
  FormControlName,
  FormsModule,
  NgModel
], styles: ["\n\n[list][_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  margin: 0.5rem;\n}\n/*# sourceMappingURL=catering-item-modal.component.css.map */"] });
var CateringItemModalComponent = _CateringItemModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringItemModalComponent, [{
    type: Component,
    args: [{ selector: "catering-item-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{
                    (item.id ? 'CATERING.ITEM_EDIT' : 'CATERING.ITEM_NEW')
                        | translate
                }}
            </h2>
            @if (!loading) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (form && !loading) {
            <form
                class="max-h-[65vh] max-w-xl overflow-auto px-4"
                [formGroup]="form"
            >
                <div class="flex w-full items-center space-x-2">
                    @if (form.controls.name) {
                        <div class="flex flex-1 flex-col">
                            <label
                                for="title"
                                [class.error]="
                                    form.controls.name.invalid &&
                                    form.controls.name.touched
                                "
                            >
                                {{ 'FORM.NAME' | translate }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="name"
                                    [placeholder]="'FORM.NAME' | translate"
                                    formControlName="name"
                                />
                                <mat-error>{{
                                    'FORM.NAME_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="flex w-full items-center space-x-2">
                    @if (form.controls.category) {
                        <div class="flex flex-1 flex-col">
                            <label
                                for="category"
                                [class.error]="
                                    form.controls.category.invalid &&
                                    form.controls.category.touched
                                "
                            >
                                {{ 'COMMON.CATEGORY' | translate
                                }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="category"
                                    [placeholder]="
                                        'COMMON.CATEGORY' | translate
                                    "
                                    formControlName="category"
                                    [matAutocomplete]="auto"
                                />
                                <mat-error>{{
                                    'COMMON.CATEGORY_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    @if (form.controls.caterer) {
                        <div class="flex flex-1 flex-col">
                            <label for="caterer">
                                {{ 'CATERING.CATERER' | translate
                                }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="caterer"
                                    [placeholder]="
                                        'CATERING.CATERER' | translate
                                    "
                                    formControlName="caterer"
                                    [matAutocomplete]="caterer_auto"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="flex space-x-4">
                    @if (form.controls.unit_price) {
                        <div class="flex flex-1 flex-col">
                            <label
                                for="title"
                                [class.error]="
                                    form.controls.unit_price.invalid &&
                                    form.controls.unit_price.touched
                                "
                            >
                                {{ 'CATERING.ITEM_PRICE' | translate
                                }}<span>*</span>
                            </label>
                            <a-counter
                                formControlName="unit_price"
                                [min]="0"
                                [max]="100000"
                                [step]="10"
                                [render_fn]="renderPrice"
                            ></a-counter>
                        </div>
                    }
                    <div class="flex flex-1 items-center py-4">
                        <settings-toggle
                            class="w-full"
                            [name]="'CATERING.ITEM_POINTS' | translate"
                            formControlName="accept_points"
                        >
                        </settings-toggle>
                    </div>
                </div>
                <div class="mb-4 space-y-2">
                    <label class="w-24 min-w-0 flex-1">{{
                        'CATERING.ITEM_DISCOUNT' | translate
                    }}</label>
                    <div class="max-w-[calc(50%-0.5rem)]">
                        <a-counter
                            formControlName="discount_cap"
                            [min]="0"
                            [max]="100"
                            [step]="5"
                            [render_fn]="renderPercent"
                        ></a-counter>
                    </div>
                </div>
                @if (form.controls.description) {
                    <div class="flex flex-col">
                        <label for="description">{{
                            'COMMON.DESCRIPTION' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                name="description"
                                [placeholder]="'COMMON.DESCRIPTION' | translate"
                                formControlName="description"
                            ></textarea>
                        </mat-form-field>
                    </div>
                }
                @if (form.controls.tags) {
                    <div class="flex flex-col">
                        <label
                            for="tags"
                            [class.error]="
                                form.controls.tags.invalid &&
                                form.controls.tags.touched
                            "
                        >
                            {{ 'COMMON.TAGS' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-chip-grid #chipList aria-label="Item Tags">
                                @for (item of tag_list; track item) {
                                    <mat-chip-row (removed)="removeTag(item)">
                                        {{ item }}
                                        <button
                                            matChipRemove
                                            [attr.aria-label]="
                                                'COMMON.REMOVE_ITEM'
                                                    | translate: { item: item }
                                            "
                                        >
                                            <icon>cancel</icon>
                                        </button>
                                    </mat-chip-row>
                                }
                            </mat-chip-grid>
                            <input
                                name="tags"
                                placeholder="Item tags e.g. Gluten Free, Vegan etc."
                                [matChipInputFor]="chipList"
                                [matChipInputSeparatorKeyCodes]="separators"
                                [matChipInputAddOnBlur]="true"
                                (matChipInputTokenEnd)="addTag($event)"
                            />
                        </mat-form-field>
                    </div>
                }
                <label>{{ 'CATERING.TAGS' | translate }}</label>
                <div class="-mx-2 flex flex-wrap items-center pb-2" list>
                    <settings-toggle
                        class="min-w-[40%] flex-1 p-2"
                        [name]="'CATERING.TAG_GLUTEN_FREE' | translate"
                        [ngModel]="hasTag('Gluten Free')"
                        (ngModelChange)="
                            $event
                                ? addTag($any({ value: 'Gluten Free' }))
                                : removeTag('Gluten Free')
                        "
                        [ngModelOptions]="{ standalone: true }"
                    >
                    </settings-toggle>
                    <settings-toggle
                        class="min-w-[40%] flex-1 p-2"
                        [name]="'CATERING.TAG_VEGAN' | translate"
                        [ngModel]="hasTag('Vegan')"
                        (ngModelChange)="
                            $event
                                ? addTag($any({ value: 'Vegan' }))
                                : removeTag('Vegan')
                        "
                        [ngModelOptions]="{ standalone: true }"
                    >
                    </settings-toggle>
                    <settings-toggle
                        class="min-w-[40%] flex-1 p-2"
                        [name]="'CATERING.TAG_VEGETARIAN' | translate"
                        [ngModel]="hasTag('Vegetarian')"
                        (ngModelChange)="
                            $event
                                ? addTag($any({ value: 'Vegetarian' }))
                                : removeTag('Vegetarian')
                        "
                        [ngModelOptions]="{ standalone: true }"
                    >
                    </settings-toggle>
                    <settings-toggle
                        class="min-w-[40%] flex-1 p-2"
                        [name]="'CATERING.TAG_DAIRY' | translate"
                        [ngModel]="hasTag('Contains Dairy')"
                        (ngModelChange)="
                            $event
                                ? addTag($any({ value: 'Contains Dairy' }))
                                : removeTag('Contains Dairy')
                        "
                        [ngModelOptions]="{ standalone: true }"
                    >
                    </settings-toggle>
                    <settings-toggle
                        class="w-1/2 min-w-[40%] p-2"
                        [name]="'CATERING.TAG_NUTS' | translate"
                        [ngModel]="hasTag('Contains Nuts')"
                        (ngModelChange)="
                            $event
                                ? addTag($any({ value: 'Contains Nuts' }))
                                : removeTag('Contains Nuts')
                        "
                        [ngModelOptions]="{ standalone: true }"
                    >
                    </settings-toggle>
                </div>
                <div class="flex flex-col space-y-2 mb-4">
                    <label for="refund-lead-days">Refund Lead Time (days)</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            type="number"
                            name="refund-lead-days"
                            placeholder="Days before event for refund cutoff"
                            formControlName="refund_lead_days"
                            [min]="0"
                        />
                    </mat-form-field>
                </div>
                @if (form.controls.images) {
                    <div class="flex flex-col">
                        <label for="images">{{
                            'COMMON.IMAGES' | translate
                        }}</label>
                        <image-list-field
                            name="images"
                            formControlName="images"
                        ></image-list-field>
                    </div>
                }
            </form>
        } @else {
            <div class="flex w-64 flex-col items-center space-y-2 p-8">
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ 'CATERING.ITEM_SAVING' | translate }}</p>
            </div>
        }
        @if (!loading) {
            <footer
                class="border-base-200 flex items-center justify-end border-t border-solid px-4 py-2"
            >
                <button
                    btn
                    matRipple
                    class="w-32"
                    [disabled]="!form.dirty"
                    (click)="saveChanges()"
                >
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
        <mat-autocomplete #auto="matAutocomplete">
            @for (option of categories; track option) {
                <mat-option [value]="option">
                    {{ option }}
                </mat-option>
            }
        </mat-autocomplete>
        <mat-autocomplete #caterer_auto="matAutocomplete">
            @for (option of caterers; track option) {
                <mat-option [value]="option">
                    {{ option }}
                    @if (!option) {
                        <i>{{ 'CATERING.CATERER_EMPTY' | translate }}</i>
                    }
                </mat-option>
            }
        </mat-autocomplete>
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatAutocompleteModule,
      MatDialogModule,
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatInputModule,
      CounterComponent,
      ImageListFieldComponent,
      SettingsToggleComponent,
      MatChipsModule,
      ReactiveFormsModule,
      FormsModule
    ], styles: ["/* angular:styles/component:css;0071b448c67ddef1a7c8d6ade3c25c1198c30917cef31717a0289d95812c8939;/home/runner/work/user-interfaces/user-interfaces/libs/catering/src/lib/catering-item-modal.component.ts */\n[list] mat-checkbox {\n  margin: 0.5rem;\n}\n/*# sourceMappingURL=catering-item-modal.component.css.map */\n"] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringItemModalComponent, { className: "CateringItemModalComponent", filePath: "libs/catering/src/lib/catering-item-modal.component.ts", lineNumber: 381 });
})();

// libs/catering/src/lib/catering-option-modal.component.ts
function CateringItemOptionModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function CateringItemOptionModalComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 11);
    \u0275\u0275element(8, "input", 12);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementStart(10, "mat-error");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.controls.name.invalid && ctx_r0.form.controls.name.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "FORM.NAME"));
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 7, "FORM.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 9, "FORM.NAME_REQUIRED"));
  }
}
function CateringItemOptionModalComponent_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 11);
    \u0275\u0275element(8, "input", 14);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementStart(10, "mat-error");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    const auto_r2 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.controls.group.invalid && ctx_r0.form.controls.group.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "COMMON.TYPE"));
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 8, "CATERING.ITEM_OPTION_TYPE_PLACEHOLDER"))("matAutocomplete", auto_r2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, "CATERING.ITEM_OPTION_TYPE_REQUIRED"));
  }
}
function CateringItemOptionModalComponent_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "settings-toggle", 15);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("name", \u0275\u0275pipeBind1(2, 1, "CATERING.ITEM_OPTION_SELECT_MULTIPLE"));
  }
}
function CateringItemOptionModalComponent_Conditional_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 11);
    \u0275\u0275element(5, "input", 16);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "CATERING.ITEM_PRICE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "CATERING.ITEM_PRICE"));
  }
}
function CateringItemOptionModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 4);
    \u0275\u0275conditionalCreate(1, CateringItemOptionModalComponent_Conditional_5_Conditional_1_Template, 13, 11, "div", 8);
    \u0275\u0275conditionalCreate(2, CateringItemOptionModalComponent_Conditional_5_Conditional_2_Template, 13, 12, "div", 8);
    \u0275\u0275conditionalCreate(3, CateringItemOptionModalComponent_Conditional_5_Conditional_3_Template, 3, 3, "div", 9);
    \u0275\u0275conditionalCreate(4, CateringItemOptionModalComponent_Conditional_5_Conditional_4_Template, 7, 6, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.controls.name ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.controls.group ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.controls.multiple ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.controls.unit_price ? 4 : -1);
  }
}
function CateringItemOptionModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "mat-spinner", 17);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "CATREING.ITEM_OPTION_SAVING"));
  }
}
function CateringItemOptionModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 6)(1, "button", 18);
    \u0275\u0275listener("click", function CateringItemOptionModalComponent_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveChanges());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.form.dirty);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.SAVE"), " ");
  }
}
function CateringItemOptionModalComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    \u0275\u0275property("value", option_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r4, " ");
  }
}
var _CateringItemOptionModalComponent = class _CateringItemOptionModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this.event = new EventEmitter();
    this.form = new FormGroup({
      name: new FormControl(this.option.name || "", [Validators.required]),
      group: new FormControl(this.option.group || "", [Validators.required]),
      unit_price: new FormControl(this.option.unit_price),
      multiple: new FormControl(!!this.option.multiple, [])
    });
    this.loading = false;
  }
  /** Current item details */
  get option() {
    return this._data.option;
  }
  /** List of available categories */
  get types() {
    return this._data.types || [];
  }
  saveChanges() {
    this.loading = true;
    const new_option = __spreadValues(__spreadProps(__spreadValues({}, this.option), {
      id: this.option.id || `option-${randomInt(99999999)}`
    }), this.form.value);
    this.event.emit({
      reason: "done",
      metadata: {
        item: new CateringItem(__spreadProps(__spreadValues({}, this._data.parent), {
          options: this._data.parent.options.filter((i) => i.id !== new_option.id).concat([new_option])
        }))
      }
    });
  }
};
_CateringItemOptionModalComponent.\u0275fac = function CateringItemOptionModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringItemOptionModalComponent)();
};
_CateringItemOptionModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringItemOptionModalComponent, selectors: [["catering-option-modal"]], outputs: { event: "event" }, decls: 12, vars: 6, consts: [["auto", "matAutocomplete"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "max-h-[65vh]", "w-md", "overflow-auto", "px-4", 3, "formGroup"], ["loading", "", 1, "flex", "w-64", "flex-col", "items-center", "space-y-2", "p-8"], [1, "border-base-200", "flex", "items-center", "justify-end", "border-t", "border-solid", "px-4", "py-2"], [3, "value"], [1, "flex", "flex-col"], [1, "mb-4", "flex", "flex-col"], ["for", "title"], ["appearance", "outline"], ["matInput", "", "name", "name", "formControlName", "name", 3, "placeholder"], ["for", "group"], ["matInput", "", "name", "group", "formControlName", "group", 3, "placeholder", "matAutocomplete"], ["formControlName", "multiple", 3, "name"], ["matInput", "", "name", "unit-price", "type", "number", "formControlName", "unit_price", 3, "placeholder"], ["diameter", "32"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click", "disabled"]], template: function CateringItemOptionModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 1)(1, "h2", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, CateringItemOptionModalComponent_Conditional_4_Template, 3, 0, "button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, CateringItemOptionModalComponent_Conditional_5_Template, 5, 5, "form", 4)(6, CateringItemOptionModalComponent_Conditional_6_Template, 5, 3, "div", 5);
    \u0275\u0275conditionalCreate(7, CateringItemOptionModalComponent_Conditional_7_Template, 4, 4, "footer", 6);
    \u0275\u0275elementStart(8, "mat-autocomplete", null, 0);
    \u0275\u0275repeaterCreate(10, CateringItemOptionModalComponent_For_11_Template, 2, 2, "mat-option", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, ctx.option.id ? "CATERING.ITEM_OPTION_EDIT" : "CATERING.ITEM_OPTION_NEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form && !ctx.loading ? 5 : 6);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.types);
  }
}, dependencies: [
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatAutocompleteModule,
  MatAutocomplete,
  MatOption,
  MatAutocompleteTrigger,
  MatFormFieldModule,
  MatFormField,
  MatError,
  MatInputModule,
  MatInput,
  SettingsToggleComponent,
  MatDialogModule,
  MatDialogClose,
  IconComponent,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NumberValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName
], encapsulation: 2 });
var CateringItemOptionModalComponent = _CateringItemOptionModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringItemOptionModalComponent, [{
    type: Component,
    args: [{ selector: "catering-option-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{
                    (option.id
                        ? 'CATERING.ITEM_OPTION_EDIT'
                        : 'CATERING.ITEM_OPTION_NEW'
                    ) | translate
                }}
            </h2>
            @if (!loading) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (form && !loading) {
            <form
                class="max-h-[65vh] w-md overflow-auto px-4"
                [formGroup]="form"
            >
                @if (form.controls.name) {
                    <div class="flex flex-col">
                        <label
                            for="title"
                            [class.error]="
                                form.controls.name.invalid &&
                                form.controls.name.touched
                            "
                        >
                            {{ 'FORM.NAME' | translate }}<span>*</span>:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="name"
                                [placeholder]="'FORM.NAME' | translate"
                                formControlName="name"
                            />
                            <mat-error>{{
                                'FORM.NAME_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form.controls.group) {
                    <div class="flex flex-col">
                        <label
                            for="group"
                            [class.error]="
                                form.controls.group.invalid &&
                                form.controls.group.touched
                            "
                        >
                            {{ 'COMMON.TYPE' | translate }}<span>*</span>:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="group"
                                [placeholder]="
                                    'CATERING.ITEM_OPTION_TYPE_PLACEHOLDER'
                                        | translate
                                "
                                formControlName="group"
                                [matAutocomplete]="auto"
                            />
                            <mat-error>{{
                                'CATERING.ITEM_OPTION_TYPE_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form.controls.multiple) {
                    <div class="mb-4 flex flex-col">
                        <settings-toggle
                            [name]="
                                'CATERING.ITEM_OPTION_SELECT_MULTIPLE'
                                    | translate
                            "
                            formControlName="multiple"
                        >
                        </settings-toggle>
                    </div>
                }
                @if (form.controls.unit_price) {
                    <div class="flex flex-col">
                        <label for="title">{{
                            'CATERING.ITEM_PRICE' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="unit-price"
                                type="number"
                                [placeholder]="
                                    'CATERING.ITEM_PRICE' | translate
                                "
                                formControlName="unit_price"
                            />
                        </mat-form-field>
                    </div>
                }
            </form>
        } @else {
            <div loading class="flex w-64 flex-col items-center space-y-2 p-8">
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ 'CATREING.ITEM_OPTION_SAVING' | translate }}</p>
            </div>
        }
        @if (!loading) {
            <footer
                class="border-base-200 flex items-center justify-end border-t border-solid px-4 py-2"
            >
                <button
                    btn
                    matRipple
                    class="w-32"
                    [disabled]="!form.dirty"
                    (click)="saveChanges()"
                >
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
        <mat-autocomplete #auto="matAutocomplete">
            @for (option of types; track option) {
                <mat-option [value]="option">
                    {{ option }}
                </mat-option>
            }
        </mat-autocomplete>
    `, imports: [
      TranslatePipe,
      MatRippleModule,
      MatProgressSpinnerModule,
      MatAutocompleteModule,
      MatFormFieldModule,
      MatInputModule,
      SettingsToggleComponent,
      MatDialogModule,
      IconComponent,
      ReactiveFormsModule
    ] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringItemOptionModalComponent, { className: "CateringItemOptionModalComponent", filePath: "libs/catering/src/lib/catering-option-modal.component.ts", lineNumber: 178 });
})();

// libs/catering/src/lib/utilities.ts
var RULE_REQUESTS = {};
function getCateringRulesForZone(zone_id, fresh = false) {
  if (!zone_id)
    return of([]);
  if (!RULE_REQUESTS[zone_id] || fresh)
    RULE_REQUESTS[zone_id] = nc(zone_id, "catering_config").pipe(map((_) => _.details instanceof Array ? _.details : []), catchError((e) => of([])));
  return RULE_REQUESTS[zone_id];
}
function cateringItemAvailable(item, rules, event) {
  let is_available = true;
  const now = Date.now();
  for (const rule of rules) {
    if (item.category === rule.name || item.tags.includes(rule.name) || event.resources.find((_) => _.zones.includes(rule.name)) || event.space?.zones.includes(rule.name) || rule.name === "*") {
      let matches = 0;
      for (const [type, value] of rule.rules) {
        const date = new Date(event.date);
        const v = typeof value === "string" ? stringToMinutes(value) : +value * 60;
        switch (type) {
          case "is_before":
            matches += isBefore(now, subMinutes(date, v)) ? 1 : 0;
            break;
          case "within_hours":
            matches += isAfter(now, subMinutes(date, v)) ? 1 : 0;
            break;
          case "after_hour":
            matches += isAfter(date, setHours(date, v / 60)) ? 1 : 0;
            break;
          case "before_hour":
            matches += isBefore(date, setHours(date, v / 60)) ? 1 : 0;
            break;
          case "min_length":
            matches += event.duration >= v ? 1 : 0;
            break;
          case "max_length":
            matches += event.duration <= v ? 1 : 0;
            break;
          case "visitor_type":
            matches += event.ext("visitor_type") === value ? 1 : 0;
            break;
          default:
            matches += 1;
        }
      }
      is_available = matches >= rule.rules.length;
    }
    if (!is_available)
      return false;
  }
  return is_available;
}

// libs/catering/src/lib/catering-order-modal.component.ts
var _c02 = () => ({});
var _c12 = (a0) => ({ count: a0 });
function CateringOrderModalComponent_Conditional_0_Conditional_1_For_2_Conditional_0_For_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CATERING.ITEM_OPTION_AVAILABLE"), " ");
  }
}
function CateringOrderModalComponent_Conditional_0_Conditional_1_For_2_Conditional_0_For_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a-counter", 11);
    \u0275\u0275listener("ngModelChange", function CateringOrderModalComponent_Conditional_0_Conditional_1_For_2_Conditional_0_For_3_Conditional_8_Template_a_counter_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const item_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.updateItemQuantity(item_r2, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngModel", item_r2.quantity);
  }
}
function CateringOrderModalComponent_Conditional_0_Conditional_1_For_2_Conditional_0_For_3_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 12)(2, "button", 13)(3, "icon");
    \u0275\u0275text(4, "remove");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 15);
    \u0275\u0275listener("click", function CateringOrderModalComponent_Conditional_0_Conditional_1_For_2_Conditional_0_For_3_Conditional_9_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const item_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.addItem(item_r2));
    });
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9, "add");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", item_r2.quantity ? "Items with options must be removed from order confirmation page" : "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r2.quantity, " ");
  }
}
function CateringOrderModalComponent_Conditional_0_Conditional_1_For_2_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, CateringOrderModalComponent_Conditional_0_Conditional_1_For_2_Conditional_0_For_3_Conditional_4_Template, 3, 3, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 8);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, CateringOrderModalComponent_Conditional_0_Conditional_1_For_2_Conditional_0_For_3_Conditional_8_Template, 1, 1, "a-counter", 9);
    \u0275\u0275conditionalCreate(9, CateringOrderModalComponent_Conditional_0_Conditional_1_For_2_Conditional_0_For_3_Conditional_9_Template, 10, 3, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.options.length ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 5, item_r2.unit_price / 100, ctx_r2.code), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!item_r2.options.length ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.options.length ? 9 : -1);
  }
}
function CateringOrderModalComponent_Conditional_0_Conditional_1_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-tab", 3)(1, "div", 4);
    \u0275\u0275repeaterCreate(2, CateringOrderModalComponent_Conditional_0_Conditional_1_For_2_Conditional_0_For_3_Template, 10, 8, "div", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", cat_r5);
    \u0275\u0275advance(2);
    \u0275\u0275repeater((ctx_r2.menu_items || \u0275\u0275pureFunction0(1, _c02))[cat_r5]);
  }
}
function CateringOrderModalComponent_Conditional_0_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CateringOrderModalComponent_Conditional_0_Conditional_1_For_2_Conditional_0_Template, 4, 2, "mat-tab", 3);
  }
  if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional((ctx_r2.menu_items || \u0275\u0275pureFunction0(1, _c02))[cat_r5].length ? 0 : -1);
  }
}
function CateringOrderModalComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-tab-group");
    \u0275\u0275repeaterCreate(1, CateringOrderModalComponent_Conditional_0_Conditional_1_For_2_Template, 1, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.categories);
  }
}
function CateringOrderModalComponent_Conditional_0_Conditional_2_For_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("matTooltip", ctx_r2.optionsFor(item_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, "CATERING.ORDERS_SELECTED", \u0275\u0275pureFunction1(5, _c12, item_r7.options.length)), " ");
  }
}
function CateringOrderModalComponent_Conditional_0_Conditional_2_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, CateringOrderModalComponent_Conditional_0_Conditional_2_For_6_Conditional_4_Template, 3, 7, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 8);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a-counter", 18);
    \u0275\u0275listener("ngModelChange", function CateringOrderModalComponent_Conditional_0_Conditional_2_For_6_Template_a_counter_ngModelChange_8_listener($event) {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateItemQuantity(item_r7, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r7.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r7.options.length ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 4, item_r7.total_cost / 100, ctx_r2.code), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", item_r7.quantity);
  }
}
function CateringOrderModalComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 16)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275repeaterCreate(5, CateringOrderModalComponent_Conditional_0_Conditional_2_For_6_Template, 9, 7, "div", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "CATERING.ORDERS_CONFIRM"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.order.items);
  }
}
function CateringOrderModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, CateringOrderModalComponent_Conditional_0_Conditional_1_Template, 3, 0, "mat-tab-group")(2, CateringOrderModalComponent_Conditional_0_Conditional_2_Template, 7, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.show_order_details ? 1 : 2);
  }
}
function CateringOrderModalComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "mat-spinner", 19);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.loading);
  }
}
function CateringOrderModalComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 21);
    \u0275\u0275listener("click", function CateringOrderModalComponent_Conditional_2_Conditional_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.show_order_details = true);
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "COMMON.CANCEL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.order.item_count);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "COMMON.CONFIRM"), " ");
  }
}
function CateringOrderModalComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function CateringOrderModalComponent_Conditional_2_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.show_order_details = false);
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 23);
    \u0275\u0275listener("click", function CateringOrderModalComponent_Conditional_2_Conditional_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.saveOrder());
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.BACK"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "CATERING.ORDERS_SAVE"), " ");
  }
}
function CateringOrderModalComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "footer", 2);
    \u0275\u0275conditionalCreate(1, CateringOrderModalComponent_Conditional_2_Conditional_1_Template, 6, 7)(2, CateringOrderModalComponent_Conditional_2_Conditional_2_Template, 6, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.show_order_details ? 1 : 2);
  }
}
var _CateringOrderModalComponent = class _CateringOrderModalComponent extends AsyncHandler {
  get code() {
    return this._org.currency_code;
  }
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._data = inject(MAT_DIALOG_DATA);
    this.event = new EventEmitter();
    this.loading = "";
    this.menu_items = {};
    this.categories = [];
    this.loading = i18n("CATERING.MENU_LOADING");
  }
  async ngOnInit() {
    this.loading = i18n("CATERING.MENU_LOADING");
    this.order = new CateringOrder(this._data.order);
    this.rules = await this._data.getCateringConfig(this.order.event?.space?.level?.parent_id);
    this._data.menu.subscribe((list) => {
      this.loading = "Loading menu...";
      const categories = unique(list.map((item) => item.category));
      const map2 = {};
      for (const cat of categories) {
        map2[cat] = list.filter((item) => {
          return item.category === cat && cateringItemAvailable(item, this.rules, this.order.event);
        });
      }
      this.categories = categories;
      this.menu_items = map2;
      this.updateMenuQuantities();
      this.timeout("clear_loading", () => this.loading = "", 1e3);
    });
  }
  addItem(item, choose_options = true) {
    const old_item = this.order.items.find((itm) => itm.id === item.id && itm.options.length === itm.options.reduce((c, o) => c + (item.options.find((opt) => o.id === opt.id) ? 1 : 0), 0));
    if (choose_options && item.options?.length) {
      this._data.selectOptions(item.options).then((options) => {
        const new_item = new CateringItem(__spreadProps(__spreadValues({}, item), { options }));
        this.addItem(new_item, false);
      });
    } else if (old_item) {
      this.order = new CateringOrder(__spreadProps(__spreadValues({}, this.order), {
        items: this.order.items.filter((i) => !(i.id === item.id && i.options_string === item.options_string)).concat([
          new CateringItem(__spreadProps(__spreadValues({}, item), {
            quantity: old_item.quantity + 1
          }))
        ])
      }));
    } else {
      this.order = new CateringOrder(__spreadProps(__spreadValues({}, this.order), {
        items: this.order.items.concat([
          new CateringItem(__spreadProps(__spreadValues({}, item), { quantity: 1 }))
        ])
      }));
    }
    this.updateMenuQuantities();
  }
  removeItem(item) {
    this.order = new CateringOrder(__spreadProps(__spreadValues({}, this.order), {
      items: this.order.items.filter((_) => _.id !== item.id && _.options_string === item.options_string)
    }));
    this.updateMenuQuantities();
  }
  updateItemQuantity(item, amount) {
    const old_item = this.order.items.find((itm) => itm.id === item.id && itm.options_string === item.options_string);
    let items = [...this.order.items];
    if (old_item) {
      items = this.order.items.filter((i) => !(i.id === item.id && i.options_string === item.options_string)).concat([new CateringItem(__spreadProps(__spreadValues({}, item), { quantity: amount }))]);
    } else {
      items = this.order.items.concat([
        new CateringItem(__spreadProps(__spreadValues({}, item), { quantity: amount }))
      ]);
    }
    items.sort((a, b) => a.name.localeCompare(b.name));
    this.order = new CateringOrder(__spreadProps(__spreadValues({}, this.order), {
      items
    }));
    this.updateMenuQuantities();
  }
  updateMenuQuantities() {
    for (const cat in this.menu_items) {
      for (const item of this.menu_items[cat]) {
        item.quantity = this.order.items.reduce((c, i) => i.id === item.id ? c + i.quantity : c, 0);
      }
    }
  }
  optionsFor(item) {
    return item.options.map((i) => i.name).join("\n");
  }
  saveOrder() {
    this.event.emit({
      reason: "done",
      metadata: { order: this.order }
    });
  }
  confirmOrder() {
    this.show_order_details = true;
  }
};
_CateringOrderModalComponent.\u0275fac = function CateringOrderModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringOrderModalComponent)();
};
_CateringOrderModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringOrderModalComponent, selectors: [["app-catering-order-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 2, consts: [[1, "main", "min-w-[20rem]"], [1, "flex", "w-64", "flex-col", "items-center", "space-y-2", "p-8"], [1, "border-base-200", "flex", "items-center", "justify-center", "space-x-2", "border-t", "p-2"], [3, "label"], [1, "list"], ["item", "", 1, "border-base-200", "flex", "items-center", "border-b", "p-2"], [1, "w-1/2", "flex-1"], [1, "text-xs", "no-underline"], [1, "bg-primary", "mx-2", "rounded-sm", "px-4", "py-2", "text-xs", "font-medium", "text-white"], ["ngDefaultControl", "", 3, "ngModel"], [1, "flex", "items-center"], ["ngDefaultControl", "", 3, "ngModelChange", "ngModel"], [3, "matTooltip"], ["icon", "", "matRipple", "", 3, "disabled"], [1, "count", "flex", "h-12", "w-12", "items-center", "justify-center"], ["icon", "", "matRipple", "", 3, "click"], [1, "h-13"], [1, "text-xs", "underline", 3, "matTooltip"], [3, "ngModelChange", "ngModel"], ["diameter", "32"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse"], ["confirm", "", "btn", "", "matRipple", "", 3, "click", "disabled"], ["matRipple", "", 1, "inverse", 3, "click"], ["save", "", "btn", "", "matRipple", "", 3, "click"]], template: function CateringOrderModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CateringOrderModalComponent_Conditional_0_Template, 3, 1, "div", 0)(1, CateringOrderModalComponent_Conditional_1_Template, 4, 1, "div", 1);
    \u0275\u0275conditionalCreate(2, CateringOrderModalComponent_Conditional_2_Template, 3, 1, "footer", 2);
  }
  if (rf & 2) {
    \u0275\u0275conditional(!ctx.loading ? 0 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading ? 2 : -1);
  }
}, dependencies: [
  CommonModule,
  CurrencyPipe,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  CounterComponent,
  MatTooltipModule,
  MatTooltip,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatTabsModule,
  MatTab,
  MatTabGroup,
  IconComponent,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel
], styles: ["\n\n.list[_ngcontent-%COMP%] {\n  height: 24em;\n  min-width: 32em;\n  max-width: calc(100vw - 1em);\n}\nfooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 12em;\n}\ninput[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding: 1em;\n  border: none;\n  border-radius: 0 !important;\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  outline: none;\n  font-size: 1em;\n}\ninput[_ngcontent-%COMP%]:focus {\n  border: none;\n  border-top: 2px solid var(--secondary);\n  border-bottom: 2px solid var(--secondary);\n  box-shadow: none;\n}\ninput.error[_ngcontent-%COMP%]::placeholder {\n  color: rgba(var(--error), 0.45);\n}\n/*# sourceMappingURL=catering-order-modal.component.css.map */"] });
var CateringOrderModalComponent = _CateringOrderModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringOrderModalComponent, [{
    type: Component,
    args: [{ selector: "app-catering-order-modal", template: `
        @if (!loading) {
            <div class="main min-w-[20rem]">
                @if (!show_order_details) {
                    <mat-tab-group>
                        @for (cat of categories; track cat) {
                            @if ((menu_items || {})[cat].length) {
                                <mat-tab [label]="cat">
                                    <div class="list">
                                        @for (
                                            item of (menu_items || {})[cat];
                                            track item
                                        ) {
                                            <div
                                                item
                                                class="border-base-200 flex items-center border-b p-2"
                                            >
                                                <div class="w-1/2 flex-1">
                                                    <div class="w-1/2 flex-1">
                                                        {{ item.name }}
                                                    </div>
                                                    @if (item.options.length) {
                                                        <div
                                                            class="text-xs no-underline"
                                                        >
                                                            {{
                                                                'CATERING.ITEM_OPTION_AVAILABLE'
                                                                    | translate
                                                            }}
                                                        </div>
                                                    }
                                                </div>
                                                <div
                                                    class="bg-primary mx-2 rounded-sm px-4 py-2 text-xs font-medium text-white"
                                                >
                                                    {{
                                                        item.unit_price / 100
                                                            | currency: code
                                                    }}
                                                </div>
                                                @if (!item.options.length) {
                                                    <a-counter
                                                        ngDefaultControl
                                                        [ngModel]="
                                                            item.quantity
                                                        "
                                                        (ngModelChange)="
                                                            updateItemQuantity(
                                                                item,
                                                                $event
                                                            )
                                                        "
                                                    ></a-counter>
                                                }
                                                @if (item.options.length) {
                                                    <div
                                                        class="flex items-center"
                                                    >
                                                        <div
                                                            [matTooltip]="
                                                                item.quantity
                                                                    ? 'Items with options must be removed from order confirmation page'
                                                                    : ''
                                                            "
                                                        >
                                                            <button
                                                                icon
                                                                matRipple
                                                                [disabled]="
                                                                    true
                                                                "
                                                            >
                                                                <icon
                                                                    >remove</icon
                                                                >
                                                            </button>
                                                        </div>
                                                        <div
                                                            class="count flex h-12 w-12 items-center justify-center"
                                                        >
                                                            {{ item.quantity }}
                                                        </div>
                                                        <button
                                                            icon
                                                            matRipple
                                                            (click)="
                                                                addItem(item)
                                                            "
                                                        >
                                                            <icon>add</icon>
                                                        </button>
                                                    </div>
                                                }
                                            </div>
                                        }
                                    </div>
                                </mat-tab>
                            }
                        }
                    </mat-tab-group>
                } @else {
                    <header class="h-13">
                        <h3>
                            {{ 'CATERING.ORDERS_CONFIRM' | translate }}
                        </h3>
                    </header>
                    <div class="list">
                        @for (item of order.items; track item) {
                            <div
                                item
                                class="border-base-200 flex items-center border-b p-2"
                            >
                                <div class="w-1/2 flex-1">
                                    <div class="w-1/2 flex-1">
                                        {{ item.name }}
                                    </div>
                                    @if (item.options.length) {
                                        <div
                                            class="text-xs underline"
                                            [matTooltip]="optionsFor(item)"
                                        >
                                            {{
                                                'CATERING.ORDERS_SELECTED'
                                                    | translate
                                                        : {
                                                              count: item
                                                                  .options
                                                                  .length,
                                                          }
                                            }}
                                        </div>
                                    }
                                </div>
                                <div
                                    class="bg-primary mx-2 rounded-sm px-4 py-2 text-xs font-medium text-white"
                                >
                                    {{ item.total_cost / 100 | currency: code }}
                                </div>
                                <a-counter
                                    [ngModel]="item.quantity"
                                    (ngModelChange)="
                                        updateItemQuantity(item, $event)
                                    "
                                ></a-counter>
                            </div>
                        }
                    </div>
                }
            </div>
        } @else {
            <div class="flex w-64 flex-col items-center space-y-2 p-8">
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ loading }}</p>
            </div>
        }
        @if (!loading) {
            <footer
                class="border-base-200 flex items-center justify-center space-x-2 border-t p-2"
            >
                @if (!show_order_details) {
                    <button btn matRipple class="inverse" mat-dialog-close>
                        {{ 'COMMON.CANCEL' | translate }}
                    </button>
                    <button
                        confirm
                        btn
                        matRipple
                        [disabled]="!order.item_count"
                        (click)="show_order_details = true"
                    >
                        {{ 'COMMON.CONFIRM' | translate }}
                    </button>
                } @else {
                    <button
                        matRipple
                        class="inverse"
                        (click)="show_order_details = false"
                    >
                        {{ 'COMMON.BACK' | translate }}
                    </button>
                    <button save btn matRipple (click)="saveOrder()">
                        {{ 'CATERING.ORDERS_SAVE' | translate }}
                    </button>
                }
            </footer>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      MatRippleModule,
      CounterComponent,
      MatTooltipModule,
      MatProgressSpinnerModule,
      MatTabsModule,
      IconComponent,
      FormsModule
    ], styles: ["/* angular:styles/component:css;7d71ac32d07cfb60f91ed05953ca21ef9a31d5eb8399e71f0fc2fc5d87a33c02;/home/runner/work/user-interfaces/user-interfaces/libs/catering/src/lib/catering-order-modal.component.ts */\n.list {\n  height: 24em;\n  min-width: 32em;\n  max-width: calc(100vw - 1em);\n}\nfooter button {\n  min-width: 12em;\n}\ninput {\n  position: relative;\n  width: 100%;\n  padding: 1em;\n  border: none;\n  border-radius: 0 !important;\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  outline: none;\n  font-size: 1em;\n}\ninput:focus {\n  border: none;\n  border-top: 2px solid var(--secondary);\n  border-bottom: 2px solid var(--secondary);\n  box-shadow: none;\n}\ninput.error::placeholder {\n  color: rgba(var(--error), 0.45);\n}\n/*# sourceMappingURL=catering-order-modal.component.css.map */\n"] }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringOrderModalComponent, { className: "CateringOrderModalComponent", filePath: "libs/catering/src/lib/catering-order-modal.component.ts", lineNumber: 276 });
})();

// libs/catering/src/lib/catering-order-options-modal.component.ts
function CateringOrderOptionsModalComponent_For_8_Conditional_4_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", \u0275\u0275pipeBind2(2, 1, opt_r4.unit_price / 100, ctx_r2.code), " ");
  }
}
function CateringOrderOptionsModalComponent_For_8_Conditional_4_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-button", 11)(1, "div", 12)(2, "div", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, CateringOrderOptionsModalComponent_For_8_Conditional_4_For_5_Conditional_4_Template, 3, 4, "div", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    \u0275\u0275property("value", opt_r4.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", opt_r4.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(opt_r4.unit_price ? 4 : -1);
  }
}
function CateringOrderOptionsModalComponent_For_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-radio-group", 8);
    \u0275\u0275listener("ngModelChange", function CateringOrderOptionsModalComponent_For_8_Conditional_4_Template_mat_radio_group_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const group_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateGroupOption(group_r2, $event));
    });
    \u0275\u0275elementStart(1, "mat-radio-button", 9)(2, "span", 10);
    \u0275\u0275text(3, "None");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(4, CateringOrderOptionsModalComponent_For_8_Conditional_4_For_5_Template, 5, 3, "mat-radio-button", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275repeater(group_r2 == null ? null : group_r2.options);
  }
}
function CateringOrderOptionsModalComponent_For_8_Conditional_5_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", \u0275\u0275pipeBind2(2, 1, opt_r6.unit_price / 100, ctx_r2.code), " ");
  }
}
function CateringOrderOptionsModalComponent_For_8_Conditional_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 16);
    \u0275\u0275twoWayListener("ngModelChange", function CateringOrderOptionsModalComponent_For_8_Conditional_5_For_1_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const opt_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.option_state[opt_r6.id], $event) || (ctx_r2.option_state[opt_r6.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "div", 12)(2, "div", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, CateringOrderOptionsModalComponent_For_8_Conditional_5_For_1_Conditional_4_Template, 3, 4, "div", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.option_state[opt_r6.id]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", opt_r6.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(opt_r6.unit_price ? 4 : -1);
  }
}
function CateringOrderOptionsModalComponent_For_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CateringOrderOptionsModalComponent_For_8_Conditional_5_For_1_Template, 5, 3, "mat-checkbox", 15, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const group_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(group_r2 == null ? null : group_r2.options);
  }
}
function CateringOrderOptionsModalComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275conditionalCreate(4, CateringOrderOptionsModalComponent_For_8_Conditional_4_Template, 6, 0, "mat-radio-group", 7)(5, CateringOrderOptionsModalComponent_For_8_Conditional_5_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r2 = ctx.$implicit;
    \u0275\u0275attribute("group", group_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", group_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!group_r2.multiple ? 4 : 5);
  }
}
var _CateringOrderOptionsModalComponent = class _CateringOrderOptionsModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this.event = new EventEmitter();
    this.option_state = {};
    this.code = this._data.code;
    const groups = unique(this._data.options.map((i) => i.group || "Other"));
    const group_list = [];
    for (const group of groups) {
      const options = this._data.options.filter((i) => i.group === group);
      group_list.push({
        name: group,
        multiple: !!options.find((i) => i.multiple),
        options
      });
    }
    this.groups = group_list;
  }
  updateGroupOption(group, id) {
    for (const option of group.options) {
      this.option_state[option.id] = option.id === id;
    }
  }
  saveOptions() {
    const options = this._data.options.filter((opt) => this.option_state[opt.id]);
    this.event.emit({ reason: "done", metadata: { options } });
  }
};
_CateringOrderOptionsModalComponent.\u0275fac = function CateringOrderOptionsModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringOrderOptionsModalComponent)();
};
_CateringOrderOptionsModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringOrderOptionsModalComponent, selectors: [["app-catering-options-modal"]], outputs: { event: "event" }, decls: 13, vars: 3, consts: [["icon", "", "mat-dialog-close", ""], [1, "overflow-auto"], [1, "border-base-200", "border-b", "pt-1", "pb-2"], [1, "p-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "p-2", "font-medium", "capitalize"], [1, "flex", "flex-col", "pl-6"], ["aria-label", "Select an option", "ngModel", "", 1, "flex", "flex-col"], ["aria-label", "Select an option", "ngModel", "", 1, "flex", "flex-col", 3, "ngModelChange"], ["value", "", 1, "mx-0", "my-1"], [1, "p-2", "font-medium"], [1, "mx-0", "my-1", 3, "value"], [1, "flex", "items-center", "justify-center"], [1, "w-1/2", "flex-1", "p-2", "font-medium"], [1, "text-xs", "opacity-60"], [3, "ngModel"], [3, "ngModelChange", "ngModel"]], template: function CateringOrderOptionsModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "h3");
    \u0275\u0275text(2, "Select options");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 0)(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "main", 1);
    \u0275\u0275repeaterCreate(7, CateringOrderOptionsModalComponent_For_8_Template, 6, 3, "div", 2, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "footer", 3)(10, "button", 4);
    \u0275\u0275listener("click", function CateringOrderOptionsModalComponent_Template_button_click_10_listener() {
      return ctx.saveOptions();
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx.groups);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 1, "COMMON.SAVE"), " ");
  }
}, dependencies: [
  CommonModule,
  CurrencyPipe,
  MatRippleModule,
  MatRipple,
  TranslatePipe,
  MatCheckboxModule,
  MatCheckbox,
  MatRadioModule,
  MatRadioGroup,
  MatRadioButton,
  MatDialogModule,
  MatDialogClose,
  IconComponent,
  FormsModule,
  NgControlStatus,
  NgModel
], styles: ["\n\nmain[_ngcontent-%COMP%] {\n  min-height: 24em;\n  width: 24rem;\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=catering-order-options-modal.component.css.map */"] });
var CateringOrderOptionsModalComponent = _CateringOrderOptionsModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringOrderOptionsModalComponent, [{
    type: Component,
    args: [{ selector: "app-catering-options-modal", template: `
        <header>
            <h3>Select options</h3>
            <button icon mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="overflow-auto">
            @for (group of groups; track group) {
                <div
                    class="border-base-200 border-b pt-1 pb-2"
                    [attr.group]="group.name"
                >
                    <div class="p-2 font-medium capitalize">
                        {{ group.name }}
                    </div>
                    <div class="flex flex-col pl-6">
                        @if (!group.multiple) {
                            <mat-radio-group
                                class="flex flex-col"
                                aria-label="Select an option"
                                ngModel
                                (ngModelChange)="
                                    updateGroupOption(group, $event)
                                "
                            >
                                <mat-radio-button class="mx-0 my-1" value="">
                                    <span class="p-2 font-medium">None</span>
                                </mat-radio-button>
                                @for (opt of group?.options; track opt) {
                                    <mat-radio-button
                                        class="mx-0 my-1"
                                        [value]="opt.id"
                                    >
                                        <div
                                            class="flex items-center justify-center"
                                        >
                                            <div
                                                class="w-1/2 flex-1 p-2 font-medium"
                                            >
                                                {{ opt.name }}
                                            </div>
                                            @if (opt.unit_price) {
                                                <div class="text-xs opacity-60">
                                                    +{{
                                                        opt.unit_price / 100
                                                            | currency: code
                                                    }}
                                                </div>
                                            }
                                        </div>
                                    </mat-radio-button>
                                }
                            </mat-radio-group>
                        } @else {
                            @for (opt of group?.options; track opt) {
                                <mat-checkbox
                                    [(ngModel)]="option_state[opt.id]"
                                >
                                    <div
                                        class="flex items-center justify-center"
                                    >
                                        <div
                                            class="w-1/2 flex-1 p-2 font-medium"
                                        >
                                            {{ opt.name }}
                                        </div>
                                        @if (opt.unit_price) {
                                            <div class="text-xs opacity-60">
                                                +{{
                                                    opt.unit_price / 100
                                                        | currency: code
                                                }}
                                            </div>
                                        }
                                    </div>
                                </mat-checkbox>
                            }
                        }
                    </div>
                </div>
            }
        </main>
        <footer class="p-2">
            <button btn matRipple class="w-32" (click)="saveOptions()">
                {{ 'COMMON.SAVE' | translate }}
            </button>
        </footer>
    `, imports: [
      CommonModule,
      MatRippleModule,
      TranslatePipe,
      MatCheckboxModule,
      MatRadioModule,
      MatDialogModule,
      IconComponent,
      FormsModule
    ], styles: ["/* angular:styles/component:css;6d0e3900ca0c81c651d39ed0818f526b2939d0b7293a60641300dbf3b88fa642;/home/runner/work/user-interfaces/user-interfaces/libs/catering/src/lib/catering-order-options-modal.component.ts */\nmain {\n  min-height: 24em;\n  width: 24rem;\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=catering-order-options-modal.component.css.map */\n"] }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringOrderOptionsModalComponent, { className: "CateringOrderOptionsModalComponent", filePath: "libs/catering/src/lib/catering-order-options-modal.component.ts", lineNumber: 132 });
})();

// libs/catering/src/lib/catering-state.service.ts
var _CateringStateService = class _CateringStateService extends AsyncHandler {
  get is_editable() {
    return !this.zone || this.zone === this._org.building?.id;
  }
  get categories() {
    const menu = this._menu.getValue();
    return unique(menu.map((i) => i.category));
  }
  get caterer_list() {
    const menu = this._menu.getValue();
    return unique(menu.map((i) => i.caterer));
  }
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this._orders = inject(CateringOrdersService);
    this._updated = new BehaviorSubject(0);
    this._menu = new BehaviorSubject([]);
    this._loading = new BehaviorSubject(false);
    this._currency = new BehaviorSubject("USD");
    this._change = new BehaviorSubject(0);
    this.menu = this._menu.asObservable();
    this.loading = this._loading.asObservable();
    this.currency = this._currency.asObservable();
    this.settings = combineLatest([
      this._org.active_building,
      this._change
    ]).pipe(filter(([_]) => !!_), switchMap(([_]) => nc(_.id, "catering-settings").pipe(catchError((_2) => of({})))), map((_) => _.details || {}), tap((_) => this._settings.post("require_catering_notes", !!_?.require_notes)), shareReplay(1));
    this.charge_codes = this.settings.pipe(map((_) => _.charge_codes || []));
    this.availability = this.settings.pipe(map((_) => _.disabled_rooms || []));
    this.caterers = combineLatest([
      this._menu,
      this._orders.caterers
    ]).pipe(map(([menu_items]) => {
      const provider_groups = this._settings.get("app.catering_provider_groups") || {};
      let provider_list = Object.keys(provider_groups);
      if (!provider_list.length) {
        return unique(menu_items.map((i) => i.caterer)).sort((a, b) => `${a}`.localeCompare(b));
      }
      provider_list = provider_list.filter((caterer) => provider_groups[caterer].find((group) => currentUser().groups.includes(group)));
      provider_list = unique(provider_list);
      provider_list = provider_list.sort((a, b) => `${a}`.localeCompare(b));
      return provider_list;
    }), shareReplay(1));
    this.zone = "";
    this.subscription("building", this._org.active_building.subscribe(async (bld) => {
      if (bld) {
        this._loading.next(true);
        this._menu.next([]);
        const menu = (await this.getCateringForZone(bld.id).catch(() => [])).map((i) => new CateringItem(i));
        this._currency.next(this._settings.get("app.currency") || bld.currency || "USD");
        this._loading.next(false);
        this.timeout("loaded", () => this._menu.next(menu), 1e3);
      }
    }));
  }
  /**
   * Create/Edit catering order
   * @param order Order to manipulate
   */
  async manageCateringOrder(order) {
    const ref = this._dialog.open(CateringOrderModalComponent, {
      data: {
        code: this._currency.getValue(),
        order,
        menu: this.menu,
        loading: this.loading,
        getCateringConfig: (_) => this.getCateringConfig(_),
        selectOptions: (_) => this.selectOptions(_)
      }
    });
    const details = await Promise.race([
      ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
      ref.afterClosed().toPromise()
    ]);
    ref.close();
    return details?.metadata?.order || order;
  }
  async addItem(item = new CateringItem()) {
    const ref = this._dialog.open(CateringItemModalComponent, {
      data: {
        item,
        categories: this.categories,
        caterers: this.caterer_list
      }
    });
    const details = await Promise.race([
      ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
      ref.afterClosed().toPromise()
    ]);
    if (details?.reason !== "done")
      return;
    const menu = this._menu.getValue();
    const index = menu.findIndex((itm) => itm.id === item.id);
    if (index >= 0) {
      menu.splice(index, 1, details.metadata.item);
    } else {
      menu.push(details.metadata.item);
    }
    this.updateMenu(this._org.building.id, menu).then(() => {
      this._menu.next([...menu]);
      ref.close();
    }, () => ref.componentInstance.loading = false);
  }
  updateItem(item) {
    const menu = this._menu.getValue();
    const index = menu.findIndex((itm) => itm.id === item.id);
    if (index >= 0)
      menu.splice(index, 1, item);
    else
      menu.push(item);
    this.updateMenu(this._org.building.id, menu).then(() => this._menu.next([...menu]));
  }
  async addOption(item, option = {}) {
    const types = unique(item.options.map((i) => i.group));
    const ref = this._dialog.open(CateringItemOptionModalComponent, {
      data: {
        parent: item,
        option,
        types
      }
    });
    const details = await Promise.race([
      ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
      ref.afterClosed().toPromise()
    ]);
    if (details?.reason !== "done")
      return;
    const menu = this._menu.getValue();
    const index = menu.findIndex((itm) => itm.id === item.id);
    if (index >= 0) {
      menu.splice(index, 1, details.metadata.item);
    } else {
      menu.push(details.metadata.item);
    }
    this.updateMenu(this._org.building.id, menu).then(() => {
      this._menu.next([...menu]);
      ref.close();
    }, () => ref.componentInstance.loading = false);
  }
  async selectOptions(options) {
    const ref = this._dialog.open(CateringOrderOptionsModalComponent, {
      data: {
        code: this._currency.getValue(),
        options
      }
    });
    const details = await Promise.race([
      ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
      ref.afterClosed().toPromise()
    ]);
    if (details?.reason !== "done")
      return [];
    ref.close();
    return details.metadata.options;
  }
  async deleteItem(item) {
    const details = await openConfirmModal({
      title: i18n("CATERING.ITEM_REMOVE"),
      content: i18n("CATERING.ITEM_REMOVE_MSG", { name: item.name }),
      icon: {
        type: "icon",
        class: "material-symbols-outlined",
        content: "delete"
      }
    }, this._dialog);
    if (details.reason !== "done")
      return;
    details.loading(i18n("CATERING.ITEM_REMOVE_LOADING"));
    const menu = this._menu.getValue().filter((itm) => item.id !== itm.id);
    this.updateMenu(this._org.building.id, menu).then(() => {
      this._menu.next([...menu]);
      notifySuccess(i18n("CATERING.ITEM_REMOVE_SUCCESS"));
      details.close();
    }, (e) => {
      notifyError(i18n("CATERING.ITEM_REMOVE_ERROR", { error: e }));
      details.loading("");
    });
  }
  async deleteOption(item, option) {
    const details = await openConfirmModal({
      title: i18n("CATERING.ITEM_OPTION_REMOVE"),
      content: i18n("CATERING.ITEM_OPTION_REMOVE", {
        name: option.name,
        item: item.name
      }),
      icon: {
        type: "icon",
        class: "material-symbols-outlined",
        content: "delete"
      }
    }, this._dialog);
    if (details.reason !== "done")
      return;
    details.loading(i18n("CATERING.ITEM_OPTION_REMOVE_LOADING"));
    const menu = this._menu.getValue();
    menu.splice(menu.findIndex((itm) => itm.id === item.id), 1, new CateringItem(__spreadProps(__spreadValues({}, item), {
      options: item.options.filter((opt) => opt.id !== option.id)
    })));
    this.updateMenu(this._org.building.id, menu).then(() => {
      this._menu.next([...menu]);
      notifySuccess(i18n("CATERING.ITEM_OPTION_REMOVE_SUCCESS", {
        item: item.name
      }));
      details.close();
    }, () => {
      notifySuccess(i18n("CATERING.ITEM_OPTION_REMOVE_ERROR", {
        item: item.name
      }));
      details.loading("");
    });
  }
  async editConfig() {
    const config = await this.getCateringConfig(this._org.building.id);
    const { require_notes } = await nextValueFrom(this.settings);
    const menu = this._menu.getValue();
    const types = unique(flatten(menu.map((i) => [i.category, ...i.tags])));
    const ref = this._dialog.open(AttachedResourceConfigModalComponent, {
      data: {
        config,
        types,
        require_notes,
        saveNotes: (b) => this.saveSettings({ require_notes: b })
      }
    });
    const details = await Promise.race([
      ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
      ref.afterClosed().toPromise()
    ]);
    if (details?.reason !== "done")
      return;
    this.updateConfig(this._org.building.id, details.metadata).then(() => ref.close(), () => ref.componentInstance.loading = false);
  }
  async importMenu() {
    const ref = this._dialog.open(CateringImportMenuModalComponent);
    const details = await Promise.race([
      ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
      ref.afterClosed().toPromise()
    ]);
    if (details?.reason !== "done")
      return;
    ref.componentInstance.loading = i18n("CATERING.MENU_IMPORT_LOADING");
    const menu = this._menu.getValue();
    const bld = this._org.building;
    const updated_menu = unique(details.metadata.concat(menu), "id");
    await this.updateMenu(bld.id, updated_menu).catch((_) => {
      notifyError(i18n("CATERING.MENU_IMPORT_ERROR"));
      ref.close();
      throw _;
    });
    notifySuccess(i18n("CATERING.MENU_IMPORT_SUCCESS", {
      count: details.metadata.length
    }));
    ref.close();
  }
  updateMenu(zone_id, menu) {
    return lastValueFrom(rc(zone_id, {
      id: zone_id,
      name: "catering",
      details: menu,
      description: `Catering menu for ${zone_id}`
    }));
  }
  async saveSettings(settings) {
    const old_settings = await nextValueFrom(this.settings);
    const result = await lastValueFrom(rc(this._org.building.id, {
      id: this._org.building.id,
      name: "catering-settings",
      details: __spreadValues(__spreadValues({}, old_settings), settings),
      description: `Catering settings for ${this._org.building.id}`
    }));
    this._change.next(Date.now());
    return result;
  }
  async getCateringForZone(zone_id) {
    const menu = (await nc(zone_id, "catering").toPromise()).details;
    return menu instanceof Array ? menu : [];
  }
  async getCateringConfig(zone_id = this._org.building.id) {
    const rules = (await nc(zone_id, "catering_config").toPromise()).details;
    return rules instanceof Array ? rules : [];
  }
  updateConfig(zone_id, config) {
    return rc(zone_id, {
      id: zone_id,
      name: "catering_config",
      details: config,
      description: `Catering menu config for ${zone_id}`
    }).toPromise();
  }
  addItemToOrder(order, new_item) {
    let items = order.items;
    const match = items.find((item) => item.id === new_item.id && new_item.options?.length === item.options?.reduce((c, o) => c + (new_item.options.find((opt) => o.id === opt.id) ? 1 : 0), 0));
    match ? match.quantity += 1 : items = items.concat([
      new CateringItem(__spreadProps(__spreadValues({}, new_item), { quantity: 1 }))
    ]);
    const new_order = new CateringOrder(__spreadProps(__spreadValues({}, order), {
      items,
      event: null
    }));
    return new_order;
  }
};
_CateringStateService.\u0275fac = function CateringStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringStateService)();
};
_CateringStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CateringStateService, factory: _CateringStateService.\u0275fac, providedIn: "root" });
var CateringStateService = _CateringStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/catering/src/lib/catering-menu.component.ts
var _c03 = (a0) => ({ key: "active", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c13 = (a0) => ({ key: "name", name: a0 });
var _c2 = (a0) => ({ key: "category", name: a0 });
var _c3 = (a0, a1) => ({ key: "caterer", name: a0, show: a1 });
var _c4 = (a0, a1) => ({ key: "unit_price", name: a0, content: a1, size: "6rem" });
var _c5 = (a0) => ({ key: "actions", name: " ", content: a0, size: "6.5rem", sortable: false });
var _c6 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function CateringMenuComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 6);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("ngModelChange", function CateringMenuComponent_ng_template_6_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const row_r2 = \u0275\u0275restoreView(_r1).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setEnabled(row_r2, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "CATERING.ORDER_ALLOW"))("ngModel", ctx_r2.isEnabled(row_r2));
  }
}
function CateringMenuComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, data_r4 / 100, ctx_r2.currency_code), " ");
  }
}
function CateringMenuComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "button", 9)(2, "icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 4)(6, "button", 10);
    \u0275\u0275listener("click", function CateringMenuComponent_ng_template_10_Template_button_click_6_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addOption(row_r6));
    });
    \u0275\u0275elementStart(7, "div", 11)(8, "icon");
    \u0275\u0275text(9, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "button", 10);
    \u0275\u0275listener("click", function CateringMenuComponent_ng_template_10_Template_button_click_13_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editItem(row_r6));
    });
    \u0275\u0275elementStart(14, "div", 11)(15, "icon");
    \u0275\u0275text(16, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "button", 10);
    \u0275\u0275listener("click", function CateringMenuComponent_ng_template_10_Template_button_click_20_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeItem(row_r6));
    });
    \u0275\u0275elementStart(21, "div", 11)(22, "icon", 12);
    \u0275\u0275text(23, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "button", 13);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275listener("click", function CateringMenuComponent_ng_template_10_Template_button_click_27_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.show_children[row_r6.id] = !ctx_r2.show_children[row_r6.id]);
    });
    \u0275\u0275elementStart(29, "icon");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    const menu_r7 = \u0275\u0275reference(5);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-0", !ctx_r2.can_edit);
    \u0275\u0275property("disabled", !ctx_r2.can_edit)("matMenuTriggerFor", menu_r7);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 10, "CATERING.ITEM_OPTION_ADD"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 12, "CATERING.ITEM_EDIT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 14, "CATERING.ITEM_REMOVE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !(row_r6.options == null ? null : row_r6.options.length))("matTooltip", (row_r6.options == null ? null : row_r6.options.length) ? \u0275\u0275pipeBind1(28, 16, ctx_r2.show_children[row_r6.id] ? "CATERING.ITEM_OPTION_HIDE" : "CATERING.ITEM_OPTION_SHOW") : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.show_children[row_r6.id] ? "keyboard_arrow_down" : "chevron_right", " ");
  }
}
function CateringMenuComponent_ng_template_12_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringMenuComponent_ng_template_12_For_1_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const option_r9 = \u0275\u0275nextContext().$implicit;
      const row_r10 = \u0275\u0275nextContext().row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editOption(row_r10, option_r9));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "CATERING.ITEM_OPTION_EDIT"));
  }
}
function CateringMenuComponent_ng_template_12_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringMenuComponent_ng_template_12_For_1_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const option_r9 = \u0275\u0275nextContext().$implicit;
      const row_r10 = \u0275\u0275nextContext().row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeOption(row_r10, option_r9));
    });
    \u0275\u0275elementStart(2, "icon", 12);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "CATERING.ITEM_OPTION_REMOVE"));
  }
}
function CateringMenuComponent_ng_template_12_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementStart(2, "div", 16)(3, "div", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, CateringMenuComponent_ng_template_12_For_1_Conditional_7_Template, 4, 3, "button", 19);
    \u0275\u0275conditionalCreate(8, CateringMenuComponent_ng_template_12_For_1_Conditional_8_Template, 4, 3, "button", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(option_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r9.group, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.can_edit ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.can_edit ? 8 : -1);
  }
}
function CateringMenuComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CateringMenuComponent_ng_template_12_For_1_Template, 9, 4, "div", 14, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const row_r10 = ctx.row;
    \u0275\u0275repeater(row_r10.options);
  }
}
var _CateringMenuComponent = class _CateringMenuComponent {
  constructor() {
    this._catering = inject(CateringStateService);
    this._orders = inject(CateringOrdersService);
    this._org = inject(OrganisationService);
    this.show_children = {};
    this.menu = combineLatest([
      this._catering.menu,
      this._orders.order_filters
    ]).pipe(map(([menu, filters]) => menu.filter((item) => !filters?.caterer || filters.caterer === "<empty>" && !item.caterer || item.caterer === filters.caterer)));
    this.addOption = (item) => this._catering.addOption(item);
    this.editOption = (item, option) => this._catering.addOption(item, option);
    this.removeOption = (item, option) => this._catering.deleteOption(item, option);
    this.editItem = (item) => this._catering.addItem(item);
    this.removeItem = (item) => this._catering.deleteItem(item);
  }
  get currency_code() {
    return this._org.building?.currency || "USD";
  }
  get filters() {
    return this._orders.filters;
  }
  get can_edit() {
    return this._catering.is_editable;
  }
  get categories() {
    return this._catering.categories;
  }
  get caterers() {
    return this._catering.caterer_list;
  }
  isEnabled(item) {
    return !item.hide_for_zones.includes(this._catering.zone);
  }
  setEnabled(item, state) {
    let list = item.hide_for_zones;
    if (!state)
      list = unique([...list, this._catering.zone]);
    else
      list = list.filter((_) => _ !== this._catering.zone);
    this._catering.updateItem(new CateringItem(__spreadProps(__spreadValues({}, item), { hide_for_zones: list })));
  }
};
_CateringMenuComponent.\u0275fac = function CateringMenuComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringMenuComponent)();
};
_CateringMenuComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringMenuComponent, selectors: [["catering-menu"]], decls: 14, vars: 38, consts: [["active_template", ""], ["price_template", ""], ["actions_template", ""], ["child_template", ""], ["menu", "matMenu"], [1, "block", "w-full", "min-w-lg", "text-sm", 3, "data", "columns", "filter", "show_children", "child_template", "sortable", "empty_message"], ["matTooltipPosition", "right", 1, "mx-auto", 3, "ngModelChange", "matTooltip", "ngModel"], [1, "bg-secondary", "text-secondary-content", "mx-auto", "flex", "items-center", "rounded-sm", "px-2", "py-1", "font-mono", "text-xs"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 3, "disabled", "matMenuTriggerFor"], ["mat-menu-item", "", 1, "flex", "items-center", 3, "click"], [1, "flex", "items-center", "space-x-2", "pr-2"], [1, "text-error"], ["icon", "", "matRipple", "", 3, "click", "disabled", "matTooltip"], [1, "border-base-200", "relative", "flex", "items-center", "space-x-2", "border-b", "border-solid", "p-2"], [1, "absolute", "inset-y-0", "left-0", "w-2", "bg-black", "opacity-10"], [1, "flex-1", "pr-2", "pl-4"], [1, "text"], [1, "text-xs", "opacity-60"], ["icon", "", "matRipple", "", 3, "matTooltip"], ["icon", "", "matRipple", "", 1, "mr-1!", 3, "matTooltip"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "mr-1!", 3, "click", "matTooltip"]], template: function CateringMenuComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "simple-table", 5);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275template(6, CateringMenuComponent_ng_template_6_Template, 2, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(8, CateringMenuComponent_ng_template_8_Template, 3, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(10, CateringMenuComponent_ng_template_10_Template, 31, 18, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(12, CateringMenuComponent_ng_template_12_Template, 2, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const active_template_r12 = \u0275\u0275reference(7);
    const price_template_r13 = \u0275\u0275reference(9);
    const actions_template_r14 = \u0275\u0275reference(11);
    const child_template_r15 = \u0275\u0275reference(13);
    \u0275\u0275property("data", ctx.menu)("columns", \u0275\u0275pureFunction6(31, _c6, \u0275\u0275pureFunction1(17, _c03, active_template_r12), \u0275\u0275pureFunction1(19, _c13, \u0275\u0275pipeBind1(1, 7, "FORM.NAME")), \u0275\u0275pureFunction1(21, _c2, \u0275\u0275pipeBind1(2, 9, "COMMON.CATEGORY")), \u0275\u0275pureFunction2(23, _c3, \u0275\u0275pipeBind1(3, 11, "CATERING.CATERER"), !(ctx.filters == null ? null : ctx.filters.caterer) && ctx.caterers.length > 1), \u0275\u0275pureFunction2(26, _c4, \u0275\u0275pipeBind1(4, 13, "CATERING.ITEM_PRICE"), price_template_r13), \u0275\u0275pureFunction1(29, _c5, actions_template_r14)))("filter", ctx.filters == null ? null : ctx.filters.search)("show_children", ctx.show_children)("child_template", child_template_r15)("sortable", true)("empty_message", \u0275\u0275pipeBind1(5, 15, "CATERING.ITEM_LIST_EMPTY"));
  }
}, dependencies: [
  CommonModule,
  CurrencyPipe,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  IconComponent,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatCheckboxModule,
  MatCheckbox,
  MatTooltipModule,
  MatTooltip,
  SimpleTableComponent,
  FormsModule,
  NgControlStatus,
  NgModel
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 90%;\n  width: 100%;\n}\n/*# sourceMappingURL=catering-menu.component.css.map */"] });
var CateringMenuComponent = _CateringMenuComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringMenuComponent, [{
    type: Component,
    args: [{ selector: "catering-menu", template: `
        <simple-table
            class="block w-full min-w-lg text-sm"
            [data]="menu"
            [columns]="[
                {
                    key: 'active',
                    name: ' ',
                    content: active_template,
                    size: '3.5rem',
                    sortable: false,
                },
                { key: 'name', name: 'FORM.NAME' | translate },
                { key: 'category', name: 'COMMON.CATEGORY' | translate },
                {
                    key: 'caterer',
                    name: 'CATERING.CATERER' | translate,
                    show: !filters?.caterer && caterers.length > 1,
                },
                {
                    key: 'unit_price',
                    name: 'CATERING.ITEM_PRICE' | translate,
                    content: price_template,
                    size: '6rem',
                },
                {
                    key: 'actions',
                    name: ' ',
                    content: actions_template,
                    size: '6.5rem',
                    sortable: false,
                },
            ]"
            [filter]="filters?.search"
            [show_children]="show_children"
            [child_template]="child_template"
            [sortable]="true"
            [empty_message]="'CATERING.ITEM_LIST_EMPTY' | translate"
        />
        <ng-template #active_template let-row="row">
            <mat-checkbox
                class="mx-auto"
                [matTooltip]="'CATERING.ORDER_ALLOW' | translate"
                matTooltipPosition="right"
                [ngModel]="isEnabled(row)"
                (ngModelChange)="setEnabled(row, $event)"
            />
        </ng-template>
        <ng-template #price_template let-data="data">
            <div
                class="bg-secondary text-secondary-content mx-auto flex items-center rounded-sm px-2 py-1 font-mono text-xs"
            >
                {{ data / 100 | currency: currency_code }}
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-2">
                <button
                    icon
                    matRipple
                    [disabled]="!can_edit"
                    [class.opacity-0]="!can_edit"
                    [matMenuTriggerFor]="menu"
                >
                    <icon>more_vert</icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button
                        mat-menu-item
                        class="flex items-center"
                        (click)="addOption(row)"
                    >
                        <div class="flex items-center space-x-2 pr-2">
                            <icon>add</icon>
                            <div>
                                {{ 'CATERING.ITEM_OPTION_ADD' | translate }}
                            </div>
                        </div>
                    </button>
                    <button
                        mat-menu-item
                        class="flex items-center"
                        (click)="editItem(row)"
                    >
                        <div class="flex items-center space-x-2 pr-2">
                            <icon>edit</icon>
                            <div>{{ 'CATERING.ITEM_EDIT' | translate }}</div>
                        </div>
                    </button>
                    <button
                        mat-menu-item
                        class="flex items-center"
                        (click)="removeItem(row)"
                    >
                        <div class="flex items-center space-x-2 pr-2">
                            <icon class="text-error">delete</icon>
                            <div>{{ 'CATERING.ITEM_REMOVE' | translate }}</div>
                        </div>
                    </button>
                </mat-menu>
                <button
                    icon
                    matRipple
                    [disabled]="!row.options?.length"
                    [matTooltip]="
                        row.options?.length
                            ? ((show_children[row.id]
                                  ? 'CATERING.ITEM_OPTION_HIDE'
                                  : 'CATERING.ITEM_OPTION_SHOW'
                              ) | translate)
                            : ''
                    "
                    (click)="show_children[row.id] = !show_children[row.id]"
                >
                    <icon>
                        {{
                            show_children[row.id]
                                ? 'keyboard_arrow_down'
                                : 'chevron_right'
                        }}
                    </icon>
                </button>
            </div>
        </ng-template>
        <ng-template #child_template let-row="row">
            @for (option of row.options; track option) {
                <div
                    class="border-base-200 relative flex items-center space-x-2 border-b border-solid p-2"
                >
                    <div
                        class="absolute inset-y-0 left-0 w-2 bg-black opacity-10"
                    ></div>
                    <div class="flex-1 pr-2 pl-4">
                        <div class="text">{{ option.name }}</div>
                        <div class="text-xs opacity-60">
                            {{ option.group }}
                        </div>
                    </div>
                    @if (can_edit) {
                        <button
                            icon
                            matRipple
                            [matTooltip]="
                                'CATERING.ITEM_OPTION_EDIT' | translate
                            "
                            (click)="editOption(row, option)"
                        >
                            <icon>edit</icon>
                        </button>
                    }
                    @if (can_edit) {
                        <button
                            icon
                            matRipple
                            class="mr-1!"
                            [matTooltip]="
                                'CATERING.ITEM_OPTION_REMOVE' | translate
                            "
                            (click)="removeOption(row, option)"
                        >
                            <icon class="text-error">delete</icon>
                        </button>
                    }
                </div>
            }
        </ng-template>
    `, imports: [
      CommonModule,
      TranslatePipe,
      MatRippleModule,
      IconComponent,
      MatMenuModule,
      MatCheckboxModule,
      MatTooltipModule,
      SimpleTableComponent,
      FormsModule
    ], styles: ["/* angular:styles/component:css;3396e106e5694bb92b5aff446cc382aac6b81ca9eb4926f89bdb1993513132a2;/home/runner/work/user-interfaces/user-interfaces/libs/catering/src/lib/catering-menu.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 90%;\n  width: 100%;\n}\n/*# sourceMappingURL=catering-menu.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringMenuComponent, { className: "CateringMenuComponent", filePath: "libs/catering/src/lib/catering-menu.component.ts", lineNumber: 209 });
})();

// libs/catering/src/lib/catering-order-item.component.ts
var _c04 = ["catering-order-item", ""];
function CateringOrderItemComponent_Conditional_0_For_14_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r3.name, " ");
  }
}
function CateringOrderItemComponent_Conditional_0_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CateringOrderItemComponent_Conditional_0_For_14_Conditional_0_Template, 2, 1, "div", 9);
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    \u0275\u0275conditional(opt_r3 ? 0 : -1);
  }
}
function CateringOrderItemComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 2)(3, "button", 3);
    \u0275\u0275listener("click", function CateringOrderItemComponent_Conditional_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggle());
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 7);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 8);
    \u0275\u0275repeaterCreate(13, CateringOrderItemComponent_Conditional_0_For_14_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-success", ctx_r1.active)("text-white", ctx_r1.active)("border-solid", ctx_r1.active);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.active ? "done" : "local_pizza");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ((tmp_5_0 = ctx_r1.item()) == null ? null : tmp_5_0.amount) || ((tmp_5_0 = ctx_r1.item()) == null ? null : tmp_5_0.quantity) || 1, "\xD7 ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_6_0 = ctx_r1.item()) == null ? null : tmp_6_0.name);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.item().option_list);
  }
}
var ACTIVE_ITEMS = /* @__PURE__ */ new Set();
var _CateringOrderItemComponent = class _CateringOrderItemComponent {
  constructor() {
    this.order_id = input(void 0);
    this.item = input(void 0);
    this.active = false;
  }
  get item_key() {
    return `${this.order_id()}|${this.item()?.id}`;
  }
  ngOnInit() {
    this.active = ACTIVE_ITEMS.has(this.item_key);
  }
  toggle() {
    if (ACTIVE_ITEMS.has(this.item_key)) {
      ACTIVE_ITEMS.delete(this.item_key);
      this.active = false;
    } else {
      ACTIVE_ITEMS.add(this.item_key);
      this.active = true;
    }
  }
};
_CateringOrderItemComponent.\u0275fac = function CateringOrderItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringOrderItemComponent)();
};
_CateringOrderItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringOrderItemComponent, selectors: [["", "catering-order-item", ""]], inputs: { order_id: [1, "order_id"], item: [1, "item"] }, attrs: _c04, decls: 1, vars: 1, consts: [[1, "relative", "h-14", "w-16", "text-right"], ["arm", "", 1, "border-base-200", "absolute", "top-1/2", "left-1/2", "h-16", "w-4", "-translate-x-px", "-translate-y-full", "border-b-2", "border-l-2"], [1, "mr-4", "w-12"], ["action", "", "icon", "", "matRipple", "", 1, "text-dark-fade", "border-base-200", "border-2", "border-dashed", "p-2", "text-xl", 3, "click"], [1, "border-base-200", "flex", "flex-1", "items-center", "space-x-4", "border-b", "border-solid", "py-4"], [1, ""], [1, "bg-base-300", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", "p-1", "font-mono", "text-sm"], [1, "flex-1"], [1, "mr-2", "flex", "space-x-2", "px-4"], [1, "bg-warning", "text-warning-content", "rounded-2xl", "px-2", "py-1", "text-xs", "shadow-sm"]], template: function CateringOrderItemComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CateringOrderItemComponent_Conditional_0_Template, 15, 9);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.item() ? 0 : -1);
  }
}, dependencies: [MatRippleModule, MatRipple, IconComponent], styles: ["\n\n[_nghost-%COMP%]:last-child    > div[_ngcontent-%COMP%] {\n  border: none !important;\n}\n/*# sourceMappingURL=catering-order-item.component.css.map */"] });
var CateringOrderItemComponent = _CateringOrderItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringOrderItemComponent, [{
    type: Component,
    args: [{ selector: "[catering-order-item]", template: `
        @if (item()) {
            <div class="relative h-14 w-16 text-right">
                <div
                    arm
                    class="border-base-200 absolute top-1/2 left-1/2 h-16 w-4 -translate-x-px -translate-y-full border-b-2 border-l-2"
                ></div>
            </div>
            <div class="mr-4 w-12">
                <button
                    action
                    icon
                    matRipple
                    class="text-dark-fade border-base-200 border-2 border-dashed p-2 text-xl"
                    [class.bg-success]="active"
                    [class.text-white]="active"
                    [class.border-solid]="active"
                    (click)="toggle()"
                >
                    <icon>{{ active ? 'done' : 'local_pizza' }}</icon>
                </button>
            </div>
            <div
                class="border-base-200 flex flex-1 items-center space-x-4 border-b border-solid py-4"
            >
                <div class="">
                    <div
                        class="bg-base-300 flex h-10 w-10 items-center justify-center rounded-full p-1 font-mono text-sm"
                    >
                        {{ item()?.amount || item()?.quantity || 1 }}\xD7
                    </div>
                </div>
                <div class="flex-1">{{ item()?.name }}</div>
                <div class="mr-2 flex space-x-2 px-4">
                    @for (opt of item().option_list; track opt) {
                        @if (opt) {
                            <div
                                class="bg-warning text-warning-content rounded-2xl px-2 py-1 text-xs shadow-sm"
                            >
                                {{ opt.name }}
                            </div>
                        }
                    }
                </div>
            </div>
        }
    `, imports: [MatRippleModule, IconComponent], styles: ["/* angular:styles/component:css;756d751949baab0d174e2b09d453d8a27a35e7433604e0603e0f4d8376563681;/home/runner/work/user-interfaces/user-interfaces/libs/catering/src/lib/catering-order-item.component.ts */\n:host:last-child > div {\n  border: none !important;\n}\n/*# sourceMappingURL=catering-order-item.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringOrderItemComponent, { className: "CateringOrderItemComponent", filePath: "libs/catering/src/lib/catering-order-item.component.ts", lineNumber: 67 });
})();

// libs/catering/src/lib/catering.vars.ts
function statusList() {
  return [
    {
      id: "pending",
      name: i18n("CATERING.STATUS_PENDING"),
      icon: { class: "custom-pending" },
      colour: "#ccc"
    },
    {
      id: "accepted",
      name: i18n("CATERING.STATUS_ACCEPTED"),
      icon: { class: "custom-accepted" },
      colour: "#3996B6"
    },
    {
      id: "preparing",
      name: i18n("CATERING.STATUS_PREPARING"),
      icon: { class: "custom-preparing" },
      colour: "#E7536B"
    },
    {
      id: "ready",
      name: i18n("CATERING.STATUS_READY"),
      icon: { class: "custom-ready" },
      colour: "#FFD028"
    },
    {
      id: "delivered",
      name: i18n("CATERING.STATUS_DELIVERED"),
      icon: { class: "custom-delivered" },
      colour: "#75BB43"
    },
    {
      id: "cancelled",
      name: i18n("CATERING.STATUS_CANCELLED"),
      icon: { class: "custom-cancelled" },
      colour: "#747474"
    }
  ];
}
var CATERING_STATUSES = statusList();

// libs/catering/src/lib/catering-order-list.component.ts
var _c05 = (a0) => ({ key: "state", name: " ", size: "4rem", sortable: false, content: a0 });
var _c14 = (a0, a1) => ({ key: "caterer", name: a0, show: a1 });
var _c22 = (a0, a1) => ({ key: "deliver_at", name: a0, content: a1 });
var _c32 = (a0, a1) => ({ key: "event", name: a0, content: a1, sortable: false });
var _c42 = (a0) => ({ key: "charge_code", name: a0 });
var _c52 = (a0) => ({ key: "invoice_number", name: a0, empty: "No Invoice" });
var _c62 = (a0, a1) => ({ key: "status", name: a0, content: a1, size: "11rem" });
var _c7 = (a0) => ({ key: "actions", name: " ", size: "6.5rem", content: a0, sortable: false });
var _c8 = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => [a0, a1, a2, a3, a4, a5, a6, a7, a8];
var _c9 = (a0) => ({ time: a0 });
function CateringOrderListComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "icon");
    \u0275\u0275text(3, "room_service");
    \u0275\u0275elementEnd()()();
  }
}
function CateringOrderListComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275pipe(8, "date");
    \u0275\u0275pipe(9, "date");
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r1 = ctx.data;
    const row_r2 = ctx.row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 8, "CATERING.ORDERS_DELIVER_TIME", \u0275\u0275pureFunction1(23, _c9, \u0275\u0275pipeBind2(3, 5, data_r1, ctx_r2.time_format))), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate4(" ", \u0275\u0275pipeBind2(7, 11, row_r2 == null ? null : row_r2.event == null ? null : row_r2.event.date, "MMM d"), ", ", \u0275\u0275pipeBind2(8, 14, row_r2 == null ? null : row_r2.event == null ? null : row_r2.event.date, ctx_r2.time_format), " - ", \u0275\u0275pipeBind2(9, 17, row_r2 == null ? null : row_r2.event == null ? null : row_r2.event.date_end, "MMM d"), ", ", \u0275\u0275pipeBind2(10, 20, row_r2 == null ? null : row_r2.event == null ? null : row_r2.event.date_end, ctx_r2.time_format), " ");
  }
}
function CateringOrderListComponent_ng_template_17_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CATERING.ORDERS_LOCATION_EMPTY"), " ");
  }
}
function CateringOrderListComponent_ng_template_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, CateringOrderListComponent_ng_template_17_Conditional_1_Conditional_2_Template, 3, 3, "span", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const space_r4 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (space_r4 == null ? null : space_r4.display_name) || (space_r4 == null ? null : space_r4.name) || "", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!((space_r4 == null ? null : space_r4.display_name) || (space_r4 == null ? null : space_r4.name)) ? 2 : -1);
  }
}
function CateringOrderListComponent_ng_template_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r5 = \u0275\u0275nextContext().data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r5 == null ? null : data_r5.location);
  }
}
function CateringOrderListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275conditionalCreate(1, CateringOrderListComponent_ng_template_17_Conditional_1_Template, 3, 2, "div", 16)(2, CateringOrderListComponent_ng_template_17_Conditional_2_Template, 2, 1, "div", 16);
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    const space_r6 = \u0275\u0275storeLet(data_r5 == null ? null : data_r5.system);
    \u0275\u0275advance();
    \u0275\u0275conditional(space_r6 || !(data_r5 == null ? null : data_r5.location) ? 1 : 2);
  }
}
function CateringOrderListComponent_ng_template_19_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, " Unknown Host ");
    \u0275\u0275elementEnd();
  }
}
function CateringOrderListComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, CateringOrderListComponent_ng_template_19_Conditional_3_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (data_r7 == null ? null : data_r7.organiser == null ? null : data_r7.organiser.name) || (data_r7 == null ? null : data_r7.host) || "", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!((data_r7 == null ? null : data_r7.organiser == null ? null : data_r7.organiser.name) || (data_r7 == null ? null : data_r7.host)) ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (data_r7 == null ? null : data_r7.organiser == null ? null : data_r7.organiser.email) || (data_r7 == null ? null : data_r7.host), " ");
  }
}
function CateringOrderListComponent_ng_template_21_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function CateringOrderListComponent_ng_template_21_For_9_Template_button_click_0_listener() {
      const status_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const row_r10 = \u0275\u0275nextContext().row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateStatus(row_r10, status_r9.id));
    });
    \u0275\u0275elementStart(1, "div", 23);
    \u0275\u0275element(2, "div", 24);
    \u0275\u0275elementStart(3, "span", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const status_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", status_r9.colour);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(status_r9.name);
  }
}
function CateringOrderListComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "button", 18)(2, "div", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon", 20);
    \u0275\u0275text(5, "arrow_drop_down");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "mat-menu", null, 7);
    \u0275\u0275repeaterCreate(8, CateringOrderListComponent_ng_template_21_For_9_Template, 5, 3, "button", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_13_0;
    const data_r11 = ctx.data;
    const menu_r12 = \u0275\u0275reference(7);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", (tmp_11_0 = ctx_r2.status(data_r11)) == null ? null : tmp_11_0.colour);
    \u0275\u0275property("matMenuTriggerFor", menu_r12);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_13_0 = ctx_r2.status(data_r11)) == null ? null : tmp_13_0.name, " ");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.statuses);
  }
}
function CateringOrderListComponent_ng_template_23_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r14 = \u0275\u0275nextContext().row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "FORM.NOTES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r14.notes, " ");
  }
}
function CateringOrderListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "button", 27)(2, "icon");
    \u0275\u0275text(3, "description");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, CateringOrderListComponent_ng_template_23_ng_template_4_Template, 6, 4, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(6, "button", 28);
    \u0275\u0275listener("click", function CateringOrderListComponent_ng_template_23_Template_button_click_6_listener() {
      const row_r14 = \u0275\u0275restoreView(_r13).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.show_children[row_r14.id] = !ctx_r2.show_children[row_r14.id]);
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r14 = ctx.row;
    const notes_template_r15 = \u0275\u0275reference(5);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("hover", true)("content", notes_template_r15)("disabled", !row_r14.notes);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r2.show_children[row_r14.id] ? "keyboard_arrow_down" : "chevron_right", " ");
  }
}
function CateringOrderListComponent_ng_template_25_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 33);
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const row_r17 = \u0275\u0275nextContext(2).row;
    \u0275\u0275property("order_id", row_r17 == null ? null : row_r17.id)("item", item_r16);
  }
}
function CateringOrderListComponent_ng_template_25_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 32);
    \u0275\u0275repeaterCreate(1, CateringOrderListComponent_ng_template_25_Conditional_0_For_2_Template, 1, 2, "li", 33, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r17 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r17.items);
  }
}
function CateringOrderListComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CateringOrderListComponent_ng_template_25_Conditional_0_Template, 3, 0, "ul", 32);
  }
  if (rf & 2) {
    const row_r17 = ctx.row;
    \u0275\u0275conditional((row_r17 == null ? null : row_r17.items.length) ? 0 : -1);
  }
}
var _CateringOrderListComponent = class _CateringOrderListComponent extends AsyncHandler {
  get filters() {
    return this._orders.filters;
  }
  get time_format() {
    return this._settings.time_format;
  }
  status(value) {
    return this.statuses.find((i) => i.id === value);
  }
  constructor() {
    super();
    this._orders = inject(CateringOrdersService);
    this._settings = inject(SettingsService);
    this.order_list = this._orders.filtered;
    this.loading = this._orders.loading;
    this.caterers = this._orders.caterers;
    this.statuses = [];
    this.show_children = {};
    this.updateStatus = async (order, s) => {
      await this._orders.updateStatus(order, s);
      this.timeout("status-change", () => order.status = s);
    };
  }
  ngOnInit() {
    this.statuses = statusList();
    this.subscription("polling", this._orders.startPolling());
  }
};
_CateringOrderListComponent.\u0275fac = function CateringOrderListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringOrderListComponent)();
};
_CateringOrderListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringOrderListComponent, selectors: [["catering-order-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 27, vars: 61, consts: [["state_template", ""], ["time_template", ""], ["location_template", ""], ["host_template", ""], ["status_template", ""], ["actions_template", ""], ["child_template", ""], ["menu", "matMenu"], ["notes_template", ""], [1, "flex", "h-full", "w-full", "flex-col", "overflow-auto"], ["mode", "indeterminate", 1, "sticky", "top-0", "left-0", "w-full"], [1, "block", "w-full", "min-w-6xl", "text-sm", 3, "data", "columns", "sortable", "show_children", "child_template", "empty_message"], [1, "p-2"], [1, "bg-base-200", "flex", "items-center", "justify-center", "rounded-full", "p-2", "text-2xl"], [1, "p-4"], [1, "text-xs", "opacity-30"], [1, "px-4", "py-2"], [1, "opacity-30"], ["status", "", "matRipple", "", 1, "flex", "h-10", "w-36", "items-center", "rounded-3xl", "border-none", "px-4", "text-base", "text-white", 3, "matMenuTriggerFor"], [1, "mx-2", "flex", "text-center", "capitalize"], [1, "pl-2"], ["mat-menu-item", "", 1, "flex", "items-center"], ["mat-menu-item", "", 1, "flex", "items-center", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "mr-2", "h-4", "w-4", "rounded-full"], [1, "mr-2", "w-20"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", "customTooltip", "", "xPosition", "end", "yPosition", "top", 3, "hover", "content", "disabled"], ["icon", "", "matRipple", "", 3, "click"], [1, "border-base-200", "bg-base-100", "text-base-content", "max-w-lg", "min-w-32", "rounded-lg", "border", "p-2", "shadow-sm"], [1, "mb-2"], [1, "bg-base-200", "rounded-sm", "px-4", "py-2", "text-sm"], [1, "relative", "z-0", "m-0", "w-full", "list-none", "p-0"], ["catering-order-item", "", 1, "flex", "items-center", 3, "order_id", "item"]], template: function CateringOrderListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "mat-progress-bar", 10);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275element(3, "simple-table", 11);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275template(13, CateringOrderListComponent_ng_template_13_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(15, CateringOrderListComponent_ng_template_15_Template, 11, 25, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(17, CateringOrderListComponent_ng_template_17_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(19, CateringOrderListComponent_ng_template_19_Template, 6, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(21, CateringOrderListComponent_ng_template_21_Template, 10, 4, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(23, CateringOrderListComponent_ng_template_23_Template, 9, 4, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(25, CateringOrderListComponent_ng_template_25_Template, 1, 1, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_9_0;
    const state_template_r18 = \u0275\u0275reference(14);
    const time_template_r19 = \u0275\u0275reference(16);
    const location_template_r20 = \u0275\u0275reference(18);
    const host_template_r21 = \u0275\u0275reference(20);
    const status_template_r22 = \u0275\u0275reference(22);
    const actions_template_r23 = \u0275\u0275reference(24);
    const child_template_r24 = \u0275\u0275reference(26);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-0", !\u0275\u0275pipeBind1(2, 8, ctx.loading));
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx.order_list)("columns", \u0275\u0275pureFunctionV(51, _c8, [\u0275\u0275pureFunction1(28, _c05, state_template_r18), \u0275\u0275pureFunction2(30, _c14, \u0275\u0275pipeBind1(4, 10, "CATERING.CATERER"), !(ctx.filters == null ? null : ctx.filters.caterer) && ((tmp_9_0 = \u0275\u0275pipeBind1(5, 12, ctx.caterers)) == null ? null : tmp_9_0.length) > 1), \u0275\u0275pureFunction2(33, _c22, \u0275\u0275pipeBind1(6, 14, "COMMON.TIME"), time_template_r19), \u0275\u0275pureFunction2(36, _c32, \u0275\u0275pipeBind1(7, 16, "COMMON.LOCATION"), location_template_r20), \u0275\u0275pureFunction2(39, _c32, \u0275\u0275pipeBind1(8, 18, "FORM.HOST"), host_template_r21), \u0275\u0275pureFunction1(42, _c42, \u0275\u0275pipeBind1(9, 20, "CATERING.CHARGE_CODE")), \u0275\u0275pureFunction1(44, _c52, \u0275\u0275pipeBind1(10, 22, "CATERING.INVOICE_NUMBER")), \u0275\u0275pureFunction2(46, _c62, \u0275\u0275pipeBind1(11, 24, "COMMON.STATUS"), status_template_r22), \u0275\u0275pureFunction1(49, _c7, actions_template_r23)]))("sortable", true)("show_children", ctx.show_children)("child_template", child_template_r24)("empty_message", \u0275\u0275pipeBind1(12, 26, "CATERING.ORDERS_EMPTY"));
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DatePipe,
  CateringOrderItemComponent,
  MatRippleModule,
  MatRipple,
  TranslatePipe,
  CustomTooltipComponent,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  SimpleTableComponent,
  MatProgressBarModule,
  MatProgressBar,
  IconComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=catering-order-list.component.css.map */"] });
var CateringOrderListComponent = _CateringOrderListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringOrderListComponent, [{
    type: Component,
    args: [{ selector: "catering-order-list", template: `
        <div class="flex h-full w-full flex-col overflow-auto">
            <mat-progress-bar
                [class.opacity-0]="!(loading | async)"
                class="sticky top-0 left-0 w-full"
                mode="indeterminate"
            ></mat-progress-bar>
            <simple-table
                class="block w-full min-w-6xl text-sm"
                [data]="order_list"
                [columns]="[
                    {
                        key: 'state',
                        name: ' ',
                        size: '4rem',
                        sortable: false,
                        content: state_template,
                    },
                    {
                        key: 'caterer',
                        name: 'CATERING.CATERER' | translate,
                        show:
                            !filters?.caterer && (caterers | async)?.length > 1,
                    },
                    {
                        key: 'deliver_at',
                        name: 'COMMON.TIME' | translate,
                        content: time_template,
                    },
                    {
                        key: 'event',
                        name: 'COMMON.LOCATION' | translate,
                        content: location_template,
                        sortable: false,
                    },
                    {
                        key: 'event',
                        name: 'FORM.HOST' | translate,
                        content: host_template,
                        sortable: false,
                    },
                    {
                        key: 'charge_code',
                        name: 'CATERING.CHARGE_CODE' | translate,
                    },
                    {
                        key: 'invoice_number',
                        name: 'CATERING.INVOICE_NUMBER' | translate,
                        empty: 'No Invoice',
                    },
                    {
                        key: 'status',
                        name: 'COMMON.STATUS' | translate,
                        content: status_template,
                        size: '11rem',
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        size: '6.5rem',
                        content: actions_template,
                        sortable: false,
                    },
                ]"
                [sortable]="true"
                [show_children]="show_children"
                [child_template]="child_template"
                [empty_message]="'CATERING.ORDERS_EMPTY' | translate"
            >
            </simple-table>
            <ng-template #state_template let-data="data">
                <div class="p-2">
                    <div
                        class="bg-base-200 flex items-center justify-center rounded-full p-2 text-2xl"
                    >
                        <icon>room_service</icon>
                    </div>
                </div>
            </ng-template>
            <ng-template #time_template let-data="data" let-row="row">
                <div class="p-4">
                    <div>
                        {{
                            'CATERING.ORDERS_DELIVER_TIME'
                                | translate: { time: data | date: time_format }
                        }}
                    </div>
                    <div class="text-xs opacity-30">
                        {{ row?.event?.date | date: 'MMM d' }},
                        {{ row?.event?.date | date: time_format }}
                        -
                        {{ row?.event?.date_end | date: 'MMM d' }},
                        {{ row?.event?.date_end | date: time_format }}
                    </div>
                </div>
            </ng-template>
            <ng-template #location_template let-data="data">
                @let space = data?.system;
                @if (space || !data?.location) {
                    <div class="px-4 py-2">
                        {{ space?.display_name || space?.name || '' }}
                        @if (!(space?.display_name || space?.name)) {
                            <span class="opacity-30">
                                {{
                                    'CATERING.ORDERS_LOCATION_EMPTY' | translate
                                }}
                            </span>
                        }
                    </div>
                } @else {
                    <div class="px-4 py-2">{{ data?.location }}</div>
                }
            </ng-template>
            <ng-template #host_template let-data="data">
                <div class="px-4 py-2">
                    <div>
                        {{ data?.organiser?.name || data?.host || '' }}
                        @if (!(data?.organiser?.name || data?.host)) {
                            <span class="opacity-30"> Unknown Host </span>
                        }
                    </div>
                    <div class="text-xs opacity-30">
                        {{ data?.organiser?.email || data?.host }}
                    </div>
                </div>
            </ng-template>
            <ng-template #status_template let-row="row" let-data="data">
                <div class="px-4 py-2">
                    <button
                        status
                        matRipple
                        class="flex h-10 w-36 items-center rounded-3xl border-none px-4 text-base text-white"
                        [style.background]="status(data)?.colour"
                        [matMenuTriggerFor]="menu"
                    >
                        <div class="mx-2 flex text-center capitalize">
                            {{ status(data)?.name }}
                        </div>
                        <icon class="pl-2">arrow_drop_down</icon>
                    </button>
                </div>
                <mat-menu #menu="matMenu">
                    @for (status of statuses; track status) {
                        <button
                            mat-menu-item
                            class="flex items-center"
                            (click)="updateStatus(row, status.id)"
                        >
                            <div class="flex items-center space-x-2">
                                <div
                                    class="mr-2 h-4 w-4 rounded-full"
                                    [style.background-color]="status.colour"
                                ></div>
                                <span class="mr-2 w-20">{{ status.name }}</span>
                            </div>
                        </button>
                    }
                </mat-menu>
            </ng-template>
            <ng-template #actions_template let-row="row">
                <div class="mx-auto flex items-center space-x-2 p-2">
                    <button
                        icon
                        matRipple
                        customTooltip
                        [hover]="true"
                        xPosition="end"
                        yPosition="top"
                        [content]="notes_template"
                        [disabled]="!row.notes"
                    >
                        <icon>description</icon>
                    </button>
                    <ng-template #notes_template>
                        <div
                            class="border-base-200 bg-base-100 text-base-content max-w-lg min-w-32 rounded-lg border p-2 shadow-sm"
                        >
                            <div class="mb-2">
                                {{ 'FORM.NOTES' | translate }}
                            </div>
                            <p class="bg-base-200 rounded-sm px-4 py-2 text-sm">
                                {{ row.notes }}
                            </p>
                        </div>
                    </ng-template>
                    <button
                        icon
                        matRipple
                        (click)="show_children[row.id] = !show_children[row.id]"
                    >
                        <icon>
                            {{
                                show_children[row.id]
                                    ? 'keyboard_arrow_down'
                                    : 'chevron_right'
                            }}
                        </icon>
                    </button>
                </div>
            </ng-template>
            <ng-template #child_template let-row="row">
                @if (row?.items.length) {
                    <ul class="relative z-0 m-0 w-full list-none p-0">
                        @for (item of row.items; track item; let i = $index) {
                            <li
                                catering-order-item
                                class="flex items-center"
                                [order_id]="row?.id"
                                [item]="item"
                            ></li>
                        }
                    </ul>
                }
            </ng-template>
        </div>
    `, imports: [
      CommonModule,
      CateringOrderItemComponent,
      MatRippleModule,
      TranslatePipe,
      CustomTooltipComponent,
      MatMenuModule,
      SimpleTableComponent,
      MatProgressBarModule,
      IconComponent
    ], styles: ["/* angular:styles/component:css;2c590c9e56511a088a1469fe4b227d8190323c208f95620a03712f1a8f5bae8d;/home/runner/work/user-interfaces/user-interfaces/libs/catering/src/lib/catering-order-list.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=catering-order-list.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringOrderListComponent, { className: "CateringOrderListComponent", filePath: "libs/catering/src/lib/catering-order-list.component.ts", lineNumber: 256 });
})();

// libs/catering/src/lib/catering-order-modal/catering-order-state.service.ts
var _CateringOrderStateService = class _CateringOrderStateService {
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._options = new BehaviorSubject({});
    this._filters = new BehaviorSubject({
      search: "",
      tags: [],
      categories: [],
      caterer: ""
    });
    this._loading = new BehaviorSubject("");
    this.loading = this._loading.asObservable();
    this.filters = this._filters.asObservable();
    this.settings = this._org.active_building.pipe(filter((_) => !!_), switchMap((_) => nc(_.id, "catering-settings").pipe(catchError((_2) => of({})))), map((_) => _.details), tap((_) => this._settings.post("require_catering_notes", !!_?.require_notes)), shareReplay(1));
    this.charge_codes = this.settings.pipe(map((_) => _.charge_codes || []));
    this.availability = this.settings.pipe(map((_) => _.disabled_rooms || []));
    this.available_menu = combineLatest([
      this._options,
      this._org.active_building
    ]).pipe(filter(([_, bld]) => !!bld), switchMap(([{ zone }, bld]) => {
      this._loading.next("[MENU]");
      return nc(zone || bld.id, "catering").pipe(map((d) => (d.details instanceof Array ? d.details : []).map((_) => new CateringItem(_))), catchError((_) => []));
    }), tap((items) => {
      this._loading.next(this._loading.getValue().replace("[MENU]", ""));
      if (this._settings.get("app.catering_provider")) {
        this.setFilters({
          caterer: this._settings.get("app.catering_provider")
        });
      } else {
        const caterer_list = unique(items.map((i) => i.caterer).filter((_) => !!_));
        if (caterer_list.length <= 1)
          return;
        this.setFilters({ caterer: caterer_list[0] || "" });
      }
    }), shareReplay(1));
    this.categories = this.available_menu.pipe(map((_) => unique(_.map((i) => i.category))));
    this.caterers = this.available_menu.pipe(map((_) => {
      return this._settings.get("app.catering_provider") ? [] : unique(_.map((i) => i.caterer));
    }));
    this.filtered_menu = combineLatest([
      this._filters,
      this.available_menu
    ]).pipe(debounceTime(300), switchMap(async ([{ search, tags, categories, zone_id, date, duration, resources, caterer }, l]) => {
      const rules = await getCateringRulesForZone(zone_id).toPromise();
      search = search.toLowerCase();
      let list = search ? l.filter((_) => _.name.toLowerCase().includes(search)) : l;
      list = tags.length ? list.filter((_) => tags.every((t) => _.tags.includes(t))) : list;
      list = categories.length ? list.filter((_) => categories.includes(_.category)) : list;
      list = caterer ? list.filter((_) => caterer === "<empty>" && !_.caterer || _.caterer === caterer) : list;
      list = list.filter((_) => cateringItemAvailable(_, rules, {
        date,
        duration,
        resources
      }));
      return list;
    }), shareReplay(1));
  }
  get currency_code() {
    return this._org.currency_code;
  }
  setOptions(opts) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), opts));
  }
  setFilters(opts) {
    this._filters.next(__spreadValues(__spreadValues({}, this._filters.getValue()), opts));
  }
  getFilters() {
    return __spreadValues({}, this._filters.getValue());
  }
};
_CateringOrderStateService.\u0275fac = function CateringOrderStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringOrderStateService)();
};
_CateringOrderStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CateringOrderStateService, factory: _CateringOrderStateService.\u0275fac, providedIn: "root" });
var CateringOrderStateService = _CateringOrderStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringOrderStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// libs/catering/src/lib/new-catering-order-modal/new-catering-item-details.component.ts
function NewCateringItemDetailsComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r1.item().unit_price / 100, ctx_r1.code()), " ");
  }
}
function NewCateringItemDetailsComponent_Conditional_0_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r3, " ");
  }
}
function NewCateringItemDetailsComponent_Conditional_0_For_21_Conditional_4_For_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", \u0275\u0275pipeBind2(2, 1, opt_r6.unit_price / 100, ctx_r1.code()), " ");
  }
}
function NewCateringItemDetailsComponent_Conditional_0_For_21_Conditional_4_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-button", 21)(1, "div", 22)(2, "div", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, NewCateringItemDetailsComponent_Conditional_0_For_21_Conditional_4_For_6_Conditional_4_Template, 3, 4, "div", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    \u0275\u0275property("value", opt_r6.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", opt_r6.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(opt_r6.unit_price ? 4 : -1);
  }
}
function NewCateringItemDetailsComponent_Conditional_0_For_21_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-radio-group", 18);
    \u0275\u0275twoWayListener("ngModelChange", function NewCateringItemDetailsComponent_Conditional_0_For_21_Conditional_4_Template_mat_radio_group_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const group_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.group_state[group_r5.name], $event) || (ctx_r1.group_state[group_r5.name] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function NewCateringItemDetailsComponent_Conditional_0_For_21_Conditional_4_Template_mat_radio_group_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const group_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateGroupOption(group_r5, $event));
    });
    \u0275\u0275elementStart(1, "mat-radio-button", 19)(2, "div", 20);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(5, NewCateringItemDetailsComponent_Conditional_0_For_21_Conditional_4_For_6_Template, 5, 3, "mat-radio-button", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const group_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.group_state[group_r5.name]);
    \u0275\u0275property("disabled", (tmp_13_0 = ctx_r1.item()) == null ? null : tmp_13_0.in_order);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "COMMON.NONE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r5 == null ? null : group_r5.options);
  }
}
function NewCateringItemDetailsComponent_Conditional_0_For_21_Conditional_5_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", \u0275\u0275pipeBind2(2, 1, opt_r8.unit_price / 100, ctx_r1.code()), " ");
  }
}
function NewCateringItemDetailsComponent_Conditional_0_For_21_Conditional_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 26);
    \u0275\u0275twoWayListener("ngModelChange", function NewCateringItemDetailsComponent_Conditional_0_For_21_Conditional_5_For_1_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const opt_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.option_state[opt_r8.id], $event) || (ctx_r1.option_state[opt_r8.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function NewCateringItemDetailsComponent_Conditional_0_For_21_Conditional_5_For_1_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const opt_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updateCheckedState(opt_r8.id, $event));
    });
    \u0275\u0275elementStart(1, "div", 27)(2, "div", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, NewCateringItemDetailsComponent_Conditional_0_For_21_Conditional_5_For_1_Conditional_4_Template, 3, 4, "div", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_23_0;
    const opt_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.option_state[opt_r8.id]);
    \u0275\u0275property("disabled", (tmp_23_0 = ctx_r1.item()) == null ? null : tmp_23_0.in_order);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", opt_r8.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(opt_r8.unit_price ? 4 : -1);
  }
}
function NewCateringItemDetailsComponent_Conditional_0_For_21_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, NewCateringItemDetailsComponent_Conditional_0_For_21_Conditional_5_For_1_Template, 5, 4, "mat-checkbox", 25, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const group_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(group_r5 == null ? null : group_r5.options);
  }
}
function NewCateringItemDetailsComponent_Conditional_0_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "h3", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16);
    \u0275\u0275conditionalCreate(4, NewCateringItemDetailsComponent_Conditional_0_For_21_Conditional_4_Template, 7, 5, "mat-radio-group", 17)(5, NewCateringItemDetailsComponent_Conditional_0_For_21_Conditional_5_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    \u0275\u0275attribute("group", group_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", group_r5.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!group_r5.multiple ? 4 : 5);
  }
}
function NewCateringItemDetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 1);
    \u0275\u0275element(1, "image-carousel", 2);
    \u0275\u0275elementStart(2, "button", 3);
    \u0275\u0275listener("click", function NewCateringItemDetailsComponent_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function NewCateringItemDetailsComponent_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFav.emit());
    });
    \u0275\u0275elementStart(6, "icon", 5);
    \u0275\u0275text(7, "favorite");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 6)(9, "section", 7)(10, "div")(11, "h2", 8);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, NewCateringItemDetailsComponent_Conditional_0_Conditional_13_Template, 3, 4, "p");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a-counter", 9);
    \u0275\u0275twoWayListener("ngModelChange", function NewCateringItemDetailsComponent_Conditional_0_Template_a_counter_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.item().quantity, $event) || (ctx_r1.item().quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function NewCateringItemDetailsComponent_Conditional_0_Template_a_counter_ngModelChange_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.active() ? ctx_r1.activeChange.emit(ctx_r1.active()) : "");
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "section", 10);
    \u0275\u0275repeaterCreate(16, NewCateringItemDetailsComponent_Conditional_0_For_17_Template, 2, 1, "div", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "section", 12)(19, "div", 13);
    \u0275\u0275repeaterCreate(20, NewCateringItemDetailsComponent_Conditional_0_For_21_Template, 6, 3, "div", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("images", ctx_r1.item().images);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-info", ctx_r1.fav());
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r1.fav() ? "material-symbols-rounded" : "material-symbols-outlined");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.item().name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.item().unit_price ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.item().quantity);
    \u0275\u0275property("min", 1)("max", ctx_r1.item().count || 10);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.item().tags);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.groups);
  }
}
function NewCateringItemDetailsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "CATERING.ORDER_ITEM_SELECT"), " ");
  }
}
var _NewCateringItemDetailsComponent = class _NewCateringItemDetailsComponent {
  constructor() {
    this.item = input(void 0);
    this.active = input(false);
    this.fav = input(false);
    this.code = input("USD");
    this.toggleFav = output();
    this.activeChange = output();
    this.close = output();
    this.option_state = {};
    this.group_state = {};
  }
  ngOnChanges(changes) {
    if (changes.item && this.item()) {
      this._update();
    }
  }
  updateGroupOption(group, id) {
    if (!group)
      return;
    this.group_state[group.name] = id;
    for (const option of group.options) {
      option.active = option.id === id;
    }
  }
  updateCheckedState(id, state) {
    const option = this.item()?.options.find((_) => _.id === id);
    if (option)
      option.active = state;
  }
  _update() {
    const item = this.item();
    if (!item)
      return;
    if (!item.quantity) {
      item.quantity = 1;
    }
    this.option_state = {};
    this.group_state = {};
    const groups = unique(item.options.map((i) => i.group || "Other"));
    const group_list = [];
    for (const group of groups) {
      const options = item.options.filter((i) => i.group === group);
      group_list.push({
        name: group,
        multiple: !!options.find((i) => i.multiple),
        options
      });
    }
    this.groups = group_list;
    if (item.option_list) {
      for (const opt of item.option_list) {
        const option = item.options.find((_) => _.id === opt.id);
        if (option) {
          option.active = true;
          this.option_state[opt.id] = true;
          this.updateGroupOption(this.groups.find((g) => g.name === option.group), option.id);
        }
      }
    }
  }
};
_NewCateringItemDetailsComponent.\u0275fac = function NewCateringItemDetailsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewCateringItemDetailsComponent)();
};
_NewCateringItemDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewCateringItemDetailsComponent, selectors: [["new-catering-item-details"]], inputs: { item: [1, "item"], active: [1, "active"], fav: [1, "fav"], code: [1, "code"] }, outputs: { toggleFav: "toggleFav", activeChange: "activeChange", close: "close" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 1, consts: [["empty", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], ["image", "", 1, "bg-base-200", "relative", "h-64", "w-full", "sm:h-40"], [1, "absolute", "inset-0", 3, "images"], ["icon", "", "matRipple", "", "name", "close-catering-item-details", 1, "bg-base-100", "absolute", "top-2", "left-2", "lg:hidden", 3, "click"], ["icon", "", "matRipple", "", "name", "toggle-catering-item-favourite-details", 1, "bg-base-100", "absolute", "top-2", "right-2", 3, "click"], [3, "className"], [1, "flex-1", "space-y-4", "p-2"], ["actions", "", 1, "z-0", "flex", "items-center", "justify-between"], [1, "mt-4", "mb-2", "text-xl", "font-medium"], [3, "ngModelChange", "ngModel", "min", "max"], [1, "flex", "flex-wrap", "items-center"], [1, "bg-base-200", "m-1", "rounded-2xl", "px-2", "py-1", "text-sm", "capitalize"], ["details", "", 1, "space-y-2"], [1, "flex", "flex-col", "space-y-4"], [1, "border-base-400", "relative", "space-y-2", "rounded-sm", "border", "px-3", "pt-4", "pb-2"], [1, "text-md", "bg-base-100", "absolute", "top-0", "left-2", "-translate-y-1/2", "px-2", "font-medium"], [1, "flex", "flex-col"], ["aria-label", "Select an option", 1, "flex", "flex-col", 3, "ngModel", "disabled"], ["aria-label", "Select an option", 1, "flex", "flex-col", 3, "ngModelChange", "ngModel", "disabled"], ["value", "", 1, "m-0"], [1, "p-2", "font-medium", "opacity-60"], [1, "m-0", 3, "value"], [1, "flex", "max-w-[calc(100vw-4rem)]", "items-center", "justify-center", "sm:max-w-60"], [1, "w-1/2", "flex-1", "p-2", "font-medium", "whitespace-normal", "capitalize"], [1, "text-xs", "opacity-60"], [3, "ngModel", "disabled"], [3, "ngModelChange", "ngModel", "disabled"], [1, "flex", "items-center", "justify-center"], [1, "w-1/2", "flex-1", "p-2", "font-medium"], [1, "text-center", "opacity-30"]], template: function NewCateringItemDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NewCateringItemDetailsComponent_Conditional_0_Template, 22, 9)(1, NewCateringItemDetailsComponent_Conditional_1_Template, 4, 3, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.item() ? 0 : 1);
  }
}, dependencies: [
  CommonModule,
  CurrencyPipe,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  IconComponent,
  MatCheckboxModule,
  MatCheckbox,
  MatRadioModule,
  MatRadioGroup,
  MatRadioButton,
  FormsModule,
  NgControlStatus,
  NgModel,
  CounterComponent,
  ImageCarouselComponent
], encapsulation: 2 });
var NewCateringItemDetailsComponent = _NewCateringItemDetailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewCateringItemDetailsComponent, [{
    type: Component,
    args: [{ selector: "new-catering-item-details", template: `
        @if (item()) {
            <section image class="bg-base-200 relative h-64 w-full sm:h-40">
                <image-carousel
                    [images]="item().images"
                    class="absolute inset-0"
                ></image-carousel>
                <button
                    icon
                    matRipple
                    name="close-catering-item-details"
                    (click)="close.emit()"
                    class="bg-base-100 absolute top-2 left-2 lg:hidden"
                >
                    <icon>arrow_back</icon>
                </button>
                <button
                    icon
                    matRipple
                    name="toggle-catering-item-favourite-details"
                    [class.text-info]="fav()"
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
            <div class="flex-1 space-y-4 p-2">
                <section actions class="z-0 flex items-center justify-between">
                    <div>
                        <h2 class="mt-4 mb-2 text-xl font-medium">
                            {{ item().name }}
                        </h2>
                        @if (item().unit_price) {
                            <p>
                                {{ item().unit_price / 100 | currency: code() }}
                            </p>
                        }
                    </div>
                    <a-counter
                        [(ngModel)]="item().quantity"
                        (ngModelChange)="
                            active() ? activeChange.emit(active()) : ''
                        "
                        [min]="1"
                        [max]="item().count || 10"
                    ></a-counter>
                </section>
                <section class="flex flex-wrap items-center">
                    @for (tag of item().tags; track tag) {
                        <div
                            class="bg-base-200 m-1 rounded-2xl px-2 py-1 text-sm capitalize"
                        >
                            {{ tag }}
                        </div>
                    }
                </section>
                <section details class="space-y-2">
                    <div class="flex flex-col space-y-4">
                        @for (group of groups; track group) {
                            <div
                                [attr.group]="group.name"
                                class="border-base-400 relative space-y-2 rounded-sm border px-3 pt-4 pb-2"
                            >
                                <h3
                                    class="text-md bg-base-100 absolute top-0 left-2 -translate-y-1/2 px-2 font-medium"
                                >
                                    {{ group.name }}
                                </h3>
                                <div class="flex flex-col">
                                    @if (!group.multiple) {
                                        <mat-radio-group
                                            class="flex flex-col"
                                            aria-label="Select an option"
                                            [(ngModel)]="
                                                group_state[group.name]
                                            "
                                            (ngModelChange)="
                                                updateGroupOption(group, $event)
                                            "
                                            [disabled]="item()?.in_order"
                                        >
                                            <mat-radio-button
                                                class="m-0"
                                                value=""
                                            >
                                                <div
                                                    class="p-2 font-medium opacity-60"
                                                >
                                                    {{
                                                        'COMMON.NONE'
                                                            | translate
                                                    }}
                                                </div>
                                            </mat-radio-button>
                                            @for (
                                                opt of group?.options;
                                                track opt
                                            ) {
                                                <mat-radio-button
                                                    class="m-0"
                                                    [value]="opt.id"
                                                >
                                                    <div
                                                        class="flex max-w-[calc(100vw-4rem)] items-center justify-center sm:max-w-60"
                                                    >
                                                        <div
                                                            class="w-1/2 flex-1 p-2 font-medium whitespace-normal capitalize"
                                                        >
                                                            {{ opt.name }}
                                                        </div>
                                                        @if (opt.unit_price) {
                                                            <div
                                                                class="text-xs opacity-60"
                                                            >
                                                                +{{
                                                                    opt.unit_price /
                                                                        100
                                                                        | currency
                                                                            : code()
                                                                }}
                                                            </div>
                                                        }
                                                    </div>
                                                </mat-radio-button>
                                            }
                                        </mat-radio-group>
                                    } @else {
                                        @for (
                                            opt of group?.options;
                                            track opt
                                        ) {
                                            <mat-checkbox
                                                [(ngModel)]="
                                                    option_state[opt.id]
                                                "
                                                (ngModelChange)="
                                                    updateCheckedState(
                                                        opt.id,
                                                        $event
                                                    )
                                                "
                                                [disabled]="item()?.in_order"
                                            >
                                                <div
                                                    class="flex items-center justify-center"
                                                >
                                                    <div
                                                        class="w-1/2 flex-1 p-2 font-medium"
                                                    >
                                                        {{ opt.name }}
                                                    </div>
                                                    @if (opt.unit_price) {
                                                        <div
                                                            class="text-xs opacity-60"
                                                        >
                                                            +{{
                                                                opt.unit_price /
                                                                    100
                                                                    | currency
                                                                        : code()
                                                            }}
                                                        </div>
                                                    }
                                                </div>
                                            </mat-checkbox>
                                        }
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </section>
            </div>
        } @else {
            <div
                empty
                class="flex flex-col items-center justify-center space-y-2 p-16"
            >
                <p class="text-center opacity-30">
                    {{ 'CATERING.ORDER_ITEM_SELECT' | translate }}
                </p>
            </div>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      MatRippleModule,
      IconComponent,
      MatCheckboxModule,
      MatRadioModule,
      FormsModule,
      CounterComponent,
      ImageCarouselComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewCateringItemDetailsComponent, { className: "NewCateringItemDetailsComponent", filePath: "libs/catering/src/lib/new-catering-order-modal/new-catering-item-details.component.ts", lineNumber: 234 });
})();

// libs/catering/src/lib/new-catering-order-modal/new-catering-item-filters.component.ts
function NewCateringItemFiltersComponent_Conditional_11_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const caterer_r3 = ctx.$implicit;
    \u0275\u0275property("value", caterer_r3 || "<empty>");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", caterer_r3 || "[No caterer]", " ");
  }
}
function NewCateringItemFiltersComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 3)(5, "mat-select", 11);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275listener("ngModelChange", function NewCateringItemFiltersComponent_Conditional_11_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFilters({ caterer: $event }));
    });
    \u0275\u0275repeaterCreate(8, NewCateringItemFiltersComponent_Conditional_11_For_9_Template, 2, 2, "mat-option", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "CATERING.CATERER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ((tmp_2_0 = \u0275\u0275pipeBind1(6, 4, ctx_r1.filters)) == null ? null : tmp_2_0.caterer) || \u0275\u0275pipeBind1(7, 6, ctx_r1.caterers)[0]);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(10, 8, ctx_r1.caterers));
  }
}
function NewCateringItemFiltersComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.FILTERS"), " ");
  }
}
function NewCateringItemFiltersComponent_Conditional_14_Conditional_3_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r6 = ctx.$implicit;
    \u0275\u0275property("value", day_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, day_r6.value, "mediumDate"), " ");
  }
}
function NewCateringItemFiltersComponent_Conditional_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 15)(4, "mat-select", 11);
    \u0275\u0275listener("ngModelChange", function NewCateringItemFiltersComponent_Conditional_14_Conditional_3_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.offset_dayChange.emit($event));
    });
    \u0275\u0275repeaterCreate(5, NewCateringItemFiltersComponent_Conditional_14_Conditional_3_For_6_Template, 3, 5, "mat-option", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "CATERING.ORDERS_DELIVER_DATE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.offset_day());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.day_options);
  }
}
function NewCateringItemFiltersComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "settings-toggle", 13);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function NewCateringItemFiltersComponent_Conditional_14_Template_settings_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.at_timeChange.emit($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, NewCateringItemFiltersComponent_Conditional_14_Conditional_3_Template, 7, 4);
    \u0275\u0275elementStart(4, "label");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a-duration-field", 14);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275listener("ngModelChange", function NewCateringItemFiltersComponent_Conditional_14_Template_a_duration_field_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.offsetChange.emit($event);
      return \u0275\u0275resetView(ctx_r1.offset.set($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("name", \u0275\u0275pipeBind1(2, 11, "CATERING.ORDERS_DELIVER_EXACT"))("ngModel", ctx_r1.at_time())("matTooltip", ctx_r1.exact_tooltip);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.day_options.length > 1 ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 13, "CATERING.ORDERS_DELIVER_AFTER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.offset())("time", ctx_r1.offset_day() > 0 ? ctx_r1.start_of_date : (tmp_7_0 = \u0275\u0275pipeBind1(8, 15, ctx_r1.filters)) == null ? null : tmp_7_0.date)("step", ctx_r1.step_interval)("min", ctx_r1.min_offset)("max", ctx_r1.max_offset)("use_24hr", ctx_r1.use_24hr);
  }
}
function NewCateringItemFiltersComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.CATEGORIES"), " ");
  }
}
function NewCateringItemFiltersComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 16);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("ngModelChange", function NewCateringItemFiltersComponent_For_18_Template_settings_toggle_ngModelChange_0_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCategory(item_r8));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    const item_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("name", item_r8)("ngModel", (tmp_11_0 = \u0275\u0275pipeBind1(1, 3, ctx_r1.filters)) == null ? null : tmp_11_0.categories == null ? null : tmp_11_0.categories.includes(item_r8));
    \u0275\u0275attribute("name", item_r8);
  }
}
var ICONS = {
  coffee: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_605_8664)">
    <path d="M38.388 21.2474C37.8243 20.7996 37.1598 20.4847 36.4474 20.3278C35.735 20.1708 34.9944 20.1762 34.2846 20.3434C34.2476 19.7774 34.2049 19.2037 34.1483 18.6155C34.1243 18.3664 34.0043 18.1349 33.8119 17.9668C33.6195 17.7986 33.3687 17.706 33.1088 17.707H1.26151C1.00166 17.706 0.750839 17.7986 0.558442 17.9668C0.366045 18.1349 0.246035 18.3664 0.222073 18.6155C-0.42931 25.3581 0.106585 30.5307 4.80024 35.4799C8.88062 39.7819 15.7271 39.9998 17.0599 39.9998H17.3047C18.6375 39.9998 25.4863 39.7774 29.5643 35.4799C30.5412 34.4597 31.3937 33.3353 32.1052 32.1286C32.2481 32.1199 32.3875 32.0819 32.514 32.0174C34.0959 31.2139 35.6169 30.3039 37.0656 29.2943C38.3815 28.4227 39.3664 27.1618 39.871 25.7028C40.0702 24.9006 40.0372 24.0612 39.7758 23.2757C39.5144 22.4902 39.0344 21.7887 38.388 21.2474ZM28.0329 34.13C24.4699 37.8905 18.0323 37.9984 17.3093 37.9984H17.0645C16.3426 37.9984 9.90389 37.8872 6.34092 34.13C2.37257 29.9436 1.75351 25.466 2.21549 19.7085H32.1583C32.6214 25.4649 32.0024 29.9425 28.0329 34.13ZM37.8498 25.2091C37.4485 26.2369 36.7212 27.117 35.771 27.7243C35.024 28.2636 34.2434 28.7582 33.4334 29.2053C34.1268 27.0036 34.4428 24.7078 34.3689 22.4082C34.3839 22.4027 34.3989 22.4082 34.4139 22.3982C34.8447 22.2182 35.3192 22.1579 35.7837 22.2242C36.2482 22.2905 36.6841 22.4808 37.0421 22.7733C37.4001 23.0659 37.6658 23.4491 37.8092 23.8796C37.9525 24.3101 37.9678 24.7707 37.8533 25.2091H37.8498Z" fill="currentcolor"/>
    <path d="M9.43243 8.16274C9.85735 8.48322 10.2069 8.88673 10.4582 9.34669C10.7094 9.80666 10.8565 10.3126 10.89 10.8313C10.7939 11.9569 10.2754 13.0103 9.43128 13.7946C9.32937 13.883 9.24664 13.9899 9.18786 14.1092C9.12907 14.2286 9.0954 14.3579 9.08878 14.4898C9.08216 14.6217 9.10275 14.7536 9.14931 14.8778C9.19588 15.002 9.26753 15.1161 9.36012 15.2136C9.45271 15.311 9.56442 15.3898 9.6888 15.4455C9.81319 15.5012 9.9478 15.5326 10.0849 15.538C10.2219 15.5433 10.3587 15.5225 10.4874 15.4767C10.6161 15.4309 10.734 15.3611 10.8345 15.2712C12.1048 14.1093 12.8679 12.5254 12.9688 10.8413C12.9432 10.042 12.7392 9.25727 12.3708 8.5405C12.0023 7.82373 11.478 7.19166 10.8334 6.68722C10.4067 6.38353 10.055 5.99283 9.80341 5.54303C9.55184 5.09323 9.40662 4.59547 9.37815 4.08534C9.51392 3.18283 10.0073 2.36595 10.7548 1.80591C10.9718 1.64618 11.1147 1.41065 11.1528 1.15024C11.1908 0.889843 11.1208 0.625512 10.958 0.414392C10.7951 0.203272 10.5525 0.062327 10.2826 0.0220596C10.0127 -0.0182078 9.73715 0.0454338 9.51559 0.199206C8.90219 0.651996 8.39004 1.21933 8.0098 1.86721C7.62956 2.5151 7.38907 3.2302 7.30273 3.9697C7.30292 4.77855 7.49485 5.5767 7.86392 6.30333C8.23298 7.02996 8.76944 7.66592 9.43243 8.16274Z" fill="currentcolor"/>
    <path d="M23.0984 8.16274C23.5234 8.48322 23.8729 8.88673 24.1242 9.34669C24.3754 9.80666 24.5225 10.3126 24.556 10.8313C24.4599 11.9569 23.9414 13.0103 23.0973 13.7946C22.9954 13.883 22.9126 13.9899 22.8539 14.1092C22.7951 14.2286 22.7614 14.3579 22.7548 14.4898C22.7482 14.6217 22.7687 14.7536 22.8153 14.8778C22.8619 15.002 22.9335 15.1161 23.0261 15.2136C23.1187 15.311 23.2304 15.3898 23.3548 15.4455C23.4792 15.5012 23.6138 15.5326 23.7509 15.538C23.8879 15.5433 24.0247 15.5225 24.1534 15.4767C24.2821 15.4309 24.4 15.3611 24.5005 15.2712C25.7708 14.1093 26.5339 12.5254 26.6348 10.8413C26.6092 10.042 26.4052 9.25727 26.0368 8.5405C25.6683 7.82373 25.144 7.19166 24.4994 6.68722C24.0727 6.38353 23.721 5.99283 23.4694 5.54303C23.2178 5.09323 23.0726 4.59547 23.0442 4.08534C23.1799 3.18283 23.6733 2.36595 24.4208 1.80591C24.6378 1.64618 24.7807 1.41065 24.8188 1.15024C24.8568 0.889843 24.7868 0.625512 24.624 0.414392C24.4611 0.203272 24.2185 0.062327 23.9486 0.0220596C23.6787 -0.0182078 23.4032 0.0454338 23.1816 0.199206C22.5682 0.651996 22.0561 1.21933 21.6758 1.86721C21.2956 2.5151 21.0551 3.2302 20.9688 3.9697C20.9689 4.77855 21.1609 5.5767 21.5299 6.30333C21.899 7.02996 22.4355 7.66592 23.0984 8.16274Z" fill="currentcolor"/>
    <path d="M16.2645 8.16274C16.6894 8.48322 17.039 8.88673 17.2902 9.34669C17.5414 9.80666 17.6886 10.3126 17.722 10.8313C17.626 11.9569 17.1074 13.0103 16.2633 13.7946C16.1614 13.883 16.0787 13.9899 16.0199 14.1092C15.9611 14.2286 15.9274 14.3579 15.9208 14.4898C15.9142 14.6217 15.9348 14.7536 15.9813 14.8778C16.0279 15.002 16.0996 15.1161 16.1922 15.2136C16.2847 15.311 16.3964 15.3898 16.5208 15.4455C16.6452 15.5012 16.7798 15.5326 16.9169 15.538C17.054 15.5433 17.1908 15.5225 17.3194 15.4767C17.4481 15.4309 17.5661 15.3611 17.6666 15.2712C18.9368 14.1093 19.6999 12.5254 19.8009 10.8413C19.7752 10.042 19.5713 9.25727 19.2028 8.5405C18.8343 7.82373 18.31 7.19166 17.6654 6.68722C17.2387 6.38353 16.887 5.99283 16.6354 5.54303C16.3839 5.09323 16.2386 4.59547 16.2102 4.08534C16.346 3.18283 16.8393 2.36595 17.5869 1.80591C17.8038 1.64618 17.9468 1.41065 17.9848 1.15024C18.0228 0.889843 17.9528 0.625512 17.79 0.414392C17.6271 0.203272 17.3845 0.062327 17.1146 0.0220596C16.8447 -0.0182078 16.5692 0.0454338 16.3476 0.199206C15.7342 0.651996 15.2221 1.21933 14.8418 1.86721C14.4616 2.5151 14.2211 3.2302 14.1348 3.9697C14.1349 4.77855 14.3269 5.5767 14.6959 6.30333C15.065 7.02996 15.6015 7.66592 16.2645 8.16274Z" fill="currentcolor"/>
    <path d="M7.16328 29.7138C5.86597 27.7051 5.17938 25.3866 5.18141 23.0212C5.18141 22.7558 5.07191 22.5013 4.87697 22.3136C4.68204 22.1259 4.41765 22.0205 4.14198 22.0205C3.8663 22.0205 3.60191 22.1259 3.40698 22.3136C3.21204 22.5013 3.10254 22.7558 3.10254 23.0212C3.10081 25.7653 3.89738 28.4551 5.40201 30.7857C5.55001 31.0072 5.78275 31.1637 6.04976 31.2211C6.31677 31.2784 6.59652 31.2322 6.82832 31.0923C7.06012 30.9524 7.22529 30.7301 7.288 30.4737C7.35071 30.2174 7.30588 29.9475 7.16328 29.7227V29.7138Z" fill="currentcolor"/>
    <path d="M9.06498 32.7103C8.94112 32.6482 8.84235 32.548 8.78434 32.4257C8.73082 32.3026 8.65227 32.1911 8.55334 32.0977C8.45441 32.0043 8.33708 31.9309 8.20825 31.8818C8.07942 31.8327 7.9417 31.8089 7.80317 31.8118C7.66464 31.8146 7.5281 31.8441 7.40159 31.8986C7.27508 31.953 7.16115 32.0312 7.06649 32.1286C6.97184 32.226 6.89837 32.3407 6.8504 32.4658C6.80244 32.591 6.78094 32.7241 6.78719 32.8574C6.79344 32.9906 6.8273 33.1213 6.88678 33.2418C7.13536 33.7758 7.56332 34.2136 8.10177 34.4849C8.34682 34.6079 8.63256 34.6321 8.89616 34.5523C9.15975 34.4724 9.37959 34.295 9.50732 34.0591C9.63505 33.8232 9.6602 33.5481 9.57725 33.2943C9.49429 33.0405 9.31003 32.8289 9.06498 32.7059V32.7103Z" fill="currentcolor"/>
    </g>
    <defs>
    <clipPath id="clip0_605_8664">
    <rect width="40" height="40" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `,
  drinks: `<svg width="28" height="39" viewBox="0 0 28 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_598_8203)">
    <path d="M0 0L0.662157 8.11078C0.662157 8.12619 0.653028 8.1394 0.653028 8.15481C0.658117 8.18851 0.664982 8.22193 0.673584 8.25496L3.1852 39H25.1048L28.0034 0H0ZM25.7932 1.98093L25.4085 7.16985C25.3982 7.16985 25.3902 7.16985 25.3799 7.16985H2.64519L2.22279 1.98642L25.7932 1.98093ZM23.1948 37.0191H5.08147L2.80846 9.14527H25.2612L23.1948 37.0191Z" fill="currentcolor"/>
    <path d="M6.24983 23.3122C6.28864 23.3122 6.32861 23.3122 6.364 23.3122C6.49825 23.2972 6.6281 23.2567 6.74613 23.1933C6.86415 23.1298 6.96804 23.0445 7.05181 22.9423C7.13559 22.8401 7.19762 22.7229 7.23436 22.5975C7.2711 22.4722 7.28181 22.341 7.26589 22.2117C7.0661 20.5444 6.86517 18.8155 6.66538 17.0855C6.4576 15.2861 6.24869 13.4846 6.03862 11.7502C5.99894 11.4962 5.85848 11.267 5.64686 11.111C5.43525 10.955 5.16904 10.8843 4.90438 10.9138C4.63973 10.9434 4.39731 11.0708 4.22831 11.2694C4.0593 11.4679 3.9769 11.722 3.9985 11.978C4.20628 13.7091 4.41522 15.5084 4.623 17.3056C4.82392 19.0378 5.02485 20.77 5.22578 22.4395C5.25574 22.6807 5.37661 22.9029 5.56542 23.0638C5.75424 23.2247 5.99781 23.3131 6.24983 23.3122Z" fill="currentcolor"/>
    <path d="M6.05485 24.414C5.9204 24.4288 5.79029 24.469 5.67201 24.5323C5.55372 24.5957 5.44958 24.6809 5.36557 24.7832C5.28156 24.8854 5.21933 25.0027 5.18245 25.1282C5.14557 25.2537 5.13477 25.385 5.15067 25.5145L5.31392 26.8857C5.34197 27.1276 5.46141 27.351 5.64945 27.5134C5.83748 27.6758 6.08096 27.7658 6.33341 27.7662C6.37223 27.7662 6.41105 27.7662 6.44759 27.7607C6.5817 27.7462 6.71152 27.7063 6.82966 27.6434C6.9478 27.5806 7.05194 27.4959 7.13612 27.3942C7.22029 27.2925 7.28287 27.1758 7.32027 27.0508C7.35766 26.9258 7.36913 26.7949 7.35404 26.6656L7.1908 25.2889C7.15839 25.0286 7.02114 24.791 6.80864 24.6273C6.59614 24.4636 6.32541 24.387 6.05485 24.414Z" fill="currentcolor"/>
    </g>
    <defs>
    <clipPath id="clip0_598_8203">
    <rect width="28" height="39" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `,
  snacks: `<svg width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M39.9739 12.3839H39.9673C39.8416 11.3068 39.529 10.2613 39.0441 9.29623C38.2937 7.89066 37.2396 6.67826 35.9616 5.75118C34.6837 4.82411 33.2156 4.20677 31.669 3.94605C31.658 3.94605 31.6471 3.94605 31.635 3.94605C29.7116 1.41671 26.4577 0.0219894 22.162 0.00292969C17.7851 0.0287164 14.3819 1.44362 12.4015 3.94605C12.3773 3.94605 12.3553 3.94605 12.3312 3.94605C10.7845 4.20721 9.31631 4.82484 8.03823 5.75207C6.76016 6.6793 5.70574 7.89174 4.95505 9.29734C4.47112 10.2623 4.15888 11.3074 4.03289 12.3839H4.02631C2.34137 14.0479 1.12087 16.1402 0.490328 18.4457C-0.140217 20.7512 -0.15805 23.1866 0.438675 25.5015C1.16762 28.1328 2.30494 29.6228 3.81991 29.9323C4.02143 29.975 4.22667 29.9968 4.43249 29.9973C5.03503 29.925 5.61546 29.722 6.13483 29.4017C6.6542 29.0815 7.1005 28.6516 7.44377 28.1407C8.13563 27.3077 8.96125 26.601 9.88529 26.0508C10.6588 25.658 11.4715 25.3513 12.3092 25.136C12.7407 25.007 13.2105 24.8624 13.7122 24.6875C14.2182 24.7717 14.7299 24.8148 15.2426 24.8164C16.5191 24.8132 17.7827 24.5561 18.963 24.0597C19.2243 24.1678 19.4915 24.2603 19.7633 24.3366C20.4624 24.5255 21.1737 24.6634 21.892 24.7492C21.9649 24.7584 22.0386 24.7584 22.1115 24.7492C22.8298 24.6634 23.5411 24.5255 24.2402 24.3366C24.5121 24.2602 24.7794 24.1674 25.0405 24.0585C26.6985 24.7663 28.5179 24.9843 30.2913 24.6875C30.7941 24.8568 31.2639 25.0014 31.6954 25.136C32.5326 25.3518 33.3449 25.6585 34.1182 26.0508C35.0422 26.6006 35.8675 27.3074 36.5586 28.1407C36.9021 28.6516 37.3486 29.0816 37.8682 29.4018C38.3877 29.722 38.9683 29.925 39.571 29.9973C39.7765 29.9968 39.9813 29.975 40.1825 29.9323C41.6986 29.6228 42.8359 28.1317 43.5648 25.5015C44.1604 23.1863 44.1418 20.7509 43.5107 18.4455C42.8796 16.1401 41.6588 14.0479 39.9739 12.3839ZM8.94886 24.276C7.83296 24.927 6.83512 25.7694 5.99906 26.7661C5.09447 27.7561 4.76074 28.07 4.20854 27.9568C3.49936 27.8111 2.83628 26.7459 2.34227 24.9543C1.92223 23.3112 1.86627 21.5932 2.17848 19.9252C2.4907 18.2572 3.16322 16.6814 4.14706 15.3124C4.29059 16.0686 4.52165 16.8048 4.83539 17.5054C6.01506 20.1182 8.00316 22.2624 10.4935 23.6078C9.96108 23.7857 9.44437 24.0092 8.94886 24.276ZM14.1514 22.7266C13.9962 22.6555 13.8256 22.6265 13.6562 22.6425C12.1235 22.2411 10.6976 21.4958 9.48221 20.461C8.26685 19.4261 7.2926 18.1277 6.63029 16.66C6.16216 15.6502 5.92631 14.5445 5.94077 13.4274C5.95523 12.3102 6.21962 11.2112 6.71373 10.2145C7.64306 8.45293 9.17618 7.10357 11.0193 6.42493C9.99726 9.36013 10.6472 13.6553 12.7165 17.6365C13.6785 19.5654 15.0132 21.2752 16.6401 22.6627C15.8195 22.8232 14.9787 22.8448 14.1514 22.7266ZM23.7451 22.3903C23.1716 22.5448 22.5889 22.6613 22.0007 22.7389C21.4117 22.6614 20.8283 22.5449 20.254 22.3903C18.2033 21.8521 16.0374 19.7219 14.462 16.6925C12.6704 13.2438 12.0469 9.47672 12.8834 7.09538C14.473 2.55356 19.9093 2.03223 22.1653 2.01765C25.4445 2.03783 29.66 2.93475 31.1157 7.09538C31.9501 9.4756 31.3353 13.2427 29.5393 16.6903C27.9628 19.7197 25.798 21.851 23.7451 22.3891V22.3903ZM27.3579 22.6649C28.9873 21.2782 30.3233 19.5673 31.2848 17.6365C33.353 13.6542 34.0019 9.36013 32.9798 6.42493C34.8231 7.1032 36.3564 8.45266 37.2854 10.2145C37.7798 11.2111 38.0446 12.31 38.0594 13.4271C38.0743 14.5442 37.8388 15.6501 37.371 16.66C36.7089 18.1267 35.7356 19.4246 34.5215 20.4595C33.3074 21.4945 31.883 22.2405 30.3517 22.6436C30.1773 22.6248 30.0013 22.6546 29.8423 22.73C29.0162 22.8474 28.1769 22.825 27.3579 22.6638V22.6649ZM41.6601 24.9555C41.165 26.7493 40.5009 27.8122 39.7939 27.9579C39.2516 28.07 38.9156 27.7595 38.0033 26.7673C37.1671 25.7707 36.1693 24.9284 35.0536 24.2772C34.5589 24.0089 34.0429 23.7839 33.5111 23.6045C36.0014 22.2591 37.9895 20.1148 39.1692 17.502C39.4825 16.8016 39.7135 16.0659 39.8575 15.3101C40.8408 16.6799 41.5127 18.2562 41.8245 19.9245C42.1364 21.5927 42.0802 23.311 41.6601 24.9543V24.9555Z" fill="currentColor"/>
    <path d="M17.3428 15.7782C16.1626 13.048 15.7674 10.0313 16.2032 7.08028C16.2231 6.94931 16.2174 6.81565 16.1867 6.68691C16.1559 6.55816 16.1006 6.43686 16.024 6.32994C15.9473 6.22302 15.8508 6.13257 15.7399 6.06375C15.629 5.99493 15.5059 5.94908 15.3777 5.92884C15.2495 5.90859 15.1186 5.91434 14.9925 5.94576C14.8665 5.97717 14.7477 6.03365 14.643 6.11194C14.5383 6.19023 14.4497 6.2888 14.3824 6.40205C14.315 6.5153 14.2701 6.641 14.2503 6.77197C13.7579 10.1061 14.2045 13.5144 15.538 16.5989C15.5889 16.7227 15.6636 16.8349 15.7575 16.9289C15.8515 17.0229 15.9628 17.0967 16.0851 17.1462C16.2074 17.1956 16.3381 17.2197 16.4695 17.2168C16.601 17.214 16.7306 17.1844 16.8507 17.1298C16.9709 17.0752 17.0791 16.9966 17.1691 16.8987C17.2591 16.8008 17.3291 16.6855 17.3749 16.5597C17.4208 16.4338 17.4415 16.2998 17.436 16.1656C17.4305 16.0315 17.3988 15.8997 17.3428 15.7782Z" fill="currentColor"/>
    <path d="M19.696 19.2067C19.2865 18.9533 18.9569 18.5852 18.7464 18.146C18.6921 18.023 18.6143 17.9124 18.5174 17.8206C18.4206 17.7288 18.3067 17.6578 18.1825 17.6118C18.0583 17.5658 17.9263 17.5456 17.7944 17.5526C17.6625 17.5596 17.5333 17.5935 17.4144 17.6524C17.2955 17.7112 17.1894 17.7939 17.1023 17.8953C17.0153 17.9968 16.949 18.1151 16.9075 18.2432C16.866 18.3712 16.85 18.5065 16.8606 18.641C16.8712 18.7755 16.908 18.9065 16.969 19.0262C17.3477 19.8156 17.9407 20.4772 18.6772 20.9321C18.7884 21.0004 18.9117 21.0457 19.0401 21.0654C19.1684 21.085 19.2993 21.0786 19.4253 21.0466C19.5512 21.0146 19.6698 20.9576 19.7741 20.8788C19.8785 20.8 19.9666 20.701 20.0335 20.5874C20.1004 20.4738 20.1448 20.3478 20.164 20.2168C20.1832 20.0857 20.177 19.952 20.1456 19.8234C20.1143 19.6947 20.0585 19.5737 19.9813 19.4671C19.9041 19.3605 19.8072 19.2705 19.696 19.2022V19.2067Z" fill="currentColor"/>
    </svg>
    `,
  meals: `<svg width="44" height="47" viewBox="0 0 44 47" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_598_8219)">
    <path d="M42.941 2.11595C42.7415 1.9851 42.4981 1.93888 42.2644 1.98745C42.0307 2.03602 41.8259 2.1754 41.695 2.37496L34.006 14.102C33.3796 13.6496 32.7178 13.2483 32.027 12.902C32.0551 12.8557 32.0786 12.8068 32.097 12.756L35.4431 1.14795C35.5094 0.91841 35.4818 0.671927 35.3663 0.46273C35.2509 0.253533 35.0571 0.098759 34.8275 0.0324549C34.598 -0.0338492 34.3515 -0.0062506 34.1423 0.109178C33.9331 0.224607 33.7783 0.41841 33.712 0.647954L30.382 12.202C28.8498 11.6558 27.2357 11.3751 25.609 11.372C23.5868 11.3208 21.5789 11.7248 19.7337 12.5541C17.8886 13.3834 16.2534 14.6167 14.949 16.163C13.472 15.5617 11.8698 15.3326 10.2834 15.4959C8.69704 15.6593 7.17511 16.21 5.85156 17.0996C4.528 17.9893 3.44339 19.1906 2.69314 20.5978C1.94289 22.0051 1.54999 23.5752 1.54904 25.17H0.900049C0.781014 25.1699 0.663159 25.1936 0.553309 25.2394C0.443459 25.2853 0.343801 25.3524 0.260096 25.4371C0.176391 25.5217 0.110305 25.6221 0.0656684 25.7325C0.0210317 25.8428 -0.00126705 25.9609 5.5571e-05 26.08C0.0892682 29.5951 1.16582 33.0142 3.10662 35.9464C5.04743 38.8786 7.77413 41.2054 10.975 42.661V45.147C10.975 45.3856 11.0699 45.6146 11.2386 45.7834C11.4074 45.9521 11.6364 46.047 11.8751 46.047H29.692C29.9307 46.047 30.1596 45.9521 30.3284 45.7834C30.4972 45.6146 30.592 45.3856 30.592 45.147V42.665C33.7927 41.2092 36.5191 38.8822 38.4597 35.9501C40.4004 33.018 41.4768 29.599 41.566 26.084C41.5674 25.9649 41.5451 25.8468 41.5004 25.7365C41.4558 25.6261 41.3897 25.5257 41.306 25.4411C41.2223 25.3565 41.1226 25.2893 41.0128 25.2434C40.9029 25.1976 40.7851 25.1739 40.666 25.174H39.976C39.82 21.3924 38.1759 17.8258 35.402 15.251L43.197 3.36196C43.3282 3.16274 43.3749 2.91961 43.3269 2.68598C43.2789 2.45235 43.1401 2.24733 42.941 2.11595ZM11.292 17.249C13.3949 17.2513 15.4113 18.0864 16.9 19.5716C18.3887 21.0568 19.2286 23.0711 19.236 25.174H18.476C18.4537 23.2835 17.6871 21.4779 16.3423 20.149C14.9976 18.82 13.1832 18.0747 11.2925 18.0747C9.4019 18.0747 7.58747 18.82 6.24273 20.149C4.89799 21.4779 4.13134 23.2835 4.10903 25.174H3.34905C3.35619 23.0712 4.1959 21.0569 5.68447 19.5717C7.17304 18.0865 9.18928 17.2513 11.292 17.249ZM30.46 25.174C30.3295 24.0738 29.829 23.0506 29.0406 22.2723C28.2521 21.494 27.2226 21.0067 26.1208 20.8904C25.019 20.7742 23.9104 21.0358 22.9769 21.6324C22.0433 22.2291 21.3403 23.1252 20.983 24.174C20.8976 23.3879 20.7156 22.6154 20.441 21.874C21.2275 20.8287 22.312 20.0461 23.5519 19.6292C24.7917 19.2124 26.1287 19.1807 27.3869 19.5384C28.6451 19.8962 29.7655 20.6265 30.6005 21.6334C31.4356 22.6402 31.9461 23.8763 32.065 25.179L30.46 25.174ZM28.66 25.174H22.555C22.6942 24.4666 23.0746 23.8296 23.6314 23.3717C24.1882 22.9138 24.8867 22.6634 25.6075 22.6634C26.3284 22.6634 27.0269 22.9138 27.5837 23.3717C28.1404 23.8296 28.5209 24.4666 28.66 25.174ZM33.8661 25.174C33.7524 23.5697 33.1734 22.0335 32.1999 20.7533C31.2265 19.4731 29.9008 18.5046 28.3853 17.9663C26.8698 17.428 25.2303 17.3434 23.6674 17.7227C22.1045 18.102 20.6862 18.9288 19.5861 20.102C19.3425 19.7013 19.0704 19.3187 18.772 18.957C19.6483 18.0285 20.7095 17.2942 21.8871 16.8014C23.0648 16.3086 24.3327 16.0683 25.609 16.096C28.0701 16.1 30.4374 17.0409 32.2298 18.7275C34.0222 20.414 35.1053 22.7196 35.259 25.176L33.8661 25.174ZM15.376 25.174C15.376 24.0911 14.9459 23.0525 14.1802 22.2868C13.4145 21.5211 12.3759 21.091 11.2931 21.091C10.2102 21.091 9.17165 21.5211 8.40594 22.2868C7.64023 23.0525 7.21005 24.0911 7.21005 25.174H5.91003C5.92931 23.7594 6.5048 22.4093 7.51193 21.4158C8.51906 20.4223 9.87684 19.8653 11.2915 19.8653C12.7062 19.8653 14.064 20.4223 15.0712 21.4158C16.0783 22.4093 16.6537 23.7594 16.673 25.174H15.376ZM13.576 25.174H9.01205C9.02455 24.5769 9.27051 24.0085 9.6972 23.5906C10.1239 23.1728 10.6973 22.9387 11.2945 22.9387C11.8918 22.9387 12.4652 23.1728 12.8919 23.5906C13.3186 24.0085 13.5646 24.5769 13.5771 25.174H13.576ZM12.7761 44.251V43.132H28.792V44.251H12.7761ZM29.136 41.332H12.436C9.52258 40.1406 6.99281 38.1712 5.12332 35.6389C3.25383 33.1066 2.11663 30.109 1.83605 26.974H39.7281C39.4482 30.1081 38.3122 33.1051 36.4441 35.6373C34.5761 38.1695 32.048 40.1395 29.136 41.332ZM38.178 25.174H37.0601C36.9048 22.2401 35.6312 19.4773 33.5013 17.4538C31.3713 15.4303 28.547 14.2998 25.609 14.295C24.0957 14.2643 22.5927 14.55 21.1962 15.1338C19.7996 15.7176 18.5404 16.5865 17.499 17.685C17.2087 17.4481 16.9052 17.2277 16.5901 17.025C17.7218 15.7645 19.1155 14.7668 20.6734 14.1017C22.2314 13.4367 23.9159 13.1204 25.609 13.175C28.8438 13.1792 31.9531 14.4275 34.2929 16.6611C36.6327 18.8948 38.0237 21.9428 38.178 25.174Z" fill="currentColor"/>
    <path d="M3.39209 30.1722C4.045 32.6025 5.31628 34.8222 7.08209 36.6152C7.16443 36.7021 7.26327 36.7717 7.37286 36.8199C7.48244 36.8682 7.60056 36.8941 7.72027 36.8961C7.83999 36.8981 7.95888 36.8762 8.07003 36.8317C8.18118 36.7872 8.28235 36.7209 8.36758 36.6368C8.45281 36.5528 8.52038 36.4525 8.56637 36.342C8.61237 36.2314 8.63585 36.1128 8.63543 35.9931C8.63501 35.8733 8.6107 35.7549 8.56393 35.6447C8.51716 35.5344 8.44888 35.4347 8.36306 35.3512C6.81633 33.7796 5.70257 31.8346 5.13006 29.7052C5.1013 29.589 5.04966 29.4797 4.97815 29.3837C4.90663 29.2878 4.81669 29.207 4.71359 29.1462C4.61049 29.0854 4.49631 29.0458 4.37771 29.0297C4.25912 29.0136 4.1385 29.0213 4.02291 29.0523C3.90733 29.0834 3.7991 29.1372 3.70456 29.2106C3.61001 29.284 3.53106 29.3755 3.47232 29.4798C3.41357 29.584 3.3762 29.699 3.36242 29.8179C3.34865 29.9368 3.35875 30.0572 3.39209 30.1722Z" fill="#323232"/>
    <path d="M10.5356 39.5502C10.7282 39.6767 10.962 39.7245 11.1889 39.6838C11.4157 39.643 11.6182 39.5168 11.7547 39.3312C11.8913 39.1456 11.9514 38.9146 11.9227 38.6859C11.8941 38.4573 11.7788 38.2483 11.6006 38.1022L10.3336 37.1752C10.1407 37.0392 9.90209 36.9844 9.66918 37.0226C9.43627 37.0609 9.2277 37.1891 9.08843 37.3797C8.94915 37.5702 8.89031 37.8079 8.92458 38.0414C8.95884 38.2749 9.08345 38.4857 9.27159 38.6282L10.5356 39.5502Z" fill="#323232"/>
    </g>
    <defs>
    <clipPath id="clip0_598_8219">
    <rect width="43.348" height="46.051" fill="white"/>
    </clipPath>
    </defs>
    </svg>`
};
var _NewCateringItemFiltersComponent = class _NewCateringItemFiltersComponent extends AsyncHandler {
  get start_of_date() {
    return startOfDay(addDays(this._state.getFilters().date, this.offset_day())).valueOf();
  }
  get min_offset() {
    return this.offset_day() > 0 ? 0 : this._min_offset;
  }
  get step_interval() {
    return this._settings.get("app.catering.step_interval") || 5;
  }
  get max_offset() {
    const end = Math.min(endOfDay(addDays(this._state.getFilters().date, this.offset_day())).valueOf(), addMinutes(this._state.getFilters().date, this._state.getFilters().duration).valueOf());
    const diff = differenceInMinutes(end, this._state.getFilters().date);
    return Math.min(diff, Math.min(24 * 60 - 1, this._max_offset));
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  constructor() {
    super();
    this._state = inject(CateringOrderStateService);
    this._settings = inject(SettingsService);
    this.search = input(false);
    this.at_time = input(false);
    this.at_timeChange = output();
    this.offset = model(0);
    this.offsetChange = output();
    this.offset_day = input(0);
    this.offset_dayChange = output();
    this._min_offset = 0;
    this._max_offset = 60;
    this.icons = ICONS;
    this.filters = this._state.filters;
    this.setFilters = (f) => this._state.setFilters(f);
    this.categories = this._state.categories;
    this.caterers = this._state.caterers;
    this.exact_tooltip = "";
    this.day_options = [];
  }
  ngOnInit() {
    this._min_offset = Math.max(this._settings.get("app.catering.min_offset"), 0);
    this.exact_tooltip = i18n("CATERING.ORDERS_DELIVER_EXACT_INFO");
    this.subscription("filters", this._state.filters.subscribe(() => {
      this._max_offset = Math.max(15, (this._state.getFilters().duration || 60) - this._settings.get("app.catering.end_offset"));
      this._updateDayOptions();
    }));
    this._updateDayOptions();
  }
  async toggleCategory(name) {
    const { categories } = await nextValueFrom(this.filters);
    if (categories.includes(name))
      this.setFilters({
        categories: categories.filter((_) => _ !== name)
      });
    else
      this.setFilters({ categories: [...categories, name] });
  }
  async toggleTag(tag) {
    const { tags } = await nextValueFrom(this.filters);
    if (tags.includes(tag))
      this.setFilters({ tags: tags.filter((_) => _ !== tag) });
    else
      this.setFilters({ tags: [...tags, tag] });
  }
  _updateDayOptions() {
    const { date, duration } = this._state.getFilters();
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
_NewCateringItemFiltersComponent.\u0275fac = function NewCateringItemFiltersComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewCateringItemFiltersComponent)();
};
_NewCateringItemFiltersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewCateringItemFiltersComponent, selectors: [["new-catering-item-filters"]], inputs: { search: [1, "search"], at_time: [1, "at_time"], offset: [1, "offset"], offset_day: [1, "offset_day"] }, outputs: { at_timeChange: "at_timeChange", offset: "offsetChange", offsetChange: "offsetChange", offset_dayChange: "offset_dayChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 20, vars: 21, consts: [[1, "border-base-300", "bg-base-100", "sticky", "top-0", "z-10", "flex", "items-center", "border-b", "px-4", "py-4"], [1, "text-xl", "font-medium"], [1, "mt-2", "mb-2", "px-2"], ["appearance", "outline", 1, "h-14", "w-full"], ["matPrefix", "", 1, "text-xl"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], [1, "hidden", "px-2", "py-2", "sm:block"], [1, "hidden", "px-2", "py-2", "font-medium", "sm:block"], [1, "flex", "flex-col", "space-y-2", "px-2"], [1, "hidden", "px-2", "py-4", "font-medium", "sm:block"], [3, "name", "ngModel"], [3, "ngModelChange", "ngModel"], [3, "value"], [3, "ngModelChange", "name", "ngModel", "matTooltip"], [3, "ngModelChange", "ngModel", "time", "step", "min", "max", "use_24hr"], ["appearance", "outline", 1, "no-subscript", "mb-4", "w-full"], [3, "ngModelChange", "name", "ngModel"]], template: function NewCateringItemFiltersComponent_Template(rf, ctx) {
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
    \u0275\u0275listener("ngModelChange", function NewCateringItemFiltersComponent_Template_input_ngModelChange_8_listener($event) {
      return ctx.setFilters({ search: $event });
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(11, NewCateringItemFiltersComponent_Conditional_11_Template, 11, 10, "div", 6);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275conditionalCreate(13, NewCateringItemFiltersComponent_Conditional_13_Template, 3, 3, "h3", 7);
    \u0275\u0275conditionalCreate(14, NewCateringItemFiltersComponent_Conditional_14_Template, 9, 17, "div", 8);
    \u0275\u0275conditionalCreate(15, NewCateringItemFiltersComponent_Conditional_15_Template, 3, 3, "h3", 9);
    \u0275\u0275elementStart(16, "div", 8);
    \u0275\u0275repeaterCreate(17, NewCateringItemFiltersComponent_For_18_Template, 2, 5, "settings-toggle", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_3_0;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 11, "COMMON.FILTERS"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", (tmp_1_0 = \u0275\u0275pipeBind1(9, 13, ctx.filters)) == null ? null : tmp_1_0.search)("placeholder", \u0275\u0275pipeBind1(10, 15, "CATERING.MENU_SEARCH"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx.search() && ((tmp_3_0 = \u0275\u0275pipeBind1(12, 17, ctx.caterers)) == null ? null : tmp_3_0.length) > 1 ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.search() ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.search() ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.search() ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("sm:hidden", ctx.search())("sm:pt-1", !ctx.search());
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(19, 19, ctx.categories));
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DatePipe,
  TranslatePipe,
  MatCheckboxModule,
  IconComponent,
  MatFormFieldModule,
  MatFormField,
  MatPrefix,
  DurationFieldComponent,
  MatSelectModule,
  MatSelect,
  MatOption,
  MatInputModule,
  MatInput,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  SettingsToggleComponent,
  MatTooltipModule,
  MatTooltip
], encapsulation: 2 });
var NewCateringItemFiltersComponent = _NewCateringItemFiltersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewCateringItemFiltersComponent, [{
    type: Component,
    args: [{ selector: "new-catering-item-filters", template: `
        <div
            class="border-base-300 bg-base-100 sticky top-0 z-10 flex items-center border-b px-4 py-4"
        >
            <h3 class="text-xl font-medium">
                {{ 'COMMON.FILTERS' | translate }}
            </h3>
        </div>
        <div class="mt-2 mb-2 px-2">
            <mat-form-field appearance="outline" class="h-14 w-full">
                <icon matPrefix class="text-xl">search</icon>
                <input
                    matInput
                    [ngModel]="(filters | async)?.search"
                    (ngModelChange)="setFilters({ search: $event })"
                    [placeholder]="'CATERING.MENU_SEARCH' | translate"
                />
            </mat-form-field>
        </div>
        @if (!search() && (caterers | async)?.length > 1) {
            <div class="hidden px-2 py-2 sm:block">
                <label>{{ 'CATERING.CATERER' | translate }}</label>
                <mat-form-field appearance="outline" class="h-14 w-full">
                    <mat-select
                        [ngModel]="
                            (filters | async)?.caterer || (caterers | async)[0]
                        "
                        (ngModelChange)="setFilters({ caterer: $event })"
                    >
                        @for (caterer of caterers | async; track caterer) {
                            <mat-option [value]="caterer || '<empty>'">
                                {{ caterer || '[No caterer]' }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
        }
        @if (!search()) {
            <h3 class="hidden px-2 py-2 font-medium sm:block">
                {{ 'COMMON.FILTERS' | translate }}
            </h3>
        }
        @if (!search()) {
            <div class="flex flex-col space-y-2 px-2">
                <settings-toggle
                    [name]="'CATERING.ORDERS_DELIVER_EXACT' | translate"
                    [ngModel]="at_time()"
                    (ngModelChange)="at_timeChange.emit($event)"
                    [matTooltip]="exact_tooltip"
                ></settings-toggle>
                @if (day_options.length > 1) {
                    <label>{{
                        'CATERING.ORDERS_DELIVER_DATE' | translate
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
                <label>{{ 'CATERING.ORDERS_DELIVER_AFTER' | translate }}</label>
                <a-duration-field
                    [ngModel]="offset()"
                    (ngModelChange)="
                        offsetChange.emit($event); offset.set($event)
                    "
                    [time]="
                        offset_day() > 0
                            ? start_of_date
                            : (filters | async)?.date
                    "
                    [step]="step_interval"
                    [min]="min_offset"
                    [max]="max_offset"
                    [use_24hr]="use_24hr"
                ></a-duration-field>
            </div>
        }
        @if (!search()) {
            <h3 class="hidden px-2 py-4 font-medium sm:block">
                {{ 'COMMON.CATEGORIES' | translate }}
            </h3>
        }
        <div
            class="flex flex-col space-y-2 px-2"
            [class.sm:hidden]="search()"
            [class.sm:pt-1]="!search()"
        >
            @for (item of categories | async; track item) {
                <settings-toggle
                    [name]="item"
                    [attr.name]="item"
                    [ngModel]="(filters | async)?.categories?.includes(item)"
                    (ngModelChange)="toggleCategory(item)"
                ></settings-toggle>
            }
        </div>
    `, imports: [
      CommonModule,
      TranslatePipe,
      MatCheckboxModule,
      IconComponent,
      MatFormFieldModule,
      DurationFieldComponent,
      MatSelectModule,
      MatInputModule,
      FormsModule,
      SettingsToggleComponent,
      MatTooltipModule
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewCateringItemFiltersComponent, { className: "NewCateringItemFiltersComponent", filePath: "libs/catering/src/lib/new-catering-order-modal/new-catering-item-filters.component.ts", lineNumber: 204 });
})();

// libs/catering/src/lib/new-catering-order-modal/new-catering-item-list-item.component.ts
function NewCateringItemListItemComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.item().quantity || "1", " ");
  }
}
function NewCateringItemListItemComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("source", ctx_r0.item().images[0]);
  }
}
function NewCateringItemListItemComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 5);
  }
}
function NewCateringItemListItemComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r0.item().unit_price / 100, ctx_r0.code()), " ");
  }
}
function NewCateringItemListItemComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.options, " ");
  }
}
function NewCateringItemListItemComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, " GF ");
    \u0275\u0275elementEnd();
  }
}
function NewCateringItemListItemComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, " VG ");
    \u0275\u0275elementEnd();
  }
}
function NewCateringItemListItemComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, " V ");
    \u0275\u0275elementEnd();
  }
}
function NewCateringItemListItemComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1, " D ");
    \u0275\u0275elementEnd();
  }
}
function NewCateringItemListItemComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, " N ");
    \u0275\u0275elementEnd();
  }
}
var _NewCateringItemListItemComponent = class _NewCateringItemListItemComponent {
  constructor() {
    this.item = input(void 0);
    this.active = input(false);
    this.selected = input(false);
    this.favourite = input(false);
    this.code = input("USD");
    this.toggleFav = output();
    this.select = output();
  }
  get options() {
    return this.item().option_list?.map((_) => _.name).join(", ");
  }
};
_NewCateringItemListItemComponent.\u0275fac = function NewCateringItemListItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewCateringItemListItemComponent)();
};
_NewCateringItemListItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewCateringItemListItemComponent, selectors: [["new-catering-item-list-item"]], inputs: { item: [1, "item"], active: [1, "active"], selected: [1, "selected"], favourite: [1, "favourite"], code: [1, "code"] }, outputs: { toggleFav: "toggleFav", select: "select" }, decls: 23, vars: 16, consts: [["item", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "relative", "w-full", "rounded-lg", "border", "p-2", "shadow-sm"], ["name", "select-catering-item", 1, "z-0", "flex", "h-full", "w-full", "items-center", 3, "click"], [1, "border-base-200", "bg-neutral", "relative", "mr-4", "flex", "h-16", "w-16", "items-center", "justify-center", "overflow-hidden", "rounded-xl", "border"], [1, "bg-neutral", "absolute", "top-1", "left-1", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "border", "border-white", "text-xs", "text-white"], ["auth", "", 1, "min-h-full", "min-w-full", "object-cover", 3, "source"], ["src", "assets/icons/catering-placeholder.svg", 1, "m-auto"], [1, "flex-1", "space-y-2", "text-left"], [1, "flex", "flex-col", "pr-10", "font-medium"], [1, "text-xs", "opacity-60"], [1, "flex", "items-center", "space-x-1", "text-sm"], [1, "bg-base-100", "w-px", "flex-1", "rounded-sm"], [1, "border-base-200", "rounded-2xl", "border", "px-2", "py-1", "text-xs", "shadow-sm"], [1, "bg-success", "flex", "h-5", "w-7", "items-center", "justify-center", "rounded-xl", "text-xs", "shadow-sm"], [1, "bg-info", "flex", "h-5", "w-7", "items-center", "justify-center", "rounded-xl", "text-xs", "shadow-sm"], [1, "bg-warning", "flex", "h-5", "w-7", "items-center", "justify-center", "rounded-xl", "text-xs", "shadow-sm"], [1, "flex", "h-5", "w-7", "items-center", "justify-center", "rounded-xl", "bg-orange-600", "text-xs", "shadow-sm"], ["icon", "", "matRipple", "", "name", "toggle-catering-item-favourite", 1, "absolute", "top-1", "right-1", 3, "click"], [3, "className"]], template: function NewCateringItemListItemComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 0)(1, "button", 1);
    \u0275\u0275listener("click", function NewCateringItemListItemComponent_Template_button_click_1_listener() {
      return ctx.select.emit();
    });
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275conditionalCreate(3, NewCateringItemListItemComponent_Conditional_3_Template, 2, 1, "div", 3);
    \u0275\u0275conditionalCreate(4, NewCateringItemListItemComponent_Conditional_4_Template, 1, 1, "img", 4)(5, NewCateringItemListItemComponent_Conditional_5_Template, 1, 0, "img", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "div");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 8);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 9);
    \u0275\u0275conditionalCreate(13, NewCateringItemListItemComponent_Conditional_13_Template, 3, 4, "p", 10);
    \u0275\u0275conditionalCreate(14, NewCateringItemListItemComponent_Conditional_14_Template, 2, 1, "div", 11);
    \u0275\u0275conditionalCreate(15, NewCateringItemListItemComponent_Conditional_15_Template, 2, 0, "div", 12);
    \u0275\u0275conditionalCreate(16, NewCateringItemListItemComponent_Conditional_16_Template, 2, 0, "div", 13);
    \u0275\u0275conditionalCreate(17, NewCateringItemListItemComponent_Conditional_17_Template, 2, 0, "div", 13);
    \u0275\u0275conditionalCreate(18, NewCateringItemListItemComponent_Conditional_18_Template, 2, 0, "div", 14);
    \u0275\u0275conditionalCreate(19, NewCateringItemListItemComponent_Conditional_19_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "button", 16);
    \u0275\u0275listener("click", function NewCateringItemListItemComponent_Template_button_click_20_listener() {
      return ctx.toggleFav.emit();
    });
    \u0275\u0275elementStart(21, "icon", 17);
    \u0275\u0275text(22, "favorite");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    \u0275\u0275classProp("border-base-200!", ctx.active());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.item().quantity && ctx.selected() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = ctx.item().images) == null ? null : tmp_2_0.length) ? 4 : 5);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.item().name || "Item");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.item().category, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.item().unit_price ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_6_0 = ctx.item().option_list) == null ? null : tmp_6_0.length) ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_7_0 = ctx.item().tags) == null ? null : tmp_7_0.includes("Gluten Free")) ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_8_0 = ctx.item().tags) == null ? null : tmp_8_0.includes("Vegan")) ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_9_0 = ctx.item().tags) == null ? null : tmp_9_0.includes("Vegetarian")) ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_10_0 = ctx.item().tags) == null ? null : tmp_10_0.includes("Contains Dairy")) ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_11_0 = ctx.item().tags) == null ? null : tmp_11_0.includes("Contains Nuts")) ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-info", ctx.favourite());
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx.favourite() ? "material-symbols-rounded" : "material-symbols-outlined");
  }
}, dependencies: [
  CommonModule,
  CurrencyPipe,
  IconComponent,
  MatRippleModule,
  MatRipple,
  AuthenticatedImageDirective
], encapsulation: 2 });
var NewCateringItemListItemComponent = _NewCateringItemListItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewCateringItemListItemComponent, [{
    type: Component,
    args: [{ selector: "new-catering-item-list-item", template: `
        <li
            item
            [class.border-base-200!]="active()"
            matRipple
            class="border-base-200 bg-base-100 relative w-full rounded-lg border p-2 shadow-sm"
        >
            <button
                name="select-catering-item"
                class="z-0 flex h-full w-full items-center"
                (click)="select.emit()"
            >
                <div
                    class="border-base-200 bg-neutral relative mr-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border"
                >
                    @if (item().quantity && selected()) {
                        <div
                            class="bg-neutral absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border border-white text-xs text-white"
                        >
                            {{ item().quantity || '1' }}
                        </div>
                    }
                    @if (item().images?.length) {
                        <img
                            auth
                            class="min-h-full min-w-full object-cover"
                            [source]="item().images[0]"
                        />
                    } @else {
                        <img
                            class="m-auto"
                            src="assets/icons/catering-placeholder.svg"
                        />
                    }
                </div>
                <div class="flex-1 space-y-2 text-left">
                    <div class="flex flex-col pr-10 font-medium">
                        <div>{{ item().name || 'Item' }}</div>
                        <div class="text-xs opacity-60">
                            {{ item().category }}
                        </div>
                    </div>
                    <div class="flex items-center space-x-1 text-sm">
                        @if (item().unit_price) {
                            <p class="bg-base-100 w-px flex-1 rounded-sm">
                                {{ item().unit_price / 100 | currency: code() }}
                            </p>
                        }
                        @if (item().option_list?.length) {
                            <div
                                class="border-base-200 rounded-2xl border px-2 py-1 text-xs shadow-sm"
                            >
                                {{ options }}
                            </div>
                        }
                        @if (item().tags?.includes('Gluten Free')) {
                            <div
                                class="bg-success flex h-5 w-7 items-center justify-center rounded-xl text-xs shadow-sm"
                            >
                                GF
                            </div>
                        }
                        @if (item().tags?.includes('Vegan')) {
                            <div
                                class="bg-info flex h-5 w-7 items-center justify-center rounded-xl text-xs shadow-sm"
                            >
                                VG
                            </div>
                        }
                        @if (item().tags?.includes('Vegetarian')) {
                            <div
                                class="bg-info flex h-5 w-7 items-center justify-center rounded-xl text-xs shadow-sm"
                            >
                                V
                            </div>
                        }
                        @if (item().tags?.includes('Contains Dairy')) {
                            <div
                                class="bg-warning flex h-5 w-7 items-center justify-center rounded-xl text-xs shadow-sm"
                            >
                                D
                            </div>
                        }
                        @if (item().tags?.includes('Contains Nuts')) {
                            <div
                                class="flex h-5 w-7 items-center justify-center rounded-xl bg-orange-600 text-xs shadow-sm"
                            >
                                N
                            </div>
                        }
                    </div>
                </div>
            </button>
            <button
                icon
                matRipple
                name="toggle-catering-item-favourite"
                class="absolute top-1 right-1"
                [class.text-info]="favourite()"
                (click)="toggleFav.emit()"
            >
                <icon
                    [className]="
                        favourite()
                            ? 'material-symbols-rounded'
                            : 'material-symbols-outlined'
                    "
                    >favorite</icon
                >
            </button>
        </li>
    `, imports: [
      CommonModule,
      IconComponent,
      MatRippleModule,
      AuthenticatedImageDirective
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewCateringItemListItemComponent, { className: "NewCateringItemListItemComponent", filePath: "libs/catering/src/lib/new-catering-order-modal/new-catering-item-list-item.component.ts", lineNumber: 131 });
})();

// libs/catering/src/lib/new-catering-order-modal/new-catering-item-list.component.ts
var _c06 = (a0) => ({ count: a0 });
function NewCateringItemListComponent_Conditional_1_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "new-catering-item-list-item", 6);
    \u0275\u0275listener("toggleFav", function NewCateringItemListComponent_Conditional_1_For_9_Template_new_catering_item_list_item_toggleFav_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleFav.emit(item_r2));
    })("select", function NewCateringItemListComponent_Conditional_1_For_9_Template_new_catering_item_list_item_select_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectItem(item_r2, true));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("item", item_r2)("active", ctx_r2.active() === item_r2.custom_id)("selected", true)("favourite", ctx_r2.isFavourite(item_r2.id));
  }
}
function NewCateringItemListComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 1);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 2);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul", 4);
    \u0275\u0275repeaterCreate(8, NewCateringItemListComponent_Conditional_1_For_9_Template, 1, 4, "new-catering-item-list-item", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "CATERING.ORDER_SELECTED_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 6, "CATERING.ORDER_SELECTED_COUNT", \u0275\u0275pureFunction1(11, _c06, ((tmp_2_0 = \u0275\u0275pipeBind1(5, 4, ctx_r2.list)) == null ? null : tmp_2_0.length) || 0)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(10, 9, ctx_r2.list));
  }
}
function NewCateringItemListComponent_Conditional_10_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "new-catering-item-list-item", 9);
    \u0275\u0275listener("toggleFav", function NewCateringItemListComponent_Conditional_10_Conditional_0_For_2_Template_new_catering_item_list_item_toggleFav_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleFav.emit(item_r5));
    })("select", function NewCateringItemListComponent_Conditional_10_Conditional_0_For_2_Template_new_catering_item_list_item_select_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectItem(item_r5, true));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("item", item_r5)("active", ctx_r2.active() === item_r5.custom_id)("selected", ctx_r2.selected().includes(item_r5.custom_id))("favourite", ctx_r2.isFavourite(item_r5.id))("code", ctx_r2.code);
  }
}
function NewCateringItemListComponent_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 4);
    \u0275\u0275repeaterCreate(1, NewCateringItemListComponent_Conditional_10_Conditional_0_For_2_Template, 1, 5, "new-catering-item-list-item", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r2.item_list));
  }
}
function NewCateringItemListComponent_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "p", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "CATERING.ORDER_ITEMS_EMPTY"), " ");
  }
}
function NewCateringItemListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NewCateringItemListComponent_Conditional_10_Conditional_0_Template, 4, 2, "ul", 4);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalBranchCreate(2, NewCateringItemListComponent_Conditional_10_Conditional_2_Template, 4, 3, "div", 7);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(1, 1, ctx_r2.item_list)) == null ? null : tmp_1_0.length) ? 0 : 2);
  }
}
function NewCateringItemListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "mat-spinner", 11);
    \u0275\u0275elementStart(2, "p", 12);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "CATERING.ORDER_ITEMS_LOADING"), " ");
  }
}
var _NewCateringItemListComponent = class _NewCateringItemListComponent {
  constructor() {
    this._state = inject(CateringOrderStateService);
    this.active = input("");
    this.selected = input("");
    this.selected_items = input([]);
    this.favorites = input([]);
    this.toggleFav = output();
    this.onSelect = output();
    this.list = new BehaviorSubject([]);
    this.loading = this._state.loading;
    this.item_list = this._state.filtered_menu;
  }
  get code() {
    return this._state.currency_code;
  }
  ngOnChanges(changes) {
    if (changes.selected_items) {
      this.list.next(this.selected_items() || []);
    }
  }
  isFavourite(item_id) {
    return this.favorites()?.includes(item_id);
  }
  selectItem(item, clear_state = false) {
    this.onSelect.emit(item);
    if (clear_state) {
      item.options?.forEach((_) => delete _.active);
    }
  }
};
_NewCateringItemListComponent.\u0275fac = function NewCateringItemListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewCateringItemListComponent)();
};
_NewCateringItemListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewCateringItemListComponent, selectors: [["new-catering-item-list"]], inputs: { active: [1, "active"], selected: [1, "selected"], selected_items: [1, "selected_items"], favorites: [1, "favorites"] }, outputs: { toggleFav: "toggleFav", onSelect: "onSelect" }, features: [\u0275\u0275NgOnChangesFeature], decls: 13, vars: 17, consts: [[1, "h-full", "w-full", "py-2"], [1, "px-2", "font-bold"], ["count", "", 1, "mb-2", "px-2", "text-sm", "opacity-60"], ["loading", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [1, "list-style-none", "space-y-2", "p-2"], [1, "block", 3, "item", "active", "selected", "favourite"], [1, "block", 3, "toggleFav", "select", "item", "active", "selected", "favourite"], ["empty", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [1, "block", 3, "item", "active", "selected", "favourite", "code"], [1, "block", 3, "toggleFav", "select", "item", "active", "selected", "favourite", "code"], [1, "text-center", "opacity-30"], [3, "diameter"], [1, "opacity-30"]], template: function NewCateringItemListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, NewCateringItemListComponent_Conditional_1_Template, 11, 13);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "h3", 1);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 2);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, NewCateringItemListComponent_Conditional_10_Template, 3, 3);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275conditionalBranchCreate(12, NewCateringItemListComponent_Conditional_12_Template, 5, 4, "div", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_0_0;
    let tmp_2_0;
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_0_0 = \u0275\u0275pipeBind1(2, 4, ctx.list)) == null ? null : tmp_0_0.length) ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, "COMMON.RESULTS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 10, "COMMON.RESULTS_COUNT", \u0275\u0275pureFunction1(15, _c06, ((tmp_2_0 = \u0275\u0275pipeBind1(8, 8, ctx.item_list)) == null ? null : tmp_2_0.length) || 0)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(11, 13, ctx.loading) ? 10 : 12);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  TranslatePipe,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  NewCateringItemListItemComponent
], encapsulation: 2 });
var NewCateringItemListComponent = _NewCateringItemListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewCateringItemListComponent, [{
    type: Component,
    args: [{ selector: "new-catering-item-list", template: `
        <div class="h-full w-full py-2">
            @if ((list | async)?.length) {
                <h3 class="px-2 font-bold">
                    {{ 'CATERING.ORDER_SELECTED_HEADER' | translate }}
                </h3>
                <p count class="mb-2 px-2 text-sm opacity-60">
                    {{
                        'CATERING.ORDER_SELECTED_COUNT'
                            | translate: { count: (list | async)?.length || 0 }
                    }}
                </p>
                <ul class="list-style-none space-y-2 p-2">
                    @for (item of list | async; track item) {
                        <new-catering-item-list-item
                            class="block"
                            [item]="item"
                            [active]="active() === item.custom_id"
                            [selected]="true"
                            [favourite]="isFavourite(item.id)"
                            (toggleFav)="toggleFav.emit(item)"
                            (select)="selectItem(item, true)"
                        ></new-catering-item-list-item>
                    }
                </ul>
            }
            <h3 class="px-2 font-bold">{{ 'COMMON.RESULTS' | translate }}</h3>
            <p count class="mb-2 px-2 text-sm opacity-60">
                {{
                    'COMMON.RESULTS_COUNT'
                        | translate: { count: (item_list | async)?.length || 0 }
                }}
            </p>
            @if (!(loading | async)) {
                @if ((item_list | async)?.length) {
                    <ul class="list-style-none space-y-2 p-2">
                        @for (item of item_list | async; track item) {
                            <new-catering-item-list-item
                                class="block"
                                [item]="item"
                                [active]="active() === item.custom_id"
                                [selected]="selected().includes(item.custom_id)"
                                [favourite]="isFavourite(item.id)"
                                [code]="code"
                                (toggleFav)="toggleFav.emit(item)"
                                (select)="selectItem(item, true)"
                            ></new-catering-item-list-item>
                        }
                    </ul>
                } @else {
                    <div
                        empty
                        class="flex flex-col items-center justify-center space-y-2 p-16"
                    >
                        <p class="text-center opacity-30">
                            {{ 'CATERING.ORDER_ITEMS_EMPTY' | translate }}
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
                        {{ 'CATERING.ORDER_ITEMS_LOADING' | translate }}
                    </p>
                </div>
            }
        </div>
    `, imports: [
      CommonModule,
      TranslatePipe,
      MatProgressSpinnerModule,
      NewCateringItemListItemComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewCateringItemListComponent, { className: "NewCateringItemListComponent", filePath: "libs/catering/src/lib/new-catering-order-modal/new-catering-item-list.component.ts", lineNumber: 99 });
})();

// libs/catering/src/lib/new-catering-order-modal/new-catering-select-modal.component.ts
function NewCateringSelectModalComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function NewCateringSelectModalComponent_Conditional_15_Template_button_click_0_listener() {
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
var FAV_KEY = "favourite_menu_items";
var _NewCateringSelectModalComponent = class _NewCateringSelectModalComponent {
  get favorites() {
    return this._settings.get(FAV_KEY) || EMPTY_FAVS;
  }
  get selected_ids() {
    return this.selected.map((_) => _.custom_id).join(",");
  }
  get count() {
    return this.selected.reduce((t, i) => t + i.quantity, 0);
  }
  get code() {
    return this._org.currency_code;
  }
  constructor() {
    this._settings = inject(SettingsService);
    this._order = inject(CateringOrderStateService);
    this._org = inject(OrganisationService);
    this._data = inject(MAT_DIALOG_DATA);
    this.displayed = null;
    this.selected = [...this._data.items || []];
    this.exact_time = this._data.exact_time ?? false;
    this.show_filters = false;
    const { duration } = this._data.details;
    this._order.setFilters(this._data.details);
    this.offset = Math.min(Math.max(this._settings.get("app.catering.min_offset"), this._data.offset || 0), (duration || 60) - this._settings.get("app.catering.end_offset"));
    this.offset_day = this._data.offset_day || 0;
    if (this._data.caterer) {
      this._order.setFilters({ caterer: this._data.caterer });
    }
    console.log("Favourites:", this.favorites);
  }
  isSelected(id) {
    return id && this.selected_ids.includes(id);
  }
  setSelected(item, state) {
    const list = this.selected.filter((_) => _.custom_id !== item.custom_id && (!item.caterer || item.caterer === _.caterer));
    if (state) {
      const new_item = new CateringItem(__spreadProps(__spreadValues({}, item), { in_order: true }));
      list.push(new_item);
      this.displayed = new_item;
    }
    this.selected = list;
  }
  toggleFavourite(item) {
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(item);
    console.log("Favourites:", item, new_state);
    if (new_state) {
      this._settings.saveUserSetting(FAV_KEY, [...fav_list, item]);
    } else {
      this._settings.saveUserSetting(FAV_KEY, fav_list.filter((_) => _ !== item));
    }
  }
};
_NewCateringSelectModalComponent.\u0275fac = function NewCateringSelectModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewCateringSelectModalComponent)();
};
_NewCateringSelectModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewCateringSelectModalComponent, selectors: [["new-catering-select-modal"]], decls: 31, vars: 37, consts: [[1, "bg-base-100", "flex", "h-screen", "w-screen", "flex-col", "space-y-2", "overflow-hidden", "p-2", "sm:h-auto", "sm:w-auto"], [1, "bg-base-200", "flex", "h-14", "w-full", "items-center", "space-x-2", "rounded-sm", "border-none", "p-2"], [1, "flex-1", "px-2", "text-xl", "font-medium", "capitalize"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "relative", "flex", "h-1/2", "flex-1", "sm:h-[65vh]", "sm:flex-none", "sm:space-x-2"], [1, "border-base-300", "h-full", "w-full", "overflow-x-hidden", "overflow-y-auto", "rounded-sm", "border", "shadow-sm", "sm:block", "sm:w-[20rem]"], [1, "border-base-300", "bg-base-200", "h-full", "w-full", "overflow-auto", "rounded-sm", "border", "sm:w-[20rem]", "lg:block"], [3, "toggleFav", "onSelect", "active", "selected", "selected_items", "favorites"], [1, "border-base-300", "h-full", "w-full", "overflow-auto", "rounded-sm", "border", "shadow-sm", "sm:w-[20rem]", "lg:block"], [3, "activeChange", "toggleFav", "close", "item", "active", "code", "fav"], ["icon", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "absolute", "top-3", "right-2", "z-20", "border", "sm:hidden"], [1, "bg-base-200", "flex", "w-full", "items-center", "justify-between", "space-x-2", "rounded-sm", "border-none", "p-2"], ["btn", "", "matRipple", "", "name", "catering-return", 1, "inverse", "bg-base-100", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], [1, "pr-2"], ["btn", "", "matRipple", "", "name", "toggle-catering", 3, "click", "disabled"], [1, "flex", "items-center"], [1, "mr-1"], ["icon", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "absolute", "top-3", "right-2", "z-20", "border", "sm:hidden", 3, "click"]], template: function NewCateringSelectModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 3)(6, "icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "main", 4)(9, "div", 5);
    \u0275\u0275element(10, "new-catering-item-filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 6)(12, "new-catering-item-list", 7);
    \u0275\u0275listener("toggleFav", function NewCateringSelectModalComponent_Template_new_catering_item_list_toggleFav_12_listener($event) {
      return ctx.toggleFavourite($event.id);
    })("onSelect", function NewCateringSelectModalComponent_Template_new_catering_item_list_onSelect_12_listener($event) {
      return ctx.displayed = $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 8)(14, "new-catering-item-details", 9);
    \u0275\u0275listener("activeChange", function NewCateringSelectModalComponent_Template_new_catering_item_details_activeChange_14_listener($event) {
      return ctx.setSelected(ctx.displayed, $event);
    })("toggleFav", function NewCateringSelectModalComponent_Template_new_catering_item_details_toggleFav_14_listener() {
      return ctx.toggleFavourite(ctx.displayed.id);
    })("close", function NewCateringSelectModalComponent_Template_new_catering_item_details_close_14_listener() {
      return ctx.displayed = null;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(15, NewCateringSelectModalComponent_Conditional_15_Template, 3, 1, "button", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "footer", 11)(17, "button", 12)(18, "div", 13)(19, "icon", 14);
    \u0275\u0275text(20, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 15);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "button", 16);
    \u0275\u0275listener("click", function NewCateringSelectModalComponent_Template_button_click_24_listener() {
      return ctx.setSelected(ctx.displayed, !ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id));
    });
    \u0275\u0275elementStart(25, "div", 17)(26, "icon", 14);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 18);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 31, "CATERING.ORDER"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("hidden", !ctx.show_filters);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("hidden", ctx.show_filters || ctx.displayed)("sm:hidden", ctx.displayed)("md:block", !ctx.displayed);
    \u0275\u0275advance();
    \u0275\u0275property("active", ctx.displayed == null ? null : ctx.displayed.custom_id)("selected", ctx.selected_ids)("selected_items", ctx.selected)("favorites", ctx.favorites);
    \u0275\u0275advance();
    \u0275\u0275classProp("hidden", ctx.show_filters || !ctx.displayed)("sm:hidden", !ctx.displayed)("md:block", ctx.displayed);
    \u0275\u0275advance();
    \u0275\u0275property("item", ctx.displayed)("active", ctx.selected_ids.includes((ctx.displayed == null ? null : ctx.displayed.custom_id) || ""))("code", ctx.code)("fav", !!ctx.displayed && ctx.favorites.includes((ctx.displayed == null ? null : ctx.displayed.id) || ""));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.displayed ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("mat-dialog-close", ctx.selected);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 33, "COMMON.BACK_TO_FORM"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id));
    \u0275\u0275property("disabled", !ctx.displayed);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "remove" : "add");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 35, ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "CATERING.ORDER_ITEM_REMOVE" : "CATERING.ORDER_ITEM_ADD"), " ");
  }
}, dependencies: [
  TranslatePipe,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatDialogModule,
  MatDialogClose,
  MatTooltipModule,
  NewCateringItemListComponent,
  NewCateringItemDetailsComponent,
  NewCateringItemFiltersComponent
], encapsulation: 2 });
var NewCateringSelectModalComponent = _NewCateringSelectModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewCateringSelectModalComponent, [{
    type: Component,
    args: [{ selector: "new-catering-select-modal", template: `
        <div
            class="bg-base-100 flex h-screen w-screen flex-col space-y-2 overflow-hidden p-2 sm:h-auto sm:w-auto"
        >
            <header
                class="bg-base-200 flex h-14 w-full items-center space-x-2 rounded-sm border-none p-2"
            >
                <h2 class="flex-1 px-2 text-xl font-medium capitalize">
                    {{ 'CATERING.ORDER' | translate }}
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
                    <new-catering-item-filters></new-catering-item-filters>
                </div>
                <div
                    class="border-base-300 bg-base-200 h-full w-full overflow-auto rounded-sm border sm:w-[20rem] lg:block"
                    [class.hidden]="show_filters || displayed"
                    [class.sm:hidden]="displayed"
                    [class.md:block]="!displayed"
                >
                    <new-catering-item-list
                        [active]="displayed?.custom_id"
                        [selected]="selected_ids"
                        [selected_items]="selected"
                        [favorites]="favorites"
                        (toggleFav)="toggleFavourite($event.id)"
                        (onSelect)="displayed = $event"
                    ></new-catering-item-list>
                </div>
                <div
                    class="border-base-300 h-full w-full overflow-auto rounded-sm border shadow-sm sm:w-[20rem] lg:block"
                    [class.hidden]="show_filters || !displayed"
                    [class.sm:hidden]="!displayed"
                    [class.md:block]="displayed"
                >
                    <new-catering-item-details
                        [item]="displayed!"
                        [active]="
                            selected_ids.includes(displayed?.custom_id || '')
                        "
                        (activeChange)="setSelected(displayed!, $event)"
                        [code]="code"
                        [fav]="
                            !!displayed &&
                            this.favorites.includes(displayed?.id || '')
                        "
                        (toggleFav)="toggleFavourite(displayed!.id)"
                        (close)="displayed = null"
                    ></new-catering-item-details>
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
                    name="catering-return"
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
                    name="toggle-catering"
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
                                    ? 'CATERING.ORDER_ITEM_REMOVE'
                                    : 'CATERING.ORDER_ITEM_ADD'
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
      NewCateringItemListComponent,
      NewCateringItemDetailsComponent,
      NewCateringItemFiltersComponent
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewCateringSelectModalComponent, { className: "NewCateringSelectModalComponent", filePath: "libs/catering/src/lib/new-catering-order-modal/new-catering-select-modal.component.ts", lineNumber: 149 });
})();

// libs/catering/src/lib/catering-list-field.component.ts
var _c07 = (a0, a1) => ({ date: a0, time: a1 });
var _c15 = (a0, a1) => ({ count: a0, cost: a1 });
var _c23 = (a0) => ({ count: a0 });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.custom_id;
function CateringListFieldComponent_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "icon");
    \u0275\u0275text(2, "priority_high");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matTooltip", ctx_r1.err_tooltip);
  }
}
function CateringListFieldComponent_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringListFieldComponent_For_2_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const order_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.duplicateOrder(order_r4));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "content_copy");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "CALENDAR_EVENT.CATERING_ORDER_DUPLICATE"));
  }
}
function CateringListFieldComponent_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringListFieldComponent_For_2_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const order_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editOrder(order_r4));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "CALENDAR_EVENT.CATERING_ORDER_EDIT"));
  }
}
function CateringListFieldComponent_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function CateringListFieldComponent_For_2_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const order_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeOrder(order_r4));
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function CateringListFieldComponent_For_2_For_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matTooltip", ctx_r1.optionList(item_r8));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, "CALENDAR_EVENT.CATERING_ORDER_OPTION_COUNT", \u0275\u0275pureFunction1(5, _c23, (item_r8.option_list == null ? null : item_r8.option_list.length) || "0")), " ");
  }
}
function CateringListFieldComponent_For_2_For_23_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function CateringListFieldComponent_For_2_For_23_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const item_r8 = \u0275\u0275nextContext().$implicit;
      const order_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeOrderItem(order_r4, item_r8));
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function CateringListFieldComponent_For_2_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 16);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, CateringListFieldComponent_For_2_For_23_Conditional_3_Template, 3, 7, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 19);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, CateringListFieldComponent_For_2_For_23_Conditional_9_Template, 3, 0, "button", 20);
    \u0275\u0275elementStart(10, "button", 21);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("click", function CateringListFieldComponent_For_2_For_23_Template_button_click_10_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFavourite(item_r8));
    });
    \u0275\u0275elementStart(12, "icon", 22);
    \u0275\u0275text(13, "favorite");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r8.name || "Item", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r8.option_list == null ? null : item_r8.option_list.length) ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" x", item_r8.quantity, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 9, item_r8.unit_price_with_options / 100, ctx_r1.currency_code), " ea ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.disabled ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-info", ctx_r1.favorites.includes(item_r8.id));
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(11, 12, ctx_r1.favorites.includes(item_r8.id) ? "COMMON.FAVOURITES_REMOVE" : "COMMON.FAVOURITES_ADD"));
    \u0275\u0275advance(2);
    \u0275\u0275property("className", ctx_r1.favorites.includes(item_r8.id) ? "material-symbols-rounded" : "material-symbols-outlined");
  }
}
function CateringListFieldComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, CateringListFieldComponent_For_2_Conditional_9_Template, 3, 1, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 9);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "currency");
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(14, CateringListFieldComponent_For_2_Conditional_14_Template, 4, 3, "button", 10);
    \u0275\u0275conditionalCreate(15, CateringListFieldComponent_For_2_Conditional_15_Template, 4, 3, "button", 10);
    \u0275\u0275conditionalCreate(16, CateringListFieldComponent_For_2_Conditional_16_Template, 3, 0, "button", 11);
    \u0275\u0275elementStart(17, "button", 12);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275listener("click", function CateringListFieldComponent_For_2_Template_button_click_17_listener() {
      const order_r4 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show_order[order_r4.id] = !ctx_r1.show_order[order_r4.id]);
    });
    \u0275\u0275elementStart(19, "icon");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 13);
    \u0275\u0275repeaterCreate(22, CateringListFieldComponent_For_2_For_23_Template, 14, 14, "div", 14, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("border-error", ctx_r1.end_time < order_r4.deliver_at)("border-base-300", ctx_r1.end_time >= order_r4.deliver_at);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 19, "CALENDAR_EVENT.CATERING_ORDER_AT_DATE", \u0275\u0275pureFunction2(30, _c07, \u0275\u0275pipeBind2(6, 13, order_r4.deliver_at_time, "mediumDate"), \u0275\u0275pipeBind2(7, 16, order_r4.deliver_at_time, ctx_r1.time_format))), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.end_time < order_r4.deliver_at ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 25, "CALENDAR_EVENT.CATERING_ORDER_DETAILS", \u0275\u0275pureFunction2(33, _c15, order_r4.item_count, \u0275\u0275pipeBind2(12, 22, order_r4.total_cost / 100, ctx_r1.currency_code))), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.disabled ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.disabled ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.disabled ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(18, 28, ctx_r1.show_order[order_r4.id] ? "CALENDAR_EVENT.CATERING_ORDER_HIDE" : "CALENDAR_EVENT.CATERING_ORDER_SHOW"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.show_order[order_r4.id] ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx_r1.show_order[order_r4.id] ? "show" : "hide");
    \u0275\u0275advance();
    \u0275\u0275repeater(order_r4.items);
  }
}
var EMPTY_FAVS2 = [];
var _CateringListFieldComponent = class _CateringListFieldComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this.options = input({});
    this.orders = [];
    this.show_order = {};
    this.disabled = false;
    this.err_tooltip = "";
    this.selected = [];
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (s) => this.disabled = s;
  }
  get favorites() {
    return this._settings.get("favourite_menu_items") || EMPTY_FAVS2;
  }
  get end_time() {
    const time = (this.options().date || Date.now()) + (this.options().duration || 30) * 60 * 1e3;
    return this.options().all_day ? endOfDay(time).valueOf() : time;
  }
  get time_format() {
    return this._settings.time_format || "shortTime";
  }
  get currency_code() {
    return this._org.building?.currency || "USD";
  }
  ngOnInit() {
    this.err_tooltip = i18n("CALENDAR_EVENT.CATERING_ORDER_ERROR");
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.orders = new_value;
    if (this._onChange)
      this._onChange(this.orders);
  }
  ngOnChanges(changes) {
    if (changes.options) {
      this.orders = (this.orders || []).map((_) => new CateringOrder(__spreadProps(__spreadValues({}, _), { event: this.options() })));
    }
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.orders = (value || []).map((_) => new CateringOrder(__spreadProps(__spreadValues({}, _), { event: this.options() })));
  }
  removeOrder(order) {
    const updated_list = this.orders.filter((_) => _.id !== order.id);
    this.setValue(updated_list);
  }
  duplicateOrder(order) {
    const new_order = new CateringOrder(__spreadProps(__spreadValues({}, order), {
      id: `order-${randomString(8)}`
    }));
    this.setValue([...this.orders, new_order]);
  }
  removeOrderItem(order, item) {
    const new_order = new CateringOrder(__spreadProps(__spreadValues({}, order), {
      items: order.items.filter((_) => _.custom_id !== item.custom_id)
    }));
    const updated_list = this.orders.filter((_) => _.id !== order.id);
    if (new_order.items.length > 0) {
      this.setValue([...updated_list, new_order]);
    } else
      this.setValue(updated_list);
  }
  editOrder(order = new CateringOrder()) {
    const options = this.options();
    const optionsValue = this.options();
    const ref = this._dialog.open(NewCateringSelectModalComponent, {
      data: {
        caterer: order.items[0]?.caterer,
        items: order.items,
        details: __spreadProps(__spreadValues({}, this.options()), {
          date: options.all_day ? startOfDay(options.date).valueOf() : options.date,
          duration: optionsValue.all_day ? Math.max(24 * 60, optionsValue.duration) : optionsValue.duration
        }),
        exact_time: !!order.deliver_time,
        offset: order.deliver_offset,
        offset_day: order.deliver_day_offset
      }
    });
    ref.afterClosed().subscribe((items) => {
      const orders = this.orders.filter((_) => _.id !== order.id);
      if (!items?.length)
        return;
      const time = new Date(this.options().date);
      for (const item of items) {
        item.options = [
          ...item.options.map((_) => __spreadValues({}, _))
        ];
        for (const option of item.options) {
          const opt = item.option_list.find((_) => _.id === option.id);
          option.active = !!opt;
        }
      }
      const new_order = new CateringOrder(__spreadProps(__spreadValues({}, order), {
        items,
        caterer: items[0].caterer,
        event: this.options(),
        deliver_offset: ref.componentInstance.offset,
        deliver_time: ref.componentInstance.exact_time ? time.getHours() + time.getMinutes() / 60 : null,
        deliver_day_offset: ref.componentInstance.offset_day || 0
      }));
      if (new_order.item_count <= 0)
        return;
      this.setValue([...orders, new_order]);
    });
  }
  optionList(item) {
    return item.option_list?.map((_) => _.name).join("\n");
  }
  toggleFavourite(cateringitem) {
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(cateringitem.id);
    if (new_state) {
      this._settings.saveUserSetting("favourite_menu_items", [
        ...fav_list,
        cateringitem.id
      ]);
    } else {
      this._settings.saveUserSetting("favourite_menu_items", fav_list.filter((_) => _ !== cateringitem.id));
    }
  }
};
_CateringListFieldComponent.\u0275fac = function CateringListFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringListFieldComponent)();
};
_CateringListFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringListFieldComponent, selectors: [["catering-list-field"]], inputs: { options: [1, "options"] }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    /* istanbul ignore next */
    useExisting: forwardRef(() => _CateringListFieldComponent),
    multi: true
  }
]), \u0275\u0275NgOnChangesFeature], decls: 10, vars: 4, consts: [["list", "", 1, "space-y-2"], ["order", "", 1, "bg-base-100", "overflow-hidden", "rounded-xl", "border", "shadow-sm", 3, "border-error", "border-base-300"], ["btn", "", "matRipple", "", "name", "add-catering-item", 1, "inverse", "mt-2", "w-full", 3, "click", "disabled"], [1, "flex", "items-center", "justify-center", "space-x-2"], ["order", "", 1, "bg-base-100", "overflow-hidden", "rounded-xl", "border", "shadow-sm"], [1, "flex", "items-center", "space-x-2", "p-4"], [1, "flex-1"], [1, "flex", "items-center", "space-x-4"], [1, "bg-error", "text-error-content", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", 3, "matTooltip"], [1, "text-xs", "opacity-60"], ["icon", "", "matRipple", "", 3, "matTooltip"], ["icon", "", "matRipple", "", "matTooltip", "Remove Order", 1, "text-error"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "divide-base-100", "bg-base-200", "flex", "flex-col", "divide-y"], [1, "flex", "items-center", "space-x-2", "px-4", "py-1", "hover:opacity-90"], ["icon", "", "matRipple", "", "matTooltip", "Remove Order", 1, "text-error", 3, "click"], [1, "flex", "flex-1", "items-center"], [1, "ml-4", "text-xs", "font-normal", "opacity-60", 3, "matTooltip"], [1, "bg-success", "text-success-content", "rounded-sm", "px-2", "py-1", "text-xs"], [1, "bg-info", "text-info-content", "rounded-sm", "px-2", "py-1", "text-xs"], ["icon", "", "matRipple", "", "matTooltip", "Remove Order Item", 1, "text-error"], ["icon", "", "matRipple", "", "name", "toggle-catering-item-favourite", 3, "click", "matTooltip"], [3, "className"], ["icon", "", "matRipple", "", "matTooltip", "Remove Order Item", 1, "text-error", 3, "click"]], template: function CateringListFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, CateringListFieldComponent_For_2_Template, 24, 36, "div", 1, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 2);
    \u0275\u0275listener("click", function CateringListFieldComponent_Template_button_click_3_listener() {
      return ctx.editOrder();
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
    \u0275\u0275repeater(ctx.orders);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.disabled);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 2, "CALENDAR_EVENT.CATERING_ORDER_ADD"), " ");
  }
}, dependencies: [
  CommonModule,
  CurrencyPipe,
  DatePipe,
  IconComponent,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  MatTooltipModule,
  MatTooltip,
  MatDialogModule
], encapsulation: 2, data: { animation: [ANIMATION_SHOW_CONTRACT_EXPAND] } });
var CateringListFieldComponent = _CateringListFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringListFieldComponent, [{
    type: Component,
    args: [{ selector: `catering-list-field`, template: `
        <div list class="space-y-2">
            @for (order of orders; track order.id) {
                <div
                    order
                    class="bg-base-100 overflow-hidden rounded-xl border shadow-sm"
                    [class.border-error]="end_time < order.deliver_at"
                    [class.border-base-300]="end_time >= order.deliver_at"
                >
                    <div class="flex items-center space-x-2 p-4">
                        <div class="flex-1">
                            <div class="flex items-center space-x-4">
                                <div>
                                    {{
                                        'CALENDAR_EVENT.CATERING_ORDER_AT_DATE'
                                            | translate
                                                : {
                                                      date:
                                                          order.deliver_at_time
                                                          | date: 'mediumDate',
                                                      time:
                                                          order.deliver_at_time
                                                          | date: time_format,
                                                  }
                                    }}
                                </div>
                                @if (end_time < order.deliver_at) {
                                    <div
                                        class="bg-error text-error-content flex h-6 w-6 items-center justify-center rounded-full"
                                        [matTooltip]="err_tooltip"
                                    >
                                        <icon>priority_high</icon>
                                    </div>
                                }
                            </div>
                            <div class="text-xs opacity-60">
                                {{
                                    'CALENDAR_EVENT.CATERING_ORDER_DETAILS'
                                        | translate
                                            : {
                                                  count: order.item_count,
                                                  cost:
                                                      order.total_cost / 100
                                                      | currency: currency_code,
                                              }
                                }}
                            </div>
                        </div>
                        @if (!disabled) {
                            <button
                                icon
                                matRipple
                                [matTooltip]="
                                    'CALENDAR_EVENT.CATERING_ORDER_DUPLICATE'
                                        | translate
                                "
                                (click)="duplicateOrder(order)"
                            >
                                <icon>content_copy</icon>
                            </button>
                        }
                        @if (!disabled) {
                            <button
                                icon
                                matRipple
                                [matTooltip]="
                                    'CALENDAR_EVENT.CATERING_ORDER_EDIT'
                                        | translate
                                "
                                (click)="editOrder(order)"
                            >
                                <icon>edit</icon>
                            </button>
                        }
                        @if (!disabled) {
                            <button
                                icon
                                matRipple
                                matTooltip="Remove Order"
                                class="text-error"
                                (click)="removeOrder(order)"
                            >
                                <icon>delete</icon>
                            </button>
                        }
                        <button
                            icon
                            matRipple
                            [matTooltip]="
                                (show_order[order.id]
                                    ? 'CALENDAR_EVENT.CATERING_ORDER_HIDE'
                                    : 'CALENDAR_EVENT.CATERING_ORDER_SHOW'
                                ) | translate
                            "
                            (click)="
                                show_order[order.id] = !show_order[order.id]
                            "
                        >
                            <icon>
                                {{
                                    show_order[order.id]
                                        ? 'expand_less'
                                        : 'expand_more'
                                }}
                            </icon>
                        </button>
                    </div>
                    <div
                        class="divide-base-100 bg-base-200 flex flex-col divide-y"
                        [@show]="show_order[order.id] ? 'show' : 'hide'"
                    >
                        @for (item of order.items; track item.custom_id) {
                            <div
                                class="flex items-center space-x-2 px-4 py-1 hover:opacity-90"
                            >
                                <div class="flex flex-1 items-center">
                                    {{ item.name || 'Item' }}
                                    @if (item.option_list?.length) {
                                        <span
                                            class="ml-4 text-xs font-normal opacity-60"
                                            [matTooltip]="optionList(item)"
                                        >
                                            {{
                                                'CALENDAR_EVENT.CATERING_ORDER_OPTION_COUNT'
                                                    | translate
                                                        : {
                                                              count:
                                                                  item
                                                                      .option_list
                                                                      ?.length ||
                                                                  '0',
                                                          }
                                            }}
                                        </span>
                                    }
                                </div>
                                <div
                                    class="bg-success text-success-content rounded-sm px-2 py-1 text-xs"
                                >
                                    x{{ item.quantity }}
                                </div>
                                <div
                                    class="bg-info text-info-content rounded-sm px-2 py-1 text-xs"
                                >
                                    {{
                                        item.unit_price_with_options / 100
                                            | currency: currency_code
                                    }}
                                    ea
                                </div>
                                @if (!disabled) {
                                    <button
                                        icon
                                        matRipple
                                        matTooltip="Remove Order Item"
                                        class="text-error"
                                        (click)="removeOrderItem(order, item)"
                                    >
                                        <icon>delete</icon>
                                    </button>
                                }
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
            name="add-catering-item"
            class="inverse mt-2 w-full"
            [disabled]="disabled"
            (click)="editOrder()"
        >
            <div class="flex items-center justify-center space-x-2">
                <icon>search</icon>
                <span>
                    {{ 'CALENDAR_EVENT.CATERING_ORDER_ADD' | translate }}
                </span>
            </div>
        </button>
    `, animations: [ANIMATION_SHOW_CONTRACT_EXPAND], providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => CateringListFieldComponent),
        multi: true
      }
    ], imports: [
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringListFieldComponent, { className: "CateringListFieldComponent", filePath: "libs/catering/src/lib/catering-list-field.component.ts", lineNumber: 260 });
})();

// libs/catering/src/lib/charge-code-list-modal.component.ts
function ChargeCodeListModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 2)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ChargeCodeListModalComponent_Conditional_5_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "mat-form-field", 8)(2, "input", 9);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ChargeCodeListModalComponent_Conditional_5_Conditional_1_For_1_Template_input_ngModelChange_2_listener($event) {
      const \u0275$index_17_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.charge_codes()[\u0275$index_17_r2], $event) || (ctx_r2.charge_codes()[\u0275$index_17_r2] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 10);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("click", function ChargeCodeListModalComponent_Conditional_5_Conditional_1_For_1_Template_button_click_4_listener() {
      const \u0275$index_17_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeCode(\u0275$index_17_r2));
    });
    \u0275\u0275elementStart(6, "icon", 11);
    \u0275\u0275text(7, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const \u0275$index_17_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.charge_codes()[\u0275$index_17_r2]);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 3, "CATERING.CHARGE_CODES"));
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(5, 5, "CATERING.CHARGE_CODES_REMOVE"));
  }
}
function ChargeCodeListModalComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ChargeCodeListModalComponent_Conditional_5_Conditional_1_For_1_Template, 8, 7, "div", 7, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2.charge_codes());
  }
}
function ChargeCodeListModalComponent_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 6)(1, "p", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "CATERING.CHARGE_CODE_EMPTY"), " ");
  }
}
function ChargeCodeListModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3);
    \u0275\u0275conditionalCreate(1, ChargeCodeListModalComponent_Conditional_5_Conditional_1_Template, 2, 0)(2, ChargeCodeListModalComponent_Conditional_5_Conditional_2_Template, 4, 3, "main", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.charge_codes().length ? 1 : 2);
  }
}
function ChargeCodeListModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 4);
    \u0275\u0275element(1, "mat-spinner", 13);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "CATERING.CHARGE_CODE_SAVE"));
  }
}
function ChargeCodeListModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 5)(1, "button", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "input", 15);
    \u0275\u0275listener("change", function ChargeCodeListModalComponent_Conditional_7_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addCodesFromFile($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 16);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function ChargeCodeListModalComponent_Conditional_7_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.downloadTemplate());
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 17);
    \u0275\u0275listener("click", function ChargeCodeListModalComponent_Conditional_7_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.newCode());
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 17);
    \u0275\u0275listener("click", function ChargeCodeListModalComponent_Conditional_7_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveChargeCodes());
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "CATERING.CHARGE_CODES_IMPORT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 6, "CATERING.CHARGE_CODE_DOWNLOAD"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 8, "CATERING.CHARGE_CODES_ADD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 10, "COMMON.SAVE"), " ");
  }
}
var _ChargeCodeListModalComponent = class _ChargeCodeListModalComponent {
  constructor() {
    this._state = inject(CateringStateService);
    this._dialog_ref = inject(MatDialogRef);
    this.charge_codes = signal([]);
    this.loading = signal(false);
  }
  async ngOnInit() {
    this.charge_codes.set(await nextValueFrom(this._state.charge_codes) || []);
  }
  newCode() {
    this.charge_codes.update((l) => {
      l.push("");
      return l;
    });
  }
  removeCode(index) {
    this.charge_codes.update((l) => {
      l.splice(index, 1);
      return l;
    });
  }
  /**
   * Load CSV file and populate the code list with the contents
   * @param event File input field event
   */
  addCodesFromFile(event) {
    if (event.target) {
      const file = event.target.files[0];
      if (file) {
        if (file.type !== "text/csv" && file.type !== "text/tab-separated-values") {
          notifyError("Only CSV and TSV files are accepted.");
          return;
        }
        const reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.addEventListener("load", (evt) => {
          const list = csvToJson(evt.srcElement.result) || [];
          this.charge_codes.update((l) => {
            for (const { code, description } of list) {
              l.push(code);
            }
            l = unique(l);
            return l;
          });
          event.target.value = "";
        });
        reader.addEventListener("error", (_) => notifyError("Error reading file."));
      }
    }
  }
  downloadTemplate() {
    const template = `code,description
code-1,Some Code
code-2,Another Code`;
    downloadFile("template.csv", template);
  }
  async saveChargeCodes() {
    this.loading.set(true);
    const cleaned_codes = this.charge_codes().filter((_) => _ && _.trim());
    await this._state.saveSettings({ charge_codes: cleaned_codes });
    this._dialog_ref.close();
  }
};
_ChargeCodeListModalComponent.\u0275fac = function ChargeCodeListModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ChargeCodeListModalComponent)();
};
_ChargeCodeListModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChargeCodeListModalComponent, selectors: [["charge-code-list-modal"]], decls: 8, vars: 6, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "max-h-[65vh]", "min-h-80", "flex-col", "overflow-auto"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-20"], [1, "border-base-200", "flex", "items-center", "space-x-2", "border-t", "p-2"], [1, "flex", "h-full", "min-h-80", "w-full", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "hover:bg-base-200", "flex", "w-full", "items-center", "space-x-2", "px-2", "py-1"], ["appearance", "outline", 1, "no-subscript", "flex-1"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["icon", "", "matRipple", "", 1, "border-error", "text-error", "h-12", "w-12", "rounded-sm", "border", 3, "click", "matTooltip"], [1, "text-2xl"], [1, "opacity-30"], ["diameter", "32"], ["btn", "", "matRipple", "", 1, "inverse", "relative", "w-48"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], ["icon", "", "matRipple", "", 1, "border-secondary", "text-secondary", "h-12", "w-12", "rounded-sm", "border", 3, "click", "matTooltip"], ["btn", "", "matRipple", "", 1, "w-48", 3, "click"]], template: function ChargeCodeListModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ChargeCodeListModalComponent_Conditional_4_Template, 3, 0, "button", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ChargeCodeListModalComponent_Conditional_5_Template, 3, 1, "main", 3)(6, ChargeCodeListModalComponent_Conditional_6_Template, 5, 3, "main", 4);
    \u0275\u0275conditionalCreate(7, ChargeCodeListModalComponent_Conditional_7_Template, 15, 12, "footer", 5);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "CATERING.CHARGE_CODES_EDIT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading() ? 5 : 6);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading() ? 7 : -1);
  }
}, dependencies: [
  TranslatePipe,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatRippleModule,
  MatRipple,
  IconComponent,
  MatDialogModule,
  MatDialogClose,
  MatFormFieldModule,
  MatFormField,
  MatInputModule,
  MatInput,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  MatTooltipModule,
  MatTooltip
], encapsulation: 2 });
var ChargeCodeListModalComponent = _ChargeCodeListModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChargeCodeListModalComponent, [{
    type: Component,
    args: [{ selector: "charge-code-list-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'CATERING.CHARGE_CODES_EDIT' | translate }}
            </h2>
            @if (!loading()) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
            <main class="flex max-h-[65vh] min-h-80 flex-col overflow-auto">
                @if (charge_codes().length) {
                    @for (code of charge_codes(); track i; let i = $index) {
                        <div
                            class="hover:bg-base-200 flex w-full items-center space-x-2 px-2 py-1"
                        >
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript flex-1"
                            >
                                <input
                                    matInput
                                    [(ngModel)]="charge_codes()[i]"
                                    [placeholder]="
                                        'CATERING.CHARGE_CODES' | translate
                                    "
                                />
                            </mat-form-field>
                            <button
                                icon
                                matRipple
                                class="border-error text-error h-12 w-12 rounded-sm border"
                                [matTooltip]="
                                    'CATERING.CHARGE_CODES_REMOVE' | translate
                                "
                                (click)="removeCode(i)"
                            >
                                <icon class="text-2xl">delete</icon>
                            </button>
                        </div>
                    }
                } @else {
                    <main
                        class="flex h-full min-h-80 w-full flex-col items-center justify-center space-y-2"
                    >
                        <p class="opacity-30">
                            {{ 'CATERING.CHARGE_CODE_EMPTY' | translate }}
                        </p>
                    </main>
                }
            </main>
        } @else {
            <main
                class="flex flex-col items-center justify-center space-y-2 p-20"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ 'CATERING.CHARGE_CODE_SAVE' | translate }}</p>
            </main>
        }
        @if (!loading()) {
            <footer
                class="border-base-200 flex items-center space-x-2 border-t p-2"
            >
                <button btn matRipple class="inverse relative w-48">
                    {{ 'CATERING.CHARGE_CODES_IMPORT' | translate }}
                    <input
                        class="absolute inset-0 opacity-0"
                        type="file"
                        (change)="addCodesFromFile($event)"
                    />
                </button>
                <button
                    icon
                    matRipple
                    (click)="downloadTemplate()"
                    [matTooltip]="'CATERING.CHARGE_CODE_DOWNLOAD' | translate"
                    class="border-secondary text-secondary h-12 w-12 rounded-sm border"
                >
                    <icon>download</icon>
                </button>
                <button btn matRipple class="w-48" (click)="newCode()">
                    {{ 'CATERING.CHARGE_CODES_ADD' | translate }}
                </button>
                <button btn matRipple class="w-48" (click)="saveChargeCodes()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
    `, imports: [
      TranslatePipe,
      MatProgressSpinnerModule,
      MatRippleModule,
      IconComponent,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      MatTooltipModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChargeCodeListModalComponent, { className: "ChargeCodeListModalComponent", filePath: "libs/catering/src/lib/charge-code-list-modal.component.ts", lineNumber: 128 });
})();

export {
  CateringOrderStateService,
  CateringListFieldComponent,
  CateringOrdersService,
  CateringStateService,
  CateringMenuComponent,
  CateringOrderListComponent,
  ChargeCodeListModalComponent
};
//# sourceMappingURL=chunk-5BORRCGD.js.map
