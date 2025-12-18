import {
  BookingRulesModalComponent
} from "./chunk-DFFN3HTW.js";
import {
  SearchbarComponent
} from "./chunk-TFV6XH4G.js";
import {
  DateOptionsComponent
} from "./chunk-IJ5MCBUG.js";
import "./chunk-K7DX7F3H.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent
} from "./chunk-ABF7HW34.js";
import {
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  Booking,
  BookingFormService,
  BuildingPipe,
  COMMA,
  Clipboard,
  CommonModule,
  Component,
  CounterComponent,
  DateFieldComponent,
  DatePipe,
  DefaultValueAccessor,
  DurationFieldComponent,
  ENTER,
  EventEmitter,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  FullscreenModalShellComponent,
  IconComponent,
  Injectable,
  LockerGridComponent,
  LockerListFieldComponent,
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
  NavigationEnd,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgModule,
  OrganisationService,
  Output,
  ReactiveFormsModule,
  RecurrenceDays,
  Router,
  RouterModule,
  RouterOutlet,
  SPACE,
  SelectUserModalComponent,
  SettingsService,
  SettingsToggleComponent,
  SimpleTableComponent,
  Subject,
  TimeFieldComponent,
  TranslatePipe,
  UserSearchFieldComponent,
  Validators,
  __spreadProps,
  __spreadValues,
  addChipItem,
  addDays,
  addHours,
  approveBooking,
  checkinBooking,
  combineLatest,
  currentUser,
  debounceTime,
  distinctUntilChanged,
  ec,
  endOfDay,
  first,
  firstTruthyValueFrom,
  getInvalidFields,
  getUnixTime,
  i18n,
  inject,
  lastValueFrom,
  loadLockerBanks,
  loadLockers,
  map,
  nextValueFrom,
  notifyError,
  notifyInfo,
  notifySuccess,
  of,
  openConfirmModal,
  queryBookings,
  queryPagedBookings,
  randomInt,
  rejectBooking,
  removeBooking,
  removeChipItem,
  saveBooking,
  scan,
  set,
  setClassMetadata,
  shareReplay,
  showStaff,
  signal,
  startOfDay,
  switchMap,
  tap,
  timer,
  unique,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
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
  ɵɵpureFunction2,
  ɵɵpureFunction5,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LG5FGLUS.js";

// apps/concierge/src/app/lockers/locker-bank-modal.component.ts
var _c0 = () => ({ standalone: true });
function LockerBankModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 4)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function LockerBankModalComponent_Conditional_6_For_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 28);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const level_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_13_0 = \u0275\u0275pipeBind1(2, 1, level_r3.parent_id)) == null ? null : tmp_13_0.display_name, " ");
  }
}
function LockerBankModalComponent_Conditional_6_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12)(1, "div", 26);
    \u0275\u0275conditionalCreate(2, LockerBankModalComponent_Conditional_6_For_7_Conditional_2_Template, 5, 3, "div", 27);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", level_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r3.display_name || level_r3.name, " ");
  }
}
function LockerBankModalComponent_Conditional_6_For_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 29);
    \u0275\u0275listener("removed", function LockerBankModalComponent_Conditional_6_For_47_Template_mat_chip_row_removed_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeTag(item_r5));
    });
    \u0275\u0275elementStart(1, "div", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 31);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r5, " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 2, "COMMON.ITEM_REMOVE"));
  }
}
function LockerBankModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 5)(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 10)(5, "mat-select", 11);
    \u0275\u0275listener("ngModelChange", function LockerBankModalComponent_Conditional_6_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ zones: [$event] }));
    });
    \u0275\u0275repeaterCreate(6, LockerBankModalComponent_Conditional_6_For_7_Template, 5, 3, "mat-option", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 13)(10, "div", 14)(11, "label", 9);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-form-field", 15);
    \u0275\u0275element(15, "input", 16);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementStart(17, "mat-error");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 14)(21, "label", 17);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-form-field", 15);
    \u0275\u0275element(25, "input", 18);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementStart(27, "mat-error");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "label", 19);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "a-counter", 20);
    \u0275\u0275elementStart(34, "label", 21);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-form-field", 15);
    \u0275\u0275element(38, "textarea", 22);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "label", 23);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "mat-form-field", 10)(44, "mat-chip-grid", 24, 0);
    \u0275\u0275repeaterCreate(46, LockerBankModalComponent_Conditional_6_For_47_Template, 7, 4, "mat-chip-row", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "input", 25);
    \u0275\u0275listener("matChipInputTokenEnd", function LockerBankModalComponent_Conditional_6_Template_input_matChipInputTokenEnd_48_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addTag($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const chipList_r6 = \u0275\u0275reference(45);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 20, "RESOURCE.LEVEL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.form.value.zones[0] || "")("ngModelOptions", \u0275\u0275pureFunction0(44, _c0));
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(8, 22, ctx_r1.levels));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 24, "FORM.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(16, 26, "FORM.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 28, "FORM.NAME_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 30, "EXPLORE.MAP_ID"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(26, 32, "EXPLORE.MAP_ID"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 34, "EXPLORE.MAP_ID_REQUIRED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 36, "COMMON.HEIGHT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("min", 1)("max", 16)("render_fn", ctx_r1.render_fn);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 38, "FORM.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(39, 40, "FORM.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 42, "COMMON.TAGS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.tag_list);
    \u0275\u0275advance(2);
    \u0275\u0275property("matChipInputFor", chipList_r6)("matChipInputSeparatorKeyCodes", ctx_r1.separators)("matChipInputAddOnBlur", true);
  }
}
function LockerBankModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 6);
    \u0275\u0275element(1, "mat-spinner", 32);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.LOCKERS_BANK_SAVING"));
  }
}
var _LockerBankModalComponent = class _LockerBankModalComponent {
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  get tag_list() {
    return this.form.controls.tags.value;
  }
  get id() {
    return this._data?.id || "";
  }
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.event = new EventEmitter();
    this.render_fn = (v) => `${v}u`;
    this.separators = [ENTER, COMMA, SPACE];
    this.levels = this._org.level_list.pipe(map((_) => {
      if (!this._settings.get("app.use_region")) {
        const blds = this._org.buildingsForRegion();
        const bld_ids = blds.map((bld) => bld.id);
        const list = _.filter((lvl) => bld_ids.includes(lvl.parent_id));
        list.map((lvl) => __spreadProps(__spreadValues({}, lvl), {
          display_name: `${blds.find((_2) => _2.id === lvl.parent_id)?.display_name} - ${lvl.display_name}`
        }));
        if (!this.form.value.zones?.length) {
          this.form.patchValue({ zones: [list[0].id] });
        }
        return list;
      }
      return _.filter((lvl) => lvl.parent_id === this._org.building.id);
    }));
    this.addTag = (e) => addChipItem(this.form.controls.tags, e);
    this.removeTag = (i) => removeChipItem(this.form.controls.tags, i);
    this.form = new FormGroup({
      id: new FormControl(""),
      name: new FormControl("", [Validators.required]),
      map_id: new FormControl("", [Validators.required]),
      notes: new FormControl(""),
      height: new FormControl(3),
      zones: new FormControl([]),
      tags: new FormControl([])
    });
    const _data = this._data;
    if (_data)
      this.form.patchValue(_data);
  }
  postForm() {
    if (!this.form.valid)
      return;
    this.loading = true;
    const value = __spreadValues({}, this.form.getRawValue());
    const level = this._org.levelWithID(value.zones);
    value.zones = unique([
      level.id,
      this._org.organisation.id,
      this._org.region.id,
      level.parent_id
    ].filter((_) => _));
    this._dialog_ref.disableClose = true;
    this.event.emit({ reason: "done", metadata: value });
  }
};
_LockerBankModalComponent.\u0275fac = function LockerBankModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LockerBankModalComponent)();
};
_LockerBankModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerBankModalComponent, selectors: [["locker-bank-modal"]], outputs: { event: "event" }, decls: 12, vars: 8, consts: [["chipList", ""], [1, "w-lg"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "max-h-[65vh]", "flex-col", "overflow-auto", "p-4", 3, "formGroup"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "border-base-300", "flex", "items-center", "justify-end", "space-x-2", "border-t", "px-4", "py-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["for", "name"], ["appearance", "outline", 1, "w-full"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], [1, "flex", "space-x-4"], [1, "flex", "flex-1", "flex-col"], ["appearance", "outline"], ["matInput", "", "name", "name", "formControlName", "name", 3, "placeholder"], ["for", "map-id"], ["matInput", "", "name", "map-id", "formControlName", "map_id", 3, "placeholder"], ["for", "row"], ["formControlName", "height", 1, "mb-4", 3, "min", "max", "render_fn"], ["for", "notes"], ["matInput", "", "name", "notes", "formControlName", "notes", 3, "placeholder"], ["for", "tags"], ["name", "tags", "aria-label", "Tag List"], ["placeholder", "Tags...", 3, "matChipInputTokenEnd", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [3, "removed"], [1, "max-w-md", "truncate"], ["matChipRemove", ""], ["diameter", "32"]], template: function LockerBankModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "h2", 3);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, LockerBankModalComponent_Conditional_5_Template, 3, 0, "button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, LockerBankModalComponent_Conditional_6_Template, 49, 45, "main", 5)(7, LockerBankModalComponent_Conditional_7_Template, 5, 3, "main", 6);
    \u0275\u0275elementStart(8, "footer", 7)(9, "button", 8);
    \u0275\u0275listener("click", function LockerBankModalComponent_Template_button_click_9_listener() {
      return ctx.postForm();
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, ctx.id ? "APP.CONCIERGE.LOCKERS_BANK_EDIT" : "APP.CONCIERGE.LOCKERS_BANK_NEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading ? 6 : 7);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 6, "COMMON.SAVE"), " ");
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  TranslatePipe,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatDialogModule,
  MatDialogClose,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatFormFieldModule,
  MatFormField,
  MatError,
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
  CounterComponent,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  BuildingPipe
], encapsulation: 2 });
var LockerBankModalComponent = _LockerBankModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockerBankModalComponent, [{
    type: Component,
    args: [{ selector: "locker-bank-modal", template: `
        <div class="w-lg">
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    {{
                        (id
                            ? 'APP.CONCIERGE.LOCKERS_BANK_EDIT'
                            : 'APP.CONCIERGE.LOCKERS_BANK_NEW'
                        ) | translate
                    }}
                </h2>
                @if (!loading) {
                    <button icon matRipple mat-dialog-close>
                        <icon>close</icon>
                    </button>
                }
            </header>
            @if (!loading) {
                <main
                    class="flex max-h-[65vh] flex-col overflow-auto p-4"
                    [formGroup]="form"
                >
                    <label for="name">{{ 'RESOURCE.LEVEL' | translate }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-select
                            [ngModel]="form.value.zones[0] || ''"
                            (ngModelChange)="
                                form.patchValue({ zones: [$event] })
                            "
                            [ngModelOptions]="{ standalone: true }"
                        >
                            @for (level of levels | async; track level) {
                                <mat-option [value]="level.id">
                                    <div class="flex flex-col-reverse">
                                        @if (use_region) {
                                            <div class="text-xs opacity-30">
                                                {{
                                                    (level.parent_id | building)
                                                        ?.display_name
                                                }}
                                                <span class="opacity-0">
                                                    -
                                                </span>
                                            </div>
                                        }
                                        <div>
                                            {{
                                                level.display_name || level.name
                                            }}
                                        </div>
                                    </div>
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    <div class="flex space-x-4">
                        <div class="flex flex-1 flex-col">
                            <label for="name">{{
                                'FORM.NAME' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="name"
                                    formControlName="name"
                                    [placeholder]="'FORM.NAME' | translate"
                                />
                                <mat-error>{{
                                    'FORM.NAME_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                        <div class="flex flex-1 flex-col">
                            <label for="map-id">{{
                                'EXPLORE.MAP_ID' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="map-id"
                                    formControlName="map_id"
                                    [placeholder]="'EXPLORE.MAP_ID' | translate"
                                />
                                <mat-error>
                                    {{ 'EXPLORE.MAP_ID_REQUIRED' | translate }}
                                </mat-error>
                            </mat-form-field>
                        </div>
                    </div>
                    <label for="row">{{ 'COMMON.HEIGHT' | translate }}</label>
                    <a-counter
                        formControlName="height"
                        class="mb-4"
                        [min]="1"
                        [max]="16"
                        [render_fn]="render_fn"
                    ></a-counter>
                    <label for="notes">{{ 'FORM.NOTES' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <textarea
                            matInput
                            name="notes"
                            [placeholder]="'FORM.NOTES' | translate"
                            formControlName="notes"
                        ></textarea>
                    </mat-form-field>
                    <label for="tags"> {{ 'COMMON.TAGS' | translate }} </label>
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-chip-grid
                            name="tags"
                            #chipList
                            aria-label="Tag List"
                        >
                            @for (item of tag_list; track item) {
                                <mat-chip-row (removed)="removeTag(item)">
                                    <div class="max-w-md truncate">
                                        {{ item }}
                                    </div>
                                    <button
                                        matChipRemove
                                        [attr.aria-label]="
                                            'COMMON.ITEM_REMOVE' | translate
                                        "
                                    >
                                        <icon>cancel</icon>
                                    </button>
                                </mat-chip-row>
                            }
                        </mat-chip-grid>
                        <input
                            placeholder="Tags..."
                            [matChipInputFor]="chipList"
                            [matChipInputSeparatorKeyCodes]="separators"
                            [matChipInputAddOnBlur]="true"
                            (matChipInputTokenEnd)="addTag($event)"
                        />
                    </mat-form-field>
                </main>
            } @else {
                <main
                    class="flex flex-col items-center justify-center space-y-2 p-8"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ 'APP.CONCIERGE.LOCKERS_BANK_SAVING' | translate }}</p>
                </main>
            }
            <footer
                class="border-base-300 flex items-center justify-end space-x-2 border-t px-4 py-2"
            >
                <button btn matRipple class="w-32" (click)="postForm()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        </div>
    `, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatDialogModule,
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      MatChipsModule,
      CounterComponent,
      FormsModule,
      ReactiveFormsModule,
      BuildingPipe
    ] }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerBankModalComponent, { className: "LockerBankModalComponent", filePath: "apps/concierge/src/app/lockers/locker-bank-modal.component.ts", lineNumber: 218 });
})();

