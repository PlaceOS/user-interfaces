import{A as Ev,An as b_,B as Hl,Bn as dd,E,Et as RC,Fr as rw,G as Ie,Gr as ue,Hr as tp,I as Gr,J as Jn,Jr as us,K as Im,Kr as um,Mt as Rm,Nn as bm,O as Em,On as am,Or as pp,R as Gw,Rt as Sm,S as DT,Sr as oS,Un as ea,V as Hm,Vn as dy,Vr as to,Wn as ep,Wr as uT,Wt as Te,Xn as ge,Xt as Ub,Y as Js,Zn as hI,_ as Bi,_t as Om,ar as jn,b as C_,bn as Zb,br as ne,cr as jv,dt as Nm,en as VT,gn as Ym,gr as m,in as Vv,jn as bb,k as Et,kr as pt,l as AV,ln as Ww,ni as xT,nn as Vm,nt as Ls,on as Wb,ot as Mo,qn as fp,ri as xV,si as zb,sr as js,t as $b,tn as Vb,tr as it,ur as kb,vr as nD,w as Dm,wt as Qt$1,x as Cb,y as C,zr as tD}from"./chunk-CrIEWWW8.js";import{kt as jf,xt as gu}from"./chunk-Dt70g6ca.js";import{$ as Ul,J as R_,S as $l,V as Mn,X as Tl,a as V,d as Et$1,it as Xe,o as be,r as De,t as $,w as B_,wt as ff,xt as de,zt as ue$1}from"./main.js";import{D as ss,E as rt,d as T,k as v,v as ae,w as kt,x as ce,y as as}from"./chunk-BvGtAD6q.js";import{T as zt$1,_ as ci$1,a as Ht$1,d as Ue,f as Vt$1,n as A,o as It,v as di}from"./chunk-xgkKWuLL.js";import{n as mt,t as Yt$1}from"./chunk-CiBnmCcY.js";import{a as J,c as X,i as Ie$1,l as ce$1,n as Ee,o as Oe,r as He,s as Ue$1,u as le}from"./chunk-CjIHuT0S.js";import{o as vt,r as gt,t as Kt}from"./chunk-BNqaKE45.js";var Pt=[`determinateSpinner`];function Vt(r,i){if(r&1&&(fp(),Ls(0,`svg`,11),Im(1,`circle`,12),Hl()),r&2){let e=Vb();Dm(`viewBox`,e._viewBox()),rw(),Vm(`stroke-dasharray`,e._strokeCircumference(),`px`)(`stroke-dashoffset`,e._strokeCircumference()/2,`px`)(`stroke-width`,e._circleStrokeWidth(),`%`),Dm(`r`,e._circleRadius())}}var Lt=new C(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:Mt})});var Mt=100;var zt=10;var Sn=(()=>{class r{_elementRef=E(jn);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let e=E(Lt),t=$(),n=this._elementRef.nativeElement;this._noopAnimations=t===`di-disabled`&&!!e&&!e._forceAnimations,this.mode=n.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&t===`reduced-motion`&&n.classList.add(`mat-progress-spinner-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=Mt;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-zt)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(t){return new(t||r)};static ɵcmp=RC({type:r,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(t,n){if(t&1&&Om(Pt,5),t&2){let a;zb(a=Wb())&&(n._determinateCircle=a.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(t,n){t&2&&(Dm(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,n.mode===`determinate`?n.value:null)(`mode`,n.mode),uT(`mat-`+n.color),Vm(`width`,n.diameter,`px`)(`height`,n.diameter,`px`)(`--%NS%mat-progress-spinner-size`,n.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,n.diameter+`px`),Hm(`_mat-animation-noopable`,n._noopAnimations)(`mdc-circular-progress--indeterminate`,n.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,b_],diameter:[2,`diameter`,`diameter`,b_],strokeWidth:[2,`strokeWidth`,`strokeWidth`,b_]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(t,n){if(t&1&&(um(0,Vt,2,8,`ng-template`,null,0,VT),Ls(2,`div`,2,1),fp(),Ls(4,`svg`,3),Im(5,`circle`,4),Hl()(),pp(),Ls(6,`div`,5)(7,`div`,6)(8,`div`,7),bm(9,8),Hl(),Ls(10,`div`,9),bm(11,8),Hl(),Ls(12,`div`,10),bm(13,8),Hl()()()),t&2){let a=Zb(1);rw(4),Dm(`viewBox`,n._viewBox()),rw(),Vm(`stroke-dasharray`,n._strokeCircumference(),`px`)(`stroke-dashoffset`,n._strokeDashOffset(),`px`)(`stroke-width`,n._circleStrokeWidth(),`%`),Dm(`r`,n._circleRadius()),rw(4),Em(`ngTemplateOutlet`,a),rw(2),Em(`ngTemplateOutlet`,a),rw(2),Em(`ngTemplateOutlet`,a)}},dependencies:[oS],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2})}return r})();var Cn=(()=>{class r{static ɵfac=function(t){return new(t||r)};static ɵmod=Js({type:r});static ɵinj=to({imports:[be]})}return r})();var G=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new ne;bulk={select:i=>this._select(i),deselect:i=>this._deselect(i),setSelection:i=>this._setSelection(i)};constructor(i=!1,e,t=!0,n){this._multiple=i,this._emitChanges=t,this.compareWith=n,e&&e.length&&(i?e.forEach(a=>this._markSelected(a)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){return this._select(i)}deselect(...i){return this._deselect(i)}setSelection(...i){return this._setSelection(i)}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_select(i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i.map(a=>this._getConcreteValue(a)));i.forEach(a=>this._markSelected(a)),e.filter(a=>!t.has(this._getConcreteValue(a,t))).forEach(a=>this._unmarkSelected(a));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};var Bt=(()=>{class r{_listeners=[];notify(e,t){for(let n of this._listeners)n(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(t){return new(t||r)};static ɵprov=Qt$1({token:r,factory:r.ɵfac})}return r})();var Ht=[`trigger`];var Ut=[`panel`];var Gt=[[[`mat-select-trigger`]],`*`];var Qt=[`mat-select-trigger`,`*`];function Xt(r,i){if(r&1&&(Ls(0,`span`,4),DT(1),Hl()),r&2){let e=Vb();rw(),Ym(e.placeholder)}}function $t(r,i){r&1&&$b(0)}function Yt(r,i){if(r&1&&(Ls(0,`span`,11),DT(1),Hl()),r&2){let e=Vb(2);rw(),Ym(e.triggerValue)}}function Zt(r,i){if(r&1&&(Ls(0,`span`,5),Cb(1,$t,1,0)(2,Yt,2,1,`span`,11),Hl()),r&2){let e=Vb();rw(),bb(e.customTrigger?1:2)}}function Jt(r,i){if(r&1){let e=kb();Ls(0,`div`,12,1),Nm(`keydown`,function(n){ep(e);return tp(Vb()._handleKeydown(n))}),$b(2,1),Hl()}if(r&2){let e=Vb();uT(e.panelClass),Hm(`mat-select-panel-animations-enabled`,!e._animationsDisabled)(`mat-primary`,e._parentFormField?.color===`primary`)(`mat-accent`,e._parentFormField?.color===`accent`)(`mat-warn`,e._parentFormField?.color===`warn`)(`mat-undefined`,!e._parentFormField?.color),Dm(`id`,e.id+`-panel`)(`aria-multiselectable`,e.multiple)(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e._getPanelAriaLabelledby())}}var en=new C(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let r=E(ue);return()=>It(r)}});var tn=new C(`MAT_SELECT_CONFIG`);var Dt=new C(`MatSelectTrigger`);var ve=class{source;value;constructor(i,e){this.source=i,this.value=e}};var ci=(()=>{class r{_viewportRuler=E(A);_changeDetectorRef=E(dd);_elementRef=E(jn);_dir=E(V,{optional:!0});_idGenerator=E(ae);_renderer=E(Mo);_parentFormField=E(vt,{optional:!0});ngControl=E(ue$1,{self:!0,optional:!0});_liveAnnouncer=E(kt);_defaultOptions=E(tn,{optional:!0});_animationsDisabled=De();_popoverLocation;_initialized=new ne;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let n=this.panel.nativeElement,a=Ie$1(e,this.options,this.optionGroups),c=t._getHostElement();e===0&&a===1?n.scrollTop=0:n.scrollTop=Ee(c.offsetTop,c.offsetHeight,n.scrollTop,n.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new ve(this,e)}_scrollStrategyFactory=E(en);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new ne;_errorStateTracker;stateChanges=new ne;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=it(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Mn.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=jv(()=>{let e=this.options;return e?e.changes.pipe(tD(e),nD(()=>Vv(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(nD(()=>this.optionSelectionChanges))});openedChange=new Et;_openedStream=this.openedChange.pipe(Gr(e=>e),pt(()=>{}));_closedStream=this.openedChange.pipe(Gr(e=>!e),pt(()=>{}));selectionChange=new Et;valueChange=new Et;constructor(){let e=E(Oe),t=E(Tl,{optional:!0}),n=E(Ul,{optional:!0}),a=E(new dy(`tabindex`),{optional:!0}),c=E(Ht$1,{optional:!0}),S=E(Et$1,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new J(e,S||this.ngControl,n,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=c?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new G(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Ev(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Ev(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(tD(null),Ev(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let n=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?n.setAttribute(`aria-labelledby`,e):n.removeAttribute(`aria-labelledby`)}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Jn(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(n),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,`animationend`,a=>{a.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),n=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,n=t===40||t===38||t===37||t===39,a=t===13||t===32,c=this._keyManager;if(!c.isTyping()&&a&&!rt(e)||(this.multiple||e.altKey)&&n)e.preventDefault(),this.open();else if(!this.multiple){let S=this.selected;c.onKeydown(e);let m=this.selected;m&&S!==m&&this._liveAnnouncer.announce(m.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,n=e.keyCode,a=n===40||n===38,c=t.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!c&&(n===13||n===32)&&t.activeItem&&!rt(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!c&&this._multiple&&n===65&&e.ctrlKey){e.preventDefault();let S=this.options.some(m=>!m.disabled&&!m.selected);this.options.forEach(m=>{m.disabled||(S?m.select():m.deselect())})}else{let S=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==S&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!rt(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(n=>{if(this._selectionModel.isSelected(n))return!1;try{return(n.value!=null||this.canSelectNullableOptions)&&this._compareWith(n.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof zt$1?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new ce(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Vv(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Ev(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Vv(...this.options.map(t=>t._stateChanges)).pipe(Ev(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let n=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(n!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),n!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,n)=>this.sortComparator?this.sortComparator(t,n,e):e.indexOf(t)-e.indexOf(n)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(n=>n.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+` `:``;return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(e){let t=v(e);t&&(t.tagName===`MAT-OPTION`||t.classList.contains(`cdk-overlay-backdrop`)||t.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(t){return new(t||r)};static ɵcmp=RC({type:r,selectors:[[`mat-select`]],contentQueries:function(t,n,a){if(t&1&&Rm(a,Dt,5)(a,X,5)(a,ce$1,5),t&2){let c;zb(c=Wb())&&(n.customTrigger=c.first),zb(c=Wb())&&(n.options=c),zb(c=Wb())&&(n.optionGroups=c)}},viewQuery:function(t,n){if(t&1&&Om(Ht,5)(Ut,5)(ci$1,5),t&2){let a;zb(a=Wb())&&(n.trigger=a.first),zb(a=Wb())&&(n.panel=a.first),zb(a=Wb())&&(n._overlayDir=a.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(t,n){t&1&&Nm(`keydown`,function(c){return n._handleKeydown(c)})(`focus`,function(){return n._onFocus()})(`blur`,function(){return n._onBlur()}),t&2&&(Dm(`id`,n.id)(`tabindex`,n.disabled?-1:n.tabIndex)(`aria-controls`,n.panelOpen?n.id+`-panel`:null)(`aria-expanded`,n.panelOpen)(`aria-label`,n.ariaLabel||null)(`aria-required`,n.required.toString())(`aria-disabled`,n.disabled.toString())(`aria-invalid`,n.errorState)(`aria-activedescendant`,n._getAriaActiveDescendant()),Hm(`mat-mdc-select-disabled`,n.disabled)(`mat-mdc-select-invalid`,n.errorState)(`mat-mdc-select-required`,n.required)(`mat-mdc-select-empty`,n.empty)(`mat-mdc-select-multiple`,n.multiple)(`mat-select-open`,n.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,C_],disableRipple:[2,`disableRipple`,`disableRipple`,C_],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:b_(e)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,C_],placeholder:`placeholder`,required:[2,`required`,`required`,C_],multiple:[2,`multiple`,`multiple`,C_],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,C_],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,b_],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,C_]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[xT([{provide:gt,useExisting:r},{provide:le,useExisting:r}]),js],ngContentSelectors:Qt,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(t,n){if(t&1&&(Ub(Gt),Ls(0,`div`,2,0),Nm(`click`,function(){return n.open()}),Ls(3,`div`,3),Cb(4,Xt,2,1,`span`,4)(5,Zt,3,1,`span`,5),Hl(),Ls(6,`div`,6)(7,`div`,7),fp(),Ls(8,`svg`,8),Im(9,`path`,9),Hl()()()(),um(10,Jt,3,16,`ng-template`,10),Nm(`detach`,function(){return n.close()})(`backdropClick`,function(){return n.close()})(`overlayKeydown`,function(c){return n._handleOverlayKeydown(c)})),t&2){let a=Zb(1);rw(3),Dm(`id`,n._valueId),rw(),bb(n.empty?4:5),rw(6),Em(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,n._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,n._scrollStrategy)(`cdkConnectedOverlayOrigin`,n._preferredOverlayOrigin||a)(`cdkConnectedOverlayPositions`,n._positions)(`cdkConnectedOverlayWidth`,n._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,n._popoverLocation)}},dependencies:[zt$1,ci$1],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2})}return r})();var si=(()=>{class r{static ɵfac=function(t){return new(t||r)};static ɵdir=ea({type:r,selectors:[[`mat-select-trigger`]],features:[xT([{provide:Dt,useExisting:r}])]})}return r})();var li=(()=>{class r{static ɵfac=function(t){return new(t||r)};static ɵmod=Js({type:r});static ɵinj=to({imports:[di,He,be,Vt$1,Kt,He]})}return r})();var nn=[`input`];var rn=[`*`];var ye={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var an=new C(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>ye});var p=(function(r){return r[r.Init=0]=`Init`,r[r.Checked=1]=`Checked`,r[r.Unchecked=2]=`Unchecked`,r[r.Indeterminate=3]=`Indeterminate`,r})(p||{});var xe=class{source;checked};var Se=(()=>{class r{_elementRef=E(jn);_changeDetectorRef=E(dd);_ngZone=E(ge);_animationsDisabled=De();_options=E(an,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new xe;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new Et;indeterminateChange=new Et;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=p.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){E(T).load(as);let e=E(new dy(`tabindex`),{optional:!0});this._options=this._options||ye,this.color=this._options.color||ye.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=E(ae).getId(`mat-mdc-checkbox-`),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(p.Indeterminate):this._transitionCheckState(this.checked?p.Checked:p.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=it(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,n=this._getAnimationTargetElement();if(!(t===e||!n)&&(this._currentAnimationClass&&n.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){n.classList.add(this._currentAnimationClass);let a=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{n.classList.remove(a)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!==`noop`?(this.indeterminate&&e!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?p.Checked:p.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return``;switch(e){case p.Init:if(t===p.Checked)return this._animationClasses.uncheckedToChecked;if(t==p.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case p.Unchecked:return t===p.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case p.Checked:return t===p.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case p.Indeterminate:return t===p.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static ɵfac=function(t){return new(t||r)};static ɵcmp=RC({type:r,selectors:[[`mat-checkbox`]],viewQuery:function(t,n){if(t&1&&Om(nn,5),t&2){let a;zb(a=Wb())&&(n._inputElement=a.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(t,n){t&2&&(Sm(`id`,n.id),Dm(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),uT(n.color?`mat-`+n.color:`mat-accent`),Hm(`_mat-animation-noopable`,n._animationsDisabled)(`mdc-checkbox--disabled`,n.disabled)(`mat-mdc-checkbox-disabled`,n.disabled)(`mat-mdc-checkbox-checked`,n.checked)(`mat-mdc-checkbox-disabled-interactive`,n.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,C_],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,C_],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,C_],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?void 0:b_(e)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,C_],checked:[2,`checked`,`checked`,C_],disabled:[2,`disabled`,`disabled`,C_],indeterminate:[2,`indeterminate`,`indeterminate`,C_]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[xT([{provide:de,useExisting:Bi(()=>r),multi:!0},{provide:Xe,useExisting:r,multi:!0}]),js],ngContentSelectors:rn,decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(t,n){if(t&1&&(Ub(),Ls(0,`label`,3),Nm(`click`,function(c){return n._preventBubblingFromLabel(c)}),Ls(1,`span`,4,0),Im(3,`span`,5),Ls(4,`input`,6,1),Nm(`blur`,function(){return n._onBlur()})(`click`,function(){return n._onInputClick()})(`change`,function(c){return n._onInteractionEvent(c)}),Hl(),Im(6,`span`,7),Ls(7,`span`,8),fp(),Ls(8,`svg`,9),Im(9,`path`,10),Hl(),pp(),Im(10,`span`,11),Hl(),Im(11,`span`,12),Hl(),Ls(12,`span`,13,2),$b(14),Hl()()),t&2){let a=Zb(2);Em(`labelPosition`,n.labelPosition)(`for`,n.inputId),rw(4),Hm(`mdc-checkbox--selected`,n.checked),Em(`checked`,n.checked)(`indeterminate`,n.indeterminate)(`disabled`,n.disabled&&!n.disabledInteractive)(`id`,n.inputId)(`required`,n.required)(`tabIndex`,n.disabled&&!n.disabledInteractive?-1:n.tabIndex),Dm(`aria-label`,n.ariaLabel||null)(`aria-labelledby`,n.ariaLabelledby)(`aria-describedby`,n.ariaDescribedby)(`aria-checked`,n.indeterminate?`mixed`:null)(`aria-controls`,n.ariaControls)(`aria-disabled`,n.disabled&&n.disabledInteractive?!0:null)(`aria-expanded`,n.ariaExpanded)(`aria-owns`,n.ariaOwns)(`name`,n.name)(`value`,n.value),rw(7),Em(`matRippleTrigger`,a)(`matRippleDisabled`,n.disableRipple||n.disabled)(`matRippleCentered`,!0)}},dependencies:[ss,Ue$1],styles:[`.mdc-checkbox {
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
`],encapsulation:2})}return r})();var Tt=(()=>{class r{static ɵfac=function(t){return new(t||r)};static ɵmod=Js({type:r});static ɵinj=to({imports:[Se,be]})}return r})();var cn=[`*`];function sn(r,i){if(r&1&&(Ls(0,`div`,3),DT(1),Hl()),r&2){let e=Vb();rw(),Ym(e.info())}}function ln(r,i){if(r&1&&(Ls(0,`icon`,4),DT(1,`info`),Hl()),r&2)Em(`matTooltip`,Vb().info())}function dn(r,i){r&1&&Im(0,`div`,5)}function mn(r,i){if(r&1&&(Ls(0,`div`,6)(1,`div`,8)(2,`div`,9)(3,`icon`,10),DT(4),Hl()()()()),r&2){let e=Vb();rw(),Hm(`bg-base-200`,!e.value())(`bg-info`,e.value())(`border-info!`,e.value()),rw(),Hm(`left-1`,!e.value())(`left-5`,e.value())(`bg-base-400`,!e.value())(`bg-info-light`,e.value()),rw(2),Ym(e.value()?`done`:`remove`)}}function hn(r,i){if(r&1){let e=kb();Ls(0,`mat-checkbox`,11),Nm(`ngModelChange`,function(n){ep(e);return tp(Vb().setValue(n))}),Hl(),Gw()}if(r&2){let e=Vb();Em(`tabIndex`,-1)(`ngModel`,e.value()),Ww()}}var Fi=(()=>{class r{constructor(){this.toggle=xV(void 0),this.label=xV(void 0),this.info=xV(void 0),this.inline=xV(!0),this.value=it(void 0),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e}setValue(e){this.value.set(e),this._onChange&&this._onChange(e)}writeValue(e){this.value.set(e)}static{this.ɵfac=function(t){return new(t||r)}}static{this.ɵcmp=RC({type:r,selectors:[[`settings-toggle`]],inputs:{toggle:[1,`toggle`],label:[1,`label`],info:[1,`info`],inline:[1,`inline`]},features:[xT([ff(()=>r)])],ngContentSelectors:cn,decls:11,vars:16,consts:[[`type`,`button`,`matRipple`,``,1,`hover:bg-base-200`,`relative`,`flex`,`flex-1`,`items-center`,`space-x-2`,`overflow-hidden`,`rounded-sm`,`border`,`py-1`,`pr-1`,`pl-2`,3,`click`],[1,`z-10`,`flex`,`flex-1`,`items-center`,`space-x-2`,`px-2`,`text-left`],[1,`flex`,`h-full`,`w-full`,`flex-col`,`justify-center`,`leading-none`],[1,`text-xs`,`opacity-70`],[`aria-hidden`,`true`,3,`matTooltip`],[1,`bg-info`,`absolute`,`inset-0`,`z-0`,`m-0!`,`opacity-10`],[1,`px-2`],[`aria-hidden`,`true`,1,`pointer-events-none`,3,`tabIndex`,`ngModel`],[`toggle`,``,1,`border-base-400`,`relative`,`h-8`,`w-12`,`rounded-full`,`border-2`],[1,`absolute`,`top-1/2`,`flex`,`h-6`,`w-6`,`-translate-x-0.5`,`-translate-y-1/2`,`items-center`,`justify-center`,`rounded-full`,`text-black`,`shadow-sm`],[`aria-hidden`,`true`],[`aria-hidden`,`true`,1,`pointer-events-none`,3,`ngModelChange`,`tabIndex`,`ngModel`]],template:function(t,n){t&1&&(Ub(),Ls(0,`button`,0),Nm(`click`,function(){return n.setValue(!n.value())}),Ls(1,`div`,1)(2,`div`,2)(3,`div`),DT(4),$b(5),Hl(),Cb(6,sn,2,1,`div`,3),Hl(),Cb(7,ln,2,1,`icon`,4),Hl(),Cb(8,dn,1,0,`div`,5),Cb(9,mn,5,15,`div`,6)(10,hn,1,2,`mat-checkbox`,7),Hl()),t&2&&(Hm(`border-base-300`,!n.value())(`border-info`,n.value()),Dm(`role`,n.toggle()?`switch`:`checkbox`)(`aria-checked`,!!n.value())(`aria-description`,n.inline()?null:n.info()),rw(),Hm(`py-2`,!n.inline())(`py-1`,n.inline()),rw(3),Ym(n.label()),rw(2),bb(n.info()&&n.inline()?6:-1),rw(),bb(n.info()&&!n.inline()?7:-1),rw(),bb(n.value()?8:-1),rw(),bb(n.toggle()?9:10))},dependencies:[Tt,Se,B_,R_,$l,jf,Yt$1,mt],styles:[`[_nghost-%COMP%]{display:flex}[toggle][_ngcontent-%COMP%]{transition:background .2s,left .2s}
/*# sourceMappingURL=settings-toggle.component.css.map */`]})}}return r})();function Xi(r,i){let t=!i?.manualCleanup?i?.injector?.get(Ie)??E(Ie):null,n=pn(i?.equal),a;i?.requireSync?a=it({kind:0},{equal:n}):a=it({kind:1,value:i?.initialValue},{equal:n});let c,S=r.subscribe({next:m=>a.set({kind:1,value:m}),error:m=>{a.set({kind:2,error:m}),c?.()},complete:()=>{c?.()}});if(i?.requireSync&&a().kind===0)throw new m(601,!1);return c=t?.onDestroy(S.unsubscribe.bind(S)),Te(()=>{let m$1=a();switch(m$1.kind){case 1:return m$1.value;case 2:throw m$1.error;case 0:throw new m(601,!1)}},{equal:i?.equal})}function pn(r=Object.is){return(i,e)=>i.kind===1&&e.kind===1&&r(i.value,e.value)}var At=[`0123456789`.split(``),`qwertyuiop_`.split(``),`asdfghjkl+`.split(``),`zxcvbnm@.-`.split(``),[`{caps}`,`{space}`,`{backspace}`]];var Rt=160;var Ft=class r extends gu{static{this._enabled=!1}static{this._instances=new Set}static get enabled(){return this._enabled}static set enabled(i){this._enabled=i;for(let e of this._instances)e.syncNativeKeyboardState()}onFocus(){this.syncNativeKeyboardState(),r.enabled&&(this.open(),this.clearTimeout(`blur-sm`))}onBlur(){this.timeout(`blur-sm`,()=>this.close())}constructor(){super(),this._element=E(jn),this._overlay=E(Ue),this.keyset=AV(At),this.state=it(`normal`),this._overlay_ref=null,this._keyboard_el=null,this._position=`bottom`,this._native_keyboard_prevented=!1,this._original_readonly=!1,this._original_inputmode=null,r._instances.add(this),this.syncNativeKeyboardState(),us(()=>{this.keyset()||this.keyset.set(At)})}ngOnDestroy(){r._instances.delete(this),this.restoreNativeKeyboardState(),super.ngOnDestroy(),this.close(!0)}focusInput(){this._element?.nativeElement?.blur(),this._element?.nativeElement?.focus()}open(){if(this.clearTimeout(`close-animation`),this._overlay_ref){this._overlay_ref.hostElement.style.pointerEvents=`auto`,this._keyboard_el&&(this._keyboard_el.style.opacity=`1`);return}this._position=this.preferredPosition();let i=this._overlay.position().global().centerHorizontally();this._position===`top`?i.top(`0`):i.bottom(`0`),this._overlay_ref=this._overlay.create({width:`100vw`,positionStrategy:i}),this._overlay_ref.hostElement.style.display=`block`,this._overlay_ref.hostElement.style.pointerEvents=`auto`,this.applyOverlayPosition(),this.renderKeyboard()}close(i=!1){if(this._overlay_ref){if(this.clearTimeout(`close-animation`),i||!this._keyboard_el){this._overlay_ref.dispose(),this._overlay_ref=null,this._keyboard_el=null;return}this._overlay_ref.hostElement.style.pointerEvents=`none`,this._keyboard_el.style.opacity=`0`,this.timeout(`close-animation`,()=>{this._overlay_ref?.dispose(),this._overlay_ref=null,this._keyboard_el=null},Rt)}}handleKeyPress(i){let e=this._element.nativeElement,t=e.value||``,n=e.selectionStart??t.length;switch(i.toLowerCase()){case`{caps}`:this.state.set(this.state()===`caps`?`normal`:`caps`);break;case`{shift}`:this.state.set(this.state()===`shift`?`normal`:`shift`);break;case`{backspace}`:e.value=`${t.substr(0,n-1)}${t.substr(n,t.length)}`,n=Math.max(0,n-1);break;case`{space}`:e.value=`${t.substr(0,n)} ${t.substr(n,t.length)}`,n+=1;break;default:this.state()===`shift`&&this.state.set(`normal`),e.value=`${t.substr(0,n)}${i}${t.substr(n,t.length)}`,n+=1}e.dispatchEvent(new InputEvent(`input`)),this.updateKeyState(),this.timeout(`focus`,()=>{this.focusInput();try{e.setSelectionRange(n,n)}catch{}},50)}updateKeyState(){this.keyset.set(this.keyset().map(i=>i.map(e=>e.length>1?e:e[this.state()!==`normal`?`toUpperCase`:`toLowerCase`]()))),this._overlay_ref&&this.renderKeyboard()}syncNativeKeyboardState(){r.enabled?this.preventNativeKeyboard():this.restoreNativeKeyboardState()}reposition(){!this._overlay_ref||this.preferredPosition()===this._position||(this.close(!0),this.open())}renderKeyboard(){if(!this._overlay_ref)return;let i=this._overlay_ref.overlayElement,e=!this._keyboard_el;this.applyOverlayPosition(),i.replaceChildren();let t=document.createElement(`div`);t.setAttribute(`keyboard-view`,``),t.className=`border-base-200 bg-base-200 flex w-screen flex-col gap-[16px] p-[8px]`,t.style.background=`var(--base-200)`,t.style.borderBottom=this._position===`top`?`1px solid var(--base-200)`:``,t.style.borderTop=this._position===`bottom`?`1px solid var(--base-200)`:``,t.style.display=`flex`,t.style.flexDirection=`column`,t.style.gap=`16px`,t.style.opacity=e?`0`:`1`,t.style.padding=`8px`,t.style.transition=`opacity ${Rt}ms ease`,t.style.width=`100vw`;for(let n of this.keyset()){let a=document.createElement(`div`);a.setAttribute(`row`,``),a.className=`flex items-center justify-center gap-[8px]`,a.style.alignItems=`center`,a.style.display=`flex`,a.style.gap=`8px`,a.style.justifyContent=`center`;for(let c of n)a.appendChild(this.renderKey(c));t.appendChild(a)}i.appendChild(t),this._keyboard_el=t,e&&requestAnimationFrame(()=>{this._keyboard_el===t&&(t.style.opacity=`1`)})}renderKey(i){let e=document.createElement(`button`);if(e.setAttribute(`key`,i),e.setAttribute(`tabindex`,`0`),e.type=`button`,e.className=`border-base-200 bg-base-100 relative cursor-pointer rounded-xl border p-[8px]`,e.style.height=`56px`,e.style.width=i[0]===`{`&&i.length>1?`160px`:`64px`,e.style.transition=`box-shadow 200ms, top 200ms`,e.style.boxShadow=`0 4px 0 0.04px rgba(0, 0, 0, 0.1)`,i===`{space}`&&(e.style.flex=`1`,e.style.minWidth=`160px`,e.style.maxWidth=`400px`),e.textContent=this.keyLabel(i),e.addEventListener(`mousedown`,t=>t.preventDefault()),e.addEventListener(`focus`,()=>this.focusInput()),e.addEventListener(`click`,()=>this.handleKeyPress(i)),i===`{caps}`){let t=document.createElement(`div`);t.setAttribute(`dot`,``),t.className=`absolute top-[8px] right-[8px] h-[8px] w-[8px] rounded-full ${this.state()!==`normal`?`bg-success`:`bg-base-200`}`,e.appendChild(t)}return e}keyLabel(i){return i===`{space}`?`Space`:i===`{caps}`?`Caps Lock`:i===`{backspace}`?`Backspace`:i}preventNativeKeyboard(){let i=this._element.nativeElement;this._native_keyboard_prevented||(this._original_readonly=i.readOnly,this._original_inputmode=i.getAttribute(`inputmode`),this._native_keyboard_prevented=!0),i.readOnly=!0,i.setAttribute(`readonly`,``),i.setAttribute(`inputmode`,`none`)}restoreNativeKeyboardState(){if(!this._native_keyboard_prevented)return;let i=this._element.nativeElement;i.readOnly=this._original_readonly,this._original_readonly?i.setAttribute(`readonly`,``):i.removeAttribute(`readonly`),this._original_inputmode===null?i.removeAttribute(`inputmode`):i.setAttribute(`inputmode`,this._original_inputmode),this._native_keyboard_prevented=!1}applyOverlayPosition(){if(!this._overlay_ref)return;let i=this._overlay_ref.overlayElement;i.style.position=`fixed`,i.style.left=`0`,i.style.right=`0`,i.style.width=`100vw`,i.style.top=this._position===`top`?`0`:``,i.style.bottom=this._position===`bottom`?`0`:``}preferredPosition(){let i=this._element.nativeElement.getBoundingClientRect(),e=i.top;return window.innerHeight-i.bottom>=e?`bottom`:`top`}static{this.ɵfac=function(e){return new(e||r)}}static{this.ɵdir=ea({type:r,selectors:[[`input`,`keyboard`,``],[`textarea`,`keyboard`,``]],hostBindings:function(e,t){e&1&&Nm(`pointerdown`,function(){return t.syncNativeKeyboardState()})(`focus`,function(){return t.onFocus()})(`blur`,function(){return t.onBlur()})(`resize`,function(){return t.reposition()},hI)},inputs:{keyset:[1,`keyset`]},outputs:{keyset:`keysetChange`},features:[am]})}};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
(**
* @license Angular v22.1.5
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*)
*/
export{Se as a,Xi as c,si as d,Ft as i,ci as l,Cn as n,Sn as o,Fi as r,Tt as s,Bt as t,li as u};
;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0e6930f9-6ed1-5e7d-a71f-324a73807484")}catch(e){}}();
//# debugId=0e6930f9-6ed1-5e7d-a71f-324a73807484
//# sourceMappingURL=chunk-B6x60scX.js.map