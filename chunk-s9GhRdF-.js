import{$n as le,A as Gv,B as Ir,Br as vm,Bt as Ul,Dr as tD,Dt as Rm,G as Kb,I as Hn,It as Te,Jr as yt,K as Kn,L as Hs,M as HC,Mr as ta,On as eT,Pn as fp,Pt as T,Q as Ln,Qr as zl,Qt as Wm,R as Hv,Rr as vT,T as Fm,Tn as dp,Vr as vv,Vt as Us,Wn as jm,_r as rS,br as re,ct as Nm,d as Bm,en as Xb,er as lt$1,fr as q,ft as O_,gr as rD,hr as qm,it as N,jt as Sm,kr as tT,l as BT,mt as Om,n as $l,nn as YT,or as na,pn as _o,q as Kr,qn as jv,qr as ym,qt as Vr,rn as Yb,rr as nD,tr as lw,tt as Mm,u as Bi,ut as Ny,vr as rT,wn as de,wt as R_,y as E,zr as vg}from"./chunk-k1Qh7_q-.js";import{H as Y,K as f,L as Rt,M as E$1,N as Ft,Q as se,U as Yn,V as Xe,W as Zn,X as ni,Y as ne,it as z,rt as xn,y as T$1}from"./main.js";import{C as ze,b as oi,c as He,f as Ve,i as D,p as Vt,x as pt$1,y as lt$2}from"./chunk-CUjNjgP2.js";import{a as ce,c as w,i as X,l as ze$1,r as Te$1,s as le$1,t as Ee}from"./chunk-CKDUy4Jd.js";import{c as se$1}from"./chunk-Btqc0wCT.js";var et=[`determinateSpinner`];function tt(r,d){if(r&1&&(dp(),Hs(0,`svg`,11),Nm(1,`circle`,12),Ul()),r&2){let n=Yb();Sm(`viewBox`,n._viewBox()),lw(),Wm(`stroke-dasharray`,n._strokeCircumference(),`px`)(`stroke-dashoffset`,n._strokeCircumference()/2,`px`)(`stroke-width`,n._circleStrokeWidth(),`%`),Sm(`r`,n._circleRadius())}}var it=new T(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:Ue})});var Ue=100;var nt=10;var Ot=(()=>{class r{_elementRef=E(Ln);_noopAnimations;get color(){return this._color||this._defaultColor}set color(n){this._color=n}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let n=E(it),e=Rt(),t=this._elementRef.nativeElement;this._noopAnimations=e===`di-disabled`&&!!n&&!n._forceAnimations,this.mode=t.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&e===`reduced-motion`&&t.classList.add(`mat-progress-spinner-reduced-motion`),n&&(n.color&&(this.color=this._defaultColor=n.color),n.diameter&&(this.diameter=n.diameter),n.strokeWidth&&(this.strokeWidth=n.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(n){this._value=Math.max(0,Math.min(100,n||0))}_value=0;get diameter(){return this._diameter}set diameter(n){this._diameter=n||0}_diameter=Ue;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(n){this._strokeWidth=n||0}_strokeWidth;_circleRadius(){return(this.diameter-nt)/2}_viewBox(){let n=this._circleRadius()*2+this.strokeWidth;return`0 0 ${n} ${n}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(e){return new(e||r)};static ɵcmp=HC({type:r,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(e,t){if(e&1&&Bm(et,5),e&2){let i;eT(i=tT())&&(t._determinateCircle=i.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(e,t){e&2&&(Sm(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,t.mode===`determinate`?t.value:null)(`mode`,t.mode),vT(`mat-`+t.color),Wm(`width`,t.diameter,`px`)(`height`,t.diameter,`px`)(`--%NS%mat-progress-spinner-size`,t.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,t.diameter+`px`),qm(`_mat-animation-noopable`,t._noopAnimations)(`mdc-circular-progress--indeterminate`,t.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,O_],diameter:[2,`diameter`,`diameter`,O_],strokeWidth:[2,`strokeWidth`,`strokeWidth`,O_]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(e,t){if(e&1&&(ym(0,tt,2,8,`ng-template`,null,0,YT),Hs(2,`div`,2,1),dp(),Hs(4,`svg`,3),Nm(5,`circle`,4),Ul()(),fp(),Hs(6,`div`,5)(7,`div`,6)(8,`div`,7),Rm(9,8),Ul(),Hs(10,`div`,9),Rm(11,8),Ul(),Hs(12,`div`,10),Rm(13,8),Ul()()()),e&2){let i=rT(1);lw(4),Sm(`viewBox`,t._viewBox()),lw(),Wm(`stroke-dasharray`,t._strokeCircumference(),`px`)(`stroke-dashoffset`,t._strokeDashOffset(),`px`)(`stroke-width`,t._circleStrokeWidth(),`%`),Sm(`r`,t._circleRadius()),lw(4),Mm(`ngTemplateOutlet`,i),lw(2),Mm(`ngTemplateOutlet`,i),lw(2),Mm(`ngTemplateOutlet`,i)}},dependencies:[rS],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2})}return r})();var Ct=(()=>{class r{static ɵfac=function(e){return new(e||r)};static ɵmod=ta({type:r});static ɵinj=Kr({imports:[Zn]})}return r})();var st=[`panel`];var lt=[`*`];function ct(r,d){if(r&1&&($l(0,`div`,1,0),Xb(2),zl()),r&2){let n=d.id,e=Yb();vT(e._classList),qm(`mat-mdc-autocomplete-visible`,e.showPanel)(`mat-mdc-autocomplete-hidden`,!e.showPanel)(`mat-autocomplete-panel-animations-enabled`,!e._animationsDisabled)(`mat-primary`,e._color===`primary`)(`mat-accent`,e._color===`accent`)(`mat-warn`,e._color===`warn`),Om(`id`,e.id),Sm(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e._getPanelAriaLabelledby(n))}}var J=class{source;option;constructor(d,n){this.source=d,this.option=n}};var $e=new T(`mat-autocomplete-default-options`,{providedIn:`root`,factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})});var $t=(()=>{class r{_changeDetectorRef=E(Ny);_elementRef=E(Ln);_defaults=E($e);_animationsDisabled=Yn();_activeOptionChanges=q.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(n){this._color=n,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new yt;opened=new yt;closed=new yt;optionActivated=new yt;set classList(n){this._classList=n,this._elementRef.nativeElement.className=``}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(n){this._hideSingleSelectionIndicator=n,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let n of this.options)n._changeDetectorRef.markForCheck()}id=E(ne).getId(`mat-autocomplete-`);inertGroups;constructor(){let n=E(f);this.inertGroups=(n==null?void 0:n.SAFARI)||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new se(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(n=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[n]||null})}),this._setVisibility()}ngOnDestroy(){var n;(n=this._keyManager)==null||n.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(n){this.panel&&(this.panel.nativeElement.scrollTop=n)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){var n;this.showPanel=!!((n=this.options)!=null&&n.length),this._changeDetectorRef.markForCheck()}_emitSelectEvent(n){let e=new J(this,n);this.optionSelected.emit(e)}_getPanelAriaLabelledby(n){if(this.ariaLabel)return null;let e=n?n+` `:``;return this.ariaLabelledby?e+this.ariaLabelledby:n}_skipPredicate(){return!1}static ɵfac=function(e){return new(e||r)};static ɵcmp=HC({type:r,selectors:[[`mat-autocomplete`]],contentQueries:function(e,t,i){if(e&1&&jm(i,X,5)(i,ce,5),e&2){let a;eT(a=tT())&&(t.options=a),eT(a=tT())&&(t.optionGroups=a)}},viewQuery:function(e,t){if(e&1&&Bm(Ir,7)(st,5),e&2){let i;eT(i=tT())&&(t.template=i.first),eT(i=tT())&&(t.panel=i.first)}},hostAttrs:[1,`mat-mdc-autocomplete`],inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],displayWith:`displayWith`,autoActiveFirstOption:[2,`autoActiveFirstOption`,`autoActiveFirstOption`,R_],autoSelectActiveOption:[2,`autoSelectActiveOption`,`autoSelectActiveOption`,R_],requireSelection:[2,`requireSelection`,`requireSelection`,R_],panelWidth:`panelWidth`,disableRipple:[2,`disableRipple`,`disableRipple`,R_],classList:[0,`class`,`classList`],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,R_]},outputs:{optionSelected:`optionSelected`,opened:`opened`,closed:`closed`,optionActivated:`optionActivated`},exportAs:[`matAutocomplete`],features:[BT([{provide:le$1,useExisting:r}])],ngContentSelectors:lt,decls:1,vars:0,consts:[[`panel`,``],[`role`,`listbox`,1,`mat-mdc-autocomplete-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`id`]],template:function(e,t){e&1&&(Kb(),vm(0,ct,3,17,`ng-template`))},styles:[`div.mat-mdc-autocomplete-panel {
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
`],encapsulation:2})}return r})();var dt={provide:T$1,useExisting:Bi(()=>mt),multi:!0};var pt=new T(`mat-autocomplete-scroll-strategy`,{providedIn:`root`,factory:()=>{let r=E(le);return()=>Ve(r)}});var mt=(()=>{var d;class r{_environmentInjector=E(Te);_element=E(Ln);_injector=E(le);_viewContainerRef=E(Hn);_zone=E(de);_changeDetectorRef=E(Ny);_dir=E(Ft,{optional:!0});_formField=E(se$1,{optional:!0,host:!0});_viewportRuler=E(D);_scrollStrategy=E(pt);_renderer=E(_o);_animationsDisabled=Yn();_defaults=E($e,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new re;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=q.EMPTY;_breakpointObserver=E(Y);_handsetLandscapeSubscription=q.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new re;_overlayPanelClass=z(((d=this._defaults)==null?void 0:d.overlayPanelClass)||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position=`auto`;connectedTo;autocompleteAttribute=`off`;autocompleteDisabled=!1;_aboveClass=`mat-mdc-autocomplete-panel-above`;ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen(`window`,`blur`,this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){var e;(e=this._cleanupWindowBlur)==null||e.call(this),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return Hv(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(Vr(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(Vr(()=>this._overlayAttached)):vv()).pipe(lt$1(e=>e instanceof w?e:null))}optionSelections=jv(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(tD(e),nD(()=>Hv(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(nD(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new N(e=>{let t=a=>{let o=E$1(a),l=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,L=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&o!==this._element.nativeElement&&!this._hasFocus()&&(!l||!l.contains(o))&&(!L||!L.contains(o))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(o)&&e.next(a)},i=[this._renderer.listen(`document`,`click`,t),this._renderer.listen(`document`,`auxclick`,t),this._renderer.listen(`document`,`touchend`,t)];return()=>{i.forEach(a=>a())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let t=e,i=t.keyCode,a=Xe(t);if(i===27&&!a&&t.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&i===13&&this.panelOpen&&!a)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){let o=this.autocomplete._keyManager.activeItem,l=i===38||i===40;i===9||l&&!a&&this.panelOpen?this.autocomplete._keyManager.onKeydown(t):l&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(l||this.autocomplete._keyManager.activeItem!==o)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){var a;let t=e.target,i=t.value;if(t.type===`number`&&(i=i==``?null:parseFloat(i)),this._previousValue!==i){if(this._previousValue=i,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(i),!i)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=(a=this.autocomplete.options)==null?void 0:a.find(l=>l.selected);if(o){let l=this._getDisplayValue(o.value);i!==l&&o.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return ni()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel===`auto`&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel=`always`,this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel=`auto`),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){var i;return Hv(new N(a=>{vg(()=>{a.next()},{injector:this._environmentInjector})}),((i=this.autocomplete.options)==null?void 0:i.changes.pipe(rD(()=>this._positionStrategy.reapplyLastPosition()),Gv(0)))??vv()).pipe(nD(()=>this._zone.run(()=>{let a=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),a!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),Kn(1)).subscribe(a=>this._setValueAndClose(a))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let t=this.autocomplete;return t&&t.displayWith?t.displayWith(e):e}_assignOptionValue(e){let t=this._getDisplayValue(e);e??this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(t??``)}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let t=this.autocomplete,i=e?e.source:this._pendingAutoselectedOption;i?(this._clearPreviousSelectedOption(i),this._assignOptionValue(i.value),this._onChange(i.value),t._emitSelectEvent(i),this._element.nativeElement.focus()):t.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,t){var i,a;(a=(i=this.autocomplete)==null?void 0:i.options)==null||a.forEach(o=>{o!==e&&o.selected&&o.deselect(t)})}_openPanelInternal(e=this._element.nativeElement.value){this._attachOverlay(e),this._floatLabel()}_attachOverlay(e){var a,o;if(!this.autocomplete)return;let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new lt$2(this.autocomplete.template,this._viewContainerRef,{id:(a=this._formField)==null?void 0:a.getLabelId()}),t=He(this._injector,this._getOverlayConfig()),this._overlayRef=t,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(xn.HandsetLandscape).subscribe(l=>{l.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),t&&!t.hasAttached()&&(t.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let i=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor((o=this._formField)==null?void 0:o.color),this._updatePanelState(),this.panelOpen&&i!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!Xe(e)||e.keyCode===38&&Xe(e,`altKey`))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??``),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){var e,t;if(this.autocomplete._setVisibility(),this.panelOpen){let i=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=i.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=i.outsidePointerEvents().subscribe())}else(e=this._keydownSubscription)==null||e.unsubscribe(),(t=this._outsideClickSubscription)==null||t.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){var e,t;return new pt$1({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:(e=this._defaults)==null?void 0:e.hasBackdrop,backdropClass:((t=this._defaults)==null?void 0:t.backdropClass)||`cdk-overlay-transparent-backdrop`,panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=ze(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation(`inline`);return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let t=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}],i=this._aboveClass,a=[{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:i},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:i}],o;this.position===`above`?o=a:this.position===`below`?o=t:o=[...t,...a],e.withPositions(o)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let t=-1;for(let i=0;i<e.options.length;i++)if(!e.options.get(i).disabled){t=i;break}e._keyManager.setActiveItem(t)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let t=this.autocomplete,i=Ee(e,t.options,t.optionGroups);if(e===0&&i===1)t._setScrollTop(0);else if(t.panel){let a=t.options.toArray()[e];if(a){let o=a._getHostElement(),l=Te$1(o.offsetTop,o.offsetHeight,t._getScrollTop(),t.panel.nativeElement.offsetHeight);t._setScrollTop(l)}}}static ɵfac=function(t){return new(t||r)};static ɵdir=na({type:r,selectors:[[`input`,`matAutocomplete`,``],[`textarea`,`matAutocomplete`,``]],hostAttrs:[1,`mat-mdc-autocomplete-trigger`],hostVars:7,hostBindings:function(t,i){var a;t&1&&Fm(`focusin`,function(){return i._handleFocus()})(`blur`,function(){return i._onTouched()})(`input`,function(l){return i._handleInput(l)})(`keydown`,function(l){return i._handleKeydown(l)})(`click`,function(){return i._handleClick()}),t&2&&Sm(`autocomplete`,i.autocompleteAttribute)(`role`,i.autocompleteDisabled?null:`combobox`)(`aria-autocomplete`,i.autocompleteDisabled?null:`list`)(`aria-activedescendant`,i.panelOpen&&i.activeOption?i.activeOption.id:null)(`aria-expanded`,i.autocompleteDisabled?null:i.panelOpen.toString())(`aria-controls`,i.autocompleteDisabled||!i.panelOpen?null:(a=i.autocomplete)==null?void 0:a.id)(`aria-haspopup`,i.autocompleteDisabled?null:`listbox`)},inputs:{autocomplete:[0,`matAutocomplete`,`autocomplete`],position:[0,`matAutocompletePosition`,`position`],connectedTo:[0,`matAutocompleteConnectedTo`,`connectedTo`],autocompleteAttribute:[0,`autocomplete`,`autocompleteAttribute`],autocompleteDisabled:[2,`matAutocompleteDisabled`,`autocompleteDisabled`,R_]},exportAs:[`matAutocompleteTrigger`],features:[BT([dt]),Us]})}return r})();var Jt=(()=>{class r{static ɵfac=function(e){return new(e||r)};static ɵmod=ta({type:r});static ɵinj=Kr({imports:[oi,ze$1,Vt,ze$1,Zn]})}return r})();export{mt as a,Ot as i,Ct as n,Jt as r,$t as t};
;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f244dd1e-3b2b-5905-bbf7-bf0835dd55c6")}catch(e){}}();
//# debugId=f244dd1e-3b2b-5905-bbf7-bf0835dd55c6
//# sourceMappingURL=chunk-s9GhRdF-.js.map