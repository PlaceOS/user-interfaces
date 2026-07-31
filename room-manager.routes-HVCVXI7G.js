import {
  SelectMapItemModalComponent
} from "./chunk-7Q62T6N2.js";
import {
  BookingRulesModalComponent
} from "./chunk-XMLIW64G.js";
import "./chunk-CGFMTTKM.js";
import {
  CounterComponent
} from "./chunk-PJH725DX.js";
import "./chunk-NYQAQGIN.js";
import {
  SearchbarComponent
} from "./chunk-PKW2VQBJ.js";
import {
  DurationFieldComponent
} from "./chunk-4QMWP56D.js";
import "./chunk-4CUGEANF.js";
import {
  LevelPipe
} from "./chunk-HBTDJ2IJ.js";
import "./chunk-LSIGCXEV.js";
import "./chunk-SMC7AROQ.js";
import "./chunk-E67RB34J.js";
import "./chunk-4JJ4UXVU.js";
import "./chunk-EC3BUX54.js";
import {
  UserPipe
} from "./chunk-MCNOB3RM.js";
import {
  queryEventHistory,
  queryEvents
} from "./chunk-SFA7PIX2.js";
import "./chunk-QPYLHXZY.js";
import {
  BuildingPipe
} from "./chunk-JKT3SI4F.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-RF3QMZ4V.js";
import {
  SimpleTableComponent
} from "./chunk-ZPS4AYX2.js";
import "./chunk-HFLZHKJV.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  FullscreenModalShellComponent,
  ImageListFieldComponent,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSelect,
  MatSelectModule,
  SettingsToggleComponent
} from "./chunk-2CTEE7GN.js";
import {
  subMonths
} from "./chunk-EG43PLKO.js";
import {
  generateSystemsFormFields
} from "./chunk-NQZ4U3KU.js";
import "./chunk-HEJO3ISP.js";
import {
  subDays
} from "./chunk-I2AU6DIN.js";
import "./chunk-4ZLAN7LK.js";
import {
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  COMMA,
  Clipboard,
  CommonModule,
  Component,
  DatePipe,
  ENTER,
  FormField,
  FormsModule,
  He,
  IconComponent,
  Injectable,
  Injector,
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
  MatOption,
  MatPrefix,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgModel,
  OrganisationService,
  Qu,
  Router,
  SPACE,
  SanitizePipe,
  SettingsService,
  TIMEZONES_IANA,
  TranslatePipe,
  Wu,
  ca,
  computed,
  effect,
  form,
  getInvalidSignalFields,
  getItemWithKeys,
  getUnixTime,
  i18n,
  ia,
  inject,
  ks,
  notifyError,
  notifySuccess,
  notifyWarn,
  onFieldChange,
  patchSignalModel,
  resource,
  setClassMetadata,
  signal,
  startOfDay,
  ua,
  unique,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵpureFunctionV,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-XKGCBFU5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

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
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "label", 13);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-form-field", 7);
    \u0275\u0275element(22, "textarea", 14);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 8, "COMMON.STATUS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r0.form.status);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 10, "APP.CONCIERGE.ROOMS_ALERT_TYPE_NONE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 12, "APP.CONCIERGE.ROOMS_ALERT_TYPE_INFO"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 14, "APP.CONCIERGE.ROOMS_ALERT_TYPE_WARNING"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 16, "APP.CONCIERGE.ROOMS_ALERT_TYPE_CLOSED"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 18, "APP.CONCIERGE.ROOMS_ALERT_MSG"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r0.form.message);
    \u0275\u0275control();
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
var RoomAlertModalComponent = class _RoomAlertModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._org = inject(OrganisationService);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.room = this._data.room;
    this.model = signal(
      {
        status: "",
        message: ""
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model);
    const alert = this.room.alert || {};
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      status: alert.status ?? m.status,
      message: alert.message ?? m.message
    }));
  }
  async save() {
    this.loading.set(true);
    const metadata = await Wu(this._org.organisation.id, "room_alerts").catch((e) => {
      notifyError(i18n("APP.CONCIERGE.ROOMS_ALERT_LOAD_ERROR", {
        error: e.message || e
      }));
      this.loading.set(false);
      throw e;
    });
    const alert = this.model();
    if (alert.status === "") {
      delete metadata.details[this.room.id];
    } else {
      metadata.details[this.room.id] = [alert.status, alert.message];
    }
    await Qu(this._org.organisation.id, {
      name: "room_alerts",
      details: metadata.details,
      editors: metadata.editors || [],
      description: "Details for room alerts"
    }).catch((e) => {
      notifyError(i18n("APP.CONCIERGE.ROOMS_ALERT_SAVE_ERROR", {
        error: e.message || e
      }));
      this.loading.set(false);
      throw e;
    });
    notifySuccess(i18n("APP.CONCIERGE.ROOMS_ALERT_SAVE_SUCCESS"));
    this._dialog_ref.close(true);
  }
  static {
    this.\u0275fac = function RoomAlertModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoomAlertModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomAlertModalComponent, selectors: [["room-alert-modal"]], decls: 8, vars: 9, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "mx-auto", "my-2", "flex", "h-14", "w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium", "capitalize"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "max-h-[65vh]", "min-w-md", "flex-col", "overflow-x-hidden", "overflow-y-auto", "p-4"], [1, "flex", "h-64", "w-64", "flex-col", "items-center", "justify-center"], [1, "border-base-200", "flex", "justify-end", "border-t", "p-2"], ["for", "status"], ["appearance", "outline"], [3, "formField"], ["value", ""], ["value", "info"], ["value", "warn"], ["value", "closed"], ["for", "message"], ["matInput", "", 3, "formField"], ["diameter", "32"], [1, "mt-4"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"]], template: function RoomAlertModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, RoomAlertModalComponent_Conditional_4_Template, 3, 0, "button", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, RoomAlertModalComponent_Conditional_5_Template, 23, 20, "main", 3)(6, RoomAlertModalComponent_Conditional_6_Template, 5, 3, "div", 4);
        \u0275\u0275conditionalCreate(7, RoomAlertModalComponent_Conditional_7_Template, 4, 3, "footer", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 4, "APP.CONCIERGE.ROOMS_ALERT_HEADER", \u0275\u0275pureFunction1(7, _c0, ctx.room.display_name || ctx.room.name)), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 5 : 6);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 7 : -1);
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
      FormField,
      IconComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
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
            @if (!loading()) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
            <main
                class="flex max-h-[65vh] min-w-md flex-col overflow-x-hidden overflow-y-auto p-4"
            >
                <label for="status">{{ 'COMMON.STATUS' | translate }}</label>
                <mat-form-field appearance="outline">
                    <mat-select [formField]="form.status">
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
                        [formField]="form.message"
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
        @if (!loading()) {
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
      FormField,
      TranslatePipe,
      IconComponent
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomAlertModalComponent, { className: "RoomAlertModalComponent", filePath: "apps/concierge/src/app/room-manager/room-alert-modal.component.ts", lineNumber: 100 });
})();

