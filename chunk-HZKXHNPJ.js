import {
  AsyncHandler,
  IconComponent,
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  OrganisationService,
  SettingsService,
  getUnixTime,
  isAfter,
  isBefore,
  queryAssetCategories,
  queryAssets,
  queryBookings,
  queryCalendarAvailability,
  queryCalendars,
  queryGroupAvailability,
  querySpaceFreeBusy,
  setHours,
  stringToMinutes,
  toQueryString
} from "./chunk-C7WVCQQJ.js";
import {
  Component,
  DatePipe,
  EventEmitter,
  Injectable,
  Injector,
  MatRipple,
  MatRippleModule,
  Output,
  Pipe,
  Rl,
  TranslatePipe,
  Vu,
  addDays,
  addHours,
  addMinutes,
  computed,
  debounced,
  effect,
  endOfDay,
  first,
  format,
  inject,
  localToTimezone,
  setClassMetadata,
  signal,
  startOfDay,
  startOfMinute,
  toDate,
  unique,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-BNHBVNSC.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/date-fns/endOfMinute.js
function endOfMinute(date, options) {
  const _date = toDate(date, options?.in);
  _date.setSeconds(59, 999);
  return _date;
}

// node_modules/date-fns/subHours.js
function subHours(date, amount, options) {
  return addHours(date, -amount, options);
}

// libs/assets/src/lib/asset-group.pipe.ts
var ASSET_GROUP_LIST = [];
var EMPTY_ASSET_GROUP = {};
function updateAssetGroupList(assetgroup_list) {
  for (const assetgroup of assetgroup_list) {
    if (!ASSET_GROUP_LIST.find(({ id }) => id === assetgroup.id)) {
      ASSET_GROUP_LIST.push(assetgroup);
    }
  }
}
var AssetGroupPipe = class _AssetGroupPipe {
  /**
   * Get details of the assetgroup with the given ID
   * @param assetgroup_id ID or Email of the assetgroup
   */
  async transform(group_id) {
    if (!group_id)
      return EMPTY_ASSET_GROUP;
    let asset_group = ASSET_GROUP_LIST.find(({ id }) => id === group_id);
    if (asset_group)
      return asset_group;
    const group = await Rl(group_id).catch(() => null);
    if (group) {
      asset_group = __spreadValues({}, group);
      ASSET_GROUP_LIST.push(asset_group);
      return asset_group;
    }
    return EMPTY_ASSET_GROUP;
  }
  updateAssetGroupList(assetgroup_list) {
    updateAssetGroupList(assetgroup_list);
  }
  static {
    this.\u0275fac = function AssetGroupPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssetGroupPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "assetgroup", type: _AssetGroupPipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetGroupPipe, [{
    type: Pipe,
    args: [{
      name: "assetgroup"
    }]
  }], null, null);
})();

// libs/assets/src/lib/asset.utilities.ts
var RULE_REQUESTS = {};
function getAssetRulesForZone(zone_id, fresh = false) {
  if (!zone_id)
    return Promise.resolve([]);
  if (!RULE_REQUESTS[zone_id] || fresh)
    RULE_REQUESTS[zone_id] = Vu(zone_id, "assets_config").then((_) => _.details instanceof Array ? _.details : []).catch(() => []);
  return RULE_REQUESTS[zone_id];
}
function assetAvailable(item, rules, event) {
  const current_date = Date.now();
  const event_date = new Date(event.date);
  const isRuleMatch = (rule) => item.name === rule.name || item.category?.name.includes(rule.name) || event.resources?.some((resource) => resource.zones?.includes(rule.name)) || event.space?.zones?.includes(rule.name) || rule.name === "*";
  const countMatches = (rule) => rule.rules.reduce((matches, condition) => {
    switch (condition[0]) {
      case "is_before":
        return matches + (isBefore(current_date, subHours(event_date, condition[1])) ? 1 : 0);
      case "within_hours":
        return matches + (isAfter(current_date, subHours(event_date, condition[1])) ? 1 : 0);
      case "after_hour":
        return matches + (isAfter(event_date, setHours(event_date, condition[1])) ? 1 : 0);
      case "before_hour":
        return matches + (isBefore(event_date, setHours(event_date, condition[1])) ? 1 : 0);
      case "min_length":
        return matches + (event.duration >= stringToMinutes(condition[1]) ? 1 : 0);
      case "max_length":
        return matches + (event.duration <= stringToMinutes(condition[1]) ? 1 : 0);
      case "visitor_type":
        return matches + (event.ext("visitor_type") === condition[1] ? 1 : 0);
      default:
        return matches + 1;
    }
  }, 0);
  for (const rule of rules) {
    if (isRuleMatch(rule)) {
      if (countMatches(rule) < rule.rules.length) {
        return false;
      }
    }
  }
  return true;
}

