import {
  DebugPanelResize
} from "./chunk-TBTBHK4U.js";
import {
  CustomTooltipComponent
} from "./chunk-JGRRD5KV.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-SP74N3BN.js";
import {
  Clipboard,
  Component,
  DEFAULT_SETTINGS,
  DOCUMENT,
  DefaultValueAccessor,
  FormsModule,
  IconComponent,
  Input,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  OrganisationService,
  Output,
  SelectControlValueAccessor,
  SettingsService,
  computed,
  effect,
  inject,
  input,
  model,
  setClassMetadata,
  signal,
  ɵNgSelectMultipleOption,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WL7WGIFQ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/components/src/lib/settings-debug-panel.component.ts
var _c0 = (a0) => ({ zones: a0 });
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.type + $item.id;
function SettingsDebugPanelComponent_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyOverrides());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "content_copy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 16);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_Conditional_12_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearAll());
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "delete_sweep");
    \u0275\u0275elementEnd()();
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_19_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r5.overridden, " overridden ");
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_For_19_Conditional_1_Template_button_click_0_listener() {
      const group_r5 = \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleGroup(group_r5.name));
    });
    \u0275\u0275elementStart(1, "icon", 20);
    \u0275\u0275text(2, " chevron_right ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, SettingsDebugPanelComponent_Conditional_0_For_19_Conditional_1_Conditional_7_Template, 2, 1, "span", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r5 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotate-90", ctx_r1.filter() || ctx_r1.expanded()[group_r5.name]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(group_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" (", group_r5.count, ") ");
    \u0275\u0275advance();
    \u0275\u0275conditional(group_r5.overridden ? 7 : -1);
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", row_r6.description);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6.description, " ");
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Case_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    \u0275\u0275property("ngValue", option_r8.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r8.label, " ");
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Case_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Case_9_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const row_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearOverride(row_r6.key));
    });
    \u0275\u0275elementStart(1, "icon", 35);
    \u0275\u0275text(2, "undo");
    \u0275\u0275elementEnd()();
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 31);
    \u0275\u0275listener("ngModelChange", function SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Case_9_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const row_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectValue(row_r6, $event));
    });
    \u0275\u0275repeaterCreate(1, SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Case_9_For_2_Template, 2, 2, "option", 32, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(3, SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Case_9_Conditional_3_Template, 3, 0, "button", 33);
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngModel", row_r6.value);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r6.options);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(row_r6.overridden ? 3 : -1);
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Case_10_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.edit_value, $event) || (ctx_r1.edit_value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Case_10_Template_input_keydown_enter_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    })("keydown.escape", function SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Case_10_Template_input_keydown_escape_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.editing_key.set(""));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(1, "button", 37);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Case_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    });
    \u0275\u0275elementStart(2, "icon", 35);
    \u0275\u0275text(3, "check");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.edit_value);
    \u0275\u0275control();
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Case_11_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.edit_value, $event) || (ctx_r1.edit_value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Case_11_Template_input_keydown_enter_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    })("keydown.escape", function SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Case_11_Template_input_keydown_escape_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.editing_key.set(""));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(1, "button", 37);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Case_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    });
    \u0275\u0275elementStart(2, "icon", 35);
    \u0275\u0275text(3, "check");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.edit_value);
    \u0275\u0275control();
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Case_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "button", 41);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Case_12_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const row_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleValue(row_r6));
    });
    \u0275\u0275element(2, "div", 42);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-info", row_r6.value)("bg-base-300", !row_r6.value);
    \u0275\u0275property("title", row_r6.display);
    \u0275\u0275advance();
    \u0275\u0275classProp("translate-x-4", row_r6.value);
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Case_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Case_12_Conditional_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const row_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.startEdit(row_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275classMap(row_r6.display ? "opacity-80" : "italic opacity-40");
    \u0275\u0275property("title", row_r6.display || "unset");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6.display || "unset", " ");
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Case_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Case_12_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const row_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearOverride(row_r6.key));
    });
    \u0275\u0275elementStart(1, "icon", 35);
    \u0275\u0275text(2, "undo");
    \u0275\u0275elementEnd()();
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Case_12_Conditional_0_Template, 3, 7, "div", 39)(1, SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Case_12_Conditional_1_Template, 2, 4, "div", 40);
    \u0275\u0275conditionalCreate(2, SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Case_12_Conditional_2_Template, 3, 0, "button", 33);
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(row_r6.control === "toggle" ? 0 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(row_r6.overridden ? 2 : -1);
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "div", 26)(3, "span", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 28)(6, "icon", 29);
    \u0275\u0275text(7, "info");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(8, SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Conditional_8_Template, 2, 2, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Case_9_Template, 4, 2)(10, SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Case_10_Template, 4, 1)(11, SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Case_11_Template, 4, 1)(12, SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Case_12_Template, 3, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_34_0;
    const row_r6 = ctx.$implicit;
    const entry_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    const zone_tooltip_r16 = \u0275\u0275reference(2);
    \u0275\u0275classProp("pl-8", entry_r15.grouped)("pl-2", !entry_r15.grouped)("bg-warning-light", row_r6.overridden);
    \u0275\u0275advance();
    \u0275\u0275classProp("col-span-3", row_r6.control !== "toggle")("pb-1", row_r6.control !== "toggle");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r6.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("content", zone_tooltip_r16)("data", \u0275\u0275pureFunction1(18, _c0, row_r6.zones))("hover", true)("backdrop", false)("xOffset", 20);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(row_r6.description ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_34_0 = row_r6.control === "select" || ctx_r1.editing_key() === row_r6.key ? row_r6.control : "") === "select" ? 9 : tmp_34_0 === "number" ? 10 : tmp_34_0 === "text" ? 11 : 12);
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section");
    \u0275\u0275conditionalCreate(1, SettingsDebugPanelComponent_Conditional_0_For_19_Conditional_1_Template, 8, 5, "button", 17);
    \u0275\u0275repeaterCreate(2, SettingsDebugPanelComponent_Conditional_0_For_19_For_3_Template, 13, 20, "div", 18, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const entry_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_12_0 = entry_r15.header) ? 1 : -1, tmp_12_0);
    \u0275\u0275advance();
    \u0275\u0275repeater(entry_r15.rows);
  }
}
function SettingsDebugPanelComponent_Conditional_0_ForEmpty_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, " No matching settings ");
    \u0275\u0275elementEnd();
  }
}
function SettingsDebugPanelComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aside", 2)(1, "div", 3);
    \u0275\u0275listener("pointerdown", function SettingsDebugPanelComponent_Conditional_0_Template_div_pointerdown_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resize.start($event));
    })("pointermove", function SettingsDebugPanelComponent_Conditional_0_Template_div_pointermove_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resize.move($event));
    })("pointerup", function SettingsDebugPanelComponent_Conditional_0_Template_div_pointerup_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resize.end($event));
    })("pointercancel", function SettingsDebugPanelComponent_Conditional_0_Template_div_pointercancel_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resize.end($event));
    })("keydown", function SettingsDebugPanelComponent_Conditional_0_Template_div_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resize.onKeydown($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "header", 4)(3, "button", 5);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show.set(false));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 6);
    \u0275\u0275text(7, " Settings Viewer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 7)(9, "button", 8);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addSetting());
    });
    \u0275\u0275elementStart(10, "icon");
    \u0275\u0275text(11, "add");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, SettingsDebugPanelComponent_Conditional_0_Conditional_12_Template, 6, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 9)(14, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsDebugPanelComponent_Conditional_0_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filter, $event) || (ctx_r1.filter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(15, "icon", 11);
    \u0275\u0275text(16, "search");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 12);
    \u0275\u0275repeaterCreate(18, SettingsDebugPanelComponent_Conditional_0_For_19_Template, 4, 1, "section", null, \u0275\u0275repeaterTrackByIndex, false, SettingsDebugPanelComponent_Conditional_0_ForEmpty_20_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 14);
    \u0275\u0275text(22, " Click a value to override it. Text values are parsed as JSON, falling back to plain strings. Overrides are stored locally in this browser. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", ctx_r1.resize.panel_width());
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-valuemin", ctx_r1.resize.min_width)("aria-valuemax", ctx_r1.resize.maxWidth())("aria-valuenow", ctx_r1.resize.width());
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r1.has_overrides() ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filter);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.entries());
  }
}
function SettingsDebugPanelComponent_ng_template_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 49)(2, "div", 50);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 51);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 52);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const zone_r17 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", zone_r17.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", zone_r17.id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", zone_r17.type, " ");
  }
}
function SettingsDebugPanelComponent_ng_template_1_ForEmpty_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, " No zone metadata value ");
    \u0275\u0275elementEnd();
  }
}
function SettingsDebugPanelComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45);
    \u0275\u0275text(2, " Setting sources ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46);
    \u0275\u0275repeaterCreate(4, SettingsDebugPanelComponent_ng_template_1_For_5_Template, 8, 3, "div", 47, _forTrack1, false, SettingsDebugPanelComponent_ng_template_1_ForEmpty_6_Template, 2, 0, "div", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const zones_r18 = ctx.zones;
    \u0275\u0275advance(4);
    \u0275\u0275repeater(zones_r18);
  }
}
function flattenKeys(map, prefix, keys) {
  for (const key in map) {
    const full_key = prefix ? `${prefix}.${key}` : key;
    const value = map[key];
    if (value && typeof value === "object" && !Array.isArray(value)) {
      flattenKeys(value, full_key, keys);
    } else
      keys.add(full_key);
  }
}
function hasSetting(map, key) {
  let value = map;
  for (const part of key.slice(4).split("."))
    value = value == null ? void 0 : value[part];
  return value != null;
}
function optionLabel(value) {
  const label = `${value}`.replace(/[_-]+/g, " ");
  return label.charAt(0).toUpperCase() + label.slice(1);
}
function resolveRef(root, node) {
  const ref = node == null ? void 0 : node["$ref"];
  if (!(ref == null ? void 0 : ref.startsWith("#/")))
    return node;
  let target = root;
  for (const part of ref.slice(2).split("/"))
    target = target == null ? void 0 : target[part];
  return target || node;
}
function schemaNode(root, key) {
  var _a, _b;
  if (!root || !key.startsWith("app."))
    return null;
  let node = root;
  for (const part of key.slice(4).split(".")) {
    node = (_b = (_a = resolveRef(root, node)) == null ? void 0 : _a.properties) == null ? void 0 : _b[part];
    if (!node)
      return null;
  }
  return resolveRef(root, node);
}
function flattenSchemaKeys(root, node, prefix, keys, depth = 0) {
  if (depth > 8)
    return;
  node = resolveRef(root, node);
  if (!(node == null ? void 0 : node.properties)) {
    if (prefix)
      keys.add(prefix);
    return;
  }
  for (const key in node.properties) {
    flattenSchemaKeys(root, node.properties[key], prefix ? `${prefix}.${key}` : key, keys, depth + 1);
  }
}
var _SettingsDebugPanelComponent = class _SettingsDebugPanelComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._document = inject(DOCUMENT);
    this._clipboard = inject(Clipboard);
    this.schema = input(
      null,
      ...ngDevMode ? [{ debugName: "schema" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show = model(
      false,
      ...ngDevMode ? [{ debugName: "show" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.resize = new DebugPanelResize(384, 90);
    this._dock_app = effect(
      (on_cleanup) => {
        if (!this.show())
          return;
        const body = this._document.body;
        const padding_right = body.style.paddingRight;
        body.style.paddingRight = this.resize.panel_width();
        on_cleanup(() => body.style.paddingRight = padding_right);
      },
      ...ngDevMode ? [{ debugName: "_dock_app" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filter = signal(
      "",
      ...ngDevMode ? [{ debugName: "filter" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.editing_key = signal(
      "",
      ...ngDevMode ? [{ debugName: "editing_key" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.expanded = signal(
      {},
      ...ngDevMode ? [{ debugName: "expanded" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.edit_value = "";
    this.has_overrides = computed(
      () => Object.keys(this._settings.debug_overrides()).length > 0,
      ...ngDevMode ? [{ debugName: "has_overrides" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.rows = computed(
      () => {
        const schema = this.schema();
        const debug_overrides = this._settings.debug_overrides();
        const keys = /* @__PURE__ */ new Set();
        flattenKeys({ app: DEFAULT_SETTINGS.app }, "", keys);
        for (const layer of this._settings.overrides()) {
          flattenKeys({ app: layer }, "", keys);
        }
        if (schema)
          flattenSchemaKeys(schema, schema, "app", keys);
        for (const key in debug_overrides)
          keys.add(key);
        const search = this.filter().toLowerCase();
        return [...keys].filter((key) => key.slice(4).toLowerCase().includes(search)).sort().map((key) => {
          var _a, _b;
          const node = schemaNode(schema, key);
          const value = this._settings.get(key);
          let control = "text";
          if ((_a = node == null ? void 0 : node.enum) == null ? void 0 : _a.length)
            control = "select";
          else if ((node == null ? void 0 : node.type) === "boolean" || typeof value === "boolean") {
            control = "toggle";
          } else if ((node == null ? void 0 : node.type) === "number" || (node == null ? void 0 : node.type) === "integer" || typeof value === "number") {
            control = "number";
          }
          return {
            key,
            label: key.slice(4),
            value,
            display: JSON.stringify(value) ?? "",
            overridden: key in debug_overrides,
            description: (node == null ? void 0 : node.description) || "",
            zones: this._zoneTooltip(key),
            control,
            options: (_b = node == null ? void 0 : node.enum) == null ? void 0 : _b.map((value2, index) => {
              var _a2;
              return {
                value: value2,
                label: ((_a2 = node.enumNames) == null ? void 0 : _a2[index]) || optionLabel(value2)
              };
            })
          };
        });
      },
      ...ngDevMode ? [{ debugName: "rows" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.entries = computed(
      () => {
        const show_all = !!this.filter();
        const expanded = this.expanded();
        const entries = [];
        let entry = null;
        for (const row of this.rows()) {
          const index = row.label.indexOf(".");
          if (index < 0) {
            entry = null;
            entries.push({ rows: [row], grouped: false });
            continue;
          }
          const group = row.label.slice(0, index);
          if (!(entry == null ? void 0 : entry.header) || entry.header.name !== group) {
            entry = {
              header: { name: group, count: 0, overridden: 0 },
              rows: [],
              grouped: true
            };
            entries.push(entry);
          }
          entry.header.count += 1;
          if (row.overridden)
            entry.header.overridden += 1;
          if (show_all || expanded[group]) {
            entry.rows.push(__spreadProps(__spreadValues({}, row), {
              label: row.label.slice(index + 1)
            }));
          }
        }
        return entries;
      },
      ...ngDevMode ? [{ debugName: "entries" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  _zoneTooltip(key) {
    const zones = [];
    const add_zone = (type, id, name, settings) => {
      if (!id || !settings.some((_) => hasSetting(_, key)))
        return;
      zones.push({ type, id, name: name || id });
    };
    for (const [id, settings] of Object.entries(this._org.building_settings)) {
      const building = this._org.buildings.find((_) => _.id === id);
      add_zone("Building", id, (building == null ? void 0 : building.display_name) || (building == null ? void 0 : building.name) || "", [settings]);
    }
    for (const [id, settings] of Object.entries(this._org.region_settings)) {
      const region = this._org.regions.find((_) => _.id === id);
      add_zone("Region", id, (region == null ? void 0 : region.display_name) || (region == null ? void 0 : region.name) || "", [
        settings
      ]);
    }
    const organisation = this._org.organisation;
    add_zone("ORG", organisation.id, organisation.name, this._org.settings);
    return zones;
  }
  toggleGroup(name) {
    this.expanded.update((state) => __spreadProps(__spreadValues({}, state), { [name]: !state[name] }));
  }
  startEdit(row) {
    this.editing_key.set(row.key);
    this.edit_value = row.control === "text" ? row.display : `${row.value ?? ""}`;
  }
  toggleValue(row) {
    this._settings.setDebugOverride(row.key, !row.value);
  }
  selectValue(row, value) {
    this._settings.setDebugOverride(row.key, value);
  }
  saveEdit() {
    const key = this.editing_key();
    const row = this.rows().find((_) => _.key === key);
    if (!row)
      return;
    let value = this.edit_value;
    if (row.control === "number") {
      value = parseFloat(this.edit_value);
      if (isNaN(value))
        return;
    } else if (row.control === "text") {
      try {
        value = JSON.parse(this.edit_value);
      } catch {
      }
    }
    this._settings.setDebugOverride(key, value);
    this.editing_key.set("");
  }
  clearOverride(key) {
    this._settings.setDebugOverride(key, void 0);
  }
  addSetting() {
    var _a, _b;
    const prompt = (_a = this._document.defaultView) == null ? void 0 : _a.prompt.bind(this._document.defaultView);
    const name = (_b = prompt == null ? void 0 : prompt("Setting key", "app.")) == null ? void 0 : _b.trim();
    if (!name || name === "app.")
      return;
    const input2 = prompt == null ? void 0 : prompt("Setting value (JSON or plain text)", "");
    if (input2 == null)
      return;
    let value = input2;
    try {
      value = JSON.parse(input2);
    } catch {
    }
    const key = name.startsWith("app.") ? name : `app.${name}`;
    this._settings.setDebugOverride(key, value);
  }
  copyOverrides() {
    this._clipboard.copy(JSON.stringify(this._settings.debug_overrides(), null, 2));
  }
  clearAll() {
    this._settings.clearDebugOverrides();
  }
};
_SettingsDebugPanelComponent.\u0275fac = function SettingsDebugPanelComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SettingsDebugPanelComponent)();
};
_SettingsDebugPanelComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsDebugPanelComponent, selectors: [["settings-debug-panel"]], inputs: { schema: [1, "schema"], show: [1, "show"] }, outputs: { show: "showChange" }, decls: 3, vars: 1, consts: [["zone_tooltip", ""], [1, "border-base-300", "bg-base-200", "text-base-content", "fixed", "inset-y-0", "right-0", "z-998", "flex", "max-w-[90vw]", "flex-col", "border-l", "shadow-xl", 3, "width"], [1, "border-base-300", "bg-base-200", "text-base-content", "fixed", "inset-y-0", "right-0", "z-998", "flex", "max-w-[90vw]", "flex-col", "border-l", "shadow-xl"], ["role", "separator", "tabindex", "0", "aria-label", "Resize panel", "aria-orientation", "vertical", 1, "hover:bg-primary/30", "focus-visible:bg-primary/30", "absolute", "inset-y-0", "-left-1", "z-10", "w-2", "cursor-col-resize", "touch-none", "select-none", "focus-visible:outline-2", 3, "pointerdown", "pointermove", "pointerup", "pointercancel", "keydown"], [1, "border-base-300", "bg-base-100", "flex", "items-center", "border-b", "p-2"], ["icon", "", "default", "", "matRipple", "", 1, "text-sm", 3, "click"], [1, "flex-1", "px-3", "text-lg", "font-medium"], [1, "flex", "items-center", "gap-2", "text-xs"], ["icon", "", "default", "", "matRipple", "", "matTooltip", "Add setting", "matTooltipPosition", "below", "aria-label", "Add setting", 3, "click"], [1, "relative", "m-1", "flex"], ["name", "setting-filter", "placeholder", "Filter settings...", 1, "border-base-300", "bg-base-100", "w-full", "rounded-lg", "border", "px-8", "py-2", "pr-2", "font-mono", "text-sm", "shadow", 3, "ngModelChange", "ngModel"], [1, "absolute", "top-1/2", "left-1", "-translate-y-1/2", "text-xl"], [1, "flex-1", "overflow-auto"], [1, "p-4", "text-center", "opacity-30"], [1, "border-base-300", "bg-base-100", "border-t", "p-2", "text-xs", "opacity-60"], ["icon", "", "default", "", "matRipple", "", "matTooltip", "Copy overrides", "matTooltipPosition", "below", "aria-label", "Copy overrides", 3, "click"], ["icon", "", "default", "", "error", "", "matRipple", "", "matTooltip", "Clear all overrides", "matTooltipPosition", "below", "aria-label", "Clear all overrides", 3, "click"], [1, "border-base-300", "bg-base-100", "hover:bg-base-100", "sticky", "top-0", "z-10", "flex", "min-h-8", "w-full", "items-center", "gap-1", "border-b", "px-2", "py-1", "text-left", "text-xs"], [1, "border-base-300", "grid", "min-h-8", "grid-cols-[minmax(0,1fr)_auto_auto]", "items-center", "border-b", "py-1", "pr-2", "text-xs", 3, "pl-8", "pl-2", "bg-warning-light"], [1, "border-base-300", "bg-base-100", "hover:bg-base-100", "sticky", "top-0", "z-10", "flex", "min-h-8", "w-full", "items-center", "gap-1", "border-b", "px-2", "py-1", "text-left", "text-xs", 3, "click"], [1, "text-sm", "transition-transform"], [1, "font-mono"], [1, "opacity-40"], [1, "bg-warning-light", "rounded-sm", "px-1", "text-[0.65rem]", "text-black"], [1, "border-base-300", "grid", "min-h-8", "grid-cols-[minmax(0,1fr)_auto_auto]", "items-center", "border-b", "py-1", "pr-2", "text-xs"], [1, "min-w-0", "pr-2"], [1, "flex", "min-w-0", "items-center", "gap-1", "font-mono"], [1, "truncate"], ["customTooltip", "", "xPosition", "center", "yPosition", "bottom", 1, "shrink-0", 3, "content", "data", "hover", "backdrop", "xOffset"], [1, "text-sm", "opacity-60"], [1, "truncate", "text-[0.65rem]", "opacity-60", 3, "title"], ["name", "setting-value", 1, "border-base-300", "bg-base-100", "focus:border-info", "focus:ring-info", "h-8", "w-full", "rounded-md", "border", "px-2", "font-mono", "shadow-sm", "outline-none", "focus:ring-2", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["icon", "", "matRipple", "", "title", "Clear override"], ["icon", "", "matRipple", "", "title", "Clear override", 3, "click"], [1, "text-sm"], ["name", "setting-value", "type", "number", 1, "border-base-300", "bg-base-100", "focus:border-info", "focus:ring-info", "h-8", "w-full", "rounded-md", "border", "px-2", "font-mono", "shadow-sm", "outline-none", "focus:ring-2", 3, "ngModelChange", "keydown.enter", "keydown.escape", "ngModel"], ["icon", "", "matRipple", "", "title", "Save override", 3, "click"], ["name", "setting-value", 1, "border-base-300", "bg-base-100", "focus:border-info", "focus:ring-info", "h-8", "w-full", "rounded-md", "border", "px-2", "font-mono", "shadow-sm", "outline-none", "focus:ring-2", 3, "ngModelChange", "keydown.enter", "keydown.escape", "ngModel"], [1, "flex"], [1, "border-base-300", "bg-base-100", "hover:border-info", "flex", "h-8", "w-full", "cursor-pointer", "items-center", "truncate", "rounded-md", "border", "px-2", "font-mono", "shadow-sm", "transition-colors", 3, "class", "title"], [1, "relative", "h-4", "w-8", "rounded-full", "transition-colors", 3, "click", "title"], [1, "absolute", "top-0.5", "left-0.5", "h-3", "w-3", "rounded-full", "bg-white", "shadow-sm", "transition-transform"], [1, "border-base-300", "bg-base-100", "hover:border-info", "flex", "h-8", "w-full", "cursor-pointer", "items-center", "truncate", "rounded-md", "border", "px-2", "font-mono", "shadow-sm", "transition-colors", 3, "click", "title"], [1, "border-base-300", "bg-base-100", "text-base-content", "min-w-64", "rounded-lg", "border", "p-2", "shadow-lg"], [1, "border-base-300", "border-b", "px-1", "pb-2", "text-base", "font-medium"], [1, "flex", "flex-col", "gap-1", "pt-2"], [1, "bg-base-200", "flex", "items-start", "gap-2", "rounded-sm", "p-2"], [1, "px-1", "py-2", "text-xs", "opacity-60"], [1, "w-1/2", "min-w-0", "flex-1"], [1, "truncate", "text-base", "font-medium"], [1, "truncate", "font-mono", "text-[0.625rem]", "opacity-60"], [1, "bg-base-300", "rounded-sm", "px-1.5", "py-0.5", "text-[0.625rem]", "font-medium"]], template: function SettingsDebugPanelComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SettingsDebugPanelComponent_Conditional_0_Template, 23, 8, "aside", 1);
    \u0275\u0275template(1, SettingsDebugPanelComponent_ng_template_1_Template, 7, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.show() ? 0 : -1);
  }
}, dependencies: [
  FormsModule,
  NgSelectOption,
  \u0275NgSelectMultipleOption,
  DefaultValueAccessor,
  NumberValueAccessor,
  SelectControlValueAccessor,
  NgControlStatus,
  NgModel,
  MatRippleModule,
  MatRipple,
  MatTooltipModule,
  MatTooltip,
  CustomTooltipComponent,
  IconComponent
], encapsulation: 2 });
var SettingsDebugPanelComponent = _SettingsDebugPanelComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsDebugPanelComponent, [{
    type: Component,
    args: [{
      selector: "settings-debug-panel",
      template: `
        @if (show()) {
            <aside
                [style.width]="resize.panel_width()"
                class="border-base-300 bg-base-200 text-base-content fixed inset-y-0 right-0 z-998 flex max-w-[90vw] flex-col border-l shadow-xl"
            >
                <div
                    role="separator"
                    tabindex="0"
                    aria-label="Resize panel"
                    aria-orientation="vertical"
                    [attr.aria-valuemin]="resize.min_width"
                    [attr.aria-valuemax]="resize.maxWidth()"
                    [attr.aria-valuenow]="resize.width()"
                    class="hover:bg-primary/30 focus-visible:bg-primary/30 absolute inset-y-0 -left-1 z-10 w-2 cursor-col-resize touch-none select-none focus-visible:outline-2"
                    (pointerdown)="resize.start($event)"
                    (pointermove)="resize.move($event)"
                    (pointerup)="resize.end($event)"
                    (pointercancel)="resize.end($event)"
                    (keydown)="resize.onKeydown($event)"
                ></div>
                <header
                    class="border-base-300 bg-base-100 flex items-center border-b p-2"
                >
                    <button
                        icon
                        default
                        matRipple
                        class="text-sm"
                        (click)="show.set(false)"
                    >
                        <icon>close</icon>
                    </button>
                    <div class="flex-1 px-3 text-lg font-medium">
                        Settings Viewer
                    </div>
                    <div class="flex items-center gap-2 text-xs">
                        <button
                            icon
                            default
                            matRipple
                            matTooltip="Add setting"
                            matTooltipPosition="below"
                            aria-label="Add setting"
                            (click)="addSetting()"
                        >
                            <icon>add</icon>
                        </button>
                        @if (has_overrides()) {
                            <button
                                icon
                                default
                                matRipple
                                matTooltip="Copy overrides"
                                matTooltipPosition="below"
                                aria-label="Copy overrides"
                                (click)="copyOverrides()"
                            >
                                <icon>content_copy</icon>
                            </button>
                            <button
                                icon
                                default
                                error
                                matRipple
                                matTooltip="Clear all overrides"
                                matTooltipPosition="below"
                                aria-label="Clear all overrides"
                                (click)="clearAll()"
                            >
                                <icon>delete_sweep</icon>
                            </button>
                        }
                    </div>
                </header>

                <div class="relative m-1 flex">
                    <input
                        name="setting-filter"
                        [(ngModel)]="filter"
                        placeholder="Filter settings..."
                        class="border-base-300 bg-base-100 w-full rounded-lg border px-8 py-2 pr-2 font-mono text-sm shadow"
                    />
                    <icon
                        class="absolute top-1/2 left-1 -translate-y-1/2 text-xl"
                        >search</icon
                    >
                </div>
                <div class="flex-1 overflow-auto">
                    @for (entry of entries(); track $index) {
                        <section>
                            @if (entry.header; as group) {
                                <button
                                    class="border-base-300 bg-base-100 hover:bg-base-100 sticky top-0 z-10 flex min-h-8 w-full items-center gap-1 border-b px-2 py-1 text-left text-xs"
                                    (click)="toggleGroup(group.name)"
                                >
                                    <icon
                                        class="text-sm transition-transform"
                                        [class.rotate-90]="
                                            filter() || expanded()[group.name]
                                        "
                                    >
                                        chevron_right
                                    </icon>
                                    <span class="font-mono">{{
                                        group.name
                                    }}</span>
                                    <span class="opacity-40">
                                        ({{ group.count }})
                                    </span>
                                    @if (group.overridden) {
                                        <span
                                            class="bg-warning-light rounded-sm px-1 text-[0.65rem] text-black"
                                        >
                                            {{ group.overridden }} overridden
                                        </span>
                                    }
                                </button>
                            }
                            @for (row of entry.rows; track row.key) {
                                <div
                                    class="border-base-300 grid min-h-8 grid-cols-[minmax(0,1fr)_auto_auto] items-center border-b py-1 pr-2 text-xs"
                                    [class.pl-8]="entry.grouped"
                                    [class.pl-2]="!entry.grouped"
                                    [class.bg-warning-light]="row.overridden"
                                >
                                    <div
                                        class="min-w-0 pr-2"
                                        [class.col-span-3]="
                                            row.control !== 'toggle'
                                        "
                                        [class.pb-1]="row.control !== 'toggle'"
                                    >
                                        <div
                                            class="flex min-w-0 items-center gap-1 font-mono"
                                        >
                                            <span class="truncate">
                                                {{ row.label }}
                                            </span>
                                            <span
                                                customTooltip
                                                class="shrink-0"
                                                [content]="zone_tooltip"
                                                [data]="{ zones: row.zones }"
                                                [hover]="true"
                                                [backdrop]="false"
                                                xPosition="center"
                                                yPosition="bottom"
                                                [xOffset]="20"
                                            >
                                                <icon class="text-sm opacity-60"
                                                    >info</icon
                                                >
                                            </span>
                                        </div>
                                        @if (row.description) {
                                            <div
                                                class="truncate text-[0.65rem] opacity-60"
                                                [title]="row.description"
                                            >
                                                {{ row.description }}
                                            </div>
                                        }
                                    </div>
                                    @switch (
                                        row.control === 'select' ||
                                        editing_key() === row.key
                                            ? row.control
                                            : ''
                                    ) {
                                        @case ('select') {
                                            <select
                                                name="setting-value"
                                                class="border-base-300 bg-base-100 focus:border-info focus:ring-info h-8 w-full rounded-md border px-2 font-mono shadow-sm outline-none focus:ring-2"
                                                [ngModel]="row.value"
                                                (ngModelChange)="
                                                    selectValue(row, $event)
                                                "
                                            >
                                                @for (
                                                    option of row.options;
                                                    track $index
                                                ) {
                                                    <option
                                                        [ngValue]="option.value"
                                                    >
                                                        {{ option.label }}
                                                    </option>
                                                }
                                            </select>
                                            @if (row.overridden) {
                                                <button
                                                    icon
                                                    matRipple
                                                    title="Clear override"
                                                    (click)="
                                                        clearOverride(row.key)
                                                    "
                                                >
                                                    <icon class="text-sm"
                                                        >undo</icon
                                                    >
                                                </button>
                                            }
                                        }
                                        @case ('number') {
                                            <input
                                                name="setting-value"
                                                type="number"
                                                class="border-base-300 bg-base-100 focus:border-info focus:ring-info h-8 w-full rounded-md border px-2 font-mono shadow-sm outline-none focus:ring-2"
                                                [(ngModel)]="edit_value"
                                                (keydown.enter)="saveEdit()"
                                                (keydown.escape)="
                                                    editing_key.set('')
                                                "
                                            />
                                            <button
                                                icon
                                                matRipple
                                                title="Save override"
                                                (click)="saveEdit()"
                                            >
                                                <icon class="text-sm"
                                                    >check</icon
                                                >
                                            </button>
                                        }
                                        @case ('text') {
                                            <input
                                                name="setting-value"
                                                class="border-base-300 bg-base-100 focus:border-info focus:ring-info h-8 w-full rounded-md border px-2 font-mono shadow-sm outline-none focus:ring-2"
                                                [(ngModel)]="edit_value"
                                                (keydown.enter)="saveEdit()"
                                                (keydown.escape)="
                                                    editing_key.set('')
                                                "
                                            />
                                            <button
                                                icon
                                                matRipple
                                                title="Save override"
                                                (click)="saveEdit()"
                                            >
                                                <icon class="text-sm"
                                                    >check</icon
                                                >
                                            </button>
                                        }
                                        @default {
                                            @if (row.control === 'toggle') {
                                                <div class="flex">
                                                    <button
                                                        class="relative h-4 w-8 rounded-full transition-colors"
                                                        [class.bg-info]="
                                                            row.value
                                                        "
                                                        [class.bg-base-300]="
                                                            !row.value
                                                        "
                                                        [title]="row.display"
                                                        (click)="
                                                            toggleValue(row)
                                                        "
                                                    >
                                                        <div
                                                            class="absolute top-0.5 left-0.5 h-3 w-3 rounded-full bg-white shadow-sm transition-transform"
                                                            [class.translate-x-4]="
                                                                row.value
                                                            "
                                                        ></div>
                                                    </button>
                                                </div>
                                            } @else {
                                                <div
                                                    class="border-base-300 bg-base-100 hover:border-info flex h-8 w-full cursor-pointer items-center truncate rounded-md border px-2 font-mono shadow-sm transition-colors"
                                                    [class]="
                                                        row.display
                                                            ? 'opacity-80'
                                                            : 'italic opacity-40'
                                                    "
                                                    [title]="
                                                        row.display || 'unset'
                                                    "
                                                    (click)="startEdit(row)"
                                                >
                                                    {{ row.display || 'unset' }}
                                                </div>
                                            }
                                            @if (row.overridden) {
                                                <button
                                                    icon
                                                    matRipple
                                                    title="Clear override"
                                                    (click)="
                                                        clearOverride(row.key)
                                                    "
                                                >
                                                    <icon class="text-sm"
                                                        >undo</icon
                                                    >
                                                </button>
                                            }
                                        }
                                    }
                                </div>
                            }
                        </section>
                    } @empty {
                        <div class="p-4 text-center opacity-30">
                            No matching settings
                        </div>
                    }
                </div>
                <div
                    class="border-base-300 bg-base-100 border-t p-2 text-xs opacity-60"
                >
                    Click a value to override it. Text values are parsed as
                    JSON, falling back to plain strings. Overrides are stored
                    locally in this browser.
                </div>
            </aside>
        }
        <ng-template #zone_tooltip let-zones="zones">
            <div
                class="border-base-300 bg-base-100 text-base-content min-w-64 rounded-lg border p-2 shadow-lg"
            >
                <div
                    class="border-base-300 border-b px-1 pb-2 text-base font-medium"
                >
                    Setting sources
                </div>
                <div class="flex flex-col gap-1 pt-2">
                    @for (zone of zones; track zone.type + zone.id) {
                        <div
                            class="bg-base-200 flex items-start gap-2 rounded-sm p-2"
                        >
                            <div class="w-1/2 min-w-0 flex-1">
                                <div class="truncate text-base font-medium">
                                    {{ zone.name }}
                                </div>
                                <div
                                    class="truncate font-mono text-[0.625rem] opacity-60"
                                >
                                    {{ zone.id }}
                                </div>
                            </div>
                            <span
                                class="bg-base-300 rounded-sm px-1.5 py-0.5 text-[0.625rem] font-medium"
                            >
                                {{ zone.type }}
                            </span>
                        </div>
                    } @empty {
                        <div class="px-1 py-2 text-xs opacity-60">
                            No zone metadata value
                        </div>
                    }
                </div>
            </div>
        </ng-template>
    `,
      imports: [
        FormsModule,
        MatRippleModule,
        MatTooltipModule,
        CustomTooltipComponent,
        IconComponent
      ]
    }]
  }], null, { schema: [{ type: Input, args: [{ isSignal: true, alias: "schema", required: false }] }], show: [{ type: Input, args: [{ isSignal: true, alias: "show", required: false }] }, { type: Output, args: ["showChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsDebugPanelComponent, { className: "SettingsDebugPanelComponent", filePath: "libs/components/src/lib/settings-debug-panel.component.ts", lineNumber: 491 });
})();
export {
  SettingsDebugPanelComponent
};
//# debugId=f948beb8-630d-5e27-9c16-820d91a354de
//# sourceMappingURL=settings-debug-panel.component-D5GRCJY7.js.map
