import {
  $h,
  ANIMATION_SHOW_CONTRACT_EXPAND,
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  Booking,
  BookingFormService,
  CalendarEvent,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  CustomTooltipComponent,
  DEFAULT_COLOURS,
  DateFieldComponent,
  DefaultValueAccessor,
  Desk,
  DurationFieldComponent,
  ElementRef,
  EventEmitter,
  ExploreBookQrComponent,
  ExploreBookingModalComponent,
  ExploreDeskInfoComponent,
  ExploreIconComponent,
  ExploreParkingInfoComponent,
  ExploreSpaceInfoComponent,
  ExploreSpacesService,
  ExploreStateService,
  FocusMonitor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  Gc,
  HostAttributeToken,
  HostListener,
  IconComponent,
  Injectable,
  InjectionToken,
  Input,
  InteractiveMapComponent,
  LockerGridComponent,
  MAP_FEATURE_DATA,
  MAT_DIALOG_DATA,
  MapLocation,
  MapPinComponent,
  MapRadiusComponent,
  MapsPeopleService,
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteOrigin,
  MatAutocompleteTrigger,
  MatCheckbox,
  MatCheckboxModule,
  MatCommonModule,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatFormField,
  MatFormFieldModule,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatOption,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  N,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgModule,
  OrganisationService,
  Output,
  ParkingService,
  ReactiveFormsModule,
  ReplaySubject,
  Router,
  RouterLink,
  RouterModule,
  SettingsService,
  SlicePipe,
  Space,
  SpacePipe,
  SpacesService,
  TimeFieldComponent,
  TranslatePipe,
  UserSearchFieldComponent,
  Ut,
  ViewChild,
  ViewEncapsulation,
  VirtualKeyboardComponent,
  Xu,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _MatInternalFormField,
  _StructuralStylesLoader,
  __spreadProps,
  __spreadValues,
  _animationsDisabled,
  addDays,
  afterNextRender,
  booleanAttribute,
  catchError,
  combineLatest,
  computed,
  currentUser,
  debounceTime,
  differenceInMinutes,
  endOfDay,
  endOfMinute,
  filter,
  first,
  firstTruthyValueFrom,
  flatten,
  forkJoin,
  formatDistanceToNow,
  forwardRef,
  getUnixTime,
  i18n,
  inject,
  isSameDay,
  lastValueFrom,
  loadLockerBanks,
  loadLockers,
  log,
  map,
  nextValueFrom,
  notifyError,
  notifySuccess,
  notifyWarn,
  numberAttribute,
  of,
  queryBookings,
  rc,
  rulesForResource,
  searchStaff,
  setClassMetadata,
  setHours,
  shareReplay,
  shiftColorTowards,
  showStaff,
  signal,
  startOfDay,
  startOfMinute,
  switchMap,
  tap,
  timer,
  toQueryString,
  toSignal,
  unique,
  viewChild,
  xa,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-F4ACEFVB.js";

// node_modules/@angular/material/fesm2022/slide-toggle.mjs
var _c0 = ["switch"];
var _c1 = ["*"];
function MatSlideToggle_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 12);
    \u0275\u0275element(2, "path", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "svg", 14);
    \u0275\u0275element(4, "path", 15);
    \u0275\u0275elementEnd()();
  }
}
var MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new InjectionToken("mat-slide-toggle-default-options", {
  providedIn: "root",
  factory: () => ({
    disableToggleValue: false,
    hideIcon: false,
    disabledInteractive: false
  })
});
var MatSlideToggleChange = class {
  source;
  checked;
  constructor(source, checked) {
    this.source = source;
    this.checked = checked;
  }
};
var MatSlideToggle = class _MatSlideToggle {
  _elementRef = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _changeDetectorRef = inject(ChangeDetectorRef);
  defaults = inject(MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS);
  _onChange = (_) => {
  };
  _onTouched = () => {
  };
  _validatorOnChange = () => {
  };
  _uniqueId;
  _checked = false;
  _createChangeEvent(isChecked) {
    return new MatSlideToggleChange(this, isChecked);
  }
  /** Unique ID for the label element. */
  _labelId;
  /** Returns the unique id for the visual hidden button. */
  get buttonId() {
    return `${this.id || this._uniqueId}-button`;
  }
  /** Reference to the MDC switch element. */
  _switchElement;
  /** Focuses the slide-toggle. */
  focus() {
    this._switchElement.nativeElement.focus();
  }
  /** Whether noop animations are enabled. */
  _noopAnimations = _animationsDisabled();
  /** Whether the slide toggle is currently focused. */
  _focused;
  /** Name value will be applied to the input element if present. */
  name = null;
  /** A unique id for the slide-toggle input. If none is supplied, it will be auto-generated. */
  id;
  /** Whether the label should appear after or before the slide-toggle. Defaults to 'after'. */
  labelPosition = "after";
  /** Used to set the aria-label attribute on the underlying input element. */
  ariaLabel = null;
  /** Used to set the aria-labelledby attribute on the underlying input element. */
  ariaLabelledby = null;
  /** Used to set the aria-describedby attribute on the underlying input element. */
  ariaDescribedby;
  /** Whether the slide-toggle is required. */
  required;
  // TODO(crisbeto): this should be a ThemePalette, but some internal apps were abusing
  // the lack of type checking previously and assigning random strings.
  /**
   * Theme color of the slide toggle. This API is supported in M2 themes only,
   * it has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/slide-toggle/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /** Whether the slide toggle is disabled. */
  disabled = false;
  /** Whether the slide toggle has a ripple. */
  disableRipple = false;
  /** Tabindex of slide toggle. */
  tabIndex = 0;
  /** Whether the slide-toggle element is checked or not. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    this._checked = value;
    this._changeDetectorRef.markForCheck();
  }
  /** Whether to hide the icon inside of the slide toggle. */
  hideIcon;
  /** Whether the slide toggle should remain interactive when it is disabled. */
  disabledInteractive;
  /** An event will be dispatched each time the slide-toggle changes its value. */
  change = new EventEmitter();
  /**
   * An event will be dispatched each time the slide-toggle input is toggled.
   * This event is always emitted when the user toggles the slide toggle, but this does not mean
   * the slide toggle's value has changed.
   */
  toggleChange = new EventEmitter();
  /** Returns the unique id for the visual hidden input. */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    const defaults = this.defaults;
    this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
    this.color = defaults.color || "accent";
    this.id = this._uniqueId = inject(_IdGenerator).getId("mat-mdc-slide-toggle-");
    this.hideIcon = defaults.hideIcon ?? false;
    this.disabledInteractive = defaults.disabledInteractive ?? false;
    this._labelId = this._uniqueId + "-label";
  }
  ngAfterContentInit() {
    this._focusMonitor.monitor(this._elementRef, true).subscribe((focusOrigin) => {
      if (focusOrigin === "keyboard" || focusOrigin === "program") {
        this._focused = true;
        this._changeDetectorRef.markForCheck();
      } else if (!focusOrigin) {
        Promise.resolve().then(() => {
          this._focused = false;
          this._onTouched();
          this._changeDetectorRef.markForCheck();
        });
      }
    });
  }
  ngOnChanges(changes) {
    if (changes["required"]) {
      this._validatorOnChange();
    }
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
  /** Implemented as part of ControlValueAccessor. */
  writeValue(value) {
    this.checked = !!value;
  }
  /** Implemented as part of ControlValueAccessor. */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /** Implemented as part of ControlValueAccessor. */
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  /** Implemented as a part of Validator. */
  validate(control) {
    return this.required && control.value !== true ? {
      "required": true
    } : null;
  }
  /** Implemented as a part of Validator. */
  registerOnValidatorChange(fn) {
    this._validatorOnChange = fn;
  }
  /** Implemented as a part of ControlValueAccessor. */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
  }
  /** Toggles the checked state of the slide-toggle. */
  toggle() {
    this.checked = !this.checked;
    this._onChange(this.checked);
  }
  /**
   * Emits a change event on the `change` output. Also notifies the FormControl about the change.
   */
  _emitChangeEvent() {
    this._onChange(this.checked);
    this.change.emit(this._createChangeEvent(this.checked));
  }
  /** Method being called whenever the underlying button is clicked. */
  _handleClick() {
    if (!this.disabled) {
      this.toggleChange.emit();
      if (!this.defaults.disableToggleValue) {
        this.checked = !this.checked;
        this._onChange(this.checked);
        this.change.emit(new MatSlideToggleChange(this, this.checked));
      }
    }
  }
  _getAriaLabelledBy() {
    if (this.ariaLabelledby) {
      return this.ariaLabelledby;
    }
    return this.ariaLabel ? null : this._labelId;
  }
  static \u0275fac = function MatSlideToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSlideToggle)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSlideToggle,
    selectors: [["mat-slide-toggle"]],
    viewQuery: function MatSlideToggle_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._switchElement = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-slide-toggle"],
    hostVars: 13,
    hostBindings: function MatSlideToggle_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
        \u0275\u0275attribute("tabindex", null)("aria-label", null)("name", null)("aria-labelledby", null);
        \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "");
        \u0275\u0275classProp("mat-mdc-slide-toggle-focused", ctx._focused)("mat-mdc-slide-toggle-checked", ctx.checked)("_mat-animation-noopable", ctx._noopAnimations);
      }
    },
    inputs: {
      name: "name",
      id: "id",
      labelPosition: "labelPosition",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
      required: [2, "required", "required", booleanAttribute],
      color: "color",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
      checked: [2, "checked", "checked", booleanAttribute],
      hideIcon: [2, "hideIcon", "hideIcon", booleanAttribute],
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
    },
    outputs: {
      change: "change",
      toggleChange: "toggleChange"
    },
    exportAs: ["matSlideToggle"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _MatSlideToggle),
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: _MatSlideToggle,
      multi: true
    }]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c1,
    decls: 13,
    vars: 27,
    consts: [["switch", ""], ["mat-internal-form-field", "", 3, "labelPosition"], ["role", "switch", "type", "button", 1, "mdc-switch", 3, "click", "tabIndex", "disabled"], [1, "mdc-switch__track"], [1, "mdc-switch__handle-track"], [1, "mdc-switch__handle"], [1, "mdc-switch__shadow"], [1, "mdc-elevation-overlay"], [1, "mdc-switch__ripple"], ["mat-ripple", "", 1, "mat-mdc-slide-toggle-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mdc-switch__icons"], [1, "mdc-label", 3, "click", "for"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-switch__icon", "mdc-switch__icon--on"], ["d", "M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-switch__icon", "mdc-switch__icon--off"], ["d", "M20 13H4v-2h16v2z"]],
    template: function MatSlideToggle_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 1)(1, "button", 2, 0);
        \u0275\u0275listener("click", function MatSlideToggle_Template_button_click_1_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._handleClick());
        });
        \u0275\u0275element(3, "span", 3);
        \u0275\u0275elementStart(4, "span", 4)(5, "span", 5)(6, "span", 6);
        \u0275\u0275element(7, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "span", 8);
        \u0275\u0275element(9, "span", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(10, MatSlideToggle_Conditional_10_Template, 5, 0, "span", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "label", 11);
        \u0275\u0275listener("click", function MatSlideToggle_Template_label_click_11_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView($event.stopPropagation());
        });
        \u0275\u0275projection(12);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const switch_r2 = \u0275\u0275reference(2);
        \u0275\u0275property("labelPosition", ctx.labelPosition);
        \u0275\u0275advance();
        \u0275\u0275classProp("mdc-switch--selected", ctx.checked)("mdc-switch--unselected", !ctx.checked)("mdc-switch--checked", ctx.checked)("mdc-switch--disabled", ctx.disabled)("mat-mdc-slide-toggle-disabled-interactive", ctx.disabledInteractive);
        \u0275\u0275property("tabIndex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex)("disabled", ctx.disabled && !ctx.disabledInteractive);
        \u0275\u0275attribute("id", ctx.buttonId)("name", ctx.name)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx._getAriaLabelledBy())("aria-describedby", ctx.ariaDescribedby)("aria-required", ctx.required || null)("aria-checked", ctx.checked)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null);
        \u0275\u0275advance(8);
        \u0275\u0275property("matRippleTrigger", switch_r2)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hideIcon ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("for", ctx.buttonId);
        \u0275\u0275attribute("id", ctx._labelId);
      }
    },
    dependencies: [MatRipple, _MatInternalFormField],
    styles: ['.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative;width:var(--mat-slide-toggle-track-width, 52px)}.mdc-switch.mdc-switch--disabled{cursor:default;pointer-events:none}.mdc-switch.mat-mdc-slide-toggle-disabled-interactive{pointer-events:auto}.mdc-switch__track{overflow:hidden;position:relative;width:100%;height:var(--mat-slide-toggle-track-height, 32px);border-radius:var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full))}.mdc-switch--disabled.mdc-switch .mdc-switch__track{opacity:var(--mat-slide-toggle-disabled-track-opacity, 0.12)}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%;border-width:var(--mat-slide-toggle-track-outline-width, 2px);border-color:var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline))}.mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track::after{border-width:var(--mat-slide-toggle-selected-track-outline-width, 2px);border-color:var(--mat-slide-toggle-selected-track-outline-color, transparent)}.mdc-switch--disabled .mdc-switch__track::before,.mdc-switch--disabled .mdc-switch__track::after{border-width:var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);border-color:var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface))}@media(forced-colors: active){.mdc-switch__track{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0);background:var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::before{opacity:var(--mat-slide-toggle-hidden-track-opacity, 0);transition:var(--mat-slide-toggle-hidden-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::before{opacity:var(--mat-slide-toggle-visible-track-opacity, 1);transition:var(--mat-slide-toggle-visible-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:active .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before,.mdc-switch.mdc-switch--disabled .mdc-switch__track::before{background:var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch__track::after{transform:translateX(-100%);background:var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary))}[dir=rtl] .mdc-switch__track::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::after{transform:translateX(0)}.mdc-switch--selected .mdc-switch__track::after{opacity:var(--mat-slide-toggle-visible-track-opacity, 1);transition:var(--mat-slide-toggle-visible-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::after{opacity:var(--mat-slide-toggle-hidden-track-opacity, 0);transition:var(--mat-slide-toggle-hidden-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:active .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after,.mdc-switch.mdc-switch--disabled .mdc-switch__track::after{background:var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface))}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0);width:calc(100% - var(--mat-slide-toggle-handle-width))}[dir=rtl] .mdc-switch__handle-track{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto;transition:width 75ms cubic-bezier(0.4, 0, 0.2, 1),height 75ms cubic-bezier(0.4, 0, 0.2, 1),margin 75ms cubic-bezier(0.4, 0, 0.2, 1);width:var(--mat-slide-toggle-handle-width);height:var(--mat-slide-toggle-handle-height);border-radius:var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full))}[dir=rtl] .mdc-switch__handle{left:auto;right:0}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle{width:var(--mat-slide-toggle-unselected-handle-size, 16px);height:var(--mat-slide-toggle-unselected-handle-size, 16px);margin:var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle{width:var(--mat-slide-toggle-selected-handle-size, 24px);height:var(--mat-slide-toggle-selected-handle-size, 24px);margin:var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons){width:var(--mat-slide-toggle-with-icon-handle-size, 24px);height:var(--mat-slide-toggle-with-icon-handle-size, 24px)}.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle{width:var(--mat-slide-toggle-pressed-handle-size, 28px);height:var(--mat-slide-toggle-pressed-handle-size, 28px)}.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px)}.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after{opacity:var(--mat-slide-toggle-disabled-selected-handle-opacity, 1)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after{opacity:var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38)}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media(forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch--selected:enabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary))}.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after,.mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface))}.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline))}.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface))}.mdc-switch__handle::before{background:var(--mat-slide-toggle-handle-surface-color)}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mat-slide-toggle-handle-elevation-shadow)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow,.mdc-switch.mdc-switch--disabled .mdc-switch__shadow{box-shadow:var(--mat-slide-toggle-disabled-handle-elevation-shadow)}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1;width:var(--mat-slide-toggle-state-layer-size, 40px);height:var(--mat-slide-toggle-state-layer-size, 40px)}.mdc-switch__ripple::after{content:"";opacity:0}.mdc-switch--disabled .mdc-switch__ripple::after{display:none}.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after{display:block}.mdc-switch:hover .mdc-switch__ripple::after{transition:75ms opacity cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after,.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch__icons{position:relative;height:100%;width:100%;z-index:1;transform:translateZ(0)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons{opacity:var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons{opacity:var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38)}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--unselected .mdc-switch__icon{width:var(--mat-slide-toggle-unselected-icon-size, 16px);height:var(--mat-slide-toggle-unselected-icon-size, 16px);fill:var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__icon{width:var(--mat-slide-toggle-selected-icon-size, 16px);height:var(--mat-slide-toggle-selected-icon-size, 16px);fill:var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container))}.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface))}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle{-webkit-user-select:none;user-select:none;display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,.mat-mdc-slide-toggle .mdc-switch__ripple::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty){transform:translateZ(0)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before{content:""}.mat-mdc-slide-toggle .mat-internal-form-field{color:var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-slide-toggle .mat-ripple-element{opacity:.12}.mat-mdc-slide-toggle .mat-focus-indicator::before{border-radius:50%}.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after{transition:none}.mat-mdc-slide-toggle .mdc-switch:enabled+.mdc-label{cursor:pointer}.mat-mdc-slide-toggle .mdc-switch--disabled+label{color:var(--mat-slide-toggle-disabled-label-text-color)}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlideToggle, [{
    type: Component,
    args: [{
      selector: "mat-slide-toggle",
      host: {
        "class": "mat-mdc-slide-toggle",
        "[id]": "id",
        // Needs to be removed since it causes some a11y issues (see #21266).
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.name]": "null",
        "[attr.aria-labelledby]": "null",
        "[class.mat-mdc-slide-toggle-focused]": "_focused",
        "[class.mat-mdc-slide-toggle-checked]": "checked",
        "[class._mat-animation-noopable]": "_noopAnimations",
        "[class]": 'color ? "mat-" + color : ""'
      },
      exportAs: "matSlideToggle",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MatSlideToggle),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: MatSlideToggle,
        multi: true
      }],
      imports: [MatRipple, _MatInternalFormField],
      template: `<div mat-internal-form-field [labelPosition]="labelPosition">
  <button
    class="mdc-switch"
    role="switch"
    type="button"
    [class.mdc-switch--selected]="checked"
    [class.mdc-switch--unselected]="!checked"
    [class.mdc-switch--checked]="checked"
    [class.mdc-switch--disabled]="disabled"
    [class.mat-mdc-slide-toggle-disabled-interactive]="disabledInteractive"
    [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
    [disabled]="disabled && !disabledInteractive"
    [attr.id]="buttonId"
    [attr.name]="name"
    [attr.aria-label]="ariaLabel"
    [attr.aria-labelledby]="_getAriaLabelledBy()"
    [attr.aria-describedby]="ariaDescribedby"
    [attr.aria-required]="required || null"
    [attr.aria-checked]="checked"
    [attr.aria-disabled]="disabled && disabledInteractive ? 'true' : null"
    (click)="_handleClick()"
    #switch>
    <span class="mdc-switch__track"></span>
    <span class="mdc-switch__handle-track">
      <span class="mdc-switch__handle">
        <span class="mdc-switch__shadow">
          <span class="mdc-elevation-overlay"></span>
        </span>
        <span class="mdc-switch__ripple">
          <span class="mat-mdc-slide-toggle-ripple mat-focus-indicator" mat-ripple
            [matRippleTrigger]="switch"
            [matRippleDisabled]="disableRipple || disabled"
            [matRippleCentered]="true"></span>
        </span>
        @if (!hideIcon) {
          <span class="mdc-switch__icons">
            <svg
              class="mdc-switch__icon mdc-switch__icon--on"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
            </svg>
            <svg
              class="mdc-switch__icon mdc-switch__icon--off"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M20 13H4v-2h16v2z" />
            </svg>
          </span>
        }
      </span>
    </span>
  </button>

  <!--
    Clicking on the label will trigger another click event from the button.
    Stop propagation here so other listeners further up in the DOM don't execute twice.
  -->
  <label class="mdc-label" [for]="buttonId" [attr.id]="_labelId" (click)="$event.stopPropagation()">
    <ng-content></ng-content>
  </label>
</div>
`,
      styles: ['.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative;width:var(--mat-slide-toggle-track-width, 52px)}.mdc-switch.mdc-switch--disabled{cursor:default;pointer-events:none}.mdc-switch.mat-mdc-slide-toggle-disabled-interactive{pointer-events:auto}.mdc-switch__track{overflow:hidden;position:relative;width:100%;height:var(--mat-slide-toggle-track-height, 32px);border-radius:var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full))}.mdc-switch--disabled.mdc-switch .mdc-switch__track{opacity:var(--mat-slide-toggle-disabled-track-opacity, 0.12)}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%;border-width:var(--mat-slide-toggle-track-outline-width, 2px);border-color:var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline))}.mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track::after{border-width:var(--mat-slide-toggle-selected-track-outline-width, 2px);border-color:var(--mat-slide-toggle-selected-track-outline-color, transparent)}.mdc-switch--disabled .mdc-switch__track::before,.mdc-switch--disabled .mdc-switch__track::after{border-width:var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);border-color:var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface))}@media(forced-colors: active){.mdc-switch__track{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0);background:var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::before{opacity:var(--mat-slide-toggle-hidden-track-opacity, 0);transition:var(--mat-slide-toggle-hidden-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::before{opacity:var(--mat-slide-toggle-visible-track-opacity, 1);transition:var(--mat-slide-toggle-visible-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:active .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before,.mdc-switch.mdc-switch--disabled .mdc-switch__track::before{background:var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch__track::after{transform:translateX(-100%);background:var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary))}[dir=rtl] .mdc-switch__track::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::after{transform:translateX(0)}.mdc-switch--selected .mdc-switch__track::after{opacity:var(--mat-slide-toggle-visible-track-opacity, 1);transition:var(--mat-slide-toggle-visible-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::after{opacity:var(--mat-slide-toggle-hidden-track-opacity, 0);transition:var(--mat-slide-toggle-hidden-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:active .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after,.mdc-switch.mdc-switch--disabled .mdc-switch__track::after{background:var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface))}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0);width:calc(100% - var(--mat-slide-toggle-handle-width))}[dir=rtl] .mdc-switch__handle-track{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto;transition:width 75ms cubic-bezier(0.4, 0, 0.2, 1),height 75ms cubic-bezier(0.4, 0, 0.2, 1),margin 75ms cubic-bezier(0.4, 0, 0.2, 1);width:var(--mat-slide-toggle-handle-width);height:var(--mat-slide-toggle-handle-height);border-radius:var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full))}[dir=rtl] .mdc-switch__handle{left:auto;right:0}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle{width:var(--mat-slide-toggle-unselected-handle-size, 16px);height:var(--mat-slide-toggle-unselected-handle-size, 16px);margin:var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle{width:var(--mat-slide-toggle-selected-handle-size, 24px);height:var(--mat-slide-toggle-selected-handle-size, 24px);margin:var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons){width:var(--mat-slide-toggle-with-icon-handle-size, 24px);height:var(--mat-slide-toggle-with-icon-handle-size, 24px)}.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle{width:var(--mat-slide-toggle-pressed-handle-size, 28px);height:var(--mat-slide-toggle-pressed-handle-size, 28px)}.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px)}.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after{opacity:var(--mat-slide-toggle-disabled-selected-handle-opacity, 1)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after{opacity:var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38)}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media(forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch--selected:enabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary))}.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after,.mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface))}.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline))}.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface))}.mdc-switch__handle::before{background:var(--mat-slide-toggle-handle-surface-color)}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mat-slide-toggle-handle-elevation-shadow)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow,.mdc-switch.mdc-switch--disabled .mdc-switch__shadow{box-shadow:var(--mat-slide-toggle-disabled-handle-elevation-shadow)}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1;width:var(--mat-slide-toggle-state-layer-size, 40px);height:var(--mat-slide-toggle-state-layer-size, 40px)}.mdc-switch__ripple::after{content:"";opacity:0}.mdc-switch--disabled .mdc-switch__ripple::after{display:none}.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after{display:block}.mdc-switch:hover .mdc-switch__ripple::after{transition:75ms opacity cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after,.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch__icons{position:relative;height:100%;width:100%;z-index:1;transform:translateZ(0)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons{opacity:var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons{opacity:var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38)}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--unselected .mdc-switch__icon{width:var(--mat-slide-toggle-unselected-icon-size, 16px);height:var(--mat-slide-toggle-unselected-icon-size, 16px);fill:var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__icon{width:var(--mat-slide-toggle-selected-icon-size, 16px);height:var(--mat-slide-toggle-selected-icon-size, 16px);fill:var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container))}.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface))}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle{-webkit-user-select:none;user-select:none;display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,.mat-mdc-slide-toggle .mdc-switch__ripple::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty){transform:translateZ(0)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before{content:""}.mat-mdc-slide-toggle .mat-internal-form-field{color:var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-slide-toggle .mat-ripple-element{opacity:.12}.mat-mdc-slide-toggle .mat-focus-indicator::before{border-radius:50%}.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after{transition:none}.mat-mdc-slide-toggle .mdc-switch:enabled+.mdc-label{cursor:pointer}.mat-mdc-slide-toggle .mdc-switch--disabled+label{color:var(--mat-slide-toggle-disabled-label-text-color)}\n']
    }]
  }], () => [], {
    _switchElement: [{
      type: ViewChild,
      args: ["switch"]
    }],
    name: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    labelPosition: [{
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
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
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
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }],
    toggleChange: [{
      type: Output
    }]
  });
})();
var MatSlideToggleModule = class _MatSlideToggleModule {
  static \u0275fac = function MatSlideToggleModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSlideToggleModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatSlideToggleModule,
    imports: [MatSlideToggle, MatCommonModule],
    exports: [MatSlideToggle, MatCommonModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatSlideToggle, MatCommonModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlideToggleModule, [{
    type: NgModule,
    args: [{
      imports: [MatSlideToggle, MatCommonModule],
      exports: [MatSlideToggle, MatCommonModule]
    }]
  }], null, null);
})();

