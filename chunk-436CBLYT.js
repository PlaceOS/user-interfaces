import {
  CdkDrag,
  CdkDragHandle,
  CdkDragPlaceholder,
  CdkDropList,
  DragDropModule,
  moveItemInArray
} from "./chunk-BAQQUEJF.js";
import {
  ItemListFieldComponent,
  uniqueChipItems
} from "./chunk-GRL4XW2I.js";
import {
  DurationFieldComponent
} from "./chunk-G2ABDCBJ.js";
import {
  toObservable
} from "./chunk-4ZSVAWZ7.js";
import {
  LevelPipe
} from "./chunk-BC637AVQ.js";
import {
  DateFieldComponent
} from "./chunk-Y7C63B4X.js";
import {
  openConfirmModal
} from "./chunk-7DQEG42C.js";
import {
  FullscreenModalShellComponent,
  MatSelect,
  MatSelectModule,
  SettingsToggleComponent
} from "./chunk-7PSK4KOA.js";
import {
  AsyncPipe,
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
  IconComponent,
  Input,
  Ka,
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
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  OrganisationService,
  Output,
  Qu,
  ReactiveFormsModule,
  SettingsService,
  TranslatePipe,
  Validators,
  Wu,
  endOfDay,
  filter,
  getInvalidFields,
  i18n,
  inject,
  input,
  map,
  notifyError,
  notifySuccess,
  output,
  randomString,
  resource,
  set,
  setClassMetadata,
  shareReplay,
  signal,
  startOfDay,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HHZO27EW.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

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
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 2, "BOOKINGS.AUTO_APPROVE"))("info", \u0275\u0275pipeBind1(2, 4, "BOOKINGS.AUTO_APPROVE_INFO"));
    \u0275\u0275control();
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
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, ctx_r1.form.value.rules.hidden ? "BOOKINGS.GROUPS_DENY" : "BOOKINGS.GROUPS_ALLOW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 4, "BOOKINGS.GROUPS"));
    \u0275\u0275control();
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
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "BOOKINGS.CONDITION_LOCATION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 4, "BOOKINGS.CONDITION_LOCATION"));
    \u0275\u0275control();
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
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.TAGS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 4, "COMMON.TAGS"));
    \u0275\u0275control();
  }
}
function BookingRulesFormComponent_Conditional_78_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-duration-field", 34);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, ctx_r1.form.value.rules.hidden ? "BOOKINGS.MIN_LENGTH_DENY" : "BOOKINGS.MIN_LENGTH_ALLOW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("min", 15)("max", 1440)("step", 15);
    \u0275\u0275control();
  }
}
function BookingRulesFormComponent_Conditional_78_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 35);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-duration-field", 36);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, ctx_r1.form.value.rules.hidden ? "BOOKINGS.MAX_LENGTH_DENY" : "BOOKINGS.MAX_LENGTH_ALLOW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("min", ctx_r1.form.value.conditions.min_length || 15)("max", 1440)("step", 15);
    \u0275\u0275control();
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
    \u0275\u0275conditional(ctx_r1.available_conditions().includes("min_length") ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.available_conditions().includes("max_length") ? 2 : -1);
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
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, ctx_r1.form.value.rules.hidden ? "BOOKINGS.BEFORE_DENY" : "BOOKINGS.BEFORE_ALLOW"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
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
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, ctx_r1.form.value.rules.hidden ? "BOOKINGS.AFTER_DENY" : "BOOKINGS.AFTER_ALLOW"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
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
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(6, "a-date-field", 44);
    \u0275\u0275listener("ngModelChange", function BookingRulesFormComponent_Conditional_81_Template_a_date_field_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setIsPeriod(ctx_r1.form.value.conditions.is_period[0], $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, ctx_r1.form.value.rules.hidden ? "BOOKINGS.BETWEEN_DATES_DENY" : "BOOKINGS.BETWEEN_DATES_ALLOW"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.form.value.conditions.is_period[0])("ngModelOptions", \u0275\u0275pureFunction0(8, _c0));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("from", ctx_r1.form.value.conditions.is_period[0])("ngModel", ctx_r1.form.value.conditions.is_period[1])("ngModelOptions", \u0275\u0275pureFunction0(9, _c0));
    \u0275\u0275control();
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, time_r7.value, ctx_r1.time_format()), " ");
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, time_r8.value, ctx_r1.time_format()), " ");
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
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-form-field", 38)(10, "mat-select", 48);
    \u0275\u0275listener("ngModelChange", function BookingRulesFormComponent_Conditional_82_Template_mat_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setIsBetween(ctx_r1.form.value.conditions.is_between[0], $event));
    });
    \u0275\u0275repeaterCreate(11, BookingRulesFormComponent_Conditional_82_For_12_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(13, "mat-error");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, ctx_r1.form.value.rules.hidden ? "BOOKINGS.BETWEEN_HOURS_DENY" : "BOOKINGS.BETWEEN_HOURS_ALLOW"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.form.value.conditions.is_between[0] || 6)("ngModelOptions", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.time_blocks);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.form.value.conditions.is_between[1] || 18)("ngModelOptions", \u0275\u0275pureFunction0(11, _c0));
    \u0275\u0275control();
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
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, ctx_r1.form.value.rules.hidden ? "BOOKINGS.RESOURCES_DENY" : "BOOKINGS.RESOURCES_ALLOW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 4, "BOOKINGS.RESOURCES_PLACEHOLDER"));
    \u0275\u0275control();
  }
}
var ITEM_LIST_CONDITIONS = ["groups", "locations", "tags", "resource_ids"];
var BookingRulesFormComponent = class _BookingRulesFormComponent {
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.ruleset = input(
      void 0,
      ...ngDevMode ? [{ debugName: "ruleset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.save = input(
      false,
      ...ngDevMode ? [{ debugName: "save" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.rulesetChange = output();
    this.available_conditions = signal(
      [],
      ...ngDevMode ? [{ debugName: "available_conditions" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.building_zones = toObservable(this._org.active_building).pipe(filter((_) => !!_), switchMap((bld) => Ka({ parent_id: bld.id }).catch(() => ({ data: [] }))), map((res) => res.data), shareReplay(1));
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
    this.time_format = this._settings.time_format_signal;
  }
  ngOnChanges(changes) {
    const ruleset = this.ruleset();
    if (changes.ruleset && ruleset) {
      this.available_conditions.set(Object.keys(ruleset.conditions || {}));
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
    const conditions = value.conditions;
    const condition_keys = Object.keys(conditions);
    for (const key of condition_keys) {
      if (!this.available_conditions().includes(key)) {
        delete conditions[key];
      } else if (ITEM_LIST_CONDITIONS.includes(key)) {
        conditions[key] = uniqueChipItems(conditions[key] || []);
      }
    }
    this.rulesetChange.emit(value);
  }
  static {
    this.\u0275fac = function BookingRulesFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookingRulesFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingRulesFormComponent, selectors: [["booking-rules-form"]], inputs: { ruleset: [1, "ruleset"], save: [1, "save"] }, outputs: { rulesetChange: "rulesetChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 84, vars: 73, consts: [[1, "flex", "flex-col", "space-y-2", 3, "formGroup"], [1, "flex", "items-center", "space-x-4"], [1, "flex", "flex-1", "flex-col"], ["for", "zone"], ["appearance", "outline"], ["name", "zone", "formControlName", "zone"], ["value", "*"], [3, "value"], ["for", "name"], ["matInput", "", "name", "name", "formControlName", "name", "placeholder", "Ruleset Name"], ["formGroupName", "rules", 1, "flex", "items-center", "space-x-4", "pb-4"], ["formControlName", "hidden", 3, "label", "info"], ["formControlName", "auto_approve", 3, "label", "info"], [1, "flex", "flex-col"], ["name", "zone", "multiple", "", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["value", "groups"], ["value", "locations"], ["value", "tags"], ["value", "min_length"], ["value", "max_length"], ["value", "is_before"], ["value", "is_after"], ["value", "is_between"], ["value", "is_period"], ["value", "resource_ids"], ["formGroupName", "conditions", 1, "flex", "flex-col"], ["formGroupName", "conditions", 1, "flex", "items-center", "space-x-2"], ["for", "groups"], ["name", "groups", "formControlName", "groups", 3, "placeholder"], ["for", "locations"], ["name", "locations", "formControlName", "locations", 3, "placeholder"], ["for", "tags"], ["name", "tags", "formControlName", "tags", 3, "placeholder"], ["for", "min_length"], ["name", "min_length", "formControlName", "min_length", 3, "min", "max", "step"], ["for", "max_length"], ["name", "max_length", "formControlName", "max_length", 3, "min", "max", "step"], ["for", "is-before"], ["appearance", "outline", 1, "flex-1"], ["name", "is-before", "formControlName", "is_before"], ["for", "is-after"], ["name", "is-after", "formControlName", "is_after"], [1, "flex", "items-center", "space-x-2"], [1, "flex-1", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "flex-1", 3, "ngModelChange", "from", "ngModel", "ngModelOptions"], ["for", "is_between"], [1, "flex", "w-full", "items-center", "space-x-2"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["name", "end-time", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["for", "resource_ids"], ["name", "resource_ids", "formControlName", "resource_ids", 3, "placeholder"]], template: function BookingRulesFormComponent_Template(rf, ctx) {
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
        \u0275\u0275controlCreate();
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
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(28, "mat-error");
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(31, "div", 10)(32, "div", 2);
        \u0275\u0275element(33, "settings-toggle", 11);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275controlCreate();
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
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
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
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 32, "RESOURCE.ZONE"));
        \u0275\u0275advance(6);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 34, "COMMON.ZONE_ANY"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(\u0275\u0275pipeBind1(16, 36, ctx.building_zones));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 38, "COMMON.ZONE_REQUIRED"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 40, "FORM.NAME"));
        \u0275\u0275advance(5);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 42, "FORM.NAME_REQUIRED"));
        \u0275\u0275advance(4);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(34, 44, "BOOKINGS.PREVENT"))("info", \u0275\u0275pipeBind1(35, 46, "BOOKINGS.PREVENT_INFO"));
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275conditional(!ctx.form.value.rules.hidden ? 37 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 48, "BOOKINGS.CONDITIONS"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.available_conditions);
        \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(72, _c0))("placeholder", \u0275\u0275pipeBind1(44, 50, "BOOKINGS.CONDITIONS_PLACEHOLDER"));
        \u0275\u0275control();
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
        \u0275\u0275conditional(ctx.available_conditions().includes("groups") ? 75 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.available_conditions().includes("locations") ? 76 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.available_conditions().includes("tags") ? 77 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.available_conditions().includes("min_length") || ctx.available_conditions().includes("max_length") ? 78 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.available_conditions().includes("is_before") ? 79 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.available_conditions().includes("is_after") ? 80 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.available_conditions().includes("is_period") ? 81 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.available_conditions().includes("is_between") ? 82 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.available_conditions().includes("resource_ids") ? 83 : -1);
      }
    }, dependencies: [
      CommonModule,
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
      AsyncPipe,
      DatePipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=booking-rules-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingRulesFormComponent, [{
    type: Component,
    args: [{ selector: "booking-rules-form", template: `
        <div class="flex flex-col space-y-2" [formGroup]="form">
            <div class="flex items-center space-x-4">
                <div class="flex flex-1 flex-col">
                    <label for="zone"
                        >{{ 'RESOURCE.ZONE' | translate }}<span>*</span>:</label
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
                        [label]="'BOOKINGS.PREVENT' | translate"
                        [info]="'BOOKINGS.PREVENT_INFO' | translate"
                    >
                    </settings-toggle>
                </div>
                <div class="flex flex-1 flex-col">
                    @if (!form.value.rules.hidden) {
                        <settings-toggle
                            formControlName="auto_approve"
                            [label]="'BOOKINGS.AUTO_APPROVE' | translate"
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
            @if (available_conditions().includes('groups')) {
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
            @if (available_conditions().includes('locations')) {
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
            @if (available_conditions().includes('tags')) {
                <div class="flex flex-col" formGroupName="conditions">
                    <label for="tags">
                        {{ 'COMMON.TAGS' | translate }}
                    </label>
                    <item-list-field
                        name="tags"
                        formControlName="tags"
                        [placeholder]="'COMMON.TAGS' | translate"
                    ></item-list-field>
                </div>
            }
            @if (
                available_conditions().includes('min_length') ||
                available_conditions().includes('max_length')
            ) {
                <div
                    class="flex items-center space-x-2"
                    formGroupName="conditions"
                >
                    @if (available_conditions().includes('min_length')) {
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
                    @if (available_conditions().includes('max_length')) {
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
            @if (available_conditions().includes('is_before')) {
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
            @if (available_conditions().includes('is_after')) {
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
            @if (available_conditions().includes('is_period')) {
                <div class="flex flex-col" formGroupName="conditions">
                    <label for="is-after">
                        {{
                            (form.value.rules.hidden
                                ? 'BOOKINGS.BETWEEN_DATES_DENY'
                                : 'BOOKINGS.BETWEEN_DATES_ALLOW'
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
            @if (available_conditions().includes('is_between')) {
                <div class="flex flex-col" formGroupName="conditions">
                    <label for="is_between">
                        {{
                            (form.value.rules.hidden
                                ? 'BOOKINGS.BETWEEN_HOURS_DENY'
                                : 'BOOKINGS.BETWEEN_HOURS_ALLOW'
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
                                        {{ time.value | date: time_format() }}
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
                                            {{
                                                time.value | date: time_format()
                                            }}
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
            @if (available_conditions().includes('resource_ids')) {
                <div class="flex flex-col" formGroupName="conditions">
                    <label for="resource_ids">
                        {{
                            (form.value.rules.hidden
                                ? 'BOOKINGS.RESOURCES_DENY'
                                : 'BOOKINGS.RESOURCES_ALLOW'
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
  }], null, { ruleset: [{ type: Input, args: [{ isSignal: true, alias: "ruleset", required: false }] }], save: [{ type: Input, args: [{ isSignal: true, alias: "save", required: false }] }], rulesetChange: [{ type: Output, args: ["rulesetChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingRulesFormComponent, { className: "BookingRulesFormComponent", filePath: "libs/form-fields/src/lib/booking-rules-form.component.ts", lineNumber: 444 });
})();

// apps/concierge/src/app/ui/booking-rules-modal.component.ts
var _c02 = (a0) => ({ type: a0 });
var _c1 = (a0) => ({ count: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function BookingRulesModalComponent_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "booking-rules-form", 5);
    \u0275\u0275listener("rulesetChange", function BookingRulesModalComponent_Case_7_Template_booking_rules_form_rulesetChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ruleset", ctx_r1.selected())("save", ctx_r1.activate_save());
  }
}
function BookingRulesModalComponent_Case_8_For_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 27);
  }
}
function BookingRulesModalComponent_Case_8_For_21_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, row_r5.zone)?.display_name || row_r5.zone, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r5.zone, " ");
  }
}
function BookingRulesModalComponent_Case_8_For_21_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r5.zone === "*" ? \u0275\u0275pipeBind1(2, 1, "RESOURCE.ZONE_ALL") : row_r5.zone, " ");
  }
}
function BookingRulesModalComponent_Case_8_For_21_Conditional_36_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dt", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r6 = ctx.$implicit;
    const row_r5 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, ctx_r1.CONDITION_LABELS[key_r6]), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatConditionValue(key_r6, row_r5.conditions[key_r6]), " ");
  }
}
function BookingRulesModalComponent_Case_8_For_21_Conditional_36_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dl", 29);
    \u0275\u0275repeaterCreate(1, BookingRulesModalComponent_Case_8_For_21_Conditional_36_Conditional_1_For_2_Template, 5, 4, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.conditionKeys(row_r5.conditions));
  }
}
function BookingRulesModalComponent_Case_8_For_21_Conditional_36_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1, " No conditions configured ");
    \u0275\u0275elementEnd();
  }
}
function BookingRulesModalComponent_Case_8_For_21_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275conditionalCreate(1, BookingRulesModalComponent_Case_8_For_21_Conditional_36_Conditional_1_Template, 3, 0, "dl", 29)(2, BookingRulesModalComponent_Case_8_For_21_Conditional_36_Conditional_2_Template, 2, 0, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.conditionKeys(row_r5.conditions).length ? 1 : 2);
  }
}
function BookingRulesModalComponent_Case_8_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275template(1, BookingRulesModalComponent_Case_8_For_21_div_1_Template, 1, 0, "div", 12);
    \u0275\u0275elementStart(2, "div", 13)(3, "div", 14)(4, "button", 15);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "icon");
    \u0275\u0275text(7, "drag_indicator");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 16);
    \u0275\u0275conditionalCreate(9, BookingRulesModalComponent_Case_8_For_21_Conditional_9_Template, 6, 4, "div", 17);
    \u0275\u0275pipe(10, "level");
    \u0275\u0275conditionalBranchCreate(11, BookingRulesModalComponent_Case_8_For_21_Conditional_11_Template, 3, 3, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 19);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 14)(15, "div", 20)(16, "icon");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 14)(19, "div", 20)(20, "icon");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "button", 21);
    \u0275\u0275listener("click", function BookingRulesModalComponent_Case_8_For_21_Template_button_click_22_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleExpanded(row_r5.id));
    });
    \u0275\u0275elementStart(23, "icon", 22);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 23)(28, "button", 24);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275listener("click", function BookingRulesModalComponent_Case_8_For_21_Template_button_click_28_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editRuleset(row_r5));
    });
    \u0275\u0275elementStart(30, "icon");
    \u0275\u0275text(31, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "button", 24);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275listener("click", function BookingRulesModalComponent_Case_8_For_21_Template_button_click_32_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeRuleset(row_r5));
    });
    \u0275\u0275elementStart(34, "icon", 25);
    \u0275\u0275text(35, "delete");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(36, BookingRulesModalComponent_Case_8_For_21_Conditional_36_Template, 3, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("grid-template-columns", ctx_r1.TABLE_COLUMNS);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(5, 21, "APP.CONCIERGE.BOOKING_RULESET_REORDER"));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(10, 23, row_r5.zone)?.id ? 9 : 11);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", row_r5.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-error", !row_r5.rules?.auto_approve)("bg-success", row_r5.rules?.auto_approve);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.rules?.auto_approve ? "done" : "close");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-error", !row_r5.rules?.hidden)("bg-success", row_r5.rules?.hidden);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.rules?.hidden ? "done" : "close");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", ctx_r1.isExpanded(row_r5.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.isExpanded(row_r5.id) ? "keyboard_arrow_down" : "chevron_right");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 25, "APP.CONCIERGE.BOOKING_RULES_CONDITIONS_COUNT", \u0275\u0275pureFunction1(32, _c1, ctx_r1.keyCount(row_r5.conditions))), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(29, 28, "APP.CONCIERGE.BOOKING_RULESET_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(33, 30, "APP.CONCIERGE.BOOKING_RULESET_REMOVE"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.isExpanded(row_r5.id) ? 36 : -1);
  }
}
function BookingRulesModalComponent_Case_8_ForEmpty_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1, " No rulesets configured ");
    \u0275\u0275elementEnd();
  }
}
function BookingRulesModalComponent_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 6);
    \u0275\u0275element(2, "div", 7);
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 8);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 8);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 8);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 8);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 9);
    \u0275\u0275listener("cdkDropListDropped", function BookingRulesModalComponent_Case_8_Template_div_cdkDropListDropped_19_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.drop($event));
    });
    \u0275\u0275repeaterCreate(20, BookingRulesModalComponent_Case_8_For_21_Template, 37, 34, "div", 10, _forTrack0, false, BookingRulesModalComponent_Case_8_ForEmpty_22_Template, 2, 0, "div", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("grid-template-columns", ctx_r1.TABLE_COLUMNS);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 8, "RESOURCE.ZONE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 10, "FORM.NAME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 12, "APP.CONCIERGE.BOOKING_RULES_AUTO_APPROVE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 14, "APP.CONCIERGE.BOOKING_RULES_HIDE_MATCHES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 16, "APP.CONCIERGE.BOOKING_RULES_CONDITIONS"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.booking_rules());
  }
}
function BookingRulesModalComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function BookingRulesModalComponent_Conditional_9_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.selected.set(null);
      return \u0275\u0275resetView(ctx_r1.view.set("list"));
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
function BookingRulesModalComponent_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function BookingRulesModalComponent_Conditional_9_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
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
function BookingRulesModalComponent_Conditional_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function BookingRulesModalComponent_Conditional_9_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.activate_save.update((state) => !state));
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
function BookingRulesModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "footer", 33);
    \u0275\u0275conditionalCreate(1, BookingRulesModalComponent_Conditional_9_Conditional_1_Template, 3, 3, "button", 34);
    \u0275\u0275conditionalCreate(2, BookingRulesModalComponent_Conditional_9_Conditional_2_Template, 3, 3, "button", 35);
    \u0275\u0275conditionalCreate(3, BookingRulesModalComponent_Conditional_9_Conditional_3_Template, 3, 3, "button", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("max-w-156", ctx_r1.view() === "form");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.view() === "form" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.view() !== "form" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.view() === "form" ? 3 : -1);
  }
}
var BookingRulesModalComponent = class _BookingRulesModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.view = signal(
      "list",
      ...ngDevMode ? [{ debugName: "view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.activate_save = signal(
      false,
      ...ngDevMode ? [{ debugName: "activate_save" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected = signal(
      null,
      ...ngDevMode ? [{ debugName: "selected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.change = signal(
      0,
      ...ngDevMode ? [{ debugName: "change" }] : (
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
    this._booking_rules = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_booking_rules" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        building: this._org.active_building()?.id,
        change: this.change()
      }),
      defaultValue: [],
      loader: async ({ params }) => {
        if (!params.building)
          return [];
        const { details } = await Wu(params.building, `${this._data.type}_booking_rules`).catch(() => ({ details: [] }));
        return details instanceof Array ? this.normaliseRulesetIds(details) : [];
      }
    }));
    this.booking_rules = this._booking_rules.value;
    this.type = this._data.type;
    this.TABLE_COLUMNS = "3.5rem 1fr 1fr 5.5rem 5.5rem 1fr 5.5rem";
    this.CONDITION_LABELS = {
      groups: "BOOKINGS.CONDITION_GROUPS",
      locations: "BOOKINGS.CONDITION_LOCATION",
      tags: "BOOKINGS.CONDITION_TAGS",
      min_length: "BOOKINGS.CONDITION_MIN_LENGTH",
      max_length: "BOOKINGS.CONDITION_MAX_LENGTH",
      is_before: "BOOKINGS.CONDITION_WITHIN",
      is_after: "BOOKINGS.CONDITION_AFTER",
      is_between: "BOOKINGS.CONDITION_BETWEEN_HOURS",
      is_period: "BOOKINGS.CONDITION_BETWEEN_DATES",
      resource_ids: "BOOKINGS.CONDITION_RESOURCES"
    };
  }
  keyCount(item) {
    return Object.keys(item).length;
  }
  conditionKeys(conditions) {
    return Object.keys(conditions || {});
  }
  normaliseRulesetIds(rules) {
    const ids = /* @__PURE__ */ new Set();
    return rules.map((rule) => {
      let id = rule.id;
      while (!id || ids.has(id))
        id = `ruleset-${randomString(8)}`;
      ids.add(id);
      return id === rule.id ? rule : __spreadProps(__spreadValues({}, rule), { id });
    });
  }
  formatConditionValue(key, value) {
    if (value == null)
      return "";
    if (key === "min_length" || key === "max_length") {
      const minutes = Number(value);
      if (minutes < 60)
        return `${minutes} ${minutes === 1 ? "minute" : "minutes"}`;
      const hours = Math.floor(minutes / 60);
      const remaining = minutes % 60;
      const hour_text = `${hours} ${hours === 1 ? "hour" : "hours"}`;
      return remaining > 0 ? `${hour_text} ${remaining} ${remaining === 1 ? "minute" : "minutes"}` : hour_text;
    }
    if (key === "is_between" && Array.isArray(value)) {
      const pad = (n) => String(n).padStart(2, "0");
      return `${pad(value[0])}:00 to ${pad(value[1])}:00`;
    }
    if (key === "is_period" && Array.isArray(value)) {
      return `${new Date(value[0]).toLocaleDateString()} to ${new Date(value[1]).toLocaleDateString()}`;
    }
    if (Array.isArray(value)) {
      return value.join(", ");
    }
    return `${value}`;
  }
  isExpanded(id) {
    return !!this.show_children()[id];
  }
  toggleExpanded(id) {
    this.show_children.update((state) => __spreadProps(__spreadValues({}, state), {
      [id]: !state[id]
    }));
  }
  editRuleset(ruleset) {
    this.view.set("form");
    this.selected.set(ruleset || null);
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
    const rules = [...this.booking_rules()];
    const index = rules.findIndex((_) => _.id === ruleset.id);
    if (index >= 0) {
      rules.splice(index, 1);
      await Qu(this._org.building.id, {
        name: `${this.type}_booking_rules`,
        description: `${this.type} Booking Rules`,
        details: rules
      }).catch((_) => {
        notifyError("Error removing booking rules.");
        throw _;
      });
      this.change.set(Date.now());
    }
    notifySuccess("Successfully removed booking rules.");
    result.close();
  }
  async drop(event) {
    if (event.previousIndex === event.currentIndex)
      return;
    const rules = [...this.booking_rules()];
    moveItemInArray(rules, event.previousIndex, event.currentIndex);
    await Qu(this._org.building.id, {
      name: `${this.type}_booking_rules`,
      description: `${this.type} Booking Rules`,
      details: rules
    }).catch((_) => {
      notifyError("Error saving booking rules order change.");
      throw _;
    });
    notifySuccess("Successfully updated booking rules order.");
    this.change.set(Date.now());
  }
  async save(new_ruleset) {
    this.loading.set(true);
    const rules = [...this.booking_rules()];
    if (new_ruleset) {
      const selected = this.selected();
      const index = selected ? rules.findIndex((rule) => rule === selected || rule.id === selected.id) : -1;
      if (index >= 0) {
        rules[index] = new_ruleset;
      } else {
        rules.push(new_ruleset);
      }
    }
    const unique_rules = this.normaliseRulesetIds(rules);
    await Qu(this._org.building.id, {
      name: `${this.type}_booking_rules`,
      description: `${this.type} Booking Rules`,
      details: unique_rules
    }).catch((_) => {
      notifyError(i18n("APP.CONCIERGE.BOOKING_RULESET_ERROR", { error: _ }));
      throw _;
    });
    this.change.update((value) => value + 1);
    this.loading.set(false);
    this.view.set("list");
    notifySuccess(i18n("APP.CONCIERGE.BOOKING_RULESET_SUCCESS"));
  }
  static {
    this.\u0275fac = function BookingRulesModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookingRulesModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingRulesModalComponent, selectors: [["app-booking-rules-modal"]], decls: 10, vars: 17, consts: [[3, "heading", "loading", "hide_close", "hide_confirm", "full_width"], [1, "bg-info", "text-info-content", "-mx-2", "mb-2", "w-[calc(100%+1rem)]", "rounded-sm", "p-4", "text-center", "text-xs"], [3, "ruleset", "save"], [1, "-mx-2", "w-[calc(100%+1rem)]", "overflow-auto"], [1, "bg-base-200", "fixed", "bottom-0", "left-1/2", "z-10", "mx-auto", "my-2", "flex", "w-[calc(100%-1rem)]", "-translate-x-1/2", "items-center", "justify-end", "space-x-4", "rounded-sm", "border-none", "px-4", "py-2", 3, "max-w-156"], [3, "rulesetChange", "ruleset", "save"], [1, "border-base-300", "grid", "min-w-3xl", "border", "text-sm"], [1, "bg-base-300", "border-base-200", "border-b", "px-4", "py-2", "font-medium"], [1, "bg-base-300", "border-base-200", "flex", "h-full", "items-center", "border-b", "border-l", "px-4", "py-2", "font-medium"], ["cdkDropList", "", 1, "min-w-3xl", 3, "cdkDropListDropped"], ["cdkDrag", "", "cdkDragLockAxis", "y", 1, "border-base-300", "border-x", "border-b"], [1, "border-base-300", "flex", "items-center", "justify-center", "border-x", "border-b", "p-8", "opacity-30"], ["class", "border-base-content bg-base-300 h-14 rounded-sm border-2 border-dashed opacity-50", 4, "cdkDragPlaceholder"], [1, "bg-base-100", "grid", "text-sm"], [1, "border-base-200", "flex", "items-center", "justify-center", "border-r"], ["icon", "", "matRipple", "", "cdkDragHandle", "", 1, "cursor-grab", "rounded-sm", 3, "matTooltip"], [1, "border-base-200", "flex", "items-center", "border-r"], [1, "px-4", "py-2"], [1, "px-4", "py-2", "font-mono", "italic"], [1, "border-base-200", "border-r", "p-4"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", "text-white"], ["type", "button", 1, "border-base-200", "flex", "items-center", "border-r", "p-4", "text-left", "select-none", 3, "click"], [1, "mr-1", "text-2xl"], [1, "flex", "items-center", "justify-center", "gap-1", "p-1"], ["icon", "", "matRipple", "", 1, "rounded-sm", 3, "click", "matTooltip"], [1, "text-error"], [1, "bg-base-200", "border-base-300", "border-t", "px-6", "py-3"], [1, "border-base-content", "bg-base-300", "h-14", "rounded-sm", "border-2", "border-dashed", "opacity-50"], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "grid", "grid-cols-[max-content_1fr]", "gap-x-4", "gap-y-2", "text-sm"], [1, "text-xs", "opacity-30"], [1, "font-medium", "opacity-60"], [1, "min-w-0", "break-words"], [1, "bg-base-200", "fixed", "bottom-0", "left-1/2", "z-10", "mx-auto", "my-2", "flex", "w-[calc(100%-1rem)]", "-translate-x-1/2", "items-center", "justify-end", "space-x-4", "rounded-sm", "border-none", "px-4", "py-2"], ["btn", "", "matRipple", "", 1, "inverse", "w-36"], ["btn", "", "matRipple", "", 1, "w-36"], ["btn", "", "matRipple", "", 1, "inverse", "w-36", 3, "click"], ["btn", "", "matRipple", "", 1, "w-36", 3, "click"]], template: function BookingRulesModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div")(4, "div", 1);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, BookingRulesModalComponent_Case_7_Template, 1, 2, "booking-rules-form", 2)(8, BookingRulesModalComponent_Case_8_Template, 23, 18, "div", 3);
        \u0275\u0275conditionalCreate(9, BookingRulesModalComponent_Conditional_9_Template, 4, 5, "footer", 4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_6_0;
        \u0275\u0275property("heading", \u0275\u0275pipeBind2(1, 8, ctx.view() !== "form" ? "APP.CONCIERGE.BOOKING_RULES_HEADER" : ctx.selected()?.id ? "APP.CONCIERGE.BOOKING_RULES_EDIT" : "APP.CONCIERGE.BOOKING_RULES_NEW", \u0275\u0275pureFunction1(15, _c02, ctx.type)))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 11, "APP.CONCIERGE.BOOKING_RULESET_SAVING") : "")("hide_close", ctx.view() === "form")("hide_confirm", true)("full_width", ctx.view() !== "form");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 13, "APP.CONCIERGE.BOOKING_RULES_NOTE"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_6_0 = ctx.view()) === "form" ? 7 : tmp_6_0 === "list" ? 8 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 9 : -1);
      }
    }, dependencies: [
      MatDialogModule,
      MatRippleModule,
      MatRipple,
      IconComponent,
      MatTooltipModule,
      MatTooltip,
      DragDropModule,
      CdkDropList,
      CdkDrag,
      CdkDragHandle,
      CdkDragPlaceholder,
      BookingRulesFormComponent,
      FullscreenModalShellComponent,
      TranslatePipe,
      LevelPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingRulesModalComponent, [{
    type: Component,
    args: [{ selector: "app-booking-rules-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (view() !== 'form'
                    ? 'APP.CONCIERGE.BOOKING_RULES_HEADER'
                    : selected()?.id
                      ? 'APP.CONCIERGE.BOOKING_RULES_EDIT'
                      : 'APP.CONCIERGE.BOOKING_RULES_NEW'
                ) | translate: { type: type }
            "
            [loading]="
                loading()
                    ? ('APP.CONCIERGE.BOOKING_RULESET_SAVING' | translate)
                    : ''
            "
            [hide_close]="view() === 'form'"
            [hide_confirm]="true"
            [full_width]="view() !== 'form'"
        >
            <div>
                <div
                    class="bg-info text-info-content -mx-2 mb-2 w-[calc(100%+1rem)] rounded-sm p-4 text-center text-xs"
                >
                    {{ 'APP.CONCIERGE.BOOKING_RULES_NOTE' | translate }}
                </div>
                @switch (view()) {
                    @case ('form') {
                        <booking-rules-form
                            [ruleset]="selected()"
                            [save]="activate_save()"
                            (rulesetChange)="save($event)"
                        />
                    }
                    @case ('list') {
                        <div class="-mx-2 w-[calc(100%+1rem)] overflow-auto">
                            <div
                                class="border-base-300 grid min-w-3xl border text-sm"
                                [style.grid-template-columns]="TABLE_COLUMNS"
                            >
                                <div
                                    class="bg-base-300 border-base-200 border-b px-4 py-2 font-medium"
                                ></div>
                                <div
                                    class="bg-base-300 border-base-200 flex h-full items-center border-b border-l px-4 py-2 font-medium"
                                >
                                    {{ 'RESOURCE.ZONE' | translate }}
                                </div>
                                <div
                                    class="bg-base-300 border-base-200 flex h-full items-center border-b border-l px-4 py-2 font-medium"
                                >
                                    {{ 'FORM.NAME' | translate }}
                                </div>
                                <div
                                    class="bg-base-300 border-base-200 flex h-full items-center border-b border-l px-4 py-2 font-medium"
                                >
                                    {{
                                        'APP.CONCIERGE.BOOKING_RULES_AUTO_APPROVE'
                                            | translate
                                    }}
                                </div>
                                <div
                                    class="bg-base-300 border-base-200 flex h-full items-center border-b border-l px-4 py-2 font-medium"
                                >
                                    {{
                                        'APP.CONCIERGE.BOOKING_RULES_HIDE_MATCHES'
                                            | translate
                                    }}
                                </div>
                                <div
                                    class="bg-base-300 border-base-200 flex h-full items-center border-b border-l px-4 py-2 font-medium"
                                >
                                    {{
                                        'APP.CONCIERGE.BOOKING_RULES_CONDITIONS'
                                            | translate
                                    }}
                                </div>
                                <div
                                    class="bg-base-300 border-base-200 flex h-full items-center border-b border-l px-4 py-2 font-medium"
                                ></div>
                            </div>
                            <div
                                cdkDropList
                                (cdkDropListDropped)="drop($event)"
                                class="min-w-3xl"
                            >
                                @for (
                                    row of booking_rules();
                                    track row.id;
                                    let i = $index
                                ) {
                                    <div
                                        cdkDrag
                                        cdkDragLockAxis="y"
                                        class="border-base-300 border-x border-b"
                                    >
                                        <div
                                            class="border-base-content bg-base-300 h-14 rounded-sm border-2 border-dashed opacity-50"
                                            *cdkDragPlaceholder
                                        ></div>
                                        <div
                                            class="bg-base-100 grid text-sm"
                                            [style.grid-template-columns]="
                                                TABLE_COLUMNS
                                            "
                                        >
                                            <div
                                                class="border-base-200 flex items-center justify-center border-r"
                                            >
                                                <button
                                                    icon
                                                    matRipple
                                                    cdkDragHandle
                                                    class="cursor-grab rounded-sm"
                                                    [matTooltip]="
                                                        'APP.CONCIERGE.BOOKING_RULESET_REORDER'
                                                            | translate
                                                    "
                                                >
                                                    <icon>drag_indicator</icon>
                                                </button>
                                            </div>
                                            <div
                                                class="border-base-200 flex items-center border-r"
                                            >
                                                @if ((row.zone | level)?.id) {
                                                    <div class="px-4 py-2">
                                                        <div>
                                                            {{
                                                                (
                                                                    row.zone
                                                                    | level
                                                                )
                                                                    ?.display_name ||
                                                                    row.zone
                                                            }}
                                                        </div>
                                                        <div
                                                            class="font-mono text-[0.625rem] opacity-30"
                                                        >
                                                            {{ row.zone }}
                                                        </div>
                                                    </div>
                                                } @else {
                                                    <div
                                                        class="px-4 py-2 font-mono italic"
                                                    >
                                                        {{
                                                            row.zone === '*'
                                                                ? ('RESOURCE.ZONE_ALL'
                                                                  | translate)
                                                                : row.zone
                                                        }}
                                                    </div>
                                                }
                                            </div>
                                            <div
                                                class="border-base-200 border-r p-4"
                                            >
                                                {{ row.name }}
                                            </div>
                                            <div
                                                class="border-base-200 flex items-center justify-center border-r"
                                            >
                                                <div
                                                    [class.bg-error]="
                                                        !row.rules?.auto_approve
                                                    "
                                                    [class.bg-success]="
                                                        row.rules?.auto_approve
                                                    "
                                                    class="flex h-8 w-8 items-center justify-center rounded-sm text-2xl text-white"
                                                >
                                                    <icon>{{
                                                        row.rules?.auto_approve
                                                            ? 'done'
                                                            : 'close'
                                                    }}</icon>
                                                </div>
                                            </div>
                                            <div
                                                class="border-base-200 flex items-center justify-center border-r"
                                            >
                                                <div
                                                    [class.bg-error]="
                                                        !row.rules?.hidden
                                                    "
                                                    [class.bg-success]="
                                                        row.rules?.hidden
                                                    "
                                                    class="flex h-8 w-8 items-center justify-center rounded-sm text-2xl text-white"
                                                >
                                                    <icon>{{
                                                        row.rules?.hidden
                                                            ? 'done'
                                                            : 'close'
                                                    }}</icon>
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                class="border-base-200 flex items-center border-r p-4 text-left select-none"
                                                (click)="toggleExpanded(row.id)"
                                                [attr.aria-expanded]="
                                                    isExpanded(row.id)
                                                "
                                            >
                                                <icon class="mr-1 text-2xl">{{
                                                    isExpanded(row.id)
                                                        ? 'keyboard_arrow_down'
                                                        : 'chevron_right'
                                                }}</icon>
                                                {{
                                                    'APP.CONCIERGE.BOOKING_RULES_CONDITIONS_COUNT'
                                                        | translate
                                                            : {
                                                                  count: keyCount(
                                                                      row.conditions
                                                                  ),
                                                              }
                                                }}
                                            </button>
                                            <div
                                                class="flex items-center justify-center gap-1 p-1"
                                            >
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
                                                    (click)="removeRuleset(row)"
                                                    [matTooltip]="
                                                        'APP.CONCIERGE.BOOKING_RULESET_REMOVE'
                                                            | translate
                                                    "
                                                >
                                                    <icon class="text-error"
                                                        >delete</icon
                                                    >
                                                </button>
                                            </div>
                                        </div>
                                        @if (isExpanded(row.id)) {
                                            <div
                                                class="bg-base-200 border-base-300 border-t px-6 py-3"
                                            >
                                                @if (
                                                    conditionKeys(
                                                        row.conditions
                                                    ).length
                                                ) {
                                                    <dl
                                                        class="grid grid-cols-[max-content_1fr] gap-x-4 gap-y-2 text-sm"
                                                    >
                                                        @for (
                                                            key of conditionKeys(
                                                                row.conditions
                                                            );
                                                            track key
                                                        ) {
                                                            <dt
                                                                class="font-medium opacity-60"
                                                            >
                                                                {{
                                                                    CONDITION_LABELS[
                                                                        key
                                                                    ]
                                                                        | translate
                                                                }}
                                                            </dt>
                                                            <dd
                                                                class="min-w-0 break-words"
                                                            >
                                                                {{
                                                                    formatConditionValue(
                                                                        key,
                                                                        row
                                                                            .conditions[
                                                                            key
                                                                        ]
                                                                    )
                                                                }}
                                                            </dd>
                                                        }
                                                    </dl>
                                                } @else {
                                                    <div
                                                        class="text-xs opacity-30"
                                                    >
                                                        No conditions configured
                                                    </div>
                                                }
                                            </div>
                                        }
                                    </div>
                                } @empty {
                                    <div
                                        class="border-base-300 flex items-center justify-center border-x border-b p-8 opacity-30"
                                    >
                                        No rulesets configured
                                    </div>
                                }
                            </div>
                        </div>
                    }
                }
                @if (!loading()) {
                    <footer
                        class="bg-base-200 fixed bottom-0 left-1/2 z-10 mx-auto my-2 flex w-[calc(100%-1rem)] -translate-x-1/2 items-center justify-end space-x-4 rounded-sm border-none px-4 py-2"
                        [class.max-w-156]="view() === 'form'"
                    >
                        @if (view() === 'form') {
                            <button
                                btn
                                matRipple
                                class="inverse w-36"
                                (click)="selected.set(null); view.set('list')"
                            >
                                {{ 'COMMON.BACK' | translate }}
                            </button>
                        }
                        @if (view() !== 'form') {
                            <button
                                btn
                                matRipple
                                class="w-36"
                                (click)="editRuleset()"
                            >
                                {{
                                    'APP.CONCIERGE.BOOKING_RULESET_ADD'
                                        | translate
                                }}
                            </button>
                        }
                        @if (view() === 'form') {
                            <button
                                btn
                                matRipple
                                class="w-36"
                                (click)="
                                    activate_save.update((state) => !state)
                                "
                            >
                                {{
                                    'APP.CONCIERGE.BOOKING_RULESET_SAVE'
                                        | translate
                                }}
                            </button>
                        }
                    </footer>
                }
            </div>
        </fullscreen-modal-shell>
    `, imports: [
      MatDialogModule,
      MatRippleModule,
      IconComponent,
      TranslatePipe,
      MatTooltipModule,
      LevelPipe,
      DragDropModule,
      BookingRulesFormComponent,
      FullscreenModalShellComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingRulesModalComponent, { className: "BookingRulesModalComponent", filePath: "apps/concierge/src/app/ui/booking-rules-modal.component.ts", lineNumber: 413 });
})();

export {
  BookingRulesModalComponent
};
//# sourceMappingURL=chunk-436CBLYT.js.map
