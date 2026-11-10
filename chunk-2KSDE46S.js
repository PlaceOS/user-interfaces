import {
  escapeHtml
} from "./chunk-MBJUEQXP.js";
import {
  TranslatePipe
} from "./chunk-4C74AXN2.js";
import {
  IconComponent
} from "./chunk-5YOUSSU7.js";
import {
  UploadsService,
  provideValueAccessor
} from "./chunk-CA6KQCCW.js";
import {
  AsyncHandler
} from "./chunk-VIHBCWCT.js";
import {
  J,
  et,
  i18n,
  notifyError
} from "./chunk-GAMVBC5P.js";
import {
  Component,
  DomSanitizer,
  Input,
  SecurityContext,
  ViewChild,
  computed,
  inject,
  input,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵqueryAdvance,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-UL33YUHR.js";

// libs/form-fields/src/lib/rich-text-input.component.ts
var _c0 = ["editor"];
function RichTextInputComponent_Conditional_2_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function RichTextInputComponent_Conditional_2_Conditional_55_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.insertImage());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "image");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 20);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("click", function RichTextInputComponent_Conditional_2_Conditional_55_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.insertAttachment());
    });
    \u0275\u0275elementStart(6, "icon");
    \u0275\u0275text(7, "attachment");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "COMMON.INSERT_IMAGE"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 4, "COMMON.ATTACH_FILE"));
  }
}
function RichTextInputComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "select", 5);
    \u0275\u0275listener("change", function RichTextInputComponent_Conditional_2_Template_select_change_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFontFace($event));
    });
    \u0275\u0275elementStart(2, "option", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "option", 7);
    \u0275\u0275text(6, "Arial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 8);
    \u0275\u0275text(8, "Helvetica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 9);
    \u0275\u0275text(10, "Georgia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 10);
    \u0275\u0275text(12, "Times New Roman");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "select", 11);
    \u0275\u0275listener("change", function RichTextInputComponent_Conditional_2_Template_select_change_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFontSize($event));
    });
    \u0275\u0275elementStart(14, "option", 12);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 13);
    \u0275\u0275text(18, "12");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 14);
    \u0275\u0275text(20, "14");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 15);
    \u0275\u0275text(22, "16");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 16);
    \u0275\u0275text(24, "18");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 17);
    \u0275\u0275text(26, "24");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 18);
    \u0275\u0275text(28, "32");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 19);
    \u0275\u0275text(30, "48");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "button", 20);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275listener("click", function RichTextInputComponent_Conditional_2_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleBold());
    });
    \u0275\u0275elementStart(33, "icon");
    \u0275\u0275text(34, "format_bold");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "button", 20);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275listener("click", function RichTextInputComponent_Conditional_2_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleItalic());
    });
    \u0275\u0275elementStart(37, "icon");
    \u0275\u0275text(38, "format_italic");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "button", 20);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275listener("click", function RichTextInputComponent_Conditional_2_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleUnderline());
    });
    \u0275\u0275elementStart(41, "icon");
    \u0275\u0275text(42, "format_underlined");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "button", 20);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275listener("click", function RichTextInputComponent_Conditional_2_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.makeUnorderedList());
    });
    \u0275\u0275elementStart(45, "icon");
    \u0275\u0275text(46, "format_list_bulleted");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "button", 20);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275listener("click", function RichTextInputComponent_Conditional_2_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.makeOrderedList());
    });
    \u0275\u0275elementStart(49, "icon");
    \u0275\u0275text(50, "format_list_numbered");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "button", 20);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275listener("click", function RichTextInputComponent_Conditional_2_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.insertLink());
    });
    \u0275\u0275elementStart(53, "icon");
    \u0275\u0275text(54, "link");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(55, RichTextInputComponent_Conditional_2_Conditional_55_Template, 8, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 39, "FORM.FONT"), " ");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 41, "FORM.FONT_SIZE"), " ");
    \u0275\u0275advance(16);
    \u0275\u0275classProp("border-info", ctx_r1.toolbar_state().bold)("text-info", ctx_r1.toolbar_state().bold);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(32, 43, "COMMON.BOLD"))("aria-pressed", !!ctx_r1.toolbar_state().bold);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-info", ctx_r1.toolbar_state().italic)("text-info", ctx_r1.toolbar_state().italic);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(36, 45, "COMMON.ITALIC"))("aria-pressed", !!ctx_r1.toolbar_state().italic);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-info", ctx_r1.toolbar_state().underline)("text-info", ctx_r1.toolbar_state().underline);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(40, 47, "COMMON.UNDERLINE"))("aria-pressed", !!ctx_r1.toolbar_state().underline);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-info", ctx_r1.toolbar_state().unordered_list)("text-info", ctx_r1.toolbar_state().unordered_list);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(44, 49, "COMMON.BULLETED_LIST"))("aria-pressed", !!ctx_r1.toolbar_state().unordered_list);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-info", ctx_r1.toolbar_state().ordered_list)("text-info", ctx_r1.toolbar_state().ordered_list);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(48, 51, "COMMON.NUMBERED_LIST"))("aria-pressed", !!ctx_r1.toolbar_state().ordered_list);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-info", ctx_r1.toolbar_state().link)("text-info", ctx_r1.toolbar_state().link);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(52, 53, "COMMON.INSERT_LINK"))("aria-pressed", !!ctx_r1.toolbar_state().link);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.images_allowed() ? 55 : -1);
  }
}
var LINK_PROTOCOLS = ["http:", "https:", "mailto:"];
function isEmptyHtml(html) {
  const template = document.createElement("template");
  template.innerHTML = html || "";
  return !template.content.textContent?.trim() && !template.content.querySelector("img");
}
function toLinkUrl(value) {
  const text = value.trim();
  if (!text)
    return null;
  const with_protocol = text.includes("://") || /^mailto:/i.test(text) ? text : `https://${text}`;
  try {
    const url = new URL(with_protocol);
    return LINK_PROTOCOLS.includes(url.protocol) ? url.href : null;
  } catch {
    return null;
  }
}
var RichTextInputComponent = class _RichTextInputComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._uploads = inject(UploadsService);
    this._dom_sanitizer = inject(DomSanitizer);
    this.placeholder = input(
      "",
      ...ngDevMode ? [{ debugName: "placeholder" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.readonly = input(
      false,
      ...ngDevMode ? [{ debugName: "readonly" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.images_allowed = input(
      false,
      ...ngDevMode ? [{ debugName: "images_allowed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disabled = signal(
      false,
      ...ngDevMode ? [{ debugName: "disabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_empty = signal(
      true,
      ...ngDevMode ? [{ debugName: "is_empty" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_readonly = computed(
      () => this.readonly() || this.disabled(),
      ...ngDevMode ? [{ debugName: "is_readonly" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._editor_el = viewChild(
      "editor",
      ...ngDevMode ? [{ debugName: "_editor_el" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._onChange = () => void 0;
    this._onTouch = () => void 0;
    this.toolbar_state = signal(
      {
        bold: false,
        italic: false,
        underline: false,
        unordered_list: false,
        ordered_list: false,
        link: false
      },
      ...ngDevMode ? [{ debugName: "toolbar_state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this._syncValue = () => {
      if (!this._editor)
        return;
      const html = this._editor.getHTML();
      this._updateEmptyState(html);
      this.setValue(isEmptyHtml(html) ? "" : html);
    };
    this._handleTouched = () => {
      if (!this._editor)
        return;
      this._onTouch();
    };
    this._refreshToolbarState = () => {
      if (!this._editor)
        return;
      this.toolbar_state.set({
        bold: this._editor.hasFormat("B"),
        italic: this._editor.hasFormat("I"),
        underline: this._editor.hasFormat("U"),
        unordered_list: this._editor.hasFormat("UL"),
        ordered_list: this._editor.hasFormat("OL"),
        link: this._editor.hasFormat("A")
      });
    };
    this._blockImageClick = (event) => {
      if (this.is_readonly() && event.target?.nodeName === "IMG") {
        event.stopPropagation();
      }
    };
  }
  setDisabledState(disabled) {
    this.disabled.set(disabled);
    this._setReadonlyState();
  }
  ngOnChanges(changes) {
    if (changes.placeholder)
      this._setPlaceholder();
    if (changes.readonly && this._editor) {
      this._setReadonlyState();
    }
  }
  ngAfterViewInit() {
    this.timeout("init", () => this._initialiseEditor());
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this._onChange(new_value);
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.timeout("write", () => {
      if (this._editor) {
        this._editor.setHTML(value || "");
        this._setPlaceholder();
        this._updateEmptyState();
      } else
        this.timeout("write", () => this.writeValue(value));
    });
  }
  toggleBold() {
    this._toggleFormat("B", () => this._editor.removeBold(), () => this._editor.bold());
  }
  toggleItalic() {
    this._toggleFormat("I", () => this._editor.removeItalic(), () => this._editor.italic());
  }
  toggleUnderline() {
    this._toggleFormat("U", () => this._editor.removeUnderline(), () => this._editor.underline());
  }
  makeUnorderedList() {
    this._toggleFormat("UL", () => this._editor.removeList(), () => this._editor.makeUnorderedList());
  }
  makeOrderedList() {
    this._toggleFormat("OL", () => this._editor.removeList(), () => this._editor.makeOrderedList());
  }
  insertLink() {
    if (!this._editor)
      return;
    if (this._editor.hasFormat("A")) {
      this._editor.removeLink();
      this._syncValue();
      this._refreshToolbarState();
      return;
    }
    const input_url = prompt(i18n("FORM.LINK_URL_PROMPT"));
    if (!input_url)
      return;
    const link_url = toLinkUrl(input_url);
    if (!link_url) {
      notifyError(i18n("FORM.LINK_PROTOCOL_ERROR"));
      return;
    }
    this._editor.makeLink(link_url);
    this._syncValue();
    this._refreshToolbarState();
  }
  setFontFace(event) {
    if (!this._editor)
      return;
    const font_face = event.target.value;
    if (!font_face)
      return;
    this._editor.setFontFace(font_face === "default" ? "inherit" : font_face);
    this._syncValue();
  }
  setFontSize(event) {
    if (!this._editor)
      return;
    const font_size = event.target.value;
    if (!font_size)
      return;
    this._editor.setFontSize(font_size);
    this._syncValue();
  }
  insertImage() {
    this._embedFile(true);
  }
  insertAttachment() {
    this._embedFile(false);
  }
  async _initialiseEditor() {
    const _editor_el = this._editor_el()?.nativeElement;
    if (!_editor_el) {
      return this.timeout("init", () => this._initialiseEditor());
    }
    const { default: Squire } = await import("./squire-VCCEXQGR.js");
    if (this._editor) {
      this._editor.destroy();
    }
    _editor_el.innerHTML = "";
    _editor_el.removeEventListener("click", this._blockImageClick, true);
    _editor_el.addEventListener("click", this._blockImageClick, true);
    this._editor = new Squire(_editor_el, {
      blockTag: "div",
      sanitizeToDOMFragment: (html) => {
        const sanitized_html = this._dom_sanitizer.sanitize(SecurityContext.HTML, html || "") || "";
        const template = document.createElement("template");
        template.innerHTML = sanitized_html;
        return template.content.cloneNode(true);
      }
    });
    this._editor.addEventListener("input", this._syncValue);
    this._editor.addEventListener("blur", this._handleTouched);
    this._editor.addEventListener("cursor", this._refreshToolbarState);
    this._editor.addEventListener("select", this._refreshToolbarState);
    this._editor.addEventListener("pathChange", this._refreshToolbarState);
    this._setReadonlyState();
    this._setPlaceholder();
    this._updateEmptyState();
    this._refreshToolbarState();
  }
  _embedFile(images_only) {
    if (!this._editor)
      return;
    const file_input = document.createElement("input");
    file_input.setAttribute("type", "file");
    if (images_only)
      file_input.setAttribute("accept", "image/*");
    file_input.click();
    file_input.onchange = () => {
      const file = file_input.files?.[0];
      if (!file)
        return;
      this._uploads.uploadFileToCompletion(file, true).then((upload_id) => {
        if (!upload_id)
          return;
        const link = `${location.origin}/api/engine/v2/uploads/${encodeURIComponent(upload_id)}/url`;
        this._setAuth();
        this._insertUploadedFile(link, file, images_only);
        this._syncValue();
      }).catch((error) => {
        notifyError(i18n("FORM.UPLOAD_FAILED", {
          name: file.name,
          error: error?.message || i18n("FORM.ERROR_UNKNOWN")
        }));
      });
    };
  }
  _setReadonlyState() {
    this._setRootAttribute("contenteditable", `${!this.is_readonly()}`);
  }
  /** Show the placeholder only while the editor has no content */
  _updateEmptyState(html = this._editor?.getHTML() || "") {
    this.is_empty.set(isEmptyHtml(html));
  }
  _setPlaceholder() {
    this._setRootAttribute("data-placeholder", this.placeholder() || "");
  }
  /**
   * Set an attribute on the editor element. Squire watches the attributes
   * of this element, so change them through `modifyDocument`, or Squire
   * sends an `input` event and the form gets a change the user did not make.
   */
  _setRootAttribute(name, value) {
    const _editor_el = this._editor_el()?.nativeElement;
    if (!_editor_el)
      return;
    const update = () => _editor_el.setAttribute(name, value);
    if (this._editor)
      this._editor.modifyDocument(update);
    else
      update();
  }
  _toggleFormat(format, disable_action, enable_action) {
    if (!this._editor)
      return;
    if (this._editor.hasFormat(format))
      disable_action();
    else
      enable_action();
    this._syncValue();
    this._refreshToolbarState();
  }
  _insertUploadedFile(link, file, images_only) {
    const is_image = file.type.startsWith("image/");
    const name = escapeHtml(file.name);
    const src = escapeHtml(link);
    if (images_only || is_image) {
      this._editor.insertHTML(`<img src="${src}" alt="${name}" />`);
      return;
    }
    this._editor.insertHTML(`<a href="${src}" target="_blank" rel="noopener noreferrer">${name}</a>`);
  }
  _setAuth() {
    const tkn = J();
    document.cookie = `${tkn === "x-api-key" ? "api-key=" + encodeURIComponent(et()) : "bearer_token=" + encodeURIComponent(tkn)};max-age=30;path=/api/engine/v2/uploads;samesite=strict;${location.protocol === "https:" ? "secure;" : ""}`;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275RichTextInputComponent_BaseFactory;
      return function RichTextInputComponent_Factory(__ngFactoryType__) {
        return (\u0275RichTextInputComponent_BaseFactory || (\u0275RichTextInputComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RichTextInputComponent)))(__ngFactoryType__ || _RichTextInputComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RichTextInputComponent, selectors: [["rich-text-input"]], viewQuery: function RichTextInputComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._editor_el, _c0, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { placeholder: [1, "placeholder"], readonly: [1, "readonly"], images_allowed: [1, "images_allowed"] }, features: [\u0275\u0275ProvidersFeature([provideValueAccessor(() => _RichTextInputComponent)]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 5, vars: 3, consts: [["container", ""], ["editor", ""], [1, "w-full"], [1, "border-base-300", "bg-base-100", "flex", "flex-wrap", "items-center", "gap-1", "rounded-t", "border", "p-2"], [1, "squire-editor"], [1, "border-base-300", "bg-base-100", "rounded", "border", "p-2", "text-sm", 3, "change"], ["value", "default"], ["value", "Arial"], ["value", "Helvetica"], ["value", "Georgia"], ["value", "Times New Roman"], [1, "border-base-300", "bg-base-100", "min-w-24", "rounded", "border", "p-2", "text-sm", 3, "change"], ["value", ""], ["value", "12px"], ["value", "14px"], ["value", "16px"], ["value", "18px"], ["value", "24px"], ["value", "32px"], ["value", "48px"], ["icon", "", "type", "button", 1, "border-base-300", "rounded", "border", "px-2", "py-1", "text-sm", 3, "click"]], template: function RichTextInputComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2, 0);
        \u0275\u0275conditionalCreate(2, RichTextInputComponent_Conditional_2_Template, 56, 55, "div", 3);
        \u0275\u0275element(3, "div", 4, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("is-empty", ctx.is_empty());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.is_readonly() ? 2 : -1);
      }
    }, dependencies: [IconComponent, TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n[_nghost-%COMP%]     .squire-editor {\n  position: relative;\n  border-radius: 0.25rem;\n  border: 1px solid var(--%NS%base-300);\n  padding: 0.5rem;\n  min-height: 8rem;\n  width: 100%;\n  outline: none;\n}\n[_nghost-%COMP%]     .is-empty > .squire-editor::before {\n  content: attr(data-placeholder);\n  position: absolute;\n  top: 0.5rem;\n  left: 0.5rem;\n  pointer-events: none;\n  color: var(--%NS%base-content);\n  opacity: 0.5;\n}\n[_nghost-%COMP%]     .squire-editor ul {\n  list-style-type: disc;\n  margin: 0.5rem 0;\n  padding-left: 1.5rem;\n}\n[_nghost-%COMP%]     .squire-editor ol {\n  list-style-type: decimal;\n  margin: 0.5rem 0;\n  padding-left: 1.5rem;\n}\n[_nghost-%COMP%]     .squire-editor li {\n  margin: 0.125rem 0;\n}\n/*# sourceMappingURL=rich-text-input.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RichTextInputComponent, [{
    type: Component,
    args: [{ selector: "rich-text-input", template: `
        <div #container class="w-full" [class.is-empty]="is_empty()">
            @if (!is_readonly()) {
                <div
                    class="border-base-300 bg-base-100 flex flex-wrap items-center gap-1 rounded-t border p-2"
                >
                    <select
                        class="border-base-300 bg-base-100 rounded border p-2 text-sm"
                        (change)="setFontFace($event)"
                    >
                        <option value="default">
                            {{ 'FORM.FONT' | translate }}
                        </option>
                        <option value="Arial">Arial</option>
                        <option value="Helvetica">Helvetica</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Times New Roman">Times New Roman</option>
                    </select>
                    <select
                        class="border-base-300 bg-base-100 min-w-24 rounded border p-2 text-sm"
                        (change)="setFontSize($event)"
                    >
                        <option value="">
                            {{ 'FORM.FONT_SIZE' | translate }}
                        </option>
                        <option value="12px">12</option>
                        <option value="14px">14</option>
                        <option value="16px">16</option>
                        <option value="18px">18</option>
                        <option value="24px">24</option>
                        <option value="32px">32</option>
                        <option value="48px">48</option>
                    </select>
                    <button
                        icon
                        type="button"
                        class="border-base-300 rounded border px-2 py-1 text-sm"
                        [class.border-info]="toolbar_state().bold"
                        [class.text-info]="toolbar_state().bold"
                        (click)="toggleBold()"
                        [attr.aria-label]="'COMMON.BOLD' | translate"
                        [attr.aria-pressed]="!!toolbar_state().bold"
                    >
                        <icon>format_bold</icon>
                    </button>
                    <button
                        icon
                        type="button"
                        class="border-base-300 rounded border px-2 py-1 text-sm"
                        [class.border-info]="toolbar_state().italic"
                        [class.text-info]="toolbar_state().italic"
                        (click)="toggleItalic()"
                        [attr.aria-label]="'COMMON.ITALIC' | translate"
                        [attr.aria-pressed]="!!toolbar_state().italic"
                    >
                        <icon>format_italic</icon>
                    </button>
                    <button
                        icon
                        type="button"
                        class="border-base-300 rounded border px-2 py-1 text-sm"
                        [class.border-info]="toolbar_state().underline"
                        [class.text-info]="toolbar_state().underline"
                        (click)="toggleUnderline()"
                        [attr.aria-label]="'COMMON.UNDERLINE' | translate"
                        [attr.aria-pressed]="!!toolbar_state().underline"
                    >
                        <icon>format_underlined</icon>
                    </button>
                    <button
                        icon
                        type="button"
                        class="border-base-300 rounded border px-2 py-1 text-sm"
                        [class.border-info]="toolbar_state().unordered_list"
                        [class.text-info]="toolbar_state().unordered_list"
                        (click)="makeUnorderedList()"
                        [attr.aria-label]="'COMMON.BULLETED_LIST' | translate"
                        [attr.aria-pressed]="!!toolbar_state().unordered_list"
                    >
                        <icon>format_list_bulleted</icon>
                    </button>
                    <button
                        icon
                        type="button"
                        class="border-base-300 rounded border px-2 py-1 text-sm"
                        [class.border-info]="toolbar_state().ordered_list"
                        [class.text-info]="toolbar_state().ordered_list"
                        (click)="makeOrderedList()"
                        [attr.aria-label]="'COMMON.NUMBERED_LIST' | translate"
                        [attr.aria-pressed]="!!toolbar_state().ordered_list"
                    >
                        <icon>format_list_numbered</icon>
                    </button>
                    <button
                        icon
                        type="button"
                        class="border-base-300 rounded border px-2 py-1 text-sm"
                        [class.border-info]="toolbar_state().link"
                        [class.text-info]="toolbar_state().link"
                        (click)="insertLink()"
                        [attr.aria-label]="'COMMON.INSERT_LINK' | translate"
                        [attr.aria-pressed]="!!toolbar_state().link"
                    >
                        <icon>link</icon>
                    </button>
                    @if (images_allowed()) {
                        <button
                            icon
                            type="button"
                            class="border-base-300 rounded border px-2 py-1 text-sm"
                            (click)="insertImage()"
                            [attr.aria-label]="
                                'COMMON.INSERT_IMAGE' | translate
                            "
                        >
                            <icon>image</icon>
                        </button>
                        <button
                            icon
                            type="button"
                            class="border-base-300 rounded border px-2 py-1 text-sm"
                            (click)="insertAttachment()"
                            [attr.aria-label]="'COMMON.ATTACH_FILE' | translate"
                        >
                            <icon>attachment</icon>
                        </button>
                    }
                </div>
            }
            <div #editor class="squire-editor"></div>
        </div>
    `, providers: [provideValueAccessor(() => RichTextInputComponent)], imports: [IconComponent, TranslatePipe], styles: ["/* angular:styles/component:css;22f86659b0594c59ed3e6bb3476977a22fac0885c55c63c9389492334e7d20a8;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/rich-text-input.component.ts */\n:host {\n  display: block;\n  width: 100%;\n}\n:host ::ng-deep .squire-editor {\n  position: relative;\n  border-radius: 0.25rem;\n  border: 1px solid var(--base-300);\n  padding: 0.5rem;\n  min-height: 8rem;\n  width: 100%;\n  outline: none;\n}\n:host ::ng-deep .is-empty > .squire-editor::before {\n  content: attr(data-placeholder);\n  position: absolute;\n  top: 0.5rem;\n  left: 0.5rem;\n  pointer-events: none;\n  color: var(--base-content);\n  opacity: 0.5;\n}\n:host ::ng-deep .squire-editor ul {\n  list-style-type: disc;\n  margin: 0.5rem 0;\n  padding-left: 1.5rem;\n}\n:host ::ng-deep .squire-editor ol {\n  list-style-type: decimal;\n  margin: 0.5rem 0;\n  padding-left: 1.5rem;\n}\n:host ::ng-deep .squire-editor li {\n  margin: 0.125rem 0;\n}\n/*# sourceMappingURL=rich-text-input.component.css.map */\n"] }]
  }], null, { placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], readonly: [{ type: Input, args: [{ isSignal: true, alias: "readonly", required: false }] }], images_allowed: [{ type: Input, args: [{ isSignal: true, alias: "images_allowed", required: false }] }], _editor_el: [{ type: ViewChild, args: ["editor", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RichTextInputComponent, { className: "RichTextInputComponent", filePath: "libs/form-fields/src/lib/rich-text-input.component.ts", lineNumber: 243 });
})();

export {
  RichTextInputComponent
};
//# debugId=65dcbe7f-96c5-5629-8805-a3dda5bcb61c
//# sourceMappingURL=chunk-2KSDE46S.js.map
