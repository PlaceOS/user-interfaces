import {
  queryParkingSpacesForZones
} from "./chunk-DC2277VO.js";
import {
  AssetStateService,
  DEFAULT_COLOURS,
  bookedResourceList,
  findBookingClashes,
  findNearbyFeature,
  generateBookingForm,
  generateCalendarFileLink,
  generateGoogleCalendarLink,
  generateMicrosoftCalendarLink,
  loadLockerBanks,
  loadLockers,
  queryBookings,
  saveBooking,
  validateAssetRequestsForResource
} from "./chunk-PNVZNC3H.js";
import {
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  Booking,
  CommonModule,
  Component,
  CurrencyPipe,
  CustomTooltipComponent,
  DatePipe,
  DefaultValueAccessor,
  Ea,
  ElementRef,
  EventEmitter,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  IconComponent,
  Injectable,
  MAP_FEATURE_DATA,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatOption,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  MaxLengthValidator,
  NG_VALUE_ACCESSOR,
  NavigationEnd,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  OrganisationService,
  Output,
  ReactiveFormsModule,
  Router,
  SafePipe,
  SanitizePipe,
  SettingsService,
  TranslatePipe,
  UpperCasePipe,
  User,
  Validators,
  addDays,
  addMinutes,
  addYears,
  catchError,
  combineLatest,
  computed,
  currentUser,
  debounceTime,
  distinctUntilKeyChanged,
  endOfDay,
  filter,
  first,
  flatten,
  forkJoin,
  format,
  forwardRef,
  getInvalidFields,
  getUnixTime,
  hs,
  i18n,
  inject,
  input,
  lastValueFrom,
  map,
  merge,
  nc,
  nextValueFrom,
  notifyError,
  notifyWarn,
  oc,
  of,
  openConfirmModal,
  output,
  rulesForResource,
  setClassMetadata,
  setMonth,
  shareReplay,
  signal,
  startOfDay,
  switchMap,
  tap,
  timer,
  unique,
  viewChild,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-U4YKYOQ5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// libs/bookings/src/lib/booking-link-modal.component.ts
var _BookingLinkModalComponent = class _BookingLinkModalComponent {
  constructor() {
    this._event = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this.outlook_link = generateMicrosoftCalendarLink(this._event);
    this.google_link = generateGoogleCalendarLink(this._event);
    this.ical_link = generateCalendarFileLink(this._event);
  }
};
_BookingLinkModalComponent.\u0275fac = function BookingLinkModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BookingLinkModalComponent)();
};
_BookingLinkModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingLinkModalComponent, selectors: [["booking-link-modal"]], decls: 26, vars: 24, consts: [[1, "w-full", "p-4", "pb-2"], [1, "relative", "flex", "flex-col", "items-center", "space-y-4", "p-4"], ["btn", "", "matRipple", "", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["src", "assets/icons/gcal.svg", 1, "w-6"], [1, "text-xl"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "top-2", "right-0"]], template: function BookingLinkModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1)(4, "a", 2);
    \u0275\u0275pipe(5, "sanitize");
    \u0275\u0275element(6, "img", 3);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "a", 2);
    \u0275\u0275pipe(11, "sanitize");
    \u0275\u0275element(12, "img", 4);
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "a", 2);
    \u0275\u0275pipe(17, "safe");
    \u0275\u0275elementStart(18, "icon", 5);
    \u0275\u0275text(19, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "button", 6)(24, "icon");
    \u0275\u0275text(25, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 7, "BOOKING.LINK_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(5, 9, ctx.outlook_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 12, "BOOKING.LINK_OUTLOOK"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(11, 14, ctx.google_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 17, "BOOKING.LINK_GOOGLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(17, 19, ctx.ical_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 22, "BOOKING.LINK_ICAL"));
  }
}, dependencies: [
  IconComponent,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  MatDialogModule,
  MatDialogClose,
  SafePipe,
  SanitizePipe
], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=booking-link-modal.component.css.map */"] });
var BookingLinkModalComponent = _BookingLinkModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingLinkModalComponent, [{
    type: Component,
    args: [{ selector: "booking-link-modal", template: `
        <div class="w-full p-4 pb-2">
            {{ 'BOOKING.LINK_HEADER' | translate }}
        </div>
        <div class="relative flex flex-col items-center space-y-4 p-4">
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                [href]="outlook_link | sanitize: 'url'"
                target="_blank"
                rel="noopener noreferer"
            >
                <img src="assets/icons/outlook.svg" class="w-6" />
                <span>{{ 'BOOKING.LINK_OUTLOOK' | translate }}</span>
            </a>
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                [href]="google_link | sanitize: 'url'"
                target="_blank"
                rel="noopener noreferer"
            >
                <img src="assets/icons/gcal.svg" class="w-6" />
                <span>{{ 'BOOKING.LINK_GOOGLE' | translate }}</span>
            </a>
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                [href]="ical_link | safe: 'url'"
                target="_blank"
                rel="noopener noreferer"
            >
                <icon class="text-xl">download</icon>
                <span>{{ 'BOOKING.LINK_ICAL' | translate }}</span>
            </a>
        </div>
        <button icon matRipple mat-dialog-close class="absolute top-2 right-0">
            <icon>close</icon>
        </button>
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatDialogModule,
      SafePipe,
      SanitizePipe
    ], styles: ["/* angular:styles/component:css;726748c2414197d0b1210ead97f5552a150ccdc9b0475e0053e8ed5e76b597ad;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/booking-link-modal.component.ts */\n:host {\n  position: relative;\n}\n/*# sourceMappingURL=booking-link-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingLinkModalComponent, { className: "BookingLinkModalComponent", filePath: "libs/bookings/src/lib/booking-link-modal.component.ts", lineNumber: 77 });
})();

// libs/bookings/src/lib/desk-questions-modal.component.ts
function DeskQuestionsModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "h2", 2);
    \u0275\u0275text(2, "COVID-19 Questionnaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "main", 3)(4, "div", 4)(5, "label");
    \u0275\u0275text(6, " Have you travelled overseas within the last 14 days?");
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-radio-group", 5)(10, "mat-radio-button", 6);
    \u0275\u0275text(11, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-radio-button", 6);
    \u0275\u0275text(13, "No");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 4)(15, "label");
    \u0275\u0275text(16, " Are you unwell or experiencing any cold or flu-like symptoms?");
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-radio-group", 7)(20, "mat-radio-button", 6);
    \u0275\u0275text(21, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-radio-button", 6);
    \u0275\u0275text(23, "No");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 8)(25, "label");
    \u0275\u0275text(26, " Have you had contact with anyone with suspected COVID-19?");
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "mat-radio-group", 9)(30, "mat-radio-button", 6);
    \u0275\u0275text(31, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-radio-button", 6);
    \u0275\u0275text(33, "No");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "footer", 10)(35, "button", 11);
    \u0275\u0275listener("click", function DeskQuestionsModalComponent_Conditional_0_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275text(36, "Submit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "button", 12)(38, "icon");
    \u0275\u0275text(39, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
    \u0275\u0275advance(8);
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
    \u0275\u0275advance(8);
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
  }
}
function DeskQuestionsModalComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 1)(1, "p", 13);
    \u0275\u0275text(2, " Your request to work from the office has been rejected based on your response to the compulsory Covid-19 questions. Please feel free to submit a new request when circumstances change in a way that changes your answer to the questions. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 12)(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
}
var _DeskQuestionsModalComponent = class _DeskQuestionsModalComponent {
  constructor() {
    this.event = new EventEmitter();
    this.form = new FormGroup({
      travelled: new FormControl(false),
      unwell: new FormControl(false),
      contact: new FormControl(false)
    });
  }
  submit() {
    this.form.markAllAsTouched();
    if (Object.keys(this.form.value).find((key) => this.form.value[key] === true || this.form.value[key] === "true")) {
      this.failure = true;
      return;
    }
    this.event.emit({ reason: "done" });
  }
};
_DeskQuestionsModalComponent.\u0275fac = function DeskQuestionsModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeskQuestionsModalComponent)();
};
_DeskQuestionsModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskQuestionsModalComponent, selectors: [["desk-question-modal"]], outputs: { event: "event" }, decls: 2, vars: 1, consts: [[1, "relative"], ["failure", "", 1, "relative", "pt-8"], [1, "p-4", "text-xl"], [1, "p-4", 3, "formGroup"], [1, "mb-4", "flex", "flex-col"], ["formControlName", "travelled", 1, "space-x-2"], [3, "value"], ["formControlName", "unwell", 1, "space-x-2"], [1, "flex", "flex-col"], ["formControlName", "contact", 1, "space-x-2"], [1, "flex", "items-center", "justify-center", "p-2"], ["btn", "", "matRipple", "", 3, "click"], ["close", "", "icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4"]], template: function DeskQuestionsModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DeskQuestionsModalComponent_Conditional_0_Template, 40, 7, "div", 0)(1, DeskQuestionsModalComponent_Conditional_1_Template, 6, 0, "main", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(!ctx.failure ? 0 : 1);
  }
}, dependencies: [
  IconComponent,
  MatDialogModule,
  MatDialogClose,
  MatRippleModule,
  MatRipple,
  MatRadioModule,
  MatRadioGroup,
  MatRadioButton,
  ReactiveFormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName
], styles: ["\n\nmain[_ngcontent-%COMP%] {\n  width: 24rem;\n  max-width: calc(100vw - 4.5rem);\n}\n[close][_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n}\n/*# sourceMappingURL=desk-questions-modal.component.css.map */"] });
var DeskQuestionsModalComponent = _DeskQuestionsModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskQuestionsModalComponent, [{
    type: Component,
    args: [{ selector: "desk-question-modal", template: `
        @if (!failure) {
            <div class="relative">
                <h2 class="p-4 text-xl">COVID-19 Questionnaire</h2>
                <main class="p-4" [formGroup]="form">
                    <div class="mb-4 flex flex-col">
                        <label>
                            Have you travelled overseas within the last 14
                            days?<span>*</span>
                        </label>
                        <mat-radio-group
                            formControlName="travelled"
                            class="space-x-2"
                        >
                            <mat-radio-button [value]="true"
                                >Yes</mat-radio-button
                            >
                            <mat-radio-button [value]="false"
                                >No</mat-radio-button
                            >
                        </mat-radio-group>
                    </div>
                    <div class="mb-4 flex flex-col">
                        <label>
                            Are you unwell or experiencing any cold or flu-like
                            symptoms?<span>*</span>
                        </label>
                        <mat-radio-group
                            formControlName="unwell"
                            class="space-x-2"
                        >
                            <mat-radio-button [value]="true"
                                >Yes</mat-radio-button
                            >
                            <mat-radio-button [value]="false"
                                >No</mat-radio-button
                            >
                        </mat-radio-group>
                    </div>
                    <div class="flex flex-col">
                        <label>
                            Have you had contact with anyone with suspected
                            COVID-19?<span>*</span>
                        </label>
                        <mat-radio-group
                            formControlName="contact"
                            class="space-x-2"
                        >
                            <mat-radio-button [value]="true"
                                >Yes</mat-radio-button
                            >
                            <mat-radio-button [value]="false"
                                >No</mat-radio-button
                            >
                        </mat-radio-group>
                    </div>
                </main>
                <footer class="flex items-center justify-center p-2">
                    <button btn matRipple (click)="submit()">Submit</button>
                </footer>
                <button close icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </div>
        } @else {
            <main failure class="relative pt-8">
                <p class="p-4">
                    Your request to work from the office has been rejected based
                    on your response to the compulsory Covid-19 questions.
                    Please feel free to submit a new request when circumstances
                    change in a way that changes your answer to the questions.
                </p>
                <button close icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </main>
        }
    `, imports: [
      IconComponent,
      MatDialogModule,
      MatRippleModule,
      MatRadioModule,
      ReactiveFormsModule
    ], styles: ["/* angular:styles/component:css;c7f37c1e60a5fae4a31dda6fbae0d3cc845b39f17b3f09824fe872f6bf4e7f79;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/desk-questions-modal.component.ts */\nmain {\n  width: 24rem;\n  max-width: calc(100vw - 4.5rem);\n}\n[close] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n}\n/*# sourceMappingURL=desk-questions-modal.component.css.map */\n"] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskQuestionsModalComponent, { className: "DeskQuestionsModalComponent", filePath: "libs/bookings/src/lib/desk-questions-modal.component.ts", lineNumber: 111 });
})();

// libs/bookings/src/lib/recurring-clash-modal.component.ts
var _forTrack0 = ($index, $item) => $item.booking_start;
function RecurringClashModalComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 10)(1, "td", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 15);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const clash_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, clash_r1.booking_start * 1e3, "EEE, MMM d, yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(6, 6, clash_r1.booking_start * 1e3, "h:mm a"), " - ", \u0275\u0275pipeBind2(7, 9, clash_r1.booking_end * 1e3, "h:mm a"), " ");
  }
}
async function openRecurringClashModal(data, dialog) {
  const ref = dialog.open(RecurringClashModalComponent, {
    data
  });
  return Promise.race([
    ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
    ref.afterClosed().toPromise()
  ]);
}
var _RecurringClashModalComponent = class _RecurringClashModalComponent {
  constructor() {
    this.event = new EventEmitter();
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
  }
  get clashes() {
    return this._data.clashes || [];
  }
  onConfirm() {
    this.event.emit({ reason: "done" });
    this._dialog_ref.close({ reason: "done" });
  }
};
_RecurringClashModalComponent.\u0275fac = function RecurringClashModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RecurringClashModalComponent)();
};
_RecurringClashModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecurringClashModalComponent, selectors: [["placeos-recurring-clash-modal"]], outputs: { event: "event" }, decls: 35, vars: 21, consts: [[1, "relative"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "h-14", "w-[calc(100%-1rem)]", "min-w-[20rem]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], [1, "flex", "max-h-[60vh]", "w-full", "max-w-[calc(100vw-2rem)]", "flex-col", "items-center", "space-y-4", "overflow-auto", "px-4", "py-2", "sm:max-w-md"], [1, "border-base-200", "bg-warning", "text-warning-content", "flex", "items-center", "space-x-2", "rounded-xl", "border", "p-2", "shadow-sm"], [1, "text-5xl"], [1, "border-base-300", "bg-base-100", "max-h-48", "w-full", "overflow-auto", "rounded-sm", "border"], [1, "w-full", "text-sm"], [1, "bg-base-200", "sticky", "top-0"], [1, "p-2", "text-left"], [1, "border-base-300", "border-t"], [1, "text-base-content/70", "text-center", "text-xs"], [1, "bg-base-200", "sticky", "bottom-0", "m-2", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "border-none", "p-2"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse", "bg-base-100", "flex-1"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click"], [1, "p-2"]], template: function RecurringClashModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "main", 3)(6, "div", 4)(7, "icon", 5);
    \u0275\u0275text(8, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 6)(13, "table", 7)(14, "thead", 8)(15, "tr")(16, "th", 9);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 9);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275repeaterCreate(23, RecurringClashModalComponent_For_24_Template, 8, 12, "tr", 10, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "p", 11);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "footer", 12)(29, "button", 13);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 14);
    \u0275\u0275listener("click", function RecurringClashModalComponent_Template_button_click_32_listener() {
      return ctx.onConfirm();
    });
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "BOOKINGS.RECURRING_CLASHES_TITLE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 9, "BOOKINGS.RECURRING_CLASHES_MSG"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 11, "FORM.DATE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 13, "COMMON.TIME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.clashes);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 15, "BOOKINGS.RECURRING_CLASHES_CONFIRM"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 17, "COMMON.CANCEL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 19, "BOOKINGS.CONTINUE_BOOKING"), " ");
  }
}, dependencies: [
  IconComponent,
  MatDialogModule,
  MatDialogClose,
  MatRippleModule,
  MatRipple,
  TranslatePipe,
  DatePipe
], encapsulation: 2 });
var RecurringClashModalComponent = _RecurringClashModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecurringClashModalComponent, [{
    type: Component,
    args: [{ selector: "placeos-recurring-clash-modal", template: `
        <div class="relative">
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] min-w-[20rem] rounded-sm border-none p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    {{ 'BOOKINGS.RECURRING_CLASHES_TITLE' | translate }}
                </h2>
            </header>
            <main
                class="flex max-h-[60vh] w-full max-w-[calc(100vw-2rem)] flex-col items-center space-y-4 overflow-auto px-4 py-2 sm:max-w-md"
            >
                <div
                    class="border-base-200 bg-warning text-warning-content flex items-center space-x-2 rounded-xl border p-2 shadow-sm"
                >
                    <icon class="text-5xl">warning</icon>
                    <p>
                        {{ 'BOOKINGS.RECURRING_CLASHES_MSG' | translate }}
                    </p>
                </div>
                <div
                    class="border-base-300 bg-base-100 max-h-48 w-full overflow-auto rounded-sm border"
                >
                    <table class="w-full text-sm">
                        <thead class="bg-base-200 sticky top-0">
                            <tr>
                                <th class="p-2 text-left">
                                    {{ 'FORM.DATE' | translate }}
                                </th>
                                <th class="p-2 text-left">
                                    {{ 'COMMON.TIME' | translate }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            @for (clash of clashes; track clash.booking_start) {
                                <tr class="border-base-300 border-t">
                                    <td class="p-2">
                                        {{
                                            clash.booking_start * 1000
                                                | date: 'EEE, MMM d, yyyy'
                                        }}
                                    </td>
                                    <td class="p-2">
                                        {{
                                            clash.booking_start * 1000
                                                | date: 'h:mm a'
                                        }}
                                        -
                                        {{
                                            clash.booking_end * 1000
                                                | date: 'h:mm a'
                                        }}
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
                <p class="text-base-content/70 text-center text-xs">
                    {{ 'BOOKINGS.RECURRING_CLASHES_CONFIRM' | translate }}
                </p>
            </main>
            <footer
                class="bg-base-200 sticky bottom-0 m-2 flex items-center justify-center space-x-2 rounded-sm border-none p-2"
            >
                <button
                    btn
                    matRipple
                    class="inverse bg-base-100 flex-1"
                    mat-dialog-close
                >
                    {{ 'COMMON.CANCEL' | translate }}
                </button>
                <button btn matRipple class="flex-1" (click)="onConfirm()">
                    {{ 'BOOKINGS.CONTINUE_BOOKING' | translate }}
                </button>
            </footer>
        </div>
    `, imports: [
      IconComponent,
      MatDialogModule,
      MatRippleModule,
      TranslatePipe,
      DatePipe
    ] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecurringClashModalComponent, { className: "RecurringClashModalComponent", filePath: "libs/bookings/src/lib/recurring-clash-modal.component.ts", lineNumber: 129 });
})();

// libs/payments/src/lib/card-input-field.component.ts
var _c0 = ["input"];
function CardInputFieldComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", "assets/icons/" + ctx_r1.card_type + ".svg", \u0275\u0275sanitizeUrl);
  }
}
function CardInputFieldComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("value", item_r3[0]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", item_r3[1], " (", item_r3[0], ") ");
  }
}
function CardInputFieldComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("value", item_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4);
  }
}
var BLANK_CARD = { card_number: "                ", cardholder: "", cvv: "" };
var DATE_PIPE = new DatePipe("en-us", "");
var _CardInputFieldComponent = class _CardInputFieldComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this.details = new FormGroup({
      card_number: new FormControl(Array(16).fill("X").join()),
      cardholder: new FormControl(""),
      exp_month: new FormControl(""),
      exp_year: new FormControl(""),
      cvv: new FormControl("", [
        Validators.minLength(3),
        Validators.maxLength(4)
      ])
    });
    this.disabled = false;
    this.months = Array(12).fill(0).map((_, idx) => [
      DATE_PIPE.transform(setMonth(Date.now(), idx), "MM"),
      DATE_PIPE.transform(setMonth(Date.now(), idx), "MMM")
    ]);
    this.years = Array(12).fill(0).map((_, idx) => DATE_PIPE.transform(addYears(Date.now(), idx), "yyyy"));
    this.digits = Array(16).fill(0);
    this._index = 0;
    this._input_el = viewChild.required("input");
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (s) => this.disabled = s;
  }
  get is_amex() {
    const no = this.details.value?.card_number || "";
    return no.startsWith("3");
  }
  get card_type() {
    const no = this.details.value?.card_number || "";
    if (no.startsWith("3"))
      return "amex";
    if (no.startsWith("4"))
      return "visa";
    if (no.startsWith("5"))
      return "mastercard";
    return "";
  }
  get card_display() {
    let no = this.details.value?.card_number || "";
    if (this.card_focused)
      no = no.substring(0, this._index) + "\u2BD0" + no.substring(this._index + 1);
    return this.is_amex ? `${no.substring(0, 4)}-${no.substring(4, 10)}-${no.substring(10)}` : `${no.substring(0, 4)}-${no.substring(4, 8)}-${no.substring(8, 12)}-${no.substring(12)}`;
  }
  get card_focused() {
    const _input_el = this._input_el();
    return document.activeElement === _input_el.nativeElement || document.activeElement === _input_el.nativeElement.parentElement;
  }
  ngOnInit() {
    this.subscription("changes", this.details.valueChanges.subscribe((v) => this.timeout("update", () => this.setValue(this.details.getRawValue()))));
  }
  focusInput() {
    this._input_el().nativeElement.focus();
    this._index = this._input_el().nativeElement.selectionStart || 0;
  }
  onInput(event) {
    if (!event || !this.card_focused)
      return;
    const idx = this._index;
    if (idx < 0 || idx > 16)
      return;
    let card_number = this.details.value.card_number;
    if ((event.code.startsWith("Digit") || event.code.startsWith("Numpad")) && idx < (this.is_amex ? 15 : 16)) {
      card_number = card_number.substring(0, idx) + event.key + card_number.substring(idx + 1);
      this.details.patchValue({ card_number });
      this._focusChange(idx, 1);
    } else if (event.code === "Backspace" && idx > 0) {
      let card_number2 = this.details.value.card_number;
      card_number2 = card_number2.substring(0, idx) + " " + card_number2.substring(idx + 1);
      this.details.patchValue({ card_number: card_number2 });
      this._focusChange(idx, -1);
    } else if (event.code === "ArrowLeft") {
      this._focusChange(idx, -1);
    } else if (event.code === "ArrowRight" && card_number[idx] !== " ") {
      this._focusChange(idx, 1);
    }
  }
  _focusChange(idx, dir) {
    this._index = Math.min(16, Math.max(0, idx + dir));
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    if (this._onChange)
      this._onChange(new_value);
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.details.patchValue(value || BLANK_CARD);
  }
};
_CardInputFieldComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CardInputFieldComponent_BaseFactory;
  return function CardInputFieldComponent_Factory(__ngFactoryType__) {
    return (\u0275CardInputFieldComponent_BaseFactory || (\u0275CardInputFieldComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CardInputFieldComponent)))(__ngFactoryType__ || _CardInputFieldComponent);
  };
})();
_CardInputFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardInputFieldComponent, selectors: [["card-input-field"]], viewQuery: function CardInputFieldComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._input_el, _c0, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    /* istanbul ignore next */
    useExisting: forwardRef(() => _CardInputFieldComponent),
    multi: true
  }
]), \u0275\u0275InheritDefinitionFeature], decls: 51, vars: 4, consts: [["input", ""], [3, "keyup", "formGroup"], [1, "flex", "flex-col"], ["for", "card-number"], ["tabindex", "0", 1, "border-base-200", "focus-within:border-base-200", "relative", "mb-4", "flex", "h-12", "w-full", "items-center", "rounded-sm", "border", "p-2", "font-mono", "focus-within:shadow-sm", 3, "focus"], [1, "flex-1"], ["type", "tel", "maxlength", "17", 1, "absolute", "hidden", 3, "keydown", "value"], [1, "h-8", 3, "src"], [1, "flex", "flex-1", "flex-col"], ["for", "cardholder"], ["appearance", "outline"], ["name", "cardholder", "matInput", "", "placeholder", "Mr John Smith", "formControlName", "cardholder"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "w-1/4", "flex-1", "flex-col"], ["placeholder", "MM", "formControlName", "exp_month"], [3, "value"], ["placeholder", "YYYY", "formControlName", "exp_year"], ["for", "cvv"], ["appearance", "outline", 1, "w-20"], ["name", "cvv", "matInput", "", "formControlName", "cvv", "maxlength", "4"]], template: function CardInputFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 1);
    \u0275\u0275listener("keyup", function CardInputFieldComponent_Template_form_keyup_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onInput($event));
    }, \u0275\u0275resolveWindow);
    \u0275\u0275elementStart(1, "div", 2)(2, "label", 3);
    \u0275\u0275text(3, "Card Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275listener("focus", function CardInputFieldComponent_Template_div_focus_4_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.focusInput());
    });
    \u0275\u0275elementStart(5, "pre", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 6, 0);
    \u0275\u0275listener("keydown", function CardInputFieldComponent_Template_input_keydown_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, CardInputFieldComponent_Conditional_9_Template, 1, 1, "img", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 8)(11, "label", 9);
    \u0275\u0275text(12, "Name on Card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-form-field", 10)(14, "mat-label");
    \u0275\u0275text(15, "Name on Card");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 11);
    \u0275\u0275elementStart(17, "mat-error");
    \u0275\u0275text(18, "Cardholder name is required");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 12)(20, "div", 13)(21, "label", 9);
    \u0275\u0275text(22, "Expiry Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-form-field", 10)(24, "mat-label");
    \u0275\u0275text(25, "Expiry Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-select", 14);
    \u0275\u0275repeaterCreate(27, CardInputFieldComponent_For_28_Template, 2, 3, "mat-option", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-error");
    \u0275\u0275text(30, "Expiry month is required");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 13)(32, "label", 9);
    \u0275\u0275text(33, "Expiry Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "mat-form-field", 10)(35, "mat-label");
    \u0275\u0275text(36, "Expiry Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-select", 16);
    \u0275\u0275repeaterCreate(38, CardInputFieldComponent_For_39_Template, 2, 2, "mat-option", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "mat-error");
    \u0275\u0275text(41, "Expiry year is required");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 2)(43, "label", 17);
    \u0275\u0275text(44, "CVV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "mat-form-field", 18)(46, "mat-label");
    \u0275\u0275text(47, "CVV");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "input", 19);
    \u0275\u0275elementStart(49, "mat-error");
    \u0275\u0275text(50, "Invalid security code");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("formGroup", ctx.details);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.card_display);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx.details.value.card_number == null ? null : ctx.details.value.card_number.trim());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.card_type ? 9 : -1);
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx.months);
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx.years);
  }
}, dependencies: [MatFormFieldModule, MatFormField, MatLabel, MatError, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25rem;\n}\n/*# sourceMappingURL=card-input-field.component.css.map */"] });
var CardInputFieldComponent = _CardInputFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardInputFieldComponent, [{
    type: Component,
    args: [{ selector: "card-input-field", template: `
        <form [formGroup]="details" (window:keyup)="onInput($event)">
            <div class="flex flex-col">
                <label for="card-number">Card Number</label>
                <div
                    tabindex="0"
                    class="border-base-200 focus-within:border-base-200 relative mb-4 flex h-12 w-full items-center rounded-sm border p-2 font-mono focus-within:shadow-sm"
                    (focus)="focusInput()"
                >
                    <pre class="flex-1">{{ card_display }}</pre>
                    <input
                        #input
                        class="absolute hidden"
                        type="tel"
                        [value]="details.value.card_number?.trim()"
                        (keydown)="(false)"
                        maxlength="17"
                    />
                    @if (card_type) {
                        <img
                            [src]="'assets/icons/' + card_type + '.svg'"
                            class="h-8"
                        />
                    }
                </div>
            </div>
            <div class="flex flex-1 flex-col">
                <label for="cardholder">Name on Card</label>
                <mat-form-field appearance="outline">
                    <mat-label>Name on Card</mat-label>
                    <input
                        name="cardholder"
                        matInput
                        placeholder="Mr John Smith"
                        formControlName="cardholder"
                    />
                    <mat-error>Cardholder name is required</mat-error>
                </mat-form-field>
            </div>
            <div class="flex items-center space-x-2">
                <div class="flex w-1/4 flex-1 flex-col">
                    <label for="cardholder">Expiry Month</label>
                    <mat-form-field appearance="outline">
                        <mat-label>Expiry Month</mat-label>
                        <mat-select
                            placeholder="MM"
                            formControlName="exp_month"
                        >
                            @for (item of months; track item) {
                                <mat-option [value]="item[0]">
                                    {{ item[1] }} ({{ item[0] }})
                                </mat-option>
                            }
                        </mat-select>
                        <mat-error>Expiry month is required</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex w-1/4 flex-1 flex-col">
                    <label for="cardholder">Expiry Year</label>
                    <mat-form-field appearance="outline">
                        <mat-label>Expiry Year</mat-label>
                        <mat-select
                            placeholder="YYYY"
                            formControlName="exp_year"
                        >
                            @for (item of years; track item) {
                                <mat-option [value]="item">{{
                                    item
                                }}</mat-option>
                            }
                        </mat-select>
                        <mat-error>Expiry year is required</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="cvv">CVV</label>
                    <mat-form-field appearance="outline" class="w-20">
                        <mat-label>CVV</mat-label>
                        <input
                            name="cvv"
                            matInput
                            formControlName="cvv"
                            maxlength="4"
                        />
                        <mat-error>Invalid security code</mat-error>
                    </mat-form-field>
                </div>
            </div>
        </form>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => CardInputFieldComponent),
        multi: true
      }
    ], imports: [
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      ReactiveFormsModule
    ], styles: ["/* angular:styles/component:css;2bc8ca7aace10e46f51053cb2cf4127500bd9fcd06c7c0d1d5dc88d70d997800;/home/runner/work/user-interfaces/user-interfaces/libs/payments/src/lib/card-input-field.component.ts */\nmat-form-field {\n  height: 3.25rem;\n}\n/*# sourceMappingURL=card-input-field.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardInputFieldComponent, { className: "CardInputFieldComponent", filePath: "libs/payments/src/lib/card-input-field.component.ts", lineNumber: 142 });
})();

// libs/payments/src/lib/payment-modal.component.ts
function PaymentModalComponent_Conditional_0_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "date");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate2(" between ", \u0275\u0275pipeBind2(1, 2, ctx_r1.details.date, "shortTime"), " and ", \u0275\u0275pipeBind2(2, 5, ctx_r1.details.date + ctx_r1.details.duration * 60 * 1e3, "shortTime"), " ");
  }
}
function PaymentModalComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 2)(1, "h2", 3);
    \u0275\u0275text(2, "Booking Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "img", 4);
    \u0275\u0275elementStart(4, "p", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275conditionalCreate(7, PaymentModalComponent_Conditional_0_Conditional_1_Conditional_7_Template, 3, 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 6);
    \u0275\u0275text(9, "You booking will cost:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 7)(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "card-input-field", 8);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentModalComponent_Conditional_0_Conditional_1_Template_card_input_field_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.card_details, $event) || (ctx_r1.card_details = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "footer", 9)(16, "button", 10);
    \u0275\u0275listener("click", function PaymentModalComponent_Conditional_0_Conditional_1_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.processPayment());
    });
    \u0275\u0275text(17, " Make Payment ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 11)(19, "i", 12);
    \u0275\u0275text(20, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate3(" You are requesting a ", ctx_r1.details.type, " booking in ", ctx_r1.details.resource_name, " for ", \u0275\u0275pipeBind2(6, 6, ctx_r1.details.date, "mediumDate"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.details.all_day ? 7 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 9, ctx_r1.details.amount / 100, ctx_r1.code));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.card_details);
  }
}
function PaymentModalComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 13)(1, "h2", 3);
    \u0275\u0275text(2, "Payment Successful");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "img", 15);
    \u0275\u0275elementStart(18, "footer", 16)(19, "button", 17);
    \u0275\u0275text(20, " Great, thanks. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Ref #", ctx_r1.transaction_id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(7, 6, ctx_r1.details.amount / 100, ctx_r1.code), " paid.");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.details.resource_name, " booked.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 9, ctx_r1.details.date, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(15, 12, ctx_r1.details.date, "shortTime"), " and ", \u0275\u0275pipeBind2(16, 15, ctx_r1.details.date + ctx_r1.details.duration * 60 * 1e3, "shortTime"), " ");
  }
}
function PaymentModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, PaymentModalComponent_Conditional_0_Conditional_1_Template, 21, 12)(2, PaymentModalComponent_Conditional_0_Conditional_2_Template, 21, 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.success ? 1 : 2);
  }
}
function PaymentModalComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "mat-spinner", 18);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, ctx_r1.loading));
  }
}
var _PaymentModalComponent = class _PaymentModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._org = inject(OrganisationService);
    this.event = output();
    this.details = this._data;
    this.loading = this._data.loading;
    this.success = false;
    this.transaction_id = "12345678";
  }
  get code() {
    return this._org.currency_code;
  }
  async processPayment() {
    if (!this.card_details || !this._validCardDetails())
      return;
    this.event.emit(this.card_details);
    await this._data.makePayment(this.card_details);
    this.success = true;
  }
  _validCardDetails() {
    return (this.card_details?.cardholder.length || 0) > 0 && (this.card_details?.cvv.length || 0) >= 3;
  }
};
_PaymentModalComponent.\u0275fac = function PaymentModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PaymentModalComponent)();
};
_PaymentModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentModalComponent, selectors: [["payment-modal"]], outputs: { event: "event" }, decls: 3, vars: 3, consts: [[1, "relative", "max-h-screen", "overflow-auto"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "p-8"], [1, "relative", "flex", "w-[24rem]", "flex-col", "items-center", "space-y-2", "px-4", "pt-8"], [1, "text-2xl", "font-medium"], ["src", "assets/icons/cost.svg", 1, "w-1/2"], [1, "pb-2", "text-center", "text-sm"], [1, "text-sm"], [1, "text-center", "text-lg", "font-medium"], [1, "w-full", 3, "ngModelChange", "ngModel"], [1, "p-4"], ["matRipple", "", 1, "w-full", 3, "click"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "top-1", "left-1"], [1, "material-symbols-rounded", "text-2xl"], [1, "relative", "flex", "w-[24rem]", "flex-col", "px-8", "pt-8"], [1, "mb-2", "text-xl", "font-medium"], ["src", "assets/icons/payment-confirmed.svg", 1, "w-full"], [1, "border-base-200", "border-t", "p-4"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "w-full"], ["diameter", "32"]], template: function PaymentModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PaymentModalComponent_Conditional_0_Template, 3, 1, "div", 0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalBranchCreate(2, PaymentModalComponent_Conditional_2_Template, 5, 3, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(1, 1, ctx.loading) ? 0 : 2);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  CurrencyPipe,
  DatePipe,
  FormsModule,
  NgControlStatus,
  NgModel,
  CardInputFieldComponent,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatRippleModule,
  MatRipple,
  MatDialogModule,
  MatDialogClose
], encapsulation: 2 });
var PaymentModalComponent = _PaymentModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentModalComponent, [{
    type: Component,
    args: [{ selector: "payment-modal", template: `
        @if (!(loading | async)) {
            <div class="relative max-h-screen overflow-auto">
                @if (!success) {
                    <main
                        class="relative flex w-[24rem] flex-col items-center space-y-2 px-4 pt-8"
                    >
                        <h2 class="text-2xl font-medium">Booking Payment</h2>
                        <img src="assets/icons/cost.svg" class="w-1/2" />
                        <p class="pb-2 text-center text-sm">
                            You are requesting a {{ details.type }} booking in
                            {{ details.resource_name }} for
                            {{ details.date | date: 'mediumDate' }}
                            @if (!details.all_day) {
                                between
                                {{ details.date | date: 'shortTime' }} and
                                {{
                                    details.date + details.duration * 60 * 1000
                                        | date: 'shortTime'
                                }}
                            }
                        </p>
                        <p class="text-sm">You booking will cost:</p>
                        <p class="text-center text-lg font-medium">
                            <strong>{{
                                details.amount / 100 | currency: code
                            }}</strong>
                        </p>
                        <card-input-field
                            class="w-full"
                            [(ngModel)]="card_details"
                        ></card-input-field>
                    </main>
                    <footer class="p-4">
                        <button
                            matRipple
                            class="w-full"
                            (click)="processPayment()"
                        >
                            Make Payment
                        </button>
                    </footer>
                    <button
                        icon
                        matRipple
                        mat-dialog-close
                        class="absolute top-1 left-1"
                    >
                        <i class="material-symbols-rounded text-2xl">close</i>
                    </button>
                } @else {
                    <main class="relative flex w-[24rem] flex-col px-8 pt-8">
                        <h2 class="text-2xl font-medium">Payment Successful</h2>
                        <h3 class="mb-2 text-xl font-medium">
                            Ref #{{ transaction_id }}
                        </h3>
                        <p>{{ details.amount / 100 | currency: code }} paid.</p>
                        <p>{{ details.resource_name }} booked.</p>
                        <p>{{ details.date | date: 'mediumDate' }}</p>
                        <p>
                            {{ details.date | date: 'shortTime' }} and
                            {{
                                details.date + details.duration * 60 * 1000
                                    | date: 'shortTime'
                            }}
                        </p>
                    </main>
                    <img
                        src="assets/icons/payment-confirmed.svg"
                        class="w-full"
                    />
                    <footer class="border-base-200 border-t p-4">
                        <button btn matRipple mat-dialog-close class="w-full">
                            Great, thanks.
                        </button>
                    </footer>
                }
            </div>
        } @else {
            <div
                class="flex h-full w-full flex-col items-center justify-center p-8"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ loading | async }}</p>
            </div>
        }
    `, imports: [
      CommonModule,
      FormsModule,
      CardInputFieldComponent,
      MatProgressSpinnerModule,
      MatRippleModule,
      MatDialogModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentModalComponent, { className: "PaymentModalComponent", filePath: "libs/payments/src/lib/payment-modal.component.ts", lineNumber: 129 });
})();

// libs/payments/src/lib/payments.service.ts
var STRIPE_MODULE = "Payment";
var _PaymentsService = class _PaymentsService {
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this._loading = new BehaviorSubject("");
    this._active_card = new BehaviorSubject("");
    this.loading = this._loading.asObservable();
    this.payment_sources = of(1).pipe(switchMap(() => {
      const mod = this._org.module("payments", STRIPE_MODULE);
      if (!mod)
        return of([]);
      return mod.execute("list_payment_methods", ["card"]);
    }), tap((_) => _[0] ? this._active_card.next(_[0].id) : ""), shareReplay(1));
  }
  get enabled() {
    return !!this._org.module("payments", STRIPE_MODULE);
  }
  async makePayment(details) {
    if (!this._org.module("payments", STRIPE_MODULE))
      throw "Payments not enabled";
    const [cost, period] = await this._getCostOfProduct(details?.type).catch((_) => [0, 60]);
    console.log("Cost:", cost, period);
    if (cost <= 0)
      return;
    let customer_id = this._settings.get("STRIPE_Customer_ID");
    if (!customer_id)
      customer_id = await this._newCustomerID();
    this._settings.saveUserSetting("STRIPE_Customer_ID", customer_id);
    const amount = cost * (details.duration / period);
    let result = void 0;
    const makePayment = async (c) => {
      result = await this._processPayment(amount, customer_id, c).catch((e) => {
        this._loading.next("");
        throw e;
      });
    };
    const data = __spreadProps(__spreadValues({}, details), {
      rate: `$${(cost / 100).toFixed(2)} per hour`,
      amount,
      makePayment,
      loading: this.loading
    });
    const ref = this._dialog.open(PaymentModalComponent, { data });
    await ref.afterClosed().toPromise();
    return result;
  }
  async _addPaymentMethod(card) {
    const mod = this._org.module("payments", STRIPE_MODULE);
    if (!mod)
      throw "Unable to load module";
    const payment_method = await mod.execute("add_payment_method", [
      "card",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      card
    ]);
    return payment_method.id || payment_method;
  }
  async _getCostOfProduct(type) {
    const price = [0, 60];
    const mod = this._org.module("payments", STRIPE_MODULE);
    if (!mod)
      return price;
    const product_list = await mod.execute("get_product_prices", [
      null,
      null,
      type
    ]);
    if (!product_list.length)
      return price;
    return product_list;
  }
  async _processPayment(amount, customer_id, card_details) {
    this._loading.next("Checking payment method...");
    console.log("Getting payment method...");
    const source = card_details ? await this._addPaymentMethod(card_details) : this._active_card.getValue();
    if (!source)
      throw "No payment source selected";
    this._loading.next("Processing payment...");
    console.log("Processing payment...");
    const mod = this._org.module("payments", STRIPE_MODULE);
    if (!mod)
      throw "Unable to load module";
    const id = await mod.execute("create_payment_intent", [
      amount,
      this._org.building.currency || "USD",
      null,
      null,
      customer_id,
      null,
      null,
      null,
      currentUser()?.email
    ]);
    if (!id)
      throw "Failed to create payment";
    console.log("Confirming payment...");
    await mod.execute("confirm_payment_intent", [id, source]);
    this._loading.next("");
    return {
      success: true,
      state: "approved",
      invoice_id: id,
      amount,
      created_at: Date.now(),
      updated_at: Date.now()
    };
  }
  async _newCustomerID() {
    const mod = this._org.module("payments", STRIPE_MODULE);
    if (!mod)
      throw "Unable to load module";
    const user = currentUser();
    const id = await mod.execute("create_customer", [
      0,
      null,
      null,
      null,
      `${user.id}|${user.name}|FromPlaceOS`,
      user.email
    ]);
    return id;
  }
};
_PaymentsService.\u0275fac = function PaymentsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PaymentsService)();
};
_PaymentsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaymentsService, factory: _PaymentsService.\u0275fac, providedIn: "root" });
var PaymentsService = _PaymentsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// libs/bookings/src/lib/booking-form.service.ts
var BOOKING_TYPES = ["desk", "parking", "locker", "catering"];
var _BookingFormService = class _BookingFormService extends AsyncHandler {
  get booking() {
    return this._booking.getValue();
  }
  resourceUserName(id) {
    return this._resource_use[id];
  }
  newForm(type, booking = new Booking({})) {
    if (type !== this._options.getValue().type)
      this.clearForm();
    this.setOptions({ type });
    if (!booking.id) {
      booking.all_day = this._settings.get(`app.${type}s.all_day_default`) ?? this._settings.get(`app.${type}.all_day_default`) ?? this._settings.get("app.bookings.all_day_default");
    }
    this.form.reset();
    this.form.patchValue(hs(__spreadValues(__spreadValues({}, booking.extension_data), booking), [null, void 0, ""]));
    this.subscription("form_change", this.form.valueChanges.subscribe(() => {
      const { date, duration } = this.form.getRawValue();
      this._assets.setOptions({ date, duration });
      this.storeForm();
    }));
    this.timeout("date", async () => this.form.patchValue({
      date: booking.date,
      duration: booking.duration
    }));
    this._booking.next(new Booking(booking));
    this._options.next({ type: this._options.getValue().type });
    this.timeout("set-resource", async () => {
      const resources = this.form.getRawValue().resources;
      if (!resources?.length)
        return;
      const item_list = await nextValueFrom(this.resources);
      const new_list = resources.map((asset) => item_list.find((_) => _.id == asset.id) || asset);
      this.form.patchValue({ resources: new_list });
    });
  }
  constructor() {
    super();
    this._router = inject(Router);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._payments = inject(PaymentsService);
    this._assets = inject(AssetStateService);
    this._options = new BehaviorSubject({
      type: "desk"
    });
    this._booking = new BehaviorSubject(null);
    this._resource_use = {};
    this._loading = new BehaviorSubject("");
    this.last_success = new Booking(JSON.parse(sessionStorage.getItem("PLACEOS.last_booked_booking") || "{}"));
    this.loading = this._loading.asObservable();
    this.options = this._options.pipe(shareReplay(1));
    this.form = generateBookingForm();
    this.view = signal("form");
    this.resources = combineLatest([
      this._org.active_building,
      this.options.pipe(distinctUntilKeyChanged("type"))
    ]).pipe(debounceTime(300), switchMap(([bld, { type }]) => {
      if (!bld)
        return of([]);
      const useRegion = () => this._settings.get("app.use_region");
      switch (type) {
        case "desk":
          this._loading.next(i18n("BOOKINGS.DESKS_LOADING"));
          return this.loadResourceList("desks");
        case "parking":
          this._loading.next(i18n("BOOKINGS.PARKING_LOADING"));
          return this.loadParkingResources();
        case "locker":
          this._loading.next(i18n("BOOKINGS.LOCKERS_LOADING"));
          return loadLockers(this._org, of([bld]), loadLockerBanks(this._org, of([bld]), useRegion), useRegion);
      }
      return of([]);
    }), tap(() => this._loading.next(``)), shareReplay(1));
    this.features = this.resources.pipe(map((resource) => {
      const list = [];
      for (const { features } of resource) {
        features instanceof Array ? features.forEach((_) => list.push(_)) : null;
      }
      return unique(list).sort((a, b) => a.localeCompare(b));
    }), shareReplay(1));
    this.booking_rules = combineLatest([this._org.building_list, this._options]).pipe(switchMap(([list, { type }]) => Promise.all(list.map((bld) => lastValueFrom(nc(bld.id, `${type}_booking_rules`))))), map((building_rules) => {
      const mapping = {};
      for (const rules of building_rules) {
        mapping[rules.id] = rules.details instanceof Array ? rules.details : [];
      }
      return mapping;
    }), shareReplay(1));
    this.available_resources = combineLatest([
      this.options,
      this.resources,
      this.booking_rules,
      merge(this.form.get("user").valueChanges, timer(1e3)),
      merge(this.form.get("date").valueChanges, timer(1e3)),
      merge(this.form.get("duration").valueChanges, timer(1e3))
    ]).pipe(filter(() => this.form.getRawValue().date > 0 && this.form.getRawValue().duration > 0), debounceTime(500), tap(([{ type }]) => this._loading.next(i18n("BOOKINGS.LOADING_AVAILABILITY", { type }))), switchMap(([options, resources, restrictions]) => {
      let { all_day, date, duration, user } = this.form.getRawValue();
      if (all_day) {
        date = startOfDay(date).valueOf();
        duration = 24 * 60 - 1;
      }
      return bookedResourceList({
        period_start: getUnixTime(date),
        period_end: getUnixTime(addMinutes(date, duration)),
        type: options.type,
        zones: options.zone_id || (this._settings.get("app.use_region") ? this._org.region?.id : this._org.building?.id) || this._org.organisation.id
      }).pipe(map((booked_ids) => {
        this._resource_use = {};
        for (const id of booked_ids) {
          this._resource_use[id] = " ";
        }
        const available = resources.filter((asset) => {
          const is_restricted = rulesForResource({
            date,
            duration,
            resource: asset,
            host: user || currentUser()
          }, restrictions[asset.zone?.id] || restrictions[asset.zone?.parent_id] || restrictions[this._org.building.id] || []).hidden;
          return !is_restricted && (!asset.groups?.length || asset.groups.some((grp) => currentUser().groups.includes(grp))) && asset.bookable !== false && (!options.features || options.features?.every((_) => asset.features.includes(_))) && (!options.zone_id || options.zone_id === asset.zone?.id || options.zone_id === asset.zone?.parent_id) && !booked_ids.includes(asset.id);
        });
        return available;
      }), catchError(() => of([])));
    }), tap(() => this._loading.next("")), shareReplay(1));
    this.grouped_availability = combineLatest([
      this.options,
      this.available_resources
    ]).pipe(map(([options, resource]) => {
      const groups = [];
      const asset_list = [...resource].sort((a, b) => a.zone?.id?.localeCompare(b.zone?.id));
      const members = options.members?.length ? options.members : [currentUser()];
      while (asset_list.length) {
        const group = [];
        let asset = asset_list.pop();
        while (group.length < members.length) {
          if (group.length && !group.find((_) => _.zone?.id === asset.zone?.id)) {
            break;
          }
          group.push(asset);
          asset = asset_list.pop();
        }
        if (group.length < members.length)
          continue;
        groups.push(group);
      }
      return groups;
    }));
    this.subscription("router.bookings", this._router.events.subscribe((booking) => {
      if (booking instanceof NavigationEnd && !booking.url.includes("book") && !BOOKING_TYPES.find((_) => booking.url.includes(_))) {
        this.clearForm();
      }
    }));
    this._org.initialised.pipe(first((_) => _)).subscribe(() => this.setOptions({}));
  }
  setView(value) {
    this.view.set(value);
  }
  setOptions(value) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), value));
  }
  setFeature(feature, enable) {
    if (!feature?.length)
      return;
    const features = this._options.getValue()?.features || [];
    if (enable && !features.includes(feature))
      features.push(feature);
    if (!enable && features.includes(feature))
      features.splice(features.findIndex((e) => e === feature), 1);
    this.setOptions({ features });
  }
  resetForm() {
    if (!sessionStorage.getItem("PLACEOS.booking_form")) {
      return this.newForm(this._options.getValue().type);
    }
    const booking = this._booking.getValue();
    this.form.reset({ user: currentUser(), booked_by: currentUser() });
    this.form.patchValue(hs(__spreadValues(__spreadValues({}, booking || {}), booking?.extension_data || {}), [null, void 0, ""]));
    this._options.next({ type: this._options.getValue().type });
  }
  clearForm() {
    sessionStorage.removeItem("PLACEOS.booking_form");
    sessionStorage.removeItem("PLACEOS.booking_form_options");
    this.newForm(this._options.getValue().type);
  }
  storeForm() {
    sessionStorage.setItem("PLACEOS.booking_form", JSON.stringify(__spreadValues(__spreadValues({}, this._booking.getValue()), hs(this.form.getRawValue() || {}, [
      null,
      void 0,
      ""
    ]))));
    sessionStorage.setItem("PLACEOS.booking_form_filters", JSON.stringify(this._options.getValue() || {}));
  }
  loadForm() {
    this.form.reset({ user: currentUser(), booked_by: currentUser() });
    const data = JSON.parse(sessionStorage.getItem("PLACEOS.booking_form") || "{}");
    const booking = new Booking(data);
    this._booking.next(booking);
    const booking_data = hs(__spreadValues(__spreadValues(__spreadValues({}, data), booking || {}), booking?.extension_data || {}), [null, void 0, ""]);
    this.form.patchValue(booking_data);
    this.setOptions(__spreadValues({}, JSON.parse(sessionStorage.getItem("PLACEOS.booking_form_filters") || "{}")));
  }
  clearOldState() {
    sessionStorage.removeItem("PLACEOS.last_booked_booking");
    this.last_success = new Booking();
  }
  openBookingLinkModal(force = false) {
    this.form.markAllAsTouched();
    if (!this.form.valid && !force)
      return;
    const event = new Booking(__spreadValues(__spreadValues({}, this.booking), this.form.getRawValue()));
    this._dialog.open(BookingLinkModalComponent, { data: event });
  }
  async confirmPost() {
    await this.checkQuestions();
    const options = this._options.getValue();
    const value = this.form.getRawValue();
    const content = i18n(options.group ? "BOOKINGS.CONFIRM_MSG_GROUP" : "BOOKINGS.CONFIRM_MSG", {
      type: options.type,
      date: format(value.date, "dd MMM yyyy") + (value.duration < 12 * 60 ? " at " + format(value.date, "h:mm a") : "")
    });
    const details = await openConfirmModal({
      title: i18n("BOOKINGS.CONFIRM_TITLE", { type: options.type }),
      content,
      icon: { content: "event_available" }
    }, this._dialog);
    if (details?.reason !== "done")
      throw "User cancelled";
    details.loading(i18n("BOOKINGS.CONFIRM_LOADING"));
    if (options.group) {
      await this.postFormForGroup().catch((_) => {
        notifyError(JSON.stringify(_));
        details.close();
        throw _;
      });
    } else
      await this.postForm().catch((_) => {
        notifyError(JSON.stringify(_));
        details.close();
        throw _;
      });
    details.close();
  }
  async postForm(ignore_check = false) {
    if (!this.form)
      throw "No form for booking";
    if (!this.form.valid)
      throw `Some form fields are invalid. [${getInvalidFields(this.form).join(", ")}]`;
    this.form.patchValue({
      booking_type: this.form.getRawValue().booking_type || this._options.getValue().type
    });
    const value = this.form.getRawValue();
    const booking = this._booking.getValue() || new Booking();
    if (!ignore_check) {
      const host = value.user?.email || value.user_email || currentUser()?.email;
      await this._checkResourceAvailable(__spreadProps(__spreadValues(__spreadValues({}, booking), value), {
        user_email: host
      }), this._options.getValue().type);
      await this._checkResourceRules(value.resources, value.date, value.duration, host);
      await this._checkRecurringClashes(__spreadProps(__spreadValues(__spreadValues({}, booking), value), {
        user_email: host
      }), this._options.getValue().type);
    }
    if (this._payments.enabled) {
      const receipt = await this._payments.makePayment({
        type: this._options.getValue().type,
        resource_name: value.asset_name,
        date: value.date,
        duration: value.duration,
        all_day: value.all_day
      });
      if (!receipt?.success)
        return;
      value.extension_data = {
        invoice: receipt,
        invoice_id: receipt.invoice_id
      };
    }
    value.zones = unique([
      ...value?.zones || [],
      ...this._booking.getValue()?.zones || [],
      ...value.booking_asset?.zones || []
    ].filter((_) => _));
    this._loading.next("Saving booking");
    delete value.booking_asset;
    if (value.all_day) {
      value.date = startOfDay(value.date).valueOf();
      value.duration = 24 * 60 - 1;
    }
    const { event_id, parent_id } = value;
    delete value.event_id;
    const resources = value.resources || [];
    const zone = this._org.levelWithID(resources[0]?.zone_id) || resources[0]?.zone;
    const zones = zone && zone instanceof Object ? unique([
      this._org.organisation.id,
      this._org.region?.id,
      zone.parent_id,
      zone.id
    ]) : [this._org.organisation.id, this._org.region?.id];
    const q = event_id ? { ical_uid: value.ical_uid, event_id } : parent_id ? { booking_id: parent_id } : {};
    if (booking.instance && !value.update_master) {
      q.instance = true;
      q.start_time = booking.booking_start;
    }
    if (value.recurrence_type && value.recurrence_type !== "none") {
      const available_period = getUnixTime(endOfDay(addDays(Date.now(), this._settings.get(`app.${value.booking_type}s.available_period`) || 90)));
      if (!value.recurrence_end || value.recurrence_end > available_period) {
        value.recurrence_end = available_period;
      }
    }
    const result = await lastValueFrom(saveBooking(new Booking(__spreadProps(__spreadValues(__spreadValues({}, this._options.getValue()), value), {
      description: value.asset_name || value.description,
      user_name: value.user?.name || value.user_name,
      user_email: value.user?.email || value.user_email,
      extension_data: __spreadProps(__spreadValues({}, value.extension_data || {}), {
        assets: value.assets.map((_) => _.toJSON()),
        group: value.group,
        phone: value.phone,
        company: value.company,
        department: value.user?.department || currentUser()?.department
      }),
      approved: this._settings.get("app.bookings.no_approval") === true,
      zones: unique([...zones, ...value.zones || []]).filter((_) => _)
    })), q)).catch((e) => {
      this._loading.next("");
      throw e?.error || e;
    });
    if (value.assets?.length || booking.extension_data.assets?.length) {
      const requests = await validateAssetRequestsForResource(__spreadProps(__spreadValues({}, result), { from_booking: true }), {
        date: value.date,
        duration: value.duration,
        all_day: value.all_day,
        host: value.booked_by_email,
        zones: unique([...zones, ...value.zones || []]).filter((_) => _)
      }, value.assets).catch((e) => {
        console.error("Couldn't update asset requests", e);
        if (e?.status === 409) {
          notifyError(i18n("BOOKINGS.ASSETS_CLASH_ERROR"));
        }
        this._loading.next("");
        throw e?.error || e;
      });
      if (!requests)
        throw i18n("BOOKINGS.ASSETS_INVALID_ERROR");
      await requests();
    }
    this._loading.next("");
    const { booking_type } = value;
    this.clearForm();
    this.form?.patchValue({ booking_type });
    this.last_success = result;
    sessionStorage.setItem("PLACEOS.last_booked_booking", JSON.stringify(result));
    this.setView("success");
    return result;
  }
  async postFormForGroup() {
    const { members, group, type } = this._options.getValue();
    if (!group)
      throw i18n("BOOKINGS.GROUP_NOT_SET");
    const extra_members = members.filter((_) => _.email !== currentUser().email);
    if (extra_members.length <= 0)
      throw i18n("BOOKINGS.GROUP_NO_MEMBERS");
    const form = this.form.getRawValue();
    const asset_list = await nextValueFrom(this.available_resources);
    const active_resource = asset_list.find((_) => _.id === form.asset_id || _.map_id === form.asset_id);
    const level = this._org.levelWithID([active_resource.zone?.id]);
    const resources = [
      active_resource,
      ...await this._getNearbyResources(level.map_id, form.asset_id, asset_list, extra_members.length)
    ];
    const group_members = unique([currentUser(), ...extra_members], "email");
    const available = await Promise.all(group_members.map((_, idx) => this._checkResourceAvailable(__spreadProps(__spreadValues({}, form), {
      asset_id: resources[idx].map_id || resources[idx].id,
      user_email: _.email
    }), type)));
    const unavailable = group_members.filter((_, idx) => !available[idx]);
    const group_name = `${currentUser().email}[${format(Date.now(), "yyyy-MM-dd")}]`;
    let user_booking = null;
    let id = "";
    for (let i = 0; i < group_members.length; i++) {
      if (!available[i])
        continue;
      const user = group_members[i];
      const asset = resources[i];
      const assets = user.email == currentUser().email ? form.assets : [];
      this.form.patchValue(__spreadProps(__spreadValues({}, form), {
        assets,
        parent_id: id,
        user,
        user_email: user.email,
        user_id: user.id,
        asset_id: asset?.id,
        asset_name: asset.name,
        description: asset.name,
        map_id: asset?.map_id || asset?.id,
        group: group_name,
        zones: (asset.zone ? unique([
          this._org.organisation.id,
          this._org.region?.id,
          asset?.zone?.parent_id,
          asset?.zone?.id
        ]) : [this._org.organisation.id, this._org.region?.id]).filter((_) => _)
      }));
      const bkn = await this.postForm(true);
      if (bkn.id && !id)
        id = bkn.id;
      if (bkn.user_email === currentUser().email)
        user_booking = bkn;
    }
    if (unavailable.length) {
      notifyWarn(i18n("BOOKINGS.GROUP_SOME_HAVE_BOOKINGS", {
        members: unavailable.map((_) => _.name || _.email)?.join(", ")
      }));
    }
    return user_booking;
  }
  async checkQuestions() {
    if (this._settings.get("app.desks.ignore_questions") !== false)
      return;
    const ref = this._dialog.open(DeskQuestionsModalComponent);
    const result = await Promise.race([
      lastValueFrom(ref.componentInstance.event.pipe(first((_) => _.reason === "done"))),
      lastValueFrom(ref.afterClosed())
    ]);
    if (result?.reason !== "done")
      throw "User cancelled";
    const form = ref.componentInstance.form.getRawValue();
    for (const key in form) {
      if (form[key])
        throw "User failed questionaire";
    }
    ref.close();
  }
  /** Check if the given resource is available for the selected user to book */
  async _checkResourceAvailable({ id, asset_id, date, duration, user_email }, type) {
    if (!user_email)
      throw i18n("BOOKINGS.NO_USER");
    if (type === "group-event")
      return true;
    const bookings = await lastValueFrom(queryBookings({
      period_start: getUnixTime(date),
      period_end: getUnixTime(date + duration * 60 * 1e3),
      type,
      email: user_email,
      limit: 1e3
    }));
    const active_bookings = bookings.filter((_) => _.status !== "declined" && _.status !== "cancelled" && !_.rejected);
    if (active_bookings.find((_) => _.asset_id === asset_id && id !== _.id)) {
      throw i18n(asset_id.includes("@") ? "BOOKINGS.VISITOR_BOOKED" : "BOOKINGS.RESOURCE_BOOKED", { name: asset_id });
    }
    const allowed_bookings = this._settings.get(`app.bookings.allowed_daily_${type}_count`) ?? 1;
    if (allowed_bookings > 0 && active_bookings.filter((_) => _.user_email.toLowerCase() === (user_email || currentUser()?.email || "").toLowerCase() && _.id !== id).length >= allowed_bookings) {
      const current = user_email === currentUser()?.email;
      throw i18n(current ? "BOOKINGS.CLASH_CURRENT_USER" : "BOOKINGS.CLASH_OTHER_USER", { name: user_email });
    }
    return true;
  }
  async _checkResourceRules(assets, date, duration, host) {
    const current_user = currentUser();
    const user = current_user.email === host ? current_user : await lastValueFrom(Ea(host)).catch(() => ({
      email: host
    }));
    if (!assets?.length)
      return true;
    const rules = await nextValueFrom(this.booking_rules);
    const resource_rules = assets?.filter((s) => s?.zone)?.map((space) => {
      const bld = this._org.buildings.find((b) => space.zone?.parent_id === b.id);
      return rulesForResource({
        date,
        duration,
        host: new User(user),
        resource: space
      }, rules[bld?.id] || []);
    });
    if (!resource_rules.every((_) => !_.hidden)) {
      throw i18n("BOOKINGS.RULES_HIDDEN", { type: this._options.getValue().type || "resource" }, assets.length);
    }
    return true;
  }
  /**
   * Check for clashing bookings in a recurring booking series
   * @param booking The booking to check for clashes
   * @param type The booking type
   * @returns true if no clashes or user confirmed to continue
   * @throws Error if first instance clashes or clashes not allowed
   */
  async _checkRecurringClashes(booking, type) {
    if (!booking.recurrence_type || booking.recurrence_type === "none") {
      return true;
    }
    const temp_booking = new Booking(__spreadProps(__spreadValues({}, booking), {
      booking_type: type
    }));
    const clashes = await lastValueFrom(findBookingClashes(temp_booking, { include_clash_time: true }));
    if (!clashes?.length) {
      return true;
    }
    const sorted_clashes = [...clashes].sort((a, b) => a.booking_start - b.booking_start);
    const booking_start_unix = Math.floor(booking.date / 1e3);
    const first_clash = sorted_clashes[0];
    const is_first_instance_clash = first_clash.booking_start === booking_start_unix;
    if (is_first_instance_clash) {
      throw i18n("BOOKINGS.FIRST_INSTANCE_CLASH");
    }
    const allow_clashes = this._settings.get(`app.${type}s.allow_recurring_instance_clashes`) ?? this._settings.get(`app.${type}.allow_recurring_instance_clashes`) ?? this._settings.get("app.bookings.allow_recurring_instance_clashes") ?? true;
    if (!allow_clashes) {
      throw i18n("BOOKINGS.RECURRING_CLASHES_NOT_ALLOWED", {
        count: clashes.length
      });
    }
    const result = await openRecurringClashModal({ clashes: sorted_clashes }, this._dialog);
    if (result?.reason !== "done") {
      throw "User cancelled";
    }
    return true;
  }
  loadParkingResources() {
    const use_region = this._settings.get("app.use_region");
    const levels = (use_region ? this._org.levelsForRegion() : this._org.levelsForBuilding()).filter((_) => _.tags.includes("parking"));
    return queryParkingSpacesForZones(levels.map((l) => l.id)).pipe(map((spaces) => spaces.map((s) => __spreadProps(__spreadValues({}, s), {
      id: s.id || s.map_id,
      groups: s.place_groups,
      zone: this._org.levelWithID([s.zone_id])
    }))));
  }
  loadResourceList(type) {
    const use_region = this._settings.get("app.use_region");
    const map_metadata = (_) => (_?.metadata[type]?.details instanceof Array ? _.metadata[type].details : []).map((d) => __spreadProps(__spreadValues({}, d), {
      id: d.id || d.map_id,
      zone: _.zone
    }));
    const id = use_region ? this._org.building.parent_id : this._org.building.id;
    if (use_region) {
      const id2 = this._org.building.parent_id;
      const buildings = this._org.buildings.filter((_) => _.parent_id === id2);
      return forkJoin(buildings.map((_) => oc(_.id, { name: type }).pipe(map((data) => flatten(data.map(map_metadata)))))).pipe(map((_) => flatten(_)));
    }
    return oc(id, {
      name: type
    }).pipe(map((data) => flatten(data.map(map_metadata))));
  }
  async _getNearbyResources(map_url, id, resources, count) {
    const nearby_resources = [];
    let asset_list = resources.filter((_) => _.id !== id && _.map_id !== id);
    for (let i = 0; i < count; i++) {
      const item = await findNearbyFeature(map_url, id, asset_list.map((_) => _.map_id || _.id));
      if (item) {
        nearby_resources.push(resources.find((_) => _.id === item || _.map_id === item));
        asset_list = asset_list.filter((_) => _.id !== item && _.map_id !== item);
      }
    }
    return nearby_resources;
  }
};
_BookingFormService.\u0275fac = function BookingFormService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BookingFormService)();
};
_BookingFormService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BookingFormService, factory: _BookingFormService.\u0275fac, providedIn: "root" });
var BookingFormService = _BookingFormService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingFormService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/explore/src/lib/explore-desk-info.component.ts
function ExploreDeskInfoComponent_ng_template_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.user(), " ");
  }
}
function ExploreDeskInfoComponent_ng_template_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.department(), " ");
  }
}
function ExploreDeskInfoComponent_ng_template_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, ctx_r1.start(), "shortTime"), " \u2013 ", \u0275\u0275pipeBind2(3, 5, ctx_r1.end(), "shortTime"), " ");
  }
}
function ExploreDeskInfoComponent_ng_template_1_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.available_until, " ");
  }
}
function ExploreDeskInfoComponent_ng_template_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "uppercase");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ExploreDeskInfoComponent_ng_template_1_Conditional_10_Conditional_5_Template, 2, 1, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap("text-light border-base-100 rounded-sm border p-1 px-2 capitalize shadow-sm " + ctx_r1.status());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, ctx_r1.status() === "not-bookable" ? "COMMON.STATUS_NOT_BOOKABLE" : "COMMON.STATUS_" + \u0275\u0275pipeBind1(3, 4, ctx_r1.status())), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.status() !== "not-bookable" ? 5 : -1);
  }
}
function ExploreDeskInfoComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275element(2, "div", 4);
    \u0275\u0275elementStart(3, "div", 5)(4, "div", 6)(5, "h4", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ExploreDeskInfoComponent_ng_template_1_Conditional_7_Template, 2, 1, "p", 8);
    \u0275\u0275conditionalCreate(8, ExploreDeskInfoComponent_ng_template_1_Conditional_8_Template, 2, 1, "p", 8);
    \u0275\u0275conditionalCreate(9, ExploreDeskInfoComponent_ng_template_1_Conditional_9_Template, 4, 8, "p", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ExploreDeskInfoComponent_ng_template_1_Conditional_10_Template, 6, 8, "div", 10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap("bg-base-100 pointer-events-none absolute top-0 left-0 w-64 p-1 shadow-sm " + ctx_r1.x_pos() + " " + ctx_r1.y_pos());
    \u0275\u0275property("id", ctx_r1.map_id());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.name() || ctx_r1.map_id() || ctx_r1.id(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.user() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.user() && ctx_r1.department() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.start() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.status() ? 10 : -1);
  }
}
var _ExploreDeskInfoComponent = class _ExploreDeskInfoComponent {
  constructor() {
    this._details = inject(MAP_FEATURE_DATA);
    this._element = inject(ElementRef);
    this.status = computed(() => this._details.status?.());
    this.id = signal(this._details.id);
    this.map_id = signal(this._details.map_id);
    this.name = signal(this._details.name);
    this.user = signal(this._details.user);
    this.start = signal(this._details.start);
    this.end = signal(this._details.end);
    this.department = signal(this._details.department);
    this.y_pos = signal("top");
    this.x_pos = signal("left");
  }
  ngOnInit(tries = 0) {
    if (tries > 10)
      return;
    setTimeout(() => this.updatePosition(), 200);
  }
  get available_until() {
    return "";
  }
  updatePosition(tries = 0) {
    const parent = this._element.nativeElement.parentElement?.parentElement;
    if (!parent)
      return setTimeout(() => this.updatePosition(++tries), 200);
    const box = parent?.getBoundingClientRect();
    const wbox = document.body?.getBoundingClientRect();
    this.y_pos.set(box.y >= wbox.height / 2 ? "bottom" : "top");
    this.x_pos.set(box.x >= wbox.width / 2 ? "right" : "left");
  }
};
_ExploreDeskInfoComponent.\u0275fac = function ExploreDeskInfoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreDeskInfoComponent)();
};
_ExploreDeskInfoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreDeskInfoComponent, selectors: [["explore-desk-info"]], decls: 3, vars: 8, consts: [["desk_tooltip", ""], ["customTooltip", "", 1, "pointer-events-auto", "relative", "z-20", "h-full", "w-full", 3, "mouseenter", "touchdown", "content", "backdrop", "xPosition", "yPosition", "hover", "delay"], ["name", "space-info", 3, "id"], [1, "border-base-200", "rounded-md", "border", "p-1"], [1, "triangle", "absolute"], [1, "flex", "w-full", "items-center", "space-x-4"], [1, "flex", "flex-1", "flex-col", "px-2", "py-1"], ["map-id", "", 1, "m-0", "truncate", "font-medium"], ["user", "", 1, "text-xs"], ["start", "", 1, "text-xs"], [1, "relative", "flex", "flex-wrap", "text-sm"], ["status", ""], ["available-until", ""]], template: function ExploreDeskInfoComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("mouseenter", function ExploreDeskInfoComponent_Template_div_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updatePosition());
    })("touchdown", function ExploreDeskInfoComponent_Template_div_touchdown_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updatePosition());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(1, ExploreDeskInfoComponent_ng_template_1_Template, 11, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const desk_tooltip_r3 = \u0275\u0275reference(2);
    \u0275\u0275property("content", desk_tooltip_r3)("backdrop", false)("xPosition", "center")("yPosition", "center")("hover", true)("delay", 3e3);
    \u0275\u0275attribute("id", ctx.id())("map_id", ctx.map_id());
  }
}, dependencies: [CommonModule, UpperCasePipe, DatePipe, CustomTooltipComponent, TranslatePipe], styles: ["\n\n.top.left[_ngcontent-%COMP%] {\n  border-radius: 0 0.5rem 0.5rem 0.5rem;\n}\n.top.right[_ngcontent-%COMP%] {\n  border-radius: 0.5rem 0 0.5rem 0.5rem;\n}\n.bottom.left[_ngcontent-%COMP%] {\n  border-radius: 0.5rem 0.5rem 0.5rem 0;\n}\n.bottom.right[_ngcontent-%COMP%] {\n  border-radius: 0.5rem 0.5rem 0 0.5rem;\n}\n.triangle[_ngcontent-%COMP%] {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  transform: rotate(0deg);\n}\n.top.left[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%] {\n  top: 0.25rem;\n  left: 0.25rem;\n  border-width: 0.5rem 0.5rem 0 0;\n  border-color: currentColor transparent transparent transparent;\n}\n.top.right[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%] {\n  top: 0.25rem;\n  right: 0.25rem;\n  border-width: 0.5rem 0 0 0.5rem;\n  border-color: currentColor transparent transparent transparent;\n}\n.bottom.left[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%] {\n  bottom: 0.25rem;\n  left: 0.25rem;\n  border-width: 0 0.5rem 0.5rem 0;\n  border-color: transparent transparent currentColor transparent;\n}\n.bottom.right[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%] {\n  bottom: 0.25rem;\n  right: 0.25rem;\n  border-width: 0 0 0.5rem 0.5rem;\n  border-color: transparent transparent currentColor transparent;\n}\n[status][_ngcontent-%COMP%] {\n  background-color: var(--success);\n  color: var(--success-content);\n}\n[status].busy[_ngcontent-%COMP%] {\n  background-color: var(--error);\n  color: var(--error-content);\n}\n[status].pending[_ngcontent-%COMP%] {\n  background-color: var(--warn);\n  color: var(--warn-content);\n}\n[status].not-bookable[_ngcontent-%COMP%] {\n  background-color: var(--base-300);\n}\n/*# sourceMappingURL=explore-desk-info.component.css.map */"] });
var ExploreDeskInfoComponent = _ExploreDeskInfoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreDeskInfoComponent, [{
    type: Component,
    args: [{ selector: "explore-desk-info", template: `
        <div
            customTooltip
            [content]="desk_tooltip"
            [backdrop]="false"
            [xPosition]="'center'"
            [yPosition]="'center'"
            [hover]="true"
            [delay]="3000"
            class="pointer-events-auto relative z-20 h-full w-full"
            [attr.id]="id()"
            [attr.map_id]="map_id()"
            (mouseenter)="updatePosition()"
            (touchdown)="updatePosition()"
        ></div>
        <ng-template #desk_tooltip>
            <div
                name="space-info"
                [id]="map_id()"
                [class]="
                    'bg-base-100 pointer-events-none absolute top-0 left-0 w-64 p-1 shadow-sm ' +
                    x_pos() +
                    ' ' +
                    y_pos()
                "
            >
                <div class="border-base-200 rounded-md border p-1">
                    <div class="triangle absolute"></div>
                    <div class="flex w-full items-center space-x-4">
                        <div class="flex flex-1 flex-col px-2 py-1">
                            <h4 map-id class="m-0 truncate font-medium">
                                {{ name() || map_id() || id() }}
                            </h4>
                            @if (user()) {
                                <p user class="text-xs">
                                    {{ user() }}
                                </p>
                            }
                            @if (user() && department()) {
                                <p user class="text-xs">
                                    {{ department() }}
                                </p>
                            }
                            @if (start()) {
                                <p start class="text-xs">
                                    {{ start() | date: 'shortTime' }} &ndash;
                                    {{ end() | date: 'shortTime' }}
                                </p>
                            }
                        </div>
                        @if (status()) {
                            <div class="relative flex flex-wrap text-sm">
                                <div
                                    status
                                    [class]="
                                        'text-light border-base-100 rounded-sm border p-1 px-2 capitalize shadow-sm ' +
                                        status()
                                    "
                                >
                                    {{
                                        (status() === 'not-bookable'
                                            ? 'COMMON.STATUS_NOT_BOOKABLE'
                                            : 'COMMON.STATUS_' +
                                              (status() | uppercase)
                                        ) | translate
                                    }}
                                </div>
                                @if (status() !== 'not-bookable') {
                                    <div available-until>
                                        {{ available_until }}
                                    </div>
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </ng-template>
    `, imports: [CommonModule, CustomTooltipComponent, TranslatePipe], styles: ["/* angular:styles/component:css;be9e427f23d2cfa533bc3f1a2b3a60abe03093f3828dce67e30b4276b95b0771;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-desk-info.component.ts */\n.top.left {\n  border-radius: 0 0.5rem 0.5rem 0.5rem;\n}\n.top.right {\n  border-radius: 0.5rem 0 0.5rem 0.5rem;\n}\n.bottom.left {\n  border-radius: 0.5rem 0.5rem 0.5rem 0;\n}\n.bottom.right {\n  border-radius: 0.5rem 0.5rem 0 0.5rem;\n}\n.triangle {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  transform: rotate(0deg);\n}\n.top.left .triangle {\n  top: 0.25rem;\n  left: 0.25rem;\n  border-width: 0.5rem 0.5rem 0 0;\n  border-color: currentColor transparent transparent transparent;\n}\n.top.right .triangle {\n  top: 0.25rem;\n  right: 0.25rem;\n  border-width: 0.5rem 0 0 0.5rem;\n  border-color: currentColor transparent transparent transparent;\n}\n.bottom.left .triangle {\n  bottom: 0.25rem;\n  left: 0.25rem;\n  border-width: 0 0.5rem 0.5rem 0;\n  border-color: transparent transparent currentColor transparent;\n}\n.bottom.right .triangle {\n  bottom: 0.25rem;\n  right: 0.25rem;\n  border-width: 0 0 0.5rem 0.5rem;\n  border-color: transparent transparent currentColor transparent;\n}\n[status] {\n  background-color: var(--success);\n  color: var(--success-content);\n}\n[status].busy {\n  background-color: var(--error);\n  color: var(--error-content);\n}\n[status].pending {\n  background-color: var(--warn);\n  color: var(--warn-content);\n}\n[status].not-bookable {\n  background-color: var(--base-300);\n}\n/*# sourceMappingURL=explore-desk-info.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreDeskInfoComponent, { className: "ExploreDeskInfoComponent", filePath: "libs/explore/src/lib/explore-desk-info.component.ts", lineNumber: 204 });
})();

// libs/bookings/src/lib/parking.service.ts
var _ParkingService = class _ParkingService extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._loading = new BehaviorSubject([]);
    this.loading = this._loading.asObservable();
    this.levels = this._org.level_list.pipe(map((_) => {
      if (!this._settings.get("app.use_region")) {
        const blds = this._org.buildingsForRegion();
        const bld_ids = blds.map((bld) => bld.id);
        const list = _.filter((lvl) => bld_ids.includes(lvl.parent_id) && lvl.tags.includes("parking"));
        list.map((lvl) => __spreadProps(__spreadValues({}, lvl), {
          display_name: `${blds.find((_2) => _2.id === lvl.parent_id)?.display_name} - ${lvl.display_name}`
        }));
        return list;
      }
      return _.filter((lvl) => lvl.parent_id === this._org.building.id && lvl.tags.includes("parking"));
    }));
    this.spaces = combineLatest([this.levels]).pipe(filter(([lvls]) => !!lvls[0]?.id), switchMap(([levels]) => {
      this._loading.next([...this._loading.getValue(), "spaces"]);
      return queryParkingSpacesForZones(levels.map((l) => l.id));
    }), tap(() => this._loading.next(this._loading.getValue().filter((_) => _ !== "spaces"))), shareReplay(1));
    this.users = combineLatest([this._org.active_building]).pipe(filter(([bld]) => !!bld?.id), switchMap(([bld]) => {
      this._loading.next([...this._loading.getValue(), "users"]);
      return nc(bld.id, "parking-users");
    }), map((metadata) => metadata.details instanceof Array ? metadata.details : []), tap(() => this._loading.next(this._loading.getValue().filter((_) => _ !== "users"))), shareReplay(1));
    this.has_booking = queryBookings({
      period_start: getUnixTime(startOfDay(Date.now())),
      period_end: getUnixTime(endOfDay(Date.now())),
      type: "parking"
    }).pipe(map((_) => _.length > 0), shareReplay(1));
    this.assigned_space = this.spaces.pipe(map((list) => list.find((_) => _.assigned_to?.toLowerCase() === currentUser().email?.toLowerCase())));
    this.user_details = this.users.pipe(map((list) => list.find((_) => _.email?.toLowerCase() === currentUser().email?.toLowerCase())));
    this.deny_parking_access = this.user_details.pipe(map((details) => !!details?.deny));
    this.booked_space = combineLatest([
      this._org.active_building,
      this.spaces
    ]).pipe(map(([_, spaces]) => queryBookings({
      period_start: getUnixTime(startOfDay(Date.now())),
      period_end: getUnixTime(endOfDay(Date.now())),
      type: "parking"
    }).pipe(catchError(() => of([])), map((booking_list) => booking_list.map((booking) => spaces.find((space) => space.id === booking.asset_id)).filter((space) => !!space)))), map((_) => _[0]), shareReplay(1));
    this.subscription("spaces", this.assigned_space.subscribe());
  }
};
_ParkingService.\u0275fac = function ParkingService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ParkingService)();
};
_ParkingService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ParkingService, factory: _ParkingService.\u0275fac, providedIn: "root" });
var ParkingService = _ParkingService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/explore/src/lib/explore-parking-info.component.ts
function ExploreParkingInfoComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "EXPLORE.PARKING_PLATE_NUMBER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.plate_number || "PLATE NO 1", " ");
  }
}
var _ExploreParkingInfoComponent = class _ExploreParkingInfoComponent {
  constructor() {
    this._data = inject(MAP_FEATURE_DATA);
    this._element = inject(ElementRef);
    this._settings = inject(SettingsService);
    this.status = this._data.assigned_to === this._data.user && this._data.user ? "reserved" : this._data.status;
    this.user = this._data.user;
    this.name = this._data.name;
    this.map_id = this._data.map_id;
    this.plate_number = this._data.plate_number;
  }
  get is_concierge() {
    return this._settings.app_name.toLowerCase().includes("concierge");
  }
};
_ExploreParkingInfoComponent.\u0275fac = function ExploreParkingInfoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreParkingInfoComponent)();
};
_ExploreParkingInfoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreParkingInfoComponent, selectors: [["explore-parking-info"]], decls: 9, vars: 15, consts: [[1, "bg-base-300", "absolute", "top-1/2", "left-1/2", "rounded-lg", "rounded-tl-none!", "p-2", "text-left", "shadow-sm"], [1, "triangle", "absolute", "top-0.5", "left-0.5"], [1, "flex", "space-x-2"], [1, "flex", "min-w-24", "flex-col", "pl-1", "leading-tight"], [1, "whitespace-nowrap"], [1, "text-sm", "font-medium", "capitalize"], [1, "bg-base-100", "text-base-content", "relative", "flex", "h-full", "flex-col", "rounded-sm", "px-2", "leading-tight", "shadow-sm"], [1, "w-full", "pt-1", "text-center", "text-[0.625rem]", "font-medium", "whitespace-nowrap"], [1, "w-full", "pb-1", "text-center", "font-mono", "uppercase"]], template: function ExploreParkingInfoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, ExploreParkingInfoComponent_Conditional_8_Template, 6, 4, "div", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275classProp("bg-error!", ctx.status === "busy")("text-error-content!", ctx.status === "busy")("bg-warning!", ctx.status === "reserved")("text-warning-content!", ctx.status === "reserved")("bg-success!", ctx.status === "free")("text-success-content!", ctx.status === "free");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.status, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.is_concierge && ctx.plate_number ? 8 : -1);
  }
}, dependencies: [TranslatePipe], styles: ["\n\n.triangle[_ngcontent-%COMP%] {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 0.5rem 0.5rem 0 0;\n  border-color: currentColor transparent transparent transparent;\n  transform: rotate(0deg);\n}\n/*# sourceMappingURL=explore-parking-info.component.css.map */"] });
var ExploreParkingInfoComponent = _ExploreParkingInfoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreParkingInfoComponent, [{
    type: Component,
    args: [{ selector: "explore-parking-info", template: `
        <div
            class="bg-base-300 absolute top-1/2 left-1/2 rounded-lg rounded-tl-none! p-2 text-left shadow-sm"
            [class.bg-error!]="status === 'busy'"
            [class.text-error-content!]="status === 'busy'"
            [class.bg-warning!]="status === 'reserved'"
            [class.text-warning-content!]="status === 'reserved'"
            [class.bg-success!]="status === 'free'"
            [class.text-success-content!]="status === 'free'"
        >
            <div class="triangle absolute top-0.5 left-0.5"></div>
            <div class="flex space-x-2">
                <div class="flex min-w-24 flex-col pl-1 leading-tight">
                    <div class="whitespace-nowrap">{{ name }}</div>
                    <div class="text-sm font-medium capitalize">
                        {{ status }}
                    </div>
                </div>
                @if (is_concierge && plate_number) {
                    <div
                        class="bg-base-100 text-base-content relative flex h-full flex-col rounded-sm px-2 leading-tight shadow-sm"
                    >
                        <div
                            class="w-full pt-1 text-center text-[0.625rem] font-medium whitespace-nowrap"
                        >
                            {{ 'EXPLORE.PARKING_PLATE_NUMBER' | translate }}
                        </div>
                        <div
                            class="w-full pb-1 text-center font-mono uppercase"
                        >
                            {{ plate_number || 'PLATE NO 1' }}
                        </div>
                    </div>
                }
            </div>
        </div>
    `, imports: [TranslatePipe], styles: ["/* angular:styles/component:css;186a95b4c185bcd2753f7ef9d30513d06855e35c348eb8e66dff829f779ea78f;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-parking-info.component.ts */\n.triangle {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 0.5rem 0.5rem 0 0;\n  border-color: currentColor transparent transparent transparent;\n  transform: rotate(0deg);\n}\n/*# sourceMappingURL=explore-parking-info.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreParkingInfoComponent, { className: "ExploreParkingInfoComponent", filePath: "libs/explore/src/lib/explore-parking-info.component.ts", lineNumber: 66 });
})();

// libs/bookings/src/lib/locker-grid.component.ts
var _c02 = () => [];
function LockerGridComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function LockerGridComponent_For_2_Template_button_click_0_listener() {
      const locker_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clicked.emit(locker_r2));
    });
    \u0275\u0275element(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6);
    \u0275\u0275elementStart(5, "div", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const locker_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("grid-column-start", locker_r2.position[0] + 1)("grid-row-start", locker_r2.position[1] + 1)("grid-column-end", locker_r2.position[0] + (locker_r2.size[0] + 1))("background-color", ctx_r2.status(locker_r2))("grid-row-end", locker_r2.position[1] + (locker_r2.size[1] + 1));
    \u0275\u0275classProp("opacity-60", ctx_r2.selected() && ctx_r2.selected() !== locker_r2.id);
    \u0275\u0275property("matTooltip", locker_r2.name)("disabled", locker_r2.bookable === false || (locker_r2 == null ? null : locker_r2.available) === false);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", locker_r2.name, " ");
  }
}
var _LockerGridComponent = class _LockerGridComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this.show_name = input(true);
    this.default_status = input("busy");
    this.bank = input(void 0);
    this.bank_status = input({});
    this.selected = input("");
    this.clicked = output();
  }
  get columns() {
    let columns = 1;
    for (const locker of this.bank()?.lockers || []) {
      const x = locker.position[0] + locker.size[0];
      if (x > columns)
        columns = x;
    }
    return columns;
  }
  color(status) {
    const colours = this._settings.get("app.explore.colors") || {};
    return colours[`lockers-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`];
  }
  status(locker) {
    if (!locker)
      return this.color("not-bookable");
    const selected = this.selected();
    if (selected && locker.id === selected) {
      return this.color("pending");
    }
    let value = this.bank_status()[locker.id] || "free";
    if (!this.bank_status()[locker.id] && !locker?.available) {
      value = this.default_status();
    }
    return this.color(value);
  }
};
_LockerGridComponent.\u0275fac = function LockerGridComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LockerGridComponent)();
};
_LockerGridComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerGridComponent, selectors: [["locker-grid"]], inputs: { show_name: [1, "show_name"], default_status: [1, "default_status"], bank: [1, "bank"], bank_status: [1, "bank_status"], selected: [1, "selected"] }, outputs: { clicked: "clicked" }, decls: 3, vars: 7, consts: [[1, "grid", "flex-1", "gap-2", "p-2"], ["matRipple", "", 1, "border-base-200", "relative", "overflow-hidden", "rounded-sm", "border", 3, "opacity-60", "grid-column-start", "grid-row-start", "grid-column-end", "background-color", "grid-row-end", "matTooltip", "disabled"], ["matRipple", "", 1, "border-base-200", "relative", "overflow-hidden", "rounded-sm", "border", 3, "click", "matTooltip", "disabled"], ["handle", "", 1, "bg-base-400", "absolute", "top-1/2", "left-2", "h-6", "w-1", "-translate-y-1/2", "rounded-sm", "opacity-60"], ["vent", "", 1, "bg-base-400", "absolute", "top-2", "left-1/2", "h-1", "w-12", "-translate-x-1/2", "rounded-t", "opacity-60"], ["vent", "", 1, "bg-base-400", "absolute", "top-4", "left-1/2", "h-1", "w-12", "-translate-x-1/2", "rounded-t", "opacity-60"], ["vent", "", 1, "bg-base-400", "absolute", "top-6", "left-1/2", "h-1", "w-12", "-translate-x-1/2", "rounded-t", "opacity-60"], [1, "text-base-content", "absolute", "top-8", "left-1/2", "-translate-x-1/2", "text-[0.6rem]", "font-medium", "opacity-60"], [1, "hover:bg-base-content", "absolute", "inset-0", "opacity-10"]], template: function LockerGridComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, LockerGridComponent_For_2_Template, 8, 15, "button", 1, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    \u0275\u0275styleProp("width", ctx.columns * 2.5 + "rem")("grid-template-columns", "repeat(" + ctx.columns + ", 5rem)")("grid-template-rows", "repeat(" + ((tmp_2_0 = ctx.bank()) == null ? null : tmp_2_0.height) + ", 5rem)");
    \u0275\u0275advance();
    \u0275\u0275repeater(((tmp_3_0 = ctx.bank()) == null ? null : tmp_3_0.lockers) || \u0275\u0275pureFunction0(6, _c02));
  }
}, dependencies: [MatRippleModule, MatRipple, MatTooltipModule, MatTooltip], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nbutton[disabled][_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=locker-grid.component.css.map */"] });
var LockerGridComponent = _LockerGridComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockerGridComponent, [{
    type: Component,
    args: [{ selector: "locker-grid", template: `
        <div
            class="grid flex-1 gap-2 p-2"
            [style.width]="columns * 2.5 + 'rem'"
            [style.grid-template-columns]="'repeat(' + columns + ', 5rem)'"
            [style.grid-template-rows]="'repeat(' + bank()?.height + ', 5rem)'"
        >
            @for (locker of bank()?.lockers || []; track locker) {
                <button
                    matRipple
                    class="border-base-200 relative overflow-hidden rounded-sm border"
                    [class.opacity-60]="selected() && selected() !== locker.id"
                    [style.grid-column-start]="locker.position[0] + 1"
                    [style.grid-row-start]="locker.position[1] + 1"
                    [style.grid-column-end]="
                        locker.position[0] + (locker.size[0] + 1)
                    "
                    [style.background-color]="status(locker)"
                    [style.grid-row-end]="
                        locker.position[1] + (locker.size[1] + 1)
                    "
                    [matTooltip]="locker.name"
                    [disabled]="
                        locker.bookable === false || locker?.available === false
                    "
                    (click)="clicked.emit(locker)"
                >
                    <div
                        handle
                        class="bg-base-400 absolute top-1/2 left-2 h-6 w-1 -translate-y-1/2 rounded-sm opacity-60"
                    ></div>
                    <div
                        vent
                        class="bg-base-400 absolute top-2 left-1/2 h-1 w-12 -translate-x-1/2 rounded-t opacity-60"
                    ></div>
                    <div
                        vent
                        class="bg-base-400 absolute top-4 left-1/2 h-1 w-12 -translate-x-1/2 rounded-t opacity-60"
                    ></div>
                    <div
                        vent
                        class="bg-base-400 absolute top-6 left-1/2 h-1 w-12 -translate-x-1/2 rounded-t opacity-60"
                    ></div>
                    <div
                        class="text-base-content absolute top-8 left-1/2 -translate-x-1/2 text-[0.6rem] font-medium opacity-60"
                    >
                        {{ locker.name }}
                    </div>
                    <div
                        class="hover:bg-base-content absolute inset-0 opacity-10"
                    ></div>
                </button>
            }
        </div>
    `, imports: [MatRippleModule, MatTooltipModule], styles: ["/* angular:styles/component:css;32afd79bdb50e1a260a311dcbbe42ad630e05ff005c6bd90901be0d3385e4315;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/locker-grid.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nbutton[disabled] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=locker-grid.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerGridComponent, { className: "LockerGridComponent", filePath: "libs/bookings/src/lib/locker-grid.component.ts", lineNumber: 79 });
})();

export {
  DeskQuestionsModalComponent,
  BookingFormService,
  ExploreDeskInfoComponent,
  LockerGridComponent,
  ParkingService,
  ExploreParkingInfoComponent
};
//# sourceMappingURL=chunk-YHB2EXFA.js.map
