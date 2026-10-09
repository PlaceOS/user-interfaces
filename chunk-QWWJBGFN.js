import {
  SignageZoneService
} from "./chunk-UJ2O3SYI.js";
import {
  AuthenticatedImageDirective
} from "./chunk-SLLMOXD7.js";
import {
  playlistScheduleExpiryTooltip,
  playlistScheduleLabel,
  playlistScheduleNextPlayLabels
} from "./chunk-76L3RQJV.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-GF5I6UHA.js";
import {
  SignageTemplateService,
  computeTemplateLayoutRects
} from "./chunk-FGDWCGX6.js";
import {
  SignageContextService
} from "./chunk-NVC2MTBW.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-ARJ6GFJX.js";
import {
  TranslatePipe
} from "./chunk-KEXLIPA2.js";
import {
  RouterLink
} from "./chunk-E72MB55H.js";
import {
  IconComponent
} from "./chunk-PRJCR3BE.js";
import {
  Kh,
  i18n,
  notifyError
} from "./chunk-UY3BZCXJ.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-C2I2ZQPH.js";
import {
  Component,
  Input,
  computed,
  effect,
  inject,
  input,
  resource,
  setClassMetadata,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-6HUGPUMR.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// apps/signage-manager/src/app/displays/routed-selection.util.ts
function selectRoutedItem(options) {
  const { id, list, selected, load } = options;
  let route_resolved = false;
  let route_id_seen = "";
  let requested_id = "";
  async function loadItem(item_id) {
    const item = await load(item_id).catch(() => null);
    if (id() !== item_id || untracked(selected)?.id === item_id)
      return;
    if (!item) {
      notifyError(i18n("COMMON.LOAD_ERROR"));
      return;
    }
    selected.set(item);
    route_resolved = true;
  }
  effect(() => {
    const route_id = id();
    const items = list();
    if (route_id !== route_id_seen) {
      route_id_seen = route_id;
      requested_id = "";
    }
    if (!route_id) {
      if (route_resolved)
        selected.set(null);
      return;
    }
    const match = items.find((item) => item.id === route_id);
    if (match) {
      if (selected()?.id !== match.id)
        selected.set(match);
      route_resolved = true;
    } else if (untracked(selected)?.id !== route_id && requested_id !== route_id) {
      requested_id = route_id;
      untracked(() => loadItem(route_id));
    }
  });
}

// apps/signage-manager/src/app/shared/template-mappings.component.ts
var _c0 = (a0) => ({ name: a0 });
var _c1 = (a0) => ["/zones", a0];
var _c2 = () => ({ tab: "templates" });
var _forTrack0 = ($index, $item) => $item.mapping.id;
var _forTrack1 = ($index, $item) => $item.index;
function TemplateMappingsComponent_Conditional_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 11);
  }
}
function TemplateMappingsComponent_Conditional_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon");
    \u0275\u0275text(1, "add");
    \u0275\u0275elementEnd();
  }
}
function TemplateMappingsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function TemplateMappingsComponent_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editMapping());
    });
    \u0275\u0275conditionalCreate(3, TemplateMappingsComponent_Conditional_9_Conditional_3_Template, 1, 0, "mat-spinner", 11)(4, TemplateMappingsComponent_Conditional_9_Conditional_4_Template, 2, 0, "icon");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 4, "SIGNAGE_MANAGER.APPLY_TEMPLATE"))("disabled", ctx_r1.opening());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 6, "SIGNAGE_MANAGER.APPLY_TEMPLATE"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.opening() ? 3 : 4);
  }
}
function TemplateMappingsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.LOADING"), " ");
  }
}
function TemplateMappingsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "icon", 12);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.TEMPLATE_MAPPINGS_LOAD_ERROR"), " ");
  }
}
function TemplateMappingsComponent_Conditional_13_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
  if (rf & 2) {
    const card_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", ctx)("alt", card_r3.mapping.template_details.name);
  }
}
function TemplateMappingsComponent_Conditional_13_For_2_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 28);
    \u0275\u0275text(1, "widgets");
    \u0275\u0275elementEnd();
  }
}
function TemplateMappingsComponent_Conditional_13_For_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275conditionalCreate(1, TemplateMappingsComponent_Conditional_13_For_2_For_5_Conditional_1_Template, 2, 0, "icon", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275styleProp("left", item_r4.left, "%")("top", item_r4.top, "%")("width", item_r4.width, "%")("height", item_r4.height, "%");
    \u0275\u0275classProp("border-dashed", !item_r4.plugin_id);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.plugin_id ? 1 : -1);
  }
}
function TemplateMappingsComponent_Conditional_13_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "icon", 29);
    \u0275\u0275text(2, "dashboard");
    \u0275\u0275elementEnd()();
  }
}
function TemplateMappingsComponent_Conditional_13_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "SIGNAGE_MANAGER.TEMPLATE_MAPPING_CONFIGURED_ON_ZONE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c1, ctx))("queryParams", \u0275\u0275pureFunction0(8, _c2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", card_r3.zone_name, " ");
  }
}
function TemplateMappingsComponent_Conditional_13_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", card_r3.mapping.template_details.description, " ");
  }
}
function TemplateMappingsComponent_Conditional_13_For_2_Conditional_14_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function TemplateMappingsComponent_Conditional_13_For_2_Conditional_14_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const card_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeMapping(card_r3.mapping));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "delete");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "COMMON.REMOVE"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "COMMON.REMOVE"));
  }
}
function TemplateMappingsComponent_Conditional_13_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "button", 31);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("click", function TemplateMappingsComponent_Conditional_13_For_2_Conditional_14_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const card_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editMapping(card_r3.mapping));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, TemplateMappingsComponent_Conditional_13_For_2_Conditional_14_Conditional_6_Template, 5, 6, "button", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 3, "COMMON.EDIT"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 5, "COMMON.EDIT"));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.target_type() === "zone" || !card_r3.mapping.zone_id ? 6 : -1);
  }
}
function TemplateMappingsComponent_Conditional_13_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 34);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const schedule_r7 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "SIGNAGE_MANAGER.SCHEDULE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", ctx_r1.scheduleTooltip(schedule_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.scheduleLabel(schedule_r7), " ");
  }
}
function TemplateMappingsComponent_Conditional_13_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "span", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "SIGNAGE_MANAGER.DEFAULT_TEMPLATE"), " ");
  }
}
function TemplateMappingsComponent_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 13)(1, "div", 14);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275conditionalCreate(3, TemplateMappingsComponent_Conditional_13_For_2_Conditional_3_Template, 1, 2, "img", 15);
    \u0275\u0275repeaterCreate(4, TemplateMappingsComponent_Conditional_13_For_2_For_5_Template, 2, 11, "div", 16, _forTrack1);
    \u0275\u0275conditionalCreate(6, TemplateMappingsComponent_Conditional_13_For_2_Conditional_6_Template, 3, 0, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 18)(8, "div", 19)(9, "div", 20)(10, "h6", 21);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, TemplateMappingsComponent_Conditional_13_For_2_Conditional_12_Template, 6, 9, "div", 22);
    \u0275\u0275conditionalCreate(13, TemplateMappingsComponent_Conditional_13_For_2_Conditional_13_Template, 2, 1, "p", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, TemplateMappingsComponent_Conditional_13_For_2_Conditional_14_Template, 7, 7, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, TemplateMappingsComponent_Conditional_13_For_2_Conditional_15_Template, 6, 5, "div", 25)(16, TemplateMappingsComponent_Conditional_13_For_2_Conditional_16_Template, 4, 3, "div", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_16_0;
    let tmp_19_0;
    const card_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(2, 8, "SIGNAGE_MANAGER.TEMPLATE_PREVIEW_ARIA", \u0275\u0275pureFunction1(11, _c0, card_r3.mapping.template_details.name)));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_12_0 = ctx_r1.backgroundUrl(card_r3.mapping)) ? 3 : -1, tmp_12_0);
    \u0275\u0275advance();
    \u0275\u0275repeater(card_r3.layout_items);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!card_r3.layout_items.length ? 6 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", card_r3.mapping.template_details.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_16_0 = ctx_r1.target_type() === "display" && card_r3.mapping.zone_id) ? 12 : -1, tmp_16_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(card_r3.mapping.template_details.description ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_update() ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_19_0 = card_r3.mapping.schedule) ? 15 : 16, tmp_19_0);
  }
}
function TemplateMappingsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, TemplateMappingsComponent_Conditional_13_For_2_Template, 17, 13, "article", 13, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.mapping_cards());
  }
}
function TemplateMappingsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "icon", 37);
    \u0275\u0275text(2, "dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_TEMPLATE_MAPPINGS"), " ");
  }
}
var TemplateMappingsComponent = class _TemplateMappingsComponent {
  constructor() {
    this._context = inject(SignageContextService);
    this._template_service = inject(SignageTemplateService);
    this._zone_service = inject(SignageZoneService);
    this.target_type = input(
      "display",
      ...ngDevMode ? [{ debugName: "target_type" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.target_id = input(
      "",
      ...ngDevMode ? [{ debugName: "target_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_update = this._context.can_update;
    this.opening = this._template_service.template_mapping_opening;
    this._mappings = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_mappings" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        target_type: this.target_type(),
        target_id: this.target_id()
      }),
      loader: ({ params }) => params.target_id ? this._template_service.listTemplateMappings(this._target(params.target_type, params.target_id)) : Promise.resolve([])
    }));
    this.mappings = computed(
      () => this._mappings.hasValue() ? this._mappings.value() : [],
      ...ngDevMode ? [{ debugName: "mappings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = this._mappings.isLoading;
    this.load_error = this._mappings.error;
    this.mapping_cards = computed(
      () => {
        const zone_names = new Map(this._zone_service.all_zones().map((zone) => [
          zone.id,
          zone.display_name || zone.name || zone.id
        ]));
        return this.mappings().map((mapping) => {
          const layouts = mapping.template_details.layouts || [];
          const rects = computeTemplateLayoutRects(layouts);
          return {
            mapping,
            zone_name: zone_names.get(mapping.zone_id) || mapping.zone_id,
            layout_items: layouts.map((layout, index) => __spreadValues({
              index,
              plugin_id: layout.plugin_id
            }, rects[index]))
          };
        });
      },
      ...ngDevMode ? [{ debugName: "mapping_cards" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.scheduleLabel = playlistScheduleLabel;
  }
  backgroundUrl(mapping) {
    const template = mapping.template_details;
    return template.background_media?.media_url || (template.background_item_id ? Kh(template.background_item_id) : "");
  }
  scheduleTooltip(schedule) {
    const labels = playlistScheduleNextPlayLabels(schedule);
    const expiry = playlistScheduleExpiryTooltip(schedule);
    return [
      `-- ${i18n("SIGNAGE_MANAGER.NEXT_5_PLAYS")} --`,
      ...labels.length ? labels : [i18n("SIGNAGE_MANAGER.NO_UPCOMING_PLAY_TIMES")],
      ...expiry ? [`${i18n("FORM.EXPIRES_AT")}: ${expiry}`] : []
    ].join("\n");
  }
  async editMapping(mapping = null) {
    const changed = await this._template_service.editTemplateMapping(this._target(this.target_type(), this.target_id()), mapping);
    if (changed)
      this._mappings.reload();
  }
  async removeMapping(mapping) {
    if (await this._template_service.removeTemplateMapping(mapping)) {
      this._mappings.reload();
    }
  }
  _target(type, id) {
    return type === "display" ? { control_system_id: id } : { zone_id: id };
  }
  static {
    this.\u0275fac = function TemplateMappingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TemplateMappingsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TemplateMappingsComponent, selectors: [["template-mappings"]], inputs: { target_type: [1, "target_type"], target_id: [1, "target_id"] }, decls: 15, vars: 6, consts: [[1, "flex", "h-full", "min-h-0", "w-full", "flex-col"], [1, "border-base-300", "flex", "items-center", "gap-2", "border-b", "px-4", "py-3"], [1, "text-base-content/80", "flex", "flex-1", "items-center", "gap-2", "font-medium", "tracking-wider", "uppercase"], [1, "text-lg"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "matTooltip", "disabled"], [1, "min-h-0", "flex-1", "overflow-auto", "p-3"], [1, "text-base-content/70", "flex", "h-full", "items-center", "justify-center", "p-8"], [1, "text-error", "flex", "h-full", "flex-col", "items-center", "justify-center", "gap-2", "p-8", "text-center"], [1, "grid", "grid-cols-1", "gap-3", "xl:grid-cols-2", "2xl:grid-cols-3"], [1, "text-base-content/70", "flex", "h-full", "flex-col", "items-center", "justify-center", "gap-2", "p-8", "text-center"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "matTooltip", "disabled"], ["diameter", "20"], [1, "text-4xl"], [1, "border-base-300", "bg-base-100", "overflow-hidden", "rounded-lg", "border"], ["role", "img", 1, "bg-neutral", "relative", "aspect-video", "overflow-hidden"], ["auth", "", 1, "absolute", "inset-0", "h-full", "w-full", "object-cover", "opacity-80", 3, "source", "alt"], [1, "absolute", "flex", "items-center", "justify-center", "overflow-hidden", "border", "border-white/60", "bg-black/50", 3, "border-dashed", "left", "top", "width", "height"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center"], [1, "p-3"], [1, "flex", "items-start", "gap-2"], [1, "min-w-0", "flex-1"], [1, "truncate", "font-medium"], [1, "text-base-content/60", "flex", "items-center", "gap-1", "text-xs"], [1, "text-base-content/70", "mt-1", "line-clamp-2", "text-xs"], [1, "flex", "shrink-0", "gap-1"], [1, "border-base-300", "bg-base-100", "text-base-content", "relative", "mt-4", "flex", "flex-col", "rounded-lg", "border", "text-sm"], [1, "mt-2", "text-xs"], [1, "absolute", "flex", "items-center", "justify-center", "overflow-hidden", "border", "border-white/60", "bg-black/50"], [1, "text-sm", "text-white"], [1, "text-4xl", "text-white/50"], [1, "text-primary", "block", "truncate", "hover:underline", 3, "routerLink", "queryParams"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 3, "matTooltip"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], [1, "bg-base-100", "absolute", "-top-3", "left-4", "rounded-lg", "px-2", "text-xs", "font-medium"], ["matTooltipClass", "playlist-schedule-tooltip", 1, "rounded-md", "p-2", 3, "matTooltip"], [1, "bg-primary", "text-primary-content", "rounded", "px-2", "py-1", "font-medium"], [1, "text-5xl"]], template: function TemplateMappingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5", 2)(3, "icon", 3);
        \u0275\u0275text(4, "dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementStart(7, "span");
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(9, TemplateMappingsComponent_Conditional_9_Template, 5, 8, "button", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 5);
        \u0275\u0275conditionalCreate(11, TemplateMappingsComponent_Conditional_11_Template, 3, 3, "div", 6)(12, TemplateMappingsComponent_Conditional_12_Template, 6, 3, "div", 7)(13, TemplateMappingsComponent_Conditional_13_Template, 3, 0, "div", 8)(14, TemplateMappingsComponent_Conditional_14_Template, 6, 3, "div", 9);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "SIGNAGE_MANAGER.NAV_TEMPLATES"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("(", ctx.mappings().length, ")");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.can_update() ? 9 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading() ? 11 : ctx.load_error() ? 12 : ctx.mapping_cards().length ? 13 : 14);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatTooltipModule,
      MatTooltip,
      AuthenticatedImageDirective,
      IconComponent,
      RouterLink,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  min-height: 0;\n  height: 100%;\n}\n  .playlist-schedule-tooltip .mdc-tooltip__surface {\n  white-space: pre-line;\n}\n/*# sourceMappingURL=template-mappings.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplateMappingsComponent, [{
    type: Component,
    args: [{ selector: "template-mappings", template: `
        <div class="flex h-full min-h-0 w-full flex-col">
            <div
                class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
            >
                <h5
                    class="text-base-content/80 flex flex-1 items-center gap-2 font-medium tracking-wider uppercase"
                >
                    <icon class="text-lg">dashboard</icon>
                    {{ 'SIGNAGE_MANAGER.NAV_TEMPLATES' | translate }}
                    <span>({{ mappings().length }})</span>
                </h5>
                @if (can_update()) {
                    <button
                        icon
                        default
                        type="button"
                        matRipple
                        [matTooltip]="
                            'SIGNAGE_MANAGER.APPLY_TEMPLATE' | translate
                        "
                        (click)="editMapping()"
                        [disabled]="opening()"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.APPLY_TEMPLATE' | translate
                        "
                    >
                        @if (opening()) {
                            <mat-spinner diameter="20" />
                        } @else {
                            <icon>add</icon>
                        }
                    </button>
                }
            </div>

            <div class="min-h-0 flex-1 overflow-auto p-3">
                @if (loading()) {
                    <div
                        class="text-base-content/70 flex h-full items-center justify-center p-8"
                    >
                        {{ 'COMMON.LOADING' | translate }}
                    </div>
                } @else if (load_error()) {
                    <div
                        class="text-error flex h-full flex-col items-center justify-center gap-2 p-8 text-center"
                    >
                        <icon class="text-4xl">error</icon>
                        <p>
                            {{
                                'SIGNAGE_MANAGER.TEMPLATE_MAPPINGS_LOAD_ERROR'
                                    | translate
                            }}
                        </p>
                    </div>
                } @else if (mapping_cards().length) {
                    <div
                        class="grid grid-cols-1 gap-3 xl:grid-cols-2 2xl:grid-cols-3"
                    >
                        @for (card of mapping_cards(); track card.mapping.id) {
                            <article
                                class="border-base-300 bg-base-100 overflow-hidden rounded-lg border"
                            >
                                <div
                                    role="img"
                                    class="bg-neutral relative aspect-video overflow-hidden"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.TEMPLATE_PREVIEW_ARIA'
                                            | translate
                                                : {
                                                      name: card.mapping
                                                          .template_details
                                                          .name,
                                                  }
                                    "
                                >
                                    @if (
                                        backgroundUrl(card.mapping);
                                        as background_url
                                    ) {
                                        <img
                                            auth
                                            class="absolute inset-0 h-full w-full object-cover opacity-80"
                                            [source]="background_url"
                                            [alt]="
                                                card.mapping.template_details
                                                    .name
                                            "
                                        />
                                    }
                                    @for (
                                        item of card.layout_items;
                                        track item.index
                                    ) {
                                        <div
                                            class="absolute flex items-center justify-center overflow-hidden border border-white/60 bg-black/50"
                                            [class.border-dashed]="
                                                !item.plugin_id
                                            "
                                            [style.left.%]="item.left"
                                            [style.top.%]="item.top"
                                            [style.width.%]="item.width"
                                            [style.height.%]="item.height"
                                        >
                                            @if (item.plugin_id) {
                                                <icon class="text-sm text-white"
                                                    >widgets</icon
                                                >
                                            }
                                        </div>
                                    }
                                    @if (!card.layout_items.length) {
                                        <div
                                            class="absolute inset-0 flex items-center justify-center"
                                        >
                                            <icon class="text-4xl text-white/50"
                                                >dashboard</icon
                                            >
                                        </div>
                                    }
                                </div>
                                <div class="p-3">
                                    <div class="flex items-start gap-2">
                                        <div class="min-w-0 flex-1">
                                            <h6 class="truncate font-medium">
                                                {{
                                                    card.mapping
                                                        .template_details.name
                                                }}
                                            </h6>
                                            @if (
                                                target_type() === 'display' &&
                                                    card.mapping.zone_id;
                                                as zone_id
                                            ) {
                                                <div
                                                    class="text-base-content/60 flex items-center gap-1 text-xs"
                                                >
                                                    <div>
                                                        {{
                                                            'SIGNAGE_MANAGER.TEMPLATE_MAPPING_CONFIGURED_ON_ZONE'
                                                                | translate
                                                        }}
                                                    </div>
                                                    <a
                                                        class="text-primary block truncate hover:underline"
                                                        [routerLink]="[
                                                            '/zones',
                                                            zone_id,
                                                        ]"
                                                        [queryParams]="{
                                                            tab: 'templates',
                                                        }"
                                                    >
                                                        {{ card.zone_name }}
                                                    </a>
                                                </div>
                                            }
                                            @if (
                                                card.mapping.template_details
                                                    .description
                                            ) {
                                                <p
                                                    class="text-base-content/70 mt-1 line-clamp-2 text-xs"
                                                >
                                                    {{
                                                        card.mapping
                                                            .template_details
                                                            .description
                                                    }}
                                                </p>
                                            }
                                        </div>
                                        @if (can_update()) {
                                            <div class="flex shrink-0 gap-1">
                                                <button
                                                    icon
                                                    default
                                                    type="button"
                                                    matRipple
                                                    [matTooltip]="
                                                        'COMMON.EDIT'
                                                            | translate
                                                    "
                                                    (click)="
                                                        editMapping(
                                                            card.mapping
                                                        )
                                                    "
                                                    [attr.aria-label]="
                                                        'COMMON.EDIT'
                                                            | translate
                                                    "
                                                >
                                                    <icon>edit</icon>
                                                </button>
                                                @if (
                                                    target_type() === 'zone' ||
                                                    !card.mapping.zone_id
                                                ) {
                                                    <button
                                                        icon
                                                        default
                                                        error
                                                        type="button"
                                                        matRipple
                                                        [matTooltip]="
                                                            'COMMON.REMOVE'
                                                                | translate
                                                        "
                                                        (click)="
                                                            removeMapping(
                                                                card.mapping
                                                            )
                                                        "
                                                        [attr.aria-label]="
                                                            'COMMON.REMOVE'
                                                                | translate
                                                        "
                                                    >
                                                        <icon>delete</icon>
                                                    </button>
                                                }
                                            </div>
                                        }
                                    </div>
                                    @if (card.mapping.schedule; as schedule) {
                                        <div
                                            class="border-base-300 bg-base-100 text-base-content relative mt-4 flex flex-col rounded-lg border text-sm"
                                        >
                                            <div
                                                class="bg-base-100 absolute -top-3 left-4 rounded-lg px-2 text-xs font-medium"
                                            >
                                                {{
                                                    'SIGNAGE_MANAGER.SCHEDULE'
                                                        | translate
                                                }}
                                            </div>
                                            <div
                                                class="rounded-md p-2"
                                                [matTooltip]="
                                                    scheduleTooltip(schedule)
                                                "
                                                matTooltipClass="playlist-schedule-tooltip"
                                            >
                                                {{ scheduleLabel(schedule) }}
                                            </div>
                                        </div>
                                    } @else {
                                        <div class="mt-2 text-xs">
                                            <span
                                                class="bg-primary text-primary-content rounded px-2 py-1 font-medium"
                                            >
                                                {{
                                                    'SIGNAGE_MANAGER.DEFAULT_TEMPLATE'
                                                        | translate
                                                }}
                                            </span>
                                        </div>
                                    }
                                </div>
                            </article>
                        }
                    </div>
                } @else {
                    <div
                        class="text-base-content/70 flex h-full flex-col items-center justify-center gap-2 p-8 text-center"
                    >
                        <icon class="text-5xl">dashboard</icon>
                        <p>
                            {{
                                'SIGNAGE_MANAGER.NO_TEMPLATE_MAPPINGS'
                                    | translate
                            }}
                        </p>
                    </div>
                }
            </div>
        </div>
    `, imports: [
      MatRippleModule,
      MatProgressSpinnerModule,
      MatTooltipModule,
      AuthenticatedImageDirective,
      IconComponent,
      RouterLink,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;cf63af65d825944c4c7b29593f5c729dcd44d8bbe943b4aae7f430ea515230e6;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/shared/template-mappings.component.ts */\n:host {\n  display: flex;\n  min-height: 0;\n  height: 100%;\n}\n::ng-deep .playlist-schedule-tooltip .mdc-tooltip__surface {\n  white-space: pre-line;\n}\n/*# sourceMappingURL=template-mappings.component.css.map */\n"] }]
  }], null, { target_type: [{ type: Input, args: [{ isSignal: true, alias: "target_type", required: false }] }], target_id: [{ type: Input, args: [{ isSignal: true, alias: "target_id", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TemplateMappingsComponent, { className: "TemplateMappingsComponent", filePath: "apps/signage-manager/src/app/shared/template-mappings.component.ts", lineNumber: 337 });
})();

export {
  TemplateMappingsComponent,
  selectRoutedItem
};
//# debugId=c7602cb1-756b-5131-8f49-b85ecbbf9f2b
//# sourceMappingURL=chunk-QWWJBGFN.js.map
