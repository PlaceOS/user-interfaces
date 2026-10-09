import {
  IntersectDirective
} from "./chunk-HXSW35PI.js";
import {
  LoadErrorComponent
} from "./chunk-WZLYCRCE.js";
import {
  SelectionModel
} from "./chunk-JKGJXOUJ.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-YVBXI2KA.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatSuffix
} from "./chunk-TP37P6LZ.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-GF5I6UHA.js";
import {
  TranslatePipe
} from "./chunk-KEXLIPA2.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-KABK725Z.js";
import {
  IconComponent
} from "./chunk-PRJCR3BE.js";
import {
  isDataSource
} from "./chunk-TQO6MZFG.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-C2I2ZQPH.js";
import {
  Directionality,
  TREE_KEY_MANAGER,
  coerceObservable
} from "./chunk-ZJXU3LLP.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  InjectionToken,
  Input,
  IterableDiffers,
  NgModule,
  Output,
  Subject,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  booleanAttribute,
  combineLatest,
  computed,
  concat,
  concatMap,
  distinctUntilChanged,
  effect,
  inject,
  input,
  isObservable,
  linkedSignal,
  map,
  model,
  numberAttribute,
  of,
  output,
  reduce,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-6HUGPUMR.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// node_modules/@angular/cdk/fesm2022/tree.mjs
