import {
  DocumentOpenError,
  MAX_DOCUMENT_PAGES,
  TRANSPARENT_BACKGROUND,
  canEncodeWebp,
  documentBaseName,
  documentPageName,
  normalizeRotation,
  pageImageSize,
  releaseCanvas,
  renderPageImage
} from "./chunk-VD6OK2YI.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-5XQ77ET7.js";
import "./chunk-LNIIKTP4.js";
import {
  isPptxFile
} from "./chunk-RARAVHPS.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-5JFUGOSL.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-B2VNOWRH.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-TYRJPE2T.js";
import {
  dialogClosed
} from "./chunk-TWYNJBM2.js";
import "./chunk-2LNHNEQI.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-SDYTAEQC.js";
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-Z6FZWLVS.js";
import "./chunk-IBXO3PAX.js";
import {
  TranslatePipe
} from "./chunk-TSKCNC7U.js";
import {
  MatOption
} from "./chunk-HMX5MHDB.js";
import "./chunk-ZJ4GPTT6.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-CBBV6P4G.js";
import {
  IconComponent
} from "./chunk-UZSJECBZ.js";
import "./chunk-7Y7SMIGA.js";
import {
  i18n,
  notifyError
} from "./chunk-5AOQ34DQ.js";
import "./chunk-6LL6GMYR.js";
import "./chunk-27UTROZS.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-QJCBPHNX.js";
import "./chunk-D2JGUGS5.js";
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5SPB2BCN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GLT7DQUO.js";

