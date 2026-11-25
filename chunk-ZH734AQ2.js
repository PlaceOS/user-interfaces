import{a as Bt,b as Gt}from"./chunk-N74IAEEK.js";import{c as Pt}from"./chunk-HWYRJDXT.js";import{a as Vt}from"./chunk-R4G4ZIR5.js";import{a as Ft,b as Lt}from"./chunk-Y66C47U4.js";import{a as Rt}from"./chunk-DEU6L4JD.js";import{P as G,ha as ke}from"./chunk-JG4XUWML.js";import{a as Tt,n as Nt,r as Mt,x as It}from"./chunk-CRPINPMD.js";import{a as Ot}from"./chunk-SVZBENYE.js";import{g as He,h as xt,i as Dt,j as ee,k as te,l as ve,n as kt,o as St,p as At,r as ye,s as wt,u as Ce}from"./chunk-NWYDWC2E.js";import"./chunk-3O5JV35J.js";import{k as xe,l as Et,m as De}from"./chunk-M52BNV7H.js";import{A as ie,c as _e,e as gt,g as qe,i as fe,j as bt,o as vt,p as yt,r as Ct,s as ge,u as R,x as Ye,y as be}from"./chunk-IPTG7KRO.js";import"./chunk-EU4BEWF3.js";import{$a as at,$b as dt,A as Z,Ba as Pe,Ca as q,Db as y,Ea as B,F as z,Fb as T,Gb as N,Hb as rt,Jb as Fe,Jc as ft,Kb as Le,Lb as M,Mb as d,Nb as l,O as se,Ob as H,Oc as he,Rc as J,Ta as nt,Tb as W,Tc as k,Ub as Be,Uc as je,W as tt,Xb as C,Y as j,Za as ce,Zb as _,_ as b,_a as s,_b as st,aa as r,ac as lt,bb as me,bc as pe,cb as Oe,cc as U,db as Re,dc as Q,f as S,fc as ct,ga as A,gc as mt,h as Ie,ha as w,jc as I,ka as v,la as it,lc as c,mc as P,nb as E,nc as h,oa as L,ob as Y,oc as ut,pa as de,pb as $,pc as pt,qb as ot,qc as Ge,rc as Ve,sa as D,sc as ze,tb as X,tc as ht,ub as ue,uc as _t,v as re,wc as p,xc as f,y as et,ya as le,yc as O}from"./chunk-K4XYGUWH.js";import{a as g,b as oe}from"./chunk-HGJ4MBLN.js";function ii(i,a){}var F=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var Ue=(()=>{class i extends Dt{_elementRef=r(B);_focusTrapFactory=r(yt);_config;_interactivityChecker=r(vt);_ngZone=r(de);_focusMonitor=r(fe);_renderer=r(me);_changeDetectorRef=r(J);_injector=r(v);_platform=r(gt);_document=r(it);_portalOutlet;_focusTrapped=new S;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=r(F,{optional:!0})||new F,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{o(),m(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",n),m=this._renderer.listen(e,"mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_trapFocus(e){this._isDestroyed||ce(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let n=_e(),o=this._elementRef.nativeElement;(!n||n===this._document.body||n===o||o.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=_e();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=_e()))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=E({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(t,n){if(t&1&&pe(ee,7),t&2){let o;U(o=Q())&&(n._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,n){t&2&&y("id",n._config.id||null)("role",n._config.role)("aria-modal",n._config.ariaModal)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null)},features:[X],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,n){t&1&&ue(0,ii,0,0,"ng-template",0)},dependencies:[ee],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})}return i})(),V=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new S;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(a,e){this.overlayRef=a,this.config=e,this.disableClose=e.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!ge(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=a.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(a,e){if(this._canClose(a)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(a),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a="",e=""){return this.overlayRef.updateSize({width:a,height:e}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}_canClose(a){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(a,e,this.componentInstance))}},ni=new b("DialogScrollStrategy",{providedIn:"root",factory:()=>{let i=r(v);return()=>ve(i)}}),ai=new b("DialogData"),oi=new b("DefaultDialogConfig");function ri(i){let a=D(i),e=new L;return{valueSignal:a,get value(){return a()},change:e,ngOnDestroy(){e.complete()}}}var Qe=(()=>{class i{_injector=r(v);_defaultOptions=r(oi,{optional:!0});_parentDialog=r(i,{optional:!0,skipSelf:!0});_overlayContainer=r(St);_idGenerator=r(R);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new S;_afterOpenedAtThisLevel=new S;_ariaHiddenElements=new Map;_scrollStrategy=r(ni);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=re(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(se(void 0)));open(e,t){let n=this._defaultOptions||new F;t=g(g({},n),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let o=this._getOverlayConfig(t),m=wt(this._injector,o),u=new V(m,t),x=this._attachContainer(m,u,t);if(u.containerInstance=x,!this.openDialogs.length){let Me=this._overlayContainer.getContainerElement();x._focusTrapped?x._focusTrapped.pipe(z(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(Me)}):this._hideNonDialogContentFromAssistiveTechnology(Me)}return this._attachDialogContent(e,u,x,t),this.openDialogs.push(u),u.closed.subscribe(()=>this._removeOpenDialog(u,!0)),this.afterOpened.next(u),u}closeAll(){We(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){We(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),We(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new kt({positionStrategy:e.positionStrategy||ye().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,n){let o=n.injector||n.viewContainerRef?.injector,m=[{provide:F,useValue:n},{provide:V,useValue:t},{provide:At,useValue:e}],u;n.container?typeof n.container=="function"?u=n.container:(u=n.container.type,m.push(...n.container.providers(n))):u=Ue;let x=new He(u,n.viewContainerRef,v.create({parent:o||this._injector,providers:m}));return e.attach(x).instance}_attachDialogContent(e,t,n,o){if(e instanceof at){let m=this._createInjector(o,t,n,void 0),u={$implicit:o.data,dialogRef:t};o.templateContext&&(u=g(g({},u),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),n.attachTemplatePortal(new xt(e,null,u,m))}else{let m=this._createInjector(o,t,n,this._injector),u=n.attachComponentPortal(new He(e,o.viewContainerRef,m,null,o.bindings));t.componentRef=u,t.componentInstance=u.instance}}_createInjector(e,t,n,o){let m=e.injector||e.viewContainerRef?.injector,u=[{provide:ai,useValue:e.data},{provide:V,useValue:t}];return e.providers&&(typeof e.providers=="function"?u.push(...e.providers(t,e,n)):u.push(...e.providers)),e.direction&&(!m||!m.get(Ye,null,{optional:!0}))&&u.push({provide:Ye,useValue:ri(e.direction)}),v.create({parent:m||o,providers:u})}_removeOpenDialog(e,t){let n=this.openDialogs.indexOf(e);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,m)=>{o?m.setAttribute("aria-hidden",o):m.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let n=t.length-1;n>-1;n--){let o=t[n];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||i)};static \u0275prov=q({token:i,factory:i.\u0275fac})}return i})();function We(i,a){let e=i.length;for(;e--;)a(i[e])}var jt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Y({type:i});static \u0275inj=j({providers:[Qe],imports:[Ce,te,Ct,te]})}return i})();function si(i,a){}var Ae=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings},Ke="mdc-dialog--open",qt="mdc-dialog--opening",Yt="mdc-dialog--closing",di=150,li=75,ci=(()=>{class i extends Ue{_animationStateChanged=new L;_animationsEnabled=!ie();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Wt(this._config.enterAnimationDuration)??di:0;_exitAnimationDuration=this._animationsEnabled?Wt(this._config.exitAnimationDuration)??li:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Ht,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(qt,Ke)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Ke),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Ke),this._animationsEnabled?(this._hostElement.style.setProperty(Ht,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Yt)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(qt,Yt)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(n){return(e||(e=Pe(i)))(n||i)}})();static \u0275cmp=E({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,n){t&2&&(Be("id",n._config.id),y("aria-modal",n._config.ariaModal)("role",n._config.role)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null),I("_mat-animation-noopable",!n._animationsEnabled)("mat-mdc-dialog-container-with-actions",n._actionSectionCount>0))},features:[X],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,n){t&1&&(d(0,"div",0)(1,"div",1),ue(2,si,0,0,"ng-template",2),l()())},dependencies:[ee],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--%NS%mat-dialog-container-max-width, 560px);
  min-width: var(--%NS%mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--%NS%mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--%NS%mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--%NS%mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--%NS%mat-dialog-container-elevation-shadow, none);
  border-radius: var(--%NS%mat-dialog-container-shape, var(--%NS%mat-sys-corner-extra-large, 4px));
  background-color: var(--%NS%mat-dialog-container-color, var(--%NS%mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--%NS%mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--%NS%mat-dialog-subhead-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-dialog-subhead-font, var(--%NS%mat-sys-headline-small-font, inherit));
  line-height: var(--%NS%mat-dialog-subhead-line-height, var(--%NS%mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-subhead-size, var(--%NS%mat-sys-headline-small-size, 1rem));
  font-weight: var(--%NS%mat-dialog-subhead-weight, var(--%NS%mat-sys-headline-small-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-subhead-tracking, var(--%NS%mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--%NS%mat-dialog-supporting-text-color, var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--%NS%mat-dialog-supporting-text-font, var(--%NS%mat-sys-body-medium-font, inherit));
  line-height: var(--%NS%mat-dialog-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 1rem));
  font-weight: var(--%NS%mat-dialog-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--%NS%mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--%NS%mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2,changeDetection:1})}return i})(),Ht="--mat-dialog-transition-duration";function Wt(i){return i==null?null:typeof i=="number"?i:i.endsWith("ms")?qe(i.substring(0,i.length-2)):i.endsWith("s")?qe(i.substring(0,i.length-1))*1e3:i==="0"?0:null}var Se=(function(i){return i[i.OPEN=0]="OPEN",i[i.CLOSING=1]="CLOSING",i[i.CLOSED=2]="CLOSED",i})(Se||{}),K=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Ie(1);_beforeClosed=new Ie(1);_result;_closeFallbackTimeout;_state=Se.OPEN;_closeInteractionType;constructor(a,e,t){this._ref=a,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=a.id,a.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(Z(n=>n.state==="opened"),z(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(Z(n=>n.state==="closed"),z(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),et(this.backdropClick(),this.keydownEvents().pipe(Z(n=>n.keyCode===27&&!this.disableClose&&!ge(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),mi(this,n.type==="keydown"?"keyboard":"mouse"))})}close(a){let e=this._config.closePredicate;e&&!e(a,this._config,this.componentInstance)||(this._result=a,this._containerInstance._animationStateChanged.pipe(Z(t=>t.state==="closing"),z(1)).subscribe(t=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=Se.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let e=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?e.left(a.left):e.right(a.right):e.centerHorizontally(),a&&(a.top||a.bottom)?a.top?e.top(a.top):e.bottom(a.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(a="",e=""){return this._ref.updateSize(a,e),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=Se.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function mi(i,a,e){return i._closeInteractionType=a,i.close(e)}var Ze=new b("MatMdcDialogData"),ui=new b("mat-mdc-dialog-default-options"),pi=new b("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let i=r(v);return()=>ve(i)}}),Ut=(()=>{class i{_defaultOptions=r(ui,{optional:!0});_scrollStrategy=r(pi);_parentDialog=r(i,{optional:!0,skipSelf:!0});_idGenerator=r(R);_injector=r(v);_dialog=r(Qe);_animationsDisabled=ie();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new S;_afterOpenedAtThisLevel=new S;dialogConfigClass=Ae;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=re(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(se(void 0)));constructor(){this._dialogRefConstructor=K,this._dialogContainerType=ci,this._dialogDataToken=Ze}open(e,t){let n;t=g(g({},this._defaultOptions||new Ae),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,oe(g({},t),{positionStrategy:ye(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:F,useValue:t}]},templateContext:()=>({dialogRef:n}),providers:(m,u,x)=>(n=new this._dialogRefConstructor(m,t,x),n.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:x},{provide:this._dialogDataToken,useValue:u.data},{provide:this._dialogRefConstructor,useValue:n},{provide:V,useValue:null}])}));return n.componentRef=o.componentRef,n.componentInstance=o.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let m=this.openDialogs.indexOf(n);m>-1&&(this.openDialogs.splice(m,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=q({token:i,factory:i.\u0275fac})}return i})();var hi=(()=>{class i{_dialogRef=r(K,{optional:!0});_elementRef=r(B);_dialog=r(Ut);ngOnInit(){this._dialogRef||(this._dialogRef=_i(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=$({type:i})}return i})(),Qt=(()=>{class i extends hi{id=r(R).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=Pe(i)))(n||i)}})();static \u0275dir=$({type:i,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,n){t&2&&Be("id",n.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[X]})}return i})();function _i(i,a){let e=i.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?a.find(t=>t.id===e.id):null}var Kt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Y({type:i});static \u0275inj=j({providers:[Ut],imports:[jt,Ce,te,be]})}return i})();var $e=(()=>{class i{_listeners=[];notify(e,t){for(let n of this._listeners)n(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(t){return new(t||i)};static \u0275prov=q({token:i,factory:i.\u0275fac})}return i})();var gi=["input"],bi=["formField"],vi=["*"],we=class{source;value;constructor(a,e){this.source=a,this.value=e}},yi={provide:Tt,useExisting:tt(()=>Xe),multi:!0},Zt=new b("MatRadioGroup"),Ci=new b("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:!1})}),Xe=(()=>{class i{_changeDetector=r(J);_value=null;_name=r(R).getId("mat-radio-group-");_selected=null;_isInitialized=!1;_labelPosition="after";_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new L;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e==="before"?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new we(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=$({type:i,selectors:[["mat-radio-group"]],contentQueries:function(t,n,o){if(t&1&&lt(o,Ee,5),t&2){let m;U(m=Q())&&(n._radios=m)}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",k],required:[2,"required","required",k],disabledInteractive:[2,"disabledInteractive","disabledInteractive",k]},outputs:{change:"change"},exportAs:["matRadioGroup"],features:[ht([yi,{provide:Zt,useExisting:i}])]})}return i})(),Ee=(()=>{class i{_elementRef=r(B);_changeDetector=r(J);_focusMonitor=r(fe);_radioDispatcher=r($e);_defaultOptions=r(Ci,{optional:!0});_ngZone=r(de);_renderer=r(me);_uniqueId=r(R).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new L;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=ie();_injector=r(v);constructor(){r(bt).load(Et);let e=r(Zt,{optional:!0}),t=r(new ft("tabindex"),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,t&&(this.tabIndex=je(t,0))}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new we(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let n=this._inputElement?.nativeElement;n&&(n.setAttribute("tabindex",t+""),this._previousTabIndex=t,ce(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===n&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===n&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=E({type:i,selectors:[["mat-radio-button"]],viewQuery:function(t,n){if(t&1&&pe(gi,5)(bi,7,B),t&2){let o;U(o=Q())&&(n._inputElement=o.first),U(o=Q())&&(n._rippleTrigger=o.first)}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(t,n){t&1&&C("focus",function(){return n._inputElement.nativeElement.focus()}),t&2&&(y("id",n.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),I("mat-primary",n.color==="primary")("mat-accent",n.color==="accent")("mat-warn",n.color==="warn")("mat-mdc-radio-checked",n.checked)("mat-mdc-radio-disabled",n.disabled)("mat-mdc-radio-disabled-interactive",n.disabledInteractive)("_mat-animation-noopable",n._noopAnimations))},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",k],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:je(e)],checked:[2,"checked","checked",k],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",k],required:[2,"required","required",k],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",k]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:vi,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition","for"],[1,"mdc-radio"],[1,"mat-mdc-radio-touch-target"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mat-internal-form-field-label","mdc-label"]],template:function(t,n){t&1&&(st(),d(0,"label",2,0)(2,"span",3),H(3,"span",4),d(4,"input",5,1),C("change",function(m){return n._onInputInteraction(m)}),l(),d(6,"span",6),H(7,"span",7)(8,"span",8),l(),d(9,"span",9),H(10,"span",10),l()(),d(11,"span",11),dt(12),l()()),t&2&&(M("labelPosition",n.labelPosition)("for",n.inputId),s(2),I("mdc-radio--disabled",n.disabled),s(2),M("id",n.inputId)("checked",n.checked)("disabled",n.disabled&&!n.disabledInteractive)("required",n.required),y("name",n.name)("value",n.value)("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby)("aria-describedby",n.ariaDescribedby)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),s(5),M("matRippleTrigger",n._rippleTrigger.nativeElement)("matRippleDisabled",n._isRippleDisabled())("matRippleCentered",!0))},dependencies:[xe,Pt],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-pressed-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-radio-button .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-radio-button .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-radio-button .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {
  transform: scale(1);
  opacity: 0.12;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-checked-ripple-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--%NS%mat-radio-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-radio-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-radio-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-radio-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-radio-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-radio-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio--disabled + .mat-internal-form-field-label {
  color: var(--%NS%mat-radio-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-radio-button .mat-radio-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
}
.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {
  opacity: 0.14;
}
.mat-mdc-radio-button .mat-radio-ripple::before {
  border-radius: 50%;
}
.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-radio-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-radio-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-radio-touch-target-size, 48px);
  width: var(--%NS%mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})}return i})(),$t=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Y({type:i});static \u0275inj=j({imports:[De,Ee,be]})}return i})();function Di(i){try{return new Intl.NumberFormat("en",{style:"currency",currency:i}).resolvedOptions().maximumFractionDigits??2}catch{return 2}}function Xt(i,a){return i/10**Di(a)}function ki(i,a){let e=a?.toUpperCase()||"USD";try{return new Intl.NumberFormat(void 0,{style:"currency",currency:e}).format(Xt(i||0,e))}catch{return`${Xt(i||0,e).toFixed(2)} ${e}`}}function Jt(i){return`PAYMENTS.UNIT_${(i||"item").toUpperCase()}`}var ei=(()=>{class i{transform(e,t){return ki(e??0,t)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275pipe=ot({name:"amount",type:i,pure:!0})}}return i})();var ae=class extends Error{constructor(){super("Payment cancelled")}},Te=class extends Error{constructor(a,e=""){super("Payment window closed"),this.payment_id=a,this.reason=e}},Ne=class extends Error{constructor(a=""){super(a||G("PAYMENTS.PAYMENT_FAILED"))}};function Je(){let i=window.open("","placeos-payment","popup,width=520,height=760");return i&&(i.opener=null),i}var Si=["pay_button"],Ai=["reopen_button"],wi=["stop_button"],Ei=i=>({amount:i}),Ti=(i,a)=>a.id;function Ni(i,a){if(i&1&&(d(0,"li",9)(1,"div",18)(2,"div",19),c(3),l(),d(4,"div",20),c(5),p(6,"amount"),p(7,"translate"),l()(),d(8,"div"),c(9),p(10,"amount"),l()()),i&2){let e=a.$implicit,t=_(2);s(3),h(" ",e.name," "),s(2),pt(" ",e.quantity," \xD7 ",O(6,5,e.unit_amount,t.data.quote.currency)," ",f(7,8,t.unit_key(e.unit))," "),s(4),h(" ",O(10,10,e.amount,t.data.quote.currency)," ")}}function Mi(i,a){if(i&1&&(d(0,"div",21)(1,"dt"),c(2),p(3,"translate"),l(),d(4,"dd"),c(5),p(6,"amount"),l()(),d(7,"div",21)(8,"dt"),c(9),p(10,"translate"),l(),d(11,"dd"),c(12),p(13,"amount"),l()()),i&2){let e=_(2);s(2),P(f(3,4,"PAYMENTS.SUBTOTAL")),s(3),h(" ",O(6,6,e.data.quote.subtotal,e.data.quote.currency)," "),s(4),P(f(10,9,"PAYMENTS.TAX")),s(3),h(" ",O(13,11,e.data.quote.tax,e.data.quote.currency)," ")}}function Ii(i,a){if(i&1&&(d(0,"mat-radio-button",24)(1,"span",25),c(2),l(),c(3),d(4,"span",20),c(5),l()()),i&2){let e=a.$implicit;M("value",e.id),s(2),P(e.brand||e.type),s(),h(" \u2022\u2022\u2022\u2022 ",e.last4," "),s(2),ut(" ",e.exp_month,"/",e.exp_year," ")}}function Pi(i,a){if(i&1){let e=W();d(0,"fieldset")(1,"legend",22),c(2),p(3,"translate"),l(),d(4,"mat-radio-group",23),ze("ngModelChange",function(n){A(e);let o=_(2);return Ve(o.method_id,n)||(o.method_id=n),w(n)}),Fe(5,Ii,6,5,"mat-radio-button",24,Ti),d(7,"mat-radio-button",24),c(8),p(9,"translate"),l()(),Oe(),l()}if(i&2){let e=_(2);s(2),h(" ",f(3,4,"PAYMENTS.PAY_WITH")," "),s(2),Ge("ngModel",e.method_id),Re(),s(),Le(e.data.methods),s(2),M("value",e.new_method),s(),h(" ",f(9,6,"PAYMENTS.NEW_METHOD")," ")}}function Oi(i,a){if(i&1){let e=W();d(0,"mat-checkbox",26),ze("ngModelChange",function(n){A(e);let o=_(2);return Ve(o.save_method,n)||(o.save_method=n),w(n)}),c(1),p(2,"translate"),l(),Oe()}if(i&2){let e=_(2);Ge("ngModel",e.save_method),Re(),s(),h(" ",f(2,2,"PAYMENTS.SAVE_METHOD")," ")}}function Ri(i,a){if(i&1&&(d(0,"p",14),c(1),l()),i&2){let e=_(2);s(),h(" ",e.error()," ")}}function Fi(i,a){if(i&1){let e=W();d(0,"main",6)(1,"p",7),c(2),l(),d(3,"ul",8),Fe(4,Ni,11,13,"li",9,rt),l(),d(6,"dl",10),T(7,Mi,14,14),d(8,"div",11)(9,"dt"),c(10),p(11,"translate"),l(),d(12,"dd",12),c(13),p(14,"amount"),l()()(),T(15,Pi,10,8,"fieldset"),T(16,Oi,3,4,"mat-checkbox",13),T(17,Ri,2,1,"p",14),l(),d(18,"footer",15)(19,"button",16),C("click",function(){A(e);let n=_();return w(n.close())}),c(20),p(21,"translate"),l(),d(22,"button",17,0),C("click",function(){A(e);let n=_();return w(n.pay())}),c(24),p(25,"amount"),p(26,"translate"),l()()}if(i&2){let e=_();s(2),P(e.data.description),s(2),Le(e.data.quote.items),s(3),N(e.data.quote.tax>0?7:-1),s(3),P(f(11,9,"PAYMENTS.TOTAL")),s(3),h(" ",O(14,11,e.data.quote.total,e.data.quote.currency)," "),s(2),N(e.data.methods.length?15:-1),s(),N(e.data.can_save_method&&e.method_id()===e.new_method?16:-1),s(),N(e.error()?17:-1),s(3),h(" ",f(21,14,"COMMON.CANCEL")," "),s(4),h(" ",O(26,19,"PAYMENTS.PAY_AMOUNT",_t(22,Ei,O(25,16,e.data.quote.total,e.data.quote.currency)))," ")}}function Li(i,a){if(i&1&&(d(0,"p",14),c(1),l()),i&2){let e=_(2);s(),h(" ",e.error()," ")}}function Bi(i,a){if(i&1){let e=W();d(0,"main",5)(1,"icon",27),c(2,"tab_close"),l(),d(3,"p",28),c(4),p(5,"translate"),l(),T(6,Li,2,1,"p",14),d(7,"button",29,1),C("click",function(){A(e);let n=_();return w(n.reopen())}),c(9),p(10,"translate"),d(11,"icon",30),c(12,"open_in_new"),l()(),d(13,"button",31),C("click",function(){A(e);let n=_();return w(n.cancelPayment())}),c(14),p(15,"translate"),l()()}if(i&2){let e=_();s(4),P(f(5,10,"PAYMENTS.WINDOW_CLOSED")),s(2),N(e.error()?6:-1),s(),I("opacity-50",e.cancelling()),y("aria-disabled",e.cancelling()),s(2),h(" ",f(10,12,"PAYMENTS.REOPEN_PAYMENT_PAGE")," "),s(4),I("opacity-50",e.cancelling()),y("aria-disabled",e.cancelling()),s(),h(" ",f(15,14,"PAYMENTS.CANCEL_PAYMENT")," ")}}function Gi(i,a){if(i&1&&(d(0,"p",28),c(1),p(2,"translate"),l(),d(3,"a",34),c(4),p(5,"translate"),d(6,"icon",30),c(7,"open_in_new"),l()()),i&2){let e=_(2);s(),h(" ",f(2,3,"PAYMENTS.COMPLETE_IN_WINDOW")," "),s(2),M("href",e.hosted_url(),nt),s(),h(" ",f(5,5,"PAYMENTS.OPEN_PAYMENT_PAGE")," ")}}function Vi(i,a){i&1&&(d(0,"p",28),c(1),p(2,"translate"),l()),i&2&&(s(),P(f(2,1,"PAYMENTS.PROCESSING")))}function zi(i,a){if(i&1){let e=W();d(0,"main",5),H(1,"mat-spinner",32),T(2,Gi,8,7)(3,Vi,3,3,"p",28),d(4,"button",33,2),C("click",function(){A(e);let n=_();return w(n.stop())}),c(6),p(7,"translate"),l()()}if(i&2){let e=_();s(2),N(e.hosted_url()?2:3),s(4),h(" ",f(7,2,"PAYMENTS.CANCEL_PAYMENT")," ")}}var ti="",va=(()=>{class i{constructor(){this._ref=r(K),this._open_payment_id="",this.data=r(Ze),this.new_method=ti,this.unit_key=Jt,this.method_id=D(this.data.methods.find(e=>e.is_default)?.id??this.data.methods[0]?.id??ti),this.save_method=D(!1),this.view=D("review"),this.hosted_url=D(""),this.error=D(""),this.cancelling=D(!1),this._pay_button=he("pay_button"),this._reopen_button=he("reopen_button"),this._stop_button=he("stop_button"),le(()=>this._pay_button()?.nativeElement.focus()),le(()=>this._reopen_button()?.nativeElement.focus()),le(()=>this._stop_button()?.nativeElement.focus())}async pay(){let e=this.method_id()||void 0,t=e?null:Je();if(!e&&!t)return this._popupBlocked();await this._run(t,n=>this.data.pay(oe(g({},n),{method_id:e,save_method:!e&&this.save_method()})))}async reopen(){let e=this._open_payment_id;if(!e||this.cancelling())return;let t=Je();if(!t)return this._popupBlocked();await this._run(t,n=>this.data.resume(e,n))}async cancelPayment(){let e=this._open_payment_id;if(!(!e||this.cancelling())){this.cancelling.set(!0),this.error.set("");try{await this.data.cancel(e),this._open_payment_id="",this.view.set("review")}catch(t){this.error.set(ke(t)||G("PAYMENTS.PAYMENT_FAILED"))}finally{this.cancelling.set(!1)}}}stop(){this._abort?.abort()}close(){this._ref.close()}ngOnDestroy(){if(this.view()==="processing")return this._abort?.abort();this._open_payment_id&&!this.cancelling()&&this.data.cancel(this._open_payment_id).catch(()=>null)}async _run(e,t){this._abort=new AbortController,this.error.set(""),this.hosted_url.set(""),this.view.set("processing");try{let n=await t({window:e,signal:this._abort.signal,on_url:o=>this.hosted_url.set(o)});this._open_payment_id="",this._ref.close(n)}catch(n){if(e?.close(),n instanceof Te){this._open_payment_id=n.payment_id,this.view.set("closed"),this.error.set(n.reason);return}if(this._open_payment_id&&!(n instanceof ae)&&!(n instanceof Ne)){this.view.set("closed"),this.error.set(ke(n)||G("PAYMENTS.PAYMENT_FAILED"));return}this._open_payment_id="",this.view.set("review"),n instanceof ae||this.error.set(ke(n)||G("PAYMENTS.PAYMENT_FAILED"))}}_popupBlocked(){this.error.set(G("PAYMENTS.POPUP_BLOCKED"))}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=E({type:i,selectors:[["payment-checkout-modal"]],viewQuery:function(t,n){t&1&&ct(n._pay_button,Si,5)(n._reopen_button,Ai,5)(n._stop_button,wi,5),t&2&&mt(3)},decls:7,vars:4,consts:[["pay_button",""],["reopen_button",""],["stop_button",""],[1,"bg-base-200","sticky","top-0","z-10","m-2","flex","h-14","w-[calc(100%-1rem)]","min-w-[20rem]","items-center","rounded-sm","p-2"],["mat-dialog-title","",1,"px-2","text-xl","font-medium"],[1,"flex","w-md","max-w-[85vw]","flex-col","items-center","space-y-4","p-8","text-center"],[1,"w-md","max-w-[85vw]","space-y-4","p-4"],[1,"text-sm","opacity-70"],[1,"divide-base-200","divide-y","text-sm"],[1,"flex","items-center","gap-2","py-2"],[1,"border-base-200","space-y-1","border-t","pt-2","text-sm"],[1,"flex","justify-between","text-base","font-medium"],["total",""],[3,"ngModel"],["announce","",1,"bg-error/10","text-error","rounded-sm","p-2","text-sm"],[1,"bg-base-200","sticky","bottom-0","m-2","flex","items-center","gap-2","rounded-sm","p-2"],["btn","","matRipple","",1,"inverse","bg-base-100","flex-1",3,"click"],["btn","","matRipple","","name","pay",1,"flex-1",3,"click"],[1,"min-w-0","flex-1"],[1,"truncate","font-medium"],[1,"text-xs","opacity-70"],[1,"flex","justify-between"],[1,"mb-1","text-sm","font-medium"],[1,"flex","flex-col",3,"ngModelChange","ngModel"],[3,"value"],[1,"capitalize"],[3,"ngModelChange","ngModel"],[1,"text-5xl","opacity-60"],["announce",""],["btn","","matRipple","","name","reopen",3,"click"],[1,"ml-2","text-xl"],["btn","","matRipple","","name","cancel-payment",1,"clear",3,"click"],["diameter","32","aria-hidden","true"],["btn","","matRipple","",1,"clear",3,"click"],["btn","","matRipple","","target","_blank","rel","noopener",1,"inverse",3,"href"]],template:function(t,n){t&1&&(d(0,"header",3)(1,"h2",4),c(2),p(3,"translate"),l()(),T(4,Fi,27,24)(5,Bi,16,16,"main",5)(6,zi,8,4,"main",5)),t&2&&(s(2),h(" ",f(3,2,"PAYMENTS.CHECKOUT_TITLE")," "),s(2),N(n.view()==="review"?4:n.view()==="closed"?5:6))},dependencies:[Vt,It,Nt,Mt,Ot,Gt,Bt,Kt,Qt,Lt,Ft,$t,Xe,Ee,De,xe,ei,Rt],styles:["h2[mat-dialog-title][_ngcontent-%COMP%]{color:inherit;font-family:inherit;letter-spacing:inherit;margin:0;padding:0}h2[mat-dialog-title][_ngcontent-%COMP%]:before{display:none}"]})}}return i})();export{va as PaymentCheckoutModalComponent};
//# debugId=2ac0cedd-245b-551b-8ed2-cb29762faab6
