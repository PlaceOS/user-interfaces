import{n as m,t as l}from"./chunk-BwCtja5l.js";import{$n as kf,An as cw,Ar as xy,At as Ls,B as $E,Dr as w$1,Dt as Ky,Er as v,Fn as eb,Fr as zw,G as Ag,Hn as fv,In as em,It as On,K as An,Kn as hI,Kt as Sb,Mn as ds,Mt as Mg,Nn as dv,Nt as Mr,On as cr,Ot as LC,Pn as eB,Pr as zg,Q as Dl,Sn as _E,St as KC,U as AC,V as $g,Vn as fo,Vt as Ps,Wn as ge,Wt as RC,X as Cs,Yn as it,Z as Da,Zt as TT,_t as JC,ar as nb,at as G,br as te,cn as WC,dn as Xg,dr as pe,dt as Hr,en as Ut,et as Ef,fn as Xj,fr as pm,gr as rb,hn as Yg,ht as Il,jn as de,mt as If,nt as FC,on as Vy,or as nm,ot as Gg,qn as ib,qt as Sc,rt as Fb,sn as W,tr as mb,tt as El,ur as ob,ut as Hm,vr as sm,vt as Je,wt as Kg,xr as tm}from"./main-HSFPQYN5.js";import{A as ln,D as he,H as yn,I as tt,L as ue,M as me$1,R as us,U as yt,W as zi,_ as Z,a as Dt$1,d as Ni,f as On$1,g as Wr,l as N$1,u as Ne,v as _e,w as fr,x as cl,y as _n}from"./chunk-Cw53viGO.js";import{N as ot,f as Nt$1,i as F,m as Pt$1,u as Lr}from"./chunk-CMTdItFw.js";import{t as P}from"./chunk-BXWSPTfZ.js";import{t as v$1}from"./chunk-B2fbbJx1.js";var xt=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`];var St=[`mat-icon, [matMenuItemIcon]`,`*`];function wt(i,s){i&1&&(kf(),Cs(0,`svg`,2),zg(1,`polygon`,3),Dl())}var Dt=[`*`];function Pt(i,s){if(i&1){let e=WC();El(0,`div`,0),Xg(`click`,function(){Ef(e);return If(KC().closed.emit(`click`))})(`animationstart`,function(n){Ef(e);return If(KC()._onAnimationStart(n.animationName))})(`animationend`,function(n){Ef(e);return If(KC()._onAnimationDone(n.animationName))})(`animationcancel`,function(n){Ef(e);return If(KC()._onAnimationDone(n.animationName))}),El(1,`div`,1),eb(2),Il()()}if(i&2){let e=KC();mb(e._classList),sm(`mat-menu-panel-animations-disabled`,e._animationsDisabled)(`mat-menu-panel-exit-animation`,e._panelAnimationState===`void`)(`mat-menu-panel-animating`,e._isAnimating()),Yg(`id`,e.panelId),$g(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e.ariaLabelledby||null)(`aria-describedby`,e.ariaDescribedby||null)}}var ce=new w$1(`MAT_MENU_PANEL`);var N=(()=>{class i{_elementRef=v(An);_document=v(G);_focusMonitor=v(On$1);_parentMenu=v(ce,{optional:!0});_changeDetectorRef=v(Hm);role=`menuitem`;disabled=!1;disableRipple=!1;_hovered=new te;_focused=new te;_highlighted=!1;_triggersSubmenu=!1;constructor(){v(N$1).load(fr),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons`);for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||i)};static ɵcmp=zw({type:i,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:8,hostBindings:function(t,n){t&1&&Kg(`click`,function(a){return n._checkDisabled(a)})(`mouseenter`,function(){return n._handleMouseEnter()}),t&2&&($g(`role`,n.role)(`tabindex`,n._getTabIndex())(`aria-disabled`,n.disabled)(`disabled`,n.disabled||null),sm(`mat-mdc-menu-item-highlighted`,n._highlighted)(`mat-mdc-menu-item-submenu-trigger`,n._triggersSubmenu))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,TT],disableRipple:[2,`disableRipple`,`disableRipple`,TT]},exportAs:[`matMenuItem`],ngContentSelectors:St,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(t,n){t&1&&(JC(xt),eb(0),Cs(1,`span`,0),eb(2,1),Dl(),zg(3,`div`,1),FC(4,wt,2,0,`:svg:svg`,2)),t&2&&(hI(3),Gg(`matRippleDisabled`,n.disableRipple||n.disabled)(`matRippleTrigger`,n._getHostElement()),hI(),LC(n._triggersSubmenu?4:-1))},dependencies:[Wr],encapsulation:2})}return i})();var kt=new w$1(`MatMenuContent`);var Tt=new w$1(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var me=`_mat-menu-enter`;var K=`_mat-menu-exit`;var D=(()=>{class i{_elementRef=v(An);_changeDetectorRef=v(Hm);_injector=v(ge);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=zi();_allItems;_directDescendantItems=new ds;_classList={};_panelAnimationState=`void`;_animationDone=new te;_isAnimating=Je(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,n=l({},this._classList);t&&t.length&&t.split(` `).forEach(o=>{n[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(o=>{n[o]=!0}),this._elementRef.nativeElement.className=``),this._classList=n}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new it;close=this.closed;panelId=v(_e).getId(`mat-menu-panel-`);constructor(){let e=v(Tt);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new yt(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(dv(this._directDescendantItems),fv(e=>Ky(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let n=e.toArray(),o=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[o]&&!n[o].disabled?t.setActiveItem(o):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(dv(this._directDescendantItems),fv(t=>Ky(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:Ni(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&n.setFocusOrigin(`keyboard`),n.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=$E(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=m(l({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===K;(t||e===me)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===me||e===K)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(K),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?me:K)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(dv(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||i)};static ɵcmp=zw({type:i,selectors:[[`mat-menu`]],contentQueries:function(t,n,o){if(t&1&&em(o,kt,5)(o,N,5)(o,N,4),t&2){let a;nb(a=rb())&&(n.lazyContent=a.first),nb(a=rb())&&(n._allItems=a),nb(a=rb())&&(n.items=a)}},viewQuery:function(t,n){if(t&1&&tm(cr,5),t&2){let o;nb(o=rb())&&(n.templateRef=o.first)}},hostVars:3,hostBindings:function(t,n){t&2&&$g(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,TT],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,e=>e==null?null:TT(e)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[Fb([{provide:ce,useExisting:i}])],ngContentSelectors:Dt,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(t,n){t&1&&(JC(),Ag(0,Pt,3,12,`ng-template`))},styles:[`mat-menu {
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
`],encapsulation:2})}return i})();var It=new w$1(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=v(ge);return()=>ln(i)}});var w=new WeakMap;var Rt=(()=>{class i{_canHaveBackdrop;_element=v(An);_viewContainerRef=v(On);_menuItemInstance=v(N,{optional:!0,self:!0});_dir=v(me$1,{optional:!0});_focusMonitor=v(On$1);_ngZone=v(de);_injector=v(ge);_scrollStrategy=v(It);_changeDetectorRef=v(Hm);_animationsDisabled=zi();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=W.EMPTY;_menuCloseSubscription=W.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=v(ce,{optional:!0});this._parentMaterialMenu=t instanceof D?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&w.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=w.get(t);w.set(t,this),n&&n!==this&&n._closeMenu();let o=this._createOverlay(t),a=o.getConfig(),g=a.positionStrategy;this._setPosition(t,g),this._canHaveBackdrop?a.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:a.hasBackdrop=t.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof D&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(Vy(t.close)).subscribe(()=>{g.withLockedPosition(!1).reapplyLastPosition(),g.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof D&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(Da(1)).subscribe(()=>{t.detach(),w.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&w.delete(n),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=yn(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof D&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new tt({positionStrategy:_n(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let o=n.connectionPair.overlayX===`start`?`after`:`before`,a=n.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(o,a)})})}_setPosition(e,t){let[n,o]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[a,g]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[U,q]=[a,g],[G,Z]=[n,o],P=0;if(this._triggersSubmenu()){if(Z=n=e.xPosition===`before`?`start`:`end`,o=G=n===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let de=this._parentMaterialMenu.items.first;this._parentInnerPadding=de?de._getHostElement().offsetTop:0}P=a===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(U=a===`top`?`bottom`:`top`,q=g===`top`?`bottom`:`top`);t.withPositions([{originX:n,originY:U,overlayX:G,overlayY:a,offsetY:P},{originX:o,originY:U,overlayX:Z,overlayY:a,offsetY:P},{originX:n,originY:q,overlayX:G,overlayY:g,offsetY:-P},{originX:o,originY:q,overlayX:Z,overlayY:g,offsetY:-P}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments();return Ky(e,this._parentMaterialMenu?this._parentMaterialMenu.closed:xy(),this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Mr(a=>this._menuOpen&&a!==this._menuItemInstance)):xy(),t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Ne(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return w.get(e)===this}_triggerIsAriaDisabled(){return TT(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){cw()};static ɵdir=Ps({type:i})}return i})();var O=(()=>{class i extends Rt{_cleanupTouchstart;_hoverSubscription=W.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new it;onMenuOpen=this.menuOpened;menuClosed=new it;onMenuClose=this.menuClosed;constructor(){super(!0);let e=v(fo);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{ue(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){he(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||i)};static ɵdir=Ps({type:i,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,n){t&1&&Kg(`click`,function(a){return n._handleClick(a)})(`mousedown`,function(a){return n._handleMousedown(a)})(`keydown`,function(a){return n._handleKeydown(a)}),t&2&&$g(`aria-haspopup`,n.menu?`menu`:null)(`aria-expanded`,n.menuOpen)(`aria-controls`,n.menuOpen?n.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[Mg]})}return i})();var ht=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Ls({type:i});static ɵinj=Hr({imports:[cl,us,Z,Dt$1]})}return i})();var Nt=()=>[import(`./chunk-BvIP6VgQ.js`).then(i=>i.SettingsDebugPanelComponent)];var Ot=()=>[import(`./chunk-CW3f1tb1.js`).then(i=>i.BindingDebugPanelComponent)];var At=()=>[import(`./chunk-coGdWzf2.js`).then(i=>i.DebugConsoleComponent)];function Ft(i,s){if(i&1){let e=WC();Cs(0,`button`,8),Kg(`click`,function(){Ef(e);return If(KC(2).openPanel(`settings`))}),Sb(1),Dl()}if(i&2){let e=KC(2);hI(),pm(` `,e.override_count(),` setting `,e.override_count()===1?`override`:`overrides`,` active `)}}function Lt(i,s){if(i&1){let e=WC();Cs(0,`settings-debug-panel`,10),Kg(`showChange`,function(){Ef(e);return If(KC(3).panel.set(null))}),Dl()}if(i&2){let e=KC(3);Gg(`show`,!0)(`schema`,e.schema())}}function Bt(i,s){if(i&1&&FC(0,Lt,1,2,`settings-debug-panel`,9),i&2)LC(KC(2).panel()===`settings`?0:-1)}function Vt(i,s){if(i&1){let e=WC();Cs(0,`binding-debug-panel`,12),Kg(`showChange`,function(){Ef(e);return If(KC(3).panel.set(null))}),Dl()}i&2&&Gg(`show`,!0)(`hotkeysEnabled`,!1)}function Ht(i,s){if(i&1&&FC(0,Vt,1,2,`binding-debug-panel`,11),i&2)LC(KC(2).panel()===`bindings`?0:-1)}function Yt(i,s){if(i&1){let e=WC();Cs(0,`debug-console`,12),Kg(`showChange`,function(){Ef(e);return If(KC(3).panel.set(null))}),Dl()}i&2&&Gg(`show`,!0)(`hotkeysEnabled`,!1)}function jt(i,s){if(i&1&&FC(0,Yt,1,2,`debug-console`,11),i&2)LC(KC(2).panel()===`console`?0:-1)}function Xt(i,s){if(i&1){let e=WC();Cs(0,`button`,2,0),Kg(`contextmenu`,function(n){Ef(e);let o=ib(1);return If(KC().openMenu(n,o))}),Dl(),Cs(2,`mat-menu`,3,1)(4,`div`,4),Sb(5,` Debugging Panels `),Dl(),Cs(6,`button`,5),Kg(`click`,function(){Ef(e);return If(KC().openPanel(`settings`))}),Cs(7,`div`,6)(8,`icon`),Sb(9,`discover_tune`),Dl(),Cs(10,`div`),Sb(11,`Settings`),Dl()()(),Cs(12,`button`,5),Kg(`click`,function(){Ef(e);return If(KC().openPanel(`bindings`))}),Cs(13,`div`,6)(14,`icon`),Sb(15,`linked_services`),Dl(),Cs(16,`div`),Sb(17,`Driver bindings`),Dl()()(),Cs(18,`button`,5),Kg(`click`,function(){Ef(e);return If(KC().openPanel(`console`))}),Cs(19,`div`,6)(20,`icon`),Sb(21,`terminal_2`),Dl(),Cs(22,`div`),Sb(23,`Console`),Dl()()()(),FC(24,Ft,2,2,`button`,7),Ag(25,Bt,1,1),AC(26,25,Nt),Ag(28,Ht,1,1),AC(29,28,Ot),Ag(31,jt,1,1),AC(32,31,At)}if(i&2){let e=ib(3),t=KC();Gg(`matMenuTriggerFor`,e),hI(24),LC(t.override_count()?24:-1),hI(2),RC(t.panel()===`settings`),hI(3),RC(t.panel()===`bindings`),hI(3),RC(t.panel()===`console`)}}var gt=class i extends F{_hotkey=v(ot);_document=v(G);_injector=v(ge);_menu_trigger=eB(O);_settings=Je(null);_schema_request;loadSchema=Xj();schema=Je(null);panel=Je(null);allowed=Ut(()=>{let s=Lr();return s.includes(`placeos_admin`)||s.includes(`placeos_support`)});override_count=Ut(()=>Object.keys(this._settings()?.debug_overrides()??{}).length);constructor(){super(),Sc(()=>{this.allowed()&&pe(()=>{P(),this._injector.get(v$1),this._settings.set(this._injector.get(Pt$1))})})}ngOnInit(){for(let[e,t]of[[`settings`,[`Control`,`Alt`,`Shift`,`KeyS`]],[`bindings`,[`Control`,`Alt`,`Shift`,`KeyB`]],[`console`,[`Control`,`Backquote`]]])this.subscription(e,this._hotkey.listen(t,()=>{this.allowed()&&(this.panel()===e?this.panel.set(null):this.openPanel(e))}))}onContextMenu(s){if(!this.allowed())return;let e=this._document.documentElement.clientHeight;if(s.clientX<0||s.clientX>32||s.clientY<e-32||s.clientY>e)return;let t=this._menu_trigger();t&&this.openMenu(s,t)}openMenu(s,e){s.preventDefault(),e.openMenu()}openPanel(s){this.allowed()&&(this.panel.set(s),s===`settings`&&(this._schema_request??=this.loadSettingsSchema()))}async loadSettingsSchema(){try{this.schema.set(await this.loadSchema()?.()??null)}catch{this.schema.set(null)}}static ɵfac=function(e){return new(e||i)};static ɵcmp=zw({type:i,selectors:[[`settings-debug-panel-launcher`]],viewQuery:function(e,t){e&1&&nm(t._menu_trigger,O,5),e&2&&ob()},hostBindings:function(e,t){e&1&&Kg(`contextmenu`,function(o){return t.onContextMenu(o)},_E)},inputs:{loadSchema:[1,`loadSchema`]},features:[Mg],decls:1,vars:1,consts:[[`menu_trigger`,`matMenuTrigger`],[`debug_menu`,`matMenu`],[`type`,`button`,`aria-label`,`Open debugging tools`,1,`absolute`,`bottom-0`,`left-0`,`z-999`,`h-px`,`w-px`,3,`contextmenu`,`matMenuTriggerFor`],[`yPosition`,`above`],[1,`flex`,`w-64`,`items-center`,`justify-center`,`pb-2`,`text-sm`,`opacity-60`],[`mat-menu-item`,``,3,`click`],[1,`flex`,`items-center`,`gap-2`],[`type`,`button`,1,`bg-warning`,`fixed`,`bottom-1`,`left-1`,`z-999`,`rounded-sm`,`px-2`,`py-0.5`,`text-xs`,`text-black`,`shadow`],[`type`,`button`,1,`bg-warning`,`fixed`,`bottom-1`,`left-1`,`z-999`,`rounded-sm`,`px-2`,`py-0.5`,`text-xs`,`text-black`,`shadow`,3,`click`],[3,`show`,`schema`],[3,`showChange`,`show`,`schema`],[3,`show`,`hotkeysEnabled`],[3,`showChange`,`show`,`hotkeysEnabled`]],template:function(e,t){e&1&&FC(0,Xt,34,5),e&2&&LC(t.allowed()?0:-1)},dependencies:[ht,D,N,O,Nt$1],encapsulation:2})};export{gt as SettingsDebugPanelLauncherComponent};