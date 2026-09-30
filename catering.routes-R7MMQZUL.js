import {
  AttachedResourceConfigModalComponent,
  AvailableRoomsStateModalComponent
} from "./chunk-7EMYL67Y.js";
import {
  BulkActionsBarComponent
} from "./chunk-FF5LSQHB.js";
import {
  runBulkAction
} from "./chunk-O64STTBV.js";
import {
  DateOptionsComponent
} from "./chunk-B55XJDFG.js";
import {
  loadPersistedZones,
  persistZones
} from "./chunk-2IX3MLLC.js";
import {
  SimpleTableComponent
} from "./chunk-YZB4UONG.js";
import {
  SearchbarComponent
} from "./chunk-4U5UU2EE.js";
import {
  deleteCateringItem,
  queryCateringItems,
  saveCateringItem
} from "./chunk-BCNM7IVI.js";
import {
  CounterComponent
} from "./chunk-GZAA3G6A.js";
import "./chunk-KZ43M6AE.js";
import {
  newCalendarEventFromBooking
} from "./chunk-XRBYFYDK.js";
import "./chunk-HBO2MNQB.js";
import {
  queryEventsOrThrow,
  showEventMetadata,
  updateEventMetadata
} from "./chunk-RVQ5I6ZO.js";
import {
  BuildingPipe
} from "./chunk-U6YSNDHN.js";
import "./chunk-GXKUHUNE.js";
import {
  openConfirmModal
} from "./chunk-5RDDXB2X.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-KUJ7HT6W.js";
import "./chunk-PKVS6XYF.js";
import {
  queryBookingsOrThrow,
  updateBooking
} from "./chunk-G7UAF2IZ.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  ImageListFieldComponent,
  MatCheckbox,
  MatCheckboxModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
  MatSelect,
  MatSelectModule,
  SettingsToggleComponent
} from "./chunk-S5INK6RQ.js";
import {
  CustomTooltipComponent
} from "./chunk-Z6UOSXMH.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-ABSQ3F35.js";
import "./chunk-VYB7FE7K.js";
import "./chunk-5IJ3TVPQ.js";
import "./chunk-UIAC6HAC.js";
import "./chunk-J6XDKYXF.js";
import {
  SpacePipe
} from "./chunk-2NBT2DVY.js";
import "./chunk-47I2VKOR.js";
import {
  FormField,
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  form,
  required
} from "./chunk-OESUO5DW.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-GOJXCPLF.js";
import "./chunk-5OST6TLY.js";
import "./chunk-2QAVTKHL.js";
import "./chunk-INJ5ABSQ.js";
import {
  ActivatedRoute,
  AsyncHandler,
  CalendarEvent,
  CateringItem,
  CateringOrder,
  MatOption,
  MatRipple,
  MatRippleModule,
  OrganisationService,
  Router,
  RouterLink,
  RouterModule,
  SettingsService,
  currentUser,
  getUnixTime,
  settingSignal,
  user_group_names
} from "./chunk-XVMLEHTH.js";
import {
  TranslatePipe
} from "./chunk-W2AEVKIZ.js";
import {
  COMMA,
  CommonModule,
  Component,
  CurrencyPipe,
  DatePipe,
  DefaultValueAccessor,
  ENTER,
  EventEmitter,
  FormsModule,
  IconComponent,
  Injectable,
  Input,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  Output,
  SPACE,
  Subject,
  computed,
  csvToJson,
  downloadFile,
  effect,
  endOfDay,
  flatten,
  format,
  i18n,
  inject,
  input,
  log,
  notifyError,
  notifySuccess,
  oc,
  randomInt,
  rc,
  setClassMetadata,
  signal,
  startOfDay,
  unique,
  untracked,
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
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
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
} from "./chunk-SIEX7A67.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

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
var STATUS_STEPS = [
  "pending",
  "accepted",
  "preparing",
  "ready",
  "delivered"
];
var ORDER_DUE_SOON_MINUTES = 30;
function isOrderDone(status) {
  return status === "delivered" || status === "cancelled";
}
function nextOrderStatus(status) {
  if (isOrderDone(status))
    return null;
  const index = STATUS_STEPS.indexOf(status);
  return STATUS_STEPS[index + 1] || null;
}
function matchesStatusFilter(status, filter = "all") {
  if (filter === "all")
    return true;
  if (filter === "active")
    return !isOrderDone(status);
  return status === filter;
}
function orderUrgency(status, deliver_at, now) {
  if (isOrderDone(status))
    return null;
  if (deliver_at < now)
    return "overdue";
  if (deliver_at - now <= ORDER_DUE_SOON_MINUTES * 60 * 1e3)
    return "soon";
  return null;
}

// libs/catering/src/lib/catering-order-tools.ts
var SPACE_PIPE = new SpacePipe();
function orderLocation(order) {
  const space = order.space || order.event?.system || SPACE_PIPE.get(order.system_id || order.event?.extension_data.system_id);
  return order.event?.location || space?.display_name || space?.name || "";
}
function orderHost(order) {
  return order.event?.organiser?.name || order.event?.host || order.event?.organiser?.email || "";
}
function diffOrders(previous, next) {
  const before = new Map(previous.map((order) => [order.id, order.status]));
  return {
    added: next.filter((order) => !before.has(order.id) && order.status !== "cancelled"),
    cancelled: next.filter((order) => order.status === "cancelled" && before.has(order.id) && before.get(order.id) !== "cancelled")
  };
}

