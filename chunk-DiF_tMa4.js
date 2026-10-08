import{Bt as Yg,C as Ff,Cn as ge,Ct as Ur,D as Fy,Er as wl,Et as VC,F as If,G as Lg,I as Il,Jn as ne,K as Ls,Kt as Zg,Lr as l,Nn as im,Nt as Wm,O as G,Pn as it,Pt as Wy,R as Je,Rr as m,S as Fb,Sn as ga,Tn as ho,Tr as wf,Wt as ZE,Xt as ab,Yn as nm,Zt as am,_n as em,an as cr,at as On,br as v,c as BC,cn as db,dn as ds,dr as rm,dt as Qw,en as bb,gn as eh,gr as sm,in as cb,it as Og,jn as ib,jr as yv,k as GC,kt as W,ln as de,lt as Qg,m as DI,mn as eb,mr as sB,n as $b,nn as br,nr as pb,nt as OT,o as AE,ot as Ps,p as Cs,qt as Zy,rn as cB,s as An,sr as pw,t as $C,un as dm,ur as qy,v as El,wr as w,yn as fb,zn as lb}from"./chunk-Cd3HlXg1.js";import"./main-W6V3PUYD.js";import{A as he,C as at,I as rr,O as ft$1,R as sn,T as de$1,V as un,b as Xi,d as Ji,f as N$1,j as lt$1,k as gt$1,l as Ge,m as Oi,n as Rt$1,o as tt,s as Ae,t as Et$1,u as Gn,w as ce}from"./chunk-B2aunqAn.js";import{a as Ot$1,m as ae,y as oe}from"./chunk-Bylk7NS5.js";var gt=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`];var ft=[`mat-icon, [matMenuItemIcon]`,`*`];function bt(i,r){i&1&&(Ff(),Cs(0,`svg`,2),Qg(1,`polygon`,3),El())}var yt=[`*`];function Mt(i,r){if(i&1){let e=eb();Il(0,`div`,0),rm(`click`,function(){If(e);return wf(ib().closed.emit(`click`))})(`animationstart`,function(n){If(e);return wf(ib()._onAnimationStart(n.animationName))})(`animationend`,function(n){If(e);return wf(ib()._onAnimationDone(n.animationName))})(`animationcancel`,function(n){If(e);return wf(ib()._onAnimationDone(n.animationName))}),Il(1,`div`,1),cb(2),wl()()}if(i&2){let e=ib();bb(e._classList),dm(`mat-menu-panel-animations-disabled`,e._animationsDisabled)(`mat-menu-panel-exit-animation`,e._panelAnimationState===`void`)(`mat-menu-panel-animating`,e._isAnimating()),em(`id`,e.panelId),Zg(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e.ariaLabelledby||null)(`aria-describedby`,e.ariaDescribedby||null)}}var ue=new w(`MAT_MENU_PANEL`);var E=(()=>{class i{_elementRef=v(An);_document=v(G);_focusMonitor=v(un);_parentMenu=v(ue,{optional:!0});_changeDetectorRef=v(Wm);role=`menuitem`;disabled=!1;disableRipple=!1;_hovered=new ne;_focused=new ne;_highlighted=!1;_triggersSubmenu=!1;constructor(){v(N$1).load(tt),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons`);for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||i)};static ɵcmp=Qw({type:i,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:8,hostBindings:function(t,n){t&1&&nm(`click`,function(a){return n._checkDisabled(a)})(`mouseenter`,function(){return n._handleMouseEnter()}),t&2&&(Zg(`role`,n.role)(`tabindex`,n._getTabIndex())(`aria-disabled`,n.disabled)(`disabled`,n.disabled||null),dm(`mat-mdc-menu-item-highlighted`,n._highlighted)(`mat-mdc-menu-item-submenu-trigger`,n._triggersSubmenu))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,OT],disableRipple:[2,`disableRipple`,`disableRipple`,OT]},exportAs:[`matMenuItem`],ngContentSelectors:ft,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(t,n){t&1&&(ab(gt),cb(0),Cs(1,`span`,0),cb(2,1),El(),Qg(3,`div`,1),$C(4,bt,2,0,`:svg:svg`,2)),t&2&&(DI(3),Yg(`matRippleDisabled`,n.disableRipple||n.disabled)(`matRippleTrigger`,n._getHostElement()),DI(),GC(n._triggersSubmenu?4:-1))},dependencies:[Et$1],encapsulation:2})}return i})();var vt=new w(`MatMenuContent`);var Ct=new w(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var me=`_mat-menu-enter`;var K=`_mat-menu-exit`;var x=(()=>{class i{_elementRef=v(An);_changeDetectorRef=v(Wm);_injector=v(ge);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=rr();_allItems;_directDescendantItems=new ds;_classList={};_panelAnimationState=`void`;_animationDone=new ne;_isAnimating=Je(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,n=l({},this._classList);t&&t.length&&t.split(` `).forEach(o=>{n[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(o=>{n[o]=!0}),this._elementRef.nativeElement.className=``),this._classList=n}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new it;close=this.closed;panelId=v(ce).getId(`mat-menu-panel-`);constructor(){let e=v(Ct);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new ft$1(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(qy(this._directDescendantItems),yv(e=>Wy(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let n=e.toArray(),o=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[o]&&!n[o].disabled?t.setActiveItem(o):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(qy(this._directDescendantItems),yv(t=>Wy(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:Oi(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&n.setFocusOrigin(`keyboard`),n.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=ZE(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=m(l({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===K;(t||e===me)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===me||e===K)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(K),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?me:K)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(qy(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||i)};static ɵcmp=Qw({type:i,selectors:[[`mat-menu`]],contentQueries:function(t,n,o){if(t&1&&im(o,vt,5)(o,E,5)(o,E,4),t&2){let a;lb(a=db())&&(n.lazyContent=a.first),lb(a=db())&&(n._allItems=a),lb(a=db())&&(n.items=a)}},viewQuery:function(t,n){if(t&1&&sm(cr,5),t&2){let o;lb(o=db())&&(n.templateRef=o.first)}},hostVars:3,hostBindings:function(t,n){t&2&&Zg(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,OT],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,e=>e==null?null:OT(e)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[$b([{provide:ue,useExisting:i}])],ngContentSelectors:yt,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(t,n){t&1&&(ab(),Lg(0,Mt,3,12,`ng-template`))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--%NS%mat-menu-item-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-menu-item-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-menu-item-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-menu-item-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-menu-item-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--%NS%mat-menu-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-menu-container-color, var(--%NS%mat-sys-surface-container));
  box-shadow: var(--%NS%mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--%NS%mat-menu-divider-color, var(--%NS%mat-sys-surface-variant));
  margin-bottom: var(--%NS%mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--%NS%mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--%NS%mat-menu-item-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--%NS%mat-menu-item-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--%NS%mat-menu-item-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--%NS%mat-menu-item-spacing, 12px);
  height: var(--%NS%mat-menu-item-icon-size, 24px);
  width: var(--%NS%mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--%NS%mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--%NS%mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--%NS%mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--%NS%mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--%NS%mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--%NS%mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})}return i})();var St=new w(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=v(ge);return()=>Xi(i)}});var S=new WeakMap;var xt=(()=>{class i{_canHaveBackdrop;_element=v(An);_viewContainerRef=v(On);_menuItemInstance=v(E,{optional:!0,self:!0});_dir=v(he,{optional:!0});_focusMonitor=v(un);_ngZone=v(de);_injector=v(ge);_scrollStrategy=v(St);_changeDetectorRef=v(Wm);_animationsDisabled=rr();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=W.EMPTY;_menuCloseSubscription=W.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=v(ue,{optional:!0});this._parentMaterialMenu=t instanceof x?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&S.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=S.get(t);S.set(t,this),n&&n!==this&&n._closeMenu();let o=this._createOverlay(t),a=o.getConfig(),d=a.positionStrategy;this._setPosition(t,d),this._canHaveBackdrop?a.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:a.hasBackdrop=t.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof x&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(Zy(t.close)).subscribe(()=>{d.withLockedPosition(!1).reapplyLastPosition(),d.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof x&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(ga(1)).subscribe(()=>{t.detach(),S.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&S.delete(n),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=sn(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof x&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new Ge({positionStrategy:Ji(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let o=n.connectionPair.overlayX===`start`?`after`:`before`,a=n.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(o,a)})})}_setPosition(e,t){let[n,o]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[a,d]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[U,q]=[a,d],[G,Z]=[n,o],D=0;if(this._triggersSubmenu()){if(Z=n=e.xPosition===`before`?`start`:`end`,o=G=n===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let ce=this._parentMaterialMenu.items.first;this._parentInnerPadding=ce?ce._getHostElement().offsetTop:0}D=a===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(U=a===`top`?`bottom`:`top`,q=d===`top`?`bottom`:`top`);t.withPositions([{originX:n,originY:U,overlayX:G,overlayY:a,offsetY:D},{originX:o,originY:U,overlayX:Z,overlayY:a,offsetY:D},{originX:n,originY:q,overlayX:G,overlayY:d,offsetY:-D},{originX:o,originY:q,overlayX:Z,overlayY:d,offsetY:-D}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments();return Wy(e,this._parentMaterialMenu?this._parentMaterialMenu.closed:Fy(),this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(br(a=>this._menuOpen&&a!==this._menuItemInstance)):Fy(),t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Ae(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return S.get(e)===this}_triggerIsAriaDisabled(){return OT(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){pw()};static ɵdir=Ps({type:i})}return i})();var N=(()=>{class i extends xt{_cleanupTouchstart;_hoverSubscription=W.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new it;onMenuOpen=this.menuOpened;menuClosed=new it;onMenuClose=this.menuClosed;constructor(){super(!0);let e=v(ho);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{lt$1(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){at(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||i)};static ɵdir=Ps({type:i,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,n){t&1&&nm(`click`,function(a){return n._handleClick(a)})(`mousedown`,function(a){return n._handleMousedown(a)})(`keydown`,function(a){return n._handleKeydown(a)}),t&2&&Zg(`aria-haspopup`,n.menu?`menu`:null)(`aria-expanded`,n.menuOpen)(`aria-controls`,n.menuOpen?n.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[Og]})}return i})();var lt=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Ls({type:i});static ɵinj=Ur({imports:[Rt$1,Gn,de$1,gt$1]})}return i})();var wt=()=>[import(`./chunk-chFHCFjn.js`).then(i=>i.SettingsDebugPanelComponent)];var Pt=()=>[import(`./chunk-C97PNbQh.js`).then(i=>i.BindingDebugPanelComponent)];var kt=()=>[import(`./chunk-dg4NRPMM.js`).then(i=>i.DebugConsoleComponent)];function Tt(i,r){if(i&1){let e=eb();Cs(0,`settings-debug-panel`,8),nm(`showChange`,function(){If(e);return wf(ib(2).panel.set(null))}),El()}if(i&2){let e=ib(2);Yg(`show`,!0)(`schema`,e.schema())}}function It(i,r){if(i&1&&$C(0,Tt,1,2,`settings-debug-panel`,7),i&2)GC(ib().panel()===`settings`?0:-1)}function Rt(i,r){if(i&1){let e=eb();Cs(0,`binding-debug-panel`,10),nm(`showChange`,function(){If(e);return wf(ib(2).panel.set(null))}),El()}i&2&&Yg(`show`,!0)(`hotkeysEnabled`,!1)}function Et(i,r){if(i&1&&$C(0,Rt,1,2,`binding-debug-panel`,9),i&2)GC(ib().panel()===`bindings`?0:-1)}function Nt(i,r){if(i&1){let e=eb();Cs(0,`debug-console`,10),nm(`showChange`,function(){If(e);return wf(ib(2).panel.set(null))}),El()}i&2&&Yg(`show`,!0)(`hotkeysEnabled`,!1)}function Ot(i,r){if(i&1&&$C(0,Nt,1,2,`debug-console`,9),i&2)GC(ib().panel()===`console`?0:-1)}var mt=class i extends Ot$1{_hotkey=v(oe);_document=v(G);_menu_trigger=cB.required(N);_schema_request;loadSchema=sB();schema=Je(null);panel=Je(null);ngOnInit(){for(let[e,t]of[[`settings`,[`Control`,`Alt`,`Shift`,`KeyS`]],[`bindings`,[`Control`,`Alt`,`Shift`,`KeyB`]],[`console`,[`Control`,`Backquote`]]])this.subscription(e,this._hotkey.listen(t,()=>{this.panel()===e?this.panel.set(null):this.openPanel(e)}))}onContextMenu(r){let e=this._document.documentElement.clientHeight;r.clientX<0||r.clientX>32||r.clientY<e-32||r.clientY>e||this.openMenu(r,this._menu_trigger())}openMenu(r,e){r.preventDefault(),e.openMenu()}openPanel(r){this.panel.set(r),r===`settings`&&(this._schema_request??=this.loadSettingsSchema())}async loadSettingsSchema(){try{this.schema.set(await this.loadSchema()?.()??null)}catch{this.schema.set(null)}}static ɵfac=(()=>{let r;return function(t){return(r||(r=eh(i)))(t||i)}})();static ɵcmp=Qw({type:i,selectors:[[`settings-debug-panel-launcher`]],viewQuery:function(e,t){e&1&&am(t._menu_trigger,N,5),e&2&&fb()},hostBindings:function(e,t){e&1&&nm(`contextmenu`,function(o){return t.onContextMenu(o)},AE)},inputs:{loadSchema:[1,`loadSchema`]},features:[Og],decls:33,vars:4,consts:[[`menu_trigger`,`matMenuTrigger`],[`debug_menu`,`matMenu`],[`type`,`button`,`aria-label`,`Open debugging tools`,1,`absolute`,`bottom-0`,`left-0`,`z-999`,`h-px`,`w-px`,3,`contextmenu`,`matMenuTriggerFor`],[`yPosition`,`above`],[1,`flex`,`w-64`,`items-center`,`justify-center`,`pb-2`,`text-sm`,`opacity-60`],[`mat-menu-item`,``,3,`click`],[1,`flex`,`items-center`,`gap-2`],[3,`show`,`schema`],[3,`showChange`,`show`,`schema`],[3,`show`,`hotkeysEnabled`],[3,`showChange`,`show`,`hotkeysEnabled`]],template:function(e,t){if(e&1){let n=eb();Cs(0,`button`,2,0),nm(`contextmenu`,function(a){If(n);let d=pb(1);return wf(t.openMenu(a,d))}),El(),Cs(2,`mat-menu`,3,1)(4,`div`,4),Fb(5,` Debugging Panels `),El(),Cs(6,`button`,5),nm(`click`,function(){return t.openPanel(`settings`)}),Cs(7,`div`,6)(8,`icon`),Fb(9,`discover_tune`),El(),Cs(10,`div`),Fb(11,`Settings`),El()()(),Cs(12,`button`,5),nm(`click`,function(){return t.openPanel(`bindings`)}),Cs(13,`div`,6)(14,`icon`),Fb(15,`linked_services`),El(),Cs(16,`div`),Fb(17,`Driver bindings`),El()()(),Cs(18,`button`,5),nm(`click`,function(){return t.openPanel(`console`)}),Cs(19,`div`,6)(20,`icon`),Fb(21,`terminal_2`),El(),Cs(22,`div`),Fb(23,`Console`),El()()()(),Lg(24,It,1,1),BC(25,24,wt),Lg(27,Et,1,1),BC(28,27,Pt),Lg(30,Ot,1,1),BC(31,30,kt)}if(e&2)Yg(`matMenuTriggerFor`,pb(3)),DI(25),VC(t.panel()===`settings`),DI(3),VC(t.panel()===`bindings`),DI(3),VC(t.panel()===`console`)},dependencies:[lt,x,E,N,ae],encapsulation:2})};export{mt as SettingsDebugPanelLauncherComponent};