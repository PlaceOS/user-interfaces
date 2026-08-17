import {
  LandingStateService
} from "./chunk-AX4IFOLQ.js";
import {
  UserAvatarComponent
} from "./chunk-7IYNAN5I.js";
import {
  AsyncHandler,
  IconComponent,
  MatDialogRef,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatPrefix,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSuffix,
  OrganisationService,
  SETTING_KEYS,
  SettingsService,
  StaffUser,
  addWeeks,
  currentUser,
  getUnixTime,
  queryBookings
} from "./chunk-OOXMEN3E.js";
import {
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormsModule,
  Injectable,
  La,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgModel,
  TranslatePipe,
  Vu,
  addDays,
  computed,
  constructFrom,
  effect,
  endOfDay,
  format,
  inject,
  isSameDay,
  normalizeDates,
  notifyError,
  notifySuccess,
  setClassMetadata,
  signal,
  startOfDay,
  startOfWeek,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
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
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-P3URBYOL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/workplace/src/app/team-schedule/common.ts
var USER_LOCATIONS = {
  unspecified: {
    name: "COMMON.LOCATION_UNSPECIFIED",
    icon: "help_outline",
    fg_color: "rgb(107, 114, 128)",
    bg_color: "rgb(229, 231, 235)"
  },
  wfh: {
    name: "COMMON.LOCATION_WFH",
    icon: "home",
    fg_color: "rgb(37, 99, 235)",
    bg_color: "rgb(219, 234, 254)"
  },
  office: {
    name: "COMMON.LOCATION_OFFICE",
    icon: "business",
    fg_color: "rgb(5, 150, 105)",
    bg_color: "rgb(209, 250, 229)"
  },
  onsite: {
    name: "COMMON.LOCATION_ONSITE",
    icon: "location_on",
    fg_color: "rgb(217, 119, 6)",
    bg_color: "rgb(254, 243, 199)"
  },
  on_leave: {
    name: "COMMON.LOCATION_LEAVE",
    icon: "event_busy",
    fg_color: "rgb(124, 58, 237)",
    bg_color: "rgb(237, 233, 254)"
  },
  off_sick: {
    name: "COMMON.LOCATION_SICK",
    icon: "local_hospital",
    fg_color: "rgb(220, 38, 38)",
    bg_color: "rgb(254, 226, 226)"
  }
};

// node_modules/date-fns/_lib/normalizeInterval.js
function normalizeInterval(context, interval) {
  const [start, end] = normalizeDates(context, interval.start, interval.end);
  return { start, end };
}

// node_modules/date-fns/eachDayOfInterval.js
function eachDayOfInterval(interval, options) {
  const { start, end } = normalizeInterval(options?.in, interval);
  let reversed = +start > +end;
  const endTime = reversed ? +start : +end;
  const date = reversed ? end : start;
  date.setHours(0, 0, 0, 0);
  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }
  const dates = [];
  while (+date <= endTime) {
    dates.push(constructFrom(start, date));
    date.setDate(date.getDate() + step);
    date.setHours(0, 0, 0, 0);
  }
  return reversed ? dates.reverse() : dates;
}

// node_modules/date-fns/subWeeks.js
function subWeeks(date, amount, options) {
  return addWeeks(date, -amount, options);
}