// libs/catering/src/lib/catering-orders.service.ts
function checkOrder(order, filters) {
  const s = (filters.search || "").toLowerCase();
  const order_text = [
    orderLocation(order),
    orderHost(order),
    order.event?.organiser?.email,
    order.charge_code,
    order.invoice_number,
    order.notes
  ].join("\n").toLowerCase();
  return !!order.items.find((item) => {
    return (!filters?.caterer || filters.caterer === "<empty>" && !item.caterer || item.caterer === filters.caterer) && (item.name.toLowerCase().includes(s) || !!item.options.find((option) => option.name.toLowerCase().includes(s)) || order_text.includes(s));
  });
}
var BOOKINGS = {};
function cateringOrderSystemId(order) {
  return order.system_id || order.event?.resources[0]?.id || order.event?.system?.id || "";
}
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
    this._load_error = signal(
      false,
      ...ngDevMode ? [{ debugName: "_load_error" }] : (
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
    this._load_id = 0;
    this._loaded_key = "";
    this._query = computed(() => {
      const { date, zones } = this._filters();
      return { date, zones };
    }, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_query" } : (
      /* istanbul ignore next */
      {}
    )), { equal: (a, b) => a.date === b.date && (a.zones || []).join() === (b.zones || []).join() }));
    this.orders = this._orders.asReadonly();
    this.loading = this._loading.asReadonly();
    this.load_error = this._load_error.asReadonly();
    this.last_updated = this._last_updated.asReadonly();
    this.order_changes = new Subject();
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
    this.matching = computed(
      () => this._orders().filter((order) => checkOrder(order, this._filters())).sort((a, b) => a.deliver_at - b.deliver_at),
      ...ngDevMode ? [{ debugName: "matching" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered = computed(
      () => {
        const status = this._filters().status;
        return this.matching().filter((order) => matchesStatusFilter(order.status, status));
      },
      ...ngDevMode ? [{ debugName: "filtered" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.status_counts = computed(
      () => {
        const counts = {};
        const add = (key) => counts[key] = (counts[key] || 0) + 1;
        for (const order of this.matching()) {
          add("all");
          add(order.status);
          if (!isOrderDone(order.status))
            add("active");
        }
        return counts;
      },
      ...ngDevMode ? [{ debugName: "status_counts" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._space_pipe.org = this._org;
    effect(() => {
      const building = this._org.active_building();
      const query = this._query();
      this._poll();
      if (!building?.id)
        return;
      untracked(() => this._loadOrders(query, building.id));
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
   * Change the status of an order and tell the user the result.
   * Offers undo after a successful change.
   */
  async changeStatus(order, status, can_undo = true) {
    const previous = order.status;
    if (previous === status)
      return;
    try {
      await this.updateStatus(order, status);
    } catch {
      return notifyError(i18n("CATERING.ORDERS_STATUS_ERROR"));
    }
    if (!can_undo)
      return;
    const name = statusList().find((s) => s.id === status)?.name;
    notifySuccess(i18n("CATERING.ORDERS_STATUS_UPDATED", { status: name || status }), i18n("COMMON.UNDO"), () => this.changeStatus(order, previous, false));
  }
  /**
   * Update the status of the order.
   * The order shows the new status at once and reverts if the save fails.
   * @param order Order to update
   * @param status New order status
   */
  async updateStatus(order, status) {
    const previous = order.status;
    this._setOrderStatus(order, status);
    try {
      return await this._saveStatus(order, status);
    } catch (error) {
      this._setOrderStatus(order, previous);
      throw error;
    }
  }
  /** Change the status of a listed order and update the list signals */
  _setOrderStatus(order, status) {
    order.status = status;
    this._orders.update((list) => [...list]);
  }
  async _saveStatus(order, status) {
    const updated_order = new CateringOrder(__spreadProps(__spreadValues({}, order), {
      status,
      event: null
    }));
    updated_order._status = status;
    const catering = [
      ...(order.event.extension_data.catering || []).filter((o) => o.id !== order.id),
      updated_order
    ].map((i) => new CateringOrder(__spreadValues({}, i)).toJSON());
    const system_id = cateringOrderSystemId(order);
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
    return booking;
  }
  async _loadOrders(query, building_id) {
    const load_id = ++this._load_id;
    const day = format(query.date || Date.now(), "yyyy-MM-dd");
    const key = `${building_id}|${day}|${(query.zones || []).join()}`;
    this._loading.set(true);
    try {
      const orders = this.using_bookings ? await this._loadBookingOrders(query) : await this._loadEmbeddedOrders(query);
      if (load_id !== this._load_id)
        return;
      const next = unique(orders.filter((o) => format(o.deliver_at, "yyyy-MM-dd") === day), "id");
      if (this._loaded_key === key) {
        const changes = diffOrders(this._orders(), next);
        if (changes.added.length || changes.cancelled.length) {
          this.order_changes.next(changes);
        }
      }
      this._orders.set(next);
      this._loaded_key = key;
      this._load_error.set(false);
      this._last_updated.set(Date.now());
    } catch (error) {
      if (load_id !== this._load_id)
        return;
      log("Catering", "Failed to load catering orders", error, "error");
      if (this._loaded_key !== key)
        this._orders.set([]);
      this._load_error.set(true);
    } finally {
      if (load_id === this._load_id)
        this._loading.set(false);
    }
  }
  async _loadEmbeddedOrders({ date, zones }) {
    const start = getUnixTime(startOfDay(date || Date.now()));
    const end = getUnixTime(endOfDay(date || Date.now()));
    if (!zones?.length) {
      zones = this._settings.get("app.use_region") ? [this._org.region?.id] : [this._org.building?.id];
    }
    const events = await queryEventsOrThrow({
      zone_ids: (zones || []).join(","),
      period_start: start,
      period_end: end
    });
    const orders = flatten(events.map((event) => event.valid_catering.map((o) => new CateringOrder(__spreadProps(__spreadValues({}, o), { event })))));
    await Promise.all(orders.map((order) => this._attachOrderSpace(order)));
    return orders;
  }
  async _loadBookingOrders({ date, zones }) {
    const start = getUnixTime(startOfDay(date || Date.now()));
    const end = getUnixTime(endOfDay(date || Date.now()));
    if (!zones?.length) {
      zones = this._settings.get("app.use_region") ? [this._org.region.id] : [this._org.building.id];
    }
    const bookings = await queryBookingsOrThrow({
      type: "catering-order",
      zones: (zones || []).join(","),
      period_start: start,
      period_end: end
    });
    const orders = flatten(bookings.map((bkn) => {
      const order = new CateringOrder(__spreadProps(__spreadValues({}, bkn.extension_data.details), {
        system_id: bkn.extension_data.details?.system_id,
        event: bkn.linked_event ? new CalendarEvent(__spreadValues({}, bkn.linked_event)) : newCalendarEventFromBooking(bkn.linked_bookings[0] || bkn)
      }));
      BOOKINGS[order.id] = bkn;
      return order;
    }));
    await Promise.all(orders.map((order) => this._attachOrderSpace(order)));
    return orders;
  }
  async _attachOrderSpace(order) {
    const system_id = order.system_id || order.event?.system?.id || order.event?.resources[0]?.id;
    if (!system_id)
      return;
    const space = await this._space_pipe.transform(system_id);
    if (!space)
      return;
    order.space = space;
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
        const user_groups = user_group_names();
        let provider_list = Object.keys(provider_groups);
        if (!provider_list.length) {
          return unique(this._menu().map((i) => i.caterer)).sort((a, b) => `${a}`.localeCompare(b));
        }
        provider_list = provider_list.filter((caterer) => provider_groups[caterer].find((group) => user_groups.includes(group)));
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
  /**
   * Open a copy of an item in the item form.
   * The copy is only saved when the user saves the form.
   */
  duplicateItem(item) {
    return this.addItem(new CateringItem(__spreadProps(__spreadValues({}, item), {
      id: "",
      name: i18n("CATERING.ITEM_COPY_NAME", { name: item.name })
    })));
  }
  /**
   * Allow or stop ordering of items from a zone, after the user confirms.
   * Saves one item at a time and skips items that do not need a change.
   */
  async setItemsEnabled(items, zone, enabled) {
    const changed = items.filter((item) => item.hide_for_zones.includes(zone) === enabled);
    if (!changed.length)
      return;
    const details = await openConfirmModal({
      title: i18n(enabled ? "CATERING.MENU_ALLOW_ALL" : "CATERING.MENU_STOP_ALL"),
      content: i18n("CATERING.MENU_BULK_CONFIRM", {
        count: changed.length
      }),
      icon: {
        type: "icon",
        class: "material-symbols-outlined",
        content: enabled ? "check_box" : "disabled_by_default"
      }
    }, this._dialog);
    if (details.reason !== "done")
      return;
    details.loading(i18n("CATERING.ITEM_SAVING"));
    let failed = 0;
    for (const item of changed) {
      const hide_for_zones = enabled ? item.hide_for_zones.filter((id) => id !== zone) : [...item.hide_for_zones, zone];
      try {
        const saved = await saveCateringItem(new CateringItem(__spreadProps(__spreadValues({}, item), { hide_for_zones })), this._org.building.id);
        this._menu.set(this._menu().map((itm) => itm.id === item.id ? saved : itm));
      } catch {
        failed++;
      }
    }
    details.close();
    if (failed)
      notifyError(i18n("CATERING.ITEM_SAVE_ERROR"));
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
    const result = await oc(this._org.building.id, {
      id: this._org.building.id,
      name: "catering-settings",
      details: __spreadValues(__spreadValues({}, old_settings), settings),
      description: `Catering settings for ${this._org.building.id}`
    });
    this._change.set(Date.now());
    return result;
  }
  async getCateringConfig(zone_id = this._org.building.id) {
    const rules = (await rc(zone_id, "catering_config")).details;
    return rules instanceof Array ? rules : [];
  }
  updateConfig(zone_id, config) {
    return oc(zone_id, {
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
    const metadata = await rc(building_id, "catering-settings").catch(() => ({}));
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
var _c02 = (a0) => ({ count: a0 });
var _c12 = (a0) => ({ key: "active", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c2 = (a0) => ({ key: "name", name: a0 });
var _c3 = (a0) => ({ key: "category", name: a0 });
var _c4 = (a0, a1) => ({ key: "caterer", name: a0, show: a1 });
var _c5 = (a0, a1) => ({ key: "unit_price", name: a0, content: a1, size: "6rem" });
var _c6 = (a0) => ({ key: "actions", name: " ", content: a0, size: "6.5rem", sortable: false });
var _c7 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function CateringMenuComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 10);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("ngModelChange", function CateringMenuComponent_ng_template_16_Template_mat_checkbox_ngModelChange_0_listener($event) {
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
function CateringMenuComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
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
function CateringMenuComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "button", 13)(2, "icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 4)(6, "button", 14);
    \u0275\u0275listener("click", function CateringMenuComponent_ng_template_20_Template_button_click_6_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addOption(row_r6));
    });
    \u0275\u0275elementStart(7, "div", 15)(8, "icon");
    \u0275\u0275text(9, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "button", 14);
    \u0275\u0275listener("click", function CateringMenuComponent_ng_template_20_Template_button_click_13_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editItem(row_r6));
    });
    \u0275\u0275elementStart(14, "div", 15)(15, "icon");
    \u0275\u0275text(16, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "button", 14);
    \u0275\u0275listener("click", function CateringMenuComponent_ng_template_20_Template_button_click_20_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.duplicateItem(row_r6));
    });
    \u0275\u0275elementStart(21, "div", 15)(22, "icon");
    \u0275\u0275text(23, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "button", 14);
    \u0275\u0275listener("click", function CateringMenuComponent_ng_template_20_Template_button_click_27_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeItem(row_r6));
    });
    \u0275\u0275elementStart(28, "div", 15)(29, "icon", 16);
    \u0275\u0275text(30, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "button", 17);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275listener("click", function CateringMenuComponent_ng_template_20_Template_button_click_34_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleExpanded(row_r6.id));
    });
    \u0275\u0275elementStart(36, "icon");
    \u0275\u0275text(37);
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 11, "CATERING.ITEM_OPTION_ADD"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 13, "CATERING.ITEM_EDIT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 15, "COMMON.DUPLICATE"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 17, "CATERING.ITEM_REMOVE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !row_r6.options?.length)("matTooltip", row_r6.options?.length ? \u0275\u0275pipeBind1(35, 19, ctx_r2.isExpanded(row_r6.id) ? "CATERING.ITEM_OPTION_HIDE" : "CATERING.ITEM_OPTION_SHOW") : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.isExpanded(row_r6.id) ? "keyboard_arrow_down" : "chevron_right", " ");
  }
}
function CateringMenuComponent_ng_template_22_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringMenuComponent_ng_template_22_For_1_Conditional_7_Template_button_click_0_listener() {
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
function CateringMenuComponent_ng_template_22_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringMenuComponent_ng_template_22_For_1_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const option_r9 = \u0275\u0275nextContext().$implicit;
      const row_r10 = \u0275\u0275nextContext().row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeOption(row_r10, option_r9));
    });
    \u0275\u0275elementStart(2, "icon", 16);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "CATERING.ITEM_OPTION_REMOVE"));
  }
}
function CateringMenuComponent_ng_template_22_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "div", 19);
    \u0275\u0275elementStart(2, "div", 20)(3, "div", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, CateringMenuComponent_ng_template_22_For_1_Conditional_7_Template, 4, 3, "button", 23);
    \u0275\u0275conditionalCreate(8, CateringMenuComponent_ng_template_22_For_1_Conditional_8_Template, 4, 3, "button", 24);
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
function CateringMenuComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CateringMenuComponent_ng_template_22_For_1_Template, 9, 4, "div", 18, \u0275\u0275repeaterTrackByIdentity);
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
        const search = (filters?.search || "").toLowerCase();
        return this._menu().filter((item) => (!filters?.caterer || filters.caterer === "<empty>" && !item.caterer || item.caterer === filters.caterer) && [item.name, item.category, item.caterer, item.description].join("\n").toLowerCase().includes(search));
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
    this.duplicateItem = (item) => this._catering.duplicateItem(item);
    this.setAllEnabled = (enabled) => this._catering.setItemsEnabled(this.menu(), this._catering.zone, enabled);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringMenuComponent, selectors: [["catering-menu"]], decls: 24, vars: 51, consts: [["active_template", ""], ["price_template", ""], ["actions_template", ""], ["child_template", ""], ["menu", "matMenu"], [1, "mb-2", "flex", "items-center", "gap-2", "text-sm"], [1, "flex-1", "opacity-60"], ["btn", "", "matRipple", "", "allow-all", "", 1, "inverse", 3, "click", "disabled"], ["btn", "", "matRipple", "", "stop-all", "", 1, "inverse", 3, "click", "disabled"], [1, "block", "w-full", "min-w-lg", "text-sm", 3, "data", "columns", "show_children", "child_template", "sortable", "empty_message"], ["matTooltipPosition", "right", 1, "mx-auto", 3, "ngModelChange", "matTooltip", "ngModel"], [1, "bg-secondary", "text-secondary-content", "mx-auto", "flex", "items-center", "rounded-sm", "px-2", "py-1", "font-mono", "text-xs"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 3, "disabled", "matMenuTriggerFor"], ["mat-menu-item", "", 1, "flex", "items-center", 3, "click"], [1, "flex", "items-center", "space-x-2", "pr-2"], [1, "text-error"], ["icon", "", "matRipple", "", 3, "click", "disabled", "matTooltip"], [1, "border-base-200", "relative", "flex", "items-center", "space-x-2", "border-b", "border-solid", "p-2"], [1, "absolute", "inset-y-0", "left-0", "w-2", "bg-black", "opacity-10"], [1, "flex-1", "pr-2", "pl-4"], [1, "text"], [1, "text-xs", "opacity-60"], ["icon", "", "matRipple", "", 3, "matTooltip"], ["icon", "", "matRipple", "", 1, "mr-1!", 3, "matTooltip"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "mr-1!", 3, "click", "matTooltip"]], template: function CateringMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 7);
        \u0275\u0275listener("click", function CateringMenuComponent_Template_button_click_4_listener() {
          return ctx.setAllEnabled(true);
        });
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "button", 8);
        \u0275\u0275listener("click", function CateringMenuComponent_Template_button_click_7_listener() {
          return ctx.setAllEnabled(false);
        });
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(10, "simple-table", 9);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275template(16, CateringMenuComponent_ng_template_16_Template, 2, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(18, CateringMenuComponent_ng_template_18_Template, 3, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(20, CateringMenuComponent_ng_template_20_Template, 38, 21, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(22, CateringMenuComponent_ng_template_22_Template, 2, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const active_template_r12 = \u0275\u0275reference(17);
        const price_template_r13 = \u0275\u0275reference(19);
        const actions_template_r14 = \u0275\u0275reference(21);
        const child_template_r15 = \u0275\u0275reference(23);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 11, "CATERING.MENU_SHOWN", \u0275\u0275pureFunction1(28, _c02, ctx.menu().length)), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.menu().length);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 14, "CATERING.MENU_ALLOW_ALL"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.menu().length);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 16, "CATERING.MENU_STOP_ALL"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("data", ctx.menu())("columns", \u0275\u0275pureFunction6(44, _c7, \u0275\u0275pureFunction1(30, _c12, active_template_r12), \u0275\u0275pureFunction1(32, _c2, \u0275\u0275pipeBind1(11, 18, "FORM.NAME")), \u0275\u0275pureFunction1(34, _c3, \u0275\u0275pipeBind1(12, 20, "COMMON.CATEGORY")), \u0275\u0275pureFunction2(36, _c4, \u0275\u0275pipeBind1(13, 22, "CATERING.CATERER"), !ctx.filters()?.caterer && ctx.caterers().length > 1), \u0275\u0275pureFunction2(39, _c5, \u0275\u0275pipeBind1(14, 24, "CATERING.ITEM_PRICE"), price_template_r13), \u0275\u0275pureFunction1(42, _c6, actions_template_r14)))("show_children", ctx.show_children())("child_template", child_template_r15)("sortable", true)("empty_message", \u0275\u0275pipeBind1(15, 26, "CATERING.ITEM_LIST_EMPTY"));
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
        <div class="mb-2 flex items-center gap-2 text-sm">
            <div class="flex-1 opacity-60">
                {{
                    'CATERING.MENU_SHOWN' | translate: { count: menu().length }
                }}
            </div>
            <button
                btn
                matRipple
                allow-all
                class="inverse"
                [disabled]="!menu().length"
                (click)="setAllEnabled(true)"
            >
                {{ 'CATERING.MENU_ALLOW_ALL' | translate }}
            </button>
            <button
                btn
                matRipple
                stop-all
                class="inverse"
                [disabled]="!menu().length"
                (click)="setAllEnabled(false)"
            >
                {{ 'CATERING.MENU_STOP_ALL' | translate }}
            </button>
        </div>
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
                        (click)="duplicateItem(row)"
                    >
                        <div class="flex items-center space-x-2 pr-2">
                            <icon>content_copy</icon>
                            <div>{{ 'COMMON.DUPLICATE' | translate }}</div>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringMenuComponent, { className: "CateringMenuComponent", filePath: "libs/catering/src/lib/catering-menu.component.ts", lineNumber: 243 });
})();

