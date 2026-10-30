import {
  MatSelect,
  MatSelectModule
} from "./chunk-WZBYY54Y.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-PAJWQ7AP.js";
import {
  SettingsToggleComponent
} from "./chunk-YEGWJU2K.js";
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule
} from "./chunk-2K5G7CFD.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-5GXWVSSG.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule
} from "./chunk-54KE5JKV.js";
import {
  MatOption
} from "./chunk-G7ZLBZI3.js";
import {
  TranslatePipe
} from "./chunk-IGQY3INR.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  RequiredValidator
} from "./chunk-ACYV7NM4.js";
import {
  IconComponent
} from "./chunk-QVU2YYRL.js";
import {
  AsyncHandler,
  _c
} from "./chunk-JYQPCPCB.js";
import {
  MatRippleModule
} from "./chunk-3WBJTYSG.js";
import {
  MatRipple
} from "./chunk-QSD4JXRO.js";
import {
  Component,
  EventEmitter,
  Output,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
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
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QAVCSYNX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/components/src/lib/attached-resource-config-modal.component.ts
var _c0 = (a0) => ({ name: a0 });
function AttachedResourceConfigModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function AttachedResourceConfigModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 10);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("ngModelChange", function AttachedResourceConfigModalComponent_Conditional_6_Template_settings_toggle_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveNotesSetting($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r1.require_notes())("label", \u0275\u0275pipeBind1(1, 2, "RESOURCE.REQUIRE_NOTES"));
    \u0275\u0275control();
  }
}
function AttachedResourceConfigModalComponent_For_11_For_35_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r8 = ctx.$implicit;
    \u0275\u0275property("value", type_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r8.name, " ");
  }
}
function AttachedResourceConfigModalComponent_For_11_For_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "div", 22);
    \u0275\u0275elementStart(2, "mat-form-field", 12)(3, "mat-select", 23);
    \u0275\u0275twoWayListener("ngModelChange", function AttachedResourceConfigModalComponent_For_11_For_35_Template_mat_select_ngModelChange_3_listener($event) {
      const rule_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(rule_r7[0], $event) || (rule_r7[0] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(4, AttachedResourceConfigModalComponent_For_11_For_35_For_5_Template, 2, 2, "mat-option", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 12)(7, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function AttachedResourceConfigModalComponent_For_11_For_35_Template_input_ngModelChange_7_listener($event) {
      const rule_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(rule_r7[1], $event) || (rule_r7[1] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 26);
    \u0275\u0275listener("click", function AttachedResourceConfigModalComponent_For_11_For_35_Template_button_click_11_listener() {
      const \u0275$index_78_r9 = \u0275\u0275restoreView(_r6).$index;
      const set_r4 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(set_r4.rules.splice(\u0275$index_78_r9, 1));
    });
    \u0275\u0275elementStart(12, "icon");
    \u0275\u0275text(13, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const rule_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", rule_r7[0]);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.rule_types);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", rule_r7[1]);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 3, "RESOURCE.RULESET_VALUE_REQUIRED"));
  }
}
function AttachedResourceConfigModalComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 11)(2, "mat-form-field", 12)(3, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function AttachedResourceConfigModalComponent_For_11_Template_input_ngModelChange_3_listener($event) {
      const set_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(set_r4.name, $event) || (set_r4.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(4, "mat-error");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 14)(8, "icon");
    \u0275\u0275text(9, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-menu", null, 0)(12, "button", 15);
    \u0275\u0275listener("click", function AttachedResourceConfigModalComponent_For_11_Template_button_click_12_listener() {
      const set_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      set_r4.rules.push(["", ""]);
      return \u0275\u0275resetView(ctx_r1.show_rules.set(set_r4.id));
    });
    \u0275\u0275elementStart(13, "div", 16)(14, "icon", 17);
    \u0275\u0275text(15, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "button", 18);
    \u0275\u0275listener("click", function AttachedResourceConfigModalComponent_For_11_Template_button_click_19_listener() {
      const set_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show_rules.set(ctx_r1.show_rules() !== set_r4.id ? set_r4.id : ""));
    });
    \u0275\u0275elementStart(20, "div", 16)(21, "icon", 17);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "button", 18);
    \u0275\u0275listener("click", function AttachedResourceConfigModalComponent_For_11_Template_button_click_26_listener() {
      const \u0275$index_23_r5 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rulesets.splice(\u0275$index_23_r5, 1));
    });
    \u0275\u0275elementStart(27, "div", 19)(28, "icon", 17);
    \u0275\u0275text(29, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(33, "div", 20);
    \u0275\u0275repeaterCreate(34, AttachedResourceConfigModalComponent_For_11_For_35_Template, 14, 5, "div", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const set_r4 = ctx.$implicit;
    const menu_r10 = \u0275\u0275reference(11);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", set_r4.name);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, "RESOURCE.RULESET_NAME_REQUIRED"));
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", menu_r10);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 11, "RESOURCE.RULESET_ADD_RULE"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.show_rules() === set_r4.id ? "expand_less" : "expand_more");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 13, ctx_r1.show_rules() === set_r4.id ? "RESOURCE.RULESET_HIDE_RULES" : "RESOURCE.RULESET_SHOW_RULES"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 15, "RESOURCE.RULESET_REMOVE_RULES"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", (ctx_r1.show_rules() === set_r4.id ? 4 * set_r4.rules.length : 0) + "em");
    \u0275\u0275advance();
    \u0275\u0275repeater(set_r4.rules);
  }
}
function zoneRulesetLoader(metadata_name) {
  const requests = {};
  return (zone_id, fresh = false) => {
    if (!zone_id)
      return Promise.resolve([]);
    if (!requests[zone_id] || fresh) {
      requests[zone_id] = _c(zone_id, metadata_name).then((_) => _.details instanceof Array ? _.details : []).catch(() => []);
    }
    return requests[zone_id];
  };
}
var RULE_TYPES = [
  { id: "after_hour", name: "After Hour of Day" },
  { id: "before_hour", name: "Before Hour of Day" },
  { id: "min_length", name: "Min. Meeting Length" },
  { id: "max_length", name: "Max. Meeting Length" },
  { id: "is_before", name: "Is Hours before Meeting" },
  { id: "within_hours", name: "Within Hours before Meeting" },
  { id: "visitor_type", name: "Visitor Type" },
  { id: "groups", name: "User in Groups" }
];
var AttachedResourceConfigModalComponent = class _AttachedResourceConfigModalComponent extends AsyncHandler {
  newId() {
    return "ruleset-" + Math.floor(Math.random() * 99999999);
  }
  constructor() {
    super();
    this._data = inject(MAT_DIALOG_DATA);
    this.event = new EventEmitter();
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_rules = signal(
      "",
      ...ngDevMode ? [{ debugName: "show_rules" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.require_notes = signal(
      this._data.require_notes,
      ...ngDevMode ? [{ debugName: "require_notes" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.resource_name = this._data.resource_name || "Catering";
    this.rule_types = RULE_TYPES;
    this.can_save_notes = computed(
      () => !!this._data.saveNotes,
      ...ngDevMode ? [{ debugName: "can_save_notes" }] : (
        /* istanbul ignore next */
        []
      )
    );
    const _data = this._data;
    this.rulesets = (_data.config || []).map((set) => {
      set.rules = set.rules.map((i) => [
        i[0],
        JSON.stringify(i[1])
      ]);
      return set;
    });
  }
  saveNotesSetting(value) {
    this.timeout("save-notes", () => this._data.saveNotes ? this._data.saveNotes(value) : "", 1e3);
  }
  saveChanges() {
    this.loading.set(true);
    const rulesets = this.rulesets.map((set) => {
      return __spreadProps(__spreadValues({}, set), {
        rules: set.rules.map((i) => {
          let value = i[1];
          try {
            value = JSON.parse(i[1]);
          } catch {
          }
          return [i[0], value];
        })
      });
    });
    this.event.emit({ reason: "done", metadata: rulesets });
  }
  static {
    this.\u0275fac = function AttachedResourceConfigModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AttachedResourceConfigModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AttachedResourceConfigModalComponent, selectors: [["attached-resource-config-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 16, vars: 14, consts: [["menu", "matMenu"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "max-w-lg", "min-w-xl", "space-y-4", "overflow-auto", "px-4", "pt-2", "pb-4", "text-center"], [3, "ngModel", "label"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], [1, "ruleset", "mb-2"], [1, "border-base-200", "flex", "items-center", "justify-end", "border-t", "border-solid", "px-4", "py-2"], ["btn", "", "matRipple", "", 1, "w-36", 3, "click"], [3, "ngModelChange", "ngModel", "label"], [1, "mb-2", "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "flex-1"], ["matInput", "", "name", "name", "placeholder", "Zone ID, Category or Tag", "required", "", 3, "ngModelChange", "ngModel"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded-sm", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 1, "w-52", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click"], [1, "text-error", "flex", "items-center", "space-x-2"], ["name", "rules", 1, "overflow-hidden"], [1, "relative", "flex", "h-16", "items-center", "space-x-2", "pl-7"], [1, "border-base-200", "absolute", "top-1/2", "left-3", "h-32", "w-4", "-translate-y-full", "border-b-2", "border-l-2"], ["name", "booking-type", "placeholder", "Select Rule", 3, "ngModelChange", "ngModel"], [3, "value"], ["matInput", "", "name", "value", "placeholder", "Rule value", "required", "", 3, "ngModelChange", "ngModel"], ["icon", "", "matRipple", "", 1, "border-error", "text-error", "h-12", "w-12", "rounded-sm", "border", 3, "click"]], template: function AttachedResourceConfigModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 1)(1, "h2", 2);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, AttachedResourceConfigModalComponent_Conditional_4_Template, 3, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "main", 4);
        \u0275\u0275conditionalCreate(6, AttachedResourceConfigModalComponent_Conditional_6_Template, 2, 4, "settings-toggle", 5);
        \u0275\u0275elementStart(7, "button", 6);
        \u0275\u0275listener("click", function AttachedResourceConfigModalComponent_Template_button_click_7_listener() {
          return ctx.rulesets.push({ id: ctx.newId(), name: "", rules: [] });
        });
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(10, AttachedResourceConfigModalComponent_For_11_Template, 36, 17, "div", 7, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "footer", 8)(13, "button", 9);
        \u0275\u0275listener("click", function AttachedResourceConfigModalComponent_Template_button_click_13_listener() {
          return ctx.saveChanges();
        });
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 5, "RESOURCE.RULESET_HEADER", \u0275\u0275pureFunction1(12, _c0, ctx.resource_name)), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 4 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.can_save_notes() ? 6 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 8, "RESOURCE.RULESET_NEW"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.rulesets);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 10, "COMMON.SAVE"), " ");
      }
    }, dependencies: [
      MatDialogModule,
      MatDialogClose,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      SettingsToggleComponent,
      IconComponent,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      RequiredValidator,
      NgModel,
      TranslatePipe
    ], styles: ["\n[name=rules][_ngcontent-%COMP%] {\n  transition: height 200ms;\n}\n/*# sourceMappingURL=attached-resource-config-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttachedResourceConfigModalComponent, [{
    type: Component,
    args: [{ selector: "attached-resource-config-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{
                    'RESOURCE.RULESET_HEADER'
                        | translate: { name: resource_name }
                }}
            </h2>
            @if (!loading()) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        <main
            class="max-w-lg min-w-xl space-y-4 overflow-auto px-4 pt-2 pb-4 text-center"
        >
            @if (can_save_notes()) {
                <settings-toggle
                    [ngModel]="require_notes()"
                    (ngModelChange)="saveNotesSetting($event)"
                    [label]="'RESOURCE.REQUIRE_NOTES' | translate"
                ></settings-toggle>
            }
            <button
                btn
                matRipple
                class="w-full"
                (click)="rulesets.push({ id: newId(), name: '', rules: [] })"
            >
                {{ 'RESOURCE.RULESET_NEW' | translate }}
            </button>
            @for (set of rulesets; track set; let i = $index) {
                <div class="ruleset mb-2">
                    <div class="mb-2 flex items-center space-x-2">
                        <mat-form-field
                            class="no-subscript flex-1"
                            appearance="outline"
                        >
                            <input
                                matInput
                                name="name"
                                placeholder="Zone ID, Category or Tag"
                                [(ngModel)]="set.name"
                                required
                            />
                            <mat-error>{{
                                'RESOURCE.RULESET_NAME_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                        <button
                            icon
                            matRipple
                            class="h-12 w-12 rounded-sm"
                            [matMenuTriggerFor]="menu"
                        >
                            <icon>more_vert</icon>
                        </button>
                        <mat-menu #menu="matMenu">
                            <button
                                mat-menu-item
                                class="w-52"
                                (click)="
                                    set.rules.push($any(['', '']));
                                    show_rules.set(set.id)
                                "
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">add</icon>
                                    <div>
                                        {{
                                            'RESOURCE.RULESET_ADD_RULE'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                            <button
                                mat-menu-item
                                (click)="
                                    show_rules.set(
                                        show_rules() !== set.id ? set.id : ''
                                    )
                                "
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">{{
                                        show_rules() === set.id
                                            ? 'expand_less'
                                            : 'expand_more'
                                    }}</icon>
                                    <div>
                                        {{
                                            (show_rules() === set.id
                                                ? 'RESOURCE.RULESET_HIDE_RULES'
                                                : 'RESOURCE.RULESET_SHOW_RULES'
                                            ) | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                            <button
                                mat-menu-item
                                (click)="rulesets.splice(i, 1)"
                            >
                                <div
                                    class="text-error flex items-center space-x-2"
                                >
                                    <icon class="text-2xl">delete</icon>
                                    <div>
                                        {{
                                            'RESOURCE.RULESET_REMOVE_RULES'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                        </mat-menu>
                    </div>
                    <div
                        name="rules"
                        class="overflow-hidden"
                        [style.height]="
                            (show_rules() === set.id
                                ? 4 * set.rules.length
                                : 0) + 'em'
                        "
                    >
                        @for (rule of set.rules; track rule; let i = $index) {
                            <div
                                class="relative flex h-16 items-center space-x-2 pl-7"
                            >
                                <div
                                    class="border-base-200 absolute top-1/2 left-3 h-32 w-4 -translate-y-full border-b-2 border-l-2"
                                ></div>
                                <mat-form-field
                                    class="no-subscript flex-1"
                                    appearance="outline"
                                >
                                    <mat-select
                                        name="booking-type"
                                        [(ngModel)]="rule[0]"
                                        placeholder="Select Rule"
                                    >
                                        @for (type of rule_types; track type) {
                                            <mat-option [value]="type.id">
                                                {{ type.name }}
                                            </mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                                <mat-form-field
                                    class="no-subscript flex-1"
                                    appearance="outline"
                                >
                                    <input
                                        matInput
                                        name="value"
                                        placeholder="Rule value"
                                        [(ngModel)]="rule[1]"
                                        required
                                    />
                                    <mat-error>{{
                                        'RESOURCE.RULESET_VALUE_REQUIRED'
                                            | translate
                                    }}</mat-error>
                                </mat-form-field>
                                <button
                                    icon
                                    matRipple
                                    class="border-error text-error h-12 w-12 rounded-sm border"
                                    (click)="set.rules.splice(i, 1)"
                                >
                                    <icon>delete</icon>
                                </button>
                            </div>
                        }
                    </div>
                </div>
            }
        </main>
        <footer
            class="border-base-200 flex items-center justify-end border-t border-solid px-4 py-2"
        >
            <button btn matRipple class="w-36" (click)="saveChanges()">
                {{ 'COMMON.SAVE' | translate }}
            </button>
        </footer>
    `, imports: [
      MatDialogModule,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatMenuModule,
      SettingsToggleComponent,
      TranslatePipe,
      IconComponent,
      FormsModule
    ], styles: ["/* angular:styles/component:css;e42970bb9b1cb2f175261260cd89c08d4c8b2fb74f6c959cde75a7e627b2b6e7;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/attached-resource-config-modal.component.ts */\n[name=rules] {\n  transition: height 200ms;\n}\n/*# sourceMappingURL=attached-resource-config-modal.component.css.map */\n"] }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttachedResourceConfigModalComponent, { className: "AttachedResourceConfigModalComponent", filePath: "libs/components/src/lib/attached-resource-config-modal.component.ts", lineNumber: 294 });
})();

export {
  zoneRulesetLoader,
  AttachedResourceConfigModalComponent
};
//# debugId=8551fed1-5b25-5a80-a84e-63ffb833799d
//# sourceMappingURL=chunk-UCY4GTNV.js.map
