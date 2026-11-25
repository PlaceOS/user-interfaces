import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-6MEXNI7P.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-2RA5HYGT.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-4EWUBQI4.js";
import {
  groupHierarchy
} from "./chunk-FQA43RSI.js";
import "./chunk-EZBJJTUH.js";
import "./chunk-ODGOXJUO.js";
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogTitle
} from "./chunk-4MZUVPXU.js";
import "./chunk-NXFWFAR7.js";
import {
  TranslatePipe
} from "./chunk-7ZOQJII7.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-WG7PJTZZ.js";
import "./chunk-ENFA7HCT.js";
import "./chunk-KUKVGL5W.js";
import {
  IconComponent
} from "./chunk-BQWZIAG6.js";
import "./chunk-75N2YLLS.js";
import "./chunk-TYLQ2T3C.js";
import "./chunk-7NEE74GJ.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-AVEVXYGF.js";
import "./chunk-7H4OKNBG.js";
import {
  Component,
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
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-Y6KAMZVN.js";
import "./chunk-QQY67O5D.js";

// apps/signage-manager/src/app/shared/group-select-modal.component.ts
var _forTrack0 = ($index, $item) => $item.item.group.id;
var _forTrack1 = ($index, $item) => $item.id;
function GroupSelectModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "mat-checkbox", 12);
    \u0275\u0275listener("change", function GroupSelectModalComponent_Conditional_8_Template_mat_checkbox_change_1_listener($event) {
      const child_content_r3 = \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView(child_content_r3.setIncluded($event.checked));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx.included());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "SIGNAGE_MANAGER.INCLUDE_CHILD_DATA"), " ");
  }
}
function GroupSelectModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nav", 5);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon", 13);
    \u0275\u0275text(3, "public");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.ACTIVE_GROUP_HIERARCHY"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "SIGNAGE_MANAGER.ALL_GROUPS"));
  }
}
function GroupSelectModalComponent_Conditional_10_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "icon", 18);
    \u0275\u0275text(3, " chevron_right ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("mat-dialog-close", group_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r4.name, " ");
  }
}
function GroupSelectModalComponent_Conditional_10_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r4.name, " ");
  }
}
function GroupSelectModalComponent_Conditional_10_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, GroupSelectModalComponent_Conditional_10_For_5_Conditional_0_Template, 4, 2)(1, GroupSelectModalComponent_Conditional_10_For_5_Conditional_1_Template, 2, 1, "span", 16);
  }
  if (rf & 2) {
    const \u0275$index_39_r5 = ctx.$index;
    const \u0275$count_39_r6 = ctx.$count;
    \u0275\u0275conditional(!(\u0275$index_39_r5 === \u0275$count_39_r6 - 1) ? 0 : 1);
  }
}
function GroupSelectModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nav", 6);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon", 15);
    \u0275\u0275text(3, " account_tree ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, GroupSelectModalComponent_Conditional_10_For_5_Template, 2, 1, null, null, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "SIGNAGE_MANAGER.ACTIVE_GROUP_HIERARCHY"));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r6.selected_hierarchy());
  }
}
function GroupSelectModalComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 19)(1, "icon", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21)(4, "div", 22);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-secondary", !ctx_r6.data.selected_group_id)("text-secondary-content", !ctx_r6.data.selected_group_id);
    \u0275\u0275property("mat-dialog-close", "");
    \u0275\u0275attribute("aria-current", !ctx_r6.data.selected_group_id ? "true" : null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", !ctx_r6.data.selected_group_id ? "check_circle" : "public", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 8, "SIGNAGE_MANAGER.ALL_GROUPS"), " ");
  }
}
function GroupSelectModalComponent_For_18_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275nextContext();
    const searching_r9 = \u0275\u0275readContextLet(16);
    \u0275\u0275classProp("sr-only", !searching_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r8.path.join(" \u203A "), " ");
  }
}
function GroupSelectModalComponent_For_18_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const item_r10 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r10.group.description, " ");
  }
}
function GroupSelectModalComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "button", 23)(2, "icon", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 21);
    \u0275\u0275conditionalCreate(5, GroupSelectModalComponent_For_18_Conditional_5_Template, 2, 3, "div", 24);
    \u0275\u0275elementStart(6, "div", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, GroupSelectModalComponent_For_18_Conditional_8_Template, 2, 1, "div", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    const ctx_r6 = \u0275\u0275nextContext();
    const searching_r9 = \u0275\u0275readContextLet(16);
    const item_r11 = \u0275\u0275storeLet(row_r8.item);
    \u0275\u0275advance();
    \u0275\u0275styleProp("padding-inline-start", searching_r9 ? 0.5 : 0.5 + ctx_r6.indent(row_r8) * 1.5, "rem");
    \u0275\u0275classProp("bg-secondary", ctx_r6.data.selected_group_id === item_r11.group.id)("text-secondary-content", ctx_r6.data.selected_group_id === item_r11.group.id);
    \u0275\u0275property("mat-dialog-close", item_r11.group.id);
    \u0275\u0275attribute("aria-current", ctx_r6.data.selected_group_id === item_r11.group.id ? "true" : null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r6.data.selected_group_id === item_r11.group.id ? "check_circle" : row_r8.path.length && !searching_r9 ? "subdirectory_arrow_right" : "group", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(row_r8.path.length ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r11.group.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r11.group.description ? 8 : -1);
  }
}
function GroupSelectModalComponent_ForEmpty_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "icon", 26);
    \u0275\u0275text(2, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_GROUPS_AVAILABLE"), " ");
  }
}
var GroupSelectModalComponent = class _GroupSelectModalComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
    this.search = signal(
      "",
      ...ngDevMode ? [{ debugName: "search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._rows = computed(
      () => groupTreeRows(this.data.groups),
      ...ngDevMode ? [{ debugName: "_rows" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_groups = computed(
      () => {
        const term = this.search().toLowerCase().trim();
        if (!term)
          return this._rows();
        return this._rows().filter(({ item }) => `${item.group.name} ${item.group.description || ""}`.toLowerCase().includes(term));
      },
      ...ngDevMode ? [{ debugName: "filtered_groups" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_hierarchy = computed(
      () => {
        const groups = this.data.groups.map((item) => item.group);
        const selected = this.data.selected_group_id ? groups.find((group) => group.id === this.data.selected_group_id) : void 0;
        return groupHierarchy(selected, groups);
      },
      ...ngDevMode ? [{ debugName: "selected_hierarchy" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  /** Indent steps of a row. Deep trees stop at a maximum, so rows keep
   * room for the name. */
  indent(row) {
    return Math.min(row.path.length, MAX_INDENT);
  }
  static {
    this.\u0275fac = function GroupSelectModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GroupSelectModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupSelectModalComponent, selectors: [["group-select-modal"]], decls: 20, vars: 17, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], ["mat-dialog-title", "", 1, "px-2", "text-xl", "font-medium"], ["icon", "", "type", "button", "matRipple", "", 3, "mat-dialog-close"], [1, "h-[65vh]", "max-w-lg", "min-w-lg", "space-y-2", "overflow-auto", "px-4", "pt-2", "pb-4", "text-center", "max-md:h-auto", "max-md:max-w-none", "max-md:min-w-0", "max-md:flex-1"], [1, "text-left"], [1, "border-base-300", "bg-base-200/60", "flex", "w-full", "items-center", "gap-2", "rounded-lg", "border", "px-3", "py-2", "text-left", "text-sm"], [1, "border-base-300", "bg-base-200/60", "flex", "w-full", "items-center", "gap-1", "overflow-x-auto", "rounded-lg", "border", "px-3", "py-2", "text-left", "text-sm"], ["appearance", "outline", 1, "no-subscript", "bg-base-100", "sticky", "top-0", "z-10", "w-full"], ["matInput", "", "cdkFocusInitial", "", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "button", "matRipple", "", 1, "border-base-300", "hover:bg-base-200", "z-0", "flex", "h-16", "w-full", "items-center", "space-x-2", "rounded-sm", "border", "p-2", "text-left", 3, "bg-secondary", "text-secondary-content", "mat-dialog-close"], ["type", "button", "matRipple", "", 1, "border-base-300", "hover:bg-base-200", "z-0", "flex", "min-h-16", "w-full", "items-center", "space-x-2", "rounded-sm", "border", "p-2", "text-left", 3, "padding-inline-start", "bg-secondary", "text-secondary-content", "mat-dialog-close"], [1, "bg-base-200", "flex", "h-[calc(100%-3.5rem)]", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-lg", "p-16"], [3, "change", "checked"], [1, "text-base-content/60", "text-xl"], [1, "font-medium"], [1, "text-base-content/60", "mr-1", "text-xl"], ["aria-current", "page", 1, "bg-primary/15", "text-primary", "shrink-0", "rounded", "px-2", "py-1", "font-medium"], ["type", "button", 1, "hover:bg-base-300", "shrink-0", "rounded", "px-2", "py-1", 3, "mat-dialog-close"], [1, "text-base-content/40", "text-lg"], ["type", "button", "matRipple", "", 1, "border-base-300", "hover:bg-base-200", "z-0", "flex", "h-16", "w-full", "items-center", "space-x-2", "rounded-sm", "border", "p-2", "text-left", 3, "mat-dialog-close"], [1, "shrink-0", "text-2xl"], [1, "min-w-0", "flex-1"], [1, "truncate"], ["type", "button", "matRipple", "", 1, "border-base-300", "hover:bg-base-200", "z-0", "flex", "min-h-16", "w-full", "items-center", "space-x-2", "rounded-sm", "border", "p-2", "text-left", 3, "mat-dialog-close"], [1, "text-base-content/70", "truncate", "text-xs", 3, "sr-only"], [1, "text-base-content/70", "truncate", "text-xs"], [1, "text-base-content/70", "text-8xl"], [1, "text-base-content/70"]], template: function GroupSelectModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 2);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementStart(5, "icon");
        \u0275\u0275text(6, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 3);
        \u0275\u0275conditionalCreate(8, GroupSelectModalComponent_Conditional_8_Template, 4, 4, "div", 4);
        \u0275\u0275conditionalCreate(9, GroupSelectModalComponent_Conditional_9_Template, 7, 6, "nav", 5)(10, GroupSelectModalComponent_Conditional_10_Template, 6, 3, "nav", 6);
        \u0275\u0275elementStart(11, "mat-form-field", 7)(12, "input", 8);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function GroupSelectModalComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(15, GroupSelectModalComponent_Conditional_15_Template, 7, 10, "button", 9);
        \u0275\u0275declareLet(16);
        \u0275\u0275repeaterCreate(17, GroupSelectModalComponent_For_18_Template, 9, 13, "button", 10, _forTrack0, false, GroupSelectModalComponent_ForEmpty_19_Template, 6, 3, "div", 11);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_3_0;
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.data.title, " ");
        \u0275\u0275advance();
        \u0275\u0275property("mat-dialog-close", void 0);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 10, "SIGNAGE_MANAGER.CLOSE_GROUP_SELECT"));
        \u0275\u0275advance(5);
        \u0275\u0275conditional((tmp_3_0 = ctx.data.child_content) ? 8 : -1, tmp_3_0);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.data.selected_group_id && ctx.data.show_all_groups ? 9 : ctx.selected_hierarchy().length ? 10 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(13, 12, "SIGNAGE_MANAGER.SEARCH_GROUPS"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(14, 14, "SIGNAGE_MANAGER.SEARCH_GROUPS"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.data.show_all_groups && !ctx.search() ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275storeLet(!!ctx.search().trim());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.filtered_groups());
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatCheckboxModule,
      MatCheckbox,
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      MatDialogTitle,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      IconComponent,
      TranslatePipe
    ], styles: ["\nh2[mat-dialog-title][_ngcontent-%COMP%] {\n  color: inherit;\n  font-family: inherit;\n  letter-spacing: inherit;\n  margin: 0;\n  padding: 0;\n}\nh2[mat-dialog-title][_ngcontent-%COMP%]::before {\n  display: none;\n}\n/*# sourceMappingURL=group-select-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupSelectModalComponent, [{
    type: Component,
    args: [{ selector: "group-select-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 mat-dialog-title class="px-2 text-xl font-medium">
                {{ data.title }}
            </h2>
            <button
                icon
                type="button"
                matRipple
                [mat-dialog-close]="undefined"
                [attr.aria-label]="
                    'SIGNAGE_MANAGER.CLOSE_GROUP_SELECT' | translate
                "
            >
                <icon>close</icon>
            </button>
        </header>
        <div
            class="h-[65vh] max-w-lg min-w-lg space-y-2 overflow-auto px-4 pt-2 pb-4 text-center max-md:h-auto max-md:max-w-none max-md:min-w-0 max-md:flex-1"
        >
            @if (data.child_content; as child_content) {
                <div class="text-left">
                    <mat-checkbox
                        [checked]="child_content.included()"
                        (change)="child_content.setIncluded($event.checked)"
                    >
                        {{ 'SIGNAGE_MANAGER.INCLUDE_CHILD_DATA' | translate }}
                    </mat-checkbox>
                </div>
            }
            @if (!data.selected_group_id && data.show_all_groups) {
                <nav
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.ACTIVE_GROUP_HIERARCHY' | translate
                    "
                    class="border-base-300 bg-base-200/60 flex w-full items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm"
                >
                    <icon class="text-base-content/60 text-xl">public</icon>
                    <span class="font-medium">{{
                        'SIGNAGE_MANAGER.ALL_GROUPS' | translate
                    }}</span>
                </nav>
            } @else if (selected_hierarchy().length) {
                <nav
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.ACTIVE_GROUP_HIERARCHY' | translate
                    "
                    class="border-base-300 bg-base-200/60 flex w-full items-center gap-1 overflow-x-auto rounded-lg border px-3 py-2 text-left text-sm"
                >
                    <icon class="text-base-content/60 mr-1 text-xl">
                        account_tree
                    </icon>
                    @for (
                        group of selected_hierarchy();
                        track group.id;
                        let last = $last
                    ) {
                        @if (!last) {
                            <button
                                type="button"
                                class="hover:bg-base-300 shrink-0 rounded px-2 py-1"
                                [mat-dialog-close]="group.id"
                            >
                                {{ group.name }}
                            </button>
                            <icon class="text-base-content/40 text-lg">
                                chevron_right
                            </icon>
                        } @else {
                            <span
                                class="bg-primary/15 text-primary shrink-0 rounded px-2 py-1 font-medium"
                                aria-current="page"
                            >
                                {{ group.name }}
                            </span>
                        }
                    }
                </nav>
            }
            <mat-form-field
                appearance="outline"
                class="no-subscript bg-base-100 sticky top-0 z-10 w-full"
            >
                <input
                    matInput
                    cdkFocusInitial
                    [(ngModel)]="search"
                    [placeholder]="'SIGNAGE_MANAGER.SEARCH_GROUPS' | translate"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.SEARCH_GROUPS' | translate
                    "
                />
            </mat-form-field>
            @if (data.show_all_groups && !search()) {
                <button
                    type="button"
                    matRipple
                    class="border-base-300 hover:bg-base-200 z-0 flex h-16 w-full items-center space-x-2 rounded-sm border p-2 text-left"
                    [class.bg-secondary]="!data.selected_group_id"
                    [class.text-secondary-content]="!data.selected_group_id"
                    [mat-dialog-close]="''"
                    [attr.aria-current]="
                        !data.selected_group_id ? 'true' : null
                    "
                >
                    <icon class="shrink-0 text-2xl">
                        {{
                            !data.selected_group_id ? 'check_circle' : 'public'
                        }}
                    </icon>
                    <div class="min-w-0 flex-1">
                        <div class="truncate">
                            {{ 'SIGNAGE_MANAGER.ALL_GROUPS' | translate }}
                        </div>
                    </div>
                </button>
            }
            @let searching = !!search().trim();
            @for (row of filtered_groups(); track row.item.group.id) {
                @let item = row.item;
                <button
                    type="button"
                    matRipple
                    class="border-base-300 hover:bg-base-200 z-0 flex min-h-16 w-full items-center space-x-2 rounded-sm border p-2 text-left"
                    [style.padding-inline-start.rem]="
                        searching ? 0.5 : 0.5 + indent(row) * 1.5
                    "
                    [class.bg-secondary]="
                        data.selected_group_id === item.group.id
                    "
                    [class.text-secondary-content]="
                        data.selected_group_id === item.group.id
                    "
                    [mat-dialog-close]="item.group.id"
                    [attr.aria-current]="
                        data.selected_group_id === item.group.id ? 'true' : null
                    "
                >
                    <icon class="shrink-0 text-2xl">
                        {{
                            data.selected_group_id === item.group.id
                                ? 'check_circle'
                                : row.path.length && !searching
                                  ? 'subdirectory_arrow_right'
                                  : 'group'
                        }}
                    </icon>
                    <div class="min-w-0 flex-1">
                        <!-- Screen readers get the path, as the indent is visual only -->
                        @if (row.path.length) {
                            <div
                                class="text-base-content/70 truncate text-xs"
                                [class.sr-only]="!searching"
                            >
                                {{ row.path.join(' \u203A ') }}
                            </div>
                        }
                        <div class="truncate">{{ item.group.name }}</div>
                        @if (item.group.description) {
                            <div class="text-base-content/70 truncate text-xs">
                                {{ item.group.description }}
                            </div>
                        }
                    </div>
                </button>
            } @empty {
                <div
                    class="bg-base-200 flex h-[calc(100%-3.5rem)] w-full flex-col items-center justify-center space-y-4 rounded-lg p-16"
                >
                    <icon class="text-base-content/70 text-8xl">group</icon>
                    <div class="text-base-content/70">
                        {{ 'SIGNAGE_MANAGER.NO_GROUPS_AVAILABLE' | translate }}
                    </div>
                </div>
            }
        </div>
    `, imports: [
      FormsModule,
      MatCheckboxModule,
      MatRippleModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      IconComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;667dd6e87a0f8ee70b196ba72e30636efb97b1c4a6897353c2c25bfa7854dc6c;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/shared/group-select-modal.component.ts */\nh2[mat-dialog-title] {\n  color: inherit;\n  font-family: inherit;\n  letter-spacing: inherit;\n  margin: 0;\n  padding: 0;\n}\nh2[mat-dialog-title]::before {\n  display: none;\n}\n/*# sourceMappingURL=group-select-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupSelectModalComponent, { className: "GroupSelectModalComponent", filePath: "apps/signage-manager/src/app/shared/group-select-modal.component.ts", lineNumber: 227 });
})();
var MAX_INDENT = 6;
function groupTreeRows(items) {
  const ids = new Set(items.map(({ group }) => group.id));
  const children = /* @__PURE__ */ new Map();
  for (const item of items) {
    const parent_id = item.group.parent_id;
    if (!parent_id || !ids.has(parent_id))
      continue;
    const siblings = children.get(parent_id) || [];
    siblings.push(item);
    children.set(parent_id, siblings);
  }
  const rows = [];
  const seen = /* @__PURE__ */ new Set();
  const visit = (item, path) => {
    if (seen.has(item.group.id))
      return;
    seen.add(item.group.id);
    rows.push({ item, path });
    const child_path = [...path, item.group.name];
    for (const child of children.get(item.group.id) || []) {
      visit(child, child_path);
    }
  };
  for (const item of items) {
    const parent_id = item.group.parent_id;
    if (!parent_id || !ids.has(parent_id))
      visit(item, []);
  }
  for (const item of items)
    visit(item, []);
  return rows;
}
export {
  GroupSelectModalComponent,
  groupTreeRows
};
//# debugId=17db6782-9224-5063-9ab4-2ffbe9a500bc
//# sourceMappingURL=group-select-modal.component-FNRORURQ.js.map
