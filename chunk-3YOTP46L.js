import {
  DurationFieldComponent
} from "./chunk-6AMRDDI3.js";
import {
  EventFormService
} from "./chunk-XQT4Z2GS.js";
import {
  ExploreStateService
} from "./chunk-VZLOOL6K.js";
import {
  UserSearchFieldComponent
} from "./chunk-YCKC43KC.js";
import {
  UserPipe
} from "./chunk-ADDHGGVA.js";
import {
  AuthenticatedImageDirective,
  MatCheckbox,
  MatCheckboxModule,
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-JISG2IWF.js";
import {
  AsyncHandler,
  AsyncPipe,
  CalendarEvent,
  Component,
  CustomTooltipComponent,
  DatePipe,
  ElementRef,
  FormField,
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
  MatRipple,
  MatRippleModule,
  OrganisationService,
  Router,
  SettingsService,
  Space,
  TranslatePipe,
  UpperCasePipe,
  Vu,
  computed,
  currentUser,
  effect,
  fd,
  generateQRCode,
  i18n,
  inject,
  isSameDay,
  isWithinBookableHours,
  notifyError,
  notifySuccess,
  resource,
  rulesForResource,
  setClassMetadata,
  settingSignal,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-T2RSHA4K.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/explore/src/lib/explore-book-qr.component.ts
var _c0 = (a0) => ({ name: a0 });
var DEFAULT_PATH = `workplace/#/explore?space={{id}}`;
var ExploreBookQrComponent = class _ExploreBookQrComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this.space = signal(
      this._data.space,
      ...ngDevMode ? [{ debugName: "space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.qr_code = signal(
      generateQRCode(`${location.origin}${(this._settings.get("app.booking_qr_path") || DEFAULT_PATH).replace("{{id}}", this._data.space?.email)}`),
      ...ngDevMode ? [{ debugName: "qr_code" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function ExploreBookQrComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreBookQrComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreBookQrComponent, selectors: [["explore-book-qr"]], decls: 10, vars: 7, consts: [[1, "truncate"], [1, "flex-1"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4"], [1, "m-auto", "h-64", "w-64", 3, "src"]], template: function ExploreBookQrComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header")(1, "h2", 0);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "div", 1);
        \u0275\u0275elementStart(5, "button", 2)(6, "icon");
        \u0275\u0275text(7, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "main", 3);
        \u0275\u0275element(9, "img", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, "EXPLORE.BOOK_RESOURCE", \u0275\u0275pureFunction1(5, _c0, ctx.space()?.name)), " ");
        \u0275\u0275advance(7);
        \u0275\u0275property("src", ctx.qr_code(), \u0275\u0275sanitizeUrl);
      }
    }, dependencies: [MatRippleModule, MatRipple, IconComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreBookQrComponent, [{
    type: Component,
    args: [{ selector: "explore-book-qr", template: `
        <header>
            <h2 class="truncate">
                {{
                    'EXPLORE.BOOK_RESOURCE' | translate: { name: space()?.name }
                }}
            </h2>
            <div class="flex-1"></div>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="p-4">
            <img class="m-auto h-64 w-64" [src]="qr_code()" />
        </main>
    `, imports: [TranslatePipe, MatRippleModule, IconComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreBookQrComponent, { className: "ExploreBookQrComponent", filePath: "libs/explore/src/lib/explore-book-qr.component.ts", lineNumber: 32 });
})();

// libs/explore/src/lib/explore-booking-modal.component.ts
function ExploreBookingModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "a-user-search-field", 19);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "FORM.HOST"));
    \u0275\u0275advance(5);
    \u0275\u0275property("formField", ctx_r1.form.organiser);
    \u0275\u0275control();
  }
}
function ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-info", ctx_r1.alert()[0] === "info")("text-info-content", ctx_r1.alert()[0] === "info")("bg-warning", ctx_r1.alert()[0] === "warn")("text-warning-content", ctx_r1.alert()[0] === "warn")("bg-error", ctx_r1.alert()[0] === "closed")("text-error-content", ctx_r1.alert()[0] === "closed");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.alert()[1], " ");
  }
}
function ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_21_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" at ", \u0275\u0275pipeBind2(1, 1, ctx_r1.model().date, ctx_r1.time_format()), " ");
  }
}
function ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 21);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275conditionalCreate(7, ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_21_Conditional_7_Template, 2, 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "FORM.DATE"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 5, ctx_r1.model().date, "mediumDate"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.model().all_day ? 7 : -1);
  }
}
function ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-duration-field", 22);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 6, "FORM.DURATION"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r1.form.duration)("time", ctx_r1.model().date)("max", ctx_r1.max_duration())("end_time", ctx_r1.bookable_hours()?.end)("use_24hr", ctx_r1.use_24hr_time());
    \u0275\u0275control();
  }
}
function ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "mat-checkbox", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.all_day);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.ALL_DAY"), " ");
  }
}
function ExploreBookingModalComponent_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 5)(1, "div", 8)(2, "label", 9);
    \u0275\u0275text(3, "Title");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 10);
    \u0275\u0275element(8, "input", 11);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(12, ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_12_Template, 8, 4, "div", 8);
    \u0275\u0275elementStart(13, "div", 8)(14, "label");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 12);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_19_Template, 2, 13, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 14);
    \u0275\u0275conditionalCreate(21, ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_21_Template, 8, 8, "div", 15);
    \u0275\u0275conditionalCreate(22, ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_22_Template, 5, 8, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_23_Template, 4, 4, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("formField", ctx_r1.form.title);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "EXPLORE.BOOKING_TITLE_REQUIRED"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can_book_for_others() ? 12 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(16, 11, "EXPLORE.BOOKING_SPACE"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.model().resources?.[0]?.display_name || ctx_r1.model().resources?.[0]?.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.alert()?.[0] ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.date ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.duration ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.allow_all_day() ? 23 : -1);
  }
}
function ExploreBookingModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, ExploreBookingModalComponent_Conditional_6_Conditional_0_Template, 24, 13, "main", 5);
    \u0275\u0275elementStart(1, "footer", 6)(2, "button", 7);
    \u0275\u0275listener("click", function ExploreBookingModalComponent_Conditional_6_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.form ? 0 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "COMMON.SAVE"), " ");
  }
}
function ExploreBookingModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 24);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 48);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "CALENDAR_EVENT.CHECKING_AVAILABILITY"));
  }
}
var ExploreBookingModalComponent = class _ExploreBookingModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this._event_form = inject(EventFormService);
    this._dialog_ref = inject(MatDialogRef);
    this._router = inject(Router);
    this._min_loading = signal(
      true,
      ...ngDevMode ? [{ debugName: "_min_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = computed(
      () => this._min_loading() || !!this._event_form.loading(),
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.alert = signal(
      this._data.alert,
      ...ngDevMode ? [{ debugName: "alert" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.max_duration = settingSignal("events.max_duration", 4 * 60);
    this.bookable_hours = settingSignal("events.bookable_hours", null);
    this.can_book_for_others = settingSignal("events.can_book_for_others", false);
    this.use_24hr_time = settingSignal("use_24_hour_time", false);
    this.time_format = computed(
      () => this.use_24hr_time() ? "HH:mm" : "h:mm a",
      ...ngDevMode ? [{ debugName: "time_format" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allow_all_day = settingSignal("events.allow_all_day", false);
  }
  get form() {
    return this._event_form.form;
  }
  get model() {
    return this._event_form.model;
  }
  ngOnInit() {
    if (!this._data.space) {
      notifyError("Error intialising Ad-hoc booking form. [Space missing]");
      console.error("Book Modal Data:", this._data);
      this._dialog_ref.close();
      return;
    }
    this._event_form.newForm();
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      resources: [this._data.space],
      host: currentUser().email,
      organiser: currentUser()
    }));
    setTimeout(() => this._min_loading.set(false), 500);
  }
  async save() {
    await this._event_form.postForm().catch((_) => {
      notifyError(_);
      throw _;
    });
    if (this._settings.app_name.toLowerCase().includes("workplace")) {
      this._router.navigate(["/book", "meeting", "success"]);
    } else {
      notifySuccess(i18n("EXPLORE.BOOKING_SUCCESS"));
    }
    this._dialog_ref.close();
  }
  static {
    this.\u0275fac = function ExploreBookingModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreBookingModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreBookingModalComponent, selectors: [["explore-booking-modal"]], decls: 8, vars: 5, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "h-14", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], [1, "flex-1"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], ["load", "", 1, "flex", "h-64", "flex-col", "items-center", "justify-center"], [1, "max-w-[85vw]", "px-4"], [1, "border-base-300", "flex", "justify-end", "border-t", "p-2"], ["btn", "", "matRipple", "", 1, "mx-2", "w-32", 3, "click"], [1, "flex", "flex-col"], ["for", "title"], ["appearance", "outline"], ["id", "title", "matInput", "", "placeholder", "Booking Title", 3, "formField"], ["name", "space", 1, "border-base-200", "mb-4", "w-full", "rounded-sm", "border", "px-4", "py-3"], [1, "-mt-2", "mb-4", "rounded-sm", "px-2", "py-1", "text-xs", 3, "bg-info", "text-info-content", "bg-warning", "text-warning-content", "bg-error", "text-error-content"], [1, "flex", "flex-wrap", "sm:space-x-4"], [1, "flex", "w-full", "min-w-48", "flex-1", "flex-col", "sm:w-auto"], [1, "flex", "w-full", "flex-col", "sm:w-auto"], [1, "-mt-2", "mb-2", "flex", "justify-end"], ["for", "host"], [1, "mb-4", 3, "formField"], [1, "-mt-2", "mb-4", "rounded-sm", "px-2", "py-1", "text-xs"], [1, "border-base-200", "mb-4", "w-full", "rounded-sm", "border", "px-4", "py-3"], [1, "w-full", 3, "formField", "time", "max", "end_time", "use_24hr"], [3, "formField"], [1, "m-4", 3, "diameter"]], template: function ExploreBookingModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "div", 2);
        \u0275\u0275conditionalCreate(5, ExploreBookingModalComponent_Conditional_5_Template, 3, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, ExploreBookingModalComponent_Conditional_6_Template, 5, 4)(7, ExploreBookingModalComponent_Conditional_7_Template, 5, 4, "div", 4);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "EXPLORE.BOOKING_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.loading() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 6 : 7);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatCheckboxModule,
      MatCheckbox,
      DurationFieldComponent,
      UserSearchFieldComponent,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      FormField,
      IconComponent,
      MatDialogModule,
      MatDialogClose,
      DatePipe,
      TranslatePipe
    ], styles: ["\nheader[_ngcontent-%COMP%] {\n  max-width: calc(100vw + 100%);\n}\n[load][_ngcontent-%COMP%] {\n  width: 32rem;\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=explore-booking-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreBookingModalComponent, [{
    type: Component,
    args: [{ selector: "explore-booking-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'EXPLORE.BOOKING_HEADER' | translate }}
            </h2>
            <div class="flex-1"></div>
            @if (!loading()) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
            @if (form) {
                <main class="max-w-[85vw] px-4">
                    <div class="flex flex-col">
                        <label for="title">Title<span>*</span>:</label>
                        <mat-form-field appearance="outline">
                            <input
                                id="title"
                                matInput
                                [formField]="form.title"
                                placeholder="Booking Title"
                            />
                            <mat-error>{{
                                'EXPLORE.BOOKING_TITLE_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    @if (can_book_for_others()) {
                        <div class="flex flex-col">
                            <label for="host"
                                >{{ 'FORM.HOST' | translate
                                }}<span>*</span>:</label
                            >
                            <a-user-search-field
                                [formField]="form.organiser"
                                class="mb-4"
                            ></a-user-search-field>
                        </div>
                    }
                    <div class="flex flex-col">
                        <label
                            >{{ 'EXPLORE.BOOKING_SPACE' | translate }}:</label
                        >
                        <div
                            name="space"
                            class="border-base-200 mb-4 w-full rounded-sm border px-4 py-3"
                        >
                            {{
                                model().resources?.[0]?.display_name ||
                                    model().resources?.[0]?.name
                            }}
                        </div>
                        @if (alert()?.[0]) {
                            <div
                                class="-mt-2 mb-4 rounded-sm px-2 py-1 text-xs"
                                [class.bg-info]="alert()[0] === 'info'"
                                [class.text-info-content]="
                                    alert()[0] === 'info'
                                "
                                [class.bg-warning]="alert()[0] === 'warn'"
                                [class.text-warning-content]="
                                    alert()[0] === 'warn'
                                "
                                [class.bg-error]="alert()[0] === 'closed'"
                                [class.text-error-content]="
                                    alert()[0] === 'closed'
                                "
                            >
                                {{ alert()[1] }}
                            </div>
                        }
                    </div>
                    <div class="flex flex-wrap sm:space-x-4">
                        @if (form.date) {
                            <div
                                class="flex w-full min-w-48 flex-1 flex-col sm:w-auto"
                            >
                                <label>{{ 'FORM.DATE' | translate }}:</label>
                                <div
                                    class="border-base-200 mb-4 w-full rounded-sm border px-4 py-3"
                                >
                                    {{ model().date | date: 'mediumDate' }}
                                    @if (!model().all_day) {
                                        at
                                        {{ model().date | date: time_format() }}
                                    }
                                </div>
                            </div>
                        }
                        @if (form.duration) {
                            <div class="flex w-full flex-col sm:w-auto">
                                <label
                                    >{{ 'FORM.DURATION' | translate }}:</label
                                >
                                <a-duration-field
                                    [formField]="form.duration"
                                    [time]="model().date"
                                    [max]="max_duration()"
                                    [end_time]="bookable_hours()?.end"
                                    class="w-full"
                                    [use_24hr]="use_24hr_time()"
                                ></a-duration-field>
                            </div>
                        }
                    </div>
                    @if (allow_all_day()) {
                        <div class="-mt-2 mb-2 flex justify-end">
                            <mat-checkbox [formField]="form.all_day">
                                {{ 'COMMON.ALL_DAY' | translate }}
                            </mat-checkbox>
                        </div>
                    }
                </main>
            }
            <footer class="border-base-300 flex justify-end border-t p-2">
                <button btn matRipple class="mx-2 w-32" (click)="save()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        } @else {
            <div load class="flex h-64 flex-col items-center justify-center">
                <mat-spinner class="m-4" [diameter]="48"></mat-spinner>
                <p>{{ 'CALENDAR_EVENT.CHECKING_AVAILABILITY' | translate }}</p>
            </div>
        }
    `, imports: [
      DatePipe,
      TranslatePipe,
      MatRippleModule,
      MatProgressSpinnerModule,
      MatCheckboxModule,
      DurationFieldComponent,
      UserSearchFieldComponent,
      MatFormFieldModule,
      MatInputModule,
      FormField,
      IconComponent,
      MatDialogModule
    ], styles: ["/* angular:styles/component:css;92dc203883c2e157fe6d9f315fef4a02ef7ca3572d438813349331b81da507b4;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-booking-modal.component.ts */\nheader {\n  max-width: calc(100vw + 100%);\n}\n[load] {\n  width: 32rem;\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=explore-booking-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreBookingModalComponent, { className: "ExploreBookingModalComponent", filePath: "libs/explore/src/lib/explore-booking-modal.component.ts", lineNumber: 197 });
})();

// libs/explore/src/lib/explore-icon.component.ts
var ExploreIconComponent = class _ExploreIconComponent {
  constructor() {
    this._details = inject(MAP_FEATURE_DATA);
    this.icon = signal(
      this._details.icon || { content: "done" },
      ...ngDevMode ? [{ debugName: "icon" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.color = signal(
      this._details.color || "var(--info)",
      ...ngDevMode ? [{ debugName: "color" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.text_color = signal(
      this._details.text_color || "var(--info-content)",
      ...ngDevMode ? [{ debugName: "text_color" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function ExploreIconComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreIconComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreIconComponent, selectors: [["explore-icon"]], decls: 2, vars: 5, consts: [[1, "border-base-200", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "border", "shadow-sm"], [1, "text-xl", 3, "icon"]], template: function ExploreIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "icon", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("background-color", ctx.color())("color", ctx.text_color());
        \u0275\u0275advance();
        \u0275\u0275property("icon", ctx.icon());
      }
    }, dependencies: [IconComponent], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  align-items: end;\n  justify-content: end;\n}\n/*# sourceMappingURL=explore-icon.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreIconComponent, [{
    type: Component,
    args: [{ selector: `explore-icon`, template: `
        <div
            class="border-base-200 flex h-8 w-8 items-center justify-center rounded-full border shadow-sm"
            [style.background-color]="color()"
            [style.color]="text_color()"
        >
            <icon [icon]="icon()" class="text-xl"></icon>
        </div>
    `, imports: [IconComponent], styles: ["/* angular:styles/component:css;8d603d396af10dde7f45bddce919375913a5c5b09729ee8e6482881d125d62c7;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-icon.component.ts */\n:host {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  align-items: end;\n  justify-content: end;\n}\n/*# sourceMappingURL=explore-icon.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreIconComponent, { className: "ExploreIconComponent", filePath: "libs/explore/src/lib/explore-icon.component.ts", lineNumber: 30 });
})();

// libs/explore/src/lib/explore-space-info.component.ts
var _c02 = (a0) => ({ count: a0 });
function ExploreSpaceInfoComponent_ng_template_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r0.space().images[0]);
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 8);
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.available_until(), " ");
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "icon");
    \u0275\u0275text(2, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(5, 1, "COMMON.PEOPLE_COUNT", \u0275\u0275pureFunction1(5, _c02, ctx_r0.space().capacity), ctx_r0.space().capacity), " ");
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r2, " ");
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 15);
    \u0275\u0275repeaterCreate(1, ExploreSpaceInfoComponent_ng_template_2_Conditional_16_For_2_Template, 2, 1, "li", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.space().features);
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275pipe(1, "user");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19)(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 20);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    const host_r3 = \u0275\u0275pipeBind1(2, 5, \u0275\u0275pipeBind1(1, 3, ctx_r0.next().host));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.current() ? "Current" : "Upcoming", " booking ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.next().title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", host_r3?.name || ctx_r0.next().host, " ");
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "icon");
    \u0275\u0275text(2, "alarm");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" Free ", ctx_r0.next().date > ctx_r0.now() ? "until" : "at", " ", \u0275\u0275pipeBind2(5, 2, ctx_r0.next().date > ctx_r0.now() ? ctx_r0.next().date : ctx_r0.next().date_end, "shortTime"), " ");
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementStart(2, "div", 5)(3, "div", 6);
    \u0275\u0275conditionalCreate(4, ExploreSpaceInfoComponent_ng_template_2_Conditional_4_Template, 1, 1, "img", 7)(5, ExploreSpaceInfoComponent_ng_template_2_Conditional_5_Template, 1, 0, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 9)(7, "div", 10);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "uppercase");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, ExploreSpaceInfoComponent_ng_template_2_Conditional_11_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 12)(13, "h4", 13);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, ExploreSpaceInfoComponent_ng_template_2_Conditional_15_Template, 6, 7, "div", 14);
    \u0275\u0275conditionalCreate(16, ExploreSpaceInfoComponent_ng_template_2_Conditional_16_Template, 3, 0, "ul", 15);
    \u0275\u0275conditionalCreate(17, ExploreSpaceInfoComponent_ng_template_2_Conditional_17_Template, 10, 7);
    \u0275\u0275conditionalCreate(18, ExploreSpaceInfoComponent_ng_template_2_Conditional_18_Template, 6, 5, "div", 16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("-translate-x-full", ctx_r0.x_pos() === "end")("-translate-y-full", ctx_r0.y_pos() === "bottom");
    \u0275\u0275property("id", ctx_r0.space().id);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-neutral", ctx_r0.space().images[0])("h-32", ctx_r0.space().images[0])("h-8", !ctx_r0.space().images[0]);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.space().images?.length ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275classMap("text-light rounded-sm border border-white p-1 px-2 capitalize shadow-sm " + ctx_r0.status());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 23, ctx_r0.status() === "not-bookable" ? "COMMON.STATUS_NOT_BOOKABLE" : "COMMON.STATUS_" + \u0275\u0275pipeBind1(9, 21, ctx_r0.status())), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.status() !== "not-bookable" ? 11 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.space().display_name || ctx_r0.space().name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.space().capacity >= 0 ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.space().features?.length > 0 && !ctx_r0.hide_features() ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.show_event_details() && ctx_r0.next() ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.next() ? 18 : -1);
  }
}
var ExploreSpaceInfoComponent = class _ExploreSpaceInfoComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._details = inject(MAP_FEATURE_DATA);
    this._element = inject(ElementRef);
    this.y_pos = signal(
      "top",
      ...ngDevMode ? [{ debugName: "y_pos" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.x_pos = signal(
      "start",
      ...ngDevMode ? [{ debugName: "x_pos" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.space = signal(
      this._details.space || new Space(),
      ...ngDevMode ? [{ debugName: "space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.events = signal(
      this._details.events || [],
      ...ngDevMode ? [{ debugName: "events" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.now = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "now" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.next = computed(
      () => {
        return [...this.events()].sort((a, b) => a.date - b.date).filter((item) => item.date_end > this.now() && isSameDay(item.date, this.now()))[0];
      },
      ...ngDevMode ? [{ debugName: "next" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.current = computed(
      () => this.next() ? this.next()?.date <= this.now() && this.next()?.date_end > this.now() : false,
      ...ngDevMode ? [{ debugName: "current" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_event_details = settingSignal("explore.show_event_details", true);
    this.status = signal(
      this._details.status,
      ...ngDevMode ? [{ debugName: "status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hide_features = settingSignal("spaces.hide_features", false);
    this.available_until = computed(
      () => "",
      ...ngDevMode ? [{ debugName: "available_until" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    this.space.set(this._details.space || new Space());
    this.events.set(this._details.events || []);
    this.timeout("update_offset", () => this.updateOffset(), 200);
    this.interval("time", () => this.now.set(Date.now()), 5e3);
  }
  updateOffset() {
    const pos = this._element.nativeElement.getBoundingClientRect();
    this.x_pos.set(pos.x < document.body.clientWidth / 2 ? "start" : "end");
    this.y_pos.set(pos.y < document.body.clientHeight / 2 ? "top" : "bottom");
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ExploreSpaceInfoComponent_BaseFactory;
      return function ExploreSpaceInfoComponent_Factory(__ngFactoryType__) {
        return (\u0275ExploreSpaceInfoComponent_BaseFactory || (\u0275ExploreSpaceInfoComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ExploreSpaceInfoComponent)))(__ngFactoryType__ || _ExploreSpaceInfoComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreSpaceInfoComponent, selectors: [["explore-space-info"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 6, consts: [["tooltip", ""], ["space_tooltip", ""], ["customTooltip", "", 1, "pointer-events-auto", "relative", "h-full", "w-full", "cursor-pointer", 3, "mouseenter", "content", "backdrop", "xPosition", "yPosition", "hover"], ["name", "space-info", 1, "border-base-300", "bg-base-100", "pointer-events-none", "absolute", "top-0", "left-0", "w-64", "transform", "overflow-hidden", "rounded", "border", "shadow", 3, "id"], [1, "arrow"], [1, "relative"], [1, "bg-opacity-20", "relative", "flex", "w-full", "items-center", "justify-center", "overflow-hidden"], ["auth", "", 1, "min-h-full", "min-w-full", "object-cover", 3, "source"], [1, "bg-base-200", "absolute", "inset-0", "opacity-30"], [1, "absolute", "top-2", "left-2", "flex", "flex-wrap", "text-sm"], ["status", ""], ["available-until", ""], [1, "flex", "flex-col", "px-2", "py-4"], [1, "mb-2", "px-2", "text-xl", "font-medium"], ["capacity", "", 1, "mb-2", "flex", "items-center", "space-x-2", "px-2", "text-base"], [1, "flex", "flex-wrap"], [1, "mt-1", "flex", "items-center", "space-x-2", "px-2", "text-base"], [1, "bg-base-200", "m-1", "rounded-2xl", "px-2", "py-1", "text-xs", "font-medium"], [1, "rounded-sm", "px-2", "pb-1", "text-xs", "opacity-30"], [1, "border-base-300", "mb-1", "flex", "flex-col", "rounded-lg", "border", "p-2"], [1, "text-xs", "opacity-50"]], template: function ExploreSpaceInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2, 0);
        \u0275\u0275listener("mouseenter", function ExploreSpaceInfoComponent_Template_div_mouseenter_0_listener() {
          return ctx.updateOffset();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(2, ExploreSpaceInfoComponent_ng_template_2_Template, 19, 25, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const space_tooltip_r4 = \u0275\u0275reference(3);
        \u0275\u0275property("content", space_tooltip_r4)("backdrop", false)("xPosition", "center")("yPosition", "center")("hover", true);
        \u0275\u0275attribute("id", ctx.space().map_id || ctx.space().id);
      }
    }, dependencies: [
      IconComponent,
      CustomTooltipComponent,
      AuthenticatedImageDirective,
      AsyncPipe,
      DatePipe,
      UpperCasePipe,
      TranslatePipe,
      UserPipe
    ], styles: ["\n[status][_ngcontent-%COMP%] {\n  background-color: var(--success);\n  color: var(--success-content);\n}\n[status].busy[_ngcontent-%COMP%] {\n  background-color: var(--error);\n  color: var(--error-content);\n}\n[status].pending[_ngcontent-%COMP%] {\n  background-color: var(--warn);\n  color: var(--warn-content);\n}\n[status].not-bookable[_ngcontent-%COMP%] {\n  background-color: var(--base-300);\n}\n/*# sourceMappingURL=explore-space-info.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreSpaceInfoComponent, [{
    type: Component,
    args: [{ selector: "explore-space-info", template: `
        <div
            #tooltip
            customTooltip
            [content]="space_tooltip"
            [backdrop]="false"
            [xPosition]="'center'"
            [yPosition]="'center'"
            [hover]="true"
            [attr.id]="space().map_id || space().id"
            (mouseenter)="updateOffset()"
            class="pointer-events-auto relative h-full w-full cursor-pointer"
        ></div>
        <ng-template #space_tooltip>
            <div
                name="space-info"
                [id]="space().id"
                class="border-base-300 bg-base-100 pointer-events-none absolute top-0 left-0 w-64 transform overflow-hidden rounded border shadow"
                [class.-translate-x-full]="x_pos() === 'end'"
                [class.-translate-y-full]="y_pos() === 'bottom'"
            >
                <div class="arrow"></div>
                <div class="relative">
                    <div
                        class="bg-opacity-20 relative flex w-full items-center justify-center overflow-hidden"
                        [class.bg-neutral]="space().images[0]"
                        [class.h-32]="space().images[0]"
                        [class.h-8]="!space().images[0]"
                    >
                        @if (space().images?.length) {
                            <img
                                auth
                                [source]="space().images[0]"
                                class="min-h-full min-w-full object-cover"
                            />
                        } @else {
                            <div
                                class="bg-base-200 absolute inset-0 opacity-30"
                            ></div>
                        }
                    </div>
                    <div class="absolute top-2 left-2 flex flex-wrap text-sm">
                        <div
                            status
                            [class]="
                                'text-light rounded-sm border border-white p-1 px-2 capitalize shadow-sm ' +
                                status()
                            "
                        >
                            {{
                                (status() === 'not-bookable'
                                    ? 'COMMON.STATUS_NOT_BOOKABLE'
                                    : 'COMMON.STATUS_' + (status() | uppercase)
                                ) | translate
                            }}
                        </div>
                        @if (status() !== 'not-bookable') {
                            <div available-until>
                                {{ available_until() }}
                            </div>
                        }
                    </div>
                    <div class="flex flex-col px-2 py-4">
                        <h4 class="mb-2 px-2 text-xl font-medium">
                            {{ space().display_name || space().name }}
                        </h4>
                        @if (space().capacity >= 0) {
                            <div
                                capacity
                                class="mb-2 flex items-center space-x-2 px-2 text-base"
                            >
                                <icon>group</icon>
                                <div>
                                    {{
                                        'COMMON.PEOPLE_COUNT'
                                            | translate
                                                : { count: space().capacity }
                                                : space().capacity
                                    }}
                                </div>
                            </div>
                        }
                        @if (space().features?.length > 0 && !hide_features()) {
                            <ul class="flex flex-wrap">
                                @for (
                                    feature of space().features;
                                    track feature
                                ) {
                                    <li
                                        class="bg-base-200 m-1 rounded-2xl px-2 py-1 text-xs font-medium"
                                    >
                                        {{ feature }}
                                    </li>
                                }
                            </ul>
                        }
                        @if (show_event_details() && next()) {
                            @let host = next().host | user | async;
                            <div
                                class="rounded-sm px-2 pb-1 text-xs opacity-30"
                            >
                                {{ current() ? 'Current' : 'Upcoming' }}
                                booking
                            </div>
                            <div
                                class="border-base-300 mb-1 flex flex-col rounded-lg border p-2"
                            >
                                <h3>{{ next().title }}</h3>
                                <div class="text-xs opacity-50">
                                    {{ host?.name || next().host }}
                                </div>
                            </div>
                        }
                        @if (next()) {
                            <div
                                class="mt-1 flex items-center space-x-2 px-2 text-base"
                            >
                                <icon>alarm</icon>
                                <div>
                                    Free
                                    {{ next().date > now() ? 'until' : 'at' }}
                                    {{
                                        (next().date > now()
                                            ? next().date
                                            : next().date_end
                                        ) | date: 'shortTime'
                                    }}
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </ng-template>
    `, imports: [
      AsyncPipe,
      DatePipe,
      UpperCasePipe,
      IconComponent,
      CustomTooltipComponent,
      TranslatePipe,
      AuthenticatedImageDirective,
      UserPipe
    ], styles: ["/* angular:styles/component:css;49d3d38e3c811a7af0b23c1a4eab605a060569aead88ea7b8da86c409617cda8;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-space-info.component.ts */\n[status] {\n  background-color: var(--success);\n  color: var(--success-content);\n}\n[status].busy {\n  background-color: var(--error);\n  color: var(--error-content);\n}\n[status].pending {\n  background-color: var(--warn);\n  color: var(--warn-content);\n}\n[status].not-bookable {\n  background-color: var(--base-300);\n}\n/*# sourceMappingURL=explore-space-info.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreSpaceInfoComponent, { className: "ExploreSpaceInfoComponent", filePath: "libs/explore/src/lib/explore-space-info.component.ts", lineNumber: 208 });
})();

// libs/explore/src/lib/explore-spaces.service.ts
var DEFAULT_COLOURS = {
  free: "#43a047",
  pending: "#ffb300",
  reserved: "#e65100",
  busy: "#e53935",
  "signs-of-life": "#1565c0",
  "not-bookable": "#757575",
  unknown: "#757575"
};
var ExploreSpacesService = class _ExploreSpacesService extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(ExploreStateService);
    this._settings = inject(SettingsService);
    this._event_form = inject(EventFormService);
    this._dialog = inject(MatDialog);
    this._org = inject(OrganisationService);
    this._building = this._org.active_building;
    this._bookings = {};
    this._statuses = {};
    this._presence = {};
    this._panning = true;
    this._last_action = "";
    this._booking_rules = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_booking_rules" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._building() || void 0,
      loader: ({ params: bld }) => Vu(bld.id, `room_booking_rules`).then((_) => _?.details instanceof Array ? _.details : []).catch(() => [])
    }));
    this.booking_rules = computed(
      () => this._booking_rules.value() ?? [],
      ...ngDevMode ? [{ debugName: "booking_rules" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._room_alerts = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_room_alerts" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._building() || void 0,
      loader: () => Vu(this._org.organisation.id, `room_alerts`).then((_) => _.details || {}).catch(() => ({}))
    }));
    this.room_alerts = computed(
      () => this._room_alerts.value() ?? {},
      ...ngDevMode ? [{ debugName: "room_alerts" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const list = this._state.spaces();
      const { is_public } = this._state.options();
      if (is_public)
        return;
      untracked(() => this._bindToSpaces(list));
    });
  }
  _bindToSpaces(list) {
    this.unsubWith("b-");
    this.unsubWith("s-");
    this.unsubWith("c-");
    this._statuses = {};
    if (!list?.length)
      return;
    for (const space of list) {
      const mod = fd(space.id, "Bookings");
      let binding = mod.variable("bookings");
      this.subscription(`b-${space.id}`, binding.bindThenSubscribe((d) => this.handleBookingsChange(list, space, d)));
      binding = mod.variable("status");
      this.subscription(`s-${space.id}`, binding.bindThenSubscribe((d) => this.handleStatusChange(list, space, d)));
      binding = mod.variable("presence");
      this.subscription(`c-${space.id}`, binding.bindThenSubscribe((d) => this.handlePresenceChange(list, space, d)));
    }
    this.updateActions(list);
    this._updateHoverElements(list);
  }
  async bookSpace(space, force = false) {
    if (this._panning && this._last_action === "down")
      return;
    const booking_rules = this.booking_rules();
    const room_alerts = this.room_alerts();
    const { hidden } = rulesForResource({
      date: Date.now(),
      duration: 60,
      resource: space,
      host: currentUser()
    }, booking_rules) || {};
    if (hidden) {
      return notifyError(i18n("EXPLORE.SPACES_PERMISSIONS_ERROR"));
    }
    if (this._statuses[space.id] !== "free" && !force || !space.bookable) {
      return notifyError(i18n("EXPLORE.SPACES_UNAVAILABLE_ERROR", {
        name: space.display_name || space.name
      }));
    }
    if (room_alerts[space.id]?.[0] === "closed") {
      return notifyError(`${room_alerts[space.id][1]}`);
    }
    const bookable_hours = this._settings.get("app.events.bookable_hours");
    if (bookable_hours && !isWithinBookableHours(Date.now(), bookable_hours)) {
      return notifyError(i18n("EXPLORE.OUTSIDE_BOOKABLE_HOURS"));
    }
    if (this._settings.get("app.events.booking_unavailable")) {
      return this._event_form.openEventLinkModal();
    }
    if (space.room_booking_url) {
      const [email_start, email_end] = space.email.split("@");
      const url = space.room_booking_url.replace(/\{id\}/g, encodeURIComponent(space.id)).replace(/\{name\}/g, encodeURIComponent(space.display_name || space.name)).replace(/\{map_id\}/g, encodeURIComponent(space.map_id)).replace(/\{email\}/g, encodeURIComponent(space.email)).replace(/\{email_start\}/g, encodeURIComponent(email_start || "")).replace(/\{email_end\}/g, encodeURIComponent(email_end || ""));
      window.open(url, "_blank", "noopener noreferer");
      return;
    }
    this._event_form.newForm();
    this._event_form.model.update((m) => __spreadProps(__spreadValues({}, m), {
      host: currentUser()?.email,
      resources: [space]
    }));
    this._dialog.open(this._settings.get("app.explore.show_booking_qr") ? ExploreBookQrComponent : ExploreBookingModalComponent, {
      data: { space, alert: room_alerts[space.id] }
    });
  }
  handleBookingsChange(spaces, space, bookings) {
    if (!bookings)
      return;
    this._bookings[space.id] = bookings.map((i) => new CalendarEvent(i));
    this.timeout("update_hover_els", () => this._updateHoverElements(spaces), 100);
  }
  handleStatusChange(spaces, space, status) {
    if (space.bookable)
      this._statuses[space.id] = status || "free";
    else
      delete this._statuses[space.id];
    this.timeout("update_statuses", () => {
      this.clearTimeout("update_hover_els");
      this._updateStatus(spaces);
      this._updateHoverElements(spaces);
    }, 100);
  }
  handlePresenceChange(spaces, space, presence) {
    this._presence[space.id] = presence;
    this.timeout("update_icons", () => this._updateIcons(spaces), 100);
  }
  async _updateStatus(spaces) {
    const style_map = {};
    const colours = this._settings.get("app.explore.colors") || {};
    for (const space of spaces) {
      if (!this._statuses[space.id])
        continue;
      const status = this._statuses[space.id];
      style_map[`#${space.map_id}`] = {
        fill: colours[`space-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`],
        opacity: 0.6
      };
    }
    this._state.setStyles("spaces", style_map);
  }
  _updateHoverElements(spaces) {
    const features = [];
    for (const space of spaces) {
      if (!space.map_id)
        continue;
      features.push({
        location: space.map_id,
        full_size: true,
        no_scale: true,
        content: ExploreSpaceInfoComponent,
        z_index: 10,
        data: {
          space: new Space(space),
          events: this._bookings[space.id],
          status: this._statuses[space.id] || "not-bookable"
        }
      });
    }
    this._state.setFeatures("spaces", features);
  }
  _updateIcons(spaces) {
    if (!this._settings.get("app.show_presence_indicators"))
      return;
    const features = [];
    for (const space of spaces) {
      if (!space.map_id)
        continue;
      features.push({
        location: space.map_id,
        content: ExploreIconComponent,
        data: {
          icon: {
            class: "material-symbols-rounded",
            content: "sensor_occupied"
          },
          color: this._presence[space.id] ? "var(--success)" : "var(--base-content)",
          text_color: this._presence[space.id] ? "var(--success-content)" : "var(--base-100)"
        },
        z_index: 98
      });
    }
    this._state.setFeatures("spaces-presence", features);
  }
  updateActions(spaces) {
    const actions = [];
    for (const space of spaces) {
      if (!space.map_id)
        continue;
      for (const action of ["mousedown", "touchstart"]) {
        actions.push({
          id: space.map_id,
          action,
          priority: 5,
          callback: () => {
            this._panning = false;
            this.timeout("panning", () => this._panning = true, 300);
            this._last_action = "down";
          }
        });
      }
      for (const action of ["mouseup", "touchend"]) {
        actions.push({
          id: space.map_id,
          action,
          priority: 5,
          callback: () => {
            this.bookSpace(space);
            this._last_action = "up";
          }
        });
      }
    }
    this.timeout("set-actions", () => this._state.setActions("spaces", actions), 50);
  }
  static {
    this.\u0275fac = function ExploreSpacesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreSpacesService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreSpacesService, factory: _ExploreSpacesService.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreSpacesService, [{
    type: Injectable
  }], () => [], null);
})();

export {
  DEFAULT_COLOURS
};
//# sourceMappingURL=chunk-3YOTP46L.js.map
