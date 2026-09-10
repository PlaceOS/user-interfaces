import{A as Hy,Bt as _o,C as Fn,Cr as v_,Ct as Wa,D as Gi,Dt as XT,E as Gg,En as kg,Et as X,Gn as oS,H as Ln,Hr as l,Ht as _y,I as JT,Ir as xy,J as Oe,Jn as p,Jt as cI,Kn as oc,Kt as bc,Ln as me,Lt as Zy,Mn as ln,Nr as x_,Nt as Z$1,O as Hf,Or as we,Pr as xc,Q as Pe,Rr as y_,U as Ly,Ur as m,V as Lf,Y as Og,Zt as cn,an as ee,bt as Vf,cr as rl,ct as Re,d as By,dn as fe,fn as g_,ft as Sn,j as Ic,jt as Yo,m as D,mt as Sr,n as $f,o as A,on as et,p as Cc,pr as tM,tr as qf,u as Ar,un as fc,ur as rv,ut as Ry,vt as Ui,wn as jy,xt as Vy,yr as u_,zr as yo}from"./chunk-DtKoY7OQ.js";import{$t as Ut$1,Bt as Ri,Dt as Pp,Ei as u_$1,Fi as wd,Gi as xt,Mt as Qe,N as E_,On as b_,Ot as Pr,Qt as Up,bi as ta,gi as sa,gt as Ni,hn as Yt,mi as ro,qn as ea,rt as Kn,ti as pi,ui as ra,ur as io,z as Gn}from"./chunk-Cy23QlJB.js";import{h as Oi,p as Li,z as sn}from"./chunk-CkVgkPNO.js";var lt=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`];var mt=[`mat-icon, [matMenuItemIcon]`,`*`];function ut(s,tt){s&1&&(Gg(),oc(0,`svg`,2),Cc(1,`polygon`,3),Vf())}var ct=[`*`];function dt(s,tt){if(s&1){let e=u_();Hf(0,`div`,0),jy(`click`,function(){Og(e);return kg(g_().closed.emit(`click`))})(`animationstart`,function(n){Og(e);return kg(g_()._onAnimationStart(n.animationName))})(`animationend`,function(n){Og(e);return kg(g_()._onAnimationDone(n.animationName))})(`animationcancel`,function(n){Og(e);return kg(g_()._onAnimationDone(n.animationName))}),Hf(1,`div`,1),y_(2),$f()()}if(s&2){let e=g_();x_(e._classList),Zy(`mat-menu-panel-animations-disabled`,e._animationsDisabled)(`mat-menu-panel-exit-animation`,e._panelAnimationState===`void`)(`mat-menu-panel-animating`,e._isAnimating()),Ly(`id`,e.panelId),Ic(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e.ariaLabelledby||null)(`aria-describedby`,e.ariaDescribedby||null)}}var Z=new D(`MAT_MENU_PANEL`);var q=(()=>{class s{_elementRef=p(cn);_document=p(X);_focusMonitor=p(ra);_parentMenu=p(Z,{optional:!0});_changeDetectorRef=p(_o);role=`menuitem`;disabled=!1;disableRipple=!1;_hovered=new ee;_focused=new ee;_highlighted=!1;_triggersSubmenu=!1;constructor(){p(xt).load(wd),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons`);for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||s)};static ɵcmp=Lf({type:s,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:8,hostBindings:function(t,n){t&1&&bc(`click`,function(o){return n._checkDisabled(o)})(`mouseenter`,function(){return n._handleMouseEnter()}),t&2&&(Ic(`role`,n.role)(`tabindex`,n._getTabIndex())(`aria-disabled`,n.disabled)(`disabled`,n.disabled||null),Zy(`mat-mdc-menu-item-highlighted`,n._highlighted)(`mat-mdc-menu-item-submenu-trigger`,n._triggersSubmenu))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,Gi],disableRipple:[2,`disableRipple`,`disableRipple`,Gi]},exportAs:[`matMenuItem`],ngContentSelectors:mt,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(t,n){t&1&&(v_(lt),y_(0),oc(1,`span`,0),y_(2,1),Vf(),Cc(3,`div`,1),XT(4,ut,2,0,`:svg:svg`,2)),t&2&&(oS(3),xy(`matRippleDisabled`,n.disableRipple||n.disabled)(`matRippleTrigger`,n._getHostElement()),oS(),JT(n._triggersSubmenu?4:-1))},dependencies:[Up],encapsulation:2})}return s})();var ht=new D(`MatMenuContent`);var pt=new D(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var G=`_mat-menu-enter`;var P=`_mat-menu-exit`;var R=(()=>{class s{_elementRef=p(cn);_changeDetectorRef=p(_o);_injector=p(me);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Ut$1();_allItems;_directDescendantItems=new Wa;_classList={};_panelAnimationState=`void`;_animationDone=new ee;_isAnimating=Z$1(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,n=l({},this._classList);t&&t.length&&t.split(` `).forEach(i=>{n[i]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(i=>{n[i]=!0}),this._elementRef.nativeElement.className=``),this._classList=n}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new Pe;close=this.closed;panelId=p(Yt).getId(`mat-menu-panel-`);constructor(){let e=p(pt);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Pp(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(rl(this._directDescendantItems),Oe(e=>cI(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let n=e.toArray(),i=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[i]&&!n[i].disabled?t.setActiveItem(i):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(rl(this._directDescendantItems),Oe(t=>cI(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:Gn(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&n.setFocusOrigin(`keyboard`),n.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=fc(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=m(l({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===P;(t||e===G)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===G||e===P)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(P),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?G:P)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(rl(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||s)};static ɵcmp=Lf({type:s,selectors:[[`mat-menu`]],contentQueries:function(t,n,i){if(t&1&&qf(i,ht,5)(i,q,5)(i,q,4),t&2){let o;Vy(o=Hy())&&(n.lazyContent=o.first),Vy(o=Hy())&&(n._allItems=o),Vy(o=Hy())&&(n.items=o)}},viewQuery:function(t,n){if(t&1&&By(yo,5),t&2){let i;Vy(i=Hy())&&(n.templateRef=i.first)}},hostVars:3,hostBindings:function(t,n){t&2&&Ic(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,Gi],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,e=>e==null?null:Gi(e)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[tM([{provide:Z,useExisting:s}])],ngContentSelectors:ct,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(t,n){t&1&&(v_(),Ry(0,dt,3,12,`ng-template`))},styles:[`mat-menu {
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
`],encapsulation:2})}return s})();var _t=new D(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let s=p(me);return()=>E_(s)}});var c=new WeakMap;var gt=(()=>{class s{_canHaveBackdrop;_element=p(cn);_viewContainerRef=p(ln);_menuItemInstance=p(q,{optional:!0,self:!0});_dir=p(Pr,{optional:!0});_focusMonitor=p(ra);_ngZone=p(we);_injector=p(me);_scrollStrategy=p(_t);_changeDetectorRef=p(_o);_animationsDisabled=Ut$1();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=fe.EMPTY;_menuCloseSubscription=fe.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=p(Z,{optional:!0});this._parentMaterialMenu=t instanceof R?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&c.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=c.get(t);c.set(t,this),n&&n!==this&&n._closeMenu();let i=this._createOverlay(t),o=i.getConfig(),r=o.positionStrategy;this._setPosition(t,r),this._canHaveBackdrop?o.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:o.hasBackdrop=t.hasBackdrop??!1,i.hasAttached()||(i.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof R&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(Yo(t.close)).subscribe(()=>{r.withLockedPosition(!1).reapplyLastPosition(),r.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof R&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(et(1)).subscribe(()=>{t.detach(),c.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&c.delete(n),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=io(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof R&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new Ni({positionStrategy:b_(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let i=n.connectionPair.overlayX===`start`?`after`:`before`,o=n.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(i,o)})})}_setPosition(e,t){let[n,i]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[o,r]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[T,E]=[o,r],[O,N]=[n,i],d=0;if(this._triggersSubmenu()){if(N=n=e.xPosition===`before`?`start`:`end`,i=O=n===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let J=this._parentMaterialMenu.items.first;this._parentInnerPadding=J?J._getHostElement().offsetTop:0}d=o===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(T=o===`top`?`bottom`:`top`,E=r===`top`?`bottom`:`top`);t.withPositions([{originX:n,originY:T,overlayX:O,overlayY:o,offsetY:d},{originX:i,originY:T,overlayX:N,overlayY:o,offsetY:d},{originX:n,originY:E,overlayX:O,overlayY:r,offsetY:-d},{originX:i,originY:E,overlayX:N,overlayY:r,offsetY:-d}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments();return cI(e,this._parentMaterialMenu?this._parentMaterialMenu.closed:A(),this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Re(o=>this._menuOpen&&o!==this._menuItemInstance)):A(),t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Ri(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return c.get(e)===this}_triggerIsAriaDisabled(){return Gi(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){Ui()};static ɵdir=Fn({type:s})}return s})();var Wt=(()=>{class s extends gt{_cleanupTouchstart;_hoverSubscription=fe.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new Pe;onMenuOpen=this.menuOpened;menuClosed=new Pe;onMenuClose=this.menuClosed;constructor(){super(!0);let e=p(Sr);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{ta(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){ea(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||s)};static ɵdir=Fn({type:s,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,n){t&1&&bc(`click`,function(o){return n._handleClick(o)})(`mousedown`,function(o){return n._handleMousedown(o)})(`keydown`,function(o){return n._handleKeydown(o)}),t&2&&Ic(`aria-haspopup`,n.menu?`menu`:null)(`aria-expanded`,n.menuOpen)(`aria-controls`,n.menuOpen?n.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[_y]})}return s})();var Ut=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵmod=Ar({type:s});static ɵinj=Sn({imports:[sa,ro,Qe,u_$1]})}return s})();var en=(()=>{class s extends pi{constructor(){super(...arguments),this._element=p(cn),this._observer=null,this._source_version=0,this.source=xc(void 0)}ngOnChanges(e){if(!e.source)return;this._source_version+=1,this.clearTimeout(`load`),this._observer?.disconnect(),this._observer=null;let t=this.source();if(t){if(!this._isLocalUrl(t)){this._element.nativeElement.src=t;return}this._loadWhenVisible(t,this._source_version)}}ngOnDestroy(){this._observer?.disconnect(),this._observer=null,super.ngOnDestroy()}_loadWhenVisible(e,t){if(typeof IntersectionObserver>`u`){this._loadImage(e,t);return}this._observer=new IntersectionObserver(n=>{n.some(({isIntersecting:i})=>i)&&(this._observer?.disconnect(),this._observer=null,this._loadImage(e,t))},{rootMargin:`300px`}),this._observer.observe(this._element.nativeElement)}async _loadImage(e,t){if(t!==this._source_version||e!==this.source())return;if(!Kn()){this.timeout(`load`,()=>{this._loadImage(e,t)},300);return}let n=sn(e);if(n){this._element.nativeElement.src=n;return}let i=e.includes(`/api/engine/v2/uploads`)||e.includes(`/api/engine/v2/signage`);try{let o=i?await Oi(e,this._cookiePath(e)):await Li(e);t===this._source_version&&e===this.source()&&(this._element.nativeElement.src=o)}catch(o){t===this._source_version&&this._element.nativeElement.dispatchEvent(new ErrorEvent(`error`,{error:o}))}}_isLocalUrl(e){try{return new URL(e,location.href).origin===location.origin}catch{return!1}}_cookiePath(e){return e.includes(`/api/engine/v2/uploads`)?`/api/engine/v2/uploads`:`/api/engine/v2/signage`}static{this.ɵfac=(()=>{let e;return function(n){return(e||(e=rv(s)))(n||s)}})()}static{this.ɵdir=Fn({type:s,selectors:[[`img`,`auth`,``],[`video`,`auth`,``],[`audio`,`auth`,``]],inputs:{source:[1,`source`]},features:[_y,Ln]})}}return s})();export{q as a,en as i,Ut as n,Wt as r,R as t};
//# debugId=40c59cd4-a229-5a89-bab5-6de2b91095be
//# sourceMappingURL=chunk-CagsaZgn.js.map