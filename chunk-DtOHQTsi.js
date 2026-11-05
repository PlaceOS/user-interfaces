import{n as o,t as n}from"./chunk-6KNB5AMt.js";import{$n as n_,$t as Zf,An as fm,Br as wm,D as Er,E as Em,Fn as hb,G as Ib,H as Hr,Hn as jl,It as Ub,Mr as ue,Nn as ge,On as fC,Ot as Tb,Q as Ll,Qn as mt$1,Rr as wb,S as Dm,Un as jv,Vn as ip,Vr as ws,Xt as Ys,Y as Jg,Yr as ym,_ as Cv,_r as rb,_t as Qn,ar as ob,b as Db,br as rt$1,c as Am,cr as q,dr as qf,dt as Pl,en as Zs,er as ne,fn as bb,ft as Pn,g as Cm,gn as bo,jr as uT,lt as PI,m as Bv,mt as Q,nt as Mr,or as pm,p as Bn,rr as nv,sr as py,st as Os,tr as nm,u as Aw,vt as Qr,w as E,wn as dm,wt as T$1,xn as dI,xr as rv}from"./chunk-Dz3n17Bd.js";import{C as Xe,E as Zn,F as w,N as re,S as X,T as Yn,h as Ft,j as ne$1,k as lt$1,v as Q$1}from"./main.js";import{a as Ue,l as je,t as $e}from"./chunk-BVCsNHte.js";import{C as ze,b as oi,c as He,f as Ve,h as ct,p as Vt,x as pt,y as lt$2}from"./chunk-DgpKchdy.js";var nt=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`];var it=[`mat-icon, [matMenuItemIcon]`,`*`];function at(a,qe){a&1&&(ip(),Os(0,`svg`,2),pm(1,`polygon`,3),Pl())}var st=[`*`];function ot(a,qe){if(a&1){let e=hb();Ll(0,`div`,0),Em(`click`,function(){qf(e);return Zf(Db().closed.emit(`click`))})(`animationstart`,function(n){qf(e);return Zf(Db()._onAnimationStart(n.animationName))})(`animationend`,function(n){qf(e);return Zf(Db()._onAnimationDone(n.animationName))})(`animationcancel`,function(n){qf(e);return Zf(Db()._onAnimationDone(n.animationName))}),Ll(1,`div`,1),wb(2),jl()()}if(a&2){let e=Db();Ub(e._classList),Am(`mat-menu-panel-animations-disabled`,e._animationsDisabled)(`mat-menu-panel-exit-animation`,e._panelAnimationState===`void`)(`mat-menu-panel-animating`,e._isAnimating()),ym(`id`,e.panelId),dm(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e.ariaLabelledby||null)(`aria-describedby`,e.ariaDescribedby||null)}}var te=new T$1(`MAT_MENU_PANEL`);var ee=(()=>{class a{_elementRef=E(Pn);_document=E(Q);_focusMonitor=E(lt$1);_parentMenu=E(te,{optional:!0});_changeDetectorRef=E(py);role=`menuitem`;disabled=!1;disableRipple=!1;_hovered=new ne;_focused=new ne;_highlighted=!1;_triggersSubmenu=!1;constructor(){var e,t;E(w).load(je),(t=(e=this._parentMenu)==null?void 0:e.addItem)==null||t.call(e,this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){var n;let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons`);for(let i=0;i<t.length;i++)t[i].remove();return((n=e.textContent)==null?void 0:n.trim())||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||a)};static ɵcmp=fC({type:a,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:8,hostBindings:function(t,n){t&1&&Dm(`click`,function(s){return n._checkDisabled(s)})(`mouseenter`,function(){return n._handleMouseEnter()}),t&2&&(dm(`role`,n.role)(`tabindex`,n._getTabIndex())(`aria-disabled`,n.disabled)(`disabled`,n.disabled||null),Am(`mat-mdc-menu-item-highlighted`,n._highlighted)(`mat-mdc-menu-item-submenu-trigger`,n._triggersSubmenu))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,n_],disableRipple:[2,`disableRipple`,`disableRipple`,n_]},exportAs:[`matMenuItem`],ngContentSelectors:it,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(t,n){t&1&&(Ib(nt),wb(0),Os(1,`span`,0),wb(2,1),Pl(),pm(3,`div`,1),rb(4,at,2,0,`:svg:svg`,2)),t&2&&(PI(3),fm(`matRippleDisabled`,n.disableRipple||n.disabled)(`matRippleTrigger`,n._getHostElement()),PI(),ob(n._triggersSubmenu?4:-1))},dependencies:[Ue],encapsulation:2})}return a})();var Ge=new T$1(`MatMenuContent`);var Bt=(()=>{class a{_template=E(Er);_appRef=E(Mr);_injector=E(ue);_viewContainerRef=E(Bn);_document=E(Q);_changeDetectorRef=E(py);_portal;_outlet;_attached=new ne;attach(e={}){this._portal||(this._portal=new lt$2(this._template,this._viewContainerRef)),this.detach(),this._outlet||(this._outlet=new ct(this._document.createElement(`div`),this._appRef,this._injector));let t=this._template.elementRef.nativeElement;t.parentNode.insertBefore(this._outlet.outletElement,t),this._changeDetectorRef.markForCheck(),this._portal.attach(this._outlet,e),this._attached.next()}detach(){var e;(e=this._portal)!=null&&e.isAttached&&this._portal.detach()}ngOnDestroy(){var e;this.detach(),(e=this._outlet)==null||e.dispose()}static ɵfac=function(t){return new(t||a)};static ɵdir=Ys({type:a,selectors:[[`ng-template`,`matMenuContent`,``]],features:[uT([{provide:Ge,useExisting:a}])]})}return a})();var rt=new T$1(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var $=`_mat-menu-enter`;var R=`_mat-menu-exit`;var T=(()=>{class a{_elementRef=E(Pn);_changeDetectorRef=E(py);_injector=E(ue);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Yn();_allItems;_directDescendantItems=new ws;_classList={};_panelAnimationState=`void`;_animationDone=new ne;_isAnimating=rt$1(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,n$1=n({},this._classList);t&&t.length&&t.split(` `).forEach(i=>{n$1[i]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(i=>{n$1[i]=!0}),this._elementRef.nativeElement.className=``),this._classList=n$1}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new mt$1;close=this.closed;panelId=E(ne$1).getId(`mat-menu-panel-`);constructor(){let e=E(rt);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new re(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(jv(this._directDescendantItems),Bv(e=>Cv(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{var n;let t=this._keyManager;if(this._panelAnimationState===`enter`&&(n=t.activeItem)!=null&&n._hasFocus()){let i=e.toArray(),s=Math.max(0,Math.min(i.length-1,t.activeItemIndex||0));i[s]&&!i[s].disabled?t.setActiveItem(s):t.setNextItemActive()}})}ngOnDestroy(){var e,t;(e=this._keyManager)==null||e.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),(t=this._firstItemFocusRef)==null||t.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(jv(this._directDescendantItems),Bv(t=>Cv(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:Xe(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&n.setFocusOrigin(`keyboard`),n.onKeydown(e);return}}focusFirstItem(e=`program`){var t;(t=this._firstItemFocusRef)==null||t.destroy(),this._firstItemFocusRef=dI(()=>{let n=this._resolvePanel();if(!n||!n.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&n&&n.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=o(n({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===R;(t||e===$)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===$||e===R)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(R),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?$:R)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(jv(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||a)};static ɵcmp=fC({type:a,selectors:[[`mat-menu`]],contentQueries:function(t,n,i){if(t&1&&wm(i,Ge,5)(i,ee,5)(i,ee,4),t&2){let s;bb(s=Tb())&&(n.lazyContent=s.first),bb(s=Tb())&&(n._allItems=s),bb(s=Tb())&&(n.items=s)}},viewQuery:function(t,n){if(t&1&&Cm(Er,5),t&2){let i;bb(i=Tb())&&(n.templateRef=i.first)}},hostVars:3,hostBindings:function(t,n){t&2&&dm(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,n_],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,e=>e==null?null:n_(e)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[uT([{provide:te,useExisting:a}])],ngContentSelectors:st,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(t,n){t&1&&(Ib(),nm(0,ot,3,12,`ng-template`))},styles:[`mat-menu {
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
`],encapsulation:2})}return a})();var lt=new T$1(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let a=E(ue);return()=>Ve(a)}});var d=new WeakMap;var mt=(()=>{class a{_canHaveBackdrop;_element=E(Pn);_viewContainerRef=E(Bn);_menuItemInstance=E(ee,{optional:!0,self:!0});_dir=E(Ft,{optional:!0});_focusMonitor=E(lt$1);_ngZone=E(ge);_injector=E(ue);_scrollStrategy=E(lt);_changeDetectorRef=E(py);_animationsDisabled=Yn();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=q.EMPTY;_menuCloseSubscription=q.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){var t;e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(n=>{this._destroyMenu(n),(n===`click`||n===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(n)})):this._destroyMenu(),(t=this._menuItemInstance)==null||t._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=E(te,{optional:!0});this._parentMaterialMenu=t instanceof T?t:void 0}ngOnDestroy(){var e;this._menu&&this._ownsMenu(this._menu)&&d.delete(this._menu),(e=this._pendingRemoval)==null||e.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){var e;(e=this._menu)==null||e.close.emit()}_openMenu(e){var l,m;if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;(l=this._pendingRemoval)==null||l.unsubscribe();let n=d.get(t);d.set(t,this),n&&n!==this&&n._closeMenu();let i=this._createOverlay(t),s=i.getConfig(),r=s.positionStrategy;this._setPosition(t,r),this._canHaveBackdrop?s.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:s.hasBackdrop=t.hasBackdrop??!1,i.hasAttached()||(i.attach(this._getPortal(t)),(m=t.lazyContent)==null||m.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof T&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(rv(t.close)).subscribe(()=>{r.withLockedPosition(!1).reapplyLastPosition(),r.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){var i,s;let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),(i=this._pendingRemoval)==null||i.unsubscribe(),n instanceof T&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(Qn(1)).subscribe(()=>{var r;t.detach(),d.has(n)||(r=n.lazyContent)==null||r.detach()}),n._setIsOpen(!1)):(t.detach(),(s=n==null?void 0:n.lazyContent)==null||s.detach()),n&&this._ownsMenu(n)&&d.delete(n),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=He(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof T&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new pt({positionStrategy:ze(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let i=n.connectionPair.overlayX===`start`?`after`:`before`,s=n.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(i,s)})})}_setPosition(e,t){let[n,i]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[s,r]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[l,m]=[s,r],[N,O]=[n,i],h=0;if(this._triggersSubmenu()){if(O=n=e.xPosition===`before`?`start`:`end`,i=N=n===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let ne=this._parentMaterialMenu.items.first;this._parentInnerPadding=ne?ne._getHostElement().offsetTop:0}h=s===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(l=s===`top`?`bottom`:`top`,m=r===`top`?`bottom`:`top`);t.withPositions([{originX:n,originY:l,overlayX:N,overlayY:s,offsetY:h},{originX:i,originY:l,overlayX:O,overlayY:s,offsetY:h},{originX:n,originY:m,overlayX:N,overlayY:r,offsetY:-h},{originX:i,originY:m,overlayX:O,overlayY:r,offsetY:-h}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments();return Cv(e,this._parentMaterialMenu?this._parentMaterialMenu.closed:nv(),this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Hr(s=>this._menuOpen&&s!==this._menuItemInstance)):nv(),t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new lt$2(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return d.get(e)===this}_triggerIsAriaDisabled(){return n_(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){Aw()};static ɵdir=Ys({type:a})}return a})();var Lt=(()=>{class a extends mt{_cleanupTouchstart;_hoverSubscription=q.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new mt$1;onMenuOpen=this.menuOpened;menuClosed=new mt$1;onMenuClose=this.menuClosed;constructor(){super(!0);let e=E(bo);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{X(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){var e;(e=this._overlayRef)==null||e.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){Q$1(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{var t;e===this._menuItemInstance&&!e.disabled&&((t=this._parentMaterialMenu)==null?void 0:t._panelAnimationState)!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||a)};static ɵdir=Ys({type:a,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,n){var i;t&1&&Dm(`click`,function(r){return n._handleClick(r)})(`mousedown`,function(r){return n._handleMousedown(r)})(`keydown`,function(r){return n._handleKeydown(r)}),t&2&&dm(`aria-haspopup`,n.menu?`menu`:null)(`aria-expanded`,n.menuOpen)(`aria-controls`,n.menuOpen?(i=n.menu)==null?void 0:i.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[Jg]})}return a})();var Ht=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=Zs({type:a});static ɵinj=Qr({imports:[$e,oi,Zn,Vt]})}return a})();export{ee as a,T as i,Ht as n,Lt as r,Bt as t};
;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7a5fa316-22e5-5984-9822-463fc57ee763")}catch(e){}}();
//# debugId=7a5fa316-22e5-5984-9822-463fc57ee763
//# sourceMappingURL=chunk-DtOHQTsi.js.map