// libs/assets/src/lib/asset-state.service.ts
function assetOptionsMatch(a, b) {
  const keys = Array.from(/* @__PURE__ */ new Set([
    ...Object.keys(a),
    ...Object.keys(b)
  ]));
  return keys.every((key) => Object.is(a[key], b[key]));
}
var AssetStateService = class _AssetStateService {
  constructor() {
    this._org = inject(OrganisationService);
    this._settings_service = inject(SettingsService);
    this._injector = inject(Injector);
    this._options = signal(
      { date: Date.now() },
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._search = signal(
      "",
      ...ngDevMode ? [{ debugName: "_search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._category = signal(
      [],
      ...ngDevMode ? [{ debugName: "_category" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._rules = signal(
      [],
      ...ngDevMode ? [{ debugName: "_rules" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._asset_list = signal(
      null,
      ...ngDevMode ? [{ debugName: "_asset_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._asset_bookings = signal(
      [],
      ...ngDevMode ? [{ debugName: "_asset_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._available_groups = signal(
      [],
      ...ngDevMode ? [{ debugName: "_available_groups" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._category_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "_category_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._settings = signal(
      {},
      ...ngDevMode ? [{ debugName: "_settings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._network_requested = false;
    this._network_consumed = signal(
      false,
      ...ngDevMode ? [{ debugName: "_network_consumed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._asset_list_request = null;
    this._category_list_request = null;
    this._booking_requests = /* @__PURE__ */ new Map();
    this._available_group_requests = /* @__PURE__ */ new Map();
    this._settings_requests = /* @__PURE__ */ new Map();
    this._options_debounced = debounced(this._options, 300, {
      injector: this._injector,
      equal: assetOptionsMatch
    });
    this._requests_ready = computed(
      () => {
        const building = this._org.active_building();
        const overrides = this._settings_service.overrides();
        return this._network_consumed() && this._assetsEnabled() && this._org.initialised() && !!building?.id && overrides.length >= (this._org.settings?.length || 0) + 2;
      },
      ...ngDevMode ? [{ debugName: "_requests_ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search = this._search.asReadonly();
    this.category = this._category.asReadonly();
    this.options = this._options.asReadonly();
    this.loading = this._loading.asReadonly();
    this.rules = computed(
      () => {
        this._requestNetwork();
        return this._rules();
      },
      ...ngDevMode ? [{ debugName: "rules" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.asset_list = computed(
      () => {
        this._requestNetwork();
        return this._asset_list();
      },
      ...ngDevMode ? [{ debugName: "asset_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.asset_bookings = computed(
      () => {
        this._requestNetwork();
        return this._asset_bookings();
      },
      ...ngDevMode ? [{ debugName: "asset_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.available_groups = computed(
      () => {
        this._requestNetwork();
        return this._available_groups();
      },
      ...ngDevMode ? [{ debugName: "available_groups" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.category_list = computed(
      () => {
        this._requestNetwork();
        return this._category_list();
      },
      ...ngDevMode ? [{ debugName: "category_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.visible_category_ids = computed(
      () => this._category_list().map((item) => item.id),
      ...ngDevMode ? [{ debugName: "visible_category_ids" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_assets = computed(
      () => {
        this._requestNetwork();
        const search = this._search().toLowerCase();
        const category = this._category();
        const visible_categories = this.visible_category_ids();
        const assets = this._available_groups();
        const rules = this._rules();
        return assets.filter((_) => _.assets?.length && visible_categories.includes(_.category_id) && (!category.length || category.includes(_.category_id)) && (_.name.toLowerCase().includes(search) || _.description.toLowerCase().includes(search)) && assetAvailable(_, rules, this._options()));
      },
      ...ngDevMode ? [{ debugName: "filtered_assets" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.settings = computed(
      () => {
        this._requestNetwork();
        return this._settings();
      },
      ...ngDevMode ? [{ debugName: "settings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disabled_rooms = computed(
      () => {
        this._requestNetwork();
        return this._settings().disabled_rooms || [];
      },
      ...ngDevMode ? [{ debugName: "disabled_rooms" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const options = this._options_debounced.value();
      const bld = this._org.active_building();
      if (!this._requests_ready() || !bld?.id || !options)
        return;
      untracked(() => {
        this._loadRules(options, bld.id);
        this._loadAssetList();
        this._loadAssetBookings(options);
        this._loadAvailableGroups(options, bld.id);
        this._loadSettings(bld.id);
        this._loadCategories();
      });
    });
    effect(() => {
      const visible_ids = this.visible_category_ids();
      const selected_categories = this._category();
      const valid_categories = selected_categories.filter((item) => visible_ids.includes(item));
      if (valid_categories.length !== selected_categories.length) {
        this._category.set(valid_categories);
      }
    });
  }
  _requestNetwork() {
    if (this._network_requested)
      return;
    this._network_requested = true;
    queueMicrotask(() => this._network_consumed.set(true));
  }
  _assetsEnabled() {
    return this._settings_service.get("app.has_assets") !== false;
  }
  setSearch(value) {
    this._search.set(`${value}`);
  }
  toggleCategory(value) {
    const categories = untracked(this._category);
    if (categories.includes(value)) {
      this._category.set(categories.filter((_) => _ !== value));
    } else {
      this._category.set([...categories, value]);
    }
  }
  getOptions() {
    return this._options();
  }
  setOptions(options) {
    const current = untracked(this._options);
    const next = __spreadValues(__spreadValues({}, current), options);
    if (assetOptionsMatch(current, next)) {
      return;
    }
    this._options.set(next);
  }
  _appendLoading(value) {
    this._loading.set(this._loading() + value);
  }
  _removeLoading(value) {
    this._loading.set(this._loading().split(value).join(""));
  }
  async _loadRules(options, building_id) {
    const zone_id = options.zone || options.zone_id || building_id || "";
    this._appendLoading("[Rules]");
    this._rules.set(await getAssetRulesForZone(zone_id));
    this._removeLoading("[Rules]");
  }
  async _loadAssetList() {
    if (this._asset_list_request)
      return this._asset_list_request;
    this._appendLoading("[Assets]");
    this._asset_list_request = queryAssets().then((list) => {
      this._asset_list.set(list);
      return list;
    }).finally(() => {
      this._asset_list_request = null;
      this._removeLoading("[Assets]");
    });
    return this._asset_list_request;
  }
  async _loadAssetBookings({ zone, zone_id, date }) {
    const query = {
      zones: zone || zone_id || "",
      period_start: getUnixTime(startOfDay(date)),
      period_end: getUnixTime(endOfDay(date)),
      type: "asset-request"
    };
    const key = JSON.stringify(query);
    const existing = this._booking_requests.get(key);
    this._appendLoading("[Bookings]");
    const request = existing || queryBookings(query);
    if (!existing)
      this._booking_requests.set(key, request);
    this._asset_bookings.set(await request);
    request.finally(() => this._booking_requests.delete(key));
    this._removeLoading("[Bookings]");
  }
  async _loadAvailableGroups({ zone, zone_id, date, duration, ignore }, building_id) {
    const query = {
      zones: zone || zone_id || building_id || "",
      period_start: getUnixTime(startOfMinute(date)),
      period_end: getUnixTime(endOfMinute(addMinutes(date, duration || 30))),
      type: "asset-request",
      rejected: false
    };
    const key = JSON.stringify({ query, ignore });
    const existing = this._available_group_requests.get(key);
    const request = existing || queryGroupAvailability(query, ignore).catch((e) => {
      console.error(e);
      return [];
    });
    if (!existing)
      this._available_group_requests.set(key, request);
    const list = await request;
    request.finally(() => this._available_group_requests.delete(key));
    const sorted_list = list.sort((a, b) => a.name.localeCompare(b.name));
    updateAssetGroupList(sorted_list);
    this._available_groups.set(sorted_list);
  }
  async _loadCategories() {
    if (this._category_list_request)
      return this._category_list_request;
    this._category_list_request = queryAssetCategories().then((categories) => {
      this._category_list.set(categories.data.sort((a, b) => a.name.localeCompare(b.name)).filter((c) => !c.hidden));
      return categories;
    }).finally(() => this._category_list_request = null);
    return this._category_list_request;
  }
  async _loadSettings(building_id) {
    const existing = this._settings_requests.get(building_id);
    const request = existing || Vu(building_id, "assets-settings").then((metadata) => metadata.details || {}).catch(() => ({}));
    if (!existing)
      this._settings_requests.set(building_id, request);
    this._settings.set(await request);
    request.finally(() => this._settings_requests.delete(building_id));
  }
  static {
    this.\u0275fac = function AssetStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssetStateService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AssetStateService, factory: _AssetStateService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/components/src/lib/recurring-clash-modal.component.ts
var _forTrack0 = ($index, $item) => $item.booking_start;
function RecurringClashModalComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 10)(1, "td", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 15);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const clash_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, clash_r1.booking_start * 1e3, "EEE, MMM d, yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(6, 6, clash_r1.booking_start * 1e3, "h:mm a"), " - ", \u0275\u0275pipeBind2(7, 9, clash_r1.booking_end * 1e3, "h:mm a"), " ");
  }
}
async function openRecurringClashModal(data, dialog) {
  const ref = dialog.open(RecurringClashModalComponent, {
    data
  });
  return Promise.race([
    ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
    ref.afterClosed().toPromise()
  ]);
}
var RecurringClashModalComponent = class _RecurringClashModalComponent {
  constructor() {
    this.event = new EventEmitter();
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
  }
  get clashes() {
    return this._data.clashes || [];
  }
  onConfirm() {
    this.event.emit({ reason: "done" });
    this._dialog_ref.close({ reason: "done" });
  }
  static {
    this.\u0275fac = function RecurringClashModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RecurringClashModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecurringClashModalComponent, selectors: [["placeos-recurring-clash-modal"]], outputs: { event: "event" }, decls: 35, vars: 21, consts: [[1, "relative"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "h-14", "w-[calc(100%-1rem)]", "min-w-[20rem]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], [1, "flex", "max-h-[60vh]", "w-full", "max-w-[calc(100vw-2rem)]", "flex-col", "items-center", "space-y-4", "overflow-auto", "px-4", "py-2", "sm:max-w-md"], [1, "border-base-200", "bg-warning", "text-warning-content", "flex", "items-center", "space-x-2", "rounded-xl", "border", "p-2", "shadow-sm"], [1, "text-5xl"], [1, "border-base-300", "bg-base-100", "max-h-48", "w-full", "overflow-auto", "rounded-sm", "border"], [1, "w-full", "text-sm"], [1, "bg-base-200", "sticky", "top-0"], [1, "p-2", "text-left"], [1, "border-base-300", "border-t"], [1, "text-base-content/70", "text-center", "text-xs"], [1, "bg-base-200", "sticky", "bottom-0", "m-2", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "border-none", "p-2"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse", "bg-base-100", "flex-1"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click"], [1, "p-2"]], template: function RecurringClashModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "main", 3)(6, "div", 4)(7, "icon", 5);
        \u0275\u0275text(8, "warning");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p");
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 6)(13, "table", 7)(14, "thead", 8)(15, "tr")(16, "th", 9);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "th", 9);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "tbody");
        \u0275\u0275repeaterCreate(23, RecurringClashModalComponent_For_24_Template, 8, 12, "tr", 10, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "p", 11);
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "footer", 12)(29, "button", 13);
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "button", 14);
        \u0275\u0275listener("click", function RecurringClashModalComponent_Template_button_click_32_listener() {
          return ctx.onConfirm();
        });
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "BOOKINGS.RECURRING_CLASHES_TITLE"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 9, "BOOKINGS.RECURRING_CLASHES_MSG"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 11, "FORM.DATE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 13, "COMMON.TIME"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.clashes);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 15, "BOOKINGS.RECURRING_CLASHES_CONFIRM"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 17, "COMMON.CANCEL"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 19, "BOOKINGS.CONTINUE_BOOKING"), " ");
      }
    }, dependencies: [
      IconComponent,
      MatDialogModule,
      MatDialogClose,
      MatRippleModule,
      MatRipple,
      TranslatePipe,
      DatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecurringClashModalComponent, [{
    type: Component,
    args: [{ selector: "placeos-recurring-clash-modal", template: `
        <div class="relative">
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] min-w-[20rem] rounded-sm border-none p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    {{ 'BOOKINGS.RECURRING_CLASHES_TITLE' | translate }}
                </h2>
            </header>
            <main
                class="flex max-h-[60vh] w-full max-w-[calc(100vw-2rem)] flex-col items-center space-y-4 overflow-auto px-4 py-2 sm:max-w-md"
            >
                <div
                    class="border-base-200 bg-warning text-warning-content flex items-center space-x-2 rounded-xl border p-2 shadow-sm"
                >
                    <icon class="text-5xl">warning</icon>
                    <p>
                        {{ 'BOOKINGS.RECURRING_CLASHES_MSG' | translate }}
                    </p>
                </div>
                <div
                    class="border-base-300 bg-base-100 max-h-48 w-full overflow-auto rounded-sm border"
                >
                    <table class="w-full text-sm">
                        <thead class="bg-base-200 sticky top-0">
                            <tr>
                                <th class="p-2 text-left">
                                    {{ 'FORM.DATE' | translate }}
                                </th>
                                <th class="p-2 text-left">
                                    {{ 'COMMON.TIME' | translate }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            @for (clash of clashes; track clash.booking_start) {
                                <tr class="border-base-300 border-t">
                                    <td class="p-2">
                                        {{
                                            clash.booking_start * 1000
                                                | date: 'EEE, MMM d, yyyy'
                                        }}
                                    </td>
                                    <td class="p-2">
                                        {{
                                            clash.booking_start * 1000
                                                | date: 'h:mm a'
                                        }}
                                        -
                                        {{
                                            clash.booking_end * 1000
                                                | date: 'h:mm a'
                                        }}
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
                <p class="text-base-content/70 text-center text-xs">
                    {{ 'BOOKINGS.RECURRING_CLASHES_CONFIRM' | translate }}
                </p>
            </main>
            <footer
                class="bg-base-200 sticky bottom-0 m-2 flex items-center justify-center space-x-2 rounded-sm border-none p-2"
            >
                <button
                    btn
                    matRipple
                    class="inverse bg-base-100 flex-1"
                    mat-dialog-close
                >
                    {{ 'COMMON.CANCEL' | translate }}
                </button>
                <button btn matRipple class="flex-1" (click)="onConfirm()">
                    {{ 'BOOKINGS.CONTINUE_BOOKING' | translate }}
                </button>
            </footer>
        </div>
    `, imports: [
      IconComponent,
      MatDialogModule,
      MatRippleModule,
      TranslatePipe,
      DatePipe
    ] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecurringClashModalComponent, { className: "RecurringClashModalComponent", filePath: "libs/components/src/lib/recurring-clash-modal.component.ts", lineNumber: 128 });
})();

// libs/events/src/lib/calendar.service.ts
var CalendarService = class _CalendarService extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._calendars = signal(
      [],
      ...ngDevMode ? [{ debugName: "_calendars" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._calendars_request = null;
    this.calendar_list = this._calendars.asReadonly();
    this.query = () => queryCalendars();
    this.freeBusy = (q) => querySpaceFreeBusy(q, this._org);
    this.availability = (q) => queryCalendarAvailability(q);
    this._waitForOrg();
  }
  async init() {
    if (this._settings.get("app.events.use_bookings"))
      return;
    this._initialised.next(true);
  }
  get calendars() {
    return this._calendars();
  }
  /** Get Free busy for the selected day
   * @param calendars User calendar
   * @param date Selected day
   */
  getFreeBusyDate(date, calendars) {
    return querySpaceFreeBusy({
      period_start: getUnixTime(startOfDay(date)),
      period_end: getUnixTime(endOfDay(date)),
      calendars
    }, this._org);
  }
  /** Check rooms availability */
  async checkSpacesAvailability(system_ids, period_start, period_end, old_booking) {
    const result = await queryCalendarAvailability({
      period_start,
      period_end,
      system_ids: system_ids.join(",")
    });
    const start = new Date(old_booking?.date).valueOf();
    const end = addMinutes(start, old_booking?.duration).valueOf();
    const available = result.every((i) => {
      const availability = i.availability;
      if (old_booking && i.id === old_booking.system?.email) {
        const index = availability.findIndex((block) => {
          return block.date >= start && addMinutes(block.date, block.duration).valueOf() <= end;
        });
        if (index !== -1) {
          availability.splice(index, 1);
        }
      }
      return !availability.length;
    });
    return !!available;
  }
  async loadCalendars() {
    if (this._calendars().length)
      return;
    this._calendars_request = this._calendars_request || queryCalendars().then((list) => this._calendars.set(list)).finally(() => this._calendars_request = null);
    await this._calendars_request;
  }
  _waitForOrg() {
    const check = () => {
      if (this._org.initialised())
        return this.init();
      this.timeout("init", check, 100);
    };
    check();
  }
  static {
    this.\u0275fac = function CalendarService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CalendarService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CalendarService, factory: _CalendarService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/events/src/lib/calendar-links.ts
function formatUTC(date) {
  const utc_date = localToTimezone(date, "UTC");
  return `${format(utc_date, "yyyyMMdd")}T${format(utc_date, "HHmmss")}Z`;
}
function formatAllDay(date) {
  return `${format(date, "yyyyMMdd")}`;
}
function escapeText(text) {
  return (text || "").replace(/\\|;|,|\n/g, (match) => {
    switch (match) {
      case "\\":
        return "\\\\";
      case ";":
        return "\\;";
      case ",":
        return "\\,";
      case "\n":
        return "\\n";
      default:
        return match;
    }
  });
}
function generateCalendarFileLink(event) {
  if (!event)
    return "data:text/calendar;charset=utf8,";
  const chunks = [];
  const description = escapeText(`${event.body || ""}${event.id ? "\n\n[ID|" + event.id + "]" : ""}`);
  const location = escapeText(`${event.location}`);
  chunks.push(["BEGIN", "VCALENDAR"]);
  chunks.push(["VERSION", "2.0"]);
  chunks.push(["BEGIN", "VEVENT"]);
  chunks.push(["UID", `${event.id || "uid-" + Date.now()}`]);
  chunks.push(["DTSTAMP", formatUTC(/* @__PURE__ */ new Date())]);
  if (event.meeting_url) {
    chunks.push(["URL", `${event.meeting_url}`]);
  }
  if (event.all_day) {
    chunks.push(["DTSTART;VALUE=DATE", formatAllDay(event.date)]);
    chunks.push(["DTEND;VALUE=DATE", formatAllDay(addDays(event.date, 1))]);
  } else {
    chunks.push(["DTSTART", formatUTC(event.date)]);
    chunks.push([
      "DTEND",
      formatUTC(addMinutes(event.date, event.duration || 60))
    ]);
  }
  chunks.push(["SUMMARY", escapeText(event.title)]);
  chunks.push(["DESCRIPTION", description]);
  chunks.push(["LOCATION", location]);
  const hostEmail = event.host || event.user_email || `no-reply@place.tech`;
  const hostName = event.organiser?.name || hostEmail.split("@")[0] || "Staff";
  chunks.push([
    "ORGANIZER",
    `CN=${escapeText(hostName)}:mailto:${hostEmail}`
  ]);
  chunks.push(["END", "VEVENT"]);
  chunks.push(["END", "VCALENDAR"]);
  const content = chunks.map(([key, value]) => `${key}:${value}`).join("\r\n");
  const url_data = encodeURIComponent(content);
  return `data:text/calendar;charset=utf8,${url_data}`;
}
function generateGoogleCalendarLink(event) {
  const fmt = event.all_day ? formatAllDay : formatUTC;
  const details = {
    action: "TEMPLATE",
    text: event.title,
    details: `${event.body || ""}${event.id ? "\n\n[ID|" + event.id + "]" : ""}`,
    location: event.location,
    trp: false,
    dates: `${fmt(event.date)}/${fmt(addMinutes(event.date, event.duration ?? 60))}`
  };
  const emails = (event.attendees || []).map((_) => _.email || _);
  const resources = ((event.resources?.length ? event.resources : null) || [event.system]).map((_) => _?.email || _);
  if (emails.length || resources.length)
    details.add = unique([...emails, ...resources]).join();
  return `https://calendar.google.com/calendar/render?${toQueryString(details)}`;
}
function dateToISO(date) {
  return `${format(date, "yyyy-MM-dd")}T${format(date, "HH:mm:ss")}`;
}
function generateMicrosoftCalendarLink(event, type = "office", status = "free") {
  if (!event.date)
    event.date = Date.now();
  const data = {
    // path: '/calendar/deeplink/compose',
    // rru: 'addevent',
    startdt: dateToISO(event.date),
    enddt: dateToISO(addMinutes(event.date, event.duration ?? 60)),
    subject: event.title,
    body: `${event.body || ""}${event.id ? "\n\n\n[ID|" + event.id + "]" : ""}`,
    location: event.location,
    allday: event.all_day ?? false
    // availability: status,
    // freebusy: status,
  };
  if (event.all_day)
    delete data.enddt;
  const emails = (event.attendees || []).map((_) => _.email || _);
  const resources = ((event.resources?.length ? event.resources : null) || [event.system]).map((_) => _?.email || _);
  if (emails.length || resources.length)
    data.to = unique([...emails, ...resources]).filter((_) => !!_).join(",");
  return type === "office" ? `https://outlook.office.com/calendar/deeplink/compose?${toQueryString(data)}` : `https://outlook.live.com/calendar/deeplink/compose?${toQueryString(data)}`;
}

export {
  AssetStateService,
  openRecurringClashModal,
  CalendarService,
  generateCalendarFileLink,
  generateGoogleCalendarLink,
  generateMicrosoftCalendarLink
};
//# debugId=92ff6265-3e1c-5281-a20e-69ac8aad4fda
//# sourceMappingURL=chunk-HZKXHNPJ.js.map
