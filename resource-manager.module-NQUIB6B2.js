import {
  ParkingSpaceListComponent
} from "./chunk-WM346FKF.js";
import {
  ParkingStateService
} from "./chunk-CMVPSXBK.js";
import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-XL3MDWA6.js";
import {
  DesksManageComponent
} from "./chunk-2WHEEXPR.js";
import {
  DesksStateService,
  SelectMapItemModalComponent
} from "./chunk-YLLWODUB.js";
import {
  LockerListComponent
} from "./chunk-EO4B7ET5.js";
import {
  LockerStateService
} from "./chunk-DQ4VKFVP.js";
import {
  BookingRulesModalComponent
} from "./chunk-YUTBF2L5.js";
import {
  SearchbarComponent
} from "./chunk-AGB55ATH.js";
import "./chunk-YIO5MOBF.js";
import "./chunk-M6Q7N2W7.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  CounterComponent,
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-67VYHWAM.js";
import {
  $c,
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
  Desk,
  DurationFieldComponent,
  ENTER,
  Ec,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  FullscreenModalShellComponent,
  IconComponent,
  ImageListFieldComponent,
  Injectable,
  LevelPipe,
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
  MatInput,
  MatInputModule,
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
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgModule,
  Oc,
  OrganisationService,
  Pu,
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
  Te,
  Tr,
  TranslatePipe,
  Tu,
  __spreadProps,
  __spreadValues,
  catchError,
  combineLatest,
  computed,
  csvToJson,
  downloadFile,
  filter,
  first,
  generateSystemsFormFields,
  getInvalidFields,
  getItemWithKeys,
  i18n,
  inject,
  input,
  jsonToCsv,
  lastValueFrom,
  loadTextFileFromInputEvent,
  map,
  notifyError,
  notifySuccess,
  notifyWarn,
  of,
  randomInt,
  setClassMetadata,
  settingSignal,
  shareReplay,
  signal,
  switchMap,
  ta,
  unique,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-I4HSLPYT.js";

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
    \u0275\u0275elementStart(4, "mat-form-field", 7)(5, "mat-select", 8)(6, "mat-option", 9);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-option", 10);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-option", 11);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-option", 12);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "label", 13);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-form-field", 7);
    \u0275\u0275element(22, "textarea", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 7, "COMMON.STATUS"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 9, "APP.CONCIERGE.ROOMS_ALERT_TYPE_NONE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 11, "APP.CONCIERGE.ROOMS_ALERT_TYPE_INFO"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 13, "APP.CONCIERGE.ROOMS_ALERT_TYPE_WARNING"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 15, "APP.CONCIERGE.ROOMS_ALERT_TYPE_CLOSED"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 17, "APP.CONCIERGE.ROOMS_ALERT_MSG"));
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
    const metadata = await Pu(this._org.organisation.id, "room_alerts").toPromise().catch((e) => {
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
    await Tu(this._org.organisation.id, {
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
_RoomAlertModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomAlertModalComponent, selectors: [["room-alert-modal"]], decls: 8, vars: 9, consts: [[1, "sticky", "top-0", "z-10", "mx-auto", "my-2", "flex", "h-14", "w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded", "border-none", "bg-base-200", "p-2"], [1, "px-2", "text-xl", "font-medium", "capitalize"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "max-h-[65vh]", "min-w-[28rem]", "flex-col", "overflow-y-auto", "overflow-x-hidden", "p-4", 3, "formGroup"], [1, "flex", "h-64", "w-64", "flex-col", "items-center", "justify-center"], [1, "flex", "justify-end", "border-t", "border-base-200", "p-2"], ["for", "status"], ["appearance", "outline"], ["name", "status", "formControlName", "status"], ["value", ""], ["value", "info"], ["value", "warn"], ["value", "closed"], ["for", "message"], ["matInput", "", "name", "message", "formControlName", "message"], ["diameter", "32"], [1, "mt-4"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"]], template: function RoomAlertModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, RoomAlertModalComponent_Conditional_4_Template, 3, 0, "button", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, RoomAlertModalComponent_Conditional_5_Template, 23, 19, "main", 3)(6, RoomAlertModalComponent_Conditional_6_Template, 5, 3, "div", 4);
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
            class="sticky top-0 z-10 mx-auto my-2 flex h-14 w-[calc(100%-1rem)] items-center justify-between rounded border-none bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium capitalize">
                {{
                    'APP.CONCIERGE.ROOMS_ALERT_HEADER'
                        | translate: { name: room.display_name || room.name }
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
                class="flex max-h-[65vh] min-w-[28rem] flex-col overflow-y-auto overflow-x-hidden p-4"
                [formGroup]="form"
            >
                <label for="status">{{ 'COMMON.STATUS' | translate }}</label>
                <mat-form-field appearance="outline">
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
            <footer class="flex justify-end border-t border-base-200 p-2">
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomAlertModalComponent, { className: "RoomAlertModalComponent", filePath: "apps/concierge/src/app/room-manager/room-alert-modal.component.ts", lineNumber: 102 });
})();

// apps/concierge/src/app/room-manager/room-modal.component.ts
function RoomModalComponent_Conditional_4_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const level_r2 = ctx.$implicit;
    \u0275\u0275property("value", level_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", level_r2.display_name || level_r2.name, " ");
  }
}
function RoomModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 18)(7, "mat-select", 24);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275repeaterCreate(9, RoomModalComponent_Conditional_4_For_10_Template, 2, 2, "mat-option", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-error");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r2.form.controls.zone.invalid && ctx_r2.form.controls.zone.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "RESOURCE.LEVEL"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 7, "APP.CONCIERGE.ROOMS_SELECT_LEVEL"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(11, 9, ctx_r2.levels));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 11, "APP.CONCIERGE.ROOMS_LEVEL_REQUIRED"));
  }
}
function RoomModalComponent_Conditional_6_Conditional_9_Template(rf, ctx) {
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
function RoomModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 18);
    \u0275\u0275element(7, "input", 26);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275conditionalCreate(9, RoomModalComponent_Conditional_6_Conditional_9_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r2.form.controls.name.invalid && ctx_r2.form.controls.name.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "FORM.NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 7, "FORM.NAME"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.form.controls.name.invalid ? 9 : -1);
  }
}
function RoomModalComponent_Conditional_7_Conditional_7_Template(rf, ctx) {
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
function RoomModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 18);
    \u0275\u0275element(5, "input", 28);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275conditionalCreate(7, RoomModalComponent_Conditional_7_Conditional_7_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r2.form.controls.email.invalid && ctx_r2.form.controls.email.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "FORM.EMAIL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 7, "FORM.EMAIL"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.form.controls.email.invalid ? 7 : -1);
  }
}
function RoomModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 18);
    \u0275\u0275element(5, "input", 30);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "FORM.DISPLAY_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "FORM.DISPLAY_NAME"));
  }
}
function RoomModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 31);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 18);
    \u0275\u0275element(5, "input", 32);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "APP.CONCIERGE.ROOMS_CODE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "APP.CONCIERGE.ROOMS_CODE"));
  }
}
function RoomModalComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "settings-toggle", 33);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("name", \u0275\u0275pipeBind1(2, 1, "COMMON.REQUIRE_APPROVAL"));
  }
}
function RoomModalComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "settings-toggle", 34);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("name", \u0275\u0275pipeBind1(2, 1, "COMMON.BOOKABLE"));
  }
}
function RoomModalComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "label", 35);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-counter", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r2.form.controls.capacity.invalid && ctx_r2.form.controls.capacity.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "COMMON.CAPACITY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("min", 0)("max", 256);
  }
}
function RoomModalComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 37);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 18);
    \u0275\u0275element(5, "textarea", 38);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "COMMON.DESCRIPTION"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "COMMON.DESCRIPTION"));
  }
}
function RoomModalComponent_Conditional_33_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 42);
    \u0275\u0275listener("removed", function RoomModalComponent_Conditional_33_For_9_Template_mat_chip_row_removed_0_listener() {
      const feature_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeFeature(feature_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "icon", 43);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r6 = ctx.$implicit;
    \u0275\u0275property("selectable", true)("removable", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r6, " ");
  }
}
function RoomModalComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 18)(5, "mat-chip-grid", 39, 1);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275repeaterCreate(8, RoomModalComponent_Conditional_33_For_9_Template, 4, 3, "mat-chip-row", 40, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(10, "input", 41);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("matChipInputTokenEnd", function RoomModalComponent_Conditional_33_Template_input_matChipInputTokenEnd_10_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addFeature($event));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const chipList_r7 = \u0275\u0275reference(6);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r2.form.controls.features.invalid && ctx_r2.form.controls.features.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, "COMMON.FEATURES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("aria-label", \u0275\u0275pipeBind1(7, 10, "COMMON.FEATRUES"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.feature_list);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 12, "COMMON.FEATURES"))("matChipInputFor", chipList_r7)("matChipInputSeparatorKeyCodes", ctx_r2.separators)("matChipInputAddOnBlur", true);
  }
}
function RoomModalComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 44);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "mat-form-field", 18);
    \u0275\u0275element(6, "input", 45);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 46);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("click", function RoomModalComponent_Conditional_34_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectItemfromMap());
    });
    \u0275\u0275elementStart(10, "icon");
    \u0275\u0275text(11, "place");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "EXPLORE.MAP_ID"));
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 5, "EXPLORE.MAP_ID_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(9, 7, "APP.CONCIERGE.POI_MAP_SELECT"));
  }
}
function RoomModalComponent_For_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tz_r9 = ctx.$implicit;
    \u0275\u0275property("value", tz_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tz_r9, " ");
  }
}
function RoomModalComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 22);
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
function RoomModalComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 47);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "image-list-field", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "COMMON.IMAGE"));
  }
}
function RoomModalComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 49);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 18);
    \u0275\u0275element(5, "input", 50);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r2.form.controls.timetable_url.invalid && ctx_r2.form.controls.timetable_url.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "COMMON.TIMETABLE_URL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 7, "COMMON.TIMETABLE_URL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 9, "SYSTEMS.URL_VALID"), " ");
  }
}
function RoomModalComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 51);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 18);
    \u0275\u0275element(5, "input", 52);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r2.form.controls.room_booking_url.invalid && ctx_r2.form.controls.room_booking_url.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "COMMON.ROOM_BOOKING_URL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 7, "COMMON.ROOM_BOOKING_URL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 9, "COMMON.URL_VALID"), " ");
  }
}
var _RoomModalComponent = class _RoomModalComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this.loading = false;
    this.timezones = signal(TIMEZONES_IANA);
    this.filtered_timezones = signal([]);
    this.levels = this._org.active_levels;
    this.form = generateSystemsFormFields(this._data.room);
    this.settings_form = new FormGroup({
      setup: new FormControl(0),
      breakdown: new FormControl(0)
    });
    this.encryption_levels = [
      { id: Te.None, name: "None" },
      { id: Te.Support, name: "Support" },
      { id: Te.Admin, name: "Admin" },
      { id: Te.NeverDisplay, name: "Never Display" }
    ];
    this.query_fn = (_) => ta({ q: _ }).pipe(map((resp) => resp.data));
    this.separators = [ENTER, COMMA, SPACE];
  }
  get feature_list() {
    return this.form.controls.features.value;
  }
  async ngOnInit() {
    const { details } = await Pu(this._org.organisation.id, "settings").toPromise();
    const overflow = getItemWithKeys(["events", "overflow"], details) || {};
    if (this._data.room.id && overflow[this._data.room.id]) {
      this.settings_form.patchValue(overflow[this._data.room.id]);
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
    const input2 = event.input;
    const value = event.value;
    const feature_list = this.feature_list;
    if ((value || "").trim()) {
      feature_list.push(value);
      this.form.controls.features.setValue(feature_list);
    }
    if (input2) {
      input2.value = "";
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
    const { details } = await Pu(this._org.organisation.id, "settings").toPromise();
    const overflow = getItemWithKeys(["events", "overflow"], details) || {};
    overflow[data.id] = this.settings_form.value;
    await lastValueFrom(Tu(this._org.organisation.id, {
      name: "settings",
      details: __spreadProps(__spreadValues({}, details), {
        events: __spreadProps(__spreadValues({}, details.events || {}), { overflow })
      }),
      description: ""
    })).catch((e) => notifyWarn("Unable to save room setup and breakdown times"));
    await lastValueFrom(data.id ? Oc(data.id, data) : Ec(data));
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
_RoomModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomModalComponent, selectors: [["room-form-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 52, vars: 44, consts: [["auto", "matAutocomplete"], ["chipList", ""], [3, "confirm", "heading", "loading"], ["system", "", 3, "formGroup"], [1, "flex", "flex-col"], [1, "flex", "space-x-2"], [1, "flex", "flex-1", "flex-col"], [1, "flex", "space-x-2", 3, "formGroup"], [1, "flex", "flex-1", "flex-col", "space-y-2"], ["for", "setup", 1, "flex", "items-center"], [1, "ml-2", "text-base", 3, "matTooltip"], ["name", "setup", "formControlName", "setup", 3, "min"], ["for", "breakdown", 1, "flex", "items-center"], ["name", "breakdown", "formControlName", "breakdown", 3, "min"], [1, "mb-4", "flex", "space-x-2"], [1, "flex", "flex-1", "flex-col", "pt-4"], [1, "mb-4", "flex", "flex-col"], ["for", "timezone"], ["appearance", "outline"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", "formControlName", "timezone", 3, "placeholder", "matAutocomplete"], [3, "value"], [3, "disabled"], ["for", "zone"], ["formControlName", "zone", 3, "placeholder"], ["for", "system-name"], ["matInput", "", "name", "system-name", "formControlName", "name", "required", "", 3, "placeholder"], ["for", "system-email"], ["matInput", "", "name", "system-email", "formControlName", "email", 3, "placeholder"], ["for", "display-name"], ["matInput", "", "name", "display-name", "formControlName", "display_name", 3, "placeholder"], ["for", "code-name"], ["matInput", "", "name", "code-name", "formControlName", "code", 3, "placeholder"], ["formControlName", "approval", 3, "name"], ["formControlName", "bookable", 3, "name"], ["for", "capacity"], ["name", "capacity", "formControlName", "capacity", 1, "w-full", 3, "min", "max"], ["for", "description"], ["matInput", "", "name", "description", "formControlName", "description", 3, "placeholder"], [3, "aria-label"], [3, "selectable", "removable"], [3, "matChipInputTokenEnd", "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed", "selectable", "removable"], ["matChipRemove", ""], ["for", "map_id"], ["matInput", "", "name", "map_id", "formControlName", "map_id", 3, "placeholder"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "border", "border-secondary", "text-secondary", 3, "click", "matTooltip"], ["for", "images"], ["name", "images", "formControlName", "images"], ["for", "timetable-url"], ["matInput", "", "name", "timetable-url", "formControlName", "timetable_url", 3, "placeholder"], ["for", "room-booking-url"], ["matInput", "", "name", "room-booking-url", "formControlName", "room_booking_url", 3, "placeholder"]], template: function RoomModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "fullscreen-modal-shell", 2);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("confirm", function RoomModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.save());
    });
    \u0275\u0275elementStart(3, "form", 3);
    \u0275\u0275conditionalCreate(4, RoomModalComponent_Conditional_4_Template, 15, 13, "div", 4);
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275conditionalCreate(6, RoomModalComponent_Conditional_6_Template, 10, 9, "div", 6);
    \u0275\u0275conditionalCreate(7, RoomModalComponent_Conditional_7_Template, 8, 9, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 5);
    \u0275\u0275conditionalCreate(9, RoomModalComponent_Conditional_9_Template, 7, 6, "div", 6);
    \u0275\u0275conditionalCreate(10, RoomModalComponent_Conditional_10_Template, 7, 6, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "label", 9);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementStart(16, "icon", 10);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275text(18, " info ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(19, "a-duration-field", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 8)(21, "label", 12);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementStart(24, "icon", 10);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275text(26, " info ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(27, "a-duration-field", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 14);
    \u0275\u0275conditionalCreate(29, RoomModalComponent_Conditional_29_Template, 3, 3, "div", 15);
    \u0275\u0275conditionalCreate(30, RoomModalComponent_Conditional_30_Template, 3, 3, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(31, RoomModalComponent_Conditional_31_Template, 5, 7, "div", 16);
    \u0275\u0275conditionalCreate(32, RoomModalComponent_Conditional_32_Template, 7, 6, "div", 4);
    \u0275\u0275conditionalCreate(33, RoomModalComponent_Conditional_33_Template, 12, 14, "div", 4);
    \u0275\u0275conditionalCreate(34, RoomModalComponent_Conditional_34_Template, 12, 9, "div", 4);
    \u0275\u0275elementStart(35, "div", 4)(36, "label", 17);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-form-field", 18)(40, "icon", 19);
    \u0275\u0275text(41, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 20);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "mat-autocomplete", null, 0);
    \u0275\u0275repeaterCreate(46, RoomModalComponent_For_47_Template, 2, 2, "mat-option", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(48, RoomModalComponent_Conditional_48_Template, 3, 4, "mat-option", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(49, RoomModalComponent_Conditional_49_Template, 5, 3, "div", 4);
    \u0275\u0275conditionalCreate(50, RoomModalComponent_Conditional_50_Template, 10, 11, "div", 4);
    \u0275\u0275conditionalCreate(51, RoomModalComponent_Conditional_51_Template, 10, 11, "div", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const auto_r10 = \u0275\u0275reference(45);
    \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 28, ctx.form.value.id ? "APP.CONCIERGE.ROOMS_EDIT" : "APP.CONCIERGE.ROOMS_NEW"))("loading", ctx.loading ? \u0275\u0275pipeBind1(2, 30, "APP.CONCIERGE.ROOMS_SAVING") : "");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.zone ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.form.controls.name ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.email ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.form.controls.display_name ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.display_name ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.settings_form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 32, "APP.CONCIERGE.ROOMS_DEFAULT_SETUP"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(17, 34, "APP.CONCIERGE.ROOMS_SETUP_INFO"));
    \u0275\u0275advance(3);
    \u0275\u0275property("min", 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 36, "APP.CONCIERGE.ROOMS_DEFAULT_BREAKDOWN"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(25, 38, "APP.CONCIERGE.ROOMS_BREAKDOWN_INFO"));
    \u0275\u0275advance(3);
    \u0275\u0275property("min", 0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.form.controls.approval ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.bookable ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.capacity ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.description ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.features ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.map_id ? 34 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 40, "COMMON.TIMEZONE"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(43, 42, "COMMON.TIMEZONE"))("matAutocomplete", auto_r10);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.filtered_timezones());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.timezones().length ? 48 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.images ? 49 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.timetable_url ? 50 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.room_booking_url ? 51 : -1);
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
  NgControlStatus,
  NgControlStatusGroup,
  RequiredValidator,
  FormGroupDirective,
  FormControlName,
  MatAutocompleteModule,
  MatAutocomplete,
  MatOption,
  MatAutocompleteTrigger,
  MatFormFieldModule,
  MatFormField,
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
            <form system [formGroup]="form">
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
                            <mat-select
                                formControlName="zone"
                                [placeholder]="
                                    'APP.CONCIERGE.ROOMS_SELECT_LEVEL'
                                        | translate
                                "
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
                                <input
                                    matInput
                                    name="system-name"
                                    [placeholder]="'FORM.NAME' | translate"
                                    formControlName="name"
                                    required
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
                <div class="flex space-x-2">
                    @if (form.controls.display_name) {
                        <div class="flex flex-1 flex-col">
                            <label for="display-name">{{
                                'FORM.DISPLAY_NAME' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
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
                @if (form.controls.description) {
                    <div class="flex flex-col">
                        <label for="description">{{
                            'COMMON.DESCRIPTION' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
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
                            <mat-chip-grid
                                #chipList
                                [aria-label]="'COMMON.FEATRUES' | translate"
                            >
                                @for (feature of feature_list; track feature) {
                                    <mat-chip-row
                                        [selectable]="true"
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
                                class="h-12 w-12 rounded border border-secondary text-secondary"
                                [matTooltip]="
                                    'APP.CONCIERGE.POI_MAP_SELECT' | translate
                                "
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomModalComponent, { className: "RoomModalComponent", filePath: "apps/concierge/src/app/room-manager/room-modal.component.ts", lineNumber: 482 });
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
    ]).pipe(switchMap(() => Pu(this._org.organisation.id, "room_alerts")), map((_) => _.details || {}), shareReplay(1));
    this.room_list = combineLatest([
      this._org.active_building,
      this._org.active_region,
      this._change
    ]).pipe(filter(([b, r]) => !!b?.id), switchMap(([bld, region]) => combineLatest([
      $c({
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
  editRoom(room = new Tr()) {
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
var _c3 = (a0) => ({ key: "type", name: a0, size: "8rem" });
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
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r6 ? "done" : "close");
  }
}
function RoomListComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RoomListComponent_ng_template_14_Conditional_0_Template, 3, 5, "div", 13);
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
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r7.status === "warn" ? "warning" : data_r7.status === "info" ? "info" : "close");
  }
}
function RoomListComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RoomListComponent_ng_template_16_Conditional_0_Template, 3, 14, "div", 15);
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
_RoomListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomListComponent, selectors: [["room-list"]], decls: 20, vars: 47, consts: [["name_template", ""], ["level_template", ""], ["bool_template", ""], ["alert_template", ""], ["action_template", ""], ["menu", "matMenu"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], ["empty_message", "No rooms for selected level or building", 1, "block", "min-w-[56rem]", "text-sm", 3, "data", "columns", "sortable"], [1, "h-20", "w-full"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "p-4"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded", "text-2xl", "text-white", 3, "bg-error", "bg-success"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded", "text-2xl", "text-white"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded", "text-2xl", "text-white", 3, "bg-warning", "bg-error", "bg-info", "text-warning-content", "text-error-content", "text-info-content", "matTooltip"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded", "text-2xl", "text-white", 3, "matTooltip"], [1, "mx-auto", "p-1"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], ["mat-menu-item", "", "target", "_blank", "ref", "noopener noreferrer", 3, "href"], ["className", "material-symbols-rounded", 1, "text-xl"]], template: function RoomListComponent_Template(rf, ctx) {
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
    \u0275\u0275template(10, RoomListComponent_ng_template_10_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(12, RoomListComponent_ng_template_12_Template, 4, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(14, RoomListComponent_ng_template_14_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(16, RoomListComponent_ng_template_16_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(18, RoomListComponent_ng_template_18_Template, 21, 8, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
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
                class="block min-w-[56rem] text-sm"
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
                        key: 'type',
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
            >
                <div class="">{{ data }}</div>
                <div class="font-mono text-[0.625rem] opacity-30">
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
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded text-2xl text-white"
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
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded text-2xl text-white"
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
                    class="h-12 w-12 rounded"
                    [matMenuTriggerFor]="menu"
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
      SanitizePipe,
      TranslatePipe,
      LevelPipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomListComponent, { className: "RoomListComponent", filePath: "apps/concierge/src/app/room-manager/room-list.component.ts", lineNumber: 188 });
})();

// apps/concierge/src/app/resource-manager/resource-manager-topbar.component.ts
function ResourceManagerTopbarComponent_Conditional_1_For_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const level_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_12_0 = \u0275\u0275pipeBind1(2, 1, level_r3.parent_id)) == null ? null : tmp_12_0.display_name, " ");
  }
}
function ResourceManagerTopbarComponent_Conditional_1_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 9)(1, "div", 10);
    \u0275\u0275conditionalCreate(2, ResourceManagerTopbarComponent_Conditional_1_For_7_Conditional_2_Template, 5, 3, "div", 11);
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
function ResourceManagerTopbarComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 2)(1, "mat-select", 7);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function ResourceManagerTopbarComponent_Conditional_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateZones($event));
    });
    \u0275\u0275elementStart(3, "mat-option", 8);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, ResourceManagerTopbarComponent_Conditional_1_For_7_Template, 5, 3, "mat-option", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.selected_zones)("placeholder", \u0275\u0275pipeBind1(2, 3, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "COMMON.LEVEL_ALL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(8, 7, ctx_r1.levels));
  }
}
function ResourceManagerTopbarComponent_Conditional_2_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const level_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_12_0 = \u0275\u0275pipeBind1(2, 1, level_r5.parent_id)) == null ? null : tmp_12_0.display_name, " ");
  }
}
function ResourceManagerTopbarComponent_Conditional_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 9)(1, "div", 10);
    \u0275\u0275conditionalCreate(2, ResourceManagerTopbarComponent_Conditional_2_For_4_Conditional_2_Template, 5, 3, "div", 11);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", level_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r5.display_name || level_r5.name, " ");
  }
}
function ResourceManagerTopbarComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 2)(1, "mat-select", 13);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function ResourceManagerTopbarComponent_Conditional_2_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateZones($event));
    });
    \u0275\u0275repeaterCreate(3, ResourceManagerTopbarComponent_Conditional_2_For_4_Template, 5, 3, "mat-option", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.selected_zones)("placeholder", \u0275\u0275pipeBind1(2, 2, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(5, 4, ctx_r1.levels));
  }
}
function ResourceManagerTopbarComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ResourceManagerTopbarComponent_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const uploadCSV_r7 = \u0275\u0275reference(5);
      return \u0275\u0275resetView(uploadCSV_r7.click());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "cloud_upload");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "input", 14, 0);
    \u0275\u0275listener("change", function ResourceManagerTopbarComponent_Conditional_4_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadCSVData($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 5);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("click", function ResourceManagerTopbarComponent_Conditional_4_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9, "download");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "APP.CONCIERGE.DESKS_LIST_UPLOAD"));
    \u0275\u0275advance(6);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 4, "APP.CONCIERGE.DESKS_LIST_DOWNLOAD"));
  }
}
function ResourceManagerTopbarComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ResourceManagerTopbarComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
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
var _ResourceManagerTopbarComponent = class _ResourceManagerTopbarComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._room_service = inject(RoomManagementService);
    this._desk_service = inject(DesksStateService);
    this._parking_service = inject(ParkingStateService);
    this._locker_service = inject(LockerStateService);
    this._org = inject(OrganisationService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this.tab_index = input.required();
    this.tab_name = input("");
    this.selected_zones = [];
    this.search_value = "";
    this.levels = combineLatest([
      this._org.active_building,
      this._org.active_region
    ]).pipe(map(([bld, region]) => this.use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld)));
    this.bookingRulesTooltip = () => {
      const tab = this.tab_name();
      if (tab === "rooms")
        return "APP.CONCIERGE.ROOMS_BOOKING_RULES";
      if (tab === "desks")
        return "APP.CONCIERGE.DESKS_BOOKING_RULES";
      if (tab === "parking")
        return "APP.CONCIERGE.PARKING_BOOKING_RULES";
      return "APP.CONCIERGE.LOCKERS_BOOKING_RULES";
    };
    this.updateZones = (zones) => {
      const zone_array = Array.isArray(zones) ? zones : [zones];
      const filtered_zones = zone_array.filter((z) => z !== "All");
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: filtered_zones.join(",") },
        queryParamsHandling: "merge"
      });
      const tab = this.tab_name();
      if (tab === "rooms") {
        this._room_service.setFilters({ zones: filtered_zones });
      } else if (tab === "desks") {
        this._desk_service.setFilters({ zones: filtered_zones });
      } else if (tab === "parking") {
        this._parking_service.setOptions({ zones: filtered_zones });
      } else if (tab === "lockers") {
        this._locker_service.setFilters({ zones: filtered_zones });
      }
    };
    this.setSearch = (str) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { search: str || null },
        queryParamsHandling: "merge"
      });
      const tab = this.tab_name();
      if (tab === "rooms") {
        this._room_service.setSearchString(str);
      } else if (tab === "desks") {
        this._desk_service.setFilters({ search: str });
      } else if (tab === "parking") {
        this._parking_service.setOptions({ search: str });
      } else if (tab === "lockers") {
        this._locker_service.setSearch(str);
      }
    };
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  manageRestrictions() {
    const tab = this.tab_name();
    const type_map = {
      rooms: "room",
      desks: "desk",
      parking: "parking",
      lockers: "locker"
    };
    this._dialog.open(BookingRulesModalComponent, {
      data: { type: type_map[tab] || "room" }
    });
  }
  async loadCSVData(event) {
    const data = await loadTextFileFromInputEvent(event).catch(([m, e]) => {
      notifyError(m);
      throw e;
    });
    try {
      const list = csvToJson(data) || [];
      this._desk_service.addDesks(list.map((_) => new Desk(__spreadProps(__spreadValues({}, _), {
        id: _.id || `desk-${randomInt(999999)}`
      }))));
    } catch (e) {
      console.error(e);
    }
  }
  downloadTemplate() {
    const desk = new Desk({
      id: "desk-123",
      name: "Test Desk",
      bookable: true,
      groups: ["test-desk-group", "desk-bookers"],
      features: ["Standing Desk", "Dual Monitor"]
    }).toJSON();
    delete desk.images;
    const data = jsonToCsv([desk]);
    downloadFile("desk-template.csv", data);
  }
  releaseAllLockers() {
    this._locker_service.releaseAllLockers(true);
  }
  async ngOnInit() {
    await this._org.initialised.pipe(first((_) => _)).toPromise();
    this.subscription("route.query", this._route.queryParamMap.subscribe(async (params) => {
      if (params.has("zone_ids")) {
        const zone_list = (params.get("zone_ids") || "").split(",");
        const zones = zone_list.filter((z) => z);
        this.selected_zones = this.tab_name() === "desks" && zones.length ? zones[0] : zones;
      }
      if (params.has("search")) {
        const search = params.get("search") || "";
        this.search_value = search;
        const tab = this.tab_name();
        if (tab === "rooms") {
          this._room_service.setSearchString(search);
        } else if (tab === "desks") {
          this._desk_service.setFilters({ search });
        } else if (tab === "parking") {
          this._parking_service.setOptions({ search });
        } else if (tab === "lockers") {
          this._locker_service.setSearch(search);
        }
      } else {
        this.search_value = "";
      }
    }));
  }
};
_ResourceManagerTopbarComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ResourceManagerTopbarComponent_BaseFactory;
  return function ResourceManagerTopbarComponent_Factory(__ngFactoryType__) {
    return (\u0275ResourceManagerTopbarComponent_BaseFactory || (\u0275ResourceManagerTopbarComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ResourceManagerTopbarComponent)))(__ngFactoryType__ || _ResourceManagerTopbarComponent);
  };
})();
_ResourceManagerTopbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResourceManagerTopbarComponent, selectors: [["resource-manager-topbar"]], inputs: { tab_index: [1, "tab_index"], tab_name: [1, "tab_name"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 11, vars: 7, consts: [["uploadCSV", ""], [1, "mb-4", "flex", "items-center", "space-x-2", "bg-base-100", "px-8"], ["appearance", "outline", 1, "no-subscript", "w-60"], [1, "w-2", "flex-1"], ["icon", "", "matRipple", "", 1, "mr-2", "h-12", "w-12", "rounded", "border", "border-error", "text-error", 3, "matTooltip"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "click", "matTooltip"], [3, "modelChange", "model"], [3, "ngModelChange", "ngModel", "placeholder"], ["value", "All"], [3, "value"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "file", 1, "hidden", 3, "change"], ["icon", "", "matRipple", "", 1, "mr-2", "h-12", "w-12", "rounded", "border", "border-error", "text-error", 3, "click", "matTooltip"]], template: function ResourceManagerTopbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275conditionalCreate(1, ResourceManagerTopbarComponent_Conditional_1_Template, 9, 9, "mat-form-field", 2)(2, ResourceManagerTopbarComponent_Conditional_2_Template, 6, 6, "mat-form-field", 2);
    \u0275\u0275element(3, "div", 3);
    \u0275\u0275conditionalCreate(4, ResourceManagerTopbarComponent_Conditional_4_Template, 10, 6);
    \u0275\u0275conditionalCreate(5, ResourceManagerTopbarComponent_Conditional_5_Template, 4, 3, "button", 4);
    \u0275\u0275elementStart(6, "button", 5);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("click", function ResourceManagerTopbarComponent_Template_button_click_6_listener() {
      return ctx.manageRestrictions();
    });
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9, "lock_open");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "searchbar", 6);
    \u0275\u0275listener("modelChange", function ResourceManagerTopbarComponent_Template_searchbar_modelChange_10_listener($event) {
      return ctx.setSearch($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.tab_name() === "desks" ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.tab_name() === "desks" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.tab_name() === "lockers" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 5, ctx.bookingRulesTooltip()));
    \u0275\u0275advance(4);
    \u0275\u0275property("model", ctx.search_value);
  }
}, dependencies: [
  AsyncPipe,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatSelect,
  MatOption,
  BuildingPipe,
  SearchbarComponent,
  FormsModule,
  NgControlStatus,
  NgModel,
  MatTooltipModule,
  MatTooltip,
  MatRippleModule,
  MatRipple,
  IconComponent,
  TranslatePipe
], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25rem;\n}\n/*# sourceMappingURL=resource-manager-topbar.component.css.map */"] });
var ResourceManagerTopbarComponent = _ResourceManagerTopbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResourceManagerTopbarComponent, [{
    type: Component,
    args: [{ selector: "resource-manager-topbar", template: `
        <div class="mb-4 flex items-center space-x-2 bg-base-100 px-8">
            @if (tab_name() === 'desks') {
                <mat-form-field appearance="outline" class="no-subscript w-60">
                    <mat-select
                        [ngModel]="selected_zones"
                        (ngModelChange)="updateZones($event)"
                        [placeholder]="'COMMON.LEVEL_ALL' | translate"
                    >
                        <mat-option value="All">
                            {{ 'COMMON.LEVEL_ALL' | translate }}
                        </mat-option>
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
            } @else {
                <mat-form-field appearance="outline" class="no-subscript w-60">
                    <mat-select
                        [ngModel]="selected_zones"
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
            }
            <div class="w-2 flex-1"></div>
            @if (tab_name() === 'desks') {
                <button
                    icon
                    matRipple
                    class="h-12 w-12 rounded bg-secondary text-secondary-content"
                    (click)="uploadCSV.click()"
                    [matTooltip]="'APP.CONCIERGE.DESKS_LIST_UPLOAD' | translate"
                >
                    <icon>cloud_upload</icon>
                </button>
                <input
                    #uploadCSV
                    type="file"
                    class="hidden"
                    (change)="loadCSVData($event)"
                />
                <button
                    icon
                    matRipple
                    class="h-12 w-12 rounded bg-secondary text-secondary-content"
                    (click)="downloadTemplate()"
                    [matTooltip]="
                        'APP.CONCIERGE.DESKS_LIST_DOWNLOAD' | translate
                    "
                >
                    <icon>download</icon>
                </button>
            }
            @if (tab_name() === 'lockers') {
                <button
                    icon
                    matRipple
                    class="mr-2 h-12 w-12 rounded border border-error text-error"
                    (click)="releaseAllLockers()"
                    [matTooltip]="
                        'APP.CONCIERGE.LOCKERS_RELEASE_ALL' | translate
                    "
                >
                    <icon>open_in_new</icon>
                </button>
            }
            <button
                icon
                matRipple
                class="h-12 w-12 rounded bg-secondary text-secondary-content"
                (click)="manageRestrictions()"
                [matTooltip]="bookingRulesTooltip() | translate"
            >
                <icon>lock_open</icon>
            </button>
            <searchbar
                [model]="search_value"
                (modelChange)="setSearch($event)"
            ></searchbar>
        </div>
    `, imports: [
      AsyncPipe,
      MatFormFieldModule,
      MatSelectModule,
      BuildingPipe,
      SearchbarComponent,
      FormsModule,
      MatTooltipModule,
      MatRippleModule,
      IconComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;2bc8ca7aace10e46f51053cb2cf4127500bd9fcd06c7c0d1d5dc88d70d997800;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/resource-manager/resource-manager-topbar.component.ts */\nmat-form-field {\n  height: 3.25rem;\n}\n/*# sourceMappingURL=resource-manager-topbar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResourceManagerTopbarComponent, { className: "ResourceManagerTopbarComponent", filePath: "apps/concierge/src/app/resource-manager/resource-manager-topbar.component.ts", lineNumber: 176 });
})();

// apps/concierge/src/app/resource-manager/resource-manager.component.ts
var _c03 = ["app-resource-manager", ""];
function ResourceManagerComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-tab", 9);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.TAB_ROOMS"));
  }
}
function ResourceManagerComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-tab", 9);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.TAB_DESKS"));
  }
}
function ResourceManagerComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-tab", 9);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.TAB_PARKING"));
  }
}
function ResourceManagerComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-tab", 9);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.TAB_LOCKERS"));
  }
}
function ResourceManagerComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "room-list", 12);
  }
}
function ResourceManagerComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "desks-manage", 12);
  }
}
function ResourceManagerComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "parking-space-list", 12);
  }
}
function ResourceManagerComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "locker-list", 12);
  }
}
var _ResourceManagerComponent = class _ResourceManagerComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._room_service = inject(RoomManagementService);
    this._desk_service = inject(DesksStateService);
    this._parking_service = inject(ParkingStateService);
    this._locker_service = inject(LockerStateService);
    this._org = inject(OrganisationService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this.selected_tab = signal(0);
    this.feature_list = settingSignal("features", []);
    this.show_rooms = computed(() => this.feature_list().includes("spaces") || this.feature_list().includes("zones"));
    this.show_desks = computed(() => this.feature_list().includes("desks"));
    this.show_parking = computed(() => this.feature_list().includes("parking"));
    this.show_lockers = computed(() => this.feature_list().includes("lockers"));
    this.available_tabs = computed(() => {
      const tabs = [];
      if (this.show_rooms())
        tabs.push({ name: "rooms", feature: "spaces" });
      if (this.show_desks())
        tabs.push({ name: "desks", feature: "desks" });
      if (this.show_parking())
        tabs.push({ name: "parking", feature: "parking" });
      if (this.show_lockers())
        tabs.push({ name: "lockers", feature: "lockers" });
      return tabs;
    });
    this.current_tab_name = computed(() => {
      const available = this.available_tabs();
      const index = this.selected_tab();
      return available[index]?.name || "";
    });
    this.TAB_NAMES = ["rooms", "desks", "parking", "lockers"];
    this.addButtonText = () => {
      const tab = this.current_tab_name();
      if (tab === "rooms")
        return "APP.CONCIERGE.ROOMS_ADD";
      if (tab === "desks")
        return "APP.CONCIERGE.DESKS_ADD";
      if (tab === "parking")
        return "APP.CONCIERGE.PARKING_ADD";
      return "APP.CONCIERGE.LOCKERS_ADD";
    };
    this.addItem = () => {
      const tab = this.current_tab_name();
      if (tab === "rooms")
        this._room_service.editRoom();
      else if (tab === "desks")
        this._desk_service.editDesk();
      else if (tab === "parking")
        this._parking_service.editSpace();
      else if (tab === "lockers")
        this._locker_service.editLockerBank();
    };
  }
  onTabChange(index) {
    this.selected_tab.set(index);
    const available = this.available_tabs();
    if (available[index]) {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { tab: available[index].name },
        queryParamsHandling: "merge"
      });
    }
  }
  async ngOnInit() {
    await this._org.initialised.pipe(first((_) => _)).toPromise();
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("tab")) {
        const tab_name = params.get("tab");
        const available = this.available_tabs();
        const tab_index = available.findIndex((t) => t.name === tab_name);
        if (tab_index >= 0) {
          this.selected_tab.set(tab_index);
        }
      }
    }));
  }
};
_ResourceManagerComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ResourceManagerComponent_BaseFactory;
  return function ResourceManagerComponent_Factory(__ngFactoryType__) {
    return (\u0275ResourceManagerComponent_BaseFactory || (\u0275ResourceManagerComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ResourceManagerComponent)))(__ngFactoryType__ || _ResourceManagerComponent);
  };
})();
_ResourceManagerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResourceManagerComponent, selectors: [["", "app-resource-manager", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c03, decls: 27, vars: 14, consts: [[1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "mb-2", "flex", "items-center", "justify-between", "px-8", "pb-2", "pt-4"], [1, "text-2xl", "font-medium"], [1, "flex", "items-center", "gap-2"], ["btn", "", "matRipple", "", 1, "w-48", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"], [1, "mx-8", "mb-4", "overflow-hidden", "rounded-md", "bg-base-200", 3, "selectedIndexChange", "selectedIndex"], [3, "label"], [3, "tab_index", "tab_name"], [1, "content-area", "flex-1"], [1, "relative", "block", "h-full", "w-full"]], template: function ResourceManagerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 1)(4, "header", 2)(5, "h2", 3);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 4)(9, "button", 5);
    \u0275\u0275listener("click", function ResourceManagerComponent_Template_button_click_9_listener() {
      return ctx.addItem();
    });
    \u0275\u0275elementStart(10, "div", 6)(11, "icon");
    \u0275\u0275text(12, "shadow_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 7);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(16, "mat-tab-group", 8);
    \u0275\u0275twoWayListener("selectedIndexChange", function ResourceManagerComponent_Template_mat_tab_group_selectedIndexChange_16_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selected_tab, $event) || (ctx.selected_tab = $event);
      return $event;
    });
    \u0275\u0275listener("selectedIndexChange", function ResourceManagerComponent_Template_mat_tab_group_selectedIndexChange_16_listener($event) {
      return ctx.onTabChange($event);
    });
    \u0275\u0275conditionalCreate(17, ResourceManagerComponent_Conditional_17_Template, 2, 3, "mat-tab", 9);
    \u0275\u0275conditionalCreate(18, ResourceManagerComponent_Conditional_18_Template, 2, 3, "mat-tab", 9);
    \u0275\u0275conditionalCreate(19, ResourceManagerComponent_Conditional_19_Template, 2, 3, "mat-tab", 9);
    \u0275\u0275conditionalCreate(20, ResourceManagerComponent_Conditional_20_Template, 2, 3, "mat-tab", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "resource-manager-topbar", 10);
    \u0275\u0275elementStart(22, "div", 11);
    \u0275\u0275conditionalCreate(23, ResourceManagerComponent_Conditional_23_Template, 1, 0, "room-list", 12)(24, ResourceManagerComponent_Conditional_24_Template, 1, 0, "desks-manage", 12)(25, ResourceManagerComponent_Conditional_25_Template, 1, 0, "parking-space-list", 12)(26, ResourceManagerComponent_Conditional_26_Template, 1, 0, "locker-list", 12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 10, "APP.CONCIERGE.RESOURCES_HEADER"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 12, ctx.addButtonText()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("selectedIndex", ctx.selected_tab);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.show_rooms() ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.show_desks() ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.show_parking() ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.show_lockers() ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("tab_index", ctx.selected_tab())("tab_name", ctx.current_tab_name());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.current_tab_name() === "rooms" ? 23 : ctx.current_tab_name() === "desks" ? 24 : ctx.current_tab_name() === "parking" ? 25 : ctx.current_tab_name() === "lockers" ? 26 : -1);
  }
}, dependencies: [
  ApplicationTopbarComponent,
  ApplicationSidebarComponent,
  MatTabsModule,
  MatTab,
  MatTabGroup,
  MatRippleModule,
  MatRipple,
  IconComponent,
  TranslatePipe,
  ResourceManagerTopbarComponent,
  RoomListComponent,
  DesksManageComponent,
  ParkingSpaceListComponent,
  LockerListComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=resource-manager.component.css.map */"] });
var ResourceManagerComponent = _ResourceManagerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResourceManagerComponent, [{
    type: Component,
    args: [{ selector: "[app-resource-manager]", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <header
                    class="mb-2 flex items-center justify-between px-8 pb-2 pt-4"
                >
                    <h2 class="text-2xl font-medium">
                        {{ 'APP.CONCIERGE.RESOURCES_HEADER' | translate }}
                    </h2>
                    <div class="flex items-center gap-2">
                        <button btn matRipple (click)="addItem()" class="w-48">
                            <div class="flex items-center space-x-2">
                                <icon>shadow_add</icon>
                                <div class="pr-2">
                                    {{ addButtonText() | translate }}
                                </div>
                            </div>
                        </button>
                    </div>
                </header>
                <mat-tab-group
                    class="mx-8 mb-4 overflow-hidden rounded-md bg-base-200"
                    [(selectedIndex)]="selected_tab"
                    (selectedIndexChange)="onTabChange($event)"
                >
                    @if (show_rooms()) {
                        <mat-tab
                            [label]="'APP.CONCIERGE.TAB_ROOMS' | translate"
                        ></mat-tab>
                    }
                    @if (show_desks()) {
                        <mat-tab
                            [label]="'APP.CONCIERGE.TAB_DESKS' | translate"
                        ></mat-tab>
                    }
                    @if (show_parking()) {
                        <mat-tab
                            [label]="'APP.CONCIERGE.TAB_PARKING' | translate"
                        ></mat-tab>
                    }
                    @if (show_lockers()) {
                        <mat-tab
                            [label]="'APP.CONCIERGE.TAB_LOCKERS' | translate"
                        ></mat-tab>
                    }
                </mat-tab-group>
                <resource-manager-topbar
                    [tab_index]="selected_tab()"
                    [tab_name]="current_tab_name()"
                ></resource-manager-topbar>
                <div class="content-area flex-1">
                    @if (current_tab_name() === 'rooms') {
                        <room-list
                            class="relative block h-full w-full"
                        ></room-list>
                    } @else if (current_tab_name() === 'desks') {
                        <desks-manage
                            class="relative block h-full w-full"
                        ></desks-manage>
                    } @else if (current_tab_name() === 'parking') {
                        <parking-space-list
                            class="relative block h-full w-full"
                        ></parking-space-list>
                    } @else if (current_tab_name() === 'lockers') {
                        <locker-list
                            class="relative block h-full w-full"
                        ></locker-list>
                    }
                </div>
            </main>
        </div>
    `, imports: [
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      MatTabsModule,
      MatRippleModule,
      IconComponent,
      TranslatePipe,
      ResourceManagerTopbarComponent,
      RoomListComponent,
      DesksManageComponent,
      ParkingSpaceListComponent,
      LockerListComponent
    ], styles: ["/* angular:styles/component:css;8c4a04aa555db379bf6f094c3ef1278e1f19da8fa9947c76cf85d1411aeb75c3;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/resource-manager/resource-manager.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=resource-manager.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResourceManagerComponent, { className: "ResourceManagerComponent", filePath: "apps/concierge/src/app/resource-manager/resource-manager.component.ts", lineNumber: 125 });
})();

// apps/concierge/src/app/resource-manager/resource-manager.module.ts
var ROUTES = [{ path: "", component: ResourceManagerComponent }];
var _ResourceManagerModule = class _ResourceManagerModule {
};
_ResourceManagerModule.\u0275fac = function ResourceManagerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ResourceManagerModule)();
};
_ResourceManagerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ResourceManagerModule });
_ResourceManagerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [ResourceManagerComponent, RouterModule.forChild(ROUTES)] });
var ResourceManagerModule = _ResourceManagerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResourceManagerModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [ResourceManagerComponent, RouterModule.forChild(ROUTES)]
    }]
  }], null, null);
})();
export {
  ResourceManagerModule
};
//# sourceMappingURL=resource-manager.module-NQUIB6B2.js.map
