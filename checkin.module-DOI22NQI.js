import {
  CheckinStateService
} from "./chunk-PRRTIHUS.js";
import {
  ANIMATION_MODULE_TYPE,
  ANIMATION_SHOW_CONTRACT_EXPAND,
  AsyncHandler,
  AsyncPipe,
  AttachedResourceConfigModalComponent,
  Attribute,
  AuthenticatedImageDirective,
  BehaviorSubject,
  COMMA,
  CalendarEvent,
  CateringItem,
  CateringOrder,
  CdkMonitorFocus,
  CdkObserveContent,
  CdkPortal,
  CdkPortalOutlet,
  CdkScrollable,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ComponentFactoryResolver$1,
  ComponentsModule,
  ContentChild,
  ContentChildren,
  CounterComponent,
  CurrencyPipe,
  CustomTooltipComponent,
  DOCUMENT,
  DatePipe,
  DefaultValueAccessor,
  Directionality,
  Directive,
  DurationFieldComponent,
  EMPTY,
  ENTER,
  ElementRef,
  EventEmitter,
  FocusKeyManager,
  FocusMonitor,
  FormControl,
  FormControlName,
  FormFieldsModule,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  IconComponent,
  ImageCarouselComponent,
  ImageListFieldComponent,
  Inject,
  InjectionToken,
  Injector,
  Input,
  MAT_DIALOG_DATA,
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
  MatCheckbox,
  MatCheckboxModule,
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatCommonModule,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
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
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
  MatRipple,
  MatSelect,
  MatTooltip,
  MatTooltipModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  NgModule,
  NgZone,
  NumberValueAccessor,
  Observable,
  Optional,
  OrganisationService,
  Output,
  Platform,
  PrintableComponent,
  QueryList,
  ReactiveFormsModule,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SPACE,
  SanitizePipe,
  SettingsService,
  SharedComponentsModule,
  SharedResizeObserver,
  SimpleTableComponent,
  Subject,
  Subscription,
  TakePhotoComponent,
  TemplatePortal,
  TemplateRef,
  TranslatePipe,
  UserAvatarComponent,
  Validators,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  ViewportRuler,
  addDays,
  addMinutes,
  afterNextRender,
  animate,
  booleanAttribute,
  catchError,
  combineLatest,
  csvToJson,
  currentUser,
  debounceTime,
  differenceInMinutes,
  distinctUntilChanged,
  downloadFile,
  endOfDay,
  filter,
  first,
  flatten,
  format,
  forwardRef,
  fromEvent,
  getUnixTime,
  hasModifierKey,
  inject,
  isAfter,
  isBefore,
  map,
  merge,
  normalizePassiveListenerOptions,
  notifyError,
  notifyInfo,
  notifySuccess,
  numberAttribute,
  of,
  openConfirmModal,
  queryEvents,
  randomInt,
  randomString,
  roundToNearestMinutes,
  setClassMetadata,
  setHours,
  shareReplay,
  showMetadata,
  skip,
  startOfDay,
  startOfMinute,
  startWith,
  state,
  stringToMinutes,
  style,
  subHours,
  switchMap,
  take,
  takeUntil,
  tap,
  timer,
  transition,
  trigger,
  unique,
  updateEventMetadata,
  updateMetadata,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵi18n,
  ɵɵi18nApply,
  ɵɵi18nExp,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction6,
  ɵɵpureFunctionV,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
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
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-FJJWYB32.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// apps/visitor-kiosk/src/app/checkin/checkin-details.component.ts
var _c0 = ["checkin-details", ""];
var _c1 = () => ["/welcome"];
function CheckinDetailsComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 2);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275elementStart(2, "h3", 3);
    \u0275\u0275text(3, "Confirm Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "label", 5);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-form-field", 6);
    \u0275\u0275element(9, "input", 7);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementStart(11, "mat-error");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 4)(15, "label", 8);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-form-field", 6);
    \u0275\u0275element(19, "input", 9);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementStart(21, "mat-error");
    \u0275\u0275text(22, "Please enter your full name");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 4)(24, "label", 10);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-form-field", 6);
    \u0275\u0275element(28, "input", 11);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementStart(30, "mat-error");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 4)(34, "label", 10);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-form-field", 6);
    \u0275\u0275element(38, "input", 12);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 4)(41, "label", 13);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "mat-form-field", 6);
    \u0275\u0275element(45, "input", 14);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "button", 15);
    \u0275\u0275listener("click", function CheckinDetailsComponent_form_0_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateGuest());
    });
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "a", 16)(51, "app-icon");
    \u0275\u0275text(52, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", \u0275\u0275pipeBind1(1, 15, ctx_r1.form));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 17, "VISITOR_KIOSK.HOST"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 19, "VISITOR_KIOSK.HOST"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 21, "VISITOR_KIOSK.EMAIL_REQUIRED"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 23, "VISITOR_KIOSK.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(20, 25, "VISITOR_KIOSK.NAME"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 27, "VISITOR_KIOSK.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(29, 29, "VISITOR_KIOSK.EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 31, "VISITOR_KIOSK.EMAIL_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 33, "VISITOR_KIOSK.PHONE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(39, 35, "VISITOR_KIOSK.PHONE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 37, "VISITOR_KIOSK.ORGANISATION"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(46, 39, "VISITOR_KIOSK.ORGANISATION"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 41, "VISITOR_KIOSK.CONTINUE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(43, _c1));
  }
}
function CheckinDetailsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275element(2, "mat-spinner", 19);
    \u0275\u0275elementStart(3, "div", 20);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("diameter", 48);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "VISITOR_KIOSK.CHECKIN_LOADING"), " ");
  }
}
var _CheckinDetailsComponent = class _CheckinDetailsComponent {
  get induction_after_details() {
    return this._settings.get("app.induction_after_details");
  }
  constructor(_checkin, _router, _settings) {
    this._checkin = _checkin;
    this._router = _router;
    this._settings = _settings;
    this.form = this._checkin.form;
    this.loading = false;
  }
  ngOnInit() {
    this.form.pipe(first()).subscribe((_) => !_ || !_.value.email ? this.previous() : "");
    if (this._checkin.metadata === "registered") {
      this.updateGuest();
    }
  }
  updateGuest() {
    return __async(this, null, function* () {
      this.loading = true;
      const result = yield this._checkin.checkinGuest().then(() => true).catch(() => false);
      this.loading = false;
      if (!result)
        return;
      if (this.induction_after_details) {
        this._router.navigate(["/checkin", "induction"]);
      } else {
        this._router.navigate(["/checkin", "results"]);
      }
    });
  }
  previous() {
    this._router.navigate(["/checkin", "scan"]);
  }
};
_CheckinDetailsComponent.\u0275fac = function CheckinDetailsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CheckinDetailsComponent)(\u0275\u0275directiveInject(CheckinStateService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SettingsService));
};
_CheckinDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinDetailsComponent, selectors: [["", "checkin-details", ""]], attrs: _c0, decls: 4, vars: 4, consts: [["load_state", ""], ["class", "bg-base-100 rounded shadow overflow-hidden relative flex flex-col items-center w-[36rem] p-4", 3, "formGroup", 4, "ngIf", "ngIfElse"], [1, "bg-base-100", "rounded", "shadow", "overflow-hidden", "relative", "flex", "flex-col", "items-center", "w-[36rem]", "p-4", 3, "formGroup"], [1, "text-2xl", "m-4"], ["field", "", 1, "flex", "flex-col"], ["form", "host"], ["appearance", "outline"], ["matInput", "", "name", "host", "formControlName", "host", 3, "placeholder"], ["form", "name"], ["matInput", "", "name", "name", "formControlName", "name", 3, "placeholder"], ["form", "email"], ["matInput", "", "name", "email", "formControlName", "email", 3, "placeholder"], ["matInput", "", "name", "phone", "type", "tel", "formControlName", "phone", 3, "placeholder"], ["form", "org"], ["matInput", "", "name", "org", "formControlName", "organisation", 3, "placeholder"], ["next", "", "btn", "", "matRipple", "", 3, "click"], ["icon", "", "matRipple", "", 1, "absolute", "top-0", "right-0", 3, "routerLink"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center"], [1, "flex", "flex-col", "items-center", "space-y-2", "bg-base-100", "rounded", "shadow", "p-16"], [3, "diameter"], [1, "my-4", "text-lg"]], template: function CheckinDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CheckinDetailsComponent_form_0_Template, 53, 44, "form", 1);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275template(2, CheckinDetailsComponent_ng_template_2_Template, 6, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const load_state_r3 = \u0275\u0275reference(3);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 2, ctx.form) && !ctx.loading)("ngIfElse", load_state_r3);
  }
}, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, IconComponent, MatFormField, MatError, MatRipple, MatInput, MatProgressSpinner, RouterLink, AsyncPipe, TranslatePipe], styles: ["\n\nform[_ngcontent-%COMP%] {\n  width: 32rem;\n  max-width: calc(100vw - 2rem);\n}\n[field][_ngcontent-%COMP%] {\n  width: calc(100% - 2rem);\n}\nbutton[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  width: 8rem;\n}\n/*# sourceMappingURL=checkin-details.component.css.map */"] });
var CheckinDetailsComponent = _CheckinDetailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinDetailsComponent, { className: "CheckinDetailsComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkin-details.component.ts", lineNumber: 134 });
})();

// apps/visitor-kiosk/src/app/checkin/checkin-photo.component.ts
var _c02 = () => ["/welcome"];
function CheckinPhotoComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "h3", 3);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a-take-photo", 4);
    \u0275\u0275listener("photoAccepted", function CheckinPhotoComponent_div_0_Template_a_take_photo_photoAccepted_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handlePhoto($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 5)(6, "app-icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "VISITOR_KIOSK.TAKE_PHOTO"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c02));
  }
}
function CheckinPhotoComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "mat-spinner", 7);
    \u0275\u0275elementStart(2, "div", 8);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 48);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "VISITOR_KIOSK.PRINT_LOADING"), " ");
  }
}
var _CheckinPhotoComponent = class _CheckinPhotoComponent {
  constructor(_checkin, _router) {
    this._checkin = _checkin;
    this._router = _router;
  }
  handlePhoto(event) {
    return __async(this, null, function* () {
      if (!event) {
        return notifyError("Error saving image, please try again");
      }
      this.loading = true;
      this._checkin.setPhoto(event);
      yield this._checkin.printPass().catch((e2) => {
        this.loading = false;
        notifyError(e2);
        throw e2;
      });
      this.loading = false;
      this._router.navigate(["/checkin", "results"]);
    });
  }
};
_CheckinPhotoComponent.\u0275fac = function CheckinPhotoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CheckinPhotoComponent)(\u0275\u0275directiveInject(CheckinStateService), \u0275\u0275directiveInject(Router));
};
_CheckinPhotoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinPhotoComponent, selectors: [["checkin-photo"]], decls: 3, vars: 2, consts: [["load_state", ""], ["class", "bg-base-100 rounded shadow overflow-hidden relative flex flex-col items-center p-4", 4, "ngIf", "ngIfElse"], [1, "bg-base-100", "rounded", "shadow", "overflow-hidden", "relative", "flex", "flex-col", "items-center", "p-4"], [1, "text-xl", "mb-4"], [3, "photoAccepted"], ["icon", "", "matRipple", "", 1, "absolute", "top-0", "right-0", 3, "routerLink"], [1, "flex", "flex-col", "items-center", "m-auto"], [3, "diameter"], [1, "my-4", "text-lg", "text-white"]], template: function CheckinPhotoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CheckinPhotoComponent_div_0_Template, 8, 5, "div", 1)(1, CheckinPhotoComponent_ng_template_1_Template, 5, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const load_state_r3 = \u0275\u0275reference(2);
    \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r3);
  }
}, dependencies: [NgIf, IconComponent, MatRipple, MatProgressSpinner, TakePhotoComponent, RouterLink, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.absolute[_ngcontent-%COMP%] {\n  position: absolute;\n}\n/*# sourceMappingURL=checkin-photo.component.css.map */"] });
var CheckinPhotoComponent = _CheckinPhotoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinPhotoComponent, { className: "CheckinPhotoComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkin-photo.component.ts", lineNumber: 55 });
})();

// node_modules/@angular/material/fesm2022/tabs.mjs
var _c03 = ["*"];
function MatTab_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
var _c12 = ["tabListContainer"];
var _c2 = ["tabList"];
var _c3 = ["tabListInner"];
var _c4 = ["nextPaginator"];
var _c5 = ["previousPaginator"];
var _c6 = (a0) => ({
  animationDuration: a0
});
var _c7 = (a0, a1) => ({
  value: a0,
  params: a1
});
function MatTabBody_ng_template_2_Template(rf, ctx) {
}
var _c8 = ["tabBodyWrapper"];
var _c9 = ["tabHeader"];
function MatTabGroup_For_3_Conditional_6_ng_template_0_Template(rf, ctx) {
}
function MatTabGroup_For_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MatTabGroup_For_3_Conditional_6_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("cdkPortalOutlet", tab_r4.templateLabel);
  }
}
function MatTabGroup_For_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(tab_r4.textLabel);
  }
}
function MatTabGroup_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7, 2);
    \u0275\u0275listener("click", function MatTabGroup_For_3_Template_div_click_0_listener() {
      const ctx_r2 = \u0275\u0275restoreView(_r2);
      const tab_r4 = ctx_r2.$implicit;
      const \u0275$index_3_r5 = ctx_r2.$index;
      const ctx_r5 = \u0275\u0275nextContext();
      const tabHeader_r7 = \u0275\u0275reference(1);
      return \u0275\u0275resetView(ctx_r5._handleClick(tab_r4, tabHeader_r7, \u0275$index_3_r5));
    })("cdkFocusChange", function MatTabGroup_For_3_Template_div_cdkFocusChange_0_listener($event) {
      const \u0275$index_3_r5 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5._tabFocusChanged($event, \u0275$index_3_r5));
    });
    \u0275\u0275element(2, "span", 8)(3, "div", 9);
    \u0275\u0275elementStart(4, "span", 10)(5, "span", 11);
    \u0275\u0275template(6, MatTabGroup_For_3_Conditional_6_Template, 1, 1, null, 12)(7, MatTabGroup_For_3_Conditional_7_Template, 1, 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const \u0275$index_3_r5 = ctx.$index;
    const tabNode_r8 = \u0275\u0275reference(1);
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classMap(tab_r4.labelClass);
    \u0275\u0275classProp("mdc-tab--active", ctx_r5.selectedIndex === \u0275$index_3_r5);
    \u0275\u0275property("id", ctx_r5._getTabLabelId(\u0275$index_3_r5))("disabled", tab_r4.disabled)("fitInkBarToContent", ctx_r5.fitInkBarToContent);
    \u0275\u0275attribute("tabIndex", ctx_r5._getTabIndex(\u0275$index_3_r5))("aria-posinset", \u0275$index_3_r5 + 1)("aria-setsize", ctx_r5._tabs.length)("aria-controls", ctx_r5._getTabContentId(\u0275$index_3_r5))("aria-selected", ctx_r5.selectedIndex === \u0275$index_3_r5)("aria-label", tab_r4.ariaLabel || null)("aria-labelledby", !tab_r4.ariaLabel && tab_r4.ariaLabelledby ? tab_r4.ariaLabelledby : null);
    \u0275\u0275advance(3);
    \u0275\u0275property("matRippleTrigger", tabNode_r8)("matRippleDisabled", tab_r4.disabled || ctx_r5.disableRipple);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(tab_r4.templateLabel ? 6 : 7);
  }
}
function MatTabGroup_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function MatTabGroup_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-tab-body", 13);
    \u0275\u0275listener("_onCentered", function MatTabGroup_For_8_Template_mat_tab_body__onCentered_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5._removeTabBodyWrapperHeight());
    })("_onCentering", function MatTabGroup_For_8_Template_mat_tab_body__onCentering_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5._setTabBodyWrapperHeight($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r10 = ctx.$implicit;
    const \u0275$index_23_r11 = ctx.$index;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classMap(tab_r10.bodyClass);
    \u0275\u0275classProp("mat-mdc-tab-body-active", ctx_r5.selectedIndex === \u0275$index_23_r11);
    \u0275\u0275property("id", ctx_r5._getTabContentId(\u0275$index_23_r11))("content", tab_r10.content)("position", tab_r10.position)("origin", tab_r10.origin)("animationDuration", ctx_r5.animationDuration)("preserveContent", ctx_r5.preserveContent);
    \u0275\u0275attribute("tabindex", ctx_r5.contentTabIndex != null && ctx_r5.selectedIndex === \u0275$index_23_r11 ? ctx_r5.contentTabIndex : null)("aria-labelledby", ctx_r5._getTabLabelId(\u0275$index_23_r11))("aria-hidden", ctx_r5.selectedIndex !== \u0275$index_23_r11);
  }
}
var _c10 = ["mat-tab-nav-bar", ""];
var _c11 = ["mat-tab-link", ""];
var MAT_TAB_CONTENT = new InjectionToken("MatTabContent");
var _MatTabContent = class _MatTabContent {
  constructor(template) {
    this.template = template;
  }
};
_MatTabContent.\u0275fac = function MatTabContent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatTabContent)(\u0275\u0275directiveInject(TemplateRef));
};
_MatTabContent.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatTabContent,
  selectors: [["", "matTabContent", ""]],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: MAT_TAB_CONTENT,
    useExisting: _MatTabContent
  }])]
});
var MatTabContent = _MatTabContent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabContent, [{
    type: Directive,
    args: [{
      selector: "[matTabContent]",
      providers: [{
        provide: MAT_TAB_CONTENT,
        useExisting: MatTabContent
      }],
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var MAT_TAB_LABEL = new InjectionToken("MatTabLabel");
var MAT_TAB = new InjectionToken("MAT_TAB");
var _MatTabLabel = class _MatTabLabel extends CdkPortal {
  constructor(templateRef, viewContainerRef, _closestTab) {
    super(templateRef, viewContainerRef);
    this._closestTab = _closestTab;
  }
};
_MatTabLabel.\u0275fac = function MatTabLabel_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatTabLabel)(\u0275\u0275directiveInject(TemplateRef), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(MAT_TAB, 8));
};
_MatTabLabel.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatTabLabel,
  selectors: [["", "mat-tab-label", ""], ["", "matTabLabel", ""]],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: MAT_TAB_LABEL,
    useExisting: _MatTabLabel
  }]), \u0275\u0275InheritDefinitionFeature]
});
var MatTabLabel = _MatTabLabel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabLabel, [{
    type: Directive,
    args: [{
      selector: "[mat-tab-label], [matTabLabel]",
      providers: [{
        provide: MAT_TAB_LABEL,
        useExisting: MatTabLabel
      }],
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_TAB]
    }, {
      type: Optional
    }]
  }], null);
})();
var MAT_TAB_GROUP = new InjectionToken("MAT_TAB_GROUP");
var _MatTab = class _MatTab {
  /** Content for the tab label given by `<ng-template mat-tab-label>`. */
  get templateLabel() {
    return this._templateLabel;
  }
  set templateLabel(value) {
    this._setTemplateLabelInput(value);
  }
  /** @docs-private */
  get content() {
    return this._contentPortal;
  }
  constructor(_viewContainerRef, _closestTabGroup) {
    this._viewContainerRef = _viewContainerRef;
    this._closestTabGroup = _closestTabGroup;
    this.disabled = false;
    this._explicitContent = void 0;
    this.textLabel = "";
    this._contentPortal = null;
    this._stateChanges = new Subject();
    this.position = null;
    this.origin = null;
    this.isActive = false;
  }
  ngOnChanges(changes) {
    if (changes.hasOwnProperty("textLabel") || changes.hasOwnProperty("disabled")) {
      this._stateChanges.next();
    }
  }
  ngOnDestroy() {
    this._stateChanges.complete();
  }
  ngOnInit() {
    this._contentPortal = new TemplatePortal(this._explicitContent || this._implicitContent, this._viewContainerRef);
  }
  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */
  _setTemplateLabelInput(value) {
    if (value && value._closestTab === this) {
      this._templateLabel = value;
    }
  }
};
_MatTab.\u0275fac = function MatTab_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatTab)(\u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(MAT_TAB_GROUP, 8));
};
_MatTab.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatTab,
  selectors: [["mat-tab"]],
  contentQueries: function MatTab_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, MatTabLabel, 5);
      \u0275\u0275contentQuery(dirIndex, MatTabContent, 7, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templateLabel = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._explicitContent = _t.first);
    }
  },
  viewQuery: function MatTab_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(TemplateRef, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._implicitContent = _t.first);
    }
  },
  hostAttrs: ["hidden", ""],
  inputs: {
    disabled: [2, "disabled", "disabled", booleanAttribute],
    textLabel: [0, "label", "textLabel"],
    ariaLabel: [0, "aria-label", "ariaLabel"],
    ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
    labelClass: "labelClass",
    bodyClass: "bodyClass"
  },
  exportAs: ["matTab"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: MAT_TAB,
    useExisting: _MatTab
  }]), \u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c03,
  decls: 1,
  vars: 0,
  template: function MatTab_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275template(0, MatTab_ng_template_0_Template, 1, 0, "ng-template");
    }
  },
  encapsulation: 2
});
var MatTab = _MatTab;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTab, [{
    type: Component,
    args: [{
      selector: "mat-tab",
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      exportAs: "matTab",
      providers: [{
        provide: MAT_TAB,
        useExisting: MatTab
      }],
      standalone: true,
      host: {
        // This element will be rendered on the server in order to support hydration.
        // Hide it so it doesn't cause a layout shift when it's removed on the client.
        "hidden": ""
      },
      template: "<!-- Create a template for the content of the <mat-tab> so that we can grab a reference to this\n    TemplateRef and use it in a Portal to render the tab content in the appropriate place in the\n    tab-group. -->\n<ng-template><ng-content></ng-content></ng-template>\n"
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_TAB_GROUP]
    }, {
      type: Optional
    }]
  }], {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    templateLabel: [{
      type: ContentChild,
      args: [MatTabLabel]
    }],
    _explicitContent: [{
      type: ContentChild,
      args: [MatTabContent, {
        read: TemplateRef,
        static: true
      }]
    }],
    _implicitContent: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }],
    textLabel: [{
      type: Input,
      args: ["label"]
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    labelClass: [{
      type: Input
    }],
    bodyClass: [{
      type: Input
    }]
  });
})();
var ACTIVE_CLASS = "mdc-tab-indicator--active";
var NO_TRANSITION_CLASS = "mdc-tab-indicator--no-transition";
var MatInkBar = class {
  constructor(_items) {
    this._items = _items;
  }
  /** Hides the ink bar. */
  hide() {
    this._items.forEach((item) => item.deactivateInkBar());
  }
  /** Aligns the ink bar to a DOM node. */
  alignToElement(element) {
    const correspondingItem = this._items.find((item) => item.elementRef.nativeElement === element);
    const currentItem = this._currentItem;
    if (correspondingItem === currentItem) {
      return;
    }
    currentItem?.deactivateInkBar();
    if (correspondingItem) {
      const domRect = currentItem?.elementRef.nativeElement.getBoundingClientRect?.();
      correspondingItem.activateInkBar(domRect);
      this._currentItem = correspondingItem;
    }
  }
};
var _InkBarItem = class _InkBarItem {
  constructor() {
    this._elementRef = inject(ElementRef);
    this._fitToContent = false;
  }
  /** Whether the ink bar should fit to the entire tab or just its content. */
  get fitInkBarToContent() {
    return this._fitToContent;
  }
  set fitInkBarToContent(newValue) {
    if (this._fitToContent !== newValue) {
      this._fitToContent = newValue;
      if (this._inkBarElement) {
        this._appendInkBarElement();
      }
    }
  }
  /** Aligns the ink bar to the current item. */
  activateInkBar(previousIndicatorClientRect) {
    const element = this._elementRef.nativeElement;
    if (!previousIndicatorClientRect || !element.getBoundingClientRect || !this._inkBarContentElement) {
      element.classList.add(ACTIVE_CLASS);
      return;
    }
    const currentClientRect = element.getBoundingClientRect();
    const widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
    const xPosition = previousIndicatorClientRect.left - currentClientRect.left;
    element.classList.add(NO_TRANSITION_CLASS);
    this._inkBarContentElement.style.setProperty("transform", `translateX(${xPosition}px) scaleX(${widthDelta})`);
    element.getBoundingClientRect();
    element.classList.remove(NO_TRANSITION_CLASS);
    element.classList.add(ACTIVE_CLASS);
    this._inkBarContentElement.style.setProperty("transform", "");
  }
  /** Removes the ink bar from the current item. */
  deactivateInkBar() {
    this._elementRef.nativeElement.classList.remove(ACTIVE_CLASS);
  }
  /** Initializes the foundation. */
  ngOnInit() {
    this._createInkBarElement();
  }
  /** Destroys the foundation. */
  ngOnDestroy() {
    this._inkBarElement?.remove();
    this._inkBarElement = this._inkBarContentElement = null;
  }
  /** Creates and appends the ink bar element. */
  _createInkBarElement() {
    const documentNode = this._elementRef.nativeElement.ownerDocument || document;
    const inkBarElement = this._inkBarElement = documentNode.createElement("span");
    const inkBarContentElement = this._inkBarContentElement = documentNode.createElement("span");
    inkBarElement.className = "mdc-tab-indicator";
    inkBarContentElement.className = "mdc-tab-indicator__content mdc-tab-indicator__content--underline";
    inkBarElement.appendChild(this._inkBarContentElement);
    this._appendInkBarElement();
  }
  /**
   * Appends the ink bar to the tab host element or content, depending on whether
   * the ink bar should fit to content.
   */
  _appendInkBarElement() {
    if (!this._inkBarElement && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("Ink bar element has not been created and cannot be appended");
    }
    const parentElement = this._fitToContent ? this._elementRef.nativeElement.querySelector(".mdc-tab__content") : this._elementRef.nativeElement;
    if (!parentElement && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("Missing element to host the ink bar");
    }
    parentElement.appendChild(this._inkBarElement);
  }
};
_InkBarItem.\u0275fac = function InkBarItem_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InkBarItem)();
};
_InkBarItem.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _InkBarItem,
  inputs: {
    fitInkBarToContent: [2, "fitInkBarToContent", "fitInkBarToContent", booleanAttribute]
  },
  features: [\u0275\u0275InputTransformsFeature]
});
var InkBarItem = _InkBarItem;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InkBarItem, [{
    type: Directive
  }], null, {
    fitInkBarToContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
function _MAT_INK_BAR_POSITIONER_FACTORY() {
  const method = (element) => ({
    left: element ? (element.offsetLeft || 0) + "px" : "0",
    width: element ? (element.offsetWidth || 0) + "px" : "0"
  });
  return method;
}
var _MAT_INK_BAR_POSITIONER = new InjectionToken("MatInkBarPositioner", {
  providedIn: "root",
  factory: _MAT_INK_BAR_POSITIONER_FACTORY
});
var _MatTabLabelWrapper = class _MatTabLabelWrapper extends InkBarItem {
  constructor(elementRef) {
    super();
    this.elementRef = elementRef;
    this.disabled = false;
  }
  /** Sets focus on the wrapper element */
  focus() {
    this.elementRef.nativeElement.focus();
  }
  getOffsetLeft() {
    return this.elementRef.nativeElement.offsetLeft;
  }
  getOffsetWidth() {
    return this.elementRef.nativeElement.offsetWidth;
  }
};
_MatTabLabelWrapper.\u0275fac = function MatTabLabelWrapper_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatTabLabelWrapper)(\u0275\u0275directiveInject(ElementRef));
};
_MatTabLabelWrapper.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatTabLabelWrapper,
  selectors: [["", "matTabLabelWrapper", ""]],
  hostVars: 3,
  hostBindings: function MatTabLabelWrapper_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("aria-disabled", !!ctx.disabled);
      \u0275\u0275classProp("mat-mdc-tab-disabled", ctx.disabled);
    }
  },
  inputs: {
    disabled: [2, "disabled", "disabled", booleanAttribute]
  },
  standalone: true,
  features: [\u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature]
});
var MatTabLabelWrapper = _MatTabLabelWrapper;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabLabelWrapper, [{
    type: Directive,
    args: [{
      selector: "[matTabLabelWrapper]",
      host: {
        "[class.mat-mdc-tab-disabled]": "disabled",
        "[attr.aria-disabled]": "!!disabled"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }], {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var passiveEventListenerOptions = normalizePassiveListenerOptions({
  passive: true
});
var HEADER_SCROLL_DELAY = 650;
var HEADER_SCROLL_INTERVAL = 100;
var _MatPaginatedTabHeader = class _MatPaginatedTabHeader {
  /** The index of the active tab. */
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(v) {
    const value = isNaN(v) ? 0 : v;
    if (this._selectedIndex != value) {
      this._selectedIndexChanged = true;
      this._selectedIndex = value;
      if (this._keyManager) {
        this._keyManager.updateActiveItem(value);
      }
    }
  }
  constructor(_elementRef, _changeDetectorRef, _viewportRuler, _dir, _ngZone, _platform, _animationMode) {
    this._elementRef = _elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._viewportRuler = _viewportRuler;
    this._dir = _dir;
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._animationMode = _animationMode;
    this._scrollDistance = 0;
    this._selectedIndexChanged = false;
    this._destroyed = new Subject();
    this._showPaginationControls = false;
    this._disableScrollAfter = true;
    this._disableScrollBefore = true;
    this._stopScrolling = new Subject();
    this.disablePagination = false;
    this._selectedIndex = 0;
    this.selectFocusedIndex = new EventEmitter();
    this.indexFocused = new EventEmitter();
    this._sharedResizeObserver = inject(SharedResizeObserver);
    this._injector = inject(Injector);
    _ngZone.runOutsideAngular(() => {
      fromEvent(_elementRef.nativeElement, "mouseleave").pipe(takeUntil(this._destroyed)).subscribe(() => {
        this._stopInterval();
      });
    });
  }
  ngAfterViewInit() {
    fromEvent(this._previousPaginator.nativeElement, "touchstart", passiveEventListenerOptions).pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._handlePaginatorPress("before");
    });
    fromEvent(this._nextPaginator.nativeElement, "touchstart", passiveEventListenerOptions).pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._handlePaginatorPress("after");
    });
  }
  ngAfterContentInit() {
    const dirChange = this._dir ? this._dir.change : of("ltr");
    const resize = this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(debounceTime(32), takeUntil(this._destroyed));
    const viewportResize = this._viewportRuler.change(150).pipe(takeUntil(this._destroyed));
    const realign = () => {
      this.updatePagination();
      this._alignInkBarToSelectedTab();
    };
    this._keyManager = new FocusKeyManager(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(() => false);
    this._keyManager.updateActiveItem(this._selectedIndex);
    afterNextRender(realign, {
      injector: this._injector
    });
    merge(dirChange, viewportResize, resize, this._items.changes, this._itemsResized()).pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._ngZone.run(() => {
        Promise.resolve().then(() => {
          this._scrollDistance = Math.max(0, Math.min(this._getMaxScrollDistance(), this._scrollDistance));
          realign();
        });
      });
      this._keyManager.withHorizontalOrientation(this._getLayoutDirection());
    });
    this._keyManager.change.subscribe((newFocusIndex) => {
      this.indexFocused.emit(newFocusIndex);
      this._setTabFocus(newFocusIndex);
    });
  }
  /** Sends any changes that could affect the layout of the items. */
  _itemsResized() {
    if (typeof ResizeObserver !== "function") {
      return EMPTY;
    }
    return this._items.changes.pipe(
      startWith(this._items),
      switchMap((tabItems) => new Observable((observer) => this._ngZone.runOutsideAngular(() => {
        const resizeObserver = new ResizeObserver((entries) => observer.next(entries));
        tabItems.forEach((item) => resizeObserver.observe(item.elementRef.nativeElement));
        return () => {
          resizeObserver.disconnect();
        };
      }))),
      // Skip the first emit since the resize observer emits when an item
      // is observed for new items when the tab is already inserted
      skip(1),
      // Skip emissions where all the elements are invisible since we don't want
      // the header to try and re-render with invalid measurements. See #25574.
      filter((entries) => entries.some((e2) => e2.contentRect.width > 0 && e2.contentRect.height > 0))
    );
  }
  ngAfterContentChecked() {
    if (this._tabLabelCount != this._items.length) {
      this.updatePagination();
      this._tabLabelCount = this._items.length;
      this._changeDetectorRef.markForCheck();
    }
    if (this._selectedIndexChanged) {
      this._scrollToLabel(this._selectedIndex);
      this._checkScrollingControls();
      this._alignInkBarToSelectedTab();
      this._selectedIndexChanged = false;
      this._changeDetectorRef.markForCheck();
    }
    if (this._scrollDistanceChanged) {
      this._updateTabScrollPosition();
      this._scrollDistanceChanged = false;
      this._changeDetectorRef.markForCheck();
    }
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this._destroyed.next();
    this._destroyed.complete();
    this._stopScrolling.complete();
  }
  /** Handles keyboard events on the header. */
  _handleKeydown(event) {
    if (hasModifierKey(event)) {
      return;
    }
    switch (event.keyCode) {
      case ENTER:
      case SPACE:
        if (this.focusIndex !== this.selectedIndex) {
          const item = this._items.get(this.focusIndex);
          if (item && !item.disabled) {
            this.selectFocusedIndex.emit(this.focusIndex);
            this._itemSelected(event);
          }
        }
        break;
      default:
        this._keyManager.onKeydown(event);
    }
  }
  /**
   * Callback for when the MutationObserver detects that the content has changed.
   */
  _onContentChanges() {
    const textContent = this._elementRef.nativeElement.textContent;
    if (textContent !== this._currentTextContent) {
      this._currentTextContent = textContent || "";
      this._ngZone.run(() => {
        this.updatePagination();
        this._alignInkBarToSelectedTab();
        this._changeDetectorRef.markForCheck();
      });
    }
  }
  /**
   * Updates the view whether pagination should be enabled or not.
   *
   * WARNING: Calling this method can be very costly in terms of performance. It should be called
   * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
   * page.
   */
  updatePagination() {
    this._checkPaginationEnabled();
    this._checkScrollingControls();
    this._updateTabScrollPosition();
  }
  /** Tracks which element has focus; used for keyboard navigation */
  get focusIndex() {
    return this._keyManager ? this._keyManager.activeItemIndex : 0;
  }
  /** When the focus index is set, we must manually send focus to the correct label */
  set focusIndex(value) {
    if (!this._isValidIndex(value) || this.focusIndex === value || !this._keyManager) {
      return;
    }
    this._keyManager.setActiveItem(value);
  }
  /**
   * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
   * providing a valid index and return true.
   */
  _isValidIndex(index) {
    return this._items ? !!this._items.toArray()[index] : true;
  }
  /**
   * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
   * scrolling is enabled.
   */
  _setTabFocus(tabIndex) {
    if (this._showPaginationControls) {
      this._scrollToLabel(tabIndex);
    }
    if (this._items && this._items.length) {
      this._items.toArray()[tabIndex].focus();
      const containerEl = this._tabListContainer.nativeElement;
      const dir = this._getLayoutDirection();
      if (dir == "ltr") {
        containerEl.scrollLeft = 0;
      } else {
        containerEl.scrollLeft = containerEl.scrollWidth - containerEl.offsetWidth;
      }
    }
  }
  /** The layout direction of the containing app. */
  _getLayoutDirection() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  /** Performs the CSS transformation on the tab list that will cause the list to scroll. */
  _updateTabScrollPosition() {
    if (this.disablePagination) {
      return;
    }
    const scrollDistance = this.scrollDistance;
    const translateX = this._getLayoutDirection() === "ltr" ? -scrollDistance : scrollDistance;
    this._tabList.nativeElement.style.transform = `translateX(${Math.round(translateX)}px)`;
    if (this._platform.TRIDENT || this._platform.EDGE) {
      this._tabListContainer.nativeElement.scrollLeft = 0;
    }
  }
  /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
  get scrollDistance() {
    return this._scrollDistance;
  }
  set scrollDistance(value) {
    this._scrollTo(value);
  }
  /**
   * Moves the tab list in the 'before' or 'after' direction (towards the beginning of the list or
   * the end of the list, respectively). The distance to scroll is computed to be a third of the
   * length of the tab list view window.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _scrollHeader(direction) {
    const viewLength = this._tabListContainer.nativeElement.offsetWidth;
    const scrollAmount = (direction == "before" ? -1 : 1) * viewLength / 3;
    return this._scrollTo(this._scrollDistance + scrollAmount);
  }
  /** Handles click events on the pagination arrows. */
  _handlePaginatorClick(direction) {
    this._stopInterval();
    this._scrollHeader(direction);
  }
  /**
   * Moves the tab list such that the desired tab label (marked by index) is moved into view.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _scrollToLabel(labelIndex) {
    if (this.disablePagination) {
      return;
    }
    const selectedLabel = this._items ? this._items.toArray()[labelIndex] : null;
    if (!selectedLabel) {
      return;
    }
    const viewLength = this._tabListContainer.nativeElement.offsetWidth;
    const {
      offsetLeft,
      offsetWidth
    } = selectedLabel.elementRef.nativeElement;
    let labelBeforePos, labelAfterPos;
    if (this._getLayoutDirection() == "ltr") {
      labelBeforePos = offsetLeft;
      labelAfterPos = labelBeforePos + offsetWidth;
    } else {
      labelAfterPos = this._tabListInner.nativeElement.offsetWidth - offsetLeft;
      labelBeforePos = labelAfterPos - offsetWidth;
    }
    const beforeVisiblePos = this.scrollDistance;
    const afterVisiblePos = this.scrollDistance + viewLength;
    if (labelBeforePos < beforeVisiblePos) {
      this.scrollDistance -= beforeVisiblePos - labelBeforePos;
    } else if (labelAfterPos > afterVisiblePos) {
      this.scrollDistance += Math.min(labelAfterPos - afterVisiblePos, labelBeforePos - beforeVisiblePos);
    }
  }
  /**
   * Evaluate whether the pagination controls should be displayed. If the scroll width of the
   * tab list is wider than the size of the header container, then the pagination controls should
   * be shown.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _checkPaginationEnabled() {
    if (this.disablePagination) {
      this._showPaginationControls = false;
    } else {
      const scrollWidth = this._tabListInner.nativeElement.scrollWidth;
      const containerWidth = this._elementRef.nativeElement.offsetWidth;
      const isEnabled = scrollWidth - containerWidth >= 5;
      if (!isEnabled) {
        this.scrollDistance = 0;
      }
      if (isEnabled !== this._showPaginationControls) {
        this._showPaginationControls = isEnabled;
        this._changeDetectorRef.markForCheck();
      }
    }
  }
  /**
   * Evaluate whether the before and after controls should be enabled or disabled.
   * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
   * before button. If the header is at the end of the list (scroll distance is equal to the
   * maximum distance we can scroll), then disable the after button.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _checkScrollingControls() {
    if (this.disablePagination) {
      this._disableScrollAfter = this._disableScrollBefore = true;
    } else {
      this._disableScrollBefore = this.scrollDistance == 0;
      this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance();
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * Determines what is the maximum length in pixels that can be set for the scroll distance. This
   * is equal to the difference in width between the tab list container and tab header container.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _getMaxScrollDistance() {
    const lengthOfTabList = this._tabListInner.nativeElement.scrollWidth;
    const viewLength = this._tabListContainer.nativeElement.offsetWidth;
    return lengthOfTabList - viewLength || 0;
  }
  /** Tells the ink-bar to align itself to the current label wrapper */
  _alignInkBarToSelectedTab() {
    const selectedItem = this._items && this._items.length ? this._items.toArray()[this.selectedIndex] : null;
    const selectedLabelWrapper = selectedItem ? selectedItem.elementRef.nativeElement : null;
    if (selectedLabelWrapper) {
      this._inkBar.alignToElement(selectedLabelWrapper);
    } else {
      this._inkBar.hide();
    }
  }
  /** Stops the currently-running paginator interval.  */
  _stopInterval() {
    this._stopScrolling.next();
  }
  /**
   * Handles the user pressing down on one of the paginators.
   * Starts scrolling the header after a certain amount of time.
   * @param direction In which direction the paginator should be scrolled.
   */
  _handlePaginatorPress(direction, mouseEvent) {
    if (mouseEvent && mouseEvent.button != null && mouseEvent.button !== 0) {
      return;
    }
    this._stopInterval();
    timer(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL).pipe(takeUntil(merge(this._stopScrolling, this._destroyed))).subscribe(() => {
      const {
        maxScrollDistance,
        distance
      } = this._scrollHeader(direction);
      if (distance === 0 || distance >= maxScrollDistance) {
        this._stopInterval();
      }
    });
  }
  /**
   * Scrolls the header to a given position.
   * @param position Position to which to scroll.
   * @returns Information on the current scroll distance and the maximum.
   */
  _scrollTo(position) {
    if (this.disablePagination) {
      return {
        maxScrollDistance: 0,
        distance: 0
      };
    }
    const maxScrollDistance = this._getMaxScrollDistance();
    this._scrollDistance = Math.max(0, Math.min(maxScrollDistance, position));
    this._scrollDistanceChanged = true;
    this._checkScrollingControls();
    return {
      maxScrollDistance,
      distance: this._scrollDistance
    };
  }
};
_MatPaginatedTabHeader.\u0275fac = function MatPaginatedTabHeader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatPaginatedTabHeader)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ViewportRuler), \u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8));
};
_MatPaginatedTabHeader.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatPaginatedTabHeader,
  inputs: {
    disablePagination: [2, "disablePagination", "disablePagination", booleanAttribute],
    selectedIndex: [2, "selectedIndex", "selectedIndex", numberAttribute]
  },
  outputs: {
    selectFocusedIndex: "selectFocusedIndex",
    indexFocused: "indexFocused"
  },
  features: [\u0275\u0275InputTransformsFeature]
});
var MatPaginatedTabHeader = _MatPaginatedTabHeader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginatedTabHeader, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: ViewportRuler
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NgZone
  }, {
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], {
    disablePagination: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectedIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    selectFocusedIndex: [{
      type: Output
    }],
    indexFocused: [{
      type: Output
    }]
  });
})();
var _MatTabHeader = class _MatTabHeader extends MatPaginatedTabHeader {
  constructor(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode) {
    super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
    this.disableRipple = false;
  }
  ngAfterContentInit() {
    this._inkBar = new MatInkBar(this._items);
    super.ngAfterContentInit();
  }
  _itemSelected(event) {
    event.preventDefault();
  }
};
_MatTabHeader.\u0275fac = function MatTabHeader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatTabHeader)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ViewportRuler), \u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8));
};
_MatTabHeader.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatTabHeader,
  selectors: [["mat-tab-header"]],
  contentQueries: function MatTabHeader_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, MatTabLabelWrapper, 4);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._items = _t);
    }
  },
  viewQuery: function MatTabHeader_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c12, 7);
      \u0275\u0275viewQuery(_c2, 7);
      \u0275\u0275viewQuery(_c3, 7);
      \u0275\u0275viewQuery(_c4, 5);
      \u0275\u0275viewQuery(_c5, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabListContainer = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabList = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabListInner = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._nextPaginator = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._previousPaginator = _t.first);
    }
  },
  hostAttrs: [1, "mat-mdc-tab-header"],
  hostVars: 4,
  hostBindings: function MatTabHeader_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("mat-mdc-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-mdc-tab-header-rtl", ctx._getLayoutDirection() == "rtl");
    }
  },
  inputs: {
    ariaLabel: [0, "aria-label", "ariaLabel"],
    ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
    disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute]
  },
  standalone: true,
  features: [\u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c03,
  decls: 13,
  vars: 10,
  consts: [["previousPaginator", ""], ["tabListContainer", ""], ["tabList", ""], ["tabListInner", ""], ["nextPaginator", ""], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-before", 3, "click", "mousedown", "touchend", "matRippleDisabled"], [1, "mat-mdc-tab-header-pagination-chevron"], [1, "mat-mdc-tab-label-container", 3, "keydown"], ["role", "tablist", 1, "mat-mdc-tab-list", 3, "cdkObserveContent"], [1, "mat-mdc-tab-labels"], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-after", 3, "mousedown", "click", "touchend", "matRippleDisabled"]],
  template: function MatTabHeader_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 5, 0);
      \u0275\u0275listener("click", function MatTabHeader_Template_div_click_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._handlePaginatorClick("before"));
      })("mousedown", function MatTabHeader_Template_div_mousedown_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._handlePaginatorPress("before", $event));
      })("touchend", function MatTabHeader_Template_div_touchend_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._stopInterval());
      });
      \u0275\u0275element(2, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 7, 1);
      \u0275\u0275listener("keydown", function MatTabHeader_Template_div_keydown_3_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._handleKeydown($event));
      });
      \u0275\u0275elementStart(5, "div", 8, 2);
      \u0275\u0275listener("cdkObserveContent", function MatTabHeader_Template_div_cdkObserveContent_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._onContentChanges());
      });
      \u0275\u0275elementStart(7, "div", 9, 3);
      \u0275\u0275projection(9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 10, 4);
      \u0275\u0275listener("mousedown", function MatTabHeader_Template_div_mousedown_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._handlePaginatorPress("after", $event));
      })("click", function MatTabHeader_Template_div_click_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._handlePaginatorClick("after"));
      })("touchend", function MatTabHeader_Template_div_touchend_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._stopInterval());
      });
      \u0275\u0275element(12, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollBefore);
      \u0275\u0275property("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby || null);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollAfter);
      \u0275\u0275property("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
    }
  },
  dependencies: [MatRipple, CdkObserveContent],
  styles: [".mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-header-pagination-icon-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-header-divider-height);border-bottom-color:var(--mat-tab-header-divider-color, var(--mat-app-surface-variant))}.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container{border-bottom:none;border-top-style:solid;border-top-width:var(--mat-tab-header-divider-height);border-top-color:var(--mat-tab-header-divider-color, var(--mat-app-surface-variant))}.mat-mdc-tab-labels{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-labels,.mat-mdc-tab-labels.cdk-drop-list{min-height:var(--mdc-secondary-navigation-tab-container-height)}.mat-mdc-tab::before{margin:5px}.cdk-high-contrast-active .mat-mdc-tab[aria-disabled=true]{color:GrayText}"],
  encapsulation: 2
});
var MatTabHeader = _MatTabHeader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabHeader, [{
    type: Component,
    args: [{
      selector: "mat-tab-header",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      host: {
        "class": "mat-mdc-tab-header",
        "[class.mat-mdc-tab-header-pagination-controls-enabled]": "_showPaginationControls",
        "[class.mat-mdc-tab-header-rtl]": "_getLayoutDirection() == 'rtl'"
      },
      standalone: true,
      imports: [MatRipple, CdkObserveContent],
      template: `<!--
 Note that this intentionally uses a \`div\` instead of a \`button\`, because it's not part of
 the regular tabs flow and is only here to support mouse users. It should also not be focusable.
-->
<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before"
     #previousPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollBefore || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollBefore"
     (click)="_handlePaginatorClick('before')"
     (mousedown)="_handlePaginatorPress('before', $event)"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>

<div
  class="mat-mdc-tab-label-container"
  #tabListContainer
  (keydown)="_handleKeydown($event)"
  [class._mat-animation-noopable]="_animationMode === 'NoopAnimations'">
  <div
    #tabList
    class="mat-mdc-tab-list"
    role="tablist"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="ariaLabelledby || null"
    (cdkObserveContent)="_onContentChanges()">
    <div class="mat-mdc-tab-labels" #tabListInner>
      <ng-content></ng-content>
    </div>
  </div>
</div>

<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after"
     #nextPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollAfter || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollAfter"
     (mousedown)="_handlePaginatorPress('after', $event)"
     (click)="_handlePaginatorClick('after')"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>
`,
      styles: [".mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-header-pagination-icon-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-header-divider-height);border-bottom-color:var(--mat-tab-header-divider-color, var(--mat-app-surface-variant))}.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container{border-bottom:none;border-top-style:solid;border-top-width:var(--mat-tab-header-divider-height);border-top-color:var(--mat-tab-header-divider-color, var(--mat-app-surface-variant))}.mat-mdc-tab-labels{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-labels,.mat-mdc-tab-labels.cdk-drop-list{min-height:var(--mdc-secondary-navigation-tab-container-height)}.mat-mdc-tab::before{margin:5px}.cdk-high-contrast-active .mat-mdc-tab[aria-disabled=true]{color:GrayText}"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: ViewportRuler
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NgZone
  }, {
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], {
    _items: [{
      type: ContentChildren,
      args: [MatTabLabelWrapper, {
        descendants: false
      }]
    }],
    _tabListContainer: [{
      type: ViewChild,
      args: ["tabListContainer", {
        static: true
      }]
    }],
    _tabList: [{
      type: ViewChild,
      args: ["tabList", {
        static: true
      }]
    }],
    _tabListInner: [{
      type: ViewChild,
      args: ["tabListInner", {
        static: true
      }]
    }],
    _nextPaginator: [{
      type: ViewChild,
      args: ["nextPaginator"]
    }],
    _previousPaginator: [{
      type: ViewChild,
      args: ["previousPaginator"]
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MAT_TABS_CONFIG = new InjectionToken("MAT_TABS_CONFIG");
var matTabsAnimations = {
  /** Animation translates a tab along the X axis. */
  translateTab: trigger("translateTab", [
    // Transitions to `none` instead of 0, because some browsers might blur the content.
    state("center, void, left-origin-center, right-origin-center", style({
      transform: "none",
      visibility: "visible"
    })),
    // If the tab is either on the left or right, we additionally add a `min-height` of 1px
    // in order to ensure that the element has a height before its state changes. This is
    // necessary because Chrome does seem to skip the transition in RTL mode if the element does
    // not have a static height and is not rendered. See related issue: #9465
    state("left", style({
      transform: "translate3d(-100%, 0, 0)",
      minHeight: "1px",
      // Normally this is redundant since we detach the content from the DOM, but if the user
      // opted into keeping the content in the DOM, we have to hide it so it isn't focusable.
      visibility: "hidden"
    })),
    state("right", style({
      transform: "translate3d(100%, 0, 0)",
      minHeight: "1px",
      visibility: "hidden"
    })),
    transition("* => left, * => right, left => center, right => center", animate("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")),
    transition("void => left-origin-center", [style({
      transform: "translate3d(-100%, 0, 0)",
      visibility: "hidden"
    }), animate("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")]),
    transition("void => right-origin-center", [style({
      transform: "translate3d(100%, 0, 0)",
      visibility: "hidden"
    }), animate("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")])
  ])
};
var _MatTabBodyPortal = class _MatTabBodyPortal extends CdkPortalOutlet {
  constructor(componentFactoryResolver, viewContainerRef, _host, _document) {
    super(componentFactoryResolver, viewContainerRef, _document);
    this._host = _host;
    this._centeringSub = Subscription.EMPTY;
    this._leavingSub = Subscription.EMPTY;
  }
  /** Set initial visibility or set up subscription for changing visibility. */
  ngOnInit() {
    super.ngOnInit();
    this._centeringSub = this._host._beforeCentering.pipe(startWith(this._host._isCenterPosition(this._host._position))).subscribe((isCentering) => {
      if (this._host._content && isCentering && !this.hasAttached()) {
        this.attach(this._host._content);
      }
    });
    this._leavingSub = this._host._afterLeavingCenter.subscribe(() => {
      if (!this._host.preserveContent) {
        this.detach();
      }
    });
  }
  /** Clean up centering subscription. */
  ngOnDestroy() {
    super.ngOnDestroy();
    this._centeringSub.unsubscribe();
    this._leavingSub.unsubscribe();
  }
};
_MatTabBodyPortal.\u0275fac = function MatTabBodyPortal_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatTabBodyPortal)(\u0275\u0275directiveInject(ComponentFactoryResolver$1), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(forwardRef(() => MatTabBody)), \u0275\u0275directiveInject(DOCUMENT));
};
_MatTabBodyPortal.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatTabBodyPortal,
  selectors: [["", "matTabBodyHost", ""]],
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var MatTabBodyPortal = _MatTabBodyPortal;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabBodyPortal, [{
    type: Directive,
    args: [{
      selector: "[matTabBodyHost]",
      standalone: true
    }]
  }], () => [{
    type: ComponentFactoryResolver$1
  }, {
    type: ViewContainerRef
  }, {
    type: MatTabBody,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => MatTabBody)]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var _MatTabBody = class _MatTabBody {
  /** The shifted index position of the tab body, where zero represents the active center tab. */
  set position(position) {
    this._positionIndex = position;
    this._computePositionAnimationState();
  }
  constructor(_elementRef, _dir, changeDetectorRef) {
    this._elementRef = _elementRef;
    this._dir = _dir;
    this._dirChangeSubscription = Subscription.EMPTY;
    this._translateTabComplete = new Subject();
    this._onCentering = new EventEmitter();
    this._beforeCentering = new EventEmitter();
    this._afterLeavingCenter = new EventEmitter();
    this._onCentered = new EventEmitter(true);
    this.animationDuration = "500ms";
    this.preserveContent = false;
    if (_dir) {
      this._dirChangeSubscription = _dir.change.subscribe((dir) => {
        this._computePositionAnimationState(dir);
        changeDetectorRef.markForCheck();
      });
    }
    this._translateTabComplete.pipe(distinctUntilChanged((x, y) => {
      return x.fromState === y.fromState && x.toState === y.toState;
    })).subscribe((event) => {
      if (this._isCenterPosition(event.toState) && this._isCenterPosition(this._position)) {
        this._onCentered.emit();
      }
      if (this._isCenterPosition(event.fromState) && !this._isCenterPosition(this._position)) {
        this._afterLeavingCenter.emit();
      }
    });
  }
  /**
   * After initialized, check if the content is centered and has an origin. If so, set the
   * special position states that transition the tab from the left or right before centering.
   */
  ngOnInit() {
    if (this._position == "center" && this.origin != null) {
      this._position = this._computePositionFromOrigin(this.origin);
    }
  }
  ngOnDestroy() {
    this._dirChangeSubscription.unsubscribe();
    this._translateTabComplete.complete();
  }
  _onTranslateTabStarted(event) {
    const isCentering = this._isCenterPosition(event.toState);
    this._beforeCentering.emit(isCentering);
    if (isCentering) {
      this._onCentering.emit(this._elementRef.nativeElement.clientHeight);
    }
  }
  /** The text direction of the containing app. */
  _getLayoutDirection() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  /** Whether the provided position state is considered center, regardless of origin. */
  _isCenterPosition(position) {
    return position == "center" || position == "left-origin-center" || position == "right-origin-center";
  }
  /** Computes the position state that will be used for the tab-body animation trigger. */
  _computePositionAnimationState(dir = this._getLayoutDirection()) {
    if (this._positionIndex < 0) {
      this._position = dir == "ltr" ? "left" : "right";
    } else if (this._positionIndex > 0) {
      this._position = dir == "ltr" ? "right" : "left";
    } else {
      this._position = "center";
    }
  }
  /**
   * Computes the position state based on the specified origin position. This is used if the
   * tab is becoming visible immediately after creation.
   */
  _computePositionFromOrigin(origin) {
    const dir = this._getLayoutDirection();
    if (dir == "ltr" && origin <= 0 || dir == "rtl" && origin > 0) {
      return "left-origin-center";
    }
    return "right-origin-center";
  }
};
_MatTabBody.\u0275fac = function MatTabBody_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatTabBody)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_MatTabBody.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatTabBody,
  selectors: [["mat-tab-body"]],
  viewQuery: function MatTabBody_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(CdkPortalOutlet, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._portalHost = _t.first);
    }
  },
  hostAttrs: [1, "mat-mdc-tab-body"],
  inputs: {
    _content: [0, "content", "_content"],
    origin: "origin",
    animationDuration: "animationDuration",
    preserveContent: "preserveContent",
    position: "position"
  },
  outputs: {
    _onCentering: "_onCentering",
    _beforeCentering: "_beforeCentering",
    _afterLeavingCenter: "_afterLeavingCenter",
    _onCentered: "_onCentered"
  },
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  decls: 3,
  vars: 6,
  consts: [["content", ""], ["cdkScrollable", "", 1, "mat-mdc-tab-body-content"], ["matTabBodyHost", ""]],
  template: function MatTabBody_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275listener("@translateTab.start", function MatTabBody_Template_div_animation_translateTab_start_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._onTranslateTabStarted($event));
      })("@translateTab.done", function MatTabBody_Template_div_animation_translateTab_done_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._translateTabComplete.next($event));
      });
      \u0275\u0275template(2, MatTabBody_ng_template_2_Template, 0, 0, "ng-template", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("@translateTab", \u0275\u0275pureFunction2(3, _c7, ctx._position, \u0275\u0275pureFunction1(1, _c6, ctx.animationDuration)));
    }
  },
  dependencies: [MatTabBodyPortal, CdkScrollable],
  styles: ['.mat-mdc-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-mdc-tab-body.mat-mdc-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active{overflow-y:hidden}.mat-mdc-tab-body-content{height:100%;overflow:auto}.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content{overflow:hidden}.mat-mdc-tab-body-content[style*="visibility: hidden"]{display:none}'],
  encapsulation: 2,
  data: {
    animation: [matTabsAnimations.translateTab]
  }
});
var MatTabBody = _MatTabBody;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabBody, [{
    type: Component,
    args: [{
      selector: "mat-tab-body",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      animations: [matTabsAnimations.translateTab],
      host: {
        "class": "mat-mdc-tab-body"
      },
      standalone: true,
      imports: [MatTabBodyPortal, CdkScrollable],
      template: '<div class="mat-mdc-tab-body-content" #content\n     [@translateTab]="{\n        value: _position,\n        params: {animationDuration: animationDuration}\n     }"\n     (@translateTab.start)="_onTranslateTabStarted($event)"\n     (@translateTab.done)="_translateTabComplete.next($event)"\n     cdkScrollable>\n  <ng-template matTabBodyHost></ng-template>\n</div>\n',
      styles: ['.mat-mdc-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-mdc-tab-body.mat-mdc-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active{overflow-y:hidden}.mat-mdc-tab-body-content{height:100%;overflow:auto}.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content{overflow:hidden}.mat-mdc-tab-body-content[style*="visibility: hidden"]{display:none}']
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ChangeDetectorRef
  }], {
    _onCentering: [{
      type: Output
    }],
    _beforeCentering: [{
      type: Output
    }],
    _afterLeavingCenter: [{
      type: Output
    }],
    _onCentered: [{
      type: Output
    }],
    _portalHost: [{
      type: ViewChild,
      args: [CdkPortalOutlet]
    }],
    _content: [{
      type: Input,
      args: ["content"]
    }],
    origin: [{
      type: Input
    }],
    animationDuration: [{
      type: Input
    }],
    preserveContent: [{
      type: Input
    }],
    position: [{
      type: Input
    }]
  });
})();
var nextId = 0;
var ENABLE_BACKGROUND_INPUT = true;
var _MatTabGroup = class _MatTabGroup {
  /** Whether the ink bar should fit its width to the size of the tab label content. */
  get fitInkBarToContent() {
    return this._fitInkBarToContent;
  }
  set fitInkBarToContent(value) {
    this._fitInkBarToContent = value;
    this._changeDetectorRef.markForCheck();
  }
  /** The index of the active tab. */
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(value) {
    this._indexToSelect = isNaN(value) ? null : value;
  }
  /** Duration for the tab animation. Will be normalized to milliseconds if no units are set. */
  get animationDuration() {
    return this._animationDuration;
  }
  set animationDuration(value) {
    const stringValue = value + "";
    this._animationDuration = /^\d+$/.test(stringValue) ? value + "ms" : stringValue;
  }
  /**
   * `tabindex` to be set on the inner element that wraps the tab content. Can be used for improved
   * accessibility when the tab does not have focusable elements or if it has scrollable content.
   * The `tabindex` will be removed automatically for inactive tabs.
   * Read more at https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html
   */
  get contentTabIndex() {
    return this._contentTabIndex;
  }
  set contentTabIndex(value) {
    this._contentTabIndex = isNaN(value) ? null : value;
  }
  /**
   * Theme color of the background of the tab group. This API is supported in M2 themes only, it
   * has no effect in M3 themes.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.io/guide/theming#using-component-color-variants.
   *
   * @deprecated The background color should be customized through Sass theming APIs.
   * @breaking-change 20.0.0 Remove this input
   */
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(value) {
    if (!ENABLE_BACKGROUND_INPUT) {
      throw new Error(`mat-tab-group background color must be set through the Sass theming API`);
    }
    const classList = this._elementRef.nativeElement.classList;
    classList.remove("mat-tabs-with-background", `mat-background-${this.backgroundColor}`);
    if (value) {
      classList.add("mat-tabs-with-background", `mat-background-${value}`);
    }
    this._backgroundColor = value;
  }
  constructor(_elementRef, _changeDetectorRef, defaultConfig, _animationMode) {
    this._elementRef = _elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._animationMode = _animationMode;
    this._tabs = new QueryList();
    this._indexToSelect = 0;
    this._lastFocusedTabIndex = null;
    this._tabBodyWrapperHeight = 0;
    this._tabsSubscription = Subscription.EMPTY;
    this._tabLabelSubscription = Subscription.EMPTY;
    this._fitInkBarToContent = false;
    this.stretchTabs = true;
    this.dynamicHeight = false;
    this._selectedIndex = null;
    this.headerPosition = "above";
    this.disablePagination = false;
    this.disableRipple = false;
    this.preserveContent = false;
    this.selectedIndexChange = new EventEmitter();
    this.focusChange = new EventEmitter();
    this.animationDone = new EventEmitter();
    this.selectedTabChange = new EventEmitter(true);
    this._isServer = !inject(Platform).isBrowser;
    this._groupId = nextId++;
    this.animationDuration = defaultConfig && defaultConfig.animationDuration ? defaultConfig.animationDuration : "500ms";
    this.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
    this.dynamicHeight = defaultConfig && defaultConfig.dynamicHeight != null ? defaultConfig.dynamicHeight : false;
    if (defaultConfig?.contentTabIndex != null) {
      this.contentTabIndex = defaultConfig.contentTabIndex;
    }
    this.preserveContent = !!defaultConfig?.preserveContent;
    this.fitInkBarToContent = defaultConfig && defaultConfig.fitInkBarToContent != null ? defaultConfig.fitInkBarToContent : false;
    this.stretchTabs = defaultConfig && defaultConfig.stretchTabs != null ? defaultConfig.stretchTabs : true;
  }
  /**
   * After the content is checked, this component knows what tabs have been defined
   * and what the selected index should be. This is where we can know exactly what position
   * each tab should be in according to the new selected index, and additionally we know how
   * a new selected tab should transition in (from the left or right).
   */
  ngAfterContentChecked() {
    const indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect);
    if (this._selectedIndex != indexToSelect) {
      const isFirstRun = this._selectedIndex == null;
      if (!isFirstRun) {
        this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
        const wrapper = this._tabBodyWrapper.nativeElement;
        wrapper.style.minHeight = wrapper.clientHeight + "px";
      }
      Promise.resolve().then(() => {
        this._tabs.forEach((tab, index) => tab.isActive = index === indexToSelect);
        if (!isFirstRun) {
          this.selectedIndexChange.emit(indexToSelect);
          this._tabBodyWrapper.nativeElement.style.minHeight = "";
        }
      });
    }
    this._tabs.forEach((tab, index) => {
      tab.position = index - indexToSelect;
      if (this._selectedIndex != null && tab.position == 0 && !tab.origin) {
        tab.origin = indexToSelect - this._selectedIndex;
      }
    });
    if (this._selectedIndex !== indexToSelect) {
      this._selectedIndex = indexToSelect;
      this._lastFocusedTabIndex = null;
      this._changeDetectorRef.markForCheck();
    }
  }
  ngAfterContentInit() {
    this._subscribeToAllTabChanges();
    this._subscribeToTabLabels();
    this._tabsSubscription = this._tabs.changes.subscribe(() => {
      const indexToSelect = this._clampTabIndex(this._indexToSelect);
      if (indexToSelect === this._selectedIndex) {
        const tabs = this._tabs.toArray();
        let selectedTab;
        for (let i = 0; i < tabs.length; i++) {
          if (tabs[i].isActive) {
            this._indexToSelect = this._selectedIndex = i;
            this._lastFocusedTabIndex = null;
            selectedTab = tabs[i];
            break;
          }
        }
        if (!selectedTab && tabs[indexToSelect]) {
          Promise.resolve().then(() => {
            tabs[indexToSelect].isActive = true;
            this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
          });
        }
      }
      this._changeDetectorRef.markForCheck();
    });
  }
  /** Listens to changes in all of the tabs. */
  _subscribeToAllTabChanges() {
    this._allTabs.changes.pipe(startWith(this._allTabs)).subscribe((tabs) => {
      this._tabs.reset(tabs.filter((tab) => {
        return tab._closestTabGroup === this || !tab._closestTabGroup;
      }));
      this._tabs.notifyOnChanges();
    });
  }
  ngOnDestroy() {
    this._tabs.destroy();
    this._tabsSubscription.unsubscribe();
    this._tabLabelSubscription.unsubscribe();
  }
  /** Re-aligns the ink bar to the selected tab element. */
  realignInkBar() {
    if (this._tabHeader) {
      this._tabHeader._alignInkBarToSelectedTab();
    }
  }
  /**
   * Recalculates the tab group's pagination dimensions.
   *
   * WARNING: Calling this method can be very costly in terms of performance. It should be called
   * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
   * page.
   */
  updatePagination() {
    if (this._tabHeader) {
      this._tabHeader.updatePagination();
    }
  }
  /**
   * Sets focus to a particular tab.
   * @param index Index of the tab to be focused.
   */
  focusTab(index) {
    const header = this._tabHeader;
    if (header) {
      header.focusIndex = index;
    }
  }
  _focusChanged(index) {
    this._lastFocusedTabIndex = index;
    this.focusChange.emit(this._createChangeEvent(index));
  }
  _createChangeEvent(index) {
    const event = new MatTabChangeEvent();
    event.index = index;
    if (this._tabs && this._tabs.length) {
      event.tab = this._tabs.toArray()[index];
    }
    return event;
  }
  /**
   * Subscribes to changes in the tab labels. This is needed, because the @Input for the label is
   * on the MatTab component, whereas the data binding is inside the MatTabGroup. In order for the
   * binding to be updated, we need to subscribe to changes in it and trigger change detection
   * manually.
   */
  _subscribeToTabLabels() {
    if (this._tabLabelSubscription) {
      this._tabLabelSubscription.unsubscribe();
    }
    this._tabLabelSubscription = merge(...this._tabs.map((tab) => tab._stateChanges)).subscribe(() => this._changeDetectorRef.markForCheck());
  }
  /** Clamps the given index to the bounds of 0 and the tabs length. */
  _clampTabIndex(index) {
    return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
  }
  /** Returns a unique id for each tab label element */
  _getTabLabelId(i) {
    return `mat-tab-label-${this._groupId}-${i}`;
  }
  /** Returns a unique id for each tab content element */
  _getTabContentId(i) {
    return `mat-tab-content-${this._groupId}-${i}`;
  }
  /**
   * Sets the height of the body wrapper to the height of the activating tab if dynamic
   * height property is true.
   */
  _setTabBodyWrapperHeight(tabHeight) {
    if (!this.dynamicHeight || !this._tabBodyWrapperHeight) {
      return;
    }
    const wrapper = this._tabBodyWrapper.nativeElement;
    wrapper.style.height = this._tabBodyWrapperHeight + "px";
    if (this._tabBodyWrapper.nativeElement.offsetHeight) {
      wrapper.style.height = tabHeight + "px";
    }
  }
  /** Removes the height of the tab body wrapper. */
  _removeTabBodyWrapperHeight() {
    const wrapper = this._tabBodyWrapper.nativeElement;
    this._tabBodyWrapperHeight = wrapper.clientHeight;
    wrapper.style.height = "";
    this.animationDone.emit();
  }
  /** Handle click events, setting new selected index if appropriate. */
  _handleClick(tab, tabHeader, index) {
    tabHeader.focusIndex = index;
    if (!tab.disabled) {
      this.selectedIndex = index;
    }
  }
  /** Retrieves the tabindex for the tab. */
  _getTabIndex(index) {
    const targetIndex = this._lastFocusedTabIndex ?? this.selectedIndex;
    return index === targetIndex ? 0 : -1;
  }
  /** Callback for when the focused state of a tab has changed. */
  _tabFocusChanged(focusOrigin, index) {
    if (focusOrigin && focusOrigin !== "mouse" && focusOrigin !== "touch") {
      this._tabHeader.focusIndex = index;
    }
  }
};
_MatTabGroup.\u0275fac = function MatTabGroup_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatTabGroup)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MAT_TABS_CONFIG, 8), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8));
};
_MatTabGroup.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatTabGroup,
  selectors: [["mat-tab-group"]],
  contentQueries: function MatTabGroup_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, MatTab, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allTabs = _t);
    }
  },
  viewQuery: function MatTabGroup_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c8, 5);
      \u0275\u0275viewQuery(_c9, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabBodyWrapper = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabHeader = _t.first);
    }
  },
  hostAttrs: [1, "mat-mdc-tab-group"],
  hostVars: 10,
  hostBindings: function MatTabGroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classMap("mat-" + (ctx.color || "primary"));
      \u0275\u0275styleProp("--mat-tab-animation-duration", ctx.animationDuration);
      \u0275\u0275classProp("mat-mdc-tab-group-dynamic-height", ctx.dynamicHeight)("mat-mdc-tab-group-inverted-header", ctx.headerPosition === "below")("mat-mdc-tab-group-stretch-tabs", ctx.stretchTabs);
    }
  },
  inputs: {
    color: "color",
    fitInkBarToContent: [2, "fitInkBarToContent", "fitInkBarToContent", booleanAttribute],
    stretchTabs: [2, "mat-stretch-tabs", "stretchTabs", booleanAttribute],
    dynamicHeight: [2, "dynamicHeight", "dynamicHeight", booleanAttribute],
    selectedIndex: [2, "selectedIndex", "selectedIndex", numberAttribute],
    headerPosition: "headerPosition",
    animationDuration: "animationDuration",
    contentTabIndex: [2, "contentTabIndex", "contentTabIndex", numberAttribute],
    disablePagination: [2, "disablePagination", "disablePagination", booleanAttribute],
    disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
    preserveContent: [2, "preserveContent", "preserveContent", booleanAttribute],
    backgroundColor: "backgroundColor",
    ariaLabel: [0, "aria-label", "ariaLabel"],
    ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"]
  },
  outputs: {
    selectedIndexChange: "selectedIndexChange",
    focusChange: "focusChange",
    animationDone: "animationDone",
    selectedTabChange: "selectedTabChange"
  },
  exportAs: ["matTabGroup"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: MAT_TAB_GROUP,
    useExisting: _MatTabGroup
  }]), \u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c03,
  decls: 9,
  vars: 8,
  consts: [["tabHeader", ""], ["tabBodyWrapper", ""], ["tabNode", ""], [3, "indexFocused", "selectFocusedIndex", "selectedIndex", "disableRipple", "disablePagination", "aria-label", "aria-labelledby"], ["role", "tab", "matTabLabelWrapper", "", "cdkMonitorElementFocus", "", 1, "mdc-tab", "mat-mdc-tab", "mat-mdc-focus-indicator", 3, "id", "mdc-tab--active", "class", "disabled", "fitInkBarToContent"], [1, "mat-mdc-tab-body-wrapper"], ["role", "tabpanel", 3, "id", "mat-mdc-tab-body-active", "class", "content", "position", "origin", "animationDuration", "preserveContent"], ["role", "tab", "matTabLabelWrapper", "", "cdkMonitorElementFocus", "", 1, "mdc-tab", "mat-mdc-tab", "mat-mdc-focus-indicator", 3, "click", "cdkFocusChange", "id", "disabled", "fitInkBarToContent"], [1, "mdc-tab__ripple"], ["mat-ripple", "", 1, "mat-mdc-tab-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mdc-tab__content"], [1, "mdc-tab__text-label"], [3, "cdkPortalOutlet"], ["role", "tabpanel", 3, "_onCentered", "_onCentering", "id", "content", "position", "origin", "animationDuration", "preserveContent"]],
  template: function MatTabGroup_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "mat-tab-header", 3, 0);
      \u0275\u0275listener("indexFocused", function MatTabGroup_Template_mat_tab_header_indexFocused_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._focusChanged($event));
      })("selectFocusedIndex", function MatTabGroup_Template_mat_tab_header_selectFocusedIndex_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.selectedIndex = $event);
      });
      \u0275\u0275repeaterCreate(2, MatTabGroup_For_3_Template, 8, 17, "div", 4, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, MatTabGroup_Conditional_4_Template, 1, 0);
      \u0275\u0275elementStart(5, "div", 5, 1);
      \u0275\u0275repeaterCreate(7, MatTabGroup_For_8_Template, 1, 13, "mat-tab-body", 6, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("selectedIndex", ctx.selectedIndex || 0)("disableRipple", ctx.disableRipple)("disablePagination", ctx.disablePagination)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx._tabs);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx._isServer ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx._tabs);
    }
  },
  dependencies: [MatTabHeader, MatTabLabelWrapper, CdkMonitorFocus, MatRipple, CdkPortalOutlet, MatTabBody],
  styles: ['.mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mdc-secondary-navigation-tab-container-height);font-family:var(--mat-tab-header-label-text-font, var(--mat-app-title-small-font));font-size:var(--mat-tab-header-label-text-size, var(--mat-app-title-small-size));letter-spacing:var(--mat-tab-header-label-text-tracking, var(--mat-app-title-small-tracking));line-height:var(--mat-tab-header-label-text-line-height, var(--mat-app-title-small-line-height));font-weight:var(--mat-tab-header-label-text-weight, var(--mat-app-title-small-weight))}.mat-mdc-tab.mdc-tab{flex-grow:0}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-color:var(--mdc-tab-indicator-active-indicator-color, var(--mat-app-primary));border-top-width:var(--mdc-tab-indicator-active-indicator-height);border-radius:var(--mdc-tab-indicator-active-indicator-shape)}.mat-mdc-tab:hover .mdc-tab__text-label{color:var(--mat-tab-header-inactive-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab:focus .mdc-tab__text-label{color:var(--mat-tab-header-inactive-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-header-active-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-header-active-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-header-active-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-hover-indicator-color, var(--mat-app-primary))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-header-active-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-focus-indicator-color, var(--mat-app-primary))}.mat-mdc-tab.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-header-disabled-ripple-color)}.mat-mdc-tab .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-inactive-label-text-color, var(--mat-app-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs>.mat-mdc-tab-header .mat-mdc-tab{flex-grow:1}.mat-mdc-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-header-with-background-background-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-focus-indicator::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-focus-indicator::before{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab__ripple::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header{flex-direction:column-reverse}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline{align-self:flex-start}.mat-mdc-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}'],
  encapsulation: 2
});
var MatTabGroup = _MatTabGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabGroup, [{
    type: Component,
    args: [{
      selector: "mat-tab-group",
      exportAs: "matTabGroup",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [{
        provide: MAT_TAB_GROUP,
        useExisting: MatTabGroup
      }],
      host: {
        "class": "mat-mdc-tab-group",
        "[class]": '"mat-" + (color || "primary")',
        "[class.mat-mdc-tab-group-dynamic-height]": "dynamicHeight",
        "[class.mat-mdc-tab-group-inverted-header]": 'headerPosition === "below"',
        "[class.mat-mdc-tab-group-stretch-tabs]": "stretchTabs",
        "[style.--mat-tab-animation-duration]": "animationDuration"
      },
      standalone: true,
      imports: [MatTabHeader, MatTabLabelWrapper, CdkMonitorFocus, MatRipple, CdkPortalOutlet, MatTabBody],
      template: '<mat-tab-header #tabHeader\n                [selectedIndex]="selectedIndex || 0"\n                [disableRipple]="disableRipple"\n                [disablePagination]="disablePagination"\n                [aria-label]="ariaLabel"\n                [aria-labelledby]="ariaLabelledby"\n                (indexFocused)="_focusChanged($event)"\n                (selectFocusedIndex)="selectedIndex = $event">\n\n  @for (tab of _tabs; track tab; let i = $index) {\n    <div class="mdc-tab mat-mdc-tab mat-mdc-focus-indicator"\n        #tabNode\n        role="tab"\n        matTabLabelWrapper\n        cdkMonitorElementFocus\n        [id]="_getTabLabelId(i)"\n        [attr.tabIndex]="_getTabIndex(i)"\n        [attr.aria-posinset]="i + 1"\n        [attr.aria-setsize]="_tabs.length"\n        [attr.aria-controls]="_getTabContentId(i)"\n        [attr.aria-selected]="selectedIndex === i"\n        [attr.aria-label]="tab.ariaLabel || null"\n        [attr.aria-labelledby]="(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null"\n        [class.mdc-tab--active]="selectedIndex === i"\n        [class]="tab.labelClass"\n        [disabled]="tab.disabled"\n        [fitInkBarToContent]="fitInkBarToContent"\n        (click)="_handleClick(tab, tabHeader, i)"\n        (cdkFocusChange)="_tabFocusChanged($event, i)">\n      <span class="mdc-tab__ripple"></span>\n\n      <!-- Needs to be a separate element, because we can\'t put\n          `overflow: hidden` on tab due to the ink bar. -->\n      <div\n        class="mat-mdc-tab-ripple"\n        mat-ripple\n        [matRippleTrigger]="tabNode"\n        [matRippleDisabled]="tab.disabled || disableRipple"></div>\n\n      <span class="mdc-tab__content">\n        <span class="mdc-tab__text-label">\n          <!--\n            If there is a label template, use it, otherwise fall back to the text label.\n            Note that we don\'t have indentation around the text label, because it adds\n            whitespace around the text which breaks some internal tests.\n          -->\n          @if (tab.templateLabel) {\n            <ng-template [cdkPortalOutlet]="tab.templateLabel"></ng-template>\n          } @else {{{tab.textLabel}}}\n        </span>\n      </span>\n    </div>\n  }\n</mat-tab-header>\n\n<!--\n  We need to project the content somewhere to avoid hydration errors. Some observations:\n  1. This is only necessary on the server.\n  2. We get a hydration error if there aren\'t any nodes after the `ng-content`.\n  3. We get a hydration error if `ng-content` is wrapped in another element.\n-->\n@if (_isServer) {\n  <ng-content/>\n}\n\n<div\n  class="mat-mdc-tab-body-wrapper"\n  [class._mat-animation-noopable]="_animationMode === \'NoopAnimations\'"\n  #tabBodyWrapper>\n  @for (tab of _tabs; track tab; let i = $index) {\n    <mat-tab-body role="tabpanel"\n                 [id]="_getTabContentId(i)"\n                 [attr.tabindex]="(contentTabIndex != null && selectedIndex === i) ? contentTabIndex : null"\n                 [attr.aria-labelledby]="_getTabLabelId(i)"\n                 [attr.aria-hidden]="selectedIndex !== i"\n                 [class.mat-mdc-tab-body-active]="selectedIndex === i"\n                 [class]="tab.bodyClass"\n                 [content]="tab.content!"\n                 [position]="tab.position!"\n                 [origin]="tab.origin"\n                 [animationDuration]="animationDuration"\n                 [preserveContent]="preserveContent"\n                 (_onCentered)="_removeTabBodyWrapperHeight()"\n                 (_onCentering)="_setTabBodyWrapperHeight($event)">\n    </mat-tab-body>\n  }\n</div>\n',
      styles: ['.mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mdc-secondary-navigation-tab-container-height);font-family:var(--mat-tab-header-label-text-font, var(--mat-app-title-small-font));font-size:var(--mat-tab-header-label-text-size, var(--mat-app-title-small-size));letter-spacing:var(--mat-tab-header-label-text-tracking, var(--mat-app-title-small-tracking));line-height:var(--mat-tab-header-label-text-line-height, var(--mat-app-title-small-line-height));font-weight:var(--mat-tab-header-label-text-weight, var(--mat-app-title-small-weight))}.mat-mdc-tab.mdc-tab{flex-grow:0}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-color:var(--mdc-tab-indicator-active-indicator-color, var(--mat-app-primary));border-top-width:var(--mdc-tab-indicator-active-indicator-height);border-radius:var(--mdc-tab-indicator-active-indicator-shape)}.mat-mdc-tab:hover .mdc-tab__text-label{color:var(--mat-tab-header-inactive-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab:focus .mdc-tab__text-label{color:var(--mat-tab-header-inactive-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-header-active-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-header-active-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-header-active-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-hover-indicator-color, var(--mat-app-primary))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-header-active-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-focus-indicator-color, var(--mat-app-primary))}.mat-mdc-tab.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-header-disabled-ripple-color)}.mat-mdc-tab .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-inactive-label-text-color, var(--mat-app-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs>.mat-mdc-tab-header .mat-mdc-tab{flex-grow:1}.mat-mdc-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-header-with-background-background-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-focus-indicator::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-focus-indicator::before{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab__ripple::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header{flex-direction:column-reverse}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline{align-self:flex-start}.mat-mdc-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}']
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_TABS_CONFIG]
    }, {
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], {
    _allTabs: [{
      type: ContentChildren,
      args: [MatTab, {
        descendants: true
      }]
    }],
    _tabBodyWrapper: [{
      type: ViewChild,
      args: ["tabBodyWrapper"]
    }],
    _tabHeader: [{
      type: ViewChild,
      args: ["tabHeader"]
    }],
    color: [{
      type: Input
    }],
    fitInkBarToContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stretchTabs: [{
      type: Input,
      args: [{
        alias: "mat-stretch-tabs",
        transform: booleanAttribute
      }]
    }],
    dynamicHeight: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectedIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    headerPosition: [{
      type: Input
    }],
    animationDuration: [{
      type: Input
    }],
    contentTabIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    disablePagination: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    preserveContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    backgroundColor: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    selectedIndexChange: [{
      type: Output
    }],
    focusChange: [{
      type: Output
    }],
    animationDone: [{
      type: Output
    }],
    selectedTabChange: [{
      type: Output
    }]
  });
})();
var MatTabChangeEvent = class {
};
var nextUniqueId = 0;
var _MatTabNav = class _MatTabNav extends MatPaginatedTabHeader {
  /** Whether the ink bar should fit its width to the size of the tab label content. */
  get fitInkBarToContent() {
    return this._fitInkBarToContent.value;
  }
  set fitInkBarToContent(value) {
    this._fitInkBarToContent.next(value);
    this._changeDetectorRef.markForCheck();
  }
  get animationDuration() {
    return this._animationDuration;
  }
  set animationDuration(value) {
    const stringValue = value + "";
    this._animationDuration = /^\d+$/.test(stringValue) ? value + "ms" : stringValue;
  }
  /**
   * Theme color of the background of the tab nav. This API is supported in M2 themes only, it
   * has no effect in M3 themes.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.io/guide/theming#using-component-color-variants.
   */
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(value) {
    const classList = this._elementRef.nativeElement.classList;
    classList.remove("mat-tabs-with-background", `mat-background-${this.backgroundColor}`);
    if (value) {
      classList.add("mat-tabs-with-background", `mat-background-${value}`);
    }
    this._backgroundColor = value;
  }
  constructor(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode, defaultConfig) {
    super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
    this._fitInkBarToContent = new BehaviorSubject(false);
    this.stretchTabs = true;
    this.disableRipple = false;
    this.color = "primary";
    this.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
    this.fitInkBarToContent = defaultConfig && defaultConfig.fitInkBarToContent != null ? defaultConfig.fitInkBarToContent : false;
    this.stretchTabs = defaultConfig && defaultConfig.stretchTabs != null ? defaultConfig.stretchTabs : true;
  }
  _itemSelected() {
  }
  ngAfterContentInit() {
    this._inkBar = new MatInkBar(this._items);
    this._items.changes.pipe(startWith(null), takeUntil(this._destroyed)).subscribe(() => {
      this.updateActiveLink();
    });
    super.ngAfterContentInit();
  }
  ngAfterViewInit() {
    if (!this.tabPanel && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new Error("A mat-tab-nav-panel must be specified via [tabPanel].");
    }
    super.ngAfterViewInit();
  }
  /** Notifies the component that the active link has been changed. */
  updateActiveLink() {
    if (!this._items) {
      return;
    }
    const items = this._items.toArray();
    for (let i = 0; i < items.length; i++) {
      if (items[i].active) {
        this.selectedIndex = i;
        this._changeDetectorRef.markForCheck();
        if (this.tabPanel) {
          this.tabPanel._activeTabId = items[i].id;
        }
        return;
      }
    }
    this.selectedIndex = -1;
    this._inkBar.hide();
  }
  _getRole() {
    return this.tabPanel ? "tablist" : this._elementRef.nativeElement.getAttribute("role");
  }
};
_MatTabNav.\u0275fac = function MatTabNav_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatTabNav)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ViewportRuler), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8), \u0275\u0275directiveInject(MAT_TABS_CONFIG, 8));
};
_MatTabNav.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatTabNav,
  selectors: [["", "mat-tab-nav-bar", ""]],
  contentQueries: function MatTabNav_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, MatTabLink, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._items = _t);
    }
  },
  viewQuery: function MatTabNav_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c12, 7);
      \u0275\u0275viewQuery(_c2, 7);
      \u0275\u0275viewQuery(_c3, 7);
      \u0275\u0275viewQuery(_c4, 5);
      \u0275\u0275viewQuery(_c5, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabListContainer = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabList = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabListInner = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._nextPaginator = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._previousPaginator = _t.first);
    }
  },
  hostAttrs: [1, "mat-mdc-tab-nav-bar", "mat-mdc-tab-header"],
  hostVars: 17,
  hostBindings: function MatTabNav_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("role", ctx._getRole());
      \u0275\u0275styleProp("--mat-tab-animation-duration", ctx.animationDuration);
      \u0275\u0275classProp("mat-mdc-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-mdc-tab-header-rtl", ctx._getLayoutDirection() == "rtl")("mat-mdc-tab-nav-bar-stretch-tabs", ctx.stretchTabs)("mat-primary", ctx.color !== "warn" && ctx.color !== "accent")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    }
  },
  inputs: {
    fitInkBarToContent: [2, "fitInkBarToContent", "fitInkBarToContent", booleanAttribute],
    stretchTabs: [2, "mat-stretch-tabs", "stretchTabs", booleanAttribute],
    animationDuration: "animationDuration",
    backgroundColor: "backgroundColor",
    disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
    color: "color",
    tabPanel: "tabPanel"
  },
  exportAs: ["matTabNavBar", "matTabNav"],
  standalone: true,
  features: [\u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
  attrs: _c10,
  ngContentSelectors: _c03,
  decls: 13,
  vars: 6,
  consts: [["previousPaginator", ""], ["tabListContainer", ""], ["tabList", ""], ["tabListInner", ""], ["nextPaginator", ""], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-before", 3, "click", "mousedown", "touchend", "matRippleDisabled"], [1, "mat-mdc-tab-header-pagination-chevron"], [1, "mat-mdc-tab-link-container", 3, "keydown"], [1, "mat-mdc-tab-list", 3, "cdkObserveContent"], [1, "mat-mdc-tab-links"], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-after", 3, "mousedown", "click", "touchend", "matRippleDisabled"]],
  template: function MatTabNav_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 5, 0);
      \u0275\u0275listener("click", function MatTabNav_Template_div_click_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._handlePaginatorClick("before"));
      })("mousedown", function MatTabNav_Template_div_mousedown_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._handlePaginatorPress("before", $event));
      })("touchend", function MatTabNav_Template_div_touchend_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._stopInterval());
      });
      \u0275\u0275element(2, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 7, 1);
      \u0275\u0275listener("keydown", function MatTabNav_Template_div_keydown_3_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._handleKeydown($event));
      });
      \u0275\u0275elementStart(5, "div", 8, 2);
      \u0275\u0275listener("cdkObserveContent", function MatTabNav_Template_div_cdkObserveContent_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._onContentChanges());
      });
      \u0275\u0275elementStart(7, "div", 9, 3);
      \u0275\u0275projection(9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 10, 4);
      \u0275\u0275listener("mousedown", function MatTabNav_Template_div_mousedown_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._handlePaginatorPress("after", $event));
      })("click", function MatTabNav_Template_div_click_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._handlePaginatorClick("after"));
      })("touchend", function MatTabNav_Template_div_touchend_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._stopInterval());
      });
      \u0275\u0275element(12, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollBefore);
      \u0275\u0275property("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);
      \u0275\u0275advance(10);
      \u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollAfter);
      \u0275\u0275property("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
    }
  },
  dependencies: [MatRipple, CdkObserveContent],
  styles: [".mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-header-pagination-icon-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-links{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-links,.mat-mdc-tab-links.cdk-drop-list{min-height:var(--mdc-secondary-navigation-tab-container-height)}.mat-mdc-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-header-divider-height);border-bottom-color:var(--mat-tab-header-divider-color, var(--mat-app-surface-variant))}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-header-with-background-background-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-focus-indicator::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-focus-indicator::before{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mdc-tab__ripple::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-header-with-background-foreground-color)}"],
  encapsulation: 2
});
var MatTabNav = _MatTabNav;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabNav, [{
    type: Component,
    args: [{
      selector: "[mat-tab-nav-bar]",
      exportAs: "matTabNavBar, matTabNav",
      host: {
        "[attr.role]": "_getRole()",
        "class": "mat-mdc-tab-nav-bar mat-mdc-tab-header",
        "[class.mat-mdc-tab-header-pagination-controls-enabled]": "_showPaginationControls",
        "[class.mat-mdc-tab-header-rtl]": "_getLayoutDirection() == 'rtl'",
        "[class.mat-mdc-tab-nav-bar-stretch-tabs]": "stretchTabs",
        "[class.mat-primary]": 'color !== "warn" && color !== "accent"',
        "[class.mat-accent]": 'color === "accent"',
        "[class.mat-warn]": 'color === "warn"',
        "[class._mat-animation-noopable]": '_animationMode === "NoopAnimations"',
        "[style.--mat-tab-animation-duration]": "animationDuration"
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      standalone: true,
      imports: [MatRipple, CdkObserveContent],
      template: `<!--
 Note that this intentionally uses a \`div\` instead of a \`button\`, because it's not part of
 the regular tabs flow and is only here to support mouse users. It should also not be focusable.
-->
<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before"
     #previousPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollBefore || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollBefore"
     (click)="_handlePaginatorClick('before')"
     (mousedown)="_handlePaginatorPress('before', $event)"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>

<div class="mat-mdc-tab-link-container" #tabListContainer (keydown)="_handleKeydown($event)">
  <div class="mat-mdc-tab-list" #tabList (cdkObserveContent)="_onContentChanges()">
    <div class="mat-mdc-tab-links" #tabListInner>
      <ng-content></ng-content>
    </div>
  </div>
</div>

<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after"
     #nextPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollAfter || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollAfter"
     (mousedown)="_handlePaginatorPress('after', $event)"
     (click)="_handlePaginatorClick('after')"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>
`,
      styles: [".mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-header-pagination-icon-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-links{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-links,.mat-mdc-tab-links.cdk-drop-list{min-height:var(--mdc-secondary-navigation-tab-container-height)}.mat-mdc-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-header-divider-height);border-bottom-color:var(--mat-tab-header-divider-color, var(--mat-app-surface-variant))}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-header-with-background-background-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-focus-indicator::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-focus-indicator::before{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mdc-tab__ripple::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-header-with-background-foreground-color)}"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: ViewportRuler
  }, {
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_TABS_CONFIG]
    }]
  }], {
    fitInkBarToContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stretchTabs: [{
      type: Input,
      args: [{
        alias: "mat-stretch-tabs",
        transform: booleanAttribute
      }]
    }],
    animationDuration: [{
      type: Input
    }],
    _items: [{
      type: ContentChildren,
      args: [forwardRef(() => MatTabLink), {
        descendants: true
      }]
    }],
    backgroundColor: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    tabPanel: [{
      type: Input
    }],
    _tabListContainer: [{
      type: ViewChild,
      args: ["tabListContainer", {
        static: true
      }]
    }],
    _tabList: [{
      type: ViewChild,
      args: ["tabList", {
        static: true
      }]
    }],
    _tabListInner: [{
      type: ViewChild,
      args: ["tabListInner", {
        static: true
      }]
    }],
    _nextPaginator: [{
      type: ViewChild,
      args: ["nextPaginator"]
    }],
    _previousPaginator: [{
      type: ViewChild,
      args: ["previousPaginator"]
    }]
  });
})();
var _MatTabLink = class _MatTabLink extends InkBarItem {
  /** Whether the link is active. */
  get active() {
    return this._isActive;
  }
  set active(value) {
    if (value !== this._isActive) {
      this._isActive = value;
      this._tabNavBar.updateActiveLink();
    }
  }
  /**
   * Whether ripples are disabled on interaction.
   * @docs-private
   */
  get rippleDisabled() {
    return this.disabled || this.disableRipple || this._tabNavBar.disableRipple || !!this.rippleConfig.disabled;
  }
  constructor(_tabNavBar, elementRef, globalRippleOptions, tabIndex, _focusMonitor, animationMode) {
    super();
    this._tabNavBar = _tabNavBar;
    this.elementRef = elementRef;
    this._focusMonitor = _focusMonitor;
    this._destroyed = new Subject();
    this._isActive = false;
    this.disabled = false;
    this.disableRipple = false;
    this.tabIndex = 0;
    this.id = `mat-tab-link-${nextUniqueId++}`;
    this.rippleConfig = globalRippleOptions || {};
    this.tabIndex = parseInt(tabIndex) || 0;
    if (animationMode === "NoopAnimations") {
      this.rippleConfig.animation = {
        enterDuration: 0,
        exitDuration: 0
      };
    }
    _tabNavBar._fitInkBarToContent.pipe(takeUntil(this._destroyed)).subscribe((fitInkBarToContent) => {
      this.fitInkBarToContent = fitInkBarToContent;
    });
  }
  /** Focuses the tab link. */
  focus() {
    this.elementRef.nativeElement.focus();
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this.elementRef);
  }
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
    super.ngOnDestroy();
    this._focusMonitor.stopMonitoring(this.elementRef);
  }
  _handleFocus() {
    this._tabNavBar.focusIndex = this._tabNavBar._items.toArray().indexOf(this);
  }
  _handleKeydown(event) {
    if (event.keyCode === SPACE || event.keyCode === ENTER) {
      if (this.disabled) {
        event.preventDefault();
      } else if (this._tabNavBar.tabPanel) {
        if (event.keyCode === SPACE) {
          event.preventDefault();
        }
        this.elementRef.nativeElement.click();
      }
    }
  }
  _getAriaControls() {
    return this._tabNavBar.tabPanel ? this._tabNavBar.tabPanel?.id : this.elementRef.nativeElement.getAttribute("aria-controls");
  }
  _getAriaSelected() {
    if (this._tabNavBar.tabPanel) {
      return this.active ? "true" : "false";
    } else {
      return this.elementRef.nativeElement.getAttribute("aria-selected");
    }
  }
  _getAriaCurrent() {
    return this.active && !this._tabNavBar.tabPanel ? "page" : null;
  }
  _getRole() {
    return this._tabNavBar.tabPanel ? "tab" : this.elementRef.nativeElement.getAttribute("role");
  }
  _getTabIndex() {
    if (this._tabNavBar.tabPanel) {
      return this._isActive && !this.disabled ? 0 : -1;
    } else {
      return this.disabled ? -1 : this.tabIndex;
    }
  }
};
_MatTabLink.\u0275fac = function MatTabLink_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatTabLink)(\u0275\u0275directiveInject(MatTabNav), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(MAT_RIPPLE_GLOBAL_OPTIONS, 8), \u0275\u0275injectAttribute("tabindex"), \u0275\u0275directiveInject(FocusMonitor), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8));
};
_MatTabLink.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatTabLink,
  selectors: [["", "mat-tab-link", ""], ["", "matTabLink", ""]],
  hostAttrs: [1, "mdc-tab", "mat-mdc-tab-link", "mat-mdc-focus-indicator"],
  hostVars: 11,
  hostBindings: function MatTabLink_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("focus", function MatTabLink_focus_HostBindingHandler() {
        return ctx._handleFocus();
      })("keydown", function MatTabLink_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      });
    }
    if (rf & 2) {
      \u0275\u0275attribute("aria-controls", ctx._getAriaControls())("aria-current", ctx._getAriaCurrent())("aria-disabled", ctx.disabled)("aria-selected", ctx._getAriaSelected())("id", ctx.id)("tabIndex", ctx._getTabIndex())("role", ctx._getRole());
      \u0275\u0275classProp("mat-mdc-tab-disabled", ctx.disabled)("mdc-tab--active", ctx.active);
    }
  },
  inputs: {
    active: [2, "active", "active", booleanAttribute],
    disabled: [2, "disabled", "disabled", booleanAttribute],
    disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
    tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
    id: "id"
  },
  exportAs: ["matTabLink"],
  standalone: true,
  features: [\u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
  attrs: _c11,
  ngContentSelectors: _c03,
  decls: 5,
  vars: 2,
  consts: [[1, "mdc-tab__ripple"], ["mat-ripple", "", 1, "mat-mdc-tab-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mdc-tab__content"], [1, "mdc-tab__text-label"]],
  template: function MatTabLink_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275element(0, "span", 0)(1, "div", 1);
      \u0275\u0275elementStart(2, "span", 2)(3, "span", 3);
      \u0275\u0275projection(4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("matRippleTrigger", ctx.elementRef.nativeElement)("matRippleDisabled", ctx.rippleDisabled);
    }
  },
  dependencies: [MatRipple],
  styles: ['.mat-mdc-tab-link{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mdc-secondary-navigation-tab-container-height);font-family:var(--mat-tab-header-label-text-font, var(--mat-app-title-small-font));font-size:var(--mat-tab-header-label-text-size, var(--mat-app-title-small-size));letter-spacing:var(--mat-tab-header-label-text-tracking, var(--mat-app-title-small-tracking));line-height:var(--mat-tab-header-label-text-line-height, var(--mat-app-title-small-line-height));font-weight:var(--mat-tab-header-label-text-weight, var(--mat-app-title-small-weight))}.mat-mdc-tab-link.mdc-tab{flex-grow:0}.mat-mdc-tab-link .mdc-tab-indicator__content--underline{border-color:var(--mdc-tab-indicator-active-indicator-color, var(--mat-app-primary));border-top-width:var(--mdc-tab-indicator-active-indicator-height);border-radius:var(--mdc-tab-indicator-active-indicator-shape)}.mat-mdc-tab-link:hover .mdc-tab__text-label{color:var(--mat-tab-header-inactive-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link:focus .mdc-tab__text-label{color:var(--mat-tab-header-inactive-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-header-active-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-header-active-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-header-active-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-hover-indicator-color, var(--mat-app-primary))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-header-active-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-focus-indicator-color, var(--mat-app-primary))}.mat-mdc-tab-link.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-header-disabled-ripple-color)}.mat-mdc-tab-link .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-header-inactive-label-text-color, var(--mat-app-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab-link .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab-link:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab-link .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link{flex-grow:1}.mat-mdc-tab-link::before{margin:5px}@media(max-width: 599px){.mat-mdc-tab-link{min-width:72px}}'],
  encapsulation: 2,
  changeDetection: 0
});
var MatTabLink = _MatTabLink;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabLink, [{
    type: Component,
    args: [{
      selector: "[mat-tab-link], [matTabLink]",
      exportAs: "matTabLink",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "class": "mdc-tab mat-mdc-tab-link mat-mdc-focus-indicator",
        "[attr.aria-controls]": "_getAriaControls()",
        "[attr.aria-current]": "_getAriaCurrent()",
        "[attr.aria-disabled]": "disabled",
        "[attr.aria-selected]": "_getAriaSelected()",
        "[attr.id]": "id",
        "[attr.tabIndex]": "_getTabIndex()",
        "[attr.role]": "_getRole()",
        "[class.mat-mdc-tab-disabled]": "disabled",
        "[class.mdc-tab--active]": "active",
        "(focus)": "_handleFocus()",
        "(keydown)": "_handleKeydown($event)"
      },
      standalone: true,
      imports: [MatRipple],
      template: '<span class="mdc-tab__ripple"></span>\n\n<div\n  class="mat-mdc-tab-ripple"\n  mat-ripple\n  [matRippleTrigger]="elementRef.nativeElement"\n  [matRippleDisabled]="rippleDisabled"></div>\n\n<span class="mdc-tab__content">\n  <span class="mdc-tab__text-label">\n    <ng-content></ng-content>\n  </span>\n</span>\n\n',
      styles: ['.mat-mdc-tab-link{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mdc-secondary-navigation-tab-container-height);font-family:var(--mat-tab-header-label-text-font, var(--mat-app-title-small-font));font-size:var(--mat-tab-header-label-text-size, var(--mat-app-title-small-size));letter-spacing:var(--mat-tab-header-label-text-tracking, var(--mat-app-title-small-tracking));line-height:var(--mat-tab-header-label-text-line-height, var(--mat-app-title-small-line-height));font-weight:var(--mat-tab-header-label-text-weight, var(--mat-app-title-small-weight))}.mat-mdc-tab-link.mdc-tab{flex-grow:0}.mat-mdc-tab-link .mdc-tab-indicator__content--underline{border-color:var(--mdc-tab-indicator-active-indicator-color, var(--mat-app-primary));border-top-width:var(--mdc-tab-indicator-active-indicator-height);border-radius:var(--mdc-tab-indicator-active-indicator-shape)}.mat-mdc-tab-link:hover .mdc-tab__text-label{color:var(--mat-tab-header-inactive-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link:focus .mdc-tab__text-label{color:var(--mat-tab-header-inactive-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-header-active-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-header-active-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-header-active-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-hover-indicator-color, var(--mat-app-primary))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-header-active-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-focus-indicator-color, var(--mat-app-primary))}.mat-mdc-tab-link.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-header-disabled-ripple-color)}.mat-mdc-tab-link .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-header-inactive-label-text-color, var(--mat-app-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab-link .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab-link:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab-link .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link{flex-grow:1}.mat-mdc-tab-link::before{margin:5px}@media(max-width: 599px){.mat-mdc-tab-link{min-width:72px}}']
    }]
  }], () => [{
    type: MatTabNav
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_RIPPLE_GLOBAL_OPTIONS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }, {
    type: FocusMonitor
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], {
    active: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }],
    id: [{
      type: Input
    }]
  });
})();
var _MatTabNavPanel = class _MatTabNavPanel {
  constructor() {
    this.id = `mat-tab-nav-panel-${nextUniqueId++}`;
  }
};
_MatTabNavPanel.\u0275fac = function MatTabNavPanel_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatTabNavPanel)();
};
_MatTabNavPanel.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatTabNavPanel,
  selectors: [["mat-tab-nav-panel"]],
  hostAttrs: ["role", "tabpanel", 1, "mat-mdc-tab-nav-panel"],
  hostVars: 2,
  hostBindings: function MatTabNavPanel_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("aria-labelledby", ctx._activeTabId)("id", ctx.id);
    }
  },
  inputs: {
    id: "id"
  },
  exportAs: ["matTabNavPanel"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  ngContentSelectors: _c03,
  decls: 1,
  vars: 0,
  template: function MatTabNavPanel_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var MatTabNavPanel = _MatTabNavPanel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabNavPanel, [{
    type: Component,
    args: [{
      selector: "mat-tab-nav-panel",
      exportAs: "matTabNavPanel",
      template: "<ng-content></ng-content>",
      host: {
        "[attr.aria-labelledby]": "_activeTabId",
        "[attr.id]": "id",
        "class": "mat-mdc-tab-nav-panel",
        "role": "tabpanel"
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true
    }]
  }], null, {
    id: [{
      type: Input
    }]
  });
})();
var _MatTabsModule = class _MatTabsModule {
};
_MatTabsModule.\u0275fac = function MatTabsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatTabsModule)();
};
_MatTabsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatTabsModule
});
_MatTabsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [MatCommonModule, MatCommonModule]
});
var MatTabsModule = _MatTabsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabsModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatTabContent, MatTabLabel, MatTab, MatTabGroup, MatTabNav, MatTabNavPanel, MatTabLink],
      exports: [MatCommonModule, MatTabContent, MatTabLabel, MatTab, MatTabGroup, MatTabNav, MatTabNavPanel, MatTabLink]
    }]
  }], null, null);
})();

// libs/catering/src/lib/catering-item-modal.component.ts
var _c04 = () => ({ standalone: true });
function CateringItemModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 8)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function CateringItemModalComponent_form_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "label", 21);
    \u0275\u0275text(2, " Name");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 22);
    \u0275\u0275element(7, "input", 23);
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9, "Name is required");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.name.invalid && ctx_r1.form.controls.name.touched);
  }
}
function CateringItemModalComponent_form_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "label", 24);
    \u0275\u0275text(2, " Category");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 22);
    \u0275\u0275element(7, "input", 25);
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9, "Category is required");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const auto_r3 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.category.invalid && ctx_r1.form.controls.category.touched);
    \u0275\u0275advance(6);
    \u0275\u0275property("matAutocomplete", auto_r3);
  }
}
function CateringItemModalComponent_form_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "label", 26);
    \u0275\u0275text(2, " Caterer");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 22);
    \u0275\u0275element(7, "input", 27);
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9, "Caterer is required");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const caterer_auto_r4 = \u0275\u0275reference(12);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.caterer.invalid && ctx_r1.form.controls.caterer.touched);
    \u0275\u0275advance(6);
    \u0275\u0275property("matAutocomplete", caterer_auto_r4);
  }
}
function CateringItemModalComponent_form_4_div_6_mat_chip_row_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 33);
    \u0275\u0275listener("removed", function CateringItemModalComponent_form_4_div_6_mat_chip_row_6_Template_mat_chip_row_removed_0_listener() {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeTag(item_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 34)(3, "app-icon");
    \u0275\u0275text(4, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r7, " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Remove " + item_r7);
  }
}
function CateringItemModalComponent_form_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "label", 29);
    \u0275\u0275text(2, " Tags: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 22)(4, "mat-chip-grid", 30, 3);
    \u0275\u0275template(6, CateringItemModalComponent_form_4_div_6_mat_chip_row_6_Template, 5, 2, "mat-chip-row", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 32);
    \u0275\u0275listener("matChipInputTokenEnd", function CateringItemModalComponent_form_4_div_6_Template_input_matChipInputTokenEnd_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addTag($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const chipList_r8 = \u0275\u0275reference(5);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.tags.invalid && ctx_r1.form.controls.tags.touched);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.tag_list);
    \u0275\u0275advance();
    \u0275\u0275property("matChipInputFor", chipList_r8)("matChipInputSeparatorKeyCodes", ctx_r1.separators)("matChipInputAddOnBlur", true);
  }
}
function CateringItemModalComponent_form_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "label", 35);
    \u0275\u0275text(2, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 22);
    \u0275\u0275element(4, "textarea", 36);
    \u0275\u0275elementEnd()();
  }
}
function CateringItemModalComponent_form_4_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "label", 21);
    \u0275\u0275text(2, " Unit Price");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 22);
    \u0275\u0275element(7, "input", 37);
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9, "Unit Price is required");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.unit_price.invalid && ctx_r1.form.controls.unit_price.touched);
  }
}
function CateringItemModalComponent_form_4_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "label", 38);
    \u0275\u0275text(2, "Images:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "image-list-field", 39);
    \u0275\u0275elementEnd();
  }
}
function CateringItemModalComponent_form_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 9)(1, "div", 10);
    \u0275\u0275template(2, CateringItemModalComponent_form_4_div_2_Template, 10, 2, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275template(4, CateringItemModalComponent_form_4_div_4_Template, 10, 3, "div", 11)(5, CateringItemModalComponent_form_4_div_5_Template, 10, 3, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, CateringItemModalComponent_form_4_div_6_Template, 8, 6, "div", 12)(7, CateringItemModalComponent_form_4_div_7_Template, 5, 0, "div", 12)(8, CateringItemModalComponent_form_4_div_8_Template, 10, 2, "div", 12);
    \u0275\u0275elementStart(9, "div", 13)(10, "label", 14);
    \u0275\u0275text(11, "Accept Points?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-checkbox", 15);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 16)(15, "mat-checkbox", 17);
    \u0275\u0275listener("ngModelChange", function CateringItemModalComponent_form_4_Template_mat_checkbox_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r1.addTag({ value: "Gluten Free" }) : ctx_r1.removeTag("Gluten Free"));
    });
    \u0275\u0275text(16, " Gluten Free (GF) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-checkbox", 17);
    \u0275\u0275listener("ngModelChange", function CateringItemModalComponent_form_4_Template_mat_checkbox_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r1.addTag({ value: "Vegan" }) : ctx_r1.removeTag("Vegan"));
    });
    \u0275\u0275text(18, " Vegan (VG) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-checkbox", 17);
    \u0275\u0275listener("ngModelChange", function CateringItemModalComponent_form_4_Template_mat_checkbox_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r1.addTag({ value: "Vegetarian" }) : ctx_r1.removeTag("Vegetarian"));
    });
    \u0275\u0275text(20, " Vegetarian (V) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-checkbox", 17);
    \u0275\u0275listener("ngModelChange", function CateringItemModalComponent_form_4_Template_mat_checkbox_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r1.addTag({ value: "Contains Dairy" }) : ctx_r1.removeTag("Contains Dairy"));
    });
    \u0275\u0275text(22, " Contains Dairy (D) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-checkbox", 17);
    \u0275\u0275listener("ngModelChange", function CateringItemModalComponent_form_4_Template_mat_checkbox_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r1.addTag({ value: "Contains Nuts" }) : ctx_r1.removeTag("Contains Nuts"));
    });
    \u0275\u0275text(24, " Contains Nuts (N) ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 13)(26, "label", 18);
    \u0275\u0275text(27, "Discount Cap");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "a-counter", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, CateringItemModalComponent_form_4_div_29_Template, 4, 0, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.form.controls.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.form.controls.category);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.controls.caterer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.controls.tags);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.controls.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.controls.unit_price);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((tmp_11_0 = ctx_r1.form.get("accept_points")) == null ? null : tmp_11_0.value) ? "No" : "Yes");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.hasTag("Gluten Free"))("ngModelOptions", \u0275\u0275pureFunction0(23, _c04));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.hasTag("Vegan"))("ngModelOptions", \u0275\u0275pureFunction0(24, _c04));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.hasTag("Vegetarian"))("ngModelOptions", \u0275\u0275pureFunction0(25, _c04));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.hasTag("Contains Dairy"))("ngModelOptions", \u0275\u0275pureFunction0(26, _c04));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.hasTag("Contains Nuts"))("ngModelOptions", \u0275\u0275pureFunction0(27, _c04));
    \u0275\u0275advance(5);
    \u0275\u0275property("min", 0)("max", 100)("step", 5)("render_fn", ctx_r1.renderPercent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.controls.images);
  }
}
function CateringItemModalComponent_footer_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 40)(1, "button", 41);
    \u0275\u0275listener("click", function CateringItemModalComponent_footer_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveChanges());
    });
    \u0275\u0275text(2, " Save ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.form.dirty);
  }
}
function CateringItemModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "mat-spinner", 43);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Saving catering item...");
    \u0275\u0275elementEnd()();
  }
}
function CateringItemModalComponent_mat_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r10 = ctx.$implicit;
    \u0275\u0275property("value", option_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r10, " ");
  }
}
function CateringItemModalComponent_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r11 = ctx.$implicit;
    \u0275\u0275property("value", option_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r11, " ");
  }
}
var _CateringItemModalComponent = class _CateringItemModalComponent {
  /** Current item details */
  get item() {
    return this._data.item || new CateringItem();
  }
  /** List of available categories */
  get categories() {
    return this._data.categories || [];
  }
  /** List of available caterers */
  get caterers() {
    return this._data.caterers || [];
  }
  get tag_list() {
    return this.form.controls.tags.value;
  }
  renderPercent(value = 0) {
    return `${value}%`;
  }
  hasTag(tag) {
    return this.tag_list.includes(tag);
  }
  constructor(_data) {
    this._data = _data;
    this.event = new EventEmitter();
    this.form = new FormGroup({
      name: new FormControl(this.item.name || "", [Validators.required]),
      description: new FormControl(this.item.description || ""),
      category: new FormControl(this.item.category || "", [
        Validators.required
      ]),
      caterer: new FormControl(this.item.caterer || "", [
        Validators.required
      ]),
      unit_price: new FormControl(this.item.unit_price, [
        Validators.required
      ]),
      tags: new FormControl(this.item.tags || []),
      accept_points: new FormControl(this.item.accept_points || false),
      discount_cap: new FormControl(this.item.discount_cap || 0),
      images: new FormControl(this.item.images || [])
    });
    this.loading = false;
    this.separators = [ENTER, COMMA, SPACE];
  }
  /**
   * Add a tag to the list of tags for the item
   * @param event Input event
   */
  addTag(event) {
    if (!this.form || !this.form.controls.tags)
      return;
    this.form.controls.tags.markAsDirty();
    const input = event.input;
    const value = event.value;
    const tag_list = this.tag_list;
    if ((value || "").trim()) {
      tag_list.push(value);
      this.form.controls.tags.setValue(tag_list);
    }
    if (input)
      input.value = "";
  }
  /**
   * Remove tag from the list
   * @param existing_tag Tag to remove
   */
  removeTag(existing_tag) {
    if (!this.form || !this.form.controls.tags)
      return;
    const tag_list = this.tag_list;
    this.form.controls.tags.markAsDirty();
    const index = tag_list.indexOf(existing_tag);
    if (index >= 0) {
      tag_list.splice(index, 1);
      this.form.controls.tags.setValue(tag_list);
    }
  }
  saveChanges() {
    this.loading = true;
    this.event.emit({
      reason: "done",
      metadata: {
        item: new CateringItem(__spreadValues(__spreadProps(__spreadValues({}, this.item), {
          id: this.item.id || `item-${randomInt(99999999)}`
        }), this.form.value))
      }
    });
  }
};
_CateringItemModalComponent.\u0275fac = function CateringItemModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringItemModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA));
};
_CateringItemModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringItemModalComponent, selectors: [["catering-item-modal"]], outputs: { event: "event" }, decls: 14, vars: 7, consts: () => {
  let i18n_0;
  if (false) {
    const MSG_EXTERNAL_zoneTagsPlaceholder$$LIBS_CATERING_SRC_LIB_CATERING_ITEM_MODAL_COMPONENT_TS_0 = goog.getMsg("Item tags e.g. Gluten Free, Vegan etc.");
    i18n_0 = MSG_EXTERNAL_zoneTagsPlaceholder$$LIBS_CATERING_SRC_LIB_CATERING_ITEM_MODAL_COMPONENT_TS_0;
  } else {
    i18n_0 = $localize`:@@zoneTagsPlaceholder␟c133beffffe3288bbdbf8572a32910c33ce14991␟2194594490376201833:Item tags e.g. Gluten Free, Vegan etc.`;
  }
  return [["load_state", ""], ["auto", "matAutocomplete"], ["caterer_auto", "matAutocomplete"], ["chipList", ""], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 overflow-auto max-h-[65vh]", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["class", "flex p-2 items-center justify-center border-t border-solid border-base-200", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4", "overflow-auto", "max-h-[65vh]", 3, "formGroup"], [1, "flex", "items-center", "space-x-2", "w-full"], ["class", "flex flex-col flex-1", 4, "ngIf"], ["class", "flex flex-col", 4, "ngIf"], [1, "flex", "items-center"], [1, "flex-none", "w-28", "min-w-0"], ["formControlName", "accept_points"], ["list", "", 1, "flex", "items-center", "flex-wrap", "max-w-lg"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "flex-1", "w-24", "min-w-0"], ["formControlName", "discount_cap", 1, "border", "border-base-200", "rounded", 3, "min", "max", "step", "render_fn"], [1, "flex", "flex-col", "flex-1"], ["for", "title"], ["appearance", "outline"], ["matInput", "", "name", "name", "placeholder", "Item name", "formControlName", "name"], ["for", "category"], ["matInput", "", "name", "category", "placeholder", "Category", "formControlName", "category", 3, "matAutocomplete"], ["for", "caterer"], ["matInput", "", "name", "caterer", "placeholder", "Caterer", "formControlName", "caterer", 3, "matAutocomplete"], [1, "flex", "flex-col"], ["for", "tags"], ["aria-label", "Item Tags"], [3, "removed", 4, "ngFor", "ngForOf"], ["name", "tags", "placeholder", i18n_0, 3, "matChipInputTokenEnd", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed"], ["matChipRemove", ""], ["for", "description"], ["matInput", "", "name", "description", "placeholder", "Item Description", "formControlName", "description"], ["matInput", "", "name", "unit-price", "type", "number", "placeholder", "Unit Price", "formControlName", "unit_price"], ["for", "images"], ["name", "images", "formControlName", "images"], [1, "flex", "p-2", "items-center", "justify-center", "border-t", "border-solid", "border-base-200"], ["btn", "", "matRipple", "", 3, "click", "disabled"], [1, "flex", "flex-col", "items-center", "p-8", "space-y-2", "w-64"], ["diameter", "32"], [3, "value"]];
}, template: function CateringItemModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CateringItemModalComponent_button_3_Template, 3, 0, "button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CateringItemModalComponent_form_4_Template, 30, 28, "form", 5)(5, CateringItemModalComponent_footer_5_Template, 3, 1, "footer", 6)(6, CateringItemModalComponent_ng_template_6_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(8, "mat-autocomplete", null, 1);
    \u0275\u0275template(10, CateringItemModalComponent_mat_option_10_Template, 2, 2, "mat-option", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-autocomplete", null, 2);
    \u0275\u0275template(13, CateringItemModalComponent_mat_option_13_Template, 2, 2, "mat-option", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const load_state_r12 = \u0275\u0275reference(7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.item.id ? "Edit" : "Add", " Item");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.form && !ctx.loading)("ngIfElse", load_state_r12);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx.categories);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx.caterers);
  }
}, dependencies: [NgForOf, NgIf, MatAutocomplete, MatOption, MatAutocompleteTrigger, MatDialogClose, MatCheckbox, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName, IconComponent, MatFormField, MatError, MatRipple, MatInput, MatProgressSpinner, MatChipGrid, MatChipInput, MatChipRemove, MatChipRow, CounterComponent, ImageListFieldComponent], styles: ["\n\n[list][_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  margin: 0.5rem;\n}\n/*# sourceMappingURL=catering-item-modal.component.css.map */"] });
var CateringItemModalComponent = _CateringItemModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringItemModalComponent, { className: "CateringItemModalComponent", filePath: "libs/catering/src/lib/catering-item-modal.component.ts", lineNumber: 283 });
})();

// libs/catering/src/lib/catering-option-modal.component.ts
function CateringItemOptionModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 6)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function CateringItemOptionModalComponent_form_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 10);
    \u0275\u0275text(2, " Name");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 11);
    \u0275\u0275element(7, "input", 12);
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9, "Name is required");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.controls.name.invalid && ctx_r0.form.controls.name.touched);
  }
}
function CateringItemOptionModalComponent_form_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 13);
    \u0275\u0275text(2, " Type");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 11);
    \u0275\u0275element(7, "input", 14);
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9, "Type is required");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    const auto_r2 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.controls.group.invalid && ctx_r0.form.controls.group.touched);
    \u0275\u0275advance(6);
    \u0275\u0275property("matAutocomplete", auto_r2);
  }
}
function CateringItemOptionModalComponent_form_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 10);
    \u0275\u0275text(2, "Unit Price:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 11);
    \u0275\u0275element(4, "input", 15);
    \u0275\u0275elementEnd()();
  }
}
function CateringItemOptionModalComponent_form_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "mat-checkbox", 16);
    \u0275\u0275text(2, " Can select multiple of type ");
    \u0275\u0275elementEnd()();
  }
}
function CateringItemOptionModalComponent_form_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 7);
    \u0275\u0275template(1, CateringItemOptionModalComponent_form_4_div_1_Template, 10, 2, "div", 8)(2, CateringItemOptionModalComponent_form_4_div_2_Template, 10, 3, "div", 8)(3, CateringItemOptionModalComponent_form_4_div_3_Template, 5, 0, "div", 8)(4, CateringItemOptionModalComponent_form_4_div_4_Template, 3, 0, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.form.controls.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.form.controls.group);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.form.controls.unit_price);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.form.controls.multiple);
  }
}
function CateringItemOptionModalComponent_footer_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 17)(1, "button", 18);
    \u0275\u0275listener("click", function CateringItemOptionModalComponent_footer_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveChanges());
    });
    \u0275\u0275text(2, " Save ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.form.dirty);
  }
}
function CateringItemOptionModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "mat-spinner", 20);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Saving catering item option...");
    \u0275\u0275elementEnd()();
  }
}
function CateringItemOptionModalComponent_mat_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    \u0275\u0275property("value", option_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r4, " ");
  }
}
var _CateringItemOptionModalComponent = class _CateringItemOptionModalComponent {
  /** Current item details */
  get option() {
    return this._data.option;
  }
  /** List of available categories */
  get types() {
    return this._data.types || [];
  }
  constructor(_data) {
    this._data = _data;
    this.event = new EventEmitter();
    this.form = new FormGroup({
      name: new FormControl(this.option.name || "", [Validators.required]),
      group: new FormControl(this.option.group || "", [Validators.required]),
      unit_price: new FormControl(this.option.unit_price),
      multiple: new FormControl(!!this.option.multiple, [])
    });
    this.loading = false;
  }
  saveChanges() {
    this.loading = true;
    const new_option = __spreadValues(__spreadProps(__spreadValues({}, this.option), {
      id: this.option.id || `option-${randomInt(99999999)}`
    }), this.form.value);
    this.event.emit({
      reason: "done",
      metadata: {
        item: new CateringItem(__spreadProps(__spreadValues({}, this._data.parent), {
          options: this._data.parent.options.filter((i) => i.id !== new_option.id).concat([new_option])
        }))
      }
    });
  }
};
_CateringItemOptionModalComponent.\u0275fac = function CateringItemOptionModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringItemOptionModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA));
};
_CateringItemOptionModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringItemOptionModalComponent, selectors: [["catering-option-modal"]], outputs: { event: "event" }, decls: 11, vars: 6, consts: [["load_state", ""], ["auto", "matAutocomplete"], ["icon", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 overflow-auto max-h-[65vh]", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["class", "flex p-2 items-center justify-center border-t border-solid border-base-200", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], ["icon", "", "mat-dialog-close", ""], [1, "p-4", "overflow-auto", "max-h-[65vh]", 3, "formGroup"], ["class", "flex flex-col", 4, "ngIf"], [1, "flex", "flex-col"], ["for", "title"], ["appearance", "outline"], ["matInput", "", "name", "name", "placeholder", "Item name", "formControlName", "name"], ["for", "group"], ["matInput", "", "name", "group", "placeholder", "Type of option e.g. Number of sugars", "formControlName", "group", 3, "matAutocomplete"], ["matInput", "", "name", "unit-price", "type", "number", "placeholder", "Unit Price", "formControlName", "unit_price"], ["name", "multiple", "formControlName", "multiple"], [1, "flex", "p-2", "items-center", "justify-center", "border-t", "border-solid", "border-base-200"], ["btn", "", "matRipple", "", 3, "click", "disabled"], ["loading", "", 1, "flex", "flex-col", "items-center", "p-8", "space-y-2", "w-64"], ["diameter", "32"], [3, "value"]], template: function CateringItemOptionModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CateringItemOptionModalComponent_button_3_Template, 3, 0, "button", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CateringItemOptionModalComponent_form_4_Template, 5, 5, "form", 3)(5, CateringItemOptionModalComponent_footer_5_Template, 3, 1, "footer", 4)(6, CateringItemOptionModalComponent_ng_template_6_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(8, "mat-autocomplete", null, 1);
    \u0275\u0275template(10, CateringItemOptionModalComponent_mat_option_10_Template, 2, 2, "mat-option", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const load_state_r5 = \u0275\u0275reference(7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.option.id ? "Edit" : "Add", " Item Option");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.form && !ctx.loading)("ngIfElse", load_state_r5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx.types);
  }
}, dependencies: [NgForOf, NgIf, MatAutocomplete, MatOption, MatAutocompleteTrigger, MatDialogClose, MatCheckbox, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, IconComponent, MatFormField, MatError, MatRipple, MatInput, MatProgressSpinner] });
var CateringItemOptionModalComponent = _CateringItemOptionModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringItemOptionModalComponent, { className: "CateringItemOptionModalComponent", filePath: "libs/catering/src/lib/catering-option-modal.component.ts", lineNumber: 116 });
})();

// libs/catering/src/lib/utilities.ts
var RULE_REQUESTS = {};
function getCateringRulesForZone(zone_id, fresh = false) {
  if (!zone_id)
    return of([]);
  if (!RULE_REQUESTS[zone_id] || fresh)
    RULE_REQUESTS[zone_id] = showMetadata(zone_id, "catering_config").pipe(map((_) => _.details instanceof Array ? _.details : []), catchError((e2) => of([])));
  return RULE_REQUESTS[zone_id];
}
function cateringItemAvailable(item, rules, event) {
  let is_available = true;
  for (const rule of rules) {
    if (item.category === rule.name || item.tags.includes(rule.name) || event.resources.find((_) => _.zones.includes(rule.name)) || event.space?.zones.includes(rule.name) || rule.name === "*") {
      let matches = 0;
      for (const condition of rule.rules) {
        const date = new Date(event.date);
        switch (condition[0]) {
          case "is_before":
            matches += isBefore(Date.now(), subHours(date, condition[1])) ? 1 : 0;
            break;
          case "within_hours":
            matches += isAfter(Date.now(), subHours(date, condition[1])) ? 1 : 0;
            break;
          case "after_hour":
            matches += isAfter(date, setHours(date, condition[1])) ? 1 : 0;
            break;
          case "before_hour":
            matches += isBefore(date, setHours(date, condition[1])) ? 1 : 0;
            break;
          case "min_length":
            matches += event.duration >= stringToMinutes(condition[1]) ? 1 : 0;
            break;
          case "max_length":
            matches += event.duration <= stringToMinutes(condition[1]) ? 1 : 0;
            break;
          case "visitor_type":
            matches += event.ext("visitor_type") === condition[1] ? 1 : 0;
            break;
          default:
            matches += 1;
        }
      }
      is_available = matches >= rule.rules.length;
    }
  }
  return is_available;
}

// libs/catering/src/lib/catering-order-modal.component.ts
var _c05 = () => ({});
function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1, " Options Available ");
    \u0275\u0275elementEnd();
  }
}
function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_a_counter_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a-counter", 19);
    \u0275\u0275listener("ngModelChange", function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_a_counter_8_Template_a_counter_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const item_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.updateItemQuantity(item_r2, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngModel", item_r2.quantity);
  }
}
function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "button", 22)(3, "app-icon");
    \u0275\u0275text(4, "remove");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 24);
    \u0275\u0275listener("click", function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_div_9_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const item_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.addItem(item_r2));
    });
    \u0275\u0275elementStart(8, "app-icon");
    \u0275\u0275text(9, "add");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", item_r2.quantity ? "Items with options must be removed from order confirmation page" : "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r2.quantity, " ");
  }
}
function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "div", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_div_4_Template, 2, 0, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_a_counter_8_Template, 1, 1, "a-counter", 16)(9, CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_div_9_Template, 10, 3, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.options.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 5, item_r2.unit_price / 100, ctx_r2.code), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !item_r2.options.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.options.length);
  }
}
function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-tab", 9)(1, "div", 10);
    \u0275\u0275template(2, CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_Template, 10, 8, "div", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", cat_r5);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", (ctx_r2.menu_items || \u0275\u0275pureFunction0(2, _c05))[cat_r5]);
  }
}
function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_Template, 3, 3, "mat-tab", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.menu_items || \u0275\u0275pureFunction0(1, _c05))[cat_r5].length);
  }
}
function CateringOrderModalComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-tab-group");
    \u0275\u0275template(2, CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_Template, 2, 2, "ng-container", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.categories);
  }
}
function CateringOrderModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, CateringOrderModalComponent_div_0_ng_container_1_Template, 3, 1, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const order_details_r6 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.show_order_details)("ngIfElse", order_details_r6);
  }
}
function CateringOrderModalComponent_footer_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 26);
    \u0275\u0275text(2, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 27);
    \u0275\u0275listener("click", function CateringOrderModalComponent_footer_1_ng_container_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.show_order_details = true);
    });
    \u0275\u0275text(4, " Confirm ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r2.order.item_count)("matBadge", ctx_r2.order.item_count)("matBadgeHidden", !ctx_r2.order.item_count);
  }
}
function CateringOrderModalComponent_footer_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function CateringOrderModalComponent_footer_1_ng_template_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.show_order_details = false);
    });
    \u0275\u0275text(1, " Back ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 29);
    \u0275\u0275listener("click", function CateringOrderModalComponent_footer_1_ng_template_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.saveOrder());
    });
    \u0275\u0275text(3, " Save Order ");
    \u0275\u0275elementEnd();
  }
}
function CateringOrderModalComponent_footer_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "footer", 25);
    \u0275\u0275template(1, CateringOrderModalComponent_footer_1_ng_container_1_Template, 5, 3, "ng-container", 6)(2, CateringOrderModalComponent_footer_1_ng_template_2_Template, 4, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_actions_r9 = \u0275\u0275reference(3);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.show_order_details)("ngIfElse", order_actions_r9);
  }
}
function CateringOrderModalComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "mat-spinner", 31);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.loading);
  }
}
function CateringOrderModalComponent_ng_template_4_div_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matTooltip", ctx_r2.optionsFor(item_r11));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", item_r11.options.length, " option", item_r11.options.length === 1 ? "" : "s", " selected ");
  }
}
function CateringOrderModalComponent_ng_template_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "div", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CateringOrderModalComponent_ng_template_4_div_4_div_4_Template, 2, 3, "div", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a-counter", 34);
    \u0275\u0275listener("ngModelChange", function CateringOrderModalComponent_ng_template_4_div_4_Template_a_counter_ngModelChange_8_listener($event) {
      const item_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateItemQuantity(item_r11, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r11.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r11.options.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 4, item_r11.total_cost / 100, ctx_r2.code), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", item_r11.quantity);
  }
}
function CateringOrderModalComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 32)(1, "h3");
    \u0275\u0275text(2, "Confirm Order");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275template(4, CateringOrderModalComponent_ng_template_4_div_4_Template, 9, 7, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.order.items);
  }
}
var _CateringOrderModalComponent = class _CateringOrderModalComponent extends AsyncHandler {
  get code() {
    return this._org.currency_code;
  }
  constructor(_org, _data) {
    super();
    this._org = _org;
    this._data = _data;
    this.event = new EventEmitter();
    this.loading = "";
    this.menu_items = {};
    this.categories = [];
    this.loading = "Loading menu...";
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.loading = "Loading menu...";
      this.order = new CateringOrder(this._data.order);
      this.rules = yield this._data.getCateringConfig(this.order.event?.space?.level?.parent_id);
      this._data.menu.subscribe((list) => {
        this.loading = "Loading menu...";
        const categories = unique(list.map((item) => item.category));
        const map2 = {};
        for (const cat of categories) {
          map2[cat] = list.filter((item) => {
            return item.category === cat && cateringItemAvailable(item, this.rules, this.order.event);
          });
        }
        this.categories = categories;
        this.menu_items = map2;
        this.updateMenuQuantities();
        this.timeout("clear_loading", () => this.loading = "", 1e3);
      });
    });
  }
  addItem(item, choose_options = true) {
    const old_item = this.order.items.find((itm) => itm.id === item.id && itm.options.length === itm.options.reduce((c, o) => c + (item.options.find((opt) => o.id === opt.id) ? 1 : 0), 0));
    if (choose_options && item.options?.length) {
      this._data.selectOptions(item.options).then((options) => {
        const new_item = new CateringItem(__spreadProps(__spreadValues({}, item), { options }));
        this.addItem(new_item, false);
      });
    } else if (old_item) {
      this.order = new CateringOrder(__spreadProps(__spreadValues({}, this.order), {
        items: this.order.items.filter((i) => !(i.id === item.id && i.options_string === item.options_string)).concat([
          new CateringItem(__spreadProps(__spreadValues({}, item), {
            quantity: old_item.quantity + 1
          }))
        ])
      }));
    } else {
      this.order = new CateringOrder(__spreadProps(__spreadValues({}, this.order), {
        items: this.order.items.concat([
          new CateringItem(__spreadProps(__spreadValues({}, item), { quantity: 1 }))
        ])
      }));
    }
    this.updateMenuQuantities();
  }
  removeItem(item) {
    this.order = new CateringOrder(__spreadProps(__spreadValues({}, this.order), {
      items: this.order.items.filter((_) => _.id !== item.id && _.options_string === item.options_string)
    }));
    this.updateMenuQuantities();
  }
  updateItemQuantity(item, amount) {
    const old_item = this.order.items.find((itm) => itm.id === item.id && itm.options_string === item.options_string);
    let items = [...this.order.items];
    if (old_item) {
      items = this.order.items.filter((i) => !(i.id === item.id && i.options_string === item.options_string)).concat([new CateringItem(__spreadProps(__spreadValues({}, item), { quantity: amount }))]);
    } else {
      items = this.order.items.concat([
        new CateringItem(__spreadProps(__spreadValues({}, item), { quantity: amount }))
      ]);
    }
    items.sort((a, b) => a.name.localeCompare(b.name));
    this.order = new CateringOrder(__spreadProps(__spreadValues({}, this.order), {
      items
    }));
    this.updateMenuQuantities();
  }
  updateMenuQuantities() {
    for (const cat in this.menu_items) {
      for (const item of this.menu_items[cat]) {
        item.quantity = this.order.items.reduce((c, i) => i.id === item.id ? c + i.quantity : c, 0);
      }
    }
  }
  optionsFor(item) {
    return item.options.map((i) => i.name).join("\n");
  }
  saveOrder() {
    this.event.emit({
      reason: "done",
      metadata: { order: this.order }
    });
  }
  confirmOrder() {
    this.show_order_details = true;
  }
};
_CateringOrderModalComponent.\u0275fac = function CateringOrderModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringOrderModalComponent)(\u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
};
_CateringOrderModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringOrderModalComponent, selectors: [["app-catering-order-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 3, consts: [["load_state", ""], ["order_details", ""], ["order_actions", ""], ["class", "main min-w-[20rem]", 4, "ngIf", "ngIfElse"], ["class", "flex items-center justify-center space-x-2 p-2 border-t border-base-200", 4, "ngIf"], [1, "main", "min-w-[20rem]"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], [3, "label", 4, "ngIf"], [3, "label"], [1, "list"], ["item", "", "class", "flex items-center p-2 border-b border-base-200", 4, "ngFor", "ngForOf"], ["item", "", 1, "flex", "items-center", "p-2", "border-b", "border-base-200"], [1, "flex-1", "w-1/2"], ["class", "text-xs no-underline", 4, "ngIf"], [1, "bg-primary", "text-xs", "rounded", "px-4", "py-2", "mx-2", "text-white", "font-medium"], ["ngDefaultControl", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "flex items-center", 4, "ngIf"], [1, "text-xs", "no-underline"], ["ngDefaultControl", "", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center"], [3, "matTooltip"], ["icon", "", "matRipple", "", 3, "disabled"], [1, "count", "h-12", "w-12", "flex", "items-center", "justify-center"], ["icon", "", "matRipple", "", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2", "p-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse"], ["confirm", "", "btn", "", "matRipple", "", "matBadgeColor", "warn", 3, "click", "disabled", "matBadge", "matBadgeHidden"], ["matRipple", "", 1, "inverse", 3, "click"], ["save", "", "btn", "", "matRipple", "", 3, "click"], [1, "flex", "flex-col", "w-64", "p-8", "items-center", "space-y-2"], ["diameter", "32"], [1, "h-[3.25rem]"], ["class", "text-xs underline", 3, "matTooltip", 4, "ngIf"], [3, "ngModelChange", "ngModel"], [1, "text-xs", "underline", 3, "matTooltip"]], template: function CateringOrderModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CateringOrderModalComponent_div_0_Template, 2, 2, "div", 3)(1, CateringOrderModalComponent_footer_1_Template, 4, 2, "footer", 4)(2, CateringOrderModalComponent_ng_template_2_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, CateringOrderModalComponent_ng_template_4_Template, 5, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const load_state_r12 = \u0275\u0275reference(3);
    \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r12);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
  }
}, dependencies: [NgForOf, NgIf, MatTab, MatTabGroup, MatDialogClose, MatTooltip, DefaultValueAccessor, NgControlStatus, NgModel, IconComponent, MatRipple, MatProgressSpinner, CounterComponent, CurrencyPipe], styles: ["\n\n.list[_ngcontent-%COMP%] {\n  height: 24em;\n  min-width: 32em;\n  max-width: calc(100vw - 1em);\n}\nfooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 12em;\n}\ninput[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding: 1em;\n  border: none;\n  border-radius: 0 !important;\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  outline: none;\n  font-size: 1em;\n}\ninput[_ngcontent-%COMP%]:focus {\n  border: none;\n  border-top: 2px solid var(--s);\n  border-bottom: 2px solid var(--s);\n  box-shadow: none;\n}\ninput.error[_ngcontent-%COMP%]::placeholder {\n  color: rgba(var(--error), 0.45);\n}\n/*# sourceMappingURL=catering-order-modal.component.css.map */"] });
var CateringOrderModalComponent = _CateringOrderModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringOrderModalComponent, { className: "CateringOrderModalComponent", filePath: "libs/catering/src/lib/catering-order-modal.component.ts", lineNumber: 221 });
})();

// libs/catering/src/lib/catering-order-options-modal.component.ts
function CateringOrderOptionsModalComponent_div_7_ng_container_4_mat_radio_button_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", \u0275\u0275pipeBind2(2, 1, opt_r4.unit_price / 100, ctx_r2.code), " ");
  }
}
function CateringOrderOptionsModalComponent_div_7_ng_container_4_mat_radio_button_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-button", 14)(1, "div", 15)(2, "div", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CateringOrderOptionsModalComponent_div_7_ng_container_4_mat_radio_button_5_div_4_Template, 3, 4, "div", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    \u0275\u0275property("value", opt_r4.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", opt_r4.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", opt_r4.unit_price);
  }
}
function CateringOrderOptionsModalComponent_div_7_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-radio-group", 10);
    \u0275\u0275listener("ngModelChange", function CateringOrderOptionsModalComponent_div_7_ng_container_4_Template_mat_radio_group_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const group_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateGroupOption(group_r2, $event));
    });
    \u0275\u0275elementStart(2, "mat-radio-button", 11)(3, "span", 12);
    \u0275\u0275text(4, "None");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, CateringOrderOptionsModalComponent_div_7_ng_container_4_mat_radio_button_5_Template, 5, 3, "mat-radio-button", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const group_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", group_r2 == null ? null : group_r2.options);
  }
}
function CateringOrderOptionsModalComponent_div_7_ng_template_5_mat_checkbox_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", \u0275\u0275pipeBind2(2, 1, opt_r6.unit_price / 100, ctx_r2.code), " ");
  }
}
function CateringOrderOptionsModalComponent_div_7_ng_template_5_mat_checkbox_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 20);
    \u0275\u0275twoWayListener("ngModelChange", function CateringOrderOptionsModalComponent_div_7_ng_template_5_mat_checkbox_0_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const opt_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.option_state[opt_r6.id], $event) || (ctx_r2.option_state[opt_r6.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "div", 15)(2, "div", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CateringOrderOptionsModalComponent_div_7_ng_template_5_mat_checkbox_0_div_4_Template, 3, 4, "div", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.option_state[opt_r6.id]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", opt_r6.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", opt_r6.unit_price);
  }
}
function CateringOrderOptionsModalComponent_div_7_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CateringOrderOptionsModalComponent_div_7_ng_template_5_mat_checkbox_0_Template, 5, 3, "mat-checkbox", 19);
  }
  if (rf & 2) {
    const group_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngForOf", group_r2 == null ? null : group_r2.options);
  }
}
function CateringOrderOptionsModalComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275template(4, CateringOrderOptionsModalComponent_div_7_ng_container_4_Template, 6, 1, "ng-container", 9)(5, CateringOrderOptionsModalComponent_div_7_ng_template_5_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r2 = ctx.$implicit;
    const multi_options_r7 = \u0275\u0275reference(6);
    \u0275\u0275attribute("group", group_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !group_r2.multiple)("ngIfElse", multi_options_r7);
  }
}
var _CateringOrderOptionsModalComponent = class _CateringOrderOptionsModalComponent {
  constructor(_data) {
    this._data = _data;
    this.event = new EventEmitter();
    this.option_state = {};
    this.code = this._data.code;
    const groups = unique(this._data.options.map((i) => i.group || "Other"));
    const group_list = [];
    for (const group of groups) {
      const options = this._data.options.filter((i) => i.group === group);
      group_list.push({
        name: group,
        multiple: !!options.find((i) => i.multiple),
        options
      });
    }
    this.groups = group_list;
  }
  updateGroupOption(group, id) {
    for (const option of group.options) {
      this.option_state[option.id] = option.id === id;
    }
  }
  saveOptions() {
    const options = this._data.options.filter((opt) => this.option_state[opt.id]);
    this.event.emit({ reason: "done", metadata: { options } });
  }
};
_CateringOrderOptionsModalComponent.\u0275fac = function CateringOrderOptionsModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringOrderOptionsModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA));
};
_CateringOrderOptionsModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringOrderOptionsModalComponent, selectors: [["app-catering-options-modal"]], outputs: { event: "event" }, decls: 11, vars: 1, consts: [["multi_options", ""], ["icon", "", "mat-dialog-close", ""], [1, "overflow-auto"], ["class", "pt-1 pb-2 border-b border-base-200", 4, "ngFor", "ngForOf"], [1, "p-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "pt-1", "pb-2", "border-b", "border-base-200"], [1, "font-medium", "p-2", "capitalize"], [1, "flex", "flex-col", "pl-6"], [4, "ngIf", "ngIfElse"], ["aria-label", "Select an option", "ngModel", "", 1, "flex", "flex-col", 3, "ngModelChange"], ["value", "", 1, "my-1", "mx-0"], [1, "font-medium", "p-2"], ["class", "my-1 mx-0", 3, "value", 4, "ngFor", "ngForOf"], [1, "my-1", "mx-0", 3, "value"], [1, "flex", "items-center", "justify-center"], [1, "font-medium", "p-2", "flex-1", "w-1/2"], ["class", "opacity-60 text-xs", 4, "ngIf"], [1, "opacity-60", "text-xs"], [3, "ngModel", "ngModelChange", 4, "ngFor", "ngForOf"], [3, "ngModelChange", "ngModel"]], template: function CateringOrderOptionsModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "h3");
    \u0275\u0275text(2, "Select options");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 1)(4, "app-icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "main", 2);
    \u0275\u0275template(7, CateringOrderOptionsModalComponent_div_7_Template, 7, 4, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "footer", 4)(9, "button", 5);
    \u0275\u0275listener("click", function CateringOrderOptionsModalComponent_Template_button_click_9_listener() {
      return ctx.saveOptions();
    });
    \u0275\u0275text(10, " Save ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx.groups);
  }
}, dependencies: [NgForOf, NgIf, MatDialogClose, MatCheckbox, MatRadioGroup, MatRadioButton, NgControlStatus, NgModel, IconComponent, MatRipple, CurrencyPipe], styles: ["\n\nmain[_ngcontent-%COMP%] {\n  min-height: 24em;\n  width: 24rem;\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=catering-order-options-modal.component.css.map */"] });
var CateringOrderOptionsModalComponent = _CateringOrderOptionsModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringOrderOptionsModalComponent, { className: "CateringOrderOptionsModalComponent", filePath: "libs/catering/src/lib/catering-order-options-modal.component.ts", lineNumber: 100 });
})();

// libs/catering/src/lib/catering-import-menu-modal.component.ts
function CateringImportMenuModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 5)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function CateringImportMenuModalComponent_main_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main")(1, "div", 6)(2, "app-icon", 7);
    \u0275\u0275text(3, "upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Click to select file or Drag and drop files");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 8);
    \u0275\u0275listener("change", function CateringImportMenuModalComponent_main_4_Template_input_change_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleFileEvent($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 9)(8, "button", 10);
    \u0275\u0275listener("click", function CateringImportMenuModalComponent_main_4_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275text(9, " Download Template ");
    \u0275\u0275elementEnd()()();
  }
}
function CateringImportMenuModalComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 11);
    \u0275\u0275element(1, "mat-spinner", 12);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.loading);
  }
}
var _CateringImportMenuModalComponent = class _CateringImportMenuModalComponent {
  constructor() {
    this.event = new EventEmitter();
  }
  /** Upload the image to the cloud */
  handleFileEvent(event) {
    this.loading = "Processing menu data...";
    const element = event.target;
    if (!element?.files)
      return this.loading = "";
    const files = element.files;
    if (!files.length)
      return this.loading = "";
    const file = files[0];
    const fileReader = new FileReader();
    fileReader.addEventListener("loadend", (e2) => {
      const contents = e2.target.result;
      const data = csvToJson(contents);
      this.loading = "";
      this.event.emit({
        reason: "done",
        metadata: data.filter((_) => (_.type || "").toLowerCase() === "item").map((i) => new CateringItem(__spreadProps(__spreadValues({}, i), {
          options: data.filter((_) => (_.type || "").toLowerCase() === "option" && _.tags === i.id).map((_) => ({
            id: _.id,
            name: _.name,
            group: _.category,
            multiple: _.multiple,
            unit_price: _.unit_price
          }))
        })))
      });
    });
    fileReader.readAsText(file);
  }
  downloadTemplate() {
    const template = `ID,Type,Name,Unit Price,Category,Caterer,Description,Tags,Multiple
item-1,item,Coffee,200,Drink,Wake Up Cafe,Wake Up,,
option-1,option,1 Sugar,20,Sugars,,item-1,false`;
    downloadFile("import-menu-template.csv", template);
  }
};
_CateringImportMenuModalComponent.\u0275fac = function CateringImportMenuModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringImportMenuModalComponent)();
};
_CateringImportMenuModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringImportMenuModalComponent, selectors: [["catering-import-menu-modal"]], outputs: { event: "event" }, decls: 7, vars: 3, consts: [["load_state", ""], [1, "h-16", "flex", "items-center", "justify-between", "px-4"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "relative", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "h-[24rem]", "w-[24rem]", "border-4", "border-base-200", "border-dashed", "rounded-xl", "hover:bg-base-200", "m-4", "p-4", "cursor-pointer"], [1, "text-4xl"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], [1, "flex", "items-center", "justify-center", "px-4", "pb-4"], ["matRipple", "", 1, "clear", "underline", "w-48", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8", "h-[24rem]", "w-[24rem]"], ["diameter", "32"]], template: function CateringImportMenuModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 1)(1, "h2", 2);
    \u0275\u0275text(2, "Import Catering Menu");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CateringImportMenuModalComponent_button_3_Template, 3, 0, "button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CateringImportMenuModalComponent_main_4_Template, 10, 0, "main", 4)(5, CateringImportMenuModalComponent_ng_template_5_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const load_state_r3 = \u0275\u0275reference(6);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r3);
  }
}, dependencies: [NgIf, MatDialogClose, IconComponent, MatRipple, MatProgressSpinner] });
var CateringImportMenuModalComponent = _CateringImportMenuModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringImportMenuModalComponent, { className: "CateringImportMenuModalComponent", filePath: "libs/catering/src/lib/catering-import-menu-modal.component.ts", lineNumber: 47 });
})();

// libs/catering/src/lib/catering-orders.service.ts
function checkOrder(order, filters) {
  const s = (filters.search || "").toLowerCase();
  return !!order.items.find((item) => (!filters?.caterer || filters.caterer === "<empty>" && !item.caterer || item.caterer === filters.caterer) && (item.name.toLowerCase().includes(s) || !!item.options.find((option) => option.name.toLowerCase().includes(s))));
}
var _CateringOrdersService = class _CateringOrdersService extends AsyncHandler {
  /** Order filters */
  get filters() {
    return this._filters.getValue();
  }
  /** Order filters */
  set filters(filters) {
    this._filters.next(filters);
  }
  constructor(_settings, _org) {
    super();
    this._settings = _settings;
    this._org = _org;
    this._poll = new BehaviorSubject(0);
    this._loading = new BehaviorSubject(false);
    this._filters = new BehaviorSubject({
      caterer: ""
    });
    this.orders = combineLatest([
      this._filters,
      this._poll
    ]).pipe(debounceTime(300), switchMap(([{ date, zones }]) => {
      this._loading.next(true);
      const start = getUnixTime(startOfDay(date || Date.now()));
      const end = getUnixTime(endOfDay(date || Date.now()));
      if (!zones?.length) {
        zones = this._settings.get("app.use_region") ? [this._org.region.id] : [this._org.building.id];
      }
      return queryEvents({
        zone_ids: (zones || []).join(","),
        period_start: start,
        period_end: end
      }).pipe(catchError(() => of([])), map((events) => flatten(events.map((event) => event.valid_catering.map((o) => new CateringOrder(__spreadProps(__spreadValues({}, o), { event })))))), map((orders) => orders.filter((o) => format(o.deliver_at, "yyyy-MM-dd") === format(start * 1e3, "yyyy-MM-dd"))));
    }), tap(() => this._loading.next(false)), shareReplay(1));
    this.loading = this._loading.asObservable();
    this.order_filters = this._filters.asObservable();
    this.caterers = this.orders.pipe(map((_) => {
      const provider_groups = this._settings.get("app.catering_provider_groups") || {};
      let provider_list = Object.keys(provider_groups);
      const is_admin = currentUser().groups.includes("placeos_admin") || currentUser().groups.includes("placeos_support");
      if (!provider_list.length || is_admin)
        return unique(_.map((i) => i.caterer));
      provider_list = provider_list.filter((caterer) => provider_groups[caterer].find((group) => currentUser().groups.includes(group)));
      if (provider_list.length <= 1 && this._filters.getValue()?.caterer !== provider_list[0]) {
        this._filters.next(__spreadProps(__spreadValues({}, this._filters.getValue()), {
          caterer: provider_list[0]
        }));
      }
      return unique(provider_list);
    }), shareReplay(1));
    this.filtered = this.orders.pipe(map((list) => list.filter((order) => checkOrder(order, this._filters.getValue())).sort((a, b) => a.deliver_at - b.deliver_at)));
    this.subscription("changes", this.orders.subscribe());
  }
  /** Start polling for catering orders */
  startPolling(delay = 15 * 1e3) {
    this.interval("polling", () => this._poll.next((/* @__PURE__ */ new Date()).valueOf()), delay);
  }
  /** Stop polling for new catering orders */
  stopPolling() {
    this.clearInterval("polling");
  }
  /**
   * Update the status of the order
   * @param order Order to update
   * @param status New order status
   */
  updateStatus(order, status) {
    return __async(this, null, function* () {
      order.status = status;
      const updated_order = new CateringOrder(__spreadProps(__spreadValues({}, order), {
        status,
        event: null
      }));
      const catering = [
        ...(order.event.extension_data.catering || []).filter((o) => o.id !== order.id),
        updated_order
      ].map((i) => new CateringOrder(__spreadValues({}, i)));
      const event = new CalendarEvent(__spreadProps(__spreadValues({}, order.event), {
        catering
      }));
      const system_id = event?.resources[0]?.id || event?.system?.id;
      const booking = yield updateEventMetadata(event.id, system_id, event.extension_data).toPromise();
      this.timeout("refresh-list", () => this._poll.next(Date.now()), 1e3);
      order.status = status;
      return booking;
    });
  }
};
_CateringOrdersService.\u0275fac = function CateringOrdersService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringOrdersService)(\u0275\u0275inject(SettingsService), \u0275\u0275inject(OrganisationService));
};
_CateringOrdersService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CateringOrdersService, factory: _CateringOrdersService.\u0275fac, providedIn: "root" });
var CateringOrdersService = _CateringOrdersService;

// libs/catering/src/lib/catering-state.service.ts
var _CateringStateService = class _CateringStateService extends AsyncHandler {
  get is_editable() {
    return !this.zone || this.zone === this._org.building?.id;
  }
  get categories() {
    const menu = this._menu.getValue();
    return unique(menu.map((i) => i.category));
  }
  get caterer_list() {
    const menu = this._menu.getValue();
    return unique(menu.map((i) => i.caterer));
  }
  constructor(_org, _dialog, _settings, _orders) {
    super();
    this._org = _org;
    this._dialog = _dialog;
    this._settings = _settings;
    this._orders = _orders;
    this._updated = new BehaviorSubject(0);
    this._menu = new BehaviorSubject([]);
    this._loading = new BehaviorSubject(false);
    this._currency = new BehaviorSubject("USD");
    this._change = new BehaviorSubject(0);
    this.menu = this._menu.asObservable();
    this.loading = this._loading.asObservable();
    this.currency = this._currency.asObservable();
    this.settings = combineLatest([
      this._org.active_building,
      this._change
    ]).pipe(filter(([_]) => !!_), switchMap(([_]) => showMetadata(_.id, "catering-settings").pipe(catchError((_2) => of({})))), map((_) => _.details || {}), tap((_) => this._settings.post("require_catering_notes", !!_?.require_notes)), shareReplay(1));
    this.charge_codes = this.settings.pipe(map((_) => _.charge_codes || []));
    this.availability = this.settings.pipe(map((_) => _.disabled_rooms || []));
    this.caterers = combineLatest([
      this._menu,
      this._orders.caterers
    ]).pipe(map(([menu_items]) => {
      const provider_groups = this._settings.get("app.catering_provider_groups") || {};
      let provider_list = Object.keys(provider_groups);
      if (!provider_list.length) {
        return unique(menu_items.map((i) => i.caterer));
      }
      provider_list = provider_list.filter((caterer) => provider_groups[caterer].find((group) => currentUser().groups.includes(group)));
      return unique(provider_list);
    }), shareReplay(1));
    this.zone = "";
    this.subscription("building", this._org.active_building.subscribe((bld) => __async(this, null, function* () {
      if (bld) {
        this._loading.next(true);
        this._menu.next([]);
        const menu = (yield this.getCateringForZone(bld.id).catch((_) => [])).map((i) => new CateringItem(i));
        this._currency.next(this._settings.get("app.currency") || bld.currency || "USD");
        this._loading.next(false);
        this.timeout("loaded", () => this._menu.next(menu), 1e3);
      }
    })));
  }
  /**
   * Create/Edit catering order
   * @param order Order to manipulate
   */
  manageCateringOrder(order) {
    return __async(this, null, function* () {
      const ref = this._dialog.open(CateringOrderModalComponent, {
        data: {
          code: this._currency.getValue(),
          order,
          menu: this.menu,
          loading: this.loading,
          getCateringConfig: (_) => this.getCateringConfig(_),
          selectOptions: (_) => this.selectOptions(_)
        }
      });
      const details = yield Promise.race([
        ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
        ref.afterClosed().toPromise()
      ]);
      ref.close();
      return details?.metadata?.order || order;
    });
  }
  addItem() {
    return __async(this, arguments, function* (item = new CateringItem()) {
      const ref = this._dialog.open(CateringItemModalComponent, {
        data: {
          item,
          categories: this.categories,
          caterers: this.caterer_list
        }
      });
      const details = yield Promise.race([
        ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
        ref.afterClosed().toPromise()
      ]);
      if (details?.reason !== "done")
        return;
      const menu = this._menu.getValue();
      const index = menu.findIndex((itm) => itm.id === item.id);
      if (index >= 0) {
        menu.splice(index, 1, details.metadata.item);
      } else {
        menu.push(details.metadata.item);
      }
      this.updateMenu(this._org.building.id, menu).then(() => {
        this._menu.next([...menu]);
        ref.close();
      }, () => ref.componentInstance.loading = false);
    });
  }
  updateItem(item) {
    const menu = this._menu.getValue();
    const index = menu.findIndex((itm) => itm.id === item.id);
    if (index >= 0)
      menu.splice(index, 1, item);
    else
      menu.push(item);
    this.updateMenu(this._org.building.id, menu).then(() => this._menu.next([...menu]));
  }
  addOption(_0) {
    return __async(this, arguments, function* (item, option = {}) {
      const types = unique(item.options.map((i) => i.group));
      const ref = this._dialog.open(CateringItemOptionModalComponent, {
        data: {
          parent: item,
          option,
          types
        }
      });
      const details = yield Promise.race([
        ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
        ref.afterClosed().toPromise()
      ]);
      if (details?.reason !== "done")
        return;
      const menu = this._menu.getValue();
      const index = menu.findIndex((itm) => itm.id === item.id);
      if (index >= 0) {
        menu.splice(index, 1, details.metadata.item);
      } else {
        menu.push(details.metadata.item);
      }
      this.updateMenu(this._org.building.id, menu).then(() => {
        this._menu.next([...menu]);
        ref.close();
      }, () => ref.componentInstance.loading = false);
    });
  }
  selectOptions(options) {
    return __async(this, null, function* () {
      const ref = this._dialog.open(CateringOrderOptionsModalComponent, {
        data: {
          code: this._currency.getValue(),
          options
        }
      });
      const details = yield Promise.race([
        ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
        ref.afterClosed().toPromise()
      ]);
      if (details?.reason !== "done")
        return [];
      ref.close();
      return details.metadata.options;
    });
  }
  deleteItem(item) {
    return __async(this, null, function* () {
      const details = yield openConfirmModal({
        title: "Delete Catering Item",
        content: `Are you sure you wish to remove the catering item ${item.name} from the menu?`,
        icon: {
          type: "icon",
          class: "material-icons",
          content: "delete"
        }
      }, this._dialog);
      if (details.reason !== "done")
        return;
      details.loading("Removing catering item...");
      const menu = this._menu.getValue().filter((itm) => item.id !== itm.id);
      this.updateMenu(this._org.building.id, menu).then(() => {
        this._menu.next([...menu]);
        details.close();
      }, () => details.loading(""));
    });
  }
  deleteOption(item, option) {
    return __async(this, null, function* () {
      const details = yield openConfirmModal({
        title: "Delete Catering Item Option",
        content: `Are you sure you wish to remove the catering option "${option.name}" from "${item.name}"?`,
        icon: {
          type: "icon",
          class: "material-icons",
          content: "delete"
        }
      }, this._dialog);
      if (details.reason !== "done")
        return;
      details.loading("Removing catering item option...");
      const menu = this._menu.getValue();
      menu.splice(menu.findIndex((itm) => itm.id === item.id), 1, new CateringItem(__spreadProps(__spreadValues({}, item), {
        options: item.options.filter((opt) => opt.id !== option.id)
      })));
      this.updateMenu(this._org.building.id, menu).then(() => {
        this._menu.next([...menu]);
        details.close();
      }, () => details.loading(""));
    });
  }
  editConfig() {
    return __async(this, null, function* () {
      const config = yield this.getCateringConfig(this._org.building.id);
      const { require_notes } = yield this.settings.pipe(take(1)).toPromise();
      const menu = this._menu.getValue();
      const types = unique(flatten(menu.map((i) => [i.category, ...i.tags])));
      const ref = this._dialog.open(AttachedResourceConfigModalComponent, {
        data: {
          config,
          types,
          require_notes,
          saveNotes: (b) => this.saveSettings({ require_notes: b })
        }
      });
      const details = yield Promise.race([
        ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
        ref.afterClosed().toPromise()
      ]);
      if (details?.reason !== "done")
        return;
      this.updateConfig(this._org.building.id, details.metadata).then(() => ref.close(), () => ref.componentInstance.loading = false);
    });
  }
  importMenu() {
    return __async(this, null, function* () {
      const ref = this._dialog.open(CateringImportMenuModalComponent);
      const details = yield Promise.race([
        ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
        ref.afterClosed().toPromise()
      ]);
      if (details?.reason !== "done")
        return;
      ref.componentInstance.loading = "Updating menu...";
      const menu = this._menu.getValue();
      const bld = this._org.building;
      const updated_menu = unique(details.metadata.concat(menu), "id");
      yield this.updateMenu(bld.id, updated_menu).catch((_) => {
        notifyError("Error importing catering menu");
        ref.close();
        throw _;
      });
      notifySuccess(`Successfully imported catering menu. ${details.metadata.length} item(s) added.`);
      ref.close();
    });
  }
  updateMenu(zone_id, menu) {
    return updateMetadata(zone_id, {
      id: zone_id,
      name: "catering",
      details: menu,
      description: `Catering menu for ${zone_id}`
    }).toPromise();
  }
  saveSettings(settings) {
    return __async(this, null, function* () {
      const old_settings = yield this.settings.pipe(take(1)).toPromise();
      const result = yield updateMetadata(this._org.building.id, {
        id: this._org.building.id,
        name: "catering-settings",
        details: __spreadValues(__spreadValues({}, old_settings), settings),
        description: `Catering settings for ${this._org.building.id}`
      }).toPromise();
      this._change.next(Date.now());
      return result;
    });
  }
  getCateringForZone(zone_id) {
    return __async(this, null, function* () {
      const menu = (yield showMetadata(zone_id, "catering").toPromise()).details;
      return menu instanceof Array ? menu : [];
    });
  }
  getCateringConfig() {
    return __async(this, arguments, function* (zone_id = this._org.building.id) {
      const rules = (yield showMetadata(zone_id, "catering_config").toPromise()).details;
      return rules instanceof Array ? rules : [];
    });
  }
  updateConfig(zone_id, config) {
    return updateMetadata(zone_id, {
      id: zone_id,
      name: "catering_config",
      details: config,
      description: `Catering menu config for ${zone_id}`
    }).toPromise();
  }
  addItemToOrder(order, new_item) {
    let items = order.items;
    const match = items.find((item) => item.id === new_item.id && new_item.options?.length === item.options?.reduce((c, o) => c + (new_item.options.find((opt) => o.id === opt.id) ? 1 : 0), 0));
    match ? match.quantity += 1 : items = items.concat([
      new CateringItem(__spreadProps(__spreadValues({}, new_item), { quantity: 1 }))
    ]);
    const new_order = new CateringOrder(__spreadProps(__spreadValues({}, order), {
      items,
      event: null
    }));
    return new_order;
  }
};
_CateringStateService.\u0275fac = function CateringStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringStateService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(MatDialog), \u0275\u0275inject(SettingsService), \u0275\u0275inject(CateringOrdersService));
};
_CateringStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CateringStateService, factory: _CateringStateService.\u0275fac, providedIn: "root" });
var CateringStateService = _CateringStateService;

// libs/catering/src/lib/catering-menu.component.ts
var _c06 = (a0) => ({ key: "active", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c13 = () => ({ key: "name", name: "Name" });
var _c22 = () => ({ key: "category", name: "Category" });
var _c32 = (a0) => ({ key: "caterer", name: "Caterer", show: a0 });
var _c42 = (a0) => ({ key: "unit_price", name: "Price", content: a0, size: "6rem" });
var _c52 = (a0) => ({ key: "actions", name: " ", content: a0, size: "6.5rem", sortable: false });
var _c62 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function CateringMenuComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 6);
    \u0275\u0275listener("ngModelChange", function CateringMenuComponent_ng_template_1_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const row_r2 = \u0275\u0275restoreView(_r1).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setEnabled(row_r2, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r2.isEnabled(row_r2));
  }
}
function CateringMenuComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, data_r4 / 100, \u0275\u0275pipeBind1(2, 1, ctx_r2.symbol)), " ");
  }
}
function CateringMenuComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "button", 9)(2, "app-icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 4)(6, "button", 10);
    \u0275\u0275listener("click", function CateringMenuComponent_ng_template_5_Template_button_click_6_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addOption(row_r6));
    });
    \u0275\u0275elementStart(7, "div", 11)(8, "app-icon");
    \u0275\u0275text(9, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11, "Add Option");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "button", 10);
    \u0275\u0275listener("click", function CateringMenuComponent_ng_template_5_Template_button_click_12_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editItem(row_r6));
    });
    \u0275\u0275elementStart(13, "div", 11)(14, "app-icon");
    \u0275\u0275text(15, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div");
    \u0275\u0275text(17, "Edit Item");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "button", 10);
    \u0275\u0275listener("click", function CateringMenuComponent_ng_template_5_Template_button_click_18_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeItem(row_r6));
    });
    \u0275\u0275elementStart(19, "div", 11)(20, "app-icon", 12);
    \u0275\u0275text(21, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div");
    \u0275\u0275text(23, "Remove Item");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "button", 13);
    \u0275\u0275listener("click", function CateringMenuComponent_ng_template_5_Template_button_click_24_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.show_children[row_r6.id] = !ctx_r2.show_children[row_r6.id]);
    });
    \u0275\u0275elementStart(25, "app-icon");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    const menu_r7 = \u0275\u0275reference(5);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-0", !ctx_r2.can_edit);
    \u0275\u0275property("disabled", !ctx_r2.can_edit)("matMenuTriggerFor", menu_r7);
    \u0275\u0275advance(23);
    \u0275\u0275property("disabled", !(row_r6.options == null ? null : row_r6.options.length))("matTooltip", (row_r6.options == null ? null : row_r6.options.length) ? (ctx_r2.show_children[row_r6.id] ? "Hide" : "Show") + " Menu Item Options" : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.show_children[row_r6.id] ? "keyboard_arrow_down" : "chevron_right", " ");
  }
}
function CateringMenuComponent_ng_template_7_div_0_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function CateringMenuComponent_ng_template_7_div_0_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const option_r9 = \u0275\u0275nextContext().$implicit;
      const row_r10 = \u0275\u0275nextContext().row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editOption(row_r10, option_r9));
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
  }
}
function CateringMenuComponent_ng_template_7_div_0_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function CateringMenuComponent_ng_template_7_div_0_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const option_r9 = \u0275\u0275nextContext().$implicit;
      const row_r10 = \u0275\u0275nextContext().row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeOption(row_r10, option_r9));
    });
    \u0275\u0275elementStart(1, "app-icon", 12);
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function CateringMenuComponent_ng_template_7_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementStart(2, "div", 17)(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, CateringMenuComponent_ng_template_7_div_0_button_7_Template, 3, 0, "button", 20)(8, CateringMenuComponent_ng_template_7_div_0_button_8_Template, 3, 0, "button", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(option_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r9.group, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.can_edit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.can_edit);
  }
}
function CateringMenuComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CateringMenuComponent_ng_template_7_div_0_Template, 9, 4, "div", 14);
  }
  if (rf & 2) {
    const row_r10 = ctx.row;
    \u0275\u0275property("ngForOf", row_r10.options);
  }
}
var _CateringMenuComponent = class _CateringMenuComponent {
  get filters() {
    return this._orders.filters;
  }
  get can_edit() {
    return this._catering.is_editable;
  }
  get categories() {
    return this._catering.categories;
  }
  get caterers() {
    return this._catering.caterer_list;
  }
  constructor(_catering, _orders) {
    this._catering = _catering;
    this._orders = _orders;
    this.show_children = {};
    this.menu = combineLatest([
      this._catering.menu,
      this._orders.order_filters
    ]).pipe(map(([menu, filters]) => menu.filter((item) => !filters?.caterer || filters.caterer === "<empty>" && !item.caterer || item.caterer === filters.caterer)));
    this.addOption = (item) => this._catering.addOption(item);
    this.editOption = (item, option) => this._catering.addOption(item, option);
    this.removeOption = (item, option) => this._catering.deleteOption(item, option);
    this.editItem = (item) => this._catering.addItem(item);
    this.removeItem = (item) => this._catering.deleteItem(item);
  }
  isEnabled(item) {
    return !item.hide_for_zones.includes(this._catering.zone);
  }
  setEnabled(item, state2) {
    let list = item.hide_for_zones;
    if (!state2)
      list = unique([...list, this._catering.zone]);
    else
      list = list.filter((_) => _ !== this._catering.zone);
    this._catering.updateItem(new CateringItem(__spreadProps(__spreadValues({}, item), { hide_for_zones: list })));
  }
};
_CateringMenuComponent.\u0275fac = function CateringMenuComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringMenuComponent)(\u0275\u0275directiveInject(CateringStateService), \u0275\u0275directiveInject(CateringOrdersService));
};
_CateringMenuComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringMenuComponent, selectors: [["catering-menu"]], decls: 9, vars: 23, consts: [["active_template", ""], ["price_template", ""], ["actions_template", ""], ["child_template", ""], ["menu", "matMenu"], ["empty_message", "No Items in Menu", 1, "w-full", "min-w-[32rem]", "block", "text-sm", 3, "data", "columns", "filter", "show_children", "child_template", "sortable"], ["matTooltip", "Allow Ordering Item for this zone", "matTooltipPosition", "right", 1, "mx-auto", 3, "ngModelChange", "ngModel"], [1, "px-2", "py-1", "font-mono", "text-xs", "flex", "items-center", "mx-auto", "bg-secondary", "text-secondary-content", "rounded"], [1, "p-2", "flex", "items-center", "mx-auto", "space-x-2"], ["icon", "", "matRipple", "", 3, "disabled", "matMenuTriggerFor"], ["mat-menu-item", "", 1, "flex", "items-center", 3, "click"], [1, "flex", "items-center", "space-x-2", "pr-2"], [1, "text-error"], ["icon", "", "matRipple", "", 3, "click", "disabled", "matTooltip"], ["class", "flex p-2 items-center border-b border-solid border-base-200 relative space-x-2", 4, "ngFor", "ngForOf"], [1, "flex", "p-2", "items-center", "border-b", "border-solid", "border-base-200", "relative", "space-x-2"], [1, "absolute", "inset-y-0", "left-0", "w-2", "bg-black", "opacity-10"], [1, "flex-1", "pl-4", "pr-2"], [1, "text"], [1, "text-xs", "opacity-60"], ["icon", "", "matRipple", "", "matTooltip", "Edit Menu Item Option", 3, "click", 4, "ngIf"], ["icon", "", "matRipple", "", "class", "!mr-1", "matTooltip", "Remove Menu Item Option", 3, "click", 4, "ngIf"], ["icon", "", "matRipple", "", "matTooltip", "Edit Menu Item Option", 3, "click"], ["icon", "", "matRipple", "", "matTooltip", "Remove Menu Item Option", 1, "!mr-1", 3, "click"]], template: function CateringMenuComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "simple-table", 5);
    \u0275\u0275template(1, CateringMenuComponent_ng_template_1_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, CateringMenuComponent_ng_template_3_Template, 4, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(5, CateringMenuComponent_ng_template_5_Template, 27, 7, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(7, CateringMenuComponent_ng_template_7_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const active_template_r12 = \u0275\u0275reference(2);
    const price_template_r13 = \u0275\u0275reference(4);
    const actions_template_r14 = \u0275\u0275reference(6);
    const child_template_r15 = \u0275\u0275reference(8);
    \u0275\u0275property("data", ctx.menu)("columns", \u0275\u0275pureFunction6(16, _c62, \u0275\u0275pureFunction1(6, _c06, active_template_r12), \u0275\u0275pureFunction0(8, _c13), \u0275\u0275pureFunction0(9, _c22), \u0275\u0275pureFunction1(10, _c32, !(ctx.filters == null ? null : ctx.filters.caterer) && ctx.caterers.length > 1), \u0275\u0275pureFunction1(12, _c42, price_template_r13), \u0275\u0275pureFunction1(14, _c52, actions_template_r14)))("filter", ctx.filters == null ? null : ctx.filters.search)("show_children", ctx.show_children)("child_template", child_template_r15)("sortable", true);
  }
}, dependencies: [NgForOf, NgIf, MatMenu, MatMenuItem, MatMenuTrigger, MatCheckbox, MatTooltip, NgControlStatus, NgModel, IconComponent, SimpleTableComponent, MatRipple, AsyncPipe, CurrencyPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 90%;\n  width: 100%;\n}\n/*# sourceMappingURL=catering-menu.component.css.map */"] });
var CateringMenuComponent = _CateringMenuComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringMenuComponent, { className: "CateringMenuComponent", filePath: "libs/catering/src/lib/catering-menu.component.ts", lineNumber: 179 });
})();

// libs/catering/src/lib/catering-order-item.component.ts
var _c07 = ["catering-order-item", ""];
function CateringOrderItemComponent_ng_container_0_ng_container_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r3.name, " ");
  }
}
function CateringOrderItemComponent_ng_container_0_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CateringOrderItemComponent_ng_container_0_ng_container_14_div_1_Template, 2, 1, "div", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", opt_r3);
  }
}
function CateringOrderItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275element(2, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "button", 4);
    \u0275\u0275listener("click", function CateringOrderItemComponent_ng_container_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggle());
    });
    \u0275\u0275elementStart(5, "app-icon");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 8);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 9);
    \u0275\u0275template(14, CateringOrderItemComponent_ng_container_0_ng_container_14_Template, 2, 1, "ng-container", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classProp("bg-success", ctx_r1.active)("text-white", ctx_r1.active)("border-solid", ctx_r1.active);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.active ? "done" : "local_pizza");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.item == null ? null : ctx_r1.item.amount) || (ctx_r1.item == null ? null : ctx_r1.item.quantity) || 1, "\xD7 ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.item == null ? null : ctx_r1.item.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.item.option_list);
  }
}
var ACTIVE_ITEMS = /* @__PURE__ */ new Set();
var _CateringOrderItemComponent = class _CateringOrderItemComponent {
  constructor() {
    this.active = false;
  }
  get item_key() {
    return `${this.order_id}|${this.item?.id}`;
  }
  ngOnInit() {
    this.active = ACTIVE_ITEMS.has(this.item_key);
  }
  toggle() {
    if (ACTIVE_ITEMS.has(this.item_key)) {
      ACTIVE_ITEMS.delete(this.item_key);
      this.active = false;
    } else {
      ACTIVE_ITEMS.add(this.item_key);
      this.active = true;
    }
  }
};
_CateringOrderItemComponent.\u0275fac = function CateringOrderItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringOrderItemComponent)();
};
_CateringOrderItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringOrderItemComponent, selectors: [["", "catering-order-item", ""]], inputs: { order_id: "order_id", item: "item" }, attrs: _c07, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "w-16", "text-right", "h-14", "relative"], ["arm", "", 1, "border-b-2", "border-l-2", "border-base-200", "w-4", "h-16", "absolute", "top-1/2", "left-1/2", "-translate-y-full", "-translate-x-px"], [1, "w-12", "mr-4"], ["action", "", "icon", "", "matRipple", "", 1, "border-2", "border-base-200", "border-dashed", "text-xl", "text-dark-fade", "p-2", 3, "click"], [1, "flex", "flex-1", "items-center", "border-b", "border-base-200", "border-solid", "py-4", "space-x-4"], [1, ""], [1, "p-1", "rounded-full", "bg-base-300", "w-10", "h-10", "flex", "items-center", "justify-center", "font-mono", "text-sm"], [1, "flex-1"], [1, "flex", "space-x-2", "mr-2", "px-4"], [4, "ngFor", "ngForOf"], ["class", "text-xs py-1 px-2 bg-warning text-warning-content rounded-2xl shadow", 4, "ngIf"], [1, "text-xs", "py-1", "px-2", "bg-warning", "text-warning-content", "rounded-2xl", "shadow"]], template: function CateringOrderItemComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CateringOrderItemComponent_ng_container_0_Template, 15, 10, "ng-container", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.item);
  }
}, dependencies: [NgForOf, NgIf, IconComponent, MatRipple], styles: ["\n\n[_nghost-%COMP%]:last-child    > div[_ngcontent-%COMP%] {\n  border: none !important;\n}\n/*# sourceMappingURL=catering-order-item.component.css.map */"] });
var CateringOrderItemComponent = _CateringOrderItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringOrderItemComponent, { className: "CateringOrderItemComponent", filePath: "libs/catering/src/lib/catering-order-item.component.ts", lineNumber: 63 });
})();

// libs/catering/src/lib/catering.vars.ts
var CATERING_STATUSES = [
  { id: "pending", name: "Pending", icon: { class: "custom-pending" }, colour: "#ccc" },
  { id: "accepted", name: "Accepted", icon: { class: "custom-accepted" }, colour: "#3996B6" },
  {
    id: "preparing",
    name: "Preparing",
    icon: { class: "custom-preparing" },
    colour: "#E7536B"
  },
  { id: "ready", name: "Ready", icon: { class: "custom-ready" }, colour: "#FFD028" },
  {
    id: "delivered",
    name: "Delivered",
    icon: { class: "custom-delivered" },
    colour: "#75BB43"
  },
  {
    id: "cancelled",
    name: "Cancelled",
    icon: { class: "custom-cancelled" },
    colour: "#747474"
  }
];

// libs/catering/src/lib/catering-order-list.component.ts
var _c08 = (a0) => ({ key: "state", name: " ", size: "4rem", sortable: false, content: a0 });
var _c14 = (a0) => ({ key: "caterer", name: "Caterer", show: a0 });
var _c23 = (a0) => ({ key: "deliver_at", name: "Time", content: a0 });
var _c33 = (a0) => ({ key: "event", name: "Location", content: a0, sortable: false });
var _c43 = (a0) => ({ key: "event", name: "Host", content: a0, sortable: false });
var _c53 = () => ({ key: "charge_code", name: "Charge Code" });
var _c63 = () => ({ key: "invoice_number", name: "Invoice No.", empty: "No Invoice" });
var _c72 = (a0) => ({ key: "status", name: "Status", content: a0, size: "11rem" });
var _c82 = (a0) => ({ key: "actions", name: " ", size: "6.5rem", content: a0, sortable: false });
var _c92 = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => [a0, a1, a2, a3, a4, a5, a6, a7, a8];
function CateringOrderListComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "app-icon");
    \u0275\u0275text(3, "room_service");
    \u0275\u0275elementEnd()()();
  }
}
function CateringOrderListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 15);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275pipe(8, "date");
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r1 = ctx.data;
    const row_r2 = ctx.row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Deliver at ", \u0275\u0275pipeBind2(3, 5, data_r1, ctx_r2.time_format), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate4(" ", \u0275\u0275pipeBind2(6, 8, row_r2 == null ? null : row_r2.event == null ? null : row_r2.event.date, "MMM d"), ", ", \u0275\u0275pipeBind2(7, 11, row_r2 == null ? null : row_r2.event == null ? null : row_r2.event.date, ctx_r2.time_format), " - ", \u0275\u0275pipeBind2(8, 14, row_r2 == null ? null : row_r2.event == null ? null : row_r2.event.date_end, "MMM d"), ", ", \u0275\u0275pipeBind2(9, 17, row_r2 == null ? null : row_r2.event == null ? null : row_r2.event.date_end, ctx_r2.time_format), " ");
  }
}
function CateringOrderListComponent_ng_template_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, " No Location ");
    \u0275\u0275elementEnd();
  }
}
function CateringOrderListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275template(2, CateringOrderListComponent_ng_template_9_span_2_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (data_r4 == null ? null : data_r4.space == null ? null : data_r4.space.display_name) || (data_r4 == null ? null : data_r4.space == null ? null : data_r4.space.name) || "", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((data_r4 == null ? null : data_r4.space == null ? null : data_r4.space.display_name) || (data_r4 == null ? null : data_r4.space == null ? null : data_r4.space.name)));
  }
}
function CateringOrderListComponent_ng_template_11_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, " Unknown Host ");
    \u0275\u0275elementEnd();
  }
}
function CateringOrderListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275template(3, CateringOrderListComponent_ng_template_11_span_3_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (data_r5 == null ? null : data_r5.organiser == null ? null : data_r5.organiser.name) || (data_r5 == null ? null : data_r5.host) || "", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((data_r5 == null ? null : data_r5.organiser == null ? null : data_r5.organiser.name) || (data_r5 == null ? null : data_r5.host)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (data_r5 == null ? null : data_r5.organiser == null ? null : data_r5.organiser.email) || (data_r5 == null ? null : data_r5.host), " ");
  }
}
function CateringOrderListComponent_ng_template_13_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function CateringOrderListComponent_ng_template_13_button_8_Template_button_click_0_listener() {
      const status_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const row_r8 = \u0275\u0275nextContext().row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateStatus(row_r8, status_r7.id));
    });
    \u0275\u0275elementStart(1, "div", 24);
    \u0275\u0275element(2, "div", 25);
    \u0275\u0275elementStart(3, "span", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const status_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", status_r7.colour);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(status_r7.name);
  }
}
function CateringOrderListComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "button", 19)(2, "div", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-icon", 21);
    \u0275\u0275text(5, "arrow_drop_down");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "mat-menu", null, 7);
    \u0275\u0275template(8, CateringOrderListComponent_ng_template_13_button_8_Template, 5, 3, "button", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_13_0;
    const data_r9 = ctx.data;
    const menu_r10 = \u0275\u0275reference(7);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", (tmp_11_0 = ctx_r2.status(data_r9)) == null ? null : tmp_11_0.colour);
    \u0275\u0275property("matMenuTriggerFor", menu_r10);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_13_0 = ctx_r2.status(data_r9)) == null ? null : tmp_13_0.name, " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.statuses);
  }
}
function CateringOrderListComponent_ng_template_15_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275text(2, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r12 = \u0275\u0275nextContext().row;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", row_r12.notes, " ");
  }
}
function CateringOrderListComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "button", 28)(2, "app-icon");
    \u0275\u0275text(3, "description");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, CateringOrderListComponent_ng_template_15_ng_template_4_Template, 5, 1, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(6, "button", 29);
    \u0275\u0275listener("click", function CateringOrderListComponent_ng_template_15_Template_button_click_6_listener() {
      const row_r12 = \u0275\u0275restoreView(_r11).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.show_children[row_r12.id] = !ctx_r2.show_children[row_r12.id]);
    });
    \u0275\u0275elementStart(7, "app-icon");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r12 = ctx.row;
    const notes_template_r13 = \u0275\u0275reference(5);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("hover", true)("content", notes_template_r13)("disabled", !row_r12.notes);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r2.show_children[row_r12.id] ? "keyboard_arrow_down" : "chevron_right", " ");
  }
}
function CateringOrderListComponent_ng_template_17_ul_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 36);
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const row_r15 = \u0275\u0275nextContext(2).row;
    \u0275\u0275property("order_id", row_r15 == null ? null : row_r15.id)("item", item_r14);
  }
}
function CateringOrderListComponent_ng_template_17_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 34);
    \u0275\u0275template(1, CateringOrderListComponent_ng_template_17_ul_0_li_1_Template, 1, 2, "li", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r15 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", row_r15.items);
  }
}
function CateringOrderListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CateringOrderListComponent_ng_template_17_ul_0_Template, 2, 1, "ul", 33);
  }
  if (rf & 2) {
    const row_r15 = ctx.row;
    \u0275\u0275property("ngIf", row_r15 == null ? null : row_r15.items.length);
  }
}
var _CateringOrderListComponent = class _CateringOrderListComponent extends AsyncHandler {
  get filters() {
    return this._orders.filters;
  }
  get time_format() {
    return this._settings.time_format;
  }
  status(value) {
    return CATERING_STATUSES.find((i) => i.id === value);
  }
  constructor(_orders, _settings) {
    super();
    this._orders = _orders;
    this._settings = _settings;
    this.order_list = this._orders.filtered;
    this.loading = this._orders.loading;
    this.caterers = this._orders.caterers;
    this.statuses = CATERING_STATUSES;
    this.show_children = {};
    this.updateStatus = (order, s) => __async(this, null, function* () {
      yield this._orders.updateStatus(order, s);
      this.timeout("status-change", () => order.status = s);
    });
  }
  ngOnInit() {
    this._orders.startPolling();
  }
  ngOnDestroy() {
    this._orders.stopPolling();
  }
  /* istanbul ignore next */
  trackByFn(index, order) {
    return order ? order.id : void 0;
  }
};
_CateringOrderListComponent.\u0275fac = function CateringOrderListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringOrderListComponent)(\u0275\u0275directiveInject(CateringOrdersService), \u0275\u0275directiveInject(SettingsService));
};
_CateringOrderListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringOrderListComponent, selectors: [["catering-order-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 19, vars: 37, consts: [["state_template", ""], ["time_template", ""], ["location_template", ""], ["host_template", ""], ["status_template", ""], ["actions_template", ""], ["child_template", ""], ["menu", "matMenu"], ["notes_template", ""], [1, "flex", "flex-col", "h-full", "w-full", "overflow-auto"], ["mode", "indeterminate", 1, "sticky", "top-0", "left-0", "w-full"], ["empty_message", "No Catering Orders", 1, "min-w-[72rem]", "w-full", "block", "text-sm", 3, "data", "columns", "sortable", "show_children", "child_template"], [1, "p-2"], [1, "rounded-full", "bg-base-200", "p-2", "text-2xl", "flex", "items-center", "justify-center"], [1, "p-4"], [1, "text-xs", "opacity-30"], [1, "px-4", "py-2"], ["class", "opacity-30", 4, "ngIf"], [1, "opacity-30"], ["status", "", "matRipple", "", 1, "rounded-3xl", "text-base", "border-none", "h-10", "px-4", "flex", "items-center", "text-white", "w-36", 3, "matMenuTriggerFor"], [1, "flex", "text-center", "capitalize", "mx-2"], [1, "pl-2"], ["mat-menu-item", "", "class", "flex items-center", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 1, "flex", "items-center", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "rounded-full", "h-4", "w-4", "mr-2"], [1, "mr-2", "w-20"], [1, "flex", "items-center", "space-x-2", "p-2", "mx-auto"], ["icon", "", "matRipple", "", "customTooltip", "", "xPosition", "end", "yPosition", "top", 3, "hover", "content", "disabled"], ["icon", "", "matRipple", "", 3, "click"], [1, "p-2", "rounded-lg", "bg-base-100", "text-base-content", "max-w-[32rem]", "min-w-[8rem]", "shadow", "border", "border-base-200"], [1, "mb-2"], [1, "text-sm", "px-4", "py-2", "bg-base-200", "rounded"], ["class", "list-none p-0 m-0 w-full relative z-0", 4, "ngIf"], [1, "list-none", "p-0", "m-0", "w-full", "relative", "z-0"], ["catering-order-item", "", "class", "flex items-center", 3, "order_id", "item", 4, "ngFor", "ngForOf"], ["catering-order-item", "", 1, "flex", "items-center", 3, "order_id", "item"]], template: function CateringOrderListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "mat-progress-bar", 10);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275element(3, "simple-table", 11);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275template(5, CateringOrderListComponent_ng_template_5_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(7, CateringOrderListComponent_ng_template_7_Template, 10, 20, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(9, CateringOrderListComponent_ng_template_9_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(11, CateringOrderListComponent_ng_template_11_Template, 6, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(13, CateringOrderListComponent_ng_template_13_Template, 9, 5, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(15, CateringOrderListComponent_ng_template_15_Template, 9, 4, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(17, CateringOrderListComponent_ng_template_17_Template, 1, 1, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_9_0;
    const state_template_r16 = \u0275\u0275reference(6);
    const time_template_r17 = \u0275\u0275reference(8);
    const location_template_r18 = \u0275\u0275reference(10);
    const host_template_r19 = \u0275\u0275reference(12);
    const status_template_r20 = \u0275\u0275reference(14);
    const actions_template_r21 = \u0275\u0275reference(16);
    const child_template_r22 = \u0275\u0275reference(18);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-0", !\u0275\u0275pipeBind1(2, 7, ctx.loading));
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx.order_list)("columns", \u0275\u0275pureFunctionV(27, _c92, [\u0275\u0275pureFunction1(11, _c08, state_template_r16), \u0275\u0275pureFunction1(13, _c14, !(ctx.filters == null ? null : ctx.filters.caterer) && ((tmp_9_0 = \u0275\u0275pipeBind1(4, 9, ctx.caterers)) == null ? null : tmp_9_0.length) > 1), \u0275\u0275pureFunction1(15, _c23, time_template_r17), \u0275\u0275pureFunction1(17, _c33, location_template_r18), \u0275\u0275pureFunction1(19, _c43, host_template_r19), \u0275\u0275pureFunction0(21, _c53), \u0275\u0275pureFunction0(22, _c63), \u0275\u0275pureFunction1(23, _c72, status_template_r20), \u0275\u0275pureFunction1(25, _c82, actions_template_r21)]))("sortable", true)("show_children", ctx.show_children)("child_template", child_template_r22);
  }
}, dependencies: [NgForOf, NgIf, MatMenu, MatMenuItem, MatMenuTrigger, IconComponent, CustomTooltipComponent, SimpleTableComponent, MatRipple, MatProgressBar, CateringOrderItemComponent, AsyncPipe, DatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=catering-order-list.component.css.map */"] });
var CateringOrderListComponent = _CateringOrderListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringOrderListComponent, { className: "CateringOrderListComponent", filePath: "libs/catering/src/lib/catering-order-list.component.ts", lineNumber: 225 });
})();

// libs/catering/src/lib/catering-order-modal/catering-order-state.service.ts
var _CateringOrderStateService = class _CateringOrderStateService {
  get currency_code() {
    return this._org.currency_code;
  }
  constructor(_org, _settings) {
    this._org = _org;
    this._settings = _settings;
    this._options = new BehaviorSubject({});
    this._filters = new BehaviorSubject({
      search: "",
      tags: [],
      categories: [],
      caterer: ""
    });
    this._loading = new BehaviorSubject("");
    this.loading = this._loading.asObservable();
    this.filters = this._filters.asObservable();
    this.settings = this._org.active_building.pipe(filter((_) => !!_), switchMap((_) => showMetadata(_.id, "catering-settings").pipe(catchError((_2) => of({})))), map((_) => _.details), tap((_) => this._settings.post("require_catering_notes", !!_?.require_notes)), shareReplay(1));
    this.charge_codes = this.settings.pipe(map((_) => _.charge_codes || []));
    this.availability = this.settings.pipe(map((_) => _.disabled_rooms || []));
    this.available_menu = combineLatest([
      this._options,
      this._org.active_building
    ]).pipe(filter(([_, bld]) => !!bld), switchMap(([{ zone }, bld]) => {
      this._loading.next("[MENU]");
      return showMetadata(zone || bld.id, "catering").pipe(map((d) => (d.details instanceof Array ? d.details : []).map((_) => new CateringItem(_))), catchError((_) => []));
    }), tap((items) => {
      this._loading.next(this._loading.getValue().replace("[MENU]", ""));
      if (this._settings.get("app.catering_provider")) {
        this.setFilters({
          caterer: this._settings.get("app.catering_provider")
        });
      } else {
        const caterer_list = unique(items.map((i) => i.caterer).filter((_) => !!_));
        if (caterer_list.length <= 1)
          return;
        this.setFilters({ caterer: caterer_list[0] || "" });
      }
    }), shareReplay(1));
    this.categories = this.available_menu.pipe(map((_) => unique(_.map((i) => i.category))));
    this.caterers = this.available_menu.pipe(map((_) => {
      return this._settings.get("app.catering_provider") ? [] : unique(_.map((i) => i.caterer));
    }));
    this.filtered_menu = combineLatest([
      this._filters,
      this.available_menu
    ]).pipe(debounceTime(300), switchMap((_0) => __async(this, [_0], function* ([{ search, tags, categories, zone_id, date, duration, resources, caterer }, l]) {
      const rules = yield getCateringRulesForZone(zone_id).toPromise();
      search = search.toLowerCase();
      let list = search ? l.filter((_) => _.name.toLowerCase().includes(search)) : l;
      list = tags.length ? list.filter((_) => tags.every((t) => _.tags.includes(t))) : list;
      list = categories.length ? list.filter((_) => categories.includes(_.category)) : list;
      list = caterer ? list.filter((_) => caterer === "<empty>" && !_.caterer || _.caterer === caterer) : list;
      list = list.filter((_) => cateringItemAvailable(_, rules, {
        date,
        duration,
        resources
      }));
      return list;
    })), shareReplay(1));
  }
  setOptions(opts) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), opts));
  }
  setFilters(opts) {
    this._filters.next(__spreadValues(__spreadValues({}, this._filters.getValue()), opts));
  }
  getFilters() {
    return __spreadValues({}, this._filters.getValue());
  }
};
_CateringOrderStateService.\u0275fac = function CateringOrderStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringOrderStateService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(SettingsService));
};
_CateringOrderStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CateringOrderStateService, factory: _CateringOrderStateService.\u0275fac, providedIn: "root" });
var CateringOrderStateService = _CateringOrderStateService;

// libs/catering/src/lib/catering-order-modal/catering-item-list-item.component.ts
function CateringItemListItemComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.item.quantity || "1", " ");
  }
}
function CateringItemListItemComponent_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 18);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("source", ctx_r1.item.images[0]);
  }
}
function CateringItemListItemComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 19);
  }
}
function CateringItemListItemComponent_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r1.item.unit_price / 100, ctx_r1.code), " ");
  }
}
function CateringItemListItemComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.options, " ");
  }
}
function CateringItemListItemComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, " GF ");
    \u0275\u0275elementEnd();
  }
}
function CateringItemListItemComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1, " VG ");
    \u0275\u0275elementEnd();
  }
}
function CateringItemListItemComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1, " V ");
    \u0275\u0275elementEnd();
  }
}
function CateringItemListItemComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1, " D ");
    \u0275\u0275elementEnd();
  }
}
function CateringItemListItemComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1, " N ");
    \u0275\u0275elementEnd();
  }
}
var _CateringItemListItemComponent = class _CateringItemListItemComponent {
  constructor() {
    this.active = false;
    this.selected = false;
    this.favourite = false;
    this.code = "USD";
    this.toggleFav = new EventEmitter();
    this.select = new EventEmitter();
  }
  get options() {
    return this.item.option_list?.map((_) => _.name).join(", ");
  }
};
_CateringItemListItemComponent.\u0275fac = function CateringItemListItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringItemListItemComponent)();
};
_CateringItemListItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringItemListItemComponent, selectors: [["catering-item-list-item"]], inputs: { item: "item", active: "active", selected: "selected", favourite: "favourite", code: "code" }, outputs: { toggleFav: "toggleFav", select: "select" }, decls: 24, vars: 17, consts: [["placeholder", ""], ["item", "", "matRipple", "", 1, "relative", "p-2", "rounded-lg", "w-full", "shadow", "border", "bg-base-100", "border-base-200", "sm:w-[20rem]"], ["name", "select-catering-item", 1, "w-full", "h-full", "flex", "items-center", "z-0", 3, "click"], [1, "relative", "w-16", "h-16", "rounded-xl", "bg-neutral", "mr-4", "overflow-hidden", "border", "border-base-200", "flex", "items-center", "justify-center"], ["class", "absolute top-1 left-1 border border-white bg-neutral rounded-full h-6 w-6 flex items-center justify-center text-white text-xs", 4, "ngIf"], ["auth", "", "class", "object-cover min-h-full min-w-full", 3, "source", 4, "ngIf", "ngIfElse"], [1, "space-y-2", "text-left", "flex-1"], [1, "font-medium", "flex", "flex-col", "pr-10"], [1, "opacity-60", "text-xs"], [1, "flex", "items-center", "text-sm", "space-x-1"], ["class", "flex-1 w-px bg-base-100 rounded", 4, "ngIf"], ["class", "text-xs px-2 py-1 rounded-2xl shadow border border-base-200", 4, "ngIf"], ["class", "text-xs h-5 w-7 rounded-xl shadow bg-success flex items-center justify-center", 4, "ngIf"], ["class", "text-xs h-5 w-7 rounded-xl shadow bg-info flex items-center justify-center", 4, "ngIf"], ["class", "text-xs h-5 w-7 rounded-xl shadow bg-warning flex items-center justify-center", 4, "ngIf"], ["class", "text-xs h-5 w-7 rounded-xl shadow bg-orange-600 flex items-center justify-center", 4, "ngIf"], ["icon", "", "matRipple", "", "name", "toggle-catering-item-favourite", 1, "absolute", "top-1", "right-1", 3, "click"], [1, "absolute", "top-1", "left-1", "border", "border-white", "bg-neutral", "rounded-full", "h-6", "w-6", "flex", "items-center", "justify-center", "text-white", "text-xs"], ["auth", "", 1, "object-cover", "min-h-full", "min-w-full", 3, "source"], ["src", "assets/icons/catering-placeholder.svg", 1, "m-auto"], [1, "flex-1", "w-px", "bg-base-100", "rounded"], [1, "text-xs", "px-2", "py-1", "rounded-2xl", "shadow", "border", "border-base-200"], [1, "text-xs", "h-5", "w-7", "rounded-xl", "shadow", "bg-success", "flex", "items-center", "justify-center"], [1, "text-xs", "h-5", "w-7", "rounded-xl", "shadow", "bg-info", "flex", "items-center", "justify-center"], [1, "text-xs", "h-5", "w-7", "rounded-xl", "shadow", "bg-warning", "flex", "items-center", "justify-center"], [1, "text-xs", "h-5", "w-7", "rounded-xl", "shadow", "bg-orange-600", "flex", "items-center", "justify-center"]], template: function CateringItemListItemComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 1)(1, "button", 2);
    \u0275\u0275listener("click", function CateringItemListItemComponent_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.select.emit());
    });
    \u0275\u0275elementStart(2, "div", 3);
    \u0275\u0275template(3, CateringItemListItemComponent_div_3_Template, 2, 1, "div", 4)(4, CateringItemListItemComponent_img_4_Template, 1, 1, "img", 5)(5, CateringItemListItemComponent_ng_template_5_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "div");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 8);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 9);
    \u0275\u0275template(14, CateringItemListItemComponent_p_14_Template, 3, 4, "p", 10)(15, CateringItemListItemComponent_div_15_Template, 2, 1, "div", 11)(16, CateringItemListItemComponent_div_16_Template, 2, 0, "div", 12)(17, CateringItemListItemComponent_div_17_Template, 2, 0, "div", 13)(18, CateringItemListItemComponent_div_18_Template, 2, 0, "div", 13)(19, CateringItemListItemComponent_div_19_Template, 2, 0, "div", 14)(20, CateringItemListItemComponent_div_20_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "button", 16);
    \u0275\u0275listener("click", function CateringItemListItemComponent_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.toggleFav.emit());
    });
    \u0275\u0275elementStart(22, "app-icon");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const placeholder_r3 = \u0275\u0275reference(6);
    \u0275\u0275classProp("!border-base-200", ctx.active);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.item.quantity && ctx.selected);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.item.images == null ? null : ctx.item.images.length)("ngIfElse", placeholder_r3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.item.name || "Item");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.item.category, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.item.unit_price);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.item.option_list == null ? null : ctx.item.option_list.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.item.tags == null ? null : ctx.item.tags.includes("Gluten Free"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.item.tags == null ? null : ctx.item.tags.includes("Vegan"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.item.tags == null ? null : ctx.item.tags.includes("Vegetarian"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.item.tags == null ? null : ctx.item.tags.includes("Contains Dairy"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.item.tags == null ? null : ctx.item.tags.includes("Contains Nuts"));
    \u0275\u0275advance();
    \u0275\u0275classProp("text-blue-400", ctx.favourite);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.favourite ? "favorite" : "favorite_border");
  }
}, dependencies: [NgIf, IconComponent, AuthenticatedImageDirective, MatRipple, CurrencyPipe] });
var CateringItemListItemComponent = _CateringItemListItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringItemListItemComponent, { className: "CateringItemListItemComponent", filePath: "libs/catering/src/lib/catering-order-modal/catering-item-list-item.component.ts", lineNumber: 109 });
})();

// libs/catering/src/lib/catering-order-modal/catering-item-list.component.ts
function CateringItemListComponent_ng_container_1_catering_item_list_item_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "catering-item-list-item", 9);
    \u0275\u0275listener("toggleFav", function CateringItemListComponent_ng_container_1_catering_item_list_item_7_Template_catering_item_list_item_toggleFav_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleFav.emit(item_r2.id));
    })("select", function CateringItemListComponent_ng_container_1_catering_item_list_item_7_Template_catering_item_list_item_select_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectItem(item_r2, true));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("item", item_r2)("active", ctx_r2.active === item_r2.custom_id)("selected", true)("favourite", ctx_r2.isFavourite(item_r2.id));
  }
}
function CateringItemListComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h3", 4);
    \u0275\u0275text(2, "Ordered Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 5);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ul", 7);
    \u0275\u0275template(7, CateringItemListComponent_ng_container_1_catering_item_list_item_7_Template, 1, 4, "catering-item-list-item", 8);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ((tmp_3_0 = \u0275\u0275pipeBind1(5, 2, ctx_r2.list)) == null ? null : tmp_3_0.length) || 0, " items(s) ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(8, 4, ctx_r2.list));
  }
}
function CateringItemListComponent_ng_container_8_ul_1_catering_item_list_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "catering-item-list-item", 12);
    \u0275\u0275listener("toggleFav", function CateringItemListComponent_ng_container_8_ul_1_catering_item_list_item_1_Template_catering_item_list_item_toggleFav_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleFav(item_r5.id));
    })("select", function CateringItemListComponent_ng_container_8_ul_1_catering_item_list_item_1_Template_catering_item_list_item_select_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectItem(item_r5, true));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("item", item_r5)("active", ctx_r2.active === item_r5.custom_id)("selected", ctx_r2.selected.includes(item_r5.custom_id))("favourite", ctx_r2.isFavourite(item_r5.id))("code", ctx_r2.code);
  }
}
function CateringItemListComponent_ng_container_8_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 7);
    \u0275\u0275template(1, CateringItemListComponent_ng_container_8_ul_1_catering_item_list_item_1_Template, 1, 5, "catering-item-list-item", 11);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, ctx_r2.item_list));
  }
}
function CateringItemListComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CateringItemListComponent_ng_container_8_ul_1_Template, 3, 3, "ul", 10);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    const empty_state_r6 = \u0275\u0275reference(11);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = \u0275\u0275pipeBind1(2, 2, ctx_r2.item_list)) == null ? null : tmp_3_0.length)("ngIfElse", empty_state_r6);
  }
}
function CateringItemListComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "p", 14);
    \u0275\u0275text(2, " No available items for selected time and/or filters ");
    \u0275\u0275elementEnd()();
  }
}
function CateringItemListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "mat-spinner", 16);
    \u0275\u0275elementStart(2, "p", 17);
    \u0275\u0275text(3, "Finding available items...");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
  }
}
var _CateringItemListComponent = class _CateringItemListComponent {
  get code() {
    return this._state.currency_code;
  }
  constructor(_state) {
    this._state = _state;
    this.active = "";
    this.selected = "";
    this.selected_items = [];
    this.favorites = [];
    this.toggleFav = new EventEmitter();
    this.onSelect = new EventEmitter();
    this.list = new BehaviorSubject([]);
    this.loading = this._state.loading;
    this.item_list = this._state.filtered_menu;
  }
  ngOnChanges(changes) {
    if (changes.selected_items) {
      this.list.next(this.selected_items || []);
    }
  }
  isFavourite(item_id) {
    return this.favorites?.includes(item_id);
  }
  selectItem(item, clear_state = false) {
    this.onSelect.emit(item);
    if (clear_state) {
      item.options?.forEach((_) => delete _.active);
    }
  }
};
_CateringItemListComponent.\u0275fac = function CateringItemListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringItemListComponent)(\u0275\u0275directiveInject(CateringOrderStateService));
};
_CateringItemListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringItemListComponent, selectors: [["catering-item-list"]], inputs: { active: "active", selected: "selected", selected_items: "selected_items", favorites: "favorites" }, outputs: { toggleFav: "toggleFav", onSelect: "onSelect" }, features: [\u0275\u0275NgOnChangesFeature], decls: 14, vars: 10, consts: [["empty_state", ""], ["load_state", ""], [1, "w-full", "h-full", "overflow-auto", "py-2"], [4, "ngIf"], [1, "font-bold", "px-2"], ["count", "", 1, "text-sm", "opacity-60", "mb-2", "px-2"], [4, "ngIf", "ngIfElse"], [1, "list-style-none", "space-y-2", "p-2"], ["class", "block", 3, "item", "active", "selected", "favourite", "toggleFav", "select", 4, "ngFor", "ngForOf"], [1, "block", 3, "toggleFav", "select", "item", "active", "selected", "favourite"], ["class", "list-style-none space-y-2 p-2", 4, "ngIf", "ngIfElse"], ["class", "block", 3, "item", "active", "selected", "favourite", "code", "toggleFav", "select", 4, "ngFor", "ngForOf"], [1, "block", 3, "toggleFav", "select", "item", "active", "selected", "favourite", "code"], ["empty", "", 1, "p-16", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "opacity-30", "text-center"], ["loading", "", 1, "p-16", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [3, "diameter"], [1, "opacity-30"]], template: function CateringItemListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, CateringItemListComponent_ng_container_1_Template, 9, 6, "ng-container", 3);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "h3", 4);
    \u0275\u0275text(4, "Results");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 5);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, CateringItemListComponent_ng_container_8_Template, 3, 4, "ng-container", 6);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, CateringItemListComponent_ng_template_10_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(12, CateringItemListComponent_ng_template_12_Template, 4, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const load_state_r7 = \u0275\u0275reference(13);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = \u0275\u0275pipeBind1(2, 4, ctx.list)) == null ? null : tmp_2_0.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ((tmp_3_0 = \u0275\u0275pipeBind1(7, 6, ctx.item_list)) == null ? null : tmp_3_0.length) || 0, " result(s) found ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(9, 8, ctx.loading))("ngIfElse", load_state_r7);
  }
}, dependencies: [NgForOf, NgIf, MatProgressSpinner, CateringItemListItemComponent, AsyncPipe] });
var CateringItemListComponent = _CateringItemListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringItemListComponent, { className: "CateringItemListComponent", filePath: "libs/catering/src/lib/catering-order-modal/catering-item-list.component.ts", lineNumber: 80 });
})();

// libs/catering/src/lib/catering-order-modal/catering-item-details.component.ts
function CateringItemDetailsComponent_ng_container_0_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r1.item.unit_price / 100, ctx_r1.code), " ");
  }
}
function CateringItemDetailsComponent_ng_container_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r3, " ");
  }
}
function CateringItemDetailsComponent_ng_container_0_div_21_ng_container_4_mat_radio_button_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", \u0275\u0275pipeBind2(2, 1, opt_r6.unit_price / 100, ctx_r1.code), " ");
  }
}
function CateringItemDetailsComponent_ng_container_0_div_21_ng_container_4_mat_radio_button_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-button", 31)(1, "div", 32)(2, "div", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CateringItemDetailsComponent_ng_container_0_div_21_ng_container_4_mat_radio_button_5_div_4_Template, 3, 4, "div", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    \u0275\u0275property("value", opt_r6.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", opt_r6.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", opt_r6.unit_price);
  }
}
function CateringItemDetailsComponent_ng_container_0_div_21_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-radio-group", 27);
    \u0275\u0275twoWayListener("ngModelChange", function CateringItemDetailsComponent_ng_container_0_div_21_ng_container_4_Template_mat_radio_group_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const group_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.group_state[group_r5.name], $event) || (ctx_r1.group_state[group_r5.name] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CateringItemDetailsComponent_ng_container_0_div_21_ng_container_4_Template_mat_radio_group_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const group_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateGroupOption(group_r5, $event));
    });
    \u0275\u0275elementStart(2, "mat-radio-button", 28)(3, "span", 29);
    \u0275\u0275i18n(4, 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, CateringItemDetailsComponent_ng_container_0_div_21_ng_container_4_mat_radio_button_5_Template, 5, 3, "mat-radio-button", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const group_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.group_state[group_r5.name]);
    \u0275\u0275property("disabled", ctx_r1.item == null ? null : ctx_r1.item.in_order);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", group_r5 == null ? null : group_r5.options);
  }
}
function CateringItemDetailsComponent_ng_container_0_div_21_ng_template_5_mat_checkbox_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", \u0275\u0275pipeBind2(2, 1, opt_r8.unit_price / 100, ctx_r1.code), " ");
  }
}
function CateringItemDetailsComponent_ng_container_0_div_21_ng_template_5_mat_checkbox_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 37);
    \u0275\u0275twoWayListener("ngModelChange", function CateringItemDetailsComponent_ng_container_0_div_21_ng_template_5_mat_checkbox_0_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const opt_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.option_state[opt_r8.id], $event) || (ctx_r1.option_state[opt_r8.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CateringItemDetailsComponent_ng_container_0_div_21_ng_template_5_mat_checkbox_0_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const opt_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updateCheckedState(opt_r8.id, $event));
    });
    \u0275\u0275elementStart(1, "div", 21)(2, "div", 38);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CateringItemDetailsComponent_ng_container_0_div_21_ng_template_5_mat_checkbox_0_div_4_Template, 3, 4, "div", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.option_state[opt_r8.id]);
    \u0275\u0275property("disabled", ctx_r1.item == null ? null : ctx_r1.item.in_order);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", opt_r8.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", opt_r8.unit_price);
  }
}
function CateringItemDetailsComponent_ng_container_0_div_21_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CateringItemDetailsComponent_ng_container_0_div_21_ng_template_5_mat_checkbox_0_Template, 5, 4, "mat-checkbox", 36);
  }
  if (rf & 2) {
    const group_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngForOf", group_r5 == null ? null : group_r5.options);
  }
}
function CateringItemDetailsComponent_ng_container_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 26);
    \u0275\u0275template(4, CateringItemDetailsComponent_ng_container_0_div_21_ng_container_4_Template, 6, 3, "ng-container", 4)(5, CateringItemDetailsComponent_ng_container_0_div_21_ng_template_5_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    const multi_options_r9 = \u0275\u0275reference(6);
    \u0275\u0275attribute("group", group_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", group_r5.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !group_r5.multiple)("ngIfElse", multi_options_r9);
  }
}
function CateringItemDetailsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 5);
    \u0275\u0275element(2, "image-carousel", 6);
    \u0275\u0275elementStart(3, "button", 7);
    \u0275\u0275listener("click", function CateringItemDetailsComponent_ng_container_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(4, "app-icon");
    \u0275\u0275text(5, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 8);
    \u0275\u0275listener("click", function CateringItemDetailsComponent_ng_container_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFav.emit());
    });
    \u0275\u0275elementStart(7, "app-icon");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 9)(10, "section", 10)(11, "div")(12, "h2", 11);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, CateringItemDetailsComponent_ng_container_0_p_14_Template, 3, 4, "p", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a-counter", 13);
    \u0275\u0275twoWayListener("ngModelChange", function CateringItemDetailsComponent_ng_container_0_Template_a_counter_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.item.quantity, $event) || (ctx_r1.item.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CateringItemDetailsComponent_ng_container_0_Template_a_counter_ngModelChange_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.active ? ctx_r1.activeChange.emit(ctx_r1.active) : "");
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "section", 14);
    \u0275\u0275template(17, CateringItemDetailsComponent_ng_container_0_div_17_Template, 2, 1, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "hr");
    \u0275\u0275elementStart(19, "section", 16)(20, "div", 17);
    \u0275\u0275template(21, CateringItemDetailsComponent_ng_container_0_div_21_Template, 7, 4, "div", 18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 19)(23, "button", 20);
    \u0275\u0275listener("click", function CateringItemDetailsComponent_ng_container_0_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.active = !ctx_r1.active;
      return \u0275\u0275resetView(ctx_r1.activeChange.emit(ctx_r1.active));
    });
    \u0275\u0275elementStart(24, "div", 21)(25, "app-icon", 22);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("images", ctx_r1.item.images);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-white", !ctx_r1.fav)("text-blue-400", ctx_r1.fav);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fav ? "favorite" : "favorite_border");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.item.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.item.unit_price);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.item.quantity);
    \u0275\u0275property("min", 1)("max", ctx_r1.item.count || 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.item.tags);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.groups);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx_r1.active);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.active ? "remove" : "add");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.active ? "Remove this item" : "Add this item", " ");
  }
}
function CateringItemDetailsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "p", 40);
    \u0275\u0275i18n(2, 3);
    \u0275\u0275elementEnd()();
  }
}
var _CateringItemDetailsComponent = class _CateringItemDetailsComponent {
  constructor() {
    this.active = false;
    this.fav = false;
    this.code = "USD";
    this.toggleFav = new EventEmitter();
    this.activeChange = new EventEmitter();
    this.close = new EventEmitter();
    this.option_state = {};
    this.group_state = {};
  }
  ngOnChanges(changes) {
    if (changes.item && this.item) {
      this._update();
    }
  }
  updateGroupOption(group, id) {
    if (!group)
      return;
    this.group_state[group.name] = id;
    for (const option of group.options) {
      option.active = option.id === id;
    }
  }
  updateCheckedState(id, state2) {
    const option = this.item?.options.find((_) => _.id === id);
    if (option)
      option.active = state2;
  }
  _update() {
    if (!this.item)
      return;
    if (!this.item.quantity) {
      this.item.quantity = 1;
    }
    this.option_state = {};
    this.group_state = {};
    const groups = unique(this.item.options.map((i) => i.group || "Other"));
    const group_list = [];
    for (const group of groups) {
      const options = this.item.options.filter((i) => i.group === group);
      group_list.push({
        name: group,
        multiple: !!options.find((i) => i.multiple),
        options
      });
    }
    this.groups = group_list;
    if (this.item.option_list) {
      for (const opt of this.item.option_list) {
        const option = this.item.options.find((_) => _.id === opt.id);
        if (option) {
          option.active = true;
          this.option_state[opt.id] = true;
          this.updateGroupOption(this.groups.find((g) => g.name === option.group), option.id);
        }
      }
    }
  }
};
_CateringItemDetailsComponent.\u0275fac = function CateringItemDetailsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringItemDetailsComponent)();
};
_CateringItemDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringItemDetailsComponent, selectors: [["catering-item-details"]], inputs: { item: "item", active: "active", fav: "fav", code: "code" }, outputs: { toggleFav: "toggleFav", activeChange: "activeChange", close: "close" }, features: [\u0275\u0275NgOnChangesFeature], decls: 3, vars: 2, consts: () => {
  let i18n_0;
  if (false) {
    const MSG_EXTERNAL_6252070156626006029$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_CATERING_ITEM_DETAILS_COMPONENT_TS_0 = goog.getMsg("None");
    i18n_0 = MSG_EXTERNAL_6252070156626006029$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_CATERING_ITEM_DETAILS_COMPONENT_TS_0;
  } else {
    i18n_0 = $localize`:␟a2f14a73f7a6e94479f67423cc51102da8d6f524␟6252070156626006029:None`;
  }
  let i18n_1;
  if (false) {
    const MSG_EXTERNAL_2528715266490787662$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_CATERING_ITEM_DETAILS_COMPONENT_TS_1 = goog.getMsg(" Select an item to view it's details ");
    i18n_1 = MSG_EXTERNAL_2528715266490787662$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_CATERING_ITEM_DETAILS_COMPONENT_TS_1;
  } else {
    i18n_1 = $localize`:␟0fab86098296160aef9d98a89e252bee5cf35141␟2528715266490787662: Select an item to view it's details `;
  }
  return [["empty_state", ""], ["multi_options", ""], i18n_0, i18n_1, [4, "ngIf", "ngIfElse"], ["image", "", 1, "relative", "w-full", "h-64", "sm:h-40", "bg-neutral"], [1, "absolute", "inset-0", 3, "images"], ["icon", "", "matRipple", "", "name", "close-catering-item-details", 1, "absolute", "top-2", "left-2", "bg-neutral", "sm:hidden", "text-white", 3, "click"], ["icon", "", "matRipple", "", "name", "toggle-catering-item-favourite-details", 1, "absolute", "top-2", "right-2", "bg-neutral", 3, "click"], [1, "p-2", "space-y-2", "flex-1", "h-1/2", "overflow-auto"], ["actions", "", 1, "z-0", "flex", "items-center", "justify-between"], [1, "text-xl", "font-medium", "mb-2", "mt-4"], [4, "ngIf"], [3, "ngModelChange", "ngModel", "min", "max"], [1, "flex", "items-center", "flex-wrap"], ["class", "px-2 py-1 rounded-2xl bg-base-200 text-sm capitalize m-1", 4, "ngFor", "ngForOf"], ["details", "", 1, "space-y-2"], [1, "flex", "flex-col", "flex-wrap"], ["class", "min-w-1/2 flex-1", 4, "ngFor", "ngForOf"], [1, "px-2", "pt-2", "pb-[5.5rem]", "border-t", "border-base-200", "shadow", "sm:hidden"], ["btn", "", "matRipple", "", "name", "select-catering-item-details", 1, "w-full", 3, "click"], [1, "flex", "items-center", "justify-center"], [1, "text-2xl"], [1, "px-2", "py-1", "rounded-2xl", "bg-base-200", "text-sm", "capitalize", "m-1"], [1, "min-w-1/2", "flex-1"], [1, "font-medium", "p-2", "capitalize"], [1, "flex", "flex-col", "pl-4"], ["aria-label", "Select an option", 1, "flex", "flex-col", 3, "ngModelChange", "ngModel", "disabled"], ["value", "", 1, "m-0"], [1, "font-medium", "p-2"], ["class", "m-0", 3, "value", 4, "ngFor", "ngForOf"], [1, "m-0", 3, "value"], [1, "flex", "items-center", "justify-center", "max-w-[calc(100vw-4rem)]", "sm:max-w-[15rem]"], [1, "font-medium", "p-2", "flex-1", "w-1/2", "whitespace-normal"], ["class", "opacity-60 text-xs", 4, "ngIf"], [1, "opacity-60", "text-xs"], [3, "ngModel", "disabled", "ngModelChange", 4, "ngFor", "ngForOf"], [3, "ngModelChange", "ngModel", "disabled"], [1, "font-medium", "p-2", "flex-1", "w-1/2"], ["empty", "", 1, "p-16", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "opacity-30", "text-center"]];
}, template: function CateringItemDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CateringItemDetailsComponent_ng_container_0_Template, 29, 17, "ng-container", 4)(1, CateringItemDetailsComponent_ng_template_1_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const empty_state_r10 = \u0275\u0275reference(2);
    \u0275\u0275property("ngIf", ctx.item)("ngIfElse", empty_state_r10);
  }
}, dependencies: [NgForOf, NgIf, MatCheckbox, MatRadioGroup, MatRadioButton, NgControlStatus, NgModel, IconComponent, ImageCarouselComponent, MatRipple, CounterComponent, CurrencyPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n  min-width: 20rem;\n  height: 100%;\n  min-height: 65vh;\n}\n/*# sourceMappingURL=catering-item-details.component.css.map */"] });
var CateringItemDetailsComponent = _CateringItemDetailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringItemDetailsComponent, { className: "CateringItemDetailsComponent", filePath: "libs/catering/src/lib/catering-order-modal/catering-item-details.component.ts", lineNumber: 212 });
})();

// libs/catering/src/lib/catering-order-modal/catering-item-filters.component.ts
function CateringItemFiltersComponent_div_6_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const caterer_r3 = ctx.$implicit;
    \u0275\u0275property("value", caterer_r3 || "<empty>");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", caterer_r3 || "[No caterer]", " ");
  }
}
function CateringItemFiltersComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "label");
    \u0275\u0275text(2, "Caterer:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 3)(4, "mat-select", 13);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275listener("ngModelChange", function CateringItemFiltersComponent_div_6_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFilters({ caterer: $event }));
    });
    \u0275\u0275template(7, CateringItemFiltersComponent_div_6_mat_option_7_Template, 2, 2, "mat-option", 14);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ((tmp_1_0 = \u0275\u0275pipeBind1(5, 2, ctx_r1.filters)) == null ? null : tmp_1_0.caterer) || \u0275\u0275pipeBind1(6, 4, ctx_r1.caterers)[0]);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(8, 6, ctx_r1.caterers));
  }
}
function CateringItemFiltersComponent_h3_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 16);
    \u0275\u0275i18n(1, 0);
    \u0275\u0275elementEnd();
  }
}
function CateringItemFiltersComponent_div_9_ng_container_3_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r6 = ctx.$implicit;
    \u0275\u0275property("value", day_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, day_r6.value, "mediumDate"), " ");
  }
}
function CateringItemFiltersComponent_div_9_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, "Deliver Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 21)(4, "mat-select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function CateringItemFiltersComponent_div_9_ng_container_3_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.offset_day, $event) || (ctx_r1.offset_day = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CateringItemFiltersComponent_div_9_ng_container_3_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.offset_dayChange.next($event));
    });
    \u0275\u0275template(5, CateringItemFiltersComponent_div_9_ng_container_3_mat_option_5_Template, 3, 5, "mat-option", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.offset_day);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.day_options);
  }
}
function CateringItemFiltersComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "mat-checkbox", 18);
    \u0275\u0275twoWayListener("ngModelChange", function CateringItemFiltersComponent_div_9_Template_mat_checkbox_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.at_time, $event) || (ctx_r1.at_time = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CateringItemFiltersComponent_div_9_Template_mat_checkbox_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.at_timeChange.next($event));
    });
    \u0275\u0275text(2, " Exact Time ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CateringItemFiltersComponent_div_9_ng_container_3_Template, 6, 2, "ng-container", 19);
    \u0275\u0275elementStart(4, "label");
    \u0275\u0275text(5, "Deliver After:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a-duration-field", 20);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275twoWayListener("ngModelChange", function CateringItemFiltersComponent_div_9_Template_a_duration_field_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.offset, $event) || (ctx_r1.offset = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CateringItemFiltersComponent_div_9_Template_a_duration_field_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.offsetChange.next($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.at_time);
    \u0275\u0275property("matTooltip", ctx_r1.exact_tooltip);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.day_options.length > 1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.offset);
    \u0275\u0275property("time", ctx_r1.offset_day > 0 ? ctx_r1.start_of_date : (tmp_5_0 = \u0275\u0275pipeBind1(7, 9, ctx_r1.filters)) == null ? null : tmp_5_0.date)("step", ctx_r1.step_interval)("min", ctx_r1.min_offset)("max", ctx_r1.max_offset)("use_24hr", ctx_r1.use_24hr);
  }
}
function CateringItemFiltersComponent_h3_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 22);
    \u0275\u0275i18n(1, 1);
    \u0275\u0275elementEnd();
  }
}
function CateringItemFiltersComponent_mat_checkbox_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 13);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("ngModelChange", function CateringItemFiltersComponent_mat_checkbox_12_Template_mat_checkbox_ngModelChange_0_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCategory(item_r8));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const item_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", (tmp_2_0 = \u0275\u0275pipeBind1(1, 3, ctx_r1.filters)) == null ? null : tmp_2_0.categories == null ? null : tmp_2_0.categories.includes(item_r8));
    \u0275\u0275attribute("name", item_r8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r8, " ");
  }
}
var ICONS = {
  coffee: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_605_8664)">
    <path d="M38.388 21.2474C37.8243 20.7996 37.1598 20.4847 36.4474 20.3278C35.735 20.1708 34.9944 20.1762 34.2846 20.3434C34.2476 19.7774 34.2049 19.2037 34.1483 18.6155C34.1243 18.3664 34.0043 18.1349 33.8119 17.9668C33.6195 17.7986 33.3687 17.706 33.1088 17.707H1.26151C1.00166 17.706 0.750839 17.7986 0.558442 17.9668C0.366045 18.1349 0.246035 18.3664 0.222073 18.6155C-0.42931 25.3581 0.106585 30.5307 4.80024 35.4799C8.88062 39.7819 15.7271 39.9998 17.0599 39.9998H17.3047C18.6375 39.9998 25.4863 39.7774 29.5643 35.4799C30.5412 34.4597 31.3937 33.3353 32.1052 32.1286C32.2481 32.1199 32.3875 32.0819 32.514 32.0174C34.0959 31.2139 35.6169 30.3039 37.0656 29.2943C38.3815 28.4227 39.3664 27.1618 39.871 25.7028C40.0702 24.9006 40.0372 24.0612 39.7758 23.2757C39.5144 22.4902 39.0344 21.7887 38.388 21.2474ZM28.0329 34.13C24.4699 37.8905 18.0323 37.9984 17.3093 37.9984H17.0645C16.3426 37.9984 9.90389 37.8872 6.34092 34.13C2.37257 29.9436 1.75351 25.466 2.21549 19.7085H32.1583C32.6214 25.4649 32.0024 29.9425 28.0329 34.13ZM37.8498 25.2091C37.4485 26.2369 36.7212 27.117 35.771 27.7243C35.024 28.2636 34.2434 28.7582 33.4334 29.2053C34.1268 27.0036 34.4428 24.7078 34.3689 22.4082C34.3839 22.4027 34.3989 22.4082 34.4139 22.3982C34.8447 22.2182 35.3192 22.1579 35.7837 22.2242C36.2482 22.2905 36.6841 22.4808 37.0421 22.7733C37.4001 23.0659 37.6658 23.4491 37.8092 23.8796C37.9525 24.3101 37.9678 24.7707 37.8533 25.2091H37.8498Z" fill="currentcolor"/>
    <path d="M9.43243 8.16274C9.85735 8.48322 10.2069 8.88673 10.4582 9.34669C10.7094 9.80666 10.8565 10.3126 10.89 10.8313C10.7939 11.9569 10.2754 13.0103 9.43128 13.7946C9.32937 13.883 9.24664 13.9899 9.18786 14.1092C9.12907 14.2286 9.0954 14.3579 9.08878 14.4898C9.08216 14.6217 9.10275 14.7536 9.14931 14.8778C9.19588 15.002 9.26753 15.1161 9.36012 15.2136C9.45271 15.311 9.56442 15.3898 9.6888 15.4455C9.81319 15.5012 9.9478 15.5326 10.0849 15.538C10.2219 15.5433 10.3587 15.5225 10.4874 15.4767C10.6161 15.4309 10.734 15.3611 10.8345 15.2712C12.1048 14.1093 12.8679 12.5254 12.9688 10.8413C12.9432 10.042 12.7392 9.25727 12.3708 8.5405C12.0023 7.82373 11.478 7.19166 10.8334 6.68722C10.4067 6.38353 10.055 5.99283 9.80341 5.54303C9.55184 5.09323 9.40662 4.59547 9.37815 4.08534C9.51392 3.18283 10.0073 2.36595 10.7548 1.80591C10.9718 1.64618 11.1147 1.41065 11.1528 1.15024C11.1908 0.889843 11.1208 0.625512 10.958 0.414392C10.7951 0.203272 10.5525 0.062327 10.2826 0.0220596C10.0127 -0.0182078 9.73715 0.0454338 9.51559 0.199206C8.90219 0.651996 8.39004 1.21933 8.0098 1.86721C7.62956 2.5151 7.38907 3.2302 7.30273 3.9697C7.30292 4.77855 7.49485 5.5767 7.86392 6.30333C8.23298 7.02996 8.76944 7.66592 9.43243 8.16274Z" fill="currentcolor"/>
    <path d="M23.0984 8.16274C23.5234 8.48322 23.8729 8.88673 24.1242 9.34669C24.3754 9.80666 24.5225 10.3126 24.556 10.8313C24.4599 11.9569 23.9414 13.0103 23.0973 13.7946C22.9954 13.883 22.9126 13.9899 22.8539 14.1092C22.7951 14.2286 22.7614 14.3579 22.7548 14.4898C22.7482 14.6217 22.7687 14.7536 22.8153 14.8778C22.8619 15.002 22.9335 15.1161 23.0261 15.2136C23.1187 15.311 23.2304 15.3898 23.3548 15.4455C23.4792 15.5012 23.6138 15.5326 23.7509 15.538C23.8879 15.5433 24.0247 15.5225 24.1534 15.4767C24.2821 15.4309 24.4 15.3611 24.5005 15.2712C25.7708 14.1093 26.5339 12.5254 26.6348 10.8413C26.6092 10.042 26.4052 9.25727 26.0368 8.5405C25.6683 7.82373 25.144 7.19166 24.4994 6.68722C24.0727 6.38353 23.721 5.99283 23.4694 5.54303C23.2178 5.09323 23.0726 4.59547 23.0442 4.08534C23.1799 3.18283 23.6733 2.36595 24.4208 1.80591C24.6378 1.64618 24.7807 1.41065 24.8188 1.15024C24.8568 0.889843 24.7868 0.625512 24.624 0.414392C24.4611 0.203272 24.2185 0.062327 23.9486 0.0220596C23.6787 -0.0182078 23.4032 0.0454338 23.1816 0.199206C22.5682 0.651996 22.0561 1.21933 21.6758 1.86721C21.2956 2.5151 21.0551 3.2302 20.9688 3.9697C20.9689 4.77855 21.1609 5.5767 21.5299 6.30333C21.899 7.02996 22.4355 7.66592 23.0984 8.16274Z" fill="currentcolor"/>
    <path d="M16.2645 8.16274C16.6894 8.48322 17.039 8.88673 17.2902 9.34669C17.5414 9.80666 17.6886 10.3126 17.722 10.8313C17.626 11.9569 17.1074 13.0103 16.2633 13.7946C16.1614 13.883 16.0787 13.9899 16.0199 14.1092C15.9611 14.2286 15.9274 14.3579 15.9208 14.4898C15.9142 14.6217 15.9348 14.7536 15.9813 14.8778C16.0279 15.002 16.0996 15.1161 16.1922 15.2136C16.2847 15.311 16.3964 15.3898 16.5208 15.4455C16.6452 15.5012 16.7798 15.5326 16.9169 15.538C17.054 15.5433 17.1908 15.5225 17.3194 15.4767C17.4481 15.4309 17.5661 15.3611 17.6666 15.2712C18.9368 14.1093 19.6999 12.5254 19.8009 10.8413C19.7752 10.042 19.5713 9.25727 19.2028 8.5405C18.8343 7.82373 18.31 7.19166 17.6654 6.68722C17.2387 6.38353 16.887 5.99283 16.6354 5.54303C16.3839 5.09323 16.2386 4.59547 16.2102 4.08534C16.346 3.18283 16.8393 2.36595 17.5869 1.80591C17.8038 1.64618 17.9468 1.41065 17.9848 1.15024C18.0228 0.889843 17.9528 0.625512 17.79 0.414392C17.6271 0.203272 17.3845 0.062327 17.1146 0.0220596C16.8447 -0.0182078 16.5692 0.0454338 16.3476 0.199206C15.7342 0.651996 15.2221 1.21933 14.8418 1.86721C14.4616 2.5151 14.2211 3.2302 14.1348 3.9697C14.1349 4.77855 14.3269 5.5767 14.6959 6.30333C15.065 7.02996 15.6015 7.66592 16.2645 8.16274Z" fill="currentcolor"/>
    <path d="M7.16328 29.7138C5.86597 27.7051 5.17938 25.3866 5.18141 23.0212C5.18141 22.7558 5.07191 22.5013 4.87697 22.3136C4.68204 22.1259 4.41765 22.0205 4.14198 22.0205C3.8663 22.0205 3.60191 22.1259 3.40698 22.3136C3.21204 22.5013 3.10254 22.7558 3.10254 23.0212C3.10081 25.7653 3.89738 28.4551 5.40201 30.7857C5.55001 31.0072 5.78275 31.1637 6.04976 31.2211C6.31677 31.2784 6.59652 31.2322 6.82832 31.0923C7.06012 30.9524 7.22529 30.7301 7.288 30.4737C7.35071 30.2174 7.30588 29.9475 7.16328 29.7227V29.7138Z" fill="currentcolor"/>
    <path d="M9.06498 32.7103C8.94112 32.6482 8.84235 32.548 8.78434 32.4257C8.73082 32.3026 8.65227 32.1911 8.55334 32.0977C8.45441 32.0043 8.33708 31.9309 8.20825 31.8818C8.07942 31.8327 7.9417 31.8089 7.80317 31.8118C7.66464 31.8146 7.5281 31.8441 7.40159 31.8986C7.27508 31.953 7.16115 32.0312 7.06649 32.1286C6.97184 32.226 6.89837 32.3407 6.8504 32.4658C6.80244 32.591 6.78094 32.7241 6.78719 32.8574C6.79344 32.9906 6.8273 33.1213 6.88678 33.2418C7.13536 33.7758 7.56332 34.2136 8.10177 34.4849C8.34682 34.6079 8.63256 34.6321 8.89616 34.5523C9.15975 34.4724 9.37959 34.295 9.50732 34.0591C9.63505 33.8232 9.6602 33.5481 9.57725 33.2943C9.49429 33.0405 9.31003 32.8289 9.06498 32.7059V32.7103Z" fill="currentcolor"/>
    </g>
    <defs>
    <clipPath id="clip0_605_8664">
    <rect width="40" height="40" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `,
  drinks: `<svg width="28" height="39" viewBox="0 0 28 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_598_8203)">
    <path d="M0 0L0.662157 8.11078C0.662157 8.12619 0.653028 8.1394 0.653028 8.15481C0.658117 8.18851 0.664982 8.22193 0.673584 8.25496L3.1852 39H25.1048L28.0034 0H0ZM25.7932 1.98093L25.4085 7.16985C25.3982 7.16985 25.3902 7.16985 25.3799 7.16985H2.64519L2.22279 1.98642L25.7932 1.98093ZM23.1948 37.0191H5.08147L2.80846 9.14527H25.2612L23.1948 37.0191Z" fill="currentcolor"/>
    <path d="M6.24983 23.3122C6.28864 23.3122 6.32861 23.3122 6.364 23.3122C6.49825 23.2972 6.6281 23.2567 6.74613 23.1933C6.86415 23.1298 6.96804 23.0445 7.05181 22.9423C7.13559 22.8401 7.19762 22.7229 7.23436 22.5975C7.2711 22.4722 7.28181 22.341 7.26589 22.2117C7.0661 20.5444 6.86517 18.8155 6.66538 17.0855C6.4576 15.2861 6.24869 13.4846 6.03862 11.7502C5.99894 11.4962 5.85848 11.267 5.64686 11.111C5.43525 10.955 5.16904 10.8843 4.90438 10.9138C4.63973 10.9434 4.39731 11.0708 4.22831 11.2694C4.0593 11.4679 3.9769 11.722 3.9985 11.978C4.20628 13.7091 4.41522 15.5084 4.623 17.3056C4.82392 19.0378 5.02485 20.77 5.22578 22.4395C5.25574 22.6807 5.37661 22.9029 5.56542 23.0638C5.75424 23.2247 5.99781 23.3131 6.24983 23.3122Z" fill="currentcolor"/>
    <path d="M6.05485 24.414C5.9204 24.4288 5.79029 24.469 5.67201 24.5323C5.55372 24.5957 5.44958 24.6809 5.36557 24.7832C5.28156 24.8854 5.21933 25.0027 5.18245 25.1282C5.14557 25.2537 5.13477 25.385 5.15067 25.5145L5.31392 26.8857C5.34197 27.1276 5.46141 27.351 5.64945 27.5134C5.83748 27.6758 6.08096 27.7658 6.33341 27.7662C6.37223 27.7662 6.41105 27.7662 6.44759 27.7607C6.5817 27.7462 6.71152 27.7063 6.82966 27.6434C6.9478 27.5806 7.05194 27.4959 7.13612 27.3942C7.22029 27.2925 7.28287 27.1758 7.32027 27.0508C7.35766 26.9258 7.36913 26.7949 7.35404 26.6656L7.1908 25.2889C7.15839 25.0286 7.02114 24.791 6.80864 24.6273C6.59614 24.4636 6.32541 24.387 6.05485 24.414Z" fill="currentcolor"/>
    </g>
    <defs>
    <clipPath id="clip0_598_8203">
    <rect width="28" height="39" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `,
  snacks: `<svg width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M39.9739 12.3839H39.9673C39.8416 11.3068 39.529 10.2613 39.0441 9.29623C38.2937 7.89066 37.2396 6.67826 35.9616 5.75118C34.6837 4.82411 33.2156 4.20677 31.669 3.94605C31.658 3.94605 31.6471 3.94605 31.635 3.94605C29.7116 1.41671 26.4577 0.0219894 22.162 0.00292969C17.7851 0.0287164 14.3819 1.44362 12.4015 3.94605C12.3773 3.94605 12.3553 3.94605 12.3312 3.94605C10.7845 4.20721 9.31631 4.82484 8.03823 5.75207C6.76016 6.6793 5.70574 7.89174 4.95505 9.29734C4.47112 10.2623 4.15888 11.3074 4.03289 12.3839H4.02631C2.34137 14.0479 1.12087 16.1402 0.490328 18.4457C-0.140217 20.7512 -0.15805 23.1866 0.438675 25.5015C1.16762 28.1328 2.30494 29.6228 3.81991 29.9323C4.02143 29.975 4.22667 29.9968 4.43249 29.9973C5.03503 29.925 5.61546 29.722 6.13483 29.4017C6.6542 29.0815 7.1005 28.6516 7.44377 28.1407C8.13563 27.3077 8.96125 26.601 9.88529 26.0508C10.6588 25.658 11.4715 25.3513 12.3092 25.136C12.7407 25.007 13.2105 24.8624 13.7122 24.6875C14.2182 24.7717 14.7299 24.8148 15.2426 24.8164C16.5191 24.8132 17.7827 24.5561 18.963 24.0597C19.2243 24.1678 19.4915 24.2603 19.7633 24.3366C20.4624 24.5255 21.1737 24.6634 21.892 24.7492C21.9649 24.7584 22.0386 24.7584 22.1115 24.7492C22.8298 24.6634 23.5411 24.5255 24.2402 24.3366C24.5121 24.2602 24.7794 24.1674 25.0405 24.0585C26.6985 24.7663 28.5179 24.9843 30.2913 24.6875C30.7941 24.8568 31.2639 25.0014 31.6954 25.136C32.5326 25.3518 33.3449 25.6585 34.1182 26.0508C35.0422 26.6006 35.8675 27.3074 36.5586 28.1407C36.9021 28.6516 37.3486 29.0816 37.8682 29.4018C38.3877 29.722 38.9683 29.925 39.571 29.9973C39.7765 29.9968 39.9813 29.975 40.1825 29.9323C41.6986 29.6228 42.8359 28.1317 43.5648 25.5015C44.1604 23.1863 44.1418 20.7509 43.5107 18.4455C42.8796 16.1401 41.6588 14.0479 39.9739 12.3839ZM8.94886 24.276C7.83296 24.927 6.83512 25.7694 5.99906 26.7661C5.09447 27.7561 4.76074 28.07 4.20854 27.9568C3.49936 27.8111 2.83628 26.7459 2.34227 24.9543C1.92223 23.3112 1.86627 21.5932 2.17848 19.9252C2.4907 18.2572 3.16322 16.6814 4.14706 15.3124C4.29059 16.0686 4.52165 16.8048 4.83539 17.5054C6.01506 20.1182 8.00316 22.2624 10.4935 23.6078C9.96108 23.7857 9.44437 24.0092 8.94886 24.276ZM14.1514 22.7266C13.9962 22.6555 13.8256 22.6265 13.6562 22.6425C12.1235 22.2411 10.6976 21.4958 9.48221 20.461C8.26685 19.4261 7.2926 18.1277 6.63029 16.66C6.16216 15.6502 5.92631 14.5445 5.94077 13.4274C5.95523 12.3102 6.21962 11.2112 6.71373 10.2145C7.64306 8.45293 9.17618 7.10357 11.0193 6.42493C9.99726 9.36013 10.6472 13.6553 12.7165 17.6365C13.6785 19.5654 15.0132 21.2752 16.6401 22.6627C15.8195 22.8232 14.9787 22.8448 14.1514 22.7266ZM23.7451 22.3903C23.1716 22.5448 22.5889 22.6613 22.0007 22.7389C21.4117 22.6614 20.8283 22.5449 20.254 22.3903C18.2033 21.8521 16.0374 19.7219 14.462 16.6925C12.6704 13.2438 12.0469 9.47672 12.8834 7.09538C14.473 2.55356 19.9093 2.03223 22.1653 2.01765C25.4445 2.03783 29.66 2.93475 31.1157 7.09538C31.9501 9.4756 31.3353 13.2427 29.5393 16.6903C27.9628 19.7197 25.798 21.851 23.7451 22.3891V22.3903ZM27.3579 22.6649C28.9873 21.2782 30.3233 19.5673 31.2848 17.6365C33.353 13.6542 34.0019 9.36013 32.9798 6.42493C34.8231 7.1032 36.3564 8.45266 37.2854 10.2145C37.7798 11.2111 38.0446 12.31 38.0594 13.4271C38.0743 14.5442 37.8388 15.6501 37.371 16.66C36.7089 18.1267 35.7356 19.4246 34.5215 20.4595C33.3074 21.4945 31.883 22.2405 30.3517 22.6436C30.1773 22.6248 30.0013 22.6546 29.8423 22.73C29.0162 22.8474 28.1769 22.825 27.3579 22.6638V22.6649ZM41.6601 24.9555C41.165 26.7493 40.5009 27.8122 39.7939 27.9579C39.2516 28.07 38.9156 27.7595 38.0033 26.7673C37.1671 25.7707 36.1693 24.9284 35.0536 24.2772C34.5589 24.0089 34.0429 23.7839 33.5111 23.6045C36.0014 22.2591 37.9895 20.1148 39.1692 17.502C39.4825 16.8016 39.7135 16.0659 39.8575 15.3101C40.8408 16.6799 41.5127 18.2562 41.8245 19.9245C42.1364 21.5927 42.0802 23.311 41.6601 24.9543V24.9555Z" fill="currentColor"/>
    <path d="M17.3428 15.7782C16.1626 13.048 15.7674 10.0313 16.2032 7.08028C16.2231 6.94931 16.2174 6.81565 16.1867 6.68691C16.1559 6.55816 16.1006 6.43686 16.024 6.32994C15.9473 6.22302 15.8508 6.13257 15.7399 6.06375C15.629 5.99493 15.5059 5.94908 15.3777 5.92884C15.2495 5.90859 15.1186 5.91434 14.9925 5.94576C14.8665 5.97717 14.7477 6.03365 14.643 6.11194C14.5383 6.19023 14.4497 6.2888 14.3824 6.40205C14.315 6.5153 14.2701 6.641 14.2503 6.77197C13.7579 10.1061 14.2045 13.5144 15.538 16.5989C15.5889 16.7227 15.6636 16.8349 15.7575 16.9289C15.8515 17.0229 15.9628 17.0967 16.0851 17.1462C16.2074 17.1956 16.3381 17.2197 16.4695 17.2168C16.601 17.214 16.7306 17.1844 16.8507 17.1298C16.9709 17.0752 17.0791 16.9966 17.1691 16.8987C17.2591 16.8008 17.3291 16.6855 17.3749 16.5597C17.4208 16.4338 17.4415 16.2998 17.436 16.1656C17.4305 16.0315 17.3988 15.8997 17.3428 15.7782Z" fill="currentColor"/>
    <path d="M19.696 19.2067C19.2865 18.9533 18.9569 18.5852 18.7464 18.146C18.6921 18.023 18.6143 17.9124 18.5174 17.8206C18.4206 17.7288 18.3067 17.6578 18.1825 17.6118C18.0583 17.5658 17.9263 17.5456 17.7944 17.5526C17.6625 17.5596 17.5333 17.5935 17.4144 17.6524C17.2955 17.7112 17.1894 17.7939 17.1023 17.8953C17.0153 17.9968 16.949 18.1151 16.9075 18.2432C16.866 18.3712 16.85 18.5065 16.8606 18.641C16.8712 18.7755 16.908 18.9065 16.969 19.0262C17.3477 19.8156 17.9407 20.4772 18.6772 20.9321C18.7884 21.0004 18.9117 21.0457 19.0401 21.0654C19.1684 21.085 19.2993 21.0786 19.4253 21.0466C19.5512 21.0146 19.6698 20.9576 19.7741 20.8788C19.8785 20.8 19.9666 20.701 20.0335 20.5874C20.1004 20.4738 20.1448 20.3478 20.164 20.2168C20.1832 20.0857 20.177 19.952 20.1456 19.8234C20.1143 19.6947 20.0585 19.5737 19.9813 19.4671C19.9041 19.3605 19.8072 19.2705 19.696 19.2022V19.2067Z" fill="currentColor"/>
    </svg>
    `,
  meals: `<svg width="44" height="47" viewBox="0 0 44 47" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_598_8219)">
    <path d="M42.941 2.11595C42.7415 1.9851 42.4981 1.93888 42.2644 1.98745C42.0307 2.03602 41.8259 2.1754 41.695 2.37496L34.006 14.102C33.3796 13.6496 32.7178 13.2483 32.027 12.902C32.0551 12.8557 32.0786 12.8068 32.097 12.756L35.4431 1.14795C35.5094 0.91841 35.4818 0.671927 35.3663 0.46273C35.2509 0.253533 35.0571 0.098759 34.8275 0.0324549C34.598 -0.0338492 34.3515 -0.0062506 34.1423 0.109178C33.9331 0.224607 33.7783 0.41841 33.712 0.647954L30.382 12.202C28.8498 11.6558 27.2357 11.3751 25.609 11.372C23.5868 11.3208 21.5789 11.7248 19.7337 12.5541C17.8886 13.3834 16.2534 14.6167 14.949 16.163C13.472 15.5617 11.8698 15.3326 10.2834 15.4959C8.69704 15.6593 7.17511 16.21 5.85156 17.0996C4.528 17.9893 3.44339 19.1906 2.69314 20.5978C1.94289 22.0051 1.54999 23.5752 1.54904 25.17H0.900049C0.781014 25.1699 0.663159 25.1936 0.553309 25.2394C0.443459 25.2853 0.343801 25.3524 0.260096 25.4371C0.176391 25.5217 0.110305 25.6221 0.0656684 25.7325C0.0210317 25.8428 -0.00126705 25.9609 5.5571e-05 26.08C0.0892682 29.5951 1.16582 33.0142 3.10662 35.9464C5.04743 38.8786 7.77413 41.2054 10.975 42.661V45.147C10.975 45.3856 11.0699 45.6146 11.2386 45.7834C11.4074 45.9521 11.6364 46.047 11.8751 46.047H29.692C29.9307 46.047 30.1596 45.9521 30.3284 45.7834C30.4972 45.6146 30.592 45.3856 30.592 45.147V42.665C33.7927 41.2092 36.5191 38.8822 38.4597 35.9501C40.4004 33.018 41.4768 29.599 41.566 26.084C41.5674 25.9649 41.5451 25.8468 41.5004 25.7365C41.4558 25.6261 41.3897 25.5257 41.306 25.4411C41.2223 25.3565 41.1226 25.2893 41.0128 25.2434C40.9029 25.1976 40.7851 25.1739 40.666 25.174H39.976C39.82 21.3924 38.1759 17.8258 35.402 15.251L43.197 3.36196C43.3282 3.16274 43.3749 2.91961 43.3269 2.68598C43.2789 2.45235 43.1401 2.24733 42.941 2.11595ZM11.292 17.249C13.3949 17.2513 15.4113 18.0864 16.9 19.5716C18.3887 21.0568 19.2286 23.0711 19.236 25.174H18.476C18.4537 23.2835 17.6871 21.4779 16.3423 20.149C14.9976 18.82 13.1832 18.0747 11.2925 18.0747C9.4019 18.0747 7.58747 18.82 6.24273 20.149C4.89799 21.4779 4.13134 23.2835 4.10903 25.174H3.34905C3.35619 23.0712 4.1959 21.0569 5.68447 19.5717C7.17304 18.0865 9.18928 17.2513 11.292 17.249ZM30.46 25.174C30.3295 24.0738 29.829 23.0506 29.0406 22.2723C28.2521 21.494 27.2226 21.0067 26.1208 20.8904C25.019 20.7742 23.9104 21.0358 22.9769 21.6324C22.0433 22.2291 21.3403 23.1252 20.983 24.174C20.8976 23.3879 20.7156 22.6154 20.441 21.874C21.2275 20.8287 22.312 20.0461 23.5519 19.6292C24.7917 19.2124 26.1287 19.1807 27.3869 19.5384C28.6451 19.8962 29.7655 20.6265 30.6005 21.6334C31.4356 22.6402 31.9461 23.8763 32.065 25.179L30.46 25.174ZM28.66 25.174H22.555C22.6942 24.4666 23.0746 23.8296 23.6314 23.3717C24.1882 22.9138 24.8867 22.6634 25.6075 22.6634C26.3284 22.6634 27.0269 22.9138 27.5837 23.3717C28.1404 23.8296 28.5209 24.4666 28.66 25.174ZM33.8661 25.174C33.7524 23.5697 33.1734 22.0335 32.1999 20.7533C31.2265 19.4731 29.9008 18.5046 28.3853 17.9663C26.8698 17.428 25.2303 17.3434 23.6674 17.7227C22.1045 18.102 20.6862 18.9288 19.5861 20.102C19.3425 19.7013 19.0704 19.3187 18.772 18.957C19.6483 18.0285 20.7095 17.2942 21.8871 16.8014C23.0648 16.3086 24.3327 16.0683 25.609 16.096C28.0701 16.1 30.4374 17.0409 32.2298 18.7275C34.0222 20.414 35.1053 22.7196 35.259 25.176L33.8661 25.174ZM15.376 25.174C15.376 24.0911 14.9459 23.0525 14.1802 22.2868C13.4145 21.5211 12.3759 21.091 11.2931 21.091C10.2102 21.091 9.17165 21.5211 8.40594 22.2868C7.64023 23.0525 7.21005 24.0911 7.21005 25.174H5.91003C5.92931 23.7594 6.5048 22.4093 7.51193 21.4158C8.51906 20.4223 9.87684 19.8653 11.2915 19.8653C12.7062 19.8653 14.064 20.4223 15.0712 21.4158C16.0783 22.4093 16.6537 23.7594 16.673 25.174H15.376ZM13.576 25.174H9.01205C9.02455 24.5769 9.27051 24.0085 9.6972 23.5906C10.1239 23.1728 10.6973 22.9387 11.2945 22.9387C11.8918 22.9387 12.4652 23.1728 12.8919 23.5906C13.3186 24.0085 13.5646 24.5769 13.5771 25.174H13.576ZM12.7761 44.251V43.132H28.792V44.251H12.7761ZM29.136 41.332H12.436C9.52258 40.1406 6.99281 38.1712 5.12332 35.6389C3.25383 33.1066 2.11663 30.109 1.83605 26.974H39.7281C39.4482 30.1081 38.3122 33.1051 36.4441 35.6373C34.5761 38.1695 32.048 40.1395 29.136 41.332ZM38.178 25.174H37.0601C36.9048 22.2401 35.6312 19.4773 33.5013 17.4538C31.3713 15.4303 28.547 14.2998 25.609 14.295C24.0957 14.2643 22.5927 14.55 21.1962 15.1338C19.7996 15.7176 18.5404 16.5865 17.499 17.685C17.2087 17.4481 16.9052 17.2277 16.5901 17.025C17.7218 15.7645 19.1155 14.7668 20.6734 14.1017C22.2314 13.4367 23.9159 13.1204 25.609 13.175C28.8438 13.1792 31.9531 14.4275 34.2929 16.6611C36.6327 18.8948 38.0237 21.9428 38.178 25.174Z" fill="currentColor"/>
    <path d="M3.39209 30.1722C4.045 32.6025 5.31628 34.8222 7.08209 36.6152C7.16443 36.7021 7.26327 36.7717 7.37286 36.8199C7.48244 36.8682 7.60056 36.8941 7.72027 36.8961C7.83999 36.8981 7.95888 36.8762 8.07003 36.8317C8.18118 36.7872 8.28235 36.7209 8.36758 36.6368C8.45281 36.5528 8.52038 36.4525 8.56637 36.342C8.61237 36.2314 8.63585 36.1128 8.63543 35.9931C8.63501 35.8733 8.6107 35.7549 8.56393 35.6447C8.51716 35.5344 8.44888 35.4347 8.36306 35.3512C6.81633 33.7796 5.70257 31.8346 5.13006 29.7052C5.1013 29.589 5.04966 29.4797 4.97815 29.3837C4.90663 29.2878 4.81669 29.207 4.71359 29.1462C4.61049 29.0854 4.49631 29.0458 4.37771 29.0297C4.25912 29.0136 4.1385 29.0213 4.02291 29.0523C3.90733 29.0834 3.7991 29.1372 3.70456 29.2106C3.61001 29.284 3.53106 29.3755 3.47232 29.4798C3.41357 29.584 3.3762 29.699 3.36242 29.8179C3.34865 29.9368 3.35875 30.0572 3.39209 30.1722Z" fill="#323232"/>
    <path d="M10.5356 39.5502C10.7282 39.6767 10.962 39.7245 11.1889 39.6838C11.4157 39.643 11.6182 39.5168 11.7547 39.3312C11.8913 39.1456 11.9514 38.9146 11.9227 38.6859C11.8941 38.4573 11.7788 38.2483 11.6006 38.1022L10.3336 37.1752C10.1407 37.0392 9.90209 36.9844 9.66918 37.0226C9.43627 37.0609 9.2277 37.1891 9.08843 37.3797C8.94915 37.5702 8.89031 37.8079 8.92458 38.0414C8.95884 38.2749 9.08345 38.4857 9.27159 38.6282L10.5356 39.5502Z" fill="#323232"/>
    </g>
    <defs>
    <clipPath id="clip0_598_8219">
    <rect width="43.348" height="46.051" fill="white"/>
    </clipPath>
    </defs>
    </svg>`
};
var _CateringItemFiltersComponent = class _CateringItemFiltersComponent extends AsyncHandler {
  get start_of_date() {
    return startOfDay(addDays(this._state.getFilters().date, this.offset_day)).valueOf();
  }
  get min_offset() {
    return this.offset_day > 0 ? 0 : this._min_offset;
  }
  get step_interval() {
    return this._settings.get("app.catering.step_interval") || 5;
  }
  get max_offset() {
    const end = Math.min(endOfDay(addDays(this._state.getFilters().date, this.offset_day)).valueOf(), addMinutes(this._state.getFilters().date, this._state.getFilters().duration).valueOf());
    const diff = differenceInMinutes(end, this._state.getFilters().date);
    return Math.min(diff, Math.min(24 * 60 - 1, this._max_offset));
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  constructor(_state, _settings) {
    super();
    this._state = _state;
    this._settings = _settings;
    this.search = false;
    this.at_time = false;
    this.at_timeChange = new EventEmitter();
    this.offset = 0;
    this.offsetChange = new EventEmitter();
    this.offset_day = 0;
    this.offset_dayChange = new EventEmitter();
    this._min_offset = 0;
    this._max_offset = 60;
    this.icons = ICONS;
    this.filters = this._state.filters;
    this.setFilters = (f) => this._state.setFilters(f);
    this.categories = this._state.categories;
    this.caterers = this._state.caterers;
    this.exact_tooltip = "Deliver at exactly specified time. \nNote that changes to the booking will not be \nreflected in the order if this is set.";
    this.day_options = [];
  }
  ngOnInit() {
    this._min_offset = Math.max(this._settings.get("app.catering.min_offset"), 0);
    this.subscription("filters", this._state.filters.subscribe(() => {
      this._max_offset = Math.max(15, (this._state.getFilters().duration || 60) - this._settings.get("app.catering.end_offset"));
      this._updateDayOptions();
    }));
    this._updateDayOptions();
  }
  toggleCategory(name) {
    return __async(this, null, function* () {
      const { categories } = yield this.filters.pipe(take(1)).toPromise();
      if (categories.includes(name))
        this.setFilters({
          categories: categories.filter((_) => _ !== name)
        });
      else
        this.setFilters({ categories: [...categories, name] });
    });
  }
  toggleTag(tag) {
    return __async(this, null, function* () {
      const { tags } = yield this.filters.pipe(take(1)).toPromise();
      if (tags.includes(tag))
        this.setFilters({ tags: tags.filter((_) => _ !== tag) });
      else
        this.setFilters({ tags: [...tags, tag] });
    });
  }
  _updateDayOptions() {
    const { date, duration } = this._state.getFilters();
    if (duration <= 24 * 60)
      return this.day_options = [];
    let day = startOfDay(date);
    let count = 0;
    const end = endOfDay(addMinutes(date, duration)).valueOf();
    const options = [];
    while (day.valueOf() <= end) {
      options.push({ id: count, value: day.valueOf() });
      day = addDays(day, 1);
      count++;
    }
    this.day_options = options;
  }
};
_CateringItemFiltersComponent.\u0275fac = function CateringItemFiltersComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringItemFiltersComponent)(\u0275\u0275directiveInject(CateringOrderStateService), \u0275\u0275directiveInject(SettingsService));
};
_CateringItemFiltersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringItemFiltersComponent, selectors: [["catering-item-filters"]], inputs: { search: "search", at_time: "at_time", offset: "offset", offset_day: "offset_day" }, outputs: { at_timeChange: "at_timeChange", offsetChange: "offsetChange", offset_dayChange: "offset_dayChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 14, vars: 18, consts: () => {
  let i18n_0;
  if (false) {
    const MSG_EXTERNAL_637156553417356107$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_CATERING_ITEM_FILTERS_COMPONENT_TS_0 = goog.getMsg(" Options ");
    i18n_0 = MSG_EXTERNAL_637156553417356107$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_CATERING_ITEM_FILTERS_COMPONENT_TS_0;
  } else {
    i18n_0 = $localize`:␟07b96192315617e1c3c3f020fed4749eafda31eb␟637156553417356107: Options `;
  }
  let i18n_1;
  if (false) {
    const MSG_EXTERNAL_3888583854485349732$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_CATERING_ITEM_FILTERS_COMPONENT_TS_1 = goog.getMsg(" Catergories ");
    i18n_1 = MSG_EXTERNAL_3888583854485349732$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_CATERING_ITEM_FILTERS_COMPONENT_TS_1;
  } else {
    i18n_1 = $localize`:␟24300e769843b029b0346b3ea18e51e4e97a3502␟3888583854485349732: Catergories `;
  }
  return [i18n_0, i18n_1, [1, "px-4", "mt-3", "mb-2"], ["appearance", "outline", 1, "w-full", "h-14"], ["matPrefix", "", 1, "text-xl"], ["matInput", "", "placeholder", "Search menu...", 3, "ngModelChange", "ngModel"], ["class", "hidden sm:block px-2 py-2", 4, "ngIf"], ["class", "hidden sm:block font-medium px-2 py-2", 4, "ngIf"], ["class", "flex flex-col px-2", 4, "ngIf"], ["class", "hidden sm:block font-medium px-2 py-4", 4, "ngIf"], [1, "flex", "flex-col", "px-2", "space-y-4"], [3, "ngModel", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "hidden", "sm:block", "px-2", "py-2"], [3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "hidden", "sm:block", "font-medium", "px-2", "py-2"], [1, "flex", "flex-col", "px-2"], [3, "ngModelChange", "ngModel", "matTooltip"], [4, "ngIf"], [3, "ngModelChange", "ngModel", "time", "step", "min", "max", "use_24hr"], ["appearance", "outline", 1, "w-full", "no-subscript", "mb-4"], [1, "hidden", "sm:block", "font-medium", "px-2", "py-4"]];
}, template: function CateringItemFiltersComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "mat-form-field", 3)(2, "app-icon", 4);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 5);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275listener("ngModelChange", function CateringItemFiltersComponent_Template_input_ngModelChange_4_listener($event) {
      return ctx.setFilters({ search: $event });
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(6, CateringItemFiltersComponent_div_6_Template, 9, 8, "div", 6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275template(8, CateringItemFiltersComponent_h3_8_Template, 2, 0, "h3", 7)(9, CateringItemFiltersComponent_div_9_Template, 8, 11, "div", 8)(10, CateringItemFiltersComponent_h3_10_Template, 2, 0, "h3", 9);
    \u0275\u0275elementStart(11, "div", 10);
    \u0275\u0275template(12, CateringItemFiltersComponent_mat_checkbox_12_Template, 3, 5, "mat-checkbox", 11);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    \u0275\u0275classProp("sm:hidden", !ctx.search);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", (tmp_1_0 = \u0275\u0275pipeBind1(5, 12, ctx.filters)) == null ? null : tmp_1_0.search);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx.search && ((tmp_2_0 = \u0275\u0275pipeBind1(7, 14, ctx.caterers)) == null ? null : tmp_2_0.length) > 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx.search);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.search);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.search);
    \u0275\u0275advance();
    \u0275\u0275classProp("sm:hidden", ctx.search)("sm:pt-1", !ctx.search);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(13, 16, ctx.categories));
  }
}, dependencies: [NgForOf, NgIf, MatOption, MatCheckbox, MatTooltip, DefaultValueAccessor, NgControlStatus, NgModel, IconComponent, MatFormField, MatPrefix, MatSelect, MatInput, DurationFieldComponent, AsyncPipe, DatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  min-width: 16rem;\n}\n/*# sourceMappingURL=catering-item-filters.component.css.map */"] });
var CateringItemFiltersComponent = _CateringItemFiltersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringItemFiltersComponent, { className: "CateringItemFiltersComponent", filePath: "libs/catering/src/lib/catering-order-modal/catering-item-filters.component.ts", lineNumber: 168 });
})();

// libs/catering/src/lib/catering-order-modal/new-catering-order-modal.component.ts
function NewCateringOrderModalComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function NewCateringOrderModalComponent_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.displayed = null);
    });
    \u0275\u0275i18n(1, 4);
    \u0275\u0275elementEnd();
  }
}
var EMPTY_FAVS = [];
var _NewCateringOrderModalComponent = class _NewCateringOrderModalComponent {
  get favorites() {
    return this._settings.get("favourite_menu_items") || EMPTY_FAVS;
  }
  get selected_ids() {
    return this.selected.map((_) => _.custom_id).join(",");
  }
  get count() {
    return this.selected.reduce((t, i) => t + i.quantity, 0);
  }
  get code() {
    return this._org.currency_code;
  }
  constructor(_settings, _order, _org, _data) {
    this._settings = _settings;
    this._order = _order;
    this._org = _org;
    this._data = _data;
    this.displayed = null;
    this.selected = [...this._data.items || []];
    this.exact_time = this._data.exact_time ?? false;
    const { duration } = this._data.details;
    this._order.setFilters(this._data.details);
    this.offset = Math.min(Math.max(this._settings.get("app.catering.min_offset"), this._data.offset || 0), (duration || 60) - this._settings.get("app.catering.end_offset"));
    this.offset_day = this._data.offset_day || 0;
    if (this._data.caterer) {
      this._order.setFilters({ caterer: this._data.caterer });
    }
  }
  isSelected(id) {
    return id && this.selected_ids.includes(id);
  }
  setSelected(item, state2) {
    const list = this.selected.filter((_) => _.custom_id !== item.custom_id && (!item.caterer || item.caterer === _.caterer));
    if (state2) {
      const new_item = new CateringItem(__spreadProps(__spreadValues({}, item), { in_order: true }));
      list.push(new_item);
      this.displayed = new_item;
    }
    this.selected = list;
  }
  toggleFavourite(item) {
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(item.id);
    if (new_state) {
      this._settings.saveUserSetting("favourite_menu_items", [
        ...fav_list,
        item.id
      ]);
    } else {
      this._settings.saveUserSetting("favourite_menu_items", fav_list.filter((_) => _ !== item.id));
    }
  }
};
_NewCateringOrderModalComponent.\u0275fac = function NewCateringOrderModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewCateringOrderModalComponent)(\u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(CateringOrderStateService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
};
_NewCateringOrderModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewCateringOrderModalComponent, selectors: [["new-catering-order-modal"]], decls: 32, vars: 28, consts: () => {
  let i18n_0;
  if (false) {
    const MSG_EXTERNAL_2076287131803615740$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_NEW_CATERING_ORDER_MODAL_COMPONENT_TS_0 = goog.getMsg("Add Catering");
    i18n_0 = MSG_EXTERNAL_2076287131803615740$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_NEW_CATERING_ORDER_MODAL_COMPONENT_TS_0;
  } else {
    i18n_0 = $localize`:␟737cdc02079fb61b2944ecf62f908ab35efb2d5a␟2076287131803615740:Add Catering`;
  }
  let i18n_1;
  if (false) {
    const MSG_EXTERNAL_8443571736703532556$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_NEW_CATERING_ORDER_MODAL_COMPONENT_TS_1 = goog.getMsg(" View List ");
    i18n_1 = MSG_EXTERNAL_8443571736703532556$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_NEW_CATERING_ORDER_MODAL_COMPONENT_TS_1;
  } else {
    i18n_1 = $localize`:␟30d3439b0e0095fe69503245f3bd7a2e9498be7c␟8443571736703532556: View List `;
  }
  let i18n_2;
  if (false) {
    const MSG_EXTERNAL_819716823718458903$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_NEW_CATERING_ORDER_MODAL_COMPONENT_TS_2 = goog.getMsg("Back to form");
    i18n_2 = MSG_EXTERNAL_819716823718458903$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_NEW_CATERING_ORDER_MODAL_COMPONENT_TS_2;
  } else {
    i18n_2 = $localize`:␟18843b85d1a4f17fefafd07bc5cde636dca44295␟819716823718458903:Back to form`;
  }
  let i18n_3;
  if (false) {
    const MSG_EXTERNAL_4024487187516268099$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_NEW_CATERING_ORDER_MODAL_COMPONENT_TS_3 = goog.getMsg(" {$interpolation} items(s) added ", { "interpolation": "\uFFFD0\uFFFD" }, { original_code: { "interpolation": "{{ count }}" } });
    i18n_3 = MSG_EXTERNAL_4024487187516268099$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_NEW_CATERING_ORDER_MODAL_COMPONENT_TS_3;
  } else {
    i18n_3 = $localize`:␟523976668707aada89243171aa2abc1402656c5b␟4024487187516268099: ${"\uFFFD0\uFFFD"}:INTERPOLATION: items(s) added `;
  }
  let i18n_4;
  if (false) {
    const MSG_EXTERNAL_874721418273731876$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_NEW_CATERING_ORDER_MODAL_COMPONENT_TS_4 = goog.getMsg(" Back ");
    i18n_4 = MSG_EXTERNAL_874721418273731876$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_NEW_CATERING_ORDER_MODAL_COMPONENT_TS_4;
  } else {
    i18n_4 = $localize`:␟ccda1d41ca79703a85a3a598c1d97e040a32b766␟874721418273731876: Back `;
  }
  return [i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, [1, "w-[100vw]", "h-[100vh]", "sm:relative", "sm:w-auto", "sm:h-auto", "flex", "flex-col", "bg-base-100"], [1, "flex", "items-center", "space-x-4", "w-full"], ["icon", "", "matRipple", "", 1, "bg-neutral", 3, "mat-dialog-close"], [1, "flex-1", "flex", "items-center", "divide-x", "divide-base-200", "min-h-[65vh]", "h-[65vh]", "sm:max-h-[65vh]", "sm:max-w-[95vw]", "w-full", "overflow-hidden"], [1, "h-full", "hidden", "sm:block", "sm:max-w-[12rem]", "sm:h-[65vh]", "sm:max-h-full", 3, "at_timeChange", "offsetChange", "offset_dayChange", "at_time", "offset", "offset_day"], [1, "flex", "flex-col", "items-center", "flex-1", "w-1/2", "h-full", "sm:h-[65vh]"], [1, "w-full", "border-b", "border-base-200", 3, "search"], [1, "flex-1", "h-1/2", "w-full", "overflow-hidden", 3, "toggleFav", "onSelect", "active", "selected", "selected_items", "favorites"], [1, "h-full", "w-full", "sm:h-[65vh]", "absolute", "sm:relative", "sm:flex", "sm:max-w-[16rem]", "z-20", "bg-base-100", 3, "activeChange", "toggleFav", "close", "item", "active", "code", "fav"], [1, "flex", "sm:hidden", "flex-col-reverse", "items-center", "justify-end", "px-2", "pt-2", "pb-[5.5rem]", "border-t", "border-base-200", "w-full"], ["btn", "", "matRipple", "", "name", "catering-item-return", "class", "inverse sm:hidden w-full sm:w-auto", 3, "click", 4, "ngIf"], ["btn", "", "matRipple", "", "name", "save-catering-item", 1, "w-full", "sm:w-auto", "sm:mb-0", 3, "mat-dialog-close"], [1, "hidden", "sm:flex", "items-center", "justify-between", "p-2", "border-t", "border-base-200", "w-full"], ["btn", "", "matRipple", "", "name", "catering-item-return", 1, "clear", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center"], [1, "text-xl"], [1, "mr-1", "underline"], [1, "opacity-60", "text-sm"], ["btn", "", "matRipple", "", "name", "toggle-catering-item", 3, "click", "disabled"], [1, "mr-1"], ["btn", "", "matRipple", "", "name", "catering-item-return", 1, "inverse", "sm:hidden", "w-full", "sm:w-auto", 3, "click"]];
}, template: function NewCateringOrderModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "header", 6)(2, "button", 7)(3, "app-icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275i18n(6, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "main", 8)(8, "catering-item-filters", 9);
    \u0275\u0275twoWayListener("at_timeChange", function NewCateringOrderModalComponent_Template_catering_item_filters_at_timeChange_8_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.exact_time, $event) || (ctx.exact_time = $event);
      return $event;
    })("offsetChange", function NewCateringOrderModalComponent_Template_catering_item_filters_offsetChange_8_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.offset, $event) || (ctx.offset = $event);
      return $event;
    })("offset_dayChange", function NewCateringOrderModalComponent_Template_catering_item_filters_offset_dayChange_8_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.offset_day, $event) || (ctx.offset_day = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 10);
    \u0275\u0275element(10, "catering-item-filters", 11);
    \u0275\u0275elementStart(11, "catering-item-list", 12);
    \u0275\u0275listener("toggleFav", function NewCateringOrderModalComponent_Template_catering_item_list_toggleFav_11_listener($event) {
      return ctx.toggleFavourite($event);
    })("onSelect", function NewCateringOrderModalComponent_Template_catering_item_list_onSelect_11_listener($event) {
      return ctx.displayed = $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "catering-item-details", 13);
    \u0275\u0275listener("activeChange", function NewCateringOrderModalComponent_Template_catering_item_details_activeChange_12_listener($event) {
      return ctx.setSelected(ctx.displayed, $event);
    })("toggleFav", function NewCateringOrderModalComponent_Template_catering_item_details_toggleFav_12_listener() {
      return ctx.toggleFavourite(ctx.displayed);
    })("close", function NewCateringOrderModalComponent_Template_catering_item_details_close_12_listener() {
      return ctx.displayed = null;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "footer", 14);
    \u0275\u0275template(14, NewCateringOrderModalComponent_button_14_Template, 2, 0, "button", 15);
    \u0275\u0275elementStart(15, "button", 16);
    \u0275\u0275i18n(16, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "footer", 17)(18, "button", 18)(19, "div", 19)(20, "app-icon", 20);
    \u0275\u0275text(21, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 21);
    \u0275\u0275i18n(23, 2);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "p", 22);
    \u0275\u0275i18n(25, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 23);
    \u0275\u0275listener("click", function NewCateringOrderModalComponent_Template_button_click_26_listener() {
      return ctx.setSelected(ctx.displayed, !ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.custom_id));
    });
    \u0275\u0275elementStart(27, "div", 19)(28, "app-icon", 20);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 24);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("mat-dialog-close", ctx.selected);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("at_time", ctx.exact_time)("offset", ctx.offset)("offset_day", ctx.offset_day);
    \u0275\u0275advance(2);
    \u0275\u0275property("search", true);
    \u0275\u0275advance();
    \u0275\u0275property("active", ctx.displayed == null ? null : ctx.displayed.custom_id)("selected", ctx.selected_ids)("selected_items", ctx.selected)("favorites", ctx.favorites);
    \u0275\u0275advance();
    \u0275\u0275classProp("hidden", !ctx.displayed)("inset-0", ctx.displayed);
    \u0275\u0275property("item", ctx.displayed)("active", ctx.selected_ids.includes((ctx.displayed == null ? null : ctx.displayed.custom_id) || ""))("code", ctx.code)("fav", !!ctx.displayed && ctx.favorites.includes((ctx.displayed == null ? null : ctx.displayed.id) || ""));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.displayed);
    \u0275\u0275advance();
    \u0275\u0275classProp("mb-2", ctx.displayed);
    \u0275\u0275property("mat-dialog-close", ctx.selected);
    \u0275\u0275advance(3);
    \u0275\u0275property("mat-dialog-close", ctx.selected);
    \u0275\u0275advance(7);
    \u0275\u0275i18nExp(ctx.count);
    \u0275\u0275i18nApply(25);
    \u0275\u0275advance();
    \u0275\u0275classProp("inverse", ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.custom_id));
    \u0275\u0275property("disabled", !ctx.displayed);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.custom_id) ? "remove" : "add");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.custom_id) ? "Remove from Booking" : "Add to booking", " ");
  }
}, dependencies: [NgIf, MatDialogClose, IconComponent, MatRipple, CateringItemListComponent, CateringItemDetailsComponent, CateringItemFiltersComponent] });
var NewCateringOrderModalComponent = _NewCateringOrderModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewCateringOrderModalComponent, { className: "NewCateringOrderModalComponent", filePath: "libs/catering/src/lib/catering-order-modal/new-catering-order-modal.component.ts", lineNumber: 144 });
})();

// libs/catering/src/lib/catering-list-field.component.ts
function CateringListFieldComponent_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "app-icon");
    \u0275\u0275text(2, "priority_high");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matTooltip", ctx_r1.err_tooltip);
  }
}
function CateringListFieldComponent_div_1_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function CateringListFieldComponent_div_1_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const order_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.duplicateOrder(order_r4));
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "content_copy");
    \u0275\u0275elementEnd()();
  }
}
function CateringListFieldComponent_div_1_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function CateringListFieldComponent_div_1_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const order_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editOrder(order_r4));
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
  }
}
function CateringListFieldComponent_div_1_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function CateringListFieldComponent_div_1_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const order_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeOrder(order_r4));
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function CateringListFieldComponent_div_1_div_19_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matTooltip", ctx_r1.optionList(item_r8));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (item_r8.option_list == null ? null : item_r8.option_list.length) || "0", " option(s) ");
  }
}
function CateringListFieldComponent_div_1_div_19_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function CateringListFieldComponent_div_1_div_19_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const item_r8 = \u0275\u0275nextContext().$implicit;
      const order_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeOrderItem(order_r4, item_r8));
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function CateringListFieldComponent_div_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21);
    \u0275\u0275text(2);
    \u0275\u0275template(3, CateringListFieldComponent_div_1_div_19_span_3_Template, 2, 2, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 24);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, CateringListFieldComponent_div_1_div_19_button_9_Template, 3, 0, "button", 25);
    \u0275\u0275elementStart(10, "button", 26);
    \u0275\u0275listener("click", function CateringListFieldComponent_div_1_div_19_Template_button_click_10_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFavourite(item_r8));
    });
    \u0275\u0275elementStart(11, "app-icon");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r8.name || "Item", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r8.option_list == null ? null : item_r8.option_list.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" x", item_r8.quantity, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 9, item_r8.unit_price_with_options / 100, ctx_r1.currency_code), " ea ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.disabled);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-blue-400", ctx_r1.favorites.includes(item_r8.id));
    \u0275\u0275property("matTooltip", ctx_r1.favorites.includes(item_r8.id) ? "Remove from favourites" : "Add to favourites");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.favorites.includes(item_r8.id) ? "favorite" : "favorite_border");
  }
}
function CateringListFieldComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, CateringListFieldComponent_div_1_div_8_Template, 3, 1, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 9);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, CateringListFieldComponent_div_1_button_12_Template, 3, 0, "button", 10)(13, CateringListFieldComponent_div_1_button_13_Template, 3, 0, "button", 11)(14, CateringListFieldComponent_div_1_button_14_Template, 3, 0, "button", 12);
    \u0275\u0275elementStart(15, "button", 13);
    \u0275\u0275listener("click", function CateringListFieldComponent_div_1_Template_button_click_15_listener() {
      const order_r4 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show_order[order_r4.id] = !ctx_r1.show_order[order_r4.id]);
    });
    \u0275\u0275elementStart(16, "app-icon");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 14);
    \u0275\u0275template(19, CateringListFieldComponent_div_1_div_19_Template, 13, 12, "div", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("border-error", ctx_r1.end_time < order_r4.deliver_at)("border-base-300", ctx_r1.end_time >= order_r4.deliver_at);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" Order for ", \u0275\u0275pipeBind2(6, 16, order_r4.deliver_at_time, "mediumDate"), " at ", \u0275\u0275pipeBind2(7, 19, order_r4.deliver_at_time, ctx_r1.time_format), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.end_time < order_r4.deliver_at);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", order_r4.item_count, " item(s) for ", \u0275\u0275pipeBind2(11, 22, order_r4.total_cost / 100, ctx_r1.currency_code), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", ctx_r1.show_order[order_r4.id] ? "Hide order items" : "Show order items");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.show_order[order_r4.id] ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx_r1.show_order[order_r4.id] ? "show" : "hide");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", order_r4.items);
  }
}
var EMPTY_FAVS2 = [];
var _CateringListFieldComponent = class _CateringListFieldComponent {
  get favorites() {
    return this._settings.get("favourite_menu_items") || EMPTY_FAVS2;
  }
  get end_time() {
    const time = (this.options.date || Date.now()) + (this.options.duration || 30) * 60 * 1e3;
    return this.options.all_day ? endOfDay(time).valueOf() : time;
  }
  get time_format() {
    return this._settings.time_format || "shortTime";
  }
  get currency_code() {
    return this._org.building?.currency || "USD";
  }
  constructor(_settings, _org, _dialog) {
    this._settings = _settings;
    this._org = _org;
    this._dialog = _dialog;
    this.options = {};
    this.orders = [];
    this.show_order = {};
    this.disabled = false;
    this.err_tooltip = "Delivery time is outside of the event time.\nThis order will be ignored.";
    this.selected = [];
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (s) => this.disabled = s;
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.orders = new_value;
    if (this._onChange)
      this._onChange(this.orders);
  }
  ngOnChanges(changes) {
    if (changes.options) {
      this.orders = (this.orders || []).map((_) => new CateringOrder(__spreadProps(__spreadValues({}, _), { event: this.options })));
    }
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.orders = (value || []).map((_) => new CateringOrder(__spreadProps(__spreadValues({}, _), { event: this.options })));
  }
  removeOrder(order) {
    const updated_list = this.orders.filter((_) => _.id !== order.id);
    this.setValue(updated_list);
  }
  duplicateOrder(order) {
    const new_order = new CateringOrder(__spreadProps(__spreadValues({}, order), {
      id: `order-${randomString(8)}`
    }));
    this.setValue([...this.orders, new_order]);
  }
  removeOrderItem(order, item) {
    const new_order = new CateringOrder(__spreadProps(__spreadValues({}, order), {
      items: order.items.filter((_) => _.custom_id !== item.custom_id)
    }));
    const updated_list = this.orders.filter((_) => _.id !== order.id);
    if (new_order.items.length > 0) {
      this.setValue([...updated_list, new_order]);
    } else
      this.setValue(updated_list);
  }
  editOrder(order = new CateringOrder()) {
    const ref = this._dialog.open(NewCateringOrderModalComponent, {
      data: {
        caterer: order.items[0]?.caterer,
        items: order.items,
        details: __spreadProps(__spreadValues({}, this.options), {
          date: this.options.all_day ? startOfDay(this.options.date).valueOf() : this.options.date,
          duration: this.options.all_day ? Math.max(24 * 60, this.options.duration) : this.options.duration
        }),
        exact_time: !!order.deliver_time,
        offset: order.deliver_offset,
        offset_day: order.deliver_day_offset
      }
    });
    ref.afterClosed().subscribe((items) => {
      const orders = this.orders.filter((_) => _.id !== order.id);
      if (!items?.length)
        return;
      const time = new Date(this.options.date);
      for (const item of items) {
        item.options = [
          ...item.options.map((_) => __spreadValues({}, _))
        ];
        for (const option of item.options) {
          const opt = item.option_list.find((_) => _.id === option.id);
          option.active = !!opt;
        }
      }
      const new_order = new CateringOrder(__spreadProps(__spreadValues({}, order), {
        items,
        caterer: items[0].caterer,
        event: this.options,
        deliver_offset: ref.componentInstance.offset,
        deliver_time: ref.componentInstance.exact_time ? time.getHours() + time.getMinutes() / 60 : null,
        deliver_day_offset: ref.componentInstance.offset_day || 0
      }));
      if (new_order.item_count <= 0)
        return;
      this.setValue([...orders, new_order]);
    });
  }
  optionList(item) {
    return item.option_list?.map((_) => _.name).join("\n");
  }
  toggleFavourite(cateringitem) {
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(cateringitem.id);
    if (new_state) {
      this._settings.saveUserSetting("favourite_menu_items", [
        ...fav_list,
        cateringitem.id
      ]);
    } else {
      this._settings.saveUserSetting("favourite_menu_items", fav_list.filter((_) => _ !== cateringitem.id));
    }
  }
};
_CateringListFieldComponent.\u0275fac = function CateringListFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringListFieldComponent)(\u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(MatDialog));
};
_CateringListFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringListFieldComponent, selectors: [["catering-list-field"]], inputs: { options: "options" }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    /* istanbul ignore next */
    useExisting: forwardRef(() => _CateringListFieldComponent),
    multi: true
  }
]), \u0275\u0275NgOnChangesFeature], decls: 8, vars: 2, consts: [["list", "", 1, "space-y-2"], ["order", "", "class", "border shadow bg-base-100 rounded-xl overflow-hidden", 3, "border-error", "border-base-300", 4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", "name", "add-catering-item", 1, "w-full", "inverse", "mt-2", 3, "click", "disabled"], [1, "flex", "items-center", "justify-center", "space-x-2"], ["order", "", 1, "border", "shadow", "bg-base-100", "rounded-xl", "overflow-hidden"], [1, "flex", "items-center", "space-x-2", "p-4"], [1, "flex-1"], [1, "flex", "items-center", "space-x-4"], ["class", "flex items-center justify-center h-6 w-6 rounded-full bg-error text-error-content", 3, "matTooltip", 4, "ngIf"], [1, "text-xs", "opacity-60"], ["icon", "", "matRipple", "", "matTooltip", "Duplicate Order", 3, "click", 4, "ngIf"], ["icon", "", "matRipple", "", "matTooltip", "Edit Order", 3, "click", 4, "ngIf"], ["icon", "", "matRipple", "", "matTooltip", "Remove Order", "class", "text-error", 3, "click", 4, "ngIf"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "flex", "flex-col", "bg-base-200", "divide-y", "divide-base-100"], ["class", "flex items-center px-4 py-1 space-x-2 hover:opacity-90", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-center", "h-6", "w-6", "rounded-full", "bg-error", "text-error-content", 3, "matTooltip"], ["icon", "", "matRipple", "", "matTooltip", "Duplicate Order", 3, "click"], ["icon", "", "matRipple", "", "matTooltip", "Edit Order", 3, "click"], ["icon", "", "matRipple", "", "matTooltip", "Remove Order", 1, "text-error", 3, "click"], [1, "flex", "items-center", "px-4", "py-1", "space-x-2", "hover:opacity-90"], [1, "flex", "items-center", "flex-1"], ["class", "text-xs opacity-60 ml-4 font-normal", 3, "matTooltip", 4, "ngIf"], [1, "rounded", "bg-success", "text-success-content", "text-xs", "px-2", "py-1"], [1, "rounded", "bg-info", "text-info-content", "text-xs", "px-2", "py-1"], ["icon", "", "matRipple", "", "matTooltip", "Remove Order Item", "class", "text-error", 3, "click", 4, "ngIf"], ["icon", "", "matRipple", "", "name", "toggle-catering-item-favourite", 3, "click", "matTooltip"], [1, "text-xs", "opacity-60", "ml-4", "font-normal", 3, "matTooltip"], ["icon", "", "matRipple", "", "matTooltip", "Remove Order Item", 1, "text-error", 3, "click"]], template: function CateringListFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, CateringListFieldComponent_div_1_Template, 20, 25, "div", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 2);
    \u0275\u0275listener("click", function CateringListFieldComponent_Template_button_click_2_listener() {
      return ctx.editOrder();
    });
    \u0275\u0275elementStart(3, "div", 3)(4, "app-icon");
    \u0275\u0275text(5, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Add Order");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.orders);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.disabled);
  }
}, dependencies: [NgForOf, NgIf, MatTooltip, IconComponent, MatRipple, CurrencyPipe, DatePipe], data: { animation: [ANIMATION_SHOW_CONTRACT_EXPAND] } });
var CateringListFieldComponent = _CateringListFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringListFieldComponent, { className: "CateringListFieldComponent", filePath: "libs/catering/src/lib/catering-list-field.component.ts", lineNumber: 189 });
})();

// libs/catering/src/lib/charge-code-list-modal.component.ts
function ChargeCodeListModalComponent_main_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "mat-form-field", 7)(2, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function ChargeCodeListModalComponent_main_6_div_1_Template_input_ngModelChange_2_listener($event) {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.charge_codes[i_r2], $event) || (ctx_r2.charge_codes[i_r2] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 9);
    \u0275\u0275listener("click", function ChargeCodeListModalComponent_main_6_div_1_Template_button_click_3_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeCode(i_r2));
    });
    \u0275\u0275elementStart(4, "app-icon");
    \u0275\u0275text(5, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.charge_codes[i_r2]);
  }
}
function ChargeCodeListModalComponent_main_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 4);
    \u0275\u0275template(1, ChargeCodeListModalComponent_main_6_div_1_Template, 6, 1, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.charge_codes)("ngForTrackBy", ctx_r2.trackByFn);
  }
}
function ChargeCodeListModalComponent_footer_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 10)(1, "button", 11);
    \u0275\u0275text(2, " Import Codes ");
    \u0275\u0275elementStart(3, "input", 12);
    \u0275\u0275listener("change", function ChargeCodeListModalComponent_footer_7_Template_input_change_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addCodesFromFile($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 13);
    \u0275\u0275listener("click", function ChargeCodeListModalComponent_footer_7_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.newCode());
    });
    \u0275\u0275text(5, " Add Code ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 13);
    \u0275\u0275listener("click", function ChargeCodeListModalComponent_footer_7_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveChargeCodes());
    });
    \u0275\u0275text(7, " Save Changes ");
    \u0275\u0275elementEnd()();
  }
}
function ChargeCodeListModalComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 14);
    \u0275\u0275element(1, "mat-spinner", 15);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Saving changes to charge codes...");
    \u0275\u0275elementEnd()();
  }
}
var _ChargeCodeListModalComponent = class _ChargeCodeListModalComponent {
  constructor(_state, _dialog_ref) {
    this._state = _state;
    this._dialog_ref = _dialog_ref;
    this.charge_codes = [];
    this.loading = false;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.charge_codes = (yield this._state.charge_codes.pipe(take(1)).toPromise()) || [];
    });
  }
  newCode() {
    this.charge_codes.push("");
  }
  removeCode(index) {
    this.charge_codes.splice(index, 1);
  }
  /**
   * Load CSV file and populate the code list with the contents
   * @param event File input field event
   */
  addCodesFromFile(event) {
    if (event.target) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.addEventListener("load", (evt) => {
          const list = csvToJson(evt.srcElement.result) || [];
          for (const { code, description } of list) {
            this.charge_codes.push(code);
          }
          this.charge_codes = unique(this.charge_codes);
          event.target.value = "";
        });
        reader.addEventListener("error", (_) => notifyError("Error reading file."));
      }
    }
  }
  saveChargeCodes() {
    return __async(this, null, function* () {
      this.loading = true;
      const cleaned_codes = this.charge_codes.filter((_) => _ && _.trim());
      yield this._state.saveSettings({ charge_codes: cleaned_codes });
      this._dialog_ref.close();
    });
  }
  trackByFn(idx, item) {
    return idx;
  }
};
_ChargeCodeListModalComponent.\u0275fac = function ChargeCodeListModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ChargeCodeListModalComponent)(\u0275\u0275directiveInject(CateringStateService), \u0275\u0275directiveInject(MatDialogRef));
};
_ChargeCodeListModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChargeCodeListModalComponent, selectors: [["charge-code-list-modal"]], decls: 10, vars: 3, consts: [["load_state", ""], ["icon", "", "mat-dialog-close", ""], ["class", "overflow-auto max-h-[65vh] min-h-[20rem] flex flex-col", 4, "ngIf", "ngIfElse"], ["class", "flex items-center p-2 space-x-2 border-t border-base-200", 4, "ngIf"], [1, "overflow-auto", "max-h-[65vh]", "min-h-[20rem]", "flex", "flex-col"], ["class", "flex items-center space-x-2 w-full hover:bg-neutral px-2", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "flex", "items-center", "space-x-2", "w-full", "hover:bg-neutral", "px-2"], ["appearance", "outline", 1, "h-14", "flex-1"], ["matInput", "", "placeholder", "Charge Code", 3, "ngModelChange", "ngModel"], ["icon", "", 3, "click"], [1, "flex", "items-center", "p-2", "space-x-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", 1, "w-48", "inverse", "relative"], ["type", "file", 1, "opacity-0", "absolute", "inset-0", 3, "change"], ["btn", "", "matRipple", "", 1, "w-48", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "p-20", "space-y-2"], ["diameter", "32"]], template: function ChargeCodeListModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "h2");
    \u0275\u0275text(2, "Edit Charge Codes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 1)(4, "app-icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(6, ChargeCodeListModalComponent_main_6_Template, 2, 2, "main", 2)(7, ChargeCodeListModalComponent_footer_7_Template, 8, 0, "footer", 3)(8, ChargeCodeListModalComponent_ng_template_8_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const load_state_r5 = \u0275\u0275reference(9);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
  }
}, dependencies: [NgForOf, NgIf, MatDialogClose, DefaultValueAccessor, NgControlStatus, NgModel, IconComponent, MatFormField, MatRipple, MatInput, MatProgressSpinner] });
var ChargeCodeListModalComponent = _ChargeCodeListModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChargeCodeListModalComponent, { className: "ChargeCodeListModalComponent", filePath: "libs/catering/src/lib/charge-code-list-modal.component.ts", lineNumber: 70 });
})();

// libs/catering/src/lib/catering.module.ts
var _SharedCateringModule = class _SharedCateringModule {
};
_SharedCateringModule.\u0275fac = function SharedCateringModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SharedCateringModule)();
};
_SharedCateringModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SharedCateringModule });
_SharedCateringModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  MatMenuModule,
  MatTabsModule,
  MatAutocompleteModule,
  MatDialogModule,
  MatCheckboxModule,
  MatRadioModule,
  MatTooltipModule,
  FormsModule,
  ReactiveFormsModule,
  ComponentsModule,
  MatFormFieldModule,
  FormFieldsModule,
  MatProgressSpinnerModule,
  MatProgressBarModule
] });
var SharedCateringModule = _SharedCateringModule;

// apps/visitor-kiosk/src/app/checkin/checkin-preferences.component.ts
var _c09 = () => ["/welcome"];
function CheckinPreferencesComponent_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("value", item_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1.name, " ");
  }
}
var _CheckinPreferencesComponent = class _CheckinPreferencesComponent {
  constructor(_router, _checkin, _catering) {
    this._router = _router;
    this._checkin = _checkin;
    this._catering = _catering;
    this.menu = this._catering.menu.pipe(map((l) => {
      return l.filter((_) => _.tags.find((_2) => _2.toLowerCase() === "drink" || _2.toLowerCase() === "drinks" || _2.toLowerCase() === "beverage"));
    }));
  }
  update() {
    return __async(this, null, function* () {
      if (!this.beverage)
        return this.next();
      const event = yield this._checkin.event.pipe(first((_) => !!_)).toPromise();
      if (!event)
        return notifyError("Unable to load event data.");
      notifySuccess("Successfully update event.");
      this.next();
    });
  }
  next() {
    this._router.navigate(["/welcome"]);
  }
};
_CheckinPreferencesComponent.\u0275fac = function CheckinPreferencesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CheckinPreferencesComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(CheckinStateService), \u0275\u0275directiveInject(CateringStateService));
};
_CheckinPreferencesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinPreferencesComponent, selectors: [["checkin-preferences"]], decls: 15, vars: 12, consts: [[1, "bg-base-100", "rounded", "shadow", "overflow-hidden", "relative", "flex", "flex-col", "items-center", "w-[36rem]", "p-4"], [1, "text-xl", "mb-2", "w-full"], [1, "w-full"], ["appearance", "outline", 1, "w-full"], ["placeholder", "Select beverage", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["icon", "", "matRipple", "", 1, "absolute", "top-0", "right-0", 3, "routerLink"], [3, "value"]], template: function CheckinPreferencesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 2)(5, "mat-form-field", 3)(6, "mat-select", 4);
    \u0275\u0275twoWayListener("ngModelChange", function CheckinPreferencesComponent_Template_mat_select_ngModelChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.beverage, $event) || (ctx.beverage = $event);
      return $event;
    });
    \u0275\u0275template(7, CheckinPreferencesComponent_mat_option_7_Template, 2, 2, "mat-option", 5);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "button", 6);
    \u0275\u0275listener("click", function CheckinPreferencesComponent_Template_button_click_9_listener() {
      return ctx.update();
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 7)(13, "app-icon");
    \u0275\u0275text(14, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "VISITOR_KIOSK.BEVERAGE_MSG"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.beverage);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(8, 7, ctx.menu));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 9, ctx.beverage ? "VISITOR_KIOSK.SAVE" : "VISITOR_KIOSK.CONTINUE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(11, _c09));
  }
}, dependencies: [NgForOf, NgControlStatus, NgModel, IconComponent, MatOption, MatFormField, MatSelect, MatRipple, RouterLink, AsyncPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=checkin-preferences.component.css.map */"] });
var CheckinPreferencesComponent = _CheckinPreferencesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinPreferencesComponent, { className: "CheckinPreferencesComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkin-preferences.component.ts", lineNumber: 57 });
})();

// node_modules/qr-scanner/qr-scanner.min.js
var e = class _e {
  constructor(a, b, c, d, f) {
    this._legacyCanvasSize = _e.DEFAULT_CANVAS_SIZE;
    this._preferredCamera = "environment";
    this._maxScansPerSecond = 25;
    this._lastScanTimestamp = -1;
    this._destroyed = this._flashOn = this._paused = this._active = false;
    this.$video = a;
    this.$canvas = document.createElement("canvas");
    c && "object" === typeof c ? this._onDecode = b : (c || d || f ? console.warn("You're using a deprecated version of the QrScanner constructor which will be removed in the future") : console.warn("Note that the type of the scan result passed to onDecode will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true."), this._legacyOnDecode = b);
    b = "object" === typeof c ? c : {};
    this._onDecodeError = b.onDecodeError || ("function" === typeof c ? c : this._onDecodeError);
    this._calculateScanRegion = b.calculateScanRegion || ("function" === typeof d ? d : this._calculateScanRegion);
    this._preferredCamera = b.preferredCamera || f || this._preferredCamera;
    this._legacyCanvasSize = "number" === typeof c ? c : "number" === typeof d ? d : this._legacyCanvasSize;
    this._maxScansPerSecond = b.maxScansPerSecond || this._maxScansPerSecond;
    this._onPlay = this._onPlay.bind(this);
    this._onLoadedMetaData = this._onLoadedMetaData.bind(this);
    this._onVisibilityChange = this._onVisibilityChange.bind(this);
    this._updateOverlay = this._updateOverlay.bind(this);
    a.disablePictureInPicture = true;
    a.playsInline = true;
    a.muted = true;
    let h = false;
    a.hidden && (a.hidden = false, h = true);
    document.body.contains(a) || (document.body.appendChild(a), h = true);
    c = a.parentElement;
    if (b.highlightScanRegion || b.highlightCodeOutline) {
      d = !!b.overlay;
      this.$overlay = b.overlay || document.createElement("div");
      f = this.$overlay.style;
      f.position = "absolute";
      f.display = "none";
      f.pointerEvents = "none";
      this.$overlay.classList.add("scan-region-highlight");
      if (!d && b.highlightScanRegion) {
        this.$overlay.innerHTML = '<svg class="scan-region-highlight-svg" viewBox="0 0 238 238" preserveAspectRatio="none" style="position:absolute;width:100%;height:100%;left:0;top:0;fill:none;stroke:#e9b213;stroke-width:4;stroke-linecap:round;stroke-linejoin:round"><path d="M31 2H10a8 8 0 0 0-8 8v21M207 2h21a8 8 0 0 1 8 8v21m0 176v21a8 8 0 0 1-8 8h-21m-176 0H10a8 8 0 0 1-8-8v-21"/></svg>';
        try {
          this.$overlay.firstElementChild.animate({
            transform: ["scale(.98)", "scale(1.01)"]
          }, {
            duration: 400,
            iterations: Infinity,
            direction: "alternate",
            easing: "ease-in-out"
          });
        } catch (m) {
        }
        c.insertBefore(this.$overlay, this.$video.nextSibling);
      }
      b.highlightCodeOutline && (this.$overlay.insertAdjacentHTML("beforeend", '<svg class="code-outline-highlight" preserveAspectRatio="none" style="display:none;width:100%;height:100%;fill:none;stroke:#e9b213;stroke-width:5;stroke-dasharray:25;stroke-linecap:round;stroke-linejoin:round"><polygon/></svg>'), this.$codeOutlineHighlight = this.$overlay.lastElementChild);
    }
    this._scanRegion = this._calculateScanRegion(a);
    requestAnimationFrame(() => {
      let m = window.getComputedStyle(a);
      "none" === m.display && (a.style.setProperty("display", "block", "important"), h = true);
      "visible" !== m.visibility && (a.style.setProperty("visibility", "visible", "important"), h = true);
      h && (console.warn("QrScanner has overwritten the video hiding style to avoid Safari stopping the playback."), a.style.opacity = "0", a.style.width = "0", a.style.height = "0", this.$overlay && this.$overlay.parentElement && this.$overlay.parentElement.removeChild(this.$overlay), delete this.$overlay, delete this.$codeOutlineHighlight);
      this.$overlay && this._updateOverlay();
    });
    a.addEventListener("play", this._onPlay);
    a.addEventListener("loadedmetadata", this._onLoadedMetaData);
    document.addEventListener("visibilitychange", this._onVisibilityChange);
    window.addEventListener("resize", this._updateOverlay);
    this._qrEnginePromise = _e.createQrEngine();
  }
  static set WORKER_PATH(a) {
    console.warn("Setting QrScanner.WORKER_PATH is not required and not supported anymore. Have a look at the README for new setup instructions.");
  }
  static hasCamera() {
    return __async(this, null, function* () {
      try {
        return !!(yield _e.listCameras(false)).length;
      } catch (a) {
        return false;
      }
    });
  }
  static listCameras(a = false) {
    return __async(this, null, function* () {
      if (!navigator.mediaDevices) return [];
      let b = () => __async(this, null, function* () {
        return (yield navigator.mediaDevices.enumerateDevices()).filter((d) => "videoinput" === d.kind);
      }), c;
      try {
        a && (yield b()).every((d) => !d.label) && (c = yield navigator.mediaDevices.getUserMedia({
          audio: false,
          video: true
        }));
      } catch (d) {
      }
      try {
        return (yield b()).map((d, f) => ({
          id: d.deviceId,
          label: d.label || (0 === f ? "Default Camera" : `Camera ${f + 1}`)
        }));
      } finally {
        c && (console.warn("Call listCameras after successfully starting a QR scanner to avoid creating a temporary video stream"), _e._stopVideoStream(c));
      }
    });
  }
  hasFlash() {
    return __async(this, null, function* () {
      let a;
      try {
        if (this.$video.srcObject) {
          if (!(this.$video.srcObject instanceof MediaStream)) return false;
          a = this.$video.srcObject;
        } else a = (yield this._getCameraStream()).stream;
        return "torch" in a.getVideoTracks()[0].getSettings();
      } catch (b) {
        return false;
      } finally {
        a && a !== this.$video.srcObject && (console.warn("Call hasFlash after successfully starting the scanner to avoid creating a temporary video stream"), _e._stopVideoStream(a));
      }
    });
  }
  isFlashOn() {
    return this._flashOn;
  }
  toggleFlash() {
    return __async(this, null, function* () {
      this._flashOn ? yield this.turnFlashOff() : yield this.turnFlashOn();
    });
  }
  turnFlashOn() {
    return __async(this, null, function* () {
      if (!this._flashOn && !this._destroyed && (this._flashOn = true, this._active && !this._paused)) try {
        if (!(yield this.hasFlash())) throw "No flash available";
        yield this.$video.srcObject.getVideoTracks()[0].applyConstraints({
          advanced: [{
            torch: true
          }]
        });
      } catch (a) {
        throw this._flashOn = false, a;
      }
    });
  }
  turnFlashOff() {
    return __async(this, null, function* () {
      this._flashOn && (this._flashOn = false, yield this._restartVideoStream());
    });
  }
  destroy() {
    this.$video.removeEventListener("loadedmetadata", this._onLoadedMetaData);
    this.$video.removeEventListener("play", this._onPlay);
    document.removeEventListener("visibilitychange", this._onVisibilityChange);
    window.removeEventListener("resize", this._updateOverlay);
    this._destroyed = true;
    this._flashOn = false;
    this.stop();
    _e._postWorkerMessage(this._qrEnginePromise, "close");
  }
  start() {
    return __async(this, null, function* () {
      if (this._destroyed) throw Error("The QR scanner can not be started as it had been destroyed.");
      if (!this._active || this._paused) {
        if ("https:" !== window.location.protocol && console.warn("The camera stream is only accessible if the page is transferred via https."), this._active = true, !document.hidden) if (this._paused = false, this.$video.srcObject) yield this.$video.play();
        else try {
          let {
            stream: a,
            facingMode: b
          } = yield this._getCameraStream();
          !this._active || this._paused ? _e._stopVideoStream(a) : (this._setVideoMirror(b), this.$video.srcObject = a, yield this.$video.play(), this._flashOn && (this._flashOn = false, this.turnFlashOn().catch(() => {
          })));
        } catch (a) {
          if (!this._paused) throw this._active = false, a;
        }
      }
    });
  }
  stop() {
    this.pause();
    this._active = false;
  }
  pause(a = false) {
    return __async(this, null, function* () {
      this._paused = true;
      if (!this._active) return true;
      this.$video.pause();
      this.$overlay && (this.$overlay.style.display = "none");
      let b = () => {
        this.$video.srcObject instanceof MediaStream && (_e._stopVideoStream(this.$video.srcObject), this.$video.srcObject = null);
      };
      if (a) return b(), true;
      yield new Promise((c) => setTimeout(c, 300));
      if (!this._paused) return false;
      b();
      return true;
    });
  }
  setCamera(a) {
    return __async(this, null, function* () {
      a !== this._preferredCamera && (this._preferredCamera = a, yield this._restartVideoStream());
    });
  }
  static scanImage(a, b, c, d, f = false, h = false) {
    return __async(this, null, function* () {
      let m, n = false;
      b && ("scanRegion" in b || "qrEngine" in b || "canvas" in b || "disallowCanvasResizing" in b || "alsoTryWithoutScanRegion" in b || "returnDetailedScanResult" in b) ? (m = b.scanRegion, c = b.qrEngine, d = b.canvas, f = b.disallowCanvasResizing || false, h = b.alsoTryWithoutScanRegion || false, n = true) : b || c || d || f || h ? console.warn("You're using a deprecated api for scanImage which will be removed in the future.") : console.warn("Note that the return type of scanImage will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true.");
      b = !!c;
      try {
        let p, k;
        [c, p] = yield Promise.all([c || _e.createQrEngine(), _e._loadImage(a)]);
        [d, k] = _e._drawToCanvas(p, m, d, f);
        let q;
        if (c instanceof Worker) {
          let g = c;
          b || _e._postWorkerMessageSync(g, "inversionMode", "both");
          q = yield new Promise((l, v) => {
            let w, u, r, y = -1;
            u = (t) => {
              t.data.id === y && (g.removeEventListener("message", u), g.removeEventListener("error", r), clearTimeout(w), null !== t.data.data ? l({
                data: t.data.data,
                cornerPoints: _e._convertPoints(t.data.cornerPoints, m)
              }) : v(_e.NO_QR_CODE_FOUND));
            };
            r = (t) => {
              g.removeEventListener("message", u);
              g.removeEventListener("error", r);
              clearTimeout(w);
              v("Scanner error: " + (t ? t.message || t : "Unknown Error"));
            };
            g.addEventListener("message", u);
            g.addEventListener("error", r);
            w = setTimeout(() => r("timeout"), 1e4);
            let x = k.getImageData(0, 0, d.width, d.height);
            y = _e._postWorkerMessageSync(g, "decode", x, [x.data.buffer]);
          });
        } else q = yield Promise.race([new Promise((g, l) => window.setTimeout(() => l("Scanner error: timeout"), 1e4)), (() => __async(this, null, function* () {
          try {
            var [g] = yield c.detect(d);
            if (!g) throw _e.NO_QR_CODE_FOUND;
            return {
              data: g.rawValue,
              cornerPoints: _e._convertPoints(g.cornerPoints, m)
            };
          } catch (l) {
            g = l.message || l;
            if (/not implemented|service unavailable/.test(g)) return _e._disableBarcodeDetector = true, _e.scanImage(a, {
              scanRegion: m,
              canvas: d,
              disallowCanvasResizing: f,
              alsoTryWithoutScanRegion: h
            });
            throw `Scanner error: ${g}`;
          }
        }))()]);
        return n ? q : q.data;
      } catch (p) {
        if (!m || !h) throw p;
        let k = yield _e.scanImage(a, {
          qrEngine: c,
          canvas: d,
          disallowCanvasResizing: f
        });
        return n ? k : k.data;
      } finally {
        b || _e._postWorkerMessage(c, "close");
      }
    });
  }
  setGrayscaleWeights(a, b, c, d = true) {
    _e._postWorkerMessage(this._qrEnginePromise, "grayscaleWeights", {
      red: a,
      green: b,
      blue: c,
      useIntegerApproximation: d
    });
  }
  setInversionMode(a) {
    _e._postWorkerMessage(this._qrEnginePromise, "inversionMode", a);
  }
  static createQrEngine(a) {
    return __async(this, null, function* () {
      a && console.warn("Specifying a worker path is not required and not supported anymore.");
      a = () => import("./qr-scanner-worker.min-H3WCJTOX.js").then((c) => c.createWorker());
      if (!(!_e._disableBarcodeDetector && "BarcodeDetector" in window && BarcodeDetector.getSupportedFormats && (yield BarcodeDetector.getSupportedFormats()).includes("qr_code"))) return a();
      let b = navigator.userAgentData;
      return b && b.brands.some(({
        brand: c
      }) => /Chromium/i.test(c)) && /mac ?OS/i.test(b.platform) && (yield b.getHighEntropyValues(["architecture", "platformVersion"]).then(({
        architecture: c,
        platformVersion: d
      }) => /arm/i.test(c || "arm") && 13 <= parseInt(d || "13")).catch(() => true)) ? a() : new BarcodeDetector({
        formats: ["qr_code"]
      });
    });
  }
  _onPlay() {
    this._scanRegion = this._calculateScanRegion(this.$video);
    this._updateOverlay();
    this.$overlay && (this.$overlay.style.display = "");
    this._scanFrame();
  }
  _onLoadedMetaData() {
    this._scanRegion = this._calculateScanRegion(this.$video);
    this._updateOverlay();
  }
  _onVisibilityChange() {
    document.hidden ? this.pause() : this._active && this.start();
  }
  _calculateScanRegion(a) {
    let b = Math.round(2 / 3 * Math.min(a.videoWidth, a.videoHeight));
    return {
      x: Math.round((a.videoWidth - b) / 2),
      y: Math.round((a.videoHeight - b) / 2),
      width: b,
      height: b,
      downScaledWidth: this._legacyCanvasSize,
      downScaledHeight: this._legacyCanvasSize
    };
  }
  _updateOverlay() {
    requestAnimationFrame(() => {
      if (this.$overlay) {
        var a = this.$video, b = a.videoWidth, c = a.videoHeight, d = a.offsetWidth, f = a.offsetHeight, h = a.offsetLeft, m = a.offsetTop, n = window.getComputedStyle(a), p = n.objectFit, k = b / c, q = d / f;
        switch (p) {
          case "none":
            var g = b;
            var l = c;
            break;
          case "fill":
            g = d;
            l = f;
            break;
          default:
            ("cover" === p ? k > q : k < q) ? (l = f, g = l * k) : (g = d, l = g / k), "scale-down" === p && (g = Math.min(g, b), l = Math.min(l, c));
        }
        var [v, w] = n.objectPosition.split(" ").map((r, y) => {
          const x = parseFloat(r);
          return r.endsWith("%") ? (y ? f - l : d - g) * x / 100 : x;
        });
        n = this._scanRegion.width || b;
        q = this._scanRegion.height || c;
        p = this._scanRegion.x || 0;
        var u = this._scanRegion.y || 0;
        k = this.$overlay.style;
        k.width = `${n / b * g}px`;
        k.height = `${q / c * l}px`;
        k.top = `${m + w + u / c * l}px`;
        c = /scaleX\(-1\)/.test(a.style.transform);
        k.left = `${h + (c ? d - v - g : v) + (c ? b - p - n : p) / b * g}px`;
        k.transform = a.style.transform;
      }
    });
  }
  static _convertPoints(a, b) {
    if (!b) return a;
    let c = b.x || 0, d = b.y || 0, f = b.width && b.downScaledWidth ? b.width / b.downScaledWidth : 1;
    b = b.height && b.downScaledHeight ? b.height / b.downScaledHeight : 1;
    for (let h of a) h.x = h.x * f + c, h.y = h.y * b + d;
    return a;
  }
  _scanFrame() {
    !this._active || this.$video.paused || this.$video.ended || ("requestVideoFrameCallback" in this.$video ? this.$video.requestVideoFrameCallback.bind(this.$video) : requestAnimationFrame)(() => __async(this, null, function* () {
      if (!(1 >= this.$video.readyState)) {
        var a = Date.now() - this._lastScanTimestamp, b = 1e3 / this._maxScansPerSecond;
        a < b && (yield new Promise((d) => setTimeout(d, b - a)));
        this._lastScanTimestamp = Date.now();
        try {
          var c = yield _e.scanImage(this.$video, {
            scanRegion: this._scanRegion,
            qrEngine: this._qrEnginePromise,
            canvas: this.$canvas
          });
        } catch (d) {
          if (!this._active) return;
          this._onDecodeError(d);
        }
        !_e._disableBarcodeDetector || (yield this._qrEnginePromise) instanceof Worker || (this._qrEnginePromise = _e.createQrEngine());
        c ? (this._onDecode ? this._onDecode(c) : this._legacyOnDecode && this._legacyOnDecode(c.data), this.$codeOutlineHighlight && (clearTimeout(this._codeOutlineHighlightRemovalTimeout), this._codeOutlineHighlightRemovalTimeout = void 0, this.$codeOutlineHighlight.setAttribute("viewBox", `${this._scanRegion.x || 0} ${this._scanRegion.y || 0} ${this._scanRegion.width || this.$video.videoWidth} ${this._scanRegion.height || this.$video.videoHeight}`), this.$codeOutlineHighlight.firstElementChild.setAttribute("points", c.cornerPoints.map(({
          x: d,
          y: f
        }) => `${d},${f}`).join(" ")), this.$codeOutlineHighlight.style.display = "")) : this.$codeOutlineHighlight && !this._codeOutlineHighlightRemovalTimeout && (this._codeOutlineHighlightRemovalTimeout = setTimeout(() => this.$codeOutlineHighlight.style.display = "none", 100));
      }
      this._scanFrame();
    }));
  }
  _onDecodeError(a) {
    a !== _e.NO_QR_CODE_FOUND && console.log(a);
  }
  _getCameraStream() {
    return __async(this, null, function* () {
      if (!navigator.mediaDevices) throw "Camera not found.";
      let a = /^(environment|user)$/.test(this._preferredCamera) ? "facingMode" : "deviceId", b = [{
        width: {
          min: 1024
        }
      }, {
        width: {
          min: 768
        }
      }, {}], c = b.map((d) => Object.assign({}, d, {
        [a]: {
          exact: this._preferredCamera
        }
      }));
      for (let d of [...c, ...b]) try {
        let f = yield navigator.mediaDevices.getUserMedia({
          video: d,
          audio: false
        }), h = this._getFacingMode(f) || (d.facingMode ? this._preferredCamera : "environment" === this._preferredCamera ? "user" : "environment");
        return {
          stream: f,
          facingMode: h
        };
      } catch (f) {
      }
      throw "Camera not found.";
    });
  }
  _restartVideoStream() {
    return __async(this, null, function* () {
      let a = this._paused;
      (yield this.pause(true)) && !a && this._active && (yield this.start());
    });
  }
  static _stopVideoStream(a) {
    for (let b of a.getTracks()) b.stop(), a.removeTrack(b);
  }
  _setVideoMirror(a) {
    this.$video.style.transform = "scaleX(" + ("user" === a ? -1 : 1) + ")";
  }
  _getFacingMode(a) {
    return (a = a.getVideoTracks()[0]) ? /rear|back|environment/i.test(a.label) ? "environment" : /front|user|face/i.test(a.label) ? "user" : null : null;
  }
  static _drawToCanvas(a, b, c, d = false) {
    c = c || document.createElement("canvas");
    let f = b && b.x ? b.x : 0, h = b && b.y ? b.y : 0, m = b && b.width ? b.width : a.videoWidth || a.width, n = b && b.height ? b.height : a.videoHeight || a.height;
    d || (d = b && b.downScaledWidth ? b.downScaledWidth : m, b = b && b.downScaledHeight ? b.downScaledHeight : n, c.width !== d && (c.width = d), c.height !== b && (c.height = b));
    b = c.getContext("2d", {
      alpha: false
    });
    b.imageSmoothingEnabled = false;
    b.drawImage(a, f, h, m, n, 0, 0, c.width, c.height);
    return [c, b];
  }
  static _loadImage(a) {
    return __async(this, null, function* () {
      if (a instanceof Image) return yield _e._awaitImageLoad(a), a;
      if (a instanceof HTMLVideoElement || a instanceof HTMLCanvasElement || a instanceof SVGImageElement || "OffscreenCanvas" in window && a instanceof OffscreenCanvas || "ImageBitmap" in window && a instanceof ImageBitmap) return a;
      if (a instanceof File || a instanceof Blob || a instanceof URL || "string" === typeof a) {
        let b = new Image();
        b.src = a instanceof File || a instanceof Blob ? URL.createObjectURL(a) : a.toString();
        try {
          return yield _e._awaitImageLoad(b), b;
        } finally {
          (a instanceof File || a instanceof Blob) && URL.revokeObjectURL(b.src);
        }
      } else throw "Unsupported image type.";
    });
  }
  static _awaitImageLoad(a) {
    return __async(this, null, function* () {
      a.complete && 0 !== a.naturalWidth || (yield new Promise((b, c) => {
        let d = (f) => {
          a.removeEventListener("load", d);
          a.removeEventListener("error", d);
          f instanceof ErrorEvent ? c("Image load error") : b();
        };
        a.addEventListener("load", d);
        a.addEventListener("error", d);
      }));
    });
  }
  static _postWorkerMessage(a, b, c, d) {
    return __async(this, null, function* () {
      return _e._postWorkerMessageSync(yield a, b, c, d);
    });
  }
  static _postWorkerMessageSync(a, b, c, d) {
    if (!(a instanceof Worker)) return -1;
    let f = _e._workerMessageId++;
    a.postMessage({
      id: f,
      type: b,
      data: c
    }, d);
    return f;
  }
};
e.DEFAULT_CANVAS_SIZE = 400;
e.NO_QR_CODE_FOUND = "No QR code found";
e._disableBarcodeDetector = false;
e._workerMessageId = 0;
var qr_scanner_min_default = e;

// apps/visitor-kiosk/src/app/checkin/checkin-qr-scan.component.ts
var _c010 = ["video"];
var _c15 = ["checkin-qr-scan", ""];
var _c24 = () => ["/welcome"];
var _CheckinQRScanComponent = class _CheckinQRScanComponent extends AsyncHandler {
  get is_induction_enabled() {
    return this._settings.get("app.induction_enabled") && this._settings.get("app.induction_details");
  }
  get induction_after_details() {
    return this._settings.get("app.induction_after_details");
  }
  constructor(_checkin, _router, _settings) {
    super();
    this._checkin = _checkin;
    this._router = _router;
    this._settings = _settings;
    this.checking_code = false;
  }
  ngAfterViewInit() {
    this.setupQRReader();
  }
  ngOnDestroy() {
    if (this._video_el.nativeElement.srcObject) {
      this._video_el.nativeElement.srcObject.getTracks().forEach((track) => track?.stop());
    }
    this._reader?.stop();
  }
  checkQRCode(raw_text) {
    return __async(this, null, function* () {
      if (this.checking_code)
        return;
      this.timeout("check_qr_code", () => __async(this, null, function* () {
        this._reader?.stop();
        this.checking_code = true;
        const chunks = raw_text.split(",");
        let [visit_block, system_id, event_id, host_email] = chunks;
        const [_, visitor_email] = visit_block.split(":");
        if (!visitor_email && !event_id) {
          notifyError("Invalid QRCode");
          this.setupQRReader();
          this.checking_code = false;
          return;
        }
        if (!/^\d+$/.test(event_id))
          event_id = void 0;
        yield this._checkin.loadGuestAndEvent(visitor_email, event_id).catch((err) => {
          this.handleError(err.message || err);
          this.checking_code = false;
          throw err;
        });
        const event = yield this._checkin.event.pipe(take(1)).toPromise();
        if (event.rejected) {
          this.handleError("Your meeting has been rejected.");
          this.checking_code = false;
          return;
        }
        if (event.checked_out_at) {
          this.handleError("Your meeting has already finished.");
          this.checking_code = false;
          return;
        }
        if (this.is_induction_enabled && event?.induction !== "accepted") {
          this._router.navigate(["/checkin", "induction"]);
        } else {
          this._router.navigate(["/checkin", "details"]);
        }
        this.checking_code = false;
      }));
    });
  }
  checkEmail(email) {
    return __async(this, null, function* () {
      if (!email || !email.includes("@") || email.length < 5)
        return;
      yield this._checkin.loadGuestAndEvent(email).catch((err) => {
        this.handleError("Unable to find visitor or a meeting associated with the given email address.");
        throw err;
      });
      const event = yield this._checkin.event.pipe(take(1)).toPromise();
      if (event.checked_out_at) {
        this.handleError("Your meeting has already finished.");
        this.checking_code = false;
        return;
      }
      if (event.induction !== "accepted" && this.is_induction_enabled && !this.induction_after_details) {
        this._router.navigate(["/checkin", "induction"]);
      } else {
        this._router.navigate(["/checkin", "details"]);
      }
    });
  }
  setupQRReader() {
    this.timeout("setup_qr_reader", () => {
      if (!this._video_el?.nativeElement)
        return this.setupQRReader();
      if (navigator.mediaDevices?.getUserMedia && !this._video_el.nativeElement.srcObject) {
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => this._video_el.nativeElement.srcObject = stream).catch((e2) => console.error("Unable to fetch media devices!", e2));
      }
      if (!qr_scanner_min_default)
        return;
      this._reader = new qr_scanner_min_default(this._video_el.nativeElement, (r) => this.checkQRCode(r.data), {});
      this._reader.start();
    });
  }
  handleError(message) {
    this._checkin.setError(message?.statusText || message);
    this._router.navigate(["/checkin", "error"]);
  }
};
_CheckinQRScanComponent.\u0275fac = function CheckinQRScanComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CheckinQRScanComponent)(\u0275\u0275directiveInject(CheckinStateService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SettingsService));
};
_CheckinQRScanComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinQRScanComponent, selectors: [["", "checkin-qr-scan", ""]], viewQuery: function CheckinQRScanComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c010, 7);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._video_el = _t.first);
  }
}, features: [\u0275\u0275InheritDefinitionFeature], attrs: _c15, decls: 30, vars: 22, consts: [["video", ""], [1, "bg-base-100", "rounded", "shadow", "overflow-hidden", "relative", "flex", "flex-col", "items-center", "w-[36rem]", "p-4"], [1, "my-4"], [1, "flex", "items-center", "space-x-2", "w-full"], ["appearance", "outline", 1, "w-px", "flex-1", "no-subscript"], ["matInput", "", "placeholder", "Enter email...", "type", "email", "autocomplete", "off", 3, "ngModelChange", "blur", "keyup.enter", "ngModel"], ["btn", "", "matRipple", "", 3, "click"], [1, "relative", "rounded", "mt-4", "bg-base-200", "border", "border-base-200", "overflow-hidden"], [1, "absolute", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", "opacity-30", "flex", "flex-col", "items-center", "space-y-2", "z-0"], [1, "text-6xl"], [1, "text-center"], ["id", "qr-stream", "playsinline", "", "width", "640", "height", "480", "autoplay", "", 1, "object-cover", "relative", "z-10"], ["icon", "", "matRipple", "", 1, "absolute", "top-0", "right-0", 3, "routerLink"], [1, "bg-base-100", "rounded", "shadow", "overflow-hidden", "relative", "flex", "flex-col", "items-center", "p-16"], ["diameter", "32"]], template: function CheckinQRScanComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "p", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "mat-form-field", 4)(6, "input", 5);
    \u0275\u0275twoWayListener("ngModelChange", function CheckinQRScanComponent_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function CheckinQRScanComponent_Template_input_blur_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.checkEmail(ctx.email));
    })("keyup.enter", function CheckinQRScanComponent_Template_input_keyup_enter_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.checkEmail(ctx.email));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 6);
    \u0275\u0275listener("click", function CheckinQRScanComponent_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.checkEmail(ctx.email));
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 7)(14, "div", 8)(15, "app-icon", 9);
    \u0275\u0275text(16, "videocam_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 10);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "video", 11, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "a", 12)(23, "app-icon");
    \u0275\u0275text(24, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 13);
    \u0275\u0275element(26, "mat-spinner", 14);
    \u0275\u0275elementStart(27, "p", 2);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275classProp("hidden", ctx.checking_code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 11, "VISITOR_KIOSK.QR_CODE_MSG"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 13, "VISITOR_KIOSK.INVALID_EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 15, "VISITOR_KIOSK.FIND_DETAILS"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 17, "VISITOR_KIOSK.CAMERA_UNAVAILABLE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(21, _c24));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("hidden", !ctx.checking_code);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 19, "VISITOR_KIOSK.LOADING_DETAILS"), " ");
  }
}, dependencies: [DefaultValueAccessor, NgControlStatus, NgModel, IconComponent, MatFormField, MatError, MatRipple, MatInput, MatProgressSpinner, RouterLink, TranslatePipe], styles: ["\n\nvideo[_ngcontent-%COMP%] {\n  width: 34rem;\n  height: 24rem;\n}\na[_ngcontent-%COMP%] {\n  position: absolute;\n}\n/*# sourceMappingURL=checkin-qr-scan.component.css.map */"] });
var CheckinQRScanComponent = _CheckinQRScanComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinQRScanComponent, { className: "CheckinQRScanComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkin-qr-scan.component.ts", lineNumber: 100 });
})();

// apps/visitor-kiosk/src/app/checkin/checkin-result.component.ts
var _c011 = () => ({});
function CheckinResultsComponent_div_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Cleared for ", ((tmp_2_0 = \u0275\u0275pipeBind1(2, 1, ctx_r1.level)) == null ? null : tmp_2_0.display_name) || ((tmp_2_0 = \u0275\u0275pipeBind1(3, 3, ctx_r1.level)) == null ? null : tmp_2_0.name), " ");
  }
}
function CheckinResultsComponent_div_0_button_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function CheckinResultsComponent_div_0_button_44_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.print());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "VISITOR_KIOSK.PRINT_LABEL"), " ");
  }
}
function CheckinResultsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "h3", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 3);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "sanitize");
    \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "div", 6);
    \u0275\u0275element(10, "a-user-avatar", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 8);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 9);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 10);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 11);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 12);
    \u0275\u0275element(24, "img", 13);
    \u0275\u0275pipe(25, "async");
    \u0275\u0275pipe(26, "async");
    \u0275\u0275template(27, CheckinResultsComponent_div_0_div_27_Template, 4, 5, "div", 14);
    \u0275\u0275pipe(28, "async");
    \u0275\u0275elementStart(29, "pre", 15);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 16)(33, "div", 17)(34, "div");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "async");
    \u0275\u0275pipe(37, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "async");
    \u0275\u0275pipe(41, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(42, "div", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 19);
    \u0275\u0275template(44, CheckinResultsComponent_div_0_button_44_Template, 3, 3, "button", 20);
    \u0275\u0275elementStart(45, "button", 21);
    \u0275\u0275listener("click", function CheckinResultsComponent_div_0_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.next());
    });
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_8_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 14, "VISITOR_KIOSK.CHECKED_IN_MSG"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind2(6, 18, \u0275\u0275pipeBind1(5, 16, ctx_r1.result_template), "html"), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(6);
    \u0275\u0275property("user", \u0275\u0275pureFunction0(49, _c011));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_4_0 = \u0275\u0275pipeBind1(13, 21, ctx_r1.event)) == null ? null : tmp_4_0.asset_name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" For: ", (tmp_5_0 = \u0275\u0275pipeBind1(16, 23, ctx_r1.event)) == null ? null : tmp_5_0.title, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Seeing ", (tmp_6_0 = \u0275\u0275pipeBind1(19, 25, ctx_r1.event)) == null ? null : tmp_6_0.user_name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 27, "VISITOR_KIOSK.VISITOR"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("source", ((tmp_8_0 = \u0275\u0275pipeBind1(25, 29, ctx_r1.logo)) == null ? null : tmp_8_0.src) || \u0275\u0275pipeBind1(26, 31, ctx_r1.logo));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(28, 33, ctx_r1.level));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("                        ", (tmp_10_0 = \u0275\u0275pipeBind1(31, 35, ctx_r1.event)) == null ? null : tmp_10_0.extension_data == null ? null : tmp_10_0.extension_data.extra_details, "\n                    ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(37, 39, ((tmp_11_0 = \u0275\u0275pipeBind1(36, 37, ctx_r1.event)) == null ? null : tmp_11_0.date) || "", "shortTime"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(41, 44, ((tmp_12_0 = \u0275\u0275pipeBind1(40, 42, ctx_r1.event)) == null ? null : tmp_12_0.date) || "", "mediumDate"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.allow_printing_label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(47, 47, "VISITOR_KIOSK.CONFIRM"), " ");
  }
}
var DEFAULT_TEMPLATE = `
<p class="text-center">
    Welcome, you have a meeting at {{ time }} with {{ host_name }}.
    <br />{{ host_name }} has been notified and will be with you shortly.
</p>
<p>{{ can_use_lift }}</p>
`;
var _CheckinResultsComponent = class _CheckinResultsComponent {
  get time_format() {
    return this._settings.time_format;
  }
  get now() {
    return startOfMinute(roundToNearestMinutes(Date.now(), { nearestTo: 5 }));
  }
  get allow_printing_label() {
    return this._settings.get("app.allow_printing_label") !== false;
  }
  constructor(_org, _checkin, _settings, _router, _date) {
    this._org = _org;
    this._checkin = _checkin;
    this._settings = _settings;
    this._router = _router;
    this._date = _date;
    this.event = this._checkin.event;
    this.guest = this._checkin.guest;
    this.level = combineLatest([
      this.event,
      this._org.initialised
    ]).pipe(map(([_]) => _ ? this._org.levelWithID(_.zones) : null));
    this.result_template = combineLatest([
      this.event,
      this.guest
    ]).pipe(filter(([event, guest]) => !!event && !!guest), map(([event, guest]) => {
      let template = this._settings.get("app.checked_in_template");
      if (!template)
        template = DEFAULT_TEMPLATE;
      let updated_template = template.replace(/{{ title }}/g, event?.title || "").replace(/{{ room_name }}/g, event.extension_data?.location_id || "").replace(/{{ host_name }}/g, event?.user_name || "").replace(/{{ host_email }}/g, event?.user_email || "").replace(/{{ visitor_name }}/g, guest?.name || "").replace(/{{ visitor_email }}/g, guest?.email || "").replace(/{{ can_use_lift }}/g, event.extension_data.can_use_lift ? `Please use the vistor access lift over there` : `Please wait in the lobby.`);
      try {
        const date = event.date || event.event_start * 1e3 || event.booking_start * 1e3 || startOfMinute(Date.now());
        updated_template = updated_template.replace(/{{ date }}/g, this._date.transform(date, "mediumDate")).replace(/{{ time }}/g, this._date.transform(date, this.time_format));
      } catch {
      }
      return updated_template;
    }), startWith(DEFAULT_TEMPLATE));
    this.print = () => window.print();
    this.logo = this._org.active_building.pipe(debounceTime(500), map(() => (this._settings.get("theme") === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light")) || {}));
  }
  ngOnInit() {
    this.event.pipe(first()).subscribe((_) => !_ ? this.previous() : "");
  }
  previous() {
    this._router.navigate(["/checkin"]);
  }
  next() {
    this._router.navigate(["/welcome"]);
  }
};
_CheckinResultsComponent.\u0275fac = function CheckinResultsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CheckinResultsComponent)(\u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(CheckinStateService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DatePipe));
};
_CheckinResultsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinResultsComponent, selectors: [["checkin-results"]], features: [\u0275\u0275ProvidersFeature([DatePipe])], decls: 2, vars: 3, consts: [["class", "bg-base-100 rounded shadow overflow-hidden relative flex flex-col items-center w-[36rem] p-4 space-y-4", 4, "ngIf"], [1, "bg-base-100", "rounded", "shadow", "overflow-hidden", "relative", "flex", "flex-col", "items-center", "w-[36rem]", "p-4", "space-y-4"], [1, "text-xl"], [1, "", 3, "innerHTML"], ["printable", "", 1, "relative", "w-[24rem]", "h-[14rem]", "rounded-xl", "border", "border-neutral", "m-4", "p-4", "bg-base-100", "print-only"], [1, "flex", "flex-col", "h-full"], [1, "h-[4.75rem]", "w-[4.75rem]", "rounded-full", "bg-base-200", "flex", "items-center", "justify-center"], [1, "text-3xl", 3, "user"], [1, "text-2xl"], [1, "text-sm", "mt-1"], [1, "text-sm", "opacity-60"], [1, "rounded-lg", "bg-black", "text-white", "px-2", "py-1", "text-sm", "mt-2", "w-32", "text-center"], [1, "absolute", "top-4", "right-4", "flex", "flex-col", "items-end"], ["auth", "", "alt", "Logo", 1, "h-10", 3, "source"], ["class", "text-xs text-right", 4, "ngIf"], [1, "text-right"], [1, "absolute", "bottom-4", "right-4", "flex", "items-end", "space-x-2"], [1, "text-right", "font-medium", "leading-tight"], [1, "h-16", "w-16", "rounded-lg", "border", "border-base-200"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", "class", "w-32", 3, "click", 4, "ngIf"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "text-xs", "text-right"]], template: function CheckinResultsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CheckinResultsComponent_div_0_Template, 48, 50, "div", 0);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.event));
  }
}, dependencies: [NgIf, UserAvatarComponent, PrintableComponent, AuthenticatedImageDirective, MatRipple, AsyncPipe, DatePipe, SanitizePipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=checkin-result.component.css.map */"] });
var CheckinResultsComponent = _CheckinResultsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinResultsComponent, { className: "CheckinResultsComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkin-result.component.ts", lineNumber: 123 });
})();

// apps/visitor-kiosk/src/app/checkin/checkin-error.component.ts
var _c012 = () => ["/welcome"];
function CheckinErrorComponent_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.error));
  }
}
var _CheckinErrorComponent = class _CheckinErrorComponent {
  constructor(_checkin) {
    this._checkin = _checkin;
    this.error = this._checkin.error;
  }
};
_CheckinErrorComponent.\u0275fac = function CheckinErrorComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CheckinErrorComponent)(\u0275\u0275directiveInject(CheckinStateService));
};
_CheckinErrorComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinErrorComponent, selectors: [["checkin-error"]], decls: 10, vars: 8, consts: [[1, "bg-base-100", "rounded", "shadow", "overflow-hidden", "relative", "flex", "flex-col", "items-center", "m-4", "py-4", "px-16", "text-center", "space-y-4"], [1, "text-2xl", "pb-2"], [4, "ngIf"], ["btn", "", "matRipple", "", 1, "w-32", 3, "routerLink"]], template: function CheckinErrorComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
    \u0275\u0275text(2, "Please see reception.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CheckinErrorComponent_p_3_Template, 3, 3, "p", 2);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Our staff at reception will assist you.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 3);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(4, 3, ctx.error));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c012));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, "VISITOR_KIOSK.CONFIRM"), " ");
  }
}, dependencies: [NgIf, MatRipple, RouterLink, AsyncPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 28rem;\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=checkin-error.component.css.map */"] });
var CheckinErrorComponent = _CheckinErrorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinErrorComponent, { className: "CheckinErrorComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkin-error.component.ts", lineNumber: 27 });
})();

// apps/visitor-kiosk/src/app/checkin/checkin-covid.component.ts
var _c013 = ["checkin-covid", ""];
var _c16 = () => ["/welcome"];
var _CheckinCovidComponent = class _CheckinCovidComponent {
  constructor(_router, _checkin) {
    this._router = _router;
    this._checkin = _checkin;
  }
  confirm() {
    if (!this.symptoms || !this.contact)
      return notifyError("Please select yes or no for each question");
    this._checkin.updateGuest({
      covid: this.contact === "true",
      symptoms: this.symptoms === "true"
    });
    if (this.symptoms === "false" && this.contact === "false") {
      this._router.navigate(["/checkin", "results"]);
    } else {
      this._checkin.setError("Please get tested for COVID-19 and self-isolate at home for 14 days");
      this._router.navigate(["/checkin", "error"]);
    }
  }
};
_CheckinCovidComponent.\u0275fac = function CheckinCovidComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CheckinCovidComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(CheckinStateService));
};
_CheckinCovidComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinCovidComponent, selectors: [["", "checkin-covid", ""]], attrs: _c013, decls: 55, vars: 5, consts: [[1, "bg-base-100", "rounded", "p-4", "relative", "overflow-y-auto", "overflow-x-hidden"], [1, "text-xl", "font-medium", "mb-4"], [1, "list-decimal", "list-inside"], [1, "list-disc", "list-inside", "px-4", "mb-4"], ["aria-label", "Has Symptoms", 3, "ngModelChange", "ngModel"], ["value", "true"], ["value", "false", 1, "ml-4"], [1, "my-4"], ["aria-label", "COVID contact or self-isolated", 3, "ngModelChange", "ngModel"], ["btn", "", "matRipple", "", 3, "click"], ["icon", "", "matRipple", "", 1, "absolute", "top-0", "right-0", 3, "routerLink"]], template: function CheckinCovidComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
    \u0275\u0275text(2, "COVID Disclaimer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ol", 2)(4, "li");
    \u0275\u0275text(5, " Do you have any of the following symptoms?");
    \u0275\u0275element(6, "br")(7, "br");
    \u0275\u0275elementStart(8, "ul", 3)(9, "li");
    \u0275\u0275text(10, "Fever");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "li");
    \u0275\u0275text(12, "Cough");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "li");
    \u0275\u0275text(14, "Shortness of breath");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "li");
    \u0275\u0275text(16, "Chills");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "li");
    \u0275\u0275text(18, "Body aches");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "li");
    \u0275\u0275text(20, "Sore or scratchy throat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "li");
    \u0275\u0275text(22, "Headache");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "li");
    \u0275\u0275text(24, "Runny nose");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "li");
    \u0275\u0275text(26, "Muscle pain");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "li");
    \u0275\u0275text(28, "Vomitting");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "li");
    \u0275\u0275text(30, "Nausea");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "li");
    \u0275\u0275text(32, "Diarrhoa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "li");
    \u0275\u0275text(34, "Loss of taste or smell");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "mat-radio-group", 4);
    \u0275\u0275twoWayListener("ngModelChange", function CheckinCovidComponent_Template_mat_radio_group_ngModelChange_35_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.symptoms, $event) || (ctx.symptoms = $event);
      return $event;
    });
    \u0275\u0275elementStart(36, "mat-radio-button", 5);
    \u0275\u0275text(37, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "mat-radio-button", 6);
    \u0275\u0275text(39, "No");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(40, "hr", 7);
    \u0275\u0275elementStart(41, "li");
    \u0275\u0275text(42, " Have you been in contact with a COVID-19 case in the last 14 days or been asked to self-isolate by a health offical?");
    \u0275\u0275element(43, "br")(44, "br");
    \u0275\u0275elementStart(45, "mat-radio-group", 8);
    \u0275\u0275twoWayListener("ngModelChange", function CheckinCovidComponent_Template_mat_radio_group_ngModelChange_45_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.contact, $event) || (ctx.contact = $event);
      return $event;
    });
    \u0275\u0275elementStart(46, "mat-radio-button", 5);
    \u0275\u0275text(47, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "mat-radio-button", 6);
    \u0275\u0275text(49, "No");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(50, "button", 9);
    \u0275\u0275listener("click", function CheckinCovidComponent_Template_button_click_50_listener() {
      return ctx.confirm();
    });
    \u0275\u0275text(51, "Confirm");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "a", 10)(53, "app-icon");
    \u0275\u0275text(54, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(35);
    \u0275\u0275twoWayProperty("ngModel", ctx.symptoms);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx.contact);
    \u0275\u0275advance(7);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c16));
    \u0275\u0275attribute("disabled", !ctx.symptoms && !ctx.contact);
  }
}, dependencies: [NgControlStatus, NgModel, IconComponent, MatRipple, MatRadioGroup, MatRadioButton, RouterLink], styles: ["\n\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 32rem;\n  max-width: calc(100vw - 2rem);\n  max-height: calc(100% - 2rem);\n}\nbutton[_ngcontent-%COMP%] {\n  margin: 1rem 11rem 0;\n  width: 8rem;\n}\n/*# sourceMappingURL=checkin-covid.component.css.map */"] });
var CheckinCovidComponent = _CheckinCovidComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinCovidComponent, { className: "CheckinCovidComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkin-covid.component.ts", lineNumber: 83 });
})();

// apps/visitor-kiosk/src/app/checkin/checkin.component.ts
var _c014 = ["app-checkin", ""];
var _CheckinComponent = class _CheckinComponent {
  get now() {
    return startOfMinute(/* @__PURE__ */ new Date());
  }
  get background() {
    return this._settings.get("app.welcome_background");
  }
  constructor(_settings) {
    this._settings = _settings;
  }
};
_CheckinComponent.\u0275fac = function CheckinComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CheckinComponent)(\u0275\u0275directiveInject(SettingsService));
};
_CheckinComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinComponent, selectors: [["", "app-checkin", ""]], attrs: _c014, decls: 8, vars: 10, consts: [[1, "absolute", "inset-0", "p-8", "flex", "items-center"], [1, "flex", "flex-col", "justify-center", "space-y-8", "z-10", "w-full"], [1, "absolute", "top-4", "right-4", "text-2xl", "text-white"], ["src", "assets/img/building.png", 1, "absolute", "w-[60%]", "bottom-0", "right-0"]], template: function CheckinComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "router-outlet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "img", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275styleProp("background-image", "url(" + ctx.background + ")");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(5, 4, ctx.now, "mediumDate"), " ", \u0275\u0275pipeBind2(6, 7, ctx.now, "shortTime"), " ");
  }
}, dependencies: [RouterOutlet, DatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=checkin.component.css.map */"] });
var CheckinComponent = _CheckinComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinComponent, { className: "CheckinComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkin.component.ts", lineNumber: 36 });
})();

// apps/visitor-kiosk/src/app/checkin/checkin-induction.component.ts
var _c015 = ["checkin-induction", ""];
var _CheckinInductionComponent = class _CheckinInductionComponent {
  get induction_details() {
    return this._settings.get("app.induction_details");
  }
  get induction_after_details() {
    return this._settings.get("app.induction_after_details");
  }
  get is_enabled() {
    return this._settings.get("app.induction_enabled") && this._settings.get("app.induction_details");
  }
  constructor(_checkin, _router, _settings, _org) {
    this._checkin = _checkin;
    this._router = _router;
    this._settings = _settings;
    this._org = _org;
    this.event = this._checkin.event;
    this.agree = false;
    this.loading = false;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      const event = yield this.event.pipe(first()).toPromise();
      if (!event)
        this._router.navigate(["/checkin"]);
      if (!this.is_enabled || event.induction === "accepted") {
        if (this.induction_after_details) {
          this._router.navigate(["/checkin", "results"]);
        } else {
          this._router.navigate(["/checkin", "details"]);
        }
      }
    });
  }
  decline() {
    return __async(this, null, function* () {
      this.loading = true;
      yield this._checkin.declineInduction().catch((err) => {
        notifyError("Error declining induction", err);
        throw err;
      });
      this._checkin.setError("You have declined the induction.");
      notifyInfo("Induction declined successfully");
      this._router.navigate(["/checkin", "error"]);
    });
  }
  continue() {
    return __async(this, null, function* () {
      this.loading = true;
      yield this._checkin.completeInduction().catch((err) => {
        notifyError("Error completing induction", err);
        throw err;
      });
      notifySuccess("Induction completed successfully");
      if (this.induction_after_details) {
        this._router.navigate(["/checkin", "results"]);
      } else {
        this._router.navigate(["/checkin", "details"]);
      }
    });
  }
};
_CheckinInductionComponent.\u0275fac = function CheckinInductionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CheckinInductionComponent)(\u0275\u0275directiveInject(CheckinStateService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(OrganisationService));
};
_CheckinInductionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinInductionComponent, selectors: [["", "checkin-induction", ""]], attrs: _c015, decls: 16, vars: 15, consts: [[1, "relative", "bg-base-100", "rounded", "shadow", "overflow-hidden", "flex", "flex-col", "items-center", "w-[32rem]", "p-4"], [1, "my-4"], [1, "rounded", "border", "border-base-300", "w-full", "p-4", "opacity-60", "text-sm", "overflow-y-auto", "overflow-x-hidden", "max-h-[50vh]", "whitespace-pre-wrap"], [1, "my-4", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "w-32", "clear", "underline", 3, "click"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click", "disabled"]], template: function CheckinInductionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 2);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-checkbox", 3);
    \u0275\u0275twoWayListener("ngModelChange", function CheckinInductionComponent_Template_mat_checkbox_ngModelChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.agree, $event) || (ctx.agree = $event);
      return $event;
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 4)(10, "button", 5);
    \u0275\u0275listener("click", function CheckinInductionComponent_Template_button_click_10_listener() {
      return ctx.decline();
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 6);
    \u0275\u0275listener("click", function CheckinInductionComponent_Template_button_click_13_listener() {
      return ctx.continue();
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, "VISITOR_KIOSK.INDUCTION_MSG"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx.induction_details, " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx.agree);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 9, "VISITOR_KIOSK.ACCEPT_TERMS"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 11, "VISITOR_KIOSK.DECLINE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx.agree);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 13, "VISITOR_KIOSK.ACCEPT"), " ");
  }
}, dependencies: [NgControlStatus, NgModel, MatRipple, MatCheckbox, TranslatePipe], encapsulation: 2 });
var CheckinInductionComponent = _CheckinInductionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinInductionComponent, { className: "CheckinInductionComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkin-induction.component.ts", lineNumber: 53 });
})();

// apps/visitor-kiosk/src/app/checkin/checkin.module.ts
var ROUTES = [
  {
    path: "",
    component: CheckinComponent,
    children: [
      { path: "scan", component: CheckinQRScanComponent },
      { path: "details", component: CheckinDetailsComponent },
      { path: "preferences", component: CheckinPreferencesComponent },
      { path: "photo", component: CheckinPhotoComponent },
      { path: "results", component: CheckinResultsComponent },
      { path: "error", component: CheckinErrorComponent },
      { path: "covid", component: CheckinCovidComponent },
      { path: "induction", component: CheckinInductionComponent },
      { path: "**", redirectTo: "scan" }
    ]
  },
  { path: "**", redirectTo: "" }
];
var _VisitorCheckinModule = class _VisitorCheckinModule {
};
_VisitorCheckinModule.\u0275fac = function VisitorCheckinModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VisitorCheckinModule)();
};
_VisitorCheckinModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _VisitorCheckinModule });
_VisitorCheckinModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  SharedComponentsModule,
  RouterModule.forChild(ROUTES)
] });
var VisitorCheckinModule = _VisitorCheckinModule;
export {
  VisitorCheckinModule
};
//# sourceMappingURL=checkin.module-DOI22NQI.js.map