// libs/catering/src/lib/catering-order-dockets.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CateringOrderDocketsComponent_For_1_For_15_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r1.optionNames(item_r1), ") ");
  }
}
function CateringOrderDocketsComponent_For_1_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li")(1, "span", 8);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3);
    \u0275\u0275conditionalCreate(4, CateringOrderDocketsComponent_For_1_For_15_Conditional_4_Template, 2, 1, "span", 9);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r1.quantity, "\xD7");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r1.option_list.length ? 4 : -1);
  }
}
function CateringOrderDocketsComponent_For_1_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 6)(1, "span", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const order_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "FORM.NOTES"), ": ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", order_r3.notes, " ");
  }
}
function CateringOrderDocketsComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 3);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "div", 4)(8, "div");
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(13, "ul", 5);
    \u0275\u0275repeaterCreate(14, CateringOrderDocketsComponent_For_1_For_15_Template, 5, 3, "li", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(16, CateringOrderDocketsComponent_For_1_Conditional_16_Template, 5, 4, "p", 6);
    \u0275\u0275domElementStart(17, "div", 7)(18, "div");
    \u0275\u0275text(19);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(20, "div");
    \u0275\u0275text(21);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "div");
    \u0275\u0275text(23);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const order_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 8, order_r3.deliver_at, ctx_r1.time_format()), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.location(order_r3));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.host(order_r3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 11, order_r3.deliver_at, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(order_r3.items);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(order_r3.notes ? 16 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r3.caterer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r3.charge_code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r3.invoice_number);
  }
}
var CateringDocketsService = class _CateringDocketsService {
  constructor() {
    this._orders = signal(
      [],
      ...ngDevMode ? [{ debugName: "_orders" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.orders = this._orders.asReadonly();
  }
  /** Print one docket for each order */
  print(orders) {
    this._orders.set(orders);
    setTimeout(() => window.print(), 100);
  }
  static {
    this.\u0275fac = function CateringDocketsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringDocketsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CateringDocketsService, factory: _CateringDocketsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringDocketsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CateringOrderDocketsComponent = class _CateringOrderDocketsComponent {
  constructor() {
    this._dockets = inject(CateringDocketsService);
    this._settings = inject(SettingsService);
    this.orders = this._dockets.orders;
    this.time_format = this._settings.time_format_signal;
    this.location = orderLocation;
    this.host = orderHost;
  }
  optionNames(item) {
    return item.option_list.map((option) => option.name).join(", ");
  }
  static {
    this.\u0275fac = function CateringOrderDocketsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringOrderDocketsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringOrderDocketsComponent, selectors: [["catering-order-dockets"]], hostAttrs: [1, "hidden", "print:block"], decls: 2, vars: 0, consts: [["docket", "", 1, "break-after-page", "p-4", "text-black"], [1, "flex", "items-baseline", "justify-between", "border-b", "pb-2"], [1, "text-3xl", "font-bold"], [1, "text-xl"], [1, "flex", "justify-between", "py-2", "text-sm"], [1, "my-2", "space-y-1", "text-lg"], [1, "border", "p-2", "whitespace-pre-line"], [1, "mt-2", "flex", "justify-between", "text-xs"], [1, "font-bold"], [1, "text-sm"]], template: function CateringOrderDocketsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, CateringOrderDocketsComponent_For_1_Template, 24, 14, "article", 0, _forTrack0);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.orders());
      }
    }, dependencies: [DatePipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringOrderDocketsComponent, [{
    type: Component,
    args: [{
      selector: "catering-order-dockets",
      host: { class: "hidden print:block" },
      template: `
        @for (order of orders(); track order.id) {
            <article docket class="break-after-page p-4 text-black">
                <div class="flex items-baseline justify-between border-b pb-2">
                    <div class="text-3xl font-bold">
                        {{ order.deliver_at | date: time_format() }}
                    </div>
                    <div class="text-xl">{{ location(order) }}</div>
                </div>
                <div class="flex justify-between py-2 text-sm">
                    <div>{{ host(order) }}</div>
                    <div>{{ order.deliver_at | date: 'mediumDate' }}</div>
                </div>
                <ul class="my-2 space-y-1 text-lg">
                    @for (item of order.items; track $index) {
                        <li>
                            <span class="font-bold">{{ item.quantity }}\xD7</span>
                            {{ item.name }}
                            @if (item.option_list.length) {
                                <span class="text-sm">
                                    ({{ optionNames(item) }})
                                </span>
                            }
                        </li>
                    }
                </ul>
                @if (order.notes) {
                    <p class="border p-2 whitespace-pre-line">
                        <span class="font-bold">
                            {{ 'FORM.NOTES' | translate }}:
                        </span>
                        {{ order.notes }}
                    </p>
                }
                <div class="mt-2 flex justify-between text-xs">
                    <div>{{ order.caterer }}</div>
                    <div>{{ order.charge_code }}</div>
                    <div>{{ order.invoice_number }}</div>
                </div>
            </article>
        }
    `,
      imports: [DatePipe, TranslatePipe]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringOrderDocketsComponent, { className: "CateringOrderDocketsComponent", filePath: "libs/catering/src/lib/catering-order-dockets.component.ts", lineNumber: 77 });
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
var CHECKED_ITEMS_KEY = "PLACEOS.catering.checked_items";
var CHECKED_ITEM_MAX_AGE = 2 * 24 * 60 * 60 * 1e3;
function readCheckedItems() {
  const now = Date.now();
  try {
    const saved = JSON.parse(localStorage.getItem(CHECKED_ITEMS_KEY) || "{}");
    return Object.fromEntries(Object.entries(saved).filter((entry) => typeof entry[1] === "number" && now - entry[1] < CHECKED_ITEM_MAX_AGE));
  } catch {
    return {};
  }
}
function saveCheckedItem(key, checked) {
  const items = readCheckedItems();
  if (checked)
    items[key] = Date.now();
  else
    delete items[key];
  localStorage.setItem(CHECKED_ITEMS_KEY, JSON.stringify(items));
}
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
    this.active.set(this.item_key() in readCheckedItems());
  }
  toggle() {
    const checked = !this.active();
    saveCheckedItem(this.item_key(), checked);
    this.active.set(checked);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringOrderItemComponent, { className: "CateringOrderItemComponent", filePath: "libs/catering/src/lib/catering-order-item.component.ts", lineNumber: 96 });
})();

// libs/catering/src/lib/catering-order-list.component.ts
var _c03 = (a0) => ({ key: "state", name: " ", size: "4rem", sortable: false, content: a0 });
var _c13 = (a0, a1) => ({ key: "caterer", name: a0, show: a1 });
var _c22 = (a0, a1) => ({ key: "deliver_at", name: a0, content: a1 });
var _c32 = (a0, a1) => ({ key: "event", name: a0, content: a1, sortable: false });
var _c42 = (a0) => ({ key: "charge_code", name: a0 });
var _c52 = (a0, a1) => ({ key: "invoice_number", name: a0, empty: a1 });
var _c62 = (a0, a1) => ({ key: "status", name: a0, content: a1, size: "15rem" });
var _c72 = (a0, a1) => ({ key: "actions", name: " ", size: a0, content: a1, sortable: false });
var _c8 = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => [a0, a1, a2, a3, a4, a5, a6, a7, a8];
var _c9 = (a0) => ({ time: a0 });
var _c10 = (a0) => ({ minutes: a0 });
var _c11 = (a0) => ({ status: a0 });
var _forTrack02 = ($index, $item) => $item.id;
function CateringOrderListComponent_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 4, "COMMON.LAST_UPDATED", \u0275\u0275pureFunction1(7, _c9, \u0275\u0275pipeBind2(2, 1, ctx_r1.last_updated(), ctx_r1.time_format()))), " ");
  }
}
function CateringOrderListComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "icon", 17);
    \u0275\u0275text(2, "cloud_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, CateringOrderListComponent_Conditional_2_Conditional_6_Template, 4, 9, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "CATERING.ORDERS_LOAD_ERROR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.last_updated() ? 6 : -1);
  }
}
function CateringOrderListComponent_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 26);
  }
  if (rf & 2) {
    const option_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("background-color", option_r4.colour);
  }
}
function CateringOrderListComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function CateringOrderListComponent_For_5_Template_button_click_0_listener() {
      const option_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setStatusFilter(option_r4.id));
    });
    \u0275\u0275conditionalCreate(1, CateringOrderListComponent_For_5_Conditional_1_Template, 1, 2, "span", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-secondary", ctx_r1.status_filter() === option_r4.id)("text-secondary-content", ctx_r1.status_filter() === option_r4.id)("border-transparent", ctx_r1.status_filter() === option_r4.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(option_r4.colour ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r4.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.status_counts()[option_r4.id] || 0, " ");
  }
}
function CateringOrderListComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "icon");
    \u0275\u0275text(3, "room_service");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    const urgency_r6 = \u0275\u0275nextContext().urgencyOf(row_r5);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-base-200", !urgency_r6)("bg-error", urgency_r6 === "overdue")("text-error-content", urgency_r6 === "overdue")("bg-warning", urgency_r6 === "soon")("text-warning-content", urgency_r6 === "soon");
  }
}
function CateringOrderListComponent_ng_template_24_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "CATERING.ORDERS_OVERDUE"), " ");
  }
}
function CateringOrderListComponent_ng_template_24_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const row_r7 = \u0275\u0275nextContext(2).row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "CATERING.ORDERS_DUE_SOON", \u0275\u0275pureFunction1(4, _c10, ctx_r1.minutesUntil(row_r7))), " ");
  }
}
function CateringOrderListComponent_ng_template_24_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275conditionalCreate(1, CateringOrderListComponent_ng_template_24_Conditional_12_Conditional_1_Template, 2, 3)(2, CateringOrderListComponent_ng_template_24_Conditional_12_Conditional_2_Template, 2, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const urgency_r8 = \u0275\u0275readContextLet(11);
    \u0275\u0275classProp("bg-error", urgency_r8 === "overdue")("text-error-content", urgency_r8 === "overdue")("bg-warning", urgency_r8 === "soon")("text-warning-content", urgency_r8 === "soon");
    \u0275\u0275advance();
    \u0275\u0275conditional(urgency_r8 === "overdue" ? 1 : 2);
  }
}
function CateringOrderListComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 30);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275pipe(8, "date");
    \u0275\u0275pipe(9, "date");
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275declareLet(11);
    \u0275\u0275conditionalCreate(12, CateringOrderListComponent_ng_template_24_Conditional_12_Template, 3, 9, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r9 = ctx.data;
    const row_r7 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 9, "CATERING.ORDERS_DELIVER_TIME", \u0275\u0275pureFunction1(25, _c9, \u0275\u0275pipeBind2(3, 6, data_r9, ctx_r1.time_format()))), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate4(" ", \u0275\u0275pipeBind2(7, 12, row_r7?.event?.date, "MMM d"), ", ", \u0275\u0275pipeBind2(8, 15, row_r7?.event?.date, ctx_r1.time_format()), " - ", \u0275\u0275pipeBind2(9, 18, row_r7?.event?.date_end, "MMM d"), ", ", \u0275\u0275pipeBind2(10, 21, row_r7?.event?.date_end, ctx_r1.time_format()), " ");
    \u0275\u0275advance(5);
    const urgency_r10 = \u0275\u0275storeLet(ctx_r1.urgencyOf(row_r7));
    \u0275\u0275advance();
    \u0275\u0275conditional(urgency_r10 ? 12 : -1);
  }
}
function CateringOrderListComponent_ng_template_26_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CATERING.ORDERS_LOCATION_EMPTY"), " ");
  }
}
function CateringOrderListComponent_ng_template_26_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, CateringOrderListComponent_ng_template_26_Conditional_1_Conditional_2_Template, 3, 3, "span", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const space_r11 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", space_r11?.display_name || space_r11?.name || "", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(space_r11?.display_name || space_r11?.name) ? 2 : -1);
  }
}
function CateringOrderListComponent_ng_template_26_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r12 = \u0275\u0275nextContext().data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r12?.location);
  }
}
function CateringOrderListComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275conditionalCreate(1, CateringOrderListComponent_ng_template_26_Conditional_1_Template, 3, 2, "div", 33)(2, CateringOrderListComponent_ng_template_26_Conditional_2_Template, 2, 1, "div", 33);
  }
  if (rf & 2) {
    const data_r12 = ctx.data;
    const row_r13 = ctx.row;
    const space_r14 = \u0275\u0275storeLet(row_r13?.space || data_r12?.system);
    \u0275\u0275advance();
    \u0275\u0275conditional(space_r14 || !data_r12?.location ? 1 : 2);
  }
}
function CateringOrderListComponent_ng_template_28_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CATERING.ORDERS_HOST_EMPTY"), " ");
  }
}
function CateringOrderListComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, CateringOrderListComponent_ng_template_28_Conditional_3_Template, 3, 3, "span", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r15 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r15?.organiser?.name || data_r15?.host || "", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(data_r15?.organiser?.name || data_r15?.host) ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r15?.organiser?.email || data_r15?.host, " ");
  }
}
function CateringOrderListComponent_ng_template_30_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringOrderListComponent_ng_template_30_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const row_r17 = \u0275\u0275nextContext().row;
      const next_r18 = \u0275\u0275readContextLet(6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateStatus(row_r17, next_r18));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const next_r18 = \u0275\u0275readContextLet(6);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("border-color", ctx_r1.status(next_r18)?.colour);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(1, 4, "CATERING.ORDERS_NEXT_STATUS", \u0275\u0275pureFunction1(7, _c11, ctx_r1.status(next_r18)?.name)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", next_r18 === "delivered" ? "done_all" : "arrow_forward", " ");
  }
}
function CateringOrderListComponent_ng_template_30_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function CateringOrderListComponent_ng_template_30_For_11_Template_button_click_0_listener() {
      const status_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const row_r17 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateStatus(row_r17, status_r20.id));
    });
    \u0275\u0275elementStart(1, "div", 43);
    \u0275\u0275element(2, "div", 44);
    \u0275\u0275elementStart(3, "span", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const status_r20 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", status_r20.colour);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(status_r20.name);
  }
}
function CateringOrderListComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "button", 36)(2, "div", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon", 38);
    \u0275\u0275text(5, "arrow_drop_down");
    \u0275\u0275elementEnd()();
    \u0275\u0275declareLet(6);
    \u0275\u0275conditionalCreate(7, CateringOrderListComponent_ng_template_30_Conditional_7_Template, 4, 9, "button", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-menu", null, 8);
    \u0275\u0275repeaterCreate(10, CateringOrderListComponent_ng_template_30_For_11_Template, 5, 3, "button", 40, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r21 = ctx.data;
    const menu_r22 = \u0275\u0275reference(9);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.status(data_r21)?.colour);
    \u0275\u0275property("matMenuTriggerFor", menu_r22);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.status(data_r21)?.name, " ");
    \u0275\u0275advance(3);
    const next_r23 = \u0275\u0275storeLet(ctx_r1.nextStatus(data_r21));
    \u0275\u0275advance();
    \u0275\u0275conditional(next_r23 ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.statuses());
  }
}
function CateringOrderListComponent_ng_template_32_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 52);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r25 = \u0275\u0275nextContext().row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "FORM.NOTES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r25.notes, " ");
  }
}
function CateringOrderListComponent_ng_template_32_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringOrderListComponent_ng_template_32_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const row_r25 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.printDocket(row_r25));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "print");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "CATERING.DOCKET_PRINT"));
  }
}
function CateringOrderListComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "button", 47);
    \u0275\u0275listener("click", function CateringOrderListComponent_ng_template_32_Template_button_click_1_listener() {
      const row_r25 = \u0275\u0275restoreView(_r24).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleExpanded(row_r25.id));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "description");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, CateringOrderListComponent_ng_template_32_ng_template_4_Template, 6, 4, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
    \u0275\u0275conditionalCreate(6, CateringOrderListComponent_ng_template_32_Conditional_6_Template, 4, 3, "button", 48);
    \u0275\u0275elementStart(7, "button", 49);
    \u0275\u0275listener("click", function CateringOrderListComponent_ng_template_32_Template_button_click_7_listener() {
      const row_r25 = \u0275\u0275restoreView(_r24).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleExpanded(row_r25.id));
    });
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r25 = ctx.row;
    const notes_template_r27 = \u0275\u0275reference(5);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("text-warning", row_r25.notes);
    \u0275\u0275property("hover", true)("content", notes_template_r27)("disabled", !row_r25.notes);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.can_print() ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isExpanded(row_r25.id) ? "keyboard_arrow_down" : "chevron_right", " ");
  }
}
function CateringOrderListComponent_ng_template_34_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "span", 56);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r28 = \u0275\u0275nextContext().row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "FORM.NOTES"), ": ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r28.notes, " ");
  }
}
function CateringOrderListComponent_ng_template_34_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 57);
  }
  if (rf & 2) {
    const item_r29 = ctx.$implicit;
    const row_r28 = \u0275\u0275nextContext(2).row;
    \u0275\u0275property("order_id", row_r28?.id)("item", item_r29);
  }
}
function CateringOrderListComponent_ng_template_34_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 55);
    \u0275\u0275repeaterCreate(1, CateringOrderListComponent_ng_template_34_Conditional_1_For_2_Template, 1, 2, "li", 57, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r28 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r28.items);
  }
}
function CateringOrderListComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CateringOrderListComponent_ng_template_34_Conditional_0_Template, 5, 4, "div", 54);
    \u0275\u0275conditionalCreate(1, CateringOrderListComponent_ng_template_34_Conditional_1_Template, 3, 0, "ul", 55);
  }
  if (rf & 2) {
    const row_r28 = ctx.row;
    \u0275\u0275conditional(row_r28?.notes ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r28?.items.length ? 1 : -1);
  }
}
function CateringOrderListComponent_For_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function CateringOrderListComponent_For_45_Template_button_click_0_listener() {
      const status_r31 = \u0275\u0275restoreView(_r30).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSelectedStatus(status_r31.id));
    });
    \u0275\u0275elementStart(1, "div", 43);
    \u0275\u0275element(2, "div", 44);
    \u0275\u0275elementStart(3, "span", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const status_r31 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", status_r31.colour);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(status_r31.name);
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
    this._dockets = inject(CateringDocketsService);
    this.can_print = input(
      false,
      ...ngDevMode ? [{ debugName: "can_print" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.bulk_actions = input(
      true,
      ...ngDevMode ? [{ debugName: "bulk_actions" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.order_list = this._orders.filtered;
    this.loading = this._orders.loading;
    this.load_error = this._orders.load_error;
    this.last_updated = this._orders.last_updated;
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
    this.selected = signal(
      [],
      ...ngDevMode ? [{ debugName: "selected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.bulk_busy = signal(
      false,
      ...ngDevMode ? [{ debugName: "bulk_busy" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.now = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "now" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.status_counts = this._orders.status_counts;
    this.status_filters = [
      { id: "all", name: i18n("COMMON.ALL") },
      { id: "active", name: i18n("COMMON.STATE_ACTIVE") },
      ...this.statuses().map(({ id, name, colour }) => ({
        id,
        name,
        colour
      }))
    ];
    this.status_filter = computed(
      () => this.filters()?.status || "all",
      ...ngDevMode ? [{ debugName: "status_filter" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.all_expanded = computed(
      () => {
        const shown = this.show_children();
        const list = this.order_list();
        return list.length > 0 && list.every((order) => shown[order.id]);
      },
      ...ngDevMode ? [{ debugName: "all_expanded" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.nextStatus = nextOrderStatus;
    this.updateStatus = (order, status) => this._orders.changeStatus(order, status);
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
    this.interval("clock", () => this.now.set(Date.now()), 30 * 1e3);
  }
  /** Change the status of every selected order */
  async setSelectedStatus(status) {
    const ids = new Set(this.selected());
    const orders = this.order_list().filter((order) => ids.has(order.id));
    this.bulk_busy.set(true);
    await runBulkAction(orders, (order) => this._orders.updateStatus(order, status)).finally(() => this.bulk_busy.set(false));
    this.selected.set([]);
  }
  setStatusFilter(status) {
    this._orders.filters = __spreadProps(__spreadValues({}, this._orders.filters), { status });
  }
  /** Show the items of every listed order, or hide them all */
  toggleAllExpanded() {
    const expand = !this.all_expanded();
    this.show_children.set(expand ? Object.fromEntries(this.order_list().map((order) => [order.id, true])) : {});
  }
  printDocket(order) {
    this._dockets.print([order]);
  }
  urgencyOf(order) {
    return orderUrgency(order.status, order.deliver_at, this.now());
  }
  /** Whole minutes until the order is due */
  minutesUntil(order) {
    return Math.ceil((order.deliver_at - this.now()) / (60 * 1e3));
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringOrderListComponent, selectors: [["catering-order-list"]], inputs: { can_print: [1, "can_print"], bulk_actions: [1, "bulk_actions"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 46, vars: 75, consts: [["state_template", ""], ["time_template", ""], ["location_template", ""], ["host_template", ""], ["status_template", ""], ["actions_template", ""], ["child_template", ""], ["bulk_status_menu", "matMenu"], ["menu", "matMenu"], ["notes_template", ""], [1, "flex", "h-full", "w-full", "flex-col", "overflow-auto"], ["mode", "indeterminate", 1, "sticky", "top-0", "left-0", "w-full"], ["load-error", "", 1, "bg-error", "text-error-content", "mb-2", "flex", "items-center", "space-x-2", "rounded-sm", "px-4", "py-2", "text-sm"], [1, "mb-2", "flex", "items-center", "gap-2", "py-1"], ["matRipple", "", "status-filter", "", 1, "border-base-300", "flex", "items-center", "gap-2", "rounded-full", "border", "px-3", "py-1", "text-sm", "whitespace-nowrap", 3, "bg-secondary", "text-secondary-content", "border-transparent"], [1, "flex-1"], ["btn", "", "matRipple", "", "expand-all", "", 1, "clear", "flex", "items-center", "gap-2", "whitespace-nowrap", 3, "click", "disabled"], [1, "text-xl"], [1, "block", "w-full", "min-w-6xl", "text-sm", 3, "selectedChange", "data", "columns", "sortable", "selectable", "selected", "show_children", "child_template", "empty_message"], [3, "clear", "count"], ["btn", "", "matRipple", "", 1, "inverse", "flex", "items-center", "gap-2", 3, "disabled", "matMenuTriggerFor"], ["mat-menu-item", ""], [1, "opacity-80"], ["matRipple", "", "status-filter", "", 1, "border-base-300", "flex", "items-center", "gap-2", "rounded-full", "border", "px-3", "py-1", "text-sm", "whitespace-nowrap", 3, "click"], [1, "h-3", "w-3", "rounded-full", 3, "background-color"], [1, "font-mono", "text-xs", "opacity-60"], [1, "h-3", "w-3", "rounded-full"], [1, "p-2"], [1, "flex", "items-center", "justify-center", "rounded-full", "p-2", "text-2xl"], [1, "p-4"], [1, "text-xs", "opacity-30"], ["urgency", "", 1, "mt-1", "w-fit", "rounded-sm", "px-2", "py-0.5", "text-xs", "font-medium", 3, "bg-error", "text-error-content", "bg-warning", "text-warning-content"], ["urgency", "", 1, "mt-1", "w-fit", "rounded-sm", "px-2", "py-0.5", "text-xs", "font-medium"], [1, "px-4", "py-2"], [1, "opacity-30"], [1, "flex", "items-center", "gap-2", "px-4", "py-2"], ["status", "", "matRipple", "", 1, "flex", "h-10", "w-36", "items-center", "rounded-3xl", "border-none", "px-4", "text-base", "text-white", 3, "matMenuTriggerFor"], [1, "mx-2", "flex", "text-center", "capitalize"], [1, "pl-2"], ["icon", "", "matRipple", "", "next-status", "", 1, "h-10", "w-10", "border-2", 3, "border-color", "matTooltip"], ["mat-menu-item", "", 1, "flex", "items-center"], ["icon", "", "matRipple", "", "next-status", "", 1, "h-10", "w-10", "border-2", 3, "click", "matTooltip"], ["mat-menu-item", "", 1, "flex", "items-center", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "mr-2", "h-4", "w-4", "rounded-full"], [1, "mr-2", "w-20"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "notes", "", "matRipple", "", "customTooltip", "", "xPosition", "end", "yPosition", "top", 3, "click", "hover", "content", "disabled"], ["icon", "", "matRipple", "", "print-docket", "", 3, "matTooltip"], ["icon", "", "matRipple", "", 3, "click"], [1, "border-base-200", "bg-base-100", "text-base-content", "max-w-lg", "min-w-32", "rounded-lg", "border", "p-2", "shadow-sm"], [1, "mb-2"], [1, "bg-base-200", "rounded-sm", "px-4", "py-2", "text-sm"], ["icon", "", "matRipple", "", "print-docket", "", 3, "click", "matTooltip"], ["order-notes", "", 1, "bg-warning/20", "mx-4", "my-2", "rounded-sm", "px-4", "py-2", "text-sm", "whitespace-pre-line"], [1, "relative", "z-0", "m-0", "w-full", "list-none", "p-0"], [1, "font-medium"], ["catering-order-item", "", 1, "flex", "items-center", 3, "order_id", "item"], ["mat-menu-item", "", 3, "click"], [1, "mr-2"]], template: function CateringOrderListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 10);
        \u0275\u0275element(1, "mat-progress-bar", 11);
        \u0275\u0275conditionalCreate(2, CateringOrderListComponent_Conditional_2_Template, 7, 4, "div", 12);
        \u0275\u0275elementStart(3, "div", 13);
        \u0275\u0275repeaterCreate(4, CateringOrderListComponent_For_5_Template, 5, 9, "button", 14, _forTrack02);
        \u0275\u0275element(6, "div", 15);
        \u0275\u0275elementStart(7, "button", 16);
        \u0275\u0275listener("click", function CateringOrderListComponent_Template_button_click_7_listener() {
          return ctx.toggleAllExpanded();
        });
        \u0275\u0275elementStart(8, "icon", 17);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "simple-table", 18);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275twoWayListener("selectedChange", function CateringOrderListComponent_Template_simple_table_selectedChange_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selected, $event) || (ctx.selected = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(22, CateringOrderListComponent_ng_template_22_Template, 4, 10, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(24, CateringOrderListComponent_ng_template_24_Template, 13, 27, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(26, CateringOrderListComponent_ng_template_26_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(28, CateringOrderListComponent_ng_template_28_Template, 6, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(30, CateringOrderListComponent_ng_template_30_Template, 12, 6, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(32, CateringOrderListComponent_ng_template_32_Template, 10, 7, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(34, CateringOrderListComponent_ng_template_34_Template, 2, 2, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "bulk-actions-bar", 19);
        \u0275\u0275listener("clear", function CateringOrderListComponent_Template_bulk_actions_bar_clear_36_listener() {
          return ctx.selected.set([]);
        });
        \u0275\u0275elementStart(37, "button", 20);
        \u0275\u0275text(38);
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275elementStart(40, "icon");
        \u0275\u0275text(41, "arrow_drop_down");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "mat-menu", null, 7);
        \u0275\u0275repeaterCreate(44, CateringOrderListComponent_For_45_Template, 5, 3, "button", 21, _forTrack02);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const state_template_r32 = \u0275\u0275reference(23);
        const time_template_r33 = \u0275\u0275reference(25);
        const location_template_r34 = \u0275\u0275reference(27);
        const host_template_r35 = \u0275\u0275reference(29);
        const status_template_r36 = \u0275\u0275reference(31);
        const actions_template_r37 = \u0275\u0275reference(33);
        const child_template_r38 = \u0275\u0275reference(35);
        const bulk_status_menu_r39 = \u0275\u0275reference(43);
        \u0275\u0275advance();
        \u0275\u0275classProp("opacity-0", !ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.load_error() ? 2 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.status_filters);
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", !ctx.order_list().length);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.all_expanded() ? "unfold_less" : "unfold_more", " ");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 18, ctx.all_expanded() ? "COMMON.COLLAPSE_ALL" : "COMMON.EXPAND_ALL"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("data", ctx.order_list())("columns", \u0275\u0275pureFunctionV(65, _c8, [\u0275\u0275pureFunction1(40, _c03, state_template_r32), \u0275\u0275pureFunction2(42, _c13, \u0275\u0275pipeBind1(13, 20, "CATERING.CATERER"), !ctx.filters()?.caterer && ctx.caterers().length > 1), \u0275\u0275pureFunction2(45, _c22, \u0275\u0275pipeBind1(14, 22, "COMMON.TIME"), time_template_r33), \u0275\u0275pureFunction2(48, _c32, \u0275\u0275pipeBind1(15, 24, "COMMON.LOCATION"), location_template_r34), \u0275\u0275pureFunction2(51, _c32, \u0275\u0275pipeBind1(16, 26, "FORM.HOST"), host_template_r35), \u0275\u0275pureFunction1(54, _c42, \u0275\u0275pipeBind1(17, 28, "CATERING.CHARGE_CODE")), \u0275\u0275pureFunction2(56, _c52, \u0275\u0275pipeBind1(18, 30, "CATERING.INVOICE_NUMBER"), \u0275\u0275pipeBind1(19, 32, "CATERING.ORDERS_INVOICE_EMPTY")), \u0275\u0275pureFunction2(59, _c62, \u0275\u0275pipeBind1(20, 34, "COMMON.STATUS"), status_template_r36), \u0275\u0275pureFunction2(62, _c72, ctx.can_print() ? "9rem" : "6.5rem", actions_template_r37)]))("sortable", true)("selectable", ctx.bulk_actions());
        \u0275\u0275twoWayProperty("selected", ctx.selected);
        \u0275\u0275property("show_children", ctx.show_children())("child_template", child_template_r38)("empty_message", \u0275\u0275pipeBind1(21, 36, "CATERING.ORDERS_EMPTY"));
        \u0275\u0275advance(24);
        \u0275\u0275property("count", ctx.selected().length);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.bulk_busy())("matMenuTriggerFor", bulk_status_menu_r39);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 38, "CATERING.ORDERS_SET_STATUS"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.statuses());
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
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      BulkActionsBarComponent,
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
            @if (load_error()) {
                <div
                    load-error
                    class="bg-error text-error-content mb-2 flex items-center space-x-2 rounded-sm px-4 py-2 text-sm"
                >
                    <icon class="text-xl">cloud_off</icon>
                    <div class="flex-1">
                        {{ 'CATERING.ORDERS_LOAD_ERROR' | translate }}
                    </div>
                    @if (last_updated()) {
                        <div class="opacity-80">
                            {{
                                'COMMON.LAST_UPDATED'
                                    | translate
                                        : {
                                              time:
                                                  last_updated()
                                                  | date: time_format(),
                                          }
                            }}
                        </div>
                    }
                </div>
            }
            <div class="mb-2 flex items-center gap-2 py-1">
                @for (option of status_filters; track option.id) {
                    <button
                        matRipple
                        status-filter
                        class="border-base-300 flex items-center gap-2 rounded-full border px-3 py-1 text-sm whitespace-nowrap"
                        [class.bg-secondary]="status_filter() === option.id"
                        [class.text-secondary-content]="
                            status_filter() === option.id
                        "
                        [class.border-transparent]="
                            status_filter() === option.id
                        "
                        (click)="setStatusFilter(option.id)"
                    >
                        @if (option.colour) {
                            <span
                                class="h-3 w-3 rounded-full"
                                [style.background-color]="option.colour"
                            ></span>
                        }
                        {{ option.name }}
                        <span class="font-mono text-xs opacity-60">
                            {{ status_counts()[option.id] || 0 }}
                        </span>
                    </button>
                }
                <div class="flex-1"></div>
                <button
                    btn
                    matRipple
                    expand-all
                    class="clear flex items-center gap-2 whitespace-nowrap"
                    [disabled]="!order_list().length"
                    (click)="toggleAllExpanded()"
                >
                    <icon class="text-xl">
                        {{ all_expanded() ? 'unfold_less' : 'unfold_more' }}
                    </icon>
                    {{
                        (all_expanded()
                            ? 'COMMON.COLLAPSE_ALL'
                            : 'COMMON.EXPAND_ALL'
                        ) | translate
                    }}
                </button>
            </div>
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
                        empty: 'CATERING.ORDERS_INVOICE_EMPTY' | translate,
                    },
                    {
                        key: 'status',
                        name: 'COMMON.STATUS' | translate,
                        content: status_template,
                        size: '15rem',
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        size: can_print() ? '9rem' : '6.5rem',
                        content: actions_template,
                        sortable: false,
                    },
                ]"
                [sortable]="true"
                [selectable]="bulk_actions()"
                [(selected)]="selected"
                [show_children]="show_children()"
                [child_template]="child_template"
                [empty_message]="'CATERING.ORDERS_EMPTY' | translate"
            >
            </simple-table>
            <ng-template #state_template let-row="row">
                @let urgency = urgencyOf(row);
                <div class="p-2">
                    <div
                        class="flex items-center justify-center rounded-full p-2 text-2xl"
                        [class.bg-base-200]="!urgency"
                        [class.bg-error]="urgency === 'overdue'"
                        [class.text-error-content]="urgency === 'overdue'"
                        [class.bg-warning]="urgency === 'soon'"
                        [class.text-warning-content]="urgency === 'soon'"
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
                    @let urgency = urgencyOf(row);
                    @if (urgency) {
                        <div
                            urgency
                            class="mt-1 w-fit rounded-sm px-2 py-0.5 text-xs font-medium"
                            [class.bg-error]="urgency === 'overdue'"
                            [class.text-error-content]="urgency === 'overdue'"
                            [class.bg-warning]="urgency === 'soon'"
                            [class.text-warning-content]="urgency === 'soon'"
                        >
                            @if (urgency === 'overdue') {
                                {{ 'CATERING.ORDERS_OVERDUE' | translate }}
                            } @else {
                                {{
                                    'CATERING.ORDERS_DUE_SOON'
                                        | translate
                                            : { minutes: minutesUntil(row) }
                                }}
                            }
                        </div>
                    }
                </div>
            </ng-template>
            <ng-template #location_template let-data="data" let-row="row">
                @let space = row?.space || data?.system;
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
                            <span class="opacity-30">
                                {{ 'CATERING.ORDERS_HOST_EMPTY' | translate }}
                            </span>
                        }
                    </div>
                    <div class="text-xs opacity-30">
                        {{ data?.organiser?.email || data?.host }}
                    </div>
                </div>
            </ng-template>
            <ng-template #status_template let-row="row" let-data="data">
                <div class="flex items-center gap-2 px-4 py-2">
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
                    @let next = nextStatus(data);
                    @if (next) {
                        <button
                            icon
                            matRipple
                            next-status
                            class="h-10 w-10 border-2"
                            [style.border-color]="status(next)?.colour"
                            [matTooltip]="
                                'CATERING.ORDERS_NEXT_STATUS'
                                    | translate: { status: status(next)?.name }
                            "
                            (click)="updateStatus(row, next)"
                        >
                            <icon>
                                {{
                                    next === 'delivered'
                                        ? 'done_all'
                                        : 'arrow_forward'
                                }}
                            </icon>
                        </button>
                    }
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
                    <!-- Hover shows a preview. Click opens the row, which also works on touch screens. -->
                    <button
                        icon
                        notes
                        matRipple
                        customTooltip
                        [hover]="true"
                        xPosition="end"
                        yPosition="top"
                        [content]="notes_template"
                        [disabled]="!row.notes"
                        [class.text-warning]="row.notes"
                        (click)="toggleExpanded(row.id)"
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
                    @if (can_print()) {
                        <button
                            icon
                            matRipple
                            print-docket
                            [matTooltip]="'CATERING.DOCKET_PRINT' | translate"
                            (click)="printDocket(row)"
                        >
                            <icon>print</icon>
                        </button>
                    }
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
                @if (row?.notes) {
                    <div
                        order-notes
                        class="bg-warning/20 mx-4 my-2 rounded-sm px-4 py-2 text-sm whitespace-pre-line"
                    >
                        <span class="font-medium">
                            {{ 'FORM.NOTES' | translate }}:
                        </span>
                        {{ row.notes }}
                    </div>
                }
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
        <bulk-actions-bar
            [count]="selected().length"
            (clear)="selected.set([])"
        >
            <button
                btn
                matRipple
                class="inverse flex items-center gap-2"
                [disabled]="bulk_busy()"
                [matMenuTriggerFor]="bulk_status_menu"
            >
                {{ 'CATERING.ORDERS_SET_STATUS' | translate }}
                <icon>arrow_drop_down</icon>
            </button>
        </bulk-actions-bar>
        <mat-menu #bulk_status_menu="matMenu">
            @for (status of statuses(); track status.id) {
                <button mat-menu-item (click)="setSelectedStatus(status.id)">
                    <div class="flex items-center space-x-2">
                        <div
                            class="mr-2 h-4 w-4 rounded-full"
                            [style.background-color]="status.colour"
                        ></div>
                        <span class="mr-2">{{ status.name }}</span>
                    </div>
                </button>
            }
        </mat-menu>
    `, imports: [
      CommonModule,
      CateringOrderItemComponent,
      MatRippleModule,
      TranslatePipe,
      CustomTooltipComponent,
      MatMenuModule,
      SimpleTableComponent,
      MatProgressBarModule,
      MatTooltipModule,
      IconComponent,
      BulkActionsBarComponent
    ], styles: ["/* angular:styles/component:css;2c590c9e56511a088a1469fe4b227d8190323c208f95620a03712f1a8f5bae8d;/home/runner/work/user-interfaces/user-interfaces/libs/catering/src/lib/catering-order-list.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=catering-order-list.component.css.map */\n"] }]
  }], () => [], { can_print: [{ type: Input, args: [{ isSignal: true, alias: "can_print", required: false }] }], bulk_actions: [{ type: Input, args: [{ isSignal: true, alias: "bulk_actions", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringOrderListComponent, { className: "CateringOrderListComponent", filePath: "libs/catering/src/lib/catering-order-list.component.ts", lineNumber: 455 });
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
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 13);
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
    \u0275\u0275elementStart(0, "mat-option", 7)(1, "div", 11);
    \u0275\u0275conditionalCreate(2, CateringTopbarComponent_For_11_Conditional_2_Template, 5, 3, "div", 12);
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
    \u0275\u0275elementStart(0, "mat-form-field", 5)(1, "mat-select", 14);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function CateringTopbarComponent_Conditional_12_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setCaterer($event));
    });
    \u0275\u0275elementStart(3, "mat-option", 15);
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
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringTopbarComponent_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addItem());
    });
    \u0275\u0275elementStart(2, "icon", 17);
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
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringTopbarComponent_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editConfig());
    });
    \u0275\u0275elementStart(2, "icon", 17);
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
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringTopbarComponent_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.importMenu());
    });
    \u0275\u0275elementStart(2, "icon", 17);
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
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringTopbarComponent_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setRoomAvailability());
    });
    \u0275\u0275elementStart(2, "icon", 17);
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
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringTopbarComponent_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setChargeCodes());
    });
    \u0275\u0275elementStart(2, "icon", 17);
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
    \u0275\u0275elementStart(0, "date-options", 19);
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
      this._orders.filters = __spreadProps(__spreadValues({}, this._orders.filters), { zones });
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringTopbarComponent, selectors: [["catering-topbar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 21, vars: 17, consts: [[1, "flex", "w-full", "items-center", "space-x-2", "px-8", "pt-4", "pb-2"], [1, "text-2xl", "font-medium"], [1, "w-px", "flex-1"], [1, "mr-2", 3, "modelChange", "model"], [1, "bg-base-100", "flex", "h-20", "items-center", "space-x-2", "px-8"], ["appearance", "outline", 1, "no-subscript", "w-60"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [1, "w-2", "flex-1"], ["icon", "", "default", "", "matRipple", "", "data-shortcut", "new", 3, "matTooltip"], ["icon", "", "default", "", "matRipple", "", 3, "matTooltip"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [3, "ngModelChange", "ngModel", "placeholder"], ["value", ""], ["icon", "", "default", "", "matRipple", "", "data-shortcut", "new", 3, "click", "matTooltip"], [1, "text-2xl"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], [3, "dateChange"]], template: function CateringTopbarComponent_Template(rf, ctx) {
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
        \u0275\u0275conditionalCreate(15, CateringTopbarComponent_Conditional_15_Template, 4, 3, "button", 10);
        \u0275\u0275conditionalCreate(16, CateringTopbarComponent_Conditional_16_Template, 4, 3, "button", 10);
        \u0275\u0275conditionalCreate(17, CateringTopbarComponent_Conditional_17_Template, 4, 3, "button", 10);
        \u0275\u0275conditionalCreate(18, CateringTopbarComponent_Conditional_18_Template, 4, 3, "button", 10);
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
        \u0275\u0275property("ngModel", ctx.zones())("placeholder", \u0275\u0275pipeBind1(9, 15, "COMMON.LEVEL_ALL"));
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
                    [ngModel]="zones()"
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
                    data-shortcut="new"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringTopbarComponent, { className: "CateringTopbarComponent", filePath: "apps/concierge/src/app/catering/catering-topbar.component.ts", lineNumber: 194 });
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
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("bulk_actions", ctx_r0.bulk_actions());
  }
}
function CateringComponent_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "catering-menu", 7);
  }
}
function CateringComponent_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "a", 9)(2, "div", 10);
    \u0275\u0275element(3, "div", 11);
    \u0275\u0275elementStart(4, "span", 12);
    \u0275\u0275text(5, "Menus and Pricing");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 13);
    \u0275\u0275text(7, " View and Edit Menus and Pricing ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "a", 9)(9, "div", 10);
    \u0275\u0275element(10, "div", 11);
    \u0275\u0275elementStart(11, "span", 12);
    \u0275\u0275text(12, "Today's Orders");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 13);
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
    this.bulk_actions = settingSignal("bulk_actions", false);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringComponent, selectors: [["", "app-catering", ""]], decls: 11, vars: 2, consts: [[1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "relative", "z-10"], [1, "flex", "h-1/2", "flex-1", "flex-col", "px-8"], [1, "bg-info", "mb-4", "flex", "items-center", "justify-center", "rounded-sm", "p-2", "text-sm", "text-white"], [1, "flex", "h-1/2", "w-full", "flex-1", "overflow-auto"], [1, "flex-1", 3, "bulk_actions"], [1, "flex-1"], [1, "flex", "flex-1", "flex-wrap", "items-center", "justify-center"], ["matRipple", "", 1, "bg-base-100", "flex", "flex-col", "items-center", "rounded-sm", "text-black", "shadow-sm", 3, "routerLink"], ["name", "img", 1, "relative", "flex", "w-full", "flex-1", "items-center", "justify-center", "bg-cover", "bg-center", "text-2xl", "text-white"], [1, "bg-neutral", "absolute", "inset-0", "z-0", "opacity-60"], [1, "z-10"], [1, "flex", "h-14", "w-full", "items-center", "justify-center", "p-2", "text-center", "text-sm"]], template: function CateringComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-topbar");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275element(2, "app-sidebar");
        \u0275\u0275elementStart(3, "main", 1);
        \u0275\u0275element(4, "catering-topbar", 2);
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275conditionalCreate(6, CateringComponent_Conditional_6_Template, 3, 3, "div", 4);
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275conditionalCreate(8, CateringComponent_Case_8_Template, 1, 1, "catering-order-list", 6)(9, CateringComponent_Case_9_Template, 1, 0, "catering-menu", 7)(10, CateringComponent_Case_10_Template, 15, 8, "div", 8);
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
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--%NS%base-100);\n}\na[_ngcontent-%COMP%] {\n  width: 28rem;\n  height: 16rem;\n  margin-left: 0.5rem;\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  transition: background 200ms;\n}\na[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\na[_ngcontent-%COMP%]:first-child {\n  margin: 0;\n}\n/*# sourceMappingURL=catering.component.css.map */"] });
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
                                    [bulk_actions]="bulk_actions()"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringComponent, { className: "CateringComponent", filePath: "apps/concierge/src/app/catering/catering.component.ts", lineNumber: 139 });
})();

// apps/concierge/src/app/catering/catering.routes.ts
var ROUTES = [
  { path: "", component: CateringComponent, title: "Catering" },
  { path: ":view", component: CateringComponent, title: "Catering" }
];
export {
  ROUTES
};
//# debugId=a55a9021-48a3-53a2-938a-e800df9462bd
//# sourceMappingURL=catering.routes-R7MMQZUL.js.map
