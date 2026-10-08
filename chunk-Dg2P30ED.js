import{$ as Nf,$t as ch,C as Ev,D as HC,Dt as W,E as GC,En as jy,Et as Vy,Fn as mw,Gn as pr,H as Lb,I as Je,J as Ml,K as MT,Kn as ps,L as Jg,Lt as YE,Mr as l,Mt as X,Nn as me$1,Nr as m,On as lB,Or as zC,Pt as Xg,Qt as cb,Rn as ne,Sn as im,Sr as xf,St as Uy,Tn as js,U as Lg,V as Kw,Vn as oB,Wn as pb,Y as Mn,_t as Tr,an as db,ar as sB,at as RE,b as EI,bt as Uf,cr as sm,dn as fb,dr as tb,en as cm,et as Nl,fn as fe,ft as T,gn as hb,h as Cs,hr as um,i as $r,j as Hy,kr as zb,mn as gm,mr as ub,nn as ct,on as dm,pn as ga,pt as Tb,rt as Ps,sn as ds,sr as sb,tn as cr,tr as rm,u as Bg,ut as Sl,wt as VC,y as E,z as Kg}from"./chunk-t9xMF4Gx.js";import"./chunk-Bly2J6t4.js";import{r as Ie,s as Vo}from"./chunk-CBwuQUI9.js";import{m as le,n as C,o as O$1,p as ie,s as Q}from"./chunk-1Y2z0LAN.js";import{d as pt,f as st,m as ze,o as Ve,r as He,t as Bt,u as oi}from"./chunk-Bv5n3tfj.js";import{t as H}from"./chunk-uRNU9qJa.js";import{a as Z,c as q,l as qe,o as ds$1,t as $}from"./chunk-DsmT40ED.js";import{a as tt,i as gt$1,o as ut}from"./chunk-Dt4_2us2.js";var _t=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`];var gt=[`mat-icon, [matMenuItemIcon]`,`*`];function ft(i,_){i&1&&(Uf(),Cs(0,`svg`,2),Jg(1,`polygon`,3),Sl())}var bt=[`*`];function Mt(i,_){if(i&1){let e=tb();Ml(0,`div`,0),sm(`click`,function(){Nf(e);return xf(sb().closed.emit(`click`))})(`animationstart`,function(n){Nf(e);return xf(sb()._onAnimationStart(n.animationName))})(`animationend`,function(n){Nf(e);return xf(sb()._onAnimationDone(n.animationName))})(`animationcancel`,function(n){Nf(e);return xf(sb()._onAnimationDone(n.animationName))}),Ml(1,`div`,1),ub(2),Nl()()}if(i&2){let e=sb();Tb(e._classList),gm(`mat-menu-panel-animations-disabled`,e._animationsDisabled)(`mat-menu-panel-exit-animation`,e._panelAnimationState===`void`)(`mat-menu-panel-animating`,e._isAnimating()),rm(`id`,e.panelId),Kg(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e.ariaLabelledby||null)(`aria-describedby`,e.ariaDescribedby||null)}}var ue=new T(`MAT_MENU_PANEL`);var N=(()=>{class i{_elementRef=E(pr);_document=E(X);_focusMonitor=E(qe);_parentMenu=E(ue,{optional:!0});_changeDetectorRef=E(MT);role=`menuitem`;disabled=!1;disableRipple=!1;_hovered=new ne;_focused=new ne;_highlighted=!1;_triggersSubmenu=!1;constructor(){E(le).load(tt),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons`);for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||i)};static ɵcmp=Kw({type:i,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:8,hostBindings:function(t,n){t&1&&im(`click`,function(a){return n._checkDisabled(a)})(`mouseenter`,function(){return n._handleMouseEnter()}),t&2&&(Kg(`role`,n.role)(`tabindex`,n._getTabIndex())(`aria-disabled`,n.disabled)(`disabled`,n.disabled||null),gm(`mat-mdc-menu-item-highlighted`,n._highlighted)(`mat-mdc-menu-item-submenu-trigger`,n._triggersSubmenu))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,lB],disableRipple:[2,`disableRipple`,`disableRipple`,lB]},exportAs:[`matMenuItem`],ngContentSelectors:gt,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(t,n){t&1&&(cb(_t),ub(0),Cs(1,`span`,0),ub(2,1),Sl(),Jg(3,`div`,1),GC(4,ft,2,0,`:svg:svg`,2)),t&2&&(EI(3),Xg(`matRippleDisabled`,n.disableRipple||n.disabled)(`matRippleTrigger`,n._getHostElement()),EI(),zC(n._triggersSubmenu?4:-1))},dependencies:[ut],encapsulation:2})}return i})();var yt=new T(`MatMenuContent`);var vt=new T(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var me=`_mat-menu-enter`;var U=`_mat-menu-exit`;var x=(()=>{class i{_elementRef=E(pr);_changeDetectorRef=E(MT);_injector=E(me$1);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=ds$1();_allItems;_directDescendantItems=new ds;_classList={};_panelAnimationState=`void`;_animationDone=new ne;_isAnimating=Je(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,n=l({},this._classList);t&&t.length&&t.split(` `).forEach(o=>{n[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(o=>{n[o]=!0}),this._elementRef.nativeElement.className=``),this._classList=n}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new ct;close=this.closed;panelId=E(O$1).getId(`mat-menu-panel-`);constructor(){let e=E(vt);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new q(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(Hy(this._directDescendantItems),Ev(e=>Vy(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let n=e.toArray(),o=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[o]&&!n[o].disabled?t.setActiveItem(o):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Hy(this._directDescendantItems),Ev(t=>Vy(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:Q(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&n.setFocusOrigin(`keyboard`),n.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=YE(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=m(l({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===U;(t||e===me)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===me||e===U)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(U),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?me:U)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Hy(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||i)};static ɵcmp=Kw({type:i,selectors:[[`mat-menu`]],contentQueries:function(t,n,o){if(t&1&&cm(o,yt,5)(o,N,5)(o,N,4),t&2){let a;db(a=fb())&&(n.lazyContent=a.first),db(a=fb())&&(n._allItems=a),db(a=fb())&&(n.items=a)}},viewQuery:function(t,n){if(t&1&&um(cr,5),t&2){let o;db(o=fb())&&(n.templateRef=o.first)}},hostVars:3,hostBindings:function(t,n){t&2&&Kg(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,lB],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,e=>e==null?null:lB(e)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[zb([{provide:ue,useExisting:i}])],ngContentSelectors:bt,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(t,n){t&1&&(cb(),Bg(0,Mt,3,12,`ng-template`))},styles:[`mat-menu {
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
`],encapsulation:2})}return i})();var Ct=new T(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=E(me$1);return()=>Ve(i)}});var S=new WeakMap;var St=(()=>{class i{_canHaveBackdrop;_element=E(pr);_viewContainerRef=E(Mn);_menuItemInstance=E(N,{optional:!0,self:!0});_dir=E(C,{optional:!0});_focusMonitor=E(qe);_ngZone=E(fe);_injector=E(me$1);_scrollStrategy=E(Ct);_changeDetectorRef=E(MT);_animationsDisabled=ds$1();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=W.EMPTY;_menuCloseSubscription=W.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=E(ue,{optional:!0});this._parentMaterialMenu=t instanceof x?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&S.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=S.get(t);S.set(t,this),n&&n!==this&&n._closeMenu();let o=this._createOverlay(t),a=o.getConfig(),c=a.positionStrategy;this._setPosition(t,c),this._canHaveBackdrop?a.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:a.hasBackdrop=t.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof x&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(Uy(t.close)).subscribe(()=>{c.withLockedPosition(!1).reapplyLastPosition(),c.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof x&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(ga(1)).subscribe(()=>{t.detach(),S.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&S.delete(n),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=He(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof x&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new pt({positionStrategy:ze(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let o=n.connectionPair.overlayX===`start`?`after`:`before`,a=n.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(o,a)})})}_setPosition(e,t){let[n,o]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[a,c]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[D,q]=[a,c],[G,Z]=[n,o],w=0;if(this._triggersSubmenu()){if(Z=n=e.xPosition===`before`?`start`:`end`,o=G=n===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let ce=this._parentMaterialMenu.items.first;this._parentInnerPadding=ce?ce._getHostElement().offsetTop:0}w=a===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(D=a===`top`?`bottom`:`top`,q=c===`top`?`bottom`:`top`);t.withPositions([{originX:n,originY:D,overlayX:G,overlayY:a,offsetY:w},{originX:o,originY:D,overlayX:Z,overlayY:a,offsetY:w},{originX:n,originY:q,overlayX:G,overlayY:c,offsetY:-w},{originX:o,originY:q,overlayX:Z,overlayY:c,offsetY:-w}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments();return Vy(e,this._parentMaterialMenu?this._parentMaterialMenu.closed:jy(),this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Tr(a=>this._menuOpen&&a!==this._menuItemInstance)):jy(),t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new st(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return S.get(e)===this}_triggerIsAriaDisabled(){return lB(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){mw()};static ɵdir=js({type:i})}return i})();var O=(()=>{class i extends St{_cleanupTouchstart;_hoverSubscription=W.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new ct;onMenuOpen=this.menuOpened;menuClosed=new ct;onMenuClose=this.menuClosed;constructor(){super(!0);let e=E(ps);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{$(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){Z(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||i)};static ɵdir=js({type:i,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,n){t&1&&im(`click`,function(a){return n._handleClick(a)})(`mousedown`,function(a){return n._handleMousedown(a)})(`keydown`,function(a){return n._handleKeydown(a)}),t&2&&Kg(`aria-haspopup`,n.menu?`menu`:null)(`aria-expanded`,n.menuOpen)(`aria-controls`,n.menuOpen?n.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[Lg]})}return i})();var lt=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Ps({type:i});static ɵinj=$r({imports:[gt$1,oi,ie,Bt]})}return i})();var Dt=()=>[import(`./chunk-CLH1QbTZ.js`).then(i=>i.SettingsDebugPanelComponent)];var wt=()=>[import(`./chunk-sy4VRRTF.js`).then(i=>i.BindingDebugPanelComponent)];var Pt=()=>[import(`./chunk-B_2mcEuj.js`).then(i=>i.DebugConsoleComponent)];function kt(i,_){if(i&1){let e=tb();Cs(0,`settings-debug-panel`,8),im(`showChange`,function(){Nf(e);return xf(sb(2).panel.set(null))}),Sl()}if(i&2){let e=sb(2);Xg(`show`,!0)(`schema`,e.schema())}}function Tt(i,_){if(i&1&&GC(0,kt,1,2,`settings-debug-panel`,7),i&2)zC(sb().panel()===`settings`?0:-1)}function It(i,_){if(i&1){let e=tb();Cs(0,`binding-debug-panel`,10),im(`showChange`,function(){Nf(e);return xf(sb(2).panel.set(null))}),Sl()}i&2&&Xg(`show`,!0)(`hotkeysEnabled`,!1)}function Rt(i,_){if(i&1&&GC(0,It,1,2,`binding-debug-panel`,9),i&2)zC(sb().panel()===`bindings`?0:-1)}function Et(i,_){if(i&1){let e=tb();Cs(0,`debug-console`,10),im(`showChange`,function(){Nf(e);return xf(sb(2).panel.set(null))}),Sl()}i&2&&Xg(`show`,!0)(`hotkeysEnabled`,!1)}function Nt(i,_){if(i&1&&GC(0,Et,1,2,`debug-console`,9),i&2)zC(sb().panel()===`console`?0:-1)}var fn=(()=>{class i extends Ie{constructor(){super(...arguments),this._hotkey=E(Vo),this._document=E(X),this._menu_trigger=sB.required(O),this.loadSchema=oB(),this.schema=Je(null),this.panel=Je(null)}ngOnInit(){for(let[t,n]of[[`settings`,[`Control`,`Alt`,`Shift`,`KeyS`]],[`bindings`,[`Control`,`Alt`,`Shift`,`KeyB`]],[`console`,[`Control`,`Backquote`]]])this.subscription(t,this._hotkey.listen(n,()=>{this.panel()===t?this.panel.set(null):this.openPanel(t)}))}onContextMenu(e){let t=this._document.documentElement.clientHeight;e.clientX<0||e.clientX>32||e.clientY<t-32||e.clientY>t||this.openMenu(e,this._menu_trigger())}openMenu(e,t){e.preventDefault(),t.openMenu()}openPanel(e){this.panel.set(e),e===`settings`&&(this._schema_request??=this.loadSettingsSchema())}async loadSettingsSchema(){try{this.schema.set(await this.loadSchema()?.()??null)}catch{this.schema.set(null)}}static{this.ɵfac=(()=>{let e;return function(n){return(e||(e=ch(i)))(n||i)}})()}static{this.ɵcmp=Kw({type:i,selectors:[[`settings-debug-panel-launcher`]],viewQuery:function(t,n){t&1&&dm(n._menu_trigger,O,5),t&2&&pb()},hostBindings:function(t,n){t&1&&im(`contextmenu`,function(a){return n.onContextMenu(a)},RE)},inputs:{loadSchema:[1,`loadSchema`]},features:[Lg],decls:33,vars:4,consts:[[`menu_trigger`,`matMenuTrigger`],[`debug_menu`,`matMenu`],[`type`,`button`,`aria-label`,`Open debugging tools`,1,`absolute`,`bottom-0`,`left-0`,`z-999`,`h-px`,`w-px`,3,`contextmenu`,`matMenuTriggerFor`],[`yPosition`,`above`],[1,`flex`,`w-64`,`items-center`,`justify-center`,`pb-2`,`text-sm`,`opacity-60`],[`mat-menu-item`,``,3,`click`],[1,`flex`,`items-center`,`gap-2`],[3,`show`,`schema`],[3,`showChange`,`show`,`schema`],[3,`show`,`hotkeysEnabled`],[3,`showChange`,`show`,`hotkeysEnabled`]],template:function(t,n){if(t&1){let o=tb();Cs(0,`button`,2,0),im(`contextmenu`,function(c){Nf(o);let D=hb(1);return xf(n.openMenu(c,D))}),Sl(),Cs(2,`mat-menu`,3,1)(4,`div`,4),Lb(5,` Debugging Panels `),Sl(),Cs(6,`button`,5),im(`click`,function(){return n.openPanel(`settings`)}),Cs(7,`div`,6)(8,`icon`),Lb(9,`discover_tune`),Sl(),Cs(10,`div`),Lb(11,`Settings`),Sl()()(),Cs(12,`button`,5),im(`click`,function(){return n.openPanel(`bindings`)}),Cs(13,`div`,6)(14,`icon`),Lb(15,`linked_services`),Sl(),Cs(16,`div`),Lb(17,`Driver bindings`),Sl()()(),Cs(18,`button`,5),im(`click`,function(){return n.openPanel(`console`)}),Cs(19,`div`,6)(20,`icon`),Lb(21,`terminal_2`),Sl(),Cs(22,`div`),Lb(23,`Console`),Sl()()()(),Bg(24,Tt,1,1),VC(25,24,Dt),Bg(27,Rt,1,1),VC(28,27,wt),Bg(30,Nt,1,1),VC(31,30,Pt)}if(t&2)Xg(`matMenuTriggerFor`,hb(3)),EI(25),HC(n.panel()===`settings`),EI(3),HC(n.panel()===`bindings`),EI(3),HC(n.panel()===`console`)},dependencies:[lt,x,N,O,H],encapsulation:2})}}return i})();export{fn as SettingsDebugPanelLauncherComponent};
//# debugId=2cb77722-a7c1-55d3-94e6-11e1e90c24bc
//# sourceMappingURL=chunk-Dg2P30ED.js.map