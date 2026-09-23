import {
  AuthenticatedImageDirective
} from "./chunk-FP54GULP.js";
import {
  EDGE_BAR_HEIGHT_PC,
  FLOATING_DEFAULT_X_PC,
  FLOATING_DEFAULT_Y_PC,
  SIDEBAR_WIDTH_PC,
  SignageService,
  computeTemplateLayoutRects,
  layoutPositionLabel,
  layoutRatioToPercentage
} from "./chunk-VT2EE4SD.js";
import {
  TranslatePipe
} from "./chunk-2MCN5NQW.js";
import {
  CommonModule,
  Component,
  DatePipe,
  IconComponent,
  Input,
  Lh,
  computed,
  hl,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-JABNH3I5.js";

// apps/signage-manager/src/app/shared/template-approval.util.ts
function axisPercentage(layout, axis) {
  const percentage = layoutRatioToPercentage(layout[axis]);
  if (percentage !== null)
    return Math.round(percentage * 100) / 100;
  if (layout.position === "floating") {
    return axis === "x_pos" ? FLOATING_DEFAULT_X_PC : FLOATING_DEFAULT_Y_PC;
  }
  return axis === "x_pos" ? SIDEBAR_WIDTH_PC : EDGE_BAR_HEIGHT_PC;
}
function signageTemplateLayoutsEqual(current, older) {
  if (!older || current.position !== older.position)
    return false;
  const uses_x = current.position === "left" || current.position === "right" || current.position === "floating";
  const uses_y = current.position === "top" || current.position === "bottom" || current.position === "floating";
  return (current.plugin_id || "") === (older.plugin_id || "") && (!uses_x || axisPercentage(current, "x_pos") === axisPercentage(older, "x_pos")) && (!uses_y || axisPercentage(current, "y_pos") === axisPercentage(older, "y_pos")) && JSON.stringify(current.plugin_params || {}) === JSON.stringify(older.plugin_params || {});
}
function signageTemplateVersionsEqual(current, older) {
  return current.name === older.name && current.description === older.description && current.background_item_id === older.background_item_id && current.full_screen_takeover === older.full_screen_takeover && JSON.stringify(current.tags) === JSON.stringify(older.tags) && current.layouts.length === older.layouts.length && current.layouts.every((layout, index) => signageTemplateLayoutsEqual(layout, older.layouts[index]));
}
async function loadTemplateApprovalVersions(template_id) {
  const pending_template = await hl(template_id);
  let approved_template = null;
  try {
    approved_template = await hl(template_id, {
      approved: true
    });
  } catch {
  }
  return approved_template && !signageTemplateVersionsEqual(pending_template, approved_template) ? [pending_template, approved_template] : [pending_template];
}

// apps/signage-manager/src/app/shared/template-approval-preview.component.ts
var _c0 = (a0) => ({ count: a0 });
var _c1 = (a0) => ({ name: a0 });
var _forTrack0 = ($index, $item) => $item.index;
var _forTrack1 = ($index, $item) => $item.axis;
function TemplateApprovalPreviewComponent_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const template_r1 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", template_r1.description, " ");
  }
}
function TemplateApprovalPreviewComponent_For_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.TEMPLATE_FULLSCREEN_TAKEOVER"), " ");
  }
}
function TemplateApprovalPreviewComponent_For_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.TEMPLATE_BACKGROUND"), " ");
  }
}
function TemplateApprovalPreviewComponent_For_2_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 14);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("source", ctx)("alt", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.TEMPLATE_BACKGROUND"));
  }
}
function TemplateApprovalPreviewComponent_For_2_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 21);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("left", item_r2.rect.left, "%")("top", item_r2.rect.top, "%")("width", item_r2.rect.width, "%")("height", item_r2.rect.height, "%");
    \u0275\u0275classProp("border-dashed", !item_r2.layout.plugin_id)("bg-black/10", !item_r2.layout.plugin_id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 14, ctx_r2.positionLabel(item_r2.layout)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.pluginName(item_r2.layout.plugin_id) || \u0275\u0275pipeBind1(6, 16, "SIGNAGE_MANAGER.TEMPLATE_NO_PLUGIN"), " ");
  }
}
function TemplateApprovalPreviewComponent_For_2_ForEmpty_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.TEMPLATE_NO_LAYOUTS_HINT"), " ");
  }
}
function TemplateApprovalPreviewComponent_For_2_For_28_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, item_r4.label), ": ", item_r4.value, "% ");
  }
}
function TemplateApprovalPreviewComponent_For_2_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "icon", 22);
    \u0275\u0275text(2, "space_dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23)(4, "div", 24);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 25);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 26);
    \u0275\u0275repeaterCreate(11, TemplateApprovalPreviewComponent_For_2_For_28_For_12_Template, 3, 4, "span", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    const layout_r6 = item_r5.layout;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, ctx_r2.positionLabel(layout_r6)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.pluginName(layout_r6.plugin_id) || \u0275\u0275pipeBind1(9, 4, "SIGNAGE_MANAGER.TEMPLATE_NO_PLUGIN"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.positionValues(layout_r6));
  }
}
function TemplateApprovalPreviewComponent_For_2_ForEmpty_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "icon", 27);
    \u0275\u0275text(2, "space_dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 28);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.TEMPLATE_NO_LAYOUT_CHANGES"), " ");
  }
}
function TemplateApprovalPreviewComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "section", 3)(2, "header", 4)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "div", 8);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, TemplateApprovalPreviewComponent_For_2_Conditional_13_Template, 2, 1, "div", 9);
    \u0275\u0275elementStart(14, "div", 10)(15, "span", 11);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, TemplateApprovalPreviewComponent_For_2_Conditional_18_Template, 3, 3, "span", 11);
    \u0275\u0275conditionalCreate(19, TemplateApprovalPreviewComponent_For_2_Conditional_19_Template, 3, 3, "span", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 12)(21, "div", 13);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275conditionalCreate(23, TemplateApprovalPreviewComponent_For_2_Conditional_23_Template, 2, 4, "img", 14);
    \u0275\u0275repeaterCreate(24, TemplateApprovalPreviewComponent_For_2_For_25_Template, 7, 18, "div", 15, _forTrack0, false, TemplateApprovalPreviewComponent_For_2_ForEmpty_26_Template, 3, 3, "div", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(27, TemplateApprovalPreviewComponent_For_2_For_28_Template, 13, 6, "div", 17, _forTrack0, false, TemplateApprovalPreviewComponent_For_2_ForEmpty_29_Template, 6, 3, "div", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_21_0;
    const version_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    const template_r8 = \u0275\u0275storeLet(version_r7.template);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success-light", version_r7.current)("bg-error-light", !version_r7.current);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 16, version_r7.current ? "SIGNAGE_MANAGER.VERSION_TO_APPROVE" : "SIGNAGE_MANAGER.PREVIOUS_VERSION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 18, template_r8.updated_at, "dd MMM, HH:mm"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(template_r8.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(template_r8.description ? 13 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(17, 21, "SIGNAGE_MANAGER.TEMPLATE_LAYOUT_COUNT", \u0275\u0275pureFunction1(27, _c0, version_r7.layouts.length)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(template_r8.full_screen_takeover ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(template_r8.background_item_id ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(22, 24, "SIGNAGE_MANAGER.TEMPLATE_PREVIEW_ARIA", \u0275\u0275pureFunction1(29, _c1, template_r8.name)));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_21_0 = ctx_r2.backgroundUrl(template_r8)) ? 23 : -1, tmp_21_0);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.previewItems(version_r7));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(version_r7.layouts);
  }
}
function TemplateApprovalPreviewComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "icon", 27);
    \u0275\u0275text(2, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_OLDER_VERSION"));
  }
}
var TemplateApprovalPreviewComponent = class _TemplateApprovalPreviewComponent {
  constructor() {
    this._service = inject(SignageService);
    this.versions = input(
      [],
      ...ngDevMode ? [{ debugName: "versions" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.versionComparison = computed(
      () => {
        const [current_version, older_version] = this.versions();
        if (!current_version) {
          return {
            versions: [],
            show_no_older_version: false
          };
        }
        const has_older_version = !!older_version && !signageTemplateVersionsEqual(current_version, older_version);
        if (!has_older_version) {
          return {
            versions: [
              {
                current: true,
                layouts: current_version.layouts.map((layout, index) => ({ layout, index })),
                template: current_version
              }
            ],
            show_no_older_version: true
          };
        }
        return {
          versions: [
            this.differentVersion(current_version, older_version, true),
            this.differentVersion(older_version, current_version, false)
          ],
          show_no_older_version: false
        };
      },
      ...ngDevMode ? [{ debugName: "versionComparison" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  previewItems(version) {
    const rects = computeTemplateLayoutRects(version.template.layouts);
    return version.layouts.map(({ layout, index }) => ({
      index,
      layout,
      rect: rects[index]
    }));
  }
  backgroundUrl(template) {
    return template.background_item_id ? Lh(template.background_item_id) : "";
  }
  positionLabel(layout) {
    return layoutPositionLabel(layout.position);
  }
  positionValues(layout) {
    const position_axes = [];
    if (layout.position === "left" || layout.position === "right" || layout.position === "floating") {
      position_axes.push("x_pos");
    }
    if (layout.position === "top" || layout.position === "bottom" || layout.position === "floating") {
      position_axes.push("y_pos");
    }
    return position_axes.map((axis) => ({
      axis,
      label: axis === "x_pos" ? "SIGNAGE_MANAGER.TEMPLATE_X_POS" : "SIGNAGE_MANAGER.TEMPLATE_Y_POS",
      value: this.axisPercentage(layout, axis)
    }));
  }
  axisPercentage(layout, axis) {
    const percentage = layoutRatioToPercentage(layout[axis]);
    if (percentage !== null)
      return Math.round(percentage * 100) / 100;
    if (layout.position === "floating") {
      return axis === "x_pos" ? FLOATING_DEFAULT_X_PC : FLOATING_DEFAULT_Y_PC;
    }
    return axis === "x_pos" ? SIDEBAR_WIDTH_PC : EDGE_BAR_HEIGHT_PC;
  }
  pluginName(plugin_id) {
    if (!plugin_id)
      return "";
    return this._service.widgets().find((item) => item.id === plugin_id)?.name || plugin_id;
  }
  differentVersion(template, comparison, current) {
    return {
      current,
      layouts: template.layouts.map((layout, index) => ({ layout, index })).filter(({ layout, index }) => !signageTemplateLayoutsEqual(layout, comparison.layouts[index])),
      template
    };
  }
  static {
    this.\u0275fac = function TemplateApprovalPreviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TemplateApprovalPreviewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TemplateApprovalPreviewComponent, selectors: [["template-approval-preview"]], inputs: { versions: [1, "versions"] }, decls: 4, vars: 1, consts: [[1, "flex", "gap-2", "max-md:flex-col"], ["data-template-version", "", 1, "border-base-300", "min-w-0", "flex-1", "rounded-sm", "border", 3, "bg-success-light", "bg-error-light"], ["data-no-older-version", "", 1, "border-base-300", "bg-base-200", "text-base-content/70", "flex", "min-h-48", "min-w-0", "flex-1", "flex-col", "items-center", "justify-center", "gap-2", "rounded-sm", "border", "p-8", "text-center"], ["data-template-version", "", 1, "border-base-300", "min-w-0", "flex-1", "rounded-sm", "border"], [1, "border-base-300", "bg-base-200", "flex", "items-center", "justify-between", "gap-2", "rounded-sm", "border-b", "px-4", "py-2"], [1, "text-base-content/70", "font-mono", "text-xs"], [1, "space-y-2", "p-2"], [1, "border-base-300", "bg-base-100", "rounded-sm", "border", "p-3"], [1, "font-medium"], [1, "text-base-content/70", "mt-1", "text-sm"], [1, "mt-2", "flex", "flex-wrap", "gap-1", "text-xs"], [1, "bg-base-200", "rounded", "px-2", "py-1"], [1, "border-base-300", "bg-base-200", "rounded-sm", "border", "p-2"], ["data-template-preview", "", "role", "img", 1, "relative", "aspect-video", "overflow-hidden", "rounded-sm", "bg-neutral-900", "ring-1", "ring-black/20"], ["auth", "", 1, "absolute", "inset-0", "h-full", "w-full", "object-cover", "opacity-80", 3, "source", "alt"], ["data-template-layout", "", 1, "absolute", "flex", "flex-col", "items-center", "justify-center", "overflow-hidden", "border-2", "border-white/60", "bg-black/60", "leading-none", "text-white", "backdrop-blur-sm", 3, "border-dashed", "bg-black/10", "left", "top", "width", "height"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "p-4", "text-center", "text-sm", "text-white/60"], ["data-layout-item", "", 1, "border-base-300", "bg-base-100", "flex", "items-center", "gap-2", "rounded-sm", "border", "p-2"], [1, "text-base-content/70", "flex", "flex-col", "items-center", "justify-center", "p-8"], ["data-template-layout", "", 1, "absolute", "flex", "flex-col", "items-center", "justify-center", "overflow-hidden", "border-2", "border-white/60", "bg-black/60", "leading-none", "text-white", "backdrop-blur-sm"], [1, "w-full", "truncate", "px-1", "text-center", "text-xs", "font-semibold", "uppercase", "text-shadow-lg"], [1, "w-full", "truncate", "px-1", "text-center", "text-[0.625rem]", "opacity-80", "text-shadow-lg"], [1, "text-xl"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-sm", "font-medium"], [1, "truncate", "text-xs", "opacity-60"], ["data-layout-values", "", 1, "mt-1", "flex", "flex-wrap", "gap-x-3", "gap-y-0.5", "font-mono", "text-xs", "opacity-70"], [1, "text-4xl"], [1, "text-sm"]], template: function TemplateApprovalPreviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275repeaterCreate(1, TemplateApprovalPreviewComponent_For_2_Template, 30, 31, "section", 1, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275conditionalCreate(3, TemplateApprovalPreviewComponent_Conditional_3_Template, 6, 3, "section", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.versionComparison().versions);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.versionComparison().show_no_older_version ? 3 : -1);
      }
    }, dependencies: [
      CommonModule,
      AuthenticatedImageDirective,
      IconComponent,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplateApprovalPreviewComponent, [{
    type: Component,
    args: [{
      selector: "template-approval-preview",
      template: `
        <div class="flex gap-2 max-md:flex-col">
            @for (version of versionComparison().versions; track $index) {
                @let template = version.template;
                <section
                    data-template-version
                    class="border-base-300 min-w-0 flex-1 rounded-sm border"
                    [class.bg-success-light]="version.current"
                    [class.bg-error-light]="!version.current"
                >
                    <header
                        class="border-base-300 bg-base-200 flex items-center justify-between gap-2 rounded-sm border-b px-4 py-2"
                    >
                        <h3>
                            {{
                                (version.current
                                    ? 'SIGNAGE_MANAGER.VERSION_TO_APPROVE'
                                    : 'SIGNAGE_MANAGER.PREVIOUS_VERSION'
                                ) | translate
                            }}
                        </h3>
                        <div class="text-base-content/70 font-mono text-xs">
                            {{ template.updated_at | date: 'dd MMM, HH:mm' }}
                        </div>
                    </header>
                    <div class="space-y-2 p-2">
                        <div
                            class="border-base-300 bg-base-100 rounded-sm border p-3"
                        >
                            <div class="font-medium">{{ template.name }}</div>
                            @if (template.description) {
                                <div class="text-base-content/70 mt-1 text-sm">
                                    {{ template.description }}
                                </div>
                            }
                            <div class="mt-2 flex flex-wrap gap-1 text-xs">
                                <span class="bg-base-200 rounded px-2 py-1">
                                    {{
                                        'SIGNAGE_MANAGER.TEMPLATE_LAYOUT_COUNT'
                                            | translate
                                                : {
                                                      count: version.layouts
                                                          .length,
                                                  }
                                    }}
                                </span>
                                @if (template.full_screen_takeover) {
                                    <span class="bg-base-200 rounded px-2 py-1">
                                        {{
                                            'SIGNAGE_MANAGER.TEMPLATE_FULLSCREEN_TAKEOVER'
                                                | translate
                                        }}
                                    </span>
                                }
                                @if (template.background_item_id) {
                                    <span class="bg-base-200 rounded px-2 py-1">
                                        {{
                                            'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND'
                                                | translate
                                        }}
                                    </span>
                                }
                            </div>
                        </div>
                        <div
                            class="border-base-300 bg-base-200 rounded-sm border p-2"
                        >
                            <div
                                data-template-preview
                                role="img"
                                class="relative aspect-video overflow-hidden rounded-sm bg-neutral-900 ring-1 ring-black/20"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.TEMPLATE_PREVIEW_ARIA'
                                        | translate: { name: template.name }
                                "
                            >
                                @if (
                                    backgroundUrl(template);
                                    as background_url
                                ) {
                                    <img
                                        auth
                                        class="absolute inset-0 h-full w-full object-cover opacity-80"
                                        [source]="background_url"
                                        [alt]="
                                            'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND'
                                                | translate
                                        "
                                    />
                                }
                                @for (
                                    item of previewItems(version);
                                    track item.index
                                ) {
                                    <div
                                        data-template-layout
                                        class="absolute flex flex-col items-center justify-center overflow-hidden border-2 border-white/60 bg-black/60 leading-none text-white backdrop-blur-sm"
                                        [class.border-dashed]="
                                            !item.layout.plugin_id
                                        "
                                        [class.bg-black/10]="
                                            !item.layout.plugin_id
                                        "
                                        [style.left.%]="item.rect.left"
                                        [style.top.%]="item.rect.top"
                                        [style.width.%]="item.rect.width"
                                        [style.height.%]="item.rect.height"
                                    >
                                        <div
                                            class="w-full truncate px-1 text-center text-xs font-semibold uppercase text-shadow-lg"
                                        >
                                            {{
                                                positionLabel(item.layout)
                                                    | translate
                                            }}
                                        </div>
                                        <div
                                            class="w-full truncate px-1 text-center text-[0.625rem] opacity-80 text-shadow-lg"
                                        >
                                            {{
                                                pluginName(
                                                    item.layout.plugin_id
                                                ) ||
                                                    ('SIGNAGE_MANAGER.TEMPLATE_NO_PLUGIN'
                                                        | translate)
                                            }}
                                        </div>
                                    </div>
                                } @empty {
                                    <div
                                        class="absolute inset-0 flex items-center justify-center p-4 text-center text-sm text-white/60"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.TEMPLATE_NO_LAYOUTS_HINT'
                                                | translate
                                        }}
                                    </div>
                                }
                            </div>
                        </div>
                        @for (item of version.layouts; track item.index) {
                            @let layout = item.layout;
                            <div
                                data-layout-item
                                class="border-base-300 bg-base-100 flex items-center gap-2 rounded-sm border p-2"
                            >
                                <icon class="text-xl">space_dashboard</icon>
                                <div class="min-w-0 flex-1">
                                    <div class="truncate text-sm font-medium">
                                        {{ positionLabel(layout) | translate }}
                                    </div>
                                    <div class="truncate text-xs opacity-60">
                                        {{
                                            pluginName(layout.plugin_id) ||
                                                ('SIGNAGE_MANAGER.TEMPLATE_NO_PLUGIN'
                                                    | translate)
                                        }}
                                    </div>
                                    <div
                                        data-layout-values
                                        class="mt-1 flex flex-wrap gap-x-3 gap-y-0.5 font-mono text-xs opacity-70"
                                    >
                                        @for (
                                            item of positionValues(layout);
                                            track item.axis
                                        ) {
                                            <span>
                                                {{ item.label | translate }}:
                                                {{ item.value }}%
                                            </span>
                                        }
                                    </div>
                                </div>
                            </div>
                        } @empty {
                            <div
                                class="text-base-content/70 flex flex-col items-center justify-center p-8"
                            >
                                <icon class="text-4xl">space_dashboard</icon>
                                <p class="text-sm">
                                    {{
                                        'SIGNAGE_MANAGER.TEMPLATE_NO_LAYOUT_CHANGES'
                                            | translate
                                    }}
                                </p>
                            </div>
                        }
                    </div>
                </section>
            }
            @if (versionComparison().show_no_older_version) {
                <section
                    data-no-older-version
                    class="border-base-300 bg-base-200 text-base-content/70 flex min-h-48 min-w-0 flex-1 flex-col items-center justify-center gap-2 rounded-sm border p-8 text-center"
                >
                    <icon class="text-4xl">history</icon>
                    <p>{{ 'SIGNAGE_MANAGER.NO_OLDER_VERSION' | translate }}</p>
                </section>
            }
        </div>
    `,
      imports: [
        CommonModule,
        AuthenticatedImageDirective,
        IconComponent,
        TranslatePipe
      ]
    }]
  }], null, { versions: [{ type: Input, args: [{ isSignal: true, alias: "versions", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TemplateApprovalPreviewComponent, { className: "TemplateApprovalPreviewComponent", filePath: "apps/signage-manager/src/app/shared/template-approval-preview.component.ts", lineNumber: 249 });
})();

export {
  loadTemplateApprovalVersions,
  TemplateApprovalPreviewComponent
};
//# debugId=fa4084f2-dd16-5f28-a9f1-af252f12c8df
//# sourceMappingURL=chunk-2AMLTSZZ.js.map
