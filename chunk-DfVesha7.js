import{An as gT,D as Eb,Dr as sb,En as fm,Er as sT,F as Gh,G as Jf,Gn as kl,Gr as wb,Gt as Yt,Kn as km,Nr as t_,Or as sm,Ot as Uf,Pn as hm,Pr as tb,Q as Lm,Qr as xm,R as Hf,Rt as Xb,S as Db,T as Dt$1,Tn as fb,Tt as Tb,U as Jb,Ur as vm,V as Iw,Wt as Ym,X as Lb,Yn as lC,Zt as Zr,an as ay,b as D,fr as pT,ft as Om,gr as qb,h as Cm,hn as cv,ht as PI,i as Ai,ii as yb,ir as nb,kr as st$1,l as Bl,li as zs,mn as cm,nt as Ms,p as Cb,qn as kn,qt as ZB,rn as am,rr as n_,sr as oT,ti as xs,u as C,un as bm,xn as eT,y as Cw,zn as ib}from"./chunk-CPCEWNok.js";import{_ as Zt,b as ee,f as T,o as In,t as An}from"./chunk-Djy708Zl.js";import{o as as,p as ts,t as $t}from"./chunk-D8RFrdk0.js";import{I as De,c as C$1,f as Ge,l as A,p as K,r as f,t as O$1,z as be}from"./main.js";import{D as ss,O as us,d as T$1,r as Et$1,v as ae,y as as$1}from"./chunk-BM2RdtBD.js";import{c as X,s as Ue}from"./chunk-cJgWltxW.js";import{n as mt$1,t as Yt$1}from"./chunk-OLnOYJPq.js";import{a as Pt$1,i as yu,o as Re,s as Rt$1,t as kp}from"./chunk-Cb4cOyP3.js";import{a as qe,t as Kt}from"./chunk-DOMwOlau.js";import{n as Kt$1,t as Bt}from"./chunk-COeQXhRI.js";var et=[`switch`];var tt=[`*`];function it(i,r){i&1&&(Ms(0,`span`,11),Jf(),Ms(1,`svg`,13),cm(2,`path`,14),kl(),Ms(3,`svg`,15),cm(4,`path`,16),kl()())}var nt=new C(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var O=class{source;checked;constructor(r,e){this.source=r,this.checked=e}};var J=(()=>{class i{_elementRef=D(kn);_focusMonitor=D(Et$1);_changeDetectorRef=D(ay);defaults=D(nt);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new O(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=De();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new Dt$1;toggleChange=new Dt$1;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){D(T$1).load(as$1);let e=D(new Ym(`tabindex`),{optional:!0}),o=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=o.color||`accent`,this.id=this._uniqueId=D(ae).getId(`mat-mdc-slide-toggle-`),this.hideIcon=o.hideIcon??!1,this.disabledInteractive=o.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new O(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(o){return new(o||i)};static ɵcmp=lC({type:i,selectors:[[`mat-slide-toggle`]],viewQuery:function(o,t){if(o&1&&vm(et,5),o&2){let d;wb(d=Cb())&&(t._switchElement=d.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(o,t){o&2&&(fm(`id`,t.id),sm(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),Lb(t.color?`mat-`+t.color:``),bm(`mat-mdc-slide-toggle-focused`,t._focused)(`mat-mdc-slide-toggle-checked`,t.checked)(`mat-slide-toggle-full-width`,t.fullWidth)(`_mat-animation-noopable`,t._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,t_],color:`color`,disabled:[2,`disabled`,`disabled`,t_],fullWidth:[2,`fullWidth`,`fullWidth`,t_],disableRipple:[2,`disableRipple`,`disableRipple`,t_],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:n_(e)],checked:[2,`checked`,`checked`,t_],hideIcon:[2,`hideIcon`,`hideIcon`,t_],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,t_]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[oT([{provide:T,useExisting:Ai(()=>i),multi:!0},{provide:ee,useExisting:i,multi:!0}]),xs],ngContentSelectors:tt,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(o,t){if(o&1&&(Db(),Ms(0,`div`,1)(1,`button`,2,0),hm(`click`,function(){return t._handleClick()}),cm(3,`div`,3)(4,`span`,4),Ms(5,`span`,5)(6,`span`,6)(7,`span`,7),cm(8,`span`,8),kl(),Ms(9,`span`,9),cm(10,`span`,10),kl(),tb(11,it,5,0,`span`,11),kl()()(),Ms(12,`label`,12),hm(`click`,function(B){return B.stopPropagation()}),Eb(13),kl()()),o&2){let d=Tb(2);am(`labelPosition`,t.labelPosition),PI(),bm(`mdc-switch--selected`,t.checked)(`mdc-switch--unselected`,!t.checked)(`mdc-switch--checked`,t.checked)(`mdc-switch--disabled`,t.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,t.disabledInteractive),am(`tabIndex`,t.disabled&&!t.disabledInteractive?-1:t.tabIndex)(`disabled`,t.disabled&&!t.disabledInteractive),sm(`id`,t.buttonId)(`name`,t.name)(`aria-label`,t.ariaLabel)(`aria-labelledby`,t._getAriaLabelledBy())(`aria-describedby`,t.ariaDescribedby)(`aria-required`,t.required||null)(`aria-checked`,t.checked)(`aria-disabled`,t.disabled&&t.disabledInteractive?`true`:null),PI(9),am(`matRippleTrigger`,d)(`matRippleDisabled`,t.disableRipple||t.disabled)(`matRippleCentered`,!0),PI(),nb(t.hideIcon?-1:11),PI(),am(`for`,t.buttonId),sm(`id`,t._labelId)}},dependencies:[ss,Ue],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--%NS%mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--%NS%mat-slide-toggle-track-height, 32px);
  border-radius: var(--%NS%mat-slide-toggle-track-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--%NS%mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--%NS%mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-track-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-color, var(--%NS%mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--%NS%mat-slide-toggle-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-hover-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-focus-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-track-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--%NS%mat-slide-toggle-selected-track-color, var(--%NS%mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-track-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-track-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--%NS%mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--%NS%mat-slide-toggle-handle-width);
  height: var(--%NS%mat-slide-toggle-handle-height);
  border-radius: var(--%NS%mat-slide-toggle-handle-shape, var(--%NS%mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--%NS%mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--%NS%mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--%NS%selected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-handle-color, var(--%NS%mat-sys-on-primary));
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-handle-color, var(--%NS%mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-handle-color, var(--%NS%mat-sys-surface));
}
.mdc-switch--%NS%unselected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-handle-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--%NS%unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-handle-color, var(--%NS%mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--%NS%mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
  height: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--%NS%unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-selected-icon-color, var(--%NS%mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--%NS%mat-slide-toggle-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-slide-toggle-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-slide-toggle-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-slide-toggle-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-slide-toggle-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-slide-toggle-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--%NS%mat-slide-toggle-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-slide-toggle-full-width {
  width: 100%;
}
.mat-slide-toggle-full-width .mat-internal-form-field {
  width: 100%;
  justify-content: space-between;
}
.mat-slide-toggle-full-width .mat-internal-form-field label {
  margin: 0;
  flex-grow: 1;
  text-align: end;
}
.mat-slide-toggle-full-width .mdc-form-field--align-end label {
  text-align: start;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})}return i})();var Ze=(()=>{class i{static ɵfac=function(o){return new(o||i)};static ɵmod=zs({type:i});static ɵinj=Zr({imports:[J,be]})}return i})();var lt=(i,r)=>r.key;function st(i,r){i&1&&(Ms(0,`div`,5)(1,`icon`),qb(2,`warning`),kl(),Ms(3,`span`,10),qb(4,`Push notifications are not supported in this browser`),kl()())}function rt(i,r){i&1&&(Ms(0,`div`,6)(1,`icon`),qb(2,`block`),kl(),Ms(3,`span`,10),qb(4,`Notifications have been blocked. Please enable them in your browser settings.`),kl()())}function ct(i,r){if(i&1){let e=fb();Ms(0,`div`,7)(1,`icon`,11),qb(2,`notifications_off`),kl(),Ms(3,`p`,12),qb(4,` Enable push notifications to receive alerts even when the app is in the background. `),kl(),Ms(5,`button`,13),hm(`click`,function(){Hf(e);return Uf(yb().requestPermission())}),Ms(6,`icon`,14),qb(7,`notifications_active`),kl(),qb(8,` Enable Notifications `),kl()()}}function dt(i,r){if(i&1){let e=fb();Ms(0,`div`,17)(1,`div`,22)(2,`icon`),qb(3),kl(),Ms(4,`div`)(5,`div`,23),qb(6),kl(),Ms(7,`div`,21),qb(8),kl()()(),Ms(9,`mat-slide-toggle`,24),hm(`change`,function(t){let d=Hf(e).$implicit;return Uf(yb(2).toggleSeverity(d.key,t.checked))}),kl()()}if(i&2){let e=r.$implicit,o=yb(2);PI(2),Lb(`text-3xl `+e.color_class),PI(),xm(e.icon),PI(3),Bl(` `,e.label,` `),PI(2),Bl(` `,e.description,` `),PI(),am(`checked`,o.push.config()[e.key]),sm(`aria-label`,`Toggle `+e.label+` notifications`)}}function mt(i,r){if(i&1&&(Ms(0,`p`,15),qb(1,` Choose which alert severity levels should trigger push notifications. `),kl(),Ms(2,`div`,16),ib(3,dt,10,7,`div`,17,lt),kl(),Ms(5,`div`,18)(6,`div`,19)(7,`icon`,20),qb(8,`info`),kl(),Ms(9,`span`,21),qb(10,`Notifications will be sent when new alerts matching these severities are detected.`),kl()()()),i&2){let e=yb();PI(3),sb(e.severity_options)}}var Ye=(()=>{class i{constructor(){this.push=D(yu),this.severity_options=[{key:`critical`,label:`Critical`,description:`Immediate attention required`,icon:`dangerous`,color_class:`text-error`},{key:`high`,label:`High`,description:`Important issues that may need attention`,icon:`warning`,color_class:`text-warning`},{key:`medium`,label:`Medium`,description:`Informational alerts`,icon:`error`,color_class:`text-info`},{key:`low`,label:`Low`,description:`Low priority notifications`,icon:`info`,color_class:`text-base-400`}]}async requestPermission(){await this.push.requestPermission()}toggleSeverity(e,o){this.push.setSeverityEnabled(e,o)}static{this.ɵfac=function(o){return new(o||i)}}static{this.ɵcmp=lC({type:i,selectors:[[`placeos-push-notification-settings`]],decls:15,vars:1,consts:[[1,`w-md`,`max-w-full`],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`mx-2`,`mt-2`,`h-14`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`type`,`button`,`matRipple`,``,`aria-label`,`Close notification settings`,`mat-dialog-close`,``,1,`rounded-sm`],[1,`p-4`],[1,`bg-warning-light`,`text-warning`,`flex`,`items-center`,`space-x-2`,`rounded-sm`,`p-3`],[1,`bg-error-light`,`text-error`,`flex`,`items-center`,`space-x-2`,`rounded-sm`,`p-3`],[1,`flex`,`flex-col`,`items-center`,`space-y-4`,`py-4`],[1,`border-base-300`,`flex`,`justify-end`,`border-t`,`p-2`],[`btn`,``,`matRipple`,``,`mat-dialog-close`,``,1,`inverse`,`w-40`],[1,`text-sm`],[1,`text-base-400`,`text-6xl`],[1,`stagehand-subtle`,`text-center`,`text-sm`],[`btn`,``,`matRipple`,``,1,`w-full`,3,`click`],[1,`mr-2`],[1,`stagehand-subtle`,`mb-4`,`text-sm`],[1,`space-y-3`],[1,`border-base-300`,`flex`,`items-center`,`justify-between`,`rounded-sm`,`border`,`p-3`],[1,`bg-info-light`,`mt-4`,`rounded-sm`,`p-3`],[1,`flex`,`items-center`,`space-x-2`],[1,`text-info`,`text-2xl`],[1,`stagehand-subtle`,`text-xs`],[1,`flex`,`items-center`,`space-x-3`],[1,`font-medium`],[3,`change`,`checked`]],template:function(o,t){o&1&&(Ms(0,`div`,0)(1,`header`,1)(2,`h2`,2),qb(3,`Push Notifications`),kl(),Ms(4,`button`,3)(5,`icon`),qb(6,`close`),kl()()(),Ms(7,`main`,4),tb(8,st,5,0,`div`,5)(9,rt,5,0,`div`,6)(10,ct,9,0,`div`,7)(11,mt,11,0),kl(),Ms(12,`footer`,8)(13,`button`,9),qb(14,` Close `),kl()()()),o&2&&(PI(8),nb(t.push.supported()?t.push.permission()===`denied`?9:t.push.enabled()?11:10:8))},dependencies:[Pt$1,Rt$1,us,ss,Ze,J,O$1,In],encapsulation:2})}}return i})();var ht=i=>[i];var pt=(i,r)=>r.route;var Je=(i,r)=>r.id;function gt(i,r){if(i&1&&(Ms(0,`div`,22)(1,`div`,23),qb(2,` Support group `),kl(),Ms(3,`div`,18),qb(4),kl()(),Ms(5,`icon`,24),qb(6,`unfold_more`),kl()),i&2){let e=yb(2);PI(4),Bl(` `,e.group_label(),` `)}}function _t(i,r){if(i&1){let e=fb();Ms(0,`div`,8)(1,`button`,21),hm(`click`,function(){Hf(e);return Uf(yb().selectGroup())}),Ms(2,`icon`,14),qb(3),kl(),tb(4,gt,7,1),kl()()}if(i&2){let e=yb();PI(),bm(`justify-center`,e.is_compact()),am(`matTooltip`,e.is_compact()?e.group_label():``),sm(`aria-label`,`Support group: `+e.group_label()),PI(2),xm(e.selected_group()?`group`:`public`),PI(),nb(e.is_compact()?-1:4)}}function ut(i,r){if(i&1&&(Ms(0,`mat-option`,30),qb(1),kl()),i&2){let e=r.$implicit;am(`value`,e.id),PI(),xm(e.display_name||e.name)}}function bt(i,r){if(i&1){let e=fb();Ms(0,`label`,26),qb(1,` Region `),kl(),Ms(2,`mat-form-field`,27)(3,`mat-select`,28),km(`ngModelChange`,function(t){Hf(e);let d=yb(3);return Xb(d.region,t)||(d.region=t),Uf(t)}),hm(`selectionChange`,function(t){Hf(e);let d=yb(3);return Uf(d.setRegion(d.regionById(t.value)))}),Ms(4,`mat-option`,29),qb(5),pT(6,`translate`),kl(),ib(7,ut,2,2,`mat-option`,30,Je),kl(),Iw(),kl()}if(i&2){yb(2);let e=eT(0),o=yb();PI(3),Om(`ngModel`,o.region),Cw(),PI(2),xm(gT(6,2,`COMMON.REGION_ALL`)),PI(2),sb(e)}}function ft(i,r){if(i&1&&(Ms(0,`mat-option`,30),qb(1),kl()),i&2){let e=r.$implicit;am(`value`,e.id),PI(),xm(e.display_name||e.name)}}function vt(i,r){if(i&1){let e=fb();Ms(0,`label`,31),qb(1,` Building `),kl(),Ms(2,`mat-form-field`,27)(3,`mat-select`,32),km(`ngModelChange`,function(t){Hf(e);let d=yb(3);return Xb(d.building,t)||(d.building=t),Uf(t)}),hm(`selectionChange`,function(t){Hf(e);let d=yb(3);return Uf(d.setBuilding(d.buildingById(t.value)))}),Ms(4,`mat-option`,29),qb(5),pT(6,`translate`),kl(),ib(7,ft,2,2,`mat-option`,30,Je),kl(),Iw(),kl()}if(i&2){yb(2);let e=eT(1),o=yb();PI(3),Om(`ngModel`,o.building),Cw(),PI(2),xm(gT(6,2,`COMMON.BUILDING_ALL`)),PI(2),sb(e)}}function wt(i,r){if(i&1&&(Ms(0,`div`,25),tb(1,bt,9,4),tb(2,vt,9,4),kl()),i&2){yb();let e=eT(0),o=eT(1),t=yb();PI(),nb(e.length>0?1:-1),PI(),nb(o.length>0&&t.region()?2:-1)}}function St(i,r){if(i&1&&(Lm(0)(1),tb(2,wt,3,2,`div`,25)),i&2){let e=yb(),o=Jb(e.region_list());PI();let t=Jb(e.building_list());PI(),nb(o.length||t.length?2:-1)}}function yt(i,r){if(i&1&&(Ms(0,`span`,34),qb(1),kl()),i&2){let e=yb().$implicit;PI(),xm(e.name)}}function xt(i,r){if(i&1&&(Ms(0,`a`,10)(1,`icon`,33),qb(2),kl(),tb(3,yt,2,1,`span`,34),kl()),i&2){let e=r.$implicit,o=yb();am(`routerLink`,sT(5,ht,e.route))(`matTooltip`,o.is_compact()?e.name:``),sm(`aria-label`,e.aria_label),PI(2),xm(e.icon),PI(),nb(o.is_compact()?-1:3)}}function kt(i,r){if(i&1&&(Ms(0,`span`,15),qb(1,`Dark Mode`),kl(),Ms(2,`span`,36),qb(3),kl()),i&2){let e=yb(2);PI(2),bm(`bg-success`,e.dark_mode())(`text-success-content`,e.dark_mode())(`bg-base-100`,!e.dark_mode())(`text-base-content`,!e.dark_mode()),PI(),Bl(` `,e.dark_mode()?`ON`:`OFF`,` `)}}function Ct(i,r){if(i&1){let e=fb();Ms(0,`button`,35),hm(`click`,function(){Hf(e);return Uf(yb().toggleDarkMode())}),Ms(1,`icon`,14),qb(2),kl(),tb(3,kt,4,9),kl()}if(i&2){let e=yb();am(`matTooltip`,e.is_compact()?e.dark_mode()?`Switch to Light Mode`:`Switch to Dark Mode`:``),sm(`aria-label`,e.dark_mode()?`Switch to light mode`:`Switch to dark mode`),PI(2),xm(e.dark_mode()?`dark_mode`:`light_mode`),PI(),nb(e.is_compact()?-1:3)}}function Nt(i,r){i&1&&(Ms(0,`span`,15),qb(1,`Notifications`),kl())}function Mt(i,r){i&1&&(Ms(0,`span`,16),qb(1,`ON`),kl())}function Tt(i,r){i&1&&(Ms(0,`span`,18),qb(1,` Launch PlaceOS Backoffice `),kl())}function Et(i,r){i&1&&(Ms(0,`icon`,19),qb(1,`open_in_new`),kl())}function It(i,r){i&1&&(Ms(0,`p`,20),qb(1,` Access system configuration and management `),kl())}function Pt(){return A(`backoffice_link`,`${location.origin}/backoffice/`)}var Rt=st$1(typeof matchMedia==`function`&&matchMedia(`(max-width: 767px)`).matches);var Ke=(()=>{class i{constructor(){this._dash=D(kp),this._org=D(Ge),this._dialog=D(Re),this._settings=D(K),this._groups=D(C$1),this.push=D(yu),this.is_compact=Rt,this._allow_dark_mode=this._settings.signal(`allow_dark_mode`,!1),this._theme=this._settings.theme_signal,this.notifications_active=Yt(()=>{if(!this.push.enabled())return!1;let e=this.push.config();return e.critical||e.high||e.medium||e.low}),this.dark_mode=Yt(()=>this._theme()===`dark`),this.can_change_dark_mode=Yt(()=>!!this._allow_dark_mode()),this.backoffice_link=Pt(),this.show_recorder_view=A(`show_recorder_view`,!1),this.analytics_pages=A(`analytics_pages`,[]),this.nav_links=Yt(()=>[{route:`/alerts`,name:`Alerts`,aria_label:`Alerts`,icon:`notifications`},{route:`/remote-support`,name:`Remote Support`,aria_label:`Remote support`,icon:`wifi`},...this.analytics_pages()?.length>0?[{route:`/analytics`,name:`Analytics`,aria_label:`Analytics`,icon:`show_chart`}]:[],{route:`/dashboards`,name:`Manage Dashboards`,aria_label:`Manage dashboards`,icon:`dashboard`},...this.show_recorder_view()?[{route:`/recorder-grid`,name:`Recorder Streams`,aria_label:`Recorder streams`,icon:`stream`}]:[]]),this.region=this._dash.region_id,this.building=this._dash.building_id,this.selected_group=this._groups.selected_group,this.group_label=Yt(()=>this.selected_group()?.group.name||`All groups`),this.show_group_selector=Yt(()=>this._groups.can_view_all()||this._groups.groups().length>0),this.region_list=Yt(()=>{let e=this._groups.scope(),o=this._org.region_list();return e?o.filter(t=>e.zones.has(t.id)):o}),this.building_list=Yt(()=>{let e=this._groups.scope(),o=this._org.active_buildings();return e?o.filter(t=>e.zones.has(t.id)):o}),this.setRegion=e=>{this._org.region=e,this.building.set(``),this._dash.listenForDashboardAlerts(!0)},this.setBuilding=e=>{this._org.building=e,this._dash.listenForDashboardAlerts(!0)}}regionById(e){return this.region_list().find(o=>o.id===e)||null}buildingById(e){return this.building_list().find(o=>o.id===e)||null}async selectGroup(){let{GroupSelectModalComponent:e}=await import(`./chunk-Fr97TatY.js`),t=await cv(this._dialog.open(e,{data:{groups:this._groups.groups(),selected_group_id:this._groups.group_id(),show_all_groups:this._groups.can_view_all()}}).afterClosed(),{defaultValue:void 0});t!==void 0&&this._groups.setSelectedGroup(t)}toggleCompact(){this.is_compact.update(e=>!e)}toggleDarkMode(){this._settings.setTheme(this.dark_mode()?`light`:`dark`)}openNotificationSettings(){this._dialog.open(Ye)}static{this.ɵfac=function(o){return new(o||i)}}static{this.ɵcmp=lC({type:i,selectors:[[`sidebar`]],decls:27,vars:31,consts:[[`sidebar`,``,`aria-label`,`Primary`,1,`bg-secondary`,`text-secondary-content`,`flex`,`h-full`,`flex-col`],[1,`flex`,`items-center`,`px-1`],[`header`,``,1,`overflow-hidden`],[1,`px-2`,`py-4`],[1,`truncate`,`text-2xl`,`font-medium`],[1,`stagehand-muted`,`truncate`,`text-xs`],[`icon`,``,`type`,`button`,`matRipple`,``,`matTooltipPosition`,`right`,1,`rounded-sm`,3,`click`,`matTooltip`],[1,`text-3xl`],[1,`px-2`,`pt-1`],[1,`mt-2`,`flex-1`,`space-y-1`,`overflow-auto`],[`matRipple`,``,`routerLinkActive`,`bg-secondary-focus!`,`ariaCurrentWhenActive`,`page`,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`relative`,`flex`,`w-full`,`items-center`,`space-x-4`,`p-2`,3,`routerLink`,`matTooltip`],[1,`flex`,`flex-col`,`gap-2`,`py-4`],[`matRipple`,``,`type`,`button`,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`relative`,`flex`,`w-full`,`items-center`,`justify-center`,`gap-2`,`rounded-sm`,`p-2`,3,`matTooltip`],[`matRipple`,``,`type`,`button`,`aria-label`,`Notification settings`,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`relative`,`flex`,`w-full`,`items-center`,`justify-center`,`gap-2`,`rounded-sm`,`p-2`,3,`click`,`matTooltip`],[1,`text-2xl`],[1,`flex-1`,`truncate`,`text-left`,`text-sm`],[1,`bg-success`,`text-success-content`,`ml-auto`,`rounded-full`,`px-2`,`py-0.5`,`text-xs`],[`btn`,``,`matRipple`,``,`matTooltipPosition`,`right`,`aria-label`,`Launch PlaceOS Backoffice in a new tab`,`target`,`_blank`,`rel`,`noopener noreferrer`,1,`inverse`,3,`matTooltip`,`href`],[1,`truncate`,`text-sm`],[1,`text-base-100`,`text-3xl`],[1,`stagehand-muted`,`text-center`,`text-xs`],[`matRipple`,``,`type`,`button`,`group-selector`,``,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`border-base-100/20`,`flex`,`w-full`,`items-center`,`gap-2`,`rounded-sm`,`border`,`p-2`,`text-left`,3,`click`,`matTooltip`],[1,`min-w-0`,`flex-1`],[1,`stagehand-muted`,`text-xs`,`font-medium`,`tracking-wide`,`uppercase`],[1,`text-xl`],[1,`space-y-2`,`p-2`],[`for`,`sidebar-region`,1,`block`,`px-1`,`text-xs`,`font-medium`,`tracking-wide`,`uppercase`],[`appearance`,`outline`,1,`no-subscript`,`white-faded`,`w-full`],[`id`,`sidebar-region`,`aria-label`,`Region`,3,`ngModelChange`,`selectionChange`,`ngModel`],[`value`,``],[3,`value`],[`for`,`sidebar-building`,1,`block`,`px-1`,`text-xs`,`font-medium`,`tracking-wide`,`uppercase`],[`id`,`sidebar-building`,`aria-label`,`Building`,3,`ngModelChange`,`selectionChange`,`ngModel`],[1,`ml-0!`,`text-3xl`],[1,`truncate`],[`matRipple`,``,`type`,`button`,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`relative`,`flex`,`w-full`,`items-center`,`justify-center`,`gap-2`,`rounded-sm`,`p-2`,3,`click`,`matTooltip`],[1,`ml-auto`,`rounded-full`,`px-2`,`py-0.5`,`text-xs`]],template:function(o,t){o&1&&(Ms(0,`nav`,0)(1,`div`,1)(2,`div`,2)(3,`div`,3)(4,`div`,4),qb(5,` Stagehand `),kl(),Ms(6,`div`,5),qb(7,` by PlaceOS `),kl()()(),Ms(8,`button`,6),hm(`click`,function(){return t.toggleCompact()}),Ms(9,`icon`,7),qb(10),kl()()(),tb(11,_t,5,6,`div`,8),tb(12,St,3,3),Ms(13,`div`,9),ib(14,xt,4,7,`a`,10,pt),kl(),Ms(16,`div`,11),tb(17,Ct,4,4,`button`,12),Ms(18,`button`,13),hm(`click`,function(){return t.openNotificationSettings()}),Ms(19,`icon`,14),qb(20),kl(),tb(21,Nt,2,0,`span`,15),tb(22,Mt,2,0,`span`,16),kl(),Ms(23,`a`,17),tb(24,Tt,2,0,`span`,18),tb(25,Et,2,0,`icon`,19),kl(),tb(26,It,2,0,`p`,20),kl()()),o&2&&(Cm(`width`,t.is_compact()?`3.5rem`:`16rem`),PI(2),Cm(`width`,t.is_compact()?`0rem`:`13rem`),PI(6),bm(`w-14`,t.is_compact()),am(`matTooltip`,t.is_compact()?`Expand Sidebar`:`Collapse Sidebar`),sm(`aria-label`,t.is_compact()?`Expand sidebar`:`Collapse sidebar`),PI(2),xm(t.is_compact()?`menu`:`close`),PI(),nb(t.show_group_selector()?11:-1),PI(),nb(t.is_compact()?-1:12),PI(2),sb(t.nav_links()),PI(2),bm(`px-4`,!t.is_compact())(`px-0`,t.is_compact()),PI(),nb(t.can_change_dark_mode()?17:-1),PI(),am(`matTooltip`,t.is_compact()?`Notification Settings`:``),PI(2),xm(t.notifications_active()?`notifications_active`:`notifications_off`),PI(),nb(t.is_compact()?-1:21),PI(),nb(t.notifications_active()&&!t.is_compact()?22:-1),PI(),bm(`min-w-0`,t.is_compact())(`base`,!t.is_compact())(`clear`,t.is_compact()),am(`matTooltip`,t.is_compact()?`Launch PlaceOS Backoffice`:``)(`href`,t.backoffice_link(),Gh),PI(),nb(t.is_compact()?-1:24),PI(),nb(t.is_compact()?25:-1),PI(),nb(t.is_compact()?-1:26))},dependencies:[us,ss,Yt$1,mt$1,O$1,as,$t,ts,Kt,qe,Kt$1,Bt,X,In,An,Zt,f],styles:[`[sidebar][_ngcontent-%COMP%], [header][_ngcontent-%COMP%]{transition:width .2s}
/*# sourceMappingURL=sidebar.component.css.map */`]})}}return i})();var Dt=[[[``,`page-header-start`,``]],[[``,`page-header`,``]],`*`];var Lt=[`[page-header-start]`,`[page-header]`,`*`];var Pi=(()=>{class i{constructor(){this.heading=ZB.required()}static{this.ɵfac=function(o){return new(o||i)}}static{this.ɵcmp=lC({type:i,selectors:[[`stagehand-page`]],inputs:{heading:[1,`heading`]},ngContentSelectors:Lt,decls:10,vars:1,consts:[[1,`bg-base-200`,`absolute`,`inset-0`,`flex`],[1,`flex`,`w-px`,`flex-1`,`flex-col`],[1,`border-base-400`,`bg-base-100`,`flex`,`h-18`,`w-full`,`items-center`,`justify-between`,`space-x-2`,`p-4`],[1,`text-2xl`,`font-bold`],[`id`,`stagehand-page-content`,1,`w-full`,`flex-1`,`overflow-auto`]],template:function(o,t){o&1&&(Db(Dt),Ms(0,`div`,0),cm(1,`sidebar`),Ms(2,`div`,1)(3,`header`,2),Eb(4),Ms(5,`h1`,3),qb(6),kl(),Eb(7,1),kl(),Ms(8,`main`,4),Eb(9,2),kl()()()),o&2&&(PI(6),xm(t.heading()))},dependencies:[Ke],encapsulation:2})}}return i})();export{Pt as n,Pi as t};
;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="87bec24c-ab92-5fd5-a4dc-524a4bb34150")}catch(e){}}();
//# debugId=87bec24c-ab92-5fd5-a4dc-524a4bb34150
//# sourceMappingURL=chunk-DfVesha7.js.map