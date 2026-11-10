import{n as m,t as l}from"./chunk-BwCtja5l.js";import{$n as om,A as Gf,An as hs,Ar as w$1,At as Vs,Bt as Xg,C as FE,Cn as gm,Cr as ub,D as GC,Dn as hb,E as Fn,Et as VC,Ft as Wg,Hr as yv,Ht as Y,It as Wm,Kr as zg,Lt as XE,M as Gt,Or as vv,Pr as xc,Pt as Wb,Sn as ge,Tr as v,Ur as zC,V as Jg,Vn as lB,W as Jw,X as Ml,Xn as nm,Y as Ly,_n as fb,_r as tb,an as cm,c as Af,cn as db,d as BC,dr as rv,dt as Rn,et as Nl,f as Bs,ft as Rr,gn as fB,ht as Sl,in as cb,it as Py,j as Gg,jr as wa,jt as W,kn as hr,kr as vw,ln as de,lt as Rf,mn as et,nr as pb,p as CI,pr as sb,q as Lb,qn as mo,r as $r,rt as PT,st as Qg,tn as at,ut as Rg,vn as fe,vr as te,w as Fg,xt as Ts,yr as tm,yt as Tb}from"./chunk-Dh8vkzIg.js";import"./chunk-BjYD72G1.js";import{D as zn,H as Bn,J as Sl$1,O as V,Q as _h,S as w$2,U as Gl,b as re,f as Vn,g as lt,i as Ft$1,m as Xe,p as X,s as Q,v as ne}from"./main-PDQG3IN7.js";import{a as Pe,r as Ge,t as Be}from"./chunk-BEmolH6Z.js";import{b as q,d as Vt$1,g as di,m as Yt$1,o as It$1,p as Xt,t as $}from"./chunk-W2zz_e2A.js";import{t as $$1}from"./chunk-C9WAIaMV.js";import{i as w$3}from"./chunk-DL98lYDZ.js";var Ct=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`];var xt=[`mat-icon, [matMenuItemIcon]`,`*`];function St(i,_){i&1&&(Gf(),Ts(0,`svg`,2),Wg(1,`polygon`,3),Sl())}var wt=[`*`];function Dt(i,_){if(i&1){let e=tb();Ml(0,`div`,0),Jg(`click`,function(){Af(e);return Rf(sb().closed.emit(`click`))})(`animationstart`,function(n){Af(e);return Rf(sb()._onAnimationStart(n.animationName))})(`animationend`,function(n){Af(e);return Rf(sb()._onAnimationDone(n.animationName))})(`animationcancel`,function(n){Af(e);return Rf(sb()._onAnimationDone(n.animationName))}),Ml(1,`div`,1),ub(2),Nl()()}if(i&2){let e=sb();Tb(e._classList),cm(`mat-menu-panel-animations-disabled`,e._animationsDisabled)(`mat-menu-panel-exit-animation`,e._panelAnimationState===`void`)(`mat-menu-panel-animating`,e._isAnimating()),Qg(`id`,e.panelId),Gg(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e.ariaLabelledby||null)(`aria-describedby`,e.ariaDescribedby||null)}}var ce=new w$1(`MAT_MENU_PANEL`);var N=(()=>{class i{_elementRef=v(Rn);_document=v(W);_focusMonitor=v(lt);_parentMenu=v(ce,{optional:!0});_changeDetectorRef=v(Wm);role=`menuitem`;disabled=!1;disableRipple=!1;_hovered=new te;_focused=new te;_highlighted=!1;_triggersSubmenu=!1;constructor(){v(w$2).load(Be),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons`);for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||i)};static ɵcmp=Jw({type:i,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:8,hostBindings:function(t,n){t&1&&Xg(`click`,function(a){return n._checkDisabled(a)})(`mouseenter`,function(){return n._handleMouseEnter()}),t&2&&(Gg(`role`,n.role)(`tabindex`,n._getTabIndex())(`aria-disabled`,n.disabled)(`disabled`,n.disabled||null),cm(`mat-mdc-menu-item-highlighted`,n._highlighted)(`mat-mdc-menu-item-submenu-trigger`,n._triggersSubmenu))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,PT],disableRipple:[2,`disableRipple`,`disableRipple`,PT]},exportAs:[`matMenuItem`],ngContentSelectors:xt,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(t,n){t&1&&(cb(Ct),ub(0),Ts(1,`span`,0),ub(2,1),Sl(),Wg(3,`div`,1),GC(4,St,2,0,`:svg:svg`,2)),t&2&&(CI(3),zg(`matRippleDisabled`,n.disableRipple||n.disabled)(`matRippleTrigger`,n._getHostElement()),CI(),zC(n._triggersSubmenu?4:-1))},dependencies:[Pe],encapsulation:2})}return i})();var kt=new w$1(`MatMenuContent`);var Pt=new w$1(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var ue=`_mat-menu-enter`;var K=`_mat-menu-exit`;var D=(()=>{class i{_elementRef=v(Rn);_changeDetectorRef=v(Wm);_injector=v(de);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=zn();_allItems;_directDescendantItems=new hs;_classList={};_panelAnimationState=`void`;_animationDone=new te;_isAnimating=et(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,n=l({},this._classList);t&&t.length&&t.split(` `).forEach(o=>{n[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(o=>{n[o]=!0}),this._elementRef.nativeElement.className=``),this._classList=n}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new at;close=this.closed;panelId=v(ne).getId(`mat-menu-panel-`);constructor(){let e=v(Pt);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new re(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(yv(this._directDescendantItems),vv(e=>rv(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let n=e.toArray(),o=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[o]&&!n[o].disabled?t.setActiveItem(o):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(yv(this._directDescendantItems),vv(t=>rv(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:Xe(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&n.setFocusOrigin(`keyboard`),n.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=XE(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=m(l({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===K;(t||e===ue)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===ue||e===K)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(K),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?ue:K)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(yv(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||i)};static ɵcmp=Jw({type:i,selectors:[[`mat-menu`]],contentQueries:function(t,n,o){if(t&1&&tm(o,kt,5)(o,N,5)(o,N,4),t&2){let a;db(a=fb())&&(n.lazyContent=a.first),db(a=fb())&&(n._allItems=a),db(a=fb())&&(n.items=a)}},viewQuery:function(t,n){if(t&1&&nm(hr,5),t&2){let o;db(o=fb())&&(n.templateRef=o.first)}},hostVars:3,hostBindings:function(t,n){t&2&&Gg(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,PT],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,e=>e==null?null:PT(e)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[Wb([{provide:ce,useExisting:i}])],ngContentSelectors:wt,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(t,n){t&1&&(cb(),Fg(0,Dt,3,12,`ng-template`))},styles:[`mat-menu {
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
`],encapsulation:2})}return i})();var Tt=new w$1(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=v(de);return()=>It$1(i)}});var w=new WeakMap;var It=(()=>{class i{_canHaveBackdrop;_element=v(Rn);_viewContainerRef=v(Fn);_menuItemInstance=v(N,{optional:!0,self:!0});_dir=v(Ft$1,{optional:!0});_focusMonitor=v(lt);_ngZone=v(fe);_injector=v(de);_scrollStrategy=v(Tt);_changeDetectorRef=v(Wm);_animationsDisabled=zn();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=Y.EMPTY;_menuCloseSubscription=Y.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=v(ce,{optional:!0});this._parentMaterialMenu=t instanceof D?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&w.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=w.get(t);w.set(t,this),n&&n!==this&&n._closeMenu();let o=this._createOverlay(t),a=o.getConfig(),g=a.positionStrategy;this._setPosition(t,g),this._canHaveBackdrop?a.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:a.hasBackdrop=t.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof D&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(Py(t.close)).subscribe(()=>{g.withLockedPosition(!1).reapplyLastPosition(),g.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof D&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(wa(1)).subscribe(()=>{t.detach(),w.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&w.delete(n),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=Xt(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof D&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new q({positionStrategy:Yt$1(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let o=n.connectionPair.overlayX===`start`?`after`:`before`,a=n.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(o,a)})})}_setPosition(e,t){let[n,o]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[a,g]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[U,q]=[a,g],[G,Z]=[n,o],k=0;if(this._triggersSubmenu()){if(Z=n=e.xPosition===`before`?`start`:`end`,o=G=n===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let de=this._parentMaterialMenu.items.first;this._parentInnerPadding=de?de._getHostElement().offsetTop:0}k=a===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(U=a===`top`?`bottom`:`top`,q=g===`top`?`bottom`:`top`);t.withPositions([{originX:n,originY:U,overlayX:G,overlayY:a,offsetY:k},{originX:o,originY:U,overlayX:Z,overlayY:a,offsetY:k},{originX:n,originY:q,overlayX:G,overlayY:g,offsetY:-k},{originX:o,originY:q,overlayX:Z,overlayY:g,offsetY:-k}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments();return rv(e,this._parentMaterialMenu?this._parentMaterialMenu.closed:Ly(),this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Rr(a=>this._menuOpen&&a!==this._menuItemInstance)):Ly(),t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new $(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return w.get(e)===this}_triggerIsAriaDisabled(){return PT(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){vw()};static ɵdir=Vs({type:i})}return i})();var O=(()=>{class i extends It{_cleanupTouchstart;_hoverSubscription=Y.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new at;onMenuOpen=this.menuOpened;menuClosed=new at;onMenuClose=this.menuClosed;constructor(){super(!0);let e=v(mo);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{X(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){Q(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||i)};static ɵdir=Vs({type:i,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,n){t&1&&Xg(`click`,function(a){return n._handleClick(a)})(`mousedown`,function(a){return n._handleMousedown(a)})(`keydown`,function(a){return n._handleKeydown(a)}),t&2&&Gg(`aria-haspopup`,n.menu?`menu`:null)(`aria-expanded`,n.menuOpen)(`aria-controls`,n.menuOpen?n.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[Rg]})}return i})();var ht=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Bs({type:i});static ɵinj=$r({imports:[Ge,di,Vn,Vt$1]})}return i})();var Et=()=>[import(`./chunk-B1tq58KL.js`).then(i=>i.SettingsDebugPanelComponent)];var Nt=()=>[import(`./chunk-BztFaJMD.js`).then(i=>i.BindingDebugPanelComponent)];var Ot=()=>[import(`./chunk-DB9cOa_5.js`).then(i=>i.DebugConsoleComponent)];function At(i,_){if(i&1){let e=tb();Ts(0,`button`,8),Xg(`click`,function(){Af(e);return Rf(sb(2).openPanel(`settings`))}),Lb(1),Sl()}if(i&2){let e=sb(2);CI(),gm(` `,e.override_count(),` setting `,e.override_count()===1?`override`:`overrides`,` active `)}}function Ft(i,_){if(i&1){let e=tb();Ts(0,`settings-debug-panel`,10),Xg(`showChange`,function(){Af(e);return Rf(sb(3).panel.set(null))}),Sl()}if(i&2){let e=sb(3);zg(`show`,!0)(`schema`,e.schema())}}function Lt(i,_){if(i&1&&GC(0,Ft,1,2,`settings-debug-panel`,9),i&2)zC(sb(2).panel()===`settings`?0:-1)}function Bt(i,_){if(i&1){let e=tb();Ts(0,`binding-debug-panel`,12),Xg(`showChange`,function(){Af(e);return Rf(sb(3).panel.set(null))}),Sl()}i&2&&zg(`show`,!0)(`hotkeysEnabled`,!1)}function Vt(i,_){if(i&1&&GC(0,Bt,1,2,`binding-debug-panel`,11),i&2)zC(sb(2).panel()===`bindings`?0:-1)}function Ht(i,_){if(i&1){let e=tb();Ts(0,`debug-console`,12),Xg(`showChange`,function(){Af(e);return Rf(sb(3).panel.set(null))}),Sl()}i&2&&zg(`show`,!0)(`hotkeysEnabled`,!1)}function Yt(i,_){if(i&1&&GC(0,Ht,1,2,`debug-console`,11),i&2)zC(sb(2).panel()===`console`?0:-1)}function jt(i,_){if(i&1){let e=tb();Ts(0,`button`,2,0),Xg(`contextmenu`,function(n){Af(e);let o=hb(1);return Rf(sb().openMenu(n,o))}),Sl(),Ts(2,`mat-menu`,3,1)(4,`div`,4),Lb(5,` Debugging Panels `),Sl(),Ts(6,`button`,5),Xg(`click`,function(){Af(e);return Rf(sb().openPanel(`settings`))}),Ts(7,`div`,6)(8,`icon`),Lb(9,`discover_tune`),Sl(),Ts(10,`div`),Lb(11,`Settings`),Sl()()(),Ts(12,`button`,5),Xg(`click`,function(){Af(e);return Rf(sb().openPanel(`bindings`))}),Ts(13,`div`,6)(14,`icon`),Lb(15,`linked_services`),Sl(),Ts(16,`div`),Lb(17,`Driver bindings`),Sl()()(),Ts(18,`button`,5),Xg(`click`,function(){Af(e);return Rf(sb().openPanel(`console`))}),Ts(19,`div`,6)(20,`icon`),Lb(21,`terminal_2`),Sl(),Ts(22,`div`),Lb(23,`Console`),Sl()()()(),GC(24,At,2,2,`button`,7),Fg(25,Lt,1,1),BC(26,25,Et),Fg(28,Vt,1,1),BC(29,28,Nt),Fg(31,Yt,1,1),BC(32,31,Ot)}if(i&2){let e=hb(3),t=sb();zg(`matMenuTriggerFor`,e),CI(24),zC(t.override_count()?24:-1),CI(2),VC(t.panel()===`settings`),CI(3),VC(t.panel()===`bindings`),CI(3),VC(t.panel()===`console`)}}var In=(()=>{class i extends Bn{constructor(){super(),this._hotkey=v(Sl$1),this._document=v(W),this._injector=v(de),this._menu_trigger=fB(O),this._settings=et(null),this.loadSchema=lB(),this.schema=et(null),this.panel=et(null),this.allowed=Gt(()=>{let e=Gl();return e.includes(`placeos_admin`)||e.includes(`placeos_support`)}),this.override_count=Gt(()=>Object.keys(this._settings()?.debug_overrides()??{}).length),xc(()=>{this.allowed()&&ge(()=>{w$3(),this._injector.get($$1),this._settings.set(this._injector.get(_h))})})}ngOnInit(){for(let[t,n]of[[`settings`,[`Control`,`Alt`,`Shift`,`KeyS`]],[`bindings`,[`Control`,`Alt`,`Shift`,`KeyB`]],[`console`,[`Control`,`Backquote`]]])this.subscription(t,this._hotkey.listen(n,()=>{this.allowed()&&(this.panel()===t?this.panel.set(null):this.openPanel(t))}))}onContextMenu(e){if(!this.allowed())return;let t=this._document.documentElement.clientHeight;if(e.clientX<0||e.clientX>32||e.clientY<t-32||e.clientY>t)return;let n=this._menu_trigger();n&&this.openMenu(e,n)}openMenu(e,t){e.preventDefault(),t.openMenu()}openPanel(e){this.allowed()&&(this.panel.set(e),e===`settings`&&(this._schema_request??=this.loadSettingsSchema()))}async loadSettingsSchema(){try{this.schema.set(await this.loadSchema()?.()??null)}catch{this.schema.set(null)}}static{this.ɵfac=function(t){return new(t||i)}}static{this.ɵcmp=Jw({type:i,selectors:[[`settings-debug-panel-launcher`]],viewQuery:function(t,n){t&1&&om(n._menu_trigger,O,5),t&2&&pb()},hostBindings:function(t,n){t&1&&Xg(`contextmenu`,function(a){return n.onContextMenu(a)},FE)},inputs:{loadSchema:[1,`loadSchema`]},features:[Rg],decls:1,vars:1,consts:[[`menu_trigger`,`matMenuTrigger`],[`debug_menu`,`matMenu`],[`type`,`button`,`aria-label`,`Open debugging tools`,1,`absolute`,`bottom-0`,`left-0`,`z-999`,`h-px`,`w-px`,3,`contextmenu`,`matMenuTriggerFor`],[`yPosition`,`above`],[1,`flex`,`w-64`,`items-center`,`justify-center`,`pb-2`,`text-sm`,`opacity-60`],[`mat-menu-item`,``,3,`click`],[1,`flex`,`items-center`,`gap-2`],[`type`,`button`,1,`bg-warning`,`fixed`,`bottom-1`,`left-1`,`z-999`,`rounded-sm`,`px-2`,`py-0.5`,`text-xs`,`text-black`,`shadow`],[`type`,`button`,1,`bg-warning`,`fixed`,`bottom-1`,`left-1`,`z-999`,`rounded-sm`,`px-2`,`py-0.5`,`text-xs`,`text-black`,`shadow`,3,`click`],[3,`show`,`schema`],[3,`showChange`,`show`,`schema`],[3,`show`,`hotkeysEnabled`],[3,`showChange`,`show`,`hotkeysEnabled`]],template:function(t,n){t&1&&GC(0,jt,34,5),t&2&&zC(n.allowed()?0:-1)},dependencies:[ht,D,N,O,V],encapsulation:2})}}return i})();export{In as SettingsDebugPanelLauncherComponent};