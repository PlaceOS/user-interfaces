import {
  PDF_TRANSPARENT_BACKGROUND,
  canEncodeWebp,
  normalizeRotation,
  pdfBaseName,
  pdfPageImageSize,
  pdfPageName,
  releaseCanvas,
  renderPdfPageImage
} from "./chunk-4OXWFALI.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-25PGFDLI.js";
import "./chunk-5HHIMVHG.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-EFQKIWYD.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatHint
} from "./chunk-HFJLXBV4.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-5INXWBHO.js";
import {
  dialogClosed
} from "./chunk-SUHBQTO6.js";
import "./chunk-VXDPGMUS.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-H3YU5OJJ.js";
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef
} from "./chunk-2APKA6IB.js";
import "./chunk-FYBK3ORD.js";
import {
  TranslatePipe
} from "./chunk-XDLX3ZVO.js";
import "./chunk-E5Y3LTVC.js";
import {
  MatOption
} from "./chunk-BYJQITNS.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-4XDY7DFN.js";
import "./chunk-SNHIXH33.js";
import {
  IconComponent
} from "./chunk-KUBCKOBU.js";
import {
  i18n,
  notifyError
} from "./chunk-C3VLFLNG.js";
import "./chunk-PWFU2DHD.js";
import "./chunk-YXB236ED.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-SZ34I7U6.js";
import "./chunk-P3XWP5GT.js";
import {
  Component,
  DestroyRef,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
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
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BKT2MDTY.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/shared/pdf-import-modal.component.ts
var _c0 = (a0) => ({ example: a0 });
var _c1 = (a0, a1) => ({ count: a0, total: a1 });
var _c2 = (a0) => ({ count: a0 });
var _c3 = (a0, a1) => ({ current: a0, total: a1 });
var _c4 = (a0) => ({ page: a0 });
var _forTrack0 = ($index, $item) => $item.number;
function PdfImportModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" \xB7 ", \u0275\u0275pipeBind2(1, 1, "SIGNAGE_MANAGER.PDF_IMPORT_QUEUE", \u0275\u0275pureFunction2(4, _c3, ctx_r0.position.current, ctx_r0.position.total)), " ");
  }
}
function PdfImportModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "SIGNAGE_MANAGER.PDF_IMPORT_CLOSE_ARIA"));
  }
}
function PdfImportModalComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 46);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function PdfImportModalComponent_Conditional_52_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.custom_colour, $event) || (ctx_r0.custom_colour = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.custom_colour);
    \u0275\u0275property("disabled", ctx_r0.importing());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 3, "SIGNAGE_MANAGER.PDF_IMPORT_BACKGROUND_COLOUR"));
    \u0275\u0275control();
  }
}
function PdfImportModalComponent_For_100_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 57);
  }
  if (rf & 2) {
    const page_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", ctx_r0.is_transparent() ? null : ctx_r0.background());
    \u0275\u0275classProp("checkerboard", ctx_r0.is_transparent());
    \u0275\u0275property("src", page_r4.preview, \u0275\u0275sanitizeUrl);
  }
}
function PdfImportModalComponent_For_100_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275element(1, "img", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", ctx_r0.is_transparent() ? null : ctx_r0.background());
    \u0275\u0275classProp("checkerboard", ctx_r0.is_transparent())("fit-landscape", ctx_r0.fit() === "landscape")("fit-portrait", ctx_r0.fit() === "portrait");
    \u0275\u0275advance();
    \u0275\u0275property("src", page_r4.preview, \u0275\u0275sanitizeUrl);
  }
}
function PdfImportModalComponent_For_100_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 51);
    \u0275\u0275text(1, " broken_image ");
    \u0275\u0275elementEnd();
  }
}
function PdfImportModalComponent_For_100_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 52);
  }
}
function PdfImportModalComponent_For_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 41)(1, "button", 47);
    \u0275\u0275listener("click", function PdfImportModalComponent_For_100_Template_button_click_1_listener($event) {
      const page_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.togglePage(page_r4, $event));
    });
    \u0275\u0275elementStart(2, "div", 48);
    \u0275\u0275conditionalCreate(3, PdfImportModalComponent_For_100_Conditional_3_Template, 1, 5, "img", 49)(4, PdfImportModalComponent_For_100_Conditional_4_Template, 2, 9, "div", 50)(5, PdfImportModalComponent_For_100_Conditional_5_Template, 2, 0, "icon", 51)(6, PdfImportModalComponent_For_100_Conditional_6_Template, 1, 0, "mat-spinner", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 53)(8, "icon", 54);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 55);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "button", 56);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("click", function PdfImportModalComponent_For_100_Template_button_click_13_listener() {
      const page_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.rotatePage(page_r4, 90));
    });
    \u0275\u0275elementStart(15, "icon");
    \u0275\u0275text(16, "rotate_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const page_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", page_r4.selected);
    \u0275\u0275property("disabled", ctx_r0.importing());
    \u0275\u0275attribute("aria-pressed", page_r4.selected);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(page_r4.preview && ctx_r0.fit() === "page" ? 3 : page_r4.preview ? 4 : page_r4.preview_failed ? 5 : 6);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("selected-icon", page_r4.selected);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r4.selected ? "check_box" : "check_box_outline_blank", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 11, "SIGNAGE_MANAGER.PDF_IMPORT_PAGE", \u0275\u0275pureFunction1(17, _c4, page_r4.number)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.importing());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(14, 14, "SIGNAGE_MANAGER.PDF_IMPORT_ROTATE_PAGE", \u0275\u0275pureFunction1(19, _c4, page_r4.number)));
  }
}
function revokePreview(preview) {
  if (preview)
    URL.revokeObjectURL(preview);
}
var PREVIEW_BOUNDS = { width: 320, height: 320 };
var BACKGROUND_COLOURS = {
  white: "#ffffff",
  black: "#000000",
  transparent: PDF_TRANSPARENT_BACKGROUND
};
var PdfImportModalComponent = class _PdfImportModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.file_name = this._data.file_name;
    this.position = this._data.position;
    this.webp_supported = this._data.webp_supported;
    this.name = signal(
      pdfBaseName(this._data.file_name),
      ...ngDevMode ? [{ debugName: "name" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.fit = signal(
      "page",
      ...ngDevMode ? [{ debugName: "fit" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.background_mode = signal(
      "white",
      ...ngDevMode ? [{ debugName: "background_mode" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.custom_colour = signal(
      "#ffffff",
      ...ngDevMode ? [{ debugName: "custom_colour" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.format = signal(
      this._data.webp_supported ? "webp" : "png",
      ...ngDevMode ? [{ debugName: "format" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.resolution = signal(
      "4k",
      ...ngDevMode ? [{ debugName: "resolution" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.pages = signal(
      Array.from({ length: this._data.document.page_count }, (_, index) => ({
        number: index + 1,
        selected: true,
        rotation: 0,
        preview: "",
        preview_rotation: null,
        preview_failed: false
      })),
      ...ngDevMode ? [{ debugName: "pages" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.importing = signal(
      false,
      ...ngDevMode ? [{ debugName: "importing" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.base_name = computed(
      () => this.name().trim(),
      ...ngDevMode ? [{ debugName: "base_name" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.example_name = computed(
      () => pdfPageName(this.base_name() || pdfBaseName(""), 1),
      ...ngDevMode ? [{ debugName: "example_name" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.background = computed(
      () => {
        const mode = this.background_mode();
        return mode === "custom" ? this.custom_colour() : BACKGROUND_COLOURS[mode];
      },
      ...ngDevMode ? [{ debugName: "background" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_transparent = computed(
      () => this.background() === PDF_TRANSPARENT_BACKGROUND,
      ...ngDevMode ? [{ debugName: "is_transparent" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_count = computed(
      () => this.pages().filter((page) => page.selected).length,
      ...ngDevMode ? [{ debugName: "selected_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._renderPage = renderPdfPageImage;
    this._anchor_page = null;
    this._previews_abort = new AbortController();
    this._previews_running = false;
    inject(DestroyRef).onDestroy(() => {
      this._previews_abort.abort();
      for (const page of this.pages())
        revokePreview(page.preview);
    });
  }
  ngOnInit() {
    void this.renderPreviews();
  }
  /**
   * Include or exclude a page. Shift-click sets every page between this one
   * and the page clicked before it to the same state.
   */
  togglePage(page, event) {
    const selected = !page.selected;
    const anchor = this._anchor_page;
    if (event?.shiftKey && anchor !== null) {
      const [from, to] = [anchor, page.number].sort((a, b) => a - b);
      this._updatePages((item) => item.number >= from && item.number <= to ? __spreadProps(__spreadValues({}, item), { selected }) : item);
    } else {
      this._updatePages((item) => item.number === page.number ? __spreadProps(__spreadValues({}, item), { selected }) : item);
    }
    this._anchor_page = page.number;
  }
  selectAll(selected) {
    this._updatePages((page) => __spreadProps(__spreadValues({}, page), { selected }));
    this._anchor_page = null;
  }
  rotatePage(page, turn) {
    this._updatePages((item) => item.number === page.number ? __spreadProps(__spreadValues({}, item), { rotation: normalizeRotation(item.rotation + turn) }) : item);
    void this.renderPreviews();
  }
  rotateAll(turn) {
    this._updatePages((page) => __spreadProps(__spreadValues({}, page), {
      rotation: normalizeRotation(page.rotation + turn)
    }));
    void this.renderPreviews();
  }
  /**
   * Render a preview for each page that has none at its current rotation,
   * one at a time and in page order. A call while previews render only
   * makes the running loop look again, so a rotation is picked up.
   */
  async renderPreviews() {
    if (this._previews_running)
      return;
    this._previews_running = true;
    const signal2 = this._previews_abort.signal;
    try {
      while (!signal2.aborted && !this.importing()) {
        const page = this.pages().find((item) => item.preview_rotation !== item.rotation);
        if (!page)
          break;
        const rotation = page.rotation;
        let preview = "";
        try {
          preview = await this._renderPreview(page.number, rotation);
        } catch {
          if (signal2.aborted)
            return;
        }
        if (signal2.aborted) {
          revokePreview(preview);
          return;
        }
        revokePreview(page.preview);
        this._updatePages((item) => item.number === page.number ? __spreadProps(__spreadValues({}, item), {
          preview,
          // A failed page is tried again after a turn
          preview_rotation: rotation,
          preview_failed: !preview
        }) : item);
      }
    } finally {
      this._previews_running = false;
    }
  }
  /**
   * Close with the selected pages, ready for the bulk upload. Pages are not
   * rendered here: each one renders at full size just before it uploads,
   * so a long PDF never holds more than one page image in memory.
   */
  async importPages() {
    const base_name = this.base_name();
    const selected = this.pages().filter((page) => page.selected);
    if (this.importing() || !selected.length || !base_name)
      return;
    this.importing.set(true);
    try {
      const document_handle = this._data.document;
      const render_page = this._renderPage;
      const items = await Promise.all(selected.map(async (page) => {
        const options = this._renderOptions(page);
        const name = pdfPageName(base_name, page.number);
        const { width, height } = pdfPageImageSize(await document_handle.pageSize(page.number), options);
        return {
          media_type: "image",
          name,
          tags: [base_name],
          metadata: {
            width,
            height,
            is_landscape: width > height,
            duration: 0
          },
          loadFile: async () => (await render_page(document_handle, page.number, options, name)).file
        };
      }));
      this._dialog_ref.close(items);
    } catch {
      notifyError(i18n("SIGNAGE_MANAGER.PDF_IMPORT_ERR_INVALID", {
        name: this.file_name
      }));
    } finally {
      this.importing.set(false);
    }
  }
  /** Object URL of a small PNG of a page, on transparency */
  async _renderPreview(page_number, rotation) {
    const layer = await this._data.document.renderLayer(page_number, rotation, PREVIEW_BOUNDS, this._previews_abort.signal);
    try {
      const blob = await new Promise((resolve) => layer.toBlob(resolve, "image/png"));
      if (!blob)
        throw new Error("Could not write the preview");
      return URL.createObjectURL(blob);
    } finally {
      releaseCanvas(layer);
    }
  }
  _renderOptions(page) {
    return {
      rotation: page.rotation,
      fit: this.fit(),
      background: this.background(),
      format: this.format(),
      resolution: this.resolution()
    };
  }
  _updatePages(change) {
    this.pages.update((pages) => pages.map(change));
  }
  static {
    this.\u0275fac = function PdfImportModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PdfImportModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PdfImportModalComponent, selectors: [["pdf-import-modal"]], decls: 111, vars: 120, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "flex", "w-[calc(100%-1rem)]", "items-center", "rounded-sm", "border-none", "p-2"], [1, "min-w-0", "flex-1", "px-2"], ["id", "pdf-import-title", 1, "text-xl", "font-medium"], [1, "text-base-content/70", "truncate", "text-sm"], ["icon", "", "type", "button", "matRipple", "", "mat-dialog-close", ""], [1, "import-layout", "flex", "max-w-full", "gap-4", "px-4", "pt-2", "pb-4"], [1, "import-options", "flex", "shrink-0", "flex-col"], ["for", "pdf-import-name"], ["appearance", "outline", "subscriptSizing", "dynamic"], ["matInput", "", "id", "pdf-import-name", "name", "name", "aria-describedby", "pdf-import-name-hint", 3, "ngModelChange", "ngModel", "disabled"], ["id", "pdf-import-name-hint", 1, "name-hint"], ["id", "pdf-import-fit-label", "for", "pdf-import-fit"], ["appearance", "outline", 1, "no-subscript"], ["id", "pdf-import-fit", "name", "fit", "aria-labelledby", "pdf-import-fit-label", 3, "ngModelChange", "ngModel", "disabled"], ["value", "page"], ["value", "landscape"], ["value", "portrait"], ["id", "pdf-import-background-label", "for", "pdf-import-background", 1, "mt-2"], [1, "flex", "items-center", "gap-2"], ["appearance", "outline", 1, "no-subscript", "min-w-0", "flex-1"], ["id", "pdf-import-background", "name", "background", "aria-labelledby", "pdf-import-background-label", 3, "ngModelChange", "ngModel", "disabled"], ["value", "white"], ["value", "black"], ["value", "custom"], ["value", "transparent"], ["type", "color", "name", "custom_colour", 1, "border-base-300", "h-10", "w-12", "shrink-0", "cursor-pointer", "rounded-sm", "border", 3, "ngModel", "disabled"], ["id", "pdf-import-format-label", "for", "pdf-import-format", 1, "mt-2"], ["id", "pdf-import-format", "name", "format", "aria-labelledby", "pdf-import-format-label", 3, "ngModelChange", "ngModel", "disabled"], ["value", "webp", 3, "disabled"], ["value", "png"], ["id", "pdf-import-resolution-label", "for", "pdf-import-resolution", 1, "mt-2"], ["id", "pdf-import-resolution", "name", "resolution", "aria-labelledby", "pdf-import-resolution-label", 3, "ngModelChange", "ngModel", "disabled"], ["value", "4k"], ["value", "hd"], [1, "flex", "min-w-0", "flex-1", "flex-col", "overflow-hidden"], [1, "flex", "flex-wrap", "items-center", "gap-1", "pb-2"], ["btn", "", "matRipple", "", "type", "button", 1, "clear", 3, "click", "disabled"], [1, "flex-1"], ["icon", "", "matRipple", "", "type", "button", 3, "click", "disabled", "matTooltip"], [1, "text-base-content/70", "pb-2", "text-xs"], [1, "page-grid", "grid", "flex-1", "gap-3", "overflow-auto", "p-1"], [1, "relative"], [1, "border-base-200", "flex", "flex-wrap", "items-center", "justify-end", "gap-2", "border-t", "px-4", "py-2"], ["role", "status", 1, "text-base-content/70", "min-w-0", "flex-1", "text-sm"], ["btn", "", "matRipple", "", "type", "button", "mat-dialog-close", "", 1, "inverse", "w-32"], ["btn", "", "matRipple", "", "type", "button", 1, "min-w-32", 3, "click", "disabled"], ["type", "color", "name", "custom_colour", 1, "border-base-300", "h-10", "w-12", "shrink-0", "cursor-pointer", "rounded-sm", "border", 3, "ngModelChange", "ngModel", "disabled"], ["type", "button", "matRipple", "", 1, "page-toggle", "bg-base-200", "flex", "w-full", "flex-col", "items-center", "gap-1", "rounded-sm", "p-2", "text-left", 3, "click", "disabled"], [1, "flex", "h-32", "w-full", "items-center", "justify-center", "overflow-hidden"], ["alt", "", 1, "block", "max-h-full", "max-w-full", "object-contain", 3, "checkerboard", "background-color", "src"], [1, "max-h-full", "max-w-full", "overflow-hidden", 3, "checkerboard", "fit-landscape", "fit-portrait", "background-color"], [1, "text-base-content/50", "text-4xl"], ["diameter", "24"], [1, "flex", "w-full", "items-center", "gap-1", "text-sm"], [1, "shrink-0", "text-lg"], [1, "truncate"], ["icon", "", "matRipple", "", "type", "button", 1, "bg-base-100", "absolute", "top-3", "right-3", "shadow", 3, "click", "disabled"], ["alt", "", 1, "block", "max-h-full", "max-w-full", "object-contain", 3, "src"], [1, "max-h-full", "max-w-full", "overflow-hidden"], ["alt", "", 1, "block", "h-full", "w-full", "object-contain", 3, "src"]], template: function PdfImportModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275conditionalCreate(7, PdfImportModalComponent_Conditional_7_Template, 2, 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(8, PdfImportModalComponent_Conditional_8_Template, 4, 3, "button", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 5)(10, "section", 6);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementStart(12, "label", 7);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "mat-form-field", 8)(16, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function PdfImportModalComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.name, $event) || (ctx.name = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(17, "mat-hint", 10);
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "label", 11);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "mat-form-field", 12)(24, "mat-select", 13);
        \u0275\u0275twoWayListener("ngModelChange", function PdfImportModalComponent_Template_mat_select_ngModelChange_24_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.fit, $event) || (ctx.fit = $event);
          return $event;
        });
        \u0275\u0275elementStart(25, "mat-option", 14);
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "mat-option", 15);
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "mat-option", 16);
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "label", 17);
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 18)(38, "mat-form-field", 19)(39, "mat-select", 20);
        \u0275\u0275twoWayListener("ngModelChange", function PdfImportModalComponent_Template_mat_select_ngModelChange_39_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.background_mode, $event) || (ctx.background_mode = $event);
          return $event;
        });
        \u0275\u0275elementStart(40, "mat-option", 21);
        \u0275\u0275text(41);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "mat-option", 22);
        \u0275\u0275text(44);
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "mat-option", 23);
        \u0275\u0275text(47);
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "mat-option", 24);
        \u0275\u0275text(50);
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(52, PdfImportModalComponent_Conditional_52_Template, 2, 5, "input", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "label", 26);
        \u0275\u0275text(54);
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "mat-form-field", 12)(57, "mat-select", 27);
        \u0275\u0275twoWayListener("ngModelChange", function PdfImportModalComponent_Template_mat_select_ngModelChange_57_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.format, $event) || (ctx.format = $event);
          return $event;
        });
        \u0275\u0275elementStart(58, "mat-option", 28);
        \u0275\u0275text(59);
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "mat-option", 29);
        \u0275\u0275text(62);
        \u0275\u0275pipe(63, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "label", 30);
        \u0275\u0275text(65);
        \u0275\u0275pipe(66, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "mat-form-field", 12)(68, "mat-select", 31);
        \u0275\u0275twoWayListener("ngModelChange", function PdfImportModalComponent_Template_mat_select_ngModelChange_68_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.resolution, $event) || (ctx.resolution = $event);
          return $event;
        });
        \u0275\u0275elementStart(69, "mat-option", 32);
        \u0275\u0275text(70);
        \u0275\u0275pipe(71, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "mat-option", 33);
        \u0275\u0275text(73);
        \u0275\u0275pipe(74, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(75, "section", 34)(76, "div", 35)(77, "button", 36);
        \u0275\u0275listener("click", function PdfImportModalComponent_Template_button_click_77_listener() {
          return ctx.selectAll(true);
        });
        \u0275\u0275text(78);
        \u0275\u0275pipe(79, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "button", 36);
        \u0275\u0275listener("click", function PdfImportModalComponent_Template_button_click_80_listener() {
          return ctx.selectAll(false);
        });
        \u0275\u0275text(81);
        \u0275\u0275pipe(82, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(83, "div", 37);
        \u0275\u0275elementStart(84, "button", 38);
        \u0275\u0275pipe(85, "translate");
        \u0275\u0275pipe(86, "translate");
        \u0275\u0275listener("click", function PdfImportModalComponent_Template_button_click_84_listener() {
          return ctx.rotateAll(-90);
        });
        \u0275\u0275elementStart(87, "icon");
        \u0275\u0275text(88, "rotate_left");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "button", 38);
        \u0275\u0275pipe(90, "translate");
        \u0275\u0275pipe(91, "translate");
        \u0275\u0275listener("click", function PdfImportModalComponent_Template_button_click_89_listener() {
          return ctx.rotateAll(90);
        });
        \u0275\u0275elementStart(92, "icon");
        \u0275\u0275text(93, "rotate_right");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(94, "p", 39);
        \u0275\u0275text(95);
        \u0275\u0275pipe(96, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "ul", 40);
        \u0275\u0275pipe(98, "translate");
        \u0275\u0275repeaterCreate(99, PdfImportModalComponent_For_100_Template, 17, 21, "li", 41, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(101, "footer", 42)(102, "div", 43);
        \u0275\u0275text(103);
        \u0275\u0275pipe(104, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "button", 44);
        \u0275\u0275text(106);
        \u0275\u0275pipe(107, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "button", 45);
        \u0275\u0275listener("click", function PdfImportModalComponent_Template_button_click_108_listener() {
          return ctx.importPages();
        });
        \u0275\u0275text(109);
        \u0275\u0275pipe(110, "translate");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 50, "SIGNAGE_MANAGER.PDF_IMPORT_TITLE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.file_name, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.position ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.importing() ? 8 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 52, "SIGNAGE_MANAGER.PDF_IMPORT_OPTIONS"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 54, "SIGNAGE_MANAGER.PDF_IMPORT_NAME"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.name);
        \u0275\u0275property("disabled", ctx.importing());
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(19, 56, "SIGNAGE_MANAGER.PDF_IMPORT_NAME_HINT", \u0275\u0275pureFunction1(113, _c0, ctx.example_name())), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 59, "SIGNAGE_MANAGER.PDF_IMPORT_FIT"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.fit);
        \u0275\u0275property("disabled", ctx.importing());
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 61, "SIGNAGE_MANAGER.PDF_IMPORT_FIT_PAGE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 63, "SIGNAGE_MANAGER.PDF_IMPORT_FIT_LANDSCAPE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 65, "SIGNAGE_MANAGER.PDF_IMPORT_FIT_PORTRAIT"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 67, "SIGNAGE_MANAGER.PDF_IMPORT_BACKGROUND"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.background_mode);
        \u0275\u0275property("disabled", ctx.importing());
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 69, "SIGNAGE_MANAGER.PDF_IMPORT_BACKGROUND_WHITE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 71, "SIGNAGE_MANAGER.PDF_IMPORT_BACKGROUND_BLACK"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 73, "SIGNAGE_MANAGER.PDF_IMPORT_BACKGROUND_CUSTOM"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 75, "SIGNAGE_MANAGER.PDF_IMPORT_BACKGROUND_TRANSPARENT"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.background_mode() === "custom" ? 52 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(55, 77, "SIGNAGE_MANAGER.PDF_IMPORT_FORMAT"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.format);
        \u0275\u0275property("disabled", ctx.importing());
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.webp_supported);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(60, 79, ctx.webp_supported ? "SIGNAGE_MANAGER.PDF_IMPORT_FORMAT_WEBP" : "SIGNAGE_MANAGER.PDF_IMPORT_FORMAT_WEBP_UNSUPPORTED"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(63, 81, "SIGNAGE_MANAGER.PDF_IMPORT_FORMAT_PNG"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(66, 83, "SIGNAGE_MANAGER.PDF_IMPORT_RESOLUTION"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.resolution);
        \u0275\u0275property("disabled", ctx.importing());
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(71, 85, "SIGNAGE_MANAGER.PDF_IMPORT_RESOLUTION_4K"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(74, 87, "SIGNAGE_MANAGER.PDF_IMPORT_RESOLUTION_HD"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.importing());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(79, 89, "SIGNAGE_MANAGER.PDF_IMPORT_SELECT_ALL"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.importing());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(82, 91, "SIGNAGE_MANAGER.PDF_IMPORT_SELECT_NONE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.importing())("matTooltip", \u0275\u0275pipeBind1(85, 93, "SIGNAGE_MANAGER.PDF_IMPORT_ROTATE_ALL_LEFT"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(86, 95, "SIGNAGE_MANAGER.PDF_IMPORT_ROTATE_ALL_LEFT"));
        \u0275\u0275advance(5);
        \u0275\u0275property("disabled", ctx.importing())("matTooltip", \u0275\u0275pipeBind1(90, 97, "SIGNAGE_MANAGER.PDF_IMPORT_ROTATE_ALL_RIGHT"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(91, 99, "SIGNAGE_MANAGER.PDF_IMPORT_ROTATE_ALL_RIGHT"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(96, 101, "SIGNAGE_MANAGER.PDF_IMPORT_SELECT_HINT"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(98, 103, "SIGNAGE_MANAGER.PDF_IMPORT_PAGES"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.pages());
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(104, 105, "SIGNAGE_MANAGER.PDF_IMPORT_SELECTED", \u0275\u0275pureFunction2(115, _c1, ctx.selected_count(), ctx.pages().length)), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(107, 108, "COMMON.CANCEL"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.importing() || !ctx.selected_count() || !ctx.base_name());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(110, 110, "SIGNAGE_MANAGER.PDF_IMPORT_START", \u0275\u0275pureFunction1(118, _c2, ctx.selected_count())), " ");
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatDialogModule,
      MatDialogClose,
      MatFormFieldModule,
      MatFormField,
      MatHint,
      MatInputModule,
      MatInput,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      TranslatePipe
    ], styles: ["\n.import-layout[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.import-options[_ngcontent-%COMP%] {\n  width: 16rem;\n  overflow: auto;\n}\n.name-hint[_ngcontent-%COMP%] {\n  overflow-wrap: anywhere;\n}\n@media (min-width: 768px) {\n  .import-layout[_ngcontent-%COMP%] {\n    width: 64rem;\n    max-height: 70vh;\n  }\n}\n@media (max-width: 767.98px) {\n  .import-layout[_ngcontent-%COMP%] {\n    flex: 1;\n    flex-direction: column;\n    overflow: auto;\n  }\n  .import-options[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow: visible;\n  }\n}\n.page-toggle[_ngcontent-%COMP%] {\n  border: 2px solid transparent;\n  opacity: 0.5;\n}\n.page-toggle.selected[_ngcontent-%COMP%] {\n  border-color: var(--%NS%primary);\n  opacity: 1;\n}\n.selected-icon[_ngcontent-%COMP%] {\n  color: var(--%NS%primary);\n}\n.page-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));\n}\n.checkerboard[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-image:\n    conic-gradient(\n      #d4d4d4 25%,\n      transparent 0 50%,\n      #d4d4d4 0 75%,\n      transparent 0);\n  background-size: 12px 12px;\n}\n.fit-landscape[_ngcontent-%COMP%] {\n  aspect-ratio: 16 / 9;\n  width: 100%;\n}\n.fit-portrait[_ngcontent-%COMP%] {\n  aspect-ratio: 9 / 16;\n  height: 100%;\n}\n.page-toggle[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--%NS%color-primary, currentColor);\n  outline-offset: 2px;\n}\n/*# sourceMappingURL=pdf-import-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfImportModalComponent, [{
    type: Component,
    args: [{ selector: "pdf-import-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 flex w-[calc(100%-1rem)] items-center rounded-sm border-none p-2"
        >
            <div class="min-w-0 flex-1 px-2">
                <h2 id="pdf-import-title" class="text-xl font-medium">
                    {{ 'SIGNAGE_MANAGER.PDF_IMPORT_TITLE' | translate }}
                </h2>
                <p class="text-base-content/70 truncate text-sm">
                    {{ file_name }}
                    @if (position) {
                        \xB7
                        {{
                            'SIGNAGE_MANAGER.PDF_IMPORT_QUEUE'
                                | translate
                                    : {
                                          current: position.current,
                                          total: position.total,
                                      }
                        }}
                    }
                </p>
            </div>
            @if (!importing()) {
                <button
                    icon
                    type="button"
                    matRipple
                    mat-dialog-close
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.PDF_IMPORT_CLOSE_ARIA' | translate
                    "
                >
                    <icon>close</icon>
                </button>
            }
        </header>
        <div class="import-layout flex max-w-full gap-4 px-4 pt-2 pb-4">
            <section
                class="import-options flex shrink-0 flex-col"
                [attr.aria-label]="
                    'SIGNAGE_MANAGER.PDF_IMPORT_OPTIONS' | translate
                "
            >
                <label for="pdf-import-name">
                    {{ 'SIGNAGE_MANAGER.PDF_IMPORT_NAME' | translate }}
                </label>
                <!-- The example name can wrap, so the hint takes the height
                     it needs rather than overlapping the next field -->
                <mat-form-field appearance="outline" subscriptSizing="dynamic">
                    <input
                        matInput
                        id="pdf-import-name"
                        name="name"
                        [(ngModel)]="name"
                        [disabled]="importing()"
                        aria-describedby="pdf-import-name-hint"
                    />
                    <mat-hint id="pdf-import-name-hint" class="name-hint">
                        {{
                            'SIGNAGE_MANAGER.PDF_IMPORT_NAME_HINT'
                                | translate: { example: example_name() }
                        }}
                    </mat-hint>
                </mat-form-field>

                <label id="pdf-import-fit-label" for="pdf-import-fit">
                    {{ 'SIGNAGE_MANAGER.PDF_IMPORT_FIT' | translate }}
                </label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select
                        id="pdf-import-fit"
                        name="fit"
                        aria-labelledby="pdf-import-fit-label"
                        [(ngModel)]="fit"
                        [disabled]="importing()"
                    >
                        <mat-option value="page">
                            {{
                                'SIGNAGE_MANAGER.PDF_IMPORT_FIT_PAGE'
                                    | translate
                            }}
                        </mat-option>
                        <mat-option value="landscape">
                            {{
                                'SIGNAGE_MANAGER.PDF_IMPORT_FIT_LANDSCAPE'
                                    | translate
                            }}
                        </mat-option>
                        <mat-option value="portrait">
                            {{
                                'SIGNAGE_MANAGER.PDF_IMPORT_FIT_PORTRAIT'
                                    | translate
                            }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>

                <label
                    id="pdf-import-background-label"
                    for="pdf-import-background"
                    class="mt-2"
                >
                    {{ 'SIGNAGE_MANAGER.PDF_IMPORT_BACKGROUND' | translate }}
                </label>
                <div class="flex items-center gap-2">
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript min-w-0 flex-1"
                    >
                        <mat-select
                            id="pdf-import-background"
                            name="background"
                            aria-labelledby="pdf-import-background-label"
                            [(ngModel)]="background_mode"
                            [disabled]="importing()"
                        >
                            <mat-option value="white">
                                {{
                                    'SIGNAGE_MANAGER.PDF_IMPORT_BACKGROUND_WHITE'
                                        | translate
                                }}
                            </mat-option>
                            <mat-option value="black">
                                {{
                                    'SIGNAGE_MANAGER.PDF_IMPORT_BACKGROUND_BLACK'
                                        | translate
                                }}
                            </mat-option>
                            <mat-option value="custom">
                                {{
                                    'SIGNAGE_MANAGER.PDF_IMPORT_BACKGROUND_CUSTOM'
                                        | translate
                                }}
                            </mat-option>
                            <mat-option value="transparent">
                                {{
                                    'SIGNAGE_MANAGER.PDF_IMPORT_BACKGROUND_TRANSPARENT'
                                        | translate
                                }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                    @if (background_mode() === 'custom') {
                        <input
                            type="color"
                            name="custom_colour"
                            class="border-base-300 h-10 w-12 shrink-0 cursor-pointer rounded-sm border"
                            [(ngModel)]="custom_colour"
                            [disabled]="importing()"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.PDF_IMPORT_BACKGROUND_COLOUR'
                                    | translate
                            "
                        />
                    }
                </div>

                <label
                    id="pdf-import-format-label"
                    for="pdf-import-format"
                    class="mt-2"
                >
                    {{ 'SIGNAGE_MANAGER.PDF_IMPORT_FORMAT' | translate }}
                </label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select
                        id="pdf-import-format"
                        name="format"
                        aria-labelledby="pdf-import-format-label"
                        [(ngModel)]="format"
                        [disabled]="importing()"
                    >
                        <mat-option value="webp" [disabled]="!webp_supported">
                            {{
                                (webp_supported
                                    ? 'SIGNAGE_MANAGER.PDF_IMPORT_FORMAT_WEBP'
                                    : 'SIGNAGE_MANAGER.PDF_IMPORT_FORMAT_WEBP_UNSUPPORTED'
                                ) | translate
                            }}
                        </mat-option>
                        <mat-option value="png">
                            {{
                                'SIGNAGE_MANAGER.PDF_IMPORT_FORMAT_PNG'
                                    | translate
                            }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>

                <label
                    id="pdf-import-resolution-label"
                    for="pdf-import-resolution"
                    class="mt-2"
                >
                    {{ 'SIGNAGE_MANAGER.PDF_IMPORT_RESOLUTION' | translate }}
                </label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select
                        id="pdf-import-resolution"
                        name="resolution"
                        aria-labelledby="pdf-import-resolution-label"
                        [(ngModel)]="resolution"
                        [disabled]="importing()"
                    >
                        <mat-option value="4k">
                            {{
                                'SIGNAGE_MANAGER.PDF_IMPORT_RESOLUTION_4K'
                                    | translate
                            }}
                        </mat-option>
                        <mat-option value="hd">
                            {{
                                'SIGNAGE_MANAGER.PDF_IMPORT_RESOLUTION_HD'
                                    | translate
                            }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </section>

            <section class="flex min-w-0 flex-1 flex-col overflow-hidden">
                <div class="flex flex-wrap items-center gap-1 pb-2">
                    <button
                        btn
                        matRipple
                        type="button"
                        class="clear"
                        [disabled]="importing()"
                        (click)="selectAll(true)"
                    >
                        {{
                            'SIGNAGE_MANAGER.PDF_IMPORT_SELECT_ALL' | translate
                        }}
                    </button>
                    <button
                        btn
                        matRipple
                        type="button"
                        class="clear"
                        [disabled]="importing()"
                        (click)="selectAll(false)"
                    >
                        {{
                            'SIGNAGE_MANAGER.PDF_IMPORT_SELECT_NONE' | translate
                        }}
                    </button>
                    <div class="flex-1"></div>
                    <button
                        icon
                        matRipple
                        type="button"
                        [disabled]="importing()"
                        (click)="rotateAll(-90)"
                        [matTooltip]="
                            'SIGNAGE_MANAGER.PDF_IMPORT_ROTATE_ALL_LEFT'
                                | translate
                        "
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.PDF_IMPORT_ROTATE_ALL_LEFT'
                                | translate
                        "
                    >
                        <icon>rotate_left</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        type="button"
                        [disabled]="importing()"
                        (click)="rotateAll(90)"
                        [matTooltip]="
                            'SIGNAGE_MANAGER.PDF_IMPORT_ROTATE_ALL_RIGHT'
                                | translate
                        "
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.PDF_IMPORT_ROTATE_ALL_RIGHT'
                                | translate
                        "
                    >
                        <icon>rotate_right</icon>
                    </button>
                </div>
                <p class="text-base-content/70 pb-2 text-xs">
                    {{ 'SIGNAGE_MANAGER.PDF_IMPORT_SELECT_HINT' | translate }}
                </p>
                <ul
                    class="page-grid grid flex-1 gap-3 overflow-auto p-1"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.PDF_IMPORT_PAGES' | translate
                    "
                >
                    @for (page of pages(); track page.number) {
                        <li class="relative">
                            <button
                                type="button"
                                matRipple
                                class="page-toggle bg-base-200 flex w-full flex-col items-center gap-1 rounded-sm p-2 text-left"
                                [class.selected]="page.selected"
                                [attr.aria-pressed]="page.selected"
                                [disabled]="importing()"
                                (click)="togglePage(page, $event)"
                            >
                                <div
                                    class="flex h-32 w-full items-center justify-center overflow-hidden"
                                >
                                    @if (page.preview && fit() === 'page') {
                                        <img
                                            class="block max-h-full max-w-full object-contain"
                                            [class.checkerboard]="
                                                is_transparent()
                                            "
                                            [style.background-color]="
                                                is_transparent()
                                                    ? null
                                                    : background()
                                            "
                                            [src]="page.preview"
                                            alt=""
                                        />
                                    } @else if (page.preview) {
                                        <div
                                            class="max-h-full max-w-full overflow-hidden"
                                            [class.checkerboard]="
                                                is_transparent()
                                            "
                                            [class.fit-landscape]="
                                                fit() === 'landscape'
                                            "
                                            [class.fit-portrait]="
                                                fit() === 'portrait'
                                            "
                                            [style.background-color]="
                                                is_transparent()
                                                    ? null
                                                    : background()
                                            "
                                        >
                                            <img
                                                class="block h-full w-full object-contain"
                                                [src]="page.preview"
                                                alt=""
                                            />
                                        </div>
                                    } @else if (page.preview_failed) {
                                        <icon
                                            class="text-base-content/50 text-4xl"
                                        >
                                            broken_image
                                        </icon>
                                    } @else {
                                        <mat-spinner diameter="24" />
                                    }
                                </div>
                                <div
                                    class="flex w-full items-center gap-1 text-sm"
                                >
                                    <icon
                                        class="shrink-0 text-lg"
                                        [class.selected-icon]="page.selected"
                                    >
                                        {{
                                            page.selected
                                                ? 'check_box'
                                                : 'check_box_outline_blank'
                                        }}
                                    </icon>
                                    <span class="truncate">
                                        {{
                                            'SIGNAGE_MANAGER.PDF_IMPORT_PAGE'
                                                | translate
                                                    : { page: page.number }
                                        }}
                                    </span>
                                </div>
                            </button>
                            <button
                                icon
                                matRipple
                                type="button"
                                class="bg-base-100 absolute top-3 right-3 shadow"
                                [disabled]="importing()"
                                (click)="rotatePage(page, 90)"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.PDF_IMPORT_ROTATE_PAGE'
                                        | translate: { page: page.number }
                                "
                            >
                                <icon>rotate_right</icon>
                            </button>
                        </li>
                    }
                </ul>
            </section>
        </div>
        <footer
            class="border-base-200 flex flex-wrap items-center justify-end gap-2 border-t px-4 py-2"
        >
            <div
                class="text-base-content/70 min-w-0 flex-1 text-sm"
                role="status"
            >
                {{
                    'SIGNAGE_MANAGER.PDF_IMPORT_SELECTED'
                        | translate
                            : {
                                  count: selected_count(),
                                  total: pages().length,
                              }
                }}
            </div>
            <button
                btn
                matRipple
                type="button"
                class="inverse w-32"
                mat-dialog-close
            >
                {{ 'COMMON.CANCEL' | translate }}
            </button>
            <button
                btn
                matRipple
                type="button"
                class="min-w-32"
                [disabled]="importing() || !selected_count() || !base_name()"
                (click)="importPages()"
            >
                {{
                    'SIGNAGE_MANAGER.PDF_IMPORT_START'
                        | translate: { count: selected_count() }
                }}
            </button>
        </footer>
    `, imports: [
      FormsModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatRippleModule,
      MatSelectModule,
      MatTooltipModule,
      IconComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;cda3d5430f2e0d1d386837bede4dea634690fb556edf43c1d4aed263866d9bbe;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/shared/pdf-import-modal.component.ts */\n.import-layout {\n  overflow: hidden;\n}\n.import-options {\n  width: 16rem;\n  overflow: auto;\n}\n.name-hint {\n  overflow-wrap: anywhere;\n}\n@media (min-width: 768px) {\n  .import-layout {\n    width: 64rem;\n    max-height: 70vh;\n  }\n}\n@media (max-width: 767.98px) {\n  .import-layout {\n    flex: 1;\n    flex-direction: column;\n    overflow: auto;\n  }\n  .import-options {\n    width: 100%;\n    overflow: visible;\n  }\n}\n.page-toggle {\n  border: 2px solid transparent;\n  opacity: 0.5;\n}\n.page-toggle.selected {\n  border-color: var(--primary);\n  opacity: 1;\n}\n.selected-icon {\n  color: var(--primary);\n}\n.page-grid {\n  grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));\n}\n.checkerboard {\n  background-color: #fff;\n  background-image:\n    conic-gradient(\n      #d4d4d4 25%,\n      transparent 0 50%,\n      #d4d4d4 0 75%,\n      transparent 0);\n  background-size: 12px 12px;\n}\n.fit-landscape {\n  aspect-ratio: 16 / 9;\n  width: 100%;\n}\n.fit-portrait {\n  aspect-ratio: 9 / 16;\n  height: 100%;\n}\n.page-toggle:focus-visible {\n  outline: 2px solid var(--color-primary, currentColor);\n  outline-offset: 2px;\n}\n/*# sourceMappingURL=pdf-import-modal.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PdfImportModalComponent, { className: "PdfImportModalComponent", filePath: "apps/signage-manager/src/app/shared/pdf-import-modal.component.ts", lineNumber: 604 });
})();

// apps/signage-manager/src/app/media/pdf-upload.ts
async function importPdfPages(dialog, files, openDocument) {
  const items = [];
  const documents = [];
  for (const [index, file] of files.entries()) {
    const position = files.length > 1 ? { current: index + 1, total: files.length } : void 0;
    const result = await importPdf(dialog, file, position, openDocument);
    if (!result)
      continue;
    items.push(...result.items);
    documents.push(result.document);
  }
  return {
    items,
    close: async () => {
      await Promise.all(documents.map((item) => item.destroy().catch(() => void 0)));
    }
  };
}
async function importPdf(dialog, file, position, openDocument) {
  let pdf_document;
  try {
    pdf_document = await openDocument(file);
  } catch (error) {
    const reason = error?.reason;
    notifyError(i18n(reason === "password" ? "SIGNAGE_MANAGER.PDF_IMPORT_ERR_PASSWORD" : "SIGNAGE_MANAGER.PDF_IMPORT_ERR_INVALID", { name: file.name }));
    return void 0;
  }
  let items;
  try {
    const data = {
      file_name: file.name,
      document: pdf_document,
      webp_supported: canEncodeWebp(),
      position
    };
    const ref = dialog.open(PdfImportModalComponent, {
      data,
      panelClass: "mobile-fullscreen",
      ariaLabelledBy: "pdf-import-title"
    });
    items = await dialogClosed(ref);
  } finally {
    if (!items?.length) {
      await pdf_document.destroy().catch(() => void 0);
    }
  }
  return items?.length ? { items, document: pdf_document } : void 0;
}
export {
  importPdfPages
};
//# debugId=56d147be-b2b1-5fad-adde-90e22994a428
//# sourceMappingURL=pdf-upload-SRWABEAH.js.map