// apps/concierge/src/app/room-manager/room-booking-history-modal.component.ts
var _c02 = (a0) => ({ name: a0 });
var _c1 = (a0) => ({ count: a0 });
var _c2 = (a0) => ({ key: "_expand", name: " ", content: a0, size: "3rem", sortable: false });
var _c3 = (a0, a1) => ({ key: "date", name: a0, content: a1, size: "5rem", sortable: true });
var _c4 = (a0, a1) => ({ key: "date", name: a0, content: a1, size: "9rem", sortable: false });
var _c5 = (a0) => ({ key: "title", name: a0 });
var _c6 = (a0, a1) => ({ key: "host", name: a0, content: a1 });
var _c7 = (a0) => ({ key: "attendee_count", name: a0, size: "6rem" });
var _c8 = (a0, a1) => ({ key: "status", name: a0, content: a1, size: "7rem", sortable: false });
var _c9 = (a0, a1, a2, a3, a4, a5, a6) => [a0, a1, a2, a3, a4, a5, a6];
var _c10 = () => [];
var _forTrack0 = ($index, $item) => $item.id;
function RoomBookingHistoryModalComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "mat-spinner", 22);
    \u0275\u0275elementEnd();
  }
}
function RoomBookingHistoryModalComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 26);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const date_r1 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 3, date_r1, "MMM"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 6, date_r1, "dd"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 9, date_r1, "yyyy"), " ");
  }
}
function RoomBookingHistoryModalComponent_ng_template_39_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = \u0275\u0275nextContext().row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, row_r2.date, ctx_r2.time_format), " \u2013 ", \u0275\u0275pipeBind2(3, 5, row_r2.date_end, ctx_r2.time_format), " ");
  }
}
function RoomBookingHistoryModalComponent_ng_template_39_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.ALL_DAY"), " ");
  }
}
function RoomBookingHistoryModalComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275conditionalCreate(1, RoomBookingHistoryModalComponent_ng_template_39_Conditional_1_Template, 4, 8, "div", 27)(2, RoomBookingHistoryModalComponent_ng_template_39_Conditional_2_Template, 3, 3, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275conditional(!row_r2.all_day && row_r2.duration <= 12 * 60 ? 1 : 2);
  }
}
function RoomBookingHistoryModalComponent_ng_template_41_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const email_r4 = \u0275\u0275nextContext().data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", email_r4, " ");
  }
}
function RoomBookingHistoryModalComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275pipe(1, "user");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "div", 28)(4, "div", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, RoomBookingHistoryModalComponent_ng_template_41_Conditional_6_Template, 2, 1, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const email_r4 = ctx.data;
    const user_r5 = \u0275\u0275pipeBind1(2, 4, \u0275\u0275pipeBind1(1, 2, email_r4));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", user_r5?.name || user_r5?.email || email_r4, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(user_r5?.name ? 6 : -1);
  }
}
function RoomBookingHistoryModalComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "button", 32);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function RoomBookingHistoryModalComponent_ng_template_43_Template_button_click_1_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleRow(row_r7));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r7 = ctx.row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 2, ctx_r2.expanded()[row_r7.id] ? "APP.CONCIERGE.ROOMS_HISTORY_COLLAPSE" : "APP.CONCIERGE.ROOMS_HISTORY_EXPAND"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.expanded()[row_r7.id] ? "expand_less" : "expand_more", " ");
  }
}
function RoomBookingHistoryModalComponent_ng_template_45_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "mat-spinner", 35);
    \u0275\u0275elementEnd();
  }
}
function RoomBookingHistoryModalComponent_ng_template_45_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.ROOMS_HISTORY_CHANGES_EMPTY"), " ");
  }
}
function RoomBookingHistoryModalComponent_ng_template_45_Conditional_2_Conditional_2_For_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const change_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", change_r8.type, " ");
  }
}
function RoomBookingHistoryModalComponent_ng_template_45_Conditional_2_Conditional_2_For_5_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r9, " ");
  }
}
function RoomBookingHistoryModalComponent_ng_template_45_Conditional_2_Conditional_2_For_5_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275repeaterCreate(1, RoomBookingHistoryModalComponent_ng_template_45_Conditional_2_Conditional_2_For_5_Conditional_12_For_2_Template, 2, 1, "span", 46, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const change_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(change_r8.changed_fields);
  }
}
function RoomBookingHistoryModalComponent_ng_template_45_Conditional_2_Conditional_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 39)(1, "icon", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 41)(4, "div", 42)(5, "span", 43);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, RoomBookingHistoryModalComponent_ng_template_45_Conditional_2_Conditional_2_For_5_Conditional_8_Template, 2, 1, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 26);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, RoomBookingHistoryModalComponent_ng_template_45_Conditional_2_Conditional_2_For_5_Conditional_12_Template, 3, 0, "div", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const change_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.actionIcon(change_r8.action), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, ctx_r2.actionLabel(change_r8.action)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(change_r8.type ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 7, change_r8.updated_at * 1e3, "medium"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(change_r8.changed_fields?.length ? 12 : -1);
  }
}
function RoomBookingHistoryModalComponent_ng_template_45_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 38);
    \u0275\u0275repeaterCreate(4, RoomBookingHistoryModalComponent_ng_template_45_Conditional_2_Conditional_2_For_5_Template, 13, 10, "li", 39, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const changes_r10 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.ROOMS_HISTORY_CHANGES_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(changes_r10);
  }
}
function RoomBookingHistoryModalComponent_ng_template_45_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275conditionalCreate(1, RoomBookingHistoryModalComponent_ng_template_45_Conditional_2_Conditional_1_Template, 3, 3, "div", 36)(2, RoomBookingHistoryModalComponent_ng_template_45_Conditional_2_Conditional_2_Template, 6, 3);
  }
  if (rf & 2) {
    const row_r11 = \u0275\u0275nextContext().row;
    const changes_r12 = \u0275\u0275storeLet(\u0275\u0275nextContext().histories()[row_r11.id] || \u0275\u0275pureFunction0(2, _c10));
    \u0275\u0275advance();
    \u0275\u0275conditional(!changes_r12.length ? 1 : 2);
  }
}
function RoomBookingHistoryModalComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275conditionalCreate(1, RoomBookingHistoryModalComponent_ng_template_45_Conditional_1_Template, 2, 0, "div", 34)(2, RoomBookingHistoryModalComponent_ng_template_45_Conditional_2_Template, 3, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r11 = ctx.row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.history_loading()[row_r11.id] ? 1 : 2);
  }
}
function RoomBookingHistoryModalComponent_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r13 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-error", row_r13.status === "declined" && !row_r13.deleted)("text-error-content", row_r13.status === "declined" && !row_r13.deleted)("bg-neutral", row_r13.deleted)("text-neutral-content", row_r13.deleted)("bg-warning", row_r13.status === "tentative" && !row_r13.deleted)("text-warning-content", row_r13.status === "tentative" && !row_r13.deleted);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 13, row_r13.deleted ? "APP.CONCIERGE.BOOKING_STATUS_DELETED" : row_r13.status === "declined" ? "APP.CONCIERGE.BOOKING_STATUS_DECLINED" : row_r13.status === "tentative" ? "APP.CONCIERGE.BOOKING_STATUS_PENDING" : "APP.CONCIERGE.BOOKING_STATUS_APPROVED"), " ");
  }
}
var RoomBookingHistoryModalComponent = class _RoomBookingHistoryModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this.room = this._data.room;
    this.period = signal(
      "week",
      ...ngDevMode ? [{ debugName: "period" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.expanded = signal(
      {},
      ...ngDevMode ? [{ debugName: "expanded" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.histories = signal(
      {},
      ...ngDevMode ? [{ debugName: "histories" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.history_loading = signal(
      {},
      ...ngDevMode ? [{ debugName: "history_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._events = signal(
      [],
      ...ngDevMode ? [{ debugName: "_events" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.bookings = computed(
      () => [...this._events()].sort((a, b) => b.date - a.date).map((event) => __spreadProps(__spreadValues({}, event), {
        attendee_count: (event.attendees || []).length
      })),
      ...ngDevMode ? [{ debugName: "bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loadHistory();
  }
  get time_format() {
    return this._settings.time_format;
  }
  setPeriod(period) {
    if (this.period() === period)
      return;
    this.period.set(period);
    this.loadHistory();
  }
  async loadHistory() {
    this.loading.set(true);
    this.expanded.set({});
    this.histories.set({});
    this.history_loading.set({});
    const { start, end } = this.periodRange();
    const events = await queryEvents({
      system_ids: this.room.id,
      period_start: getUnixTime(start),
      period_end: getUnixTime(end),
      include_cancelled: true
    }).catch(() => []);
    this._events.set(events || []);
    this.loading.set(false);
  }
  toggleRow(row) {
    if (!row?.id)
      return;
    const is_expanded = !!this.expanded()[row.id];
    this.expanded.update((state) => __spreadProps(__spreadValues({}, state), {
      [row.id]: !is_expanded
    }));
    if (!is_expanded && !this.histories()[row.id]) {
      this.loadRowHistory(row);
    }
  }
  actionIcon(action) {
    switch (action) {
      case "create":
        return "add_circle";
      case "update":
        return "edit";
      case "cancel":
      case "delete":
        return "delete";
      case "approve":
        return "check_circle";
      case "decline":
        return "cancel";
      default:
        return "history";
    }
  }
  actionLabel(action) {
    switch (action) {
      case "create":
        return "APP.CONCIERGE.ROOMS_HISTORY_ACTION_CREATE";
      case "update":
        return "APP.CONCIERGE.ROOMS_HISTORY_ACTION_UPDATE";
      case "cancel":
        return "APP.CONCIERGE.ROOMS_HISTORY_ACTION_CANCEL";
      case "delete":
        return "APP.CONCIERGE.ROOMS_HISTORY_ACTION_DELETE";
      case "approve":
        return "APP.CONCIERGE.ROOMS_HISTORY_ACTION_APPROVE";
      case "decline":
        return "APP.CONCIERGE.ROOMS_HISTORY_ACTION_DECLINE";
      default:
        return action || "APP.CONCIERGE.ROOMS_HISTORY_ACTION_UNKNOWN";
    }
  }
  async loadRowHistory(row) {
    this.history_loading.update((state) => __spreadProps(__spreadValues({}, state), { [row.id]: true }));
    const { start, end } = this.periodRange();
    const params = {
      period_start: getUnixTime(start),
      period_end: getUnixTime(end)
    };
    if (row.ical_uid) {
      params.ical_uid = row.ical_uid;
    } else {
      params.system_ids = this.room.id;
    }
    const changes = await queryEventHistory(params).catch(() => []);
    const sorted = [...changes || []].sort((a, b) => (b.updated_at || 0) - (a.updated_at || 0));
    this.histories.update((state) => __spreadProps(__spreadValues({}, state), { [row.id]: sorted }));
    this.history_loading.update((state) => __spreadProps(__spreadValues({}, state), {
      [row.id]: false
    }));
  }
  periodRange() {
    const end = /* @__PURE__ */ new Date();
    let start;
    switch (this.period()) {
      case "week":
        start = startOfDay(subDays(end, 7));
        break;
      case "month":
        start = startOfDay(subMonths(end, 1));
        break;
      case "3_months":
        start = startOfDay(subMonths(end, 3));
        break;
      case "12_months":
        start = startOfDay(subMonths(end, 12));
        break;
    }
    return { start, end };
  }
  static {
    this.\u0275fac = function RoomBookingHistoryModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoomBookingHistoryModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomBookingHistoryModalComponent, selectors: [["room-booking-history-modal"]], features: [\u0275\u0275ProvidersFeature([UserPipe])], decls: 49, vars: 72, consts: [["date_template", ""], ["period_template", ""], ["user_template", ""], ["expand_template", ""], ["history_template", ""], ["status_template", ""], [1, "bg-base-200", "flex", "h-14", "w-full", "flex-none", "items-center", "justify-between", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium", "capitalize"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "min-h-0", "w-full", "flex-1", "flex-col", "overflow-hidden"], [1, "flex", "items-center", "justify-between", "px-4", "pt-2", "pb-3"], [1, "text-sm", "opacity-60"], ["appearance", "outline", 1, "no-subscript", "w-48"], [3, "ngModelChange", "ngModel"], ["value", "week"], ["value", "month"], ["value", "3_months"], ["value", "12_months"], [1, "relative", "min-h-0", "flex-1"], [1, "bg-base-100/60", "absolute", "inset-0", "z-10", "flex", "items-center", "justify-center"], [1, "relative", "z-0", "h-full", "w-full", "overflow-auto", "px-4", "pb-4"], [1, "block", "min-w-3xl", "text-sm", 3, "data", "columns", "empty_message", "sortable", "child_template", "show_children"], ["diameter", "32"], [1, "flex", "w-full", "flex-col", "items-center", "justify-center", "py-2"], [1, "opacity-60"], [1, "text-xl"], [1, "text-xs", "opacity-60"], [1, "p-2"], [1, "flex", "flex-col", "justify-center", "px-4", "py-2"], [1, "select-all"], [1, "max-w-48", "truncate", "text-xs", "opacity-30", "select-all"], [1, "flex", "h-full", "w-full", "items-center", "justify-center"], ["icon", "", "default", "", "matRipple", "", 3, "click"], [1, "bg-base-200/40", "px-6", "py-4"], [1, "flex", "items-center", "justify-center", "py-6"], ["diameter", "24"], [1, "py-4", "text-center", "text-sm", "opacity-60"], [1, "mb-2", "text-xs", "font-medium", "uppercase", "opacity-60"], [1, "flex", "flex-col", "space-y-2"], [1, "border-base-300", "bg-base-100", "flex", "items-start", "space-x-3", "rounded-sm", "border", "p-3"], [1, "text-xl", "opacity-60"], [1, "flex", "flex-1", "flex-col"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "font-medium", "capitalize"], [1, "bg-base-200", "rounded-2xl", "px-2", "py-0.5", "font-mono", "text-[0.625rem]", "opacity-70"], [1, "mt-1", "flex", "flex-wrap", "gap-1"], [1, "bg-base-300", "rounded-2xl", "px-2", "py-0.5", "font-mono", "text-[0.625rem]"], [1, "px-4", "py-2"], [1, "bg-success", "text-success-content", "inline-flex", "rounded-full", "px-3", "py-1", "text-xs"]], template: function RoomBookingHistoryModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 6)(1, "h2", 7);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 8)(5, "icon");
        \u0275\u0275text(6, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "main", 9)(8, "div", 10)(9, "div", 11);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "mat-form-field", 12)(13, "mat-select", 13);
        \u0275\u0275listener("ngModelChange", function RoomBookingHistoryModalComponent_Template_mat_select_ngModelChange_13_listener($event) {
          return ctx.setPeriod($event);
        });
        \u0275\u0275elementStart(14, "mat-option", 14);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "mat-option", 15);
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-option", 16);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "mat-option", 17);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 18);
        \u0275\u0275conditionalCreate(27, RoomBookingHistoryModalComponent_Conditional_27_Template, 2, 0, "div", 19);
        \u0275\u0275elementStart(28, "div", 20);
        \u0275\u0275element(29, "simple-table", 21);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(37, RoomBookingHistoryModalComponent_ng_template_37_Template, 10, 12, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(39, RoomBookingHistoryModalComponent_ng_template_39_Template, 3, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(41, RoomBookingHistoryModalComponent_ng_template_41_Template, 7, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(43, RoomBookingHistoryModalComponent_ng_template_43_Template, 5, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(45, RoomBookingHistoryModalComponent_ng_template_45_Template, 3, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(47, RoomBookingHistoryModalComponent_ng_template_47_Template, 4, 15, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const date_template_r14 = \u0275\u0275reference(38);
        const period_template_r15 = \u0275\u0275reference(40);
        const user_template_r16 = \u0275\u0275reference(42);
        const expand_template_r17 = \u0275\u0275reference(44);
        const history_template_r18 = \u0275\u0275reference(46);
        const status_template_r19 = \u0275\u0275reference(48);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 14, "APP.CONCIERGE.ROOMS_HISTORY_HEADER", \u0275\u0275pureFunction1(42, _c02, ctx.room.display_name || ctx.room.name)), " ");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 17, "APP.CONCIERGE.ROOMS_HISTORY_COUNT", \u0275\u0275pureFunction1(44, _c1, ctx.bookings().length)), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.period());
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 20, "APP.CONCIERGE.ROOMS_HISTORY_PERIOD_WEEK"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 22, "APP.CONCIERGE.ROOMS_HISTORY_PERIOD_MONTH"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 24, "APP.CONCIERGE.ROOMS_HISTORY_PERIOD_3_MONTHS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 26, "APP.CONCIERGE.ROOMS_HISTORY_PERIOD_12_MONTHS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading() ? 27 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("data", ctx.bookings())("columns", \u0275\u0275pureFunction7(64, _c9, \u0275\u0275pureFunction1(46, _c2, expand_template_r17), \u0275\u0275pureFunction2(48, _c3, \u0275\u0275pipeBind1(30, 28, "FORM.DATE"), date_template_r14), \u0275\u0275pureFunction2(51, _c4, \u0275\u0275pipeBind1(31, 30, "FORM.PERIOD"), period_template_r15), \u0275\u0275pureFunction1(54, _c5, \u0275\u0275pipeBind1(32, 32, "FORM.TITLE")), \u0275\u0275pureFunction2(56, _c6, \u0275\u0275pipeBind1(33, 34, "FORM.HOST"), user_template_r16), \u0275\u0275pureFunction1(59, _c7, \u0275\u0275pipeBind1(34, 36, "CALENDAR_EVENT.ATTENDEES")), \u0275\u0275pureFunction2(61, _c8, \u0275\u0275pipeBind1(35, 38, "COMMON.STATUS"), status_template_r19)))("empty_message", \u0275\u0275pipeBind1(36, 40, "APP.CONCIERGE.ROOMS_HISTORY_EMPTY"))("sortable", true)("child_template", history_template_r18)("show_children", ctx.expanded());
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      NgControlStatus,
      NgModel,
      MatDialogModule,
      MatDialogClose,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      IconComponent,
      SimpleTableComponent,
      AsyncPipe,
      DatePipe,
      TranslatePipe,
      UserPipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=room-booking-history-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomBookingHistoryModalComponent, [{
    type: Component,
    args: [{ selector: "room-booking-history-modal", template: `
        <header
            class="bg-base-200 flex h-14 w-full flex-none items-center justify-between border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium capitalize">
                {{
                    'APP.CONCIERGE.ROOMS_HISTORY_HEADER'
                        | translate: { name: room.display_name || room.name }
                }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="flex min-h-0 w-full flex-1 flex-col overflow-hidden">
            <div class="flex items-center justify-between px-4 pt-2 pb-3">
                <div class="text-sm opacity-60">
                    {{
                        'APP.CONCIERGE.ROOMS_HISTORY_COUNT'
                            | translate: { count: bookings().length }
                    }}
                </div>
                <mat-form-field appearance="outline" class="no-subscript w-48">
                    <mat-select
                        [ngModel]="period()"
                        (ngModelChange)="setPeriod($event)"
                    >
                        <mat-option value="week">
                            {{
                                'APP.CONCIERGE.ROOMS_HISTORY_PERIOD_WEEK'
                                    | translate
                            }}
                        </mat-option>
                        <mat-option value="month">
                            {{
                                'APP.CONCIERGE.ROOMS_HISTORY_PERIOD_MONTH'
                                    | translate
                            }}
                        </mat-option>
                        <mat-option value="3_months">
                            {{
                                'APP.CONCIERGE.ROOMS_HISTORY_PERIOD_3_MONTHS'
                                    | translate
                            }}
                        </mat-option>
                        <mat-option value="12_months">
                            {{
                                'APP.CONCIERGE.ROOMS_HISTORY_PERIOD_12_MONTHS'
                                    | translate
                            }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <div class="relative min-h-0 flex-1">
                @if (loading()) {
                    <div
                        class="bg-base-100/60 absolute inset-0 z-10 flex items-center justify-center"
                    >
                        <mat-spinner diameter="32"></mat-spinner>
                    </div>
                }
                <div class="relative z-0 h-full w-full overflow-auto px-4 pb-4">
                    <simple-table
                        class="block min-w-3xl text-sm"
                        [data]="bookings()"
                        [columns]="[
                            {
                                key: '_expand',
                                name: ' ',
                                content: expand_template,
                                size: '3rem',
                                sortable: false,
                            },
                            {
                                key: 'date',
                                name: 'FORM.DATE' | translate,
                                content: date_template,
                                size: '5rem',
                                sortable: true,
                            },
                            {
                                key: 'date',
                                name: 'FORM.PERIOD' | translate,
                                content: period_template,
                                size: '9rem',
                                sortable: false,
                            },
                            {
                                key: 'title',
                                name: 'FORM.TITLE' | translate,
                            },
                            {
                                key: 'host',
                                name: 'FORM.HOST' | translate,
                                content: user_template,
                            },
                            {
                                key: 'attendee_count',
                                name: 'CALENDAR_EVENT.ATTENDEES' | translate,
                                size: '6rem',
                            },
                            {
                                key: 'status',
                                name: 'COMMON.STATUS' | translate,
                                content: status_template,
                                size: '7rem',
                                sortable: false,
                            },
                        ]"
                        [empty_message]="
                            'APP.CONCIERGE.ROOMS_HISTORY_EMPTY' | translate
                        "
                        [sortable]="true"
                        [child_template]="history_template"
                        [show_children]="expanded()"
                    ></simple-table>
                </div>
            </div>
            <ng-template #date_template let-date="data">
                <div
                    class="flex w-full flex-col items-center justify-center py-2"
                >
                    <div class="opacity-60">{{ date | date: 'MMM' }}</div>
                    <div class="text-xl">{{ date | date: 'dd' }}</div>
                    <div class="text-xs opacity-60">
                        {{ date | date: 'yyyy' }}
                    </div>
                </div>
            </ng-template>
            <ng-template #period_template let-row="row">
                <div class="p-2">
                    @if (!row.all_day && row.duration <= 12 * 60) {
                        <div class="p-2">
                            {{ row.date | date: time_format }} &ndash;
                            {{ row.date_end | date: time_format }}
                        </div>
                    } @else {
                        <div class="p-2">
                            {{ 'COMMON.ALL_DAY' | translate }}
                        </div>
                    }
                </div>
            </ng-template>
            <ng-template #user_template let-email="data">
                @let user = email | user | async;
                <div class="flex flex-col justify-center px-4 py-2">
                    <div class="select-all">
                        {{ user?.name || user?.email || email }}
                    </div>
                    @if (user?.name) {
                        <div
                            class="max-w-48 truncate text-xs opacity-30 select-all"
                        >
                            {{ email }}
                        </div>
                    }
                </div>
            </ng-template>
            <ng-template #expand_template let-row="row">
                <div class="flex h-full w-full items-center justify-center">
                    <button
                        icon
                        default
                        matRipple
                        [attr.aria-label]="
                            (expanded()[row.id]
                                ? 'APP.CONCIERGE.ROOMS_HISTORY_COLLAPSE'
                                : 'APP.CONCIERGE.ROOMS_HISTORY_EXPAND'
                            ) | translate
                        "
                        (click)="toggleRow(row)"
                    >
                        <icon>
                            {{
                                expanded()[row.id]
                                    ? 'expand_less'
                                    : 'expand_more'
                            }}
                        </icon>
                    </button>
                </div>
            </ng-template>
            <ng-template #history_template let-row="row">
                <div class="bg-base-200/40 px-6 py-4">
                    @if (history_loading()[row.id]) {
                        <div class="flex items-center justify-center py-6">
                            <mat-spinner diameter="24"></mat-spinner>
                        </div>
                    } @else {
                        @let changes = histories()[row.id] || [];
                        @if (!changes.length) {
                            <div class="py-4 text-center text-sm opacity-60">
                                {{
                                    'APP.CONCIERGE.ROOMS_HISTORY_CHANGES_EMPTY'
                                        | translate
                                }}
                            </div>
                        } @else {
                            <div
                                class="mb-2 text-xs font-medium uppercase opacity-60"
                            >
                                {{
                                    'APP.CONCIERGE.ROOMS_HISTORY_CHANGES_HEADER'
                                        | translate
                                }}
                            </div>
                            <ul class="flex flex-col space-y-2">
                                @for (change of changes; track change.id) {
                                    <li
                                        class="border-base-300 bg-base-100 flex items-start space-x-3 rounded-sm border p-3"
                                    >
                                        <icon class="text-xl opacity-60">
                                            {{ actionIcon(change.action) }}
                                        </icon>
                                        <div class="flex flex-1 flex-col">
                                            <div
                                                class="flex items-center space-x-2 text-sm"
                                            >
                                                <span
                                                    class="font-medium capitalize"
                                                >
                                                    {{
                                                        actionLabel(
                                                            change.action
                                                        ) | translate
                                                    }}
                                                </span>
                                                @if (change.type) {
                                                    <span
                                                        class="bg-base-200 rounded-2xl px-2 py-0.5 font-mono text-[0.625rem] opacity-70"
                                                    >
                                                        {{ change.type }}
                                                    </span>
                                                }
                                            </div>
                                            <div class="text-xs opacity-60">
                                                {{
                                                    change.updated_at * 1000
                                                        | date: 'medium'
                                                }}
                                            </div>
                                            @if (
                                                change.changed_fields?.length
                                            ) {
                                                <div
                                                    class="mt-1 flex flex-wrap gap-1"
                                                >
                                                    @for (
                                                        field of change.changed_fields;
                                                        track field
                                                    ) {
                                                        <span
                                                            class="bg-base-300 rounded-2xl px-2 py-0.5 font-mono text-[0.625rem]"
                                                        >
                                                            {{ field }}
                                                        </span>
                                                    }
                                                </div>
                                            }
                                        </div>
                                    </li>
                                }
                            </ul>
                        }
                    }
                </div>
            </ng-template>
            <ng-template #status_template let-row="row">
                <div class="px-4 py-2">
                    <div
                        class="bg-success text-success-content inline-flex rounded-full px-3 py-1 text-xs"
                        [class.bg-error]="
                            row.status === 'declined' && !row.deleted
                        "
                        [class.text-error-content]="
                            row.status === 'declined' && !row.deleted
                        "
                        [class.bg-neutral]="row.deleted"
                        [class.text-neutral-content]="row.deleted"
                        [class.bg-warning]="
                            row.status === 'tentative' && !row.deleted
                        "
                        [class.text-warning-content]="
                            row.status === 'tentative' && !row.deleted
                        "
                    >
                        {{
                            (row.deleted
                                ? 'APP.CONCIERGE.BOOKING_STATUS_DELETED'
                                : row.status === 'declined'
                                  ? 'APP.CONCIERGE.BOOKING_STATUS_DECLINED'
                                  : row.status === 'tentative'
                                    ? 'APP.CONCIERGE.BOOKING_STATUS_PENDING'
                                    : 'APP.CONCIERGE.BOOKING_STATUS_APPROVED'
                            ) | translate
                        }}
                    </div>
                </div>
            </ng-template>
        </main>
    `, providers: [UserPipe], imports: [
      CommonModule,
      FormsModule,
      MatDialogModule,
      MatRippleModule,
      MatFormFieldModule,
      MatSelectModule,
      MatProgressSpinnerModule,
      IconComponent,
      SimpleTableComponent,
      TranslatePipe,
      UserPipe
    ], styles: ["/* angular:styles/component:css;bd490373c0544e583f5f7401f056eb61533265943ea8a69bc60ef888feccb8ac;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/room-manager/room-booking-history-modal.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=room-booking-history-modal.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomBookingHistoryModalComponent, { className: "RoomBookingHistoryModalComponent", filePath: "apps/concierge/src/app/room-manager/room-booking-history-modal.component.ts", lineNumber: 356 });
})();

// apps/concierge/src/app/room-manager/room-modal.component.ts
function RoomModalComponent_Conditional_4_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20);
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
function RoomModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 17)(7, "mat-select", 23);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275repeaterCreate(9, RoomModalComponent_Conditional_4_For_10_Template, 2, 2, "mat-option", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(11, "mat-error");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.zone().invalid() && ctx_r1.form.zone().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "RESOURCE.LEVEL"));
    \u0275\u0275advance(5);
    \u0275\u0275property("formField", ctx_r1.form.zone)("placeholder", \u0275\u0275pipeBind1(8, 8, "APP.CONCIERGE.ROOMS_SELECT_LEVEL"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.levels());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 10, "APP.CONCIERGE.ROOMS_LEVEL_REQUIRED"));
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
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 17);
    \u0275\u0275element(7, "input", 25);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(9, RoomModalComponent_Conditional_6_Conditional_9_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.name().invalid() && ctx_r1.form.name().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "FORM.NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 8, "FORM.NAME"))("formField", ctx_r1.form.name);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.name().invalid() ? 9 : -1);
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
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 17);
    \u0275\u0275element(5, "input", 25);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(7, RoomModalComponent_Conditional_7_Conditional_7_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.email().invalid() && ctx_r1.form.email().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "FORM.EMAIL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 8, "FORM.EMAIL"))("formField", ctx_r1.form.email);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.email().invalid() ? 7 : -1);
  }
}
function RoomModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 17);
    \u0275\u0275element(5, "input", 25);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "FORM.DISPLAY_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "FORM.DISPLAY_NAME"))("formField", ctx_r1.form.display_name);
    \u0275\u0275control();
  }
}
function RoomModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 28);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 17);
    \u0275\u0275element(5, "input", 25);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "COMMON.CODE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "COMMON.CODE"))("formField", ctx_r1.form.code);
    \u0275\u0275control();
  }
}
function RoomModalComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "settings-toggle", 29);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(2, 2, "COMMON.REQUIRE_APPROVAL"))("formField", ctx_r1.form.approval);
    \u0275\u0275control();
  }
}
function RoomModalComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "settings-toggle", 29);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(2, 2, "COMMON.BOOKABLE"))("formField", ctx_r1.form.bookable);
    \u0275\u0275control();
  }
}
function RoomModalComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "label", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-counter", 31);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.capacity().invalid() && ctx_r1.form.capacity().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "COMMON.CAPACITY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r1.form.capacity)("min", 0)("max", 256);
    \u0275\u0275control();
  }
}
function RoomModalComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 32);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 17);
    \u0275\u0275element(5, "textarea", 25);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "COMMON.DESCRIPTION"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "COMMON.DESCRIPTION"))("formField", ctx_r1.form.description);
    \u0275\u0275control();
  }
}
function RoomModalComponent_Conditional_33_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 35);
    \u0275\u0275listener("removed", function RoomModalComponent_Conditional_33_For_9_Template_mat_chip_row_removed_0_listener() {
      const feature_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeFeature(feature_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "icon", 36);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r5 = ctx.$implicit;
    \u0275\u0275property("removable", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r5, " ");
  }
}
function RoomModalComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 17)(5, "mat-chip-grid", null, 1);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275repeaterCreate(8, RoomModalComponent_Conditional_33_For_9_Template, 4, 2, "mat-chip-row", 33, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(10, "input", 34);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("matChipInputTokenEnd", function RoomModalComponent_Conditional_33_Template_input_matChipInputTokenEnd_10_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addFeature($event));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const chipList_r6 = \u0275\u0275reference(6);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.features().invalid() && ctx_r1.form.features().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, "COMMON.FEATURES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 10, "COMMON.FEATURES"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.feature_list);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 12, "COMMON.FEATURES"))("matChipInputFor", chipList_r6)("matChipInputSeparatorKeyCodes", ctx_r1.separators)("matChipInputAddOnBlur", true);
  }
}
function RoomModalComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 37);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "mat-form-field", 17);
    \u0275\u0275element(6, "input", 25);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 38);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("click", function RoomModalComponent_Conditional_34_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectItemfromMap());
    });
    \u0275\u0275elementStart(10, "icon");
    \u0275\u0275text(11, "place");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "EXPLORE.MAP_ID"));
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 6, "EXPLORE.MAP_ID_PLACEHOLDER"))("formField", ctx_r1.form.map_id);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(9, 8, "APP.CONCIERGE.POI_MAP_SELECT"));
  }
}
function RoomModalComponent_For_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tz_r8 = ctx.$implicit;
    \u0275\u0275property("value", tz_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tz_r8, " ");
  }
}
function RoomModalComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 21);
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
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "image-list-field", 40);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "COMMON.IMAGE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r1.form.images);
    \u0275\u0275control();
  }
}
function RoomModalComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 41);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 17);
    \u0275\u0275element(5, "input", 25);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.timetable_url().invalid() && ctx_r1.form.timetable_url().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "COMMON.TIMETABLE_URL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 8, "COMMON.TIMETABLE_URL"))("formField", ctx_r1.form.timetable_url);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 10, "SYSTEMS.URL_VALID"), " ");
  }
}
function RoomModalComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 42);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 17);
    \u0275\u0275element(5, "input", 25);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.room_booking_url().invalid() && ctx_r1.form.room_booking_url().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "COMMON.ROOM_BOOKING_URL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 8, "COMMON.ROOM_BOOKING_URL"))("formField", ctx_r1.form.room_booking_url);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 10, "COMMON.URL_VALID"), " ");
  }
}
var RoomModalComponent = class _RoomModalComponent extends AsyncHandler {
  get feature_list() {
    return this.model().features || [];
  }
  constructor() {
    super();
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._injector = inject(Injector);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_new = !this._data.room?.id;
    this.levels = this._org.active_levels;
    this._form_ref = generateSystemsFormFields(this._data.room, this._injector);
    this.form = this._form_ref.form;
    this.model = this._form_ref.model;
    this.timezones = signal(
      TIMEZONES_IANA,
      ...ngDevMode ? [{ debugName: "timezones" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._timezone_query = signal(
      this.model().timezone || "",
      ...ngDevMode ? [{ debugName: "_timezone_query" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_timezones = computed(
      () => {
        const timezone = `${this._timezone_query() || ""}`.toLowerCase();
        return this.timezones().filter((item) => item.toLowerCase().includes(timezone));
      },
      ...ngDevMode ? [{ debugName: "filtered_timezones" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.settings_model = signal(
      { setup: 0, breakdown: 0 },
      ...ngDevMode ? [{ debugName: "settings_model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.settings_form = form(this.settings_model, {
      injector: this._injector
    });
    this.encryption_levels = [
      { id: He.None, name: "None" },
      { id: He.Support, name: "Support" },
      { id: He.Admin, name: "Admin" },
      { id: He.NeverDisplay, name: "Never Display" }
    ];
    this.separators = [ENTER, COMMA, SPACE];
    onFieldChange(this.model, (value) => value.timezone, (value) => this._timezone_query.set(value || ""), this._injector);
  }
  async ngOnInit() {
    const { details } = await Wu(this._org.organisation.id, "settings");
    const overflow = getItemWithKeys(["events", "overflow"], details) || {};
    if (this._data.room.id && overflow[this._data.room.id]) {
      patchSignalModel(this.settings_model, overflow[this._data.room.id]);
    }
  }
  /**
   * Add a feature to the list of features for the item
   * @param event Input event
   */
  addFeature(event) {
    const input = event.input;
    const value = (event.value || "").trim();
    if (value) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        features: [...m.features || [], value]
      }));
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
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      features: (m.features || []).filter((feature) => feature !== existing_feature)
    }));
  }
  async save() {
    if (!this.form().valid())
      return notifyError(i18n("FORM.INVALID_FIELDS", {
        field_list: getInvalidSignalFields(this.form, this.model).join(", ")
      }));
    if (!this.model().id) {
      patchSignalModel(this.model, {
        display_name: this.model().display_name || this.model().name,
        zones: unique([
          this._org.organisation.id,
          this._org.building.parent_id,
          this._org.building.id,
          `${this.model().zone?.id || this.model().zone || ""}`
        ]).filter((_) => _)
      });
    }
    this.loading.set(true);
    this._dialog_ref.disableClose = true;
    const data = __spreadValues({}, this.model());
    const { details } = await Wu(this._org.organisation.id, "settings");
    const overflow = getItemWithKeys(["events", "overflow"], details) || {};
    overflow[data.id] = this.settings_model();
    await Qu(this._org.organisation.id, {
      name: "settings",
      details: __spreadProps(__spreadValues({}, details), {
        events: __spreadProps(__spreadValues({}, details.events || {}), { overflow })
      }),
      description: ""
    }).catch((e) => notifyWarn("Unable to save room setup and breakdown times"));
    await (data.id ? ua(data.id, data) : ca(data));
    this._dialog_ref.disableClose = false;
    this._dialog_ref.close(true);
    this.loading.set(false);
  }
  selectItemfromMap() {
    let level = this._org.levelWithID(this.model().zones);
    const ref = this._dialog.open(SelectMapItemModalComponent, {
      data: {
        location: this.model().map_id,
        level_id: this.form
      }
    });
    ref.afterClosed().subscribe((d) => {
      if (!d)
        return;
      level = ref.componentInstance.level() || level;
      const zones = unique([
        this._org.organisation.id,
        this._org.building.parent_id,
        this._org.building.id,
        level?.id
      ]);
      patchSignalModel(this.model, { map_id: d, zones });
    });
  }
  static {
    this.\u0275fac = function RoomModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoomModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomModalComponent, selectors: [["room-form-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 52, vars: 45, consts: [["auto", "matAutocomplete"], ["chipList", ""], [3, "confirm", "heading", "loading"], ["system", ""], [1, "flex", "flex-col"], [1, "flex", "space-x-2"], [1, "flex", "flex-1", "flex-col"], [1, "flex", "flex-1", "flex-col", "space-y-2"], ["for", "setup", 1, "flex", "items-center"], [1, "ml-2", "text-base", 3, "matTooltip"], [3, "formField", "min"], ["for", "breakdown", 1, "flex", "items-center"], [3, "min", "formField"], [1, "mb-4", "flex", "space-x-2"], [1, "flex", "flex-1", "flex-col", "pt-4"], [1, "mb-4", "flex", "flex-col"], ["for", "timezone"], ["appearance", "outline"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", 3, "formField", "placeholder", "matAutocomplete"], [3, "value"], [3, "disabled"], ["for", "zone"], [3, "formField", "placeholder"], ["for", "system-name"], ["matInput", "", 3, "placeholder", "formField"], ["for", "system-email"], ["for", "display-name"], ["for", "code-name"], [3, "label", "formField"], ["for", "capacity"], [1, "w-full", 3, "formField", "min", "max"], ["for", "description"], [3, "removable"], [3, "matChipInputTokenEnd", "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed", "removable"], ["matChipRemove", ""], ["for", "map_id"], ["icon", "", "type", "button", "matRipple", "", 1, "border-secondary", "text-secondary", "h-12", "w-12", "rounded-sm", "border", 3, "click", "matTooltip"], ["for", "images"], [3, "formField"], ["for", "timetable-url"], ["for", "room-booking-url"]], template: function RoomModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 2);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function RoomModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(3, "form", 3);
        \u0275\u0275conditionalCreate(4, RoomModalComponent_Conditional_4_Template, 14, 12, "div", 4);
        \u0275\u0275elementStart(5, "div", 5);
        \u0275\u0275conditionalCreate(6, RoomModalComponent_Conditional_6_Template, 10, 10, "div", 6);
        \u0275\u0275conditionalCreate(7, RoomModalComponent_Conditional_7_Template, 8, 10, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275conditionalCreate(9, RoomModalComponent_Conditional_9_Template, 7, 7, "div", 6);
        \u0275\u0275conditionalCreate(10, RoomModalComponent_Conditional_10_Template, 7, 7, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 5)(12, "div", 7)(13, "label", 8);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementStart(16, "icon", 9);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275text(18, " info ");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(19, "a-duration-field", 10);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 7)(21, "label", 11);
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementStart(24, "icon", 9);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275text(26, " info ");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(27, "a-duration-field", 12);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 13);
        \u0275\u0275conditionalCreate(29, RoomModalComponent_Conditional_29_Template, 3, 4, "div", 14);
        \u0275\u0275conditionalCreate(30, RoomModalComponent_Conditional_30_Template, 3, 4, "div", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(31, RoomModalComponent_Conditional_31_Template, 5, 8, "div", 15);
        \u0275\u0275conditionalCreate(32, RoomModalComponent_Conditional_32_Template, 7, 7, "div", 4);
        \u0275\u0275conditionalCreate(33, RoomModalComponent_Conditional_33_Template, 12, 14, "div", 4);
        \u0275\u0275conditionalCreate(34, RoomModalComponent_Conditional_34_Template, 12, 10, "div", 4);
        \u0275\u0275elementStart(35, "div", 4)(36, "label", 16);
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "mat-form-field", 17)(40, "icon", 18);
        \u0275\u0275text(41, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275element(42, "input", 19);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "mat-autocomplete", null, 0);
        \u0275\u0275repeaterCreate(46, RoomModalComponent_For_47_Template, 2, 2, "mat-option", 20, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275conditionalCreate(48, RoomModalComponent_Conditional_48_Template, 3, 4, "mat-option", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(49, RoomModalComponent_Conditional_49_Template, 5, 4, "div", 4);
        \u0275\u0275conditionalCreate(50, RoomModalComponent_Conditional_50_Template, 10, 12, "div", 4);
        \u0275\u0275conditionalCreate(51, RoomModalComponent_Conditional_51_Template, 10, 12, "div", 4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const auto_r9 = \u0275\u0275reference(45);
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 29, ctx.model().id ? "APP.CONCIERGE.ROOMS_EDIT" : "APP.CONCIERGE.ROOMS_NEW"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 31, "APP.CONCIERGE.ROOMS_SAVING") : "");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.is_new ? 4 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.form.name ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.form.email ? 7 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.form.display_name ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.form.display_name ? 10 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 33, "APP.CONCIERGE.ROOMS_DEFAULT_SETUP"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(17, 35, "APP.CONCIERGE.ROOMS_SETUP_INFO"));
        \u0275\u0275advance(3);
        \u0275\u0275property("formField", ctx.settings_form.setup)("min", 0);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 37, "APP.CONCIERGE.ROOMS_DEFAULT_BREAKDOWN"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(25, 39, "APP.CONCIERGE.ROOMS_BREAKDOWN_INFO"));
        \u0275\u0275advance(3);
        \u0275\u0275property("min", 0)("formField", ctx.settings_form.breakdown);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.form.approval ? 29 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.form.bookable ? 30 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.form.capacity ? 31 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.form.description ? 32 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.form.features ? 33 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.form.map_id ? 34 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 41, "COMMON.TIMEZONE"));
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.timezone)("placeholder", \u0275\u0275pipeBind1(43, 43, "COMMON.TIMEZONE"))("matAutocomplete", auto_r9);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.filtered_timezones());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.timezones().length ? 48 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.form.images ? 49 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.form.timetable_url ? 50 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.form.room_booking_url ? 51 : -1);
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      FullscreenModalShellComponent,
      ImageListFieldComponent,
      FormField,
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
      MatTooltip,
      TranslatePipe
    ], styles: ["\nmat-checkbox[_ngcontent-%COMP%] {\n  margin-top: 2.5em;\n  margin-bottom: 1.5em;\n}\n@media screen and (max-width: 640px) {\n  mat-checkbox[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n/*# sourceMappingURL=room-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomModalComponent, [{
    type: Component,
    args: [{ selector: "room-form-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (model().id
                    ? 'APP.CONCIERGE.ROOMS_EDIT'
                    : 'APP.CONCIERGE.ROOMS_NEW'
                ) | translate
            "
            [loading]="
                loading() ? ('APP.CONCIERGE.ROOMS_SAVING' | translate) : ''
            "
            (confirm)="save()"
        >
            <form system>
                @if (is_new) {
                    <div class="flex flex-col">
                        <label
                            for="zone"
                            [class.error]="
                                form.zone().invalid() && form.zone().touched()
                            "
                        >
                            {{ 'RESOURCE.LEVEL' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                [formField]="form.zone"
                                [placeholder]="
                                    'APP.CONCIERGE.ROOMS_SELECT_LEVEL'
                                        | translate
                                "
                            >
                                @for (level of levels(); track level) {
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
                    @if (form.name) {
                        <div class="flex flex-1 flex-col">
                            <label
                                for="system-name"
                                [class.error]="
                                    form.name().invalid() &&
                                    form.name().touched()
                                "
                            >
                                {{ 'FORM.NAME' | translate }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="'FORM.NAME' | translate"
                                    [formField]="form.name"
                                />
                                @if (form.name().invalid()) {
                                    <mat-error>
                                        {{ 'FORM.NAME_REQUIRED' | translate }}
                                    </mat-error>
                                }
                            </mat-form-field>
                        </div>
                    }
                    @if (form.email) {
                        <div class="flex flex-1 flex-col">
                            <label
                                for="system-email"
                                [class.error]="
                                    form.email().invalid() &&
                                    form.email().touched()
                                "
                            >
                                {{ 'FORM.EMAIL' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="'FORM.EMAIL' | translate"
                                    [formField]="form.email"
                                />
                                @if (form.email().invalid()) {
                                    <mat-error>
                                        {{ 'FORM.EMAIL_REQUIRED' | translate }}
                                    </mat-error>
                                }
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="flex space-x-2">
                    @if (form.display_name) {
                        <div class="flex flex-1 flex-col">
                            <label for="display-name">{{
                                'FORM.DISPLAY_NAME' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'FORM.DISPLAY_NAME' | translate
                                    "
                                    [formField]="form.display_name"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form.display_name) {
                        <div class="flex flex-1 flex-col">
                            <label for="code-name">{{
                                'COMMON.CODE' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="'COMMON.CODE' | translate"
                                    [formField]="form.code"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="flex space-x-2">
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
                            [formField]="settings_form.setup"
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
                            [min]="0"
                            [formField]="settings_form.breakdown"
                        ></a-duration-field>
                    </div>
                </div>
                <div class="mb-4 flex space-x-2">
                    @if (form.approval) {
                        <div class="flex flex-1 flex-col pt-4">
                            <settings-toggle
                                [label]="'COMMON.REQUIRE_APPROVAL' | translate"
                                [formField]="form.approval"
                            >
                            </settings-toggle>
                        </div>
                    }
                    @if (form.bookable) {
                        <div class="flex flex-1 flex-col pt-4">
                            <settings-toggle
                                [label]="'COMMON.BOOKABLE' | translate"
                                [formField]="form.bookable"
                            >
                            </settings-toggle>
                        </div>
                    }
                </div>
                @if (form.capacity) {
                    <div class="mb-4 flex flex-col">
                        <label
                            for="capacity"
                            [class.error]="
                                form.capacity().invalid() &&
                                form.capacity().touched()
                            "
                        >
                            {{ 'COMMON.CAPACITY' | translate }}
                        </label>
                        <a-counter
                            class="w-full"
                            [formField]="form.capacity"
                            [min]="0"
                            [max]="256"
                        ></a-counter>
                    </div>
                }
                @if (form.description) {
                    <div class="flex flex-col">
                        <label for="description">{{
                            'COMMON.DESCRIPTION' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                [placeholder]="'COMMON.DESCRIPTION' | translate"
                                [formField]="form.description"
                            ></textarea>
                        </mat-form-field>
                    </div>
                }
                @if (form.features) {
                    <div class="flex flex-col">
                        <label
                            [class.error]="
                                form.features().invalid() &&
                                form.features().touched()
                            "
                        >
                            {{ 'COMMON.FEATURES' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
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
                @if (form.map_id) {
                    <div class="flex flex-col">
                        <label for="map_id">{{
                            'EXPLORE.MAP_ID' | translate
                        }}</label>
                        <div class="flex space-x-2">
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'EXPLORE.MAP_ID_PLACEHOLDER' | translate
                                    "
                                    [formField]="form.map_id"
                                />
                            </mat-form-field>
                            <button
                                icon
                                type="button"
                                matRipple
                                class="border-secondary text-secondary h-12 w-12 rounded-sm border"
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
                            [formField]="form.timezone"
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
                @if (form.images) {
                    <div class="flex flex-col">
                        <label for="images">{{
                            'COMMON.IMAGE' | translate
                        }}</label>
                        <image-list-field
                            [formField]="form.images"
                        ></image-list-field>
                    </div>
                }
                @if (form.timetable_url) {
                    <div class="flex flex-col">
                        <label
                            for="timetable-url"
                            [class.error]="
                                form.timetable_url().invalid() &&
                                form.timetable_url().touched()
                            "
                        >
                            {{ 'COMMON.TIMETABLE_URL' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [placeholder]="
                                    'COMMON.TIMETABLE_URL' | translate
                                "
                                [formField]="form.timetable_url"
                            />
                            <mat-error>
                                {{ 'SYSTEMS.URL_VALID' | translate }}
                            </mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form.room_booking_url) {
                    <div class="flex flex-col">
                        <label
                            for="room-booking-url"
                            [class.error]="
                                form.room_booking_url().invalid() &&
                                form.room_booking_url().touched()
                            "
                        >
                            {{ 'COMMON.ROOM_BOOKING_URL' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [placeholder]="
                                    'COMMON.ROOM_BOOKING_URL' | translate
                                "
                                [formField]="form.room_booking_url"
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
      FormField,
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
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomModalComponent, { className: "RoomModalComponent", filePath: "apps/concierge/src/app/room-manager/room-modal.component.ts", lineNumber: 474 });
})();

// apps/concierge/src/app/room-manager/room-management.service.ts
var RoomManagementService = class _RoomManagementService {
  constructor() {
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this._options = signal(
      {},
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._change = signal(
      0,
      ...ngDevMode ? [{ debugName: "_change" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = this._options.asReadonly();
    this._room_alerts = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_room_alerts" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        change: this._change(),
        building: this._org.active_building()?.id
      }),
      loader: async () => {
        const metadata = await Wu(this._org.organisation.id, "room_alerts").catch(() => ({ details: {} }));
        return metadata.details || {};
      }
    }));
    this.room_alerts = computed(
      () => this._room_alerts.value() ?? {},
      ...ngDevMode ? [{ debugName: "room_alerts" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._room_list = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_room_list" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        const alerts = this._room_alerts.value();
        return alerts ? {
          building: this._org.active_building()?.id,
          region: this._org.active_region()?.id,
          change: this._change(),
          alerts
        } : void 0;
      },
      defaultValue: [],
      loader: async ({ params }) => {
        if (!params?.building)
          return [];
        const zone_id = (this._settings.get("app.use_region") ? params.region : "") || params.building;
        const { data } = await ia({
          zone_id,
          limit: 2500
        }).catch(() => ({ data: [] }));
        const list = data || [];
        const alerts = params.alerts;
        for (const id in alerts) {
          const [status, message] = alerts[id];
          const item = list.find((_) => _.id === id);
          if (!item)
            continue;
          item.alert = { status, message };
        }
        return list.filter((_) => this._org.levelWithID(_.zones)).sort((a, b) => a.name.localeCompare(b.name));
      }
    }));
    this.room_list = this._room_list.value;
    this.filtered_rooms = computed(
      () => {
        let list = this._room_list.value();
        const options = this._options();
        if (options.zones?.length) {
          list = list.filter((_) => options.zones.find((z) => _.zones.includes(z)));
        }
        if (options.search) {
          list = list.filter((_) => _.name.toLowerCase().includes(options.search.toLowerCase()));
        }
        return list;
      },
      ...ngDevMode ? [{ debugName: "filtered_rooms" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  setFilters(options) {
    this._options.update((current) => __spreadValues(__spreadValues({}, current), options));
  }
  setSearchString(search) {
    this._options.update((current) => __spreadProps(__spreadValues({}, current), { search }));
  }
  editRoom(room = new ks()) {
    const ref = this._dialog.open(RoomModalComponent, { data: { room } });
    ref.afterClosed().subscribe((data) => {
      if (data)
        setTimeout(() => this._change.update((c) => c + 1), 300);
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
        setTimeout(() => this._change.update((c) => c + 1), 300);
    });
  }
  viewBookingHistory(room) {
    if (!room)
      return;
    this._dialog.open(RoomBookingHistoryModalComponent, {
      data: { room },
      panelClass: "fullscreen-dialog",
      maxWidth: "100vw",
      maxHeight: "100vh",
      width: "100vw",
      height: "100vh"
    });
  }
  static {
    this.\u0275fac = function RoomManagementService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoomManagementService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RoomManagementService, factory: _RoomManagementService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomManagementService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/room-manager/room-list.component.ts
var _c03 = (a0, a1) => ({ key: "display_name", name: a0, content: a1 });
var _c12 = (a0, a1) => ({ key: "zones", name: a0, size: "10rem", content: a1 });
var _c22 = (a0) => ({ key: "capacity", name: a0, size: "6rem" });
var _c32 = (a0) => ({ key: "type", name: a0, size: "8rem" });
var _c42 = (a0, a1) => ({ key: "features", name: a0, content: a1, size: "16rem" });
var _c52 = (a0, a1) => ({ key: "approval", name: a0, size: "5.5rem", content: a1, sortable: false });
var _c62 = (a0, a1) => ({ key: "bookable", name: a0, size: "5.5rem", content: a1, sortable: false });
var _c72 = (a0, a1) => ({ key: "alert", name: a0, size: "5.5rem", content: a1 });
var _c82 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c92 = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => [a0, a1, a2, a3, a4, a5, a6, a7, a8];
var _c102 = () => [];
function RoomListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function RoomListComponent_ng_template_11_Template_button_click_0_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyToClipboard(row_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
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
function RoomListComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "level");
    \u0275\u0275pipe(3, "level");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, data_r5)?.display_name || \u0275\u0275pipeBind1(3, 3, data_r5)?.name, " ");
  }
}
function RoomListComponent_ng_template_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r6, " ");
  }
}
function RoomListComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275repeaterCreate(1, RoomListComponent_ng_template_15_For_2_Template, 2, 1, "span", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275repeater(data_r7 || \u0275\u0275pureFunction0(0, _c102));
  }
}
function RoomListComponent_ng_template_17_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r8 = \u0275\u0275nextContext().data;
    \u0275\u0275classProp("bg-error", !data_r8)("bg-success", data_r8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r8 ? "done" : "close");
  }
}
function RoomListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RoomListComponent_ng_template_17_Conditional_0_Template, 3, 5, "div", 16);
  }
  if (rf & 2) {
    const data_r8 = ctx.data;
    \u0275\u0275conditional(data_r8 ? 0 : -1);
  }
}
function RoomListComponent_ng_template_19_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r9 = \u0275\u0275nextContext().data;
    \u0275\u0275classProp("bg-warning", data_r9.status === "warn")("bg-error", data_r9.status === "closed")("bg-info", data_r9.status === "info")("text-warning-content", data_r9.status === "warn")("text-error-content", data_r9.status === "closed")("text-info-content", data_r9.status === "info");
    \u0275\u0275property("matTooltip", data_r9.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r9.status === "warn" ? "warning" : data_r9.status === "info" ? "info" : "close");
  }
}
function RoomListComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RoomListComponent_ng_template_19_Conditional_0_Template, 3, 14, "div", 18);
  }
  if (rf & 2) {
    const data_r9 = ctx.data;
    \u0275\u0275conditional(data_r9 ? 0 : -1);
  }
}
function RoomListComponent_ng_template_21_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 25);
    \u0275\u0275pipe(1, "sanitize");
    \u0275\u0275elementStart(2, "div", 23)(3, "icon", 26);
    \u0275\u0275text(4, "tv_remote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r11 = \u0275\u0275nextContext().row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("href", \u0275\u0275pipeBind2(1, 2, row_r11.support_url || ctx_r2.control_path() + row_r11.id, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "APP.CONCIERGE.ROOMS_VIEW_CONTROL"));
  }
}
function RoomListComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 21)(2, "icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "mat-menu", null, 6)(6, "button", 22);
    \u0275\u0275listener("click", function RoomListComponent_ng_template_21_Template_button_click_6_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editRoom(row_r11));
    });
    \u0275\u0275elementStart(7, "div", 23)(8, "icon", 24);
    \u0275\u0275text(9, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "button", 22);
    \u0275\u0275listener("click", function RoomListComponent_ng_template_21_Template_button_click_13_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setRoomAlert(row_r11));
    });
    \u0275\u0275elementStart(14, "div", 23)(15, "icon", 24);
    \u0275\u0275text(16, "notification_important");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "button", 22);
    \u0275\u0275listener("click", function RoomListComponent_ng_template_21_Template_button_click_20_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewBookingHistory(row_r11));
    });
    \u0275\u0275elementStart(21, "div", 23)(22, "icon", 24);
    \u0275\u0275text(23, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(27, RoomListComponent_ng_template_21_Conditional_27_Template, 8, 7, "a", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r11 = ctx.row;
    const menu_r12 = \u0275\u0275reference(5);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r12);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 5, "APP.CONCIERGE.ROOMS_EDIT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 7, "APP.CONCIERGE.ROOMS_SET_ALERT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 9, "APP.CONCIERGE.ROOMS_VIEW_HISTORY"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(row_r11.support_url || ctx_r2.control_path() ? 27 : -1);
  }
}
var RoomListComponent = class _RoomListComponent {
  constructor() {
    this._manager = inject(RoomManagementService);
    this._clipboard = inject(Clipboard);
    this._settings = inject(SettingsService);
    this.rooms = this._manager.filtered_rooms;
    this.control_path = this._settings.signal("app.control_path", "", true);
    this.editRoom = (room) => this._manager.editRoom(room);
    this.setRoomAlert = (room) => this._manager.setRoomAlert(room);
    this.viewBookingHistory = (room) => this._manager.viewBookingHistory(room);
    this.copyToClipboard = (id) => {
      const success = this._clipboard.copy(id);
      if (success)
        notifySuccess(i18n("APP.CONCIERGE.ROOMS_COPIED_ID"));
    };
  }
  static {
    this.\u0275fac = function RoomListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoomListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomListComponent, selectors: [["room-list"]], decls: 23, vars: 53, consts: [["name_template", ""], ["level_template", ""], ["feature_list_template", ""], ["bool_template", ""], ["alert_template", ""], ["action_template", ""], ["menu", "matMenu"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], ["empty_message", "No rooms for selected level or building", 1, "block", "min-w-6xl", "text-sm", 3, "data", "columns", "sortable"], [1, "h-20", "w-full"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "p-4"], [1, "flex", "flex-wrap", "p-2"], [1, "bg-info", "text-info-content", "m-1", "rounded-2xl", "px-2", "py-1", "font-mono", "text-xs"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", "text-white", 3, "bg-error", "bg-success"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", "text-white"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", "text-white", 3, "bg-warning", "bg-error", "bg-info", "text-warning-content", "text-error-content", "text-info-content", "matTooltip"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", "text-white", 3, "matTooltip"], [1, "mx-auto", "p-1"], ["icon", "", "default", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], ["mat-menu-item", "", "target", "_blank", "ref", "noopener noreferrer", 3, "href"], ["className", "material-symbols-rounded", 1, "text-xl"]], template: function RoomListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 7);
        \u0275\u0275element(1, "simple-table", 8);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275element(10, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, RoomListComponent_ng_template_11_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(13, RoomListComponent_ng_template_13_Template, 4, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(15, RoomListComponent_ng_template_15_Template, 3, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(17, RoomListComponent_ng_template_17_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(19, RoomListComponent_ng_template_19_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(21, RoomListComponent_ng_template_21_Template, 28, 11, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const name_template_r13 = \u0275\u0275reference(12);
        const level_template_r14 = \u0275\u0275reference(14);
        const feature_list_template_r15 = \u0275\u0275reference(16);
        const bool_template_r16 = \u0275\u0275reference(18);
        const alert_template_r17 = \u0275\u0275reference(20);
        const action_template_r18 = \u0275\u0275reference(22);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.rooms())("columns", \u0275\u0275pureFunctionV(43, _c92, [\u0275\u0275pureFunction2(19, _c03, \u0275\u0275pipeBind1(2, 3, "APP.CONCIERGE.ROOMS_NAME"), name_template_r13), \u0275\u0275pureFunction2(22, _c12, \u0275\u0275pipeBind1(3, 5, "RESOURCE.LEVEL"), level_template_r14), \u0275\u0275pureFunction1(25, _c22, \u0275\u0275pipeBind1(4, 7, "COMMON.CAPACITY")), \u0275\u0275pureFunction1(27, _c32, \u0275\u0275pipeBind1(5, 9, "APP.CONCIERGE.ROOMS_TYPE")), \u0275\u0275pureFunction2(29, _c42, \u0275\u0275pipeBind1(6, 11, "COMMON.FEATURES"), feature_list_template_r15), \u0275\u0275pureFunction2(32, _c52, \u0275\u0275pipeBind1(7, 13, "COMMON.APPROVAL"), bool_template_r16), \u0275\u0275pureFunction2(35, _c62, \u0275\u0275pipeBind1(8, 15, "COMMON.BOOKABLE"), bool_template_r16), \u0275\u0275pureFunction2(38, _c72, \u0275\u0275pipeBind1(9, 17, "APP.CONCIERGE.ROOMS_ALERT"), alert_template_r17), \u0275\u0275pureFunction1(41, _c82, action_template_r18)]))("sortable", true);
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
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomListComponent, [{
    type: Component,
    args: [{ selector: "room-list", template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="block min-w-6xl text-sm"
                [data]="rooms()"
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
                        key: 'features',
                        name: 'COMMON.FEATURES' | translate,
                        content: feature_list_template,
                        size: '16rem',
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
        <ng-template #feature_list_template let-data="data">
            <div class="flex flex-wrap p-2">
                @for (feature of data || []; track feature) {
                    <span
                        class="bg-info text-info-content m-1 rounded-2xl px-2 py-1 font-mono text-xs"
                    >
                        {{ feature }}
                    </span>
                }
            </div>
        </ng-template>
        <ng-template #bool_template let-data="data">
            @if (data) {
                <div
                    [class.bg-error]="!data"
                    [class.bg-success]="data"
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl text-white"
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
                    default
                    matRipple
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
                <button mat-menu-item (click)="viewBookingHistory(row)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-xl">history</icon>
                        <span>{{
                            'APP.CONCIERGE.ROOMS_VIEW_HISTORY' | translate
                        }}</span>
                    </div>
                </button>
                @if (row.support_url || control_path()) {
                    <a
                        mat-menu-item
                        [href]="
                            row.support_url || control_path() + row.id
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomListComponent, { className: "RoomListComponent", filePath: "apps/concierge/src/app/room-manager/room-list.component.ts", lineNumber: 215 });
})();

// apps/concierge/src/app/room-manager/room-manager-topbar.component.ts
function RoomManagerTopbarComponent_For_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const level_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, level_r1.parent_id)?.display_name, " ");
  }
}
function RoomManagerTopbarComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8)(1, "div", 10);
    \u0275\u0275conditionalCreate(2, RoomManagerTopbarComponent_For_14_Conditional_2_Template, 5, 3, "div", 11);
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
var RoomManagerTopbarComponent = class _RoomManagerTopbarComponent extends AsyncHandler {
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
  constructor() {
    super();
    this._manager = inject(RoomManagementService);
    this._org = inject(OrganisationService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this._ready = signal(
      false,
      ...ngDevMode ? [{ debugName: "_ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._query_params = signal(
      null,
      ...ngDevMode ? [{ debugName: "_query_params" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.levels = computed(
      () => {
        const bld = this._org.active_building();
        const region = this._org.active_region();
        return this.use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld);
      },
      ...ngDevMode ? [{ debugName: "levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
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
    effect(() => {
      if (!this._ready())
        return;
      const params = this._query_params();
      if (!params?.has("zone_ids"))
        return;
      const zones = (params.get("zone_ids") || "").split(",").filter(Boolean);
      this._manager.setFilters({ zones });
    });
  }
  async ngOnInit() {
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => this._query_params.set(params)));
    await this._org.waitUntilInitialised();
    this._ready.set(true);
    this.setSearch("");
  }
  static {
    this.\u0275fac = function RoomManagerTopbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoomManagerTopbarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomManagerTopbarComponent, selectors: [["room-manager-topbar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 20, vars: 13, consts: [[1, "flex", "items-center", "space-x-2", "px-8", "pt-4"], [1, "text-2xl", "font-medium"], [1, "w-2", "flex-1"], [3, "modelChange"], ["btn", "", 1, "w-40", 3, "click"], [1, "bg-base-100", "flex", "h-20", "items-center", "space-x-2", "px-8"], ["appearance", "outline", 1, "no-subscript", "w-60"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"]], template: function RoomManagerTopbarComponent_Template(rf, ctx) {
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
        \u0275\u0275elementStart(9, "div", 5)(10, "mat-form-field", 6)(11, "mat-select", 7);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275listener("ngModelChange", function RoomManagerTopbarComponent_Template_mat_select_ngModelChange_11_listener($event) {
          return ctx.updateZones($event);
        });
        \u0275\u0275repeaterCreate(13, RoomManagerTopbarComponent_For_14_Template, 5, 3, "mat-option", 8, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "div", 2);
        \u0275\u0275elementStart(16, "button", 9);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275listener("click", function RoomManagerTopbarComponent_Template_button_click_16_listener() {
          return ctx.manageRestrictions();
        });
        \u0275\u0275elementStart(18, "icon");
        \u0275\u0275text(19, "lock_open");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "APP.CONCIERGE.ROOMS_HEADER"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 7, "APP.CONCIERGE.ROOMS_ADD"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.filters()?.zones)("placeholder", \u0275\u0275pipeBind1(12, 9, "COMMON.LEVEL_ALL"));
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.levels());
        \u0275\u0275advance(3);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(17, 11, "APP.CONCIERGE.ROOMS_BOOKING_RULES"));
      }
    }, dependencies: [
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      SearchbarComponent,
      FormsModule,
      NgControlStatus,
      NgModel,
      MatTooltipModule,
      MatTooltip,
      TranslatePipe,
      BuildingPipe
    ], styles: ["\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25rem;\n}\n/*# sourceMappingURL=room-manager-topbar.component.css.map */"] });
  }
};
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
                <mat-select
                    [ngModel]="filters()?.zones"
                    (ngModelChange)="updateZones($event)"
                    [placeholder]="'COMMON.LEVEL_ALL' | translate"
                    multiple
                >
                    @for (level of levels(); track level) {
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
            <div class="w-2 flex-1"></div>
            <button
                icon
                default
                matRipple
                (click)="manageRestrictions()"
                [matTooltip]="'APP.CONCIERGE.ROOMS_BOOKING_RULES' | translate"
            >
                <icon>lock_open</icon>
            </button>
        </div>
    `, imports: [
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
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomManagerTopbarComponent, { className: "RoomManagerTopbarComponent", filePath: "apps/concierge/src/app/room-manager/room-manager-topbar.component.ts", lineNumber: 102 });
})();

// apps/concierge/src/app/room-manager/room-manager.component.ts
var RoomManagerComponent = class _RoomManagerComponent {
  static {
    this.\u0275fac = function RoomManagerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoomManagerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomManagerComponent, selectors: [["", "app-new-room-manager", ""]], decls: 6, vars: 0, consts: [[1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "block", "w-full"], [1, "relative", "block", "h-1/2", "w-full", "flex-1"]], template: function RoomManagerComponent_Template(rf, ctx) {
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
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\nsidebar[_ngcontent-%COMP%] {\n  height: 100%;\n}\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=room-manager.component.css.map */"] });
  }
};
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

// apps/concierge/src/app/room-manager/room-manager.routes.ts
var ROUTES = [
  { path: "", component: RoomManagerComponent, title: "Room Management" }
];
export {
  ROUTES
};
//# sourceMappingURL=room-manager.routes-HVCVXI7G.js.map
