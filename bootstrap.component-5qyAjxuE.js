import{C as nt,y as et}from"./chunk-IcUQYZot.js";import{$n as pp,$t as at,A as HT,Ar as xT,At as Vm,B as Jm,Bt as Y,C as Fm,D as GV,Dn as jV,Dr as wi$1,En as jT,Fn as km,Fr as ye$1,Ft as Wm,Gn as nT,I as J_,It as Ws,J as Lr,Jn as oT,Jt as _T,Kn as ny,L as Ja,Lr as yn,M as Hm,Mr as xm,Nn as kb,Nr as y,On as jb,Or as wt,Ot as VT,Pr as y_,Q as Nm,Qn as pD,Qt as ae,R as Jb,Rt as Xb,S as Fb,Sr as ve,St as UI,Tn as ie,Un as nC,Ut as ZT,X as N,Xn as or,Y as Ls,Yn as od,Zt as _p,_ as Dm,ar as qn,at as Po,b as Em,cn as eD,d as Ar,er as pw,fn as fp,fr as ry,g as Ce,gt as Sp,h as C,hn as gT,i as $V,ir as qm,it as Pm,jn as kT,lt as Qb,mr as sd,nr as qi,nt as PV,on as de,or as qy,p as Bb,pn as fr,pr as sa,qn as oD,qt as Zs,sn as eC,st as Q_,t as $C,tr as qV,u as Am,un as ey,vn as hD,vr as tT,wn as id,wr as vs,wt as UT,xr as ud,yt as Te,zn as m,zr as zb,zt as Xv}from"./chunk-RNZdVJJx.js";import{n as Ce$1,t as B}from"./chunk-D3b8MVOu.js";import{A as Rt,B as m$1,E as Ft,F as Y$1,H as ni$1,I as Yn,L as Zn,P as Xe,S as w,T as E,V as ne,W as se,X as z,Y as xn,_ as wn,b as f,c as T,d as Zt,gt as ne$1,l as Ue,lt as Ys,n as Dn,ut as du,v as ge}from"./main.js";import{a as Ue$1,t as $e}from"./chunk-5fOWo86-.js";import{_ as pt,d as Vt,g as oi$1,h as lt,l as P,s as He,u as Ve,y as ze}from"./chunk-BFYBPv2I.js";import{a as ce,c as w$1,i as X,l as ze$1,r as Te$1,s as le,t as Ee}from"./chunk-DMAwQO2P.js";import"./chunk-D46XClhF.js";import{a as oe,c as rn,i as le$1,o as on,r as de$1,s as ot,t as It}from"./chunk-aOrHr6t9.js";var oi=[`determinateSpinner`];function ri(n,l){if(n&1&&(_p(),Ws(0,`svg`,11),Am(1,`circle`,12),od()),n&2){let e=Qb();Nm(`viewBox`,e._viewBox()),pw(),Wm(`stroke-dasharray`,e._strokeCircumference(),`px`)(`stroke-dashoffset`,e._strokeCircumference()/2,`px`)(`stroke-width`,e._circleStrokeWidth(),`%`),Nm(`r`,e._circleRadius())}}var ai=new C(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:Qt})});var Qt=100;var si=10;var Yt=(()=>{class n{_elementRef=m(Lr);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let e=m(ai),t=Rt(),i=this._elementRef.nativeElement;this._noopAnimations=t===`di-disabled`&&!!e&&!e._forceAnimations,this.mode=i.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&t===`reduced-motion`&&i.classList.add(`mat-progress-spinner-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=Qt;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-si)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(t){return new(t||n)};static ɵcmp=$C({type:n,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(t,i){if(t&1&&Hm(oi,5),t&2){let o;tT(o=nT())&&(i._determinateCircle=o.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(t,i){t&2&&(Nm(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,i.mode===`determinate`?i.value:null)(`mode`,i.mode),gT(`mat-`+i.color),Wm(`width`,i.diameter,`px`)(`height`,i.diameter,`px`)(`--%NS%mat-progress-spinner-size`,i.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,i.diameter+`px`),qm(`_mat-animation-noopable`,i._noopAnimations)(`mdc-circular-progress--indeterminate`,i.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,GV],diameter:[2,`diameter`,`diameter`,GV],strokeWidth:[2,`strokeWidth`,`strokeWidth`,GV]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(t,i){if(t&1&&(Dm(0,ri,2,8,`ng-template`,null,0,UT),Ws(2,`div`,2,1),_p(),Ws(4,`svg`,3),Am(5,`circle`,4),od()(),Sp(),Ws(6,`div`,5)(7,`div`,6)(8,`div`,7),km(9,8),od(),Ws(10,`div`,9),km(11,8),od(),Ws(12,`div`,10),km(13,8),od()()()),t&2){let o=oT(1);pw(4),Nm(`viewBox`,i._viewBox()),pw(),Wm(`stroke-dasharray`,i._strokeCircumference(),`px`)(`stroke-dashoffset`,i._strokeDashOffset(),`px`)(`stroke-width`,i._circleStrokeWidth(),`%`),Nm(`r`,i._circleRadius()),pw(4),xm(`ngTemplateOutlet`,o),pw(2),xm(`ngTemplateOutlet`,o),pw(2),xm(`ngTemplateOutlet`,o)}},dependencies:[Q_],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2})}return n})();var Xt=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Po({type:n});static ɵinj=fr({imports:[Zn]})}return n})();function $t(n,l){let t=!l?.manualCleanup?l?.injector?.get(ve)??m(ve):null,i=di(l?.equal),o;l?.requireSync?o=at({kind:0},{equal:i}):o=at({kind:1,value:l?.initialValue},{equal:i});let r,m$2=n.subscribe({next:f=>o.set({kind:1,value:f}),error:f=>{o.set({kind:2,error:f}),r?.()},complete:()=>{r?.()}});if(l?.requireSync&&o().kind===0)throw new y(601,!1);return r=t?.onDestroy(m$2.unsubscribe.bind(m$2)),Te(()=>{let f=o();switch(f.kind){case 1:return f.value;case 2:throw f.error;case 0:throw new y(601,!1)}},{equal:l?.equal})}function di(n=Object.is){return(l,e)=>l.kind===1&&e.kind===1&&n(l.value,e.value)}var hi=[`panel`];var _i=[`*`];function fi(n,l){if(n&1&&(id(0,`div`,1,0),Jb(2),sd()),n&2){let e=l.id,t=Qb();gT(t._classList),qm(`mat-mdc-autocomplete-visible`,t.showPanel)(`mat-mdc-autocomplete-hidden`,!t.showPanel)(`mat-autocomplete-panel-animations-enabled`,!t._animationsDisabled)(`mat-primary`,t._color===`primary`)(`mat-accent`,t._color===`accent`)(`mat-warn`,t._color===`warn`),Fm(`id`,t.id),Nm(`aria-label`,t.ariaLabel||null)(`aria-labelledby`,t._getPanelAriaLabelledby(e))}}var ye=class{source;option;constructor(l,e){this.source=l,this.option=e}};var ei=new C(`mat-autocomplete-default-options`,{providedIn:`root`,factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})});var ti=(()=>{class n{_changeDetectorRef=m(y_);_elementRef=m(Lr);_defaults=m(ei);_animationsDisabled=Yn();_activeOptionChanges=Y.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new wt;opened=new wt;closed=new wt;optionActivated=new wt;set classList(e){this._classList=e,this._elementRef.nativeElement.className=``}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=m(ne).getId(`mat-autocomplete-`);inertGroups;constructor(){let e=m(m$1);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new se(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let t=new ye(this,e);this.optionSelected.emit(t)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let t=e?e+` `:``;return this.ariaLabelledby?t+this.ariaLabelledby:e}_skipPredicate(){return!1}static ɵfac=function(t){return new(t||n)};static ɵcmp=$C({type:n,selectors:[[`mat-autocomplete`]],contentQueries:function(t,i,o){if(t&1&&Vm(o,X,5)(o,ce,5),t&2){let r;tT(r=nT())&&(i.options=r),tT(r=nT())&&(i.optionGroups=r)}},viewQuery:function(t,i){if(t&1&&Hm(Ar,7)(hi,5),t&2){let o;tT(o=nT())&&(i.template=o.first),tT(o=nT())&&(i.panel=o.first)}},hostAttrs:[1,`mat-mdc-autocomplete`],inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],displayWith:`displayWith`,autoActiveFirstOption:[2,`autoActiveFirstOption`,`autoActiveFirstOption`,$V],autoSelectActiveOption:[2,`autoSelectActiveOption`,`autoSelectActiveOption`,$V],requireSelection:[2,`requireSelection`,`requireSelection`,$V],panelWidth:`panelWidth`,disableRipple:[2,`disableRipple`,`disableRipple`,$V],classList:[0,`class`,`classList`],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,$V]},outputs:{optionSelected:`optionSelected`,opened:`opened`,closed:`closed`,optionActivated:`optionActivated`},exportAs:[`matAutocomplete`],features:[kT([{provide:le,useExisting:n}])],ngContentSelectors:_i,decls:1,vars:0,consts:[[`panel`,``],[`role`,`listbox`,1,`mat-mdc-autocomplete-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`id`]],template:function(t,i){t&1&&(Xb(),Em(0,fi,3,17,`ng-template`))},styles:[`div.mat-mdc-autocomplete-panel {
  width: 100%;
  max-height: 256px;
  visibility: hidden;
  transform-origin: center top;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  position: relative;
  border-radius: var(--%NS%mat-autocomplete-container-shape, var(--%NS%mat-sys-corner-extra-small));
  box-shadow: var(--%NS%mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  background-color: var(--%NS%mat-autocomplete-background-color, var(--%NS%mat-sys-surface-container));
}
@media (forced-colors: active) {
  div.mat-mdc-autocomplete-panel {
    outline: solid 1px;
  }
}
.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transform-origin: center bottom;
}
div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {
  visibility: visible;
}

div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,
.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {
  visibility: hidden;
  pointer-events: none;
}

@keyframes _mat-autocomplete-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.mat-autocomplete-panel-animations-enabled {
  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}

mat-autocomplete {
  display: none;
}
`],encapsulation:2})}return n})();var gi={provide:T,useExisting:qi(()=>be),multi:!0};var vi=new C(`mat-autocomplete-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=m(ye$1);return()=>Ve(n)}});var be=(()=>{class n{_environmentInjector=m(de);_element=m(Lr);_injector=m(ye$1);_viewContainerRef=m(qn);_zone=m(ae);_changeDetectorRef=m(y_);_dir=m(Ft,{optional:!0});_formField=m(le$1,{optional:!0,host:!0});_viewportRuler=m(P);_scrollStrategy=m(vi);_renderer=m(Ls);_animationsDisabled=Yn();_defaults=m(ei,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new ie;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=Y.EMPTY;_breakpointObserver=m(Y$1);_handsetLandscapeSubscription=Y.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new ie;_overlayPanelClass=z(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position=`auto`;connectedTo;autocompleteAttribute=`off`;autocompleteDisabled=!1;_aboveClass=`mat-mdc-autocomplete-panel-above`;ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen(`window`,`blur`,this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return eD(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(yn(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(yn(()=>this._overlayAttached)):wi$1()).pipe(Ce(e=>e instanceof w$1?e:null))}optionSelections=Xv(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(pD(e),Ja(()=>eD(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Ja(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new N(e=>{let t=o=>{let r=E(o),m=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,f=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&r!==this._element.nativeElement&&!this._hasFocus()&&(!m||!m.contains(r))&&(!f||!f.contains(r))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(r)&&e.next(o)},i=[this._renderer.listen(`document`,`click`,t),this._renderer.listen(`document`,`auxclick`,t),this._renderer.listen(`document`,`touchend`,t)];return()=>{i.forEach(o=>o())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let t=e,i=t.keyCode,o=Xe(t);if(i===27&&!o&&t.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&i===13&&this.panelOpen&&!o)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){let r=this.autocomplete._keyManager.activeItem,m=i===38||i===40;i===9||m&&!o&&this.panelOpen?this.autocomplete._keyManager.onKeydown(t):m&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(m||this.autocomplete._keyManager.activeItem!==r)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let t=e.target,i=t.value;if(t.type===`number`&&(i=i==``?null:parseFloat(i)),this._previousValue!==i){if(this._previousValue=i,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(i),!i)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=this.autocomplete.options?.find(r=>r.selected);if(o){let r=this._getDisplayValue(o.value);i!==r&&o.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return ni$1()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel===`auto`&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel=`always`,this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel=`auto`),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){return eD(new N(i=>{UI(()=>{i.next()},{injector:this._environmentInjector})}),this.autocomplete.options?.changes.pipe(hD(()=>this._positionStrategy.reapplyLastPosition()),oD(0))??wi$1()).pipe(Ja(()=>this._zone.run(()=>{let i=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),i!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),or(1)).subscribe(i=>this._setValueAndClose(i))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let t=this.autocomplete;return t&&t.displayWith?t.displayWith(e):e}_assignOptionValue(e){let t=this._getDisplayValue(e);e??this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(t??``)}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let t=this.autocomplete,i=e?e.source:this._pendingAutoselectedOption;i?(this._clearPreviousSelectedOption(i),this._assignOptionValue(i.value),this._onChange(i.value),t._emitSelectEvent(i),this._element.nativeElement.focus()):t.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,t){this.autocomplete?.options?.forEach(i=>{i!==e&&i.selected&&i.deselect(t)})}_openPanelInternal(e=this._element.nativeElement.value){this._attachOverlay(e),this._floatLabel()}_attachOverlay(e){if(!this.autocomplete)return;let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new lt(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),t=He(this._injector,this._getOverlayConfig()),this._overlayRef=t,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(xn.HandsetLandscape).subscribe(o=>{o.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),t&&!t.hasAttached()&&(t.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let i=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this.panelOpen&&i!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!Xe(e)||e.keyCode===38&&Xe(e,`altKey`))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??``),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new pt({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=ze(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation(`inline`);return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let t=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}],i=this._aboveClass,o=[{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:i},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:i}],r;this.position===`above`?r=o:this.position===`below`?r=t:r=[...t,...o],e.withPositions(r)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let t=-1;for(let i=0;i<e.options.length;i++)if(!e.options.get(i).disabled){t=i;break}e._keyManager.setActiveItem(t)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let t=this.autocomplete,i=Ee(e,t.options,t.optionGroups);if(e===0&&i===1)t._setScrollTop(0);else if(t.panel){let o=t.options.toArray()[e];if(o){let r=o._getHostElement(),m=Te$1(r.offsetTop,r.offsetHeight,t._getScrollTop(),t.panel.nativeElement.offsetHeight);t._setScrollTop(m)}}}static ɵfac=function(t){return new(t||n)};static ɵdir=sa({type:n,selectors:[[`input`,`matAutocomplete`,``],[`textarea`,`matAutocomplete`,``]],hostAttrs:[1,`mat-mdc-autocomplete-trigger`],hostVars:7,hostBindings:function(t,i){t&1&&Pm(`focusin`,function(){return i._handleFocus()})(`blur`,function(){return i._onTouched()})(`input`,function(r){return i._handleInput(r)})(`keydown`,function(r){return i._handleKeydown(r)})(`click`,function(){return i._handleClick()}),t&2&&Nm(`autocomplete`,i.autocompleteAttribute)(`role`,i.autocompleteDisabled?null:`combobox`)(`aria-autocomplete`,i.autocompleteDisabled?null:`list`)(`aria-activedescendant`,i.panelOpen&&i.activeOption?i.activeOption.id:null)(`aria-expanded`,i.autocompleteDisabled?null:i.panelOpen.toString())(`aria-controls`,i.autocompleteDisabled||!i.panelOpen?null:i.autocomplete?.id)(`aria-haspopup`,i.autocompleteDisabled?null:`listbox`)},inputs:{autocomplete:[0,`matAutocomplete`,`autocomplete`],position:[0,`matAutocompletePosition`,`position`],connectedTo:[0,`matAutocompleteConnectedTo`,`connectedTo`],autocompleteAttribute:[0,`autocomplete`,`autocompleteAttribute`],autocompleteDisabled:[2,`matAutocompleteDisabled`,`autocompleteDisabled`,$V]},exportAs:[`matAutocompleteTrigger`],features:[kT([gi]),Zs]})}return n})();var ii=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Po({type:n});static ɵinj=fr({imports:[oi$1,ze$1,Vt,ze$1,Zn]})}return n})();var bi=(n,l)=>l.id;function Si(n,l){n&1&&Am(0,`mat-spinner`,13),n&2&&xm(`diameter`,32)}function Oi(n,l){if(n&1&&(Ws(0,`div`,9),_T(1),od()),n&2){let e=Qb().$implicit;pw(),ud(` `,e.name,` `)}}function Ci(n,l){if(n&1&&(Ws(0,`mat-option`,14)(1,`div`,17)(2,`div`,18)(3,`div`),_T(4),od(),kb(5,Oi,2,1,`div`,9),od(),Ws(6,`div`,19),_T(7),od()()()),n&2){let e=l.$implicit;xm(`value`,e.id),pw(4),ud(` `,e.display_name||e.name,` `),pw(),Fb(e.display_name&&e.display_name!==e.name?5:-1),pw(2),ud(` `,e.id,` `)}}function Mi(n,l){n&1&&(Ws(0,`mat-option`,15),_T(1),jT(2,`translate`),od()),n&2&&(pw(),ud(` `,VT(2,1,l===`error`?`COMMON.LOAD_ERROR`:`COMMON.SEARCH_EMPTY`),` `))}function wi(n,l){n&1&&(Ws(0,`mat-option`,15),_T(1),jT(2,`translate`),od()),n&2&&(pw(),ud(` `,VT(2,1,`COMMON.BOOTSTRAP_INPUT_PLACEHOLDER`),` `))}function ki(n,l){if(n&1){let e=zb();Ws(0,`p`,10),_T(1),jT(2,`translate`),od(),Ws(3,`mat-form-field`,11)(4,`mat-label`),_T(5),jT(6,`translate`),od(),Ws(7,`input`,12),jT(8,`translate`),ry(`ngModelChange`,function(i){fp(e);let o=Qb();return xT(o.system_id,i)||(o.system_id=i),pp(i)}),od(),eC(),kb(9,Si,1,1,`mat-spinner`,13),od(),Ws(10,`mat-autocomplete`,null,0),jb(12,Ci,8,4,`mat-option`,14,bi),kb(14,Mi,3,3,`mat-option`,15),kb(15,wi,3,3,`mat-option`,15),od(),Ws(16,`button`,16),Pm(`click`,function(){fp(e);return pp(Qb().bootstrap())}),_T(17),jT(18,`translate`),od()}if(n&2){let e,t=oT(11),i=Qb();pw(),ud(` `,VT(2,10,i.description()),` `),pw(4),Jm(VT(6,12,`COMMON.BOOTSTRAP_LABEL`)),pw(2),ny(`ngModel`,i.system_id),xm(`matAutocomplete`,t)(`placeholder`,VT(8,14,`COMMON.BOOTSTRAP_LABEL`)),nC(),pw(2),Fb(i.loading()===`search`?9:-1),pw(3),Bb(i.space_list()),pw(2),Fb((e=i.search_state())?14:-1,e),pw(),Fb(i.system_id().length<2&&!i.space_list().length?15:-1),pw(),xm(`disabled`,!i.system_id()),pw(),ud(` `,VT(18,16,i.submit_label()),` `)}}function xi(n,l){n&1&&(Ws(0,`div`,7),Am(1,`mat-spinner`,20),Ws(2,`div`,21),_T(3),jT(4,`translate`),od()()),n&2&&(pw(),xm(`diameter`,32),pw(2),ud(` `,VT(4,2,`COMMON.BOOTSTRAP_LOADING`),` `))}var ni=(()=>{class n{constructor(){this._route=m(B),this._router=m(Ce$1),this._org=m(ge),this._query_params=$t(this._route.queryParamMap,{initialValue:this._route.snapshot.queryParamMap}),this.store_key=jV.required(),this.heading=jV.required(),this.description=jV(`COMMON.BOOTSTRAP_DESCRIPTION`),this.submit_label=jV(`COMMON.BOOTSTRAP_SUBMIT`),this.system_route=jV.required(),this.configured=PV(),this.version=ne$1,this.loading=at(``),this.system_id=at(``),this._debounced_search=qV(this.system_id,300),this._space_list=ZT({params:()=>this._org.initialised()?this._debounced_search.value():``,loader:async({params:e})=>{if(e.length<2)return[];this.loading.set(`search`);try{let{data:t}=await du({q:e,limit:20,fields:[`id`,`name`,`display_name`,`email`].join(`,`),zone_id:this._org.organisation?.id});return t.map(({id:i,name:o,display_name:r,email:m})=>new Ys({id:i,name:o,display_name:r,email:m}))}finally{this.loading.set(``)}}}),this.space_list=Te(()=>this._space_list.hasValue()?this._space_list.value():[]),this.search_state=Te(()=>!this._org.initialised()||this._debounced_search.value().length<2?``:this._space_list.error()?`error`:this._space_list.isLoading()||this.space_list().length?``:`empty`),this.bootstrap=()=>this.configure(this.system_id()),vs(()=>{let e=this._query_params();e.has(`clear`)&&e.get(`clear`)&&localStorage.removeItem(this.store_key());let t=e.get(`system_id`)||e.get(`sys_id`);t&&(this.system_id.set(t),this.configure(t))})}ngOnInit(){this.checkBootstrapped()}async checkBootstrapped(){if(this.system_id()||(this.loading.set(`Checks`),await nt(),this.system_id()))return;let e=localStorage.getItem(this.store_key()),t=et();if(t&&t!==e)return this.system_id.set(t),this.configure(t);if(e){this._router.navigate(this.system_route()(e),{queryParamsHandling:`preserve`});return}this.loading.set(``)}configure(e){localStorage.setItem(this.store_key(),e),localStorage.setItem(`trust`,`true`),localStorage.setItem(`fixed_device`,`true`),this.configured.emit(e),this._router.navigate(this.system_route()(e),{queryParamsHandling:`preserve`})}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=$C({type:n,selectors:[[`system-bootstrap`]],inputs:{store_key:[1,`store_key`],heading:[1,`heading`],description:[1,`description`],submit_label:[1,`submit_label`],system_route:[1,`system_route`]},outputs:{configured:`configured`},decls:21,vars:19,consts:[[`auto`,`matAutocomplete`],[1,`bg-base-200`,`absolute`,`inset-0`,`flex`,`flex-col`,`items-center`,`p-3`],[`form`,``,1,`bg-base-100`,`border-base-300`,`flex`,`w-120`,`max-w-[calc(100vw-2rem)]`,`flex-col`,`items-center`,`overflow-hidden`,`rounded-sm`,`border`,`shadow-md`],[1,`bg-secondary`,`text-secondary-content`,`flex`,`w-full`,`items-center`,`justify-between`,`px-4`,`py-3`,`text-xl`,`font-medium`],[1,`relative`,`overflow-hidden`,`rounded-sm`,`px-2`,`py-1`],[1,`bg-base-100`,`absolute`,`inset-0`,`z-0`,`opacity-10`],[1,`relative`,`z-10`,`font-mono`,`text-sm`,`uppercase`],[`load`,``,1,`my-16`,`flex`,`flex-col`,`items-center`],[1,`absolute`,`right-0`,`bottom-0`,`z-10`,`p-2`,`text-right`],[1,`text-xs`,`opacity-70`],[1,`description`,`py-4`],[`appearance`,`outline`],[`matInput`,``,3,`ngModelChange`,`ngModel`,`matAutocomplete`,`placeholder`],[`matSuffix`,``,`aria-hidden`,`true`,3,`diameter`],[3,`value`],[`disabled`,``,1,`pointer-events-none`,`opacity-60`],[`btn`,``,`matRipple`,``,3,`click`,`disabled`],[1,`flex`,`w-full`,`items-center`,`space-x-4`,`leading-tight`],[1,`flex`,`flex-1`,`flex-col`],[1,`bg-base-200`,`rounded-sm`,`px-2`,`py-1`,`font-mono`,`text-[0.625rem]`],[`aria-hidden`,`true`,3,`diameter`],[`announce`,``,1,`m-4`]],template:function(t,i){t&1&&(Ws(0,`div`,1)(1,`div`,2)(2,`header`,3)(3,`h1`),_T(4),jT(5,`translate`),od(),Ws(6,`div`,4),Am(7,`div`,5),Ws(8,`div`,6),_T(9),jT(10,`translate`),od()()(),kb(11,ki,19,18)(12,xi,5,4,`div`,7),od(),Ws(13,`div`,8)(14,`div`,9),_T(15),jT(16,`translate`),od(),Ws(17,`div`,9),_T(18),jT(19,`date`),jT(20,`date`),od()()()),t&2&&(pw(4),Jm(VT(5,7,i.heading())),pw(5),ud(` `,VT(10,9,`COMMON.BOOTSTRAP_SETUP`),` `),pw(2),Fb(!i.loading()||i.loading()===`search`?11:12),pw(4),ey(` `,VT(16,11,`COMMON.CONTROLS_VERSION`),`: `,i.version.hash,` `),pw(3),ey(` `,HT(19,13,i.version.time,`longDate`),` (`,HT(20,16,i.version.time,`shortTime`),`) `))},dependencies:[qy,w,Xt,Yt,$e,Ue$1,ii,ti,X,be,de$1,ot,oe,It,rn,on,wn,Ue,Dn,Zt,J_,f],styles:[`mat-form-field[_ngcontent-%COMP%]{width:calc(100% - 2rem)}button[_ngcontent-%COMP%]{width:8rem;margin:.5rem;margin-top:0}
/*# sourceMappingURL=system-bootstrap.component.css.map */`]})}}return n})();var zn=(()=>{class n{constructor(){this.systemRoute=e=>[`/panel`,e]}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=$C({type:n,selectors:[[`app-bootstrap`]],decls:1,vars:1,consts:[[`store_key`,`PLACEOS.ASSISTANT.system`,`heading`,`COMMON.BOOTSTRAP_ASSISTANT`,`description`,`COMMON.BOOTSTRAP_ASSISTANT_INFO`,`submit_label`,`COMMON.CONTINUE`,3,`system_route`]],template:function(t,i){t&1&&Am(0,`system-bootstrap`,0),t&2&&xm(`system_route`,i.systemRoute)},dependencies:[ni],encapsulation:2})}}return n})();
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
(**
* @license Angular v22.1.5
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*)
*/
export{zn as BootstrapComponent};
;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="df06d545-9cf7-5438-bbaf-28fe3ac801df")}catch(e){}}();
//# debugId=df06d545-9cf7-5438-bbaf-28fe3ac801df
//# sourceMappingURL=bootstrap.component-5qyAjxuE.js.map