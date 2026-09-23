import {
  DebugPanelResize
} from "./chunk-T4VCODQG.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-KZUOTIU5.js";
import {
  AsyncHandler,
  Br,
  Clipboard,
  DefaultValueAccessor,
  FormsModule,
  HotkeysService,
  IconComponent,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgModel,
  ba
} from "./chunk-3OQ2BSWE.js";
import {
  Component,
  DOCUMENT,
  Input,
  Output,
  computed,
  effect,
  inject,
  input,
  model,
  resource,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-E52RJLI7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/components/src/lib/binding-debug-panel.component.ts
var _c0 = (a0, a1) => [a0, a1];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.key;
function BindingDebugPanelComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearAllOverrides());
    });
    \u0275\u0275text(1, " Clear overrides ");
    \u0275\u0275elementEnd();
  }
}
function BindingDebugPanelComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearMessages());
    });
    \u0275\u0275text(1, " Clear messages ");
    \u0275\u0275elementEnd();
  }
}
function BindingDebugPanelComponent_Conditional_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.filter.set(""));
    });
    \u0275\u0275text(1, " Clear search ");
    \u0275\u0275elementEnd();
  }
}
function BindingDebugPanelComponent_Conditional_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1, " Local overrides are active. Incoming driver values are hidden until you restore them. ");
    \u0275\u0275elementEnd();
  }
}
function BindingDebugPanelComponent_Conditional_0_For_32_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const system_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", system_r7.id, " ");
  }
}
function BindingDebugPanelComponent_Conditional_0_For_32_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const system_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", system_r7.active_count, "/", system_r7.binding_count, " active ");
  }
}
function BindingDebugPanelComponent_Conditional_0_For_32_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const system_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", system_r7.message_count, " commands ");
  }
}
function BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const module_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", module_r9.active_count, "/", module_r9.bindings.length, " active ");
  }
}
function BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const module_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", module_r9.messages.length, " commands ");
  }
}
function BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, " overridden ");
    \u0275\u0275elementEnd();
  }
}
function BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "label", 42);
    \u0275\u0275text(2, "Local override value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 43);
    \u0275\u0275twoWayListener("ngModelChange", function BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_7_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(8);
      \u0275\u0275twoWayBindingSet(ctx_r1.edit_value, $event) || (ctx_r1.edit_value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.escape", function BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_7_Template_textarea_keydown_escape_3_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(8);
      return \u0275\u0275resetView(ctx_r1.editing_key.set(""));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(4, "p", 44);
    \u0275\u0275text(5, " Enter JSON for numbers, booleans, arrays or objects. Other text is a string. This does not send a command to the driver. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 45)(7, "button", 46);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_7_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const row_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.saveOverride(row_r11));
    });
    \u0275\u0275text(8, " Apply override ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 47);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_7_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(8);
      return \u0275\u0275resetView(ctx_r1.editing_key.set(""));
    });
    \u0275\u0275text(10, " Cancel ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275property("for", "override-" + row_r11.key);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "override-" + row_r11.key);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.edit_value);
    \u0275\u0275control();
  }
}
function BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "details", 48)(1, "summary", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "pre", 50);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 51);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_8_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const row_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.startOverride(row_r11));
    });
    \u0275\u0275text(6, " Override value ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 52);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_8_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r12);
      const row_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.copyValue(row_r11.current_value, "binding|" + row_r11.key));
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.formatValue(row_r11.current_value));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatValue(row_r11.current_value), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatValue(row_r11.current_value, true));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", "Copy " + row_r11.name + " value");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.copyLabel("binding|" + row_r11.key), " ");
  }
}
function BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const row_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.clearOverride(row_r11));
    });
    \u0275\u0275text(1, " Restore driver value ");
    \u0275\u0275elementEnd();
  }
}
function BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "span", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_6_Template, 2, 0, "span", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_7_Template, 11, 3, "div", 39)(8, BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_8_Template, 9, 5);
    \u0275\u0275elementStart(9, "div", 40)(10, "span", 41);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_12_Template, 2, 0, "button", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275classProp("bg-warning-light", row_r11.is_overridden);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r11.name, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success-light", row_r11.active)("text-success", row_r11.active)("bg-base-300", !row_r11.active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", row_r11.active ? "active" : "inactive", " \xB7 ", row_r11.count, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r11.is_overridden ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.editing_key() === row_r11.key ? 7 : 8);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Last update: ", ctx_r1.formatTime(row_r11.updated_at), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r11.is_overridden ? 12 : -1);
  }
}
function BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Template, 13, 15, "div", 33, _forTrack1);
  }
  if (rf & 2) {
    const module_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(module_r9.bindings);
  }
}
function BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_1_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const command_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", command_r14.receive.time - command_r14.send.time, " ms ");
  }
}
function BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_1_For_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 61);
    \u0275\u0275text(1, " Sent value is no longer in the message history. ");
    \u0275\u0275elementEnd();
  }
}
function BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_1_For_1_For_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 64)(2, "span", 65);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 66);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_1_For_1_For_13_Conditional_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r15);
      const message_r16 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(8);
      return \u0275\u0275resetView(ctx_r1.copyValue(message_r16.value, message_r16.direction + "|" + message_r16.id));
    });
    \u0275\u0275elementStart(5, "icon", 67);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "details", 68)(8, "summary", 69);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "pre", 70);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const message_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(8);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-error", message_r16.error);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(message_r16.direction === "send" ? "Sent" : message_r16.error ? "Error" : "Received");
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.copyLabel(message_r16.direction + "|" + message_r16.id));
    \u0275\u0275attribute("aria-label", "Copy " + message_r16.method + " " + message_r16.direction + " value");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.copyLabel(message_r16.direction + "|" + message_r16.id) === "Copied" ? "check" : "content_copy");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r1.formatValue(message_r16.value));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatValue(message_r16.value), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatValue(message_r16.value, true));
  }
}
function BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_1_For_1_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_1_For_1_For_13_Conditional_0_Template, 12, 9, "div", 63);
  }
  if (rf & 2) {
    const message_r16 = ctx.$implicit;
    \u0275\u0275conditional(message_r16 ? 0 : -1);
  }
}
function BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_1_For_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 62);
    \u0275\u0275text(1, " Waiting for a response... ");
    \u0275\u0275elementEnd();
  }
}
function BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 53)(1, "div", 54)(2, "div", 55)(3, "div", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 57);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 58);
    \u0275\u0275conditionalCreate(8, BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_1_For_1_Conditional_8_Template, 2, 1, "div", 59);
    \u0275\u0275elementStart(9, "div", 60);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(11, BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_1_For_1_Conditional_11_Template, 2, 0, "p", 61);
    \u0275\u0275repeaterCreate(12, BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_1_For_1_For_13_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(14, BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_1_For_1_Conditional_14_Template, 2, 0, "p", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const command_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", command_r14.method, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" #", command_r14.id, " \xB7 ", ctx_r1.formatTime(command_r14.time), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(command_r14.send && command_r14.receive ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-error-content", command_r14.receive?.error)("text-success-content", command_r14.receive && !command_r14.receive.error)("bg-error", command_r14.receive?.error)("bg-success", command_r14.receive && !command_r14.receive.error);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", command_r14.receive ? command_r14.receive.error ? "Failed" : "Completed" : "Pending", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!command_r14.send ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction2(15, _c0, command_r14.send, command_r14.receive));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!command_r14.receive ? 14 : -1);
  }
}
function BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_1_For_1_Template, 15, 18, "article", 53, _forTrack0);
  }
  if (rf & 2) {
    const module_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(module_r9.messages);
  }
}
function BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_0_Template, 2, 0)(1, BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Conditional_1_Template, 2, 0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275conditional(ctx_r1.tab() === "bindings" ? 0 : 1);
  }
}
function BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Template_button_click_0_listener() {
      const module_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleGroup("module|" + module_r9.key));
    });
    \u0275\u0275elementStart(1, "icon", 26);
    \u0275\u0275text(2, "chevron_right");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_5_Template, 2, 2, "span", 30)(6, BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_6_Template, 2, 1, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Conditional_7_Template, 2, 1);
  }
  if (rf & 2) {
    const module_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275attribute("aria-expanded", ctx_r1.isExpanded("module|" + module_r9.key));
    \u0275\u0275advance();
    \u0275\u0275classProp("rotate-90", ctx_r1.isExpanded("module|" + module_r9.key));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", module_r9.id, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tab() === "bindings" ? 5 : 6);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isExpanded("module|" + module_r9.key) ? 7 : -1);
  }
}
function BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_For_1_Template, 8, 6, null, null, _forTrack1);
  }
  if (rf & 2) {
    const system_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(system_r7.modules);
  }
}
function BindingDebugPanelComponent_Conditional_0_For_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section")(1, "button", 25);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_For_32_Template_button_click_1_listener() {
      const system_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleGroup("system|" + system_r7.id));
    });
    \u0275\u0275elementStart(2, "icon", 26);
    \u0275\u0275text(3, "chevron_right");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 27)(5, "span", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, BindingDebugPanelComponent_Conditional_0_For_32_Conditional_7_Template, 2, 1, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, BindingDebugPanelComponent_Conditional_0_For_32_Conditional_8_Template, 2, 2, "span", 30)(9, BindingDebugPanelComponent_Conditional_0_For_32_Conditional_9_Template, 2, 1, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, BindingDebugPanelComponent_Conditional_0_For_32_Conditional_10_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const system_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", ctx_r1.isExpanded("system|" + system_r7.id));
    \u0275\u0275advance();
    \u0275\u0275classProp("rotate-90", ctx_r1.isExpanded("system|" + system_r7.id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", system_r7.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(system_r7.name !== system_r7.id ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tab() === "bindings" ? 8 : 9);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isExpanded("system|" + system_r7.id) ? 10 : -1);
  }
}
function BindingDebugPanelComponent_Conditional_0_ForEmpty_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "p", 71);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.filter().trim() ? "No matching results" : ctx_r1.tab() === "bindings" ? "No bindings observed yet" : "No commands observed yet", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.filter().trim() ? "Try a different name or value, or clear the search." : "Use the app to see driver activity here.", " ");
  }
}
function BindingDebugPanelComponent_Conditional_0_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Only the latest 250 messages are kept. ");
  }
}
function BindingDebugPanelComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aside", 1)(1, "div", 2);
    \u0275\u0275listener("pointerdown", function BindingDebugPanelComponent_Conditional_0_Template_div_pointerdown_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resize.start($event));
    })("pointermove", function BindingDebugPanelComponent_Conditional_0_Template_div_pointermove_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resize.move($event));
    })("pointerup", function BindingDebugPanelComponent_Conditional_0_Template_div_pointerup_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resize.end($event));
    })("pointercancel", function BindingDebugPanelComponent_Conditional_0_Template_div_pointercancel_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resize.end($event));
    })("keydown", function BindingDebugPanelComponent_Conditional_0_Template_div_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resize.onKeydown($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "header", 3)(3, "button", 4);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show.set(false));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275text(7, " Driver debug ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, BindingDebugPanelComponent_Conditional_0_Conditional_8_Template, 2, 0, "button", 6)(9, BindingDebugPanelComponent_Conditional_0_Conditional_9_Template, 2, 0, "button", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 8)(11, "button", 9);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tab.set("bindings"));
    });
    \u0275\u0275elementStart(12, "div");
    \u0275\u0275text(13, "Bindings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 10);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 9);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tab.set("executes"));
    });
    \u0275\u0275elementStart(17, "div");
    \u0275\u0275text(18, "Commands");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 10);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 11)(22, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function BindingDebugPanelComponent_Conditional_0_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filter, $event) || (ctx_r1.filter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(23, "icon", 13);
    \u0275\u0275text(24, "search");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 14)(26, "span", 15);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(28, BindingDebugPanelComponent_Conditional_0_Conditional_28_Template, 2, 0, "button", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(29, BindingDebugPanelComponent_Conditional_0_Conditional_29_Template, 2, 0, "p", 17);
    \u0275\u0275elementStart(30, "div", 18);
    \u0275\u0275repeaterCreate(31, BindingDebugPanelComponent_Conditional_0_For_32_Template, 11, 7, "section", null, _forTrack0, false, BindingDebugPanelComponent_Conditional_0_ForEmpty_33_Template, 5, 2, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "footer", 20)(35, "div", 21);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, " Ctrl + Alt + Shift + B to toggle. Overrides stay active when this panel is closed. ");
    \u0275\u0275conditionalCreate(38, BindingDebugPanelComponent_Conditional_0_Conditional_38_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", ctx_r1.resize.panel_width());
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-valuemin", ctx_r1.resize.min_width)("aria-valuemax", ctx_r1.resize.maxWidth())("aria-valuenow", ctx_r1.resize.width());
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.tab() === "bindings" && ctx_r1.has_overrides() ? 8 : ctx_r1.tab() === "executes" && ctx_r1.execute_count() ? 9 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-secondary", ctx_r1.tab() === "bindings")("text-secondary-content", ctx_r1.tab() === "bindings");
    \u0275\u0275attribute("aria-pressed", ctx_r1.tab() === "bindings");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.binding_count(), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-secondary", ctx_r1.tab() === "executes")("text-secondary-content", ctx_r1.tab() === "executes");
    \u0275\u0275attribute("aria-pressed", ctx_r1.tab() === "executes");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.execute_count(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filter);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.visible_count(), " ", ctx_r1.tab() === "bindings" ? "bindings" : "commands", " shown");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.filter() ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.has_overrides() ? 29 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.systems());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.copy_status(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.tab() === "executes" ? 38 : -1);
  }
}
function pairExecuteMessages(messages) {
  const exchanges = /* @__PURE__ */ new Map();
  for (const message of messages) {
    let exchange = exchanges.get(message.id);
    if (!exchange) {
      exchange = {
        id: message.id,
        system_id: message.system_id,
        module_id: message.module_id,
        module_name: message.module_name,
        module_index: message.module_index,
        method: message.method,
        time: message.time
      };
      exchanges.set(message.id, exchange);
    }
    exchange[message.direction] = message;
    if (message.direction === "send")
      exchange.time = message.time;
  }
  return [...exchanges.values()];
}
var binding_records = signal(
  [],
  ...ngDevMode ? [{ debugName: "binding_records" }] : (
    /* istanbul ignore next */
    []
  )
);
var execute_messages = signal(
  [],
  ...ngDevMode ? [{ debugName: "execute_messages" }] : (
    /* istanbul ignore next */
    []
  )
);
var records_by_key = /* @__PURE__ */ new Map();
var system_name_cache = /* @__PURE__ */ new Map();
var execute_id = 0;
function bindingKey(module, binding) {
  return `${module.system.id}|${module.id}|${binding.name}`;
}
function trackBinding(module, binding) {
  const key = bindingKey(module, binding);
  if (records_by_key.has(key))
    return binding;
  const source = binding.listen();
  const emit = source.set.bind(source);
  const record = {
    key,
    system_id: module.system.id,
    module_id: module.id,
    module_name: module.name,
    module_index: module.index,
    name: binding.name,
    binding,
    value: signal(source.value),
    last_update: signal(source.value === void 0 ? 0 : Date.now()),
    overridden: signal(false),
    driver_value: source.value,
    emit
  };
  records_by_key.set(key, record);
  binding_records.update((records) => [...records, record]);
  source.subscribe((value) => record.value.set(value));
  source.set = (value) => {
    record.driver_value = value;
    record.last_update.set(Date.now());
    if (!record.overridden())
      emit(value);
  };
  return binding;
}
function addExecuteMessage(message) {
  execute_messages.update((messages) => [...messages, message].slice(-250));
}
function installBindingDebugHooks() {
  const prototype = Br.prototype;
  if (prototype.__binding_debug_hooks__)
    return;
  prototype.__binding_debug_hooks__ = true;
  const variable = Br.prototype.variable;
  Br.prototype.variable = function(name) {
    return trackBinding(this, variable.call(this, name));
  };
  const binding = Br.prototype.binding;
  Br.prototype.binding = function(name) {
    return trackBinding(this, binding.call(this, name));
  };
  const execute = Br.prototype.execute;
  Br.prototype.execute = function(method, args = [], timeout_delay) {
    const id = ++execute_id;
    const details = {
      id,
      system_id: this.system.id,
      module_id: this.id,
      module_name: this.name,
      module_index: this.index,
      method
    };
    addExecuteMessage(__spreadProps(__spreadValues({}, details), {
      direction: "send",
      value: args,
      time: Date.now(),
      error: false
    }));
    const request = execute.call(this, method, args, timeout_delay);
    request.then((value) => addExecuteMessage(__spreadProps(__spreadValues({}, details), {
      direction: "receive",
      value,
      time: Date.now(),
      error: false
    })), (error) => addExecuteMessage(__spreadProps(__spreadValues({}, details), {
      direction: "receive",
      value: error,
      time: Date.now(),
      error: true
    })));
    return request;
  };
}
installBindingDebugHooks();
var BindingDebugPanelComponent = class _BindingDebugPanelComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._hotkey = inject(HotkeysService);
    this._document = inject(DOCUMENT);
    this._clipboard = inject(Clipboard);
    this.show = model(
      false,
      ...ngDevMode ? [{ debugName: "show" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.resize = new DebugPanelResize(512, 100);
    this.hotkeysEnabled = input(
      true,
      ...ngDevMode ? [{ debugName: "hotkeysEnabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.tab = signal(
      "bindings",
      ...ngDevMode ? [{ debugName: "tab" }] : (
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
    this.expanded = signal(
      {},
      ...ngDevMode ? [{ debugName: "expanded" }] : (
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
    this.edit_value = signal(
      "",
      ...ngDevMode ? [{ debugName: "edit_value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.copy_status = signal(
      "",
      ...ngDevMode ? [{ debugName: "copy_status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.copy_result = signal(
      null,
      ...ngDevMode ? [{ debugName: "copy_result" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._refresh = signal(
      0,
      ...ngDevMode ? [{ debugName: "_refresh" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._system_names = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_system_names" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        if (!this.show())
          return void 0;
        return [
          .../* @__PURE__ */ new Set([
            ...binding_records().map((record) => record.system_id),
            ...execute_messages().map((message) => message.system_id)
          ])
        ];
      },
      loader: async ({ params }) => Object.fromEntries(await Promise.all(params.map(async (id) => {
        if (!system_name_cache.has(id)) {
          const system = await ba(id).catch(() => null);
          system_name_cache.set(id, system?.display_name || system?.name || id);
        }
        return [id, system_name_cache.get(id)];
      }))),
      defaultValue: {}
    }));
    this.binding_count = computed(
      () => binding_records().length,
      ...ngDevMode ? [{ debugName: "binding_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._exchanges = computed(
      () => pairExecuteMessages(execute_messages()),
      ...ngDevMode ? [{ debugName: "_exchanges" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.execute_count = computed(
      () => this._exchanges().length,
      ...ngDevMode ? [{ debugName: "execute_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_overrides = computed(
      () => binding_records().some((record) => record.overridden()),
      ...ngDevMode ? [{ debugName: "has_overrides" }] : (
        /* istanbul ignore next */
        []
      )
    );
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
    this._poll_counts = effect(
      (on_cleanup) => {
        if (!this.show())
          return;
        this._refresh.update((value) => value + 1);
        const timer = setInterval(() => this._refresh.update((value) => value + 1), 1e3);
        on_cleanup(() => clearInterval(timer));
      },
      ...ngDevMode ? [{ debugName: "_poll_counts" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.systems = computed(
      () => {
        this._refresh();
        const filter = this.filter().trim().toLowerCase();
        const selected_tab = this.tab();
        const system_names = this._system_names.value();
        const systems = /* @__PURE__ */ new Map();
        const get_module = (system_id, module_id, module_name, module_index) => {
          let system = systems.get(system_id);
          if (!system) {
            system = {
              id: system_id,
              name: system_names[system_id] || system_id,
              modules: [],
              binding_count: 0,
              active_count: 0,
              message_count: 0
            };
            systems.set(system_id, system);
          }
          const key = `${system_id}|${module_id}`;
          let module = system.modules.find((item) => item.key === key);
          if (!module) {
            module = {
              key,
              id: module_id,
              name: module_name,
              index: module_index,
              bindings: [],
              messages: [],
              active_count: 0
            };
            system.modules.push(module);
          }
          return { system, module };
        };
        if (selected_tab === "bindings") {
          for (const record of binding_records()) {
            const current_value = record.value();
            const haystack = `${record.system_id} ${system_names[record.system_id] || ""} ${record.module_id} ${record.name} ${this.formatValue(current_value)}`.toLowerCase();
            if (filter && !haystack.includes(filter))
              continue;
            const { system, module } = get_module(record.system_id, record.module_id, record.module_name, record.module_index);
            const count = record.binding.count;
            const row = __spreadProps(__spreadValues({}, record), {
              active: count > 0,
              count,
              current_value,
              updated_at: record.last_update(),
              is_overridden: record.overridden()
            });
            module.bindings.push(row);
            module.active_count += row.active ? 1 : 0;
            system.binding_count += 1;
            system.active_count += row.active ? 1 : 0;
          }
        } else {
          for (const message of this._exchanges()) {
            const haystack = `${message.system_id} ${system_names[message.system_id] || ""} ${message.module_id} ${message.method} ${message.send ? this.formatValue(message.send.value) : ""} ${message.receive ? this.formatValue(message.receive.value) : ""}`.toLowerCase();
            if (filter && !haystack.includes(filter))
              continue;
            const { system, module } = get_module(message.system_id, message.module_id, message.module_name, message.module_index);
            module.messages.push(message);
            system.message_count += 1;
          }
        }
        return [...systems.values()].sort((a, b) => a.id.localeCompare(b.id)).map((system) => __spreadProps(__spreadValues({}, system), {
          modules: system.modules.sort((a, b) => a.id.localeCompare(b.id)).map((module) => __spreadProps(__spreadValues({}, module), {
            bindings: module.bindings.sort((a, b) => a.name.localeCompare(b.name)),
            messages: module.messages.sort((a, b) => b.time - a.time)
          }))
        }));
      },
      ...ngDevMode ? [{ debugName: "systems" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.visible_count = computed(
      () => this.systems().reduce((total, system) => total + (this.tab() === "bindings" ? system.binding_count : system.message_count), 0),
      ...ngDevMode ? [{ debugName: "visible_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    if (!this.hotkeysEnabled())
      return;
    this.subscription("toggle", this._hotkey.listen(["Control", "Alt", "Shift", "KeyB"], () => this.show.set(!this.show())));
  }
  isExpanded(key) {
    return this.expanded()[`${this.filter().trim()}|${key}`] ?? !!this.filter().trim();
  }
  toggleGroup(key) {
    this.expanded.update((state) => __spreadProps(__spreadValues({}, state), {
      [`${this.filter().trim()}|${key}`]: !this.isExpanded(key)
    }));
  }
  startOverride(row) {
    this.editing_key.set(row.key);
    this.edit_value.set(JSON.stringify(row.current_value, null, 2) ?? "undefined");
  }
  saveOverride(row) {
    let value = this.edit_value();
    try {
      value = JSON.parse(value);
    } catch {
    }
    row.overridden.set(true);
    row.emit(value);
    this.editing_key.set("");
  }
  clearOverride(row) {
    const record = records_by_key.get(row.key) || row;
    record.overridden.set(false);
    record.emit(record.driver_value);
  }
  clearAllOverrides() {
    for (const row of binding_records()) {
      if (row.overridden())
        this.clearOverride(row);
    }
  }
  clearMessages() {
    execute_messages.set([]);
  }
  /** Copy the complete value, including data hidden by the collapsed preview. */
  copyValue(value, key = "") {
    const text = typeof value === "string" ? value : this.formatValue(value, true);
    const copied = this._clipboard.copy(text);
    this.copy_result.set({ key, success: copied });
    this.copy_status.set(copied ? "Value copied." : "Could not copy. Expand the value and copy it manually.");
    this.timeout("copy-status", () => {
      this.copy_status.set("");
      this.copy_result.set(null);
    }, 5e3);
  }
  copyLabel(key) {
    const result = this.copy_result();
    if (result?.key !== key)
      return "Copy value";
    return result.success ? "Copied" : "Retry copy";
  }
  formatValue(value, pretty = false) {
    if (value === void 0)
      return "undefined";
    if (typeof value === "string")
      return value || '""';
    if (value instanceof Error)
      return value.message;
    try {
      return JSON.stringify(value, null, pretty ? 2 : void 0) ?? String(value);
    } catch {
      return String(value);
    }
  }
  formatTime(time) {
    return time ? new Date(time).toLocaleTimeString() : "not observed";
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275BindingDebugPanelComponent_BaseFactory;
      return function BindingDebugPanelComponent_Factory(__ngFactoryType__) {
        return (\u0275BindingDebugPanelComponent_BaseFactory || (\u0275BindingDebugPanelComponent_BaseFactory = \u0275\u0275getInheritedFactory(_BindingDebugPanelComponent)))(__ngFactoryType__ || _BindingDebugPanelComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BindingDebugPanelComponent, selectors: [["binding-debug-panel"]], inputs: { show: [1, "show"], hotkeysEnabled: [1, "hotkeysEnabled"] }, outputs: { show: "showChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [["aria-label", "Driver debug", 1, "border-base-300", "bg-base-200", "text-base-content", "fixed", "inset-y-0", "right-0", "z-999", "flex", "max-w-full", "flex-col", "border-l", "shadow-xl", 3, "width"], ["aria-label", "Driver debug", 1, "border-base-300", "bg-base-200", "text-base-content", "fixed", "inset-y-0", "right-0", "z-999", "flex", "max-w-full", "flex-col", "border-l", "shadow-xl"], ["role", "separator", "tabindex", "0", "aria-label", "Resize panel", "aria-orientation", "vertical", 1, "hover:bg-primary/30", "focus-visible:bg-primary/30", "absolute", "inset-y-0", "-left-1", "z-10", "w-2", "cursor-col-resize", "touch-none", "select-none", "focus-visible:outline-2", 3, "pointerdown", "pointermove", "pointerup", "pointercancel", "keydown"], [1, "border-base-300", "bg-base-100", "flex", "items-center", "border-b", "p-2"], ["icon", "", "default", "", "matRipple", "", "aria-label", "Close driver debug panel", 1, "text-sm", 3, "click"], [1, "flex-1", "px-3", "text-lg", "font-medium"], ["matRipple", "", 1, "text-error", "px-2", "py-1", "text-xs", "underline"], ["matRipple", "", 1, "px-2", "py-1", "text-xs", "underline"], [1, "border-base-300", "bg-base-100", "grid", "grid-cols-2", "gap-1", "border-b", "p-1"], ["matRipple", "", 1, "flex", "items-center", "justify-center", "gap-2", "rounded-md", "px-3", "py-1.5", "text-sm", 3, "click"], [1, "bg-base-content/10", "flex", "h-5", "w-5", "items-center", "justify-center", "rounded-full", "p-1", "font-mono", "text-[0.625rem]"], [1, "relative", "m-1", "flex"], ["name", "binding-filter", "aria-label", "Search systems, modules, names or values", "placeholder", "Search systems, modules, names or values", 1, "border-base-300", "bg-base-100", "w-full", "rounded-lg", "border", "px-8", "py-2", "pr-10", "text-sm", "shadow", 3, "ngModelChange", "ngModel"], [1, "absolute", "top-1/2", "left-1", "-translate-y-1/2", "text-xl"], [1, "flex", "items-center", "justify-between", "gap-2", "px-3", "py-2", "text-xs"], ["role", "status"], ["matRipple", "", 1, "underline"], [1, "bg-warning-light", "m-2", "rounded-md", "p-3", "text-xs"], [1, "min-h-0", "flex-1", "overflow-auto"], [1, "space-y-2", "p-6", "text-center", "text-sm"], [1, "border-base-300", "bg-base-100", "border-t", "p-2", "text-xs", "opacity-60"], ["role", "status", 1, "mb-1", "font-medium"], ["matRipple", "", 1, "text-error", "px-2", "py-1", "text-xs", "underline", 3, "click"], ["matRipple", "", 1, "px-2", "py-1", "text-xs", "underline", 3, "click"], ["matRipple", "", 1, "underline", 3, "click"], ["matRipple", "", 1, "border-base-300", "bg-base-100", "sticky", "top-0", "z-20", "flex", "min-h-9", "w-full", "items-center", "gap-1", "border-b", "px-2", "py-1", "text-left", "text-xs", 3, "click"], [1, "text-sm", "transition-transform"], [1, "min-w-0", "flex-1"], [1, "block", "truncate", "font-medium"], [1, "block", "truncate", "font-mono", "text-[0.625rem]", "opacity-50"], [1, "opacity-50"], ["matRipple", "", 1, "border-base-300", "bg-base-200", "flex", "min-h-8", "w-full", "items-center", "gap-1", "border-b", "py-1", "pr-2", "pl-5", "text-left", "text-xs", 3, "click"], [1, "min-w-0", "flex-1", "truncate", "font-mono"], [1, "border-base-300", "border-b", "py-2", "pr-2", "pl-10", "text-xs", 3, "bg-warning-light"], [1, "border-base-300", "border-b", "py-2", "pr-2", "pl-10", "text-xs"], [1, "flex", "min-w-0", "items-center", "gap-2"], [1, "min-w-0", "flex-1", "truncate", "font-mono", "font-medium"], [1, "rounded-sm", "px-1.5", "py-0.5", "text-[0.625rem]"], [1, "bg-warning", "rounded-sm", "px-1.5", "py-0.5", "text-[0.625rem]", "text-black"], [1, "mt-2", "space-y-2"], [1, "mt-1", "flex", "items-center", "opacity-50"], [1, "flex-1"], [1, "block", "font-medium", 3, "for"], ["name", "binding-value", "rows", "4", 1, "border-base-300", "bg-base-100", "w-full", "rounded-md", "border", "p-2", "font-mono", 3, "ngModelChange", "keydown.escape", "id", "ngModel"], [1, "opacity-60"], [1, "flex", "gap-2"], ["matRipple", "", 1, "bg-primary", "text-primary-content", "rounded-md", "px-3", "py-2", 3, "click"], ["matRipple", "", 1, "rounded-md", "px-3", "py-2", 3, "click"], [1, "border-base-300", "bg-base-100", "mt-2", "rounded-md", "border", "p-2"], [1, "cursor-pointer", "truncate", "font-mono", 3, "title"], [1, "mt-2", "max-h-64", "overflow-auto", "font-mono", "break-all", "whitespace-pre-wrap"], ["matRipple", "", 1, "border-base-300", "mt-2", "rounded-md", "border", "px-3", "py-1.5", 3, "click"], ["matRipple", "", "type", "button", 1, "border-base-300", "mt-2", "ml-2", "rounded-md", "border", "px-3", "py-1.5", 3, "click"], [1, "border-base-300", "border-b", "py-3", "pr-3", "pl-10", "text-xs"], [1, "mb-2", "flex", "items-start", "justify-between", "gap-2"], [1, "min-w-0"], [1, "font-mono", "font-medium", "break-all"], [1, "mt-1", "opacity-60"], [1, "flex", "items-center", "gap-2"], [1, "font-mono", "text-xs", "opacity-60"], [1, "bg-base-300", "shrink-0", "rounded-sm", "px-2", "py-1"], [1, "mb-2", "opacity-60"], [1, "mt-2", "opacity-60"], [1, "border-base-300", "bg-base-100", "mt-2", "rounded-md", "border", "p-1"], [1, "flex", "items-center", "justify-between", "gap-2"], [1, "p-1", "font-medium"], ["icon", "", "default", "", "matRipple", "", "type", "button", "matTooltip", "Copy value", "matTooltipPosition", "left", 1, "text-xs", 3, "click", "title"], ["aria-hidden", "true"], [1, "my-2", "min-w-0", "px-1", "font-mono"], [1, "cursor-pointer", "truncate", 3, "title"], [1, "mt-2", "max-h-64", "overflow-auto", "break-all", "whitespace-pre-wrap"], [1, "font-medium"]], template: function BindingDebugPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, BindingDebugPanelComponent_Conditional_0_Template, 39, 26, "aside", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.show() ? 0 : -1);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatRippleModule, MatRipple, IconComponent, MatTooltipModule, MatTooltip], styles: ["\nbutton[_ngcontent-%COMP%]:not(:disabled) {\n  cursor: pointer;\n}\nbutton[_ngcontent-%COMP%]:not(:disabled):hover {\n  background-image: linear-gradient(#8080801f, #8080801f);\n}\nbutton[_ngcontent-%COMP%]:not(:disabled):active {\n  background-image: linear-gradient(#8080803d, #8080803d);\n}\nbutton[_ngcontent-%COMP%]:focus-visible, \nsummary[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid currentColor;\n  outline-offset: -2px;\n}\n/*# sourceMappingURL=binding-debug-panel.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BindingDebugPanelComponent, [{
    type: Component,
    args: [{ selector: "binding-debug-panel", template: `
        @if (show()) {
            <aside
                [style.width]="resize.panel_width()"
                aria-label="Driver debug"
                class="border-base-300 bg-base-200 text-base-content fixed inset-y-0 right-0 z-999 flex max-w-full flex-col border-l shadow-xl"
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
                        aria-label="Close driver debug panel"
                        (click)="show.set(false)"
                    >
                        <icon>close</icon>
                    </button>
                    <div class="flex-1 px-3 text-lg font-medium">
                        Driver debug
                    </div>
                    @if (tab() === 'bindings' && has_overrides()) {
                        <button
                            matRipple
                            class="text-error px-2 py-1 text-xs underline"
                            (click)="clearAllOverrides()"
                        >
                            Clear overrides
                        </button>
                    } @else if (tab() === 'executes' && execute_count()) {
                        <button
                            matRipple
                            class="px-2 py-1 text-xs underline"
                            (click)="clearMessages()"
                        >
                            Clear messages
                        </button>
                    }
                </header>

                <div
                    class="border-base-300 bg-base-100 grid grid-cols-2 gap-1 border-b p-1"
                >
                    <button
                        matRipple
                        class="flex items-center justify-center gap-2 rounded-md px-3 py-1.5 text-sm"
                        [class.bg-secondary]="tab() === 'bindings'"
                        [class.text-secondary-content]="tab() === 'bindings'"
                        [attr.aria-pressed]="tab() === 'bindings'"
                        (click)="tab.set('bindings')"
                    >
                        <div>Bindings</div>
                        <div
                            class="bg-base-content/10 flex h-5 w-5 items-center justify-center rounded-full p-1 font-mono text-[0.625rem]"
                        >
                            {{ binding_count() }}
                        </div>
                    </button>
                    <button
                        matRipple
                        class="flex items-center justify-center gap-2 rounded-md px-3 py-1.5 text-sm"
                        [class.bg-secondary]="tab() === 'executes'"
                        [class.text-secondary-content]="tab() === 'executes'"
                        [attr.aria-pressed]="tab() === 'executes'"
                        (click)="tab.set('executes')"
                    >
                        <div>Commands</div>
                        <div
                            class="bg-base-content/10 flex h-5 w-5 items-center justify-center rounded-full p-1 font-mono text-[0.625rem]"
                        >
                            {{ execute_count() }}
                        </div>
                    </button>
                </div>

                <div class="relative m-1 flex">
                    <input
                        name="binding-filter"
                        [(ngModel)]="filter"
                        aria-label="Search systems, modules, names or values"
                        placeholder="Search systems, modules, names or values"
                        class="border-base-300 bg-base-100 w-full rounded-lg border px-8 py-2 pr-10 text-sm shadow"
                    />
                    <icon
                        class="absolute top-1/2 left-1 -translate-y-1/2 text-xl"
                        >search</icon
                    >
                </div>

                <div
                    class="flex items-center justify-between gap-2 px-3 py-2 text-xs"
                >
                    <span role="status"
                        >{{ visible_count() }}
                        {{ tab() === 'bindings' ? 'bindings' : 'commands' }}
                        shown</span
                    >
                    @if (filter()) {
                        <button
                            matRipple
                            class="underline"
                            (click)="filter.set('')"
                        >
                            Clear search
                        </button>
                    }
                </div>
                @if (has_overrides()) {
                    <p class="bg-warning-light m-2 rounded-md p-3 text-xs">
                        Local overrides are active. Incoming driver values are
                        hidden until you restore them.
                    </p>
                }
                <div class="min-h-0 flex-1 overflow-auto">
                    @for (system of systems(); track system.id) {
                        <section>
                            <button
                                matRipple
                                class="border-base-300 bg-base-100 sticky top-0 z-20 flex min-h-9 w-full items-center gap-1 border-b px-2 py-1 text-left text-xs"
                                [attr.aria-expanded]="
                                    isExpanded('system|' + system.id)
                                "
                                (click)="toggleGroup('system|' + system.id)"
                            >
                                <icon
                                    class="text-sm transition-transform"
                                    [class.rotate-90]="
                                        isExpanded('system|' + system.id)
                                    "
                                    >chevron_right</icon
                                >
                                <span class="min-w-0 flex-1">
                                    <span class="block truncate font-medium">
                                        {{ system.name }}
                                    </span>
                                    @if (system.name !== system.id) {
                                        <span
                                            class="block truncate font-mono text-[0.625rem] opacity-50"
                                        >
                                            {{ system.id }}
                                        </span>
                                    }
                                </span>
                                @if (tab() === 'bindings') {
                                    <span class="opacity-50">
                                        {{ system.active_count }}/{{
                                            system.binding_count
                                        }}
                                        active
                                    </span>
                                } @else {
                                    <span class="opacity-50">
                                        {{ system.message_count }} commands
                                    </span>
                                }
                            </button>

                            @if (isExpanded('system|' + system.id)) {
                                @for (
                                    module of system.modules;
                                    track module.key
                                ) {
                                    <button
                                        matRipple
                                        class="border-base-300 bg-base-200 flex min-h-8 w-full items-center gap-1 border-b py-1 pr-2 pl-5 text-left text-xs"
                                        [attr.aria-expanded]="
                                            isExpanded('module|' + module.key)
                                        "
                                        (click)="
                                            toggleGroup('module|' + module.key)
                                        "
                                    >
                                        <icon
                                            class="text-sm transition-transform"
                                            [class.rotate-90]="
                                                isExpanded(
                                                    'module|' + module.key
                                                )
                                            "
                                            >chevron_right</icon
                                        >
                                        <span
                                            class="min-w-0 flex-1 truncate font-mono"
                                        >
                                            {{ module.id }}
                                        </span>
                                        @if (tab() === 'bindings') {
                                            <span class="opacity-50">
                                                {{ module.active_count }}/{{
                                                    module.bindings.length
                                                }}
                                                active
                                            </span>
                                        } @else {
                                            <span class="opacity-50">
                                                {{ module.messages.length }}
                                                commands
                                            </span>
                                        }
                                    </button>

                                    @if (isExpanded('module|' + module.key)) {
                                        @if (tab() === 'bindings') {
                                            @for (
                                                row of module.bindings;
                                                track row.key
                                            ) {
                                                <div
                                                    class="border-base-300 border-b py-2 pr-2 pl-10 text-xs"
                                                    [class.bg-warning-light]="
                                                        row.is_overridden
                                                    "
                                                >
                                                    <div
                                                        class="flex min-w-0 items-center gap-2"
                                                    >
                                                        <span
                                                            class="min-w-0 flex-1 truncate font-mono font-medium"
                                                        >
                                                            {{ row.name }}
                                                        </span>
                                                        <span
                                                            class="rounded-sm px-1.5 py-0.5 text-[0.625rem]"
                                                            [class.bg-success-light]="
                                                                row.active
                                                            "
                                                            [class.text-success]="
                                                                row.active
                                                            "
                                                            [class.bg-base-300]="
                                                                !row.active
                                                            "
                                                        >
                                                            {{
                                                                row.active
                                                                    ? 'active'
                                                                    : 'inactive'
                                                            }}
                                                            \xB7 {{ row.count }}
                                                        </span>
                                                        @if (
                                                            row.is_overridden
                                                        ) {
                                                            <span
                                                                class="bg-warning rounded-sm px-1.5 py-0.5 text-[0.625rem] text-black"
                                                            >
                                                                overridden
                                                            </span>
                                                        }
                                                    </div>

                                                    @if (
                                                        editing_key() ===
                                                        row.key
                                                    ) {
                                                        <div
                                                            class="mt-2 space-y-2"
                                                        >
                                                            <label
                                                                [for]="
                                                                    'override-' +
                                                                    row.key
                                                                "
                                                                class="block font-medium"
                                                                >Local override
                                                                value</label
                                                            >
                                                            <textarea
                                                                [id]="
                                                                    'override-' +
                                                                    row.key
                                                                "
                                                                name="binding-value"
                                                                rows="4"
                                                                class="border-base-300 bg-base-100 w-full rounded-md border p-2 font-mono"
                                                                [(ngModel)]="
                                                                    edit_value
                                                                "
                                                                (keydown.escape)="
                                                                    editing_key.set(
                                                                        ''
                                                                    )
                                                                "
                                                            ></textarea>
                                                            <p
                                                                class="opacity-60"
                                                            >
                                                                Enter JSON for
                                                                numbers,
                                                                booleans, arrays
                                                                or objects.
                                                                Other text is a
                                                                string. This
                                                                does not send a
                                                                command to the
                                                                driver.
                                                            </p>
                                                            <div
                                                                class="flex gap-2"
                                                            >
                                                                <button
                                                                    matRipple
                                                                    class="bg-primary text-primary-content rounded-md px-3 py-2"
                                                                    (click)="
                                                                        saveOverride(
                                                                            row
                                                                        )
                                                                    "
                                                                >
                                                                    Apply
                                                                    override
                                                                </button>
                                                                <button
                                                                    matRipple
                                                                    class="rounded-md px-3 py-2"
                                                                    (click)="
                                                                        editing_key.set(
                                                                            ''
                                                                        )
                                                                    "
                                                                >
                                                                    Cancel
                                                                </button>
                                                            </div>
                                                        </div>
                                                    } @else {
                                                        <details
                                                            class="border-base-300 bg-base-100 mt-2 rounded-md border p-2"
                                                        >
                                                            <summary
                                                                class="cursor-pointer truncate font-mono"
                                                                [title]="
                                                                    formatValue(
                                                                        row.current_value
                                                                    )
                                                                "
                                                            >
                                                                {{
                                                                    formatValue(
                                                                        row.current_value
                                                                    )
                                                                }}
                                                            </summary>
                                                            <pre
                                                                class="mt-2 max-h-64 overflow-auto font-mono break-all whitespace-pre-wrap"
                                                                >{{
                                                                    formatValue(
                                                                        row.current_value,
                                                                        true
                                                                    )
                                                                }}</pre
                                                            >
                                                        </details>
                                                        <button
                                                            matRipple
                                                            class="border-base-300 mt-2 rounded-md border px-3 py-1.5"
                                                            (click)="
                                                                startOverride(
                                                                    row
                                                                )
                                                            "
                                                        >
                                                            Override value
                                                        </button>
                                                        <button
                                                            matRipple
                                                            type="button"
                                                            class="border-base-300 mt-2 ml-2 rounded-md border px-3 py-1.5"
                                                            [attr.aria-label]="
                                                                'Copy ' +
                                                                row.name +
                                                                ' value'
                                                            "
                                                            (click)="
                                                                copyValue(
                                                                    row.current_value,
                                                                    'binding|' +
                                                                        row.key
                                                                )
                                                            "
                                                        >
                                                            {{
                                                                copyLabel(
                                                                    'binding|' +
                                                                        row.key
                                                                )
                                                            }}
                                                        </button>
                                                    }

                                                    <div
                                                        class="mt-1 flex items-center opacity-50"
                                                    >
                                                        <span class="flex-1">
                                                            Last update:
                                                            {{
                                                                formatTime(
                                                                    row.updated_at
                                                                )
                                                            }}
                                                        </span>
                                                        @if (
                                                            row.is_overridden
                                                        ) {
                                                            <button
                                                                matRipple
                                                                class="underline"
                                                                (click)="
                                                                    clearOverride(
                                                                        row
                                                                    )
                                                                "
                                                            >
                                                                Restore driver
                                                                value
                                                            </button>
                                                        }
                                                    </div>
                                                </div>
                                            }
                                        } @else {
                                            @for (
                                                command of module.messages;
                                                track command.id
                                            ) {
                                                <article
                                                    class="border-base-300 border-b py-3 pr-3 pl-10 text-xs"
                                                >
                                                    <div
                                                        class="mb-2 flex items-start justify-between gap-2"
                                                    >
                                                        <div class="min-w-0">
                                                            <div
                                                                class="font-mono font-medium break-all"
                                                            >
                                                                {{
                                                                    command.method
                                                                }}
                                                            </div>
                                                            <div
                                                                class="mt-1 opacity-60"
                                                            >
                                                                #{{
                                                                    command.id
                                                                }}
                                                                \xB7
                                                                {{
                                                                    formatTime(
                                                                        command.time
                                                                    )
                                                                }}
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="flex items-center gap-2"
                                                        >
                                                            @if (
                                                                command.send &&
                                                                command.receive
                                                            ) {
                                                                <div
                                                                    class="font-mono text-xs opacity-60"
                                                                >
                                                                    {{
                                                                        command
                                                                            .receive
                                                                            .time -
                                                                            command
                                                                                .send
                                                                                .time
                                                                    }}
                                                                    ms
                                                                </div>
                                                            }
                                                            <div
                                                                class="bg-base-300 shrink-0 rounded-sm px-2 py-1"
                                                                [class.text-error-content]="
                                                                    command
                                                                        .receive
                                                                        ?.error
                                                                "
                                                                [class.text-success-content]="
                                                                    command.receive &&
                                                                    !command
                                                                        .receive
                                                                        .error
                                                                "
                                                                [class.bg-error]="
                                                                    command
                                                                        .receive
                                                                        ?.error
                                                                "
                                                                [class.bg-success]="
                                                                    command.receive &&
                                                                    !command
                                                                        .receive
                                                                        .error
                                                                "
                                                            >
                                                                {{
                                                                    command.receive
                                                                        ? command
                                                                              .receive
                                                                              .error
                                                                            ? 'Failed'
                                                                            : 'Completed'
                                                                        : 'Pending'
                                                                }}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    @if (!command.send) {
                                                        <p
                                                            class="mb-2 opacity-60"
                                                        >
                                                            Sent value is no
                                                            longer in the
                                                            message history.
                                                        </p>
                                                    }
                                                    @for (
                                                        message of [
                                                            command.send,
                                                            command.receive,
                                                        ];
                                                        track $index
                                                    ) {
                                                        @if (message) {
                                                            <div
                                                                class="border-base-300 bg-base-100 mt-2 rounded-md border p-1"
                                                            >
                                                                <div
                                                                    class="flex items-center justify-between gap-2"
                                                                >
                                                                    <span
                                                                        class="p-1 font-medium"
                                                                        [class.text-error]="
                                                                            message.error
                                                                        "
                                                                        >{{
                                                                            message.direction ===
                                                                            'send'
                                                                                ? 'Sent'
                                                                                : message.error
                                                                                  ? 'Error'
                                                                                  : 'Received'
                                                                        }}</span
                                                                    >
                                                                    <button
                                                                        icon
                                                                        default
                                                                        matRipple
                                                                        type="button"
                                                                        class="text-xs"
                                                                        matTooltip="Copy value"
                                                                        matTooltipPosition="left"
                                                                        [attr.aria-label]="
                                                                            'Copy ' +
                                                                            message.method +
                                                                            ' ' +
                                                                            message.direction +
                                                                            ' value'
                                                                        "
                                                                        [title]="
                                                                            copyLabel(
                                                                                message.direction +
                                                                                    '|' +
                                                                                    message.id
                                                                            )
                                                                        "
                                                                        (click)="
                                                                            copyValue(
                                                                                message.value,
                                                                                message.direction +
                                                                                    '|' +
                                                                                    message.id
                                                                            )
                                                                        "
                                                                    >
                                                                        <icon
                                                                            aria-hidden="true"
                                                                            >{{
                                                                                copyLabel(
                                                                                    message.direction +
                                                                                        '|' +
                                                                                        message.id
                                                                                ) ===
                                                                                'Copied'
                                                                                    ? 'check'
                                                                                    : 'content_copy'
                                                                            }}</icon
                                                                        >
                                                                    </button>
                                                                </div>
                                                                <details
                                                                    class="my-2 min-w-0 px-1 font-mono"
                                                                >
                                                                    <summary
                                                                        class="cursor-pointer truncate"
                                                                        [title]="
                                                                            formatValue(
                                                                                message.value
                                                                            )
                                                                        "
                                                                    >
                                                                        {{
                                                                            formatValue(
                                                                                message.value
                                                                            )
                                                                        }}
                                                                    </summary>
                                                                    <pre
                                                                        class="mt-2 max-h-64 overflow-auto break-all whitespace-pre-wrap"
                                                                        >{{
                                                                            formatValue(
                                                                                message.value,
                                                                                true
                                                                            )
                                                                        }}</pre
                                                                    >
                                                                </details>
                                                            </div>
                                                        }
                                                    }
                                                    @if (!command.receive) {
                                                        <p
                                                            class="mt-2 opacity-60"
                                                        >
                                                            Waiting for a
                                                            response...
                                                        </p>
                                                    }
                                                </article>
                                            }
                                        }
                                    }
                                }
                            }
                        </section>
                    } @empty {
                        <div class="space-y-2 p-6 text-center text-sm">
                            <p class="font-medium">
                                {{
                                    filter().trim()
                                        ? 'No matching results'
                                        : tab() === 'bindings'
                                          ? 'No bindings observed yet'
                                          : 'No commands observed yet'
                                }}
                            </p>
                            <p class="opacity-60">
                                {{
                                    filter().trim()
                                        ? 'Try a different name or value, or clear the search.'
                                        : 'Use the app to see driver activity here.'
                                }}
                            </p>
                        </div>
                    }
                </div>

                <footer
                    class="border-base-300 bg-base-100 border-t p-2 text-xs opacity-60"
                >
                    <div role="status" class="mb-1 font-medium">
                        {{ copy_status() }}
                    </div>
                    Ctrl + Alt + Shift + B to toggle. Overrides stay active when
                    this panel is closed.
                    @if (tab() === 'executes') {
                        Only the latest 250 messages are kept.
                    }
                </footer>
            </aside>
        }
    `, imports: [FormsModule, MatRippleModule, IconComponent, MatTooltipModule], styles: ["/* angular:styles/component:css;5d0b210cb25b102820db6b056b35d022a45d085319bfcc4988ce14de3d988d31;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/binding-debug-panel.component.ts */\nbutton:not(:disabled) {\n  cursor: pointer;\n}\nbutton:not(:disabled):hover {\n  background-image: linear-gradient(#8080801f, #8080801f);\n}\nbutton:not(:disabled):active {\n  background-image: linear-gradient(#8080803d, #8080803d);\n}\nbutton:focus-visible,\nsummary:focus-visible {\n  outline: 2px solid currentColor;\n  outline-offset: -2px;\n}\n/*# sourceMappingURL=binding-debug-panel.component.css.map */\n"] }]
  }], null, { show: [{ type: Input, args: [{ isSignal: true, alias: "show", required: false }] }, { type: Output, args: ["showChange"] }], hotkeysEnabled: [{ type: Input, args: [{ isSignal: true, alias: "hotkeysEnabled", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BindingDebugPanelComponent, { className: "BindingDebugPanelComponent", filePath: "libs/components/src/lib/binding-debug-panel.component.ts", lineNumber: 952 });
})();
export {
  BindingDebugPanelComponent,
  pairExecuteMessages
};
//# debugId=cf1d4977-e520-5daa-8901-e2ccd2ce834b
//# sourceMappingURL=binding-debug-panel.component-KSPKBXBO.js.map