// apps/map-kiosk/src/app/accessibility-controls.component.ts
function AccessibilityControlsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 1);
    \u0275\u0275listener("click", function AccessibilityControlsComponent_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDarkMode(!ctx_r1.dark_mode));
    });
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275text(2, "Dark Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-slide-toggle", 2);
    \u0275\u0275listener("ngModelChange", function AccessibilityControlsComponent_Conditional_0_Template_mat_slide_toggle_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDarkMode($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.dark_mode);
  }
}
var _AccessibilityControlsComponent = class _AccessibilityControlsComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._settings = inject(SettingsService);
    this.applySetting = (n, v) => this.timeout("apply_setting", () => this._settings.saveUserSetting(n, v), 1e3);
  }
  get dark_mode() {
    return this.can_change_dark_mode && this._settings.theme === "dark";
  }
  get can_change_dark_mode() {
    return !!this._settings.get("app.allow_dark_mode");
  }
  get isometric() {
    return localStorage.getItem("KIOSK.isometric") === "true";
  }
  setIsometric(state) {
    localStorage.setItem("KIOSK.isometric", String(state));
    window.dispatchEvent(new CustomEvent("isometric-change", { detail: state }));
  }
  get accessible() {
    return !!this._settings.get("accessible");
  }
  get font_size() {
    return this._settings.get("font_size") || 16;
  }
  setDarkMode(state) {
    this.timeout("dark_mode", () => {
      const theme = this._settings.theme;
      if (state && theme !== "dark")
        this._settings.setTheme("dark");
      else if (!state && theme === "dark")
        this._settings.setTheme("light");
    }, 100);
  }
};
_AccessibilityControlsComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275AccessibilityControlsComponent_BaseFactory;
  return function AccessibilityControlsComponent_Factory(__ngFactoryType__) {
    return (\u0275AccessibilityControlsComponent_BaseFactory || (\u0275AccessibilityControlsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AccessibilityControlsComponent)))(__ngFactoryType__ || _AccessibilityControlsComponent);
  };
})();
_AccessibilityControlsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccessibilityControlsComponent, selectors: [["accessibility-controls"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 2, consts: [["matRipple", "", 1, "hover:bg-base-200", "flex", "w-full", "items-center", "justify-between", "rounded-sm", "p-2"], ["matRipple", "", 1, "hover:bg-base-200", "flex", "w-full", "items-center", "justify-between", "rounded-sm", "p-2", 3, "click"], [3, "ngModelChange", "ngModel"]], template: function AccessibilityControlsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AccessibilityControlsComponent_Conditional_0_Template, 4, 1, "button", 0);
    \u0275\u0275elementStart(1, "button", 1);
    \u0275\u0275listener("click", function AccessibilityControlsComponent_Template_button_click_1_listener() {
      return ctx.setIsometric(!ctx.isometric);
    });
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275text(3, "Isometric View");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-slide-toggle", 2);
    \u0275\u0275listener("ngModelChange", function AccessibilityControlsComponent_Template_mat_slide_toggle_ngModelChange_4_listener($event) {
      return ctx.setIsometric($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.can_change_dark_mode ? 0 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx.isometric);
  }
}, dependencies: [MatRippleModule, MatRipple, MatSlideToggleModule, MatSlideToggle, FormsModule, NgControlStatus, NgModel], encapsulation: 2 });
var AccessibilityControlsComponent = _AccessibilityControlsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccessibilityControlsComponent, [{
    type: Component,
    args: [{ selector: "accessibility-controls", template: `
        @if (can_change_dark_mode) {
            <button
                matRipple
                class="hover:bg-base-200 flex w-full items-center justify-between rounded-sm p-2"
                (click)="setDarkMode(!dark_mode)"
            >
                <div>Dark Mode</div>
                <mat-slide-toggle
                    [ngModel]="dark_mode"
                    (ngModelChange)="setDarkMode($event)"
                ></mat-slide-toggle>
            </button>
        }
        <button
            matRipple
            class="hover:bg-base-200 flex w-full items-center justify-between rounded-sm p-2"
            (click)="setIsometric(!isometric)"
        >
            <div>Isometric View</div>
            <mat-slide-toggle
                [ngModel]="isometric"
                (ngModelChange)="setIsometric($event)"
            ></mat-slide-toggle>
        </button>
        <!-- <button
            matRipple
            class="flex items-center justify-between hover:bg-base-200 w-full p-2 rounded-sm"
            (click)="applySetting('accessible', !accessible)"
        >
            <div>Text Size</div>
            <mat-slide-toggle
                [ngModel]="accessible"
                (ngModelChange)="applySetting('accessible', $event)"
            ></mat-slide-toggle>
        </button>
        <div class="flex items-center pl-2 space-x-4" *ngIf="accessible">
            <div class="text-sm">A</div>
            <mat-slider
                class="flex-1 w-px min-w-0 text-[16px]"
                [min]="10"
                [max]="24"
                [step]="2"
            >
                <input
                    matSliderThumb
                    class="text-[16px]"
                    [ngModel]="font_size"
                    (ngModelChange)="applySetting('font_size', $event)"
                />
            </mat-slider>
            <div class="text-2xl">A</div>
            <div
                class="text-base py-1 px-2 rounded-sm bg-base-300 text-base-content my-2"
            >
                {{ font_size }}px
            </div>
        </div> -->
    `, imports: [MatRippleModule, MatSlideToggleModule, FormsModule] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccessibilityControlsComponent, { className: "AccessibilityControlsComponent", filePath: "apps/map-kiosk/src/app/accessibility-controls.component.ts", lineNumber: 71 });
})();

// libs/explore/src/lib/set-datetime-modal.component.ts
var _c02 = () => ({ standalone: true });
function SetDatetimeModalComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 12)(2, "label");
    \u0275\u0275text(3, "Resource:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.resource.name || ctx_r1.resource.map_id || "Unknown Resource", " ");
  }
}
function SetDatetimeModalComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "label");
    \u0275\u0275text(3, "Host");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-user-search-field", 14);
    \u0275\u0275elementEnd()();
  }
}
function SetDatetimeModalComponent_Conditional_6_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "label");
    \u0275\u0275text(2, "End Time");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "a-duration-field", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("time", (tmp_2_0 = ctx_r1.form.get("date")) == null ? null : tmp_2_0.value)("max", 10 * 60)("min", 60)("step", 60)("use_24hr", ctx_r1.use_24hr_time);
  }
}
function SetDatetimeModalComponent_Conditional_6_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "mat-checkbox", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.ALL_DAY"), " ");
  }
}
function SetDatetimeModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 3);
    \u0275\u0275conditionalCreate(1, SetDatetimeModalComponent_Conditional_6_Conditional_1_Template, 6, 1, "div", 6);
    \u0275\u0275conditionalCreate(2, SetDatetimeModalComponent_Conditional_6_Conditional_2_Template, 5, 0, "div", 6);
    \u0275\u0275elementStart(3, "div", 6)(4, "div", 7)(5, "label");
    \u0275\u0275text(6, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a-date-field", 8);
    \u0275\u0275text(8, " Date and time must be in the future ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 6)(10, "div", 9)(11, "label");
    \u0275\u0275text(12, "Start Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a-time-field", 10);
    \u0275\u0275listener("ngModelChange", function SetDatetimeModalComponent_Conditional_6_Template_a_time_field_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(14, SetDatetimeModalComponent_Conditional_6_Conditional_14_Template, 4, 5, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, SetDatetimeModalComponent_Conditional_6_Conditional_15_Template, 4, 3, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.resource ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.host ? 2 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("to", ctx_r1.book_until);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(9, _c02))("use_24hr", ctx_r1.use_24hr_time);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.form.value.all_day ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.allow_all_day ? 15 : -1);
  }
}
var _SetDatetimeModalComponent = class _SetDatetimeModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this.host = this._data.host;
    this.form = new FormGroup({
      user: new FormControl(this._data.user),
      date: new FormControl(this._data.date),
      duration: new FormControl(this._data.duration),
      all_day: new FormControl(this._data.all_day ?? false)
    });
    this.book_until = this._data.until;
    this.resource = this._data.resource;
    this.allow_all_day = this._data.allow_all_day ?? false;
  }
  get use_24hr_time() {
    return this._settings.get("app.use_24_hour_time");
  }
  ngOnInit() {
    this.form.controls.all_day.valueChanges.subscribe((all_day) => {
      if (all_day) {
        this.form.controls.duration.disable();
      } else {
        this.form.controls.duration.enable();
      }
    });
    if (this._data.all_day) {
      this.form.controls.duration.disable();
    }
  }
};
_SetDatetimeModalComponent.\u0275fac = function SetDatetimeModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SetDatetimeModalComponent)();
};
_SetDatetimeModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetDatetimeModalComponent, selectors: [["set-datetime-modal"]], decls: 11, vars: 5, consts: [[1, "bg-base-200", "m-2", "flex", "h-14", "w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "w-[24rem]", "max-w-[85vw]", 3, "formGroup"], [1, "bg-base-200", "mx-2", "mb-2", "flex", "w-[calc(100%-1rem)]", "items-center", "justify-end", "rounded-sm", "border-none", "p-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "mat-dialog-close"], [1, "mx-auto", "flex", "w-[640px]", "max-w-[calc(100%-2rem)]", "flex-col", "space-x-0", "sm:flex-row", "sm:space-x-2"], [1, "flex", "w-full", "flex-1", "flex-col", "sm:w-1/4"], ["formControlName", "date", 3, "to"], [1, "flex", "w-full", "flex-1", "flex-col", "sm:w-1/3"], [3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr"], [1, "mx-auto", "flex", "w-[640px]", "max-w-[calc(100%-2rem)]", "justify-end"], [1, "mb-2", "flex", "w-full", "flex-1", "flex-col", "sm:w-1/4"], [1, "border-base-200", "mb-4", "w-full", "rounded-sm", "border", "px-4", "py-3"], ["formControlName", "user", 1, "mb-4"], ["formControlName", "duration", 3, "time", "max", "min", "step", "use_24hr"], ["formControlName", "all_day"]], template: function SetDatetimeModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
    \u0275\u0275text(2, "Set date and time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 2)(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(6, SetDatetimeModalComponent_Conditional_6_Template, 16, 10, "main", 3);
    \u0275\u0275elementStart(7, "footer", 4)(8, "button", 5);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx.form ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("mat-dialog-close", ctx.form.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 3, "COMMON.CONTINUE"), " ");
  }
}, dependencies: [
  MatRippleModule,
  MatRipple,
  MatDialogModule,
  MatDialogClose,
  MatCheckboxModule,
  MatCheckbox,
  IconComponent,
  DurationFieldComponent,
  TimeFieldComponent,
  DateFieldComponent,
  UserSearchFieldComponent,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  TranslatePipe
], encapsulation: 2 });
var SetDatetimeModalComponent = _SetDatetimeModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetDatetimeModalComponent, [{
    type: Component,
    args: [{ selector: "set-datetime-modal", template: `
        <header
            class="bg-base-200 m-2 flex h-14 w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">Set date and time</h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        @if (form) {
            <main [formGroup]="form" class="w-[24rem] max-w-[85vw]">
                @if (resource) {
                    <div
                        class="mx-auto flex w-[640px] max-w-[calc(100%-2rem)] flex-col space-x-0 sm:flex-row sm:space-x-2"
                    >
                        <div class="mb-2 flex w-full flex-1 flex-col sm:w-1/4">
                            <label>Resource:</label>
                            <div
                                class="border-base-200 mb-4 w-full rounded-sm border px-4 py-3"
                            >
                                {{
                                    resource.name ||
                                        resource.map_id ||
                                        'Unknown Resource'
                                }}
                            </div>
                        </div>
                    </div>
                }
                @if (host) {
                    <div
                        class="mx-auto flex w-[640px] max-w-[calc(100%-2rem)] flex-col space-x-0 sm:flex-row sm:space-x-2"
                    >
                        <div class="flex w-full flex-1 flex-col sm:w-1/4">
                            <label>Host</label>
                            <a-user-search-field
                                formControlName="user"
                                class="mb-4"
                            ></a-user-search-field>
                        </div>
                    </div>
                }
                <div
                    class="mx-auto flex w-[640px] max-w-[calc(100%-2rem)] flex-col space-x-0 sm:flex-row sm:space-x-2"
                >
                    <div class="flex w-full flex-1 flex-col sm:w-1/4">
                        <label>Date</label>
                        <a-date-field [to]="book_until" formControlName="date">
                            Date and time must be in the future
                        </a-date-field>
                    </div>
                </div>
                <div
                    class="mx-auto flex w-[640px] max-w-[calc(100%-2rem)] flex-col space-x-0 sm:flex-row sm:space-x-2"
                >
                    <div class="flex w-full flex-1 flex-col sm:w-1/3">
                        <label>Start Time</label>
                        <a-time-field
                            [ngModel]="form.value.date"
                            (ngModelChange)="form.patchValue({ date: $event })"
                            [ngModelOptions]="{ standalone: true }"
                            [use_24hr]="use_24hr_time"
                        ></a-time-field>
                    </div>
                    @if (!form.value.all_day) {
                        <div class="flex w-full flex-1 flex-col sm:w-1/3">
                            <label>End Time</label>
                            <a-duration-field
                                formControlName="duration"
                                [time]="form.get('date')?.value"
                                [max]="10 * 60"
                                [min]="60"
                                [step]="60"
                                [use_24hr]="use_24hr_time"
                            >
                            </a-duration-field>
                        </div>
                    }
                </div>
                @if (allow_all_day) {
                    <div
                        class="mx-auto flex w-[640px] max-w-[calc(100%-2rem)] justify-end"
                    >
                        <mat-checkbox formControlName="all_day">
                            {{ 'COMMON.ALL_DAY' | translate }}
                        </mat-checkbox>
                    </div>
                }
            </main>
        }
        <footer
            class="bg-base-200 mx-2 mb-2 flex w-[calc(100%-1rem)] items-center justify-end rounded-sm border-none p-2"
        >
            <button btn matRipple [mat-dialog-close]="form.value" class="w-32">
                {{ 'COMMON.CONTINUE' | translate }}
            </button>
        </footer>
    `, imports: [
      MatRippleModule,
      MatDialogModule,
      MatCheckboxModule,
      IconComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      UserSearchFieldComponent,
      FormsModule,
      ReactiveFormsModule,
      TranslatePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetDatetimeModalComponent, { className: "SetDatetimeModalComponent", filePath: "libs/explore/src/lib/set-datetime-modal.component.ts", lineNumber: 136 });
})();

// libs/explore/src/lib/explore-device-info.component.ts
var _c03 = ["explore-device-info", ""];
function ExploreDeviceInfoComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap("height: " + ctx_r1.diameter() + "%; width: " + ctx_r1.diameter() + "%;");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "EXPLORE.DEVICE_MAC"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.mac, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "EXPLORE.DEVICE_MANUFACTURER"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.manufacturer, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "EXPLORE.DEVICE_OS"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.os, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "EXPLORE.DEVICE_SSID"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.ssid, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "EXPLORE.DEVICE_USERNAME"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.user == null ? null : ctx_r1.user.name) || (ctx_r1.user == null ? null : ctx_r1.user.username) || ctx_r1.username(), " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "EXPLORE.DEVICE_TYPE"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.user.type, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementStart(2, "div", 9);
    \u0275\u0275conditionalCreate(3, ExploreDeviceInfoComponent_ng_template_5_Conditional_3_Template, 5, 4, "p", 10);
    \u0275\u0275elementStart(4, "p")(5, "label");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p")(10, "label");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, ExploreDeviceInfoComponent_ng_template_5_Conditional_14_Template, 5, 4, "p", 11);
    \u0275\u0275conditionalCreate(15, ExploreDeviceInfoComponent_ng_template_5_Conditional_15_Template, 5, 4, "p", 12);
    \u0275\u0275conditionalCreate(16, ExploreDeviceInfoComponent_ng_template_5_Conditional_16_Template, 5, 4, "p", 13);
    \u0275\u0275conditionalCreate(17, ExploreDeviceInfoComponent_ng_template_5_Conditional_17_Template, 5, 4, "p", 14);
    \u0275\u0275conditionalCreate(18, ExploreDeviceInfoComponent_ng_template_5_Conditional_18_Template, 5, 4, "p", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.mac && !ctx_r1.hide_fields().includes("mac") ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(7, 10, "EXPLORE.DEVICE_ACCURACY"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.variance, "m ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(12, 12, "EXPLORE.DEVICE_LAST_SEEN"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.last_seen(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.manufacturer && !ctx_r1.hide_fields().includes("manufacturer") ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.os && !ctx_r1.hide_fields().includes("os") ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.ssid && !ctx_r1.hide_fields().includes("ssid") ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.username() && !ctx_r1.hide_fields().includes("username") ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.user && !ctx_r1.hide_fields().includes("user") ? 18 : -1);
  }
}
var EMPTY = [];
var _ExploreDeviceInfoComponent = class _ExploreDeviceInfoComponent {
  get _distance() {
    return Math.abs(differenceInMinutes((this._details.last_seen || 0) * 1e3, /* @__PURE__ */ new Date()));
  }
  get _distance_color() {
    return this._distance < 10 ? "#43a047" : this._distance < 20 ? "#ffb300" : "#e53935";
  }
  constructor() {
    this._details = inject(MAP_FEATURE_DATA);
    this._settings = inject(SettingsService);
    this._element = inject(ElementRef);
    this.username = signal("");
    this.show_radius = signal(false);
    this.user = this._details.user;
    this.mac = this._details.mac;
    this.manufacturer = this._details.manufacturer;
    this.os = this._details.os;
    this.ssid = this._details.ssid;
    this.variance = this._details.variance?.toFixed(2);
    this.bg_color = this._details.bg_color || this._distance_color;
    this.zoom = toSignal(this._details.zoom$, { initialValue: 1 });
    this.hide_fields = computed(() => {
      return this._settings.get("app.explore.hide_device_fields") || EMPTY;
    });
    this.last_seen = computed(() => {
      return formatDistanceToNow((this._details.last_seen || 0) * 1e3, {
        addSuffix: true
      });
    });
    this.y_pos = signal("top");
    this.x_pos = signal("start");
    this.diameter = computed(() => {
      return this._details.variance * 100 * this.zoom();
    });
    afterNextRender(() => this._initPosition());
  }
  _initPosition(tries = 0) {
    if (tries > 10)
      return;
    const parent = this._element.nativeElement.parentElement?.parentElement;
    if (!parent) {
      setTimeout(() => this._initPosition(++tries), 200);
      return;
    }
    const position = {
      y: parseInt(parent.style.top, 10) / 100,
      x: parseInt(parent.style.left, 10) / 100
    };
    this.y_pos.set(position.y >= 0.5 ? "bottom" : "top");
    this.x_pos.set(position.x >= 0.5 ? "end" : "start");
  }
  async loadUser() {
    if (this.username())
      return;
    const mod = $h(this._details.system, "LocationServices");
    if (!mod)
      return;
    this.username.set("Loading...");
    const details = await mod.execute("check_ownership_of", [this.mac]).catch(() => null);
    this.username.set(details && details.assigned_to ? details.assigned_to : "");
  }
};
_ExploreDeviceInfoComponent.\u0275fac = function ExploreDeviceInfoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreDeviceInfoComponent)();
};
_ExploreDeviceInfoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreDeviceInfoComponent, selectors: [["", "explore-device-info", ""]], attrs: _c03, decls: 7, vars: 8, consts: [["dot", ""], ["device_tooltip", ""], ["name", "radius", 1, "radius", "center", "border-info", "bg-info", "absolute", "rounded-full", "border-8", "border-dashed", "border-blue-600", "opacity-30", 3, "style"], ["shadow", "", 1, "center", "pointer-events-auto", "absolute", "h-8", "w-8", "rounded-full", "bg-black", "opacity-30", 3, "mouseenter", "click", "mouseleave"], ["name", "dot", 1, "center", "absolute", "h-3", "w-3", "rounded-full", "border-2", "border-white", "shadow-sm"], ["customTooltip", "", 1, "pointer-events-auto", "absolute", "inset-0", 3, "mouseenter", "content", "backdrop", "xPosition", "yPosition", "hover"], ["name", "radius", 1, "radius", "center", "border-info", "bg-info", "absolute", "rounded-full", "border-8", "border-dashed", "border-blue-600", "opacity-30"], ["name", "device-info", 1, "bg-base-100", "pointer-events-none", "top-0", "left-0", "mx-2", "w-64", "rounded-sm", "p-4", "shadow-sm"], [1, "arrow"], [1, "details"], [1, "wrap-break-word"], ["type", ""], ["os", ""], ["ssid", ""], ["username", ""], ["user", ""]], template: function ExploreDeviceInfoComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, ExploreDeviceInfoComponent_Conditional_0_Template, 1, 2, "div", 2);
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275listener("mouseenter", function ExploreDeviceInfoComponent_Template_div_mouseenter_1_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.show_radius.set(true));
    })("click", function ExploreDeviceInfoComponent_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.show_radius.set(false));
    }, \u0275\u0275resolveWindow)("click", function ExploreDeviceInfoComponent_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.show_radius.set(true));
    })("mouseleave", function ExploreDeviceInfoComponent_Template_div_mouseleave_1_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.show_radius.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "div", 4, 0);
    \u0275\u0275elementStart(4, "div", 5);
    \u0275\u0275listener("mouseenter", function ExploreDeviceInfoComponent_Template_div_mouseenter_4_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.loadUser());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ExploreDeviceInfoComponent_ng_template_5_Template, 19, 14, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const device_tooltip_r3 = \u0275\u0275reference(6);
    \u0275\u0275conditional(ctx.show_radius() ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx.bg_color);
    \u0275\u0275advance(2);
    \u0275\u0275property("content", device_tooltip_r3)("backdrop", false)("xPosition", ctx.x_pos())("yPosition", ctx.y_pos())("hover", true);
  }
}, dependencies: [TranslatePipe, CustomTooltipComponent], styles: ["\n\n[_nghost-%COMP%] {\n  pointer-events: auto;\n}\n[_nghost-%COMP%]    > [name=dot][_ngcontent-%COMP%] {\n  background-color: #616161;\n}\n[_nghost-%COMP%]:hover    > [name=radius][_ngcontent-%COMP%] {\n  opacity: 1;\n}\n[name=radius][_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 200ms;\n  pointer-events: none;\n}\n/*# sourceMappingURL=explore-device-info.component.css.map */"] });
var ExploreDeviceInfoComponent = _ExploreDeviceInfoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreDeviceInfoComponent, [{
    type: Component,
    args: [{ selector: "[explore-device-info]", template: `
        @if (show_radius()) {
            <div
                name="radius"
                class="radius center border-info bg-info absolute rounded-full border-8 border-dashed border-blue-600 opacity-30"
                [style]="
                    'height: ' + diameter() + '%; width: ' + diameter() + '%;'
                "
            ></div>
        }
        <div
            shadow
            class="center pointer-events-auto absolute h-8 w-8 rounded-full bg-black opacity-30"
            (mouseenter)="show_radius.set(true)"
            (window:click)="show_radius.set(false)"
            (click)="show_radius.set(true)"
            (mouseleave)="show_radius.set(false)"
        ></div>
        <div
            name="dot"
            #dot
            class="center absolute h-3 w-3 rounded-full border-2 border-white shadow-sm"
            [style.background-color]="bg_color"
        ></div>
        <div
            customTooltip
            [content]="device_tooltip"
            [backdrop]="false"
            [xPosition]="x_pos()"
            [yPosition]="y_pos()"
            [hover]="true"
            (mouseenter)="loadUser()"
            class="pointer-events-auto absolute inset-0"
        ></div>

        <ng-template #device_tooltip>
            <div
                name="device-info"
                class="bg-base-100 pointer-events-none top-0 left-0 mx-2 w-64 rounded-sm p-4 shadow-sm"
            >
                <div class="arrow"></div>
                <div class="details">
                    @if (mac && !hide_fields().includes('mac')) {
                        <p class="wrap-break-word">
                            <label
                                >{{ 'EXPLORE.DEVICE_MAC' | translate }}:</label
                            >
                            {{ mac }}
                        </p>
                    }
                    <p>
                        <label
                            >{{ 'EXPLORE.DEVICE_ACCURACY' | translate }}:</label
                        >
                        {{ variance }}m
                    </p>
                    <p>
                        <label
                            >{{
                                'EXPLORE.DEVICE_LAST_SEEN' | translate
                            }}:</label
                        >
                        {{ last_seen() }}
                    </p>
                    @if (
                        manufacturer && !hide_fields().includes('manufacturer')
                    ) {
                        <p type>
                            <label
                                >{{
                                    'EXPLORE.DEVICE_MANUFACTURER' | translate
                                }}:</label
                            >
                            {{ manufacturer }}
                        </p>
                    }
                    @if (os && !hide_fields().includes('os')) {
                        <p os>
                            <label
                                >{{ 'EXPLORE.DEVICE_OS' | translate }}:</label
                            >
                            {{ os }}
                        </p>
                    }
                    @if (ssid && !hide_fields().includes('ssid')) {
                        <p ssid>
                            <label
                                >{{ 'EXPLORE.DEVICE_SSID' | translate }}:</label
                            >
                            {{ ssid }}
                        </p>
                    }
                    @if (username() && !hide_fields().includes('username')) {
                        <p username>
                            <label
                                >{{
                                    'EXPLORE.DEVICE_USERNAME' | translate
                                }}:</label
                            >
                            {{ user?.name || user?.username || username() }}
                        </p>
                    }
                    @if (user && !hide_fields().includes('user')) {
                        <p user>
                            <label
                                >{{ 'EXPLORE.DEVICE_TYPE' | translate }}:</label
                            >
                            {{ user.type }}
                        </p>
                    }
                </div>
            </div>
        </ng-template>
    `, imports: [TranslatePipe, CustomTooltipComponent], styles: ["/* angular:styles/component:css;9939b96a3826add6f4c5b0fbbef0c7444ff148d81d00a9d87a90d1a088d1447c;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-device-info.component.ts */\n:host {\n  pointer-events: auto;\n}\n:host > [name=dot] {\n  background-color: #616161;\n}\n:host:hover > [name=radius] {\n  opacity: 1;\n}\n[name=radius] {\n  opacity: 0;\n  transition: opacity 200ms;\n  pointer-events: none;\n}\n/*# sourceMappingURL=explore-device-info.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreDeviceInfoComponent, { className: "ExploreDeviceInfoComponent", filePath: "libs/explore/src/lib/explore-device-info.component.ts", lineNumber: 173 });
})();

// libs/explore/src/lib/explore-desks.service.ts
var _ExploreDesksService = class _ExploreDesksService extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(ExploreStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._bookings = inject(BookingFormService);
    this._dialog = inject(MatDialog);
    this._in_use = new BehaviorSubject([]);
    this._options = new BehaviorSubject({});
    this._presence = new BehaviorSubject([]);
    this._signs_of_life = new BehaviorSubject([]);
    this._statuses = {};
    this._users = {};
    this._departments = {};
    this._checked_in = new BehaviorSubject([]);
    this.booking_rules = this._org.active_building.pipe(filter((bld) => !!bld), switchMap((bld) => Xu(bld.id, `desk_booking_rules`).pipe(catchError(() => of({ details: [] })))), map((_) => _?.details instanceof Array ? _.details : []), shareReplay(1));
    this.desk_list = this._state.level.pipe(debounceTime(50), switchMap((lvl) => Xu(lvl.id, "desks").pipe(catchError(() => of({ details: [] })), map((i) => (i?.details instanceof Array ? i.details : []).map((j) => new Desk(__spreadProps(__spreadValues({}, j), { zone: lvl })))))), catchError((e) => []), shareReplay(1));
    this._bind = combineLatest([
      this._state.level,
      this._state.options
    ]).pipe(debounceTime(300), filter(([_, { is_public }]) => !!_ && !is_public), map(([lvl]) => {
      this._statuses = {};
      const mod = this._org.module("area_management", "AreaManagement");
      if (!mod)
        return;
      const binding = mod.variable(lvl.id);
      if (!binding)
        return;
      this.subscription(`lvl-in_use`, binding.bindThenSubscribe((d) => this.processBindingChange(d || {}, mod.id)));
    }));
    this._booking_list = combineLatest([
      this._options,
      this._state.level
    ]).pipe(filter(([_, lvl]) => (_.use_api || _.date > endOfDay(Date.now()).valueOf()) && !!lvl), switchMap(([_, level]) => {
      return queryBookings({
        type: "desk",
        period_start: getUnixTime(startOfDay(_.date || Date.now())),
        period_end: getUnixTime(endOfDay(_.date || Date.now())),
        zones: level.id
      });
    }), debounceTime(200), tap((bookings) => {
      this._in_use.next(bookings.map((_) => _.asset_id));
      this._checked_in.next(bookings.filter((_) => _.checked_in).map((_) => _.asset_id));
    }), shareReplay(1));
    this._state_change = combineLatest([
      this.desk_list,
      this._in_use,
      this._presence,
      this._checked_in,
      this._signs_of_life,
      this.booking_rules,
      this._options
    ]).pipe(debounceTime(50), map(async ([desks, in_use, presence, checked_in, signs, restrictions]) => {
      this._statuses = {};
      const level = await nextValueFrom(this._state.level);
      for (const { id, bookable, map_id } of desks) {
        const d_id = map_id || id;
        const is_used = in_use.some((i) => d_id === i);
        const has_presence = presence.some((i) => d_id === i);
        const has_signs = signs.some((i) => d_id === i);
        const is_checked_in = checked_in.some((i) => d_id === i) || is_used && this._settings.get(`app.desks.auto_checkin`);
        const is_restricted = rulesForResource({
          date: Date.now(),
          duration: 60,
          host: currentUser(),
          resource: {
            id,
            zones: [level.parent_id, level.id]
          }
        }, restrictions)?.hidden;
        if (!this._statuses[d_id])
          this._statuses[d_id] = signal("free");
        this._statuses[d_id].set(bookable && !is_restricted ? !is_used && !has_presence && !is_checked_in ? has_signs ? "signs-of-life" : "free" : !has_presence && !is_checked_in ? "pending" : "busy" : "not-bookable");
      }
      this.processDesks(desks);
    }));
    this.init();
  }
  async init() {
    await firstTruthyValueFrom(this._org.initialised);
    this.setOptions({
      enable_booking: this._settings.get("app.desks.enable_maps") !== false
    });
    this.subscription("bookings", this._booking_list.subscribe());
    this.subscription("bind", this._bind.subscribe());
    this.subscription("booking_rules", this.booking_rules.subscribe());
    this.subscription("changes", this._state_change.subscribe());
    this.subscription("desks", this.desk_list.subscribe((desks) => this.processDesks(desks)));
  }
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
  processBindingChange({ value }, system_id) {
    const devices = (value || []).filter((v) => !["desk", "booking"].includes(v.location));
    const desks = (value || []).filter((v) => v.location === "desk" || v.location === "booking" && v.type === "desk");
    const date = this._options.getValue().date || Date.now();
    if (date <= endOfDay(Date.now()).valueOf() && !this._options.getValue().use_api) {
      this._in_use.next(desks.filter((v) => v.location === "booking").map((v) => v.map_id || v.asset_id));
      this._checked_in.next(desks.filter((v) => v.location === "booking" && v.checked_in).map((v) => v.map_id || v.asset_id));
      this._presence.next(desks.filter((v) => v.at_location).map((v) => v.map_id || v.asset_id));
      this._signs_of_life.next(desks.filter((v) => v.signs_of_life).map((v) => v.map_id || v.asset_id));
    }
    const departments = this._settings.get("app.department_map") || {};
    for (const desk of desks) {
      this._users[desk.map_id || desk.asset_id] = desk.staff_name;
      this._departments[desk.map_id || desk.asset_id] = departments[desk.department] || "";
    }
    this.processDevices(devices, system_id);
    this.timeout("update", () => this.updateStatus(), 100);
  }
  updateStatus() {
    const style_map = {};
    const colours = this._settings.get("app.explore.colors") || {};
    for (const desk_id in this._statuses) {
      if (!this._statuses[desk_id])
        this._statuses[desk_id] = signal("free");
      const s = this._statuses[desk_id]();
      style_map[`#${desk_id}`] = {
        fill: colours[`desk-${s}`] || colours[`${s}`] || DEFAULT_COLOURS[`${s}`]
      };
    }
    this._state.setStyles("desks", style_map);
  }
  processDevices(devices, system_id) {
    const list = [];
    for (const device of devices) {
      const x = device.x / device.map_width;
      const y = device.y / device.map_height;
      list.push({
        track_id: `device:hover:${x},${y}`,
        location: {
          x: device.coordinates_from?.includes("right") ? 1 - x : x,
          y: device.coordinates_from?.includes("bottom") ? 1 - y : y
        },
        content: ExploreDeviceInfoComponent,
        z_index: 20,
        data: __spreadProps(__spreadValues({}, device), { system: system_id })
      });
    }
    this._state.setFeatures("devices", list);
  }
  processDesks(desks) {
    const list = [];
    const actions = [];
    const options = this._options.getValue();
    const show_desk_users = this._settings.get("app.desks.show_users") ?? true;
    for (const desk of desks) {
      if (!this._statuses[desk.map_id]) {
        this._statuses[desk.map_id] = signal("free");
      }
      list.push({
        track_id: `desk:hover:${desk.map_id || desk.id}`,
        location: desk.map_id || desk.id,
        content: ExploreDeskInfoComponent,
        full_size: true,
        no_scale: true,
        data: {
          id: desk.map_id || desk.id,
          map_id: desk.name,
          name: desk.name || desk.map_id,
          user: show_desk_users ? this._users[desk.map_id] || desk.staff_name || desk.assigned_name : "",
          status: this._statuses[desk.map_id],
          department: this._departments[desk.map_id] || ""
        },
        z_index: 20
      });
      if (!desk.bookable)
        continue;
      let can_book = true;
      const book_fn = async () => {
        if (!can_book)
          return;
        await this._bookDesk(desk, options);
      };
      ["mousedown", "touchstart"].forEach((event) => actions.push({
        id: desk.map_id || desk.id,
        action: event,
        priority: 10,
        callback: () => {
          can_book = true;
          this.timeout("booking", () => can_book = false);
        }
      }));
      ["mouseup", "touchend"].forEach((event) => actions.push({
        id: desk.map_id || desk.id,
        action: event,
        priority: 10,
        callback: book_fn
      }));
    }
    this._state.setActions("desks", this._options.getValue().enable_booking ? actions : []);
    this._state.setFeatures("desks", list);
    this.timeout("update", () => this.updateStatus(), 100);
  }
  async _setBookingTime(date, duration, host = false, resource = null, all_day = false) {
    let user = null;
    if (!!this._settings.get("app.desks.allow_time_changes")) {
      const until = endOfDay(addDays(Date.now(), this._settings.get("app.desks.available_period") || 90));
      const allow_all_day = !!this._settings.get("app.desks.allow_all_day");
      const ref = this._dialog.open(SetDatetimeModalComponent, {
        data: {
          date,
          duration,
          until,
          host,
          resource,
          all_day,
          allow_all_day
        }
      });
      const details = await lastValueFrom(ref.afterClosed());
      if (!details)
        throw "User cancelled";
      date = details.date;
      duration = details.duration;
      user = details.user;
      all_day = details.all_day;
    }
    return { date, duration, user, all_day };
  }
  async _bookDesk(desk, options) {
    if (this._statuses[desk.id]?.() !== "free") {
      return notifyError(i18n("EXPLORE.DESK_AVAILABLE_ERROR", {
        name: desk.name || "Desk"
      }));
    }
    if (desk.groups?.length && !desk.groups.find((_) => currentUser().groups.includes(_))) {
      return notifyError(i18n("EXPLORE.DESK_GROUP_ERROR", { name: desk.name || "Desk" }));
    }
    this._bookings.newForm("desk");
    this._bookings.setOptions({ type: "desk" });
    if (options.date) {
      this._bookings.form.patchValue({
        date: options.date
      });
      this._bookings.form.patchValue({
        all_day: !!options.all_day
      });
    }
    let { date, duration, user, all_day } = await this._setBookingTime(this._bookings.form.value.date, this._bookings.form.value.duration, this._options.getValue()?.custom ?? false, desk, !!options.all_day);
    user = user || options.host || currentUser();
    const user_email = user?.email;
    this._bookings.form.patchValue({
      resources: [desk],
      asset_id: desk.id,
      asset_name: desk.name,
      date,
      duration: all_day ? 12 * 60 : duration,
      all_day,
      map_id: desk?.map_id || desk?.id,
      description: desk.name,
      user,
      user_email,
      booking_type: "desk",
      zones: desk.zone ? [desk.zone?.parent_id, desk.zone?.id] : []
    });
    const restrictions = await nextValueFrom(this.booking_rules);
    const is_restricted = rulesForResource({
      date,
      duration,
      host: currentUser(),
      resource: {
        id: desk.id,
        zones: [desk.zone?.parent_id, desk.zone?.id]
      }
    }, restrictions)?.hidden;
    if (is_restricted) {
      return notifyError(i18n("EXPLORE.DESK_RESTRICTION_ERROR", {
        name: desk.name || "Desk"
      }));
    }
    await this._bookings.confirmPost().catch((e) => {
      console.log(e);
      notifyError(i18n("EXPLORE.DESK_BOOKING_ERROR", {
        name: desk.name || "Desk",
        error: e.message || e.error || e
      }));
      throw e;
    });
    this._users[desk.map_id] = (options.host || currentUser())?.name;
    notifySuccess(i18n("EXPLORE.DESK_BOOKING_SUCCESS", { name: desk.name || "Desk" }));
  }
};
_ExploreDesksService.\u0275fac = function ExploreDesksService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreDesksService)();
};
_ExploreDesksService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreDesksService, factory: _ExploreDesksService.\u0275fac });
var ExploreDesksService = _ExploreDesksService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreDesksService, [{
    type: Injectable
  }], () => [], null);
})();

