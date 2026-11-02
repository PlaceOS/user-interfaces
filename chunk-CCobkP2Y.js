import{$n as n_,An as fm,Br as wm,D as Er,G as Ib,H as Hr,Hn as jl,It as Ub,K as Iv,Kr as xm,Mr as ue,Nn as ge,Nr as ut$1,On as fC,Or as tm,Ot as Tb,Q as Ll,Qn as mt$1,Rr as wb,S as Dm,St as Sb,U as Hv,Un as jv,Vn as ip,Xt as Ys,Yr as ym,Zn as mm,_ as Cv,_t as Qn,b as Db,c as Am,cr as q,dt as Pl,en as Zs,er as ne,fn as bb,ft as Pn,g as Cm,gn as bo,gr as r_,it as N,j as Fs,jr as uT,lt as PI,m as Bv,or as pm,p as Bn,pn as be,rr as nv,rt as Mv,sr as py,st as Os,tr as nm,ut as Pi,vt as Qr,w as E,wn as dm,wr as sp,wt as T,x as De,xn as dI,xt as S_,y as DT}from"./chunk-Dz3n17Bd.js";import{Bt as sh}from"./chunk-B-ox0jMX.js";import{i as B}from"./chunk-DFikA_0q.js";import{a as Y,i as X,l as v,n as Dt$1,o as bt$1,r as U,s as ct,t as C}from"./main.js";import{C as kt,O as v$1,T as rt$1,_ as ae,b as ce,y as bt$2}from"./chunk-C02P4KS_.js";import{S as ze,b as pt$1,c as He,f as Ve,i as D,p as Vt,v as lt,y as oi}from"./chunk-CKjhag-z.js";import{a as ce$1,c as w,i as X$1,l as ze$1,r as Te,s as le,t as Ee}from"./chunk-BG2r8ZQA.js";import{c as se}from"./chunk-bwv63EUX.js";var bt=(()=>{let c=class c{constructor(){let e=E(Pn).nativeElement,t=E(kt),i=E(sh),a=E(ue),o=E(De);dI(async()=>{await i.loaded(),!o.destroyed&&dI(()=>{var g;let l=(g=e.textContent)==null?void 0:g.trim();l&&t.announce(l,`polite`)},{injector:a})})}};c.ɵfac=function(t){return new(t||c)},c.ɵdir=Ys({type:c,selectors:[[``,`announce`,``]]});return c})();var nt=[`determinateSpinner`];function at(r,c){if(r&1&&(ip(),Os(0,`svg`,11),pm(1,`circle`,12),Pl()),r&2){let n=Db();dm(`viewBox`,n._viewBox()),PI(),xm(`stroke-dasharray`,n._strokeCircumference(),`px`)(`stroke-dashoffset`,n._strokeCircumference()/2,`px`)(`stroke-width`,n._circleStrokeWidth(),`%`),dm(`r`,n._circleRadius())}}var rt=new T(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:Je})});var Je=100;var ot=10;var Dt=(()=>{class r{_elementRef=E(Pn);_noopAnimations;get color(){return this._color||this._defaultColor}set color(n){this._color=n}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let n=E(rt),e=Y(),t=this._elementRef.nativeElement;this._noopAnimations=e===`di-disabled`&&!!n&&!n._forceAnimations,this.mode=t.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&e===`reduced-motion`&&t.classList.add(`mat-progress-spinner-reduced-motion`),n&&(n.color&&(this.color=this._defaultColor=n.color),n.diameter&&(this.diameter=n.diameter),n.strokeWidth&&(this.strokeWidth=n.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(n){this._value=Math.max(0,Math.min(100,n||0))}_value=0;get diameter(){return this._diameter}set diameter(n){this._diameter=n||0}_diameter=Je;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(n){this._strokeWidth=n||0}_strokeWidth;_circleRadius(){return(this.diameter-ot)/2}_viewBox(){let n=this._circleRadius()*2+this.strokeWidth;return`0 0 ${n} ${n}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(e){return new(e||r)};static ɵcmp=fC({type:r,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(e,t){if(e&1&&Cm(nt,5),e&2){let i;bb(i=Tb())&&(t._determinateCircle=i.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(e,t){e&2&&(dm(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,t.mode===`determinate`?t.value:null)(`mode`,t.mode),Ub(`mat-`+t.color),xm(`width`,t.diameter,`px`)(`height`,t.diameter,`px`)(`--%NS%mat-progress-spinner-size`,t.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,t.diameter+`px`),Am(`_mat-animation-noopable`,t._noopAnimations)(`mdc-circular-progress--indeterminate`,t.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,r_],diameter:[2,`diameter`,`diameter`,r_],strokeWidth:[2,`strokeWidth`,`strokeWidth`,r_]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(e,t){if(e&1&&(tm(0,at,2,8,`ng-template`,null,0,DT),Os(2,`div`,2,1),ip(),Os(4,`svg`,3),pm(5,`circle`,4),Pl()(),sp(),Os(6,`div`,5)(7,`div`,6)(8,`div`,7),mm(9,8),Pl(),Os(10,`div`,9),mm(11,8),Pl(),Os(12,`div`,10),mm(13,8),Pl()()()),e&2){let i=Sb(1);PI(4),dm(`viewBox`,t._viewBox()),PI(),xm(`stroke-dasharray`,t._strokeCircumference(),`px`)(`stroke-dashoffset`,t._strokeDashOffset(),`px`)(`stroke-width`,t._circleStrokeWidth(),`%`),dm(`r`,t._circleRadius()),PI(4),fm(`ngTemplateOutlet`,i),PI(2),fm(`ngTemplateOutlet`,i),PI(2),fm(`ngTemplateOutlet`,i)}},dependencies:[S_],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2})}return r})();var It=(()=>{class r{static ɵfac=function(e){return new(e||r)};static ɵmod=Zs({type:r});static ɵinj=Qr({imports:[bt$1]})}return r})();var dt=[`panel`];var pt=[`*`];function mt(r,c){if(r&1&&(Ll(0,`div`,1,0),wb(2),jl()),r&2){let n=c.id,e=Db();Ub(e._classList),Am(`mat-mdc-autocomplete-visible`,e.showPanel)(`mat-mdc-autocomplete-hidden`,!e.showPanel)(`mat-autocomplete-panel-animations-enabled`,!e._animationsDisabled)(`mat-primary`,e._color===`primary`)(`mat-accent`,e._color===`accent`)(`mat-warn`,e._color===`warn`),ym(`id`,e.id),dm(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e._getPanelAriaLabelledby(n))}}var te=class{source;option;constructor(c,n){this.source=c,this.option=n}};var it=new T(`mat-autocomplete-default-options`,{providedIn:`root`,factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})});var si=(()=>{class r{_changeDetectorRef=E(py);_elementRef=E(Pn);_defaults=E(it);_animationsDisabled=Dt$1();_activeOptionChanges=q.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(n){this._color=n,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new mt$1;opened=new mt$1;closed=new mt$1;optionActivated=new mt$1;set classList(n){this._classList=n,this._elementRef.nativeElement.className=``}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(n){this._hideSingleSelectionIndicator=n,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let n of this.options)n._changeDetectorRef.markForCheck()}id=E(ae).getId(`mat-autocomplete-`);inertGroups;constructor(){let n=E(C);this.inertGroups=(n==null?void 0:n.SAFARI)||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new ce(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(n=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[n]||null})}),this._setVisibility()}ngOnDestroy(){var n;(n=this._keyManager)==null||n.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(n){this.panel&&(this.panel.nativeElement.scrollTop=n)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){var n;this.showPanel=!!((n=this.options)!=null&&n.length),this._changeDetectorRef.markForCheck()}_emitSelectEvent(n){let e=new te(this,n);this.optionSelected.emit(e)}_getPanelAriaLabelledby(n){if(this.ariaLabel)return null;let e=n?n+` `:``;return this.ariaLabelledby?e+this.ariaLabelledby:n}_skipPredicate(){return!1}static ɵfac=function(e){return new(e||r)};static ɵcmp=fC({type:r,selectors:[[`mat-autocomplete`]],contentQueries:function(e,t,i){if(e&1&&wm(i,X$1,5)(i,ce$1,5),e&2){let a;bb(a=Tb())&&(t.options=a),bb(a=Tb())&&(t.optionGroups=a)}},viewQuery:function(e,t){if(e&1&&Cm(Er,7)(dt,5),e&2){let i;bb(i=Tb())&&(t.template=i.first),bb(i=Tb())&&(t.panel=i.first)}},hostAttrs:[1,`mat-mdc-autocomplete`],inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],displayWith:`displayWith`,autoActiveFirstOption:[2,`autoActiveFirstOption`,`autoActiveFirstOption`,n_],autoSelectActiveOption:[2,`autoSelectActiveOption`,`autoSelectActiveOption`,n_],requireSelection:[2,`requireSelection`,`requireSelection`,n_],panelWidth:`panelWidth`,disableRipple:[2,`disableRipple`,`disableRipple`,n_],classList:[0,`class`,`classList`],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,n_]},outputs:{optionSelected:`optionSelected`,opened:`opened`,closed:`closed`,optionActivated:`optionActivated`},exportAs:[`matAutocomplete`],features:[uT([{provide:le,useExisting:r}])],ngContentSelectors:pt,decls:1,vars:0,consts:[[`panel`,``],[`role`,`listbox`,1,`mat-mdc-autocomplete-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`id`]],template:function(e,t){e&1&&(Ib(),nm(0,mt,3,17,`ng-template`))},styles:[`div.mat-mdc-autocomplete-panel {
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
`],encapsulation:2})}return r})();var ht={provide:B,useExisting:Pi(()=>_t),multi:!0};var ut=new T(`mat-autocomplete-scroll-strategy`,{providedIn:`root`,factory:()=>{let r=E(ue);return()=>Ve(r)}});var _t=(()=>{var c;class r{_environmentInjector=E(be);_element=E(Pn);_injector=E(ue);_viewContainerRef=E(Bn);_zone=E(ge);_changeDetectorRef=E(py);_dir=E(X,{optional:!0});_formField=E(se,{optional:!0,host:!0});_viewportRuler=E(D);_scrollStrategy=E(ut);_renderer=E(bo);_animationsDisabled=Dt$1();_defaults=E(it,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new ne;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=q.EMPTY;_breakpointObserver=E(U);_handsetLandscapeSubscription=q.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new ne;_overlayPanelClass=v(((c=this._defaults)==null?void 0:c.overlayPanelClass)||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position=`auto`;connectedTo;autocompleteAttribute=`off`;autocompleteDisabled=!1;_aboveClass=`mat-mdc-autocomplete-panel-above`;ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen(`window`,`blur`,this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){var e;(e=this._cleanupWindowBlur)==null||e.call(this),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return Cv(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(Hr(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(Hr(()=>this._overlayAttached)):nv()).pipe(ut$1(e=>e instanceof w?e:null))}optionSelections=Iv(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(jv(e),Bv(()=>Cv(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Bv(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new N(e=>{let t=a=>{let o=v$1(a),l=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,g=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&o!==this._element.nativeElement&&!this._hasFocus()&&(!l||!l.contains(o))&&(!g||!g.contains(o))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(o)&&e.next(a)},i=[this._renderer.listen(`document`,`click`,t),this._renderer.listen(`document`,`auxclick`,t),this._renderer.listen(`document`,`touchend`,t)];return()=>{i.forEach(a=>a())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let t=e,i=t.keyCode,a=rt$1(t);if(i===27&&!a&&t.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&i===13&&this.panelOpen&&!a)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){let o=this.autocomplete._keyManager.activeItem,l=i===38||i===40;i===9||l&&!a&&this.panelOpen?this.autocomplete._keyManager.onKeydown(t):l&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(l||this.autocomplete._keyManager.activeItem!==o)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){var a;let t=e.target,i=t.value;if(t.type===`number`&&(i=i==``?null:parseFloat(i)),this._previousValue!==i){if(this._previousValue=i,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(i),!i)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=(a=this.autocomplete.options)==null?void 0:a.find(l=>l.selected);if(o){let l=this._getDisplayValue(o.value);i!==l&&o.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return bt$2()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel===`auto`&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel=`always`,this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel=`auto`),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){var i;return Cv(new N(a=>{dI(()=>{a.next()},{injector:this._environmentInjector})}),((i=this.autocomplete.options)==null?void 0:i.changes.pipe(Hv(()=>this._positionStrategy.reapplyLastPosition()),Mv(0)))??nv()).pipe(Bv(()=>this._zone.run(()=>{let a=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),a!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),Qn(1)).subscribe(a=>this._setValueAndClose(a))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let t=this.autocomplete;return t&&t.displayWith?t.displayWith(e):e}_assignOptionValue(e){let t=this._getDisplayValue(e);e??this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(t??``)}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let t=this.autocomplete,i=e?e.source:this._pendingAutoselectedOption;i?(this._clearPreviousSelectedOption(i),this._assignOptionValue(i.value),this._onChange(i.value),t._emitSelectEvent(i),this._element.nativeElement.focus()):t.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,t){var i,a;(a=(i=this.autocomplete)==null?void 0:i.options)==null||a.forEach(o=>{o!==e&&o.selected&&o.deselect(t)})}_openPanelInternal(e=this._element.nativeElement.value){this._attachOverlay(e),this._floatLabel()}_attachOverlay(e){var a,o;if(!this.autocomplete)return;let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new lt(this.autocomplete.template,this._viewContainerRef,{id:(a=this._formField)==null?void 0:a.getLabelId()}),t=He(this._injector,this._getOverlayConfig()),this._overlayRef=t,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(ct.HandsetLandscape).subscribe(l=>{l.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),t&&!t.hasAttached()&&(t.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let i=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor((o=this._formField)==null?void 0:o.color),this._updatePanelState(),this.panelOpen&&i!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!rt$1(e)||e.keyCode===38&&rt$1(e,`altKey`))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??``),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){var e,t;if(this.autocomplete._setVisibility(),this.panelOpen){let i=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=i.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=i.outsidePointerEvents().subscribe())}else(e=this._keydownSubscription)==null||e.unsubscribe(),(t=this._outsideClickSubscription)==null||t.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){var e,t;return new pt$1({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:(e=this._defaults)==null?void 0:e.hasBackdrop,backdropClass:((t=this._defaults)==null?void 0:t.backdropClass)||`cdk-overlay-transparent-backdrop`,panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=ze(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation(`inline`);return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let t=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}],i=this._aboveClass,a=[{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:i},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:i}],o;this.position===`above`?o=a:this.position===`below`?o=t:o=[...t,...a],e.withPositions(o)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let t=-1;for(let i=0;i<e.options.length;i++)if(!e.options.get(i).disabled){t=i;break}e._keyManager.setActiveItem(t)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let t=this.autocomplete,i=Ee(e,t.options,t.optionGroups);if(e===0&&i===1)t._setScrollTop(0);else if(t.panel){let a=t.options.toArray()[e];if(a){let o=a._getHostElement(),l=Te(o.offsetTop,o.offsetHeight,t._getScrollTop(),t.panel.nativeElement.offsetHeight);t._setScrollTop(l)}}}static ɵfac=function(t){return new(t||r)};static ɵdir=Ys({type:r,selectors:[[`input`,`matAutocomplete`,``],[`textarea`,`matAutocomplete`,``]],hostAttrs:[1,`mat-mdc-autocomplete-trigger`],hostVars:7,hostBindings:function(t,i){var a;t&1&&Dm(`focusin`,function(){return i._handleFocus()})(`blur`,function(){return i._onTouched()})(`input`,function(l){return i._handleInput(l)})(`keydown`,function(l){return i._handleKeydown(l)})(`click`,function(){return i._handleClick()}),t&2&&dm(`autocomplete`,i.autocompleteAttribute)(`role`,i.autocompleteDisabled?null:`combobox`)(`aria-autocomplete`,i.autocompleteDisabled?null:`list`)(`aria-activedescendant`,i.panelOpen&&i.activeOption?i.activeOption.id:null)(`aria-expanded`,i.autocompleteDisabled?null:i.panelOpen.toString())(`aria-controls`,i.autocompleteDisabled||!i.panelOpen?null:(a=i.autocomplete)==null?void 0:a.id)(`aria-haspopup`,i.autocompleteDisabled?null:`listbox`)},inputs:{autocomplete:[0,`matAutocomplete`,`autocomplete`],position:[0,`matAutocompletePosition`,`position`],connectedTo:[0,`matAutocompleteConnectedTo`,`connectedTo`],autocompleteAttribute:[0,`autocomplete`,`autocompleteAttribute`],autocompleteDisabled:[2,`matAutocompleteDisabled`,`autocompleteDisabled`,n_]},exportAs:[`matAutocompleteTrigger`],features:[uT([ht]),Fs]})}return r})();var li=(()=>{class r{static ɵfac=function(e){return new(e||r)};static ɵmod=Zs({type:r});static ɵinj=Qr({imports:[oi,ze$1,Vt,ze$1,bt$1]})}return r})();export{li as a,bt as i,It as n,si as o,_t as r,Dt as t};
;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="54781792-212c-5802-82b2-70baac60a431")}catch(e){}}();
//# debugId=54781792-212c-5802-82b2-70baac60a431
//# sourceMappingURL=chunk-CCobkP2Y.js.map