import {
  subMonths
} from "./chunk-PPGOJ65A.js";
import {
  BILLABLE_CATEGORY_DISPLAY,
  BILLABLE_CATEGORY_ICONS,
  DOC_STATUS_COLOR,
  DOC_STATUS_DISPLAY,
  EventFinanceStateService,
  EventSummaryDialogComponent,
  generateFinancePdf
} from "./chunk-HTFALHHX.js";
import {
  CATEGORY_DISPLAY_NAMES,
  CATEGORY_ICONS,
  EventApprovalStateService,
  MOCK_APPROVAL_EVENTS,
  ROLE_DISPLAY_NAMES,
  ROLE_PERMISSIONS
} from "./chunk-GHTOAOJH.js";
import "./chunk-3KBRL57I.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent
} from "./chunk-4R762Z23.js";
import {
  GroupEventDetailsModalComponent
} from "./chunk-7DTQTK4G.js";
import {
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  COMMA,
  CalendarEvent,
  CommonModule,
  Component,
  DateFieldComponent,
  DatePipe,
  DefaultValueAccessor,
  ENTER,
  EventFormService,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  IconComponent,
  ImageListFieldComponent,
  Injectable,
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
  MatCheckbox,
  MatCheckboxModule,
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule,
  MatDialog,
  MatDialogModule,
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
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgModule,
  NumberValueAccessor,
  OrganisationService,
  Pn,
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
  Space,
  SpacePipe,
  StaffUser,
  TIMEZONES_IANA,
  TimeFieldComponent,
  TranslatePipe,
  UserSearchFieldComponent,
  Validators,
  addDays,
  addMonths,
  addWeeks,
  combineLatest,
  computed,
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
  input,
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
  startOfMonth,
  startOfWeek,
  switchMap,
  tap,
  toSignal,
  unique,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction8,
  ɵɵpureFunctionV,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HFCQTRLN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

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
    this._approval_state = inject(EventApprovalStateService);
    this._options = new BehaviorSubject({
      period: "week"
    });
    this._loading = new BehaviorSubject("");
    this._poll = new BehaviorSubject(0);
    this._changed = new BehaviorSubject(0);
    this._api_events = combineLatest([
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
    this.event_list = combineLatest([
      this._api_events,
      this._approval_state.grouped_calendar_events$
    ]).pipe(map(([api_events, grouped_events]) => [...api_events, ...grouped_events].sort((a, b) => a.date - b.date)), shareReplay(1));
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
    const input2 = event.chipInput.inputElement;
    const value = event.value;
    const feature_list = this.tag_list;
    if ((value || "").trim()) {
      feature_list.push(value);
      this.form.controls.tags.setValue(feature_list);
    }
    if (input2)
      input2.value = "";
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

// apps/concierge/src/app/events/event-request-wizard.component.ts
var _c03 = () => ["/entertainment", "events"];
var _forTrack0 = ($index, $item) => $item.number;
var _forTrack1 = ($index, $item) => $item.value;
var _forTrack2 = ($index, $item) => $item.id;
var _forTrack3 = ($index, $item) => $item.key;
function EventRequestWizardComponent_For_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 15);
  }
  if (rf & 2) {
    const \u0275$index_15_r2 = \u0275\u0275nextContext().$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-primary", ctx_r2.completed_steps().includes(\u0275$index_15_r2))("bg-base-300", !ctx_r2.completed_steps().includes(\u0275$index_15_r2));
  }
}
function EventRequestWizardComponent_For_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 13);
    \u0275\u0275text(1, "done");
    \u0275\u0275elementEnd();
  }
}
function EventRequestWizardComponent_For_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const step_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", step_r4.number, " ");
  }
}
function EventRequestWizardComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, EventRequestWizardComponent_For_9_Conditional_0_Template, 1, 4, "div", 10);
    \u0275\u0275elementStart(1, "button", 11);
    \u0275\u0275listener("click", function EventRequestWizardComponent_For_9_Template_button_click_1_listener() {
      const step_r4 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToStep(step_r4.number));
    });
    \u0275\u0275elementStart(2, "div", 12);
    \u0275\u0275conditionalCreate(3, EventRequestWizardComponent_For_9_Conditional_3_Template, 2, 0, "icon", 13)(4, EventRequestWizardComponent_For_9_Conditional_4_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r4 = ctx.$implicit;
    const \u0275$index_15_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(\u0275$index_15_r2 > 0 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", step_r4.number > ctx_r2.current_step() && !ctx_r2.completed_steps().includes(step_r4.number - 1));
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-primary", ctx_r2.current_step() === step_r4.number)("text-primary-content", ctx_r2.current_step() === step_r4.number)("bg-success", ctx_r2.completed_steps().includes(step_r4.number) && ctx_r2.current_step() !== step_r4.number)("text-white", ctx_r2.completed_steps().includes(step_r4.number) && ctx_r2.current_step() !== step_r4.number)("bg-base-300", !ctx_r2.completed_steps().includes(step_r4.number) && ctx_r2.current_step() !== step_r4.number);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.completed_steps().includes(step_r4.number) && ctx_r2.current_step() !== step_r4.number ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("font-medium", ctx_r2.current_step() === step_r4.number)("opacity-60", ctx_r2.current_step() !== step_r4.number);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", step_r4.label, " ");
  }
}
function EventRequestWizardComponent_Conditional_11_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Title is required");
    \u0275\u0275elementEnd();
  }
}
function EventRequestWizardComponent_Conditional_11_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r5 = ctx.$implicit;
    \u0275\u0275property("value", d_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", d_r5.label, " ");
  }
}
function EventRequestWizardComponent_Conditional_11_For_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function EventRequestWizardComponent_Conditional_11_For_38_Template_button_click_0_listener() {
      const venue_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.form.controls.venue_type.setValue(venue_r7.id));
    });
    \u0275\u0275elementStart(1, "icon", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const venue_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-primary", ctx_r2.form.controls.venue_type.value === venue_r7.id)("bg-base-200", ctx_r2.form.controls.venue_type.value === venue_r7.id)("border-base-300", ctx_r2.form.controls.venue_type.value !== venue_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(venue_r7.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", venue_r7.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", venue_r7.description, " ");
  }
}
function EventRequestWizardComponent_Conditional_11_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Location is required");
    \u0275\u0275elementEnd();
  }
}
function EventRequestWizardComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "h3", 16);
    \u0275\u0275text(2, "Event Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 17);
    \u0275\u0275text(4, "Event Title ");
    \u0275\u0275elementStart(5, "span", 18);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-form-field", 19);
    \u0275\u0275element(8, "input", 20);
    \u0275\u0275conditionalCreate(9, EventRequestWizardComponent_Conditional_11_Conditional_9_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 21)(11, "div", 22)(12, "label", 17);
    \u0275\u0275text(13, "Date ");
    \u0275\u0275elementStart(14, "span", 18);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "mat-form-field", 19);
    \u0275\u0275element(17, "input", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 24)(19, "label", 17);
    \u0275\u0275text(20, "Start Time ");
    \u0275\u0275elementStart(21, "span", 18);
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "mat-form-field", 19);
    \u0275\u0275element(24, "input", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 24)(26, "label", 17);
    \u0275\u0275text(27, "Duration (minutes) ");
    \u0275\u0275elementStart(28, "span", 18);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "mat-form-field", 19)(31, "mat-select", 26);
    \u0275\u0275repeaterCreate(32, EventRequestWizardComponent_Conditional_11_For_33_Template, 2, 2, "mat-option", 27, _forTrack1);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "label", 17);
    \u0275\u0275text(35, "Venue Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 28);
    \u0275\u0275repeaterCreate(37, EventRequestWizardComponent_Conditional_11_For_38_Template, 7, 9, "button", 29, _forTrack2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "label", 17);
    \u0275\u0275text(40, "Location ");
    \u0275\u0275elementStart(41, "span", 18);
    \u0275\u0275text(42, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "mat-form-field", 19);
    \u0275\u0275element(44, "input", 30);
    \u0275\u0275conditionalCreate(45, EventRequestWizardComponent_Conditional_11_Conditional_45_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "label", 17);
    \u0275\u0275text(47, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "mat-form-field", 19);
    \u0275\u0275element(49, "textarea", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("formControl", ctx_r2.form.controls.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.form.controls.title.touched && ctx_r2.form.controls.title.hasError("required") ? 9 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275property("formControl", ctx_r2.form.controls.date);
    \u0275\u0275advance(7);
    \u0275\u0275property("formControl", ctx_r2.form.controls.start_time);
    \u0275\u0275advance(7);
    \u0275\u0275property("formControl", ctx_r2.form.controls.duration_minutes);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.duration_options);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.venue_options);
    \u0275\u0275advance(7);
    \u0275\u0275property("formControl", ctx_r2.form.controls.location);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.form.controls.location.touched && ctx_r2.form.controls.location.hasError("required") ? 45 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControl", ctx_r2.form.controls.description);
  }
}
function EventRequestWizardComponent_Conditional_12_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Name is required");
    \u0275\u0275elementEnd();
  }
}
function EventRequestWizardComponent_Conditional_12_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function EventRequestWizardComponent_Conditional_12_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Invalid email address");
    \u0275\u0275elementEnd();
  }
}
function EventRequestWizardComponent_Conditional_12_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Phone is required");
    \u0275\u0275elementEnd();
  }
}
function EventRequestWizardComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "h3", 16);
    \u0275\u0275text(2, " Organizer Information ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 17);
    \u0275\u0275text(4, "Full Name ");
    \u0275\u0275elementStart(5, "span", 18);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-form-field", 19);
    \u0275\u0275element(8, "input", 35);
    \u0275\u0275conditionalCreate(9, EventRequestWizardComponent_Conditional_12_Conditional_9_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "label", 17);
    \u0275\u0275text(11, "Email ");
    \u0275\u0275elementStart(12, "span", 18);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "mat-form-field", 19);
    \u0275\u0275element(15, "input", 36);
    \u0275\u0275conditionalCreate(16, EventRequestWizardComponent_Conditional_12_Conditional_16_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(17, EventRequestWizardComponent_Conditional_12_Conditional_17_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "label", 17);
    \u0275\u0275text(19, "Phone ");
    \u0275\u0275elementStart(20, "span", 18);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "mat-form-field", 19);
    \u0275\u0275element(23, "input", 37);
    \u0275\u0275conditionalCreate(24, EventRequestWizardComponent_Conditional_12_Conditional_24_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("formControl", ctx_r2.form.controls.organiser_name);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.form.controls.organiser_name.touched && ctx_r2.form.controls.organiser_name.hasError("required") ? 9 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("formControl", ctx_r2.form.controls.organiser_email);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.form.controls.organiser_email.touched && ctx_r2.form.controls.organiser_email.hasError("required") ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.form.controls.organiser_email.touched && ctx_r2.form.controls.organiser_email.hasError("email") ? 17 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("formControl", ctx_r2.form.controls.organiser_phone);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.form.controls.organiser_phone.touched && ctx_r2.form.controls.organiser_phone.hasError("required") ? 24 : -1);
  }
}
function EventRequestWizardComponent_Conditional_13_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 43);
    \u0275\u0275listener("change", function EventRequestWizardComponent_Conditional_13_For_7_Template_mat_checkbox_change_0_listener($event) {
      const svc_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleService(svc_r9.key, $event.checked));
    });
    \u0275\u0275elementStart(1, "div", 44)(2, "icon", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const svc_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("checked", ctx_r2.isServiceSelected(svc_r9.key));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(svc_r9.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(svc_r9.label);
  }
}
function EventRequestWizardComponent_Conditional_13_Conditional_21_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "icon", 48);
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 49);
    \u0275\u0275text(6, "\u2014 Pending approval");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const svc_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.getCategoryName(svc_r10));
  }
}
function EventRequestWizardComponent_Conditional_13_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 45);
    \u0275\u0275text(2, " Approval Preview ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46);
    \u0275\u0275repeaterCreate(4, EventRequestWizardComponent_Conditional_13_Conditional_21_For_5_Template, 7, 1, "div", 47, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.selectedServices());
  }
}
function EventRequestWizardComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "h3", 16);
    \u0275\u0275text(2, "Requirements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 17);
    \u0275\u0275text(4, "Services Required");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 38);
    \u0275\u0275repeaterCreate(6, EventRequestWizardComponent_Conditional_13_For_7_Template, 6, 3, "mat-checkbox", 39, _forTrack3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "label", 17);
    \u0275\u0275text(9, "Expected Attendance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-form-field", 19);
    \u0275\u0275element(11, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 28)(13, "mat-checkbox", 26);
    \u0275\u0275text(14, " Outdoor Event ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-checkbox", 26);
    \u0275\u0275text(16, " Major Event ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "label", 17);
    \u0275\u0275text(18, "Special Requirements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-form-field", 19);
    \u0275\u0275element(20, "textarea", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, EventRequestWizardComponent_Conditional_13_Conditional_21_Template, 6, 0, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r2.service_options);
    \u0275\u0275advance(5);
    \u0275\u0275property("formControl", ctx_r2.form.controls.expected_attendance);
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r2.form.controls.is_outdoor);
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r2.form.controls.is_major_event);
    \u0275\u0275advance(5);
    \u0275\u0275property("formControl", ctx_r2.form.controls.special_requirements);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectedServices().length > 0 ? 21 : -1);
  }
}
function EventRequestWizardComponent_Conditional_14_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "span", 59);
    \u0275\u0275text(2, "Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedServiceNames());
  }
}
function EventRequestWizardComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "h3", 16);
    \u0275\u0275text(2, "Documents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 50)(4, "icon", 51);
    \u0275\u0275text(5, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17);
    \u0275\u0275text(7, " Drag & drop files here ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 52);
    \u0275\u0275text(9, " or click to browse (PDF, DOCX, images) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 53);
    \u0275\u0275text(11, " Browse Files ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 54);
    \u0275\u0275text(13, " File upload is for display purposes only in this demo. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 55)(15, "div", 56);
    \u0275\u0275text(16, " Request Summary ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 57)(18, "div", 58)(19, "span", 59);
    \u0275\u0275text(20, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 60);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 58)(24, "span", 59);
    \u0275\u0275text(25, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 58)(29, "span", 59);
    \u0275\u0275text(30, "Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 58)(34, "span", 59);
    \u0275\u0275text(35, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 58)(39, "span", 59);
    \u0275\u0275text(40, "Organizer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(43, EventRequestWizardComponent_Conditional_14_Conditional_43_Template, 5, 1, "div", 58);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(22);
    \u0275\u0275textInterpolate(ctx_r2.form.controls.title.value);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.form.controls.date.value);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.form.controls.duration_minutes.value, " min");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.form.controls.location.value);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.form.controls.organiser_name.value);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectedServices().length ? 43 : -1);
  }
}
function EventRequestWizardComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275listener("click", function EventRequestWizardComponent_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.previousStep());
    });
    \u0275\u0275elementStart(1, "icon", 62);
    \u0275\u0275text(2, "chevron_left");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 63);
    \u0275\u0275text(4, "Previous");
    \u0275\u0275elementEnd()();
  }
}
function EventRequestWizardComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 64);
    \u0275\u0275listener("click", function EventRequestWizardComponent_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.nextStep());
    });
    \u0275\u0275elementStart(1, "span", 65);
    \u0275\u0275text(2, "Next");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "icon", 62);
    \u0275\u0275text(4, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !ctx_r2.isCurrentStepValid());
  }
}
function EventRequestWizardComponent_Conditional_20_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Submitting...");
    \u0275\u0275elementEnd();
  }
}
function EventRequestWizardComponent_Conditional_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 66);
    \u0275\u0275text(1, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Submit Event Request");
    \u0275\u0275elementEnd();
  }
}
function EventRequestWizardComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 64);
    \u0275\u0275listener("click", function EventRequestWizardComponent_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submitRequest());
    });
    \u0275\u0275conditionalCreate(1, EventRequestWizardComponent_Conditional_20_Conditional_1_Template, 2, 0, "span")(2, EventRequestWizardComponent_Conditional_20_Conditional_2_Template, 4, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r2.submitting());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.submitting() ? 1 : 2);
  }
}
var VENUE_OPTIONS = [
  {
    id: "indoor",
    name: "Indoor Venue",
    icon: "meeting_room",
    description: "Conference rooms, auditoriums, and indoor spaces"
  },
  {
    id: "outdoor",
    name: "Outdoor Venue",
    icon: "park",
    description: "Campus grounds, courtyards, and outdoor areas"
  }
];
var SERVICE_OPTIONS = [
  { key: "venue", label: CATEGORY_DISPLAY_NAMES["venue"], icon: CATEGORY_ICONS["venue"] },
  { key: "dining", label: CATEGORY_DISPLAY_NAMES["dining"], icon: CATEGORY_ICONS["dining"] },
  { key: "av_tech", label: CATEGORY_DISPLAY_NAMES["av_tech"], icon: CATEGORY_ICONS["av_tech"] },
  { key: "safety", label: CATEGORY_DISPLAY_NAMES["safety"], icon: CATEGORY_ICONS["safety"] },
  { key: "events", label: CATEGORY_DISPLAY_NAMES["events"], icon: CATEGORY_ICONS["events"] }
];
var _EventRequestWizardComponent = class _EventRequestWizardComponent {
  constructor() {
    this._router = inject(Router);
    this._approval_state = inject(EventApprovalStateService);
    this.current_step = signal(1);
    this.completed_steps = signal([]);
    this.submitting = signal(false);
    this.steps = [
      { number: 1, label: "Details" },
      { number: 2, label: "Organizer" },
      { number: 3, label: "Requirements" },
      { number: 4, label: "Documents" }
    ];
    this.venue_options = VENUE_OPTIONS;
    this.service_options = SERVICE_OPTIONS;
    this.duration_options = [
      { value: 30, label: "30 min" },
      { value: 60, label: "1 hour" },
      { value: 90, label: "1.5 hours" },
      { value: 120, label: "2 hours" },
      { value: 180, label: "3 hours" },
      { value: 240, label: "4 hours" },
      { value: 360, label: "6 hours" },
      { value: 480, label: "8 hours" },
      { value: 720, label: "12 hours" }
    ];
    this.form = new FormGroup({
      // Step 1
      title: new FormControl("", Validators.required),
      date: new FormControl("", Validators.required),
      start_time: new FormControl("09:00", Validators.required),
      duration_minutes: new FormControl(120, Validators.required),
      venue_type: new FormControl("indoor"),
      location: new FormControl("", Validators.required),
      description: new FormControl(""),
      // Step 2
      organiser_name: new FormControl("", Validators.required),
      organiser_email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      organiser_phone: new FormControl("", Validators.required),
      // Step 3
      services: new FormControl(["venue"]),
      expected_attendance: new FormControl(null),
      is_outdoor: new FormControl(false),
      is_major_event: new FormControl(false),
      special_requirements: new FormControl("")
    });
  }
  isServiceSelected(key) {
    return (this.form.controls.services.value || []).includes(key);
  }
  toggleService(key, checked) {
    const current = this.form.controls.services.value || [];
    if (checked) {
      this.form.controls.services.setValue([...current, key]);
    } else {
      this.form.controls.services.setValue(current.filter((s) => s !== key));
    }
  }
  selectedServices() {
    return this.form.controls.services.value || [];
  }
  selectedServiceNames() {
    return this.selectedServices().map((s) => CATEGORY_DISPLAY_NAMES[s]).join(", ");
  }
  getCategoryName(cat) {
    return CATEGORY_DISPLAY_NAMES[cat];
  }
  isCurrentStepValid() {
    switch (this.current_step()) {
      case 1:
        return this.form.controls.title.valid && this.form.controls.date.valid && this.form.controls.start_time.valid && this.form.controls.duration_minutes.valid && this.form.controls.location.valid;
      case 2:
        return this.form.controls.organiser_name.valid && this.form.controls.organiser_email.valid && this.form.controls.organiser_phone.valid;
      case 3:
        return true;
      case 4:
        return true;
      default:
        return false;
    }
  }
  goToStep(step) {
    if (step <= this.current_step() || this.completed_steps().includes(step - 1)) {
      this.current_step.set(step);
    }
  }
  nextStep() {
    if (!this.isCurrentStepValid())
      return;
    this._markCurrentStepFields();
    const current = this.current_step();
    this.completed_steps.update((steps) => steps.includes(current) ? steps : [...steps, current]);
    this.current_step.set(current + 1);
  }
  previousStep() {
    if (this.current_step() > 1) {
      this.current_step.update((s) => s - 1);
    }
  }
  submitRequest() {
    if (this.submitting())
      return;
    this.submitting.set(true);
    const val = this.form.getRawValue();
    const [year, month, day] = val.date.split("-").map(Number);
    const [hours, minutes] = val.start_time.split(":").map(Number);
    const event_date = new Date(year, month - 1, day, hours, minutes).valueOf();
    const id_base = `appr-${Date.now().toString(36)}`;
    const parent_event = {
      id: `${id_base}-venue`,
      title: val.title,
      category: "venue",
      date: event_date,
      duration_minutes: val.duration_minutes,
      location: val.location,
      organiser: val.organiser_name
    };
    MOCK_APPROVAL_EVENTS.push(parent_event);
    const services = val.services || [];
    for (const svc of services) {
      if (svc === "venue")
        continue;
      const child_event = {
        id: `${id_base}-${svc}`,
        title: `${val.title} \u2014 ${CATEGORY_DISPLAY_NAMES[svc]}`,
        category: svc,
        date: event_date,
        duration_minutes: val.duration_minutes,
        location: val.location,
        organiser: val.organiser_name,
        parent_event: parent_event.id
      };
      MOCK_APPROVAL_EVENTS.push(child_event);
    }
    this._approval_state.refresh();
    setTimeout(() => {
      this.submitting.set(false);
      this._router.navigate(["/entertainment", "events"]);
    }, 600);
  }
  _markCurrentStepFields() {
    switch (this.current_step()) {
      case 1:
        this.form.controls.title.markAsTouched();
        this.form.controls.date.markAsTouched();
        this.form.controls.start_time.markAsTouched();
        this.form.controls.duration_minutes.markAsTouched();
        this.form.controls.location.markAsTouched();
        break;
      case 2:
        this.form.controls.organiser_name.markAsTouched();
        this.form.controls.organiser_email.markAsTouched();
        this.form.controls.organiser_phone.markAsTouched();
        break;
    }
  }
};
_EventRequestWizardComponent.\u0275fac = function EventRequestWizardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EventRequestWizardComponent)();
};
_EventRequestWizardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventRequestWizardComponent, selectors: [["app-event-request-wizard"]], decls: 21, vars: 8, consts: [[1, "bg-base-100", "absolute", "inset-0", "overflow-auto"], [1, "bg-base-200", "sticky", "top-0", "z-10", "mx-auto", "my-2", "flex", "w-full", "max-w-[720px]", "items-center", "justify-between", "rounded-sm", "px-4", "py-2"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", 3, "routerLink"], [1, "mx-auto", "my-4", "flex", "w-full", "max-w-[720px]", "items-center", "justify-center", "px-4"], [1, "mx-auto", "flex", "w-full", "max-w-[720px]", "flex-col", "px-4", "pb-24"], [1, "flex", "flex-col", "space-y-4"], [1, "bg-base-200", "fixed", "bottom-0", "left-1/2", "z-10", "mx-auto", "my-2", "flex", "w-full", "max-w-[720px]", "-translate-x-1/2", "items-center", "justify-between", "rounded-sm", "px-4", "py-2"], ["btn", "", "matRipple", "", 1, "inverse"], ["btn", "", "matRipple", "", 3, "disabled"], [1, "mx-1", "h-0.5", "w-12", 3, "bg-primary", "bg-base-300"], ["matRipple", "", 1, "flex", "flex-col", "items-center", 3, "click", "disabled"], [1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-full", "text-sm", "font-medium", "transition-colors"], [1, "text-lg"], [1, "mt-1", "text-xs"], [1, "mx-1", "h-0.5", "w-12"], [1, "text-lg", "font-medium"], [1, "text-sm", "font-medium"], [1, "text-error"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "placeholder", "e.g. Annual Awards Night", 3, "formControl"], [1, "flex", "flex-wrap", "gap-4"], [1, "min-w-[200px]", "flex-1"], ["matInput", "", "type", "date", 3, "formControl"], [1, "min-w-[140px]", "flex-1"], ["matInput", "", "type", "time", 3, "formControl"], [3, "formControl"], [3, "value"], [1, "flex", "gap-4"], ["matRipple", "", 1, "flex", "flex-1", "flex-col", "items-center", "rounded-lg", "border-2", "p-4", "transition-colors", 3, "border-primary", "bg-base-200", "border-base-300"], ["matInput", "", "placeholder", "e.g. Main Auditorium", 3, "formControl"], ["matInput", "", "rows", "3", "placeholder", "Describe your event...", 3, "formControl"], ["matRipple", "", 1, "flex", "flex-1", "flex-col", "items-center", "rounded-lg", "border-2", "p-4", "transition-colors", 3, "click"], [1, "mb-2", "text-3xl"], [1, "mt-1", "text-center", "text-xs", "opacity-60"], ["matInput", "", "placeholder", "e.g. Sarah Chen", 3, "formControl"], ["matInput", "", "type", "email", "placeholder", "e.g. sarah.chen@ucla.edu", 3, "formControl"], ["matInput", "", "type", "tel", "placeholder", "e.g. +61 400 000 000", 3, "formControl"], [1, "flex", "flex-col", "space-y-2", "rounded-lg", "border", "border-base-300", "p-4"], [3, "checked"], ["matInput", "", "type", "number", "placeholder", "e.g. 150", 3, "formControl"], ["matInput", "", "rows", "3", "placeholder", "Any special requirements or notes...", 3, "formControl"], [1, "rounded-lg", "border", "border-base-300", "bg-base-200", "p-4"], [3, "change", "checked"], [1, "flex", "items-center", "space-x-2"], [1, "mb-2", "text-sm", "font-medium", "opacity-70"], [1, "space-y-1"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "text-warning", "text-base"], [1, "text-xs", "opacity-50"], [1, "flex", "flex-col", "items-center", "justify-center", "rounded-lg", "border-2", "border-dashed", "border-base-300", "p-8", "transition-colors", "hover:border-primary"], [1, "mb-2", "text-4xl", "opacity-40"], [1, "mt-1", "text-xs", "opacity-50"], ["btn", "", "matRipple", "", 1, "inverse", "mt-4", "text-sm"], [1, "text-xs", "italic", "opacity-40"], [1, "mt-4", "rounded-lg", "border", "border-base-300", "bg-base-200", "p-4"], [1, "mb-3", "text-sm", "font-medium"], [1, "space-y-2", "text-sm"], [1, "flex", "justify-between"], [1, "opacity-60"], [1, "font-medium"], ["btn", "", "matRipple", "", 1, "inverse", 3, "click"], [1, "text-xl"], [1, "ml-1"], ["btn", "", "matRipple", "", 3, "click", "disabled"], [1, "mr-1"], [1, "mr-1", "text-xl"]], template: function EventRequestWizardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
    \u0275\u0275text(3, "Request Event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 3)(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4);
    \u0275\u0275repeaterCreate(8, EventRequestWizardComponent_For_9_Template, 7, 18, null, null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 5);
    \u0275\u0275conditionalCreate(11, EventRequestWizardComponent_Conditional_11_Template, 50, 8, "section", 6);
    \u0275\u0275conditionalCreate(12, EventRequestWizardComponent_Conditional_12_Template, 25, 7, "section", 6);
    \u0275\u0275conditionalCreate(13, EventRequestWizardComponent_Conditional_13_Template, 22, 5, "section", 6);
    \u0275\u0275conditionalCreate(14, EventRequestWizardComponent_Conditional_14_Template, 44, 6, "section", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "footer", 7)(16, "div");
    \u0275\u0275conditionalCreate(17, EventRequestWizardComponent_Conditional_17_Template, 5, 0, "button", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div");
    \u0275\u0275conditionalCreate(19, EventRequestWizardComponent_Conditional_19_Template, 5, 1, "button", 9)(20, EventRequestWizardComponent_Conditional_20_Template, 3, 2, "button", 9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c03));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.steps);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.current_step() === 1 ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.current_step() === 2 ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.current_step() === 3 ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.current_step() === 4 ? 14 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.current_step() > 1 ? 17 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.current_step() < 4 ? 19 : 20);
  }
}, dependencies: [
  CommonModule,
  ReactiveFormsModule,
  DefaultValueAccessor,
  NumberValueAccessor,
  NgControlStatus,
  FormControlDirective,
  MatFormFieldModule,
  MatFormField,
  MatError,
  MatInputModule,
  MatInput,
  MatSelectModule,
  MatSelect,
  MatOption,
  MatCheckboxModule,
  MatCheckbox,
  MatRippleModule,
  MatRipple,
  RouterModule,
  RouterLink,
  IconComponent
], encapsulation: 2 });
var EventRequestWizardComponent = _EventRequestWizardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventRequestWizardComponent, [{
    type: Component,
    args: [{ selector: "app-event-request-wizard", template: `
        <div class="bg-base-100 absolute inset-0 overflow-auto">
            <!-- Header -->
            <header
                class="bg-base-200 sticky top-0 z-10 mx-auto my-2 flex w-full max-w-[720px] items-center justify-between rounded-sm px-4 py-2"
            >
                <h2 class="text-xl font-medium">Request Event</h2>
                <a
                    icon
                    matRipple
                    [routerLink]="['/entertainment', 'events']"
                >
                    <icon>close</icon>
                </a>
            </header>

            <!-- Step Indicator -->
            <div
                class="mx-auto my-4 flex w-full max-w-[720px] items-center justify-center px-4"
            >
                @for (step of steps; track step.number; let i = $index) {
                    @if (i > 0) {
                        <div
                            class="mx-1 h-0.5 w-12"
                            [class.bg-primary]="
                                completed_steps().includes(i)
                            "
                            [class.bg-base-300]="
                                !completed_steps().includes(i)
                            "
                        ></div>
                    }
                    <button
                        matRipple
                        class="flex flex-col items-center"
                        (click)="goToStep(step.number)"
                        [disabled]="
                            step.number > current_step() &&
                            !completed_steps().includes(step.number - 1)
                        "
                    >
                        <div
                            class="flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-colors"
                            [class.bg-primary]="
                                current_step() === step.number
                            "
                            [class.text-primary-content]="
                                current_step() === step.number
                            "
                            [class.bg-success]="
                                completed_steps().includes(step.number) &&
                                current_step() !== step.number
                            "
                            [class.text-white]="
                                completed_steps().includes(step.number) &&
                                current_step() !== step.number
                            "
                            [class.bg-base-300]="
                                !completed_steps().includes(step.number) &&
                                current_step() !== step.number
                            "
                        >
                            @if (
                                completed_steps().includes(step.number) &&
                                current_step() !== step.number
                            ) {
                                <icon class="text-lg">done</icon>
                            } @else {
                                {{ step.number }}
                            }
                        </div>
                        <span
                            class="mt-1 text-xs"
                            [class.font-medium]="
                                current_step() === step.number
                            "
                            [class.opacity-60]="
                                current_step() !== step.number
                            "
                        >
                            {{ step.label }}
                        </span>
                    </button>
                }
            </div>

            <!-- Step Content -->
            <div
                class="mx-auto flex w-full max-w-[720px] flex-col px-4 pb-24"
            >
                <!-- Step 1: Event Details -->
                @if (current_step() === 1) {
                    <section class="flex flex-col space-y-4">
                        <h3 class="text-lg font-medium">Event Details</h3>

                        <label class="text-sm font-medium"
                            >Event Title <span class="text-error">*</span></label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [formControl]="form.controls.title"
                                placeholder="e.g. Annual Awards Night"
                            />
                            @if (form.controls.title.touched && form.controls.title.hasError('required')) {
                                <mat-error>Title is required</mat-error>
                            }
                        </mat-form-field>

                        <div class="flex flex-wrap gap-4">
                            <div class="min-w-[200px] flex-1">
                                <label class="text-sm font-medium"
                                    >Date <span class="text-error">*</span></label
                                >
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        matInput
                                        type="date"
                                        [formControl]="form.controls.date"
                                    />
                                </mat-form-field>
                            </div>
                            <div class="min-w-[140px] flex-1">
                                <label class="text-sm font-medium"
                                    >Start Time
                                    <span class="text-error">*</span></label
                                >
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        matInput
                                        type="time"
                                        [formControl]="form.controls.start_time"
                                    />
                                </mat-form-field>
                            </div>
                            <div class="min-w-[140px] flex-1">
                                <label class="text-sm font-medium"
                                    >Duration (minutes)
                                    <span class="text-error">*</span></label
                                >
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <mat-select
                                        [formControl]="
                                            form.controls.duration_minutes
                                        "
                                    >
                                        @for (
                                            d of duration_options;
                                            track d.value
                                        ) {
                                            <mat-option [value]="d.value">
                                                {{ d.label }}
                                            </mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                        </div>

                        <label class="text-sm font-medium">Venue Type</label>
                        <div class="flex gap-4">
                            @for (venue of venue_options; track venue.id) {
                                <button
                                    matRipple
                                    class="flex flex-1 flex-col items-center rounded-lg border-2 p-4 transition-colors"
                                    [class.border-primary]="
                                        form.controls.venue_type.value ===
                                        venue.id
                                    "
                                    [class.bg-base-200]="
                                        form.controls.venue_type.value ===
                                        venue.id
                                    "
                                    [class.border-base-300]="
                                        form.controls.venue_type.value !==
                                        venue.id
                                    "
                                    (click)="
                                        form.controls.venue_type.setValue(
                                            venue.id
                                        )
                                    "
                                >
                                    <icon class="mb-2 text-3xl">{{
                                        venue.icon
                                    }}</icon>
                                    <div class="text-sm font-medium">
                                        {{ venue.name }}
                                    </div>
                                    <div
                                        class="mt-1 text-center text-xs opacity-60"
                                    >
                                        {{ venue.description }}
                                    </div>
                                </button>
                            }
                        </div>

                        <label class="text-sm font-medium"
                            >Location
                            <span class="text-error">*</span></label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [formControl]="form.controls.location"
                                placeholder="e.g. Main Auditorium"
                            />
                            @if (form.controls.location.touched && form.controls.location.hasError('required')) {
                                <mat-error>Location is required</mat-error>
                            }
                        </mat-form-field>

                        <label class="text-sm font-medium">Description</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <textarea
                                matInput
                                [formControl]="form.controls.description"
                                rows="3"
                                placeholder="Describe your event..."
                            ></textarea>
                        </mat-form-field>
                    </section>
                }

                <!-- Step 2: Organizer Info -->
                @if (current_step() === 2) {
                    <section class="flex flex-col space-y-4">
                        <h3 class="text-lg font-medium">
                            Organizer Information
                        </h3>

                        <label class="text-sm font-medium"
                            >Full Name
                            <span class="text-error">*</span></label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [formControl]="
                                    form.controls.organiser_name
                                "
                                placeholder="e.g. Sarah Chen"
                            />
                            @if (form.controls.organiser_name.touched && form.controls.organiser_name.hasError('required')) {
                                <mat-error>Name is required</mat-error>
                            }
                        </mat-form-field>

                        <label class="text-sm font-medium"
                            >Email
                            <span class="text-error">*</span></label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                type="email"
                                [formControl]="
                                    form.controls.organiser_email
                                "
                                placeholder="e.g. sarah.chen@ucla.edu"
                            />
                            @if (form.controls.organiser_email.touched && form.controls.organiser_email.hasError('required')) {
                                <mat-error>Email is required</mat-error>
                            }
                            @if (form.controls.organiser_email.touched && form.controls.organiser_email.hasError('email')) {
                                <mat-error>Invalid email address</mat-error>
                            }
                        </mat-form-field>

                        <label class="text-sm font-medium"
                            >Phone
                            <span class="text-error">*</span></label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                type="tel"
                                [formControl]="
                                    form.controls.organiser_phone
                                "
                                placeholder="e.g. +61 400 000 000"
                            />
                            @if (form.controls.organiser_phone.touched && form.controls.organiser_phone.hasError('required')) {
                                <mat-error>Phone is required</mat-error>
                            }
                        </mat-form-field>
                    </section>
                }

                <!-- Step 3: Requirements -->
                @if (current_step() === 3) {
                    <section class="flex flex-col space-y-4">
                        <h3 class="text-lg font-medium">Requirements</h3>

                        <label class="text-sm font-medium"
                            >Services Required</label
                        >
                        <div
                            class="flex flex-col space-y-2 rounded-lg border border-base-300 p-4"
                        >
                            @for (
                                svc of service_options;
                                track svc.key
                            ) {
                                <mat-checkbox
                                    [checked]="
                                        isServiceSelected(svc.key)
                                    "
                                    (change)="
                                        toggleService(
                                            svc.key,
                                            $event.checked
                                        )
                                    "
                                >
                                    <div
                                        class="flex items-center space-x-2"
                                    >
                                        <icon class="text-lg">{{
                                            svc.icon
                                        }}</icon>
                                        <span>{{ svc.label }}</span>
                                    </div>
                                </mat-checkbox>
                            }
                        </div>

                        <label class="text-sm font-medium"
                            >Expected Attendance</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                type="number"
                                [formControl]="
                                    form.controls.expected_attendance
                                "
                                placeholder="e.g. 150"
                            />
                        </mat-form-field>

                        <div class="flex gap-4">
                            <mat-checkbox
                                [formControl]="
                                    form.controls.is_outdoor
                                "
                            >
                                Outdoor Event
                            </mat-checkbox>
                            <mat-checkbox
                                [formControl]="
                                    form.controls.is_major_event
                                "
                            >
                                Major Event
                            </mat-checkbox>
                        </div>

                        <label class="text-sm font-medium"
                            >Special Requirements</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <textarea
                                matInput
                                [formControl]="
                                    form.controls.special_requirements
                                "
                                rows="3"
                                placeholder="Any special requirements or notes..."
                            ></textarea>
                        </mat-form-field>

                        <!-- Approval Preview -->
                        @if (selectedServices().length > 0) {
                            <div
                                class="rounded-lg border border-base-300 bg-base-200 p-4"
                            >
                                <div
                                    class="mb-2 text-sm font-medium opacity-70"
                                >
                                    Approval Preview
                                </div>
                                <div class="space-y-1">
                                    @for (
                                        svc of selectedServices();
                                        track svc
                                    ) {
                                        <div
                                            class="flex items-center space-x-2 text-sm"
                                        >
                                            <icon
                                                class="text-warning text-base"
                                                >schedule</icon
                                            >
                                            <span>{{
                                                getCategoryName(svc)
                                            }}</span>
                                            <span
                                                class="text-xs opacity-50"
                                                >&mdash; Pending
                                                approval</span
                                            >
                                        </div>
                                    }
                                </div>
                            </div>
                        }
                    </section>
                }

                <!-- Step 4: Documents -->
                @if (current_step() === 4) {
                    <section class="flex flex-col space-y-4">
                        <h3 class="text-lg font-medium">Documents</h3>

                        <div
                            class="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-base-300 p-8 transition-colors hover:border-primary"
                        >
                            <icon class="mb-2 text-4xl opacity-40"
                                >cloud_upload</icon
                            >
                            <div class="text-sm font-medium">
                                Drag & drop files here
                            </div>
                            <div class="mt-1 text-xs opacity-50">
                                or click to browse (PDF, DOCX, images)
                            </div>
                            <button
                                btn
                                matRipple
                                class="inverse mt-4 text-sm"
                            >
                                Browse Files
                            </button>
                        </div>

                        <div class="text-xs italic opacity-40">
                            File upload is for display purposes only in
                            this demo.
                        </div>

                        <!-- Summary -->
                        <div
                            class="mt-4 rounded-lg border border-base-300 bg-base-200 p-4"
                        >
                            <div class="mb-3 text-sm font-medium">
                                Request Summary
                            </div>
                            <div class="space-y-2 text-sm">
                                <div class="flex justify-between">
                                    <span class="opacity-60">Title</span>
                                    <span class="font-medium">{{
                                        form.controls.title.value
                                    }}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="opacity-60">Date</span>
                                    <span>{{
                                        form.controls.date.value
                                    }}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="opacity-60"
                                        >Duration</span
                                    >
                                    <span
                                        >{{
                                            form.controls
                                                .duration_minutes.value
                                        }}
                                        min</span
                                    >
                                </div>
                                <div class="flex justify-between">
                                    <span class="opacity-60"
                                        >Location</span
                                    >
                                    <span>{{
                                        form.controls.location.value
                                    }}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="opacity-60"
                                        >Organizer</span
                                    >
                                    <span>{{
                                        form.controls.organiser_name
                                            .value
                                    }}</span>
                                </div>
                                @if (selectedServices().length) {
                                    <div class="flex justify-between">
                                        <span class="opacity-60"
                                            >Services</span
                                        >
                                        <span>{{
                                            selectedServiceNames()
                                        }}</span>
                                    </div>
                                }
                            </div>
                        </div>
                    </section>
                }
            </div>

            <!-- Sticky Footer -->
            <footer
                class="bg-base-200 fixed bottom-0 left-1/2 z-10 mx-auto my-2 flex w-full max-w-[720px] -translate-x-1/2 items-center justify-between rounded-sm px-4 py-2"
            >
                <div>
                    @if (current_step() > 1) {
                        <button
                            btn
                            matRipple
                            class="inverse"
                            (click)="previousStep()"
                        >
                            <icon class="text-xl">chevron_left</icon>
                            <span class="ml-1">Previous</span>
                        </button>
                    }
                </div>
                <div>
                    @if (current_step() < 4) {
                        <button
                            btn
                            matRipple
                            [disabled]="!isCurrentStepValid()"
                            (click)="nextStep()"
                        >
                            <span class="mr-1">Next</span>
                            <icon class="text-xl">chevron_right</icon>
                        </button>
                    } @else {
                        <button
                            btn
                            matRipple
                            [disabled]="submitting()"
                            (click)="submitRequest()"
                        >
                            @if (submitting()) {
                                <span>Submitting...</span>
                            } @else {
                                <icon class="mr-1 text-xl">send</icon>
                                <span>Submit Event Request</span>
                            }
                        </button>
                    }
                </div>
            </footer>
        </div>
    `, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatCheckboxModule,
      MatRippleModule,
      RouterModule,
      IconComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventRequestWizardComponent, { className: "EventRequestWizardComponent", filePath: "apps/concierge/src/app/events/event-request-wizard.component.ts", lineNumber: 634 });
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

// apps/concierge/src/app/events/event-approvals.component.ts
var _forTrack02 = ($index, $item) => $item.value;
var _forTrack12 = ($index, $item) => $item.category;
var _forTrack22 = ($index, $item) => $item.id;
function EventApprovalsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" Declined Events (", ctx_r0.visible_events().length, ") ");
  }
}
function EventApprovalsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" Pending Approvals (", ctx_r0.visible_events().length, ") ");
  }
}
function EventApprovalsComponent_Conditional_8_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r3 = ctx.$implicit;
    \u0275\u0275property("value", role_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r3.label, " ");
  }
}
function EventApprovalsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 5)(1, "mat-select", 6);
    \u0275\u0275listener("ngModelChange", function EventApprovalsComponent_Conditional_8_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0._approval_state.setRole($event));
    });
    \u0275\u0275repeaterCreate(2, EventApprovalsComponent_Conditional_8_For_3_Template, 2, 2, "mat-option", 7, _forTrack02);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r0.role());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.role_list);
  }
}
function EventApprovalsComponent_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "icon", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.show_declined() ? "cancel" : "check_circle");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.show_declined() ? "No declined events" : "No pending approvals for this role");
  }
}
function EventApprovalsComponent_Conditional_9_Conditional_1_For_1_For_8_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 25)(1, "div", 30);
    \u0275\u0275text(2, " Approved ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "icon", 31);
    \u0275\u0275text(4, "done");
    \u0275\u0275elementEnd()();
  }
}
function EventApprovalsComponent_Conditional_9_Conditional_1_For_1_For_8_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 26)(1, "div", 30);
    \u0275\u0275text(2, " Declined ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "icon", 32);
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
  }
}
function EventApprovalsComponent_Conditional_9_Conditional_1_For_1_For_8_Conditional_22_Conditional_10_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function EventApprovalsComponent_Conditional_9_Conditional_1_For_1_For_8_Conditional_22_Conditional_10_For_6_Template_button_click_0_listener() {
      const r_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const event_r5 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.delegateTo(event_r5.id, r_r8.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r8.label, " ");
  }
}
function EventApprovalsComponent_Conditional_9_Conditional_1_For_1_For_8_Conditional_22_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 35)(1, "icon", 36);
    \u0275\u0275text(2, "person_add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "mat-menu", null, 0);
    \u0275\u0275repeaterCreate(5, EventApprovalsComponent_Conditional_9_Conditional_1_For_1_For_8_Conditional_22_Conditional_10_For_6_Template, 2, 1, "button", 37, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const delegateMenu_r9 = \u0275\u0275reference(4);
    const event_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("matMenuTriggerFor", delegateMenu_r9);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.getDelegableRoles(event_r5.category));
  }
}
function EventApprovalsComponent_Conditional_9_Conditional_1_For_1_For_8_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function EventApprovalsComponent_Conditional_9_Conditional_1_For_1_For_8_Conditional_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const event_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.setStatus(event_r5.id, "approved"));
    });
    \u0275\u0275elementStart(1, "div", 30);
    \u0275\u0275text(2, " Approve ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "icon", 31);
    \u0275\u0275text(4, "done");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 34);
    \u0275\u0275listener("click", function EventApprovalsComponent_Conditional_9_Conditional_1_For_1_For_8_Conditional_22_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const event_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.setStatus(event_r5.id, "declined"));
    });
    \u0275\u0275elementStart(6, "div", 30);
    \u0275\u0275text(7, " Decline ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "icon", 32);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, EventApprovalsComponent_Conditional_9_Conditional_1_For_1_For_8_Conditional_22_Conditional_10_Template, 7, 1);
  }
  if (rf & 2) {
    const event_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r0.can_delegate() && !ctx_r0.delegated()[event_r5.id] && ctx_r0.getDelegableRoles(event_r5.category).length ? 10 : -1);
  }
}
function EventApprovalsComponent_Conditional_9_Conditional_1_For_1_For_8_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function EventApprovalsComponent_Conditional_9_Conditional_1_For_1_For_8_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const event_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.setStatus(event_r5.id, "declined"));
    });
    \u0275\u0275elementStart(1, "div", 30);
    \u0275\u0275text(2, " Reject ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "icon", 32);
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
  }
}
function EventApprovalsComponent_Conditional_9_Conditional_1_For_1_For_8_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "View only");
    \u0275\u0275elementEnd();
  }
}
function EventApprovalsComponent_Conditional_9_Conditional_1_For_1_For_8_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "icon", 39);
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Delegated to ", ctx_r0.getRoleName(ctx_r0.delegated()[event_r5.id]), " ");
  }
}
function EventApprovalsComponent_Conditional_9_Conditional_1_For_1_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "div", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 18);
    \u0275\u0275listener("click", function EventApprovalsComponent_Conditional_9_Conditional_1_For_1_For_8_Template_button_click_4_listener() {
      const event_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.showSummary(event_r5));
    });
    \u0275\u0275elementStart(5, "icon", 19);
    \u0275\u0275text(6, "info");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 21)(10, "icon", 22);
    \u0275\u0275text(11, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 23)(15, "icon", 22);
    \u0275\u0275text(16, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 24);
    \u0275\u0275conditionalCreate(20, EventApprovalsComponent_Conditional_9_Conditional_1_For_1_For_8_Conditional_20_Template, 5, 0, "button", 25)(21, EventApprovalsComponent_Conditional_9_Conditional_1_For_1_For_8_Conditional_21_Template, 5, 0, "button", 26)(22, EventApprovalsComponent_Conditional_9_Conditional_1_For_1_For_8_Conditional_22_Template, 11, 1)(23, EventApprovalsComponent_Conditional_9_Conditional_1_For_1_For_8_Conditional_23_Template, 5, 0, "button", 27)(24, EventApprovalsComponent_Conditional_9_Conditional_1_For_1_For_8_Conditional_24_Template, 2, 0, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(25, EventApprovalsComponent_Conditional_9_Conditional_1_For_1_For_8_Conditional_25_Template, 5, 1, "div", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_26_0;
    const event_r5 = ctx.$implicit;
    const group_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", event_r5.title, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", ctx_r0.formatDate(event_r5.date), " \xB7 ", ctx_r0.formatTime(event_r5.date), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(event_r5.location);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(event_r5.organiser);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_26_0 = ctx_r0.status()) == null ? null : tmp_26_0[event_r5.id]) === "approved" ? 20 : ((tmp_26_0 = ctx_r0.status()) == null ? null : tmp_26_0[event_r5.id]) === "declined" ? 21 : group_r11.permission === "approve" ? 22 : group_r11.permission === "reject_safety" ? 23 : 24);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.delegated()[event_r5.id] ? 25 : -1);
  }
}
function EventApprovalsComponent_Conditional_9_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "icon", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 14);
    \u0275\u0275repeaterCreate(7, EventApprovalsComponent_Conditional_9_Conditional_1_For_1_For_8_Template, 26, 7, "div", 15, _forTrack22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r11 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(group_r11.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r11.label);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r11.events);
  }
}
function EventApprovalsComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, EventApprovalsComponent_Conditional_9_Conditional_1_For_1_Template, 9, 2, "div", 11, _forTrack12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r0.grouped_events());
  }
}
function EventApprovalsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EventApprovalsComponent_Conditional_9_Conditional_0_Template, 5, 2, "div", 8)(1, EventApprovalsComponent_Conditional_9_Conditional_1_Template, 2, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.visible_events().length === 0 ? 0 : 1);
  }
}
var _EventApprovalsComponent = class _EventApprovalsComponent {
  constructor() {
    this._approval_state = inject(EventApprovalStateService);
    this._dialog = inject(MatDialog);
    this.is_mock = Pn();
    this.collapsed = false;
    this.show_declined = input(false);
    this.delegated = signal({});
    this.status = toSignal(this._approval_state.status$, {
      initialValue: {}
    });
    this.role = toSignal(this._approval_state.role$, {
      initialValue: "global_admin"
    });
    this.role_list = Object.keys(ROLE_DISPLAY_NAMES).map((value) => ({
      value,
      label: ROLE_DISPLAY_NAMES[value]
    }));
    this.visible_events = computed(() => {
      const role = this.role();
      const statuses = this.status();
      const show_declined = this.show_declined();
      const perms = ROLE_PERMISSIONS[role];
      const visible_categories = [
        ...perms.can_approve,
        ...perms.can_view
      ];
      if (perms.reject_safety && !visible_categories.includes("safety")) {
        visible_categories.push("safety");
      }
      let events = MOCK_APPROVAL_EVENTS.filter((e) => visible_categories.includes(e.category));
      if (show_declined) {
        events = events.filter((e) => statuses[e.id] === "declined");
      } else {
        events = events.filter((e) => !statuses[e.id]);
      }
      return events;
    });
    this.grouped_events = computed(() => {
      const role = this.role();
      const perms = ROLE_PERMISSIONS[role];
      const events = this.visible_events();
      this.status();
      const category_set = new Set(events.map((e) => e.category));
      const groups = [];
      for (const cat of category_set) {
        let permission = "view";
        if (perms.can_approve.includes(cat)) {
          permission = "approve";
        } else if (cat === "safety" && perms.reject_safety) {
          permission = "reject_safety";
        }
        groups.push({
          category: cat,
          label: CATEGORY_DISPLAY_NAMES[cat],
          icon: CATEGORY_ICONS[cat],
          permission,
          events: events.filter((e) => e.category === cat)
        });
      }
      return groups;
    });
    this.can_delegate = computed(() => {
      const role = this.role();
      return role === "global_admin" || role === "campus_admin";
    });
  }
  showSummary(event) {
    this._dialog.open(EventSummaryDialogComponent, {
      data: { event }
    });
  }
  getParentTitle(parent_id) {
    const parent = MOCK_APPROVAL_EVENTS.find((e) => e.id === parent_id);
    return parent?.title || "";
  }
  getChildren(event_id) {
    return MOCK_APPROVAL_EVENTS.filter((e) => e.parent_event === event_id);
  }
  getCategoryIcon(category) {
    return CATEGORY_ICONS[category];
  }
  getCategoryName(category) {
    return CATEGORY_DISPLAY_NAMES[category];
  }
  getDelegableRoles(category) {
    return Object.keys(ROLE_PERMISSIONS).filter((r) => r !== this.role() && ROLE_PERMISSIONS[r].can_approve.includes(category)).map((r) => ({ value: r, label: ROLE_DISPLAY_NAMES[r] }));
  }
  delegateTo(event_id, role) {
    this.delegated.update((d) => __spreadProps(__spreadValues({}, d), { [event_id]: role }));
  }
  getRoleName(role) {
    return ROLE_DISPLAY_NAMES[role] || role;
  }
  setStatus(event_id, status) {
    this._approval_state.setStatus(event_id, status);
  }
  formatDate(ts) {
    return format(ts, "EEE, d MMM");
  }
  formatTime(ts) {
    return format(ts, "h:mm a");
  }
};
_EventApprovalsComponent.\u0275fac = function EventApprovalsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EventApprovalsComponent)();
};
_EventApprovalsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventApprovalsComponent, selectors: [["event-approvals"]], inputs: { show_declined: [1, "show_declined"] }, decls: 10, vars: 5, consts: [["delegateMenu", "matMenu"], [1, "mb-4", "rounded", "border", "border-base-300", "bg-base-100", "p-4"], [1, "mb-3", "flex", "items-center", "justify-between"], [1, "flex", "items-center", "space-x-1", "text-base", "font-medium", 3, "click"], [1, "text-lg", "transition-transform"], ["appearance", "outline", 1, "no-subscript", "w-56"], ["placeholder", "Select Role", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "flex", "flex-col", "items-center", "justify-center", "py-8", "opacity-50"], [1, "mb-2", "text-4xl"], [1, "text-sm"], [1, "mb-4"], [1, "mb-2", "flex", "items-center", "space-x-2", "text-sm", "font-medium", "opacity-70"], [1, "text-base"], [1, "flex", "flex-wrap", "gap-3"], [1, "w-80", "rounded-lg", "border", "border-base-300", "bg-base-100", "p-3"], [1, "mb-1", "flex", "items-center", "justify-between"], [1, "text-sm", "font-semibold"], ["icon", "", "matRipple", "", 1, "h-7", "w-7", 3, "click"], [1, "text-base", "opacity-60"], [1, "mb-1", "text-xs", "opacity-60"], [1, "mb-1", "flex", "items-center", "space-x-1", "text-xs", "opacity-60"], [1, "text-xs"], [1, "mb-2", "flex", "items-center", "space-x-1", "text-xs", "opacity-60"], [1, "flex", "items-center", "space-x-2", "pt-1"], ["btn", "", "disabled", "", 1, "border-success", "bg-success-light", "flex", "min-w-0", "flex-1", "items-center", "space-x-1", "text-black"], ["btn", "", "disabled", "", 1, "border-error", "bg-error-light", "flex", "min-w-0", "flex-1", "items-center", "space-x-1", "text-black"], ["btn", "", "matRipple", "", 1, "border-error", "bg-error-light", "flex", "min-w-0", "flex-1", "items-center", "space-x-1", "text-black"], [1, "text-xs", "italic", "opacity-40"], [1, "mt-2", "flex", "items-center", "space-x-1", "text-xs"], [1, "ml-2"], [1, "text-success", "text-2xl"], [1, "text-error", "text-2xl"], ["btn", "", "matRipple", "", 1, "border-success", "bg-success-light", "flex", "min-w-0", "flex-1", "items-center", "space-x-1", "text-black", 3, "click"], ["btn", "", "matRipple", "", 1, "border-error", "bg-error-light", "flex", "min-w-0", "flex-1", "items-center", "space-x-1", "text-black", 3, "click"], ["btn", "", "matRipple", "", 1, "border-base-300", "bg-base-200", "flex", "items-center", "space-x-1", 3, "matMenuTriggerFor"], [1, "text-xl"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], [1, "text-info", "text-sm"], [1, "text-info", "font-medium"]], template: function EventApprovalsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
    \u0275\u0275listener("click", function EventApprovalsComponent_Template_button_click_2_listener() {
      return ctx.collapsed = !ctx.collapsed;
    });
    \u0275\u0275elementStart(3, "icon", 4);
    \u0275\u0275text(4, "expand_more");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275conditionalCreate(6, EventApprovalsComponent_Conditional_6_Template, 1, 1)(7, EventApprovalsComponent_Conditional_7_Template, 1, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, EventApprovalsComponent_Conditional_8_Template, 4, 1, "mat-form-field", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, EventApprovalsComponent_Conditional_9_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("transform", ctx.collapsed ? "rotate(-90deg)" : "rotate(0)");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.show_declined() ? 6 : 7);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.is_mock ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.collapsed ? 9 : -1);
  }
}, dependencies: [
  CommonModule,
  FormsModule,
  NgControlStatus,
  NgModel,
  MatSelectModule,
  MatFormField,
  MatSelect,
  MatOption,
  MatFormFieldModule,
  MatRippleModule,
  MatRipple,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatDialogModule,
  IconComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=event-approvals.component.css.map */"] });
var EventApprovalsComponent = _EventApprovalsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventApprovalsComponent, [{
    type: Component,
    args: [{ selector: "event-approvals", template: `
        <div class="mb-4 rounded border border-base-300 bg-base-100 p-4">
            <!-- Header row -->
            <div class="mb-3 flex items-center justify-between">
                <button
                    class="flex items-center space-x-1 text-base font-medium"
                    (click)="collapsed = !collapsed"
                >
                    <icon
                        class="text-lg transition-transform"
                        [style.transform]="
                            collapsed ? 'rotate(-90deg)' : 'rotate(0)'
                        "
                        >expand_more</icon
                    >
                    <span>
                        @if (show_declined()) {
                            Declined Events ({{ visible_events().length }})
                        } @else {
                            Pending Approvals ({{
                                visible_events().length
                            }})
                        }
                    </span>
                </button>

                @if (is_mock) {
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript w-56"
                    >
                        <mat-select
                            [ngModel]="role()"
                            (ngModelChange)="
                                _approval_state.setRole($event)
                            "
                            placeholder="Select Role"
                        >
                            @for (role of role_list; track role.value) {
                                <mat-option [value]="role.value">
                                    {{ role.label }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                }
            </div>

            <!-- Collapsible body -->
            @if (!collapsed) {
                @if (visible_events().length === 0) {
                    <div
                        class="flex flex-col items-center justify-center py-8 opacity-50"
                    >
                        <icon class="mb-2 text-4xl">{{
                            show_declined() ? 'cancel' : 'check_circle'
                        }}</icon>
                        <span class="text-sm">{{
                            show_declined()
                                ? 'No declined events'
                                : 'No pending approvals for this role'
                        }}</span>
                    </div>
                } @else {
                    @for (
                        group of grouped_events();
                        track group.category
                    ) {
                        <div class="mb-4">
                            <div
                                class="mb-2 flex items-center space-x-2 text-sm font-medium opacity-70"
                            >
                                <icon class="text-base">{{
                                    group.icon
                                }}</icon>
                                <span>{{ group.label }}</span>
                            </div>
                            <div class="flex flex-wrap gap-3">
                                @for (
                                    event of group.events;
                                    track event.id
                                ) {
                                    <div
                                        class="w-80 rounded-lg border border-base-300 bg-base-100 p-3"
                                    >
                                        <div
                                            class="mb-1 flex items-center justify-between"
                                        >
                                            <div
                                                class="text-sm font-semibold"
                                            >
                                                {{ event.title }}
                                            </div>
                                            <button
                                                icon
                                                matRipple
                                                class="h-7 w-7"
                                                (click)="
                                                    showSummary(event)
                                                "
                                            >
                                                <icon
                                                    class="text-base opacity-60"
                                                    >info</icon
                                                >
                                            </button>
                                        </div>
                                        <div
                                            class="mb-1 text-xs opacity-60"
                                        >
                                            {{
                                                formatDate(event.date)
                                            }}
                                            &middot;
                                            {{
                                                formatTime(event.date)
                                            }}
                                        </div>
                                        <div
                                            class="mb-1 flex items-center space-x-1 text-xs opacity-60"
                                        >
                                            <icon class="text-xs"
                                                >location_on</icon
                                            >
                                            <span>{{
                                                event.location
                                            }}</span>
                                        </div>
                                        <div
                                            class="mb-2 flex items-center space-x-1 text-xs opacity-60"
                                        >
                                            <icon class="text-xs"
                                                >person</icon
                                            >
                                            <span>{{
                                                event.organiser
                                            }}</span>
                                        </div>

                                        <!-- Action buttons or status -->
                                        <div
                                            class="flex items-center space-x-2 pt-1"
                                        >
                                            @if (
                                                status()?.[event.id] ===
                                                'approved'
                                            ) {
                                                <button
                                                    btn
                                                    disabled
                                                    class="border-success bg-success-light flex min-w-0 flex-1 items-center space-x-1 text-black"
                                                >
                                                    <div class="ml-2">
                                                        Approved
                                                    </div>
                                                    <icon
                                                        class="text-success text-2xl"
                                                        >done</icon
                                                    >
                                                </button>
                                            } @else if (
                                                status()?.[event.id] ===
                                                'declined'
                                            ) {
                                                <button
                                                    btn
                                                    disabled
                                                    class="border-error bg-error-light flex min-w-0 flex-1 items-center space-x-1 text-black"
                                                >
                                                    <div class="ml-2">
                                                        Declined
                                                    </div>
                                                    <icon
                                                        class="text-error text-2xl"
                                                        >close</icon
                                                    >
                                                </button>
                                            } @else if (
                                                group.permission ===
                                                'approve'
                                            ) {
                                                <button
                                                    btn
                                                    matRipple
                                                    class="border-success bg-success-light flex min-w-0 flex-1 items-center space-x-1 text-black"
                                                    (click)="
                                                        setStatus(
                                                            event.id,
                                                            'approved'
                                                        )
                                                    "
                                                >
                                                    <div class="ml-2">
                                                        Approve
                                                    </div>
                                                    <icon
                                                        class="text-success text-2xl"
                                                        >done</icon
                                                    >
                                                </button>
                                                <button
                                                    btn
                                                    matRipple
                                                    class="border-error bg-error-light flex min-w-0 flex-1 items-center space-x-1 text-black"
                                                    (click)="
                                                        setStatus(
                                                            event.id,
                                                            'declined'
                                                        )
                                                    "
                                                >
                                                    <div class="ml-2">
                                                        Decline
                                                    </div>
                                                    <icon
                                                        class="text-error text-2xl"
                                                        >close</icon
                                                    >
                                                </button>
                                                @if (
                                                    can_delegate() &&
                                                    !delegated()[
                                                        event.id
                                                    ] &&
                                                    getDelegableRoles(
                                                        event.category
                                                    ).length
                                                ) {
                                                    <button
                                                        btn
                                                        matRipple
                                                        class="border-base-300 bg-base-200 flex items-center space-x-1"
                                                        [matMenuTriggerFor]="
                                                            delegateMenu
                                                        "
                                                    >
                                                        <icon
                                                            class="text-xl"
                                                            >person_add</icon
                                                        >
                                                    </button>
                                                    <mat-menu
                                                        #delegateMenu="matMenu"
                                                    >
                                                        @for (
                                                            r of getDelegableRoles(
                                                                event.category
                                                            );
                                                            track r.value
                                                        ) {
                                                            <button
                                                                mat-menu-item
                                                                (click)="
                                                                    delegateTo(
                                                                        event.id,
                                                                        r.value
                                                                    )
                                                                "
                                                            >
                                                                {{
                                                                    r.label
                                                                }}
                                                            </button>
                                                        }
                                                    </mat-menu>
                                                }
                                            } @else if (
                                                group.permission ===
                                                'reject_safety'
                                            ) {
                                                <button
                                                    btn
                                                    matRipple
                                                    class="border-error bg-error-light flex min-w-0 flex-1 items-center space-x-1 text-black"
                                                    (click)="
                                                        setStatus(
                                                            event.id,
                                                            'declined'
                                                        )
                                                    "
                                                >
                                                    <div class="ml-2">
                                                        Reject
                                                    </div>
                                                    <icon
                                                        class="text-error text-2xl"
                                                        >close</icon
                                                    >
                                                </button>
                                            } @else {
                                                <span
                                                    class="text-xs italic opacity-40"
                                                    >View only</span
                                                >
                                            }
                                        </div>

                                        <!-- Delegation status -->
                                        @if (delegated()[event.id]) {
                                            <div
                                                class="mt-2 flex items-center space-x-1 text-xs"
                                            >
                                                <icon
                                                    class="text-info text-sm"
                                                    >person</icon
                                                >
                                                <span
                                                    class="text-info font-medium"
                                                >
                                                    Delegated to
                                                    {{
                                                        getRoleName(
                                                            delegated()[
                                                                event.id
                                                            ]
                                                        )
                                                    }}
                                                </span>
                                            </div>
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                    }
                }
            }
        </div>
    `, imports: [
      CommonModule,
      FormsModule,
      MatSelectModule,
      MatFormFieldModule,
      MatRippleModule,
      MatMenuModule,
      MatDialogModule,
      IconComponent
    ], styles: ["/* angular:styles/component:css;aca37b045377af9e61ae87ec9ceba230614f528def48741d3190431076d12a3b;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/events/event-approvals.component.ts */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=event-approvals.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventApprovalsComponent, { className: "EventApprovalsComponent", filePath: "apps/concierge/src/app/events/event-approvals.component.ts", lineNumber: 379 });
})();

// apps/concierge/src/app/events/event-listing.component.ts
var _c04 = (a0) => ({ key: "date", name: "Event", content: a0 });
var _c12 = (a0) => ({ key: "location", name: "Location", content: a0, size: "12rem", sortable: false });
var _c2 = (a0) => ({ key: "req_venue", name: "Venue", content: a0, size: "5rem", sortable: false });
var _c3 = (a0) => ({ key: "req_dining", name: "Dining", content: a0, size: "5rem", sortable: false });
var _c4 = (a0) => ({ key: "req_av", name: "AV/Tech", content: a0, size: "5rem", sortable: false });
var _c5 = (a0) => ({ key: "req_safety", name: "Safety", content: a0, size: "5rem", sortable: false });
var _c6 = (a0) => ({ key: "req_events", name: "Events", content: a0, size: "5rem", sortable: false });
var _c7 = (a0) => ({ key: "actions", name: " ", content: a0, size: "4rem", sortable: false });
var _c8 = (a0, a1, a2, a3, a4, a5, a6, a7) => [a0, a1, a2, a3, a4, a5, a6, a7];
var _c9 = (a0) => ["/entertainment", "events", "manage", a0];
function EventListingComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275listener("click", function EventListingComponent_ng_template_4_Template_div_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showSummary(item_r2));
    });
    \u0275\u0275elementStart(1, "div", 13)(2, "div", 14);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 16)(9, "div", 17);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 19);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 6, item_r2.date, "MMM"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 9, item_r2.date, "d"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(13, 12, item_r2.date, "EEEE, " + ctx_r2.time_format), " \u2013 ", \u0275\u0275pipeBind2(14, 15, item_r2.date + item_r2.duration * 60 * 1e3, ctx_r2.time_format), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r2.host, " ");
  }
}
function EventListingComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.location, " ");
  }
}
function EventListingComponent_ng_template_8_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22)(1, "icon", 26);
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function EventListingComponent_ng_template_8_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23)(1, "icon", 26);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function EventListingComponent_ng_template_8_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24)(1, "icon", 26);
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd()();
  }
}
function EventListingComponent_ng_template_8_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function EventListingComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275conditionalCreate(1, EventListingComponent_ng_template_8_Case_1_Template, 3, 0, "span", 22)(2, EventListingComponent_ng_template_8_Case_2_Template, 3, 0, "span", 23)(3, EventListingComponent_ng_template_8_Case_3_Template, 3, 0, "span", 24)(4, EventListingComponent_ng_template_8_Case_4_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    const item_r5 = ctx.row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_10_0 = ctx_r2.reqStatus(item_r5, "venue")) === "approved" ? 1 : tmp_10_0 === "declined" ? 2 : tmp_10_0 === "pending" ? 3 : 4);
  }
}
function EventListingComponent_ng_template_10_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22)(1, "icon", 26);
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function EventListingComponent_ng_template_10_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23)(1, "icon", 26);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function EventListingComponent_ng_template_10_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24)(1, "icon", 26);
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd()();
  }
}
function EventListingComponent_ng_template_10_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function EventListingComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275conditionalCreate(1, EventListingComponent_ng_template_10_Case_1_Template, 3, 0, "span", 22)(2, EventListingComponent_ng_template_10_Case_2_Template, 3, 0, "span", 23)(3, EventListingComponent_ng_template_10_Case_3_Template, 3, 0, "span", 24)(4, EventListingComponent_ng_template_10_Case_4_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    const item_r6 = ctx.row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_10_0 = ctx_r2.reqStatus(item_r6, "dining")) === "approved" ? 1 : tmp_10_0 === "declined" ? 2 : tmp_10_0 === "pending" ? 3 : 4);
  }
}
function EventListingComponent_ng_template_12_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22)(1, "icon", 26);
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function EventListingComponent_ng_template_12_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23)(1, "icon", 26);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function EventListingComponent_ng_template_12_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24)(1, "icon", 26);
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd()();
  }
}
function EventListingComponent_ng_template_12_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function EventListingComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275conditionalCreate(1, EventListingComponent_ng_template_12_Case_1_Template, 3, 0, "span", 22)(2, EventListingComponent_ng_template_12_Case_2_Template, 3, 0, "span", 23)(3, EventListingComponent_ng_template_12_Case_3_Template, 3, 0, "span", 24)(4, EventListingComponent_ng_template_12_Case_4_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    const item_r7 = ctx.row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_10_0 = ctx_r2.reqStatus(item_r7, "av_tech")) === "approved" ? 1 : tmp_10_0 === "declined" ? 2 : tmp_10_0 === "pending" ? 3 : 4);
  }
}
function EventListingComponent_ng_template_14_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22)(1, "icon", 26);
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function EventListingComponent_ng_template_14_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23)(1, "icon", 26);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function EventListingComponent_ng_template_14_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24)(1, "icon", 26);
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd()();
  }
}
function EventListingComponent_ng_template_14_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function EventListingComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275conditionalCreate(1, EventListingComponent_ng_template_14_Case_1_Template, 3, 0, "span", 22)(2, EventListingComponent_ng_template_14_Case_2_Template, 3, 0, "span", 23)(3, EventListingComponent_ng_template_14_Case_3_Template, 3, 0, "span", 24)(4, EventListingComponent_ng_template_14_Case_4_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    const item_r8 = ctx.row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_10_0 = ctx_r2.reqStatus(item_r8, "safety")) === "approved" ? 1 : tmp_10_0 === "declined" ? 2 : tmp_10_0 === "pending" ? 3 : 4);
  }
}
function EventListingComponent_ng_template_16_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22)(1, "icon", 26);
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function EventListingComponent_ng_template_16_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23)(1, "icon", 26);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function EventListingComponent_ng_template_16_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24)(1, "icon", 26);
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd()();
  }
}
function EventListingComponent_ng_template_16_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function EventListingComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275conditionalCreate(1, EventListingComponent_ng_template_16_Case_1_Template, 3, 0, "span", 22)(2, EventListingComponent_ng_template_16_Case_2_Template, 3, 0, "span", 23)(3, EventListingComponent_ng_template_16_Case_3_Template, 3, 0, "span", 24)(4, EventListingComponent_ng_template_16_Case_4_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    const item_r9 = ctx.row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_10_0 = ctx_r2.reqStatus(item_r9, "events")) === "approved" ? 1 : tmp_10_0 === "declined" ? 2 : tmp_10_0 === "pending" ? 3 : 4);
  }
}
function EventListingComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27)(1, "icon");
    \u0275\u0275text(2, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "mat-menu", null, 8)(5, "a", 28)(6, "div", 29)(7, "icon", 30);
    \u0275\u0275text(8, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 31);
    \u0275\u0275text(10, "Edit Event");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 32);
    \u0275\u0275listener("click", function EventListingComponent_ng_template_18_Template_button_click_11_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeEvent(row_r11));
    });
    \u0275\u0275elementStart(12, "div", 29)(13, "icon", 33);
    \u0275\u0275text(14, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 31);
    \u0275\u0275text(16, "Remove Event");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r11 = ctx.row;
    const menu_r12 = \u0275\u0275reference(4);
    \u0275\u0275property("matMenuTriggerFor", menu_r12);
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c9, row_r11 == null ? null : row_r11.id));
  }
}
var _EventListingComponent = class _EventListingComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._state = inject(EventStateService);
    this._dialog = inject(MatDialog);
    this.loading = this._state.loading;
    this.event_list = this._state.event_list;
    this.viewEvent = (event) => this._state.viewEvent(event);
    this.removeEvent = (event) => this._state.removeEvent(event);
  }
  get time_format() {
    return this._settings.time_format;
  }
  reqStatus(item, category) {
    return item.extension_data?.requirements?.[category] || null;
  }
  showSummary(event) {
    const mock = MOCK_APPROVAL_EVENTS.find((e) => e.id === event.id);
    if (!mock)
      return;
    this._dialog.open(EventSummaryDialogComponent, {
      data: { event: mock }
    });
  }
};
_EventListingComponent.\u0275fac = function EventListingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EventListingComponent)();
};
_EventListingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventListingComponent, selectors: [["event-listing"]], decls: 20, vars: 32, consts: [["event_template", ""], ["location_template", ""], ["venue_req_template", ""], ["dining_req_template", ""], ["av_req_template", ""], ["safety_req_template", ""], ["events_req_template", ""], ["actions_template", ""], ["menu", "matMenu"], ["mode", "indeterminate", 1, "w-full"], ["empty_message", "No events for selected period", 1, "block", "w-full", "min-w-4xl", "text-sm", 3, "data", "columns", "sortable"], [1, "h-20", "w-full"], [1, "flex", "cursor-pointer", "items-center", "space-x-2", "px-3", "py-2", "hover:bg-base-200/50", 3, "click"], ["date", "", 1, "flex", "w-8", "flex-col", "items-center", "leading-tight"], ["month", "", 1, "relative", "top-0.5", "text-sm", "font-medium", "opacity-60"], ["day", "", 1, "relative", "-top-0.5", "text-2xl", "font-light"], ["details", "", 1, "flex", "flex-col"], [1, "text-sm", "font-medium", "hover:underline"], [1, "text-xs", "opacity-40"], [1, "text-xs", "opacity-60"], [1, "p-4", "text-sm"], [1, "flex", "items-center", "justify-center", "p-2"], [1, "flex", "h-7", "w-7", "items-center", "justify-center", "rounded", "bg-success"], [1, "flex", "h-7", "w-7", "items-center", "justify-center", "rounded", "bg-error"], [1, "flex", "h-7", "w-7", "items-center", "justify-center", "rounded", "bg-warning"], [1, "opacity-30"], [1, "text-base", "text-white"], ["icon", "", "matRipple", "", 1, "mx-2", "h-12", "w-12", "rounded-sm", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "routerLink"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "mr-2"], ["mat-menu-item", "", 3, "click"], [1, "text-error", "text-2xl"]], template: function EventListingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 9);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275element(2, "simple-table", 10)(3, "div", 11);
    \u0275\u0275template(4, EventListingComponent_ng_template_4_Template, 17, 18, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(6, EventListingComponent_ng_template_6_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(8, EventListingComponent_ng_template_8_Template, 5, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(10, EventListingComponent_ng_template_10_Template, 5, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(12, EventListingComponent_ng_template_12_Template, 5, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(14, EventListingComponent_ng_template_14_Template, 5, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(16, EventListingComponent_ng_template_16_Template, 5, 1, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(18, EventListingComponent_ng_template_18_Template, 17, 4, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const event_template_r13 = \u0275\u0275reference(5);
    const location_template_r14 = \u0275\u0275reference(7);
    const venue_req_template_r15 = \u0275\u0275reference(9);
    const dining_req_template_r16 = \u0275\u0275reference(11);
    const av_req_template_r17 = \u0275\u0275reference(13);
    const safety_req_template_r18 = \u0275\u0275reference(15);
    const events_req_template_r19 = \u0275\u0275reference(17);
    const actions_template_r20 = \u0275\u0275reference(19);
    \u0275\u0275classProp("opacity-0", !\u0275\u0275pipeBind1(1, 5, ctx.loading));
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx.event_list)("columns", \u0275\u0275pureFunction8(23, _c8, \u0275\u0275pureFunction1(7, _c04, event_template_r13), \u0275\u0275pureFunction1(9, _c12, location_template_r14), \u0275\u0275pureFunction1(11, _c2, venue_req_template_r15), \u0275\u0275pureFunction1(13, _c3, dining_req_template_r16), \u0275\u0275pureFunction1(15, _c4, av_req_template_r17), \u0275\u0275pureFunction1(17, _c5, safety_req_template_r18), \u0275\u0275pureFunction1(19, _c6, events_req_template_r19), \u0275\u0275pureFunction1(21, _c7, actions_template_r20)))("sortable", true);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DatePipe,
  SimpleTableComponent,
  IconComponent,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatDialogModule,
  RouterModule,
  RouterLink,
  MatRippleModule,
  MatRipple,
  MatProgressBarModule,
  MatProgressBar
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
            class="block w-full min-w-4xl text-sm"
            [data]="event_list"
            empty_message="No events for selected period"
            [columns]="[
                { key: 'date', name: 'Event', content: event_template },
                {
                    key: 'location',
                    name: 'Location',
                    content: location_template,
                    size: '12rem',
                    sortable: false,
                },
                {
                    key: 'req_venue',
                    name: 'Venue',
                    content: venue_req_template,
                    size: '5rem',
                    sortable: false,
                },
                {
                    key: 'req_dining',
                    name: 'Dining',
                    content: dining_req_template,
                    size: '5rem',
                    sortable: false,
                },
                {
                    key: 'req_av',
                    name: 'AV/Tech',
                    content: av_req_template,
                    size: '5rem',
                    sortable: false,
                },
                {
                    key: 'req_safety',
                    name: 'Safety',
                    content: safety_req_template,
                    size: '5rem',
                    sortable: false,
                },
                {
                    key: 'req_events',
                    name: 'Events',
                    content: events_req_template,
                    size: '5rem',
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

        <!-- Event column -->
        <ng-template #event_template let-item="row">
            <div
                class="flex cursor-pointer items-center space-x-2 px-3 py-2 hover:bg-base-200/50"
                (click)="showSummary(item)"
            >
                <div
                    date
                    class="flex w-8 flex-col items-center leading-tight"
                >
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
                <div details class="flex flex-col">
                    <div class="text-sm font-medium hover:underline">{{ item.title }}</div>
                    <div class="text-xs opacity-40">
                        {{ item.date | date: 'EEEE, ' + time_format }}
                        &ndash;
                        {{
                            item.date + item.duration * 60 * 1000
                                | date: time_format
                        }}
                    </div>
                    <div class="text-xs opacity-60">
                        {{ item.host }}
                    </div>
                </div>
            </div>
        </ng-template>

        <!-- Location column -->
        <ng-template #location_template let-item="row">
            <div class="p-4 text-sm">
                {{ item.location }}
            </div>
        </ng-template>

        <!-- Venue requirement -->
        <ng-template #venue_req_template let-item="row">
            <div class="flex items-center justify-center p-2">
                @switch (reqStatus(item, 'venue')) {
                    @case ('approved') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-success">
                            <icon class="text-base text-white">done</icon>
                        </span>
                    }
                    @case ('declined') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-error">
                            <icon class="text-base text-white">close</icon>
                        </span>
                    }
                    @case ('pending') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-warning">
                            <icon class="text-base text-white">schedule</icon>
                        </span>
                    }
                    @default {
                        <span class="opacity-30">&mdash;</span>
                    }
                }
            </div>
        </ng-template>

        <!-- Dining requirement -->
        <ng-template #dining_req_template let-item="row">
            <div class="flex items-center justify-center p-2">
                @switch (reqStatus(item, 'dining')) {
                    @case ('approved') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-success">
                            <icon class="text-base text-white">done</icon>
                        </span>
                    }
                    @case ('declined') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-error">
                            <icon class="text-base text-white">close</icon>
                        </span>
                    }
                    @case ('pending') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-warning">
                            <icon class="text-base text-white">schedule</icon>
                        </span>
                    }
                    @default {
                        <span class="opacity-30">&mdash;</span>
                    }
                }
            </div>
        </ng-template>

        <!-- AV/Tech requirement -->
        <ng-template #av_req_template let-item="row">
            <div class="flex items-center justify-center p-2">
                @switch (reqStatus(item, 'av_tech')) {
                    @case ('approved') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-success">
                            <icon class="text-base text-white">done</icon>
                        </span>
                    }
                    @case ('declined') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-error">
                            <icon class="text-base text-white">close</icon>
                        </span>
                    }
                    @case ('pending') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-warning">
                            <icon class="text-base text-white">schedule</icon>
                        </span>
                    }
                    @default {
                        <span class="opacity-30">&mdash;</span>
                    }
                }
            </div>
        </ng-template>

        <!-- Safety requirement -->
        <ng-template #safety_req_template let-item="row">
            <div class="flex items-center justify-center p-2">
                @switch (reqStatus(item, 'safety')) {
                    @case ('approved') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-success">
                            <icon class="text-base text-white">done</icon>
                        </span>
                    }
                    @case ('declined') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-error">
                            <icon class="text-base text-white">close</icon>
                        </span>
                    }
                    @case ('pending') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-warning">
                            <icon class="text-base text-white">schedule</icon>
                        </span>
                    }
                    @default {
                        <span class="opacity-30">&mdash;</span>
                    }
                }
            </div>
        </ng-template>

        <!-- Events requirement -->
        <ng-template #events_req_template let-item="row">
            <div class="flex items-center justify-center p-2">
                @switch (reqStatus(item, 'events')) {
                    @case ('approved') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-success">
                            <icon class="text-base text-white">done</icon>
                        </span>
                    }
                    @case ('declined') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-error">
                            <icon class="text-base text-white">close</icon>
                        </span>
                    }
                    @case ('pending') {
                        <span class="flex h-7 w-7 items-center justify-center rounded bg-warning">
                            <icon class="text-base text-white">schedule</icon>
                        </span>
                    }
                    @default {
                        <span class="opacity-30">&mdash;</span>
                    }
                }
            </div>
        </ng-template>

        <!-- Actions column -->
        <ng-template #actions_template let-row="row">
            <button
                icon
                matRipple
                class="mx-2 h-12 w-12 rounded-sm"
                [matMenuTriggerFor]="menu"
            >
                <icon>more_vert</icon>
            </button>
            <mat-menu #menu="matMenu">
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
                        <div class="mr-2">Edit Event</div>
                    </div>
                </a>
                <button mat-menu-item (click)="removeEvent(row)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-error text-2xl">delete</icon>
                        <div class="mr-2">Remove Event</div>
                    </div>
                </button>
            </mat-menu>
        </ng-template>
    `, imports: [
      CommonModule,
      SimpleTableComponent,
      IconComponent,
      MatMenuModule,
      MatDialogModule,
      RouterModule,
      MatRippleModule,
      MatProgressBarModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventListingComponent, { className: "EventListingComponent", filePath: "apps/concierge/src/app/events/event-listing.component.ts", lineNumber: 308 });
})();

// apps/concierge/src/app/events/event-quote-detail.component.ts
var _forTrack03 = ($index, $item) => $item.id;
function EventQuoteDetailComponent_Conditional_0_For_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 34)(2, "div", 35)(3, "span", 36)(4, "icon", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 38);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 39);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.categoryBadgeColor(item_r3.category));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.categoryIcon(item_r3.category));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4(" ", ctx_r1.categoryLabel(item_r3.category), " \xB7 ", item_r3.quantity, " x ", ctx_r1.formatCurrency(item_r3.unit_price), " \xB7 Tax ", item_r3.tax_rate * 100, "% ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatCurrency(item_r3.line_total), " ");
  }
}
function EventQuoteDetailComponent_Conditional_0_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "icon", 40);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.document().invoice_type === "deposit" ? "Deposit \u2014 " + ctx_r1.document().deposit_percent + "% of quote total" : "Final Balance \u2014 " + (100 - ctx_r1.document().deposit_percent) + "% remaining", " ");
  }
}
function EventQuoteDetailComponent_Conditional_0_Conditional_69_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "icon", 43);
    \u0275\u0275text(2, "attach_file");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const name_r4 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(name_r4);
  }
}
function EventQuoteDetailComponent_Conditional_0_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "h3", 41);
    \u0275\u0275text(2, " Attachments ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, EventQuoteDetailComponent_Conditional_0_Conditional_69_For_4_Template, 5, 1, "div", 42, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.document().attachment_names);
  }
}
function EventQuoteDetailComponent_Conditional_0_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "h3", 45);
    \u0275\u0275text(2, " Notes ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.document().notes, " ");
  }
}
function EventQuoteDetailComponent_Conditional_0_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "icon", 30);
    \u0275\u0275text(2, "hourglass_top");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Awaiting event approvals");
    \u0275\u0275elementEnd()();
  }
}
function EventQuoteDetailComponent_Conditional_0_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "icon", 30);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Deposit invoice sent");
    \u0275\u0275elementEnd()();
  }
}
function EventQuoteDetailComponent_Conditional_0_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function EventQuoteDetailComponent_Conditional_0_Conditional_75_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1._state.generateFinalInvoice(ctx_r1.document().id));
    });
    \u0275\u0275elementStart(1, "icon", 30);
    \u0275\u0275text(2, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Generate Final Invoice");
    \u0275\u0275elementEnd()();
  }
}
function EventQuoteDetailComponent_Conditional_0_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function EventQuoteDetailComponent_Conditional_0_Conditional_76_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1._state.sendInvoice(ctx_r1.document().id));
    });
    \u0275\u0275elementStart(1, "icon", 30);
    \u0275\u0275text(2, "forward_to_inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Send Final Invoice");
    \u0275\u0275elementEnd()();
  }
}
function EventQuoteDetailComponent_Conditional_0_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function EventQuoteDetailComponent_Conditional_0_Conditional_77_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1._state.recordPayment(ctx_r1.document().id));
    });
    \u0275\u0275elementStart(1, "icon", 30);
    \u0275\u0275text(2, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Mark Paid");
    \u0275\u0275elementEnd()();
  }
}
function EventQuoteDetailComponent_Conditional_0_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function EventQuoteDetailComponent_Conditional_0_Conditional_84_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.downloadDepositPdf());
    });
    \u0275\u0275elementStart(1, "icon", 30);
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Deposit PDF");
    \u0275\u0275elementEnd()();
  }
}
function EventQuoteDetailComponent_Conditional_0_Conditional_85_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 52)(2, "div", 53);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const entry_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", entry_r9.detail, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.formatDateTime(entry_r9.timestamp), " \xB7 ", entry_r9.actor, " ");
  }
}
function EventQuoteDetailComponent_Conditional_0_Conditional_85_ForEmpty_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1, " No audit entries ");
    \u0275\u0275elementEnd();
  }
}
function EventQuoteDetailComponent_Conditional_0_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "h3", 14);
    \u0275\u0275text(2, " Audit Log ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, EventQuoteDetailComponent_Conditional_0_Conditional_85_For_4_Template, 6, 3, "div", 50, _forTrack03, false, EventQuoteDetailComponent_Conditional_0_Conditional_85_ForEmpty_5_Template, 2, 0, "div", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.audit_entries());
  }
}
function EventQuoteDetailComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function EventQuoteDetailComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._state.selectDocument(null));
    });
    \u0275\u0275element(1, "div", 2);
    \u0275\u0275elementStart(2, "div", 3);
    \u0275\u0275listener("click", function EventQuoteDetailComponent_Conditional_0_Template_div_click_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(3, "button", 4);
    \u0275\u0275listener("click", function EventQuoteDetailComponent_Conditional_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._state.selectDocument(null));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "span", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 7);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 8);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 9)(15, "h3", 10);
    \u0275\u0275text(16, " Event Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 11)(18, "div", 12);
    \u0275\u0275text(19, "Event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 13);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 12);
    \u0275\u0275text(23, "Date / Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 12);
    \u0275\u0275text(27, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 12);
    \u0275\u0275text(31, "Requester");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 12);
    \u0275\u0275text(35, "Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 12);
    \u0275\u0275text(39, "Bill To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 12);
    \u0275\u0275text(43, "Cost Centre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 5)(47, "h3", 14);
    \u0275\u0275text(48, " Line Items ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 15);
    \u0275\u0275repeaterCreate(50, EventQuoteDetailComponent_Conditional_0_For_51_Template, 12, 9, "div", 16, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 17);
    \u0275\u0275conditionalCreate(53, EventQuoteDetailComponent_Conditional_0_Conditional_53_Template, 5, 1, "div", 18);
    \u0275\u0275elementStart(54, "div", 19)(55, "span", 12);
    \u0275\u0275text(56, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span");
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 19)(60, "span", 12);
    \u0275\u0275text(61, "Tax (GST)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "span");
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 20)(65, "span");
    \u0275\u0275text(66, "Total (USD)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span");
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(69, EventQuoteDetailComponent_Conditional_0_Conditional_69_Template, 5, 0, "div", 5);
    \u0275\u0275conditionalCreate(70, EventQuoteDetailComponent_Conditional_0_Conditional_70_Template, 5, 1, "div", 5);
    \u0275\u0275elementStart(71, "div", 21)(72, "div", 22);
    \u0275\u0275conditionalCreate(73, EventQuoteDetailComponent_Conditional_0_Conditional_73_Template, 5, 0, "div", 23);
    \u0275\u0275conditionalCreate(74, EventQuoteDetailComponent_Conditional_0_Conditional_74_Template, 5, 0, "div", 24);
    \u0275\u0275conditionalCreate(75, EventQuoteDetailComponent_Conditional_0_Conditional_75_Template, 5, 0, "button", 25);
    \u0275\u0275conditionalCreate(76, EventQuoteDetailComponent_Conditional_0_Conditional_76_Template, 5, 0, "button", 26);
    \u0275\u0275conditionalCreate(77, EventQuoteDetailComponent_Conditional_0_Conditional_77_Template, 5, 0, "button", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "div", 28)(79, "button", 29);
    \u0275\u0275listener("click", function EventQuoteDetailComponent_Conditional_0_Template_button_click_79_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadPdf());
    });
    \u0275\u0275elementStart(80, "icon", 30);
    \u0275\u0275text(81, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "span");
    \u0275\u0275text(83);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(84, EventQuoteDetailComponent_Conditional_0_Conditional_84_Template, 5, 0, "button", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(85, EventQuoteDetailComponent_Conditional_0_Conditional_85_Template, 6, 1, "div", 32);
    \u0275\u0275element(86, "div", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275classMap(ctx_r1.document().doc_type === "quote" ? "bg-info/20 text-info" : "bg-warning/20 text-warning");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.docTypeLabel(), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.statusColor(ctx_r1.document().status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.statusLabel(ctx_r1.document().status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.document().doc_number, " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.eventName(), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.eventDateTime());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.eventLocation());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.eventOrganiser());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.document().vendor_department);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.document().bill_to);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.document().cost_centre);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.document().line_items);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.document().deposit_percent ? 53 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.document().subtotal));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.document().tax_total));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.document().total));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.document().attachment_names.length ? 69 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.document().notes ? 70 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.showAwaitingApprovals() ? 73 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showDepositSent() ? 74 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canGenerateFinal() ? 75 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canSendFinalInvoice() ? 76 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canRecordPayment() ? 77 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.depositInvoice() ? "Quote PDF" : "PDF");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.depositInvoice() ? 84 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.show_audit() ? 85 : -1);
  }
}
var _EventQuoteDetailComponent = class _EventQuoteDetailComponent {
  constructor() {
    this._state = inject(EventFinanceStateService);
    this.document = toSignal(this._state.selected_document$, {
      initialValue: null
    });
    this.audit_entries = toSignal(this._state.selected_audit_entries$, {
      initialValue: []
    });
    this.role = toSignal(this._state.role$, {
      initialValue: "global_admin"
    });
    this._approval_status = toSignal(this._state.approval_status$, { initialValue: {} });
    this._documents_signal = toSignal(this._state.documents$, {
      initialValue: []
    });
    this.show_audit = computed(() => {
      return this._state.canPerformAction("view_audit_log");
    });
    this._currency_formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    });
    this.showAwaitingApprovals = computed(() => {
      const doc = this.document();
      this._approval_status();
      return !!doc && doc.doc_type === "quote" && doc.status === "draft" && !this._state.allApprovalsAccepted(doc.event_id);
    });
    this.showDepositSent = computed(() => {
      const doc = this.document();
      this._approval_status();
      return !!doc && doc.doc_type === "quote" && doc.status === "accepted" && !this._state.canGenerateFinalInvoice(doc);
    });
    this.canGenerateFinal = computed(() => {
      const doc = this.document();
      this._approval_status();
      return !!doc && doc.doc_type === "quote" && this._state.canGenerateFinalInvoice(doc);
    });
    this.canSendFinalInvoice = computed(() => {
      const doc = this.document();
      return !!doc && doc.doc_type === "invoice" && doc.invoice_type === "final" && doc.status === "draft" && this._state.canPerformAction("send_quote");
    });
    this.canRecordPayment = computed(() => {
      const doc = this.document();
      return !!doc && doc.doc_type === "invoice" && (doc.status === "invoiced" || doc.status === "overdue") && this._state.canPerformAction("record_payment");
    });
    this.depositInvoice = computed(() => {
      const doc = this.document();
      if (!doc || doc.doc_type !== "quote" || doc.status !== "accepted")
        return null;
      const docs = this._documents_signal();
      return docs.find((d) => d.converted_from === doc.id && d.invoice_type === "deposit") || null;
    });
    this._category_badge_colors = {
      venue_hire: "bg-blue-600",
      catering: "bg-amber-600",
      av_equipment: "bg-purple-600",
      staffing: "bg-teal-600",
      security: "bg-red-600",
      cleaning: "bg-green-600",
      miscellaneous: "bg-gray-500"
    };
  }
  // ── Header helpers ──────────────────────────────────────────────
  docTypeLabel() {
    const doc = this.document();
    if (!doc)
      return "";
    if (doc.doc_type === "quote")
      return "Quote";
    if (doc.invoice_type === "deposit")
      return "Deposit Invoice";
    if (doc.invoice_type === "final")
      return "Final Invoice";
    return "Invoice";
  }
  // ── Event lookups ──────────────────────────────────────────────
  eventName() {
    const doc = this.document();
    if (!doc)
      return "";
    const event = MOCK_APPROVAL_EVENTS.find((e) => e.id === doc.event_id);
    return event?.title || "Unknown Event";
  }
  eventDateTime() {
    const doc = this.document();
    if (!doc)
      return "";
    const event = MOCK_APPROVAL_EVENTS.find((e) => e.id === doc.event_id);
    if (!event)
      return "";
    return `${format(event.date, "EEE, d MMM yyyy")} at ${format(event.date, "h:mm a")}`;
  }
  eventLocation() {
    const doc = this.document();
    if (!doc)
      return "";
    const event = MOCK_APPROVAL_EVENTS.find((e) => e.id === doc.event_id);
    return event?.location || "";
  }
  eventOrganiser() {
    const doc = this.document();
    if (!doc)
      return "";
    const event = MOCK_APPROVAL_EVENTS.find((e) => e.id === doc.event_id);
    return event?.organiser || "";
  }
  // ── PDF Download ──────────────────────────────────────────────
  downloadPdf() {
    const doc = this.document();
    if (!doc)
      return;
    generateFinancePdf(doc);
  }
  downloadDepositPdf() {
    const deposit = this.depositInvoice();
    if (!deposit)
      return;
    generateFinancePdf(deposit);
  }
  // ── Formatters ─────────────────────────────────────────────────
  formatCurrency(value) {
    return this._currency_formatter.format(value);
  }
  formatDateTime(ts) {
    return format(ts, "d MMM yyyy, h:mm a");
  }
  statusLabel(status) {
    return DOC_STATUS_DISPLAY[status] || status;
  }
  statusColor(status) {
    return DOC_STATUS_COLOR[status] || "";
  }
  categoryLabel(category) {
    return BILLABLE_CATEGORY_DISPLAY[category] || category;
  }
  categoryIcon(category) {
    return BILLABLE_CATEGORY_ICONS[category] || "receipt";
  }
  categoryBadgeColor(category) {
    return this._category_badge_colors[category] || "bg-gray-500";
  }
};
_EventQuoteDetailComponent.\u0275fac = function EventQuoteDetailComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EventQuoteDetailComponent)();
};
_EventQuoteDetailComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventQuoteDetailComponent, selectors: [["event-quote-detail"]], decls: 1, vars: 1, consts: [[1, "fixed", "inset-0", "z-50"], [1, "fixed", "inset-0", "z-50", 3, "click"], [1, "absolute", "inset-0", "bg-black", "opacity-50"], [1, "bg-base-100", "absolute", "inset-y-0", "right-0", "w-[480px]", "overflow-y-auto", 3, "click"], ["icon", "", "matRipple", "", 1, "absolute", "top-2", "right-2", "z-10", 3, "click"], [1, "border-base-200", "border-b", "px-5", "py-4"], [1, "flex", "items-center", "space-x-2"], [1, "rounded-full", "px-2.5", "py-0.5", "text-xs", "font-medium"], [1, "mt-1", "text-lg", "font-medium"], [1, "border-base-200", "space-y-3", "border-b", "px-5", "py-4"], [1, "text-sm", "font-semibold", "opacity-70"], [1, "grid", "grid-cols-2", "gap-x-4", "gap-y-2", "text-sm"], [1, "opacity-60"], [1, "font-medium"], [1, "mb-3", "text-sm", "font-semibold", "opacity-70"], [1, "space-y-2"], [1, "flex", "items-start", "justify-between", "rounded", "border", "border-base-200", "p-2.5"], [1, "mt-3", "space-y-1", "border-t", "border-base-200", "pt-3", "text-sm"], [1, "mb-1", "flex", "items-center", "space-x-1", "text-xs", "font-medium", "opacity-60"], [1, "flex", "justify-between"], [1, "flex", "justify-between", "text-base", "font-semibold"], [1, "border-base-200", "border-b", "px-5", "py-4", "space-y-3"], [1, "flex", "flex-wrap", "gap-2"], [1, "flex", "items-center", "space-x-1.5", "rounded", "border", "border-base-300", "bg-base-200/50", "px-3", "py-1.5", "text-sm", "opacity-60"], [1, "flex", "items-center", "space-x-1.5", "rounded", "border", "border-success/30", "bg-success/10", "px-3", "py-1.5", "text-sm", "text-success"], ["btn", "", "matRipple", "", 1, "bg-warning", "text-warning-content", "flex", "items-center", "space-x-1", "rounded", "px-3", "py-1.5", "text-sm"], ["btn", "", "matRipple", "", 1, "bg-info", "text-info-content", "flex", "items-center", "space-x-1", "rounded", "px-3", "py-1.5", "text-sm"], ["btn", "", "matRipple", "", 1, "bg-success", "text-success-content", "flex", "items-center", "space-x-1", "rounded", "px-3", "py-1.5", "text-sm"], [1, "flex", "gap-2"], ["matRipple", "", 1, "flex", "items-center", "space-x-1", "rounded", "border", "border-base-300", "bg-base-100", "px-3", "py-1.5", "text-sm", "font-medium", "text-base-content", "hover:bg-base-200", 3, "click"], [1, "text-lg"], ["matRipple", "", 1, "flex", "items-center", "space-x-1", "rounded", "border", "border-base-300", "bg-base-100", "px-3", "py-1.5", "text-sm", "font-medium", "text-base-content", "hover:bg-base-200"], [1, "px-5", "py-4"], [1, "h-8"], [1, "flex-1"], [1, "flex", "items-center", "space-x-2", "text-sm", "font-medium"], [1, "flex", "h-7", "w-7", "shrink-0", "items-center", "justify-center", "rounded"], [1, "text-base", "text-white"], [1, "mt-0.5", "text-xs", "opacity-50"], [1, "text-sm", "font-medium", "whitespace-nowrap"], [1, "text-sm"], [1, "mb-2", "text-sm", "font-semibold", "opacity-70"], [1, "flex", "items-center", "space-x-2", "py-1", "text-sm"], [1, "text-base", "opacity-50"], [1, "text-info", "underline"], [1, "mb-1", "text-sm", "font-semibold", "opacity-70"], [1, "text-sm", "opacity-80"], ["btn", "", "matRipple", "", 1, "bg-warning", "text-warning-content", "flex", "items-center", "space-x-1", "rounded", "px-3", "py-1.5", "text-sm", 3, "click"], ["btn", "", "matRipple", "", 1, "bg-info", "text-info-content", "flex", "items-center", "space-x-1", "rounded", "px-3", "py-1.5", "text-sm", 3, "click"], ["btn", "", "matRipple", "", 1, "bg-success", "text-success-content", "flex", "items-center", "space-x-1", "rounded", "px-3", "py-1.5", "text-sm", 3, "click"], [1, "border-base-200", "flex", "items-start", "space-x-3", "border-l-2", "py-2", "pl-3"], [1, "text-sm", "opacity-40"], [1, "min-w-0", "flex-1"], [1, "text-sm", "font-medium"]], template: function EventQuoteDetailComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EventQuoteDetailComponent_Conditional_0_Template, 87, 28, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.document() ? 0 : -1);
  }
}, dependencies: [CommonModule, MatRippleModule, MatRipple, IconComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: contents;\n}\n/*# sourceMappingURL=event-quote-detail.component.css.map */"] });
var EventQuoteDetailComponent = _EventQuoteDetailComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventQuoteDetailComponent, [{
    type: Component,
    args: [{ selector: "event-quote-detail", template: `
        @if (document()) {
            <div
                class="fixed inset-0 z-50"
                (click)="_state.selectDocument(null)"
            >
                <div class="absolute inset-0 bg-black opacity-50"></div>
                <div
                    class="bg-base-100 absolute inset-y-0 right-0 w-[480px] overflow-y-auto"
                    (click)="$event.stopPropagation()"
                >
                    <!-- Close button -->
                    <button
                        icon
                        matRipple
                        (click)="_state.selectDocument(null)"
                        class="absolute top-2 right-2 z-10"
                    >
                        <icon>close</icon>
                    </button>

                    <!-- Header -->
                    <div class="border-base-200 border-b px-5 py-4">
                        <div class="flex items-center space-x-2">
                            <span
                                class="rounded-full px-2.5 py-0.5 text-xs font-medium"
                                [class]="
                                    document()!.doc_type === 'quote'
                                        ? 'bg-info/20 text-info'
                                        : 'bg-warning/20 text-warning'
                                "
                            >
                                {{ docTypeLabel() }}
                            </span>
                            <span
                                class="rounded-full px-2.5 py-0.5 text-xs font-medium"
                                [class]="statusColor(document()!.status)"
                            >
                                {{ statusLabel(document()!.status) }}
                            </span>
                        </div>
                        <div class="mt-1 text-lg font-medium">
                            {{ document()!.doc_number }}
                        </div>
                    </div>

                    <!-- Summary -->
                    <div class="border-base-200 space-y-3 border-b px-5 py-4">
                        <h3 class="text-sm font-semibold opacity-70">
                            Event Details
                        </h3>
                        <div class="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                            <div class="opacity-60">Event</div>
                            <div class="font-medium">
                                {{ eventName() }}
                            </div>
                            <div class="opacity-60">Date / Time</div>
                            <div>{{ eventDateTime() }}</div>
                            <div class="opacity-60">Location</div>
                            <div>{{ eventLocation() }}</div>
                            <div class="opacity-60">Requester</div>
                            <div>{{ eventOrganiser() }}</div>
                            <div class="opacity-60">Department</div>
                            <div>{{ document()!.vendor_department }}</div>
                            <div class="opacity-60">Bill To</div>
                            <div>{{ document()!.bill_to }}</div>
                            <div class="opacity-60">Cost Centre</div>
                            <div>{{ document()!.cost_centre }}</div>
                        </div>
                    </div>

                    <!-- Line items -->
                    <div class="border-base-200 border-b px-5 py-4">
                        <h3 class="mb-3 text-sm font-semibold opacity-70">
                            Line Items
                        </h3>
                        <div class="space-y-2">
                            @for (
                                item of document()!.line_items;
                                track item.id
                            ) {
                                <div
                                    class="flex items-start justify-between rounded border border-base-200 p-2.5"
                                >
                                    <div class="flex-1">
                                        <div
                                            class="flex items-center space-x-2 text-sm font-medium"
                                        >
                                            <span
                                                class="flex h-7 w-7 shrink-0 items-center justify-center rounded"
                                                [class]="categoryBadgeColor(item.category)"
                                            >
                                                <icon class="text-base text-white">{{
                                                    categoryIcon(item.category)
                                                }}</icon>
                                            </span>
                                            <span>{{
                                                item.description
                                            }}</span>
                                        </div>
                                        <div
                                            class="mt-0.5 text-xs opacity-50"
                                        >
                                            {{ categoryLabel(item.category) }}
                                            &middot; {{ item.quantity }} x
                                            {{ formatCurrency(item.unit_price) }}
                                            &middot; Tax
                                            {{ item.tax_rate * 100 }}%
                                        </div>
                                    </div>
                                    <div
                                        class="text-sm font-medium whitespace-nowrap"
                                    >
                                        {{
                                            formatCurrency(item.line_total)
                                        }}
                                    </div>
                                </div>
                            }
                        </div>

                        <!-- Totals -->
                        <div
                            class="mt-3 space-y-1 border-t border-base-200 pt-3 text-sm"
                        >
                            @if (document()!.deposit_percent) {
                                <div
                                    class="mb-1 flex items-center space-x-1 text-xs font-medium opacity-60"
                                >
                                    <icon class="text-sm">info</icon>
                                    <span>
                                        {{
                                            document()!.invoice_type ===
                                            'deposit'
                                                ? 'Deposit \u2014 ' +
                                                  document()!.deposit_percent +
                                                  '% of quote total'
                                                : 'Final Balance \u2014 ' +
                                                  (100 -
                                                      document()!
                                                          .deposit_percent!) +
                                                  '% remaining'
                                        }}
                                    </span>
                                </div>
                            }
                            <div class="flex justify-between">
                                <span class="opacity-60">Subtotal</span>
                                <span>{{
                                    formatCurrency(document()!.subtotal)
                                }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="opacity-60">Tax (GST)</span>
                                <span>{{
                                    formatCurrency(document()!.tax_total)
                                }}</span>
                            </div>
                            <div
                                class="flex justify-between text-base font-semibold"
                            >
                                <span>Total (USD)</span>
                                <span>{{
                                    formatCurrency(document()!.total)
                                }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Attachments -->
                    @if (document()!.attachment_names.length) {
                        <div class="border-base-200 border-b px-5 py-4">
                            <h3
                                class="mb-2 text-sm font-semibold opacity-70"
                            >
                                Attachments
                            </h3>
                            @for (
                                name of document()!.attachment_names;
                                track name
                            ) {
                                <div
                                    class="flex items-center space-x-2 py-1 text-sm"
                                >
                                    <icon class="text-base opacity-50"
                                        >attach_file</icon
                                    >
                                    <span class="text-info underline">{{
                                        name
                                    }}</span>
                                </div>
                            }
                        </div>
                    }

                    <!-- Notes -->
                    @if (document()!.notes) {
                        <div class="border-base-200 border-b px-5 py-4">
                            <h3
                                class="mb-1 text-sm font-semibold opacity-70"
                            >
                                Notes
                            </h3>
                            <p class="text-sm opacity-80">
                                {{ document()!.notes }}
                            </p>
                        </div>
                    }

                    <!-- Action buttons -->
                    <div class="border-base-200 border-b px-5 py-4 space-y-3">
                        <!-- Workflow status / actions -->
                        <div class="flex flex-wrap gap-2">
                            @if (showAwaitingApprovals()) {
                                <div
                                    class="flex items-center space-x-1.5 rounded border border-base-300 bg-base-200/50 px-3 py-1.5 text-sm opacity-60"
                                >
                                    <icon class="text-lg"
                                        >hourglass_top</icon
                                    >
                                    <span>Awaiting event approvals</span>
                                </div>
                            }
                            @if (showDepositSent()) {
                                <div
                                    class="flex items-center space-x-1.5 rounded border border-success/30 bg-success/10 px-3 py-1.5 text-sm text-success"
                                >
                                    <icon class="text-lg"
                                        >check_circle</icon
                                    >
                                    <span>Deposit invoice sent</span>
                                </div>
                            }
                            @if (canGenerateFinal()) {
                                <button
                                    btn
                                    matRipple
                                    class="bg-warning text-warning-content flex items-center space-x-1 rounded px-3 py-1.5 text-sm"
                                    (click)="
                                        _state.generateFinalInvoice(
                                            document()!.id
                                        )
                                    "
                                >
                                    <icon class="text-lg"
                                        >receipt_long</icon
                                    >
                                    <span>Generate Final Invoice</span>
                                </button>
                            }
                            @if (canSendFinalInvoice()) {
                                <button
                                    btn
                                    matRipple
                                    class="bg-info text-info-content flex items-center space-x-1 rounded px-3 py-1.5 text-sm"
                                    (click)="
                                        _state.sendInvoice(
                                            document()!.id
                                        )
                                    "
                                >
                                    <icon class="text-lg"
                                        >forward_to_inbox</icon
                                    >
                                    <span>Send Final Invoice</span>
                                </button>
                            }
                            @if (canRecordPayment()) {
                                <button
                                    btn
                                    matRipple
                                    class="bg-success text-success-content flex items-center space-x-1 rounded px-3 py-1.5 text-sm"
                                    (click)="
                                        _state.recordPayment(
                                            document()!.id
                                        )
                                    "
                                >
                                    <icon class="text-lg">payments</icon>
                                    <span>Mark Paid</span>
                                </button>
                            }
                        </div>

                        <!-- Download PDF row -->
                        <div class="flex gap-2">
                            <button
                                matRipple
                                class="flex items-center space-x-1 rounded border border-base-300 bg-base-100 px-3 py-1.5 text-sm font-medium text-base-content hover:bg-base-200"
                                (click)="downloadPdf()"
                            >
                                <icon class="text-lg">download</icon>
                                <span>{{
                                    depositInvoice()
                                        ? 'Quote PDF'
                                        : 'PDF'
                                }}</span>
                            </button>
                            @if (depositInvoice()) {
                                <button
                                    matRipple
                                    class="flex items-center space-x-1 rounded border border-base-300 bg-base-100 px-3 py-1.5 text-sm font-medium text-base-content hover:bg-base-200"
                                    (click)="downloadDepositPdf()"
                                >
                                    <icon class="text-lg"
                                        >download</icon
                                    >
                                    <span>Deposit PDF</span>
                                </button>
                            }
                        </div>
                    </div>

                    <!-- Audit log -->
                    @if (show_audit()) {
                        <div class="px-5 py-4">
                            <h3
                                class="mb-3 text-sm font-semibold opacity-70"
                            >
                                Audit Log
                            </h3>
                            @for (
                                entry of audit_entries();
                                track entry.id
                            ) {
                                <div
                                    class="border-base-200 flex items-start space-x-3 border-l-2 py-2 pl-3"
                                >
                                    <div class="min-w-0 flex-1">
                                        <div class="text-sm font-medium">
                                            {{ entry.detail }}
                                        </div>
                                        <div
                                            class="mt-0.5 text-xs opacity-50"
                                        >
                                            {{ formatDateTime(entry.timestamp) }}
                                            &middot; {{ entry.actor }}
                                        </div>
                                    </div>
                                </div>
                            } @empty {
                                <div class="text-sm opacity-40">
                                    No audit entries
                                </div>
                            }
                        </div>
                    }

                    <div class="h-8"></div>
                </div>
            </div>
        }
    `, imports: [CommonModule, MatRippleModule, IconComponent], styles: ["/* angular:styles/component:css;c56154a65d2f25aeb30f9e3d4fddc8d29a75b1cfe211ec52ebd65b8c2849fb61;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/events/event-quote-detail.component.ts */\n:host {\n  display: contents;\n}\n/*# sourceMappingURL=event-quote-detail.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventQuoteDetailComponent, { className: "EventQuoteDetailComponent", filePath: "apps/concierge/src/app/events/event-quote-detail.component.ts", lineNumber: 383 });
})();

// apps/concierge/src/app/events/event-quotes.component.ts
var _c05 = (a0) => ({ key: "event_id", name: "Event", content: a0 });
var _c13 = (a0) => ({ key: "doc_number", name: "Doc #", content: a0, size: "9rem" });
var _c22 = (a0) => ({ key: "vendor_department", name: "Vendor / Dept", content: a0, size: "10rem" });
var _c32 = (a0) => ({ key: "total", name: "Total", content: a0, size: "8rem" });
var _c42 = (a0) => ({ key: "status", name: "Status", content: a0, size: "7rem", sortable: false });
var _c52 = (a0) => ({ key: "due_date", name: "Due Date", content: a0, size: "8rem" });
var _c62 = (a0) => ({ key: "last_updated", name: "Updated", content: a0, size: "8rem" });
var _c72 = (a0) => ({ key: "actions", name: " ", content: a0, size: "4rem", sortable: false });
var _c82 = (a0, a1, a2, a3, a4, a5, a6, a7) => [a0, a1, a2, a3, a4, a5, a6, a7];
var _c92 = (a0) => ({ key: "doc_type", name: "Type", content: a0, size: "6rem", sortable: false });
var _c10 = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => [a0, a1, a2, a3, a4, a5, a6, a7, a8];
var _forTrack04 = ($index, $item) => $item.value;
function EventQuotesComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    \u0275\u0275property("value", s_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r2.label);
  }
}
function EventQuotesComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r3 = ctx.$implicit;
    \u0275\u0275property("value", dept_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dept_r3);
  }
}
function EventQuotesComponent_Conditional_15_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    \u0275\u0275property("value", r_r6.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r6.label);
  }
}
function EventQuotesComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 15)(1, "mat-select", 12);
    \u0275\u0275twoWayListener("ngModelChange", function EventQuotesComponent_Conditional_15_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.active_role, $event) || (ctx_r4.active_role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EventQuotesComponent_Conditional_15_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onRoleChange($event));
    });
    \u0275\u0275repeaterCreate(2, EventQuotesComponent_Conditional_15_For_3_Template, 2, 2, "mat-option", 14, _forTrack04);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.active_role);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.role_list);
  }
}
function EventQuotesComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("click", function EventQuotesComponent_ng_template_25_Template_div_click_0_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4._state.selectDocument(row_r8.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.row;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.eventName(row_r8.event_id), " ");
  }
}
function EventQuotesComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r9 = ctx.row;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(row_r9.doc_type === "quote" ? "bg-info/20 text-info" : "bg-warning/20 text-warning");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.docTypeLabel(row_r9), " ");
  }
}
function EventQuotesComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r10 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r10.doc_number, " ");
  }
}
function EventQuotesComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r11 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r11.vendor_department, " ");
  }
}
function EventQuotesComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r12 = ctx.row;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.formatCurrency(row_r12.total), " ");
  }
}
function EventQuotesComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r13 = ctx.row;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r4.statusColor(row_r13.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.statusLabel(row_r13.status), " ");
  }
}
function EventQuotesComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r14 = ctx.row;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.formatDate(row_r14.due_date), " ");
  }
}
function EventQuotesComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r15 = ctx.row;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.formatDate(row_r15.last_updated), " ");
  }
}
function EventQuotesComponent_ng_template_41_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function EventQuotesComponent_ng_template_41_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const row_r17 = \u0275\u0275nextContext().row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4._state.generateFinalInvoice(row_r17.id));
    });
    \u0275\u0275elementStart(1, "div", 31)(2, "icon", 32);
    \u0275\u0275text(3, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 33);
    \u0275\u0275text(5, "Generate Final Invoice");
    \u0275\u0275elementEnd()()();
  }
}
function EventQuotesComponent_ng_template_41_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function EventQuotesComponent_ng_template_41_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const row_r17 = \u0275\u0275nextContext().row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4._state.sendInvoice(row_r17.id));
    });
    \u0275\u0275elementStart(1, "div", 31)(2, "icon", 32);
    \u0275\u0275text(3, "forward_to_inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 33);
    \u0275\u0275text(5, "Send Final Invoice");
    \u0275\u0275elementEnd()()();
  }
}
function EventQuotesComponent_ng_template_41_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function EventQuotesComponent_ng_template_41_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const row_r17 = \u0275\u0275nextContext().row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4._state.recordPayment(row_r17.id));
    });
    \u0275\u0275elementStart(1, "div", 31)(2, "icon", 32);
    \u0275\u0275text(3, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 33);
    \u0275\u0275text(5, "Mark Paid");
    \u0275\u0275elementEnd()()();
  }
}
function EventQuotesComponent_ng_template_41_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function EventQuotesComponent_ng_template_41_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const row_r17 = \u0275\u0275nextContext().row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.exportPdf(row_r17));
    });
    \u0275\u0275elementStart(1, "div", 31)(2, "icon", 32);
    \u0275\u0275text(3, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 33);
    \u0275\u0275text(5, "Download PDF");
    \u0275\u0275elementEnd()()();
  }
}
function EventQuotesComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29)(1, "icon");
    \u0275\u0275text(2, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "mat-menu", null, 9)(5, "button", 30);
    \u0275\u0275listener("click", function EventQuotesComponent_ng_template_41_Template_button_click_5_listener() {
      const row_r17 = \u0275\u0275restoreView(_r16).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4._state.selectDocument(row_r17.id));
    });
    \u0275\u0275elementStart(6, "div", 31)(7, "icon", 32);
    \u0275\u0275text(8, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 33);
    \u0275\u0275text(10, "View Details");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(11, EventQuotesComponent_ng_template_41_Conditional_11_Template, 6, 0, "button", 34);
    \u0275\u0275conditionalCreate(12, EventQuotesComponent_ng_template_41_Conditional_12_Template, 6, 0, "button", 34);
    \u0275\u0275conditionalCreate(13, EventQuotesComponent_ng_template_41_Conditional_13_Template, 6, 0, "button", 34);
    \u0275\u0275conditionalCreate(14, EventQuotesComponent_ng_template_41_Conditional_14_Template, 6, 0, "button", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r17 = ctx.row;
    const menu_r22 = \u0275\u0275reference(4);
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("matMenuTriggerFor", menu_r22);
    \u0275\u0275advance(11);
    \u0275\u0275conditional(row_r17.doc_type === "quote" && ctx_r4.canGenerateFinalForRow(row_r17) ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r17.doc_type === "invoice" && row_r17.invoice_type === "final" && row_r17.status === "draft" && ctx_r4.canSendFinalForRow(row_r17) ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r17.doc_type === "invoice" && (row_r17.status === "invoiced" || row_r17.status === "overdue") && ctx_r4.can_record_payment() ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.can_export() ? 14 : -1);
  }
}
var _EventQuotesComponent = class _EventQuotesComponent {
  constructor() {
    this._state = inject(EventFinanceStateService);
    this.is_mock = Pn();
    this.filtered_quotes$ = this._state.filtered_documents$.pipe(map((docs) => docs.filter((d) => d.doc_type === "quote")));
    this.filtered_invoices$ = this._state.filtered_documents$.pipe(map((docs) => docs.filter((d) => d.doc_type === "invoice")));
    this.departments = toSignal(this._state.vendor_departments$, {
      initialValue: []
    });
    this.status_filter = "all";
    this.vendor_filter = "all";
    this.search_filter = "";
    this.active_role = "global_admin";
    this.can_record_payment = computed(() => {
      this._role_signal();
      return this._state.canPerformAction("record_payment");
    });
    this.can_export = computed(() => {
      this._role_signal();
      return this._state.canPerformAction("export");
    });
    this._role_signal = toSignal(this._state.role$, {
      initialValue: "global_admin"
    });
    this._approval_signal = toSignal(this._state.approval_status$, { initialValue: {} });
    this.status_options = [
      { value: "draft", label: "Draft" },
      { value: "sent", label: "Sent" },
      { value: "accepted", label: "Accepted" },
      { value: "declined", label: "Declined" },
      { value: "invoiced", label: "Invoiced" },
      { value: "paid", label: "Paid" },
      { value: "overdue", label: "Overdue" },
      { value: "cancelled", label: "Cancelled" }
    ];
    this.role_list = Object.keys(ROLE_DISPLAY_NAMES).map((value) => ({
      value,
      label: ROLE_DISPLAY_NAMES[value]
    }));
    this._currency_formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    });
  }
  /** Whether the final invoice can be generated for a given quote row. */
  canGenerateFinalForRow(row) {
    this._approval_signal();
    return this._state.canGenerateFinalInvoice(row);
  }
  /** Whether a draft final invoice can be sent for this row. */
  canSendFinalForRow(row) {
    return this._state.canPerformAction("send_quote") && this._state.allApprovalsAccepted(row.event_id);
  }
  /** Label for Type column: Quote, Deposit, Final, or Invoice. */
  docTypeLabel(row) {
    if (row.doc_type === "quote")
      return "Quote";
    if (row.invoice_type === "deposit")
      return "Deposit";
    if (row.invoice_type === "final")
      return "Final";
    return "Invoice";
  }
  onRoleChange(role) {
    this._state.setRole(role);
    this.vendor_filter = "all";
  }
  onStatusChange(value) {
    this._state.setFilters({ status: value });
  }
  onVendorChange(value) {
    this._state.setFilters({
      vendor_department: value === "all" ? "" : value
    });
  }
  onSearchChange(value) {
    this._state.setFilters({ search: value });
  }
  eventName(event_id) {
    const event = MOCK_APPROVAL_EVENTS.find((e) => e.id === event_id);
    return event?.title || "Unknown Event";
  }
  formatCurrency(value) {
    return this._currency_formatter.format(value);
  }
  formatDate(ts) {
    return format(ts, "d MMM yyyy");
  }
  statusLabel(status) {
    return DOC_STATUS_DISPLAY[status] || status;
  }
  statusColor(status) {
    return DOC_STATUS_COLOR[status] || "";
  }
  exportPdf(row) {
    generateFinancePdf(row);
  }
};
_EventQuotesComponent.\u0275fac = function EventQuotesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EventQuotesComponent)();
};
_EventQuotesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventQuotesComponent, selectors: [["event-quotes"]], decls: 44, vars: 63, consts: [["event_template", ""], ["type_template", ""], ["docnum_template", ""], ["vendor_template", ""], ["total_template", ""], ["status_template", ""], ["due_template", ""], ["updated_template", ""], ["actions_template", ""], ["menu", "matMenu"], [1, "mb-4", "flex", "flex-wrap", "items-center", "gap-2"], ["appearance", "outline", 1, "no-subscript", "w-44"], [3, "ngModelChange", "ngModel"], ["value", "all"], [3, "value"], ["appearance", "outline", 1, "no-subscript", "w-52"], ["matInput", "", "placeholder", "Search docs...", 3, "ngModelChange", "ngModel"], [1, "mb-2", "text-base", "font-semibold"], [1, "w-full", "overflow-x-auto"], ["empty_message", "No quotes found", 1, "block", "w-full", "min-w-4xl", "text-sm", 3, "data", "columns", "sortable"], [1, "mb-2", "mt-8", "text-base", "font-semibold"], ["empty_message", "No invoices found", 1, "block", "w-full", "min-w-4xl", "text-sm", 3, "data", "columns", "sortable"], [1, "h-20", "w-full"], [1, "cursor-pointer", "px-3", "py-2", "text-sm", "font-medium", "hover:underline", 3, "click"], [1, "px-3", "py-2"], [1, "rounded-full", "px-2", "py-0.5", "text-xs", "font-medium"], [1, "px-3", "py-2", "text-sm", "font-mono"], [1, "px-3", "py-2", "text-sm"], [1, "px-3", "py-2", "text-sm", "font-medium"], ["icon", "", "matRipple", "", 1, "mx-2", "h-12", "w-12", "rounded-sm", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "mr-2"], ["mat-menu-item", ""]], template: function EventQuotesComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "mat-form-field", 11)(2, "mat-select", 12);
    \u0275\u0275twoWayListener("ngModelChange", function EventQuotesComponent_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.status_filter, $event) || (ctx.status_filter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EventQuotesComponent_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onStatusChange($event));
    });
    \u0275\u0275elementStart(3, "mat-option", 13);
    \u0275\u0275text(4, "All Statuses");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, EventQuotesComponent_For_6_Template, 2, 2, "mat-option", 14, _forTrack04);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-form-field", 15)(8, "mat-select", 12);
    \u0275\u0275twoWayListener("ngModelChange", function EventQuotesComponent_Template_mat_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.vendor_filter, $event) || (ctx.vendor_filter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EventQuotesComponent_Template_mat_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onVendorChange($event));
    });
    \u0275\u0275elementStart(9, "mat-option", 13);
    \u0275\u0275text(10, "All Departments");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(11, EventQuotesComponent_For_12_Template, 2, 2, "mat-option", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "mat-form-field", 15)(14, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function EventQuotesComponent_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.search_filter, $event) || (ctx.search_filter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EventQuotesComponent_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSearchChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(15, EventQuotesComponent_Conditional_15_Template, 4, 1, "mat-form-field", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "h3", 17);
    \u0275\u0275text(17, "Quotes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 18);
    \u0275\u0275element(19, "simple-table", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "h3", 20);
    \u0275\u0275text(21, "Invoices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 18);
    \u0275\u0275element(23, "simple-table", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "div", 22);
    \u0275\u0275template(25, EventQuotesComponent_ng_template_25_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(27, EventQuotesComponent_ng_template_27_Template, 3, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(29, EventQuotesComponent_ng_template_29_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(31, EventQuotesComponent_ng_template_31_Template, 2, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(33, EventQuotesComponent_ng_template_33_Template, 2, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(35, EventQuotesComponent_ng_template_35_Template, 3, 3, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(37, EventQuotesComponent_ng_template_37_Template, 2, 1, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(39, EventQuotesComponent_ng_template_39_Template, 2, 1, "ng-template", null, 7, \u0275\u0275templateRefExtractor)(41, EventQuotesComponent_ng_template_41_Template, 15, 5, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
    \u0275\u0275element(43, "event-quote-detail");
  }
  if (rf & 2) {
    const event_template_r23 = \u0275\u0275reference(26);
    const type_template_r24 = \u0275\u0275reference(28);
    const docnum_template_r25 = \u0275\u0275reference(30);
    const vendor_template_r26 = \u0275\u0275reference(32);
    const total_template_r27 = \u0275\u0275reference(34);
    const status_template_r28 = \u0275\u0275reference(36);
    const due_template_r29 = \u0275\u0275reference(38);
    const updated_template_r30 = \u0275\u0275reference(40);
    const actions_template_r31 = \u0275\u0275reference(42);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.status_filter);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.status_options);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.vendor_filter);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.departments());
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.search_filter);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.is_mock ? 15 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("data", ctx.filtered_quotes$)("columns", \u0275\u0275pureFunction8(26, _c82, \u0275\u0275pureFunction1(10, _c05, event_template_r23), \u0275\u0275pureFunction1(12, _c13, docnum_template_r25), \u0275\u0275pureFunction1(14, _c22, vendor_template_r26), \u0275\u0275pureFunction1(16, _c32, total_template_r27), \u0275\u0275pureFunction1(18, _c42, status_template_r28), \u0275\u0275pureFunction1(20, _c52, due_template_r29), \u0275\u0275pureFunction1(22, _c62, updated_template_r30), \u0275\u0275pureFunction1(24, _c72, actions_template_r31)))("sortable", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("data", ctx.filtered_invoices$)("columns", \u0275\u0275pureFunctionV(53, _c10, [\u0275\u0275pureFunction1(35, _c05, event_template_r23), \u0275\u0275pureFunction1(37, _c92, type_template_r24), \u0275\u0275pureFunction1(39, _c13, docnum_template_r25), \u0275\u0275pureFunction1(41, _c22, vendor_template_r26), \u0275\u0275pureFunction1(43, _c32, total_template_r27), \u0275\u0275pureFunction1(45, _c42, status_template_r28), \u0275\u0275pureFunction1(47, _c52, due_template_r29), \u0275\u0275pureFunction1(49, _c62, updated_template_r30), \u0275\u0275pureFunction1(51, _c72, actions_template_r31)]))("sortable", true);
  }
}, dependencies: [
  CommonModule,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  MatFormFieldModule,
  MatFormField,
  MatInputModule,
  MatInput,
  MatSelectModule,
  MatSelect,
  MatOption,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatRippleModule,
  MatRipple,
  SimpleTableComponent,
  IconComponent,
  EventQuoteDetailComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=event-quotes.component.css.map */"] });
var EventQuotesComponent = _EventQuotesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventQuotesComponent, [{
    type: Component,
    args: [{ selector: "event-quotes", template: `
        <!-- Filter bar -->
        <div class="mb-4 flex flex-wrap items-center gap-2">
            <mat-form-field appearance="outline" class="no-subscript w-44">
                <mat-select
                    [(ngModel)]="status_filter"
                    (ngModelChange)="onStatusChange($event)"
                >
                    <mat-option value="all">All Statuses</mat-option>
                    @for (s of status_options; track s.value) {
                        <mat-option [value]="s.value">{{
                            s.label
                        }}</mat-option>
                    }
                </mat-select>
            </mat-form-field>
            <mat-form-field appearance="outline" class="no-subscript w-52">
                <mat-select
                    [(ngModel)]="vendor_filter"
                    (ngModelChange)="onVendorChange($event)"
                >
                    <mat-option value="all">All Departments</mat-option>
                    @for (dept of departments(); track dept) {
                        <mat-option [value]="dept">{{ dept }}</mat-option>
                    }
                </mat-select>
            </mat-form-field>
            <mat-form-field appearance="outline" class="no-subscript w-52">
                <input
                    matInput
                    [(ngModel)]="search_filter"
                    (ngModelChange)="onSearchChange($event)"
                    placeholder="Search docs..."
                />
            </mat-form-field>
            @if (is_mock) {
                <mat-form-field appearance="outline" class="no-subscript w-52">
                    <mat-select
                        [(ngModel)]="active_role"
                        (ngModelChange)="onRoleChange($event)"
                    >
                        @for (r of role_list; track r.value) {
                            <mat-option [value]="r.value">{{
                                r.label
                            }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            }
        </div>

        <!-- Quotes section -->
        <h3 class="mb-2 text-base font-semibold">Quotes</h3>
        <div class="w-full overflow-x-auto">
            <simple-table
                class="block w-full min-w-4xl text-sm"
                [data]="filtered_quotes$"
                empty_message="No quotes found"
                [columns]="[
                    { key: 'event_id', name: 'Event', content: event_template },
                    { key: 'doc_number', name: 'Doc #', content: docnum_template, size: '9rem' },
                    { key: 'vendor_department', name: 'Vendor / Dept', content: vendor_template, size: '10rem' },
                    { key: 'total', name: 'Total', content: total_template, size: '8rem' },
                    { key: 'status', name: 'Status', content: status_template, size: '7rem', sortable: false },
                    { key: 'due_date', name: 'Due Date', content: due_template, size: '8rem' },
                    { key: 'last_updated', name: 'Updated', content: updated_template, size: '8rem' },
                    { key: 'actions', name: ' ', content: actions_template, size: '4rem', sortable: false },
                ]"
                [sortable]="true"
            />
        </div>

        <!-- Invoices section -->
        <h3 class="mb-2 mt-8 text-base font-semibold">Invoices</h3>
        <div class="w-full overflow-x-auto">
            <simple-table
                class="block w-full min-w-4xl text-sm"
                [data]="filtered_invoices$"
                empty_message="No invoices found"
                [columns]="[
                    { key: 'event_id', name: 'Event', content: event_template },
                    { key: 'doc_type', name: 'Type', content: type_template, size: '6rem', sortable: false },
                    { key: 'doc_number', name: 'Doc #', content: docnum_template, size: '9rem' },
                    { key: 'vendor_department', name: 'Vendor / Dept', content: vendor_template, size: '10rem' },
                    { key: 'total', name: 'Total', content: total_template, size: '8rem' },
                    { key: 'status', name: 'Status', content: status_template, size: '7rem', sortable: false },
                    { key: 'due_date', name: 'Due Date', content: due_template, size: '8rem' },
                    { key: 'last_updated', name: 'Updated', content: updated_template, size: '8rem' },
                    { key: 'actions', name: ' ', content: actions_template, size: '4rem', sortable: false },
                ]"
                [sortable]="true"
            />
        </div>
        <div class="h-20 w-full"></div>

        <!-- Event column -->
        <ng-template #event_template let-row="row">
            <div
                class="cursor-pointer px-3 py-2 text-sm font-medium hover:underline"
                (click)="_state.selectDocument(row.id)"
            >
                {{ eventName(row.event_id) }}
            </div>
        </ng-template>

        <!-- Type column -->
        <ng-template #type_template let-row="row">
            <div class="px-3 py-2">
                <span
                    class="rounded-full px-2 py-0.5 text-xs font-medium"
                    [class]="
                        row.doc_type === 'quote'
                            ? 'bg-info/20 text-info'
                            : 'bg-warning/20 text-warning'
                    "
                >
                    {{ docTypeLabel(row) }}
                </span>
            </div>
        </ng-template>

        <!-- Doc # column -->
        <ng-template #docnum_template let-row="row">
            <div class="px-3 py-2 text-sm font-mono">
                {{ row.doc_number }}
            </div>
        </ng-template>

        <!-- Vendor column -->
        <ng-template #vendor_template let-row="row">
            <div class="px-3 py-2 text-sm">
                {{ row.vendor_department }}
            </div>
        </ng-template>

        <!-- Total column -->
        <ng-template #total_template let-row="row">
            <div class="px-3 py-2 text-sm font-medium">
                {{ formatCurrency(row.total) }}
            </div>
        </ng-template>

        <!-- Status column -->
        <ng-template #status_template let-row="row">
            <div class="px-3 py-2">
                <span
                    class="rounded-full px-2 py-0.5 text-xs font-medium"
                    [class]="statusColor(row.status)"
                >
                    {{ statusLabel(row.status) }}
                </span>
            </div>
        </ng-template>

        <!-- Due date column -->
        <ng-template #due_template let-row="row">
            <div class="px-3 py-2 text-sm">
                {{ formatDate(row.due_date) }}
            </div>
        </ng-template>

        <!-- Updated column -->
        <ng-template #updated_template let-row="row">
            <div class="px-3 py-2 text-sm">
                {{ formatDate(row.last_updated) }}
            </div>
        </ng-template>

        <!-- Actions column -->
        <ng-template #actions_template let-row="row">
            <button
                icon
                matRipple
                class="mx-2 h-12 w-12 rounded-sm"
                [matMenuTriggerFor]="menu"
            >
                <icon>more_vert</icon>
            </button>
            <mat-menu #menu="matMenu">
                <button
                    mat-menu-item
                    (click)="_state.selectDocument(row.id)"
                >
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">visibility</icon>
                        <div class="mr-2">View Details</div>
                    </div>
                </button>
                @if (
                    row.doc_type === 'quote' &&
                    canGenerateFinalForRow(row)
                ) {
                    <button
                        mat-menu-item
                        (click)="_state.generateFinalInvoice(row.id)"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">receipt_long</icon>
                            <div class="mr-2">Generate Final Invoice</div>
                        </div>
                    </button>
                }
                @if (
                    row.doc_type === 'invoice' &&
                    row.invoice_type === 'final' &&
                    row.status === 'draft' &&
                    canSendFinalForRow(row)
                ) {
                    <button
                        mat-menu-item
                        (click)="_state.sendInvoice(row.id)"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">forward_to_inbox</icon>
                            <div class="mr-2">Send Final Invoice</div>
                        </div>
                    </button>
                }
                @if (
                    row.doc_type === 'invoice' &&
                    (row.status === 'invoiced' || row.status === 'overdue') &&
                    can_record_payment()
                ) {
                    <button
                        mat-menu-item
                        (click)="_state.recordPayment(row.id)"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">payments</icon>
                            <div class="mr-2">Mark Paid</div>
                        </div>
                    </button>
                }
                @if (can_export()) {
                    <button
                        mat-menu-item
                        (click)="exportPdf(row)"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">download</icon>
                            <div class="mr-2">Download PDF</div>
                        </div>
                    </button>
                }
            </mat-menu>
        </ng-template>

        <!-- Detail panel -->
        <event-quote-detail />
    `, imports: [
      CommonModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatMenuModule,
      MatRippleModule,
      SimpleTableComponent,
      IconComponent,
      EventQuoteDetailComponent
    ], styles: ["/* angular:styles/component:css;aca37b045377af9e61ae87ec9ceba230614f528def48741d3190431076d12a3b;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/events/event-quotes.component.ts */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=event-quotes.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventQuotesComponent, { className: "EventQuotesComponent", filePath: "apps/concierge/src/app/events/event-quotes.component.ts", lineNumber: 302 });
})();

// apps/concierge/src/app/events/events-list.component.ts
var _c06 = () => ["/entertainment", "events", "manage"];
var _forTrack05 = ($index, $item) => $item.id;
function EventsListComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
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
function EventsListComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-approvals");
  }
}
function EventsListComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "event-listing", 18);
    \u0275\u0275elementEnd();
  }
}
function EventsListComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-quotes");
  }
}
function EventsListComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "div", 19);
    \u0275\u0275elementStart(2, "p", 20);
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
    this.period_list = [];
    this.view = "list";
  }
  get has_calendar() {
    return Pn() || this._settings.get("app.group_events_calendar");
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
_EventsListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventsListComponent, selectors: [["app-event-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 37, vars: 40, consts: [[1, "absolute", "inset-0", "flex", "flex-col"], [1, "flex", "items-center", "justify-between", "p-8"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 3, "routerLink"], [1, "ml-2"], [1, "text-2xl"], ["filters", "", 1, "flex", "items-center", "space-x-2", "px-8", "pb-4"], ["appearance", "outline", 1, "no-subscript", "w-32"], [3, "ngModelChange", "ngModel"], ["value", "week"], ["value", "month"], ["appearance", "outline", 1, "no-subscript", "w-64"], [3, "value"], [1, "flex", "items-center", "space-x-1", "px-8", "pb-4"], ["matRipple", "", 1, "rounded-full", "px-4", "py-1.5", "text-sm", "font-medium", "transition-colors", 3, "click"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-y-auto", "px-8"], [1, "min-h-full", "w-full", "overflow-x-auto"], [1, "absolute", "inset-0", "z-50", "flex", "items-center", "justify-center"], [1, "block"], [1, "bg-base-100", "absolute", "inset-0", "opacity-80"], [1, "max-w-lg", "text-lg", "opacity-60"]], template: function EventsListComponent_Template(rf, ctx) {
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
    \u0275\u0275elementStart(11, "div", 6)(12, "mat-form-field", 7)(13, "mat-select", 8);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275listener("ngModelChange", function EventsListComponent_Template_mat_select_ngModelChange_13_listener($event) {
      return ctx.setPeriodType($event);
    });
    \u0275\u0275elementStart(15, "mat-option", 9);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-option", 10);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "mat-form-field", 11)(22, "mat-select", 8);
    \u0275\u0275twoWayListener("ngModelChange", function EventsListComponent_Template_mat_select_ngModelChange_22_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selected_range, $event) || (ctx.selected_range = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function EventsListComponent_Template_mat_select_ngModelChange_22_listener($event) {
      return ctx.setPeriod($event);
    });
    \u0275\u0275repeaterCreate(23, EventsListComponent_For_24_Template, 2, 2, "mat-option", 12, _forTrack05);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 13)(26, "button", 14);
    \u0275\u0275listener("click", function EventsListComponent_Template_button_click_26_listener() {
      return ctx.view = "list";
    });
    \u0275\u0275text(27, " List ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 14);
    \u0275\u0275listener("click", function EventsListComponent_Template_button_click_28_listener() {
      return ctx.view = "approvals";
    });
    \u0275\u0275text(29, " Approvals ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 14);
    \u0275\u0275listener("click", function EventsListComponent_Template_button_click_30_listener() {
      return ctx.view = "quotes";
    });
    \u0275\u0275text(31, " Quotes & Invoices ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 15);
    \u0275\u0275conditionalCreate(33, EventsListComponent_Conditional_33_Template, 1, 0, "event-approvals");
    \u0275\u0275conditionalCreate(34, EventsListComponent_Conditional_34_Template, 2, 0, "div", 16);
    \u0275\u0275conditionalCreate(35, EventsListComponent_Conditional_35_Template, 1, 0, "event-quotes");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(36, EventsListComponent_Conditional_36_Template, 5, 3, "div", 17);
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 29, "APP.CONCIERGE.EVENTS_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(39, _c06));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 31, "APP.CONCIERGE.EVENTS_ADD"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(14, 33, ctx.period));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 35, "COMMON.WEEK"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 37, "COMMON.MONTH"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.selected_range);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.period_list);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-primary", ctx.view === "list")("text-primary-content", ctx.view === "list")("bg-base-200", ctx.view !== "list");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-primary", ctx.view === "approvals")("text-primary-content", ctx.view === "approvals")("bg-base-200", ctx.view !== "approvals");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-primary", ctx.view === "quotes")("text-primary-content", ctx.view === "quotes")("bg-base-200", ctx.view !== "quotes");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.view === "approvals" ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.view === "list" ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.view === "quotes" ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.has_calendar ? 36 : -1);
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
  EventApprovalsComponent,
  EventListingComponent,
  EventQuotesComponent,
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
            <div class="flex items-center space-x-1 px-8 pb-4">
                <button
                    matRipple
                    class="rounded-full px-4 py-1.5 text-sm font-medium transition-colors"
                    [class.bg-primary]="view === 'list'"
                    [class.text-primary-content]="view === 'list'"
                    [class.bg-base-200]="view !== 'list'"
                    (click)="view = 'list'"
                >
                    List
                </button>
                <button
                    matRipple
                    class="rounded-full px-4 py-1.5 text-sm font-medium transition-colors"
                    [class.bg-primary]="view === 'approvals'"
                    [class.text-primary-content]="view === 'approvals'"
                    [class.bg-base-200]="view !== 'approvals'"
                    (click)="view = 'approvals'"
                >
                    Approvals
                </button>
                <button
                    matRipple
                    class="rounded-full px-4 py-1.5 text-sm font-medium transition-colors"
                    [class.bg-primary]="view === 'quotes'"
                    [class.text-primary-content]="view === 'quotes'"
                    [class.bg-base-200]="view !== 'quotes'"
                    (click)="view = 'quotes'"
                >
                    Quotes &amp; Invoices
                </button>
            </div>
            <div class="relative h-1/2 w-full flex-1 overflow-y-auto px-8">
                @if (view === 'approvals') {
                    <event-approvals></event-approvals>
                }
                @if (view === 'list') {
                    <div class="min-h-full w-full overflow-x-auto">
                        <event-listing class="block"></event-listing>
                    </div>
                }
                @if (view === 'quotes') {
                    <event-quotes></event-quotes>
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
      EventApprovalsComponent,
      EventListingComponent,
      EventQuotesComponent,
      MatRippleModule,
      RouterModule,
      FormsModule
    ], styles: ["/* angular:styles/component:css;f992f808f00abdb3d341f52af27489d2a52f705030fa77da9b19706093ffd928;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/events/events-list.component.ts */\n:host {\n  flex: 1;\n}\n/*# sourceMappingURL=events-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventsListComponent, { className: "EventsListComponent", filePath: "apps/concierge/src/app/events/events-list.component.ts", lineNumber: 149 });
})();

// apps/concierge/src/app/events/events.module.ts
var ROUTES = [
  {
    path: "",
    component: EventsComponent,
    children: [{ path: "", component: EventsListComponent }]
  },
  { path: "manage", component: EventRequestWizardComponent },
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
  EventRequestWizardComponent,
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
        EventRequestWizardComponent,
        RouterModule.forChild(ROUTES)
      ]
    }]
  }], null, null);
})();
export {
  EventsModule
};
//# sourceMappingURL=events.module-WRTO2EPN.js.map