// apps/concierge/src/app/lockers/locker-booking-modal.component.ts
var _c02 = () => ({ standalone: true });
function LockerBookingModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "a-user-search-field", 16);
    \u0275\u0275elementEnd();
  }
}
function LockerBookingModalComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.ALL_DAY"), " ");
  }
}
function LockerBookingModalComponent_Conditional_32_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "label", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "a-duration-field", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "FORM.TIME_END"));
    \u0275\u0275advance(4);
    \u0275\u0275property("time", ctx_r1.form == null ? null : (tmp_3_0 = ctx_r1.form.getRawValue()) == null ? null : tmp_3_0.date)("max", ctx_r1.max_duration)("use_24hr", ctx_r1.use_24hr);
  }
}
function LockerBookingModalComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 17)(2, "label", 18);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a-time-field", 19);
    \u0275\u0275listener("ngModelChange", function LockerBookingModalComponent_Conditional_32_Template_a_time_field_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, LockerBookingModalComponent_Conditional_32_Conditional_8_Template, 7, 6, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "FORM.TIME_START"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(8, _c02))("disabled", ctx_r1.form.controls.date.disabled || ctx_r1.disable_start)("use_24hr", ctx_r1.use_24hr);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.hide_end ? 8 : -1);
  }
}
var _LockerBookingModalComponent = class _LockerBookingModalComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._data = inject(MAT_DIALOG_DATA);
    this._booking_form = inject(BookingFormService);
    this._dialog_ref = inject(MatDialogRef);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this.loading = false;
    this.user = this._data.user;
    this.date = this._data.date;
    this.allow_time_changes = this._data.allow_time_changes ?? true;
    this.form = this._booking_form.form;
  }
  get id() {
    return this.form.value.id;
  }
  get disable_date() {
    return this._settings.get("app.lockers.disabled_date_select");
  }
  get disable_start() {
    return this._settings.get("app.lockers.disabled_start_time");
  }
  get hide_end() {
    return this._settings.get("app.lockers.hide_end_time");
  }
  get end_date() {
    return endOfDay(addDays(Date.now(), this._settings.get("app.lockers.available_period") || this._settings.get("app.bookings.available_period") || 7));
  }
  get max_duration() {
    return this._settings.get("app.lockers.max_duration") || this._settings.get("app.bookings.max_duration") || 8 * 60;
  }
  get allow_all_day() {
    return this.allow_time_changes && (this._settings.get("app.lockers.allow_all_day") ?? this._settings.get("app.bookings.allow_all_day") ?? true);
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  ngOnInit() {
    this._booking_form.newForm("locker", this._data.booking);
    this.subscription("user_changes", this.form.controls.user.valueChanges.subscribe((user) => {
      if (!user)
        return;
      this.form.patchValue({
        user_name: user.name,
        user_email: user.email,
        attendees: [user]
      });
    }));
    this.form.patchValue({ booking_type: "locker" });
    if (!this.form.value.user) {
      this.form.patchValue({
        user: this._data.booking?.attendees[0] || currentUser()
      });
    }
    if (this._data.parent_id) {
      this.form.patchValue({
        parent_id: this._data.parent_id
      });
    }
    if (this._data.user) {
      this.form.patchValue({
        user: this._data.user,
        user_email: this._data.user.email,
        user_name: this._data.user.name,
        attendees: [this._data.user]
      });
    }
    if (this._data.booking?.id) {
      this.form.controls.user.disable();
      this.form.controls.user_name.disable();
      this.form.controls.user_email.disable();
    }
    if (this._data.level) {
      this._booking_form.setOptions({ zone_id: this._data.level.id });
    }
    if (this._data.link_id) {
      this.form.patchValue({ parent_id: this._data.link_id });
    }
    if (this._data.space) {
      this.form.patchValue({ resources: [this._data.space] });
    }
    if (this._data.date) {
      this.timeout("init_date", () => this.form.patchValue({ date: this._data.date }), 300);
    }
    this.subscription("bld", combineLatest([
      this._org.active_building,
      this.form.controls.duration.valueChanges
    ]).subscribe(() => this.timeout("disable", () => this.disable_date ? this.form.controls.date.disable() : "", 50)));
  }
  async postForm() {
    if (!this.form.value.all_day && this.form.value.duration > this.max_duration) {
      this.form.patchValue({ duration: 30 });
    }
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();
    if (this.form.invalid) {
      return notifyError(i18n("FORM.INVALID_FIELDS", {
        field_list: getInvalidFields(this.form).join(", ")
      }));
    }
    this.loading = true;
    this.form.patchValue({ user_id: void 0, booking_type: "locker" });
    const result = await this._booking_form.postForm().catch((e) => {
      this.loading = false;
      notifyError(i18n("APP.CONCIERGE.LOCKERS_BOOK_ERROR", { error: e }));
      throw e;
    });
    notifySuccess(i18n("APP.CONCIERGE.LOCKERS_BOOK_SUCCESS"));
    this.form.get("date").enable();
    this.form.get("duration").enable();
    this.form.controls.user.disable();
    this.form.controls.user_name.disable();
    this.form.controls.user_email.disable();
    this._dialog_ref.close(result.id);
  }
};
_LockerBookingModalComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275LockerBookingModalComponent_BaseFactory;
  return function LockerBookingModalComponent_Factory(__ngFactoryType__) {
    return (\u0275LockerBookingModalComponent_BaseFactory || (\u0275LockerBookingModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_LockerBookingModalComponent)))(__ngFactoryType__ || _LockerBookingModalComponent);
  };
})();
_LockerBookingModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerBookingModalComponent, selectors: [["locker-booking-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 37, vars: 36, consts: [[3, "confirm", "heading", "loading"], [3, "formGroup"], [1, "mb-4", "flex", "items-center", "space-x-2"], [1, "flex", "items-center", "space-x-2"], [1, "flex-1"], ["for", "user-name"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "user-name", "formControlName", "user_name", 3, "placeholder"], ["for", "email"], ["matInput", "", "name", "email", "formControlName", "user_email", 3, "placeholder"], [1, "relative"], ["for", "date"], ["formControlName", "date"], ["formControlName", "all_day", 1, "absolute", "-top-2", "right-0"], ["for", "locker"], ["name", "locker", "formControlName", "resources", 1, "mb-2"], ["name", "user", "formControlName", "user", 1, "flex-1"], [1, "w-1/3", "flex-1"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled", "use_24hr"], [1, "relative", "w-1/3", "flex-1"], ["for", "end-time"], ["name", "end-time", "formControlName", "duration", 3, "time", "max", "use_24hr"]], template: function LockerBookingModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("confirm", function LockerBookingModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
      return ctx.postForm();
    });
    \u0275\u0275elementStart(3, "form", 1);
    \u0275\u0275conditionalCreate(4, LockerBookingModalComponent_Conditional_4_Template, 2, 0, "div", 2);
    \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "label", 5);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-form-field", 6);
    \u0275\u0275element(11, "input", 7);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementStart(13, "mat-error");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 4)(17, "label", 8);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-form-field", 6);
    \u0275\u0275element(21, "input", 9);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementStart(23, "mat-error");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 10)(27, "label", 11);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "a-date-field", 12);
    \u0275\u0275conditionalCreate(31, LockerBookingModalComponent_Conditional_31_Template, 3, 3, "mat-checkbox", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(32, LockerBookingModalComponent_Conditional_32_Template, 9, 9, "div", 3);
    \u0275\u0275elementStart(33, "label", 14);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "locker-list-field", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 16, ctx.id ? "APP.CONCIERGE.LOCKERS_BOOK_EDIT" : "APP.CONCIERGE.LOCKERS_BOOK_NEW"))("loading", ctx.loading ? \u0275\u0275pipeBind1(2, 18, "APP.CONCIERGE.LOCKERS_BOOK_SAVING") : "");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.user ? 4 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 20, "FORM.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 22, "FORM.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 24, "FORM.NAME_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 26, "FORM.EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(22, 28, "FORM.EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 30, "FORM.EMAIL_REQUIRED"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pointer-events-none", ctx.disable_date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 32, "FORM.DATE"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.allow_all_day && !ctx.disable_date ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.form.value.all_day ? 32 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 34, "RESOURCE.LOCKER"));
  }
}, dependencies: [
  TranslatePipe,
  FullscreenModalShellComponent,
  LockerListFieldComponent,
  DurationFieldComponent,
  TimeFieldComponent,
  MatCheckboxModule,
  MatCheckbox,
  DateFieldComponent,
  MatFormFieldModule,
  MatFormField,
  MatError,
  MatInputModule,
  MatInput,
  UserSearchFieldComponent,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  FormsModule,
  NgModel
], encapsulation: 2 });
var LockerBookingModalComponent = _LockerBookingModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockerBookingModalComponent, [{
    type: Component,
    args: [{ selector: "locker-booking-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (id
                    ? 'APP.CONCIERGE.LOCKERS_BOOK_EDIT'
                    : 'APP.CONCIERGE.LOCKERS_BOOK_NEW'
                ) | translate
            "
            [loading]="
                loading ? ('APP.CONCIERGE.LOCKERS_BOOK_SAVING' | translate) : ''
            "
            (confirm)="postForm()"
        >
            <form [formGroup]="form">
                @if (!user) {
                    <div class="mb-4 flex items-center space-x-2">
                        <a-user-search-field
                            name="user"
                            formControlName="user"
                            class="flex-1"
                        ></a-user-search-field>
                    </div>
                }
                <div class="flex items-center space-x-2">
                    <div class="flex-1">
                        <label for="user-name">{{
                            'FORM.NAME' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                name="user-name"
                                formControlName="user_name"
                                [placeholder]="'FORM.NAME' | translate"
                            />
                            <mat-error>{{
                                'FORM.NAME_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex-1">
                        <label for="email">{{
                            'FORM.EMAIL' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                name="email"
                                formControlName="user_email"
                                [placeholder]="'FORM.EMAIL' | translate"
                            />
                            <mat-error>{{
                                'FORM.EMAIL_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                </div>
                <div
                    class="relative"
                    [class.pointer-events-none]="disable_date"
                >
                    <label for="date">{{ 'FORM.DATE' | translate }}</label>
                    <a-date-field formControlName="date"></a-date-field>
                    @if (allow_all_day && !disable_date) {
                        <mat-checkbox
                            formControlName="all_day"
                            class="absolute -top-2 right-0"
                        >
                            {{ 'COMMON.ALL_DAY' | translate }}
                        </mat-checkbox>
                    }
                </div>
                @if (!form.value.all_day) {
                    <div class="flex items-center space-x-2">
                        <div class="w-1/3 flex-1">
                            <label for="start-time">
                                {{ 'FORM.TIME_START' | translate
                                }}<span>*</span>
                            </label>
                            <a-time-field
                                name="start-time"
                                [ngModel]="form.value.date"
                                (ngModelChange)="
                                    form.patchValue({ date: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [disabled]="
                                    form.controls.date.disabled || disable_start
                                "
                                [use_24hr]="use_24hr"
                            ></a-time-field>
                        </div>
                        @if (!hide_end) {
                            <div class="relative w-1/3 flex-1">
                                <label for="end-time">
                                    {{ 'FORM.TIME_END' | translate
                                    }}<span>*</span>
                                </label>
                                <a-duration-field
                                    name="end-time"
                                    formControlName="duration"
                                    [time]="form?.getRawValue()?.date"
                                    [max]="max_duration"
                                    [use_24hr]="use_24hr"
                                >
                                </a-duration-field>
                            </div>
                        }
                    </div>
                }
                <label for="locker">{{ 'RESOURCE.LOCKER' | translate }}</label>
                <locker-list-field
                    name="locker"
                    formControlName="resources"
                    class="mb-2"
                ></locker-list-field>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      TranslatePipe,
      FullscreenModalShellComponent,
      LockerListFieldComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      MatCheckboxModule,
      DateFieldComponent,
      MatFormFieldModule,
      MatInputModule,
      UserSearchFieldComponent,
      ReactiveFormsModule,
      FormsModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerBookingModalComponent, { className: "LockerBookingModalComponent", filePath: "apps/concierge/src/app/lockers/locker-booking-modal.component.ts", lineNumber: 179 });
})();

// apps/concierge/src/app/lockers/locker-modal.component.ts
var _c03 = () => ({ standalone: true });
function LockerModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 4)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function LockerModalComponent_Conditional_6_For_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 33);
    \u0275\u0275listener("removed", function LockerModalComponent_Conditional_6_For_63_Template_mat_chip_row_removed_0_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeTag(item_r4));
    });
    \u0275\u0275elementStart(1, "div", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 35);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r4, " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 2, "COMMON.ITEM_REMOVE"));
  }
}
function LockerModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 5)(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 10);
    \u0275\u0275element(5, "input", 11);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "label", 12);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 13);
    \u0275\u0275element(14, "a-user-search-field", 14);
    \u0275\u0275elementStart(15, "button", 15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275listener("click", function LockerModalComponent_Conditional_6_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ assigned_user: null, assigned_to: null, assigned_name: null }));
    });
    \u0275\u0275elementStart(17, "icon", 16);
    \u0275\u0275text(18, " person_cancel ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 17);
    \u0275\u0275element(20, "settings-toggle", 18);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275element(22, "settings-toggle", 19);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20)(25, "div", 21)(26, "label", 22);
    \u0275\u0275text(27, "Start Column");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "a-counter", 23);
    \u0275\u0275listener("ngModelChange", function LockerModalComponent_Conditional_6_Template_a_counter_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ position: [$event - 1, ctx_r1.form.value.position[1]] }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 21)(30, "label", 24);
    \u0275\u0275text(31, "Start Row");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "a-counter", 23);
    \u0275\u0275listener("ngModelChange", function LockerModalComponent_Conditional_6_Template_a_counter_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ position: [ctx_r1.form.value.position[0], $event - 1] }));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 25);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 20)(37, "div", 21)(38, "label", 22);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "a-counter", 26);
    \u0275\u0275listener("ngModelChange", function LockerModalComponent_Conditional_6_Template_a_counter_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ size: [$event, ctx_r1.form.value.size[1]] }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 21)(43, "label", 24);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "a-counter", 26);
    \u0275\u0275listener("ngModelChange", function LockerModalComponent_Conditional_6_Template_a_counter_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ size: [ctx_r1.form.value.size[0], $event] }));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 25);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "label", 27);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "mat-form-field", 10);
    \u0275\u0275element(54, "textarea", 28);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "label", 29);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "mat-form-field", 30)(60, "mat-chip-grid", 31, 0);
    \u0275\u0275repeaterCreate(62, LockerModalComponent_Conditional_6_For_63_Template, 7, 4, "mat-chip-row", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "input", 32);
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275listener("matChipInputTokenEnd", function LockerModalComponent_Conditional_6_Template_input_matChipInputTokenEnd_64_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addTag($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const chipList_r5 = \u0275\u0275reference(61);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 45, "FORM.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 47, "FORM.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 49, "FORM.NAME_REQUIRED"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 51, "APP.CONCIERGE.USER_ASSIGNED"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(16, 53, "APP.CONCIERGE.USER_CLEAR"));
    \u0275\u0275advance(5);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(21, 55, "APP.CONCIERGE.LOCKERS_ACCESSIBLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(23, 57, "COMMON.BOOKABLE"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r1.form.value.position[0] + 1)("ngModelOptions", \u0275\u0275pureFunction0(75, _c03))("min", 1)("max", 255);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.form.value.position[1] + 1)("ngModelOptions", \u0275\u0275pureFunction0(76, _c03))("min", 1)("max", ctx_r1.bank == null ? null : ctx_r1.bank.height);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-100", ctx_r1.form.get("position").invalid)("opacity-0", !ctx_r1.form.get("position").invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 59, "APP.CONCIERGE.LOCKERS_POSITION_INVALID"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 61, "COMMON.WIDTH"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.value.size[0])("ngModelOptions", \u0275\u0275pureFunction0(77, _c03))("min", 1)("max", 10)("render_fn", ctx_r1.render_fn);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 63, "COMMON.HEIGHT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.value.size[1])("ngModelOptions", \u0275\u0275pureFunction0(78, _c03))("min", 1)("max", ((ctx_r1.bank == null ? null : ctx_r1.bank.height) || 10) - ctx_r1.form.value.position[1])("render_fn", ctx_r1.render_fn);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-100", ctx_r1.form.get("size").invalid)("opacity-0", !ctx_r1.form.get("size").invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 65, "APP.CONCIERGE.LOCKERS_SIZE_INVALID"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 67, "FORM.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(55, 69, "FORM.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(58, 71, "COMMON.FEATURES"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.tag_list);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(65, 73, "COMMON.FEATURES"))("matChipInputFor", chipList_r5)("matChipInputSeparatorKeyCodes", ctx_r1.separators)("matChipInputAddOnBlur", true);
  }
}
function LockerModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 6);
    \u0275\u0275element(1, "mat-spinner", 36);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.LOCKERS_SAVING"));
  }
}
function boxesOverlap([a_x, a_y, a_w, a_h], [b_x, b_y, b_w, b_h]) {
  return a_x < b_x + b_w && a_x + a_w > b_x && a_y < b_y + b_h && a_y + a_h > b_y;
}
function validateNoOverlap(box, check_boxes) {
  return !check_boxes.find((check) => boxesOverlap(box, check));
}
var _LockerModalComponent = class _LockerModalComponent extends AsyncHandler {
  get bank() {
    return this._data.bank;
  }
  get locker() {
    return this._data.locker;
  }
  get id() {
    return this.locker?.id || "";
  }
  get tag_list() {
    return this.form.controls.features.value;
  }
  constructor() {
    super();
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.event = new EventEmitter();
    this.separators = [ENTER, COMMA, SPACE];
    this.render_fn = (v) => `${v}u`;
    this._locker_bounds = [];
    this.addTag = (e) => addChipItem(this.form.controls.features, e);
    this.removeTag = (i) => removeChipItem(this.form.controls.features, i);
    this.form = new FormGroup({
      id: new FormControl(""),
      name: new FormControl("", [Validators.required]),
      assigned_user: new FormControl(null),
      assigned_to: new FormControl(""),
      assigned_name: new FormControl(""),
      position: new FormControl([0, 0], [(e) => this.validatePosition(e)]),
      size: new FormControl([1, 1], [(e) => this.validateSize(e)]),
      notes: new FormControl(""),
      accessible: new FormControl(false),
      bookable: new FormControl(false),
      features: new FormControl([])
    });
    const _data = this._data;
    this._locker_bounds = this._lockerBounds();
    if (_data.locker)
      this.form.patchValue(_data.locker);
  }
  async ngOnInit() {
    this.subscription("pos_change", this.form.controls.position.valueChanges.subscribe(() => {
      this.timeout("changed", () => this.form.controls.size.patchValue(this.form.controls.size.value), 50);
    }));
    if (this.locker?.assigned_to) {
      const user = await showStaff(this.locker.assigned_to).toPromise();
      if (user) {
        this.form.patchValue({
          assigned_user: user,
          assigned_to: user.email,
          assigned_name: user.name
        });
      }
    }
  }
  validatePosition(control) {
    const [x, y] = control.value;
    return validateNoOverlap([x, y, 1, 1], this._locker_bounds) ? null : { position: true };
  }
  validateSize(control) {
    const [x, y] = this.form?.value?.position || [0, 0];
    const [w, h] = control.value;
    return validateNoOverlap([x, y, w, h], this._locker_bounds) ? null : { position: true };
  }
  postForm() {
    if (!this.form.valid)
      return;
    this.loading = true;
    const value = __spreadValues({}, this.form.getRawValue());
    if (value.assigned_user) {
      value.assigned_to = value.assigned_user.email;
      value.assigned_name = value.assigned_user.name;
      delete value.assigned_user;
    } else {
      delete value.assigned_to;
      delete value.assigned_name;
    }
    this._dialog_ref.disableClose = true;
    this.event.emit({ reason: "done", metadata: value });
  }
  _lockerBounds() {
    const list = [];
    for (const locker of this.bank.lockers || []) {
      if (locker.id !== this.locker?.id) {
        list.push([
          locker.position[0],
          locker.position[1],
          locker.size[0],
          locker.size[1]
        ]);
      }
    }
    return list;
  }
};
_LockerModalComponent.\u0275fac = function LockerModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LockerModalComponent)();
};
_LockerModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerModalComponent, selectors: [["locker-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 12, vars: 8, consts: [["chipList", ""], [1, "w-lg"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "max-h-[65vh]", "flex-col", "overflow-auto", "p-4", 3, "formGroup"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "border-base-300", "flex", "items-center", "justify-end", "space-x-2", "border-t", "px-4", "py-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "name", "name", "formControlName", "name", 3, "placeholder"], ["for", "user"], [1, "mb-4", "flex", "space-x-2"], ["name", "user", "formControlName", "assigned_user", 1, "flex-1"], ["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "min-w-12", "rounded-sm", 3, "click", "matTooltip"], ["className", "material-symbols-outlined"], [1, "mb-4", "flex", "space-x-4"], ["formControlName", "accessible", 1, "flex-1", 3, "name"], ["formControlName", "bookable", 1, "flex-1", 3, "name"], [1, "mb-1", "flex", "space-x-4"], [1, "flex-1"], ["for", "row"], [3, "ngModelChange", "ngModel", "ngModelOptions", "min", "max"], ["for", "column"], [1, "text-error", "mb-4", "text-xs"], [3, "ngModelChange", "ngModel", "ngModelOptions", "min", "max", "render_fn"], ["for", "notes"], ["matInput", "", "name", "notes", "formControlName", "notes", 3, "placeholder"], ["for", "features"], ["appearance", "outline", 1, "w-full"], ["name", "features", "aria-label", "Tag List"], [3, "matChipInputTokenEnd", "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed"], [1, "max-w-md", "truncate"], ["matChipRemove", ""], ["diameter", "32"]], template: function LockerModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "h2", 3);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, LockerModalComponent_Conditional_5_Template, 3, 0, "button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, LockerModalComponent_Conditional_6_Template, 66, 79, "main", 5)(7, LockerModalComponent_Conditional_7_Template, 5, 3, "main", 6);
    \u0275\u0275elementStart(8, "footer", 7)(9, "button", 8);
    \u0275\u0275listener("click", function LockerModalComponent_Template_button_click_9_listener() {
      return ctx.postForm();
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, ctx.id ? "APP.CONCIERGE.LOCKERS_EDIT" : "APP.CONCIERGE.LOCKERS_NEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading ? 6 : 7);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 6, "COMMON.SAVE"), " ");
  }
}, dependencies: [
  TranslatePipe,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatFormFieldModule,
  MatFormField,
  MatError,
  MatChipsModule,
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatInputModule,
  MatInput,
  CounterComponent,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  SettingsToggleComponent,
  MatTooltipModule,
  MatTooltip,
  UserSearchFieldComponent
], encapsulation: 2 });
var LockerModalComponent = _LockerModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockerModalComponent, [{
    type: Component,
    args: [{ selector: "locker-modal", template: `
        <div class="w-lg">
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    {{
                        (id
                            ? 'APP.CONCIERGE.LOCKERS_EDIT'
                            : 'APP.CONCIERGE.LOCKERS_NEW'
                        ) | translate
                    }}
                </h2>
                @if (!loading) {
                    <button icon matRipple mat-dialog-close>
                        <icon>close</icon>
                    </button>
                }
            </header>
            @if (!loading) {
                <main
                    class="flex max-h-[65vh] flex-col overflow-auto p-4"
                    [formGroup]="form"
                >
                    <label for="name">{{ 'FORM.NAME' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="name"
                            formControlName="name"
                            [placeholder]="'FORM.NAME' | translate"
                        />
                        <mat-error>{{
                            'FORM.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                    <label for="user">{{
                        'APP.CONCIERGE.USER_ASSIGNED' | translate
                    }}</label>
                    <div class="mb-4 flex space-x-2">
                        <a-user-search-field
                            name="user"
                            formControlName="assigned_user"
                            class="flex-1"
                        ></a-user-search-field>
                        <button
                            icon
                            matRipple
                            class="bg-secondary text-secondary-content h-12 w-12 min-w-12 rounded-sm"
                            [matTooltip]="
                                'APP.CONCIERGE.USER_CLEAR' | translate
                            "
                            (click)="
                                form.patchValue({
                                    assigned_user: null,
                                    assigned_to: null,
                                    assigned_name: null,
                                })
                            "
                        >
                            <icon className="material-symbols-outlined">
                                person_cancel
                            </icon>
                        </button>
                    </div>
                    <div class="mb-4 flex space-x-4">
                        <settings-toggle
                            class="flex-1"
                            [name]="
                                'APP.CONCIERGE.LOCKERS_ACCESSIBLE' | translate
                            "
                            formControlName="accessible"
                        ></settings-toggle>
                        <settings-toggle
                            class="flex-1"
                            [name]="'COMMON.BOOKABLE' | translate"
                            formControlName="bookable"
                        ></settings-toggle>
                    </div>
                    <div class="mb-1 flex space-x-4">
                        <div class="flex-1">
                            <label for="row">Start Column</label>
                            <a-counter
                                [ngModel]="form.value.position[0] + 1"
                                (ngModelChange)="
                                    form.patchValue({
                                        position: [
                                            $event - 1,
                                            form.value.position[1],
                                        ],
                                    })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [min]="1"
                                [max]="255"
                            ></a-counter>
                        </div>
                        <div class="flex-1">
                            <label for="column">Start Row</label>
                            <a-counter
                                [ngModel]="form.value.position[1] + 1"
                                (ngModelChange)="
                                    form.patchValue({
                                        position: [
                                            form.value.position[0],
                                            $event - 1,
                                        ],
                                    })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [min]="1"
                                [max]="bank?.height"
                            ></a-counter>
                        </div>
                    </div>
                    <div
                        class="text-error mb-4 text-xs"
                        [class.opacity-100]="form.get('position').invalid"
                        [class.opacity-0]="!form.get('position').invalid"
                    >
                        {{
                            'APP.CONCIERGE.LOCKERS_POSITION_INVALID' | translate
                        }}
                    </div>
                    <div class="mb-1 flex space-x-4">
                        <div class="flex-1">
                            <label for="row">{{
                                'COMMON.WIDTH' | translate
                            }}</label>
                            <a-counter
                                [ngModel]="form.value.size[0]"
                                (ngModelChange)="
                                    form.patchValue({
                                        size: [$event, form.value.size[1]],
                                    })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [min]="1"
                                [max]="10"
                                [render_fn]="render_fn"
                            ></a-counter>
                        </div>
                        <div class="flex-1">
                            <label for="column">{{
                                'COMMON.HEIGHT' | translate
                            }}</label>
                            <a-counter
                                [ngModel]="form.value.size[1]"
                                (ngModelChange)="
                                    form.patchValue({
                                        size: [form.value.size[0], $event],
                                    })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [min]="1"
                                [max]="
                                    (bank?.height || 10) -
                                    form.value.position[1]
                                "
                                [render_fn]="render_fn"
                            ></a-counter>
                        </div>
                    </div>
                    <div
                        class="text-error mb-4 text-xs"
                        [class.opacity-100]="form.get('size').invalid"
                        [class.opacity-0]="!form.get('size').invalid"
                    >
                        {{ 'APP.CONCIERGE.LOCKERS_SIZE_INVALID' | translate }}
                    </div>
                    <label for="notes">{{ 'FORM.NOTES' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <textarea
                            matInput
                            name="notes"
                            formControlName="notes"
                            [placeholder]="'FORM.NOTES' | translate"
                        ></textarea>
                    </mat-form-field>
                    <label for="features">
                        {{ 'COMMON.FEATURES' | translate }}
                    </label>
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-chip-grid
                            name="features"
                            #chipList
                            aria-label="Tag List"
                        >
                            @for (item of tag_list; track item) {
                                <mat-chip-row (removed)="removeTag(item)">
                                    <div class="max-w-md truncate">
                                        {{ item }}
                                    </div>
                                    <button
                                        matChipRemove
                                        [attr.aria-label]="
                                            'COMMON.ITEM_REMOVE' | translate
                                        "
                                    >
                                        <icon>cancel</icon>
                                    </button>
                                </mat-chip-row>
                            }
                        </mat-chip-grid>
                        <input
                            [placeholder]="'COMMON.FEATURES' | translate"
                            [matChipInputFor]="chipList"
                            [matChipInputSeparatorKeyCodes]="separators"
                            [matChipInputAddOnBlur]="true"
                            (matChipInputTokenEnd)="addTag($event)"
                        />
                    </mat-form-field>
                </main>
            } @else {
                <main
                    class="flex flex-col items-center justify-center space-y-2 p-8"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ 'APP.CONCIERGE.LOCKERS_SAVING' | translate }}</p>
                </main>
            }
            <footer
                class="border-base-300 flex items-center justify-end space-x-2 border-t px-4 py-2"
            >
                <button btn matRipple class="w-32" (click)="postForm()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        </div>
    `, imports: [
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatChipsModule,
      MatInputModule,
      CounterComponent,
      FormsModule,
      ReactiveFormsModule,
      SettingsToggleComponent,
      MatTooltipModule,
      UserSearchFieldComponent
    ] }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerModalComponent, { className: "LockerModalComponent", filePath: "apps/concierge/src/app/lockers/locker-modal.component.ts", lineNumber: 297 });
})();

