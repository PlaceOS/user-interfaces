import {
  deleteCateringItem,
  queryCateringItems,
  saveCateringItem
} from "./chunk-QNSAYON3.js";
import {
  AttachedResourceConfigModalComponent,
  AvailableRoomsStateModalComponent
} from "./chunk-XHZLUZYC.js";
import {
  CounterComponent
} from "./chunk-T6ZTHDXL.js";
import {
  SearchbarComponent
} from "./chunk-JVURRGIR.js";
import {
  DateOptionsComponent
} from "./chunk-XZTLXHS7.js";
import "./chunk-RPJRKZJT.js";
import {
  loadPersistedZones,
  persistZones
} from "./chunk-2IX3MLLC.js";
import {
  newCalendarEventFromBooking
} from "./chunk-4YDQ54KI.js";
import "./chunk-XGTBQEGY.js";
import {
  openConfirmModal
} from "./chunk-ME7RZH6V.js";
import {
  queryEvents,
  showEventMetadata,
  updateEventMetadata
} from "./chunk-IHAOKHUQ.js";
import {
  BuildingPipe
} from "./chunk-3PQMPZLI.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-PDMRTYMA.js";
import {
  SimpleTableComponent
} from "./chunk-TZ3UXIQG.js";
import "./chunk-5CGMLSJS.js";
import "./chunk-DG7PFMDR.js";
import {
  queryBookings,
  updateBooking
} from "./chunk-5HZYZ5OU.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  ImageListFieldComponent,
  MatCheckbox,
  MatCheckboxModule,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
  MatSelect,
  MatSelectModule,
  SettingsToggleComponent
} from "./chunk-76AIUSHB.js";
import "./chunk-RCB64EP7.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-773LKEFN.js";
import "./chunk-VNIC3PCP.js";
import "./chunk-CBVPNNR3.js";
import {
  SpacePipe
} from "./chunk-EXUEXAPM.js";
import "./chunk-QJWYJFTN.js";
import "./chunk-5NOPK7NX.js";
import {
  ActivatedRoute,
  AsyncHandler,
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
  FormField,
  FormsModule,
  IconComponent,
  Injectable,
  Input,
  MAT_DIALOG_DATA,
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
  MatOption,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  OrganisationService,
  Output,
  Router,
  RouterLink,
  RouterModule,
  SPACE,
  SettingsService,
  TranslatePipe,
  Vu,
  Xu,
  computed,
  csvToJson,
  currentUser,
  downloadFile,
  effect,
  endOfDay,
  flatten,
  form,
  format,
  getUnixTime,
  i18n,
  inject,
  input,
  notifyError,
  notifySuccess,
  randomInt,
  required,
  setClassMetadata,
  signal,
  startOfDay,
  unique,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
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
  ɵɵtextInterpolate4
} from "./chunk-F7PQS4NK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

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
var CateringOrdersService = class _CateringOrdersService extends AsyncHandler {
  /** Order filters */
  get filters() {
    return this._filters();
  }
  /** Order filters */
  set filters(filters) {
    this._filters.set(filters);
  }
  get using_bookings() {
    return this._settings.get("app.catering.use_bookings") == true;
  }
  constructor() {
    super();
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._poll = signal(
      0,
      ...ngDevMode ? [{ debugName: "_poll" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._space_pipe = new SpacePipe();
    this._filters = signal(
      {
        caterer: ""
      },
      ...ngDevMode ? [{ debugName: "_filters" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._orders = signal(
      [],
      ...ngDevMode ? [{ debugName: "_orders" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.orders = this._orders.asReadonly();
    this.loading = this._loading.asReadonly();
    this.order_filters = this._filters.asReadonly();
    this.caterers = computed(
      () => {
        const provider_groups = this._settings.get("app.catering_provider_groups") || {};
        let provider_list = Object.keys(provider_groups);
        const is_admin = currentUser()?.groups?.includes("placeos_admin") || currentUser()?.groups?.includes("placeos_support");
        if (!provider_list.length || is_admin)
          return unique(this._orders().map((i) => i.caterer));
        provider_list = provider_list.filter((caterer) => provider_groups[caterer].find((group) => currentUser()?.groups?.includes(group)));
        if (provider_list.length <= 1 && this._filters()?.caterer !== provider_list[0]) {
          this._filters.set(__spreadProps(__spreadValues({}, this._filters()), {
            caterer: provider_list[0]
          }));
        }
        return unique(provider_list);
      },
      ...ngDevMode ? [{ debugName: "caterers" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered = computed(
      () => this._orders().filter((order) => checkOrder(order, this._filters())).sort((a, b) => a.deliver_at - b.deliver_at),
      ...ngDevMode ? [{ debugName: "filtered" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._space_pipe.org = this._org;
    effect(() => {
      const building = this._org.active_building();
      const filters = this._filters();
      this._poll();
      if (!building?.id)
        return;
      this._loadOrders(filters);
    });
  }
  /** Start polling for catering orders */
  startPolling(delay = 15 * 1e3) {
    this.interval("polling", () => this._poll.set((/* @__PURE__ */ new Date()).valueOf()), delay);
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
      const extension_data = await showEventMetadata(order.event.id, system_id);
      const event = new CalendarEvent(__spreadProps(__spreadValues({}, __spreadProps(__spreadValues({}, order.event), { extension_data })), {
        catering
      }));
      await updateEventMetadata(event.id, system_id, event.extension_data);
    }
    if (this.using_bookings) {
      booking = BOOKINGS[order.id];
      await updateBooking(booking.id, __spreadProps(__spreadValues({}, booking.toJSON()), {
        extension_data: __spreadProps(__spreadValues({}, booking.extension_data), {
          details: updated_order.toJSON()
        })
      }));
    }
    this.timeout("refresh-list", () => this._poll.set(Date.now()), 1e3);
    order.status = status;
    return booking;
  }
  async _loadOrders(filters) {
    this._loading.set(true);
    const orders = this.using_bookings ? await this._loadBookingOrders(filters) : await this._loadEmbeddedOrders(filters);
    const start = startOfDay(filters.date || Date.now());
    this._orders.set(unique(orders.filter((o) => format(o.deliver_at, "yyyy-MM-dd") === format(start, "yyyy-MM-dd")), "id"));
    this._loading.set(false);
  }
  async _loadEmbeddedOrders({ date, zones }) {
    const start = getUnixTime(startOfDay(date || Date.now()));
    const end = getUnixTime(endOfDay(date || Date.now()));
    if (!zones?.length) {
      zones = this._settings.get("app.use_region") ? [this._org.region?.id] : [this._org.building?.id];
    }
    const events = await queryEvents({
      zone_ids: (zones || []).join(","),
      period_start: start,
      period_end: end
    }).catch(() => []);
    return flatten(events.map((event) => event.valid_catering.map((o) => new CateringOrder(__spreadProps(__spreadValues({}, o), { event })))));
  }
  async _loadBookingOrders({ date, zones }) {
    const start = getUnixTime(startOfDay(date || Date.now()));
    const end = getUnixTime(endOfDay(date || Date.now()));
    if (!zones?.length) {
      zones = this._settings.get("app.use_region") ? [this._org.region.id] : [this._org.building.id];
    }
    const bookings = await queryBookings({
      type: "catering-order",
      zones: (zones || []).join(","),
      period_start: start,
      period_end: end
    }).catch(() => []);
    return flatten(bookings.map((bkn) => {
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
    }));
  }
  static {
    this.\u0275fac = function CateringOrdersService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringOrdersService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CateringOrdersService, factory: _CateringOrdersService.\u0275fac, providedIn: "root" });
  }
};
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
    \u0275\u0275textInterpolate(ctx_r1.loading());
  }
}
var CateringImportMenuModalComponent = class _CateringImportMenuModalComponent {
  constructor() {
    this.event = new EventEmitter();
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  /** Upload the image to the cloud */
  handleFileEvent(event) {
    this.loading.set("Processing menu data...");
    const element = event.target;
    if (!element?.files)
      return this.loading.set("");
    const files = element.files;
    if (!files.length)
      return this.loading.set("");
    const file = files[0];
    const fileReader = new FileReader();
    fileReader.addEventListener("loadend", (e) => {
      const contents = e.target.result;
      const data = csvToJson(contents);
      const new_items = this._processData(data);
      this.loading.set("");
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
  static {
    this.\u0275fac = function CateringImportMenuModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringImportMenuModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringImportMenuModalComponent, selectors: [["catering-import-menu-modal"]], outputs: { event: "event" }, decls: 7, vars: 5, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "h-96", "w-[24rem]", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "border-base-300", "hover:bg-base-200", "relative", "mx-2", "flex", "h-96", "w-[24rem]", "cursor-pointer", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-xl", "border-4", "border-dashed", "p-4"], [1, "text-8xl", "opacity-30"], [1, "px-4", "text-center", "opacity-30"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], [1, "flex", "items-center", "justify-center", "p-2"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], ["diameter", "32"]], template: function CateringImportMenuModalComponent_Template(rf, ctx) {
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
        \u0275\u0275conditional(!ctx.loading() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 5 : 6);
      }
    }, dependencies: [
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatDialogModule,
      MatDialogClose,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
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
            @if (!loading()) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
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
                <p>{{ loading() }}</p>
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
    \u0275\u0275elementStart(0, "div", 11)(1, "label", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 24);
    \u0275\u0275element(8, "input", 25);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(10, "mat-error");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.name().invalid() && ctx_r1.form.name().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "FORM.NAME"));
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 8, "FORM.NAME"))("formField", ctx_r1.form.name);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, "FORM.NAME_REQUIRED"));
  }
}
function CateringItemModalComponent_Conditional_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "label", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 24);
    \u0275\u0275element(8, "input", 27);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(10, "mat-error");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const auto_r3 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.category().invalid() && ctx_r1.form.category().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, "COMMON.CATEGORY"));
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 9, "COMMON.CATEGORY"))("formField", ctx_r1.form.category)("matAutocomplete", auto_r3);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 11, "COMMON.CATEGORY_REQUIRED"));
  }
}
function CateringItemModalComponent_Conditional_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "label", 28);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 24);
    \u0275\u0275element(8, "input", 27);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const caterer_auto_r4 = \u0275\u0275reference(13);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "CATERING.CATERER"));
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 6, "CATERING.CATERER"))("formField", ctx_r1.form.caterer)("matAutocomplete", caterer_auto_r4);
    \u0275\u0275control();
  }
}
function CateringItemModalComponent_Conditional_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "label", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "a-counter", 18);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.unit_price().invalid() && ctx_r1.form.unit_price().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, "CATERING.ITEM_PRICE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r1.form.unit_price)("min", 0)("max", 1e5)("step", 10)("render_fn", ctx_r1.renderPrice);
    \u0275\u0275control();
  }
}
function CateringItemModalComponent_Conditional_5_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "label", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 24);
    \u0275\u0275element(5, "textarea", 25);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "COMMON.DESCRIPTION"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "COMMON.DESCRIPTION"))("formField", ctx_r1.form.description);
    \u0275\u0275control();
  }
}
function CateringItemModalComponent_Conditional_5_Conditional_18_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 33);
    \u0275\u0275listener("removed", function CateringItemModalComponent_Conditional_5_Conditional_18_For_8_Template_mat_chip_row_removed_0_listener() {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeTag(item_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 34);
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
    \u0275\u0275elementStart(0, "div", 19)(1, "label", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 24)(5, "mat-chip-grid", 31, 2);
    \u0275\u0275repeaterCreate(7, CateringItemModalComponent_Conditional_5_Conditional_18_For_8_Template, 6, 7, "mat-chip-row", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 32);
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
    \u0275\u0275classProp("error", ctx_r1.form.tags().invalid() && ctx_r1.form.tags().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "COMMON.TAGS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.tag_list());
    \u0275\u0275advance(2);
    \u0275\u0275property("matChipInputFor", chipList_r8)("matChipInputSeparatorKeyCodes", ctx_r1.separators)("matChipInputAddOnBlur", true);
  }
}
function CateringItemModalComponent_Conditional_5_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "label", 35);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "image-list-field", 36);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "COMMON.IMAGES"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r1.form.images);
    \u0275\u0275control();
  }
}
function CateringItemModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 6)(1, "div", 10);
    \u0275\u0275conditionalCreate(2, CateringItemModalComponent_Conditional_5_Conditional_2_Template, 13, 12, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275conditionalCreate(4, CateringItemModalComponent_Conditional_5_Conditional_4_Template, 13, 13, "div", 11);
    \u0275\u0275conditionalCreate(5, CateringItemModalComponent_Conditional_5_Conditional_5_Template, 10, 8, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275conditionalCreate(7, CateringItemModalComponent_Conditional_5_Conditional_7_Template, 7, 10, "div", 11);
    \u0275\u0275elementStart(8, "div", 13);
    \u0275\u0275element(9, "settings-toggle", 14);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 15)(12, "label", 16);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 17);
    \u0275\u0275element(16, "a-counter", 18);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(17, CateringItemModalComponent_Conditional_5_Conditional_17_Template, 7, 7, "div", 19);
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
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(25, "settings-toggle", 21);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275listener("ngModelChange", function CateringItemModalComponent_Conditional_5_Template_settings_toggle_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r1.addTag({ value: "Vegan" }) : ctx_r1.removeTag("Vegan"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(27, "settings-toggle", 21);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275listener("ngModelChange", function CateringItemModalComponent_Conditional_5_Template_settings_toggle_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r1.addTag({ value: "Vegetarian" }) : ctx_r1.removeTag("Vegetarian"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(29, "settings-toggle", 21);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275listener("ngModelChange", function CateringItemModalComponent_Conditional_5_Template_settings_toggle_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r1.addTag({ value: "Contains Dairy" }) : ctx_r1.removeTag("Contains Dairy"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(31, "settings-toggle", 22);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275listener("ngModelChange", function CateringItemModalComponent_Conditional_5_Template_settings_toggle_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r1.addTag({ value: "Contains Nuts" }) : ctx_r1.removeTag("Contains Nuts"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(33, CateringItemModalComponent_Conditional_5_Conditional_33_Template, 5, 4, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.name ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.category ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.caterer ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.unit_price ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(10, 31, "CATERING.ITEM_POINTS"))("formField", ctx_r1.form.accept_points);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 33, "CATERING.ITEM_DISCOUNT"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.discount_cap)("min", 0)("max", 100)("step", 5)("render_fn", ctx_r1.renderPercent);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.description ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.tags ? 18 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 35, "CATERING.TAGS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(24, 37, "CATERING.TAG_GLUTEN_FREE"))("ngModel", ctx_r1.hasTag("Gluten Free"))("ngModelOptions", \u0275\u0275pureFunction0(47, _c0));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(26, 39, "CATERING.TAG_VEGAN"))("ngModel", ctx_r1.hasTag("Vegan"))("ngModelOptions", \u0275\u0275pureFunction0(48, _c0));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(28, 41, "CATERING.TAG_VEGETARIAN"))("ngModel", ctx_r1.hasTag("Vegetarian"))("ngModelOptions", \u0275\u0275pureFunction0(49, _c0));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(30, 43, "CATERING.TAG_DAIRY"))("ngModel", ctx_r1.hasTag("Contains Dairy"))("ngModelOptions", \u0275\u0275pureFunction0(50, _c0));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(32, 45, "CATERING.TAG_NUTS"))("ngModel", ctx_r1.hasTag("Contains Nuts"))("ngModelOptions", \u0275\u0275pureFunction0(51, _c0));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.images ? 33 : -1);
  }
}
function CateringItemModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 37);
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
    \u0275\u0275elementStart(0, "footer", 8)(1, "button", 38);
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
    \u0275\u0275property("disabled", !ctx_r1.form().dirty());
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
var CateringItemModalComponent = class _CateringItemModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._org = inject(OrganisationService);
    this.event = new EventEmitter();
    this.item = computed(
      () => this._data.item || new CateringItem(),
      ...ngDevMode ? [{ debugName: "item" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.categories = computed(
      () => this._data.categories || [],
      ...ngDevMode ? [{ debugName: "categories" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.caterers = computed(
      () => this._data.caterers || [],
      ...ngDevMode ? [{ debugName: "caterers" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.model = signal(
      {
        name: this.item().name || "",
        description: this.item().description || "",
        category: this.item().category || "",
        caterer: this.item().caterer || "",
        unit_price: this.item().unit_price,
        tags: this.item().tags || [],
        accept_points: this.item().accept_points || false,
        discount_cap: this.item().discount_cap || 0,
        images: this.item().images || []
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (p) => {
      required(p.name);
      required(p.category);
      required(p.unit_price);
    });
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.separators = [ENTER, COMMA, SPACE];
    this.tag_list = computed(
      () => this.model().tags || [],
      ...ngDevMode ? [{ debugName: "tag_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._currency_pipe = new CurrencyPipe("en");
    this.renderPrice = (v) => this._renderPrice(v);
  }
  renderPercent(value = 0) {
    return `${value}%`;
  }
  _renderPrice(value = 0) {
    this._org.active_building();
    return this._currency_pipe?.transform(value / 100, this._org.currency_code) || String(value);
  }
  hasTag(tag) {
    return this.tag_list().includes(tag);
  }
  /**
   * Add a tag to the list of tags for the item
   * @param event Input event
   */
  addTag(event) {
    const input2 = event.input;
    const value = (event.value || "").trim();
    if (value) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        tags: [...m.tags || [], value]
      }));
    }
    if (input2)
      input2.value = "";
  }
  /**
   * Remove tag from the list
   * @param existing_tag Tag to remove
   */
  removeTag(existing_tag) {
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      tags: (m.tags || []).filter((tag) => tag !== existing_tag)
    }));
  }
  saveChanges() {
    this.loading.set(true);
    this.event.emit({
      reason: "done",
      metadata: {
        item: new CateringItem(__spreadValues(__spreadValues({}, this.item()), this.model()))
      }
    });
  }
  static {
    this.\u0275fac = function CateringItemModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringItemModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringItemModalComponent, selectors: [["catering-item-modal"]], outputs: { event: "event" }, decls: 16, vars: 6, consts: [["auto", "matAutocomplete"], ["caterer_auto", "matAutocomplete"], ["chipList", ""], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "max-h-[65vh]", "max-w-xl", "overflow-auto", "px-4"], [1, "flex", "w-64", "flex-col", "items-center", "space-y-2", "p-8"], [1, "border-base-200", "flex", "items-center", "justify-end", "border-t", "border-solid", "px-4", "py-2"], [3, "value"], [1, "flex", "w-full", "items-center", "space-x-2"], [1, "flex", "flex-1", "flex-col"], [1, "flex", "space-x-4"], [1, "flex", "flex-1", "items-center", "py-4"], [1, "w-full", 3, "label", "formField"], [1, "mb-4", "space-y-2"], [1, "w-24", "min-w-0", "flex-1"], [1, "max-w-[calc(50%-0.5rem)]"], [3, "formField", "min", "max", "step", "render_fn"], [1, "flex", "flex-col"], ["list", "", 1, "-mx-2", "flex", "flex-wrap", "items-center", "pb-2"], [1, "min-w-[40%]", "flex-1", "p-2", 3, "ngModelChange", "label", "ngModel", "ngModelOptions"], [1, "w-1/2", "min-w-[40%]", "p-2", 3, "ngModelChange", "label", "ngModel", "ngModelOptions"], ["for", "title"], ["appearance", "outline"], ["matInput", "", 3, "placeholder", "formField"], ["for", "category"], ["matInput", "", 3, "placeholder", "formField", "matAutocomplete"], ["for", "caterer"], ["for", "description"], ["for", "tags"], ["aria-label", "Item Tags"], ["name", "tags", "placeholder", "Item tags e.g. Gluten Free, Vegan etc.", 3, "matChipInputTokenEnd", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed"], ["matChipRemove", ""], ["for", "images"], [3, "formField"], ["diameter", "32"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click", "disabled"]], template: function CateringItemModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 3)(1, "h2", 4);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, CateringItemModalComponent_Conditional_4_Template, 3, 0, "button", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, CateringItemModalComponent_Conditional_5_Template, 34, 52, "form", 6)(6, CateringItemModalComponent_Conditional_6_Template, 5, 3, "div", 7);
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
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, ctx.item().id ? "CATERING.ITEM_EDIT" : "CATERING.ITEM_NEW"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 5 : 6);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 7 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.categories());
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.caterers());
      }
    }, dependencies: [
      IconComponent,
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
      FormField,
      FormsModule,
      \u0275NgNoValidate,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      NgForm,
      TranslatePipe
    ], styles: ["\n[list][_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  margin: 0.5rem;\n}\n/*# sourceMappingURL=catering-item-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringItemModalComponent, [{
    type: Component,
    args: [{ selector: "catering-item-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{
                    (item().id ? 'CATERING.ITEM_EDIT' : 'CATERING.ITEM_NEW')
                        | translate
                }}
            </h2>
            @if (!loading()) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
            <form class="max-h-[65vh] max-w-xl overflow-auto px-4">
                <div class="flex w-full items-center space-x-2">
                    @if (form.name) {
                        <div class="flex flex-1 flex-col">
                            <label
                                for="title"
                                [class.error]="
                                    form.name().invalid() &&
                                    form.name().touched()
                                "
                            >
                                {{ 'FORM.NAME' | translate }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="'FORM.NAME' | translate"
                                    [formField]="form.name"
                                />
                                <mat-error>{{
                                    'FORM.NAME_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="flex w-full items-center space-x-2">
                    @if (form.category) {
                        <div class="flex flex-1 flex-col">
                            <label
                                for="category"
                                [class.error]="
                                    form.category().invalid() &&
                                    form.category().touched()
                                "
                            >
                                {{ 'COMMON.CATEGORY' | translate
                                }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'COMMON.CATEGORY' | translate
                                    "
                                    [formField]="form.category"
                                    [matAutocomplete]="auto"
                                />
                                <mat-error>{{
                                    'COMMON.CATEGORY_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    @if (form.caterer) {
                        <div class="flex flex-1 flex-col">
                            <label for="caterer">
                                {{ 'CATERING.CATERER' | translate
                                }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'CATERING.CATERER' | translate
                                    "
                                    [formField]="form.caterer"
                                    [matAutocomplete]="caterer_auto"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="flex space-x-4">
                    @if (form.unit_price) {
                        <div class="flex flex-1 flex-col">
                            <label
                                for="title"
                                [class.error]="
                                    form.unit_price().invalid() &&
                                    form.unit_price().touched()
                                "
                            >
                                {{ 'CATERING.ITEM_PRICE' | translate
                                }}<span>*</span>
                            </label>
                            <a-counter
                                [formField]="form.unit_price"
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
                            [label]="'CATERING.ITEM_POINTS' | translate"
                            [formField]="form.accept_points"
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
                            [formField]="form.discount_cap"
                            [min]="0"
                            [max]="100"
                            [step]="5"
                            [render_fn]="renderPercent"
                        ></a-counter>
                    </div>
                </div>
                @if (form.description) {
                    <div class="flex flex-col">
                        <label for="description">{{
                            'COMMON.DESCRIPTION' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                [placeholder]="'COMMON.DESCRIPTION' | translate"
                                [formField]="form.description"
                            ></textarea>
                        </mat-form-field>
                    </div>
                }
                @if (form.tags) {
                    <div class="flex flex-col">
                        <label
                            for="tags"
                            [class.error]="
                                form.tags().invalid() && form.tags().touched()
                            "
                        >
                            {{ 'COMMON.TAGS' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-chip-grid #chipList aria-label="Item Tags">
                                @for (item of tag_list(); track item) {
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
                        [label]="'CATERING.TAG_GLUTEN_FREE' | translate"
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
                        [label]="'CATERING.TAG_VEGAN' | translate"
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
                        [label]="'CATERING.TAG_VEGETARIAN' | translate"
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
                        [label]="'CATERING.TAG_DAIRY' | translate"
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
                        [label]="'CATERING.TAG_NUTS' | translate"
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
                @if (form.images) {
                    <div class="flex flex-col">
                        <label for="images">{{
                            'COMMON.IMAGES' | translate
                        }}</label>
                        <image-list-field
                            [formField]="form.images"
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
        @if (!loading()) {
            <footer
                class="border-base-200 flex items-center justify-end border-t border-solid px-4 py-2"
            >
                <button
                    btn
                    matRipple
                    class="w-32"
                    [disabled]="!form().dirty()"
                    (click)="saveChanges()"
                >
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
        <mat-autocomplete #auto="matAutocomplete">
            @for (option of categories(); track option) {
                <mat-option [value]="option">
                    {{ option }}
                </mat-option>
            }
        </mat-autocomplete>
        <mat-autocomplete #caterer_auto="matAutocomplete">
            @for (option of caterers(); track option) {
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
      FormField,
      FormsModule
    ], styles: ["/* angular:styles/component:css;0071b448c67ddef1a7c8d6ade3c25c1198c30917cef31717a0289d95812c8939;/home/runner/work/user-interfaces/user-interfaces/libs/catering/src/lib/catering-item-modal.component.ts */\n[list] mat-checkbox {\n  margin: 0.5rem;\n}\n/*# sourceMappingURL=catering-item-modal.component.css.map */\n"] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringItemModalComponent, { className: "CateringItemModalComponent", filePath: "libs/catering/src/lib/catering-item-modal.component.ts", lineNumber: 361 });
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
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(10, "mat-error");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.name().invalid() && ctx_r0.form.name().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "FORM.NAME"));
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 8, "FORM.NAME"))("formField", ctx_r0.form.name);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, "FORM.NAME_REQUIRED"));
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
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(10, "mat-error");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    const auto_r2 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.group().invalid() && ctx_r0.form.group().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, "COMMON.TYPE"));
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 9, "CATERING.ITEM_OPTION_TYPE_PLACEHOLDER"))("formField", ctx_r0.form.group)("matAutocomplete", auto_r2);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 11, "CATERING.ITEM_OPTION_TYPE_REQUIRED"));
  }
}
function CateringItemOptionModalComponent_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "settings-toggle", 15);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(2, 2, "CATERING.ITEM_OPTION_SELECT_MULTIPLE"))("formField", ctx_r0.form.multiple);
    \u0275\u0275control();
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
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "CATERING.ITEM_PRICE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "CATERING.ITEM_PRICE"))("formField", ctx_r0.form.unit_price);
    \u0275\u0275control();
  }
}
function CateringItemOptionModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 4);
    \u0275\u0275conditionalCreate(1, CateringItemOptionModalComponent_Conditional_5_Conditional_1_Template, 13, 12, "div", 8);
    \u0275\u0275conditionalCreate(2, CateringItemOptionModalComponent_Conditional_5_Conditional_2_Template, 13, 13, "div", 8);
    \u0275\u0275conditionalCreate(3, CateringItemOptionModalComponent_Conditional_5_Conditional_3_Template, 3, 4, "div", 9);
    \u0275\u0275conditionalCreate(4, CateringItemOptionModalComponent_Conditional_5_Conditional_4_Template, 7, 7, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.name ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.group ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.multiple ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.unit_price ? 4 : -1);
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
    \u0275\u0275property("disabled", !ctx_r0.form().dirty());
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
var CateringItemOptionModalComponent = class _CateringItemOptionModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this.event = new EventEmitter();
    this.option = computed(
      () => this._data.option,
      ...ngDevMode ? [{ debugName: "option" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.types = computed(
      () => this._data.types || [],
      ...ngDevMode ? [{ debugName: "types" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.model = signal(
      {
        name: this.option().name || "",
        group: this.option().group || "",
        unit_price: this.option().unit_price,
        multiple: !!this.option().multiple
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (p) => {
      required(p.name);
      required(p.group);
    });
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  saveChanges() {
    this.loading.set(true);
    const new_option = __spreadValues(__spreadProps(__spreadValues({}, this.option()), {
      id: this.option().id || `option-${randomInt(99999999)}`
    }), this.model());
    this.event.emit({
      reason: "done",
      metadata: {
        item: new CateringItem(__spreadProps(__spreadValues({}, this._data.parent), {
          options: this._data.parent.options.filter((i) => i.id !== new_option.id).concat([new_option])
        }))
      }
    });
  }
  static {
    this.\u0275fac = function CateringItemOptionModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringItemOptionModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringItemOptionModalComponent, selectors: [["catering-option-modal"]], outputs: { event: "event" }, decls: 12, vars: 6, consts: [["auto", "matAutocomplete"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "max-h-[65vh]", "w-md", "overflow-auto", "px-4"], ["loading", "", 1, "flex", "w-64", "flex-col", "items-center", "space-y-2", "p-8"], [1, "border-base-200", "flex", "items-center", "justify-end", "border-t", "border-solid", "px-4", "py-2"], [3, "value"], [1, "flex", "flex-col"], [1, "mb-4", "flex", "flex-col"], ["for", "title"], ["appearance", "outline"], ["matInput", "", 3, "placeholder", "formField"], ["for", "group"], ["matInput", "", 3, "placeholder", "formField", "matAutocomplete"], [3, "label", "formField"], ["matInput", "", "type", "number", 3, "placeholder", "formField"], ["diameter", "32"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click", "disabled"]], template: function CateringItemOptionModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 1)(1, "h2", 2);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, CateringItemOptionModalComponent_Conditional_4_Template, 3, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, CateringItemOptionModalComponent_Conditional_5_Template, 5, 4, "form", 4)(6, CateringItemOptionModalComponent_Conditional_6_Template, 5, 3, "div", 5);
        \u0275\u0275conditionalCreate(7, CateringItemOptionModalComponent_Conditional_7_Template, 4, 4, "footer", 6);
        \u0275\u0275elementStart(8, "mat-autocomplete", null, 0);
        \u0275\u0275repeaterCreate(10, CateringItemOptionModalComponent_For_11_Template, 2, 2, "mat-option", 7, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, ctx.option().id ? "CATERING.ITEM_OPTION_EDIT" : "CATERING.ITEM_OPTION_NEW"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 5 : 6);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 7 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.types());
      }
    }, dependencies: [
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
      FormField,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringItemOptionModalComponent, [{
    type: Component,
    args: [{ selector: "catering-option-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{
                    (option().id
                        ? 'CATERING.ITEM_OPTION_EDIT'
                        : 'CATERING.ITEM_OPTION_NEW'
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
            <form class="max-h-[65vh] w-md overflow-auto px-4">
                @if (form.name) {
                    <div class="flex flex-col">
                        <label
                            for="title"
                            [class.error]="
                                form.name().invalid() && form.name().touched()
                            "
                        >
                            {{ 'FORM.NAME' | translate }}<span>*</span>:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [placeholder]="'FORM.NAME' | translate"
                                [formField]="form.name"
                            />
                            <mat-error>{{
                                'FORM.NAME_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form.group) {
                    <div class="flex flex-col">
                        <label
                            for="group"
                            [class.error]="
                                form.group().invalid() && form.group().touched()
                            "
                        >
                            {{ 'COMMON.TYPE' | translate }}<span>*</span>:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [placeholder]="
                                    'CATERING.ITEM_OPTION_TYPE_PLACEHOLDER'
                                        | translate
                                "
                                [formField]="form.group"
                                [matAutocomplete]="auto"
                            />
                            <mat-error>{{
                                'CATERING.ITEM_OPTION_TYPE_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form.multiple) {
                    <div class="mb-4 flex flex-col">
                        <settings-toggle
                            [label]="
                                'CATERING.ITEM_OPTION_SELECT_MULTIPLE'
                                    | translate
                            "
                            [formField]="form.multiple"
                        >
                        </settings-toggle>
                    </div>
                }
                @if (form.unit_price) {
                    <div class="flex flex-col">
                        <label for="title">{{
                            'CATERING.ITEM_PRICE' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                type="number"
                                [placeholder]="
                                    'CATERING.ITEM_PRICE' | translate
                                "
                                [formField]="form.unit_price"
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
        @if (!loading()) {
            <footer
                class="border-base-200 flex items-center justify-end border-t border-solid px-4 py-2"
            >
                <button
                    btn
                    matRipple
                    class="w-32"
                    [disabled]="!form().dirty()"
                    (click)="saveChanges()"
                >
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
        <mat-autocomplete #auto="matAutocomplete">
            @for (option of types(); track option) {
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
      FormField
    ] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringItemOptionModalComponent, { className: "CateringItemOptionModalComponent", filePath: "libs/catering/src/lib/catering-option-modal.component.ts", lineNumber: 172 });
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
    \u0275\u0275textInterpolate1(" +", \u0275\u0275pipeBind2(2, 1, opt_r4.unit_price / 100, ctx_r2.code()), " ");
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
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const group_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(group_r2?.options);
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
    \u0275\u0275textInterpolate1(" +", \u0275\u0275pipeBind2(2, 1, opt_r6.unit_price / 100, ctx_r2.code()), " ");
  }
}
function CateringOrderOptionsModalComponent_For_8_Conditional_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 16);
    \u0275\u0275listener("ngModelChange", function CateringOrderOptionsModalComponent_For_8_Conditional_5_For_1_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const opt_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setOptionState(opt_r6.id, $event));
    });
    \u0275\u0275elementStart(1, "div", 12)(2, "div", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, CateringOrderOptionsModalComponent_For_8_Conditional_5_For_1_Conditional_4_Template, 3, 4, "div", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngModel", ctx_r2.option_state()[opt_r6.id]);
    \u0275\u0275control();
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
    \u0275\u0275repeater(group_r2?.options);
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
var CateringOrderOptionsModalComponent = class _CateringOrderOptionsModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this.event = new EventEmitter();
    this.groups = signal(
      [],
      ...ngDevMode ? [{ debugName: "groups" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.option_state = signal(
      {},
      ...ngDevMode ? [{ debugName: "option_state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.code = computed(
      () => this._data.code,
      ...ngDevMode ? [{ debugName: "code" }] : (
        /* istanbul ignore next */
        []
      )
    );
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
    this.groups.set(group_list);
  }
  updateGroupOption(group, id) {
    if (!group)
      return;
    const option_state = __spreadValues({}, this.option_state());
    for (const option of group.options) {
      option_state[option.id] = option.id === id;
    }
    this.option_state.set(option_state);
  }
  setOptionState(id, state) {
    this.option_state.update((option_state) => __spreadProps(__spreadValues({}, option_state), {
      [id]: state
    }));
  }
  saveOptions() {
    const option_state = this.option_state();
    const options = this._data.options.filter((opt) => option_state[opt.id]);
    this.event.emit({ reason: "done", metadata: { options } });
  }
  static {
    this.\u0275fac = function CateringOrderOptionsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringOrderOptionsModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringOrderOptionsModalComponent, selectors: [["app-catering-options-modal"]], outputs: { event: "event" }, decls: 13, vars: 3, consts: [["icon", "", "mat-dialog-close", ""], [1, "overflow-auto"], [1, "border-base-200", "border-b", "pt-1", "pb-2"], [1, "p-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "p-2", "font-medium", "capitalize"], [1, "flex", "flex-col", "pl-6"], ["aria-label", "Select an option", "ngModel", "", 1, "flex", "flex-col"], ["aria-label", "Select an option", "ngModel", "", 1, "flex", "flex-col", 3, "ngModelChange"], ["value", "", 1, "mx-0", "my-1"], [1, "p-2", "font-medium"], [1, "mx-0", "my-1", 3, "value"], [1, "flex", "items-center", "justify-center"], [1, "w-1/2", "flex-1", "p-2", "font-medium"], [1, "text-xs", "opacity-60"], [3, "ngModel"], [3, "ngModelChange", "ngModel"]], template: function CateringOrderOptionsModalComponent_Template(rf, ctx) {
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
        \u0275\u0275repeater(ctx.groups());
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 1, "COMMON.SAVE"), " ");
      }
    }, dependencies: [
      CommonModule,
      MatRippleModule,
      MatRipple,
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
      NgModel,
      CurrencyPipe,
      TranslatePipe
    ], styles: ["\nmain[_ngcontent-%COMP%] {\n  min-height: 24em;\n  width: 24rem;\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=catering-order-options-modal.component.css.map */"] });
  }
};
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
            @for (group of groups(); track group) {
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
                                                            | currency: code()
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
                                    [ngModel]="option_state()[opt.id]"
                                    (ngModelChange)="
                                        setOptionState(opt.id, $event)
                                    "
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
                                                        | currency: code()
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringOrderOptionsModalComponent, { className: "CateringOrderOptionsModalComponent", filePath: "libs/catering/src/lib/catering-order-options-modal.component.ts", lineNumber: 142 });
})();

// libs/catering/src/lib/catering-state.service.ts
var CateringStateService = class _CateringStateService extends AsyncHandler {
  get is_editable() {
    return !this.zone || this.zone === this._org.building?.id;
  }
  get categories() {
    const menu = this._menu();
    return unique(menu.map((i) => i.category));
  }
  get caterer_list() {
    const menu = this._menu();
    return unique(menu.map((i) => i.caterer));
  }
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this._updated = signal(
      0,
      ...ngDevMode ? [{ debugName: "_updated" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._menu = signal(
      [],
      ...ngDevMode ? [{ debugName: "_menu" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._currency = signal(
      "USD",
      ...ngDevMode ? [{ debugName: "_currency" }] : (
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
    this._settings_data = signal(
      {},
      ...ngDevMode ? [{ debugName: "_settings_data" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.menu = this._menu.asReadonly();
    this.loading = this._loading.asReadonly();
    this.currency = this._currency.asReadonly();
    this.settings = this._settings_data.asReadonly();
    this.charge_codes = computed(
      () => this._settings_data().charge_codes || [],
      ...ngDevMode ? [{ debugName: "charge_codes" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.availability = computed(
      () => this._settings_data().disabled_rooms || [],
      ...ngDevMode ? [{ debugName: "availability" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.caterers = computed(
      () => {
        const provider_groups = this._settings.get("app.catering_provider_groups") || {};
        let provider_list = Object.keys(provider_groups);
        if (!provider_list.length) {
          return unique(this._menu().map((i) => i.caterer)).sort((a, b) => `${a}`.localeCompare(b));
        }
        provider_list = provider_list.filter((caterer) => provider_groups[caterer].find((group) => currentUser().groups.includes(group)));
        provider_list = unique(provider_list);
        provider_list = provider_list.sort((a, b) => `${a}`.localeCompare(b));
        return provider_list;
      },
      ...ngDevMode ? [{ debugName: "caterers" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zone = "";
    effect(() => {
      const bld = this._org.active_building();
      this._change();
      if (!bld?.id)
        return;
      this._loadBuilding(bld.id, bld.currency);
      this._loadSettings(bld.id);
    });
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
      this._doneEvent(ref.componentInstance.event),
      this._closedEvent(ref.afterClosed())
    ]);
    if (details?.reason !== "done")
      return;
    saveCateringItem(details.metadata.item, this._org.building.id).then((saved_item) => {
      const menu = this._menu();
      const index = menu.findIndex((itm) => itm.id === item.id);
      if (index >= 0) {
        menu.splice(index, 1, saved_item);
      } else {
        menu.push(saved_item);
      }
      this._menu.set([...menu]);
      ref.close();
    }, () => ref.componentInstance.loading.set(false));
  }
  updateItem(item) {
    saveCateringItem(item, this._org.building.id).then((saved_item) => {
      const menu = this._menu();
      const index = menu.findIndex((itm) => itm.id === item.id);
      if (index >= 0)
        menu.splice(index, 1, saved_item);
      else
        menu.push(saved_item);
      this._menu.set([...menu]);
    }, () => {
      notifyError(i18n("CATERING.ITEM_SAVE_ERROR"));
    });
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
      this._doneEvent(ref.componentInstance.event),
      this._closedEvent(ref.afterClosed())
    ]);
    if (details?.reason !== "done")
      return;
    saveCateringItem(details.metadata.item, this._org.building.id).then((saved_item) => {
      const menu = this._menu();
      const index = menu.findIndex((itm) => itm.id === item.id);
      if (index >= 0) {
        menu.splice(index, 1, saved_item);
      } else {
        menu.push(saved_item);
      }
      this._menu.set([...menu]);
      ref.close();
    }, () => ref.componentInstance.loading.set(false));
  }
  async selectOptions(options) {
    const ref = this._dialog.open(CateringOrderOptionsModalComponent, {
      data: {
        code: this._currency(),
        options
      }
    });
    const details = await Promise.race([
      this._doneEvent(ref.componentInstance.event),
      this._closedEvent(ref.afterClosed())
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
    deleteCateringItem(item.id).then(() => {
      const menu = this._menu().filter((itm) => item.id !== itm.id);
      this._menu.set([...menu]);
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
    const updated_item = new CateringItem(__spreadProps(__spreadValues({}, item), {
      options: item.options.filter((opt) => opt.id !== option.id)
    }));
    saveCateringItem(updated_item, this._org.building.id).then((saved_item) => {
      const menu = this._menu();
      menu.splice(menu.findIndex((itm) => itm.id === item.id), 1, saved_item);
      this._menu.set([...menu]);
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
    const { require_notes } = this.settings();
    const menu = this._menu();
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
      this._doneEvent(ref.componentInstance.event),
      this._closedEvent(ref.afterClosed())
    ]);
    if (details?.reason !== "done")
      return;
    this.updateConfig(this._org.building.id, details.metadata).then(() => {
      ref.close();
    }, () => ref.componentInstance.loading.set(false));
  }
  async importMenu() {
    const ref = this._dialog.open(CateringImportMenuModalComponent);
    const details = await Promise.race([
      this._doneEvent(ref.componentInstance.event),
      this._closedEvent(ref.afterClosed())
    ]);
    if (details?.reason !== "done")
      return;
    ref.componentInstance.loading.set(i18n("CATERING.MENU_IMPORT_LOADING"));
    const bld = this._org.building;
    const menu = this._menu();
    const updated_menu = unique(details.metadata.concat(menu), "id");
    const saved_menu = await Promise.all(updated_menu.map((item) => saveCateringItem(item, bld.id))).catch((_) => {
      notifyError(i18n("CATERING.MENU_IMPORT_ERROR"));
      ref.close();
      throw _;
    });
    this._menu.set(saved_menu);
    notifySuccess(i18n("CATERING.MENU_IMPORT_SUCCESS", {
      count: details.metadata.length
    }));
    ref.close();
  }
  async saveSettings(settings) {
    const old_settings = this.settings();
    const result = await Xu(this._org.building.id, {
      id: this._org.building.id,
      name: "catering-settings",
      details: __spreadValues(__spreadValues({}, old_settings), settings),
      description: `Catering settings for ${this._org.building.id}`
    });
    this._change.set(Date.now());
    return result;
  }
  async getCateringConfig(zone_id = this._org.building.id) {
    const rules = (await Vu(zone_id, "catering_config")).details;
    return rules instanceof Array ? rules : [];
  }
  updateConfig(zone_id, config) {
    return Xu(zone_id, {
      id: zone_id,
      name: "catering_config",
      details: config,
      description: `Catering menu config for ${zone_id}`
    });
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
  async _loadBuilding(building_id, currency) {
    this._loading.set(true);
    this._menu.set([]);
    const menu = await queryCateringItems(building_id).catch(() => []);
    this._currency.set(this._settings.get("app.currency") || currency || "USD");
    this._loading.set(false);
    this.timeout("loaded", () => this._menu.set(menu), 1e3);
  }
  async _loadSettings(building_id) {
    const metadata = await Vu(building_id, "catering-settings").catch(() => ({}));
    const settings = metadata.details || {};
    this._settings_data.set(settings);
    this._settings.post("require_catering_notes", !!settings?.require_notes);
  }
  _doneEvent(event) {
    return new Promise((resolve) => {
      let sub;
      sub = event.subscribe((details) => {
        if (details?.reason !== "done")
          return;
        sub?.unsubscribe?.();
        resolve(details);
      });
    });
  }
  _closedEvent(event) {
    return new Promise((resolve) => {
      let sub;
      sub = event.subscribe(() => {
        sub?.unsubscribe?.();
        setTimeout(() => resolve(null));
      });
    });
  }
  static {
    this.\u0275fac = function CateringStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringStateService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CateringStateService, factory: _CateringStateService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/catering/src/lib/catering-menu.component.ts
var _c02 = (a0) => ({ key: "active", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c12 = (a0) => ({ key: "name", name: a0 });
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
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "CATERING.ORDER_ALLOW"))("ngModel", ctx_r2.isEnabled(row_r2));
    \u0275\u0275control();
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, data_r4 / 100, ctx_r2.currency_code()), " ");
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
      return \u0275\u0275resetView(ctx_r2.toggleExpanded(row_r6.id));
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
    \u0275\u0275classProp("opacity-0", !ctx_r2.can_edit());
    \u0275\u0275property("disabled", !ctx_r2.can_edit())("matMenuTriggerFor", menu_r7);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 10, "CATERING.ITEM_OPTION_ADD"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 12, "CATERING.ITEM_EDIT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 14, "CATERING.ITEM_REMOVE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !row_r6.options?.length)("matTooltip", row_r6.options?.length ? \u0275\u0275pipeBind1(28, 16, ctx_r2.isExpanded(row_r6.id) ? "CATERING.ITEM_OPTION_HIDE" : "CATERING.ITEM_OPTION_SHOW") : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.isExpanded(row_r6.id) ? "keyboard_arrow_down" : "chevron_right", " ");
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
    \u0275\u0275conditional(ctx_r2.can_edit() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.can_edit() ? 8 : -1);
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
var CateringMenuComponent = class _CateringMenuComponent {
  constructor() {
    this._catering = inject(CateringStateService);
    this._orders = inject(CateringOrdersService);
    this._org = inject(OrganisationService);
    this.currency_code = this._catering.currency;
    this.show_children = signal(
      {},
      ...ngDevMode ? [{ debugName: "show_children" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filters = this._orders.order_filters;
    this._menu = this._catering.menu;
    this.menu = computed(
      () => {
        const filters = this.filters();
        return this._menu().filter((item) => !filters?.caterer || filters.caterer === "<empty>" && !item.caterer || item.caterer === filters.caterer);
      },
      ...ngDevMode ? [{ debugName: "menu" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.addOption = (item) => this._catering.addOption(item);
    this.editOption = (item, option) => this._catering.addOption(item, option);
    this.removeOption = (item, option) => this._catering.deleteOption(item, option);
    this.editItem = (item) => this._catering.addItem(item);
    this.removeItem = (item) => this._catering.deleteItem(item);
    this.can_edit = computed(
      () => this._catering.is_editable,
      ...ngDevMode ? [{ debugName: "can_edit" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.categories = computed(
      () => unique(this._menu().map((i) => i.category)),
      ...ngDevMode ? [{ debugName: "categories" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.caterers = computed(
      () => unique(this._menu().map((i) => i.caterer)),
      ...ngDevMode ? [{ debugName: "caterers" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  isExpanded(id) {
    return !!this.show_children()[id];
  }
  toggleExpanded(id) {
    this.show_children.update((state) => __spreadProps(__spreadValues({}, state), { [id]: !state[id] }));
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
  static {
    this.\u0275fac = function CateringMenuComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringMenuComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringMenuComponent, selectors: [["catering-menu"]], decls: 14, vars: 38, consts: [["active_template", ""], ["price_template", ""], ["actions_template", ""], ["child_template", ""], ["menu", "matMenu"], [1, "block", "w-full", "min-w-lg", "text-sm", 3, "data", "columns", "filter", "show_children", "child_template", "sortable", "empty_message"], ["matTooltipPosition", "right", 1, "mx-auto", 3, "ngModelChange", "matTooltip", "ngModel"], [1, "bg-secondary", "text-secondary-content", "mx-auto", "flex", "items-center", "rounded-sm", "px-2", "py-1", "font-mono", "text-xs"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 3, "disabled", "matMenuTriggerFor"], ["mat-menu-item", "", 1, "flex", "items-center", 3, "click"], [1, "flex", "items-center", "space-x-2", "pr-2"], [1, "text-error"], ["icon", "", "matRipple", "", 3, "click", "disabled", "matTooltip"], [1, "border-base-200", "relative", "flex", "items-center", "space-x-2", "border-b", "border-solid", "p-2"], [1, "absolute", "inset-y-0", "left-0", "w-2", "bg-black", "opacity-10"], [1, "flex-1", "pr-2", "pl-4"], [1, "text"], [1, "text-xs", "opacity-60"], ["icon", "", "matRipple", "", 3, "matTooltip"], ["icon", "", "matRipple", "", 1, "mr-1!", 3, "matTooltip"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "mr-1!", 3, "click", "matTooltip"]], template: function CateringMenuComponent_Template(rf, ctx) {
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
        \u0275\u0275property("data", ctx.menu())("columns", \u0275\u0275pureFunction6(31, _c6, \u0275\u0275pureFunction1(17, _c02, active_template_r12), \u0275\u0275pureFunction1(19, _c12, \u0275\u0275pipeBind1(1, 7, "FORM.NAME")), \u0275\u0275pureFunction1(21, _c2, \u0275\u0275pipeBind1(2, 9, "COMMON.CATEGORY")), \u0275\u0275pureFunction2(23, _c3, \u0275\u0275pipeBind1(3, 11, "CATERING.CATERER"), !ctx.filters()?.caterer && ctx.caterers().length > 1), \u0275\u0275pureFunction2(26, _c4, \u0275\u0275pipeBind1(4, 13, "CATERING.ITEM_PRICE"), price_template_r13), \u0275\u0275pureFunction1(29, _c5, actions_template_r14)))("filter", ctx.filters()?.search)("show_children", ctx.show_children())("child_template", child_template_r15)("sortable", true)("empty_message", \u0275\u0275pipeBind1(5, 15, "CATERING.ITEM_LIST_EMPTY"));
      }
    }, dependencies: [
      CommonModule,
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
      NgModel,
      CurrencyPipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 90%;\n  width: 100%;\n}\n/*# sourceMappingURL=catering-menu.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringMenuComponent, [{
    type: Component,
    args: [{ selector: "catering-menu", template: `
        <simple-table
            class="block w-full min-w-lg text-sm"
            [data]="menu()"
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
                    show: !filters()?.caterer && caterers().length > 1,
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
            [filter]="filters()?.search"
            [show_children]="show_children()"
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
                {{ data / 100 | currency: currency_code() }}
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-2">
                <button
                    icon
                    matRipple
                    [disabled]="!can_edit()"
                    [class.opacity-0]="!can_edit()"
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
                            ? ((isExpanded(row.id)
                                  ? 'CATERING.ITEM_OPTION_HIDE'
                                  : 'CATERING.ITEM_OPTION_SHOW'
                              ) | translate)
                            : ''
                    "
                    (click)="toggleExpanded(row.id)"
                >
                    <icon>
                        {{
                            isExpanded(row.id)
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
                    @if (can_edit()) {
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
                    @if (can_edit()) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringMenuComponent, { className: "CateringMenuComponent", filePath: "libs/catering/src/lib/catering-menu.component.ts", lineNumber: 207 });
})();

// libs/catering/src/lib/catering-order-item.component.ts
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
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-success", ctx_r1.active())("text-white", ctx_r1.active())("border-solid", ctx_r1.active());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.active() ? "done" : "local_pizza");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.item()?.amount || ctx_r1.item()?.quantity || 1, "\xD7 ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.item()?.name);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.item().option_list);
  }
}
var ACTIVE_ITEMS = /* @__PURE__ */ new Set();
var CateringOrderItemComponent = class _CateringOrderItemComponent {
  constructor() {
    this.order_id = input(
      void 0,
      ...ngDevMode ? [{ debugName: "order_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.item = input(
      void 0,
      ...ngDevMode ? [{ debugName: "item" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active = signal(
      false,
      ...ngDevMode ? [{ debugName: "active" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.item_key = computed(
      () => {
        return `${this.order_id()}|${this.item()?.id}`;
      },
      ...ngDevMode ? [{ debugName: "item_key" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    this.active.set(ACTIVE_ITEMS.has(this.item_key()));
  }
  toggle() {
    if (ACTIVE_ITEMS.has(this.item_key())) {
      ACTIVE_ITEMS.delete(this.item_key());
      this.active.set(false);
    } else {
      ACTIVE_ITEMS.add(this.item_key());
      this.active.set(true);
    }
  }
  static {
    this.\u0275fac = function CateringOrderItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringOrderItemComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringOrderItemComponent, selectors: [["", "catering-order-item", ""]], inputs: { order_id: [1, "order_id"], item: [1, "item"] }, decls: 1, vars: 1, consts: [[1, "relative", "h-14", "w-16", "text-right"], ["arm", "", 1, "border-base-200", "absolute", "top-1/2", "left-1/2", "h-16", "w-4", "-translate-x-px", "-translate-y-full", "border-b-2", "border-l-2"], [1, "mr-4", "w-12"], ["action", "", "icon", "", "matRipple", "", 1, "text-dark-fade", "border-base-200", "border-2", "border-dashed", "p-2", "text-xl", 3, "click"], [1, "border-base-200", "flex", "flex-1", "items-center", "space-x-4", "border-b", "border-solid", "py-4"], [1, ""], [1, "bg-base-300", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", "p-1", "font-mono", "text-sm"], [1, "flex-1"], [1, "mr-2", "flex", "space-x-2", "px-4"], [1, "bg-warning", "text-warning-content", "rounded-2xl", "px-2", "py-1", "text-xs", "shadow-sm"]], template: function CateringOrderItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, CateringOrderItemComponent_Conditional_0_Template, 15, 9);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.item() ? 0 : -1);
      }
    }, dependencies: [MatRippleModule, MatRipple, IconComponent], styles: ["\n[_nghost-%COMP%]:last-child    > div[_ngcontent-%COMP%] {\n  border: none !important;\n}\n/*# sourceMappingURL=catering-order-item.component.css.map */"] });
  }
};
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
                    [class.bg-success]="active()"
                    [class.text-white]="active()"
                    [class.border-solid]="active()"
                    (click)="toggle()"
                >
                    <icon>{{ active() ? 'done' : 'local_pizza' }}</icon>
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
  }], null, { order_id: [{ type: Input, args: [{ isSignal: true, alias: "order_id", required: false }] }], item: [{ type: Input, args: [{ isSignal: true, alias: "item", required: false }] }] });
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
var _c03 = (a0) => ({ key: "state", name: " ", size: "4rem", sortable: false, content: a0 });
var _c13 = (a0, a1) => ({ key: "caterer", name: a0, show: a1 });
var _c22 = (a0, a1) => ({ key: "deliver_at", name: a0, content: a1 });
var _c32 = (a0, a1) => ({ key: "event", name: a0, content: a1, sortable: false });
var _c42 = (a0) => ({ key: "charge_code", name: a0 });
var _c52 = (a0) => ({ key: "invoice_number", name: a0, empty: "No Invoice" });
var _c62 = (a0, a1) => ({ key: "status", name: a0, content: a1, size: "11rem" });
var _c7 = (a0) => ({ key: "actions", name: " ", size: "6.5rem", content: a0, sortable: false });
var _c8 = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => [a0, a1, a2, a3, a4, a5, a6, a7, a8];
var _c9 = (a0) => ({ time: a0 });
function CateringOrderListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "icon");
    \u0275\u0275text(3, "room_service");
    \u0275\u0275elementEnd()()();
  }
}
function CateringOrderListComponent_ng_template_13_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 8, "CATERING.ORDERS_DELIVER_TIME", \u0275\u0275pureFunction1(23, _c9, \u0275\u0275pipeBind2(3, 5, data_r1, ctx_r2.time_format()))), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate4(" ", \u0275\u0275pipeBind2(7, 11, row_r2?.event?.date, "MMM d"), ", ", \u0275\u0275pipeBind2(8, 14, row_r2?.event?.date, ctx_r2.time_format()), " - ", \u0275\u0275pipeBind2(9, 17, row_r2?.event?.date_end, "MMM d"), ", ", \u0275\u0275pipeBind2(10, 20, row_r2?.event?.date_end, ctx_r2.time_format()), " ");
  }
}
function CateringOrderListComponent_ng_template_15_Conditional_1_Conditional_2_Template(rf, ctx) {
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
function CateringOrderListComponent_ng_template_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, CateringOrderListComponent_ng_template_15_Conditional_1_Conditional_2_Template, 3, 3, "span", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const space_r4 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", space_r4?.display_name || space_r4?.name || "", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(space_r4?.display_name || space_r4?.name) ? 2 : -1);
  }
}
function CateringOrderListComponent_ng_template_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r5 = \u0275\u0275nextContext().data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r5?.location);
  }
}
function CateringOrderListComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275conditionalCreate(1, CateringOrderListComponent_ng_template_15_Conditional_1_Template, 3, 2, "div", 16)(2, CateringOrderListComponent_ng_template_15_Conditional_2_Template, 2, 1, "div", 16);
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    const space_r6 = \u0275\u0275storeLet(data_r5?.system);
    \u0275\u0275advance();
    \u0275\u0275conditional(space_r6 || !data_r5?.location ? 1 : 2);
  }
}
function CateringOrderListComponent_ng_template_17_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, " Unknown Host ");
    \u0275\u0275elementEnd();
  }
}
function CateringOrderListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, CateringOrderListComponent_ng_template_17_Conditional_3_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r7?.organiser?.name || data_r7?.host || "", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(data_r7?.organiser?.name || data_r7?.host) ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r7?.organiser?.email || data_r7?.host, " ");
  }
}
function CateringOrderListComponent_ng_template_19_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function CateringOrderListComponent_ng_template_19_For_9_Template_button_click_0_listener() {
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
function CateringOrderListComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "button", 18)(2, "div", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon", 20);
    \u0275\u0275text(5, "arrow_drop_down");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "mat-menu", null, 7);
    \u0275\u0275repeaterCreate(8, CateringOrderListComponent_ng_template_19_For_9_Template, 5, 3, "button", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r11 = ctx.data;
    const menu_r12 = \u0275\u0275reference(7);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r2.status(data_r11)?.colour);
    \u0275\u0275property("matMenuTriggerFor", menu_r12);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.status(data_r11)?.name, " ");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.statuses());
  }
}
function CateringOrderListComponent_ng_template_21_ng_template_4_Template(rf, ctx) {
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
function CateringOrderListComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "button", 27)(2, "icon");
    \u0275\u0275text(3, "description");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, CateringOrderListComponent_ng_template_21_ng_template_4_Template, 6, 4, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(6, "button", 28);
    \u0275\u0275listener("click", function CateringOrderListComponent_ng_template_21_Template_button_click_6_listener() {
      const row_r14 = \u0275\u0275restoreView(_r13).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleExpanded(row_r14.id));
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
    \u0275\u0275textInterpolate1(" ", ctx_r2.isExpanded(row_r14.id) ? "keyboard_arrow_down" : "chevron_right", " ");
  }
}
function CateringOrderListComponent_ng_template_23_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 33);
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const row_r17 = \u0275\u0275nextContext(2).row;
    \u0275\u0275property("order_id", row_r17?.id)("item", item_r16);
  }
}
function CateringOrderListComponent_ng_template_23_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 32);
    \u0275\u0275repeaterCreate(1, CateringOrderListComponent_ng_template_23_Conditional_0_For_2_Template, 1, 2, "li", 33, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r17 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r17.items);
  }
}
function CateringOrderListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CateringOrderListComponent_ng_template_23_Conditional_0_Template, 3, 0, "ul", 32);
  }
  if (rf & 2) {
    const row_r17 = ctx.row;
    \u0275\u0275conditional(row_r17?.items.length ? 0 : -1);
  }
}
var CateringOrderListComponent = class _CateringOrderListComponent extends AsyncHandler {
  status(value) {
    return this.statuses().find((i) => i.id === value);
  }
  constructor() {
    super();
    this._orders = inject(CateringOrdersService);
    this._settings = inject(SettingsService);
    this.order_list = this._orders.filtered;
    this.loading = this._orders.loading;
    this.filters = this._orders.order_filters;
    this.caterers = this._orders.caterers;
    this.statuses = signal(
      statusList(),
      ...ngDevMode ? [{ debugName: "statuses" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_children = signal(
      {},
      ...ngDevMode ? [{ debugName: "show_children" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.updateStatus = async (order, s) => {
      await this._orders.updateStatus(order, s);
      this.timeout("status-change", () => order.status = s);
    };
    this.time_format = computed(
      () => this._settings.time_format_signal(),
      ...ngDevMode ? [{ debugName: "time_format" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    this.subscription("polling", this._orders.startPolling());
  }
  isExpanded(id) {
    return !!this.show_children()[id];
  }
  toggleExpanded(id) {
    this.show_children.update((state) => __spreadProps(__spreadValues({}, state), { [id]: !state[id] }));
  }
  static {
    this.\u0275fac = function CateringOrderListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringOrderListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringOrderListComponent, selectors: [["catering-order-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 25, vars: 57, consts: [["state_template", ""], ["time_template", ""], ["location_template", ""], ["host_template", ""], ["status_template", ""], ["actions_template", ""], ["child_template", ""], ["menu", "matMenu"], ["notes_template", ""], [1, "flex", "h-full", "w-full", "flex-col", "overflow-auto"], ["mode", "indeterminate", 1, "sticky", "top-0", "left-0", "w-full"], [1, "block", "w-full", "min-w-6xl", "text-sm", 3, "data", "columns", "sortable", "show_children", "child_template", "empty_message"], [1, "p-2"], [1, "bg-base-200", "flex", "items-center", "justify-center", "rounded-full", "p-2", "text-2xl"], [1, "p-4"], [1, "text-xs", "opacity-30"], [1, "px-4", "py-2"], [1, "opacity-30"], ["status", "", "matRipple", "", 1, "flex", "h-10", "w-36", "items-center", "rounded-3xl", "border-none", "px-4", "text-base", "text-white", 3, "matMenuTriggerFor"], [1, "mx-2", "flex", "text-center", "capitalize"], [1, "pl-2"], ["mat-menu-item", "", 1, "flex", "items-center"], ["mat-menu-item", "", 1, "flex", "items-center", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "mr-2", "h-4", "w-4", "rounded-full"], [1, "mr-2", "w-20"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", "customTooltip", "", "xPosition", "end", "yPosition", "top", 3, "hover", "content", "disabled"], ["icon", "", "matRipple", "", 3, "click"], [1, "border-base-200", "bg-base-100", "text-base-content", "max-w-lg", "min-w-32", "rounded-lg", "border", "p-2", "shadow-sm"], [1, "mb-2"], [1, "bg-base-200", "rounded-sm", "px-4", "py-2", "text-sm"], [1, "relative", "z-0", "m-0", "w-full", "list-none", "p-0"], ["catering-order-item", "", 1, "flex", "items-center", 3, "order_id", "item"]], template: function CateringOrderListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 9);
        \u0275\u0275element(1, "mat-progress-bar", 10)(2, "simple-table", 11);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275template(11, CateringOrderListComponent_ng_template_11_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(13, CateringOrderListComponent_ng_template_13_Template, 11, 25, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(15, CateringOrderListComponent_ng_template_15_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(17, CateringOrderListComponent_ng_template_17_Template, 6, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(19, CateringOrderListComponent_ng_template_19_Template, 10, 4, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(21, CateringOrderListComponent_ng_template_21_Template, 9, 4, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(23, CateringOrderListComponent_ng_template_23_Template, 1, 1, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const state_template_r18 = \u0275\u0275reference(12);
        const time_template_r19 = \u0275\u0275reference(14);
        const location_template_r20 = \u0275\u0275reference(16);
        const host_template_r21 = \u0275\u0275reference(18);
        const status_template_r22 = \u0275\u0275reference(20);
        const actions_template_r23 = \u0275\u0275reference(22);
        const child_template_r24 = \u0275\u0275reference(24);
        \u0275\u0275advance();
        \u0275\u0275classProp("opacity-0", !ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.order_list())("columns", \u0275\u0275pureFunctionV(47, _c8, [\u0275\u0275pureFunction1(24, _c03, state_template_r18), \u0275\u0275pureFunction2(26, _c13, \u0275\u0275pipeBind1(3, 8, "CATERING.CATERER"), !ctx.filters()?.caterer && ctx.caterers().length > 1), \u0275\u0275pureFunction2(29, _c22, \u0275\u0275pipeBind1(4, 10, "COMMON.TIME"), time_template_r19), \u0275\u0275pureFunction2(32, _c32, \u0275\u0275pipeBind1(5, 12, "COMMON.LOCATION"), location_template_r20), \u0275\u0275pureFunction2(35, _c32, \u0275\u0275pipeBind1(6, 14, "FORM.HOST"), host_template_r21), \u0275\u0275pureFunction1(38, _c42, \u0275\u0275pipeBind1(7, 16, "CATERING.CHARGE_CODE")), \u0275\u0275pureFunction1(40, _c52, \u0275\u0275pipeBind1(8, 18, "CATERING.INVOICE_NUMBER")), \u0275\u0275pureFunction2(42, _c62, \u0275\u0275pipeBind1(9, 20, "COMMON.STATUS"), status_template_r22), \u0275\u0275pureFunction1(45, _c7, actions_template_r23)]))("sortable", true)("show_children", ctx.show_children())("child_template", child_template_r24)("empty_message", \u0275\u0275pipeBind1(10, 22, "CATERING.ORDERS_EMPTY"));
      }
    }, dependencies: [
      CommonModule,
      CateringOrderItemComponent,
      MatRippleModule,
      MatRipple,
      CustomTooltipComponent,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      SimpleTableComponent,
      MatProgressBarModule,
      MatProgressBar,
      IconComponent,
      DatePipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=catering-order-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringOrderListComponent, [{
    type: Component,
    args: [{ selector: "catering-order-list", template: `
        <div class="flex h-full w-full flex-col overflow-auto">
            <mat-progress-bar
                [class.opacity-0]="!loading()"
                class="sticky top-0 left-0 w-full"
                mode="indeterminate"
            ></mat-progress-bar>
            <simple-table
                class="block w-full min-w-6xl text-sm"
                [data]="order_list()"
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
                        show: !filters()?.caterer && caterers().length > 1,
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
                [show_children]="show_children()"
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
                                | translate
                                    : { time: data | date: time_format() }
                        }}
                    </div>
                    <div class="text-xs opacity-30">
                        {{ row?.event?.date | date: 'MMM d' }},
                        {{ row?.event?.date | date: time_format() }}
                        -
                        {{ row?.event?.date_end | date: 'MMM d' }},
                        {{ row?.event?.date_end | date: time_format() }}
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
                    @for (status of statuses(); track status) {
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
                    <button icon matRipple (click)="toggleExpanded(row.id)">
                        <icon>
                            {{
                                isExpanded(row.id)
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringOrderListComponent, { className: "CateringOrderListComponent", filePath: "libs/catering/src/lib/catering-order-list.component.ts", lineNumber: 252 });
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
    \u0275\u0275listener("ngModelChange", function ChargeCodeListModalComponent_Conditional_5_Conditional_1_For_1_Template_input_ngModelChange_2_listener($event) {
      const \u0275$index_17_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateCode(\u0275$index_17_r2, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
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
    \u0275\u0275property("ngModel", ctx_r2.charge_codes()[\u0275$index_17_r2])("placeholder", \u0275\u0275pipeBind1(3, 3, "CATERING.CHARGE_CODES"));
    \u0275\u0275control();
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
var ChargeCodeListModalComponent = class _ChargeCodeListModalComponent {
  constructor() {
    this._state = inject(CateringStateService);
    this._dialog_ref = inject(MatDialogRef);
    this.charge_codes = signal(
      [],
      ...ngDevMode ? [{ debugName: "charge_codes" }] : (
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
  }
  async ngOnInit() {
    this.charge_codes.set(this._state.charge_codes() || []);
  }
  newCode() {
    this.charge_codes.update((l) => [...l, ""]);
  }
  removeCode(index) {
    this.charge_codes.update((l) => l.filter((_, i) => i !== index));
  }
  updateCode(index, code) {
    this.charge_codes.update((l) => {
      const list = [...l];
      list[index] = code;
      return list;
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
            let codes = [...l];
            for (const { code } of list) {
              codes.push(code);
            }
            codes = unique(codes);
            return codes;
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
  static {
    this.\u0275fac = function ChargeCodeListModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChargeCodeListModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChargeCodeListModalComponent, selectors: [["charge-code-list-modal"]], decls: 8, vars: 6, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "max-h-[65vh]", "min-h-80", "flex-col", "overflow-auto"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-20"], [1, "border-base-200", "flex", "items-center", "space-x-2", "border-t", "p-2"], [1, "flex", "h-full", "min-h-80", "w-full", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "hover:bg-base-200", "flex", "w-full", "items-center", "space-x-2", "px-2", "py-1"], ["appearance", "outline", 1, "no-subscript", "flex-1"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["icon", "", "matRipple", "", 1, "border-error", "text-error", "h-12", "w-12", "rounded-sm", "border", 3, "click", "matTooltip"], [1, "text-2xl"], [1, "opacity-30"], ["diameter", "32"], ["btn", "", "matRipple", "", 1, "inverse", "relative", "w-48"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], ["icon", "", "matRipple", "", 1, "border-secondary", "text-secondary", "h-12", "w-12", "rounded-sm", "border", 3, "click", "matTooltip"], ["btn", "", "matRipple", "", 1, "w-48", 3, "click"]], template: function ChargeCodeListModalComponent_Template(rf, ctx) {
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
      MatTooltip,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
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
                                    [ngModel]="charge_codes()[i]"
                                    (ngModelChange)="updateCode(i, $event)"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChargeCodeListModalComponent, { className: "ChargeCodeListModalComponent", filePath: "libs/catering/src/lib/charge-code-list-modal.component.ts", lineNumber: 123 });
})();

// apps/concierge/src/app/catering/catering-topbar.component.ts
function CateringTopbarComponent_For_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const level_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, level_r1.parent_id)?.display_name, " ");
  }
}
function CateringTopbarComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7)(1, "div", 10);
    \u0275\u0275conditionalCreate(2, CateringTopbarComponent_For_11_Conditional_2_Template, 5, 3, "div", 11);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", level_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r1.display_name || level_r1.name, " ");
  }
}
function CateringTopbarComponent_Conditional_12_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const caterer_r4 = ctx.$implicit;
    \u0275\u0275property("value", caterer_r4 || "<empty>");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", caterer_r4 || "[" + \u0275\u0275pipeBind1(2, 2, "CATERING.CATERER_EMPTY") + "]", " ");
  }
}
function CateringTopbarComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 5)(1, "mat-select", 13);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function CateringTopbarComponent_Conditional_12_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setCaterer($event));
    });
    \u0275\u0275elementStart(3, "mat-option", 14);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, CateringTopbarComponent_Conditional_12_For_7_Template, 3, 4, "mat-option", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.filters()?.caterer)("placeholder", \u0275\u0275pipeBind1(2, 3, "CATERING.CATERERS_ALL"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, "CATERING.CATERERS_ALL"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.caterers());
  }
}
function CateringTopbarComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 8);
  }
}
function CateringTopbarComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringTopbarComponent_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addItem());
    });
    \u0275\u0275elementStart(2, "icon", 16);
    \u0275\u0275text(3, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "CATERING.MENU_ADD"));
  }
}
function CateringTopbarComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringTopbarComponent_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editConfig());
    });
    \u0275\u0275elementStart(2, "icon", 16);
    \u0275\u0275text(3, "menu_book");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "CATERING.BOOKING_RULES"));
  }
}
function CateringTopbarComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringTopbarComponent_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.importMenu());
    });
    \u0275\u0275elementStart(2, "icon", 16);
    \u0275\u0275text(3, "cloud_upload");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "CATERING.MENU_IMPORT"));
  }
}
function CateringTopbarComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringTopbarComponent_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setRoomAvailability());
    });
    \u0275\u0275elementStart(2, "icon", 16);
    \u0275\u0275text(3, "event_available");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "CATERING.ROOM_AVAILABILITY"));
  }
}
function CateringTopbarComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringTopbarComponent_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setChargeCodes());
    });
    \u0275\u0275elementStart(2, "icon", 16);
    \u0275\u0275text(3, "payments");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "CATERING.CHARGE_CODES"));
  }
}
function CateringTopbarComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 8);
  }
}
function CateringTopbarComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "date-options", 17);
    \u0275\u0275listener("dateChange", function CateringTopbarComponent_Conditional_20_Template_date_options_dateChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDate($event));
    });
    \u0275\u0275elementEnd();
  }
}
var CateringTopbarComponent = class _CateringTopbarComponent extends AsyncHandler {
  get building() {
    return this._org.building;
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  constructor() {
    super();
    this._orders = inject(CateringOrdersService);
    this._catering = inject(CateringStateService);
    this._org = inject(OrganisationService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this.zones = signal(
      [],
      ...ngDevMode ? [{ debugName: "zones" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.page = signal(
      "",
      ...ngDevMode ? [{ debugName: "page" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filters = signal(
      this._orders.filters || {},
      ...ngDevMode ? [{ debugName: "filters" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.caterers = signal(
      [],
      ...ngDevMode ? [{ debugName: "caterers" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.levels = signal(
      [],
      ...ngDevMode ? [{ debugName: "levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.setDate = (date) => {
      this._orders.filters = __spreadProps(__spreadValues({}, this._orders.filters), { date });
      this.filters.set(this._orders.filters);
    };
    this.setCaterer = (caterer) => {
      this._orders.filters = __spreadProps(__spreadValues({}, this._orders.filters), { caterer });
      this.filters.set(this._orders.filters);
    };
    this.setSearch = (str) => {
      this._orders.filters = __spreadProps(__spreadValues({}, this._orders.filters), { search: str });
      this.filters.set(this._orders.filters);
    };
    this.updateZones = (z) => {
      const zones = z || [];
      this.zones.set(zones);
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: zones.length ? zones.join(",") : null },
        queryParamsHandling: "merge"
      });
      this._orders.filters = __spreadProps(__spreadValues({}, this._orders.filters), { zones: [zones] });
      this.filters.set(this._orders.filters);
      this._catering.zone = zones[0];
      persistZones(this.page() === "menu" ? "catering-menu" : "catering-orders", this._persistScopeId(), zones);
    };
    this.addItem = () => this._catering.addItem();
    this.editConfig = () => this._catering.editConfig();
    this.importMenu = () => this._catering.importMenu();
    effect(() => {
      const bld = this._org.active_building();
      const region = this._org.active_region();
      const levels = this._settings.get("app.use_region") ? this._org.levelsForRegion?.(region) : this._org.levelsForBuilding?.(bld);
      this.levels.set(levels || []);
    });
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (!params?.has("zone_ids"))
        return;
      const zones = (params.get("zone_ids") || "").split(",").filter(Boolean);
      if (!zones.length)
        return;
      const level = this._org.levelWithID(zones);
      this.zones.set(zones);
      if (!level)
        return;
      this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
    }));
    this.subscription("route.params", this._route.paramMap.subscribe((params) => {
      const page = params?.get("view") || "";
      const page_changed = !!this.page() && this.page() !== page;
      this.page.set(page);
      if (page_changed) {
        const zones = loadPersistedZones(page === "menu" ? "catering-menu" : "catering-orders", this._persistScopeId()).filter((zone) => this.levels().find((level) => level.id === zone));
        this.updateZones(zones);
      }
    }));
    this.filters.set(this._orders.order_filters() || {});
    this.caterers.set(this._catering.caterers() || []);
    this._catering.zone = (this.filters()?.zones || [])[0] || this._org.building?.id;
  }
  _persistScopeId() {
    return this.use_region ? this._org.region?.id || "" : this._org.building?.id || "";
  }
  async setRoomAvailability() {
    const ref = this._dialog.open(AvailableRoomsStateModalComponent, {
      data: {
        type: "Catering",
        disabled_rooms: this._catering.availability()
      }
    });
    this.subscription("room-availability", ref.componentInstance.change.subscribe(async (list) => {
      console.log("List:", list);
      await this._catering.saveSettings({ disabled_rooms: list }).catch();
      ref.componentInstance.loading.set(false);
      notifySuccess("Room availability settings saved");
    }));
  }
  setChargeCodes() {
    this._dialog.open(ChargeCodeListModalComponent);
  }
  static {
    this.\u0275fac = function CateringTopbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringTopbarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringTopbarComponent, selectors: [["catering-topbar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 21, vars: 17, consts: [[1, "flex", "w-full", "items-center", "space-x-2", "px-8", "pt-4", "pb-2"], [1, "text-2xl", "font-medium"], [1, "w-px", "flex-1"], [1, "mr-2", 3, "modelChange", "model"], [1, "bg-base-100", "flex", "h-20", "items-center", "space-x-2", "px-8"], ["appearance", "outline", 1, "no-subscript", "w-60"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [1, "w-2", "flex-1"], ["icon", "", "default", "", "matRipple", "", 3, "matTooltip"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [3, "ngModelChange", "ngModel", "placeholder"], ["value", ""], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], [1, "text-2xl"], [3, "dateChange"]], template: function CateringTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "div", 2);
        \u0275\u0275elementStart(5, "searchbar", 3);
        \u0275\u0275listener("modelChange", function CateringTopbarComponent_Template_searchbar_modelChange_5_listener($event) {
          return ctx.setSearch($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "mat-form-field", 5)(8, "mat-select", 6);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275listener("ngModelChange", function CateringTopbarComponent_Template_mat_select_ngModelChange_8_listener($event) {
          return ctx.updateZones($event);
        });
        \u0275\u0275repeaterCreate(10, CateringTopbarComponent_For_11_Template, 5, 3, "mat-option", 7, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(12, CateringTopbarComponent_Conditional_12_Template, 8, 7, "mat-form-field", 5);
        \u0275\u0275conditionalCreate(13, CateringTopbarComponent_Conditional_13_Template, 1, 0, "div", 8);
        \u0275\u0275conditionalCreate(14, CateringTopbarComponent_Conditional_14_Template, 4, 3, "button", 9);
        \u0275\u0275conditionalCreate(15, CateringTopbarComponent_Conditional_15_Template, 4, 3, "button", 9);
        \u0275\u0275conditionalCreate(16, CateringTopbarComponent_Conditional_16_Template, 4, 3, "button", 9);
        \u0275\u0275conditionalCreate(17, CateringTopbarComponent_Conditional_17_Template, 4, 3, "button", 9);
        \u0275\u0275conditionalCreate(18, CateringTopbarComponent_Conditional_18_Template, 4, 3, "button", 9);
        \u0275\u0275conditionalCreate(19, CateringTopbarComponent_Conditional_19_Template, 1, 0, "div", 8);
        \u0275\u0275conditionalCreate(20, CateringTopbarComponent_Conditional_20_Template, 1, 0, "date-options");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 13, ctx.page() === "menu" ? "CATERING.MENU" : "CATERING.ORDER_LIST"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("model", ctx.filters()?.search);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.filters()?.zones)("placeholder", \u0275\u0275pipeBind1(9, 15, "COMMON.LEVEL_ALL"));
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.levels());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.caterers().length > 1 ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.page() === "menu" ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.page() === "menu" && (!ctx.zones()[0] || ctx.zones()[0] === ctx.building?.id) ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.page() === "menu" ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.page() === "menu" ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.page() === "menu" ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.page() === "menu" ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.page() !== "menu" ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.page() !== "menu" ? 20 : -1);
      }
    }, dependencies: [
      DateOptionsComponent,
      MatRippleModule,
      MatRipple,
      IconComponent,
      MatTooltipModule,
      MatTooltip,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      FormsModule,
      NgControlStatus,
      NgModel,
      SearchbarComponent,
      TranslatePipe,
      BuildingPipe
    ], styles: ["\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=catering-topbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringTopbarComponent, [{
    type: Component,
    args: [{ selector: "catering-topbar", template: `
        <div class="flex w-full items-center space-x-2 px-8 pt-4 pb-2">
            <h2 class="text-2xl font-medium">
                {{
                    (page() === 'menu'
                        ? 'CATERING.MENU'
                        : 'CATERING.ORDER_LIST'
                    ) | translate
                }}
            </h2>
            <div class="w-px flex-1"></div>
            <searchbar
                class="mr-2"
                [model]="filters()?.search"
                (modelChange)="setSearch($event)"
            ></searchbar>
        </div>
        <div class="bg-base-100 flex h-20 items-center space-x-2 px-8">
            <mat-form-field appearance="outline" class="no-subscript w-60">
                <mat-select
                    [ngModel]="filters()?.zones"
                    (ngModelChange)="updateZones($event)"
                    [placeholder]="'COMMON.LEVEL_ALL' | translate"
                    multiple
                >
                    @for (level of levels(); track level) {
                        <mat-option [value]="level.id">
                            <div class="flex flex-col-reverse">
                                @if (use_region) {
                                    <div class="text-xs opacity-30">
                                        {{
                                            (level.parent_id | building)
                                                ?.display_name
                                        }}
                                        <span class="opacity-0"> - </span>
                                    </div>
                                }
                                <div>
                                    {{ level.display_name || level.name }}
                                </div>
                            </div>
                        </mat-option>
                    }
                </mat-select>
            </mat-form-field>
            @if (caterers().length > 1) {
                <mat-form-field appearance="outline" class="no-subscript w-60">
                    <mat-select
                        [ngModel]="filters()?.caterer"
                        (ngModelChange)="setCaterer($event)"
                        [placeholder]="'CATERING.CATERERS_ALL' | translate"
                    >
                        <mat-option value="">{{
                            'CATERING.CATERERS_ALL' | translate
                        }}</mat-option>
                        @for (caterer of caterers(); track caterer) {
                            <mat-option [value]="caterer || '<empty>'">
                                {{
                                    caterer ||
                                        '[' +
                                            ('CATERING.CATERER_EMPTY'
                                                | translate) +
                                            ']'
                                }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            }
            @if (page() === 'menu') {
                <div class="w-2 flex-1"></div>
            }
            @if (
                page() === 'menu' &&
                (!zones()[0] || zones()[0] === building?.id)
            ) {
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="'CATERING.MENU_ADD' | translate"
                    (click)="addItem()"
                >
                    <icon class="text-2xl">add</icon>
                </button>
            }
            @if (page() === 'menu') {
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="'CATERING.BOOKING_RULES' | translate"
                    (click)="editConfig()"
                >
                    <icon class="text-2xl">menu_book</icon>
                </button>
            }
            @if (page() === 'menu') {
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="'CATERING.MENU_IMPORT' | translate"
                    (click)="importMenu()"
                >
                    <icon class="text-2xl">cloud_upload</icon>
                </button>
            }
            @if (page() === 'menu') {
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="'CATERING.ROOM_AVAILABILITY' | translate"
                    (click)="setRoomAvailability()"
                >
                    <icon class="text-2xl">event_available</icon>
                </button>
            }
            @if (page() === 'menu') {
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="'CATERING.CHARGE_CODES' | translate"
                    (click)="setChargeCodes()"
                >
                    <icon class="text-2xl">payments</icon>
                </button>
            }
            @if (page() !== 'menu') {
                <div class="w-2 flex-1"></div>
            }
            <!-- <searchbar class="mr-2"></searchbar> -->
            @if (page() !== 'menu') {
                <date-options (dateChange)="setDate($event)"></date-options>
            }
        </div>
    `, imports: [
      DateOptionsComponent,
      MatRippleModule,
      IconComponent,
      MatTooltipModule,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      SearchbarComponent,
      TranslatePipe,
      BuildingPipe
    ], styles: ["/* angular:styles/component:css;598beeb1039b1ab45f9544c34b6ccfd79f95c38cdc3862574ac547cac62c7acc;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/catering/catering-topbar.component.ts */\nmat-form-field {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=catering-topbar.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringTopbarComponent, { className: "CateringTopbarComponent", filePath: "apps/concierge/src/app/catering/catering-topbar.component.ts", lineNumber: 193 });
})();

// apps/concierge/src/app/catering/catering.component.ts
var _c04 = () => ["/catering", "menu"];
var _c14 = () => ["/catering", "orders"];
function CateringComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CATERING.MENU_EDIT_INFO"), " ");
  }
}
function CateringComponent_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "catering-order-list", 6);
  }
}
function CateringComponent_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "catering-menu", 6);
  }
}
function CateringComponent_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "a", 8)(2, "div", 9);
    \u0275\u0275element(3, "div", 10);
    \u0275\u0275elementStart(4, "span", 11);
    \u0275\u0275text(5, "Menus and Pricing");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275text(7, " View and Edit Menus and Pricing ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "a", 8)(9, "div", 9);
    \u0275\u0275element(10, "div", 10);
    \u0275\u0275elementStart(11, "span", 11);
    \u0275\u0275text(12, "Today's Orders");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 12);
    \u0275\u0275text(14, " View Catering Orders and their statuses upon arrival ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c04));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(assets/menus.jpg)");
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c14));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(assets/orders.jpg)");
  }
}
var CateringComponent = class _CateringComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this.page = signal(
      this._route.snapshot.paramMap.get("view") || "",
      ...ngDevMode ? [{ debugName: "page" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._sub = this._route.paramMap.subscribe((params) => this.page.set(params.get("view") || ""));
  }
  ngOnDestroy() {
    this._sub.unsubscribe();
  }
  static {
    this.\u0275fac = function CateringComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringComponent, selectors: [["", "app-catering", ""]], decls: 11, vars: 2, consts: [[1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "relative", "z-10"], [1, "flex", "h-1/2", "flex-1", "flex-col", "px-8"], [1, "bg-info", "mb-4", "flex", "items-center", "justify-center", "rounded-sm", "p-2", "text-sm", "text-white"], [1, "flex", "h-1/2", "w-full", "flex-1", "overflow-auto"], [1, "flex-1"], [1, "flex", "flex-1", "flex-wrap", "items-center", "justify-center"], ["matRipple", "", 1, "bg-base-100", "flex", "flex-col", "items-center", "rounded-sm", "text-black", "shadow-sm", 3, "routerLink"], ["name", "img", 1, "relative", "flex", "w-full", "flex-1", "items-center", "justify-center", "bg-cover", "bg-center", "text-2xl", "text-white"], [1, "bg-neutral", "absolute", "inset-0", "z-0", "opacity-60"], [1, "z-10"], [1, "flex", "h-14", "w-full", "items-center", "justify-center", "p-2", "text-center", "text-sm"]], template: function CateringComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-topbar");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275element(2, "app-sidebar");
        \u0275\u0275elementStart(3, "main", 1);
        \u0275\u0275element(4, "catering-topbar", 2);
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275conditionalCreate(6, CateringComponent_Conditional_6_Template, 3, 3, "div", 4);
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275conditionalCreate(8, CateringComponent_Case_8_Template, 1, 0, "catering-order-list", 6)(9, CateringComponent_Case_9_Template, 1, 0, "catering-menu", 6)(10, CateringComponent_Case_10_Template, 15, 8, "div", 7);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.page() === "menu" ? 6 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_1_0 = ctx.page()) === "orders" ? 8 : tmp_1_0 === "menu" ? 9 : 10);
      }
    }, dependencies: [
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      MatRippleModule,
      MatRipple,
      RouterModule,
      RouterLink,
      CateringTopbarComponent,
      CateringOrderListComponent,
      CateringMenuComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\na[_ngcontent-%COMP%] {\n  width: 28rem;\n  height: 16rem;\n  margin-left: 0.5rem;\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  transition: background 200ms;\n}\na[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\na[_ngcontent-%COMP%]:first-child {\n  margin: 0;\n}\n/*# sourceMappingURL=catering.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringComponent, [{
    type: Component,
    args: [{ selector: "[app-catering]", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <catering-topbar class="relative z-10"></catering-topbar>
                <div class="flex h-1/2 flex-1 flex-col px-8">
                    @if (page() === 'menu') {
                        <div
                            class="bg-info mb-4 flex items-center justify-center rounded-sm p-2 text-sm text-white"
                        >
                            {{ 'CATERING.MENU_EDIT_INFO' | translate }}
                        </div>
                    }
                    <div class="flex h-1/2 w-full flex-1 overflow-auto">
                        @switch (page()) {
                            @case ('orders') {
                                <catering-order-list
                                    class="flex-1"
                                ></catering-order-list>
                            }
                            @case ('menu') {
                                <catering-menu class="flex-1"></catering-menu>
                            }
                            @default {
                                <div
                                    class="flex flex-1 flex-wrap items-center justify-center"
                                >
                                    <a
                                        matRipple
                                        class="bg-base-100 flex flex-col items-center rounded-sm text-black shadow-sm"
                                        [routerLink]="['/catering', 'menu']"
                                    >
                                        <div
                                            name="img"
                                            class="relative flex w-full flex-1 items-center justify-center bg-cover bg-center text-2xl text-white"
                                            [style.background-image]="'url(assets/menus.jpg)'"
                                        >
                                            <div
                                                class="bg-neutral absolute inset-0 z-0 opacity-60"
                                            ></div>
                                            <span class="z-10"
                                                >Menus and Pricing</span
                                            >
                                        </div>
                                        <div
                                            class="flex h-14 w-full items-center justify-center p-2 text-center text-sm"
                                        >
                                            View and Edit Menus and Pricing
                                        </div>
                                    </a>
                                    <a
                                        matRipple
                                        class="bg-base-100 flex flex-col items-center rounded-sm text-black shadow-sm"
                                        [routerLink]="['/catering', 'orders']"
                                    >
                                        <div
                                            name="img"
                                            class="relative flex w-full flex-1 items-center justify-center bg-cover bg-center text-2xl text-white"
                                            [style.background-image]="'url(assets/orders.jpg)'"
                                        >
                                            <div
                                                class="bg-neutral absolute inset-0 z-0 opacity-60"
                                            ></div>
                                            <span class="z-10"
                                                >Today's Orders</span
                                            >
                                        </div>
                                        <div
                                            class="flex h-14 w-full items-center justify-center p-2 text-center text-sm"
                                        >
                                            View Catering Orders and their
                                            statuses upon arrival
                                        </div>
                                    </a>
                                </div>
                            }
                        }
                    </div>
                </div>
            </main>
        </div>
    `, imports: [
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      MatRippleModule,
      RouterModule,
      CateringTopbarComponent,
      TranslatePipe,
      CateringOrderListComponent,
      CateringMenuComponent
    ], styles: ["/* angular:styles/component:css;629681061b05a28352f48e1ad8d36915b259415db14a6ffbae9bce1777fac102;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/catering/catering.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\na {\n  width: 28rem;\n  height: 16rem;\n  margin-left: 0.5rem;\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  transition: background 200ms;\n}\na:hover {\n  opacity: 0.8;\n}\na:first-child {\n  margin: 0;\n}\n/*# sourceMappingURL=catering.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringComponent, { className: "CateringComponent", filePath: "apps/concierge/src/app/catering/catering.component.ts", lineNumber: 137 });
})();

// apps/concierge/src/app/catering/catering.routes.ts
var ROUTES = [
  { path: "", component: CateringComponent, title: "Catering" },
  { path: ":view", component: CateringComponent, title: "Catering" }
];
export {
  ROUTES
};
//# sourceMappingURL=catering.routes-VKZWVTD4.js.map
