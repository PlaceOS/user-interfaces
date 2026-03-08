import {
  ItemListFieldComponent
} from "./chunk-23UANQSZ.js";
import {
  DateFieldComponent,
  DurationFieldComponent
} from "./chunk-FRCDPIE2.js";
import {
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  FullscreenModalShellComponent,
  IconComponent,
  LevelPipe,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatOption,
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
  NgSwitch,
  NgSwitchCase,
  OrganisationService,
  ReactiveFormsModule,
  SettingsService,
  SettingsToggleComponent,
  SimpleTableComponent,
  TranslatePipe,
  Validators,
  catchError,
  combineLatest,
  endOfDay,
  filter,
  getInvalidFields,
  i18n,
  inject,
  input,
  ja,
  map,
  nc,
  nextValueFrom,
  notifyError,
  notifySuccess,
  of,
  openConfirmModal,
  output,
  randomString,
  rc,
  set,
  setClassMetadata,
  shareReplay,
  startOfDay,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵpureFunction7,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-I7WSAWAM.js";
import {
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// libs/form-fields/src/lib/booking-rules-form.component.ts
var _c0 = () => ({ standalone: true });
function BookingRulesFormComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const zone_r1 = ctx.$implicit;
    \u0275\u0275property("value", zone_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", zone_r1.display_name || zone_r1.name, " ");
  }
}
function BookingRulesFormComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "settings-toggle", 12);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("name", \u0275\u0275pipeBind1(1, 2, "BOOKINGS.AUTO_APPROVE"))("info", \u0275\u0275pipeBind1(2, 4, "BOOKINGS.AUTO_APPROVE_INFO"));
  }
}
function BookingRulesFormComponent_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "label", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "item-list-field", 28);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, ctx_r1.form.value.rules.hidden ? "BOOKINGS.GROUPS_DENY" : "BOOKINGS.GROUPS_ALLOW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 4, "BOOKINGS.GROUPS"));
  }
}
function BookingRulesFormComponent_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "label", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "item-list-field", 30);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "BOOKINGS.CONDITION_LOCATION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 4, "BOOKINGS.CONDITION_LOCATION"));
  }
}
function BookingRulesFormComponent_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "label", 31);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "item-list-field", 32);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "BOOKINGS.CONDITION_TAGS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 4, "BOOKINGS.CONDITION_TAGS"));
  }
}
function BookingRulesFormComponent_Conditional_78_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-duration-field", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, ctx_r1.form.value.rules.hidden ? "BOOKINGS.MIN_LENGTH_DENY" : "BOOKINGS.MIN_LENGTH_ALLOW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("min", 15)("max", 1440)("step", 15);
  }
}
function BookingRulesFormComponent_Conditional_78_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 35);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-duration-field", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, ctx_r1.form.value.rules.hidden ? "BOOKINGS.MAX_LENGTH_DENY" : "BOOKINGS.MAX_LENGTH_ALLOW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("min", ctx_r1.form.value.conditions.min_length || 15)("max", 1440)("step", 15);
  }
}
function BookingRulesFormComponent_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275conditionalCreate(1, BookingRulesFormComponent_Conditional_78_Conditional_1_Template, 5, 6, "div", 2);
    \u0275\u0275conditionalCreate(2, BookingRulesFormComponent_Conditional_78_Conditional_2_Template, 5, 6, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.available_conditions.includes("min_length") ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.available_conditions.includes("max_length") ? 2 : -1);
  }
}
function BookingRulesFormComponent_Conditional_79_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const time_r3 = ctx.$implicit;
    \u0275\u0275property("value", time_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", time_r3, " ");
  }
}
function BookingRulesFormComponent_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "label", 37);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 38)(5, "mat-select", 39);
    \u0275\u0275repeaterCreate(6, BookingRulesFormComponent_Conditional_79_For_7_Template, 2, 2, "mat-option", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, ctx_r1.form.value.rules.hidden ? "BOOKINGS.BEFORE_DENY" : "BOOKINGS.BEFORE_ALLOW"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.duration_blocks);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 4, "BOOKINGS.BEFORE_REQUIRED"));
  }
}
function BookingRulesFormComponent_Conditional_80_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const time_r4 = ctx.$implicit;
    \u0275\u0275property("value", time_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", time_r4, " ");
  }
}
function BookingRulesFormComponent_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "label", 40);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 38)(5, "mat-select", 41);
    \u0275\u0275repeaterCreate(6, BookingRulesFormComponent_Conditional_80_For_7_Template, 2, 2, "mat-option", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, ctx_r1.form.value.rules.hidden ? "BOOKINGS.AFTER_DENY" : "BOOKINGS.AFTER_ALLOW"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.duration_blocks);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 4, "BOOKINGS.AFTER_REQUIRED"), " ");
  }
}
function BookingRulesFormComponent_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "label", 40);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 42)(5, "a-date-field", 43);
    \u0275\u0275listener("ngModelChange", function BookingRulesFormComponent_Conditional_81_Template_a_date_field_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setIsPeriod($event, ctx_r1.form.value.conditions.is_period[1]));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a-date-field", 44);
    \u0275\u0275listener("ngModelChange", function BookingRulesFormComponent_Conditional_81_Template_a_date_field_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setIsPeriod(ctx_r1.form.value.conditions.is_period[0], $event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, ctx_r1.form.value.rules.hidden ? "BOOKINGS.BETWEEN_DATES_ALLOW" : "BOOKINGS.BETWEEN_DATES_DENY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.form.value.conditions.is_period[0])("ngModelOptions", \u0275\u0275pureFunction0(8, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("from", ctx_r1.form.value.conditions.is_period[0])("ngModel", ctx_r1.form.value.conditions.is_period[1])("ngModelOptions", \u0275\u0275pureFunction0(9, _c0));
  }
}
function BookingRulesFormComponent_Conditional_82_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const time_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", time_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, time_r7.value, ctx_r1.time_format), " ");
  }
}
function BookingRulesFormComponent_Conditional_82_For_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const time_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", time_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, time_r8.value, ctx_r1.time_format), " ");
  }
}
function BookingRulesFormComponent_Conditional_82_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, BookingRulesFormComponent_Conditional_82_For_12_Conditional_0_Template, 3, 5, "mat-option", 7);
  }
  if (rf & 2) {
    const time_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(time_r8.id > (ctx_r1.form.value.conditions.is_between[0] || 6) ? 0 : -1);
  }
}
function BookingRulesFormComponent_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "label", 45);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 46)(5, "mat-form-field", 38)(6, "mat-select", 47);
    \u0275\u0275listener("ngModelChange", function BookingRulesFormComponent_Conditional_82_Template_mat_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setIsBetween($event, ctx_r1.form.value.conditions.is_between[1]));
    });
    \u0275\u0275repeaterCreate(7, BookingRulesFormComponent_Conditional_82_For_8_Template, 3, 5, "mat-option", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-form-field", 38)(10, "mat-select", 48);
    \u0275\u0275listener("ngModelChange", function BookingRulesFormComponent_Conditional_82_Template_mat_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setIsBetween(ctx_r1.form.value.conditions.is_between[0], $event));
    });
    \u0275\u0275repeaterCreate(11, BookingRulesFormComponent_Conditional_82_For_12_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-error");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, ctx_r1.form.value.rules.hidden ? "BOOKINGS.BETWEEN_HOURS_ALLOW" : "BOOKINGS.BETWEEN_HOURS_DENY"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.form.value.conditions.is_between[0] || 6)("ngModelOptions", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.time_blocks);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.form.value.conditions.is_between[1] || 18)("ngModelOptions", \u0275\u0275pureFunction0(11, _c0));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.time_blocks);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 8, "BOOKINGS.BETWEEN_HOURS_REQUIRED"));
  }
}
function BookingRulesFormComponent_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "label", 49);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "item-list-field", 50);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, ctx_r1.form.value.rules.hidden ? "BOOKINGS.RESOURCES_ALLOW" : "BOOKINGS.RESOURCES_DENY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 4, "BOOKINGS.RESOURCES_PLACEHOLDER"));
  }
}
var _BookingRulesFormComponent = class _BookingRulesFormComponent {
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.ruleset = input(void 0);
    this.save = input(false);
    this.rulesetChange = output();
    this.available_conditions = [];
    this.building_zones = this._org.active_building.pipe(filter((_) => !!_), switchMap((bld) => ja({ parent_id: bld.id }).pipe(catchError(() => of({ data: [] })))), map((res) => res.data), shareReplay(1));
    this.time_blocks = new Array(24 * 4).fill(0).map((_, idx) => {
      const hour = Math.floor(idx / 4);
      const minutes = idx % 4 * 15;
      return {
        id: hour + minutes / 60,
        value: set(/* @__PURE__ */ new Date(), { hours: hour, minutes })
      };
    });
    this.duration_blocks = [
      "1 Day",
      "2 Days",
      "3 Days",
      "4 Days",
      "5 Days",
      "6 Days",
      "1 Week",
      "2 Weeks",
      "3 Weeks",
      "4 Weeks",
      "5 Weeks",
      "1 Month",
      "2 Months",
      "3 Months",
      "4 Months",
      "5 Months",
      "6 Months"
    ];
    this.form = new FormGroup({
      id: new FormControl(`ruleset-${randomString(8)}`),
      zone: new FormControl("*", Validators.required),
      name: new FormControl("", Validators.required),
      rules: new FormGroup({
        auto_approve: new FormControl(false),
        hidden: new FormControl(false)
      }),
      conditions: new FormGroup({
        groups: new FormControl([]),
        locations: new FormControl([]),
        tags: new FormControl([]),
        min_length: new FormControl(0),
        max_length: new FormControl(24 * 60),
        is_before: new FormControl("1 Week"),
        is_after: new FormControl("1 Day"),
        is_between: new FormControl([6, 18]),
        is_period: new FormControl([
          startOfDay(Date.now()).valueOf(),
          endOfDay(Date.now()).valueOf()
        ]),
        resource_ids: new FormControl([])
      })
    });
  }
  get time_format() {
    return this._settings.time_format;
  }
  ngOnChanges(changes) {
    const ruleset = this.ruleset();
    if (changes.ruleset && ruleset) {
      this.available_conditions = Object.keys(ruleset.conditions || {});
      this.form.patchValue(ruleset);
    }
    if (changes.save && this.save() !== changes.save.previousValue && !changes.save.firstChange) {
      this.post();
    }
  }
  setIsBetween(start, end) {
    if (!start || !end)
      return;
    if (start > end)
      end = start + 0.25;
    this.form.patchValue({ conditions: { is_between: [start, end] } });
  }
  setIsPeriod(start, end) {
    if (!start || !end)
      return;
    if (start > end)
      end = start;
    this.form.patchValue({
      conditions: {
        is_period: [
          startOfDay(start).valueOf(),
          endOfDay(end).valueOf()
        ]
      }
    });
  }
  post() {
    if (!this.form.valid) {
      return notifyError(i18n("FORM.INVALID_FIELDS", {
        field_list: getInvalidFields(this.form).join(", ")
      }));
    }
    const value = this.form.getRawValue();
    const condition_keys = Object.keys(value.conditions);
    for (const key of condition_keys) {
      if (!this.available_conditions.includes(key)) {
        delete value.conditions[key];
      }
    }
    this.rulesetChange.emit(value);
  }
};
_BookingRulesFormComponent.\u0275fac = function BookingRulesFormComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BookingRulesFormComponent)();
};
_BookingRulesFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingRulesFormComponent, selectors: [["booking-rules-form"]], inputs: { ruleset: [1, "ruleset"], save: [1, "save"] }, outputs: { rulesetChange: "rulesetChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 84, vars: 73, consts: [[1, "flex", "flex-col", "space-y-2", 3, "formGroup"], [1, "flex", "items-center", "space-x-4"], [1, "flex", "flex-1", "flex-col"], ["for", "zone"], ["appearance", "outline"], ["name", "zone", "formControlName", "zone"], ["value", "*"], [3, "value"], ["for", "name"], ["matInput", "", "name", "name", "formControlName", "name", "placeholder", "Ruleset Name"], ["formGroupName", "rules", 1, "flex", "items-center", "space-x-4", "pb-4"], ["formControlName", "hidden", 3, "name", "info"], ["formControlName", "auto_approve", 3, "name", "info"], [1, "flex", "flex-col"], ["name", "zone", "multiple", "", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["value", "groups"], ["value", "locations"], ["value", "tags"], ["value", "min_length"], ["value", "max_length"], ["value", "is_before"], ["value", "is_after"], ["value", "is_between"], ["value", "is_period"], ["value", "resource_ids"], ["formGroupName", "conditions", 1, "flex", "flex-col"], ["formGroupName", "conditions", 1, "flex", "items-center", "space-x-2"], ["for", "groups"], ["name", "groups", "formControlName", "groups", 3, "placeholder"], ["for", "locations"], ["name", "locations", "formControlName", "locations", 3, "placeholder"], ["for", "tags"], ["name", "tags", "formControlName", "tags", 3, "placeholder"], ["for", "min_length"], ["name", "min_length", "formControlName", "min_length", 3, "min", "max", "step"], ["for", "max_length"], ["name", "max_length", "formControlName", "max_length", 3, "min", "max", "step"], ["for", "is-before"], ["appearance", "outline", 1, "flex-1"], ["name", "is-before", "formControlName", "is_before"], ["for", "is-after"], ["name", "is-after", "formControlName", "is_after"], [1, "flex", "items-center", "space-x-2"], [1, "flex-1", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "flex-1", 3, "ngModelChange", "from", "ngModel", "ngModelOptions"], ["for", "is_between"], [1, "flex", "w-full", "items-center", "space-x-2"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["name", "end-time", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["for", "resource_ids"], ["name", "resource_ids", "formControlName", "resource_ids", 3, "placeholder"]], template: function BookingRulesFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-form-field", 4)(10, "mat-select", 5)(11, "mat-option", 6);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(14, BookingRulesFormComponent_For_15_Template, 2, 2, "mat-option", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-error");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 2)(21, "label", 8);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "mat-form-field", 4);
    \u0275\u0275element(27, "input", 9);
    \u0275\u0275elementStart(28, "mat-error");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 10)(32, "div", 2);
    \u0275\u0275element(33, "settings-toggle", 11);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 2);
    \u0275\u0275conditionalCreate(37, BookingRulesFormComponent_Conditional_37_Template, 3, 6, "settings-toggle", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 13)(39, "label", 3);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "mat-form-field", 4)(43, "mat-select", 14);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function BookingRulesFormComponent_Template_mat_select_ngModelChange_43_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.available_conditions, $event) || (ctx.available_conditions = $event);
      return $event;
    });
    \u0275\u0275elementStart(45, "mat-option", 15);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "mat-option", 16);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "mat-option", 17);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "mat-option", 18);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "mat-option", 19);
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "mat-option", 20);
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "mat-option", 21);
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "mat-option", 22);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "mat-option", 23);
    \u0275\u0275text(70);
    \u0275\u0275pipe(71, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "mat-option", 24);
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(75, BookingRulesFormComponent_Conditional_75_Template, 6, 6, "div", 25);
    \u0275\u0275conditionalCreate(76, BookingRulesFormComponent_Conditional_76_Template, 6, 6, "div", 25);
    \u0275\u0275conditionalCreate(77, BookingRulesFormComponent_Conditional_77_Template, 6, 6, "div", 25);
    \u0275\u0275conditionalCreate(78, BookingRulesFormComponent_Conditional_78_Template, 3, 2, "div", 26);
    \u0275\u0275conditionalCreate(79, BookingRulesFormComponent_Conditional_79_Template, 11, 6, "div", 25);
    \u0275\u0275conditionalCreate(80, BookingRulesFormComponent_Conditional_80_Template, 11, 6, "div", 25);
    \u0275\u0275conditionalCreate(81, BookingRulesFormComponent_Conditional_81_Template, 7, 10, "div", 25);
    \u0275\u0275conditionalCreate(82, BookingRulesFormComponent_Conditional_82_Template, 16, 12, "div", 25);
    \u0275\u0275conditionalCreate(83, BookingRulesFormComponent_Conditional_83_Template, 6, 6, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 32, "COMMON.ZONE"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 34, "COMMON.ZONE_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(16, 36, ctx.building_zones));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 38, "COMMON.ZONE_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 40, "FORM.NAME"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 42, "FORM.NAME_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(34, 44, "BOOKINGS.PREVENT"))("info", \u0275\u0275pipeBind1(35, 46, "BOOKINGS.PREVENT_INFO"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!ctx.form.value.rules.hidden ? 37 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 48, "BOOKINGS.CONDITIONS"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.available_conditions);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(72, _c0))("placeholder", \u0275\u0275pipeBind1(44, 50, "BOOKINGS.CONDITIONS_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(47, 52, "BOOKINGS.CONDITION_GROUPS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(50, 54, "BOOKINGS.CONDITION_LOCATION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(53, 56, "BOOKINGS.CONDITION_TAGS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(56, 58, "BOOKINGS.CONDITION_MIN_LENGTH"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(59, 60, "BOOKINGS.CONDITION_MAX_LENGTH"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(62, 62, "BOOKINGS.CONDITION_WITHIN"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(65, 64, "BOOKINGS.CONDITION_AFTER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(68, 66, "BOOKINGS.CONDITION_BETWEEN_HOURS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(71, 68, "BOOKINGS.CONDITION_BETWEEN_DATES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(74, 70, "BOOKINGS.CONDITION_RESOURCES"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.available_conditions.includes("groups") ? 75 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.available_conditions.includes("locations") ? 76 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.available_conditions.includes("tags") ? 77 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.available_conditions.includes("min_length") || ctx.available_conditions.includes("max_length") ? 78 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.available_conditions.includes("is_before") ? 79 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.available_conditions.includes("is_after") ? 80 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.available_conditions.includes("is_period") ? 81 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.available_conditions.includes("is_between") ? 82 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.available_conditions.includes("resource_ids") ? 83 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DatePipe,
  MatFormFieldModule,
  MatFormField,
  MatError,
  MatInputModule,
  MatInput,
  MatSelectModule,
  MatSelect,
  MatOption,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  FormGroupName,
  ItemListFieldComponent,
  DateFieldComponent,
  DurationFieldComponent,
  SettingsToggleComponent,
  TranslatePipe
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=booking-rules-form.component.css.map */"] });
var BookingRulesFormComponent = _BookingRulesFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingRulesFormComponent, [{
    type: Component,
    args: [{ selector: "booking-rules-form", template: `
        <div class="flex flex-col space-y-2" [formGroup]="form">
            <div class="flex items-center space-x-4">
                <div class="flex flex-1 flex-col">
                    <label for="zone"
                        >{{ 'COMMON.ZONE' | translate }}<span>*</span>:</label
                    >
                    <mat-form-field appearance="outline">
                        <mat-select name="zone" formControlName="zone">
                            <mat-option value="*">{{
                                'COMMON.ZONE_ANY' | translate
                            }}</mat-option>
                            @for (zone of building_zones | async; track zone) {
                                <mat-option [value]="zone.id">
                                    {{ zone.display_name || zone.name }}
                                </mat-option>
                            }
                        </mat-select>
                        <mat-error>{{
                            'COMMON.ZONE_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-1 flex-col">
                    <label for="name"
                        >{{ 'FORM.NAME' | translate }}<span>*</span></label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="name"
                            formControlName="name"
                            placeholder="Ruleset Name"
                        />
                        <mat-error>{{
                            'FORM.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
            </div>
            <div class="flex items-center space-x-4 pb-4" formGroupName="rules">
                <div class="flex flex-1 flex-col">
                    <settings-toggle
                        formControlName="hidden"
                        [name]="'BOOKINGS.PREVENT' | translate"
                        [info]="'BOOKINGS.PREVENT_INFO' | translate"
                    >
                    </settings-toggle>
                </div>
                <div class="flex flex-1 flex-col">
                    @if (!form.value.rules.hidden) {
                        <settings-toggle
                            formControlName="auto_approve"
                            [name]="'BOOKINGS.AUTO_APPROVE' | translate"
                            [info]="'BOOKINGS.AUTO_APPROVE_INFO' | translate"
                        >
                        </settings-toggle>
                    }
                </div>
            </div>
            <div class="flex flex-col">
                <label for="zone">{{
                    'BOOKINGS.CONDITIONS' | translate
                }}</label>
                <mat-form-field appearance="outline">
                    <mat-select
                        name="zone"
                        multiple
                        [(ngModel)]="available_conditions"
                        [ngModelOptions]="{ standalone: true }"
                        [placeholder]="
                            'BOOKINGS.CONDITIONS_PLACEHOLDER' | translate
                        "
                    >
                        <mat-option value="groups">
                            {{ 'BOOKINGS.CONDITION_GROUPS' | translate }}
                        </mat-option>
                        <mat-option value="locations">
                            {{ 'BOOKINGS.CONDITION_LOCATION' | translate }}
                        </mat-option>
                        <mat-option value="tags">
                            {{ 'BOOKINGS.CONDITION_TAGS' | translate }}
                        </mat-option>
                        <mat-option value="min_length">
                            {{ 'BOOKINGS.CONDITION_MIN_LENGTH' | translate }}
                        </mat-option>
                        <mat-option value="max_length">
                            {{ 'BOOKINGS.CONDITION_MAX_LENGTH' | translate }}
                        </mat-option>
                        <mat-option value="is_before">
                            {{ 'BOOKINGS.CONDITION_WITHIN' | translate }}
                        </mat-option>
                        <mat-option value="is_after">
                            {{ 'BOOKINGS.CONDITION_AFTER' | translate }}
                        </mat-option>
                        <mat-option value="is_between">
                            {{ 'BOOKINGS.CONDITION_BETWEEN_HOURS' | translate }}
                        </mat-option>
                        <mat-option value="is_period">
                            {{ 'BOOKINGS.CONDITION_BETWEEN_DATES' | translate }}
                        </mat-option>
                        <mat-option value="resource_ids">
                            {{ 'BOOKINGS.CONDITION_RESOURCES' | translate }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            @if (available_conditions.includes('groups')) {
                <div class="flex flex-col" formGroupName="conditions">
                    <label for="groups">
                        {{
                            (form.value.rules.hidden
                                ? 'BOOKINGS.GROUPS_DENY'
                                : 'BOOKINGS.GROUPS_ALLOW'
                            ) | translate
                        }}
                    </label>
                    <item-list-field
                        name="groups"
                        formControlName="groups"
                        [placeholder]="'BOOKINGS.GROUPS' | translate"
                    ></item-list-field>
                </div>
            }
            @if (available_conditions.includes('locations')) {
                <div class="flex flex-col" formGroupName="conditions">
                    <label for="locations">
                        {{ 'BOOKINGS.CONDITION_LOCATION' | translate }}
                    </label>
                    <item-list-field
                        name="locations"
                        formControlName="locations"
                        [placeholder]="
                            'BOOKINGS.CONDITION_LOCATION' | translate
                        "
                    ></item-list-field>
                </div>
            }
            @if (available_conditions.includes('tags')) {
                <div class="flex flex-col" formGroupName="conditions">
                    <label for="tags">
                        {{ 'BOOKINGS.CONDITION_TAGS' | translate }}
                    </label>
                    <item-list-field
                        name="tags"
                        formControlName="tags"
                        [placeholder]="'BOOKINGS.CONDITION_TAGS' | translate"
                    ></item-list-field>
                </div>
            }
            @if (
                available_conditions.includes('min_length') ||
                available_conditions.includes('max_length')
            ) {
                <div
                    class="flex items-center space-x-2"
                    formGroupName="conditions"
                >
                    @if (available_conditions.includes('min_length')) {
                        <div class="flex flex-1 flex-col">
                            <label for="min_length">
                                {{
                                    (form.value.rules.hidden
                                        ? 'BOOKINGS.MIN_LENGTH_DENY'
                                        : 'BOOKINGS.MIN_LENGTH_ALLOW'
                                    ) | translate
                                }}
                            </label>
                            <a-duration-field
                                name="min_length"
                                [min]="15"
                                [max]="1440"
                                [step]="15"
                                formControlName="min_length"
                            ></a-duration-field>
                        </div>
                    }
                    @if (available_conditions.includes('max_length')) {
                        <div class="flex flex-1 flex-col">
                            <label for="max_length">
                                {{
                                    (form.value.rules.hidden
                                        ? 'BOOKINGS.MAX_LENGTH_DENY'
                                        : 'BOOKINGS.MAX_LENGTH_ALLOW'
                                    ) | translate
                                }}
                            </label>
                            <a-duration-field
                                name="max_length"
                                [min]="form.value.conditions.min_length || 15"
                                [max]="1440"
                                [step]="15"
                                formControlName="max_length"
                            ></a-duration-field>
                        </div>
                    }
                </div>
            }
            @if (available_conditions.includes('is_before')) {
                <div class="flex flex-col" formGroupName="conditions">
                    <label for="is-before">
                        {{
                            (form.value.rules.hidden
                                ? 'BOOKINGS.BEFORE_DENY'
                                : 'BOOKINGS.BEFORE_ALLOW'
                            ) | translate
                        }}
                    </label>
                    <mat-form-field appearance="outline" class="flex-1">
                        <mat-select
                            name="is-before"
                            formControlName="is_before"
                        >
                            @for (time of duration_blocks; track time) {
                                <mat-option [value]="time">
                                    {{ time }}
                                </mat-option>
                            }
                        </mat-select>
                        <mat-error>{{
                            'BOOKINGS.BEFORE_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
            }
            @if (available_conditions.includes('is_after')) {
                <div class="flex flex-col" formGroupName="conditions">
                    <label for="is-after">
                        {{
                            (form.value.rules.hidden
                                ? 'BOOKINGS.AFTER_DENY'
                                : 'BOOKINGS.AFTER_ALLOW'
                            ) | translate
                        }}
                    </label>
                    <mat-form-field appearance="outline" class="flex-1">
                        <mat-select name="is-after" formControlName="is_after">
                            @for (time of duration_blocks; track time) {
                                <mat-option [value]="time">
                                    {{ time }}
                                </mat-option>
                            }
                        </mat-select>
                        <mat-error>
                            {{ 'BOOKINGS.AFTER_REQUIRED' | translate }}
                        </mat-error>
                    </mat-form-field>
                </div>
            }
            @if (available_conditions.includes('is_period')) {
                <div class="flex flex-col" formGroupName="conditions">
                    <label for="is-after">
                        {{
                            (form.value.rules.hidden
                                ? 'BOOKINGS.BETWEEN_DATES_ALLOW'
                                : 'BOOKINGS.BETWEEN_DATES_DENY'
                            ) | translate
                        }}
                    </label>
                    <div class="flex items-center space-x-2">
                        <a-date-field
                            class="flex-1"
                            [ngModel]="form.value.conditions.is_period[0]"
                            [ngModelOptions]="{ standalone: true }"
                            (ngModelChange)="
                                setIsPeriod(
                                    $event,
                                    form.value.conditions.is_period[1]
                                )
                            "
                        >
                        </a-date-field>
                        <a-date-field
                            class="flex-1"
                            [from]="form.value.conditions.is_period[0]"
                            [ngModel]="form.value.conditions.is_period[1]"
                            [ngModelOptions]="{ standalone: true }"
                            (ngModelChange)="
                                setIsPeriod(
                                    form.value.conditions.is_period[0],
                                    $event
                                )
                            "
                        >
                        </a-date-field>
                    </div>
                </div>
            }
            @if (available_conditions.includes('is_between')) {
                <div class="flex flex-col" formGroupName="conditions">
                    <label for="is_between">
                        {{
                            (form.value.rules.hidden
                                ? 'BOOKINGS.BETWEEN_HOURS_ALLOW'
                                : 'BOOKINGS.BETWEEN_HOURS_DENY'
                            ) | translate
                        }}
                    </label>
                    <div class="flex w-full items-center space-x-2">
                        <mat-form-field appearance="outline" class="flex-1">
                            <mat-select
                                name="start-time"
                                [ngModel]="
                                    form.value.conditions.is_between[0] || 6
                                "
                                [ngModelOptions]="{ standalone: true }"
                                (ngModelChange)="
                                    setIsBetween(
                                        $event,
                                        form.value.conditions.is_between[1]
                                    )
                                "
                            >
                                @for (time of time_blocks; track time) {
                                    <mat-option [value]="time.id">
                                        {{ time.value | date: time_format }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                        <mat-form-field appearance="outline" class="flex-1">
                            <mat-select
                                name="end-time"
                                [ngModel]="
                                    form.value.conditions.is_between[1] || 18
                                "
                                (ngModelChange)="
                                    setIsBetween(
                                        form.value.conditions.is_between[0],
                                        $event
                                    )
                                "
                                [ngModelOptions]="{ standalone: true }"
                            >
                                @for (time of time_blocks; track time) {
                                    @if (
                                        time.id >
                                        (form.value.conditions.is_between[0] ||
                                            6)
                                    ) {
                                        <mat-option [value]="time.id">
                                            {{ time.value | date: time_format }}
                                        </mat-option>
                                    }
                                }
                            </mat-select>
                            <mat-error>{{
                                'BOOKINGS.BETWEEN_HOURS_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                </div>
            }
            @if (available_conditions.includes('resource_ids')) {
                <div class="flex flex-col" formGroupName="conditions">
                    <label for="resource_ids">
                        {{
                            (form.value.rules.hidden
                                ? 'BOOKINGS.RESOURCES_ALLOW'
                                : 'BOOKINGS.RESOURCES_DENY'
                            ) | translate
                        }}
                    </label>
                    <item-list-field
                        name="resource_ids"
                        formControlName="resource_ids"
                        [placeholder]="
                            'BOOKINGS.RESOURCES_PLACEHOLDER' | translate
                        "
                    ></item-list-field>
                </div>
            }
        </div>
    `, imports: [
      CommonModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      FormsModule,
      ReactiveFormsModule,
      ItemListFieldComponent,
      DateFieldComponent,
      DurationFieldComponent,
      SettingsToggleComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;aca37b045377af9e61ae87ec9ceba230614f528def48741d3190431076d12a3b;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/booking-rules-form.component.ts */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=booking-rules-form.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingRulesFormComponent, { className: "BookingRulesFormComponent", filePath: "libs/form-fields/src/lib/booking-rules-form.component.ts", lineNumber: 442 });
})();

// apps/concierge/src/app/ui/booking-rules-modal.component.ts
var _c02 = (a0) => ({ type: a0 });
var _c1 = (a0) => ({ key: "_index", name: " ", size: "3.5rem", content: a0 });
var _c2 = (a0, a1) => ({ key: "zone", name: a0, content: a1 });
var _c3 = (a0) => ({ key: "name", name: a0 });
var _c4 = (a0, a1) => ({ key: "auto_approve", name: a0, content: a1, size: "5.5rem" });
var _c5 = (a0, a1) => ({ key: "hidden", name: a0, content: a1, size: "5.5rem" });
var _c6 = (a0, a1) => ({ key: "conditions", name: a0, content: a1 });
var _c7 = (a0) => ({ key: "actions", name: " ", size: "5.5rem", content: a0 });
var _c8 = (a0, a1, a2, a3, a4, a5, a6) => [a0, a1, a2, a3, a4, a5, a6];
var _c9 = (a0) => ({ count: a0 });
function BookingRulesModalComponent_booking_rules_form_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "booking-rules-form", 12);
    \u0275\u0275listener("rulesetChange", function BookingRulesModalComponent_booking_rules_form_8_Template_booking_rules_form_rulesetChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ruleset", ctx_r1.selected)("save", ctx_r1.activate_save);
  }
}
function BookingRulesModalComponent_simple_table_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "simple-table", 13);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const index_template_r3 = \u0275\u0275reference(12);
    const conditions_template_r4 = \u0275\u0275reference(14);
    const zone_template_r5 = \u0275\u0275reference(16);
    const bool_template_r6 = \u0275\u0275reference(18);
    const actions_template_r7 = \u0275\u0275reference(20);
    \u0275\u0275property("data", ctx_r1.booking_rules)("columns", \u0275\u0275pureFunction7(30, _c8, \u0275\u0275pureFunction1(12, _c1, index_template_r3), \u0275\u0275pureFunction2(14, _c2, \u0275\u0275pipeBind1(1, 2, "RESOURCE.ZONE"), zone_template_r5), \u0275\u0275pureFunction1(17, _c3, \u0275\u0275pipeBind1(2, 4, "FORM.NAME")), \u0275\u0275pureFunction2(19, _c4, \u0275\u0275pipeBind1(3, 6, "APP.CONCIERGE.BOOKING_RULES_AUTO_APPROVE"), bool_template_r6), \u0275\u0275pureFunction2(22, _c5, \u0275\u0275pipeBind1(4, 8, "APP.CONCIERGE.BOOKING_RULES_HIDE_MATCHES"), bool_template_r6), \u0275\u0275pureFunction2(25, _c6, \u0275\u0275pipeBind1(5, 10, "APP.CONCIERGE.BOOKING_RULES_CONDITIONS"), conditions_template_r4), \u0275\u0275pureFunction1(28, _c7, actions_template_r7)));
  }
}
function BookingRulesModalComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const index_r8 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (index_r8 || 0) + 1, " ");
  }
}
function BookingRulesModalComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r9 = ctx.data;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "APP.CONCIERGE.BOOKING_RULES_CONDITIONS_COUNT", \u0275\u0275pureFunction1(4, _c9, ctx_r1.keyCount(data_r9))), " ");
  }
}
function BookingRulesModalComponent_ng_template_15_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const data_r10 = \u0275\u0275nextContext().data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_8_0 = \u0275\u0275pipeBind1(3, 2, data_r10)) == null ? null : tmp_8_0.display_name) || data_r10, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", data_r10, " ");
  }
}
function BookingRulesModalComponent_ng_template_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r10 = \u0275\u0275nextContext().data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r10 === "*" ? \u0275\u0275pipeBind1(2, 1, "RESOURCE.ZONE_ALL") : data_r10, " ");
  }
}
function BookingRulesModalComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BookingRulesModalComponent_ng_template_15_div_0_Template, 6, 4, "div", 16);
    \u0275\u0275pipe(1, "level");
    \u0275\u0275template(2, BookingRulesModalComponent_ng_template_15_div_2_Template, 3, 3, "div", 17);
    \u0275\u0275pipe(3, "level");
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    const data_r10 = ctx.data;
    \u0275\u0275property("ngIf", (tmp_7_0 = \u0275\u0275pipeBind1(1, 2, data_r10)) == null ? null : tmp_7_0.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !((tmp_8_0 = \u0275\u0275pipeBind1(3, 4, data_r10)) == null ? null : tmp_8_0.id));
  }
}
function BookingRulesModalComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const key_r11 = ctx.key;
    const row_r12 = ctx.row;
    \u0275\u0275classProp("bg-error", !row_r12.rules[key_r11])("bg-success", row_r12.rules[key_r11]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r12.rules[key_r11] ? "done" : "close");
  }
}
function BookingRulesModalComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "button", 24);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("click", function BookingRulesModalComponent_ng_template_19_Template_button_click_2_listener() {
      const row_r14 = \u0275\u0275restoreView(_r13).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editRuleset(row_r14));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 24);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("click", function BookingRulesModalComponent_ng_template_19_Template_button_click_6_listener() {
      const row_r14 = \u0275\u0275restoreView(_r13).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateRulesetPriority(row_r14, -1));
    });
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9, "arrow_upward");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 23)(11, "button", 24);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275listener("click", function BookingRulesModalComponent_ng_template_19_Template_button_click_11_listener() {
      const row_r14 = \u0275\u0275restoreView(_r13).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeRuleset(row_r14));
    });
    \u0275\u0275elementStart(13, "icon", 25);
    \u0275\u0275text(14, "delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 24);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275listener("click", function BookingRulesModalComponent_ng_template_19_Template_button_click_15_listener() {
      const row_r14 = \u0275\u0275restoreView(_r13).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateRulesetPriority(row_r14, 1));
    });
    \u0275\u0275elementStart(17, "icon");
    \u0275\u0275text(18, "arrow_downward");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(3, 4, "APP.CONCIERGE.BOOKING_RULESET_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 6, "APP.CONCIERGE.BOOKING_RULESET_PRIORITY_UP"));
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(12, 8, "APP.CONCIERGE.BOOKING_RULESET_REMOVE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(16, 10, "APP.CONCIERGE.BOOKING_RULESET_PRIORITY_DOWN"));
  }
}
function BookingRulesModalComponent_footer_21_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function BookingRulesModalComponent_footer_21_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.selected = null;
      return \u0275\u0275resetView(ctx_r1.view = "list");
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.BACK"), " ");
  }
}
function BookingRulesModalComponent_footer_21_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function BookingRulesModalComponent_footer_21_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editRuleset());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.BOOKING_RULESET_ADD"), " ");
  }
}
function BookingRulesModalComponent_footer_21_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function BookingRulesModalComponent_footer_21_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.activate_save = !ctx_r1.activate_save);
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.BOOKING_RULESET_SAVE"), " ");
  }
}
function BookingRulesModalComponent_footer_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "footer", 26);
    \u0275\u0275template(1, BookingRulesModalComponent_footer_21_button_1_Template, 3, 3, "button", 27)(2, BookingRulesModalComponent_footer_21_button_2_Template, 3, 3, "button", 28)(3, BookingRulesModalComponent_footer_21_button_3_Template, 3, 3, "button", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("max-w-156", ctx_r1.view === "form");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.view === "form");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.view !== "form");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.view === "form");
  }
}
var _BookingRulesModalComponent = class _BookingRulesModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this.loading = false;
    this.view = "list";
    this.activate_save = false;
    this.change = new BehaviorSubject(0);
    this.booking_rules = combineLatest([this._org.active_building, this.change]).pipe(filter(([_]) => !!_), switchMap(([bld]) => {
      return nc(bld.id, `${this._data.type}_booking_rules`).pipe(catchError(() => of({ details: [] })));
    }), map(({ details }) => details instanceof Array ? details : []), shareReplay(1));
    this.type = this._data.type;
  }
  keyCount(item) {
    return Object.keys(item).length;
  }
  editRuleset(ruleset) {
    this.view = "form";
    this.selected = ruleset;
  }
  async removeRuleset(ruleset) {
    const result = await openConfirmModal({
      title: "Remove Booking Ruleset",
      content: `Are you sure you want to remove the booking ruleset for ${ruleset.name}?`,
      icon: { content: "delete" },
      confirm_text: "Remove Ruleset",
      cancel_text: "Cancel"
    }, this._dialog);
    if (result.reason !== "done")
      return;
    result.loading("Removing Ruleset...");
    const rules = await nextValueFrom(this.booking_rules);
    const index = rules.findIndex((_) => _.id === ruleset.id);
    if (index >= 0) {
      rules.splice(index, 1);
      await rc(this._org.building.id, {
        name: `${this.type}_booking_rules`,
        description: `${this.type} Booking Rules`,
        details: rules
      }).toPromise().catch((_) => {
        notifyError("Error removing booking rules.");
        throw _;
      });
      this.change.next(Date.now());
    }
    notifySuccess("Successfully removed booking rules.");
    result.close();
  }
  async updateRulesetPriority(ruleset, position_change) {
    const rules = await nextValueFrom(this.booking_rules);
    const index = rules.findIndex((_) => _.id === ruleset.id);
    if (index >= 0) {
      const new_index = index + position_change;
      if (new_index < 0 || new_index >= rules.length)
        return;
      rules.splice(index, 1);
      rules.splice(new_index, 0, ruleset);
      await rc(this._org.building.id, {
        name: `${this.type}_booking_rules`,
        description: `${this.type} Booking Rules`,
        details: rules
      }).toPromise().catch((_) => {
        notifyError("Error saving booking rules order change.");
        throw _;
      });
      notifySuccess("Successfully updated booking rules order.");
      this.change.next(Date.now());
    }
  }
  async save(new_ruleset) {
    this.loading = true;
    const rules = await nextValueFrom(this.booking_rules);
    if (new_ruleset) {
      const index = rules.findIndex((_) => _.id === new_ruleset?.id);
      if (index >= 0) {
        rules[index] = new_ruleset;
      } else {
        rules.push(__spreadValues({
          id: `ruleset-${randomString(8)}`
        }, new_ruleset));
      }
    }
    await rc(this._org.building.id, {
      name: `${this.type}_booking_rules`,
      description: `${this.type} Booking Rules`,
      details: rules
    }).toPromise().catch((_) => {
      notifyError(i18n("APP.CONCIERGE.BOOKING_RULESET_ERROR", { error: _ }));
      throw _;
    });
    this.loading = false;
    this.view = "list";
    notifySuccess(i18n("APP.CONCIERGE.BOOKING_RULESET_SUCCESS"));
  }
};
_BookingRulesModalComponent.\u0275fac = function BookingRulesModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BookingRulesModalComponent)();
};
_BookingRulesModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingRulesModalComponent, selectors: [["app-booking-rules-modal"]], decls: 22, vars: 18, consts: [["index_template", ""], ["conditions_template", ""], ["zone_template", ""], ["bool_template", ""], ["actions_template", ""], [3, "heading", "loading", "hide_confirm", "full_width"], [1, "bg-info", "text-info-content", "-mx-2", "mb-2", "w-[calc(100%+1rem)]", "rounded-sm", "p-4", "text-center", "text-xs"], [3, "ngSwitch"], [3, "ruleset", "save", "rulesetChange", 4, "ngSwitchCase"], [1, "-mx-2", "w-[calc(100%+1rem)]", "overflow-auto"], ["class", "block w-full min-w-3xl text-sm", 3, "data", "columns", 4, "ngSwitchCase"], ["class", "bg-base-200 fixed bottom-0 left-1/2 z-10 mx-auto my-2 flex w-[calc(100%-1rem)] -translate-x-1/2 items-center justify-end space-x-4 rounded-sm border-none px-4 py-2", 3, "max-w-156", 4, "ngIf"], [3, "rulesetChange", "ruleset", "save"], [1, "block", "w-full", "min-w-3xl", "text-sm", 3, "data", "columns"], [1, "m-auto", "p-4", "font-medium"], [1, "p-4"], ["class", "px-4 py-2", 4, "ngIf"], ["class", "px-4 py-2 font-mono italic", 4, "ngIf"], [1, "px-4", "py-2"], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "px-4", "py-2", "font-mono", "italic"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", "text-white"], [1, "mx-auto", "flex", "w-full", "flex-col", "items-center", "justify-center", "gap-1", "p-1"], [1, "flex", "items-center", "gap-1"], ["icon", "", "matRipple", "", 1, "rounded-sm", 3, "click", "matTooltip"], [1, "text-error"], [1, "bg-base-200", "fixed", "bottom-0", "left-1/2", "z-10", "mx-auto", "my-2", "flex", "w-[calc(100%-1rem)]", "-translate-x-1/2", "items-center", "justify-end", "space-x-4", "rounded-sm", "border-none", "px-4", "py-2"], ["btn", "", "matRipple", "", "class", "inverse w-36", 3, "click", 4, "ngIf"], ["btn", "", "matRipple", "", "class", "w-36", 3, "click", 4, "ngIf"], ["btn", "", "matRipple", "", 1, "inverse", "w-36", 3, "click"], ["btn", "", "matRipple", "", 1, "w-36", 3, "click"]], template: function BookingRulesModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fullscreen-modal-shell", 5);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "div")(4, "div", 6);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(7, 7);
    \u0275\u0275template(8, BookingRulesModalComponent_booking_rules_form_8_Template, 1, 2, "booking-rules-form", 8);
    \u0275\u0275elementStart(9, "div", 9);
    \u0275\u0275template(10, BookingRulesModalComponent_simple_table_10_Template, 6, 38, "simple-table", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, BookingRulesModalComponent_ng_template_11_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(13, BookingRulesModalComponent_ng_template_13_Template, 3, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(15, BookingRulesModalComponent_ng_template_15_Template, 4, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(17, BookingRulesModalComponent_ng_template_17_Template, 3, 5, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(19, BookingRulesModalComponent_ng_template_19_Template, 19, 12, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(21, BookingRulesModalComponent_footer_21_Template, 4, 5, "footer", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("heading", \u0275\u0275pipeBind2(1, 9, ctx.view !== "form" ? "APP.CONCIERGE.BOOKING_RULES_HEADER" : (ctx.selected == null ? null : ctx.selected.id) ? "APP.CONCIERGE.BOOKING_RULES_EDIT" : "APP.CONCIERGE.BOOKING_RULES_NEW", \u0275\u0275pureFunction1(16, _c02, ctx.type)))("loading", ctx.loading ? \u0275\u0275pipeBind1(2, 12, "APP.CONCIERGE.BOOKING_RULESET_SAVING") : "")("hide_confirm", true)("full_width", ctx.view !== "form");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 14, "APP.CONCIERGE.BOOKING_RULES_NOTE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngSwitch", ctx.view);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "form");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngSwitchCase", "list");
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", !ctx.loading);
  }
}, dependencies: [
  MatDialogModule,
  CommonModule,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  MatRippleModule,
  MatRipple,
  IconComponent,
  TranslatePipe,
  MatTooltipModule,
  MatTooltip,
  LevelPipe,
  SimpleTableComponent,
  BookingRulesFormComponent,
  FullscreenModalShellComponent
], encapsulation: 2 });
var BookingRulesModalComponent = _BookingRulesModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingRulesModalComponent, [{
    type: Component,
    args: [{ selector: "app-booking-rules-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (view !== 'form'
                    ? 'APP.CONCIERGE.BOOKING_RULES_HEADER'
                    : selected?.id
                      ? 'APP.CONCIERGE.BOOKING_RULES_EDIT'
                      : 'APP.CONCIERGE.BOOKING_RULES_NEW'
                ) | translate: { type: type }
            "
            [loading]="
                loading
                    ? ('APP.CONCIERGE.BOOKING_RULESET_SAVING' | translate)
                    : ''
            "
            [hide_confirm]="true"
            [full_width]="view !== 'form'"
        >
            <div>
                <div
                    class="bg-info text-info-content -mx-2 mb-2 w-[calc(100%+1rem)] rounded-sm p-4 text-center text-xs"
                >
                    {{ 'APP.CONCIERGE.BOOKING_RULES_NOTE' | translate }}
                </div>
                <ng-container [ngSwitch]="view">
                    <booking-rules-form
                        [ruleset]="selected"
                        [save]="activate_save"
                        (rulesetChange)="save($event)"
                        *ngSwitchCase="'form'"
                    />
                    <div class="-mx-2 w-[calc(100%+1rem)] overflow-auto">
                        <simple-table
                            class="block w-full min-w-3xl text-sm"
                            *ngSwitchCase="'list'"
                            [data]="booking_rules"
                            [columns]="[
                                {
                                    key: '_index',
                                    name: ' ',
                                    size: '3.5rem',
                                    content: index_template,
                                },
                                {
                                    key: 'zone',
                                    name: 'RESOURCE.ZONE' | translate,
                                    content: zone_template,
                                },
                                { key: 'name', name: 'FORM.NAME' | translate },
                                {
                                    key: 'auto_approve',
                                    name:
                                        'APP.CONCIERGE.BOOKING_RULES_AUTO_APPROVE'
                                        | translate,
                                    content: bool_template,
                                    size: '5.5rem',
                                },
                                {
                                    key: 'hidden',
                                    name:
                                        'APP.CONCIERGE.BOOKING_RULES_HIDE_MATCHES'
                                        | translate,
                                    content: bool_template,
                                    size: '5.5rem',
                                },
                                {
                                    key: 'conditions',
                                    name:
                                        'APP.CONCIERGE.BOOKING_RULES_CONDITIONS'
                                        | translate,
                                    content: conditions_template,
                                },
                                {
                                    key: 'actions',
                                    name: ' ',
                                    size: '5.5rem',
                                    content: actions_template,
                                },
                            ]"
                        ></simple-table>
                    </div>
                    <ng-template #index_template let-index="index">
                        <div class="m-auto p-4 font-medium">
                            {{ (index || 0) + 1 }}
                        </div>
                    </ng-template>
                    <ng-template #conditions_template let-data="data">
                        <div class="p-4">
                            {{
                                'APP.CONCIERGE.BOOKING_RULES_CONDITIONS_COUNT'
                                    | translate: { count: keyCount(data) }
                            }}
                        </div>
                    </ng-template>
                    <ng-template #zone_template let-data="data">
                        <div class="px-4 py-2" *ngIf="(data | level)?.id">
                            <div>
                                {{ (data | level)?.display_name || data }}
                            </div>
                            <div class="font-mono text-[0.625rem] opacity-30">
                                {{ data }}
                            </div>
                        </div>
                        <div
                            class="px-4 py-2 font-mono italic"
                            *ngIf="!(data | level)?.id"
                        >
                            {{
                                data === '*'
                                    ? ('RESOURCE.ZONE_ALL' | translate)
                                    : data
                            }}
                        </div>
                    </ng-template>
                    <ng-template #bool_template let-key="key" let-row="row">
                        <div
                            [class.bg-error]="!row.rules[key]"
                            [class.bg-success]="row.rules[key]"
                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl text-white"
                        >
                            <icon>{{ row.rules[key] ? 'done' : 'close' }}</icon>
                        </div>
                    </ng-template>
                    <ng-template #actions_template let-row="row">
                        <div
                            class="mx-auto flex w-full flex-col items-center justify-center gap-1 p-1"
                        >
                            <div class="flex items-center gap-1">
                                <button
                                    icon
                                    matRipple
                                    class="rounded-sm"
                                    (click)="editRuleset(row)"
                                    [matTooltip]="
                                        'APP.CONCIERGE.BOOKING_RULESET_EDIT'
                                            | translate
                                    "
                                >
                                    <icon>edit</icon>
                                </button>
                                <button
                                    icon
                                    matRipple
                                    class="rounded-sm"
                                    (click)="updateRulesetPriority(row, -1)"
                                    [matTooltip]="
                                        'APP.CONCIERGE.BOOKING_RULESET_PRIORITY_UP'
                                            | translate
                                    "
                                >
                                    <icon>arrow_upward</icon>
                                </button>
                            </div>
                            <div class="flex items-center gap-1">
                                <button
                                    icon
                                    matRipple
                                    class="rounded-sm"
                                    (click)="removeRuleset(row)"
                                    [matTooltip]="
                                        'APP.CONCIERGE.BOOKING_RULESET_REMOVE'
                                            | translate
                                    "
                                >
                                    <icon class="text-error">delete</icon>
                                </button>
                                <button
                                    icon
                                    matRipple
                                    class="rounded-sm"
                                    (click)="updateRulesetPriority(row, 1)"
                                    [matTooltip]="
                                        'APP.CONCIERGE.BOOKING_RULESET_PRIORITY_DOWN'
                                            | translate
                                    "
                                >
                                    <icon>arrow_downward</icon>
                                </button>
                            </div>
                        </div>
                    </ng-template>
                </ng-container>
                <footer
                    class="bg-base-200 fixed bottom-0 left-1/2 z-10 mx-auto my-2 flex w-[calc(100%-1rem)] -translate-x-1/2 items-center justify-end space-x-4 rounded-sm border-none px-4 py-2"
                    [class.max-w-156]="view === 'form'"
                    *ngIf="!loading"
                >
                    <button
                        btn
                        matRipple
                        class="inverse w-36"
                        *ngIf="view === 'form'"
                        (click)="selected = null; view = 'list'"
                    >
                        {{ 'COMMON.BACK' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        class="w-36"
                        *ngIf="view !== 'form'"
                        (click)="editRuleset()"
                    >
                        {{ 'APP.CONCIERGE.BOOKING_RULESET_ADD' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        class="w-36"
                        *ngIf="view === 'form'"
                        (click)="activate_save = !activate_save"
                    >
                        {{ 'APP.CONCIERGE.BOOKING_RULESET_SAVE' | translate }}
                    </button>
                </footer>
            </div>
        </fullscreen-modal-shell>
    `, imports: [
      MatDialogModule,
      CommonModule,
      MatRippleModule,
      IconComponent,
      TranslatePipe,
      MatTooltipModule,
      LevelPipe,
      SimpleTableComponent,
      BookingRulesFormComponent,
      FullscreenModalShellComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingRulesModalComponent, { className: "BookingRulesModalComponent", filePath: "apps/concierge/src/app/ui/booking-rules-modal.component.ts", lineNumber: 272 });
})();

export {
  BookingRulesModalComponent
};
//# sourceMappingURL=chunk-X3FFHHM4.js.map
