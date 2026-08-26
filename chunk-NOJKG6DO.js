import {
  MAT_FORM_FIELD,
  MatFormFieldControl
} from "./chunk-4CSOAYF2.js";
import {
  BACKSPACE,
  BidiModule,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DELETE,
  DOCUMENT,
  DOWN_ARROW,
  Directionality,
  Directive,
  ENTER,
  ElementRef,
  ErrorStateMatcher,
  EventEmitter,
  FocusKeyManager,
  FocusMonitor,
  FormGroupDirective,
  HOST_TAG_NAME,
  InjectionToken,
  Injector,
  Input,
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MatRippleLoader,
  MatRippleModule,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgForm,
  NgModule,
  NgZone,
  Output,
  QueryList,
  Renderer2,
  SPACE,
  Subject,
  TAB,
  UP_ARROW,
  Validators,
  ViewChild,
  ViewEncapsulation,
  _CdkPrivateStyleLoader,
  _ErrorStateTracker,
  _IdGenerator,
  _StructuralStylesLoader,
  _VisuallyHiddenLoader,
  _animationsDisabled,
  afterNextRender,
  booleanAttribute,
  forwardRef,
  hasModifierKey,
  inject,
  merge,
  numberAttribute,
  setClassMetadata,
  startWith,
  switchMap,
  takeUntil,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵviewQuery
} from "./chunk-XUPR3QCE.js";

