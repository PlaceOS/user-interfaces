import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-TZ5JUV4G.js";
import {
  TranslatePipe
} from "./chunk-N7R5EHVG.js";
import {
  IconComponent
} from "./chunk-J53GBIJV.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-FWV33PKU.js";
import {
  CommonModule,
  Component,
  ElementRef,
  Input,
  NgTemplateOutlet,
  Observable,
  Output,
  TemplateRef,
  ViewChild,
  ViewChildren,
  afterRenderEffect,
  computed,
  effect,
  inject,
  input,
  model,
  output,
  setClassMetadata,
  signal,
  untracked,
  viewChild,
  viewChildren,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵariaProperty,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction4,
  ɵɵpureFunction7,
  ɵɵqueryAdvance,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵviewQuerySignal
} from "./chunk-EOGESHX7.js";

// libs/components/src/lib/load-error.component.ts
var LoadErrorComponent = class _LoadErrorComponent {
  constructor() {
    this.retry = output();
  }
  static {
    this.\u0275fac = function LoadErrorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoadErrorComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoadErrorComponent, selectors: [["load-error"]], outputs: { retry: "retry" }, decls: 9, vars: 6, consts: [["role", "alert", 1, "flex", "flex-col", "items-center", "justify-center", "gap-2", "p-8", "text-center"], [1, "text-error", "text-3xl"], ["btn", "", "matRipple", "", "type", "button", 1, "inverse", 3, "click"]], template: function LoadErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "icon", 1);
        \u0275\u0275text(2, "error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "button", 2);
        \u0275\u0275listener("click", function LoadErrorComponent_Template_button_click_6_listener() {
          return ctx.retry.emit();
        });
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "COMMON.LOAD_ERROR"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, "COMMON.RETRY"), " ");
      }
    }, dependencies: [MatRippleModule, MatRipple, IconComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadErrorComponent, [{
    type: Component,
    args: [{
      selector: "load-error",
      template: `
        <div
            role="alert"
            class="flex flex-col items-center justify-center gap-2 p-8 text-center"
        >
            <icon class="text-error text-3xl">error</icon>
            <p>{{ 'COMMON.LOAD_ERROR' | translate }}</p>
            <!-- type="button": inside a form the default submits it -->
            <button
                btn
                matRipple
                type="button"
                class="inverse"
                (click)="retry.emit()"
            >
                {{ 'COMMON.RETRY' | translate }}
            </button>
        </div>
    `,
      imports: [MatRippleModule, IconComponent, TranslatePipe]
    }]
  }], null, { retry: [{ type: Output, args: ["retry"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoadErrorComponent, { className: "LoadErrorComponent", filePath: "libs/components/src/lib/load-error.component.ts", lineNumber: 35 });
})();

// libs/components/src/lib/simple-table.component.ts
var _c0 = ["table_row"];
var _c1 = ["table_header"];
var _c2 = (a0, a1, a2, a3, a4, a5, a6) => ({ first: a0, last: a1, index: a2, data: a3, row: a4, key: a5, name: a6 });
var _c3 = (a0, a1, a2, a3) => ({ first: a0, last: a1, index: a2, row: a3 });
function _forTrack0($index, $item) {
  return this.rowKey($item) || $item;
}
var _forTrack1 = ($index, $item) => $item.key + $index;
function SimpleTableComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "mat-checkbox", 12);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("change", function SimpleTableComponent_Conditional_1_Conditional_2_Template_mat_checkbox_change_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectAll($event.checked));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("grid-column", "1 / 2");
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.all_selected())("indeterminate", ctx_r1.selected().length > 0 && !ctx_r1.all_selected())("disabled", !ctx_r1.selectable_keys().length);
    \u0275\u0275ariaProperty("aria-label", \u0275\u0275pipeBind1(2, 6, "COMMON.SELECT_ALL"));
  }
}
function SimpleTableComponent_Conditional_1_For_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.sort()?.key === column_r4.key && ctx_r1.sort()?.reverse ? "arrow_downward" : "arrow_upward", " ");
  }
}
function SimpleTableComponent_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function SimpleTableComponent_Conditional_1_For_4_Template_button_click_0_listener() {
      const column_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setSort(column_r4.key));
    });
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, SimpleTableComponent_Conditional_1_For_4_Conditional_3_Template, 2, 1, "icon", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r4 = ctx.$implicit;
    const \u0275$index_12_r5 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("grid-column", 1 + \u0275$index_12_r5 + (ctx_r1.selectable() ? 1 : 0) + " / " + (2 + \u0275$index_12_r5 + (ctx_r1.selectable() ? 1 : 0)));
    \u0275\u0275classProp("pointer-events-none", !ctx_r1.sortable() || column_r4.sortable === false)("active", ctx_r1.sort()?.key === column_r4.key)("border-r", \u0275$index_12_r5 !== ctx_r1.active_columns().length - 1)("width", column_r4.size);
    \u0275\u0275property("id", "column-" + column_r4.key);
    \u0275\u0275attribute("tabindex", !ctx_r1.sortable() || column_r4.sortable === false ? -1 : null)("aria-sort", !ctx_r1.sortable() || column_r4.sortable === false ? null : ctx_r1.sort()?.key !== column_r4.key ? "none" : ctx_r1.sort()?.reverse ? "descending" : "ascending");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", column_r4.name || column_r4.key, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.sortable() && column_r4.sortable !== false ? 3 : -1);
  }
}
function SimpleTableComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3, 0);
    \u0275\u0275conditionalCreate(2, SimpleTableComponent_Conditional_1_Conditional_2_Template, 3, 8, "div", 9);
    \u0275\u0275repeaterCreate(3, SimpleTableComponent_Conditional_1_For_4_Template, 4, 15, "button", 10, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.selectable() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.active_columns());
  }
}
function SimpleTableComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r1.row_offsets()[ctx_r1.virtual_range().start], "px");
  }
}
function SimpleTableComponent_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275listener("mouseenter", function SimpleTableComponent_For_4_Conditional_2_Template_div_mouseenter_1_listener() {
      \u0275\u0275restoreView(_r6);
      const \u0275$index_25_r7 = \u0275\u0275nextContext().$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.active_row.set(\u0275$index_25_r7 + (ctx_r1.virtual_scroll() ? ctx_r1.row_offset() : 0)));
    })("touchstart", function SimpleTableComponent_For_4_Conditional_2_Template_div_touchstart_1_listener() {
      \u0275\u0275restoreView(_r6);
      const \u0275$index_25_r7 = \u0275\u0275nextContext().$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.active_row.set(\u0275$index_25_r7 + (ctx_r1.virtual_scroll() ? ctx_r1.row_offset() : 0)));
    })("click", function SimpleTableComponent_For_4_Conditional_2_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "mat-checkbox", 21);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("change", function SimpleTableComponent_For_4_Conditional_2_Template_mat_checkbox_change_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const key_r8 = \u0275\u0275readContextLet(0);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.select(key_r8, $event.checked));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r8 = \u0275\u0275nextContext();
    const row_r10 = ctx_r8.$implicit;
    const \u0275$index_25_r7 = ctx_r8.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    const key_r11 = \u0275\u0275storeLet(ctx_r1.rowKey(row_r10));
    \u0275\u0275advance();
    \u0275\u0275styleProp("grid-column", "1 / 2");
    \u0275\u0275classProp("border-b", ctx_r1.virtual_scroll() ? ctx_r1.row_offset() + \u0275$index_25_r7 !== ctx_r1.data_view().length - 1 : \u0275$index_25_r7 !== ctx_r1.rendered_data().length - 1);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.selected().includes(key_r11))("disabled", !ctx_r1.can_select()(row_r10));
    \u0275\u0275ariaProperty("aria-label", \u0275\u0275pipeBind1(3, 8, "COMMON.SELECT_ROW"));
  }
}
function SimpleTableComponent_For_4_For_4_Case_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r13 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", column_r13.empty || \u0275\u0275pipeBind1(2, 1, "COMMON.EMPTY"), " ");
  }
}
function SimpleTableComponent_For_4_For_4_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, SimpleTableComponent_For_4_For_4_Case_1_Conditional_2_Template, 3, 3, "span", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r8 = \u0275\u0275nextContext();
    const row_r10 = ctx_r8.$implicit;
    const \u0275$index_25_r7 = ctx_r8.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r10[column_r13.key] ?? (column_r13.key === "_index" ? \u0275$index_25_r7 + 1 + ctx_r1.row_offset() : row_r10[column_r13.key]), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((row_r10[column_r13.key] === null || row_r10[column_r13.key] === void 0 || row_r10[column_r13.key] === "") && column_r13.key !== "_index" ? 2 : -1);
  }
}
function SimpleTableComponent_For_4_For_4_Case_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SimpleTableComponent_For_4_For_4_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SimpleTableComponent_For_4_For_4_Case_2_ng_container_0_Template, 1, 0, "ng-container", 25);
  }
  if (rf & 2) {
    const column_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r8 = \u0275\u0275nextContext();
    const row_r10 = ctx_r8.$implicit;
    const \u0275$index_25_r7 = ctx_r8.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.template(column_r13))("ngTemplateOutletContext", \u0275\u0275pureFunction7(2, _c2, \u0275$index_25_r7 === 0 && (!ctx_r1.virtual_scroll() || ctx_r1.row_offset() === 0), \u0275$index_25_r7 === ctx_r1.rendered_data().length - 1 && (!ctx_r1.virtual_scroll() || \u0275$index_25_r7 + ctx_r1.row_offset() === ctx_r1.data_view().length - 1), \u0275$index_25_r7 + ctx_r1.row_offset(), row_r10[column_r13.key], row_r10, column_r13.key, column_r13.name || column_r13.key));
  }
}
function SimpleTableComponent_For_4_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275listener("mouseenter", function SimpleTableComponent_For_4_For_4_Template_div_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r12);
      const \u0275$index_25_r7 = \u0275\u0275nextContext().$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.active_row.set(\u0275$index_25_r7 + (ctx_r1.virtual_scroll() ? ctx_r1.row_offset() : 0)));
    })("touchstart", function SimpleTableComponent_For_4_For_4_Template_div_touchstart_0_listener() {
      \u0275\u0275restoreView(_r12);
      const \u0275$index_25_r7 = \u0275\u0275nextContext().$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.active_row.set(\u0275$index_25_r7 + (ctx_r1.virtual_scroll() ? ctx_r1.row_offset() : 0)));
    });
    \u0275\u0275conditionalCreate(1, SimpleTableComponent_For_4_For_4_Case_1_Template, 3, 2, "div", 23)(2, SimpleTableComponent_For_4_For_4_Case_2_Template, 1, 10, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_27_0;
    const column_r13 = ctx.$implicit;
    const \u0275$index_35_r14 = ctx.$index;
    const \u0275$index_25_r7 = \u0275\u0275nextContext().$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("grid-column", 1 + \u0275$index_35_r14 + (ctx_r1.selectable() ? 1 : 0) + " / " + (2 + \u0275$index_35_r14 + (ctx_r1.selectable() ? 1 : 0)));
    \u0275\u0275classProp("border-b", ctx_r1.virtual_scroll() ? ctx_r1.row_offset() + \u0275$index_25_r7 !== ctx_r1.data_view().length - 1 : \u0275$index_25_r7 !== ctx_r1.rendered_data().length - 1)("border-r", \u0275$index_35_r14 !== ctx_r1.active_columns().length - 1)("width", column_r13.size);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_27_0 = ctx_r1.columnType(column_r13)) === "template" ? 2 : 1);
  }
}
function SimpleTableComponent_For_4_Conditional_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SimpleTableComponent_For_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, SimpleTableComponent_For_4_Conditional_5_ng_container_1_Template, 1, 0, "ng-container", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = \u0275\u0275nextContext();
    const row_r10 = ctx_r8.$implicit;
    const \u0275$index_25_r7 = ctx_r8.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("grid-column", "span " + ctx_r1.column_count());
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.child_template())("ngTemplateOutletContext", \u0275\u0275pureFunction4(4, _c3, \u0275$index_25_r7 === 0 && (!ctx_r1.virtual_scroll() || ctx_r1.row_offset() === 0), \u0275$index_25_r7 === ctx_r1.rendered_data().length - 1 && (!ctx_r1.virtual_scroll() || \u0275$index_25_r7 + ctx_r1.row_offset() === ctx_r1.data_view().length - 1), \u0275$index_25_r7 + ctx_r1.row_offset(), row_r10));
  }
}
function SimpleTableComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5, 1);
    \u0275\u0275conditionalCreate(2, SimpleTableComponent_For_4_Conditional_2_Template, 4, 10, "div", 17);
    \u0275\u0275repeaterCreate(3, SimpleTableComponent_For_4_For_4_Template, 3, 9, "div", 18, _forTrack1);
    \u0275\u0275conditionalCreate(5, SimpleTableComponent_For_4_Conditional_5_Template, 2, 9, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    const \u0275$index_25_r7 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-row-index", ctx_r1.row_offset() + \u0275$index_25_r7)("aria-rowindex", ctx_r1.row_offset() + \u0275$index_25_r7 + (ctx_r1.show_header() ? 2 : 1));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.selectable() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.active_columns());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.show_children()[row_r10["id"]] && ctx_r1.child_template() ? 5 : -1);
  }
}
function SimpleTableComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r1.row_offsets()[ctx_r1.data_view().length] - ctx_r1.row_offsets()[ctx_r1.virtual_range().end], "px");
  }
}
function SimpleTableComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "load-error", 27);
    \u0275\u0275listener("retry", function SimpleTableComponent_Conditional_6_Template_load_error_retry_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retry.emit());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("grid-column-start", "span " + ctx_r1.column_count());
  }
}
function SimpleTableComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("grid-column-start", "span " + ctx_r1.column_count());
    \u0275\u0275attribute("aria-busy", ctx_r1.loading() || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading() ? \u0275\u0275pipeBind1(2, 4, "COMMON.LOADING") : ctx_r1.empty_message(), " ");
  }
}
function SimpleTableComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 31);
    \u0275\u0275listener("click", function SimpleTableComponent_Conditional_8_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPage(ctx_r1.page() - 1));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 31);
    \u0275\u0275listener("click", function SimpleTableComponent_Conditional_8_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPage(ctx_r1.page() + 1));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 31);
    \u0275\u0275listener("click", function SimpleTableComponent_Conditional_8_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPage(0));
    });
    \u0275\u0275elementStart(10, "icon");
    \u0275\u0275text(11, "first_page");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 31);
    \u0275\u0275listener("click", function SimpleTableComponent_Conditional_8_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPage(ctx_r1.total_pages() - 1));
    });
    \u0275\u0275elementStart(13, "icon");
    \u0275\u0275text(14, "last_page");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", ctx_r1.min_width() ? "100cqw" : null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", ctx_r1.total_count() ? ctx_r1.page() * (ctx_r1.page_size() || 9999) + 1 : 0, " \u2013 ", (ctx_r1.page() + 1) * (ctx_r1.page_size() || 9999) > ctx_r1.total_count() ? ctx_r1.total_count() : (ctx_r1.page() + 1) * (ctx_r1.page_size() || 9999), " of ", ctx_r1.total_count(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.page() === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.page() >= ctx_r1.total_pages() - 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.page() === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.page() >= ctx_r1.total_pages() - 1);
  }
}
var SimpleTableComponent = class _SimpleTableComponent {
  constructor() {
    this.data = input(
      void 0,
      ...ngDevMode ? [{ debugName: "data" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.columns = input(
      [],
      ...ngDevMode ? [{ debugName: "columns" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selectable = input(
      false,
      ...ngDevMode ? [{ debugName: "selectable" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.row_key = input(
      (row) => row?.["id"],
      ...ngDevMode ? [{ debugName: "row_key" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_select = input(
      () => true,
      ...ngDevMode ? [{ debugName: "can_select" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filter = input(
      "",
      ...ngDevMode ? [{ debugName: "filter" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.sortable = input(
      false,
      ...ngDevMode ? [{ debugName: "sortable" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_header = input(
      true,
      ...ngDevMode ? [{ debugName: "show_header" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected = model(
      [],
      ...ngDevMode ? [{ debugName: "selected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.page_size = input(
      0,
      ...ngDevMode ? [{ debugName: "page_size" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.virtual_scroll = input(
      false,
      ...ngDevMode ? [{ debugName: "virtual_scroll" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.min_width = input(
      "",
      ...ngDevMode ? [{ debugName: "min_width" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.empty_message = input(
      "No data to list",
      ...ngDevMode ? [{ debugName: "empty_message" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.child_template = input(
      null,
      ...ngDevMode ? [{ debugName: "child_template" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_children = input(
      {},
      ...ngDevMode ? [{ debugName: "show_children" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filter_on = input(
      [],
      ...ngDevMode ? [{ debugName: "filter_on" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.error = input(
      false,
      ...ngDevMode ? [{ debugName: "error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = input(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.rowClicked = output();
    this.retry = output();
    this.page = signal(
      0,
      ...ngDevMode ? [{ debugName: "page" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.total_count = signal(
      0,
      ...ngDevMode ? [{ debugName: "total_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.total_pages = signal(
      0,
      ...ngDevMode ? [{ debugName: "total_pages" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_row = signal(
      -1,
      ...ngDevMode ? [{ debugName: "active_row" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_columns = signal(
      [],
      ...ngDevMode ? [{ debugName: "active_columns" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.sort = signal(
      null,
      ...ngDevMode ? [{ debugName: "sort" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._data_signal = signal(
      [],
      ...ngDevMode ? [{ debugName: "_data_signal" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._data_subscription = null;
    this._last_row_keys = "";
    this._last_page_size = 0;
    this._element = inject(ElementRef);
    this._rows = viewChildren(
      "table_row",
      ...ngDevMode ? [{ debugName: "_rows" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._header = viewChild(
      "table_header",
      ...ngDevMode ? [{ debugName: "_header" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._scroll_top = signal(
      0,
      ...ngDevMode ? [{ debugName: "_scroll_top" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._viewport_height = signal(
      600,
      ...ngDevMode ? [{ debugName: "_viewport_height" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._row_heights = signal(
      /* @__PURE__ */ new Map(),
      ...ngDevMode ? [{ debugName: "_row_heights" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._viewport_width = 0;
    this._pending_scroll_top = null;
    this._scroll_anchor = null;
    this._at_end = false;
    this._last_filter = "";
    this._last_sort = null;
    this.data_view = computed(
      () => {
        let data = [...this._data_signal()];
        const filter_str = this.filter()?.toLowerCase();
        const current_sort = this.sort();
        if (filter_str) {
          data = data.filter((v) => {
            const filter_on = this.filter_on();
            const keys = filter_on.length ? filter_on : Object.keys(v);
            return keys.some((key) => {
              const value = v[key];
              const cmp_str = `${JSON.stringify(value)}`.toLowerCase();
              return cmp_str.includes(filter_str);
            });
          });
        }
        if (current_sort && data.length) {
          const type = typeof data[0][current_sort.key];
          const default_fn = type === "number" ? (a, b) => a - b : (a, b) => {
            const a_value = JSON.stringify(a);
            const b_value = JSON.stringify(b);
            return a_value?.localeCompare(b_value);
          };
          data = data.sort((a, b) => {
            const sort_fn = this.column(current_sort.key)?.sort_fn || default_fn;
            const result = sort_fn(a[current_sort.key], b[current_sort.key]);
            return current_sort.reverse ? -result : result;
          });
        }
        return data;
      },
      ...ngDevMode ? [{ debugName: "data_view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.paginated_data = computed(
      () => {
        const data = this.data_view();
        const page_size_value = this.page_size();
        if (!page_size_value || this.virtual_scroll())
          return data;
        const start = this.page() * page_size_value;
        const end = (this.page() + 1) * page_size_value;
        return data.slice(start, end);
      },
      ...ngDevMode ? [{ debugName: "paginated_data" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.row_offsets = computed(
      () => {
        const heights = this._row_heights();
        const offsets = [0];
        for (const row of this.data_view()) {
          offsets.push(offsets[offsets.length - 1] + (heights.get(this.rowKey(row) ?? row) ?? 64));
        }
        return offsets;
      },
      ...ngDevMode ? [{ debugName: "row_offsets" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.virtual_range = computed(
      () => {
        const offsets = this.row_offsets();
        const height = this._viewport_height();
        const top = this._scroll_top();
        return {
          start: this._rowAtOffset(offsets, Math.max(0, top - height)),
          end: Math.min(this.data_view().length, this._rowAtOffset(offsets, top + height * 2) + 1)
        };
      },
      ...ngDevMode ? [{ debugName: "virtual_range" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.row_offset = computed(
      () => this.virtual_scroll() ? this.virtual_range().start : this.page() * this.page_size(),
      ...ngDevMode ? [{ debugName: "row_offset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.rendered_data = computed(
      () => this.virtual_scroll() ? this.data_view().slice(this.virtual_range().start, this.virtual_range().end) : this.paginated_data(),
      ...ngDevMode ? [{ debugName: "rendered_data" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selectable_keys = computed(
      () => {
        const can_select = this.can_select();
        return this.data_view().filter((row) => can_select(row)).map((row) => this.rowKey(row));
      },
      ...ngDevMode ? [{ debugName: "selectable_keys" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.all_selected = computed(
      () => {
        const keys = this.selectable_keys();
        const selected = this.selected();
        return keys.length > 0 && keys.every((_) => selected.includes(_));
      },
      ...ngDevMode ? [{ debugName: "all_selected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.column_template = computed(
      () => {
        const template = this.active_columns().map((_) => _.size || (this.virtual_scroll() ? "minmax(0, 1fr)" : "auto")).join(" ");
        return this.selectable() ? `3.5rem ${template}` : template;
      },
      ...ngDevMode ? [{ debugName: "column_template" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.column_count = computed(
      () => {
        return this.active_columns().length + (this.selectable() ? 1 : 0);
      },
      ...ngDevMode ? [{ debugName: "column_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    afterRenderEffect((onCleanup) => {
      if (!this.virtual_scroll())
        return;
      const rows = this._rows();
      const header = this._header();
      this.data_view();
      this._row_heights();
      if (this._pending_scroll_top !== null) {
        this._element.nativeElement.scrollTop = this._pending_scroll_top;
        this._pending_scroll_top = null;
      }
      untracked(() => this._measureRows());
      if (typeof ResizeObserver === "undefined")
        return;
      const observer = new ResizeObserver(() => this._measureRows());
      observer.observe(this._element.nativeElement);
      if (header)
        observer.observe(header.nativeElement);
      for (const row of rows)
        observer.observe(row.nativeElement);
      onCleanup(() => observer.disconnect());
    });
    effect((onCleanup) => {
      const data = this.data();
      if (this._data_subscription) {
        this._data_subscription.unsubscribe();
        this._data_subscription = null;
      }
      if (data instanceof Observable) {
        this._data_subscription = data.subscribe((value) => {
          this._data_signal.set(value || []);
        });
        onCleanup(() => {
          this._data_subscription?.unsubscribe();
          this._data_subscription = null;
        });
      } else {
        this._data_signal.set(data || []);
      }
    });
    effect(() => {
      const keys = new Set(this._data_signal().map((row) => this.rowKey(row)));
      const selected = untracked(this.selected);
      const kept = selected.filter((_) => keys.has(_));
      if (kept.length !== selected.length)
        this.selected.set(kept);
    });
    effect(() => {
      this.active_columns.set(this.columns().filter((_) => _.show !== false));
    });
    effect(() => {
      const data = this.data_view();
      const page_size_value = this.page_size();
      const row_keys = data.map((row) => this.rowKey(row));
      const same_rows = page_size_value === this._last_page_size && row_keys.every((key) => key != null) && row_keys.join("\0") === this._last_row_keys;
      this._last_row_keys = row_keys.join("\0");
      this._last_page_size = page_size_value;
      const filter = this.filter();
      const sort = this.sort();
      const reset_virtual = filter !== this._last_filter || sort !== this._last_sort;
      this._last_filter = filter;
      this._last_sort = sort;
      if (!same_rows)
        this.page.set(0);
      if (this.virtual_scroll() && (reset_virtual || !same_rows)) {
        const anchor = this._scroll_anchor;
        const anchor_index = !reset_virtual && anchor ? data.findIndex((row) => (this.rowKey(row) ?? row) === anchor.key) : -1;
        const top = anchor_index >= 0 ? untracked(this.row_offsets)[anchor_index] + anchor.offset : 0;
        if (anchor_index < 0)
          this._scroll_anchor = null;
        this._pending_scroll_top = top;
        this._at_end = false;
        this._scroll_top.set(top);
        this.active_row.set(-1);
      }
      if (this.virtual_scroll()) {
        const keys = new Set(data.map((row) => this.rowKey(row) ?? row));
        const heights = untracked(this._row_heights);
        if ([...heights.keys()].some((key) => !keys.has(key))) {
          this._row_heights.set(new Map([...heights].filter(([key]) => keys.has(key))));
        }
      }
      if (page_size_value) {
        this.total_count.set(data.length);
        this.total_pages.set(Math.ceil(data.length / page_size_value));
      }
    });
  }
  readViewport(from_scroll = false) {
    if (!this.virtual_scroll())
      return;
    const element = this._element.nativeElement;
    if (from_scroll) {
      this._at_end = element.scrollTop > 0 && element.scrollHeight > element.clientHeight && element.scrollTop >= element.scrollHeight - element.clientHeight - 2;
    }
    const header_height = this._header()?.nativeElement.getBoundingClientRect().height || 0;
    this._viewport_height.set(Math.max(1, element.clientHeight - header_height));
    this._scroll_top.set(element.scrollTop);
    this.active_row.set(-1);
    if (this._pending_scroll_top === null) {
      const offsets = this.row_offsets();
      const index = this._rowAtOffset(offsets, element.scrollTop);
      const row = this.data_view()[index];
      this._scroll_anchor = row ? {
        key: this.rowKey(row) ?? row,
        offset: element.scrollTop - offsets[index]
      } : null;
    }
  }
  /** Find a row in logarithmic time, including large scrollbar jumps. */
  _rowAtOffset(offsets, offset) {
    let low = 0;
    let high = Math.max(0, offsets.length - 2);
    while (low < high) {
      const middle = Math.ceil((low + high) / 2);
      if (offsets[middle] <= offset)
        low = middle;
      else
        high = middle - 1;
    }
    return low;
  }
  /** Measure complete rows, including wrapped text and expanded children. */
  _measureRows() {
    const element = this._element.nativeElement;
    if (!element.clientHeight || !element.clientWidth || this._pending_scroll_top !== null)
      return;
    const offsets = this.row_offsets();
    const anchor = this._rowAtOffset(offsets, element.scrollTop);
    const anchor_offset = element.scrollTop - offsets[anchor];
    const resized = element.clientWidth !== this._viewport_width;
    this._viewport_width = element.clientWidth;
    const previous = this._row_heights();
    const heights = resized ? /* @__PURE__ */ new Map() : new Map(previous);
    const data = this.data_view();
    let changed = resized;
    for (const row of this._rows()) {
      const index = Number(row.nativeElement.dataset.rowIndex);
      const height = row.nativeElement.getBoundingClientRect().height;
      if (!data[index] || !height)
        continue;
      const key = this.rowKey(data[index]) ?? data[index];
      if (Math.abs((heights.get(key) ?? 64) - height) < 0.5)
        continue;
      heights.set(key, height);
      changed = true;
    }
    if (changed) {
      this._row_heights.set(heights);
      this._pending_scroll_top = this._at_end ? Number.MAX_SAFE_INTEGER : this.row_offsets()[anchor] + anchor_offset;
    }
    this.readViewport();
  }
  template(column) {
    return column.content;
  }
  html(column) {
    return column.content;
  }
  column(key) {
    return this.active_columns().find((_) => _.key === key);
  }
  columnType(column) {
    return column.content instanceof TemplateRef ? "template" : "raw";
  }
  gridSquare(row, column) {
    return `${row} / ${column} / ${row + 1} / ${column + 1}`;
  }
  rowKey(row) {
    return this.row_key()(row);
  }
  select(key, state) {
    const current = this.selected().filter((_) => _ !== key);
    this.selected.set(state ? [...current, key] : current);
  }
  selectAll(state) {
    if (!state)
      return this.selected.set([]);
    const current = this.selected();
    const added = this.selectable_keys().filter((_) => !current.includes(_));
    this.selected.set([...current, ...added]);
  }
  setSort(key) {
    const current_sort = this.sort();
    if (!current_sort || current_sort.key !== key) {
      this.sort.set({ key, reverse: false });
    } else if (!current_sort.reverse) {
      this.sort.set({ key, reverse: true });
    } else {
      this.sort.set(null);
    }
  }
  setPage(page_value) {
    this.page.set(page_value);
  }
  static {
    this.\u0275fac = function SimpleTableComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SimpleTableComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SimpleTableComponent, selectors: [["simple-table"]], viewQuery: function SimpleTableComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._rows, _c0, 5)(ctx._header, _c1, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    }, hostVars: 4, hostBindings: function SimpleTableComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("scroll", function SimpleTableComponent_scroll_HostBindingHandler() {
          return ctx.readViewport(true);
        });
      }
      if (rf & 2) {
        \u0275\u0275styleProp("min-width", ctx.virtual_scroll() ? null : ctx.min_width() || null);
        \u0275\u0275classProp("virtual-scroll", ctx.virtual_scroll());
      }
    }, inputs: { data: [1, "data"], columns: [1, "columns"], selectable: [1, "selectable"], row_key: [1, "row_key"], can_select: [1, "can_select"], filter: [1, "filter"], sortable: [1, "sortable"], show_header: [1, "show_header"], selected: [1, "selected"], page_size: [1, "page_size"], virtual_scroll: [1, "virtual_scroll"], min_width: [1, "min_width"], empty_message: [1, "empty_message"], child_template: [1, "child_template"], show_children: [1, "show_children"], filter_on: [1, "filter_on"], error: [1, "error"], loading: [1, "loading"] }, outputs: { selected: "selectedChange", rowClicked: "rowClicked", retry: "retry" }, decls: 9, vars: 10, consts: [["table_header", ""], ["table_row", ""], ["role", "table", 1, "border-base-300", "grid", "border", 3, "click", "touchend", "mouseleave"], ["table-header", "", "role", "row"], ["aria-hidden", "true", 1, "col-span-full", 3, "height"], ["table-row", "", "role", "row"], [3, "gridColumnStart"], [1, "flex", "items-center", "justify-center", "p-8", "opacity-30", 3, "gridColumnStart"], [1, "bg-base-200", "sticky", "bottom-0", "left-0", "z-30", "flex", "w-full", "max-w-full", "items-center", "justify-end", "space-x-2", "p-2", 3, "width"], ["id", "column-selector", 1, "border-base-200", "bg-base-300", "sticky", "top-0", "z-20", "flex", "min-h-full", "items-center", "justify-between", "border-r", "border-b", "px-2", 3, "gridColumn"], ["header", "", "role", "columnheader", "matRipple", "", 1, "border-base-200", "bg-base-300", "sticky", "top-0", "z-20", "flex", "min-h-full", "items-center", "justify-between", "border-b", "p-4", 3, "id", "gridColumn", "pointer-events-none", "active", "border-r", "width"], ["id", "column-selector", 1, "border-base-200", "bg-base-300", "sticky", "top-0", "z-20", "flex", "min-h-full", "items-center", "justify-between", "border-r", "border-b", "px-2"], [3, "change", "checked", "indeterminate", "disabled", "aria-label"], ["header", "", "role", "columnheader", "matRipple", "", 1, "border-base-200", "bg-base-300", "sticky", "top-0", "z-20", "flex", "min-h-full", "items-center", "justify-between", "border-b", "p-4", 3, "click", "id"], [1, "font-medium"], ["aria-hidden", "true", 1, "text-[1.25em]"], ["aria-hidden", "true", 1, "col-span-full"], ["id", "column-selector", 1, "border-base-200", "z-10", "flex", "min-h-full", "items-center", "justify-between", "border-r", "px-2", 3, "gridColumn", "border-b"], ["role", "cell", 1, "border-base-200", "z-10", "flex", "min-h-full", "items-center", "justify-between", 3, "gridColumn", "border-b", "border-r", "width"], ["child-node", "", 1, "border-base-200", "relative", "border-b", "last:border-t", "last:border-b-0", 3, "gridColumn"], ["id", "column-selector", 1, "border-base-200", "z-10", "flex", "min-h-full", "items-center", "justify-between", "border-r", "px-2", 3, "mouseenter", "touchstart", "click"], [3, "change", "checked", "disabled", "aria-label"], ["role", "cell", 1, "border-base-200", "z-10", "flex", "min-h-full", "items-center", "justify-between", 3, "mouseenter", "touchstart"], [1, "p-4"], [1, "opacity-30"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["child-node", "", 1, "border-base-200", "relative", "border-b", "last:border-t", "last:border-b-0"], [3, "retry"], [1, "flex", "items-center", "justify-center", "p-8", "opacity-30"], [1, "bg-base-200", "sticky", "bottom-0", "left-0", "z-30", "flex", "w-full", "max-w-full", "items-center", "justify-end", "space-x-2", "p-2"], [1, "px-4", "py-2"], ["icon", "", "matRipple", "", 3, "click", "disabled"]], template: function SimpleTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275listener("click", function SimpleTableComponent_Template_div_click_0_listener() {
          return ctx.active_row() >= 0 ? ctx.rowClicked.emit(ctx.active_row()) : null;
        })("touchend", function SimpleTableComponent_Template_div_touchend_0_listener() {
          return ctx.active_row.set(-1);
        })("mouseleave", function SimpleTableComponent_Template_div_mouseleave_0_listener() {
          return ctx.active_row.set(-1);
        });
        \u0275\u0275conditionalCreate(1, SimpleTableComponent_Conditional_1_Template, 5, 1, "div", 3);
        \u0275\u0275conditionalCreate(2, SimpleTableComponent_Conditional_2_Template, 1, 2, "div", 4);
        \u0275\u0275repeaterCreate(3, SimpleTableComponent_For_4_Template, 6, 4, "div", 5, _forTrack0, true);
        \u0275\u0275conditionalCreate(5, SimpleTableComponent_Conditional_5_Template, 1, 2, "div", 4);
        \u0275\u0275conditionalCreate(6, SimpleTableComponent_Conditional_6_Template, 1, 2, "load-error", 6)(7, SimpleTableComponent_Conditional_7_Template, 3, 6, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(8, SimpleTableComponent_Conditional_8_Template, 15, 9, "div", 8);
      }
      if (rf & 2) {
        \u0275\u0275styleProp("grid-template-columns", ctx.column_template())("min-width", ctx.min_width() || null);
        \u0275\u0275attribute("aria-rowcount", ctx.data_view().length + (ctx.show_header() ? 1 : 0));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_header() ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.virtual_scroll() ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.rendered_data());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.virtual_scroll() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.error() ? 6 : !ctx.data_view().length ? 7 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.page_size() && !ctx.virtual_scroll() ? 8 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgTemplateOutlet,
      MatRippleModule,
      MatRipple,
      IconComponent,
      MatCheckboxModule,
      MatCheckbox,
      LoadErrorComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%], \n[_nghost-%COMP%]    > button[_ngcontent-%COMP%] {\n  min-width: 100%;\n}\n[table-header][_ngcontent-%COMP%], \n[table-row][_ngcontent-%COMP%] {\n  display: contents;\n}\n.virtual-scroll[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  min-height: 0;\n  overflow: auto;\n  overflow-anchor: none;\n}\n.virtual-scroll[_nghost-%COMP%]   [table-header][_ngcontent-%COMP%], \n.virtual-scroll[_nghost-%COMP%]   [table-row][_ngcontent-%COMP%] {\n  display: grid;\n  grid-column: 1 / -1;\n  grid-template-columns: subgrid;\n}\n.virtual-scroll[_nghost-%COMP%]   [table-header][_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 20;\n}\n.virtual-scroll[_nghost-%COMP%]   [role=cell][_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow-wrap: anywhere;\n}\n.virtual-scroll[_nghost-%COMP%]   [role=cell][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  min-width: 0;\n  max-width: 100%;\n}\n[header][_ngcontent-%COMP%]   icon[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n[header][_ngcontent-%COMP%]:hover   icon[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n[header][_ngcontent-%COMP%]:hover.pointer-events-none   icon[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n[header].active[_ngcontent-%COMP%]   icon[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=simple-table.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SimpleTableComponent, [{
    type: Component,
    args: [{ selector: "simple-table", template: `
        <div
            role="table"
            class="border-base-300 grid border"
            [style.gridTemplateColumns]="column_template()"
            [style.minWidth]="min_width() || null"
            [attr.aria-rowcount]="data_view().length + (show_header() ? 1 : 0)"
            (click)="active_row() >= 0 ? rowClicked.emit(active_row()) : null"
            (touchend)="active_row.set(-1)"
            (mouseleave)="active_row.set(-1)"
        >
            @if (show_header()) {
                <div #table_header table-header role="row">
                    @if (selectable()) {
                        <div
                            id="column-selector"
                            class="border-base-200 bg-base-300 sticky top-0 z-20 flex min-h-full items-center justify-between border-r border-b px-2"
                            [style.gridColumn]="'1 / 2'"
                        >
                            <mat-checkbox
                                [checked]="all_selected()"
                                [indeterminate]="
                                    selected().length > 0 && !all_selected()
                                "
                                [disabled]="!selectable_keys().length"
                                [aria-label]="'COMMON.SELECT_ALL' | translate"
                                (change)="selectAll($event.checked)"
                            ></mat-checkbox>
                        </div>
                    }
                    @for (
                        column of active_columns();
                        track column.key + i;
                        let i = $index
                    ) {
                        <button
                            header
                            role="columnheader"
                            matRipple
                            [id]="'column-' + column.key"
                            class="border-base-200 bg-base-300 sticky top-0 z-20 flex min-h-full items-center justify-between border-b p-4"
                            [style.gridColumn]="
                                1 +
                                i +
                                (selectable() ? 1 : 0) +
                                ' / ' +
                                (2 + i + (selectable() ? 1 : 0))
                            "
                            [class.pointer-events-none]="
                                !sortable() || column.sortable === false
                            "
                            [attr.tabindex]="
                                !sortable() || column.sortable === false
                                    ? -1
                                    : null
                            "
                            [attr.aria-sort]="
                                !sortable() || column.sortable === false
                                    ? null
                                    : sort()?.key !== column.key
                                      ? 'none'
                                      : sort()?.reverse
                                        ? 'descending'
                                        : 'ascending'
                            "
                            (click)="setSort(column.key)"
                            [class.active]="sort()?.key === column.key"
                            [class.border-r]="i !== active_columns().length - 1"
                            [class.width]="column.size"
                        >
                            <div class="font-medium">
                                {{ column.name || column.key }}
                            </div>
                            @if (sortable() && column.sortable !== false) {
                                <icon class="text-[1.25em]" aria-hidden="true">
                                    {{
                                        sort()?.key === column.key &&
                                        sort()?.reverse
                                            ? 'arrow_downward'
                                            : 'arrow_upward'
                                    }}
                                </icon>
                            }
                        </button>
                    }
                </div>
            }
            @if (virtual_scroll()) {
                <div
                    aria-hidden="true"
                    class="col-span-full"
                    [style.height.px]="row_offsets()[virtual_range().start]"
                ></div>
            }
            @for (
                row of rendered_data();
                track rowKey(row) || row;
                let i = $index
            ) {
                <div
                    #table_row
                    table-row
                    role="row"
                    [attr.data-row-index]="row_offset() + i"
                    [attr.aria-rowindex]="
                        row_offset() + i + (show_header() ? 2 : 1)
                    "
                >
                    @if (selectable()) {
                        @let key = rowKey(row);
                        <div
                            id="column-selector"
                            class="border-base-200 z-10 flex min-h-full items-center justify-between border-r px-2"
                            [style.gridColumn]="'1 / 2'"
                            [class.border-b]="
                                virtual_scroll()
                                    ? row_offset() + i !==
                                      data_view().length - 1
                                    : i !== rendered_data().length - 1
                            "
                            (mouseenter)="
                                active_row.set(
                                    i + (virtual_scroll() ? row_offset() : 0)
                                )
                            "
                            (touchstart)="
                                active_row.set(
                                    i + (virtual_scroll() ? row_offset() : 0)
                                )
                            "
                            (click)="$event.stopPropagation()"
                        >
                            <mat-checkbox
                                [checked]="selected().includes(key)"
                                [disabled]="!can_select()(row)"
                                [aria-label]="'COMMON.SELECT_ROW' | translate"
                                (change)="select(key, $event.checked)"
                            ></mat-checkbox>
                        </div>
                    }
                    @for (
                        column of active_columns();
                        track column.key + j;
                        let j = $index
                    ) {
                        <div
                            role="cell"
                            class="border-base-200 z-10 flex min-h-full items-center justify-between"
                            [style.gridColumn]="
                                1 +
                                j +
                                (selectable() ? 1 : 0) +
                                ' / ' +
                                (2 + j + (selectable() ? 1 : 0))
                            "
                            [class.border-b]="
                                virtual_scroll()
                                    ? row_offset() + i !==
                                      data_view().length - 1
                                    : i !== rendered_data().length - 1
                            "
                            [class.border-r]="j !== active_columns().length - 1"
                            [class.width]="column.size"
                            (mouseenter)="
                                active_row.set(
                                    i + (virtual_scroll() ? row_offset() : 0)
                                )
                            "
                            (touchstart)="
                                active_row.set(
                                    i + (virtual_scroll() ? row_offset() : 0)
                                )
                            "
                        >
                            @switch (columnType(column)) {
                                @default {
                                    <div class="p-4">
                                        {{
                                            row[column.key] ??
                                                (column.key === '_index'
                                                    ? i + 1 + row_offset()
                                                    : row[column.key])
                                        }}
                                        @if (
                                            (row[column.key] === null ||
                                                row[column.key] === undefined ||
                                                row[column.key] === '') &&
                                            column.key !== '_index'
                                        ) {
                                            <span class="opacity-30">
                                                {{
                                                    column.empty ||
                                                        ('COMMON.EMPTY'
                                                            | translate)
                                                }}
                                            </span>
                                        }
                                    </div>
                                }
                                @case ('template') {
                                    <ng-container
                                        *ngTemplateOutlet="
                                            template(column);
                                            context: {
                                                first:
                                                    i === 0 &&
                                                    (!virtual_scroll() ||
                                                        row_offset() === 0),
                                                last:
                                                    i ===
                                                        rendered_data().length -
                                                            1 &&
                                                    (!virtual_scroll() ||
                                                        i + row_offset() ===
                                                            data_view().length -
                                                                1),
                                                index: i + row_offset(),
                                                data: row[column.key],
                                                row: row,
                                                key: column.key,
                                                name: column.name || column.key,
                                            }
                                        "
                                    ></ng-container>
                                }
                            }
                        </div>
                    }
                    @if (show_children()[row['id']] && child_template()) {
                        <div
                            child-node
                            [style.gridColumn]="'span ' + column_count()"
                            class="border-base-200 relative border-b last:border-t last:border-b-0"
                        >
                            <ng-container
                                *ngTemplateOutlet="
                                    child_template();
                                    context: {
                                        first:
                                            i === 0 &&
                                            (!virtual_scroll() ||
                                                row_offset() === 0),
                                        last:
                                            i === rendered_data().length - 1 &&
                                            (!virtual_scroll() ||
                                                i + row_offset() ===
                                                    data_view().length - 1),
                                        index: i + row_offset(),
                                        row: row,
                                    }
                                "
                            ></ng-container>
                        </div>
                    }
                </div>
            }
            @if (virtual_scroll()) {
                <div
                    aria-hidden="true"
                    class="col-span-full"
                    [style.height.px]="
                        row_offsets()[data_view().length] -
                        row_offsets()[virtual_range().end]
                    "
                ></div>
            }
            @if (error()) {
                <load-error
                    [style.gridColumnStart]="'span ' + column_count()"
                    (retry)="retry.emit()"
                />
            } @else if (!data_view().length) {
                <div
                    [style.gridColumnStart]="'span ' + column_count()"
                    class="flex items-center justify-center p-8 opacity-30"
                    [attr.aria-busy]="loading() || null"
                >
                    {{
                        loading()
                            ? ('COMMON.LOADING' | translate)
                            : empty_message()
                    }}
                </div>
            }
        </div>
        @if (page_size() && !virtual_scroll()) {
            <div
                class="bg-base-200 sticky bottom-0 left-0 z-30 flex w-full max-w-full items-center justify-end space-x-2 p-2"
                [style.width]="min_width() ? '100cqw' : null"
            >
                <div class="px-4 py-2">
                    {{ total_count() ? page() * (page_size() || 9999) + 1 : 0 }}
                    &ndash;
                    {{
                        (page() + 1) * (page_size() || 9999) > total_count()
                            ? total_count()
                            : (page() + 1) * (page_size() || 9999)
                    }}
                    of {{ total_count() }}
                </div>
                <button
                    icon
                    matRipple
                    [disabled]="page() === 0"
                    (click)="setPage(page() - 1)"
                >
                    <icon>chevron_left</icon>
                </button>
                <button
                    icon
                    matRipple
                    [disabled]="page() >= total_pages() - 1"
                    (click)="setPage(page() + 1)"
                >
                    <icon>chevron_right</icon>
                </button>
                <button
                    icon
                    matRipple
                    [disabled]="page() === 0"
                    (click)="setPage(0)"
                >
                    <icon>first_page</icon>
                </button>
                <button
                    icon
                    matRipple
                    [disabled]="page() >= total_pages() - 1"
                    (click)="setPage(total_pages() - 1)"
                >
                    <icon>last_page</icon>
                </button>
            </div>
        }
    `, host: {
      "[style.min-width]": "virtual_scroll() ? null : min_width() || null",
      "[class.virtual-scroll]": "virtual_scroll()",
      "(scroll)": "readViewport(true)"
    }, imports: [
      CommonModule,
      MatRippleModule,
      TranslatePipe,
      IconComponent,
      MatCheckboxModule,
      LoadErrorComponent
    ], styles: ["/* angular:styles/component:css;eb2798484f33241314fbd6847b69f33c6f57ec1e9b88f9ccfe63804016b5ad42;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/simple-table.component.ts */\n:host,\n:host > button {\n  min-width: 100%;\n}\n[table-header],\n[table-row] {\n  display: contents;\n}\n:host.virtual-scroll {\n  display: block;\n  height: 100%;\n  min-height: 0;\n  overflow: auto;\n  overflow-anchor: none;\n}\n:host.virtual-scroll [table-header],\n:host.virtual-scroll [table-row] {\n  display: grid;\n  grid-column: 1 / -1;\n  grid-template-columns: subgrid;\n}\n:host.virtual-scroll [table-header] {\n  position: sticky;\n  top: 0;\n  z-index: 20;\n}\n:host.virtual-scroll [role=cell] {\n  min-width: 0;\n  overflow-wrap: anywhere;\n}\n:host.virtual-scroll [role=cell] > * {\n  min-width: 0;\n  max-width: 100%;\n}\n[header] icon {\n  opacity: 0;\n}\n[header]:hover icon {\n  opacity: 0.3;\n}\n[header]:hover.pointer-events-none icon {\n  opacity: 0;\n}\n[header].active icon {\n  opacity: 1;\n}\n/*# sourceMappingURL=simple-table.component.css.map */\n"] }]
  }], () => [], { data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: false }] }], columns: [{ type: Input, args: [{ isSignal: true, alias: "columns", required: false }] }], selectable: [{ type: Input, args: [{ isSignal: true, alias: "selectable", required: false }] }], row_key: [{ type: Input, args: [{ isSignal: true, alias: "row_key", required: false }] }], can_select: [{ type: Input, args: [{ isSignal: true, alias: "can_select", required: false }] }], filter: [{ type: Input, args: [{ isSignal: true, alias: "filter", required: false }] }], sortable: [{ type: Input, args: [{ isSignal: true, alias: "sortable", required: false }] }], show_header: [{ type: Input, args: [{ isSignal: true, alias: "show_header", required: false }] }], selected: [{ type: Input, args: [{ isSignal: true, alias: "selected", required: false }] }, { type: Output, args: ["selectedChange"] }], page_size: [{ type: Input, args: [{ isSignal: true, alias: "page_size", required: false }] }], virtual_scroll: [{ type: Input, args: [{ isSignal: true, alias: "virtual_scroll", required: false }] }], min_width: [{ type: Input, args: [{ isSignal: true, alias: "min_width", required: false }] }], empty_message: [{ type: Input, args: [{ isSignal: true, alias: "empty_message", required: false }] }], child_template: [{ type: Input, args: [{ isSignal: true, alias: "child_template", required: false }] }], show_children: [{ type: Input, args: [{ isSignal: true, alias: "show_children", required: false }] }], filter_on: [{ type: Input, args: [{ isSignal: true, alias: "filter_on", required: false }] }], error: [{ type: Input, args: [{ isSignal: true, alias: "error", required: false }] }], loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }], rowClicked: [{ type: Output, args: ["rowClicked"] }], retry: [{ type: Output, args: ["retry"] }], _rows: [{ type: ViewChildren, args: ["table_row", { isSignal: true }] }], _header: [{ type: ViewChild, args: ["table_header", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SimpleTableComponent, { className: "SimpleTableComponent", filePath: "libs/components/src/lib/simple-table.component.ts", lineNumber: 445 });
})();

export {
  LoadErrorComponent,
  SimpleTableComponent
};
//# debugId=be0f2f8d-40ed-5cc0-91c2-e9fc4154ea95
//# sourceMappingURL=chunk-IA6BOKAS.js.map
