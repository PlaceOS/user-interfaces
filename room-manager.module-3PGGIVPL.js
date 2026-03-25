import {
  ServicesStateService
} from "./chunk-QQHOFBC2.js";
import {
  SelectMapItemModalComponent
} from "./chunk-UTDONXPW.js";
import {
  BookingRulesModalComponent
} from "./chunk-2S3J2CPU.js";
import {
  AV_CATEGORIES,
  BUILDING_CATERING_TIER,
  CATERING_TIER_OPTIONS,
  SETUP_CATEGORIES,
  TIER_CATEGORIES,
  UNIT_LABELS
} from "./chunk-D54ZDHOD.js";
import {
  CateringStateService
} from "./chunk-UZWZYCJZ.js";
import "./chunk-DMHKYXHX.js";
import {
  SearchbarComponent
} from "./chunk-FIES5Q3G.js";
import "./chunk-CPERCIGK.js";
import "./chunk-3FN4NPVV.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent
} from "./chunk-TYEIOTTY.js";
import "./chunk-XFQJKEL3.js";
import {
  CounterComponent,
  DurationFieldComponent,
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-4MJY7RRT.js";
import {
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  BuildingPipe,
  COMMA,
  Clipboard,
  CommonModule,
  Component,
  DefaultValueAccessor,
  ENTER,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  FullscreenModalShellComponent,
  He,
  IconComponent,
  ImageListFieldComponent,
  Injectable,
  LevelPipe,
  Lr,
  MAT_DIALOG_DATA,
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
  MatHint,
  MatInput,
  MatInputModule,
  MatLabel,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatOption,
  MatPrefix,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgModule,
  NumberValueAccessor,
  OrganisationService,
  ReactiveFormsModule,
  RequiredValidator,
  Router,
  RouterModule,
  SPACE,
  SanitizePipe,
  SettingsService,
  SettingsToggleComponent,
  SimpleTableComponent,
  TIMEZONES_IANA,
  TranslatePipe,
  Zc,
  catchError,
  combineLatest,
  computed,
  filter,
  first,
  generateSystemsFormFields,
  getInvalidFields,
  getItemWithKeys,
  i18n,
  inject,
  ja,
  lastValueFrom,
  map,
  na,
  nc,
  notifyError,
  notifySuccess,
  notifyWarn,
  of,
  rc,
  setClassMetadata,
  shareReplay,
  signal,
  switchMap,
  ta,
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
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction8,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-25H4I2JW.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// apps/concierge/src/app/room-manager/room-alert-modal.component.ts
var _c0 = (a0) => ({ name: a0 });
function RoomAlertModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 2)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function RoomAlertModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3)(1, "label", 6);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 7)(5, "mat-label");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-select", 8)(9, "mat-option", 9);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-option", 10);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-option", 11);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-option", 12);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "label", 13);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-form-field", 7)(25, "mat-label");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "textarea", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 9, "COMMON.STATUS"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 11, "COMMON.STATUS"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 13, "APP.CONCIERGE.ROOMS_ALERT_TYPE_NONE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 15, "APP.CONCIERGE.ROOMS_ALERT_TYPE_INFO"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 17, "APP.CONCIERGE.ROOMS_ALERT_TYPE_WARNING"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 19, "APP.CONCIERGE.ROOMS_ALERT_TYPE_CLOSED"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 21, "APP.CONCIERGE.ROOMS_ALERT_MSG"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 23, "APP.CONCIERGE.ROOMS_ALERT_MSG"));
  }
}
function RoomAlertModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 15);
    \u0275\u0275elementStart(2, "p", 16);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.ROOMS_SAVING"), " ");
  }
}
function RoomAlertModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 5)(1, "button", 17);
    \u0275\u0275listener("click", function RoomAlertModalComponent_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
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
var _RoomAlertModalComponent = class _RoomAlertModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._org = inject(OrganisationService);
    this.loading = false;
    this.room = this._data.room;
    this.form = new FormGroup({
      status: new FormControl(""),
      message: new FormControl("")
    });
    this.form.patchValue(this.room.alert || {});
  }
  async save() {
    this.loading = true;
    const metadata = await nc(this._org.organisation.id, "room_alerts").toPromise().catch((e) => {
      notifyError(i18n("APP.CONCIERGE.ROOMS_ALERT_LOAD_ERROR", {
        error: e.message || e
      }));
      this.loading = false;
      throw e;
    });
    const alert = this.form.getRawValue();
    if (alert.status === "") {
      delete metadata.details[this.room.id];
    } else {
      metadata.details[this.room.id] = [alert.status, alert.message];
    }
    await rc(this._org.organisation.id, {
      name: "room_alerts",
      details: metadata.details,
      editors: metadata.editors || [],
      description: "Details for room alerts"
    }).toPromise().catch((e) => {
      notifyError(i18n("APP.CONCIERGE.ROOMS_ALERT_SAVE_ERROR", {
        error: e.message || e
      }));
      this.loading = false;
      throw e;
    });
    notifySuccess(i18n("APP.CONCIERGE.ROOMS_ALERT_SAVE_SUCCESS"));
    this._dialog_ref.close(true);
  }
};
_RoomAlertModalComponent.\u0275fac = function RoomAlertModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RoomAlertModalComponent)();
};
_RoomAlertModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomAlertModalComponent, selectors: [["room-alert-modal"]], decls: 8, vars: 9, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "mx-auto", "my-2", "flex", "h-14", "w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium", "capitalize"], ["icon", "", "matRipple", "", "mat-dialog-close", "", "aria-label", "Close dialog"], [1, "flex", "max-h-[65vh]", "min-w-md", "flex-col", "overflow-x-hidden", "overflow-y-auto", "p-4", 3, "formGroup"], [1, "flex", "h-64", "w-64", "flex-col", "items-center", "justify-center"], [1, "border-base-200", "flex", "justify-end", "border-t", "p-2"], ["for", "status"], ["appearance", "outline"], ["name", "status", "formControlName", "status"], ["value", ""], ["value", "info"], ["value", "warn"], ["value", "closed"], ["for", "message"], ["matInput", "", "name", "message", "formControlName", "message"], ["diameter", "32"], [1, "mt-4"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"]], template: function RoomAlertModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, RoomAlertModalComponent_Conditional_4_Template, 3, 0, "button", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, RoomAlertModalComponent_Conditional_5_Template, 29, 25, "main", 3)(6, RoomAlertModalComponent_Conditional_6_Template, 5, 3, "div", 4);
    \u0275\u0275conditionalCreate(7, RoomAlertModalComponent_Conditional_7_Template, 4, 3, "footer", 5);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 4, "APP.CONCIERGE.ROOMS_ALERT_HEADER", \u0275\u0275pureFunction1(7, _c0, ctx.room.display_name || ctx.room.name)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading ? 5 : 6);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading ? 7 : -1);
  }
}, dependencies: [
  MatDialogModule,
  MatDialogClose,
  MatRippleModule,
  MatRipple,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatFormFieldModule,
  MatFormField,
  MatLabel,
  MatInputModule,
  MatInput,
  MatSelectModule,
  MatSelect,
  MatOption,
  ReactiveFormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  TranslatePipe,
  IconComponent
], encapsulation: 2 });
var RoomAlertModalComponent = _RoomAlertModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomAlertModalComponent, [{
    type: Component,
    args: [{ selector: "room-alert-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 mx-auto my-2 flex h-14 w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium capitalize">
                {{
                    'APP.CONCIERGE.ROOMS_ALERT_HEADER'
                        | translate: { name: room.display_name || room.name }
                }}
            </h2>
            @if (!loading) {
                <button icon matRipple mat-dialog-close aria-label="Close dialog">
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading) {
            <main
                class="flex max-h-[65vh] min-w-md flex-col overflow-x-hidden overflow-y-auto p-4"
                [formGroup]="form"
            >
                <label for="status">{{ 'COMMON.STATUS' | translate }}</label>
                <mat-form-field appearance="outline">
                    <mat-label>{{ 'COMMON.STATUS' | translate }}</mat-label>
                    <mat-select name="status" formControlName="status">
                        <mat-option value="">{{
                            'APP.CONCIERGE.ROOMS_ALERT_TYPE_NONE' | translate
                        }}</mat-option>
                        <mat-option value="info">{{
                            'APP.CONCIERGE.ROOMS_ALERT_TYPE_INFO' | translate
                        }}</mat-option>
                        <mat-option value="warn">{{
                            'APP.CONCIERGE.ROOMS_ALERT_TYPE_WARNING' | translate
                        }}</mat-option>
                        <mat-option value="closed">{{
                            'APP.CONCIERGE.ROOMS_ALERT_TYPE_CLOSED' | translate
                        }}</mat-option>
                    </mat-select>
                </mat-form-field>
                <label for="message">{{
                    'APP.CONCIERGE.ROOMS_ALERT_MSG' | translate
                }}</label>
                <mat-form-field appearance="outline">
                    <mat-label>{{ 'APP.CONCIERGE.ROOMS_ALERT_MSG' | translate }}</mat-label>
                    <textarea
                        matInput
                        name="message"
                        formControlName="message"
                    ></textarea>
                </mat-form-field>
            </main>
        } @else {
            <div class="flex h-64 w-64 flex-col items-center justify-center">
                <mat-spinner diameter="32"></mat-spinner>
                <p class="mt-4">
                    {{ 'APP.CONCIERGE.ROOMS_SAVING' | translate }}
                </p>
            </div>
        }
        @if (!loading) {
            <footer class="border-base-200 flex justify-end border-t p-2">
                <button btn matRipple class="w-32" (click)="save()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
    `, imports: [
      MatDialogModule,
      MatRippleModule,
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      ReactiveFormsModule,
      TranslatePipe,
      IconComponent
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomAlertModalComponent, { className: "RoomAlertModalComponent", filePath: "apps/concierge/src/app/room-manager/room-alert-modal.component.ts", lineNumber: 104 });
})();

// apps/concierge/src/app/room-manager/room-modal.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.label;
function RoomModalComponent_Conditional_8_Conditional_1_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const level_r1 = ctx.$implicit;
    \u0275\u0275property("value", level_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", level_r1.display_name || level_r1.name, " ");
  }
}
function RoomModalComponent_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 14)(7, "mat-label");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-select", 34);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275repeaterCreate(12, RoomModalComponent_Conditional_8_Conditional_1_For_13_Template, 2, 2, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-error");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.zone.invalid && ctx_r1.form.controls.zone.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "RESOURCE.LEVEL"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 8, "RESOURCE.LEVEL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 10, "APP.CONCIERGE.ROOMS_SELECT_LEVEL"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(14, 12, ctx_r1.levels));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 14, "APP.CONCIERGE.ROOMS_LEVEL_REQUIRED"));
  }
}
function RoomModalComponent_Conditional_8_Conditional_3_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "FORM.NAME_REQUIRED"), " ");
  }
}
function RoomModalComponent_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 35);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 14)(7, "mat-label");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 36);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275conditionalCreate(12, RoomModalComponent_Conditional_8_Conditional_3_Conditional_12_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.name.invalid && ctx_r1.form.controls.name.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "FORM.NAME"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 8, "FORM.NAME"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 10, "FORM.NAME"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.controls.name.invalid ? 12 : -1);
  }
}
function RoomModalComponent_Conditional_8_Conditional_4_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "FORM.EMAIL_REQUIRED"), " ");
  }
}
function RoomModalComponent_Conditional_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 37);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 14)(5, "mat-label");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 38);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275conditionalCreate(10, RoomModalComponent_Conditional_8_Conditional_4_Conditional_10_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.email.invalid && ctx_r1.form.controls.email.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "FORM.EMAIL"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "FORM.EMAIL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 10, "FORM.EMAIL"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.controls.email.invalid ? 10 : -1);
  }
}
function RoomModalComponent_Conditional_8_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 14)(5, "mat-label");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 40);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "FORM.DISPLAY_NAME"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "FORM.DISPLAY_NAME"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 7, "FORM.DISPLAY_NAME"));
  }
}
function RoomModalComponent_Conditional_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 41);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 14)(5, "mat-label");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 42);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "APP.CONCIERGE.ROOMS_CODE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "APP.CONCIERGE.ROOMS_CODE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 7, "APP.CONCIERGE.ROOMS_CODE"));
  }
}
function RoomModalComponent_Conditional_8_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "settings-toggle", 43);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("name", \u0275\u0275pipeBind1(2, 1, "COMMON.REQUIRE_APPROVAL"));
  }
}
function RoomModalComponent_Conditional_8_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "settings-toggle", 44);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("name", \u0275\u0275pipeBind1(2, 1, "COMMON.BOOKABLE"));
  }
}
function RoomModalComponent_Conditional_8_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "label", 45);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-counter", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.capacity.invalid && ctx_r1.form.controls.capacity.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "COMMON.CAPACITY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("min", 0)("max", 256);
  }
}
function RoomModalComponent_Conditional_8_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    \u0275\u0275property("value", opt_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r3.label);
  }
}
function RoomModalComponent_Conditional_8_For_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    \u0275\u0275property("value", opt_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r4.label);
  }
}
function RoomModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 5);
    \u0275\u0275conditionalCreate(1, RoomModalComponent_Conditional_8_Conditional_1_Template, 18, 16, "div", 6);
    \u0275\u0275elementStart(2, "div", 7);
    \u0275\u0275conditionalCreate(3, RoomModalComponent_Conditional_8_Conditional_3_Template, 13, 12, "div", 8);
    \u0275\u0275conditionalCreate(4, RoomModalComponent_Conditional_8_Conditional_4_Template, 11, 12, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 7);
    \u0275\u0275conditionalCreate(6, RoomModalComponent_Conditional_8_Conditional_6_Template, 10, 9, "div", 8);
    \u0275\u0275conditionalCreate(7, RoomModalComponent_Conditional_8_Conditional_7_Template, 10, 9, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 9);
    \u0275\u0275conditionalCreate(9, RoomModalComponent_Conditional_8_Conditional_9_Template, 3, 3, "div", 10);
    \u0275\u0275conditionalCreate(10, RoomModalComponent_Conditional_8_Conditional_10_Template, 3, 3, "div", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "form", 11);
    \u0275\u0275conditionalCreate(12, RoomModalComponent_Conditional_8_Conditional_12_Template, 5, 7, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 13)(14, "div", 6)(15, "label");
    \u0275\u0275text(16, "Venue Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-form-field", 14)(18, "mat-label");
    \u0275\u0275text(19, "Venue Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-select", 15);
    \u0275\u0275repeaterCreate(21, RoomModalComponent_Conditional_8_For_22_Template, 2, 2, "mat-option", 16, _forTrack0);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "details", 17)(24, "summary", 18);
    \u0275\u0275text(25, " Layout & Configuration ");
    \u0275\u0275elementStart(26, "span", 19);
    \u0275\u0275text(27, "Seating, layouts & square footage");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 20)(29, "div", 21)(30, "div", 22)(31, "label");
    \u0275\u0275text(32, "Square Footage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "mat-form-field", 14)(34, "mat-label");
    \u0275\u0275text(35, "Square Footage");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 24);
    \u0275\u0275element(38, "settings-toggle", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 22)(40, "label");
    \u0275\u0275text(41, "Supported Layouts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "mat-form-field", 14)(43, "mat-label");
    \u0275\u0275text(44, "Supported Layouts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "mat-select", 26);
    \u0275\u0275repeaterCreate(46, RoomModalComponent_Conditional_8_For_47_Template, 2, 2, "mat-option", 16, _forTrack0);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(48, "details", 17)(49, "summary", 18);
    \u0275\u0275text(50, " Pricing ");
    \u0275\u0275elementStart(51, "span", 19);
    \u0275\u0275text(52, "Hourly, half-day & full-day rates");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 20)(54, "div", 27)(55, "div", 22)(56, "label");
    \u0275\u0275text(57, "Hourly Rate ($)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "mat-form-field", 14)(59, "mat-label");
    \u0275\u0275text(60, "Hourly Rate ($)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(61, "input", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 22)(63, "label");
    \u0275\u0275text(64, "Half-Day Rate ($)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "mat-form-field", 14)(66, "mat-label");
    \u0275\u0275text(67, "Half-Day Rate ($)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(68, "input", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 22)(70, "label");
    \u0275\u0275text(71, "Full-Day Rate ($)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "mat-form-field", 14)(73, "mat-label");
    \u0275\u0275text(74, "Full-Day Rate ($)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(75, "input", 30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(76, "div", 31)(77, "label");
    \u0275\u0275text(78, "Refund Lead Time (days)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "mat-form-field", 14)(80, "mat-label");
    \u0275\u0275text(81, "Refund Lead Time (days)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(82, "input", 32);
    \u0275\u0275elementStart(83, "mat-hint");
    \u0275\u0275text(84, "Days before event date when refund cutoff applies");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.zone ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.controls.name ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.email ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.controls.display_name ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.display_name ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.controls.approval ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.bookable ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.capacity ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.venue_form);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.venue_type_options);
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r1.venue_form);
    \u0275\u0275advance(8);
    \u0275\u0275property("min", 0);
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r1.supported_layout_options);
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r1.venue_form);
    \u0275\u0275advance(8);
    \u0275\u0275property("min", 0);
    \u0275\u0275advance(7);
    \u0275\u0275property("min", 0);
    \u0275\u0275advance(7);
    \u0275\u0275property("min", 0);
    \u0275\u0275advance(7);
    \u0275\u0275property("min", 0);
  }
}
function RoomModalComponent_Conditional_9_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    \u0275\u0275property("value", opt_r6.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r6.label);
  }
}
function RoomModalComponent_Conditional_9_For_45_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 110)(1, "label", 111)(2, "input", 112);
    \u0275\u0275listener("change", function RoomModalComponent_Conditional_9_For_45_For_13_Template_input_change_2_listener() {
      const item_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleAvItem(item_r10.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 113);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 114)(6, "span", 104);
    \u0275\u0275text(7, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 115);
    \u0275\u0275listener("change", function RoomModalComponent_Conditional_9_For_45_For_13_Template_input_change_8_listener($event) {
      const item_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setMenuItemPrice(item_r10.id, $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 116);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("opacity-60", !ctx_r1.isAvItemEnabled(item_r10.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.isAvItemEnabled(item_r10.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r10.name);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.getMenuItemPrice(item_r10.id))("min", 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getUnitLabel((item_r10.tags == null ? null : item_r10.tags[0]) || ""));
  }
}
function RoomModalComponent_Conditional_9_For_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "details", 63)(1, "summary", 103)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 104);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 105)(7, "div", 106)(8, "span", 107);
    \u0275\u0275text(9, "Select All");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 108);
    \u0275\u0275listener("click", function RoomModalComponent_Conditional_9_For_45_Template_button_click_10_listener() {
      const cat_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleAvCategory(cat_r8.id));
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(12, RoomModalComponent_Conditional_9_For_45_For_13_Template, 11, 7, "div", 109, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cat_r8.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.getAvEnabledCount(cat_r8.id), "/", cat_r8.items.length);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isAvCategoryFullyEnabled(cat_r8.id) ? "Deselect All" : "Select All", " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(cat_r8.items);
  }
}
function RoomModalComponent_Conditional_9_For_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 117);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r11 = ctx.$implicit;
    \u0275\u0275property("value", opt_r11.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r11.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2014 ", opt_r11.description);
  }
}
function RoomModalComponent_Conditional_9_For_87_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 110)(1, "label", 111)(2, "input", 112);
    \u0275\u0275listener("change", function RoomModalComponent_Conditional_9_For_87_For_15_Template_input_change_2_listener() {
      const item_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleMenuItem(item_r15.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 113);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 114)(6, "span", 104);
    \u0275\u0275text(7, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 118);
    \u0275\u0275listener("change", function RoomModalComponent_Conditional_9_For_87_For_15_Template_input_change_8_listener($event) {
      const item_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setMenuItemPrice(item_r15.id, $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 116);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("opacity-60", !ctx_r1.isMenuItemEnabled(item_r15.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.isMenuItemEnabled(item_r15.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r15.name);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.getMenuItemPrice(item_r15.id))("min", 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getUnitLabel((item_r15.tags == null ? null : item_r15.tags[0]) || ""));
  }
}
function RoomModalComponent_Conditional_9_For_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "details", 63)(1, "summary", 103)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 117);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 104);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 105)(9, "div", 106)(10, "span", 107);
    \u0275\u0275text(11, "Select All");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 108);
    \u0275\u0275listener("click", function RoomModalComponent_Conditional_9_For_87_Template_button_click_12_listener() {
      const cat_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleCategory(cat_r13.id));
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(14, RoomModalComponent_Conditional_9_For_87_For_15_Template, 11, 7, "div", 109, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", cat_r13.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r13.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.getEnabledCount(cat_r13.id), "/", cat_r13.items.length);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isCategoryFullyEnabled(cat_r13.id) ? "Deselect All" : "Select All", " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(cat_r13.items);
  }
}
function RoomModalComponent_Conditional_9_For_102_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 110)(1, "label", 111)(2, "input", 112);
    \u0275\u0275listener("change", function RoomModalComponent_Conditional_9_For_102_For_7_Template_input_change_2_listener() {
      const item_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleSetupItem(item_r18.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 113);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 114)(6, "span", 104);
    \u0275\u0275text(7, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 115);
    \u0275\u0275listener("change", function RoomModalComponent_Conditional_9_For_102_For_7_Template_input_change_8_listener($event) {
      const item_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setMenuItemPrice(item_r18.id, $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 116);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("opacity-60", !ctx_r1.isSetupItemEnabled(item_r18.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.isSetupItemEnabled(item_r18.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r18.name);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.getMenuItemPrice(item_r18.id))("min", 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getUnitLabel((item_r18.tags == null ? null : item_r18.tags[0]) || ""));
  }
}
function RoomModalComponent_Conditional_9_For_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 106)(2, "span", 107);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 108);
    \u0275\u0275listener("click", function RoomModalComponent_Conditional_9_For_102_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleAllSetup());
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(6, RoomModalComponent_Conditional_9_For_102_For_7_Template, 11, 7, "div", 109, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r19 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.getSetupEnabledCount(), "/", cat_r19.items.length, " selected");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isAllSetupEnabled() ? "Deselect All" : "Select All", " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(cat_r19.items);
  }
}
function RoomModalComponent_Conditional_9_For_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r20 = ctx.$implicit;
    \u0275\u0275property("value", opt_r20.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r20.label);
  }
}
function RoomModalComponent_Conditional_9_For_126_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 121)(1, "input", 122);
    \u0275\u0275listener("change", function RoomModalComponent_Conditional_9_For_126_For_5_Template_input_change_1_listener() {
      const svc_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleManagedService(svc_r22.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "icon", 123);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 124)(5, "div", 125);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 104);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const svc_r22 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isManagedServiceSelected(svc_r22.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(svc_r22.icon || "misc_services");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(svc_r22.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", svc_r22.internal_price, " (internal) \xB7 ", svc_r22.external_price, " (external)");
  }
}
function RoomModalComponent_Conditional_9_For_126_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85)(1, "div", 119);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 120);
    \u0275\u0275repeaterCreate(4, RoomModalComponent_Conditional_9_For_126_For_5_Template, 9, 5, "label", 121, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r23 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r23.label);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r23.items);
  }
}
function RoomModalComponent_Conditional_9_Conditional_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275text(1, " No services configured. Add services via Service Management. ");
    \u0275\u0275elementEnd();
  }
}
function RoomModalComponent_Conditional_9_Conditional_155_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 126);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 14)(5, "mat-label");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "textarea", 127);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "COMMON.DESCRIPTION"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "COMMON.DESCRIPTION"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 7, "COMMON.DESCRIPTION"));
  }
}
function RoomModalComponent_Conditional_9_Conditional_156_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 130);
    \u0275\u0275listener("removed", function RoomModalComponent_Conditional_9_Conditional_156_For_12_Template_mat_chip_row_removed_0_listener() {
      const feature_r26 = \u0275\u0275restoreView(_r25).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeFeature(feature_r26));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "icon", 131);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r26 = ctx.$implicit;
    \u0275\u0275property("removable", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r26, " ");
  }
}
function RoomModalComponent_Conditional_9_Conditional_156_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 14)(5, "mat-label");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-chip-grid", null, 1);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275repeaterCreate(11, RoomModalComponent_Conditional_9_Conditional_156_For_12_Template, 4, 2, "mat-chip-row", 128, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(13, "input", 129);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("matChipInputTokenEnd", function RoomModalComponent_Conditional_9_Conditional_156_Template_input_matChipInputTokenEnd_13_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addFeature($event));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const chipList_r27 = \u0275\u0275reference(9);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.features.invalid && ctx_r1.form.controls.features.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 9, "COMMON.FEATURES"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 11, "COMMON.FEATURES"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 13, "COMMON.FEATURES"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.feature_list);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(14, 15, "COMMON.FEATURES"))("matChipInputFor", chipList_r27)("matChipInputSeparatorKeyCodes", ctx_r1.separators)("matChipInputAddOnBlur", true);
  }
}
function RoomModalComponent_Conditional_9_Conditional_157_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 132);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 7)(5, "mat-form-field", 14)(6, "mat-label");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 133);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 134);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275listener("click", function RoomModalComponent_Conditional_9_Conditional_157_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectItemfromMap());
    });
    \u0275\u0275elementStart(13, "icon");
    \u0275\u0275text(14, "place");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "EXPLORE.MAP_ID"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "EXPLORE.MAP_ID"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 8, "EXPLORE.MAP_ID_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(12, 10, "APP.CONCIERGE.POI_MAP_SELECT"));
  }
}
function RoomModalComponent_Conditional_9_For_173_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tz_r29 = ctx.$implicit;
    \u0275\u0275property("value", tz_r29);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tz_r29, " ");
  }
}
function RoomModalComponent_Conditional_9_Conditional_174_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 102);
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
function RoomModalComponent_Conditional_9_Conditional_175_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 135);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "image-list-field", 136);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "COMMON.IMAGE"));
  }
}
function RoomModalComponent_Conditional_9_Conditional_176_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 137);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 14)(5, "mat-label");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 138);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementStart(10, "mat-error");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.timetable_url.invalid && ctx_r1.form.controls.timetable_url.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "COMMON.TIMETABLE_URL"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "COMMON.TIMETABLE_URL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 10, "COMMON.TIMETABLE_URL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 12, "SYSTEMS.URL_VALID"), " ");
  }
}
function RoomModalComponent_Conditional_9_Conditional_177_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 139);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 14)(5, "mat-label");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 140);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementStart(10, "mat-error");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.room_booking_url.invalid && ctx_r1.form.controls.room_booking_url.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "COMMON.ROOM_BOOKING_URL"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "COMMON.ROOM_BOOKING_URL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 10, "COMMON.ROOM_BOOKING_URL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 12, "COMMON.URL_VALID"), " ");
  }
}
function RoomModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48)(2, "label", 49);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "icon", 50);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275text(7, " info ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "a-duration-field", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 48)(10, "label", 52);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementStart(13, "icon", 50);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275text(15, " info ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "a-duration-field", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "details", 17)(18, "summary", 18);
    \u0275\u0275text(19, " AV & Technology ");
    \u0275\u0275elementStart(20, "span", 19);
    \u0275\u0275text(21, "Equipment, staffing & tech support");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 20)(23, "div", 54)(24, "label");
    \u0275\u0275text(25, "AV & Tech Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-form-field", 14)(27, "mat-label");
    \u0275\u0275text(28, "AV & Tech Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-select", 55);
    \u0275\u0275repeaterCreate(30, RoomModalComponent_Conditional_9_For_31_Template, 2, 2, "mat-option", 16, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 21);
    \u0275\u0275element(33, "settings-toggle", 56)(34, "settings-toggle", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "label", 58);
    \u0275\u0275text(36, "AV Equipment & Staffing Catalog");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-form-field", 59)(38, "mat-label");
    \u0275\u0275text(39, "Search AV items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "icon", 60);
    \u0275\u0275text(41, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 61);
    \u0275\u0275listener("input", function RoomModalComponent_Conditional_9_Template_input_input_42_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.av_search.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 62);
    \u0275\u0275repeaterCreate(44, RoomModalComponent_Conditional_9_For_45_Template, 14, 4, "details", 63, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "details", 17)(47, "summary", 18);
    \u0275\u0275text(48, " Catering & Dining ");
    \u0275\u0275elementStart(49, "span", 19);
    \u0275\u0275text(50, "UCLA menu catalog & pricing");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 64)(52, "div", 65)(53, "label", 66);
    \u0275\u0275text(54, "Service Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "mat-form-field", 14)(56, "mat-label");
    \u0275\u0275text(57, "Service Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "mat-select", 67);
    \u0275\u0275listener("selectionChange", function RoomModalComponent_Conditional_9_Template_mat_select_selectionChange_58_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.active_tier.set($event.value));
    });
    \u0275\u0275repeaterCreate(59, RoomModalComponent_Conditional_9_For_60_Template, 4, 3, "mat-option", 16, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div", 68);
    \u0275\u0275element(62, "settings-toggle", 69)(63, "settings-toggle", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 71)(65, "div", 6)(66, "label", 72);
    \u0275\u0275text(67, "Catering Provider");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "mat-form-field", 14)(69, "mat-label");
    \u0275\u0275text(70, "Catering Provider");
    \u0275\u0275elementEnd();
    \u0275\u0275element(71, "input", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 6)(73, "label", 72);
    \u0275\u0275text(74, "Catering Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "mat-form-field", 14)(76, "mat-label");
    \u0275\u0275text(77, "Catering Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(78, "input", 74);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(79, "mat-form-field", 59)(80, "mat-label");
    \u0275\u0275text(81, "Search menu items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "icon", 60);
    \u0275\u0275text(83, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "input", 75);
    \u0275\u0275listener("input", function RoomModalComponent_Conditional_9_Template_input_input_84_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.menu_search.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 76);
    \u0275\u0275repeaterCreate(86, RoomModalComponent_Conditional_9_For_87_Template, 16, 5, "details", 63, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(88, "details", 17)(89, "summary", 18);
    \u0275\u0275text(90, " Setup & Furniture Rental ");
    \u0275\u0275elementStart(91, "span", 19);
    \u0275\u0275text(92, "Tables, bars & event furniture");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div", 77)(94, "mat-form-field", 59)(95, "mat-label");
    \u0275\u0275text(96, "Search setup items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "icon", 60);
    \u0275\u0275text(98, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "input", 78);
    \u0275\u0275listener("input", function RoomModalComponent_Conditional_9_Template_input_input_99_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setup_search.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "div", 62);
    \u0275\u0275repeaterCreate(101, RoomModalComponent_Conditional_9_For_102_Template, 8, 3, "div", 79, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "div", 80);
    \u0275\u0275element(104, "settings-toggle", 81);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(105, "details", 17)(106, "summary", 18);
    \u0275\u0275text(107, " Event Services ");
    \u0275\u0275elementStart(108, "span", 19);
    \u0275\u0275text(109, "Planning, staffing & CNSI packages");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(110, "div", 20)(111, "div", 54)(112, "label");
    \u0275\u0275text(113, "General Event Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "mat-form-field", 14)(115, "mat-label");
    \u0275\u0275text(116, "General Event Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "mat-select", 82);
    \u0275\u0275repeaterCreate(118, RoomModalComponent_Conditional_9_For_119_Template, 2, 2, "mat-option", 16, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(120, "div", 22)(121, "label", 83);
    \u0275\u0275text(122, "CNSI Service Packages");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "p", 84);
    \u0275\u0275text(124, " Select packages and add-ons from Service Management available at this venue. ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(125, RoomModalComponent_Conditional_9_For_126_Template, 6, 1, "div", 85, _forTrack2);
    \u0275\u0275conditionalCreate(127, RoomModalComponent_Conditional_9_Conditional_127_Template, 2, 0, "div", 86);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(128, "details", 17)(129, "summary", 18);
    \u0275\u0275text(130, " Parking & WiFi ");
    \u0275\u0275elementStart(131, "span", 19);
    \u0275\u0275text(132, "Connectivity & transportation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(133, "div", 20)(134, "div", 87);
    \u0275\u0275element(135, "settings-toggle", 88)(136, "settings-toggle", 89)(137, "settings-toggle", 90)(138, "settings-toggle", 91);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(139, "details", 17)(140, "summary", 18);
    \u0275\u0275text(141, " Accessibility ");
    \u0275\u0275elementStart(142, "span", 19);
    \u0275\u0275text(143, "ADA compliance & accommodations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(144, "div", 92)(145, "div", 87);
    \u0275\u0275element(146, "settings-toggle", 93)(147, "settings-toggle", 94)(148, "settings-toggle", 95)(149, "settings-toggle", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "div", 97)(151, "label");
    \u0275\u0275text(152, "Wheelchair Capacity");
    \u0275\u0275elementEnd();
    \u0275\u0275element(153, "a-counter", 98);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(154, "form", 11);
    \u0275\u0275conditionalCreate(155, RoomModalComponent_Conditional_9_Conditional_155_Template, 10, 9, "div", 6);
    \u0275\u0275conditionalCreate(156, RoomModalComponent_Conditional_9_Conditional_156_Template, 15, 17, "div", 6);
    \u0275\u0275conditionalCreate(157, RoomModalComponent_Conditional_9_Conditional_157_Template, 15, 12, "div", 6);
    \u0275\u0275elementStart(158, "div", 6)(159, "label", 99);
    \u0275\u0275text(160);
    \u0275\u0275pipe(161, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "mat-form-field", 14)(163, "mat-label");
    \u0275\u0275text(164);
    \u0275\u0275pipe(165, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(166, "icon", 100);
    \u0275\u0275text(167, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275element(168, "input", 101);
    \u0275\u0275pipe(169, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(170, "mat-autocomplete", null, 0);
    \u0275\u0275repeaterCreate(172, RoomModalComponent_Conditional_9_For_173_Template, 2, 2, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(174, RoomModalComponent_Conditional_9_Conditional_174_Template, 3, 4, "mat-option", 102);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(175, RoomModalComponent_Conditional_9_Conditional_175_Template, 5, 3, "div", 6);
    \u0275\u0275conditionalCreate(176, RoomModalComponent_Conditional_9_Conditional_176_Template, 13, 14, "div", 6);
    \u0275\u0275conditionalCreate(177, RoomModalComponent_Conditional_9_Conditional_177_Template, 13, 14, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const auto_r30 = \u0275\u0275reference(171);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.settings_form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 33, "APP.CONCIERGE.ROOMS_DEFAULT_SETUP"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 35, "APP.CONCIERGE.ROOMS_SETUP_INFO"));
    \u0275\u0275advance(3);
    \u0275\u0275property("min", 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 37, "APP.CONCIERGE.ROOMS_DEFAULT_BREAKDOWN"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(14, 39, "APP.CONCIERGE.ROOMS_BREAKDOWN_INFO"));
    \u0275\u0275advance(3);
    \u0275\u0275property("min", 0);
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r1.venue_form);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.av_service_options);
    \u0275\u0275advance(12);
    \u0275\u0275property("value", ctx_r1.av_search());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.filtered_av_categories());
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx_r1.venue_form);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r1.catering_tier_options);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.venue_form);
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.venue_form);
    \u0275\u0275advance(20);
    \u0275\u0275property("value", ctx_r1.menu_search());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.filtered_menu_categories());
    \u0275\u0275advance(13);
    \u0275\u0275property("value", ctx_r1.setup_search());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.filtered_setup_categories());
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.venue_form);
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r1.venue_form);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.event_service_options);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r1.managed_service_groups());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.managed_service_groups().length === 0 ? 127 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r1.venue_form);
    \u0275\u0275advance(11);
    \u0275\u0275property("formGroup", ctx_r1.venue_form);
    \u0275\u0275advance(9);
    \u0275\u0275property("min", 0)("max", 999);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.description ? 155 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.features ? 156 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.map_id ? 157 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(161, 41, "COMMON.TIMEZONE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(165, 43, "COMMON.TIMEZONE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(169, 45, "COMMON.TIMEZONE"))("matAutocomplete", auto_r30);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.filtered_timezones());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.timezones().length ? 174 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.images ? 175 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.timetable_url ? 176 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.room_booking_url ? 177 : -1);
  }
}
var VENUE_TYPE_OPTIONS = [
  { value: "Event Space", label: "Event Space" },
  { value: "Meeting Room", label: "Meeting Room" },
  { value: "Conference Room", label: "Conference Room" },
  { value: "Auditorium", label: "Auditorium" },
  { value: "Ballroom", label: "Ballroom" },
  { value: "Boardroom", label: "Boardroom" },
  { value: "Outdoor Space", label: "Outdoor Space" },
  { value: "Dining Venue", label: "Dining Venue" },
  { value: "Gallery", label: "Gallery" },
  { value: "Theater", label: "Theater" },
  { value: "Classroom", label: "Classroom" }
];
var AV_SERVICE_OPTIONS = [
  { value: "av_equipment_support", label: "Audio-Visual Equipment & Support" },
  { value: "sound_system", label: "Sound System & Microphones" },
  { value: "projection_screens", label: "Projection & Screens" },
  { value: "video_conferencing", label: "Video Conferencing" },
  { value: "live_streaming", label: "Live-Streaming & Recording" },
  { value: "smart_room_tech", label: "Smart Room Technology" },
  { value: "digital_signage", label: "Digital Signage" },
  { value: "portable_av", label: "Portable AV Equipment" },
  { value: "virtual_hybrid", label: "Virtual & Hybrid Support" },
  { value: "instructional_tech", label: "Instructional Technology" }
];
var EVENT_SERVICE_OPTIONS = [
  { value: "event_planning", label: "Event Planning & Management" },
  { value: "event_facilitators", label: "Event Facilitators / Conference Managers" },
  { value: "event_staffing", label: "Event Staffing" },
  { value: "room_setup_strike", label: "Room Setup & Strike" },
  { value: "custodial_cleaning", label: "Custodial & Cleaning" },
  { value: "security_coordination", label: "Security Coordination" },
  { value: "ticketing_services", label: "Ticketing Services" },
  { value: "photography_permitting", label: "Photography & Film Permitting" },
  { value: "simultaneous_translation", label: "Simultaneous Translation" },
  { value: "signage_displays", label: "Signage & Displays" }
];
var SUPPORTED_LAYOUT_OPTIONS = [
  { value: "theatre", label: "Theatre" },
  { value: "classroom", label: "Classroom" },
  { value: "boardroom", label: "Boardroom" },
  { value: "u_shape", label: "U-Shape" },
  { value: "cabaret", label: "Cabaret" },
  { value: "banquet", label: "Banquet" },
  { value: "standing", label: "Standing" },
  { value: "custom", label: "Custom" }
];
var _RoomModalComponent = class _RoomModalComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._catering = inject(CateringStateService);
    this._services_state = inject(ServicesStateService);
    this.loading = false;
    this.current_page = signal(1);
    this.timezones = signal(TIMEZONES_IANA);
    this.filtered_timezones = signal([]);
    this.levels = this._org.active_levels;
    this.form = generateSystemsFormFields(this._data.room);
    this.settings_form = new FormGroup({
      setup: new FormControl(0),
      breakdown: new FormControl(0)
    });
    this.venue_form = new FormGroup({
      // Venue Type
      venue_type: new FormControl(""),
      // Layout & Configuration
      sqft: new FormControl(0),
      supported_layouts: new FormControl([]),
      furniture_movable: new FormControl(false),
      // Pricing
      hourly_rate: new FormControl(0),
      half_day_rate: new FormControl(0),
      full_day_rate: new FormControl(0),
      refund_lead_days: new FormControl(null),
      // AV & Technology
      av_services: new FormControl([]),
      onsite_tech_staff: new FormControl(false),
      after_hours_av: new FormControl(false),
      av_enabled_items: new FormControl([]),
      // Setup & Furniture Rental
      setup_enabled_items: new FormControl([]),
      // Service Charges
      after_hours_service_charge: new FormControl(false),
      // Catering & Dining — UCLA Menu (food only)
      catering_tier: new FormControl("full_service"),
      menu_enabled_items: new FormControl([]),
      menu_price_overrides: new FormControl({}),
      kitchen_access: new FormControl(false),
      piano_available: new FormControl(false),
      catering_provider: new FormControl(""),
      catering_notes: new FormControl(""),
      // Event Services
      event_services: new FormControl([]),
      managed_services: new FormControl([]),
      // Parking & WiFi
      wifi_available: new FormControl(false),
      high_speed_wifi: new FormControl(false),
      onsite_parking: new FormControl(false),
      visitor_transportation: new FormControl(false),
      // Accessibility
      ada_accessible: new FormControl(false),
      hearing_loop: new FormControl(false),
      accessible_restroom: new FormControl(false),
      adjustable_lighting: new FormControl(false),
      wheelchair_capacity: new FormControl(0)
    });
    this.venue_type_options = VENUE_TYPE_OPTIONS;
    this.av_service_options = AV_SERVICE_OPTIONS;
    this.event_service_options = EVENT_SERVICE_OPTIONS;
    this.supported_layout_options = SUPPORTED_LAYOUT_OPTIONS;
    this._svc_category_labels = {
      package: "Event Packages",
      alacarte: "A La Carte",
      addon: "AV Add-ons",
      space: "Space / Venue"
    };
    this.managed_service_groups = computed(() => {
      const services = this._services_state.services();
      const categories = ["package", "alacarte", "addon", "space"];
      return categories.map((cat) => ({
        label: this._svc_category_labels[cat] || cat,
        items: services.filter((s) => s.category === cat)
      })).filter((g) => g.items.length > 0);
    });
    this.catering_tier_options = CATERING_TIER_OPTIONS;
    this.menu_search = signal("");
    this.av_search = signal("");
    this.setup_search = signal("");
    this.active_tier = signal("full_service");
    this.catering_menu_items = signal([]);
    this.catering_menu_categories = computed(() => {
      const items = this.catering_menu_items();
      const category_map = /* @__PURE__ */ new Map();
      for (const item of items) {
        if (!category_map.has(item.category)) {
          category_map.set(item.category, {
            id: item.category,
            label: item.category.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
            description: "",
            items: []
          });
        }
        category_map.get(item.category).items.push(item);
      }
      return Array.from(category_map.values());
    });
    this.filtered_menu_categories = computed(() => {
      const tier = this.active_tier();
      const allowed = TIER_CATEGORIES[tier] || [];
      const search = this.menu_search().toLowerCase().trim();
      let categories = this.catering_menu_categories().filter((cat) => allowed.includes(cat.id));
      if (search) {
        categories = categories.map((cat) => __spreadProps(__spreadValues({}, cat), {
          items: cat.items.filter((item) => item.name.toLowerCase().includes(search) || item.category.toLowerCase().includes(search) || (item.tags || []).some((t) => t.toLowerCase().includes(search)))
        })).filter((cat) => cat.items.length > 0);
      }
      return categories;
    });
    this.filtered_av_categories = computed(() => {
      const search = this.av_search().toLowerCase().trim();
      let categories = this.catering_menu_categories().filter((cat) => AV_CATEGORIES.includes(cat.id));
      if (search) {
        categories = categories.map((cat) => __spreadProps(__spreadValues({}, cat), {
          items: cat.items.filter((item) => item.name.toLowerCase().includes(search) || (item.tags || []).some((t) => t.toLowerCase().includes(search)))
        })).filter((cat) => cat.items.length > 0);
      }
      return categories;
    });
    this.filtered_setup_categories = computed(() => {
      const search = this.setup_search().toLowerCase().trim();
      let categories = this.catering_menu_categories().filter((cat) => SETUP_CATEGORIES.includes(cat.id));
      if (search) {
        categories = categories.map((cat) => __spreadProps(__spreadValues({}, cat), {
          items: cat.items.filter((item) => item.name.toLowerCase().includes(search) || (item.tags || []).some((t) => t.toLowerCase().includes(search)))
        })).filter((cat) => cat.items.length > 0);
      }
      return categories;
    });
    this.encryption_levels = [
      { id: He.None, name: "None" },
      { id: He.Support, name: "Support" },
      { id: He.Admin, name: "Admin" },
      { id: He.NeverDisplay, name: "Never Display" }
    ];
    this.query_fn = (_) => ja({ q: _ }).pipe(map((resp) => resp.data));
    this.separators = [ENTER, COMMA, SPACE];
  }
  isManagedServiceSelected(id) {
    return (this.venue_form.value.managed_services || []).includes(id);
  }
  toggleManagedService(id) {
    const current = this.venue_form.value.managed_services || [];
    const updated = current.includes(id) ? current.filter((s) => s !== id) : [...current, id];
    this.venue_form.patchValue({ managed_services: updated });
  }
  isAvItemEnabled(item_id) {
    const enabled = this.venue_form.controls.av_enabled_items.value || [];
    return enabled.includes(item_id);
  }
  toggleAvItem(item_id) {
    const enabled = [...this.venue_form.controls.av_enabled_items.value || []];
    const idx = enabled.indexOf(item_id);
    if (idx >= 0) {
      enabled.splice(idx, 1);
    } else {
      enabled.push(item_id);
    }
    this.venue_form.controls.av_enabled_items.setValue(enabled);
  }
  getAvEnabledCount(category_id) {
    const cat = this.catering_menu_categories().find((c) => c.id === category_id);
    if (!cat)
      return 0;
    const enabled = this.venue_form.controls.av_enabled_items.value || [];
    return cat.items.filter((i) => enabled.includes(i.id)).length;
  }
  toggleAvCategory(category_id) {
    const cat = this.catering_menu_categories().find((c) => c.id === category_id);
    if (!cat)
      return;
    const enabled = [...this.venue_form.controls.av_enabled_items.value || []];
    const all_in_cat = cat.items.map((i) => i.id);
    const all_enabled = all_in_cat.every((id) => enabled.includes(id));
    if (all_enabled) {
      this.venue_form.controls.av_enabled_items.setValue(enabled.filter((id) => !all_in_cat.includes(id)));
    } else {
      this.venue_form.controls.av_enabled_items.setValue([.../* @__PURE__ */ new Set([...enabled, ...all_in_cat])]);
    }
  }
  isAvCategoryFullyEnabled(category_id) {
    const cat = this.catering_menu_categories().find((c) => c.id === category_id);
    if (!cat)
      return false;
    const enabled = this.venue_form.controls.av_enabled_items.value || [];
    return cat.items.every((i) => enabled.includes(i.id));
  }
  isSetupItemEnabled(item_id) {
    const enabled = this.venue_form.controls.setup_enabled_items.value || [];
    return enabled.includes(item_id);
  }
  toggleSetupItem(item_id) {
    const enabled = [...this.venue_form.controls.setup_enabled_items.value || []];
    const idx = enabled.indexOf(item_id);
    if (idx >= 0) {
      enabled.splice(idx, 1);
    } else {
      enabled.push(item_id);
    }
    this.venue_form.controls.setup_enabled_items.setValue(enabled);
  }
  getSetupEnabledCount() {
    const cat = this.catering_menu_categories().find((c) => c.id === "setup");
    if (!cat)
      return 0;
    const enabled = this.venue_form.controls.setup_enabled_items.value || [];
    return cat.items.filter((i) => enabled.includes(i.id)).length;
  }
  toggleAllSetup() {
    const cat = this.catering_menu_categories().find((c) => c.id === "setup");
    if (!cat)
      return;
    const enabled = [...this.venue_form.controls.setup_enabled_items.value || []];
    const all_in_cat = cat.items.map((i) => i.id);
    const all_enabled = all_in_cat.every((id) => enabled.includes(id));
    if (all_enabled) {
      this.venue_form.controls.setup_enabled_items.setValue(enabled.filter((id) => !all_in_cat.includes(id)));
    } else {
      this.venue_form.controls.setup_enabled_items.setValue([.../* @__PURE__ */ new Set([...enabled, ...all_in_cat])]);
    }
  }
  isAllSetupEnabled() {
    const cat = this.catering_menu_categories().find((c) => c.id === "setup");
    if (!cat)
      return false;
    const enabled = this.venue_form.controls.setup_enabled_items.value || [];
    return cat.items.every((i) => enabled.includes(i.id));
  }
  isMenuItemEnabled(item_id) {
    const enabled = this.venue_form.controls.menu_enabled_items.value || [];
    return enabled.includes(item_id);
  }
  toggleMenuItem(item_id) {
    const enabled = [...this.venue_form.controls.menu_enabled_items.value || []];
    const idx = enabled.indexOf(item_id);
    if (idx >= 0) {
      enabled.splice(idx, 1);
    } else {
      enabled.push(item_id);
    }
    this.venue_form.controls.menu_enabled_items.setValue(enabled);
  }
  toggleCategory(category_id) {
    const cat = this.catering_menu_categories().find((c) => c.id === category_id);
    if (!cat)
      return;
    const enabled = [...this.venue_form.controls.menu_enabled_items.value || []];
    const all_in_cat = cat.items.map((i) => i.id);
    const all_enabled = all_in_cat.every((id) => enabled.includes(id));
    if (all_enabled) {
      this.venue_form.controls.menu_enabled_items.setValue(enabled.filter((id) => !all_in_cat.includes(id)));
    } else {
      const new_enabled = [.../* @__PURE__ */ new Set([...enabled, ...all_in_cat])];
      this.venue_form.controls.menu_enabled_items.setValue(new_enabled);
    }
  }
  isCategoryFullyEnabled(category_id) {
    const cat = this.catering_menu_categories().find((c) => c.id === category_id);
    if (!cat)
      return false;
    const enabled = this.venue_form.controls.menu_enabled_items.value || [];
    return cat.items.every((i) => enabled.includes(i.id));
  }
  getEnabledCount(category_id) {
    const cat = this.catering_menu_categories().find((c) => c.id === category_id);
    if (!cat)
      return 0;
    const enabled = this.venue_form.controls.menu_enabled_items.value || [];
    return cat.items.filter((i) => enabled.includes(i.id)).length;
  }
  getMenuItemPrice(item_id) {
    const overrides = this.venue_form.controls.menu_price_overrides.value || {};
    if (overrides[item_id] !== void 0)
      return overrides[item_id];
    const item = this.catering_menu_items().find((i) => i.id === item_id);
    return item ? item.unit_price / 100 : 0;
  }
  setMenuItemPrice(item_id, value) {
    const price = parseFloat(value) || 0;
    const overrides = __spreadValues({}, this.venue_form.controls.menu_price_overrides.value || {});
    overrides[item_id] = price;
    this.venue_form.controls.menu_price_overrides.setValue(overrides);
  }
  getUnitLabel(unit) {
    return UNIT_LABELS[unit] || unit;
  }
  get feature_list() {
    return this.form.controls.features.value;
  }
  async ngOnInit() {
    this.subscription("catering-menu", this._catering.menu.subscribe((items) => {
      this.catering_menu_items.set(items);
    }));
    const { details } = await nc(this._org.organisation.id, "settings").toPromise();
    const overflow = getItemWithKeys(["events", "overflow"], details) || {};
    if (this._data.room.id && overflow[this._data.room.id]) {
      this.settings_form.patchValue(overflow[this._data.room.id]);
    }
    const venue_settings = getItemWithKeys(["venue_settings"], details) || {};
    if (this._data.room.id && venue_settings[this._data.room.id]) {
      this.venue_form.patchValue(venue_settings[this._data.room.id]);
    }
    const saved_tier = this.venue_form.controls.catering_tier.value;
    if (!saved_tier || saved_tier === "full_service") {
      const building_id = this._org.building?.id || "";
      const room_zones = this._data.room?.zones || [];
      const detected_bld = room_zones.find((z) => z.startsWith("bld-")) || building_id;
      const tier = BUILDING_CATERING_TIER[detected_bld] || "coordination";
      this.venue_form.controls.catering_tier.setValue(tier);
      this.active_tier.set(tier);
    } else {
      this.active_tier.set(saved_tier);
    }
    this._updateTimezoneList();
    this.subscription("tz-change", this.form.valueChanges.subscribe(() => this._updateTimezoneList()));
  }
  /**
   * Add a feature to the list of features for the item
   * @param event Input event
   */
  addFeature(event) {
    if (!this.form || !this.form.controls.features)
      return;
    const input = event.input;
    const value = event.value;
    const feature_list = this.feature_list;
    if ((value || "").trim()) {
      feature_list.push(value);
      this.form.controls.features.setValue(feature_list);
    }
    if (input) {
      input.value = "";
    }
  }
  /**
   * Remove feature from the list
   * @param existing_feature Feature to remove
   */
  removeFeature(existing_feature) {
    if (!this.form || !this.form.controls.features)
      return;
    const feature_list = this.feature_list;
    const index = feature_list.indexOf(existing_feature);
    if (index >= 0) {
      feature_list.splice(index, 1);
      this.form.controls.features.setValue(feature_list);
    }
  }
  async save() {
    if (!this.form.valid)
      return notifyError(i18n("FORM.INVALID_FIELDS", {
        field_list: getInvalidFields(this.form).join(", ")
      }));
    if (!this.form.value.id) {
      this.form.patchValue({
        display_name: this.form.value.display_name || this.form.value.name,
        zones: unique([
          this._org.organisation.id,
          this._org.building.parent_id,
          this._org.building.id,
          `${this.form.value.zone?.id || this.form.value.zone || ""}`
        ]).filter((_) => _)
      });
    }
    this.loading = true;
    this._dialog_ref.disableClose = true;
    const data = this.form.getRawValue();
    const { details } = await nc(this._org.organisation.id, "settings").toPromise();
    const overflow = getItemWithKeys(["events", "overflow"], details) || {};
    overflow[data.id] = this.settings_form.value;
    const venue_settings = getItemWithKeys(["venue_settings"], details) || {};
    venue_settings[data.id] = this.venue_form.value;
    await lastValueFrom(rc(this._org.organisation.id, {
      name: "settings",
      details: __spreadProps(__spreadValues({}, details), {
        events: __spreadProps(__spreadValues({}, details.events || {}), { overflow }),
        venue_settings
      }),
      description: ""
    })).catch((e) => notifyWarn("Unable to save room setup and breakdown times"));
    await lastValueFrom(data.id ? ta(data.id, data) : na(data));
    this._dialog_ref.disableClose = false;
    this._dialog_ref.close(true);
    this.loading = false;
  }
  _updateTimezoneList() {
    const timezone = this.form?.value?.timezone || "";
    this.timezones.set(TIMEZONES_IANA);
    this.filtered_timezones.set(this.timezones().filter((_) => _.toLowerCase().includes(timezone.toLowerCase())));
  }
  selectItemfromMap() {
    let level = this._org.levelWithID(this.form.value.zones);
    const ref = this._dialog.open(SelectMapItemModalComponent, {
      data: {
        location: this.form.value.map_id,
        level_id: this.form
      }
    });
    ref.afterClosed().subscribe((d) => {
      if (!d)
        return;
      level = ref.componentInstance.level || level;
      const zones = unique([
        this._org.organisation.id,
        this._org.building.parent_id,
        this._org.building.id,
        level?.id
      ]);
      this.form.patchValue({ map_id: d, zones });
    });
  }
};
_RoomModalComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275RoomModalComponent_BaseFactory;
  return function RoomModalComponent_Factory(__ngFactoryType__) {
    return (\u0275RoomModalComponent_BaseFactory || (\u0275RoomModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RoomModalComponent)))(__ngFactoryType__ || _RoomModalComponent);
  };
})();
_RoomModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomModalComponent, selectors: [["room-form-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 10, vars: 24, consts: [["auto", "matAutocomplete"], ["chipList", ""], [3, "confirm", "heading", "loading"], [1, "flex", "border-b", "border-base-300", "mb-4"], ["type", "button", 1, "px-4", "py-2", "text-sm", "font-medium", "transition-colors", 3, "click"], ["system", "", 3, "formGroup"], [1, "flex", "flex-col"], [1, "flex", "space-x-2"], [1, "flex", "flex-1", "flex-col"], [1, "mb-4", "flex", "space-x-2"], [1, "flex", "flex-1", "flex-col", "pt-4"], [3, "formGroup"], [1, "mb-4", "flex", "flex-col"], [1, "mb-3", 3, "formGroup"], ["appearance", "outline"], ["formControlName", "venue_type", "placeholder", "Select venue type"], [3, "value"], [1, "border", "border-base-300", "rounded-lg", "mb-3", "w-full", "overflow-hidden"], [1, "cursor-pointer", "px-4", "py-3", "font-medium", "text-sm", "hover:bg-base-200", "select-none"], [1, "text-xs", "opacity-60", "ml-2"], [1, "px-4", "pb-4", "pt-2", 3, "formGroup"], [1, "grid", "grid-cols-2", "gap-4", "mb-4"], [1, "flex", "flex-col", "min-w-0"], ["matInput", "", "type", "number", "formControlName", "sqft", "placeholder", "0", 3, "min"], [1, "flex", "items-center", "justify-center", "pt-4"], ["name", "Furniture Movable", "formControlName", "furniture_movable"], ["formControlName", "supported_layouts", "multiple", "", "placeholder", "Select layouts"], [1, "grid", "grid-cols-3", "gap-2"], ["matInput", "", "type", "number", "formControlName", "hourly_rate", "placeholder", "0", 3, "min"], ["matInput", "", "type", "number", "formControlName", "half_day_rate", "placeholder", "0", 3, "min"], ["matInput", "", "type", "number", "formControlName", "full_day_rate", "placeholder", "0", 3, "min"], [1, "flex", "flex-col", "min-w-0", "mt-2"], ["matInput", "", "type", "number", "formControlName", "refund_lead_days", "placeholder", "e.g. 14", 3, "min"], ["for", "zone"], ["formControlName", "zone", "required", "", 3, "placeholder"], ["for", "system-name"], ["matInput", "", "name", "system-name", "formControlName", "name", "required", "", "aria-required", "true", 3, "placeholder"], ["for", "system-email"], ["matInput", "", "name", "system-email", "formControlName", "email", 3, "placeholder"], ["for", "display-name"], ["matInput", "", "name", "display-name", "formControlName", "display_name", 3, "placeholder"], ["for", "code-name"], ["matInput", "", "name", "code-name", "formControlName", "code", 3, "placeholder"], ["formControlName", "approval", 3, "name"], ["formControlName", "bookable", 3, "name"], ["for", "capacity"], ["name", "capacity", "formControlName", "capacity", 1, "w-full", 3, "min", "max"], [1, "flex", "space-x-2", 3, "formGroup"], [1, "flex", "flex-1", "flex-col", "space-y-2"], ["for", "setup", 1, "flex", "items-center"], [1, "ml-2", "text-base", 3, "matTooltip"], ["name", "setup", "formControlName", "setup", 3, "min"], ["for", "breakdown", 1, "flex", "items-center"], ["name", "breakdown", "formControlName", "breakdown", 3, "min"], [1, "flex", "flex-col", "min-w-0", "mb-4"], ["formControlName", "av_services", "multiple", "", "placeholder", "Select available services"], ["name", "On-Site Technical Staff", "formControlName", "onsite_tech_staff"], ["name", "After Hours AV Available", "formControlName", "after_hours_av"], [1, "text-xs", "font-medium", "opacity-70", "mb-1"], ["appearance", "outline", 1, "w-full"], ["matPrefix", "", 1, "text-xl"], ["matInput", "", "placeholder", "Search AV items...", 3, "input", "value"], [1, "max-h-[300px]", "overflow-y-auto", "border", "border-base-200", "rounded-lg"], [1, "border-b", "border-base-200", "last:border-b-0"], [1, "px-4", "pb-4", "pt-2", "flex", "flex-col", "space-y-3"], [1, "flex", "flex-col", 3, "formGroup"], [1, "text-xs", "opacity-70", "mb-1"], ["formControlName", "catering_tier", 3, "selectionChange"], [1, "grid", "grid-cols-2", "gap-4", "mb-2", 3, "formGroup"], ["name", "Kitchen Access", "formControlName", "kitchen_access"], ["name", "Piano Available", "formControlName", "piano_available"], [1, "grid", "grid-cols-2", "gap-2", "mb-2", 3, "formGroup"], [1, "text-xs", "opacity-70"], ["matInput", "", "formControlName", "catering_provider", "placeholder", "e.g. UCLA Conferences & Catering"], ["matInput", "", "formControlName", "catering_notes", "placeholder", "Additional notes"], ["matInput", "", "placeholder", "Search menu items...", 3, "input", "value"], [1, "max-h-[400px]", "overflow-y-auto", "border", "border-base-200", "rounded-lg"], [1, "px-4", "pb-4", "pt-2"], ["matInput", "", "placeholder", "Search setup items...", 3, "input", "value"], [1, "px-3", "pb-2", "pt-1"], [1, "mt-3", "pt-2", "border-t", "border-base-200", 3, "formGroup"], ["name", "After-Hours Service Charge (+$50)", "formControlName", "after_hours_service_charge"], ["formControlName", "event_services", "multiple", "", "placeholder", "Select available services"], [1, "mb-1"], [1, "text-xs", "opacity-60", "mb-2"], [1, "mb-3"], [1, "text-xs", "text-base-content/50", "rounded", "border", "border-base-200", "px-3", "py-4", "text-center"], [1, "grid", "grid-cols-2", "gap-4"], ["name", "Complimentary WiFi", "formControlName", "wifi_available"], ["name", "High-Speed WiFi", "formControlName", "high_speed_wifi"], ["name", "On-Site Parking", "formControlName", "onsite_parking"], ["name", "Visitor Transportation", "formControlName", "visitor_transportation"], [1, "px-4", "pb-4", "pt-2", "flex", "flex-col", "space-y-4", 3, "formGroup"], ["name", "ADA Accessible", "formControlName", "ada_accessible"], ["name", "Hearing Loop", "formControlName", "hearing_loop"], ["name", "Accessible Restroom Nearby", "formControlName", "accessible_restroom"], ["name", "Adjustable Lighting", "formControlName", "adjustable_lighting"], [1, "flex", "flex-col", "w-1/2"], ["formControlName", "wheelchair_capacity", 1, "w-full", 3, "min", "max"], ["for", "timezone"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", "formControlName", "timezone", 3, "placeholder", "matAutocomplete"], [3, "disabled"], [1, "cursor-pointer", "px-3", "py-2", "font-medium", "text-xs", "hover:bg-base-100", "select-none", "flex", "items-center", "justify-between", "sticky", "top-0", "bg-white", "z-10"], [1, "text-xs", "opacity-60"], [1, "px-3", "pb-2"], [1, "flex", "items-center", "justify-between", "py-1", "mb-1", "border-b", "border-base-100"], [1, "text-xs", "font-medium", "opacity-60"], ["type", "button", 1, "text-xs", "text-primary", "hover:underline", 3, "click"], [1, "flex", "items-center", "justify-between", "py-1", "gap-2", "hover:bg-base-50", "rounded", "px-1", 3, "opacity-60"], [1, "flex", "items-center", "justify-between", "py-1", "gap-2", "hover:bg-base-50", "rounded", "px-1"], [1, "flex", "items-center", "gap-2", "flex-1", "min-w-0", "cursor-pointer", "text-xs"], ["type", "checkbox", 1, "accent-primary", "w-3.5", "h-3.5", 3, "change", "checked"], [1, "truncate"], [1, "flex", "items-center", "gap-1", "shrink-0"], ["type", "number", "step", "1", 1, "w-16", "text-xs", "text-right", "border", "border-base-200", "rounded", "px-1", "py-0.5", 3, "change", "value", "min"], [1, "text-xs", "opacity-60", "w-12"], [1, "text-xs", "opacity-60", "ml-1"], ["type", "number", "step", "0.50", 1, "w-16", "text-xs", "text-right", "border", "border-base-200", "rounded", "px-1", "py-0.5", 3, "change", "value", "min"], [1, "text-xs", "font-semibold", "opacity-60", "mb-1"], [1, "rounded", "border", "border-base-200", "divide-y", "divide-base-200"], [1, "flex", "cursor-pointer", "items-center", "gap-3", "px-3", "py-2", "hover:bg-base-200/50"], ["type", "checkbox", 1, "checkbox", "checkbox-sm", 3, "change", "checked"], [1, "text-base-content/40", "text-lg"], [1, "flex-1", "min-w-0"], [1, "text-sm", "font-medium"], ["for", "description"], ["matInput", "", "name", "description", "formControlName", "description", 3, "placeholder"], [3, "removable"], [3, "matChipInputTokenEnd", "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed", "removable"], ["matChipRemove", ""], ["for", "map_id"], ["matInput", "", "name", "map_id", "formControlName", "map_id", 3, "placeholder"], ["icon", "", "matRipple", "", "aria-label", "Select from map", 1, "border-secondary", "text-secondary", "h-12", "w-12", "rounded-sm", "border", 3, "click", "matTooltip"], ["for", "images"], ["name", "images", "formControlName", "images"], ["for", "timetable-url"], ["matInput", "", "name", "timetable-url", "formControlName", "timetable_url", 3, "placeholder"], ["for", "room-booking-url"], ["matInput", "", "name", "room-booking-url", "formControlName", "room_booking_url", 3, "placeholder"]], template: function RoomModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fullscreen-modal-shell", 2);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("confirm", function RoomModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
      return ctx.save();
    });
    \u0275\u0275elementStart(3, "div", 3)(4, "button", 4);
    \u0275\u0275listener("click", function RoomModalComponent_Template_button_click_4_listener() {
      return ctx.current_page.set(1);
    });
    \u0275\u0275text(5, " Essential Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 4);
    \u0275\u0275listener("click", function RoomModalComponent_Template_button_click_6_listener() {
      return ctx.current_page.set(2);
    });
    \u0275\u0275text(7, " Additional Settings ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, RoomModalComponent_Conditional_8_Template, 85, 18);
    \u0275\u0275conditionalCreate(9, RoomModalComponent_Conditional_9_Template, 178, 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 20, ctx.form.value.id ? "APP.CONCIERGE.ROOMS_EDIT" : "APP.CONCIERGE.ROOMS_NEW"))("loading", ctx.loading ? \u0275\u0275pipeBind1(2, 22, "APP.CONCIERGE.ROOMS_SAVING") : "");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-b-2", ctx.current_page() === 1)("border-primary", ctx.current_page() === 1)("text-primary", ctx.current_page() === 1)("opacity-60", ctx.current_page() !== 1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-b-2", ctx.current_page() === 2)("border-primary", ctx.current_page() === 2)("text-primary", ctx.current_page() === 2)("opacity-60", ctx.current_page() !== 2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.current_page() === 1 ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.current_page() === 2 ? 9 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  TranslatePipe,
  IconComponent,
  FullscreenModalShellComponent,
  ImageListFieldComponent,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NumberValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  RequiredValidator,
  MinValidator,
  FormGroupDirective,
  FormControlName,
  MatAutocompleteModule,
  MatAutocomplete,
  MatOption,
  MatAutocompleteTrigger,
  MatFormFieldModule,
  MatFormField,
  MatLabel,
  MatHint,
  MatError,
  MatPrefix,
  MatInputModule,
  MatInput,
  MatChipsModule,
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  CounterComponent,
  SettingsToggleComponent,
  MatSelectModule,
  MatSelect,
  DurationFieldComponent,
  MatTooltipModule,
  MatTooltip
], styles: ["\n\nmat-checkbox[_ngcontent-%COMP%] {\n  margin-top: 2.5em;\n  margin-bottom: 1.5em;\n}\n@media screen and (max-width: 640px) {\n  mat-checkbox[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n/*# sourceMappingURL=room-modal.component.css.map */"] });
var RoomModalComponent = _RoomModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomModalComponent, [{
    type: Component,
    args: [{ selector: "room-form-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (form.value.id
                    ? 'APP.CONCIERGE.ROOMS_EDIT'
                    : 'APP.CONCIERGE.ROOMS_NEW'
                ) | translate
            "
            [loading]="
                loading ? ('APP.CONCIERGE.ROOMS_SAVING' | translate) : ''
            "
            (confirm)="save()"
        >
            <!-- Page navigation tabs -->
            <div class="flex border-b border-base-300 mb-4">
                <button
                    type="button"
                    class="px-4 py-2 text-sm font-medium transition-colors"
                    [class.border-b-2]="current_page() === 1"
                    [class.border-primary]="current_page() === 1"
                    [class.text-primary]="current_page() === 1"
                    [class.opacity-60]="current_page() !== 1"
                    (click)="current_page.set(1)"
                >
                    Essential Details
                </button>
                <button
                    type="button"
                    class="px-4 py-2 text-sm font-medium transition-colors"
                    [class.border-b-2]="current_page() === 2"
                    [class.border-primary]="current_page() === 2"
                    [class.text-primary]="current_page() === 2"
                    [class.opacity-60]="current_page() !== 2"
                    (click)="current_page.set(2)"
                >
                    Additional Settings
                </button>
            </div>

            @if (current_page() === 1) {
                <form system [formGroup]="form">
                    <!-- Level -->
                    @if (form.controls.zone) {
                        <div class="flex flex-col">
                            <label
                                for="zone"
                                [class.error]="
                                    form.controls.zone.invalid &&
                                    form.controls.zone.touched
                                "
                            >
                                {{ 'RESOURCE.LEVEL' | translate }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-label>{{ 'RESOURCE.LEVEL' | translate }}</mat-label>
                                <mat-select
                                    formControlName="zone"
                                    [placeholder]="
                                        'APP.CONCIERGE.ROOMS_SELECT_LEVEL'
                                            | translate
                                    "
                                    required
                                >
                                    @for (level of levels | async; track level) {
                                        <mat-option [value]="level.id">
                                            {{ level.display_name || level.name }}
                                        </mat-option>
                                    }
                                </mat-select>
                                <mat-error>{{
                                    'APP.CONCIERGE.ROOMS_LEVEL_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    <!-- Name / Email -->
                    <div class="flex space-x-2">
                        @if (form.controls.name) {
                            <div class="flex flex-1 flex-col">
                                <label
                                    for="system-name"
                                    [class.error]="
                                        form.controls.name.invalid &&
                                        form.controls.name.touched
                                    "
                                >
                                    {{ 'FORM.NAME' | translate }}<span>*</span>
                                </label>
                                <mat-form-field appearance="outline">
                                    <mat-label>{{ 'FORM.NAME' | translate }}</mat-label>
                                    <input
                                        matInput
                                        name="system-name"
                                        [placeholder]="'FORM.NAME' | translate"
                                        formControlName="name"
                                        required
                                        aria-required="true"
                                    />
                                    @if (form.controls.name.invalid) {
                                        <mat-error>
                                            {{ 'FORM.NAME_REQUIRED' | translate }}
                                        </mat-error>
                                    }
                                </mat-form-field>
                            </div>
                        }
                        @if (form.controls.email) {
                            <div class="flex flex-1 flex-col">
                                <label
                                    for="system-email"
                                    [class.error]="
                                        form.controls.email.invalid &&
                                        form.controls.email.touched
                                    "
                                >
                                    {{ 'FORM.EMAIL' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <mat-label>{{ 'FORM.EMAIL' | translate }}</mat-label>
                                    <input
                                        matInput
                                        name="system-email"
                                        [placeholder]="'FORM.EMAIL' | translate"
                                        formControlName="email"
                                    />
                                    @if (form.controls.email.invalid) {
                                        <mat-error>
                                            {{ 'FORM.EMAIL_REQUIRED' | translate }}
                                        </mat-error>
                                    }
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    <!-- Display Name / Code -->
                    <div class="flex space-x-2">
                        @if (form.controls.display_name) {
                            <div class="flex flex-1 flex-col">
                                <label for="display-name">{{
                                    'FORM.DISPLAY_NAME' | translate
                                }}</label>
                                <mat-form-field appearance="outline">
                                    <mat-label>{{ 'FORM.DISPLAY_NAME' | translate }}</mat-label>
                                    <input
                                        matInput
                                        name="display-name"
                                        [placeholder]="
                                            'FORM.DISPLAY_NAME' | translate
                                        "
                                        formControlName="display_name"
                                    />
                                </mat-form-field>
                            </div>
                        }
                        @if (form.controls.display_name) {
                            <div class="flex flex-1 flex-col">
                                <label for="code-name">{{
                                    'APP.CONCIERGE.ROOMS_CODE' | translate
                                }}</label>
                                <mat-form-field appearance="outline">
                                    <mat-label>{{ 'APP.CONCIERGE.ROOMS_CODE' | translate }}</mat-label>
                                    <input
                                        matInput
                                        name="code-name"
                                        [placeholder]="
                                            'APP.CONCIERGE.ROOMS_CODE' | translate
                                        "
                                        formControlName="code"
                                    />
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    <!-- Bookable / Approval toggles -->
                    <div class="mb-4 flex space-x-2">
                        @if (form.controls.approval) {
                            <div class="flex flex-1 flex-col pt-4">
                                <settings-toggle
                                    [name]="'COMMON.REQUIRE_APPROVAL' | translate"
                                    formControlName="approval"
                                >
                                </settings-toggle>
                            </div>
                        }
                        @if (form.controls.bookable) {
                            <div class="flex flex-1 flex-col pt-4">
                                <settings-toggle
                                    [name]="'COMMON.BOOKABLE' | translate"
                                    formControlName="bookable"
                                >
                                </settings-toggle>
                            </div>
                        }
                    </div>
                </form>

                <!-- Default Capacity -->
                <form [formGroup]="form">
                    @if (form.controls.capacity) {
                        <div class="mb-4 flex flex-col">
                            <label
                                for="capacity"
                                [class.error]="
                                    form.controls.capacity.invalid &&
                                    form.controls.capacity.touched
                                "
                            >
                                {{ 'COMMON.CAPACITY' | translate }}
                            </label>
                            <a-counter
                                name="capacity"
                                class="w-full"
                                formControlName="capacity"
                                [min]="0"
                                [max]="256"
                            ></a-counter>
                        </div>
                    }
                </form>

                <!-- Venue Type -->
                <div class="mb-3" [formGroup]="venue_form">
                    <div class="flex flex-col">
                        <label>Venue Type</label>
                        <mat-form-field appearance="outline">
                            <mat-label>Venue Type</mat-label>
                            <mat-select formControlName="venue_type" placeholder="Select venue type">
                                @for (opt of venue_type_options; track opt.value) {
                                    <mat-option [value]="opt.value">{{ opt.label }}</mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                </div>

                <!-- Collapsible: Layout & Configuration -->
                <details class="border border-base-300 rounded-lg mb-3 w-full overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 font-medium text-sm hover:bg-base-200 select-none">
                        Layout & Configuration
                        <span class="text-xs opacity-60 ml-2">Seating, layouts & square footage</span>
                    </summary>
                    <div class="px-4 pb-4 pt-2" [formGroup]="venue_form">
                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <div class="flex flex-col min-w-0">
                                <label>Square Footage</label>
                                <mat-form-field appearance="outline">
                                    <mat-label>Square Footage</mat-label>
                                    <input matInput type="number" formControlName="sqft" placeholder="0" [min]="0" />
                                </mat-form-field>
                            </div>
                            <div class="flex items-center justify-center pt-4">
                                <settings-toggle name="Furniture Movable" formControlName="furniture_movable"></settings-toggle>
                            </div>
                        </div>
                        <div class="flex flex-col min-w-0">
                            <label>Supported Layouts</label>
                            <mat-form-field appearance="outline">
                                <mat-label>Supported Layouts</mat-label>
                                <mat-select formControlName="supported_layouts" multiple placeholder="Select layouts">
                                    @for (opt of supported_layout_options; track opt.value) {
                                        <mat-option [value]="opt.value">{{ opt.label }}</mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                    </div>
                </details>

                <!-- Pricing -->
                <details class="border border-base-300 rounded-lg mb-3 w-full overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 font-medium text-sm hover:bg-base-200 select-none">
                        Pricing
                        <span class="text-xs opacity-60 ml-2">Hourly, half-day & full-day rates</span>
                    </summary>
                    <div class="px-4 pb-4 pt-2" [formGroup]="venue_form">
                        <div class="grid grid-cols-3 gap-2">
                            <div class="flex flex-col min-w-0">
                                <label>Hourly Rate ($)</label>
                                <mat-form-field appearance="outline">
                                    <mat-label>Hourly Rate ($)</mat-label>
                                    <input matInput type="number" formControlName="hourly_rate" placeholder="0" [min]="0" />
                                </mat-form-field>
                            </div>
                            <div class="flex flex-col min-w-0">
                                <label>Half-Day Rate ($)</label>
                                <mat-form-field appearance="outline">
                                    <mat-label>Half-Day Rate ($)</mat-label>
                                    <input matInput type="number" formControlName="half_day_rate" placeholder="0" [min]="0" />
                                </mat-form-field>
                            </div>
                            <div class="flex flex-col min-w-0">
                                <label>Full-Day Rate ($)</label>
                                <mat-form-field appearance="outline">
                                    <mat-label>Full-Day Rate ($)</mat-label>
                                    <input matInput type="number" formControlName="full_day_rate" placeholder="0" [min]="0" />
                                </mat-form-field>
                            </div>
                        </div>
                        <div class="flex flex-col min-w-0 mt-2">
                            <label>Refund Lead Time (days)</label>
                            <mat-form-field appearance="outline">
                                <mat-label>Refund Lead Time (days)</mat-label>
                                <input matInput type="number" formControlName="refund_lead_days" placeholder="e.g. 14" [min]="0" />
                                <mat-hint>Days before event date when refund cutoff applies</mat-hint>
                            </mat-form-field>
                        </div>
                    </div>
                </details>
            }

            @if (current_page() === 2) {
                <!-- Setup / Breakdown -->
                <div class="flex space-x-2" [formGroup]="settings_form">
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="setup" class="flex items-center">
                            {{
                                'APP.CONCIERGE.ROOMS_DEFAULT_SETUP' | translate
                            }}
                            <icon
                                class="ml-2 text-base"
                                [matTooltip]="
                                    'APP.CONCIERGE.ROOMS_SETUP_INFO' | translate
                                "
                            >
                                info
                            </icon>
                        </label>
                        <a-duration-field
                            name="setup"
                            formControlName="setup"
                            [min]="0"
                        ></a-duration-field>
                    </div>
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="breakdown" class="flex items-center">
                            {{
                                'APP.CONCIERGE.ROOMS_DEFAULT_BREAKDOWN'
                                    | translate
                            }}
                            <icon
                                class="ml-2 text-base"
                                [matTooltip]="
                                    'APP.CONCIERGE.ROOMS_BREAKDOWN_INFO'
                                        | translate
                                "
                            >
                                info
                            </icon>
                        </label>
                        <a-duration-field
                            name="breakdown"
                            [min]="0"
                            formControlName="breakdown"
                        ></a-duration-field>
                    </div>
                </div>

                <!-- Collapsible: AV & Technology Services -->
                <details class="border border-base-300 rounded-lg mb-3 w-full overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 font-medium text-sm hover:bg-base-200 select-none">
                        AV & Technology
                        <span class="text-xs opacity-60 ml-2">Equipment, staffing & tech support</span>
                    </summary>
                    <div class="px-4 pb-4 pt-2" [formGroup]="venue_form">
                        <div class="flex flex-col min-w-0 mb-4">
                            <label>AV & Tech Services</label>
                            <mat-form-field appearance="outline">
                                <mat-label>AV & Tech Services</mat-label>
                                <mat-select formControlName="av_services" multiple placeholder="Select available services">
                                    @for (opt of av_service_options; track opt.value) {
                                        <mat-option [value]="opt.value">{{ opt.label }}</mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <settings-toggle name="On-Site Technical Staff" formControlName="onsite_tech_staff"></settings-toggle>
                            <settings-toggle name="After Hours AV Available" formControlName="after_hours_av"></settings-toggle>
                        </div>
                        <!-- AV Equipment & Staffing Catalog -->
                        <label class="text-xs font-medium opacity-70 mb-1">AV Equipment & Staffing Catalog</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>Search AV items</mat-label>
                            <icon matPrefix class="text-xl">search</icon>
                            <input matInput placeholder="Search AV items..." [value]="av_search()" (input)="av_search.set($any($event.target).value)" />
                        </mat-form-field>
                        <div class="max-h-[300px] overflow-y-auto border border-base-200 rounded-lg">
                            @for (cat of filtered_av_categories(); track cat.id) {
                                <details class="border-b border-base-200 last:border-b-0">
                                    <summary class="cursor-pointer px-3 py-2 font-medium text-xs hover:bg-base-100 select-none flex items-center justify-between sticky top-0 bg-white z-10">
                                        <span>{{ cat.label }}</span>
                                        <span class="text-xs opacity-60">{{ getAvEnabledCount(cat.id) }}/{{ cat.items.length }}</span>
                                    </summary>
                                    <div class="px-3 pb-2">
                                        <div class="flex items-center justify-between py-1 mb-1 border-b border-base-100">
                                            <span class="text-xs font-medium opacity-60">Select All</span>
                                            <button type="button" class="text-xs text-primary hover:underline" (click)="toggleAvCategory(cat.id)">
                                                {{ isAvCategoryFullyEnabled(cat.id) ? 'Deselect All' : 'Select All' }}
                                            </button>
                                        </div>
                                        @for (item of cat.items; track item.id) {
                                            <div class="flex items-center justify-between py-1 gap-2 hover:bg-base-50 rounded px-1"
                                                 [class.opacity-60]="!isAvItemEnabled(item.id)">
                                                <label class="flex items-center gap-2 flex-1 min-w-0 cursor-pointer text-xs">
                                                    <input type="checkbox" class="accent-primary w-3.5 h-3.5"
                                                        [checked]="isAvItemEnabled(item.id)"
                                                        (change)="toggleAvItem(item.id)" />
                                                    <span class="truncate">{{ item.name }}</span>
                                                </label>
                                                <div class="flex items-center gap-1 shrink-0">
                                                    <span class="text-xs opacity-60">$</span>
                                                    <input type="number" class="w-16 text-xs text-right border border-base-200 rounded px-1 py-0.5"
                                                        [value]="getMenuItemPrice(item.id)"
                                                        (change)="setMenuItemPrice(item.id, $any($event.target).value)"
                                                        [min]="0" step="1" />
                                                    <span class="text-xs opacity-60 w-12">{{ getUnitLabel(item.tags?.[0] || '') }}</span>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </details>
                            }
                        </div>
                    </div>
                </details>

                <!-- Collapsible: Catering & Dining \u2014 UCLA Menu Catalog -->
                <details class="border border-base-300 rounded-lg mb-3 w-full overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 font-medium text-sm hover:bg-base-200 select-none">
                        Catering & Dining
                        <span class="text-xs opacity-60 ml-2">UCLA menu catalog & pricing</span>
                    </summary>
                    <div class="px-4 pb-4 pt-2 flex flex-col space-y-3">
                        <!-- Catering Tier selector -->
                        <div class="flex flex-col" [formGroup]="venue_form">
                            <label class="text-xs opacity-70 mb-1">Service Level</label>
                            <mat-form-field appearance="outline">
                                <mat-label>Service Level</mat-label>
                                <mat-select formControlName="catering_tier"
                                    (selectionChange)="active_tier.set($event.value)">
                                    @for (opt of catering_tier_options; track opt.value) {
                                        <mat-option [value]="opt.value">
                                            {{ opt.label }}
                                            <span class="text-xs opacity-60 ml-1">\u2014 {{ opt.description }}</span>
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                        <!-- Provider & Kitchen toggles -->
                        <div class="grid grid-cols-2 gap-4 mb-2" [formGroup]="venue_form">
                            <settings-toggle name="Kitchen Access" formControlName="kitchen_access"></settings-toggle>
                            <settings-toggle name="Piano Available" formControlName="piano_available"></settings-toggle>
                        </div>
                        <div class="grid grid-cols-2 gap-2 mb-2" [formGroup]="venue_form">
                            <div class="flex flex-col">
                                <label class="text-xs opacity-70">Catering Provider</label>
                                <mat-form-field appearance="outline">
                                    <mat-label>Catering Provider</mat-label>
                                    <input matInput formControlName="catering_provider" placeholder="e.g. UCLA Conferences & Catering" />
                                </mat-form-field>
                            </div>
                            <div class="flex flex-col">
                                <label class="text-xs opacity-70">Catering Notes</label>
                                <mat-form-field appearance="outline">
                                    <mat-label>Catering Notes</mat-label>
                                    <input matInput formControlName="catering_notes" placeholder="Additional notes" />
                                </mat-form-field>
                            </div>
                        </div>

                        <!-- Menu search -->
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>Search menu items</mat-label>
                            <icon matPrefix class="text-xl">search</icon>
                            <input matInput placeholder="Search menu items..." [value]="menu_search()" (input)="menu_search.set($any($event.target).value)" />
                        </mat-form-field>

                        <!-- Menu categories -->
                        <div class="max-h-[400px] overflow-y-auto border border-base-200 rounded-lg">
                            @for (cat of filtered_menu_categories(); track cat.id) {
                                <details class="border-b border-base-200 last:border-b-0">
                                    <summary class="cursor-pointer px-3 py-2 font-medium text-xs hover:bg-base-100 select-none flex items-center justify-between sticky top-0 bg-white z-10">
                                        <span>
                                            {{ cat.label }}
                                            <span class="text-xs opacity-60 ml-1">{{ cat.description }}</span>
                                        </span>
                                        <span class="text-xs opacity-60">{{ getEnabledCount(cat.id) }}/{{ cat.items.length }}</span>
                                    </summary>
                                    <div class="px-3 pb-2">
                                        <!-- Select All toggle -->
                                        <div class="flex items-center justify-between py-1 mb-1 border-b border-base-100">
                                            <span class="text-xs font-medium opacity-60">Select All</span>
                                            <button type="button" class="text-xs text-primary hover:underline" (click)="toggleCategory(cat.id)">
                                                {{ isCategoryFullyEnabled(cat.id) ? 'Deselect All' : 'Select All' }}
                                            </button>
                                        </div>
                                        @for (item of cat.items; track item.id) {
                                            <div class="flex items-center justify-between py-1 gap-2 hover:bg-base-50 rounded px-1"
                                                 [class.opacity-60]="!isMenuItemEnabled(item.id)">
                                                <!-- Checkbox + Name -->
                                                <label class="flex items-center gap-2 flex-1 min-w-0 cursor-pointer text-xs">
                                                    <input type="checkbox"
                                                        class="accent-primary w-3.5 h-3.5"
                                                        [checked]="isMenuItemEnabled(item.id)"
                                                        (change)="toggleMenuItem(item.id)" />
                                                    <span class="truncate">{{ item.name }}</span>
                                                </label>
                                                <!-- Editable price -->
                                                <div class="flex items-center gap-1 shrink-0">
                                                    <span class="text-xs opacity-60">$</span>
                                                    <input type="number" class="w-16 text-xs text-right border border-base-200 rounded px-1 py-0.5"
                                                        [value]="getMenuItemPrice(item.id)"
                                                        (change)="setMenuItemPrice(item.id, $any($event.target).value)"
                                                        [min]="0" step="0.50" />
                                                    <span class="text-xs opacity-60 w-12">{{ getUnitLabel(item.tags?.[0] || '') }}</span>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </details>
                            }
                        </div>
                    </div>
                </details>

                <!-- Collapsible: Setup & Furniture Rental -->
                <details class="border border-base-300 rounded-lg mb-3 w-full overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 font-medium text-sm hover:bg-base-200 select-none">
                        Setup & Furniture Rental
                        <span class="text-xs opacity-60 ml-2">Tables, bars & event furniture</span>
                    </summary>
                    <div class="px-4 pb-4 pt-2">
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>Search setup items</mat-label>
                            <icon matPrefix class="text-xl">search</icon>
                            <input matInput placeholder="Search setup items..." [value]="setup_search()" (input)="setup_search.set($any($event.target).value)" />
                        </mat-form-field>
                        <div class="max-h-[300px] overflow-y-auto border border-base-200 rounded-lg">
                            @for (cat of filtered_setup_categories(); track cat.id) {
                                <div class="px-3 pb-2 pt-1">
                                    <div class="flex items-center justify-between py-1 mb-1 border-b border-base-100">
                                        <span class="text-xs font-medium opacity-60">{{ getSetupEnabledCount() }}/{{ cat.items.length }} selected</span>
                                        <button type="button" class="text-xs text-primary hover:underline" (click)="toggleAllSetup()">
                                            {{ isAllSetupEnabled() ? 'Deselect All' : 'Select All' }}
                                        </button>
                                    </div>
                                    @for (item of cat.items; track item.id) {
                                        <div class="flex items-center justify-between py-1 gap-2 hover:bg-base-50 rounded px-1"
                                             [class.opacity-60]="!isSetupItemEnabled(item.id)">
                                            <label class="flex items-center gap-2 flex-1 min-w-0 cursor-pointer text-xs">
                                                <input type="checkbox" class="accent-primary w-3.5 h-3.5"
                                                    [checked]="isSetupItemEnabled(item.id)"
                                                    (change)="toggleSetupItem(item.id)" />
                                                <span class="truncate">{{ item.name }}</span>
                                            </label>
                                            <div class="flex items-center gap-1 shrink-0">
                                                <span class="text-xs opacity-60">$</span>
                                                <input type="number" class="w-16 text-xs text-right border border-base-200 rounded px-1 py-0.5"
                                                    [value]="getMenuItemPrice(item.id)"
                                                    (change)="setMenuItemPrice(item.id, $any($event.target).value)"
                                                    [min]="0" step="1" />
                                                <span class="text-xs opacity-60 w-12">{{ getUnitLabel(item.tags?.[0] || '') }}</span>
                                            </div>
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                        <!-- Service Charge toggle -->
                        <div class="mt-3 pt-2 border-t border-base-200" [formGroup]="venue_form">
                            <settings-toggle name="After-Hours Service Charge (+$50)" formControlName="after_hours_service_charge"></settings-toggle>
                        </div>
                    </div>
                </details>

                <!-- Collapsible: Event Planning & Coordination -->
                <details class="border border-base-300 rounded-lg mb-3 w-full overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 font-medium text-sm hover:bg-base-200 select-none">
                        Event Services
                        <span class="text-xs opacity-60 ml-2">Planning, staffing & CNSI packages</span>
                    </summary>
                    <div class="px-4 pb-4 pt-2" [formGroup]="venue_form">
                        <div class="flex flex-col min-w-0 mb-4">
                            <label>General Event Services</label>
                            <mat-form-field appearance="outline">
                                <mat-label>General Event Services</mat-label>
                                <mat-select formControlName="event_services" multiple placeholder="Select available services">
                                    @for (opt of event_service_options; track opt.value) {
                                        <mat-option [value]="opt.value">{{ opt.label }}</mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                        <div class="flex flex-col min-w-0">
                            <label class="mb-1">CNSI Service Packages</label>
                            <p class="text-xs opacity-60 mb-2">
                                Select packages and add-ons from Service Management available at this venue.
                            </p>
                            @for (group of managed_service_groups(); track group.label) {
                                <div class="mb-3">
                                    <div class="text-xs font-semibold opacity-60 mb-1">{{ group.label }}</div>
                                    <div class="rounded border border-base-200 divide-y divide-base-200">
                                        @for (svc of group.items; track svc.id) {
                                            <label class="flex cursor-pointer items-center gap-3 px-3 py-2 hover:bg-base-200/50">
                                                <input
                                                    type="checkbox"
                                                    class="checkbox checkbox-sm"
                                                    [checked]="isManagedServiceSelected(svc.id)"
                                                    (change)="toggleManagedService(svc.id)"
                                                />
                                                <icon class="text-base-content/40 text-lg">{{ svc.icon || 'misc_services' }}</icon>
                                                <div class="flex-1 min-w-0">
                                                    <div class="text-sm font-medium">{{ svc.name }}</div>
                                                    <div class="text-xs opacity-60">{{ svc.internal_price }} (internal) \xB7 {{ svc.external_price }} (external)</div>
                                                </div>
                                            </label>
                                        }
                                    </div>
                                </div>
                            }
                            @if (managed_service_groups().length === 0) {
                                <div class="text-xs text-base-content/50 rounded border border-base-200 px-3 py-4 text-center">
                                    No services configured. Add services via Service Management.
                                </div>
                            }
                        </div>
                    </div>
                </details>

                <!-- Collapsible: Parking & WiFi -->
                <details class="border border-base-300 rounded-lg mb-3 w-full overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 font-medium text-sm hover:bg-base-200 select-none">
                        Parking & WiFi
                        <span class="text-xs opacity-60 ml-2">Connectivity & transportation</span>
                    </summary>
                    <div class="px-4 pb-4 pt-2" [formGroup]="venue_form">
                        <div class="grid grid-cols-2 gap-4">
                            <settings-toggle name="Complimentary WiFi" formControlName="wifi_available"></settings-toggle>
                            <settings-toggle name="High-Speed WiFi" formControlName="high_speed_wifi"></settings-toggle>
                            <settings-toggle name="On-Site Parking" formControlName="onsite_parking"></settings-toggle>
                            <settings-toggle name="Visitor Transportation" formControlName="visitor_transportation"></settings-toggle>
                        </div>
                    </div>
                </details>

                <!-- Collapsible: Accessibility -->
                <details class="border border-base-300 rounded-lg mb-3 w-full overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 font-medium text-sm hover:bg-base-200 select-none">
                        Accessibility
                        <span class="text-xs opacity-60 ml-2">ADA compliance & accommodations</span>
                    </summary>
                    <div class="px-4 pb-4 pt-2 flex flex-col space-y-4" [formGroup]="venue_form">
                        <div class="grid grid-cols-2 gap-4">
                            <settings-toggle name="ADA Accessible" formControlName="ada_accessible"></settings-toggle>
                            <settings-toggle name="Hearing Loop" formControlName="hearing_loop"></settings-toggle>
                            <settings-toggle name="Accessible Restroom Nearby" formControlName="accessible_restroom"></settings-toggle>
                            <settings-toggle name="Adjustable Lighting" formControlName="adjustable_lighting"></settings-toggle>
                        </div>
                        <div class="flex flex-col w-1/2">
                            <label>Wheelchair Capacity</label>
                            <a-counter class="w-full" formControlName="wheelchair_capacity" [min]="0" [max]="999"></a-counter>
                        </div>
                    </div>
                </details>

                <!-- Existing fields: Description, Features, Map ID, Timezone, Images, URLs -->
                <form [formGroup]="form">
                    @if (form.controls.description) {
                        <div class="flex flex-col">
                            <label for="description">{{
                                'COMMON.DESCRIPTION' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <mat-label>{{ 'COMMON.DESCRIPTION' | translate }}</mat-label>
                                <textarea
                                    matInput
                                    name="description"
                                    [placeholder]="'COMMON.DESCRIPTION' | translate"
                                    formControlName="description"
                                ></textarea>
                            </mat-form-field>
                        </div>
                    }
                    @if (form.controls.features) {
                        <div class="flex flex-col">
                            <label
                                [class.error]="
                                    form.controls.features.invalid &&
                                    form.controls.features.touched
                                "
                            >
                                {{ 'COMMON.FEATURES' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-label>{{ 'COMMON.FEATURES' | translate }}</mat-label>
                                <mat-chip-grid
                                    #chipList
                                    [attr.aria-label]="
                                        'COMMON.FEATURES' | translate
                                    "
                                >
                                    @for (feature of feature_list; track feature) {
                                        <mat-chip-row
                                            [removable]="true"
                                            (removed)="removeFeature(feature)"
                                        >
                                            {{ feature }}
                                            <icon matChipRemove>close</icon>
                                        </mat-chip-row>
                                    }
                                    <input
                                        [placeholder]="
                                            'COMMON.FEATURES' | translate
                                        "
                                        [matChipInputFor]="chipList"
                                        [matChipInputSeparatorKeyCodes]="separators"
                                        [matChipInputAddOnBlur]="true"
                                        (matChipInputTokenEnd)="addFeature($event)"
                                    />
                                </mat-chip-grid>
                            </mat-form-field>
                        </div>
                    }
                    @if (form.controls.map_id) {
                        <div class="flex flex-col">
                            <label for="map_id">{{
                                'EXPLORE.MAP_ID' | translate
                            }}</label>
                            <div class="flex space-x-2">
                                <mat-form-field appearance="outline">
                                    <mat-label>{{ 'EXPLORE.MAP_ID' | translate }}</mat-label>
                                    <input
                                        matInput
                                        name="map_id"
                                        [placeholder]="
                                            'EXPLORE.MAP_ID_PLACEHOLDER' | translate
                                        "
                                        formControlName="map_id"
                                    />
                                </mat-form-field>
                                <button
                                    icon
                                    matRipple
                                    class="border-secondary text-secondary h-12 w-12 rounded-sm border"
                                    [matTooltip]="
                                        'APP.CONCIERGE.POI_MAP_SELECT' | translate
                                    "
                                    aria-label="Select from map"
                                    (click)="selectItemfromMap()"
                                >
                                    <icon>place</icon>
                                </button>
                            </div>
                        </div>
                    }
                    <div class="flex flex-col">
                        <label for="timezone">{{
                            'COMMON.TIMEZONE' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <mat-label>{{ 'COMMON.TIMEZONE' | translate }}</mat-label>
                            <icon matPrefix class="text-2xl">search</icon>
                            <input
                                matInput
                                formControlName="timezone"
                                [placeholder]="'COMMON.TIMEZONE' | translate"
                                [matAutocomplete]="auto"
                            />
                        </mat-form-field>
                        <mat-autocomplete #auto="matAutocomplete">
                            @for (tz of filtered_timezones(); track tz) {
                                <mat-option [value]="tz">
                                    {{ tz }}
                                </mat-option>
                            }
                            @if (!timezones().length) {
                                <mat-option [disabled]="true">
                                    {{ 'COMMON.TIMEZONE_EMPTY' | translate }}
                                </mat-option>
                            }
                        </mat-autocomplete>
                    </div>
                    @if (form.controls.images) {
                        <div class="flex flex-col">
                            <label for="images">{{
                                'COMMON.IMAGE' | translate
                            }}</label>
                            <image-list-field
                                name="images"
                                formControlName="images"
                            ></image-list-field>
                        </div>
                    }
                    @if (form.controls.timetable_url) {
                        <div class="flex flex-col">
                            <label
                                for="timetable-url"
                                [class.error]="
                                    form.controls.timetable_url.invalid &&
                                    form.controls.timetable_url.touched
                                "
                            >
                                {{ 'COMMON.TIMETABLE_URL' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-label>{{ 'COMMON.TIMETABLE_URL' | translate }}</mat-label>
                                <input
                                    matInput
                                    name="timetable-url"
                                    [placeholder]="
                                        'COMMON.TIMETABLE_URL' | translate
                                    "
                                    formControlName="timetable_url"
                                />
                                <mat-error>
                                    {{ 'SYSTEMS.URL_VALID' | translate }}
                                </mat-error>
                            </mat-form-field>
                        </div>
                    }
                    @if (form.controls.room_booking_url) {
                        <div class="flex flex-col">
                            <label
                                for="room-booking-url"
                                [class.error]="
                                    form.controls.room_booking_url.invalid &&
                                    form.controls.room_booking_url.touched
                                "
                            >
                                {{ 'COMMON.ROOM_BOOKING_URL' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-label>{{ 'COMMON.ROOM_BOOKING_URL' | translate }}</mat-label>
                                <input
                                    matInput
                                    name="room-booking-url"
                                    [placeholder]="
                                        'COMMON.ROOM_BOOKING_URL' | translate
                                    "
                                    formControlName="room_booking_url"
                                />
                                <mat-error>
                                    {{ 'COMMON.URL_VALID' | translate }}
                                </mat-error>
                            </mat-form-field>
                        </div>
                    }
                </form>

            }
        </fullscreen-modal-shell>
    `, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      FullscreenModalShellComponent,
      ImageListFieldComponent,
      ReactiveFormsModule,
      MatAutocompleteModule,
      MatFormFieldModule,
      MatInputModule,
      MatChipsModule,
      CounterComponent,
      SettingsToggleComponent,
      MatSelectModule,
      DurationFieldComponent,
      MatTooltipModule
    ], styles: ["/* angular:styles/component:css;04b7a7094a437298576db2a062c3593f3d6712155227875ebf15729043ce208e;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/room-manager/room-modal.component.ts */\nmat-checkbox {\n  margin-top: 2.5em;\n  margin-bottom: 1.5em;\n}\n@media screen and (max-width: 640px) {\n  mat-checkbox {\n    margin-top: 0;\n  }\n}\n/*# sourceMappingURL=room-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomModalComponent, { className: "RoomModalComponent", filePath: "apps/concierge/src/app/room-manager/room-modal.component.ts", lineNumber: 1007 });
})();

// apps/concierge/src/app/room-manager/room-management.service.ts
var _RoomManagementService = class _RoomManagementService {
  constructor() {
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this._options = new BehaviorSubject({});
    this._change = new BehaviorSubject(0);
    this.options = this._options.asObservable();
    this.room_alerts = combineLatest([
      this._change,
      this._org.active_building
    ]).pipe(switchMap(() => nc(this._org.organisation.id, "room_alerts")), map((_) => _.details || {}), shareReplay(1));
    this.room_list = combineLatest([
      this._org.active_building,
      this._org.active_region,
      this._change
    ]).pipe(filter(([b, r]) => !!b?.id), switchMap(([bld, region]) => combineLatest([
      Zc({
        zone_id: (this._settings.get("app.use_region") ? region.id : "") || bld.id,
        limit: 2500
      }).pipe(map(({ data }) => data), catchError(() => of([]))),
      this.room_alerts
    ])), map(([list, alerts]) => {
      for (const id in alerts) {
        const [status, message] = alerts[id];
        const item = list.find((_) => _.id === id);
        if (!item)
          continue;
        item.alert = {
          status,
          message
        };
      }
      return list.filter((_) => this._org.levelWithID(_.zones)).sort((a, b) => a.name.localeCompare(b.name));
    }), shareReplay(1));
    this.filtered_rooms = combineLatest([
      this.room_list,
      this._options
    ]).pipe(map(([list, options]) => {
      if (options.zones?.length) {
        list = list.filter((_) => options.zones.find((z) => _.zones.includes(z)));
      }
      if (options.search) {
        list = list.filter((_) => _.name.toLowerCase().includes(options.search.toLowerCase()));
      }
      return list;
    }));
  }
  setFilters(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
  setSearchString(search) {
    this._options.next(__spreadProps(__spreadValues({}, this._options.getValue()), { search }));
  }
  editRoom(room = new Lr()) {
    const ref = this._dialog.open(RoomModalComponent, { data: { room } });
    ref.afterClosed().subscribe((data) => {
      if (data)
        setTimeout(() => this._change.next(Date.now()), 300);
    });
  }
  setRoomAlert(room) {
    if (!room)
      return;
    const ref = this._dialog.open(RoomAlertModalComponent, {
      data: { room }
    });
    ref.afterClosed().subscribe((data) => {
      if (data)
        setTimeout(() => this._change.next(Date.now()), 300);
    });
  }
};
_RoomManagementService.\u0275fac = function RoomManagementService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RoomManagementService)();
};
_RoomManagementService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RoomManagementService, factory: _RoomManagementService.\u0275fac, providedIn: "root" });
var RoomManagementService = _RoomManagementService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomManagementService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/room-manager/room-list.component.ts
var _c02 = (a0, a1) => ({ key: "display_name", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "zones", name: a0, size: "10rem", content: a1 });
var _c2 = (a0) => ({ key: "capacity", name: a0, size: "6rem" });
var _c3 = (a0) => ({ key: "code", name: a0, size: "8rem" });
var _c4 = (a0, a1) => ({ key: "approval", name: a0, size: "5.5rem", content: a1, sortable: false });
var _c5 = (a0, a1) => ({ key: "bookable", name: a0, size: "5.5rem", content: a1, sortable: false });
var _c6 = (a0, a1) => ({ key: "alert", name: a0, size: "5.5rem", content: a1 });
var _c7 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c8 = (a0, a1, a2, a3, a4, a5, a6, a7) => [a0, a1, a2, a3, a4, a5, a6, a7];
function RoomListComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function RoomListComponent_ng_template_10_Template_button_click_0_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyToClipboard(row_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    const data_r4 = ctx.data;
    \u0275\u0275attribute("aria-label", "Copy ID for " + data_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r2.id, " ");
  }
}
function RoomListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "level");
    \u0275\u0275pipe(3, "level");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const data_r5 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_7_0 = \u0275\u0275pipeBind1(2, 1, data_r5)) == null ? null : tmp_7_0.display_name) || ((tmp_7_0 = \u0275\u0275pipeBind1(3, 3, data_r5)) == null ? null : tmp_7_0.name), " ");
  }
}
function RoomListComponent_ng_template_14_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r6 = \u0275\u0275nextContext().data;
    \u0275\u0275classProp("bg-error", !data_r6)("bg-success", data_r6);
    \u0275\u0275attribute("aria-label", data_r6 ? "Yes" : "No");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r6 ? "done" : "close");
  }
}
function RoomListComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RoomListComponent_ng_template_14_Conditional_0_Template, 3, 6, "div", 13);
  }
  if (rf & 2) {
    const data_r6 = ctx.data;
    \u0275\u0275conditional(data_r6 ? 0 : -1);
  }
}
function RoomListComponent_ng_template_16_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r7 = \u0275\u0275nextContext().data;
    \u0275\u0275classProp("bg-warning", data_r7.status === "warn")("bg-error", data_r7.status === "closed")("bg-info", data_r7.status === "info")("text-warning-content", data_r7.status === "warn")("text-error-content", data_r7.status === "closed")("text-info-content", data_r7.status === "info");
    \u0275\u0275property("matTooltip", data_r7.message);
    \u0275\u0275attribute("aria-label", data_r7.status === "warn" ? "Warning" : data_r7.status === "info" ? "Info" : "Closed");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r7.status === "warn" ? "warning" : data_r7.status === "info" ? "info" : "close");
  }
}
function RoomListComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RoomListComponent_ng_template_16_Conditional_0_Template, 3, 15, "div", 15);
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    \u0275\u0275conditional(data_r7 ? 0 : -1);
  }
}
function RoomListComponent_ng_template_18_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 22);
    \u0275\u0275pipe(1, "sanitize");
    \u0275\u0275elementStart(2, "div", 20)(3, "icon", 23);
    \u0275\u0275text(4, "tv_remote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext().row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("href", \u0275\u0275pipeBind2(1, 2, row_r9.support_url || ctx_r2.control_path + row_r9.id, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "APP.CONCIERGE.ROOMS_VIEW_CONTROL"));
  }
}
function RoomListComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "button", 18)(2, "icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "mat-menu", null, 5)(6, "button", 19);
    \u0275\u0275listener("click", function RoomListComponent_ng_template_18_Template_button_click_6_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editRoom(row_r9));
    });
    \u0275\u0275elementStart(7, "div", 20)(8, "icon", 21);
    \u0275\u0275text(9, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "button", 19);
    \u0275\u0275listener("click", function RoomListComponent_ng_template_18_Template_button_click_13_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setRoomAlert(row_r9));
    });
    \u0275\u0275elementStart(14, "div", 20)(15, "icon", 21);
    \u0275\u0275text(16, "notification_important");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(20, RoomListComponent_ng_template_18_Conditional_20_Template, 8, 7, "a", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.row;
    const menu_r10 = \u0275\u0275reference(5);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r10);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 4, "APP.CONCIERGE.ROOMS_EDIT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 6, "APP.CONCIERGE.ROOMS_SET_ALERT"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(row_r9.support_url || ctx_r2.control_path ? 20 : -1);
  }
}
var _RoomListComponent = class _RoomListComponent {
  constructor() {
    this._manager = inject(RoomManagementService);
    this._clipboard = inject(Clipboard);
    this._settings = inject(SettingsService);
    this.rooms = this._manager.filtered_rooms;
    this.editRoom = (room) => this._manager.editRoom(room);
    this.setRoomAlert = (room) => this._manager.setRoomAlert(room);
    this.copyToClipboard = (id) => {
      const success = this._clipboard.copy(id);
      if (success)
        notifySuccess(i18n("APP.CONCIERGE.ROOMS_COPIED_ID"));
    };
  }
  get control_path() {
    return this._settings.get("app.control_path") || "";
  }
};
_RoomListComponent.\u0275fac = function RoomListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RoomListComponent)();
};
_RoomListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomListComponent, selectors: [["room-list"]], decls: 20, vars: 47, consts: [["name_template", ""], ["level_template", ""], ["bool_template", ""], ["alert_template", ""], ["action_template", ""], ["menu", "matMenu"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], ["empty_message", "No rooms for selected level or building", 1, "block", "min-w-4xl", "text-sm", "text-base-content", 3, "data", "columns", "sortable"], [1, "h-20", "w-full"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "font-mono", "text-[0.625rem]", "opacity-60"], [1, "p-4"], ["role", "img", 1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", "text-white", 3, "bg-error", "bg-success"], ["role", "img", 1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", "text-white"], ["role", "img", 1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", "text-white", 3, "bg-warning", "bg-error", "bg-info", "text-warning-content", "text-error-content", "text-info-content", "matTooltip"], ["role", "img", 1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", "text-white", 3, "matTooltip"], [1, "mx-auto", "p-1"], ["icon", "", "matRipple", "", "aria-label", "More options", 1, "h-12", "w-12", "rounded-sm", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], ["mat-menu-item", "", "target", "_blank", "ref", "noopener noreferrer", 3, "href"], ["className", "material-symbols-rounded", 1, "text-xl"]], template: function RoomListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "simple-table", 7);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275element(9, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, RoomListComponent_ng_template_10_Template, 5, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(12, RoomListComponent_ng_template_12_Template, 4, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(14, RoomListComponent_ng_template_14_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(16, RoomListComponent_ng_template_16_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(18, RoomListComponent_ng_template_18_Template, 21, 8, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const name_template_r11 = \u0275\u0275reference(11);
    const level_template_r12 = \u0275\u0275reference(13);
    const bool_template_r13 = \u0275\u0275reference(15);
    const alert_template_r14 = \u0275\u0275reference(17);
    const action_template_r15 = \u0275\u0275reference(19);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.rooms)("columns", \u0275\u0275pureFunction8(38, _c8, \u0275\u0275pureFunction2(17, _c02, \u0275\u0275pipeBind1(2, 3, "APP.CONCIERGE.ROOMS_NAME"), name_template_r11), \u0275\u0275pureFunction2(20, _c1, \u0275\u0275pipeBind1(3, 5, "RESOURCE.LEVEL"), level_template_r12), \u0275\u0275pureFunction1(23, _c2, \u0275\u0275pipeBind1(4, 7, "COMMON.CAPACITY")), \u0275\u0275pureFunction1(25, _c3, \u0275\u0275pipeBind1(5, 9, "APP.CONCIERGE.ROOMS_TYPE")), \u0275\u0275pureFunction2(27, _c4, \u0275\u0275pipeBind1(6, 11, "COMMON.APPROVAL"), bool_template_r13), \u0275\u0275pureFunction2(30, _c5, \u0275\u0275pipeBind1(7, 13, "COMMON.BOOKABLE"), bool_template_r13), \u0275\u0275pureFunction2(33, _c6, \u0275\u0275pipeBind1(8, 15, "APP.CONCIERGE.ROOMS_ALERT"), alert_template_r14), \u0275\u0275pureFunction1(36, _c7, action_template_r15)))("sortable", true);
  }
}, dependencies: [
  SimpleTableComponent,
  IconComponent,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatTooltipModule,
  MatTooltip,
  SanitizePipe,
  TranslatePipe,
  LevelPipe
], encapsulation: 2 });
var RoomListComponent = _RoomListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomListComponent, [{
    type: Component,
    args: [{ selector: "room-list", template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="block min-w-4xl text-sm text-base-content"
                [data]="rooms"
                empty_message="No rooms for selected level or building"
                [columns]="[
                    {
                        key: 'display_name',
                        name: 'APP.CONCIERGE.ROOMS_NAME' | translate,
                        content: name_template,
                    },
                    {
                        key: 'zones',
                        name: 'RESOURCE.LEVEL' | translate,
                        size: '10rem',
                        content: level_template,
                    },
                    {
                        key: 'capacity',
                        name: 'COMMON.CAPACITY' | translate,
                        size: '6rem',
                    },
                    {
                        key: 'code',
                        name: 'APP.CONCIERGE.ROOMS_TYPE' | translate,
                        size: '8rem',
                    },
                    {
                        key: 'approval',
                        name: 'COMMON.APPROVAL' | translate,
                        size: '5.5rem',
                        content: bool_template,
                        sortable: false,
                    },
                    {
                        key: 'bookable',
                        name: 'COMMON.BOOKABLE' | translate,
                        size: '5.5rem',
                        content: bool_template,
                        sortable: false,
                    },
                    {
                        key: 'alert',
                        name: 'APP.CONCIERGE.ROOMS_ALERT' | translate,
                        size: '5.5rem',
                        content: alert_template,
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '3.5rem',
                        sortable: false,
                    },
                ]"
                [sortable]="true"
            ></simple-table>
            <div class="h-20 w-full"></div>
        </div>
        <ng-template #name_template let-row="row" let-data="data">
            <button
                class="px-4 py-2 text-left leading-tight"
                (click)="copyToClipboard(row.id)"
                [attr.aria-label]="'Copy ID for ' + data"
            >
                <div class="">{{ data }}</div>
                <div class="font-mono text-[0.625rem] opacity-60">
                    {{ row.id }}
                </div>
            </button>
        </ng-template>
        <ng-template #level_template let-data="data">
            <div class="p-4">
                {{ (data | level)?.display_name || (data | level)?.name }}
            </div>
        </ng-template>
        <ng-template #bool_template let-data="data">
            @if (data) {
                <div
                    [class.bg-error]="!data"
                    [class.bg-success]="data"
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl text-white"
                    [attr.aria-label]="data ? 'Yes' : 'No'"
                    role="img"
                >
                    <icon>{{ data ? 'done' : 'close' }}</icon>
                </div>
            }
        </ng-template>
        <ng-template #alert_template let-data="data">
            @if (data) {
                <div
                    [class.bg-warning]="data.status === 'warn'"
                    [class.bg-error]="data.status === 'closed'"
                    [class.bg-info]="data.status === 'info'"
                    [class.text-warning-content]="data.status === 'warn'"
                    [class.text-error-content]="data.status === 'closed'"
                    [class.text-info-content]="data.status === 'info'"
                    [matTooltip]="data.message"
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl text-white"
                    [attr.aria-label]="data.status === 'warn' ? 'Warning' : data.status === 'info' ? 'Info' : 'Closed'"
                    role="img"
                >
                    <icon>{{
                        data.status === 'warn'
                            ? 'warning'
                            : data.status === 'info'
                              ? 'info'
                              : 'close'
                    }}</icon>
                </div>
            }
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="mx-auto p-1">
                <button
                    icon
                    matRipple
                    class="h-12 w-12 rounded-sm"
                    [matMenuTriggerFor]="menu"
                    aria-label="More options"
                >
                    <icon>more_vert</icon>
                </button>
            </div>
            <mat-menu #menu="matMenu">
                <button mat-menu-item (click)="editRoom(row)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-xl">edit</icon>
                        <span>{{
                            'APP.CONCIERGE.ROOMS_EDIT' | translate
                        }}</span>
                    </div>
                </button>
                <button mat-menu-item (click)="setRoomAlert(row)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-xl">notification_important</icon>
                        <span>{{
                            'APP.CONCIERGE.ROOMS_SET_ALERT' | translate
                        }}</span>
                    </div>
                </button>
                @if (row.support_url || control_path) {
                    <a
                        mat-menu-item
                        [href]="
                            row.support_url || control_path + row.id
                                | sanitize: 'url'
                        "
                        target="_blank"
                        ref="noopener noreferrer"
                    >
                        <div class="flex items-center space-x-2">
                            <icon
                                class="text-xl"
                                className="material-symbols-rounded"
                                >tv_remote</icon
                            >
                            <span>{{
                                'APP.CONCIERGE.ROOMS_VIEW_CONTROL' | translate
                            }}</span>
                        </div>
                    </a>
                }
            </mat-menu>
        </ng-template>
    `, imports: [
      SimpleTableComponent,
      IconComponent,
      MatMenuModule,
      MatTooltipModule,
      SanitizePipe,
      TranslatePipe,
      LevelPipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomListComponent, { className: "RoomListComponent", filePath: "apps/concierge/src/app/room-manager/room-list.component.ts", lineNumber: 196 });
})();

// apps/concierge/src/app/room-manager/room-manager-topbar.component.ts
function RoomManagerTopbarComponent_For_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const level_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_11_0 = \u0275\u0275pipeBind1(2, 1, level_r1.parent_id)) == null ? null : tmp_11_0.display_name, " ");
  }
}
function RoomManagerTopbarComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8)(1, "div", 10);
    \u0275\u0275conditionalCreate(2, RoomManagerTopbarComponent_For_18_Conditional_2_Template, 5, 3, "div", 11);
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
var _RoomManagerTopbarComponent = class _RoomManagerTopbarComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._manager = inject(RoomManagementService);
    this._org = inject(OrganisationService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this.levels = combineLatest([
      this._org.active_building,
      this._org.active_region
    ]).pipe(map(([bld, region]) => this.use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld)));
    this.filters = this._manager.options;
    this.setFilters = (filters) => this._manager.setFilters(filters);
    this.setSearch = (str) => this._manager.setSearchString(str);
    this.updateZones = (zones) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: zones.join(",") },
        queryParamsHandling: "merge"
      });
    };
    this.newRoom = () => this._manager.editRoom();
  }
  get building() {
    return this._org.building;
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  get root_zone() {
    return (this.use_region ? this._org.region.id : "") || this._org.building.id;
  }
  manageRestrictions() {
    this._dialog.open(BookingRulesModalComponent, {
      data: { type: "room" }
    });
  }
  async ngOnInit() {
    await this._org.initialised.pipe(first((_) => _)).toPromise();
    this.subscription("route.query", this._route.queryParamMap.subscribe(async (params) => {
      if (params.has("zone_ids")) {
        const zone_list = (params.get("zone_ids") || "").split(",");
        const zones = zone_list.filter((z) => z);
        this._manager.setFilters({ zones });
      }
    }));
    this.setSearch("");
  }
};
_RoomManagerTopbarComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275RoomManagerTopbarComponent_BaseFactory;
  return function RoomManagerTopbarComponent_Factory(__ngFactoryType__) {
    return (\u0275RoomManagerTopbarComponent_BaseFactory || (\u0275RoomManagerTopbarComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RoomManagerTopbarComponent)))(__ngFactoryType__ || _RoomManagerTopbarComponent);
  };
})();
_RoomManagerTopbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomManagerTopbarComponent, selectors: [["room-manager-topbar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 25, vars: 20, consts: [[1, "flex", "items-center", "space-x-2", "px-8", "pt-4"], [1, "text-2xl", "font-medium"], [1, "w-2", "flex-1"], [3, "modelChange"], ["btn", "", 1, "w-40", 3, "click"], [1, "bg-base-100", "flex", "h-20", "items-center", "space-x-2", "px-8"], ["appearance", "outline", 1, "no-subscript", "w-60"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], ["btn", "", "icon", "", "matRipple", "", "aria-label", "Manage booking rules", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "rounded-sm", 3, "click", "matTooltip"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-60"], [1, "opacity-0"]], template: function RoomManagerTopbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 2);
    \u0275\u0275elementStart(5, "searchbar", 3);
    \u0275\u0275listener("modelChange", function RoomManagerTopbarComponent_Template_searchbar_modelChange_5_listener($event) {
      return ctx.setSearch($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 4);
    \u0275\u0275listener("click", function RoomManagerTopbarComponent_Template_button_click_6_listener() {
      return ctx.newRoom();
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 5)(10, "mat-form-field", 6)(11, "mat-label");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-select", 7);
    \u0275\u0275pipe(15, "async");
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275listener("ngModelChange", function RoomManagerTopbarComponent_Template_mat_select_ngModelChange_14_listener($event) {
      return ctx.updateZones($event);
    });
    \u0275\u0275repeaterCreate(17, RoomManagerTopbarComponent_For_18_Template, 5, 3, "mat-option", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "div", 2);
    \u0275\u0275elementStart(21, "button", 9);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275listener("click", function RoomManagerTopbarComponent_Template_button_click_21_listener() {
      return ctx.manageRestrictions();
    });
    \u0275\u0275elementStart(23, "icon");
    \u0275\u0275text(24, "lock_open");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "APP.CONCIERGE.ROOMS_HEADER"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 8, "APP.CONCIERGE.ROOMS_ADD"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 10, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", (tmp_3_0 = \u0275\u0275pipeBind1(15, 12, ctx.filters)) == null ? null : tmp_3_0.zones)("placeholder", \u0275\u0275pipeBind1(16, 14, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(19, 16, ctx.levels));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(22, 18, "APP.CONCIERGE.ROOMS_BOOKING_RULES"));
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  IconComponent,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  MatFormFieldModule,
  MatFormField,
  MatLabel,
  MatSelectModule,
  MatSelect,
  MatOption,
  BuildingPipe,
  SearchbarComponent,
  FormsModule,
  NgControlStatus,
  NgModel,
  MatTooltipModule,
  MatTooltip
], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25rem;\n}\n/*# sourceMappingURL=room-manager-topbar.component.css.map */"] });
var RoomManagerTopbarComponent = _RoomManagerTopbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomManagerTopbarComponent, [{
    type: Component,
    args: [{ selector: "room-manager-topbar", template: `
        <div class="flex items-center space-x-2 px-8 pt-4">
            <h2 class="text-2xl font-medium">
                {{ 'APP.CONCIERGE.ROOMS_HEADER' | translate }}
            </h2>
            <div class="w-2 flex-1"></div>
            <searchbar (modelChange)="setSearch($event)"></searchbar>
            <button btn (click)="newRoom()" class="w-40">
                {{ 'APP.CONCIERGE.ROOMS_ADD' | translate }}
            </button>
        </div>
        <div class="bg-base-100 flex h-20 items-center space-x-2 px-8">
            <mat-form-field appearance="outline" class="no-subscript w-60">
                <mat-label>{{ 'COMMON.LEVEL_ALL' | translate }}</mat-label>
                <mat-select
                    [ngModel]="(filters | async)?.zones"
                    (ngModelChange)="updateZones($event)"
                    [placeholder]="'COMMON.LEVEL_ALL' | translate"
                    multiple
                >
                    @for (level of levels | async; track level) {
                        <mat-option [value]="level.id">
                            <div class="flex flex-col-reverse">
                                @if (use_region) {
                                    <div class="text-xs opacity-60">
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
            <div class="w-2 flex-1"></div>
            <button
                btn
                icon
                matRipple
                class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                (click)="manageRestrictions()"
                [matTooltip]="'APP.CONCIERGE.ROOMS_BOOKING_RULES' | translate"
                aria-label="Manage booking rules"
            >
                <icon>lock_open</icon>
            </button>
        </div>
    `, imports: [
      CommonModule,
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatFormFieldModule,
      MatSelectModule,
      BuildingPipe,
      SearchbarComponent,
      FormsModule,
      MatTooltipModule
    ], styles: ["/* angular:styles/component:css;2bc8ca7aace10e46f51053cb2cf4127500bd9fcd06c7c0d1d5dc88d70d997800;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/room-manager/room-manager-topbar.component.ts */\nmat-form-field {\n  height: 3.25rem;\n}\n/*# sourceMappingURL=room-manager-topbar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomManagerTopbarComponent, { className: "RoomManagerTopbarComponent", filePath: "apps/concierge/src/app/room-manager/room-manager-topbar.component.ts", lineNumber: 102 });
})();

// apps/concierge/src/app/room-manager/room-manager.component.ts
var _c03 = ["app-new-room-manager", ""];
var _RoomManagerComponent = class _RoomManagerComponent {
};
_RoomManagerComponent.\u0275fac = function RoomManagerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RoomManagerComponent)();
};
_RoomManagerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomManagerComponent, selectors: [["", "app-new-room-manager", ""]], attrs: _c03, decls: 6, vars: 0, consts: [[1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "block", "w-full"], [1, "relative", "block", "h-1/2", "w-full", "flex-1"]], template: function RoomManagerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 1);
    \u0275\u0275element(4, "room-manager-topbar", 2)(5, "room-list", 3);
    \u0275\u0275elementEnd()();
  }
}, dependencies: [
  ApplicationTopbarComponent,
  ApplicationSidebarComponent,
  RoomManagerTopbarComponent,
  RoomListComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\nsidebar[_ngcontent-%COMP%] {\n  height: 100%;\n}\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=room-manager.component.css.map */"] });
var RoomManagerComponent = _RoomManagerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomManagerComponent, [{
    type: Component,
    args: [{ selector: "[app-new-room-manager]", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <room-manager-topbar class="block w-full"></room-manager-topbar>
                <room-list
                    class="relative block h-1/2 w-full flex-1"
                ></room-list>
            </main>
        </div>
    `, imports: [
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      RoomManagerTopbarComponent,
      RoomListComponent
    ], styles: ["/* angular:styles/component:css;c3c4e43489fa049a08c22bf31fd7fb879b1769192f7684fb69867d5e4ca38a37;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/room-manager/room-manager.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\nsidebar {\n  height: 100%;\n}\nmain {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=room-manager.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomManagerComponent, { className: "RoomManagerComponent", filePath: "apps/concierge/src/app/room-manager/room-manager.component.ts", lineNumber: 51 });
})();

// apps/concierge/src/app/room-manager/room-manager.module.ts
var ROUTES = [{ path: "", component: RoomManagerComponent }];
var _RoomManagerModule = class _RoomManagerModule {
};
_RoomManagerModule.\u0275fac = function RoomManagerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RoomManagerModule)();
};
_RoomManagerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _RoomManagerModule });
_RoomManagerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RoomManagerComponent, RouterModule.forChild(ROUTES)] });
var RoomManagerModule = _RoomManagerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomManagerModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [RoomManagerComponent, RouterModule.forChild(ROUTES)]
    }]
  }], null, null);
})();
export {
  RoomManagerModule
};
//# sourceMappingURL=room-manager.module-3PGGIVPL.js.map
