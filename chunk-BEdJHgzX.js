import{$n as ru,A as I0,C as Fo,Cr as yw,Ct as U0,Dn as kE,Dt as W0,E as H0,Fn as mM,Gt as __,Hn as oI,I as JI,K as M_,L as JU,Mn as le,N as Ia,Nn as lf,Or as l,Pn as lg,Qn as re,R as Kp,Rn as ne,S as FS,Sn as i_,Sr as y_,Tn as j0,Vn as nt,Vt as ZE,X as Oe,Yn as pt,_ as E$1,ar as ub,br as xd,bt as T_,cn as ee,cr as vc,dn as ff,dr as w0,en as b_,et as Pa,h as D0,hr as w_,ht as Sn,in as df,ir as tt,jn as lb,k as Ht,kn as ke,kr as m,ln as eo,lr as ve,m as Ci,mt as Se,nn as co,or as v,ot as Qa,pt as S_,q as Me,qt as _r,sn as e3,st as Qp,tn as cb,v as E0,w as G0,wr as z0,x as F0,xn as iM,xr as xt$1,z as Kt,zt as Z0}from"./main-3YRL6USN.js";import{B as d_,C as Ue,D as Vn,I as be,K as ii,L as bo,M as _i,O as Wn,Y as ke$1,_ as Qn,a as Ct$1,ct as z,d as Lo,dt as zs,k as Wo,lt as z_,m as Nn,ot as te,p as Me$1,rt as qu,st as wt$1,t as $n,u as Ln}from"./chunk-DTt3DJ3e.js";var gt=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`];var ft=[`mat-icon, [matMenuItemIcon]`,`*`];function bt(i,r){i&1&&(lg(),Pa(0,`svg`,2),__(1,`polygon`,3),lf())}var yt=[`*`];function Mt(i,r){if(i&1){let e=F0();df(0,`div`,0),w_(`click`,function(){Qp(e);return Kp(j0().closed.emit(`click`))})(`animationstart`,function(n){Qp(e);return Kp(j0()._onAnimationStart(n.animationName))})(`animationend`,function(n){Qp(e);return Kp(j0()._onAnimationDone(n.animationName))})(`animationcancel`,function(n){Qp(e);return Kp(j0()._onAnimationDone(n.animationName))}),df(1,`div`,1),U0(2),ff()()}if(i&2){let e=j0();iM(e._classList),Ci(`mat-menu-panel-animations-disabled`,e._animationsDisabled)(`mat-menu-panel-exit-animation`,e._panelAnimationState===`void`)(`mat-menu-panel-animating`,e._isAnimating()),b_(`id`,e.panelId),Qa(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e.ariaLabelledby||null)(`aria-describedby`,e.ariaDescribedby||null)}}var ue=new E$1(`MAT_MENU_PANEL`);var E=(()=>{class i{_elementRef=v(nt);_document=v(ne);_focusMonitor=v($n);_parentMenu=v(ue,{optional:!0});_changeDetectorRef=v(co);role=`menuitem`;disabled=!1;disableRipple=!1;_hovered=new le;_focused=new le;_highlighted=!1;_triggersSubmenu=!1;constructor(){v(z).load(qu),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons`);for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||i)};static ɵcmp=FS({type:i,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:8,hostBindings:function(t,n){t&1&&Kt(`click`,function(a){return n._checkDisabled(a)})(`mouseenter`,function(){return n._handleMouseEnter()}),t&2&&(Qa(`role`,n.role)(`tabindex`,n._getTabIndex())(`aria-disabled`,n.disabled)(`disabled`,n.disabled||null),Ci(`mat-mdc-menu-item-highlighted`,n._highlighted)(`mat-mdc-menu-item-submenu-trigger`,n._triggersSubmenu))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,ru],disableRipple:[2,`disableRipple`,`disableRipple`,ru]},exportAs:[`matMenuItem`],ngContentSelectors:ft,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(t,n){t&1&&(H0(gt),U0(0),Pa(1,`span`,0),U0(2,1),lf(),__(3,`div`,1),w0(4,bt,2,0,`:svg:svg`,2)),t&2&&(oI(3),y_(`matRippleDisabled`,n.disableRipple||n.disabled)(`matRippleTrigger`,n._getHostElement()),oI(),I0(n._triggersSubmenu?4:-1))},dependencies:[d_],encapsulation:2})}return i})();var vt=new E$1(`MatMenuContent`);var Ct=new E$1(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var me=`_mat-menu-enter`;var K=`_mat-menu-exit`;var x=(()=>{class i{_elementRef=v(nt);_changeDetectorRef=v(co);_injector=v(ve);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=bo();_allItems;_directDescendantItems=new Ia;_classList={};_panelAnimationState=`void`;_animationDone=new le;_isAnimating=Se(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,n=l({},this._classList);t&&t.length&&t.split(` `).forEach(o=>{n[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(o=>{n[o]=!0}),this._elementRef.nativeElement.className=``),this._classList=n}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new Oe;close=this.closed;panelId=v(Ue).getId(`mat-menu-panel-`);constructor(){let e=v(Ct);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new ii(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(ub(this._directDescendantItems),cb(e=>ZE(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let n=e.toArray(),o=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[o]&&!n[o].disabled?t.setActiveItem(o):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(ub(this._directDescendantItems),cb(t=>ZE(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:Lo(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&n.setFocusOrigin(`keyboard`),n.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=xd(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=m(l({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===K;(t||e===me)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===me||e===K)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(K),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?me:K)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(ub(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||i)};static ɵcmp=FS({type:i,selectors:[[`mat-menu`]],contentQueries:function(t,n,o){if(t&1&&S_(o,vt,5)(o,E,5)(o,E,4),t&2){let a;G0(a=z0())&&(n.lazyContent=a.first),G0(a=z0())&&(n._allItems=a),G0(a=z0())&&(n.items=a)}},viewQuery:function(t,n){if(t&1&&M_(eo,5),t&2){let o;G0(o=z0())&&(n.templateRef=o.first)}},hostVars:3,hostBindings:function(t,n){t&2&&Qa(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,ru],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,e=>e==null?null:ru(e)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[pt([{provide:ue,useExisting:i}])],ngContentSelectors:yt,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(t,n){t&1&&(H0(),i_(0,Mt,3,12,`ng-template`))},styles:[`mat-menu {
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
`],encapsulation:2})}return i})();var St=new E$1(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=v(ve);return()=>Vn(i)}});var S=new WeakMap;var xt=(()=>{class i{_canHaveBackdrop;_element=v(nt);_viewContainerRef=v(_r);_menuItemInstance=v(E,{optional:!0,self:!0});_dir=v(ke$1,{optional:!0});_focusMonitor=v($n);_ngZone=v(ke);_injector=v(ve);_scrollStrategy=v(St);_changeDetectorRef=v(co);_animationsDisabled=bo();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=ee.EMPTY;_menuCloseSubscription=ee.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=v(ue,{optional:!0});this._parentMaterialMenu=t instanceof x?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&S.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=S.get(t);S.set(t,this),n&&n!==this&&n._closeMenu();let o=this._createOverlay(t),a=o.getConfig(),d=a.positionStrategy;this._setPosition(t,d),this._canHaveBackdrop?a.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:a.hasBackdrop=t.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof x&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(lb(t.close)).subscribe(()=>{d.withLockedPosition(!1).reapplyLastPosition(),d.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof x&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(vc(1)).subscribe(()=>{t.detach(),S.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&S.delete(n),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=Qn(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof x&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new wt$1({positionStrategy:Wn(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let o=n.connectionPair.overlayX===`start`?`after`:`before`,a=n.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(o,a)})})}_setPosition(e,t){let[n,o]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[a,d]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[U,q]=[a,d],[G,Z]=[n,o],D=0;if(this._triggersSubmenu()){if(Z=n=e.xPosition===`before`?`start`:`end`,o=G=n===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let ce=this._parentMaterialMenu.items.first;this._parentInnerPadding=ce?ce._getHostElement().offsetTop:0}D=a===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(U=a===`top`?`bottom`:`top`,q=d===`top`?`bottom`:`top`);t.withPositions([{originX:n,originY:U,overlayX:G,overlayY:a,offsetY:D},{originX:o,originY:U,overlayX:Z,overlayY:a,offsetY:D},{originX:n,originY:q,overlayX:G,overlayY:d,offsetY:-D},{originX:o,originY:q,overlayX:Z,overlayY:d,offsetY:-D}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments();return ZE(e,this._parentMaterialMenu?this._parentMaterialMenu.closed:kE(),this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Fo(a=>this._menuOpen&&a!==this._menuItemInstance)):kE(),t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Ct$1(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return S.get(e)===this}_triggerIsAriaDisabled(){return ru(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){JI()};static ɵdir=re({type:i})}return i})();var N=(()=>{class i extends xt{_cleanupTouchstart;_hoverSubscription=ee.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new Oe;onMenuOpen=this.menuOpened;menuClosed=new Oe;onMenuClose=this.menuClosed;constructor(){super(!0);let e=v(tt);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{be(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){Me$1(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||i)};static ɵdir=re({type:i,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,n){t&1&&Kt(`click`,function(a){return n._handleClick(a)})(`mousedown`,function(a){return n._handleMousedown(a)})(`keydown`,function(a){return n._handleKeydown(a)}),t&2&&Qa(`aria-haspopup`,n.menu?`menu`:null)(`aria-expanded`,n.menuOpen)(`aria-controls`,n.menuOpen?n.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[Me]})}return i})();var lt=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Sn({type:i});static ɵinj=Ht({imports:[z_,zs,te,_i]})}return i})();var wt=()=>[import(`./chunk-CnGLXrgr.js`).then(i=>i.SettingsDebugPanelComponent)];var Pt=()=>[import(`./chunk-DVmLEc3L.js`).then(i=>i.BindingDebugPanelComponent)];var kt=()=>[import(`./chunk-B_gLllSn.js`).then(i=>i.DebugConsoleComponent)];function Tt(i,r){if(i&1){let e=F0();Pa(0,`settings-debug-panel`,8),Kt(`showChange`,function(){Qp(e);return Kp(j0(2).panel.set(null))}),lf()}if(i&2){let e=j0(2);y_(`show`,!0)(`schema`,e.schema())}}function It(i,r){if(i&1&&w0(0,Tt,1,2,`settings-debug-panel`,7),i&2)I0(j0().panel()===`settings`?0:-1)}function Rt(i,r){if(i&1){let e=F0();Pa(0,`binding-debug-panel`,10),Kt(`showChange`,function(){Qp(e);return Kp(j0(2).panel.set(null))}),lf()}i&2&&y_(`show`,!0)(`hotkeysEnabled`,!1)}function Et(i,r){if(i&1&&w0(0,Rt,1,2,`binding-debug-panel`,9),i&2)I0(j0().panel()===`bindings`?0:-1)}function Nt(i,r){if(i&1){let e=F0();Pa(0,`debug-console`,10),Kt(`showChange`,function(){Qp(e);return Kp(j0(2).panel.set(null))}),lf()}i&2&&y_(`show`,!0)(`hotkeysEnabled`,!1)}function Ot(i,r){if(i&1&&w0(0,Nt,1,2,`debug-console`,9),i&2)I0(j0().panel()===`console`?0:-1)}var mt=class i extends Wo{_hotkey=v(Nn);_document=v(ne);_menu_trigger=e3.required(N);_schema_request;loadSchema=JU();schema=Se(null);panel=Se(null);ngOnInit(){for(let[e,t]of[[`settings`,[`Control`,`Alt`,`Shift`,`KeyS`]],[`bindings`,[`Control`,`Alt`,`Shift`,`KeyB`]],[`console`,[`Control`,`Backquote`]]])this.subscription(e,this._hotkey.listen(t,()=>{this.panel()===e?this.panel.set(null):this.openPanel(e)}))}onContextMenu(r){let e=this._document.documentElement.clientHeight;r.clientX<0||r.clientX>32||r.clientY<e-32||r.clientY>e||this.openMenu(r,this._menu_trigger())}openMenu(r,e){r.preventDefault(),e.openMenu()}openPanel(r){this.panel.set(r),r===`settings`&&(this._schema_request??=this.loadSettingsSchema())}async loadSettingsSchema(){try{this.schema.set(await this.loadSchema()?.()??null)}catch{this.schema.set(null)}}static ɵfac=(()=>{let r;return function(t){return(r||(r=xt$1(i)))(t||i)}})();static ɵcmp=FS({type:i,selectors:[[`settings-debug-panel-launcher`]],viewQuery:function(e,t){e&1&&T_(t._menu_trigger,N,5),e&2&&W0()},hostBindings:function(e,t){e&1&&Kt(`contextmenu`,function(o){return t.onContextMenu(o)},yw)},inputs:{loadSchema:[1,`loadSchema`]},features:[Me],decls:33,vars:4,consts:[[`menu_trigger`,`matMenuTrigger`],[`debug_menu`,`matMenu`],[`type`,`button`,`aria-label`,`Open debugging tools`,1,`absolute`,`bottom-0`,`left-0`,`z-999`,`h-px`,`w-px`,3,`contextmenu`,`matMenuTriggerFor`],[`yPosition`,`above`],[1,`flex`,`w-64`,`items-center`,`justify-center`,`pb-2`,`text-sm`,`opacity-60`],[`mat-menu-item`,``,3,`click`],[1,`flex`,`items-center`,`gap-2`],[3,`show`,`schema`],[3,`showChange`,`show`,`schema`],[3,`show`,`hotkeysEnabled`],[3,`showChange`,`show`,`hotkeysEnabled`]],template:function(e,t){if(e&1){let n=F0();Pa(0,`button`,2,0),Kt(`contextmenu`,function(a){Qp(n);let d=Z0(1);return Kp(t.openMenu(a,d))}),lf(),Pa(2,`mat-menu`,3,1)(4,`div`,4),mM(5,` Debugging Panels `),lf(),Pa(6,`button`,5),Kt(`click`,function(){return t.openPanel(`settings`)}),Pa(7,`div`,6)(8,`icon`),mM(9,`discover_tune`),lf(),Pa(10,`div`),mM(11,`Settings`),lf()()(),Pa(12,`button`,5),Kt(`click`,function(){return t.openPanel(`bindings`)}),Pa(13,`div`,6)(14,`icon`),mM(15,`linked_services`),lf(),Pa(16,`div`),mM(17,`Driver bindings`),lf()()(),Pa(18,`button`,5),Kt(`click`,function(){return t.openPanel(`console`)}),Pa(19,`div`,6)(20,`icon`),mM(21,`terminal_2`),lf(),Pa(22,`div`),mM(23,`Console`),lf()()()(),i_(24,It,1,1),D0(25,24,wt),i_(27,Et,1,1),D0(28,27,Pt),i_(30,Ot,1,1),D0(31,30,kt)}if(e&2)y_(`matMenuTriggerFor`,Z0(3)),oI(25),E0(t.panel()===`settings`),oI(3),E0(t.panel()===`bindings`),oI(3),E0(t.panel()===`console`)},dependencies:[lt,x,E,N,Ln],encapsulation:2})};export{mt as SettingsDebugPanelLauncherComponent};