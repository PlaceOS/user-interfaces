import {
  CdkDrag,
  CdkDragHandle,
  CdkDropList,
  moveItemInArray
} from "./chunk-HNXCMMW6.js";
import {
  GroupBreadcrumbsComponent
} from "./chunk-UG6OV5AN.js";
import {
  NavFooterComponent,
  NavSidebarComponent
} from "./chunk-HSVTSYN3.js";
import "./chunk-RMTQUXRF.js";
import "./chunk-B47A7ZZM.js";
import {
  SchemaFormComponent,
  pluginSchema,
  schemaDefaults
} from "./chunk-Y3Y7GZYE.js";
import {
  CounterComponent
} from "./chunk-WIKNS47I.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-TXVAG53L.js";
import "./chunk-LMC45HBY.js";
import {
  IntersectDirective
} from "./chunk-B4VG5N3U.js";
import {
  SettingsToggleComponent
} from "./chunk-I7P47UGZ.js";
import "./chunk-K5P4ENI4.js";
import {
  AuthenticatedImageDirective
} from "./chunk-JB3R7C37.js";
import "./chunk-ROJFX3RM.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-AUWMHS3G.js";
import {
  EDGE_BAR_HEIGHT_PC,
  FLOATING_DEFAULT_X_PC,
  FLOATING_DEFAULT_Y_PC,
  LAYOUT_POSITIONS,
  SIDEBAR_WIDTH_PC,
  SignageService,
  applyLayoutPositionDefaults,
  computeTemplateLayoutRects,
  isSameSignageTemplate,
  layoutPercentageToRatio,
  layoutPositionIcon,
  layoutPositionLabel,
  layoutRatioToPercentage
} from "./chunk-TK62XSGF.js";
import "./chunk-XASXFKEM.js";
import "./chunk-QAMSNMBO.js";
import "./chunk-OZEEJTZM.js";
import "./chunk-TTI4PR6G.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-GXX6XZGB.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-GBM5TPX5.js";
import "./chunk-W4PNQNWS.js";
import {
  playlistScheduleLabel
} from "./chunk-KOTTAT56.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-LHINQNJP.js";
import {
  TranslatePipe
} from "./chunk-3GHHB7C4.js";
import "./chunk-WEL7UXWF.js";
import "./chunk-73JW4EAQ.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-VOX6OYT2.js";
import {
  settingSignal
} from "./chunk-7X43NIYS.js";
import {
  Router,
  RouterLink
} from "./chunk-MAKUHOJD.js";
import {
  Component,
  DefaultValueAccessor,
  DestroyRef,
  FormsModule,
  Gh,
  IconComponent,
  Input,
  MatOption,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgModel,
  Output,
  SafePipe,
  ViewChild,
  ViewChildren,
  afterRenderEffect,
  computed,
  effect,
  forwardRef,
  i18n,
  inject,
  input,
  model,
  resource,
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
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-56VJTSNA.js";
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
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function TemplateHeaderComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addTemplate());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.NEW_TEMPLATE"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.CREATE_NEW_TEMPLATE"));
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
    this.can_create = this._service.can_create_templates;
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TemplateHeaderComponent, selectors: [["template-header"]], decls: 12, vars: 10, consts: [[1, "bg-base-100", "border-base-300", "sticky", "top-0", "flex", "flex-wrap", "items-center", "gap-2", "border-b", "px-4", "py-2", "shadow", "sm:flex-nowrap"], [1, "py-2"], [1, "text-2xl", "font-medium"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "text-sm", "opacity-60"], [1, "w-px", "flex-1"], ["icon", "", "default", "", "type", "button", "matRipple", "", 1, "text-xl", 3, "matTooltip"], ["icon", "", "default", "", "type", "button", "matRipple", "", 1, "text-xl", 3, "click", "matTooltip"]], template: function TemplateHeaderComponent_Template(rf, ctx) {
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
        \u0275\u0275conditionalCreate(11, TemplateHeaderComponent_Conditional_11_Template, 5, 6, "button", 6);
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
      MatTooltipModule,
      MatTooltip,
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
                    icon default
                    type="button"
                    matRipple
                    class="text-xl"
                    (click)="addTemplate()"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.CREATE_NEW_TEMPLATE' | translate
                    "
                    [matTooltip]="'SIGNAGE_MANAGER.NEW_TEMPLATE' | translate"
                >
                    <icon>add</icon>
                </button>
            }
        </div>
    `,
      imports: [
        MatRippleModule,
        IconComponent,
        TranslatePipe,
        GroupBreadcrumbsComponent,
        MatTooltipModule
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TemplateHeaderComponent, { className: "TemplateHeaderComponent", filePath: "apps/signage-manager/src/app/templates/template-header.component.ts", lineNumber: 54 });
})();

// apps/signage-manager/src/app/templates/template-layout-list.component.ts
var _c02 = () => ({});
var _c1 = () => ({ standalone: true });
var _forTrack0 = ($index, $item) => $item.id;
function TemplateLayoutListComponent_Conditional_11_Conditional_1_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function TemplateLayoutListComponent_Conditional_11_Conditional_1_For_10_Template_button_click_0_listener() {
      const position_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r6 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r6.addLayout(position_r6));
    });
    \u0275\u0275elementStart(1, "div", 18)(2, "icon", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const position_r6 = ctx.$implicit;
    const ctx_r6 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r6.positionIcon(position_r6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, ctx_r6.positionLabel(position_r6)));
  }
}
function TemplateLayoutListComponent_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "button", 14);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "icon", 15);
    \u0275\u0275text(4, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-menu", null, 2);
    \u0275\u0275repeaterCreate(9, TemplateLayoutListComponent_Conditional_11_Conditional_1_For_10_Template, 7, 4, "button", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const position_menu_r8 = \u0275\u0275reference(8);
    const ctx_r6 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", position_menu_r8);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 3, "SIGNAGE_MANAGER.TEMPLATE_ADD_LAYOUT"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "SIGNAGE_MANAGER.TEMPLATE_ADD_LAYOUT"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r6.positions);
  }
}
function TemplateLayoutListComponent_Conditional_11_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 22);
    \u0275\u0275text(1, "drag_indicator");
    \u0275\u0275elementEnd();
  }
}
function TemplateLayoutListComponent_Conditional_11_For_4_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function TemplateLayoutListComponent_Conditional_11_For_4_Conditional_12_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const $index_r10 = \u0275\u0275nextContext().$index;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.removeLayout($event, $index_r10));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "SIGNAGE_MANAGER.TEMPLATE_REMOVE_LAYOUT"));
  }
}
function TemplateLayoutListComponent_Conditional_11_For_4_Conditional_13_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plugin_r13 = ctx.$implicit;
    \u0275\u0275property("value", plugin_r13.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(plugin_r13.name);
  }
}
function TemplateLayoutListComponent_Conditional_11_For_4_Conditional_13_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 24)(1, "div", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a-counter", 37);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("ngModelChange", function TemplateLayoutListComponent_Conditional_11_For_4_Conditional_13_Conditional_13_Template_a_counter_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r14);
      const $index_r10 = \u0275\u0275nextContext(2).$index;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.setAxis($index_r10, "x_pos", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const layout_r15 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r6 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, ctx_r6.xLabel(layout_r15.position)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("min", 0)("max", 100)("ngModel", ctx_r6.axisPercentage(layout_r15, "x_pos"))("disabled", !ctx_r6.can_update())("render_fn", ctx_r6.renderPercent);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 9, ctx_r6.xLabel(layout_r15.position)));
    \u0275\u0275control();
  }
}
function TemplateLayoutListComponent_Conditional_11_For_4_Conditional_13_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 24)(1, "div", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a-counter", 37);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("ngModelChange", function TemplateLayoutListComponent_Conditional_11_For_4_Conditional_13_Conditional_14_Template_a_counter_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r16);
      const $index_r10 = \u0275\u0275nextContext(2).$index;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.setAxis($index_r10, "y_pos", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const layout_r15 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r6 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, ctx_r6.yLabel(layout_r15.position)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("min", 0)("max", 100)("ngModel", ctx_r6.axisPercentage(layout_r15, "y_pos"))("disabled", !ctx_r6.can_update())("render_fn", ctx_r6.renderPercent);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 9, ctx_r6.yLabel(layout_r15.position)));
    \u0275\u0275control();
  }
}
function TemplateLayoutListComponent_Conditional_11_For_4_Conditional_13_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 38)(4, "schema-form", 39);
    \u0275\u0275listener("ngModelChange", function TemplateLayoutListComponent_Conditional_11_For_4_Conditional_13_Conditional_15_Template_schema_form_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r17);
      const $index_r10 = \u0275\u0275nextContext(2).$index;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.setParams($index_r10, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const layout_r15 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r6 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 7, "SIGNAGE_MANAGER.PLUGIN_PARAMETERS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("opacity-70", !ctx_r6.can_update());
    \u0275\u0275attribute("inert", ctx_r6.can_update() ? null : "");
    \u0275\u0275advance();
    \u0275\u0275property("schema", ctx_r6.selected_plugin_schema())("ngModel", layout_r15.plugin_params || \u0275\u0275pureFunction0(9, _c02))("ngModelOptions", \u0275\u0275pureFunction0(10, _c1));
    \u0275\u0275control();
  }
}
function TemplateLayoutListComponent_Conditional_11_For_4_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "label", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 31)(5, "mat-select", 32);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("ngModelChange", function TemplateLayoutListComponent_Conditional_11_For_4_Conditional_13_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r12);
      const $index_r10 = \u0275\u0275nextContext().$index;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.setPlugin($index_r10, $event));
    });
    \u0275\u0275elementStart(7, "mat-option", 33);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(10, TemplateLayoutListComponent_Conditional_11_For_4_Conditional_13_For_11_Template, 2, 2, "mat-option", 34, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 35);
    \u0275\u0275conditionalCreate(13, TemplateLayoutListComponent_Conditional_11_For_4_Conditional_13_Conditional_13_Template, 6, 11, "label", 24);
    \u0275\u0275conditionalCreate(14, TemplateLayoutListComponent_Conditional_11_For_4_Conditional_13_Conditional_14_Template, 6, 11, "label", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, TemplateLayoutListComponent_Conditional_11_For_4_Conditional_13_Conditional_15_Template, 5, 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r17 = \u0275\u0275nextContext();
    const layout_r15 = ctx_r17.$implicit;
    const $index_r10 = ctx_r17.$index;
    const ctx_r6 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("for", "plugin-" + $index_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 10, "SIGNAGE_MANAGER.SELECT_PLUGIN"));
    \u0275\u0275advance(3);
    \u0275\u0275property("id", "plugin-" + $index_r10)("ngModel", layout_r15.plugin_id || "")("disabled", !ctx_r6.can_update());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 12, "SIGNAGE_MANAGER.SELECT_PLUGIN_ARIA"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 14, "SIGNAGE_MANAGER.TEMPLATE_NO_PLUGIN"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r6.widgets());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r6.hasXValue(layout_r15.position) ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r6.hasYValue(layout_r15.position) ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r6.selected_plugin_schema() ? 15 : -1);
  }
}
function TemplateLayoutListComponent_Conditional_11_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21);
    \u0275\u0275listener("click", function TemplateLayoutListComponent_Conditional_11_For_4_Template_div_click_1_listener() {
      const $index_r10 = \u0275\u0275restoreView(_r9).$index;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.selectLayout($index_r10));
    });
    \u0275\u0275conditionalCreate(2, TemplateLayoutListComponent_Conditional_11_For_4_Conditional_2_Template, 2, 0, "icon", 22);
    \u0275\u0275elementStart(3, "icon", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 24)(6, "div", 25);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 26);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, TemplateLayoutListComponent_Conditional_11_For_4_Conditional_12_Template, 4, 3, "button", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, TemplateLayoutListComponent_Conditional_11_For_4_Conditional_13_Template, 16, 16, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const layout_r15 = ctx.$implicit;
    const $index_r10 = ctx.$index;
    const ctx_r6 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-primary", ctx_r6.selected_index() === $index_r10);
    \u0275\u0275property("cdkDragDisabled", !ctx_r6.can_update());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r6.can_update() ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r6.positionIcon(layout_r15.position));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 9, ctx_r6.positionLabel(layout_r15.position)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r6.pluginName(layout_r15.plugin_id) || \u0275\u0275pipeBind1(11, 11, "SIGNAGE_MANAGER.TEMPLATE_NO_PLUGIN"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r6.can_update() ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r6.selected_index() === $index_r10 ? 13 : -1);
  }
}
function TemplateLayoutListComponent_Conditional_11_ForEmpty_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "icon", 40);
    \u0275\u0275text(2, "space_dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 41);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.TEMPLATE_NO_LAYOUTS"), " ");
  }
}
function TemplateLayoutListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275conditionalCreate(1, TemplateLayoutListComponent_Conditional_11_Conditional_1_Template, 11, 7, "div", 10);
    \u0275\u0275elementStart(2, "div", 11);
    \u0275\u0275listener("cdkDropListDropped", function TemplateLayoutListComponent_Conditional_11_Template_div_cdkDropListDropped_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onDrop($event));
    });
    \u0275\u0275repeaterCreate(3, TemplateLayoutListComponent_Conditional_11_For_4_Template, 14, 13, "div", 12, \u0275\u0275repeaterTrackByIndex, false, TemplateLayoutListComponent_Conditional_11_ForEmpty_5_Template, 6, 3, "div", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r6.can_update() ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r6.layouts());
  }
}
function TemplateLayoutListComponent_Conditional_12_Conditional_1_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dd", 18);
    \u0275\u0275element(1, "img", 59);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "span", 41);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("source", ctx)("alt", \u0275\u0275pipeBind1(2, 3, "SIGNAGE_MANAGER.TEMPLATE_BACKGROUND"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, "SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_SELECTED"));
  }
}
function TemplateLayoutListComponent_Conditional_12_Conditional_1_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dd", 41);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_EMPTY"), " ");
  }
}
function TemplateLayoutListComponent_Conditional_12_Conditional_1_Conditional_47_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 60)(1, "icon", 61);
    \u0275\u0275text(2, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r19 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(group_r19.name);
  }
}
function TemplateLayoutListComponent_Conditional_12_Conditional_1_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 54);
    \u0275\u0275repeaterCreate(1, TemplateLayoutListComponent_Conditional_12_Conditional_1_Conditional_47_For_2_Template, 5, 1, "li", 60, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const template_r20 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(template_r20.shared_with);
  }
}
function TemplateLayoutListComponent_Conditional_12_Conditional_1_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.NONE"), " ");
  }
}
function TemplateLayoutListComponent_Conditional_12_Conditional_1_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r6.mappings().length, ")");
  }
}
function TemplateLayoutListComponent_Conditional_12_Conditional_1_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.LOADING"), " ");
  }
}
function TemplateLayoutListComponent_Conditional_12_Conditional_1_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.TEMPLATE_MAPPINGS_LOAD_ERROR"), " ");
  }
}
function TemplateLayoutListComponent_Conditional_12_Conditional_1_Conditional_58_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 63)(2, "icon", 64);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24)(5, "div", 65);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 48);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 66);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const mapping_r21 = ctx.$implicit;
    const ctx_r6 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r6.mappingRoute(mapping_r21));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r6.mappingIcon(mapping_r21));
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r6.mappingTargetLabel(mapping_r21));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r6.mappingTargetLabel(mapping_r21), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 7, ctx_r6.mappingTargetType(mapping_r21)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r6.mappingSchedule(mapping_r21));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r6.mappingSchedule(mapping_r21), " ");
  }
}
function TemplateLayoutListComponent_Conditional_12_Conditional_1_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 54);
    \u0275\u0275repeaterCreate(1, TemplateLayoutListComponent_Conditional_12_Conditional_1_Conditional_58_For_2_Template, 12, 9, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r6.mappings());
  }
}
function TemplateLayoutListComponent_Conditional_12_Conditional_1_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.TEMPLATE_NO_MAPPINGS"), " ");
  }
}
function TemplateLayoutListComponent_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "section")(2, "h5", 44)(3, "icon", 45);
    \u0275\u0275text(4, "tune");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "dl", 46)(8, "div", 47)(9, "dt", 48);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "dd", 49);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 47)(15, "dt", 48);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "dd", 50);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 47)(22, "dt", 51);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(25, TemplateLayoutListComponent_Conditional_12_Conditional_1_Conditional_25_Template, 6, 7, "dd", 18)(26, TemplateLayoutListComponent_Conditional_12_Conditional_1_Conditional_26_Template, 3, 3, "dd", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 52)(28, "dt", 41);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "dd", 53);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 52)(35, "dt", 41);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "dd", 53);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "section")(42, "h5", 44)(43, "icon", 45);
    \u0275\u0275text(44, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(47, TemplateLayoutListComponent_Conditional_12_Conditional_1_Conditional_47_Template, 3, 0, "ul", 54)(48, TemplateLayoutListComponent_Conditional_12_Conditional_1_Conditional_48_Template, 3, 3, "div", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "section")(50, "h5", 44)(51, "icon", 45);
    \u0275\u0275text(52, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275conditionalCreate(55, TemplateLayoutListComponent_Conditional_12_Conditional_1_Conditional_55_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(56, TemplateLayoutListComponent_Conditional_12_Conditional_1_Conditional_56_Template, 3, 3, "div", 56)(57, TemplateLayoutListComponent_Conditional_12_Conditional_1_Conditional_57_Template, 3, 3, "div", 57)(58, TemplateLayoutListComponent_Conditional_12_Conditional_1_Conditional_58_Template, 3, 0, "ul", 54)(59, TemplateLayoutListComponent_Conditional_12_Conditional_1_Conditional_59_Template, 3, 3, "div", 58);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const template_r20 = ctx;
    const ctx_r6 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 16, "SIGNAGE_MANAGER.TEMPLATE_CONFIGURATION"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 18, "FORM.NAME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", template_r20.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 20, "COMMON.DESCRIPTION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", template_r20.description || \u0275\u0275pipeBind1(20, 22, "COMMON.NONE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 24, "SIGNAGE_MANAGER.TEMPLATE_BACKGROUND"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_11_0 = ctx_r6.background_url()) ? 25 : 26, tmp_11_0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 26, "SIGNAGE_MANAGER.TEMPLATE_FULLSCREEN_TAKEOVER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 28, template_r20.full_screen_takeover ? "COMMON.YES" : "COMMON.NO"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 30, "SIGNAGE_MANAGER.TEMPLATE_MERGE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 32, template_r20.merge ? "COMMON.YES" : "COMMON.NO"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 34, "SIGNAGE_MANAGER.SHARED_WITH"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(template_r20.shared_with.length ? 47 : 48);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(54, 36, "SIGNAGE_MANAGER.TEMPLATE_MAPPINGS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r6.mappings_loading() ? 55 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r6.mappings_loading() ? 56 : ctx_r6.mappings_error() ? 57 : ctx_r6.mappings().length ? 58 : 59);
  }
}
function TemplateLayoutListComponent_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "icon", 40);
    \u0275\u0275text(2, "dashboard_customize");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 41);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.SELECT_TEMPLATE_HINT"), " ");
  }
}
function TemplateLayoutListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275conditionalCreate(1, TemplateLayoutListComponent_Conditional_12_Conditional_1_Template, 60, 38, "div", 42)(2, TemplateLayoutListComponent_Conditional_12_Conditional_2_Template, 6, 3, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_3_0 = ctx_r6.selected_template()) ? 1 : 2, tmp_3_0);
  }
}
function TemplateLayoutListComponent_Conditional_13_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function TemplateLayoutListComponent_Conditional_13_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.save());
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
function TemplateLayoutListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "button", 67);
    \u0275\u0275listener("click", function TemplateLayoutListComponent_Conditional_13_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.discard());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, TemplateLayoutListComponent_Conditional_13_Conditional_4_Template, 3, 3, "button", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "SIGNAGE_MANAGER.TEMPLATE_DISCARD"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r6.can_update() ? 4 : -1);
  }
}
var TemplateLayoutListComponent = class _TemplateLayoutListComponent {
  constructor() {
    this._service = inject(SignageService);
    this.view_tab = model("items", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "view_tab" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "tab" }));
    this.positions = LAYOUT_POSITIONS;
    this.layouts = this._service.template_layout_draft;
    this.selected_template = this._service.selected_template;
    this.selected_index = this._service.selected_template_layout_index;
    this.dirty = this._service.template_layout_dirty;
    this.can_update = this._service.can_update_templates;
    this.widgets = this._service.widgets;
    this.displays = this._service.displays;
    this.zones = this._service.all_zones;
    this.background_url = computed(
      () => {
        const background_id = this.selected_template()?.background_item_id;
        return background_id ? Gh(background_id) : "";
      },
      ...ngDevMode ? [{ debugName: "background_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._mappings = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_mappings" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        template_id: this.view_tab() === "details" ? this.selected_template()?.live_template_id || this.selected_template()?.id || "" : ""
      }),
      loader: ({ params }) => params.template_id ? this._service.listTemplateMappings({
        template_id: params.template_id
      }) : Promise.resolve([])
    }));
    this.mappings = computed(
      () => this._mappings.value() || [],
      ...ngDevMode ? [{ debugName: "mappings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.mappings_loading = this._mappings.isLoading;
    this.mappings_error = this._mappings.error;
    this.selected_plugin = computed(
      () => {
        const index = this.selected_index();
        const plugin_id = index === null ? "" : this.layouts()[index]?.plugin_id;
        return this.widgets().find((plugin) => plugin.id === plugin_id);
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
    this.renderPercent = (value = 0) => `${value}%`;
  }
  pluginName(plugin_id) {
    if (!plugin_id)
      return "";
    return this.widgets().find((item) => item.id === plugin_id)?.name || plugin_id;
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
  setViewTab(tab) {
    this.view_tab.set(tab);
  }
  handleTabKeydown(event, items_tab, details_tab) {
    let tab = null;
    if (event.key === "Home")
      tab = "items";
    else if (event.key === "End")
      tab = "details";
    else if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      tab = this.view_tab() === "items" ? "details" : "items";
    }
    if (!tab)
      return;
    event.preventDefault();
    this.view_tab.set(tab);
    (tab === "items" ? items_tab : details_tab).focus();
  }
  mappingTargetLabel(mapping) {
    if (mapping.control_system_id) {
      const display = this.displays().find(({ id }) => id === mapping.control_system_id);
      return display?.display_name || display?.name || mapping.control_system_id;
    }
    const zone = this.zones().find(({ id }) => id === mapping.zone_id);
    return zone?.name || mapping.zone_id;
  }
  mappingTargetType(mapping) {
    return mapping.control_system_id ? "SIGNAGE_MANAGER.TEMPLATE_MAPPING_DISPLAY" : "SIGNAGE_MANAGER.TEMPLATE_MAPPING_ZONE";
  }
  mappingIcon(mapping) {
    return mapping.control_system_id ? "tv" : "layers";
  }
  mappingRoute(mapping) {
    return mapping.control_system_id ? ["/displays", mapping.control_system_id] : ["/zones", mapping.zone_id];
  }
  mappingSchedule(mapping) {
    return mapping.schedule ? playlistScheduleLabel(mapping.schedule) : i18n("SIGNAGE_MANAGER.DEFAULT_TEMPLATE");
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
    const plugin = this.widgets().find((item) => item.id === plugin_id);
    if (plugin_id && !plugin)
      return;
    const defaults = __spreadValues(__spreadValues({}, plugin?.defaults ?? {}), schemaDefaults(pluginSchema(plugin?.params)));
    this.layouts.update((layouts) => layouts.map((layout, item_index) => {
      if (item_index !== index)
        return layout;
      return __spreadProps(__spreadValues({}, layout), {
        plugin_id: plugin_id || void 0,
        plugin_params: __spreadValues(__spreadValues({}, defaults), layout.plugin_id === plugin_id ? layout.plugin_params ?? {} : {})
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
  axisPercentage(layout, axis) {
    const percentage = layoutRatioToPercentage(layout[axis]);
    if (percentage !== null)
      return percentage;
    if (layout.position === "floating") {
      return axis === "x_pos" ? FLOATING_DEFAULT_X_PC : FLOATING_DEFAULT_Y_PC;
    }
    return axis === "x_pos" ? SIDEBAR_WIDTH_PC : EDGE_BAR_HEIGHT_PC;
  }
  setAxis(index, axis, value) {
    const ratio = layoutPercentageToRatio(value);
    this.layouts.update((layouts) => layouts.map((layout, item_index) => item_index === index ? __spreadProps(__spreadValues({}, layout), { [axis]: ratio }) : layout));
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
    }, inputs: { view_tab: [1, "tab", "view_tab"] }, outputs: { view_tab: "tabChange" }, decls: 14, vars: 31, consts: [["items_tab", ""], ["details_tab", ""], ["position_menu", "matMenu"], [1, "bg-base-100", "border-base-300", "flex", "h-full", "w-full", "flex-col", "lg:w-96", "lg:border-l"], ["role", "tablist", 1, "border-base-300", "hidden", "border-b", "lg:flex"], ["type", "button", "role", "tab", "aria-controls", "template-layout-items-panel", "id", "template-layout-items-tab", 1, "flex-1", "px-4", "py-3", "text-sm", "font-medium", "transition-colors", 3, "click", "keydown", "tabIndex"], ["type", "button", "role", "tab", "aria-controls", "template-layout-details-panel", "id", "template-layout-details-tab", 1, "flex-1", "px-4", "py-3", "text-sm", "font-medium", "transition-colors", 3, "click", "keydown", "tabIndex"], ["id", "template-layout-items-panel", "role", "tabpanel", "aria-labelledby", "template-layout-items-tab", 1, "flex", "min-h-0", "flex-1", "flex-col"], ["id", "template-layout-details-panel", "role", "tabpanel", "aria-labelledby", "template-layout-details-tab", 1, "min-h-0", "flex-1", "overflow-auto"], [1, "border-base-300", "flex", "items-center", "gap-2", "border-t", "px-4", "py-3"], [1, "flex", "justify-end", "px-3", "pt-3"], ["cdkDropList", "", "role", "list", 1, "min-h-0", "flex-1", "overflow-auto", "px-3", "py-2", 3, "cdkDropListDropped"], ["cdkDrag", "", "role", "listitem", 1, "border-base-300", "bg-base-100", "mb-2", "rounded-lg", "border", 3, "cdkDragDisabled", "border-primary"], [1, "text-base-content/70", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8", "text-center"], ["btn", "", "type", "button", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "flex", "items-center", "rounded-lg", "py-1.5", "pr-4", "pl-2", 3, "matMenuTriggerFor"], [1, "mr-1", "text-2xl"], ["type", "button", "mat-menu-item", ""], ["type", "button", "mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "gap-2"], [1, "text-2xl"], ["cdkDrag", "", "role", "listitem", 1, "border-base-300", "bg-base-100", "mb-2", "rounded-lg", "border", 3, "cdkDragDisabled"], [1, "flex", "w-full", "cursor-pointer", "items-center", "gap-2", "px-2", "py-2", 3, "click"], ["cdkDragHandle", "", 1, "shrink-0", "cursor-grab", "opacity-40"], [1, "shrink-0", "text-2xl", "opacity-70"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-sm", "font-medium"], [1, "truncate", "text-xs", "opacity-60"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", ""], [1, "border-base-300", "flex", "flex-col", "gap-2", "border-t", "px-3", "py-3"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 3, "click"], [3, "for"], ["appearance", "outline", 1, "no-subscript", "w-full"], [3, "ngModelChange", "id", "ngModel", "disabled"], ["value", ""], [3, "value"], [1, "flex", "gap-2"], [1, "mb-1", "text-sm"], [1, "block", 3, "ngModelChange", "min", "max", "ngModel", "disabled", "render_fn"], [1, "bg-base-200/60", "rounded-lg", "p-4"], [3, "ngModelChange", "schema", "ngModel", "ngModelOptions"], [1, "text-5xl"], [1, "text-sm"], [1, "flex", "flex-col", "gap-5", "p-4"], [1, "text-base-content/70", "flex", "h-full", "flex-col", "items-center", "justify-center", "space-y-2", "p-8", "text-center"], [1, "text-base-content/70", "mb-2", "flex", "items-center", "gap-2", "text-xs", "font-medium", "tracking-wider", "uppercase"], [1, "text-lg"], [1, "border-base-300", "divide-base-300", "divide-y", "rounded-lg", "border"], [1, "px-3", "py-2"], [1, "text-base-content/60", "text-xs"], [1, "mt-0.5", "font-medium"], [1, "mt-0.5", "text-sm", "whitespace-pre-wrap"], [1, "text-base-content/60", "mb-1", "text-xs"], [1, "flex", "items-center", "justify-between", "gap-3", "px-3", "py-2"], [1, "font-medium"], [1, "border-base-300", "divide-base-300", "list-none", "divide-y", "rounded-lg", "border", "p-0"], [1, "border-base-300", "text-base-content/70", "rounded-lg", "border", "px-3", "py-2", "text-sm"], [1, "border-base-300", "text-base-content/70", "rounded-lg", "border", "px-3", "py-4", "text-center", "text-sm"], [1, "border-error", "text-error", "rounded-lg", "border", "px-3", "py-3", "text-sm"], [1, "border-base-300", "text-base-content/70", "rounded-lg", "border", "px-3", "py-3", "text-sm"], ["auth", "", 1, "bg-base-200", "h-12", "w-20", "rounded", "object-cover", 3, "source", "alt"], [1, "flex", "items-center", "gap-2", "px-3", "py-2"], [1, "text-base-content/60", "text-xl"], [1, "min-w-0", "flex-1", "truncate", "text-sm"], ["matRipple", "", 1, "hover:bg-base-200", "flex", "items-center", "gap-2", "px-3", "py-2", "no-underline", "transition-colors", 3, "routerLink"], [1, "text-base-content/60", "shrink-0", "text-xl"], [1, "truncate", "text-sm", "font-medium", 3, "title"], [1, "bg-base-200", "max-w-36", "truncate", "rounded", "px-2", "py-1", "text-xs", 3, "title"], ["btn", "", "type", "button", "matRipple", "", 1, "bg-base-200", "flex-1", "rounded-lg", "py-2", 3, "click"], ["btn", "", "type", "button", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "flex-1", "rounded-lg", "py-2"], ["btn", "", "type", "button", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "flex-1", "rounded-lg", "py-2", 3, "click"]], template: function TemplateLayoutListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "button", 5, 0);
        \u0275\u0275listener("click", function TemplateLayoutListComponent_Template_button_click_3_listener() {
          return ctx.setViewTab("items");
        })("keydown", function TemplateLayoutListComponent_Template_button_keydown_3_listener($event) {
          \u0275\u0275restoreView(_r1);
          const items_tab_r2 = \u0275\u0275reference(4);
          const details_tab_r3 = \u0275\u0275reference(8);
          return \u0275\u0275resetView(ctx.handleTabKeydown($event, items_tab_r2, details_tab_r3));
        });
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "button", 6, 1);
        \u0275\u0275listener("click", function TemplateLayoutListComponent_Template_button_click_7_listener() {
          return ctx.setViewTab("details");
        })("keydown", function TemplateLayoutListComponent_Template_button_keydown_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          const items_tab_r2 = \u0275\u0275reference(4);
          const details_tab_r3 = \u0275\u0275reference(8);
          return \u0275\u0275resetView(ctx.handleTabKeydown($event, items_tab_r2, details_tab_r3));
        });
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(11, TemplateLayoutListComponent_Conditional_11_Template, 6, 2, "div", 7)(12, TemplateLayoutListComponent_Conditional_12_Template, 3, 1, "div", 8);
        \u0275\u0275conditionalCreate(13, TemplateLayoutListComponent_Conditional_13_Template, 5, 4, "div", 9);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 25, "SIGNAGE_MANAGER.TEMPLATE_LAYOUT_ITEMS"));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("border-primary", ctx.view_tab() === "items")("border-b-2", ctx.view_tab() === "items")("text-primary", ctx.view_tab() === "items")("opacity-60", ctx.view_tab() !== "items");
        \u0275\u0275property("tabIndex", ctx.view_tab() === "items" ? 0 : -1);
        \u0275\u0275attribute("aria-selected", ctx.view_tab() === "items");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 27, "SIGNAGE_MANAGER.TEMPLATE_LAYOUT_ITEMS"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("border-primary", ctx.view_tab() === "details")("border-b-2", ctx.view_tab() === "details")("text-primary", ctx.view_tab() === "details")("opacity-60", ctx.view_tab() !== "details");
        \u0275\u0275property("tabIndex", ctx.view_tab() === "details" ? 0 : -1);
        \u0275\u0275attribute("aria-selected", ctx.view_tab() === "details");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 29, "COMMON.DETAILS"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.view_tab() === "items" ? 11 : 12);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.dirty() ? 13 : -1);
      }
    }, dependencies: [
      CdkDropList,
      CdkDrag,
      CdkDragHandle,
      FormsModule,
      NgControlStatus,
      NgModel,
      RouterLink,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatTooltipModule,
      CounterComponent,
      AuthenticatedImageDirective,
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
                class="border-base-300 hidden border-b lg:flex"
                role="tablist"
                [attr.aria-label]="
                    'SIGNAGE_MANAGER.TEMPLATE_LAYOUT_ITEMS' | translate
                "
            >
                <button
                    #items_tab
                    type="button"
                    role="tab"
                    class="flex-1 px-4 py-3 text-sm font-medium transition-colors"
                    [class.border-primary]="view_tab() === 'items'"
                    [class.border-b-2]="view_tab() === 'items'"
                    [class.text-primary]="view_tab() === 'items'"
                    [class.opacity-60]="view_tab() !== 'items'"
                    (click)="setViewTab('items')"
                    (keydown)="handleTabKeydown($event, items_tab, details_tab)"
                    [attr.aria-selected]="view_tab() === 'items'"
                    [tabIndex]="view_tab() === 'items' ? 0 : -1"
                    aria-controls="template-layout-items-panel"
                    id="template-layout-items-tab"
                >
                    {{ 'SIGNAGE_MANAGER.TEMPLATE_LAYOUT_ITEMS' | translate }}
                </button>
                <button
                    #details_tab
                    type="button"
                    role="tab"
                    class="flex-1 px-4 py-3 text-sm font-medium transition-colors"
                    [class.border-primary]="view_tab() === 'details'"
                    [class.border-b-2]="view_tab() === 'details'"
                    [class.text-primary]="view_tab() === 'details'"
                    [class.opacity-60]="view_tab() !== 'details'"
                    (click)="setViewTab('details')"
                    (keydown)="handleTabKeydown($event, items_tab, details_tab)"
                    [attr.aria-selected]="view_tab() === 'details'"
                    [tabIndex]="view_tab() === 'details' ? 0 : -1"
                    aria-controls="template-layout-details-panel"
                    id="template-layout-details-tab"
                >
                    {{ 'COMMON.DETAILS' | translate }}
                </button>
            </div>
            @if (view_tab() === 'items') {
                <div
                    id="template-layout-items-panel"
                    role="tabpanel"
                    aria-labelledby="template-layout-items-tab"
                    class="flex min-h-0 flex-1 flex-col"
                >
                    @if (can_update()) {
                        <div class="flex justify-end px-3 pt-3">
                            <button
                                btn
                                type="button"
                                matRipple
                                class="bg-secondary text-secondary-content flex items-center rounded-lg py-1.5 pr-4 pl-2"
                                [matMenuTriggerFor]="position_menu"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.TEMPLATE_ADD_LAYOUT'
                                        | translate
                                "
                            >
                                <icon class="mr-1 text-2xl">add</icon>
                                {{
                                    'SIGNAGE_MANAGER.TEMPLATE_ADD_LAYOUT'
                                        | translate
                                }}
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
                                                positionLabel(position)
                                                    | translate
                                            }}</span>
                                        </div>
                                    </button>
                                }
                            </mat-menu>
                        </div>
                    }
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
                                [class.border-primary]="
                                    selected_index() === $index
                                "
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
                                    <icon
                                        class="shrink-0 text-2xl opacity-70"
                                        >{{
                                            positionIcon(layout.position)
                                        }}</icon
                                    >
                                    <div class="min-w-0 flex-1">
                                        <div
                                            class="truncate text-sm font-medium"
                                        >
                                            {{
                                                positionLabel(layout.position)
                                                    | translate
                                            }}
                                        </div>
                                        <div
                                            class="truncate text-xs opacity-60"
                                        >
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
                                            (click)="
                                                removeLayout($event, $index)
                                            "
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
                                            'SIGNAGE_MANAGER.SELECT_PLUGIN'
                                                | translate
                                        }}</label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="no-subscript w-full"
                                        >
                                            <mat-select
                                                [id]="'plugin-' + $index"
                                                [ngModel]="
                                                    layout.plugin_id || ''
                                                "
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
                                                    plugin of widgets();
                                                    track plugin.id
                                                ) {
                                                    <mat-option
                                                        [value]="plugin.id"
                                                        >{{
                                                            plugin.name
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                        <!-- Edge panels size along their
                                             consumed axis; floating panels
                                             position their top-left corner
                                             and fill from there. -->
                                        <div class="flex gap-2">
                                            @if (hasXValue(layout.position)) {
                                                <label class="min-w-0 flex-1">
                                                    <div class="mb-1 text-sm">
                                                        {{
                                                            xLabel(
                                                                layout.position
                                                            ) | translate
                                                        }}
                                                    </div>
                                                    <a-counter
                                                        class="block"
                                                        [min]="0"
                                                        [max]="100"
                                                        [ngModel]="
                                                            axisPercentage(
                                                                layout,
                                                                'x_pos'
                                                            )
                                                        "
                                                        (ngModelChange)="
                                                            setAxis(
                                                                $index,
                                                                'x_pos',
                                                                $event
                                                            )
                                                        "
                                                        [disabled]="
                                                            !can_update()
                                                        "
                                                        [render_fn]="
                                                            renderPercent
                                                        "
                                                        [attr.aria-label]="
                                                            xLabel(
                                                                layout.position
                                                            ) | translate
                                                        "
                                                    />
                                                </label>
                                            }
                                            @if (hasYValue(layout.position)) {
                                                <label class="min-w-0 flex-1">
                                                    <div class="mb-1 text-sm">
                                                        {{
                                                            yLabel(
                                                                layout.position
                                                            ) | translate
                                                        }}
                                                    </div>
                                                    <a-counter
                                                        class="block"
                                                        [min]="0"
                                                        [max]="100"
                                                        [ngModel]="
                                                            axisPercentage(
                                                                layout,
                                                                'y_pos'
                                                            )
                                                        "
                                                        (ngModelChange)="
                                                            setAxis(
                                                                $index,
                                                                'y_pos',
                                                                $event
                                                            )
                                                        "
                                                        [disabled]="
                                                            !can_update()
                                                        "
                                                        [render_fn]="
                                                            renderPercent
                                                        "
                                                        [attr.aria-label]="
                                                            yLabel(
                                                                layout.position
                                                            ) | translate
                                                        "
                                                    />
                                                </label>
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
                                                [class.opacity-70]="
                                                    !can_update()
                                                "
                                                [attr.inert]="
                                                    can_update() ? null : ''
                                                "
                                            >
                                                <schema-form
                                                    [schema]="
                                                        selected_plugin_schema()
                                                    "
                                                    [ngModel]="
                                                        layout.plugin_params ||
                                                        {}
                                                    "
                                                    (ngModelChange)="
                                                        setParams(
                                                            $index,
                                                            $event
                                                        )
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
                </div>
            } @else {
                <div
                    id="template-layout-details-panel"
                    role="tabpanel"
                    aria-labelledby="template-layout-details-tab"
                    class="min-h-0 flex-1 overflow-auto"
                >
                    @if (selected_template(); as template) {
                        <div class="flex flex-col gap-5 p-4">
                            <section>
                                <h5
                                    class="text-base-content/70 mb-2 flex items-center gap-2 text-xs font-medium tracking-wider uppercase"
                                >
                                    <icon class="text-lg">tune</icon>
                                    {{
                                        'SIGNAGE_MANAGER.TEMPLATE_CONFIGURATION'
                                            | translate
                                    }}
                                </h5>
                                <dl
                                    class="border-base-300 divide-base-300 divide-y rounded-lg border"
                                >
                                    <div class="px-3 py-2">
                                        <dt
                                            class="text-base-content/60 text-xs"
                                        >
                                            {{ 'FORM.NAME' | translate }}
                                        </dt>
                                        <dd class="mt-0.5 font-medium">
                                            {{ template.name }}
                                        </dd>
                                    </div>
                                    <div class="px-3 py-2">
                                        <dt
                                            class="text-base-content/60 text-xs"
                                        >
                                            {{
                                                'COMMON.DESCRIPTION' | translate
                                            }}
                                        </dt>
                                        <dd
                                            class="mt-0.5 text-sm whitespace-pre-wrap"
                                        >
                                            {{
                                                template.description ||
                                                    ('COMMON.NONE' | translate)
                                            }}
                                        </dd>
                                    </div>
                                    <div class="px-3 py-2">
                                        <dt
                                            class="text-base-content/60 mb-1 text-xs"
                                        >
                                            {{
                                                'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND'
                                                    | translate
                                            }}
                                        </dt>
                                        @if (background_url(); as source) {
                                            <dd class="flex items-center gap-2">
                                                <img
                                                    auth
                                                    class="bg-base-200 h-12 w-20 rounded object-cover"
                                                    [source]="source"
                                                    [alt]="
                                                        'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND'
                                                            | translate
                                                    "
                                                />
                                                <span class="text-sm">{{
                                                    'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_SELECTED'
                                                        | translate
                                                }}</span>
                                            </dd>
                                        } @else {
                                            <dd class="text-sm">
                                                {{
                                                    'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_EMPTY'
                                                        | translate
                                                }}
                                            </dd>
                                        }
                                    </div>
                                    <div
                                        class="flex items-center justify-between gap-3 px-3 py-2"
                                    >
                                        <dt class="text-sm">
                                            {{
                                                'SIGNAGE_MANAGER.TEMPLATE_FULLSCREEN_TAKEOVER'
                                                    | translate
                                            }}
                                        </dt>
                                        <dd class="font-medium">
                                            {{
                                                (template.full_screen_takeover
                                                    ? 'COMMON.YES'
                                                    : 'COMMON.NO'
                                                ) | translate
                                            }}
                                        </dd>
                                    </div>
                                    <div
                                        class="flex items-center justify-between gap-3 px-3 py-2"
                                    >
                                        <dt class="text-sm">
                                            {{
                                                'SIGNAGE_MANAGER.TEMPLATE_MERGE'
                                                    | translate
                                            }}
                                        </dt>
                                        <dd class="font-medium">
                                            {{
                                                (template.merge
                                                    ? 'COMMON.YES'
                                                    : 'COMMON.NO'
                                                ) | translate
                                            }}
                                        </dd>
                                    </div>
                                </dl>
                            </section>

                            <section>
                                <h5
                                    class="text-base-content/70 mb-2 flex items-center gap-2 text-xs font-medium tracking-wider uppercase"
                                >
                                    <icon class="text-lg">groups</icon>
                                    {{
                                        'SIGNAGE_MANAGER.SHARED_WITH'
                                            | translate
                                    }}
                                </h5>
                                @if (template.shared_with.length) {
                                    <ul
                                        class="border-base-300 divide-base-300 list-none divide-y rounded-lg border p-0"
                                    >
                                        @for (
                                            group of template.shared_with;
                                            track group.id
                                        ) {
                                            <li
                                                class="flex items-center gap-2 px-3 py-2"
                                            >
                                                <icon
                                                    class="text-base-content/60 text-xl"
                                                    >group</icon
                                                >
                                                <span
                                                    class="min-w-0 flex-1 truncate text-sm"
                                                    >{{ group.name }}</span
                                                >
                                            </li>
                                        }
                                    </ul>
                                } @else {
                                    <div
                                        class="border-base-300 text-base-content/70 rounded-lg border px-3 py-2 text-sm"
                                    >
                                        {{ 'COMMON.NONE' | translate }}
                                    </div>
                                }
                            </section>

                            <section>
                                <h5
                                    class="text-base-content/70 mb-2 flex items-center gap-2 text-xs font-medium tracking-wider uppercase"
                                >
                                    <icon class="text-lg">link</icon>
                                    {{
                                        'SIGNAGE_MANAGER.TEMPLATE_MAPPINGS'
                                            | translate
                                    }}
                                    @if (!mappings_loading()) {
                                        <span>({{ mappings().length }})</span>
                                    }
                                </h5>
                                @if (mappings_loading()) {
                                    <div
                                        class="border-base-300 text-base-content/70 rounded-lg border px-3 py-4 text-center text-sm"
                                    >
                                        {{ 'COMMON.LOADING' | translate }}
                                    </div>
                                } @else if (mappings_error()) {
                                    <div
                                        class="border-error text-error rounded-lg border px-3 py-3 text-sm"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.TEMPLATE_MAPPINGS_LOAD_ERROR'
                                                | translate
                                        }}
                                    </div>
                                } @else if (mappings().length) {
                                    <ul
                                        class="border-base-300 divide-base-300 list-none divide-y rounded-lg border p-0"
                                    >
                                        @for (
                                            mapping of mappings();
                                            track mapping.id
                                        ) {
                                            <li>
                                                <a
                                                    matRipple
                                                    class="hover:bg-base-200 flex items-center gap-2 px-3 py-2 no-underline transition-colors"
                                                    [routerLink]="
                                                        mappingRoute(mapping)
                                                    "
                                                >
                                                    <icon
                                                        class="text-base-content/60 shrink-0 text-xl"
                                                        >{{
                                                            mappingIcon(mapping)
                                                        }}</icon
                                                    >
                                                    <div class="min-w-0 flex-1">
                                                        <div
                                                            class="truncate text-sm font-medium"
                                                            [title]="
                                                                mappingTargetLabel(
                                                                    mapping
                                                                )
                                                            "
                                                        >
                                                            {{
                                                                mappingTargetLabel(
                                                                    mapping
                                                                )
                                                            }}
                                                        </div>
                                                        <div
                                                            class="text-base-content/60 text-xs"
                                                        >
                                                            {{
                                                                mappingTargetType(
                                                                    mapping
                                                                ) | translate
                                                            }}
                                                        </div>
                                                    </div>
                                                    <span
                                                        class="bg-base-200 max-w-36 truncate rounded px-2 py-1 text-xs"
                                                        [title]="
                                                            mappingSchedule(
                                                                mapping
                                                            )
                                                        "
                                                    >
                                                        {{
                                                            mappingSchedule(
                                                                mapping
                                                            )
                                                        }}
                                                    </span>
                                                </a>
                                            </li>
                                        }
                                    </ul>
                                } @else {
                                    <div
                                        class="border-base-300 text-base-content/70 rounded-lg border px-3 py-3 text-sm"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.TEMPLATE_NO_MAPPINGS'
                                                | translate
                                        }}
                                    </div>
                                }
                            </section>
                        </div>
                    } @else {
                        <div
                            class="text-base-content/70 flex h-full flex-col items-center justify-center space-y-2 p-8 text-center"
                        >
                            <icon class="text-5xl">dashboard_customize</icon>
                            <p class="text-sm">
                                {{
                                    'SIGNAGE_MANAGER.SELECT_TEMPLATE_HINT'
                                        | translate
                                }}
                            </p>
                        </div>
                    }
                </div>
            }
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
      RouterLink,
      MatRippleModule,
      MatFormFieldModule,
      MatMenuModule,
      MatSelectModule,
      MatTooltipModule,
      CounterComponent,
      AuthenticatedImageDirective,
      IconComponent,
      SchemaFormComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;4c8b7fe2646ecddfcf76b99840d048a4c4066ae3f497b895bd939d142f82f88c;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/templates/template-layout-list.component.ts */\n:host {\n  display: block;\n  height: 100%;\n}\n/*# sourceMappingURL=template-layout-list.component.css.map */\n"] }]
  }], null, { view_tab: [{ type: Input, args: [{ isSignal: true, alias: "tab", required: false }] }, { type: Output, args: ["tabChange"] }], _schema_form: [{ type: ViewChild, args: [forwardRef(() => SchemaFormComponent), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TemplateLayoutListComponent, { className: "TemplateLayoutListComponent", filePath: "apps/signage-manager/src/app/templates/template-layout-list.component.ts", lineNumber: 740 });
})();

// apps/signage-manager/src/app/templates/template-list.component.ts
var _c03 = ["template_item"];
var _c12 = (a0) => ["/templates", a0];
var _c2 = (a0) => ({ name: a0 });
var _c3 = (a0) => ({ count: a0 });
var _forTrack02 = ($index, $item) => $item.id;
function TemplateListComponent_Conditional_6_For_1_Case_12_Template(rf, ctx) {
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
function TemplateListComponent_Conditional_6_For_1_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.APPROVAL_REQUIRED"), " ");
  }
}
function TemplateListComponent_Conditional_6_For_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
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
function TemplateListComponent_Conditional_6_For_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "icon", 21);
    \u0275\u0275text(2, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 22);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 23);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const template_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("opacity-70", ctx_r1.selected()?.id !== template_r1.id)("opacity-90", ctx_r1.selected()?.id === template_r1.id);
    \u0275\u0275property("title", ctx_r1.sharedGroupNames(template_r1));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 7, "SIGNAGE_MANAGER.SHARED_WITH"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.sharedGroupNames(template_r1), " ");
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
    \u0275\u0275conditionalCreate(12, TemplateListComponent_Conditional_6_For_1_Case_12_Template, 3, 3, "span", 15)(13, TemplateListComponent_Conditional_6_For_1_Case_13_Template, 3, 3, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, TemplateListComponent_Conditional_6_For_1_Conditional_14_Template, 2, 5, "div", 17);
    \u0275\u0275conditionalCreate(15, TemplateListComponent_Conditional_6_For_1_Conditional_15_Template, 8, 9, "div", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_19_0;
    const template_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-primary", ctx_r1.selected()?.id === template_r1.id)("text-primary-content", ctx_r1.selected()?.id === template_r1.id)("hover:bg-base-200", ctx_r1.selected()?.id !== template_r1.id);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c12, template_r1.id));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(2, 13, "SIGNAGE_MANAGER.OPEN_TEMPLATE", \u0275\u0275pureFunction1(21, _c2, template_r1.name)));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", template_r1.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 16, "SIGNAGE_MANAGER.TEMPLATE_LAYOUT_COUNT", \u0275\u0275pureFunction1(23, _c3, template_r1.layouts.length)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_19_0 = ctx_r1.getStatus(template_r1)) === "awaiting_review" ? 12 : tmp_19_0 === "awaiting_approval" ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(template_r1.description ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(template_r1.shared_with.length ? 15 : -1);
  }
}
function TemplateListComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
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
    \u0275\u0275repeaterCreate(0, TemplateListComponent_Conditional_6_For_1_Template, 16, 25, "a", 6, _forTrack02);
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
    \u0275\u0275elementStart(0, "div", 5)(1, "icon", 25);
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
  getStatus(template) {
    if (template.approved)
      return null;
    return template.approval_requested ? "awaiting_review" : "awaiting_approval";
  }
  sharedGroupNames(template) {
    return template.shared_with.map(({ name }) => name).join(", ");
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
    }, decls: 8, vars: 8, consts: [["template_item", ""], [1, "bg-base-100", "border-base-300", "h-full", "min-w-64", "overflow-auto", "border-r", "sm:max-w-80"], [1, "border-base-300", "bg-base-100", "sticky", "top-0", "z-10", "border-b", "p-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], [1, "text-base-content/70", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], ["matRipple", "", "queryParamsHandling", "merge", 1, "border-base-300", "relative", "z-0", "flex", "w-full", "cursor-pointer", "items-center", "gap-3", "border-b", "px-2", "py-2", "text-left", "no-underline", "transition-colors", 3, "bg-primary", "text-primary-content", "hover:bg-base-200", "routerLink"], ["intersect", "", 1, "h-px", "w-full"], [1, "text-base-content/50", "bg-base-content/10", "col-span-full", "my-2", "p-2", "text-center", "text-xs"], ["matRipple", "", "queryParamsHandling", "merge", 1, "border-base-300", "relative", "z-0", "flex", "w-full", "cursor-pointer", "items-center", "gap-3", "border-b", "px-2", "py-2", "text-left", "no-underline", "transition-colors", 3, "routerLink"], [1, "shrink-0", "text-3xl", "opacity-60"], [1, "min-w-0", "flex-1", "pr-2"], [1, "truncate", "font-medium"], [1, "flex", "flex-wrap", "gap-1", "text-[0.625rem]", "font-medium", "uppercase"], [1, "bg-base-200", "text-base-content", "shrink-0", "rounded", "px-1.5", "py-0.5"], [1, "bg-warning", "text-warning-content", "shrink-0", "rounded", "px-1.5", "py-0.5"], [1, "bg-base-300", "shrink-0", "rounded", "px-1.5", "py-0.5"], [1, "mt-0.5", "truncate", "text-xs", 3, "opacity-70", "opacity-90"], [1, "mt-0.5", "flex", "min-w-0", "items-center", "gap-1", "text-xs", 3, "opacity-70", "opacity-90", "title"], [1, "mt-0.5", "truncate", "text-xs"], [1, "mt-0.5", "flex", "min-w-0", "items-center", "gap-1", "text-xs", 3, "title"], [1, "shrink-0", "text-base"], [1, "shrink-0"], [1, "truncate"], ["intersect", "", 1, "h-px", "w-full", 3, "intersect"], [1, "text-6xl"]], template: function TemplateListComponent_Template(rf, ctx) {
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
                                @switch (getStatus(template)) {
                                    @case ('awaiting_review') {
                                        <span
                                            class="bg-warning text-warning-content shrink-0 rounded px-1.5 py-0.5"
                                        >
                                            {{
                                                'SIGNAGE_MANAGER.STATUS_AWAITING_REVIEW'
                                                    | translate
                                            }}
                                        </span>
                                    }
                                    @case ('awaiting_approval') {
                                        <span
                                            class="bg-base-300 shrink-0 rounded px-1.5 py-0.5"
                                        >
                                            {{
                                                'COMMON.APPROVAL_REQUIRED'
                                                    | translate
                                            }}
                                        </span>
                                    }
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
                            @if (template.shared_with.length) {
                                <div
                                    class="mt-0.5 flex min-w-0 items-center gap-1 text-xs"
                                    [class.opacity-70]="
                                        selected()?.id !== template.id
                                    "
                                    [class.opacity-90]="
                                        selected()?.id === template.id
                                    "
                                    [title]="sharedGroupNames(template)"
                                >
                                    <icon class="shrink-0 text-base"
                                        >groups</icon
                                    >
                                    <span class="shrink-0">
                                        {{
                                            'SIGNAGE_MANAGER.SHARED_WITH'
                                                | translate
                                        }}:
                                    </span>
                                    <span class="truncate">
                                        {{ sharedGroupNames(template) }}
                                    </span>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TemplateListComponent, { className: "TemplateListComponent", filePath: "apps/signage-manager/src/app/templates/template-list.component.ts", lineNumber: 194 });
})();

// apps/signage-manager/src/app/templates/template-preview.component.ts
var _c04 = ["live_frame"];
var _forTrack03 = ($index, $item) => $item.id;
function TemplatePreviewComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function TemplatePreviewComponent_For_5_Template_button_click_0_listener() {
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
function TemplatePreviewComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const display_r4 = ctx.$implicit;
    \u0275\u0275property("value", display_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", display_r4.display_name || display_r4.name, " ");
  }
}
function TemplatePreviewComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "iframe", 15, 0);
    \u0275\u0275pipe(2, "safe");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("load", function TemplatePreviewComponent_Conditional_18_Template_iframe_load_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.postDraftLayouts());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("src", \u0275\u0275pipeBind2(2, 2, ctx_r2.live_preview_url(), "resource"), \u0275\u0275sanitizeResourceUrl)("title", \u0275\u0275pipeBind1(3, 5, "SIGNAGE_MANAGER.TEMPLATE_LIVE_PREVIEW"));
  }
}
function TemplatePreviewComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 13);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("source", ctx_r2.background_url())("alt", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.TEMPLATE_BACKGROUND"));
  }
}
function TemplatePreviewComponent_Conditional_20_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function TemplatePreviewComponent_Conditional_20_For_1_Template_button_click_0_listener() {
      const $index_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectLayout($index_r7));
    });
    \u0275\u0275elementStart(2, "div", 19);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 20);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const $index_r7 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("left", item_r8.rect.left, "%")("top", item_r8.rect.top, "%")("width", item_r8.rect.width, "%")("height", item_r8.rect.height, "%");
    \u0275\u0275classProp("border-primary", ctx_r2.selected_index() === $index_r7)("bg-primary/40", ctx_r2.selected_index() === $index_r7 && item_r8.layout.plugin_id)("bg-primary/15", ctx_r2.selected_index() === $index_r7 && !item_r8.layout.plugin_id)("z-10", ctx_r2.selected_index() === $index_r7)("border-white/60", ctx_r2.selected_index() !== $index_r7 && item_r8.layout.plugin_id)("border-white/40", ctx_r2.selected_index() !== $index_r7 && !item_r8.layout.plugin_id)("border-dashed", !item_r8.layout.plugin_id)("backdrop-blur-sm", item_r8.layout.plugin_id)("bg-black/60", ctx_r2.selected_index() !== $index_r7 && item_r8.layout.plugin_id)("bg-black/10", ctx_r2.selected_index() !== $index_r7 && !item_r8.layout.plugin_id)("hover:bg-black/70", ctx_r2.selected_index() !== $index_r7 && item_r8.layout.plugin_id)("hover:bg-black/20", ctx_r2.selected_index() !== $index_r7 && !item_r8.layout.plugin_id);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 36, ctx_r2.positionLabel(item_r8.layout.position)))("aria-pressed", ctx_r2.selected_index() === $index_r7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 38, ctx_r2.positionLabel(item_r8.layout.position)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.pluginName(item_r8.layout.plugin_id) || \u0275\u0275pipeBind1(7, 40, "SIGNAGE_MANAGER.TEMPLATE_NO_PLUGIN"), " ");
  }
}
function TemplatePreviewComponent_Conditional_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.TEMPLATE_NO_LAYOUTS_HINT"), " ");
  }
}
function TemplatePreviewComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, TemplatePreviewComponent_Conditional_20_For_1_Template, 8, 42, "button", 16, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(2, TemplatePreviewComponent_Conditional_20_Conditional_2_Template, 3, 3, "div", 17);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.layout_rects());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.layout_rects().length ? 2 : -1);
  }
}
var PREVIEW_LAYOUTS_MESSAGE = "signage:template-layouts";
var PREVIEW_READY_MESSAGE = "signage:template-preview-ready";
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
    this.selected_display_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "selected_display_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.live_mode = signal(
      false,
      ...ngDevMode ? [{ debugName: "live_mode" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.displays = this._service.displays;
    this.signage_path = settingSignal("signage_path");
    this.selected_index = this._service.selected_template_layout_index;
    this._layouts = this._service.template_layout_draft;
    this._live_frame = viewChild(
      "live_frame",
      ...ngDevMode ? [{ debugName: "_live_frame" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._sync_draft = effect(
      () => {
        this._layouts();
        this.postDraftLayouts();
      },
      ...ngDevMode ? [{ debugName: "_sync_draft" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._preview_ready_handler = (event) => {
      const frame = this._live_frame()?.nativeElement;
      if (event.data?.type !== PREVIEW_READY_MESSAGE || !frame?.contentWindow || event.source !== frame.contentWindow)
        return;
      this.postDraftLayouts();
    };
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
        return background_id ? Gh(background_id) : "";
      },
      ...ngDevMode ? [{ debugName: "background_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.live_template_id = computed(
      () => {
        const template = this._service.selected_template();
        return template?.live_template_id || template?.id || "";
      },
      ...ngDevMode ? [{ debugName: "live_template_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.live_preview_available = computed(
      () => {
        return !!this.live_template_id() && !!this.selected_display_id();
      },
      ...ngDevMode ? [{ debugName: "live_preview_available" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.live_preview_url = computed(
      () => {
        const template_id = this.live_template_id();
        const display_id = this.selected_display_id();
        if (!template_id || !display_id)
          return "";
        const signage_path = this.signage_path() || "/signage";
        return `${signage_path.replace(/\/$/, "")}/#/template/${encodeURIComponent(template_id)}/${encodeURIComponent(display_id)}?debug=true`;
      },
      ...ngDevMode ? [{ debugName: "live_preview_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.positionLabel = layoutPositionLabel;
    window.addEventListener("message", this._preview_ready_handler);
    inject(DestroyRef).onDestroy(() => window.removeEventListener("message", this._preview_ready_handler));
  }
  /** Send the unsaved layout draft to the live player iframe */
  postDraftLayouts() {
    const frame = this._live_frame()?.nativeElement;
    if (!frame?.contentWindow)
      return;
    frame.contentWindow.postMessage({
      type: PREVIEW_LAYOUTS_MESSAGE,
      layouts: this._layouts().map(applyLayoutPositionDefaults)
    }, "*");
  }
  selectLayout(index) {
    this.selected_index.set(this.selected_index() === index ? null : index);
  }
  pluginName(plugin_id) {
    if (!plugin_id)
      return "";
    return this._service.widgets().find((item) => item.id === plugin_id)?.name || plugin_id;
  }
  static {
    this.\u0275fac = function TemplatePreviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TemplatePreviewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TemplatePreviewComponent, selectors: [["template-preview"]], viewQuery: function TemplatePreviewComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._live_frame, _c04, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, decls: 21, vars: 27, consts: [["live_frame", ""], [1, "flex", "h-full", "min-h-0", "flex-col"], [1, "flex", "flex-wrap", "items-center", "gap-2", "px-4", "py-2"], ["role", "radiogroup", 1, "flex", "flex-wrap", "items-center", "gap-2"], ["type", "button", "role", "radio", "matRipple", "", 1, "rounded-lg", "border", "px-3", "py-1.5", "text-sm", "font-medium", "transition-colors", 3, "border-primary", "bg-primary", "text-primary-content", "border-base-300", "hover:bg-base-200"], [1, "min-w-4", "flex-1"], ["appearance", "outline", 1, "no-subscript", "w-full", "sm:w-64"], [3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [3, "ngModelChange", "toggle", "label", "info", "inline", "ngModel"], [1, "preview-frame-container", "flex", "min-h-0", "flex-1", "items-center", "justify-center", "overflow-hidden", "p-4"], [1, "preview-frame", "relative", "overflow-hidden", "rounded-lg", "bg-neutral-900", "shadow-lg", "ring-1", "ring-black/20"], ["allow", "autoplay; fullscreen", 1, "absolute", "inset-0", "h-full", "w-full", "border-0", 3, "src", "title"], ["auth", "", 1, "absolute", "inset-0", "h-full", "w-full", "object-cover", "opacity-80", 3, "source", "alt"], ["type", "button", "role", "radio", "matRipple", "", 1, "rounded-lg", "border", "px-3", "py-1.5", "text-sm", "font-medium", "transition-colors", 3, "click"], ["allow", "autoplay; fullscreen", 1, "absolute", "inset-0", "h-full", "w-full", "border-0", 3, "load", "src", "title"], ["type", "button", 1, "absolute", "flex", "flex-col", "items-center", "justify-center", "overflow-hidden", "border-2", "leading-none", "transition-colors", 3, "border-primary", "bg-primary/40", "bg-primary/15", "z-10", "border-white/60", "border-white/40", "border-dashed", "backdrop-blur-sm", "bg-black/60", "bg-black/10", "hover:bg-black/70", "hover:bg-black/20", "left", "top", "width", "height"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "p-4", "text-center", "text-sm", "text-white/60"], ["type", "button", 1, "absolute", "flex", "flex-col", "items-center", "justify-center", "overflow-hidden", "border-2", "leading-none", "transition-colors", 3, "click"], [1, "text-base-content", "text-shadow-base-100", "truncate", "px-2", "text-sm", "font-semibold", "uppercase", "text-shadow-lg"], [1, "text-base-content/60", "text-shadow-base-100", "truncate", "px-2", "text-sm", "text-shadow-lg"]], template: function TemplatePreviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275repeaterCreate(4, TemplatePreviewComponent_For_5_Template, 2, 12, "button", 4, _forTrack03);
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "div", 5);
        \u0275\u0275elementStart(7, "mat-form-field", 6)(8, "mat-select", 7);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function TemplatePreviewComponent_Template_mat_select_ngModelChange_8_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selected_display_id, $event) || (ctx.selected_display_id = $event);
          return $event;
        });
        \u0275\u0275repeaterCreate(11, TemplatePreviewComponent_For_12_Template, 2, 2, "mat-option", 8, _forTrack03);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "settings-toggle", 9);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function TemplatePreviewComponent_Template_settings_toggle_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.live_mode, $event) || (ctx.live_mode = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 10)(17, "div", 11);
        \u0275\u0275conditionalCreate(18, TemplatePreviewComponent_Conditional_18_Template, 4, 7, "iframe", 12)(19, TemplatePreviewComponent_Conditional_19_Template, 2, 4, "img", 13);
        \u0275\u0275conditionalCreate(20, TemplatePreviewComponent_Conditional_20_Template, 3, 1);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 17, "SIGNAGE_MANAGER.TEMPLATE_ASPECT_RATIO"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.aspect_ratios);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.selected_display_id);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 19, "SIGNAGE_MANAGER.TEMPLATE_SELECT_DISPLAY"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 21, "SIGNAGE_MANAGER.TEMPLATE_SELECT_DISPLAY"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.displays());
        \u0275\u0275advance(2);
        \u0275\u0275classProp("opacity-50", !ctx.live_preview_available());
        \u0275\u0275property("toggle", true)("label", \u0275\u0275pipeBind1(14, 23, "SIGNAGE_MANAGER.TEMPLATE_LIVE_MODE"))("info", \u0275\u0275pipeBind1(15, 25, "SIGNAGE_MANAGER.TEMPLATE_LIVE_MODE_HINT"))("inline", false);
        \u0275\u0275twoWayProperty("ngModel", ctx.live_mode);
        \u0275\u0275attribute("aria-disabled", !ctx.live_preview_available())("inert", !ctx.live_preview_available() ? "" : null);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275styleProp("--%NS%ratio", ctx.aspect().ratio);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.live_mode() && ctx.live_preview_available() ? 18 : ctx.background_url() ? 19 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.live_mode() ? 20 : -1);
      }
    }, dependencies: [
      FormsModule,
      NgControlStatus,
      NgModel,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      SettingsToggleComponent,
      AuthenticatedImageDirective,
      SafePipe,
      TranslatePipe
    ], styles: ["\n.preview-frame-container[_ngcontent-%COMP%] {\n  container-type: size;\n}\n.preview-frame[_ngcontent-%COMP%] {\n  width: min(100%, calc(100cqh * var(--%NS%ratio)));\n  aspect-ratio: var(--%NS%ratio);\n}\n/*# sourceMappingURL=template-preview.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplatePreviewComponent, [{
    type: Component,
    args: [{ selector: "template-preview", template: `
        <div class="flex h-full min-h-0 flex-col">
            <div class="flex flex-wrap items-center gap-2 px-4 py-2">
                <div
                    class="flex flex-wrap items-center gap-2"
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
                            [class.text-primary-content]="
                                aspect().id === option.id
                            "
                            [class.border-base-300]="aspect().id !== option.id"
                            [class.hover:bg-base-200]="
                                aspect().id !== option.id
                            "
                            (click)="aspect.set(option)"
                            [attr.aria-checked]="aspect().id === option.id"
                        >
                            {{ option.label }}
                        </button>
                    }
                </div>
                <div class="min-w-4 flex-1"></div>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full sm:w-64"
                >
                    <mat-select
                        [(ngModel)]="selected_display_id"
                        [placeholder]="
                            'SIGNAGE_MANAGER.TEMPLATE_SELECT_DISPLAY'
                                | translate
                        "
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.TEMPLATE_SELECT_DISPLAY'
                                | translate
                        "
                    >
                        @for (display of displays(); track display.id) {
                            <mat-option [value]="display.id">
                                {{ display.display_name || display.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
                <settings-toggle
                    [toggle]="true"
                    [label]="'SIGNAGE_MANAGER.TEMPLATE_LIVE_MODE' | translate"
                    [info]="
                        'SIGNAGE_MANAGER.TEMPLATE_LIVE_MODE_HINT' | translate
                    "
                    [inline]="false"
                    [(ngModel)]="live_mode"
                    [class.opacity-50]="!live_preview_available()"
                    [attr.aria-disabled]="!live_preview_available()"
                    [attr.inert]="!live_preview_available() ? '' : null"
                />
            </div>
            <div
                class="preview-frame-container flex min-h-0 flex-1 items-center justify-center overflow-hidden p-4"
            >
                <div
                    class="preview-frame relative overflow-hidden rounded-lg bg-neutral-900 shadow-lg ring-1 ring-black/20"
                    [style.--ratio]="aspect().ratio"
                >
                    @if (live_mode() && live_preview_available()) {
                        <iframe
                            #live_frame
                            class="absolute inset-0 h-full w-full border-0"
                            [src]="live_preview_url() | safe: 'resource'"
                            (load)="postDraftLayouts()"
                            [title]="
                                'SIGNAGE_MANAGER.TEMPLATE_LIVE_PREVIEW'
                                    | translate
                            "
                            allow="autoplay; fullscreen"
                        ></iframe>
                    } @else if (background_url()) {
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
                    @if (!live_mode()) {
                        @for (item of layout_rects(); track $index) {
                            <button
                                type="button"
                                class="absolute flex flex-col items-center justify-center overflow-hidden border-2 leading-none transition-colors"
                                [class.border-primary]="
                                    selected_index() === $index
                                "
                                [class.bg-primary/40]="
                                    selected_index() === $index &&
                                    item.layout.plugin_id
                                "
                                [class.bg-primary/15]="
                                    selected_index() === $index &&
                                    !item.layout.plugin_id
                                "
                                [class.z-10]="selected_index() === $index"
                                [class.border-white/60]="
                                    selected_index() !== $index &&
                                    item.layout.plugin_id
                                "
                                [class.border-white/40]="
                                    selected_index() !== $index &&
                                    !item.layout.plugin_id
                                "
                                [class.border-dashed]="!item.layout.plugin_id"
                                [class.backdrop-blur-sm]="item.layout.plugin_id"
                                [class.bg-black/60]="
                                    selected_index() !== $index &&
                                    item.layout.plugin_id
                                "
                                [class.bg-black/10]="
                                    selected_index() !== $index &&
                                    !item.layout.plugin_id
                                "
                                [class.hover:bg-black/70]="
                                    selected_index() !== $index &&
                                    item.layout.plugin_id
                                "
                                [class.hover:bg-black/20]="
                                    selected_index() !== $index &&
                                    !item.layout.plugin_id
                                "
                                [style.left.%]="item.rect.left"
                                [style.top.%]="item.rect.top"
                                [style.width.%]="item.rect.width"
                                [style.height.%]="item.rect.height"
                                (click)="selectLayout($index)"
                                [attr.aria-label]="
                                    positionLabel(item.layout.position)
                                        | translate
                                "
                                [attr.aria-pressed]="
                                    selected_index() === $index
                                "
                            >
                                <div
                                    class="text-base-content text-shadow-base-100 truncate px-2 text-sm font-semibold uppercase text-shadow-lg"
                                >
                                    {{
                                        positionLabel(item.layout.position)
                                            | translate
                                    }}
                                </div>
                                <div
                                    class="text-base-content/60 text-shadow-base-100 truncate px-2 text-sm text-shadow-lg"
                                >
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
                    }
                </div>
            </div>
        </div>
    `, imports: [
      FormsModule,
      MatRippleModule,
      MatFormFieldModule,
      MatSelectModule,
      SafePipe,
      SettingsToggleComponent,
      TranslatePipe,
      AuthenticatedImageDirective
    ], styles: ["/* angular:styles/component:css;cf46aa844b6fe17cca3b562dcbc16f7d8d747cf1e5cb81b3a6bcee48c83c4f4f;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/templates/template-preview.component.ts */\n.preview-frame-container {\n  container-type: size;\n}\n.preview-frame {\n  width: min(100%, calc(100cqh * var(--ratio)));\n  aspect-ratio: var(--ratio);\n}\n/*# sourceMappingURL=template-preview.component.css.map */\n"] }]
  }], () => [], { _live_frame: [{ type: ViewChild, args: ["live_frame", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TemplatePreviewComponent, { className: "TemplatePreviewComponent", filePath: "apps/signage-manager/src/app/templates/template-preview.component.ts", lineNumber: 263 });
})();

// apps/signage-manager/src/app/templates/templates.component.ts
var _forTrack04 = ($index, $item) => $item.id;
function TemplatesSectionComponent_Conditional_7_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const template_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", template_r3.description, " ");
  }
}
function TemplatesSectionComponent_Conditional_7_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function TemplatesSectionComponent_Conditional_7_Conditional_10_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.approveTemplate());
    });
    \u0275\u0275elementStart(3, "icon", 22);
    \u0275\u0275text(4, "order_approve");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.APPROVE_TEMPLATE_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.APPROVE_SELECTED_TEMPLATE"));
  }
}
function TemplatesSectionComponent_Conditional_7_Conditional_10_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 24);
  }
}
function TemplatesSectionComponent_Conditional_7_Conditional_10_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 22);
    \u0275\u0275text(1, "approval");
    \u0275\u0275elementEnd();
  }
}
function TemplatesSectionComponent_Conditional_7_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function TemplatesSectionComponent_Conditional_7_Conditional_10_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.requestApproval());
    });
    \u0275\u0275conditionalCreate(3, TemplatesSectionComponent_Conditional_7_Conditional_10_Conditional_1_Conditional_3_Template, 1, 0, "mat-spinner", 24)(4, TemplatesSectionComponent_Conditional_7_Conditional_10_Conditional_1_Conditional_4_Template, 2, 0, "icon", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 4, "SIGNAGE_MANAGER.REQUEST_TEMPLATE_APPROVAL_TOOLTIP"))("disabled", ctx_r1.approval_request_loading());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 6, "SIGNAGE_MANAGER.REQUEST_APPROVAL_SELECTED_TEMPLATE"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.approval_request_loading() ? 3 : 4);
  }
}
function TemplatesSectionComponent_Conditional_7_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, TemplatesSectionComponent_Conditional_7_Conditional_10_Conditional_0_Template, 5, 6, "button", 13)(1, TemplatesSectionComponent_Conditional_7_Conditional_10_Conditional_1_Template, 5, 8, "button", 20);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.can_approve() ? 0 : 1);
  }
}
function TemplatesSectionComponent_Conditional_7_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function TemplatesSectionComponent_Conditional_7_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
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
function TemplatesSectionComponent_Conditional_7_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function TemplatesSectionComponent_Conditional_7_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.duplicateTemplate());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "content_copy");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.DUPLICATE_TEMPLATE_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.DUPLICATE_SELECTED_TEMPLATE"));
  }
}
function TemplatesSectionComponent_Conditional_7_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function TemplatesSectionComponent_Conditional_7_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.shareTemplate());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "ios_share");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.SHARE_TEMPLATE_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.SHARE_SELECTED_TEMPLATE"));
  }
}
function TemplatesSectionComponent_Conditional_7_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function TemplatesSectionComponent_Conditional_7_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
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
function TemplatesSectionComponent_Conditional_7_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function TemplatesSectionComponent_Conditional_7_For_18_Template_button_click_0_listener() {
      const tab_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setViewTab(tab_r11.id));
    })("keydown", function TemplatesSectionComponent_Conditional_7_For_18_Template_button_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleTabKeydown($event));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-primary", ctx_r1.view_tab() === tab_r11.id)("border-b-2", ctx_r1.view_tab() === tab_r11.id)("text-primary", ctx_r1.view_tab() === tab_r11.id)("opacity-60", ctx_r1.view_tab() !== tab_r11.id);
    \u0275\u0275property("tabIndex", ctx_r1.view_tab() === tab_r11.id ? 0 : -1)("id", "template-" + tab_r11.id + "-tab");
    \u0275\u0275attribute("aria-selected", ctx_r1.view_tab() === tab_r11.id)("aria-controls", "template-" + tab_r11.id + "-panel");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 13, tab_r11.label), " ");
  }
}
function TemplatesSectionComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "button", 9);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function TemplatesSectionComponent_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deselectTemplate());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 10)(6, "h4", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, TemplatesSectionComponent_Conditional_7_Conditional_8_Template, 2, 1, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "div");
    \u0275\u0275conditionalCreate(10, TemplatesSectionComponent_Conditional_7_Conditional_10_Template, 2, 1);
    \u0275\u0275conditionalCreate(11, TemplatesSectionComponent_Conditional_7_Conditional_11_Template, 5, 6, "button", 13);
    \u0275\u0275conditionalCreate(12, TemplatesSectionComponent_Conditional_7_Conditional_12_Template, 5, 6, "button", 13);
    \u0275\u0275conditionalCreate(13, TemplatesSectionComponent_Conditional_7_Conditional_13_Template, 5, 6, "button", 13);
    \u0275\u0275conditionalCreate(14, TemplatesSectionComponent_Conditional_7_Conditional_14_Template, 5, 6, "button", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275repeaterCreate(17, TemplatesSectionComponent_Conditional_7_For_18_Template, 3, 15, "button", 16, _forTrack04);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 17);
    \u0275\u0275element(20, "template-preview", 18);
    \u0275\u0275elementStart(21, "template-layout-list", 19);
    \u0275\u0275listener("tabChange", function TemplatesSectionComponent_Conditional_7_Template_template_layout_list_tabChange_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setLayoutTab($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const template_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 18, "SIGNAGE_MANAGER.BACK_TO_TEMPLATES"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", template_r3.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(template_r3.description ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.requires_approval() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_update() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_create() ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_share() ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_delete() ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(16, 20, "COMMON.DETAILS"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.tabs);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("tablet-hidden", ctx_r1.view_tab() !== "preview");
    \u0275\u0275advance();
    \u0275\u0275classProp("tablet-hidden", ctx_r1.view_tab() === "preview")("tablet-full", ctx_r1.view_tab() !== "preview");
    \u0275\u0275property("id", "template-" + ctx_r1.view_tab() + "-panel")("tab", ctx_r1.view_tab() === "details" ? "details" : "items");
    \u0275\u0275attribute("aria-labelledby", "template-" + ctx_r1.view_tab() + "-tab");
  }
}
function TemplatesSectionComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "icon", 27);
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
    this.tabs = [
      { id: "preview", label: "COMMON.PREVIEW" },
      { id: "layouts", label: "SIGNAGE_MANAGER.TEMPLATE_LAYOUT_ITEMS" },
      { id: "details", label: "COMMON.DETAILS" }
    ];
    this.view_tab = signal(
      "preview",
      ...ngDevMode ? [{ debugName: "view_tab" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_template = this._service.selected_template;
    this.requires_approval = this._service.selected_template_requires_approval;
    this.can_approve = this._service.can_approve;
    this.can_update = this._service.can_update_templates;
    this.can_create = this._service.can_create_templates;
    this.can_delete = this._service.can_delete_templates;
    this.can_share = this._service.can_share;
    this.approval_request_loading = this._service.template_approval_request_loading;
    this._templates = this._service.templates;
    this._route_resolved = false;
    effect(() => {
      const id = this.id();
      const list = this._templates();
      if (!list.length)
        return;
      if (id) {
        const match = list.find((template) => template.id === id || template.live_template_id === id);
        const selected = this._service.selected_template();
        const same_template = !!selected && !!match && isSameSignageTemplate(selected, match);
        if (match && selected !== match && !(same_template && this._service.template_layout_dirty())) {
          this._service.selected_template.set(match);
          if (!same_template) {
            this._service.selected_template_layout_index.set(null);
          }
        }
        if (match?.id && match.id !== id) {
          void this._router.navigate(["/templates", match.id], {
            queryParamsHandling: "merge",
            replaceUrl: true
          });
        } else if (!match) {
          const selected_template = this._service.selected_template();
          if (selected_template?.id && list.some((template) => template.id === selected_template.id)) {
            void this._router.navigate(["/templates", selected_template.id], {
              queryParamsHandling: "merge",
              replaceUrl: true
            });
          }
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
  async duplicateTemplate() {
    const template = this.selected_template();
    if (!template)
      return;
    const copy = await this._service.duplicateTemplate(template);
    if (copy?.id) {
      void this._router.navigate(["/templates", copy.id], {
        queryParamsHandling: "merge"
      });
    }
  }
  shareTemplate() {
    const template = this.selected_template();
    if (template)
      this._service.shareTemplate(template);
  }
  approveTemplate() {
    const template = this.selected_template();
    if (template)
      this._service.approveTemplate(template);
  }
  requestApproval() {
    const template = this.selected_template();
    if (template)
      this._service.requestTemplateApproval(template);
  }
  async deselectTemplate() {
    const navigated = await this._router.navigate(["/templates"], {});
    if (!navigated)
      return;
    this._service.selected_template.set(null);
    this._service.selected_template_layout_index.set(null);
  }
  /** Asks the browser to warn before a reload or tab close drops unsaved layout edits */
  onBeforeUnload(event) {
    if (this._service.template_layout_dirty())
      event.preventDefault();
  }
  setViewTab(tab) {
    this.view_tab.set(tab);
  }
  /** Mirror the layout list's inner tab into the mobile tabs. */
  setLayoutTab(tab) {
    this.view_tab.set(tab === "details" ? "details" : "layouts");
  }
  handleTabKeydown(event) {
    const ids = this.tabs.map(({ id }) => id);
    const index = ids.indexOf(this.view_tab());
    let next;
    if (event.key === "Home")
      next = 0;
    else if (event.key === "End")
      next = ids.length - 1;
    else if (event.key === "ArrowLeft") {
      next = (index - 1 + ids.length) % ids.length;
    } else if (event.key === "ArrowRight") {
      next = (index + 1) % ids.length;
    } else
      return;
    event.preventDefault();
    this.view_tab.set(ids[next]);
    event.currentTarget?.parentElement?.querySelectorAll('[role="tab"]')[next]?.focus();
  }
  static {
    this.\u0275fac = function TemplatesSectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TemplatesSectionComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TemplatesSectionComponent, selectors: [["templates-section"]], hostBindings: function TemplatesSectionComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("beforeunload", function TemplatesSectionComponent_beforeunload_HostBindingHandler($event) {
          return ctx.onBeforeUnload($event);
        }, \u0275\u0275resolveWindow);
      }
    }, inputs: { id: [1, "id"] }, decls: 10, vars: 5, consts: [[1, "bg-base-200", "absolute", "inset-0", "flex", "flex-col", "sm:flex-row"], [1, "sm:h-full"], [1, "flex", "min-h-0", "flex-1", "flex-col"], [1, "relative", "z-10"], [1, "flex", "min-h-0", "flex-1", "flex-row"], [1, "mobile-full"], [1, "flex", "min-h-0", "w-px", "flex-1", "flex-col"], [1, "text-base-content/70", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "bg-base-100", "border-base-300", "mx-2", "flex", "items-center", "gap-2", "rounded-b-lg", "border", "p-2"], ["icon", "", "default", "", "type", "button", "matRipple", "", 1, "desktop-hidden", 3, "click"], [1, "flex", "w-1/2", "flex-1", "flex-col", "px-2"], [1, "truncate", "text-lg", "font-medium"], [1, "-mt-1", "truncate", "text-xs"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "matTooltip"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 3, "matTooltip"], ["role", "tablist", 1, "bg-base-100", "border-base-300", "mx-2", "my-2", "flex", "rounded-lg", "border", "lg:hidden"], ["type", "button", "role", "tab", 1, "flex-1", "px-4", "py-2.5", "text-sm", "font-medium", "transition-colors", 3, "border-primary", "border-b-2", "text-primary", "opacity-60", "tabIndex", "id"], [1, "flex", "min-h-0", "flex-1", "flex-row", "overflow-hidden"], ["id", "template-preview-panel", "role", "tabpanel", "aria-labelledby", "template-preview-tab", 1, "min-h-0", "w-full", "flex-1", "lg:w-px"], ["role", "tabpanel", 1, "h-full", "shrink-0", 3, "tabChange", "id", "tab"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "matTooltip", "disabled"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], [1, "text-warning"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "matTooltip", "disabled"], ["diameter", "20"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], ["type", "button", "role", "tab", 1, "flex-1", "px-4", "py-2.5", "text-sm", "font-medium", "transition-colors", 3, "click", "keydown", "tabIndex", "id"], [1, "text-6xl"]], template: function TemplatesSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "nav-sidebar", 1);
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275element(3, "template-header", 3);
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275element(5, "template-list", 5);
        \u0275\u0275elementStart(6, "div", 6);
        \u0275\u0275conditionalCreate(7, TemplatesSectionComponent_Conditional_7_Template, 22, 22)(8, TemplatesSectionComponent_Conditional_8_Template, 6, 3, "div", 7);
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
      MatProgressSpinnerModule,
      MatProgressSpinner,
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
                                    class="desktop-hidden"
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
                                @if (requires_approval()) {
                                    @if (can_approve()) {
                                        <button
                                            icon
                                            default
                                            type="button"
                                            matRipple
                                            [matTooltip]="
                                                'SIGNAGE_MANAGER.APPROVE_TEMPLATE_TOOLTIP'
                                                    | translate
                                            "
                                            (click)="approveTemplate()"
                                            [attr.aria-label]="
                                                'SIGNAGE_MANAGER.APPROVE_SELECTED_TEMPLATE'
                                                    | translate
                                            "
                                        >
                                            <icon class="text-warning"
                                                >order_approve</icon
                                            >
                                        </button>
                                    } @else {
                                        <button
                                            icon
                                            default
                                            type="button"
                                            matRipple
                                            [matTooltip]="
                                                'SIGNAGE_MANAGER.REQUEST_TEMPLATE_APPROVAL_TOOLTIP'
                                                    | translate
                                            "
                                            (click)="requestApproval()"
                                            [disabled]="
                                                approval_request_loading()
                                            "
                                            [attr.aria-label]="
                                                'SIGNAGE_MANAGER.REQUEST_APPROVAL_SELECTED_TEMPLATE'
                                                    | translate
                                            "
                                        >
                                            @if (approval_request_loading()) {
                                                <mat-spinner diameter="20" />
                                            } @else {
                                                <icon class="text-warning"
                                                    >approval</icon
                                                >
                                            }
                                        </button>
                                    }
                                }
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
                                @if (can_create()) {
                                    <button
                                        icon
                                        default
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.DUPLICATE_TEMPLATE_TOOLTIP'
                                                | translate
                                        "
                                        (click)="duplicateTemplate()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.DUPLICATE_SELECTED_TEMPLATE'
                                                | translate
                                        "
                                    >
                                        <icon>content_copy</icon>
                                    </button>
                                }
                                @if (can_share()) {
                                    <button
                                        icon
                                        default
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.SHARE_TEMPLATE_TOOLTIP'
                                                | translate
                                        "
                                        (click)="shareTemplate()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.SHARE_SELECTED_TEMPLATE'
                                                | translate
                                        "
                                    >
                                        <icon>ios_share</icon>
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
                                @for (tab of tabs; track tab.id) {
                                    <button
                                        type="button"
                                        role="tab"
                                        class="flex-1 px-4 py-2.5 text-sm font-medium transition-colors"
                                        [class.border-primary]="
                                            view_tab() === tab.id
                                        "
                                        [class.border-b-2]="
                                            view_tab() === tab.id
                                        "
                                        [class.text-primary]="
                                            view_tab() === tab.id
                                        "
                                        [class.opacity-60]="
                                            view_tab() !== tab.id
                                        "
                                        (click)="setViewTab(tab.id)"
                                        (keydown)="handleTabKeydown($event)"
                                        [attr.aria-selected]="
                                            view_tab() === tab.id
                                        "
                                        [tabIndex]="
                                            view_tab() === tab.id ? 0 : -1
                                        "
                                        [attr.aria-controls]="
                                            'template-' + tab.id + '-panel'
                                        "
                                        [id]="'template-' + tab.id + '-tab'"
                                    >
                                        {{ tab.label | translate }}
                                    </button>
                                }
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
                                        view_tab() !== 'preview'
                                    "
                                />
                                <template-layout-list
                                    role="tabpanel"
                                    class="h-full shrink-0"
                                    [id]="'template-' + view_tab() + '-panel'"
                                    [attr.aria-labelledby]="
                                        'template-' + view_tab() + '-tab'
                                    "
                                    [class.tablet-hidden]="
                                        view_tab() === 'preview'
                                    "
                                    [class.tablet-full]="
                                        view_tab() !== 'preview'
                                    "
                                    [tab]="
                                        view_tab() === 'details'
                                            ? 'details'
                                            : 'items'
                                    "
                                    (tabChange)="setLayoutTab($event)"
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
    `, host: { "(window:beforeunload)": "onBeforeUnload($event)" }, imports: [
      NavSidebarComponent,
      NavFooterComponent,
      TemplateHeaderComponent,
      TemplateListComponent,
      TemplatePreviewComponent,
      TemplateLayoutListComponent,
      MatRippleModule,
      MatProgressSpinnerModule,
      MatTooltipModule,
      IconComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;291dd75aed1604695cdb603225bb6e72f070a26c29e0e51b6d4e02e2cf76f84b;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/templates/templates.component.ts */\n@media (max-width: 639px) {\n  .mobile-hidden {\n    display: none !important;\n  }\n}\n@media (max-width: 639px) {\n  .mobile-full {\n    flex: 1;\n  }\n}\n@media (max-width: 1023px) {\n  .tablet-hidden {\n    display: none !important;\n  }\n}\n@media (max-width: 1023px) {\n  .tablet-full {\n    flex: 1;\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=templates.component.css.map */\n"] }]
  }], () => [], { id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TemplatesSectionComponent, { className: "TemplatesSectionComponent", filePath: "apps/signage-manager/src/app/templates/templates.component.ts", lineNumber: 326 });
})();
export {
  TemplatesSectionComponent
};
//# debugId=061728d2-1467-5ffd-b839-8db637e994e6
//# sourceMappingURL=templates.component-K2XK6GTZ.js.map
