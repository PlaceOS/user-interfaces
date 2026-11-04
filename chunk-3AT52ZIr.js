import{n as m,r as n,t as l}from"./chunk-BwCtja5l.js";import{At as ST,B as Hm,Br as ry,Ci as yp,Cr as ne,Di as zb,Dr as oa,Dt as RS,Ei as z_,En as c_,Er as oT,F as Gi$1,Gt as Vm,H as Hs,Hn as fT,Hr as sT,Kr as sp,L as Gr$1,Lr as r_,M as Fm,Mr as pt$1,Mt as Sr$1,Nt as T,O as Ey,Or as oy,Pt as TS,Qn as iD,Qr as uC,Qt as XI,Rr as re,S as E,Sr as nD,T as Ee,Un as fe$1,Ur as s_,V as Ho$1,W as ID,X as K,Xn as hm,Xr as tn$1,Xt as Wb,Yn as hH,Yt as W_,Zn as hs$1,Zr as tr$1,Zt as Wl,_n as _r$1,br as md,ci as vp,cn as Ym,ct as Mm,dr as kv,dt as Nm,ei as uT,en as Xb,er as i_,et as Kl,fn as Zm$1,hn as _e,i as $s,jt as Sm,kt as Rm,m as CH,mi as xI,mr as lT,nr as ip,o as A,pn as Zr$1,rn as YC,rt as Lh,si as vf,tr as io$1,ui as wD,un as ZT,vn as _t$1,vt as PT,wr as nn$1,xn as aT,xr as mm,xt as Pm,y as Cw,yn as aC,z as Hb,zn as et$1,zt as Ub}from"./chunk-7C4YnpyG.js";import{$ as V,$t as mt,A as Ka$1,Cn as us$1,Et as cc,H as Qe,In as zh,J as Sh$1,N as Kt,Nn as xt,Pt as es$1,T as J,Tn as v,Tt as be,Vt as ic,W as Qr$1,Zt as lt,_t as Zh,a as As$1,bn as ti$1,et as Va$1,i as $t,jt as dt,ln as rc,nt as Vh,o as At,pn as sc,pt as Y,rn as oc,rt as Vr$1,t as $a$1,tt as Ve,vn as te,vt as Zn,wn as ut$1,xn as uc,xt as ac,y as Hh}from"./chunk-TrLmyrGM.js";import{E as j,I as we$1,N as ss,_ as U,b as _,d as K$1,h as S,j as ot,m as Oe$1,n as Ae,o as E$1}from"./chunk-DedXcPjQ.js";import{A as Ft,G as Rc,It as xe,M as Hf,Mt as un,S as Cl$1,Tt as re$1,V as P,X as V$2,Z as Vd,_t as kh$1,c as De$1,d as be$1,dt as gl,g as $l,ht as ke,it as bl,o as $,ot as co$1,r as f,rt as _f,s as C,st as df,t as O,u as V$1,v as Ah,yt as ne$1,z as Mo$1}from"./main.js";import{A as us$2,M as vt,O as rt,P as xt$1,a as It,b as bt$1,d as T$1,j as v$1,k as ss$1,r as Et,u as St,v as ae,w as kt,x as ce,y as as$1}from"./chunk-BoyVHlxG.js";import{C as pt$2,D as zt,E as wt,a as Ft$1,b as di$1,c as Le,g as Xt,h as Xe,l as Pe,m as Wi$1,n as A$1,o as Ht,p as Vt,s as It$1,t as $$1,w as q,x as je,y as ci$1}from"./chunk-BPXYaMur.js";import{n as mt$1,t as Yt}from"./chunk-RuWdHFZP.js";import{a as Te,c as ce$1,i as Oe$2,l as le$1,n as He,o as Ue,r as J$1,s as X,u as me}from"./chunk-BaglQxQg.js";import{n as d,t as a}from"./chunk-C200p8Z7.js";import{t as Et$1}from"./chunk-BvPauCNx.js";import{a as de,i as ae$1,o as le$2}from"./chunk-CRTwQBt-.js";var Fo=[`determinateSpinner`];function Po(t,n){if(t&1&&(yp(),Hs(0,`svg`,11),Nm(1,`circle`,12),Wl()),t&2){let e=oT();Sm(`viewBox`,e._viewBox()),Cw(),Zm$1(`stroke-dasharray`,e._strokeCircumference(),`px`)(`stroke-dashoffset`,e._strokeCircumference()/2,`px`)(`stroke-width`,e._circleStrokeWidth(),`%`),Sm(`r`,e._circleRadius())}}var Bo=new T(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:Fa})});var Fa=100;var zo=10;var Pa=(()=>{class t{_elementRef=E(nn$1);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let e=E(Bo),i=$(),a=this._elementRef.nativeElement;this._noopAnimations=i===`di-disabled`&&!!e&&!e._forceAnimations,this.mode=a.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&i===`reduced-motion`&&a.classList.add(`mat-progress-spinner-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=Fa;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-zo)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(i){return new(i||t)};static ɵcmp=YC({type:t,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(i,a){if(i&1&&Hm(Fo,5),i&2){let o;uT(o=lT())&&(a._determinateCircle=o.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(i,a){i&2&&(Sm(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,a.mode===`determinate`?a.value:null)(`mode`,a.mode),ST(`mat-`+a.color),Zm$1(`width`,a.diameter,`px`)(`height`,a.diameter,`px`)(`--%NS%mat-progress-spinner-size`,a.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,a.diameter+`px`),Ym(`_mat-animation-noopable`,a._noopAnimations)(`mdc-circular-progress--indeterminate`,a.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,W_],diameter:[2,`diameter`,`diameter`,W_],strokeWidth:[2,`strokeWidth`,`strokeWidth`,W_]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(i,a){if(i&1&&(mm(0,Po,2,8,`ng-template`,null,0,c_),Hs(2,`div`,2,1),yp(),Hs(4,`svg`,3),Nm(5,`circle`,4),Wl()(),vp(),Hs(6,`div`,5)(7,`div`,6)(8,`div`,7),Rm(9,8),Wl(),Hs(10,`div`,9),Rm(11,8),Wl(),Hs(12,`div`,10),Rm(13,8),Wl()()()),i&2){let o=fT(1);Cw(4),Sm(`viewBox`,a._viewBox()),Cw(),Zm$1(`stroke-dasharray`,a._strokeCircumference(),`px`)(`stroke-dashoffset`,a._strokeDashOffset(),`px`)(`stroke-width`,a._circleStrokeWidth(),`%`),Sm(`r`,a._circleRadius()),Cw(4),Mm(`ngTemplateOutlet`,o),Cw(2),Mm(`ngTemplateOutlet`,o),Cw(2),Mm(`ngTemplateOutlet`,o)}},dependencies:[TS],styles:[`.mat-mdc-progress-spinner {
  --%NS%mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--%NS%mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --%NS%mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--%NS%mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--%NS%mat-progress-spinner-active-indicator-color, var(--%NS%mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2})}return t})();var Ba=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=oa({type:t});static ɵinj=io$1({imports:[be$1]})}return t})();function $o(t,n){}var Ce=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var Li=(()=>{class t extends pt$2{_elementRef=E(nn$1);_focusTrapFactory=E(St);_config;_interactivityChecker=E(It);_ngZone=E(Ee);_focusMonitor=E(Et);_renderer=E(Sr$1);_changeDetectorRef=E(md);_injector=E(fe$1);_platform=E(C);_document=E(K);_portalOutlet;_focusTrapped=new ne;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=E(Ce,{optional:!0})||new Ce,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let i=this._ariaLabelledByQueue.indexOf(e);i>-1&&(this._ariaLabelledByQueue.splice(i,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),i}attachTemplatePortal(e){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),i}attachDomPortal=e=>{this._portalOutlet.hasAttached();let i=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),i};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let a=()=>{o(),r(),e.removeAttribute(`tabindex`)},o=this._renderer.listen(e,`blur`,a),r=this._renderer.listen(e,`mousedown`,a)})),e.focus(i)}_focusByCssSelector(e,i){let a=this._elementRef.nativeElement.querySelector(e);a&&this._forceFocus(a,i)}_trapFocus(e){this._isDestroyed||XI(()=>{let i=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case`dialog`:this._containsFocus()||i.focus(e);break;case!0:case`first-tabbable`:this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`,e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,i=null;if(typeof e==`string`?i=this._document.querySelector(e):typeof e==`boolean`?i=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(i=e),this._config.restoreFocus&&i&&typeof i.focus==`function`){let a=bt$1(),o=this._elementRef.nativeElement;(!a||a===this._document.body||a===o||o.contains(a))&&(this._focusMonitor?(this._focusMonitor.focusVia(i,this._closeInteractionType),this._closeInteractionType=null):i.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,i=bt$1();return e===i||e.contains(i)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=bt$1()))}static ɵfac=function(i){return new(i||t)};static ɵcmp=YC({type:t,selectors:[[`cdk-dialog-container`]],viewQuery:function(i,a){if(i&1&&Hm(Wi$1,7),i&2){let o;uT(o=lT())&&(a._portalOutlet=o.first)}},hostAttrs:[`tabindex`,`-1`,1,`cdk-dialog-container`],hostVars:6,hostBindings:function(i,a){i&2&&Sm(`id`,a._config.id||null)(`role`,a._config.role)(`aria-modal`,a._config.ariaModal)(`aria-labelledby`,a._config.ariaLabel?null:a._ariaLabelledByQueue[0])(`aria-label`,a._config.ariaLabel)(`aria-describedby`,a._config.ariaDescribedBy||null)},features:[hm],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(i,a){i&1&&mm(0,$o,0,0,`ng-template`,0)},dependencies:[Wi$1],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})}return t})();var De=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new ne;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(n,e){this.overlayRef=n,this.config=e,this.disableClose=e.disableClose,this.backdropClick=n.backdropClick(),this.keydownEvents=n.keydownEvents(),this.outsidePointerEvents=n.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(i=>{i.keyCode===27&&!this.disableClose&&!rt(i)&&(i.preventDefault(),this.close(void 0,{focusOrigin:`keyboard`}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:`mouse`}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=n.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(n,e){if(this._canClose(n)){let i=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||`program`,this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),i.next(n),i.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(n=``,e=``){return this.overlayRef.updateSize({width:n,height:e}),this}addPanelClass(n){return this.overlayRef.addPanelClass(n),this}removePanelClass(n){return this.overlayRef.removePanelClass(n),this}_canClose(n){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(n,e,this.componentInstance))}};var Vo=new T(`DialogScrollStrategy`,{providedIn:`root`,factory:()=>{let t=E(fe$1);return()=>Le(t)}});var Uo=new T(`DialogData`);var jo=new T(`DefaultDialogConfig`);function Go(t){let n=pt$1(t),e=new _t$1;return{valueSignal:n,get value(){return n()},change:e,ngOnDestroy(){e.complete()}}}var Fi=(()=>{class t{_injector=E(fe$1);_defaultOptions=E(jo,{optional:!0});_parentDialog=E(t,{optional:!0,skipSelf:!0});_overlayContainer=E(Xe);_idGenerator=E(ae);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new ne;_afterOpenedAtThisLevel=new ne;_ariaHiddenElements=new Map;_scrollStrategy=E(Vo);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=nD(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(ID(void 0)));open(e,i){i=l(l({},this._defaultOptions||new Ce),i),i.id=i.id||this._idGenerator.getId(`cdk-dialog-`),i.id&&this.getDialogById(i.id);let o=this._getOverlayConfig(i),r=Xt(this._injector,o),s=new De(r,i),c=this._attachContainer(r,s,i);if(s.containerInstance=c,!this.openDialogs.length){let l=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(tr$1(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(l)}):this._hideNonDialogContentFromAssistiveTechnology(l)}return this._attachDialogContent(e,s,c,i),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){Ri(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){Ri(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Ri(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let i=new q({positionStrategy:e.positionStrategy||je().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(i.backdropClass=e.backdropClass),i}_attachContainer(e,i,a){let o=a.injector||a.viewContainerRef?.injector,r=[{provide:Ce,useValue:a},{provide:De,useValue:i},{provide:wt,useValue:e}],s;a.container?typeof a.container==`function`?s=a.container:(s=a.container.type,r.push(...a.container.providers(a))):s=Li;let c=new Ft$1(s,a.viewContainerRef,fe$1.create({parent:o||this._injector,providers:r}));return e.attach(c).instance}_attachDialogContent(e,i,a,o){if(e instanceof _r$1){let r=this._createInjector(o,i,a,void 0),s={$implicit:o.data,dialogRef:i};o.templateContext&&(s=l(l({},s),typeof o.templateContext==`function`?o.templateContext():o.templateContext)),a.attachTemplatePortal(new $$1(e,null,s,r))}else{let r=this._createInjector(o,i,a,this._injector),s=a.attachComponentPortal(new Ft$1(e,o.viewContainerRef,r,null,o.bindings));i.componentRef=s,i.componentInstance=s.instance}}_createInjector(e,i,a,o){let r=e.injector||e.viewContainerRef?.injector,s=[{provide:Uo,useValue:e.data},{provide:De,useValue:i}];return e.providers&&(typeof e.providers==`function`?s.push(...e.providers(i,e,a)):s.push(...e.providers)),e.direction&&(!r||!r.get(V$1,null,{optional:!0}))&&s.push({provide:V$1,useValue:Go(e.direction)}),fe$1.create({parent:r||o,providers:s})}_removeOpenDialog(e,i){let a=this.openDialogs.indexOf(e);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,r)=>{o?r.setAttribute(`aria-hidden`,o):r.removeAttribute(`aria-hidden`)}),this._ariaHiddenElements.clear(),i&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let i=e.parentElement.children;for(let a=i.length-1;a>-1;a--){let o=i[a];o!==e&&o.nodeName!==`SCRIPT`&&o.nodeName!==`STYLE`&&!o.hasAttribute(`aria-live`)&&!o.hasAttribute(`popover`)&&(this._ariaHiddenElements.set(o,o.getAttribute(`aria-hidden`)),o.setAttribute(`aria-hidden`,`true`))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static ɵfac=function(i){return new(i||t)};static ɵprov=tn$1({token:t,factory:t.ɵfac})}return t})();function Ri(t,n){let e=t.length;for(;e--;)n(t[e])}var za=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=oa({type:t});static ɵinj=io$1({providers:[Fi],imports:[di$1,Pe,xt$1,Pe]})}return t})();function Wo(t,n){}var ei=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings};var Pi=`mdc-dialog--open`;var qa=`mdc-dialog--opening`;var $a=`mdc-dialog--closing`;var Ho=150;var Qo=75;var Ko=(()=>{class t extends Li{_animationStateChanged=new _t$1;_animationsEnabled=!De$1();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Ua(this._config.enterAnimationDuration)??Ho:0;_exitAnimationDuration=this._animationsEnabled?Ua(this._config.exitAnimationDuration)??Qo:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Va,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(qa,Pi)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Pi),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Pi),this._animationsEnabled?(this._hostElement.style.setProperty(Va,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add($a)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(qa,$a)}_waitForAnimationToComplete(e,i){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(i,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let i=super.attachComponentPortal(e);return i.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),i}static ɵfac=(()=>{let e;return function(a){return(e||(e=Lh(t)))(a||t)}})();static ɵcmp=YC({type:t,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function(i,a){i&2&&(Fm(`id`,a._config.id),Sm(`aria-modal`,a._config.ariaModal)(`role`,a._config.role)(`aria-labelledby`,a._config.ariaLabel?null:a._ariaLabelledByQueue[0])(`aria-label`,a._config.ariaLabel)(`aria-describedby`,a._config.ariaDescribedBy||null),Ym(`_mat-animation-noopable`,!a._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,a._actionSectionCount>0))},features:[hm],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function(i,a){i&1&&(Hs(0,`div`,0)(1,`div`,1),mm(2,Wo,0,0,`ng-template`,2),Wl()())},dependencies:[Wi$1],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2,changeDetection:1})}return t})();var Va=`--mat-dialog-transition-duration`;function Ua(t){return t==null?null:typeof t==`number`?t:t.endsWith(`ms`)?vt(t.substring(0,t.length-2)):t.endsWith(`s`)?vt(t.substring(0,t.length-1))*1e3:t===`0`?0:null}var Jt=(function(t){return t[t.OPEN=0]=`OPEN`,t[t.CLOSING=1]=`CLOSING`,t[t.CLOSED=2]=`CLOSED`,t})(Jt||{});var we=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Gr$1(1);_beforeClosed=new Gr$1(1);_result;_closeFallbackTimeout;_state=Jt.OPEN;_closeInteractionType;constructor(n,e,i){this._ref=n,this._config=e,this._containerInstance=i,this.disableClose=e.disableClose,this.id=n.id,n.addPanelClass(`mat-mdc-dialog-panel`),i._animationStateChanged.pipe(Zr$1(a=>a.state===`opened`),tr$1(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),i._animationStateChanged.pipe(Zr$1(a=>a.state===`closed`),tr$1(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),iD(this.backdropClick(),this.keydownEvents().pipe(Zr$1(a=>a.keyCode===27&&!this.disableClose&&!rt(a)))).subscribe(a=>{this.disableClose||(a.preventDefault(),ja(this,a.type===`keydown`?`keyboard`:`mouse`))})}close(n){let e=this._config.closePredicate;e&&!e(n,this._config,this.componentInstance)||(this._result=n,this._containerInstance._animationStateChanged.pipe(Zr$1(i=>i.state===`closing`),tr$1(1)).subscribe(i=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),i.totalTime+100)}),this._state=Jt.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let e=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?e.left(n.left):e.right(n.right):e.centerHorizontally(),n&&(n.top||n.bottom)?n.top?e.top(n.top):e.bottom(n.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(n=``,e=``){return this._ref.updateSize(n,e),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=Jt.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function ja(t,n,e){return t._closeInteractionType=n,t.close(e)}var ut=new T(`MatMdcDialogData`);var Xo=new T(`mat-mdc-dialog-default-options`);var Yo=new T(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let t=E(fe$1);return()=>Le(t)}});var Ga=(()=>{class t{_defaultOptions=E(Xo,{optional:!0});_scrollStrategy=E(Yo);_parentDialog=E(t,{optional:!0,skipSelf:!0});_idGenerator=E(ae);_injector=E(fe$1);_dialog=E(Fi);_animationsDisabled=De$1();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new ne;_afterOpenedAtThisLevel=new ne;dialogConfigClass=ei;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=nD(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(ID(void 0)));constructor(){this._dialogRefConstructor=we,this._dialogContainerType=Ko,this._dialogDataToken=ut}open(e,i){let a;i=l(l({},this._defaultOptions||new ei),i),i.id=i.id||this._idGenerator.getId(`mat-mdc-dialog-`),i.scrollStrategy=i.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,m(l({},i),{positionStrategy:je(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||i.enterAnimationDuration?.toLocaleString()===`0`||i.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:i},{provide:Ce,useValue:i}]},templateContext:()=>({dialogRef:a}),providers:(r,s,c)=>(a=new this._dialogRefConstructor(r,i,c),a.updatePosition(i?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:a},{provide:De,useValue:null}])}));return a.componentRef=o.componentRef,a.componentInstance=o.componentInstance,this.openDialogs.push(a),this.afterOpened.next(a),a.afterClosed().subscribe(()=>{let r=this.openDialogs.indexOf(a);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||this._getAfterAllClosed().next())}),a}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let i=e.length;for(;i--;)e[i].close()}static ɵfac=function(i){return new(i||t)};static ɵprov=tn$1({token:t,factory:t.ɵfac})}return t})();var ti=(()=>{class t{dialogRef=E(we,{optional:!0});_elementRef=E(nn$1);_dialog=E(Ga);ariaLabel;type=`button`;dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=Zo(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let i=e._matDialogClose;i&&(this.dialogResult=i.currentValue)}_onButtonClick(e){this._elementRef.nativeElement.getAttribute(`aria-disabled`)!==`true`&&ja(this.dialogRef,e.screenX===0&&e.screenY===0?`keyboard`:`mouse`,this.dialogResult)}static ɵfac=function(i){return new(i||t)};static ɵdir=Ho$1({type:t,selectors:[[``,`mat-dialog-close`,``],[``,`matDialogClose`,``]],hostVars:2,hostBindings:function(i,a){i&1&&Pm(`click`,function(r){return a._onButtonClick(r)}),i&2&&Sm(`aria-label`,a.ariaLabel||null)(`type`,a.type)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],type:`type`,dialogResult:[0,`mat-dialog-close`,`dialogResult`],_matDialogClose:[0,`matDialogClose`,`_matDialogClose`]},exportAs:[`matDialogClose`],features:[$s]})}return t})();function Zo(t,n){let e=t.nativeElement.parentElement;for(;e&&!e.classList.contains(`mat-mdc-dialog-container`);)e=e.parentElement;return e?n.find(i=>i.id===e.id):null}var ii=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=oa({type:t});static ɵinj=io$1({providers:[Ga],imports:[za,di$1,Pe,be$1]})}return t})();function Ha(t,n){let e=v(t,n?.in);return e.setSeconds(59,999),e}function Bi(t,n,e){return Qe(t,-n,e)}function er(t,n){if(t&1&&(Hs(0,`main`,2),Nm(1,`icon`,5)(2,`p`,6),Wl()),t&2){let e=oT();Cw(),Mm(`icon`,e.icon()),Cw(),Mm(`innerHTML`,e.content(),xI)}}function tr(t,n){if(t&1&&(Hs(0,`main`,3)(1,`div`,7),Nm(2,`mat-spinner`,8),Hs(3,`p`),PT(4),Wl()()()),t&2){let e=oT();Cw(4),ry(e.loading())}}function ir(t,n){if(t&1){let e=Xb();Hs(0,`footer`,4)(1,`button`,9),PT(2),r_(3,`translate`),Wl(),Hs(4,`button`,10),Pm(`click`,function(){ip(e);return sp(oT().onConfirm())}),PT(5),r_(6,`translate`),Wl()()}if(t&2){let e=oT();Cw(2),Kl(` `,i_(3,2,e.cancel_text()),` `),Cw(3),Kl(` `,i_(6,4,e.confirm_text()),` `)}}var nr={height:`auto`};async function Hc(t,n){let e=n.open(ar,m(l({},nr),{data:t}));return m(l({},await Promise.race([e.componentInstance.event.pipe(vf(i=>i.reason===`done`)).toPromise(),e.afterClosed().toPromise()])),{loading:i=>{e.componentInstance.loading?.set(i),e.disableClose=!!i},close:()=>e.close()})}var ar=(()=>{class t extends ot{constructor(){super(),this._dialog_ref=E(we),this._data=E(ut),this.loading=pt$1(``),this.event=new _t$1,this.title=pt$1(this._data.title||At(`COMMON.CONFIRM`)),this.content=pt$1(this._data.content||`Are you sure?`),this.confirm_text=pt$1(this._data.confirm_text||`COMMON.ACCEPT`),this.cancel_text=pt$1(this._data.cancel_text||`COMMON.CANCEL`),this.icon=pt$1(this._data.icon||{class:`material-symbols-rounded`,content:`done`}),this.disableClose=()=>this._dialog_ref.disableClose=!0,this.enableClose=()=>this._dialog_ref.disableClose=!1}ngOnInit(){this._data.close_delay&&this.timeout(`close`,()=>this._dialog_ref.close(),this._data.close_delay)}onConfirm(){this.event.emit({reason:`done`})}static{this.ɵfac=function(i){return new(i||t)}}static{this.ɵcmp=YC({type:t,selectors:[[`confirm-modal`]],features:[hm],decls:6,vars:3,consts:[[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`h-14`,`w-[calc(100%-1rem)]`,`min-w-[20rem]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[1,`flex`,`w-md`,`max-w-[85vw]`,`flex-col`,`items-center`,`space-y-4`,`p-4`,`sm:h-auto`],[`loading`,``],[1,`bg-base-200`,`sticky`,`bottom-0`,`m-2`,`flex`,`items-center`,`justify-center`,`space-x-2`,`rounded-sm`,`border-none`,`p-2`],[1,`text-5xl`,3,`icon`],[`content`,``,1,`text-center`,3,`innerHTML`],[1,`flex`,`h-48`,`w-full`,`flex-col`,`items-center`,`justify-center`,`space-y-4`],[`diameter`,`32`],[`btn`,``,`matRipple`,``,`mat-dialog-close`,``,1,`inverse`,`bg-base-100`,`flex-1`],[`btn`,``,`matRipple`,``,`name`,`accept`,1,`flex-1`,3,`click`]],template:function(i,a){i&1&&(Hs(0,`header`,0)(1,`h2`,1),PT(2),Wl()(),Hb(3,er,3,2,`main`,2)(4,tr,5,1,`main`,3),Hb(5,ir,7,6,`footer`,4)),i&2&&(Cw(2),ry(a.title()),Cw(),Ub(a.loading()?4:3),Cw(2),Ub(a.loading()?-1:5))},dependencies:[Ba,Pa,O,us$2,ss$1,ii,ti,f],encapsulation:2})}}return t})();var pt=`/api/staff/v1/calendars`;async function zi(){return(await te(pt)).map(n=>new Mo$1(n))}async function ni(t){let n=Vd(t);return(await te(`${pt}/availability${n?`?`+n:``}`)).map(i=>new Mo$1(i))}var or=(t,n)=>t.filter(e=>!!e.resource).map(e=>new j(m(l({},e.resource),{level:n?.levelWithID(e.resource.zones),availability:e.availability}))).filter(e=>e.bookable);async function Zc(t){let n=Vd(t);return await te(`${pt}/free_busy${n?`?`+n:``}`)}async function ai(t,n){let e=Vd(t);return or((await te(`${pt}/free_busy${e?`?`+e:``}`)).map(a=>new Mo$1(a)),n)}async function Jc(t){return await te(`${pt}/${encodeURIComponent(t)}/permission`)}var fe=`/api/staff/v1/events`;function Qa(t){return m(l({},t),{extension_data:l(l({},t.extension_data||{}),Rc())})}async function rl(t){return rr(t).catch(()=>[])}async function rr(t){return(await sr(t)).events}async function sr(t){let n=Vd(t),e=`${fe}${n?`?`+n:``}`,i=await te(e),a=Va$1(new URL(e,document.baseURI).href)[`x-calendar-issue`]||``;return{events:i.map(o=>new Ae(o)),failed_calendars:a.split(`,`).map(o=>o.trim().toLowerCase()).filter(Boolean)}}async function cr(t){return new Ae(await Qr$1(`${fe}`,new Ae(Qa(t)).toJSON()))}async function lr(t,n,e={},i=`patch`){let a=Vd(e);return new Ae(await(i===`patch`?Ka$1:Vr$1)(`${fe}/${encodeURIComponent(t)}${a?`?`+a:``}`,new Ae(Qa(n)).toJSON()))}var sl=async(t,n)=>{let e=t.update_master&&t.recurring_event_id||t.id;return delete t?.status,e?lr(e,m(l({},t),{id:e}),n):cr(t)};function cl(t,n={}){let e=Vd(n);return ti$1(`${fe}/${encodeURIComponent(t)}${e?`?`+e:``}`,{response_type:`void`})}async function ll(t,n,e,i={}){let a=Vd(m(l({},i),{state:e}));return new Oe$1(await Qr$1(`${fe}/${encodeURIComponent(t)}/guests/${n}/checkin${a?`?`+a:``}`,``))}async function dl(t,n,e={}){let i=Vd(e);return new Oe$1(await Qr$1(`${fe}/${encodeURIComponent(t)}/attendee${i?`?`+i:``}`,n))}async function ml(t,n,e={}){let i=Vd(e);return new Oe$1(await ti$1(`${fe}/${encodeURIComponent(t)}/attendee/${encodeURIComponent(n.email)}${i?`?`+i:``}`))}async function hl(t,n,e={}){let i=Vd(l({},e));return await te(`${fe}/${encodeURIComponent(t)}/metadata/${encodeURIComponent(n)}${i?`?`+i:``}`)}async function ul(t,n,e,i,a,o=[0,0]){let r=dt(n,e).valueOf(),[s,c]=await Promise.all([ni({system_ids:t.join(),period_start:_(n),period_end:_(r)}).catch(()=>[]),i&&t.includes(i)?ai({period_start:_(n),period_end:_(r),system_ids:i}):Promise.resolve([])]),l=t.map(m=>!!s.find(h=>h.id===m||h.resource?.id===m));for(let m of c){if(!t.includes(m.id))continue;let h=m.availability.filter(b=>!(b.date===o[0]&&b.duration===o[1]));l[t.indexOf(m.id)]=!h.find(b=>b.status!==`free`)}return l}async function pl(t,n={}){let e=Vd(m(l({},n),{limit:1e4}));try{let i=await Qr$1(`${fe}/clashing-assets${e?`?`+e:``}`,t.toJSON());return n.include_clash_time,i}catch{return[]}}function Cl(t,n,e=Ft(`app.parking.waitlist_week_start`)){let i=e?.day??5,a$1=e?.hour??18,o=e?.minute??0,r=Ft(`app.parking.use_building_timezone`)??Ft(`app.bookings.use_building_timezone`)?n:``,s=Date.now(),c=r?Y(s,r):new Date(s),l=lt(mt(c,{weekStartsOn:i}),{hours:a$1,minutes:o,seconds:0,milliseconds:0});c<l&&(l=a(l,7));let m=us$1(l,7),h=b=>r?ut$1(b,r).valueOf():b.valueOf();return t.valueOf()>=h(l)&&t.valueOf()<h(m)}var Z=`/api/staff/v1/bookings`;function ft(){return`${Rc().app_name}_${V$2.hash}_${K$1().email||``}`}function qi(t){let n=l({},t instanceof co$1?t.toJSON():t);return delete n.created_at,m(l({},n),{extension_data:l(l({},n.extension_data||{}),Rc())})}async function gt(t){return Ya(t).catch(()=>[])}async function Ya(t){let n=Vd(t);return(await te(`${Z}${n?`?`+n:``}`)).map(i=>new co$1(i))}async function wl(t,n){try{let{data:e,next:i,total:a}=await $t({query_params:m(l({},t),{limit:Math.max(200,n||0)}),endpoint:Z,path:`booked`}),o=[...e],r=1;for(;i&&(!a||o.length<a)&&r<=Za;){let s=await i();e=s.data,i=s.next,a=s.total,o=[...o,...e],r+=1}return zh(o)}catch{return[]}}async function Sl(t,n={}){let e=Vd(m(l({},n),{limit:1e3}));try{let i=await Qr$1(`${Z}/clashing-assets${e?`?`+e:``}`,t.toJSON()).catch(()=>[]);return n.include_clash_time,i}catch{return[]}}var Za=50;async function Ml(t,n={}){let{signal:e}=n;try{if(e?.aborted)return[];let{data:i,next:a}=await $t({query_params:t,fn:s=>new co$1(s),endpoint:Z,path:``}),o=[...i],r=1;for(;a&&r<=Za;){if(e?.aborted)return[];let s=await a();i=s.data,a=s.next,o.push(...i),r+=1}return e?.aborted?[]:zh(o,`id`)}catch{return[]}}async function El(t){return new co$1(await te(`${Z}/${encodeURIComponent(t)}`))}function $i(t){if(!t)throw new Error(`Missing parent booking id`);let n=Number(t);return Number.isSafeInteger(n)?n:t}async function et(t,n){let e=Vd(m(l({},n),{utm_source:ft()}));return new co$1(await Qr$1(`${Z}${e?`?`+e:``}`,qi(t)))}async function Ja(t,n,e=`patch`){return new co$1(await(e===`patch`?Ka$1:Vr$1)(`${Z}/${encodeURIComponent(t)}`,qi(n)))}async function dr(t,n,e,i=`patch`){return new co$1(await(i===`patch`?Ka$1:Vr$1)(`${Z}/${encodeURIComponent(t)}/instance/${n}`,qi(e)))}var Al=async(t,n)=>{let e=t.id;delete t.id;let i=n?.instance;return n&&delete n.instance,e?i?dr(e,t.instance||t.booking_start,t):Ja(e,t):et($a$1(t,[``,null,void 0])||{},n)};function _t(t,n={}){if(n.instance)return mr(t,n.start_time);let e=Vd({utm_source:ft()});return ti$1(`${Z}/${encodeURIComponent(t)}?${e}`,{response_type:`void`})}function mr(t,n){let e=Vd({utm_source:ft()});return ti$1(`${Z}/${encodeURIComponent(t)}/instance/${n}?${e}`,{response_type:`void`})}async function hr(t,n){let e=Vd({state:n});try{return new co$1(await Qr$1(`${Z}/${encodeURIComponent(t)}/check_in?${e}&utm_source=${ft()}`,``))}catch(i){let a=await i.json();throw a.error||a.message||a}}async function ur(t,n,e){let i=Vd({state:e});try{return new co$1(await Qr$1(`${Z}/${encodeURIComponent(t)}/check_in/${n}?${i}&utm_source=${ft()}`,``))}catch(a){let o=await a.json();throw o.error||o.message||o}}async function Dl(t,n){return!!t.instance||!!t.recurrence_type&&t.recurrence_type!==`none`?ur(t.id,t.instance||t.booking_start,n):hr(t.id,n)}async function Il(t,n,e,i,a=`room`){let o=await gt({type:a,period_start:_(n),period_end:_(dt(n,e))});return t.map(r=>!o.find(s=>(s.asset_id===r||s.asset_ids.includes(r))&&(!i||i!==s.id)))}async function pr(t,n){return t.from_bookings?t.linked_bookings.filter(i=>i.booking_type===n).map(i=>new co$1(i)):(await Ya({type:n,event_id:t.id,period_start:_(t.date),period_end:_(dt(t.date,t.duration)),limit:500})).filter(i=>i.extension_data?.parent_id===t.id)}function _r(t,n){return t.from_bookings?[]:(t.linked_bookings||[]).filter(e=>{let i=e.extension_data?.parent_id;return e.booking_type===n&&!!i&&i!==t.id}).map(e=>e.id)}function fr(t,n){return n.id&&t.extension_data?.details?.id===n.id||n.email&&t.attendees?.find(e=>e.email===n.email)?!0:!!t.asset_ids?.find(e=>n.items?.find(i=>i.item_ids?.includes(e)))}function Ka(t){let n=JSON.parse(JSON.stringify(t??null));return n&&typeof n==`object`&&delete n.deliver_at_time,JSON.stringify(n,(e,i)=>i&&typeof i==`object`&&!Array.isArray(i)?Object.fromEntries(Object.entries(i).sort(([a],[o])=>a<o?-1:1)):i)}function Xa(t=[]){return t.map(n=>n.email?.toLowerCase()).sort().join(`,`)}function gr(t,n){let e={};(t.booking_start!==n.booking_start||t.booking_end!==n.booking_end)&&(e.booking_start=n.booking_start,e.booking_end=n.booking_end,e.all_day=n.all_day);for(let a of[`title`,`description`,`asset_name`])t[a]!==n[a]&&(e[a]=n[a]);return t.user_email.toLowerCase()!==n.user_email.toLowerCase()&&(e.user_email=n.user_email),t.asset_id!==n.asset_id&&(e.asset_id=n.asset_id,e.asset_ids=n.asset_ids),[...t.zones].sort().join()!==[...n.zones].sort().join()&&(e.zones=n.zones),Xa(t.attendees)!==Xa(n.attendees)&&(e.attendees=n.attendees),!(Ka(t.extension_data?.details)!==Ka(n.extension_data?.details))&&!Object.keys(e).length?null:m(l({},e),{extension_data:n.extension_data})}function br(t){return l(l({},ss(t)),ss(t.extension_data||{}))}async function Ol(t,n,e){let i=await pr(t,n),a=t.system?.zones||zh(Zh(t.resources.map(s=>s.zones)))||[],o=new Set,r=[];try{for(let s of _r(t,n))await _t(s);for(let s of e){let c=i.find(k=>!o.has(k.id)&&fr(k,s)),l$1=n===`catering-order`&&s.system_id?t.resources.find(k=>k.id===s.system_id||k.email===s.system_id):void 0,m$1=l$1?.id||s.system_id||s.email||s.id,h=l$1?.display_name||l$1?.name||s.name,b=new co$1({type:n,booking_type:n,date:t.date,duration:t.duration,description:t.title||s.name,user_email:t.host,asset_id:m$1,asset_name:h,title:t.title,attendees:s.email?[new U(s)]:[],extension_data:l({parent_id:t.id,name:h,location_id:l$1?.id||t.location,details:s},n===`visitor`?br(s):{}),zones:l$1?.zones||a});if(c){o.add(c.id);let k=gr(c,b);k&&await Ja(c.id,k);continue}r.push(t.from_bookings?await et(m(l({},b.toJSON()),{parent_id:$i(t.id)})):await et(b.toJSON(),{ical_uid:t.ical_uid,event_id:t.id}))}for(let s of i)o.has(s.id)||await _t(s.id)}catch(s){throw await Promise.all(r.filter(c=>!!c.id).map(c=>_t(c.id).catch(()=>{}))),s}}function si(t,n=``){let e=n.trim().toLowerCase();return t.filter(i=>(i.name||``).trim().toLowerCase()===e).sort((i,a)=>(i.created_at||0)-(a.created_at||0))[0]}function Vi(t,n){return si(t.filter(i=>i.authority_id),n)||si(t,n)}var Se=null;var Ie=new Map;var oi=new Map;function Ui(){if(!Se){let t=oc({hidden:!0,limit:500}).then(n=>n.data);t.catch(()=>{Se===t&&(Se=null)}),Se=t}return Se}function eo(t){if(!Ie.has(t)){let n=sc({category_id:t,limit:500}).then(e=>e.data);n.catch(()=>{Ie.get(t)===n&&Ie.delete(t)}),Ie.set(t,n)}return Ie.get(t)}async function yr(t){let n=Vi(await Ui(),t);if(n||(Se=null,n=Vi(await Ui(),t),n))return n;try{return n=await Cr({name:t,hidden:!0}),Se=null,n}catch(e){if(Se=null,n=Vi(await Ui(),t),n)return n;throw e}}async function vr(t,n){let e=si(await eo(t),n);if(e)return e;try{return e=await Er({name:n,brand:`PlaceOS`,category_id:t}),Ie.delete(t),e}catch(i){if(Ie.delete(t),e=si(await eo(t),n),e)return e;throw i}}function ji(t,n){let e=`${t}/${n}`;if(!oi.has(e)){let i=yr(t).then(a=>vr(a.id,n)).then(a=>a.id);i.catch(()=>oi.delete(e)),oi.set(e,i)}return oi.get(e)}async function Gi(t,n){return Zh(await Promise.all(n.map(i=>Wi({zone_id:i,type_id:t}).then(a=>a.data))))}async function kr(t,n){return(await Wi({zones:n,type_id:t})).data}function xr(t){return m(l({},t),{data:t.data.filter(n=>!n?.hidden)})}async function to(t={}){if(t.hidden===!0)return oc(t);let i=t,{hidden:n$1}=i;return xr(await oc(n(i,[`hidden`])))}function Cr(t){return t.id?uc(t.id,t):cc(t)}var ri=new Map;var wr=[`period_start`,`period_end`,`type`,`rejected`];var Sr=100;async function Wi(t={}){let n=await rc(m(l({},t),{limit:t.limit||500})),e=n.total,i=[...n.data];for(let a=1;a<Sr&&typeof n.next==`function`;a++){let o=n.next();if(!o)break;n=await o,e=n.total,i.push(...n.data)}return{total:e,next:()=>null,data:i}}async function Mr(t={}){let n=JSON.stringify({zones:t.zones||t.zone_id||``,category_id:t.category_id||``,q:t.q||``,type_id:t.type_id||``});if(ri.has(n))return ri.get(n);let e=l({},t);for(let l of wr)l in e&&delete e[l];e.zones&&!e.zone_id&&(e.zone_id=e.zones),e.zones&&delete e.zones;let[i,a]=await Promise.all([sc(e),Wi(e)]),o=i.data.filter(l=>!l?.hidden);e.type_id&&(o=o.filter(l=>l.id===e.type_id));let r=new Set(o.map(l=>l.id)),s=new Map;for(let l of a.data){if(l?.hidden||!r.has(l.asset_type_id))continue;let m=s.get(l.asset_type_id)||[];m.push(l),s.set(l.asset_type_id,m)}let c=o.map(l$2=>m(l({},l$2),{assets:s.get(l$2.id)||[]}));return ri.set(n,c),setTimeout(()=>ri.delete(n),300*1e3),c}function Er(t){return t.id?ac(t.id,t):ic(t)}async function Hi(t,n=[]){let[e,i]=await Promise.all([Mr(t),gt(m(l({},t),{type:`asset-request`}))]),a=i.filter(o=>o.status!==`declined`&&o.status!==`cancelled`);return e.map(o=>m(l({},o),{assets:o.assets.filter(r=>n?.includes(r.id)||!a.find(s=>!n.includes(s.id)&&(s.asset_id===r.id||s.asset_ids?.includes(r.id))))}))}function Ar(t,n){if((!t||t?.length<=0)&&n?.length)return[];if(!n)return[];let e=[];for(let i of t){let a=n.find(o=>o.id===i.id);(!a||a.ref_id!==i.ref_id)&&e.push(i.id)}return e}async function Hl({id:t,ical_uid:n,from_booking:e,from_bookings:i},{date:a,duration:o,all_day:r,host:s,location_name:c,location_id:l$3,zones:m$2,reset_state:h},b=[],k=!1){let J$2=await gt({period_start:_(a),period_end:_(dt(a,o)),type:`asset-request`,zones:m$2.join(`,`)}),$=!!(e||i),tt=t&&(n||$)?(await gt({period_start:_(J(a)),period_end:_(Ve(a)),type:`asset-request`,email:s,event_id:$?``:t,ical_uid:n})).filter(g=>!$||String(g.extension_data?.parent_id)===String(t)):[],mi=tt.map(g=>[g.id,new E$1(g.extension_data.request)]);b?.forEach(g=>g.conflict=!1);let it=k?b.map(g=>g.id):Ar(b,mi.map(([g,M])=>M));if(h){let g=tt.filter(M=>M.approved||M.rejected);it=zh([...it,...g.map(M=>M.extension_data.request_id)])}let an=mi.filter(([g,M])=>!it.includes(M.id)),Oo=mi.filter(([g,{id:M}])=>it.includes(M)),No=b.filter(({id:g})=>it.includes(g)),Ne=Zh(J$2.filter(g=>!g.rejected&&(!tt.find(M=>M.id===g.id)||an.find(([M])=>g.event_id===M))).map(g=>g.asset_ids));for(let[g,M]of an)Ne=[...Ne,...Zh(M.items.map(vt=>vt.item_ids))];let Ro=await Hi({period_start:_(a),period_end:_(dt(a,o)),type:`asset-request`,zones:(m$2||[]).join(`,`)},tt.map(g=>g.id)),Lo=No.map(g=>{let M=Zh(g.items.map(({id:de,item_ids:hi,quantity:ui})=>{let nt=hi||[],rn=Ro.find(sn=>sn.id===de)?.assets;if(!rn)return nt;let pi=[];return new Array(ui).fill(0).map((sn,kt)=>{let _i=Ne.includes(nt[kt])||pi.includes(nt[kt])||!nt[kt]?rn?.find(({id:cn})=>!Ne.includes(cn)&&!pi.includes(cn))?.id:nt[kt];if(!_i)throw g.conflict=!0,`Unable to find available asset for request`;return pi.push(_i),_i})}));if(!M.length||M.some(de=>!de))throw g.conflict=!0,`Unable to find available asset for request`;let vt=tt.find(de=>de.asset_ids.find(hi=>g.items?.find(ui=>ui.item_ids?.includes(hi))));Ne=[...Ne,...M];let on={type:`asset-request`,booking_type:`asset-request`,date:a,duration:o,all_day:r,description:c,user_email:s,asset_id:M[0],asset_ids:M,asset_name:g.items.map(de=>de.name).join(`, `),title:g.items.map(de=>de.name).join(`, `),approved:!h&&vt?.approved&&!g._changed,rejected:!h&&vt?.rejected&&!g._changed,extension_data:{parent_id:t,request_id:g.id,location_id:l$3,request:new E$1(m(l({},g),{event:null}))},zones:m$2||[]};return()=>$?et(m(l({},new co$1(on).toJSON()),{parent_id:$i(t)})):et(new co$1(on),{ical_uid:n,event_id:t})});return async()=>{await Promise.all(Oo.map(([g])=>_t(g))),await Promise.all(Lo.map(g=>g()))}}var io=`_LOCKERS_`;var Dr=`_LOCKER_BANKS_`;var Ir=`_LOCKERS_`;function Or(){return ji(io,Dr)}function Nr(){return ji(io,Ir)}async function no(t){return t?.length?Gi(await Or(),t):[]}async function ao(t){return t?.length?Gi(await Nr(),t):[]}var Tr=64;var Rr=64;var Lr=30*1e3;var Fr=`PlaceOS.image-cache-v1`;var Pr=`PlaceOS.image-cache-keys-v1`;var le=new Map;var Qi=new Map;var Oe=new Map;var oo=!1;function Br(){if(!oo&&(oo=!0,typeof caches<`u`&&caches.delete(Fr).catch(()=>!1),typeof sessionStorage<`u`))try{sessionStorage.removeItem(Pr)}catch{}}function zr(t){let n=le.get(t);if(n)return le.delete(t),le.set(t,n),n}function qr(t,n){let e=le.get(t);for(e&&e!==n&&URL.revokeObjectURL(e),le.delete(t),le.set(t,n);le.size>Tr;){let i=le.keys().next().value;if(!i)break;let a=le.get(i);le.delete(i),a&&URL.revokeObjectURL(a)}return n}function $r(t){for(Oe.delete(t),Oe.set(t,Date.now()+Lr);Oe.size>Rr;){let n=Oe.keys().next().value;if(!n)break;Oe.delete(n)}}function Ki(t){let n=V();document.cookie=`${n===`x-api-key`?`api-key=`+encodeURIComponent(Kt()):`bearer_token=`+encodeURIComponent(n)};max-age=30;path=${t};samesite=strict;${location.protocol===`https:`?`secure;`:``}`}function Vr(){let t=V();return t===`x-api-key`?{"X-API-Key":Kt()}:{Authorization:`Bearer ${t}`}}function nd(t,n){return ro(t,()=>(Ki(n),fetch(t)))}function ad(t){return ro(t,()=>fetch(t,{headers:Vr()}))}async function ro(t,n){Br();let e=zr(t);if(e)return e;if((Oe.get(t)||0)>Date.now())throw new Error(`Image load is in retry cooldown`);Oe.delete(t);let a=Qi.get(t);if(a)return a;let o=n().then(async r=>{if(!r?.ok)throw new Error(`Failed to fetch image: ${r?.status}`);return qr(t,URL.createObjectURL(await r.blob()))}).catch(r=>{throw $r(t),r}).finally(()=>Qi.delete(t));return Qi.set(t,o),o}var so=10;var co=1;var Ur=.05;var lo=16;var mo=4;var ho=2;var uo=8192;function po(){if(typeof window>`u`||!window.matchMedia)return!1;let t=window.matchMedia(`(pointer: coarse)`).matches,n=window.matchMedia(`(max-width: 1024px)`).matches;return t&&n}var jr=`http://www.w3.org/2000/svg`;function Gr(t){return t.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Wr(t){return t.replace(/[!"#$%&'()*+,.\/;<=>?@[\\\]^`{|}~]/g,`\\$&`).split(` `).map(e=>e.replace(/^\\/,``)).join(` `)}function Hr(t){let n=0,e=0,i=0,a=0,o=t.getAttribute(`viewBox`);if(o){let r=o.split(/[\s,]+/).map(parseFloat);r.length>=4&&(n=r[0]||0,e=r[1]||0,i=r[2],a=r[3])}if(!i||!a){let r=t.getAttribute(`width`),s=t.getAttribute(`height`);i=r?parseFloat(r):0,a=s?parseFloat(s):0}if(!i||!a)try{let r=t.getBBox();n=r.x,e=r.y,i=r.width,a=r.height}catch{}return{x:n,y:e,width:i||1,height:a||1}}function Qr(t,n){let e=t.getBBox(),i=n&&t.getScreenCTM?.();if(!i)return e;let a=n.multiply(i),o=[{x:e.x,y:e.y},{x:e.x+e.width,y:e.y},{x:e.x,y:e.y+e.height},{x:e.x+e.width,y:e.y+e.height}].map(c=>({x:a.a*c.x+a.c*c.y+a.e,y:a.b*c.x+a.d*c.y+a.f})),r=Math.min(...o.map(c=>c.x)),s=Math.min(...o.map(c=>c.y));return{x:r,y:s,width:Math.max(...o.map(c=>c.x))-r,height:Math.max(...o.map(c=>c.y))-s}}var Kr=`http://www.w3.org/2000/svg`;function Xr(t){for(let n of[t,...Array.from(t.querySelectorAll(`*`))]){if(n.namespaceURI!==Kr||n.localName===`script`||n.localName===`foreignObject`){n.remove();continue}for(let{name:e,value:i}of Array.from(n.attributes)){let a=i.replace(/[\s\u0000-\u001f]/g,``).toLowerCase();(e.toLowerCase().startsWith(`on`)||a.includes(`javascript:`))&&n.removeAttribute(e)}}}function Yr(t){let n=new Map,e=new DOMParser().parseFromString(t,`image/svg+xml`).querySelector(`svg`);if(!(e instanceof SVGSVGElement))return{bounds:n,aspect_ratio:1};Xr(e);let i=document.importNode(e,!0),a=document.createElement(`div`);a.style.position=`absolute`,a.style.visibility=`hidden`,a.style.pointerEvents=`none`,a.style.left=`-9999px`,a.style.top=`-9999px`,a.appendChild(i),document.body.appendChild(a);let{x:o,y:r,width:s,height:c}=Hr(i),l=s/c,m=i.getScreenCTM?.(),h=m?m.inverse():null;return i.querySelectorAll(`[id]`).forEach(k=>{let J=k.getAttribute(`id`);if(J&&typeof k.getBBox==`function`)try{let $=Qr(k,h);n.set(J,{x:($.x-o)/s,y:($.y-r)/c,w:$.width/s,h:$.height/c})}catch{}}),document.body.removeChild(a),{bounds:n,aspect_ratio:l}}var Xi=class{constructor(){this.store=new Map}get(n){if(!this.store.has(n)){let e=this._load(n);e.catch(()=>this.store.delete(n)),this.store.set(n,e)}return this.store.get(n)}async _load(n){for(;!be();)await new Promise(l=>setTimeout(l,300));let e={},i=V(),a=new URL(n,location.origin).origin===location.origin;i&&a&&(Vh()?Ki(`/`):e.headers=i===`x-api-key`?{"x-api-key":Kt()}:{Authorization:`Bearer ${i}`});let o=await fetch(n,e);if(!o.ok)throw new Error(`Failed to load map`);let r=await o.text(),{bounds:s,aspect_ratio:c}=Yr(r);return{raw_data:r,element_bounds:s,aspect_ratio:c}}};var fo=new Xi;function go(t){return fo.get(t)}var _o=class{constructor(n){this.map_image=null,this.styles_string=``,this.center={x:.5,y:.5},this.zoom=1,this.fixed_resolution_megapixels=0,this.disable_zoom=!1,this.disable_pan=!1,this.onViewChange=null,this.debug=!1,this.debug_info={pointer:null,hover_id:``,highlight_id:``,last_draw_ms:0,draws_last_second:0},this._map_path=``,this._image_generation=0,this._prepared_svg=null,this._texture_width=0,this._texture_height=0,this._image_frame_id=null,this._draw_frame_id=null,this._notify_frame_id=null,this._debug_draw_count=0,this._debug_count_start=0,this._events=new Map,this._resize_observer=null,this._pointers=new Map,this._is_panning=!1,this._pinch_distance=null,this._pan_start=null,this._pan_exceeded_threshold=!1,this._overlay_instances=[],this._actions=[],this._action_event_handlers=new Map,this._action_pointerdown_pos=null,this._action_last_triggered=new Map,this.container=n,this.id=`m_view-${Hh(8,`0123456789ABCDEF`)}`,this.container.innerHTML=``,this.container.style.overflow=`hidden`,this.container.style.touchAction=`none`,this.canvas=document.createElement(`canvas`),this.canvas.style.cssText=`position: absolute; inset: 0; pointer-events: none;`,this._ctx=this.canvas.getContext(`2d`),this.container.appendChild(this.canvas),this.overlays=document.createElement(`div`),this.overlays.id=`${this.id}-overlays`,this.overlays.style.cssText=`position: absolute; inset: 0; z-index: 0; pointer-events: none;`,this.container.appendChild(this.overlays),this._resize_observer=new ResizeObserver(()=>this._onResize()),this._resize_observer.observe(this.container),this._events.set(`wheel`,e=>this._onWheel(e)),this.container.addEventListener(`wheel`,this._events.get(`wheel`),{passive:!1}),this._events.set(`pointerdown`,e=>this._onPointerDown(e)),this._events.set(`pointermove`,e=>this._onPointerMove(e)),this._events.set(`pointerup`,e=>this._onPointerUp(e)),this.container.addEventListener(`pointerdown`,this._events.get(`pointerdown`)),window.addEventListener(`pointermove`,this._events.get(`pointermove`)),window.addEventListener(`pointerup`,this._events.get(`pointerup`)),window.addEventListener(`pointercancel`,this._events.get(`pointerup`))}async setMap(n){this._map_path=n;let e=await fo.get(n);this._map_path===n&&(this.map=e,this._renderMapImage())}setCenter(n){let e=this._clampCenter(n);e.x===this.center.x&&e.y===this.center.y||(this.center=e,this._renderMap())}setZoom(n){n=Math.max(co,Math.min(so,n)),n!==this.zoom&&(this.zoom=n,this._renderMap())}setFixedResolution(n){let e=n>0?n:0;this.fixed_resolution_megapixels!==e&&(this.fixed_resolution_megapixels=e,this.disable_zoom&&this._renderMapImage())}setOptions(n){let e=this.disable_zoom;this.disable_zoom=!!n?.disable_zoom,this.disable_pan=!!n?.disable_pan,e!==this.disable_zoom&&this._renderMapImage()}get overlay_count(){return this._overlay_instances.length}get texture_mode(){return this.disable_zoom?this.fixed_resolution_megapixels?`fixed ${this.fixed_resolution_megapixels}MP`:`fixed ${ho}\xD7 container`:po()?`mobile ${mo}MP`:`desktop ${lo}MP`}setDebug(n){if(this.debug!==n){if(this.debug=n,n){let e=o=>{this.debug_info.pointer=this._eventToMap(o),this.debug_info.hover_id=this._elementAt(this.debug_info.pointer),this._renderMap()},i=()=>{this.debug_info.pointer=null,this.debug_info.hover_id=``,this._renderMap()},a=o=>{let r=this._eventToMap(o);console.log(`[MAP][DEBUG] Click at { x: ${r.x.toFixed(4)}, y: ${r.y.toFixed(4)} } on "${this._elementAt(r)||`no element`}"`)};this._events.set(`debug_move`,e),this._events.set(`debug_leave`,i),this._events.set(`debug_click`,a),this.container.addEventListener(`pointermove`,e),this.container.addEventListener(`pointerleave`,i),this.container.addEventListener(`click`,a)}else{for(let e of[`debug_move`,`debug_leave`,`debug_click`]){let i=this._events.get(e);if(!i)continue;let a=e===`debug_move`?`pointermove`:e===`debug_leave`?`pointerleave`:`click`;this.container.removeEventListener(a,i),this._events.delete(e)}this.debug_info.pointer=null,this.debug_info.hover_id=``,this.debug_info.highlight_id=``}this._applyOverlayOutlines(),this._renderMap()}}setDebugHighlight(n){this.debug_info.highlight_id!==n&&(this.debug_info.highlight_id=n,this.debug&&this._renderMap())}focusOn(n){let e=this.map?.element_bounds.get(n);e&&(this.setCenter({x:e.x+e.w/2,y:e.y+e.h/2}),this._notifyViewChange())}setOverlays(n){let e=new Map;for(let{overlay:o,element:r}of this._overlay_instances)typeof o.contents==`string`?r.remove():e.set(o.contents,r);this._overlay_instances=[];let i=[];for(let o of n){let r=typeof o.contents==`string`?void 0:e.get(o.contents);r&&e.delete(o.contents);let s=r||document.createElement(`div`);s.style.cssText=`position: absolute; top: 0; left: 0; display: flex; align-items: center; justify-content: center; transform-origin: center center; pointer-events: none;`,o.z_index!=null&&(s.style.zIndex=`${o.z_index}`),s.classList.toggle(`map-overlay-hover`,!!o.hover),typeof o.contents==`string`?s.innerHTML=o.contents:o.contents.parentNode!==s&&s.appendChild(o.contents),i.push(s),this._overlay_instances.push({overlay:o,element:s})}for(let o of e.values())o.remove();let a=this.overlays.firstChild;for(let o of i)o===a?a=o.nextSibling:this.overlays.insertBefore(o,a);this._applyOverlayOutlines(),this._updateOverlayPositions()}_applyOverlayOutlines(){for(let{element:n}of this._overlay_instances)n.style.outline=this.debug?`1px dashed #f0f`:``}_elementAt(n){let e=``,i=Number.POSITIVE_INFINITY;for(let[a,o]of this.map?.element_bounds||[]){if(n.x<o.x||n.x>o.x+o.w||n.y<o.y||n.y>o.y+o.h)continue;let r=o.w*o.h;r<i&&(e=a,i=r)}return e}setActions(n){for(let[i,a]of this._action_event_handlers)this.container.removeEventListener(i,a);this._action_event_handlers.clear(),this._action_last_triggered.clear(),this._actions=n;let e=new Set(n.flatMap(i=>i.events));for(let i of e){let a=o=>this._handleActionEvent(i,o);this._action_event_handlers.set(i,a),this.container.addEventListener(i,a)}if(!this._events.has(`action_pointerdown`)){let i=a=>{this._action_pointerdown_pos={x:a.clientX,y:a.clientY}};this._events.set(`action_pointerdown`,i),this.container.addEventListener(`pointerdown`,i)}}setStyles(n){let e=``;for(let[i,a]of Object.entries(n))a&&(e+=`svg ${Wr(i)} { ${a} }
`);e!==this.styles_string&&(this.styles_string=e,this._renderMapImage())}destroy(){this.setDebug(!1),this._resize_observer?.disconnect(),this._resize_observer=null,this.container.removeEventListener(`wheel`,this._events.get(`wheel`)),this.container.removeEventListener(`pointerdown`,this._events.get(`pointerdown`)),window.removeEventListener(`pointermove`,this._events.get(`pointermove`)),window.removeEventListener(`pointerup`,this._events.get(`pointerup`)),window.removeEventListener(`pointercancel`,this._events.get(`pointerup`));for(let[n,e]of this._action_event_handlers)this.container.removeEventListener(n,e);if(this._action_event_handlers.clear(),this._action_last_triggered.clear(),this._actions=[],this._events.has(`action_pointerdown`)){let n=this._events.get(`action_pointerdown`);this.container.removeEventListener(`pointerdown`,n),this._events.delete(`action_pointerdown`)}this._action_pointerdown_pos=null,this._image_generation++,this._map_path=``,this._image_frame_id!==null&&(cancelAnimationFrame(this._image_frame_id),this._image_frame_id=null),this._draw_frame_id!==null&&(cancelAnimationFrame(this._draw_frame_id),this._draw_frame_id=null),this._notify_frame_id!==null&&(cancelAnimationFrame(this._notify_frame_id),this._notify_frame_id=null);for(let n of this._overlay_instances)n.element.remove();this._overlay_instances=[],this.map_image=null,this._prepared_svg=null,this.container.innerHTML=``}_viewScale(n=this.zoom){let e=this.map?.aspect_ratio||1,i=this.container.clientWidth||1,a=this.container.clientHeight||1,o=Math.min(a,i/e)*(1-Ur*2)*n;return{x:o*e,y:o}}_eventToMap(n,e=this.container.getBoundingClientRect()){let i=this._viewScale();return{x:(n.clientX-e.left-e.width/2)/i.x+this.center.x,y:(n.clientY-e.top-e.height/2)/i.y+this.center.y}}_clampCenter(n){return{x:Math.max(0,Math.min(1,n.x)),y:Math.max(0,Math.min(1,n.y))}}_zoomAboutPoint(n,e){let i=this.zoom;if(n=Math.max(co,Math.min(so,n)),n===i)return;let a=this.container.getBoundingClientRect(),o=this._eventToMap({clientX:e.x,clientY:e.y},a),r=this._viewScale(n),s={x:o.x-(e.x-a.left-a.width/2)/r.x,y:o.y-(e.y-a.top-a.height/2)/r.y};this.zoom=n,this.center=this._clampCenter(s),this._renderMap(),this._notifyViewChange()}_onWheel(n){if(n.preventDefault(),this.disable_zoom||!this.map_image)return;let e=n.deltaY>0?.97:1.03;this._zoomAboutPoint(this.zoom*e,{x:n.clientX,y:n.clientY})}_onPointerDown(n){if(this.map_image&&n.button===0){if(this._pointers.set(n.pointerId,{x:n.clientX,y:n.clientY}),this._pointers.size===2){this._is_panning=!1;let[e,i]=[...this._pointers.values()];this._pinch_distance=Math.hypot(i.x-e.x,i.y-e.y);return}this.disable_pan||(this._is_panning=!0,this._pan_start={x:n.clientX,y:n.clientY},this._pan_exceeded_threshold=!1,this.container.style.cursor=`grabbing`)}}_onPointerMove(n){let e=this._pointers.get(n.pointerId);if(!e)return;if(this._pointers.set(n.pointerId,{x:n.clientX,y:n.clientY}),this._pointers.size===2&&this._pinch_distance){if(this.disable_zoom)return;let[a,o]=[...this._pointers.values()],r=Math.hypot(o.x-a.x,o.y-a.y);r>0&&(this._zoomAboutPoint(this.zoom*(r/this._pinch_distance),{x:(a.x+o.x)/2,y:(a.y+o.y)/2}),this._pinch_distance=r);return}if(!this._is_panning)return;this._pan_start&&!this._pan_exceeded_threshold&&Math.hypot(n.clientX-this._pan_start.x,n.clientY-this._pan_start.y)>5&&(this._pan_exceeded_threshold=!0);let i=this._viewScale();this.center=this._clampCenter({x:this.center.x-(n.clientX-e.x)/i.x,y:this.center.y-(n.clientY-e.y)/i.y}),this._renderMap(),this._notifyViewChange()}_onPointerUp(n){this._pointers.delete(n.pointerId),this._pointers.size<2&&(this._pinch_distance=null),this._is_panning&&this._pointers.size===0&&(this._is_panning=!1,this.container.style.cursor=``)}_onResize(){if(this._renderMap(),this.disable_zoom&&!this.fixed_resolution_megapixels){let{width:n,height:e}=this._textureDimensions();(n!==this._texture_width||e!==this._texture_height)&&this._renderMapImage()}}_targetTexturePixels(){return this.disable_zoom?this.fixed_resolution_megapixels>0?this.fixed_resolution_megapixels*1e6:(this.container.clientWidth||1)*(this.container.clientHeight||1)*ho:(po()?mo:lo)*1e6}_textureDimensions(){let n=this.map?.aspect_ratio||1,e=this._targetTexturePixels(),i=Math.sqrt(e/n),a=i*n;return{width:Math.max(1,Math.min(uo,Math.round(a))),height:Math.max(1,Math.min(uo,Math.round(i)))}}_renderMapImage(){this._image_frame_id!==null&&cancelAnimationFrame(this._image_frame_id),this._image_frame_id=requestAnimationFrame(()=>{this._image_frame_id=null,this._doRenderMapImage()})}_doRenderMapImage(){if(!this.map?.raw_data)return;let n=++this._image_generation,{width:e,height:i}=this._textureDimensions();this._texture_width=e,this._texture_height=i;let a=this._preparedSvg(e,i);if(!a)return;let{head:o,tail:r}=a,s=this.styles_string?`${o}<style xmlns="${jr}">${Gr(this.styles_string)}</style>${r}`:`${o}${r}`,c=new Blob([s],{type:`image/svg+xml`}),l=URL.createObjectURL(c),m=new Image;m.onload=()=>{if(URL.revokeObjectURL(l),n!==this._image_generation)return;let h=document.createElement(`canvas`);h.width=e,h.height=i;let b=h.getContext(`2d`);if(!b){console.error(`Failed to get canvas context`);return}b.drawImage(m,0,0,e,i),this.map_image=h,this._renderMap()},m.onerror=()=>{URL.revokeObjectURL(l),console.error(`Failed to load map image`)},m.src=l}_preparedSvg(n,e){let i=this.map.raw_data,a=this._prepared_svg;if(a?.data===i&&a.width===n&&a.height===e)return a;let o=new DOMParser().parseFromString(i,`image/svg+xml`),r=o.querySelector(`svg`);if(!r)return null;if(!r.getAttribute(`viewBox`)){let l=parseFloat(r.getAttribute(`width`)||``),m=parseFloat(r.getAttribute(`height`)||``);l>0&&m>0&&r.setAttribute(`viewBox`,`0 0 ${l} ${m}`)}r.getAttribute(`viewBox`)&&(r.setAttribute(`width`,`${n}`),r.setAttribute(`height`,`${e}`)),r.appendChild(o.createComment(``));let s=new XMLSerializer().serializeToString(r),c=s.lastIndexOf(`</`);return this._prepared_svg={data:i,width:n,height:e,head:s.slice(0,c),tail:s.slice(c)},this._prepared_svg}_renderMap(){this._draw_frame_id===null&&(this._draw_frame_id=requestAnimationFrame(()=>{this._draw_frame_id=null,this._drawMap()}))}_drawMap(){if(!this.map_image)return;let n=this.debug?performance.now():0,e=this.container.clientWidth||1,i=this.container.clientHeight||1,a=window.devicePixelRatio||1;(this.canvas.width!==Math.round(e*a)||this.canvas.height!==Math.round(i*a))&&(this.canvas.width=Math.round(e*a),this.canvas.height=Math.round(i*a),this.canvas.style.width=`${e}px`,this.canvas.style.height=`${i}px`);let o=this._viewScale(),r=this.center.x-e/2/o.x,s=this.center.y-i/2/o.y,c=Math.max(0,r),l=Math.max(0,s),m=Math.min(1,r+e/o.x),h=Math.min(1,s+i/o.y);if(this._ctx.setTransform(a,0,0,a,0,0),this._ctx.clearRect(0,0,e,i),m>c&&h>l){this._ctx.imageSmoothingEnabled=!0,this._ctx.imageSmoothingQuality=`high`;let b=this.map_image.width,k=this.map_image.height;this._ctx.drawImage(this.map_image,c*b,l*k,(m-c)*b,(h-l)*k,(c-r)*o.x,(l-s)*o.y,(m-c)*o.x,(h-l)*o.y)}if(this.debug){this._drawDebugInfo(o,r,s);let b=performance.now();this.debug_info.last_draw_ms=b-n,this._debug_draw_count++,b-this._debug_count_start>=1e3&&(this.debug_info.draws_last_second=this._debug_draw_count,this._debug_draw_count=0,this._debug_count_start=b)}this._updateOverlayPositions()}_drawDebugInfo(n,e,i){if(!this.map)return;let a=this._ctx,o=this.container.clientWidth||1,r=this.container.clientHeight||1,s=h=>(h-e)*n.x,c=h=>(h-i)*n.y;a.strokeStyle=`#f0f`,a.lineWidth=2,a.strokeRect(s(0),c(0),n.x,n.y),a.strokeStyle=`rgba(0, 200, 255, 0.6)`,a.lineWidth=1;for(let[,h]of this.map.element_bounds){let b=s(h.x),k=c(h.y),J=h.w*n.x,$=h.h*n.y;b+J<0||k+$<0||b>o||k>r||a.strokeRect(b,k,J,$)}let l=this.debug_info.highlight_id||this.debug_info.hover_id,m=l?this.map.element_bounds.get(l):null;if(m){let h=s(m.x),b=c(m.y);a.fillStyle=`rgba(255, 0, 255, 0.25)`,a.fillRect(h,b,m.w*n.x,m.h*n.y);let k=`#${l}`;a.font=`12px monospace`,a.fillStyle=`rgba(0, 0, 0, 0.7)`,a.fillRect(h,b-16,a.measureText(k).width+8,16),a.fillStyle=`#fff`,a.fillText(k,h+4,b-4)}a.strokeStyle=`#f00`,a.lineWidth=1,a.beginPath(),a.moveTo(o/2-8,r/2),a.lineTo(o/2+8,r/2),a.moveTo(o/2,r/2-8),a.lineTo(o/2,r/2+8),a.stroke()}_updateOverlayPositions(){if(!this.map?.element_bounds)return;let n=this.container.clientWidth||1,e=this.container.clientHeight||1,i=this._viewScale(),a=c=>({x:(c.x-this.center.x)*i.x+n/2,y:(c.y-this.center.y)*i.y+e/2}),o=(c,l)=>{c.last_display!==l&&(c.last_display=l,c.element.style.display=l)},r=(c,l)=>{c.last_transform!==l&&(c.last_transform=l,c.element.style.transform=l)},s=(c,l,m)=>{let h=`${l} ${m}`;c.last_size!==h&&(c.last_size=h,c.element.style.width=l,c.element.style.height=m)};for(let c of this._overlay_instances){let{overlay:l$4}=c;if(l$4.min_zoom&&this.zoom<l$4.min_zoom){o(c,`none`);continue}let m;if(typeof l$4.ref==`string`){if(m=this.map.element_bounds.get(l$4.ref),!m){o(c,`none`);continue}}else m=l({w:0,h:0},l$4.ref);if(o(c,``),l$4.type===`box`&&m.w>0&&m.h>0){let h=a({x:m.x,y:m.y});r(c,`translate(${h.x}px, ${h.y}px)`),s(c,`${m.w*i.x}px`,`${m.h*i.y}px`)}else{let h=a({x:m.x+m.w/2,y:m.y+m.h/2});s(c,``,``),r(c,l$4.scale_with_zoom?`translate(${h.x}px, ${h.y}px) translate(-50%, -50%) scale(${this.zoom})`:`translate(${h.x}px, ${h.y}px) translate(-50%, -50%)`)}}}_handleActionEvent(n,e){if(!this.map_image||!this.map?.element_bounds||this._pan_exceeded_threshold)return;if(n===`click`&&this._action_pointerdown_pos){let l=e.clientX-this._action_pointerdown_pos.x,m=e.clientY-this._action_pointerdown_pos.y;if(Math.hypot(l,m)>5)return}let i=this._eventToMap(e);if(i.x<0||i.x>1||i.y<0||i.y>1)return;let a=null,o=Number.POSITIVE_INFINITY;for(let l of this._actions){if(!l.events.includes(n))continue;if(l.ref===`*`){a||(a=l);continue}let m=this.map.element_bounds.get(l.ref);if(!m||i.x<m.x||i.x>m.x+m.w||i.y<m.y||i.y>m.y+m.h)continue;let h=m.w*m.h;(!a||a.ref===`*`||(l.priority||0)>(a.priority||0)||(l.priority||0)===(a.priority||0)&&h<o)&&(a=l,o=h)}if(!a)return;let r=Date.now(),s=`${a.ref}:${n}`;r-(this._action_last_triggered.get(s)||0)<300||(this._action_last_triggered.set(s,r),a.callback(i))}_notifyViewChange(){!this.onViewChange||this._notify_frame_id!==null||(this._notify_frame_id=requestAnimationFrame(()=>{this._notify_frame_id=null,this.onViewChange?.({zoom:this.zoom,center:l({},this.center)})}))}};function bt(t,n){if(!t)return n;try{return JSON.parse(t)}catch{return n}}function pd(t){let n=!!t?.extension_data?.requires_manual_approval;return t?.approved!==!1?`pending`:n?`approval_required`:t.process_state===`wait_list`?`waitlist`:`pending`}function Zr(t){let n=t.other_data||{};return{id:t.id,map_id:t.map_id||n.map_id||``,level_id:t.zone_id,name:t.identifier||n.name||``,height:+(n.height||3),notes:t.notes||``,zones:t.zones||[t.zone_id].filter(e=>e),tags:t.tags||bt(n.tags,[]),images:bt(n.images,[]),lockers:[]}}function Jr(t,n){let e=t.other_data||{},i=t.parent_id||``,a=n.find(o=>o.id===i);return{id:t.id,bank_id:i,map_id:t.map_id||e.map_id,assigned_to:t.assigned_to||e.assigned_to,assigned_name:t.assigned_name||e.assigned_name,name:t.identifier||e.name||``,accessible:e.accessible===`true`,bookable:t.bookable!==!1,position:bt(e.position,[0,0]),size:bt(e.size,[1,1]),bank:a,zone:a?.zone,features:t.features||bt(e.features,[])}}var es=t=>`${(t.extension_data?.group_members||[]).find(i=>i?.email===t.asset_id)?.name||``}`.trim()||``;var ts=t=>`${((t.attendees||[]).find(i=>i?.email===t.asset_id)||t.attendees?.[0])?.name||``}`.trim()||``;var is=t=>{if(!t.includes(`@`))return t;let[n]=t.split(`@`),e=n.replace(/[._-]+/g,` `).replace(/\s+/g,` `).trim();return e?e.replace(/\b\w/g,i=>i.toUpperCase()):t};var _d=t=>{let n=`${t?.asset_id||``}`.trim(),e=es(t);if(e)return e;let i=ts(t);if(i)return i;let a=`${t?.extension_data?.visitor_name||t?.asset_name||``}`.trim(),o=[`${t?.title||``}`.trim().toLowerCase(),`${t?.description||``}`.trim().toLowerCase()].filter(r=>!!r);return a&&a.toLowerCase()!==n.toLowerCase()&&!o.includes(a.toLowerCase())?a:is(n||a||`Visitor`)};function fd(t,n,e=!1){let i=``,a=``;if(t instanceof co$1){i=t.booking_type===`visitor`?t.extension_data?.location||``:t.location||t.asset_name||``,i.startsWith(`unallocated`)&&(i=``),e&&t.booking_type===`parking`&&(i=``);let o=n.levelWithID(t.zones);a=o?.display_name||o?.name||``}else{i=t.location||t.space?.display_name||t.space?.name||t.system?.name||``;let o=n.levelWithID([...t.system?.zones||[]]);a=t.space?.level?.display_name||t.space?.level?.name||o?.display_name||o?.name||``}return i&&a?`${i} - ${a}`:i||a||``}async function gd(t,n,e=[]){let i=await go(t),a=c=>{let l=i.element_bounds.get(c);return l?{x:l.x+l.w/2,y:l.y+l.h/2}:null},o=(typeof n==`string`?a(n):n)||{x:.5,y:.5},r=10,s=``;for(let c of e){let{x:l,y:m}=a(c)||{x:2,y:2},h=Math.sqrt((l-o.x)*(l-o.x)+(m-o.y)*(m-o.y));h<r&&(r=h,s=c)}return s}function bd(t){let n=t.date||t.event_start*1e3,e=t.duration??(t.event_end-t.event_start)/60,i=t.recurrence?.pattern?_f(df(t.recurrence),n):{},a=[t.system,...t.resources||[]].filter(s=>!!s?.id),{system_id:o}=t,r=zh([...a.map(s=>s.id),o].filter(s=>!!s));return new co$1(m(l({id:t.id,user_id:t.organiser?.id||t.host,user_email:t.host,user_name:t.organiser?.name||t.host,title:t.title||void 0,date:n,duration:e,all_day:t.all_day,timezone:t.timezone,asset_id:r[0],asset_ids:r,asset_name:t.system?.display_name||t.system?.name,zones:zh(a.flatMap(s=>s.zones||[])),booking_type:`room`,approved:t.status===`approved`},i),{extension_data:l({},t)}))}async function ns(t,n){if(!n)return[];let i=(await no([n]).catch(()=>[])).map(Zr);for(let a of i)a.zone=t.levelWithID(a.zones||[]);return i}async function as(t,n,e){if(!n)return[];let a=(await ao([n]).catch(()=>[])).map(o=>Jr(o,e));for(let o of e){let r=m(l({},o),{lockers:[]});o.lockers=a.filter(s=>s.bank_id===o.id).map(s=>m(l({},s),{bank:r}))}return a.filter(o=>o.bank)}async function yd(t,n){return as(t,n,await ns(t,n))}var yt=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new ne;bulk={select:n=>this._select(n),deselect:n=>this._deselect(n),setSelection:n=>this._setSelection(n)};constructor(n=!1,e,i=!0,a){this._multiple=n,this._emitChanges=i,this.compareWith=a,e&&e.length&&(n?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){return this._select(n)}deselect(...n){return this._deselect(n)}setSelection(...n){return this._setSelection(n)}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_select(n){this._verifyValueAssignment(n),n.forEach(i=>this._markSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(n){this._verifyValueAssignment(n),n.forEach(i=>this._unmarkSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(n){this._verifyValueAssignment(n);let e=this.selected,i=new Set(n.map(o=>this._getConcreteValue(o)));n.forEach(o=>this._markSelected(o)),e.filter(o=>!i.has(this._getConcreteValue(o,i))).forEach(o=>this._unmarkSelected(o));let a=this._hasQueuedChanges();return this._emitChangeEvent(),a}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let i of e)if(this.compareWith(n,i))return i;return n}else return n}};var Yi=(()=>{class t{_listeners=[];notify(e,i){for(let a of this._listeners)a(e,i)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(i=>e!==i)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(i){return new(i||t)};static ɵprov=tn$1({token:t,factory:t.ɵfac})}return t})();var cs=[`trigger`];var ls=[`panel`];var ds=[[[`mat-select-trigger`]],`*`];var ms=[`mat-select-trigger`,`*`];function hs(t,n){if(t&1&&(Hs(0,`span`,4),PT(1),Wl()),t&2){let e=oT();Cw(),ry(e.placeholder)}}function us(t,n){t&1&&aT(0)}function ps(t,n){if(t&1&&(Hs(0,`span`,11),PT(1),Wl()),t&2){let e=oT(2);Cw(),ry(e.triggerValue)}}function _s(t,n){if(t&1&&(Hs(0,`span`,5),Hb(1,us,1,0)(2,ps,2,1,`span`,11),Wl()),t&2){let e=oT();Cw(),Ub(e.customTrigger?1:2)}}function fs(t,n){if(t&1){let e=Xb();Hs(0,`div`,12,1),Pm(`keydown`,function(a){ip(e);return sp(oT()._handleKeydown(a))}),aT(2,1),Wl()}if(t&2){let e=oT();ST(e.panelClass),Ym(`mat-select-panel-animations-enabled`,!e._animationsDisabled)(`mat-primary`,e._parentFormField?.color===`primary`)(`mat-accent`,e._parentFormField?.color===`accent`)(`mat-warn`,e._parentFormField?.color===`warn`)(`mat-undefined`,!e._parentFormField?.color),Sm(`id`,e.id+`-panel`)(`aria-multiselectable`,e.multiple)(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e._getPanelAriaLabelledby())}}var gs=new T(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let t=E(fe$1);return()=>It$1(t)}});var bs=new T(`MAT_SELECT_CONFIG`);var xo=new T(`MatSelectTrigger`);var Zi=class{source;value;constructor(n,e){this.source=n,this.value=e}};var nm=(()=>{class t{_viewportRuler=E(A$1);_changeDetectorRef=E(md);_elementRef=E(nn$1);_dir=E(V$1,{optional:!0});_idGenerator=E(ae);_renderer=E(Sr$1);_parentFormField=E(le$2,{optional:!0});ngControl=E(ne$1,{self:!0,optional:!0});_liveAnnouncer=E(kt);_defaultOptions=E(bs,{optional:!0});_animationsDisabled=De$1();_popoverLocation;_initialized=new ne;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let i=this.options.toArray()[e];if(i){let a=this.panel.nativeElement,o=Te(e,this.options,this.optionGroups),r=i._getHostElement();e===0&&o===1?a.scrollTop=0:a.scrollTop=Oe$2(r.offsetTop,r.offsetHeight,a.scrollTop,a.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Zi(this,e)}_scrollStrategyFactory=E(gs);_panelOpen=!1;_compareWith=(e,i)=>e===i;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new ne;_errorStateTracker;stateChanges=new ne;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=pt$1(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(un.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=nD(()=>{let e=this.options;return e?e.changes.pipe(ID(e),wD(()=>iD(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(wD(()=>this.optionSelectionChanges))});openedChange=new _t$1;_openedStream=this.openedChange.pipe(Zr$1(e=>e),et$1(()=>{}));_closedStream=this.openedChange.pipe(Zr$1(e=>!e),et$1(()=>{}));selectionChange=new _t$1;valueChange=new _t$1;constructor(){let e=E(me),i=E(gl,{optional:!0}),a=E(bl,{optional:!0}),o=E(new Ey(`tabindex`),{optional:!0}),r=E(Ht,{optional:!0}),s=E(Et$1,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new J$1(e,s||this.ngControl,a,i,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=r?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new yt(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(kv(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(kv(this._destroy)).subscribe(e=>{e.added.forEach(i=>i.select()),e.removed.forEach(i=>i.deselect())}),this.options.changes.pipe(ID(null),kv(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),i=this.ngControl;if(e!==this._triggerAriaLabelledBy){let a=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?a.setAttribute(`aria-labelledby`,e):a.removeAttribute(`aria-labelledby`)}i&&(this._previousControl!==i.control&&(this._previousControl!==void 0&&i.disabled!==null&&i.disabled!==this.disabled&&(this.disabled=i.disabled),this._previousControl=i.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(tr$1(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{i(),clearTimeout(a),this._cleanupDetach=void 0};let e=this.panel.nativeElement,i=this._renderer.listen(e,`animationend`,o=>{o.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),a=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(i=>i.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let i=e.keyCode,a=i===40||i===38||i===37||i===39,o=i===13||i===32,r=this._keyManager;if(!r.isTyping()&&o&&!rt(e)||(this.multiple||e.altKey)&&a)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;r.onKeydown(e);let c=this.selected;c&&s!==c&&this._liveAnnouncer.announce(c.viewValue,1e4)}}_handleOpenKeydown(e){let i=this._keyManager,a=e.keyCode,o=a===40||a===38,r=i.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!r&&(a===13||a===32)&&i.activeItem&&!rt(e))e.preventDefault(),i.activeItem._selectViaInteraction();else if(!r&&this._multiple&&a===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(c=>!c.disabled&&!c.selected);this.options.forEach(c=>{c.disabled||(s?c.select():c.deselect())})}else{let s=i.activeItemIndex;i.onKeydown(e),this._multiple&&o&&e.shiftKey&&i.activeItem&&i.activeItemIndex!==s&&i.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!rt(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(i=>i.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(i=>this._selectOptionByValue(i)),this._sortValues();else{let i=this._selectOptionByValue(e);i?this._keyManager.updateActiveItem(i):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let i=this.options.find(a=>{if(this._selectionModel.isSelected(a))return!1;try{return(a.value!=null||this.canSelectNullableOptions)&&this._compareWith(a.value,e)}catch{return!1}});return i&&this._selectionModel.select(i),i}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof zt?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new ce(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=iD(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(kv(e)).subscribe(i=>{this._onSelect(i.source,i.isUserInput),i.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),iD(...this.options.map(i=>i._stateChanges)).pipe(kv(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,i){let a=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(a!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),i&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),i&&this.focus())),a!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((i,a)=>this.sortComparator?this.sortComparator(i,a,e):e.indexOf(i)-e.indexOf(a)),this.stateChanges.next()}}_propagateChanges(e){let i;this.multiple?i=this.selected.map(a=>a.value):i=this.selected?this.selected.value:e,this._value=i,this.valueChange.emit(i),this._onChange(i),this.selectionChange.emit(this._getChangeEvent(i)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let i=0;i<this.options.length;i++)if(!this.options.get(i).disabled){e=i;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,i=e?e+` `:``;return this.ariaLabelledby?i+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute(`aria-describedby`,e.join(` `)):i.removeAttribute(`aria-describedby`)}onContainerClick(e){let i=v$1(e);i&&(i.tagName===`MAT-OPTION`||i.classList.contains(`cdk-overlay-backdrop`)||i.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(i){return new(i||t)};static ɵcmp=YC({type:t,selectors:[[`mat-select`]],contentQueries:function(i,a,o){if(i&1&&Vm(o,xo,5)(o,X,5)(o,ce$1,5),i&2){let r;uT(r=lT())&&(a.customTrigger=r.first),uT(r=lT())&&(a.options=r),uT(r=lT())&&(a.optionGroups=r)}},viewQuery:function(i,a){if(i&1&&Hm(cs,5)(ls,5)(ci$1,5),i&2){let o;uT(o=lT())&&(a.trigger=o.first),uT(o=lT())&&(a.panel=o.first),uT(o=lT())&&(a._overlayDir=o.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(i,a){i&1&&Pm(`keydown`,function(r){return a._handleKeydown(r)})(`focus`,function(){return a._onFocus()})(`blur`,function(){return a._onBlur()}),i&2&&(Sm(`id`,a.id)(`tabindex`,a.disabled?-1:a.tabIndex)(`aria-controls`,a.panelOpen?a.id+`-panel`:null)(`aria-expanded`,a.panelOpen)(`aria-label`,a.ariaLabel||null)(`aria-required`,a.required.toString())(`aria-disabled`,a.disabled.toString())(`aria-invalid`,a.errorState)(`aria-activedescendant`,a._getAriaActiveDescendant()),Ym(`mat-mdc-select-disabled`,a.disabled)(`mat-mdc-select-invalid`,a.errorState)(`mat-mdc-select-required`,a.required)(`mat-mdc-select-empty`,a.empty)(`mat-mdc-select-multiple`,a.multiple)(`mat-select-open`,a.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,z_],disableRipple:[2,`disableRipple`,`disableRipple`,z_],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:W_(e)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,z_],placeholder:`placeholder`,required:[2,`required`,`required`,z_],multiple:[2,`multiple`,`multiple`,z_],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,z_],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,W_],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,z_]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[ZT([{provide:ae$1,useExisting:t},{provide:le$1,useExisting:t}]),$s],ngContentSelectors:ms,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(i,a){if(i&1&&(sT(ds),Hs(0,`div`,2,0),Pm(`click`,function(){return a.open()}),Hs(3,`div`,3),Hb(4,hs,2,1,`span`,4)(5,_s,3,1,`span`,5),Wl(),Hs(6,`div`,6)(7,`div`,7),yp(),Hs(8,`svg`,8),Nm(9,`path`,9),Wl()()()(),mm(10,fs,3,16,`ng-template`,10),Pm(`detach`,function(){return a.close()})(`backdropClick`,function(){return a.close()})(`overlayKeydown`,function(r){return a._handleOverlayKeydown(r)})),i&2){let o=fT(1);Cw(3),Sm(`id`,a._valueId),Cw(),Ub(a.empty?4:5),Cw(6),Mm(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,a._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,a._scrollStrategy)(`cdkConnectedOverlayOrigin`,a._preferredOverlayOrigin||o)(`cdkConnectedOverlayPositions`,a._positions)(`cdkConnectedOverlayWidth`,a._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,a._popoverLocation)}},dependencies:[zt,ci$1],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})}return t})();var am=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵdir=Ho$1({type:t,selectors:[[`mat-select-trigger`]],features:[ZT([{provide:xo,useExisting:t}])]})}return t})();var om=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=oa({type:t});static ɵinj=io$1({imports:[di$1,He,be$1,Vt,de,He]})}return t})();var ys=[`input`];var vs=[`*`];var Ji={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var ks=new T(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>Ji});var z=(function(t){return t[t.Init=0]=`Init`,t[t.Checked=1]=`Checked`,t[t.Unchecked=2]=`Unchecked`,t[t.Indeterminate=3]=`Indeterminate`,t})(z||{});var en=class{source;checked};var tn=(()=>{class t{_elementRef=E(nn$1);_changeDetectorRef=E(md);_ngZone=E(Ee);_animationsDisabled=De$1();_options=E(ks,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let i=new en;return i.source=this,i.checked=e,i}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new _t$1;indeterminateChange=new _t$1;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=z.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){E(T$1).load(as$1);let e=E(new Ey(`tabindex`),{optional:!0});this._options=this._options||Ji,this.color=this._options.color||Ji.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=E(ae).getId(`mat-mdc-checkbox-`),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let i=e!=this._indeterminate();this._indeterminate.set(e),i&&(e?this._transitionCheckState(z.Indeterminate):this._transitionCheckState(this.checked?z.Checked:z.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=pt$1(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let i=this._currentCheckState,a=this._getAnimationTargetElement();if(!(i===e||!a)&&(this._currentAnimationClass&&a.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(i,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){a.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{a.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!==`noop`?(this.indeterminate&&e!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?z.Checked:z.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,i){if(this._animationsDisabled)return``;switch(e){case z.Init:if(i===z.Checked)return this._animationClasses.uncheckedToChecked;if(i==z.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case z.Unchecked:return i===z.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case z.Checked:return i===z.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case z.Indeterminate:return i===z.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(e){let i=this._inputElement;i&&(i.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static ɵfac=function(i){return new(i||t)};static ɵcmp=YC({type:t,selectors:[[`mat-checkbox`]],viewQuery:function(i,a){if(i&1&&Hm(ys,5),i&2){let o;uT(o=lT())&&(a._inputElement=o.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(i,a){i&2&&(Fm(`id`,a.id),Sm(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),ST(a.color?`mat-`+a.color:`mat-accent`),Ym(`_mat-animation-noopable`,a._animationsDisabled)(`mdc-checkbox--disabled`,a.disabled)(`mat-mdc-checkbox-disabled`,a.disabled)(`mat-mdc-checkbox-checked`,a.checked)(`mat-mdc-checkbox-disabled-interactive`,a.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,z_],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,z_],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,z_],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?void 0:W_(e)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,z_],checked:[2,`checked`,`checked`,z_],disabled:[2,`disabled`,`disabled`,z_],indeterminate:[2,`indeterminate`,`indeterminate`,z_]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[ZT([{provide:re$1,useExisting:Gi$1(()=>t),multi:!0},{provide:xe,useExisting:t,multi:!0}]),$s],ngContentSelectors:vs,decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(i,a){if(i&1&&(sT(),Hs(0,`label`,3),Pm(`click`,function(r){return a._preventBubblingFromLabel(r)}),Hs(1,`span`,4,0),Nm(3,`span`,5),Hs(4,`input`,6,1),Pm(`blur`,function(){return a._onBlur()})(`click`,function(){return a._onInputClick()})(`change`,function(r){return a._onInteractionEvent(r)}),Wl(),Nm(6,`span`,7),Hs(7,`span`,8),yp(),Hs(8,`svg`,9),Nm(9,`path`,10),Wl(),vp(),Nm(10,`span`,11),Wl(),Nm(11,`span`,12),Wl(),Hs(12,`span`,13,2),aT(14),Wl()()),i&2){let o=fT(2);Mm(`labelPosition`,a.labelPosition)(`for`,a.inputId),Cw(4),Ym(`mdc-checkbox--selected`,a.checked),Mm(`checked`,a.checked)(`indeterminate`,a.indeterminate)(`disabled`,a.disabled&&!a.disabledInteractive)(`id`,a.inputId)(`required`,a.required)(`tabIndex`,a.disabled&&!a.disabledInteractive?-1:a.tabIndex),Sm(`aria-label`,a.ariaLabel||null)(`aria-labelledby`,a.ariaLabelledby)(`aria-describedby`,a.ariaDescribedby)(`aria-checked`,a.indeterminate?`mixed`:null)(`aria-controls`,a.ariaControls)(`aria-disabled`,a.disabled&&a.disabledInteractive?!0:null)(`aria-expanded`,a.ariaExpanded)(`aria-owns`,a.ariaOwns)(`name`,a.name)(`value`,a.value),Cw(7),Mm(`matRippleTrigger`,o)(`matRippleDisabled`,a.disableRipple||a.disabled)(`matRippleCentered`,!0)}},dependencies:[ss$1,Ue],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-checkbox-state-layer-size, 40px);
  height: var(--%NS%mat-checkbox-state-layer-size, 40px);
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--%NS%mat-checkbox-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--%NS%mat-checkbox-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-checkbox-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-checkbox-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-checkbox-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-checkbox-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-checkbox-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
  color: var(--%NS%mat-checkbox-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
    color: GrayText;
  }
}
.mat-mdc-checkbox .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-checkbox-touch-target-size, 48px);
  width: var(--%NS%mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return t})();var Co=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=oa({type:t});static ɵinj=io$1({imports:[tn,be$1]})}return t})();var Cs=[`*`];function ws(t,n){if(t&1&&(Hs(0,`div`,3),PT(1),Wl()),t&2){let e=oT();Cw(),ry(e.info())}}function Ss(t,n){if(t&1&&(Hs(0,`icon`,4),PT(1,`info`),Wl()),t&2)Mm(`matTooltip`,oT().info())}function Ms(t,n){t&1&&Nm(0,`div`,5)}function Es(t,n){if(t&1&&(Hs(0,`div`,6)(1,`div`,8)(2,`div`,9)(3,`icon`,10),PT(4),Wl()()()()),t&2){let e=oT();Cw(),Ym(`bg-base-200`,!e.value())(`bg-info`,e.value())(`border-info!`,e.value()),Cw(),Ym(`left-1`,!e.value())(`left-5`,e.value())(`bg-base-400`,!e.value())(`bg-info-light`,e.value()),Cw(2),ry(e.value()?`done`:`remove`)}}function As(t,n){if(t&1){let e=Xb();Hs(0,`mat-checkbox`,11),Pm(`ngModelChange`,function(a){ip(e);return sp(oT().setValue(a))}),Wl(),aC()}if(t&2){let e=oT();Mm(`tabIndex`,-1)(`ngModel`,e.value()),uC()}}var Om=(()=>{class t{constructor(){this.toggle=hH(void 0),this.label=hH(void 0),this.info=hH(void 0),this.inline=hH(!0),this.value=pt$1(void 0),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e}setValue(e){this.value.set(e),this._onChange&&this._onChange(e)}writeValue(e){this.value.set(e)}static{this.ɵfac=function(i){return new(i||t)}}static{this.ɵcmp=YC({type:t,selectors:[[`settings-toggle`]],inputs:{toggle:[1,`toggle`],label:[1,`label`],info:[1,`info`],inline:[1,`inline`]},features:[ZT([Hf(()=>t)])],ngContentSelectors:Cs,decls:11,vars:16,consts:[[`type`,`button`,`matRipple`,``,1,`hover:bg-base-200`,`relative`,`flex`,`flex-1`,`items-center`,`space-x-2`,`overflow-hidden`,`rounded-sm`,`border`,`py-1`,`pr-1`,`pl-2`,3,`click`],[1,`z-10`,`flex`,`flex-1`,`items-center`,`space-x-2`,`px-2`,`text-left`],[1,`flex`,`h-full`,`w-full`,`flex-col`,`justify-center`,`leading-none`],[1,`text-xs`,`opacity-70`],[`aria-hidden`,`true`,3,`matTooltip`],[1,`bg-info`,`absolute`,`inset-0`,`z-0`,`m-0!`,`opacity-10`],[1,`px-2`],[`aria-hidden`,`true`,1,`pointer-events-none`,3,`tabIndex`,`ngModel`],[`toggle`,``,1,`border-base-400`,`relative`,`h-8`,`w-12`,`rounded-full`,`border-2`],[1,`absolute`,`top-1/2`,`flex`,`h-6`,`w-6`,`-translate-x-0.5`,`-translate-y-1/2`,`items-center`,`justify-center`,`rounded-full`,`text-black`,`shadow-sm`],[`aria-hidden`,`true`],[`aria-hidden`,`true`,1,`pointer-events-none`,3,`ngModelChange`,`tabIndex`,`ngModel`]],template:function(i,a){i&1&&(sT(),Hs(0,`button`,0),Pm(`click`,function(){return a.setValue(!a.value())}),Hs(1,`div`,1)(2,`div`,2)(3,`div`),PT(4),aT(5),Wl(),Hb(6,ws,2,1,`div`,3),Wl(),Hb(7,Ss,2,1,`icon`,4),Wl(),Hb(8,Ms,1,0,`div`,5),Hb(9,Es,5,15,`div`,6)(10,As,1,2,`mat-checkbox`,7),Wl()),i&2&&(Ym(`border-base-300`,!a.value())(`border-info`,a.value()),Sm(`role`,a.toggle()?`switch`:`checkbox`)(`aria-checked`,!!a.value())(`aria-description`,a.inline()?null:a.info()),Cw(),Ym(`py-2`,!a.inline())(`py-1`,a.inline()),Cw(3),ry(a.label()),Cw(2),Ub(a.info()&&a.inline()?6:-1),Cw(),Ub(a.info()&&!a.inline()?7:-1),Cw(),Ub(a.value()?8:-1),Cw(),Ub(a.toggle()?9:10))},dependencies:[Co,tn,kh$1,Ah,Cl$1,O,Yt,mt$1],styles:[`[_nghost-%COMP%]{display:flex}[toggle][_ngcontent-%COMP%]{transition:background .2s,left .2s}
/*# sourceMappingURL=settings-toggle.component.css.map */`]})}}return t})();var Ds=[`input`];var Is=[`formField`];var Os=[`*`];var ci=class{source;value;constructor(n,e){this.source=n,this.value=e}};var Ns={provide:re$1,useExisting:Gi$1(()=>Rs),multi:!0};var wo=new T(`MatRadioGroup`);var Ts=new T(`mat-radio-default-options`,{providedIn:`root`,factory:()=>({color:`accent`,disabledInteractive:!1})});var Rs=(()=>{class t{_changeDetector=E(md);_value=null;_name=E(ae).getId(`mat-radio-group-`);_selected=null;_isInitialized=!1;_labelPosition=`after`;_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new _t$1;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e===`before`?`before`:`after`,this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(i=>{i.checked=this.value===i.value,i.checked&&(this._selected=i)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new ci(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static ɵfac=function(i){return new(i||t)};static ɵdir=Ho$1({type:t,selectors:[[`mat-radio-group`]],contentQueries:function(i,a,o){if(i&1&&Vm(o,So,5),i&2){let r;uT(r=lT())&&(a._radios=r)}},hostAttrs:[`role`,`radiogroup`,1,`mat-mdc-radio-group`],inputs:{color:`color`,name:`name`,labelPosition:`labelPosition`,value:`value`,selected:`selected`,disabled:[2,`disabled`,`disabled`,z_],required:[2,`required`,`required`,z_],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,z_]},outputs:{change:`change`},exportAs:[`matRadioGroup`],features:[ZT([Ns,{provide:wo,useExisting:t}])]})}return t})();var So=(()=>{class t{_elementRef=E(nn$1);_changeDetector=E(md);_focusMonitor=E(Et);_radioDispatcher=E(Yi);_defaultOptions=E(Ts,{optional:!0});_ngZone=E(Ee);_renderer=E(Sr$1);_uniqueId=E(ae).getId(`mat-radio-`);_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||`after`}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||`accent`}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new _t$1;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=De$1();_injector=E(fe$1);constructor(){E(T$1).load(as$1);let e=E(wo,{optional:!0}),i=E(new Ey(`tabindex`),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,i&&(this.tabIndex=W_(i,0))}focus(e,i){i?this._focusMonitor.focusVia(this._inputElement,i,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,i)=>{e!==this.id&&i===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,`click`,this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new ci(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let i=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),i&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,i;if(!e||!e.selected||this.disabled?i=this.tabIndex:i=e.selected===this?this.tabIndex:-1,i!==this._previousTabIndex){let a=this._inputElement?.nativeElement;a&&(a.setAttribute(`tabindex`,i+``),this._previousTabIndex=i,XI(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===a&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===a&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static ɵfac=function(i){return new(i||t)};static ɵcmp=YC({type:t,selectors:[[`mat-radio-button`]],viewQuery:function(i,a){if(i&1&&Hm(Ds,5)(Is,7,nn$1),i&2){let o;uT(o=lT())&&(a._inputElement=o.first),uT(o=lT())&&(a._rippleTrigger=o.first)}},hostAttrs:[1,`mat-mdc-radio-button`],hostVars:19,hostBindings:function(i,a){i&1&&Pm(`focus`,function(){return a._inputElement.nativeElement.focus()}),i&2&&(Sm(`id`,a.id)(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null),Ym(`mat-primary`,a.color===`primary`)(`mat-accent`,a.color===`accent`)(`mat-warn`,a.color===`warn`)(`mat-mdc-radio-checked`,a.checked)(`mat-mdc-radio-disabled`,a.disabled)(`mat-mdc-radio-disabled-interactive`,a.disabledInteractive)(`_mat-animation-noopable`,a._noopAnimations))},inputs:{id:`id`,name:`name`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],disableRipple:[2,`disableRipple`,`disableRipple`,z_],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:W_(e)],checked:[2,`checked`,`checked`,z_],value:`value`,labelPosition:`labelPosition`,disabled:[2,`disabled`,`disabled`,z_],required:[2,`required`,`required`,z_],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,z_]},outputs:{change:`change`},exportAs:[`matRadioButton`],ngContentSelectors:Os,decls:13,vars:17,consts:[[`formField`,``],[`input`,``],[`mat-internal-form-field`,``,3,`labelPosition`,`for`],[1,`mdc-radio`],[1,`mat-mdc-radio-touch-target`],[`type`,`radio`,`aria-invalid`,`false`,1,`mdc-radio__native-control`,3,`change`,`id`,`checked`,`disabled`,`required`],[`aria-hidden`,`true`,1,`mdc-radio__background`],[1,`mdc-radio__outer-circle`],[1,`mdc-radio__inner-circle`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-radio-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-ripple-element`,`mat-radio-persistent-ripple`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(i,a){i&1&&(sT(),Hs(0,`label`,2,0)(2,`span`,3),Nm(3,`span`,4),Hs(4,`input`,5,1),Pm(`change`,function(r){return a._onInputInteraction(r)}),Wl(),Hs(6,`span`,6),Nm(7,`span`,7)(8,`span`,8),Wl(),Hs(9,`span`,9),Nm(10,`span`,10),Wl()(),Hs(11,`span`,11),aT(12),Wl()()),i&2&&(Mm(`labelPosition`,a.labelPosition)(`for`,a.inputId),Cw(2),Ym(`mdc-radio--disabled`,a.disabled),Cw(2),Mm(`id`,a.inputId)(`checked`,a.checked)(`disabled`,a.disabled&&!a.disabledInteractive)(`required`,a.required),Sm(`name`,a.name)(`value`,a.value)(`aria-label`,a.ariaLabel)(`aria-labelledby`,a.ariaLabelledby)(`aria-describedby`,a.ariaDescribedby)(`aria-disabled`,a.disabled&&a.disabledInteractive?`true`:null),Cw(5),Mm(`matRippleTrigger`,a._rippleTrigger.nativeElement)(`matRippleDisabled`,a._isRippleDisabled())(`matRippleCentered`,!0))},dependencies:[ss$1,Ue],styles:[`.mat-mdc-radio-button {
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
`],encapsulation:2})}return t})();var Zm=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=oa({type:t});static ɵinj=io$1({imports:[us$2,So,be$1]})}return t})();function Mo(t){let n={};return(e,i=!1)=>e?((!n[e]||i)&&(n[e]=es$1(e,t).then(a=>a.details instanceof Array?a.details:[]).catch(()=>[])),n[e]):Promise.resolve([])}var Eo=Mo(`assets_config`);function Ao(t,n,e){let i=Date.now(),a=new Date(e.date),o=s=>t.name===s.name||t.category?.name.includes(s.name)||e.resources?.some(c=>c.zones?.includes(s.name))||e.space?.zones?.includes(s.name)||s.name===`*`,r=s=>s.rules.reduce((c,l)=>{switch(l[0]){case`is_before`:return c+(S(i,Bi(a,l[1]))?1:0);case`within_hours`:return c+(we$1(i,Bi(a,l[1]))?1:0);case`after_hour`:return c+(we$1(a,d(a,l[1]))?1:0);case`before_hour`:return c+(S(a,d(a,l[1]))?1:0);case`min_length`:return c+(e.duration>=$l(l[1])?1:0);case`max_length`:return c+(e.duration<=$l(l[1])?1:0);case`visitor_type`:return c+(e.ext(`visitor_type`)===l[1]?1:0);default:return c+1}},0);for(let s of n)if(o(s)&&r(s)<s.rules.length)return!1;return!0}function Do(t,n){return Array.from(new Set([...Object.keys(t),...Object.keys(n)])).every(i=>Object.is(t[i],n[i]))}var ph=(()=>{class t{constructor(){this._org=E(ke),this._settings_service=E(P),this._injector=E(fe$1),this._options=pt$1({date:Date.now()}),this._search=pt$1(``),this._category=pt$1([]),this._loading=pt$1(``),this._rules=pt$1([]),this._available_groups=pt$1([]),this._category_list=pt$1([]),this._settings=pt$1({}),this._network_requested=!1,this._network_consumed=pt$1(!1),this._category_list_request=null,this._available_group_requests=new Map,this._settings_requests=new Map,this._options_debounced=CH(this._options,300,{injector:this._injector,equal:Do}),this._requests_ready=_e(()=>{let e=this._org.active_building(),i=this._settings_service.overrides();return this._network_consumed()&&this._assetsEnabled()&&this._org.initialised()&&!!e?.id&&i.length>=(this._org.settings?.length||0)+2}),this.search=this._search.asReadonly(),this.category=this._category.asReadonly(),this.options=this._options.asReadonly(),this.loading=this._loading.asReadonly(),this.rules=_e(()=>(this._requestNetwork(),this._rules())),this.available_groups=_e(()=>(this._requestNetwork(),this._available_groups())),this.category_list=_e(()=>(this._requestNetwork(),this._category_list())),this.visible_category_ids=_e(()=>this._category_list().map(e=>e.id)),this.filtered_assets=_e(()=>{this._requestNetwork();let e=this._search().toLowerCase(),i=this._category(),a=this.visible_category_ids(),o=this._available_groups(),r=this._rules();return o.filter(s=>s.assets?.length&&a.includes(s.category_id)&&(!i.length||i.includes(s.category_id))&&(s.name.toLowerCase().includes(e)||s.description.toLowerCase().includes(e))&&Ao(s,r,this._options()))}),this.settings=_e(()=>(this._requestNetwork(),this._settings())),this.disabled_rooms=_e(()=>(this._requestNetwork(),this._settings().disabled_rooms||[])),hs$1(()=>{let e=this._options_debounced.value(),i=this._org.active_building();!this._requests_ready()||!i?.id||!e||re(()=>{this._loadRules(e,i.id),this._loadAvailableGroups(e,i.id),this._loadSettings(i.id),this._loadCategories()})}),hs$1(()=>{let e=this.visible_category_ids(),i=this._category(),a=i.filter(o=>e.includes(o));a.length!==i.length&&this._category.set(a)})}_requestNetwork(){this._network_requested||(this._network_requested=!0,queueMicrotask(()=>this._network_consumed.set(!0)))}_assetsEnabled(){return this._settings_service.get(`app.has_assets`)!==!1}setSearch(e){this._search.set(`${e}`)}toggleCategory(e){let i=re(this._category);i.includes(e)?this._category.set(i.filter(a=>a!==e)):this._category.set([...i,e])}getOptions(){return this._options()}setOptions(e){let i=re(this._options),a=l(l({},i),e);Do(i,a)||this._options.set(a)}_appendLoading(e){this._loading.set(this._loading()+e)}_removeLoading(e){this._loading.set(this._loading().split(e).join(``))}async _loadRules(e,i){let a=e.zone||e.zone_id||i||``;this._appendLoading(`[Rules]`),this._rules.set(await Eo(a)),this._removeLoading(`[Rules]`)}async _loadAvailableGroups({zone:e,zone_id:i,date:a,duration:o,ignore:r},s){let c={zones:e||i||s||``,period_start:_(Zn(a)),period_end:_(Ha(dt(a,o||30))),type:`asset-request`,rejected:!1},l=JSON.stringify({query:c,ignore:r}),m=this._available_group_requests.get(l),h=m||Hi(c,r).catch(J=>(console.error(J),[]));m||this._available_group_requests.set(l,h),this._appendLoading(`[Availability]`);let b=await h;this._removeLoading(`[Availability]`),h.finally(()=>this._available_group_requests.delete(l));let k=b.sort((J,$)=>J.name.localeCompare($.name));this._available_groups.set(k)}async _loadCategories(){return this._category_list_request?this._category_list_request:(this._category_list_request=to().then(e=>(this._category_list.set(e.data.sort((i,a)=>i.name.localeCompare(a.name)).filter(i=>!i.hidden)),e)).finally(()=>this._category_list_request=null),this._category_list_request)}async _loadSettings(e){let i=this._settings_requests.get(e),a=i||es$1(e,`assets-settings`).then(o=>o.details||{}).catch(()=>({}));i||this._settings_requests.set(e,a),this._settings.set(await a),a.finally(()=>this._settings_requests.delete(e))}static{this.ɵfac=function(i){return new(i||t)}}static{this.ɵprov=A({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();var kh=(()=>{class t extends ot{constructor(){super(),this._org=E(ke),this._settings=E(P),this._calendars=pt$1([]),this._calendars_request=null,this.calendar_list=this._calendars.asReadonly(),this.query=()=>zi(),this.freeBusy=e=>ai(e,this._org),this.availability=e=>ni(e),this._waitForOrg()}async init(){this._settings.get(`app.events.use_bookings`)||this._initialised.next(!0)}get calendars(){return this._calendars()}async loadCalendars(){this._calendars().length||(this._calendars_request=this._calendars_request||zi().then(e=>this._calendars.set(e)).catch(e=>{xt(`CalendarService`,`Failed to load calendars`,e,`warn`)}).finally(()=>this._calendars_request=null),await this._calendars_request)}_waitForOrg(){let e=()=>{if(this._org.initialised())return this.init();this.timeout(`init`,e,100)};e()}static{this.ɵfac=function(i){return new(i||t)}}static{this.ɵprov=A({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();function di(t){let n=Sh$1(t,`UTC`);return`${As$1(n,`yyyyMMdd`)}T${As$1(n,`HHmmss`)}Z`}function nn(t){return`${As$1(t,`yyyyMMdd`)}`}function li(t){return(t||``).replace(/\\|;|,|\n/g,n=>{switch(n){case`\\`:return`\\\\`;case`;`:return`\\;`;case`,`:return`\\,`;case`
`:return`\\n`;default:return n}})}function Sh(t){if(!t)return`data:text/calendar;charset=utf8,`;let n=[],e=li(`${t.body||``}${t.id?`

[ID|`+t.id+`]`:``}`),i=li(`${t.location}`);n.push([`BEGIN`,`VCALENDAR`]),n.push([`VERSION`,`2.0`]),n.push([`BEGIN`,`VEVENT`]),n.push([`UID`,`${t.id||`uid-`+Date.now()}`]),n.push([`DTSTAMP`,di(new Date)]),t.meeting_url&&n.push([`URL`,`${t.meeting_url}`]),t.all_day?(n.push([`DTSTART;VALUE=DATE`,nn(t.date)]),n.push([`DTEND;VALUE=DATE`,nn(us$1(t.date,1))])):(n.push([`DTSTART`,di(t.date)]),n.push([`DTEND`,di(dt(t.date,t.duration||60))])),n.push([`SUMMARY`,li(t.title)]),n.push([`DESCRIPTION`,e]),n.push([`LOCATION`,i]);let a=t.host||t.user_email||`no-reply@place.tech`,o=t.organiser?.name||a.split(`@`)[0]||`Staff`;n.push([`ORGANIZER`,`CN=${li(o)}:mailto:${a}`]),n.push([`END`,`VEVENT`]),n.push([`END`,`VCALENDAR`]);let r=n.map(([c,l])=>`${c}:${l}`).join(`\r
`);return`data:text/calendar;charset=utf8,${encodeURIComponent(r)}`}function Mh(t){let n=t.all_day?nn:di,e={action:`TEMPLATE`,text:t.title,details:`${t.body||``}${t.id?`

[ID|`+t.id+`]`:``}`,location:t.location,trp:!1,dates:`${n(t.date)}/${n(dt(t.date,t.duration??60))}`},i=(t.attendees||[]).map(o=>o.email||o),a=((t.resources?.length?t.resources:null)||[t.system]).map(o=>o?.email||o);return(i.length||a.length)&&(e.add=zh([...i,...a]).join()),`https://calendar.google.com/calendar/render?${Vd(e)}`}function Io(t){return`${As$1(t,`yyyy-MM-dd`)}T${As$1(t,`HH:mm:ss`)}`}function Eh(t,n=`office`,e=`free`){t.date||(t.date=Date.now());let i={startdt:Io(t.date),enddt:Io(dt(t.date,t.duration??60)),subject:t.title,body:`${t.body||``}${t.id?`


[ID|`+t.id+`]`:``}`,location:t.location,allday:t.all_day??!1};t.all_day&&delete i.enddt;let a=(t.attendees||[]).map(r=>r.email||r),o=((t.resources?.length?t.resources:null)||[t.system]).map(r=>r?.email||r);return(a.length||o.length)&&(i.to=zh([...a,...o]).filter(r=>!!r).join(`,`)),n===`office`?`https://outlook.office.com/calendar/deeplink/compose?${Vd(i)}`:`https://outlook.live.com/calendar/deeplink/compose?${Vd(i)}`}var Ls=(t,n)=>n.booking_start;function Fs(t,n){if(t&1&&(Hs(0,`tr`,10)(1,`td`,15),PT(2),r_(3,`date`),Wl(),Hs(4,`td`,15),PT(5),r_(6,`date`),r_(7,`date`),Wl()()),t&2){let e=n.$implicit;Cw(2),Kl(` `,s_(3,3,e.booking_start*1e3,`EEE, MMM d, yyyy`),` `),Cw(3),oy(` `,s_(6,6,e.booking_start*1e3,`h:mm a`),` - `,s_(7,9,e.booking_end*1e3,`h:mm a`),` `)}}async function Bh(t,n){let e=n.open(Ps,{data:t});return Promise.race([e.componentInstance.event.pipe(vf(i=>i.reason===`done`)).toPromise(),e.afterClosed().toPromise()])}var Ps=(()=>{class t{constructor(){this.event=new _t$1,this._data=E(ut),this._dialog_ref=E(we)}get clashes(){return this._data.clashes||[]}onConfirm(){this.event.emit({reason:`done`}),this._dialog_ref.close({reason:`done`})}static{this.ɵfac=function(i){return new(i||t)}}static{this.ɵcmp=YC({type:t,selectors:[[`placeos-recurring-clash-modal`]],outputs:{event:`event`},decls:35,vars:21,consts:[[1,`relative`],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`h-14`,`w-[calc(100%-1rem)]`,`min-w-[20rem]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[1,`flex`,`max-h-[60vh]`,`w-full`,`max-w-[calc(100vw-2rem)]`,`flex-col`,`items-center`,`space-y-4`,`overflow-auto`,`px-4`,`py-2`,`sm:max-w-md`],[1,`border-base-200`,`bg-warning`,`text-warning-content`,`flex`,`items-center`,`space-x-2`,`rounded-xl`,`border`,`p-2`,`shadow-sm`],[1,`text-5xl`],[1,`border-base-300`,`bg-base-100`,`max-h-48`,`w-full`,`overflow-auto`,`rounded-sm`,`border`],[1,`w-full`,`text-sm`],[1,`bg-base-200`,`sticky`,`top-0`],[1,`p-2`,`text-left`],[1,`border-base-300`,`border-t`],[1,`text-base-content/70`,`text-center`,`text-xs`],[1,`bg-base-200`,`sticky`,`bottom-0`,`m-2`,`flex`,`items-center`,`justify-center`,`space-x-2`,`rounded-sm`,`border-none`,`p-2`],[`btn`,``,`matRipple`,``,`mat-dialog-close`,``,1,`inverse`,`bg-base-100`,`flex-1`],[`btn`,``,`matRipple`,``,1,`flex-1`,3,`click`],[1,`p-2`]],template:function(i,a){i&1&&(Hs(0,`div`,0)(1,`header`,1)(2,`h2`,2),PT(3),r_(4,`translate`),Wl()(),Hs(5,`main`,3)(6,`div`,4)(7,`icon`,5),PT(8,`warning`),Wl(),Hs(9,`p`),PT(10),r_(11,`translate`),Wl()(),Hs(12,`div`,6)(13,`table`,7)(14,`thead`,8)(15,`tr`)(16,`th`,9),PT(17),r_(18,`translate`),Wl(),Hs(19,`th`,9),PT(20),r_(21,`translate`),Wl()()(),Hs(22,`tbody`),zb(23,Fs,8,12,`tr`,10,Ls),Wl()()(),Hs(25,`p`,11),PT(26),r_(27,`translate`),Wl()(),Hs(28,`footer`,12)(29,`button`,13),PT(30),r_(31,`translate`),Wl(),Hs(32,`button`,14),Pm(`click`,function(){return a.onConfirm()}),PT(33),r_(34,`translate`),Wl()()()),i&2&&(Cw(3),Kl(` `,i_(4,7,`BOOKINGS.RECURRING_CLASHES_TITLE`),` `),Cw(7),Kl(` `,i_(11,9,`BOOKINGS.RECURRING_CLASHES_MSG`),` `),Cw(7),Kl(` `,i_(18,11,`FORM.DATE`),` `),Cw(3),Kl(` `,i_(21,13,`COMMON.TIME`),` `),Cw(3),Wb(a.clashes),Cw(3),Kl(` `,i_(27,15,`BOOKINGS.RECURRING_CLASHES_CONFIRM`),` `),Cw(4),Kl(` `,i_(31,17,`COMMON.CANCEL`),` `),Cw(3),Kl(` `,i_(34,19,`BOOKINGS.CONTINUE_BOOKING`),` `))},dependencies:[O,ii,ti,us$2,ss$1,f,RS],encapsulation:2})}}return t})();export{ll as $,Ya as A,as as B,Ol as C,Sh as D,Rs as E,_o as F,gd as G,cl as H,_t as I,ii as J,gt as K,ad as L,Zm as M,Zr as N,Sl as O,_d as P,kr as Q,am as R,Mo as S,zr as St,Pa as T,dl as U,bd as V,fd as W,ji as X,is as Y,kh as Z,Jr as _,wl as _t,Co as a,om as at,Mh as b,za as bt,El as c,pl as ct,Gi as d,sl as dt,ml as et,Hc as f,ti as ft,Jc as g,we as gt,Ja as h,ut as ht,Cl as i,ns as it,Zc as j,So as k,Fi as l,rl as lt,Il as m,ul as mt,Ba as n,nm as nt,Dl as o,pd as ot,Hl as p,tn as pt,hl as q,Bh as r,no as rt,Eh as s,ph as st,Al as t,nd as tt,Ga as u,rr as ut,Ki as v,yd as vt,Om as w,Ml as x,zi as xt,Li as y,yr as yt,ao as z};
;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f3804988-df64-5a0d-8dd2-7d47dc3fa6c5")}catch(e){}}();
//# debugId=f3804988-df64-5a0d-8dd2-7d47dc3fa6c5
//# sourceMappingURL=chunk-3AT52ZIr.js.map