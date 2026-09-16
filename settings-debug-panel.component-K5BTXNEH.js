import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-5XQD2WZ2.js";
import {
  SanitizePipe
} from "./chunk-IFE7ACVN.js";
import {
  AsyncHandler,
  Br,
  Clipboard,
  CommonModule,
  Component,
  DEFAULT_SETTINGS,
  DOCUMENT,
  DefaultValueAccessor,
  ElementRef,
  FormsModule,
  HotkeysService,
  IconComponent,
  Injectable,
  Injector,
  Input,
  MatRipple,
  MatRippleModule,
  NgComponentOutlet,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NgTemplateOutlet,
  NumberValueAccessor,
  OrganisationService,
  Output,
  Overlay,
  SelectControlValueAccessor,
  SettingsService,
  TemplatePortal,
  TemplateRef,
  Type,
  ViewChild,
  ViewContainerRef,
  ba,
  computed,
  effect,
  inject,
  input,
  model,
  resource,
  setClassMetadata,
  signal,
  viewChild,
  ɵNgSelectMultipleOption,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-T3EJMGSX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KUGYOAP2.js";

// libs/components/src/lib/binding-debug-panel.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.key;
var _forTrack2 = ($index, $item) => $item.direction + $item.id;
function BindingDebugPanelComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearAllOverrides());
    });
    \u0275\u0275text(1, " Clear overrides ");
    \u0275\u0275elementEnd();
  }
}
function BindingDebugPanelComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearMessages());
    });
    \u0275\u0275text(1, " Clear messages ");
    \u0275\u0275elementEnd();
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const system_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", system_r6.id, " ");
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const system_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", system_r6.active_count, "/", system_r6.binding_count, " active ");
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const system_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", system_r6.message_count, " messages ");
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const module_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", module_r8.active_count, "/", module_r8.bindings.length, " active ");
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const module_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", module_r8.messages.length, " messages ");
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, " overridden ");
    \u0275\u0275elementEnd();
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_7_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(8);
      \u0275\u0275twoWayBindingSet(ctx_r1.edit_value, $event) || (ctx_r1.edit_value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_7_Template_input_keydown_enter_1_listener() {
      \u0275\u0275restoreView(_r9);
      const row_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.saveOverride(row_r10));
    })("keydown.escape", function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_7_Template_input_keydown_escape_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(8);
      return \u0275\u0275resetView(ctx_r1.editing_key.set(""));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(2, "button", 36);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_7_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const row_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.saveOverride(row_r10));
    });
    \u0275\u0275elementStart(3, "icon", 37);
    \u0275\u0275text(4, "check");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(8);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.edit_value);
    \u0275\u0275control();
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const row_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.startOverride(row_r10));
    });
    \u0275\u0275elementStart(1, "span", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "icon", 40);
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275property("title", ctx_r1.formatValue(row_r10.current_value));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatValue(row_r10.current_value), " ");
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const row_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.clearOverride(row_r10));
    });
    \u0275\u0275text(1, " Restore driver value ");
    \u0275\u0275elementEnd();
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "span", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_6_Template, 2, 0, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_7_Template, 5, 1, "div", 30)(8, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_8_Template, 5, 2, "button", 31);
    \u0275\u0275elementStart(9, "div", 32)(10, "span", 33);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Conditional_12_Template, 2, 0, "button", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275classProp("bg-warning-light", row_r10.is_overridden);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r10.name, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success-light", row_r10.active)("text-success", row_r10.active)("bg-base-300", !row_r10.active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", row_r10.active ? "active" : "inactive", " \xB7 ", row_r10.count, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r10.is_overridden ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.editing_key() === row_r10.key ? 7 : 8);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Last update: ", ctx_r1.formatTime(row_r10.updated_at), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r10.is_overridden ? 12 : -1);
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_For_1_Template, 13, 15, "div", 24, _forTrack1);
  }
  if (rf & 2) {
    const module_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(module_r8.bindings);
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "icon", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 45)(4, "div", 46);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 47);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 48)(9, "div");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const message_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275classProp("text-error", message_r13.error);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-info", message_r13.direction === "send")("text-success", message_r13.direction === "receive" && !message_r13.error);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", message_r13.direction === "send" ? "north_east" : "south_west", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", message_r13.method, " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.formatValue(message_r13.value));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatValue(message_r13.value), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", message_r13.direction, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatTime(message_r13.time), " ");
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_1_For_1_Template, 13, 12, "div", 42, _forTrack2);
  }
  if (rf & 2) {
    const module_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(module_r8.messages);
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_0_Template, 2, 0)(1, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Conditional_1_Template, 2, 0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275conditional(ctx_r1.tab() === "bindings" ? 0 : 1);
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Template_button_click_0_listener() {
      const module_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleGroup("module|" + module_r8.key));
    });
    \u0275\u0275elementStart(1, "icon", 17);
    \u0275\u0275text(2, "chevron_right");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_5_Template, 2, 2, "span", 21)(6, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_6_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Conditional_7_Template, 2, 1);
  }
  if (rf & 2) {
    const module_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotate-90", ctx_r1.isExpanded("module|" + module_r8.key));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", module_r8.id, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tab() === "bindings" ? 5 : 6);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isExpanded("module|" + module_r8.key) ? 7 : -1);
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_For_1_Template, 8, 5, null, null, _forTrack1);
  }
  if (rf & 2) {
    const system_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(system_r6.modules);
  }
}
function BindingDebugPanelComponent_Conditional_0_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section")(1, "button", 16);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_For_20_Template_button_click_1_listener() {
      const system_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleGroup("system|" + system_r6.id));
    });
    \u0275\u0275elementStart(2, "icon", 17);
    \u0275\u0275text(3, "chevron_right");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 18)(5, "span", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_7_Template, 2, 1, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_8_Template, 2, 2, "span", 21)(9, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_9_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, BindingDebugPanelComponent_Conditional_0_For_20_Conditional_10_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const system_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("rotate-90", ctx_r1.isExpanded("system|" + system_r6.id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", system_r6.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(system_r6.name !== system_r6.id ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tab() === "bindings" ? 8 : 9);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isExpanded("system|" + system_r6.id) ? 10 : -1);
  }
}
function BindingDebugPanelComponent_Conditional_0_ForEmpty_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" No observed ", ctx_r1.tab() === "bindings" ? "bindings" : "execute messages", " ");
  }
}
function BindingDebugPanelComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aside", 0)(1, "header", 1)(2, "button", 2);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show.set(false));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 3);
    \u0275\u0275text(6, " Driver Binding Viewer ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, BindingDebugPanelComponent_Conditional_0_Conditional_7_Template, 2, 0, "button", 4)(8, BindingDebugPanelComponent_Conditional_0_Conditional_8_Template, 2, 0, "button", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 6)(10, "button", 7);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tab.set("bindings"));
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 7);
    \u0275\u0275listener("click", function BindingDebugPanelComponent_Conditional_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tab.set("executes"));
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 8)(15, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function BindingDebugPanelComponent_Conditional_0_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filter, $event) || (ctx_r1.filter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(16, "icon", 10);
    \u0275\u0275text(17, "search");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 11);
    \u0275\u0275repeaterCreate(19, BindingDebugPanelComponent_Conditional_0_For_20_Template, 11, 6, "section", null, _forTrack0, false, BindingDebugPanelComponent_Conditional_0_ForEmpty_21_Template, 2, 1, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "footer", 13);
    \u0275\u0275text(23, " Ctrl + Alt + Shift + B \xB7 Values and overrides are local to this browser session. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.tab() === "bindings" && ctx_r1.has_overrides() ? 7 : ctx_r1.tab() === "executes" && ctx_r1.execute_count() ? 8 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-base-300", ctx_r1.tab() === "bindings");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Bindings (", ctx_r1.binding_count(), ") ");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-base-300", ctx_r1.tab() === "executes");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Executes (", ctx_r1.execute_count(), ") ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filter);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.systems());
  }
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
var _BindingDebugPanelComponent = class _BindingDebugPanelComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._hotkey = inject(HotkeysService);
    this._document = inject(DOCUMENT);
    this.show = signal(
      false,
      ...ngDevMode ? [{ debugName: "show" }] : (
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
          system_name_cache.set(id, (system == null ? void 0 : system.display_name) || (system == null ? void 0 : system.name) || id);
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
    this.execute_count = computed(
      () => execute_messages().length,
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
        body.style.paddingRight = "min(24rem, 90vw)";
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
          for (const message of execute_messages()) {
            const haystack = `${message.system_id} ${system_names[message.system_id] || ""} ${message.module_id} ${message.method} ${this.formatValue(message.value)}`.toLowerCase();
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
  }
  ngOnInit() {
    this.subscription("toggle", this._hotkey.listen(["Control", "Alt", "Shift", "KeyB"], () => this.show.set(!this.show())));
  }
  isExpanded(key) {
    return !!this.filter() || !!this.expanded()[key];
  }
  toggleGroup(key) {
    this.expanded.update((state) => __spreadProps(__spreadValues({}, state), {
      [key]: !this.isExpanded(key)
    }));
  }
  startOverride(row) {
    this.editing_key.set(row.key);
    this.edit_value.set(this.formatValue(row.current_value));
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
  formatValue(value) {
    if (value === void 0)
      return "undefined";
    if (typeof value === "string")
      return value;
    try {
      return JSON.stringify(value);
    } catch {
      return String(value);
    }
  }
  formatTime(time) {
    return time ? new Date(time).toLocaleTimeString() : "not observed";
  }
};
_BindingDebugPanelComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275BindingDebugPanelComponent_BaseFactory;
  return function BindingDebugPanelComponent_Factory(__ngFactoryType__) {
    return (\u0275BindingDebugPanelComponent_BaseFactory || (\u0275BindingDebugPanelComponent_BaseFactory = \u0275\u0275getInheritedFactory(_BindingDebugPanelComponent)))(__ngFactoryType__ || _BindingDebugPanelComponent);
  };
})();
_BindingDebugPanelComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BindingDebugPanelComponent, selectors: [["binding-debug-panel"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[1, "border-base-300", "bg-base-200", "text-base-content", "fixed", "inset-y-0", "right-0", "z-999", "flex", "w-96", "max-w-[90vw]", "flex-col", "border-l", "shadow-xl"], [1, "border-base-300", "bg-base-100", "flex", "items-center", "border-b", "p-2"], ["icon", "", "default", "", "matRipple", "", "aria-label", "Close binding viewer", 1, "text-sm", 3, "click"], [1, "flex-1", "px-3", "text-lg", "font-medium"], ["matRipple", "", 1, "text-error", "px-2", "py-1", "text-xs", "underline"], ["matRipple", "", 1, "px-2", "py-1", "text-xs", "underline"], [1, "border-base-300", "bg-base-100", "grid", "grid-cols-2", "border-b", "p-1"], [1, "rounded-md", "px-3", "py-1.5", "text-sm", 3, "click"], [1, "relative", "m-1", "flex"], ["name", "binding-filter", "placeholder", "Filter systems, modules or names...", 1, "border-base-300", "bg-base-100", "w-full", "rounded-lg", "border", "px-8", "py-2", "pr-2", "font-mono", "text-sm", "shadow", 3, "ngModelChange", "ngModel"], [1, "absolute", "top-1/2", "left-1", "-translate-y-1/2", "text-xl"], [1, "flex-1", "overflow-auto"], [1, "p-4", "text-center", "opacity-40"], [1, "border-base-300", "bg-base-100", "border-t", "p-2", "text-xs", "opacity-60"], ["matRipple", "", 1, "text-error", "px-2", "py-1", "text-xs", "underline", 3, "click"], ["matRipple", "", 1, "px-2", "py-1", "text-xs", "underline", 3, "click"], [1, "border-base-300", "bg-base-100", "sticky", "top-0", "z-20", "flex", "min-h-9", "w-full", "items-center", "gap-1", "border-b", "px-2", "py-1", "text-left", "text-xs", 3, "click"], [1, "text-sm", "transition-transform"], [1, "min-w-0", "flex-1"], [1, "block", "truncate", "font-medium"], [1, "block", "truncate", "font-mono", "text-[0.625rem]", "opacity-50"], [1, "opacity-50"], [1, "border-base-300", "bg-base-200", "sticky", "top-9", "z-10", "flex", "min-h-8", "w-full", "items-center", "gap-1", "border-b", "py-1", "pr-2", "pl-5", "text-left", "text-xs", 3, "click"], [1, "min-w-0", "flex-1", "truncate", "font-mono"], [1, "border-base-300", "border-b", "py-2", "pr-2", "pl-10", "text-xs", 3, "bg-warning-light"], [1, "border-base-300", "border-b", "py-2", "pr-2", "pl-10", "text-xs"], [1, "flex", "min-w-0", "items-center", "gap-2"], [1, "min-w-0", "flex-1", "truncate", "font-mono", "font-medium"], [1, "rounded-sm", "px-1.5", "py-0.5", "text-[0.625rem]"], [1, "bg-warning", "rounded-sm", "px-1.5", "py-0.5", "text-[0.625rem]", "text-black"], [1, "mt-1", "flex", "items-center", "gap-1"], [1, "border-base-300", "bg-base-100", "hover:border-info", "mt-1", "flex", "h-8", "w-full", "items-center", "rounded-md", "border", "px-2", "text-left", "font-mono", "shadow-sm", 3, "title"], [1, "mt-1", "flex", "items-center", "opacity-50"], [1, "flex-1"], [1, "underline"], ["name", "binding-value", 1, "border-base-300", "bg-base-100", "focus:border-info", "focus:ring-info", "h-8", "min-w-0", "flex-1", "rounded-md", "border", "px-2", "font-mono", "shadow-sm", "outline-none", "focus:ring-2", 3, "ngModelChange", "keydown.enter", "keydown.escape", "ngModel"], ["icon", "", "matRipple", "", "title", "Apply override", 3, "click"], [1, "text-sm"], [1, "border-base-300", "bg-base-100", "hover:border-info", "mt-1", "flex", "h-8", "w-full", "items-center", "rounded-md", "border", "px-2", "text-left", "font-mono", "shadow-sm", 3, "click", "title"], [1, "min-w-0", "flex-1", "truncate"], [1, "ml-1", "text-sm", "opacity-40"], [1, "underline", 3, "click"], [1, "border-base-300", "grid", "grid-cols-[auto_minmax(0,1fr)_auto]", "gap-x-2", "border-b", "py-2", "pr-2", "pl-10", "text-xs", 3, "text-error"], [1, "border-base-300", "grid", "grid-cols-[auto_minmax(0,1fr)_auto]", "gap-x-2", "border-b", "py-2", "pr-2", "pl-10", "text-xs"], [1, "text-base"], [1, "min-w-0"], [1, "truncate", "font-mono", "font-medium"], [1, "truncate", "font-mono", "opacity-60", 3, "title"], [1, "text-right", "opacity-50"]], template: function BindingDebugPanelComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, BindingDebugPanelComponent_Conditional_0_Template, 24, 9, "aside", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.show() ? 0 : -1);
  }
}, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatRippleModule, MatRipple, IconComponent], encapsulation: 2 });
var BindingDebugPanelComponent = _BindingDebugPanelComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BindingDebugPanelComponent, [{
    type: Component,
    args: [{
      selector: "binding-debug-panel",
      template: `
        @if (show()) {
            <aside
                class="border-base-300 bg-base-200 text-base-content fixed inset-y-0 right-0 z-999 flex w-96 max-w-[90vw] flex-col border-l shadow-xl"
            >
                <header
                    class="border-base-300 bg-base-100 flex items-center border-b p-2"
                >
                    <button
                        icon
                        default
                        matRipple
                        class="text-sm"
                        aria-label="Close binding viewer"
                        (click)="show.set(false)"
                    >
                        <icon>close</icon>
                    </button>
                    <div class="flex-1 px-3 text-lg font-medium">
                        Driver Binding Viewer
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
                    class="border-base-300 bg-base-100 grid grid-cols-2 border-b p-1"
                >
                    <button
                        class="rounded-md px-3 py-1.5 text-sm"
                        [class.bg-base-300]="tab() === 'bindings'"
                        (click)="tab.set('bindings')"
                    >
                        Bindings ({{ binding_count() }})
                    </button>
                    <button
                        class="rounded-md px-3 py-1.5 text-sm"
                        [class.bg-base-300]="tab() === 'executes'"
                        (click)="tab.set('executes')"
                    >
                        Executes ({{ execute_count() }})
                    </button>
                </div>

                <div class="relative m-1 flex">
                    <input
                        name="binding-filter"
                        [(ngModel)]="filter"
                        placeholder="Filter systems, modules or names..."
                        class="border-base-300 bg-base-100 w-full rounded-lg border px-8 py-2 pr-2 font-mono text-sm shadow"
                    />
                    <icon
                        class="absolute top-1/2 left-1 -translate-y-1/2 text-xl"
                        >search</icon
                    >
                </div>

                <div class="flex-1 overflow-auto">
                    @for (system of systems(); track system.id) {
                        <section>
                            <button
                                class="border-base-300 bg-base-100 sticky top-0 z-20 flex min-h-9 w-full items-center gap-1 border-b px-2 py-1 text-left text-xs"
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
                                        {{ system.message_count }} messages
                                    </span>
                                }
                            </button>

                            @if (isExpanded('system|' + system.id)) {
                                @for (
                                    module of system.modules;
                                    track module.key
                                ) {
                                    <button
                                        class="border-base-300 bg-base-200 sticky top-9 z-10 flex min-h-8 w-full items-center gap-1 border-b py-1 pr-2 pl-5 text-left text-xs"
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
                                                messages
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
                                                            class="mt-1 flex items-center gap-1"
                                                        >
                                                            <input
                                                                name="binding-value"
                                                                class="border-base-300 bg-base-100 focus:border-info focus:ring-info h-8 min-w-0 flex-1 rounded-md border px-2 font-mono shadow-sm outline-none focus:ring-2"
                                                                [(ngModel)]="
                                                                    edit_value
                                                                "
                                                                (keydown.enter)="
                                                                    saveOverride(
                                                                        row
                                                                    )
                                                                "
                                                                (keydown.escape)="
                                                                    editing_key.set(
                                                                        ''
                                                                    )
                                                                "
                                                            />
                                                            <button
                                                                icon
                                                                matRipple
                                                                title="Apply override"
                                                                (click)="
                                                                    saveOverride(
                                                                        row
                                                                    )
                                                                "
                                                            >
                                                                <icon
                                                                    class="text-sm"
                                                                    >check</icon
                                                                >
                                                            </button>
                                                        </div>
                                                    } @else {
                                                        <button
                                                            class="border-base-300 bg-base-100 hover:border-info mt-1 flex h-8 w-full items-center rounded-md border px-2 text-left font-mono shadow-sm"
                                                            [title]="
                                                                formatValue(
                                                                    row.current_value
                                                                )
                                                            "
                                                            (click)="
                                                                startOverride(
                                                                    row
                                                                )
                                                            "
                                                        >
                                                            <span
                                                                class="min-w-0 flex-1 truncate"
                                                            >
                                                                {{
                                                                    formatValue(
                                                                        row.current_value
                                                                    )
                                                                }}
                                                            </span>
                                                            <icon
                                                                class="ml-1 text-sm opacity-40"
                                                                >edit</icon
                                                            >
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
                                                message of module.messages;
                                                track message.direction +
                                                    message.id
                                            ) {
                                                <div
                                                    class="border-base-300 grid grid-cols-[auto_minmax(0,1fr)_auto] gap-x-2 border-b py-2 pr-2 pl-10 text-xs"
                                                    [class.text-error]="
                                                        message.error
                                                    "
                                                >
                                                    <icon
                                                        class="text-base"
                                                        [class.text-info]="
                                                            message.direction ===
                                                            'send'
                                                        "
                                                        [class.text-success]="
                                                            message.direction ===
                                                                'receive' &&
                                                            !message.error
                                                        "
                                                    >
                                                        {{
                                                            message.direction ===
                                                            'send'
                                                                ? 'north_east'
                                                                : 'south_west'
                                                        }}
                                                    </icon>
                                                    <div class="min-w-0">
                                                        <div
                                                            class="truncate font-mono font-medium"
                                                        >
                                                            {{ message.method }}
                                                        </div>
                                                        <div
                                                            class="truncate font-mono opacity-60"
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
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="text-right opacity-50"
                                                    >
                                                        <div>
                                                            {{
                                                                message.direction
                                                            }}
                                                        </div>
                                                        <div>
                                                            {{
                                                                formatTime(
                                                                    message.time
                                                                )
                                                            }}
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        }
                                    }
                                }
                            }
                        </section>
                    } @empty {
                        <div class="p-4 text-center opacity-40">
                            No observed
                            {{
                                tab() === 'bindings'
                                    ? 'bindings'
                                    : 'execute messages'
                            }}
                        </div>
                    }
                </div>

                <footer
                    class="border-base-300 bg-base-100 border-t p-2 text-xs opacity-60"
                >
                    Ctrl + Alt + Shift + B \xB7 Values and overrides are local to
                    this browser session.
                </footer>
            </aside>
        }
    `,
      imports: [FormsModule, MatRippleModule, IconComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BindingDebugPanelComponent, { className: "BindingDebugPanelComponent", filePath: "libs/components/src/lib/binding-debug-panel.component.ts", lineNumber: 600 });
})();

// libs/components/src/lib/custom-tooltip.component.ts
var _c0 = ["portal_content"];
var _c1 = ["*"];
function CustomTooltipComponent_ng_template_1_Case_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CustomTooltipComponent_ng_template_1_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CustomTooltipComponent_ng_template_1_Case_1_ng_container_0_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngComponentOutlet", ctx_r0.component())("ngComponentOutletInjector", ctx_r0.injector);
  }
}
function CustomTooltipComponent_ng_template_1_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
    \u0275\u0275pipe(1, "sanitize");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, ctx_r0.html()), \u0275\u0275sanitizeHtml);
  }
}
function CustomTooltipComponent_ng_template_1_Case_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CustomTooltipComponent_ng_template_1_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CustomTooltipComponent_ng_template_1_Case_3_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.template())("ngTemplateOutletContext", ctx_r0.data());
  }
}
function CustomTooltipComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275conditionalCreate(1, CustomTooltipComponent_ng_template_1_Case_1_Template, 1, 2, "ng-container")(2, CustomTooltipComponent_ng_template_1_Case_2_Template, 2, 3, "div", 2)(3, CustomTooltipComponent_ng_template_1_Case_3_Template, 1, 2, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_2_0 = ctx_r0.type()) === "component" ? 1 : tmp_2_0 === "html" ? 2 : 3);
  }
}
var _CustomTooltipData = class _CustomTooltipData {
};
_CustomTooltipData.\u0275fac = function CustomTooltipData_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CustomTooltipData)();
};
_CustomTooltipData.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CustomTooltipData, factory: _CustomTooltipData.\u0275fac });
var CustomTooltipData = _CustomTooltipData;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomTooltipData, [{
    type: Injectable
  }], null, null);
})();
var _CustomTooltipComponent = class _CustomTooltipComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._element = inject(ElementRef);
    this._overlay = inject(Overlay);
    this._injector = inject(Injector);
    this._view_container_ref = inject(ViewContainerRef);
    this.x_pos = input("end", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "x_pos" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "xPosition" }));
    this.y_pos = input("top", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "y_pos" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "yPosition" }));
    this.content = input(
      void 0,
      ...ngDevMode ? [{ debugName: "content" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.data = input(
      void 0,
      ...ngDevMode ? [{ debugName: "data" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.backdrop = input(
      true,
      ...ngDevMode ? [{ debugName: "backdrop" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hover = input(
      false,
      ...ngDevMode ? [{ debugName: "hover" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.delay = input(
      0,
      ...ngDevMode ? [{ debugName: "delay" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.x_offset = input(0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "x_offset" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "xOffset" }));
    this.y_offset = input(0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "y_offset" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "yOffset" }));
    this.type = computed(
      () => this.content() instanceof TemplateRef ? "template" : this.content() instanceof Type ? "component" : "html",
      ...ngDevMode ? [{ debugName: "type" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.template = computed(
      () => {
        return this.content();
      },
      ...ngDevMode ? [{ debugName: "template" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.html = computed(
      () => {
        return this.content();
      },
      ...ngDevMode ? [{ debugName: "html" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.component = computed(
      () => {
        return this.content();
      },
      ...ngDevMode ? [{ debugName: "component" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._overlay_ref = null;
    this._portal_content = viewChild.required("portal_content", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_portal_content" } : (
      /* istanbul ignore next */
      {}
    )), { read: TemplateRef }));
    this._update_injector = effect(
      () => {
        this.injector = Injector.create({
          providers: [
            {
              provide: CustomTooltipData,
              useValue: { data: this.data(), close: () => this.close() }
            }
          ],
          parent: this._injector
        });
      },
      ...ngDevMode ? [{ debugName: "_update_injector" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    const open = () => !this.hover() ? this.open() : "";
    const hover_open = (event) => this._canOpenHoverTooltip(event) ? this.open() : "";
    const hover_close = (event) => this._canOpenHoverTooltip(event) ? this.close() : "";
    this._element.nativeElement.addEventListener("click", open);
    this._element.nativeElement.addEventListener("touchend", open);
    this._element.nativeElement.addEventListener("pointerenter", hover_open);
    this._element.nativeElement.addEventListener("pointerleave", hover_close);
    this.subscription("click", () => this._element.nativeElement.removeEventListener("click", open));
    this.subscription("touchend", () => this._element.nativeElement.removeEventListener("touchend", open));
    this.subscription("pointerenter", () => this._element.nativeElement.removeEventListener("pointerenter", hover_open));
    this.subscription("pointerleave", () => this._element.nativeElement.removeEventListener("pointerleave", hover_close));
  }
  ngOnChanges(changes) {
    if (this._overlay_ref && (changes.x_pos || changes.y_pos || changes.x_offset || changes.y_offset || changes.content)) {
      this.open();
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.close();
  }
  open() {
    if (!this.content())
      return;
    this.timeout("open", () => {
      const hover = this.hover();
      const delay = this.delay();
      if (hover && delay) {
        this.timeout("onclose", () => this.close(), delay);
      }
      if (this._overlay_ref)
        this.close();
      const portal = new TemplatePortal(this._portal_content(), this._view_container_ref);
      const default_x = "end";
      const default_y = "top";
      const y_pos = this.y_pos();
      this._overlay_ref = this._overlay.create({
        hasBackdrop: !!this.backdrop() && !hover,
        positionStrategy: this._overlay.position().flexibleConnectedTo(this._element).withDefaultOffsetX(this.x_offset()).withDefaultOffsetY(this.y_offset()).withPositions([
          {
            originX: this.x_pos() || default_x,
            originY: (y_pos === "top" ? "bottom" : y_pos == "bottom" ? "top" : y_pos) || default_y,
            overlayX: this.x_pos() || default_x,
            overlayY: this.y_pos() || default_y
          }
        ])
      });
      this._overlay_ref.attach(portal);
      if (this.backdrop()) {
        this.subscription("backdrop", this._overlay_ref.backdropClick().subscribe(() => this.close()));
      }
    }, 50);
  }
  close() {
    this.clearTimeout("open");
    if (this._overlay_ref) {
      this._overlay_ref.dispose();
      this._overlay_ref = null;
    }
  }
  _canOpenHoverTooltip(event) {
    if (!this.hover())
      return false;
    return !("pointerType" in event) || event.pointerType !== "touch";
  }
};
_CustomTooltipComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CustomTooltipComponent_BaseFactory;
  return function CustomTooltipComponent_Factory(__ngFactoryType__) {
    return (\u0275CustomTooltipComponent_BaseFactory || (\u0275CustomTooltipComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CustomTooltipComponent)))(__ngFactoryType__ || _CustomTooltipComponent);
  };
})();
_CustomTooltipComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomTooltipComponent, selectors: [["", "customTooltip", ""]], viewQuery: function CustomTooltipComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._portal_content, _c0, 5, TemplateRef);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, inputs: { x_pos: [1, "xPosition", "x_pos"], y_pos: [1, "yPosition", "y_pos"], content: [1, "content"], data: [1, "data"], backdrop: [1, "backdrop"], hover: [1, "hover"], delay: [1, "delay"], x_offset: [1, "xOffset", "x_offset"], y_offset: [1, "yOffset", "y_offset"] }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], ngContentSelectors: _c1, decls: 3, vars: 0, consts: [["portal_content", ""], ["custom-tooltip", "", 1, "relative", "print:hidden"], [3, "innerHTML"], [4, "ngComponentOutlet", "ngComponentOutletInjector"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function CustomTooltipComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275projection(0);
    \u0275\u0275template(1, CustomTooltipComponent_ng_template_1_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
}, dependencies: [CommonModule, NgComponentOutlet, NgTemplateOutlet, SanitizePipe], styles: ["\n[_nghost-%COMP%] {\n  pointer-events: auto !important;\n}\n/*# sourceMappingURL=custom-tooltip.component.css.map */"] });
var CustomTooltipComponent = _CustomTooltipComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomTooltipComponent, [{
    type: Component,
    args: [{ selector: "[customTooltip]", template: `
        <ng-content />
        <ng-template #portal_content>
            <div custom-tooltip class="relative print:hidden">
                @switch (type()) {
                    @case ('component') {
                        <ng-container
                            *ngComponentOutlet="component(); injector: injector"
                        ></ng-container>
                    }
                    @case ('html') {
                        <div [innerHTML]="html() | sanitize"></div>
                    }
                    @default {
                        <ng-container
                            *ngTemplateOutlet="template(); context: data()"
                        ></ng-container>
                    }
                }
            </div>
        </ng-template>
    `, imports: [CommonModule, SanitizePipe], styles: ["/* angular:styles/component:css;9f88acd9967d2b0ebf3bc5241107eaa7c3672b233611fbb42832362998689b5f;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/custom-tooltip.component.ts */\n:host {\n  pointer-events: auto !important;\n}\n/*# sourceMappingURL=custom-tooltip.component.css.map */\n"] }]
  }], null, { x_pos: [{ type: Input, args: [{ isSignal: true, alias: "xPosition", required: false }] }], y_pos: [{ type: Input, args: [{ isSignal: true, alias: "yPosition", required: false }] }], content: [{ type: Input, args: [{ isSignal: true, alias: "content", required: false }] }], data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: false }] }], backdrop: [{ type: Input, args: [{ isSignal: true, alias: "backdrop", required: false }] }], hover: [{ type: Input, args: [{ isSignal: true, alias: "hover", required: false }] }], delay: [{ type: Input, args: [{ isSignal: true, alias: "delay", required: false }] }], x_offset: [{ type: Input, args: [{ isSignal: true, alias: "xOffset", required: false }] }], y_offset: [{ type: Input, args: [{ isSignal: true, alias: "yOffset", required: false }] }], _portal_content: [{ type: ViewChild, args: ["portal_content", __spreadProps(__spreadValues({}, {
    read: TemplateRef
  }), { isSignal: true })] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomTooltipComponent, { className: "CustomTooltipComponent", filePath: "libs/components/src/lib/custom-tooltip.component.ts", lineNumber: 64 });
})();

// libs/components/src/lib/settings-debug-panel.component.ts
var _c02 = (a0) => ({ zones: a0 });
var _forTrack02 = ($index, $item) => $item.key;
var _forTrack12 = ($index, $item) => $item.type + $item.id;
function SettingsDebugPanelComponent_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyOverrides());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "content_copy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 14);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_Conditional_11_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearAll());
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "delete_sweep");
    \u0275\u0275elementEnd()();
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_18_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r5.overridden, " overridden ");
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_For_18_Conditional_1_Template_button_click_0_listener() {
      const group_r5 = \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleGroup(group_r5.name));
    });
    \u0275\u0275elementStart(1, "icon", 18);
    \u0275\u0275text(2, " chevron_right ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, SettingsDebugPanelComponent_Conditional_0_For_18_Conditional_1_Conditional_7_Template, 2, 1, "span", 21);
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
function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
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
function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
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
function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_9_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const row_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearOverride(row_r6.key));
    });
    \u0275\u0275elementStart(1, "icon", 33);
    \u0275\u0275text(2, "undo");
    \u0275\u0275elementEnd()();
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 29);
    \u0275\u0275listener("ngModelChange", function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_9_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const row_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectValue(row_r6, $event));
    });
    \u0275\u0275repeaterCreate(1, SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_9_For_2_Template, 2, 2, "option", 30, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(3, SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_9_Conditional_3_Template, 3, 0, "button", 31);
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
function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_10_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.edit_value, $event) || (ctx_r1.edit_value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_10_Template_input_keydown_enter_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    })("keydown.escape", function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_10_Template_input_keydown_escape_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.editing_key.set(""));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(1, "button", 35);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    });
    \u0275\u0275elementStart(2, "icon", 33);
    \u0275\u0275text(3, "check");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.edit_value);
    \u0275\u0275control();
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_11_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.edit_value, $event) || (ctx_r1.edit_value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_11_Template_input_keydown_enter_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    })("keydown.escape", function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_11_Template_input_keydown_escape_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.editing_key.set(""));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(1, "button", 35);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    });
    \u0275\u0275elementStart(2, "icon", 33);
    \u0275\u0275text(3, "check");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.edit_value);
    \u0275\u0275control();
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "button", 39);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_12_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const row_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleValue(row_r6));
    });
    \u0275\u0275element(2, "div", 40);
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
function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_12_Conditional_1_Template_div_click_0_listener() {
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
function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_12_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const row_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearOverride(row_r6.key));
    });
    \u0275\u0275elementStart(1, "icon", 33);
    \u0275\u0275text(2, "undo");
    \u0275\u0275elementEnd()();
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_12_Conditional_0_Template, 3, 7, "div", 37)(1, SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_12_Conditional_1_Template, 2, 4, "div", 38);
    \u0275\u0275conditionalCreate(2, SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_12_Conditional_2_Template, 3, 0, "button", 31);
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(row_r6.control === "toggle" ? 0 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(row_r6.overridden ? 2 : -1);
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "div", 24)(3, "span", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 26)(6, "icon", 27);
    \u0275\u0275text(7, "info");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(8, SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Conditional_8_Template, 2, 2, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_9_Template, 4, 2)(10, SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_10_Template, 4, 1)(11, SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_11_Template, 4, 1)(12, SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Case_12_Template, 3, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_34_0;
    const row_r6 = ctx.$implicit;
    const entry_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    const zone_tooltip_r16 = \u0275\u0275reference(3);
    \u0275\u0275classProp("pl-8", entry_r15.grouped)("pl-2", !entry_r15.grouped)("bg-warning-light", row_r6.overridden);
    \u0275\u0275advance();
    \u0275\u0275classProp("col-span-3", row_r6.control !== "toggle")("pb-1", row_r6.control !== "toggle");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r6.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("content", zone_tooltip_r16)("data", \u0275\u0275pureFunction1(18, _c02, row_r6.zones))("hover", true)("backdrop", false)("xOffset", 20);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(row_r6.description ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_34_0 = row_r6.control === "select" || ctx_r1.editing_key() === row_r6.key ? row_r6.control : "") === "select" ? 9 : tmp_34_0 === "number" ? 10 : tmp_34_0 === "text" ? 11 : 12);
  }
}
function SettingsDebugPanelComponent_Conditional_0_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section");
    \u0275\u0275conditionalCreate(1, SettingsDebugPanelComponent_Conditional_0_For_18_Conditional_1_Template, 8, 5, "button", 15);
    \u0275\u0275repeaterCreate(2, SettingsDebugPanelComponent_Conditional_0_For_18_For_3_Template, 13, 20, "div", 16, _forTrack02);
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
function SettingsDebugPanelComponent_Conditional_0_ForEmpty_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1, " No matching settings ");
    \u0275\u0275elementEnd();
  }
}
function SettingsDebugPanelComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aside", 1)(1, "header", 2)(2, "button", 3);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show.set(false));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 4);
    \u0275\u0275text(6, " Settings Viewer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
    \u0275\u0275listener("click", function SettingsDebugPanelComponent_Conditional_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addSetting());
    });
    \u0275\u0275elementStart(9, "icon");
    \u0275\u0275text(10, "add");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, SettingsDebugPanelComponent_Conditional_0_Conditional_11_Template, 6, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 7)(13, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsDebugPanelComponent_Conditional_0_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filter, $event) || (ctx_r1.filter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(14, "icon", 9);
    \u0275\u0275text(15, "search");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 10);
    \u0275\u0275repeaterCreate(17, SettingsDebugPanelComponent_Conditional_0_For_18_Template, 4, 1, "section", null, \u0275\u0275repeaterTrackByIndex, false, SettingsDebugPanelComponent_Conditional_0_ForEmpty_19_Template, 2, 0, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 12);
    \u0275\u0275text(21, " Click a value to override it. Text values are parsed as JSON, falling back to plain strings. Overrides are stored locally in this browser. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r1.has_overrides() ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filter);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.entries());
  }
}
function SettingsDebugPanelComponent_ng_template_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 47)(2, "div", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 49);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 50);
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
function SettingsDebugPanelComponent_ng_template_2_ForEmpty_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1, " No zone metadata value ");
    \u0275\u0275elementEnd();
  }
}
function SettingsDebugPanelComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43);
    \u0275\u0275text(2, " Setting sources ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 44);
    \u0275\u0275repeaterCreate(4, SettingsDebugPanelComponent_ng_template_2_For_5_Template, 8, 3, "div", 45, _forTrack12, false, SettingsDebugPanelComponent_ng_template_2_ForEmpty_6_Template, 2, 0, "div", 46);
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
    this._dock_app = effect(
      (on_cleanup) => {
        if (!this.show())
          return;
        const body = this._document.body;
        const padding_right = body.style.paddingRight;
        body.style.paddingRight = "min(24rem, 90vw)";
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
_SettingsDebugPanelComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsDebugPanelComponent, selectors: [["settings-debug-panel"]], inputs: { schema: [1, "schema"], show: [1, "show"] }, outputs: { show: "showChange" }, decls: 4, vars: 1, consts: [["zone_tooltip", ""], [1, "border-base-300", "bg-base-200", "text-base-content", "fixed", "inset-y-0", "right-0", "z-998", "flex", "w-96", "max-w-[90vw]", "flex-col", "border-l", "shadow-xl"], [1, "border-base-300", "bg-base-100", "flex", "items-center", "border-b", "p-2"], ["icon", "", "default", "", "matRipple", "", 1, "text-sm", 3, "click"], [1, "flex-1", "px-3", "text-lg", "font-medium"], [1, "flex", "items-center", "gap-2", "text-xs"], ["icon", "", "default", "", "matRipple", "", "matTooltip", "Add setting", "matTooltipPosition", "below", "aria-label", "Add setting", 3, "click"], [1, "relative", "m-1", "flex"], ["name", "setting-filter", "placeholder", "Filter settings...", 1, "border-base-300", "bg-base-100", "w-full", "rounded-lg", "border", "px-8", "py-2", "pr-2", "font-mono", "text-sm", "shadow", 3, "ngModelChange", "ngModel"], [1, "absolute", "top-1/2", "left-1", "-translate-y-1/2", "text-xl"], [1, "flex-1", "overflow-auto"], [1, "p-4", "text-center", "opacity-30"], [1, "border-base-300", "bg-base-100", "border-t", "p-2", "text-xs", "opacity-60"], ["icon", "", "default", "", "matRipple", "", "matTooltip", "Copy overrides", "matTooltipPosition", "below", "aria-label", "Copy overrides", 3, "click"], ["icon", "", "default", "", "error", "", "matRipple", "", "matTooltip", "Clear all overrides", "matTooltipPosition", "below", "aria-label", "Clear all overrides", 3, "click"], [1, "border-base-300", "bg-base-100", "hover:bg-base-100", "sticky", "top-0", "z-10", "flex", "min-h-8", "w-full", "items-center", "gap-1", "border-b", "px-2", "py-1", "text-left", "text-xs"], [1, "border-base-300", "grid", "min-h-8", "grid-cols-[minmax(0,1fr)_auto_auto]", "items-center", "border-b", "py-1", "pr-2", "text-xs", 3, "pl-8", "pl-2", "bg-warning-light"], [1, "border-base-300", "bg-base-100", "hover:bg-base-100", "sticky", "top-0", "z-10", "flex", "min-h-8", "w-full", "items-center", "gap-1", "border-b", "px-2", "py-1", "text-left", "text-xs", 3, "click"], [1, "text-sm", "transition-transform"], [1, "font-mono"], [1, "opacity-40"], [1, "bg-warning-light", "rounded-sm", "px-1", "text-[0.65rem]", "text-black"], [1, "border-base-300", "grid", "min-h-8", "grid-cols-[minmax(0,1fr)_auto_auto]", "items-center", "border-b", "py-1", "pr-2", "text-xs"], [1, "min-w-0", "pr-2"], [1, "flex", "min-w-0", "items-center", "gap-1", "font-mono"], [1, "truncate"], ["customTooltip", "", "xPosition", "start", "yPosition", "center", 1, "shrink-0", 3, "content", "data", "hover", "backdrop", "xOffset"], [1, "text-sm", "opacity-60"], [1, "truncate", "text-[0.65rem]", "opacity-60", 3, "title"], ["name", "setting-value", 1, "border-base-300", "bg-base-100", "focus:border-info", "focus:ring-info", "h-8", "w-full", "rounded-md", "border", "px-2", "font-mono", "shadow-sm", "outline-none", "focus:ring-2", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["icon", "", "matRipple", "", "title", "Clear override"], ["icon", "", "matRipple", "", "title", "Clear override", 3, "click"], [1, "text-sm"], ["name", "setting-value", "type", "number", 1, "border-base-300", "bg-base-100", "focus:border-info", "focus:ring-info", "h-8", "w-full", "rounded-md", "border", "px-2", "font-mono", "shadow-sm", "outline-none", "focus:ring-2", 3, "ngModelChange", "keydown.enter", "keydown.escape", "ngModel"], ["icon", "", "matRipple", "", "title", "Save override", 3, "click"], ["name", "setting-value", 1, "border-base-300", "bg-base-100", "focus:border-info", "focus:ring-info", "h-8", "w-full", "rounded-md", "border", "px-2", "font-mono", "shadow-sm", "outline-none", "focus:ring-2", 3, "ngModelChange", "keydown.enter", "keydown.escape", "ngModel"], [1, "flex"], [1, "border-base-300", "bg-base-100", "hover:border-info", "flex", "h-8", "w-full", "cursor-pointer", "items-center", "truncate", "rounded-md", "border", "px-2", "font-mono", "shadow-sm", "transition-colors", 3, "class", "title"], [1, "relative", "h-4", "w-8", "rounded-full", "transition-colors", 3, "click", "title"], [1, "absolute", "top-0.5", "left-0.5", "h-3", "w-3", "rounded-full", "bg-white", "shadow-sm", "transition-transform"], [1, "border-base-300", "bg-base-100", "hover:border-info", "flex", "h-8", "w-full", "cursor-pointer", "items-center", "truncate", "rounded-md", "border", "px-2", "font-mono", "shadow-sm", "transition-colors", 3, "click", "title"], [1, "border-base-300", "bg-base-100", "text-base-content", "min-w-64", "rounded-lg", "border", "p-2", "shadow-lg"], [1, "border-base-300", "border-b", "px-1", "pb-2", "text-base", "font-medium"], [1, "flex", "flex-col", "gap-1", "pt-2"], [1, "bg-base-200", "flex", "items-start", "gap-2", "rounded-sm", "p-2"], [1, "px-1", "py-2", "text-xs", "opacity-60"], [1, "w-1/2", "min-w-0", "flex-1"], [1, "truncate", "text-base", "font-medium"], [1, "truncate", "font-mono", "text-[0.625rem]", "opacity-60"], [1, "bg-base-300", "rounded-sm", "px-1.5", "py-0.5", "text-[0.625rem]", "font-medium"]], template: function SettingsDebugPanelComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SettingsDebugPanelComponent_Conditional_0_Template, 22, 3, "aside", 1);
    \u0275\u0275element(1, "binding-debug-panel");
    \u0275\u0275template(2, SettingsDebugPanelComponent_ng_template_2_Template, 7, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
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
  BindingDebugPanelComponent,
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
                class="border-base-300 bg-base-200 text-base-content fixed inset-y-0 right-0 z-998 flex w-96 max-w-[90vw] flex-col border-l shadow-xl"
            >
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
                                                xPosition="start"
                                                yPosition="center"
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
        <binding-debug-panel />
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
        BindingDebugPanelComponent,
        CustomTooltipComponent,
        IconComponent
      ]
    }]
  }], null, { schema: [{ type: Input, args: [{ isSignal: true, alias: "schema", required: false }] }], show: [{ type: Input, args: [{ isSignal: true, alias: "show", required: false }] }, { type: Output, args: ["showChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsDebugPanelComponent, { className: "SettingsDebugPanelComponent", filePath: "libs/components/src/lib/settings-debug-panel.component.ts", lineNumber: 476 });
})();
export {
  SettingsDebugPanelComponent
};
//# debugId=ad14b439-6311-56e0-ad6f-512ed27bd4cc
//# sourceMappingURL=settings-debug-panel.component-K5BTXNEH.js.map