// libs/explore/src/lib/explore-map-control.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ExploreMapControlComponent_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r3 = ctx.$implicit;
    \u0275\u0275property("value", bld_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r3.display_name || bld_r3.name, " ");
  }
}
function ExploreMapControlComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 1)(1, "mat-select", 3);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("ngModelChange", function ExploreMapControlComponent_Conditional_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setBuilding($event));
    });
    \u0275\u0275repeaterCreate(3, ExploreMapControlComponent_Conditional_1_For_4_Template, 2, 2, "mat-option", 4, _forTrack0);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(2, 1, ctx_r1.building));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(5, 3, ctx_r1.buildings));
  }
}
function ExploreMapControlComponent_Conditional_3_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lvl_r5 = ctx.$implicit;
    \u0275\u0275property("value", lvl_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lvl_r5.display_name || lvl_r5.name, " ");
  }
}
function ExploreMapControlComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 2);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275elementStart(2, "mat-select", 5);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("ngModelChange", function ExploreMapControlComponent_Conditional_3_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setLevel($event));
    });
    \u0275\u0275repeaterCreate(4, ExploreMapControlComponent_Conditional_3_For_5_Template, 2, 2, "mat-option", 4, _forTrack0);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("has-bld", ((tmp_1_0 = \u0275\u0275pipeBind1(1, 2, ctx_r1.buildings)) == null ? null : tmp_1_0.length) > 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(3, 4, ctx_r1.level));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(6, 6, ctx_r1.levels));
  }
}
var _ExploreMapControlComponent = class _ExploreMapControlComponent extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._state = inject(ExploreStateService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this.buildings = this._org.active_buildings;
    this.building = this._org.active_building;
    this.levels = this._org.active_levels;
    this.level = this._state.level;
    this.setLevel = (lvl) => {
      this._state.setFeatures("_located", []);
      this.timeout("set_level", () => this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone: lvl.id }
      }), 201);
    };
    this.setBuilding = (bld) => this._org.building = bld;
  }
  async ngOnInit() {
    await this._org.initialised.pipe(first((_) => _)).toPromise();
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => params.has("zone") ? this._state.setLevel(params.get("zone")) : ""));
  }
};
_ExploreMapControlComponent.\u0275fac = function ExploreMapControlComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreMapControlComponent)();
};
_ExploreMapControlComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreMapControlComponent, selectors: [["explore-map-controls"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 6, consts: [[1, "flex", "w-full", "space-x-2"], ["overlay", "", "buildings", "", "has-bld", "true", "appearance", "outline", 1, "no-subscript", "min-w-42", "flex-1"], ["overlay", "", "levels", "", "appearance", "outline", 1, "no-subscript", "min-w-41", "flex-1"], ["placeholder", "Select Building...", 3, "ngModelChange", "ngModel"], [3, "value"], ["placeholder", "Select Level...", 3, "ngModelChange", "ngModel"]], template: function ExploreMapControlComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, ExploreMapControlComponent_Conditional_1_Template, 6, 5, "mat-form-field", 1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275conditionalCreate(3, ExploreMapControlComponent_Conditional_3_Template, 7, 8, "mat-form-field", 2);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_0_0;
    let tmp_1_0;
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_0_0 = \u0275\u0275pipeBind1(2, 2, ctx.buildings)) == null ? null : tmp_0_0.length) > 1 ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(4, 4, ctx.levels)) == null ? null : tmp_1_0.length) ? 3 : -1);
  }
}, dependencies: [CommonModule, AsyncPipe, MatFormFieldModule, MatFormField, MatSelectModule, MatSelect, MatOption, FormsModule, NgControlStatus, NgModel], styles: ["\n\nmat-form-field[has-bld=true][_ngcontent-%COMP%] {\n  max-width: calc(50vw - 2.5rem);\n}\n[full][_nghost-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  max-width: calc(50% - 2.5rem);\n}\n/*# sourceMappingURL=explore-map-control.component.css.map */"] });
var ExploreMapControlComponent = _ExploreMapControlComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreMapControlComponent, [{
    type: Component,
    args: [{ selector: "explore-map-controls", template: `
        <div class="flex w-full space-x-2">
            @if ((buildings | async)?.length > 1) {
                <mat-form-field
                    overlay
                    buildings
                    class="no-subscript min-w-42 flex-1"
                    has-bld="true"
                    appearance="outline"
                >
                    <mat-select
                        placeholder="Select Building..."
                        [ngModel]="building | async"
                        (ngModelChange)="setBuilding($event)"
                    >
                        @for (bld of buildings | async; track bld.id) {
                            <mat-option [value]="bld">
                                {{ bld.display_name || bld.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            }
            @if ((levels | async)?.length) {
                <mat-form-field
                    overlay
                    levels
                    class="no-subscript min-w-41 flex-1"
                    [attr.has-bld]="(buildings | async)?.length > 1"
                    appearance="outline"
                >
                    <mat-select
                        placeholder="Select Level..."
                        [ngModel]="level | async"
                        (ngModelChange)="setLevel($event)"
                    >
                        @for (lvl of levels | async; track lvl.id) {
                            <mat-option [value]="lvl">
                                {{ lvl.display_name || lvl.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            }
        </div>
    `, imports: [CommonModule, MatFormFieldModule, MatSelectModule, FormsModule], styles: ["/* angular:styles/component:css;09806d4e56396268b721c1e6773559de8fe2445d8858101e567dcb2c1dd21cd7;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-map-control.component.ts */\nmat-form-field[has-bld=true] {\n  max-width: calc(50vw - 2.5rem);\n}\n:host[full] mat-form-field {\n  max-width: calc(50% - 2.5rem);\n}\n/*# sourceMappingURL=explore-map-control.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreMapControlComponent, { className: "ExploreMapControlComponent", filePath: "libs/explore/src/lib/explore-map-control.component.ts", lineNumber: 74 });
})();

// libs/explore/src/lib/explore-locker-bank-modal.component.ts
var _ExploreLockerBankModalComponent = class _ExploreLockerBankModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this.bank = this._data.bank;
    this.lockers = this._data.lockers.reduce((map2, l) => {
      map2[l.id] = "busy";
      return map2;
    }, {});
  }
};
_ExploreLockerBankModalComponent.\u0275fac = function ExploreLockerBankModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreLockerBankModalComponent)();
};
_ExploreLockerBankModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreLockerBankModalComponent, selectors: [["explore-locker-bank-modal"]], decls: 8, vars: 3, consts: [[1, "text-xl", "font-medium"], ["btn", "", "icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "h-[65vh]", "overflow-hidden"], [3, "bank", "bank_status"]], template: function ExploreLockerBankModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "h2", 0);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 1)(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "main", 2);
    \u0275\u0275element(7, "locker-grid", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.bank.name);
    \u0275\u0275advance(5);
    \u0275\u0275property("bank", ctx.bank)("bank_status", ctx.lockers);
  }
}, dependencies: [MatRippleModule, MatRipple, LockerGridComponent, IconComponent], encapsulation: 2 });
var ExploreLockerBankModalComponent = _ExploreLockerBankModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreLockerBankModalComponent, [{
    type: Component,
    args: [{ selector: "explore-locker-bank-modal", template: `
        <header>
            <h2 class="text-xl font-medium">{{ bank.name }}</h2>
            <button btn icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="h-[65vh] overflow-hidden">
            <locker-grid [bank]="bank" [bank_status]="lockers"></locker-grid>
        </main>
    `, imports: [MatRippleModule, LockerGridComponent, IconComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreLockerBankModalComponent, { className: "ExploreLockerBankModalComponent", filePath: "libs/explore/src/lib/explore-locker-bank-modal.component.ts", lineNumber: 29 });
})();

// libs/explore/src/lib/explore-locker-bank-info.component.ts
var _c04 = (a0, a1) => ({ used: a0, count: a1 });
function ExploreLockerBankInfoComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "h3", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 5);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap("bg-base-100 pointer-events-none absolute top-0 left-0 rounded-sm p-4 shadow-sm " + ctx_r1.x_pos + " " + ctx_r1.y_pos);
    \u0275\u0275property("id", (ctx_r1.bank == null ? null : ctx_r1.bank.map_id) || (ctx_r1.bank == null ? null : ctx_r1.bank.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.bank.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 5, "EXPLORE.LOCKERS_USE", \u0275\u0275pureFunction2(8, _c04, ctx_r1.in_use_count, ctx_r1.bank.lockers.length || 1)), " ");
  }
}
var _ExploreLockerBankInfoComponent = class _ExploreLockerBankInfoComponent {
  constructor() {
    this._details = inject(MAP_FEATURE_DATA);
    this._element = inject(ElementRef);
    this._dialog = inject(MatDialog);
    this.bank = this._details.bank;
    this.in_use_count = this._details.in_use_count;
  }
  ngOnInit(tries = 0) {
    if (tries > 10)
      return;
    setTimeout(() => {
      const parent = this._element.nativeElement.parentElement?.parentElement;
      if (!parent)
        return this.ngOnInit(++tries);
      const position = {
        y: parseInt(parent.style.top, 10) / 100,
        x: parseInt(parent.style.left, 10) / 100
      };
      this.y_pos = position.y >= 0.5 ? "bottom" : "top";
      this.x_pos = position.x >= 0.5 ? "right" : "left";
    }, 200);
  }
  openBankModal() {
    this._dialog.open(ExploreLockerBankModalComponent, {
      data: __spreadValues({}, this._details)
    });
  }
};
_ExploreLockerBankInfoComponent.\u0275fac = function ExploreLockerBankInfoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreLockerBankInfoComponent)();
};
_ExploreLockerBankInfoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreLockerBankInfoComponent, selectors: [["explore-locker-bank-info"]], decls: 4, vars: 6, consts: [["desk_tooltip", ""], [1, "pointer-events-auto", "relative", "h-full", "w-full", 3, "click"], ["customTooltip", "", 1, "pointer-events-auto", "relative", "h-full", "w-full", 3, "content", "backdrop", "xPosition", "yPosition", "hover", "delay"], ["name", "space-info", 3, "id"], [1, "font-medium"], [1, "text-sm", "whitespace-nowrap"]], template: function ExploreLockerBankInfoComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 1);
    \u0275\u0275listener("click", function ExploreLockerBankInfoComponent_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openBankModal());
    });
    \u0275\u0275element(1, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, ExploreLockerBankInfoComponent_ng_template_2_Template, 6, 11, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const desk_tooltip_r3 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("content", desk_tooltip_r3)("backdrop", false)("xPosition", "center")("yPosition", "center")("hover", true)("delay", 3e3);
  }
}, dependencies: [TranslatePipe, CustomTooltipComponent], encapsulation: 2 });
var ExploreLockerBankInfoComponent = _ExploreLockerBankInfoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreLockerBankInfoComponent, [{
    type: Component,
    args: [{ selector: "explore-locker-bank-info", template: `
        <button
            class="pointer-events-auto relative h-full w-full"
            (click)="openBankModal()"
        >
            <div
                customTooltip
                [content]="desk_tooltip"
                [backdrop]="false"
                [xPosition]="'center'"
                [yPosition]="'center'"
                [hover]="true"
                [delay]="3000"
                class="pointer-events-auto relative h-full w-full"
            ></div>
        </button>
        <ng-template #desk_tooltip>
            <div
                name="space-info"
                [id]="bank?.map_id || bank?.id"
                [class]="
                    'bg-base-100 pointer-events-none absolute top-0 left-0 rounded-sm p-4 shadow-sm ' +
                    x_pos +
                    ' ' +
                    y_pos
                "
            >
                <h3 class="font-medium">{{ bank.name }}</h3>
                <p class="text-sm whitespace-nowrap">
                    {{
                        'EXPLORE.LOCKERS_USE'
                            | translate
                                : {
                                      used: in_use_count,
                                      count: bank.lockers.length || 1,
                                  }
                    }}
                </p>
            </div></ng-template
        >
    `, imports: [TranslatePipe, CustomTooltipComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreLockerBankInfoComponent, { className: "ExploreLockerBankInfoComponent", filePath: "libs/explore/src/lib/explore-locker-bank-info.component.ts", lineNumber: 64 });
})();

// libs/explore/src/lib/explore-lockers.service.ts
var _ExploreLockersService = class _ExploreLockersService extends AsyncHandler {
  constructor() {
    super();
    this._explore = inject(ExploreStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._status = new BehaviorSubject([]);
    this._change = new BehaviorSubject(0);
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
      this._explore.level,
      this.lockers$
    ]).pipe(map(([level, list]) => list.filter((item) => !level || (item.zones || item.bank?.zones || []).includes(level.id))));
    this.filtered_banks = combineLatest([
      this._explore.level,
      this.lockers_banks$
    ]).pipe(map(([level, list]) => list.filter((item) => !level || item.zones.includes(level.id))));
    this.status = combineLatest([
      this._explore.level,
      this._explore.options,
      this._org.active_building
    ]).pipe(map(([lvl, { is_public }]) => {
      if (!lvl || is_public)
        return [];
      const mod = this._org.module("area_management", "AreaManagement");
      if (!mod)
        return of({});
      const binding = mod.variable(lvl.id);
      this.subscription(`lvl-in_use`, binding.bindThenSubscribe((data) => this._status.next(data?.value?.filter((_) => _.location === "locker") || [])));
    }));
    this.locker_status = combineLatest([
      this._explore.level,
      this.lockers_banks$,
      this.lockers$,
      this._status
    ]).pipe(map(([lvl, locker_banks, lockers, status]) => {
      if (!lvl)
        return [];
      const features = [];
      const map_status = {};
      const colours = this._settings.get("app.explore.colors") || {};
      const banks = unique(locker_banks.filter((_) => _.level_id === lvl.id).map((_) => _.id));
      for (const bank of banks) {
        const bank_lockers = lockers.filter((_) => _.bank_id === bank);
        let in_use_count = 0;
        for (const locker of bank_lockers) {
          const in_use = status.find((_) => _.locker_id === locker.id && _.allocated);
          in_use_count += in_use ? 1 : 0;
        }
        const bank_info = locker_banks.find((_) => _.id === bank);
        features.push({
          location: bank_info.map_id,
          content: ExploreLockerBankInfoComponent,
          full_size: true,
          no_scale: true,
          z_index: 20,
          data: {
            bank: bank_info,
            lockers,
            in_use_count,
            locker_count: bank_lockers.length,
            system: this._org.binding("area_management")
          }
        });
        const in_use_percent = in_use_count / bank_lockers.length;
        const value = in_use_percent > 0.8 ? "busy" : in_use_percent > 0.3 ? "pending" : "free";
        map_status[`#${bank_info.map_id}`] = {
          fill: colours[`lockers-${value}`] || colours[`${value}`] || DEFAULT_COLOURS[`${value}`]
        };
      }
      this._explore.setStyles("lockers", map_status);
      this._explore.setFeatures("lockers", features);
    }));
    this.subscription("status", this.status.subscribe());
    this.subscription("locker_status", this.locker_status.subscribe());
  }
};
_ExploreLockersService.\u0275fac = function ExploreLockersService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreLockersService)();
};
_ExploreLockersService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreLockersService, factory: _ExploreLockersService.\u0275fac, providedIn: "root" });
var ExploreLockersService = _ExploreLockersService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreLockersService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/explore/src/lib/explore-parking.service.ts
var _ExploreParkingService = class _ExploreParkingService extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._state = inject(ExploreStateService);
    this._settings = inject(SettingsService);
    this._bookings = inject(BookingFormService);
    this._parking = inject(ParkingService);
    this._dialog = inject(MatDialog);
    this._options = new BehaviorSubject({});
    this._poll = new BehaviorSubject(0);
    this.options = this._options.asObservable();
    this.on_book = null;
    this.levels = this._org.active_levels.pipe(map((l) => l.filter((_) => _.tags.includes("parking"))));
    this.booking_rules = this._org.active_building.pipe(filter((bld) => !!bld), switchMap((bld) => Xu(bld.id, `parking_booking_rules`).pipe(catchError(() => of({ details: [] })))), map((_) => _?.details instanceof Array ? _.details : []), shareReplay(1));
    this.events = combineLatest([
      this._org.active_building,
      this._state.options,
      this._options,
      this._poll
    ]).pipe(debounceTime(300), switchMap(([bld, { is_public }, opts]) => is_public ? of([]) : queryBookings({
      period_start: getUnixTime(startOfMinute(opts.date || Date.now())),
      period_end: getUnixTime(endOfMinute(opts.date || Date.now())),
      type: "parking",
      zones: this._settings.get("app.use_region") ? bld?.parent_id : bld?.id,
      rejected: false
    })), shareReplay(1));
    this.user_events = combineLatest([this._options]).pipe(switchMap(([_]) => queryBookings({
      period_start: getUnixTime(startOfDay(_.date || Date.now())),
      period_end: getUnixTime(endOfDay(_.date || Date.now())),
      type: "parking",
      email: _?.user || currentUser()?.email
    })), shareReplay(1));
    this.spaces = this.levels.pipe(switchMap((_) => forkJoin(_.map((l) => Xu(l.id, "parking-spaces").pipe(map((d) => (d.details instanceof Array ? d.details : []).map((s) => __spreadProps(__spreadValues({}, s), { zone_id: l.id }))))))), map((_) => flatten(_)), shareReplay(1));
    this.active_spaces = combineLatest([
      this.spaces,
      this._state.level
    ]).pipe(map(([spaces, level]) => spaces.filter((_) => _.zone_id === level.id)));
    this._users = {};
    this._plate_numbers = {};
    this.available_spaces = combineLatest([
      this.events,
      this.active_spaces,
      this._parking.users,
      this.booking_rules,
      this._options
    ]).pipe(map(([events, spaces, users, rules, { date }]) => {
      const available = spaces.filter((space) => {
        const event = events.find((e) => e.asset_id === space.id && !e.rejected);
        const level = this._org.levelWithID([space.zone_id]);
        const assigned = `${event?.user_email || space.assigned_to || ""}`.toLowerCase();
        const user = users.find((u) => u.email.toLowerCase() === assigned.toLowerCase());
        const is_restricted = rulesForResource({
          date: date || Date.now(),
          duration: 60,
          host: currentUser(),
          resource: {
            id: space.id,
            zones: [level.parent_id, level.id]
          }
        }, rules)?.hidden;
        this._users[space.id] = assigned;
        this._plate_numbers[space.id] = event?.extension_data?.plate_number || user?.plate_number || void 0;
        return !event && !is_restricted;
      });
      this._updateParkingSpaces(spaces, available);
      return available;
    }));
    this.subscription("spaces", this.available_spaces.subscribe());
    this.setOptions({
      enable_booking: this._settings.get("app.parking.enable_maps") !== false
    });
  }
  startPolling() {
    this.interval("poll", () => this._poll.next(Date.now()), 10 * 1e3);
    this._poll.next(Date.now());
    return () => this.stopPolling();
  }
  stopPolling() {
    this.clearInterval("poll");
  }
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
  async _updateParkingSpaces(spaces, available) {
    const styles = {};
    const features = [];
    const actions = [];
    const colours = this._settings.get("app.explore.colors") || {};
    let options = this._options.getValue();
    const assigned_space = await nextValueFrom(this._parking.assigned_space);
    const deny_parking_access = await nextValueFrom(this._parking.deny_parking_access);
    const booked_space = await nextValueFrom(this._parking.booked_space);
    for (const space of spaces) {
      const can_book = !!available.find((_) => _.id === space.id);
      const is_workplace = this._settings.app_name.toLowerCase().includes("workplace") || this._settings.app_name.toLowerCase().includes("staff");
      const is_assigned = is_workplace ? false : !!space.assigned_to;
      const id = space.map_id || space.id;
      const status = is_assigned ? can_book ? "pending" : "busy" : can_book ? "free" : "busy";
      styles[`#${id}`] = {
        fill: colours[`parking-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`],
        opacity: 0.6
      };
      features.push({
        location: `${id}`,
        content: ExploreParkingInfoComponent,
        z_index: 20,
        hover: true,
        data: __spreadProps(__spreadValues({}, space), {
          user: this._users[space.id],
          plate_number: this._plate_numbers[space.id],
          status: status === "pending" && is_assigned ? "reserved" : status
        })
      });
      if (!can_book)
        continue;
      const book_fn = async () => {
        if (this.on_book) {
          await this.on_book(space);
          this._poll.next(Date.now());
          return;
        }
        if (deny_parking_access) {
          return notifyError(i18n("EXPLORE.PARKING_PERMISSIONS_ERROR", {
            name: space.zone?.display_name || space.zone?.name
          }));
        }
        console.log("Booked Space:", booked_space);
        if (assigned_space && booked_space) {
          return notifyError(i18n("EXPLORE.PARKING_ASSIGNED_ERROR", {
            name: space.name || space.id
          }));
        }
        if (booked_space) {
          return notifyError(i18n("EXPLORE.PARKING_EXISTING_ERROR"));
        }
        if (status !== "free") {
          return notifyError(i18n("EXPLORE.PARKING_AVAILABLE_ERROR", {
            name: space.name || "Parking Space"
          }));
        }
        if (space.groups?.length && !space.groups.find((_) => currentUser().groups.includes(_))) {
          return notifyError(i18n("EXPLORE.PARKING_GROUP_ERROR", {
            name: space.name
          }));
        }
        this._bookings.newForm("parking");
        this._bookings.setOptions({ type: "parking" });
        options = this._options.getValue();
        let user = options.host || currentUser();
        const user_email = user?.email;
        const zone = this._org.levelWithID([
          space.zone_id || space.zone
        ]) || this._state.active_level;
        const date = !options.date || isSameDay(options.date, Date.now()) ? startOfMinute(Date.now()).valueOf() : setHours(options.date, 8).valueOf();
        this._bookings.form.patchValue({
          resources: [space],
          asset_id: space.id,
          asset_name: space.name,
          date,
          duration: 11 * 60,
          all_day: true,
          map_id: space?.map_id || space?.id,
          description: space.name,
          user,
          user_email,
          booking_type: "parking",
          zones: [
            this._org.organisation.id,
            this._org.region?.id,
            zone.parent_id,
            zone.id
          ]
        });
        await this._bookings.confirmPost().catch((e) => {
          if (e === "User cancelled")
            throw e;
          notifyError(i18n("EXPLORE.PARKING_BOOKING_ERROR", {
            name: space.name || space.id,
            error: e.message || e.error || e
          }));
          throw e;
        });
        notifySuccess(i18n("EXPLORE.PARKING_BOOKING_SUCCESS", {
          name: space.name || space.id
        }));
        this.timeout("poll", () => this._poll.next(Date.now()), 1e3);
      };
      actions.push({
        id,
        action: "click",
        priority: 10,
        callback: book_fn
      });
    }
    this._state.setActions("parking", options.enable_booking ? actions : []);
    this._state.setStyles("parking", styles);
    this._state.setFeatures("parking", features);
  }
  async _setBookingTime(date, duration, host = false, resource = null) {
    let user = null;
    if (!!this._settings.get("app.parking.allow_time_changes")) {
      const until = endOfDay(addDays(Date.now(), this._settings.get("app.parking.available_period") || 90));
      const ref = this._dialog.open(SetDatetimeModalComponent, {
        data: { date, duration, until, host, resource }
      });
      const details = await ref.afterClosed().toPromise();
      if (!details)
        throw "User cancelled";
      date = details.date;
      duration = details.duration;
      user = details.user;
    }
    return { date, duration, user };
  }
};
_ExploreParkingService.\u0275fac = function ExploreParkingService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreParkingService)();
};
_ExploreParkingService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreParkingService, factory: _ExploreParkingService.\u0275fac });
var ExploreParkingService = _ExploreParkingService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreParkingService, [{
    type: Injectable
  }], () => [], null);
})();

