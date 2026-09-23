import {
  AuthenticatedImageDirective
} from "./chunk-KOKDDOXG.js";
import {
  EDGE_BAR_HEIGHT_PC,
  FLOATING_DEFAULT_X_PC,
  FLOATING_DEFAULT_Y_PC,
  SIDEBAR_WIDTH_PC,
  SignageService,
  computeTemplateLayoutRects,
  layoutPositionLabel,
  layoutRatioToPercentage
} from "./chunk-IJFYACDR.js";
import {
  TranslatePipe
} from "./chunk-OQHCC7EM.js";
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
  ɵɵclassMap,
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
} from "./chunk-QSNPLM4U.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/shared/template-approval.util.ts
function layoutAxisPercentage(layout, axis) {
  const percentage = layoutRatioToPercentage(layout[axis]);
  if (percentage !== null)
    return Math.round(percentage * 100) / 100;
  if (layout.position === "floating") {
    return axis === "x_pos" ? FLOATING_DEFAULT_X_PC : FLOATING_DEFAULT_Y_PC;
  }
  return axis === "x_pos" ? SIDEBAR_WIDTH_PC : EDGE_BAR_HEIGHT_PC;
}
function layoutPositionAxes(layout) {
  const axes = [];
  if (["left", "right", "floating"].includes(layout.position)) {
    axes.push("x_pos");
  }
  if (["top", "bottom", "floating"].includes(layout.position)) {
    axes.push("y_pos");
  }
  return axes;
}
function signageTemplateLayoutChanges(layout, other) {
  const changes = [];
  if (layout.position !== other.position)
    changes.push("position");
  if ((layout.plugin_id || "") !== (other.plugin_id || "")) {
    changes.push("plugin_id");
  }
  const other_axes = layoutPositionAxes(other);
  for (const axis of layoutPositionAxes(layout)) {
    if (!other_axes.includes(axis) || layoutAxisPercentage(layout, axis) !== layoutAxisPercentage(other, axis)) {
      changes.push(axis);
    }
  }
  if (JSON.stringify(layout.plugin_params || {}) !== JSON.stringify(other.plugin_params || {})) {
    changes.push("plugin_params");
  }
  return changes;
}
function signageTemplateLayoutsEqual(current, older) {
  return !!older && !signageTemplateLayoutChanges(current, older).length;
}
function signageTemplateFieldChanges(current, older) {
  const changes = [];
  if (current.name !== older.name)
    changes.push("name");
  if (current.description !== older.description)
    changes.push("description");
  if (JSON.stringify(current.tags) !== JSON.stringify(older.tags)) {
    changes.push("tags");
  }
  if (current.background_item_id !== older.background_item_id) {
    changes.push("background_item_id");
  }
  if (current.merge !== older.merge)
    changes.push("merge");
  if (current.full_screen_takeover !== older.full_screen_takeover) {
    changes.push("full_screen_takeover");
  }
  return changes;
}
function signageTemplateVersionsEqual(current, older) {
  return !signageTemplateFieldChanges(current, older).length && current.layouts.length === older.layouts.length && current.layouts.every((layout, index) => signageTemplateLayoutsEqual(layout, older.layouts[index]));
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
var _forTrack0 = ($index, $item) => $item.name;
var _forTrack1 = ($index, $item) => $item.index;
var _forTrack2 = ($index, $item) => $item.axis;
var _forTrack3 = ($index, $item) => $item.key;
function TemplateApprovalPreviewComponent_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const version_r1 = \u0275\u0275nextContext().$implicit;
    const template_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275classMap(version_r1.fields.includes("description") ? version_r1.mark : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", template_r2.description, " ");
  }
}
function TemplateApprovalPreviewComponent_For_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const version_r1 = \u0275\u0275nextContext().$implicit;
    const template_r2 = \u0275\u0275readContextLet(0);
    const takeover_changed_r3 = \u0275\u0275readContextLet(19);
    \u0275\u0275classMap(takeover_changed_r3 ? version_r1.mark : "bg-base-200");
    \u0275\u0275classProp("line-through", !template_r2.full_screen_takeover);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 5, "SIGNAGE_MANAGER.TEMPLATE_FULLSCREEN_TAKEOVER"), " ");
  }
}
function TemplateApprovalPreviewComponent_For_2_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const version_r1 = \u0275\u0275nextContext().$implicit;
    const template_r2 = \u0275\u0275readContextLet(0);
    const merge_changed_r4 = \u0275\u0275readContextLet(21);
    \u0275\u0275classMap(merge_changed_r4 ? version_r1.mark : "bg-base-200");
    \u0275\u0275classProp("line-through", !template_r2.merge);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 5, "SIGNAGE_MANAGER.TEMPLATE_MERGE"), " ");
  }
}
function TemplateApprovalPreviewComponent_For_2_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const version_r1 = \u0275\u0275nextContext().$implicit;
    const template_r2 = \u0275\u0275readContextLet(0);
    const background_changed_r5 = \u0275\u0275readContextLet(23);
    \u0275\u0275classMap(background_changed_r5 ? version_r1.mark : "bg-base-200");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, template_r2.background_item_id ? "SIGNAGE_MANAGER.TEMPLATE_BACKGROUND" : "SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_EMPTY"), " ");
  }
}
function TemplateApprovalPreviewComponent_For_2_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r6 = ctx.$implicit;
    const version_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(tag_r6.changed ? version_r1.mark : "bg-base-200");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" #", tag_r6.name, " ");
  }
}
function TemplateApprovalPreviewComponent_For_2_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 18);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("source", ctx)("alt", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.TEMPLATE_BACKGROUND"));
  }
}
function TemplateApprovalPreviewComponent_For_2_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 28);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const version_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r7 = \u0275\u0275nextContext();
    const highlight_r9 = item_r7.status !== "unchanged";
    \u0275\u0275styleProp("left", item_r7.rect.left, "%")("top", item_r7.rect.top, "%")("width", item_r7.rect.width, "%")("height", item_r7.rect.height, "%");
    \u0275\u0275classProp("border-white/60", !highlight_r9)("border-success", highlight_r9 && version_r1.current)("border-error", highlight_r9 && !version_r1.current)("z-10", highlight_r9)("opacity-50", !highlight_r9 && version_r1.compared)("border-dashed", !item_r7.layout.plugin_id)("bg-black/10", !item_r7.layout.plugin_id);
    \u0275\u0275attribute("data-status", item_r7.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 25, ctx_r7.positionLabel(item_r7.layout)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r7.pluginName(item_r7.layout.plugin_id) || \u0275\u0275pipeBind1(6, 27, "SIGNAGE_MANAGER.TEMPLATE_NO_PLUGIN"), " ");
  }
}
function TemplateApprovalPreviewComponent_For_2_ForEmpty_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.TEMPLATE_NO_LAYOUTS_HINT"), " ");
  }
}
function TemplateApprovalPreviewComponent_For_2_For_35_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r10 = \u0275\u0275nextContext().$implicit;
    const version_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275classMap(version_r1.mark);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, ctx_r7.STATUS_LABELS[item_r10.status]), " ");
  }
}
function TemplateApprovalPreviewComponent_For_2_For_35_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r11 = ctx.$implicit;
    const item_r10 = \u0275\u0275nextContext().$implicit;
    const version_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(item_r10.changes.includes(value_r11.axis) ? version_r1.mark : "opacity-70");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 4, value_r11.label), ": ", value_r11.value, "% ");
  }
}
function TemplateApprovalPreviewComponent_For_2_For_35_Conditional_16_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const param_r12 = ctx.$implicit;
    const version_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(version_r1.mark);
    \u0275\u0275property("title", param_r12.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", param_r12.key, ": ", param_r12.value, " ");
  }
}
function TemplateApprovalPreviewComponent_For_2_For_35_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 40);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, TemplateApprovalPreviewComponent_For_2_For_35_Conditional_16_For_5_Template, 3, 5, "div", 34, _forTrack3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "SIGNAGE_MANAGER.PLUGIN_PARAMETERS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(item_r10.params);
  }
}
function TemplateApprovalPreviewComponent_For_2_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "icon", 29);
    \u0275\u0275text(2, "space_dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30)(4, "div", 31)(5, "div", 32);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, TemplateApprovalPreviewComponent_For_2_For_35_Conditional_8_Template, 3, 5, "span", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 34)(10, "div", 35);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 36);
    \u0275\u0275repeaterCreate(14, TemplateApprovalPreviewComponent_For_2_For_35_For_15_Template, 3, 6, "span", 37, _forTrack2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, TemplateApprovalPreviewComponent_For_2_For_35_Conditional_16_Template, 6, 3, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const version_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r7 = \u0275\u0275nextContext();
    const layout_r13 = item_r10.layout;
    \u0275\u0275advance(5);
    \u0275\u0275classMap(item_r10.changes.includes("position") ? version_r1.mark : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 8, ctx_r7.positionLabel(layout_r13)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r10.status !== "unchanged" ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(item_r10.changes.includes("plugin_id") ? version_r1.mark : "opacity-60");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r7.pluginName(layout_r13.plugin_id) || \u0275\u0275pipeBind1(12, 10, "SIGNAGE_MANAGER.TEMPLATE_NO_PLUGIN"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r7.positionValues(layout_r13));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r10.params.length ? 16 : -1);
  }
}
function TemplateApprovalPreviewComponent_For_2_ForEmpty_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "icon", 42);
    \u0275\u0275text(2, "space_dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 43);
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
    \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "span", 9);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(14, TemplateApprovalPreviewComponent_For_2_Conditional_14_Template, 3, 3, "div", 10);
    \u0275\u0275elementStart(15, "div", 11)(16, "span", 12);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275declareLet(19);
    \u0275\u0275conditionalCreate(20, TemplateApprovalPreviewComponent_For_2_Conditional_20_Template, 3, 7, "span", 13);
    \u0275\u0275declareLet(21);
    \u0275\u0275conditionalCreate(22, TemplateApprovalPreviewComponent_For_2_Conditional_22_Template, 3, 7, "span", 13);
    \u0275\u0275declareLet(23);
    \u0275\u0275conditionalCreate(24, TemplateApprovalPreviewComponent_For_2_Conditional_24_Template, 3, 5, "span", 14);
    \u0275\u0275repeaterCreate(25, TemplateApprovalPreviewComponent_For_2_For_26_Template, 2, 3, "span", 15, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 16)(28, "div", 17);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275conditionalCreate(30, TemplateApprovalPreviewComponent_For_2_Conditional_30_Template, 2, 4, "img", 18);
    \u0275\u0275repeaterCreate(31, TemplateApprovalPreviewComponent_For_2_For_32_Template, 7, 29, "div", 19, _forTrack1, false, TemplateApprovalPreviewComponent_For_2_ForEmpty_33_Template, 3, 3, "div", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(34, TemplateApprovalPreviewComponent_For_2_For_35_Template, 17, 12, "div", 21, _forTrack1, false, TemplateApprovalPreviewComponent_For_2_ForEmpty_36_Template, 6, 3, "div", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_27_0;
    const version_r1 = ctx.$implicit;
    const ctx_r7 = \u0275\u0275nextContext();
    const template_r14 = \u0275\u0275storeLet(version_r1.template);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success-light", version_r1.current)("bg-error-light", !version_r1.current);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 19, version_r1.current ? "SIGNAGE_MANAGER.VERSION_TO_APPROVE" : "SIGNAGE_MANAGER.PREVIOUS_VERSION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 21, template_r14.updated_at, "dd MMM, HH:mm"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275classMap(version_r1.fields.includes("name") ? version_r1.mark : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", template_r14.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(template_r14.description ? 14 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(18, 24, "SIGNAGE_MANAGER.TEMPLATE_LAYOUT_COUNT", \u0275\u0275pureFunction1(33, _c0, version_r1.layouts.length)), " ");
    \u0275\u0275advance(2);
    const takeover_changed_r15 = \u0275\u0275storeLet(version_r1.fields.includes("full_screen_takeover"));
    \u0275\u0275advance();
    \u0275\u0275conditional(template_r14.full_screen_takeover || takeover_changed_r15 ? 20 : -1);
    \u0275\u0275advance();
    const merge_changed_r16 = \u0275\u0275storeLet(version_r1.fields.includes("merge"));
    \u0275\u0275advance();
    \u0275\u0275conditional(template_r14.merge || merge_changed_r16 ? 22 : -1);
    \u0275\u0275advance();
    const background_changed_r17 = \u0275\u0275storeLet(version_r1.fields.includes("background_item_id"));
    \u0275\u0275advance();
    \u0275\u0275conditional(template_r14.background_item_id || background_changed_r17 ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(version_r1.tags);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(29, 30, "SIGNAGE_MANAGER.TEMPLATE_PREVIEW_ARIA", \u0275\u0275pureFunction1(35, _c1, template_r14.name)));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_27_0 = ctx_r7.backgroundUrl(template_r14)) ? 30 : -1, tmp_27_0);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r7.previewItems(version_r1));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(version_r1.listed);
  }
}
function TemplateApprovalPreviewComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "icon", 42);
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
            versions: [this.versionPreview(current_version, null, true)],
            show_no_older_version: true
          };
        }
        return {
          versions: [
            this.versionPreview(current_version, older_version, true),
            this.versionPreview(older_version, current_version, false)
          ],
          show_no_older_version: false
        };
      },
      ...ngDevMode ? [{ debugName: "versionComparison" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.STATUS_LABELS = {
      added: "SIGNAGE_MANAGER.TEMPLATE_CHANGE_ADDED",
      removed: "SIGNAGE_MANAGER.TEMPLATE_CHANGE_REMOVED",
      changed: "SIGNAGE_MANAGER.TEMPLATE_CHANGE_CHANGED",
      unchanged: ""
    };
  }
  previewItems(version) {
    const rects = computeTemplateLayoutRects(version.template.layouts);
    return version.layouts.map((item) => __spreadProps(__spreadValues({}, item), {
      rect: rects[item.index]
    }));
  }
  backgroundUrl(template) {
    return template.background_item_id ? Lh(template.background_item_id) : "";
  }
  positionLabel(layout) {
    return layoutPositionLabel(layout.position);
  }
  positionValues(layout) {
    return layoutPositionAxes(layout).map((axis) => ({
      axis,
      label: axis === "x_pos" ? "SIGNAGE_MANAGER.TEMPLATE_X_POS" : "SIGNAGE_MANAGER.TEMPLATE_Y_POS",
      value: layoutAxisPercentage(layout, axis)
    }));
  }
  pluginName(plugin_id) {
    if (!plugin_id)
      return "";
    return this._service.widgets().find((item) => item.id === plugin_id)?.name || plugin_id;
  }
  /** Build the view of `template` with its differences from `other`. */
  versionPreview(template, other, current) {
    const layouts = template.layouts.map((layout, index) => this.layoutPreview(layout, index, other, current));
    const other_tags = other?.tags || [];
    return {
      current,
      compared: !!other,
      mark: current ? "bg-success/20 px-1" : "bg-error/20 px-1",
      fields: other ? signageTemplateFieldChanges(template, other) : [],
      tags: (template.tags || []).map((name) => ({
        name,
        changed: !!other && !other_tags.includes(name)
      })),
      layouts,
      listed: other ? layouts.filter((item) => item.status !== "unchanged") : layouts,
      template
    };
  }
  layoutPreview(layout, index, other, current) {
    const unchanged = {
      index,
      layout,
      status: "unchanged",
      changes: [],
      params: []
    };
    if (!other)
      return unchanged;
    const other_layout = other.layouts[index];
    if (!other_layout) {
      return __spreadProps(__spreadValues({}, unchanged), { status: current ? "added" : "removed" });
    }
    const changes = signageTemplateLayoutChanges(layout, other_layout);
    if (!changes.length)
      return unchanged;
    const other_params = other_layout.plugin_params || {};
    const params = Object.entries(layout.plugin_params || {}).map(([key, value]) => ({ key, value: JSON.stringify(value) })).filter(({ key, value }) => value !== JSON.stringify(other_params[key]));
    return { index, layout, status: "changed", changes, params };
  }
  static {
    this.\u0275fac = function TemplateApprovalPreviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TemplateApprovalPreviewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TemplateApprovalPreviewComponent, selectors: [["template-approval-preview"]], inputs: { versions: [1, "versions"] }, decls: 4, vars: 1, consts: [[1, "flex", "gap-2", "max-md:flex-col"], ["data-template-version", "", 1, "border-base-300", "min-w-0", "flex-1", "rounded-sm", "border", 3, "bg-success-light", "bg-error-light"], ["data-no-older-version", "", 1, "border-base-300", "bg-base-200", "text-base-content/70", "flex", "min-h-48", "min-w-0", "flex-1", "flex-col", "items-center", "justify-center", "gap-2", "rounded-sm", "border", "p-8", "text-center"], ["data-template-version", "", 1, "border-base-300", "min-w-0", "flex-1", "rounded-sm", "border"], [1, "border-base-300", "bg-base-200", "flex", "items-center", "justify-between", "gap-2", "rounded-sm", "border-b", "px-4", "py-2"], [1, "text-base-content/70", "font-mono", "text-xs"], [1, "space-y-2", "p-2"], [1, "border-base-300", "bg-base-100", "rounded-sm", "border", "p-3"], [1, "font-medium"], ["data-template-name", "", 1, "rounded-sm"], [1, "text-base-content/70", "mt-1", "text-sm"], [1, "mt-2", "flex", "flex-wrap", "gap-1", "text-xs"], [1, "bg-base-200", "rounded", "px-2", "py-1"], [1, "rounded", "px-2", "py-1", 3, "class", "line-through"], [1, "rounded", "px-2", "py-1", 3, "class"], ["data-template-tag", "", 1, "rounded", "px-2", "py-1", 3, "class"], [1, "border-base-300", "bg-base-200", "rounded-sm", "border", "p-2"], ["data-template-preview", "", "role", "img", 1, "relative", "aspect-video", "overflow-hidden", "rounded-sm", "bg-neutral-900", "ring-1", "ring-black/20"], ["auth", "", 1, "absolute", "inset-0", "h-full", "w-full", "object-cover", "opacity-80", 3, "source", "alt"], ["data-template-layout", "", 1, "absolute", "flex", "flex-col", "items-center", "justify-center", "overflow-hidden", "border-2", "bg-black/60", "leading-none", "text-white", "backdrop-blur-sm", 3, "border-white/60", "border-success", "border-error", "z-10", "opacity-50", "border-dashed", "bg-black/10", "left", "top", "width", "height"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "p-4", "text-center", "text-sm", "text-white/60"], ["data-layout-item", "", 1, "border-base-300", "bg-base-100", "flex", "items-center", "gap-2", "rounded-sm", "border", "p-2"], [1, "text-base-content/70", "flex", "flex-col", "items-center", "justify-center", "p-8"], [1, "rounded-sm"], [1, "rounded", "px-2", "py-1"], ["data-template-tag", "", 1, "rounded", "px-2", "py-1"], ["data-template-layout", "", 1, "absolute", "flex", "flex-col", "items-center", "justify-center", "overflow-hidden", "border-2", "bg-black/60", "leading-none", "text-white", "backdrop-blur-sm"], [1, "w-full", "truncate", "px-1", "text-center", "text-xs", "font-semibold", "uppercase", "text-shadow-lg"], [1, "w-full", "truncate", "px-1", "text-center", "text-[0.625rem]", "opacity-80", "text-shadow-lg"], [1, "text-xl"], [1, "min-w-0", "flex-1"], [1, "flex", "items-center", "gap-2"], [1, "min-w-0", "truncate", "rounded-sm", "text-sm", "font-medium"], ["data-layout-status", "", 1, "shrink-0", "rounded", "px-1.5", "py-0.5", "text-[0.625rem]", "font-bold", "uppercase", 3, "class"], [1, "flex"], [1, "min-w-0", "truncate", "rounded-sm", "text-xs"], ["data-layout-values", "", 1, "mt-1", "flex", "flex-wrap", "gap-x-3", "gap-y-0.5", "font-mono", "text-xs"], [1, "rounded-sm", 3, "class"], ["data-layout-params", "", 1, "mt-1", "space-y-0.5", "font-mono", "text-xs"], ["data-layout-status", "", 1, "shrink-0", "rounded", "px-1.5", "py-0.5", "text-[0.625rem]", "font-bold", "uppercase"], [1, "font-sans", "opacity-60"], [1, "min-w-0", "truncate", "rounded-sm", 3, "title"], [1, "text-4xl"], [1, "text-sm"]], template: function TemplateApprovalPreviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275repeaterCreate(1, TemplateApprovalPreviewComponent_For_2_Template, 37, 37, "section", 1, \u0275\u0275repeaterTrackByIndex);
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
                            <div class="font-medium">
                                <span
                                    data-template-name
                                    class="rounded-sm"
                                    [class]="
                                        version.fields.includes('name')
                                            ? version.mark
                                            : ''
                                    "
                                >
                                    {{ template.name }}
                                </span>
                            </div>
                            @if (template.description) {
                                <div class="text-base-content/70 mt-1 text-sm">
                                    <span
                                        class="rounded-sm"
                                        [class]="
                                            version.fields.includes(
                                                'description'
                                            )
                                                ? version.mark
                                                : ''
                                        "
                                    >
                                        {{ template.description }}
                                    </span>
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
                                @let takeover_changed =
                                    version.fields.includes(
                                        'full_screen_takeover'
                                    );
                                @if (
                                    template.full_screen_takeover ||
                                    takeover_changed
                                ) {
                                    <span
                                        class="rounded px-2 py-1"
                                        [class]="
                                            takeover_changed
                                                ? version.mark
                                                : 'bg-base-200'
                                        "
                                        [class.line-through]="
                                            !template.full_screen_takeover
                                        "
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.TEMPLATE_FULLSCREEN_TAKEOVER'
                                                | translate
                                        }}
                                    </span>
                                }
                                @let merge_changed =
                                    version.fields.includes('merge');
                                @if (template.merge || merge_changed) {
                                    <span
                                        class="rounded px-2 py-1"
                                        [class]="
                                            merge_changed
                                                ? version.mark
                                                : 'bg-base-200'
                                        "
                                        [class.line-through]="!template.merge"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.TEMPLATE_MERGE'
                                                | translate
                                        }}
                                    </span>
                                }
                                @let background_changed =
                                    version.fields.includes(
                                        'background_item_id'
                                    );
                                @if (
                                    template.background_item_id ||
                                    background_changed
                                ) {
                                    <span
                                        class="rounded px-2 py-1"
                                        [class]="
                                            background_changed
                                                ? version.mark
                                                : 'bg-base-200'
                                        "
                                    >
                                        {{
                                            (template.background_item_id
                                                ? 'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND'
                                                : 'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_EMPTY'
                                            ) | translate
                                        }}
                                    </span>
                                }
                                @for (tag of version.tags; track tag.name) {
                                    <span
                                        data-template-tag
                                        class="rounded px-2 py-1"
                                        [class]="
                                            tag.changed
                                                ? version.mark
                                                : 'bg-base-200'
                                        "
                                    >
                                        #{{ tag.name }}
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
                                    @let highlight =
                                        item.status !== 'unchanged';
                                    <div
                                        data-template-layout
                                        class="absolute flex flex-col items-center justify-center overflow-hidden border-2 bg-black/60 leading-none text-white backdrop-blur-sm"
                                        [attr.data-status]="item.status"
                                        [class.border-white/60]="!highlight"
                                        [class.border-success]="
                                            highlight && version.current
                                        "
                                        [class.border-error]="
                                            highlight && !version.current
                                        "
                                        [class.z-10]="highlight"
                                        [class.opacity-50]="
                                            !highlight && version.compared
                                        "
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
                        @for (item of version.listed; track item.index) {
                            @let layout = item.layout;
                            <div
                                data-layout-item
                                class="border-base-300 bg-base-100 flex items-center gap-2 rounded-sm border p-2"
                            >
                                <icon class="text-xl">space_dashboard</icon>
                                <div class="min-w-0 flex-1">
                                    <div class="flex items-center gap-2">
                                        <div
                                            class="min-w-0 truncate rounded-sm text-sm font-medium"
                                            [class]="
                                                item.changes.includes(
                                                    'position'
                                                )
                                                    ? version.mark
                                                    : ''
                                            "
                                        >
                                            {{
                                                positionLabel(layout)
                                                    | translate
                                            }}
                                        </div>
                                        @if (item.status !== 'unchanged') {
                                            <span
                                                data-layout-status
                                                class="shrink-0 rounded px-1.5 py-0.5 text-[0.625rem] font-bold uppercase"
                                                [class]="version.mark"
                                            >
                                                {{
                                                    STATUS_LABELS[item.status]
                                                        | translate
                                                }}
                                            </span>
                                        }
                                    </div>
                                    <div class="flex">
                                        <div
                                            class="min-w-0 truncate rounded-sm text-xs"
                                            [class]="
                                                item.changes.includes(
                                                    'plugin_id'
                                                )
                                                    ? version.mark
                                                    : 'opacity-60'
                                            "
                                        >
                                            {{
                                                pluginName(layout.plugin_id) ||
                                                    ('SIGNAGE_MANAGER.TEMPLATE_NO_PLUGIN'
                                                        | translate)
                                            }}
                                        </div>
                                    </div>
                                    <div
                                        data-layout-values
                                        class="mt-1 flex flex-wrap gap-x-3 gap-y-0.5 font-mono text-xs"
                                    >
                                        @for (
                                            value of positionValues(layout);
                                            track value.axis
                                        ) {
                                            <span
                                                class="rounded-sm"
                                                [class]="
                                                    item.changes.includes(
                                                        value.axis
                                                    )
                                                        ? version.mark
                                                        : 'opacity-70'
                                                "
                                            >
                                                {{ value.label | translate }}:
                                                {{ value.value }}%
                                            </span>
                                        }
                                    </div>
                                    @if (item.params.length) {
                                        <div
                                            data-layout-params
                                            class="mt-1 space-y-0.5 font-mono text-xs"
                                        >
                                            <div class="font-sans opacity-60">
                                                {{
                                                    'SIGNAGE_MANAGER.PLUGIN_PARAMETERS'
                                                        | translate
                                                }}
                                            </div>
                                            @for (
                                                param of item.params;
                                                track param.key
                                            ) {
                                                <div class="flex">
                                                    <span
                                                        class="min-w-0 truncate rounded-sm"
                                                        [class]="version.mark"
                                                        [title]="param.value"
                                                    >
                                                        {{ param.key }}:
                                                        {{ param.value }}
                                                    </span>
                                                </div>
                                            }
                                        </div>
                                    }
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TemplateApprovalPreviewComponent, { className: "TemplateApprovalPreviewComponent", filePath: "apps/signage-manager/src/app/shared/template-approval-preview.component.ts", lineNumber: 441 });
})();

export {
  loadTemplateApprovalVersions,
  TemplateApprovalPreviewComponent
};
//# debugId=7d310870-1a04-5f91-931c-7c801c6c9e81
//# sourceMappingURL=chunk-KTM7MXX4.js.map
