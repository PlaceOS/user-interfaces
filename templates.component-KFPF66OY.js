import {
  CdkDrag,
  CdkDragHandle,
  CdkDropList,
  moveItemInArray
} from "./chunk-THYHMR5R.js";
import {
  GroupBreadcrumbsComponent,
  NavFooterComponent,
  NavSidebarComponent
} from "./chunk-MASWKTYU.js";
import {
  AuthenticatedImageDirective,
  Component,
  DefaultValueAccessor,
  FormsModule,
  IconComponent,
  Input,
  IntersectDirective,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatOption,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatSuffix,
  MatTooltip,
  MatTooltipModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor,
  Router,
  RouterLink,
  SchemaFormComponent,
  SignageService,
  TranslatePipe,
  ViewChild,
  ViewChildren,
  afterRenderEffect,
  computed,
  effect,
  forwardRef,
  gh,
  inject,
  input,
  pluginSchema,
  schemaDefaults,
  setClassMetadata,
  signal,
  viewChild,
  viewChildren,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-N2IPHBKM.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/templates/template-header.component.ts
var _c0 = (a0) => ({ count: a0 });
function TemplateHeaderComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function TemplateHeaderComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addTemplate());
    });
    \u0275\u0275elementStart(2, "icon", 8);
    \u0275\u0275text(3, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.CREATE_NEW_TEMPLATE"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "SIGNAGE_MANAGER.NEW_TEMPLATE"));
  }
}
var TemplateHeaderComponent = class _TemplateHeaderComponent {
  constructor() {
    this._service = inject(SignageService);
    this.total_count = computed(
      () => this._service.templates().length,
      ...ngDevMode ? [{ debugName: "total_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_create = this._service.can_create;
  }
  addTemplate() {
    this._service.addTemplate();
  }
  static {
    this.\u0275fac = function TemplateHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TemplateHeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TemplateHeaderComponent, selectors: [["template-header"]], decls: 12, vars: 10, consts: [[1, "bg-base-100", "border-base-300", "sticky", "top-0", "flex", "flex-wrap", "items-center", "gap-2", "border-b", "px-4", "py-2", "shadow", "sm:flex-nowrap"], [1, "py-2"], [1, "text-2xl", "font-medium"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "text-sm", "opacity-60"], [1, "w-px", "flex-1"], ["btn", "", "type", "button", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "shrink-0", "rounded-lg", "px-4"], ["btn", "", "type", "button", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "shrink-0", "rounded-lg", "px-4", 3, "click"], [1, "mr-2", "text-2xl"]], template: function TemplateHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3)(6, "div", 4);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "group-breadcrumbs");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(10, "div", 5);
        \u0275\u0275conditionalCreate(11, TemplateHeaderComponent_Conditional_11_Template, 7, 6, "button", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "SIGNAGE_MANAGER.TEMPLATES_PAGE_TITLE"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 5, "COMMON.ITEM_COUNT", \u0275\u0275pureFunction1(8, _c0, ctx.total_count())), " ");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.can_create() ? 11 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      IconComponent,
      GroupBreadcrumbsComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplateHeaderComponent, [{
    type: Component,
    args: [{
      selector: "template-header",
      template: `
        <div
            class="bg-base-100 border-base-300 sticky top-0 flex flex-wrap items-center gap-2 border-b px-4 py-2 shadow sm:flex-nowrap"
        >
            <div class="py-2">
                <h3 class="text-2xl font-medium">
                    {{ 'SIGNAGE_MANAGER.TEMPLATES_PAGE_TITLE' | translate }}
                </h3>
                <div class="flex flex-wrap items-center gap-2">
                    <div class="text-sm opacity-60">
                        {{
                            'COMMON.ITEM_COUNT'
                                | translate: { count: total_count() }
                        }}
                    </div>
                    <group-breadcrumbs />
                </div>
            </div>
            <div class="w-px flex-1"></div>
            @if (can_create()) {
                <button
                    btn
                    type="button"
                    matRipple
                    class="bg-secondary text-secondary-content h-12 shrink-0 rounded-lg px-4"
                    (click)="addTemplate()"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.CREATE_NEW_TEMPLATE' | translate
                    "
                >
                    <icon class="mr-2 text-2xl">add</icon>
                    <div>{{ 'SIGNAGE_MANAGER.NEW_TEMPLATE' | translate }}</div>
                </button>
            }
        </div>
    `,
      imports: [
        MatRippleModule,
        IconComponent,
        TranslatePipe,
        GroupBreadcrumbsComponent
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TemplateHeaderComponent, { className: "TemplateHeaderComponent", filePath: "apps/signage-manager/src/app/templates/template-header.component.ts", lineNumber: 52 });
})();

// apps/signage-manager/src/app/templates/template-layout.util.ts
var EDGE_BAR_HEIGHT_PC = 15;
var SIDEBAR_WIDTH_PC = 20;
var FLOATING_DEFAULT_X_PC = 50;
var FLOATING_DEFAULT_Y_PC = 50;
var LAYOUT_POSITIONS = [
  "top",
  "bottom",
  "left",
  "right",
  "floating"
];
var POSITION_ICONS = {
  top: "align_vertical_top",
  bottom: "align_vertical_bottom",
  left: "align_horizontal_left",
  right: "align_horizontal_right",
  floating: "picture_in_picture"
};
var POSITION_LABELS = {
  top: "SIGNAGE_MANAGER.TEMPLATE_POSITION_TOP",
  bottom: "SIGNAGE_MANAGER.TEMPLATE_POSITION_BOTTOM",
  left: "SIGNAGE_MANAGER.TEMPLATE_POSITION_LEFT",
  right: "SIGNAGE_MANAGER.TEMPLATE_POSITION_RIGHT",
  floating: "SIGNAGE_MANAGER.TEMPLATE_POSITION_FLOATING"
};
function layoutPositionIcon(position) {
  return POSITION_ICONS[position] || "crop_free";
}
function layoutPositionLabel(position) {
  return POSITION_LABELS[position] || position;
}
var clamp = (value, min, max) => Math.min(Math.max(value, min), Math.max(min, max));
function computeTemplateLayoutRects(layouts) {
  const rem = { left: 0, top: 0, width: 100, height: 100 };
  return layouts.map((layout) => {
    switch (layout.position) {
      case "top": {
        const height = Math.min(clamp(layout.y_pos ?? EDGE_BAR_HEIGHT_PC, 0, 100), rem.height);
        const rect = __spreadProps(__spreadValues({}, rem), { height });
        rem.top += height;
        rem.height -= height;
        return rect;
      }
      case "bottom": {
        const height = Math.min(clamp(layout.y_pos ?? EDGE_BAR_HEIGHT_PC, 0, 100), rem.height);
        const rect = __spreadProps(__spreadValues({}, rem), {
          top: rem.top + rem.height - height,
          height
        });
        rem.height -= height;
        return rect;
      }
      case "left": {
        const width = Math.min(clamp(layout.x_pos ?? SIDEBAR_WIDTH_PC, 0, 100), rem.width);
        const rect = __spreadProps(__spreadValues({}, rem), { width });
        rem.left += width;
        rem.width -= width;
        return rect;
      }
      case "right": {
        const width = Math.min(clamp(layout.x_pos ?? SIDEBAR_WIDTH_PC, 0, 100), rem.width);
        const rect = __spreadProps(__spreadValues({}, rem), {
          left: rem.left + rem.width - width,
          width
        });
        rem.width -= width;
        return rect;
      }
      case "floating":
      default: {
        const left = clamp(layout.x_pos ?? FLOATING_DEFAULT_X_PC, 0, 100);
        const top = clamp(layout.y_pos ?? FLOATING_DEFAULT_Y_PC, 0, 100);
        return { left, top, width: 100 - left, height: 100 - top };
      }
    }
  });
}

// apps/signage-manager/src/app/templates/template-layout-list.component.ts
var _c02 = () => ({});
var _c1 = () => ({ standalone: true });
var _forTrack0 = ($index, $item) => $item.id;
function TemplateLayoutListComponent_Conditional_5_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function TemplateLayoutListComponent_Conditional_5_For_9_Template_button_click_0_listener() {
      const position_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addLayout(position_r2));
    });
    \u0275\u0275elementStart(1, "div", 12)(2, "icon", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const position_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.positionIcon(position_r2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, ctx_r2.positionLabel(position_r2)));
  }
}
function TemplateLayoutListComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon", 9);
    \u0275\u0275text(3, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-menu", null, 0);
    \u0275\u0275repeaterCreate(8, TemplateLayoutListComponent_Conditional_5_For_9_Template, 7, 4, "button", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const position_menu_r4 = \u0275\u0275reference(7);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("matMenuTriggerFor", position_menu_r4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 3, "SIGNAGE_MANAGER.TEMPLATE_ADD_LAYOUT"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "SIGNAGE_MANAGER.TEMPLATE_ADD_LAYOUT"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.positions);
  }
}
function TemplateLayoutListComponent_For_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 16);
    \u0275\u0275text(1, "drag_indicator");
    \u0275\u0275elementEnd();
  }
}
function TemplateLayoutListComponent_For_8_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function TemplateLayoutListComponent_For_8_Conditional_12_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const $index_r6 = \u0275\u0275nextContext().$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeLayout($event, $index_r6));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "SIGNAGE_MANAGER.TEMPLATE_REMOVE_LAYOUT"));
  }
}
function TemplateLayoutListComponent_For_8_Conditional_13_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plugin_r9 = ctx.$implicit;
    \u0275\u0275property("value", plugin_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(plugin_r9.name);
  }
}
function TemplateLayoutListComponent_For_8_Conditional_13_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 30)(1, "input", 31);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("ngModelChange", function TemplateLayoutListComponent_For_8_Conditional_13_Conditional_13_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const $index_r6 = \u0275\u0275nextContext(2).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setAxis($index_r6, "x_pos", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(4, "span", 32);
    \u0275\u0275text(5, "%");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const layout_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 4, ctx_r2.xLabel(layout_r11.position)))("ngModel", layout_r11.x_pos ?? null)("disabled", !ctx_r2.can_update());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 6, ctx_r2.xLabel(layout_r11.position)));
    \u0275\u0275control();
  }
}
function TemplateLayoutListComponent_For_8_Conditional_13_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 30)(1, "input", 31);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("ngModelChange", function TemplateLayoutListComponent_For_8_Conditional_13_Conditional_14_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      const $index_r6 = \u0275\u0275nextContext(2).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setAxis($index_r6, "y_pos", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(4, "span", 32);
    \u0275\u0275text(5, "%");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const layout_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 4, ctx_r2.yLabel(layout_r11.position)))("ngModel", layout_r11.y_pos ?? null)("disabled", !ctx_r2.can_update());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 6, ctx_r2.yLabel(layout_r11.position)));
    \u0275\u0275control();
  }
}
function TemplateLayoutListComponent_For_8_Conditional_13_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33)(4, "schema-form", 34);
    \u0275\u0275listener("ngModelChange", function TemplateLayoutListComponent_For_8_Conditional_13_Conditional_15_Template_schema_form_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r13);
      const $index_r6 = \u0275\u0275nextContext(2).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setParams($index_r6, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const layout_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 7, "SIGNAGE_MANAGER.PLUGIN_PARAMETERS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("opacity-70", !ctx_r2.can_update());
    \u0275\u0275attribute("inert", ctx_r2.can_update() ? null : "");
    \u0275\u0275advance();
    \u0275\u0275property("schema", ctx_r2.selected_plugin_schema())("ngModel", layout_r11.plugin_params || \u0275\u0275pureFunction0(9, _c02))("ngModelOptions", \u0275\u0275pureFunction0(10, _c1));
    \u0275\u0275control();
  }
}
function TemplateLayoutListComponent_For_8_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "label", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 25)(5, "mat-select", 26);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("ngModelChange", function TemplateLayoutListComponent_For_8_Conditional_13_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const $index_r6 = \u0275\u0275nextContext().$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setPlugin($index_r6, $event));
    });
    \u0275\u0275elementStart(7, "mat-option", 27);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(10, TemplateLayoutListComponent_For_8_Conditional_13_For_11_Template, 2, 2, "mat-option", 28, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 29);
    \u0275\u0275conditionalCreate(13, TemplateLayoutListComponent_For_8_Conditional_13_Conditional_13_Template, 6, 8, "mat-form-field", 30);
    \u0275\u0275conditionalCreate(14, TemplateLayoutListComponent_For_8_Conditional_13_Conditional_14_Template, 6, 8, "mat-form-field", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, TemplateLayoutListComponent_For_8_Conditional_13_Conditional_15_Template, 5, 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r13 = \u0275\u0275nextContext();
    const layout_r11 = ctx_r13.$implicit;
    const $index_r6 = ctx_r13.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("for", "plugin-" + $index_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 10, "SIGNAGE_MANAGER.SELECT_PLUGIN"));
    \u0275\u0275advance(3);
    \u0275\u0275property("id", "plugin-" + $index_r6)("ngModel", layout_r11.plugin_id || "")("disabled", !ctx_r2.can_update());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 12, "SIGNAGE_MANAGER.SELECT_PLUGIN_ARIA"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 14, "SIGNAGE_MANAGER.TEMPLATE_NO_PLUGIN"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.plugins());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.hasXValue(layout_r11.position) ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.hasYValue(layout_r11.position) ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selected_plugin_schema() ? 15 : -1);
  }
}
function TemplateLayoutListComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275listener("click", function TemplateLayoutListComponent_For_8_Template_div_click_1_listener() {
      const $index_r6 = \u0275\u0275restoreView(_r5).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectLayout($index_r6));
    });
    \u0275\u0275conditionalCreate(2, TemplateLayoutListComponent_For_8_Conditional_2_Template, 2, 0, "icon", 16);
    \u0275\u0275elementStart(3, "icon", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "div", 19);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 20);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, TemplateLayoutListComponent_For_8_Conditional_12_Template, 4, 3, "button", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, TemplateLayoutListComponent_For_8_Conditional_13_Template, 16, 16, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const layout_r11 = ctx.$implicit;
    const $index_r6 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("border-primary", ctx_r2.selected_index() === $index_r6);
    \u0275\u0275property("cdkDragDisabled", !ctx_r2.can_update());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.can_update() ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.positionIcon(layout_r11.position));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 9, ctx_r2.positionLabel(layout_r11.position)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.pluginName(layout_r11.plugin_id) || \u0275\u0275pipeBind1(11, 11, "SIGNAGE_MANAGER.TEMPLATE_NO_PLUGIN"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.can_update() ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selected_index() === $index_r6 ? 13 : -1);
  }
}
function TemplateLayoutListComponent_ForEmpty_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "icon", 35);
    \u0275\u0275text(2, "space_dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 36);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.TEMPLATE_NO_LAYOUTS"), " ");
  }
}
function TemplateLayoutListComponent_Conditional_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function TemplateLayoutListComponent_Conditional_10_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.SAVE"), " ");
  }
}
function TemplateLayoutListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "button", 37);
    \u0275\u0275listener("click", function TemplateLayoutListComponent_Conditional_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.discard());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, TemplateLayoutListComponent_Conditional_10_Conditional_4_Template, 3, 3, "button", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "SIGNAGE_MANAGER.TEMPLATE_DISCARD"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.can_update() ? 4 : -1);
  }
}
var TemplateLayoutListComponent = class _TemplateLayoutListComponent {
  constructor() {
    this._service = inject(SignageService);
    this.positions = LAYOUT_POSITIONS;
    this.layouts = this._service.template_layout_draft;
    this.selected_index = this._service.selected_template_layout_index;
    this.dirty = this._service.template_layout_dirty;
    this.can_update = this._service.can_update;
    this.plugins = this._service.plugins;
    this.selected_plugin = computed(
      () => {
        const index = this.selected_index();
        const plugin_id = index === null ? "" : this.layouts()[index]?.plugin_id;
        return this.plugins().find((plugin) => plugin.id === plugin_id);
      },
      ...ngDevMode ? [{ debugName: "selected_plugin" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_plugin_schema = computed(
      () => pluginSchema(this.selected_plugin()?.params),
      ...ngDevMode ? [{ debugName: "selected_plugin_schema" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._schema_form = viewChild(
      SchemaFormComponent,
      ...ngDevMode ? [{ debugName: "_schema_form" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.positionIcon = layoutPositionIcon;
    this.positionLabel = layoutPositionLabel;
  }
  pluginName(plugin_id) {
    if (!plugin_id)
      return "";
    return this.plugins().find((item) => item.id === plugin_id)?.name || plugin_id;
  }
  selectLayout(index) {
    this.selected_index.set(this.selected_index() === index ? null : index);
  }
  addLayout(position) {
    this.layouts.update((layouts) => [
      ...layouts,
      { position, plugin_params: {} }
    ]);
    this.selected_index.set(this.layouts().length - 1);
  }
  removeLayout(event, index) {
    event.stopPropagation();
    this.layouts.update((layouts) => layouts.filter((_, item_index) => item_index !== index));
    this.selected_index.update((selected) => {
      if (selected === index)
        return null;
      return selected !== null && selected > index ? selected - 1 : selected;
    });
  }
  onDrop(event) {
    if (!this.can_update())
      return;
    if (event.previousIndex === event.currentIndex)
      return;
    const layouts = [...this.layouts()];
    moveItemInArray(layouts, event.previousIndex, event.currentIndex);
    const selected = this.selected_index();
    if (selected !== null) {
      const selected_item = this.layouts()[selected];
      this.selected_index.set(layouts.indexOf(selected_item));
    }
    this.layouts.set(layouts);
  }
  setPlugin(index, plugin_id) {
    const plugin = this.plugins().find((item) => item.id === plugin_id);
    const defaults = __spreadValues(__spreadValues({}, plugin?.defaults ?? {}), schemaDefaults(pluginSchema(plugin?.params)));
    this.layouts.update((layouts) => layouts.map((layout, item_index) => {
      if (item_index !== index)
        return layout;
      return __spreadProps(__spreadValues({}, layout), {
        plugin_id: plugin_id || void 0,
        plugin_params: __spreadValues(__spreadValues({}, defaults), layout.plugin_params ?? {})
      });
    }));
  }
  hasXValue(position) {
    return position === "left" || position === "right" || position === "floating";
  }
  hasYValue(position) {
    return position === "top" || position === "bottom" || position === "floating";
  }
  xLabel(position) {
    return position === "floating" ? "SIGNAGE_MANAGER.TEMPLATE_X_POS" : "SIGNAGE_MANAGER.TEMPLATE_PANEL_WIDTH";
  }
  yLabel(position) {
    return position === "floating" ? "SIGNAGE_MANAGER.TEMPLATE_Y_POS" : "SIGNAGE_MANAGER.TEMPLATE_PANEL_HEIGHT";
  }
  setAxis(index, axis, value) {
    this.layouts.update((layouts) => layouts.map((layout, item_index) => item_index === index ? __spreadProps(__spreadValues({}, layout), { [axis]: value ?? void 0 }) : layout));
  }
  setParams(index, params) {
    if (!params || typeof params !== "object" || Array.isArray(params)) {
      return;
    }
    this.layouts.update((layouts) => layouts.map((layout, item_index) => item_index === index ? __spreadProps(__spreadValues({}, layout), {
      plugin_params: params
    }) : layout));
  }
  save() {
    const schema_form = this._schema_form();
    if (schema_form && !schema_form.isValid())
      return;
    this._service.saveTemplateLayouts();
  }
  discard() {
    this._service.discardTemplateLayoutDraft();
  }
  static {
    this.\u0275fac = function TemplateLayoutListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TemplateLayoutListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TemplateLayoutListComponent, selectors: [["template-layout-list"]], viewQuery: function TemplateLayoutListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._schema_form, SchemaFormComponent, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, decls: 11, vars: 6, consts: [["position_menu", "matMenu"], [1, "bg-base-100", "border-base-300", "flex", "h-full", "w-full", "flex-col", "lg:w-96", "lg:border-l"], [1, "border-base-300", "flex", "items-center", "gap-2", "border-b", "px-4", "py-3"], [1, "flex-1", "text-lg", "font-medium"], ["cdkDropList", "", "role", "list", 1, "min-h-0", "flex-1", "overflow-auto", "px-3", "py-2", 3, "cdkDropListDropped"], ["cdkDrag", "", "role", "listitem", 1, "border-base-300", "bg-base-100", "mb-2", "rounded-lg", "border", 3, "cdkDragDisabled", "border-primary"], [1, "text-base-content/70", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8", "text-center"], [1, "border-base-300", "flex", "items-center", "gap-2", "border-t", "px-4", "py-3"], ["btn", "", "type", "button", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "flex", "items-center", "rounded-lg", "py-1.5", "pr-4", "pl-2", 3, "matMenuTriggerFor"], [1, "mr-1", "text-2xl"], ["type", "button", "mat-menu-item", ""], ["type", "button", "mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "gap-2"], [1, "text-2xl"], ["cdkDrag", "", "role", "listitem", 1, "border-base-300", "bg-base-100", "mb-2", "rounded-lg", "border", 3, "cdkDragDisabled"], [1, "flex", "w-full", "cursor-pointer", "items-center", "gap-2", "px-2", "py-2", 3, "click"], ["cdkDragHandle", "", 1, "shrink-0", "cursor-grab", "opacity-40"], [1, "shrink-0", "text-2xl", "opacity-70"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-sm", "font-medium"], [1, "truncate", "text-xs", "opacity-60"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", ""], [1, "border-base-300", "flex", "flex-col", "gap-2", "border-t", "px-3", "py-3"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 3, "click"], [3, "for"], ["appearance", "outline", 1, "no-subscript", "w-full"], [3, "ngModelChange", "id", "ngModel", "disabled"], ["value", ""], [3, "value"], [1, "flex", "gap-2"], ["appearance", "outline", 1, "no-subscript", "flex-1"], ["matInput", "", "type", "number", "min", "0", "max", "100", 3, "ngModelChange", "placeholder", "ngModel", "disabled"], ["matTextSuffix", ""], [1, "bg-base-200/60", "rounded-lg", "p-4"], [3, "ngModelChange", "schema", "ngModel", "ngModelOptions"], [1, "text-5xl"], [1, "text-sm"], ["btn", "", "type", "button", "matRipple", "", 1, "bg-base-200", "flex-1", "rounded-lg", "py-2", 3, "click"], ["btn", "", "type", "button", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "flex-1", "rounded-lg", "py-2"], ["btn", "", "type", "button", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "flex-1", "rounded-lg", "py-2", 3, "click"]], template: function TemplateLayoutListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h4", 3);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, TemplateLayoutListComponent_Conditional_5_Template, 10, 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275listener("cdkDropListDropped", function TemplateLayoutListComponent_Template_div_cdkDropListDropped_6_listener($event) {
          return ctx.onDrop($event);
        });
        \u0275\u0275repeaterCreate(7, TemplateLayoutListComponent_For_8_Template, 14, 13, "div", 5, \u0275\u0275repeaterTrackByIndex, false, TemplateLayoutListComponent_ForEmpty_9_Template, 6, 3, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(10, TemplateLayoutListComponent_Conditional_10_Template, 5, 4, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "SIGNAGE_MANAGER.TEMPLATE_LAYOUT_ITEMS"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.can_update() ? 5 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.layouts());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.dirty() ? 10 : -1);
      }
    }, dependencies: [
      CdkDropList,
      CdkDrag,
      CdkDragHandle,
      FormsModule,
      DefaultValueAccessor,
      NumberValueAccessor,
      NgControlStatus,
      MinValidator,
      MaxValidator,
      NgModel,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatSuffix,
      MatInputModule,
      MatInput,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatTooltipModule,
      IconComponent,
      SchemaFormComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n/*# sourceMappingURL=template-layout-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplateLayoutListComponent, [{
    type: Component,
    args: [{ selector: "template-layout-list", template: `
        <div
            class="bg-base-100 border-base-300 flex h-full w-full flex-col lg:w-96 lg:border-l"
        >
            <div
                class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
            >
                <h4 class="flex-1 text-lg font-medium">
                    {{ 'SIGNAGE_MANAGER.TEMPLATE_LAYOUT_ITEMS' | translate }}
                </h4>
                @if (can_update()) {
                    <button
                        btn
                        type="button"
                        matRipple
                        class="bg-secondary text-secondary-content flex items-center rounded-lg py-1.5 pr-4 pl-2"
                        [matMenuTriggerFor]="position_menu"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.TEMPLATE_ADD_LAYOUT' | translate
                        "
                    >
                        <icon class="mr-1 text-2xl">add</icon>
                        {{ 'SIGNAGE_MANAGER.TEMPLATE_ADD_LAYOUT' | translate }}
                    </button>
                    <mat-menu #position_menu="matMenu">
                        @for (position of positions; track position) {
                            <button
                                type="button"
                                mat-menu-item
                                (click)="addLayout(position)"
                            >
                                <div class="flex items-center gap-2">
                                    <icon class="text-2xl">{{
                                        positionIcon(position)
                                    }}</icon>
                                    <span>{{
                                        positionLabel(position) | translate
                                    }}</span>
                                </div>
                            </button>
                        }
                    </mat-menu>
                }
            </div>
            <div
                class="min-h-0 flex-1 overflow-auto px-3 py-2"
                cdkDropList
                role="list"
                (cdkDropListDropped)="onDrop($event)"
            >
                @for (layout of layouts(); track $index) {
                    <div
                        cdkDrag
                        [cdkDragDisabled]="!can_update()"
                        role="listitem"
                        class="border-base-300 bg-base-100 mb-2 rounded-lg border"
                        [class.border-primary]="selected_index() === $index"
                    >
                        <div
                            class="flex w-full cursor-pointer items-center gap-2 px-2 py-2"
                            (click)="selectLayout($index)"
                        >
                            @if (can_update()) {
                                <icon
                                    cdkDragHandle
                                    class="shrink-0 cursor-grab opacity-40"
                                    >drag_indicator</icon
                                >
                            }
                            <icon class="shrink-0 text-2xl opacity-70">{{
                                positionIcon(layout.position)
                            }}</icon>
                            <div class="min-w-0 flex-1">
                                <div class="truncate text-sm font-medium">
                                    {{
                                        positionLabel(layout.position)
                                            | translate
                                    }}
                                </div>
                                <div class="truncate text-xs opacity-60">
                                    {{
                                        pluginName(layout.plugin_id) ||
                                            ('SIGNAGE_MANAGER.TEMPLATE_NO_PLUGIN'
                                                | translate)
                                    }}
                                </div>
                            </div>
                            @if (can_update()) {
                                <button
                                    icon
                                    default
                                    error
                                    type="button"
                                    matRipple
                                    (click)="removeLayout($event, $index)"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.TEMPLATE_REMOVE_LAYOUT'
                                            | translate
                                    "
                                >
                                    <icon>delete</icon>
                                </button>
                            }
                        </div>
                        @if (selected_index() === $index) {
                            <div
                                class="border-base-300 flex flex-col gap-2 border-t px-3 py-3"
                            >
                                <label [for]="'plugin-' + $index">{{
                                    'SIGNAGE_MANAGER.SELECT_PLUGIN' | translate
                                }}</label>
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript w-full"
                                >
                                    <mat-select
                                        [id]="'plugin-' + $index"
                                        [ngModel]="layout.plugin_id || ''"
                                        (ngModelChange)="
                                            setPlugin($index, $event)
                                        "
                                        [disabled]="!can_update()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.SELECT_PLUGIN_ARIA'
                                                | translate
                                        "
                                    >
                                        <mat-option value="">{{
                                            'SIGNAGE_MANAGER.TEMPLATE_NO_PLUGIN'
                                                | translate
                                        }}</mat-option>
                                        @for (
                                            plugin of plugins();
                                            track plugin.id
                                        ) {
                                            <mat-option [value]="plugin.id">{{
                                                plugin.name
                                            }}</mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                                <!-- Edge panels size along their consumed
                                     axis; floating panels position their
                                     top-left corner and fill from there -->
                                <div class="flex gap-2">
                                    @if (hasXValue(layout.position)) {
                                        <mat-form-field
                                            appearance="outline"
                                            class="no-subscript flex-1"
                                        >
                                            <input
                                                matInput
                                                type="number"
                                                min="0"
                                                max="100"
                                                [placeholder]="
                                                    xLabel(layout.position)
                                                        | translate
                                                "
                                                [ngModel]="layout.x_pos ?? null"
                                                (ngModelChange)="
                                                    setAxis(
                                                        $index,
                                                        'x_pos',
                                                        $event
                                                    )
                                                "
                                                [disabled]="!can_update()"
                                                [attr.aria-label]="
                                                    xLabel(layout.position)
                                                        | translate
                                                "
                                            />
                                            <span matTextSuffix>%</span>
                                        </mat-form-field>
                                    }
                                    @if (hasYValue(layout.position)) {
                                        <mat-form-field
                                            appearance="outline"
                                            class="no-subscript flex-1"
                                        >
                                            <input
                                                matInput
                                                type="number"
                                                min="0"
                                                max="100"
                                                [placeholder]="
                                                    yLabel(layout.position)
                                                        | translate
                                                "
                                                [ngModel]="layout.y_pos ?? null"
                                                (ngModelChange)="
                                                    setAxis(
                                                        $index,
                                                        'y_pos',
                                                        $event
                                                    )
                                                "
                                                [disabled]="!can_update()"
                                                [attr.aria-label]="
                                                    yLabel(layout.position)
                                                        | translate
                                                "
                                            />
                                            <span matTextSuffix>%</span>
                                        </mat-form-field>
                                    }
                                </div>
                                @if (selected_plugin_schema()) {
                                    <label>
                                        {{
                                            'SIGNAGE_MANAGER.PLUGIN_PARAMETERS'
                                                | translate
                                        }}
                                    </label>
                                    <div
                                        class="bg-base-200/60 rounded-lg p-4"
                                        [class.opacity-70]="!can_update()"
                                        [attr.inert]="can_update() ? null : ''"
                                    >
                                        <schema-form
                                            [schema]="selected_plugin_schema()"
                                            [ngModel]="
                                                layout.plugin_params || {}
                                            "
                                            (ngModelChange)="
                                                setParams($index, $event)
                                            "
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                        ></schema-form>
                                    </div>
                                }
                            </div>
                        }
                    </div>
                } @empty {
                    <div
                        class="text-base-content/70 flex flex-col items-center justify-center space-y-2 p-8 text-center"
                    >
                        <icon class="text-5xl">space_dashboard</icon>
                        <p class="text-sm">
                            {{
                                'SIGNAGE_MANAGER.TEMPLATE_NO_LAYOUTS'
                                    | translate
                            }}
                        </p>
                    </div>
                }
            </div>
            @if (dirty()) {
                <div
                    class="border-base-300 flex items-center gap-2 border-t px-4 py-3"
                >
                    <button
                        btn
                        type="button"
                        matRipple
                        class="bg-base-200 flex-1 rounded-lg py-2"
                        (click)="discard()"
                    >
                        {{ 'SIGNAGE_MANAGER.TEMPLATE_DISCARD' | translate }}
                    </button>
                    @if (can_update()) {
                        <button
                            btn
                            type="button"
                            matRipple
                            class="bg-secondary text-secondary-content flex-1 rounded-lg py-2"
                            (click)="save()"
                        >
                            {{ 'COMMON.SAVE' | translate }}
                        </button>
                    }
                </div>
            }
        </div>
    `, imports: [
      CdkDropList,
      CdkDrag,
      CdkDragHandle,
      FormsModule,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      MatMenuModule,
      MatSelectModule,
      MatTooltipModule,
      IconComponent,
      SchemaFormComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;4c8b7fe2646ecddfcf76b99840d048a4c4066ae3f497b895bd939d142f82f88c;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/templates/template-layout-list.component.ts */\n:host {\n  display: block;\n  height: 100%;\n}\n/*# sourceMappingURL=template-layout-list.component.css.map */\n"] }]
  }], null, { _schema_form: [{ type: ViewChild, args: [forwardRef(() => SchemaFormComponent), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TemplateLayoutListComponent, { className: "TemplateLayoutListComponent", filePath: "apps/signage-manager/src/app/templates/template-layout-list.component.ts", lineNumber: 338 });
})();

// apps/signage-manager/src/app/templates/template-list.component.ts
var _c03 = ["template_item"];
var _c12 = (a0) => ["/templates", a0];
var _c2 = (a0) => ({ name: a0 });
var _c3 = (a0) => ({ count: a0 });
var _forTrack02 = ($index, $item) => $item.id;
function TemplateListComponent_Conditional_6_For_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.STATUS_AWAITING_REVIEW"), " ");
  }
}
function TemplateListComponent_Conditional_6_For_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const template_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("opacity-70", ctx_r1.selected()?.id !== template_r1.id)("opacity-90", ctx_r1.selected()?.id === template_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", template_r1.description, " ");
  }
}
function TemplateListComponent_Conditional_6_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9, 0);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "icon", 10);
    \u0275\u0275text(4, "dashboard_customize");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 11)(6, "div", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 13)(9, "span", 14);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, TemplateListComponent_Conditional_6_For_1_Conditional_12_Template, 3, 3, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, TemplateListComponent_Conditional_6_For_1_Conditional_13_Template, 2, 5, "div", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const template_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-primary", ctx_r1.selected()?.id === template_r1.id)("text-primary-content", ctx_r1.selected()?.id === template_r1.id)("hover:bg-base-200", ctx_r1.selected()?.id !== template_r1.id);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(18, _c12, template_r1.id));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(2, 12, "SIGNAGE_MANAGER.OPEN_TEMPLATE", \u0275\u0275pureFunction1(20, _c2, template_r1.name)));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", template_r1.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 15, "SIGNAGE_MANAGER.TEMPLATE_LAYOUT_COUNT", \u0275\u0275pureFunction1(22, _c3, template_r1.layouts.length)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(template_r1.approval_requested && !template_r1.approved ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(template_r1.description ? 13 : -1);
  }
}
function TemplateListComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275listener("intersect", function TemplateListComponent_Conditional_6_Conditional_2_Template_div_intersect_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadMore());
    });
    \u0275\u0275elementEnd();
  }
}
function TemplateListComponent_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.END_OF_LIST"), " ");
  }
}
function TemplateListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, TemplateListComponent_Conditional_6_For_1_Template, 14, 24, "a", 6, _forTrack02);
    \u0275\u0275conditionalCreate(2, TemplateListComponent_Conditional_6_Conditional_2_Template, 1, 0, "div", 7)(3, TemplateListComponent_Conditional_6_Conditional_3_Template, 3, 3, "div", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.templates());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.has_more() ? 2 : 3);
  }
}
function TemplateListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "icon", 19);
    \u0275\u0275text(2, "dashboard_customize");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_TEMPLATES"));
  }
}
var TemplateListComponent = class _TemplateListComponent {
  constructor() {
    this._service = inject(SignageService);
    this._template_items = viewChildren(
      "template_item",
      ...ngDevMode ? [{ debugName: "_template_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search = this._service.template_search_term;
    this.templates = this._service.templates;
    this.selected = this._service.selected_template;
    this.has_more = this._service.templates_has_more;
    afterRenderEffect({
      earlyRead: () => {
        const selected_id = this.selected()?.id;
        if (!selected_id)
          return;
        const template_index = this.templates().findIndex(({ id }) => id === selected_id);
        return this._template_items()[template_index]?.nativeElement;
      },
      write: (selected_item) => {
        selected_item()?.scrollIntoView?.({
          behavior: "instant",
          block: "nearest",
          inline: "nearest"
        });
      }
    });
  }
  loadMore() {
    this._service.loadMoreTemplates();
  }
  static {
    this.\u0275fac = function TemplateListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TemplateListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TemplateListComponent, selectors: [["template-list"]], viewQuery: function TemplateListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._template_items, _c03, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, decls: 8, vars: 8, consts: [["template_item", ""], [1, "bg-base-100", "border-base-300", "h-full", "min-w-64", "overflow-auto", "border-r", "sm:max-w-80"], [1, "border-base-300", "bg-base-100", "sticky", "top-0", "z-10", "border-b", "p-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], [1, "text-base-content/70", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], ["matRipple", "", "queryParamsHandling", "merge", 1, "border-base-300", "relative", "z-0", "flex", "w-full", "cursor-pointer", "items-center", "gap-3", "border-b", "px-2", "py-2", "text-left", "no-underline", "transition-colors", 3, "bg-primary", "text-primary-content", "hover:bg-base-200", "routerLink"], ["intersect", "", 1, "h-px", "w-full"], [1, "text-base-content/50", "bg-base-content/10", "col-span-full", "my-2", "p-2", "text-center", "text-xs"], ["matRipple", "", "queryParamsHandling", "merge", 1, "border-base-300", "relative", "z-0", "flex", "w-full", "cursor-pointer", "items-center", "gap-3", "border-b", "px-2", "py-2", "text-left", "no-underline", "transition-colors", 3, "routerLink"], [1, "shrink-0", "text-3xl", "opacity-60"], [1, "min-w-0", "flex-1", "pr-2"], [1, "truncate", "font-medium"], [1, "flex", "flex-wrap", "gap-1", "text-[0.625rem]", "font-medium", "uppercase"], [1, "bg-base-200", "text-base-content", "shrink-0", "rounded", "px-1.5", "py-0.5"], [1, "bg-warning", "text-warning-content", "shrink-0", "rounded", "px-1.5", "py-0.5"], [1, "mt-0.5", "truncate", "text-xs", 3, "opacity-70", "opacity-90"], [1, "mt-0.5", "truncate", "text-xs"], ["intersect", "", 1, "h-px", "w-full", 3, "intersect"], [1, "text-6xl"]], template: function TemplateListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "mat-form-field", 3)(3, "input", 4);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function TemplateListComponent_Template_input_ngModelChange_3_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(6, TemplateListComponent_Conditional_6_Template, 4, 1)(7, TemplateListComponent_Conditional_7_Template, 6, 3, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(4, 4, "SIGNAGE_MANAGER.SEARCH_TEMPLATES"));
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 6, "SIGNAGE_MANAGER.SEARCH_TEMPLATES"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.templates().length > 0 ? 6 : 7);
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      RouterLink,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      IconComponent,
      IntersectDirective,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=template-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplateListComponent, [{
    type: Component,
    args: [{ selector: "template-list", template: `
        <div
            class="bg-base-100 border-base-300 h-full min-w-64 overflow-auto border-r sm:max-w-80"
        >
            <div
                class="border-base-300 bg-base-100 sticky top-0 z-10 border-b p-2"
            >
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <input
                        matInput
                        [placeholder]="
                            'SIGNAGE_MANAGER.SEARCH_TEMPLATES' | translate
                        "
                        [(ngModel)]="search"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.SEARCH_TEMPLATES' | translate
                        "
                    />
                </mat-form-field>
            </div>
            @if (templates().length > 0) {
                @for (template of templates(); track template.id) {
                    <a
                        #template_item
                        matRipple
                        class="border-base-300 relative z-0 flex w-full cursor-pointer items-center gap-3 border-b px-2 py-2 text-left no-underline transition-colors"
                        [class.bg-primary]="selected()?.id === template.id"
                        [class.text-primary-content]="
                            selected()?.id === template.id
                        "
                        [class.hover:bg-base-200]="
                            selected()?.id !== template.id
                        "
                        [routerLink]="['/templates', template.id]"
                        queryParamsHandling="merge"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.OPEN_TEMPLATE'
                                | translate: { name: template.name }
                        "
                    >
                        <icon class="shrink-0 text-3xl opacity-60"
                            >dashboard_customize</icon
                        >
                        <div class="min-w-0 flex-1 pr-2">
                            <div class="truncate font-medium">
                                {{ template.name }}
                            </div>
                            <div
                                class="flex flex-wrap gap-1 text-[0.625rem] font-medium uppercase"
                            >
                                <span
                                    class="bg-base-200 text-base-content shrink-0 rounded px-1.5 py-0.5"
                                >
                                    {{
                                        'SIGNAGE_MANAGER.TEMPLATE_LAYOUT_COUNT'
                                            | translate
                                                : {
                                                      count: template.layouts
                                                          .length,
                                                  }
                                    }}
                                </span>
                                @if (
                                    template.approval_requested &&
                                    !template.approved
                                ) {
                                    <span
                                        class="bg-warning text-warning-content shrink-0 rounded px-1.5 py-0.5"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.STATUS_AWAITING_REVIEW'
                                                | translate
                                        }}
                                    </span>
                                }
                            </div>
                            @if (template.description) {
                                <div
                                    class="mt-0.5 truncate text-xs"
                                    [class.opacity-70]="
                                        selected()?.id !== template.id
                                    "
                                    [class.opacity-90]="
                                        selected()?.id === template.id
                                    "
                                >
                                    {{ template.description }}
                                </div>
                            }
                        </div>
                    </a>
                }
                @if (has_more()) {
                    <div
                        class="h-px w-full"
                        intersect
                        (intersect)="loadMore()"
                    ></div>
                } @else {
                    <div
                        class="text-base-content/50 bg-base-content/10 col-span-full my-2 p-2 text-center text-xs"
                    >
                        {{ 'COMMON.END_OF_LIST' | translate }}
                    </div>
                }
            } @else {
                <div
                    class="text-base-content/70 flex flex-1 flex-col items-center justify-center space-y-2 p-8"
                >
                    <icon class="text-6xl">dashboard_customize</icon>
                    <p>{{ 'SIGNAGE_MANAGER.NO_TEMPLATES' | translate }}</p>
                </div>
            }
        </div>
    `, imports: [
      FormsModule,
      RouterLink,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      IconComponent,
      TranslatePipe,
      IntersectDirective
    ], styles: ["/* angular:styles/component:css;62f1948e80f1d37fbfc7dd0fe5a3ff76993e7e5f074002a0c62e64986fc743cb;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/templates/template-list.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=template-list.component.css.map */\n"] }]
  }], () => [], { _template_items: [{ type: ViewChildren, args: ["template_item", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TemplateListComponent, { className: "TemplateListComponent", filePath: "apps/signage-manager/src/app/templates/template-list.component.ts", lineNumber: 157 });
})();

// apps/signage-manager/src/app/templates/template-preview.component.ts
var _forTrack03 = ($index, $item) => $item.id;
function TemplatePreviewComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function TemplatePreviewComponent_For_4_Template_button_click_0_listener() {
      const option_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.aspect.set(option_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("border-primary", ctx_r2.aspect().id === option_r2.id)("bg-primary", ctx_r2.aspect().id === option_r2.id)("text-primary-content", ctx_r2.aspect().id === option_r2.id)("border-base-300", ctx_r2.aspect().id !== option_r2.id)("hover:bg-base-200", ctx_r2.aspect().id !== option_r2.id);
    \u0275\u0275attribute("aria-checked", ctx_r2.aspect().id === option_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r2.label, " ");
  }
}
function TemplatePreviewComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("source", ctx_r2.background_url())("alt", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.TEMPLATE_BACKGROUND"));
  }
}
function TemplatePreviewComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function TemplatePreviewComponent_For_18_Template_button_click_0_listener() {
      const $index_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectLayout($index_r5));
    });
    \u0275\u0275elementStart(2, "div", 13);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const $index_r5 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", item_r6.rect.left, "%")("top", item_r6.rect.top, "%")("width", item_r6.rect.width, "%")("height", item_r6.rect.height, "%");
    \u0275\u0275classProp("border-primary", ctx_r2.selected_index() === $index_r5)("bg-primary/40", ctx_r2.selected_index() === $index_r5)("z-10", ctx_r2.selected_index() === $index_r5)("border-white/40", ctx_r2.selected_index() !== $index_r5)("bg-white/15", ctx_r2.selected_index() !== $index_r5)("hover:bg-white/25", ctx_r2.selected_index() !== $index_r5);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 24, ctx_r2.positionLabel(item_r6.layout.position)))("aria-pressed", ctx_r2.selected_index() === $index_r5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 26, ctx_r2.positionLabel(item_r6.layout.position)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.pluginName(item_r6.layout.plugin_id) || \u0275\u0275pipeBind1(7, 28, "SIGNAGE_MANAGER.TEMPLATE_NO_PLUGIN"), " ");
  }
}
function TemplatePreviewComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.TEMPLATE_NO_LAYOUTS_HINT"), " ");
  }
}
var ASPECT_RATIOS = [
  { id: "16:9", label: "16:9", ratio: 16 / 9 },
  { id: "9:16", label: "9:16", ratio: 9 / 16 },
  { id: "4:3", label: "4:3", ratio: 4 / 3 },
  { id: "32:9", label: "32:9", ratio: 32 / 9 },
  { id: "1:1", label: "1:1", ratio: 1 }
];
var TemplatePreviewComponent = class _TemplatePreviewComponent {
  constructor() {
    this._service = inject(SignageService);
    this.aspect_ratios = ASPECT_RATIOS;
    this.aspect = signal(
      ASPECT_RATIOS[0],
      ...ngDevMode ? [{ debugName: "aspect" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_index = this._service.selected_template_layout_index;
    this._layouts = this._service.template_layout_draft;
    this.layout_rects = computed(
      () => {
        const layouts = this._layouts();
        const rects = computeTemplateLayoutRects(layouts);
        return layouts.map((layout, index) => ({
          layout,
          rect: rects[index]
        }));
      },
      ...ngDevMode ? [{ debugName: "layout_rects" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.background_url = computed(
      () => {
        const background_id = this._service.selected_template()?.background_item_id;
        return background_id ? gh(background_id) : "";
      },
      ...ngDevMode ? [{ debugName: "background_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.positionLabel = layoutPositionLabel;
  }
  selectLayout(index) {
    this.selected_index.set(this.selected_index() === index ? null : index);
  }
  pluginName(plugin_id) {
    if (!plugin_id)
      return "";
    return this._service.plugins().find((item) => item.id === plugin_id)?.name || plugin_id;
  }
  static {
    this.\u0275fac = function TemplatePreviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TemplatePreviewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TemplatePreviewComponent, selectors: [["template-preview"]], decls: 20, vars: 16, consts: [[1, "flex", "h-full", "min-h-0", "flex-col"], ["role", "radiogroup", 1, "flex", "flex-wrap", "items-center", "gap-2", "px-4", "py-2"], ["type", "button", "role", "radio", "matRipple", "", 1, "rounded-lg", "border", "px-3", "py-1.5", "text-sm", "font-medium", "transition-colors", 3, "border-primary", "bg-primary", "text-primary-content", "border-base-300", "hover:bg-base-200"], [1, "w-px", "flex-1"], [3, "matTooltip"], ["btn", "", "type", "button", "disabled", "", 1, "border-base-300", "flex", "cursor-not-allowed", "items-center", "gap-2", "rounded-lg", "border", "px-3", "py-1.5", "text-sm", "font-medium", "opacity-40"], [1, "preview-frame-container", "flex", "min-h-0", "flex-1", "items-center", "justify-center", "overflow-hidden", "p-4"], [1, "preview-frame", "relative", "overflow-hidden", "rounded-lg", "bg-neutral-900", "shadow-lg", "ring-1", "ring-black/20"], ["auth", "", 1, "absolute", "inset-0", "h-full", "w-full", "object-cover", "opacity-80", 3, "source", "alt"], ["type", "button", 1, "absolute", "flex", "flex-col", "items-center", "justify-center", "gap-1", "overflow-hidden", "border-2", "backdrop-blur-sm", "transition-colors", 3, "border-primary", "bg-primary/40", "z-10", "border-white/40", "bg-white/15", "hover:bg-white/25", "left", "top", "width", "height"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "p-4", "text-center", "text-sm", "text-white/60"], ["type", "button", "role", "radio", "matRipple", "", 1, "rounded-lg", "border", "px-3", "py-1.5", "text-sm", "font-medium", "transition-colors", 3, "click"], ["type", "button", 1, "absolute", "flex", "flex-col", "items-center", "justify-center", "gap-1", "overflow-hidden", "border-2", "backdrop-blur-sm", "transition-colors", 3, "click"], [1, "truncate", "px-2", "text-xs", "font-semibold", "text-white", "uppercase"], [1, "truncate", "px-2", "text-xs", "text-white/80"]], template: function TemplatePreviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275repeaterCreate(3, TemplatePreviewComponent_For_4_Template, 2, 12, "button", 2, _forTrack03);
        \u0275\u0275element(5, "div", 3);
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementStart(8, "button", 5);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementStart(10, "icon");
        \u0275\u0275text(11, "open_in_new");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "div", 6)(15, "div", 7);
        \u0275\u0275conditionalCreate(16, TemplatePreviewComponent_Conditional_16_Template, 2, 4, "img", 8);
        \u0275\u0275repeaterCreate(17, TemplatePreviewComponent_For_18_Template, 8, 30, "button", 9, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275conditionalCreate(19, TemplatePreviewComponent_Conditional_19_Template, 3, 3, "div", 10);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 8, "SIGNAGE_MANAGER.TEMPLATE_ASPECT_RATIO"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.aspect_ratios);
        \u0275\u0275advance(3);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 10, "SIGNAGE_MANAGER.TEMPLATE_PLAYER_PREVIEW_UNAVAILABLE"));
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(9, 12, "SIGNAGE_MANAGER.TEMPLATE_PLAYER_PREVIEW"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 14, "SIGNAGE_MANAGER.TEMPLATE_PLAYER_PREVIEW"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275styleProp("--ratio", ctx.aspect().ratio);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.background_url() ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.layout_rects());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.layout_rects().length ? 19 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      AuthenticatedImageDirective,
      TranslatePipe
    ], styles: ["\n.preview-frame-container[_ngcontent-%COMP%] {\n  container-type: size;\n}\n.preview-frame[_ngcontent-%COMP%] {\n  width: min(100%, calc(100cqh * var(--ratio)));\n  aspect-ratio: var(--ratio);\n}\n/*# sourceMappingURL=template-preview.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplatePreviewComponent, [{
    type: Component,
    args: [{ selector: "template-preview", template: `
        <div class="flex h-full min-h-0 flex-col">
            <div
                class="flex flex-wrap items-center gap-2 px-4 py-2"
                role="radiogroup"
                [attr.aria-label]="
                    'SIGNAGE_MANAGER.TEMPLATE_ASPECT_RATIO' | translate
                "
            >
                @for (option of aspect_ratios; track option.id) {
                    <button
                        type="button"
                        role="radio"
                        matRipple
                        class="rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors"
                        [class.border-primary]="aspect().id === option.id"
                        [class.bg-primary]="aspect().id === option.id"
                        [class.text-primary-content]="aspect().id === option.id"
                        [class.border-base-300]="aspect().id !== option.id"
                        [class.hover:bg-base-200]="aspect().id !== option.id"
                        (click)="aspect.set(option)"
                        [attr.aria-checked]="aspect().id === option.id"
                    >
                        {{ option.label }}
                    </button>
                }
                <div class="w-px flex-1"></div>
                <!-- Tooltip lives on the wrapper as disabled buttons swallow pointer events -->
                <div
                    [matTooltip]="
                        'SIGNAGE_MANAGER.TEMPLATE_PLAYER_PREVIEW_UNAVAILABLE'
                            | translate
                    "
                >
                    <button
                        btn
                        type="button"
                        class="border-base-300 flex cursor-not-allowed items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium opacity-40"
                        disabled
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.TEMPLATE_PLAYER_PREVIEW'
                                | translate
                        "
                    >
                        <icon>open_in_new</icon>
                        {{
                            'SIGNAGE_MANAGER.TEMPLATE_PLAYER_PREVIEW'
                                | translate
                        }}
                    </button>
                </div>
            </div>
            <div
                class="preview-frame-container flex min-h-0 flex-1 items-center justify-center overflow-hidden p-4"
            >
                <div
                    class="preview-frame relative overflow-hidden rounded-lg bg-neutral-900 shadow-lg ring-1 ring-black/20"
                    [style.--ratio]="aspect().ratio"
                >
                    @if (background_url()) {
                        <img
                            auth
                            class="absolute inset-0 h-full w-full object-cover opacity-80"
                            [source]="background_url()"
                            [alt]="
                                'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND'
                                    | translate
                            "
                        />
                    }
                    @for (item of layout_rects(); track $index) {
                        <button
                            type="button"
                            class="absolute flex flex-col items-center justify-center gap-1 overflow-hidden border-2 backdrop-blur-sm transition-colors"
                            [class.border-primary]="selected_index() === $index"
                            [class.bg-primary/40]="selected_index() === $index"
                            [class.z-10]="selected_index() === $index"
                            [class.border-white/40]="
                                selected_index() !== $index
                            "
                            [class.bg-white/15]="selected_index() !== $index"
                            [class.hover:bg-white/25]="
                                selected_index() !== $index
                            "
                            [style.left.%]="item.rect.left"
                            [style.top.%]="item.rect.top"
                            [style.width.%]="item.rect.width"
                            [style.height.%]="item.rect.height"
                            (click)="selectLayout($index)"
                            [attr.aria-label]="
                                positionLabel(item.layout.position) | translate
                            "
                            [attr.aria-pressed]="selected_index() === $index"
                        >
                            <div
                                class="truncate px-2 text-xs font-semibold text-white uppercase"
                            >
                                {{
                                    positionLabel(item.layout.position)
                                        | translate
                                }}
                            </div>
                            <div class="truncate px-2 text-xs text-white/80">
                                {{
                                    pluginName(item.layout.plugin_id) ||
                                        ('SIGNAGE_MANAGER.TEMPLATE_NO_PLUGIN'
                                            | translate)
                                }}
                            </div>
                        </button>
                    }
                    @if (!layout_rects().length) {
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
        </div>
    `, imports: [
      MatRippleModule,
      MatTooltipModule,
      IconComponent,
      TranslatePipe,
      AuthenticatedImageDirective
    ], styles: ["/* angular:styles/component:css;cf46aa844b6fe17cca3b562dcbc16f7d8d747cf1e5cb81b3a6bcee48c83c4f4f;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/templates/template-preview.component.ts */\n.preview-frame-container {\n  container-type: size;\n}\n.preview-frame {\n  width: min(100%, calc(100cqh * var(--ratio)));\n  aspect-ratio: var(--ratio);\n}\n/*# sourceMappingURL=template-preview.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TemplatePreviewComponent, { className: "TemplatePreviewComponent", filePath: "apps/signage-manager/src/app/templates/template-preview.component.ts", lineNumber: 178 });
})();

// apps/signage-manager/src/app/templates/templates.component.ts
function TemplatesSectionComponent_Conditional_7_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const template_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", template_r3.description, " ");
  }
}
function TemplatesSectionComponent_Conditional_7_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function TemplatesSectionComponent_Conditional_7_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editTemplate());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.EDIT_TEMPLATE_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.EDIT_SELECTED_TEMPLATE"));
  }
}
function TemplatesSectionComponent_Conditional_7_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function TemplatesSectionComponent_Conditional_7_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeTemplate());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "delete");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.DELETE_TEMPLATE_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.DELETE_SELECTED_TEMPLATE"));
  }
}
function TemplatesSectionComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "button", 11);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function TemplatesSectionComponent_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deselectTemplate());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 12)(6, "h4", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, TemplatesSectionComponent_Conditional_7_Conditional_8_Template, 2, 1, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "div");
    \u0275\u0275conditionalCreate(10, TemplatesSectionComponent_Conditional_7_Conditional_10_Template, 5, 6, "button", 15);
    \u0275\u0275conditionalCreate(11, TemplatesSectionComponent_Conditional_7_Conditional_11_Template, 5, 6, "button", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 17);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementStart(14, "button", 18, 0);
    \u0275\u0275listener("click", function TemplatesSectionComponent_Conditional_7_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setViewTab("preview"));
    })("keydown", function TemplatesSectionComponent_Conditional_7_Template_button_keydown_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const preview_tab_r6 = \u0275\u0275reference(15);
      const layouts_tab_r7 = \u0275\u0275reference(19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleTabKeydown($event, preview_tab_r6, layouts_tab_r7));
    });
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 19, 1);
    \u0275\u0275listener("click", function TemplatesSectionComponent_Conditional_7_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setViewTab("layouts"));
    })("keydown", function TemplatesSectionComponent_Conditional_7_Template_button_keydown_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const preview_tab_r6 = \u0275\u0275reference(15);
      const layouts_tab_r7 = \u0275\u0275reference(19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleTabKeydown($event, preview_tab_r6, layouts_tab_r7));
    });
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 20);
    \u0275\u0275element(23, "template-preview", 21)(24, "template-layout-list", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const template_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 34, "SIGNAGE_MANAGER.BACK_TO_TEMPLATES"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", template_r3.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(template_r3.description ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can_update() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_delete() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(13, 36, "COMMON.DETAILS"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-primary", ctx_r1.view_tab() === "preview")("border-b-2", ctx_r1.view_tab() === "preview")("text-primary", ctx_r1.view_tab() === "preview")("opacity-60", ctx_r1.view_tab() !== "preview");
    \u0275\u0275property("tabIndex", ctx_r1.view_tab() === "preview" ? 0 : -1);
    \u0275\u0275attribute("aria-selected", ctx_r1.view_tab() === "preview");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 38, "COMMON.PREVIEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-primary", ctx_r1.view_tab() === "layouts")("border-b-2", ctx_r1.view_tab() === "layouts")("text-primary", ctx_r1.view_tab() === "layouts")("opacity-60", ctx_r1.view_tab() !== "layouts");
    \u0275\u0275property("tabIndex", ctx_r1.view_tab() === "layouts" ? 0 : -1);
    \u0275\u0275attribute("aria-selected", ctx_r1.view_tab() === "layouts");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 40, "SIGNAGE_MANAGER.TEMPLATE_LAYOUT_ITEMS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("tablet-hidden", ctx_r1.view_tab() === "layouts");
    \u0275\u0275advance();
    \u0275\u0275classProp("tablet-hidden", ctx_r1.view_tab() === "preview")("tablet-full", ctx_r1.view_tab() === "layouts");
  }
}
function TemplatesSectionComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "icon", 25);
    \u0275\u0275text(2, "dashboard_customize");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.SELECT_TEMPLATE_HINT"), " ");
  }
}
var TemplatesSectionComponent = class _TemplatesSectionComponent {
  constructor() {
    this._service = inject(SignageService);
    this._router = inject(Router);
    this.id = input(
      "",
      ...ngDevMode ? [{ debugName: "id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.view_tab = signal(
      "preview",
      ...ngDevMode ? [{ debugName: "view_tab" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_template = this._service.selected_template;
    this.can_update = this._service.can_update;
    this.can_delete = this._service.can_delete;
    this._templates = this._service.templates;
    this._route_resolved = false;
    effect(() => {
      const id = this.id();
      const list = this._templates();
      if (!list.length)
        return;
      if (id) {
        const match = list.find((t) => t.id === id);
        if (match && this._service.selected_template() !== match) {
          this._service.selected_template.set(match);
          this._service.selected_template_layout_index.set(null);
        }
        this._route_resolved = true;
      } else if (this._route_resolved) {
        this._service.selected_template.set(null);
        this._service.selected_template_layout_index.set(null);
      }
    });
  }
  editTemplate() {
    const template = this.selected_template();
    if (template)
      this._service.editTemplate(template);
  }
  removeTemplate() {
    const template = this.selected_template();
    if (template)
      this._service.removeTemplate(template);
  }
  deselectTemplate() {
    this._service.selected_template.set(null);
    this._service.selected_template_layout_index.set(null);
    this._router.navigate(["/templates"], {});
  }
  setViewTab(tab) {
    this.view_tab.set(tab);
  }
  handleTabKeydown(event, preview_tab, layouts_tab) {
    let tab = null;
    if (event.key === "Home")
      tab = "preview";
    else if (event.key === "End")
      tab = "layouts";
    else if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      tab = this.view_tab() === "preview" ? "layouts" : "preview";
    }
    if (!tab)
      return;
    event.preventDefault();
    this.view_tab.set(tab);
    (tab === "preview" ? preview_tab : layouts_tab).focus();
  }
  static {
    this.\u0275fac = function TemplatesSectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TemplatesSectionComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TemplatesSectionComponent, selectors: [["templates-section"]], inputs: { id: [1, "id"] }, decls: 10, vars: 5, consts: [["preview_tab", ""], ["layouts_tab", ""], [1, "bg-base-200", "absolute", "inset-0", "flex", "flex-col", "sm:flex-row"], [1, "sm:h-full"], [1, "flex", "min-h-0", "flex-1", "flex-col"], [1, "relative", "z-10"], [1, "flex", "min-h-0", "flex-1", "flex-row"], [1, "mobile-full"], [1, "flex", "min-h-0", "w-px", "flex-1", "flex-col"], [1, "text-base-content/70", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "bg-base-100", "border-base-300", "mx-2", "flex", "items-center", "gap-2", "rounded-b-lg", "border", "p-2"], ["icon", "", "default", "", "type", "button", "matRipple", "", 1, "sm:hidden", 3, "click"], [1, "flex", "w-1/2", "flex-1", "flex-col", "px-2"], [1, "truncate", "text-lg", "font-medium"], [1, "-mt-1", "truncate", "text-xs"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "matTooltip"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 3, "matTooltip"], ["role", "tablist", 1, "bg-base-100", "border-base-300", "mx-2", "my-2", "flex", "rounded-lg", "border", "lg:hidden"], ["type", "button", "role", "tab", "aria-controls", "template-preview-panel", "id", "template-preview-tab", 1, "flex-1", "px-4", "py-2.5", "text-sm", "font-medium", "transition-colors", 3, "click", "keydown", "tabIndex"], ["type", "button", "role", "tab", "aria-controls", "template-layouts-panel", "id", "template-layouts-tab", 1, "flex-1", "px-4", "py-2.5", "text-sm", "font-medium", "transition-colors", 3, "click", "keydown", "tabIndex"], [1, "flex", "min-h-0", "flex-1", "flex-row", "overflow-hidden"], ["id", "template-preview-panel", "role", "tabpanel", "aria-labelledby", "template-preview-tab", 1, "min-h-0", "w-full", "flex-1", "lg:w-px"], ["id", "template-layouts-panel", "role", "tabpanel", "aria-labelledby", "template-layouts-tab", 1, "h-full", "shrink-0"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], [1, "text-6xl"]], template: function TemplatesSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275element(1, "nav-sidebar", 3);
        \u0275\u0275elementStart(2, "div", 4);
        \u0275\u0275element(3, "template-header", 5);
        \u0275\u0275elementStart(4, "div", 6);
        \u0275\u0275element(5, "template-list", 7);
        \u0275\u0275elementStart(6, "div", 8);
        \u0275\u0275conditionalCreate(7, TemplatesSectionComponent_Conditional_7_Template, 25, 42)(8, TemplatesSectionComponent_Conditional_8_Template, 6, 3, "div", 9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(9, "nav-footer");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275advance(5);
        \u0275\u0275classProp("mobile-hidden", !!ctx.selected_template());
        \u0275\u0275advance();
        \u0275\u0275classProp("mobile-hidden", !ctx.selected_template());
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_2_0 = ctx.selected_template()) ? 7 : 8, tmp_2_0);
      }
    }, dependencies: [
      NavSidebarComponent,
      NavFooterComponent,
      TemplateHeaderComponent,
      TemplateListComponent,
      TemplatePreviewComponent,
      TemplateLayoutListComponent,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      TranslatePipe
    ], styles: ["\n@media (max-width: 639px) {\n  .mobile-hidden[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media (max-width: 639px) {\n  .mobile-full[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n@media (max-width: 1023px) {\n  .tablet-hidden[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media (max-width: 1023px) {\n  .tablet-full[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=templates.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplatesSectionComponent, [{
    type: Component,
    args: [{ selector: "templates-section", template: `
        <div class="bg-base-200 absolute inset-0 flex flex-col sm:flex-row">
            <nav-sidebar class="sm:h-full" />
            <div class="flex min-h-0 flex-1 flex-col">
                <template-header class="relative z-10" />
                <div class="flex min-h-0 flex-1 flex-row">
                    <template-list
                        [class.mobile-hidden]="!!selected_template()"
                        class="mobile-full"
                    />
                    <div
                        class="flex min-h-0 w-px flex-1 flex-col"
                        [class.mobile-hidden]="!selected_template()"
                    >
                        @if (selected_template(); as template) {
                            <div
                                class="bg-base-100 border-base-300 mx-2 flex items-center gap-2 rounded-b-lg border p-2"
                            >
                                <button
                                    icon
                                    default
                                    type="button"
                                    matRipple
                                    class="sm:hidden"
                                    (click)="deselectTemplate()"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.BACK_TO_TEMPLATES'
                                            | translate
                                    "
                                >
                                    <icon>arrow_back</icon>
                                </button>
                                <div class="flex w-1/2 flex-1 flex-col px-2">
                                    <h4 class="truncate text-lg font-medium">
                                        {{ template.name }}
                                    </h4>
                                    @if (template.description) {
                                        <div class="-mt-1 truncate text-xs">
                                            {{ template.description }}
                                        </div>
                                    }
                                </div>
                                <div></div>
                                @if (can_update()) {
                                    <button
                                        icon
                                        default
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.EDIT_TEMPLATE_TOOLTIP'
                                                | translate
                                        "
                                        (click)="editTemplate()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.EDIT_SELECTED_TEMPLATE'
                                                | translate
                                        "
                                    >
                                        <icon>edit</icon>
                                    </button>
                                }
                                @if (can_delete()) {
                                    <button
                                        icon
                                        default
                                        error
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.DELETE_TEMPLATE_TOOLTIP'
                                                | translate
                                        "
                                        (click)="removeTemplate()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.DELETE_SELECTED_TEMPLATE'
                                                | translate
                                        "
                                    >
                                        <icon>delete</icon>
                                    </button>
                                }
                            </div>
                            <div
                                class="bg-base-100 border-base-300 mx-2 my-2 flex rounded-lg border lg:hidden"
                                role="tablist"
                                [attr.aria-label]="'COMMON.DETAILS' | translate"
                            >
                                <button
                                    #preview_tab
                                    type="button"
                                    role="tab"
                                    class="flex-1 px-4 py-2.5 text-sm font-medium transition-colors"
                                    [class.border-primary]="
                                        view_tab() === 'preview'
                                    "
                                    [class.border-b-2]="
                                        view_tab() === 'preview'
                                    "
                                    [class.text-primary]="
                                        view_tab() === 'preview'
                                    "
                                    [class.opacity-60]="
                                        view_tab() !== 'preview'
                                    "
                                    (click)="setViewTab('preview')"
                                    (keydown)="
                                        handleTabKeydown(
                                            $event,
                                            preview_tab,
                                            layouts_tab
                                        )
                                    "
                                    [attr.aria-selected]="
                                        view_tab() === 'preview'
                                    "
                                    [tabIndex]="
                                        view_tab() === 'preview' ? 0 : -1
                                    "
                                    aria-controls="template-preview-panel"
                                    id="template-preview-tab"
                                >
                                    {{ 'COMMON.PREVIEW' | translate }}
                                </button>
                                <button
                                    #layouts_tab
                                    type="button"
                                    role="tab"
                                    class="flex-1 px-4 py-2.5 text-sm font-medium transition-colors"
                                    [class.border-primary]="
                                        view_tab() === 'layouts'
                                    "
                                    [class.border-b-2]="
                                        view_tab() === 'layouts'
                                    "
                                    [class.text-primary]="
                                        view_tab() === 'layouts'
                                    "
                                    [class.opacity-60]="
                                        view_tab() !== 'layouts'
                                    "
                                    (click)="setViewTab('layouts')"
                                    (keydown)="
                                        handleTabKeydown(
                                            $event,
                                            preview_tab,
                                            layouts_tab
                                        )
                                    "
                                    [attr.aria-selected]="
                                        view_tab() === 'layouts'
                                    "
                                    [tabIndex]="
                                        view_tab() === 'layouts' ? 0 : -1
                                    "
                                    aria-controls="template-layouts-panel"
                                    id="template-layouts-tab"
                                >
                                    {{
                                        'SIGNAGE_MANAGER.TEMPLATE_LAYOUT_ITEMS'
                                            | translate
                                    }}
                                </button>
                            </div>
                            <div
                                class="flex min-h-0 flex-1 flex-row overflow-hidden"
                            >
                                <template-preview
                                    id="template-preview-panel"
                                    role="tabpanel"
                                    aria-labelledby="template-preview-tab"
                                    class="min-h-0 w-full flex-1 lg:w-px"
                                    [class.tablet-hidden]="
                                        view_tab() === 'layouts'
                                    "
                                />
                                <template-layout-list
                                    id="template-layouts-panel"
                                    role="tabpanel"
                                    aria-labelledby="template-layouts-tab"
                                    class="h-full shrink-0"
                                    [class.tablet-hidden]="
                                        view_tab() === 'preview'
                                    "
                                    [class.tablet-full]="
                                        view_tab() === 'layouts'
                                    "
                                />
                            </div>
                        } @else {
                            <div
                                class="text-base-content/70 flex flex-1 flex-col items-center justify-center space-y-2 p-8"
                            >
                                <icon class="text-6xl"
                                    >dashboard_customize</icon
                                >
                                <p>
                                    {{
                                        'SIGNAGE_MANAGER.SELECT_TEMPLATE_HINT'
                                            | translate
                                    }}
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <nav-footer />
        </div>
    `, imports: [
      NavSidebarComponent,
      NavFooterComponent,
      TemplateHeaderComponent,
      TemplateListComponent,
      TemplatePreviewComponent,
      TemplateLayoutListComponent,
      MatRippleModule,
      MatTooltipModule,
      IconComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;291dd75aed1604695cdb603225bb6e72f070a26c29e0e51b6d4e02e2cf76f84b;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/templates/templates.component.ts */\n@media (max-width: 639px) {\n  .mobile-hidden {\n    display: none !important;\n  }\n}\n@media (max-width: 639px) {\n  .mobile-full {\n    flex: 1;\n  }\n}\n@media (max-width: 1023px) {\n  .tablet-hidden {\n    display: none !important;\n  }\n}\n@media (max-width: 1023px) {\n  .tablet-full {\n    flex: 1;\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=templates.component.css.map */\n"] }]
  }], () => [], { id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TemplatesSectionComponent, { className: "TemplatesSectionComponent", filePath: "apps/signage-manager/src/app/templates/templates.component.ts", lineNumber: 267 });
})();
export {
  TemplatesSectionComponent
};
//# sourceMappingURL=templates.component-KFPF66OY.js.map
