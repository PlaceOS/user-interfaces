import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-BP6IE3UJ.js";
import {
  CommonModule,
  Component,
  IconComponent,
  Input,
  MatRipple,
  MatRippleModule,
  NgTemplateOutlet,
  Observable,
  Output,
  TemplateRef,
  TranslatePipe,
  computed,
  effect,
  input,
  linkedSignal,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-XDJAXGLZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/components/src/lib/simple-table.component.ts
var _c0 = (a0, a1, a2, a3, a4, a5, a6) => ({ first: a0, last: a1, index: a2, data: a3, row: a4, key: a5, name: a6 });
var _c1 = (a0, a1, a2, a3) => ({ first: a0, last: a1, index: a2, row: a3 });
var _forTrack0 = ($index, $item) => $item["id"] || $item;
var _forTrack1 = ($index, $item) => $item.key + $index;
function SimpleTableComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "mat-checkbox", 6);
    \u0275\u0275listener("change", function SimpleTableComponent_Conditional_1_Conditional_0_Template_mat_checkbox_change_1_listener($event) {
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
    \u0275\u0275property("checked", ctx_r1.selected().length === ctx_r1.data_view().length)("indeterminate", ctx_r1.selected().length > 0 && ctx_r1.selected().length < ctx_r1.data_view().length);
  }
}
function SimpleTableComponent_Conditional_1_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 9);
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
function SimpleTableComponent_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function SimpleTableComponent_Conditional_1_For_2_Template_button_click_0_listener() {
      const column_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setSort(column_r4.key));
    });
    \u0275\u0275elementStart(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, SimpleTableComponent_Conditional_1_For_2_Conditional_3_Template, 2, 1, "icon", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r4 = ctx.$implicit;
    const \u0275$index_9_r5 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("grid-column", 1 + \u0275$index_9_r5 + (ctx_r1.selectable() ? 1 : 0) + " / " + (2 + \u0275$index_9_r5 + (ctx_r1.selectable() ? 1 : 0)));
    \u0275\u0275classProp("pointer-events-none", !ctx_r1.sortable() || column_r4.sortable === false)("active", ctx_r1.sort()?.key === column_r4.key)("border-r", \u0275$index_9_r5 !== ctx_r1.active_columns().length - 1)("width", column_r4.size);
    \u0275\u0275property("id", "column-" + column_r4.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", column_r4.name || column_r4.key, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.sortable() && column_r4.sortable !== false ? 3 : -1);
  }
}
function SimpleTableComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SimpleTableComponent_Conditional_1_Conditional_0_Template, 2, 4, "div", 3);
    \u0275\u0275repeaterCreate(1, SimpleTableComponent_Conditional_1_For_2_Template, 4, 13, "button", 4, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.selectable() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.active_columns());
  }
}
function SimpleTableComponent_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275listener("mouseenter", function SimpleTableComponent_For_3_Conditional_0_Template_div_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r6);
      const \u0275$index_19_r7 = \u0275\u0275nextContext().$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.active_row.set(\u0275$index_19_r7));
    })("touchstart", function SimpleTableComponent_For_3_Conditional_0_Template_div_touchstart_0_listener() {
      \u0275\u0275restoreView(_r6);
      const \u0275$index_19_r7 = \u0275\u0275nextContext().$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.active_row.set(\u0275$index_19_r7));
    });
    \u0275\u0275elementStart(1, "mat-checkbox", 14);
    \u0275\u0275listener("change", function SimpleTableComponent_For_3_Conditional_0_Template_mat_checkbox_change_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const \u0275$index_19_r7 = \u0275\u0275nextContext().$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.select(\u0275$index_19_r7, $event.checked));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const \u0275$index_19_r7 = \u0275\u0275nextContext().$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("grid-column", "1 / 2");
    \u0275\u0275classProp("border-b", \u0275$index_19_r7 !== ctx_r1.paginated_data().length - 1);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.selected().includes(\u0275$index_19_r7));
  }
}
function SimpleTableComponent_For_3_For_2_Case_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", column_r9.empty || \u0275\u0275pipeBind1(2, 1, "COMMON.EMPTY"), " ");
  }
}
function SimpleTableComponent_For_3_For_2_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, SimpleTableComponent_For_3_For_2_Case_1_Conditional_2_Template, 3, 3, "span", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r9 = \u0275\u0275nextContext();
    const row_r11 = ctx_r9.$implicit;
    const \u0275$index_19_r7 = ctx_r9.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r11[column_r9.key] ?? (column_r9.key === "_index" ? \u0275$index_19_r7 + 1 + ctx_r1.page() * (ctx_r1.page_size() || 0) : row_r11[column_r9.key]), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((row_r11[column_r9.key] === null || row_r11[column_r9.key] === void 0 || row_r11[column_r9.key] === "") && column_r9.key !== "_index" ? 2 : -1);
  }
}
function SimpleTableComponent_For_3_For_2_Case_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SimpleTableComponent_For_3_For_2_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SimpleTableComponent_For_3_For_2_Case_2_ng_container_0_Template, 1, 0, "ng-container", 18);
  }
  if (rf & 2) {
    const column_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r9 = \u0275\u0275nextContext();
    const row_r11 = ctx_r9.$implicit;
    const \u0275$index_19_r7 = ctx_r9.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.template(column_r9))("ngTemplateOutletContext", \u0275\u0275pureFunction7(2, _c0, \u0275$index_19_r7 === 0, \u0275$index_19_r7 === ctx_r1.paginated_data().length - 1, \u0275$index_19_r7 + ctx_r1.page() * (ctx_r1.page_size() || 0), row_r11[column_r9.key], row_r11, column_r9.key, column_r9.name || column_r9.key));
  }
}
function SimpleTableComponent_For_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275listener("mouseenter", function SimpleTableComponent_For_3_For_2_Template_div_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r8);
      const \u0275$index_19_r7 = \u0275\u0275nextContext().$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.active_row.set(\u0275$index_19_r7));
    })("touchstart", function SimpleTableComponent_For_3_For_2_Template_div_touchstart_0_listener() {
      \u0275\u0275restoreView(_r8);
      const \u0275$index_19_r7 = \u0275\u0275nextContext().$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.active_row.set(\u0275$index_19_r7));
    });
    \u0275\u0275conditionalCreate(1, SimpleTableComponent_For_3_For_2_Case_1_Template, 3, 2, "div", 16)(2, SimpleTableComponent_For_3_For_2_Case_2_Template, 1, 10, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_26_0;
    const column_r9 = ctx.$implicit;
    const \u0275$index_25_r12 = ctx.$index;
    const \u0275$index_19_r7 = \u0275\u0275nextContext().$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("grid-column", 1 + \u0275$index_25_r12 + (ctx_r1.selectable() ? 1 : 0) + " / " + (2 + \u0275$index_25_r12 + (ctx_r1.selectable() ? 1 : 0)));
    \u0275\u0275classProp("border-b", \u0275$index_19_r7 !== ctx_r1.paginated_data().length - 1)("border-r", \u0275$index_25_r12 !== ctx_r1.active_columns().length - 1)("width", column_r9.size);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_26_0 = ctx_r1.columnType(column_r9)) === "template" ? 2 : 1);
  }
}
function SimpleTableComponent_For_3_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SimpleTableComponent_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, SimpleTableComponent_For_3_Conditional_3_ng_container_1_Template, 1, 0, "ng-container", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const row_r11 = ctx_r9.$implicit;
    const \u0275$index_19_r7 = ctx_r9.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("grid-column", "span " + ctx_r1.active_columns().length);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.child_template())("ngTemplateOutletContext", \u0275\u0275pureFunction4(4, _c1, \u0275$index_19_r7 === 0, \u0275$index_19_r7 === ctx_r1.paginated_data().length - 1, \u0275$index_19_r7 + ctx_r1.page() * (ctx_r1.page_size() || 0), row_r11));
  }
}
function SimpleTableComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SimpleTableComponent_For_3_Conditional_0_Template, 2, 5, "div", 10);
    \u0275\u0275repeaterCreate(1, SimpleTableComponent_For_3_For_2_Template, 3, 9, "div", 11, _forTrack1);
    \u0275\u0275conditionalCreate(3, SimpleTableComponent_For_3_Conditional_3_Template, 2, 9, "div", 12);
  }
  if (rf & 2) {
    const row_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.selectable() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.active_columns());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.show_children()[row_r11["id"]] && ctx_r1.child_template() ? 3 : -1);
  }
}
function SimpleTableComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("grid-column-start", "span " + ctx_r1.active_columns().length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.empty_message(), " ");
  }
}
function SimpleTableComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 22);
    \u0275\u0275listener("click", function SimpleTableComponent_Conditional_5_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPage(ctx_r1.page() - 1));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 22);
    \u0275\u0275listener("click", function SimpleTableComponent_Conditional_5_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPage(ctx_r1.page() + 1));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 22);
    \u0275\u0275listener("click", function SimpleTableComponent_Conditional_5_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPage(0));
    });
    \u0275\u0275elementStart(10, "icon");
    \u0275\u0275text(11, "first_page");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 22);
    \u0275\u0275listener("click", function SimpleTableComponent_Conditional_5_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPage(ctx_r1.total_pages() - 1));
    });
    \u0275\u0275elementStart(13, "icon");
    \u0275\u0275text(14, "last_page");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", ctx_r1.page() * (ctx_r1.page_size() || 9999) + 1, " \u2013 ", (ctx_r1.page() + 1) * (ctx_r1.page_size() || 9999) > ctx_r1.total_count() ? ctx_r1.total_count() : (ctx_r1.page() + 1) * (ctx_r1.page_size() || 9999), " of ", ctx_r1.total_count(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.page() === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.page() === ctx_r1.total_pages() - 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.page() === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.page() === ctx_r1.total_pages() - 1);
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
    this.selectedInput = input([], __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "selectedInput" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "selected" }));
    this.selected = linkedSignal(
      this.selectedInput,
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
    this.selectedChange = output();
    this.rowClicked = output();
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
        if (!page_size_value)
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
    this.column_template = computed(
      () => {
        const template = this.active_columns().map((_) => _.size || "auto").join(" ");
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
      this.active_columns.set(this.columns().filter((_) => _.show !== false));
    });
    effect(() => {
      const data = this.data_view();
      const page_size_value = this.page_size();
      this.selected.set([]);
      this.page.set(0);
      if (page_size_value) {
        this.total_count.set(data.length);
        this.total_pages.set(Math.ceil(data.length / page_size_value));
      }
    });
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
  select(index, state) {
    const current_selected = this.selected();
    if (state) {
      this.selected.set([...current_selected, index]);
    } else {
      this.selected.set(current_selected.filter((i) => i !== index));
    }
  }
  selectAll(state) {
    const list = this.data_view();
    this.selected.set(state ? list.map((_, i) => i) : []);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SimpleTableComponent, selectors: [["simple-table"]], inputs: { data: [1, "data"], columns: [1, "columns"], selectable: [1, "selectable"], filter: [1, "filter"], sortable: [1, "sortable"], show_header: [1, "show_header"], selectedInput: [1, "selected", "selectedInput"], page_size: [1, "page_size"], empty_message: [1, "empty_message"], child_template: [1, "child_template"], show_children: [1, "show_children"], filter_on: [1, "filter_on"] }, outputs: { selectedChange: "selectedChange", rowClicked: "rowClicked" }, decls: 6, vars: 5, consts: [["role", "table", 1, "border-base-300", "grid", "border", 3, "click", "touchend", "mouseleave"], [1, "flex", "items-center", "justify-center", "p-8", "opacity-30", 3, "gridColumnStart"], [1, "bg-base-200", "sticky", "bottom-0", "z-30", "flex", "w-full", "items-center", "justify-end", "space-x-2", "p-2"], ["id", "column-selector", 1, "border-base-200", "bg-base-300", "sticky", "top-0", "z-20", "flex", "min-h-full", "items-center", "justify-between", "border-r", "border-b", "px-2", 3, "gridColumn"], ["header", "", "matRipple", "", 1, "border-base-200", "bg-base-300", "sticky", "top-0", "z-20", "flex", "min-h-full", "items-center", "justify-between", "border-b", "p-4", 3, "id", "gridColumn", "pointer-events-none", "active", "border-r", "width"], ["id", "column-selector", 1, "border-base-200", "bg-base-300", "sticky", "top-0", "z-20", "flex", "min-h-full", "items-center", "justify-between", "border-r", "border-b", "px-2"], [3, "change", "checked", "indeterminate"], ["header", "", "matRipple", "", 1, "border-base-200", "bg-base-300", "sticky", "top-0", "z-20", "flex", "min-h-full", "items-center", "justify-between", "border-b", "p-4", 3, "click", "id"], [1, "font-medium"], [1, "text-[1.25em]"], ["id", "column-selector", 1, "border-base-200", "z-10", "flex", "min-h-full", "items-center", "justify-between", "border-r", "px-2", 3, "gridColumn", "border-b"], [1, "border-base-200", "z-10", "flex", "min-h-full", "items-center", "justify-between", 3, "gridColumn", "border-b", "border-r", "width"], ["child-node", "", 1, "border-base-200", "relative", "border-b", "last:border-t", "last:border-b-0", 3, "gridColumn"], ["id", "column-selector", 1, "border-base-200", "z-10", "flex", "min-h-full", "items-center", "justify-between", "border-r", "px-2", 3, "mouseenter", "touchstart"], [3, "change", "checked"], [1, "border-base-200", "z-10", "flex", "min-h-full", "items-center", "justify-between", 3, "mouseenter", "touchstart"], [1, "p-4"], [1, "opacity-30"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["child-node", "", 1, "border-base-200", "relative", "border-b", "last:border-t", "last:border-b-0"], [1, "flex", "items-center", "justify-center", "p-8", "opacity-30"], [1, "px-4", "py-2"], ["icon", "", "matRipple", "", 3, "click", "disabled"]], template: function SimpleTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("click", function SimpleTableComponent_Template_div_click_0_listener() {
          return ctx.active_row() >= 0 ? ctx.rowClicked.emit(ctx.active_row()) : null;
        })("touchend", function SimpleTableComponent_Template_div_touchend_0_listener() {
          return ctx.active_row.set(-1);
        })("mouseleave", function SimpleTableComponent_Template_div_mouseleave_0_listener() {
          return ctx.active_row.set(-1);
        });
        \u0275\u0275conditionalCreate(1, SimpleTableComponent_Conditional_1_Template, 3, 1);
        \u0275\u0275repeaterCreate(2, SimpleTableComponent_For_3_Template, 4, 2, null, null, _forTrack0);
        \u0275\u0275conditionalCreate(4, SimpleTableComponent_Conditional_4_Template, 2, 3, "div", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, SimpleTableComponent_Conditional_5_Template, 15, 7, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275styleProp("grid-template-columns", ctx.column_template());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_header() ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.paginated_data());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.data_view().length ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.page_size() ? 5 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgTemplateOutlet,
      MatRippleModule,
      MatRipple,
      IconComponent,
      MatCheckboxModule,
      MatCheckbox,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%], \n[_nghost-%COMP%]    > button[_ngcontent-%COMP%] {\n  min-width: 100%;\n}\n[header][_ngcontent-%COMP%]   icon[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n[header][_ngcontent-%COMP%]:hover   icon[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n[header][_ngcontent-%COMP%]:hover.pointer-events-none   icon[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n[header].active[_ngcontent-%COMP%]   icon[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=simple-table.component.css.map */"] });
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
            (click)="active_row() >= 0 ? rowClicked.emit(active_row()) : null"
            (touchend)="active_row.set(-1)"
            (mouseleave)="active_row.set(-1)"
        >
            @if (show_header()) {
                @if (selectable()) {
                    <div
                        id="column-selector"
                        class="border-base-200 bg-base-300 sticky top-0 z-20 flex min-h-full items-center justify-between border-r border-b px-2"
                        [style.gridColumn]="'1 / 2'"
                    >
                        <mat-checkbox
                            [checked]="selected().length === data_view().length"
                            [indeterminate]="
                                selected().length > 0 &&
                                selected().length < data_view().length
                            "
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
                        (click)="setSort(column.key)"
                        [class.active]="sort()?.key === column.key"
                        [class.border-r]="i !== active_columns().length - 1"
                        [class.width]="column.size"
                    >
                        <div class="font-medium">
                            {{ column.name || column.key }}
                        </div>
                        @if (sortable() && column.sortable !== false) {
                            <icon class="text-[1.25em]">
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
            }
            @for (
                row of paginated_data();
                track row['id'] || row;
                let i = $index
            ) {
                @if (selectable()) {
                    <div
                        id="column-selector"
                        class="border-base-200 z-10 flex min-h-full items-center justify-between border-r px-2"
                        [style.gridColumn]="'1 / 2'"
                        [class.border-b]="i !== paginated_data().length - 1"
                        (mouseenter)="active_row.set(i)"
                        (touchstart)="active_row.set(i)"
                    >
                        <mat-checkbox
                            [checked]="selected().includes(i)"
                            (change)="select(i, $event.checked)"
                        ></mat-checkbox>
                    </div>
                }
                @for (
                    column of active_columns();
                    track column.key + j;
                    let j = $index
                ) {
                    <div
                        class="border-base-200 z-10 flex min-h-full items-center justify-between"
                        [style.gridColumn]="
                            1 +
                            j +
                            (selectable() ? 1 : 0) +
                            ' / ' +
                            (2 + j + (selectable() ? 1 : 0))
                        "
                        [class.border-b]="i !== paginated_data().length - 1"
                        [class.border-r]="j !== active_columns().length - 1"
                        [class.width]="column.size"
                        (mouseenter)="active_row.set(i)"
                        (touchstart)="active_row.set(i)"
                    >
                        @switch (columnType(column)) {
                            @default {
                                <div class="p-4">
                                    {{
                                        row[column.key] ??
                                            (column.key === '_index'
                                                ? i +
                                                  1 +
                                                  page() * (page_size() || 0)
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
                                                    ('COMMON.EMPTY' | translate)
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
                                            first: i === 0,
                                            last:
                                                i ===
                                                paginated_data().length - 1,
                                            index:
                                                i + page() * (page_size() || 0),
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
                        [style.gridColumn]="'span ' + active_columns().length"
                        class="border-base-200 relative border-b last:border-t last:border-b-0"
                    >
                        <ng-container
                            *ngTemplateOutlet="
                                child_template();
                                context: {
                                    first: i === 0,
                                    last: i === paginated_data().length - 1,
                                    index: i + page() * (page_size() || 0),
                                    row: row,
                                }
                            "
                        ></ng-container>
                    </div>
                }
            }
            @if (!data_view().length) {
                <div
                    [style.gridColumnStart]="'span ' + active_columns().length"
                    class="flex items-center justify-center p-8 opacity-30"
                >
                    {{ empty_message() }}
                </div>
            }
        </div>
        @if (page_size()) {
            <div
                class="bg-base-200 sticky bottom-0 z-30 flex w-full items-center justify-end space-x-2 p-2"
            >
                <div class="px-4 py-2">
                    {{ page() * (page_size() || 9999) + 1 }} &ndash;
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
                    [disabled]="page() === total_pages() - 1"
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
                    [disabled]="page() === total_pages() - 1"
                    (click)="setPage(total_pages() - 1)"
                >
                    <icon>last_page</icon>
                </button>
            </div>
        }
    `, imports: [
      CommonModule,
      MatRippleModule,
      TranslatePipe,
      IconComponent,
      MatCheckboxModule
    ], styles: ["/* angular:styles/component:css;b2874b86e652c29d2d86fd3a0dd1f8304994817de1959af6f84eeb73f74021ed;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/simple-table.component.ts */\n:host,\n:host > button {\n  min-width: 100%;\n}\n[header] icon {\n  opacity: 0;\n}\n[header]:hover icon {\n  opacity: 0.3;\n}\n[header]:hover.pointer-events-none icon {\n  opacity: 0;\n}\n[header].active icon {\n  opacity: 1;\n}\n/*# sourceMappingURL=simple-table.component.css.map */\n"] }]
  }], () => [], { data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: false }] }], columns: [{ type: Input, args: [{ isSignal: true, alias: "columns", required: false }] }], selectable: [{ type: Input, args: [{ isSignal: true, alias: "selectable", required: false }] }], filter: [{ type: Input, args: [{ isSignal: true, alias: "filter", required: false }] }], sortable: [{ type: Input, args: [{ isSignal: true, alias: "sortable", required: false }] }], show_header: [{ type: Input, args: [{ isSignal: true, alias: "show_header", required: false }] }], selectedInput: [{ type: Input, args: [{ isSignal: true, alias: "selected", required: false }] }], page_size: [{ type: Input, args: [{ isSignal: true, alias: "page_size", required: false }] }], empty_message: [{ type: Input, args: [{ isSignal: true, alias: "empty_message", required: false }] }], child_template: [{ type: Input, args: [{ isSignal: true, alias: "child_template", required: false }] }], show_children: [{ type: Input, args: [{ isSignal: true, alias: "show_children", required: false }] }], filter_on: [{ type: Input, args: [{ isSignal: true, alias: "filter_on", required: false }] }], selectedChange: [{ type: Output, args: ["selectedChange"] }], rowClicked: [{ type: Output, args: ["rowClicked"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SimpleTableComponent, { className: "SimpleTableComponent", filePath: "libs/components/src/lib/simple-table.component.ts", lineNumber: 293 });
})();

export {
  SimpleTableComponent
};
//# sourceMappingURL=chunk-VGWSDC7D.js.map
