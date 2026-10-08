import {
  $i,
  AsyncHandler,
  Ce,
  Cn,
  Cu,
  Et,
  Gp,
  HotkeysService,
  J,
  LocaleService,
  Mi,
  Mt,
  Un,
  Xr,
  Yr,
  _c,
  _s,
  ac,
  addDays,
  addHours,
  addMinutes,
  bi,
  capitalizeFirstLetter,
  ci,
  constructFrom,
  dh,
  differenceInMinutes,
  en,
  endOfDay,
  endOfDayInTimezone,
  et,
  firstTruthyValueFrom,
  format,
  getDefaultOptions,
  getItemWithKeys,
  hc,
  i18n,
  io,
  isSameDay,
  jt,
  lazySnackbar,
  log,
  normalizeDates,
  notifyError,
  notifyInfo,
  notifySuccess,
  randomInt,
  randomString,
  removeEmptyFields,
  ro,
  roundToNearestMinutes,
  scoped_log,
  set,
  setAppName,
  setNotifyOutlet,
  setTranslationService,
  sh,
  so,
  startOfDay,
  startOfDayInTimezone,
  startOfMinute,
  th,
  to,
  toDate,
  unique,
  withTimeout
} from "./chunk-KY5ZERL4.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-7NTKYWPJ.js";
import {
  MatRipple,
  MatRippleModule,
  _StructuralStylesLoader
} from "./chunk-ACQL357U.js";
import {
  BidiModule,
  ENTER,
  SPACE,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _VisuallyHiddenLoader,
  _animationsDisabled,
  hasModifierKey
} from "./chunk-3U42GP4M.js";
import {
  ApplicationRef,
  BehaviorSubject,
  ChangeDetectorRef,
  Component,
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  Host,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  LOCALE_ID,
  NEVER,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Output,
  Renderer2,
  RuntimeError,
  Self,
  Service,
  SkipSelf,
  Subject,
  Subscription,
  Title,
  Version,
  ViewChild,
  ViewEncapsulation,
  afterNextRender,
  booleanAttribute,
  catchError,
  combineLatest,
  computed,
  effect,
  filter,
  firstValueFrom,
  forkJoin,
  formatRuntimeError,
  forwardRef,
  from,
  getDOM,
  inject,
  isPromise,
  isSignal,
  isSubscribable,
  makeEnvironmentProviders,
  map,
  of,
  provideAppInitializer,
  retry,
  setClassMetadata,
  signal,
  switchMap,
  take,
  timer,
  untracked,
  ɵɵControlFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefineService,
  ɵɵdirectiveInject,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-NTIDS2RH.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// libs/common/src/lib/settings.ts
var general = {
  banner: {
    id: "2",
    type: "info",
    content: ``
  },
  copyright: "PlaceOS",
  position: "right"
};
var help = {
  tiles: [
    {
      name: "About PlaceOS",
      link: "https://place.technology/resources",
      icon: {
        type: "icon",
        class: "material-symbols-rounded",
        content: "dns"
      },
      background: "https://static1.squarespace.com/static/52142586e4b0c09536a144ad/5c8ed203a4222fa1927bbab3/5cb7cba66e9a7f63584b4d39/1555549341622/too-many-buttons.jpg?format=2500w"
    },
    {
      name: "General Enquiries",
      link: "mailto:equiries@place.technology?subject=Staff%20App%20Demo",
      icon: {
        type: "icon",
        class: "material-symbols-rounded",
        content: "mail"
      },
      background: "assets/img/it-banner.jpg"
    },
    {
      name: "Contact PlaceOS",
      link: "https://place.technology/contact-1",
      icon: {
        type: "icon",
        class: "material-symbols-rounded",
        content: "call"
      },
      background: "https://images.squarespace-cdn.com/content/v1/52142586e4b0c09536a144ad/1569984759306-M6ZOKD64OG009U68MYUL/ke17ZwdGBToddI8pDm48kCX-V5vw-8h9IBXN10-_8XN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0p4Wyba38KfG317vYluk45_zZdtnDCZTLKcP2mivxmYi50xvY5saIGKMgOza9mH4XA/image-asset.jpeg?format=2500w"
    },
    {
      name: "About Us",
      link: "https://place.technology/",
      icon: {
        type: "icon",
        class: "material-symbols-rounded",
        content: "business"
      },
      background: "https://images.squarespace-cdn.com/content/v1/52142586e4b0c09536a144ad/1569985184499-QF839PTJ2EV30KIZF59X/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg?format=2500w"
    }
  ],
  columns: 2
};
var events = {
  multiple_spaces: false,
  desk_start: 9,
  can_book_for_others: false,
  has_catering: true
};
var space_display = {
  show_images: false
};
var directory = {
  show_avatars: true,
  min_search_length: 3
};
var schedule = {
  legend: [
    { name: "Accepted", color: "#21A453" },
    { name: "Pending", color: "#ffbf1f" },
    { name: "Rejected", color: "#f44336" }
  ]
};
var explore = {
  colors: {
    "space-free": "#43a047",
    "space-pending": "#ffb300",
    "space-busy": "#e53935",
    "space-not-bookable": "#ccc",
    "space-unknown": "#000",
    // 'desk-available': '#43a047',
    // 'desk-available-stroke': '#1b5e20',
    // 'desk-unavailable': '#e53935',
    // 'desk-unavailable-stroke': '#b71c1c',
    // 'desk-reserved': '#ffb300',
    // 'desk-reserved-stroke': '#ff6f00',
    // 'desk-not-bookable': '#fff',
    // 'desk-not-bookable-stroke': '#ccc',
    "zone-low": "#43a047",
    "zone-medium": "#ffb300",
    "zone-high": "#e53935"
  },
  can_select_building: true,
  show_legend_group_names: true,
  legend: {
    Spaces: [
      { key: "space-free", name: "Space Available" },
      { key: "space-pending", name: "Space Pending" },
      { key: "space-busy", name: "Space in Use" },
      { key: "space-not-bookable", name: "Space not Bookable" },
      { key: "space-unknown", name: "Unknown" }
    ]
  }
};
var app = {
  name: "Workplace",
  title: "Workplace Application",
  description: "PlaceOS Workplace UI written with Angular Framework",
  short_name: "WorkMate Outlook",
  logo_light: "assets/logo-light.svg",
  logo_dark: "assets/logo-dark.svg",
  features: ["spaces", "desks", "explore", "parking", "help", "schedule"],
  can_deliver: true,
  general,
  help,
  events,
  space_display,
  directory,
  explore,
  desks: {
    use_assets: false,
    can_book_for_others: true,
    allow_groups: true,
    auto_allocation: false
  },
  analytics: {
    enabled: true,
    tracking_id: ""
  },
  hide_contacts: false,
  schedule,
  departments: {
    user: { level: "bld-01_lvl-10", centered_at: "table-10.008" }
  }
};
var DEFAULT_SETTINGS = {
  debug: true,
  composer: {
    domain: "",
    route: "/staff",
    protocol: "",
    port: "",
    use_domain: false,
    local_login: false
  },
  app
};

// node_modules/date-fns/addMonths.js
function addMonths(date, amount, options) {
  const _date = toDate(date, options?.in);
  if (isNaN(amount)) return constructFrom(options?.in || date, NaN);
  if (!amount) {
    return _date;
  }
  const dayOfMonth = _date.getDate();
  const endOfDesiredMonth = constructFrom(options?.in || date, _date.getTime());
  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth;
  } else {
    _date.setFullYear(
      endOfDesiredMonth.getFullYear(),
      endOfDesiredMonth.getMonth(),
      dayOfMonth
    );
    return _date;
  }
}

// node_modules/date-fns/add.js
function add(date, duration, options) {
  const {
    years = 0,
    months = 0,
    weeks = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0
  } = duration;
  const _date = toDate(date, options?.in);
  const dateWithMonths = months || years ? addMonths(_date, months + years * 12) : _date;
  const dateWithDays = days || weeks ? addDays(dateWithMonths, days + weeks * 7) : dateWithMonths;
  const minutesToAdd = minutes + hours * 60;
  const secondsToAdd = seconds + minutesToAdd * 60;
  const msToAdd = secondsToAdd * 1e3;
  return constructFrom(options?.in || date, +dateWithDays + msToAdd);
}

// node_modules/date-fns/addWeeks.js
function addWeeks(date, amount, options) {
  return addDays(date, amount * 7, options);
}

// node_modules/date-fns/addYears.js
function addYears(date, amount, options) {
  return addMonths(date, amount * 12, options);
}

// node_modules/date-fns/differenceInCalendarMonths.js
function differenceInCalendarMonths(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
  const monthsDiff = laterDate_.getMonth() - earlierDate_.getMonth();
  return yearsDiff * 12 + monthsDiff;
}

// node_modules/date-fns/endOfMonth.js
function endOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  const month = _date.getMonth();
  _date.setFullYear(_date.getFullYear(), month + 1, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// node_modules/date-fns/endOfWeek.js
function endOfWeek(date, options) {
  const defaultOptions = getDefaultOptions();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  const _date = toDate(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  _date.setDate(_date.getDate() + diff);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// node_modules/date-fns/getUnixTime.js
function getUnixTime(date) {
  return Math.trunc(+toDate(date) / 1e3);
}

// node_modules/date-fns/isAfter.js
function isAfter(date, dateToCompare) {
  return +toDate(date) > +toDate(dateToCompare);
}

// node_modules/date-fns/isBefore.js
function isBefore(date, dateToCompare) {
  return +toDate(date) < +toDate(dateToCompare);
}

// libs/common/src/lib/types/asset-request.class.ts
function deliverAtTime(request) {
  let date = request.event?.date || request._time;
  if (request.deliver_time) {
    date = set(date, {
      hours: Math.floor(request.deliver_time),
      minutes: request.deliver_time % 1 * 60
    }).valueOf();
  }
  if (request.deliver_day_offset > 0 || request.event?.all_day) {
    date = addDays(startOfDay(date), request.deliver_day_offset).valueOf();
  }
  return addMinutes(date, request.deliver_offset).valueOf();
}
var AssetRequest = class {
  get deliver_at() {
    return deliverAtTime(this);
  }
  get status() {
    return this._status;
  }
  set status(value) {
    this._status = value;
    this[`${this.event_id}_status`] = value;
  }
  constructor(data = {}) {
    this.conflict = false;
    this._changed = false;
    this._time = startOfMinute(Date.now()).valueOf();
    this.id = data.id || `order-${randomInt(9999999, 1e6)}`;
    this.event_id = data.event_id || data.parent_id || "";
    this.items = data.items || data.asset_ids?.map((_) => ({ id: _, quantity: 1 })) || [];
    this.item_count = this.items.reduce((amount, item) => amount + item.quantity, 0);
    this._status = data[`${this.event_id}_status`] || data.status || (data.extension_data || {})[`${this.event_id}_status`] || data.extension_data?.status || "in_storage";
    this.event = data.event || data || null;
    const booking = this.event?.linked_bookings?.find((_) => _.extension_data.request_id === this.id);
    this._booking = booking || data.booking || null;
    this._changed = !!data._changed || !booking;
    this.notes = data.notes || data.description || "";
    this.deliver_time = data.deliver_time || data.extension_data?.deliver_time || void 0;
    this.deliver_offset = data.deliver_offset || data.extension_data?.deliver_offset || 0;
    this.deliver_day_offset = data.deliver_day_offset || data.extension_data?.deliver_day_offset || 0;
    this.deliver_at_time = deliverAtTime(this);
    this.conflict = !!data.conflict;
    this.ref_id = `${this.deliver_at_time}|${this.items.map((_) => `${_.id}:${_.quantity}`).join("|")}`;
  }
  toJSON() {
    const blob = __spreadValues({}, this);
    delete blob.event;
    delete blob._changed;
    delete blob._status;
    delete blob._time;
    delete blob.deliver_at_time;
    delete blob.deliver_at;
    blob.items = blob.items.map((_) => ({
      id: _.id,
      category_id: _.category_id,
      quantity: _.quantity,
      name: _.name,
      item_ids: _.item_ids
    }));
    return blob;
  }
};

// libs/common/src/lib/types/catering.class.ts
function cloneOption(option = {}) {
  return {
    id: option.id || "",
    name: option.name || "",
    group: option.group || "",
    multiple: !!option.multiple,
    unit_price: option.unit_price || 0,
    active: option.active
  };
}
function deliverAtTime2(order) {
  let date = order.event?.date || order.event?.event_start * 1e3 || order._time;
  if (order.deliver_day_offset > 0 || order.event?.all_day) {
    date = addDays(startOfDay(date), order.deliver_day_offset).valueOf();
  }
  if (order.deliver_time) {
    date = set(date, {
      hours: Math.floor(order.deliver_time),
      minutes: order.deliver_time % 1 * 60
    }).valueOf();
  }
  return addMinutes(date, order.deliver_offset).valueOf();
}
var CateringItem = class {
  get option_list() {
    const active_options = this.options.filter((_) => _.active === true);
    return active_options.length ? active_options : this._option_list;
  }
  /** String list of selected option ids */
  get options_string() {
    return this.option_list.map((_) => _.id || "").sort((a, b) => a.localeCompare(b)).join(",");
  }
  get custom_id() {
    const options = this.option_list.map((_) => _.id).sort((a, b) => a.localeCompare(b)).join("+");
    return `${this.id}[${options}]${!this.in_order ? "menu" : ""}`;
  }
  constructor(data = {}) {
    this.id = data.id || "";
    this.name = data.name || data.id || "";
    this.category = data.category || "";
    this.caterer = data.caterer || "";
    this.unit_price = data.unit_price || 0;
    this.description = data.description || "";
    this.quantity = data.quantity || 0;
    this.discount_cap = data.discount_cap || 0;
    this.accept_points = !!data.accept_points;
    this.tags = [
      ...(data.tags instanceof Array ? data.tags : null) || []
    ];
    this.images = [...data.images || []];
    this.options = (data.options || []).map((_) => cloneOption(_));
    const has_options = this.options.some((_) => _.active === true);
    this._option_list = (has_options ? this.options.filter((_) => _.active === true) : (data.option_list || []).map((_) => cloneOption(_))) || [];
    this.hide_for_zones = [...data.hide_for_zones || []];
    this.unit_price_with_options = this.unit_price + this.option_list.map((i) => i.unit_price || 0).reduce((c, a) => c + a, 0);
    this.total_cost = this.unit_price_with_options * this.quantity;
    this.in_order = data.in_order ?? false;
  }
};
var CateringOrder = class {
  get deliver_at() {
    return deliverAtTime2(this);
  }
  get status() {
    return this._status;
  }
  set status(value) {
    this._status = value;
    this[`${this.event_id}_status`] = value;
  }
  constructor(data = {}) {
    this._time = startOfMinute(Date.now()).valueOf();
    this.id = data.id || `order-${randomInt(9999999, 1e6)}`;
    this.system_id = data.system_id || "";
    this.event_id = data.event_id || data.event?.id || "";
    this.caterer = data.caterer || "";
    this.items = (data.items || []).map((i) => i instanceof CateringItem ? i : new CateringItem(i));
    this.items = this.items.filter((i) => i.quantity > 0 && this.caterer === i.caterer);
    this.item_count = this.items.reduce((amount, item) => amount + item.quantity, 0);
    this.total_cost = this.items.reduce((amount, item) => amount + (item.total_cost || 0), 0);
    this.charge_code = data.charge_code || "";
    this.status = data[`${this.event_id}_status`] || data.status || "accepted";
    this.invoice_number = data.invoice_number || "";
    this.event = data.event || null;
    this.notes = data.notes || "";
    this.deliver_time = data.deliver_time || void 0;
    this.deliver_offset = data.deliver_offset || 0;
    this.deliver_day_offset = data.deliver_day_offset || 0;
    this.deliver_at_time = deliverAtTime2(this);
  }
  toJSON() {
    const obj = ci(__spreadValues({}, this), ["", null, void 0]);
    obj.status = obj._status;
    delete obj.event;
    delete obj._status;
    delete obj._time;
    return obj;
  }
};

// libs/common/src/lib/types/org.classes.ts
var Organisation = class {
  constructor(raw_data = {}) {
    this.id = raw_data.id || "";
    this.name = raw_data.name || "";
    this.description = raw_data.description || "";
    this.tags = raw_data.tags || [];
    this.count = raw_data.count || 0;
    this.children_count = raw_data.children_count || 0;
    this.capacity = raw_data.capacity || 0;
    this.bindings = raw_data.bindings || {};
    this._settings = raw_data.settings || {};
  }
  /**
   * Get a custom organisation setting
   * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
   */
  setting(key) {
    const keys = key.split(".");
    const value = getItemWithKeys(keys, this._settings);
    return value;
  }
};
var BuildingLevel = class {
  constructor(_data = {}) {
    this.settings = {};
    this.id = _data.id || "";
    this.parent_id = _data.parent_id || "";
    this.name = _data.name || "";
    this.display_name = _data.display_name || "";
    this.map_id = _data.map_id || "";
    this.capacity = _data.capacity || 0;
    this.location = _data.location || "";
    this.locations = _data.locations || [];
    this.tags = _data.tags || [];
    this.images = _data.images || [];
    this.code = _data.code || "";
    const parts = this.display_name.split(" ");
    this.number = ((parts.length >= 2 ? parts[parts.length - 1] : this.display_name[0])?.toUpperCase() || "").substring(0, 2);
  }
};
var Building = class {
  constructor(raw_data = {}) {
    this.id = raw_data.id || "";
    this.parent_id = raw_data.parent_id || "";
    this.name = raw_data.name || "";
    const settings = raw_data.settings || {};
    this.display_name = raw_data.display_name;
    this.images = this.images || [];
    const disc_info = settings.discovery_info || settings;
    this.zone_id = raw_data.zone_id || raw_data.zone;
    this.extras = (raw_data.extras || disc_info.extras || []).map((i) => ({
      id: i.extra_id || i.id,
      name: i.extra_name || i.name
    }));
    this.loan_items = (raw_data.loan_items || disc_info.loan_items || []).map((i) => ({
      id: i.extra_id || i.id,
      name: i.extra_name || i.name
    }));
    this.levels = (raw_data.levels || disc_info.levels || []).map((i) => new BuildingLevel(__spreadProps(__spreadValues({}, i), { building_id: this.id })));
    this._roles = raw_data.roles || disc_info.roles || {};
    this._lockers = raw_data.lockers || raw_data.locker_structure || disc_info.locker_structure || {};
    this._systems = raw_data.systems || disc_info.systems || {};
    this._phone_numbers = raw_data.phone_numbers || disc_info.phone_numbers || {};
    this.location = raw_data.location || disc_info.location || "0,0";
    this.room_configurations = raw_data.room_configurations || disc_info.room_configurations || [];
    this.attributes = raw_data.attributes || disc_info.attributes || [];
    const searchables = [];
    if (raw_data.neighbourhoods) {
      for (const lvl in raw_data.neighbourhoods) {
        if (lvl in raw_data.neighbourhoods) {
          const lvl_features = raw_data.neighbourhoods[lvl] || {};
          for (const feature in lvl_features) {
            if (feature in lvl_features) {
              searchables.push({
                id: lvl_features[feature],
                name: feature,
                level_id: lvl
              });
            }
          }
        }
      }
    }
    this.bindings = raw_data.bindings || {};
    this.searchables = searchables;
    this.map_id = raw_data.map_id || "";
    this.timezone = raw_data.timezone || disc_info.timezone || settings.timezone || "";
    this.catering_hours = raw_data.catering_hours || disc_info.catering_hours || settings.catering_hours || { start: 7, end: 20 };
    this.visitor_space = raw_data.visitor_space || disc_info.visitor_space || settings.visitor_space || "";
    this.holding_bay = raw_data.holding_bay || disc_info.holding_bay || settings.holding_bay || "";
    this.code = raw_data.code || disc_info.code || settings.code || "";
    this.address = raw_data.address || disc_info.address || settings.address || "";
    this.orientations = raw_data.orientations || disc_info.orientations || settings.orientations || {};
    this.booking_details = raw_data.booking_details || disc_info.booking_details || settings.booking_details || null;
    this.catering_restricted_from = raw_data.catering_restricted_from || disc_info.catering_restricted_from || settings.catering_restricted_from || -1440;
    this.currency = raw_data.currency || disc_info.currency || settings.currency || "USD";
  }
  /**
   * Get list of users with the associated role
   * @param name Role to find users for
   */
  role(name) {
    return [...this._roles[name] || []];
  }
  /**
   * Get list of the names of available user role lists
   */
  get role_names() {
    return Object.keys(this._roles).filter((i) => i in this._roles);
  }
  /** Map of the locker ID arrays */
  get lockers() {
    return __spreadValues({}, this._lockers || {});
  }
  /** Map of important system ids for the building */
  get systems() {
    return __spreadValues({}, this._systems || {});
  }
  /** Map of important phone numbers for the building */
  get phone_numbers() {
    return __spreadValues({}, this._phone_numbers || {});
  }
  /**
   * Get search map feature for the given level ID
   * @param level_id ID of level to grab features for
   */
  featuresForLevel(level_id) {
    return (this.searchables || []).filter((i) => i.level_id === level_id);
  }
};
var Region = class {
  constructor(_data) {
    this.id = _data.id || "";
    this.name = _data.name || "";
    this.display_name = _data.display_name || "";
    this.timezone = _data.timezone || "";
    this.images = _data.images || [];
    this.bindings = _data.bindings || {};
    this.address = _data.address || "";
  }
};

// libs/common/src/lib/types/space.class.ts
var Space = class {
  constructor(data = {}) {
    this.id = data.id || "";
    this.name = data.name || "";
    this.display_name = data.display_name || "";
    this.email = (data.email || "").toLowerCase();
    this.capacity = data.capacity || -1;
    this.feature_list = data.feature_list || data.features || [];
    this.bookable = !!data.bookable;
    this.zones = data.zones || [];
    this.support_url = data.support_url || "";
    this.camera_url = data.camera_url || "";
    this.camera_snapshot_urls = Array.isArray(data.camera_snapshot_urls) ? data.camera_snapshot_urls.filter(Boolean) : data.camera_snapshot_url ? [data.camera_snapshot_url] : [];
    this.camera_snapshot_url = data.camera_snapshot_url || this.camera_snapshot_urls[0] || "";
    this.room_booking_url = data.room_booking_url || "";
    this.map_id = data.map_id || "";
    this.images = data.images || [];
    this.features = data.features || [];
    this.response_status = data.response_status || "tentative";
    this.level = data.level || new BuildingLevel();
    this.availability = data.availability || [];
    this.approval = data.approval ?? false;
    this.created_at = data.created_at ?? getUnixTime(Date.now());
  }
  inUseAt(start, duration) {
    const end = start + duration * 60 * 1e3;
    return this.availability.filter((i) => i.date == start && i.date + i.duration * 60 * 1e3 == end && i.status !== "free").length > 0;
  }
};

// libs/common/src/lib/types/user.class.ts
var USER_DOMAIN = "@dev.place.tech";
function setInternalUserDomain(domain) {
  USER_DOMAIN = domain;
}
var User = class {
  constructor(data = {}) {
    this.id = data.id || data.email || `USER::${randomString(8)}`;
    this.name = data.name || "";
    this.email = data.email || "";
    this.first_name = data.first_name || data.name || "";
    this.last_name = data.last_name || "";
    this.phone = data.phone || "";
    this.organisation = data.organisation || "";
    this.notes = data.notes || "";
    this.photo = data.photo || data.image || (data.photo_upload_id ? `/api/engine/v2/uploads/${encodeURIComponent(data.photo_upload_id)}/url` : "") || "";
    this.photo_upload_id = data.photo_upload_id || "";
    this.username = data.username || "";
    this.organizer = !!data.organizer;
    this.checked_in = !!data.checked_in;
    this.required = data.required ?? true;
    this.resource = data.resource ?? false;
    this.locatable = data.locatable ?? false;
    this.response_status = data.response_status || "";
    const groups = data.groups || [];
    this.department = data.department ?? "";
    if (data.sys_admin)
      groups.push("placeos_admin");
    if (data.support)
      groups.push("placeos_support");
    if (data.department)
      groups.push(data.department);
    this.groups = unique(groups);
    this.extension_data = data.extension_data || {};
    this.extension_data.assistance_required = data.assistance_required || this.extension_data.assistance_required;
    this.is_external = !this.email?.endsWith(`${USER_DOMAIN}`);
    this.visit_expected = data.visit_expected ?? true;
    this.assistance_required = !!this.extension_data?.assistance_required;
    for (const key in data) {
      if (!(key in this))
        this.extension_data[key] = data[key];
    }
  }
};
var GuestUser = class extends User {
  constructor(data = {}) {
    super(data);
    this.preferred_beverage = data.preferred_beverage || "";
    this.accepted_terms_conditions = data.accepted_terms_conditions || false;
    this.attachments = data.extension_data?.attachments || data.attachments || [];
    this.status = data.booking?.approved ? "approved" : data.booking?.rejected ? "declined" : data.extension_data?.status || data.status || "pending";
    this.booking = data.booking;
    this.extension_data.event = data.event_metadata;
  }
};
var StaffUser = class extends User {
  get location() {
    return this.location_time(Date.now());
  }
  work_preference(datetime) {
    if (!datetime)
      datetime = Date.now();
    const date = new Date(datetime);
    const day = date.getDay();
    const date_string = format(date, "yyyy-MM-dd");
    if (this.work_overrides[date_string]?.blocks?.length) {
      for (const block of this.work_overrides[date_string].blocks) {
        const start = block.start_time;
        const end = block.end_time;
        if (start <= date.getHours() + date.getMinutes() / 60 && end >= date.getHours() + date.getMinutes() / 60) {
          return block;
        }
      }
    }
    for (const pref of this.work_preferences) {
      if (pref.day_of_week === day && pref.blocks?.length) {
        for (const block of pref.blocks) {
          if (block.start_time <= date.getHours() + date.getMinutes() / 60 && block.end_time >= date.getHours() + date.getMinutes() / 60) {
            return block;
          }
        }
      }
    }
  }
  location_time(datetime = Date.now()) {
    return this.work_preference(datetime)?.location || "ooo";
  }
  get location_name() {
    return this.location_name_time();
  }
  location_name_time(datetime = Date.now()) {
    if (!datetime)
      datetime = Date.now();
    const location2 = this.location_time(datetime);
    const in_hours = this.in_hours_time(datetime);
    if (location2.includes("w") && !in_hours) {
      return i18n("COMMON.WORK_HOURS_OUTSIDE");
    }
    switch (location2) {
      case "wfh":
        return i18n("COMMON.WORK_HOURS_HOME");
      case "wfo":
        return i18n("COMMON.WORK_HOURS_OFFICE");
      case "ooo":
        return i18n("COMMON.WORK_HOURS_OUT");
      case "aol":
        return i18n("COMMON.WORK_HOURS_LEAVE");
      case "sick":
        return i18n("COMMON.WORK_HOURS_SICK");
      default:
        return i18n("COMMON.UNKNOWN");
    }
  }
  outsideHours(datetime = Date.now()) {
    const location2 = this.location_time(datetime);
    const in_hours = this.in_hours_time(datetime);
    return location2.includes("w") && !in_hours;
  }
  get in_hours() {
    return this.in_hours_time(Date.now());
  }
  location_icon(datetime) {
    if (!datetime)
      datetime = Date.now();
    const location2 = this.location_time(datetime);
    const in_hours = this.in_hours_time(datetime);
    if (location2 === "wfh" && in_hours)
      return "home";
    if (location2 === "wfo" && in_hours)
      return "business";
    if (location2 === "sick")
      return "sick";
    return "event_busy";
  }
  in_hours_time(datetime = Date.now()) {
    const block = this.work_preference(datetime);
    return !!block;
  }
  constructor(data = {}) {
    super(data);
    this.card_number = data.card_number || "";
    this.staff_id = data.staff_id || "";
    this.is_logged_in = !!data.is_logged_in;
    this.work_preferences = data.work_preferences || [];
    this.work_overrides = data.work_overrides || {};
  }
};
var EMPTY_USER = {
  name: "<empty>",
  email: "<empty>@app.user"
};
function isEmptyUser(user) {
  return !user || !user.email || user.email === EMPTY_USER.email;
}

// libs/common/src/lib/types/event.class.ts
var _default_user = EMPTY_USER;
function setDefaultCreator(user) {
  if (user)
    _default_user = user;
}
var DAYS_OF_WEEK = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
];
function eventStatus(details) {
  if (details.status === "cancelled")
    return "declined";
  if (details.resources?.length) {
    if (details.resources.every((i) => i.response_status === "accepted" || i.response_status === "confirmed" || details.approved)) {
      return "approved";
    } else if (details.resources.some((i) => i.response_status === "tentative" || i.response_status === "needsAction")) {
      return "tentative";
    }
    return "declined";
  }
  return "approved";
}
function parseRecurrence(data) {
  const start = data.start || data.range_start * 1e3;
  let end = data.end || (data.range_end ? data.range_end * 1e3 : void 0);
  if (!end && data.occurrences > 1) {
    switch (data.pattern) {
      case "daily":
        end = addDays(start || Date.now(), (data.occurrences - 1) * data.interval).valueOf();
        break;
      case "weekly":
        end = addWeeks(start || Date.now(), (data.occurrences - 1) * data.interval).valueOf();
        break;
      case "month_day":
      case "monthly":
        end = addMonths(start || Date.now(), (data.occurrences - 1) * data.interval).valueOf();
        end = addDays(end, 7).valueOf();
        break;
      case "yearly":
        end = addYears(start || Date.now(), (data.occurrences - 1) * data.interval).valueOf();
        break;
    }
  }
  return {
    range_start: getUnixTime(startOfDay(start)),
    range_end: getUnixTime(endOfDay(end)),
    interval: data.interval,
    pattern: data.pattern,
    days_of_week: data.days_of_week?.map((_) => typeof _ === "number" ? DAYS_OF_WEEK[_] : _) || [],
    nth_of_month: data.nth_of_month
  };
}
var CalendarEvent = class _CalendarEvent {
  get images() {
    return this.extension_data.images || [];
  }
  get is_all_day() {
    return this.all_day || this.duration >= 12 * 60;
  }
  get view_access() {
    return this.extension_data.view_access || "OPEN";
  }
  /** Get field from extension data */
  ext(key) {
    return this.extension_data[key];
  }
  constructor(data = {}) {
    this._valid_asset_cache = [];
    this._valid_cache_expiry = 0;
    const custom_all_day = !!(data.extension_data?.custom_all_day || data.custom_all_day);
    this.id = data.event_id || data.id || "";
    this.event_start = data.event_start || getUnixTime(data.date || roundToNearestMinutes(addMinutes(/* @__PURE__ */ new Date(), 3), {
      nearestTo: 5
    }));
    this.event_end = data.event_end || getUnixTime(data.date_end || 0) || getUnixTime(addMinutes(this.event_start * 1e3, data.duration || 30));
    this.calendar = data.calendar || "";
    this.creator = (data.creator || _default_user.email)?.toLowerCase() || "";
    this.host = (data.host || this.creator || data.host_email || _default_user.email || "").toLowerCase();
    const attendees = data.attendees || [];
    const system_email = (data.system?.email || "").toLowerCase();
    const is_system_resource = (user) => !!user.resource || !!system_email && user.email?.toLowerCase() === system_email;
    this.attendees = attendees.filter((user) => !is_system_resource(user)).map((u) => new User(u));
    this.resources = unique(data.resources || attendees.filter((user) => is_system_resource(user)).map((s) => new Space(s)), "email") || [];
    this.title = data.title;
    this.body = (data.body || "").replace(/&lt;&lt;&lt;.*&gt;&gt;&gt;/g, "");
    this.is_system_event = (data.body || this.body).includes("main_event_id");
    this.private = !!data.private;
    this.all_day = !!data.all_day || custom_all_day;
    this.timezone = data.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;
    this.date = this.event_start * 1e3 || this.date;
    this.date_end = this.event_end * 1e3 || this.date_end;
    this.duration = differenceInMinutes(this.date_end, this.date);
    if (this.all_day) {
      if (!data.duration && !data.date_end && !data.event_end) {
        this.date = startOfDayInTimezone(this.date, this.timezone);
        this.duration = 24 * 60 - 1;
        this.date_end = endOfDayInTimezone(this.date, this.timezone);
      } else if (this.duration % (24 * 60) === 0) {
        this.date = startOfDayInTimezone(this.date, this.timezone);
        this.duration = Math.max(1, this.duration - 1);
        this.date_end = endOfDayInTimezone(this.date, this.timezone);
      }
    }
    const matches = this.body.match(/\[ID\|([^\]]+)\]/);
    const associated_id = matches ? matches[1] : null;
    this.meeting_url = data.meeting_url || data.online_meeting_url || "";
    this.meeting_id = associated_id || data.meeting_id || data.online_meeting_id || "";
    this.meeting_provider = data.meeting_provider || data.online_meeting_provider || "";
    this.recurring = !!data.recurring;
    this.recurring_event_id = data.recurring_event_id || "";
    this.organiser = this.attendees.find((user) => user.email === this.host);
    this.from_bookings = data.from_bookings ?? false;
    this.master = data.master ? new _CalendarEvent(data.master) : null;
    this.mailbox = data.mailbox || "";
    this.ical_uid = data.ical_uid;
    this.linked_bookings = data.linked_bookings || [];
    this.update_master = data.update_master ?? false;
    if (data.recurring) {
      this.recurrence = {
        start: data.recurrence?.start || this.event_start * 1e3 || new Date(data.recurrence.range_start * 1e3).valueOf(),
        end: data.recurrence.end || new Date(data.recurrence.range_end * 1e3).valueOf(),
        interval: data.recurrence.interval,
        pattern: data.recurrence.pattern,
        occurrences: data.recurrence.occurrences,
        days_of_week: data.recurrence.days_of_week?.map((_) => typeof _ === "number" ? _ : DAYS_OF_WEEK.indexOf(_)) || [],
        nth_of_month: data.recurrence.nth_of_month
      };
    } else {
      this.recurrence = {};
    }
    const system = data.system;
    if (system?.email && !this.resources.find((_) => _.email.toLowerCase() === system.email.toLowerCase())) {
      this.resources.push(new Space(__spreadProps(__spreadValues({}, system), {
        response_status: data.status || "needsAction"
      })));
    }
    this.system = system || this.resources[0] || null;
    if (!system && data.system_id) {
      this.system = { id: data.system_id };
    }
    this.old_system = data.old_system || data.system;
    this.attachments = data.attachments || [];
    this.extension_data = data.extension_data || {};
    this.deleted = !!data.deleted;
    this.status = eventStatus(__spreadValues(__spreadValues({}, data), this)) || "none";
    this.location = data.location || this.space?.display_name || this.space?.name || "";
    this.setup_time = data.setup_time || 0;
    this.breakdown_time = data.breakdown_time || 0;
    this.visibility = data.visibility || "normal";
    this.type = this.deleted || this.status === "declined" ? "cancelled" : this.attendees.find((_) => _.is_external) ? "external" : "internal";
    for (const key in data) {
      if (!(key in this)) {
        this.extension_data[key] = data[key] || this.extension_data[key];
      }
    }
    const simple_event = {
      date: this.date,
      duration: this.duration,
      date_end: this.date_end,
      all_day: this.all_day,
      space: this.space,
      organiser: this.organiser
    };
    this.extension_data.catering = (this.extension_data.catering || []).map((i) => new CateringOrder(__spreadProps(__spreadValues({}, i), { event: simple_event })));
    const linked_assets = this.linked_bookings.filter((_) => _.booking_type === "asset-request").map((_) => _.extension_data?.request).filter((_) => !!_);
    const asset_requests = (linked_assets.length ? linked_assets : this.extension_data.assets) || [];
    this.extension_data.images = this.extension_data.images || data.images || [];
    this.extension_data.view_access = this.extension_data.view_access || data.view_access || data.permission?.toUpperCase() || "OPEN";
    this.permission = data.view_access || data.permission || this.extension_data.view_access;
    if (this.extension_data.permission) {
      this.extension_data.permission = this.permission;
    }
    this.extension_data.assets = asset_requests.map((i) => new AssetRequest(__spreadProps(__spreadValues({}, i), { event: simple_event })));
  }
  /** List of external attendees associated with the event */
  get guests() {
    return this.attendees.filter((f) => !!f.is_external);
  }
  /** Primary space associated with the booking */
  get space() {
    return this.resources[0] || null;
  }
  get is_today() {
    return isSameDay(this.date, Date.now());
  }
  get valid_catering() {
    return (this.ext("catering") || []).filter((order) => order.deliver_at < this.date_end);
  }
  get valid_assets() {
    if (this._valid_cache_expiry > Date.now() && this._valid_asset_cache.length) {
      return this._valid_asset_cache;
    }
    const list = this.linked_bookings;
    this._valid_asset_cache = (this.ext("assets") || []).map((request) => new AssetRequest(__spreadProps(__spreadValues({}, request), { event: this }))).filter((request) => request.deliver_at < this.date_end).map((request) => {
      const booking = list.find((_) => _.extension_data.request_id === request.id);
      if (booking) {
        request.state = booking.approved ? "approved" : booking.rejected ? "rejected" : "pending";
      }
      return request;
    });
    this._valid_cache_expiry = addMinutes(Date.now(), 5).valueOf();
    return this._valid_asset_cache;
  }
  /**
   * Convert class data to simple JSON object
   */
  toJSON() {
    const obj = __spreadValues({}, this);
    const is_full_day_period = this.all_day && getUnixTime(this.date) === getUnixTime(startOfDayInTimezone(this.date, this.timezone)) && getUnixTime(this.date_end) === getUnixTime(endOfDayInTimezone(this.date_end, this.timezone));
    const is_custom_all_day = this.all_day && !is_full_day_period;
    const date = is_full_day_period ? startOfDayInTimezone(this.date, this.timezone) : this.date;
    const end = is_full_day_period ? endOfDayInTimezone(this.date_end, this.timezone) + 1 : this.date_end;
    obj.event_start = getUnixTime(date);
    obj.event_end = getUnixTime(end);
    const attendees = this.attendees;
    this.recurring = this.recurrence?.pattern && this.recurrence._pattern !== "none";
    if (this.recurring) {
      obj.recurrence = parseRecurrence(__spreadProps(__spreadValues({}, this.recurrence), {
        start: this.recurrence.start || this.date
      }));
      delete obj.recurrence.start;
      delete obj.recurrence.end;
    }
    obj.recurrence = obj.recurrence ? Object.keys(obj.recurrence).length ? obj.recurrence : null : null;
    obj.attendees = unique([
      ...attendees,
      ...this.resources.map((_) => __spreadProps(__spreadValues({}, _), { resource: true }))
    ], "email");
    if (this.all_day) {
      obj.setup_time = 0;
      obj.breakdown_time = 0;
      obj.extension_data.all_day_date = format(date, "yyyy-MM-dd");
    }
    if (is_custom_all_day) {
      obj.all_day = false;
      obj.extension_data.custom_all_day = true;
    } else {
      if (this.id) {
        obj.extension_data.custom_all_day = false;
      } else {
        delete obj.extension_data.custom_all_day;
      }
    }
    obj.extension_data.catering = obj.extension_data.catering.map((i) => new CateringOrder(__spreadProps(__spreadValues({}, i), { event: null })));
    obj.extension_data.assets = obj.extension_data.assets.map((i) => new AssetRequest(__spreadProps(__spreadValues({}, i), { event: null })));
    obj.system_id = this.system?.id;
    obj.online_meeting_provider = this.meeting_provider;
    for (const key of [
      "catering",
      "date",
      "date_end",
      "duration",
      "status",
      "linked_bookings",
      "_valid_asset_cache",
      "_valid_cache_expiry",
      "type"
    ]) {
      if (key in obj)
        delete obj[key];
    }
    if (!obj.update_master)
      delete obj.recurring_event_id;
    removeEmptyFields(obj);
    return obj;
  }
  /** Status of the booking */
  get state() {
    const now = /* @__PURE__ */ new Date();
    const date = this.date;
    if (isBefore(now, add(date, { minutes: -15 })))
      return "future";
    if (isBefore(now, date))
      return "upcoming";
    if (isBefore(now, add(date, { minutes: 15 })))
      return "started";
    if (isBefore(now, add(date, { minutes: this.duration })))
      return "in_progress";
    return "done";
  }
  get can_check_in() {
    const now = /* @__PURE__ */ new Date();
    return this.is_today || isAfter(now, addMinutes(this.date, -5)) && isBefore(now, addMinutes(this.date, this.duration));
  }
};

// libs/common/src/lib/public-mode.ts
function isPublicMode() {
  if (typeof window === "undefined")
    return false;
  const flag = window.PLACEOS_PUBLIC_MODE;
  return !!flag;
}

// libs/common/src/lib/user-state.ts
var GroupPermission;
(function(GroupPermission2) {
  GroupPermission2[GroupPermission2["Read"] = 1] = "Read";
  GroupPermission2[GroupPermission2["Create"] = 2] = "Create";
  GroupPermission2[GroupPermission2["Update"] = 4] = "Update";
  GroupPermission2[GroupPermission2["Delete"] = 8] = "Delete";
  GroupPermission2[GroupPermission2["Operate"] = 16] = "Operate";
  GroupPermission2[GroupPermission2["Approve"] = 32] = "Approve";
  GroupPermission2[GroupPermission2["Manage"] = 64] = "Manage";
  GroupPermission2[GroupPermission2["Share"] = 128] = "Share";
})(GroupPermission || (GroupPermission = {}));
var ALL_PERMISSIONS = [
  GroupPermission.Read,
  GroupPermission.Create,
  GroupPermission.Update,
  GroupPermission.Delete,
  GroupPermission.Operate,
  GroupPermission.Approve,
  GroupPermission.Manage,
  GroupPermission.Share
];
var _current_user = new BehaviorSubject(EMPTY_USER);
var _change = new BehaviorSubject(0);
var current_user = _current_user.asObservable();
var user_groups = signal(
  [],
  ...ngDevMode ? [{ debugName: "user_groups" }] : (
    /* istanbul ignore next */
    []
  )
);
var user_groups_loaded = signal(
  false,
  ...ngDevMode ? [{ debugName: "user_groups_loaded" }] : (
    /* istanbul ignore next */
    []
  )
);
var user_signal = signal(
  EMPTY_USER,
  ...ngDevMode ? [{ debugName: "user_signal" }] : (
    /* istanbul ignore next */
    []
  )
);
_current_user.subscribe((u) => user_signal.set(u));
function sameGroups(a, b) {
  if (a.length !== b.length)
    return false;
  const set2 = new Set(a);
  return b.every((group) => set2.has(group));
}
var user_group_names = computed(() => user_signal().groups || [], __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "user_group_names" } : (
  /* istanbul ignore next */
  {}
)), { equal: sameGroups }));
var PERMISSION_VALUES = [
  ["read", GroupPermission.Read],
  ["create", GroupPermission.Create],
  ["update", GroupPermission.Update],
  ["delete", GroupPermission.Delete],
  ["operate", GroupPermission.Operate],
  ["approve", GroupPermission.Approve],
  ["manage", GroupPermission.Manage],
  ["share", GroupPermission.Share]
];
function isTestRuntime() {
  return typeof jest !== "undefined" || typeof vi !== "undefined";
}
var USER_CACHE_KEY = "PLACEOS.user";
var MAX_CACHE_AGE = 7 * 24 * 60 * 60 * 1e3;
function tokenID() {
  const value = J() || "";
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = hash * 31 + value.charCodeAt(i) | 0;
  }
  return `${hash}`;
}
function cachedUserData() {
  try {
    const cache = JSON.parse(localStorage.getItem(USER_CACHE_KEY) || "null");
    if (!cache?.cached_at || cache.token_id !== tokenID() || cache.cached_at + MAX_CACHE_AGE < Date.now()) {
      localStorage.removeItem(USER_CACHE_KEY);
      return null;
    }
    return cache;
  } catch {
    localStorage.removeItem(USER_CACHE_KEY);
    return null;
  }
}
function storeUserData() {
  const user = currentUser();
  if (isEmptyUser(user) || isPublicMode())
    return;
  try {
    const cache = {
      cached_at: Date.now(),
      token_id: tokenID(),
      user: __spreadValues({}, user)
    };
    localStorage.setItem(USER_CACHE_KEY, JSON.stringify(cache));
  } catch {
  }
}
function applyCachedUserData() {
  const cache = cachedUserData();
  if (!cache)
    return false;
  const user = new StaffUser(cache.user);
  _current_user.next(user);
  setDefaultCreator(user);
  return true;
}
var user_permissions = computed(
  () => {
    const permissions = {
      read: [],
      create: [],
      update: [],
      delete: [],
      operate: [],
      approve: [],
      manage: [],
      share: []
    };
    const permission_sets = PERMISSION_VALUES.reduce((sets, [permission_name]) => {
      sets[permission_name] = /* @__PURE__ */ new Set();
      return sets;
    }, {});
    for (const { group, permissions: group_permissions } of user_groups()) {
      for (const subsystem of group.subsystems || []) {
        for (const [permission_name, permission_value] of PERMISSION_VALUES) {
          if (group_permissions & permission_value) {
            permission_sets[permission_name].add(subsystem);
          }
        }
      }
    }
    for (const [permission_name] of PERMISSION_VALUES) {
      permissions[permission_name] = [
        ...permission_sets[permission_name]
      ].sort();
    }
    return permissions;
  },
  ...ngDevMode ? [{ debugName: "user_permissions" }] : (
    /* istanbul ignore next */
    []
  )
);
function setPublicUser() {
  const generic_user = new StaffUser({
    id: "public-user",
    name: "Public User",
    email: "public.user@placeos.example"
  });
  _current_user.next(generic_user);
  return generic_user;
}
async function loadUserGroups() {
  user_groups_loaded.set(false);
  if (isPublicMode()) {
    user_groups.set([]);
    user_groups_loaded.set(true);
    return;
  }
  try {
    const groups = await Cu({});
    user_groups.set(groups);
    console.log("Permissions:", user_permissions());
  } catch (error) {
    console.warn("Failed to load user groups.", error);
    user_groups.set([]);
  } finally {
    user_groups_loaded.set(true);
  }
}
function initialiseUser() {
  if (isTestRuntime())
    return;
  const is_public_mode = isPublicMode();
  if (!is_public_mode)
    applyCachedUserData();
  const user_request = combineLatest([th("current"), _change]).pipe(map(([i]) => new StaffUser(i)));
  if (is_public_mode) {
    user_request.pipe(catchError((error) => {
      console.warn("User loading failed in public mode, using local public user data.", error);
      return of(setPublicUser());
    })).subscribe((user) => _current_user.next(user));
    return;
  }
  user_request.pipe(retry({
    count: 10,
    delay: (error, count) => {
      const delay_ms = Math.min(1e3 * Math.pow(2, count), 3e4);
      console.warn(`User loading failed, retrying in ${delay_ms}ms (attempt ${count}/10)`, error);
      return timer(delay_ms);
    }
  })).subscribe((user) => applyUser(user));
}
function applyUser(user) {
  _current_user.next(user);
  setDefaultCreator(user);
  storeUserData();
  return loadUserGroups();
}
function reloadUserData() {
  setTimeout(async () => {
    try {
      const p_user = await th("current");
      applyUser(new StaffUser(p_user));
    } catch (error) {
      if (isPublicMode()) {
        console.warn("User reload failed in public mode, using local public user data.", error);
        setPublicUser();
        return;
      }
      throw error;
    }
  }, 300);
}
function currentUser() {
  return _current_user.getValue() || EMPTY_USER;
}
function currentUserCanApprove() {
  const groups = currentUser()?.groups || [];
  return groups.includes("placeos_admin") || groups.includes("placeos_support");
}
function currentUserIsLoaded() {
  if (!isEmptyUser(currentUser()))
    return true;
  return isTestRuntime();
}
function currentUserLoaded() {
  const user = currentUser();
  if (currentUserIsLoaded())
    return Promise.resolve(user);
  return new Promise((resolve) => {
    const sub = _current_user.subscribe((user2) => {
      if (isEmptyUser(user2))
        return;
      sub.unsubscribe();
      resolve(user2);
    });
  });
}
function userSignal() {
  return user_signal;
}
function hasPermission(subsystem, permissions) {
  if (user_signal().groups?.includes("placeos_admin"))
    return true;
  return (getPermissionMask(subsystem) & permissions) === permissions;
}
function getPermissionMask(subsystem) {
  let permissions = 0;
  for (const { group, permissions: group_permissions } of user_groups()) {
    if (group.subsystems?.includes(subsystem)) {
      permissions |= group_permissions;
    }
  }
  return permissions;
}
setTimeout(() => initialiseUser(), 50);

// libs/common/src/lib/google-analytics.service.ts
var GoogleAnalyticsService = class _GoogleAnalyticsService {
  constructor() {
    this.enabled = true;
    this.app_name = "GA_APP";
    this.timers = {};
  }
  init(tracking_id = "") {
    if (!window.gtag) {
      window.dataLayer = window.dataLayer || [];
      (function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
          "gtm.start": (/* @__PURE__ */ new Date()).getTime(),
          event: "gtm.js"
        });
        const f = d.getElementsByTagName(s)[0];
        const j = d.createElement(s);
        const dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", tracking_id);
      log("Analytics", "Service", "Injected Google Analytics into page");
    }
    this.service = window.gtag;
  }
  push(obj) {
    window.dataLayer.push(obj);
  }
  /**
   * Initialise Google Analytics
   * @param tracking_id GA Tracking ID
   */
  load(tracking_id) {
    if (!this.enabled) {
      throw new Error("Google Analytics needs to be enabled before being initialised");
    }
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    log("Analytics", "Service", `Setup with tracking ID: ${tracking_id}`);
    this.page("");
  }
  /**
   * Set User ID for the Google Analytics session
   * @param id Identifier of the User
   */
  setUser(id) {
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    if (this.enabled) {
      this.timeout(`user|${id}`, () => {
        log("Analytics", "Service", `Set user ID: ${id}`);
        this.service("set", "userId", id);
        this.event("authentication", "user-id available");
      }, 100);
    }
  }
  send(type, value) {
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    if (this.enabled) {
      this.timeout(`end|${type}`, () => {
        this.push(__spreadProps(__spreadValues({}, value), {
          event: "event"
        }));
      });
    }
  }
  /**
   * Post event to Google Analytics API
   * @param category Event Category
   * @param action Event Action
   * @param label Event Label
   * @param value Event Value
   */
  event(category, action, label, value) {
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    if (this.enabled) {
      this.timeout(`event|${category}|${action}|${label}|${value}`, () => {
        const l = label ? ", " + label : "";
        log("Analytics", "Service", `Event: ${category}, ${action}${l}${value ? ", " + value : ""}`);
        this.push({
          event: "event",
          category,
          action,
          label
        });
      }, 100);
    }
  }
  /**
   * Post screen change event to Google Analytics API
   * @param name
   * @param app_name
   */
  screen(name, app_name) {
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    if (name && this.enabled) {
      this.timeout(`event|${name}|${app_name || this.app_name}`, () => {
        log("Analytics", "Service", `Screen: ${name}${app_name ? ", " + app_name : ""}`);
        this.push({
          event: "screenview",
          appName: app_name || this.app_name,
          screenName: name
        });
      }, 100);
    }
  }
  /**
   * Post routing event to Google Analytics API
   * @param route Activated route
   * @param origin Add origin to routh path
   */
  page(route, origin = false) {
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    if (this.enabled) {
      this.timeout(`page|${route}`, () => {
        log("Analytics", "Service", `Page: ${route}`);
        this.push({
          event: "pageview",
          url: `${origin ? location.origin : ""}${route}`
        });
      }, 100);
    }
  }
  /**
   * Post timing event to Google Analytics API
   * @param category
   * @param variable
   * @param value
   * @param label
   */
  timing(category, variable, value, label) {
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    if (this.enabled) {
      this.timeout(`page|${category}|${variable}|${value}|${label}`, () => {
        log("Analytics", "Service", `Timing: ${category}, ${variable}, ${value}${label ? ", " + label : ""}`);
        this.push({
          event: "timing",
          category,
          variable,
          value,
          label
        });
      }, 100);
    }
  }
  /**
   * Creates a timeout for the given name used for preventing duplicate events in quick succession
   * @param name Name of timer
   * @param fn Timer callback
   * @param delay Timer delay
   */
  timeout(name, fn, delay = 300) {
    if (this.timers[name]) {
      clearTimeout(this.timers[name]);
      delete this.timers[name];
    }
    this.timers[name] = setTimeout(() => {
      if (fn instanceof Function) {
        fn();
      }
      delete this.timers[name];
    }, delay);
  }
  static {
    this.\u0275fac = function GoogleAnalyticsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GoogleAnalyticsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GoogleAnalyticsService, factory: _GoogleAnalyticsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GoogleAnalyticsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// libs/common/src/lib/version.ts
var VERSION = {
  "dirty": false,
  "raw": "a4af0e5",
  "hash": "a4af0e5",
  "distance": null,
  "tag": null,
  "semver": null,
  "suffix": "a4af0e5",
  "semverString": null,
  "version": "1.12.0",
  "time": 1791458407441
};

// libs/common/src/lib/settings.service.ts
var _service;
var _setting_signals = {};
var DEBUG_OVERRIDES_KEY = "PLACEOS.setting_overrides";
function loadDebugOverrides() {
  try {
    const overrides = JSON.parse(localStorage.getItem(DEBUG_OVERRIDES_KEY) || "{}");
    for (const key in overrides) {
      if (!key.startsWith("app."))
        delete overrides[key];
    }
    return overrides;
  } catch {
    return {};
  }
}
function setting(key) {
  return _service ? _service.get(key) : void 0;
}
function settingSignal(key, default_value = void 0, root = false) {
  const full_key = root ? key : `app.${key}`;
  if (!_setting_signals[full_key]) {
    _setting_signals[full_key] = signal(setting(full_key) ?? default_value);
  }
  return _setting_signals[full_key];
}
var SettingsService = class _SettingsService extends AsyncHandler {
  /**
   * @hidden
   */
  setOverrides(value) {
    this._overrides.set(value);
    this._refreshSettings();
  }
  /** Set a local debug override for an `app.*` setting. `undefined` clears the key. */
  setDebugOverride(key, value) {
    if (!key.startsWith("app."))
      return;
    const overrides = __spreadValues({}, this._debug_overrides());
    if (value === void 0)
      delete overrides[key];
    else
      overrides[key] = value;
    this._debug_overrides.set(overrides);
    if (Object.keys(overrides).length) {
      localStorage.setItem(DEBUG_OVERRIDES_KEY, JSON.stringify(overrides));
    } else
      localStorage.removeItem(DEBUG_OVERRIDES_KEY);
    this._refreshSettings();
  }
  clearDebugOverrides() {
    this._debug_overrides.set({});
    localStorage.removeItem(DEBUG_OVERRIDES_KEY);
    this._refreshSettings();
  }
  _refreshSettings() {
    this._applyCssVariables();
    this._updateSignals();
    this._applyTheme();
    this._setFontSize();
    this._setPrintFontSize();
  }
  get theme() {
    const allow_dark_mode = this.get("app.allow_dark_mode");
    return allow_dark_mode ? this.get("theme") : "light";
  }
  /** Get signal for key */
  listen(name) {
    if (!this._subjects[name])
      this._subjects[name] = signal(null);
    return this._subjects[name];
  }
  /** Update observable value for key */
  post(name, value) {
    if (!this._subjects[name])
      this._subjects[name] = signal(null);
    this._subjects[name].set(value);
  }
  value(name) {
    return !this._subjects[name] ? null : this._subjects[name]();
  }
  signal(name, default_value, root) {
    return settingSignal(name, default_value, root);
  }
  /** Page title */
  get title() {
    return this._title.getTitle();
  }
  set title(value) {
    this._title.setTitle(`${value} | ${this.get("app.name") || this._app_name}`);
    const tracking_id = this.get("app.analytics.tracking_id");
    if (!tracking_id)
      return;
    this._analytics?.send("pagename", { title: value });
  }
  constructor() {
    super();
    this._title = inject(Title);
    this._analytics = inject(GoogleAnalyticsService, { optional: true });
    this._app_name = "PlaceOS";
    this._overrides = signal(
      [],
      ...ngDevMode ? [{ debugName: "_overrides" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.overrides = this._overrides.asReadonly();
    this._user_settings = signal(
      {},
      ...ngDevMode ? [{ debugName: "_user_settings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._debug_overrides = signal(
      loadDebugOverrides(),
      ...ngDevMode ? [{ debugName: "_debug_overrides" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.debug_overrides = this._debug_overrides.asReadonly();
    this._subjects = {};
    this._pending_settings = {};
    this.theme_signal = computed(
      () => {
        const allow_dark_mode = this.signal("allow_dark_mode", false)();
        return allow_dark_mode ? this.signal("theme", "light", true)() : "light";
      },
      ...ngDevMode ? [{ debugName: "theme_signal" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.time_format_signal = computed(
      () => this.signal("use_24_hour_time", false)() ? "HH:mm" : "h:mm a",
      ...ngDevMode ? [{ debugName: "time_format_signal" }] : (
        /* istanbul ignore next */
        []
      )
    );
    _service = this;
    const now = /* @__PURE__ */ new Date();
    const time = new Date(VERSION.time);
    const built = isSameDay(now, time) ? `Today at ${format(time, "h:mma")}` : format(time, "do MMM yyyy, h:mma");
    log("CORE", `${VERSION.semver}`, null, "debug", true);
    log("APP", `${VERSION.hash} | Built: ${built}`, null, "debug", true);
    this.init();
  }
  /**
   * Initialise the settings
   */
  async init() {
    if (this.get("debug"))
      window.debug = true;
    if (this.get("app")?.name) {
      this._app_name = this.get("app").name;
    }
    this._app_name = location.pathname.replace(/[\\/]/g, "").trim() || this._app_name;
    setAppName(this._app_name.split("-").join("_").toUpperCase());
    log("Settings", "Successfully loaded settings");
    this._initialised.next(true);
    if (window.debug) {
      if (!window.app)
        window.app = {};
      window.app.settings = this;
      window.setting = (key) => this.get(key);
    }
    const user = await this._currentUser();
    const data = await ac(user.id, "settings");
    this._user_settings.set(data.details || {});
    this._updateSignals();
    this.timeout("init", () => {
      this._initDarkMode();
      this._applyTheme();
      this._setFontSize();
      this._setPrintFontSize();
    }, 1e3);
  }
  /** Whether settings service has initialised */
  get app_name() {
    return this._app_name.replace(/ /g, "-");
  }
  get time_format() {
    return this.get("app.use_24_hour_time") ? "HH:mm" : "h:mm a";
  }
  /**
   * Get a setting
   * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
   */
  get(key) {
    const debug_overrides = this._debug_overrides();
    if (key in debug_overrides)
      return debug_overrides[key];
    const keys = key.split(".");
    if (keys[0] !== "app") {
      return getItemWithKeys(keys, this._pending_settings) ?? getItemWithKeys(keys, this._user_settings()) ?? getItemWithKeys(keys, DEFAULT_SETTINGS);
    }
    const override_settings = [...this._overrides()];
    for (const override of override_settings) {
      const value = getItemWithKeys(keys.slice(1), override);
      if (value != null) {
        return value;
      }
    }
    return getItemWithKeys(keys, DEFAULT_SETTINGS);
  }
  saveUserSetting(name, value) {
    this._pending_settings[name] = value;
    this._updateSignals();
    if (name === "dark_mode")
      this.setTheme(value ? "dark" : "");
    if (name === "font_size")
      this._setFontSize();
    this.timeout("save_settings", () => this._savePendingChanges(), 2400);
  }
  async updateLocatable(locatable) {
    await sh(currentUser().id, { locatable }, "patch");
    reloadUserData();
  }
  overrideCssVariable(key, value, important = false) {
    let element = document.getElementById(`css-var-overrides+${key}`);
    if (!element) {
      element = document.createElement("style");
      element.id = `css-var-overrides+${key}`;
      document.head.appendChild(element);
    }
    element.innerText = `html, body { --${key}: ${value} ${important ? "!important" : ""}}`;
  }
  setTheme(theme) {
    const current_theme = this.theme;
    if (current_theme === theme)
      return;
    this.saveUserSetting("theme", theme);
    this._applyTheme();
  }
  _applyCssVariables() {
    const variable_map = this.get("app.css_variables") || {};
    let css_string = "body { ";
    for (const key in variable_map) {
      css_string += `--${key}: ${variable_map[key]}; `;
    }
    css_string += "}";
    let element = document.getElementById("css-var-overrides");
    if (!element) {
      element = document.createElement("style");
      element.id = "css-var-overrides";
      document.head.appendChild(element);
    }
    element.innerText = css_string;
  }
  async _savePendingChanges() {
    const user = currentUser();
    if (!user?.id || !Object.keys(this._pending_settings).length)
      return;
    this._updateSignals();
    await hc(user.id, {
      name: "settings",
      description: "",
      details: __spreadValues(__spreadValues({}, this._user_settings()), this._pending_settings)
    });
    this._user_settings.set(__spreadValues(__spreadValues({}, this._user_settings()), this._pending_settings));
    this._pending_settings = {};
  }
  _setFontSize() {
    if (!this.get("font_size"))
      return;
    this.overrideCssVariable("font-size", `${this.get("font_size")}px`);
  }
  _applyTheme() {
    const allow_dark_mode = this.get("app.allow_dark_mode");
    this._clearTheme();
    if (!allow_dark_mode)
      return;
    document.body.classList.add(`theme-${this.theme}`);
  }
  _clearTheme() {
    const class_list = document.body.classList.value.split(" ");
    for (const item of class_list) {
      if (item.startsWith("theme-")) {
        document.body.classList.remove(item);
      }
    }
  }
  _setPrintFontSize() {
    let print_style_el = document.getElementById("placeos-print-block");
    if (!print_style_el) {
      print_style_el = document.createElement("style");
      print_style_el.id = "placeos-print-block";
      document.head.appendChild(print_style_el);
    }
    print_style_el.innerText = `@media print { html, body { font-size: ${this.get("app.print_font_size") || "4mm"}; } }`;
  }
  _initDarkMode() {
    if (this.theme)
      return;
    const os_dark = window?.matchMedia ? window?.matchMedia("(prefers-color-scheme: dark)")?.matches : false;
    this.setTheme(os_dark ? "dark" : "");
  }
  _updateSignals() {
    for (const key in _setting_signals) {
      _setting_signals[key].update((old) => this.get(key) ?? old);
    }
  }
  _currentUser() {
    return new Promise((resolve) => {
      const check = () => {
        const user = currentUser();
        if (user?.id)
          return resolve(user);
        this.timeout("current_user", check, 100);
      };
      check();
    });
  }
  static {
    this.\u0275fac = function SettingsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SettingsService, factory: _SettingsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/common/src/lib/native-app.ts
var DOMAIN_STORAGE_KEY = "PlaceOS.native.domain";
var EMAIL_STORAGE_KEY = "PlaceOS.native.email";
var API_KEY_STORAGE_KEY = "PlaceOS.native.api_key";
var SYSTEM_ID_STORAGE_KEY = "PlaceOS.native.system_id";
var MANAGED_CONFIG_STORAGE_KEY = "PlaceOS.native.managed_config";
var APP_ID_STORAGE_KEY = "PlaceOS.native.app_id";
var LAST_AUTH_URL_STORAGE_KEY = "PlaceOS.native.last_auth_url";
var CONSUMED_AUTH_URL_STORAGE_KEY = "PlaceOS.native.consumed_auth_url";
var PKCE_STORAGE_KEY = "PlaceOS.native.pkce";
var AUTH_ERROR_STORAGE_KEY = "PlaceOS.native.auth_error";
var LOOKUP_HOST = "au.placeos.run";
var NATIVE_CALL_TIMEOUT_MS = 10 * 1e3;
var NATIVE_APP_IDS = {
  workplace: "com.placeos.workplace",
  staff: "com.placeos.workplace",
  control: "com.placeos.control",
  bookings: "com.placeos.booking.panel",
  "booking panel": "com.placeos.booking.panel"
};
var _native_url_listener = null;
function boundedNativeCall(promise) {
  return new Promise((resolve, reject) => {
    const timer2 = setTimeout(() => reject(new Error("Native plugin call timed out.")), NATIVE_CALL_TIMEOUT_MS);
    promise.then((value) => {
      clearTimeout(timer2);
      resolve(value);
    }, (error) => {
      clearTimeout(timer2);
      reject(error);
    });
  });
}
function capacitor() {
  return window.Capacitor || null;
}
function nativePluginProxy(name) {
  const cap = capacitor();
  if (cap?.Plugins?.[name])
    return cap.Plugins[name];
  try {
    return cap?.registerPlugin?.(name) || null;
  } catch {
    return null;
  }
}
function listenToNativeEvent(plugin_name, event_name, listener) {
  const proxy = nativePluginProxy(plugin_name);
  if (proxy?.addListener) {
    return boundedNativeCall(Promise.resolve(proxy.addListener(event_name, listener)));
  }
  const cap = capacitor();
  if (cap?.addListener) {
    return boundedNativeCall(Promise.resolve(cap.addListener(plugin_name, event_name, listener)));
  }
  return null;
}
function callNativeMethod(plugin_name, method_name, options) {
  const proxy = nativePluginProxy(plugin_name);
  if (typeof proxy?.[method_name] === "function") {
    return boundedNativeCall(Promise.resolve(proxy[method_name](options)));
  }
  const cap = capacitor();
  if (cap?.nativePromise) {
    return boundedNativeCall(cap.nativePromise(plugin_name, method_name, options));
  }
  return null;
}
function isNativeApp() {
  return !!capacitor()?.isNativePlatform?.();
}
async function getNativeAppId(app_name) {
  const normalised_name = `${app_name || ""}`.trim().toLowerCase();
  const app_id = NATIVE_APP_IDS[normalised_name];
  if (app_id) {
    localStorage.setItem(APP_ID_STORAGE_KEY, app_id);
    return app_id;
  }
  const cached_app_id = localStorage.getItem(APP_ID_STORAGE_KEY);
  if (!cached_app_id) {
    throw new Error(`Unsupported native app: ${app_name || "unknown"}.`);
  }
  return cached_app_id;
}
async function getNativeRedirectUri(app_name, domain) {
  const app_id = await getNativeAppId(app_name);
  const host = `${domain || ""}`.trim();
  return host ? `${app_id}://${host}/oauth-resp` : `${app_id}://oauth-resp`;
}
async function isNativeAuthRedirect(url) {
  const app_id = await getNativeAppId();
  const callback_url = new URL(url);
  return callback_url.protocol === `${app_id}:` && (callback_url.pathname === "/oauth-resp" || callback_url.hostname === "oauth-resp" && !callback_url.pathname.replace(/^\/+/, ""));
}
async function bindNativeAuthRedirects(listener) {
  if (!isNativeApp() || _native_url_listener)
    return;
  const handle = listenToNativeEvent("App", "appUrlOpen", async ({ url }) => {
    try {
      if (!url)
        return;
      console.warn(`[AUTH] App opened with URL: ${url}`);
      if (!await isNativeAuthRedirect(url)) {
        console.warn("[AUTH] URL is not an auth redirect.");
        return;
      }
      localStorage.setItem(LAST_AUTH_URL_STORAGE_KEY, url);
      listener(url);
    } catch (error) {
      console.warn("[AUTH] Error handling app URL.", error);
    }
  });
  if (!handle) {
    console.warn("[AUTH] Capacitor App plugin is unavailable.");
    return;
  }
  _native_url_listener = handle;
  await handle.catch((error) => {
    _native_url_listener = null;
    console.warn("[AUTH] Failed to listen for app URLs.", error);
  });
}
function markNativeAuthRedirectConsumed(url) {
  localStorage.setItem(CONSUMED_AUTH_URL_STORAGE_KEY, url);
  localStorage.removeItem(LAST_AUTH_URL_STORAGE_KEY);
}
async function consumeNativeAuthRedirect() {
  if (!isNativeApp())
    return null;
  const launch_url = await callNativeMethod("App", "getLaunchUrl")?.catch(() => null);
  const url = launch_url?.url || localStorage.getItem(LAST_AUTH_URL_STORAGE_KEY) || "";
  if (!url)
    return null;
  const is_redirect = await isNativeAuthRedirect(url).catch((error) => {
    console.warn("[AUTH] Error checking launch URL.", error);
    return false;
  });
  if (!is_redirect)
    return null;
  if (url === localStorage.getItem(CONSUMED_AUTH_URL_STORAGE_KEY)) {
    console.warn("[AUTH] Launch URL already consumed.");
    return null;
  }
  console.warn(`[AUTH] Consuming auth redirect from launch URL: ${url}`);
  return url;
}
function storeNativePkceVerifier(key, verifier) {
  sessionStorage.setItem(key, verifier);
  localStorage.setItem(PKCE_STORAGE_KEY, JSON.stringify({ key, verifier }));
}
function restoreNativePkceVerifier() {
  const raw = localStorage.getItem(PKCE_STORAGE_KEY);
  if (!raw)
    return;
  try {
    const { key, verifier } = JSON.parse(raw);
    if (key && verifier && !sessionStorage.getItem(key)) {
      sessionStorage.setItem(key, verifier);
    }
  } catch {
    localStorage.removeItem(PKCE_STORAGE_KEY);
  }
}
function clearNativePkceVerifier() {
  localStorage.removeItem(PKCE_STORAGE_KEY);
}
function setNativeAuthError(message) {
  localStorage.setItem(AUTH_ERROR_STORAGE_KEY, message);
}
function consumeNativeAuthError() {
  const message = localStorage.getItem(AUTH_ERROR_STORAGE_KEY) || "";
  localStorage.removeItem(AUTH_ERROR_STORAGE_KEY);
  return message;
}
async function hideNativeStatusBar() {
  if (!isNativeApp())
    return;
  await callNativeMethod("StatusBar", "setOverlaysWebView", {
    overlay: true
  })?.catch(() => null);
  await callNativeMethod("StatusBar", "hide", { animation: "NONE" })?.catch(() => null);
}
async function closeNativeBrowser() {
  await callNativeMethod("Browser", "close")?.catch(() => null);
}
async function openNativeBrowser(url) {
  const opened = callNativeMethod("Browser", "open", { url });
  if (!opened) {
    location.assign(url);
    return;
  }
  await opened.catch(() => location.assign(url));
}
function getNativeDomain() {
  return localStorage.getItem(DOMAIN_STORAGE_KEY);
}
function getNativeEmail() {
  return localStorage.getItem(EMAIL_STORAGE_KEY);
}
function setNativeDomain(domain) {
  localStorage.setItem(DOMAIN_STORAGE_KEY, domain.trim());
}
function setNativeEmail(email) {
  localStorage.setItem(EMAIL_STORAGE_KEY, email.trim());
}
function clearNativeDomain() {
  localStorage.removeItem(DOMAIN_STORAGE_KEY);
}
function getNativeApiKey() {
  return localStorage.getItem(API_KEY_STORAGE_KEY);
}
function setNativeApiKey(api_key) {
  const value = `${api_key || ""}`.trim();
  if (!value)
    return clearNativeApiKey();
  localStorage.setItem(API_KEY_STORAGE_KEY, value);
}
function clearNativeApiKey() {
  localStorage.removeItem(API_KEY_STORAGE_KEY);
}
function normaliseNativeDomain(address) {
  let value = `${address || ""}`.trim();
  if (!value)
    return "";
  if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(value))
    value = `https://${value}`;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" && url.protocol !== "http:")
      return "";
    if (!url.hostname)
      return "";
    return url.port ? `${url.hostname}:${url.port}` : url.hostname;
  } catch {
    return "";
  }
}
async function readManagedValue(method_name, key) {
  const result = callNativeMethod("ManagedConfigurations", method_name, {
    key
  });
  if (!result)
    return null;
  const { value } = await result.catch(() => ({ value: null }));
  return value ?? null;
}
async function loadNativeManagedConfig() {
  if (!isNativeApp())
    return null;
  const [domain_name, api_key, system_id, restart_time, restart_enabled, skip_setup] = await Promise.all([
    readManagedValue("getString", "domainName"),
    readManagedValue("getString", "apiKey"),
    readManagedValue("getString", "systemId"),
    readManagedValue("getNumber", "restartTime"),
    readManagedValue("getBoolean", "restartEnabled"),
    readManagedValue("getBoolean", "skipInteractiveSetup")
  ]);
  const domain = normaliseNativeDomain(`${domain_name || ""}`);
  if (!domain && !api_key && !system_id)
    return null;
  return {
    domain,
    api_key: `${api_key || ""}`.trim(),
    system_id: `${system_id || ""}`.trim(),
    restart_enabled: restart_enabled !== false,
    restart_time: Math.min(23, Math.max(0, Math.round(restart_time || 0))),
    skip_interactive_setup: skip_setup === true
  };
}
function applyNativeManagedConfig(config) {
  const fingerprint = JSON.stringify([
    config.domain,
    config.api_key,
    config.system_id
  ]);
  if (localStorage.getItem(MANAGED_CONFIG_STORAGE_KEY) === fingerprint) {
    return false;
  }
  if (config.domain) {
    setNativeDomain(config.domain);
    setNativeApiKey(config.api_key);
  }
  if (config.system_id) {
    localStorage.setItem(SYSTEM_ID_STORAGE_KEY, config.system_id);
  } else {
    localStorage.removeItem(SYSTEM_ID_STORAGE_KEY);
  }
  localStorage.setItem(MANAGED_CONFIG_STORAGE_KEY, fingerprint);
  return true;
}
var _managed_config_sync = null;
function syncNativeManagedConfig() {
  if (!_managed_config_sync) {
    _managed_config_sync = loadNativeManagedConfig().then((config) => ({
      config,
      changed: config ? applyNativeManagedConfig(config) : false
    })).catch(() => ({ config: null, changed: false }));
  }
  return _managed_config_sync;
}
var _restart_timer = null;
function scheduleNativeRestart(hour) {
  if (!isNativeApp() || _restart_timer)
    return;
  const next = /* @__PURE__ */ new Date();
  next.setHours(hour, 0, 0, 0);
  if (next.valueOf() <= Date.now())
    next.setDate(next.getDate() + 1);
  _restart_timer = setTimeout(() => location.reload(), next.valueOf() - Date.now());
}
var DEFAULT_INTUNE_SCOPES = ["User.Read"];
async function getIntuneAccount() {
  if (!isNativeApp())
    return null;
  const result = await callNativeMethod("IntuneMAM", "enrolledAccount")?.catch(() => null);
  return result?.accountId ? result : null;
}
async function getIntuneToken(account, scopes = DEFAULT_INTUNE_SCOPES) {
  const result = await callNativeMethod("IntuneMAM", "acquireTokenSilent", {
    scopes,
    accountId: account.accountId
  })?.catch(() => null);
  return `${result?.accessToken || ""}`.trim();
}
async function lookupNativeDomainByEmail(email) {
  const controller = new AbortController();
  const timer2 = setTimeout(() => controller.abort(), NATIVE_CALL_TIMEOUT_MS);
  const response = await fetch(`https://${LOOKUP_HOST}/api/engine/v2/domains/lookup/${encodeURIComponent(email)}`, { signal: controller.signal }).finally(() => clearTimeout(timer2));
  if (!response.ok) {
    throw new Error("Unable to lookup domain.");
  }
  const text = (await response.text()).trim();
  const domain = text.startsWith('"') ? JSON.parse(text) : text;
  if (!domain) {
    throw new Error("No domain found for this email.");
  }
  return `${domain}`.trim();
}

// libs/common/src/lib/signal.utilities.ts
function firstValueWhere(value, predicate = (_) => !!_, injector) {
  const current = untracked(value);
  if (predicate(current))
    return Promise.resolve(current);
  return new Promise((resolve) => {
    let ref;
    ref = untracked(() => effect(() => {
      const current2 = value();
      if (!predicate(current2))
        return;
      ref.destroy();
      resolve(current2);
    }, { injector }));
  });
}

// libs/common/src/lib/booking-rules.ts
var MINUTE = 1;
var HOUR = 60;
var DAY = 24 * HOUR;
var WEEK = 7 * DAY;
var MONTH = 30 * DAY;
var DURATION_MAP = {
  month: MONTH,
  months: MONTH,
  week: WEEK,
  weeks: WEEK,
  day: DAY,
  days: DAY,
  hour: HOUR,
  hours: HOUR,
  minute: MINUTE,
  minutes: MINUTE
};
var DEFAULT_RULES = {
  auto_approve: true,
  hidden: false
};
function stringToMinutes(str) {
  const parts = (str || "").split(" ");
  return parts.length > 1 ? +parts[0] * DURATION_MAP[parts[1].toLowerCase()] : 0;
}
function addToDate(add2, date = /* @__PURE__ */ new Date()) {
  return addMinutes(date, stringToMinutes(add2));
}
function filterResourcesFromRules(resources, details, ruleset_list) {
  return resources.filter((_) => !rulesForResource(__spreadProps(__spreadValues({}, details), { resource: _ }), ruleset_list)?.hidden);
}
function rulesForResource(details, ruleset_list) {
  if (!(ruleset_list instanceof Array))
    return DEFAULT_RULES;
  for (const ruleset of ruleset_list) {
    if (ruleset.zone === "*" || ruleset.zone === details.resource.zone?.id || details.resource.zones?.includes(ruleset.zone)) {
      if (checkRulesMatch(details, ruleset)) {
        if (window.debug_booking_rules) {
          console.log("Matched Ruleset:", details.resource.id, details, ruleset);
        }
        return ruleset.rules;
      }
    }
  }
  if (window.debug_booking_rules) {
    console.log("No Matched Ruleset:", details.resource.id, details, DEFAULT_RULES);
  }
  return DEFAULT_RULES;
}
function checkRulesMatch({ date, duration, host, resource }, ruleset) {
  const date_obj = new Date(date);
  let matches = 0;
  const { conditions } = ruleset;
  if (!conditions)
    return true;
  if (conditions.groups instanceof Array && conditions.groups.every((_) => host?.groups?.includes(_)))
    matches += 1;
  if (conditions.is_before && isBefore(addMinutes(date, duration), addToDate(conditions.is_before)))
    matches += 1;
  if (conditions.is_after && isAfter(date, addToDate(conditions.is_after)))
    matches += 1;
  if (conditions.min_length && conditions.min_length <= duration)
    matches += 1;
  if (conditions.is_between && date_obj.getHours() + date_obj.getMinutes() / 60 >= conditions.is_between[0] && date_obj.getHours() + date_obj.getMinutes() / 60 < conditions.is_between[1])
    matches += 1;
  if (conditions.is_period && date >= conditions.is_period[0] && date < conditions.is_period[1])
    matches += 1;
  if (conditions.max_length && conditions.max_length >= duration)
    matches += 1;
  if (conditions.resource_ids && conditions.resource_ids.includes(resource.id))
    matches += 1;
  if (conditions.tags && conditions.tags.every((tag) => (resource.tags || []).find((t) => t === tag)))
    matches += 1;
  if (conditions.locations && conditions.locations.includes(resource.name))
    matches += 1;
  return matches >= Object.keys(conditions).length;
}

// libs/common/src/lib/fixed-device-helpers.ts
var _wake_lock = null;
async function requestScreenWakeLock() {
  if (!_s())
    return;
  if (_wake_lock)
    await _wake_lock.release();
  if (document.visibilityState === "visible") {
    _wake_lock = await navigator.wakeLock.request("screen");
  } else {
    setTimeout(() => requestScreenWakeLock(), 1e3);
  }
}
document.addEventListener("visibilitychange", async () => {
  if (_wake_lock !== null && document.visibilityState === "visible") {
    _wake_lock = await navigator.wakeLock.request("screen");
  }
});

// libs/common/src/lib/constants.ts
var SETTING_KEYS = {
  FAVORITE_ROOMS: "favourite_rooms",
  FAVORITE_DESKS: "favourite_desks",
  FAVORITE_PARKING_SPACES: "favourite_parking",
  FAVORITE_LOCKERS: "favourite_lockers",
  FAVORITE_CATERING: "favourite_menu_items",
  FAVORITE_TEAM_MEMBERS: "favourite_team_members",
  TEAM_MEMBERS: "team_members"
};
var SECONDS = 1e3;
var MINUTES = 60 * SECONDS;
var HOURS = 60 * MINUTES;
var DAYS = 24 * HOURS;
var MINUTE2 = 60 * SECONDS;
var HOUR2 = 60 * MINUTES;
var DAY2 = 24 * HOURS;

// libs/common/src/lib/application.ts
var _timer;
var _initial_check;
var _version_subscription;
var _unrecoverable_subscription;
var _new_version = false;
var _auto_reload = false;
var _reload_gate = null;
var _reload_timer;
var _reload_deferred_since = 0;
var _init_reload = null;
var _init_reload_timer;
var _last_update_check = 0;
var _update_interval = 0;
var INIT_RELOAD_KEY = "PlaceOS.initialisation_reloads";
var INIT_RELOAD_WINDOW_MS = 5 * MINUTES;
var INIT_RELOAD_LIMIT = 3;
var INITIALISATION_FAILURE = signal(
  "",
  ...ngDevMode ? [{ debugName: "INITIALISATION_FAILURE" }] : (
    /* istanbul ignore next */
    []
  )
);
var INITIALISATION_COMPLETE = signal(
  false,
  ...ngDevMode ? [{ debugName: "INITIALISATION_COMPLETE" }] : (
    /* istanbul ignore next */
    []
  )
);
var RELOAD_RETRY_MS = 5 * SECONDS;
var MAX_RELOAD_DEFERRAL_MS = 10 * MINUTES;
var SERVICE_WORKER_UPDATE = signal(
  null,
  ...ngDevMode ? [{ debugName: "SERVICE_WORKER_UPDATE" }] : (
    /* istanbul ignore next */
    []
  )
);
function hasNewVersion() {
  return _new_version;
}
function serviceWorkerUpdate() {
  return SERVICE_WORKER_UPDATE.asReadonly();
}
function backendReachable() {
  if (typeof navigator !== "undefined" && navigator.onLine === false) {
    return false;
  }
  return so();
}
function canReloadNow() {
  if (!backendReachable())
    return false;
  try {
    return _reload_gate ? _reload_gate() : true;
  } catch (error) {
    log("CACHE", "Reload gate failed.", error, "warn");
    return true;
  }
}
function reloadApp() {
  if (_reload_timer)
    clearTimeout(_reload_timer);
  _reload_timer = void 0;
  if (!_reload_deferred_since)
    _reload_deferred_since = Date.now();
  const waited = Date.now() - _reload_deferred_since;
  if (canReloadNow() || waited >= MAX_RELOAD_DEFERRAL_MS) {
    location.reload();
    return;
  }
  _reload_timer = setTimeout(reloadApp, RELOAD_RETRY_MS);
}
function reloadForNewVersion() {
  reloadApp();
}
function initialisationFailure() {
  return INITIALISATION_FAILURE.asReadonly();
}
function initialisationComplete() {
  return INITIALISATION_COMPLETE.asReadonly();
}
function failInitialisation(message) {
  INITIALISATION_COMPLETE.set(false);
  INITIALISATION_FAILURE.set(message);
}
function recentInitReloads(now = Date.now()) {
  try {
    const stored = JSON.parse(sessionStorage.getItem(INIT_RELOAD_KEY) || "[]");
    return stored instanceof Array ? stored.filter((at) => typeof at === "number" && now - at >= 0 && now - at < INIT_RELOAD_WINDOW_MS) : [];
  } catch {
    return [];
  }
}
function storeInitReloads(at) {
  try {
    sessionStorage.setItem(INIT_RELOAD_KEY, JSON.stringify(at));
  } catch {
  }
}
function markInitialisationComplete() {
  try {
    sessionStorage.removeItem(INIT_RELOAD_KEY);
  } catch {
  }
  cancelInitReload();
  INITIALISATION_FAILURE.set("");
  INITIALISATION_COMPLETE.set(true);
}
function cancelInitReload() {
  if (_init_reload_timer)
    clearTimeout(_init_reload_timer);
  _init_reload_timer = void 0;
}
function retryInitialisation() {
  try {
    sessionStorage.removeItem(INIT_RELOAD_KEY);
  } catch {
  }
  INITIALISATION_FAILURE.set("");
  INITIALISATION_COMPLETE.set(false);
  location.reload();
}
function requestInitReload() {
  if (!backendReachable()) {
    if (_init_reload_timer)
      return;
    log("APP", "Initialisation failed while offline; restarting once online.", void 0, "warn");
    _init_reload_timer = setTimeout(() => {
      _init_reload_timer = void 0;
      requestInitReload();
    }, RELOAD_RETRY_MS);
    return;
  }
  cancelInitReload();
  if (_init_reload) {
    _init_reload();
    return;
  }
  const now = Date.now();
  const reloads = recentInitReloads(now);
  if (reloads.length >= INIT_RELOAD_LIMIT) {
    failInitialisation("The application could not finish starting. Check the connection, then try again.");
    return;
  }
  storeInitReloads([...reloads, now]);
  location.reload();
}
function stopUpdateChecks() {
  if (_timer)
    clearInterval(_timer);
  if (_initial_check)
    clearTimeout(_initial_check);
  _timer = void 0;
  _initial_check = void 0;
}
function cacheOptions(options = {}) {
  return typeof options === "number" ? { interval: options } : options;
}
function handleNewVersion() {
  if (_new_version)
    return;
  _new_version = true;
  stopUpdateChecks();
  if (_auto_reload)
    return reloadApp();
  SERVICE_WORKER_UPDATE.set({
    message: "New application version available",
    details: "Refresh to use the latest version.",
    action: "Refresh"
  });
}
function logVersionUpdate(event) {
  switch (event.type) {
    case "VERSION_DETECTED":
      log("CACHE", `Downloading application version ${event.version.hash}.`);
      return;
    case "VERSION_INSTALLATION_FAILED":
      log("CACHE", `Failed to install application version ${event.version.hash}.`, event.error, "warn");
      return;
    case "VERSION_READY":
      log("CACHE", `Application version ${event.latestVersion.hash} is ready.`, { current_version: event.currentVersion.hash });
      return;
    case "NO_NEW_VERSION_DETECTED":
      log("CACHE", `Application version ${event.version.hash} is up to date.`);
  }
}
function setupCache(cache, options = {}) {
  const { auto_reload = false, interval = 5 * MINUTES } = cacheOptions(options);
  _auto_reload = auto_reload;
  _update_interval = Math.max(interval, 1 * MINUTES);
  log("CACHE", `Service worker is ${cache.isEnabled ? "enabled" : "disabled"}.`);
  if (cache.isEnabled) {
    if (!_version_subscription) {
      _version_subscription = cache.versionUpdates.subscribe((event) => {
        logVersionUpdate(event);
        if (event.type !== "VERSION_READY" || _new_version)
          return;
        handleNewVersion();
      });
    }
    if (!_unrecoverable_subscription) {
      _unrecoverable_subscription = cache.unrecoverable.subscribe((event) => {
        log("CACHE", `Application cache is unrecoverable: ${event.reason}`, void 0, "error");
        _new_version = true;
        stopUpdateChecks();
        if (_auto_reload)
          return reloadApp();
        SERVICE_WORKER_UPDATE.set({
          message: "Application update failed to load",
          details: "Reload the app to recover.",
          action: "Reload"
        });
      });
    }
    if (_new_version) {
      if (_auto_reload)
        reloadApp();
      return;
    }
    stopUpdateChecks();
    _initial_check = setTimeout(() => {
      log("CACHE", `Checking for updates...`);
      checkForUpdate(cache);
    }, 2 * SECONDS);
    _timer = setInterval(() => {
      log("CACHE", `Checking for updates...`);
      checkForUpdate(cache);
    }, Math.max(interval, 1 * MINUTES));
  }
}
async function checkForUpdate(cache) {
  _last_update_check = Date.now();
  try {
    if (cache.isEnabled && await cache.checkForUpdate()) {
      log("CACHE", `Application update detected.`);
    }
  } catch (error) {
    log("CACHE", `Failed to check for application updates.`, error, "warn");
  }
}

// node_modules/@angular/cdk/fesm2022/clipboard.mjs
var PendingCopy = class {
  _document;
  _textarea;
  constructor(text, _document) {
    this._document = _document;
    const textarea = this._textarea = this._document.createElement("textarea");
    const styles = textarea.style;
    styles.position = "fixed";
    styles.top = styles.opacity = "0";
    styles.left = "-999em";
    textarea.setAttribute("aria-hidden", "true");
    textarea.value = text;
    textarea.readOnly = true;
    (this._document.fullscreenElement || this._document.body).appendChild(textarea);
  }
  copy() {
    const textarea = this._textarea;
    let successful = false;
    try {
      if (textarea) {
        const currentFocus = this._document.activeElement;
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        successful = this._document.execCommand("copy");
        if (currentFocus) {
          currentFocus.focus();
        }
      }
    } catch {
    }
    return successful;
  }
  destroy() {
    const textarea = this._textarea;
    if (textarea) {
      textarea.remove();
      this._textarea = void 0;
    }
  }
};
var Clipboard = class _Clipboard {
  _document = inject(DOCUMENT);
  copy(text) {
    const pendingCopy = this.beginCopy(text);
    const successful = pendingCopy.copy();
    pendingCopy.destroy();
    return successful;
  }
  beginCopy(text) {
    return new PendingCopy(text, this._document);
  }
  static \u0275fac = function Clipboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Clipboard)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _Clipboard,
    factory: _Clipboard.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Clipboard, [{
    type: Service
  }], null, null);
})();
var CDK_COPY_TO_CLIPBOARD_CONFIG = new InjectionToken("CDK_COPY_TO_CLIPBOARD_CONFIG");
var CdkCopyToClipboard = class _CdkCopyToClipboard {
  _clipboard = inject(Clipboard);
  _ngZone = inject(NgZone);
  text = "";
  attempts = 1;
  copied = new EventEmitter();
  _pending = /* @__PURE__ */ new Set();
  _destroyed = false;
  _currentTimeout;
  constructor() {
    const config = inject(CDK_COPY_TO_CLIPBOARD_CONFIG, {
      optional: true
    });
    if (config && config.attempts != null) {
      this.attempts = config.attempts;
    }
  }
  copy(attempts = this.attempts) {
    attempts = Math.min(attempts, 50);
    if (attempts > 1) {
      let remainingAttempts = attempts;
      const pending = this._clipboard.beginCopy(this.text);
      this._pending.add(pending);
      const attempt = () => {
        const successful = pending.copy();
        if (!successful && --remainingAttempts && !this._destroyed) {
          this._currentTimeout = this._ngZone.runOutsideAngular(() => setTimeout(attempt, 1));
        } else {
          this._currentTimeout = null;
          this._pending.delete(pending);
          pending.destroy();
          this.copied.emit(successful);
        }
      };
      attempt();
    } else {
      this.copied.emit(this._clipboard.copy(this.text));
    }
  }
  ngOnDestroy() {
    if (this._currentTimeout) {
      clearTimeout(this._currentTimeout);
    }
    this._pending.forEach((copy) => copy.destroy());
    this._pending.clear();
    this._destroyed = true;
  }
  static \u0275fac = function CdkCopyToClipboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkCopyToClipboard)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkCopyToClipboard,
    selectors: [["", "cdkCopyToClipboard", ""]],
    hostBindings: function CdkCopyToClipboard_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function CdkCopyToClipboard_click_HostBindingHandler() {
          return ctx.copy();
        });
      }
    },
    inputs: {
      text: [0, "cdkCopyToClipboard", "text"],
      attempts: [0, "cdkCopyToClipboardAttempts", "attempts"]
    },
    outputs: {
      copied: "cdkCopyToClipboardCopied"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCopyToClipboard, [{
    type: Directive,
    args: [{
      selector: "[cdkCopyToClipboard]",
      host: {
        "(click)": "copy()"
      }
    }]
  }], () => [], {
    text: [{
      type: Input,
      args: ["cdkCopyToClipboard"]
    }],
    attempts: [{
      type: Input,
      args: ["cdkCopyToClipboardAttempts"]
    }],
    copied: [{
      type: Output,
      args: ["cdkCopyToClipboardCopied"]
    }]
  });
})();
var ClipboardModule = class _ClipboardModule {
  static \u0275fac = function ClipboardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClipboardModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ClipboardModule,
    imports: [CdkCopyToClipboard],
    exports: [CdkCopyToClipboard]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClipboardModule, [{
    type: NgModule,
    args: [{
      imports: [CdkCopyToClipboard],
      exports: [CdkCopyToClipboard]
    }]
  }], null, null);
})();

// node_modules/@angular/service-worker/fesm2022/service-worker.mjs
/**
 * @license Angular v22.1.5
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var ERR_SW_NOT_SUPPORTED = "Service workers are disabled or not supported by this browser";
var NgswCommChannel = class {
  serviceWorker;
  worker;
  registration;
  events;
  constructor(serviceWorker, injector) {
    this.serviceWorker = serviceWorker;
    if (!serviceWorker) {
      this.worker = this.events = this.registration = new Observable((subscriber) => subscriber.error(new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED)));
    } else {
      let currentWorker = null;
      const workerSubject = new Subject();
      this.worker = new Observable((subscriber) => {
        if (currentWorker !== null) {
          subscriber.next(currentWorker);
        }
        return workerSubject.subscribe((v) => subscriber.next(v));
      });
      const updateController = () => {
        const {
          controller
        } = serviceWorker;
        if (controller === null) {
          return;
        }
        currentWorker = controller;
        workerSubject.next(currentWorker);
      };
      serviceWorker.addEventListener("controllerchange", updateController);
      updateController();
      this.registration = this.worker.pipe(switchMap(() => serviceWorker.getRegistration().then((registration) => {
        if (!registration) {
          throw new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED);
        }
        return registration;
      })));
      const _events = new Subject();
      this.events = _events.asObservable();
      const messageListener = (event) => {
        const {
          data
        } = event;
        if (data?.type) {
          _events.next(data);
        }
      };
      serviceWorker.addEventListener("message", messageListener);
      const appRef = injector?.get(ApplicationRef, null, {
        optional: true
      });
      appRef?.onDestroy(() => {
        serviceWorker.removeEventListener("controllerchange", updateController);
        serviceWorker.removeEventListener("message", messageListener);
      });
    }
  }
  postMessage(action, payload) {
    return new Promise((resolve) => {
      this.worker.pipe(take(1)).subscribe((sw) => {
        sw.postMessage(__spreadValues({
          action
        }, payload));
        resolve();
      });
    });
  }
  postMessageWithOperation(type, payload, operationNonce) {
    const waitForOperationCompleted = this.waitForOperationCompleted(operationNonce);
    const postMessage = this.postMessage(type, payload);
    return Promise.all([postMessage, waitForOperationCompleted]).then(([, result]) => result);
  }
  generateNonce() {
    return Math.round(Math.random() * 1e7);
  }
  eventsOfType(type) {
    let filterFn;
    if (typeof type === "string") {
      filterFn = (event) => event.type === type;
    } else {
      filterFn = (event) => type.includes(event.type);
    }
    return this.events.pipe(filter(filterFn));
  }
  nextEventOfType(type) {
    return this.eventsOfType(type).pipe(take(1));
  }
  waitForOperationCompleted(nonce) {
    return new Promise((resolve, reject) => {
      this.eventsOfType("OPERATION_COMPLETED").pipe(filter((event) => event.nonce === nonce), take(1), map((event) => {
        if (event.result !== void 0) {
          return event.result;
        }
        throw new Error(event.error);
      })).subscribe({
        next: resolve,
        error: reject
      });
    });
  }
  get isEnabled() {
    return !!this.serviceWorker;
  }
};
var SwPush = class _SwPush {
  sw;
  messages;
  notificationClicks;
  notificationCloses;
  pushSubscriptionChanges;
  subscription;
  get isEnabled() {
    return this.sw.isEnabled;
  }
  pushManager = null;
  subscriptionChanges = new Subject();
  constructor(sw) {
    this.sw = sw;
    if (!sw.isEnabled) {
      this.messages = NEVER;
      this.notificationClicks = NEVER;
      this.notificationCloses = NEVER;
      this.pushSubscriptionChanges = NEVER;
      this.subscription = NEVER;
      return;
    }
    this.messages = this.sw.eventsOfType("PUSH").pipe(map((message) => message.data));
    this.notificationClicks = this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(map((message) => message.data));
    this.notificationCloses = this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(map((message) => message.data));
    this.pushSubscriptionChanges = this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(map((message) => message.data));
    this.pushManager = this.sw.registration.pipe(map((registration) => registration.pushManager));
    const workerDrivenSubscriptions = this.pushManager.pipe(switchMap((pm) => pm.getSubscription()));
    this.subscription = new Observable((subscriber) => {
      const workerDrivenSubscription = workerDrivenSubscriptions.subscribe(subscriber);
      const subscriptionChanges = this.subscriptionChanges.subscribe(subscriber);
      return () => {
        workerDrivenSubscription.unsubscribe();
        subscriptionChanges.unsubscribe();
      };
    });
  }
  requestSubscription(options) {
    if (!this.sw.isEnabled || this.pushManager === null) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const pushOptions = {
      userVisibleOnly: true
    };
    let key = this.decodeBase64(options.serverPublicKey.replace(/_/g, "/").replace(/-/g, "+"));
    let applicationServerKey = new Uint8Array(new ArrayBuffer(key.length));
    for (let i = 0; i < key.length; i++) {
      applicationServerKey[i] = key.charCodeAt(i);
    }
    pushOptions.applicationServerKey = applicationServerKey;
    return new Promise((resolve, reject) => {
      this.pushManager.pipe(switchMap((pm) => pm.subscribe(pushOptions)), take(1)).subscribe({
        next: (sub) => {
          this.subscriptionChanges.next(sub);
          resolve(sub);
        },
        error: reject
      });
    });
  }
  unsubscribe() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const doUnsubscribe = (sub) => {
      if (sub === null) {
        throw new RuntimeError(5602, (typeof ngDevMode === "undefined" || ngDevMode) && "Not subscribed to push notifications.");
      }
      return sub.unsubscribe().then((success) => {
        if (!success) {
          throw new RuntimeError(5603, (typeof ngDevMode === "undefined" || ngDevMode) && "Unsubscribe failed!");
        }
        this.subscriptionChanges.next(null);
      });
    };
    return new Promise((resolve, reject) => {
      this.subscription.pipe(take(1), switchMap(doUnsubscribe)).subscribe({
        next: resolve,
        error: reject
      });
    });
  }
  decodeBase64(input) {
    return atob(input);
  }
  static \u0275fac = function SwPush_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwPush)(\u0275\u0275inject(NgswCommChannel));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SwPush,
    factory: _SwPush.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwPush, [{
    type: Injectable
  }], () => [{
    type: NgswCommChannel
  }], null);
})();
var SwUpdate = class _SwUpdate {
  sw;
  versionUpdates;
  unrecoverable;
  get isEnabled() {
    return this.sw.isEnabled;
  }
  ongoingCheckForUpdate = null;
  constructor(sw) {
    this.sw = sw;
    if (!sw.isEnabled) {
      this.versionUpdates = NEVER;
      this.unrecoverable = NEVER;
      return;
    }
    this.versionUpdates = this.sw.eventsOfType(["VERSION_DETECTED", "VERSION_INSTALLATION_FAILED", "VERSION_READY", "NO_NEW_VERSION_DETECTED"]);
    this.unrecoverable = this.sw.eventsOfType("UNRECOVERABLE_STATE");
  }
  checkForUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    if (this.ongoingCheckForUpdate) {
      return this.ongoingCheckForUpdate;
    }
    const nonce = this.sw.generateNonce();
    this.ongoingCheckForUpdate = this.sw.postMessageWithOperation("CHECK_FOR_UPDATES", {
      nonce
    }, nonce).finally(() => {
      this.ongoingCheckForUpdate = null;
    });
    return this.ongoingCheckForUpdate;
  }
  activateUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED));
    }
    const nonce = this.sw.generateNonce();
    return this.sw.postMessageWithOperation("ACTIVATE_UPDATE", {
      nonce
    }, nonce);
  }
  static \u0275fac = function SwUpdate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwUpdate)(\u0275\u0275inject(NgswCommChannel));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SwUpdate,
    factory: _SwUpdate.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwUpdate, [{
    type: Injectable
  }], () => [{
    type: NgswCommChannel
  }], null);
})();
var SCRIPT = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NGSW_REGISTER_SCRIPT" : "");
function ngswAppInitializer() {
  if (false) {
    return;
  }
  const options = inject(SwRegistrationOptions);
  if (!("serviceWorker" in navigator && options.enabled !== false)) {
    return;
  }
  const script = inject(SCRIPT);
  const ngZone = inject(NgZone);
  const appRef = inject(ApplicationRef);
  ngZone.runOutsideAngular(() => {
    const sw = navigator.serviceWorker;
    const onControllerChange = () => sw.controller?.postMessage({
      action: "INITIALIZE"
    });
    sw.addEventListener("controllerchange", onControllerChange);
    appRef.onDestroy(() => {
      sw.removeEventListener("controllerchange", onControllerChange);
    });
  });
  ngZone.runOutsideAngular(() => {
    let readyToRegister;
    const {
      registrationStrategy
    } = options;
    if (typeof registrationStrategy === "function") {
      readyToRegister = new Promise((resolve) => registrationStrategy().subscribe(() => resolve()));
    } else {
      const [strategy, ...args] = (registrationStrategy || "registerWhenStable:30000").split(":");
      switch (strategy) {
        case "registerImmediately":
          readyToRegister = Promise.resolve();
          break;
        case "registerWithDelay":
          readyToRegister = delayWithTimeout(+args[0] || 0);
          break;
        case "registerWhenStable":
          readyToRegister = Promise.race([appRef.whenStable(), delayWithTimeout(+args[0])]);
          break;
        default:
          throw new RuntimeError(5600, (typeof ngDevMode === "undefined" || ngDevMode) && `Unknown ServiceWorker registration strategy: ${options.registrationStrategy}`);
      }
    }
    readyToRegister.then(() => {
      if (appRef.destroyed) {
        return;
      }
      navigator.serviceWorker.register(script, {
        scope: options.scope,
        updateViaCache: options.updateViaCache,
        type: options.type
      }).catch((err) => console.error(formatRuntimeError(5604, (typeof ngDevMode === "undefined" || ngDevMode) && "Service worker registration failed with: " + err)));
    });
  });
}
function delayWithTimeout(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
function ngswCommChannelFactory() {
  const opts = inject(SwRegistrationOptions);
  const injector = inject(Injector);
  const isBrowser = true;
  return new NgswCommChannel(isBrowser && opts.enabled !== false ? navigator.serviceWorker : void 0, injector);
}
var SwRegistrationOptions = class {
  enabled;
  updateViaCache;
  type;
  scope;
  registrationStrategy;
};
function provideServiceWorker(script, options = {}) {
  return makeEnvironmentProviders([SwPush, SwUpdate, {
    provide: SCRIPT,
    useValue: script
  }, {
    provide: SwRegistrationOptions,
    useValue: options
  }, {
    provide: NgswCommChannel,
    useFactory: ngswCommChannelFactory
  }, provideAppInitializer(ngswAppInitializer)]);
}
var ServiceWorkerModule = class _ServiceWorkerModule {
  static register(script, options = {}) {
    return {
      ngModule: _ServiceWorkerModule,
      providers: [provideServiceWorker(script, options)]
    };
  }
  static \u0275fac = function ServiceWorkerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceWorkerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ServiceWorkerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [SwPush, SwUpdate]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceWorkerModule, [{
    type: NgModule,
    args: [{
      providers: [SwPush, SwUpdate]
    }]
  }], null, null);
})();

// libs/common/src/lib/placeos.ts
var NATIVE_CREDENTIAL_FETCH_KEY = "__placeos_native_credential_fetch__";
var PLACE_SETUP_TIMEOUT = 10 * 1e3;
function randomString2(length = 43) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (value) => chars[value % chars.length]).join("");
}
async function sha256Base64Url(value) {
  const buffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  const bytes = Array.from(new Uint8Array(buffer), (byte) => String.fromCharCode(byte)).join("");
  return btoa(bytes).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function requestOrigin(input) {
  const request_url = typeof input === "string" ? input : input instanceof URL ? input.toString() : input?.url;
  return request_url ? new URL(request_url, location.href).origin : "";
}
function setupNativeCredentialedFetch(urls) {
  if (typeof window.fetch !== "function")
    return;
  const window_state = window;
  const origins = urls.map((url) => new URL(url, location.href).origin);
  if (window_state[NATIVE_CREDENTIAL_FETCH_KEY]) {
    for (const origin of origins) {
      window_state[NATIVE_CREDENTIAL_FETCH_KEY].origins.add(origin);
    }
    return;
  }
  const state = {
    origins: new Set(origins),
    fetch: window.fetch.bind(window)
  };
  window_state[NATIVE_CREDENTIAL_FETCH_KEY] = state;
  window.fetch = (input, init) => {
    if (!state.origins.has(requestOrigin(input))) {
      return state.fetch(input, init);
    }
    return state.fetch(input, __spreadProps(__spreadValues({}, init), { credentials: "include" }));
  };
}
async function createNativeAuthUrl(settings, client_id) {
  const protocol = settings.protocol || location.protocol;
  const host = settings.domain || location.hostname;
  const port = settings.port || location.port;
  const host_with_port = `${host}${port ? ":" + port : ""}`;
  const url = settings.use_domain ? `${protocol}//${host_with_port}` : location.origin;
  const redirect_uri = await getNativeRedirectUri(settings.app_name, settings.domain);
  const nonce = randomString2(16);
  const verifier = randomString2();
  const challenge = await sha256Base64Url(verifier);
  localStorage.setItem(`${client_id}_nonce`, nonce);
  storeNativePkceVerifier(`${client_id}_challenge`, verifier);
  return `${url}/auth/oauth/authorize?response_type=code&client_id=${encodeURIComponent(client_id)}&state=${encodeURIComponent(nonce)}&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=${encodeURIComponent("public")}&code_challenge_method=S256&code_challenge=${encodeURIComponent(challenge)}`;
}
async function setupPlace(settings, timeout_ms = PLACE_SETUP_TIMEOUT) {
  const protocol = settings.protocol || location.protocol;
  const host = settings.domain || location.hostname;
  const port = settings.port || location.port;
  const host_with_port = `${host}${port ? ":" + port : ""}`;
  const url = settings.use_domain ? `${protocol}//${host_with_port}` : location.origin;
  const route = (location.pathname + "/").replace("//", "/");
  const native = isNativeApp();
  const mock = settings.mock || location.href.includes("mock=true") || localStorage.getItem("mock") === "true";
  const config = {
    auth_type: "auth_code",
    scope: "public",
    host: host_with_port,
    secure: native || protocol === "https:",
    auth_uri: `${url}/auth/oauth/authorize`,
    token_uri: `${url}/auth/oauth/token`,
    redirect_uri: native ? await getNativeRedirectUri(settings.app_name, settings.domain) : `${location.origin}${route}oauth-resp.html`,
    storage: native ? "local" : settings.storage,
    handle_login: native ? false : !settings.local_login,
    use_iframe: !native,
    mock,
    delay: 300
  };
  if (native) {
    localStorage.setItem("trust", "true");
    setupNativeCredentialedFetch([config.auth_uri, config.token_uri]);
  }
  if (localStorage) {
    localStorage.setItem("mock", `${!!mock && !location.href.includes("mock=false")}`);
  }
  if (mock) {
    notifyInfo("Application in mock mode.");
  }
  Xr(settings.app_name || location.pathname.split("/").find(Boolean) || "PlaceOS", new Date(VERSION.time).toISOString(), VERSION.hash);
  const setup_promise = ro(config);
  if (timeout_ms <= 0)
    return setup_promise;
  return new Promise((resolve, reject) => {
    const timer2 = setTimeout(() => reject(new Error("PlaceOS setup timed out.")), timeout_ms);
    setup_promise.then(() => {
      clearTimeout(timer2);
      resolve();
    }, (error) => {
      clearTimeout(timer2);
      reject(error);
    });
  });
}

// libs/common/src/lib/sentry.ts
var _sentry_handler = null;
var _trace_service = null;
async function initSentry(dsn, router, traces_sample_rate = 1) {
  if (!dsn || _sentry_handler)
    return;
  try {
    const Sentry = await import("./sentry-sdk-UCSQNJE7.js");
    Sentry.init({
      dsn,
      integrations: [Sentry.browserTracingIntegration()],
      tracesSampleRate: traces_sample_rate,
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: [
        "localhost",
        /^https:\/\/[a-zA-Z0-9_-]*\.[a-zA-Z0-9]*\/api/,
        /^https:\/\/[a-zA-Z0-9_-]*\.placeos\.run*\/api/
      ]
    });
    _trace_service = new Sentry.TraceService(router);
    _sentry_handler = Sentry.createErrorHandler({ showDialog: false });
  } catch (error) {
    log("APP", "Failed to load Sentry.", error, "warn");
  }
}

// libs/common/src/lib/teams-host.ts
var TEAMS_HOST_PARAM = "host";
var AUTH_STORE_KEY = "PLACEOS.teams_auth";
var INIT_TIMEOUT_MS = 5e3;
var SSO_TIMEOUT_MS = 1e4;
var MAX_SIGN_IN_ATTEMPTS = 5;
var EXPIRY_MARGIN_MS = 5 * 60 * 1e3;
var _teams = null;
var _sign_in_resolve = null;
var SIGN_IN_REQUIRED = signal(
  false,
  ...ngDevMode ? [{ debugName: "SIGN_IN_REQUIRED" }] : (
    /* istanbul ignore next */
    []
  )
);
function teamsHostMode(search = location.search, storage = sessionStorage) {
  const host = new URLSearchParams(search).get(TEAMS_HOST_PARAM);
  if (host === "teams-auth" || storage.getItem(AUTH_STORE_KEY) === "true") {
    return "auth";
  }
  return host === "teams" ? "tab" : null;
}
async function startTeamsHost(mode = teamsHostMode()) {
  if (!mode)
    return null;
  if (mode === "auth")
    sessionStorage.setItem(AUTH_STORE_KEY, "true");
  try {
    const teams = await import("./src-BNAR4FSM.js");
    await withTimeout(teams.app.initialize(), INIT_TIMEOUT_MS, "Microsoft Teams host did not respond.");
    _teams = teams;
    log("Teams", `Connected to host as ${mode}.`);
    return mode;
  } catch (error) {
    log("Teams", "Host is not available.", error, "warn");
    return null;
  }
}
async function finishTeamsSignIn(mode) {
  if (!_teams)
    throw new Error("Call startTeamsHost() first.");
  if (mode === "auth") {
    const place_token = J(false);
    if (place_token) {
      sessionStorage.removeItem(AUTH_STORE_KEY);
      _teams.authentication.notifySuccess(place_token);
    }
    return false;
  }
  if (J(false))
    return true;
  if (await signInTeamsTab(_teams))
    return true;
  failInitialisation("Sign in did not finish. Select Try again to sign in.");
  return false;
}
async function signInTeamsTab(teams) {
  const sso_signed_in = await withTimeout(teams.authentication.getAuthToken(), SSO_TIMEOUT_MS, "Microsoft single sign-on timed out.").then(async (entra_token) => {
    if (!entra_token)
      return false;
    await Mi(entra_token);
    return true;
  }).catch((error) => {
    log("Teams", "SSO failed.", error, "warn");
    return false;
  });
  if (sso_signed_in)
    return true;
  const url = `${location.origin}${location.pathname}?${TEAMS_HOST_PARAM}=teams-auth`;
  for (let attempt = 0; attempt < MAX_SIGN_IN_ATTEMPTS; attempt++) {
    if (attempt > 0) {
      await new Promise((resolve) => {
        _sign_in_resolve = resolve;
        SIGN_IN_REQUIRED.set(true);
      });
    }
    const place_token = await teams.authentication.authenticate({ url, width: 600, height: 600 }).catch((error) => {
      log("Teams", "Sign-in window failed.", error, "warn");
      return "";
    });
    if (place_token) {
      bi(place_token, tokenExpiry(place_token));
      return true;
    }
  }
  return false;
}
function tokenExpiry(jwt) {
  try {
    const payload = jwt.split(".")[1];
    if (!payload)
      return void 0;
    const claims = JSON.parse(atob(payload.replace(/-/g, "+").replace(/_/g, "/")));
    return typeof claims.exp === "number" ? claims.exp * 1e3 - EXPIRY_MARGIN_MS : void 0;
  } catch {
    return void 0;
  }
}

// libs/common/src/lib/placeos.service.ts
var START_QUERY = location.search;
var AUTHORITY_WAIT_MS = 10 * 1e3;
var LOADING_MESSAGE = signal(
  "Loading...",
  ...ngDevMode ? [{ debugName: "LOADING_MESSAGE" }] : (
    /* istanbul ignore next */
    []
  )
);
var NEEDS_DOMAIN = signal(
  false,
  ...ngDevMode ? [{ debugName: "NEEDS_DOMAIN" }] : (
    /* istanbul ignore next */
    []
  )
);
var DOMAIN_ERROR = signal(
  "",
  ...ngDevMode ? [{ debugName: "DOMAIN_ERROR" }] : (
    /* istanbul ignore next */
    []
  )
);
var AUTO_CONFIRM_DOMAIN = signal(
  false,
  ...ngDevMode ? [{ debugName: "AUTO_CONFIRM_DOMAIN" }] : (
    /* istanbul ignore next */
    []
  )
);
function getLoadingMessage() {
  return LOADING_MESSAGE;
}
function setLoadingMessage(message) {
  LOADING_MESSAGE.set(message);
}
function needsNativeDomain() {
  return NEEDS_DOMAIN;
}
function nativeDomainError() {
  return DOMAIN_ERROR;
}
function autoConfirmNativeDomain() {
  return AUTO_CONFIRM_DOMAIN;
}
var _mocks = null;
var PlaceOS_Service = class _PlaceOS_Service extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._analytics = inject(GoogleAnalyticsService, { optional: true });
    this._locale = inject(LocaleService, { optional: true });
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._cache = inject(SwUpdate);
    this._snackbar = lazySnackbar();
    this._hotkey = inject(HotkeysService);
    this._clipboard = inject(Clipboard);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._maps = inject(MapsPeopleService);
    this._zone = "";
    this._region = "";
    this._initial_token = "";
    this._domain_resolve = null;
  }
  async _handleNativeAuthRedirect(url) {
    const callback_url = new URL(url);
    const params = callback_url.searchParams;
    await closeNativeBrowser();
    markNativeAuthRedirectConsumed(url);
    const error = params.get("error");
    if (error || !params.get("code")) {
      const message = params.get("error_description") || error || "Sign in failed. Please try again.";
      console.warn("[AUTH] Native sign in failed.", message);
      setNativeAuthError(message);
      location.replace(`${location.origin}${location.pathname}`);
      return;
    }
    sessionStorage.setItem("ENGINE.auth.params", JSON.stringify({
      code: params.get("code"),
      state: params.get("state")
    }));
    console.warn("[AUTH] Reloading webview with auth code...");
    location.replace(`${location.origin}${location.pathname}?${params.toString()}`);
  }
  get debug() {
    return window.debug && this._settings.get("app.allow_debugging") === true;
  }
  get has_chat() {
    return this._settings.get("app.chat.enabled");
  }
  get has_uploads() {
    return this._settings.get("app.has_uploads") || false;
  }
  set mocks(value) {
    _mocks = value;
  }
  setInitialToken(token) {
    this._initial_token = token || "";
  }
  /** Called by the native domain overlay once the user has set a domain. */
  onNativeDomainSet() {
    NEEDS_DOMAIN.set(false);
    DOMAIN_ERROR.set("");
    AUTO_CONFIRM_DOMAIN.set(false);
    this._domain_resolve?.();
    this._domain_resolve = null;
  }
  async init(options = {}) {
    if (isNativeApp()) {
      hideNativeStatusBar();
      restoreNativePkceVerifier();
      await bindNativeAuthRedirects((url) => {
        this._handleNativeAuthRedirect(url).catch((error) => console.warn("[AUTH] Error handling redirect.", error));
      });
      const launch_url = await consumeNativeAuthRedirect();
      if (launch_url) {
        await this._handleNativeAuthRedirect(launch_url);
        return;
      }
    }
    setupCache(this._cache);
    log("APP", "MOCKS:", _mocks);
    if (_mocks) {
      const mocks_enabled = !location.href.includes("mock=false") && (localStorage.getItem("mock") === "true" || location.href.includes("mock=true") || location.origin.includes("demo.place.tech"));
      if (mocks_enabled) {
        setLoadingMessage("Initializing mocks...");
        _mocks();
      }
      this._hotkey.listen(["Control", "Alt", "Shift", "KeyM"], () => {
        localStorage.setItem("mock", `${localStorage.getItem("mock") !== "true"}`);
        location.reload();
      });
    } else {
      localStorage.removeItem("mock");
    }
    this._hotkey.listen(["Control", "Alt", "Shift", "KeyD"], () => {
      this._settings.saveUserSetting("dark_mode", !this._settings.get("dark_mode"));
      notifySuccess("Toggled dark mode.");
    });
    this._hotkey.listen(["Control", "Alt", "Shift", "KeyC"], () => {
      this._clipboard.copy(`${J()}|${Et()}`);
      notifySuccess("Successfully copied token.");
    });
    this._hotkey.listen(["Control", "Alt", "Shift", "KeyV"], () => {
      navigator.clipboard?.readText().then((tkn) => this._pasteToken(tkn));
    });
    this._hotkey.listen(["Control", "Alt", "Shift", "KeyF"], () => {
      navigator.clipboard?.readText().then((tkn) => this._pasteToken(tkn));
    });
    window.pasteToken = (t) => this._pasteToken(t);
    setLoadingMessage("Checking params...");
    this._route.queryParamMap.subscribe((params) => {
      if (params.has("hide_nav"))
        localStorage.setItem("PlaceOS.hide_nav", "true");
      if (params.has("lang")) {
        const locale = params.get("lang");
        this._locale?.setLocale(locale);
        localStorage.setItem("PLACEOS.locale", locale);
      }
      if (params.has("x-api-key")) {
        to(params.get("x-api-key"));
      }
      if (params.has("region_id")) {
        this._region = params.get("region_id");
      }
      if (params.has("building_id")) {
        this._zone = params.get("building_id");
      }
      if (this._region || this._zone)
        this._setZones();
    });
    setLoadingMessage("Initializing settings...");
    setNotifyOutlet(this._snackbar);
    setTranslationService(this._locale);
    await firstTruthyValueFrom(this._settings.initialised);
    setAppName(this._settings.get("app.short_name"));
    const settings = this._settings.get("composer") || {};
    settings.app_name = this._settings.get("app.name") || this._settings.get("app.short_name");
    settings.mock = !!this._settings.get("mock") || _mocks && location.origin.includes("demo.place.tech");
    if (START_QUERY) {
      const query = Ce(START_QUERY.substring(1));
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: query
      });
    }
    let confirm_managed = false;
    if (isNativeApp()) {
      setLoadingMessage("Checking managed configuration...");
      const { config: managed, changed } = await syncNativeManagedConfig();
      if (managed) {
        if (options.allow_mdm_restart && managed.restart_enabled) {
          scheduleNativeRestart(managed.restart_time);
        }
        confirm_managed = changed && !!managed.domain && !managed.skip_interactive_setup;
        AUTO_CONFIRM_DOMAIN.set(confirm_managed && !!options.allow_mdm_restart && !!managed.api_key && !!managed.system_id);
      }
    }
    let intune_token = "";
    if (isNativeApp()) {
      setLoadingMessage("Checking managed account...");
      const account = await getIntuneAccount();
      if (account) {
        intune_token = await getIntuneToken(account, this._settings.get("app.intune.scopes") || void 0);
        const email = `${account.username || ""}`.trim();
        if (email && !getNativeDomain()) {
          const domain = await lookupNativeDomainByEmail(email).catch(() => "");
          if (domain) {
            setNativeDomain(domain);
            setNativeEmail(email);
          }
        }
      }
    }
    while (isNativeApp()) {
      let domain = getNativeDomain();
      while (!domain || confirm_managed) {
        confirm_managed = false;
        setLoadingMessage("Waiting for server configuration...");
        NEEDS_DOMAIN.set(true);
        await new Promise((r) => this._domain_resolve = r);
        domain = getNativeDomain();
      }
      settings.domain = domain;
      settings.protocol = "https:";
      settings.use_domain = true;
      setLoadingMessage("Authenticating...");
      const auth_error = await setupPlace(settings).then(() => null).catch((_) => _);
      if (!auth_error) {
        const api_key = getNativeApiKey();
        const client_key = `${$i()}_x-api-key`;
        if (api_key)
          to(api_key);
        else if (localStorage.getItem(client_key)) {
          localStorage.removeItem(client_key);
          Cn();
        }
        if (intune_token)
          bi(intune_token);
        break;
      }
      log("APP", "Auth failed, resetting domain.", auth_error, "warn");
      clearNativeDomain();
      clearNativeApiKey();
      DOMAIN_ERROR.set(`Unable to connect to "${domain}". The server may be unavailable, or the email address may be for a different server. Try again.`);
    }
    if (isNativeApp() && !J(false)) {
      const boot_params = new URLSearchParams(START_QUERY);
      if (boot_params.has("code")) {
        console.warn("[AUTH] Auth code was present on load but the token exchange did not complete.", `State: "${boot_params.get("state")}"`, `Nonce: "${localStorage.getItem(`${$i()}_nonce`)}"`);
      }
    }
    if (isNativeApp() && !J(false) && !Et() && Mt()) {
      const auth_error = consumeNativeAuthError();
      if (auth_error) {
        setLoadingMessage("Waiting for sign in...");
        DOMAIN_ERROR.set(auth_error);
        NEEDS_DOMAIN.set(true);
        await new Promise((r) => this._domain_resolve = r);
      }
      setLoadingMessage("Opening sign in...");
      const auth_url = await createNativeAuthUrl(settings, $i());
      console.warn(`[AUTH] Opening sign in: ${auth_url}`);
      await openNativeBrowser(auth_url);
      return;
    }
    if (!isNativeApp()) {
      const teams_mode = await startTeamsHost();
      if (teams_mode)
        settings.local_login = teams_mode === "tab";
      setLoadingMessage("Authenticating...");
      await setupPlace(settings, AUTHORITY_WAIT_MS).catch((_) => console.error(_));
      if (teams_mode) {
        setLoadingMessage("Waiting for Microsoft sign in...");
        if (!await finishTeamsSignIn(teams_mode))
          return;
      }
    }
    if (this._initial_token)
      bi(this._initial_token);
    try {
      await withTimeout(this._org.waitUntilInitialised(), 5e4, "Organisation loading timed out.");
    } catch (error) {
      console.error(error);
      requestInitReload();
      return;
    }
    if (this._locale) {
      this._locale.zone_id = this._org.organisation.id;
      this._locale.init();
    }
    setupCache(this._cache, this._settings.get("service_worker") || {});
    try {
      await withTimeout(firstTruthyValueFrom(current_user), 3e4, "Current user loading timed out.");
    } catch (error) {
      console.error(error);
      this.onInitError();
      return;
    }
    clearNativePkceVerifier();
    this._initLocale();
    setInternalUserDomain(this._settings.get("app.internal_user_domain") || `@${currentUser()?.email?.split("@")[1]}`);
    this._initAnalytics();
    void initSentry(this._settings.get("app.sentry_dsn"), this._router);
    try {
      this._initFixedDevice();
    } catch {
      log("APP", "Failed to initialise background services.", void 0, "warn");
    }
    this._setZones();
    if (this._locale) {
      await Promise.race([
        this._locale.loaded(),
        new Promise((resolve) => setTimeout(resolve, 5e3))
      ]);
    }
    markInitialisationComplete();
  }
  onInitError() {
    if (Un() || currentUser()?.is_logged_in)
      return;
    if (isNativeApp() && getNativeApiKey()) {
      clearNativeApiKey();
      clearNativeDomain();
      localStorage.removeItem(`${$i()}_x-api-key`);
      Cn();
    } else if (!J(false))
      Cn();
    requestInitReload();
  }
  _initAnalytics() {
    const tracking_id = this._settings.get("app.analytics.tracking_id");
    if (!tracking_id)
      return;
    setLoadingMessage("Initialising analytics...");
    try {
      this._analytics.init(tracking_id);
      this._analytics.load(tracking_id);
      this._analytics.setUser(currentUser().id);
    } catch (error) {
      log("APP", "Failed to initialise analytics.", error, "warn");
    }
  }
  _initLocale() {
    setLoadingMessage("Loading locales...");
    try {
      let locale = localStorage.getItem("PLACEOS.locale");
      const locales = this._settings.get("app.locales") || [];
      if (locale) {
        this._locale?.setLocale(locale);
      } else {
        const list = navigator.languages;
        for (const lang of list) {
          locale = locales.find((_) => _.id === lang);
          if (!locale)
            locale = locales.find((_) => lang.includes(_.id));
          if (locale) {
            this._locale?.setLocale(lang);
            localStorage.setItem("PLACEOS.locale", lang);
            break;
          }
        }
      }
    } catch {
      log("APP", "Failed to initialise locale service.", void 0, "warn");
    }
  }
  _pasteToken(tkn) {
    const parts = tkn.split("|");
    const id = $i();
    localStorage.setItem(`${id}_access_token`, `${parts[0]}`);
    localStorage.setItem(`${id}_refresh_token`, `${parts[1]}`);
    localStorage.setItem(`${id}_expires_at`, `${addHours(/* @__PURE__ */ new Date(), 6).valueOf()}`);
    notifySuccess("Successfully pasted token.");
    setTimeout(() => location.reload(), 2e3);
  }
  _checkReload() {
    if (!hasNewVersion())
      return;
    setLoadingMessage("Checking for updates...");
    reloadForNewVersion();
  }
  async _initFixedDevice() {
    if (!_s())
      return;
    setLoadingMessage("Initialising as fixed device...");
    this.interval("auto-update-version", () => this._checkReload(), 15 * 1e3);
    await requestScreenWakeLock();
  }
  _setZones() {
    if (this._region || this._zone) {
      this._org.skipAutoSelection();
    }
    this.timeout("set_building+region", async () => {
      const building_list = this._org.building_list();
      let bld = building_list.find((b) => b.id === this._zone);
      const target_region_id = this._region || bld?.parent_id;
      const region = this._org.regions.find((b) => b.id === target_region_id);
      if (region)
        await this._org.setRegion(region);
      if (!bld && this._zone) {
        const building_list2 = this._org.building_list();
        bld = building_list2.find((b) => b.id === this._zone);
      }
      if (bld)
        this._org.setBuilding(bld, true);
    }, 1e3);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275PlaceOS_Service_BaseFactory;
      return function PlaceOS_Service_Factory(__ngFactoryType__) {
        return (\u0275PlaceOS_Service_BaseFactory || (\u0275PlaceOS_Service_BaseFactory = \u0275\u0275getInheritedFactory(_PlaceOS_Service)))(__ngFactoryType__ || _PlaceOS_Service);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PlaceOS_Service, factory: _PlaceOS_Service.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceOS_Service, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// libs/common/src/lib/org/organisation.service.ts
var log2 = scoped_log("ORG");
var ORG_CACHE_PREFIX = "PLACEOS.org";
var ZONE_CACHE_PREFIX = `${ORG_CACHE_PREFIX}.zones`;
var AUTHORITY_CACHE_KEY = `${ORG_CACHE_PREFIX}.authority`;
var OFFLINE_BOOT_DELAY = 10 * 1e3;
var ZONE_LOAD_TIMEOUT = 45 * 1e3;
var GEOLOCATION_TIMEOUT = 10 * 1e3;
var METADATA_CACHE_PREFIX = `${ORG_CACHE_PREFIX}.metadata`;
var MAX_CACHE_AGE2 = 7 * 24 * 60 * 60 * 1e3;
function cachedAuthority() {
  const auth = Mt();
  if (auth?.id) {
    const details = {
      id: auth.id,
      metadata_cache_id: `${auth.config?.["metadata_cache_id"] || ""}`
    };
    try {
      localStorage.setItem(AUTHORITY_CACHE_KEY, JSON.stringify(details));
    } catch {
    }
    return details;
  }
  try {
    return JSON.parse(localStorage.getItem(AUTHORITY_CACHE_KEY) || "null");
  } catch {
    return null;
  }
}
var OrganisationService = class _OrganisationService {
  get _refreshing() {
    return this.refreshing();
  }
  /** Mapping of organisation settings overrides */
  get settings() {
    return this._settings;
  }
  /** Mapping of regions to settings overrides */
  get region_settings() {
    return this._region_settings;
  }
  /** Mapping of buildings to settings overrides */
  get building_settings() {
    return this._building_settings;
  }
  /** Mapping region settings overrides */
  regionSettings(id = "") {
    const region = this._active_region();
    if (!id && region)
      id = region?.id;
    return this._region_settings ? this._region_settings[id] || {} : {};
  }
  /** Mapping building settings overrides */
  buildingSettings(bld_id = "") {
    if (!bld_id && this.building) {
      bld_id = this.building?.id || this.buildings[0]?.id;
    }
    return this._building_settings ? this._building_settings[bld_id] || {} : {};
  }
  /** Organisation data for the application */
  get organisation() {
    return this._organisation;
  }
  /** List of available regions */
  get regions() {
    return this._region_list();
  }
  /** Currently active region */
  get region() {
    return this._active_region();
  }
  set region(item) {
    this.setRegion(item);
  }
  /** Prevent automatic building/region selection from overriding externally set values */
  skipAutoSelection() {
    this._skip_auto_selection = true;
  }
  async setRegion(item) {
    const active_region = this._active_region();
    if (!item || active_region?.id === item?.id)
      return;
    this._active_region.set(item);
    await this.loadRegionData(item);
    this._setBuildingFromTimezone();
    if (!this._skip_auto_selection && this.building?.parent_id !== item.id && this.buildingsForRegion(item).length) {
      this.building = this.buildingsForRegion(item)[0];
    } else
      this._updateSettingOverrides();
    localStorage.setItem("PLACEOS.region", item.id);
  }
  /** List of available buildings */
  get buildings() {
    return this._building_list() || [];
  }
  /** Currently active building */
  get building() {
    return this._active_building();
  }
  set building(bld) {
    this.setBuilding(bld);
  }
  setBuilding(bld, save = false) {
    if (!(bld instanceof Object))
      return;
    this._active_building.set(bld);
    if (!this._service.get("dont_load_metadata")) {
      this.loadBuildingData(bld).then(() => this._updateSettingOverrides());
    }
    if (this.regions.length && this.region?.id !== bld.parent_id) {
      this.region = this.regions.find((_) => _.id === this.building.parent_id);
    }
    if (save)
      localStorage.setItem("PLACEOS.building", bld.id);
  }
  get timezone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  get currency_code() {
    return this._service.get("app.currency") || this.building?.currency || "USD";
  }
  /** Get binding value from the building/organisation */
  binding(name) {
    return this.building?.bindings[name] || this._organisation?.bindings[name];
  }
  module(name, default_mod_id = "System") {
    const binding = this.binding(name);
    const system_id = binding instanceof Object ? binding.id || binding.system_id : binding;
    const mod_id = (binding instanceof Object ? binding.mod || binding.module : "") || default_mod_id;
    return !system_id || !mod_id ? null : Gp(system_id, mod_id);
  }
  /** Get building by id */
  find(id) {
    return this._buildings_by_id().get(id);
  }
  /** List of available levels */
  get levels() {
    return this._level_list();
  }
  set limit_init(state) {
    this._limited_init.set(state);
  }
  constructor() {
    this._service = inject(SettingsService);
    this._router = inject(Router);
    this._injector = inject(Injector);
    this._initialised = signal(
      false,
      ...ngDevMode ? [{ debugName: "_initialised" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.initialised = this._initialised.asReadonly();
    this._region_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "_region_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._active_region = signal(
      new Region({ name: "Unknown" }),
      ...ngDevMode ? [{ debugName: "_active_region" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._building_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "_building_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._active_building = signal(
      new Building({ name: "Unknown" }),
      ...ngDevMode ? [{ debugName: "_active_building" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._level_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "_level_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._regions_by_id = computed(
      () => new Map(this._region_list().map((region) => [
        region.id,
        region
      ])),
      ...ngDevMode ? [{ debugName: "_regions_by_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._buildings_by_id = computed(
      () => new Map(this._building_list().map((building) => [
        building.id,
        building
      ])),
      ...ngDevMode ? [{ debugName: "_buildings_by_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._levels_by_id = computed(
      () => new Map(this._level_list().map((level) => [
        level.id,
        level
      ])),
      ...ngDevMode ? [{ debugName: "_levels_by_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._loaded_data = {};
    this._served_cache = false;
    this._refresh_count = signal(
      0,
      ...ngDevMode ? [{ debugName: "_refresh_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.refreshing = computed(
      () => this._refresh_count() > 0,
      ...ngDevMode ? [{ debugName: "refreshing" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._loaded_buildings = signal(
      [],
      ...ngDevMode ? [{ debugName: "_loaded_buildings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._limited_init = signal(
      false,
      ...ngDevMode ? [{ debugName: "_limited_init" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.app_key = `${(this._service.app_name || "workplace").toLowerCase()}_app`;
    this.region_list = this._region_list.asReadonly();
    this.building_list = this._building_list.asReadonly();
    this.level_list = this._level_list.asReadonly();
    this.active_region = this._active_region.asReadonly();
    this.active_building = this._active_building.asReadonly();
    this.active_building_loaded = computed(
      () => {
        if (this._service.get("dont_load_metadata"))
          return true;
        const id = this._active_building()?.id;
        return !id || this._loaded_buildings().includes(id);
      },
      ...ngDevMode ? [{ debugName: "active_building_loaded" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_buildings = computed(
      () => {
        const region = this._active_region();
        return region ? this.buildingsForRegion(region) : this.buildings;
      },
      ...ngDevMode ? [{ debugName: "active_buildings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_levels = computed(
      () => {
        const building = this._active_building();
        return building ? this.levelsForBuilding(building) : [];
      },
      ...ngDevMode ? [{ debugName: "active_levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._organisation = new Organisation();
    this._settings = [];
    this._region_settings = {};
    this._building_settings = {};
    this._skip_auto_selection = false;
    this._init_timer = null;
    this._zone_load_timer = null;
    this._override_timer = null;
    const online_state = io();
    const online = Yr(online_state, (_) => _);
    const start = Promise.race([
      online,
      new Promise((resolve) => setTimeout(resolve, OFFLINE_BOOT_DELAY))
    ]);
    start.then(() => this._scheduleInit());
    online_state.subscribe((is_online, was_online) => {
      if (is_online && !was_online)
        this._scheduleInit();
    }, { emitCurrent: false });
    effect(() => {
      this._active_region();
      const building = this._active_building();
      if (building)
        this._updateSettingOverrides();
    });
  }
  _scheduleInit() {
    if (this._init_timer)
      clearTimeout(this._init_timer);
    this._init_timer = setTimeout(() => {
      this._init_timer = null;
      if (!this._initialised()) {
        this._startZoneLoadTimer();
        this.init();
      }
    }, 1e3);
  }
  _startZoneLoadTimer() {
    if (this._zone_load_timer)
      return;
    this._zone_load_timer = setTimeout(() => {
      this._zone_load_timer = null;
      if (!this._initialised())
        requestInitReload();
    }, ZONE_LOAD_TIMEOUT);
  }
  _completeInit() {
    if (this._zone_load_timer)
      clearTimeout(this._zone_load_timer);
    this._zone_load_timer = null;
    this._initialised.set(true);
  }
  /** Resolve once the organisation data has finished initialising */
  async waitUntilInitialised() {
    await firstValueWhere(this.initialised, (state) => state, this._injector);
  }
  /**
   * Get level with a matching ID
   * @param id_list List of IDs to find a match
   */
  levelWithID(id_list) {
    for (const id of id_list || []) {
      const level = this._levels_by_id().get(id);
      if (level)
        return level;
    }
    return void 0;
  }
  /** Get the organisation location represented by a list of zone IDs. */
  locationWithID(id_list) {
    const level = this.levelWithID(id_list);
    const building = this._buildingWithID(id_list) || this._buildings_by_id().get(level?.parent_id);
    const region = this._regions_by_id().get(building?.parent_id);
    const label = [region, building, level].map((_) => _?.display_name || _?.name).filter((_) => !!_).join(" / ");
    return { level, building, region, label };
  }
  /** Load and return every building represented by the zone ID lists. */
  async loadBuildingsForZones(zone_lists) {
    const find_buildings = () => unique(zone_lists.map((zones) => this._buildingWithID(zones)).filter((building) => !!building), "id");
    let buildings = find_buildings();
    const has_missing_building = () => zone_lists.some((zones) => !this._buildingWithID(zones));
    if (has_missing_building()) {
      await this._loadAllBuildings();
      buildings = find_buildings();
    }
    return buildings;
  }
  /**
   * Get list of levels for the given building
   * @param bld Building to list levels for
   */
  levelsForBuilding(bld = this.building) {
    return this._sortLevels(this.levels.filter((lvl) => lvl.parent_id && lvl.parent_id === bld?.id));
  }
  /**
   * Get list of buildings for the given region
   * @param region Region to list buildings for
   */
  buildingsForRegion(region = this.region) {
    return this.buildings.filter((bld) => bld.parent_id === region?.id);
  }
  /**
   * Get list of levels for the given region
   * @param region Region to list levels for
   */
  levelsForRegion(region = this.region) {
    const building_ids = new Set(this.buildingsForRegion(region).map(({ id }) => id));
    return this._sortLevels(this.levels.filter((lvl) => lvl.parent_id && building_ids.has(lvl.parent_id)));
  }
  /** Get the first building represented by a list of zone IDs. */
  _buildingWithID(id_list) {
    for (const id of id_list || []) {
      const building = this._buildings_by_id().get(id);
      if (building)
        return building;
    }
    return void 0;
  }
  addZone(zone) {
    if (zone.tags.includes("region")) {
      const region = new Region(zone);
      const regions = this._region_list().filter((_) => _.id !== region.id);
      regions.push(region);
      this._region_list.set(regions);
    } else if (zone.tags.includes("building")) {
      const bld = new Building(zone);
      let buildings = this._building_list().filter((_) => _.id !== bld.id);
      buildings.push(bld);
      buildings = buildings.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
      this._building_list.set(buildings);
    } else if (zone.tags.includes("level")) {
      const lvl = new BuildingLevel(zone);
      let levels = this._level_list().filter((_) => _.id !== lvl.id);
      levels.push(lvl);
      levels = this._sortLevels(levels);
      this._level_list.set(levels);
    } else {
      console.warn("Unable to add zone as it is missing the required tag.", zone.id);
    }
  }
  _sortLevels(levels) {
    return [...levels].sort((a, b) => (a.parent_id || "").localeCompare(b.parent_id || "") || Number(a.tags.includes("parking")) - Number(b.tags.includes("parking")) || (a.name || "").localeCompare(b.name || "") || (a.display_name || "").localeCompare(b.display_name || ""));
  }
  removeZone(zone) {
    if (zone.tags.includes("region")) {
      const regions = this._region_list().filter((_) => _.id !== zone.id);
      this._region_list.set(regions);
    } else if (zone.tags.includes("building")) {
      const buildings = this._building_list().filter((_) => _.id !== zone.id);
      this._building_list.set(buildings);
    } else if (zone.tags.includes("level")) {
      const levels = this._level_list().filter((_) => _.id !== zone.id);
      this._level_list.set(levels);
    } else {
      console.warn("Unable to remove zone as it is missing the required tag.", zone.id);
    }
  }
  /** Clear cached org data and reload it from PlaceOS. Exposed via window.app.org in debug mode. */
  async reloadMetadata() {
    this._clearCache();
    this._loaded_data = {};
    this._loaded_buildings.set([]);
    await this.load();
  }
  async init(tries = 0) {
    if (this._limited_init()) {
      this._completeInit();
      return;
    }
    this._initialised.set(false);
    if (isPublicMode()) {
      await this.load().catch((err) => {
        console.warn("Organisation loading failed in public mode, using local public organisation data.", err);
        this._setPublicData();
      });
    } else {
      try {
        await this.load();
      } catch (err) {
        if (so() && navigator.onLine !== false) {
          notifyError("Error loading organisation data. Retrying...");
        } else {
          log2.warn("Unable to load organisation data while offline. Retrying...", err);
        }
        setTimeout(() => this.init(tries), Math.min(1e4, 300 * ++tries));
        return;
      }
    }
    if (window.debug) {
      if (!window.app)
        window.app = {};
      window.app.org = this;
      window.org = this;
    }
    this._completeInit();
    if (this._served_cache) {
      log2("Loaded from cache, refreshing organisation data...");
      this._served_cache = false;
      this._loaded_data = {};
      this._refresh(() => this.load());
    }
  }
  /**
   * Run a load straight against the API, ignoring any cached data, so the
   * displayed data is replaced with the latest. Runs in the background.
   */
  async _refresh(load) {
    this._refresh_count.update((count) => count + 1);
    await load().catch((err) => console.warn("Failed to refresh organisation data.", err));
    this._refresh_count.update((count) => count - 1);
  }
  _setPublicData() {
    const region_id = localStorage.getItem("PLACEOS.region") || "public";
    const building_id = localStorage.getItem("KIOSK.building") || localStorage.getItem("PLACEOS.building") || "public-building";
    const level_id = localStorage.getItem("KIOSK.level") || "public-level";
    const organisation = new Organisation({
      id: "public-org",
      name: "Public Organisation",
      tags: ["org"]
    });
    const region = new Region({
      id: region_id,
      name: "Public Region",
      display_name: "Public Region"
    });
    const building = new Building({
      id: building_id,
      parent_id: region.id,
      name: "Public Building",
      display_name: "Public Building"
    });
    const level = new BuildingLevel({
      id: level_id,
      parent_id: building.id,
      name: "Public Level",
      display_name: "Public Level"
    });
    this._organisation = organisation;
    this._region_list.set([region]);
    this._building_list.set([building]);
    this._level_list.set([level]);
    this._active_region.set(region);
    this._active_building.set(building);
    this._updateSettingOverrides();
  }
  /**
   * Initialise service data. When this is a background refresh, loading
   * messages and the default region/building selection are skipped so the
   * user's current view and selection are left alone.
   */
  async load() {
    const refreshing = this._refreshing;
    const loadingMessage = (message) => refreshing ? null : setLoadingMessage(message);
    loadingMessage("Loading organisation data...");
    await this.loadOrganisation();
    loadingMessage("Loading region data...");
    await this.loadRegions();
    if (!this._region_list().length) {
      loadingMessage("Loading building data...");
      const list = await this.loadBuildings();
      this._building_list.set(list);
    } else {
      loadingMessage("Loading region buildings data...");
      for (const region of this._region_list()) {
        const blds = await this.loadBuildings(region.id);
        if (blds.length) {
          this._building_list.set(blds);
          break;
        }
      }
    }
    loadingMessage("Loading zone settings...");
    await this.loadSettings();
    if (!this._building_list()?.length) {
      log2("Unable to find any building zones");
    }
    loadingMessage("Loading active building levels...");
    await this.loadLevels();
    if (refreshing) {
      if (this.region?.id)
        await this.loadRegionData(this.region);
      if (this.building?.id && !this._service.get("dont_load_metadata")) {
        await this.loadBuildingData(this.building);
      }
    }
    this._updateSettingOverrides();
  }
  /**
   * Load organisation data for application
   */
  async loadOrganisation() {
    const org_list = await this._queryZones({
      tags: "org",
      include_children_count: true
    });
    if (org_list.length) {
      const auth = Mt();
      const org = org_list.find((list) => Un() || list.id === auth?.config?.org_zone) || org_list[0];
      const load_metadata = !this._service.get("dont_load_metadata");
      const bindings = load_metadata ? (await this._bulkMetadataDetails("bindings", [org.id]))[org.id] : {};
      this._organisation = new Organisation(__spreadProps(__spreadValues({}, org), { bindings }));
    } else {
      log2("Unable to find organisation");
      this._router.navigate(["/misconfigured"]);
    }
  }
  /**
   * Load region data for the organisation
   */
  async loadRegions() {
    const list = (await this._queryZones({
      tags: "region",
      parent_id: this._organisation?.id || "",
      limit: 200
    }).catch(() => [])).map((_) => new Region(_));
    this._region_list.set(list);
  }
  async loadRegionData(region) {
    if (this._loaded_data[region.id] && !this._refreshing)
      return;
    const load_metadata = !this._service.get("dont_load_metadata");
    const from_cache = this._zoneDataCached(region.id);
    const [settings, bindings, buildings] = await Promise.all([
      load_metadata ? this._bulkMetadataDetails(this.app_key, [region.id]).then((_) => _[region.id]) : {},
      load_metadata ? this._bulkMetadataDetails("bindings", [region.id]).then((_) => _[region.id]) : {},
      this.loadBuildings(region.id)
    ]);
    const building_list = unique([...this._building_list(), ...buildings], "id");
    this._building_list.set(building_list);
    this._loaded_data[region.id] = true;
    region.bindings = bindings;
    this._region_settings[region.id] = settings;
    if (from_cache)
      this._refresh(() => this.loadRegionData(region));
  }
  /**
   * Load buildings data for the organisation
   */
  async loadBuildings(parent_id = this._organisation?.id) {
    const building_list = (await this._queryZones({
      tags: "building",
      parent_id,
      limit: 500
    })).map((_) => new Building(_));
    return building_list;
  }
  async loadBuildingData(bld) {
    if (!bld || this._loaded_data[bld.id] && !this._refreshing)
      return;
    const from_cache = this._zoneDataCached(bld.id);
    const [settings, bindings, booking_rules, driver_settings] = await Promise.all([
      this._bulkMetadataDetails(this.app_key, [bld.id]).then((_) => _[bld.id]),
      this._bulkMetadataDetails("bindings", [bld.id]).then((_) => _[bld.id]),
      this._bulkMetadataDetails("booking_rules", [bld.id]).then((_) => _[bld.id])
      // lastValueFrom(
      //     (this.app_key.includes('concierge')
      //         ? querySettings({ parent_id: bld.id })
      //         : of({ data: {} as any })
      //     ).pipe(
      //         catchError(() => of({ data: {} as any })),
      //         map((_) => {
      //             try {
      //                 return parseYAML(
      //                     _?.data.find(
      //                         (_) =>
      //                             _.encryption_level ===
      //                             EncryptionLevel.None,
      //                     ) || { settings_string: '' },
      //                 );
      //             } catch {
      //                 return {};
      //             }
      //         }),
      //     ),
      // ),
    ]);
    this._building_settings[bld.id] = __spreadValues(__spreadValues({}, driver_settings || {}), settings || {});
    bld.bindings = bindings;
    bld.booking_rules = booking_rules;
    this._loaded_data[bld.id] = true;
    this._loaded_buildings.update((ids) => ids.includes(bld.id) ? ids : [...ids, bld.id]);
    this._updateSettingOverrides();
    if (from_cache)
      this._refresh(() => this.loadBuildingData(bld));
  }
  /**
   * Whether the zone's settings metadata would be loaded from the cache.
   * Always false while refreshing, so a refresh never schedules another one.
   */
  _zoneDataCached(id) {
    return !!this._getCachedItem(this._metadataCacheKey(this.app_key, [id]));
  }
  /**
   * Load levels data for the buildings
   */
  async loadLevels() {
    let level_list = await this._queryZones({
      tags: "level",
      limit: 2500
    });
    level_list = level_list.filter((_) => _.parent_id);
    if (!level_list?.length) {
      this._router.navigate(["/misconfigured"]);
    }
    let levels = level_list.map((lvl) => new BuildingLevel(lvl));
    levels = levels.sort((a, b) => Number(a.tags.includes("parking")) - Number(b.tags.includes("parking")) || (a.name || "").localeCompare(b.name || ""));
    this._level_list.set(levels);
  }
  async loadSettings() {
    if (!this._organisation)
      return;
    const org_id = this._organisation?.id;
    const app_settings = (await this._bulkMetadataDetails(this.app_key, [org_id]))[org_id];
    const global_settings = (await this._bulkMetadataDetails("settings", [org_id]))[org_id];
    this._settings = [global_settings, app_settings];
    if (this._override_timer) {
      clearTimeout(this._override_timer);
      this._override_timer = null;
    }
    this._service.setOverrides([...this._settings]);
    if (!this._refreshing)
      await this._setDefaultBuilding();
    this._updateSettingOverrides();
  }
  /** Select the building physically closest to the user's current location */
  async _setBuildingFromGeolocation() {
    return new Promise((resolve) => {
      let settled = false;
      const finish = (building) => {
        if (settled)
          return;
        settled = true;
        clearTimeout(timer2);
        resolve(building);
      };
      const timer2 = setTimeout(() => finish(null), GEOLOCATION_TIMEOUT);
      navigator.geolocation.getCurrentPosition((position) => {
        if (settled)
          return;
        const { latitude, longitude } = position.coords;
        const closest = this._closestBuilding(latitude, longitude);
        if (closest)
          this.building = closest;
        finish(closest);
      }, () => finish(null), { timeout: GEOLOCATION_TIMEOUT });
    });
  }
  /** Find the building nearest to the given coordinates */
  _closestBuilding(latitude, longitude) {
    let closest = null;
    let closest_distance = Infinity;
    for (const bld of this.buildings) {
      if (!bld.location || bld.location === "0,0")
        continue;
      const [lat, long] = bld.location.split(",").map(Number);
      const distance = Math.hypot(latitude - lat, longitude - long);
      if (distance < closest_distance) {
        closest = bld;
        closest_distance = distance;
      }
    }
    return closest;
  }
  /** Find a building by id, loading every region's buildings if not already present */
  async _findBuilding(id) {
    const loaded = this.buildings.find((bld) => bld.id === id);
    if (loaded)
      return loaded;
    await this._loadAllBuildings();
    return this.buildings.find((bld) => bld.id === id) || null;
  }
  /** Load the buildings for every region into the building list */
  async _loadAllBuildings() {
    const lists = await Promise.all(this.regions.map((region) => this.loadBuildings(region.id)));
    this._building_list.set(unique([...this._building_list(), ...lists.flat()], "id"));
  }
  async _setDefaultBuilding() {
    log2("No building set yet, applying defaults...");
    const region_id = localStorage.getItem(`PLACEOS.region`);
    const building_id = sessionStorage.getItem(`PLACEOS.building`) || localStorage.getItem(`PLACEOS.building`);
    const default_id = this._service.get("app.default_building");
    if (!this.buildings.length && !region_id)
      return;
    await (region_id ? this.setRegion(this._region_list().find((_) => _.id === region_id)) : this._setRegionFromTimezone());
    if (!this.buildings.length)
      return;
    const previous = this.buildings.find((_) => _.id === building_id);
    if (previous) {
      log2("Defaulting building to previously selected building.");
      this.building = previous;
      return;
    }
    if (default_id) {
      const configured = await this._findBuilding(default_id);
      if (configured) {
        log2("Applied default building from app settings.");
        const region = this.regions.find((_) => _.id === configured.parent_id);
        if (region)
          await this.setRegion(region);
        this.building = configured;
        return;
      }
      log2(`Configured default building "${default_id}" was not found.`);
    }
    const use_location = !!this._service.get("app.use_geolocation");
    if (use_location && "geolocation" in navigator) {
      const closest = await this._setBuildingFromGeolocation();
      if (closest) {
        log2("Applied default building from user location.");
        return;
      }
    }
    this._setBuildingFromTimezone();
    if (this.building?.id)
      return;
    log2("No default building matched, initialising to first building.");
    this.building = this.buildings[0];
  }
  async _setRegionFromTimezone() {
    const region = this._matchByTimezone(this.regions);
    if (region)
      await this.setRegion(region);
  }
  _setBuildingFromTimezone() {
    if (this._skip_auto_selection)
      return;
    const bld_list = this.buildings.filter((bld) => !this.region || bld.parent_id === this.region?.id);
    const building = this._matchByTimezone(bld_list);
    if (building) {
      this.building = building;
      log2("Applied default building from user's timezone.");
    }
  }
  /** Match the item whose timezone equals the user's, else one in the same region */
  _matchByTimezone(list) {
    const timezone = this.timezone;
    const exact = list.find((_) => _.timezone === timezone);
    if (exact)
      return exact;
    const tz_start = timezone.split("/")[0];
    return list.find((_) => _.timezone?.startsWith(tz_start));
  }
  _updateSettingOverrides() {
    if (this._override_timer)
      clearTimeout(this._override_timer);
    this._override_timer = setTimeout(() => this._service.setOverrides([
      this.buildingSettings(this.building?.id),
      this.regionSettings(this.region?.id),
      ...this._settings
    ]), 300);
  }
  async _bulkMetadataDetails(name, ids) {
    const parent_ids = ids.filter(Boolean).join(",");
    if (!parent_ids)
      return {};
    const cache_key = this._metadataCacheKey(name, ids);
    const cached_metadata = this._getCachedItem(cache_key);
    if (cached_metadata)
      return cached_metadata;
    const metadata = await _c(name, { parent_ids }).catch((err) => err?.status === 404 ? this._individualMetadata(name, ids) : {});
    const metadata_details = ids.reduce((map2, id) => {
      map2[id] = metadata[id]?.details || {};
      return map2;
    }, {});
    this._setCachedItem(cache_key, metadata_details);
    return metadata_details;
  }
  /** Fallback for backends without the bulk metadata endpoint (404) */
  async _individualMetadata(name, ids) {
    const items = await Promise.all(ids.filter(Boolean).map((id) => ac(id, name).then((item) => [id, item], () => [id, null])));
    const metadata = {};
    for (const [id, item] of items) {
      if (item)
        metadata[id] = item;
    }
    return metadata;
  }
  async _queryZones(params) {
    const cache_key = this._zoneCacheKey(params);
    const cached_zones = this._getCachedItem(cache_key);
    if (cached_zones)
      return cached_zones;
    const zones = (await dh(__spreadProps(__spreadValues({}, params), {
      authority_id: Mt()?.id
    }))).data || [];
    this._setCachedItem(cache_key, zones);
    return zones;
  }
  _metadataCacheKey(name, ids) {
    const auth = cachedAuthority();
    const parent_ids = ids.filter(Boolean).sort().join(",");
    return `${METADATA_CACHE_PREFIX}.${auth?.id || "default"}.${name}.${parent_ids}`;
  }
  _zoneCacheKey(params) {
    const auth = cachedAuthority();
    const sorted_params = Object.keys(params).sort().reduce((cache_params, key) => {
      cache_params[key] = params[key];
      return cache_params;
    }, {});
    return `${ZONE_CACHE_PREFIX}.${auth?.id || "default"}.${JSON.stringify(sorted_params)}`;
  }
  _getCachedItem(cache_key) {
    if (this._refreshing)
      return null;
    try {
      const cached_item = JSON.parse(localStorage.getItem(cache_key) || "null");
      if (!cached_item)
        return null;
      if (cached_item.metadata_cache_id !== this._metadataCacheID() || cached_item.cached_at + MAX_CACHE_AGE2 < Date.now()) {
        localStorage.removeItem(cache_key);
        return null;
      }
      this._served_cache = true;
      return cached_item.data;
    } catch {
      localStorage.removeItem(cache_key);
      return null;
    }
  }
  _setCachedItem(cache_key, data) {
    const cached_item = {
      cached_at: Date.now(),
      metadata_cache_id: this._metadataCacheID(),
      data
    };
    const value = JSON.stringify(cached_item);
    try {
      localStorage.setItem(cache_key, value);
    } catch {
      this._clearCache();
      try {
        localStorage.setItem(cache_key, value);
      } catch {
      }
    }
  }
  _metadataCacheID() {
    return `${cachedAuthority()?.metadata_cache_id || ""}`;
  }
  _clearCache() {
    for (const store of [localStorage, sessionStorage]) {
      for (let i = store.length - 1; i >= 0; i--) {
        const key = store.key(i);
        if (key?.startsWith(ORG_CACHE_PREFIX))
          store.removeItem(key);
      }
    }
  }
  static {
    this.\u0275fac = function OrganisationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrganisationService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrganisationService, factory: _OrganisationService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganisationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/common/src/lib/recurrence.ts
var WeekOfMonth;
(function(WeekOfMonth2) {
  WeekOfMonth2[WeekOfMonth2["First"] = 1] = "First";
  WeekOfMonth2[WeekOfMonth2["Second"] = 2] = "Second";
  WeekOfMonth2[WeekOfMonth2["Third"] = 3] = "Third";
  WeekOfMonth2[WeekOfMonth2["Fourth"] = 4] = "Fourth";
  WeekOfMonth2[WeekOfMonth2["Fifth"] = 5] = "Fifth";
  WeekOfMonth2[WeekOfMonth2["Last"] = -1] = "Last";
  WeekOfMonth2[WeekOfMonth2["SecondLast"] = -2] = "SecondLast";
  WeekOfMonth2[WeekOfMonth2["ThirdLast"] = -3] = "ThirdLast";
  WeekOfMonth2[WeekOfMonth2["FourthLast"] = -4] = "FourthLast";
  WeekOfMonth2[WeekOfMonth2["FifthLast"] = -5] = "FifthLast";
})(WeekOfMonth || (WeekOfMonth = {}));
var RecurrDays;
(function(RecurrDays2) {
  RecurrDays2[RecurrDays2["SUNDAY"] = 1] = "SUNDAY";
  RecurrDays2[RecurrDays2["MONDAY"] = 2] = "MONDAY";
  RecurrDays2[RecurrDays2["TUESDAY"] = 4] = "TUESDAY";
  RecurrDays2[RecurrDays2["WEDNESDAY"] = 8] = "WEDNESDAY";
  RecurrDays2[RecurrDays2["THURSDAY"] = 16] = "THURSDAY";
  RecurrDays2[RecurrDays2["FRIDAY"] = 32] = "FRIDAY";
  RecurrDays2[RecurrDays2["SATURDAY"] = 64] = "SATURDAY";
  RecurrDays2[RecurrDays2["ALL"] = 127] = "ALL";
})(RecurrDays || (RecurrDays = {}));
var DAYS_OF_WEEK_INDEX = [
  RecurrDays.SUNDAY,
  RecurrDays.MONDAY,
  RecurrDays.TUESDAY,
  RecurrDays.WEDNESDAY,
  RecurrDays.THURSDAY,
  RecurrDays.FRIDAY,
  RecurrDays.SATURDAY
];
var WEEK_MS = 7 * 24 * 60 * 60 * 1e3;
function weekOfMonth(date) {
  const date_obj = new Date(date);
  const day = date_obj.getDate();
  const week = Math.floor(day / 7) + (day % 7 ? 1 : 0);
  if (week === 4 && day >= 25 || week === 5)
    return -1;
  return week;
}
function monthlyWeekdayStart(date, week, day_of_week) {
  const date_obj = new Date(date);
  const year = date_obj.getFullYear();
  const month = date_obj.getMonth();
  let day_of_month;
  if (week < 0) {
    const last_day = new Date(year, month + 1, 0);
    day_of_month = last_day.getDate() - (last_day.getDay() - day_of_week + 7) % 7 + (week + 1) * 7;
  } else {
    const first_day = new Date(year, month, 1);
    day_of_month = 1 + (day_of_week - first_day.getDay() + 7) % 7 + (week - 1) * 7;
  }
  const recurrence_date = new Date(date);
  recurrence_date.setDate(day_of_month);
  if (recurrence_date.getMonth() !== month) {
    recurrence_date.setDate(day_of_month - 7);
  }
  return recurrence_date.valueOf();
}
function startOfWeekMs(date) {
  const date_obj = new Date(date);
  date_obj.setDate(date_obj.getDate() - date_obj.getDay());
  date_obj.setHours(0, 0, 0, 0);
  return date_obj.valueOf();
}
function validWeekdays(days) {
  if (!days?.size)
    return [];
  return Array.from(days).filter((day) => day >= 0 && day < 7).sort((a, b) => a - b);
}
function recurrenceInstanceCount(value) {
  const count = typeof value === "number" ? value : typeof value === "string" ? Number(value) : NaN;
  return Number.isFinite(count) && count >= 1 ? Math.floor(count) : void 0;
}
function isWeeklyInstance(date, start_date, interval, weekdays) {
  const day = new Date(date).getDay();
  const days = validWeekdays(weekdays);
  if (days.length && !days.includes(day))
    return false;
  const weeks = Math.floor((startOfWeekMs(date) - startOfWeekMs(start_date)) / WEEK_MS);
  return weeks >= 0 && weeks % Math.max(interval, 1) === 0;
}
function firstRecurrenceInstance(recurrence, date = Date.now()) {
  if (recurrence.type === "weekly") {
    for (let offset = 0; offset < 7 * Math.max(recurrence.interval, 1); offset++) {
      const candidate = addDays(date, offset).valueOf();
      if (isWeeklyInstance(candidate, date, recurrence.interval, recurrence.weekdays)) {
        return candidate;
      }
    }
  }
  if (recurrence.type === "monthly" && recurrence.monthly_type === "day_of_week" && recurrence.weekdays?.size) {
    const day = validWeekdays(recurrence.weekdays)[0];
    const week = recurrence.week || weekOfMonth(date);
    for (let offset = 0; offset <= Math.max(recurrence.interval, 1); offset++) {
      const candidate = monthlyWeekdayStart(addMonths(date, offset).valueOf(), week, day);
      if (candidate >= date)
        return candidate;
    }
  }
  return date;
}
function recurrenceEndDate(recurrence, date = Date.now()) {
  const instances = Math.max((recurrenceInstanceCount(recurrence.end_instances) || 1) - 1, 0);
  const interval = Math.max(recurrence.interval, 1);
  const first_instance = firstRecurrenceInstance(recurrence, date);
  if (recurrence.type === "daily") {
    return endOfDay(addDays(first_instance, interval * instances)).valueOf();
  }
  if (recurrence.type === "weekly") {
    const days = validWeekdays(recurrence.weekdays);
    if (days.length > 1) {
      let count = 0;
      let candidate = first_instance;
      while (count < instances) {
        candidate = addDays(candidate, 1).valueOf();
        if (isWeeklyInstance(candidate, date, interval, recurrence.weekdays)) {
          count++;
        }
      }
      return endOfDay(candidate).valueOf();
    }
    return endOfDay(addWeeks(first_instance, interval * instances)).valueOf();
  }
  if (recurrence.type === "monthly" && recurrence.monthly_type === "day_of_week" && recurrence.weekdays?.size) {
    const day = validWeekdays(recurrence.weekdays)[0];
    const week = recurrence.week || weekOfMonth(date);
    return endOfDay(monthlyWeekdayStart(addMonths(first_instance, interval * instances).valueOf(), week, day)).valueOf();
  }
  if (recurrence.type === "yearly") {
    return endOfDay(addYears(first_instance, interval * instances)).valueOf();
  }
  return endOfDay(addMonths(first_instance, interval * instances)).valueOf();
}
function fromEventRecurrence(r) {
  if (!r.pattern || r._pattern === "none") {
    return {
      _custom: false,
      type: "none",
      interval: 1,
      end_type: "never"
    };
  }
  const occurrences = recurrenceInstanceCount(r.occurrences);
  const recurr = {
    _custom: r._pattern == "custom_display",
    type: r.pattern,
    interval: r.interval || 1,
    end_type: r._end_type ?? (occurrences ? "instances" : r.end ? "date" : "never")
  };
  if (r.end)
    recurr.end_date = r.end;
  if (occurrences)
    recurr.end_instances = occurrences;
  if (r.pattern === "weekly" && r.days_of_week?.length) {
    recurr.weekdays = new Set(r.days_of_week);
  }
  if (r.pattern === "monthly") {
    recurr.type = "monthly";
    recurr.monthly_type = "day_of_week";
    if (r.days_of_week?.length) {
      recurr.weekdays = new Set(r.days_of_week);
    }
    if (r.nth_of_month) {
      recurr.week = r.nth_of_month;
    } else if (r.start) {
      recurr.week = weekOfMonth(r.start);
    }
  }
  if (r.pattern === "month_day" && r.days_of_week?.length) {
    recurr.type = "monthly";
    recurr.monthly_type = "day_of_week";
    recurr.weekdays = new Set(r.days_of_week);
    if (r.nth_of_month) {
      recurr.week = r.nth_of_month;
    } else if (r.start) {
      recurr.week = weekOfMonth(r.start);
    }
  } else if (r.pattern === "month_day") {
    recurr.type = "monthly";
    recurr.monthly_type = "day_of_month";
  }
  return recurr;
}
function fromBookingRecurrence(r) {
  if (!r.recurrence_type || r.recurrence_type === "none") {
    return {
      _custom: r.recurrence_custom,
      type: "none",
      interval: 1,
      end_type: "never"
    };
  }
  const instances = recurrenceInstanceCount(r.recurrence_instances);
  const recurr = {
    _custom: r.recurrence_custom,
    type: r.recurrence_type,
    interval: r.recurrence_interval || 1,
    end_type: instances ? "instances" : r.recurrence_end ? "date" : "never"
  };
  if (r.recurrence_end) {
    recurr.end_date = r.recurrence_end * 1e3;
  }
  if (instances) {
    recurr.end_instances = instances;
  }
  if (r.recurrence_type === "daily" && r.recurrence_days) {
    const weekdays = /* @__PURE__ */ new Set();
    for (let i = 0; i < 7; i++) {
      if (r.recurrence_days & 1 << i) {
        weekdays.add(i);
      }
    }
    recurr.weekdays = weekdays;
    if (weekdays.size < 7)
      recurr.type = "weekly";
  }
  if (r.recurrence_type === "monthly") {
    recurr.monthly_type = "day_of_week";
    if (r.recurrence_days) {
      const weekdays = /* @__PURE__ */ new Set();
      for (let i = 0; i < 7; i++) {
        if (r.recurrence_days & DAYS_OF_WEEK_INDEX[i]) {
          weekdays.add(i);
        }
      }
      recurr.weekdays = weekdays;
    }
    if (r.recurrence_nth_of_month) {
      recurr.week = r.recurrence_nth_of_month;
    }
  }
  return recurr;
}
function toBookingRecurrence(r, date = Date.now()) {
  if (r.type === "none") {
    return {
      recurrence_custom: false,
      recurrence_type: "none",
      recurrence_days: void 0,
      recurrence_nth_of_month: void 0,
      recurrence_interval: void 0,
      recurrence_end: void 0,
      recurrence_instances: void 0
    };
  }
  const booking = {
    recurrence_custom: r._custom,
    recurrence_type: r.type === "yearly" ? "monthly" : r.type,
    recurrence_days: void 0,
    recurrence_nth_of_month: void 0,
    recurrence_interval: r.type === "yearly" ? r.interval * 12 : r.interval,
    recurrence_end: void 0,
    recurrence_instances: void 0
  };
  if (r.end_type === "date" && r.end_date) {
    booking.recurrence_end = getUnixTime(r.end_date);
  } else if (r.end_type === "instances") {
    booking.recurrence_instances = recurrenceInstanceCount(r.end_instances);
    booking.recurrence_end = getUnixTime(recurrenceEndDate(r, date));
  }
  if (r.type === "daily") {
    booking.recurrence_days = RecurrDays.ALL;
  }
  if (r.type === "weekly" && r.weekdays) {
    let days = 0;
    r.weekdays.forEach((day) => {
      days |= DAYS_OF_WEEK_INDEX[day];
    });
    booking.recurrence_days = days;
    booking.recurrence_type = "daily";
  }
  if ((r.type === "monthly" || r.type === "yearly") && r.weekdays) {
    let days = 0;
    r.weekdays.forEach((day) => {
      days |= 1 << day;
    });
    booking.recurrence_days = days;
  }
  if ((r.type === "monthly" || r.type === "yearly") && r.week) {
    booking.recurrence_nth_of_month = r.week;
  }
  return booking;
}
function formatRecurrence(recurrence, selected_date = Date.now()) {
  const { type, interval, weekdays, week, monthly_type, end_type, end_date, end_instances } = recurrence;
  const safe_interval = interval > 0 ? interval : 1;
  const selected_date_obj = new Date(selected_date);
  const selected_day = selected_date_obj.getDay();
  const selected_day_of_month = selected_date_obj.getDate();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const weekNames = {
    [WeekOfMonth.First]: "First",
    [WeekOfMonth.Second]: "Second",
    [WeekOfMonth.Third]: "Third",
    [WeekOfMonth.Fourth]: "Fourth",
    [WeekOfMonth.Fifth]: "Fifth",
    [WeekOfMonth.Last]: "Last",
    [WeekOfMonth.SecondLast]: "Second Last",
    [WeekOfMonth.ThirdLast]: "Third Last",
    [WeekOfMonth.FourthLast]: "Fourth Last",
    [WeekOfMonth.FifthLast]: "Fifth Last"
  };
  function formatList(items) {
    if (items.length === 0)
      return "";
    if (items.length === 1)
      return items[0];
    return items.slice(0, -1).join(", ") + " and " + items[items.length - 1];
  }
  function plural(n, singular) {
    return n > 1 ? singular + "s" : singular;
  }
  function validWeekdays2(days) {
    if (!days?.size)
      return [];
    return Array.from(days).filter((day) => day >= 0 && day < 7).sort((a, b) => a - b);
  }
  function selectedWeek() {
    const day = selected_date_obj.getDate();
    const week2 = Math.floor(day / 7) + (day % 7 ? 1 : 0);
    if (week2 === 4 && day >= 25 || week2 === 5)
      return -1;
    return week2;
  }
  function formatEnd() {
    switch (end_type) {
      case "never":
        return "";
      case "date":
        if (!end_date)
          return "";
        return ` until ${format(end_date, "dd MMM yyyy")}`;
      case "instances": {
        const count = recurrenceInstanceCount(end_instances);
        if (!count) {
          return end_date ? ` until ${format(end_date, "dd MMM yyyy")}` : "";
        }
        return ` ends after ${count} ${plural(count, "instance")}${end_date ? ` (${format(end_date, "dd MMM yyyy")})` : ""}`;
      }
    }
  }
  let result;
  switch (type) {
    case "none":
      result = "";
      break;
    case "daily":
      result = `Every ${safe_interval} ${plural(safe_interval, "day")}`;
      break;
    case "weekly": {
      const days = validWeekdays2(weekdays).length ? formatList(validWeekdays2(weekdays).map((d) => dayNames[d])) : dayNames[selected_day];
      result = `Every ${safe_interval} ${plural(safe_interval, "week")}${days ? " on " + days : ""}`;
      break;
    }
    case "monthly": {
      const recurrence_days = validWeekdays2(weekdays);
      const week_value = week || selectedWeek();
      if (monthly_type === "day_of_week") {
        const days = recurrence_days.length ? formatList(recurrence_days.map((d) => dayNames[d])) : dayNames[selected_day];
        const week_name = weekNames[week_value] || weekNames[selectedWeek()];
        result = `Every ${safe_interval} ${plural(safe_interval, "month")} on the ${week_name}${days ? " " + days : ""}`;
      } else if (monthly_type === "day_of_month") {
        result = `Every ${safe_interval} ${plural(safe_interval, "month")} on day ${selected_day_of_month}`;
      } else {
        result = `Every ${safe_interval} ${plural(safe_interval, "month")} on day ${selected_day_of_month}`;
      }
      break;
    }
    case "yearly":
      result = `Every ${safe_interval} ${plural(safe_interval, "year")} on ${format(selected_date_obj, "d MMM")}`;
      break;
    default:
      result = "Unsupported recurrence type";
  }
  return result + formatEnd();
}

// libs/common/src/lib/remote-logging.service.ts
function hookMethod(rootObject, functionToHook, hookingFunction) {
  var previousFunction = rootObject[functionToHook];
  rootObject[functionToHook] = (...args) => {
    hookingFunction(args);
    previousFunction.call(rootObject, ...args);
  };
  return previousFunction;
}
var DEVICE_ID = localStorage.getItem("PLACEOS.DEVICE_ID") || `DEV-${randomString(8)}`;
var RemoteLoggingService = class _RemoteLoggingService extends AsyncHandler {
  setMetadata(metadata) {
  }
  constructor() {
    super();
    this._disable_handling = false;
    this._system_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "_system_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._logging_system = signal(
      "",
      ...ngDevMode ? [{ debugName: "_logging_system" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._event_history = signal(
      [],
      ...ngDevMode ? [{ debugName: "_event_history" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._metadata = null;
    this.history = this._event_history.asReadonly();
    localStorage.setItem("PLACEOS.DEVICE_ID", DEVICE_ID);
    this._patchConsoleMethods();
    log("Logger", "Remote logging initialised...");
  }
  setSystem(id) {
    this._system_id.set(id);
    if (id)
      this._bindTo(id, "enabled");
  }
  _patchConsoleMethods() {
    const types = [
      "log",
      "debug",
      "info",
      "warn",
      "error"
    ];
    for (const key of types) {
      hookMethod(console, key, (...args) => this._handleEvent(key, args));
    }
  }
  _handleEvent(type, data, event_type = "console") {
    if (data.includes('"Logger"') || this._disable_handling)
      return;
    const blob = [...data[0]];
    blob[0] = typeof blob[0] === "string" ? blob[0].replace(/\%c/g, "") : blob[0];
    const event = {
      id: `${event_type}-${randomInt(9999999999)}`,
      device_id: DEVICE_ID,
      type: event_type,
      subtype: type,
      timestamp: Date.now(),
      raw: data,
      data: blob.filter((_) => typeof _ !== "string" || !_.startsWith("color:")),
      metadata: this._metadata || null
    };
    this._event_history.update((history) => [...history, event].slice(-2e4));
    const system_id = this._logging_system();
    if (!system_id)
      return;
    this._disable_handling = true;
    Gp(system_id, "Logger").execute("post_event", [event]).catch().finally(() => this._disable_handling = false);
  }
  /** List to binding */
  _bindTo(id, name, mod = "Logger") {
    const module = Gp(id, mod).variable(name);
    this.subscription(`bind:${name}`, module.bind());
    this.subscription(`listen:${name}`, module.listen().subscribe((enabled) => {
      this._logging_system.set(enabled ? id : "");
    }));
  }
  static {
    this.\u0275fac = function RemoteLoggingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RemoteLoggingService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RemoteLoggingService, factory: _RemoteLoggingService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RemoteLoggingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/common/src/lib/uploads.service.ts
var UploadCancelledError = class extends Error {
  constructor() {
    super("Upload cancelled");
    this.name = "UploadCancelledError";
  }
};
var UploadFailedError = class extends Error {
  constructor(message, details) {
    super(message);
    this.details = details;
    this.name = "UploadFailedError";
  }
};
var loadCloudUploads = () => import("./index.es-LX6NVZBS.js");
var UPLOAD_RETRY_ATTEMPTS = 3;
function uploadStateError(state) {
  return state?.error || "Upload failed";
}
function uploadFailure(details) {
  if (details instanceof Error)
    return details;
  return new UploadFailedError(details?.error || "Upload failed", details);
}
var UPLOAD_PERMISSIONS_MODAL = new InjectionToken("UploadPermissionsModalComponent");
var UploadsService = class _UploadsService extends AsyncHandler {
  constructor() {
    super();
    this._injector = inject(EnvironmentInjector);
    this._permissions_modal = inject(UPLOAD_PERMISSIONS_MODAL, {
      optional: true
    });
    this._upload_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "_upload_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.upload_list = this._upload_list.asReadonly();
    this._token_refresh = null;
    if (localStorage) {
      this._upload_list.set(JSON.parse(localStorage.getItem("BACKOFFICE.uploads") || "[]"));
    }
  }
  init(tries = 1) {
    this.timeout("init_uploads", () => {
      this._initUploads().catch(() => this.timeout("init_uploads", () => this.init(tries += 1), 1e3 * tries));
    });
  }
  clearList() {
    const in_progress_list = this._upload_list().filter((file) => file.progress < 100 && !file.error);
    this._upload_list.set(in_progress_list);
  }
  async uploadFileWithPermissions(file, default_public = false) {
    if (!this._permissions_modal) {
      log("UPLOAD", "Permissions modal not initialized", void 0, "warn");
      return this.uploadFile(file, default_public);
    }
    const details = await this._askPermissions(file, default_public);
    return this.uploadFile(details.file, details.is_public, details.permissions);
  }
  uploadFile(file, pub = false, permissions = "none") {
    return new Promise((resolve, reject) => {
      let resolved = false;
      const update_fn = (details) => {
        if (!resolved) {
          resolve(details.upload_id || details.upload?.id || details.id);
          resolved = true;
        }
        this._upload_list.set([
          ...this._upload_list().filter((_) => _.id !== details.id),
          details
        ]);
      };
      this._uploadFile(file, pub, permissions, {
        next: update_fn,
        error: (details) => {
          if (details?.id)
            update_fn(details);
          if (!resolved)
            reject(uploadFailure(details));
        },
        complete: () => this._updateUploadHistory()
      });
    });
  }
  async uploadFileToCompletion(file, pub = false, permissions = "none", on_progress) {
    const details = await this._uploadFileToDetails(file, pub, permissions, on_progress);
    const upload_id = details.upload_id || details.upload?.id || details.id;
    if (!upload_id)
      throw new Error("Failed to get uploaded file ID");
    return upload_id;
  }
  async uploadFileWithPermissionsToCompletion(file, default_public = false) {
    if (!this._permissions_modal) {
      log("UPLOAD", "Permissions modal not initialized", void 0, "warn");
      return this.uploadFileToCompletion(file, default_public);
    }
    const details = await this._askPermissions(file, default_public);
    return this.uploadFileToCompletion(details.file, details.is_public, details.permissions);
  }
  /**
   * Opens the permissions modal and waits for its result. The dialog
   * service is loaded on demand to keep it out of the initial bundle.
   */
  async _askPermissions(file, is_public) {
    const { MatDialog } = await import("./dialog-VXJ2GEMY.js");
    const ref = this._injector.get(MatDialog).open(this._permissions_modal, { data: { file, is_public } });
    const details = await firstValueFrom(ref.afterClosed(), {
      defaultValue: null
    });
    if (!details)
      throw new UploadCancelledError();
    return details;
  }
  uploadFileWithProgress(file, pub = false, permissions = "none") {
    const progress = signal(
      null,
      ...ngDevMode ? [{ debugName: "progress" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._uploadFile(file, pub, permissions, {
      next: (details) => progress.set(details),
      error: (details) => progress.set(details),
      complete: () => this._updateUploadHistory()
    });
    return progress;
  }
  _updateUploadHistory() {
    const done_list = this._upload_list().filter((file) => file.progress >= 100);
    done_list.forEach((i) => delete i.upload);
    if (localStorage) {
      localStorage.setItem("PLACEOS.uploads", JSON.stringify(done_list));
    }
  }
  async _initUploads() {
    const { initUploads } = await loadCloudUploads();
    const api_key = et();
    initUploads(__spreadProps(__spreadValues({
      auto_start: true
    }, api_key ? { api_key } : { token: J() }), {
      endpoint: "/api/engine/v2/uploads",
      worker_url: "assets/md5_worker.js"
    }));
  }
  _updateUploadToken() {
    this._token_refresh ||= (async () => {
      if (!et() && !J(false))
        await jt();
      await this._initUploads();
    })().finally(() => this._token_refresh = null);
    return this._token_refresh;
  }
  /**
   * Upload the given file to the cloud
   * @param file File to upload
   */
  _uploadFile(file, pub = false, permissions = "none", observer) {
    this._updateUploadToken().then(() => loadCloudUploads()).then(async ({ humanReadableByteCount, uploadFile }) => {
      const upload = await uploadFile(file, {
        permissions,
        public: pub
      });
      const upload_details = {
        id: upload?.id || `upi-${randomString(8)}`,
        name: file.name,
        progress: 0,
        link: "",
        formatted_size: humanReadableByteCount(file.size),
        size: file.size,
        upload
      };
      let attempts = 0;
      let settled = false;
      let subscription;
      const stop = () => {
        settled = true;
        Promise.resolve().then(() => subscription?.unsubscribe());
      };
      subscription = upload.state.subscribe(async (state) => {
        if (settled)
          return;
        upload_details.upload_id = upload.id;
        if (upload.access_url || state.progress >= 100) {
          const local_url = `${location.origin}/api/engine/v2/uploads/${encodeURIComponent(upload_details.upload_id || upload.id)}/url`;
          upload_details.link = local_url;
        }
        upload_details.progress = state.progress;
        observer.next(upload_details);
        if (state.status === "FAILED") {
          if (attempts < UPLOAD_RETRY_ATTEMPTS) {
            attempts += 1;
            await this._updateUploadToken();
            if (settled)
              return;
            upload.resume();
            return;
          }
          stop();
          observer.error(__spreadProps(__spreadValues({}, upload_details), {
            error: uploadStateError(state)
          }));
          return;
        }
        if (state.status === "COMPLETED") {
          stop();
          observer.complete();
        }
      });
      observer.next(upload_details);
    }).catch((upload_error) => observer.error(upload_error));
  }
  _uploadFileToDetails(file, pub = false, permissions = "none", on_progress) {
    return new Promise((resolve, reject) => {
      let last_details;
      this._uploadFile(file, pub, permissions, {
        next: (details) => {
          last_details = details;
          on_progress?.(details.progress);
        },
        error: (details) => reject(uploadFailure(details)),
        complete: () => {
          this._updateUploadHistory();
          resolve(last_details);
        }
      });
    });
  }
  static {
    this.\u0275fac = function UploadsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UploadsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UploadsService, factory: _UploadsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/common/src/lib/types/booking.class.ts
var IGNORE_EXT_KEYS = ["user", "booked_by", "resources", "assets", "members"];
var RecurrenceDays;
(function(RecurrenceDays2) {
  RecurrenceDays2[RecurrenceDays2["SUNDAY"] = 1] = "SUNDAY";
  RecurrenceDays2[RecurrenceDays2["MONDAY"] = 2] = "MONDAY";
  RecurrenceDays2[RecurrenceDays2["TUESDAY"] = 4] = "TUESDAY";
  RecurrenceDays2[RecurrenceDays2["WEDNESDAY"] = 8] = "WEDNESDAY";
  RecurrenceDays2[RecurrenceDays2["THURSDAY"] = 16] = "THURSDAY";
  RecurrenceDays2[RecurrenceDays2["FRIDAY"] = 32] = "FRIDAY";
  RecurrenceDays2[RecurrenceDays2["SATURDAY"] = 64] = "SATURDAY";
})(RecurrenceDays || (RecurrenceDays = {}));
var DAY_MINUTES = 24 * 60;
function resolveAssetName(data, booking_type) {
  const ext = data.extension_data;
  const name = data.asset_name || ext?.asset_name || ext?.name;
  if (booking_type === "visitor") {
    return ext?.visitor_name || name || data.asset_id || "";
  }
  return name || data.description || data.asset_id || "";
}
function resolveUnixWindow(data) {
  const duration = data.duration || 60;
  if (data.date) {
    const start2 = Math.floor(data.date / 1e3);
    return { start: start2, end: start2 + duration * 60 };
  }
  const start = data.booking_start || getUnixTime(roundToNearestMinutes(addMinutes(Date.now(), 5), {
    nearestTo: 5
  }));
  return {
    start,
    end: data.booking_end || getUnixTime(addMinutes(start * 1e3, duration))
  };
}
function toBookingWindow(data, start, end) {
  const date = data.date || start * 1e3 || Date.now();
  const duration = data.duration || Math.abs(differenceInMinutes(start * 1e3, end * 1e3)) || 60;
  return {
    date,
    duration,
    date_end: end * 1e3 || date + duration * 60 * 1e3
  };
}
function isCustomAllDay(data) {
  return !!(data.extension_data?.custom_all_day || data.custom_all_day);
}
function snapToWholeDays(data, window2, timezone) {
  const has_length = !!(data.duration || data.date_end || data.booking_end);
  if (has_length && window2.duration % DAY_MINUTES !== 0)
    return window2;
  const date = startOfDayInTimezone(window2.date, timezone);
  return {
    date,
    duration: has_length ? Math.max(1, window2.duration - 1) : DAY_MINUTES - 1,
    date_end: endOfDayInTimezone(date, timezone)
  };
}
function resolveStatus(booking, status) {
  if (booking.deleted || status === "cancelled")
    return "cancelled";
  if (booking.rejected || status === "declined")
    return "declined";
  if (booking.has_ended)
    return "ended";
  if (booking.approved || status === "approved")
    return "approved";
  return "tentative";
}
function copyUnknownFields(booking, data) {
  for (const key in data) {
    if (!(key in booking) && !IGNORE_EXT_KEYS.includes(key) && data[key]) {
      booking.extension_data[key] = data[key];
    }
  }
}
var Booking = class {
  get group() {
    return this.extension_data.group || "";
  }
  get is_all_day() {
    return this.all_day || this.duration >= 12 * 60;
  }
  get has_ended() {
    return this.checked_out_at > 0 || isAfter(Date.now(), this.date_end);
  }
  get valid_assets() {
    if (this._valid_cache_expiry > Date.now() && this._valid_asset_cache.length) {
      return this._valid_asset_cache;
    }
    const list = this.linked_bookings;
    this._valid_asset_cache = (this.extension_data.assets || []).map((request) => new AssetRequest(__spreadProps(__spreadValues({}, request), { event: this }))).filter((request) => request.deliver_at < this.date_end).map((request) => {
      const booking = list.find((_) => _.extension_data.request_id === request.id);
      if (booking) {
        request.state = booking.approved ? "approved" : booking.rejected ? "rejected" : "pending";
      }
      return request;
    });
    this._valid_cache_expiry = addMinutes(Date.now(), 5).valueOf();
    return this._valid_asset_cache;
  }
  constructor(data = {}) {
    this._valid_asset_cache = [];
    this._valid_cache_expiry = 0;
    this.id = data.id || "";
    this.parent_id = data.parent_id || "";
    this.asset_id = data.asset_id || "";
    this.asset_ids = data.asset_ids || [data.asset_id].filter((_) => _);
    this.asset_name = resolveAssetName(data, data.booking_type || data.type || " ");
    this.zones = data.zones || [];
    const { start, end } = resolveUnixWindow(data);
    this.booking_start = start;
    this.booking_end = end;
    this.booking_type = data.booking_type || " ";
    this.type = data.type || data.booking_type || "booking";
    const timezone = data.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;
    const base_window = toBookingWindow(data, start, end);
    const all_day = !!data.all_day || isCustomAllDay(data) || base_window.duration >= DAY_MINUTES;
    const window2 = all_day ? snapToWholeDays(data, base_window, timezone) : base_window;
    this.date = window2.date;
    this.duration = window2.duration;
    this.date_end = window2.date_end;
    this.timezone = timezone;
    this.user_email = data.user_email || "";
    this.user_id = data.user_id || "";
    this.user_name = data.user_name || "";
    this.title = data.title ?? (this.booking_type ? `${capitalizeFirstLetter(this.booking_type)} Booking`.trim() : "");
    this.description = data.description || "";
    this.checked_in = !!data.checked_in;
    this.rejected = !!data.rejected;
    this.approved = !!data.approved;
    this.deleted = !!data.deleted;
    this.booked_by_id = data.booked_by_id || "";
    this.booked_by_name = data.booked_by_name || "";
    this.booked_by_email = data.booked_by_email || "";
    this.approver_id = data.approver_id || "";
    this.approver_email = data.approver_email || "";
    this.approver_name = data.approver_name || "";
    this.extension_data = data.extension_data || {};
    this.access = !!data.extension_data?.access;
    this.event_id = data.event_id;
    this.permission = (data.permission || "PRIVATE").toUpperCase();
    this.attendees = data.attendees || data.guests || data.members || [];
    this.tags = data.tags || data.extension_data?.tags || [];
    this.images = data.images || [];
    this.all_day = all_day;
    this.induction = data.induction || void 0;
    this.created_at = data.created_at || Date.now();
    this.history = data.history || [];
    this.checked_out_at = data.checked_out_at;
    this.checked_in_at = data.checked_in_at;
    this.linked_event = data.linked_event || null;
    this.linked_bookings = data.linked_bookings || [];
    this.linked_parent_booking = data.linked_parent_booking || null;
    this.status = resolveStatus(this, data.status);
    this.process_state = data.process_state || "pending";
    this.recurrence_type = data.recurrence_type || "none";
    this.recurrence_days = data.recurrence_days;
    this.recurrence_nth_of_month = data.recurrence_nth_of_month;
    this.recurrence_interval = data.recurrence_interval;
    this.recurrence_end = data.recurrence_end;
    this.instance = data.instance;
    copyUnknownFields(this, data);
    this.extension_data.assets = (this.extension_data.assets || []).map((i) => new AssetRequest(__spreadProps(__spreadValues({}, i), { event: this, date: this.date })));
    this.extension_data.tags = data.tags || [];
    if (this.extension_data.request) {
      this.extension_data.request = new AssetRequest(__spreadProps(__spreadValues({}, this.extension_data.request), {
        event: this,
        date: this.date
      }));
    }
  }
  toJSON() {
    const data = __spreadValues({}, this);
    if (!this.id)
      delete data.id;
    data.extension_data.assets = data.extension_data.assets.map((i) => new AssetRequest(__spreadProps(__spreadValues({}, i), { event: null })));
    if (data.extension_data.request) {
      data.extension_data.request = new AssetRequest(__spreadProps(__spreadValues({}, data.extension_data.request), {
        event: null
      }));
    }
    if (!data.parent_id)
      delete data.parent_id;
    data.zones = data.zones.filter((_) => _);
    delete data.date;
    delete data.duration;
    delete data.created_at;
    delete data.history;
    delete data.process_state;
    removeEmptyFields(data);
    return data;
  }
  get location() {
    return this.extension_data?.location || this.description;
  }
  /** Whether the booking occurs today */
  get is_today() {
    return isSameDay(this.date, /* @__PURE__ */ new Date());
  }
  /** Whether booking is done */
  get is_done() {
    const start = /* @__PURE__ */ new Date();
    const end = this.all_day ? addHours(this.date, 24) : addMinutes(this.date, this.duration);
    const checked_out = (this.checked_out_at || this.extension_data.checked_out_at || 0) * 1e3;
    const end_time = end.getTime();
    if (checked_out && Date.now() > checked_out)
      return true;
    return isAfter(start, new Date(end_time));
  }
  /** Status of the booking */
  get state() {
    const now = /* @__PURE__ */ new Date();
    const date = this.date;
    if (isBefore(now, add(date, { minutes: -15 })))
      return "future";
    if (isBefore(now, date))
      return "upcoming";
    if (isBefore(now, add(date, { minutes: 15 })))
      return "started";
    if (isBefore(now, add(date, { minutes: this.duration })))
      return "in_progress";
    return "done";
  }
};

// libs/common/src/lib/types/calendar.class.ts
var Calendar = class {
  constructor(data = {}) {
    this.id = data.id || "";
    this.name = data.name || "";
    this.primary = !!data.primary;
    this.summary = data.summary || "";
    this.can_edit = !!data.can_edit;
    this.resource = new Space(data.resource || data.system);
    this.availability = (data.availability || []).map(({ starts_at, ends_at, date, duration, status }) => {
      return {
        date: new Date(date || starts_at * 1e3).valueOf(),
        duration: duration || differenceInMinutes(ends_at * 1e3, starts_at * 1e3),
        status
      };
    });
    this.hidden = !!data.hidden;
  }
};

// libs/common/src/lib/types/desk.class.ts
var IGNORE_KEYS = ["zone", "qr_code", "toJSON"];
var Desk = class {
  constructor(data = {}) {
    this.toJSON = () => this.format();
    this.id = data.id || "";
    this.map_id = data.map_id || data.id || "";
    this.name = data.name || "";
    this.bookable = data.bookable ?? false;
    this.zone = data.zone || new en();
    this.assigned_to = data.assigned_to || "";
    this.groups = data.groups || [];
    this.qr_code = data.qr_code || "";
    this.features = data.features || [];
    this.images = data.images || [];
    this.security = data.security || "";
    for (const key in data) {
      if (!(key in this))
        this[key] = data[key];
    }
  }
  format() {
    const data = __spreadValues({}, this);
    for (const key of IGNORE_KEYS) {
      delete data[key];
    }
    ci(data, [void 0, null, []]);
    return data;
  }
};

// libs/common/src/lib/mapspeople.service.ts
var MapService;
(function(MapService2) {
  MapService2[MapService2["GoogleMaps"] = 0] = "GoogleMaps";
  MapService2[MapService2["Mapbox"] = 1] = "Mapbox";
})(MapService || (MapService = {}));
var MapsPeopleService = class _MapsPeopleService extends AsyncHandler {
  get map_keys() {
    return this._settings.get("app.maps_people.keys") || {};
  }
  get use_service() {
    return this._settings.get("app.maps_people.use_zones") || [];
  }
  get map_service() {
    return this._map_service();
  }
  get map_token() {
    return this._map_token();
  }
  get is_ready() {
    return this._ready();
  }
  constructor() {
    super();
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._map_service = signal(
      null,
      ...ngDevMode ? [{ debugName: "_map_service" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._map_token = signal(
      "",
      ...ngDevMode ? [{ debugName: "_map_token" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._ready = signal(
      false,
      ...ngDevMode ? [{ debugName: "_ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._injected = {};
    this._custom_zone = signal(
      "",
      ...ngDevMode ? [{ debugName: "_custom_zone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.available = computed(
      () => {
        const bld = this._org.active_building();
        const zone = this._custom_zone();
        if (!this._org.initialised() || !bld?.id)
          return false;
        return !!this.map_keys.mapsindoors && (this.use_service.includes(zone || bld.id) || this.use_service.includes("*"));
      },
      ...ngDevMode ? [{ debugName: "available" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      if (!this.available())
        return;
      this._injectMapsApiKeys();
    });
  }
  setCustomZone(zone_id) {
    this._custom_zone.set(zone_id);
  }
  _injectMapsApiKeys() {
    log("MapsPeople", "Initializing Maps API Keys");
    this._ready.set(false);
    const { mapsindoors, google, mapbox } = this.map_keys;
    if (!mapsindoors)
      return;
    if (mapsindoors && !this._injected.mapsindoors) {
      const script = document.createElement("script");
      script.src = `https://app.mapsindoors.com/mapsindoors/js/sdk/4.35.0/mapsindoors-4.35.0.js.gz?apikey=${mapsindoors}`;
      document.body.appendChild(script);
      this._injected.mapsindoors = true;
    }
    if (google && mapbox) {
      log("MapsPeople", "Both Google and Mapbox keys provided", void 0, "error");
      return;
    }
    if (google && !this._injected.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?libraries=geometry&key=${google}`;
      document.body.appendChild(script);
      this._map_service.set(MapService.GoogleMaps);
      this._injected.google = true;
    } else if (mapbox && !this._injected.mapbox) {
      const script = document.createElement("script");
      script.src = `https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js`;
      document.body.appendChild(script);
      const styles = document.createElement("link");
      styles.rel = "stylesheet";
      styles.href = `https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css`;
      document.head.appendChild(styles);
      this._map_service.set(MapService.Mapbox);
      this._map_token.set(mapbox);
      this._injected.mapbox = true;
    }
    if (google || mapbox) {
      log("MapsPeople", `Initialized Maps API Keys for ${google ? "Google Maps" : "Mapbox"}`);
      this.timeout("ready", () => this._ready.set(true), 300);
    }
  }
  static {
    this.\u0275fac = function MapsPeopleService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MapsPeopleService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MapsPeopleService, factory: _MapsPeopleService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapsPeopleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/common/src/lib/api.ts
var IGNORE_VALUES = [void 0, null, ""];
function toQueryString(map2) {
  let str = "";
  if (map2) {
    for (const key in map2) {
      if (key in map2 && !IGNORE_VALUES.includes(map2[key])) {
        str += `${str ? "&" : ""}${key}=${encodeURIComponent(map2[key])}`;
      }
    }
  }
  return str;
}

// libs/common/src/lib/types.ts
var MAP_FEATURE_DATA = new InjectionToken("Data for Map Features");

// node_modules/@angular/material/fesm2022/_pseudo-checkbox-chunk.mjs
var MatPseudoCheckbox = class _MatPseudoCheckbox {
  _animationsDisabled = _animationsDisabled();
  state = "unchecked";
  disabled = false;
  appearance = "full";
  static \u0275fac = function MatPseudoCheckbox_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatPseudoCheckbox)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatPseudoCheckbox,
    selectors: [["mat-pseudo-checkbox"]],
    hostAttrs: [1, "mat-pseudo-checkbox"],
    hostVars: 12,
    hostBindings: function MatPseudoCheckbox_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-pseudo-checkbox-indeterminate", ctx.state === "indeterminate")("mat-pseudo-checkbox-checked", ctx.state === "checked")("mat-pseudo-checkbox-disabled", ctx.disabled)("mat-pseudo-checkbox-minimal", ctx.appearance === "minimal")("mat-pseudo-checkbox-full", ctx.appearance === "full")("_mat-animation-noopable", ctx._animationsDisabled);
      }
    },
    inputs: {
      state: "state",
      disabled: "disabled",
      appearance: "appearance"
    },
    decls: 0,
    vars: 0,
    template: function MatPseudoCheckbox_Template(rf, ctx) {
    },
    styles: ['.mat-pseudo-checkbox {\n  border-radius: 2px;\n  cursor: pointer;\n  display: inline-block;\n  vertical-align: middle;\n  box-sizing: border-box;\n  position: relative;\n  flex-shrink: 0;\n  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);\n}\n.mat-pseudo-checkbox::after {\n  position: absolute;\n  opacity: 0;\n  content: "";\n  border-bottom: 2px solid currentColor;\n  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);\n}\n.mat-pseudo-checkbox._mat-animation-noopable {\n  transition: none !important;\n  animation: none !important;\n}\n.mat-pseudo-checkbox._mat-animation-noopable::after {\n  transition: none;\n}\n\n.mat-pseudo-checkbox-disabled {\n  cursor: default;\n}\n\n.mat-pseudo-checkbox-indeterminate::after {\n  left: 1px;\n  opacity: 1;\n  border-radius: 2px;\n}\n\n.mat-pseudo-checkbox-checked::after {\n  left: 1px;\n  border-left: 2px solid currentColor;\n  transform: rotate(-45deg);\n  opacity: 1;\n  box-sizing: content-box;\n}\n\n.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {\n  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));\n}\n.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {\n  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));\n}\n\n.mat-pseudo-checkbox-full {\n  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));\n  border-width: 2px;\n  border-style: solid;\n}\n.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {\n  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));\n}\n.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {\n  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));\n  border-color: transparent;\n}\n.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {\n  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));\n}\n.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));\n}\n.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {\n  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));\n}\n\n.mat-pseudo-checkbox {\n  width: 18px;\n  height: 18px;\n}\n\n.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {\n  width: 14px;\n  height: 6px;\n  transform-origin: center;\n  top: -4.2426406871px;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n}\n.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {\n  top: 8px;\n  width: 16px;\n}\n\n.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {\n  width: 10px;\n  height: 4px;\n  transform-origin: center;\n  top: -2.8284271247px;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n}\n.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {\n  top: 6px;\n  width: 12px;\n}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPseudoCheckbox, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      selector: "mat-pseudo-checkbox",
      template: "",
      host: {
        "class": "mat-pseudo-checkbox",
        "[class.mat-pseudo-checkbox-indeterminate]": 'state === "indeterminate"',
        "[class.mat-pseudo-checkbox-checked]": 'state === "checked"',
        "[class.mat-pseudo-checkbox-disabled]": "disabled",
        "[class.mat-pseudo-checkbox-minimal]": 'appearance === "minimal"',
        "[class.mat-pseudo-checkbox-full]": 'appearance === "full"',
        "[class._mat-animation-noopable]": "_animationsDisabled"
      },
      styles: ['.mat-pseudo-checkbox {\n  border-radius: 2px;\n  cursor: pointer;\n  display: inline-block;\n  vertical-align: middle;\n  box-sizing: border-box;\n  position: relative;\n  flex-shrink: 0;\n  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);\n}\n.mat-pseudo-checkbox::after {\n  position: absolute;\n  opacity: 0;\n  content: "";\n  border-bottom: 2px solid currentColor;\n  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);\n}\n.mat-pseudo-checkbox._mat-animation-noopable {\n  transition: none !important;\n  animation: none !important;\n}\n.mat-pseudo-checkbox._mat-animation-noopable::after {\n  transition: none;\n}\n\n.mat-pseudo-checkbox-disabled {\n  cursor: default;\n}\n\n.mat-pseudo-checkbox-indeterminate::after {\n  left: 1px;\n  opacity: 1;\n  border-radius: 2px;\n}\n\n.mat-pseudo-checkbox-checked::after {\n  left: 1px;\n  border-left: 2px solid currentColor;\n  transform: rotate(-45deg);\n  opacity: 1;\n  box-sizing: content-box;\n}\n\n.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {\n  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));\n}\n.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {\n  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n\n.mat-pseudo-checkbox-full {\n  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));\n  border-width: 2px;\n  border-style: solid;\n}\n.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {\n  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {\n  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));\n  border-color: transparent;\n}\n.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {\n  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));\n}\n.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {\n  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));\n}\n\n.mat-pseudo-checkbox {\n  width: 18px;\n  height: 18px;\n}\n\n.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {\n  width: 14px;\n  height: 6px;\n  transform-origin: center;\n  top: -4.2426406871px;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n}\n.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {\n  top: 8px;\n  width: 16px;\n}\n\n.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {\n  width: 10px;\n  height: 4px;\n  transform-origin: center;\n  top: -2.8284271247px;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n}\n.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {\n  top: 6px;\n  width: 12px;\n}\n']
    }]
  }], null, {
    state: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    appearance: [{
      type: Input
    }]
  });
})();

// node_modules/@angular/material/fesm2022/_option-chunk.mjs
var _c0 = ["*", [["mat-option"], ["ng-container"]]];
var _c1 = ["*", "mat-option, ng-container"];
var _c2 = ["text"];
var _c3 = [[["mat-icon"]], "*"];
var _c4 = ["mat-icon", "*"];
function MatOption_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-pseudo-checkbox", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.disabled)("state", ctx_r0.selected ? "checked" : "unchecked");
  }
}
function MatOption_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-pseudo-checkbox", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.disabled);
  }
}
function MatOption_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r0.group.label, ")");
  }
}
var MAT_OPTION_PARENT_COMPONENT = new InjectionToken("MAT_OPTION_PARENT_COMPONENT");
var MAT_OPTGROUP = new InjectionToken("MatOptgroup");
var MatOptgroup = class _MatOptgroup {
  label;
  disabled = false;
  _labelId = inject(_IdGenerator).getId("mat-optgroup-label-");
  _inert;
  constructor() {
    const parent = inject(MAT_OPTION_PARENT_COMPONENT, {
      optional: true
    });
    this._inert = parent?.inertGroups ?? false;
  }
  static \u0275fac = function MatOptgroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatOptgroup)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatOptgroup,
    selectors: [["mat-optgroup"]],
    hostAttrs: [1, "mat-mdc-optgroup"],
    hostVars: 3,
    hostBindings: function MatOptgroup_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx._inert ? null : "group")("aria-disabled", ctx._inert ? null : ctx.disabled.toString())("aria-labelledby", ctx._inert ? null : ctx._labelId);
      }
    },
    inputs: {
      label: "label",
      disabled: [2, "disabled", "disabled", booleanAttribute]
    },
    exportAs: ["matOptgroup"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_OPTGROUP,
      useExisting: _MatOptgroup
    }])],
    ngContentSelectors: _c1,
    decls: 5,
    vars: 4,
    consts: [["role", "presentation", 1, "mat-mdc-optgroup-label", 3, "id"], [1, "mdc-list-item__primary-text"]],
    template: function MatOptgroup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c0);
        \u0275\u0275domElementStart(0, "span", 0)(1, "span", 1);
        \u0275\u0275text(2);
        \u0275\u0275projection(3);
        \u0275\u0275domElementEnd()();
        \u0275\u0275projection(4, 1);
      }
      if (rf & 2) {
        \u0275\u0275classProp("mdc-list-item--disabled", ctx.disabled);
        \u0275\u0275domProperty("id", ctx._labelId);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.label, " ");
      }
    },
    styles: [".mat-mdc-optgroup {\n  color: var(--%NS%mat-optgroup-label-text-color, var(--%NS%mat-sys-on-surface-variant));\n  font-family: var(--%NS%mat-optgroup-label-text-font, var(--%NS%mat-sys-title-small-font));\n  line-height: var(--%NS%mat-optgroup-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));\n  font-size: var(--%NS%mat-optgroup-label-text-size, var(--%NS%mat-sys-title-small-size));\n  letter-spacing: var(--%NS%mat-optgroup-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));\n  font-weight: var(--%NS%mat-optgroup-label-text-weight, var(--%NS%mat-sys-title-small-weight));\n}\n\n.mat-mdc-optgroup-label {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: flex-start;\n  overflow: hidden;\n  min-height: 48px;\n  padding: 0 16px;\n  outline: none;\n}\n.mat-mdc-optgroup-label.mdc-list-item--disabled {\n  opacity: 0.38;\n}\n.mat-mdc-optgroup-label .mdc-list-item__primary-text {\n  font-size: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  text-decoration: inherit;\n  text-transform: inherit;\n  white-space: normal;\n  color: inherit;\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatOptgroup, [{
    type: Component,
    args: [{
      selector: "mat-optgroup",
      exportAs: "matOptgroup",
      encapsulation: ViewEncapsulation.None,
      host: {
        "class": "mat-mdc-optgroup",
        "[attr.role]": '_inert ? null : "group"',
        "[attr.aria-disabled]": "_inert ? null : disabled.toString()",
        "[attr.aria-labelledby]": "_inert ? null : _labelId"
      },
      providers: [{
        provide: MAT_OPTGROUP,
        useExisting: MatOptgroup
      }],
      template: '<span\n  class="mat-mdc-optgroup-label"\n  role="presentation"\n  [class.mdc-list-item--disabled]="disabled"\n  [id]="_labelId">\n  <span class="mdc-list-item__primary-text">{{ label }} <ng-content></ng-content></span>\n</span>\n\n<ng-content select="mat-option, ng-container"></ng-content>\n',
      styles: [".mat-mdc-optgroup {\n  color: var(--mat-optgroup-label-text-color, var(--mat-sys-on-surface-variant));\n  font-family: var(--mat-optgroup-label-text-font, var(--mat-sys-title-small-font));\n  line-height: var(--mat-optgroup-label-text-line-height, var(--mat-sys-title-small-line-height));\n  font-size: var(--mat-optgroup-label-text-size, var(--mat-sys-title-small-size));\n  letter-spacing: var(--mat-optgroup-label-text-tracking, var(--mat-sys-title-small-tracking));\n  font-weight: var(--mat-optgroup-label-text-weight, var(--mat-sys-title-small-weight));\n}\n\n.mat-mdc-optgroup-label {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: flex-start;\n  overflow: hidden;\n  min-height: 48px;\n  padding: 0 16px;\n  outline: none;\n}\n.mat-mdc-optgroup-label.mdc-list-item--disabled {\n  opacity: 0.38;\n}\n.mat-mdc-optgroup-label .mdc-list-item__primary-text {\n  font-size: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  text-decoration: inherit;\n  text-transform: inherit;\n  white-space: normal;\n  color: inherit;\n}\n"]
    }]
  }], () => [], {
    label: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatOptionSelectionChange = class {
  source;
  isUserInput;
  constructor(source, isUserInput = false) {
    this.source = source;
    this.isUserInput = isUserInput;
  }
};
var MatOption = class _MatOption {
  _element = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _parent = inject(MAT_OPTION_PARENT_COMPONENT, {
    optional: true
  });
  group = inject(MAT_OPTGROUP, {
    optional: true
  });
  _signalDisableRipple = false;
  _selected = false;
  _active = false;
  _mostRecentViewValue = "";
  get multiple() {
    return this._parent && this._parent.multiple;
  }
  get selected() {
    return this._selected;
  }
  value;
  id = inject(_IdGenerator).getId("mat-option-");
  get disabled() {
    return this.group && this.group.disabled || this._disabled();
  }
  set disabled(value) {
    this._disabled.set(value);
  }
  _disabled = signal(false, ...ngDevMode ? [{
    debugName: "_disabled"
  }] : []);
  get disableRipple() {
    return this._signalDisableRipple ? this._parent.disableRipple() : !!this._parent?.disableRipple;
  }
  get hideSingleSelectionIndicator() {
    return !!(this._parent && this._parent.hideSingleSelectionIndicator);
  }
  onSelectionChange = new EventEmitter();
  _text;
  _stateChanges = new Subject();
  constructor() {
    const styleLoader = inject(_CdkPrivateStyleLoader);
    styleLoader.load(_StructuralStylesLoader);
    styleLoader.load(_VisuallyHiddenLoader);
    this._signalDisableRipple = !!this._parent && isSignal(this._parent.disableRipple);
  }
  get active() {
    return this._active;
  }
  get viewValue() {
    return (this._text?.nativeElement.textContent || "").trim();
  }
  select(emitEvent = true) {
    if (!this._selected) {
      this._selected = true;
      this._changeDetectorRef.markForCheck();
      if (emitEvent) {
        this._emitSelectionChangeEvent();
      }
    }
  }
  deselect(emitEvent = true) {
    if (this._selected) {
      this._selected = false;
      this._changeDetectorRef.markForCheck();
      if (emitEvent) {
        this._emitSelectionChangeEvent();
      }
    }
  }
  focus(_origin, options) {
    const element = this._getHostElement();
    if (typeof element.focus === "function") {
      element.focus(options);
    }
  }
  setActiveStyles() {
    if (!this._active) {
      this._active = true;
      this._changeDetectorRef.markForCheck();
    }
  }
  setInactiveStyles() {
    if (this._active) {
      this._active = false;
      this._changeDetectorRef.markForCheck();
    }
  }
  getLabel() {
    return this.viewValue;
  }
  _handleKeydown(event) {
    if ((event.keyCode === ENTER || event.keyCode === SPACE) && !hasModifierKey(event)) {
      this._selectViaInteraction();
      event.preventDefault();
    }
  }
  _selectViaInteraction() {
    if (!this.disabled) {
      this._selected = this.multiple ? !this._selected : true;
      this._changeDetectorRef.markForCheck();
      this._emitSelectionChangeEvent(true);
    }
  }
  _getTabIndex() {
    return this.disabled ? "-1" : "0";
  }
  _getHostElement() {
    return this._element.nativeElement;
  }
  ngAfterViewChecked() {
    if (this._selected) {
      const viewValue = this.viewValue;
      if (viewValue !== this._mostRecentViewValue) {
        if (this._mostRecentViewValue) {
          this._stateChanges.next();
        }
        this._mostRecentViewValue = viewValue;
      }
    }
  }
  ngOnDestroy() {
    this._stateChanges.complete();
  }
  _emitSelectionChangeEvent(isUserInput = false) {
    this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
  }
  static \u0275fac = function MatOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatOption)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatOption,
    selectors: [["mat-option"]],
    viewQuery: function MatOption_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c2, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._text = _t.first);
      }
    },
    hostAttrs: ["role", "option", 1, "mat-mdc-option", "mdc-list-item"],
    hostVars: 11,
    hostBindings: function MatOption_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatOption_click_HostBindingHandler() {
          return ctx._selectViaInteraction();
        })("keydown", function MatOption_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
        \u0275\u0275attribute("aria-selected", ctx.selected)("aria-disabled", ctx.disabled.toString());
        \u0275\u0275classProp("mdc-list-item--selected", ctx.selected)("mat-mdc-option-multiple", ctx.multiple)("mat-mdc-option-active", ctx.active)("mdc-list-item--disabled", ctx.disabled);
      }
    },
    inputs: {
      value: "value",
      id: "id",
      disabled: [2, "disabled", "disabled", booleanAttribute]
    },
    outputs: {
      onSelectionChange: "onSelectionChange"
    },
    exportAs: ["matOption"],
    ngContentSelectors: _c4,
    decls: 8,
    vars: 5,
    consts: [["text", ""], ["aria-hidden", "true", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled", "state"], [1, "mdc-list-item__primary-text"], ["state", "checked", "aria-hidden", "true", "appearance", "minimal", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled"], [1, "cdk-visually-hidden"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-mdc-option-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled"]],
    template: function MatOption_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c3);
        \u0275\u0275conditionalCreate(0, MatOption_Conditional_0_Template, 1, 2, "mat-pseudo-checkbox", 1);
        \u0275\u0275projection(1);
        \u0275\u0275elementStart(2, "span", 2, 0);
        \u0275\u0275projection(4, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, MatOption_Conditional_5_Template, 1, 1, "mat-pseudo-checkbox", 3);
        \u0275\u0275conditionalCreate(6, MatOption_Conditional_6_Template, 2, 1, "span", 4);
        \u0275\u0275element(7, "div", 5);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.multiple ? 0 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(!ctx.multiple && ctx.selected && !ctx.hideSingleSelectionIndicator ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.group && ctx.group._inert ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disabled || ctx.disableRipple);
      }
    },
    dependencies: [MatPseudoCheckbox, MatRipple],
    styles: ['.mat-mdc-option {\n  -webkit-user-select: none;\n  user-select: none;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: flex-start;\n  overflow: hidden;\n  min-height: 48px;\n  padding: 0 16px;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));\n  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));\n  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));\n  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));\n  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));\n  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));\n}\n.mat-mdc-option:hover:not(.mdc-list-item--disabled) {\n  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));\n}\n.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {\n  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));\n  outline: 0;\n}\n.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {\n  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));\n}\n.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {\n  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));\n}\n.mat-mdc-option .mat-pseudo-checkbox {\n  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));\n}\n.mat-mdc-option.mdc-list-item {\n  align-items: center;\n  background: transparent;\n}\n.mat-mdc-option.mdc-list-item--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {\n  opacity: 0.38;\n}\n.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {\n  padding-left: 32px;\n}\n[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {\n  padding-left: 16px;\n  padding-right: 32px;\n}\n.mat-mdc-option .mat-icon,\n.mat-mdc-option .mat-pseudo-checkbox-full {\n  margin-right: 16px;\n  flex-shrink: 0;\n}\n[dir=rtl] .mat-mdc-option .mat-icon,\n[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {\n  margin-right: 0;\n  margin-left: 16px;\n}\n.mat-mdc-option .mat-pseudo-checkbox-minimal {\n  margin-left: 16px;\n  flex-shrink: 0;\n}\n[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {\n  margin-right: 16px;\n  margin-left: 0;\n}\n.mat-mdc-option .mat-mdc-option-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n}\n.mat-mdc-option .mdc-list-item__primary-text {\n  white-space: normal;\n  font-size: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  text-decoration: inherit;\n  text-transform: inherit;\n  margin-right: auto;\n}\n[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {\n  margin-right: 0;\n  margin-left: auto;\n}\n@media (forced-colors: active) {\n  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {\n    content: "";\n    position: absolute;\n    top: 50%;\n    right: 16px;\n    transform: translateY(-50%);\n    width: 10px;\n    height: 0;\n    border-bottom: solid 10px;\n    border-radius: 10px;\n  }\n  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {\n    right: auto;\n    left: 16px;\n  }\n}\n\n.mat-mdc-option-multiple {\n  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);\n}\n\n.mat-mdc-option-active .mat-focus-indicator::before {\n  content: "";\n}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatOption, [{
    type: Component,
    args: [{
      selector: "mat-option",
      exportAs: "matOption",
      host: {
        "role": "option",
        "[class.mdc-list-item--selected]": "selected",
        "[class.mat-mdc-option-multiple]": "multiple",
        "[class.mat-mdc-option-active]": "active",
        "[class.mdc-list-item--disabled]": "disabled",
        "[id]": "id",
        "[attr.aria-selected]": "selected",
        "[attr.aria-disabled]": "disabled.toString()",
        "(click)": "_selectViaInteraction()",
        "(keydown)": "_handleKeydown($event)",
        "class": "mat-mdc-option mdc-list-item"
      },
      encapsulation: ViewEncapsulation.None,
      imports: [MatPseudoCheckbox, MatRipple],
      template: `<!-- Set aria-hidden="true" to this DOM node and other decorative nodes in this file. This might
 be contributing to issue where sometimes VoiceOver focuses on a TextNode in the a11y tree instead
 of the Option node (#23202). Most assistive technology will generally ignore non-role,
 non-text-content elements. Adding aria-hidden seems to make VoiceOver behave more consistently. -->
@if (multiple) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        [state]="selected ? 'checked' : 'unchecked'"
        aria-hidden="true"></mat-pseudo-checkbox>
}

<ng-content select="mat-icon"></ng-content>

<span class="mdc-list-item__primary-text" #text><ng-content></ng-content></span>

<!-- Render checkmark at the end for single-selection. -->
@if (!multiple && selected && !hideSingleSelectionIndicator) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        state="checked"
        aria-hidden="true"
        appearance="minimal"></mat-pseudo-checkbox>
}

<!-- See a11y notes inside optgroup.ts for context behind this element. -->
@if (group && group._inert) {
    <span class="cdk-visually-hidden">({{ group.label }})</span>
}

<div class="mat-mdc-option-ripple mat-focus-indicator" aria-hidden="true" mat-ripple
     [matRippleTrigger]="_getHostElement()" [matRippleDisabled]="disabled || disableRipple">
</div>
`,
      styles: ['.mat-mdc-option {\n  -webkit-user-select: none;\n  user-select: none;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: flex-start;\n  overflow: hidden;\n  min-height: 48px;\n  padding: 0 16px;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));\n  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));\n  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));\n  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));\n  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));\n}\n.mat-mdc-option:hover:not(.mdc-list-item--disabled) {\n  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));\n}\n.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {\n  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));\n  outline: 0;\n}\n.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {\n  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));\n}\n.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {\n  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-option .mat-pseudo-checkbox {\n  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-option.mdc-list-item {\n  align-items: center;\n  background: transparent;\n}\n.mat-mdc-option.mdc-list-item--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {\n  opacity: 0.38;\n}\n.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {\n  padding-left: 32px;\n}\n[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {\n  padding-left: 16px;\n  padding-right: 32px;\n}\n.mat-mdc-option .mat-icon,\n.mat-mdc-option .mat-pseudo-checkbox-full {\n  margin-right: 16px;\n  flex-shrink: 0;\n}\n[dir=rtl] .mat-mdc-option .mat-icon,\n[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {\n  margin-right: 0;\n  margin-left: 16px;\n}\n.mat-mdc-option .mat-pseudo-checkbox-minimal {\n  margin-left: 16px;\n  flex-shrink: 0;\n}\n[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {\n  margin-right: 16px;\n  margin-left: 0;\n}\n.mat-mdc-option .mat-mdc-option-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n}\n.mat-mdc-option .mdc-list-item__primary-text {\n  white-space: normal;\n  font-size: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  text-decoration: inherit;\n  text-transform: inherit;\n  margin-right: auto;\n}\n[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {\n  margin-right: 0;\n  margin-left: auto;\n}\n@media (forced-colors: active) {\n  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {\n    content: "";\n    position: absolute;\n    top: 50%;\n    right: 16px;\n    transform: translateY(-50%);\n    width: 10px;\n    height: 0;\n    border-bottom: solid 10px;\n    border-radius: 10px;\n  }\n  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {\n    right: auto;\n    left: 16px;\n  }\n}\n\n.mat-mdc-option-multiple {\n  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);\n}\n\n.mat-mdc-option-active .mat-focus-indicator::before {\n  content: "";\n}\n']
    }]
  }], () => [], {
    value: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onSelectionChange: [{
      type: Output
    }],
    _text: [{
      type: ViewChild,
      args: ["text", {
        static: true
      }]
    }]
  });
})();
function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
  if (optionGroups.length) {
    let optionsArray = options.toArray();
    let groups = optionGroups.toArray();
    let groupCounter = 0;
    for (let i = 0; i < optionIndex + 1; i++) {
      if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
        groupCounter++;
      }
    }
    return groupCounter;
  }
  return 0;
}
function _getOptionScrollPosition(optionOffset, optionHeight, currentScrollPosition, panelHeight) {
  if (optionOffset < currentScrollPosition) {
    return optionOffset;
  }
  if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
    return Math.max(0, optionOffset - panelHeight + optionHeight);
  }
  return currentScrollPosition;
}

// node_modules/@angular/material/fesm2022/_date-formats-chunk.mjs
var MAT_DATE_LOCALE = new InjectionToken("MAT_DATE_LOCALE", {
  providedIn: "root",
  factory: () => inject(LOCALE_ID)
});
var NOT_IMPLEMENTED = "Method not implemented";
var DateAdapter = class {
  locale;
  _localeChanges = new Subject();
  localeChanges = this._localeChanges;
  setTime(target, hours, minutes, seconds) {
    throw new Error(NOT_IMPLEMENTED);
  }
  getHours(date) {
    throw new Error(NOT_IMPLEMENTED);
  }
  getMinutes(date) {
    throw new Error(NOT_IMPLEMENTED);
  }
  getSeconds(date) {
    throw new Error(NOT_IMPLEMENTED);
  }
  parseTime(value, parseFormat) {
    throw new Error(NOT_IMPLEMENTED);
  }
  addSeconds(date, amount) {
    throw new Error(NOT_IMPLEMENTED);
  }
  getValidDateOrNull(obj) {
    return this.isDateInstance(obj) && this.isValid(obj) ? obj : null;
  }
  deserialize(value) {
    if (value == null || this.isDateInstance(value) && this.isValid(value)) {
      return value;
    }
    return this.invalid();
  }
  setLocale(locale) {
    this.locale = locale;
    this._localeChanges.next();
  }
  compareDate(first, second) {
    return this.getYear(first) - this.getYear(second) || this.getMonth(first) - this.getMonth(second) || this.getDate(first) - this.getDate(second);
  }
  compareTime(first, second) {
    return this.getHours(first) - this.getHours(second) || this.getMinutes(first) - this.getMinutes(second) || this.getSeconds(first) - this.getSeconds(second);
  }
  sameDate(first, second) {
    if (first && second) {
      let firstValid = this.isValid(first);
      let secondValid = this.isValid(second);
      if (firstValid && secondValid) {
        return !this.compareDate(first, second);
      }
      return firstValid == secondValid;
    }
    return first == second;
  }
  sameTime(first, second) {
    if (first && second) {
      const firstValid = this.isValid(first);
      const secondValid = this.isValid(second);
      if (firstValid && secondValid) {
        return !this.compareTime(first, second);
      }
      return firstValid == secondValid;
    }
    return first == second;
  }
  clampDate(date, min, max) {
    if (min && this.compareDate(date, min) < 0) {
      return min;
    }
    if (max && this.compareDate(date, max) > 0) {
      return max;
    }
    return date;
  }
};
var MAT_DATE_FORMATS = new InjectionToken("mat-date-formats");

// node_modules/@angular/material/fesm2022/_error-options-chunk.mjs
var ShowOnDirtyErrorStateMatcher = class _ShowOnDirtyErrorStateMatcher {
  isErrorState(control, form) {
    return !!(control && control.invalid && (control.dirty || form && form.submitted));
  }
  isSignalErrorState(field) {
    if (!field) {
      return false;
    }
    const invalid = field().invalid();
    const dirty = field().dirty();
    return invalid && dirty;
  }
  static \u0275fac = function ShowOnDirtyErrorStateMatcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowOnDirtyErrorStateMatcher)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _ShowOnDirtyErrorStateMatcher,
    factory: _ShowOnDirtyErrorStateMatcher.\u0275fac,
    autoProvided: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowOnDirtyErrorStateMatcher, [{
    type: Service,
    args: [{
      autoProvided: false
    }]
  }], null, null);
})();
var ErrorStateMatcher = class _ErrorStateMatcher {
  isErrorState(control, form) {
    return !!(control && control.invalid && (control.touched || form && form.submitted));
  }
  isSignalErrorState(field) {
    if (!field) {
      return false;
    }
    const invalid = field().invalid();
    const touched = field().touched();
    return invalid && touched;
  }
  static \u0275fac = function ErrorStateMatcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ErrorStateMatcher)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _ErrorStateMatcher,
    factory: _ErrorStateMatcher.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorStateMatcher, [{
    type: Service
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/_pseudo-checkbox-module-chunk.mjs
var MatPseudoCheckboxModule = class _MatPseudoCheckboxModule {
  static \u0275fac = function MatPseudoCheckboxModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatPseudoCheckboxModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatPseudoCheckboxModule,
    imports: [MatPseudoCheckbox],
    exports: [MatPseudoCheckbox, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPseudoCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [MatPseudoCheckbox],
      exports: [MatPseudoCheckbox, BidiModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/_option-module-chunk.mjs
var MatOptionModule = class _MatOptionModule {
  static \u0275fac = function MatOptionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatOptionModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatOptionModule,
    imports: [MatRippleModule, MatPseudoCheckboxModule, MatOption, MatOptgroup],
    exports: [MatOption, MatOptgroup, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatRippleModule, MatPseudoCheckboxModule, MatOption, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatOptionModule, [{
    type: NgModule,
    args: [{
      imports: [MatRippleModule, MatPseudoCheckboxModule, MatOption, MatOptgroup],
      exports: [MatOption, MatOptgroup, BidiModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/_error-state-chunk.mjs
var _ErrorStateTracker = class {
  _defaultMatcher;
  _parentFormGroup;
  _parentForm;
  _stateChanges;
  errorState = false;
  matcher;
  ngControl;
  formField;
  constructor(_defaultMatcher, directive, _parentFormGroup, _parentForm, _stateChanges) {
    this._defaultMatcher = _defaultMatcher;
    this._parentFormGroup = _parentFormGroup;
    this._parentForm = _parentForm;
    this._stateChanges = _stateChanges;
    if (!directive) {
      this.ngControl = this.formField = null;
    } else if (isSignal(directive.field) && !directive.updateValueAndValidity) {
      this.formField = directive;
      this.ngControl = null;
    } else {
      this.formField = null;
      this.ngControl = directive;
    }
  }
  updateErrorState() {
    const oldState = this.errorState;
    const newState = this._getCurrentErrorState(this.matcher || this._defaultMatcher);
    if (newState !== oldState) {
      this.errorState = newState;
      this._stateChanges.next();
    }
  }
  _getCurrentErrorState(matcher) {
    if (this.formField && matcher?.isSignalErrorState) {
      return matcher.isSignalErrorState(this.formField.field()) ?? false;
    }
    const parent = this._parentFormGroup || this._parentForm;
    const control = this.ngControl ? this.ngControl.control : null;
    return matcher?.isErrorState(control, parent) ?? false;
  }
};

// node_modules/@angular/material/fesm2022/_internal-form-field-chunk.mjs
var _c02 = ["*"];
var _MatInternalFormField = class __MatInternalFormField {
  labelPosition = "after";
  static \u0275fac = function _MatInternalFormField_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __MatInternalFormField)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: __MatInternalFormField,
    selectors: [["", "mat-internal-form-field", ""]],
    hostAttrs: [1, "mdc-form-field", "mat-internal-form-field"],
    hostVars: 2,
    hostBindings: function _MatInternalFormField_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mdc-form-field--align-end", ctx.labelPosition === "before");
      }
    },
    inputs: {
      labelPosition: "labelPosition"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function _MatInternalFormField_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: [".mat-internal-form-field {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle;\n}\n.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {\n  margin-left: 0;\n  margin-right: auto;\n  padding-left: 4px;\n  padding-right: 0;\n  order: 0;\n}\n[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {\n  margin-left: auto;\n  margin-right: 0;\n  padding-left: 0;\n  padding-right: 4px;\n}\n\n.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {\n  margin-left: auto;\n  margin-right: 0;\n  padding-left: 0;\n  padding-right: 4px;\n  order: -1;\n}\n[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {\n  margin-left: 0;\n  margin-right: auto;\n  padding-left: 4px;\n  padding-right: 0;\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatInternalFormField, [{
    type: Component,
    args: [{
      selector: "[mat-internal-form-field]",
      template: "<ng-content></ng-content>",
      encapsulation: ViewEncapsulation.None,
      host: {
        "class": "mdc-form-field mat-internal-form-field",
        "[class.mdc-form-field--align-end]": 'labelPosition === "before"'
      },
      styles: [".mat-internal-form-field {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle;\n}\n.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {\n  margin-left: 0;\n  margin-right: auto;\n  padding-left: 4px;\n  padding-right: 0;\n  order: 0;\n}\n[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {\n  margin-left: auto;\n  margin-right: 0;\n  padding-left: 0;\n  padding-right: 4px;\n}\n\n.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {\n  margin-left: auto;\n  margin-right: 0;\n  padding-left: 0;\n  padding-right: 4px;\n  order: -1;\n}\n[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {\n  margin-left: 0;\n  margin-right: auto;\n  padding-left: 4px;\n  padding-right: 0;\n}\n"]
    }]
  }], null, {
    labelPosition: [{
      type: Input,
      args: [{
        required: true
      }]
    }]
  });
})();

// node_modules/@angular/material/fesm2022/core.mjs
var VERSION2 = new Version("22.1.5");
var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
var TIME_REGEX = /^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;
function range(length, valueFunction) {
  const valuesArray = Array(length);
  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}
var NativeDateAdapter = class _NativeDateAdapter extends DateAdapter {
  _matDateLocale = inject(MAT_DATE_LOCALE, {
    optional: true
  });
  constructor() {
    super();
    const matDateLocale = inject(MAT_DATE_LOCALE, {
      optional: true
    });
    if (matDateLocale !== void 0) {
      this._matDateLocale = matDateLocale;
    }
    super.setLocale(this._matDateLocale);
  }
  getYear(date) {
    return date.getFullYear();
  }
  getMonth(date) {
    return date.getMonth();
  }
  getDate(date) {
    return date.getDate();
  }
  getDayOfWeek(date) {
    return date.getDay();
  }
  getMonthNames(style) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      month: style,
      timeZone: "utc"
    });
    return range(12, (i) => this._format(dtf, new Date(2017, i, 1)));
  }
  getDateNames() {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      day: "numeric",
      timeZone: "utc"
    });
    return range(31, (i) => this._format(dtf, new Date(2017, 0, i + 1)));
  }
  getDayOfWeekNames(style) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      weekday: style,
      timeZone: "utc"
    });
    return range(7, (i) => this._format(dtf, new Date(2017, 0, i + 1)));
  }
  getYearName(date) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      year: "numeric",
      timeZone: "utc"
    });
    return this._format(dtf, date);
  }
  getFirstDayOfWeek() {
    if (typeof Intl !== "undefined" && Intl.Locale) {
      const locale = new Intl.Locale(this.locale);
      const firstDay = (locale.getWeekInfo?.() || locale.weekInfo)?.firstDay ?? 0;
      return firstDay === 7 ? 0 : firstDay;
    }
    return 0;
  }
  getNumDaysInMonth(date) {
    return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
  }
  clone(date) {
    return new Date(date.getTime());
  }
  createDate(year, month, date) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (month < 0 || month > 11) {
        throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
      }
      if (date < 1) {
        throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
      }
    }
    let result = this._createDateWithOverflow(year, month, date);
    if (result.getMonth() != month && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Invalid date "${date}" for month with index "${month}".`);
    }
    return result;
  }
  today() {
    return /* @__PURE__ */ new Date();
  }
  parse(value, parseFormat) {
    if (typeof value == "number") {
      return new Date(value);
    }
    return value ? new Date(Date.parse(value)) : null;
  }
  format(date, displayFormat) {
    if (!this.isValid(date)) {
      throw Error("NativeDateAdapter: Cannot format invalid date.");
    }
    const dtf = new Intl.DateTimeFormat(this.locale, __spreadProps(__spreadValues({}, displayFormat), {
      timeZone: "utc"
    }));
    return this._format(dtf, date);
  }
  addCalendarYears(date, years) {
    return this.addCalendarMonths(date, years * 12);
  }
  addCalendarMonths(date, months) {
    let newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
    if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
      newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
    }
    return newDate;
  }
  addCalendarDays(date, days) {
    return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
  }
  toIso8601(date) {
    return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join("-");
  }
  deserialize(value) {
    if (typeof value === "string") {
      if (!value) {
        return null;
      }
      if (ISO_8601_REGEX.test(value)) {
        let date = new Date(value);
        if (this.isValid(date)) {
          return date;
        }
      }
    }
    return super.deserialize(value);
  }
  isDateInstance(obj) {
    return obj instanceof Date;
  }
  isValid(date) {
    return !isNaN(date.getTime());
  }
  invalid() {
    return /* @__PURE__ */ new Date(NaN);
  }
  setTime(target, hours, minutes, seconds) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!inRange(hours, 0, 23)) {
        throw Error(`Invalid hours "${hours}". Hours value must be between 0 and 23.`);
      }
      if (!inRange(minutes, 0, 59)) {
        throw Error(`Invalid minutes "${minutes}". Minutes value must be between 0 and 59.`);
      }
      if (!inRange(seconds, 0, 59)) {
        throw Error(`Invalid seconds "${seconds}". Seconds value must be between 0 and 59.`);
      }
    }
    const clone = this.clone(target);
    clone.setHours(hours, minutes, seconds, 0);
    return clone;
  }
  getHours(date) {
    return date.getHours();
  }
  getMinutes(date) {
    return date.getMinutes();
  }
  getSeconds(date) {
    return date.getSeconds();
  }
  parseTime(userValue, parseFormat) {
    if (typeof userValue !== "string") {
      return userValue instanceof Date ? new Date(userValue.getTime()) : null;
    }
    const value = userValue.trim();
    if (value.length === 0) {
      return null;
    }
    let result = this._parseTimeString(value);
    if (result === null) {
      const withoutExtras = value.replace(/[^0-9:(AM|PM)]/gi, "").trim();
      if (withoutExtras.length > 0) {
        result = this._parseTimeString(withoutExtras);
      }
    }
    return result || this.invalid();
  }
  addSeconds(date, amount) {
    return new Date(date.getTime() + amount * 1e3);
  }
  _createDateWithOverflow(year, month, date) {
    const d = /* @__PURE__ */ new Date();
    d.setFullYear(year, month, date);
    d.setHours(0, 0, 0, 0);
    return d;
  }
  _2digit(n) {
    return ("00" + n).slice(-2);
  }
  _format(dtf, date) {
    const d = /* @__PURE__ */ new Date();
    d.setUTCFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    d.setUTCHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    return dtf.format(d);
  }
  _parseTimeString(value) {
    const parsed = value.toUpperCase().match(TIME_REGEX);
    if (parsed) {
      let hours = parseInt(parsed[1]);
      const minutes = parseInt(parsed[2]);
      let seconds = parsed[3] == null ? void 0 : parseInt(parsed[3]);
      const amPm = parsed[4];
      if (hours === 12) {
        hours = amPm === "AM" ? 0 : hours;
      } else if (amPm === "PM") {
        hours += 12;
      }
      if (inRange(hours, 0, 23) && inRange(minutes, 0, 59) && (seconds == null || inRange(seconds, 0, 59))) {
        return this.setTime(this.today(), hours, minutes, seconds || 0);
      }
    }
    return null;
  }
  static \u0275fac = function NativeDateAdapter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NativeDateAdapter)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _NativeDateAdapter,
    factory: _NativeDateAdapter.\u0275fac,
    autoProvided: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeDateAdapter, [{
    type: Service,
    args: [{
      autoProvided: false
    }]
  }], () => [], null);
})();
function inRange(value, min, max) {
  return !isNaN(value) && value >= min && value <= max;
}
var MAT_NATIVE_DATE_FORMATS = {
  parse: {
    dateInput: null,
    timeInput: null
  },
  display: {
    dateInput: {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    },
    timeInput: {
      hour: "numeric",
      minute: "numeric"
    },
    monthYearLabel: {
      year: "numeric",
      month: "short"
    },
    dateA11yLabel: {
      year: "numeric",
      month: "long",
      day: "numeric"
    },
    monthYearA11yLabel: {
      year: "numeric",
      month: "long"
    },
    timeOptionLabel: {
      hour: "numeric",
      minute: "numeric"
    }
  }
};
var NativeDateModule = class _NativeDateModule {
  static \u0275fac = function NativeDateModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NativeDateModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NativeDateModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [{
      provide: DateAdapter,
      useClass: NativeDateAdapter
    }]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeDateModule, [{
    type: NgModule,
    args: [{
      providers: [{
        provide: DateAdapter,
        useClass: NativeDateAdapter
      }]
    }]
  }], null, null);
})();
var MatNativeDateModule = class _MatNativeDateModule {
  static \u0275fac = function MatNativeDateModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatNativeDateModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatNativeDateModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [provideNativeDateAdapter()]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatNativeDateModule, [{
    type: NgModule,
    args: [{
      providers: [provideNativeDateAdapter()]
    }]
  }], null, null);
})();
function provideNativeDateAdapter(formats = MAT_NATIVE_DATE_FORMATS) {
  return [{
    provide: DateAdapter,
    useClass: NativeDateAdapter
  }, {
    provide: MAT_DATE_FORMATS,
    useValue: formats
  }];
}

// node_modules/@angular/forms/fesm2022/forms.mjs
/**
 * @license Angular v22.1.5
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var BaseControlValueAccessor = class _BaseControlValueAccessor {
  _renderer;
  _elementRef;
  onChange = (_) => {
  };
  onTouched = () => {
  };
  constructor(_renderer, _elementRef) {
    this._renderer = _renderer;
    this._elementRef = _elementRef;
  }
  setProperty(key, value) {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  setDisabledState(isDisabled) {
    this.setProperty("disabled", isDisabled);
  }
  static \u0275fac = function BaseControlValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseControlValueAccessor
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseControlValueAccessor, [{
    type: Directive
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], null);
})();
var BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BuiltInControlValueAccessor_BaseFactory;
    return function BuiltInControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275BuiltInControlValueAccessor_BaseFactory || (\u0275BuiltInControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_BuiltInControlValueAccessor)))(__ngFactoryType__ || _BuiltInControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BuiltInControlValueAccessor,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuiltInControlValueAccessor, [{
    type: Directive
  }], null, null);
})();
var NG_VALUE_ACCESSOR = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgValueAccessor" : "");
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxControlValueAccessor),
  multi: true
};
var CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
  writeValue(value) {
    this.setProperty("checked", value);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckboxControlValueAccessor_BaseFactory;
    return function CheckboxControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275CheckboxControlValueAccessor_BaseFactory || (\u0275CheckboxControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxControlValueAccessor)))(__ngFactoryType__ || _CheckboxControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CheckboxControlValueAccessor,
    selectors: [["input", "type", "checkbox", "formControlName", "", 3, "ngNoCva", ""], ["input", "type", "checkbox", "formControl", "", 3, "ngNoCva", ""], ["input", "type", "checkbox", "ngModel", "", 3, "ngNoCva", ""]],
    hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.checked);
        })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([CHECKBOX_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox]:not([ngNoCva])[formControlName],input[type=checkbox]:not([ngNoCva])[formControl],input[type=checkbox]:not([ngNoCva])[ngModel]",
      host: {
        "(change)": "onChange($any($event.target).checked)",
        "(blur)": "onTouched()"
      },
      providers: [CHECKBOX_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, null);
})();
var DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DefaultValueAccessor),
  multi: true
};
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
var COMPOSITION_BUFFER_MODE = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "CompositionEventMode" : "");
var DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
  _compositionMode;
  _composing = false;
  constructor(renderer, elementRef, _compositionMode) {
    super(renderer, elementRef);
    this._compositionMode = _compositionMode;
    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  _handleInput(value) {
    if (!this._compositionMode || this._compositionMode && !this._composing) {
      this.onChange(value);
    }
  }
  _compositionStart() {
    this._composing = true;
  }
  _compositionEnd(value) {
    this._composing = false;
    this._compositionMode && this.onChange(value);
  }
  static \u0275fac = function DefaultValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DefaultValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(COMPOSITION_BUFFER_MODE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _DefaultValueAccessor,
    selectors: [["input", "formControlName", "", 3, "type", "checkbox", 3, "ngNoCva", ""], ["textarea", "formControlName", "", 3, "ngNoCva", ""], ["input", "formControl", "", 3, "type", "checkbox", 3, "ngNoCva", ""], ["textarea", "formControl", "", 3, "ngNoCva", ""], ["input", "ngModel", "", 3, "type", "checkbox", 3, "ngNoCva", ""], ["textarea", "ngModel", "", 3, "ngNoCva", ""], ["", "ngDefaultControl", ""]],
    hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
          return ctx._handleInput($event.target.value);
        })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
          return ctx._compositionStart();
        })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
          return ctx._compositionEnd($event.target.value);
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([DEFAULT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input:not([type=checkbox]):not([ngNoCva])[formControlName],textarea:not([ngNoCva])[formControlName],input:not([type=checkbox]):not([ngNoCva])[formControl],textarea:not([ngNoCva])[formControl],input:not([type=checkbox]):not([ngNoCva])[ngModel],textarea:not([ngNoCva])[ngModel],[ngDefaultControl]",
      host: {
        "(input)": "_handleInput($any($event.target).value)",
        "(blur)": "onTouched()",
        "(compositionstart)": "_compositionStart()",
        "(compositionend)": "_compositionEnd($any($event.target).value)"
      },
      providers: [DEFAULT_VALUE_ACCESSOR],
      standalone: false
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COMPOSITION_BUFFER_MODE]
    }]
  }], null);
})();
function isEmptyInputValue(value) {
  return value == null || lengthOrSize(value) === 0;
}
function lengthOrSize(value) {
  if (value == null) {
    return null;
  } else if (Array.isArray(value) || typeof value === "string") {
    return value.length;
  } else if (value instanceof Set) {
    return value.size;
  }
  return null;
}
var NG_VALIDATORS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgValidators" : "");
var NG_ASYNC_VALIDATORS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgAsyncValidators" : "");
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var Validators = class {
  static min(min) {
    return minValidator(min);
  }
  static max(max) {
    return maxValidator(max);
  }
  static required(control) {
    return requiredValidator(control);
  }
  static requiredTrue(control) {
    return requiredTrueValidator(control);
  }
  static email(control) {
    return emailValidator(control);
  }
  static minLength(minLength) {
    return minLengthValidator(minLength);
  }
  static maxLength(maxLength) {
    return maxLengthValidator(maxLength);
  }
  static pattern(pattern) {
    return patternValidator(pattern);
  }
  static nullValidator(control) {
    return nullValidator();
  }
  static compose(validators) {
    return compose(validators);
  }
  static composeAsync(validators) {
    return composeAsync(validators);
  }
};
function minValidator(min) {
  return (control) => {
    if (control.value == null || min == null) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? {
      "min": {
        "min": min,
        "actual": control.value
      }
    } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (control.value == null || max == null) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? {
      "max": {
        "max": max,
        "actual": control.value
      }
    } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? {
    "required": true
  } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : {
    "required": true
  };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : {
    "email": true
  };
}
function minLengthValidator(minLength) {
  return (control) => {
    const length = control.value?.length ?? lengthOrSize(control.value);
    if (length === null || length === 0) {
      return null;
    }
    return length < minLength ? {
      "minlength": {
        "requiredLength": minLength,
        "actualLength": length
      }
    } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    const length = control.value?.length ?? lengthOrSize(control.value);
    if (length !== null && length > maxLength) {
      return {
        "maxlength": {
          "requiredLength": maxLength,
          "actualLength": length
        }
      };
    }
    return null;
  };
}
function patternValidator(pattern) {
  if (!pattern) return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^") regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$") regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : {
      "pattern": {
        "requiredPattern": regexStr,
        "actualValue": value
      }
    };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
  });
}
function compose(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null) return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators) return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current, v)) {
      current.push(v);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
var AbstractControlDirective = class {
  get value() {
    return this.control ? this.control.value : null;
  }
  get valid() {
    return this.control ? this.control.valid : null;
  }
  get invalid() {
    return this.control ? this.control.invalid : null;
  }
  get pending() {
    return this.control ? this.control.pending : null;
  }
  get disabled() {
    return this.control ? this.control.disabled : null;
  }
  get enabled() {
    return this.control ? this.control.enabled : null;
  }
  get errors() {
    return this.control ? this.control.errors : null;
  }
  get pristine() {
    return this.control ? this.control.pristine : null;
  }
  get dirty() {
    return this.control ? this.control.dirty : null;
  }
  get touched() {
    return this.control ? this.control.touched : null;
  }
  get status() {
    return this.control ? this.control.status : null;
  }
  get untouched() {
    return this.control ? this.control.untouched : null;
  }
  get statusChanges() {
    return this.control ? this.control.statusChanges : null;
  }
  get valueChanges() {
    return this.control ? this.control.valueChanges : null;
  }
  get path() {
    return null;
  }
  _composedValidatorFn;
  _composedAsyncValidatorFn;
  _rawValidators = [];
  _rawAsyncValidators = [];
  _setValidators(validators) {
    this._rawValidators = validators || [];
    this._composedValidatorFn = composeValidators(this._rawValidators);
  }
  _setAsyncValidators(validators) {
    this._rawAsyncValidators = validators || [];
    this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
  }
  get validator() {
    return this._composedValidatorFn || null;
  }
  get asyncValidator() {
    return this._composedAsyncValidatorFn || null;
  }
  _onDestroyCallbacks = [];
  _registerOnDestroy(fn) {
    this._onDestroyCallbacks.push(fn);
  }
  _invokeOnDestroyCallbacks() {
    this._onDestroyCallbacks.forEach((fn) => fn());
    this._onDestroyCallbacks = [];
  }
  reset(value = void 0) {
    this.control?.reset(value);
  }
  hasError(errorCode, path) {
    return this.control ? this.control.hasError(errorCode, path) : false;
  }
  getError(errorCode, path) {
    return this.control ? this.control.getError(errorCode, path) : null;
  }
};
var ControlContainer = class extends AbstractControlDirective {
  name;
  get formDirective() {
    return null;
  }
  get path() {
    return null;
  }
};
var formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
var formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
var formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
var ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
var ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
var VERSION3 = /* @__PURE__ */ new Version("22.1.5");
function controlParentException(nameOrIndex) {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup or formArray directive. You'll want to add a formGroup/formArray
      directive and pass it an existing FormGroup/FormArray instance (you can create one in your class).

      ${describeFormControl(nameOrIndex)}

    Example:

    ${formControlNameExample}`);
}
function describeFormControl(nameOrIndex) {
  if (nameOrIndex == null || nameOrIndex === "") {
    return "";
  }
  const valueType = typeof nameOrIndex === "string" ? "name" : "index";
  return `Affected Form Control ${valueType}: "${nameOrIndex}"`;
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
var disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
var asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
function ngModelWarning(directiveName) {
  const versionSubDomain = VERSION3.major !== "0" ? `v${VERSION3.major}.` : "";
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://${versionSubDomain}angular.dev/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
var VALID = "VALID";
var INVALID = "INVALID";
var PENDING = "PENDING";
var DISABLED = "DISABLED";
var ControlEvent = class {
};
var ValueChangeEvent = class extends ControlEvent {
  value;
  source;
  constructor(value, source) {
    super();
    this.value = value;
    this.source = source;
  }
};
var PristineChangeEvent = class extends ControlEvent {
  pristine;
  source;
  constructor(pristine, source) {
    super();
    this.pristine = pristine;
    this.source = source;
  }
};
var TouchedChangeEvent = class extends ControlEvent {
  touched;
  source;
  constructor(touched, source) {
    super();
    this.touched = touched;
    this.source = source;
  }
};
var StatusChangeEvent = class extends ControlEvent {
  status;
  source;
  constructor(status, source) {
    super();
    this.status = status;
    this.source = source;
  }
};
var FormSubmittedEvent = class extends ControlEvent {
  source;
  constructor(source) {
    super();
    this.source = source;
  }
};
var FormResetEvent = class extends ControlEvent {
  source;
  constructor(source) {
    super();
    this.source = source;
  }
};
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!hasOwnControl(controls, key)) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(-1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
var AbstractControl = class {
  _pendingDirty = false;
  _hasOwnPendingAsyncValidator = null;
  _pendingTouched = false;
  _onCollectionChange = () => {
  };
  _updateOn;
  _hasRequired = signal(false, ...ngDevMode ? [{
    debugName: "_hasRequired"
  }] : []);
  _parent = null;
  _asyncValidationSubscription;
  _composedValidatorFn;
  _composedAsyncValidatorFn;
  _rawValidators;
  _rawAsyncValidators;
  value;
  constructor(validators, asyncValidators) {
    this._assignValidators(validators);
    this._assignAsyncValidators(asyncValidators);
  }
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(validatorFn) {
    this._rawValidators = this._composedValidatorFn = validatorFn;
    this._updateHasRequiredValidator();
  }
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(asyncValidatorFn) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
  }
  get parent() {
    return this._parent;
  }
  get status() {
    return untracked(this.statusReactive);
  }
  set status(v) {
    untracked(() => this.statusReactive.set(v));
  }
  _status = computed(() => this.statusReactive(), ...ngDevMode ? [{
    debugName: "_status"
  }] : []);
  statusReactive = signal(void 0, ...ngDevMode ? [{
    debugName: "statusReactive"
  }] : []);
  get valid() {
    return this.status === VALID;
  }
  get invalid() {
    return this.status === INVALID;
  }
  get pending() {
    return this.status === PENDING;
  }
  get disabled() {
    return this.status === DISABLED;
  }
  get enabled() {
    return this.status !== DISABLED;
  }
  errors;
  get pristine() {
    return untracked(this.pristineReactive);
  }
  set pristine(v) {
    untracked(() => this.pristineReactive.set(v));
  }
  _pristine = computed(() => this.pristineReactive(), ...ngDevMode ? [{
    debugName: "_pristine"
  }] : []);
  pristineReactive = signal(true, ...ngDevMode ? [{
    debugName: "pristineReactive"
  }] : []);
  get dirty() {
    return !this.pristine;
  }
  get touched() {
    return untracked(this.touchedReactive);
  }
  set touched(v) {
    untracked(() => this.touchedReactive.set(v));
  }
  _touched = computed(() => this.touchedReactive(), ...ngDevMode ? [{
    debugName: "_touched"
  }] : []);
  touchedReactive = signal(false, ...ngDevMode ? [{
    debugName: "touchedReactive"
  }] : []);
  get untouched() {
    return !this.touched;
  }
  _events = new Subject();
  events = this._events.asObservable();
  valueChanges;
  statusChanges;
  get updateOn() {
    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
  }
  setValidators(validators) {
    this._assignValidators(validators);
  }
  setAsyncValidators(validators) {
    this._assignAsyncValidators(validators);
  }
  addValidators(validators) {
    this.setValidators(addValidators(validators, this._rawValidators));
  }
  addAsyncValidators(validators) {
    this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
  }
  removeValidators(validators) {
    this.setValidators(removeValidators(validators, this._rawValidators));
  }
  removeAsyncValidators(validators) {
    this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
  }
  hasValidator(validator) {
    return hasValidator(this._rawValidators, validator);
  }
  hasAsyncValidator(validator) {
    return hasValidator(this._rawAsyncValidators, validator);
  }
  clearValidators() {
    this.validator = null;
  }
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  markAsTouched(opts = {}) {
    const changed = this.touched === false;
    this.touched = true;
    const sourceControl = opts.sourceControl ?? this;
    if (!opts.onlySelf) {
      this._parent?.markAsTouched(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(true, sourceControl));
    }
  }
  markAllAsDirty(opts = {}) {
    this.markAsDirty({
      onlySelf: true,
      emitEvent: opts.emitEvent,
      sourceControl: this
    });
    this._forEachChild((control) => control.markAllAsDirty(opts));
  }
  markAllAsTouched(opts = {}) {
    this.markAsTouched({
      onlySelf: true,
      emitEvent: opts.emitEvent,
      sourceControl: this
    });
    this._forEachChild((control) => control.markAllAsTouched(opts));
  }
  markAsUntouched(opts = {}) {
    const changed = this.touched === true;
    this.touched = false;
    this._pendingTouched = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsUntouched({
        onlySelf: true,
        emitEvent: opts.emitEvent,
        sourceControl
      });
    });
    if (!opts.onlySelf) {
      this._parent?._updateTouched(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(false, sourceControl));
    }
  }
  markAsDirty(opts = {}) {
    const changed = this.pristine === true;
    this.pristine = false;
    const sourceControl = opts.sourceControl ?? this;
    if (!opts.onlySelf) {
      this._parent?.markAsDirty(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(false, sourceControl));
    }
  }
  markAsPristine(opts = {}) {
    const changed = this.pristine === false;
    this.pristine = true;
    this._pendingDirty = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsPristine({
        onlySelf: true,
        emitEvent: opts.emitEvent
      });
    });
    if (!opts.onlySelf) {
      this._parent?._updatePristine(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(true, sourceControl));
    }
  }
  markAsPending(opts = {}) {
    this.status = PENDING;
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.statusChanges.emit(this.status);
    }
    if (!opts.onlySelf) {
      this._parent?.markAsPending(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  disable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = DISABLED;
    this.errors = null;
    this._forEachChild((control) => {
      control.disable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this._updateValue();
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(true));
  }
  enable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = VALID;
    this._forEachChild((control) => {
      control.enable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(false));
  }
  _updateAncestors(opts, sourceControl) {
    if (!opts.onlySelf) {
      this._parent?.updateValueAndValidity(opts);
      if (!opts.skipPristineCheck) {
        this._parent?._updatePristine({}, sourceControl);
      }
      this._parent?._updateTouched({}, sourceControl);
    }
  }
  setParent(parent) {
    this._parent = parent;
  }
  getRawValue() {
    return this.value;
  }
  updateValueAndValidity(opts = {}) {
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
      const shouldHaveEmitted = this._cancelExistingSubscription();
      this.errors = this._runValidator();
      this.status = this._calculateStatus();
      if (this.status === VALID || this.status === PENDING) {
        this._runAsyncValidator(shouldHaveEmitted, opts.emitEvent);
      }
    }
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    if (!opts.onlySelf) {
      this._parent?.updateValueAndValidity(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  _updateTreeValidity(opts = {
    emitEvent: true
  }) {
    this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? DISABLED : VALID;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(shouldHaveEmitted, emitEvent) {
    if (this.asyncValidator) {
      this.status = PENDING;
      this._hasOwnPendingAsyncValidator = {
        emitEvent: emitEvent !== false,
        shouldHaveEmitted: shouldHaveEmitted !== false
      };
      const obs = toObservable(this.asyncValidator(this));
      this._asyncValidationSubscription = obs.subscribe((errors) => {
        this._hasOwnPendingAsyncValidator = null;
        this.setErrors(errors, {
          emitEvent,
          shouldHaveEmitted
        });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      const shouldHaveEmitted = (this._hasOwnPendingAsyncValidator?.emitEvent || this._hasOwnPendingAsyncValidator?.shouldHaveEmitted) ?? false;
      this._hasOwnPendingAsyncValidator = null;
      return shouldHaveEmitted;
    }
    return false;
  }
  setErrors(errors, opts = {}) {
    this.errors = errors;
    this._updateControlsErrors(opts.emitEvent !== false, this, opts.shouldHaveEmitted);
  }
  get(path) {
    let currPath = path;
    if (currPath == null) return null;
    if (!Array.isArray(currPath)) currPath = currPath.split(".");
    if (currPath.length === 0) return null;
    return currPath.reduce((control, name) => control && control._find(name), this);
  }
  getError(errorCode, path) {
    const control = path ? this.get(path) : this;
    return control?.errors ? control.errors[errorCode] : null;
  }
  hasError(errorCode, path) {
    return !!this.getError(errorCode, path);
  }
  get root() {
    let x = this;
    while (x._parent) {
      x = x._parent;
    }
    return x;
  }
  _updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted) {
    this.status = this._calculateStatus();
    if (emitEvent) {
      this.statusChanges.emit(this.status);
    }
    if (emitEvent || shouldHaveEmitted) {
      this._events.next(new StatusChangeEvent(this.status, changedControl));
    }
    if (this._parent) {
      this._parent._updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted);
    }
  }
  _initObservables() {
    this.valueChanges = new EventEmitter();
    this.statusChanges = new EventEmitter();
  }
  _calculateStatus() {
    if (this._allControlsDisabled()) return DISABLED;
    if (this.errors) return INVALID;
    if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING)) return PENDING;
    if (this._anyControlsHaveStatus(INVALID)) return INVALID;
    return VALID;
  }
  _anyControlsHaveStatus(status) {
    return this._anyControls((control) => control.status === status);
  }
  _anyControlsDirty() {
    return this._anyControls((control) => control.dirty);
  }
  _anyControlsTouched() {
    return this._anyControls((control) => control.touched);
  }
  _updatePristine(opts, changedControl) {
    const newPristine = !this._anyControlsDirty();
    const changed = this.pristine !== newPristine;
    this.pristine = newPristine;
    if (!opts.onlySelf) {
      this._parent?._updatePristine(opts, changedControl);
    }
    if (changed) {
      this._events.next(new PristineChangeEvent(this.pristine, changedControl));
    }
  }
  _updateTouched(opts = {}, changedControl) {
    this.touched = this._anyControlsTouched();
    this._events.next(new TouchedChangeEvent(this.touched, changedControl));
    if (!opts.onlySelf) {
      this._parent?._updateTouched(opts, changedControl);
    }
  }
  _onDisabledChange = [];
  _registerOnCollectionChange(fn) {
    this._onCollectionChange = fn;
  }
  _setUpdateStrategy(opts) {
    if (isOptionsObj(opts) && opts.updateOn != null) {
      this._updateOn = opts.updateOn;
    }
  }
  _parentMarkedDirty(onlySelf) {
    return !onlySelf && !!this._parent?.dirty && !this._parent._anyControlsDirty();
  }
  _find(name) {
    return null;
  }
  _assignValidators(validators) {
    this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedValidatorFn = coerceToValidator(this._rawValidators);
    this._updateHasRequiredValidator();
  }
  _assignAsyncValidators(validators) {
    this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
  }
  _updateHasRequiredValidator() {
    untracked(() => this._hasRequired.set(this.hasValidator(Validators.required)));
  }
};
function hasOwnControl(controls, name) {
  return Object.hasOwn(controls, name);
}
function isNativeFormElement(element) {
  return element.tagName === "INPUT" || element.tagName === "SELECT" || element.tagName === "TEXTAREA";
}
function elementAcceptsMinMax(element) {
  if (element.tagName !== "INPUT") {
    return false;
  }
  const type = element.type;
  return type === "number" || type === "range" || type === "date" || type === "month";
}
function isTextualFormElement(element) {
  return element.tagName === "INPUT" || element.tagName === "TEXTAREA";
}
function setNativeDomProperty(renderer, element, name, value) {
  switch (name) {
    case "name":
      renderer.setAttribute(element, name, value);
      break;
    case "disabled":
    case "readonly":
    case "required":
      if (value) {
        renderer.setAttribute(element, name, "");
      } else {
        renderer.removeAttribute(element, name);
      }
      break;
    case "max":
    case "min":
    case "minLength":
    case "maxLength":
      if (value !== void 0) {
        renderer.setAttribute(element, name, value.toString());
      } else {
        renderer.removeAttribute(element, name);
      }
      break;
  }
}
var ReactiveValidationError = class {
  kind;
  context;
  control;
  message;
  constructor({
    kind,
    context,
    control
  }) {
    this.kind = kind;
    this.context = context;
    this.control = control;
  }
};
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
var AbstractValidatorDirective = class _AbstractValidatorDirective {
  _validator = nullValidator;
  _onChange;
  _enabled;
  ngOnChanges(changes) {
    if (this.inputName in changes) {
      const input = this.normalizeInput(changes[this.inputName].currentValue);
      this._enabled = this.enabled(input);
      this._validator = this._enabled ? this.createValidator(input) : nullValidator;
      this._onChange?.();
    }
  }
  validate(control) {
    return this._validator(control);
  }
  registerOnValidatorChange(fn) {
    this._onChange = fn;
  }
  enabled(input) {
    return input != null;
  }
  static \u0275fac = function AbstractValidatorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AbstractValidatorDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AbstractValidatorDirective,
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractValidatorDirective, [{
    type: Directive
  }], null, null);
})();
var MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};
var MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
  max;
  inputName = "max";
  normalizeInput = (input) => toFloat(input);
  createValidator = (max) => maxValidator(max);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MaxValidator_BaseFactory;
    return function MaxValidator_Factory(__ngFactoryType__) {
      return (\u0275MaxValidator_BaseFactory || (\u0275MaxValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxValidator)))(__ngFactoryType__ || _MaxValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MaxValidator,
    selectors: [["input", "type", "number", "max", "", "formControlName", ""], ["input", "type", "number", "max", "", "formControl", ""], ["input", "type", "number", "max", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MaxValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("max", ctx._enabled ? ctx.max : null);
      }
    },
    inputs: {
      max: "max"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MAX_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
      providers: [MAX_VALIDATOR],
      host: {
        "[attr.max]": "_enabled ? max : null"
      },
      standalone: false
    }]
  }], null, {
    max: [{
      type: Input
    }]
  });
})();
var MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidator),
  multi: true
};
var MinValidator = class _MinValidator extends AbstractValidatorDirective {
  min;
  inputName = "min";
  normalizeInput = (input) => toFloat(input);
  createValidator = (min) => minValidator(min);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MinValidator_BaseFactory;
    return function MinValidator_Factory(__ngFactoryType__) {
      return (\u0275MinValidator_BaseFactory || (\u0275MinValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinValidator)))(__ngFactoryType__ || _MinValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MinValidator,
    selectors: [["input", "type", "number", "min", "", "formControlName", ""], ["input", "type", "number", "min", "", "formControl", ""], ["input", "type", "number", "min", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MinValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("min", ctx._enabled ? ctx.min : null);
      }
    },
    inputs: {
      min: "min"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MIN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
      providers: [MIN_VALIDATOR],
      host: {
        "[attr.min]": "_enabled ? min : null"
      },
      standalone: false
    }]
  }], null, {
    min: [{
      type: Input
    }]
  });
})();
var REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RequiredValidator),
  multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CheckboxRequiredValidator),
  multi: true
};
var RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
  required;
  inputName = "required";
  normalizeInput = booleanAttribute;
  createValidator = (input) => requiredValidator;
  enabled(input) {
    return input;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RequiredValidator_BaseFactory;
    return function RequiredValidator_Factory(__ngFactoryType__) {
      return (\u0275RequiredValidator_BaseFactory || (\u0275RequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_RequiredValidator)))(__ngFactoryType__ || _RequiredValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RequiredValidator,
    selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
    hostVars: 1,
    hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("required", ctx._enabled ? "" : null);
      }
    },
    inputs: {
      required: "required"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequiredValidator, [{
    type: Directive,
    args: [{
      selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
      providers: [REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      },
      standalone: false
    }]
  }], null, {
    required: [{
      type: Input
    }]
  });
})();
var CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
  createValidator = (input) => requiredTrueValidator;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckboxRequiredValidator_BaseFactory;
    return function CheckboxRequiredValidator_Factory(__ngFactoryType__) {
      return (\u0275CheckboxRequiredValidator_BaseFactory || (\u0275CheckboxRequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxRequiredValidator)))(__ngFactoryType__ || _CheckboxRequiredValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CheckboxRequiredValidator,
    selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("required", ctx._enabled ? "" : null);
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([CHECKBOX_REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxRequiredValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
      providers: [CHECKBOX_REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      },
      standalone: false
    }]
  }], null, null);
})();
var EMAIL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};
var EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
  email;
  inputName = "email";
  normalizeInput = booleanAttribute;
  createValidator = (input) => emailValidator;
  enabled(input) {
    return input;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275EmailValidator_BaseFactory;
    return function EmailValidator_Factory(__ngFactoryType__) {
      return (\u0275EmailValidator_BaseFactory || (\u0275EmailValidator_BaseFactory = \u0275\u0275getInheritedFactory(_EmailValidator)))(__ngFactoryType__ || _EmailValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _EmailValidator,
    selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
    inputs: {
      email: "email"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([EMAIL_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailValidator, [{
    type: Directive,
    args: [{
      selector: "[email][formControlName],[email][formControl],[email][ngModel]",
      providers: [EMAIL_VALIDATOR],
      standalone: false
    }]
  }], null, {
    email: [{
      type: Input
    }]
  });
})();
var MIN_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinLengthValidator),
  multi: true
};
var MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
  minlength;
  inputName = "minlength";
  normalizeInput = (input) => toInteger(input);
  createValidator = (minlength) => minLengthValidator(minlength);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MinLengthValidator_BaseFactory;
    return function MinLengthValidator_Factory(__ngFactoryType__) {
      return (\u0275MinLengthValidator_BaseFactory || (\u0275MinLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinLengthValidator)))(__ngFactoryType__ || _MinLengthValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MinLengthValidator,
    selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("minlength", ctx._enabled ? ctx.minlength : null);
      }
    },
    inputs: {
      minlength: "minlength"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MIN_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
      providers: [MIN_LENGTH_VALIDATOR],
      host: {
        "[attr.minlength]": "_enabled ? minlength : null"
      },
      standalone: false
    }]
  }], null, {
    minlength: [{
      type: Input
    }]
  });
})();
var MAX_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxLengthValidator),
  multi: true
};
var MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
  maxlength;
  inputName = "maxlength";
  normalizeInput = (input) => toInteger(input);
  createValidator = (maxlength) => maxLengthValidator(maxlength);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MaxLengthValidator_BaseFactory;
    return function MaxLengthValidator_Factory(__ngFactoryType__) {
      return (\u0275MaxLengthValidator_BaseFactory || (\u0275MaxLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxLengthValidator)))(__ngFactoryType__ || _MaxLengthValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MaxLengthValidator,
    selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("maxlength", ctx._enabled ? ctx.maxlength : null);
      }
    },
    inputs: {
      maxlength: "maxlength"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MAX_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
      providers: [MAX_LENGTH_VALIDATOR],
      host: {
        "[attr.maxlength]": "_enabled ? maxlength : null"
      },
      standalone: false
    }]
  }], null, {
    maxlength: [{
      type: Input
    }]
  });
})();
var PATTERN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PatternValidator),
  multi: true
};
var PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
  pattern;
  inputName = "pattern";
  normalizeInput = (input) => input;
  createValidator = (input) => patternValidator(input);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PatternValidator_BaseFactory;
    return function PatternValidator_Factory(__ngFactoryType__) {
      return (\u0275PatternValidator_BaseFactory || (\u0275PatternValidator_BaseFactory = \u0275\u0275getInheritedFactory(_PatternValidator)))(__ngFactoryType__ || _PatternValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PatternValidator,
    selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function PatternValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("pattern", ctx._enabled ? ctx.pattern : null);
      }
    },
    inputs: {
      pattern: "pattern"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([PATTERN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatternValidator, [{
    type: Directive,
    args: [{
      selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
      providers: [PATTERN_VALIDATOR],
      host: {
        "[attr.pattern]": "_enabled ? pattern : null"
      },
      standalone: false
    }]
  }], null, {
    pattern: [{
      type: Input
    }]
  });
})();
var \u0275FORM_CONTROL_INTEGRATION = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "FORM_CONTROL_INTEGRATION" : "");
var CALL_SET_DISABLED_STATE = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "CallSetDisabledState" : "", {
  factory: () => setDisabledStateDefault
});
var setDisabledStateDefault = "always";
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControlValueAccessor(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control) _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor) _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  dir?.valueAccessor?.registerOnChange(noop);
  dir?.valueAccessor?.registerOnTouched(noop);
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop);
  registerOnValidatorChange(dir._rawAsyncValidators, noop);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change") updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange) updateControl(control, dir);
    if (control.updateOn !== "submit") control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty) control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent) dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1) return `path: '${path.join(" -> ")}'`;
  if (path?.[0]) return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!Object.hasOwn(changes, "model")) return false;
  const change = changes["model"];
  if (change.isFirstChange()) return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors) return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode)) _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor) return customAccessor;
  if (builtinAccessor) return builtinAccessor;
  if (defaultAccessor) return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never") return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
var NG_CONTROL_INTEGRATION_PROVIDER = {
  provide: \u0275FORM_CONTROL_INTEGRATION,
  useFactory: () => {
    const control = inject(NgControl, {
      self: true
    });
    return {
      setParseErrors: (source) => {
        control.setParseErrorSource(source);
      },
      set onReset(callback) {
        control.onReset = callback;
      }
    };
  }
};
var NgControl = class extends AbstractControlDirective {
  _parent = null;
  name = null;
  valueAccessor = null;
  isCustomControlBased = false;
  userOnReset;
  resetSubscription;
  set onReset(callback) {
    this.userOnReset = callback;
    this.resetSubscription?.unsubscribe();
    this.resetSubscription = void 0;
    if (this.control) {
      this.resetSubscription = this.control.events.subscribe((event) => {
        if (event instanceof FormResetEvent && this.control) {
          this.userOnReset?.(this.control.value);
        }
      });
      this.subscription?.add(this.resetSubscription);
    }
  }
  isNativeFormElement = false;
  rawValueAccessors;
  _selectedValueAccessor = null;
  get selectedValueAccessor() {
    return this._selectedValueAccessor ??= selectValueAccessor(this, this.rawValueAccessors);
  }
  parseErrorsValidator = null;
  renderer;
  injector;
  requiredValidatorViaDi;
  subscription;
  customControlBindings = null;
  constructor(injector, renderer, rawValueAccessors) {
    super();
    this.injector = injector;
    this.renderer = renderer;
    this.rawValueAccessors = rawValueAccessors;
    this.injector?.get(DestroyRef)?.onDestroy(() => {
      this.removeParseErrorsValidator(this.control);
      this.subscription?.unsubscribe();
    });
  }
  setupCustomControl() {
    this.subscription?.unsubscribe();
    const cdr = this.injector?.get(ChangeDetectorRef);
    if (!this.control || !cdr) {
      return;
    }
    const markForCheck = cdr.markForCheck.bind(cdr);
    this.subscription = new Subscription();
    this.subscription.add(this.control.valueChanges.subscribe(markForCheck));
    this.subscription.add(this.control.statusChanges.subscribe(markForCheck));
    this.resetSubscription?.unsubscribe();
    this.resetSubscription = void 0;
    if (this.userOnReset) {
      this.resetSubscription = this.control.events.subscribe((event) => {
        if (event instanceof FormResetEvent && this.control) {
          this.userOnReset?.(this.control.value);
        }
      });
      this.subscription.add(this.resetSubscription);
    }
    if (this.parseErrorsValidator) {
      this.control.addValidators(this.parseErrorsValidator);
    }
  }
  ngControlCreate(host) {
    const hasNgNoCva = host.nativeElement.hasAttribute?.("ngNoCva");
    const hasCva = !hasNgNoCva && (this.rawValueAccessors && this.rawValueAccessors.length > 0 || this.valueAccessor !== null);
    if (hasCva || !host.customControl) {
      return;
    }
    this.isCustomControlBased = true;
    host.listenToCustomControlModel((value) => {
      this.control?.setValue(value, {
        emitModelToViewChange: false
      });
      this.control?.markAsDirty();
      this.viewToModelUpdate(value);
    });
    host.listenToCustomControlOutput("touch", () => {
      this.control?.markAsTouched();
    });
    this.customControlBindings = {};
    this.isNativeFormElement = isNativeFormElement(host.nativeElement);
    this.requiredValidatorViaDi = this._rawValidators.find((v) => v instanceof RequiredValidator);
  }
  ngControlUpdate(host, bindRequired) {
    if (!this.isCustomControlBased) {
      return;
    }
    const control = this.control;
    const bindings = this.customControlBindings;
    if (!Object.is(bindings.value, control.value)) {
      bindings.value = control.value;
      host.setCustomControlModelInput(control.value);
    }
    this.bindControlProperty(host, bindings, "touched", control.touched);
    this.bindControlProperty(host, bindings, "dirty", control.dirty);
    this.bindControlProperty(host, bindings, "valid", control.valid);
    this.bindControlProperty(host, bindings, "invalid", control.invalid);
    this.bindControlProperty(host, bindings, "pending", control.pending);
    this.bindControlProperty(host, bindings, "disabled", control.disabled);
    if (this.shouldBindRequired) {
      this.bindControlProperty(host, bindings, "required", this.isRequired);
    }
    const errorObject = control.errors;
    if (bindings.errors !== errorObject) {
      bindings.errors = errorObject;
      const errorArray = this._convertErrors(errorObject);
      host.setInputOnDirectives("errors", errorArray);
    }
  }
  get isRequired() {
    return (this.requiredValidatorViaDi?._enabled || this.control?._hasRequired()) ?? false;
  }
  get shouldBindRequired() {
    return true;
  }
  bindControlProperty(host, bindings, name, value) {
    if (bindings[name] === value) {
      return;
    }
    bindings[name] = value;
    const wasSet = host.setInputOnDirectives(name, value);
    if (this.isNativeFormElement && !wasSet && (name === "disabled" || name === "required") && this.renderer) {
      setNativeDomProperty(this.renderer, host.nativeElement, name, value);
    }
  }
  _convertErrors(errors) {
    if (errors === null) {
      return [];
    }
    const control = this.control;
    return Object.entries(errors).map(([kind, context]) => {
      return new ReactiveValidationError({
        context,
        kind,
        control
      });
    });
  }
  setParseErrorSource(parseErrors) {
    if (parseErrors === void 0) {
      return;
    }
    let convertedErrors = null;
    const convertedParseErrors = computed(() => {
      const rawErrors = parseErrors();
      if (rawErrors.length === 0) {
        return null;
      }
      return rawErrors.reduce((acc, err) => {
        acc[err.kind] = err;
        return acc;
      }, {});
    }, ...ngDevMode ? [{
      debugName: "convertedParseErrors"
    }] : []);
    this.parseErrorsValidator = (() => convertedErrors).bind(this);
    effect(() => {
      convertedErrors = convertedParseErrors();
      this.control?.updateValueAndValidity({
        emitEvent: false
      });
    }, {
      injector: this.injector
    });
  }
  removeParseErrorsValidator(control) {
    if (this.parseErrorsValidator) {
      control?.removeValidators(this.parseErrorsValidator);
      control?.updateValueAndValidity({
        emitEvent: false
      });
    }
  }
};
var AbstractControlStatus = class {
  _cd;
  constructor(cd) {
    this._cd = cd;
  }
  get isTouched() {
    this._cd?.control?._touched?.();
    return !!this._cd?.control?.touched;
  }
  get isUntouched() {
    return !!this._cd?.control?.untouched;
  }
  get isPristine() {
    this._cd?.control?._pristine?.();
    return !!this._cd?.control?.pristine;
  }
  get isDirty() {
    return !!this._cd?.control?.dirty;
  }
  get isValid() {
    this._cd?.control?._status?.();
    return !!this._cd?.control?.valid;
  }
  get isInvalid() {
    return !!this._cd?.control?.invalid;
  }
  get isPending() {
    return !!this._cd?.control?.pending;
  }
  get isSubmitted() {
    this._cd?._submitted?.();
    return !!this._cd?.submitted;
  }
};
var ngControlStatusHost = {
  "[class.ng-untouched]": "isUntouched",
  "[class.ng-touched]": "isTouched",
  "[class.ng-pristine]": "isPristine",
  "[class.ng-dirty]": "isDirty",
  "[class.ng-valid]": "isValid",
  "[class.ng-invalid]": "isInvalid",
  "[class.ng-pending]": "isPending"
};
var NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static \u0275fac = function NgControlStatus_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgControlStatus)(\u0275\u0275directiveInject(NgControl, 2));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgControlStatus,
    selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
    hostVars: 14,
    hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending);
      }
    },
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatus, [{
    type: Directive,
    args: [{
      selector: "[formControlName],[ngModel],[formControl]",
      host: ngControlStatusHost,
      standalone: false
    }]
  }], () => [{
    type: NgControl,
    decorators: [{
      type: Self
    }]
  }], null);
})();
var NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static \u0275fac = function NgControlStatusGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgControlStatusGroup)(\u0275\u0275directiveInject(ControlContainer, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgControlStatusGroup,
    selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["", "formArray", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
    hostVars: 16,
    hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending)("ng-submitted", ctx.isSubmitted);
      }
    },
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatusGroup, [{
    type: Directive,
    args: [{
      selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],[formArray],form:not([ngNoForm]),[ngForm]",
      host: __spreadProps(__spreadValues({}, ngControlStatusHost), {
        "[class.ng-submitted]": "isSubmitted"
      }),
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }], null);
})();
var FormGroup = class extends AbstractControl {
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: !!this.asyncValidator
    });
  }
  controls;
  registerControl(name, control) {
    const existingControl = this._find(name);
    if (existingControl) return existingControl;
    this.controls[name] = control;
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
    return control;
  }
  addControl(name, control, options = {}) {
    this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  removeControl(name, options = {}) {
    const existingControl = this._find(name);
    if (existingControl) existingControl._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  setControl(name, control, options = {}) {
    const existingControl = this._find(name);
    if (existingControl) existingControl._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    if (control) this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  contains(controlName) {
    return this._find(controlName)?.enabled === true;
  }
  setValue(value, options = {}) {
    untracked(() => {
      assertAllValuesPresent(this, true, value);
      Object.keys(value).forEach((name) => {
        assertControlPresent(this, true, name);
        this.controls[name].setValue(value[name], {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      });
      this.updateValueAndValidity(options);
    });
  }
  patchValue(value, options = {}) {
    if (value == null) return;
    Object.keys(value).forEach((name) => {
      const existingControl = this._find(name);
      if (existingControl) {
        existingControl.patchValue(value[name], {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  reset(value = {}, options = {}) {
    this._forEachChild((control, name) => {
      control.reset(value ? value[name] : null, __spreadProps(__spreadValues({}, options), {
        onlySelf: true
      }));
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
    if (options?.emitEvent !== false) {
      this._events.next(new FormResetEvent(this));
    }
  }
  getRawValue() {
    return this._reduceChildren({}, (acc, control, name) => {
      acc[name] = control.getRawValue();
      return acc;
    });
  }
  _syncPendingControls() {
    let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
      return child._syncPendingControls() ? true : updated;
    });
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  _forEachChild(cb) {
    Object.keys(this.controls).forEach((key) => {
      const control = this.controls[key];
      control && cb(control, key);
    });
  }
  _setUpControls() {
    this._forEachChild((control) => {
      control.setParent(this);
      control._registerOnCollectionChange(this._onCollectionChange);
    });
  }
  _updateValue() {
    this.value = this._reduceValue();
  }
  _anyControls(condition) {
    for (const [controlName, control] of Object.entries(this.controls)) {
      if (this.contains(controlName) && condition(control)) {
        return true;
      }
    }
    return false;
  }
  _reduceValue() {
    let acc = {};
    return this._reduceChildren(acc, (acc2, control, name) => {
      if (control.enabled || this.disabled) {
        acc2[name] = control.value;
      }
      return acc2;
    });
  }
  _reduceChildren(initValue, fn) {
    let res = initValue;
    this._forEachChild((control, name) => {
      res = fn(res, control, name);
    });
    return res;
  }
  _allControlsDisabled() {
    for (const controlName of Object.keys(this.controls)) {
      if (this.controls[controlName].enabled) {
        return false;
      }
    }
    return Object.keys(this.controls).length > 0 || this.disabled;
  }
  _find(name) {
    return hasOwnControl(this.controls, name) ? this.controls[name] : null;
  }
};
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
var FormRecord = class extends FormGroup {
};
var formDirectiveProvider$2 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgForm)
};
var resolvedPromise$1 = (() => Promise.resolve())();
var NgForm = class _NgForm extends ControlContainer {
  callSetDisabledState;
  get submitted() {
    return untracked(this.submittedReactive);
  }
  _submitted = computed(() => this.submittedReactive(), ...ngDevMode ? [{
    debugName: "_submitted"
  }] : []);
  submittedReactive = signal(false, ...ngDevMode ? [{
    debugName: "submittedReactive"
  }] : []);
  _directives = /* @__PURE__ */ new Set();
  form;
  ngSubmit = new EventEmitter();
  options;
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
  }
  ngAfterViewInit() {
    this._setUpdateStrategy();
  }
  get formDirective() {
    return this;
  }
  get control() {
    return this.form;
  }
  get path() {
    return [];
  }
  get controls() {
    return this.form.controls;
  }
  addControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      dir.control = container.registerControl(dir.name, dir.control);
      dir._setupWithForm(this.callSetDisabledState);
      dir.control.updateValueAndValidity({
        emitEvent: false
      });
      this._directives.add(dir);
    });
  }
  getControl(dir) {
    return this.form.get(dir.path);
  }
  removeControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      container?.removeControl(dir.name);
      this._directives.delete(dir);
    });
  }
  addFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      const group = new FormGroup({});
      setUpFormContainer(group, dir);
      container.registerControl(dir.name, group);
      group.updateValueAndValidity({
        emitEvent: false
      });
    });
  }
  removeFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      container?.removeControl?.(dir.name);
    });
  }
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  updateModel(dir, value) {
    resolvedPromise$1.then(() => {
      const ctrl = this.form.get(dir.path);
      ctrl.setValue(value);
    });
  }
  setValue(value) {
    this.control.setValue(value);
  }
  onSubmit($event) {
    this.submittedReactive.set(true);
    syncPendingControls(this.form, this._directives);
    this.ngSubmit.emit($event);
    this.form._events.next(new FormSubmittedEvent(this.control));
    return $event?.target?.method === "dialog";
  }
  onReset() {
    this.resetForm();
  }
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submittedReactive.set(false);
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.form._updateOn = this.options.updateOn;
    }
  }
  _findContainer(path) {
    path.pop();
    return path.length ? this.form.get(path) : this.form;
  }
  static \u0275fac = function NgForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgForm)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgForm,
    selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", "", 3, "formArray", ""], ["ng-form"], ["", "ngForm", ""]],
    hostBindings: function NgForm_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function NgForm_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        })("reset", function NgForm_reset_HostBindingHandler() {
          return ctx.onReset();
        });
      }
    },
    inputs: {
      options: [0, "ngFormOptions", "options"]
    },
    outputs: {
      ngSubmit: "ngSubmit"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formDirectiveProvider$2]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgForm, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([formGroup]):not([formArray]),ng-form,[ngForm]",
      providers: [formDirectiveProvider$2],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      outputs: ["ngSubmit"],
      exportAs: "ngForm",
      standalone: false
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    options: [{
      type: Input,
      args: ["ngFormOptions"]
    }]
  });
})();
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
var FormControl = class FormControl2 extends AbstractControl {
  defaultValue = null;
  _onChange = [];
  _pendingValue;
  _pendingChange = false;
  constructor(formState = null, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this._applyFormState(formState);
    this._setUpdateStrategy(validatorOrOpts);
    this._initObservables();
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: !!this.asyncValidator
    });
    if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
      if (isFormControlState(formState)) {
        this.defaultValue = formState.value;
      } else {
        this.defaultValue = formState;
      }
    }
  }
  setValue(value, options = {}) {
    untracked(() => {
      this.value = this._pendingValue = value;
      if (this._onChange.length && options.emitModelToViewChange !== false) {
        this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
      }
      this.updateValueAndValidity(options);
    });
  }
  patchValue(value, options = {}) {
    this.setValue(value, options);
  }
  reset(formState = this.defaultValue, options = {}) {
    this._applyFormState(formState);
    this.markAsPristine(options);
    this.markAsUntouched(options);
    this.setValue(this.value, options);
    if (options.overwriteDefaultValue) {
      this.defaultValue = this.value;
    }
    this._pendingChange = false;
    if (options?.emitEvent !== false) {
      this._events.next(new FormResetEvent(this));
    }
  }
  _updateValue() {
  }
  _anyControls(condition) {
    return false;
  }
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(fn) {
    this._onChange.push(fn);
  }
  _unregisterOnChange(fn) {
    removeListItem(this._onChange, fn);
  }
  registerOnDisabledChange(fn) {
    this._onDisabledChange.push(fn);
  }
  _unregisterOnDisabledChange(fn) {
    removeListItem(this._onDisabledChange, fn);
  }
  _forEachChild(cb) {
  }
  _syncPendingControls() {
    if (this.updateOn === "submit") {
      if (this._pendingDirty) this.markAsDirty();
      if (this._pendingTouched) this.markAsTouched();
      if (this._pendingChange) {
        this.setValue(this._pendingValue, {
          onlySelf: true,
          emitModelToViewChange: false
        });
        return true;
      }
    }
    return false;
  }
  _applyFormState(formState) {
    if (isFormControlState(formState)) {
      this.value = this._pendingValue = formState.value;
      formState.disabled ? this.disable({
        onlySelf: true,
        emitEvent: false
      }) : this.enable({
        onlySelf: true,
        emitEvent: false
      });
    } else {
      this.value = this._pendingValue = formState;
    }
  }
};
var isFormControl = (control) => control instanceof FormControl;
var AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
  _parent;
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormGroup(this);
  }
  ngOnDestroy() {
    this.formDirective?.removeFormGroup(this);
  }
  get control() {
    return this.formDirective.getFormGroup(this);
  }
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _checkParentType() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AbstractFormGroupDirective_BaseFactory;
    return function AbstractFormGroupDirective_Factory(__ngFactoryType__) {
      return (\u0275AbstractFormGroupDirective_BaseFactory || (\u0275AbstractFormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_AbstractFormGroupDirective)))(__ngFactoryType__ || _AbstractFormGroupDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AbstractFormGroupDirective,
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormGroupDirective, [{
    type: Directive,
    args: [{
      standalone: false
    }]
  }], null, null);
})();
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function ngModelInChildComponentWarning(containerTypeName) {
  return formatRuntimeError(-1354, `ngModel on a form control inside a child component cannot register with the ${containerTypeName} in the parent component because @Host() stops injection at the component boundary. To register this control with the parent form, add viewProviders to the child component: @Component({ ..., viewProviders: [{ provide: ControlContainer, useExisting: ${containerTypeName} }] }). Or, to opt out of form registration, use [ngModelOptions]="{standalone: true}".`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
var modelGroupProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgModelGroup)
};
var NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
  name = "";
  constructor(parent, validators, asyncValidators) {
    super();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  _checkParentType() {
    if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw modelGroupParentException();
    }
  }
  static \u0275fac = function NgModelGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgModelGroup)(\u0275\u0275directiveInject(ControlContainer, 5), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgModelGroup,
    selectors: [["", "ngModelGroup", ""]],
    inputs: {
      name: [0, "ngModelGroup", "name"]
    },
    exportAs: ["ngModelGroup"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([modelGroupProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModelGroup, [{
    type: Directive,
    args: [{
      selector: "[ngModelGroup]",
      providers: [modelGroupProvider],
      exportAs: "ngModelGroup",
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["ngModelGroup"]
    }]
  });
})();
var AbstractFormDirective = class _AbstractFormDirective extends ControlContainer {
  callSetDisabledState;
  get submitted() {
    return untracked(this._submittedReactive);
  }
  set submitted(value) {
    this._submittedReactive.set(value);
  }
  _submitted = computed(() => this._submittedReactive(), ...ngDevMode ? [{
    debugName: "_submitted"
  }] : []);
  _submittedReactive = signal(false, ...ngDevMode ? [{
    debugName: "_submittedReactive"
  }] : []);
  _oldForm;
  _onCollectionChange = () => this._updateDomValue();
  directives = [];
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  ngOnChanges(changes) {
    this.onChanges(changes);
  }
  ngOnDestroy() {
    this.onDestroy();
  }
  onChanges(changes) {
    this._checkFormPresent();
    if (Object.hasOwn(changes, "form")) {
      this._updateValidators();
      this._updateDomValue();
      this._updateRegistrations();
      this._oldForm = this.form;
    }
  }
  onDestroy() {
    if (this.form) {
      cleanUpValidators(this.form, this);
      if (this.form._onCollectionChange === this._onCollectionChange) {
        this.form._registerOnCollectionChange(() => {
        });
      }
    }
  }
  get formDirective() {
    return this;
  }
  get path() {
    return [];
  }
  addControl(dir) {
    const ctrl = this.form.get(dir.path);
    dir._setupWithForm(ctrl, this.callSetDisabledState);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
    this.directives.push(dir);
    return ctrl;
  }
  getControl(dir) {
    return this.form.get(dir.path);
  }
  removeControl(dir) {
    cleanUpControl(dir.control || null, dir, false);
    removeListItem$1(this.directives, dir);
  }
  addFormGroup(dir) {
    this._setUpFormContainer(dir);
  }
  removeFormGroup(dir) {
    this._cleanUpFormContainer(dir);
  }
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  getFormArray(dir) {
    return this.form.get(dir.path);
  }
  addFormArray(dir) {
    this._setUpFormContainer(dir);
  }
  removeFormArray(dir) {
    this._cleanUpFormContainer(dir);
  }
  updateModel(dir, value) {
    const ctrl = this.form.get(dir.path);
    ctrl.setValue(value);
  }
  onReset() {
    this.resetForm();
  }
  resetForm(value = void 0, options = {}) {
    this.form.reset(value, options);
    this._submittedReactive.set(false);
  }
  onSubmit($event) {
    this.submitted = true;
    syncPendingControls(this.form, this.directives);
    this.ngSubmit.emit($event);
    this.form._events.next(new FormSubmittedEvent(this.control));
    return $event?.target?.method === "dialog";
  }
  _updateDomValue() {
    this.directives.forEach((dir) => {
      const oldCtrl = dir.control;
      const newCtrl = this.form.get(dir.path);
      if (oldCtrl !== newCtrl) {
        cleanUpControl(oldCtrl || null, dir);
        if (isFormControl(newCtrl)) {
          dir._setupWithForm(newCtrl, this.callSetDisabledState);
        }
      }
    });
    this.form._updateTreeValidity({
      emitEvent: false
    });
  }
  _setUpFormContainer(dir) {
    const ctrl = this.form.get(dir.path);
    setUpFormContainer(ctrl, dir);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
  }
  _cleanUpFormContainer(dir) {
    const ctrl = this.form?.get(dir.path);
    if (ctrl) {
      const isControlUpdated = cleanUpFormContainer(ctrl, dir);
      if (isControlUpdated) {
        ctrl.updateValueAndValidity({
          emitEvent: false
        });
      }
    }
  }
  _updateRegistrations() {
    this.form._registerOnCollectionChange(this._onCollectionChange);
    this._oldForm?._registerOnCollectionChange(() => {
    });
  }
  _updateValidators() {
    setUpValidators(this.form, this);
    if (this._oldForm) {
      cleanUpValidators(this._oldForm, this);
    }
  }
  _checkFormPresent() {
    if (!this.form && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingFormException();
    }
  }
  static \u0275fac = function AbstractFormDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AbstractFormDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AbstractFormDirective,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormDirective, [{
    type: Directive
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], null);
})();
var formDirectiveProvider$1 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupDirective)
};
var FormGroupDirective = class _FormGroupDirective extends AbstractFormDirective {
  form = null;
  ngSubmit = new EventEmitter();
  get control() {
    return this.form;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FormGroupDirective_BaseFactory;
    return function FormGroupDirective_Factory(__ngFactoryType__) {
      return (\u0275FormGroupDirective_BaseFactory || (\u0275FormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_FormGroupDirective)))(__ngFactoryType__ || _FormGroupDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormGroupDirective,
    selectors: [["", "formGroup", ""]],
    hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        })("reset", function FormGroupDirective_reset_HostBindingHandler() {
          return ctx.onReset();
        });
      }
    },
    inputs: {
      form: [0, "formGroup", "form"]
    },
    outputs: {
      ngSubmit: "ngSubmit"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formDirectiveProvider$1]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupDirective, [{
    type: Directive,
    args: [{
      selector: "[formGroup]",
      providers: [formDirectiveProvider$1],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm",
      standalone: false
    }]
  }], null, {
    form: [{
      type: Input,
      args: ["formGroup"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var formControlBinding$1 = {
  provide: NgControl,
  useExisting: forwardRef(() => NgModel)
};
var resolvedPromise = (() => Promise.resolve())();
var NgModel = class _NgModel extends NgControl {
  _changeDetectorRef;
  callSetDisabledState;
  control = new FormControl();
  static ngAcceptInputType_isDisabled;
  _registered = false;
  _ngModelInjector;
  viewModel;
  name = "";
  isDisabled;
  model;
  options;
  update = new EventEmitter();
  constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState, injector, renderer) {
    super(injector, renderer, valueAccessors);
    this._changeDetectorRef = _changeDetectorRef;
    this.callSetDisabledState = callSetDisabledState;
    this._parent = parent;
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      this._ngModelInjector = injector;
    }
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  ngOnChanges(changes) {
    if (!this._registered && (typeof ngDevMode === "undefined" || ngDevMode) && this._parent === null && !this.options?.standalone) {
      const parentContainer = this._ngModelInjector?.get(ControlContainer, null);
      if (parentContainer != null) {
        const typeName = parentContainer instanceof NgForm ? "NgForm" : parentContainer instanceof FormGroupDirective ? "FormGroupDirective" : parentContainer instanceof NgModelGroup ? "NgModelGroup" : parentContainer.constructor.name || "ControlContainer";
        console.warn(ngModelInChildComponentWarning(typeName));
      }
    }
    this._checkForErrors();
    if (!this._registered || "name" in changes) {
      if (this._registered) {
        this._checkName();
        if (this.formDirective) {
          const oldName = changes["name"].previousValue;
          this.formDirective.removeControl({
            name: oldName,
            path: this._getPath(oldName)
          });
        }
      }
      this._setUpControl();
    }
    if ("isDisabled" in changes) {
      this._updateDisabled(changes);
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      this._updateValue(this.model);
      this.viewModel = this.model;
    }
  }
  ngOnDestroy() {
    this.formDirective?.removeControl(this);
  }
  \u0275ngControlCreate(host) {
    super.ngControlCreate(host);
  }
  \u0275ngControlUpdate(host) {
    super.ngControlUpdate(host, false);
  }
  get shouldBindRequired() {
    return false;
  }
  get path() {
    return this._getPath(this.name);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _setUpControl() {
    this._setUpdateStrategy();
    this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
    this._registered = true;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.control._updateOn = this.options.updateOn;
    }
  }
  _isStandalone() {
    return !this._parent || !!(this.options && this.options.standalone);
  }
  _setUpStandalone() {
    if (!this.isCustomControlBased) {
      this.valueAccessor ??= this.selectedValueAccessor;
      setUpControlValueAccessor(this.control, this, this.callSetDisabledState);
    } else {
      this.setupCustomControl();
    }
    this.control.updateValueAndValidity({
      emitEvent: false
    });
  }
  _setupWithForm(callSetDisabledState) {
    if (!this.isCustomControlBased) {
      this.valueAccessor ??= this.selectedValueAccessor;
      setUpControlValueAccessor(this.control, this, callSetDisabledState);
    } else {
      this.setupCustomControl();
    }
  }
  _checkForErrors() {
    if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._isStandalone()) {
      checkParentType$1(this._parent);
    }
    this._checkName();
  }
  _checkName() {
    if (this.options && this.options.name) this.name = this.options.name;
    if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingNameException();
    }
  }
  _updateValue(value) {
    resolvedPromise.then(() => {
      this.control.setValue(value, {
        emitViewToModelChange: false
      });
      this._changeDetectorRef?.markForCheck();
    });
  }
  _updateDisabled(changes) {
    const disabledValue = changes["isDisabled"].currentValue;
    const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
    resolvedPromise.then(() => {
      if (isDisabled && !this.control.disabled) {
        this.control.disable();
      } else if (!isDisabled && this.control.disabled) {
        this.control.enable();
      }
      this._changeDetectorRef?.markForCheck();
    });
  }
  _getPath(controlName) {
    return this._parent ? controlPath(controlName, this._parent) : [controlName];
  }
  static \u0275fac = function NgModel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgModel)(\u0275\u0275directiveInject(ControlContainer, 9), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(ChangeDetectorRef, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8), \u0275\u0275directiveInject(Injector, 8), \u0275\u0275directiveInject(Renderer2, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgModel,
    selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
    inputs: {
      name: "name",
      isDisabled: [0, "disabled", "isDisabled"],
      model: [0, "ngModel", "model"],
      options: [0, "ngModelOptions", "options"]
    },
    outputs: {
      update: "ngModelChange"
    },
    exportAs: ["ngModel"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formControlBinding$1, NG_CONTROL_INTEGRATION_PROVIDER]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature, \u0275\u0275ControlFeature(null)]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModel, [{
    type: Directive,
    args: [{
      selector: "[ngModel]:not([formControlName]):not([formControl])",
      providers: [formControlBinding$1, NG_CONTROL_INTEGRATION_PROVIDER],
      exportAs: "ngModel",
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: ChangeDetectorRef,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ChangeDetectorRef]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }, {
    type: Injector,
    decorators: [{
      type: Optional
    }]
  }, {
    type: Renderer2,
    decorators: [{
      type: Optional
    }]
  }], {
    name: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    options: [{
      type: Input,
      args: ["ngModelOptions"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
function checkParentType$1(parent) {
  if (!(parent instanceof NgModelGroup) && parent instanceof AbstractFormGroupDirective) {
    throw formGroupNameException();
  } else if (!(parent instanceof NgModelGroup) && !(parent instanceof NgForm)) {
    throw modelParentException();
  }
}
var \u0275NgNoValidate = class _\u0275NgNoValidate {
  static \u0275fac = function \u0275NgNoValidate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275NgNoValidate)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _\u0275NgNoValidate,
    selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
    hostAttrs: ["novalidate", ""],
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgNoValidate, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([ngNativeValidate])",
      host: {
        "novalidate": ""
      },
      standalone: false
    }]
  }], null, null);
})();
var NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NumberValueAccessor),
  multi: true
};
var NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275NumberValueAccessor_BaseFactory;
    return function NumberValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275NumberValueAccessor_BaseFactory || (\u0275NumberValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_NumberValueAccessor)))(__ngFactoryType__ || _NumberValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NumberValueAccessor,
    selectors: [["input", "type", "number", "formControlName", "", 3, "ngNoCva", ""], ["input", "type", "number", "formControl", "", 3, "ngNoCva", ""], ["input", "type", "number", "ngModel", "", 3, "ngNoCva", ""]],
    hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function NumberValueAccessor_input_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([NUMBER_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=number]:not([ngNoCva])[formControlName],input[type=number]:not([ngNoCva])[formControl],input[type=number]:not([ngNoCva])[ngModel]",
      host: {
        "(input)": "onChange($any($event.target).value)",
        "(blur)": "onTouched()"
      },
      providers: [NUMBER_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, null);
})();
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlValueAccessor),
  multi: true
};
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
var RadioControlRegistry = class _RadioControlRegistry {
  _accessors = [];
  add(control, accessor) {
    this._accessors.push([control, accessor]);
  }
  remove(accessor) {
    for (let i = this._accessors.length - 1; i >= 0; --i) {
      if (this._accessors[i][1] === accessor) {
        this._accessors.splice(i, 1);
        return;
      }
    }
  }
  select(accessor) {
    this._accessors.forEach((c) => {
      if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].fireUncheck(accessor.value);
      }
    });
  }
  _isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control) return false;
    return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
  }
  static \u0275fac = function RadioControlRegistry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioControlRegistry)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _RadioControlRegistry,
    factory: _RadioControlRegistry.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Service
  }], null, null);
})();
var RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
  _registry;
  _injector;
  _state;
  _control;
  _fn;
  setDisabledStateFired = false;
  onChange = () => {
  };
  name;
  formControlName;
  value;
  callSetDisabledState = inject(CALL_SET_DISABLED_STATE, {
    optional: true
  }) ?? setDisabledStateDefault;
  constructor(renderer, elementRef, _registry, _injector) {
    super(renderer, elementRef);
    this._registry = _registry;
    this._injector = _injector;
  }
  ngOnChanges(changes) {
    const control = this._control?.control;
    if (changes["value"] && control) {
      this.writeValue(control.value);
    }
  }
  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this._checkName();
    this._registry.add(this._control, this);
  }
  ngOnDestroy() {
    this._registry.remove(this);
  }
  writeValue(value) {
    this._state = value === this.value;
    this.setProperty("checked", this._state);
  }
  registerOnChange(fn) {
    this._fn = fn;
    this.onChange = () => {
      fn(this.value);
      this._registry.select(this);
    };
  }
  setDisabledState(isDisabled) {
    if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
      this.setProperty("disabled", isDisabled);
    }
    this.setDisabledStateFired = true;
  }
  fireUncheck(value) {
    this.writeValue(value);
  }
  _checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwNameError();
    }
    if (!this.name && this.formControlName) this.name = this.formControlName;
  }
  static \u0275fac = function RadioControlValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(RadioControlRegistry), \u0275\u0275directiveInject(Injector));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RadioControlValueAccessor,
    selectors: [["input", "type", "radio", "formControlName", "", 3, "ngNoCva", ""], ["input", "type", "radio", "formControl", "", 3, "ngNoCva", ""], ["input", "type", "radio", "ngModel", "", 3, "ngNoCva", ""]],
    hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function RadioControlValueAccessor_change_HostBindingHandler() {
          return ctx.onChange();
        })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      name: "name",
      formControlName: "formControlName",
      value: "value"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([RADIO_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=radio]:not([ngNoCva])[formControlName],input[type=radio]:not([ngNoCva])[formControl],input[type=radio]:not([ngNoCva])[ngModel]",
      host: {
        "(change)": "onChange()",
        "(blur)": "onTouched()"
      },
      providers: [RADIO_VALUE_ACCESSOR],
      standalone: false
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: RadioControlRegistry
  }, {
    type: Injector
  }], {
    name: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var RANGE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RangeValueAccessor),
  multi: true
};
var RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
  writeValue(value) {
    this.setProperty("value", parseFloat(value));
  }
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RangeValueAccessor_BaseFactory;
    return function RangeValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275RangeValueAccessor_BaseFactory || (\u0275RangeValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_RangeValueAccessor)))(__ngFactoryType__ || _RangeValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RangeValueAccessor,
    selectors: [["input", "type", "range", "formControlName", "", 3, "ngNoCva", ""], ["input", "type", "range", "formControl", "", 3, "ngNoCva", ""], ["input", "type", "range", "ngModel", "", 3, "ngNoCva", ""]],
    hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function RangeValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([RANGE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=range]:not([ngNoCva])[formControlName],input[type=range]:not([ngNoCva])[formControl],input[type=range]:not([ngNoCva])[ngModel]",
      host: {
        "(change)": "onChange($any($event.target).value)",
        "(input)": "onChange($any($event.target).value)",
        "(blur)": "onTouched()"
      },
      providers: [RANGE_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, null);
})();
var FormArray = class extends AbstractControl {
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: !!this.asyncValidator
    });
  }
  controls;
  at(index) {
    return this.controls[this._adjustIndex(index)];
  }
  push(control, options = {}) {
    if (Array.isArray(control)) {
      control.forEach((ctrl) => {
        this.controls.push(ctrl);
        this._registerControl(ctrl);
      });
    } else {
      this.controls.push(control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  insert(index, control, options = {}) {
    this.controls.splice(index, 0, control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  removeAt(index, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  setControl(index, control, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    if (control) {
      this.controls.splice(adjustedIndex, 0, control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  get length() {
    return this.controls.length;
  }
  setValue(value, options = {}) {
    untracked(() => {
      assertAllValuesPresent(this, false, value);
      value.forEach((newValue, index) => {
        assertControlPresent(this, false, index);
        this.at(index).setValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      });
      this.updateValueAndValidity(options);
    });
  }
  patchValue(value, options = {}) {
    if (value == null) return;
    value.forEach((newValue, index) => {
      if (this.at(index)) {
        this.at(index).patchValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  reset(value = [], options = {}) {
    this._forEachChild((control, index) => {
      control.reset(value[index], __spreadProps(__spreadValues({}, options), {
        onlySelf: true
      }));
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
    if (options?.emitEvent !== false) {
      this._events.next(new FormResetEvent(this));
    }
  }
  getRawValue() {
    return this.controls.map((control) => control.getRawValue());
  }
  clear(options = {}) {
    if (this.controls.length < 1) return;
    this._forEachChild((control) => control._registerOnCollectionChange(() => {
    }));
    this.controls.splice(0);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  _adjustIndex(index) {
    return index < 0 ? index + this.length : index;
  }
  _syncPendingControls() {
    let subtreeUpdated = this.controls.reduce((updated, child) => {
      return child._syncPendingControls() ? true : updated;
    }, false);
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  _forEachChild(cb) {
    this.controls.forEach((control, index) => {
      cb(control, index);
    });
  }
  _updateValue() {
    this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
  }
  _anyControls(condition) {
    return this.controls.some((control) => control.enabled && condition(control));
  }
  _setUpControls() {
    this._forEachChild((control) => this._registerControl(control));
  }
  _allControlsDisabled() {
    for (const control of this.controls) {
      if (control.enabled) return false;
    }
    return this.controls.length > 0 || this.disabled;
  }
  _registerControl(control) {
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
  }
  _find(name) {
    return this.at(name) ?? null;
  }
};
var formDirectiveProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayDirective)
};
var FormArrayDirective = class _FormArrayDirective extends AbstractFormDirective {
  form = null;
  ngSubmit = new EventEmitter();
  get control() {
    return this.form;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FormArrayDirective_BaseFactory;
    return function FormArrayDirective_Factory(__ngFactoryType__) {
      return (\u0275FormArrayDirective_BaseFactory || (\u0275FormArrayDirective_BaseFactory = \u0275\u0275getInheritedFactory(_FormArrayDirective)))(__ngFactoryType__ || _FormArrayDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormArrayDirective,
    selectors: [["", "formArray", ""]],
    hostBindings: function FormArrayDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function FormArrayDirective_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        })("reset", function FormArrayDirective_reset_HostBindingHandler() {
          return ctx.onReset();
        });
      }
    },
    inputs: {
      form: [0, "formArray", "form"]
    },
    outputs: {
      ngSubmit: "ngSubmit"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formDirectiveProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayDirective, [{
    type: Directive,
    args: [{
      selector: "[formArray]",
      providers: [formDirectiveProvider],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm",
      standalone: false
    }]
  }], null, {
    form: [{
      type: Input,
      args: ["formArray"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgModelWithFormControlWarning" : "");
var formControlBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlDirective)
};
var FormControlDirective = class _FormControlDirective extends NgControl {
  _ngModelWarningConfig;
  callSetDisabledState;
  viewModel;
  form;
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  model;
  update = new EventEmitter();
  static _ngModelWarningSentOnce = false;
  _ngModelWarningSent = false;
  constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState, renderer, injector) {
    super(injector, renderer, valueAccessors);
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this.callSetDisabledState = callSetDisabledState;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  ngOnChanges(changes) {
    if (this._isControlChanged(changes)) {
      const previousForm = changes["form"].previousValue;
      if (previousForm) {
        cleanUpControl(previousForm, this, false);
        this.removeParseErrorsValidator(previousForm);
      }
      if (!this.isCustomControlBased) {
        this.valueAccessor ??= this.selectedValueAccessor;
        setUpControlValueAccessor(this.form, this, this.callSetDisabledState);
      } else {
        this.setupCustomControl();
      }
      this.form.updateValueAndValidity({
        emitEvent: false
      });
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
      }
      this.form.setValue(this.model);
      this.viewModel = this.model;
    }
  }
  ngOnDestroy() {
    if (this.form) {
      cleanUpControl(this.form, this, false);
    }
  }
  get path() {
    return [];
  }
  get control() {
    return this.form;
  }
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _isControlChanged(changes) {
    return Object.hasOwn(changes, "form");
  }
  \u0275ngControlCreate(host) {
    super.ngControlCreate(host);
  }
  \u0275ngControlUpdate(host) {
    super.ngControlUpdate(host, true);
  }
  static \u0275fac = function FormControlDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormControlDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8), \u0275\u0275directiveInject(Renderer2, 8), \u0275\u0275directiveInject(Injector, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormControlDirective,
    selectors: [["", "formControl", ""]],
    inputs: {
      form: [0, "formControl", "form"],
      isDisabled: [0, "disabled", "isDisabled"],
      model: [0, "ngModel", "model"]
    },
    outputs: {
      update: "ngModelChange"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formControlBinding, NG_CONTROL_INTEGRATION_PROVIDER]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature, \u0275\u0275ControlFeature(null)]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlDirective, [{
    type: Directive,
    args: [{
      selector: "[formControl]",
      providers: [formControlBinding, NG_CONTROL_INTEGRATION_PROVIDER],
      exportAs: "ngForm",
      standalone: false
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }, {
    type: Renderer2,
    decorators: [{
      type: Optional
    }]
  }, {
    type: Injector,
    decorators: [{
      type: Optional
    }]
  }], {
    form: [{
      type: Input,
      args: ["formControl"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var formGroupNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupName)
};
var FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
  name = null;
  constructor(parent, validators, asyncValidators) {
    super();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  _checkParentType() {
    if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw groupParentException();
    }
  }
  static \u0275fac = function FormGroupName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormGroupName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormGroupName,
    selectors: [["", "formGroupName", ""]],
    inputs: {
      name: [0, "formGroupName", "name"]
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formGroupNameProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupName, [{
    type: Directive,
    args: [{
      selector: "[formGroupName]",
      providers: [formGroupNameProvider],
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formGroupName"]
    }]
  });
})();
var formArrayNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayName)
};
var FormArrayName = class _FormArrayName extends ControlContainer {
  _parent;
  name = null;
  constructor(parent, validators, asyncValidators) {
    super();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  ngOnInit() {
    if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw arrayParentException();
    }
    this.formDirective.addFormArray(this);
  }
  ngOnDestroy() {
    this.formDirective?.removeFormArray(this);
  }
  get control() {
    return this.formDirective.getFormArray(this);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  static \u0275fac = function FormArrayName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormArrayName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormArrayName,
    selectors: [["", "formArrayName", ""]],
    inputs: {
      name: [0, "formArrayName", "name"]
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formArrayNameProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayName, [{
    type: Directive,
    args: [{
      selector: "[formArrayName]",
      providers: [formArrayNameProvider],
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formArrayName"]
    }]
  });
})();
function hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof AbstractFormDirective) && !(parent instanceof FormArrayName);
}
var controlNameBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlName)
};
var FormControlName = class _FormControlName extends NgControl {
  _ngModelWarningConfig;
  _added = false;
  viewModel;
  control;
  name = null;
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  model;
  update = new EventEmitter();
  static _ngModelWarningSentOnce = false;
  _ngModelWarningSent = false;
  constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig, renderer, injector) {
    super(injector, renderer, valueAccessors);
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  _setupWithForm(control, callSetDisabledState) {
    this.control = control;
    if (!this.isCustomControlBased) {
      this.valueAccessor ??= this.selectedValueAccessor;
      setUpControlValueAccessor(control, this, callSetDisabledState);
    } else {
      this.setupCustomControl();
    }
  }
  ngOnChanges(changes) {
    if (!this._added) this._setUpControl();
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
      }
      this.viewModel = this.model;
      this.formDirective.updateModel(this, this.model);
    }
  }
  ngOnDestroy() {
    this.formDirective?.removeControl(this);
  }
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _setUpControl() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      checkParentType(this._parent, this.name);
    }
    this.control = this.formDirective.addControl(this);
    this._added = true;
  }
  \u0275ngControlCreate(host) {
    super.ngControlCreate(host);
  }
  \u0275ngControlUpdate(host) {
    if (!this.isCustomControlBased) {
      return;
    }
    if (!this._added) this._setUpControl();
    super.ngControlUpdate(host, true);
  }
  static \u0275fac = function FormControlName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormControlName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), \u0275\u0275directiveInject(Renderer2, 8), \u0275\u0275directiveInject(Injector, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormControlName,
    selectors: [["", "formControlName", ""]],
    inputs: {
      name: [0, "formControlName", "name"],
      isDisabled: [0, "disabled", "isDisabled"],
      model: [0, "ngModel", "model"]
    },
    outputs: {
      update: "ngModelChange"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([controlNameBinding, NG_CONTROL_INTEGRATION_PROVIDER]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature, \u0275\u0275ControlFeature(null)]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlName, [{
    type: Directive,
    args: [{
      selector: "[formControlName]",
      providers: [controlNameBinding, NG_CONTROL_INTEGRATION_PROVIDER],
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }, {
    type: Renderer2,
    decorators: [{
      type: Optional
    }]
  }, {
    type: Injector,
    decorators: [{
      type: Optional
    }]
  }], {
    name: [{
      type: Input,
      args: ["formControlName"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
function checkParentType(parent, name) {
  if (!(parent instanceof FormGroupName) && parent instanceof AbstractFormGroupDirective) {
    throw ngModelGroupException();
  } else if (!(parent instanceof FormGroupName) && !(parent instanceof AbstractFormDirective) && !(parent instanceof FormArrayName)) {
    throw controlParentException(name);
  }
}
var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectControlValueAccessor),
  multi: true
};
function _buildValueString$1(id, value) {
  if (id == null) return `${value}`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
var SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
  value;
  _optionMap = /* @__PURE__ */ new Map();
  _idCounter = 0;
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  _compareWith = Object.is;
  appRefInjector = inject(ApplicationRef).injector;
  destroyRef = inject(DestroyRef);
  cdr = inject(ChangeDetectorRef);
  _queuedWrite = false;
  _writeValueAfterRender() {
    if (this._queuedWrite || this.appRefInjector.destroyed) {
      return;
    }
    this._queuedWrite = true;
    afterNextRender({
      write: () => {
        if (this.destroyRef.destroyed) {
          return;
        }
        this._queuedWrite = false;
        this.writeValue(this.value);
      }
    }, {
      injector: this.appRefInjector
    });
  }
  writeValue(value) {
    this.cdr.markForCheck();
    this.value = value;
    const id = this._getOptionId(value);
    const valueString = _buildValueString$1(id, value);
    this.setProperty("value", valueString);
  }
  registerOnChange(fn) {
    this.onChange = (valueString) => {
      this.value = this._getOptionValue(valueString);
      fn(this.value);
    };
  }
  _registerOption() {
    return (this._idCounter++).toString();
  }
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id), value)) return id;
    }
    return null;
  }
  _getOptionValue(valueString) {
    const id = _extractId$1(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectControlValueAccessor_BaseFactory;
    return function SelectControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275SelectControlValueAccessor_BaseFactory || (\u0275SelectControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectControlValueAccessor)))(__ngFactoryType__ || _SelectControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SelectControlValueAccessor,
    selectors: [["select", "formControlName", "", 3, "multiple", "", 3, "ngNoCva", ""], ["select", "formControl", "", 3, "multiple", "", 3, "ngNoCva", ""], ["select", "ngModel", "", 3, "multiple", "", 3, "ngNoCva", ""]],
    hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      compareWith: "compareWith"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([SELECT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select:not([multiple]):not([ngNoCva])[formControlName],select:not([multiple]):not([ngNoCva])[formControl],select:not([multiple]):not([ngNoCva])[ngModel]",
      host: {
        "(change)": "onChange($any($event.target).value)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var NgSelectOption = class _NgSelectOption {
  _element;
  _renderer;
  _select;
  id;
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) this.id = this._select._registerOption();
  }
  set ngValue(value) {
    if (this._select == null) return;
    this._select._optionMap.set(this.id, value);
    this._setElementValue(_buildValueString$1(this.id, value));
    this._select._writeValueAfterRender();
  }
  set value(value) {
    this._setElementValue(value);
    this._select?._writeValueAfterRender();
  }
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  ngOnDestroy() {
    this._select?._optionMap.delete(this.id);
    this._select?._writeValueAfterRender();
  }
  static \u0275fac = function NgSelectOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgSelectOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectControlValueAccessor, 9));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgSelectOption,
    selectors: [["option"]],
    inputs: {
      ngValue: "ngValue",
      value: "value"
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectOption, [{
    type: Directive,
    args: [{
      selector: "option",
      standalone: false
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
  multi: true
};
function _buildValueString(id, value) {
  if (id == null) return `${value}`;
  if (typeof value === "string") value = `'${value}'`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
var SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
  value;
  _optionMap = /* @__PURE__ */ new Map();
  _idCounter = 0;
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  _compareWith = Object.is;
  writeValue(value) {
    this.value = value;
    let optionSelectedStateSetter;
    if (Array.isArray(value)) {
      const ids = value.map((v) => this._getOptionId(v));
      optionSelectedStateSetter = (opt, id) => {
        opt._setSelected(ids.indexOf(id) > -1);
      };
    } else {
      optionSelectedStateSetter = (opt) => {
        opt._setSelected(false);
      };
    }
    this._optionMap.forEach(optionSelectedStateSetter);
  }
  registerOnChange(fn) {
    this.onChange = (element) => {
      const selected = [];
      const selectedOptions = element.selectedOptions;
      if (selectedOptions !== void 0) {
        const options = selectedOptions;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          const val = this._getOptionValue(opt.value);
          selected.push(val);
        }
      } else {
        const options = element.options;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          if (opt.selected) {
            const val = this._getOptionValue(opt.value);
            selected.push(val);
          }
        }
      }
      this.value = selected;
      fn(selected);
    };
  }
  _registerOption(value) {
    const id = (this._idCounter++).toString();
    this._optionMap.set(id, value);
    return id;
  }
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
    }
    return null;
  }
  _getOptionValue(valueString) {
    const id = _extractId(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectMultipleControlValueAccessor_BaseFactory;
    return function SelectMultipleControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275SelectMultipleControlValueAccessor_BaseFactory || (\u0275SelectMultipleControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectMultipleControlValueAccessor)))(__ngFactoryType__ || _SelectMultipleControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SelectMultipleControlValueAccessor,
    selectors: [["select", "multiple", "", "formControlName", "", 3, "ngNoCva", ""], ["select", "multiple", "", "formControl", "", 3, "ngNoCva", ""], ["select", "multiple", "", "ngModel", "", 3, "ngNoCva", ""]],
    hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target);
        })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      compareWith: "compareWith"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([SELECT_MULTIPLE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMultipleControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select[multiple]:not([ngNoCva])[formControlName],select[multiple]:not([ngNoCva])[formControl],select[multiple]:not([ngNoCva])[ngModel]",
      host: {
        "(change)": "onChange($event.target)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_MULTIPLE_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var \u0275NgSelectMultipleOption = class _\u0275NgSelectMultipleOption {
  _element;
  _renderer;
  _select;
  id;
  _value;
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) {
      this.id = this._select._registerOption(this);
    }
  }
  set ngValue(value) {
    if (this._select == null) return;
    this._value = value;
    this._setElementValue(_buildValueString(this.id, value));
    this._select.writeValue(this._select.value);
  }
  set value(value) {
    if (this._select) {
      this._value = value;
      this._setElementValue(_buildValueString(this.id, value));
      this._select.writeValue(this._select.value);
    } else {
      this._setElementValue(value);
    }
  }
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  _setSelected(selected) {
    this._renderer.setProperty(this._element.nativeElement, "selected", selected);
  }
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
  static \u0275fac = function \u0275NgSelectMultipleOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275NgSelectMultipleOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectMultipleControlValueAccessor, 9));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _\u0275NgSelectMultipleOption,
    selectors: [["option"]],
    inputs: {
      ngValue: "ngValue",
      value: "value"
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgSelectMultipleOption, [{
    type: Directive,
    args: [{
      selector: "option",
      standalone: false
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectMultipleControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var SHARED_FORM_DIRECTIVES = [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormArrayDirective, FormControlName, FormGroupName, FormArrayName];
var \u0275InternalFormsSharedModule = class _\u0275InternalFormsSharedModule {
  static \u0275fac = function \u0275InternalFormsSharedModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275InternalFormsSharedModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _\u0275InternalFormsSharedModule,
    declarations: [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator],
    exports: [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275InternalFormsSharedModule, [{
    type: NgModule,
    args: [{
      declarations: SHARED_FORM_DIRECTIVES,
      exports: SHARED_FORM_DIRECTIVES
    }]
  }], null, null);
})();
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var FormBuilder = class _FormBuilder {
  useNonNullable = false;
  get nonNullable() {
    const nnfb = new _FormBuilder();
    nnfb.useNonNullable = true;
    return nnfb;
  }
  group(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    let newOptions = {};
    if (isAbstractControlOptions(options)) {
      newOptions = options;
    } else if (options !== null) {
      newOptions.validators = options.validator;
      newOptions.asyncValidators = options.asyncValidator;
    }
    return new FormGroup(reducedControls, newOptions);
  }
  record(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    return new FormRecord(reducedControls, options);
  }
  control(formState, validatorOrOpts, asyncValidator) {
    let newOptions = {};
    if (!this.useNonNullable) {
      return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    if (isAbstractControlOptions(validatorOrOpts)) {
      newOptions = validatorOrOpts;
    } else {
      newOptions.validators = validatorOrOpts;
      newOptions.asyncValidators = asyncValidator;
    }
    return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), {
      nonNullable: true
    }));
  }
  array(controls, validatorOrOpts, asyncValidator) {
    const createdControls = controls.map((c) => this._createControl(c));
    return new FormArray(createdControls, validatorOrOpts, asyncValidator);
  }
  _reduceControls(controls) {
    const createdControls = {};
    Object.keys(controls).forEach((controlName) => {
      createdControls[controlName] = this._createControl(controls[controlName]);
    });
    return createdControls;
  }
  _createControl(controls) {
    if (controls instanceof FormControl) {
      return controls;
    } else if (controls instanceof AbstractControl) {
      return controls;
    } else if (Array.isArray(controls)) {
      const value = controls[0];
      const validator = controls.length > 1 ? controls[1] : null;
      const asyncValidator = controls.length > 2 ? controls[2] : null;
      return this.control(value, validator, asyncValidator);
    } else {
      return this.control(controls);
    }
  }
  static \u0275fac = function FormBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _FormBuilder,
    factory: _FormBuilder.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormBuilder, [{
    type: Service
  }], null, null);
})();
var NonNullableFormBuilder = class _NonNullableFormBuilder {
  static \u0275fac = function NonNullableFormBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NonNullableFormBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _NonNullableFormBuilder,
    factory: () => (() => inject(FormBuilder).nonNullable)()
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NonNullableFormBuilder, [{
    type: Service,
    args: [{
      factory: () => inject(FormBuilder).nonNullable
    }]
  }], null, null);
})();
var UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
  group(controlsConfig, options = null) {
    return super.group(controlsConfig, options);
  }
  control(formState, validatorOrOpts, asyncValidator) {
    return super.control(formState, validatorOrOpts, asyncValidator);
  }
  array(controlsConfig, validatorOrOpts, asyncValidator) {
    return super.array(controlsConfig, validatorOrOpts, asyncValidator);
  }
  static \u0275fac = function UntypedFormBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UntypedFormBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _UntypedFormBuilder,
    factory: _UntypedFormBuilder.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UntypedFormBuilder, [{
    type: Service
  }], null, null);
})();
var FormsModule = class _FormsModule {
  static withConfig(opts) {
    return {
      ngModule: _FormsModule,
      providers: [{
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static \u0275fac = function FormsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FormsModule,
    declarations: [NgModel, NgModelGroup, NgForm],
    exports: [\u0275InternalFormsSharedModule, NgModel, NgModelGroup, NgForm]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [\u0275InternalFormsSharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsModule, [{
    type: NgModule,
    args: [{
      declarations: TEMPLATE_DRIVEN_DIRECTIVES,
      exports: [\u0275InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();
var ReactiveFormsModule = class _ReactiveFormsModule {
  static withConfig(opts) {
    return {
      ngModule: _ReactiveFormsModule,
      providers: [{
        provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
        useValue: opts.warnOnNgModelWithFormControl ?? "always"
      }, {
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static \u0275fac = function ReactiveFormsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReactiveFormsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ReactiveFormsModule,
    declarations: [FormControlDirective, FormGroupDirective, FormArrayDirective, FormControlName, FormGroupName, FormArrayName],
    exports: [\u0275InternalFormsSharedModule, FormControlDirective, FormGroupDirective, FormArrayDirective, FormControlName, FormGroupName, FormArrayName]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [\u0275InternalFormsSharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveFormsModule, [{
    type: NgModule,
    args: [{
      declarations: [REACTIVE_DRIVEN_DIRECTIVES],
      exports: [\u0275InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();

export {
  SwUpdate,
  provideServiceWorker,
  addMonths,
  add,
  addWeeks,
  addYears,
  differenceInCalendarMonths,
  endOfMonth,
  endOfWeek,
  getUnixTime,
  isAfter,
  isBefore,
  stringToMinutes,
  filterResourcesFromRules,
  rulesForResource,
  DEFAULT_SETTINGS,
  AssetRequest,
  CateringItem,
  CateringOrder,
  BuildingLevel,
  Building,
  Space,
  User,
  GuestUser,
  StaffUser,
  EMPTY_USER,
  isEmptyUser,
  setDefaultCreator,
  CalendarEvent,
  GroupPermission,
  current_user,
  user_groups_loaded,
  user_group_names,
  currentUser,
  currentUserCanApprove,
  currentUserIsLoaded,
  currentUserLoaded,
  userSignal,
  hasPermission,
  VERSION,
  setting,
  settingSignal,
  SettingsService,
  MapService,
  MapsPeopleService,
  toQueryString,
  SETTING_KEYS,
  MINUTES,
  serviceWorkerUpdate,
  initialisationFailure,
  initialisationComplete,
  failInitialisation,
  markInitialisationComplete,
  retryInitialisation,
  setupCache,
  getNativeDomain,
  getNativeEmail,
  setNativeDomain,
  setNativeEmail,
  getNativeApiKey,
  setNativeApiKey,
  normaliseNativeDomain,
  lookupNativeDomainByEmail,
  setupPlace,
  firstValueWhere,
  MAP_FEATURE_DATA,
  Clipboard,
  getLoadingMessage,
  needsNativeDomain,
  nativeDomainError,
  autoConfirmNativeDomain,
  PlaceOS_Service,
  OrganisationService,
  fromEventRecurrence,
  fromBookingRecurrence,
  toBookingRecurrence,
  formatRecurrence,
  RemoteLoggingService,
  UploadCancelledError,
  UploadsService,
  Booking,
  Calendar,
  Desk,
  ErrorStateMatcher,
  MatPseudoCheckbox,
  MAT_OPTION_PARENT_COMPONENT,
  MAT_OPTGROUP,
  MatOptionSelectionChange,
  MatOption,
  _countGroupLabelsBeforeOption,
  _getOptionScrollPosition,
  MatOptionModule,
  _ErrorStateTracker,
  _MatInternalFormField,
  NativeDateModule,
  NG_VALUE_ACCESSOR,
  DefaultValueAccessor,
  NG_VALIDATORS,
  Validators,
  AbstractControl,
  isNativeFormElement,
  elementAcceptsMinMax,
  isTextualFormElement,
  setNativeDomProperty,
  RequiredValidator,
  MaxLengthValidator,
  ɵFORM_CONTROL_INTEGRATION,
  selectValueAccessor,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroup,
  NgForm,
  FormControl,
  FormGroupDirective,
  NgModel,
  ɵNgNoValidate,
  NumberValueAccessor,
  FormControlName,
  SelectControlValueAccessor,
  NgSelectOption,
  ɵNgSelectMultipleOption,
  FormsModule,
  ReactiveFormsModule
};
//# debugId=53468429-d32a-5786-b044-26eb218c97ff
//# sourceMappingURL=chunk-Z6BRIM5R.js.map
