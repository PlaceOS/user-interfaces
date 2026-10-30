import {
  MapManagementService,
  isApiUpload
} from "./chunk-SBHE7G5D.js";
import "./chunk-AOTTJ473.js";
import {
  unsavedChangesGuard
} from "./chunk-GCDMP5KW.js";
import "./chunk-ULYE3EO5.js";
import "./chunk-EHX3V5FU.js";
import {
  SimpleTableComponent
} from "./chunk-RILX3QL7.js";
import {
  SearchbarComponent
} from "./chunk-CDW2BPYF.js";
import {
  getMapDetails
} from "./chunk-JMLSI66A.js";
import "./chunk-IKTCFBO2.js";
import {
  ApplicationSidebarComponent
} from "./chunk-3EID3XCP.js";
import "./chunk-PYRC4DWW.js";
import "./chunk-5WW5YMHZ.js";
import "./chunk-4D2YZQAY.js";
import "./chunk-P54RLJBR.js";
import "./chunk-WROB6MNN.js";
import "./chunk-RFCENQ5H.js";
import "./chunk-BUMW524D.js";
import "./chunk-BFWJNWXH.js";
import "./chunk-BZIPWESA.js";
import "./chunk-V3BZRUGF.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-WZBYY54Y.js";
import "./chunk-I52JNSOJ.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-PAJWQ7AP.js";
import "./chunk-YEGWJU2K.js";
import "./chunk-TW5QCAQQ.js";
import "./chunk-2K5G7CFD.js";
import "./chunk-2QAVTKHL.js";
import "./chunk-5GXWVSSG.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-54KE5JKV.js";
import "./chunk-CV6KPFJH.js";
import "./chunk-OX3RHFRB.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-QWYXFXJS.js";
import {
  MatOption
} from "./chunk-G7ZLBZI3.js";
import "./chunk-RIENTTXY.js";
import "./chunk-3TOA4G7Y.js";
import "./chunk-7G72PXFC.js";
import "./chunk-7T3N6W45.js";
import "./chunk-QKZR3R5Z.js";
import "./chunk-CW7X43IG.js";
import {
  TranslatePipe
} from "./chunk-IGQY3INR.js";
import "./chunk-I75UA7CR.js";
import {
  Clipboard,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-ACYV7NM4.js";
import {
  IconComponent
} from "./chunk-QVU2YYRL.js";
import {
  i18n,
  notifySuccess
} from "./chunk-JYQPCPCB.js";
import "./chunk-OWTWWOGC.js";
import "./chunk-ZEZKWG7M.js";
import {
  MatRippleModule
} from "./chunk-3WBJTYSG.js";
import {
  MatRipple
} from "./chunk-QSD4JXRO.js";
import "./chunk-GTXMU3AV.js";
import "./chunk-DK3CVVJN.js";
import {
  Router
} from "./chunk-N4RTV55R.js";
import {
  Component,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpureFunction5,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QAVCSYNX.js";
import "./chunk-653SOEEV.js";

// apps/concierge/src/app/map-manager/map-manager.component.ts
var _c0 = (a0) => ({ count: a0 });
var _c1 = (a0) => ({ key: "map_id", name: " ", content: a0, size: "7rem", sortable: false });
var _c2 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c3 = (a0) => ({ key: "building", name: a0, size: "14rem" });
var _c4 = (a0, a1) => ({ key: "map_short", name: a0, content: a1, size: "18rem" });
var _c5 = (a0) => ({ key: "actions", name: " ", content: a0, size: "6.25rem", sortable: false });
var _c6 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
var _forTrack0 = ($index, $item) => $item.id;
function MapManagerComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const building_r1 = ctx.$implicit;
    \u0275\u0275property("value", building_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", building_r1.display_name || building_r1.name, " ");
  }
}
function MapManagerComponent_ng_template_37_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 27);
    \u0275\u0275listener("error", function MapManagerComponent_ng_template_37_Conditional_1_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r2);
      const row_r3 = \u0275\u0275nextContext().row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.markBroken(row_r3.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().row;
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl)("alt", row_r3.name);
  }
}
function MapManagerComponent_ng_template_37_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 26);
    \u0275\u0275text(1, "map");
    \u0275\u0275elementEnd();
  }
}
function MapManagerComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275conditionalCreate(1, MapManagerComponent_ng_template_37_Conditional_1_Template, 1, 2, "img", 25)(2, MapManagerComponent_ng_template_37_Conditional_2_Template, 2, 0, "icon", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const row_r3 = ctx.row;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_6_0 = ctx_r3.thumbnailSrc(row_r3)) ? 1 : 2, tmp_6_0);
  }
}
function MapManagerComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function MapManagerComponent_ng_template_39_Template_button_click_0_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copyToClipboard(row_r6.id));
    });
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    const data_r7 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r6.id, " ");
  }
}
function MapManagerComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "a", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 33);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function MapManagerComponent_ng_template_41_Template_button_click_4_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copyToClipboard(row_r9.map_id));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "content_copy");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r9 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("title", row_r9.map_id);
    \u0275\u0275advance();
    \u0275\u0275property("href", row_r9.map_id, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r9.map_label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(5, 5, "APP.CONCIERGE.MAPS_COPY_URL"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 7, "APP.CONCIERGE.MAPS_COPY_URL"));
  }
}
function MapManagerComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "button", 33);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("click", function MapManagerComponent_ng_template_43_Template_button_click_1_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editMap(row_r11));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 35);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-menu", null, 4)(12, "a", 36)(13, "div", 12)(14, "icon", 37);
    \u0275\u0275text(15, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "button", 38);
    \u0275\u0275listener("click", function MapManagerComponent_ng_template_43_Template_button_click_19_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editLevel(row_r11));
    });
    \u0275\u0275elementStart(20, "div", 12)(21, "icon", 37);
    \u0275\u0275text(22, "tune");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const row_r11 = ctx.row;
    const menu_r12 = \u0275\u0275reference(11);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 7, "APP.CONCIERGE.MAPS_EDIT"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 9, "APP.CONCIERGE.MAPS_EDIT"));
    \u0275\u0275advance(5);
    \u0275\u0275property("matMenuTriggerFor", menu_r12);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 11, "COMMON.MORE_OPTIONS"));
    \u0275\u0275advance(6);
    \u0275\u0275property("href", ctx_r3.levelStudioUrl(row_r11), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 13, "APP.CONCIERGE.MAPS_OPEN_STUDIO"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 15, "APP.CONCIERGE.MAPS_EDIT_LEVEL"));
  }
}
var MapManagerComponent = class _MapManagerComponent {
  constructor() {
    this._manager = inject(MapManagementService);
    this._router = inject(Router);
    this._clipboard = inject(Clipboard);
    this._thumbnails = signal(
      /* @__PURE__ */ new Map(),
      ...ngDevMode ? [{ debugName: "_thumbnails" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._loading = /* @__PURE__ */ new Set();
    this.rows = this._manager.rows;
    this.options = this._manager.options;
    this.buildings = this._manager.buildings;
    this.broken = signal(
      /* @__PURE__ */ new Set(),
      ...ngDevMode ? [{ debugName: "broken" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.building_count = computed(
      () => this.buildings().length,
      ...ngDevMode ? [{ debugName: "building_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.studio_url = computed(
      () => this._manager.studioUrl(),
      ...ngDevMode ? [{ debugName: "studio_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      for (const row of this.rows())
        this._loadThumbnail(row.map_id);
    });
  }
  ngOnDestroy() {
    for (const url of this._thumbnails().values()) {
      if (url)
        URL.revokeObjectURL(url);
    }
  }
  /** The image to show for a row: the map fetched with the session's token, or nothing until it arrives or when it failed. */
  thumbnailSrc(row) {
    if (this.broken().has(row.id))
      return null;
    const loaded = this._thumbnails().get(row.map_id);
    if (loaded !== void 0)
      return loaded || null;
    return isApiUpload(row.map_id) ? null : row.map_id;
  }
  async _loadThumbnail(url) {
    if (!url || this._loading.has(url))
      return;
    this._loading.add(url);
    try {
      const details = await getMapDetails(url);
      const object_url = URL.createObjectURL(new Blob([details.raw_data], { type: "image/svg+xml" }));
      this._thumbnails.update((map) => new Map(map).set(url, object_url));
    } catch {
      this._thumbnails.update((map) => new Map(map).set(url, ""));
    }
  }
  setSearch(search) {
    this._manager.setSearchString(search);
  }
  setBuilding(building) {
    this._manager.setFilters({ building: building || void 0 });
  }
  editMap(row) {
    this._router.navigate(["/map-management", row.id]);
  }
  /** Map Studio on the level of the row */
  levelStudioUrl(row) {
    return this._manager.studioUrl(row.id);
  }
  editLevel(row) {
    this._manager.editLevel(row.level);
  }
  markBroken(id) {
    this.broken.update((set) => /* @__PURE__ */ new Set([...set, id]));
  }
  copyToClipboard(value) {
    if (this._clipboard.copy(value)) {
      notifySuccess(i18n("APP.CONCIERGE.MAPS_COPIED"));
    }
  }
  static {
    this.\u0275fac = function MapManagerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MapManagerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MapManagerComponent, selectors: [["", "app-map-manager", ""]], decls: 45, vars: 50, consts: [["thumbnail_template", ""], ["name_template", ""], ["url_template", ""], ["action_template", ""], ["menu", "matMenu"], [1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "flex", "items-center", "space-x-2", "px-8", "pt-4"], [1, "text-2xl", "font-medium"], [1, "w-2", "flex-1"], [3, "modelChange"], ["btn", "", "matRipple", "", "target", "_blank", "rel", "opener", 1, "w-52", "whitespace-nowrap", 3, "href"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"], [1, "bg-base-100", "flex", "h-20", "items-center", "space-x-2", "px-8"], ["appearance", "outline", 1, "no-subscript", "w-60"], [3, "ngModelChange", "ngModel", "placeholder"], ["value", ""], [3, "value"], [1, "text-sm", "opacity-70"], [1, "content-area", "relative", "flex-1"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], [1, "block", "min-w-4xl", "text-sm", 3, "data", "empty_message", "columns", "sortable"], [1, "h-20", "w-full"], [1, "bg-base-200", "m-2", "flex", "h-14", "w-24", "items-center", "justify-center", "overflow-hidden", "rounded"], ["loading", "lazy", 1, "max-h-full", "max-w-full", 3, "src", "alt"], [1, "text-2xl", "opacity-40"], ["loading", "lazy", 1, "max-h-full", "max-w-full", 3, "error", "src", "alt"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, "font-mono", "text-[0.625rem]", "opacity-70"], [1, "flex", "w-full", "items-center", "gap-1", "px-2"], [1, "flex-1", "truncate", "font-mono", "text-xs", 3, "title"], ["target", "_blank", 1, "text-info", "underline", 3, "href"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], [1, "flex", "w-full", "items-center", "justify-end", "gap-2", "p-2"], ["icon", "", "default", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", "target", "_blank", "rel", "opener", 3, "href"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click"]], template: function MapManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 5);
        \u0275\u0275element(1, "app-sidebar");
        \u0275\u0275elementStart(2, "main", 6)(3, "div", 7)(4, "h2", 8);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "div", 9);
        \u0275\u0275elementStart(8, "searchbar", 10);
        \u0275\u0275listener("modelChange", function MapManagerComponent_Template_searchbar_modelChange_8_listener($event) {
          return ctx.setSearch($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "a", 11)(10, "div", 12)(11, "icon");
        \u0275\u0275text(12, "open_in_new");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 13);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(16, "div", 14)(17, "mat-form-field", 15)(18, "mat-select", 16);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275listener("ngModelChange", function MapManagerComponent_Template_mat_select_ngModelChange_18_listener($event) {
          return ctx.setBuilding($event);
        });
        \u0275\u0275elementStart(20, "mat-option", 17);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(23, MapManagerComponent_For_24_Template, 2, 2, "mat-option", 18, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "div", 9);
        \u0275\u0275elementStart(26, "div", 19);
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 20)(30, "div", 21);
        \u0275\u0275element(31, "simple-table", 22);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275element(36, "div", 23);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(37, MapManagerComponent_ng_template_37_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(39, MapManagerComponent_ng_template_39_Template, 5, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(41, MapManagerComponent_ng_template_41_Template, 9, 9, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(43, MapManagerComponent_ng_template_43_Template, 26, 17, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const thumbnail_template_r13 = \u0275\u0275reference(38);
        const name_template_r14 = \u0275\u0275reference(40);
        const url_template_r15 = \u0275\u0275reference(42);
        const action_template_r16 = \u0275\u0275reference(44);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 11, "APP.CONCIERGE.MAPS_HEADER"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("href", ctx.studio_url(), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 13, "APP.CONCIERGE.MAPS_OPEN_STUDIO"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.options().building || "")("placeholder", \u0275\u0275pipeBind1(19, 15, "APP.CONCIERGE.MAPS_ALL_BUILDINGS"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 17, "APP.CONCIERGE.MAPS_ALL_BUILDINGS"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.buildings());
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(28, 19, "APP.CONCIERGE.MAPS_COUNT", \u0275\u0275pureFunction1(30, _c0, ctx.rows().length)), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("data", ctx.rows())("empty_message", \u0275\u0275pipeBind1(32, 22, "APP.CONCIERGE.MAPS_EMPTY"))("columns", \u0275\u0275pureFunction5(44, _c6, \u0275\u0275pureFunction1(32, _c1, thumbnail_template_r13), \u0275\u0275pureFunction2(34, _c2, \u0275\u0275pipeBind1(33, 24, "APP.CONCIERGE.LEVELS_NAME"), name_template_r14), \u0275\u0275pureFunction1(37, _c3, \u0275\u0275pipeBind1(34, 26, "RESOURCE.BUILDING")), \u0275\u0275pureFunction2(39, _c4, \u0275\u0275pipeBind1(35, 28, "APP.CONCIERGE.LEVELS_MAP_URL"), url_template_r15), \u0275\u0275pureFunction1(42, _c5, action_template_r16)))("sortable", true);
      }
    }, dependencies: [
      ApplicationSidebarComponent,
      SearchbarComponent,
      SimpleTableComponent,
      IconComponent,
      FormsModule,
      NgControlStatus,
      NgModel,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--%NS%base-100);\n}\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25rem;\n}\n/*# sourceMappingURL=map-manager.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapManagerComponent, [{
    type: Component,
    args: [{ selector: "[app-map-manager]", template: `
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <div class="flex items-center space-x-2 px-8 pt-4">
                    <h2 class="text-2xl font-medium">
                        {{ 'APP.CONCIERGE.MAPS_HEADER' | translate }}
                    </h2>
                    <div class="w-2 flex-1"></div>
                    <searchbar (modelChange)="setSearch($event)"></searchbar>
                    <a
                        btn
                        matRipple
                        class="w-52 whitespace-nowrap"
                        target="_blank"
                        rel="opener"
                        [href]="studio_url()"
                    >
                        <div class="flex items-center space-x-2">
                            <icon>open_in_new</icon>
                            <div class="pr-2">
                                {{
                                    'APP.CONCIERGE.MAPS_OPEN_STUDIO' | translate
                                }}
                            </div>
                        </div>
                    </a>
                </div>
                <div class="bg-base-100 flex h-20 items-center space-x-2 px-8">
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript w-60"
                    >
                        <mat-select
                            [ngModel]="options().building || ''"
                            (ngModelChange)="setBuilding($event)"
                            [placeholder]="
                                'APP.CONCIERGE.MAPS_ALL_BUILDINGS' | translate
                            "
                        >
                            <mat-option value="">
                                {{
                                    'APP.CONCIERGE.MAPS_ALL_BUILDINGS'
                                        | translate
                                }}
                            </mat-option>
                            @for (building of buildings(); track building.id) {
                                <mat-option [value]="building.id">
                                    {{ building.display_name || building.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    <div class="w-2 flex-1"></div>
                    <div class="text-sm opacity-70">
                        {{
                            'APP.CONCIERGE.MAPS_COUNT'
                                | translate: { count: rows().length }
                        }}
                    </div>
                </div>
                <div class="content-area relative flex-1">
                    <div class="absolute inset-0 overflow-auto px-8">
                        <simple-table
                            class="block min-w-4xl text-sm"
                            [data]="rows()"
                            [empty_message]="
                                'APP.CONCIERGE.MAPS_EMPTY' | translate
                            "
                            [columns]="[
                                {
                                    key: 'map_id',
                                    name: ' ',
                                    content: thumbnail_template,
                                    size: '7rem',
                                    sortable: false,
                                },
                                {
                                    key: 'name',
                                    name:
                                        'APP.CONCIERGE.LEVELS_NAME' | translate,
                                    content: name_template,
                                },
                                {
                                    key: 'building',
                                    name: 'RESOURCE.BUILDING' | translate,
                                    size: '14rem',
                                },
                                {
                                    key: 'map_short',
                                    name:
                                        'APP.CONCIERGE.LEVELS_MAP_URL'
                                        | translate,
                                    content: url_template,
                                    size: '18rem',
                                },
                                {
                                    key: 'actions',
                                    name: ' ',
                                    content: action_template,
                                    size: '6.25rem',
                                    sortable: false,
                                },
                            ]"
                            [sortable]="true"
                        ></simple-table>
                        <div class="h-20 w-full"></div>
                    </div>
                </div>
            </main>
        </div>
        <ng-template #thumbnail_template let-row="row">
            <div
                class="bg-base-200 m-2 flex h-14 w-24 items-center justify-center overflow-hidden rounded"
            >
                @if (thumbnailSrc(row); as src) {
                    <img
                        class="max-h-full max-w-full"
                        loading="lazy"
                        [src]="src"
                        [alt]="row.name"
                        (error)="markBroken(row.id)"
                    />
                } @else {
                    <icon class="text-2xl opacity-40">map</icon>
                }
            </div>
        </ng-template>
        <ng-template #name_template let-row="row" let-data="data">
            <button
                class="px-4 py-2 text-left leading-tight"
                (click)="copyToClipboard(row.id)"
            >
                <div>{{ data }}</div>
                <div class="font-mono text-[0.625rem] opacity-70">
                    {{ row.id }}
                </div>
            </button>
        </ng-template>
        <ng-template #url_template let-row="row" let-data="data">
            <div class="flex w-full items-center gap-1 px-2">
                <div
                    class="flex-1 truncate font-mono text-xs"
                    [title]="row.map_id"
                >
                    <a
                        [href]="row.map_id"
                        target="_blank"
                        class="text-info underline"
                    >
                        {{ row.map_label }}
                    </a>
                </div>
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="'APP.CONCIERGE.MAPS_COPY_URL' | translate"
                    (click)="copyToClipboard(row.map_id)"
                    [attr.aria-label]="
                        'APP.CONCIERGE.MAPS_COPY_URL' | translate
                    "
                >
                    <icon>content_copy</icon>
                </button>
            </div>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="flex w-full items-center justify-end gap-2 p-2">
                <button
                    icon
                    default
                    matRipple
                    (click)="editMap(row)"
                    [matTooltip]="'APP.CONCIERGE.MAPS_EDIT' | translate"
                    [attr.aria-label]="'APP.CONCIERGE.MAPS_EDIT' | translate"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    default
                    matRipple
                    [matMenuTriggerFor]="menu"
                    [attr.aria-label]="'COMMON.MORE_OPTIONS' | translate"
                >
                    <icon>more_vert</icon>
                </button>
                <mat-menu #menu="matMenu">
                    <a
                        mat-menu-item
                        target="_blank"
                        rel="opener"
                        [href]="levelStudioUrl(row)"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">open_in_new</icon>
                            <span>{{
                                'APP.CONCIERGE.MAPS_OPEN_STUDIO' | translate
                            }}</span>
                        </div>
                    </a>
                    <button mat-menu-item (click)="editLevel(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">tune</icon>
                            <span>{{
                                'APP.CONCIERGE.MAPS_EDIT_LEVEL' | translate
                            }}</span>
                        </div>
                    </button>
                </mat-menu>
            </div>
        </ng-template>
    `, imports: [
      ApplicationSidebarComponent,
      SearchbarComponent,
      SimpleTableComponent,
      IconComponent,
      TranslatePipe,
      FormsModule,
      MatFormFieldModule,
      MatSelectModule,
      MatMenuModule,
      MatRippleModule,
      MatTooltipModule
    ], styles: ["/* angular:styles/component:css;fe7257d747bad2aa2c308a65d840415704fec3399d6c3c3a64a44a56688b494d;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/map-manager/map-manager.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\nmat-form-field {\n  height: 3.25rem;\n}\n/*# sourceMappingURL=map-manager.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapManagerComponent, { className: "MapManagerComponent", filePath: "apps/concierge/src/app/map-manager/map-manager.component.ts", lineNumber: 274 });
})();

// apps/concierge/src/app/map-manager/map-manager.routes.ts
var ROUTES = [
  { path: "", component: MapManagerComponent, title: "Map Management" },
  {
    path: ":level_id",
    title: "Map Management",
    loadComponent: () => import("./map-editor-page.component-GGRRBDZH.js").then((m) => m.MapEditorPageComponent),
    canDeactivate: [unsavedChangesGuard]
  }
];
export {
  ROUTES
};
//# debugId=82314563-b511-5480-beb6-c42ce3776aff
//# sourceMappingURL=map-manager.routes-HSTFRU7C.js.map