var CDK_TREE_NODE_OUTLET_NODE = new InjectionToken("CDK_TREE_NODE_OUTLET_NODE");
var CdkTreeNodeOutlet = class _CdkTreeNodeOutlet {
  viewContainer = inject(ViewContainerRef);
  _node = inject(CDK_TREE_NODE_OUTLET_NODE, {
    optional: true
  });
  static \u0275fac = function CdkTreeNodeOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTreeNodeOutlet)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkTreeNodeOutlet,
    selectors: [["", "cdkTreeNodeOutlet", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNodeOutlet, [{
    type: Directive,
    args: [{
      selector: "[cdkTreeNodeOutlet]"
    }]
  }], null, null);
})();
var CdkTreeNodeOutletContext = class {
  $implicit;
  level;
  index;
  count;
  constructor(data) {
    this.$implicit = data;
  }
};
var CdkTreeNodeDef = class _CdkTreeNodeDef {
  template = inject(TemplateRef);
  when;
  static \u0275fac = function CdkTreeNodeDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTreeNodeDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkTreeNodeDef,
    selectors: [["", "cdkTreeNodeDef", ""]],
    inputs: {
      when: [0, "cdkTreeNodeDefWhen", "when"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNodeDef, [{
    type: Directive,
    args: [{
      selector: "[cdkTreeNodeDef]",
      inputs: [{
        name: "when",
        alias: "cdkTreeNodeDefWhen"
      }]
    }]
  }], null, null);
})();
function getTreeNoValidDataSourceError() {
  return Error(`A valid data source must be provided.`);
}
function getTreeMultipleDefaultNodeDefsError() {
  return Error(`There can only be one default row without a when predicate function.`);
}
function getTreeMissingMatchingNodeDefError() {
  return Error(`Could not find a matching node definition for the provided node data.`);
}
function getTreeControlMissingError() {
  return Error(`Could not find a tree control, levelAccessor, or childrenAccessor for the tree.`);
}
function getMultipleTreeControlsError() {
  return Error(`More than one of tree control, levelAccessor, or childrenAccessor were provided.`);
}
var CdkTree = class _CdkTree {
  _differs = inject(IterableDiffers);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _dir = inject(Directionality);
  _onDestroy = new Subject();
  _dataDiffer;
  _defaultNodeDef = null;
  _dataSubscription;
  _levels = /* @__PURE__ */ new Map();
  _parents = /* @__PURE__ */ new Map();
  _ariaSets = /* @__PURE__ */ new Map();
  get dataSource() {
    return this._dataSource;
  }
  set dataSource(dataSource) {
    if (this._dataSource !== dataSource) {
      this._switchDataSource(dataSource);
    }
  }
  _dataSource;
  treeControl;
  levelAccessor;
  childrenAccessor;
  trackBy;
  expansionKey;
  _nodeOutlet;
  _nodeDefs;
  viewChange = new BehaviorSubject({
    start: 0,
    end: Number.MAX_VALUE
  });
  _expansionModel;
  _flattenedNodes = new BehaviorSubject([]);
  _nodeType = new BehaviorSubject(null);
  _nodes = new BehaviorSubject(/* @__PURE__ */ new Map());
  _keyManagerNodes = new BehaviorSubject([]);
  _keyManagerFactory = inject(TREE_KEY_MANAGER);
  _keyManager;
  _viewInit = false;
  ngAfterContentInit() {
    this._initializeKeyManager();
  }
  ngAfterContentChecked() {
    this._updateDefaultNodeDefinition();
    this._subscribeToDataChanges();
  }
  ngOnDestroy() {
    this._nodeOutlet.viewContainer.clear();
    this._nodes.complete();
    this._keyManagerNodes.complete();
    this._nodeType.complete();
    this._flattenedNodes.complete();
    this.viewChange.complete();
    this._onDestroy.next();
    this._onDestroy.complete();
    if (this._dataSource && typeof this._dataSource.disconnect === "function") {
      this.dataSource.disconnect(this);
    }
    this._dataSubscription?.unsubscribe();
    this._dataSubscription = void 0;
    this._keyManager?.destroy();
  }
  ngOnInit() {
    this._checkTreeControlUsage();
    this._initializeDataDiffer();
  }
  ngAfterViewInit() {
    this._viewInit = true;
  }
  _updateDefaultNodeDefinition() {
    const defaultNodeDefs = this._nodeDefs.filter((def) => !def.when);
    if (defaultNodeDefs.length > 1 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTreeMultipleDefaultNodeDefsError();
    }
    this._defaultNodeDef = defaultNodeDefs[0];
  }
  _setNodeTypeIfUnset(newType) {
    const currentType = this._nodeType.value;
    if (currentType === null) {
      this._nodeType.next(newType);
    } else if ((typeof ngDevMode === "undefined" || ngDevMode) && currentType !== newType) {
      console.warn(`Tree is using conflicting node types which can cause unexpected behavior. Please use tree nodes of the same type (e.g. only flat or only nested). Current node type: "${currentType}", new node type "${newType}".`);
    }
  }
  _switchDataSource(dataSource) {
    if (this._dataSource && typeof this._dataSource.disconnect === "function") {
      this.dataSource.disconnect(this);
    }
    this._dataSubscription?.unsubscribe();
    this._dataSubscription = void 0;
    if (!dataSource) {
      this._nodeOutlet.viewContainer.clear();
    }
    this._dataSource = dataSource;
    if (this._nodeDefs) {
      this._subscribeToDataChanges();
    }
  }
  _getExpansionModel() {
    if (!this.treeControl) {
      this._expansionModel ??= new SelectionModel(true);
      return this._expansionModel;
    }
    return this.treeControl.expansionModel;
  }
  _subscribeToDataChanges() {
    if (this._dataSubscription) {
      return;
    }
    let dataStream;
    if (isDataSource(this._dataSource)) {
      dataStream = this._dataSource.connect(this);
    } else if (isObservable(this._dataSource)) {
      dataStream = this._dataSource;
    } else if (Array.isArray(this._dataSource)) {
      dataStream = of(this._dataSource);
    }
    if (!dataStream) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        throw getTreeNoValidDataSourceError();
      }
      return;
    }
    this._dataSubscription = this._getRenderData(dataStream).pipe(takeUntil(this._onDestroy)).subscribe((renderingData) => {
      this._renderDataChanges(renderingData);
    });
  }
  _getRenderData(dataStream) {
    const expansionModel = this._getExpansionModel();
    return combineLatest([dataStream, this._nodeType, expansionModel.changed.pipe(startWith(null), tap((expansionChanges) => {
      this._emitExpansionChanges(expansionChanges);
    }))]).pipe(switchMap(([data, nodeType]) => {
      if (nodeType === null) {
        return of({
          renderNodes: data,
          flattenedNodes: null,
          nodeType
        });
      }
      return this._computeRenderingData(data, nodeType).pipe(map((convertedData) => __spreadProps(__spreadValues({}, convertedData), {
        nodeType
      })));
    }));
  }
  _renderDataChanges(data) {
    if (data.nodeType === null) {
      this.renderNodeChanges(data.renderNodes);
      return;
    }
    this._updateCachedData(data.flattenedNodes);
    this.renderNodeChanges(data.renderNodes);
    this._updateKeyManagerItems(data.flattenedNodes);
  }
  _emitExpansionChanges(expansionChanges) {
    if (!expansionChanges) {
      return;
    }
    const nodes = this._nodes.value;
    for (const added of expansionChanges.added) {
      const node = nodes.get(added);
      node?._emitExpansionState(true);
    }
    for (const removed of expansionChanges.removed) {
      const node = nodes.get(removed);
      node?._emitExpansionState(false);
    }
  }
  _initializeKeyManager() {
    const items = combineLatest([this._keyManagerNodes, this._nodes]).pipe(map(([keyManagerNodes, renderNodes]) => keyManagerNodes.reduce((items2, data) => {
      const node = renderNodes.get(this._getExpansionKey(data));
      if (node) {
        items2.push(node);
      }
      return items2;
    }, [])));
    const keyManagerOptions = {
      trackBy: (node) => this._getExpansionKey(node.data),
      skipPredicate: (node) => !!node.isDisabled,
      typeAheadDebounceInterval: true,
      horizontalOrientation: this._dir.value
    };
    this._keyManager = this._keyManagerFactory(items, keyManagerOptions);
  }
  _initializeDataDiffer() {
    const trackBy = this.trackBy ?? ((_index, item) => this._getExpansionKey(item));
    this._dataDiffer = this._differs.find([]).create(trackBy);
  }
  _checkTreeControlUsage() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      let numTreeControls = 0;
      if (this.treeControl) {
        numTreeControls++;
      }
      if (this.levelAccessor) {
        numTreeControls++;
      }
      if (this.childrenAccessor) {
        numTreeControls++;
      }
      if (!numTreeControls) {
        throw getTreeControlMissingError();
      } else if (numTreeControls > 1) {
        throw getMultipleTreeControlsError();
      }
    }
  }
  renderNodeChanges(data, dataDiffer = this._dataDiffer, viewContainer = this._nodeOutlet.viewContainer, parentData) {
    const changes = dataDiffer.diff(data);
    if (!changes && !this._viewInit) {
      return;
    }
    changes?.forEachOperation((item, adjustedPreviousIndex, currentIndex) => {
      if (item.previousIndex == null) {
        this.insertNode(data[currentIndex], currentIndex, viewContainer, parentData);
      } else if (currentIndex == null) {
        viewContainer.remove(adjustedPreviousIndex);
      } else {
        const view = viewContainer.get(adjustedPreviousIndex);
        viewContainer.move(view, currentIndex);
      }
    });
    changes?.forEachIdentityChange((record) => {
      const newData = record.item;
      if (record.currentIndex != void 0) {
        const view = viewContainer.get(record.currentIndex);
        view.context.$implicit = newData;
      }
    });
    if (parentData) {
      this._changeDetectorRef.markForCheck();
    } else {
      this._changeDetectorRef.detectChanges();
    }
  }
  _getNodeDef(data, i) {
    if (this._nodeDefs.length === 1) {
      return this._nodeDefs.first;
    }
    const nodeDef = this._nodeDefs.find((def) => def.when && def.when(i, data)) || this._defaultNodeDef;
    if (!nodeDef && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTreeMissingMatchingNodeDefError();
    }
    return nodeDef;
  }
  insertNode(nodeData, index, viewContainer, parentData) {
    const levelAccessor = this._getLevelAccessor();
    const node = this._getNodeDef(nodeData, index);
    const key = this._getExpansionKey(nodeData);
    const context = new CdkTreeNodeOutletContext(nodeData);
    context.index = index;
    parentData ??= this._parents.get(key) ?? void 0;
    if (levelAccessor) {
      context.level = levelAccessor(nodeData);
    } else if (parentData !== void 0 && this._levels.has(this._getExpansionKey(parentData))) {
      context.level = this._levels.get(this._getExpansionKey(parentData)) + 1;
    } else {
      context.level = 0;
    }
    this._levels.set(key, context.level);
    const container = viewContainer ? viewContainer : this._nodeOutlet.viewContainer;
    container.createEmbeddedView(node.template, context, index);
    if (CdkTreeNode.mostRecentTreeNode) {
      CdkTreeNode.mostRecentTreeNode.data = nodeData;
    }
  }
  isExpanded(dataNode) {
    return !!(this.treeControl?.isExpanded(dataNode) || this._expansionModel?.isSelected(this._getExpansionKey(dataNode)));
  }
  toggle(dataNode) {
    if (this.treeControl) {
      this.treeControl.toggle(dataNode);
    } else if (this._expansionModel) {
      this._expansionModel.toggle(this._getExpansionKey(dataNode));
    }
  }
  expand(dataNode) {
    if (this.treeControl) {
      this.treeControl.expand(dataNode);
    } else if (this._expansionModel) {
      this._expansionModel.select(this._getExpansionKey(dataNode));
    }
  }
  collapse(dataNode) {
    if (this.treeControl) {
      this.treeControl.collapse(dataNode);
    } else if (this._expansionModel) {
      this._expansionModel.deselect(this._getExpansionKey(dataNode));
    }
  }
  toggleDescendants(dataNode) {
    if (this.treeControl) {
      this.treeControl.toggleDescendants(dataNode);
    } else if (this._expansionModel) {
      if (this.isExpanded(dataNode)) {
        this.collapseDescendants(dataNode);
      } else {
        this.expandDescendants(dataNode);
      }
    }
  }
  expandDescendants(dataNode) {
    if (this.treeControl) {
      this.treeControl.expandDescendants(dataNode);
    } else if (this._expansionModel) {
      const expansionModel = this._expansionModel;
      expansionModel.select(this._getExpansionKey(dataNode));
      this._getDescendants(dataNode).pipe(take(1), takeUntil(this._onDestroy)).subscribe((children) => {
        expansionModel.select(...children.map((child) => this._getExpansionKey(child)));
      });
    }
  }
  collapseDescendants(dataNode) {
    if (this.treeControl) {
      this.treeControl.collapseDescendants(dataNode);
    } else if (this._expansionModel) {
      const expansionModel = this._expansionModel;
      expansionModel.deselect(this._getExpansionKey(dataNode));
      this._getDescendants(dataNode).pipe(take(1), takeUntil(this._onDestroy)).subscribe((children) => {
        expansionModel.deselect(...children.map((child) => this._getExpansionKey(child)));
      });
    }
  }
  expandAll() {
    if (this.treeControl) {
      this.treeControl.expandAll();
    } else if (this._expansionModel) {
      this._forEachExpansionKey((keys) => this._expansionModel?.select(...keys));
    }
  }
  collapseAll() {
    if (this.treeControl) {
      this.treeControl.collapseAll();
    } else if (this._expansionModel) {
      this._forEachExpansionKey((keys) => this._expansionModel?.deselect(...keys));
    }
  }
  _getLevelAccessor() {
    return this.treeControl?.getLevel?.bind(this.treeControl) ?? this.levelAccessor;
  }
  _getChildrenAccessor() {
    return this.treeControl?.getChildren?.bind(this.treeControl) ?? this.childrenAccessor;
  }
  _getDirectChildren(dataNode) {
    const levelAccessor = this._getLevelAccessor();
    const expansionModel = this._expansionModel ?? this.treeControl?.expansionModel;
    if (!expansionModel) {
      return of([]);
    }
    const key = this._getExpansionKey(dataNode);
    const isExpanded = expansionModel.changed.pipe(switchMap((changes) => {
      if (changes.added.includes(key)) {
        return of(true);
      } else if (changes.removed.includes(key)) {
        return of(false);
      }
      return EMPTY;
    }), startWith(this.isExpanded(dataNode)));
    if (levelAccessor) {
      return combineLatest([isExpanded, this._flattenedNodes]).pipe(map(([expanded, flattenedNodes]) => {
        if (!expanded) {
          return [];
        }
        return this._findChildrenByLevel(levelAccessor, flattenedNodes, dataNode, 1);
      }));
    }
    const childrenAccessor = this._getChildrenAccessor();
    if (childrenAccessor) {
      return coerceObservable(childrenAccessor(dataNode) ?? []);
    }
    throw getTreeControlMissingError();
  }
  _findChildrenByLevel(levelAccessor, flattenedNodes, dataNode, levelDelta) {
    const key = this._getExpansionKey(dataNode);
    const startIndex = flattenedNodes.findIndex((node) => this._getExpansionKey(node) === key);
    const dataNodeLevel = levelAccessor(dataNode);
    const expectedLevel = dataNodeLevel + levelDelta;
    const results = [];
    for (let i = startIndex + 1; i < flattenedNodes.length; i++) {
      const currentLevel = levelAccessor(flattenedNodes[i]);
      if (currentLevel <= dataNodeLevel) {
        break;
      }
      if (currentLevel <= expectedLevel) {
        results.push(flattenedNodes[i]);
      }
    }
    return results;
  }
  _registerNode(node) {
    this._nodes.value.set(this._getExpansionKey(node.data), node);
    this._nodes.next(this._nodes.value);
  }
  _unregisterNode(node) {
    this._nodes.value.delete(this._getExpansionKey(node.data));
    this._nodes.next(this._nodes.value);
  }
  _getLevel(node) {
    return this._levels.get(this._getExpansionKey(node));
  }
  _getSetSize(dataNode) {
    const set = this._getAriaSet(dataNode);
    return set.length;
  }
  _getPositionInSet(dataNode) {
    const set = this._getAriaSet(dataNode);
    const key = this._getExpansionKey(dataNode);
    return set.findIndex((node) => this._getExpansionKey(node) === key) + 1;
  }
  _getNodeParent(node) {
    const parent = this._parents.get(this._getExpansionKey(node.data));
    return parent && this._nodes.value.get(this._getExpansionKey(parent));
  }
  _getNodeChildren(node) {
    return this._getDirectChildren(node.data).pipe(map((children) => children.reduce((nodes, child) => {
      const value = this._nodes.value.get(this._getExpansionKey(child));
      if (value) {
        nodes.push(value);
      }
      return nodes;
    }, [])));
  }
  _sendKeydownToKeyManager(event) {
    if (event.target === this._elementRef.nativeElement) {
      this._keyManager.onKeydown(event);
    } else {
      const nodes = this._nodes.getValue();
      for (const [, node] of nodes) {
        if (event.target === node._elementRef.nativeElement) {
          this._keyManager.onKeydown(event);
          break;
        }
      }
    }
  }
  _getDescendants(dataNode) {
    if (this.treeControl) {
      return of(this.treeControl.getDescendants(dataNode));
    }
    if (this.levelAccessor) {
      const results = this._findChildrenByLevel(this.levelAccessor, this._flattenedNodes.value, dataNode, Infinity);
      return of(results);
    }
    if (this.childrenAccessor) {
      return this._getAllChildrenRecursively(dataNode).pipe(reduce((allChildren, nextChildren) => {
        allChildren.push(...nextChildren);
        return allChildren;
      }, []));
    }
    throw getTreeControlMissingError();
  }
  _getAllChildrenRecursively(dataNode) {
    if (!this.childrenAccessor) {
      return of([]);
    }
    return coerceObservable(this.childrenAccessor(dataNode)).pipe(take(1), switchMap((children) => {
      for (const child of children) {
        this._parents.set(this._getExpansionKey(child), dataNode);
      }
      return of(...children).pipe(concatMap((child) => concat(of([child]), this._getAllChildrenRecursively(child))));
    }));
  }
  _getExpansionKey(dataNode) {
    return this.expansionKey?.(dataNode) ?? dataNode;
  }
  _getAriaSet(node) {
    const key = this._getExpansionKey(node);
    const parent = this._parents.get(key);
    const parentKey = parent ? this._getExpansionKey(parent) : null;
    const set = this._ariaSets.get(parentKey);
    return set ?? [node];
  }
  _findParentForNode(node, index, cachedNodes) {
    if (!cachedNodes.length) {
      return null;
    }
    const currentLevel = this._levels.get(this._getExpansionKey(node)) ?? 0;
    for (let parentIndex = index - 1; parentIndex >= 0; parentIndex--) {
      const parentNode = cachedNodes[parentIndex];
      const parentLevel = this._levels.get(this._getExpansionKey(parentNode)) ?? 0;
      if (parentLevel < currentLevel) {
        return parentNode;
      }
    }
    return null;
  }
  _flattenNestedNodesWithExpansion(nodes, level = 0) {
    const childrenAccessor = this._getChildrenAccessor();
    if (!childrenAccessor) {
      return of([...nodes]);
    }
    return of(...nodes).pipe(concatMap((node) => {
      const parentKey = this._getExpansionKey(node);
      if (!this._parents.has(parentKey)) {
        this._parents.set(parentKey, null);
      }
      this._levels.set(parentKey, level);
      const children = coerceObservable(childrenAccessor(node));
      return concat(of([node]), children.pipe(take(1), tap((childNodes) => {
        this._ariaSets.set(parentKey, [...childNodes ?? []]);
        for (const child of childNodes ?? []) {
          const childKey = this._getExpansionKey(child);
          this._parents.set(childKey, node);
          this._levels.set(childKey, level + 1);
        }
      }), switchMap((childNodes) => {
        if (!childNodes) {
          return of([]);
        }
        return this._flattenNestedNodesWithExpansion(childNodes, level + 1).pipe(map((nestedNodes) => this.isExpanded(node) ? nestedNodes : []));
      })));
    }), reduce((results, children) => {
      results.push(...children);
      return results;
    }, []));
  }
  _computeRenderingData(nodes, nodeType) {
    if (this.childrenAccessor && nodeType === "flat") {
      this._clearPreviousCache();
      this._ariaSets.set(null, [...nodes]);
      return this._flattenNestedNodesWithExpansion(nodes).pipe(map((flattenedNodes) => ({
        renderNodes: flattenedNodes,
        flattenedNodes
      })));
    } else if (this.levelAccessor && nodeType === "nested") {
      const levelAccessor = this.levelAccessor;
      return of(nodes.filter((node) => levelAccessor(node) === 0)).pipe(map((rootNodes) => ({
        renderNodes: rootNodes,
        flattenedNodes: nodes
      })), tap(({
        flattenedNodes
      }) => {
        this._calculateParents(flattenedNodes);
      }));
    } else if (nodeType === "flat") {
      return of({
        renderNodes: nodes,
        flattenedNodes: nodes
      }).pipe(tap(({
        flattenedNodes
      }) => {
        this._calculateParents(flattenedNodes);
      }));
    } else {
      this._clearPreviousCache();
      this._ariaSets.set(null, [...nodes]);
      return this._flattenNestedNodesWithExpansion(nodes).pipe(map((flattenedNodes) => ({
        renderNodes: nodes,
        flattenedNodes
      })));
    }
  }
  _updateCachedData(flattenedNodes) {
    this._flattenedNodes.next(flattenedNodes);
  }
  _updateKeyManagerItems(flattenedNodes) {
    this._keyManagerNodes.next(flattenedNodes);
  }
  _calculateParents(flattenedNodes) {
    const levelAccessor = this._getLevelAccessor();
    if (!levelAccessor) {
      return;
    }
    this._clearPreviousCache();
    for (let index = 0; index < flattenedNodes.length; index++) {
      const dataNode = flattenedNodes[index];
      const key = this._getExpansionKey(dataNode);
      this._levels.set(key, levelAccessor(dataNode));
      const parent = this._findParentForNode(dataNode, index, flattenedNodes);
      this._parents.set(key, parent);
      const parentKey = parent ? this._getExpansionKey(parent) : null;
      const group = this._ariaSets.get(parentKey) ?? [];
      group.splice(index, 0, dataNode);
      this._ariaSets.set(parentKey, group);
    }
  }
  _forEachExpansionKey(callback) {
    const toToggle = [];
    const observables = [];
    this._nodes.value.forEach((node) => {
      toToggle.push(this._getExpansionKey(node.data));
      observables.push(this._getDescendants(node.data));
    });
    if (observables.length > 0) {
      combineLatest(observables).pipe(take(1), takeUntil(this._onDestroy)).subscribe((results) => {
        results.forEach((inner) => inner.forEach((r) => toToggle.push(this._getExpansionKey(r))));
        callback(toToggle);
      });
    } else {
      callback(toToggle);
    }
  }
  _clearPreviousCache() {
    this._parents.clear();
    this._levels.clear();
    this._ariaSets.clear();
  }
  static \u0275fac = function CdkTree_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTree)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkTree,
    selectors: [["cdk-tree"]],
    contentQueries: function CdkTree_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, CdkTreeNodeDef, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._nodeDefs = _t);
      }
    },
    viewQuery: function CdkTree_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(CdkTreeNodeOutlet, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._nodeOutlet = _t.first);
      }
    },
    hostAttrs: ["role", "tree", 1, "cdk-tree"],
    hostBindings: function CdkTree_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function CdkTree_keydown_HostBindingHandler($event) {
          return ctx._sendKeydownToKeyManager($event);
        });
      }
    },
    inputs: {
      dataSource: "dataSource",
      treeControl: "treeControl",
      levelAccessor: "levelAccessor",
      childrenAccessor: "childrenAccessor",
      trackBy: "trackBy",
      expansionKey: "expansionKey"
    },
    exportAs: ["cdkTree"],
    decls: 1,
    vars: 0,
    consts: [["cdkTreeNodeOutlet", ""]],
    template: function CdkTree_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0, 0);
      }
    },
    dependencies: [CdkTreeNodeOutlet],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTree, [{
    type: Component,
    args: [{
      selector: "cdk-tree",
      exportAs: "cdkTree",
      template: `<ng-container cdkTreeNodeOutlet></ng-container>`,
      host: {
        "class": "cdk-tree",
        "role": "tree",
        "(keydown)": "_sendKeydownToKeyManager($event)"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Eager,
      imports: [CdkTreeNodeOutlet]
    }]
  }], null, {
    dataSource: [{
      type: Input
    }],
    treeControl: [{
      type: Input
    }],
    levelAccessor: [{
      type: Input
    }],
    childrenAccessor: [{
      type: Input
    }],
    trackBy: [{
      type: Input
    }],
    expansionKey: [{
      type: Input
    }],
    _nodeOutlet: [{
      type: ViewChild,
      args: [CdkTreeNodeOutlet, {
        static: true
      }]
    }],
    _nodeDefs: [{
      type: ContentChildren,
      args: [CdkTreeNodeDef, {
        descendants: true
      }]
    }]
  });
})();
var CdkTreeNode = class _CdkTreeNode {
  _elementRef = inject(ElementRef);
  _tree = inject(CdkTree);
  _tabindex = -1;
  _type = "flat";
  get role() {
    return "treeitem";
  }
  set role(_role) {
  }
  get isExpandable() {
    return this._isExpandable();
  }
  set isExpandable(isExpandable) {
    this._inputIsExpandable = isExpandable;
    if (this.data && !this._isExpandable || !this._inputIsExpandable) {
      return;
    }
    if (this._inputIsExpanded) {
      this.expand();
    } else if (this._inputIsExpanded === false) {
      this.collapse();
    }
  }
  get isExpanded() {
    return this._tree.isExpanded(this._data);
  }
  set isExpanded(isExpanded) {
    this._inputIsExpanded = isExpanded;
    if (isExpanded) {
      this.expand();
    } else {
      this.collapse();
    }
  }
  isDisabled = false;
  typeaheadLabel = null;
  getLabel() {
    return this.typeaheadLabel || this._elementRef.nativeElement.textContent?.trim() || "";
  }
  activation = new EventEmitter();
  expandedChange = new EventEmitter();
  static mostRecentTreeNode = null;
  _destroyed = new Subject();
  _dataChanges = new Subject();
  _inputIsExpandable = false;
  _inputIsExpanded = void 0;
  _shouldFocus = true;
  _parentNodeAriaLevel;
  get data() {
    return this._data;
  }
  set data(value) {
    if (value !== this._data) {
      this._data = value;
      this._dataChanges.next();
    }
  }
  _data;
  get isLeafNode() {
    if (this._tree.treeControl?.isExpandable !== void 0 && !this._tree.treeControl.isExpandable(this._data)) {
      return true;
    } else if (this._tree.treeControl?.isExpandable === void 0 && this._tree.treeControl?.getDescendants(this._data).length === 0) {
      return true;
    }
    return false;
  }
  get level() {
    return this._tree._getLevel(this._data) ?? this._parentNodeAriaLevel;
  }
  _isExpandable() {
    if (this._tree.treeControl) {
      if (this.isLeafNode) {
        return false;
      }
      return true;
    }
    return this._inputIsExpandable;
  }
  _getAriaExpanded() {
    if (!this._isExpandable()) {
      return null;
    }
    return String(this.isExpanded);
  }
  _getSetSize() {
    return this._tree._getSetSize(this._data);
  }
  _getPositionInSet() {
    return this._tree._getPositionInSet(this._data);
  }
  _changeDetectorRef = inject(ChangeDetectorRef);
  constructor() {
    _CdkTreeNode.mostRecentTreeNode = this;
  }
  ngOnInit() {
    this._parentNodeAriaLevel = getParentNodeAriaLevel(this._elementRef.nativeElement);
    this._tree._getExpansionModel().changed.pipe(map(() => this.isExpanded), distinctUntilChanged(), takeUntil(this._destroyed)).pipe(takeUntil(this._destroyed)).subscribe(() => this._changeDetectorRef.markForCheck());
    this._tree._setNodeTypeIfUnset(this._type);
    this._tree._registerNode(this);
  }
  ngOnDestroy() {
    if (_CdkTreeNode.mostRecentTreeNode === this) {
      _CdkTreeNode.mostRecentTreeNode = null;
    }
    this._dataChanges.complete();
    this._destroyed.next();
    this._destroyed.complete();
  }
  getParent() {
    return this._tree._getNodeParent(this) ?? null;
  }
  getChildren() {
    return this._tree._getNodeChildren(this);
  }
  focus() {
    this._tabindex = 0;
    if (this._shouldFocus) {
      this._elementRef.nativeElement.focus();
    }
    this._changeDetectorRef.markForCheck();
  }
  unfocus() {
    this._tabindex = -1;
    this._changeDetectorRef.markForCheck();
  }
  activate() {
    if (this.isDisabled) {
      return;
    }
    this.activation.next(this._data);
  }
  collapse() {
    if (this.isExpandable) {
      this._tree.collapse(this._data);
    }
  }
  expand() {
    if (this.isExpandable) {
      this._tree.expand(this._data);
    }
  }
  makeFocusable() {
    this._tabindex = 0;
    this._changeDetectorRef.markForCheck();
  }
  _focusItem() {
    if (this.isDisabled) {
      return;
    }
    this._tree._keyManager.focusItem(this);
  }
  _setActiveItem() {
    if (this.isDisabled) {
      return;
    }
    this._shouldFocus = false;
    this._tree._keyManager.focusItem(this);
    this._shouldFocus = true;
  }
  _emitExpansionState(expanded) {
    this.expandedChange.emit(expanded);
  }
  static \u0275fac = function CdkTreeNode_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTreeNode)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkTreeNode,
    selectors: [["cdk-tree-node"]],
    hostAttrs: ["role", "treeitem", 1, "cdk-tree-node"],
    hostVars: 5,
    hostBindings: function CdkTreeNode_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function CdkTreeNode_click_HostBindingHandler() {
          return ctx._setActiveItem();
        })("focus", function CdkTreeNode_focus_HostBindingHandler() {
          return ctx._focusItem();
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("tabIndex", ctx._tabindex);
        \u0275\u0275attribute("aria-expanded", ctx._getAriaExpanded())("aria-level", ctx.level + 1)("aria-posinset", ctx._getPositionInSet())("aria-setsize", ctx._getSetSize());
      }
    },
    inputs: {
      role: "role",
      isExpandable: [2, "isExpandable", "isExpandable", booleanAttribute],
      isExpanded: "isExpanded",
      isDisabled: [2, "isDisabled", "isDisabled", booleanAttribute],
      typeaheadLabel: [0, "cdkTreeNodeTypeaheadLabel", "typeaheadLabel"]
    },
    outputs: {
      activation: "activation",
      expandedChange: "expandedChange"
    },
    exportAs: ["cdkTreeNode"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNode, [{
    type: Directive,
    args: [{
      selector: "cdk-tree-node",
      exportAs: "cdkTreeNode",
      host: {
        "class": "cdk-tree-node",
        "[attr.aria-expanded]": "_getAriaExpanded()",
        "[attr.aria-level]": "level + 1",
        "[attr.aria-posinset]": "_getPositionInSet()",
        "[attr.aria-setsize]": "_getSetSize()",
        "[tabindex]": "_tabindex",
        "role": "treeitem",
        "(click)": "_setActiveItem()",
        "(focus)": "_focusItem()"
      }
    }]
  }], () => [], {
    role: [{
      type: Input
    }],
    isExpandable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    isExpanded: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    typeaheadLabel: [{
      type: Input,
      args: ["cdkTreeNodeTypeaheadLabel"]
    }],
    activation: [{
      type: Output
    }],
    expandedChange: [{
      type: Output
    }]
  });
})();
function getParentNodeAriaLevel(nodeElement) {
  let parent = nodeElement.parentElement;
  while (parent && !isNodeElement(parent)) {
    parent = parent.parentElement;
  }
  if (!parent) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw Error("Incorrect tree structure containing detached node.");
    } else {
      return -1;
    }
  } else if (parent.classList.contains("cdk-nested-tree-node")) {
    return numberAttribute(parent.getAttribute("aria-level"));
  } else {
    return 0;
  }
}
function isNodeElement(element) {
  const classList = element.classList;
  return !!(classList?.contains("cdk-nested-tree-node") || classList?.contains("cdk-tree"));
}
var CdkNestedTreeNode = class _CdkNestedTreeNode extends CdkTreeNode {
  _type = "nested";
  _differs = inject(IterableDiffers);
  _dataDiffer;
  _children;
  nodeOutlet;
  ngAfterContentInit() {
    this._dataDiffer = this._differs.find([]).create(this._tree.trackBy);
    this._tree._getDirectChildren(this.data).pipe(takeUntil(this._destroyed)).subscribe((result) => this.updateChildrenNodes(result));
    this.nodeOutlet.changes.pipe(takeUntil(this._destroyed)).subscribe(() => this.updateChildrenNodes());
  }
  ngOnDestroy() {
    this._clear();
    super.ngOnDestroy();
  }
  updateChildrenNodes(children) {
    const outlet = this._getNodeOutlet();
    if (children) {
      this._children = children;
    }
    if (outlet && this._children) {
      const viewContainer = outlet.viewContainer;
      this._tree.renderNodeChanges(this._children, this._dataDiffer, viewContainer, this._data);
    } else {
      this._dataDiffer.diff([]);
    }
  }
  _clear() {
    const outlet = this._getNodeOutlet();
    if (outlet) {
      outlet.viewContainer.clear();
      this._dataDiffer.diff([]);
    }
  }
  _getNodeOutlet() {
    const outlets = this.nodeOutlet;
    return outlets && outlets.find((outlet) => !outlet._node || outlet._node === this);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CdkNestedTreeNode_BaseFactory;
    return function CdkNestedTreeNode_Factory(__ngFactoryType__) {
      return (\u0275CdkNestedTreeNode_BaseFactory || (\u0275CdkNestedTreeNode_BaseFactory = \u0275\u0275getInheritedFactory(_CdkNestedTreeNode)))(__ngFactoryType__ || _CdkNestedTreeNode);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkNestedTreeNode,
    selectors: [["cdk-nested-tree-node"]],
    contentQueries: function CdkNestedTreeNode_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, CdkTreeNodeOutlet, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nodeOutlet = _t);
      }
    },
    hostAttrs: [1, "cdk-nested-tree-node"],
    exportAs: ["cdkNestedTreeNode"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkTreeNode,
      useExisting: _CdkNestedTreeNode
    }, {
      provide: CDK_TREE_NODE_OUTLET_NODE,
      useExisting: _CdkNestedTreeNode
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkNestedTreeNode, [{
    type: Directive,
    args: [{
      selector: "cdk-nested-tree-node",
      exportAs: "cdkNestedTreeNode",
      providers: [{
        provide: CdkTreeNode,
        useExisting: CdkNestedTreeNode
      }, {
        provide: CDK_TREE_NODE_OUTLET_NODE,
        useExisting: CdkNestedTreeNode
      }],
      host: {
        "class": "cdk-nested-tree-node"
      }
    }]
  }], null, {
    nodeOutlet: [{
      type: ContentChildren,
      args: [CdkTreeNodeOutlet, {
        descendants: true
      }]
    }]
  });
})();
var cssUnitPattern = /([A-Za-z%]+)$/;
var CdkTreeNodePadding = class _CdkTreeNodePadding {
  _treeNode = inject(CdkTreeNode);
  _tree = inject(CdkTree);
  _element = inject(ElementRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _currentPadding = null;
  _destroyed = new Subject();
  indentUnits = "px";
  get level() {
    return this._level;
  }
  set level(value) {
    this._setLevelInput(value);
  }
  _level;
  get indent() {
    return this._indent;
  }
  set indent(indent) {
    this._setIndentInput(indent);
  }
  _indent = 40;
  constructor() {
    this._setPadding();
    this._dir?.change.pipe(takeUntil(this._destroyed)).subscribe(() => this._setPadding(true));
    this._treeNode._dataChanges.subscribe(() => this._setPadding());
  }
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
  _paddingIndent() {
    const nodeLevel = (this._treeNode.data && this._tree._getLevel(this._treeNode.data)) ?? null;
    const level = this._level == null ? nodeLevel : this._level;
    return typeof level === "number" ? `${level * this._indent}${this.indentUnits}` : null;
  }
  _setPadding(forceChange = false) {
    const padding = this._paddingIndent();
    if (padding !== this._currentPadding || forceChange) {
      const element = this._element.nativeElement;
      const paddingProp = this._dir && this._dir.value === "rtl" ? "paddingRight" : "paddingLeft";
      const resetProp = paddingProp === "paddingLeft" ? "paddingRight" : "paddingLeft";
      element.style[paddingProp] = padding || "";
      element.style[resetProp] = "";
      this._currentPadding = padding;
    }
  }
  _setLevelInput(value) {
    this._level = isNaN(value) ? null : value;
    this._setPadding();
  }
  _setIndentInput(indent) {
    let value = indent;
    let units = "px";
    if (typeof indent === "string") {
      const parts = indent.split(cssUnitPattern);
      value = parts[0];
      units = parts[1] || units;
    }
    this.indentUnits = units;
    this._indent = numberAttribute(value);
    this._setPadding();
  }
  static \u0275fac = function CdkTreeNodePadding_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTreeNodePadding)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkTreeNodePadding,
    selectors: [["", "cdkTreeNodePadding", ""]],
    inputs: {
      level: [2, "cdkTreeNodePadding", "level", numberAttribute],
      indent: [0, "cdkTreeNodePaddingIndent", "indent"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNodePadding, [{
    type: Directive,
    args: [{
      selector: "[cdkTreeNodePadding]"
    }]
  }], () => [], {
    level: [{
      type: Input,
      args: [{
        alias: "cdkTreeNodePadding",
        transform: numberAttribute
      }]
    }],
    indent: [{
      type: Input,
      args: ["cdkTreeNodePaddingIndent"]
    }]
  });
})();
var CdkTreeNodeToggle = class _CdkTreeNodeToggle {
  _tree = inject(CdkTree);
  _treeNode = inject(CdkTreeNode);
  recursive = false;
  _toggle(event) {
    event.stopPropagation();
    this.recursive ? this._tree.toggleDescendants(this._treeNode.data) : this._tree.toggle(this._treeNode.data);
    this._tree._keyManager.focusItem(this._treeNode);
  }
  static \u0275fac = function CdkTreeNodeToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTreeNodeToggle)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkTreeNodeToggle,
    selectors: [["", "cdkTreeNodeToggle", ""]],
    hostAttrs: ["tabindex", "-1"],
    hostBindings: function CdkTreeNodeToggle_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function CdkTreeNodeToggle_click_HostBindingHandler($event) {
          return ctx._toggle($event);
        })("keydown.Enter", function CdkTreeNodeToggle_keydown_Enter_HostBindingHandler($event) {
          ctx._toggle($event);
          return $event.preventDefault();
        })("keydown.Space", function CdkTreeNodeToggle_keydown_Space_HostBindingHandler($event) {
          ctx._toggle($event);
          return $event.preventDefault();
        });
      }
    },
    inputs: {
      recursive: [2, "cdkTreeNodeToggleRecursive", "recursive", booleanAttribute]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNodeToggle, [{
    type: Directive,
    args: [{
      selector: "[cdkTreeNodeToggle]",
      host: {
        "(click)": "_toggle($event)",
        "(keydown.Enter)": "_toggle($event); $event.preventDefault();",
        "(keydown.Space)": "_toggle($event); $event.preventDefault();",
        "tabindex": "-1"
      }
    }]
  }], null, {
    recursive: [{
      type: Input,
      args: [{
        alias: "cdkTreeNodeToggleRecursive",
        transform: booleanAttribute
      }]
    }]
  });
})();
var EXPORTED_DECLARATIONS = [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet];
var CdkTreeModule = class _CdkTreeModule {
  static \u0275fac = function CdkTreeModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTreeModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CdkTreeModule,
    imports: [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet],
    exports: [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeModule, [{
    type: NgModule,
    args: [{
      imports: EXPORTED_DECLARATIONS,
      exports: EXPORTED_DECLARATIONS
    }]
  }], null, null);
})();

