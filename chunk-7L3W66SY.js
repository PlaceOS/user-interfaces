import {
  toSignal
} from "./chunk-WVQ3A7JI.js";
import {
  MatCheckbox,
  MatCheckboxModule,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSelect,
  MatSelectModule,
  SettingsToggleComponent
} from "./chunk-UI2RAG62.js";
import {
  requestSpacesForZone
} from "./chunk-5LJLE5G4.js";
import {
  AsyncHandler,
  Component,
  DefaultValueAccessor,
  EventEmitter,
  FormsModule,
  IconComponent,
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatOption,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgModel,
  OrganisationService,
  Output,
  RequiredValidator,
  TranslatePipe,
  computed,
  inject,
  output,
  setClassMetadata,
  signal,
  unique,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
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
  ɵɵpipeBind3,
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
} from "./chunk-J3FDPPYQ.js";
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
          } catch (e) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttachedResourceConfigModalComponent, { className: "AttachedResourceConfigModalComponent", filePath: "libs/components/src/lib/attached-resource-config-modal.component.ts", lineNumber: 271 });
})();

// libs/components/src/lib/available-rooms-state-modal.component.ts
var _c02 = (a0) => ({ type: a0 });
var _c1 = (a0) => ({ count: a0 });
function AvailableRoomsStateModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 2)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function AvailableRoomsStateModalComponent_Conditional_6_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 14);
    \u0275\u0275listener("click", function AvailableRoomsStateModalComponent_Conditional_6_For_12_Template_tr_click_0_listener() {
      const space_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleRoom(space_r4.id));
    });
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275element(2, "mat-checkbox", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 16)(6, "div", 17);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const space_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.selected().includes(space_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", space_r4.display_name || space_r4.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success", !ctx_r1.disabled_rooms()?.includes(space_r4.id))("bg-error", ctx_r1.disabled_rooms()?.includes(space_r4.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 7, !ctx_r1.disabled_rooms()?.includes(space_r4.id) ? "COMMON.ENABLED" : "COMMON.DISABLED"), " ");
  }
}
function AvailableRoomsStateModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 4)(1, "table", 5)(2, "thead", 6)(3, "tr")(4, "td", 7);
    \u0275\u0275listener("click", function AvailableRoomsStateModalComponent_Conditional_6_Template_td_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleRoom("*"));
    });
    \u0275\u0275element(5, "mat-checkbox", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "td");
    \u0275\u0275elementStart(7, "td", 9);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275repeaterCreate(11, AvailableRoomsStateModalComponent_Conditional_6_For_12_Template, 9, 9, "tr", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "footer", 11)(14, "button", 12);
    \u0275\u0275listener("click", function AvailableRoomsStateModalComponent_Conditional_6_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.enableSelected());
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 13);
    \u0275\u0275listener("click", function AvailableRoomsStateModalComponent_Conditional_6_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.disableSelected());
    });
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r1.rooms()?.length === ctx_r1.selected().length)("indeterminate", ctx_r1.selected().length > 0 && ctx_r1.rooms()?.length !== ctx_r1.selected().length);
    const rm_list_r5 = ctx_r1.rooms();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(9, 5, "APP.CONCIERGE.AVAILABLE_ROOMS_COUNT", \u0275\u0275pureFunction1(13, _c1, rm_list_r5?.length), rm_list_r5?.length), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.rooms());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 9, "APP.CONCIERGE.AVAILABLE_ROOMS_ENABLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 11, "APP.CONCIERGE.AVAILABLE_ROOMS_DISABLE"), " ");
  }
}
function AvailableRoomsStateModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3);
    \u0275\u0275element(1, "mat-spinner", 18);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 1, "APP.CONCIERGE.AVAILABLE_ROOMS_SAVING", \u0275\u0275pureFunction1(4, _c02, ctx_r1.type)), " ");
  }
}
var AvailableRoomsStateModalComponent = class _AvailableRoomsStateModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._org = inject(OrganisationService);
    this.change = output();
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected = signal(
      [],
      ...ngDevMode ? [{ debugName: "selected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.rooms = toSignal(requestSpacesForZone(this._org.building.id));
    this.type = this._data.type;
    this.disabled_rooms = signal(
      this._data.disabled_rooms,
      ...ngDevMode ? [{ debugName: "disabled_rooms" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async toggleRoom(id) {
    if (id === "*") {
      const rooms = this.rooms() || [];
      if (this.selected().length !== rooms.length)
        this.selected.set(rooms.map((_) => _.id));
      else
        this.selected.set([]);
    } else {
      if (this.selected().includes(id))
        this.selected.set(this.selected().filter((_) => _ !== id));
      else
        this.selected.set([...this.selected(), id]);
    }
  }
  async enableSelected() {
    this.loading.set(true);
    const disabled_list = this.disabled_rooms();
    const list = disabled_list.filter((_) => !this.selected().includes(_));
    this.disabled_rooms.set(list);
    this.change.emit(list);
  }
  async disableSelected() {
    this.loading.set(true);
    const disabled_list = this.disabled_rooms();
    const list = unique(disabled_list.concat(this.selected()));
    this.disabled_rooms.set(list);
    this.change.emit(list);
  }
  static {
    this.\u0275fac = function AvailableRoomsStateModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AvailableRoomsStateModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AvailableRoomsStateModalComponent, selectors: [["available-rooms-state-modal"]], outputs: { change: "change" }, decls: 8, vars: 8, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "h-14", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "h-48", "w-full", "min-w-64", "flex-col", "items-center", "justify-center", "space-y-2", "p-16", "text-center"], [1, "max-h-[65vh]", "w-lg", "overflow-auto"], [1, "min-w-lg"], [1, "border-base-200", "border-b"], [1, "w-12", "py-1", 3, "click"], [1, "pointer-events-none", 3, "checked", "indeterminate"], [1, "px-8", "text-right", "text-xs"], [1, "hover:bg-base-200"], [1, "border-base-200", "flex", "items-center", "justify-end", "space-x-2", "border-t", "p-2"], ["btn", "", "matRipple", "", 3, "click"], ["btn", "", "matRipple", "", 1, "inverse", 3, "click"], [1, "hover:bg-base-200", 3, "click"], [1, "pointer-events-none", 3, "checked"], [1, "text-center"], [1, "ml-auto", "w-24", "rounded-full", "px-3", "py-2", "text-sm", "text-white"], ["diameter", "32"]], template: function AvailableRoomsStateModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div")(1, "header", 0)(2, "h2", 1);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, AvailableRoomsStateModalComponent_Conditional_5_Template, 3, 0, "button", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, AvailableRoomsStateModalComponent_Conditional_6_Template, 20, 15)(7, AvailableRoomsStateModalComponent_Conditional_7_Template, 5, 6, "main", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 3, "APP.CONCIERGE.AVAILABLE_ROOMS_HEADER", \u0275\u0275pureFunction1(6, _c02, ctx.type)), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 6 : 7);
      }
    }, dependencies: [
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      MatCheckboxModule,
      MatCheckbox,
      MatDialogModule,
      MatDialogClose,
      IconComponent,
      TranslatePipe
    ], styles: ["\ntd[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n/*# sourceMappingURL=available-rooms-state-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvailableRoomsStateModalComponent, [{
    type: Component,
    args: [{ selector: "available-rooms-state-modal", template: `
        <div>
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] rounded-sm border-none p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    {{
                        'APP.CONCIERGE.AVAILABLE_ROOMS_HEADER'
                            | translate: { type: type }
                    }}
                </h2>
                @if (!loading()) {
                    <button icon matRipple mat-dialog-close>
                        <icon>close</icon>
                    </button>
                }
            </header>
            @if (!loading()) {
                <main class="max-h-[65vh] w-lg overflow-auto">
                    <table class="min-w-lg">
                        <thead class="border-base-200 border-b">
                            <tr>
                                <td class="w-12 py-1" (click)="toggleRoom('*')">
                                    <mat-checkbox
                                        class="pointer-events-none"
                                        [checked]="
                                            rooms()?.length ===
                                            selected().length
                                        "
                                        [indeterminate]="
                                            selected().length > 0 &&
                                            rooms()?.length !==
                                                selected().length
                                        "
                                    ></mat-checkbox>
                                </td>
                                <td></td>
                                <td class="px-8 text-right text-xs">
                                    @let rm_list = rooms();
                                    {{
                                        'APP.CONCIERGE.AVAILABLE_ROOMS_COUNT'
                                            | translate
                                                : {
                                                      count: rm_list?.length,
                                                  }
                                                : rm_list?.length
                                    }}
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            @for (space of rooms(); track space) {
                                <tr
                                    class="hover:bg-base-200"
                                    (click)="toggleRoom(space.id)"
                                >
                                    <td>
                                        <mat-checkbox
                                            class="pointer-events-none"
                                            [checked]="
                                                selected().includes(space.id)
                                            "
                                        ></mat-checkbox>
                                    </td>
                                    <td>
                                        {{ space.display_name || space.name }}
                                    </td>
                                    <td class="text-center">
                                        <div
                                            class="ml-auto w-24 rounded-full px-3 py-2 text-sm text-white"
                                            [class.bg-success]="
                                                !disabled_rooms()?.includes(
                                                    space.id
                                                )
                                            "
                                            [class.bg-error]="
                                                disabled_rooms()?.includes(
                                                    space.id
                                                )
                                            "
                                        >
                                            {{
                                                (!disabled_rooms()?.includes(
                                                    space.id
                                                )
                                                    ? 'COMMON.ENABLED'
                                                    : 'COMMON.DISABLED'
                                                ) | translate
                                            }}
                                        </div>
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </main>
                <footer
                    class="border-base-200 flex items-center justify-end space-x-2 border-t p-2"
                >
                    <button btn matRipple (click)="enableSelected()">
                        {{ 'APP.CONCIERGE.AVAILABLE_ROOMS_ENABLE' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        class="inverse"
                        (click)="disableSelected()"
                    >
                        {{
                            'APP.CONCIERGE.AVAILABLE_ROOMS_DISABLE' | translate
                        }}
                    </button>
                </footer>
            } @else {
                <main
                    class="flex h-48 w-full min-w-64 flex-col items-center justify-center space-y-2 p-16 text-center"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>
                        {{
                            'APP.CONCIERGE.AVAILABLE_ROOMS_SAVING'
                                | translate: { type: type }
                        }}
                    </p>
                </main>
            }
        </div>
    `, imports: [
      MatProgressSpinnerModule,
      MatRippleModule,
      MatCheckboxModule,
      MatDialogModule,
      TranslatePipe,
      IconComponent
    ], styles: ["/* angular:styles/component:css;44b25fd2b68917ac2104b8130dd323b9c27f1ea1ae596877dd198a37a47771fe;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/available-rooms-state-modal.component.ts */\ntd {\n  padding: 0.5rem;\n}\n/*# sourceMappingURL=available-rooms-state-modal.component.css.map */\n"] }]
  }], null, { change: [{ type: Output, args: ["change"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AvailableRoomsStateModalComponent, { className: "AvailableRoomsStateModalComponent", filePath: "libs/components/src/lib/available-rooms-state-modal.component.ts", lineNumber: 158 });
})();

export {
  AttachedResourceConfigModalComponent,
  AvailableRoomsStateModalComponent
};
//# sourceMappingURL=chunk-7L3W66SY.js.map