// libs/explore/src/lib/explore-poi-modal.component.ts
var _c05 = ["media_el"];
function ExplorePointOfInterestModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, " No available details for this point of interest. ");
    \u0275\u0275elementEnd();
  }
}
function ExplorePointOfInterestModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.item.image, \u0275\u0275sanitizeUrl)("alt", ctx_r0.item.name);
  }
}
function ExplorePointOfInterestModalComponent_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "video", 7, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r0.item.media_url);
  }
}
function ExplorePointOfInterestModalComponent_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "audio", 7, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r0.item.media_url);
  }
}
function ExplorePointOfInterestModalComponent_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 10);
  }
}
function ExplorePointOfInterestModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275conditionalCreate(1, ExplorePointOfInterestModalComponent_Conditional_10_Conditional_1_Template, 2, 1, "video", 7)(2, ExplorePointOfInterestModalComponent_Conditional_10_Conditional_2_Template, 2, 1, "audio", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8)(4, "div", 9);
    \u0275\u0275conditionalCreate(5, ExplorePointOfInterestModalComponent_Conditional_10_Conditional_5_Template, 1, 0, "div", 10);
    \u0275\u0275elementStart(6, "button", 11);
    \u0275\u0275listener("click", function ExplorePointOfInterestModalComponent_Conditional_10_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.togglePlay());
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "p", 12);
    \u0275\u0275text(10, "Read Aloud");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.item.media_type === "video" ? 1 : 2);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.playing() ? 5 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.playing() ? "stop" : "volume_up");
  }
}
function ExplorePointOfInterestModalComponent_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const details_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", details_r3 == null ? null : details_r3[0], " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(details_r3 == null ? null : details_r3[1]);
  }
}
function ExplorePointOfInterestModalComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, ExplorePointOfInterestModalComponent_Conditional_11_For_2_Template, 5, 2, "div", 13, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.item.extra_details);
  }
}
var _ExplorePointOfInterestModalComponent = class _ExplorePointOfInterestModalComponent {
  constructor() {
    this.item = inject(MAT_DIALOG_DATA);
    this.playing = signal(false);
    this._media_el = viewChild("media_el");
    this._on_ended = () => {
      this.playing.set(false);
      this._media_el()?.nativeElement.removeEventListener("ended", this._on_ended);
    };
  }
  togglePlay() {
    const el = this._media_el()?.nativeElement;
    if (!el)
      return;
    if (this.playing()) {
      el.pause();
    } else {
      el.addEventListener("ended", this._on_ended);
      el.currentTime = 0;
      el.play();
    }
    this.playing.set(!this.playing());
  }
};
_ExplorePointOfInterestModalComponent.\u0275fac = function ExplorePointOfInterestModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExplorePointOfInterestModalComponent)();
};
_ExplorePointOfInterestModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExplorePointOfInterestModalComponent, selectors: [["explore-poi-modal"]], viewQuery: function ExplorePointOfInterestModalComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._media_el, _c05, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, decls: 12, vars: 5, consts: [["media_el", ""], [1, "bg-base-100", "h-screen", "w-full", "max-w-md", "min-w-[20rem]", "overflow-auto", "rounded-sm", "sm:h-auto"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "bg-base-200", "m-4", "flex", "h-[calc(100vh-5.75rem)]", "w-[calc(100%-2rem)]", "items-center", "justify-center", "rounded-lg", "p-8", "text-center", "opacity-50", "sm:h-64"], [1, "bg-base-300", "h-48", "w-full", "object-contain", 3, "src", "alt"], [1, "text-sm"], [1, "pointer-events-none", "absolute", "opacity-0"], ["auth", "", "controls", "", 1, "h-full", "w-full", 3, "source"], [1, "border-base-200", "flex", "w-full", "flex-col", "items-center", "justify-center", "space-y-2", "border-t", "p-4"], [1, "relative"], [1, "bg-info", "absolute", "top-2", "left-2", "h-8", "w-8", "animate-ping", "rounded-full"], ["icon", "", "matRipple", "", 1, "bg-base-200", "relative", "h-12", "w-12", 3, "click"], [1, "text-xs", "font-medium"], [1, "border-base-200", "flex", "space-x-4", "border-t", "p-4"], [1, "text-info", "w-20", "min-w-20"]], template: function ExplorePointOfInterestModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "header")(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 2)(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "main");
    \u0275\u0275conditionalCreate(8, ExplorePointOfInterestModalComponent_Conditional_8_Template, 2, 0, "p", 3);
    \u0275\u0275conditionalCreate(9, ExplorePointOfInterestModalComponent_Conditional_9_Template, 1, 2, "img", 4);
    \u0275\u0275conditionalCreate(10, ExplorePointOfInterestModalComponent_Conditional_10_Template, 11, 3);
    \u0275\u0275conditionalCreate(11, ExplorePointOfInterestModalComponent_Conditional_11_Template, 3, 0, "div", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.item.name);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx.item.image && !ctx.item.media_url && !(ctx.item.extra_details == null ? null : ctx.item.extra_details.length) ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.item.image ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.item.media_url ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx.item.extra_details == null ? null : ctx.item.extra_details.length) ? 11 : -1);
  }
}, dependencies: [
  CommonModule,
  MatRippleModule,
  MatRipple,
  MatDialogModule,
  MatDialogClose,
  IconComponent,
  AuthenticatedImageDirective
], encapsulation: 2 });
var ExplorePointOfInterestModalComponent = _ExplorePointOfInterestModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExplorePointOfInterestModalComponent, [{
    type: Component,
    args: [{ selector: `explore-poi-modal`, template: `
        <div
            class="bg-base-100 h-screen w-full max-w-md min-w-[20rem] overflow-auto rounded-sm sm:h-auto"
        >
            <header>
                <h2>{{ item.name }}</h2>
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </header>
            <main>
                @if (
                    !item.image &&
                    !item.media_url &&
                    !item.extra_details?.length
                ) {
                    <p
                        class="bg-base-200 m-4 flex h-[calc(100vh-5.75rem)] w-[calc(100%-2rem)] items-center justify-center rounded-lg p-8 text-center opacity-50 sm:h-64"
                    >
                        No available details for this point of interest.
                    </p>
                }
                @if (item.image) {
                    <img
                        class="bg-base-300 h-48 w-full object-contain"
                        [src]="item.image"
                        [alt]="item.name"
                    />
                }
                @if (item.media_url) {
                    <div class="pointer-events-none absolute opacity-0">
                        @if (item.media_type === 'video') {
                            <video
                                #media_el
                                class="h-full w-full"
                                auth
                                [source]="item.media_url"
                                controls
                            ></video>
                        } @else {
                            <audio
                                #media_el
                                class="h-full w-full"
                                auth
                                [source]="item.media_url"
                                controls
                            ></audio>
                        }
                    </div>
                    <div
                        class="border-base-200 flex w-full flex-col items-center justify-center space-y-2 border-t p-4"
                    >
                        <div class="relative">
                            @if (playing()) {
                                <div
                                    class="bg-info absolute top-2 left-2 h-8 w-8 animate-ping rounded-full"
                                ></div>
                            }
                            <button
                                icon
                                matRipple
                                class="bg-base-200 relative h-12 w-12"
                                (click)="togglePlay()"
                            >
                                <icon>{{
                                    playing() ? 'stop' : 'volume_up'
                                }}</icon>
                            </button>
                        </div>
                        <p class="text-xs font-medium">Read Aloud</p>
                    </div>
                }
                @if (item.extra_details?.length) {
                    <div class="text-sm">
                        @for (details of item.extra_details; track $index) {
                            <div
                                class="border-base-200 flex space-x-4 border-t p-4"
                            >
                                <div class="text-info w-20 min-w-20">
                                    {{ details?.[0] }}
                                </div>
                                <div>{{ details?.[1] }}</div>
                            </div>
                        }
                    </div>
                }
            </main>
        </div>
    `, imports: [
      CommonModule,
      MatRippleModule,
      MatDialogModule,
      IconComponent,
      AuthenticatedImageDirective
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExplorePointOfInterestModalComponent, { className: "ExplorePointOfInterestModalComponent", filePath: "libs/explore/src/lib/explore-poi-modal.component.ts", lineNumber: 130 });
})();

// libs/explore/src/lib/explore-poi.service.ts
var _ExplorePointOfInterestService = class _ExplorePointOfInterestService extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._explore = inject(ExploreStateService);
    this._dialog = inject(MatDialog);
    this._features = this._org.active_building.pipe(switchMap(() => Xu(this._org.organisation.id, "points-of-interest").pipe(catchError((_) => of({ details: {} })))), map((_) => {
      const mapping = _.details || {};
      const levels = this._org.levelsForBuilding(this._org.building);
      const list = flatten(levels.map((lvl) => (mapping[lvl.id] || []).map((_2) => __spreadProps(__spreadValues({}, _2), {
        zone_id: lvl.id
      }))));
      return list;
    }), shareReplay(1));
    this._poi_list = combineLatest([
      this._features,
      this._explore.level
    ]).pipe(map(([features, level]) => features.filter((poi) => poi.zone_id === level.id)), shareReplay(1));
    this.subscription("poi_list", this._poi_list.subscribe((list) => {
      const features = [];
      const actions = [];
      for (const item of list) {
        if (!item.location)
          continue;
        if (!(item.extra_details?.length > 0 || item.image || item.media_url)) {
          continue;
        }
        let can_act = true;
        ["mousedown", "touchstart"].forEach((event) => actions.push({
          id: item.location,
          action: event,
          priority: 10,
          callback: () => {
            console.log("Mouse down or touch start");
            can_act = true;
            this.timeout("act", () => can_act = false);
          }
        }));
        ["mouseup", "touchend"].forEach((event) => actions.push({
          id: item.location,
          action: event,
          priority: 10,
          callback: () => {
            console.log("Mouse up or touch end");
            can_act ? this.viewDetails(item) : null;
          }
        }));
        features.push({
          track_id: `poi:hover:${item.location}`,
          location: item.location,
          content: ExploreDeskInfoComponent,
          full_size: true,
          no_scale: true,
          data: {
            id: item.location,
            map_id: item.location,
            name: item.name
          },
          z_index: 20
        });
      }
      this._explore.setActions("poi", actions || []);
      this._explore.setFeatures("poi", features || []);
    }));
  }
  viewDetails(item) {
    this._dialog.open(ExplorePointOfInterestModalComponent, {
      data: item
    });
  }
};
_ExplorePointOfInterestService.\u0275fac = function ExplorePointOfInterestService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExplorePointOfInterestService)();
};
_ExplorePointOfInterestService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExplorePointOfInterestService, factory: _ExplorePointOfInterestService.\u0275fac, providedIn: "root" });
var ExplorePointOfInterestService = _ExplorePointOfInterestService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExplorePointOfInterestService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/components/src/lib/map-canvas.component.ts
var _c06 = ["canvas"];
var _c12 = ["map-canvas", ""];
var _MapCanvasComponent = class _MapCanvasComponent extends AsyncHandler {
  get ratioed_height() {
    return +(this.width * this.ratio).toFixed(2);
  }
  constructor() {
    super();
    this._data = inject(MAP_FEATURE_DATA);
    this.zoom = 1;
    this.ratio = 1;
    this.svg_ratio = 1;
    this.width = 1e4;
    this.canvas_element = viewChild("canvas");
  }
  ngOnInit() {
    this.subscription("state", combineLatest([
      this._data.ratio$,
      this._data.zoom$,
      this._data.svg_ratio$
    ]).subscribe(([ratio, zoom, sr]) => this._handleMapChange(ratio, zoom, sr)));
    this.subscription("polygons", this._data.polygons$.subscribe((list) => this._handleStateChange(list)));
  }
  async _handleMapChange(ratio, zoom, svg_ratio) {
    const old_ratio = this.ratio;
    this.zoom = zoom;
    this.ratio = ratio;
    this.svg_ratio = svg_ratio;
    const width = this.width / 10;
    const height = this.width * this.ratio / 10;
    if (old_ratio === ratio)
      return;
    const canvas = this.canvas_element().nativeElement;
    canvas.width = width;
    canvas.height = height;
    const polygons = await nextValueFrom(this._data.polygons$);
    this._handleStateChange(polygons);
  }
  _handleStateChange(polygon_list) {
    const canvas = this.canvas_element().nativeElement;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    polygon_list.forEach((poly) => this._drawPolygon(poly));
  }
  _drawPolygon(polygon) {
    const points = polygon.points;
    if (!points?.length)
      return;
    const canvas = this.canvas_element().nativeElement;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    ctx.fillStyle = polygon.color + "80";
    ctx.beginPath();
    ctx.moveTo(points[0][0] * width, points[0][1] * height);
    points.forEach(([x, y]) => ctx.lineTo(x * width, y * height));
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = shiftColorTowards(polygon.color, "#888888", 0.5);
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(points[0][0] * width, points[0][1] * height);
    points.forEach(([x, y]) => ctx.lineTo(x * width, y * height));
    ctx.closePath();
    ctx.stroke();
    if (this._data.draw_points !== false) {
      ctx.fillStyle = "#fff";
      ctx.strokeStyle = polygon.color;
      ctx.lineWidth = 4;
      points.forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(x * width, y * height, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      });
    }
    if (this._data.draw_labels !== false) {
      const center = points.reduce((acc, [x, y]) => [acc[0] + x, acc[1] + y], [0, 0]);
      center[0] /= points.length;
      center[1] /= points.length;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#FFF";
      ctx.font = "32px sans-serif";
      ctx.fillText(polygon.name, center[0] * width + 1, center[1] * height + 2);
      ctx.fillStyle = "#000";
      ctx.fillText(polygon.name, center[0] * width, center[1] * height);
    }
  }
};
_MapCanvasComponent.\u0275fac = function MapCanvasComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MapCanvasComponent)();
};
_MapCanvasComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MapCanvasComponent, selectors: [["", "map-canvas", ""]], viewQuery: function MapCanvasComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.canvas_element, _c06, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, features: [\u0275\u0275InheritDefinitionFeature], attrs: _c12, decls: 2, vars: 4, consts: [["canvas", ""], [1, "absolute", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2"]], template: function MapCanvasComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "canvas", 1, 0);
  }
  if (rf & 2) {
    \u0275\u0275styleProp("width", ctx.width * ctx.svg_ratio * ctx.zoom + "%")("height", ctx.width * ctx.svg_ratio * ctx.ratio * ctx.zoom + "%");
  }
}, encapsulation: 2 });
var MapCanvasComponent = _MapCanvasComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapCanvasComponent, [{
    type: Component,
    args: [{ selector: "[map-canvas]", template: `
        <canvas
            #canvas
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            [style.width]="width * svg_ratio * zoom + '%'"
            [style.height]="width * svg_ratio * ratio * zoom + '%'"
        ></canvas>
    ` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapCanvasComponent, { className: "MapCanvasComponent", filePath: "libs/components/src/lib/map-canvas.component.ts", lineNumber: 48 });
})();

// libs/explore/src/lib/explore-sensor-info.component.ts
function ExploreSensorInfoComponent_ng_template_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "icon");
    \u0275\u0275text(2, "thermostat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r0.temp, "\u02DA", ctx_r0.temp_unit);
  }
}
function ExploreSensorInfoComponent_ng_template_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "icon");
    \u0275\u0275text(2, "opacity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.humidity, "%");
  }
}
function ExploreSensorInfoComponent_ng_template_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "icon", 6);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd()();
  }
}
function ExploreSensorInfoComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275conditionalCreate(1, ExploreSensorInfoComponent_ng_template_3_Conditional_1_Template, 5, 2, "div", 3);
    \u0275\u0275conditionalCreate(2, ExploreSensorInfoComponent_ng_template_3_Conditional_2_Template, 5, 1, "div", 3);
    \u0275\u0275conditionalCreate(3, ExploreSensorInfoComponent_ng_template_3_Conditional_3_Template, 3, 0, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.temp ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.humidity ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.temp > 82 ? 3 : -1);
  }
}
var shown_id = "";
var _ExploreSensorInfoComponent = class _ExploreSensorInfoComponent extends AsyncHandler {
  get show() {
    return shown_id === this._details.id;
  }
  set show(value) {
    this.timeout("show", () => shown_id = value ? this._details.id : "");
  }
  constructor() {
    super();
    this._details = inject(MAP_FEATURE_DATA);
    this.temp = this._details.temp || 0;
    this.temp_unit = this._details.temp_unit || "C";
    this.humidity = this._details.humidity || 0;
  }
};
_ExploreSensorInfoComponent.\u0275fac = function ExploreSensorInfoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreSensorInfoComponent)();
};
_ExploreSensorInfoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreSensorInfoComponent, selectors: [["explore-sensor-info"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 1, consts: [["stats", ""], ["icon", "", "matRipple", "", "customTooltip", "", "yPosition", "center", "xPosition", "center", 1, "bg-base-100", "pointer-events-auto", "absolute", "top-1/2", "left-1/2", "h-7", "w-7", "min-w-0", "-translate-x-1/2", "-translate-y-1/2", "shadow-sm", 3, "content"], [1, "border-base-200", "bg-base-100", "absolute", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", "rounded-lg", "border", "p-2", "text-xl"], [1, "flex", "items-center", "space-x-2", "pr-2", "whitespace-nowrap"], [1, "border-base-200", "bg-base-100", "absolute", "top-0", "right-0", "translate-x-1/2", "-translate-y-1/2", "rounded-full", "border"], [1, ""], [1, "text-error", "text-xl"]], template: function ExploreSensorInfoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 1)(1, "icon");
    \u0275\u0275text(2, " visibility ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, ExploreSensorInfoComponent_ng_template_3_Template, 4, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const stats_r2 = \u0275\u0275reference(4);
    \u0275\u0275property("content", stats_r2);
  }
}, dependencies: [CustomTooltipComponent, IconComponent], encapsulation: 2 });
var ExploreSensorInfoComponent = _ExploreSensorInfoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreSensorInfoComponent, [{
    type: Component,
    args: [{ selector: "explore-sensor-info", template: `
        <button
            icon
            matRipple
            customTooltip
            [content]="stats"
            yPosition="center"
            xPosition="center"
            class="bg-base-100 pointer-events-auto absolute top-1/2 left-1/2 h-7 w-7 min-w-0 -translate-x-1/2 -translate-y-1/2 shadow-sm"
        >
            <icon> visibility </icon>
        </button>
        <ng-template #stats>
            <div
                class="border-base-200 bg-base-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg border p-2 text-xl"
            >
                @if (temp) {
                    <div
                        class="flex items-center space-x-2 pr-2 whitespace-nowrap"
                    >
                        <icon>thermostat</icon>
                        <div class="">{{ temp }}\u02DA{{ temp_unit }}</div>
                    </div>
                }
                @if (humidity) {
                    <div
                        class="flex items-center space-x-2 pr-2 whitespace-nowrap"
                    >
                        <icon>opacity</icon>
                        <div class="">{{ humidity }}%</div>
                    </div>
                }
                @if (temp > 82) {
                    <div
                        class="border-base-200 bg-base-100 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full border"
                    >
                        <icon class="text-error text-xl">error</icon>
                    </div>
                }
            </div>
        </ng-template>
    `, imports: [CustomTooltipComponent, IconComponent] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreSensorInfoComponent, { className: "ExploreSensorInfoComponent", filePath: "libs/explore/src/lib/explore-sensor-info.component.ts", lineNumber: 63 });
})();

// libs/explore/src/lib/explore-zones.service.ts
var _ExploreZonesService = class _ExploreZonesService extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(ExploreStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._area_list = [];
    this._statuses = {};
    this._count_key = {};
    this._location = {};
    this._label_location = {};
    this._capacity = {};
    this._draw = {};
    this._points = {};
    this._features = [];
    this._polygons$ = new BehaviorSubject([]);
    this._bind = combineLatest([
      this._org.active_building,
      this._state.level,
      this._state.options
    ]).pipe(filter(([bld, lvl, { is_public }]) => !!bld && !!lvl && !is_public), map(([_, lvl]) => {
      this._statuses = {};
      const mod = this._org.module("area_management", "AreaManagement");
      if (!mod)
        return;
      const bind_areas = mod.variable(`${lvl.id}:areas`);
      const bind_zone = mod.variable(`${lvl.id}`);
      const zones = combineLatest([
        bind_areas.listen(),
        bind_zone.listen()
      ]).pipe(debounceTime(100), map(([a, z]) => [
        ...a?.value || [],
        ...(z?.value || []).filter((_2) => _2.location === "area")
      ]));
      this.subscription(`zones-status`, zones.subscribe((l) => this.parseData(l)));
      this.subscription("binding", bind_areas.bind());
      this.subscription("zone-binding", bind_zone.bind());
    }));
    this.init();
  }
  async init() {
    await firstTruthyValueFrom(this._org.initialised);
    const zone_metadata = await Promise.all(this._org.levels.map((bld) => Xu(bld.id, "map_regions").toPromise()));
    this._area_list = [];
    for (const zone of zone_metadata) {
      const areas = zone?.details?.areas;
      if (!areas)
        continue;
      for (const area of areas) {
        const { capacity, hide_label, label_location, draw_polygon, area_count_key } = area.properties || {};
        const { coordinates } = area.geometry || {};
        this._capacity[area.id] = capacity || 100;
        this._count_key[area.id] = area_count_key || "";
        this._location[area.id] = coordinates?.length ? getCenterPoint(coordinates) : null;
        this._label_location[area.id] = hide_label === false ? label_location || this._location[area.id] : null;
        this._draw[area.id] = !!draw_polygon || this._settings.get("app.explore.use_zone_polygons");
        this._points[area.id] = coordinates || [];
        this._area_list.push(area.map_id || area.id);
      }
    }
    this._state.setFeatures("zones-canvas", [
      {
        track_id: "zones-canvas",
        location: { x: 0.5, y: 0.5 },
        content: MapCanvasComponent,
        data: {
          polygons$: this._polygons$,
          draw_points: false,
          draw_labels: false
        }
      }
    ]);
    this.updateStatus();
    this.subscription("bind", this._bind.subscribe());
  }
  parseData(value = []) {
    const labels = [];
    const features = [];
    const temp_unit = this._settings.get("app.use_imperial_units") ? "F" : "C";
    for (const zone of value) {
      const id = zone.map_id || zone.area_id;
      const capacity = zone.capacity || this._capacity[id] || 100;
      const count = zone[this._count_key[id] || this._settings.get("app.explore.area_count_key") || "count"] || 0;
      const filled = count / capacity;
      this._statuses[id] = zone.at_location ? "busy" : filled < 0.4 ? "free" : filled < 0.75 ? "pending" : "busy";
      if (!this._location[id])
        continue;
      let content = "";
      if (zone.count) {
        content += i18n("EXPLORE.DEVICE_COUNT", { count: zone.count }) + "\n";
      }
      if (zone.temperature)
        content += i18n("EXPLORE.SENSORS_TEMP", {
          value: `${zone.temperature} \xB0${temp_unit}
`
        });
      if (zone.people_count > 0)
        content += i18n("EXPLORE.SENSORS_PEOPLE", {
          count: `${zone.people_count_sum}
`
        });
      if (zone.humidity)
        content += i18n("EXPLORE.SENSORS_HUMIDITY", {
          value: `${zone.humidity}
`
        });
      if (zone.queue_size)
        content += i18n("EXPLORE.SENSORS_QUEUE", {
          value: `${zone.humidity}
`
        });
      if (zone.counter)
        content += i18n("EXPLORE.SENSORS_COUNT", {
          value: `${zone.humidity}
`
        });
      if (this._label_location[id] && !this._settings.get("app.explore.show_zone_labels")) {
        labels.push({
          location: this._label_location[id],
          content,
          z_index: 100
        });
      }
      if (this._settings.get("app.explore.show_zone_sensor_info") && (zone.temperature || zone.humidity)) {
        features.push({
          track_id: `sensors:${id}`,
          location: this._location[id],
          content: ExploreSensorInfoComponent,
          data: {
            id,
            temp: zone.temperature || 10,
            temp_unit,
            humidity: zone.humidity || 10
          },
          z_index: 98
        });
      }
    }
    this._features = features;
    this._state.setLabels("zones", labels);
    this.updateStatus();
  }
  updateStatus() {
    const style_map = {};
    const features = [];
    const colours = this._settings.get("app.explore.colors") || {};
    const polygons = [];
    for (const zone_id in this._statuses) {
      const colour = colours[`zone-${this._statuses[zone_id]}`] || colours[`${this._statuses[zone_id]}`] || DEFAULT_COLOURS[`${this._statuses[zone_id]}`];
      if (this._draw[zone_id]) {
        polygons.push({
          name: zone_id,
          points: this._points[zone_id],
          color: colour
        });
      } else {
        if (this._state.has("style", zone_id, ["zones", "zones-styles"])) {
          features.push({
            location: zone_id,
            content: ExploreIconComponent,
            data: {
              icon: { content: "pin_drop" }
            },
            full_size: true,
            z_index: 98
          });
        } else {
          style_map[`#${zone_id}`] = {
            fill: colour,
            opacity: 0.6
          };
        }
      }
    }
    this._polygons$.next(polygons);
    this._state.setFeatures("zones", [...features, ...this._features]);
    this._state.setStyles("zones-styles", style_map);
  }
};
_ExploreZonesService.\u0275fac = function ExploreZonesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreZonesService)();
};
_ExploreZonesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreZonesService, factory: _ExploreZonesService.\u0275fac });
var ExploreZonesService = _ExploreZonesService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreZonesService, [{
    type: Injectable
  }], () => [], null);
})();
function getCenterPoint(points) {
  const diff = (points || []).reduce((m, [x, y]) => ({
    x_min: x < m.x_min ? x : m.x_min,
    x_max: x > m.x_max ? x : m.x_max,
    y_min: y < m.y_min ? y : m.y_min,
    y_max: y > m.y_max ? y : m.y_max
  }), {
    x_min: 100,
    x_max: -100,
    y_min: 100,
    y_max: -100
  });
  return {
    x: diff.x_min + (diff.x_max - diff.x_min) / 2,
    y: diff.y_min + (diff.y_max - diff.y_min) / 2
  };
}