// apps/workplace/src/app/team-schedule/team-schedule.service.ts
var DEFAULT_FILTERS = {
  date: Date.now(),
  day_index: -1,
  view: "all",
  search: "",
  department: null,
  office: null,
  status: null
};
var TeamScheduleService = class _TeamScheduleService {
  // Actions
  setFilters(filters) {
    this._filters.set(__spreadValues(__spreadValues({}, this._filters()), filters));
  }
  resetFilters() {
    this._filters.set(__spreadProps(__spreadValues({}, DEFAULT_FILTERS), { date: Date.now() }));
  }
  previousWeek() {
    const current = this._filters();
    this._filters.set(__spreadProps(__spreadValues({}, current), {
      date: subWeeks(current.date, 1).valueOf(),
      day_index: 0
    }));
  }
  nextWeek() {
    const current = this._filters();
    this._filters.set(__spreadProps(__spreadValues({}, current), {
      date: addWeeks(current.date, 1).valueOf(),
      day_index: 0
    }));
  }
  toggleFavorite(member) {
    if (member.is_favorite) {
      this.removeFavorite(member.user);
    } else {
      this.addFavorite(member.user);
    }
  }
  /** Check if a user is a favourite */
  isFavorite(user) {
    const user_id = user.email;
    return this._favorite_ids().has(user_id);
  }
  /** Check if a user is a team member */
  isTeamMember(user) {
    const user_id = user.email;
    return this._team_member_ids().has(user_id);
  }
  /** Toggle favourite status for a user by email */
  toggleFavoriteByUser(user) {
    if (this.isFavorite(user)) {
      this.removeFavorite(user);
    } else {
      this.addFavorite(user);
    }
  }
  /** Toggle team member status for a user by email */
  toggleTeamMemberByUser(user) {
    if (this.isTeamMember(user)) {
      this.removeTeamMember(user);
    } else {
      this.addTeamMember(user);
    }
  }
  getLocationStyle(status) {
    return USER_LOCATIONS[status] || USER_LOCATIONS.unspecified;
  }
  getMemberStatus(member) {
    return member.statuses[this.active_day_index()];
  }
  // Selection mode methods
  toggleSelectMode() {
    const new_mode = !this.select_mode();
    this.select_mode.set(new_mode);
    if (!new_mode) {
      this._selected_member_ids.set(/* @__PURE__ */ new Set());
    }
  }
  clearSelection() {
    this._selected_member_ids.set(/* @__PURE__ */ new Set());
    this.select_mode.set(false);
  }
  toggleMemberSelection(member) {
    const ids = new Set(this._selected_member_ids());
    if (ids.has(member.user.id)) {
      ids.delete(member.user.id);
    } else {
      ids.add(member.user.id);
    }
    this._selected_member_ids.set(ids);
  }
  isMemberSelected(member) {
    return this._selected_member_ids().has(member.user.id);
  }
  getTeamMembers() {
    return this._team_members().filter((m) => m.is_my_team);
  }
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._filters = signal(
      __spreadValues({}, DEFAULT_FILTERS),
      ...ngDevMode ? [{ debugName: "_filters" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filters = this._filters.asReadonly();
    this.loading = signal(
      true,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._initialized = false;
    this.select_mode = signal(
      false,
      ...ngDevMode ? [{ debugName: "select_mode" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._selected_member_ids = signal(
      /* @__PURE__ */ new Set(),
      ...ngDevMode ? [{ debugName: "_selected_member_ids" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._favorite_ids = signal(
      /* @__PURE__ */ new Set(),
      ...ngDevMode ? [{ debugName: "_favorite_ids" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._team_member_ids = signal(
      /* @__PURE__ */ new Set(),
      ...ngDevMode ? [{ debugName: "_team_member_ids" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.week_days = computed(
      () => {
        const start = startOfWeek(this._filters().date, { weekStartsOn: 1 });
        const days = eachDayOfInterval({
          start,
          end: addDays(start, 4)
        });
        return days.map((date) => ({
          date: date.valueOf(),
          is_today: isSameDay(date, /* @__PURE__ */ new Date())
        }));
      },
      ...ngDevMode ? [{ debugName: "week_days" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_day_index = computed(
      () => {
        const manual_index = this._filters().day_index;
        if (manual_index >= 0)
          return manual_index;
        const days = this.week_days();
        const today_index = days.findIndex((d) => d.is_today);
        return today_index >= 0 ? today_index : 0;
      },
      ...ngDevMode ? [{ debugName: "active_day_index" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._team_members = signal(
      [],
      ...ngDevMode ? [{ debugName: "_team_members" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.departments = computed(
      () => {
        const members = this._team_members();
        const depts = new Set(members.map((m) => m.department).filter(Boolean));
        return Array.from(depts).sort();
      },
      ...ngDevMode ? [{ debugName: "departments" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.offices = computed(
      () => {
        const members = this._team_members();
        const offices = new Set(members.map((m) => m.current_building).filter(Boolean));
        return Array.from(offices).sort();
      },
      ...ngDevMode ? [{ debugName: "offices" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.statuses = computed(
      () => {
        return Object.keys(USER_LOCATIONS);
      },
      ...ngDevMode ? [{ debugName: "statuses" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_members = computed(
      () => {
        let members = this._team_members();
        const { view, search: raw_search, department, office, status } = this._filters();
        const search = raw_search.toLowerCase().trim();
        const day_index = this.active_day_index();
        if (view === "favorites") {
          members = members.filter((m) => m.is_favorite);
        } else if (view === "team") {
          members = members.filter((m) => m.is_my_team);
        }
        if (search) {
          members = members.filter((m) => m.user.name.toLowerCase().includes(search) || m.user.email.toLowerCase().includes(search) || m.department?.toLowerCase().includes(search));
        }
        if (department) {
          members = members.filter((m) => m.department === department);
        }
        if (office) {
          members = members.filter((m) => m.current_building === office);
        }
        if (status) {
          members = members.filter((m) => m.statuses[day_index]?.status === status);
        }
        return members;
      },
      ...ngDevMode ? [{ debugName: "filtered_members" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.total_members = computed(
      () => this._team_members().length,
      ...ngDevMode ? [{ debugName: "total_members" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.booked_count = computed(
      () => {
        const members = this._team_members();
        const day_index = this.active_day_index();
        return members.filter((m) => m.statuses[day_index]?.status === "office").length;
      },
      ...ngDevMode ? [{ debugName: "booked_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_members = computed(
      () => {
        const ids = this._selected_member_ids();
        return this._team_members().filter((m) => ids.has(m.user.id));
      },
      ...ngDevMode ? [{ debugName: "selected_members" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_count = computed(
      () => this._selected_member_ids().size,
      ...ngDevMode ? [{ debugName: "selected_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._initializeData();
    effect(() => {
      const _ = this.week_days();
      untracked(() => this._refreshBookings());
    });
  }
  async _initializeData() {
    await this._org.waitUntilInitialised();
    await this._loadUsers();
  }
  /** Load colleagues and team members, then fetch their bookings */
  async _loadUsers() {
    this.loading.set(true);
    try {
      const colleagues = await this._fetchColleagues();
      const favorite_ids = this._getFavoriteIds();
      this._favorite_ids.set(favorite_ids);
      const team_ids = this._getTeamMemberIds();
      this._team_member_ids.set(team_ids);
      const team_members = await this._buildTeamMembers(colleagues, favorite_ids, team_ids);
      this._team_members.set(team_members);
    } catch (error) {
      console.error("Error loading team schedule data:", error);
    } finally {
      this.loading.set(false);
      this._initialized = true;
    }
  }
  /** Refresh bookings for existing users when week changes */
  async _refreshBookings() {
    if (!this._initialized)
      return;
    const members = this._team_members();
    if (members.length === 0)
      return;
    this.loading.set(true);
    try {
      const favorite_ids = this._getFavoriteIds();
      this._favorite_ids.set(favorite_ids);
      const team_ids = this._getTeamMemberIds();
      this._team_member_ids.set(team_ids);
      const users = members.map((m) => m.user);
      const team_members = await this._buildTeamMembers(users, favorite_ids, team_ids);
      this._team_members.set(team_members);
    } catch (error) {
      console.error("Error refreshing bookings:", error);
    } finally {
      this.loading.set(false);
    }
  }
  /** Fetch colleagues from user's contacts metadata */
  async _fetchColleagues() {
    try {
      const user = currentUser();
      if (!user?.id)
        return [];
      const metadata = await Vu(user.id, "contacts").catch(() => ({}));
      const list = metadata?.details instanceof Array ? metadata.details : [];
      const users = await Promise.all(list.map((contact) => La(contact.email).catch(() => contact)));
      return users.map((u) => new StaffUser(u));
    } catch (error) {
      console.error("Error fetching colleagues:", error);
      return [];
    }
  }
  /** Get favourite team member IDs from user settings */
  _getFavoriteIds() {
    const ids = this._settings.get(SETTING_KEYS.FAVORITE_TEAM_MEMBERS) || [];
    return new Set(ids);
  }
  /** Get team member IDs from user settings */
  _getTeamMemberIds() {
    const ids = this._settings.get(SETTING_KEYS.TEAM_MEMBERS) || [];
    return new Set(ids);
  }
  /**
   * Map user work location preference to our LocationStatus type.
   * @param location - The location string from work preferences (wfh, wfo, aol, ooo, etc.)
   * @returns The corresponding LocationStatus
   */
  _mapWorkLocationToStatus(location) {
    if (!location)
      return "unspecified";
    switch (location) {
      case "wfh":
        return "wfh";
      case "wfo":
        return "office";
      case "aol":
        return "on_leave";
      case "sick":
        return "off_sick";
      case "ooo":
        return "unspecified";
      default:
        return "unspecified";
    }
  }
  /**
   * Get user's work location for a specific date based on their work preferences.
   * Checks overrides first, then falls back to day-of-week preferences.
   * @param user - The StaffUser to check
   * @param date - The date to check (timestamp)
   * @returns The location string or undefined if not set
   */
  _getUserWorkLocationForDate(user, date) {
    const date_obj = new Date(date);
    const date_string = format(date_obj, "yyyy-MM-dd");
    const day_of_week = date_obj.getDay();
    const override = user.work_overrides?.[date_string];
    if (override?.blocks?.length) {
      return override.blocks[0].location;
    }
    const day_preference = user.work_preferences?.find((pref) => pref.day_of_week === day_of_week);
    if (day_preference?.blocks?.length) {
      return day_preference.blocks[0].location;
    }
    return void 0;
  }
  /** Build TeamMember objects with booking data for each user */
  async _buildTeamMembers(users, favorite_ids, team_ids) {
    const week_days = this.week_days();
    const building = this._org.building;
    const week_start = startOfDay(week_days[0].date);
    const week_end = endOfDay(week_days[week_days.length - 1].date);
    const bookings_promises = users.map((user) => queryBookings({
      email: user.email,
      type: "desk",
      period_start: getUnixTime(week_start),
      period_end: getUnixTime(week_end)
    }).catch(() => []));
    const all_bookings = await Promise.all(bookings_promises);
    return users.map((user, index) => {
      const user_bookings = all_bookings[index];
      const user_id = user.email || user.id;
      const day_statuses = week_days.map((day) => {
        const day_start = startOfDay(day.date);
        const day_end = endOfDay(day.date);
        const booking = user_bookings.find((b) => b.date >= day_start.valueOf() && b.date < day_end.valueOf());
        const work_location = this._getUserWorkLocationForDate(user, day.date);
        let status = this._mapWorkLocationToStatus(work_location);
        let desk_booking;
        if (booking) {
          status = "office";
          const booking_building = this._org.buildings.find((bld) => booking.zones?.includes(bld.id));
          const booking_level = this._org.levels.find((lvl) => booking.zones?.includes(lvl.id));
          desk_booking = {
            building_name: booking_building?.display_name || booking_building?.name || "",
            desk_code: booking.asset_name || booking.description || "",
            desk_id: booking.asset_id,
            level_id: booking_level?.id,
            date: booking.date,
            duration: booking.duration
          };
        }
        return {
          date: day.date,
          status,
          booking: desk_booking
        };
      });
      const current_status = day_statuses.find((s) => isSameDay(s.date, /* @__PURE__ */ new Date()));
      const current_booking = current_status?.booking;
      return {
        user,
        is_favorite: favorite_ids.has(user_id),
        is_my_team: team_ids.has(user_id),
        department: user.department,
        current_building: current_booking?.building_name,
        current_desk: current_booking?.desk_code,
        statuses: day_statuses
      };
    });
  }
  /** Add a user to favorites */
  addFavorite(user) {
    const user_id = user.email || user.id;
    const current_favorites = this._settings.get(SETTING_KEYS.FAVORITE_TEAM_MEMBERS) || [];
    if (current_favorites.includes(user_id))
      return;
    const updated = [...current_favorites, user_id];
    this._settings.saveUserSetting(SETTING_KEYS.FAVORITE_TEAM_MEMBERS, updated);
    const favorite_ids = new Set(this._favorite_ids());
    favorite_ids.add(user_id);
    this._favorite_ids.set(favorite_ids);
    const members = this._team_members().map((m) => m.user.email === user.email ? __spreadProps(__spreadValues({}, m), { is_favorite: true }) : m);
    this._team_members.set(members);
  }
  /** Remove a user from favorites */
  removeFavorite(user) {
    const user_id = user.email || user.id;
    const current_favorites = this._settings.get(SETTING_KEYS.FAVORITE_TEAM_MEMBERS) || [];
    const updated = current_favorites.filter((id) => id !== user_id);
    this._settings.saveUserSetting(SETTING_KEYS.FAVORITE_TEAM_MEMBERS, updated);
    const favorite_ids = new Set(this._favorite_ids());
    favorite_ids.delete(user_id);
    this._favorite_ids.set(favorite_ids);
    const members = this._team_members().map((m) => m.user.email === user.email ? __spreadProps(__spreadValues({}, m), { is_favorite: false }) : m);
    this._team_members.set(members);
  }
  /** Toggle a user's team member status */
  toggleTeamMember(member) {
    if (member.is_my_team) {
      this.removeTeamMember(member.user);
    } else {
      this.addTeamMember(member.user);
    }
  }
  /** Add a user to team members */
  addTeamMember(user) {
    const user_id = user.email || user.id;
    const current_team = this._settings.get(SETTING_KEYS.TEAM_MEMBERS) || [];
    if (current_team.includes(user_id))
      return;
    const updated = [...current_team, user_id];
    this._settings.saveUserSetting(SETTING_KEYS.TEAM_MEMBERS, updated);
    const team_ids = new Set(this._team_member_ids());
    team_ids.add(user_id);
    this._team_member_ids.set(team_ids);
    const members = this._team_members().map((m) => m.user.email === user.email ? __spreadProps(__spreadValues({}, m), { is_my_team: true }) : m);
    this._team_members.set(members);
  }
  /** Remove a user from team members */
  removeTeamMember(user) {
    const user_id = user.email || user.id;
    const current_team = this._settings.get(SETTING_KEYS.TEAM_MEMBERS) || [];
    const updated = current_team.filter((id) => id !== user_id);
    this._settings.saveUserSetting(SETTING_KEYS.TEAM_MEMBERS, updated);
    const team_ids = new Set(this._team_member_ids());
    team_ids.delete(user_id);
    this._team_member_ids.set(team_ids);
    const members = this._team_members().map((m) => m.user.email === user.email ? __spreadProps(__spreadValues({}, m), { is_my_team: false }) : m);
    this._team_members.set(members);
  }
  /** Refresh all data */
  async refresh() {
    await this._loadUsers();
  }
  static {
    this.\u0275fac = function TeamScheduleService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TeamScheduleService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TeamScheduleService, factory: _TeamScheduleService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamScheduleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// apps/workplace/src/app/landing-new/add-colleagues-modal.component.ts
var _c0 = (a0) => ({ count: a0 });
var _forTrack0 = ($index, $item) => $item.email;
function AddColleaguesModalComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 9);
  }
}
function AddColleaguesModalComponent_Conditional_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "mat-spinner", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
  }
}
function AddColleaguesModalComponent_Conditional_18_Conditional_2_For_6_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.WORKPLACE.COLLEAGUES_EXISTS"), " ");
  }
}
function AddColleaguesModalComponent_Conditional_18_Conditional_2_For_6_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 28);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function AddColleaguesModalComponent_Conditional_18_Conditional_2_For_6_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 29);
    \u0275\u0275text(1, "radio_button_unchecked");
    \u0275\u0275elementEnd();
  }
}
function AddColleaguesModalComponent_Conditional_18_Conditional_2_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function AddColleaguesModalComponent_Conditional_18_Conditional_2_For_6_Template_button_click_0_listener() {
      const user_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleUser(user_r2));
    });
    \u0275\u0275element(1, "a-user-avatar", 23);
    \u0275\u0275elementStart(2, "div", 24)(3, "div", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, AddColleaguesModalComponent_Conditional_18_Conditional_2_For_6_Conditional_7_Template, 3, 3, "div", 27)(8, AddColleaguesModalComponent_Conditional_18_Conditional_2_For_6_Conditional_8_Template, 2, 0, "icon", 28)(9, AddColleaguesModalComponent_Conditional_18_Conditional_2_For_6_Conditional_9_Template, 2, 0, "icon", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r2.loading() || ctx_r2.isUserSelected(user_r2) || ctx_r2.isExistingContact(user_r2));
    \u0275\u0275advance();
    \u0275\u0275property("user", user_r2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", user_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r2.email, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isExistingContact(user_r2) ? 7 : ctx_r2.isUserSelected(user_r2) ? 8 : 9);
  }
}
function AddColleaguesModalComponent_Conditional_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20);
    \u0275\u0275repeaterCreate(5, AddColleaguesModalComponent_Conditional_18_Conditional_2_For_6_Template, 10, 5, "button", 21, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const user_list_r4 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.WORKPLACE.COLLEAGUES_AVAILABLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(user_list_r4);
  }
}
function AddColleaguesModalComponent_Conditional_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "icon", 30);
    \u0275\u0275text(2, "person_cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "FORM.USER_EMPTY"));
  }
}
function AddColleaguesModalComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275conditionalCreate(1, AddColleaguesModalComponent_Conditional_18_Conditional_1_Template, 2, 1, "div", 16)(2, AddColleaguesModalComponent_Conditional_18_Conditional_2_Template, 7, 3, "div", 17)(3, AddColleaguesModalComponent_Conditional_18_Conditional_3_Template, 6, 3, "div", 10);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const user_list_r5 = \u0275\u0275storeLet(ctx_r2.available_users());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.loading_users() ? 1 : user_list_r5.length > 0 ? 2 : 3);
  }
}
function AddColleaguesModalComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "icon", 30);
    \u0275\u0275text(2, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, ctx_r2.search_term ? "APP.WORKPLACE.COLLEAGUE_SEARCH_NO_MATCH" : "APP.WORKPLACE.COLLEAGUE_SEARCH_EMPTY"), " ");
  }
}
function AddColleaguesModalComponent_Conditional_20_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "a-user-avatar", 23);
    \u0275\u0275elementStart(2, "div", 24)(3, "div", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 32);
    \u0275\u0275listener("click", function AddColleaguesModalComponent_Conditional_20_For_5_Template_button_click_7_listener() {
      const user_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleUser(user_r7));
    });
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("user", user_r7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r7.email, " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.loading());
  }
}
function AddColleaguesModalComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, AddColleaguesModalComponent_Conditional_20_For_5_Template, 10, 4, "div", 31, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(3, 1, "APP.WORKPLACE.COLLEAGUES_SELECTED", \u0275\u0275pureFunction1(5, _c0, ctx_r2.selected_users().length), ctx_r2.selected_users().length), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.selected_users());
  }
}
function AddColleaguesModalComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "mat-spinner", 18);
    \u0275\u0275elementStart(2, "span", 33);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 24);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "APP.WORKPLACE.COLLEAGUES_ADDING"));
  }
}
var AddColleaguesModalComponent = class _AddColleaguesModalComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(LandingStateService);
    this._dialog_ref = inject(MatDialogRef, {
      optional: true
    });
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_users = signal(
      [],
      ...ngDevMode ? [{ debugName: "selected_users" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search_term_signal = signal(
      "",
      ...ngDevMode ? [{ debugName: "search_term_signal" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._search_results = this._state.search_results;
    this._loading_state = this._state.loading;
    this._existing_contacts = this._state.contacts;
    this.loading_users = computed(
      () => !!this._loading_state(),
      ...ngDevMode ? [{ debugName: "loading_users" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.available_users = computed(
      () => this._search_results(),
      ...ngDevMode ? [{ debugName: "available_users" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.existing_contacts = computed(
      () => this._existing_contacts(),
      ...ngDevMode ? [{ debugName: "existing_contacts" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  get search_term() {
    return this.search_term_signal();
  }
  set search_term(value) {
    this.search_term_signal.set(value);
    this._state.setOptions({ search: value });
  }
  ngOnInit() {
    this._state.setOptions({ search: "" });
  }
  toggleUser(user) {
    const current_users = this.selected_users();
    const is_selected = current_users.find((u) => u.email === user.email);
    if (is_selected) {
      this.selected_users.set(current_users.filter((u) => u.email !== user.email));
    } else {
      this.selected_users.set([...current_users, user]);
    }
  }
  isUserSelected(user) {
    return !!this.selected_users().find((u) => u.email === user.email);
  }
  isExistingContact(user) {
    return !!this.existing_contacts().find((u) => u.email === user.email);
  }
  async confirm() {
    this.loading.set(true);
    try {
      await this._state.addContacts(this.selected_users());
      const count = this.selected_users().length;
      notifySuccess(count === 1 ? "Colleague added successfully" : `${count} colleagues added successfully`);
      this._dialog_ref?.close(true);
    } catch (error) {
      console.error("Error adding colleagues:", error);
      notifyError("Failed to add colleagues. Please try again.");
    } finally {
      this.loading.set(false);
    }
  }
  dismiss() {
    this._dialog_ref?.close(false);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275AddColleaguesModalComponent_BaseFactory;
      return function AddColleaguesModalComponent_Factory(__ngFactoryType__) {
        return (\u0275AddColleaguesModalComponent_BaseFactory || (\u0275AddColleaguesModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AddColleaguesModalComponent)))(__ngFactoryType__ || _AddColleaguesModalComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddColleaguesModalComponent, selectors: [["add-colleagues-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 29, vars: 26, consts: [[1, "relative", "flex", "h-screen", "w-screen", "flex-col", "sm:h-auto", "sm:w-[32rem]"], [1, "sticky", "top-0", "z-10", "m-2", "h-14", "w-[calc(100%-1rem)]", "min-w-[20rem]", "rounded", "border-none", "bg-base-200", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", 1, "h-10", "w-10", 3, "click"], [1, "flex-1", "overflow-auto", "p-4"], [1, "mb-4", "text-sm", "opacity-60"], ["appearance", "outline", 1, "no-subscript", "mb-4", "w-full"], ["matPrefix", "", 1, "block", "flex", "w-6", "items-center", "justify-center", "text-2xl"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder", "disabled"], ["matSuffix", "", "diameter", "24"], [1, "flex", "flex-col", "items-center", "justify-center", "rounded-xl", "bg-base-200", "py-16", "text-sm", "opacity-60"], [1, "mt-4", "space-y-2", "border-t", "border-base-200", "pt-4"], [1, "mt-4", "flex", "items-center", "justify-center", "space-x-2"], [1, "flex", "items-center", "justify-between", "gap-2", "border-t", "border-base-200", "p-4"], ["btn", "", "matRipple", "", 1, "inverse", "flex-1", 3, "click"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click", "disabled"], [1, "flex", "items-center", "justify-center", "py-8"], [1, "mb-4", "space-y-2"], [3, "diameter"], [1, "text-sm", "font-medium"], [1, "max-h-64", "space-y-2", "overflow-auto"], ["matRipple", "", 1, "flex", "w-full", "items-center", "space-x-2", "rounded", "border", "border-base-300", "bg-base-100", "p-2", "text-left", "hover:bg-base-200", 3, "disabled"], ["matRipple", "", 1, "flex", "w-full", "items-center", "space-x-2", "rounded", "border", "border-base-300", "bg-base-100", "p-2", "text-left", "hover:bg-base-200", 3, "click", "disabled"], [3, "user"], [1, "flex", "w-16", "flex-1", "flex-col", "leading-tight"], [1, "truncate"], [1, "truncate", "text-xs", "opacity-60"], [1, "text-xs", "opacity-60"], [1, "text-success"], [1, "opacity-30"], [1, "mb-2", "text-4xl"], [1, "bg-success/10", "flex", "items-center", "space-x-2", "rounded", "border", "border-base-300", "p-2"], ["icon", "", "matRipple", "", 3, "click", "disabled"], [1, "text-sm", "opacity-60"]], template: function AddColleaguesModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 3);
        \u0275\u0275listener("click", function AddColleaguesModalComponent_Template_button_click_5_listener() {
          return ctx.dismiss();
        });
        \u0275\u0275elementStart(6, "icon");
        \u0275\u0275text(7, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "main", 4)(9, "p", 5);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "mat-form-field", 6)(13, "icon", 7);
        \u0275\u0275text(14, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "input", 8);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function AddColleaguesModalComponent_Template_input_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search_term, $event) || (ctx.search_term = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(17, AddColleaguesModalComponent_Conditional_17_Template, 1, 0, "mat-spinner", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(18, AddColleaguesModalComponent_Conditional_18_Template, 4, 2)(19, AddColleaguesModalComponent_Conditional_19_Template, 6, 3, "div", 10);
        \u0275\u0275conditionalCreate(20, AddColleaguesModalComponent_Conditional_20_Template, 6, 7, "div", 11);
        \u0275\u0275conditionalCreate(21, AddColleaguesModalComponent_Conditional_21_Template, 5, 4, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "footer", 13)(23, "button", 14);
        \u0275\u0275listener("click", function AddColleaguesModalComponent_Template_button_click_23_listener() {
          return ctx.dismiss();
        });
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "button", 15);
        \u0275\u0275listener("click", function AddColleaguesModalComponent_Template_button_click_26_listener() {
          return ctx.confirm();
        });
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 12, "APP.WORKPLACE.COLLEAGUES_ADD"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 14, "APP.WORKPLACE.COLLEAGUES_ADD_DESCRIPTION"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.search_term);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(16, 16, "APP.WORKPLACE.COLLEAGUE_SEARCH"))("disabled", ctx.loading_users());
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading_users() ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.search_term && ctx.search_term.length > 2 ? 18 : 19);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.selected_users().length > 0 ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 21 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 18, "COMMON.CANCEL"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading() || ctx.selected_users().length === 0);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(28, 20, "APP.WORKPLACE.COLLEAGUES_ADD_CONFIRM", \u0275\u0275pureFunction1(24, _c0, ctx.selected_users().length), ctx.selected_users().length), " ");
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatSuffix,
      MatInputModule,
      MatInput,
      UserAvatarComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddColleaguesModalComponent, [{
    type: Component,
    args: [{ selector: "add-colleagues-modal", standalone: true, template: `
        <div
            class="relative flex h-screen w-screen flex-col sm:h-auto sm:w-[32rem]"
        >
            <!-- Header -->
            <header
                class="sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] min-w-[20rem] rounded border-none bg-base-200 p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    {{ 'APP.WORKPLACE.COLLEAGUES_ADD' | translate }}
                </h2>
                <button icon matRipple class="h-10 w-10" (click)="dismiss()">
                    <icon>close</icon>
                </button>
            </header>

            <!-- Content -->
            <main class="flex-1 overflow-auto p-4">
                <p class="mb-4 text-sm opacity-60">
                    {{ 'APP.WORKPLACE.COLLEAGUES_ADD_DESCRIPTION' | translate }}
                </p>

                <!-- Search Filter -->
                <mat-form-field
                    appearance="outline"
                    class="no-subscript mb-4 w-full"
                >
                    <icon
                        matPrefix
                        class="block flex w-6 items-center justify-center text-2xl"
                        >search</icon
                    >
                    <input
                        matInput
                        [(ngModel)]="search_term"
                        [placeholder]="
                            'APP.WORKPLACE.COLLEAGUE_SEARCH' | translate
                        "
                        [disabled]="loading_users()"
                    />
                    @if (loading_users()) {
                        <mat-spinner matSuffix diameter="24"></mat-spinner>
                    }
                </mat-form-field>

                <!-- Available Users List -->
                @if (search_term && search_term.length > 2) {
                    @let user_list = available_users();
                    @if (loading_users()) {
                        <div class="flex items-center justify-center py-8">
                            <mat-spinner [diameter]="32"></mat-spinner>
                        </div>
                    } @else if (user_list.length > 0) {
                        <div class="mb-4 space-y-2">
                            <div class="text-sm font-medium">
                                {{
                                    'APP.WORKPLACE.COLLEAGUES_AVAILABLE'
                                        | translate
                                }}
                            </div>
                            <div class="max-h-64 space-y-2 overflow-auto">
                                @for (user of user_list; track user.email) {
                                    <button
                                        class="flex w-full items-center space-x-2 rounded border border-base-300 bg-base-100 p-2 text-left hover:bg-base-200"
                                        matRipple
                                        [disabled]="
                                            loading() ||
                                            isUserSelected(user) ||
                                            isExistingContact(user)
                                        "
                                        (click)="toggleUser(user)"
                                    >
                                        <a-user-avatar [user]="user" />
                                        <div
                                            class="flex w-16 flex-1 flex-col leading-tight"
                                        >
                                            <div class="truncate">
                                                {{ user.name }}
                                            </div>
                                            <div
                                                class="truncate text-xs opacity-60"
                                            >
                                                {{ user.email }}
                                            </div>
                                        </div>
                                        @if (isExistingContact(user)) {
                                            <div class="text-xs opacity-60">
                                                {{
                                                    'APP.WORKPLACE.COLLEAGUES_EXISTS'
                                                        | translate
                                                }}
                                            </div>
                                        } @else if (isUserSelected(user)) {
                                            <icon class="text-success"
                                                >check_circle</icon
                                            >
                                        } @else {
                                            <icon class="opacity-30"
                                                >radio_button_unchecked</icon
                                            >
                                        }
                                    </button>
                                }
                            </div>
                        </div>
                    } @else {
                        <div
                            class="flex flex-col items-center justify-center rounded-xl bg-base-200 py-16 text-sm opacity-60"
                        >
                            <icon class="mb-2 text-4xl">person_cancel</icon>
                            <div>{{ 'FORM.USER_EMPTY' | translate }}</div>
                        </div>
                    }
                } @else {
                    <div
                        class="flex flex-col items-center justify-center rounded-xl bg-base-200 py-16 text-sm opacity-60"
                    >
                        <icon class="mb-2 text-4xl">search</icon>
                        <p>
                            {{
                                (search_term
                                    ? 'APP.WORKPLACE.COLLEAGUE_SEARCH_NO_MATCH'
                                    : 'APP.WORKPLACE.COLLEAGUE_SEARCH_EMPTY'
                                ) | translate
                            }}
                        </p>
                    </div>
                }

                <!-- Selected Users List -->
                @if (selected_users().length > 0) {
                    <div class="mt-4 space-y-2 border-t border-base-200 pt-4">
                        <div class="text-sm font-medium">
                            {{
                                'APP.WORKPLACE.COLLEAGUES_SELECTED'
                                    | translate
                                        : {
                                              count: selected_users().length,
                                          }
                                        : selected_users().length
                            }}
                        </div>
                        @for (user of selected_users(); track user.email) {
                            <div
                                class="bg-success/10 flex items-center space-x-2 rounded border border-base-300 p-2"
                            >
                                <a-user-avatar [user]="user" />
                                <div
                                    class="flex w-16 flex-1 flex-col leading-tight"
                                >
                                    <div class="truncate">{{ user.name }}</div>
                                    <div class="truncate text-xs opacity-60">
                                        {{ user.email }}
                                    </div>
                                </div>
                                <button
                                    icon
                                    matRipple
                                    (click)="toggleUser(user)"
                                    [disabled]="loading()"
                                >
                                    <icon>close</icon>
                                </button>
                            </div>
                        }
                    </div>
                }

                @if (loading()) {
                    <div
                        class="mt-4 flex items-center justify-center space-x-2"
                    >
                        <mat-spinner [diameter]="24"></mat-spinner>
                        <span class="text-sm opacity-60">{{
                            'APP.WORKPLACE.COLLEAGUES_ADDING' | translate
                        }}</span>
                    </div>
                }
            </main>

            <!-- Footer -->
            <footer
                class="flex items-center justify-between gap-2 border-t border-base-200 p-4"
            >
                <button
                    btn
                    matRipple
                    class="inverse flex-1"
                    (click)="dismiss()"
                >
                    {{ 'COMMON.CANCEL' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    class="flex-1"
                    [disabled]="loading() || selected_users().length === 0"
                    (click)="confirm()"
                >
                    {{
                        'APP.WORKPLACE.COLLEAGUES_ADD_CONFIRM'
                            | translate
                                : {
                                      count: selected_users().length,
                                  }
                                : selected_users().length
                    }}
                </button>
            </footer>
        </div>
    `, imports: [
      CommonModule,
      FormsModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatInputModule,
      UserAvatarComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddColleaguesModalComponent, { className: "AddColleaguesModalComponent", filePath: "apps/workplace/src/app/landing-new/add-colleagues-modal.component.ts", lineNumber: 249 });
})();

export {
  USER_LOCATIONS,
  TeamScheduleService,
  AddColleaguesModalComponent
};
//# sourceMappingURL=chunk-2HHKBDFY.js.map
