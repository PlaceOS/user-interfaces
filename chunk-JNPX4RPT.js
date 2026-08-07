import {
  AsyncHandler,
  IconComponent,
  UploadCancelledError,
  UploadsService
} from "./chunk-3XNRPS72.js";
import {
  Component,
  DomSanitizer,
  Input,
  NG_VALUE_ACCESSOR,
  NgZone,
  SecurityContext,
  ViewChild,
  X,
  Ye,
  forwardRef,
  inject,
  input,
  notifyError,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
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
  ɵɵqueryAdvance,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵviewQuerySignal
} from "./chunk-2XZZDWFL.js";

// libs/form-fields/src/lib/rich-text-input.component.ts
var _c0 = ["editor"];
function RichTextInputComponent_Conditional_2_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function RichTextInputComponent_Conditional_2_Conditional_47_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.insertImage());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "image");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 20);
    \u0275\u0275listener("click", function RichTextInputComponent_Conditional_2_Conditional_47_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.insertAttachment());
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "attachment");
    \u0275\u0275elementEnd()();
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
    \u0275\u0275text(3, "Font");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "option", 7);
    \u0275\u0275text(5, "Arial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 8);
    \u0275\u0275text(7, "Helvetica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 9);
    \u0275\u0275text(9, "Georgia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 10);
    \u0275\u0275text(11, "Times New Roman");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "select", 11);
    \u0275\u0275listener("change", function RichTextInputComponent_Conditional_2_Template_select_change_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFontSize($event));
    });
    \u0275\u0275elementStart(13, "option", 12);
    \u0275\u0275text(14, "Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 13);
    \u0275\u0275text(16, "12");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 14);
    \u0275\u0275text(18, "14");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 15);
    \u0275\u0275text(20, "16");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 16);
    \u0275\u0275text(22, "18");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 17);
    \u0275\u0275text(24, "24");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 18);
    \u0275\u0275text(26, "32");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 19);
    \u0275\u0275text(28, "48");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "button", 20);
    \u0275\u0275listener("click", function RichTextInputComponent_Conditional_2_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleBold());
    });
    \u0275\u0275elementStart(30, "icon");
    \u0275\u0275text(31, "format_bold");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "button", 20);
    \u0275\u0275listener("click", function RichTextInputComponent_Conditional_2_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleItalic());
    });
    \u0275\u0275elementStart(33, "icon");
    \u0275\u0275text(34, "format_italic");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "button", 20);
    \u0275\u0275listener("click", function RichTextInputComponent_Conditional_2_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleUnderline());
    });
    \u0275\u0275elementStart(36, "icon");
    \u0275\u0275text(37, "format_underlined");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "button", 20);
    \u0275\u0275listener("click", function RichTextInputComponent_Conditional_2_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.makeUnorderedList());
    });
    \u0275\u0275elementStart(39, "icon");
    \u0275\u0275text(40, "format_list_bulleted");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "button", 20);
    \u0275\u0275listener("click", function RichTextInputComponent_Conditional_2_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.makeOrderedList());
    });
    \u0275\u0275elementStart(42, "icon");
    \u0275\u0275text(43, "format_list_numbered");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "button", 20);
    \u0275\u0275listener("click", function RichTextInputComponent_Conditional_2_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.insertLink());
    });
    \u0275\u0275elementStart(45, "icon");
    \u0275\u0275text(46, "link");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(47, RichTextInputComponent_Conditional_2_Conditional_47_Template, 6, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(29);
    \u0275\u0275classProp("border-info", ctx_r1.toolbar_state().bold)("text-info", ctx_r1.toolbar_state().bold);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("border-info", ctx_r1.toolbar_state().italic)("text-info", ctx_r1.toolbar_state().italic);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("border-info", ctx_r1.toolbar_state().underline)("text-info", ctx_r1.toolbar_state().underline);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("border-info", ctx_r1.toolbar_state().unordered_list)("text-info", ctx_r1.toolbar_state().unordered_list);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("border-info", ctx_r1.toolbar_state().ordered_list)("text-info", ctx_r1.toolbar_state().ordered_list);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("border-info", ctx_r1.toolbar_state().link)("text-info", ctx_r1.toolbar_state().link);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.images_allowed() ? 47 : -1);
  }
}
var RichTextInputComponent = class _RichTextInputComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._uploads = inject(UploadsService);
    this._dom_sanitizer = inject(DomSanitizer);
    this._ng_zone = inject(NgZone);
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
      this.setValue(this._editor.getHTML());
    };
    this._handleTouched = () => {
      if (!this._editor)
        return;
      this._onTouch();
    };
    this._refreshToolbarState = () => {
      if (!this._editor)
        return;
      this._ng_zone.run(() => {
        this.toolbar_state.set({
          bold: this._editor.hasFormat("B"),
          italic: this._editor.hasFormat("I"),
          underline: this._editor.hasFormat("U"),
          unordered_list: this._editor.hasFormat("UL"),
          ordered_list: this._editor.hasFormat("OL"),
          link: this._editor.hasFormat("A")
        });
      });
    };
  }
  ngOnChanges(changes) {
    if (changes.placeholder) {
      this.timeout("init", () => this._initialiseEditor());
    }
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
    const link_url = prompt("Enter URL");
    if (!link_url)
      return;
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
      this._uploads.uploadFile(file, true).then((upload_id) => {
        if (!upload_id)
          return;
        const link = `${location.origin}/api/engine/v2/uploads/${encodeURIComponent(upload_id)}/url`;
        this._setAuth();
        setTimeout(() => {
          this._insertUploadedFile(link, file, images_only);
          this._syncValue();
        }, 100);
      }).catch((error) => {
        if (error instanceof UploadCancelledError)
          return;
        notifyError(`Failed to upload ${file.name}: ${error?.message || "Unknown error"}`);
      });
    };
  }
  _setReadonlyState() {
    const _editor_el = this._editor_el()?.nativeElement;
    if (!_editor_el)
      return;
    _editor_el.setAttribute("contenteditable", `${!this.readonly()}`);
  }
  _setPlaceholder() {
    const _editor_el = this._editor_el()?.nativeElement;
    if (!_editor_el)
      return;
    _editor_el.setAttribute("data-placeholder", this.placeholder() || "");
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
    if (images_only || is_image) {
      this._editor.insertHTML(`<img src="${link}" alt="${file.name}" />`);
      return;
    }
    this._editor.insertHTML(`<a href="${link}" target="_blank">${file.name}</a>`);
  }
  _setAuth() {
    const tkn = X();
    document.cookie = `${tkn === "x-api-key" ? "api-key=" + encodeURIComponent(Ye()) : "bearer_token=" + encodeURIComponent(tkn)};max-age=30;path=/api/engine/v2/uploads;samesite=strict;${location.protocol === "https:" ? "secure;" : ""}`;
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
    }, inputs: { placeholder: [1, "placeholder"], readonly: [1, "readonly"], images_allowed: [1, "images_allowed"] }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => _RichTextInputComponent),
        multi: true
      }
    ]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 5, vars: 1, consts: [["container", ""], ["editor", ""], [1, "w-full"], [1, "border-base-300", "bg-base-100", "flex", "flex-wrap", "items-center", "gap-1", "rounded-t", "border", "p-2"], [1, "squire-editor"], [1, "border-base-300", "bg-base-100", "rounded", "border", "p-2", "text-sm", 3, "change"], ["value", "default"], ["value", "Arial"], ["value", "Helvetica"], ["value", "Georgia"], ["value", "Times New Roman"], [1, "border-base-300", "bg-base-100", "min-w-24", "rounded", "border", "p-2", "text-sm", 3, "change"], ["value", ""], ["value", "12px"], ["value", "14px"], ["value", "16px"], ["value", "18px"], ["value", "24px"], ["value", "32px"], ["value", "48px"], ["icon", "", "type", "button", 1, "border-base-300", "rounded", "border", "px-2", "py-1", "text-sm", 3, "click"]], template: function RichTextInputComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2, 0);
        \u0275\u0275conditionalCreate(2, RichTextInputComponent_Conditional_2_Template, 48, 25, "div", 3);
        \u0275\u0275element(3, "div", 4, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.readonly() ? 2 : -1);
      }
    }, dependencies: [IconComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n[_nghost-%COMP%]     .squire-editor {\n  border-radius: 0.25rem;\n  border: 1px solid var(--base-300);\n  padding: 0.5rem;\n  min-height: 8rem;\n  width: 100%;\n  outline: none;\n}\n[_nghost-%COMP%]     .squire-editor:empty::before {\n  content: attr(data-placeholder);\n  color: var(--base-content);\n  opacity: 0.5;\n}\n[_nghost-%COMP%]     .squire-editor ul {\n  list-style-type: disc;\n  margin: 0.5rem 0;\n  padding-left: 1.5rem;\n}\n[_nghost-%COMP%]     .squire-editor ol {\n  list-style-type: decimal;\n  margin: 0.5rem 0;\n  padding-left: 1.5rem;\n}\n[_nghost-%COMP%]     .squire-editor li {\n  margin: 0.125rem 0;\n}\n/*# sourceMappingURL=rich-text-input.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RichTextInputComponent, [{
    type: Component,
    args: [{ selector: "rich-text-input", template: `
        <div #container class="w-full">
            @if (!readonly()) {
                <div
                    class="border-base-300 bg-base-100 flex flex-wrap items-center gap-1 rounded-t border p-2"
                >
                    <select
                        class="border-base-300 bg-base-100 rounded border p-2 text-sm"
                        (change)="setFontFace($event)"
                    >
                        <option value="default">Font</option>
                        <option value="Arial">Arial</option>
                        <option value="Helvetica">Helvetica</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Times New Roman">Times New Roman</option>
                    </select>
                    <select
                        class="border-base-300 bg-base-100 min-w-24 rounded border p-2 text-sm"
                        (change)="setFontSize($event)"
                    >
                        <option value="">Size</option>
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
                    >
                        <icon>link</icon>
                    </button>
                    @if (images_allowed()) {
                        <button
                            icon
                            type="button"
                            class="border-base-300 rounded border px-2 py-1 text-sm"
                            (click)="insertImage()"
                        >
                            <icon>image</icon>
                        </button>
                        <button
                            icon
                            type="button"
                            class="border-base-300 rounded border px-2 py-1 text-sm"
                            (click)="insertAttachment()"
                        >
                            <icon>attachment</icon>
                        </button>
                    }
                </div>
            }
            <div #editor class="squire-editor"></div>
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => RichTextInputComponent),
        multi: true
      }
    ], imports: [IconComponent], styles: ["/* angular:styles/component:css;6dc2ae98694a2e57d7771f92bf30507b7e159114e70a4aebfdbd049028218be6;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/rich-text-input.component.ts */\n:host {\n  display: block;\n  width: 100%;\n}\n:host ::ng-deep .squire-editor {\n  border-radius: 0.25rem;\n  border: 1px solid var(--base-300);\n  padding: 0.5rem;\n  min-height: 8rem;\n  width: 100%;\n  outline: none;\n}\n:host ::ng-deep .squire-editor:empty::before {\n  content: attr(data-placeholder);\n  color: var(--base-content);\n  opacity: 0.5;\n}\n:host ::ng-deep .squire-editor ul {\n  list-style-type: disc;\n  margin: 0.5rem 0;\n  padding-left: 1.5rem;\n}\n:host ::ng-deep .squire-editor ol {\n  list-style-type: decimal;\n  margin: 0.5rem 0;\n  padding-left: 1.5rem;\n}\n:host ::ng-deep .squire-editor li {\n  margin: 0.125rem 0;\n}\n/*# sourceMappingURL=rich-text-input.component.css.map */\n"] }]
  }], null, { placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], readonly: [{ type: Input, args: [{ isSignal: true, alias: "readonly", required: false }] }], images_allowed: [{ type: Input, args: [{ isSignal: true, alias: "images_allowed", required: false }] }], _editor_el: [{ type: ViewChild, args: ["editor", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RichTextInputComponent, { className: "RichTextInputComponent", filePath: "libs/form-fields/src/lib/rich-text-input.component.ts", lineNumber: 191 });
})();

export {
  RichTextInputComponent
};
//# sourceMappingURL=chunk-JNPX4RPT.js.map