// apps/signage-manager/src/app/shared/document-import-modal.component.ts
var _c0 = (a0) => ({ example: a0 });
var _c1 = (a0) => ({ count: a0 });
var _c2 = (a0, a1) => ({ current: a0, total: a1 });
var _c3 = (a0) => ({ name: a0 });
var _c4 = (a0) => ({ page: a0 });
var _c5 = (a0, a1) => ({ count: a0, total: a1 });
var _forTrack0 = ($index, $item) => $item.number;
function DocumentImportModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" \xB7 ", \u0275\u0275pipeBind2(1, 1, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_QUEUE", \u0275\u0275pureFunction2(4, _c2, ctx_r0.position.current, ctx_r0.position.total)), " ");
  }
}
function DocumentImportModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_CLOSE_ARIA"));
  }
}
function DocumentImportModalComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 48);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function DocumentImportModalComponent_Conditional_52_Template_input_ngModelChange_0_listener($event) {
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
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 3, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_BACKGROUND_COLOUR"));
    \u0275\u0275control();
  }
}
function DocumentImportModalComponent_Conditional_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "mat-spinner", 49);
    \u0275\u0275elementStart(2, "p", 50);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 1, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_LOADING", \u0275\u0275pureFunction1(4, _c3, ctx_r0.file_name)), " ");
  }
}
function DocumentImportModalComponent_For_101_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 61);
  }
  if (rf & 2) {
    const page_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", ctx_r0.is_transparent() ? null : ctx_r0.background());
    \u0275\u0275classProp("checkerboard", ctx_r0.is_transparent());
    \u0275\u0275property("src", page_r4.preview, \u0275\u0275sanitizeUrl);
  }
}
function DocumentImportModalComponent_For_101_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275element(1, "img", 63);
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
function DocumentImportModalComponent_For_101_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 55);
    \u0275\u0275text(1, " broken_image ");
    \u0275\u0275elementEnd();
  }
}
function DocumentImportModalComponent_For_101_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 56);
  }
}
function DocumentImportModalComponent_For_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 42)(1, "button", 51);
    \u0275\u0275listener("click", function DocumentImportModalComponent_For_101_Template_button_click_1_listener($event) {
      const page_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.togglePage(page_r4, $event));
    });
    \u0275\u0275elementStart(2, "div", 52);
    \u0275\u0275conditionalCreate(3, DocumentImportModalComponent_For_101_Conditional_3_Template, 1, 5, "img", 53)(4, DocumentImportModalComponent_For_101_Conditional_4_Template, 2, 9, "div", 54)(5, DocumentImportModalComponent_For_101_Conditional_5_Template, 2, 0, "icon", 55)(6, DocumentImportModalComponent_For_101_Conditional_6_Template, 1, 0, "mat-spinner", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 57)(8, "icon", 58);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 59);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "button", 60);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("click", function DocumentImportModalComponent_For_101_Template_button_click_13_listener() {
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 11, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_PAGE", \u0275\u0275pureFunction1(17, _c4, page_r4.number)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.importing());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(14, 14, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_ROTATE_PAGE", \u0275\u0275pureFunction1(19, _c4, page_r4.number)));
  }
}
function DocumentImportModalComponent_Conditional_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_SELECTED", \u0275\u0275pureFunction2(4, _c5, ctx_r0.selected_count(), ctx_r0.pages().length)), " ");
  }
}
function DocumentImportModalComponent_Conditional_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 47);
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
  transparent: TRANSPARENT_BACKGROUND
};
var DocumentImportModalComponent = class _DocumentImportModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.file_name = this._data.file_name;
    this.position = this._data.position;
    this.webp_supported = this._data.webp_supported;
    this.name = signal(
      documentBaseName(this._data.file_name),
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
    this.document = signal(
      null,
      ...ngDevMode ? [{ debugName: "document" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = computed(
      () => !this.document(),
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.pages = signal(
      [],
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
      () => documentPageName(this.base_name() || documentBaseName(""), 1),
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
      () => this.background() === TRANSPARENT_BACKGROUND,
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
    this._renderPage = renderPageImage;
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
    void this.load().then((loaded) => loaded && this.renderPreviews());
  }
  /**
   * Wait for the document to open, then list its pages. Closes the modal
   * when it does not open, as the caller shows the error. Runs once.
   * @returns Whether the document opened while the modal is open
   */
  load() {
    this._load ??= this._openDocument();
    return this._load;
  }
  async _openDocument() {
    let document_handle;
    try {
      document_handle = await this._data.document;
    } catch {
      this._dialog_ref.close();
      return false;
    }
    if (this._previews_abort.signal.aborted)
      return false;
    this.pages.set(Array.from({ length: document_handle.page_count }, (_, index) => ({
      number: index + 1,
      selected: true,
      rotation: 0,
      preview: "",
      preview_rotation: null,
      preview_failed: false
    })));
    this.document.set(document_handle);
    return true;
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
    const document_handle = this.document();
    if (this._previews_running || !document_handle)
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
          preview = await this._renderPreview(document_handle, page.number, rotation);
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
   * so a long document never holds more than one page image in memory.
   *
   * The modal cannot close while page sizes are read, as closing destroys
   * the document they are read from.
   */
  async importPages() {
    const base_name = this.base_name();
    const selected = this.pages().filter((page) => page.selected);
    const document_handle = this.document();
    if (this.importing() || !document_handle || !selected.length || !base_name) {
      return;
    }
    this.importing.set(true);
    const disable_close = this._dialog_ref.disableClose;
    this._dialog_ref.disableClose = true;
    try {
      const render_page = this._renderPage;
      const items = [];
      for (const page of selected) {
        const options = this._renderOptions(page);
        const name = documentPageName(base_name, page.number);
        const { width, height } = pageImageSize(await document_handle.pageSize(page.number), options);
        items.push({
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
        });
      }
      this._dialog_ref.close(items);
    } catch {
      this.importing.set(false);
      void this.renderPreviews();
      notifyError(i18n("SIGNAGE_MANAGER.DOCUMENT_IMPORT_ERR_INVALID", {
        name: this.file_name
      }));
    } finally {
      this._dialog_ref.disableClose = disable_close;
      this.importing.set(false);
    }
  }
  /** Object URL of a small PNG of a page, on transparency */
  async _renderPreview(document_handle, page_number, rotation) {
    const layer = await document_handle.renderLayer(page_number, rotation, PREVIEW_BOUNDS, this._previews_abort.signal);
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
    this.\u0275fac = function DocumentImportModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DocumentImportModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentImportModalComponent, selectors: [["document-import-modal"]], decls: 112, vars: 118, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "flex", "w-[calc(100%-1rem)]", "items-center", "rounded-sm", "border-none", "p-2"], [1, "min-w-0", "flex-1", "px-2"], ["id", "document-import-title", 1, "text-xl", "font-medium"], [1, "text-base-content/70", "truncate", "text-sm"], ["icon", "", "type", "button", "matRipple", "", "mat-dialog-close", ""], [1, "import-layout", "flex", "max-w-full", "gap-4", "px-2", "pb-2"], [1, "import-options", "border-base-300", "flex", "shrink-0", "flex-col", "rounded-xl", "border", "border-b-3", "p-2"], ["for", "document-import-name"], ["appearance", "outline", "subscriptSizing", "dynamic"], ["matInput", "", "id", "document-import-name", "name", "name", "aria-describedby", "document-import-name-hint", 3, "ngModelChange", "ngModel", "disabled"], ["id", "document-import-name-hint", 1, "name-hint", "p-2", "text-[0.625rem]"], ["id", "document-import-fit-label", "for", "document-import-fit"], ["appearance", "outline", 1, "no-subscript"], ["id", "document-import-fit", "name", "fit", "aria-labelledby", "document-import-fit-label", 3, "ngModelChange", "ngModel", "disabled"], ["value", "page"], ["value", "landscape"], ["value", "portrait"], ["id", "document-import-background-label", "for", "document-import-background", 1, "mt-2"], [1, "flex", "items-center", "gap-2"], ["appearance", "outline", 1, "no-subscript", "min-w-0", "flex-1"], ["id", "document-import-background", "name", "background", "aria-labelledby", "document-import-background-label", 3, "ngModelChange", "ngModel", "disabled"], ["value", "white"], ["value", "black"], ["value", "custom"], ["value", "transparent"], ["type", "color", "name", "custom_colour", 1, "border-base-300", "h-10", "w-12", "shrink-0", "cursor-pointer", "rounded-sm", "border", 3, "ngModel", "disabled"], ["id", "document-import-format-label", "for", "document-import-format", 1, "mt-2"], ["id", "document-import-format", "name", "format", "aria-labelledby", "document-import-format-label", 3, "ngModelChange", "ngModel", "disabled"], ["value", "webp", 3, "disabled"], ["value", "png"], ["id", "document-import-resolution-label", "for", "document-import-resolution", 1, "mt-2"], ["id", "document-import-resolution", "name", "resolution", "aria-labelledby", "document-import-resolution-label", 3, "ngModelChange", "ngModel", "disabled"], ["value", "4k"], ["value", "hd"], [1, "flex", "min-w-0", "flex-1", "flex-col", "overflow-hidden"], [1, "flex", "flex-wrap", "items-center", "gap-1", "pb-2"], ["btn", "", "matRipple", "", "type", "button", 1, "inverse", 3, "click", "disabled"], [1, "flex-1"], ["icon", "", "default", "", "matRipple", "", "type", "button", 3, "click", "disabled", "matTooltip"], [1, "text-base-content/70", "pb-2", "text-xs"], ["role", "status", 1, "loading-pages", "flex", "flex-1", "flex-col", "items-center", "justify-center", "gap-4", "p-4", "text-center"], [1, "page-grid", "grid", "flex-1", "gap-3", "overflow-auto", "p-1", 3, "hidden"], [1, "relative"], [1, "border-base-200", "flex", "flex-wrap", "items-center", "justify-end", "gap-2", "border-t", "px-4", "py-2"], ["role", "status", 1, "text-base-content/70", "min-w-0", "flex-1", "text-sm"], ["btn", "", "matRipple", "", "type", "button", "mat-dialog-close", "", 1, "inverse", "w-32", 3, "disabled"], ["btn", "", "matRipple", "", "type", "button", 1, "flex", "min-w-32", "items-center", "justify-center", "gap-2", 3, "click", "disabled"], ["diameter", "18", "aria-hidden", "true"], ["type", "color", "name", "custom_colour", 1, "border-base-300", "h-10", "w-12", "shrink-0", "cursor-pointer", "rounded-sm", "border", 3, "ngModelChange", "ngModel", "disabled"], ["diameter", "32", "aria-hidden", "true"], [1, "text-base-content/70", "text-sm"], ["type", "button", "matRipple", "", 1, "page-toggle", "bg-base-200", "flex", "w-full", "flex-col", "items-center", "gap-1", "rounded-sm", "p-2", "text-left", 3, "click", "disabled"], [1, "flex", "h-32", "w-full", "items-center", "justify-center", "overflow-hidden"], ["alt", "", 1, "block", "max-h-full", "max-w-full", "object-contain", 3, "checkerboard", "background-color", "src"], [1, "max-h-full", "max-w-full", "overflow-hidden", 3, "checkerboard", "fit-landscape", "fit-portrait", "background-color"], [1, "text-base-content/50", "text-4xl"], ["diameter", "24"], [1, "flex", "w-full", "items-center", "gap-1", "text-sm"], [1, "shrink-0", "text-lg"], [1, "truncate"], ["icon", "", "matRipple", "", "type", "button", 1, "bg-base-100", "absolute", "top-3", "right-3", "shadow", 3, "click", "disabled"], ["alt", "", 1, "block", "max-h-full", "max-w-full", "object-contain", 3, "src"], [1, "max-h-full", "max-w-full", "overflow-hidden"], ["alt", "", 1, "block", "h-full", "w-full", "object-contain", 3, "src"]], template: function DocumentImportModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275conditionalCreate(7, DocumentImportModalComponent_Conditional_7_Template, 2, 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(8, DocumentImportModalComponent_Conditional_8_Template, 4, 3, "button", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 5)(10, "section", 6);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementStart(12, "label", 7);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "mat-form-field", 8)(16, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function DocumentImportModalComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.name, $event) || (ctx.name = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 10);
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "label", 11);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "mat-form-field", 12)(24, "mat-select", 13);
        \u0275\u0275twoWayListener("ngModelChange", function DocumentImportModalComponent_Template_mat_select_ngModelChange_24_listener($event) {
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
        \u0275\u0275twoWayListener("ngModelChange", function DocumentImportModalComponent_Template_mat_select_ngModelChange_39_listener($event) {
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
        \u0275\u0275conditionalCreate(52, DocumentImportModalComponent_Conditional_52_Template, 2, 5, "input", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "label", 26);
        \u0275\u0275text(54);
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "mat-form-field", 12)(57, "mat-select", 27);
        \u0275\u0275twoWayListener("ngModelChange", function DocumentImportModalComponent_Template_mat_select_ngModelChange_57_listener($event) {
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
        \u0275\u0275twoWayListener("ngModelChange", function DocumentImportModalComponent_Template_mat_select_ngModelChange_68_listener($event) {
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
        \u0275\u0275listener("click", function DocumentImportModalComponent_Template_button_click_77_listener() {
          return ctx.selectAll(true);
        });
        \u0275\u0275text(78);
        \u0275\u0275pipe(79, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "button", 36);
        \u0275\u0275listener("click", function DocumentImportModalComponent_Template_button_click_80_listener() {
          return ctx.selectAll(false);
        });
        \u0275\u0275text(81);
        \u0275\u0275pipe(82, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(83, "div", 37);
        \u0275\u0275elementStart(84, "button", 38);
        \u0275\u0275pipe(85, "translate");
        \u0275\u0275pipe(86, "translate");
        \u0275\u0275listener("click", function DocumentImportModalComponent_Template_button_click_84_listener() {
          return ctx.rotateAll(-90);
        });
        \u0275\u0275elementStart(87, "icon");
        \u0275\u0275text(88, "rotate_left");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "button", 38);
        \u0275\u0275pipe(90, "translate");
        \u0275\u0275pipe(91, "translate");
        \u0275\u0275listener("click", function DocumentImportModalComponent_Template_button_click_89_listener() {
          return ctx.rotateAll(90);
        });
        \u0275\u0275elementStart(92, "icon");
        \u0275\u0275text(93, "rotate_right");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(94, "p", 39);
        \u0275\u0275text(95);
        \u0275\u0275pipe(96, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(97, DocumentImportModalComponent_Conditional_97_Template, 5, 6, "div", 40);
        \u0275\u0275elementStart(98, "ul", 41);
        \u0275\u0275pipe(99, "translate");
        \u0275\u0275repeaterCreate(100, DocumentImportModalComponent_For_101_Template, 17, 21, "li", 42, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(102, "footer", 43)(103, "div", 44);
        \u0275\u0275conditionalCreate(104, DocumentImportModalComponent_Conditional_104_Template, 2, 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "button", 45);
        \u0275\u0275text(106);
        \u0275\u0275pipe(107, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "button", 46);
        \u0275\u0275listener("click", function DocumentImportModalComponent_Template_button_click_108_listener() {
          return ctx.importPages();
        });
        \u0275\u0275conditionalCreate(109, DocumentImportModalComponent_Conditional_109_Template, 1, 0, "mat-spinner", 47);
        \u0275\u0275text(110);
        \u0275\u0275pipe(111, "translate");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 54, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_TITLE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.file_name, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.position ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.importing() ? 8 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 56, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_OPTIONS"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 58, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_NAME"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.name);
        \u0275\u0275property("disabled", ctx.importing());
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(19, 60, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_NAME_HINT", \u0275\u0275pureFunction1(114, _c0, ctx.example_name())), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 63, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_FIT"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.fit);
        \u0275\u0275property("disabled", ctx.importing());
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 65, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_FIT_PAGE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 67, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_FIT_LANDSCAPE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 69, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_FIT_PORTRAIT"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 71, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_BACKGROUND"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.background_mode);
        \u0275\u0275property("disabled", ctx.importing());
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 73, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_BACKGROUND_WHITE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 75, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_BACKGROUND_BLACK"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 77, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_BACKGROUND_CUSTOM"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 79, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_BACKGROUND_TRANSPARENT"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.background_mode() === "custom" ? 52 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(55, 81, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_FORMAT"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.format);
        \u0275\u0275property("disabled", ctx.importing());
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.webp_supported);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(60, 83, ctx.webp_supported ? "SIGNAGE_MANAGER.DOCUMENT_IMPORT_FORMAT_WEBP" : "SIGNAGE_MANAGER.DOCUMENT_IMPORT_FORMAT_WEBP_UNSUPPORTED"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(63, 85, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_FORMAT_PNG"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(66, 87, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_RESOLUTION"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.resolution);
        \u0275\u0275property("disabled", ctx.importing());
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(71, 89, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_RESOLUTION_4K"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(74, 91, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_RESOLUTION_HD"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.importing() || ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(79, 93, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_SELECT_ALL"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.importing() || ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(82, 95, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_SELECT_NONE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.importing() || ctx.loading())("matTooltip", \u0275\u0275pipeBind1(85, 97, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_ROTATE_ALL_LEFT"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(86, 99, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_ROTATE_ALL_LEFT"));
        \u0275\u0275advance(5);
        \u0275\u0275property("disabled", ctx.importing() || ctx.loading())("matTooltip", \u0275\u0275pipeBind1(90, 101, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_ROTATE_ALL_RIGHT"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(91, 103, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_ROTATE_ALL_RIGHT"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(96, 105, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_SELECT_HINT"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading() ? 97 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("hidden", ctx.loading());
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(99, 107, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_PAGES"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.pages());
        \u0275\u0275advance(4);
        \u0275\u0275conditional(!ctx.loading() ? 104 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.importing());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(107, 109, "COMMON.CANCEL"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.importing() || !ctx.selected_count() || !ctx.base_name());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.importing() ? 109 : -1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(111, 111, "SIGNAGE_MANAGER.DOCUMENT_IMPORT_START", \u0275\u0275pureFunction1(116, _c1, ctx.selected_count())), " ");
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
    ], styles: ["\n.import-layout[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.import-options[_ngcontent-%COMP%] {\n  width: 16rem;\n  overflow: auto;\n}\n.name-hint[_ngcontent-%COMP%] {\n  overflow-wrap: anywhere;\n}\n@media (min-width: 768px) {\n  .import-layout[_ngcontent-%COMP%] {\n    width: 64rem;\n    max-height: 70vh;\n  }\n}\n@media (max-width: 767.98px) {\n  .import-layout[_ngcontent-%COMP%] {\n    flex: 1;\n    flex-direction: column;\n    overflow: auto;\n  }\n  .import-options[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow: visible;\n  }\n}\n.page-toggle[_ngcontent-%COMP%] {\n  border: 2px solid transparent;\n  opacity: 0.5;\n}\n.page-toggle.selected[_ngcontent-%COMP%] {\n  border-color: var(--%NS%primary);\n  opacity: 1;\n}\n.selected-icon[_ngcontent-%COMP%] {\n  color: var(--%NS%primary);\n}\n.loading-pages[_ngcontent-%COMP%] {\n  min-height: 12rem;\n}\n.page-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));\n}\n.checkerboard[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-image:\n    conic-gradient(\n      #d4d4d4 25%,\n      transparent 0 50%,\n      #d4d4d4 0 75%,\n      transparent 0);\n  background-size: 12px 12px;\n}\n.fit-landscape[_ngcontent-%COMP%] {\n  aspect-ratio: 16 / 9;\n  width: 100%;\n}\n.fit-portrait[_ngcontent-%COMP%] {\n  aspect-ratio: 9 / 16;\n  height: 100%;\n}\n.page-toggle[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--%NS%color-primary, currentColor);\n  outline-offset: 2px;\n}\n/*# sourceMappingURL=document-import-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentImportModalComponent, [{
    type: Component,
    args: [{ selector: "document-import-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 flex w-[calc(100%-1rem)] items-center rounded-sm border-none p-2"
        >
            <div class="min-w-0 flex-1 px-2">
                <h2 id="document-import-title" class="text-xl font-medium">
                    {{ 'SIGNAGE_MANAGER.DOCUMENT_IMPORT_TITLE' | translate }}
                </h2>
                <p class="text-base-content/70 truncate text-sm">
                    {{ file_name }}
                    @if (position) {
                        \xB7
                        {{
                            'SIGNAGE_MANAGER.DOCUMENT_IMPORT_QUEUE'
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
                        'SIGNAGE_MANAGER.DOCUMENT_IMPORT_CLOSE_ARIA' | translate
                    "
                >
                    <icon>close</icon>
                </button>
            }
        </header>
        <div class="import-layout flex max-w-full gap-4 px-2 pb-2">
            <section
                class="import-options border-base-300 flex shrink-0 flex-col rounded-xl border border-b-3 p-2"
                [attr.aria-label]="
                    'SIGNAGE_MANAGER.DOCUMENT_IMPORT_OPTIONS' | translate
                "
            >
                <label for="document-import-name">
                    {{ 'SIGNAGE_MANAGER.DOCUMENT_IMPORT_NAME' | translate }}
                </label>
                <!-- The example name can wrap, so the hint takes the height
                     it needs rather than overlapping the next field -->
                <mat-form-field appearance="outline" subscriptSizing="dynamic">
                    <input
                        matInput
                        id="document-import-name"
                        name="name"
                        [(ngModel)]="name"
                        [disabled]="importing()"
                        aria-describedby="document-import-name-hint"
                    />
                </mat-form-field>
                <div
                    id="document-import-name-hint"
                    class="name-hint p-2 text-[0.625rem]"
                >
                    {{
                        'SIGNAGE_MANAGER.DOCUMENT_IMPORT_NAME_HINT'
                            | translate: { example: example_name() }
                    }}
                </div>

                <label id="document-import-fit-label" for="document-import-fit">
                    {{ 'SIGNAGE_MANAGER.DOCUMENT_IMPORT_FIT' | translate }}
                </label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select
                        id="document-import-fit"
                        name="fit"
                        aria-labelledby="document-import-fit-label"
                        [(ngModel)]="fit"
                        [disabled]="importing()"
                    >
                        <mat-option value="page">
                            {{
                                'SIGNAGE_MANAGER.DOCUMENT_IMPORT_FIT_PAGE'
                                    | translate
                            }}
                        </mat-option>
                        <mat-option value="landscape">
                            {{
                                'SIGNAGE_MANAGER.DOCUMENT_IMPORT_FIT_LANDSCAPE'
                                    | translate
                            }}
                        </mat-option>
                        <mat-option value="portrait">
                            {{
                                'SIGNAGE_MANAGER.DOCUMENT_IMPORT_FIT_PORTRAIT'
                                    | translate
                            }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>

                <label
                    id="document-import-background-label"
                    for="document-import-background"
                    class="mt-2"
                >
                    {{
                        'SIGNAGE_MANAGER.DOCUMENT_IMPORT_BACKGROUND' | translate
                    }}
                </label>
                <div class="flex items-center gap-2">
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript min-w-0 flex-1"
                    >
                        <mat-select
                            id="document-import-background"
                            name="background"
                            aria-labelledby="document-import-background-label"
                            [(ngModel)]="background_mode"
                            [disabled]="importing()"
                        >
                            <mat-option value="white">
                                {{
                                    'SIGNAGE_MANAGER.DOCUMENT_IMPORT_BACKGROUND_WHITE'
                                        | translate
                                }}
                            </mat-option>
                            <mat-option value="black">
                                {{
                                    'SIGNAGE_MANAGER.DOCUMENT_IMPORT_BACKGROUND_BLACK'
                                        | translate
                                }}
                            </mat-option>
                            <mat-option value="custom">
                                {{
                                    'SIGNAGE_MANAGER.DOCUMENT_IMPORT_BACKGROUND_CUSTOM'
                                        | translate
                                }}
                            </mat-option>
                            <mat-option value="transparent">
                                {{
                                    'SIGNAGE_MANAGER.DOCUMENT_IMPORT_BACKGROUND_TRANSPARENT'
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
                                'SIGNAGE_MANAGER.DOCUMENT_IMPORT_BACKGROUND_COLOUR'
                                    | translate
                            "
                        />
                    }
                </div>

                <label
                    id="document-import-format-label"
                    for="document-import-format"
                    class="mt-2"
                >
                    {{ 'SIGNAGE_MANAGER.DOCUMENT_IMPORT_FORMAT' | translate }}
                </label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select
                        id="document-import-format"
                        name="format"
                        aria-labelledby="document-import-format-label"
                        [(ngModel)]="format"
                        [disabled]="importing()"
                    >
                        <mat-option value="webp" [disabled]="!webp_supported">
                            {{
                                (webp_supported
                                    ? 'SIGNAGE_MANAGER.DOCUMENT_IMPORT_FORMAT_WEBP'
                                    : 'SIGNAGE_MANAGER.DOCUMENT_IMPORT_FORMAT_WEBP_UNSUPPORTED'
                                ) | translate
                            }}
                        </mat-option>
                        <mat-option value="png">
                            {{
                                'SIGNAGE_MANAGER.DOCUMENT_IMPORT_FORMAT_PNG'
                                    | translate
                            }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>

                <label
                    id="document-import-resolution-label"
                    for="document-import-resolution"
                    class="mt-2"
                >
                    {{
                        'SIGNAGE_MANAGER.DOCUMENT_IMPORT_RESOLUTION' | translate
                    }}
                </label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select
                        id="document-import-resolution"
                        name="resolution"
                        aria-labelledby="document-import-resolution-label"
                        [(ngModel)]="resolution"
                        [disabled]="importing()"
                    >
                        <mat-option value="4k">
                            {{
                                'SIGNAGE_MANAGER.DOCUMENT_IMPORT_RESOLUTION_4K'
                                    | translate
                            }}
                        </mat-option>
                        <mat-option value="hd">
                            {{
                                'SIGNAGE_MANAGER.DOCUMENT_IMPORT_RESOLUTION_HD'
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
                        class="inverse"
                        [disabled]="importing() || loading()"
                        (click)="selectAll(true)"
                    >
                        {{
                            'SIGNAGE_MANAGER.DOCUMENT_IMPORT_SELECT_ALL'
                                | translate
                        }}
                    </button>
                    <button
                        btn
                        matRipple
                        type="button"
                        class="inverse"
                        [disabled]="importing() || loading()"
                        (click)="selectAll(false)"
                    >
                        {{
                            'SIGNAGE_MANAGER.DOCUMENT_IMPORT_SELECT_NONE'
                                | translate
                        }}
                    </button>
                    <div class="flex-1"></div>
                    <button
                        icon
                        default
                        matRipple
                        type="button"
                        [disabled]="importing() || loading()"
                        (click)="rotateAll(-90)"
                        [matTooltip]="
                            'SIGNAGE_MANAGER.DOCUMENT_IMPORT_ROTATE_ALL_LEFT'
                                | translate
                        "
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.DOCUMENT_IMPORT_ROTATE_ALL_LEFT'
                                | translate
                        "
                    >
                        <icon>rotate_left</icon>
                    </button>
                    <button
                        icon
                        default
                        matRipple
                        type="button"
                        [disabled]="importing() || loading()"
                        (click)="rotateAll(90)"
                        [matTooltip]="
                            'SIGNAGE_MANAGER.DOCUMENT_IMPORT_ROTATE_ALL_RIGHT'
                                | translate
                        "
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.DOCUMENT_IMPORT_ROTATE_ALL_RIGHT'
                                | translate
                        "
                    >
                        <icon>rotate_right</icon>
                    </button>
                </div>
                <p class="text-base-content/70 pb-2 text-xs">
                    {{
                        'SIGNAGE_MANAGER.DOCUMENT_IMPORT_SELECT_HINT'
                            | translate
                    }}
                </p>
                @if (loading()) {
                    <div
                        class="loading-pages flex flex-1 flex-col items-center justify-center gap-4 p-4 text-center"
                        role="status"
                    >
                        <mat-spinner diameter="32" aria-hidden="true" />
                        <p class="text-base-content/70 text-sm">
                            {{
                                'SIGNAGE_MANAGER.DOCUMENT_IMPORT_LOADING'
                                    | translate: { name: file_name }
                            }}
                        </p>
                    </div>
                }
                <ul
                    class="page-grid grid flex-1 gap-3 overflow-auto p-1"
                    [hidden]="loading()"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.DOCUMENT_IMPORT_PAGES' | translate
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
                                            'SIGNAGE_MANAGER.DOCUMENT_IMPORT_PAGE'
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
                                    'SIGNAGE_MANAGER.DOCUMENT_IMPORT_ROTATE_PAGE'
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
                @if (!loading()) {
                    {{
                        'SIGNAGE_MANAGER.DOCUMENT_IMPORT_SELECTED'
                            | translate
                                : {
                                      count: selected_count(),
                                      total: pages().length,
                                  }
                    }}
                }
            </div>
            <button
                btn
                matRipple
                type="button"
                class="inverse w-32"
                mat-dialog-close
                [disabled]="importing()"
            >
                {{ 'COMMON.CANCEL' | translate }}
            </button>
            <button
                btn
                matRipple
                type="button"
                class="flex min-w-32 items-center justify-center gap-2"
                [disabled]="importing() || !selected_count() || !base_name()"
                (click)="importPages()"
            >
                @if (importing()) {
                    <mat-spinner diameter="18" aria-hidden="true" />
                }
                {{
                    'SIGNAGE_MANAGER.DOCUMENT_IMPORT_START'
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
    ], styles: ["/* angular:styles/component:css;5f541200454881497e1479219947680e235344015e677bff41d1116a351c859a;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/shared/document-import-modal.component.ts */\n.import-layout {\n  overflow: hidden;\n}\n.import-options {\n  width: 16rem;\n  overflow: auto;\n}\n.name-hint {\n  overflow-wrap: anywhere;\n}\n@media (min-width: 768px) {\n  .import-layout {\n    width: 64rem;\n    max-height: 70vh;\n  }\n}\n@media (max-width: 767.98px) {\n  .import-layout {\n    flex: 1;\n    flex-direction: column;\n    overflow: auto;\n  }\n  .import-options {\n    width: 100%;\n    overflow: visible;\n  }\n}\n.page-toggle {\n  border: 2px solid transparent;\n  opacity: 0.5;\n}\n.page-toggle.selected {\n  border-color: var(--primary);\n  opacity: 1;\n}\n.selected-icon {\n  color: var(--primary);\n}\n.loading-pages {\n  min-height: 12rem;\n}\n.page-grid {\n  grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));\n}\n.checkerboard {\n  background-color: #fff;\n  background-image:\n    conic-gradient(\n      #d4d4d4 25%,\n      transparent 0 50%,\n      #d4d4d4 0 75%,\n      transparent 0);\n  background-size: 12px 12px;\n}\n.fit-landscape {\n  aspect-ratio: 16 / 9;\n  width: 100%;\n}\n.fit-portrait {\n  aspect-ratio: 9 / 16;\n  height: 100%;\n}\n.page-toggle:focus-visible {\n  outline: 2px solid var(--color-primary, currentColor);\n  outline-offset: 2px;\n}\n/*# sourceMappingURL=document-import-modal.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentImportModalComponent, { className: "DocumentImportModalComponent", filePath: "apps/signage-manager/src/app/shared/document-import-modal.component.ts", lineNumber: 652 });
})();

// apps/signage-manager/src/app/shared/pptx-import-confirm-modal.component.ts
var PptxImportConfirmModalComponent = class _PptxImportConfirmModalComponent {
  constructor() {
    this.file_name = inject(MAT_DIALOG_DATA).file_name;
  }
  static {
    this.\u0275fac = function PptxImportConfirmModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PptxImportConfirmModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PptxImportConfirmModalComponent, selectors: [["pptx-import-confirm-modal"]], decls: 42, vars: 24, consts: [[1, "flex", "items-center", "bg-base-200", "sticky", "top-0", "z-10", "m-2", "h-14", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "text-2xl"], ["mat-dialog-title", "", 1, "px-2", "text-xl", "font-medium"], [1, "flex", "w-md", "max-w-[85vw]", "flex-col", "items-center", "space-y-4", "p-4"], [1, "text-center"], [1, "break-all"], [1, "flex", "w-full", "flex-col", "gap-3", "text-sm"], [1, "flex", "flex-col", "gap-1"], [1, "border-base-300", "bg-base-200", "inline-flex", "w-fit", "items-center", "gap-1.5", "rounded-full", "border", "px-3", "py-1", "text-xs", "font-medium"], ["viewBox", "0 0 88 88", "xmlns", "http://www.w3.org/2000/svg", "aria-hidden", "true", 1, "h-4", "w-4"], ["d", "m0 12.402 35.687-4.86.016 34.423-35.67.203zm35.67 33.529.028 34.453L.028 75.48.026 45.7zm4.326-39.025L87.314 0v41.527l-47.318.376zm47.329 39.349-.011 41.34-47.318-6.678-.066-34.739z", "fill", "#00adef"], [1, "list-disc", "pl-5"], ["viewBox", "0 0 814 1000", "xmlns", "http://www.w3.org/2000/svg", "aria-hidden", "true", 1, "h-4", "w-4"], ["d", "M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z", "fill", "currentColor"], [1, "bg-base-200", "sticky", "bottom-0", "m-2", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "border-none", "p-2"], ["btn", "", "matRipple", "", "type", "button", 1, "inverse", "bg-base-100", "flex-1", 3, "mat-dialog-close"], ["btn", "", "matRipple", "", "type", "button", 1, "flex-1", 3, "mat-dialog-close"]], template: function PptxImportConfirmModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "icon", 1);
        \u0275\u0275text(2, "warning");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "h2", 2);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "main", 3)(7, "p", 4)(8, "b", 5);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "br");
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 6)(14, "section", 7)(15, "span", 8);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(16, "svg", 9);
        \u0275\u0275element(17, "path", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275text(18, " Windows ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(19, "ul", 11)(20, "li");
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "li");
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "section", 7)(27, "span", 8);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(28, "svg", 12);
        \u0275\u0275element(29, "path", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275text(30, " macOS ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(31, "ul", 11)(32, "li");
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(35, "footer", 14)(36, "button", 15);
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "button", 16);
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 10, "SIGNAGE_MANAGER.PPTX_IMPORT_CONFIRM_TITLE"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.file_name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 12, "SIGNAGE_MANAGER.PPTX_IMPORT_WARNING"), " ");
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 14, "SIGNAGE_MANAGER.PPTX_IMPORT_EXPORT_WINDOWS_IMAGES"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 16, "SIGNAGE_MANAGER.PPTX_IMPORT_EXPORT_WINDOWS_VIDEO"), " ");
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 18, "SIGNAGE_MANAGER.PPTX_IMPORT_EXPORT_MAC"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("mat-dialog-close", void 0);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 20, "COMMON.CANCEL"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("mat-dialog-close", true);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 22, "COMMON.CONTINUE"), " ");
      }
    }, dependencies: [MatDialogModule, MatDialogClose, MatDialogTitle, MatRippleModule, MatRipple, IconComponent, TranslatePipe], styles: ["\nh2[mat-dialog-title][_ngcontent-%COMP%] {\n  color: inherit;\n  font-family: inherit;\n  letter-spacing: inherit;\n  margin: 0;\n  padding: 0;\n}\nh2[mat-dialog-title][_ngcontent-%COMP%]::before {\n  display: none;\n}\n/*# sourceMappingURL=pptx-import-confirm-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PptxImportConfirmModalComponent, [{
    type: Component,
    args: [{ selector: "pptx-import-confirm-modal", template: `
        <header
            class="flex items-center bg-base-200 sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <icon class="text-2xl">warning</icon>
            <h2 mat-dialog-title class="px-2 text-xl font-medium">
                {{ 'SIGNAGE_MANAGER.PPTX_IMPORT_CONFIRM_TITLE' | translate }}
            </h2>
        </header>
        <main
            class="flex w-md max-w-[85vw] flex-col items-center space-y-4 p-4"
        >
            <p class="text-center">
                <b class="break-all">{{ file_name }}</b>
                <br />
                {{ 'SIGNAGE_MANAGER.PPTX_IMPORT_WARNING' | translate }}
            </p>
            <div class="flex w-full flex-col gap-3 text-sm">
                <section class="flex flex-col gap-1">
                    <span
                        class="border-base-300 bg-base-200 inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium"
                    >
                        <!-- Windows logo from svgl.app -->
                        <svg
                            viewBox="0 0 88 88"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4"
                            aria-hidden="true"
                        >
                            <path
                                d="m0 12.402 35.687-4.86.016 34.423-35.67.203zm35.67 33.529.028 34.453L.028 75.48.026 45.7zm4.326-39.025L87.314 0v41.527l-47.318.376zm47.329 39.349-.011 41.34-47.318-6.678-.066-34.739z"
                                fill="#00adef"
                            />
                        </svg>
                        Windows
                    </span>
                    <ul class="list-disc pl-5">
                        <li>
                            {{
                                'SIGNAGE_MANAGER.PPTX_IMPORT_EXPORT_WINDOWS_IMAGES'
                                    | translate
                            }}
                        </li>
                        <li>
                            {{
                                'SIGNAGE_MANAGER.PPTX_IMPORT_EXPORT_WINDOWS_VIDEO'
                                    | translate
                            }}
                        </li>
                    </ul>
                </section>
                <section class="flex flex-col gap-1">
                    <span
                        class="border-base-300 bg-base-200 inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium"
                    >
                        <!-- Apple logo from svgl.app. It takes the text
                             colour, so it shows in light and dark themes. -->
                        <svg
                            viewBox="0 0 814 1000"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4"
                            aria-hidden="true"
                        >
                            <path
                                d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"
                                fill="currentColor"
                            />
                        </svg>
                        macOS
                    </span>
                    <ul class="list-disc pl-5">
                        <li>
                            {{
                                'SIGNAGE_MANAGER.PPTX_IMPORT_EXPORT_MAC'
                                    | translate
                            }}
                        </li>
                    </ul>
                </section>
            </div>
        </main>
        <footer
            class="bg-base-200 sticky bottom-0 m-2 flex items-center justify-center space-x-2 rounded-sm border-none p-2"
        >
            <button
                btn
                matRipple
                type="button"
                class="inverse bg-base-100 flex-1"
                [mat-dialog-close]="undefined"
            >
                {{ 'COMMON.CANCEL' | translate }}
            </button>
            <button
                btn
                matRipple
                type="button"
                class="flex-1"
                [mat-dialog-close]="true"
            >
                {{ 'COMMON.CONTINUE' | translate }}
            </button>
        </footer>
    `, imports: [MatDialogModule, MatRippleModule, IconComponent, TranslatePipe], styles: ["/* angular:styles/component:css;667dd6e87a0f8ee70b196ba72e30636efb97b1c4a6897353c2c25bfa7854dc6c;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/shared/pptx-import-confirm-modal.component.ts */\nh2[mat-dialog-title] {\n  color: inherit;\n  font-family: inherit;\n  letter-spacing: inherit;\n  margin: 0;\n  padding: 0;\n}\nh2[mat-dialog-title]::before {\n  display: none;\n}\n/*# sourceMappingURL=pptx-import-confirm-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PptxImportConfirmModalComponent, { className: "PptxImportConfirmModalComponent", filePath: "apps/signage-manager/src/app/shared/pptx-import-confirm-modal.component.ts", lineNumber: 132 });
})();

// apps/signage-manager/src/app/media/document-upload.ts
async function importDocumentPages(dialog, files, openDocument) {
  const items = [];
  const documents = [];
  const close = async () => {
    await Promise.all(documents.map((item) => item.destroy().catch(() => void 0)));
  };
  try {
    for (const [index, file] of files.entries()) {
      const position = files.length > 1 ? { current: index + 1, total: files.length } : void 0;
      const result = await importDocument(dialog, file, position, openDocument);
      if (!result)
        continue;
      items.push(...result.items);
      documents.push(result.document);
    }
  } catch (error) {
    await close();
    throw error;
  }
  return { items, close };
}
var OPEN_ERROR_KEYS = {
  password: "SIGNAGE_MANAGER.DOCUMENT_IMPORT_ERR_PASSWORD",
  invalid: "SIGNAGE_MANAGER.DOCUMENT_IMPORT_ERR_INVALID",
  too_many_pages: "SIGNAGE_MANAGER.DOCUMENT_IMPORT_ERR_TOO_MANY_PAGES"
};
function openErrorKey(error) {
  const reason = error?.reason;
  return reason && OPEN_ERROR_KEYS[reason] || "SIGNAGE_MANAGER.DOCUMENT_IMPORT_ERR_LOAD";
}
async function openWithinLimit(file, openDocument) {
  const document_handle = await openDocument(file);
  if (document_handle.page_count > MAX_DOCUMENT_PAGES) {
    await document_handle.destroy().catch(() => void 0);
    throw new DocumentOpenError("too_many_pages", `More than ${MAX_DOCUMENT_PAGES} pages`);
  }
  return document_handle;
}
async function confirmPptxImport(dialog, file) {
  const data = { file_name: file.name };
  const ref = dialog.open(PptxImportConfirmModalComponent, { data });
  return !!await dialogClosed(ref);
}
async function importDocument(dialog, file, position, openDocument) {
  if (isPptxFile(file) && !await confirmPptxImport(dialog, file)) {
    return void 0;
  }
  const opening = openWithinLimit(file, openDocument);
  const opened = opening.catch((error) => {
    notifyError(i18n(openErrorKey(error), {
      name: file.name,
      max: MAX_DOCUMENT_PAGES
    }));
    return void 0;
  });
  let items;
  try {
    const data = {
      file_name: file.name,
      document: opening,
      webp_supported: canEncodeWebp(),
      position
    };
    const ref = dialog.open(DocumentImportModalComponent, {
      data,
      panelClass: "mobile-fullscreen",
      ariaLabelledBy: "document-import-title"
    });
    items = await dialogClosed(ref);
  } finally {
    if (!items?.length) {
      void opened.then((handle) => handle?.destroy().catch(() => void 0));
    }
  }
  if (!items?.length)
    return void 0;
  const document_handle = await opened;
  return document_handle ? { items, document: document_handle } : void 0;
}
export {
  importDocumentPages
};
//# debugId=5bd36cef-31a0-5f2c-9836-9dfe3bec5ee0
//# sourceMappingURL=document-upload-2QJ2DZEY.js.map
