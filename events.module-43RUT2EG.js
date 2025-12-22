import {
  subMonths
} from "./chunk-BSSVBOEO.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent
} from "./chunk-4RG2QD2S.js";
import {
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  AttendeeListComponent,
  AuthenticatedImageDirective,
  BehaviorSubject,
  BuildingPipe,
  COMMA,
  CalendarEvent,
  CommonModule,
  Component,
  CustomTooltipComponent,
  DateFieldComponent,
  DatePipe,
  DefaultValueAccessor,
  ENTER,
  EventFormService,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  GroupEventCardComponent,
  GroupEventDetailsModalComponent,
  IconComponent,
  ImageListFieldComponent,
  Injectable,
  LevelPipe,
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule,
  MatDialog,
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
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgIf,
  NgModel,
  NgModule,
  OrganisationService,
  ReactiveFormsModule,
  RichTextInputComponent,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SPACE,
  SettingsService,
  SettingsToggleComponent,
  SimpleTableComponent,
  SlicePipe,
  Space,
  SpacePipe,
  StaffUser,
  TIMEZONES_IANA,
  TimeFieldComponent,
  TranslatePipe,
  UserSearchFieldComponent,
  __spreadProps,
  __spreadValues,
  addDays,
  addMonths,
  addWeeks,
  combineLatest,
  currentUser,
  debounceTime,
  differenceInMinutes,
  distinctUntilChanged,
  endOfDay,
  filter,
  firstTruthyValueFrom,
  format,
  formatDuration,
  getInvalidFields,
  getUnixTime,
  i18n,
  inject,
  isSameDay,
  isSameMonth,
  lastValueFrom,
  map,
  nextValueFrom,
  notifyError,
  notifySuccess,
  openConfirmModal,
  queryEvents,
  removeEvent,
  setClassMetadata,
  shareReplay,
  showEvent,
  showEventMetadata,
  signal,
  startOfDay,
  startOfMinute,
  startOfMonth,
  startOfWeek,
  startWith,
  switchMap,
  tap,
  unique,
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
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵpureFunction2,
  ɵɵpureFunction8,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-Z5DSMDUT.js";

// apps/concierge/src/app/events/events.component.ts
var _c0 = ["app-events", ""];
var _EventsComponent = class _EventsComponent {
};
_EventsComponent.\u0275fac = function EventsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EventsComponent)();
};
_EventsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventsComponent, selectors: [["", "app-events", ""]], attrs: _c0, decls: 5, vars: 0, consts: [[1, "flex", "h-px", "flex-1"], [1, "relative", "flex", "h-full", "w-1/2", "flex-1", "flex-col"]], template: function EventsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 1);
    \u0275\u0275element(4, "router-outlet");
    \u0275\u0275elementEnd()();
  }
}, dependencies: [
  ApplicationTopbarComponent,
  ApplicationSidebarComponent,
  RouterModule,
  RouterOutlet
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=events.component.css.map */"] });
var EventsComponent = _EventsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventsComponent, [{
    type: Component,
    args: [{ selector: "[app-events]", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="relative flex h-full w-1/2 flex-1 flex-col">
                <router-outlet></router-outlet>
            </main>
        </div>
    `, imports: [
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      RouterModule
    ], styles: ["/* angular:styles/component:css;8c4a04aa555db379bf6f094c3ef1278e1f19da8fa9947c76cf85d1411aeb75c3;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/events/events.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=events.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventsComponent, { className: "EventsComponent", filePath: "apps/concierge/src/app/events/events.component.ts", lineNumber: 34 });
})();

// apps/concierge/src/app/events/event-state.service.ts
var _EventStateService = class _EventStateService extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._router = inject(Router);
    this._options = new BehaviorSubject({
      period: "week"
    });
    this._loading = new BehaviorSubject("");
    this._poll = new BehaviorSubject(0);
    this._changed = new BehaviorSubject(0);
    this.event_list = combineLatest([
      this._org.active_building,
      this._options,
      this._changed,
      this._poll
    ]).pipe(filter(([bld]) => !!bld), debounceTime(310), switchMap(([_, options]) => {
      this._loading.next(i18n("APP.CONCIERGE.EVENTS_LOADING"));
      return queryEvents({
        period_start: getUnixTime(startOfDay(options.date)),
        period_end: getUnixTime(endOfDay(options.end || options.date || Date.now())),
        calendars: this.calendar
      });
    }), map((list) => list.filter((_) => _.extension_data?.shared_event).sort((a, b) => a.date - b.date)), tap(() => this._loading.next("")), shareReplay(1));
    this.options = this._options.asObservable();
    this.loading = this._loading.asObservable();
  }
  changed() {
    this.timeout("changed", () => this._changed.next(Date.now()), 100);
  }
  get period() {
    return this._options.getValue()?.period;
  }
  get calendar() {
    return this._settings.get("app.group_events_calendar");
  }
  startPolling(delay = 60 * 1e3) {
    this.interval("poll", () => document.hasFocus() ? this._poll.next(Date.now()) : "", delay);
    return () => this.stopPolling();
  }
  stopPolling() {
    this.clearInterval("poll");
  }
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.value), options));
  }
  viewEvent(event) {
    const ref = this._dialog.open(GroupEventDetailsModalComponent, {
      data: {
        event,
        concierge: true,
        edit_fn: (i) => this._router.navigate([
          "/entertainment",
          "events",
          "manage",
          event.id
        ]),
        remove_fn: async () => {
          await this.removeEvent(event);
          ref.close();
        }
      }
    });
  }
  async removeEvent(event) {
    const result = await openConfirmModal({
      title: i18n("APP.CONCIERGE.EVENTS_REMOVE_TITLE"),
      content: i18n("APP.CONCIERGE.EVENTS_REMOVE_MSG", {
        title: event.title
      }),
      icon: { content: "delete" },
      confirm_text: i18n("COMMON.REMOVE")
    }, this._dialog);
    if (result.reason !== "done")
      return;
    result.loading(i18n("APP.CONCIERGE.EVENTS_REMOVE_LOADING"));
    await removeEvent(event.id, {
      calendar: this.calendar
    }).toPromise().catch((e) => {
      notifyError(i18n("APP.CONCIERGE.EVENTS_REMOVE_ERROR", { error: e }));
      result.close();
      throw e;
    });
    result.close();
    notifySuccess(i18n("APP.CONCIERGE.EVENTS_REMOVE_SUCCESS"));
    this._changed.next(Date.now());
  }
};
_EventStateService.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275EventStateService_BaseFactory;
  return function EventStateService_Factory(__ngFactoryType__) {
    return (\u0275EventStateService_BaseFactory || (\u0275EventStateService_BaseFactory = \u0275\u0275getInheritedFactory(_EventStateService)))(__ngFactoryType__ || _EventStateService);
  };
})();
_EventStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EventStateService, factory: _EventStateService.\u0275fac, providedIn: "root" });
var EventStateService = _EventStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/events/event-manage.component.ts
var _c02 = () => ["/entertainment", "events"];
var _c1 = () => ({ standalone: true });
function EventManageComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c02));
  }
}
function EventManageComponent_Conditional_0_For_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 51);
    \u0275\u0275listener("removed", function EventManageComponent_Conditional_0_For_32_Template_mat_chip_row_removed_0_listener() {
      const tag_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeTag(tag_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "icon", 52);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    \u0275\u0275property("removable", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r3, " ");
  }
}
function EventManageComponent_Conditional_0_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 53)(2, "label", 54);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a-time-field", 55);
    \u0275\u0275listener("ngModelChange", function EventManageComponent_Conditional_0_Conditional_71_Template_a_time_field_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 53)(9, "label", 56);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "a-time-field", 57);
    \u0275\u0275listener("ngModelChange", function EventManageComponent_Conditional_0_Conditional_71_Template_a_time_field_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.form.patchValue({ date_end: $event }));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 11, "FORM.TIME_START"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r3.form.getRawValue().date)("disabled", ctx_r3.form.controls.date.disabled)("ngModelOptions", \u0275\u0275pureFunction0(15, _c1))("use_24hr", ctx_r3.use_24hr);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 13, "FORM.TIME_END"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r3.form.value.date_end || ctx_r3.form.value.date + ctx_r3.form.value.duration * 60 * 1e3)("ngModelOptions", \u0275\u0275pureFunction0(16, _c1))("from", (ctx_r3.form == null ? null : (tmp_12_0 = ctx_r3.form.getRawValue()) == null ? null : tmp_12_0.date) + 30 * 60 * 1e3)("use_24hr", ctx_r3.use_24hr)("extra_info_fn", ctx_r3.duration_info);
  }
}
function EventManageComponent_Conditional_0_For_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tz_r6 = ctx.$implicit;
    \u0275\u0275property("value", tz_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tz_r6, " ");
  }
}
function EventManageComponent_Conditional_0_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 40);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.TIMEZONE_EMPTY"), " ");
  }
}
function EventManageComponent_Conditional_0_Conditional_109_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const building_r8 = ctx.$implicit;
    \u0275\u0275property("value", building_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", building_r8.display_name || building_r8.name, " ");
  }
}
function EventManageComponent_Conditional_0_Conditional_109_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const level_r9 = ctx.$implicit;
    \u0275\u0275property("value", level_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", level_r9.display_name || level_r9.name, " ");
  }
}
function EventManageComponent_Conditional_0_Conditional_109_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r10 = ctx.$implicit;
    \u0275\u0275property("value", room_r10.email);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", room_r10.display_name || room_r10.name, " ");
  }
}
function EventManageComponent_Conditional_0_Conditional_109_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 58);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 36)(4, "mat-select", 59);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("ngModelChange", function EventManageComponent_Conditional_0_Conditional_109_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setBuilding($event));
    });
    \u0275\u0275repeaterCreate(6, EventManageComponent_Conditional_0_Conditional_109_For_7_Template, 2, 2, "mat-option", 39, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 60)(10, "div", 61)(11, "label", 62);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-form-field", 36)(15, "mat-select", 59);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275listener("ngModelChange", function EventManageComponent_Conditional_0_Conditional_109_Template_mat_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setLevel($event));
    });
    \u0275\u0275repeaterCreate(17, EventManageComponent_Conditional_0_Conditional_109_For_18_Template, 2, 2, "mat-option", 39, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 63)(21, "label", 62);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-form-field", 36)(25, "mat-select", 64);
    \u0275\u0275pipe(26, "async");
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EventManageComponent_Conditional_0_Conditional_109_Template_mat_select_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.resource, $event) || (ctx_r3.resource = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(28, "mat-option")(29, "i");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(32, EventManageComponent_Conditional_0_Conditional_109_For_33_Template, 2, 2, "mat-option", 39, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(34, "async");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_17_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 14, "RESOURCE.BUILDING"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r3.building_zone)("ngModelOptions", \u0275\u0275pureFunction0(36, _c1))("placeholder", \u0275\u0275pipeBind1(5, 16, "COMMON.BUILDING_SELECT"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(8, 18, ctx_r3.building_list));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 20, "RESOURCE.LEVEL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r3.level_zone)("ngModelOptions", \u0275\u0275pureFunction0(37, _c1))("placeholder", \u0275\u0275pipeBind1(16, 22, "COMMON.LEVEL_SELECT"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(19, 24, ctx_r3.active_levels));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 26, "RESOURCE.ROOM"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.resource);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(38, _c1))("disabled", ((tmp_17_0 = \u0275\u0275pipeBind1(26, 28, ctx_r3.available_spaces)) == null ? null : tmp_17_0.length) === 0)("placeholder", \u0275\u0275pipeBind1(27, 30, "COMMON.ROOM_SELECT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 32, "COMMON.NONE"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(34, 34, ctx_r3.available_spaces));
  }
}
function EventManageComponent_Conditional_0_Conditional_124_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 50)(1, "button", 65);
    \u0275\u0275listener("click", function EventManageComponent_Conditional_0_Conditional_124_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.save());
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
function EventManageComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "header", 4)(2, "h2", 5);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, EventManageComponent_Conditional_0_Conditional_5_Template, 3, 2, "a", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "form", 7)(7, "section", 8)(8, "label", 9);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "mat-form-field", 10);
    \u0275\u0275element(14, "input", 11);
    \u0275\u0275elementStart(15, "mat-error");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "label", 12);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 13);
    \u0275\u0275element(24, "a-user-search-field", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "label", 15);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-form-field", 16)(29, "mat-chip-grid", 17, 0);
    \u0275\u0275repeaterCreate(31, EventManageComponent_Conditional_0_For_32_Template, 4, 2, "mat-chip-row", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(33, "input", 19);
    \u0275\u0275listener("matChipInputTokenEnd", function EventManageComponent_Conditional_0_Template_input_matChipInputTokenEnd_33_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addTag($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 20);
    \u0275\u0275element(35, "settings-toggle", 21);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementStart(37, "mat-form-field", 16)(38, "mat-select", 22)(39, "mat-option", 23);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "mat-option", 24);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "mat-option", 25);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(48, "div", 26);
    \u0275\u0275elementStart(49, "h3", 27);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 28)(53, "div", 29)(54, "label", 30);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementStart(57, "span");
    \u0275\u0275text(58, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "a-date-field", 31);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 29)(63, "label", 30);
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275elementStart(66, "span");
    \u0275\u0275text(67, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "a-date-field", 32);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(71, EventManageComponent_Conditional_0_Conditional_71_Template, 15, 17, "div", 33);
    \u0275\u0275elementStart(72, "div", 34)(73, "label", 35);
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "mat-form-field", 36)(77, "icon", 37);
    \u0275\u0275text(78, " search ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(79, "input", 38);
    \u0275\u0275pipe(80, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "mat-autocomplete", null, 1);
    \u0275\u0275repeaterCreate(83, EventManageComponent_Conditional_0_For_84_Template, 2, 2, "mat-option", 39, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(85, EventManageComponent_Conditional_0_Conditional_85_Template, 3, 4, "mat-option", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(86, "div", 26);
    \u0275\u0275elementStart(87, "h3", 27);
    \u0275\u0275text(88);
    \u0275\u0275pipe(89, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "div", 41)(91, "button", 42);
    \u0275\u0275listener("click", function EventManageComponent_Conditional_0_Template_button_click_91_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.form.patchValue({ attendance_type: "ONSITE" }));
    });
    \u0275\u0275elementStart(92, "icon", 43);
    \u0275\u0275text(93, "domain");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "div", 44);
    \u0275\u0275text(95);
    \u0275\u0275pipe(96, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "button", 42);
    \u0275\u0275listener("click", function EventManageComponent_Conditional_0_Template_button_click_97_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.form.patchValue({ attendance_type: "ONLINE" }));
    });
    \u0275\u0275elementStart(98, "icon", 43);
    \u0275\u0275text(99, "laptop_mac");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "div", 44);
    \u0275\u0275text(101);
    \u0275\u0275pipe(102, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "button", 42);
    \u0275\u0275listener("click", function EventManageComponent_Conditional_0_Template_button_click_103_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.form.patchValue({ attendance_type: "ANY" }));
    });
    \u0275\u0275elementStart(104, "icon", 43);
    \u0275\u0275text(105, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "div", 44);
    \u0275\u0275text(107);
    \u0275\u0275pipe(108, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(109, EventManageComponent_Conditional_0_Conditional_109_Template, 35, 39);
    \u0275\u0275element(110, "div", 26);
    \u0275\u0275elementStart(111, "h3", 27);
    \u0275\u0275text(112);
    \u0275\u0275pipe(113, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(114);
    \u0275\u0275elementStart(115, "label", 45);
    \u0275\u0275text(116);
    \u0275\u0275pipe(117, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "div", 46);
    \u0275\u0275element(119, "rich-text-input", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "label", 48);
    \u0275\u0275text(121);
    \u0275\u0275pipe(122, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(123, "image-list-field", 49);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(124, EventManageComponent_Conditional_0_Conditional_124_Template, 4, 3, "footer", 50);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const chipList_r12 = \u0275\u0275reference(30);
    const auto_r13 = \u0275\u0275reference(82);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 44, ctx_r3.form.value.id ? "APP.CONCIERGE.EVENTS_EDIT" : "APP.CONCIERGE.EVENTS_NEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r3.loading() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r3.form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 46, "FORM.TITLE"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 48, "FORM.TITLE_ERROR"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 50, "FORM.HOST"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 52, "COMMON.TAGS"));
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r3.tag_list);
    \u0275\u0275advance(2);
    \u0275\u0275property("matChipInputFor", chipList_r12)("matChipInputSeparatorKeyCodes", ctx_r3.separators)("matChipInputAddOnBlur", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(36, 54, "CALENDAR_EVENT.GROUP_FEATURED"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 56, "APP.CONCIERGE.EVENTS_DRAFT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 58, "APP.CONCIERGE.EVENTS_PUBLISH"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 60, "APP.CONCIERGE.EVENTS_PUBLISH_PUBLIC"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 62, "APP.CONCIERGE.EVENTS_DATE_TIME"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(56, 64, "FORM.DATE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("to", ctx_r3.end_date);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(61, 66, "FORM.DATE_ERROR"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(65, 68, "FORM.DATE_END"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("from", ctx_r3.start_date)("to", ctx_r3.end_date);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(70, 70, "FORM.DATE_ERROR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r3.form.value.all_day ? 71 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(75, 72, "COMMON.TIMEZONE"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(80, 74, "COMMON.TIMEZONE"))("matAutocomplete", auto_r13);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r3.filtered_timezones);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r3.timezones.length ? 85 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(89, 76, "COMMON.LOCATION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("inverse", false)("inverse", ctx_r3.form.value.attendance_type !== "ONSITE");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(96, 78, "APP.CONCIERGE.EVENTS_LOCATION_ONSITE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx_r3.form.value.attendance_type !== "ONLINE");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(102, 80, "APP.CONCIERGE.EVENTS_LOCATION_ONLINE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx_r3.form.value.attendance_type !== "ANY");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(108, 82, "APP.CONCIERGE.EVENTS_LOCATION_BOTH"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.form.value.attendance_type !== "ONLINE" ? 109 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(113, 84, "APP.CONCIERGE.EVENTS_INFO"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(117, 86, "COMMON.DESCRIPTION"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(122, 88, "COMMON.IMAGES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r3.loading() ? 124 : -1);
  }
}
function EventManageComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "mat-spinner", 66);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.EVENTS_SAVING"));
  }
}
var EMPTY = [];
var _EventManageComponent = class _EventManageComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._form_state = inject(EventFormService);
    this._state = inject(EventStateService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.loading = signal(false);
    this.timezones = [];
    this.filtered_timezones = [];
    this.form = this._form_state.form;
    this.separators = [ENTER, COMMA, SPACE];
    this.building_list = this._org.building_list;
    this.active_levels = this._org.active_levels;
    this.available_spaces = this._form_state.available_spaces;
    this.duration_info = (time) => {
      const date = this.form.getRawValue().date;
      if (format(date, "yyyy-MM-dd") !== format(time, "yyyy-MM-dd"))
        return "";
      const diff = differenceInMinutes(time, date);
      return ` (${formatDuration({
        hours: Math.floor(diff / 60),
        minutes: diff % 60
      })})`;
    };
  }
  get tag_list() {
    return this.form.getRawValue().tags || EMPTY;
  }
  get max_duration() {
    return this._settings.get("app.events.max_duration") || 480;
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  get start_date() {
    return this.form?.getRawValue()?.date;
  }
  get end_date() {
    return this._settings.get("app.events.available_period") ? startOfDay(Date.now()).valueOf() + this._settings.get("app.events.available_period") * 24 * 60 * 60 * 1e3 : void 0;
  }
  get building_zone() {
    const level = this.level_zone;
    const building = this._org.buildings.find((b) => b.id === level?.parent_id);
    return building || this._org.building;
  }
  get level_zone() {
    const zones = this._form_state.options.zones || [];
    const level = this._org.levelWithID(zones);
    return level;
  }
  async ngOnInit() {
    await firstTruthyValueFrom(this._org.initialised);
    const space_pipe = new SpacePipe();
    this.form.patchValue({
      location: this._org.building.address || this._org.building.display_name,
      organiser: currentUser(),
      attendance_type: "ONSITE",
      shared_event: true
    });
    if (!this.form.value.view_access)
      this.form.patchValue({ view_access: "OPEN" });
    this.subscription("route.params", this._route.paramMap.subscribe(async (params) => {
      if (params.has("id")) {
        let booking = await lastValueFrom(showEvent(params.get("id"), {
          calendar: this._state.calendar
        }));
        const space = await space_pipe.transform(this._state.calendar);
        const metadata = await lastValueFrom(showEventMetadata(params.get("id"), space?.id || booking.system?.id, { ical_uid: booking.ical_uid })).catch(() => ({}));
        booking = new CalendarEvent(__spreadProps(__spreadValues({}, booking), {
          extension_data: __spreadValues(__spreadValues({}, booking.extension_data), metadata)
        }));
        if (!booking)
          return this._router.navigate([
            "/entertainment",
            "events"
          ]);
        this._form_state.newForm(booking);
        this.resource = booking.resources.find((_) => _.email !== this._state.calendar)?.email;
        this.form.patchValue(__spreadValues({
          tags: booking.extension_data?.tags || [],
          organiser: new StaffUser({
            id: booking.organiser?.id,
            email: booking.host,
            name: booking.organiser?.name
          }),
          resources: booking.resources.filter((_) => _.email !== this._state.calendar)
        }, metadata));
        if (!this.form.value.view_access)
          this.form.patchValue({ view_access: "OPEN" });
      }
    }));
    this._updateTimezoneList();
    this.subscription("tz-change", this.form.valueChanges.subscribe(() => this._updateTimezoneList()));
  }
  setBuilding(bld) {
    this._org.building = bld;
  }
  setLevel(level) {
    const new_zones = unique([
      this._org.organisation.id,
      this._org.building.parent_id,
      this._org.building.id,
      level.id
    ]);
    this._form_state.setOptions({ zones: [level.id] });
  }
  /**
   * Add a feature to the list of features for the item
   * @param event Input event
   */
  addTag(event) {
    if (!this.form || !this.form.controls.tags)
      return;
    const input = event.chipInput.inputElement;
    const value = event.value;
    const feature_list = this.tag_list;
    if ((value || "").trim()) {
      feature_list.push(value);
      this.form.controls.tags.setValue(feature_list);
    }
    if (input)
      input.value = "";
  }
  /**
   * Remove tag from the list
   * @param existing_tag Feature to remove
   */
  removeTag(existing_tag) {
    if (!this.form || !this.form.controls.tags)
      return;
    const tag_list = this.tag_list;
    const index = tag_list.indexOf(existing_tag);
    if (index >= 0) {
      tag_list.splice(index, 1);
      this.form.controls.tags.setValue(tag_list);
    }
  }
  async save() {
    this.form.markAllAsTouched();
    if (!this.form.valid) {
      return notifyError(`Some form fields are invalid. [${getInvalidFields(this.form)}]`);
    }
    this.loading.set(true);
    let resources = this.form.getRawValue().resources;
    const space = await new SpacePipe().transform(this._state.calendar);
    resources.push(space || new Space({
      id: this._state.calendar,
      email: this._state.calendar
    }));
    if (this.resource) {
      const resource = await new SpacePipe().transform(this.resource);
      resources.push(resource);
    }
    resources = unique(resources, "email");
    this.form.patchValue({
      resources,
      creator: currentUser()?.email,
      host: this._state.calendar,
      shared_event: true
    });
    const date = this.form.getRawValue().date;
    const res = await this._form_state.postForm(false, [this._state.calendar], true, true).catch((e) => notifyError(e));
    this._state.changed();
    this.loading.set(false);
    if (res) {
      this._router.navigate(["/entertainment", "events"], {
        queryParams: { range: startOfDay(date).valueOf() }
      });
    }
  }
  _updateTimezoneList() {
    const timezone = this.form?.value?.timezone || "";
    this.timezones = TIMEZONES_IANA;
    this.filtered_timezones = this.timezones.filter((_) => _.toLowerCase().includes(timezone.toLowerCase()));
  }
};
_EventManageComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275EventManageComponent_BaseFactory;
  return function EventManageComponent_Factory(__ngFactoryType__) {
    return (\u0275EventManageComponent_BaseFactory || (\u0275EventManageComponent_BaseFactory = \u0275\u0275getInheritedFactory(_EventManageComponent)))(__ngFactoryType__ || _EventManageComponent);
  };
})();
_EventManageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventManageComponent, selectors: [["app-event-manage"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 1, consts: [["chipList", ""], ["auto", "matAutocomplete"], [1, "bg-base-100", "absolute", "inset-0", "overflow-auto"], [1, "bg-base-100", "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-4"], [1, "bg-base-200", "sticky", "top-0", "z-10", "mx-auto", "my-2", "flex", "w-full", "max-w-[640px]", "items-center", "justify-between", "rounded-sm", "border-none", "px-4", "py-2"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", 3, "routerLink"], [1, "mx-auto", "my-2", "flex", "w-160", "max-w-full", "flex-col", "px-4", "pb-16", 3, "formGroup"], [1, "flex", "flex-col", "space-y-2"], ["for", "title"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "title", "formControlName", "title", "placeholder", "e.g. Team Meeting"], ["for", "host"], [1, "pb-4"], ["name", "host", "formControlName", "organiser"], ["for", "tags"], ["appearance", "outline", 1, "no-subscript"], ["aria-label", "Event Tags"], [3, "removable"], ["placeholder", "Add new tags relevant to this event...", 3, "matChipInputTokenEnd", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [1, "flex", "items-center", "space-x-2", "py-4"], ["formControlName", "featured", 1, "flex-1", 3, "name"], ["formControlName", "view_access"], ["value", "PRIVATE"], ["value", "OPEN"], ["value", "PUBLIC"], [1, "bg-base-200", "h-px", "w-full"], [1, "py-4", "text-2xl", "font-medium"], [1, "flex", "flex-wrap", "items-center", "sm:space-x-2"], [1, "relative", "min-w-[256px]", "flex-1"], ["for", "date"], ["name", "date", "formControlName", "date", 3, "to"], ["name", "date", "formControlName", "date_end", 3, "from", "to"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "flex-col"], ["for", "display-name"], ["appearance", "outline"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", "formControlName", "timezone", 3, "placeholder", "matAutocomplete"], [3, "value"], [3, "disabled"], [1, "flex", "items-center", "space-x-2", "pb-2"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click"], [1, "text-2xl"], [1, "mx-2"], ["for", "description"], [1, "mb-16"], ["formControlName", "body"], ["for", "images"], ["formControlName", "images"], [1, "bg-base-200", "fixed", "bottom-0", "left-1/2", "z-10", "mx-auto", "my-2", "flex", "w-full", "max-w-[640px]", "-translate-x-1/2", "items-center", "justify-end", "rounded-sm", "border-none", "px-4", "py-2"], [3, "removed", "removable"], ["matChipRemove", ""], [1, "w-1/3", "flex-1"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "disabled", "ngModelOptions", "use_24hr"], ["for", "end-time"], ["name", "end-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "from", "use_24hr", "extra_info_fn"], ["for", "location"], [3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [1, "flex", "space-x-2"], [1, "flex", "flex-2", "flex-col"], ["for", "level"], [1, "flex", "flex-3", "flex-col"], [3, "ngModelChange", "ngModel", "ngModelOptions", "disabled", "placeholder"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["diameter", "48"]], template: function EventManageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EventManageComponent_Conditional_0_Template, 125, 90, "div", 2)(1, EventManageComponent_Conditional_1_Template, 5, 3, "div", 3);
  }
  if (rf & 2) {
    \u0275\u0275conditional(!ctx.loading() ? 0 : 1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  IconComponent,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  ImageListFieldComponent,
  RichTextInputComponent,
  MatFormFieldModule,
  MatFormField,
  MatError,
  MatPrefix,
  MatSelectModule,
  MatSelect,
  MatOption,
  MatInputModule,
  MatInput,
  MatChipsModule,
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatAutocompleteModule,
  MatAutocomplete,
  MatAutocompleteTrigger,
  FormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  SettingsToggleComponent,
  DateFieldComponent,
  TimeFieldComponent,
  UserSearchFieldComponent,
  RouterModule,
  RouterLink
], encapsulation: 2 });
var EventManageComponent = _EventManageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventManageComponent, [{
    type: Component,
    args: [{ selector: "app-event-manage", template: `
        @if (!loading()) {
            <div class="bg-base-100 absolute inset-0 overflow-auto">
                <header
                    class="bg-base-200 sticky top-0 z-10 mx-auto my-2 flex w-full max-w-[640px] items-center justify-between rounded-sm border-none px-4 py-2"
                >
                    <h2 class="text-xl font-medium">
                        {{
                            (form.value.id
                                ? 'APP.CONCIERGE.EVENTS_EDIT'
                                : 'APP.CONCIERGE.EVENTS_NEW'
                            ) | translate
                        }}
                    </h2>
                    @if (!loading()) {
                        <a
                            icon
                            matRipple
                            [routerLink]="['/entertainment', 'events']"
                        >
                            <icon>close</icon>
                        </a>
                    }
                </header>
                <form
                    class="mx-auto my-2 flex w-160 max-w-full flex-col px-4 pb-16"
                    [formGroup]="form"
                >
                    <section class="flex flex-col space-y-2">
                        <label for="title"
                            >{{ 'FORM.TITLE' | translate }}<span>*</span></label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                name="title"
                                formControlName="title"
                                placeholder="e.g. Team Meeting"
                            />
                            <mat-error>
                                {{ 'FORM.TITLE_ERROR' | translate }}
                            </mat-error>
                        </mat-form-field>
                        <label for="host"
                            >{{ 'FORM.HOST' | translate }}<span>*</span></label
                        >
                        <div class="pb-4">
                            <a-user-search-field
                                name="host"
                                formControlName="organiser"
                            ></a-user-search-field>
                        </div>
                        <label for="tags">{{
                            'COMMON.TAGS' | translate
                        }}</label>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript"
                        >
                            <mat-chip-grid #chipList aria-label="Event Tags">
                                @for (tag of tag_list; track tag) {
                                    <mat-chip-row
                                        [removable]="true"
                                        (removed)="removeTag(tag)"
                                    >
                                        {{ tag }}
                                        <icon matChipRemove>close</icon>
                                    </mat-chip-row>
                                }
                                <input
                                    placeholder="Add new tags relevant to this event..."
                                    [matChipInputFor]="chipList"
                                    [matChipInputSeparatorKeyCodes]="separators"
                                    [matChipInputAddOnBlur]="true"
                                    (matChipInputTokenEnd)="addTag($event)"
                                />
                            </mat-chip-grid>
                        </mat-form-field>
                        <div class="flex items-center space-x-2 py-4">
                            <settings-toggle
                                class="flex-1"
                                [name]="
                                    'CALENDAR_EVENT.GROUP_FEATURED' | translate
                                "
                                formControlName="featured"
                            >
                            </settings-toggle>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript"
                            >
                                <mat-select formControlName="view_access">
                                    <mat-option value="PRIVATE">{{
                                        'APP.CONCIERGE.EVENTS_DRAFT' | translate
                                    }}</mat-option>
                                    <mat-option value="OPEN">{{
                                        'APP.CONCIERGE.EVENTS_PUBLISH'
                                            | translate
                                    }}</mat-option>
                                    <mat-option value="PUBLIC">{{
                                        'APP.CONCIERGE.EVENTS_PUBLISH_PUBLIC'
                                            | translate
                                    }}</mat-option>
                                </mat-select>
                            </mat-form-field>
                        </div>
                        <!-- END BASIC DETAILS -->
                        <div class="bg-base-200 h-px w-full"></div>
                        <h3 class="py-4 text-2xl font-medium">
                            {{ 'APP.CONCIERGE.EVENTS_DATE_TIME' | translate }}
                        </h3>
                        <div class="flex flex-wrap items-center sm:space-x-2">
                            <div class="relative min-w-[256px] flex-1">
                                <label for="date">
                                    {{ 'FORM.DATE' | translate }}<span>*</span>
                                </label>
                                <a-date-field
                                    name="date"
                                    formControlName="date"
                                    [to]="end_date"
                                >
                                    {{ 'FORM.DATE_ERROR' | translate }}
                                </a-date-field>
                            </div>
                            <div class="relative min-w-[256px] flex-1">
                                <label for="date">
                                    {{ 'FORM.DATE_END' | translate }}
                                    <span>*</span>
                                </label>
                                <a-date-field
                                    name="date"
                                    formControlName="date_end"
                                    [from]="start_date"
                                    [to]="end_date"
                                >
                                    {{ 'FORM.DATE_ERROR' | translate }}
                                </a-date-field>
                            </div>
                        </div>
                        @if (!form.value.all_day) {
                            <div class="flex items-center space-x-2">
                                <div class="w-1/3 flex-1">
                                    <label for="start-time">
                                        {{ 'FORM.TIME_START' | translate }}
                                        <span>*</span>
                                    </label>
                                    <a-time-field
                                        name="start-time"
                                        [ngModel]="form.getRawValue().date"
                                        (ngModelChange)="
                                            form.patchValue({
                                                date: $event,
                                            })
                                        "
                                        [disabled]="form.controls.date.disabled"
                                        [ngModelOptions]="{
                                            standalone: true,
                                        }"
                                        [use_24hr]="use_24hr"
                                    ></a-time-field>
                                </div>
                                <div class="w-1/3 flex-1">
                                    <label for="end-time">
                                        {{ 'FORM.TIME_END' | translate }}
                                        <span>*</span>
                                    </label>
                                    <a-time-field
                                        name="end-time"
                                        [ngModel]="
                                            form.value.date_end ||
                                            form.value.date +
                                                form.value.duration * 60 * 1000
                                        "
                                        (ngModelChange)="
                                            form.patchValue({
                                                date_end: $event,
                                            })
                                        "
                                        [ngModelOptions]="{
                                            standalone: true,
                                        }"
                                        [from]="
                                            form?.getRawValue()?.date +
                                            30 * 60 * 1000
                                        "
                                        [use_24hr]="use_24hr"
                                        [extra_info_fn]="duration_info"
                                    ></a-time-field>
                                </div>
                            </div>
                        }
                        <div class="flex flex-col">
                            <label for="display-name">
                                {{ 'COMMON.TIMEZONE' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <icon matPrefix class="text-2xl"> search </icon>
                                <input
                                    matInput
                                    formControlName="timezone"
                                    [placeholder]="
                                        'COMMON.TIMEZONE' | translate
                                    "
                                    [matAutocomplete]="auto"
                                />
                            </mat-form-field>
                            <mat-autocomplete #auto="matAutocomplete">
                                @for (tz of filtered_timezones; track tz) {
                                    <mat-option [value]="tz">
                                        {{ tz }}
                                    </mat-option>
                                }
                                @if (!timezones.length) {
                                    <mat-option [disabled]="true">
                                        {{
                                            'COMMON.TIMEZONE_EMPTY' | translate
                                        }}
                                    </mat-option>
                                }
                            </mat-autocomplete>
                        </div>
                        <!-- END DATE TIME -->
                        <div class="bg-base-200 h-px w-full"></div>
                        <h3 class="py-4 text-2xl font-medium">
                            {{ 'COMMON.LOCATION' | translate }}
                        </h3>
                        <div class="flex items-center space-x-2 pb-2">
                            <button
                                btn
                                matRipple
                                class="flex-1"
                                [class.inverse]="false"
                                [class.inverse]="
                                    form.value.attendance_type !== 'ONSITE'
                                "
                                (click)="
                                    form.patchValue({
                                        attendance_type: 'ONSITE',
                                    })
                                "
                            >
                                <icon class="text-2xl">domain</icon>
                                <div class="mx-2">
                                    {{
                                        'APP.CONCIERGE.EVENTS_LOCATION_ONSITE'
                                            | translate
                                    }}
                                </div>
                            </button>
                            <button
                                btn
                                matRipple
                                class="flex-1"
                                [class.inverse]="
                                    form.value.attendance_type !== 'ONLINE'
                                "
                                (click)="
                                    form.patchValue({
                                        attendance_type: 'ONLINE',
                                    })
                                "
                            >
                                <icon class="text-2xl">laptop_mac</icon>
                                <div class="mx-2">
                                    {{
                                        'APP.CONCIERGE.EVENTS_LOCATION_ONLINE'
                                            | translate
                                    }}
                                </div>
                            </button>
                            <button
                                btn
                                matRipple
                                class="flex-1"
                                [class.inverse]="
                                    form.value.attendance_type !== 'ANY'
                                "
                                (click)="
                                    form.patchValue({
                                        attendance_type: 'ANY',
                                    })
                                "
                            >
                                <icon class="text-2xl">add</icon>
                                <div class="mx-2">
                                    {{
                                        'APP.CONCIERGE.EVENTS_LOCATION_BOTH'
                                            | translate
                                    }}
                                </div>
                            </button>
                        </div>
                        @if (form.value.attendance_type !== 'ONLINE') {
                            <label for="location">
                                {{ 'RESOURCE.BUILDING' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select
                                    [ngModel]="building_zone"
                                    [ngModelOptions]="{ standalone: true }"
                                    (ngModelChange)="setBuilding($event)"
                                    [placeholder]="
                                        'COMMON.BUILDING_SELECT' | translate
                                    "
                                >
                                    @for (
                                        building of building_list | async;
                                        track building
                                    ) {
                                        <mat-option [value]="building">
                                            {{
                                                building.display_name ||
                                                    building.name
                                            }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                            <div class="flex space-x-2">
                                <div class="flex flex-2 flex-col">
                                    <label for="level">{{
                                        'RESOURCE.LEVEL' | translate
                                    }}</label>
                                    <mat-form-field appearance="outline">
                                        <mat-select
                                            [ngModel]="level_zone"
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                            (ngModelChange)="setLevel($event)"
                                            [placeholder]="
                                                'COMMON.LEVEL_SELECT'
                                                    | translate
                                            "
                                        >
                                            @for (
                                                level of active_levels | async;
                                                track level
                                            ) {
                                                <mat-option [value]="level">
                                                    {{
                                                        level.display_name ||
                                                            level.name
                                                    }}
                                                </mat-option>
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                                <div class="flex flex-3 flex-col">
                                    <label for="level">{{
                                        'RESOURCE.ROOM' | translate
                                    }}</label>
                                    <mat-form-field appearance="outline">
                                        <mat-select
                                            [(ngModel)]="resource"
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                            [disabled]="
                                                (available_spaces | async)
                                                    ?.length === 0
                                            "
                                            [placeholder]="
                                                'COMMON.ROOM_SELECT' | translate
                                            "
                                        >
                                            <mat-option
                                                ><i>{{
                                                    'COMMON.NONE' | translate
                                                }}</i></mat-option
                                            >
                                            @for (
                                                room of available_spaces
                                                    | async;
                                                track room
                                            ) {
                                                <mat-option
                                                    [value]="room.email"
                                                >
                                                    {{
                                                        room.display_name ||
                                                            room.name
                                                    }}
                                                </mat-option>
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                            </div>
                        }
                        <!-- END LOCATION -->
                        <div class="bg-base-200 h-px w-full"></div>
                        <h3 class="py-4 text-2xl font-medium">
                            {{ 'APP.CONCIERGE.EVENTS_INFO' | translate }}
                        </h3>
                        <ng-container>
                            <label for="description">
                                {{ 'COMMON.DESCRIPTION' | translate }}
                            </label>
                            <div class="mb-16">
                                <rich-text-input
                                    formControlName="body"
                                ></rich-text-input>
                            </div>
                            <label for="images">
                                {{ 'COMMON.IMAGES' | translate }}
                            </label>
                            <image-list-field
                                formControlName="images"
                            ></image-list-field>
                        </ng-container>
                    </section>
                    @if (!loading()) {
                        <footer
                            class="bg-base-200 fixed bottom-0 left-1/2 z-10 mx-auto my-2 flex w-full max-w-[640px] -translate-x-1/2 items-center justify-end rounded-sm border-none px-4 py-2"
                        >
                            <button btn matRipple class="w-32" (click)="save()">
                                {{ 'COMMON.SAVE' | translate }}
                            </button>
                        </footer>
                    }
                </form>
            </div>
        } @else {
            <div
                class="bg-base-100 absolute inset-0 flex flex-col items-center justify-center space-y-4"
            >
                <mat-spinner diameter="48"></mat-spinner>
                <p>{{ 'APP.CONCIERGE.EVENTS_SAVING' | translate }}</p>
            </div>
        }
    `, imports: [
      CommonModule,
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatProgressSpinnerModule,
      ImageListFieldComponent,
      RichTextInputComponent,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      MatChipsModule,
      MatAutocompleteModule,
      FormsModule,
      ReactiveFormsModule,
      SettingsToggleComponent,
      DateFieldComponent,
      TimeFieldComponent,
      UserSearchFieldComponent,
      RouterModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventManageComponent, { className: "EventManageComponent", filePath: "apps/concierge/src/app/events/event-manage.component.ts", lineNumber: 512 });
})();

// apps/concierge/src/app/events/event-view.component.ts
function EventViewComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "group-event-details-modal", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("event", ctx_r0.event());
  }
}
function EventViewComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "icon", 5);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Event not found.");
    \u0275\u0275elementEnd()();
  }
}
function EventViewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EventViewComponent_Conditional_1_Conditional_0_Template, 2, 1, "div", 2)(1, EventViewComponent_Conditional_1_Conditional_1_Template, 4, 0, "div", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.event() ? 0 : 1);
  }
}
function EventViewComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "mat-spinner", 6);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading event details...");
    \u0275\u0275elementEnd()();
  }
}
var _EventViewComponent = class _EventViewComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._route = inject(ActivatedRoute);
    this._settings = inject(SettingsService);
    this.loading = signal(false);
    this.event = signal(null);
  }
  async ngOnInit() {
    await firstTruthyValueFrom(this._org.initialised);
    this.subscription("route.params", this._route.paramMap.subscribe((params) => {
      if (params.has("id"))
        this._loadEvent(params.get("id"));
    }));
  }
  async _loadEvent(id) {
    const calendar = this._settings.get("app.group_events_calendar") || "";
    this.loading.set(true);
    const space_pipe = new SpacePipe();
    const booking = await lastValueFrom(showEvent(id, { calendar })).catch();
    if (!booking)
      return this.loading.set(false);
    const space = await space_pipe.transform(calendar);
    const metadata = await lastValueFrom(showEventMetadata(id, space?.id || booking.system?.id, {
      ical_uid: booking.ical_uid
    })).catch(() => ({}));
    this.event.set(new CalendarEvent(__spreadProps(__spreadValues({}, booking), {
      extension_data: __spreadValues(__spreadValues({}, booking.extension_data), metadata)
    })));
    this.loading.set(false);
  }
};
_EventViewComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275EventViewComponent_BaseFactory;
  return function EventViewComponent_Factory(__ngFactoryType__) {
    return (\u0275EventViewComponent_BaseFactory || (\u0275EventViewComponent_BaseFactory = \u0275\u0275getInheritedFactory(_EventViewComponent)))(__ngFactoryType__ || _EventViewComponent);
  };
})();
_EventViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventViewComponent, selectors: [["group-event-view"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 1, consts: [[1, "bg-base-200", "absolute", "inset-0", "flex", "flex-col", "items-center", "p-4"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-4"], [1, "border-base-300", "bg-base-100", "overflow-hidden", "rounded-sm", "border"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "opacity-30"], [3, "event"], [1, "text-6xl"], ["diameter", "32"]], template: function EventViewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, EventViewComponent_Conditional_1_Template, 2, 1)(2, EventViewComponent_Conditional_2_Template, 4, 0, "div", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading() ? 1 : 2);
  }
}, dependencies: [
  MatProgressSpinnerModule,
  MatProgressSpinner,
  IconComponent,
  GroupEventDetailsModalComponent
], encapsulation: 2 });
var EventViewComponent = _EventViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventViewComponent, [{
    type: Component,
    args: [{ selector: "group-event-view", template: `
        <div
            class="bg-base-200 absolute inset-0 flex flex-col items-center p-4"
        >
            @if (!loading()) {
                @if (event()) {
                    <div
                        class="border-base-300 bg-base-100 overflow-hidden rounded-sm border"
                    >
                        <group-event-details-modal [event]="event()" />
                    </div>
                } @else {
                    <div
                        class="flex h-full w-full flex-col items-center justify-center space-y-4 opacity-30"
                    >
                        <icon class="text-6xl"></icon>
                        <p>Event not found.</p>
                    </div>
                }
            } @else {
                <div
                    class="flex h-full w-full flex-col items-center justify-center space-y-4"
                >
                    <mat-spinner diameter="32" />
                    <p>Loading event details...</p>
                </div>
            }
        </div>
    `, imports: [
      MatProgressSpinnerModule,
      IconComponent,
      GroupEventDetailsModalComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventViewComponent, { className: "EventViewComponent", filePath: "apps/concierge/src/app/events/event-view.component.ts", lineNumber: 58 });
})();

// apps/concierge/src/app/events/event-month-view.component.ts
var _c03 = () => [];
var _c12 = (a0) => ({ count: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function EventMonthViewComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const weekday_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, weekday_r1, "EEEE"), " ");
  }
}
function EventMonthViewComponent_For_5_For_5_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "group-event-card", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("event", event_r3);
  }
}
function EventMonthViewComponent_For_5_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function EventMonthViewComponent_For_5_For_5_Template_button_click_0_listener() {
      const event_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.viewEvent(event_r3));
    });
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementStart(2, "div", 12);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 13);
    \u0275\u0275template(6, EventMonthViewComponent_For_5_For_5_ng_template_6_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r3 = ctx.$implicit;
    const event_card_r5 = \u0275\u0275reference(7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(4, 4, event_r3.date, "shortTime"), " \u2014 ", event_r3.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("content", event_card_r5)("hover", true);
  }
}
function EventMonthViewComponent_For_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r6 = \u0275\u0275nextContext().$implicit;
    const menu_r7 = \u0275\u0275reference(11);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("matMenuTriggerFor", menu_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 4, "APP.CONCIERGE.EVENTS_MORE_COUNT", \u0275\u0275pureFunction1(8, _c12, (\u0275\u0275pipeBind1(2, 2, ctx_r3.event_day_map)[ctx_r3.dateString(day_r6.id)] || \u0275\u0275pureFunction0(7, _c03)).length - 3)), " ");
  }
}
function EventMonthViewComponent_For_5_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function EventMonthViewComponent_For_5_For_13_Template_button_click_0_listener() {
      const event_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.viewEvent(event_r9));
    });
    \u0275\u0275elementStart(1, "div", 17)(2, "div", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", event_r9.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 2, event_r9.date, "shortTime"), " ");
  }
}
function EventMonthViewComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, EventMonthViewComponent_For_5_For_5_Template, 8, 7, "button", 7, _forTrack0);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275pipe(7, "slice");
    \u0275\u0275conditionalCreate(8, EventMonthViewComponent_For_5_Conditional_8_Template, 4, 10, "button", 8);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementStart(10, "mat-menu", null, 0);
    \u0275\u0275repeaterCreate(12, EventMonthViewComponent_For_5_For_13_Template, 7, 5, "button", 9, _forTrack0);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275pipe(15, "slice");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-30", !day_r6.is_month)("bg-secondary", day_r6.is_today)("text-secondary-content", day_r6.is_today);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 8, day_r6.id, "d"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(7, 13, \u0275\u0275pipeBind1(6, 11, ctx_r3.event_day_map)[ctx_r3.dateString(day_r6.id)] || \u0275\u0275pureFunction0(24, _c03), 0, 3));
    \u0275\u0275advance(4);
    \u0275\u0275conditional((\u0275\u0275pipeBind1(9, 17, ctx_r3.event_day_map)[ctx_r3.dateString(day_r6.id)] || \u0275\u0275pureFunction0(25, _c03)).length > 3 ? 8 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(\u0275\u0275pipeBind2(15, 21, \u0275\u0275pipeBind1(14, 19, ctx_r3.event_day_map)[ctx_r3.dateString(day_r6.id)] || \u0275\u0275pureFunction0(26, _c03), 3));
  }
}
var _EventMonthViewComponent = class _EventMonthViewComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(EventStateService);
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this._router = inject(Router);
    this.month = startOfDay(Date.now()).valueOf();
    this.weekdays = [];
    this.month_days = [];
    this.event_list = this._state.event_list;
    this.event_day_map = this.event_list.pipe(map((list) => {
      const map2 = {};
      for (const event of list) {
        const date = format(event.date, "yyyy-MM-dd");
        if (!map2[date])
          map2[date] = [];
        const start = new Date(event.date);
        map2[date].push(__spreadProps(__spreadValues({}, event), {
          offset: (start.getHours() * 60 + start.getMinutes()) / (24 * 60),
          length: event.duration / (24 * 60)
        }));
      }
      return map2;
    }), startWith({}), shareReplay(1));
    this.viewEvent = (event) => this._state.viewEvent(event);
  }
  dateString(date) {
    if (!date)
      return "";
    return format(date, "yyyy-MM-dd");
  }
  get offset_weekday() {
    return this._settings.get("app.week_start") || 0;
  }
  ngOnInit() {
    this.subscription("date", this._state.options.subscribe(({ date }) => {
      this.month = date;
      this._setMonthDays();
      this._setWeekdays();
    }));
    this._setMonthDays();
    this._setWeekdays();
  }
  _setMonthDays() {
    const start = startOfWeek(startOfMonth(this.month), {
      weekStartsOn: this.offset_weekday
    });
    this.month_days = Array.from(Array(7 * 6).keys()).map((i) => {
      const date = addDays(start, i).valueOf();
      return {
        id: date,
        is_today: isSameDay(date, Date.now()),
        is_month: isSameMonth(date, this.month)
      };
    });
  }
  _setWeekdays() {
    const start = startOfWeek(Date.now(), {
      weekStartsOn: this.offset_weekday
    });
    this.weekdays = Array.from(Array(7).keys()).map((i) => addDays(start, i));
  }
};
_EventMonthViewComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275EventMonthViewComponent_BaseFactory;
  return function EventMonthViewComponent_Factory(__ngFactoryType__) {
    return (\u0275EventMonthViewComponent_BaseFactory || (\u0275EventMonthViewComponent_BaseFactory = \u0275\u0275getInheritedFactory(_EventMonthViewComponent)))(__ngFactoryType__ || _EventMonthViewComponent);
  };
})();
_EventMonthViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventMonthViewComponent, selectors: [["event-month-view"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 0, consts: [["menu", "matMenu"], ["event_card", ""], [1, "absolute", "inset-0", "overflow-auto"], [1, "border-base-200", "m-2", "grid", "h-224", "min-h-full", "w-7xl", "min-w-full", "grid-cols-7", "border-b"], ["weekday", "", 1, "relative", "flex", "h-12", "items-center", "justify-center", "p-2", "text-sm", "opacity-60"], ["monthday", "", 1, "border-base-200", "relative", "flex", "flex-col", "space-y-1", "border"], [1, "mt-1", "ml-1", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full"], ["matRipple", "", 1, "border-base-200", "bg-base-100", "hover:border-info", "relative", "mx-1", "h-7", "w-[calc(100%-0.5rem)]", "overflow-hidden", "rounded-sm", "border", "py-1", "pr-2", "pl-3", "shadow-sm"], ["matRipple", "", "matTooltip", "More events", 1, "relative", "mx-1", "h-7", "w-[calc(100%-0.5rem)]", "overflow-hidden", "rounded-sm", "py-1", "pr-2", "pl-3", "text-sm", "underline", 3, "matMenuTriggerFor"], ["mat-menu-item", ""], ["matRipple", "", 1, "border-base-200", "bg-base-100", "hover:border-info", "relative", "mx-1", "h-7", "w-[calc(100%-0.5rem)]", "overflow-hidden", "rounded-sm", "border", "py-1", "pr-2", "pl-3", "shadow-sm", 3, "click"], [1, "bg-info", "absolute", "inset-y-0", "left-0", "w-1.5"], [1, "h-full", "truncate", "text-left", "text-sm", "opacity-60"], ["customTooltip", "", "xPosition", "center", "yPosition", "bottom", 1, "absolute", "inset-0", 3, "content", "hover"], [1, "pointer-events-none", "p-2"], [3, "event"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-4"], [1, "flex-1"], [1, "bg-base-200", "text-base-content", "rounded-sm", "px-2", "py-1", "text-xs", "opacity-60"]], template: function EventMonthViewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275repeaterCreate(2, EventMonthViewComponent_For_3_Template, 3, 4, "div", 4, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275repeaterCreate(4, EventMonthViewComponent_For_5_Template, 16, 27, "div", 5, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.weekdays);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.month_days);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  SlicePipe,
  DatePipe,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  GroupEventCardComponent,
  CustomTooltipComponent,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  MatTooltipModule,
  MatTooltip
], styles: ["\n\n.grid[_ngcontent-%COMP%] {\n  grid-template-rows: 3rem repeat(6, minmax(0, 1fr));\n}\n/*# sourceMappingURL=event-month-view.component.css.map */"] });
var EventMonthViewComponent = _EventMonthViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventMonthViewComponent, [{
    type: Component,
    args: [{ selector: "event-month-view", template: `
        <div class="absolute inset-0 overflow-auto">
            <div
                class="border-base-200 m-2 grid h-224 min-h-full w-7xl min-w-full grid-cols-7 border-b"
            >
                @for (weekday of weekdays; track $index) {
                    <div
                        weekday
                        class="relative flex h-12 items-center justify-center p-2 text-sm opacity-60"
                    >
                        {{ weekday | date: 'EEEE' }}
                    </div>
                }
                @for (day of month_days; track day.id) {
                    <div
                        monthday
                        class="border-base-200 relative flex flex-col space-y-1 border"
                    >
                        <div
                            class="mt-1 ml-1 flex h-8 w-8 items-center justify-center rounded-full"
                            [class.opacity-30]="!day.is_month"
                            [class.bg-secondary]="day.is_today"
                            [class.text-secondary-content]="day.is_today"
                        >
                            {{ day.id | date: 'd' }}
                        </div>
                        @for (
                            event of (event_day_map | async)[
                                dateString(day.id)
                            ] || [] | slice: 0 : 3;
                            track $any(event).id
                        ) {
                            <button
                                matRipple
                                (click)="viewEvent(event)"
                                class="border-base-200 bg-base-100 hover:border-info relative mx-1 h-7 w-[calc(100%-0.5rem)] overflow-hidden rounded-sm border py-1 pr-2 pl-3 shadow-sm"
                            >
                                <div
                                    class="bg-info absolute inset-y-0 left-0 w-1.5"
                                ></div>
                                <div
                                    class="h-full truncate text-left text-sm opacity-60"
                                >
                                    {{ $any(event).date | date: 'shortTime' }}
                                    &mdash;
                                    {{ $any(event).title }}
                                </div>
                                <div
                                    class="absolute inset-0"
                                    customTooltip
                                    [content]="event_card"
                                    xPosition="center"
                                    yPosition="bottom"
                                    [hover]="true"
                                ></div>
                                <ng-template #event_card>
                                    <div class="pointer-events-none p-2">
                                        <group-event-card
                                            [event]="$any(event)"
                                        ></group-event-card>
                                    </div>
                                </ng-template>
                            </button>
                        }
                        @if (
                            ((event_day_map | async)[dateString(day.id)] || [])
                                .length > 3
                        ) {
                            <button
                                matRipple
                                matTooltip="More events"
                                class="relative mx-1 h-7 w-[calc(100%-0.5rem)] overflow-hidden rounded-sm py-1 pr-2 pl-3 text-sm underline"
                                [matMenuTriggerFor]="menu"
                            >
                                {{
                                    'APP.CONCIERGE.EVENTS_MORE_COUNT'
                                        | translate
                                            : {
                                                  count:
                                                      (
                                                          (event_day_map
                                                              | async)[
                                                              dateString(day.id)
                                                          ] || []
                                                      ).length - 3,
                                              }
                                }}
                            </button>
                        }
                        <mat-menu #menu="matMenu">
                            @for (
                                event of (event_day_map | async)[
                                    dateString(day.id)
                                ] || [] | slice: 3;
                                track $any(event).id
                            ) {
                                <button
                                    mat-menu-item
                                    (click)="viewEvent(event)"
                                >
                                    <div class="flex items-center space-x-4">
                                        <div class="flex-1">
                                            {{ $any(event).title }}
                                        </div>
                                        <div
                                            class="bg-base-200 text-base-content rounded-sm px-2 py-1 text-xs opacity-60"
                                        >
                                            {{
                                                $any(event).date
                                                    | date: 'shortTime'
                                            }}
                                        </div>
                                    </div>
                                </button>
                            }
                        </mat-menu>
                    </div>
                }
            </div>
        </div>
    `, imports: [
      CommonModule,
      MatMenuModule,
      GroupEventCardComponent,
      CustomTooltipComponent,
      TranslatePipe,
      MatRippleModule,
      MatTooltipModule
    ], styles: ["/* angular:styles/component:css;621b776a5c5c572a196a31eafa7dd26229f2e236f44d1e7e1ede4ba9fb207c2d;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/events/event-month-view.component.ts */\n.grid {\n  grid-template-rows: 3rem repeat(6, minmax(0, 1fr));\n}\n/*# sourceMappingURL=event-month-view.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventMonthViewComponent, { className: "EventMonthViewComponent", filePath: "apps/concierge/src/app/events/event-month-view.component.ts", lineNumber: 163 });
})();

// apps/concierge/src/app/events/event-week-view.component.ts
var _c04 = () => [];
var _forTrack02 = ($index, $item) => $item + "" + $index;
var _forTrack1 = ($index, $item) => $item.id;
function EventWeekViewComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const hour_r1 = ctx.$implicit;
    const \u0275$index_13_r2 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", hour_r1, " ", \u0275$index_13_r2 >= 12 ? "PM" : "AM", " ");
  }
}
function EventWeekViewComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const date_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, date_r3, "EEEE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 5, date_r3, "d"));
  }
}
function EventWeekViewComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 10);
  }
}
function EventWeekViewComponent_For_16_For_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "group-event-card", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("event", event_r5);
  }
}
function EventWeekViewComponent_For_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function EventWeekViewComponent_For_16_For_2_Template_button_click_0_listener() {
      const event_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.viewEvent(event_r5));
    });
    \u0275\u0275element(1, "div", 18);
    \u0275\u0275elementStart(2, "div", 19);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 20);
    \u0275\u0275template(6, EventWeekViewComponent_For_16_For_2_ng_template_6_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r5 = ctx.$implicit;
    const event_card_r7 = \u0275\u0275reference(7);
    \u0275\u0275styleProp("top", event_r5.offset * 100 + "%")("height", event_r5.length * 100 + "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(4, 8, event_r5.date, "shortTime"), " \u2014 ", event_r5.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("content", event_card_r7)("hover", true);
  }
}
function EventWeekViewComponent_For_16_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("top", ctx_r5.now_offset * 100 + "%");
  }
}
function EventWeekViewComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275repeaterCreate(1, EventWeekViewComponent_For_16_For_2_Template, 8, 11, "button", 15, _forTrack1);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275conditionalCreate(4, EventWeekViewComponent_For_16_Conditional_4_Template, 2, 2, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r8 = ctx.$implicit;
    const \u0275$index_37_r9 = ctx.$index;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("transform", "translateX(" + \u0275$index_37_r9 * 100 + "%)");
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 3, ctx_r5.event_day_map)[ctx_r5.dateString(date_r8)] || \u0275\u0275pureFunction0(5, _c04));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r5.isCurrentDay(date_r8) ? 4 : -1);
  }
}
var _EventWeekViewComponent = class _EventWeekViewComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(EventStateService);
    this.days = new Array(7).fill(0).map((_, idx) => idx + 1);
    this.hours = new Array(24).fill(0).map((_, idx) => idx % 12 ? idx % 12 : 12);
    this.event_list = this._state.event_list;
    this.event_day_map = this.event_list.pipe(map((list) => {
      const map2 = {};
      for (const event of list) {
        const date = format(event.date, "yyyy-MM-dd");
        if (!map2[date])
          map2[date] = [];
        const start = new Date(event.date);
        map2[date].push(__spreadProps(__spreadValues({}, event), {
          offset: (start.getHours() * 60 + start.getMinutes()) / (24 * 60),
          length: event.duration / (24 * 60)
        }));
      }
      return map2;
    }), startWith({}), shareReplay(1));
    this.viewEvent = (event) => this._state.viewEvent(event);
  }
  dateString(date) {
    if (!date)
      return "";
    return format(date, "yyyy-MM-dd");
  }
  isCurrentDay(date) {
    if (!date)
      return false;
    return format(Date.now(), "yyyy-MM-dd") === format(date, "yyyy-MM-dd");
  }
  get now() {
    return startOfMinute(Date.now()).valueOf();
  }
  get now_offset() {
    const now = new Date(this.now);
    return (now.getHours() * 60 + now.getMinutes()) / (24 * 60);
  }
  ngOnInit() {
    this.subscription("date", this._state.options.subscribe(({ date }) => {
      if (!date)
        return;
      this.days = this.days.map((_, idx) => addDays(date, idx).valueOf());
    }));
  }
};
_EventWeekViewComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275EventWeekViewComponent_BaseFactory;
  return function EventWeekViewComponent_Factory(__ngFactoryType__) {
    return (\u0275EventWeekViewComponent_BaseFactory || (\u0275EventWeekViewComponent_BaseFactory = \u0275\u0275getInheritedFactory(_EventWeekViewComponent)))(__ngFactoryType__ || _EventWeekViewComponent);
  };
})();
_EventWeekViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventWeekViewComponent, selectors: [["event-week-view"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 17, vars: 4, consts: [["event_card", ""], [1, "absolute", "inset-0", "flex", "overflow-auto"], [1, "bg-base-100", "sticky", "left-0", "z-20", "flex", "min-h-full", "w-24", "flex-col", "items-end"], ["header", "", 1, "sticky", "top-0", "z-10", "flex", "h-16", "min-h-16", "justify-end"], [1, "bg-base-100", "h-10", "pt-6"], [1, "px-2", "text-xs", "opacity-30"], [1, "bg-base-100", "relative", "min-h-10", "w-full", "flex-1"], [1, "relative", "z-10", "min-h-full", "min-w-336"], ["header", "", 1, "border-base-200", "bg-base-100", "sticky", "top-0", "z-10", "flex", "h-16", "min-h-16", "border-b"], ["date", "", 1, "border-base-200", "flex", "min-w-48", "flex-1", "flex-col", "items-center", "justify-center", "border-r", "p-4"], [1, "border-base-200", "pointer-events-none", "relative", "flex", "min-h-10", "min-w-336", "flex-1", "border-x", "border-b"], ["date", "", 1, "border-base-200", "pointer-events-none", "absolute", "top-16", "left-0", "h-240", "w-[calc(100%/7)]", "flex-1", "border-r", 3, "transform"], ["hour", "", 1, "absolute", "top-0", "right-1", "-translate-y-1/2", "text-xs", "whitespace-nowrap", "opacity-60"], [1, "text-sm", "opacity-60"], ["date", "", 1, "border-base-200", "pointer-events-none", "absolute", "top-16", "left-0", "h-240", "w-[calc(100%/7)]", "flex-1", "border-r"], ["matRipple", "", 1, "border-base-200", "bg-base-100", "hover:border-info", "pointer-events-auto", "absolute", "inset-x-1", "overflow-hidden", "rounded-sm", "border", "py-1", "pr-2", "pl-3", "shadow-sm", 3, "top", "height"], ["now", "", 1, "border-base-content", "absolute", "inset-x-0", "h-0", "border-y-2", 3, "top"], ["matRipple", "", 1, "border-base-200", "bg-base-100", "hover:border-info", "pointer-events-auto", "absolute", "inset-x-1", "overflow-hidden", "rounded-sm", "border", "py-1", "pr-2", "pl-3", "shadow-sm", 3, "click"], [1, "bg-info", "absolute", "inset-y-0", "left-0", "w-1.5"], [1, "h-full", "text-left", "text-sm", "opacity-60"], ["customTooltip", "", "xPosition", "center", "yPosition", "bottom", 1, "absolute", "inset-0", 3, "content", "hover"], [1, "pointer-events-none", "p-2"], [3, "event"], ["now", "", 1, "border-base-content", "absolute", "inset-x-0", "h-0", "border-y-2"], [1, "bg-base-content", "absolute", "top-0", "left-0", "h-4", "w-4", "-translate-x-1/2", "-translate-y-1/2", "rounded-full"]], template: function EventWeekViewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(7, EventWeekViewComponent_For_8_Template, 3, 2, "div", 6, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 7)(10, "div", 8);
    \u0275\u0275repeaterCreate(11, EventWeekViewComponent_For_12_Template, 7, 8, "div", 9, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(13, EventWeekViewComponent_For_14_Template, 1, 0, "div", 10, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275repeaterCreate(15, EventWeekViewComponent_For_16_Template, 5, 6, "div", 11, _forTrack02);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 1, ctx.now, "zzzz"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.hours);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.days);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.hours);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.days);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DatePipe,
  MatRippleModule,
  MatRipple,
  GroupEventCardComponent,
  CustomTooltipComponent
], encapsulation: 2 });
var EventWeekViewComponent = _EventWeekViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventWeekViewComponent, [{
    type: Component,
    args: [{ selector: "event-week-view", template: `
        <div class="absolute inset-0 flex overflow-auto">
            <div
                class="bg-base-100 sticky left-0 z-20 flex min-h-full w-24 flex-col items-end"
            >
                <div
                    header
                    class="sticky top-0 z-10 flex h-16 min-h-16 justify-end"
                >
                    <div class="bg-base-100 h-10 pt-6">
                        <div class="px-2 text-xs opacity-30">
                            {{ now | date: 'zzzz' }}
                        </div>
                    </div>
                </div>
                @for (hour of hours; track i; let i = $index) {
                    <div class="bg-base-100 relative min-h-10 w-full flex-1">
                        <div
                            hour
                            class="absolute top-0 right-1 -translate-y-1/2 text-xs whitespace-nowrap opacity-60"
                        >
                            {{ hour }} {{ i >= 12 ? 'PM' : 'AM' }}
                        </div>
                    </div>
                }
            </div>
            <div class="relative z-10 min-h-full min-w-336">
                <div
                    header
                    class="border-base-200 bg-base-100 sticky top-0 z-10 flex h-16 min-h-16 border-b"
                >
                    @for (date of days; track date + '' + $index) {
                        <div
                            date
                            class="border-base-200 flex min-w-48 flex-1 flex-col items-center justify-center border-r p-4"
                        >
                            <div class="text-sm opacity-60">
                                {{ date | date: 'EEEE' }}
                            </div>
                            <div>{{ date | date: 'd' }}</div>
                        </div>
                    }
                </div>
                @for (hour of hours; track i; let i = $index) {
                    <div
                        class="border-base-200 pointer-events-none relative flex min-h-10 min-w-336 flex-1 border-x border-b"
                    ></div>
                }
                @for (date of days; track date + '' + i; let i = $index) {
                    <div
                        date
                        class="border-base-200 pointer-events-none absolute top-16 left-0 h-240 w-[calc(100%/7)] flex-1 border-r"
                        [style.transform]="'translateX(' + i * 100 + '%)'"
                    >
                        @for (
                            event of (event_day_map | async)[
                                dateString(date)
                            ] || [];
                            track event.id
                        ) {
                            <button
                                matRipple
                                class="border-base-200 bg-base-100 hover:border-info pointer-events-auto absolute inset-x-1 overflow-hidden rounded-sm border py-1 pr-2 pl-3 shadow-sm"
                                [style.top]="event.offset * 100 + '%'"
                                [style.height]="event.length * 100 + '%'"
                                (click)="viewEvent(event)"
                            >
                                <div
                                    class="bg-info absolute inset-y-0 left-0 w-1.5"
                                ></div>
                                <div
                                    class="h-full text-left text-sm opacity-60"
                                >
                                    {{ event.date | date: 'shortTime' }} &mdash;
                                    {{ event.title }}
                                </div>
                                <div
                                    class="absolute inset-0"
                                    customTooltip
                                    [content]="event_card"
                                    xPosition="center"
                                    yPosition="bottom"
                                    [hover]="true"
                                ></div>
                                <ng-template #event_card>
                                    <div class="pointer-events-none p-2">
                                        <group-event-card
                                            [event]="event"
                                        ></group-event-card>
                                    </div>
                                </ng-template>
                            </button>
                        }
                        @if (isCurrentDay(date)) {
                            <div
                                now
                                class="border-base-content absolute inset-x-0 h-0 border-y-2"
                                [style.top]="now_offset * 100 + '%'"
                            >
                                <div
                                    class="bg-base-content absolute top-0 left-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full"
                                ></div>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    `, imports: [
      CommonModule,
      MatRippleModule,
      GroupEventCardComponent,
      CustomTooltipComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventWeekViewComponent, { className: "EventWeekViewComponent", filePath: "apps/concierge/src/app/events/event-week-view.component.ts", lineNumber: 132 });
})();

// apps/concierge/src/app/events/event-calendar.component.ts
function EventCalendarComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, \u0275\u0275pipeBind1(2, 1, ctx_r0.period) === "week" ? "COMMON.WEEK_THIS" : "COMMON.MONTH_THIS"));
  }
}
function EventCalendarComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-week-view");
  }
}
function EventCalendarComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-month-view");
  }
}
var _EventCalendarComponent = class _EventCalendarComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._state = inject(EventStateService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this.period = this._state.options.pipe(map((_) => _.period));
    this.options = this._state.options;
    this.is_today = this.options.pipe(map((_) => _.date <= Date.now() && _.end > Date.now()));
    this.event_list = this._state.event_list;
    this.event_day_map = this.event_list.pipe(map((list) => {
      const map2 = {};
      for (const event of list) {
        const date = format(event.date, "yyyy-MM-dd");
        if (!map2[date])
          map2[date] = [];
        map2[date].push(event);
      }
      return map2;
    }), shareReplay(1));
  }
  get time_format() {
    return this._settings.time_format;
  }
  setPeriod(period) {
    this._state.setOptions({ period });
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { period },
      queryParamsHandling: "merge"
    });
  }
  async nextPeriod() {
    const { date, period } = await nextValueFrom(this.options);
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: {
        range: period === "week" ? addWeeks(date, 1).valueOf() : addMonths(date, 1).valueOf()
      },
      queryParamsHandling: "merge"
    });
  }
  async previousPeriod() {
    const { date, period } = await nextValueFrom(this.options);
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: {
        range: period === "week" ? addWeeks(date, -1).valueOf() : addMonths(date, -1).valueOf()
      },
      queryParamsHandling: "merge"
    });
  }
};
_EventCalendarComponent.\u0275fac = function EventCalendarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EventCalendarComponent)();
};
_EventCalendarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventCalendarComponent, selectors: [["event-calendar"]], decls: 29, vars: 26, consts: [[1, "border-base-200", "flex", "w-full", "items-center", "border-y"], [1, "flex-1", "px-2", "py-4"], [1, "text-info", "text-xs"], [1, "flex", "flex-2", "items-center", "justify-center", "space-x-2"], [1, "pl-4", "font-medium"], ["icon", "", "matRipple", "", 3, "click"], [1, "flex", "flex-1", "items-center", "justify-end", "space-x-2", "py-2"], ["btn", "", "matRipple", "", 1, "rounded-3xl", 3, "click"], [1, "h-4", "w-full"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto"]], template: function EventCalendarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275conditionalCreate(2, EventCalendarComponent_Conditional_2_Template, 4, 5, "span", 2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "div", 4);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 5);
    \u0275\u0275listener("click", function EventCalendarComponent_Template_button_click_9_listener() {
      return ctx.previousPeriod();
    });
    \u0275\u0275elementStart(10, "icon");
    \u0275\u0275text(11, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 5);
    \u0275\u0275listener("click", function EventCalendarComponent_Template_button_click_12_listener() {
      return ctx.nextPeriod();
    });
    \u0275\u0275elementStart(13, "icon");
    \u0275\u0275text(14, "chevron_right");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 6)(16, "button", 7);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275listener("click", function EventCalendarComponent_Template_button_click_16_listener() {
      return ctx.setPeriod("week");
    });
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 7);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275listener("click", function EventCalendarComponent_Template_button_click_20_listener() {
      return ctx.setPeriod("month");
    });
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(24, "div", 8);
    \u0275\u0275elementStart(25, "div", 9);
    \u0275\u0275conditionalCreate(26, EventCalendarComponent_Conditional_26_Template, 1, 0, "event-week-view");
    \u0275\u0275pipe(27, "async");
    \u0275\u0275conditionalBranchCreate(28, EventCalendarComponent_Conditional_28_Template, 1, 0, "event-month-view");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(3, 9, ctx.is_today) ? 2 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 13, (tmp_1_0 = \u0275\u0275pipeBind1(7, 11, ctx.options)) == null ? null : tmp_1_0.date, "MMM yyyy"), " ");
    \u0275\u0275advance(10);
    \u0275\u0275classProp("inverse", \u0275\u0275pipeBind1(17, 16, ctx.period) !== "week");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 18, "COMMON.WEEK"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", \u0275\u0275pipeBind1(21, 20, ctx.period) !== "month");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 22, "COMMON.MONTH"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(27, 24, ctx.period) !== "month" ? 26 : 28);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DatePipe,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  EventWeekViewComponent,
  EventMonthViewComponent,
  IconComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=event-calendar.component.css.map */"] });
var EventCalendarComponent = _EventCalendarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventCalendarComponent, [{
    type: Component,
    args: [{ selector: "event-calendar", template: `
        <div class="border-base-200 flex w-full items-center border-y">
            <div class="flex-1 px-2 py-4">
                @if (is_today | async) {
                    <span class="text-info text-xs">{{
                        ((period | async) === 'week'
                            ? 'COMMON.WEEK_THIS'
                            : 'COMMON.MONTH_THIS'
                        ) | translate
                    }}</span>
                }
            </div>
            <div class="flex flex-2 items-center justify-center space-x-2">
                <div class="pl-4 font-medium">
                    {{ (options | async)?.date | date: 'MMM yyyy' }}
                </div>
                <button icon matRipple (click)="previousPeriod()">
                    <icon>chevron_left</icon>
                </button>
                <button icon matRipple (click)="nextPeriod()">
                    <icon>chevron_right</icon>
                </button>
            </div>
            <div class="flex flex-1 items-center justify-end space-x-2 py-2">
                <button
                    btn
                    matRipple
                    class="rounded-3xl"
                    [class.inverse]="(period | async) !== 'week'"
                    (click)="setPeriod('week')"
                >
                    {{ 'COMMON.WEEK' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    class="rounded-3xl"
                    [class.inverse]="(period | async) !== 'month'"
                    (click)="setPeriod('month')"
                >
                    {{ 'COMMON.MONTH' | translate }}
                </button>
            </div>
        </div>
        <div class="h-4 w-full"></div>
        <div class="relative h-1/2 w-full flex-1 overflow-auto">
            @if ((period | async) !== 'month') {
                <event-week-view></event-week-view>
            } @else {
                <event-month-view></event-month-view>
            }
        </div>
    `, imports: [
      CommonModule,
      TranslatePipe,
      MatRippleModule,
      EventWeekViewComponent,
      EventMonthViewComponent,
      IconComponent
    ], styles: ["/* angular:styles/component:css;2c590c9e56511a088a1469fe4b227d8190323c208f95620a03712f1a8f5bae8d;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/events/event-calendar.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=event-calendar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventCalendarComponent, { className: "EventCalendarComponent", filePath: "apps/concierge/src/app/events/event-calendar.component.ts", lineNumber: 87 });
})();

// apps/concierge/src/app/events/event-listing.component.ts
var _c05 = (a0) => ({ key: "date", name: "Event", content: a0 });
var _c13 = (a0, a1) => ({ key: "level", name: a0, content: a1, size: "8rem", sortable: false });
var _c2 = (a0, a1) => ({ key: "room", name: a0, content: a1, size: "12rem", sortable: false });
var _c3 = (a0, a1) => ({ key: "interested", name: a0, content: a1, size: "6rem", sortable: false });
var _c4 = (a0, a1) => ({ key: "attending", name: a0, content: a1, size: "6rem", sortable: false });
var _c5 = (a0, a1) => ({ key: "state", name: a0, content: a1, size: "8.5rem" });
var _c6 = (a0, a1) => ({ key: "permission", name: a0, content: a1, size: "6rem", sortable: false });
var _c7 = (a0) => ({ key: "actions", name: " ", content: a0, size: "4rem", sortable: false });
var _c8 = (a0, a1, a2, a3, a4, a5, a6, a7) => [a0, a1, a2, a3, a4, a5, a6, a7];
var _c9 = (a0) => ["/entertainment", "events", "manage", a0];
function EventListingComponent_ng_template_10_img_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 23);
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().row;
    \u0275\u0275property("source", item_r1.images[0]);
  }
}
function EventListingComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "div", 15);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 16);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 17);
    \u0275\u0275template(9, EventListingComponent_ng_template_10_img_9_Template, 1, 1, "img", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 19)(11, "div", 20);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 21);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 22);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "space");
    \u0275\u0275pipe(20, "async");
    \u0275\u0275pipe(21, "building");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_15_0;
    const item_r1 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 7, item_r1.date, "MMM"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 10, item_r1.date, "d"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", item_r1.images == null ? null : item_r1.images.length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(15, 13, item_r1.date, "EEEE, " + ctx_r1.time_format), " \u2013 ", \u0275\u0275pipeBind2(16, 16, item_r1.date + item_r1.duration * 60 * 1e3, ctx_r1.time_format + " (z)"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (tmp_15_0 = \u0275\u0275pipeBind1(21, 23, (tmp_15_0 = \u0275\u0275pipeBind1(20, 21, \u0275\u0275pipeBind1(19, 19, item_r1.linked_event == null ? null : item_r1.linked_event.system_id))) == null ? null : tmp_15_0.zones)) == null ? null : tmp_15_0.address, " ");
  }
}
function EventListingComponent_ng_template_12_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.LEVEL_EMPTY"), " ");
  }
}
function EventListingComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "space");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "level");
    \u0275\u0275template(5, EventListingComponent_ng_template_12_span_5_Template, 3, 3, "span", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_11_0;
    const item_r3 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_10_0 = \u0275\u0275pipeBind1(4, 6, (tmp_10_0 = \u0275\u0275pipeBind1(3, 4, \u0275\u0275pipeBind1(2, 2, (tmp_10_0 = ctx_r1.room(item_r3)) == null ? null : tmp_10_0.email))) == null ? null : tmp_10_0.zones)) == null ? null : tmp_10_0.display_name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !((tmp_11_0 = ctx_r1.room(item_r3)) == null ? null : tmp_11_0.email));
  }
}
function EventListingComponent_ng_template_14_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.ROOM_EMPTY"), " ");
  }
}
function EventListingComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "space");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275template(4, EventListingComponent_ng_template_14_span_4_Template, 3, 3, "span", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_11_0;
    const item_r4 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_10_0 = \u0275\u0275pipeBind1(3, 4, \u0275\u0275pipeBind1(2, 2, (tmp_10_0 = ctx_r1.room(item_r4)) == null ? null : tmp_10_0.email))) == null ? null : tmp_10_0.display_name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !((tmp_11_0 = ctx_r1.room(item_r4)) == null ? null : tmp_11_0.email));
  }
}
function EventListingComponent_ng_template_16_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "attendee-list", 29);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("list", ctx_r1.attendeeList(item_r5.attendees))("host", item_r5.user_email || item_r5.host)("show_host", false)("hide_close", true)("custom_title", \u0275\u0275pipeBind1(2, 5, "CALENDAR_EVENT.GROUP_INTERESTED"));
  }
}
function EventListingComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, EventListingComponent_ng_template_16_ng_template_2_Template, 3, 7, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const item_r5 = ctx.row;
    const view_attendees_r6 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("content", view_attendees_r6)("disabled", !ctx_r1.attendeeCount(item_r5.attendees));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.attendeeCount(item_r5.attendees) || 0, " ");
  }
}
function EventListingComponent_ng_template_18_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "attendee-list", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("show_host", false)("list", ctx_r1.checkedInList(item_r7.attendees))("host", item_r7.user_email || item_r7.host)("hide_close", true);
  }
}
function EventListingComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, EventListingComponent_ng_template_18_ng_template_2_Template, 2, 4, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const item_r7 = ctx.row;
    const view_attendees_r8 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("content", view_attendees_r8)("disabled", !ctx_r1.checkedInCount(item_r7.attendees));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.checkedInCount(item_r7.attendees), " ");
  }
}
function EventListingComponent_ng_template_20_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function EventListingComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EventListingComponent_ng_template_20_div_0_Template, 3, 0, "div", 31);
  }
  if (rf & 2) {
    const data_r9 = ctx.data;
    \u0275\u0275property("ngIf", data_r9 !== "PRIVATE" && data_r9 !== "private");
  }
}
function EventListingComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r10 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success", item_r10.state !== "done" && item_r10.state !== "in_progress" && item_r10.state !== "started")("text-success-content", item_r10.state !== "done" && item_r10.state !== "in_progress" && item_r10.state !== "started")("bg-warning", item_r10.state === "in_progress" || item_r10.state === "started")("text-warning-content", item_r10.state === "in_progress" || item_r10.state === "started")("bg-base-200", item_r10.state === "done")("text-base-content", item_r10.state === "done");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 13, item_r10.state === "done" ? "COMMON.STATE_DONE" : item_r10.state === "in_progress" || item_r10.state === "started" ? "COMMON.STATE_IN_PROGRESS" : "COMMON.STATE_ACTIVE"), " ");
  }
}
function EventListingComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34)(1, "icon");
    \u0275\u0275text(2, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "mat-menu", null, 9)(5, "button", 35)(6, "div", 36)(7, "icon", 37);
    \u0275\u0275text(8, " confirmation_number ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 38);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "button", 39);
    \u0275\u0275listener("click", function EventListingComponent_ng_template_24_Template_button_click_12_listener() {
      const row_r12 = \u0275\u0275restoreView(_r11).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewEvent(row_r12));
    });
    \u0275\u0275elementStart(13, "div", 36)(14, "icon", 37);
    \u0275\u0275text(15, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 38);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "a", 40)(20, "div", 36)(21, "icon", 37);
    \u0275\u0275text(22, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 38);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "button", 35)(27, "div", 36)(28, "icon", 37);
    \u0275\u0275text(29, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 38);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "button", 39);
    \u0275\u0275listener("click", function EventListingComponent_ng_template_24_Template_button_click_33_listener() {
      const row_r12 = \u0275\u0275restoreView(_r11).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeEvent(row_r12));
    });
    \u0275\u0275elementStart(34, "div", 36)(35, "icon", 41);
    \u0275\u0275text(36, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 38);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r12 = ctx.row;
    const menu_r13 = \u0275\u0275reference(4);
    \u0275\u0275property("matMenuTriggerFor", menu_r13)("disabled", row_r12.state === "done");
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 10, "APP.CONCIERGE.EVENTS_PROMOTE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 12, "APP.CONCIERGE.EVENTS_VIEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(20, _c9, row_r12 == null ? null : row_r12.id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 14, "APP.CONCIERGE.EVENTS_EDIT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 16, "APP.CONCIERGE.EVENTS_COPY_URL"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 18, "APP.CONCIERGE.EVENTS_REMOVE"), " ");
  }
}
var _EventListingComponent = class _EventListingComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._state = inject(EventStateService);
    this.loading = this._state.loading;
    this.event_list = this._state.event_list;
    this.viewEvent = (event) => this._state.viewEvent(event);
    this.removeEvent = (event) => this._state.removeEvent(event);
  }
  room(item) {
    return item.resources.find((_) => _.email !== this._state.calendar);
  }
  get time_format() {
    return this._settings.time_format;
  }
  attendeeCount(attendees) {
    if (!attendees?.length)
      return 0;
    return attendees.filter((user) => user.email !== this._state.calendar).length;
  }
  attendeeList(attendees) {
    if (!attendees?.length)
      return [];
    return attendees.filter((user) => user.email !== this._state.calendar);
  }
  checkedInCount(attendees) {
    if (!attendees?.length)
      return 0;
    return attendees.filter((user) => user.checked_in).length;
  }
  checkedInList(attendees) {
    if (!attendees?.length)
      return [];
    return attendees.filter((user) => user.checked_in);
  }
};
_EventListingComponent.\u0275fac = function EventListingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EventListingComponent)();
};
_EventListingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventListingComponent, selectors: [["event-listing"]], decls: 26, vars: 50, consts: [["event_template", ""], ["level_template", ""], ["room_template", ""], ["interested_template", ""], ["attending_template", ""], ["published_template", ""], ["status_template", ""], ["actions_template", ""], ["view_attendees", ""], ["menu", "matMenu"], ["mode", "indeterminate", 1, "w-full"], ["empty_message", "No group events for selected period", 1, "block", "w-full", "min-w-6xl", "text-sm", 3, "data", "columns", "sortable"], [1, "h-20", "w-full"], [1, "flex", "items-center", "space-x-2", "px-3", "py-2"], ["date", "", 1, "flex", "w-8", "flex-col", "items-center", "leading-tight"], ["month", "", 1, "relative", "top-0.5", "text-sm", "font-medium", "opacity-60"], ["day", "", 1, "relative", "-top-0.5", "text-2xl", "font-light"], [1, "border-base-200", "bg-base-200", "flex", "h-12", "w-12", "items-center", "justify-center", "overflow-hidden", "rounded-sm", "border"], ["auth", "", "class", "min-h-full min-w-full object-cover", 3, "source", 4, "ngIf"], ["details", "", 1, "flex", "flex-col"], [1, "text-sm"], [1, "text-xs", "opacity-40"], [1, "text-xs"], ["auth", "", 1, "min-h-full", "min-w-full", "object-cover", 3, "source"], [1, "p-4"], ["class", "opacity-30", 4, "ngIf"], [1, "opacity-30"], ["icon", "", "matRipple", "", "customTooltip", "", 1, "mx-auto", "h-12", "w-12", "rounded-sm", 3, "content", "disabled"], [1, "relative", "h-112", "w-[20rem]", "overflow-auto", "rounded-sm", "bg-white", "shadow-sm"], [3, "list", "host", "show_host", "hide_close", "custom_title"], [3, "show_host", "list", "host", "hide_close"], ["class", "bg-success text-success-content mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl", 4, "ngIf"], [1, "bg-success", "text-success-content", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl"], [1, "rounded-full", "px-4", "py-1"], ["icon", "", "matRipple", "", 1, "mx-2", "h-12", "w-12", "rounded-sm", 3, "matMenuTriggerFor", "disabled"], ["mat-menu-item", "", 3, "disabled"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "mr-2"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "routerLink"], [1, "text-error", "text-2xl"]], template: function EventListingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 10);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275element(2, "simple-table", 11);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275element(9, "div", 12);
    \u0275\u0275template(10, EventListingComponent_ng_template_10_Template, 22, 25, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(12, EventListingComponent_ng_template_12_Template, 6, 8, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(14, EventListingComponent_ng_template_14_Template, 5, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(16, EventListingComponent_ng_template_16_Template, 4, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(18, EventListingComponent_ng_template_18_Template, 4, 3, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(20, EventListingComponent_ng_template_20_Template, 1, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(22, EventListingComponent_ng_template_22_Template, 4, 15, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(24, EventListingComponent_ng_template_24_Template, 40, 22, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const event_template_r14 = \u0275\u0275reference(11);
    const level_template_r15 = \u0275\u0275reference(13);
    const room_template_r16 = \u0275\u0275reference(15);
    const interested_template_r17 = \u0275\u0275reference(17);
    const attending_template_r18 = \u0275\u0275reference(19);
    const published_template_r19 = \u0275\u0275reference(21);
    const status_template_r20 = \u0275\u0275reference(23);
    const actions_template_r21 = \u0275\u0275reference(25);
    \u0275\u0275classProp("opacity-0", !\u0275\u0275pipeBind1(1, 5, ctx.loading));
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx.event_list)("columns", \u0275\u0275pureFunction8(41, _c8, \u0275\u0275pureFunction1(19, _c05, event_template_r14), \u0275\u0275pureFunction2(21, _c13, \u0275\u0275pipeBind1(3, 7, "RESOURCE.LEVEL"), level_template_r15), \u0275\u0275pureFunction2(24, _c2, \u0275\u0275pipeBind1(4, 9, "RESOURCE.ROOM"), room_template_r16), \u0275\u0275pureFunction2(27, _c3, \u0275\u0275pipeBind1(5, 11, "CALENDAR_EVENT.GROUP_INTERESTED"), interested_template_r17), \u0275\u0275pureFunction2(30, _c4, \u0275\u0275pipeBind1(6, 13, "CALENDAR_EVENT.GROUP_ATTENDING_FIELD"), attending_template_r18), \u0275\u0275pureFunction2(33, _c5, \u0275\u0275pipeBind1(7, 15, "COMMON.STATUS"), status_template_r20), \u0275\u0275pureFunction2(36, _c6, \u0275\u0275pipeBind1(8, 17, "COMMON.PUBLISHED"), published_template_r19), \u0275\u0275pureFunction1(39, _c7, actions_template_r21)))("sortable", true);
  }
}, dependencies: [
  CommonModule,
  NgIf,
  AsyncPipe,
  DatePipe,
  SimpleTableComponent,
  SpacePipe,
  IconComponent,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  RouterModule,
  RouterLink,
  MatRippleModule,
  MatRipple,
  TranslatePipe,
  AttendeeListComponent,
  MatProgressBarModule,
  MatProgressBar,
  AuthenticatedImageDirective,
  LevelPipe,
  BuildingPipe,
  CustomTooltipComponent
], encapsulation: 2 });
var EventListingComponent = _EventListingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventListingComponent, [{
    type: Component,
    args: [{ selector: "event-listing", template: `
        <mat-progress-bar
            class="w-full"
            [class.opacity-0]="!(loading | async)"
            mode="indeterminate"
        />
        <simple-table
            class="block w-full min-w-6xl text-sm"
            [data]="event_list"
            empty_message="No group events for selected period"
            [columns]="[
                { key: 'date', name: 'Event', content: event_template },
                {
                    key: 'level',
                    name: 'RESOURCE.LEVEL' | translate,
                    content: level_template,
                    size: '8rem',
                    sortable: false,
                },
                {
                    key: 'room',
                    name: 'RESOURCE.ROOM' | translate,
                    content: room_template,
                    size: '12rem',
                    sortable: false,
                },
                {
                    key: 'interested',
                    name: 'CALENDAR_EVENT.GROUP_INTERESTED' | translate,
                    content: interested_template,
                    size: '6rem',
                    sortable: false,
                },
                {
                    key: 'attending',
                    name: 'CALENDAR_EVENT.GROUP_ATTENDING_FIELD' | translate,
                    content: attending_template,
                    size: '6rem',
                    sortable: false,
                },
                {
                    key: 'state',
                    name: 'COMMON.STATUS' | translate,
                    content: status_template,
                    size: '8.5rem',
                },
                {
                    key: 'permission',
                    name: 'COMMON.PUBLISHED' | translate,
                    content: published_template,
                    size: '6rem',
                    sortable: false,
                },
                {
                    key: 'actions',
                    name: ' ',
                    content: actions_template,
                    size: '4rem',
                    sortable: false,
                },
            ]"
            [sortable]="true"
        />
        <div class="h-20 w-full"></div>
        <ng-template #event_template let-item="row">
            <div class="flex items-center space-x-2 px-3 py-2">
                <div date class="flex w-8 flex-col items-center leading-tight">
                    <div
                        month
                        class="relative top-0.5 text-sm font-medium opacity-60"
                    >
                        {{ item.date | date: 'MMM' }}
                    </div>
                    <div day class="relative -top-0.5 text-2xl font-light">
                        {{ item.date | date: 'd' }}
                    </div>
                </div>
                <div
                    class="border-base-200 bg-base-200 flex h-12 w-12 items-center justify-center overflow-hidden rounded-sm border"
                >
                    <img
                        *ngIf="item.images?.length"
                        auth
                        [source]="item.images[0]"
                        class="min-h-full min-w-full object-cover"
                    />
                </div>
                <div details class="flex flex-col">
                    <div class="text-sm">{{ item.title }}</div>
                    <div class="text-xs opacity-40">
                        {{ item.date | date: 'EEEE, ' + time_format }} &ndash;
                        {{
                            item.date + item.duration * 60 * 1000
                                | date: time_format + ' (z)'
                        }}
                    </div>
                    <div class="text-xs">
                        {{
                            (
                                (item.linked_event?.system_id | space | async)
                                    ?.zones | building
                            )?.address
                        }}
                    </div>
                </div>
            </div>
        </ng-template>
        <ng-template #level_template let-item="row">
            <div class="p-4">
                {{
                    ((room(item)?.email | space | async)?.zones | level)
                        ?.display_name
                }}
                <span *ngIf="!room(item)?.email" class="opacity-30">
                    {{ 'COMMON.LEVEL_EMPTY' | translate }}
                </span>
            </div>
        </ng-template>
        <ng-template #room_template let-item="row">
            <div class="p-4">
                {{ (room(item)?.email | space | async)?.display_name }}
                <span *ngIf="!room(item)?.email" class="opacity-30">
                    {{ 'COMMON.ROOM_EMPTY' | translate }}
                </span>
            </div>
        </ng-template>
        <ng-template #interested_template let-item="row">
            <button
                icon
                matRipple
                customTooltip
                [content]="view_attendees"
                class="mx-auto h-12 w-12 rounded-sm"
                [disabled]="!attendeeCount(item.attendees)"
            >
                {{ attendeeCount(item.attendees) || 0 }}
            </button>
            <ng-template #view_attendees>
                <div
                    class="relative h-112 w-[20rem] overflow-auto rounded-sm bg-white shadow-sm"
                >
                    <attendee-list
                        [list]="attendeeList(item.attendees)"
                        [host]="item.user_email || item.host"
                        [show_host]="false"
                        [hide_close]="true"
                        [custom_title]="
                            'CALENDAR_EVENT.GROUP_INTERESTED' | translate
                        "
                    ></attendee-list>
                </div>
            </ng-template>
        </ng-template>
        <ng-template #attending_template let-item="row">
            <button
                icon
                matRipple
                customTooltip
                [content]="view_attendees"
                class="mx-auto h-12 w-12 rounded-sm"
                [disabled]="!checkedInCount(item.attendees)"
            >
                {{ checkedInCount(item.attendees) }}
            </button>
            <ng-template #view_attendees>
                <div
                    class="relative h-112 w-[20rem] overflow-auto rounded-sm bg-white shadow-sm"
                >
                    <attendee-list
                        [show_host]="false"
                        [list]="checkedInList(item.attendees)"
                        [host]="item.user_email || item.host"
                        [hide_close]="true"
                    ></attendee-list>
                </div>
            </ng-template>
        </ng-template>
        <ng-template #published_template let-data="data">
            <div
                *ngIf="data !== 'PRIVATE' && data !== 'private'"
                class="bg-success text-success-content mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl"
            >
                <icon>done</icon>
            </div>
        </ng-template>
        <ng-template #status_template let-item="row">
            <div class="p-4">
                <div
                    class="rounded-full px-4 py-1"
                    [class.bg-success]="
                        item.state !== 'done' &&
                        item.state !== 'in_progress' &&
                        item.state !== 'started'
                    "
                    [class.text-success-content]="
                        item.state !== 'done' &&
                        item.state !== 'in_progress' &&
                        item.state !== 'started'
                    "
                    [class.bg-warning]="
                        item.state === 'in_progress' || item.state === 'started'
                    "
                    [class.text-warning-content]="
                        item.state === 'in_progress' || item.state === 'started'
                    "
                    [class.bg-base-200]="item.state === 'done'"
                    [class.text-base-content]="item.state === 'done'"
                >
                    {{
                        (item.state === 'done'
                            ? 'COMMON.STATE_DONE'
                            : item.state === 'in_progress' ||
                                item.state === 'started'
                              ? 'COMMON.STATE_IN_PROGRESS'
                              : 'COMMON.STATE_ACTIVE'
                        ) | translate
                    }}
                </div>
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <button
                icon
                matRipple
                class="mx-2 h-12 w-12 rounded-sm"
                [matMenuTriggerFor]="menu"
                [disabled]="row.state === 'done'"
            >
                <icon>more_vert</icon>
            </button>
            <mat-menu #menu="matMenu">
                <button mat-menu-item [disabled]="true">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl"> confirmation_number </icon>
                        <div class="mr-2">
                            {{ 'APP.CONCIERGE.EVENTS_PROMOTE' | translate }}
                        </div>
                    </div>
                </button>
                <button mat-menu-item (click)="viewEvent(row)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">visibility</icon>
                        <div class="mr-2">
                            {{ 'APP.CONCIERGE.EVENTS_VIEW' | translate }}
                        </div>
                    </div>
                </button>
                <a
                    mat-menu-item
                    [routerLink]="[
                        '/entertainment',
                        'events',
                        'manage',
                        row?.id,
                    ]"
                >
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">edit</icon>
                        <div class="mr-2">
                            {{ 'APP.CONCIERGE.EVENTS_EDIT' | translate }}
                        </div>
                    </div>
                </a>
                <button mat-menu-item [disabled]="true">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">content_copy</icon>
                        <div class="mr-2">
                            {{ 'APP.CONCIERGE.EVENTS_COPY_URL' | translate }}
                        </div>
                    </div>
                </button>
                <button mat-menu-item (click)="removeEvent(row)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-error text-2xl">delete</icon>
                        <div class="mr-2">
                            {{ 'APP.CONCIERGE.EVENTS_REMOVE' | translate }}
                        </div>
                    </div>
                </button>
            </mat-menu>
        </ng-template>
    `, imports: [
      CommonModule,
      SimpleTableComponent,
      SpacePipe,
      IconComponent,
      MatMenuModule,
      RouterModule,
      MatRippleModule,
      TranslatePipe,
      AttendeeListComponent,
      MatProgressBarModule,
      AuthenticatedImageDirective,
      LevelPipe,
      BuildingPipe,
      CustomTooltipComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventListingComponent, { className: "EventListingComponent", filePath: "apps/concierge/src/app/events/event-listing.component.ts", lineNumber: 323 });
})();

// apps/concierge/src/app/events/events-list.component.ts
var _c06 = () => ["/entertainment", "events", "manage"];
var _forTrack03 = ($index, $item) => $item.id;
function EventsListComponent_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const range_r1 = ctx.$implicit;
    \u0275\u0275property("value", range_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", range_r1.display, " ");
  }
}
function EventsListComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "event-listing", 22);
    \u0275\u0275elementEnd();
  }
}
function EventsListComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-calendar");
  }
}
function EventsListComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "div", 23);
    \u0275\u0275elementStart(2, "p", 24);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.EVENTS_CONFIG_ERROR"), " ");
  }
}
var _EventsListComponent = class _EventsListComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._settings = inject(SettingsService);
    this._state = inject(EventStateService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this.period = this._state.options.pipe(map((_) => _.period), distinctUntilChanged());
    this.view = "list";
    this.period_list = [];
  }
  get has_calendar() {
    return this._settings.get("app.group_events_calendar");
  }
  ngOnInit() {
    this.subscription("poll_events", this._state.startPolling());
    this.subscription("period", this.period.subscribe(() => {
      this._generatePeriods();
      this._initPeriod();
    }));
    this._generatePeriods();
    this._initPeriod();
    this.subscription("route.query", this._route.queryParamMap.subscribe((q) => {
      if (q.has("view")) {
        this.view = q.get("view");
      }
      if (q.has("period") && q.get("period") !== this._state.period) {
        this.setPeriodType(q.get("period"), false);
      }
      this._generatePeriods();
      if (q.has("range")) {
        this.timeout("update", () => {
          const id = parseInt(q.get("range"), 10);
          const item = this.period_list.find((_) => id >= _.start && id < _.end) || this.period_list[0] || {
            start: id,
            end: this._state.period === "week" ? addWeeks(id, 1).valueOf() : addMonths(id, 1).valueOf()
          };
          this.selected_range = item.id || id;
          this._state.setOptions({
            date: item.start,
            end: item.end
          });
          this.setPeriod(this.selected_range);
        });
      }
    }));
  }
  setView(view) {
    this.view = view;
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { view },
      queryParamsHandling: "merge"
    });
  }
  setPeriodType(type, set_route = true) {
    this._state.setOptions({ period: type });
    if (set_route) {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { period: type },
        queryParamsHandling: "merge"
      });
    }
  }
  setPeriod(id) {
    this.timeout("set_period", () => {
      const item = this.period_list.find((_) => id >= _.start && id < _.end) || this.period_list[0];
      if (!item)
        return;
      this.selected_range = item.id;
      const { start, end } = item;
      this._state.setOptions({ date: start, end });
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { range: id },
        queryParamsHandling: "merge"
      });
    });
  }
  _generatePeriods() {
    this.timeout("generate_periods", async () => {
      const periods = [];
      const period_type = await nextValueFrom(this.period);
      let date = subMonths(Date.now(), 6).valueOf();
      const end_date = addMonths(Date.now(), 6).valueOf();
      const week_offset = this._settings.get("app.week_start") || 0;
      if (period_type === "month") {
        date = startOfMonth(date).valueOf();
      } else if (period_type === "week") {
        date = startOfWeek(date, {
          weekStartsOn: week_offset
        }).valueOf();
      }
      while (date < end_date) {
        if (period_type === "week") {
          const end = endOfDay(addDays(date, 6)).valueOf();
          periods.push({
            id: date,
            start: date,
            end,
            display: `${format(date, "EEE, do MMM")} \u2013 ${format(end, "do MMM")}`
          });
          date = addDays(date, 7).valueOf();
        } else if (period_type === "month") {
          const end = addDays(addMonths(date, 1), -1).valueOf();
          periods.push({
            id: date,
            start: date,
            end,
            display: `${format(date, "MMMM yyyy")}`
          });
          date = addMonths(date, 1).valueOf();
        } else
          break;
      }
      this.period_list = periods;
    });
  }
  _initPeriod() {
    this.timeout("update", () => {
      if (this.period_list.length) {
        let index = this.period_list.findIndex((_) => _.start <= Date.now() && _.end >= Date.now());
        if (index < 0)
          index = 0;
        this.setPeriod(this.period_list[index].id);
        this.selected_range = this.period_list[index].id;
      }
    }, 350);
  }
};
_EventsListComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275EventsListComponent_BaseFactory;
  return function EventsListComponent_Factory(__ngFactoryType__) {
    return (\u0275EventsListComponent_BaseFactory || (\u0275EventsListComponent_BaseFactory = \u0275\u0275getInheritedFactory(_EventsListComponent)))(__ngFactoryType__ || _EventsListComponent);
  };
})();
_EventsListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventsListComponent, selectors: [["app-event-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 45, vars: 31, consts: [[1, "absolute", "inset-0", "flex", "flex-col"], [1, "flex", "items-center", "justify-between", "p-8"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 3, "routerLink"], [1, "ml-2"], [1, "text-2xl"], ["filters", "", 1, "flex", "items-center", "space-x-2", "px-8", "pb-4"], ["btn", "", "matRipple", "", 1, "rounded-3xl", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], [1, "pr-2"], [1, "h-full", "px-2"], [1, "bg-base-300", "h-full", "w-px"], ["appearance", "outline", 1, "no-subscript", "w-32"], [3, "ngModelChange", "ngModel"], ["value", "week"], ["value", "month"], ["appearance", "outline", 1, "no-subscript", "w-64"], [3, "value"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-y-auto", "px-8"], [1, "min-h-full", "w-full", "overflow-x-auto"], [1, "absolute", "inset-0", "z-50", "flex", "items-center", "justify-center"], [1, "block"], [1, "bg-base-100", "absolute", "inset-0", "opacity-80"], [1, "max-w-lg", "text-lg", "opacity-60"]], template: function EventsListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 3)(6, "div", 4);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "icon", 5);
    \u0275\u0275text(10, "chevron_right");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 6)(12, "button", 7);
    \u0275\u0275listener("click", function EventsListComponent_Template_button_click_12_listener() {
      return ctx.setView("list");
    });
    \u0275\u0275elementStart(13, "div", 8)(14, "icon", 9);
    \u0275\u0275text(15, "list");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 10);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "button", 7);
    \u0275\u0275listener("click", function EventsListComponent_Template_button_click_19_listener() {
      return ctx.setView("calendar");
    });
    \u0275\u0275elementStart(20, "div", 8)(21, "icon", 9);
    \u0275\u0275text(22, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 10);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 11);
    \u0275\u0275element(27, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-form-field", 13)(29, "mat-select", 14);
    \u0275\u0275pipe(30, "async");
    \u0275\u0275listener("ngModelChange", function EventsListComponent_Template_mat_select_ngModelChange_29_listener($event) {
      return ctx.setPeriodType($event);
    });
    \u0275\u0275elementStart(31, "mat-option", 15);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "mat-option", 16);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "mat-form-field", 17)(38, "mat-select", 14);
    \u0275\u0275twoWayListener("ngModelChange", function EventsListComponent_Template_mat_select_ngModelChange_38_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selected_range, $event) || (ctx.selected_range = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function EventsListComponent_Template_mat_select_ngModelChange_38_listener($event) {
      return ctx.setPeriod($event);
    });
    \u0275\u0275repeaterCreate(39, EventsListComponent_For_40_Template, 2, 2, "mat-option", 18, _forTrack03);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 19);
    \u0275\u0275conditionalCreate(42, EventsListComponent_Conditional_42_Template, 2, 0, "div", 20);
    \u0275\u0275conditionalCreate(43, EventsListComponent_Conditional_43_Template, 1, 0, "event-calendar");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(44, EventsListComponent_Conditional_44_Template, 5, 3, "div", 21);
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 16, "APP.CONCIERGE.EVENTS_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(30, _c06));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 18, "APP.CONCIERGE.EVENTS_ADD"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("inverse", ctx.view !== "list");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 20, "COMMON.LIST"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx.view !== "calendar");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 22, "COMMON.CALENDAR"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(30, 24, ctx.period));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 26, "COMMON.WEEK"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 28, "COMMON.MONTH"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.selected_range);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.period_list);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.view === "list" ? 42 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.view === "calendar" ? 43 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.has_calendar ? 44 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  IconComponent,
  TranslatePipe,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatSelect,
  MatOption,
  EventCalendarComponent,
  EventListingComponent,
  MatRippleModule,
  MatRipple,
  RouterModule,
  RouterLink,
  FormsModule,
  NgControlStatus,
  NgModel
], styles: ["\n\n[_nghost-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=events-list.component.css.map */"] });
var EventsListComponent = _EventsListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventsListComponent, [{
    type: Component,
    args: [{ selector: "app-event-list", template: `
        <div class="absolute inset-0 flex flex-col">
            <div class="flex items-center justify-between p-8">
                <h2 class="text-2xl font-medium">
                    {{ 'APP.CONCIERGE.EVENTS_HEADER' | translate }}
                </h2>
                <a
                    btn
                    matRipple
                    [routerLink]="['/entertainment', 'events', 'manage']"
                >
                    <div class="ml-2">
                        {{ 'APP.CONCIERGE.EVENTS_ADD' | translate }}
                    </div>
                    <icon class="text-2xl">chevron_right</icon>
                </a>
            </div>
            <div filters class="flex items-center space-x-2 px-8 pb-4">
                <button
                    btn
                    matRipple
                    class="rounded-3xl"
                    [class.inverse]="view !== 'list'"
                    (click)="setView('list')"
                >
                    <div class="flex items-center space-x-2">
                        <icon class="text-xl">list</icon>
                        <div class="pr-2">{{ 'COMMON.LIST' | translate }}</div>
                    </div>
                </button>
                <button
                    btn
                    matRipple
                    class="rounded-3xl"
                    [class.inverse]="view !== 'calendar'"
                    (click)="setView('calendar')"
                >
                    <div class="flex items-center space-x-2">
                        <icon class="text-xl">event</icon>
                        <div class="pr-2">
                            {{ 'COMMON.CALENDAR' | translate }}
                        </div>
                    </div>
                </button>
                <div class="h-full px-2">
                    <div class="bg-base-300 h-full w-px"></div>
                </div>
                <mat-form-field appearance="outline" class="no-subscript w-32">
                    <mat-select
                        [ngModel]="period | async"
                        (ngModelChange)="setPeriodType($event)"
                    >
                        <mat-option value="week">{{
                            'COMMON.WEEK' | translate
                        }}</mat-option>
                        <mat-option value="month">{{
                            'COMMON.MONTH' | translate
                        }}</mat-option>
                    </mat-select>
                </mat-form-field>
                <mat-form-field appearance="outline" class="no-subscript w-64">
                    <mat-select
                        [(ngModel)]="selected_range"
                        (ngModelChange)="setPeriod($event)"
                    >
                        @for (range of period_list; track range.id) {
                            <mat-option [value]="range.id">
                                {{ range.display }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
            <div class="relative h-1/2 w-full flex-1 overflow-y-auto px-8">
                @if (view === 'list') {
                    <div class="min-h-full w-full overflow-x-auto">
                        <event-listing class="block"></event-listing>
                    </div>
                }
                @if (view === 'calendar') {
                    <event-calendar></event-calendar>
                }
            </div>
        </div>
        @if (!has_calendar) {
            <div class="absolute inset-0 z-50 flex items-center justify-center">
                <div class="bg-base-100 absolute inset-0 opacity-80"></div>
                <p class="max-w-lg text-lg opacity-60">
                    {{ 'APP.CONCIERGE.EVENTS_CONFIG_ERROR' | translate }}
                </p>
            </div>
        }
    `, imports: [
      CommonModule,
      IconComponent,
      TranslatePipe,
      MatFormFieldModule,
      MatSelectModule,
      EventCalendarComponent,
      EventListingComponent,
      MatRippleModule,
      RouterModule,
      FormsModule
    ], styles: ["/* angular:styles/component:css;f992f808f00abdb3d341f52af27489d2a52f705030fa77da9b19706093ffd928;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/events/events-list.component.ts */\n:host {\n  flex: 1;\n}\n/*# sourceMappingURL=events-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventsListComponent, { className: "EventsListComponent", filePath: "apps/concierge/src/app/events/events-list.component.ts", lineNumber: 140 });
})();

// apps/concierge/src/app/events/events.module.ts
var ROUTES = [
  {
    path: "",
    component: EventsComponent,
    children: [{ path: "", component: EventsListComponent }]
  },
  { path: "manage", component: EventManageComponent },
  { path: "manage/:id", component: EventManageComponent },
  { path: "view/:id", component: EventViewComponent },
  { path: "**", redirectTo: "" }
];
var _EventsModule = class _EventsModule {
};
_EventsModule.\u0275fac = function EventsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EventsModule)();
};
_EventsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EventsModule });
_EventsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  EventsComponent,
  EventsListComponent,
  EventManageComponent,
  RouterModule.forChild(ROUTES)
] });
var EventsModule = _EventsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventsModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        EventsComponent,
        EventsListComponent,
        EventManageComponent,
        RouterModule.forChild(ROUTES)
      ]
    }]
  }], null, null);
})();
export {
  EventsModule
};
//# sourceMappingURL=events.module-43RUT2EG.js.map