// apps/concierge/src/app/lockers/view-locker-bank-modal.component.ts
var _ViewLockerBankModalComponent = class _ViewLockerBankModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this.bank = this._data.bank;
  }
};
_ViewLockerBankModalComponent.\u0275fac = function ViewLockerBankModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ViewLockerBankModalComponent)();
};
_ViewLockerBankModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewLockerBankModalComponent, selectors: [["view-locker-bank-modal"]], decls: 8, vars: 2, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "mx-4", "mt-4", "mb-2", "w-[calc(100%-2rem)]", "rounded-sm", "border-none", "px-4", "py-2"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "h-[65vh]", "w-[65vw]", "overflow-auto", "px-2", "pb-2"], ["default_status", "not-bookable", 3, "bank"]], template: function ViewLockerBankModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 2)(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "main", 3);
    \u0275\u0275element(7, "locker-grid", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" View Locker Bank - ", ctx.bank.name, " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("bank", ctx.bank);
  }
}, dependencies: [
  MatDialogModule,
  MatDialogClose,
  MatRippleModule,
  MatRipple,
  IconComponent,
  LockerGridComponent
], encapsulation: 2 });
var ViewLockerBankModalComponent = _ViewLockerBankModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewLockerBankModalComponent, [{
    type: Component,
    args: [{ selector: "view-locker-bank-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 mx-4 mt-4 mb-2 w-[calc(100%-2rem)] rounded-sm border-none px-4 py-2"
        >
            <h2 class="text-xl font-medium">
                View Locker Bank - {{ bank.name }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="h-[65vh] w-[65vw] overflow-auto px-2 pb-2">
            <locker-grid
                [bank]="bank"
                default_status="not-bookable"
            ></locker-grid>
        </main>
    `, imports: [
      MatDialogModule,
      MatRippleModule,
      IconComponent,
      LockerGridComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewLockerBankModalComponent, { className: "ViewLockerBankModalComponent", filePath: "apps/concierge/src/app/lockers/view-locker-bank-modal.component.ts", lineNumber: 35 });
})();

// apps/concierge/src/app/lockers/locker-state.service.ts
var addToken = (l, t) => l.replace(t, "") + t;
var removeToken = (l, t) => l.replace(t, "");
var _LockerStateService = class _LockerStateService extends AsyncHandler {
  nextPage() {
    this._call_next_page.next(`NEXT_${Date.now()}`);
  }
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this._search = new BehaviorSubject("");
    this._filters = new BehaviorSubject({});
    this._locker_bookings = [];
    this._loading = new BehaviorSubject("");
    this._change = new BehaviorSubject(0);
    this.levels = this._org.level_list.pipe(map((_) => {
      if (!this._settings.get("app.use_region")) {
        const blds = this._org.buildingsForRegion();
        const bld_ids = blds.map((bld) => bld.id);
        const list = _.filter((lvl) => bld_ids.includes(lvl.parent_id));
        list.map((lvl) => __spreadProps(__spreadValues({}, lvl), {
          display_name: `${blds.find((_2) => _2.id === lvl.parent_id)?.display_name} - ${lvl.display_name}`
        }));
        return list;
      }
      return _.filter((lvl) => lvl.parent_id === this._org.building.id);
    }));
    this.loading = this._loading.asObservable();
    this.filters = this._filters.asObservable();
    this.search = this._search.asObservable();
    this.lockers_banks$ = loadLockerBanks(this._org, combineLatest([
      this._org.active_building,
      this._org.active_region,
      this._change
    ]), () => this._settings.get("app.use_region"));
    this.lockers$ = loadLockers(this._org, combineLatest([
      this._org.active_building,
      this._org.active_region,
      this._change
    ]), this.lockers_banks$, () => this._settings.get("app.use_region"));
    this.filtered_lockers = combineLatest([
      this.filters,
      this._search,
      this.lockers$
    ]).pipe(map(([{ zones }, search, list]) => {
      search = (search || "").toLowerCase();
      if (!zones?.length && !search)
        return list;
      return list.filter((item) => {
        let match = true;
        if (search) {
          match = item.name.toLowerCase().includes(search) || item.bank.name.toLowerCase().includes(search);
        }
        if (zones?.length) {
          match = !!zones.find((zone) => (item.zones || item.bank.zones || []).includes(zone));
        }
        return match;
      });
    }));
    this.filtered_banks = combineLatest([
      this.filters,
      this._search,
      this.lockers_banks$
    ]).pipe(map(([{ zones }, search, list]) => {
      search = (search || "").toLowerCase();
      if (!zones?.length && !search)
        return list;
      return list.filter((item) => {
        let match = true;
        if (search) {
          match = item.name.toLowerCase().includes(search);
        }
        if (zones?.length) {
          match = !!zones.find((zone) => (item.zones || []).includes(zone));
        }
        return match;
      });
    }));
    this._next_page = new Subject();
    this._call_next_page = new Subject();
    this._all_zones_keys = ["All", -1, "-1"];
    this.setup_paging = combineLatest([
      this._filters,
      this._org.initialised
    ]).pipe(debounceTime(500), tap(([filters, loaded]) => {
      if (!loaded)
        return;
      const date = filters.date || Date.now();
      const zones = !filters.zones || filters.zones.some((z) => this._all_zones_keys.includes(z)) ? this._settings.get("app.use_region") ? [this._org.region.id] : [this._org.building.id] : filters.zones;
      this._next_page.next(() => queryPagedBookings({
        period_start: getUnixTime(startOfDay(date)),
        period_end: getUnixTime(endOfDay(date)),
        type: "locker",
        zones: zones.join(","),
        include_checked_out: true,
        limit: 1e3
      }));
      this._call_next_page.next(`RESET_${Date.now()}`);
    }));
    this.paged_bookings = combineLatest([
      this._next_page,
      this._call_next_page
    ]).pipe(distinctUntilChanged((a, b) => a[1] === b[1]), switchMap(([next_page, action]) => {
      this._loading.next(addToken(this._loading.getValue(), "[BOOKINGS]"));
      if (!next_page) {
        return of({
          data: [],
          total: 0,
          next: null,
          reset: action.includes("RESET")
        });
      }
      if (action.includes("RESET")) {
        return next_page().pipe(map((data) => __spreadProps(__spreadValues({}, data), { reset: true })));
      }
      return next_page().pipe(map((data) => __spreadProps(__spreadValues({}, data), { reset: false })));
    }), scan((acc, { data, total, next, reset }) => {
      const list = data;
      this._next_page.next(next);
      if (reset)
        return { list, total, has_next: !!next };
      return {
        list: [...acc.list, ...list],
        has_next: !!next,
        total
      };
    }, { list: [], total: 0, has_next: false }), tap(() => this.timeout("stop-loading", () => this._loading.next(removeToken(this._loading.getValue(), "[BOOKINGS]")), 1e3)), shareReplay(1));
    this.has_more_pages = this.paged_bookings.pipe(map((_) => _.has_next));
    this.bookings = this.paged_bookings.pipe(map((i) => i.list));
    this.filtered_bookings = combineLatest([
      this.bookings,
      this._search
    ]).pipe(map(([l, search]) => l.filter((_) => _.title.toLowerCase().includes(search.toLowerCase()) || _.user_name.toLowerCase().includes(search.toLowerCase()) || _.user_email.toLowerCase().includes(search.toLowerCase()) || _.description.toLowerCase().includes(search.toLowerCase()) || _.asset_name.toLowerCase().includes(search.toLowerCase()))));
    this.setup_paging.subscribe();
  }
  setSearch(value) {
    this._search.next(value);
  }
  setFilters(filters) {
    if (filters.zones?.includes("All")) {
      filters.zones = [
        "All",
        ...this._org.levelsForBuilding(this._org.building).map((lvl) => lvl.id)
      ];
    } else if (filters.zones && this._filters.getValue()?.zones?.includes("All")) {
      filters.zones = [];
    }
    this._filters.next(__spreadValues(__spreadValues({}, this._filters.getValue()), filters));
  }
  refresh() {
    this._loading.next(addToken(this._loading.getValue(), "[BOOKINGS]"));
    this.timeout("poll", () => this.setFilters(this._filters.getValue()));
  }
  viewLockerBank(bank) {
    this._dialog.open(ViewLockerBankModalComponent, {
      data: { bank }
    });
  }
  async allocateLocker(locker, notify = true) {
    const mod = this._org.module("lockers", "Lockers");
    if (!mod)
      return notifyError(i18n("APP.CONCIERGE.LOCKERS_NO_DRIVER"));
    await mod.execute("locker_allocate_me", [locker.bank_id, locker.id]).catch((e) => {
      notifyError(e);
      throw e;
    });
    if (notify)
      notifySuccess(`Successfully allocated locker "${locker.name}"`);
  }
  get has_driver() {
    return !!this._org.binding("lockers");
  }
  async shareLocker(locker, user) {
    const mod = this._org.module("lockers", "Lockers");
    if (!mod)
      return notifyError(i18n("APP.CONCIERGE.LOCKERS_NO_DRIVER"));
    if (!user) {
      const ref = this._dialog.open(SelectUserModalComponent, {});
      const value = await ref.afterClosed().toPromise();
      if (!value)
        return;
      user = value;
    }
    console.log("User:", user);
    await this.allocateLocker(locker, false);
    await mod.execute("locker_share_mine", [locker.bank_id, locker.id, user.id]).catch((e) => {
      console.log("err", e);
      notifyError(i18n(`APP.CONCIERGE.LOCKERS_SHARE_ERROR`, {
        error: `${e?.msg || e}`
      }));
      throw e;
    });
    notifySuccess(i18n(`APP.CONCIERGE.LOCKERS_SHARE_SUCCESS`, {
      name: locker.name,
      user: user.name
    }));
  }
  async releaseAllLockers(confirm = false) {
    const mod = this._org.module("lockers", "Lockers");
    if (!mod)
      return notifyError(i18n("APP.CONCIERGE.LOCKERS_NO_DRIVER"));
    let close;
    const lockers = await nextValueFrom(this.lockers$);
    if (!lockers.length)
      return;
    if (confirm) {
      const result = await openConfirmModal({
        title: i18n("APP.CONCIERGE.LOCKERS_RELEASE_ALL_TITLE"),
        content: i18n("APP.CONCIERGE.LOCKERS_RELEASE_ALL_MSG"),
        icon: { content: "event_busy" }
      }, this._dialog);
      if (result.reason !== "done")
        return;
      result.loading(i18n("APP.CONCIERGE.LOCKERS_RELEASE_ALL_LOADING"));
      close = result.close;
    }
    await mod.execute("release_all_lockers", []).catch((e) => {
      notifyError(i18n("APP.CONCIERGE.LOCKERS_RELEASE_ALL_ERROR", {
        error: e
      }));
      if (close)
        close();
      throw e;
    });
    notifySuccess(i18n(`APP.CONCIERGE.LOCKERS_RELEASE_ALL_SUCCESS`));
    if (close)
      close();
  }
  async releaseLocker(locker, confirm = false) {
    const mod = this._org.module("lockers", "Lockers");
    if (!mod)
      return notifyError(i18n("APP.CONCIERGE.LOCKERS_NO_DRIVER"));
    let close;
    if (confirm) {
      const result = await openConfirmModal({
        title: i18n("APP.CONCIERGE.LOCKERS_RELEASE_TITLE"),
        content: i18n("APP.CONCIERGE.LOCKERS_RELEASE_MSG"),
        icon: { content: "event_busy" }
      }, this._dialog);
      if (result.reason !== "done")
        return;
      result.loading(i18n("APP.CONCIERGE.LOCKERS_RELEASE_LOADING"));
      close = result.close;
    }
    await mod.execute("locker_release", [locker.bank_id, locker.id]).catch((e) => {
      notifyError(i18n("APP.CONCIERGE.LOCKERS_RELEASE_ERROR", { error: e }));
      if (close)
        close();
      throw e;
    });
    notifySuccess(i18n(`APP.CONCIERGE.LOCKERS_RELEASE_SUCCESS`, {
      name: locker.name
    }));
    if (close)
      close();
  }
  async openLocker(locker, confirm = false) {
    const mod = this._org.module("lockers", "Lockers");
    if (!mod)
      return notifyError(i18n("APP.CONCIERGE.LOCKERS_NO_DRIVER"));
    let close;
    if (confirm) {
      const result = await openConfirmModal({
        title: i18n("APP.CONCIERGE.LOCKERS_OPEN_TITLE"),
        content: i18n("APP.CONCIERGE.LOCKERS_OPEN_MSG"),
        icon: { content: "event_busy" }
      }, this._dialog);
      if (result.reason !== "done")
        return;
      result.loading(i18n("APP.CONCIERGE.LOCKERS_OPEN_LOADING"));
      close = result.close;
    }
    await mod.execute("locker_unlock_mine", [locker.bank_id, locker.id]).catch((e) => {
      notifyError(i18n(`APP.CONCIERGE.LOCKERS_OPEN_ERROR`, { error: e }));
      throw e;
    });
    notifySuccess(i18n(`APP.CONCIERGE.LOCKERS_OPEN_SUCCESS`));
    if (close)
      close();
  }
  /** Add or update a space in the available list */
  async editLockerBank(bank = {}) {
    const ref = this._dialog.open(LockerBankModalComponent, {
      data: bank
    });
    const state = await Promise.race([
      ref.afterClosed().toPromise(),
      ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise()
    ]);
    if (state?.reason !== "done")
      return;
    const zone = this._org.building.id;
    const new_bank = __spreadProps(__spreadValues({}, state.metadata), {
      zone,
      id: bank.id || `locker-bank-${randomInt(999999)}`
    });
    const banks = await nextValueFrom(this.lockers_banks$);
    const idx = banks.findIndex((_) => _.id === new_bank.id);
    if (idx >= 0)
      banks[idx] = new_bank;
    else
      banks.push(new_bank);
    const new_locker_list = banks.map((_) => __spreadValues({}, _));
    for (const bank2 of new_locker_list) {
      delete bank2.lockers;
    }
    await ec(zone, {
      name: "locker_banks",
      details: new_locker_list,
      description: "List of available locker banks"
    }).toPromise();
    this._change.next(Date.now());
    ref.close();
  }
  /** Add or update a space in the available list */
  async editLocker(bank, locker = {}) {
    const ref = this._dialog.open(LockerModalComponent, {
      data: { locker, bank }
    });
    const state = await Promise.race([
      ref.afterClosed().toPromise(),
      ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise()
    ]);
    if (state?.reason !== "done")
      return;
    const zone = this._org.building.id;
    const new_locker = __spreadProps(__spreadValues({}, state.metadata), {
      bank_id: bank.id,
      zone,
      id: locker.id || `locker-${zone}.${randomInt(999999)}`
    });
    const lockers = await nextValueFrom(this.lockers$);
    const idx = lockers.findIndex((_) => _.id === new_locker.id);
    if (locker.assigned_to && locker.assigned_to !== new_locker.assigned_to) {
      this._clearAssignedBooking(locker);
    }
    if (locker.assigned_to !== new_locker.assigned_to && new_locker.assigned_to) {
      const date = set(Date.now(), { hours: 2, minutes: 0, seconds: 0 });
      await saveBooking(new Booking({
        user_id: new_locker.assigned_to,
        user_email: new_locker.assigned_to,
        user_name: new_locker?.assigned_name,
        booking_start: getUnixTime(date),
        booking_end: getUnixTime(addHours(date, 20)),
        type: "locker",
        booking_type: "locker",
        asset_id: new_locker.id,
        asset_name: new_locker.name,
        recurrence_type: "daily",
        recurrence_days: RecurrenceDays.MONDAY | RecurrenceDays.TUESDAY | RecurrenceDays.WEDNESDAY | RecurrenceDays.THURSDAY | RecurrenceDays.FRIDAY,
        zones: unique([
          this._org.organisation.id,
          this._org.region?.id,
          this._org.building?.id,
          new_locker.zone?.id,
          new_locker.zone,
          ...bank?.zones || []
        ]).filter((_) => !!_),
        tags: bank?.tags || [],
        extension_data: {
          asset_name: new_locker.name,
          tags: bank.tags || [],
          is_assigned: true
        }
      })).toPromise();
    }
    if (idx >= 0)
      lockers[idx] = new_locker;
    else
      lockers.push(new_locker);
    const new_locker_list = lockers;
    for (const locker2 of new_locker_list) {
      if (locker2.bank)
        delete locker2.bank;
      if (locker2.zone)
        delete locker2.zone;
    }
    await ec(zone, {
      name: "lockers",
      details: new_locker_list,
      description: "List of available lockers"
    }).toPromise();
    this._change.next(Date.now());
    ref.close();
  }
  async removeLockerBank(bank) {
    const state = await openConfirmModal({
      title: i18n("APP.CONCIERGE.LOCKERS_BANK_REMOVE_TITLE"),
      content: i18n("APP.CONCIERGE.LOCKERS_BANK_REMOVE_TITLE", {
        name: bank.name
      }),
      icon: { content: "delete" }
    }, this._dialog);
    if (state?.reason !== "done")
      return;
    state.loading(i18n("APP.CONCIERGE.LOCKERS_BANK_REMOVE_LOADING"));
    const zone = this._org.building.id;
    const banks = await nextValueFrom(this.lockers_banks$);
    await ec(zone, {
      name: "locker_banks",
      details: banks.filter((_) => _.id !== bank.id),
      description: "List of available locker banks"
    }).toPromise().catch((e) => {
      notifyError(i18n("APP.CONCIERGE.LOCKERS_BANK_REMOVE_ERROR", {
        error: e
      }));
      throw e;
    });
    state.close();
    notifySuccess(i18n("APP.CONCIERGE.LOCKERS_BANK_REMOVE_SUCCESS"));
    this._change.next(Date.now());
  }
  async removeLocker(locker) {
    const state = await openConfirmModal({
      title: i18n("APP.CONCIERGE.LOCKERS_REMOVE_TITLE"),
      content: i18n("APP.CONCIERGE.LOCKERS_REMOVE_TITLE", {
        name: locker.name
      }),
      icon: { content: "delete" }
    }, this._dialog);
    if (state?.reason !== "done")
      return;
    state.loading(i18n("APP.CONCIERGE.LOCKERS_REMOVE_LOADING"));
    const zone = this._org.building.id;
    const lockers = await nextValueFrom(this.lockers$);
    this._clearAssignedBooking(locker);
    await ec(zone, {
      name: "lockers",
      details: lockers.filter((_) => _.id !== locker.id),
      description: "List of available lockers"
    }).toPromise().catch((e) => {
      notifyError(i18n("APP.CONCIERGE.LOCKERS_REMOVE_ERROR", { error: e }));
      throw e;
    });
    state.close();
    notifySuccess(i18n("APP.CONCIERGE.LOCKERS_REMOVE_SUCCESS"));
    this._change.next(Date.now());
  }
  async editBooking(booking, { parent_id, user, link_id, date, space, allow_time_changes, external_user } = {}) {
    const levels = await nextValueFrom(this.levels);
    const spaces = await nextValueFrom(this.lockers$);
    if (!space && booking?.asset_id) {
      space = spaces.find((_) => _.id === booking.asset_id);
    }
    const ref = this._dialog.open(LockerBookingModalComponent, {
      data: {
        parent_id,
        booking,
        user,
        link_id,
        date,
        level: levels[0],
        space,
        allow_time_changes,
        external_user
      }
    });
    const id = await ref.afterClosed().toPromise();
    if (id)
      this._change.next(Date.now());
    return id;
  }
  async checkinLocker(locker, state = true) {
    const status = await checkinBooking(locker.id, state ?? true).toPromise().catch((_) => ({ failed: true, error: _ }));
    if (status.failed) {
      notifyError(i18n(state ? "BOOKINGS.CHECK_IN_ERROR" : "BOOKINGS_CHECK_OUT_ERROR"));
      throw status.error;
    }
    notifySuccess(i18n(state ? "BOOKINGS.CHECK_IN_SUCCESS" : "BOOKINGS_CHECK_OUT_SUCCESS"));
  }
  async approveLocker(locker) {
    const success = await approveBooking(locker.id).toPromise().catch((_) => "failed");
    if (success === "failed") {
      return notifyError(i18n("APP.CONCIERGE.LOCKERS_APPROVE_ERROR"));
    }
    notifySuccess(i18n("APP.CONCIERGE.LOCKERS_APPROVE_SUCCESS", {
      name: locker.user_name
    }));
    locker.approved = true;
    locker.rejected = false;
    locker.status = "approved";
    this.refresh();
  }
  async rejectLocker(locker) {
    const success = await rejectBooking(locker.id).toPromise().catch((_) => "failed");
    if (success === "failed") {
      return notifyError(i18n("APP.CONCIERGE.LOCKERS_REJECT_ERROR"));
    }
    notifySuccess(i18n("APP.CONCIERGE.LOCKERS_REJECT_SUCCESS", {
      name: locker.user_name
    }));
    locker.approved = false;
    locker.rejected = true;
    locker.status = "declined";
    this.refresh();
  }
  async giveAccess(locker) {
    const success = await saveBooking(new Booking(__spreadProps(__spreadValues({}, locker), { access: true }))).toPromise().catch((_) => "failed");
    if (success === "failed")
      return notifyError("Error giving building access booking host");
    notifySuccess(`Successfully gave building access to ${locker.user_name} for locker booking.`);
    this._locker_bookings = [...this._locker_bookings, success];
  }
  async rejectAllLockers() {
    const list = this._locker_bookings || [];
    if (list.length <= 0)
      return notifyInfo("No lockers to reject for the selected date");
    const resp = await openConfirmModal({
      title: i18n("APP.CONCIERGE.LOCKERS_REJECT_ALL_TITLE"),
      content: i18n("APP.CONCIERGE.LOCKERS_REJECT_ALL_MSG"),
      icon: {
        type: "icon",
        class: "material-symbols-rounded",
        content: "delete"
      }
    }, this._dialog);
    if (resp.reason !== "done")
      return;
    resp.loading(i18n("APP.CONCIERGE.LOCKERS_REJECT_ALL_LOADING"));
    await Promise.all(list.map((locker) => rejectBooking(locker.id).toPromise())).catch((e) => {
      notifyError(i18n("APP.CONCIERGE.LOCKERS_REJECT_ALL_ERROR"));
      throw e;
    });
    notifySuccess(i18n("APP.CONCIERGE.LOCKERS_REJECT_ALL_SUCCESS"));
    resp.close();
    this.refresh();
  }
  async _clearAssignedBooking(locker) {
    const booking_list = await queryBookings({
      period_start: getUnixTime(startOfDay(Date.now())),
      period_end: getUnixTime(endOfDay(Date.now())),
      type: "locker",
      email: locker.assigned_to,
      include_checked_out: true
    }).toPromise();
    const filtered = booking_list.filter((_) => _.asset_id === locker.id);
    await Promise.all(filtered.map((_) => removeBooking(_.id).toPromise()));
  }
};
_LockerStateService.\u0275fac = function LockerStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LockerStateService)();
};
_LockerStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LockerStateService, factory: _LockerStateService.\u0275fac, providedIn: "root" });
var LockerStateService = _LockerStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockerStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// apps/concierge/src/app/lockers/locker-bookings.component.ts
var _c04 = (a0, a1) => ({ key: "date", name: a0, content: a1, size: "4rem" });
var _c1 = (a0, a1) => ({ key: "date", name: a0, content: a1, size: "9rem" });
var _c2 = (a0, a1) => ({ key: "user_name", name: a0, content: a1 });
var _c3 = (a0) => ({ key: "group", name: a0 });
var _c4 = (a0, a1) => ({ key: "asset_name", name: a0, content: a1 });
var _c5 = (a0) => ({ key: "approver_name", name: a0 });
var _c6 = (a0, a1) => ({ key: "status", name: a0, content: a1, size: "11rem" });
var _c7 = (a0, a1, a2, a3, a4, a5, a6) => [a0, a1, a2, a3, a4, a5, a6];
function LockerBookingsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const date_r1 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, date_r1, "MMM"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 5, date_r1, "dd"));
  }
}
function LockerBookingsComponent_ng_template_16_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "date");
  }
  if (rf & 2) {
    const row_r2 = \u0275\u0275nextContext(2).row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, row_r2.date, ctx_r2.time_format), " \u2013 ", \u0275\u0275pipeBind2(2, 5, row_r2.date_end, ctx_r2.time_format), " ");
  }
}
function LockerBookingsComponent_ng_template_16_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "COMMON.ALL_DAY"), " ");
  }
}
function LockerBookingsComponent_ng_template_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275conditionalCreate(1, LockerBookingsComponent_ng_template_16_Conditional_1_Conditional_1_Template, 3, 8);
    \u0275\u0275conditionalCreate(2, LockerBookingsComponent_ng_template_16_Conditional_1_Conditional_2_Template, 2, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275conditional(!(row_r2.all_day || row_r2.duration > 12 * 60) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r2.all_day || row_r2.duration > 12 * 60 ? 2 : -1);
  }
}
function LockerBookingsComponent_ng_template_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, row_r2.status === "ended" ? "APP.CONCIERGE.BOOKING_ENDED" : "APP.CONCIERGE.BOOKING_EXPIRED"), " ");
  }
}
function LockerBookingsComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275conditionalCreate(1, LockerBookingsComponent_ng_template_16_Conditional_1_Template, 3, 2, "div", 15);
    \u0275\u0275conditionalCreate(2, LockerBookingsComponent_ng_template_16_Conditional_2_Template, 3, 3, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r2.status !== "declined" && !row_r2.deleted && row_r2.status !== "ended" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r2.status === "declined" || row_r2.deleted || row_r2.status === "ended" ? 2 : -1);
  }
}
function LockerBookingsComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.asset_name || row_r4.asset_id, " ");
  }
}
function LockerBookingsComponent_ng_template_20_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r5.user_email, " ");
  }
}
function LockerBookingsComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, LockerBookingsComponent_ng_template_20_Conditional_3_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r5.user_name || row_r5.user_email || row_r5.booked_by_name || row_r5.booked_by_email, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r5.user_name ? 3 : -1);
  }
}
function LockerBookingsComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "button", 22)(2, "div", 23)(3, "div", 24);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "icon", 25);
    \u0275\u0275text(7, " arrow_drop_down ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "mat-menu", null, 6)(10, "button", 26);
    \u0275\u0275listener("click", function LockerBookingsComponent_ng_template_22_Template_button_click_10_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.approve(row_r7));
    });
    \u0275\u0275elementStart(11, "div", 27)(12, "icon", 25);
    \u0275\u0275text(13, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 28);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 26);
    \u0275\u0275listener("click", function LockerBookingsComponent_ng_template_22_Template_button_click_17_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.reject(row_r7));
    });
    \u0275\u0275elementStart(18, "div", 27)(19, "icon", 25);
    \u0275\u0275text(20, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 28);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r7 = ctx.row;
    const menu_r8 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-success-content!", (row_r7 == null ? null : row_r7.status) === "approved")("bg-success!", (row_r7 == null ? null : row_r7.status) === "approved")("text-error-content!", (row_r7 == null ? null : row_r7.status) === "declined")("bg-error!", (row_r7 == null ? null : row_r7.status) === "declined")("text-neutral-content!", (row_r7 == null ? null : row_r7.status) === "ended")("bg-neutral!", (row_r7 == null ? null : row_r7.status) === "ended")("opacity-30", (row_r7 == null ? null : row_r7.status) === "ended");
    \u0275\u0275property("matMenuTriggerFor", menu_r8)("disabled", (row_r7 == null ? null : row_r7.status) === "ended");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 19, (row_r7 == null ? null : row_r7.status) === "ended" ? "APP.CONCIERGE.BOOKING_STATUS_ENDED" : (row_r7 == null ? null : row_r7.status) === "approved" ? "APP.CONCIERGE.BOOKING_STATUS_APPROVED" : (row_r7 == null ? null : row_r7.status) === "declined" ? "APP.CONCIERGE.BOOKING_STATUS_DECLINED" : "APP.CONCIERGE.BOOKING_STATUS_PENDING"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 21, "APP.CONCIERGE.LOCKERS_APPROVE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 23, "APP.CONCIERGE.LOCKERS_DECLINE"), " ");
  }
}
function LockerBookingsComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "button", 29)(2, "div", 23)(3, "div", 24);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "icon", 25);
    \u0275\u0275text(7, " arrow_drop_down ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "mat-menu", null, 7)(10, "button", 26);
    \u0275\u0275listener("click", function LockerBookingsComponent_ng_template_24_Template_button_click_10_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.checkin(row_r10, true));
    });
    \u0275\u0275elementStart(11, "div", 27)(12, "icon", 25);
    \u0275\u0275text(13, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 26);
    \u0275\u0275listener("click", function LockerBookingsComponent_ng_template_24_Template_button_click_17_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.checkin(row_r10, false));
    });
    \u0275\u0275elementStart(18, "div", 27)(19, "icon", 25);
    \u0275\u0275text(20, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r11 = ctx.data;
    const row_r10 = ctx.row;
    const checkinMenu_r12 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-neutral!", !data_r11)("text-neutral-content!", !data_r11)("bg-success!", data_r11)("text-success-content!", data_r11)("opacity-30", row_r10.status === "ended");
    \u0275\u0275property("matMenuTriggerFor", checkinMenu_r12)("disabled", row_r10.status === "ended")("matTooltip", row_r10.status === "ended" ? "Locker booking has ended" : "Check-in or check-out locker");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 16, data_r11 ? "COMMON.TRUE" : "COMMON.FALSE"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 18, "COMMON.CHECK_IN"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 20, "COMMON.CHECK_OUT"));
  }
}
function LockerBookingsComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function LockerBookingsComponent_Conditional_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadMore());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.LOAD_MORE"), " ");
  }
}
var _LockerBookingsComponent = class _LockerBookingsComponent {
  constructor() {
    this._state = inject(LockerStateService);
    this._settings = inject(SettingsService);
    this.filters = this._state.filters;
    this.search = this._state.search;
    this.has_more_pages = this._state.has_more_pages;
    this.bookings = this._state.filtered_bookings.pipe(map((i) => i.map((booking) => __spreadProps(__spreadValues({}, booking), {
      end: booking.date + booking.duration * 60 * 1e3
    }))));
    this.loadMore = () => this._state.nextPage();
    this.checkin = (d, s) => this.runMethod("checkin", async () => {
      await this._state.checkinLocker(d, s);
      d.checked_in = s ?? true;
    });
    this.approve = (d) => this.runMethod("approve", async () => this._state.approveLocker(d));
    this.reject = (d) => this.runMethod("reject", async () => this._state.rejectLocker(d));
  }
  get time_format() {
    return this._settings.time_format;
  }
  async runMethod(name, fn) {
    this.loading = name;
    await fn().catch((i) => null);
    this.loading = "";
  }
};
_LockerBookingsComponent.\u0275fac = function LockerBookingsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LockerBookingsComponent)();
};
_LockerBookingsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerBookingsComponent, selectors: [["locker-bookings"]], decls: 27, vars: 57, consts: [["date_template", ""], ["period_template", ""], ["locker_template", ""], ["user_template", ""], ["status_template", ""], ["option_template", ""], ["menu", "matMenu"], ["checkinMenu", "matMenu"], [1, "h-4", "w-full"], [1, "flex", "h-full", "w-full", "flex-col", "pt-4"], [1, "mr-4", "block", "w-full", "min-w-6xl", "flex-1", "overflow-auto", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], ["btn", "", "matRipple", "", 1, "absolute", "bottom-2", "left-4", "z-20", "w-32"], [1, "flex", "w-full", "flex-col", "items-center", "justify-center", "py-2"], [1, "opacity-60"], [1, "text-xl"], [1, "p-2"], [1, "bg-error", "rounded-3xl", "px-4", "py-2", "text-xs", "text-white"], [1, "p-4"], [1, "flex", "flex-col", "justify-center", "px-4", "py-2"], [1, "select-all"], [1, "text-xs", "opacity-30", "select-all"], [1, "px-2"], ["matRipple", "", 1, "bg-warning", "text-warning-content", "h-10", "w-30", "rounded-3xl", "border-none", 3, "matMenuTriggerFor", "disabled"], [1, "flex", "items-center", "space-x-2", "pr-2", "pl-4"], [1, "flex-1", "text-left"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"], ["matRipple", "", 1, "bg-warning", "text-warning-content", "h-10", "w-24", "rounded-3xl", "border-none", 3, "matMenuTriggerFor", "disabled", "matTooltip"], ["btn", "", "matRipple", "", 1, "absolute", "bottom-2", "left-4", "z-20", "w-32", 3, "click"]], template: function LockerBookingsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275element(2, "div", 8);
    \u0275\u0275elementStart(3, "div", 9);
    \u0275\u0275element(4, "simple-table", 10);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "async");
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275template(14, LockerBookingsComponent_ng_template_14_Template, 7, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(16, LockerBookingsComponent_ng_template_16_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(18, LockerBookingsComponent_ng_template_18_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(20, LockerBookingsComponent_ng_template_20_Template, 4, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(22, LockerBookingsComponent_ng_template_22_Template, 24, 25, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(24, LockerBookingsComponent_ng_template_24_Template, 24, 22, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(26, LockerBookingsComponent_Conditional_26_Template, 3, 3, "button", 11);
  }
  if (rf & 2) {
    const date_template_r14 = \u0275\u0275reference(15);
    const period_template_r15 = \u0275\u0275reference(17);
    const locker_template_r16 = \u0275\u0275reference(19);
    const user_template_r17 = \u0275\u0275reference(21);
    const status_template_r18 = \u0275\u0275reference(23);
    const more_pages_r19 = \u0275\u0275pipeBind1(1, 10, ctx.has_more_pages);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("pb-16", !ctx.loading && more_pages_r19)("pb-4", !(!ctx.loading && more_pages_r19));
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.bookings)("columns", \u0275\u0275pureFunction7(49, _c7, \u0275\u0275pureFunction2(30, _c04, \u0275\u0275pipeBind1(5, 12, "FORM.DATE"), date_template_r14), \u0275\u0275pureFunction2(33, _c1, \u0275\u0275pipeBind1(6, 14, "FORM.PERIOD"), period_template_r15), \u0275\u0275pureFunction2(36, _c2, \u0275\u0275pipeBind1(7, 16, "COMMON.PERSON"), user_template_r17), \u0275\u0275pureFunction1(39, _c3, \u0275\u0275pipeBind1(8, 18, "COMMON.GROUP")), \u0275\u0275pureFunction2(41, _c4, \u0275\u0275pipeBind1(9, 20, "RESOURCE.LOCKER"), locker_template_r16), \u0275\u0275pureFunction1(44, _c5, \u0275\u0275pipeBind1(10, 22, "APP.CONCIERGE.APPROVER")), \u0275\u0275pureFunction2(46, _c6, \u0275\u0275pipeBind1(11, 24, "COMMON.STATUS"), status_template_r18)))("sortable", true)("page_size", 100)("empty_message", \u0275\u0275pipeBind1(13, 28, \u0275\u0275pipeBind1(12, 26, ctx.search) ? "APP.CONCIERGE.LOCKERS_BOOK_SEARCH_EMPTY" : "APP.CONCIERGE.LOCKERS_BOOK_EMPTY"));
    \u0275\u0275advance(22);
    \u0275\u0275conditional(!ctx.loading && more_pages_r19 ? 26 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DatePipe,
  MatRippleModule,
  MatRipple,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatTooltipModule,
  MatTooltip,
  IconComponent,
  TranslatePipe,
  SimpleTableComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=locker-bookings.component.css.map */"] });
var LockerBookingsComponent = _LockerBookingsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockerBookingsComponent, [{
    type: Component,
    args: [{ selector: "locker-bookings", template: `
        @let more_pages = has_more_pages | async;
        <div class="h-4 w-full"></div>
        <div
            class="flex h-full w-full flex-col pt-4"
            [class.pb-16]="!loading && more_pages"
            [class.pb-4]="!(!loading && more_pages)"
        >
            <simple-table
                class="mr-4 block w-full min-w-6xl flex-1 overflow-auto text-sm"
                [data]="bookings"
                [columns]="[
                    {
                        key: 'date',
                        name: 'FORM.DATE' | translate,
                        content: date_template,
                        size: '4rem',
                    },
                    {
                        key: 'date',
                        name: 'FORM.PERIOD' | translate,
                        content: period_template,
                        size: '9rem',
                    },
                    {
                        key: 'user_name',
                        name: 'COMMON.PERSON' | translate,
                        content: user_template,
                    },
                    { key: 'group', name: 'COMMON.GROUP' | translate },
                    {
                        key: 'asset_name',
                        name: 'RESOURCE.LOCKER' | translate,
                        content: locker_template,
                    },
                    {
                        key: 'approver_name',
                        name: 'APP.CONCIERGE.APPROVER' | translate,
                    },
                    {
                        key: 'status',
                        name: 'COMMON.STATUS' | translate,
                        content: status_template,
                        size: '11rem',
                    },
                ]"
                [sortable]="true"
                [page_size]="100"
                [empty_message]="
                    ((search | async)
                        ? 'APP.CONCIERGE.LOCKERS_BOOK_SEARCH_EMPTY'
                        : 'APP.CONCIERGE.LOCKERS_BOOK_EMPTY'
                    ) | translate
                "
            ></simple-table>
            <ng-template #date_template let-date="data">
                <div
                    class="flex w-full flex-col items-center justify-center py-2"
                >
                    <div class="opacity-60">{{ date | date: 'MMM' }}</div>
                    <div class="text-xl">{{ date | date: 'dd' }}</div>
                </div>
            </ng-template>
            <ng-template #period_template let-row="row">
                <div class="p-2">
                    @if (
                        row.status !== 'declined' &&
                        !row.deleted &&
                        row.status !== 'ended'
                    ) {
                        <div class="p-2">
                            @if (!(row.all_day || row.duration > 12 * 60)) {
                                {{ row.date | date: time_format }} &ndash;
                                {{ row.date_end | date: time_format }}
                            }
                            @if (row.all_day || row.duration > 12 * 60) {
                                {{ 'COMMON.ALL_DAY' | translate }}
                            }
                        </div>
                    }
                    @if (
                        row.status === 'declined' ||
                        row.deleted ||
                        row.status === 'ended'
                    ) {
                        <div
                            class="bg-error rounded-3xl px-4 py-2 text-xs text-white"
                        >
                            {{
                                (row.status === 'ended'
                                    ? 'APP.CONCIERGE.BOOKING_ENDED'
                                    : 'APP.CONCIERGE.BOOKING_EXPIRED'
                                ) | translate
                            }}
                        </div>
                    }
                </div>
            </ng-template>
            <ng-template #locker_template let-row="row">
                <div class="p-4">
                    {{ row.asset_name || row.asset_id }}
                </div>
            </ng-template>
            <ng-template #user_template let-row="row">
                <div class="flex flex-col justify-center px-4 py-2">
                    <div class="select-all">
                        {{
                            row.user_name ||
                                row.user_email ||
                                row.booked_by_name ||
                                row.booked_by_email
                        }}
                    </div>
                    @if (row.user_name) {
                        <div class="text-xs opacity-30 select-all">
                            {{ row.user_email }}
                        </div>
                    }
                </div>
            </ng-template>
            <ng-template #status_template let-row="row">
                <div class="px-2">
                    <button
                        matRipple
                        class="bg-warning text-warning-content h-10 w-30 rounded-3xl border-none"
                        [class.text-success-content!]="
                            row?.status === 'approved'
                        "
                        [class.bg-success!]="row?.status === 'approved'"
                        [class.text-error-content!]="row?.status === 'declined'"
                        [class.bg-error!]="row?.status === 'declined'"
                        [class.text-neutral-content!]="row?.status === 'ended'"
                        [class.bg-neutral!]="row?.status === 'ended'"
                        [class.opacity-30]="row?.status === 'ended'"
                        [matMenuTriggerFor]="menu"
                        [disabled]="row?.status === 'ended'"
                    >
                        <div class="flex items-center space-x-2 pr-2 pl-4">
                            <div class="flex-1 text-left">
                                {{
                                    (row?.status === 'ended'
                                        ? 'APP.CONCIERGE.BOOKING_STATUS_ENDED'
                                        : row?.status === 'approved'
                                          ? 'APP.CONCIERGE.BOOKING_STATUS_APPROVED'
                                          : row?.status === 'declined'
                                            ? 'APP.CONCIERGE.BOOKING_STATUS_DECLINED'
                                            : 'APP.CONCIERGE.BOOKING_STATUS_PENDING'
                                    ) | translate
                                }}
                            </div>
                            <icon class="text-2xl"> arrow_drop_down </icon>
                        </div>
                    </button>
                </div>
                <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="approve(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">event_available</icon>
                            <div class="pr-2">
                                {{
                                    'APP.CONCIERGE.LOCKERS_APPROVE' | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="reject(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">event_busy</icon>
                            <div class="pr-2">
                                {{
                                    'APP.CONCIERGE.LOCKERS_DECLINE' | translate
                                }}
                            </div>
                        </div>
                    </button>
                </mat-menu>
            </ng-template>
            <ng-template #option_template let-data="data" let-row="row">
                <div class="px-2">
                    <button
                        matRipple
                        class="bg-warning text-warning-content h-10 w-24 rounded-3xl border-none"
                        [matMenuTriggerFor]="checkinMenu"
                        [class.bg-neutral!]="!data"
                        [class.text-neutral-content!]="!data"
                        [class.bg-success!]="data"
                        [class.text-success-content!]="data"
                        [class.opacity-30]="row.status === 'ended'"
                        [disabled]="row.status === 'ended'"
                        [matTooltip]="
                            row.status === 'ended'
                                ? 'Locker booking has ended'
                                : 'Check-in or check-out locker'
                        "
                    >
                        <div class="flex items-center space-x-2 pr-2 pl-4">
                            <div class="flex-1 text-left">
                                {{
                                    (data ? 'COMMON.TRUE' : 'COMMON.FALSE')
                                        | translate
                                }}
                            </div>
                            <icon class="text-2xl"> arrow_drop_down </icon>
                        </div>
                    </button>
                </div>
                <mat-menu #checkinMenu="matMenu">
                    <button mat-menu-item (click)="checkin(row, true)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">check</icon>
                            <div>{{ 'COMMON.CHECK_IN' | translate }}</div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="checkin(row, false)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">cancel</icon>
                            <div>{{ 'COMMON.CHECK_OUT' | translate }}</div>
                        </div>
                    </button>
                </mat-menu>
            </ng-template>
        </div>
        @if (!loading && more_pages) {
            <button
                btn
                matRipple
                class="absolute bottom-2 left-4 z-20 w-32"
                (click)="loadMore()"
            >
                {{ 'COMMON.LOAD_MORE' | translate }}
            </button>
        }
    `, imports: [
      CommonModule,
      MatRippleModule,
      MatMenuModule,
      MatTooltipModule,
      IconComponent,
      TranslatePipe,
      SimpleTableComponent
    ], styles: ["/* angular:styles/component:css;50f565321ed488c261915867f2cdb2126821993bd33e062143023023a6d86219;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/lockers/locker-bookings.component.ts */\n:host {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=locker-bookings.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerBookingsComponent, { className: "LockerBookingsComponent", filePath: "apps/concierge/src/app/lockers/locker-bookings.component.ts", lineNumber: 272 });
})();

// apps/concierge/src/app/lockers/locker-list.component.ts
var _c05 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c12 = (a0, a1) => ({ key: "map_id", name: a0, content: a1 });
var _c22 = (a0, a1) => ({ key: "height", name: a0, size: "6rem", content: a1 });
var _c32 = (a0) => ({ key: "tags", name: a0, size: "8rem" });
var _c42 = (a0) => ({ key: "actions", name: " ", content: a0, sortable: false, size: "6rem" });
var _c52 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
var _c62 = () => ({ key: "name", name: "Locker" });
var _c72 = (a0) => ({ key: "assigned_to", name: "Assigned", content: a0 });
var _c8 = (a0) => ({ key: "position", name: "Position", content: a0, size: "7.5rem" });
var _c9 = (a0) => ({ key: "size", name: "Size", content: a0, size: "7.5rem" });
var _c10 = (a0) => ({ key: "accessible", name: "Accessible", content: a0, size: "4rem" });
var _c11 = (a0) => ({ key: "bookable", name: "Bookable", content: a0, size: "4rem" });
var _c122 = (a0) => ({ key: "actions", name: " ", content: a0, sortable: false, size: "5.9rem" });
var _c13 = (a0, a1, a2, a3, a4, a5, a6) => [a0, a1, a2, a3, a4, a5, a6];
function LockerListComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", data_r1 || 1, "u");
  }
}
function LockerListComponent_ng_template_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "EXPLORE.MAP_ID_EMPTY"));
  }
}
function LockerListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_12_Template_button_click_0_listener() {
      const data_r3 = \u0275\u0275restoreView(_r2).data;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copyToClipboard(data_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, LockerListComponent_ng_template_12_Conditional_2_Template, 3, 3, "span", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r3, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r3 ? 2 : -1);
  }
}
function LockerListComponent_ng_template_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6.id, " ");
  }
}
function LockerListComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_14_Template_button_click_0_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copyToClipboard(row_r6.id));
    });
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, LockerListComponent_ng_template_14_Conditional_3_Template, 2, 1, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    const data_r7 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r7);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r6.id !== row_r6.map_id ? 3 : -1);
  }
}
function LockerListComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "button", 23)(2, "icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 5)(6, "button", 24);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_16_Template_button_click_6_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editLocker(row_r9));
    });
    \u0275\u0275elementStart(7, "div", 25)(8, "icon", 26);
    \u0275\u0275text(9, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "button", 24);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_16_Template_button_click_13_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.viewBank(row_r9));
    });
    \u0275\u0275elementStart(14, "div", 25)(15, "icon", 26);
    \u0275\u0275text(16, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "View Locker Bank Layout");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "button", 24);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_16_Template_button_click_19_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editLockerBank(row_r9));
    });
    \u0275\u0275elementStart(20, "div", 25)(21, "icon", 26);
    \u0275\u0275text(22, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "button", 24);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_16_Template_button_click_26_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeLockerBank(row_r9));
    });
    \u0275\u0275elementStart(27, "div", 25)(28, "icon", 27);
    \u0275\u0275text(29, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "button", 28);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_16_Template_button_click_33_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.show_children[row_r9.id] = !ctx_r3.show_children[row_r9.id]);
    });
    \u0275\u0275elementStart(34, "icon", 29);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r9 = ctx.row;
    const menu_r10 = \u0275\u0275reference(5);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r10);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 6, "APP.CONCIERGE.LOCKERS_ADD"));
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 8, "APP.CONCIERGE.LOCKERS_BANK_EDIT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 10, "APP.CONCIERGE.LOCKERS_BANK_REMOVE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !(row_r9.lockers == null ? null : row_r9.lockers.length));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.show_children[row_r9.id] ? "keyboard_arrow_down" : "chevron_right", " ");
  }
}
function LockerListComponent_ng_template_18_ng_template_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.UNASSIGNED"), " ");
  }
}
function LockerListComponent_ng_template_18_ng_template_3_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r12 = \u0275\u0275nextContext(2).data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r12, " ");
  }
}
function LockerListComponent_ng_template_18_ng_template_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_18_ng_template_3_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const data_r12 = \u0275\u0275nextContext().data;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.copyToClipboard(data_r12, "assigned"));
    });
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, LockerListComponent_ng_template_18_ng_template_3_Conditional_1_Conditional_3_Template, 2, 1, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r12 = \u0275\u0275nextContext();
    const row_r14 = ctx_r12.row;
    const data_r12 = ctx_r12.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r14.assigned_name || data_r12);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r14.assigned_name ? 3 : -1);
  }
}
function LockerListComponent_ng_template_18_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LockerListComponent_ng_template_18_ng_template_3_Conditional_0_Template, 3, 3, "div", 31);
    \u0275\u0275conditionalCreate(1, LockerListComponent_ng_template_18_ng_template_3_Conditional_1_Template, 4, 2, "button", 32);
  }
  if (rf & 2) {
    const data_r12 = ctx.data;
    \u0275\u0275conditional(!data_r12 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(data_r12 ? 1 : -1);
  }
}
function LockerListComponent_ng_template_18_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "div", 35);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 36);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 34)(8, "div", 35);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 36);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const data_r15 = ctx.data;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "COMMON.COLUMN"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", data_r15[0] + 1, "u ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 6, "COMMON.ROW"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", data_r15[1] + 1, "u ");
  }
}
function LockerListComponent_ng_template_18_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "div", 35);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 36);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 34)(8, "div", 35);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 36);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const data_r16 = ctx.data;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "COMMON.WIDTH"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", data_r16[0], "u ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 6, "COMMON.HEIGHT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", data_r16[1], "u ");
  }
}
function LockerListComponent_ng_template_18_ng_template_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon", 29);
    \u0275\u0275text(3, "accessible");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.LOCKERS_ACCESSIBLE_INFO"));
  }
}
function LockerListComponent_ng_template_18_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275conditionalCreate(1, LockerListComponent_ng_template_18_ng_template_9_Conditional_1_Template, 4, 3, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r17 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275conditional(data_r17 ? 1 : -1);
  }
}
function LockerListComponent_ng_template_18_ng_template_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "done");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "COMMON.BOOKABLE"));
  }
}
function LockerListComponent_ng_template_18_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LockerListComponent_ng_template_18_ng_template_11_Conditional_0_Template, 4, 3, "div", 39);
  }
  if (rf & 2) {
    const data_r18 = ctx.data;
    \u0275\u0275conditional(data_r18 ? 0 : -1);
  }
}
function LockerListComponent_ng_template_18_ng_template_13_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_18_ng_template_13_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const row_r20 = \u0275\u0275nextContext().row;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openLocker(row_r20));
    });
    \u0275\u0275elementStart(1, "div", 25)(2, "icon", 26);
    \u0275\u0275text(3, "meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "button", 24);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_18_ng_template_13_Conditional_13_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r22);
      const row_r20 = \u0275\u0275nextContext().row;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.shareLocker(row_r20));
    });
    \u0275\u0275elementStart(8, "div", 25)(9, "icon", 26);
    \u0275\u0275text(10, "share");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "button", 24);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_18_ng_template_13_Conditional_13_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r22);
      const row_r20 = \u0275\u0275nextContext().row;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.releaseLocker(row_r20));
    });
    \u0275\u0275elementStart(15, "div", 25)(16, "icon", 26);
    \u0275\u0275text(17, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, "APP.CONCIERGE.LOCKERS_OPEN"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 5, "APP.CONCIERGE.LOCKERS_SHARE"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 7, "APP.CONCIERGE.LOCKERS_RELEASE"));
  }
}
function LockerListComponent_ng_template_18_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "button", 23)(2, "icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "mat-menu", null, 12)(6, "button", 24);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_18_ng_template_13_Template_button_click_6_listener() {
      const row_r20 = \u0275\u0275restoreView(_r19).row;
      const bank_r21 = \u0275\u0275nextContext().row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editLocker(bank_r21, row_r20));
    });
    \u0275\u0275elementStart(7, "div", 25)(8, "icon", 26);
    \u0275\u0275text(9, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(13, LockerListComponent_ng_template_18_ng_template_13_Conditional_13_Template, 21, 9);
    \u0275\u0275elementStart(14, "button", 24);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_18_ng_template_13_Template_button_click_14_listener() {
      const row_r20 = \u0275\u0275restoreView(_r19).row;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeLocker(row_r20));
    });
    \u0275\u0275elementStart(15, "div", 25)(16, "icon", 27);
    \u0275\u0275text(17, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const locker_menu_r23 = \u0275\u0275reference(5);
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", locker_menu_r23);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 4, "APP.CONCIERGE.LOCKERS_EDIT"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.has_driver ? 13 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 6, "APP.CONCIERGE.LOCKERS_REMOVE"));
  }
}
function LockerListComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "simple-table", 30);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275template(3, LockerListComponent_ng_template_18_ng_template_3_Template, 2, 2, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(5, LockerListComponent_ng_template_18_ng_template_5_Template, 13, 8, "ng-template", null, 7, \u0275\u0275templateRefExtractor)(7, LockerListComponent_ng_template_18_ng_template_7_Template, 13, 8, "ng-template", null, 8, \u0275\u0275templateRefExtractor)(9, LockerListComponent_ng_template_18_ng_template_9_Template, 2, 1, "ng-template", null, 9, \u0275\u0275templateRefExtractor)(11, LockerListComponent_ng_template_18_ng_template_11_Template, 1, 1, "ng-template", null, 10, \u0275\u0275templateRefExtractor)(13, LockerListComponent_ng_template_18_ng_template_13_Template, 21, 8, "ng-template", null, 11, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const bank_r21 = ctx.row;
    const assigned_template_r24 = \u0275\u0275reference(4);
    const pos_template_r25 = \u0275\u0275reference(6);
    const size_template_r26 = \u0275\u0275reference(8);
    const accessible_template_r27 = \u0275\u0275reference(10);
    const bool_template_r28 = \u0275\u0275reference(12);
    const locker_action_template_r29 = \u0275\u0275reference(14);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("data", bank_r21.lockers)("show_header", false)("columns", \u0275\u0275pureFunction7(22, _c13, \u0275\u0275pureFunction0(9, _c62), \u0275\u0275pureFunction1(10, _c72, assigned_template_r24), \u0275\u0275pureFunction1(12, _c8, pos_template_r25), \u0275\u0275pureFunction1(14, _c9, size_template_r26), \u0275\u0275pureFunction1(16, _c10, accessible_template_r27), \u0275\u0275pureFunction1(18, _c11, bool_template_r28), \u0275\u0275pureFunction1(20, _c122, locker_action_template_r29)))("filter", \u0275\u0275pipeBind1(1, 5, ctx_r3.search))("empty_message", \u0275\u0275pipeBind1(2, 7, "APP.CONCIERGE.LOCKERS_EMPTY"));
  }
}
var _LockerListComponent = class _LockerListComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(LockerStateService);
    this._clipboard = inject(Clipboard);
    this.show_children = {};
    this.locker_banks = this._state.filtered_banks;
    this.lockers = this._state.filtered_lockers;
    this.options = this._state.filters;
    this.loading = this._state.loading;
    this.bookings = this._state.bookings;
    this.search = this._state.search;
    this.locker_status = {};
    this.viewBank = (b) => this._state.viewLockerBank(b);
    this.editLocker = (bid, s) => this._state.editLocker(bid, s);
    this.editLockerBank = (b) => this._state.editLockerBank(b);
    this.removeLocker = (s) => this._state.removeLocker(s);
    this.removeLockerBank = (b) => this._state.removeLockerBank(b);
    this.shareLocker = (l) => this._state.shareLocker(l);
    this.releaseLocker = (l) => this._state.releaseLocker(l, true);
    this.openLocker = (l) => this._state.openLocker(l, true);
  }
  get has_driver() {
    return this._state.has_driver;
  }
  ngOnInit() {
    this.subscription("bookings", combineLatest([this.lockers, this.bookings]).subscribe(([lockers, bookings]) => this._updateStatusList(lockers, bookings)));
  }
  copyToClipboard(id, type) {
    const success = this._clipboard.copy(id);
    if (success)
      notifySuccess(i18n(type ? "APP.CONCIERGE.LOCKERS_COPIED_USER" : "APP.CONCIERGE.LOCKERS_COPIED_ID"));
  }
  statusTooltip(status) {
    switch (status) {
      case "assigned_free":
        return "APP.CONCIERGE.LOCKERS_STATUS_ASSIGNED_FREE";
      case "assigned_busy":
        return "APP.CONCIERGE.LOCKERS_STATUS_ASSIGNED_BUSY";
      case "reuse_busy":
        return "APP.CONCIERGE.LOCKERS_STATUS_ASSIGNED_OTHER";
      case "busy":
        return "APP.CONCIERGE.LOCKERS_STATUS_BUSY";
      case "free":
        return "APP.CONCIERGE.LOCKERS_STATUS_FREE";
    }
    return "APP.CONCIERGE.LOCKERS_STATUS_FREE";
  }
  _updateStatusList(lockers, bookings) {
    for (const locker of lockers) {
      const booking = bookings.find((_) => _.asset_id === locker.id && _.status !== "declined" && _.status !== "cancelled" && _.status !== "ended");
      if (locker.assigned_to && !booking) {
        this.locker_status[locker.id] = "assigned_free";
      } else if (locker.assigned_to && booking && booking.user_email === locker.assigned_to) {
        this.locker_status[locker.id] = "assigned_busy";
      } else if (locker.assigned_to && booking && booking.user_email !== locker.assigned_to) {
        this.locker_status[locker.id] = "reuse_busy";
      } else if (!locker.assigned_to && booking) {
        this.locker_status[locker.id] = "busy";
      } else {
        this.locker_status[locker.id] = "free";
      }
    }
  }
};
_LockerListComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275LockerListComponent_BaseFactory;
  return function LockerListComponent_Factory(__ngFactoryType__) {
    return (\u0275LockerListComponent_BaseFactory || (\u0275LockerListComponent_BaseFactory = \u0275\u0275getInheritedFactory(_LockerListComponent)))(__ngFactoryType__ || _LockerListComponent);
  };
})();
_LockerListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerListComponent, selectors: [["locker-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 20, vars: 42, consts: [["height_template", ""], ["id_template", ""], ["name_template", ""], ["action_template", ""], ["locker_list_template", ""], ["menu", "matMenu"], ["assigned_template", ""], ["pos_template", ""], ["size_template", ""], ["accessible_template", ""], ["bool_template", ""], ["locker_action_template", ""], ["locker_menu", "matMenu"], [1, "w-full"], [1, "block", "min-w-208", "text-sm", 3, "data", "columns", "filter", "show_children", "child_template", "sortable", "empty_message"], [1, "h-20", "w-full"], [1, "px-4", "font-mono"], [1, "px-4", "py-2", "text-left", "font-mono", "leading-tight", 3, "click"], [1, "opacity-30"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "flex", "w-full", "items-center", "justify-end", "space-x-2", "px-2"], ["icon", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], [1, "text-error", "text-xl"], ["icon", "", "matRipple", "", 3, "click", "disabled"], [1, "text-2xl"], [3, "data", "show_header", "columns", "filter", "empty_message"], [1, "p-4", "opacity-30"], [1, "px-4", "py-2", "text-left", "leading-tight"], [1, "flex", "w-full", "space-x-2", "p-2"], [1, "flex", "flex-col"], [1, "text-xs", "opacity-30"], [1, "bg-base-200", "w-12", "rounded-sm", "px-2", "py-1", "text-center"], [1, "flex", "w-full", "items-center", "justify-center", "p-2"], [1, "bg-info", "text-info-content", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", 3, "matTooltip"], [1, "bg-success", "text-success-content", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", 3, "matTooltip"]], template: function LockerListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 13);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275element(2, "simple-table", 14);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275element(9, "div", 15);
    \u0275\u0275template(10, LockerListComponent_ng_template_10_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(12, LockerListComponent_ng_template_12_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(14, LockerListComponent_ng_template_14_Template, 4, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(16, LockerListComponent_ng_template_16_Template, 36, 12, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(18, LockerListComponent_ng_template_18_Template, 15, 30, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    let tmp_5_0;
    const height_template_r30 = \u0275\u0275reference(11);
    const id_template_r31 = \u0275\u0275reference(13);
    const name_template_r32 = \u0275\u0275reference(15);
    const action_template_r33 = \u0275\u0275reference(17);
    const locker_list_template_r34 = \u0275\u0275reference(19);
    \u0275\u0275classProp("opacity-0", !((tmp_5_0 = \u0275\u0275pipeBind1(1, 9, ctx.loading)) == null ? null : tmp_5_0.includes("lockers")));
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx.locker_banks)("columns", \u0275\u0275pureFunction5(36, _c52, \u0275\u0275pureFunction2(23, _c05, \u0275\u0275pipeBind1(3, 11, "APP.CONCIERGE.LOCKERS_BANK"), name_template_r32), \u0275\u0275pureFunction2(26, _c12, \u0275\u0275pipeBind1(4, 13, "EXPLORE.MAP_ID"), id_template_r31), \u0275\u0275pureFunction2(29, _c22, \u0275\u0275pipeBind1(5, 15, "COMMON.HEIGHT"), height_template_r30), \u0275\u0275pureFunction1(32, _c32, \u0275\u0275pipeBind1(6, 17, "COMMON.TAGS")), \u0275\u0275pureFunction1(34, _c42, action_template_r33)))("filter", \u0275\u0275pipeBind1(7, 19, ctx.search))("show_children", ctx.show_children)("child_template", locker_list_template_r34)("sortable", true)("empty_message", \u0275\u0275pipeBind1(8, 21, "APP.CONCIERGE.LOCKERS_BANK_EMPTY"));
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatTooltipModule,
  MatTooltip,
  TranslatePipe,
  SimpleTableComponent,
  MatProgressBarModule,
  MatProgressBar
], encapsulation: 2 });
var LockerListComponent = _LockerListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockerListComponent, [{
    type: Component,
    args: [{ selector: "locker-list", template: `
        <mat-progress-bar
            [class.opacity-0]="!(loading | async)?.includes('lockers')"
            class="w-full"
        />
        <simple-table
            class="block min-w-208 text-sm"
            [data]="locker_banks"
            [columns]="[
                {
                    key: 'name',
                    name: 'APP.CONCIERGE.LOCKERS_BANK' | translate,
                    content: name_template,
                },
                {
                    key: 'map_id',
                    name: 'EXPLORE.MAP_ID' | translate,
                    content: id_template,
                },
                {
                    key: 'height',
                    name: 'COMMON.HEIGHT' | translate,
                    size: '6rem',
                    content: height_template,
                },
                { key: 'tags', name: 'COMMON.TAGS' | translate, size: '8rem' },
                {
                    key: 'actions',
                    name: ' ',
                    content: action_template,
                    sortable: false,
                    size: '6rem',
                },
            ]"
            [filter]="search | async"
            [show_children]="show_children"
            [child_template]="locker_list_template"
            [sortable]="true"
            [empty_message]="'APP.CONCIERGE.LOCKERS_BANK_EMPTY' | translate"
        />
        <div class="h-20 w-full"></div>
        <ng-template #height_template let-data="data">
            <div class="px-4 font-mono">{{ data || 1 }}u</div>
        </ng-template>
        <ng-template #id_template let-row="row" let-data="data">
            <button
                class="px-4 py-2 text-left font-mono leading-tight"
                (click)="copyToClipboard(data)"
            >
                {{ data }}
                @if (!data) {
                    <span class="opacity-30">{{
                        'EXPLORE.MAP_ID_EMPTY' | translate
                    }}</span>
                }
            </button>
        </ng-template>
        <ng-template #name_template let-row="row" let-data="data">
            <button
                class="px-4 py-2 text-left leading-tight"
                (click)="copyToClipboard(row.id)"
            >
                <div class="">{{ data }}</div>
                @if (row.id !== row.map_id) {
                    <div class="font-mono text-[0.625rem] opacity-30">
                        {{ row.id }}
                    </div>
                }
            </button>
        </ng-template>
        <ng-template #action_template let-row="row" let-data="data">
            <div class="flex w-full items-center justify-end space-x-2 px-2">
                <button icon matRipple [matMenuTriggerFor]="menu">
                    <icon>more_vert</icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="editLocker(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">add</icon>
                            <span>{{
                                'APP.CONCIERGE.LOCKERS_ADD' | translate
                            }}</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="viewBank(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">visibility</icon>
                            <span>View Locker Bank Layout</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="editLockerBank(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">edit</icon>
                            <span>{{
                                'APP.CONCIERGE.LOCKERS_BANK_EDIT' | translate
                            }}</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="removeLockerBank(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-error text-xl">delete</icon>
                            <span>{{
                                'APP.CONCIERGE.LOCKERS_BANK_REMOVE' | translate
                            }}</span>
                        </div>
                    </button>
                </mat-menu>
                <button
                    icon
                    matRipple
                    [disabled]="!row.lockers?.length"
                    (click)="show_children[row.id] = !show_children[row.id]"
                >
                    <icon class="text-2xl">
                        {{
                            show_children[row.id]
                                ? 'keyboard_arrow_down'
                                : 'chevron_right'
                        }}
                    </icon>
                </button>
            </div>
        </ng-template>
        <ng-template #locker_list_template let-bank="row">
            <simple-table
                [data]="bank.lockers"
                [show_header]="false"
                [columns]="[
                    { key: 'name', name: 'Locker' },
                    {
                        key: 'assigned_to',
                        name: 'Assigned',
                        content: assigned_template,
                    },
                    {
                        key: 'position',
                        name: 'Position',
                        content: pos_template,
                        size: '7.5rem',
                    },
                    {
                        key: 'size',
                        name: 'Size',
                        content: size_template,
                        size: '7.5rem',
                    },
                    {
                        key: 'accessible',
                        name: 'Accessible',
                        content: accessible_template,
                        size: '4rem',
                    },
                    {
                        key: 'bookable',
                        name: 'Bookable',
                        content: bool_template,
                        size: '4rem',
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: locker_action_template,
                        sortable: false,
                        size: '5.9rem',
                    },
                ]"
                [filter]="search | async"
                [empty_message]="'APP.CONCIERGE.LOCKERS_EMPTY' | translate"
            />
            <ng-template #assigned_template let-row="row" let-data="data">
                @if (!data) {
                    <div class="p-4 opacity-30">
                        {{ 'APP.CONCIERGE.UNASSIGNED' | translate }}
                    </div>
                }
                @if (data) {
                    <button
                        class="px-4 py-2 text-left leading-tight"
                        (click)="copyToClipboard(data, 'assigned')"
                    >
                        <div class="">{{ row.assigned_name || data }}</div>
                        @if (row.assigned_name) {
                            <div class="font-mono text-[0.625rem] opacity-30">
                                {{ data }}
                            </div>
                        }
                    </button>
                }
            </ng-template>
            <ng-template #pos_template let-data="data">
                <div class="flex w-full space-x-2 p-2">
                    <div class="flex flex-col">
                        <div class="text-xs opacity-30">
                            {{ 'COMMON.COLUMN' | translate }}
                        </div>
                        <div
                            class="bg-base-200 w-12 rounded-sm px-2 py-1 text-center"
                        >
                            {{ data[0] + 1 }}u
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div class="text-xs opacity-30">
                            {{ 'COMMON.ROW' | translate }}
                        </div>
                        <div
                            class="bg-base-200 w-12 rounded-sm px-2 py-1 text-center"
                        >
                            {{ data[1] + 1 }}u
                        </div>
                    </div>
                </div>
            </ng-template>
            <ng-template #size_template let-data="data">
                <div class="flex w-full space-x-2 p-2">
                    <div class="flex flex-col">
                        <div class="text-xs opacity-30">
                            {{ 'COMMON.WIDTH' | translate }}
                        </div>
                        <div
                            class="bg-base-200 w-12 rounded-sm px-2 py-1 text-center"
                        >
                            {{ data[0] }}u
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div class="text-xs opacity-30">
                            {{ 'COMMON.HEIGHT' | translate }}
                        </div>
                        <div
                            class="bg-base-200 w-12 rounded-sm px-2 py-1 text-center"
                        >
                            {{ data[1] }}u
                        </div>
                    </div>
                </div>
            </ng-template>
            <ng-template #accessible_template let-data="data">
                <div class="flex w-full items-center justify-center p-2">
                    @if (data) {
                        <div
                            class="bg-info text-info-content flex h-8 w-8 items-center justify-center rounded-sm"
                            [matTooltip]="
                                'APP.CONCIERGE.LOCKERS_ACCESSIBLE_INFO'
                                    | translate
                            "
                        >
                            <icon class="text-2xl">accessible</icon>
                        </div>
                    }
                </div>
            </ng-template>
            <ng-template #bool_template let-data="data">
                @if (data) {
                    <div
                        class="bg-success text-success-content mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl"
                        [matTooltip]="'COMMON.BOOKABLE' | translate"
                    >
                        <icon>done</icon>
                    </div>
                }
            </ng-template>
            <ng-template #locker_action_template let-row="row">
                <div
                    class="flex w-full items-center justify-end space-x-2 px-2"
                >
                    <button icon matRipple [matMenuTriggerFor]="locker_menu">
                        <icon>more_vert</icon>
                    </button>
                </div>
                <mat-menu #locker_menu="matMenu">
                    <button mat-menu-item (click)="editLocker(bank, row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">edit</icon>
                            <span>{{
                                'APP.CONCIERGE.LOCKERS_EDIT' | translate
                            }}</span>
                        </div>
                    </button>
                    @if (has_driver) {
                        <button mat-menu-item (click)="openLocker(row)">
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">meeting_room</icon>
                                <span>{{
                                    'APP.CONCIERGE.LOCKERS_OPEN' | translate
                                }}</span>
                            </div>
                        </button>
                        <button mat-menu-item (click)="shareLocker(row)">
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">share</icon>
                                <span>{{
                                    'APP.CONCIERGE.LOCKERS_SHARE' | translate
                                }}</span>
                            </div>
                        </button>
                        <button mat-menu-item (click)="releaseLocker(row)">
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">event_busy</icon>
                                <span>{{
                                    'APP.CONCIERGE.LOCKERS_RELEASE' | translate
                                }}</span>
                            </div>
                        </button>
                    }
                    <button mat-menu-item (click)="removeLocker(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-error text-xl">delete</icon>
                            <span>{{
                                'APP.CONCIERGE.LOCKERS_REMOVE' | translate
                            }}</span>
                        </div>
                    </button>
                </mat-menu>
            </ng-template>
        </ng-template>
    `, imports: [
      CommonModule,
      MatMenuModule,
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      TranslatePipe,
      SimpleTableComponent,
      MatProgressBarModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerListComponent, { className: "LockerListComponent", filePath: "apps/concierge/src/app/lockers/locker-list.component.ts", lineNumber: 349 });
})();

// apps/concierge/src/app/lockers/locker-topbar.component.ts
function LockersTopbarComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("click", function LockersTopbarComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newLockerBank());
    });
    \u0275\u0275elementStart(2, "div", 15);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "icon", 16);
    \u0275\u0275text(6, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !((tmp_1_0 = \u0275\u0275pipeBind1(1, 2, ctx_r1.options)) == null ? null : tmp_1_0.zones == null ? null : tmp_1_0.zones.length));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "APP.CONCIERGE.LOCKERS_BANK_ADD"), " ");
  }
}
function LockersTopbarComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function LockersTopbarComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newBooking());
    });
    \u0275\u0275elementStart(1, "div", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon", 16);
    \u0275\u0275text(5, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.NEW_BOOKING"), " ");
  }
}
function LockersTopbarComponent_For_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const level_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_11_0 = \u0275\u0275pipeBind1(2, 1, level_r4.parent_id)) == null ? null : tmp_11_0.display_name, " ");
  }
}
function LockersTopbarComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10)(1, "div", 19);
    \u0275\u0275conditionalCreate(2, LockersTopbarComponent_For_17_Conditional_2_Template, 5, 3, "div", 20);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", level_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r4.display_name || level_r4.name, " ");
  }
}
function LockersTopbarComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function LockersTopbarComponent_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.releaseAllLockers());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "open_in_new");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.LOCKERS_RELEASE_ALL"));
  }
}
function LockersTopbarComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function LockersTopbarComponent_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.manageRestrictions());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "lock_open");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.LOCKERS_BOOKING_RULES"));
  }
}
function LockersTopbarComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "date-options", 24);
    \u0275\u0275listener("dateChange", function LockersTopbarComponent_Conditional_22_Template_date_options_dateChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDate($event));
    });
    \u0275\u0275elementEnd();
  }
}
var _LockersTopbarComponent = class _LockersTopbarComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(LockerStateService);
    this._org = inject(OrganisationService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this.path = signal("");
    this.zones = signal([]);
    this.levels = this._state.levels;
    this.options = this._state.filters;
    this.search = this._state.search;
    this.setDate = (d) => this._state.setFilters({ date: d });
    this.setSearch = (str) => this._state.setSearch(str);
    this.newLockerBank = () => this._state.editLockerBank();
    this.releaseAllLockers = () => this._state.releaseAllLockers(true);
    this.updateZones = (z) => {
      if (!this._router.url.includes("lockers"))
        return;
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: z.join(",") },
        queryParamsHandling: "merge"
      });
      this._state.setFilters({ zones: z });
    };
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  manageRestrictions() {
    this._dialog.open(BookingRulesModalComponent, {
      data: { type: "locker" }
    });
  }
  async ngOnInit() {
    this._updatePath();
    await firstTruthyValueFrom(this._org.initialised);
    await lastValueFrom(timer(1e3));
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("zone_ids") && this._router.url.includes("locker")) {
        const zones = params.get("zone_ids").split(",");
        if (zones.length) {
          const level = this._org.levelWithID(zones);
          this.zones.set(zones);
          if (!level)
            return;
          this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
          this._state.setFilters({ zones });
        }
      }
    }));
    this.subscription("levels", this._state.levels.subscribe((levels) => {
      if (this.use_region)
        return;
      this.zones.update((zones) => zones.filter((z) => levels.find((lvl) => lvl.id === z)));
      if (!this.zones().length && levels.length) {
        this.zones.update((zones) => {
          zones.push(levels[0].id);
          return zones;
        });
      }
      this.updateZones(this.zones());
    }));
    this.subscription("router.events", this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd)
        this._updatePath();
    }));
    this._updatePath();
  }
  async newBooking() {
    const { date } = await nextValueFrom(this.options);
    this._state.editBooking(void 0, {
      date: date || Date.now(),
      allow_time_changes: true
    });
  }
  _updatePath() {
    this.timeout("path", () => {
      const parts = this._router.url?.split("/") || [""];
      this.path.set(parts[parts.length - 1].split("?")[0]);
    }, 20);
  }
};
_LockersTopbarComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275LockersTopbarComponent_BaseFactory;
  return function LockersTopbarComponent_Factory(__ngFactoryType__) {
    return (\u0275LockersTopbarComponent_BaseFactory || (\u0275LockersTopbarComponent_BaseFactory = \u0275\u0275getInheritedFactory(_LockersTopbarComponent)))(__ngFactoryType__ || _LockersTopbarComponent);
  };
})();
_LockersTopbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockersTopbarComponent, selectors: [["lockers-topbar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 23, vars: 22, consts: [[1, "flex", "w-full", "items-center", "space-x-2", "px-8", "py-4"], [1, "text-2xl", "font-medium"], [1, "w-px", "flex-1"], [1, "mr-2", 3, "modelChange", "model"], [3, "matTooltip"], ["btn", "", "matRipple", "", 1, "w-40", "space-x-2", 3, "disabled"], ["btn", "", "matRipple", "", 1, "w-48", "space-x-2"], [1, "bg-base-100", "mb-2", "flex", "h-14", "items-center", "px-8"], ["appearance", "outline", 1, "no-subscript", "w-56"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [1, "w-0", "flex-1"], ["icon", "", "matRipple", "", 1, "border-error", "text-error", "mr-2", "h-12", "w-12", "rounded-sm", "border", 3, "matTooltip"], ["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "rounded-sm", 3, "matTooltip"], ["btn", "", "matRipple", "", 1, "w-40", "space-x-2", 3, "click", "disabled"], [1, "pl-4"], [1, "text-2xl"], ["btn", "", "matRipple", "", 1, "w-48", "space-x-2", 3, "click"], [1, "pl-2"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], ["icon", "", "matRipple", "", 1, "border-error", "text-error", "mr-2", "h-12", "w-12", "rounded-sm", "border", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "rounded-sm", 3, "click", "matTooltip"], [3, "dateChange"]], template: function LockersTopbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 2);
    \u0275\u0275elementStart(5, "searchbar", 3);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275listener("modelChange", function LockersTopbarComponent_Template_searchbar_modelChange_5_listener($event) {
      return ctx.setSearch($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 4);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275conditionalCreate(10, LockersTopbarComponent_Conditional_10_Template, 7, 6, "button", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, LockersTopbarComponent_Conditional_11_Template, 6, 3, "button", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 7)(13, "mat-form-field", 8)(14, "mat-select", 9);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function LockersTopbarComponent_Template_mat_select_ngModelChange_14_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.zones, $event) || (ctx.zones = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function LockersTopbarComponent_Template_mat_select_ngModelChange_14_listener($event) {
      return ctx.updateZones($event);
    });
    \u0275\u0275repeaterCreate(16, LockersTopbarComponent_For_17_Template, 5, 3, "mat-option", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(19, "div", 11);
    \u0275\u0275conditionalCreate(20, LockersTopbarComponent_Conditional_20_Template, 4, 3, "button", 12);
    \u0275\u0275conditionalCreate(21, LockersTopbarComponent_Conditional_21_Template, 4, 3, "button", 13);
    \u0275\u0275conditionalCreate(22, LockersTopbarComponent_Conditional_22_Template, 1, 0, "date-options");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 10, ctx.path() !== "events" ? "APP.CONCIERGE.LOCKERS_HEADER" : "APP.CONCIERGE.LOCKERS_BOOK_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("model", \u0275\u0275pipeBind1(6, 12, ctx.search));
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(9, 16, ((tmp_2_0 = \u0275\u0275pipeBind1(8, 14, ctx.options)) == null ? null : tmp_2_0.zones == null ? null : tmp_2_0.zones.length) ? "" : "APP.CONCIERGE.LOCKERS_LEVEL_SELECT"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.path() === "manage" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.path() === "events" ? 11 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.zones);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(15, 18, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(18, 20, ctx.levels));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.path() !== "events" && ctx.path() !== "map" ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.path() !== "events" && ctx.path() !== "map" ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.path() === "events" || ctx.path() === "map" ? 22 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DateOptionsComponent,
  IconComponent,
  MatRippleModule,
  MatRipple,
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
], styles: ["\n\nbutton[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 0 0.85rem;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=locker-topbar.component.css.map */"] });
var LockersTopbarComponent = _LockersTopbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockersTopbarComponent, [{
    type: Component,
    args: [{ selector: "lockers-topbar", template: `
        <div class="flex w-full items-center space-x-2 px-8 py-4">
            <h2 class="text-2xl font-medium">
                {{
                    (path() !== 'events'
                        ? 'APP.CONCIERGE.LOCKERS_HEADER'
                        : 'APP.CONCIERGE.LOCKERS_BOOK_HEADER'
                    ) | translate
                }}
            </h2>
            <div class="w-px flex-1"></div>
            <searchbar
                class="mr-2"
                [model]="search | async"
                (modelChange)="setSearch($event)"
            ></searchbar>
            <div
                [matTooltip]="
                    ((options | async)?.zones?.length
                        ? ''
                        : 'APP.CONCIERGE.LOCKERS_LEVEL_SELECT'
                    ) | translate
                "
            >
                @if (path() === 'manage') {
                    <button
                        btn
                        matRipple
                        class="w-40 space-x-2"
                        (click)="newLockerBank()"
                        [disabled]="!(options | async)?.zones?.length"
                    >
                        <div class="pl-4">
                            {{ 'APP.CONCIERGE.LOCKERS_BANK_ADD' | translate }}
                        </div>
                        <icon class="text-2xl">add</icon>
                    </button>
                }
            </div>
            @if (path() === 'events') {
                <button
                    btn
                    matRipple
                    class="w-48 space-x-2"
                    (click)="newBooking()"
                >
                    <div class="pl-2">
                        {{ 'APP.CONCIERGE.NEW_BOOKING' | translate }}
                    </div>
                    <icon class="text-2xl">add</icon>
                </button>
            }
        </div>
        <div class="bg-base-100 mb-2 flex h-14 items-center px-8">
            <mat-form-field appearance="outline" class="no-subscript w-56">
                <mat-select
                    [(ngModel)]="zones"
                    (ngModelChange)="updateZones($event)"
                    [placeholder]="'COMMON.LEVEL_ALL' | translate"
                    multiple
                >
                    @for (level of levels | async; track level) {
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
            <div class="w-0 flex-1"></div>
            @if (path() !== 'events' && path() !== 'map') {
                <button
                    icon
                    matRipple
                    class="border-error text-error mr-2 h-12 w-12 rounded-sm border"
                    (click)="releaseAllLockers()"
                    [matTooltip]="
                        'APP.CONCIERGE.LOCKERS_RELEASE_ALL' | translate
                    "
                >
                    <icon>open_in_new</icon>
                </button>
            }
            @if (path() !== 'events' && path() !== 'map') {
                <button
                    icon
                    matRipple
                    class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                    (click)="manageRestrictions()"
                    [matTooltip]="
                        'APP.CONCIERGE.LOCKERS_BOOKING_RULES' | translate
                    "
                >
                    <icon>lock_open</icon>
                </button>
            }
            @if (path() === 'events' || path() === 'map') {
                <date-options (dateChange)="setDate($event)"></date-options>
            }
        </div>
    `, imports: [
      CommonModule,
      DateOptionsComponent,
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      SearchbarComponent,
      TranslatePipe,
      BuildingPipe
    ], styles: ["/* angular:styles/component:css;4bb26a1eb5035846e32fdbd8af6a308e831b6910e15ebdbaee0887184c668792;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/lockers/locker-topbar.component.ts */\nbutton {\n  min-width: 0;\n  padding: 0 0.85rem;\n}\nmat-form-field {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=locker-topbar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockersTopbarComponent, { className: "LockersTopbarComponent", filePath: "apps/concierge/src/app/lockers/locker-topbar.component.ts", lineNumber: 172 });
})();

// apps/concierge/src/app/lockers/lockers.component.ts
var _c06 = ["app-new-lockers", ""];
function LockersComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 5);
  }
}
var _LockersComponent = class _LockersComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(LockerStateService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this.loading = this._state.loading;
    this.path = signal("");
    this.filters = this._state.filters;
    this.levels = this._state.levels;
    this.setDate = (date) => this._state.setFilters({ date });
    this.setFilters = (o) => this._state.setFilters(o);
    this.refresh = () => this._state.refresh();
    this.rejectAll = () => this._state.rejectAllLockers();
    this.updateZones = (zones) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: zones.join(",") },
        queryParamsHandling: "merge"
      });
      this._state.setFilters({ zones });
    };
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  ngOnInit() {
    this._state.refresh();
    this.subscription("router.events", this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd)
        this._updatePath();
    }));
    this._updatePath();
  }
  manageRestrictions() {
    this._dialog.open(BookingRulesModalComponent, {
      data: { type: "locker" }
    });
  }
  _updatePath() {
    const parts = this._router.url?.split("/") || [""];
    this.path.set(parts[parts.length - 1].split("?")[0]);
  }
};
_LockersComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275LockersComponent_BaseFactory;
  return function LockersComponent_Factory(__ngFactoryType__) {
    return (\u0275LockersComponent_BaseFactory || (\u0275LockersComponent_BaseFactory = \u0275\u0275getInheritedFactory(_LockersComponent)))(__ngFactoryType__ || _LockersComponent);
  };
})();
_LockersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockersComponent, selectors: [["", "app-new-lockers", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c06, decls: 10, vars: 3, consts: [[1, "flex", "h-px", "flex-1"], [1, "relative", "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "w-full"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto", "px-8"], [1, "h-full", "w-full", "overflow-auto"], ["mode", "indeterminate", 1, "w-full"]], template: function LockersComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 1);
    \u0275\u0275element(4, "lockers-topbar", 2);
    \u0275\u0275elementStart(5, "div", 3)(6, "div", 4);
    \u0275\u0275element(7, "router-outlet");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, LockersComponent_Conditional_8_Template, 1, 0, "mat-progress-bar", 5);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(9, 1, ctx.loading) && ctx.path() === "events" ? 8 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  ApplicationTopbarComponent,
  ApplicationSidebarComponent,
  LockersTopbarComponent,
  RouterModule,
  RouterOutlet,
  MatProgressBarModule,
  MatProgressBar
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=lockers.component.css.map */"] });
var LockersComponent = _LockersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockersComponent, [{
    type: Component,
    args: [{ selector: "[app-new-lockers]", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="relative flex h-full w-1/2 flex-1 flex-col">
                <lockers-topbar class="w-full"></lockers-topbar>
                <div class="relative h-1/2 w-full flex-1 overflow-auto px-8">
                    <div class="h-full w-full overflow-auto">
                        <router-outlet></router-outlet>
                    </div>
                </div>
                @if ((loading | async) && path() === 'events') {
                    <mat-progress-bar
                        class="w-full"
                        mode="indeterminate"
                    ></mat-progress-bar>
                }
            </main>
        </div>
    `, imports: [
      CommonModule,
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      LockersTopbarComponent,
      RouterModule,
      MatProgressBarModule
    ], styles: ["/* angular:styles/component:css;8c4a04aa555db379bf6f094c3ef1278e1f19da8fa9947c76cf85d1411aeb75c3;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/lockers/lockers.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=lockers.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockersComponent, { className: "LockersComponent", filePath: "apps/concierge/src/app/lockers/lockers.component.ts", lineNumber: 61 });
})();

// apps/concierge/src/app/lockers/lockers.module.ts
var ROUTES = [
  {
    path: "",
    component: LockersComponent,
    children: [
      { path: "events", component: LockerBookingsComponent },
      { path: "manage", component: LockerListComponent },
      { path: "**", redirectTo: "events" }
    ]
  }
];
var _LockersModule = class _LockersModule {
};
_LockersModule.\u0275fac = function LockersModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LockersModule)();
};
_LockersModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LockersModule });
_LockersModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  LockersComponent,
  LockerBookingsComponent,
  LockerListComponent,
  RouterModule.forChild(ROUTES)
] });
var LockersModule = _LockersModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockersModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        LockersComponent,
        LockerBookingsComponent,
        LockerListComponent,
        RouterModule.forChild(ROUTES)
      ]
    }]
  }], null, null);
})();
export {
  LockersModule
};
//# sourceMappingURL=lockers.module-SJO73EQO.js.map
