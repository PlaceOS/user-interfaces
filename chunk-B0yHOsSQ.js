import{Ar as ne$1,B as Hc,Bt as Tn,Ci as ye$1,Cr as me$1,D as Fa,Dn as bn$1,Dt as Rf,E as F,Ei as yx,Fn as ee$1,G as Je,Hn as fo,I as Ge,Ir as oe$1,Jr as qc,Jt as V,Kn as gn,Kr as pt,L as Gi,Ln as et,Lr as oi,Mt as Se$1,Oi as ze,Q as L,Qn as he$1,Qr as se$1,Rn as fa,Si as xt,St as Q,V as I,Wn as ft,Wt as U$1,Xr as qt,Yn as h,Yt as Vn,Zt as W,bn as ae,br as le$1,cn as Ye,d as Bt,di as us,dt as Ne$1,en as Wt,et as Le$1,f as Bu,fi as v,fn as Ze,ft as Nr,g as Cn,gi as w,gn as _e$1,ii as tt,it as M,j as G,jr as ni,kn as bt,kt as S,li as um,mi as vn,mr as k,n as $i,ni as tn,oi as u,ot as Me$1,p as C,pi as ve$1,pt as O,qn as gt$1,qr as q,r as $r,rr as ie$1,sn as YW,sr as j5e,st as Mt,ti as te$1,tn as X,tr as hn$1,v as D,vi as wd,vn as _t,vr as kre,vt as P,w as En,wi as yn,x as Dr,xr as m,yr as l$e,yt as PG,zr as p}from"./main.js";var A=[`*`];function pe(i,d){i&1&&ye$1(0)}var ie=[`tabListContainer`];var oe=[`tabList`];var re=[`tabListInner`];var se=[`nextPaginator`];var le=[`previousPaginator`];var ue=[`content`];function fe(i,d){}var ge=[`tabBodyWrapper`];var ve=[`tabHeader`];function ye(i,d){}function ke(i,d){if(i&1&&En(0,ye,0,0,`ng-template`,12),i&2){let t=S().$implicit;C(`cdkPortalOutlet`,t.templateLabel)}}function Te(i,d){if(i&1&&v(0),i&2){let t=S().$implicit;k(t.textLabel)}}function Ce(i,d){if(i&1){let t=Q();p(0,`div`,7,2),O(`click`,function(){let n=U$1(t),a=n.$implicit,o=n.$index,y=S(),C=Mt(1);return V(y._handleClick(a,C,o))})(`cdkFocusChange`,function(n){let a=U$1(t).$index;return V(S()._tabFocusChanged(n,a))}),F(2,`span`,8)(3,`div`,9),p(4,`span`,10)(5,`span`,11),D(6,ke,1,1,null,12)(7,Te,1,1),m()()()}if(i&2){let t=d.$implicit,e=d.$index,n=Mt(1),a=S();bn$1(t.labelClass),q(`mdc-tab--active`,a.selectedIndex===e),C(`id`,a._getTabLabelId(t,e))(`disabled`,t.disabled)(`fitInkBarToContent`,a.fitInkBarToContent),P(`tabIndex`,a._getTabIndex(e))(`aria-posinset`,e+1)(`aria-setsize`,a._tabs.length)(`aria-controls`,a._getTabContentId(e))(`aria-selected`,a.selectedIndex===e)(`aria-label`,t.ariaLabel||null)(`aria-labelledby`,!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),u(3),C(`matRippleTrigger`,n)(`matRippleDisabled`,t.disabled||a.disableRipple),u(3),M(t.templateLabel?6:7)}}function xe(i,d){i&1&&ye$1(0)}function Ie(i,d){if(i&1){let t=Q();p(0,`mat-tab-body`,13),O(`_onCentered`,function(){U$1(t);return V(S()._removeTabBodyWrapperHeight())})(`_onCentering`,function(n){U$1(t);return V(S()._setTabBodyWrapperHeight(n))})(`_beforeCentering`,function(n){U$1(t);return V(S()._bodyCentered(n))}),m()}if(i&2){let t=d.$implicit,e=d.$index,n=S();bn$1(t.bodyClass),C(`id`,n._getTabContentId(e))(`content`,t.content)(`position`,t.position)(`animationDuration`,n._bodyAnimationDuration)(`preserveContent`,n.preserveContent),P(`tabindex`,n.contentTabIndex!=null&&n.selectedIndex===e?n.contentTabIndex:null)(`aria-labelledby`,n._getTabLabelId(t,e))(`aria-hidden`,n.selectedIndex!==e)}}var Se=new L(`MatTabContent`);var we=(()=>{class i{template=h(gn);static ɵfac=function(e){return new(e||i)};static ɵdir=ee$1({type:i,selectors:[[``,`matTabContent`,``]],features:[Se$1([{provide:Se,useExisting:i}])]})}return i})();var De=new L(`MatTabLabel`);var de=new L(`MAT_TAB`);var Ne=(()=>{class i extends j5e{_closestTab=h(de,{optional:!0});static ɵfac=(()=>{let t;return function(n){return(t||(t=Wt(i)))(n||i)}})();static ɵdir=ee$1({type:i,selectors:[[``,`mat-tab-label`,``],[``,`matTabLabel`,``]],features:[Se$1([{provide:De,useExisting:i}]),Ge]})}return i})();var ce=new L(`MAT_TAB_GROUP`);var Re=(()=>{class i{_viewContainerRef=h(yn);_closestTabGroup=h(ce,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel=``;ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new W;position=null;origin=null;isActive=!1;constructor(){h(hn$1).load(Dr)}ngOnChanges(t){(t.hasOwnProperty(`textLabel`)||t.hasOwnProperty(`disabled`))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new $i(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static ɵfac=function(e){return new(e||i)};static ɵcmp=G({type:i,selectors:[[`mat-tab`]],contentQueries:function(e,n,a){if(e&1&&oi(a,Ne,5)(a,we,7,gn),e&2){let o;ae(o=se$1())&&(n.templateLabel=o.first),ae(o=se$1())&&(n._explicitContent=o.first)}},viewQuery:function(e,n){if(e&1&&gt$1(gn,7),e&2){let a;ae(a=se$1())&&(n._implicitContent=a.first)}},hostAttrs:[`hidden`,``],hostVars:1,hostBindings:function(e,n){e&2&&P(`id`,null)},inputs:{disabled:[2,`disabled`,`disabled`,te$1],textLabel:[0,`label`,`textLabel`],ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],labelClass:`labelClass`,bodyClass:`bodyClass`,id:`id`},exportAs:[`matTab`],features:[Se$1([{provide:de,useExisting:i}]),et],ngContentSelectors:A,decls:1,vars:0,template:function(e,n){e&1&&(tt(),um(0,pe,1,0,`ng-template`))},encapsulation:2,changeDetection:1})}return i})();var gt=`mdc-tab-indicator--active`;var te=`mdc-tab-indicator--no-transition`;var J=class{_items;_currentItem;constructor(d){this._items=d}hide(){this._items.forEach(d=>d.deactivateInkBar()),this._currentItem=void 0}alignToElement(d){let t=this._items.find(n=>n.elementRef.nativeElement===d),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}};var be=(()=>{class i{_elementRef=h(X);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(gt);return}let n=e.getBoundingClientRect(),a=t.width/n.width,o=t.left-n.left;e.classList.add(te),this._inkBarContentElement.style.setProperty(`transform`,`translateX(${o}px) scaleX(${a})`),e.getBoundingClientRect(),e.classList.remove(te),e.classList.add(gt),this._inkBarContentElement.style.setProperty(`transform`,``)}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(gt)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement(`span`),n=this._inkBarContentElement=t.createElement(`span`);e.className=`mdc-tab-indicator`,n.className=`mdc-tab-indicator__content mdc-tab-indicator__content--underline`,e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;(this._fitToContent?this._elementRef.nativeElement.querySelector(`.mdc-tab__content`):this._elementRef.nativeElement).appendChild(this._inkBarElement)}static ɵfac=function(e){return new(e||i)};static ɵdir=ee$1({type:i,inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,te$1]}})}return i})();var me=(()=>{class i extends be{elementRef=h(X);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static ɵfac=(()=>{let t;return function(n){return(t||(t=Wt(i)))(n||i)}})();static ɵdir=ee$1({type:i,selectors:[[``,`matTabLabelWrapper`,``]],hostVars:3,hostBindings:function(e,n){e&2&&(P(`aria-disabled`,!!n.disabled),q(`mat-mdc-tab-disabled`,n.disabled))},inputs:{disabled:[2,`disabled`,`disabled`,te$1]},features:[Ge]})}return i})();var ee={passive:!0};var Me=650;var Be=100;function U(i){let d=i+``;return/^[0-9]+(?:\.[0-9]+)?$/.test(d)?`${i}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(d)?d:``}var he=(()=>{class i{_elementRef=h(X);_changeDetectorRef=h(Ze);_viewportRuler=h(Fa);_dir=h(Tn,{optional:!0});_ngZone=h(le$1);_platform=h(pt);_sharedResizeObserver=h(YW);_injector=h(ne$1);_renderer=h(Je);_animationsDisabled=bt();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new W;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new W;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new ie$1;indexFocused=new ie$1;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,`mouseleave`,()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`before`),ee),this._renderer.listen(this._nextPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`after`),ee))}ngAfterContentInit(){let t=this._dir?this._dir.change:oe$1(`ltr`),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(wd(32),ze(this._destroyed)),n=this._viewportRuler.change(150).pipe(ze(this._destroyed)),a=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Bu(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),vn(a,{injector:this._injector}),ni(t,n,e,this._items.changes,this._itemsResized()).pipe(ze(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),a()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(o=>{this.indexFocused.emit(o),this._setTabFocus(o)})}_itemsResized(){return typeof ResizeObserver!=`function`?Vn:this._items.changes.pipe(tn(this._items),_t(t=>new Ne$1(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(a=>e.next(a));return t.forEach(a=>n.observe(a.elementRef.nativeElement)),()=>{n.disconnect()}}))),Rf(1),Ye(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!Cn(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||``,this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()==`ltr`?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()===`ltr`?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t==`before`?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:a,offsetWidth:o}=e.elementRef.nativeElement,y,C;this._getLayoutDirection()==`ltr`?(y=a,C=y+o):(C=this._tabListInner.nativeElement.offsetWidth-a,y=C-o);let tt=this.scrollDistance,Tt=this.scrollDistance+n;y<tt?this.scrollDistance-=tt-y:C>Tt&&(this.scrollDistance+=Math.min(C-Tt,y-tt))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let n=this._tabListInner.nativeElement.scrollWidth-this._elementRef.nativeElement.offsetWidth>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),fa(Me,Be).pipe(ze(ni(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:a}=this._scrollHeader(t);(a===0||a>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static ɵfac=function(e){return new(e||i)};static ɵdir=ee$1({type:i,inputs:{disablePagination:[2,`disablePagination`,`disablePagination`,te$1],selectedIndex:[2,`selectedIndex`,`selectedIndex`,qt]},outputs:{selectFocusedIndex:`selectFocusedIndex`,indexFocused:`indexFocused`}})}return i})();var Pe=(()=>{class i extends he{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new J(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static ɵfac=(()=>{let t;return function(n){return(t||(t=Wt(i)))(n||i)}})();static ɵcmp=G({type:i,selectors:[[`mat-tab-header`]],contentQueries:function(e,n,a){if(e&1&&oi(a,me,4),e&2){let o;ae(o=se$1())&&(n._items=o)}},viewQuery:function(e,n){if(e&1&&gt$1(ie,7)(oe,7)(re,7)(se,5)(le,5),e&2){let a;ae(a=se$1())&&(n._tabListContainer=a.first),ae(a=se$1())&&(n._tabList=a.first),ae(a=se$1())&&(n._tabListInner=a.first),ae(a=se$1())&&(n._nextPaginator=a.first),ae(a=se$1())&&(n._previousPaginator=a.first)}},hostAttrs:[1,`mat-mdc-tab-header`],hostVars:4,hostBindings:function(e,n){e&2&&q(`mat-mdc-tab-header-pagination-controls-enabled`,n._showPaginationControls)(`mat-mdc-tab-header-rtl`,n._getLayoutDirection()==`rtl`)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],disableRipple:[2,`disableRipple`,`disableRipple`,te$1]},features:[Ge],ngContentSelectors:A,decls:13,vars:10,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-label-container`,3,`keydown`],[`role`,`tablist`,1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-labels`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(e,n){e&1&&(tt(),p(0,`div`,5,0),O(`click`,function(){return n._handlePaginatorClick(`before`)})(`mousedown`,function(o){return n._handlePaginatorPress(`before`,o)})(`touchend`,function(){return n._stopInterval()}),F(2,`div`,6),m(),p(3,`div`,7,1),O(`keydown`,function(o){return n._handleKeydown(o)}),p(5,`div`,8,2),O(`cdkObserveContent`,function(){return n._onContentChanges()}),p(7,`div`,9,3),ye$1(9),m()()(),p(10,`div`,10,4),O(`mousedown`,function(o){return n._handlePaginatorPress(`after`,o)})(`click`,function(){return n._handlePaginatorClick(`after`)})(`touchend`,function(){return n._stopInterval()}),F(12,`div`,6),m()),e&2&&(q(`mat-mdc-tab-header-pagination-disabled`,n._disableScrollBefore),C(`matRippleDisabled`,n._disableScrollBefore||n.disableRipple),u(3),q(`_mat-animation-noopable`,n._animationsDisabled),u(2),P(`aria-label`,n.ariaLabel||null)(`aria-labelledby`,n.ariaLabelledby||null),u(5),q(`mat-mdc-tab-header-pagination-disabled`,n._disableScrollAfter),C(`matRippleDisabled`,n._disableScrollAfter||n.disableRipple))},dependencies:[Me$1,l$e],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
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
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
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
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
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
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--%NS%mat-tab-divider-height, 1px);
  border-top-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
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
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2,changeDetection:1})}return i})();var _e=new L(`MAT_TABS_CONFIG`);var ne=(()=>{class i extends qc{_host=h(yt);_ngZone=h(le$1);_centeringSub=Le$1.EMPTY;_leavingSub=Le$1.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(tn(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static ɵfac=(()=>{let t;return function(n){return(t||(t=Wt(i)))(n||i)}})();static ɵdir=ee$1({type:i,selectors:[[``,`matTabBodyHost`,``]],features:[Ge]})}return i})();var yt=(()=>{class i{_elementRef=h(X);_dir=h(Tn,{optional:!0});_ngZone=h(le$1);_injector=h(ne$1);_renderer=h(Je);_diAnimationsDisabled=bt();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=Le$1.EMPTY;_position;_previousPosition;_onCentering=new ie$1;_beforeCentering=new ie$1;_afterLeavingCenter=new ie$1;_onCentered=new ie$1(!0);_portalHost;_contentElement;_content;animationDuration=`500ms`;preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=h(Ze);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position===`center`&&(this._setActiveClass(!0),vn(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove(`mat-tab-body-animating`),n.type===`transitionend`&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,`transitionstart`,n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add(`mat-tab-body-animating`),this._transitionStarted())}),this._renderer.listen(t,`transitionend`,e),this._renderer.listen(t,`transitioncancel`,e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position===`center`;this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position===`center`?this._onCentered.emit():this._previousPosition===`center`&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle(`mat-mdc-tab-body-active`,t)}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t==`ltr`?`left`:`right`:this._positionIndex>0?this._position=t==`ltr`?`right`:`left`:this._position=`center`,this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position===`center`||this._previousPosition===`center`)&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),vn(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration===`0ms`||this.animationDuration===`0s`}static ɵfac=function(e){return new(e||i)};static ɵcmp=G({type:i,selectors:[[`mat-tab-body`]],viewQuery:function(e,n){if(e&1&&gt$1(ne,5)(ue,5),e&2){let a;ae(a=se$1())&&(n._portalHost=a.first),ae(a=se$1())&&(n._contentElement=a.first)}},hostAttrs:[1,`mat-mdc-tab-body`],hostVars:1,hostBindings:function(e,n){e&2&&P(`inert`,n._position===`center`?null:``)},inputs:{_content:[0,`content`,`_content`],animationDuration:`animationDuration`,preserveContent:`preserveContent`,position:`position`},outputs:{_onCentering:`_onCentering`,_beforeCentering:`_beforeCentering`,_onCentered:`_onCentered`},decls:3,vars:6,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-mdc-tab-body-content`],[`matTabBodyHost`,``]],template:function(e,n){e&1&&(p(0,`div`,1,0),En(2,fe,0,0,`ng-template`,2),m()),e&2&&q(`mat-tab-body-content-left`,n._position===`left`)(`mat-tab-body-content-right`,n._position===`right`)(`mat-tab-body-content-can-animate`,n._position===`center`||n._previousPosition===`center`)},dependencies:[ne,yx],styles:[`.mat-mdc-tab-body {
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
  transition: transform var(--%NS%mat-tab-body-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
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
`],encapsulation:2,changeDetection:1})}return i})();var bn=(()=>{class i{_elementRef=h(X);_changeDetectorRef=h(Ze);_ngZone=h(le$1);_tabsSubscription=Le$1.EMPTY;_tabLabelSubscription=Le$1.EMPTY;_tabBodySubscription=Le$1.EMPTY;_diAnimationsDisabled=bt();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new fo;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition=`above`;get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=t,t&&typeof t==`object`?(this._bodyAnimationDuration=U(t.body),this._headerAnimationDuration=U(t.header)):this._headerAnimationDuration=this._bodyAnimationDuration=U(t)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),t&&e.add(`mat-tabs-with-background`,`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new ie$1;focusChange=new ie$1;animationDone=new ie$1;selectedTabChange=new ie$1(!0);_groupId;_isServer=!h(pt).isBrowser;constructor(){let t=h(_e,{optional:!0});this._groupId=h(xt).getId(`mat-tab-group-`),this.animationDuration=t&&t.animationDuration?t.animationDuration:`500ms`,this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+`px`}Promise.resolve().then(()=>{this._tabs.forEach((n,a)=>n.isActive=a===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight=``)})}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let a=0;a<e.length;a++)if(e[a].isActive){this._indexToSelect=this._selectedIndex=a,this._lastFocusedTabIndex=null,n=e[a];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(tn(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new kt;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=ni(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+`px`,this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+`px`)}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height=``,this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n)}_getTabIndex(t){return t===(this._lastFocusedTabIndex??this.selectedIndex)?0:-1}_tabFocusChanged(t,e){t&&t!==`mouse`&&t!==`touch`&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration===`0`||this._bodyAnimationDuration===`0ms`}static ɵfac=function(e){return new(e||i)};static ɵcmp=G({type:i,selectors:[[`mat-tab-group`]],contentQueries:function(e,n,a){if(e&1&&oi(a,Re,5),e&2){let o;ae(o=se$1())&&(n._allTabs=o)}},viewQuery:function(e,n){if(e&1&&gt$1(ge,5)(ve,5)(yt,5),e&2){let a;ae(a=se$1())&&(n._tabBodyWrapper=a.first),ae(a=se$1())&&(n._tabHeader=a.first),ae(a=se$1())&&(n._tabBodies=a)}},hostAttrs:[1,`mat-mdc-tab-group`],hostVars:13,hostBindings:function(e,n){e&2&&(P(`mat-align-tabs`,n.alignTabs),bn$1(`mat-`+(n.color||`primary`)),Gi(`--%NS%mat-tab-body-animation-duration`,n._bodyAnimationDuration)(`--%NS%mat-tab-header-animation-duration`,n._headerAnimationDuration),q(`mat-mdc-tab-group-dynamic-height`,n.dynamicHeight)(`mat-mdc-tab-group-inverted-header`,n.headerPosition===`below`)(`mat-mdc-tab-group-stretch-tabs`,n.stretchTabs))},inputs:{color:`color`,fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,te$1],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,te$1],alignTabs:[0,`mat-align-tabs`,`alignTabs`],dynamicHeight:[2,`dynamicHeight`,`dynamicHeight`,te$1],selectedIndex:[2,`selectedIndex`,`selectedIndex`,qt],headerPosition:`headerPosition`,animationDuration:`animationDuration`,contentTabIndex:[2,`contentTabIndex`,`contentTabIndex`,qt],disablePagination:[2,`disablePagination`,`disablePagination`,te$1],disableRipple:[2,`disableRipple`,`disableRipple`,te$1],preserveContent:[2,`preserveContent`,`preserveContent`,te$1],backgroundColor:`backgroundColor`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`]},outputs:{selectedIndexChange:`selectedIndexChange`,focusChange:`focusChange`,animationDone:`animationDone`,selectedTabChange:`selectedTabChange`},exportAs:[`matTabGroup`],features:[Se$1([{provide:ce,useExisting:i}])],ngContentSelectors:A,decls:9,vars:8,consts:[[`tabHeader`,``],[`tabBodyWrapper`,``],[`tabNode`,``],[3,`indexFocused`,`selectFocusedIndex`,`selectedIndex`,`disableRipple`,`disablePagination`,`aria-label`,`aria-labelledby`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`id`,`mdc-tab--active`,`class`,`disabled`,`fitInkBarToContent`],[1,`mat-mdc-tab-body-wrapper`],[`role`,`tabpanel`,3,`id`,`class`,`content`,`position`,`animationDuration`,`preserveContent`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`click`,`cdkFocusChange`,`id`,`disabled`,`fitInkBarToContent`],[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`],[3,`cdkPortalOutlet`],[`role`,`tabpanel`,3,`_onCentered`,`_onCentering`,`_beforeCentering`,`id`,`content`,`position`,`animationDuration`,`preserveContent`]],template:function(e,n){e&1&&(tt(),p(0,`mat-tab-header`,3,0),O(`indexFocused`,function(o){return n._focusChanged(o)})(`selectFocusedIndex`,function(o){return n.selectedIndex=o}),me$1(2,Ce,8,17,`div`,4,$r),m(),D(4,xe,1,0),p(5,`div`,5,1),me$1(7,Ie,1,10,`mat-tab-body`,6,$r),m()),e&2&&(C(`selectedIndex`,n.selectedIndex||0)(`disableRipple`,n.disableRipple)(`disablePagination`,n.disablePagination),PG(`aria-label`,n.ariaLabel)(`aria-labelledby`,n.ariaLabelledby),u(2),he$1(n._tabs),u(2),M(n._isServer?4:-1),u(),q(`_mat-animation-noopable`,n._bodyAnimationsDisabled()),u(2),he$1(n._tabs))},dependencies:[Pe,me,kre,Me$1,qc,yt],styles:[`.mdc-tab {
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
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
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
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
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
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
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
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
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
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
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
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
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
`],encapsulation:2,changeDetection:1})}return i})();var kt=class{index;tab};var Le=(()=>{class i extends he{_focusedItem=I(null);get fitInkBarToContent(){return this._fitInkBarToContent.value}set fitInkBarToContent(t){this._fitInkBarToContent.next(t),this._changeDetectorRef.markForCheck()}_fitInkBarToContent=new Bt(!1);stretchTabs=!0;animationDuration=``;_items;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),t&&e.add(`mat-tabs-with-background`,`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;get disableRipple(){return this._disableRipple()}set disableRipple(t){this._disableRipple.set(t)}_disableRipple=I(!1);color=`primary`;tabPanel;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;constructor(){let t=h(_e,{optional:!0});super(),this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0}_itemSelected(){}ngAfterContentInit(){this._inkBar=new J(this._items),this._items.changes.pipe(tn(null),ze(this._destroyed)).subscribe(()=>this.updateActiveLink()),super.ngAfterContentInit(),this._keyManager.change.pipe(tn(null),ze(this._destroyed)).subscribe(()=>this._focusedItem.set(this._keyManager?.activeItem||null))}ngAfterViewInit(){this.tabPanel,super.ngAfterViewInit()}updateActiveLink(){if(!this._items)return;let t=this._items.toArray();for(let e=0;e<t.length;e++)if(t[e].active){this.selectedIndex=e,this.tabPanel&&(this.tabPanel._activeTabId=t[e].id),this._focusedItem.set(t[e]),this._changeDetectorRef.markForCheck();return}this.selectedIndex=-1}_getRole(){return this.tabPanel?`tablist`:this._elementRef.nativeElement.getAttribute(`role`)}_hasFocus(t){return this._keyManager?.activeItem===t}static ɵfac=function(e){return new(e||i)};static ɵcmp=G({type:i,selectors:[[``,`mat-tab-nav-bar`,``]],contentQueries:function(e,n,a){if(e&1&&oi(a,Ee,5),e&2){let o;ae(o=se$1())&&(n._items=o)}},viewQuery:function(e,n){if(e&1&&gt$1(ie,7)(oe,7)(re,7)(se,5)(le,5),e&2){let a;ae(a=se$1())&&(n._tabListContainer=a.first),ae(a=se$1())&&(n._tabList=a.first),ae(a=se$1())&&(n._tabListInner=a.first),ae(a=se$1())&&(n._nextPaginator=a.first),ae(a=se$1())&&(n._previousPaginator=a.first)}},hostAttrs:[1,`mat-mdc-tab-nav-bar`,`mat-mdc-tab-header`],hostVars:17,hostBindings:function(e,n){e&2&&(P(`role`,n._getRole()),Gi(`--%NS%mat-tab-header-animation-duration`,n.animationDuration),q(`mat-mdc-tab-header-pagination-controls-enabled`,n._showPaginationControls)(`mat-mdc-tab-header-rtl`,n._getLayoutDirection()==`rtl`)(`mat-mdc-tab-nav-bar-stretch-tabs`,n.stretchTabs)(`mat-primary`,n.color!==`warn`&&n.color!==`accent`)(`mat-accent`,n.color===`accent`)(`mat-warn`,n.color===`warn`)(`_mat-animation-noopable`,n._animationsDisabled))},inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,te$1],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,te$1],animationDuration:[2,`animationDuration`,`animationDuration`,U],backgroundColor:`backgroundColor`,disableRipple:[2,`disableRipple`,`disableRipple`,te$1],color:`color`,tabPanel:`tabPanel`},exportAs:[`matTabNavBar`,`matTabNav`],features:[Ge],ngContentSelectors:A,decls:13,vars:6,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-link-container`,3,`keydown`],[1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-links`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(e,n){e&1&&(tt(),p(0,`div`,5,0),O(`click`,function(){return n._handlePaginatorClick(`before`)})(`mousedown`,function(o){return n._handlePaginatorPress(`before`,o)})(`touchend`,function(){return n._stopInterval()}),F(2,`div`,6),m(),p(3,`div`,7,1),O(`keydown`,function(o){return n._handleKeydown(o)}),p(5,`div`,8,2),O(`cdkObserveContent`,function(){return n._onContentChanges()}),p(7,`div`,9,3),ye$1(9),m()()(),p(10,`div`,10,4),O(`mousedown`,function(o){return n._handlePaginatorPress(`after`,o)})(`click`,function(){return n._handlePaginatorClick(`after`)})(`touchend`,function(){return n._stopInterval()}),F(12,`div`,6),m()),e&2&&(q(`mat-mdc-tab-header-pagination-disabled`,n._disableScrollBefore),C(`matRippleDisabled`,n._disableScrollBefore||n.disableRipple),u(10),q(`mat-mdc-tab-header-pagination-disabled`,n._disableScrollAfter),C(`matRippleDisabled`,n._disableScrollAfter||n.disableRipple))},dependencies:[Me$1,l$e],styles:[`.mdc-tab {
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
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
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
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
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
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
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
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
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
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab-link-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-focus-indicator::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mdc-tab__ripple::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
`],encapsulation:2,changeDetection:1})}return i})();var Ee=(()=>{class i extends be{_tabNavBar=h(Le);elementRef=h(X);_focusMonitor=h(Nr);_destroyed=new W;_isActive=!1;_tabIndex=w(()=>this._tabNavBar._focusedItem()===this?this.tabIndex:-1);get active(){return this._isActive}set active(t){t!==this._isActive&&(this._isActive=t,this._tabNavBar.updateActiveLink())}disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(t){this._disableRipple.set(t)}_disableRipple=I(!1);tabIndex=0;rippleConfig;get rippleDisabled(){return this.disabled||this.disableRipple||this._tabNavBar.disableRipple||!!this.rippleConfig.disabled}id=h(xt).getId(`mat-tab-link-`);constructor(){super(),h(hn$1).load(Dr);let t=h(Hc,{optional:!0}),e=h(new us(`tabindex`),{optional:!0});this.rippleConfig=t||{},this.tabIndex=e==null?0:parseInt(e)||0,bt()&&(this.rippleConfig.animation={enterDuration:0,exitDuration:0}),this._tabNavBar._fitInkBarToContent.pipe(ze(this._destroyed)).subscribe(n=>{this.fitInkBarToContent=n})}focus(){this.elementRef.nativeElement.focus()}ngAfterViewInit(){this._focusMonitor.monitor(this.elementRef)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),super.ngOnDestroy(),this._focusMonitor.stopMonitoring(this.elementRef)}_handleFocus(){this._tabNavBar.focusIndex=this._tabNavBar._items.toArray().indexOf(this)}_handleKeydown(t){(t.keyCode===32||t.keyCode===13)&&(this.disabled?t.preventDefault():this._tabNavBar.tabPanel&&(t.keyCode===32&&t.preventDefault(),this.elementRef.nativeElement.click()))}_getAriaControls(){return this._tabNavBar.tabPanel?this._tabNavBar.tabPanel?.id:this.elementRef.nativeElement.getAttribute(`aria-controls`)}_getAriaSelected(){return this._tabNavBar.tabPanel?this.active?`true`:`false`:this.elementRef.nativeElement.getAttribute(`aria-selected`)}_getAriaCurrent(){return this.active&&!this._tabNavBar.tabPanel?`page`:null}_getRole(){return this._tabNavBar.tabPanel?`tab`:this.elementRef.nativeElement.getAttribute(`role`)}static ɵfac=function(e){return new(e||i)};static ɵcmp=G({type:i,selectors:[[``,`mat-tab-link`,``],[``,`matTabLink`,``]],hostAttrs:[1,`mdc-tab`,`mat-mdc-tab-link`,`mat-focus-indicator`],hostVars:11,hostBindings:function(e,n){e&1&&O(`focus`,function(){return n._handleFocus()})(`keydown`,function(o){return n._handleKeydown(o)}),e&2&&(P(`aria-controls`,n._getAriaControls())(`aria-current`,n._getAriaCurrent())(`aria-disabled`,n.disabled)(`aria-selected`,n._getAriaSelected())(`id`,n.id)(`tabIndex`,n._tabIndex())(`role`,n._getRole()),q(`mat-mdc-tab-disabled`,n.disabled)(`mdc-tab--active`,n.active))},inputs:{active:[2,`active`,`active`,te$1],disabled:[2,`disabled`,`disabled`,te$1],disableRipple:[2,`disableRipple`,`disableRipple`,te$1],tabIndex:[2,`tabIndex`,`tabIndex`,t=>t==null?0:qt(t)],id:`id`},exportAs:[`matTabLink`],features:[Ge],ngContentSelectors:A,decls:5,vars:2,consts:[[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`]],template:function(e,n){e&1&&(tt(),F(0,`span`,0)(1,`div`,1),p(2,`span`,2)(3,`span`,3),ye$1(4),m()()),e&2&&(u(),C(`matRippleTrigger`,n.elementRef.nativeElement)(`matRippleDisabled`,n.rippleDisabled))},dependencies:[Me$1],styles:[`.mat-mdc-tab-link {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab-link.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab-link .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab-link:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
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
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
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
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
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
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
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
`],encapsulation:2})}return i})();var mn=(()=>{class i{id=h(xt).getId(`mat-tab-nav-panel-`);_activeTabId;static ɵfac=function(e){return new(e||i)};static ɵcmp=G({type:i,selectors:[[`mat-tab-nav-panel`]],hostAttrs:[`role`,`tabpanel`,1,`mat-mdc-tab-nav-panel`],hostVars:2,hostBindings:function(e,n){e&2&&P(`aria-labelledby`,n._activeTabId)(`id`,n.id)},inputs:{id:`id`},exportAs:[`matTabNavPanel`],ngContentSelectors:A,decls:1,vars:0,template:function(e,n){e&1&&(tt(),ye$1(0))},encapsulation:2})}return i})();var hn=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=ve$1({type:i});static ɵinj=_e$1({imports:[ft]})}return i})();export{bn as a,Re as i,Le as n,hn as o,Ne as r,mn as s,Ee as t};
//# debugId=78adaf75-0877-56ce-9539-ec1f886fee98
//# sourceMappingURL=chunk-B0yHOsSQ.js.map