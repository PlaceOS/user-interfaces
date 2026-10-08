import {
  CdkTree,
  CdkTreeModule,
  CdkTreeNode,
  CdkTreeNodeDef,
  CdkTreeNodePadding
} from "./chunk-7QBAPECA.js";
import {
  LoadErrorComponent
} from "./chunk-QQANERJJ.js";
import {
  IntersectDirective
} from "./chunk-54ZLEWFI.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-BUXOUYWY.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-BZ7UY2RA.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-G4RAFQJW.js";
import {
  TranslatePipe
} from "./chunk-4R7BTQAK.js";
import {
  Component,
  DefaultValueAccessor,
  FormsModule,
  IconComponent,
  Input,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgModel,
  Output,
  computed,
  effect,
  input,
  linkedSignal,
  model,
  output,
  setClassMetadata,
  signal,
  untracked,
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
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-VC4MJRPT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/shared/zone-select-tree.component.ts
var _c0 = (a0) => ({ name: a0 });
function ZoneSelectTreeComponent_Conditional_4_cdk_tree_node_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ZoneSelectTreeComponent_Conditional_4_cdk_tree_node_1_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const node_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleNode(node_r2));
    });
    \u0275\u0275elementStart(2, "icon", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const node_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(1, 2, ctx_r2.isExpanded(node_r2) ? "SIGNAGE_MANAGER.COLLAPSE_ZONE" : "SIGNAGE_MANAGER.EXPAND_ZONE", \u0275\u0275pureFunction1(5, _c0, node_r2.zone.display_name || node_r2.zone.name)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.isExpanded(node_r2) ? "expand_more" : "chevron_right", " ");
  }
}
function ZoneSelectTreeComponent_Conditional_4_cdk_tree_node_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 10);
  }
}
function ZoneSelectTreeComponent_Conditional_4_cdk_tree_node_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.childCount(node_r2), " ");
  }
}
function ZoneSelectTreeComponent_Conditional_4_cdk_tree_node_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 16);
    \u0275\u0275text(1, "autorenew");
    \u0275\u0275elementEnd();
  }
}
function ZoneSelectTreeComponent_Conditional_4_cdk_tree_node_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", node_r2.zone.description, " ");
  }
}
function ZoneSelectTreeComponent_Conditional_4_cdk_tree_node_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ZoneSelectTreeComponent_Conditional_4_cdk_tree_node_1_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const node_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.loadChildren(node_r2.zone.id));
    });
    \u0275\u0275elementStart(3, "icon", 20);
    \u0275\u0275text(4, "refresh");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const node_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(1, 2, "SIGNAGE_MANAGER.ZONE_CHILDREN_RETRY", \u0275\u0275pureFunction1(8, _c0, node_r2.zone.display_name || node_r2.zone.name)));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(2, 5, "SIGNAGE_MANAGER.ZONE_CHILDREN_RETRY", \u0275\u0275pureFunction1(10, _c0, node_r2.zone.display_name || node_r2.zone.name)));
  }
}
function ZoneSelectTreeComponent_Conditional_4_cdk_tree_node_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cdk-tree-node", 7);
    \u0275\u0275listener("expandedChange", function ZoneSelectTreeComponent_Conditional_4_cdk_tree_node_1_Template_cdk_tree_node_expandedChange_0_listener($event) {
      const node_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onExpandedChange(node_r2, $event));
    })("activation", function ZoneSelectTreeComponent_Conditional_4_cdk_tree_node_1_Template_cdk_tree_node_activation_0_listener() {
      const node_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectZone(node_r2.zone));
    });
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275conditionalCreate(2, ZoneSelectTreeComponent_Conditional_4_cdk_tree_node_1_Conditional_2_Template, 4, 7, "button", 9)(3, ZoneSelectTreeComponent_Conditional_4_cdk_tree_node_1_Conditional_3_Template, 1, 0, "div", 10);
    \u0275\u0275elementStart(4, "button", 11);
    \u0275\u0275listener("click", function ZoneSelectTreeComponent_Conditional_4_cdk_tree_node_1_Template_button_click_4_listener() {
      const node_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectZone(node_r2.zone));
    });
    \u0275\u0275elementStart(5, "div", 12)(6, "div", 13)(7, "div", 14);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, ZoneSelectTreeComponent_Conditional_4_cdk_tree_node_1_Conditional_9_Template, 2, 1, "span", 15);
    \u0275\u0275conditionalCreate(10, ZoneSelectTreeComponent_Conditional_4_cdk_tree_node_1_Conditional_10_Template, 2, 0, "icon", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, ZoneSelectTreeComponent_Conditional_4_cdk_tree_node_1_Conditional_11_Template, 2, 1, "div", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, ZoneSelectTreeComponent_Conditional_4_cdk_tree_node_1_Conditional_12_Template, 5, 12, "button", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-primary", ctx_r2.selected()?.id === node_r2.zone.id)("text-primary-content", ctx_r2.selected()?.id === node_r2.zone.id)("hover:bg-base-200", ctx_r2.selected()?.id !== node_r2.zone.id);
    \u0275\u0275property("cdkTreeNodePadding", node_r2.level)("cdkTreeNodePaddingIndent", 16)("isExpandable", ctx_r2.canExpand(node_r2))("isExpanded", ctx_r2.isExpanded(node_r2));
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", 0.25 * node_r2.level + "rem")("opacity", 0.1 * node_r2.level);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canExpand(node_r2) ? 2 : 3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", node_r2.zone.display_name || node_r2.zone.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.childCount(node_r2) ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(node_r2.children_loading ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(node_r2.zone.description ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(node_r2.children_error ? 12 : -1);
  }
}
function ZoneSelectTreeComponent_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275listener("intersect", function ZoneSelectTreeComponent_Conditional_4_Conditional_2_Template_div_intersect_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.list().loadMore());
    });
    \u0275\u0275elementEnd();
  }
}
function ZoneSelectTreeComponent_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "load-error", 23);
    \u0275\u0275listener("retry", function ZoneSelectTreeComponent_Conditional_4_Conditional_3_Template_load_error_retry_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.list().retry());
    });
    \u0275\u0275elementEnd();
  }
}
function ZoneSelectTreeComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "cdk-tree", 4);
    \u0275\u0275template(1, ZoneSelectTreeComponent_Conditional_4_cdk_tree_node_1_Template, 13, 20, "cdk-tree-node", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, ZoneSelectTreeComponent_Conditional_4_Conditional_2_Template, 1, 0, "div", 6)(3, ZoneSelectTreeComponent_Conditional_4_Conditional_3_Template, 1, 0, "load-error");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("dataSource", ctx_r2.flat_tree_nodes())("levelAccessor", ctx_r2.levelAccessor)("expansionKey", ctx_r2.expansionKey)("trackBy", ctx_r2.trackByNode);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.list().has_more() ? 2 : ctx_r2.list().error() ? 3 : -1);
  }
}
function ZoneSelectTreeComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.LOADING"), " ");
  }
}
function ZoneSelectTreeComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "load-error", 23);
    \u0275\u0275listener("retry", function ZoneSelectTreeComponent_Conditional_6_Template_load_error_retry_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.list().retry());
    });
    \u0275\u0275elementEnd();
  }
}
function ZoneSelectTreeComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "icon", 25);
    \u0275\u0275text(2, "layers_clear");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_ZONES"), " ");
  }
}
var ZoneSelectTreeComponent = class _ZoneSelectTreeComponent {
  constructor() {
    this.list = input.required(
      ...ngDevMode ? [{ debugName: "list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.roots = input(
      null,
      ...ngDevMode ? [{ debugName: "roots" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.load_children = input(
      null,
      ...ngDevMode ? [{ debugName: "load_children" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.exclude_ids = input(
      [],
      ...ngDevMode ? [{ debugName: "exclude_ids" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.scoped_search = input(
      false,
      ...ngDevMode ? [{ debugName: "scoped_search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected = model(
      null,
      ...ngDevMode ? [{ debugName: "selected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zoneSelected = output();
    this.expanded_zones = signal(
      {},
      ...ngDevMode ? [{ debugName: "expanded_zones" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search_enabled = computed(
      () => !this.scoped_search() || !!this.selected()?.id,
      ...ngDevMode ? [{ debugName: "search_enabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_search_results = computed(
      () => this.search_enabled() && !!this.list().search().trim(),
      ...ngDevMode ? [{ debugName: "show_search_results" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._tree_source = computed(
      () => {
        const roots = this.roots();
        const searching = this.show_search_results();
        const lazy = roots !== null && !searching;
        return {
          zones: lazy ? roots : this.list().items(),
          exclude_ids: this.exclude_ids(),
          lazy,
          searching,
          selected: searching ? this.selected() : null
        };
      },
      ...ngDevMode ? [{ debugName: "_tree_source" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.tree_nodes = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "tree_nodes" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: this._tree_source,
      computation: ({ zones, exclude_ids, lazy, searching, selected }) => {
        const excluded = new Set(exclude_ids);
        if (searching && selected && !excluded.has(selected.id)) {
          return [
            {
              zone: selected,
              children: zones.filter((zone) => zone.id !== selected.id && !excluded.has(zone.id)).map((zone) => this.createNode(zone, false)),
              children_loaded: true,
              children_loading: false,
              children_error: false,
              level: 0
            }
          ];
        }
        return this.buildTree(zones, excluded, lazy);
      }
    }));
    this.flat_tree_nodes = computed(
      () => {
        const nodes = [];
        for (const node of this.tree_nodes())
          this.flattenNode(node, 0, nodes);
        return nodes;
      },
      ...ngDevMode ? [{ debugName: "flat_tree_nodes" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.levelAccessor = (node) => node.level;
    this.trackByNode = (_, node) => node.zone.id;
    this.expansionKey = (node) => node.zone.id;
    effect(() => {
      const root = this.tree_nodes()[0];
      if (this.roots() === null || !root || !this.expansionRequested(root) || root.children_loaded || root.children_loading || root.children_error || !this.childCount(root) || !this.load_children()) {
        return;
      }
      untracked(() => this.loadChildren(root.zone.id));
    });
  }
  selectZone(zone) {
    if (this.scoped_search()) {
      this.list().search.set("");
      this.selected.set(zone);
    }
    this.zoneSelected.emit(zone);
  }
  toggleNode(node) {
    this.setExpanded(node, !this.expansionRequested(node));
  }
  /** Expand or collapse a node from the arrow keys of cdk-tree */
  onExpandedChange(node, expanded) {
    if (this.isExpanded(node) === expanded)
      return;
    this.setExpanded(node, expanded);
  }
  /** Whether the node shows an expand control */
  canExpand(node) {
    return !!this.childCount(node) && !(this.show_search_results() && node.level === 0);
  }
  setExpanded(node, expanded) {
    this.expanded_zones.update((state) => __spreadProps(__spreadValues({}, state), {
      [node.zone.id]: expanded
    }));
    if (expanded && !node.children_loaded && !node.children_loading && this.load_children()) {
      this.loadChildren(node.zone.id);
    }
  }
  isExpanded(node) {
    return this.expansionRequested(node) && (node.children_loaded || node.children_loading);
  }
  expansionRequested(node) {
    if (this.show_search_results() && this.selected()?.id === node.zone.id) {
      return true;
    }
    const expanded_zones = this.expanded_zones();
    return node.zone.id in expanded_zones ? expanded_zones[node.zone.id] : this.roots()?.[0]?.id === node.zone.id;
  }
  childCount(node) {
    return node.children_loaded ? node.children.length : node.zone.children_count || node.zone.count || 0;
  }
  buildTree(zones, excluded_ids, lazy) {
    const nodes = /* @__PURE__ */ new Map();
    for (const zone of zones) {
      if (excluded_ids.has(zone.id))
        continue;
      nodes.set(zone.id, this.createNode(zone, lazy));
    }
    const roots = [];
    for (const node of nodes.values()) {
      const parent = nodes.get(node.zone.parent_id || "");
      if (parent)
        parent.children.push(node);
      else
        roots.push(node);
    }
    return roots;
  }
  createNode(zone, lazy) {
    return {
      zone,
      children: [],
      children_loaded: !lazy,
      children_loading: false,
      children_error: false,
      level: 0
    };
  }
  async loadChildren(zone_id) {
    const load_children = this.load_children();
    if (!load_children)
      return;
    this.updateNode(zone_id, (node) => __spreadProps(__spreadValues({}, node), {
      children_loading: true,
      children_error: false
    }));
    const excluded_ids = new Set(this.exclude_ids());
    const children = await load_children(zone_id).catch(() => null);
    if (!children) {
      this.updateNode(zone_id, (node) => __spreadProps(__spreadValues({}, node), {
        children_loading: false,
        children_error: true
      }));
      return;
    }
    this.updateNode(zone_id, (node) => __spreadProps(__spreadValues({}, node), {
      children: this.buildTree(children, excluded_ids, true),
      children_loaded: true,
      children_loading: false
    }));
  }
  updateNode(zone_id, callback) {
    const update = (nodes) => nodes.map((node) => node.zone.id === zone_id ? callback(node) : __spreadProps(__spreadValues({}, node), { children: update(node.children) }));
    this.tree_nodes.update(update);
  }
  flattenNode(node, level, flat_nodes) {
    flat_nodes.push(__spreadProps(__spreadValues({}, node), { level }));
    if (!this.isExpanded(node))
      return;
    for (const child of node.children) {
      this.flattenNode(child, level + 1, flat_nodes);
    }
  }
  static {
    this.\u0275fac = function ZoneSelectTreeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ZoneSelectTreeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneSelectTreeComponent, selectors: [["zone-select-tree"]], inputs: { list: [1, "list"], roots: [1, "roots"], load_children: [1, "load_children"], exclude_ids: [1, "exclude_ids"], scoped_search: [1, "scoped_search"], selected: [1, "selected"] }, outputs: { selected: "selectedChange", zoneSelected: "zoneSelected" }, decls: 8, vars: 15, consts: [["appearance", "outline", 1, "no-subscript", "bg-base-100", "sticky", "top-0", "z-10", "w-full", "pb-2"], ["matInput", "", 3, "ngModelChange", "disabled", "ngModel", "placeholder"], [1, "bg-base-200", "flex", "h-[calc(100%-3.5rem)]", "w-full", "flex-col", "items-center", "justify-center", "rounded-lg", "p-16"], [1, "bg-base-200", "flex", "h-[calc(100%-3.5rem)]", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-lg", "p-16"], [1, "zone-tree", 3, "dataSource", "levelAccessor", "expansionKey", "trackBy"], ["cdkTreeNodePadding", "", "class", "border-base-300 bg-base-100 hover:bg-base-200/50 relative mb-2 flex min-h-0 items-center gap-1 overflow-hidden rounded-lg border pr-1 transition-colors", 3, "cdkTreeNodePadding", "cdkTreeNodePaddingIndent", "isExpandable", "isExpanded", "bg-primary", "text-primary-content", "hover:bg-base-200", "expandedChange", "activation", 4, "cdkTreeNodeDef"], ["intersect", "", 1, "h-px", "w-full"], ["cdkTreeNodePadding", "", 1, "border-base-300", "bg-base-100", "hover:bg-base-200/50", "relative", "mb-2", "flex", "min-h-0", "items-center", "gap-1", "overflow-hidden", "rounded-lg", "border", "pr-1", "transition-colors", 3, "expandedChange", "activation", "cdkTreeNodePadding", "cdkTreeNodePaddingIndent", "isExpandable", "isExpanded"], ["aria-hidden", "true", 1, "bg-base-content", "absolute", "inset-y-1", "left-1", "rounded-sm"], ["icon", "", "default", "", "type", "button", 1, "ml-2", "text-xs"], [1, "ml-1", "min-w-7"], ["type", "button", "matRipple", "", 1, "flex", "min-h-16", "min-w-0", "flex-1", "items-center", "gap-2", "px-1", "py-2", "text-left", 3, "click"], [1, "min-w-0", "flex-1"], [1, "flex", "items-center", "gap-2"], [1, "min-w-0", "flex-1", "truncate", "font-medium"], [1, "bg-base-200", "text-base-content/70", "rounded-full", "px-2", "py-0.5", "text-xs"], [1, "animate-spin", "text-lg"], [1, "mt-0.5", "truncate", "text-xs", "opacity-70"], ["icon", "", "default", "", "type", "button", 1, "text-error", 3, "matTooltip"], ["icon", "", "default", "", "type", "button", 1, "ml-2", "text-xs", 3, "click"], [1, "text-xl"], ["icon", "", "default", "", "type", "button", 1, "text-error", 3, "click", "matTooltip"], ["intersect", "", 1, "h-px", "w-full", 3, "intersect"], [3, "retry"], [1, "text-base-content/70"], [1, "text-base-content/70", "text-8xl"]], template: function ZoneSelectTreeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-form-field", 0)(1, "input", 1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275listener("ngModelChange", function ZoneSelectTreeComponent_Template_input_ngModelChange_1_listener($event) {
          return ctx.list().search.set($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, ZoneSelectTreeComponent_Conditional_4_Template, 4, 5)(5, ZoneSelectTreeComponent_Conditional_5_Template, 4, 3, "div", 2)(6, ZoneSelectTreeComponent_Conditional_6_Template, 1, 0, "load-error")(7, ZoneSelectTreeComponent_Conditional_7_Template, 6, 3, "div", 3);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.search_enabled())("ngModel", ctx.list().search())("placeholder", \u0275\u0275pipeBind2(2, 5, ctx.scoped_search() ? "SIGNAGE_MANAGER.SEARCH_IN_ZONE" : "SIGNAGE_MANAGER.SEARCH_ZONES", \u0275\u0275pureFunction1(11, _c0, ctx.selected()?.display_name || ctx.selected()?.name || "")));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(3, 8, ctx.scoped_search() ? "SIGNAGE_MANAGER.SEARCH_IN_ZONE" : "SIGNAGE_MANAGER.SEARCH_ZONES", \u0275\u0275pureFunction1(13, _c0, ctx.selected()?.display_name || ctx.selected()?.name || "")));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.flat_tree_nodes().length ? 4 : ctx.list().loading() ? 5 : ctx.list().error() ? 6 : 7);
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      MatTooltipModule,
      MatTooltip,
      CdkTreeModule,
      CdkTreeNodeDef,
      CdkTreeNodePadding,
      CdkTree,
      CdkTreeNode,
      IconComponent,
      LoadErrorComponent,
      IntersectDirective,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n.zone-tree[_ngcontent-%COMP%] {\n  background: transparent;\n}\n/*# sourceMappingURL=zone-select-tree.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoneSelectTreeComponent, [{
    type: Component,
    args: [{ selector: "zone-select-tree", template: `
        <mat-form-field
            appearance="outline"
            class="no-subscript bg-base-100 sticky top-0 z-10 w-full pb-2"
        >
            <input
                matInput
                [disabled]="!search_enabled()"
                [ngModel]="list().search()"
                (ngModelChange)="list().search.set($event)"
                [placeholder]="
                    (scoped_search()
                        ? 'SIGNAGE_MANAGER.SEARCH_IN_ZONE'
                        : 'SIGNAGE_MANAGER.SEARCH_ZONES'
                    )
                        | translate
                            : {
                                  name:
                                      selected()?.display_name ||
                                      selected()?.name ||
                                      '',
                              }
                "
                [attr.aria-label]="
                    (scoped_search()
                        ? 'SIGNAGE_MANAGER.SEARCH_IN_ZONE'
                        : 'SIGNAGE_MANAGER.SEARCH_ZONES'
                    )
                        | translate
                            : {
                                  name:
                                      selected()?.display_name ||
                                      selected()?.name ||
                                      '',
                              }
                "
            />
        </mat-form-field>
        @if (flat_tree_nodes().length) {
            <cdk-tree
                class="zone-tree"
                [dataSource]="flat_tree_nodes()"
                [levelAccessor]="levelAccessor"
                [expansionKey]="expansionKey"
                [trackBy]="trackByNode"
            >
                <cdk-tree-node
                    *cdkTreeNodeDef="let node"
                    cdkTreeNodePadding
                    [cdkTreeNodePadding]="node.level"
                    [cdkTreeNodePaddingIndent]="16"
                    [isExpandable]="canExpand(node)"
                    [isExpanded]="isExpanded(node)"
                    (expandedChange)="onExpandedChange(node, $event)"
                    (activation)="selectZone(node.zone)"
                    class="border-base-300 bg-base-100 hover:bg-base-200/50 relative mb-2 flex min-h-0 items-center gap-1 overflow-hidden rounded-lg border pr-1 transition-colors"
                    [class.bg-primary]="selected()?.id === node.zone.id"
                    [class.text-primary-content]="
                        selected()?.id === node.zone.id
                    "
                    [class.hover:bg-base-200]="selected()?.id !== node.zone.id"
                >
                    <div
                        aria-hidden="true"
                        class="bg-base-content absolute inset-y-1 left-1 rounded-sm"
                        [style.width]="0.25 * node.level + 'rem'"
                        [style.opacity]="0.1 * node.level"
                    ></div>
                    @if (canExpand(node)) {
                        <button
                            icon
                            default
                            type="button"
                            class="ml-2 text-xs"
                            [attr.aria-label]="
                                (isExpanded(node)
                                    ? 'SIGNAGE_MANAGER.COLLAPSE_ZONE'
                                    : 'SIGNAGE_MANAGER.EXPAND_ZONE'
                                )
                                    | translate
                                        : {
                                              name:
                                                  node.zone.display_name ||
                                                  node.zone.name,
                                          }
                            "
                            (click)="toggleNode(node)"
                        >
                            <icon class="text-xl">
                                {{
                                    isExpanded(node)
                                        ? 'expand_more'
                                        : 'chevron_right'
                                }}
                            </icon>
                        </button>
                    } @else {
                        <div class="ml-1 min-w-7"></div>
                    }
                    <button
                        type="button"
                        matRipple
                        class="flex min-h-16 min-w-0 flex-1 items-center gap-2 px-1 py-2 text-left"
                        (click)="selectZone(node.zone)"
                    >
                        <div class="min-w-0 flex-1">
                            <div class="flex items-center gap-2">
                                <div
                                    class="min-w-0 flex-1 truncate font-medium"
                                >
                                    {{
                                        node.zone.display_name || node.zone.name
                                    }}
                                </div>
                                @if (childCount(node)) {
                                    <span
                                        class="bg-base-200 text-base-content/70 rounded-full px-2 py-0.5 text-xs"
                                    >
                                        {{ childCount(node) }}
                                    </span>
                                }
                                @if (node.children_loading) {
                                    <icon class="animate-spin text-lg"
                                        >autorenew</icon
                                    >
                                }
                            </div>
                            @if (node.zone.description) {
                                <div class="mt-0.5 truncate text-xs opacity-70">
                                    {{ node.zone.description }}
                                </div>
                            }
                        </div>
                    </button>
                    @if (node.children_error) {
                        <button
                            icon
                            default
                            type="button"
                            class="text-error"
                            [matTooltip]="
                                'SIGNAGE_MANAGER.ZONE_CHILDREN_RETRY'
                                    | translate
                                        : {
                                              name:
                                                  node.zone.display_name ||
                                                  node.zone.name,
                                          }
                            "
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.ZONE_CHILDREN_RETRY'
                                    | translate
                                        : {
                                              name:
                                                  node.zone.display_name ||
                                                  node.zone.name,
                                          }
                            "
                            (click)="loadChildren(node.zone.id)"
                        >
                            <icon class="text-xl">refresh</icon>
                        </button>
                    }
                </cdk-tree-node>
            </cdk-tree>
            @if (list().has_more()) {
                <div
                    class="h-px w-full"
                    intersect
                    (intersect)="list().loadMore()"
                ></div>
            } @else if (list().error()) {
                <load-error (retry)="list().retry()" />
            }
        } @else if (list().loading()) {
            <div
                class="bg-base-200 flex h-[calc(100%-3.5rem)] w-full flex-col items-center justify-center rounded-lg p-16"
            >
                <div class="text-base-content/70">
                    {{ 'COMMON.LOADING' | translate }}
                </div>
            </div>
        } @else if (list().error()) {
            <load-error (retry)="list().retry()" />
        } @else {
            <div
                class="bg-base-200 flex h-[calc(100%-3.5rem)] w-full flex-col items-center justify-center space-y-4 rounded-lg p-16"
            >
                <icon class="text-base-content/70 text-8xl">layers_clear</icon>
                <div class="text-base-content/70">
                    {{ 'SIGNAGE_MANAGER.NO_ZONES' | translate }}
                </div>
            </div>
        }
    `, imports: [
      FormsModule,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      MatTooltipModule,
      CdkTreeModule,
      IconComponent,
      LoadErrorComponent,
      TranslatePipe,
      IntersectDirective
    ], styles: ["/* angular:styles/component:css;0efe9914d404dc30b59e0805acf2f2aa6df6864060a34bc250439cd33f674e7e;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/shared/zone-select-tree.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n.zone-tree {\n  background: transparent;\n}\n/*# sourceMappingURL=zone-select-tree.component.css.map */\n"] }]
  }], () => [], { list: [{ type: Input, args: [{ isSignal: true, alias: "list", required: true }] }], roots: [{ type: Input, args: [{ isSignal: true, alias: "roots", required: false }] }], load_children: [{ type: Input, args: [{ isSignal: true, alias: "load_children", required: false }] }], exclude_ids: [{ type: Input, args: [{ isSignal: true, alias: "exclude_ids", required: false }] }], scoped_search: [{ type: Input, args: [{ isSignal: true, alias: "scoped_search", required: false }] }], selected: [{ type: Input, args: [{ isSignal: true, alias: "selected", required: false }] }, { type: Output, args: ["selectedChange"] }], zoneSelected: [{ type: Output, args: ["zoneSelected"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneSelectTreeComponent, { className: "ZoneSelectTreeComponent", filePath: "apps/signage-manager/src/app/shared/zone-select-tree.component.ts", lineNumber: 260 });
})();

export {
  ZoneSelectTreeComponent
};
//# debugId=6fd718b9-6015-5849-aac6-9ca46e35d98c
//# sourceMappingURL=chunk-YXIYM5VC.js.map