// libs/explore/src/lib/explore-map-view.component.ts
var _c07 = () => ({ controls: true });
function ExploreMapViewComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "mat-slide-toggle", 5);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("ngModelChange", function ExploreMapViewComponent_Conditional_6_Conditional_2_Template_mat_slide_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleZones($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 6);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", !((tmp_2_0 = \u0275\u0275pipeBind1(2, 2, ctx_r1.options)) == null ? null : tmp_2_0.disable == null ? null : tmp_2_0.disable.includes("zones")));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "EXPLORE.AREAS"));
  }
}
function ExploreMapViewComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "explore-map-controls");
    \u0275\u0275conditionalCreate(2, ExploreMapViewComponent_Conditional_6_Conditional_2_Template, 6, 6, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.hide_zones ? 2 : -1);
  }
}
function ExploreMapViewComponent_Conditional_8_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementStart(2, "div", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pair_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", pair_r3[1]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pair_r3[0]);
  }
}
function ExploreMapViewComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "h3", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, ExploreMapViewComponent_Conditional_8_For_5_Template, 4, 3, "div", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "EXPLORE.LEGEND"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.legend);
  }
}
function ExploreMapViewComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function ExploreMapViewComponent_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearLocate());
    });
    \u0275\u0275text(1, " Clear Pin ");
    \u0275\u0275elementEnd();
  }
}
var EMPTY2 = [];
var _ExploreMapViewComponent = class _ExploreMapViewComponent extends AsyncHandler {
  async toggleZones(enabled) {
    const options = await nextValueFrom(this.options);
    const disable = !enabled ? unique([...options?.disable || [], "zones", "devices"]) : options?.disable?.filter((_) => _ !== "zones" && _ !== "devices") || [];
    this.setOptions({ disable });
  }
  get show_legend() {
    return !!this._settings.get("app.explore.show_legend");
  }
  get hide_zones() {
    return !!this._settings.get("app.explore.hide_zones");
  }
  get legend() {
    return this._settings.get("app.explore.legend") || EMPTY2;
  }
  constructor() {
    super();
    this._state = inject(ExploreStateService);
    this._s = inject(ExploreSpacesService);
    this._desks = inject(ExploreDesksService);
    this._zones = inject(ExploreZonesService);
    this._parking = inject(ExploreParkingService);
    this._lockers = inject(ExploreLockersService);
    this._pois = inject(ExplorePointOfInterestService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._spaces = inject(SpacesService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._space_pipe = inject(SpacePipe);
    this._maps = inject(MapsPeopleService);
    this.url = this._state.map_url;
    this.styles = this._state.map_styles;
    this.positions = this._state.map_positions;
    this.features = this._state.map_features;
    this.actions = this._state.map_actions;
    this.labels = this._state.map_labels;
    this.options = this._state.options;
    this.message = this._state.message;
    this.setOptions = (o) => this._state.setOptions(o);
    this.locate = "";
    this.map_info = {};
    this.use_mapsindoors$ = this._maps.available$;
  }
  async ngOnInit() {
    this._state.reset();
    await this._spaces.initialised.pipe(first((_) => _)).toPromise();
    this.toggleZones(false);
    this.subscription("parking_poll", this._parking.startPolling());
    this.subscription("route.query", this._route.queryParamMap.subscribe(async (params) => {
      if (params.has("level") || params.has("zone")) {
        this._state.setLevel(params.get("level") || params.get("zone"));
      }
      this._state.setFeatures("_located", []);
      if (params.has("space")) {
        this.locateSpace(params.get("space"));
      } else if (params.has("user")) {
        let user = this._settings.value("last_search");
        if (!user || params.get("user") !== user.email) {
          user = null;
          user = await showStaff(params.get("user")).toPromise();
        }
        if (!user)
          return notifyError(i18n("EXPLORE.LOCATE_USER_FAILED", {
            name: params.get("user")
          }));
        this.locateUser(user instanceof Array ? user[0] : user).catch((e) => {
          notifyError(e);
          this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { user: "" },
            queryParamsHandling: "preserve"
          });
        });
      } else if (params.has("locate")) {
        this._locateFeature(params.get("locate"), params.get("name"));
      } else {
        this.timeout("update_location", () => {
          this._state.setFeatures("_located", []);
        });
      }
    }));
  }
  updateZoom(zoom) {
    this._state.setPositions(zoom, this._state.positions.center);
  }
  updateCenter(center) {
    this._state.setPositions(this._state.positions.zoom, center);
  }
  clearLocate() {
    this.locate = "";
    this._state.setFeatures("_located", []);
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: {
        user: void 0,
        space: void 0,
        locate: void 0,
        name: void 0
      },
      queryParamsHandling: "merge"
    });
  }
  _locateFeature(id, name = "") {
    const has_coordinates = id.includes(",");
    const parts = id.split(",");
    const feature = {
      track_id: `locate-${id}`,
      location: has_coordinates ? { x: parseFloat(parts[0]), y: parseFloat(parts[1]) } : id,
      content: MapPinComponent,
      z_index: 99,
      data: { message: name }
    };
    this.timeout("update_location", () => {
      this.locate = id;
      this._state.setFeatures("_located", [feature]);
    });
  }
  async locateSpace(id) {
    const space = await this._space_pipe.transform(id);
    if (!space)
      return notifyError(i18n("EXPLORE.LOCATE_SPACE_DETAILS_FAILED"));
    this._state.setLevel(this._org.levelWithID(space.zones)?.id);
    const feature = {
      track_id: `locate-${space.id}`,
      location: space.map_id,
      content: MapPinComponent,
      z_index: 99,
      data: {
        message: `${space.display_name || space.name} is here`
      }
    };
    this.timeout("update_location", () => {
      this.locate = id;
      this._state.setFeatures("_located", [feature]);
    });
  }
  async locateUser(user) {
    const binding = this._org.binding("location_services");
    const mod = this._org.module("location_services", "LocationServices");
    if (!mod)
      throw i18n("EXPLORE.LOCATE_SERVICE_UNAVAILABLE");
    const priority = binding?.priority || [];
    const locations = (await mod.execute("locate_user", [
      user.email,
      user.username || user.id
    ])).map((i) => new MapLocation(i));
    locations.sort((a, b) => (priority.includes(a.type) ? priority.indexOf(a.type) : 999) - (priority.includes(b.type) ? priority.indexOf(b.type) : 999));
    if (!locations?.length)
      throw i18n("EXPLORE.LOCATE_USER_NOT_FOUND");
    let loc = locations.find(({ position }) => typeof position !== "string" || position in this.map_info);
    if (!loc)
      loc = locations[0];
    if (typeof loc.position !== "string") {
      notifyWarn(i18n(`EXPLORE.LOCATE_USER_FOUND_NO_PIN`, { type: loc.type }));
    }
    this._state.setLevel(this._org.levelWithID([locations[0]?.level])?.id);
    const pos = loc.position;
    const { coordinates_from } = loc;
    const feature = {
      track_id: `locate-${user.id}`,
      location: locations[0].type === "wireless" ? {
        x: coordinates_from?.includes("right") ? 1 - pos.x : pos.x,
        y: coordinates_from?.includes("bottom") ? 1 - pos.y : pos.y
      } : pos,
      content: loc.type === "wireless" ? MapRadiusComponent : MapPinComponent,
      z_index: 99,
      data: {
        message: i18n("EXPLORE.LOCATE_USER", { name: user.name }),
        radius: loc.variance,
        last_seen: loc.last_seen
      }
    };
    this.timeout("update_location", () => {
      this.locate = user.id || user.email;
      this._state.setFeatures("_located", [feature]);
    });
  }
};
_ExploreMapViewComponent.\u0275fac = function ExploreMapViewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreMapViewComponent)();
};
_ExploreMapViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreMapViewComponent, selectors: [["explore-map-view"]], features: [\u0275\u0275ProvidersFeature([
  ExploreDesksService,
  ExploreSpacesService,
  ExploreZonesService,
  ExploreParkingService,
  ExploreLockersService,
  ExplorePointOfInterestService,
  SpacePipe
]), \u0275\u0275InheritDefinitionFeature], decls: 10, vars: 23, consts: [[3, "mapInfo", "src", "styles", "features", "actions", "labels", "focus", "options"], ["controls", "", 1, "border-base-200", "bg-base-100", "absolute", "top-2", "left-2", "max-w-[calc(100vw-1rem)]", "space-y-2", "overflow-hidden", "rounded-sm", "border", "p-2"], ["legend", "", 1, "border-base-200", "bg-base-100", "absolute", "bottom-2", "left-2", "rounded-sm", "border", "p-2"], ["matRipple", "", 1, "border-base-300", "bg-base-100", "absolute", "top-2", "right-2", "h-12", "min-w-32", "rounded-lg", "border", "px-4", "shadow-sm"], [1, "flex", "items-center", "space-x-2"], ["name", "zones", 1, "ml-2", 3, "ngModelChange", "ngModel"], ["for", "zones", 1, "mb-0"], [1, "mb-2", "font-medium"], [1, "border-base-200", "h-3", "w-3", "rounded-full", "border"], [1, "text-sm"], ["matRipple", "", 1, "border-base-300", "bg-base-100", "absolute", "top-2", "right-2", "h-12", "min-w-32", "rounded-lg", "border", "px-4", "shadow-sm", 3, "click"]], template: function ExploreMapViewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "interactive-map", 0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275listener("mapInfo", function ExploreMapViewComponent_Template_interactive_map_mapInfo_0_listener($event) {
      return ctx.map_info = $event ?? {};
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ExploreMapViewComponent_Conditional_6_Template, 3, 1, "div", 1);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275conditionalCreate(8, ExploreMapViewComponent_Conditional_8_Template, 6, 3, "div", 2);
    \u0275\u0275conditionalCreate(9, ExploreMapViewComponent_Conditional_9_Template, 2, 0, "button", 3);
  }
  if (rf & 2) {
    \u0275\u0275property("src", \u0275\u0275pipeBind1(1, 10, ctx.url))("styles", \u0275\u0275pipeBind1(2, 12, ctx.styles))("features", \u0275\u0275pipeBind1(3, 14, ctx.features))("actions", \u0275\u0275pipeBind1(4, 16, ctx.actions))("labels", \u0275\u0275pipeBind1(5, 18, ctx.labels))("focus", ctx.locate)("options", \u0275\u0275pureFunction0(22, _c07));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(7, 20, ctx.use_mapsindoors$) ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.show_legend && ctx.legend.length ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.locate ? 9 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  TranslatePipe,
  InteractiveMapComponent,
  MatSlideToggle,
  MatRippleModule,
  MatRipple,
  ExploreMapControlComponent,
  FormsModule,
  NgControlStatus,
  NgModel
], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n[zones][_ngcontent-%COMP%] {\n  top: 3.5rem;\n}\n/*# sourceMappingURL=explore-map-view.component.css.map */"] });
var ExploreMapViewComponent = _ExploreMapViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreMapViewComponent, [{
    type: Component,
    args: [{ selector: "explore-map-view", template: `
        <interactive-map
            [src]="url | async"
            [styles]="styles | async"
            [features]="features | async"
            [actions]="actions | async"
            [labels]="labels | async"
            [focus]="locate"
            [options]="{ controls: true }"
            (mapInfo)="map_info = $event ?? $any({})"
        />
        @if (!(use_mapsindoors$ | async)) {
            <div
                controls
                class="border-base-200 bg-base-100 absolute top-2 left-2 max-w-[calc(100vw-1rem)] space-y-2 overflow-hidden rounded-sm border p-2"
            >
                <explore-map-controls></explore-map-controls>
                @if (!hide_zones) {
                    <div class="flex items-center space-x-2">
                        <mat-slide-toggle
                            name="zones"
                            class="ml-2"
                            [ngModel]="
                                !(options | async)?.disable?.includes('zones')
                            "
                            (ngModelChange)="toggleZones($event)"
                        ></mat-slide-toggle>
                        <label for="zones" class="mb-0">{{
                            'EXPLORE.AREAS' | translate
                        }}</label>
                    </div>
                }
            </div>
        }
        @if (show_legend && legend.length) {
            <div
                legend
                class="border-base-200 bg-base-100 absolute bottom-2 left-2 rounded-sm border p-2"
            >
                <h3 class="mb-2 font-medium">
                    {{ 'EXPLORE.LEGEND' | translate }}
                </h3>
                @for (pair of legend; track pair) {
                    <div class="flex items-center space-x-2">
                        <div
                            class="border-base-200 h-3 w-3 rounded-full border"
                            [style.background-color]="pair[1]"
                        ></div>
                        <div class="text-sm">{{ pair[0] }}</div>
                    </div>
                }
            </div>
        }
        @if (locate) {
            <button
                class="border-base-300 bg-base-100 absolute top-2 right-2 h-12 min-w-32 rounded-lg border px-4 shadow-sm"
                matRipple
                (click)="clearLocate()"
            >
                Clear Pin
            </button>
        }
    `, providers: [
      ExploreDesksService,
      ExploreSpacesService,
      ExploreZonesService,
      ExploreParkingService,
      ExploreLockersService,
      ExplorePointOfInterestService,
      SpacePipe
    ], imports: [
      CommonModule,
      TranslatePipe,
      InteractiveMapComponent,
      MatSlideToggle,
      MatRippleModule,
      ExploreMapControlComponent,
      FormsModule
    ], styles: ["/* angular:styles/component:css;f0dd04a674d5d39d9f19b967c64f941cbd15e6ed17e75f4055e915dd830afa8d;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-map-view.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n[zones] {\n  top: 3.5rem;\n}\n/*# sourceMappingURL=explore-map-view.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreMapViewComponent, { className: "ExploreMapViewComponent", filePath: "libs/explore/src/lib/explore-map-view.component.ts", lineNumber: 142 });
})();

// libs/explore/src/lib/explore-search.service.ts
var EMERGENCY_CONTACTS_CATEGORY_NAME = "_EMERGENCY_CONTACTS_";
var BASE_ENDPOINT = "/api/engine/v2";
function queryAssetCategoriesLocal(query = {}) {
  const q = toQueryString(query);
  return N(`${BASE_ENDPOINT}/asset_categories${q ? "?" + q : ""}`).pipe(map((_) => _));
}
function queryAssetTypesLocal(query = {}) {
  const q = toQueryString(query);
  return N(`${BASE_ENDPOINT}/asset_types${q ? "?" + q : ""}`).pipe(map((_) => _));
}
function queryAssetsLocal(query = {}) {
  const q = toQueryString(query);
  return N(`${BASE_ENDPOINT}/assets${q ? "?" + q : ""}`).pipe(map((_) => _));
}
var TYPES = ["space", "feature", "contact", "user"];
function typeIndex(item) {
  return TYPES.indexOf(item.is_role ? "contact" : item.type);
}
var _ExploreSearchService = class _ExploreSearchService {
  /** Extract zones from in-progress bookings */
  _getInProgressZones(bookings) {
    if (!bookings?.length)
      return [];
    const zones = [];
    for (const booking of bookings) {
      if (booking instanceof CalendarEvent) {
        if (booking.system?.zones?.length) {
          zones.push(...booking.system.zones);
        }
        booking.resources?.forEach((r) => {
          if (r.zones?.length) {
            zones.push(...r.zones);
          }
        });
      } else if (booking instanceof Booking) {
        if (booking.zones?.length) {
          zones.push(...booking.zones);
        }
      }
    }
    return zones.filter((z) => this._org.levelWithID([z]));
  }
  hideItem(name) {
    const hide_items = this._settings.get("app.hide_global_search_items") || [];
    return hide_items.includes(name);
  }
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._maps_people = inject(MapsPeopleService);
    this._state = inject(ExploreStateService);
    this._in_progress_bookings = new ReplaySubject(1);
    this._emergency_contacts = new BehaviorSubject([]);
    this._filter = new BehaviorSubject("");
    this._loading = new BehaviorSubject(false);
    this.emergency_contacts = this._emergency_contacts.asObservable();
    this._asset_based_contacts = combineLatest([
      this._org.active_building,
      this._filter.pipe(debounceTime(400))
    ]).pipe(filter(([bld]) => !!bld), switchMap(([bld, search]) => (
      // First get the category
      queryAssetCategoriesLocal({ zone_id: bld.id }).pipe(
        catchError(() => of([])),
        map((categories) => categories.find((c) => c.name === EMERGENCY_CONTACTS_CATEGORY_NAME) || null),
        // Then get the asset type for that category
        switchMap((category) => {
          if (!category)
            return of(null);
          return queryAssetTypesLocal({
            zone_id: bld.id,
            q: `"${category.name}"`
          }).pipe(catchError(() => of([])), map((groups) => groups.find((g) => g.name === EMERGENCY_CONTACTS_CATEGORY_NAME && g.category_id === category.id) || null));
        }),
        // Finally get the assets for that type
        switchMap((assetType) => {
          if (!assetType)
            return of([]);
          const query = {
            zone_id: bld.id,
            type_id: assetType.id,
            limit: 200
          };
          return queryAssetsLocal(query).pipe(catchError(() => of([])), map((assets) => assets.filter((a) => a.asset_type_id === assetType.id).map((a) => {
            const zone = this._org.levelWithID(a.zones) || this._org.buildings.find((_) => a.zones.includes(_.id));
            return {
              id: a.id,
              name: a.identifier || "",
              email: a.other_data?.email || "",
              phone: a.other_data?.phone || "",
              roles: a.other_data?.roles || [],
              zone: zone.id,
              zone_name: zone?.display_name || zone?.name
            };
          })));
        })
      )
    )), shareReplay(1));
    this._legacy_metadata_contacts = this._org.active_building.pipe(filter((bld) => !!bld), switchMap((bld) => Xu(bld.id, "emergency_contacts").pipe(catchError(() => of({ details: { contacts: [], migrated: false } })))), map(({ details }) => {
      const data = details;
      if (data?.migrated)
        return [];
      return data?.contacts || [];
    }), shareReplay(1));
    this._role_assigned_contacts = combineLatest([
      this._asset_based_contacts,
      this._legacy_metadata_contacts
    ]).pipe(map(([asset_contacts, legacy_contacts]) => {
      if (asset_contacts.length > 0)
        return asset_contacts;
      return legacy_contacts;
    }), shareReplay(1));
    this._user_search = this._filter.pipe(debounceTime(400), tap(() => this._loading.next(true)), switchMap((q) => q?.length > 2 ? this.search_fn(q).pipe(catchError(() => of([]))) : of([])), shareReplay(1));
    this._space_search = this._filter.pipe(debounceTime(400), tap(() => this._loading.next(true)), switchMap((q) => q?.length > 2 ? Gc({ q, zone_id: this._org.organisation.id }).pipe(map(({ data }) => data.filter((_) => _.map_id).map((_) => new Space(__spreadProps(__spreadValues({}, _), {
      level: this._org.levelWithID(_.zones)
    }))))) : of([])), catchError(() => []));
    this._desk_search = combineLatest([
      this._org.active_building
    ]).pipe(debounceTime(400), tap(() => this._loading.next(true)), switchMap(([bld]) => bld ? rc(bld.id, { name: "desks" }).pipe(catchError(() => of([])), map((i) => flatten(i.map((j) => (j.metadata.desks?.details || []).map((k) => new Desk(__spreadProps(__spreadValues({}, k), { zone: j.zone }))))))) : of([])), catchError(() => []));
    this._maps_people_search = combineLatest([
      this._maps_people.available$,
      this._filter,
      this._org.active_building
    ]).pipe(debounceTime(1e3), switchMap(([available, q]) => available && q.length > 2 ? mapsindoors?.services.LocationsService.getLocations({ q }) : of([])), map((list) => {
      return list.map((_) => ({
        id: _.properties?.externalId || _.properties?.roomId || _.roomId || _.id,
        map_id: _.properties?.externalId || _.properties?.roomId || _.roomId || "",
        type: "feature",
        name: _.properties?.name || "",
        description: `${_.properties?.roomId} , Level ${_.properties?.floorName}`
      }));
    }), shareReplay(1));
    this._map_features = this._org.active_building.pipe(filter((bld) => !!bld), switchMap(() => rc(this._org.building.id, {
      name: "map_features"
    }).pipe(catchError(() => of({ details: [] })))), map((data) => {
      const list = [];
      for (const item of data) {
        const metadata = item.metadata.map_features;
        if (!metadata)
          continue;
        const feature_list = metadata.details instanceof Array ? metadata.details : [];
        for (const feature of feature_list) {
          list.push({
            id: feature.id,
            type: "feature",
            name: feature.name,
            description: "",
            zone: item.zone
          });
        }
      }
      return list;
    }));
    this._poi_metadata = this._org.initialised.pipe(filter((_) => _), switchMap(() => Xu(this._org.organisation.id, "points-of-interest").pipe(catchError((_) => of({ details: {} })))), shareReplay(1));
    this._poi_list = combineLatest([
      this._org.active_building,
      this._poi_metadata
    ]).pipe(filter(([bld]) => !!bld?.id), map(([bld, metadata]) => {
      const mapping = metadata.details || {};
      const levels = this._org.levelsForBuilding(bld);
      const list = flatten(levels.map((lvl) => mapping[lvl.id] || []));
      return list.filter((_) => _.can_search);
    }));
    this._points_of_interest = this._poi_list.pipe(map((poi_list) => {
      return poi_list.map((item) => ({
        id: item.location || item.id,
        type: "feature",
        name: item.name,
        description: "",
        zone: item.level_id
      }));
    }));
    this.search_results = combineLatest([
      this._filter,
      this._space_search,
      this._desk_search,
      this._user_search,
      this._emergency_contacts,
      this._role_assigned_contacts,
      this._map_features,
      this._maps_people_search,
      this._points_of_interest,
      this._state.level,
      this._in_progress_bookings
    ]).pipe(map(([filter2, spaces, desks, users, contacts, roled_contacts, features, mapspeople_items, points_of_interest, current_level, in_progress_bookings]) => {
      const search = filter2.toLowerCase();
      let results = [];
      if (!this.hideItem("mapspeople"))
        results = results.concat(mapspeople_items);
      if (!this.hideItem("spaces")) {
        results = results.concat(spaces.map((s) => ({
          id: s.id,
          type: "space",
          email: s.email,
          name: s.display_name || s.name,
          description: `Capacity: ${s.capacity} `,
          zone: s.level?.id || ""
        })));
      }
      if (!this.hideItem("desks")) {
        results = results.concat(desks.map((s) => ({
          id: s.id,
          type: "feature",
          email: s.assigned_to,
          description: s.id,
          name: s.name || s.id,
          zone: s.zone?.id || ""
        })));
      }
      if (!this.hideItem("emergency_contacts")) {
        results = results.concat(flatten(roled_contacts.map((u) => u.roles.map((role) => ({
          id: u.email,
          type: role || "contact",
          is_role: true,
          name: u.name,
          email: u.email,
          description: u.email,
          zone: u.zone,
          zone_name: u.zone_name
        })))));
      }
      if (!this.hideItem("features")) {
        results = results.concat(features.filter((_) => _.name.toLowerCase().includes(search)).map((s) => ({
          id: s.id,
          type: "feature",
          name: s.name,
          description: "",
          zone: s.zone?.id,
          level_name: s.zone?.display_name || s.zone?.name
        })));
      }
      if (!this.hideItem("points_of_interest"))
        results = results.concat(points_of_interest);
      if (!this.hideItem("contacts")) {
        results = results.concat(contacts.map((u) => ({
          id: u.email,
          type: u.type || "contact",
          is_role: true,
          name: u.name,
          email: u.email,
          description: u.email
        })));
      }
      if (!this.hideItem("users")) {
        results = results.concat(users.map((u) => ({
          id: u.email,
          type: "user",
          name: u.name,
          email: u.email,
          description: u.email
        })));
      }
      results = results.filter((_) => _.name.toLowerCase().includes(search) || _.description.toLowerCase().includes(search) || (_.email || "").toLowerCase().includes(search) || _.type.toLowerCase().includes(search) || _.zone_name?.toLowerCase().includes(search));
      const in_progress_zones = this._getInProgressZones(in_progress_bookings);
      results.sort((a, b) => {
        if (current_level?.id) {
          const a_on_level = a.zone === current_level.id;
          const b_on_level = b.zone === current_level.id;
          if (a_on_level && !b_on_level)
            return -1;
          if (!a_on_level && b_on_level)
            return 1;
        }
        if (in_progress_zones.length > 0) {
          const a_near_booking = in_progress_zones.includes(a.zone);
          const b_near_booking = in_progress_zones.includes(b.zone);
          if (a_near_booking && !b_near_booking)
            return -1;
          if (!a_near_booking && b_near_booking)
            return 1;
        }
        return typeIndex(a) - typeIndex(b) || a.name.localeCompare(b.name);
      });
      return results;
    }), tap(() => this._loading.next(false)), shareReplay(1));
    this.loading = this._loading.asObservable();
    this.search_fn = (q) => this._settings.get("app.basic_user_search") ? xa({ q, authority_id: Ut()?.id }).pipe(map((_) => _.data)) : searchStaff(q);
    this._in_progress_bookings.next([]);
    this.search_results.subscribe();
    this.init();
  }
  async init() {
    await this._org.initialised.pipe(first((_) => _)).toPromise();
    await timer(500).toPromise();
    const { is_public } = await nextValueFrom(this._state.options);
    if (is_public)
      return;
    const mod = this._org.module("location_services", "LocationServices");
    if (mod) {
      const binding = mod.variable("emergency_contacts");
      binding.listen().subscribe((contacts_map) => {
        const list = [];
        for (const type in contacts_map) {
          for (const user of contacts_map[type]) {
            list.push(__spreadProps(__spreadValues({}, user), { type }));
          }
        }
        this._emergency_contacts.next(list);
      });
      binding.bind();
    }
  }
  setFilter(str) {
    this._filter.next(str);
  }
  /**
   * Set in-progress bookings for proximity-based sorting
   * @param bookings List of bookings/events that are currently in progress
   */
  setInProgressBookings(bookings) {
    this._in_progress_bookings.next(bookings || []);
  }
};
_ExploreSearchService.\u0275fac = function ExploreSearchService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreSearchService)();
};
_ExploreSearchService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreSearchService, factory: _ExploreSearchService.\u0275fac, providedIn: "root" });
var ExploreSearchService = _ExploreSearchService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreSearchService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/explore/src/lib/explore-search.component.ts
var _c08 = ["input"];
var _c13 = ["button"];
var _forTrack02 = ($index, $item) => $item.name;
function ExploreSearchComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 7);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 32);
  }
}
function ExploreSearchComponent_Conditional_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.SEARCH_EMPTY"), " ");
  }
}
function ExploreSearchComponent_Conditional_13_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275listener("click", function ExploreSearchComponent_Conditional_13_For_3_Template_mat_option_click_0_listener() {
      const option_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.select(option_r3));
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "div", 12)(3, "div", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    \u0275\u0275property("value", option_r3.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", option_r3.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r3.description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r3.type, " ");
  }
}
function ExploreSearchComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ExploreSearchComponent_Conditional_13_Conditional_0_Template, 3, 3, "mat-option", 8);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275repeaterCreate(2, ExploreSearchComponent_Conditional_13_For_3_Template, 9, 4, "mat-option", 9, _forTrack02);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "slice");
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!((tmp_5_0 = \u0275\u0275pipeBind1(1, 1, ctx_r3.results)) == null ? null : tmp_5_0.length) ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(5, 5, \u0275\u0275pipeBind1(4, 3, ctx_r3.results), 0, 5));
  }
}
var _ExploreSearchComponent = class _ExploreSearchComponent extends AsyncHandler {
  constructor() {
    super();
    this._el = inject(ElementRef);
    this._search = inject(ExploreSearchService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this.show = false;
    this.search_str = "";
    this.right_size = false;
    this.results = this._search.search_results;
    this.loading = this._search.loading;
    this.setFilter = (s) => this._search.setFilter(s);
    this._input_el = viewChild("input");
    this._button_el = viewChild("button");
  }
  ngOnInit() {
    this.checkButtonPosition();
  }
  clear() {
    this.timeout("clear", () => {
      this.show = false;
      this.search_str = "";
      this.setFilter("");
    });
  }
  cancelClear() {
    this.clearTimeout("clear");
  }
  focusInput() {
    if (this._input_el()?.nativeElement) {
      this.timeout("focus", () => this._input_el().nativeElement.focus(), 300);
    }
  }
  showSearch() {
    this.show = true;
    this.focusInput();
  }
  closeSearch(e) {
    this.show = false;
    this.search_str = "";
    this.setFilter("");
    const _input_el = this._input_el();
    if (_input_el?.nativeElement) {
      _input_el.nativeElement.focus();
      _input_el.nativeElement.blur();
    }
  }
  select(item) {
    this.search_str = item.name;
    const query = {};
    const type = item.type === "space" ? "space" : item.type === "feature" ? "locate" : "user";
    query[type] = item.id;
    if (type === "locate") {
      query.name = item.name;
      query.zone = item.zone;
    }
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: query
    });
    this.focusInput();
  }
  checkButtonPosition() {
    const window_width = window.innerWidth;
    const button_rect = this._button_el().nativeElement.getBoundingClientRect();
    const x_center = button_rect.left + button_rect.width / 2;
    this.right_size = x_center > window_width / 2;
  }
};
_ExploreSearchComponent.\u0275fac = function ExploreSearchComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreSearchComponent)();
};
_ExploreSearchComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreSearchComponent, selectors: [["explore-search"]], viewQuery: function ExploreSearchComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._input_el, _c08, 5);
    \u0275\u0275viewQuerySignal(ctx._button_el, _c13, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance(2);
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 15, vars: 23, consts: [["button", ""], ["origin", "matAutocompleteOrigin"], ["input", ""], ["auto", "matAutocomplete"], ["icon", "", "matRipple", "", 1, "bg-base-200", "m-2", 3, "resize", "click"], ["role", "search", "tabindex", "0", "matRipple", "", "matAutocompleteOrigin", "", 1, "bg-base-100", "absolute", "top-1/2", "z-10", "flex", "max-w-[calc(100vw-7rem)]", "-translate-y-1/2", "items-center", "overflow-hidden", "px-4", "outline-hidden", 3, "click"], ["keyboard", "", 1, "flex-1", "border-none", "text-base", "outline-hidden", 3, "ngModelChange", "focus", "blur", "ngModel", "placeholder", "matAutocomplete", "matAutocompleteConnectedTo"], [1, "mr-2", 3, "diameter"], [1, "pointer-events-none"], [3, "value"], [3, "click", "value"], [1, "flex", "w-88", "max-w-[calc(100vw-2rem)]", "items-center", "leading-tight"], [1, "w-1/2", "flex-1", "overflow-hidden"], [1, "w-full", "truncate"], [1, "text-xs"], [1, "bg-base-300", "rounded-sm", "p-2", "text-xs", "font-bold", "text-white", "capitalize"]], template: function ExploreSearchComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4, 0);
    \u0275\u0275listener("resize", function ExploreSearchComponent_Template_button_resize_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.checkButtonPosition());
    }, \u0275\u0275resolveWindow)("click", function ExploreSearchComponent_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.show ? ctx.closeSearch($event) : ctx.showSearch());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 5, 1);
    \u0275\u0275listener("click", function ExploreSearchComponent_Template_div_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.focusInput());
    });
    \u0275\u0275elementStart(6, "input", 6, 2);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ExploreSearchComponent_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.search_str, $event) || (ctx.search_str = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ExploreSearchComponent_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setFilter($event));
    })("focus", function ExploreSearchComponent_Template_input_focus_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.cancelClear());
    })("blur", function ExploreSearchComponent_Template_input_blur_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.clear());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, ExploreSearchComponent_Conditional_9_Template, 1, 1, "mat-spinner", 7);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-autocomplete", null, 3);
    \u0275\u0275conditionalCreate(13, ExploreSearchComponent_Conditional_13_Template, 6, 9);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const origin_r5 = \u0275\u0275reference(5);
    const auto_r6 = \u0275\u0275reference(12);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.show || ctx.search_str ? "close" : "search");
    \u0275\u0275advance();
    \u0275\u0275classProp("right-0", ctx.right_size)("-translate-x-14", ctx.right_size)("left-0", !ctx.right_size)("translate-x-14", !ctx.right_size)("show", ctx.show || ctx.search_str);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.search_str);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 17, "COMMON.SEARCH"))("matAutocomplete", auto_r6)("matAutocompleteConnectedTo", origin_r5);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(10, 19, ctx.loading) ? 9 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(14, 21, ctx.loading) !== true && (ctx.show || ctx.search_str) ? 13 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  SlicePipe,
  IconComponent,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatAutocompleteModule,
  MatAutocomplete,
  MatOption,
  MatAutocompleteTrigger,
  MatAutocompleteOrigin,
  VirtualKeyboardComponent,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel
], styles: ["\n\n[_nghost-%COMP%] {\n  z-index: 99;\n  position: relative;\n}\n[role=search][_ngcontent-%COMP%] {\n  height: 3rem;\n  width: 0;\n  border-radius: 1.5rem;\n  border: 1px solid var(--base-300);\n  transition: width 200ms opacity 200ms;\n  opacity: 0;\n  pointer-events: none;\n}\n[role=search].show[_ngcontent-%COMP%] {\n  width: 24rem;\n  opacity: 1;\n  pointer-events: auto;\n}\n/*# sourceMappingURL=explore-search.component.css.map */"] });
var ExploreSearchComponent = _ExploreSearchComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreSearchComponent, [{
    type: Component,
    args: [{ selector: "explore-search", template: `
        <button
            #button
            icon
            matRipple
            class="bg-base-200 m-2"
            (window:resize)="checkButtonPosition()"
            (click)="show ? closeSearch($event) : showSearch()"
        >
            <icon>{{ show || search_str ? 'close' : 'search' }}</icon>
        </button>
        <div
            role="search"
            tabindex="0"
            matRipple
            class="bg-base-100 absolute top-1/2 z-10 flex max-w-[calc(100vw-7rem)] -translate-y-1/2 items-center overflow-hidden px-4 outline-hidden"
            [class.right-0]="right_size"
            [class.-translate-x-14]="right_size"
            [class.left-0]="!right_size"
            [class.translate-x-14]="!right_size"
            [class.show]="show || search_str"
            (click)="focusInput()"
            matAutocompleteOrigin
            #origin="matAutocompleteOrigin"
        >
            <input
                #input
                keyboard
                class="flex-1 border-none text-base outline-hidden"
                [(ngModel)]="search_str"
                (ngModelChange)="setFilter($event)"
                [placeholder]="'COMMON.SEARCH' | translate"
                (focus)="cancelClear()"
                (blur)="clear()"
                [matAutocomplete]="auto"
                [matAutocompleteConnectedTo]="origin"
            />
            @if (loading | async) {
                <mat-spinner class="mr-2" [diameter]="32"></mat-spinner>
            }
        </div>
        <mat-autocomplete #auto="matAutocomplete">
            @if ((loading | async) !== true && (show || search_str)) {
                @if (!(results | async)?.length) {
                    <mat-option class="pointer-events-none">
                        {{ 'COMMON.SEARCH_EMPTY' | translate }}
                    </mat-option>
                }
                @for (
                    option of results | async | slice: 0 : 5;
                    track option.name
                ) {
                    <mat-option [value]="option.name" (click)="select(option)">
                        <div
                            class="flex w-88 max-w-[calc(100vw-2rem)] items-center leading-tight"
                        >
                            <div class="w-1/2 flex-1 overflow-hidden">
                                <div class="w-full truncate">
                                    {{ option.name }}
                                </div>
                                <div class="text-xs">
                                    {{ option.description }}
                                </div>
                            </div>
                            <div
                                class="bg-base-300 rounded-sm p-2 text-xs font-bold text-white capitalize"
                            >
                                {{ option.type }}
                            </div>
                        </div>
                    </mat-option>
                }
            }
        </mat-autocomplete>
    `, imports: [
      CommonModule,
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatProgressSpinnerModule,
      MatAutocompleteModule,
      VirtualKeyboardComponent,
      FormsModule
    ], styles: ["/* angular:styles/component:css;9f4945b2ccd61cdbcc08723b98fac624bfd389374b9fee892262ad25a3c5edf0;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-search.component.ts */\n:host {\n  z-index: 99;\n  position: relative;\n}\n[role=search] {\n  height: 3rem;\n  width: 0;\n  border-radius: 1.5rem;\n  border: 1px solid var(--base-300);\n  transition: width 200ms opacity 200ms;\n  opacity: 0;\n  pointer-events: none;\n}\n[role=search].show {\n  width: 24rem;\n  opacity: 1;\n  pointer-events: auto;\n}\n/*# sourceMappingURL=explore-search.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreSearchComponent, { className: "ExploreSearchComponent", filePath: "libs/explore/src/lib/explore-search.component.ts", lineNumber: 133 });
})();

// libs/explore/src/lib/explore-zoom-control.component.ts
var _ExploreZoomControlComponent = class _ExploreZoomControlComponent {
  constructor() {
    this._state = inject(ExploreStateService);
    this.zoomIn = () => this._state.setPositions(Math.min(10, this._state.positions.zoom * 1.2), this._state.positions.center);
    this.zoomOut = () => this._state.setPositions(Math.max(1, this._state.positions.zoom * (1 / 1.2)), this._state.positions.center);
    this.reset = () => this._state.setPositions(1, { x: 0.5, y: 0.5 });
  }
};
_ExploreZoomControlComponent.\u0275fac = function ExploreZoomControlComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreZoomControlComponent)();
};
_ExploreZoomControlComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreZoomControlComponent, selectors: [["explore-zoom-controls"]], decls: 12, vars: 9, consts: [["z-in", "", "icon", "", "matRipple", "", 1, "bg-base-100", 3, "click", "matTooltip"], ["z-out", "", "icon", "", "matRipple", "", 1, "bg-base-100", 3, "click", "matTooltip"], ["reset", "", "icon", "", "matRipple", "", 1, "bg-base-100", 3, "click", "matTooltip"]], template: function ExploreZoomControlComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ExploreZoomControlComponent_Template_button_click_0_listener() {
      return ctx.zoomIn();
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 1);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("click", function ExploreZoomControlComponent_Template_button_click_4_listener() {
      return ctx.zoomOut();
    });
    \u0275\u0275elementStart(6, "icon");
    \u0275\u0275text(7, "remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 2);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("click", function ExploreZoomControlComponent_Template_button_click_8_listener() {
      return ctx.reset();
    });
    \u0275\u0275elementStart(10, "icon");
    \u0275\u0275text(11, "autorenew");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 3, "EXPLORE.ZOOM_IN"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(5, 5, "EXPLORE.ZOOM_OUT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(9, 7, "EXPLORE.ZOOM_RESET"));
  }
}, dependencies: [MatRippleModule, MatRipple, TranslatePipe, IconComponent, MatTooltipModule, MatTooltip], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\nbutton[_ngcontent-%COMP%] {\n  border: 1px solid #9998;\n  border-radius: 0;\n}\nbutton[_ngcontent-%COMP%]:first-child {\n  border-radius: 0.25rem 0.25rem 0 0;\n  border-bottom: none;\n}\nbutton[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0 0.25rem 0.25rem;\n  border-top: none;\n}\n/*# sourceMappingURL=explore-zoom-control.component.css.map */"] });
var ExploreZoomControlComponent = _ExploreZoomControlComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreZoomControlComponent, [{
    type: Component,
    args: [{ selector: `explore-zoom-controls`, template: `
        <button
            z-in
            icon
            matRipple
            class="bg-base-100"
            (click)="zoomIn()"
            [matTooltip]="'EXPLORE.ZOOM_IN' | translate"
        >
            <icon>add</icon>
        </button>
        <button
            z-out
            icon
            matRipple
            class="bg-base-100"
            (click)="zoomOut()"
            [matTooltip]="'EXPLORE.ZOOM_OUT' | translate"
        >
            <icon>remove</icon>
        </button>
        <button
            reset
            icon
            matRipple
            class="bg-base-100"
            (click)="reset()"
            [matTooltip]="'EXPLORE.ZOOM_RESET' | translate"
        >
            <icon>autorenew</icon>
        </button>
    `, imports: [MatRippleModule, TranslatePipe, IconComponent, MatTooltipModule], styles: ["/* angular:styles/component:css;3d42ea289b866ee23d2075663b931fa5501aa5a1e18f8af721ddfffbd945ad48;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-zoom-control.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n}\nbutton {\n  border: 1px solid #9998;\n  border-radius: 0;\n}\nbutton:first-child {\n  border-radius: 0.25rem 0.25rem 0 0;\n  border-bottom: none;\n}\nbutton:last-child {\n  border-radius: 0 0 0.25rem 0.25rem;\n  border-top: none;\n}\n/*# sourceMappingURL=explore-zoom-control.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreZoomControlComponent, { className: "ExploreZoomControlComponent", filePath: "libs/explore/src/lib/explore-zoom-control.component.ts", lineNumber: 67 });
})();

// libs/explore/src/lib/explore.module.ts
var STANDALONE_COMPONENTS = [
  ExploreMapControlComponent,
  ExploreMapViewComponent,
  ExploreSearchComponent,
  ExploreSpaceInfoComponent,
  ExploreDeviceInfoComponent,
  ExploreDeskInfoComponent,
  ExploreZoomControlComponent,
  ExploreBookingModalComponent,
  SetDatetimeModalComponent,
  ExploreBookQrComponent,
  ExploreSensorInfoComponent,
  ExploreLockerBankInfoComponent,
  ExploreLockerBankModalComponent,
  ExploreParkingInfoComponent
];
var _SharedExploreModule = class _SharedExploreModule {
};
_SharedExploreModule.\u0275fac = function SharedExploreModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SharedExploreModule)();
};
_SharedExploreModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SharedExploreModule });
_SharedExploreModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  ExploreMapControlComponent,
  ExploreMapViewComponent,
  ExploreSearchComponent,
  ExploreSpaceInfoComponent,
  ExploreDeviceInfoComponent,
  ExploreDeskInfoComponent,
  ExploreZoomControlComponent,
  ExploreBookingModalComponent,
  SetDatetimeModalComponent,
  ExploreBookQrComponent,
  ExploreSensorInfoComponent,
  ExploreLockerBankInfoComponent,
  ExploreLockerBankModalComponent
] });
var SharedExploreModule = _SharedExploreModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedExploreModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [...STANDALONE_COMPONENTS],
      exports: [...STANDALONE_COMPONENTS]
    }]
  }], null, null);
})();

