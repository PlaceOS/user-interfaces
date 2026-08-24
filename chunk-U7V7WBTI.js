import {
  searchGuests,
  searchStaff
} from "./chunk-S6Q7RPDG.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-RP6LBMYW.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule,
  UserAvatarComponent
} from "./chunk-FSRZYXHY.js";
import {
  AsyncHandler,
  CommonModule,
  Component,
  DefaultValueAccessor,
  Directive,
  EMPTY_USER,
  ElementRef,
  Fa,
  FormsModule,
  IconComponent,
  Input,
  It,
  La,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatOption,
  MatPrefix,
  MatRipple,
  MatRippleModule,
  MatSuffix,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  Output,
  Overlay,
  TranslatePipe,
  User,
  ViewChild,
  computed,
  debounced,
  effect,
  forwardRef,
  inject,
  input,
  model,
  resource,
  setClassMetadata,
  settingSignal,
  signal,
  viewChild,
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
  ɵɵdefineDirective,
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
  ɵɵqueryAdvance,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-337ZWGBM.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/components/src/lib/virtual-keyboard.component.ts
var DEFAULT_KEYS = [
  "0123456789".split(""),
  "qwertyuiop_".split(""),
  "asdfghjkl+".split(""),
  "zxcvbnm@.-".split(""),
  ["{caps}", "{space}", "{backspace}"]
];
var FADE_DURATION = 160;
var VirtualKeyboardComponent = class _VirtualKeyboardComponent extends AsyncHandler {
  static {
    this._enabled = false;
  }
  static {
    this._instances = /* @__PURE__ */ new Set();
  }
  /** Whether virtual keyboard should activate */
  static get enabled() {
    return this._enabled;
  }
  static set enabled(value) {
    this._enabled = value;
    for (const instance of this._instances) {
      instance.syncNativeKeyboardState();
    }
  }
  onFocus() {
    this.syncNativeKeyboardState();
    if (!_VirtualKeyboardComponent.enabled)
      return;
    this.open();
    this.clearTimeout("blur-sm");
  }
  onBlur() {
    this.timeout("blur-sm", () => this.close());
  }
  constructor() {
    super();
    this._element = inject(ElementRef);
    this._overlay = inject(Overlay);
    this.keyset = model(
      DEFAULT_KEYS,
      ...ngDevMode ? [{ debugName: "keyset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.state = signal(
      "normal",
      ...ngDevMode ? [{ debugName: "state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._overlay_ref = null;
    this._keyboard_el = null;
    this._position = "bottom";
    this._native_keyboard_prevented = false;
    this._original_readonly = false;
    this._original_inputmode = null;
    _VirtualKeyboardComponent._instances.add(this);
    this.syncNativeKeyboardState();
    effect(() => {
      const keys = this.keyset();
      if (!keys)
        this.keyset.set(DEFAULT_KEYS);
    });
  }
  ngOnDestroy() {
    _VirtualKeyboardComponent._instances.delete(this);
    this.restoreNativeKeyboardState();
    super.ngOnDestroy();
    this.close(true);
  }
  focusInput() {
    this._element?.nativeElement?.blur();
    this._element?.nativeElement?.focus();
  }
  open() {
    this.clearTimeout("close-animation");
    if (this._overlay_ref) {
      this._overlay_ref.hostElement.style.pointerEvents = "auto";
      if (this._keyboard_el)
        this._keyboard_el.style.opacity = "1";
      return;
    }
    this._position = this.preferredPosition();
    const position_strategy = this._overlay.position().global().centerHorizontally();
    if (this._position === "top") {
      position_strategy.top("0");
    } else {
      position_strategy.bottom("0");
    }
    this._overlay_ref = this._overlay.create({
      width: "100vw",
      positionStrategy: position_strategy
    });
    this._overlay_ref.hostElement.style.display = "block";
    this._overlay_ref.hostElement.style.pointerEvents = "auto";
    this.applyOverlayPosition();
    this.renderKeyboard();
  }
  close(immediate = false) {
    if (!this._overlay_ref)
      return;
    this.clearTimeout("close-animation");
    if (immediate || !this._keyboard_el) {
      this._overlay_ref.dispose();
      this._overlay_ref = null;
      this._keyboard_el = null;
      return;
    }
    this._overlay_ref.hostElement.style.pointerEvents = "none";
    this._keyboard_el.style.opacity = "0";
    this.timeout("close-animation", () => {
      this._overlay_ref?.dispose();
      this._overlay_ref = null;
      this._keyboard_el = null;
    }, FADE_DURATION);
  }
  handleKeyPress(key) {
    const input_el = this._element.nativeElement;
    const str = input_el.value || "";
    let cursor_pos = input_el.selectionStart ?? str.length;
    switch (key.toLowerCase()) {
      case "{caps}":
        this.state.set(this.state() === "caps" ? "normal" : "caps");
        break;
      case "{shift}":
        this.state.set(this.state() === "shift" ? "normal" : "shift");
        break;
      case "{backspace}":
        input_el.value = `${str.substr(0, cursor_pos - 1)}${str.substr(cursor_pos, str.length)}`;
        cursor_pos = Math.max(0, cursor_pos - 1);
        break;
      case "{space}":
        input_el.value = `${str.substr(0, cursor_pos)}${" "}${str.substr(cursor_pos, str.length)}`;
        cursor_pos += 1;
        break;
      default:
        if (this.state() === "shift")
          this.state.set("normal");
        input_el.value = `${str.substr(0, cursor_pos)}${key}${str.substr(cursor_pos, str.length)}`;
        cursor_pos += 1;
    }
    input_el.dispatchEvent(new InputEvent("input"));
    this.updateKeyState();
    this.timeout("focus", () => {
      this.focusInput();
      try {
        input_el.setSelectionRange(cursor_pos, cursor_pos);
      } catch {
      }
    }, 50);
  }
  updateKeyState() {
    this.keyset.set(this.keyset().map((_) => _.map((k) => k.length > 1 ? k : k[this.state() !== "normal" ? "toUpperCase" : "toLowerCase"]())));
    if (this._overlay_ref)
      this.renderKeyboard();
  }
  syncNativeKeyboardState() {
    if (_VirtualKeyboardComponent.enabled) {
      this.preventNativeKeyboard();
    } else {
      this.restoreNativeKeyboardState();
    }
  }
  reposition() {
    if (!this._overlay_ref)
      return;
    const position = this.preferredPosition();
    if (position === this._position)
      return;
    this.close(true);
    this.open();
  }
  renderKeyboard() {
    if (!this._overlay_ref)
      return;
    const overlay_el = this._overlay_ref.overlayElement;
    const should_animate = !this._keyboard_el;
    this.applyOverlayPosition();
    overlay_el.replaceChildren();
    const keyboard_el = document.createElement("div");
    keyboard_el.setAttribute("keyboard-view", "");
    keyboard_el.className = "border-base-200 bg-base-200 flex w-screen flex-col gap-[16px] p-[8px]";
    keyboard_el.style.background = "var(--base-200)";
    keyboard_el.style.borderBottom = this._position === "top" ? "1px solid var(--base-200)" : "";
    keyboard_el.style.borderTop = this._position === "bottom" ? "1px solid var(--base-200)" : "";
    keyboard_el.style.display = "flex";
    keyboard_el.style.flexDirection = "column";
    keyboard_el.style.gap = "16px";
    keyboard_el.style.opacity = should_animate ? "0" : "1";
    keyboard_el.style.padding = "8px";
    keyboard_el.style.transition = `opacity ${FADE_DURATION}ms ease`;
    keyboard_el.style.width = "100vw";
    for (const row of this.keyset()) {
      const row_el = document.createElement("div");
      row_el.setAttribute("row", "");
      row_el.className = "flex items-center justify-center gap-[8px]";
      row_el.style.alignItems = "center";
      row_el.style.display = "flex";
      row_el.style.gap = "8px";
      row_el.style.justifyContent = "center";
      for (const key of row) {
        row_el.appendChild(this.renderKey(key));
      }
      keyboard_el.appendChild(row_el);
    }
    overlay_el.appendChild(keyboard_el);
    this._keyboard_el = keyboard_el;
    if (should_animate) {
      requestAnimationFrame(() => {
        if (this._keyboard_el === keyboard_el) {
          keyboard_el.style.opacity = "1";
        }
      });
    }
  }
  renderKey(key) {
    const button_el = document.createElement("button");
    button_el.setAttribute("key", key);
    button_el.setAttribute("tabindex", "0");
    button_el.type = "button";
    button_el.className = "border-base-200 bg-base-100 relative cursor-pointer rounded-xl border p-[8px]";
    button_el.style.height = "56px";
    button_el.style.width = key[0] === "{" && key.length > 1 ? "160px" : "64px";
    button_el.style.transition = "box-shadow 200ms, top 200ms";
    button_el.style.boxShadow = "0 4px 0 0.04px rgba(0, 0, 0, 0.1)";
    if (key === "{space}") {
      button_el.style.flex = "1";
      button_el.style.minWidth = "160px";
      button_el.style.maxWidth = "400px";
    }
    button_el.textContent = this.keyLabel(key);
    button_el.addEventListener("mousedown", (event) => event.preventDefault());
    button_el.addEventListener("focus", () => this.focusInput());
    button_el.addEventListener("click", () => this.handleKeyPress(key));
    if (key === "{caps}") {
      const dot_el = document.createElement("div");
      dot_el.setAttribute("dot", "");
      dot_el.className = `absolute top-[8px] right-[8px] h-[8px] w-[8px] rounded-full ${this.state() !== "normal" ? "bg-success" : "bg-base-200"}`;
      button_el.appendChild(dot_el);
    }
    return button_el;
  }
  keyLabel(key) {
    return key === "{space}" ? "Space" : key === "{caps}" ? "Caps Lock" : key === "{backspace}" ? "Backspace" : key;
  }
  preventNativeKeyboard() {
    const input_el = this._element.nativeElement;
    if (!this._native_keyboard_prevented) {
      this._original_readonly = input_el.readOnly;
      this._original_inputmode = input_el.getAttribute("inputmode");
      this._native_keyboard_prevented = true;
    }
    input_el.readOnly = true;
    input_el.setAttribute("readonly", "");
    input_el.setAttribute("inputmode", "none");
  }
  restoreNativeKeyboardState() {
    if (!this._native_keyboard_prevented)
      return;
    const input_el = this._element.nativeElement;
    input_el.readOnly = this._original_readonly;
    if (this._original_readonly) {
      input_el.setAttribute("readonly", "");
    } else {
      input_el.removeAttribute("readonly");
    }
    if (this._original_inputmode === null) {
      input_el.removeAttribute("inputmode");
    } else {
      input_el.setAttribute("inputmode", this._original_inputmode);
    }
    this._native_keyboard_prevented = false;
  }
  applyOverlayPosition() {
    if (!this._overlay_ref)
      return;
    const overlay_el = this._overlay_ref.overlayElement;
    overlay_el.style.position = "fixed";
    overlay_el.style.left = "0";
    overlay_el.style.right = "0";
    overlay_el.style.width = "100vw";
    overlay_el.style.top = this._position === "top" ? "0" : "";
    overlay_el.style.bottom = this._position === "bottom" ? "0" : "";
  }
  preferredPosition() {
    const box = this._element.nativeElement.getBoundingClientRect();
    const space_above = box.top;
    const space_below = window.innerHeight - box.bottom;
    return space_below >= space_above ? "bottom" : "top";
  }
  static {
    this.\u0275fac = function VirtualKeyboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VirtualKeyboardComponent)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _VirtualKeyboardComponent, selectors: [["input", "keyboard", ""], ["textarea", "keyboard", ""]], hostBindings: function VirtualKeyboardComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("pointerdown", function VirtualKeyboardComponent_pointerdown_HostBindingHandler() {
          return ctx.syncNativeKeyboardState();
        })("focus", function VirtualKeyboardComponent_focus_HostBindingHandler() {
          return ctx.onFocus();
        })("blur", function VirtualKeyboardComponent_blur_HostBindingHandler() {
          return ctx.onBlur();
        })("resize", function VirtualKeyboardComponent_resize_HostBindingHandler() {
          return ctx.reposition();
        }, \u0275\u0275resolveWindow);
      }
    }, inputs: { keyset: [1, "keyset"] }, outputs: { keyset: "keysetChange" }, features: [\u0275\u0275InheritDefinitionFeature] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VirtualKeyboardComponent, [{
    type: Directive,
    args: [{
      selector: "input[keyboard],textarea[keyboard]",
      host: {
        "(pointerdown)": "syncNativeKeyboardState()",
        "(focus)": "onFocus()",
        "(blur)": "onBlur()",
        "(window:resize)": "reposition()"
      }
    }]
  }], () => [], { keyset: [{ type: Input, args: [{ isSignal: true, alias: "keyset", required: false }] }, { type: Output, args: ["keysetChange"] }] });
})();

// libs/form-fields/src/lib/user-search-field.component.ts
var _c0 = ["input"];
var _c1 = (a0) => ({ name: a0 });
function UserSearchFieldComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "a-user-avatar", 5);
  }
  if (rf & 2) {
    \u0275\u0275property("user", ctx);
  }
}
function UserSearchFieldComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 6);
    \u0275\u0275text(1, "search");
    \u0275\u0275elementEnd();
  }
}
function UserSearchFieldComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 8);
  }
}
function UserSearchFieldComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10)(1, "div", 14);
    \u0275\u0275element(2, "a-user-avatar", 15);
    \u0275\u0275elementStart(3, "div", 16)(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    \u0275\u0275property("value", user_r1);
    \u0275\u0275advance(2);
    \u0275\u0275property("user", user_r1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r1.email, " ");
  }
}
function UserSearchFieldComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 11)(1, "div", 18);
    \u0275\u0275listener("mousedown", function UserSearchFieldComponent_Conditional_14_Template_div_mousedown_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.stopEvent($event));
    })("touchstart", function UserSearchFieldComponent_Conditional_14_Template_div_touchstart_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.stopEvent($event));
    })("click", function UserSearchFieldComponent_Conditional_14_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      const term_r4 = \u0275\u0275readContextLet(11);
      ctx_r2.setExternalValue(term_r4);
      return \u0275\u0275resetView(ctx_r2.stopEvent($event));
    });
    \u0275\u0275elementStart(2, "div", 19);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const term_r4 = \u0275\u0275readContextLet(11);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 1, "FORM.USER_ADD_EXTERNAL", \u0275\u0275pureFunction1(4, _c1, term_r4)), " ");
  }
}
function UserSearchFieldComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 11)(1, "div", 20);
    \u0275\u0275listener("mousedown", function UserSearchFieldComponent_Conditional_15_Template_div_mousedown_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.stopEvent($event));
    })("touchstart", function UserSearchFieldComponent_Conditional_15_Template_div_touchstart_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.stopEvent($event));
    })("click", function UserSearchFieldComponent_Conditional_15_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      const term_r4 = \u0275\u0275readContextLet(11);
      ctx_r2.setValueFromEmail(term_r4);
      return \u0275\u0275resetView(ctx_r2.stopEvent($event));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const term_r4 = \u0275\u0275readContextLet(11);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "FORM.USER_SET_EXTERNAL", \u0275\u0275pureFunction1(4, _c1, term_r4)), " ");
  }
}
function UserSearchFieldComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 21);
    \u0275\u0275listener("click", function UserSearchFieldComponent_Conditional_16_Template_mat_option_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.empty_fn()());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const term_r4 = \u0275\u0275readContextLet(11);
    \u0275\u0275property("disabled", !ctx_r2.empty_fn());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 3, term_r4 ? "FORM.USER_EMPTY" : ""), " ", ctx_r2.error(), " ");
  }
}
function UserSearchFieldComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function UserSearchFieldComponent_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearUser());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "person_cancel");
    \u0275\u0275elementEnd()();
  }
}
var UserSearchFieldComponent = class _UserSearchFieldComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this.autocomplete = input(
      ...ngDevMode ? [void 0, { debugName: "autocomplete" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.use_basic_search = settingSignal("basic_user_search", true);
    this.search_term = signal(
      "",
      ...ngDevMode ? [{ debugName: "search_term" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = computed(
      () => this._search.isLoading(),
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.user = signal(
      null,
      ...ngDevMode ? [{ debugName: "user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_user = computed(
      () => {
        const term = this.search_term();
        return term && typeof term !== "string" && term.email !== EMPTY_USER.email ? term : null;
      },
      ...ngDevMode ? [{ debugName: "selected_user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disabled = model(
      void 0,
      ...ngDevMode ? [{ debugName: "disabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.placeholder = input(
      "FORM.USER_SEARCH",
      ...ngDevMode ? [{ debugName: "placeholder" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = input(
      void 0,
      ...ngDevMode ? [{ debugName: "options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.guests = input(
      void 0,
      ...ngDevMode ? [{ debugName: "guests" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.guests_only = input(
      false,
      ...ngDevMode ? [{ debugName: "guests_only" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disable_search = input(
      false,
      ...ngDevMode ? [{ debugName: "disable_search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.clear = input(
      false,
      ...ngDevMode ? [{ debugName: "clear" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.error = input(
      "",
      ...ngDevMode ? [{ debugName: "error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.validate = input(
      void 0,
      ...ngDevMode ? [{ debugName: "validate" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.empty_fn = input(
      void 0,
      ...ngDevMode ? [{ debugName: "empty_fn" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allow_externals = input(
      false,
      ...ngDevMode ? [{ debugName: "allow_externals" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filter = input(
      void 0,
      ...ngDevMode ? [{ debugName: "filter" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.query_fn = input(
      async (q) => {
        const guest_query = () => searchGuests(q).catch(() => []);
        if (this.guests_only())
          return guest_query();
        const staff = this.use_basic_search() ? await Fa({
          q,
          authority_id: It()?.id,
          fields: ["id", "name", "email"].join(",")
        }).then((_) => _.data.map((u) => new User(u))).catch(() => []) : await searchStaff(q).catch(() => []);
        if (!this.guests())
          return staff;
        return [...staff, ...await guest_query()];
      },
      ...ngDevMode ? [{ debugName: "query_fn" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._debounced_term = debounced(this.search_term, 300);
    this._search = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_search" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({ term: this._debounced_term.value() }),
      loader: async ({ params: { term } }) => {
        if (term && typeof term !== "string") {
          const user = term;
          return user.email === EMPTY_USER.email ? [] : [user];
        }
        if (term === this.user()?.name)
          return [this.user()];
        if (this.disable_search())
          return [];
        const s = `${term || ""}`.toLowerCase();
        if (this.options()?.length) {
          return this.options().filter((_) => _.email !== EMPTY_USER.email && (_.name.toLowerCase().includes(s) || _.email.toLowerCase().includes(s)));
        }
        if (s.length <= 2)
          return [];
        const list = await this.query_fn()(s).catch(() => []);
        return list.filter((_) => !!_ && _.email !== EMPTY_USER.email).sort((a, b) => (a.name?.toLowerCase() || "").localeCompare(b.name?.toLowerCase()));
      }
    }));
    this.search_results = computed(
      () => this._search.value() ?? [],
      ...ngDevMode ? [{ debugName: "search_results" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (s) => this.disabled.set(s);
    this._input_el = viewChild("input", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_input_el" } : (
      /* istanbul ignore next */
      {}
    )), { read: ElementRef }));
    this._autocomplete_trigger = viewChild(
      MatAutocompleteTrigger,
      ...ngDevMode ? [{ debugName: "_autocomplete_trigger" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value, email) {
    const value = typeof new_value === "string" ? new User({ name: new_value, email }) : new_value;
    this._onChange ? this._onChange(value) : null;
    this._onTouch ? this._onTouch(value) : null;
    this.user.set(value);
    this.search_term.set(value);
    if (typeof new_value !== "string" && !this.use_basic_search() && (value?.id || value?.email)) {
      La(value.email || value.id).then((details) => {
        if (!details)
          return;
        const updated = new User(__spreadValues(__spreadValues({}, value), new User(details)));
        this._onChange ? this._onChange(updated) : null;
        this.user.set(updated);
        this.search_term.set(updated);
      }).catch(() => value);
    }
  }
  setExternalValue(name) {
    this.setValue(name);
    this.dismissAutocomplete();
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.user.set(value);
    this.resetTerm();
  }
  displayFn(user) {
    return user && user.email !== EMPTY_USER.email && user.name ? user.name : "";
  }
  stopEvent(event) {
    event.stopPropagation();
    event.preventDefault();
  }
  /** Check if a string is a valid email address */
  isValidEmail(value) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  }
  /**
   * Set the value from a typed email address
   * @param email Email address to create a user from
   */
  setValueFromEmail(email) {
    const name = email.split("@")[0];
    this.setValue(name, email);
    this.dismissAutocomplete();
  }
  clearUser() {
    this.user.set(null);
    this._onChange ? this._onChange(null) : null;
    this._onTouch ? this._onTouch(null) : null;
    this.resetTerm();
  }
  blurInput() {
    this._input_el()?.nativeElement?.blur();
  }
  selectInputText() {
    setTimeout(() => this._input_el()?.nativeElement?.select());
  }
  dismissAutocomplete() {
    setTimeout(() => {
      this._autocomplete_trigger()?.closePanel();
      this.blurInput();
    });
  }
  resetTerm() {
    this.search_term.set(this.user());
    const input2 = this._input_el()?.nativeElement;
    if (input2)
      input2.value = this.displayFn(this.user());
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275UserSearchFieldComponent_BaseFactory;
      return function UserSearchFieldComponent_Factory(__ngFactoryType__) {
        return (\u0275UserSearchFieldComponent_BaseFactory || (\u0275UserSearchFieldComponent_BaseFactory = \u0275\u0275getInheritedFactory(_UserSearchFieldComponent)))(__ngFactoryType__ || _UserSearchFieldComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserSearchFieldComponent, selectors: [["a-user-search-field"]], viewQuery: function UserSearchFieldComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._input_el, _c0, 5, ElementRef)(ctx._autocomplete_trigger, MatAutocompleteTrigger, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    }, inputs: { autocomplete: [1, "autocomplete"], disabled: [1, "disabled"], placeholder: [1, "placeholder"], options: [1, "options"], guests: [1, "guests"], guests_only: [1, "guests_only"], disable_search: [1, "disable_search"], clear: [1, "clear"], error: [1, "error"], validate: [1, "validate"], empty_fn: [1, "empty_fn"], allow_externals: [1, "allow_externals"], filter: [1, "filter"], query_fn: [1, "query_fn"] }, outputs: { disabled: "disabledChange" }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _UserSearchFieldComponent),
        multi: true
      }
    ]), \u0275\u0275InheritDefinitionFeature], decls: 20, vars: 18, consts: [["input", ""], ["auto", "matAutocomplete"], [1, "flex", "w-full", "space-x-2"], ["appearance", "outline", 1, "w-1/2", "flex-1"], ["matPrefix", "", 1, "mr-2", "-ml-1", "flex", "h-8", "w-8", "items-center", "justify-center"], [3, "user"], [1, "block", "flex", "w-6", "items-center", "justify-center", "text-2xl"], ["keyboard", "", "matInput", "", 3, "ngModelChange", "focus", "blur", "ngModel", "disabled", "matAutocomplete", "placeholder"], ["matSuffix", "", "diameter", "24"], [3, "optionSelected", "displayWith"], [3, "value"], [1, "pointer-events-none", "relative"], [3, "disabled"], ["icon", "", "matRipple", "", 1, "border-secondary", "text-secondary", "h-12", "w-12", "rounded-sm", "border"], [1, "flex", "items-center", "space-x-2"], [1, "-ml-2", 3, "user"], [1, "leading-tight"], [1, "text-xs", "opacity-30"], [1, "pointer-events-auto", "absolute", "inset-0", "px-4", 3, "mousedown", "touchstart", "click"], [1, "pointer-events-none"], [1, "pointer-events-auto", "absolute", "inset-0", "flex", "items-center", "px-4", 3, "mousedown", "touchstart", "click"], [3, "click", "disabled"], ["icon", "", "matRipple", "", 1, "border-secondary", "text-secondary", "h-12", "w-12", "rounded-sm", "border", 3, "click"]], template: function UserSearchFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "mat-form-field", 3)(2, "div", 4);
        \u0275\u0275conditionalCreate(3, UserSearchFieldComponent_Conditional_3_Template, 1, 1, "a-user-avatar", 5)(4, UserSearchFieldComponent_Conditional_4_Template, 2, 0, "icon", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "input", 7, 0);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275listener("ngModelChange", function UserSearchFieldComponent_Template_input_ngModelChange_5_listener($event) {
          return ctx.search_term.set($event);
        })("focus", function UserSearchFieldComponent_Template_input_focus_5_listener() {
          return ctx.selectInputText();
        })("blur", function UserSearchFieldComponent_Template_input_blur_5_listener() {
          return ctx.resetTerm();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(8, UserSearchFieldComponent_Conditional_8_Template, 1, 0, "mat-spinner", 8);
        \u0275\u0275elementStart(9, "mat-autocomplete", 9, 1);
        \u0275\u0275listener("optionSelected", function UserSearchFieldComponent_Template_mat_autocomplete_optionSelected_9_listener($event) {
          return ctx.setValue($event.option.value);
        });
        \u0275\u0275declareLet(11);
        \u0275\u0275repeaterCreate(12, UserSearchFieldComponent_For_13_Template, 8, 4, "mat-option", 10, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275conditionalCreate(14, UserSearchFieldComponent_Conditional_14_Template, 5, 6, "mat-option", 11);
        \u0275\u0275conditionalCreate(15, UserSearchFieldComponent_Conditional_15_Template, 4, 6, "mat-option", 11);
        \u0275\u0275conditionalCreate(16, UserSearchFieldComponent_Conditional_16_Template, 3, 5, "mat-option", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "mat-error");
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(19, UserSearchFieldComponent_Conditional_19_Template, 3, 0, "button", 13);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_3_0;
        const auto_r8 = \u0275\u0275reference(10);
        \u0275\u0275advance();
        \u0275\u0275classProp("no-subscript", !ctx.error() && !ctx.selected_user());
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_3_0 = ctx.selected_user()) ? 3 : 4, tmp_3_0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.search_term())("disabled", ctx.disabled())("matAutocomplete", auto_r8)("placeholder", \u0275\u0275pipeBind1(7, 15, ctx.placeholder()));
        \u0275\u0275attribute("autocomplete", ctx.autocomplete());
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading() ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("displayWith", ctx.displayFn);
        const user_list_r9 = ctx.search_results();
        \u0275\u0275advance(2);
        const term_r10 = \u0275\u0275storeLet(ctx.search_term());
        \u0275\u0275advance();
        \u0275\u0275repeater(user_list_r9);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(term_r10 && ctx.validate() && ctx.validate()(term_r10) ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(term_r10 && ctx.allow_externals() && ctx.isValidEmail(term_r10) && !(ctx.validate() && ctx.validate()(term_r10)) ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!user_list_r9?.length && (ctx.search_term() || ctx.error()) && !ctx.disable_search() ? 16 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.error());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.clear() ? 19 : -1);
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatPrefix,
      MatSuffix,
      MatInputModule,
      MatInput,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatAutocompleteModule,
      MatAutocomplete,
      MatOption,
      MatAutocompleteTrigger,
      MatRippleModule,
      MatRipple,
      IconComponent,
      UserAvatarComponent,
      VirtualKeyboardComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\nicon[_ngcontent-%COMP%] {\n  top: 0.15em;\n  left: -0.15em;\n}\n/*# sourceMappingURL=user-search-field.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserSearchFieldComponent, [{
    type: Component,
    args: [{ selector: "a-user-search-field", template: `
        <div class="flex w-full space-x-2">
            <mat-form-field
                appearance="outline"
                class="w-1/2 flex-1"
                [class.no-subscript]="!error() && !selected_user()"
            >
                <div
                    matPrefix
                    class="mr-2 -ml-1 flex h-8 w-8 items-center justify-center"
                >
                    @if (selected_user(); as user) {
                        <a-user-avatar [user]="user" />
                    } @else {
                        <icon
                            class="block flex w-6 items-center justify-center text-2xl"
                            >search</icon
                        >
                    }
                </div>
                <input
                    #input
                    keyboard
                    matInput
                    [attr.autocomplete]="autocomplete()"
                    [ngModel]="search_term()"
                    (ngModelChange)="search_term.set($event)"
                    [disabled]="disabled()"
                    [matAutocomplete]="auto"
                    [placeholder]="placeholder() | translate"
                    (focus)="selectInputText()"
                    (blur)="resetTerm()"
                />
                @if (loading()) {
                    <mat-spinner matSuffix diameter="24"></mat-spinner>
                }
                <mat-autocomplete
                    #auto="matAutocomplete"
                    [displayWith]="displayFn"
                    (optionSelected)="setValue($event.option.value)"
                >
                    @let user_list = search_results();
                    @let term = search_term();
                    @for (user of user_list; track $index) {
                        <mat-option [value]="user">
                            <div class="flex items-center space-x-2">
                                <a-user-avatar class="-ml-2" [user]="user" />
                                <div class="leading-tight">
                                    <div>{{ user.name }}</div>
                                    <div class="text-xs opacity-30">
                                        {{ user.email }}
                                    </div>
                                </div>
                            </div>
                        </mat-option>
                    }
                    @if (term && validate() && validate()(term)) {
                        <mat-option class="pointer-events-none relative">
                            <div
                                class="pointer-events-auto absolute inset-0 px-4"
                                (mousedown)="stopEvent($event)"
                                (touchstart)="stopEvent($event)"
                                (click)="
                                    setExternalValue(term); stopEvent($event)
                                "
                            >
                                <div class="pointer-events-none">
                                    {{
                                        'FORM.USER_ADD_EXTERNAL'
                                            | translate: { name: term }
                                    }}
                                </div>
                            </div>
                        </mat-option>
                    }
                    @if (
                        term &&
                        allow_externals() &&
                        isValidEmail(term) &&
                        !(validate() && validate()(term))
                    ) {
                        <mat-option class="pointer-events-none relative">
                            <div
                                class="pointer-events-auto absolute inset-0 flex items-center px-4"
                                (mousedown)="stopEvent($event)"
                                (touchstart)="stopEvent($event)"
                                (click)="
                                    setValueFromEmail(term); stopEvent($event)
                                "
                            >
                                {{
                                    'FORM.USER_SET_EXTERNAL'
                                        | translate: { name: term }
                                }}
                            </div>
                        </mat-option>
                    }
                    @if (
                        !user_list?.length &&
                        (search_term() || error()) &&
                        !disable_search()
                    ) {
                        <mat-option
                            [disabled]="!empty_fn()"
                            (click)="empty_fn()()"
                        >
                            {{ (term ? 'FORM.USER_EMPTY' : '') | translate }}
                            {{ error() }}
                        </mat-option>
                    }
                </mat-autocomplete>
                <mat-error>{{ error() }}</mat-error>
            </mat-form-field>
            @if (clear()) {
                <button
                    icon
                    matRipple
                    class="border-secondary text-secondary h-12 w-12 rounded-sm border"
                    (click)="clearUser()"
                >
                    <icon>person_cancel</icon>
                </button>
            }
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => UserSearchFieldComponent),
        multi: true
      }
    ], imports: [
      CommonModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatAutocompleteModule,
      MatRippleModule,
      IconComponent,
      TranslatePipe,
      UserAvatarComponent,
      VirtualKeyboardComponent
    ], styles: ["/* angular:styles/component:css;d84628be6394a4ab204c469dc548d2d04b7c619d7a49b10690a47d4a374a3d83;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/user-search-field.component.ts */\n:host {\n  display: block;\n}\nicon {\n  top: 0.15em;\n  left: -0.15em;\n}\n/*# sourceMappingURL=user-search-field.component.css.map */\n"] }]
  }], null, { autocomplete: [{ type: Input, args: [{ isSignal: true, alias: "autocomplete", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }, { type: Output, args: ["disabledChange"] }], placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false }] }], guests: [{ type: Input, args: [{ isSignal: true, alias: "guests", required: false }] }], guests_only: [{ type: Input, args: [{ isSignal: true, alias: "guests_only", required: false }] }], disable_search: [{ type: Input, args: [{ isSignal: true, alias: "disable_search", required: false }] }], clear: [{ type: Input, args: [{ isSignal: true, alias: "clear", required: false }] }], error: [{ type: Input, args: [{ isSignal: true, alias: "error", required: false }] }], validate: [{ type: Input, args: [{ isSignal: true, alias: "validate", required: false }] }], empty_fn: [{ type: Input, args: [{ isSignal: true, alias: "empty_fn", required: false }] }], allow_externals: [{ type: Input, args: [{ isSignal: true, alias: "allow_externals", required: false }] }], filter: [{ type: Input, args: [{ isSignal: true, alias: "filter", required: false }] }], query_fn: [{ type: Input, args: [{ isSignal: true, alias: "query_fn", required: false }] }], _input_el: [{ type: ViewChild, args: ["input", __spreadProps(__spreadValues({}, { read: ElementRef }), { isSignal: true })] }], _autocomplete_trigger: [{ type: ViewChild, args: [forwardRef(() => MatAutocompleteTrigger), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserSearchFieldComponent, { className: "UserSearchFieldComponent", filePath: "libs/form-fields/src/lib/user-search-field.component.ts", lineNumber: 199 });
})();

export {
  UserSearchFieldComponent
};
//# sourceMappingURL=chunk-U7V7WBTI.js.map
