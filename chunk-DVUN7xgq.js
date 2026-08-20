import {aM as he$1,aN as fe$1,aO as yt$1,C,aP as wt,u,aQ as O,aR as Vt,aS as Le$1,V,c as Ve,aT as zGe,aU as Ne,aV as J,aW as nt,m,k,U as U$1,f,aX as _e$1,ah as K,a as A,p,a4 as P,aY as os,aZ as ht,a_ as ie$1,a$ as re$1,b0 as Hn,b1 as Rt,b2 as q,b3 as Jr,b4 as j,R,b5 as En,b6 as no,b7 as Ec,b8 as nc,b9 as vt,ba as jt,bb as rje,bc as Ht,bd as W,be as ve$1,bf as on,bg as Ai,bh as et,bi as Gp,bj as nn,bk as Qe,bl as oe$1,bm as we$1,bn as $r,bo as ne$1,bp as at,bq as Vn,br as Fne,bs as Cc,a0 as Fe,an as xd,w,bt as S2,a5 as Ue,x,aj as Sn,bu as bs,bv as dn,bw as x5,bx as X,by as tt,bz as te$1,bA as rd,bB as yu,bC as rn,bD as Rn,bE as pt,bF as Ce$1,bG as Xf,bH as $e,bI as cn,bJ as Xo,bK as yx,s as sn,a8 as se$1,a9 as Z,aa as S,ab as Q,am as Qt,X as y,ai as F$1}from'./main.js';var F=["*"];function pe(i,d){i&1&&_e$1(0);}var ie=["tabListContainer"],oe=["tabList"],re=["tabListInner"],se=["nextPaginator"],le=["previousPaginator"],ue=["content"];function fe(i,d){}var ge=["tabBodyWrapper"],ve=["tabHeader"];function ye(i,d){}function ke(i,d){if(i&1&&sn(0,ye,0,0,"ng-template",12),i&2){let t=S().$implicit;A("cdkPortalOutlet",t.templateLabel);}}function Te(i,d){if(i&1&&y(0),i&2){let t=S().$implicit;F$1(t.textLabel);}}function Ce(i,d){if(i&1){let t=se$1();m(0,"div",7,2),k("click",function(){let n=Z(t),a=n.$implicit,o=n.$index,y=S(),C=Qt(1);return Q(y._handleClick(a,C,o))})("cdkFocusChange",function(n){let a=Z(t).$index,o=S();return Q(o._tabFocusChanged(n,a))}),U$1(2,"span",8)(3,"div",9),m(4,"span",10)(5,"span",11),w(6,ke,1,1,null,12)(7,Te,1,1),f()()();}if(i&2){let t=d.$implicit,e=d.$index,n=Qt(1),a=S();Sn(t.labelClass),K("mdc-tab--active",a.selectedIndex===e),A("id",a._getTabLabelId(t,e))("disabled",t.disabled)("fitInkBarToContent",a.fitInkBarToContent),P("tabIndex",a._getTabIndex(e))("aria-posinset",e+1)("aria-setsize",a._tabs.length)("aria-controls",a._getTabContentId(e))("aria-selected",a.selectedIndex===e)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),p(3),A("matRippleTrigger",n)("matRippleDisabled",t.disabled||a.disableRipple),p(3),x(t.templateLabel?6:7);}}function xe(i,d){i&1&&_e$1(0);}function Ie(i,d){if(i&1){let t=se$1();m(0,"mat-tab-body",13),k("_onCentered",function(){Z(t);let n=S();return Q(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){Z(t);let a=S();return Q(a._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){Z(t);let a=S();return Q(a._bodyCentered(n))}),f();}if(i&2){let t=d.$implicit,e=d.$index,n=S();Sn(t.bodyClass),A("id",n._getTabContentId(e))("content",t.content)("position",t.position)("animationDuration",n._bodyAnimationDuration)("preserveContent",n.preserveContent),P("tabindex",n.contentTabIndex!=null&&n.selectedIndex===e?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(t,e))("aria-hidden",n.selectedIndex!==e);}}var we=new O("MatTabContent"),De=(()=>{class i{template=u(nn);static \u0275fac=function(e){return new(e||i)};static \u0275dir=W({type:i,selectors:[["","matTabContent",""]],features:[ve$1([{provide:we,useExisting:i}])]})}return i})(),Re=new O("MatTabLabel"),de=new O("MAT_TAB"),Me=(()=>{class i extends rje{_closestTab=u(de,{optional:true});static \u0275fac=(()=>{let t;return function(n){return (t||(t=Ht(i)))(n||i)}})();static \u0275dir=W({type:i,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[ve$1([{provide:Re,useExisting:i}]),Ne]})}return i})(),ce=new O("MAT_TAB_GROUP"),Be=(()=>{class i{_viewContainerRef=u(on);_closestTabGroup=u(ce,{optional:true});disabled=false;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t);}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new j;position=null;origin=null;isActive=false;constructor(){u(En).load(no);}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next();}ngOnDestroy(){this._stateChanges.complete();}ngOnInit(){this._contentPortal=new Ai(this._explicitContent||this._implicitContent,this._viewContainerRef);}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t);}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=V({type:i,selectors:[["mat-tab"]],contentQueries:function(e,n,a){if(e&1&&Hn(a,Me,5)(a,De,7,nn),e&2){let o;ie$1(o=re$1())&&(n.templateLabel=o.first),ie$1(o=re$1())&&(n._explicitContent=o.first);}},viewQuery:function(e,n){if(e&1&&ht(nn,7),e&2){let a;ie$1(a=re$1())&&(n._implicitContent=a.first);}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(e,n){e&2&&P("id",null);},inputs:{disabled:[2,"disabled","disabled",J],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[ve$1([{provide:de,useExisting:i}]),et],ngContentSelectors:F,decls:1,vars:0,template:function(e,n){e&1&&(nt(),Gp(0,pe,1,0,"ng-template"));},encapsulation:2,changeDetection:1})}return i})(),ft="mdc-tab-indicator--active",te="mdc-tab-indicator--no-transition",U=class{_items;_currentItem;constructor(d){this._items=d;}hide(){this._items.forEach(d=>d.deactivateInkBar()),this._currentItem=void 0;}alignToElement(d){let t=this._items.find(n=>n.elementRef.nativeElement===d),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t;}}},be=(()=>{class i{_elementRef=u(q);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=false;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement());}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(ft);return}let n=e.getBoundingClientRect(),a=t.width/n.width,o=t.left-n.left;e.classList.add(te),this._inkBarContentElement.style.setProperty("transform",`translateX(${o}px) scaleX(${a})`),e.getBoundingClientRect(),e.classList.remove(te),e.classList.add(ft),this._inkBarContentElement.style.setProperty("transform","");}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(ft);}ngOnInit(){this._createInkBarElement();}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null;}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement("span"),n=this._inkBarContentElement=t.createElement("span");e.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",e.appendChild(this._inkBarContentElement),this._appendInkBarElement();}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement);}static \u0275fac=function(e){return new(e||i)};static \u0275dir=W({type:i,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",J]}})}return i})();var me=(()=>{class i extends be{elementRef=u(q);disabled=false;focus(){this.elementRef.nativeElement.focus();}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let t;return function(n){return (t||(t=Ht(i)))(n||i)}})();static \u0275dir=W({type:i,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(e,n){e&2&&(P("aria-disabled",!!n.disabled),K("mat-mdc-tab-disabled",n.disabled));},inputs:{disabled:[2,"disabled","disabled",J]},features:[Ne]})}return i})(),ee={passive:true},Pe=650,Le=100,he=(()=>{class i{_elementRef=u(q);_changeDetectorRef=u(Qe);_viewportRuler=u(bs);_dir=u(dn,{optional:true});_ngZone=u(oe$1);_platform=u(at);_sharedResizeObserver=u(x5);_injector=u(X);_renderer=u(tt);_animationsDisabled=vt();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=false;_destroyed=new j;_showPaginationControls=false;_disableScrollAfter=true;_disableScrollBefore=true;_tabLabelCount;_scrollDistanceChanged=false;_keyManager;_currentTextContent;_stopScrolling=new j;disablePagination=false;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=true,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e));}_selectedIndex=0;selectFocusedIndex=new ne$1;indexFocused=new ne$1;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())]);}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),ee),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),ee));}ngAfterContentInit(){let t=this._dir?this._dir.change:te$1("ltr"),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(rd(32),Le$1(this._destroyed)),n=this._viewportRuler.change(150).pipe(Le$1(this._destroyed)),a=()=>{this.updatePagination(),this._alignInkBarToSelectedTab();};this._keyManager=new yu(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>false),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),rn(a,{injector:this._injector}),Vn(t,n,e,this._items.changes,this._itemsResized()).pipe(Le$1(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),a();});}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection());}),this._keyManager.change.subscribe(o=>{this.indexFocused.emit(o),this._setTabFocus(o);});}_itemsResized(){return typeof ResizeObserver!="function"?Rn:this._items.changes.pipe(Vt(this._items),pt(t=>new Ce$1(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(a=>e.next(a));return t.forEach(a=>n.observe(a.elementRef.nativeElement)),()=>{n.disconnect();}}))),Xf(1),$e(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=false,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=false,this._changeDetectorRef.markForCheck());}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete();}_handleKeydown(t){if(!cn(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t));}break;default:this._keyManager?.onKeydown(t);}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck();}));}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition();}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t);}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:true}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth;}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0);}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t);}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t=="before"?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t);}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:a,offsetWidth:o}=e.elementRef.nativeElement,y,C;this._getLayoutDirection()=="ltr"?(y=a,C=y+o):(C=this._tabListInner.nativeElement.offsetWidth-a,y=C-o);let J=this.scrollDistance,Tt=this.scrollDistance+n;y<J?this.scrollDistance-=J-y:C>Tt&&(this.scrollDistance+=Math.min(C-Tt,y-J));}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=false;else {let t=this._tabListInner.nativeElement.scrollWidth,e=this._elementRef.nativeElement.offsetWidth,n=t-e>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck());}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=true:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck());}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,e=this._tabListContainer.nativeElement.offsetWidth;return t-e||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide();}_stopInterval(){this._stopScrolling.next();}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),Xo(Pe,Le).pipe(Le$1(Vn(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:a}=this._scrollHeader(t);(a===0||a>=n)&&this._stopInterval();}));}_scrollTo(t){if(this.disablePagination)return {maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=true,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static \u0275fac=function(e){return new(e||i)};static \u0275dir=W({type:i,inputs:{disablePagination:[2,"disablePagination","disablePagination",J],selectedIndex:[2,"selectedIndex","selectedIndex",jt]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return i})(),Ee=(()=>{class i extends he{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=false;ngAfterContentInit(){this._inkBar=new U(this._items),super.ngAfterContentInit();}_itemSelected(t){t.preventDefault();}static \u0275fac=(()=>{let t;return function(n){return (t||(t=Ht(i)))(n||i)}})();static \u0275cmp=V({type:i,selectors:[["mat-tab-header"]],contentQueries:function(e,n,a){if(e&1&&Hn(a,me,4),e&2){let o;ie$1(o=re$1())&&(n._items=o);}},viewQuery:function(e,n){if(e&1&&ht(ie,7)(oe,7)(re,7)(se,5)(le,5),e&2){let a;ie$1(a=re$1())&&(n._tabListContainer=a.first),ie$1(a=re$1())&&(n._tabList=a.first),ie$1(a=re$1())&&(n._tabListInner=a.first),ie$1(a=re$1())&&(n._nextPaginator=a.first),ie$1(a=re$1())&&(n._previousPaginator=a.first);}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(e,n){e&2&&K("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl");},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",J]},features:[Ne],ngContentSelectors:F,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(e,n){e&1&&(nt(),m(0,"div",5,0),k("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(o){return n._handlePaginatorPress("before",o)})("touchend",function(){return n._stopInterval()}),U$1(2,"div",6),f(),m(3,"div",7,1),k("keydown",function(o){return n._handleKeydown(o)}),m(5,"div",8,2),k("cdkObserveContent",function(){return n._onContentChanges()}),m(7,"div",9,3),_e$1(9),f()()(),m(10,"div",10,4),k("mousedown",function(o){return n._handlePaginatorPress("after",o)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),U$1(12,"div",6),f()),e&2&&(K("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),A("matRippleDisabled",n._disableScrollBefore||n.disableRipple),p(3),K("_mat-animation-noopable",n._animationsDisabled),p(2),P("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),p(5),K("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),A("matRippleDisabled",n._disableScrollAfter||n.disableRipple));},dependencies:[Ve,zGe],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2,changeDetection:1})}return i})(),_e=new O("MAT_TABS_CONFIG"),ne=(()=>{class i extends Cc{_host=u(yt);_ngZone=u(oe$1);_centeringSub=we$1.EMPTY;_leavingSub=we$1.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Vt(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content);});}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach());});}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe();}static \u0275fac=(()=>{let t;return function(n){return (t||(t=Ht(i)))(n||i)}})();static \u0275dir=W({type:i,selectors:[["","matTabBodyHost",""]],features:[Ne]})}return i})(),yt=(()=>{class i{_elementRef=u(q);_dir=u(dn,{optional:true});_ngZone=u(oe$1);_injector=u(X);_renderer=u(tt);_diAnimationsDisabled=vt();_eventCleanups;_initialized=false;_fallbackTimer;_positionIndex;_dirChangeSubscription=we$1.EMPTY;_position;_previousPosition;_onCentering=new ne$1;_beforeCentering=new ne$1;_afterLeavingCenter=new ne$1;_onCentered=new ne$1(true);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=false;set position(t){this._positionIndex=t,this._computePositionAnimationState();}constructor(){if(this._dir){let t=u(Qe);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck();});}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(true),rn(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=true;}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe();}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone());};this._eventCleanups=[this._renderer.listen(t,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted());}),this._renderer.listen(t,"transitionend",e),this._renderer.listen(t,"transitioncancel",e)];});}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position==="center";this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight);}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit();}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",t);}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t=="ltr"?"left":"right":this._positionIndex>0?this._position=t=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)));}_simulateTransitionEvents(){this._transitionStarted(),rn(()=>this._transitionDone(),{injector:this._injector});}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=V({type:i,selectors:[["mat-tab-body"]],viewQuery:function(e,n){if(e&1&&ht(ne,5)(ue,5),e&2){let a;ie$1(a=re$1())&&(n._portalHost=a.first),ie$1(a=re$1())&&(n._contentElement=a.first);}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(e,n){e&2&&P("inert",n._position==="center"?null:"");},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(e,n){e&1&&(m(0,"div",1,0),sn(2,fe,0,0,"ng-template",2),f()),e&2&&K("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center");},dependencies:[ne,yx],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-body-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2,changeDetection:1})}return i})(),bn=(()=>{class i{_elementRef=u(q);_changeDetectorRef=u(Qe);_ngZone=u(oe$1);_tabsSubscription=we$1.EMPTY;_tabLabelSubscription=we$1.EMPTY;_tabBodySubscription=we$1.EMPTY;_diAnimationsDisabled=vt();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new $r;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck();}_fitInkBarToContent=false;stretchTabs=true;alignTabs=null;dynamicHeight=false;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t;}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=t,t&&typeof t=="object"?(this._bodyAnimationDuration=gt(t.body),this._headerAnimationDuration=gt(t.header)):this._headerAnimationDuration=this._bodyAnimationDuration=gt(t);}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t;}_contentTabIndex=null;disablePagination=false;disableRipple=false;preserveContent=false;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t;}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new ne$1;focusChange=new ne$1;animationDone=new ne$1;selectedTabChange=new ne$1(true);_groupId;_isServer=!u(at).isBrowser;constructor(){let t=u(_e,{optional:true});this._groupId=u(Rt).getId("mat-tab-group-"),this.animationDuration=t&&t.animationDuration?t.animationDuration:"500ms",this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:false,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:false,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:false,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:true,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null;}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px";}Promise.resolve().then(()=>{this._tabs.forEach((n,a)=>n.isActive=a===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="");});}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex);}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck());}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let a=0;a<e.length;a++)if(e[a].isActive){this._indexToSelect=this._selectedIndex=a,this._lastFocusedTabIndex=null,n=e[a];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=true,this.selectedTabChange.emit(this._createChangeEvent(t));});}this._changeDetectorRef.markForCheck();});}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(true));}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Vt(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges();});}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe();}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab();}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination();}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t);}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t));}_createChangeEvent(t){let e=new kt;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Vn(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck());}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return `${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px");}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this._ngZone.run(()=>this.animationDone.emit());}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n);}_getTabIndex(t){let e=this._lastFocusedTabIndex??this.selectedIndex;return t===e?0:-1}_tabFocusChanged(t,e){t&&t!=="mouse"&&t!=="touch"&&(this._tabHeader.focusIndex=e);}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex));}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration==="0"||this._bodyAnimationDuration==="0ms"}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=V({type:i,selectors:[["mat-tab-group"]],contentQueries:function(e,n,a){if(e&1&&Hn(a,Be,5),e&2){let o;ie$1(o=re$1())&&(n._allTabs=o);}},viewQuery:function(e,n){if(e&1&&ht(ge,5)(ve,5)(yt,5),e&2){let a;ie$1(a=re$1())&&(n._tabBodyWrapper=a.first),ie$1(a=re$1())&&(n._tabHeader=a.first),ie$1(a=re$1())&&(n._tabBodies=a);}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:13,hostBindings:function(e,n){e&2&&(P("mat-align-tabs",n.alignTabs),Sn("mat-"+(n.color||"primary")),os("--mat-tab-body-animation-duration",n._bodyAnimationDuration)("--mat-tab-header-animation-duration",n._headerAnimationDuration),K("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs));},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",J],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",J],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",J],selectedIndex:[2,"selectedIndex","selectedIndex",jt],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",jt],disablePagination:[2,"disablePagination","disablePagination",J],disableRipple:[2,"disableRipple","disableRipple",J],preserveContent:[2,"preserveContent","preserveContent",J],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[ve$1([{provide:ce,useExisting:i}])],ngContentSelectors:F,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(e,n){e&1&&(nt(),m(0,"mat-tab-header",3,0),k("indexFocused",function(o){return n._focusChanged(o)})("selectFocusedIndex",function(o){return n.selectedIndex=o}),Fe(2,Ce,8,17,"div",4,xd),f(),w(4,xe,1,0),m(5,"div",5,1),Fe(7,Ie,1,10,"mat-tab-body",6,xd),f()),e&2&&(A("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),S2("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),p(2),Ue(n._tabs),p(2),x(n._isServer?4:-1),p(),K("_mat-animation-noopable",n._bodyAnimationsDisabled()),p(2),Ue(n._tabs));},dependencies:[Ee,me,Fne,Ve,Cc,yt],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2,changeDetection:1})}return i})(),kt=class{index;tab};function gt(i){let d=i+"";return /^\d+$/.test(d)?i+"ms":d}var Ae=(()=>{class i extends he{_focusedItem=C(null);get fitInkBarToContent(){return this._fitInkBarToContent.value}set fitInkBarToContent(t){this._fitInkBarToContent.next(t),this._changeDetectorRef.markForCheck();}_fitInkBarToContent=new wt(false);stretchTabs=true;get animationDuration(){return this._animationDuration}set animationDuration(t){let e=t+"";this._animationDuration=/^\d+$/.test(e)?t+"ms":e;}_animationDuration;_items;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t;}_backgroundColor;get disableRipple(){return this._disableRipple()}set disableRipple(t){this._disableRipple.set(t);}_disableRipple=C(false);color="primary";tabPanel;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;constructor(){let t=u(_e,{optional:true});super(),this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:false,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:false,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:true;}_itemSelected(){}ngAfterContentInit(){this._inkBar=new U(this._items),this._items.changes.pipe(Vt(null),Le$1(this._destroyed)).subscribe(()=>this.updateActiveLink()),super.ngAfterContentInit(),this._keyManager.change.pipe(Vt(null),Le$1(this._destroyed)).subscribe(()=>this._focusedItem.set(this._keyManager?.activeItem||null));}ngAfterViewInit(){this.tabPanel,super.ngAfterViewInit();}updateActiveLink(){if(!this._items)return;let t=this._items.toArray();for(let e=0;e<t.length;e++)if(t[e].active){this.selectedIndex=e,this.tabPanel&&(this.tabPanel._activeTabId=t[e].id),this._focusedItem.set(t[e]),this._changeDetectorRef.markForCheck();return}this.selectedIndex=-1;}_getRole(){return this.tabPanel?"tablist":this._elementRef.nativeElement.getAttribute("role")}_hasFocus(t){return this._keyManager?.activeItem===t}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=V({type:i,selectors:[["","mat-tab-nav-bar",""]],contentQueries:function(e,n,a){if(e&1&&Hn(a,Se,5),e&2){let o;ie$1(o=re$1())&&(n._items=o);}},viewQuery:function(e,n){if(e&1&&ht(ie,7)(oe,7)(re,7)(se,5)(le,5),e&2){let a;ie$1(a=re$1())&&(n._tabListContainer=a.first),ie$1(a=re$1())&&(n._tabList=a.first),ie$1(a=re$1())&&(n._tabListInner=a.first),ie$1(a=re$1())&&(n._nextPaginator=a.first),ie$1(a=re$1())&&(n._previousPaginator=a.first);}},hostAttrs:[1,"mat-mdc-tab-nav-bar","mat-mdc-tab-header"],hostVars:17,hostBindings:function(e,n){e&2&&(P("role",n._getRole()),os("--mat-tab-header-animation-duration",n.animationDuration),K("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")("mat-mdc-tab-nav-bar-stretch-tabs",n.stretchTabs)("mat-primary",n.color!=="warn"&&n.color!=="accent")("mat-accent",n.color==="accent")("mat-warn",n.color==="warn")("_mat-animation-noopable",n._animationsDisabled));},inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",J],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",J],animationDuration:"animationDuration",backgroundColor:"backgroundColor",disableRipple:[2,"disableRipple","disableRipple",J],color:"color",tabPanel:"tabPanel"},exportAs:["matTabNavBar","matTabNav"],features:[Ne],ngContentSelectors:F,decls:13,vars:6,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-link-container",3,"keydown"],[1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-links"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(e,n){e&1&&(nt(),m(0,"div",5,0),k("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(o){return n._handlePaginatorPress("before",o)})("touchend",function(){return n._stopInterval()}),U$1(2,"div",6),f(),m(3,"div",7,1),k("keydown",function(o){return n._handleKeydown(o)}),m(5,"div",8,2),k("cdkObserveContent",function(){return n._onContentChanges()}),m(7,"div",9,3),_e$1(9),f()()(),m(10,"div",10,4),k("mousedown",function(o){return n._handlePaginatorPress("after",o)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),U$1(12,"div",6),f()),e&2&&(K("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),A("matRippleDisabled",n._disableScrollBefore||n.disableRipple),p(10),K("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),A("matRippleDisabled",n._disableScrollAfter||n.disableRipple));},dependencies:[Ve,zGe],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-links {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-links, .mat-mdc-tab-links.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab-link-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-focus-indicator::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mdc-tab__ripple::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
`],encapsulation:2,changeDetection:1})}return i})(),Se=(()=>{class i extends be{_tabNavBar=u(Ae);elementRef=u(q);_focusMonitor=u(Jr);_destroyed=new j;_isActive=false;_tabIndex=R(()=>this._tabNavBar._focusedItem()===this?this.tabIndex:-1);get active(){return this._isActive}set active(t){t!==this._isActive&&(this._isActive=t,this._tabNavBar.updateActiveLink());}disabled=false;get disableRipple(){return this._disableRipple()}set disableRipple(t){this._disableRipple.set(t);}_disableRipple=C(false);tabIndex=0;rippleConfig;get rippleDisabled(){return this.disabled||this.disableRipple||this._tabNavBar.disableRipple||!!this.rippleConfig.disabled}id=u(Rt).getId("mat-tab-link-");constructor(){super(),u(En).load(no);let t=u(Ec,{optional:true}),e=u(new nc("tabindex"),{optional:true});this.rippleConfig=t||{},this.tabIndex=e==null?0:parseInt(e)||0,vt()&&(this.rippleConfig.animation={enterDuration:0,exitDuration:0}),this._tabNavBar._fitInkBarToContent.pipe(Le$1(this._destroyed)).subscribe(n=>{this.fitInkBarToContent=n;});}focus(){this.elementRef.nativeElement.focus();}ngAfterViewInit(){this._focusMonitor.monitor(this.elementRef);}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),super.ngOnDestroy(),this._focusMonitor.stopMonitoring(this.elementRef);}_handleFocus(){this._tabNavBar.focusIndex=this._tabNavBar._items.toArray().indexOf(this);}_handleKeydown(t){(t.keyCode===32||t.keyCode===13)&&(this.disabled?t.preventDefault():this._tabNavBar.tabPanel&&(t.keyCode===32&&t.preventDefault(),this.elementRef.nativeElement.click()));}_getAriaControls(){return this._tabNavBar.tabPanel?this._tabNavBar.tabPanel?.id:this.elementRef.nativeElement.getAttribute("aria-controls")}_getAriaSelected(){return this._tabNavBar.tabPanel?this.active?"true":"false":this.elementRef.nativeElement.getAttribute("aria-selected")}_getAriaCurrent(){return this.active&&!this._tabNavBar.tabPanel?"page":null}_getRole(){return this._tabNavBar.tabPanel?"tab":this.elementRef.nativeElement.getAttribute("role")}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=V({type:i,selectors:[["","mat-tab-link",""],["","matTabLink",""]],hostAttrs:[1,"mdc-tab","mat-mdc-tab-link","mat-focus-indicator"],hostVars:11,hostBindings:function(e,n){e&1&&k("focus",function(){return n._handleFocus()})("keydown",function(o){return n._handleKeydown(o)}),e&2&&(P("aria-controls",n._getAriaControls())("aria-current",n._getAriaCurrent())("aria-disabled",n.disabled)("aria-selected",n._getAriaSelected())("id",n.id)("tabIndex",n._tabIndex())("role",n._getRole()),K("mat-mdc-tab-disabled",n.disabled)("mdc-tab--active",n.active));},inputs:{active:[2,"active","active",J],disabled:[2,"disabled","disabled",J],disableRipple:[2,"disableRipple","disableRipple",J],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:jt(t)],id:"id"},exportAs:["matTabLink"],features:[Ne],ngContentSelectors:F,decls:5,vars:2,consts:[[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"]],template:function(e,n){e&1&&(nt(),U$1(0,"span",0)(1,"div",1),m(2,"span",2)(3,"span",3),_e$1(4),f()()),e&2&&(p(),A("matRippleTrigger",n.elementRef.nativeElement)("matRippleDisabled",n.rippleDisabled));},dependencies:[Ve],styles:[`.mat-mdc-tab-link {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab-link.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab-link .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab-link:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab-link.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab-link .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab-link .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab-link:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab-link .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link {
  flex-grow: 1;
}
.mat-mdc-tab-link::before {
  margin: 5px;
}

@media (max-width: 599px) {
  .mat-mdc-tab-link {
    min-width: 72px;
  }
}
`],encapsulation:2})}return i})(),mn=(()=>{class i{id=u(Rt).getId("mat-tab-nav-panel-");_activeTabId;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=V({type:i,selectors:[["mat-tab-nav-panel"]],hostAttrs:["role","tabpanel",1,"mat-mdc-tab-nav-panel"],hostVars:2,hostBindings:function(e,n){e&2&&P("aria-labelledby",n._activeTabId)("id",n.id);},inputs:{id:"id"},exportAs:["matTabNavPanel"],ngContentSelectors:F,decls:1,vars:0,template:function(e,n){e&1&&(nt(),_e$1(0));},encapsulation:2})}return i})(),hn=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=he$1({type:i});static \u0275inj=fe$1({imports:[yt$1]})}return i})();export{Ae as A,Be as B,Me as M,Se as S,bn as b,hn as h,mn as m};//# sourceMappingURL=chunk-DVUN7xgq.js.map