// apps/signage-manager/src/app/shared/zone-select-tree.component.ts
var _c0 = (a0) => ({ name: a0 });
function ZoneSelectTreeComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ZoneSelectTreeComponent_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearScope());
    });
    \u0275\u0275elementStart(3, "icon", 6);
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.SEARCH_ALL_ZONES"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.SEARCH_ALL_ZONES"));
  }
}
function ZoneSelectTreeComponent_Conditional_5_cdk_tree_node_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ZoneSelectTreeComponent_Conditional_5_cdk_tree_node_1_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const node_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleNode(node_r4));
    });
    \u0275\u0275elementStart(2, "icon", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const node_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(1, 2, ctx_r1.isExpanded(node_r4) ? "SIGNAGE_MANAGER.COLLAPSE_ZONE" : "SIGNAGE_MANAGER.EXPAND_ZONE", \u0275\u0275pureFunction1(5, _c0, node_r4.zone.display_name || node_r4.zone.name)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isExpanded(node_r4) ? "expand_more" : "chevron_right", " ");
  }
}
function ZoneSelectTreeComponent_Conditional_5_cdk_tree_node_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 13);
  }
}
function ZoneSelectTreeComponent_Conditional_5_cdk_tree_node_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.childCount(node_r4), " ");
  }
}
function ZoneSelectTreeComponent_Conditional_5_cdk_tree_node_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 19);
    \u0275\u0275text(1, "autorenew");
    \u0275\u0275elementEnd();
  }
}
function ZoneSelectTreeComponent_Conditional_5_cdk_tree_node_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", node_r4.zone.description, " ");
  }
}
function ZoneSelectTreeComponent_Conditional_5_cdk_tree_node_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ZoneSelectTreeComponent_Conditional_5_cdk_tree_node_1_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const node_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadChildren(node_r4.zone.id));
    });
    \u0275\u0275elementStart(3, "icon", 6);
    \u0275\u0275text(4, "refresh");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const node_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(1, 2, "SIGNAGE_MANAGER.ZONE_CHILDREN_RETRY", \u0275\u0275pureFunction1(8, _c0, node_r4.zone.display_name || node_r4.zone.name)));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(2, 5, "SIGNAGE_MANAGER.ZONE_CHILDREN_RETRY", \u0275\u0275pureFunction1(10, _c0, node_r4.zone.display_name || node_r4.zone.name)));
  }
}
function ZoneSelectTreeComponent_Conditional_5_cdk_tree_node_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cdk-tree-node", 10);
    \u0275\u0275listener("expandedChange", function ZoneSelectTreeComponent_Conditional_5_cdk_tree_node_1_Template_cdk_tree_node_expandedChange_0_listener($event) {
      const node_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onExpandedChange(node_r4, $event));
    })("activation", function ZoneSelectTreeComponent_Conditional_5_cdk_tree_node_1_Template_cdk_tree_node_activation_0_listener() {
      const node_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectZone(node_r4.zone));
    });
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275conditionalCreate(2, ZoneSelectTreeComponent_Conditional_5_cdk_tree_node_1_Conditional_2_Template, 4, 7, "button", 12)(3, ZoneSelectTreeComponent_Conditional_5_cdk_tree_node_1_Conditional_3_Template, 1, 0, "div", 13);
    \u0275\u0275elementStart(4, "button", 14);
    \u0275\u0275listener("click", function ZoneSelectTreeComponent_Conditional_5_cdk_tree_node_1_Template_button_click_4_listener() {
      const node_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectZone(node_r4.zone));
    });
    \u0275\u0275elementStart(5, "div", 15)(6, "div", 16)(7, "div", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, ZoneSelectTreeComponent_Conditional_5_cdk_tree_node_1_Conditional_9_Template, 2, 1, "span", 18);
    \u0275\u0275conditionalCreate(10, ZoneSelectTreeComponent_Conditional_5_cdk_tree_node_1_Conditional_10_Template, 2, 0, "icon", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, ZoneSelectTreeComponent_Conditional_5_cdk_tree_node_1_Conditional_11_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, ZoneSelectTreeComponent_Conditional_5_cdk_tree_node_1_Conditional_12_Template, 5, 12, "button", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-primary", ctx_r1.selected()?.id === node_r4.zone.id)("text-primary-content", ctx_r1.selected()?.id === node_r4.zone.id)("hover:bg-base-200", ctx_r1.selected()?.id !== node_r4.zone.id);
    \u0275\u0275property("cdkTreeNodePadding", node_r4.level)("cdkTreeNodePaddingIndent", 16)("isExpandable", ctx_r1.canExpand(node_r4))("isExpanded", ctx_r1.isExpanded(node_r4));
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", 0.25 * node_r4.level + "rem")("opacity", 0.1 * node_r4.level);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canExpand(node_r4) ? 2 : 3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", node_r4.zone.display_name || node_r4.zone.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.childCount(node_r4) ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(node_r4.children_loading ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(node_r4.zone.description ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(node_r4.children_error ? 12 : -1);
  }
}
function ZoneSelectTreeComponent_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275listener("intersect", function ZoneSelectTreeComponent_Conditional_5_Conditional_2_Template_div_intersect_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.list().loadMore());
    });
    \u0275\u0275elementEnd();
  }
}
function ZoneSelectTreeComponent_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "load-error", 25);
    \u0275\u0275listener("retry", function ZoneSelectTreeComponent_Conditional_5_Conditional_3_Template_load_error_retry_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.list().retry());
    });
    \u0275\u0275elementEnd();
  }
}
function ZoneSelectTreeComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "cdk-tree", 7);
    \u0275\u0275template(1, ZoneSelectTreeComponent_Conditional_5_cdk_tree_node_1_Template, 13, 20, "cdk-tree-node", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, ZoneSelectTreeComponent_Conditional_5_Conditional_2_Template, 1, 0, "div", 9)(3, ZoneSelectTreeComponent_Conditional_5_Conditional_3_Template, 1, 0, "load-error");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("dataSource", ctx_r1.flat_tree_nodes())("levelAccessor", ctx_r1.levelAccessor)("expansionKey", ctx_r1.expansionKey)("trackBy", ctx_r1.trackByNode);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.list().has_more() ? 2 : ctx_r1.list().error() ? 3 : -1);
  }
}
function ZoneSelectTreeComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.LOADING"), " ");
  }
}
function ZoneSelectTreeComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "load-error", 25);
    \u0275\u0275listener("retry", function ZoneSelectTreeComponent_Conditional_7_Template_load_error_retry_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.list().retry());
    });
    \u0275\u0275elementEnd();
  }
}
function ZoneSelectTreeComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "icon", 27);
    \u0275\u0275text(2, "layers_clear");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 26);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_ZONES"), " ");
  }
}
function zoneSearchLabel(zone) {
  return zone?.id ? {
    key: "SIGNAGE_MANAGER.SEARCH_IN_ZONE",
    params: { name: zone.display_name || zone.name || zone.id }
  } : { key: "SIGNAGE_MANAGER.SEARCH_ZONES", params: {} };
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
    this.search_scope = computed(
      () => this.scoped_search() && this.selected()?.id ? this.selected() : null,
      ...ngDevMode ? [{ debugName: "search_scope" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search_label = computed(
      () => zoneSearchLabel(this.search_scope()),
      ...ngDevMode ? [{ debugName: "search_label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_search_results = computed(
      () => !!this.list().search().trim() && !!this.list().term().trim(),
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
        if (!searching)
          return this.buildTree(zones, excluded, lazy);
        const results = zones.filter((zone) => zone.id !== selected?.id && !excluded.has(zone.id)).map((zone) => this.createNode(zone, false));
        if (!selected || excluded.has(selected.id))
          return results;
        return [
          {
            zone: selected,
            children: results,
            children_loaded: true,
            children_loading: false,
            children_error: false,
            level: 0
          }
        ];
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
  /** Search every reachable zone, not only the selected zone */
  clearScope() {
    this.selected.set(null);
    this.list().refresh();
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneSelectTreeComponent, selectors: [["zone-select-tree"]], inputs: { list: [1, "list"], roots: [1, "roots"], load_children: [1, "load_children"], exclude_ids: [1, "exclude_ids"], scoped_search: [1, "scoped_search"], selected: [1, "selected"] }, outputs: { selected: "selectedChange", zoneSelected: "zoneSelected" }, decls: 9, vars: 8, consts: [["appearance", "outline", 1, "no-subscript", "bg-base-100", "sticky", "top-0", "z-10", "w-full", "pb-2"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["icon", "", "matSuffix", "", "type", "button", 3, "matTooltip"], [1, "bg-base-200", "flex", "h-[calc(100%-3.5rem)]", "w-full", "flex-col", "items-center", "justify-center", "rounded-lg", "p-16"], [1, "bg-base-200", "flex", "h-[calc(100%-3.5rem)]", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-lg", "p-16"], ["icon", "", "matSuffix", "", "type", "button", 3, "click", "matTooltip"], [1, "text-xl"], [1, "zone-tree", 3, "dataSource", "levelAccessor", "expansionKey", "trackBy"], ["cdkTreeNodePadding", "", "class", "border-base-300 bg-base-100 hover:bg-base-200/50 relative mb-2 flex min-h-0 items-center gap-1 overflow-hidden rounded-lg border pr-1 transition-colors", 3, "cdkTreeNodePadding", "cdkTreeNodePaddingIndent", "isExpandable", "isExpanded", "bg-primary", "text-primary-content", "hover:bg-base-200", "expandedChange", "activation", 4, "cdkTreeNodeDef"], ["intersect", "", 1, "h-px", "w-full"], ["cdkTreeNodePadding", "", 1, "border-base-300", "bg-base-100", "hover:bg-base-200/50", "relative", "mb-2", "flex", "min-h-0", "items-center", "gap-1", "overflow-hidden", "rounded-lg", "border", "pr-1", "transition-colors", 3, "expandedChange", "activation", "cdkTreeNodePadding", "cdkTreeNodePaddingIndent", "isExpandable", "isExpanded"], ["aria-hidden", "true", 1, "bg-base-content", "absolute", "inset-y-1", "left-1", "rounded-sm"], ["icon", "", "default", "", "type", "button", 1, "ml-2", "text-xs"], [1, "ml-1", "min-w-7"], ["type", "button", "matRipple", "", 1, "flex", "min-h-16", "min-w-0", "flex-1", "items-center", "gap-2", "px-1", "py-2", "text-left", 3, "click"], [1, "min-w-0", "flex-1"], [1, "flex", "items-center", "gap-2"], [1, "min-w-0", "flex-1", "truncate", "font-medium"], [1, "bg-base-200", "text-base-content/70", "rounded-full", "px-2", "py-0.5", "text-xs"], [1, "animate-spin", "text-lg"], [1, "mt-0.5", "truncate", "text-xs", "opacity-70"], ["icon", "", "default", "", "type", "button", 1, "text-error", 3, "matTooltip"], ["icon", "", "default", "", "type", "button", 1, "ml-2", "text-xs", 3, "click"], ["icon", "", "default", "", "type", "button", 1, "text-error", 3, "click", "matTooltip"], ["intersect", "", 1, "h-px", "w-full", 3, "intersect"], [3, "retry"], [1, "text-base-content/70"], [1, "text-base-content/70", "text-8xl"]], template: function ZoneSelectTreeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275declareLet(0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275elementStart(2, "mat-form-field", 0)(3, "input", 1);
        \u0275\u0275listener("ngModelChange", function ZoneSelectTreeComponent_Template_input_ngModelChange_3_listener($event) {
          return ctx.list().search.set($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(4, ZoneSelectTreeComponent_Conditional_4_Template, 5, 6, "button", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, ZoneSelectTreeComponent_Conditional_5_Template, 4, 5)(6, ZoneSelectTreeComponent_Conditional_6_Template, 4, 3, "div", 3)(7, ZoneSelectTreeComponent_Conditional_7_Template, 1, 0, "load-error")(8, ZoneSelectTreeComponent_Conditional_8_Template, 6, 3, "div", 4);
      }
      if (rf & 2) {
        const search_text_r10 = \u0275\u0275pipeBind2(1, 5, ctx.search_label().key, ctx.search_label().params);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.list().search())("placeholder", search_text_r10);
        \u0275\u0275attribute("aria-label", search_text_r10);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.search_scope() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.flat_tree_nodes().length ? 5 : ctx.list().loading() ? 6 : ctx.list().error() ? 7 : 8);
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
      MatSuffix,
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
        @let search_text =
            search_label().key | translate: search_label().params;
        <mat-form-field
            appearance="outline"
            class="no-subscript bg-base-100 sticky top-0 z-10 w-full pb-2"
        >
            <input
                matInput
                [ngModel]="list().search()"
                (ngModelChange)="list().search.set($event)"
                [placeholder]="search_text"
                [attr.aria-label]="search_text"
            />
            @if (search_scope()) {
                <button
                    icon
                    matSuffix
                    type="button"
                    [matTooltip]="
                        'SIGNAGE_MANAGER.SEARCH_ALL_ZONES' | translate
                    "
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.SEARCH_ALL_ZONES' | translate
                    "
                    (click)="clearScope()"
                >
                    <icon class="text-xl">close</icon>
                </button>
            }
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneSelectTreeComponent, { className: "ZoneSelectTreeComponent", filePath: "apps/signage-manager/src/app/shared/zone-select-tree.component.ts", lineNumber: 263 });
})();

export {
  CdkTreeNodeDef,
  CdkTree,
  CdkTreeNode,
  CdkTreeNodePadding,
  CdkTreeModule,
  zoneSearchLabel,
  ZoneSelectTreeComponent
};
//# debugId=8286b264-7a92-5d01-8a75-7acc1846024c
//# sourceMappingURL=chunk-3ZUVV4MY.js.map