// apps/map-kiosk/src/app/explore-level-select.component.ts
function ExploreLevelSelectComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("click", function ExploreLevelSelectComponent_For_2_Template_button_click_0_listener() {
      const lvl_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setLevel(lvl_r2));
    });
    \u0275\u0275elementStart(2, "div", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const lvl_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", lvl_r2.id === ((tmp_10_0 = \u0275\u0275pipeBind1(1, 4, ctx_r2.level)) == null ? null : tmp_10_0.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(lvl_r2.number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", lvl_r2.display_name || lvl_r2.name, " ");
  }
}
var _ExploreLevelSelectComponent = class _ExploreLevelSelectComponent {
  constructor() {
    this._org = inject(OrganisationService);
    this._state = inject(ExploreStateService);
    this.levels = this._org.active_levels;
    this.level = this._state.level;
    this.setLevel = (lvl) => this._state.setLevel(lvl.id);
  }
  async ngOnInit() {
    await this._org.initialised.pipe(first((_) => _)).toPromise();
    const levels = await nextValueFrom(this._org.active_levels);
  }
};
_ExploreLevelSelectComponent.\u0275fac = function ExploreLevelSelectComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreLevelSelectComponent)();
};
_ExploreLevelSelectComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreLevelSelectComponent, selectors: [["explore-level-select"]], decls: 4, vars: 2, consts: [[1, "border-base-300", "bg-base-100", "m-2", "overflow-hidden", "rounded-sm", "border", "border-solid", "shadow-sm"], ["matRipple", "", 1, "flex", "h-16", "w-16", "flex-col", "items-center", "justify-center", "border-none", "p-2", 3, "active"], ["matRipple", "", 1, "flex", "h-16", "w-16", "flex-col", "items-center", "justify-center", "border-none", "p-2", 3, "click"], [1, "text-2xl"], [1, "m-0", "text-sm", "whitespace-nowrap"]], template: function ExploreLevelSelectComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, ExploreLevelSelectComponent_For_2_Template, 6, 6, "button", 1, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx.levels));
  }
}, dependencies: [MatRippleModule, MatRipple, CommonModule, AsyncPipe], styles: ["\n\n.active[_ngcontent-%COMP%] {\n  background: var(--secondary) !important;\n  color: #fff !important;\n}\nbutton[_ngcontent-%COMP%]:not(:first-child) {\n  border-top: 1px solid var(--base-300) !important;\n}\n/*# sourceMappingURL=explore-level-select.component.css.map */"] });
var ExploreLevelSelectComponent = _ExploreLevelSelectComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreLevelSelectComponent, [{
    type: Component,
    args: [{ selector: "explore-level-select", template: `
        <div
            class="border-base-300 bg-base-100 m-2 overflow-hidden rounded-sm border border-solid shadow-sm"
        >
            @for (lvl of levels | async; track lvl) {
                <button
                    class="flex h-16 w-16 flex-col items-center justify-center border-none p-2"
                    [class.active]="lvl.id === (level | async)?.id"
                    (click)="setLevel(lvl)"
                    matRipple
                >
                    <div class="text-2xl">{{ lvl.number }}</div>
                    <p class="m-0 text-sm whitespace-nowrap">
                        {{ lvl.display_name || lvl.name }}
                    </p>
                </button>
            }
        </div>
    `, imports: [MatRippleModule, CommonModule], styles: ["/* angular:styles/component:css;e63d04c22f2df73bef976dac40737116b35c5759d42b86f0004e301d9e8ecd5b;/home/runner/work/user-interfaces/user-interfaces/apps/map-kiosk/src/app/explore-level-select.component.ts */\n.active {\n  background: var(--secondary) !important;\n  color: #fff !important;\n}\nbutton:not(:first-child) {\n  border-top: 1px solid var(--base-300) !important;\n}\n/*# sourceMappingURL=explore-level-select.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreLevelSelectComponent, { className: "ExploreLevelSelectComponent", filePath: "apps/map-kiosk/src/app/explore-level-select.component.ts", lineNumber: 43 });
})();

// apps/map-kiosk/src/app/explore.component.ts
var _c09 = ["app-explore", ""];
var _c14 = () => ({ controls: true });
function ExploreComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "explore-search");
  }
}
function ExploreComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "accessibility-controls");
    \u0275\u0275elementEnd();
  }
}
function ExploreComponent_Conditional_10_Conditional_1_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function ExploreComponent_Conditional_10_Conditional_1_For_8_Template_button_click_0_listener() {
      const lvl_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.setLevel(lvl_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lvl_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lvl_r3.display_name || lvl_r3.name, " ");
  }
}
function ExploreComponent_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 21)(1, "div", 13);
    \u0275\u0275text(2, "Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "icon", 12);
    \u0275\u0275text(4, "keyboard_arrow_down");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-menu", null, 1);
    \u0275\u0275repeaterCreate(7, ExploreComponent_Conditional_10_Conditional_1_For_8_Template, 2, 1, "button", 22, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const levelMenu_r5 = \u0275\u0275reference(6);
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matMenuTriggerFor", levelMenu_r5);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(9, 1, ctx_r3.levels));
  }
}
function ExploreComponent_Conditional_10_Conditional_3_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "div", 25);
    \u0275\u0275elementStart(2, "div", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", value_r6.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", value_r6.name, " ");
  }
}
function ExploreComponent_Conditional_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 21)(1, "div", 13);
    \u0275\u0275text(2, "Legend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "icon", 12);
    \u0275\u0275text(4, "keyboard_arrow_down");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-menu", null, 2);
    \u0275\u0275repeaterCreate(7, ExploreComponent_Conditional_10_Conditional_3_For_8_Template, 4, 3, "div", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const legendMenu_r7 = \u0275\u0275reference(6);
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matMenuTriggerFor", legendMenu_r7);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r3.legend);
  }
}
function ExploreComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275conditionalCreate(1, ExploreComponent_Conditional_10_Conditional_1_Template, 10, 3);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275conditionalCreate(3, ExploreComponent_Conditional_10_Conditional_3_Template, 9, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = \u0275\u0275pipeBind1(2, 2, ctx_r3.levels)) == null ? null : tmp_2_0.length) ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.legend.length ? 3 : -1);
  }
}
function ExploreComponent_Conditional_14_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("click", function ExploreComponent_Conditional_14_For_10_Template_button_click_0_listener() {
      const lvl_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setLevel(lvl_r10));
    });
    \u0275\u0275elementStart(2, "div", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const lvl_r10 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("opacity-30", lvl_r10.id !== ((tmp_12_0 = \u0275\u0275pipeBind1(1, 3, ctx_r3.level)) == null ? null : tmp_12_0.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", lvl_r10.display_name || lvl_r10.name, " ");
  }
}
function ExploreComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function ExploreComponent_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.show_levels = !ctx_r3.show_levels);
    });
    \u0275\u0275elementStart(1, "icon", 12);
    \u0275\u0275text(2, "corporate_fare");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275text(4, "Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "icon", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 14)(8, "div", 15);
    \u0275\u0275repeaterCreate(9, ExploreComponent_Conditional_14_For_10_Template, 4, 5, "button", 27, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "hr", 16);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.show_levels ? "keyboard_arrow_up" : "keyboard_arrow_down");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx_r3.show_levels ? "show" : "hide");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(11, 2, ctx_r3.levels));
  }
}
function ExploreComponent_Conditional_16_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "div", 25);
    \u0275\u0275elementStart(2, "div", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", value_r12.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", value_r12.name, " ");
  }
}
function ExploreComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function ExploreComponent_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.show_legend = !ctx_r3.show_legend);
    });
    \u0275\u0275elementStart(1, "icon", 12);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275text(4, "Legend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "icon", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 14)(8, "div", 15);
    \u0275\u0275repeaterCreate(9, ExploreComponent_Conditional_16_For_10_Template, 4, 3, "div", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "hr", 16);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.show_legend ? "keyboard_arrow_up" : "keyboard_arrow_down");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx_r3.show_legend ? "show" : "hide");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.legend);
  }
}
var _ExploreComponent = class _ExploreComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ExploreStateService);
    this._s = inject(ExploreSpacesService);
    this._desks = inject(ExploreDesksService);
    this._zones = inject(ExploreZonesService);
    this._parking = inject(ExploreParkingService);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._spaces = inject(SpacesService);
    this._dialog = inject(MatDialog);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._space_pipe = inject(SpacePipe);
    this._maps = inject(MapsPeopleService);
    this.reset_delay = 180;
    this.show_levels = true;
    this.show_legend = false;
    this.show_accessibility = false;
    this.legend = [
      { id: "free", name: "Space Available", color: "#43a047" },
      { id: "busy", name: "Space In Use", color: "#e53935" },
      { id: "pending", name: "Space Pending", color: "#ffb300" },
      { id: "not-bookable", name: "Space Not-bookable", color: "#ccc" }
    ];
    this.levels = combineLatest([
      this._org.active_region,
      this._org.active_building
    ]).pipe(map(([region, building]) => {
      return (this._settings.get("app.use_region") ? flatten(this._org.buildings.filter((bld) => region.id === bld.parent_id).map((bld) => this._org.levelsForBuilding(bld).map((_) => __spreadProps(__spreadValues({}, _), {
        display_name: `${bld.display_name} - ${_.display_name}`
      })))) : this._org.levelsForBuilding(building)) || [];
    }));
    this.level = this._state.level;
    this.url = this._state.map_url;
    this.styles = this._state.map_styles;
    this.positions = this._state.map_positions;
    this.features = this._state.map_features;
    this.actions = this._state.map_actions;
    this.labels = this._state.map_labels;
    this.options = this._state.options;
    this.locate = "";
    this.isometric = localStorage.getItem("KIOSK.isometric") === "true";
    this.onMouse = () => this.timeout("reset", () => this.resetKiosk(), this.reset_delay * 1e3);
    this.onTouch = () => this.timeout("reset", () => this.resetKiosk(), this.reset_delay * 1e3);
    this.setOptions = (o) => this._state.setOptions(o);
    this.setLevel = (lvl) => this._state.setLevel(lvl.id);
    this.use_mapsindoors$ = this._maps.available$;
  }
  get logo() {
    return this._settings.theme === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light");
  }
  get time() {
    return startOfMinute(Date.now());
  }
  get legend_visible() {
    return this._settings.get("app.explore.show_legend") !== false;
  }
  get hide_zones() {
    return this._settings.get("app.explore.hide_zones");
  }
  onIsometricChange(event) {
    this.isometric = event.detail;
  }
  updateZoom(zoom) {
    this._state.setPositions(zoom, this._state.positions.center);
  }
  updateCenter(center) {
    this._state.setPositions(this._state.positions.zoom, center);
  }
  async toggleZones(enabled) {
    const options = await nextValueFrom(this.options);
    const disable = !enabled ? unique([...options.disable || [], "zones", "devices"]) : options.disable.filter((_) => _ !== "zones" && _ !== "devices") || [];
    this.setOptions({ disable });
  }
  get can_search() {
    return !!this._settings.get("app.explore.search_enabled");
  }
  async ngOnInit() {
    if (location.hash.includes("public=true") || location.search.includes("public=true")) {
      this._state.setOptions({ is_public: true });
    }
    await this._spaces.initialised.pipe(first((_) => _)).toPromise();
    this._desks.setOptions({ custom: true });
    this.reset_delay = this._settings.get("app.inactivity_timeout_secs") || 180;
    this.resetKiosk(false);
    VirtualKeyboardComponent.enabled = localStorage.getItem("OSK.enabled") === "true";
    this.subscription("level", this._state.level.subscribe(() => this.timeout("update_location", () => {
      this._state.setFeatures("_located", []);
    })));
    this.subscription("route.query", this._route.queryParamMap.subscribe(async (params) => {
      if (params.has("level")) {
        log("Explore", "Level changed to:", params.get("level"));
        this._state.setLevel(params.get("level"));
        const level = this._org.levelWithID([params.get("level")]);
        if (!level)
          return;
        const bld = this._org.buildings.find((_) => level.parent_id === _.id);
        if (!bld)
          return;
        this._org.building = bld;
      }
      this._state.setFeatures("_located", []);
      if (params.has("space")) {
        log("Explore", "Focusing on space:", params.get("space"));
        this.locateSpace(params.get("space"));
      } else if (params.has("user")) {
        log("Explore", "Focusing on user:", params.get("user"));
        let user = this._settings.value("last_search");
        if (!user || params.get("user") !== user.email) {
          user = null;
          user = await showStaff(params.get("user")).toPromise();
        }
        if (!user)
          return notifyError(`Unable to user details for ${params.get("user")}`);
        this.locateUser(user instanceof Array ? user[0] : user).catch((_) => {
          notifyError(`Unable to locate ${params.get("user")}`);
          this._router.navigate([], {
            relativeTo: this._route,
            queryParams: {}
          });
        });
      } else if (params.has("feature")) {
        log("Explore", "Focusing on feature:", params.get("feature"));
        this.timeout("update_location", () => {
          this._state.setFeatures("_located", [
            {
              location: params.get("feature"),
              content: MapPinComponent,
              data: {}
            }
          ]);
        });
      } else if (params.has("locate")) {
        log("Explore", "Focusing on location:", params.get("locate"));
        this.locate = params.get("locate");
        this.timeout("update_location", () => {
          this._state.setFeatures("_located", [
            {
              location: params.get("locate"),
              content: MapPinComponent,
              data: {}
            }
          ]);
        });
      } else {
        this.timeout("update_location", () => {
          this._state.setFeatures("_located", []);
        });
      }
    }));
  }
  async locateSpace(id) {
    const space = await this._space_pipe.transform(id);
    if (!space)
      return;
    this._state.setLevel(this._org.levelWithID(space.zones)?.id);
    const feature = {
      location: space.map_id,
      content: MapPinComponent,
      data: {
        message: `${space.display_name || space.name} is here`
      }
    };
    this.timeout("update_location", () => this._state.setFeatures("_located", [feature]));
  }
  async locateUser(user) {
    let locate_details = this._org.binding("location_services");
    if (!locate_details)
      return;
    if (typeof locate_details === "string") {
      locate_details = {
        system_id: locate_details,
        module: "LocationServices"
      };
    }
    const mod = $h(locate_details.system_id, locate_details.module);
    const locations = (await mod.execute("locate_user", [
      user.email,
      user.username || user.id
    ])).map((i) => new MapLocation(i));
    locations.sort((a, b) => locate_details.priority.indexOf(a.type) - locate_details.priority.indexOf(b.type));
    if (!locations?.length) {
      throw "No locations for the given user";
    }
    this._state.setLevel(this._org.levelWithID([locations[0]?.level])?.id);
    const pos = locations[0].position;
    const { coordinates_from } = locations[0];
    const feature = {
      location: locations[0].type === "wireless" ? {
        x: coordinates_from?.includes("right") ? 1 - pos.x : pos.x,
        y: coordinates_from?.includes("bottom") ? 1 - pos.y : pos.y
      } : pos,
      content: locations[0].type === "wireless" ? MapRadiusComponent : MapPinComponent,
      z_index: 99,
      data: {
        message: `${user.name} is here`,
        radius: locations[0].variance,
        last_seen: locations[0].last_seen
      }
    };
    this.timeout("update_location", () => {
      this._state.setFeatures("_located", [feature]);
    });
  }
  resetKiosk(navigate = true) {
    if (document.activeElement?.blur)
      document.activeElement?.blur();
    const level = localStorage.getItem("KIOSK.level");
    this._state.setPositions(1, { x: 0.5, y: 0.5 });
    if (level)
      this._state.setLevel(level);
    this._dialog.closeAll();
    if (navigate)
      this._router.navigate(["/"]);
  }
};
_ExploreComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ExploreComponent_BaseFactory;
  return function ExploreComponent_Factory(__ngFactoryType__) {
    return (\u0275ExploreComponent_BaseFactory || (\u0275ExploreComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ExploreComponent)))(__ngFactoryType__ || _ExploreComponent);
  };
})();
_ExploreComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreComponent, selectors: [["", "app-explore", ""]], hostBindings: function ExploreComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("mousedown", function ExploreComponent_mousedown_HostBindingHandler() {
      return ctx.onMouse();
    }, \u0275\u0275resolveWindow)("touchstart", function ExploreComponent_touchstart_HostBindingHandler() {
      return ctx.onTouch();
    }, \u0275\u0275resolveWindow)("isometric-change", function ExploreComponent_isometric_change_HostBindingHandler($event) {
      return ctx.onIsometricChange($event);
    }, \u0275\u0275resolveWindow);
  }
}, features: [\u0275\u0275ProvidersFeature([
  ExploreSpacesService,
  ExploreDesksService,
  ExploreZonesService,
  ExploreParkingService,
  SpacePipe
]), \u0275\u0275InheritDefinitionFeature], attrs: _c09, decls: 38, vars: 38, consts: [["accessibility_controls", ""], ["levelMenu", "matMenu"], ["legendMenu", "matMenu"], ["topbar", "", 1, "border-base-300", "bg-base-100", "text-base-content", "relative", "flex", "items-center", "justify-between", "border-b", "px-4", "py-2"], ["matRipple", "", "routerLink", "/", 1, "rounded-sm", "p-2", "text-2xl"], ["auth", "", "alt", "Logo", 1, "h-12", 3, "source"], [1, "absolute", "top-1/2", "right-2", "flex", "-translate-y-1/2", "items-center"], ["icon", "", "matRipple", "", "customTooltip", "", 1, "bg-base-200", "flex", "sm:hidden", 3, "content"], ["options", "", 1, "bg-base-content", "text-base-100", "flex", "items-center", "space-x-2", "p-2", "sm:hidden"], [1, "flex", "h-1/2", "flex-1"], ["sidebar", "", 1, "border-base-300", "bg-base-100", "text-base-content", "hidden", "w-[20rem]", "overflow-auto", "border-r", "px-2", "py-4", "sm:block"], ["btn", "", "matRipple", "", 1, "items", "clear", "hover:bg-base-200", "flex", "w-full", "space-x-4", 3, "click"], [1, "text-2xl"], [1, "flex-1", "text-left", "font-medium"], [1, "px-8"], [1, "space-y-2", "py-4"], [1, "mx-auto", "w-[calc(100%-4rem)]"], [1, "relative", "h-full", "flex-1"], [1, "absolute", "inset-0"], [3, "zoomChange", "centerChange", "src", "zoom", "center", "styles", "features", "actions", "labels", "options", "focus"], [1, "bg-base-100", "w-[18rem]", "rounded-sm", "p-2"], ["btn", "", "matRipple", "", 1, "clear", "text-base-100", 3, "matMenuTriggerFor"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], [1, "hover:bg-base-200", "flex", "w-full", "items-center", "space-x-4", "rounded-sm", "px-4", "py-2"], [1, "h-3", "w-3", "rounded-full"], [1, "text-left", "opacity-60"], ["btn", "", "matRipple", "", 1, "clear", "hover:bg-base-200", "w-full", "hover:opacity-100", 3, "opacity-30"], ["btn", "", "matRipple", "", 1, "clear", "hover:bg-base-200", "w-full", "hover:opacity-100", 3, "click"], [1, "w-full", "text-left"]], template: function ExploreComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "a", 4);
    \u0275\u0275element(2, "img", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275conditionalCreate(4, ExploreComponent_Conditional_4_Template, 1, 0, "explore-search");
    \u0275\u0275elementStart(5, "button", 7)(6, "icon");
    \u0275\u0275text(7, "accessible");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ExploreComponent_ng_template_8_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, ExploreComponent_Conditional_10_Template, 4, 4, "div", 8);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementStart(12, "div", 9)(13, "div", 10);
    \u0275\u0275conditionalCreate(14, ExploreComponent_Conditional_14_Template, 13, 4);
    \u0275\u0275pipe(15, "async");
    \u0275\u0275conditionalCreate(16, ExploreComponent_Conditional_16_Template, 12, 2);
    \u0275\u0275elementStart(17, "button", 11);
    \u0275\u0275listener("click", function ExploreComponent_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.show_accessibility = !ctx.show_accessibility);
    });
    \u0275\u0275elementStart(18, "icon", 12);
    \u0275\u0275text(19, "accessible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 13);
    \u0275\u0275text(21, " Accessibility ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "icon", 12);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 14)(25, "div", 15);
    \u0275\u0275element(26, "accessibility-controls");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(27, "hr", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 17)(29, "div", 18)(30, "interactive-map", 19);
    \u0275\u0275pipe(31, "async");
    \u0275\u0275pipe(32, "async");
    \u0275\u0275pipe(33, "async");
    \u0275\u0275pipe(34, "async");
    \u0275\u0275pipe(35, "async");
    \u0275\u0275pipe(36, "async");
    \u0275\u0275pipe(37, "async");
    \u0275\u0275listener("zoomChange", function ExploreComponent_Template_interactive_map_zoomChange_30_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updateZoom($event));
    })("centerChange", function ExploreComponent_Template_interactive_map_centerChange_30_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updateCenter($event));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_11_0;
    let tmp_12_0;
    const accessibility_controls_r13 = \u0275\u0275reference(9);
    \u0275\u0275advance(2);
    \u0275\u0275property("source", (ctx.logo == null ? null : ctx.logo.src) || ctx.logo);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.can_search ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("content", accessibility_controls_r13);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(((tmp_4_0 = \u0275\u0275pipeBind1(11, 19, ctx.levels)) == null ? null : tmp_4_0.length) || ctx.legend.length ? 10 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(((tmp_5_0 = \u0275\u0275pipeBind1(15, 21, ctx.levels)) == null ? null : tmp_5_0.length) ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.legend.length && ctx.legend_visible ? 16 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.show_accessibility ? "keyboard_arrow_up" : "keyboard_arrow_down");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx.show_accessibility ? "show" : "hide");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("isometric", ctx.isometric);
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275pipeBind1(31, 23, ctx.url))("zoom", (tmp_11_0 = \u0275\u0275pipeBind1(32, 25, ctx.positions)) == null ? null : tmp_11_0.zoom)("center", (tmp_12_0 = \u0275\u0275pipeBind1(33, 27, ctx.positions)) == null ? null : tmp_12_0.center)("styles", \u0275\u0275pipeBind1(34, 29, ctx.styles))("features", \u0275\u0275pipeBind1(35, 31, ctx.features))("actions", \u0275\u0275pipeBind1(36, 33, ctx.actions))("labels", \u0275\u0275pipeBind1(37, 35, ctx.labels))("options", \u0275\u0275pureFunction0(37, _c14))("focus", ctx.locate);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  AccessibilityControlsComponent,
  MatRippleModule,
  MatRipple,
  IconComponent,
  InteractiveMapComponent,
  AuthenticatedImageDirective,
  CustomTooltipComponent,
  RouterModule,
  RouterLink,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  ExploreSearchComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--base-200);\n}\nhr[_ngcontent-%COMP%] {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n.isometric[_ngcontent-%COMP%] {\n  transform: perspective(800px) rotateX(45deg) rotateZ(-45deg) scale(0.7);\n  transform-origin: center center;\n  transition: transform 300ms ease-in-out;\n}\n.isometric[_ngcontent-%COMP%]   interactive-map[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=explore.component.css.map */"], data: { animation: [ANIMATION_SHOW_CONTRACT_EXPAND] } });
var ExploreComponent = _ExploreComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreComponent, [{
    type: Component,
    args: [{ selector: "[app-explore]", template: `
        <div
            topbar
            class="border-base-300 bg-base-100 text-base-content relative flex items-center justify-between border-b px-4 py-2"
        >
            <a matRipple routerLink="/" class="rounded-sm p-2 text-2xl">
                <img
                    auth
                    class="h-12"
                    alt="Logo"
                    [source]="logo?.src || logo"
                />
            </a>
            <div
                class="absolute top-1/2 right-2 flex -translate-y-1/2 items-center"
            >
                @if (can_search) {
                    <explore-search></explore-search>
                }
                <button
                    icon
                    matRipple
                    customTooltip
                    [content]="accessibility_controls"
                    class="bg-base-200 flex sm:hidden"
                >
                    <icon>accessible</icon>
                </button>
                <ng-template #accessibility_controls>
                    <div class="bg-base-100 w-[18rem] rounded-sm p-2">
                        <accessibility-controls></accessibility-controls>
                    </div>
                </ng-template>
            </div>
        </div>
        @if ((levels | async)?.length || legend.length) {
            <div
                options
                class="bg-base-content text-base-100 flex items-center space-x-2 p-2 sm:hidden"
            >
                @if ((levels | async)?.length) {
                    <button
                        btn
                        matRipple
                        class="clear text-base-100"
                        [matMenuTriggerFor]="levelMenu"
                    >
                        <div class="flex-1 text-left font-medium">Level</div>
                        <icon class="text-2xl">keyboard_arrow_down</icon>
                    </button>
                    <mat-menu #levelMenu="matMenu">
                        @for (lvl of levels | async; track lvl) {
                            <button mat-menu-item (click)="setLevel(lvl)">
                                {{ lvl.display_name || lvl.name }}
                            </button>
                        }
                    </mat-menu>
                }
                @if (legend.length) {
                    <button
                        btn
                        matRipple
                        class="clear text-base-100"
                        [matMenuTriggerFor]="legendMenu"
                    >
                        <div class="flex-1 text-left font-medium">Legend</div>
                        <icon class="text-2xl">keyboard_arrow_down</icon>
                    </button>
                    <mat-menu #legendMenu="matMenu">
                        @for (value of legend; track value) {
                            <div
                                class="hover:bg-base-200 flex w-full items-center space-x-4 rounded-sm px-4 py-2"
                            >
                                <div
                                    class="h-3 w-3 rounded-full"
                                    [style.background-color]="value.color"
                                ></div>
                                <div class="text-left opacity-60">
                                    {{ value.name }}
                                </div>
                            </div>
                        }
                    </mat-menu>
                }
            </div>
        }
        <div class="flex h-1/2 flex-1">
            <div
                sidebar
                class="border-base-300 bg-base-100 text-base-content hidden w-[20rem] overflow-auto border-r px-2 py-4 sm:block"
            >
                @if ((levels | async)?.length) {
                    <button
                        btn
                        matRipple
                        class="items clear hover:bg-base-200 flex w-full space-x-4"
                        (click)="show_levels = !show_levels"
                    >
                        <icon class="text-2xl">corporate_fare</icon>
                        <div class="flex-1 text-left font-medium">Level</div>
                        <icon class="text-2xl">{{
                            show_levels
                                ? 'keyboard_arrow_up'
                                : 'keyboard_arrow_down'
                        }}</icon>
                    </button>
                    <div class="px-8" [@show]="show_levels ? 'show' : 'hide'">
                        <div class="space-y-2 py-4">
                            @for (lvl of levels | async; track lvl) {
                                <button
                                    btn
                                    matRipple
                                    class="clear hover:bg-base-200 w-full hover:opacity-100"
                                    [class.opacity-30]="
                                        lvl.id !== (level | async)?.id
                                    "
                                    (click)="setLevel(lvl)"
                                >
                                    <div class="w-full text-left">
                                        {{ lvl.display_name || lvl.name }}
                                    </div>
                                </button>
                            }
                        </div>
                    </div>
                    <hr class="mx-auto w-[calc(100%-4rem)]" />
                }
                @if (legend.length && legend_visible) {
                    <button
                        btn
                        matRipple
                        class="items clear hover:bg-base-200 flex w-full space-x-4"
                        (click)="show_legend = !show_legend"
                    >
                        <icon class="text-2xl">place</icon>
                        <div class="flex-1 text-left font-medium">Legend</div>
                        <icon class="text-2xl">{{
                            show_legend
                                ? 'keyboard_arrow_up'
                                : 'keyboard_arrow_down'
                        }}</icon>
                    </button>
                    <div class="px-8" [@show]="show_legend ? 'show' : 'hide'">
                        <div class="space-y-2 py-4">
                            @for (value of legend; track value) {
                                <div
                                    class="hover:bg-base-200 flex w-full items-center space-x-4 rounded-sm px-4 py-2"
                                >
                                    <div
                                        class="h-3 w-3 rounded-full"
                                        [style.background-color]="value.color"
                                    ></div>
                                    <div class="text-left opacity-60">
                                        {{ value.name }}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <hr class="mx-auto w-[calc(100%-4rem)]" />
                }
                <button
                    btn
                    matRipple
                    class="items clear hover:bg-base-200 flex w-full space-x-4"
                    (click)="show_accessibility = !show_accessibility"
                >
                    <icon class="text-2xl">accessible</icon>
                    <div class="flex-1 text-left font-medium">
                        Accessibility
                    </div>
                    <icon class="text-2xl">{{
                        show_accessibility
                            ? 'keyboard_arrow_up'
                            : 'keyboard_arrow_down'
                    }}</icon>
                </button>
                <div
                    class="px-8"
                    [@show]="show_accessibility ? 'show' : 'hide'"
                >
                    <div class="space-y-2 py-4">
                        <accessibility-controls></accessibility-controls>
                    </div>
                </div>
                <hr class="mx-auto w-[calc(100%-4rem)]" />
            </div>
            <div class="relative h-full flex-1">
                <div
                    class="absolute inset-0"
                    [class.isometric]="isometric"
                >
                    <interactive-map
                        [src]="url | async"
                        [zoom]="(positions | async)?.zoom"
                        [center]="(positions | async)?.center"
                        (zoomChange)="updateZoom($event)"
                        (centerChange)="updateCenter($event)"
                        [styles]="styles | async"
                        [features]="features | async"
                        [actions]="actions | async"
                        [labels]="labels | async"
                        [options]="{ controls: true }"
                        [focus]="locate"
                    ></interactive-map>
                </div>
            </div>
        </div>
    `, providers: [
      ExploreSpacesService,
      ExploreDesksService,
      ExploreZonesService,
      ExploreParkingService,
      SpacePipe
    ], animations: [ANIMATION_SHOW_CONTRACT_EXPAND], imports: [
      CommonModule,
      AccessibilityControlsComponent,
      MatRippleModule,
      IconComponent,
      InteractiveMapComponent,
      AuthenticatedImageDirective,
      CustomTooltipComponent,
      RouterModule,
      MatMenuModule,
      ExploreSearchComponent
    ], styles: ["/* angular:styles/component:css;6d05b721634a51f19ea7ef3012b5c71e0f957ccfe91d8cc3df3e27744d6b0130;/home/runner/work/user-interfaces/user-interfaces/apps/map-kiosk/src/app/explore.component.ts */\n:host {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--base-200);\n}\nhr {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n.isometric {\n  transform: perspective(800px) rotateX(45deg) rotateZ(-45deg) scale(0.7);\n  transform-origin: center center;\n  transition: transform 300ms ease-in-out;\n}\n.isometric interactive-map {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=explore.component.css.map */\n"] }]
  }], null, { onMouse: [{
    type: HostListener,
    args: ["window:mousedown"]
  }], onTouch: [{
    type: HostListener,
    args: ["window:touchstart"]
  }], onIsometricChange: [{
    type: HostListener,
    args: ["window:isometric-change", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreComponent, { className: "ExploreComponent", filePath: "apps/map-kiosk/src/app/explore.component.ts", lineNumber: 309 });
})();

// apps/visitor-kiosk/src/app/explore.module.ts
var ROUTES = [
  { path: "", component: ExploreComponent },
  { path: ":search_type", component: ExploreComponent }
];
var STANDALONE_COMPONENTS2 = [
  ExploreComponent,
  ExploreLevelSelectComponent,
  AccessibilityControlsComponent
];
var _AppExploreModule = class _AppExploreModule {
};
_AppExploreModule.\u0275fac = function AppExploreModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppExploreModule)();
};
_AppExploreModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppExploreModule });
_AppExploreModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(ROUTES), STANDALONE_COMPONENTS2] });
var AppExploreModule = _AppExploreModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppExploreModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [RouterModule.forChild(ROUTES), ...STANDALONE_COMPONENTS2]
    }]
  }], null, null);
})();
export {
  AppExploreModule
};
//# sourceMappingURL=explore.module-4OFGDA2H.js.map
