import {
  LockerListFieldComponent
} from "./chunk-4TKH7LIR.js";
import {
  BookingFormService,
  LockerGridComponent
} from "./chunk-XCGU5XIL.js";
import {
  addChipItem,
  removeChipItem
} from "./chunk-4RG2QD2S.js";
import {
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  Booking,
  BuildingPipe,
  COMMA,
  CommonModule,
  Component,
  CounterComponent,
  DateFieldComponent,
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
  MatOption,
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
  NgModel,
  OrganisationService,
  Output,
  ReactiveFormsModule,
  RecurrenceDays,
  SPACE,
  SelectUserModalComponent,
  SettingsService,
  SettingsToggleComponent,
  Subject,
  TimeFieldComponent,
  TranslatePipe,
  UserSearchFieldComponent,
  Validators,
  __spreadProps,
  __spreadValues,
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
  getInvalidFields,
  getUnixTime,
  i18n,
  inject,
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
  saveBooking,
  scan,
  set,
  setClassMetadata,
  shareReplay,
  showStaff,
  startOfDay,
  switchMap,
  tap,
  unique,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-Z5DSMDUT.js";

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

export {
  LockerStateService
};
//# sourceMappingURL=chunk-GUUXBIRX.js.map
