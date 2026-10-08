import{$n as ne,$r as zn,B as Im,C as Dr,Ct as Tb,Dr as uT,Dt as Ub,Fr as vb,Gt as Z,H as Io,Ht as Y,I as Gs,In as jl,Ir as vm,Jn as ly,K as Ll,Kn as lm,On as fm,Ot as Uf,Q as Mm,S as Dm,Sr as tm,T as E,Tn as fI,Tr as tt$1,Vn as kr,Vr as wm,X as Mb,Xn as mm,Yt as Zr,Zt as _b,_n as dm,an as b,bn as e_,ct as PI,dn as cb,dt as Pv,ei as zs,i as $f,it as On,kn as ft,lr as pe,lt as Pl,m as Cb,ni as l,nn as ae,nt as Nb,or as ov,q as Ln,qr as xs,ri as m,sr as pC,tn as ab,tr as nv,vr as rv,w as Ds,wn as ev,wr as tp,yt as Rw,zt as Xg}from"./chunk-BH7hnGMc.js";import{i as X,n as Dt,o as bt}from"./main-3CGBICUJ.js";import{C as Ye,N as z,_ as Ue,b as W,c as yt,h as Q,l as A,r as Rt,t as Mt,v as V}from"./chunk-C4NoXH-d.js";import{C as q$1,_ as Yt,c as It,g as Xt,p as Vt,t as $,y as di}from"./chunk-BFxUeXpU.js";var $e=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`];var et=[`mat-icon, [matMenuItemIcon]`,`*`];function tt(s,Ue){s&1&&(tp(),xs(0,`svg`,2),fm(1,`polygon`,3),Ll())}var nt=[`*`];function it(s,Ue){if(s&1){let e=vb();Pl(0,`div`,0),Dm(`click`,function(){Uf(e);return $f(Cb().closed.emit(`click`))})(`animationstart`,function(n){Uf(e);return $f(Cb()._onAnimationStart(n.animationName))})(`animationend`,function(n){Uf(e);return $f(Cb()._onAnimationDone(n.animationName))})(`animationcancel`,function(n){Uf(e);return $f(Cb()._onAnimationDone(n.animationName))}),Pl(1,`div`,1),_b(2),jl()()}if(s&2){let e=Cb();Ub(e._classList),Mm(`mat-menu-panel-animations-disabled`,e._animationsDisabled)(`mat-menu-panel-exit-animation`,e._panelAnimationState===`void`)(`mat-menu-panel-animating`,e._isAnimating()),mm(`id`,e.panelId),lm(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e.ariaLabelledby||null)(`aria-describedby`,e.ariaDescribedby||null)}}var q=new b(`MAT_MENU_PANEL`);var G=(()=>{class s{_elementRef=E(On);_document=E(Y);_focusMonitor=E(Ye);_parentMenu=E(q,{optional:!0});_changeDetectorRef=E(ly);role=`menuitem`;disabled=!1;disableRipple=!1;_hovered=new ne;_focused=new ne;_highlighted=!1;_triggersSubmenu=!1;constructor(){var e,t;E(A).load(Rt),(t=(e=this._parentMenu)==null?void 0:e.addItem)==null||t.call(e,this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){var n;let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons`);for(let i=0;i<t.length;i++)t[i].remove();return((n=e.textContent)==null?void 0:n.trim())||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||s)};static ɵcmp=pC({type:s,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:8,hostBindings:function(t,n){t&1&&vm(`click`,function(a){return n._checkDisabled(a)})(`mouseenter`,function(){return n._handleMouseEnter()}),t&2&&(lm(`role`,n.role)(`tabindex`,n._getTabIndex())(`aria-disabled`,n.disabled)(`disabled`,n.disabled||null),Mm(`mat-mdc-menu-item-highlighted`,n._highlighted)(`mat-mdc-menu-item-submenu-trigger`,n._triggersSubmenu))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,e_],disableRipple:[2,`disableRipple`,`disableRipple`,e_]},exportAs:[`matMenuItem`],ngContentSelectors:et,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(t,n){t&1&&(Tb($e),_b(0),xs(1,`span`,0),_b(2,1),Ll(),fm(3,`div`,1),ab(4,tt,2,0,`:svg:svg`,2)),t&2&&(PI(3),dm(`matRippleDisabled`,n.disableRipple||n.disabled)(`matRippleTrigger`,n._getHostElement()),PI(),cb(n._triggersSubmenu?4:-1))},dependencies:[yt],encapsulation:2})}return s})();var at=new b(`MatMenuContent`);var st=new b(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var K=`_mat-menu-enter`;var P=`_mat-menu-exit`;var R=(()=>{class s{_elementRef=E(On);_changeDetectorRef=E(ly);_injector=E(ae);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Dt();_allItems;_directDescendantItems=new Ds;_classList={};_panelAnimationState=`void`;_animationDone=new ne;_isAnimating=tt$1(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,n=l({},this._classList);t&&t.length&&t.split(` `).forEach(i=>{n[i]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(i=>{n[i]=!0}),this._elementRef.nativeElement.className=``),this._classList=n}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new ft;close=this.closed;panelId=E(z).getId(`mat-menu-panel-`);constructor(){let e=E(st);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Q(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(rv(this._directDescendantItems),Pv(e=>nv(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{var n;let t=this._keyManager;if(this._panelAnimationState===`enter`&&(n=t.activeItem)!=null&&n._hasFocus()){let i=e.toArray(),a=Math.max(0,Math.min(i.length-1,t.activeItemIndex||0));i[a]&&!i[a].disabled?t.setActiveItem(a):t.setNextItemActive()}})}ngOnDestroy(){var e,t;(e=this._keyManager)==null||e.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),(t=this._firstItemFocusRef)==null||t.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(rv(this._directDescendantItems),Pv(t=>nv(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:Ue(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&n.setFocusOrigin(`keyboard`),n.onKeydown(e);return}}focusFirstItem(e=`program`){var t;(t=this._firstItemFocusRef)==null||t.destroy(),this._firstItemFocusRef=fI(()=>{let n=this._resolvePanel();if(!n||!n.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&n&&n.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=m(l({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===P;(t||e===K)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===K||e===P)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(P),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?K:P)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(rv(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||s)};static ɵcmp=pC({type:s,selectors:[[`mat-menu`]],contentQueries:function(t,n,i){if(t&1&&Im(i,at,5)(i,G,5)(i,G,4),t&2){let a;Mb(a=Nb())&&(n.lazyContent=a.first),Mb(a=Nb())&&(n._allItems=a),Mb(a=Nb())&&(n.items=a)}},viewQuery:function(t,n){if(t&1&&wm(Dr,5),t&2){let i;Mb(i=Nb())&&(n.templateRef=i.first)}},hostVars:3,hostBindings:function(t,n){t&2&&lm(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,e_],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,e=>e==null?null:e_(e)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[uT([{provide:q,useExisting:s}])],ngContentSelectors:nt,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(t,n){t&1&&(Tb(),tm(0,it,3,12,`ng-template`))},styles:[`mat-menu {
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
`],encapsulation:2})}return s})();var ot=new b(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let s=E(ae);return()=>It(s)}});var d=new WeakMap;var rt=(()=>{class s{_canHaveBackdrop;_element=E(On);_viewContainerRef=E(Ln);_menuItemInstance=E(G,{optional:!0,self:!0});_dir=E(X,{optional:!0});_focusMonitor=E(Ye);_ngZone=E(pe);_injector=E(ae);_scrollStrategy=E(ot);_changeDetectorRef=E(ly);_animationsDisabled=Dt();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=Z.EMPTY;_menuCloseSubscription=Z.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){var t;e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(n=>{this._destroyMenu(n),(n===`click`||n===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(n)})):this._destroyMenu(),(t=this._menuItemInstance)==null||t._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=E(q,{optional:!0});this._parentMaterialMenu=t instanceof R?t:void 0}ngOnDestroy(){var e;this._menu&&this._ownsMenu(this._menu)&&d.delete(this._menu),(e=this._pendingRemoval)==null||e.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){var e;(e=this._menu)==null||e.close.emit()}_openMenu(e){var l,m;if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;(l=this._pendingRemoval)==null||l.unsubscribe();let n=d.get(t);d.set(t,this),n&&n!==this&&n._closeMenu();let i=this._createOverlay(t),a=i.getConfig(),r=a.positionStrategy;this._setPosition(t,r),this._canHaveBackdrop?a.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:a.hasBackdrop=t.hasBackdrop??!1,i.hasAttached()||(i.attach(this._getPortal(t)),(m=t.lazyContent)==null||m.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof R&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(ov(t.close)).subscribe(()=>{r.withLockedPosition(!1).reapplyLastPosition(),r.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){var i,a;let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),(i=this._pendingRemoval)==null||i.unsubscribe(),n instanceof R&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(zn(1)).subscribe(()=>{var r;t.detach(),d.has(n)||(r=n.lazyContent)==null||r.detach()}),n._setIsOpen(!1)):(t.detach(),(a=n==null?void 0:n.lazyContent)==null||a.detach()),n&&this._ownsMenu(n)&&d.delete(n),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=Xt(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof R&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new q$1({positionStrategy:Yt(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let i=n.connectionPair.overlayX===`start`?`after`:`before`,a=n.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(i,a)})})}_setPosition(e,t){let[n,i]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[a,r]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[l,m]=[a,r],[T,N]=[n,i],h=0;if(this._triggersSubmenu()){if(N=n=e.xPosition===`before`?`start`:`end`,i=T=n===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let Z=this._parentMaterialMenu.items.first;this._parentInnerPadding=Z?Z._getHostElement().offsetTop:0}h=a===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(l=a===`top`?`bottom`:`top`,m=r===`top`?`bottom`:`top`);t.withPositions([{originX:n,originY:l,overlayX:T,overlayY:a,offsetY:h},{originX:i,originY:l,overlayX:N,overlayY:a,offsetY:h},{originX:n,originY:m,overlayX:T,overlayY:r,offsetY:-h},{originX:i,originY:m,overlayX:N,overlayY:r,offsetY:-h}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments();return nv(e,this._parentMaterialMenu?this._parentMaterialMenu.closed:ev(),this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(kr(a=>this._menuOpen&&a!==this._menuItemInstance)):ev(),t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new $(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return d.get(e)===this}_triggerIsAriaDisabled(){return e_(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){Rw()};static ɵdir=zs({type:s})}return s})();var Bt=(()=>{class s extends rt{_cleanupTouchstart;_hoverSubscription=Z.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new ft;onMenuOpen=this.menuOpened;menuClosed=new ft;onMenuClose=this.menuClosed;constructor(){super(!0);let e=E(Io);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{W(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){var e;(e=this._overlayRef)==null||e.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){V(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{var t;e===this._menuItemInstance&&!e.disabled&&((t=this._parentMaterialMenu)==null?void 0:t._panelAnimationState)!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||s)};static ɵdir=zs({type:s,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,n){var i;t&1&&vm(`click`,function(r){return n._handleClick(r)})(`mousedown`,function(r){return n._handleMousedown(r)})(`keydown`,function(r){return n._handleKeydown(r)}),t&2&&lm(`aria-haspopup`,n.menu?`menu`:null)(`aria-expanded`,n.menuOpen)(`aria-controls`,n.menuOpen?(i=n.menu)==null?void 0:i.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[Xg]})}return s})();var Lt=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵmod=Gs({type:s});static ɵinj=Zr({imports:[Mt,di,bt,Vt]})}return s})();export{R as i,G as n,Lt as r,Bt as t};