// node_modules/@angular/material/fesm2022/chips.mjs
var _c0 = ["*", [["mat-chip-avatar"], ["", "matChipAvatar", ""]], [["mat-chip-trailing-icon"], ["", "matChipRemove", ""], ["", "matChipTrailingIcon", ""]]];
var _c1 = ["*", "mat-chip-avatar, [matChipAvatar]", "mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];
function MatChip_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275projection(1, 1);
    \u0275\u0275elementEnd();
  }
}
function MatChip_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275projection(1, 2);
    \u0275\u0275elementEnd();
  }
}
function MatChipOption_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275projection(1, 1);
    \u0275\u0275elementStart(2, "span", 7);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 8);
    \u0275\u0275element(4, "path", 9);
    \u0275\u0275elementEnd()()();
  }
}
function MatChipOption_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275projection(1, 2);
    \u0275\u0275elementEnd();
  }
}
var _c2 = '.mdc-evolution-chip,\n.mdc-evolution-chip__cell,\n.mdc-evolution-chip__action {\n  display: inline-flex;\n  align-items: center;\n}\n\n.mdc-evolution-chip {\n  position: relative;\n  max-width: 100%;\n}\n\n.mdc-evolution-chip__cell,\n.mdc-evolution-chip__action {\n  height: 100%;\n}\n\n.mdc-evolution-chip__cell--primary {\n  flex-basis: 100%;\n  overflow-x: hidden;\n}\n\n.mdc-evolution-chip__cell--trailing {\n  flex: 1 0 auto;\n}\n\n.mdc-evolution-chip__action {\n  align-items: center;\n  background: none;\n  border: none;\n  box-sizing: content-box;\n  cursor: pointer;\n  display: inline-flex;\n  justify-content: center;\n  outline: none;\n  padding: 0;\n  text-decoration: none;\n  color: inherit;\n}\n\n.mdc-evolution-chip__action--presentational {\n  cursor: auto;\n}\n\n.mdc-evolution-chip--disabled,\n.mdc-evolution-chip__action:disabled {\n  pointer-events: none;\n}\n@media (forced-colors: active) {\n  .mdc-evolution-chip--disabled,\n  .mdc-evolution-chip__action:disabled {\n    forced-color-adjust: none;\n  }\n}\n\n.mdc-evolution-chip__action--primary {\n  font: inherit;\n  letter-spacing: inherit;\n  white-space: inherit;\n  overflow-x: hidden;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {\n  border-width: var(--mat-chip-outline-width, 1px);\n  border-radius: var(--mat-chip-container-shape-radius, 8px);\n  box-sizing: border-box;\n  content: "";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  pointer-events: none;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n  border-style: solid;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {\n  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));\n}\n.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {\n  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {\n  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {\n  border-width: var(--mat-chip-flat-selected-outline-width, 0);\n}\n.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {\n  font: inherit;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.mdc-evolution-chip__action--secondary {\n  position: relative;\n  overflow: visible;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {\n  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {\n  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.mdc-evolution-chip__text-label {\n  -webkit-user-select: none;\n  user-select: none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__text-label {\n  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));\n  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));\n  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));\n  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));\n  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {\n  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {\n  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {\n  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n\n.mdc-evolution-chip__graphic {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  overflow: hidden;\n  pointer-events: none;\n  position: relative;\n  flex: 1 0 auto;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__graphic {\n  width: var(--mat-chip-with-avatar-avatar-size, 24px);\n  height: var(--mat-chip-with-avatar-avatar-size, 24px);\n  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {\n  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {\n  width: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 4px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 8px;\n  padding-right: 4px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 4px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 8px;\n  padding-right: 4px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {\n  padding-left: 0;\n}\n\n.mdc-evolution-chip__checkmark {\n  position: absolute;\n  opacity: 0;\n  top: 50%;\n  left: 50%;\n  height: 20px;\n  width: 20px;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {\n  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {\n  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {\n  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate(-75%, -50%);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {\n  transform: translate(-50%, -50%);\n  opacity: 1;\n}\n\n.mdc-evolution-chip__checkmark-svg {\n  display: block;\n}\n\n.mdc-evolution-chip__checkmark-path {\n  stroke-width: 2px;\n  stroke-dasharray: 29.7833385;\n  stroke-dashoffset: 29.7833385;\n  stroke: currentColor;\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {\n  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {\n  stroke-dashoffset: 0;\n}\n@media (forced-colors: active) {\n  .mdc-evolution-chip__checkmark-path {\n    stroke: CanvasText !important;\n  }\n}\n\n.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {\n  height: 18px;\n  width: 18px;\n  font-size: 18px;\n}\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {\n  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));\n}\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {\n  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));\n}\n\n.mat-mdc-standard-chip {\n  border-radius: var(--mat-chip-container-shape-radius, 8px);\n  height: var(--mat-chip-container-height, 32px);\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {\n  background-color: var(--mat-chip-elevated-container-color, transparent);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled {\n  background-color: var(--mat-chip-elevated-disabled-container-color);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {\n  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {\n  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n@media (forced-colors: active) {\n  .mat-mdc-standard-chip {\n    outline: solid 1px;\n  }\n}\n\n.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {\n  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);\n  width: var(--mat-chip-with-icon-icon-size, 18px);\n  height: var(--mat-chip-with-icon-icon-size, 18px);\n  font-size: var(--mat-chip-with-icon-icon-size, 18px);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {\n  opacity: 0;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {\n  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {\n  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));\n}\n\n.mat-mdc-chip-highlighted {\n  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));\n  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));\n  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));\n  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);\n}\n\n.mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));\n  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));\n  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));\n  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));\n  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n\n.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {\n  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);\n}\n\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {\n  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);\n}\n\n.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {\n  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);\n}\n\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled {\n  opacity: var(--mat-chip-disabled-container-opacity, 1);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {\n  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {\n  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));\n}\n\n.mat-mdc-chip-edit, .mat-mdc-chip-remove {\n  opacity: var(--mat-chip-trailing-action-opacity, 1);\n}\n.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {\n  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);\n}\n.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {\n  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {\n  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));\n}\n.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {\n  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));\n}\n\n.mat-mdc-chip-selected .mat-mdc-chip-remove::after,\n.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {\n  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));\n}\n\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {\n  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));\n}\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {\n  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));\n}\n\n.mat-mdc-standard-chip {\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-standard-chip .mat-mdc-chip-graphic,\n.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {\n  box-sizing: content-box;\n}\n.mat-mdc-standard-chip._mat-animation-noopable,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {\n  transition-duration: 1ms;\n  animation-duration: 1ms;\n}\n\n.mat-mdc-chip-focus-overlay {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  opacity: 0;\n  border-radius: inherit;\n  transition: opacity 150ms linear;\n}\n._mat-animation-noopable .mat-mdc-chip-focus-overlay {\n  transition: none;\n}\n.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {\n  display: none;\n}\n\n.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  border-radius: inherit;\n}\n\n.mat-mdc-chip-avatar {\n  text-align: center;\n  line-height: 1;\n  color: var(--mat-chip-with-icon-icon-color, currentColor);\n}\n\n.mat-mdc-chip {\n  position: relative;\n  z-index: 0;\n}\n\n.mat-mdc-chip-action-label {\n  text-align: left;\n  z-index: 1;\n}\n[dir=rtl] .mat-mdc-chip-action-label {\n  text-align: right;\n}\n.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {\n  position: relative;\n}\n.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n}\n.mat-mdc-chip-action-label .mat-focus-indicator::before {\n  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);\n}\n\n.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {\n  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);\n  left: 8px;\n  right: 8px;\n}\n.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {\n  content: "";\n  display: block;\n  opacity: 0;\n  position: absolute;\n  top: -3px;\n  bottom: -3px;\n  left: 5px;\n  right: 5px;\n  border-radius: 50%;\n  box-sizing: border-box;\n  padding: 12px;\n  margin: -12px;\n  background-clip: content-box;\n}\n.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  box-sizing: content-box;\n}\n\n.mat-chip-edit-input {\n  cursor: text;\n  display: inline-block;\n  color: inherit;\n  outline: 0;\n}\n\n@media (forced-colors: active) {\n  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {\n    outline-width: 3px;\n  }\n}\n\n.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {\n  content: "";\n}\n\n.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {\n  min-height: fit-content;\n}\n\nimg.mdc-evolution-chip__icon {\n  min-height: 0;\n}\n';
var _c3 = [[["", "matChipEdit", ""]], [["mat-chip-avatar"], ["", "matChipAvatar", ""]], [["", "matChipEditInput", ""]], "*", [["mat-chip-trailing-icon"], ["", "matChipRemove", ""], ["", "matChipTrailingIcon", ""]]];
var _c4 = ["[matChipEdit]", "mat-chip-avatar, [matChipAvatar]", "[matChipEditInput]", "*", "mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];
function MatChipRow_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 0);
  }
}
function MatChipRow_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
}
function MatChipRow_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275projection(1, 1);
    \u0275\u0275elementEnd();
  }
}
function MatChipRow_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 2);
  }
}
function MatChipRow_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 7);
  }
}
function MatChipRow_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MatChipRow_Conditional_5_Conditional_0_Template, 1, 0)(1, MatChipRow_Conditional_5_Conditional_1_Template, 1, 0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.contentEditInput ? 0 : 1);
  }
}
function MatChipRow_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 3);
  }
}
function MatChipRow_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275projection(1, 4);
    \u0275\u0275elementEnd();
  }
}
var _c5 = ["*"];
var _c6 = ".mat-mdc-chip-set {\n  display: flex;\n}\n.mat-mdc-chip-set:focus {\n  outline: none;\n}\n.mat-mdc-chip-set .mdc-evolution-chip-set__chips {\n  min-width: 100%;\n  margin-left: -8px;\n  margin-right: 0;\n}\n.mat-mdc-chip-set .mdc-evolution-chip {\n  margin: 4px 0 4px 8px;\n}\n[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {\n  margin-left: 0;\n  margin-right: -8px;\n}\n[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {\n  margin-left: 0;\n  margin-right: 8px;\n}\n\n.mdc-evolution-chip-set__chips {\n  display: flex;\n  flex-flow: wrap;\n  min-width: 0;\n}\n\n.mat-mdc-chip-set-stacked {\n  flex-direction: column;\n  align-items: flex-start;\n}\n.mat-mdc-chip-set-stacked .mat-mdc-chip {\n  width: 100%;\n}\n.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {\n  flex-grow: 0;\n}\n.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {\n  flex-basis: 100%;\n  justify-content: start;\n}\n\ninput.mat-mdc-chip-input {\n  flex: 1 0 150px;\n  margin-left: 8px;\n}\n[dir=rtl] input.mat-mdc-chip-input {\n  margin-left: 0;\n  margin-right: 8px;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {\n  opacity: 1;\n}\n.mat-mdc-chip-set + input.mat-mdc-chip-input {\n  margin-left: 0;\n  margin-right: 0;\n}\n";
var MAT_CHIPS_DEFAULT_OPTIONS = new InjectionToken("mat-chips-default-options", {
  providedIn: "root",
  factory: () => ({
    separatorKeyCodes: [ENTER]
  })
});
var MAT_CHIP_AVATAR = new InjectionToken("MatChipAvatar");
var MAT_CHIP_TRAILING_ICON = new InjectionToken("MatChipTrailingIcon");
var MAT_CHIP_EDIT = new InjectionToken("MatChipEdit");
var MAT_CHIP_REMOVE = new InjectionToken("MatChipRemove");
var MAT_CHIP = new InjectionToken("MatChip");
var MatChipContent = class _MatChipContent {
  _elementRef = inject(ElementRef);
  _parentChip = inject(MAT_CHIP);
  _isPrimary = true;
  _isLeading = false;
  get disabled() {
    return this._disabled || this._parentChip?.disabled || false;
  }
  set disabled(value) {
    this._disabled = value;
  }
  _disabled = false;
  tabIndex = -1;
  _allowFocusWhenDisabled = false;
  _getDisabledAttribute() {
    return this.disabled && !this._allowFocusWhenDisabled ? "" : null;
  }
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    if (this._elementRef.nativeElement.nodeName === "BUTTON") {
      this._elementRef.nativeElement.setAttribute("type", "button");
    }
  }
  focus() {
    this._elementRef.nativeElement.focus();
  }
  static \u0275fac = function MatChipContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatChipContent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatChipContent,
    selectors: [["", "matChipContent", ""]],
    hostAttrs: [1, "mat-mdc-chip-action", "mdc-evolution-chip__action", "mdc-evolution-chip__action--presentational"],
    hostVars: 8,
    hostBindings: function MatChipContent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("disabled", ctx._getDisabledAttribute())("aria-disabled", ctx.disabled);
        \u0275\u0275classProp("mdc-evolution-chip__action--primary", ctx._isPrimary)("mdc-evolution-chip__action--secondary", !ctx._isPrimary)("mdc-evolution-chip__action--trailing", !ctx._isPrimary && !ctx._isLeading);
      }
    },
    inputs: {
      disabled: [2, "disabled", "disabled", booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? -1 : numberAttribute(value)],
      _allowFocusWhenDisabled: "_allowFocusWhenDisabled"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipContent, [{
    type: Directive,
    args: [{
      selector: "[matChipContent]",
      host: {
        "class": "mat-mdc-chip-action mdc-evolution-chip__action mdc-evolution-chip__action--presentational",
        "[class.mdc-evolution-chip__action--primary]": "_isPrimary",
        "[class.mdc-evolution-chip__action--secondary]": "!_isPrimary",
        "[class.mdc-evolution-chip__action--trailing]": "!_isPrimary && !_isLeading",
        "[attr.disabled]": "_getDisabledAttribute()",
        "[attr.aria-disabled]": "disabled"
      }
    }]
  }], () => [], {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? -1 : numberAttribute(value)
      }]
    }],
    _allowFocusWhenDisabled: [{
      type: Input
    }]
  });
})();
var MatChipAction = class _MatChipAction extends MatChipContent {
  _getTabindex() {
    return this.disabled && !this._allowFocusWhenDisabled ? null : this.tabIndex.toString();
  }
  _handleClick(event) {
    if (!this.disabled && this._isPrimary) {
      event.preventDefault();
      this._parentChip._handlePrimaryActionInteraction();
    }
  }
  _handleKeydown(event) {
    if ((event.keyCode === ENTER || event.keyCode === SPACE) && !this.disabled && this._isPrimary && !this._parentChip._isEditing) {
      event.preventDefault();
      this._parentChip._handlePrimaryActionInteraction();
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatChipAction_BaseFactory;
    return function MatChipAction_Factory(__ngFactoryType__) {
      return (\u0275MatChipAction_BaseFactory || (\u0275MatChipAction_BaseFactory = \u0275\u0275getInheritedFactory(_MatChipAction)))(__ngFactoryType__ || _MatChipAction);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatChipAction,
    selectors: [["", "matChipAction", ""]],
    hostVars: 3,
    hostBindings: function MatChipAction_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatChipAction_click_HostBindingHandler($event) {
          return ctx._handleClick($event);
        })("keydown", function MatChipAction_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("tabindex", ctx._getTabindex());
        \u0275\u0275classProp("mdc-evolution-chip__action--presentational", false);
      }
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipAction, [{
    type: Directive,
    args: [{
      selector: "[matChipAction]",
      host: {
        "[attr.tabindex]": "_getTabindex()",
        "[class.mdc-evolution-chip__action--presentational]": "false",
        "(click)": "_handleClick($event)",
        "(keydown)": "_handleKeydown($event)"
      }
    }]
  }], null, null);
})();
var MatChipAvatar = class _MatChipAvatar {
  static \u0275fac = function MatChipAvatar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatChipAvatar)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatChipAvatar,
    selectors: [["mat-chip-avatar"], ["", "matChipAvatar", ""]],
    hostAttrs: ["role", "img", 1, "mat-mdc-chip-avatar", "mdc-evolution-chip__icon", "mdc-evolution-chip__icon--primary"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_CHIP_AVATAR,
      useExisting: _MatChipAvatar
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipAvatar, [{
    type: Directive,
    args: [{
      selector: "mat-chip-avatar, [matChipAvatar]",
      host: {
        "class": "mat-mdc-chip-avatar mdc-evolution-chip__icon mdc-evolution-chip__icon--primary",
        "role": "img"
      },
      providers: [{
        provide: MAT_CHIP_AVATAR,
        useExisting: MatChipAvatar
      }]
    }]
  }], null, null);
})();
var MatChipTrailingIcon = class _MatChipTrailingIcon extends MatChipContent {
  _isPrimary = false;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatChipTrailingIcon_BaseFactory;
    return function MatChipTrailingIcon_Factory(__ngFactoryType__) {
      return (\u0275MatChipTrailingIcon_BaseFactory || (\u0275MatChipTrailingIcon_BaseFactory = \u0275\u0275getInheritedFactory(_MatChipTrailingIcon)))(__ngFactoryType__ || _MatChipTrailingIcon);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatChipTrailingIcon,
    selectors: [["mat-chip-trailing-icon"], ["", "matChipTrailingIcon", ""]],
    hostAttrs: ["aria-hidden", "true", 1, "mat-mdc-chip-trailing-icon", "mdc-evolution-chip__icon", "mdc-evolution-chip__icon--trailing"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_CHIP_TRAILING_ICON,
      useExisting: _MatChipTrailingIcon
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipTrailingIcon, [{
    type: Directive,
    args: [{
      selector: "mat-chip-trailing-icon, [matChipTrailingIcon]",
      host: {
        "class": "mat-mdc-chip-trailing-icon mdc-evolution-chip__icon mdc-evolution-chip__icon--trailing",
        "aria-hidden": "true"
      },
      providers: [{
        provide: MAT_CHIP_TRAILING_ICON,
        useExisting: MatChipTrailingIcon
      }]
    }]
  }], null, null);
})();
var MatChipEdit = class _MatChipEdit extends MatChipAction {
  _isPrimary = false;
  _isLeading = true;
  _handleClick(event) {
    if (!this.disabled) {
      event.stopPropagation();
      event.preventDefault();
      this._parentChip._edit(event);
    }
  }
  _handleKeydown(event) {
    if ((event.keyCode === ENTER || event.keyCode === SPACE) && !this.disabled) {
      event.stopPropagation();
      event.preventDefault();
      this._parentChip._edit(event);
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatChipEdit_BaseFactory;
    return function MatChipEdit_Factory(__ngFactoryType__) {
      return (\u0275MatChipEdit_BaseFactory || (\u0275MatChipEdit_BaseFactory = \u0275\u0275getInheritedFactory(_MatChipEdit)))(__ngFactoryType__ || _MatChipEdit);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatChipEdit,
    selectors: [["", "matChipEdit", ""]],
    hostAttrs: ["role", "button", 1, "mat-mdc-chip-edit", "mat-mdc-chip-avatar", "mat-focus-indicator", "mdc-evolution-chip__icon", "mdc-evolution-chip__icon--primary"],
    hostVars: 1,
    hostBindings: function MatChipEdit_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-hidden", null);
      }
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_CHIP_EDIT,
      useExisting: _MatChipEdit
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipEdit, [{
    type: Directive,
    args: [{
      selector: "[matChipEdit]",
      host: {
        "class": "mat-mdc-chip-edit mat-mdc-chip-avatar mat-focus-indicator mdc-evolution-chip__icon mdc-evolution-chip__icon--primary",
        "role": "button",
        "[attr.aria-hidden]": "null"
      },
      providers: [{
        provide: MAT_CHIP_EDIT,
        useExisting: MatChipEdit
      }]
    }]
  }], null, null);
})();
var MatChipRemove = class _MatChipRemove extends MatChipAction {
  _isPrimary = false;
  _handleClick(event) {
    if (!this.disabled) {
      event.stopPropagation();
      event.preventDefault();
      this._parentChip.remove();
    }
  }
  _handleKeydown(event) {
    if ((event.keyCode === ENTER || event.keyCode === SPACE) && !this.disabled) {
      event.stopPropagation();
      event.preventDefault();
      this._parentChip.remove();
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatChipRemove_BaseFactory;
    return function MatChipRemove_Factory(__ngFactoryType__) {
      return (\u0275MatChipRemove_BaseFactory || (\u0275MatChipRemove_BaseFactory = \u0275\u0275getInheritedFactory(_MatChipRemove)))(__ngFactoryType__ || _MatChipRemove);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatChipRemove,
    selectors: [["", "matChipRemove", ""]],
    hostAttrs: ["role", "button", 1, "mat-mdc-chip-remove", "mat-mdc-chip-trailing-icon", "mat-focus-indicator", "mdc-evolution-chip__icon", "mdc-evolution-chip__icon--trailing"],
    hostVars: 1,
    hostBindings: function MatChipRemove_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-hidden", null);
      }
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_CHIP_REMOVE,
      useExisting: _MatChipRemove
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipRemove, [{
    type: Directive,
    args: [{
      selector: "[matChipRemove]",
      host: {
        "class": "mat-mdc-chip-remove mat-mdc-chip-trailing-icon mat-focus-indicator mdc-evolution-chip__icon mdc-evolution-chip__icon--trailing",
        "role": "button",
        "[attr.aria-hidden]": "null"
      },
      providers: [{
        provide: MAT_CHIP_REMOVE,
        useExisting: MatChipRemove
      }]
    }]
  }], null, null);
})();
var MatChip = class _MatChip {
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _tagName = inject(HOST_TAG_NAME);
  _ngZone = inject(NgZone);
  _focusMonitor = inject(FocusMonitor);
  _globalRippleOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
    optional: true
  });
  _document = inject(DOCUMENT);
  _onFocus = new Subject();
  _onBlur = new Subject();
  _isBasicChip = false;
  role = null;
  _hasFocusInternal = false;
  _pendingFocus = false;
  _actionChanges;
  _animationsDisabled = _animationsDisabled();
  _allLeadingIcons;
  _allTrailingIcons;
  _allEditIcons;
  _allRemoveIcons;
  _hasFocus() {
    return this._hasFocusInternal;
  }
  id = inject(_IdGenerator).getId("mat-mdc-chip-");
  ariaLabel = null;
  ariaDescription = null;
  _chipListDisabled = false;
  _hadFocusOnRemove = false;
  _textElement;
  get value() {
    return this._value !== void 0 ? this._value : this._textElement.textContent.trim();
  }
  set value(value) {
    this._value = value;
  }
  _value;
  color;
  removable = true;
  highlighted = false;
  disableRipple = false;
  get disabled() {
    return this._disabled || this._chipListDisabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  _disabled = false;
  removed = new EventEmitter();
  destroyed = new EventEmitter();
  basicChipAttrName = "mat-basic-chip";
  leadingIcon;
  editIcon;
  trailingIcon;
  removeIcon;
  primaryAction;
  _rippleLoader = inject(MatRippleLoader);
  _injector = inject(Injector);
  constructor() {
    const styleLoader = inject(_CdkPrivateStyleLoader);
    styleLoader.load(_StructuralStylesLoader);
    styleLoader.load(_VisuallyHiddenLoader);
    this._monitorFocus();
    this._rippleLoader?.configureRipple(this._elementRef.nativeElement, {
      className: "mat-mdc-chip-ripple",
      disabled: this._isRippleDisabled()
    });
  }
  ngOnInit() {
    this._isBasicChip = this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName) || this._tagName.toLowerCase() === this.basicChipAttrName;
  }
  ngAfterViewInit() {
    this._textElement = this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label");
    if (this._pendingFocus) {
      this._pendingFocus = false;
      this.focus();
    }
  }
  ngAfterContentInit() {
    this._actionChanges = merge(this._allLeadingIcons.changes, this._allTrailingIcons.changes, this._allEditIcons.changes, this._allRemoveIcons.changes).subscribe(() => this._changeDetectorRef.markForCheck());
  }
  ngDoCheck() {
    this._rippleLoader.setDisabled(this._elementRef.nativeElement, this._isRippleDisabled());
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._rippleLoader?.destroyRipple(this._elementRef.nativeElement);
    this._actionChanges?.unsubscribe();
    this.destroyed.emit({
      chip: this
    });
    this.destroyed.complete();
  }
  remove() {
    if (this.removable) {
      this._hadFocusOnRemove = this._hasFocus();
      this.removed.emit({
        chip: this
      });
    }
  }
  _isRippleDisabled() {
    return this.disabled || this.disableRipple || this._animationsDisabled || this._isBasicChip || !this._hasInteractiveActions() || !!this._globalRippleOptions?.disabled;
  }
  _hasTrailingIcon() {
    return !!(this.trailingIcon || this.removeIcon);
  }
  _handleKeydown(event) {
    if (event.keyCode === BACKSPACE && !event.repeat || event.keyCode === DELETE) {
      event.preventDefault();
      this.remove();
    }
  }
  focus() {
    if (!this.disabled) {
      if (this.primaryAction) {
        this.primaryAction.focus();
      } else {
        this._pendingFocus = true;
      }
    }
  }
  _getSourceAction(target) {
    return this._getActions().find((action) => {
      const element = action._elementRef.nativeElement;
      return element === target || element.contains(target);
    });
  }
  _getActions() {
    const result = [];
    if (this.editIcon) {
      result.push(this.editIcon);
    }
    if (this.primaryAction) {
      result.push(this.primaryAction);
    }
    if (this.removeIcon) {
      result.push(this.removeIcon);
    }
    return result;
  }
  _handlePrimaryActionInteraction() {
  }
  _hasInteractiveActions() {
    return this._getActions().length > 0;
  }
  _edit(event) {
  }
  _monitorFocus() {
    this._focusMonitor.monitor(this._elementRef, true).subscribe((origin) => {
      const hasFocus = origin !== null;
      if (hasFocus !== this._hasFocusInternal) {
        this._hasFocusInternal = hasFocus;
        if (hasFocus) {
          this._onFocus.next({
            chip: this
          });
        } else {
          this._changeDetectorRef.markForCheck();
          setTimeout(() => this._ngZone.run(() => this._onBlur.next({
            chip: this
          })));
        }
      }
    });
  }
  static \u0275fac = function MatChip_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatChip)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatChip,
    selectors: [["mat-basic-chip"], ["", "mat-basic-chip", ""], ["mat-chip"], ["", "mat-chip", ""]],
    contentQueries: function MatChip_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MAT_CHIP_AVATAR, 5)(dirIndex, MAT_CHIP_EDIT, 5)(dirIndex, MAT_CHIP_TRAILING_ICON, 5)(dirIndex, MAT_CHIP_REMOVE, 5)(dirIndex, MAT_CHIP_AVATAR, 5)(dirIndex, MAT_CHIP_TRAILING_ICON, 5)(dirIndex, MAT_CHIP_EDIT, 5)(dirIndex, MAT_CHIP_REMOVE, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.leadingIcon = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editIcon = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.trailingIcon = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.removeIcon = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allLeadingIcons = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allTrailingIcons = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allEditIcons = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allRemoveIcons = _t);
      }
    },
    viewQuery: function MatChip_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatChipAction, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.primaryAction = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-chip"],
    hostVars: 31,
    hostBindings: function MatChip_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function MatChip_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
        \u0275\u0275attribute("role", ctx.role)("aria-label", ctx.ariaLabel);
        \u0275\u0275classMap("mat-" + (ctx.color || "primary"));
        \u0275\u0275classProp("mdc-evolution-chip", !ctx._isBasicChip)("mdc-evolution-chip--disabled", ctx.disabled)("mdc-evolution-chip--with-trailing-action", ctx._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic", ctx.leadingIcon)("mdc-evolution-chip--with-primary-icon", ctx.leadingIcon)("mdc-evolution-chip--with-avatar", ctx.leadingIcon)("mat-mdc-chip-with-avatar", ctx.leadingIcon)("mat-mdc-chip-highlighted", ctx.highlighted)("mat-mdc-chip-disabled", ctx.disabled)("mat-mdc-basic-chip", ctx._isBasicChip)("mat-mdc-standard-chip", !ctx._isBasicChip)("mat-mdc-chip-with-trailing-icon", ctx._hasTrailingIcon())("_mat-animation-noopable", ctx._animationsDisabled);
      }
    },
    inputs: {
      role: "role",
      id: "id",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaDescription: [0, "aria-description", "ariaDescription"],
      value: "value",
      color: "color",
      removable: [2, "removable", "removable", booleanAttribute],
      highlighted: [2, "highlighted", "highlighted", booleanAttribute],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute]
    },
    outputs: {
      removed: "removed",
      destroyed: "destroyed"
    },
    exportAs: ["matChip"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_CHIP,
      useExisting: _MatChip
    }])],
    ngContentSelectors: _c1,
    decls: 8,
    vars: 2,
    consts: [[1, "mat-mdc-chip-focus-overlay"], [1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--primary"], ["matChipContent", ""], [1, "mdc-evolution-chip__graphic", "mat-mdc-chip-graphic"], [1, "mdc-evolution-chip__text-label", "mat-mdc-chip-action-label"], [1, "mat-mdc-chip-primary-focus-indicator", "mat-focus-indicator"], [1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--trailing"]],
    template: function MatChip_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c0);
        \u0275\u0275element(0, "span", 0);
        \u0275\u0275elementStart(1, "span", 1)(2, "span", 2);
        \u0275\u0275conditionalCreate(3, MatChip_Conditional_3_Template, 2, 0, "span", 3);
        \u0275\u0275elementStart(4, "span", 4);
        \u0275\u0275projection(5);
        \u0275\u0275element(6, "span", 5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(7, MatChip_Conditional_7_Template, 2, 0, "span", 6);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.leadingIcon ? 3 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx._hasTrailingIcon() ? 7 : -1);
      }
    },
    dependencies: [MatChipContent],
    styles: ['.mdc-evolution-chip,\n.mdc-evolution-chip__cell,\n.mdc-evolution-chip__action {\n  display: inline-flex;\n  align-items: center;\n}\n\n.mdc-evolution-chip {\n  position: relative;\n  max-width: 100%;\n}\n\n.mdc-evolution-chip__cell,\n.mdc-evolution-chip__action {\n  height: 100%;\n}\n\n.mdc-evolution-chip__cell--primary {\n  flex-basis: 100%;\n  overflow-x: hidden;\n}\n\n.mdc-evolution-chip__cell--trailing {\n  flex: 1 0 auto;\n}\n\n.mdc-evolution-chip__action {\n  align-items: center;\n  background: none;\n  border: none;\n  box-sizing: content-box;\n  cursor: pointer;\n  display: inline-flex;\n  justify-content: center;\n  outline: none;\n  padding: 0;\n  text-decoration: none;\n  color: inherit;\n}\n\n.mdc-evolution-chip__action--presentational {\n  cursor: auto;\n}\n\n.mdc-evolution-chip--disabled,\n.mdc-evolution-chip__action:disabled {\n  pointer-events: none;\n}\n@media (forced-colors: active) {\n  .mdc-evolution-chip--disabled,\n  .mdc-evolution-chip__action:disabled {\n    forced-color-adjust: none;\n  }\n}\n\n.mdc-evolution-chip__action--primary {\n  font: inherit;\n  letter-spacing: inherit;\n  white-space: inherit;\n  overflow-x: hidden;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {\n  border-width: var(--mat-chip-outline-width, 1px);\n  border-radius: var(--mat-chip-container-shape-radius, 8px);\n  box-sizing: border-box;\n  content: "";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  pointer-events: none;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n  border-style: solid;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {\n  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));\n}\n.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {\n  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {\n  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {\n  border-width: var(--mat-chip-flat-selected-outline-width, 0);\n}\n.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {\n  font: inherit;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.mdc-evolution-chip__action--secondary {\n  position: relative;\n  overflow: visible;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {\n  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {\n  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.mdc-evolution-chip__text-label {\n  -webkit-user-select: none;\n  user-select: none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__text-label {\n  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));\n  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));\n  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));\n  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));\n  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {\n  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {\n  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {\n  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n\n.mdc-evolution-chip__graphic {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  overflow: hidden;\n  pointer-events: none;\n  position: relative;\n  flex: 1 0 auto;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__graphic {\n  width: var(--mat-chip-with-avatar-avatar-size, 24px);\n  height: var(--mat-chip-with-avatar-avatar-size, 24px);\n  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {\n  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {\n  width: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 4px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 8px;\n  padding-right: 4px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 4px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 8px;\n  padding-right: 4px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {\n  padding-left: 0;\n}\n\n.mdc-evolution-chip__checkmark {\n  position: absolute;\n  opacity: 0;\n  top: 50%;\n  left: 50%;\n  height: 20px;\n  width: 20px;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {\n  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {\n  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {\n  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate(-75%, -50%);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {\n  transform: translate(-50%, -50%);\n  opacity: 1;\n}\n\n.mdc-evolution-chip__checkmark-svg {\n  display: block;\n}\n\n.mdc-evolution-chip__checkmark-path {\n  stroke-width: 2px;\n  stroke-dasharray: 29.7833385;\n  stroke-dashoffset: 29.7833385;\n  stroke: currentColor;\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {\n  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {\n  stroke-dashoffset: 0;\n}\n@media (forced-colors: active) {\n  .mdc-evolution-chip__checkmark-path {\n    stroke: CanvasText !important;\n  }\n}\n\n.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {\n  height: 18px;\n  width: 18px;\n  font-size: 18px;\n}\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {\n  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));\n}\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {\n  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));\n}\n\n.mat-mdc-standard-chip {\n  border-radius: var(--mat-chip-container-shape-radius, 8px);\n  height: var(--mat-chip-container-height, 32px);\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {\n  background-color: var(--mat-chip-elevated-container-color, transparent);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled {\n  background-color: var(--mat-chip-elevated-disabled-container-color);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {\n  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {\n  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n@media (forced-colors: active) {\n  .mat-mdc-standard-chip {\n    outline: solid 1px;\n  }\n}\n\n.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {\n  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);\n  width: var(--mat-chip-with-icon-icon-size, 18px);\n  height: var(--mat-chip-with-icon-icon-size, 18px);\n  font-size: var(--mat-chip-with-icon-icon-size, 18px);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {\n  opacity: 0;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {\n  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {\n  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));\n}\n\n.mat-mdc-chip-highlighted {\n  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));\n  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));\n  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));\n  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);\n}\n\n.mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));\n  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));\n  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));\n  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));\n  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n\n.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {\n  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);\n}\n\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {\n  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);\n}\n\n.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {\n  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);\n}\n\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled {\n  opacity: var(--mat-chip-disabled-container-opacity, 1);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {\n  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {\n  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));\n}\n\n.mat-mdc-chip-edit, .mat-mdc-chip-remove {\n  opacity: var(--mat-chip-trailing-action-opacity, 1);\n}\n.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {\n  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);\n}\n.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {\n  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {\n  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));\n}\n.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {\n  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));\n}\n\n.mat-mdc-chip-selected .mat-mdc-chip-remove::after,\n.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {\n  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));\n}\n\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {\n  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));\n}\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {\n  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));\n}\n\n.mat-mdc-standard-chip {\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-standard-chip .mat-mdc-chip-graphic,\n.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {\n  box-sizing: content-box;\n}\n.mat-mdc-standard-chip._mat-animation-noopable,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {\n  transition-duration: 1ms;\n  animation-duration: 1ms;\n}\n\n.mat-mdc-chip-focus-overlay {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  opacity: 0;\n  border-radius: inherit;\n  transition: opacity 150ms linear;\n}\n._mat-animation-noopable .mat-mdc-chip-focus-overlay {\n  transition: none;\n}\n.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {\n  display: none;\n}\n\n.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  border-radius: inherit;\n}\n\n.mat-mdc-chip-avatar {\n  text-align: center;\n  line-height: 1;\n  color: var(--mat-chip-with-icon-icon-color, currentColor);\n}\n\n.mat-mdc-chip {\n  position: relative;\n  z-index: 0;\n}\n\n.mat-mdc-chip-action-label {\n  text-align: left;\n  z-index: 1;\n}\n[dir=rtl] .mat-mdc-chip-action-label {\n  text-align: right;\n}\n.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {\n  position: relative;\n}\n.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n}\n.mat-mdc-chip-action-label .mat-focus-indicator::before {\n  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);\n}\n\n.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {\n  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);\n  left: 8px;\n  right: 8px;\n}\n.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {\n  content: "";\n  display: block;\n  opacity: 0;\n  position: absolute;\n  top: -3px;\n  bottom: -3px;\n  left: 5px;\n  right: 5px;\n  border-radius: 50%;\n  box-sizing: border-box;\n  padding: 12px;\n  margin: -12px;\n  background-clip: content-box;\n}\n.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  box-sizing: content-box;\n}\n\n.mat-chip-edit-input {\n  cursor: text;\n  display: inline-block;\n  color: inherit;\n  outline: 0;\n}\n\n@media (forced-colors: active) {\n  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {\n    outline-width: 3px;\n  }\n}\n\n.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {\n  content: "";\n}\n\n.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {\n  min-height: fit-content;\n}\n\nimg.mdc-evolution-chip__icon {\n  min-height: 0;\n}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChip, [{
    type: Component,
    args: [{
      selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]",
      exportAs: "matChip",
      host: {
        "class": "mat-mdc-chip",
        "[class]": '"mat-" + (color || "primary")',
        "[class.mdc-evolution-chip]": "!_isBasicChip",
        "[class.mdc-evolution-chip--disabled]": "disabled",
        "[class.mdc-evolution-chip--with-trailing-action]": "_hasTrailingIcon()",
        "[class.mdc-evolution-chip--with-primary-graphic]": "leadingIcon",
        "[class.mdc-evolution-chip--with-primary-icon]": "leadingIcon",
        "[class.mdc-evolution-chip--with-avatar]": "leadingIcon",
        "[class.mat-mdc-chip-with-avatar]": "leadingIcon",
        "[class.mat-mdc-chip-highlighted]": "highlighted",
        "[class.mat-mdc-chip-disabled]": "disabled",
        "[class.mat-mdc-basic-chip]": "_isBasicChip",
        "[class.mat-mdc-standard-chip]": "!_isBasicChip",
        "[class.mat-mdc-chip-with-trailing-icon]": "_hasTrailingIcon()",
        "[class._mat-animation-noopable]": "_animationsDisabled",
        "[id]": "id",
        "[attr.role]": "role",
        "[attr.aria-label]": "ariaLabel",
        "(keydown)": "_handleKeydown($event)"
      },
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_CHIP,
        useExisting: MatChip
      }],
      imports: [MatChipContent],
      template: '<span class="mat-mdc-chip-focus-overlay"></span>\n\n<span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary">\n  <span matChipContent>\n    @if (leadingIcon) {\n      <span class="mdc-evolution-chip__graphic mat-mdc-chip-graphic">\n        <ng-content select="mat-chip-avatar, [matChipAvatar]"></ng-content>\n      </span>\n    }\n    <span class="mdc-evolution-chip__text-label mat-mdc-chip-action-label">\n      <ng-content></ng-content>\n      <span class="mat-mdc-chip-primary-focus-indicator mat-focus-indicator"></span>\n    </span>\n  </span>\n</span>\n\n@if (_hasTrailingIcon()) {\n  <span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing">\n    <ng-content select="mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"></ng-content>\n  </span>\n}\n',
      styles: ['.mdc-evolution-chip,\n.mdc-evolution-chip__cell,\n.mdc-evolution-chip__action {\n  display: inline-flex;\n  align-items: center;\n}\n\n.mdc-evolution-chip {\n  position: relative;\n  max-width: 100%;\n}\n\n.mdc-evolution-chip__cell,\n.mdc-evolution-chip__action {\n  height: 100%;\n}\n\n.mdc-evolution-chip__cell--primary {\n  flex-basis: 100%;\n  overflow-x: hidden;\n}\n\n.mdc-evolution-chip__cell--trailing {\n  flex: 1 0 auto;\n}\n\n.mdc-evolution-chip__action {\n  align-items: center;\n  background: none;\n  border: none;\n  box-sizing: content-box;\n  cursor: pointer;\n  display: inline-flex;\n  justify-content: center;\n  outline: none;\n  padding: 0;\n  text-decoration: none;\n  color: inherit;\n}\n\n.mdc-evolution-chip__action--presentational {\n  cursor: auto;\n}\n\n.mdc-evolution-chip--disabled,\n.mdc-evolution-chip__action:disabled {\n  pointer-events: none;\n}\n@media (forced-colors: active) {\n  .mdc-evolution-chip--disabled,\n  .mdc-evolution-chip__action:disabled {\n    forced-color-adjust: none;\n  }\n}\n\n.mdc-evolution-chip__action--primary {\n  font: inherit;\n  letter-spacing: inherit;\n  white-space: inherit;\n  overflow-x: hidden;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {\n  border-width: var(--mat-chip-outline-width, 1px);\n  border-radius: var(--mat-chip-container-shape-radius, 8px);\n  box-sizing: border-box;\n  content: "";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  pointer-events: none;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n  border-style: solid;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {\n  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));\n}\n.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {\n  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {\n  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {\n  border-width: var(--mat-chip-flat-selected-outline-width, 0);\n}\n.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {\n  font: inherit;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.mdc-evolution-chip__action--secondary {\n  position: relative;\n  overflow: visible;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {\n  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {\n  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.mdc-evolution-chip__text-label {\n  -webkit-user-select: none;\n  user-select: none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__text-label {\n  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));\n  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));\n  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));\n  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));\n  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {\n  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {\n  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {\n  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n\n.mdc-evolution-chip__graphic {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  overflow: hidden;\n  pointer-events: none;\n  position: relative;\n  flex: 1 0 auto;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__graphic {\n  width: var(--mat-chip-with-avatar-avatar-size, 24px);\n  height: var(--mat-chip-with-avatar-avatar-size, 24px);\n  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {\n  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {\n  width: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 4px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 8px;\n  padding-right: 4px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 4px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 8px;\n  padding-right: 4px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {\n  padding-left: 0;\n}\n\n.mdc-evolution-chip__checkmark {\n  position: absolute;\n  opacity: 0;\n  top: 50%;\n  left: 50%;\n  height: 20px;\n  width: 20px;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {\n  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {\n  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {\n  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate(-75%, -50%);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {\n  transform: translate(-50%, -50%);\n  opacity: 1;\n}\n\n.mdc-evolution-chip__checkmark-svg {\n  display: block;\n}\n\n.mdc-evolution-chip__checkmark-path {\n  stroke-width: 2px;\n  stroke-dasharray: 29.7833385;\n  stroke-dashoffset: 29.7833385;\n  stroke: currentColor;\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {\n  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {\n  stroke-dashoffset: 0;\n}\n@media (forced-colors: active) {\n  .mdc-evolution-chip__checkmark-path {\n    stroke: CanvasText !important;\n  }\n}\n\n.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {\n  height: 18px;\n  width: 18px;\n  font-size: 18px;\n}\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {\n  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));\n}\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {\n  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));\n}\n\n.mat-mdc-standard-chip {\n  border-radius: var(--mat-chip-container-shape-radius, 8px);\n  height: var(--mat-chip-container-height, 32px);\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {\n  background-color: var(--mat-chip-elevated-container-color, transparent);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled {\n  background-color: var(--mat-chip-elevated-disabled-container-color);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {\n  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {\n  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n@media (forced-colors: active) {\n  .mat-mdc-standard-chip {\n    outline: solid 1px;\n  }\n}\n\n.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {\n  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);\n  width: var(--mat-chip-with-icon-icon-size, 18px);\n  height: var(--mat-chip-with-icon-icon-size, 18px);\n  font-size: var(--mat-chip-with-icon-icon-size, 18px);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {\n  opacity: 0;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {\n  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {\n  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));\n}\n\n.mat-mdc-chip-highlighted {\n  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));\n  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));\n  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));\n  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);\n}\n\n.mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));\n  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));\n  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));\n  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));\n  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n\n.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {\n  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);\n}\n\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {\n  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);\n}\n\n.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {\n  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);\n}\n\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled {\n  opacity: var(--mat-chip-disabled-container-opacity, 1);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {\n  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {\n  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));\n}\n\n.mat-mdc-chip-edit, .mat-mdc-chip-remove {\n  opacity: var(--mat-chip-trailing-action-opacity, 1);\n}\n.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {\n  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);\n}\n.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {\n  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {\n  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));\n}\n.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {\n  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));\n}\n\n.mat-mdc-chip-selected .mat-mdc-chip-remove::after,\n.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {\n  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));\n}\n\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {\n  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));\n}\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {\n  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));\n}\n\n.mat-mdc-standard-chip {\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-standard-chip .mat-mdc-chip-graphic,\n.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {\n  box-sizing: content-box;\n}\n.mat-mdc-standard-chip._mat-animation-noopable,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {\n  transition-duration: 1ms;\n  animation-duration: 1ms;\n}\n\n.mat-mdc-chip-focus-overlay {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  opacity: 0;\n  border-radius: inherit;\n  transition: opacity 150ms linear;\n}\n._mat-animation-noopable .mat-mdc-chip-focus-overlay {\n  transition: none;\n}\n.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {\n  display: none;\n}\n\n.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  border-radius: inherit;\n}\n\n.mat-mdc-chip-avatar {\n  text-align: center;\n  line-height: 1;\n  color: var(--mat-chip-with-icon-icon-color, currentColor);\n}\n\n.mat-mdc-chip {\n  position: relative;\n  z-index: 0;\n}\n\n.mat-mdc-chip-action-label {\n  text-align: left;\n  z-index: 1;\n}\n[dir=rtl] .mat-mdc-chip-action-label {\n  text-align: right;\n}\n.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {\n  position: relative;\n}\n.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n}\n.mat-mdc-chip-action-label .mat-focus-indicator::before {\n  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);\n}\n\n.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {\n  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);\n  left: 8px;\n  right: 8px;\n}\n.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {\n  content: "";\n  display: block;\n  opacity: 0;\n  position: absolute;\n  top: -3px;\n  bottom: -3px;\n  left: 5px;\n  right: 5px;\n  border-radius: 50%;\n  box-sizing: border-box;\n  padding: 12px;\n  margin: -12px;\n  background-clip: content-box;\n}\n.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  box-sizing: content-box;\n}\n\n.mat-chip-edit-input {\n  cursor: text;\n  display: inline-block;\n  color: inherit;\n  outline: 0;\n}\n\n@media (forced-colors: active) {\n  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {\n    outline-width: 3px;\n  }\n}\n\n.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {\n  content: "";\n}\n\n.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {\n  min-height: fit-content;\n}\n\nimg.mdc-evolution-chip__icon {\n  min-height: 0;\n}\n']
    }]
  }], () => [], {
    role: [{
      type: Input
    }],
    _allLeadingIcons: [{
      type: ContentChildren,
      args: [MAT_CHIP_AVATAR, {
        descendants: true
      }]
    }],
    _allTrailingIcons: [{
      type: ContentChildren,
      args: [MAT_CHIP_TRAILING_ICON, {
        descendants: true
      }]
    }],
    _allEditIcons: [{
      type: ContentChildren,
      args: [MAT_CHIP_EDIT, {
        descendants: true
      }]
    }],
    _allRemoveIcons: [{
      type: ContentChildren,
      args: [MAT_CHIP_REMOVE, {
        descendants: true
      }]
    }],
    id: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaDescription: [{
      type: Input,
      args: ["aria-description"]
    }],
    value: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    removable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    highlighted: [{
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
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    removed: [{
      type: Output
    }],
    destroyed: [{
      type: Output
    }],
    leadingIcon: [{
      type: ContentChild,
      args: [MAT_CHIP_AVATAR]
    }],
    editIcon: [{
      type: ContentChild,
      args: [MAT_CHIP_EDIT]
    }],
    trailingIcon: [{
      type: ContentChild,
      args: [MAT_CHIP_TRAILING_ICON]
    }],
    removeIcon: [{
      type: ContentChild,
      args: [MAT_CHIP_REMOVE]
    }],
    primaryAction: [{
      type: ViewChild,
      args: [MatChipAction]
    }]
  });
})();
var MatChipOption = class _MatChipOption extends MatChip {
  _defaultOptions = inject(MAT_CHIPS_DEFAULT_OPTIONS, {
    optional: true
  });
  chipListSelectable = true;
  _chipListMultiple = false;
  _chipListHideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? false;
  get selectable() {
    return this._selectable && this.chipListSelectable;
  }
  set selectable(value) {
    this._selectable = value;
    this._changeDetectorRef.markForCheck();
  }
  _selectable = true;
  get selected() {
    return this._selected;
  }
  set selected(value) {
    this._setSelectedState(value, false, true);
  }
  _selected = false;
  get ariaSelected() {
    return this.selectable ? this.selected.toString() : null;
  }
  basicChipAttrName = "mat-basic-chip-option";
  selectionChange = new EventEmitter();
  ngOnInit() {
    super.ngOnInit();
    this.role = "presentation";
  }
  select() {
    this._setSelectedState(true, false, true);
  }
  deselect() {
    this._setSelectedState(false, false, true);
  }
  selectViaInteraction() {
    this._setSelectedState(true, true, true);
  }
  toggleSelected(isUserInput = false) {
    this._setSelectedState(!this.selected, isUserInput, true);
    return this.selected;
  }
  _handlePrimaryActionInteraction() {
    if (!this.disabled) {
      this.focus();
      if (this.selectable) {
        this.toggleSelected(true);
      }
    }
  }
  _hasLeadingGraphic() {
    if (this.leadingIcon) {
      return true;
    }
    return !this._chipListHideSingleSelectionIndicator || this._chipListMultiple;
  }
  _setSelectedState(isSelected, isUserInput, emitEvent) {
    if (isSelected !== this.selected) {
      this._selected = isSelected;
      if (emitEvent) {
        this.selectionChange.emit({
          source: this,
          isUserInput,
          selected: this.selected
        });
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatChipOption_BaseFactory;
    return function MatChipOption_Factory(__ngFactoryType__) {
      return (\u0275MatChipOption_BaseFactory || (\u0275MatChipOption_BaseFactory = \u0275\u0275getInheritedFactory(_MatChipOption)))(__ngFactoryType__ || _MatChipOption);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatChipOption,
    selectors: [["mat-basic-chip-option"], ["", "mat-basic-chip-option", ""], ["mat-chip-option"], ["", "mat-chip-option", ""]],
    hostAttrs: [1, "mat-mdc-chip", "mat-mdc-chip-option"],
    hostVars: 37,
    hostBindings: function MatChipOption_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
        \u0275\u0275attribute("tabindex", null)("aria-label", null)("aria-description", null)("role", ctx.role);
        \u0275\u0275classProp("mdc-evolution-chip", !ctx._isBasicChip)("mdc-evolution-chip--filter", !ctx._isBasicChip)("mdc-evolution-chip--selectable", !ctx._isBasicChip)("mat-mdc-chip-selected", ctx.selected)("mat-mdc-chip-multiple", ctx._chipListMultiple)("mat-mdc-chip-disabled", ctx.disabled)("mat-mdc-chip-with-avatar", ctx.leadingIcon)("mdc-evolution-chip--disabled", ctx.disabled)("mdc-evolution-chip--selected", ctx.selected)("mdc-evolution-chip--selecting", !ctx._animationsDisabled)("mdc-evolution-chip--with-trailing-action", ctx._hasTrailingIcon())("mdc-evolution-chip--with-primary-icon", ctx.leadingIcon)("mdc-evolution-chip--with-primary-graphic", ctx._hasLeadingGraphic())("mdc-evolution-chip--with-avatar", ctx.leadingIcon)("mat-mdc-chip-highlighted", ctx.highlighted)("mat-mdc-chip-with-trailing-icon", ctx._hasTrailingIcon());
      }
    },
    inputs: {
      selectable: [2, "selectable", "selectable", booleanAttribute],
      selected: [2, "selected", "selected", booleanAttribute]
    },
    outputs: {
      selectionChange: "selectionChange"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: MatChip,
      useExisting: _MatChipOption
    }, {
      provide: MAT_CHIP,
      useExisting: _MatChipOption
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c1,
    decls: 8,
    vars: 6,
    consts: [[1, "mat-mdc-chip-focus-overlay"], [1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--primary"], ["matChipAction", "", "role", "option", 3, "_allowFocusWhenDisabled"], [1, "mdc-evolution-chip__graphic", "mat-mdc-chip-graphic"], [1, "mdc-evolution-chip__text-label", "mat-mdc-chip-action-label"], [1, "mat-mdc-chip-primary-focus-indicator", "mat-focus-indicator"], [1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--trailing"], [1, "mdc-evolution-chip__checkmark"], ["viewBox", "-2 -3 30 30", "focusable", "false", "aria-hidden", "true", 1, "mdc-evolution-chip__checkmark-svg"], ["fill", "none", "stroke", "currentColor", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-evolution-chip__checkmark-path"]],
    template: function MatChipOption_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c0);
        \u0275\u0275element(0, "span", 0);
        \u0275\u0275elementStart(1, "span", 1)(2, "button", 2);
        \u0275\u0275conditionalCreate(3, MatChipOption_Conditional_3_Template, 5, 0, "span", 3);
        \u0275\u0275elementStart(4, "span", 4);
        \u0275\u0275projection(5);
        \u0275\u0275element(6, "span", 5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(7, MatChipOption_Conditional_7_Template, 2, 0, "span", 6);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("_allowFocusWhenDisabled", true);
        \u0275\u0275attribute("aria-description", ctx.ariaDescription)("aria-label", ctx.ariaLabel)("aria-selected", ctx.ariaSelected);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._hasLeadingGraphic() ? 3 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx._hasTrailingIcon() ? 7 : -1);
      }
    },
    dependencies: [MatChipAction],
    styles: [_c2],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipOption, [{
    type: Component,
    args: [{
      selector: "mat-basic-chip-option, [mat-basic-chip-option], mat-chip-option, [mat-chip-option]",
      host: {
        "class": "mat-mdc-chip mat-mdc-chip-option",
        "[class.mdc-evolution-chip]": "!_isBasicChip",
        "[class.mdc-evolution-chip--filter]": "!_isBasicChip",
        "[class.mdc-evolution-chip--selectable]": "!_isBasicChip",
        "[class.mat-mdc-chip-selected]": "selected",
        "[class.mat-mdc-chip-multiple]": "_chipListMultiple",
        "[class.mat-mdc-chip-disabled]": "disabled",
        "[class.mat-mdc-chip-with-avatar]": "leadingIcon",
        "[class.mdc-evolution-chip--disabled]": "disabled",
        "[class.mdc-evolution-chip--selected]": "selected",
        "[class.mdc-evolution-chip--selecting]": "!_animationsDisabled",
        "[class.mdc-evolution-chip--with-trailing-action]": "_hasTrailingIcon()",
        "[class.mdc-evolution-chip--with-primary-icon]": "leadingIcon",
        "[class.mdc-evolution-chip--with-primary-graphic]": "_hasLeadingGraphic()",
        "[class.mdc-evolution-chip--with-avatar]": "leadingIcon",
        "[class.mat-mdc-chip-highlighted]": "highlighted",
        "[class.mat-mdc-chip-with-trailing-icon]": "_hasTrailingIcon()",
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-description]": "null",
        "[attr.role]": "role",
        "[id]": "id"
      },
      providers: [{
        provide: MatChip,
        useExisting: MatChipOption
      }, {
        provide: MAT_CHIP,
        useExisting: MatChipOption
      }],
      encapsulation: ViewEncapsulation.None,
      imports: [MatChipAction],
      template: '<span class="mat-mdc-chip-focus-overlay"></span>\n\n<span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary">\n  <button\n    matChipAction\n    [_allowFocusWhenDisabled]="true"\n    [attr.aria-description]="ariaDescription"\n    [attr.aria-label]="ariaLabel"\n    [attr.aria-selected]="ariaSelected"\n    role="option">\n    @if (_hasLeadingGraphic()) {\n      <span class="mdc-evolution-chip__graphic mat-mdc-chip-graphic">\n        <ng-content select="mat-chip-avatar, [matChipAvatar]"></ng-content>\n        <span class="mdc-evolution-chip__checkmark">\n          <svg\n            class="mdc-evolution-chip__checkmark-svg"\n            viewBox="-2 -3 30 30"\n            focusable="false"\n            aria-hidden="true">\n            <path class="mdc-evolution-chip__checkmark-path"\n                  fill="none" stroke="currentColor" d="M1.73,12.91 8.1,19.28 22.79,4.59" />\n          </svg>\n        </span>\n      </span>\n    }\n    <span class="mdc-evolution-chip__text-label mat-mdc-chip-action-label">\n      <ng-content></ng-content>\n      <span class="mat-mdc-chip-primary-focus-indicator mat-focus-indicator"></span>\n    </span>\n  </button>\n</span>\n\n@if (_hasTrailingIcon()) {\n  <span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing">\n    <ng-content select="mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"></ng-content>\n  </span>\n}\n',
      styles: ['.mdc-evolution-chip,\n.mdc-evolution-chip__cell,\n.mdc-evolution-chip__action {\n  display: inline-flex;\n  align-items: center;\n}\n\n.mdc-evolution-chip {\n  position: relative;\n  max-width: 100%;\n}\n\n.mdc-evolution-chip__cell,\n.mdc-evolution-chip__action {\n  height: 100%;\n}\n\n.mdc-evolution-chip__cell--primary {\n  flex-basis: 100%;\n  overflow-x: hidden;\n}\n\n.mdc-evolution-chip__cell--trailing {\n  flex: 1 0 auto;\n}\n\n.mdc-evolution-chip__action {\n  align-items: center;\n  background: none;\n  border: none;\n  box-sizing: content-box;\n  cursor: pointer;\n  display: inline-flex;\n  justify-content: center;\n  outline: none;\n  padding: 0;\n  text-decoration: none;\n  color: inherit;\n}\n\n.mdc-evolution-chip__action--presentational {\n  cursor: auto;\n}\n\n.mdc-evolution-chip--disabled,\n.mdc-evolution-chip__action:disabled {\n  pointer-events: none;\n}\n@media (forced-colors: active) {\n  .mdc-evolution-chip--disabled,\n  .mdc-evolution-chip__action:disabled {\n    forced-color-adjust: none;\n  }\n}\n\n.mdc-evolution-chip__action--primary {\n  font: inherit;\n  letter-spacing: inherit;\n  white-space: inherit;\n  overflow-x: hidden;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {\n  border-width: var(--mat-chip-outline-width, 1px);\n  border-radius: var(--mat-chip-container-shape-radius, 8px);\n  box-sizing: border-box;\n  content: "";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  pointer-events: none;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n  border-style: solid;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {\n  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));\n}\n.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {\n  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {\n  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {\n  border-width: var(--mat-chip-flat-selected-outline-width, 0);\n}\n.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {\n  font: inherit;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.mdc-evolution-chip__action--secondary {\n  position: relative;\n  overflow: visible;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {\n  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {\n  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.mdc-evolution-chip__text-label {\n  -webkit-user-select: none;\n  user-select: none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__text-label {\n  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));\n  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));\n  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));\n  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));\n  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {\n  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {\n  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {\n  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n\n.mdc-evolution-chip__graphic {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  overflow: hidden;\n  pointer-events: none;\n  position: relative;\n  flex: 1 0 auto;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__graphic {\n  width: var(--mat-chip-with-avatar-avatar-size, 24px);\n  height: var(--mat-chip-with-avatar-avatar-size, 24px);\n  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {\n  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {\n  width: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 4px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 8px;\n  padding-right: 4px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 4px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 8px;\n  padding-right: 4px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {\n  padding-left: 0;\n}\n\n.mdc-evolution-chip__checkmark {\n  position: absolute;\n  opacity: 0;\n  top: 50%;\n  left: 50%;\n  height: 20px;\n  width: 20px;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {\n  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {\n  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {\n  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate(-75%, -50%);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {\n  transform: translate(-50%, -50%);\n  opacity: 1;\n}\n\n.mdc-evolution-chip__checkmark-svg {\n  display: block;\n}\n\n.mdc-evolution-chip__checkmark-path {\n  stroke-width: 2px;\n  stroke-dasharray: 29.7833385;\n  stroke-dashoffset: 29.7833385;\n  stroke: currentColor;\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {\n  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {\n  stroke-dashoffset: 0;\n}\n@media (forced-colors: active) {\n  .mdc-evolution-chip__checkmark-path {\n    stroke: CanvasText !important;\n  }\n}\n\n.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {\n  height: 18px;\n  width: 18px;\n  font-size: 18px;\n}\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {\n  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));\n}\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {\n  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));\n}\n\n.mat-mdc-standard-chip {\n  border-radius: var(--mat-chip-container-shape-radius, 8px);\n  height: var(--mat-chip-container-height, 32px);\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {\n  background-color: var(--mat-chip-elevated-container-color, transparent);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled {\n  background-color: var(--mat-chip-elevated-disabled-container-color);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {\n  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {\n  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n@media (forced-colors: active) {\n  .mat-mdc-standard-chip {\n    outline: solid 1px;\n  }\n}\n\n.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {\n  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);\n  width: var(--mat-chip-with-icon-icon-size, 18px);\n  height: var(--mat-chip-with-icon-icon-size, 18px);\n  font-size: var(--mat-chip-with-icon-icon-size, 18px);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {\n  opacity: 0;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {\n  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {\n  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));\n}\n\n.mat-mdc-chip-highlighted {\n  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));\n  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));\n  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));\n  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);\n}\n\n.mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));\n  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));\n  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));\n  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));\n  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n\n.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {\n  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);\n}\n\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {\n  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);\n}\n\n.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {\n  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);\n}\n\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled {\n  opacity: var(--mat-chip-disabled-container-opacity, 1);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {\n  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {\n  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));\n}\n\n.mat-mdc-chip-edit, .mat-mdc-chip-remove {\n  opacity: var(--mat-chip-trailing-action-opacity, 1);\n}\n.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {\n  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);\n}\n.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {\n  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {\n  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));\n}\n.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {\n  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));\n}\n\n.mat-mdc-chip-selected .mat-mdc-chip-remove::after,\n.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {\n  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));\n}\n\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {\n  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));\n}\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {\n  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));\n}\n\n.mat-mdc-standard-chip {\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-standard-chip .mat-mdc-chip-graphic,\n.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {\n  box-sizing: content-box;\n}\n.mat-mdc-standard-chip._mat-animation-noopable,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {\n  transition-duration: 1ms;\n  animation-duration: 1ms;\n}\n\n.mat-mdc-chip-focus-overlay {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  opacity: 0;\n  border-radius: inherit;\n  transition: opacity 150ms linear;\n}\n._mat-animation-noopable .mat-mdc-chip-focus-overlay {\n  transition: none;\n}\n.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {\n  display: none;\n}\n\n.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  border-radius: inherit;\n}\n\n.mat-mdc-chip-avatar {\n  text-align: center;\n  line-height: 1;\n  color: var(--mat-chip-with-icon-icon-color, currentColor);\n}\n\n.mat-mdc-chip {\n  position: relative;\n  z-index: 0;\n}\n\n.mat-mdc-chip-action-label {\n  text-align: left;\n  z-index: 1;\n}\n[dir=rtl] .mat-mdc-chip-action-label {\n  text-align: right;\n}\n.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {\n  position: relative;\n}\n.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n}\n.mat-mdc-chip-action-label .mat-focus-indicator::before {\n  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);\n}\n\n.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {\n  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);\n  left: 8px;\n  right: 8px;\n}\n.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {\n  content: "";\n  display: block;\n  opacity: 0;\n  position: absolute;\n  top: -3px;\n  bottom: -3px;\n  left: 5px;\n  right: 5px;\n  border-radius: 50%;\n  box-sizing: border-box;\n  padding: 12px;\n  margin: -12px;\n  background-clip: content-box;\n}\n.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  box-sizing: content-box;\n}\n\n.mat-chip-edit-input {\n  cursor: text;\n  display: inline-block;\n  color: inherit;\n  outline: 0;\n}\n\n@media (forced-colors: active) {\n  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {\n    outline-width: 3px;\n  }\n}\n\n.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {\n  content: "";\n}\n\n.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {\n  min-height: fit-content;\n}\n\nimg.mdc-evolution-chip__icon {\n  min-height: 0;\n}\n']
    }]
  }], null, {
    selectable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selected: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectionChange: [{
      type: Output
    }]
  });
})();
var MatChipEditInput = class _MatChipEditInput {
  _elementRef = inject(ElementRef);
  _document = inject(DOCUMENT);
  initialize(initialValue) {
    this.getNativeElement().focus();
    this.setValue(initialValue);
  }
  getNativeElement() {
    return this._elementRef.nativeElement;
  }
  setValue(value) {
    this.getNativeElement().textContent = value;
    this._moveCursorToEndOfInput();
  }
  getValue() {
    return this.getNativeElement().textContent || "";
  }
  _moveCursorToEndOfInput() {
    const range = this._document.createRange();
    range.selectNodeContents(this.getNativeElement());
    range.collapse(false);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }
  static \u0275fac = function MatChipEditInput_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatChipEditInput)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatChipEditInput,
    selectors: [["span", "matChipEditInput", ""]],
    hostAttrs: ["role", "textbox", "tabindex", "-1", "contenteditable", "true", 1, "mat-chip-edit-input"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipEditInput, [{
    type: Directive,
    args: [{
      selector: "span[matChipEditInput]",
      host: {
        "class": "mat-chip-edit-input",
        "role": "textbox",
        "tabindex": "-1",
        "contenteditable": "true"
      }
    }]
  }], null, null);
})();
var MatChipRow = class _MatChipRow extends MatChip {
  basicChipAttrName = "mat-basic-chip-row";
  _renderer = inject(Renderer2);
  _cleanupMousedown;
  _editStartPending = false;
  editable = false;
  edited = new EventEmitter();
  defaultEditInput;
  contentEditInput;
  _alreadyFocused = false;
  _isEditing = false;
  constructor() {
    super();
    this.role = "row";
    this._onBlur.pipe(takeUntil(this.destroyed)).subscribe(() => {
      if (this._isEditing && !this._editStartPending) {
        this._onEditFinish();
      }
      this._alreadyFocused = false;
    });
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    this._cleanupMousedown = this._ngZone.runOutsideAngular(() => this._renderer.listen(this._elementRef.nativeElement, "mousedown", () => {
      this._alreadyFocused = this._hasFocus();
    }));
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._cleanupMousedown?.();
  }
  _hasLeadingActionIcon() {
    return !this._isEditing && !!this.editIcon;
  }
  _hasTrailingIcon() {
    return !this._isEditing && super._hasTrailingIcon();
  }
  _handleFocus() {
    if (!this._isEditing && !this.disabled) {
      this.focus();
    }
  }
  _handleKeydown(event) {
    if (event.keyCode === ENTER && !this.disabled) {
      if (this._isEditing) {
        event.preventDefault();
        this._onEditFinish();
      } else if (this.editable) {
        this._startEditing(event);
      }
    } else if (this._isEditing) {
      event.stopPropagation();
    } else {
      super._handleKeydown(event);
    }
  }
  _handleClick(event) {
    if (!this.disabled && this.editable && !this._isEditing && this._alreadyFocused) {
      event.preventDefault();
      event.stopPropagation();
      this._startEditing(event);
    }
  }
  _handleDoubleclick(event) {
    if (!this.disabled && this.editable) {
      this._startEditing(event);
    }
  }
  _edit() {
    this._changeDetectorRef.markForCheck();
    this._startEditing();
  }
  _startEditing(event) {
    if (!this.primaryAction || this.removeIcon && !!event && this._getSourceAction(event.target) === this.removeIcon) {
      return;
    }
    const value = this.value;
    this._isEditing = this._editStartPending = true;
    afterNextRender(() => {
      this._getEditInput().initialize(value);
      setTimeout(() => this._ngZone.run(() => this._editStartPending = false));
    }, {
      injector: this._injector
    });
  }
  _onEditFinish() {
    this._isEditing = this._editStartPending = false;
    this.edited.emit({
      chip: this,
      value: this._getEditInput().getValue()
    });
    if (this._document.activeElement === this._getEditInput().getNativeElement() || this._document.activeElement === this._document.body) {
      this.primaryAction.focus();
    }
  }
  _isRippleDisabled() {
    return super._isRippleDisabled() || this._isEditing;
  }
  _getEditInput() {
    return this.contentEditInput || this.defaultEditInput;
  }
  static \u0275fac = function MatChipRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatChipRow)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatChipRow,
    selectors: [["mat-chip-row"], ["", "mat-chip-row", ""], ["mat-basic-chip-row"], ["", "mat-basic-chip-row", ""]],
    contentQueries: function MatChipRow_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatChipEditInput, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentEditInput = _t.first);
      }
    },
    viewQuery: function MatChipRow_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatChipEditInput, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.defaultEditInput = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-chip", "mat-mdc-chip-row", "mdc-evolution-chip"],
    hostVars: 29,
    hostBindings: function MatChipRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focus", function MatChipRow_focus_HostBindingHandler() {
          return ctx._handleFocus();
        })("click", function MatChipRow_click_HostBindingHandler($event) {
          return ctx._hasInteractiveActions() ? ctx._handleClick($event) : null;
        })("dblclick", function MatChipRow_dblclick_HostBindingHandler($event) {
          return ctx._handleDoubleclick($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
        \u0275\u0275attribute("tabindex", ctx.disabled ? null : -1)("aria-label", null)("aria-description", null)("role", ctx.role);
        \u0275\u0275classProp("mat-mdc-chip-with-avatar", ctx.leadingIcon)("mat-mdc-chip-disabled", ctx.disabled)("mat-mdc-chip-editing", ctx._isEditing)("mat-mdc-chip-editable", ctx.editable)("mdc-evolution-chip--disabled", ctx.disabled)("mdc-evolution-chip--with-leading-action", ctx._hasLeadingActionIcon())("mdc-evolution-chip--with-trailing-action", ctx._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic", ctx.leadingIcon)("mdc-evolution-chip--with-primary-icon", ctx.leadingIcon)("mdc-evolution-chip--with-avatar", ctx.leadingIcon)("mat-mdc-chip-highlighted", ctx.highlighted)("mat-mdc-chip-with-trailing-icon", ctx._hasTrailingIcon());
      }
    },
    inputs: {
      editable: "editable"
    },
    outputs: {
      edited: "edited"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: MatChip,
      useExisting: _MatChipRow
    }, {
      provide: MAT_CHIP,
      useExisting: _MatChipRow
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c4,
    decls: 9,
    vars: 8,
    consts: [[1, "mat-mdc-chip-focus-overlay"], ["role", "gridcell", 1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--leading"], ["role", "gridcell", "matChipAction", "", 1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--primary", 3, "disabled"], [1, "mdc-evolution-chip__graphic", "mat-mdc-chip-graphic"], [1, "mdc-evolution-chip__text-label", "mat-mdc-chip-action-label"], ["aria-hidden", "true", 1, "mat-mdc-chip-primary-focus-indicator", "mat-focus-indicator"], ["role", "gridcell", 1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--trailing"], ["matChipEditInput", ""]],
    template: function MatChipRow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c3);
        \u0275\u0275conditionalCreate(0, MatChipRow_Conditional_0_Template, 1, 0, "span", 0);
        \u0275\u0275conditionalCreate(1, MatChipRow_Conditional_1_Template, 2, 0, "span", 1);
        \u0275\u0275elementStart(2, "span", 2);
        \u0275\u0275conditionalCreate(3, MatChipRow_Conditional_3_Template, 2, 0, "span", 3);
        \u0275\u0275elementStart(4, "span", 4);
        \u0275\u0275conditionalCreate(5, MatChipRow_Conditional_5_Template, 2, 1)(6, MatChipRow_Conditional_6_Template, 1, 0);
        \u0275\u0275element(7, "span", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(8, MatChipRow_Conditional_8_Template, 2, 0, "span", 6);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx._isEditing ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._hasLeadingActionIcon() ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.disabled);
        \u0275\u0275attribute("aria-description", ctx.ariaDescription)("aria-label", ctx.ariaLabel);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.leadingIcon ? 3 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx._isEditing ? 5 : 6);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx._hasTrailingIcon() ? 8 : -1);
      }
    },
    dependencies: [MatChipAction, MatChipEditInput],
    styles: [_c2],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipRow, [{
    type: Component,
    args: [{
      selector: "mat-chip-row, [mat-chip-row], mat-basic-chip-row, [mat-basic-chip-row]",
      host: {
        "class": "mat-mdc-chip mat-mdc-chip-row mdc-evolution-chip",
        "[class.mat-mdc-chip-with-avatar]": "leadingIcon",
        "[class.mat-mdc-chip-disabled]": "disabled",
        "[class.mat-mdc-chip-editing]": "_isEditing",
        "[class.mat-mdc-chip-editable]": "editable",
        "[class.mdc-evolution-chip--disabled]": "disabled",
        "[class.mdc-evolution-chip--with-leading-action]": "_hasLeadingActionIcon()",
        "[class.mdc-evolution-chip--with-trailing-action]": "_hasTrailingIcon()",
        "[class.mdc-evolution-chip--with-primary-graphic]": "leadingIcon",
        "[class.mdc-evolution-chip--with-primary-icon]": "leadingIcon",
        "[class.mdc-evolution-chip--with-avatar]": "leadingIcon",
        "[class.mat-mdc-chip-highlighted]": "highlighted",
        "[class.mat-mdc-chip-with-trailing-icon]": "_hasTrailingIcon()",
        "[id]": "id",
        "[attr.tabindex]": "disabled ? null : -1",
        "[attr.aria-label]": "null",
        "[attr.aria-description]": "null",
        "[attr.role]": "role",
        "(focus)": "_handleFocus()",
        "(click)": "this._hasInteractiveActions() ? _handleClick($event) : null",
        "(dblclick)": "_handleDoubleclick($event)"
      },
      providers: [{
        provide: MatChip,
        useExisting: MatChipRow
      }, {
        provide: MAT_CHIP,
        useExisting: MatChipRow
      }],
      encapsulation: ViewEncapsulation.None,
      imports: [MatChipAction, MatChipEditInput],
      template: '@if (!_isEditing) {\n  <span class="mat-mdc-chip-focus-overlay"></span>\n}\n\n@if (_hasLeadingActionIcon()) {\n  <span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--leading" role="gridcell">\n    <ng-content select="[matChipEdit]"></ng-content>\n  </span>\n}\n<span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary" role="gridcell"\n    matChipAction\n    [disabled]="disabled"\n    [attr.aria-description]="ariaDescription"\n    [attr.aria-label]="ariaLabel">\n  @if (leadingIcon) {\n    <span class="mdc-evolution-chip__graphic mat-mdc-chip-graphic">\n      <ng-content select="mat-chip-avatar, [matChipAvatar]"></ng-content>\n    </span>\n  }\n\n  <span class="mdc-evolution-chip__text-label mat-mdc-chip-action-label">\n    @if (_isEditing) {\n      @if (contentEditInput) {\n        <ng-content select="[matChipEditInput]"></ng-content>\n      } @else {\n        <span matChipEditInput></span>\n      }\n    } @else {\n      <ng-content></ng-content>\n    }\n\n    <span class="mat-mdc-chip-primary-focus-indicator mat-focus-indicator" aria-hidden="true"></span>\n  </span>\n</span>\n\n@if (_hasTrailingIcon()) {\n  <span\n    class="mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing"\n    role="gridcell">\n    <ng-content select="mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"></ng-content>\n  </span>\n}\n',
      styles: ['.mdc-evolution-chip,\n.mdc-evolution-chip__cell,\n.mdc-evolution-chip__action {\n  display: inline-flex;\n  align-items: center;\n}\n\n.mdc-evolution-chip {\n  position: relative;\n  max-width: 100%;\n}\n\n.mdc-evolution-chip__cell,\n.mdc-evolution-chip__action {\n  height: 100%;\n}\n\n.mdc-evolution-chip__cell--primary {\n  flex-basis: 100%;\n  overflow-x: hidden;\n}\n\n.mdc-evolution-chip__cell--trailing {\n  flex: 1 0 auto;\n}\n\n.mdc-evolution-chip__action {\n  align-items: center;\n  background: none;\n  border: none;\n  box-sizing: content-box;\n  cursor: pointer;\n  display: inline-flex;\n  justify-content: center;\n  outline: none;\n  padding: 0;\n  text-decoration: none;\n  color: inherit;\n}\n\n.mdc-evolution-chip__action--presentational {\n  cursor: auto;\n}\n\n.mdc-evolution-chip--disabled,\n.mdc-evolution-chip__action:disabled {\n  pointer-events: none;\n}\n@media (forced-colors: active) {\n  .mdc-evolution-chip--disabled,\n  .mdc-evolution-chip__action:disabled {\n    forced-color-adjust: none;\n  }\n}\n\n.mdc-evolution-chip__action--primary {\n  font: inherit;\n  letter-spacing: inherit;\n  white-space: inherit;\n  overflow-x: hidden;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {\n  border-width: var(--mat-chip-outline-width, 1px);\n  border-radius: var(--mat-chip-container-shape-radius, 8px);\n  box-sizing: border-box;\n  content: "";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  pointer-events: none;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n  border-style: solid;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {\n  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));\n}\n.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {\n  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {\n  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {\n  border-width: var(--mat-chip-flat-selected-outline-width, 0);\n}\n.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {\n  font: inherit;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 12px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {\n  padding-left: 12px;\n  padding-right: 0;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.mdc-evolution-chip__action--secondary {\n  position: relative;\n  overflow: visible;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {\n  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {\n  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.mdc-evolution-chip__text-label {\n  -webkit-user-select: none;\n  user-select: none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__text-label {\n  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));\n  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));\n  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));\n  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));\n  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {\n  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {\n  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {\n  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n\n.mdc-evolution-chip__graphic {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  overflow: hidden;\n  pointer-events: none;\n  position: relative;\n  flex: 1 0 auto;\n}\n.mat-mdc-standard-chip .mdc-evolution-chip__graphic {\n  width: var(--mat-chip-with-avatar-avatar-size, 24px);\n  height: var(--mat-chip-with-avatar-avatar-size, 24px);\n  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {\n  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {\n  width: 0;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 4px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {\n  padding-left: 8px;\n  padding-right: 4px;\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 4px;\n  padding-right: 8px;\n}\n[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {\n  padding-left: 8px;\n  padding-right: 4px;\n}\n.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {\n  padding-left: 0;\n}\n\n.mdc-evolution-chip__checkmark {\n  position: absolute;\n  opacity: 0;\n  top: 50%;\n  left: 50%;\n  height: 20px;\n  width: 20px;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {\n  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {\n  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {\n  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate(-75%, -50%);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {\n  transform: translate(-50%, -50%);\n  opacity: 1;\n}\n\n.mdc-evolution-chip__checkmark-svg {\n  display: block;\n}\n\n.mdc-evolution-chip__checkmark-path {\n  stroke-width: 2px;\n  stroke-dasharray: 29.7833385;\n  stroke-dashoffset: 29.7833385;\n  stroke: currentColor;\n}\n.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {\n  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {\n  stroke-dashoffset: 0;\n}\n@media (forced-colors: active) {\n  .mdc-evolution-chip__checkmark-path {\n    stroke: CanvasText !important;\n  }\n}\n\n.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {\n  height: 18px;\n  width: 18px;\n  font-size: 18px;\n}\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {\n  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));\n}\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {\n  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));\n}\n\n.mat-mdc-standard-chip {\n  border-radius: var(--mat-chip-container-shape-radius, 8px);\n  height: var(--mat-chip-container-height, 32px);\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {\n  background-color: var(--mat-chip-elevated-container-color, transparent);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled {\n  background-color: var(--mat-chip-elevated-disabled-container-color);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {\n  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {\n  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n@media (forced-colors: active) {\n  .mat-mdc-standard-chip {\n    outline: solid 1px;\n  }\n}\n\n.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {\n  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);\n  width: var(--mat-chip-with-icon-icon-size, 18px);\n  height: var(--mat-chip-with-icon-icon-size, 18px);\n  font-size: var(--mat-chip-with-icon-icon-size, 18px);\n}\n.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {\n  opacity: 0;\n}\n.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {\n  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {\n  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));\n}\n\n.mat-mdc-chip-highlighted {\n  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));\n  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));\n  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));\n  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);\n}\n\n.mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));\n  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));\n  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));\n  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {\n  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));\n  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n\n.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {\n  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);\n}\n\n.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {\n  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);\n}\n\n.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {\n  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);\n}\n\n.mat-mdc-standard-chip.mdc-evolution-chip--disabled {\n  opacity: var(--mat-chip-disabled-container-opacity, 1);\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {\n  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {\n  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));\n}\n\n.mat-mdc-chip-edit, .mat-mdc-chip-remove {\n  opacity: var(--mat-chip-trailing-action-opacity, 1);\n}\n.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {\n  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);\n}\n.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {\n  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {\n  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));\n}\n.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {\n  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));\n}\n\n.mat-mdc-chip-selected .mat-mdc-chip-remove::after,\n.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {\n  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));\n}\n\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {\n  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));\n}\n.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {\n  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));\n}\n\n.mat-mdc-standard-chip {\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-standard-chip .mat-mdc-chip-graphic,\n.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {\n  box-sizing: content-box;\n}\n.mat-mdc-standard-chip._mat-animation-noopable,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,\n.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {\n  transition-duration: 1ms;\n  animation-duration: 1ms;\n}\n\n.mat-mdc-chip-focus-overlay {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  opacity: 0;\n  border-radius: inherit;\n  transition: opacity 150ms linear;\n}\n._mat-animation-noopable .mat-mdc-chip-focus-overlay {\n  transition: none;\n}\n.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {\n  display: none;\n}\n\n.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  border-radius: inherit;\n}\n\n.mat-mdc-chip-avatar {\n  text-align: center;\n  line-height: 1;\n  color: var(--mat-chip-with-icon-icon-color, currentColor);\n}\n\n.mat-mdc-chip {\n  position: relative;\n  z-index: 0;\n}\n\n.mat-mdc-chip-action-label {\n  text-align: left;\n  z-index: 1;\n}\n[dir=rtl] .mat-mdc-chip-action-label {\n  text-align: right;\n}\n.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {\n  position: relative;\n}\n.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n}\n.mat-mdc-chip-action-label .mat-focus-indicator::before {\n  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);\n}\n\n.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {\n  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);\n  left: 8px;\n  right: 8px;\n}\n.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {\n  content: "";\n  display: block;\n  opacity: 0;\n  position: absolute;\n  top: -3px;\n  bottom: -3px;\n  left: 5px;\n  right: 5px;\n  border-radius: 50%;\n  box-sizing: border-box;\n  padding: 12px;\n  margin: -12px;\n  background-clip: content-box;\n}\n.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  box-sizing: content-box;\n}\n\n.mat-chip-edit-input {\n  cursor: text;\n  display: inline-block;\n  color: inherit;\n  outline: 0;\n}\n\n@media (forced-colors: active) {\n  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {\n    outline-width: 3px;\n  }\n}\n\n.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {\n  content: "";\n}\n\n.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {\n  min-height: fit-content;\n}\n\nimg.mdc-evolution-chip__icon {\n  min-height: 0;\n}\n']
    }]
  }], () => [], {
    editable: [{
      type: Input
    }],
    edited: [{
      type: Output
    }],
    defaultEditInput: [{
      type: ViewChild,
      args: [MatChipEditInput]
    }],
    contentEditInput: [{
      type: ContentChild,
      args: [MatChipEditInput]
    }]
  });
})();
var MatChipSet = class _MatChipSet {
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _lastDestroyedFocusedChipIndex = null;
  _keyManager;
  _destroyed = new Subject();
  _defaultRole = "presentation";
  get chipFocusChanges() {
    return this._getChipStream((chip) => chip._onFocus);
  }
  get chipDestroyedChanges() {
    return this._getChipStream((chip) => chip.destroyed);
  }
  get chipRemovedChanges() {
    return this._getChipStream((chip) => chip.removed);
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._syncChipsState();
  }
  _disabled = false;
  get empty() {
    return !this._chips || this._chips.length === 0;
  }
  get role() {
    if (this._explicitRole) {
      return this._explicitRole;
    }
    return this.empty ? null : this._defaultRole;
  }
  tabIndex = 0;
  set role(value) {
    this._explicitRole = value;
  }
  _explicitRole = null;
  get focused() {
    return this._hasFocusedChip();
  }
  _chips;
  _chipActions = new QueryList();
  ngAfterViewInit() {
    this._setUpFocusManagement();
    this._trackChipSetChanges();
    this._trackDestroyedFocusedChip();
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this._chipActions.destroy();
    this._destroyed.next();
    this._destroyed.complete();
  }
  _hasFocusedChip() {
    return this._chips && this._chips.some((chip) => chip._hasFocus());
  }
  _syncChipsState() {
    this._chips?.forEach((chip) => {
      chip._chipListDisabled = this._disabled;
      chip._changeDetectorRef.markForCheck();
    });
  }
  focus() {
  }
  _handleKeydown(event) {
    if (this._originatesFromChip(event)) {
      this._keyManager.onKeydown(event);
    }
  }
  _isValidIndex(index) {
    return index >= 0 && index < this._chips.length;
  }
  _allowFocusEscape() {
    const previous = this._elementRef.nativeElement.tabIndex;
    if (previous !== -1) {
      this._elementRef.nativeElement.tabIndex = -1;
      setTimeout(() => this._elementRef.nativeElement.tabIndex = previous);
    }
  }
  _getChipStream(mappingFunction) {
    return this._chips.changes.pipe(startWith(null), switchMap(() => merge(...this._chips.map(mappingFunction))));
  }
  _originatesFromChip(event) {
    let currentElement = event.target;
    while (currentElement && currentElement !== this._elementRef.nativeElement) {
      if (currentElement.classList.contains("mat-mdc-chip")) {
        return true;
      }
      currentElement = currentElement.parentElement;
    }
    return false;
  }
  _setUpFocusManagement() {
    this._chips.changes.pipe(startWith(this._chips)).subscribe((chips) => {
      const actions = [];
      chips.forEach((chip) => chip._getActions().forEach((action) => actions.push(action)));
      this._chipActions.reset(actions);
      this._chipActions.notifyOnChanges();
    });
    this._keyManager = new FocusKeyManager(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir ? this._dir.value : "ltr").withHomeAndEnd().skipPredicate((action) => this._skipPredicate(action));
    this.chipFocusChanges.pipe(takeUntil(this._destroyed)).subscribe(({
      chip
    }) => {
      const action = chip._getSourceAction(document.activeElement);
      if (action) {
        this._keyManager.updateActiveItem(action);
      }
    });
    this._dir?.change.pipe(takeUntil(this._destroyed)).subscribe((direction) => this._keyManager.withHorizontalOrientation(direction));
  }
  _skipPredicate(action) {
    return action.disabled;
  }
  _trackChipSetChanges() {
    this._chips.changes.pipe(startWith(null), takeUntil(this._destroyed)).subscribe(() => {
      if (this.disabled) {
        Promise.resolve().then(() => this._syncChipsState());
      }
      this._redirectDestroyedChipFocus();
    });
  }
  _trackDestroyedFocusedChip() {
    this.chipDestroyedChanges.pipe(takeUntil(this._destroyed)).subscribe((event) => {
      const chipArray = this._chips.toArray();
      const chipIndex = chipArray.indexOf(event.chip);
      const hasFocus = event.chip._hasFocus();
      const wasLastFocused = event.chip._hadFocusOnRemove && this._keyManager.activeItem && event.chip._getActions().includes(this._keyManager.activeItem);
      const shouldMoveFocus = hasFocus || wasLastFocused;
      if (this._isValidIndex(chipIndex) && shouldMoveFocus) {
        this._lastDestroyedFocusedChipIndex = chipIndex;
      }
    });
  }
  _redirectDestroyedChipFocus() {
    if (this._lastDestroyedFocusedChipIndex == null) {
      return;
    }
    if (this._chips.length) {
      const newIndex = Math.min(this._lastDestroyedFocusedChipIndex, this._chips.length - 1);
      const chipToFocus = this._chips.toArray()[newIndex];
      if (chipToFocus.disabled) {
        if (this._chips.length === 1) {
          this.focus();
        } else {
          this._keyManager.setPreviousItemActive();
        }
      } else {
        chipToFocus.focus();
      }
    } else {
      this.focus();
    }
    this._lastDestroyedFocusedChipIndex = null;
  }
  static \u0275fac = function MatChipSet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatChipSet)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatChipSet,
    selectors: [["mat-chip-set"]],
    contentQueries: function MatChipSet_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatChip, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._chips = _t);
      }
    },
    hostAttrs: [1, "mat-mdc-chip-set", "mdc-evolution-chip-set"],
    hostVars: 1,
    hostBindings: function MatChipSet_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function MatChipSet_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role);
      }
    },
    inputs: {
      disabled: [2, "disabled", "disabled", booleanAttribute],
      role: "role",
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)]
    },
    ngContentSelectors: _c5,
    decls: 2,
    vars: 0,
    consts: [["role", "presentation", 1, "mdc-evolution-chip-set__chips"]],
    template: function MatChipSet_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275domElementEnd();
      }
    },
    styles: [".mat-mdc-chip-set {\n  display: flex;\n}\n.mat-mdc-chip-set:focus {\n  outline: none;\n}\n.mat-mdc-chip-set .mdc-evolution-chip-set__chips {\n  min-width: 100%;\n  margin-left: -8px;\n  margin-right: 0;\n}\n.mat-mdc-chip-set .mdc-evolution-chip {\n  margin: 4px 0 4px 8px;\n}\n[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {\n  margin-left: 0;\n  margin-right: -8px;\n}\n[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {\n  margin-left: 0;\n  margin-right: 8px;\n}\n\n.mdc-evolution-chip-set__chips {\n  display: flex;\n  flex-flow: wrap;\n  min-width: 0;\n}\n\n.mat-mdc-chip-set-stacked {\n  flex-direction: column;\n  align-items: flex-start;\n}\n.mat-mdc-chip-set-stacked .mat-mdc-chip {\n  width: 100%;\n}\n.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {\n  flex-grow: 0;\n}\n.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {\n  flex-basis: 100%;\n  justify-content: start;\n}\n\ninput.mat-mdc-chip-input {\n  flex: 1 0 150px;\n  margin-left: 8px;\n}\n[dir=rtl] input.mat-mdc-chip-input {\n  margin-left: 0;\n  margin-right: 8px;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {\n  opacity: 1;\n}\n.mat-mdc-chip-set + input.mat-mdc-chip-input {\n  margin-left: 0;\n  margin-right: 0;\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipSet, [{
    type: Component,
    args: [{
      selector: "mat-chip-set",
      template: `
    <div class="mdc-evolution-chip-set__chips" role="presentation">
      <ng-content></ng-content>
    </div>
  `,
      host: {
        "class": "mat-mdc-chip-set mdc-evolution-chip-set",
        "(keydown)": "_handleKeydown($event)",
        "[attr.role]": "role"
      },
      encapsulation: ViewEncapsulation.None,
      styles: [".mat-mdc-chip-set {\n  display: flex;\n}\n.mat-mdc-chip-set:focus {\n  outline: none;\n}\n.mat-mdc-chip-set .mdc-evolution-chip-set__chips {\n  min-width: 100%;\n  margin-left: -8px;\n  margin-right: 0;\n}\n.mat-mdc-chip-set .mdc-evolution-chip {\n  margin: 4px 0 4px 8px;\n}\n[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {\n  margin-left: 0;\n  margin-right: -8px;\n}\n[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {\n  margin-left: 0;\n  margin-right: 8px;\n}\n\n.mdc-evolution-chip-set__chips {\n  display: flex;\n  flex-flow: wrap;\n  min-width: 0;\n}\n\n.mat-mdc-chip-set-stacked {\n  flex-direction: column;\n  align-items: flex-start;\n}\n.mat-mdc-chip-set-stacked .mat-mdc-chip {\n  width: 100%;\n}\n.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {\n  flex-grow: 0;\n}\n.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {\n  flex-basis: 100%;\n  justify-content: start;\n}\n\ninput.mat-mdc-chip-input {\n  flex: 1 0 150px;\n  margin-left: 8px;\n}\n[dir=rtl] input.mat-mdc-chip-input {\n  margin-left: 0;\n  margin-right: 8px;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {\n  opacity: 1;\n}\n.mat-mdc-chip-set + input.mat-mdc-chip-input {\n  margin-left: 0;\n  margin-right: 0;\n}\n"]
    }]
  }], null, {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    role: [{
      type: Input
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }],
    _chips: [{
      type: ContentChildren,
      args: [MatChip, {
        descendants: true
      }]
    }]
  });
})();
var MatChipListboxChange = class {
  source;
  value;
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatChipListbox),
  multi: true
};
var MatChipListbox = class _MatChipListbox extends MatChipSet {
  _onTouched = () => {
  };
  _onChange = () => {
  };
  _defaultRole = "listbox";
  _defaultOptions = inject(MAT_CHIPS_DEFAULT_OPTIONS, {
    optional: true
  });
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    this._multiple = value;
    this._syncListboxProperties();
  }
  _multiple = false;
  get selected() {
    const selectedChips = this._chips.toArray().filter((chip) => chip.selected);
    return this.multiple ? selectedChips : selectedChips[0];
  }
  ariaOrientation = "horizontal";
  get selectable() {
    return this._selectable;
  }
  set selectable(value) {
    this._selectable = value;
    this._syncListboxProperties();
  }
  _selectable = true;
  compareWith = (o1, o2) => o1 === o2;
  required = false;
  get hideSingleSelectionIndicator() {
    return this._hideSingleSelectionIndicator;
  }
  set hideSingleSelectionIndicator(value) {
    this._hideSingleSelectionIndicator = value;
    this._syncListboxProperties();
  }
  _hideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? false;
  get chipSelectionChanges() {
    return this._getChipStream((chip) => chip.selectionChange);
  }
  get chipBlurChanges() {
    return this._getChipStream((chip) => chip._onBlur);
  }
  get value() {
    return this._value;
  }
  set value(value) {
    if (this._chips && this._chips.length) {
      this._setSelectionByValue(value, false);
    }
    this._value = value;
  }
  _value;
  change = new EventEmitter();
  _chips = void 0;
  ngAfterContentInit() {
    this._chips.changes.pipe(startWith(null), takeUntil(this._destroyed)).subscribe(() => {
      if (this.value !== void 0) {
        Promise.resolve().then(() => {
          this._setSelectionByValue(this.value, false);
        });
      }
      this._syncListboxProperties();
    });
    this.chipBlurChanges.pipe(takeUntil(this._destroyed)).subscribe(() => this._blur());
    this.chipSelectionChanges.pipe(takeUntil(this._destroyed)).subscribe((event) => {
      if (!this.multiple) {
        this._chips.forEach((chip) => {
          if (chip !== event.source) {
            chip._setSelectedState(false, false, false);
          }
        });
      }
      if (event.isUserInput) {
        this._propagateChanges();
      }
    });
  }
  focus() {
    if (this.disabled) {
      return;
    }
    const firstSelectedChip = this._getFirstSelectedChip();
    if (firstSelectedChip && !firstSelectedChip.disabled) {
      firstSelectedChip.focus();
    } else if (this._chips.length > 0) {
      this._keyManager.setFirstItemActive();
    } else {
      this._elementRef.nativeElement.focus();
    }
  }
  writeValue(value) {
    if (value != null) {
      this.value = value;
    } else {
      this.value = void 0;
    }
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  _setSelectionByValue(value, isUserInput = true) {
    this._clearSelection();
    if (Array.isArray(value)) {
      value.forEach((currentValue) => this._selectValue(currentValue, isUserInput));
    } else {
      this._selectValue(value, isUserInput);
    }
  }
  _blur() {
    if (!this.disabled) {
      setTimeout(() => {
        if (!this.focused) {
          this._markAsTouched();
        }
      });
    }
  }
  _keydown(event) {
    if (event.keyCode === TAB) {
      super._allowFocusEscape();
    }
  }
  _markAsTouched() {
    this._onTouched();
    this._changeDetectorRef.markForCheck();
  }
  _propagateChanges() {
    let valueToEmit = null;
    if (Array.isArray(this.selected)) {
      valueToEmit = this.selected.map((chip) => chip.value);
    } else {
      valueToEmit = this.selected ? this.selected.value : void 0;
    }
    this._value = valueToEmit;
    this.change.emit(new MatChipListboxChange(this, valueToEmit));
    this._onChange(valueToEmit);
    this._changeDetectorRef.markForCheck();
  }
  _clearSelection(skip) {
    this._chips.forEach((chip) => {
      if (chip !== skip) {
        chip.deselect();
      }
    });
  }
  _selectValue(value, isUserInput) {
    const correspondingChip = this._chips.find((chip) => {
      return chip.value != null && this.compareWith(chip.value, value);
    });
    if (correspondingChip) {
      isUserInput ? correspondingChip.selectViaInteraction() : correspondingChip.select();
    }
    return correspondingChip;
  }
  _syncListboxProperties() {
    if (this._chips) {
      Promise.resolve().then(() => {
        this._chips.forEach((chip) => {
          chip._chipListMultiple = this.multiple;
          chip.chipListSelectable = this._selectable;
          chip._chipListHideSingleSelectionIndicator = this.hideSingleSelectionIndicator;
          chip._changeDetectorRef.markForCheck();
        });
      });
    }
  }
  _getFirstSelectedChip() {
    if (Array.isArray(this.selected)) {
      return this.selected.length ? this.selected[0] : void 0;
    } else {
      return this.selected;
    }
  }
  _skipPredicate(action) {
    return false;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatChipListbox_BaseFactory;
    return function MatChipListbox_Factory(__ngFactoryType__) {
      return (\u0275MatChipListbox_BaseFactory || (\u0275MatChipListbox_BaseFactory = \u0275\u0275getInheritedFactory(_MatChipListbox)))(__ngFactoryType__ || _MatChipListbox);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatChipListbox,
    selectors: [["mat-chip-listbox"]],
    contentQueries: function MatChipListbox_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatChipOption, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._chips = _t);
      }
    },
    hostAttrs: [1, "mdc-evolution-chip-set", "mat-mdc-chip-listbox"],
    hostVars: 10,
    hostBindings: function MatChipListbox_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focus", function MatChipListbox_focus_HostBindingHandler() {
          return ctx.focus();
        })("blur", function MatChipListbox_blur_HostBindingHandler() {
          return ctx._blur();
        })("keydown", function MatChipListbox_keydown_HostBindingHandler($event) {
          return ctx._keydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("tabIndex", ctx.disabled || ctx.empty ? -1 : ctx.tabIndex);
        \u0275\u0275attribute("role", ctx.role)("aria-required", ctx.role ? ctx.required : null)("aria-disabled", ctx.disabled.toString())("aria-multiselectable", ctx.multiple)("aria-orientation", ctx.ariaOrientation);
        \u0275\u0275classProp("mat-mdc-chip-list-disabled", ctx.disabled)("mat-mdc-chip-list-required", ctx.required);
      }
    },
    inputs: {
      multiple: [2, "multiple", "multiple", booleanAttribute],
      ariaOrientation: [0, "aria-orientation", "ariaOrientation"],
      selectable: [2, "selectable", "selectable", booleanAttribute],
      compareWith: "compareWith",
      required: [2, "required", "required", booleanAttribute],
      hideSingleSelectionIndicator: [2, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", booleanAttribute],
      value: "value"
    },
    outputs: {
      change: "change"
    },
    features: [\u0275\u0275ProvidersFeature([MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c5,
    decls: 2,
    vars: 0,
    consts: [["role", "presentation", 1, "mdc-evolution-chip-set__chips"]],
    template: function MatChipListbox_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275domElementEnd();
      }
    },
    styles: [_c6],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipListbox, [{
    type: Component,
    args: [{
      selector: "mat-chip-listbox",
      template: `
    <div class="mdc-evolution-chip-set__chips" role="presentation">
      <ng-content></ng-content>
    </div>
  `,
      host: {
        "class": "mdc-evolution-chip-set mat-mdc-chip-listbox",
        "[attr.role]": "role",
        "[tabIndex]": "(disabled || empty) ? -1 : tabIndex",
        "[attr.aria-required]": "role ? required : null",
        "[attr.aria-disabled]": "disabled.toString()",
        "[attr.aria-multiselectable]": "multiple",
        "[attr.aria-orientation]": "ariaOrientation",
        "[class.mat-mdc-chip-list-disabled]": "disabled",
        "[class.mat-mdc-chip-list-required]": "required",
        "(focus)": "focus()",
        "(blur)": "_blur()",
        "(keydown)": "_keydown($event)"
      },
      providers: [MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR],
      encapsulation: ViewEncapsulation.None,
      styles: [".mat-mdc-chip-set {\n  display: flex;\n}\n.mat-mdc-chip-set:focus {\n  outline: none;\n}\n.mat-mdc-chip-set .mdc-evolution-chip-set__chips {\n  min-width: 100%;\n  margin-left: -8px;\n  margin-right: 0;\n}\n.mat-mdc-chip-set .mdc-evolution-chip {\n  margin: 4px 0 4px 8px;\n}\n[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {\n  margin-left: 0;\n  margin-right: -8px;\n}\n[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {\n  margin-left: 0;\n  margin-right: 8px;\n}\n\n.mdc-evolution-chip-set__chips {\n  display: flex;\n  flex-flow: wrap;\n  min-width: 0;\n}\n\n.mat-mdc-chip-set-stacked {\n  flex-direction: column;\n  align-items: flex-start;\n}\n.mat-mdc-chip-set-stacked .mat-mdc-chip {\n  width: 100%;\n}\n.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {\n  flex-grow: 0;\n}\n.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {\n  flex-basis: 100%;\n  justify-content: start;\n}\n\ninput.mat-mdc-chip-input {\n  flex: 1 0 150px;\n  margin-left: 8px;\n}\n[dir=rtl] input.mat-mdc-chip-input {\n  margin-left: 0;\n  margin-right: 8px;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {\n  opacity: 1;\n}\n.mat-mdc-chip-set + input.mat-mdc-chip-input {\n  margin-left: 0;\n  margin-right: 0;\n}\n"]
    }]
  }], null, {
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaOrientation: [{
      type: Input,
      args: ["aria-orientation"]
    }],
    selectable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    compareWith: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideSingleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    _chips: [{
      type: ContentChildren,
      args: [MatChipOption, {
        descendants: true
      }]
    }]
  });
})();
var MatChipGridChange = class {
  source;
  value;
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var MatChipGrid = class _MatChipGrid extends MatChipSet {
  ngControl = inject(NgControl, {
    optional: true,
    self: true
  });
  controlType = "mat-chip-grid";
  _chipInput;
  _defaultRole = "grid";
  _errorStateTracker;
  _uid = inject(_IdGenerator).getId("mat-chip-grid-");
  _ariaDescribedbyIds = [];
  _onTouched = () => {
  };
  _onChange = () => {
  };
  get disabled() {
    return this.ngControl ? !!this.ngControl.disabled : this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._syncChipsState();
    this.stateChanges.next();
  }
  get id() {
    return this._chipInput ? this._chipInput.id : this._uid;
  }
  get empty() {
    return (!this._chipInput || this._chipInput.empty) && (!this._chips || this._chips.length === 0);
  }
  get placeholder() {
    return this._chipInput ? this._chipInput.placeholder : this._placeholder;
  }
  set placeholder(value) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  _placeholder = "";
  get focused() {
    return this._chipInput?.focused || this._hasFocusedChip();
  }
  get required() {
    return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
  }
  set required(value) {
    this._required = value;
    this.stateChanges.next();
  }
  _required;
  get shouldLabelFloat() {
    return !this.empty || this.focused;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
  }
  _value = [];
  get errorStateMatcher() {
    return this._errorStateTracker.matcher;
  }
  set errorStateMatcher(value) {
    this._errorStateTracker.matcher = value;
  }
  get chipBlurChanges() {
    return this._getChipStream((chip) => chip._onBlur);
  }
  change = new EventEmitter();
  valueChange = new EventEmitter();
  _chips = void 0;
  stateChanges = new Subject();
  get errorState() {
    return this._errorStateTracker.errorState;
  }
  set errorState(value) {
    this._errorStateTracker.errorState = value;
  }
  constructor() {
    super();
    const parentForm = inject(NgForm, {
      optional: true
    });
    const parentFormGroup = inject(FormGroupDirective, {
      optional: true
    });
    const defaultErrorStateMatcher = inject(ErrorStateMatcher);
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
    this._errorStateTracker = new _ErrorStateTracker(defaultErrorStateMatcher, this.ngControl, parentFormGroup, parentForm, this.stateChanges);
  }
  ngAfterContentInit() {
    this.chipBlurChanges.pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._blur();
      this.stateChanges.next();
    });
    merge(this.chipFocusChanges, this._chips.changes).pipe(takeUntil(this._destroyed)).subscribe(() => this.stateChanges.next());
  }
  ngDoCheck() {
    if (this.ngControl) {
      this.updateErrorState();
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.stateChanges.complete();
  }
  registerInput(inputElement) {
    this._chipInput = inputElement;
    this._chipInput.setDescribedByIds(this._ariaDescribedbyIds);
    this._elementRef.nativeElement.removeAttribute("aria-describedby");
  }
  onContainerClick(event) {
    if (!this.disabled && !this._originatesFromChip(event)) {
      this.focus();
    }
  }
  focus() {
    if (this.disabled || this._chipInput?.focused) {
      return;
    }
    if (!this._chips.length || this._chips.first.disabled) {
      if (!this._chipInput) {
        return;
      }
      Promise.resolve().then(() => this._chipInput.focus());
    } else {
      const activeItem = this._keyManager.activeItem;
      if (activeItem) {
        activeItem.focus();
      } else {
        this._keyManager.setFirstItemActive();
      }
    }
    this.stateChanges.next();
  }
  get describedByIds() {
    if (this._chipInput) {
      return this._chipInput.describedByIds || [];
    }
    const existing = this._elementRef.nativeElement.getAttribute("aria-describedby");
    return existing ? existing.split(" ") : [];
  }
  setDescribedByIds(ids) {
    this._ariaDescribedbyIds = ids;
    if (this._chipInput) {
      this._chipInput.setDescribedByIds(ids);
    } else if (ids.length) {
      this._elementRef.nativeElement.setAttribute("aria-describedby", ids.join(" "));
    } else {
      this._elementRef.nativeElement.removeAttribute("aria-describedby");
    }
  }
  writeValue(value) {
    this._value = value;
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this.stateChanges.next();
  }
  updateErrorState() {
    this._errorStateTracker.updateErrorState();
  }
  _blur() {
    if (!this.disabled) {
      setTimeout(() => {
        if (!this.focused) {
          this._propagateChanges();
          this._markAsTouched();
        }
      });
    }
  }
  _allowFocusEscape() {
    if (!this._chipInput?.focused) {
      super._allowFocusEscape();
    }
  }
  _handleKeydown(event) {
    const keyCode = event.keyCode;
    const activeItem = this._keyManager.activeItem;
    if (keyCode === TAB) {
      if (this._chipInput?.focused && hasModifierKey(event, "shiftKey") && this._chips.length && !this._chips.last.disabled) {
        event.preventDefault();
        if (activeItem) {
          this._keyManager.setActiveItem(activeItem);
        } else {
          this._focusLastChip();
        }
      } else {
        super._allowFocusEscape();
      }
    } else if (!this._chipInput?.focused) {
      if ((keyCode === UP_ARROW || keyCode === DOWN_ARROW) && activeItem) {
        const eligibleActions = this._chipActions.filter((action) => action._isPrimary === activeItem._isPrimary && !this._skipPredicate(action));
        const currentIndex = eligibleActions.indexOf(activeItem);
        const delta = event.keyCode === UP_ARROW ? -1 : 1;
        event.preventDefault();
        if (currentIndex > -1 && this._isValidIndex(currentIndex + delta)) {
          this._keyManager.setActiveItem(eligibleActions[currentIndex + delta]);
        }
      } else {
        super._handleKeydown(event);
      }
    }
    this.stateChanges.next();
  }
  _focusLastChip() {
    if (this._chips.length) {
      this._chips.last.focus();
    }
  }
  _propagateChanges() {
    const valueToEmit = this._chips.length ? this._chips.toArray().map((chip) => chip.value) : [];
    this._value = valueToEmit;
    this.change.emit(new MatChipGridChange(this, valueToEmit));
    this.valueChange.emit(valueToEmit);
    this._onChange(valueToEmit);
    this._changeDetectorRef.markForCheck();
  }
  _markAsTouched() {
    this._onTouched();
    this._changeDetectorRef.markForCheck();
    this.stateChanges.next();
  }
  static \u0275fac = function MatChipGrid_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatChipGrid)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatChipGrid,
    selectors: [["mat-chip-grid"]],
    contentQueries: function MatChipGrid_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatChipRow, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._chips = _t);
      }
    },
    hostAttrs: [1, "mat-mdc-chip-set", "mat-mdc-chip-grid", "mdc-evolution-chip-set"],
    hostVars: 10,
    hostBindings: function MatChipGrid_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focus", function MatChipGrid_focus_HostBindingHandler() {
          return ctx.focus();
        })("blur", function MatChipGrid_blur_HostBindingHandler() {
          return ctx._blur();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role)("tabindex", ctx.disabled || ctx._chips && ctx._chips.length === 0 ? -1 : ctx.tabIndex)("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState);
        \u0275\u0275classProp("mat-mdc-chip-list-disabled", ctx.disabled)("mat-mdc-chip-list-invalid", ctx.errorState)("mat-mdc-chip-list-required", ctx.required);
      }
    },
    inputs: {
      disabled: [2, "disabled", "disabled", booleanAttribute],
      placeholder: "placeholder",
      required: [2, "required", "required", booleanAttribute],
      value: "value",
      errorStateMatcher: "errorStateMatcher"
    },
    outputs: {
      change: "change",
      valueChange: "valueChange"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: MatFormFieldControl,
      useExisting: _MatChipGrid
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c5,
    decls: 2,
    vars: 0,
    consts: [["role", "presentation", 1, "mdc-evolution-chip-set__chips"]],
    template: function MatChipGrid_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275domElementEnd();
      }
    },
    styles: [_c6],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipGrid, [{
    type: Component,
    args: [{
      selector: "mat-chip-grid",
      template: `
    <div class="mdc-evolution-chip-set__chips" role="presentation">
      <ng-content></ng-content>
    </div>
  `,
      host: {
        "class": "mat-mdc-chip-set mat-mdc-chip-grid mdc-evolution-chip-set",
        "[attr.role]": "role",
        "[attr.tabindex]": "(disabled || (_chips && _chips.length === 0)) ? -1 : tabIndex",
        "[attr.aria-disabled]": "disabled.toString()",
        "[attr.aria-invalid]": "errorState",
        "[class.mat-mdc-chip-list-disabled]": "disabled",
        "[class.mat-mdc-chip-list-invalid]": "errorState",
        "[class.mat-mdc-chip-list-required]": "required",
        "(focus)": "focus()",
        "(blur)": "_blur()"
      },
      providers: [{
        provide: MatFormFieldControl,
        useExisting: MatChipGrid
      }],
      encapsulation: ViewEncapsulation.None,
      styles: [".mat-mdc-chip-set {\n  display: flex;\n}\n.mat-mdc-chip-set:focus {\n  outline: none;\n}\n.mat-mdc-chip-set .mdc-evolution-chip-set__chips {\n  min-width: 100%;\n  margin-left: -8px;\n  margin-right: 0;\n}\n.mat-mdc-chip-set .mdc-evolution-chip {\n  margin: 4px 0 4px 8px;\n}\n[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {\n  margin-left: 0;\n  margin-right: -8px;\n}\n[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {\n  margin-left: 0;\n  margin-right: 8px;\n}\n\n.mdc-evolution-chip-set__chips {\n  display: flex;\n  flex-flow: wrap;\n  min-width: 0;\n}\n\n.mat-mdc-chip-set-stacked {\n  flex-direction: column;\n  align-items: flex-start;\n}\n.mat-mdc-chip-set-stacked .mat-mdc-chip {\n  width: 100%;\n}\n.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {\n  flex-grow: 0;\n}\n.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {\n  flex-basis: 100%;\n  justify-content: start;\n}\n\ninput.mat-mdc-chip-input {\n  flex: 1 0 150px;\n  margin-left: 8px;\n}\n[dir=rtl] input.mat-mdc-chip-input {\n  margin-left: 0;\n  margin-right: 8px;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {\n  opacity: 1;\n}\n.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {\n  opacity: 1;\n}\n.mat-mdc-chip-set + input.mat-mdc-chip-input {\n  margin-left: 0;\n  margin-right: 0;\n}\n"]
    }]
  }], () => [], {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    placeholder: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    errorStateMatcher: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    valueChange: [{
      type: Output
    }],
    _chips: [{
      type: ContentChildren,
      args: [MatChipRow, {
        descendants: true
      }]
    }]
  });
})();
var MatChipInput = class _MatChipInput {
  _elementRef = inject(ElementRef);
  focused = false;
  get chipGrid() {
    return this._chipGrid;
  }
  set chipGrid(value) {
    if (value) {
      this._chipGrid = value;
      this._chipGrid.registerInput(this);
    }
  }
  _chipGrid;
  addOnBlur = false;
  separatorKeyCodes;
  chipEnd = new EventEmitter();
  placeholder = "";
  id = inject(_IdGenerator).getId("mat-mdc-chip-list-input-");
  get disabled() {
    return this._disabled || this._chipGrid && this._chipGrid.disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  _disabled = false;
  readonly = false;
  disabledInteractive;
  get empty() {
    return !this.inputElement.value;
  }
  inputElement;
  constructor() {
    const defaultOptions = inject(MAT_CHIPS_DEFAULT_OPTIONS);
    const formField = inject(MAT_FORM_FIELD, {
      optional: true
    });
    this.inputElement = this._elementRef.nativeElement;
    this.separatorKeyCodes = defaultOptions.separatorKeyCodes;
    this.disabledInteractive = defaultOptions.inputDisabledInteractive ?? false;
    if (formField) {
      this.inputElement.classList.add("mat-mdc-form-field-input-control");
    }
  }
  ngOnChanges() {
    this._chipGrid.stateChanges.next();
  }
  ngOnDestroy() {
    this.chipEnd.complete();
  }
  _keydown(event) {
    if (this.empty && event.keyCode === BACKSPACE) {
      if (!event.repeat) {
        this._chipGrid._focusLastChip();
      }
      event.preventDefault();
    } else {
      this._emitChipEnd(event);
    }
  }
  _blur() {
    if (this.addOnBlur) {
      this._emitChipEnd();
    }
    this.focused = false;
    if (!this._chipGrid.focused) {
      this._chipGrid._blur();
    }
    this._chipGrid.stateChanges.next();
  }
  _focus() {
    this.focused = true;
    this._chipGrid.stateChanges.next();
  }
  _emitChipEnd(event) {
    if (!event || this._isSeparatorKey(event) && !event.repeat) {
      this.chipEnd.emit({
        input: this.inputElement,
        value: this.inputElement.value,
        chipInput: this
      });
      event?.preventDefault();
    }
  }
  _onInput() {
    this._chipGrid.stateChanges.next();
  }
  focus() {
    this.inputElement.focus();
  }
  clear() {
    this.inputElement.value = "";
  }
  get describedByIds() {
    const element = this._elementRef.nativeElement;
    const existingDescribedBy = element.getAttribute("aria-describedby");
    return existingDescribedBy?.split(" ") || [];
  }
  setDescribedByIds(ids) {
    const element = this._elementRef.nativeElement;
    if (ids.length) {
      element.setAttribute("aria-describedby", ids.join(" "));
    } else {
      element.removeAttribute("aria-describedby");
    }
  }
  _isSeparatorKey(event) {
    if (!this.separatorKeyCodes) {
      return false;
    }
    for (const key of this.separatorKeyCodes) {
      let keyCode;
      let modifiers;
      if (typeof key === "number") {
        keyCode = key;
        modifiers = null;
      } else {
        keyCode = key.keyCode;
        modifiers = key.modifiers;
      }
      const modifiersMatch = !modifiers?.length ? !hasModifierKey(event) : hasModifierKey(event, ...modifiers);
      if (keyCode === event.keyCode && modifiersMatch) {
        return true;
      }
    }
    return false;
  }
  _getReadonlyAttribute() {
    return this.readonly || this.disabled && this.disabledInteractive ? "true" : null;
  }
  static \u0275fac = function MatChipInput_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatChipInput)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatChipInput,
    selectors: [["input", "matChipInputFor", ""]],
    hostAttrs: [1, "mat-mdc-chip-input", "mat-mdc-input-element", "mdc-text-field__input", "mat-input-element"],
    hostVars: 8,
    hostBindings: function MatChipInput_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function MatChipInput_keydown_HostBindingHandler($event) {
          return ctx._keydown($event);
        })("blur", function MatChipInput_blur_HostBindingHandler() {
          return ctx._blur();
        })("focus", function MatChipInput_focus_HostBindingHandler() {
          return ctx._focus();
        })("input", function MatChipInput_input_HostBindingHandler() {
          return ctx._onInput();
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
        \u0275\u0275attribute("disabled", ctx.disabled && !ctx.disabledInteractive ? "" : null)("placeholder", ctx.placeholder || null)("aria-invalid", ctx._chipGrid && ctx._chipGrid.ngControl ? ctx._chipGrid.ngControl.invalid : null)("aria-required", ctx._chipGrid && ctx._chipGrid.required || null)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null)("readonly", ctx._getReadonlyAttribute())("required", ctx._chipGrid && ctx._chipGrid.required || null);
      }
    },
    inputs: {
      chipGrid: [0, "matChipInputFor", "chipGrid"],
      addOnBlur: [2, "matChipInputAddOnBlur", "addOnBlur", booleanAttribute],
      separatorKeyCodes: [0, "matChipInputSeparatorKeyCodes", "separatorKeyCodes"],
      placeholder: "placeholder",
      id: "id",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      readonly: [2, "readonly", "readonly", booleanAttribute],
      disabledInteractive: [2, "matChipInputDisabledInteractive", "disabledInteractive", booleanAttribute]
    },
    outputs: {
      chipEnd: "matChipInputTokenEnd"
    },
    exportAs: ["matChipInput", "matChipInputFor"],
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipInput, [{
    type: Directive,
    args: [{
      selector: "input[matChipInputFor]",
      exportAs: "matChipInput, matChipInputFor",
      host: {
        "class": "mat-mdc-chip-input mat-mdc-input-element mdc-text-field__input mat-input-element",
        "(keydown)": "_keydown($event)",
        "(blur)": "_blur()",
        "(focus)": "_focus()",
        "(input)": "_onInput()",
        "[id]": "id",
        "[attr.disabled]": 'disabled && !disabledInteractive ? "" : null',
        "[attr.placeholder]": "placeholder || null",
        "[attr.aria-invalid]": "_chipGrid && _chipGrid.ngControl ? _chipGrid.ngControl.invalid : null",
        "[attr.aria-required]": "_chipGrid && _chipGrid.required || null",
        "[attr.aria-disabled]": 'disabled && disabledInteractive ? "true" : null',
        "[attr.readonly]": "_getReadonlyAttribute()",
        "[attr.required]": "_chipGrid && _chipGrid.required || null"
      }
    }]
  }], () => [], {
    chipGrid: [{
      type: Input,
      args: ["matChipInputFor"]
    }],
    addOnBlur: [{
      type: Input,
      args: [{
        alias: "matChipInputAddOnBlur",
        transform: booleanAttribute
      }]
    }],
    separatorKeyCodes: [{
      type: Input,
      args: ["matChipInputSeparatorKeyCodes"]
    }],
    chipEnd: [{
      type: Output,
      args: ["matChipInputTokenEnd"]
    }],
    placeholder: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        alias: "matChipInputDisabledInteractive",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CHIP_DECLARATIONS = [MatChip, MatChipAvatar, MatChipEdit, MatChipEditInput, MatChipGrid, MatChipInput, MatChipListbox, MatChipOption, MatChipRemove, MatChipRow, MatChipSet, MatChipTrailingIcon];
var MatChipsModule = class _MatChipsModule {
  static \u0275fac = function MatChipsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatChipsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatChipsModule,
    imports: [MatRippleModule, MatChipAction, MatChip, MatChipAvatar, MatChipEdit, MatChipEditInput, MatChipGrid, MatChipInput, MatChipListbox, MatChipOption, MatChipRemove, MatChipRow, MatChipSet, MatChipTrailingIcon],
    exports: [BidiModule, MatChip, MatChipAvatar, MatChipEdit, MatChipEditInput, MatChipGrid, MatChipInput, MatChipListbox, MatChipOption, MatChipRemove, MatChipRow, MatChipSet, MatChipTrailingIcon]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [ErrorStateMatcher, {
      provide: MAT_CHIPS_DEFAULT_OPTIONS,
      useValue: {
        separatorKeyCodes: [ENTER]
      }
    }],
    imports: [MatRippleModule, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipsModule, [{
    type: NgModule,
    args: [{
      imports: [MatRippleModule, MatChipAction, CHIP_DECLARATIONS],
      exports: [BidiModule, CHIP_DECLARATIONS],
      providers: [ErrorStateMatcher, {
        provide: MAT_CHIPS_DEFAULT_OPTIONS,
        useValue: {
          separatorKeyCodes: [ENTER]
        }
      }]
    }]
  }], null, null);
})();

export {
  MatChipRemove,
  MatChipRow,
  MatChipGrid,
  MatChipInput,
  MatChipsModule
};
//# sourceMappingURL=chunk-NOJKG6DO.js.map
