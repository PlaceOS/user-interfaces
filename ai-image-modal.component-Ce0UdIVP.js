import{$a as ig,$t as KP,B as Ct,Br as Vt$1,Cn as NM,Ec as xI,Et as Gr,Fn as OI,Fs as t6,Ft as I0,G as DS,Gi as ar,Gr as Wi,Hr as W,J as Dg,Jr as Wr,Js as uS,Kc as ze,Ki as ate,Kt as JI,Ma as fr,Os as sO,P as CE,Pa as g0,Pr as Ut$1,Ps as ste,Qa as ie,R as Cf,So as l0,Tn as NU,Uc as z,Us as u0,Vs as tg,Vt as Ir,Wt as J4,Xc as l,Yn as Pa,Yr as Wt$1,Z as E,Zc as m,Zr as X,_a as ee,a as $i,aa as cf,ai as Yae,an as Kr,ar as Qo,as as p7,bn as Mx,c as $r,di as Yr,do as jse,ea as c0,ec as ur,ei as Xe,f as AI,fa as dr,fr as Rt,fs as q0,ga as eT,hn as Mae,ir as Qe,is as p,j as Bt$1,jn as Nu,jo as ln,kr as UI,ks as sP,l as $se,mr as S7,pn as MM,q as De,qt as Je,si as Yi,st as Es,to as is,u as A0,ua as dS,uc as ve,uo as jr,ur as Rn,ut as Eu,vc as wd,w as BI,xc as wn,xi as Zo,xr as TE,yn as Mu,zi as aO,zr as Ve,zs as tc}from"./chunk-hf_aUEat.js";import"./chunk-TRQt2bhx.js";import{W as sm,z as og}from"./chunk-DSH9ZMIg.js";import{n as Z,t as J}from"./chunk-DbOhEHxG.js";import{t as f}from"./chunk-BF33E0YH.js";import{$ as At,A as ci$1,_ as qr,et as B,i as Pe,n as mt,nt as v,o as Cn,p as Ue,r as Be,t as Yt$1,tt as ct}from"./main.js";import{n as r,t as i}from"./chunk-BtAvGWFl.js";import"./chunk-BMfCDTfy.js";import{n as Pt,t as Bt$2}from"./chunk-BSGOBVB6.js";import{t as O}from"./chunk-BTkTQQ6K.js";var Lt=[`switch`];var Bt=[`*`];function Ot(a,h){a&1&&(ar(0,`span`,11),DS(),ar(1,`svg`,13),Qo(2,`path`,14),$r(),ar(3,`svg`,15),Qo(4,`path`,16),$r()())}var Vt=new E(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var Se=class{source;checked;constructor(h,e){this.source=h,this.checked=e}};var se=(()=>{class a{_elementRef=p(W);_focusMonitor=p(cf);_changeDetectorRef=p(Bt$1);defaults=p(Vt);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Se(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=Ir();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new z;toggleChange=new z;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){p(Wt$1).load(sO);let e=p(new JI(`tabindex`),{optional:!0}),i=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=i.color||`accent`,this.id=this._uniqueId=p(ln).getId(`mat-mdc-slide-toggle-`),this.hideIcon=i.hideIcon??!1,this.disabledInteractive=i.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Se(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(i){return new(i||a)};static ɵcmp=ve({type:a,selectors:[[`mat-slide-toggle`]],viewQuery:function(i,t){if(i&1&&Kr(Lt,5),i&2){let n;$i(n=Yi())&&(t._switchElement=n.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(i,t){i&2&&(Yr(`id`,t.id),Ut$1(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),tg(t.color?`mat-`+t.color:``),ze(`mat-mdc-slide-toggle-focused`,t._focused)(`mat-mdc-slide-toggle-checked`,t.checked)(`mat-slide-toggle-full-width`,t.fullWidth)(`_mat-animation-noopable`,t._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,Ve],color:`color`,disabled:[2,`disabled`,`disabled`,Ve],fullWidth:[2,`fullWidth`,`fullWidth`,Ve],disableRipple:[2,`disableRipple`,`disableRipple`,Ve],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:KP(e)],checked:[2,`checked`,`checked`,Ve],hideIcon:[2,`hideIcon`,`hideIcon`,Ve],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Ve]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[Je([{provide:is,useExisting:Qe(()=>a),multi:!0},{provide:tc,useExisting:a,multi:!0}]),Xe],ngContentSelectors:Bt,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(i,t){if(i&1&&(fr(),ar(0,`div`,1)(1,`button`,2,0),Ct(`click`,function(){return t._handleClick()}),Qo(3,`div`,3)(4,`span`,4),ar(5,`span`,5)(6,`span`,6)(7,`span`,7),Qo(8,`span`,8),$r(),ar(9,`span`,9),Qo(10,`span`,10),$r(),Gr(11,Ot,5,0,`span`,11),$r()()(),ar(12,`label`,12),Ct(`click`,function(r){return r.stopPropagation()}),wn(13),$r()()),i&2){let n=A0(2);Zo(`labelPosition`,t.labelPosition),Vt$1(),ze(`mdc-switch--selected`,t.checked)(`mdc-switch--unselected`,!t.checked)(`mdc-switch--checked`,t.checked)(`mdc-switch--disabled`,t.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,t.disabledInteractive),Zo(`tabIndex`,t.disabled&&!t.disabledInteractive?-1:t.tabIndex)(`disabled`,t.disabled&&!t.disabledInteractive),Ut$1(`id`,t.buttonId)(`name`,t.name)(`aria-label`,t.ariaLabel)(`aria-labelledby`,t._getAriaLabelledBy())(`aria-describedby`,t.ariaDescribedby)(`aria-required`,t.required||null)(`aria-checked`,t.checked)(`aria-disabled`,t.disabled&&t.disabledInteractive?`true`:null),Vt$1(9),Zo(`matRippleTrigger`,n)(`matRippleDisabled`,t.disableRipple||t.disabled)(`matRippleCentered`,!0),Vt$1(),jr(t.hideIcon?-1:11),Vt$1(),Zo(`for`,t.buttonId),Ut$1(`id`,t._labelId)}},dependencies:[TE,Mae],styles:[`.mdc-switch {
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
`],encapsulation:2})}return a})();var Ie=(()=>{class a{static ɵfac=function(i){return new(i||a)};static ɵmod=ie({type:a});static ɵinj=X({imports:[se,Rt]})}return a})();var Ut=(a,h)=>h.id;var Wt=(a,h)=>h.family;function $t(a,h){if(a&1&&(ar(0,`mat-option`,25),Pa(1),$r()),a&2){let e=Wr().$implicit;Zo(`value`,e.family),Vt$1(),xI(e.label)}}function qt(a,h){if(a&1&&Gr(0,$t,2,2,`mat-option`,25),a&2){let e=h.$implicit;jr(e.family?0:-1)}}function Ht(a,h){if(a&1){let e=g0();ar(0,`button`,26),Ct(`click`,function(){let t=uS(e).$implicit,n=Wr().$implicit;return dS(Wr().patchBlock(n.id,{colour:t}))}),$r()}if(a&2){let e=h.$implicit,i=Wr().$implicit;Nu(`background`,e),ze(`ring-2`,i.colour===e),Ut$1(`aria-label`,e)}}function Xt(a,h){if(a&1){let e=g0();ar(0,`div`,3)(1,`div`,7)(2,`mat-form-field`,8)(3,`textarea`,9),ig(4,`translate`),ig(5,`translate`),Ct(`ngModelChange`,function(t){let n=uS(e).$implicit;return dS(Wr().patchBlock(n.id,{text:t}))}),$r(),NM(),$r(),ar(6,`button`,10),ig(7,`translate`),Ct(`click`,function(){let t=uS(e).$implicit;return dS(Wr().removeBlock(t.id))}),ar(8,`icon`),Pa(9,`delete`),$r()()(),ar(10,`div`,11)(11,`mat-form-field`,12)(12,`mat-select`,13),ig(13,`translate`),Ct(`ngModelChange`,function(t){let n=uS(e).$implicit;return dS(Wr().patchBlock(n.id,{role:t}))}),ar(14,`mat-option`,14),Pa(15),ig(16,`translate`),$r(),ar(17,`mat-option`,15),Pa(18),ig(19,`translate`),$r(),ar(20,`mat-option`,16),Pa(21),ig(22,`translate`),$r()(),NM(),$r(),ar(23,`mat-form-field`,12)(24,`mat-select`,13),ig(25,`translate`),Ct(`ngModelChange`,function(t){let n=uS(e).$implicit;return dS(Wr().patchBlock(n.id,{align:t}))}),ar(26,`mat-option`,17),Pa(27),ig(28,`translate`),$r(),ar(29,`mat-option`,18),Pa(30),ig(31,`translate`),$r(),ar(32,`mat-option`,19),Pa(33),ig(34,`translate`),$r()(),NM(),$r(),ar(35,`mat-form-field`,20)(36,`mat-select`,13),ig(37,`translate`),Ct(`ngModelChange`,function(t){let n=uS(e).$implicit;return dS(Wr().patchBlock(n.id,{font:t}))}),ar(38,`mat-option`,21),Pa(39),ig(40,`translate`),$r(),l0(41,qt,1,1,null,null,Wt),$r(),NM(),$r()(),ar(43,`div`,22),l0(44,Ht,1,5,`button`,23,c0),ar(46,`input`,24),ig(47,`translate`),ig(48,`translate`),Ct(`input`,function(t){let n=uS(e).$implicit;return dS(Wr().setBlockColour(n.id,t))}),$r(),ar(49,`mat-slide-toggle`,13),Ct(`ngModelChange`,function(t){let n=uS(e).$implicit;return dS(Wr().patchBlock(n.id,{panel:t}))}),Pa(50),ig(51,`translate`),$r(),NM(),$r()()}if(a&2){let e=h.$implicit,i=Wr();Vt$1(3),Zo(`ngModel`,e.text)(`placeholder`,sP(4,23,i.placeholderFor(e.role))),Ut$1(`aria-label`,sP(5,25,i.placeholderFor(e.role))),MM(),Vt$1(3),Zo(`disabled`,i.state().blocks.length<2)(`matTooltip`,sP(7,27,`SIGNAGE_MANAGER.AI_REMOVE_TEXT`)),Vt$1(6),Zo(`ngModel`,e.role),Ut$1(`aria-label`,sP(13,29,`SIGNAGE_MANAGER.AI_TEXT_SIZE`)),MM(),Vt$1(3),xI(sP(16,31,`SIGNAGE_MANAGER.AI_ROLE_HEADLINE`)),Vt$1(3),xI(sP(19,33,`SIGNAGE_MANAGER.AI_ROLE_SUBHEADING`)),Vt$1(3),xI(sP(22,35,`SIGNAGE_MANAGER.AI_ROLE_BODY`)),Vt$1(3),Zo(`ngModel`,e.align),Ut$1(`aria-label`,sP(25,37,`SIGNAGE_MANAGER.AI_TEXT_ALIGN`)),MM(),Vt$1(3),xI(sP(28,39,`SIGNAGE_MANAGER.AI_ALIGN_LEFT`)),Vt$1(3),xI(sP(31,41,`SIGNAGE_MANAGER.AI_ALIGN_CENTRE`)),Vt$1(3),xI(sP(34,43,`SIGNAGE_MANAGER.AI_ALIGN_RIGHT`)),Vt$1(3),Zo(`ngModel`,e.font),Ut$1(`aria-label`,sP(37,45,`SIGNAGE_MANAGER.AI_TEXT_FONT`)),MM(),Vt$1(3),xI(sP(40,47,i.brand_font_label())),Vt$1(2),u0(i.fonts),Vt$1(3),u0(i.palette()),Vt$1(2),Zo(`value`,e.colour)(`matTooltip`,sP(47,49,`SIGNAGE_MANAGER.AI_TEXT_ANY_COLOUR`)),Ut$1(`aria-label`,sP(48,51,`SIGNAGE_MANAGER.AI_TEXT_ANY_COLOUR`)),Vt$1(3),Zo(`ngModel`,e.panel),MM(),Vt$1(),Wi(` `,sP(51,53,`SIGNAGE_MANAGER.AI_TEXT_PANEL`),` `)}}function Yt(a,h){if(a&1){let e=g0();ar(0,`button`,29),Ct(`click`,function(){uS(e),Wr(2);return dS(A0(13).click())}),Pa(1),ig(2,`translate`),$r()}if(a&2){let e=Wr(2);Zo(`disabled`,e.uploading()),Vt$1(),Wi(` `,sP(2,2,e.uploading()?`SIGNAGE_MANAGER.AI_LOGO_UPLOADING`:`SIGNAGE_MANAGER.AI_ADD_LOGO`),` `)}}function Qt(a,h){if(a&1&&(ar(0,`span`,27),Pa(1),ig(2,`translate`),$r(),Gr(3,Yt,3,4,`button`,28)),a&2){let e=Wr();Vt$1(),xI(sP(2,2,e.can_set_logo()?`SIGNAGE_MANAGER.AI_NO_LOGO_YET`:`SIGNAGE_MANAGER.AI_NO_LOGO_ADMIN`)),Vt$1(2),jr(e.can_set_logo()?3:-1)}}function Jt(a,h){if(a&1){let e=g0();ar(0,`mat-form-field`,35)(1,`mat-label`),Pa(2),ig(3,`translate`),$r(),ar(4,`mat-select`,13),Ct(`ngModelChange`,function(t){uS(e);return dS(Wr(3).patch({logo_choice:t}))}),ar(5,`mat-option`,36),Pa(6),ig(7,`translate`),$r(),ar(8,`mat-option`,37),Pa(9),ig(10,`translate`),$r(),ar(11,`mat-option`,38),Pa(12),ig(13,`translate`),$r()(),NM(),$r()}if(a&2){let e=Wr(3);Vt$1(2),xI(sP(3,5,`SIGNAGE_MANAGER.AI_LOGO_VERSION`)),Vt$1(2),Zo(`ngModel`,e.state().logo_choice),MM(),Vt$1(2),xI(sP(7,7,`SIGNAGE_MANAGER.AI_LOGO_AUTO`)),Vt$1(3),xI(sP(10,9,`SIGNAGE_MANAGER.BRAND_LOGO_ON_LIGHT`)),Vt$1(3),xI(sP(13,11,`SIGNAGE_MANAGER.BRAND_LOGO_ON_DARK`))}}function Kt(a,h){if(a&1){let e=g0();ar(0,`mat-form-field`,30)(1,`mat-select`,13),ig(2,`translate`),Ct(`ngModelChange`,function(t){uS(e);return dS(Wr(2).patch({logo_position:t}))}),ar(3,`mat-option`,31),Pa(4),ig(5,`translate`),$r(),ar(6,`mat-option`,32),Pa(7),ig(8,`translate`),$r(),ar(9,`mat-option`,33),Pa(10),ig(11,`translate`),$r(),ar(12,`mat-option`,34),Pa(13),ig(14,`translate`),$r()(),NM(),$r(),Gr(15,Jt,14,13,`mat-form-field`,35)}if(a&2){let e=Wr(2);Vt$1(),Zo(`ngModel`,e.state().logo_position),Ut$1(`aria-label`,sP(2,7,`SIGNAGE_MANAGER.AI_LOGO_POSITION`)),MM(),Vt$1(3),xI(sP(5,9,`SIGNAGE_MANAGER.AI_POS_BOTTOM_RIGHT`)),Vt$1(3),xI(sP(8,11,`SIGNAGE_MANAGER.AI_POS_BOTTOM_LEFT`)),Vt$1(3),xI(sP(11,13,`SIGNAGE_MANAGER.AI_POS_TOP_RIGHT`)),Vt$1(3),xI(sP(14,15,`SIGNAGE_MANAGER.AI_POS_TOP_LEFT`)),Vt$1(2),jr(e.has_both_logos()?15:-1)}}function Zt(a,h){if(a&1){let e=g0();ar(0,`mat-slide-toggle`,13),Ct(`ngModelChange`,function(t){uS(e);return dS(Wr().patch({logo:t}))}),Pa(1),ig(2,`translate`),$r(),NM(),Gr(3,Kt,16,17)}if(a&2){let e=Wr();Zo(`ngModel`,e.state().logo),MM(),Vt$1(),Wi(` `,sP(2,3,`SIGNAGE_MANAGER.AI_SHOW_LOGO`),` `),Vt$1(2),jr(e.state().logo?3:-1)}}var ei=.06;var ti=.18;function Te(a,h=0){return{id:`${Date.now()}-${Math.round(Math.random()*1e6)}`,text:``,role:a,x:.06,y:ei+ti*h,align:`left`,colour:`#FFFFFF`,font:``,panel:!0}}var kt=(()=>{class a{constructor(){this.state=Dg.required(),this.logo_on_light=Dg(``),this.logo_on_dark=Dg(``),this.brand=Dg(null),this.uploading=Dg(!1),this.can_set_logo=Dg(!0),this.changed=J4(),this.logo_picked=J4({alias:`logoPicked`}),this.has_logo=De(()=>!!(this.logo_on_light()||this.logo_on_dark())),this.has_both_logos=De(()=>!!this.logo_on_light()&&!!this.logo_on_dark()),this.fonts=r,this.brand_font_label=De(()=>{let e=this.brand()?.font;return(typeof e==`string`?e:e?.family)||`SIGNAGE_MANAGER.AI_TEXT_BRAND_FONT`}),this.palette=De(()=>[`#FFFFFF`,`#1B2420`,...Object.values(this.brand()?.palette||{})].filter((i,t,n)=>n.indexOf(i)===t))}patch(e){this.changed.emit(l(l({},this.state()),e))}patchBlock(e,i){this.patch({blocks:this.state().blocks.map(t=>t.id===e?l(l({},t),i):t)})}setBlockColour(e,i){let t=i.target;t instanceof HTMLInputElement&&this.patchBlock(e,{colour:t.value})}addBlock(){let e=this.state().blocks,i=e.length===1?`subheading`:`body`;this.patch({blocks:[...e,Te(i,e.length)]})}removeBlock(e){this.state().blocks.length<2||this.patch({blocks:this.state().blocks.filter(i=>i.id!==e)})}pickLogo(e){let i=e.target,t=i.files?.[0];i.value=``,t&&this.logo_picked.emit(t)}placeholderFor(e){return e===`headline`?`SIGNAGE_MANAGER.AI_HEADLINE`:e===`subheading`?`SIGNAGE_MANAGER.AI_SUBHEADING`:`SIGNAGE_MANAGER.AI_BODY_TEXT`}static{this.ɵfac=function(i){return new(i||a)}}static{this.ɵcmp=ve({type:a,selectors:[[`ai-layer-controls`]],inputs:{state:[1,`state`],logo_on_light:[1,`logo_on_light`],logo_on_dark:[1,`logo_on_dark`],brand:[1,`brand`],uploading:[1,`uploading`],can_set_logo:[1,`can_set_logo`]},outputs:{changed:`changed`,logo_picked:`logoPicked`},decls:15,vars:10,consts:[[`logo_input`,``],[1,`flex`,`flex-col`,`gap-3`],[1,`text-base-content/60`,`m-0`,`text-xs`],[1,`border-base-content/10`,`flex`,`flex-col`,`gap-2`,`rounded`,`border`,`p-3`],[`mat-stroked-button`,``,`type`,`button`,1,`self-start`,3,`click`],[1,`border-base-content/10`,`flex`,`flex-wrap`,`items-center`,`gap-3`,`rounded`,`border`,`p-3`],[`type`,`file`,`accept`,`image/png,image/jpeg,image/webp,image/svg+xml`,1,`sr-only`,3,`change`],[1,`flex`,`items-start`,`gap-2`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`,1,`flex-1`],[`matInput`,``,`rows`,`2`,3,`ngModelChange`,`ngModel`,`placeholder`],[`icon`,``,`default`,``,`error`,``,`type`,`button`,3,`click`,`disabled`,`matTooltip`],[1,`flex`,`flex-wrap`,`items-center`,`gap-2`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`,1,`w-32`],[3,`ngModelChange`,`ngModel`],[`value`,`headline`],[`value`,`subheading`],[`value`,`body`],[`value`,`left`],[`value`,`centre`],[`value`,`right`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`,1,`w-full`],[`value`,``],[1,`flex`,`flex-wrap`,`items-center`,`gap-3`],[`type`,`button`,1,`border-base-content/20`,`h-6`,`w-6`,`rounded-full`,`border`,3,`background`,`ring-2`],[`type`,`color`,1,`border-base-content/20`,`h-6`,`w-8`,`cursor-pointer`,`rounded`,`border`,`bg-transparent`,`p-0`,3,`input`,`value`,`matTooltip`],[3,`value`],[`type`,`button`,1,`border-base-content/20`,`h-6`,`w-6`,`rounded-full`,`border`,3,`click`],[1,`text-sm`],[`mat-stroked-button`,``,`type`,`button`,3,`disabled`],[`mat-stroked-button`,``,`type`,`button`,3,`click`,`disabled`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`,1,`w-36`],[`value`,`bottom-right`],[`value`,`bottom-left`],[`value`,`top-right`],[`value`,`top-left`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`,1,`w-44`],[`value`,`auto`],[`value`,`on_light`],[`value`,`on_dark`]],template:function(i,t){i&1&&(ar(0,`div`,1)(1,`p`,2),Pa(2),ig(3,`translate`),$r(),l0(4,Xt,52,55,`div`,3,Ut),ar(6,`button`,4),Ct(`click`,function(){return t.addBlock()}),Pa(7),ig(8,`translate`),$r(),ar(9,`div`,5),Gr(10,Qt,4,4)(11,Zt,4,5),ar(12,`input`,6,0),ig(14,`translate`),Ct(`change`,function(r){return t.pickLogo(r)}),$r()()()),i&2&&(Vt$1(2),Wi(` `,sP(3,4,`SIGNAGE_MANAGER.AI_TEXT_DRAG_HINT`),` `),Vt$1(2),u0(t.state().blocks),Vt$1(3),Wi(` `,sP(8,6,`SIGNAGE_MANAGER.AI_ADD_TEXT`),` `),Vt$1(3),jr(t.has_logo()?11:10),Vt$1(2),Ut$1(`aria-label`,sP(14,8,`SIGNAGE_MANAGER.AI_ADD_LOGO`)))},dependencies:[S7,eT,p7,Mx,Yae,og,sm,qr,Cn,Ue,Be,Pe,Bt$2,Pt,aO,Ie,se,Yt$1,mt,f],encapsulation:2})}}return a})();var ii=[`canvas`];var ni={headline:.11,subheading:.055,body:.038};var ai={headline:1.12,subheading:1.3,body:1.45};var oi=.005;var ri=.02;var Me=(()=>{class a{constructor(){this.image_url=Dg.required(),this.logo_on_light=Dg(``),this.logo_on_dark=Dg(``),this.brand=Dg(null),this.state=Dg.required(),this.changed=J4(),this.failed=J4(),this.hover_id=ee(``),this.drag_id=ee(``),this.selected_id=ee(``),this._canvas=t6(`canvas`),this._artwork=null,this._artwork_url=``,this._logos={on_light:null,on_dark:null},this._boxes=new Map,this._grab={x:0,y:0},this._brand_family=De(()=>{let e=this.brand()?.font;return typeof e==`string`?e:e?.family||``}),Rn(()=>{let e=this.image_url();e&&this._loadArtwork(e)}),Rn(()=>{let e=this.logo_on_light();e&&this._loadLogo(`on_light`,e)}),Rn(()=>{let e=this.logo_on_dark();e&&this._loadLogo(`on_dark`,e)}),Rn(()=>{let e=new Set([this._brand_family(),...this.state().blocks.map(i=>i.font)].filter(Boolean));for(let i$1 of e)i(i$1).then(()=>this._draw())}),Rn(()=>{this.state(),this.hover_id(),this.drag_id(),this.selected_id(),this._draw()})}toBlob(){let e=this._canvas()?.nativeElement;if(!e||!this._artwork)return Promise.resolve(null);let i=this.hover_id(),t=this.selected_id();return this.hover_id.set(``),this.selected_id.set(``),this._draw(),new Promise(n=>e.toBlob(r=>{this.hover_id.set(i),this.selected_id.set(t),n(r)},`image/png`))}onPointerDown(e){let i=this._toArtwork(e);if(!i)return;let t=this._blockAt(i.x,i.y);if(this.selected_id.set(t?.id||``),!t)return;let n=this._boxes.get(t.id);n&&(this._grab={x:i.x-n.left,y:i.y-n.top},this.drag_id.set(t.id),this._canvas()?.nativeElement.setPointerCapture(e.pointerId),e.preventDefault())}onPointerMove(e){let i=this._toArtwork(e);if(!i)return;let t=this.drag_id();if(!t){this.hover_id.set(this._blockAt(i.x,i.y)?.id||``);return}let n=this._canvas()?.nativeElement,r=this._boxes.get(t);!n||!r||this._move(t,(i.x-this._grab.x)/n.width,(i.y-this._grab.y)/n.height,r)}onPointerUp(e){this.drag_id()&&(this._canvas()?.nativeElement.releasePointerCapture(e.pointerId),this.drag_id.set(``))}onPointerLeave(){this.drag_id()||this.hover_id.set(``)}onKeyDown(e){if(e.key===`Tab`){let x=this.state().blocks.filter(W=>W.text.trim());if(x.length<2)return;let k=x.findIndex(W=>W.id===this.selected_id()),B=e.shiftKey?k-1:k+1;if(B<0||B>=x.length){this.selected_id.set(``);return}e.preventDefault(),this.selected_id.set(x[B].id),this._draw();return}let i=this.selected_id()||this.state().blocks[0]?.id,t=i?this._boxes.get(i):null,n=this.state().blocks.find(x=>x.id===i);if(!t||!n)return;let r=e.shiftKey?ri:oi,m=n.x,I=n.y;if(e.key===`ArrowLeft`)m-=r;else if(e.key===`ArrowRight`)m+=r;else if(e.key===`ArrowUp`)I-=r;else if(e.key===`ArrowDown`)I+=r;else return;e.preventDefault(),this.selected_id.set(i),this._move(i,m,I,t)}_move(e,i,t,n){let r=this._canvas()?.nativeElement;if(!r)return;let m$1=Math.max(0,1-n.width/r.width),I=Math.max(0,1-n.height/r.height),x={x:Math.min(Math.max(i,0),m$1),y:Math.min(Math.max(t,0),I)},k=this.state();this.changed.emit(m(l({},k),{blocks:k.blocks.map(B=>B.id===e?l(l({},B),x):B)}))}_toArtwork(e){let i=this._canvas()?.nativeElement;if(!i)return null;let t=i.getBoundingClientRect();return!t.width||!t.height?null:{x:(e.clientX-t.left)/t.width*i.width,y:(e.clientY-t.top)/t.height*i.height}}_blockAt(e,i){let t=this.state().blocks;for(let n=t.length-1;n>=0;n--){let r=this._boxes.get(t[n].id);if(r&&e>=r.left&&e<=r.left+r.width&&i>=r.top&&i<=r.top+r.height)return t[n]}return null}_loadArtwork(e){let i=new Image;i.crossOrigin=`anonymous`,this._artwork=null,this._artwork_url=e,i.onerror=()=>{this._artwork_url===e&&(this._artwork=null,this.failed.emit())},i.onload=()=>{if(this._artwork_url!==e)return;this._artwork=i;let t=this._canvas()?.nativeElement;t&&(t.width=i.naturalWidth,t.height=i.naturalHeight),this._draw()},i.src=e}_loadLogo(e,i){let t=new Image;t.crossOrigin=`anonymous`,t.onload=()=>{this._logos[e]=t,this._draw()},t.src=i}_draw(){let e=this._canvas()?.nativeElement,i=this._artwork;if(!e||!i)return;let t=e.getContext(`2d`);if(!t)return;let{width:n,height:r}=e;t.clearRect(0,0,n,r),t.drawImage(i,0,0,n,r);let m=this.state();m&&(m.logo&&this._drawLogo(t,n,r,m),this._drawBlocks(t,n,r,m))}_drawBlocks(e,i,t,n){this._boxes.clear();let r=i*.88;for(let m of n.blocks){let I=m.text.trim();if(!I)continue;let x=Math.round(t*ni[m.role]);e.font=`${m.role===`headline`?`700`:`400`} ${x}px ${this._fontFamily(m.font)}`;let B=this._wrap(e,I,r),W=Math.round(x*ai[m.role]),de=Math.round(x*1.2),L={left:m.x*i,top:m.y*t,width:Math.max(...B.map(H=>e.measureText(H).width)),height:de+W*(B.length-1)};if(this._boxes.set(m.id,L),m.panel){let H=Math.round(x*.35);e.fillStyle=this._panelColour(m.colour),e.fillRect(L.left-H,L.top-H*.6,L.width+H*2,L.height+H*1.2)}e.textAlign=m.align===`centre`?`center`:m.align,e.textBaseline=`top`;let Rt=m.align===`left`?L.left:m.align===`right`?L.left+L.width:L.left+L.width/2;e.fillStyle=m.colour;let Tt=(de-x)/2;B.forEach((H,Dt)=>{e.fillText(H,Rt,L.top+Tt+W*Dt)}),(this.hover_id()===m.id||this.drag_id()===m.id||this.selected_id()===m.id)&&this._outline(e,L,Math.round(x*.35))}}_outline(e,i,t){e.save(),e.strokeStyle=`rgba(255, 255, 255, 0.9)`,e.lineWidth=Math.max(2,i.height*.02),e.setLineDash([e.lineWidth*3,e.lineWidth*3]),e.strokeRect(i.left-t,i.top-t*.6,i.width+t*2,i.height+t*1.2),e.restore()}_drawLogo(e,i,t,n){let r=Math.round(i*.04),m=Math.round(i*n.logo_scale);if(!(this._logos.on_light||this._logos.on_dark))return;let x=Math.round(i*n.logo_scale*.4),k=this._logoFor(n,e,{left:n.logo_position.endsWith(`left`)?r:i-m-r,top:n.logo_position.startsWith(`top`)?r:t-x-r,width:m,height:x});if(!k)return;let B=m/(k.naturalWidth||m),W=Math.round(k.naturalHeight*B),de=n.logo_position.endsWith(`left`)?r:i-m-r,L=n.logo_position.startsWith(`top`)?r:t-W-r;e.drawImage(k,de,L,m,W)}_logoFor(e,i,t){let n=e.logo_choice===`auto`?this._backgroundIsDark(i,t)?`on_dark`:`on_light`:e.logo_choice;return this._logos[n]||this._logos.on_light||this._logos.on_dark}_backgroundIsDark(e,i){try{let{data:t}=e.getImageData(Math.max(0,Math.round(i.left)),Math.max(0,Math.round(i.top)),Math.max(1,Math.round(i.width)),Math.max(1,Math.round(i.height))),n=0,r=0;for(let m=0;m<t.length;m+=16)n+=B(t[m],t[m+1],t[m+2]),r++;return r?n/r<140:!1}catch{return!1}}_panelColour(e){return this._isLight(e)?`rgba(0, 0, 0, 0.45)`:`rgba(255, 255, 255, 0.6)`}_isLight(e){let i=e.replace(`#`,``);if(i.length<6)return!0;return B(parseInt(i.slice(0,2),16),parseInt(i.slice(2,4),16),parseInt(i.slice(4,6),16))>140}_fontFamily(e){let i=e||this._brand_family();return i?`"${i}", system-ui, sans-serif`:`system-ui, sans-serif`}_wrap(e,i,t){let n=[];for(let r of i.split(`
`)){let m=r.trim().split(/\s+/).filter(Boolean);if(!m.length){n.push(``);continue}let I=``;for(let x of m){let k=I?`${I} ${x}`:x;e.measureText(k).width>t&&I?(n.push(I),I=x):I=k}I&&n.push(I)}return n}static{this.ɵfac=function(i){return new(i||a)}}static{this.ɵcmp=ve({type:a,selectors:[[`ai-layer`]],viewQuery:function(i,t){i&1&&OI(t._canvas,ii,5),i&2&&I0()},inputs:{image_url:[1,`image_url`],logo_on_light:[1,`logo_on_light`],logo_on_dark:[1,`logo_on_dark`],brand:[1,`brand`],state:[1,`state`]},outputs:{changed:`changed`,failed:`failed`},decls:3,vars:7,consts:[[`canvas`,``],[`tabindex`,`0`,1,`max-h-full`,`max-w-full`,`touch-none`,3,`pointerdown`,`pointermove`,`pointerup`,`pointercancel`,`pointerleave`,`keydown`]],template:function(i,t){i&1&&(ur(0,`canvas`,1,0),ig(2,`translate`),AI(`pointerdown`,function(r){return t.onPointerDown(r)})(`pointermove`,function(r){return t.onPointerMove(r)})(`pointerup`,function(r){return t.onPointerUp(r)})(`pointercancel`,function(r){return t.onPointerUp(r)})(`pointerleave`,function(){return t.onPointerLeave()})(`keydown`,function(r){return t.onKeyDown(r)}),dr()),i&2&&(ze(`cursor-grab`,t.hover_id()&&!t.drag_id())(`cursor-grabbing`,!!t.drag_id()),Ut$1(`aria-label`,sP(2,5,`SIGNAGE_MANAGER.AI_LAYER_PREVIEW`)))},dependencies:[f],styles:[`[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center;min-height:0;min-width:0}canvas[_ngcontent-%COMP%]:focus-visible{outline:2px solid currentColor;outline-offset:2px}
/*# sourceMappingURL=ai-layer.component.css.map */`]})}}return a})();var li=(a,h)=>h.id;function si(a,h){if(a&1){let e=g0();ar(0,`div`,6),Qo(1,`img`,7),ar(2,`span`,8),Pa(3),$r(),ar(4,`button`,9),ig(5,`translate`),ig(6,`translate`),ig(7,`translate`),Ct(`click`,function(){let t=uS(e).$implicit;return dS(Wr(2).removed.emit(t.id))}),ar(8,`icon`,10),Pa(9,`close`),$r()()()}if(a&2){let e=h.$implicit,i=h.$index,t=Wr(2);Vt$1(),Zo(`src`,e.url,Eu)(`alt`,t.numberedLabel(i,e.name)),Vt$1(2),xI(t.offset()+i+1),Vt$1(),Zo(`matTooltip`,sP(5,6,`SIGNAGE_MANAGER.AI_REFERENCE_REMOVE`)),Ut$1(`aria-label`,sP(6,8,`SIGNAGE_MANAGER.AI_REFERENCE_REMOVE`))(`aria-label`,sP(7,10,`SIGNAGE_MANAGER.AI_REFERENCE_REMOVE`)+` `+t.numberedLabel(i,e.name))}}function di(a,h){if(a&1&&(ar(0,`div`,3),l0(1,si,10,12,`div`,6,li),$r()),a&2){let e=Wr();Vt$1(),u0(e.items())}}var Gt=(()=>{class a{constructor(){this.items=Dg.required(),this.uploading=Dg(!1),this.max=Dg(8),this.title=Dg(`SIGNAGE_MANAGER.AI_INCLUDE_IMAGES`),this.hint=Dg(`SIGNAGE_MANAGER.AI_INCLUDE_IMAGES_HINT`),this.add_label=Dg(`SIGNAGE_MANAGER.AI_REFERENCE_ADD`),this.offset=Dg(0),this.picked=J4(),this.removed=J4()}numberedLabel(e,i){return`${Es(`SIGNAGE_MANAGER.AI_REFERENCE_NUMBER`,{number:`${this.offset()+e+1}`})}: ${i}`}pick(e){let i=e.target,t=Array.from(i.files||[]);i.value=``;let n=this.max()-this.items().length;t.length&&this.picked.emit(t.slice(0,n))}static{this.ɵfac=function(i){return new(i||a)}}static{this.ɵcmp=ve({type:a,selectors:[[`ai-references`]],hostAttrs:[1,`flex`,`flex-col`,`gap-2`],inputs:{items:[1,`items`],uploading:[1,`uploading`],max:[1,`max`],title:[1,`title`],hint:[1,`hint`],add_label:[1,`add_label`],offset:[1,`offset`]},outputs:{picked:`picked`,removed:`removed`},decls:13,vars:15,consts:[[`picker`,``],[1,`m-0`,`text-sm`,`font-medium`],[1,`text-base-content/60`,`m-0`,`text-xs`],[1,`flex`,`flex-wrap`,`gap-2`],[`mat-stroked-button`,``,`type`,`button`,1,`self-start`,3,`click`,`disabled`],[`type`,`file`,`accept`,`image/png,image/jpeg,image/webp`,1,`sr-only`,3,`change`],[1,`border-base-content/10`,`bg-base-200`,`relative`,`h-16`,`w-16`,`overflow-hidden`,`rounded`,`border`],[1,`h-full`,`w-full`,`object-cover`,3,`src`,`alt`],[`aria-hidden`,`true`,1,`bg-base-content`,`text-base-100`,`absolute`,`top-0`,`left-0`,`rounded-br`,`px-1`,`text-xs`,`font-bold`],[`icon`,``,`type`,`button`,1,`bg-base-100/80`,`absolute`,`top-0`,`right-0`,`h-5`,`w-5`,`rounded-bl`,`text-xs`,3,`click`,`matTooltip`],[1,`text-sm`]],template:function(i,t){if(i&1){let n=g0();ar(0,`p`,1),Pa(1),ig(2,`translate`),$r(),ar(3,`p`,2),Pa(4),ig(5,`translate`),$r(),Gr(6,di,3,0,`div`,3),ar(7,`button`,4),Ct(`click`,function(){uS(n);return dS(A0(11).click())}),Pa(8),ig(9,`translate`),$r(),ar(10,`input`,5,0),ig(12,`translate`),Ct(`change`,function(m){return t.pick(m)}),$r()}i&2&&(Vt$1(),Wi(` `,sP(2,7,t.title()),` `),Vt$1(3),Wi(` `,sP(5,9,t.hint()),` `),Vt$1(2),jr(t.items().length?6:-1),Vt$1(),Zo(`disabled`,t.uploading()||t.items().length>=t.max()),Vt$1(),Wi(` `,sP(9,11,t.uploading()?`SIGNAGE_MANAGER.AI_REFERENCE_UPLOADING`:t.add_label()),` `),Vt$1(2),Ut$1(`multiple`,t.max()>1?``:null)(`aria-label`,sP(12,13,t.add_label())))},dependencies:[Yae,og,sm,Yt$1,mt,f],encapsulation:2})}}return a})();var ci=(a,h)=>h.job_id+`-`+h.index;function _i(a,h){if(a&1){let e=g0();ar(0,`ai-layer`,19),Ct(`changed`,function(t){uS(e);return dS(Wr().layer_state.set(t))})(`failed`,function(){uS(e);return dS(Wr().onArtworkFailed())}),$r()}if(a&2){let e=Wr();ze(`opacity-40`,e.state()===`generating`),Zo(`image_url`,e.selected_object_url())(`logo_on_light`,e.logo_on_light())(`logo_on_dark`,e.logo_on_dark())(`brand`,e.applied_brand())(`state`,e.layer_state())}}function mi(a,h){if(a&1&&(Qo(0,`img`,20),ig(1,`translate`)),a&2){let e=Wr();ze(`opacity-40`,e.state()===`generating`),Zo(`source`,e.source_url())(`alt`,sP(1,4,`SIGNAGE_MANAGER.AI_CHANGING_THIS`))}}function pi(a,h){a&1&&(ar(0,`p`,9),Pa(1),ig(2,`translate`),$r()),a&2&&(Vt$1(),Wi(` `,sP(2,1,`SIGNAGE_MANAGER.AI_PREVIEW_EMPTY`),` `))}function hi(a,h){if(a&1&&(ar(0,`div`,10),Qo(1,`mat-spinner`,21),ar(2,`p`,22),Pa(3),ig(4,`translate`),$r(),ar(5,`p`,14),Pa(6),$r()()),a&2){let e=Wr();Vt$1(3),Wi(` `,sP(4,2,`SIGNAGE_MANAGER.AI_WORKING`),` `),Vt$1(3),Wi(` `,e.progress_note(),` `)}}function gi(a,h){if(a&1){let e=g0();ar(0,`button`,26),Ct(`click`,function(){let t=uS(e).$implicit;return dS(Wr(2).select(t))}),Qo(1,`img`,27),$r()}if(a&2){let e=h.$implicit,i=Wr(2);ze(`ring-2`,i.selected()?.upload_id===e.upload_id),Zo(`disabled`,i.claim_pending())(`matTooltip`,i.versionLabel(e)),Vt$1(),Zo(`source`,e.url)(`alt`,i.versionLabel(e))}}function ui(a,h){if(a&1&&(ar(0,`div`,11)(1,`p`,23),Pa(2),ig(3,`translate`),$r(),ar(4,`div`,24),l0(5,gi,2,6,`button`,25,ci),$r()()),a&2){let e=Wr();Vt$1(2),Wi(` `,sP(3,1,`SIGNAGE_MANAGER.AI_VERSIONS`),` `),Vt$1(3),u0(e.rail())}}function fi(a,h){if(a&1&&(ar(0,`mat-option`,35),Pa(1),$r()),a&2){let e=h.$implicit;Zo(`value`,e),Vt$1(),xI(e)}}function bi(a,h){if(a&1){let e=g0();ar(0,`mat-form-field`,33)(1,`mat-label`),Pa(2),ig(3,`translate`),$r(),ar(4,`mat-select`,34),BI(`ngModelChange`,function(t){uS(e);let n=Wr(2);return q0(n.aspect,t)||(n.aspect=t),dS(t)}),l0(5,fi,2,2,`mat-option`,35,c0),$r(),NM(),$r()}if(a&2){let e=Wr(2);Vt$1(2),xI(sP(3,2,`SIGNAGE_MANAGER.AI_SHAPE`)),Vt$1(2),UI(`ngModel`,e.aspect),MM(),Vt$1(),u0(e.aspect_options())}}function vi(a,h){if(a&1&&(ar(0,`mat-option`,35),Pa(1),$r()),a&2){let e=h.$implicit;Zo(`value`,e),Vt$1(),xI(e)}}function wi(a,h){if(a&1){let e=g0();ar(0,`div`,36)(1,`mat-slide-toggle`,34),BI(`ngModelChange`,function(t){uS(e);let n=Wr(2);return q0(n.use_branding,t)||(n.use_branding=t),dS(t)}),Pa(2),ig(3,`translate`),$r(),NM(),ar(4,`p`,14),Pa(5),ig(6,`translate`),$r()()}if(a&2){let e=Wr(2);Vt$1(),UI(`ngModel`,e.use_branding),MM(),Vt$1(),Wi(` `,sP(3,3,`SIGNAGE_MANAGER.AI_USE_BRANDING`),` `),Vt$1(3),Wi(` `,sP(6,5,`SIGNAGE_MANAGER.AI_USE_BRANDING_HINT`),` `)}}function Ai(a,h){if(a&1){let e=g0();ar(0,`mat-slide-toggle`,34),BI(`ngModelChange`,function(t){uS(e);let n=Wr(3);return q0(n.include_logo,t)||(n.include_logo=t),dS(t)}),Pa(1),ig(2,`translate`),$r(),NM()}if(a&2)UI(`ngModel`,Wr(3).include_logo),MM(),Vt$1(),Wi(` `,sP(2,2,`SIGNAGE_MANAGER.AI_LEAVE_LOGO_SPACE`),` `)}function xi(a,h){if(a&1){let e=g0();ar(0,`div`,36)(1,`mat-slide-toggle`,34),BI(`ngModelChange`,function(t){uS(e);let n=Wr(2);return q0(n.add_text_with_layer,t)||(n.add_text_with_layer=t),dS(t)}),Pa(2),ig(3,`translate`),$r(),NM(),ar(4,`p`,14),Pa(5),ig(6,`translate`),$r()(),Gr(7,Ai,3,4,`mat-slide-toggle`,39)}if(a&2){let e=Wr(2);Vt$1(),UI(`ngModel`,e.add_text_with_layer),MM(),Vt$1(),Wi(` `,sP(3,4,`SIGNAGE_MANAGER.AI_ADD_WORDS_LAYER`),` `),Vt$1(3),Wi(` `,sP(6,6,`SIGNAGE_MANAGER.AI_ADD_WORDS_LAYER_HINT`),` `),Vt$1(2),jr(e.has_logo()?7:-1)}}function yi(a,h){if(a&1){let e=g0();ar(0,`div`,28)(1,`label`,29),Pa(2),ig(3,`translate`),$r(),ar(4,`mat-form-field`,30)(5,`textarea`,31),ig(6,`translate`),BI(`ngModelChange`,function(t){uS(e);let n=Wr();return q0(n.brief,t)||(n.brief=t),dS(t)}),$r(),NM(),$r()(),ar(7,`div`,32),Gr(8,bi,7,4,`mat-form-field`,33),ar(9,`mat-form-field`,33)(10,`mat-label`),Pa(11),ig(12,`translate`),$r(),ar(13,`mat-select`,34),BI(`ngModelChange`,function(t){uS(e);let n=Wr();return q0(n.candidates,t)||(n.candidates=t),dS(t)}),l0(14,vi,2,2,`mat-option`,35,c0),$r(),NM(),$r()(),Gr(16,wi,7,7,`div`,36),Gr(17,xi,8,8),ar(18,`ai-references`,37),Ct(`picked`,function(t){uS(e);return dS(Wr().addReferences(t,`include`))})(`removed`,function(t){uS(e);return dS(Wr().removeReference(t))}),$r(),ar(19,`ai-references`,38),Ct(`picked`,function(t){uS(e);return dS(Wr().addReferences(t,`style`))})(`removed`,function(t){uS(e);return dS(Wr().removeReference(t))}),$r()}if(a&2){let e=Wr();Vt$1(2),xI(sP(3,15,e.is_edit()?`SIGNAGE_MANAGER.AI_INSTRUCTION`:`SIGNAGE_MANAGER.AI_BRIEF`)),Vt$1(3),Zo(`placeholder`,sP(6,17,e.is_edit()?`SIGNAGE_MANAGER.AI_INSTRUCTION_HINT`:`SIGNAGE_MANAGER.AI_BRIEF_HINT`)),UI(`ngModel`,e.brief),MM(),Vt$1(3),jr(e.is_edit()?-1:8),Vt$1(3),xI(sP(12,19,`SIGNAGE_MANAGER.AI_OPTIONS_COUNT`)),Vt$1(2),UI(`ngModel`,e.candidates),MM(),Vt$1(),u0(e.candidate_options()),Vt$1(2),jr(e.has_branding()?16:-1),Vt$1(),jr(e.is_edit()?-1:17),Vt$1(),Zo(`items`,e.include_references())(`uploading`,e.uploading_references())(`max`,e.include_max()),Vt$1(),Zo(`items`,e.style_items())(`uploading`,e.uploading_references())(`max`,e.style_max())(`offset`,e.include_references().length)}}function Ni(a,h){if(a&1&&(ar(0,`p`,40),Pa(1),$r()),a&2){let e=Wr(2);Vt$1(),Wi(` “`,e.brief(),`” `)}}function Ci(a,h){if(a&1){let e=g0();Gr(0,Ni,2,1,`p`,40),ar(1,`div`,28)(2,`label`,41),Pa(3),ig(4,`translate`),$r(),ar(5,`mat-form-field`,30)(6,`textarea`,42),ig(7,`translate`),BI(`ngModelChange`,function(t){uS(e);let n=Wr();return q0(n.refinement,t)||(n.refinement=t),dS(t)}),$r(),NM(),$r(),ar(8,`button`,43),Ct(`click`,function(){uS(e);return dS(Wr().refine())}),Pa(9),ig(10,`translate`),$r()(),ar(11,`ai-references`,37),Ct(`picked`,function(t){uS(e);return dS(Wr().addReferences(t,`include`))})(`removed`,function(t){uS(e);return dS(Wr().removeReference(t))}),$r(),ar(12,`ai-references`,38),Ct(`picked`,function(t){uS(e);return dS(Wr().addReferences(t,`style`))})(`removed`,function(t){uS(e);return dS(Wr().removeReference(t))}),$r(),ar(13,`div`,44)(14,`p`,45),Pa(15),ig(16,`translate`),$r(),ar(17,`ai-layer-controls`,46),Ct(`changed`,function(t){uS(e);return dS(Wr().layer_state.set(t))})(`logoPicked`,function(t){uS(e);return dS(Wr().uploadLogo(t))}),$r()()}if(a&2){let e=Wr();jr(e.brief()?0:-1),Vt$1(3),xI(sP(4,20,`SIGNAGE_MANAGER.AI_REFINE`)),Vt$1(3),Zo(`placeholder`,sP(7,22,`SIGNAGE_MANAGER.AI_REFINE_HINT`)),UI(`ngModel`,e.refinement),MM(),Vt$1(2),Zo(`disabled`,!e.refinement().trim()||!e.selected()||e.state()===`generating`||e.claim_pending()),Vt$1(),Wi(` `,sP(10,24,`SIGNAGE_MANAGER.AI_REFINE_ACTION`),` `),Vt$1(2),Zo(`items`,e.include_references())(`uploading`,e.uploading_references())(`max`,e.include_max()),Vt$1(),Zo(`items`,e.style_items())(`uploading`,e.uploading_references())(`max`,e.style_max())(`offset`,e.include_references().length),Vt$1(3),Wi(` `,sP(16,26,`SIGNAGE_MANAGER.AI_WORDS_AND_LOGO`),` `),Vt$1(2),Zo(`state`,e.layer_state())(`logo_on_light`,e.logo_on_light())(`logo_on_dark`,e.logo_on_dark())(`brand`,e.applied_brand())(`can_set_logo`,e.can_set_logo())(`uploading`,e.uploading_logo())}}function Si(a,h){if(a&1&&(ar(0,`p`,14),Pa(1),$r()),a&2){let e=Wr();Vt$1(),Wi(` `,e.quota_note(),` `)}}function Ei(a,h){if(a&1&&(ar(0,`p`,14),Pa(1),$r()),a&2){let e=Wr();Vt$1(),Wi(` `,e.engine_note(),` `)}}function Ii(a,h){if(a&1){let e=g0();ar(0,`button`,47),Ct(`click`,function(){uS(e);return dS(Wr().cancel())}),Pa(1),ig(2,`translate`),$r()}a&2&&(Vt$1(),Wi(` `,sP(2,1,`COMMON.CANCEL`),` `))}function Mi(a,h){if(a&1){let e=g0();ar(0,`button`,48),Ct(`click`,function(){uS(e);return dS(Wr().start())}),Pa(1),ig(2,`translate`),$r()}if(a&2)Zo(`disabled`,!Wr().brief().trim()),Vt$1(),Wi(` `,sP(2,2,`SIGNAGE_MANAGER.AI_GENERATE`),` `)}function ki(a,h){a&1&&(Qo(0,`mat-spinner`,50),Pa(1),ig(2,`translate`)),a&2&&(Vt$1(),Wi(` `,sP(2,1,`SIGNAGE_MANAGER.AI_SAVING`),` `))}function Gi(a,h){a&1&&(Pa(0),ig(1,`translate`)),a&2&&Wi(` `,sP(1,1,`COMMON.SAVE`),` `)}function Ri(a,h){if(a&1){let e=g0();ar(0,`button`,49),Ct(`click`,function(){uS(e);return dS(Wr().save())}),Gr(1,ki,3,3)(2,Gi,2,3),$r()}if(a&2){let e=Wr();Zo(`disabled`,!e.selected()||e.saving()),Vt$1(),jr(e.saving()?1:2)}}var Ti=1800*1e3;var Hn=(()=>{class a{constructor(){this._data=p(NU),this._dialog_ref=p(Cf),this._service=p(ci$1),this._ai=p(At),this._layer=t6(Me),this._aspect_options=De(()=>{let e=this._ai.capabilities(),i=this._ai.default_model()?.aspect_ratios||[],t=e?.aspect_ratios||[],n=t.filter(r=>i.includes(r));return n.length?n:i.length?i:t}),this._max_candidates=De(()=>{let e=this._ai.capabilities()?.max_candidates??2,i=this._ai.default_model()?.max_candidates??e;return Math.max(1,Math.min(e,i))}),this.state=ee(`compose`),this.saving=ee(!1),this.brief=ee(``),this.refinement=ee(``),this.aspect=Mu(()=>{let e=this._aspect_options(),i=this._data.aspect_ratio||``;return e.includes(i)?i:e[0]||i||`16:9`}),this.candidates=Mu(()=>Math.min(2,this._max_candidates())),this.add_text_with_layer=ee(!this._data.source_upload_id),this.include_logo=ee(!this._data.source_upload_id),this.use_branding=ee(!0),this.layer_state=ee({blocks:[Te(`headline`)],logo:!1,logo_position:`bottom-right`,logo_scale:.14,logo_choice:`auto`}),this.current_job_id=ee(``),this.selected=ee(null),this.selected_object_url=ee(``),this.logo_on_light=ee(``),this.logo_on_dark=ee(``),this.uploading_logo=ee(!1),this.include_references=ee([]),this.style_reference=ee(null),this.uploading_references=ee(!1),this.references=De(()=>{let e=this.style_reference();return e?[...this.include_references(),e]:this.include_references()}),this.style_items=De(()=>{let e=this.style_reference();return e?[e]:[]}),this.claim_pending=ee(!1),this.brand=this._ai.brand_kit,this.can_set_logo=this._service.is_sys_admin,this.group_id=De(()=>this._service.selected_group()?.group.id||void 0),this.has_branding=De(()=>{let e=this.brand();if(!e)return!1;let i=typeof e.font==`string`?e.font:e.font?.family;return!!(e.organisation||i||Object.keys(e.palette||{}).length)}),this.applied_brand=De(()=>this.use_branding()?this.brand():null),this.is_edit=De(()=>!!this._data.source_upload_id),this.source_url=De(()=>{let e=this._data.source_upload_id;return e?`/api/engine/v2/uploads/${encodeURIComponent(e)}/url`:``}),this.has_logo=De(()=>!!this._ai.capabilities()?.logo_layer),this.aspect_options=this._aspect_options,this.candidate_options=De(()=>{let e=this._max_candidates();return Array.from({length:e},(i,t)=>t+1)}),this.max_references=De(()=>this._ai.default_model()?.max_references??8),this.include_max=De(()=>this.max_references()-(this.style_reference()?1:0)),this.style_max=De(()=>Math.min(1,this.max_references()-this.include_references().length)),this.job=De(()=>this._ai.jobs()[this.current_job_id()]),this.rail=De(()=>{let e=this._ai.jobs(),i=[],t=new Set,n=this.current_job_id();for(;n&&e[n]&&!t.has(n);)t.add(n),i.unshift(e[n]),n=e[n].parent_job_id||``;let r=[];return i.forEach((m,I)=>{(m.images||[]).forEach((x,k)=>{x?.upload_id&&r.push({job_id:m.id,index:k,upload_id:x.upload_id,url:x.url,version:I+1})})}),r}),this.progress_note=De(()=>{let e=this.job();return e?`${e.images_produced} / ${e.candidates}`:``}),this.quota_note=De(()=>{let i=this._ai.capabilities()?.quota?.user_remaining_today;return i==null?``:Es(`SIGNAGE_MANAGER.AI_QUOTA_LEFT`,{count:`${i}`})}),this.engine_note=De(()=>{let e=this._ai.capabilities();if(!e?.enabled)return``;let i=e.providers.find(n=>n.id===e.default_provider_id)||e.providers[0];if(!i)return``;let t=i.models?.find(n=>n.id===i.default_model);return Es(`SIGNAGE_MANAGER.AI_ENGINE`,{model:t?.name||i.default_model||``,provider:i.name})}),this.heading=De(()=>this.is_edit()?`SIGNAGE_MANAGER.AI_EDIT_IMAGE`:`SIGNAGE_MANAGER.AI_CREATE_IMAGE`),this.has_overlay=De(()=>{let e=this.layer_state();return e.blocks.some(i=>i.text.trim())?!0:e.logo&&!!(this.logo_on_light()||this.logo_on_dark())}),this._select_token=0,this.reference_ids=De(()=>this.references().map(e=>e.id)),this._closed=!1,this._await_timer=null}versionLabel(e){return Es(`SIGNAGE_MANAGER.AI_VERSION_LABEL`,{version:`${e.version}`,option:`${e.index+1}`})}async start(){let e=this.brief().trim();if(!e)return;let i=this.withReferenceRoles(e);this.state.set(`generating`);try{let t={prompt:i,candidates:this.candidates(),include_logo:this.include_logo(),add_text_with_layer:this.add_text_with_layer(),use_branding:this.use_branding(),group_id:this.group_id(),references:this.reference_ids()},n;if(this._data.source_upload_id){let r=m(l({},t),{source_upload_id:this._data.source_upload_id,source_item_id:this._data.source_item_id});n=await this._ai.edit(m(l({},r),{idempotency_key:this._ai.intentKey(`edit`,r)}))}else{let r=m(l({},t),{aspect_ratio:this.aspect()});n=await this._ai.generate(m(l({},r),{idempotency_key:this._ai.intentKey(`generate`,r)}))}this.current_job_id.set(n.id),this._awaitJob(n.id)}catch(t){this.state.set(`compose`),ate(ct(t,Es(`SIGNAGE_MANAGER.AI_JOB_FAILED`)))}}async refine(){let e=this.refinement().trim(),i=this.selected();if(!(!e||!i)){this.refinement.set(``),this.state.set(`generating`);try{let t={prompt:this.withReferenceRoles(e),candidates:1,include_logo:this.include_logo(),add_text_with_layer:this.add_text_with_layer(),use_branding:this.use_branding(),group_id:this.group_id(),source_upload_id:i.upload_id,parent_job_id:i.job_id,references:this.reference_ids()},n=await this._ai.edit(m(l({},t),{idempotency_key:this._ai.intentKey(`edit`,t)}));this.current_job_id.set(n.id),this._awaitJob(n.id)}catch(t){this.state.set(`review`),ate(ct(t,Es(`SIGNAGE_MANAGER.AI_JOB_FAILED`)))}}}onArtworkFailed(){this.selected_object_url.set(``),ate(Es(`SIGNAGE_MANAGER.AI_IMAGE_UNREADABLE`))}async select(e){if(this.claim_pending())return;let i=++this._select_token;this.selected.set(e),this.selected_object_url.set(``);let t=await this._ai.loadImage(e.url).catch(()=>``);i===this._select_token&&this.selected_object_url.set(t)}async cancel(){let e=this.current_job_id();e&&await this._ai.cancel(e),this.state.set(this.rail().length?`review`:`compose`)}withReferenceRoles(e){let i=this.include_references().length,t=this.style_reference(),n=[];return i===1?n.push(`Include image 1 in the artwork.`):i>1&&n.push(`Include images 1 to ${i} in the artwork, arranged so the result is aesthetically pleasing and practical.`),t&&n.push(`Use image ${i+1} as a style guide for how the artwork should look: match its overall look and feel, but do not include image ${i+1} or anything from it in the artwork.`),n.length&&n.push(`Where the description above says more about any of these images, follow the description.`),[e,n.join(` `)].filter(Boolean).join(`

`)}async addReferences(e,i){if(e.length){this.uploading_references.set(!0);try{for(let t of i===`style`?e.slice(0,1):e){let r={id:await this._ai.uploadReference(t),name:t.name,url:URL.createObjectURL(t)};if(i===`style`){let m=this.style_reference();m&&(URL.revokeObjectURL(m.url),this._ai.removeReference(m.id)),this.style_reference.set(r)}else this.include_references.update(m=>[...m,r])}}catch(t){ate(ct(t,Es(`SIGNAGE_MANAGER.AI_JOB_FAILED`)))}finally{this.uploading_references.set(!1)}}}removeReference(e){let i=this.references().find(t=>t.id===e);i&&URL.revokeObjectURL(i.url),this.style_reference()?.id===e&&this.style_reference.set(null),this.include_references.update(t=>t.filter(n=>n.id!==e)),this._ai.removeReference(e)}ngOnDestroy(){this._closed=!0,this._await_timer&&clearTimeout(this._await_timer);let e=this.state()===`generating`;for(let i of this.references())URL.revokeObjectURL(i.url),e||this._ai.removeReference(i.id)}async uploadLogo(e){if(this.can_set_logo()){this.uploading_logo.set(!0);try{await this._ai.uploadBrandLogo(e),await this._loadBrandLogos(),this.layer_state.set(m(l({},this.layer_state()),{logo:!0})),ste(Es(`SIGNAGE_MANAGER.AI_LOGO_SAVED`))}catch(i){ate(ct(i,Es(`SIGNAGE_MANAGER.AI_JOB_FAILED`)))}finally{this.uploading_logo.set(!1)}}}async save(){let e=this.selected();if(!e)return;let i=this._name(),t=this.has_overlay(),n=t?await this._layer()?.toBlob():void 0;if(t&&!n){ate(Es(`SIGNAGE_MANAGER.AI_NO_IMAGE`));return}this.saving.set(!0);try{let r;if(n){let m=new File([n],`${i}.png`,{type:`image/png`});r=await this._service.addMedia(m,new wd({name:i,tags:this._tags(e)}))}else r=this._pending_media||await this._service.addMediaFromUpload(e.upload_id,{name:i,tags:this._tags(e),orientation:this.aspect()===`9:16`?`portrait`:`landscape`},this._data.playlist_id),this._pending_media=r,r?.id&&(this.claim_pending.set(!0),await this._ai.claim(e.job_id,e.upload_id,r.id),this.claim_pending.set(!1),this._pending_media=void 0);n&&r?.id&&this._data.playlist_id&&await this._service.addMediaToPlaylist(this._data.playlist_id,r.id),r?.id&&r.thumbnail_id&&await this._ai.loadImage(`/api/engine/v2/uploads/${r.thumbnail_id}/url`).catch(()=>``),this._dialog_ref.close(r)}catch(r){!n&&this._pending_media?.id&&await this._service.discardCreatedMedia(this._pending_media.id).then(()=>{this._pending_media=void 0,this.claim_pending.set(!1)}).catch(()=>null),ate(ct(r,Es(`SIGNAGE_MANAGER.AI_JOB_FAILED`)))}finally{this._pending_media||this.claim_pending.set(!1),this.saving.set(!1)}}_awaitJob(e){let i=Date.now()+Ti,t=()=>{if(this._await_timer=null,this._closed)return;let n=this._ai.jobs()[e];if(!n||!v(n)){if(Date.now()>=i){this.state.set(this.rail().length?`review`:`compose`),ate(Es(`SIGNAGE_MANAGER.AI_JOB_FAILED`));return}this._await_timer=setTimeout(t,250);return}if(n.state===`failed`){this.state.set(this.rail().length?`review`:`compose`);return}if(n.state===`cancelled`){this.state.set(this.rail().length?`review`:`compose`);return}let r=this.rail().filter(m=>m.job_id===e);r.length&&this.select(r[0]),this._loadBrandLogos(),this.state.set(`review`)};t()}async _loadBrandLogos(){let e=this.brand(),[i,t]=await Promise.all([this._readUpload(e?.logo_upload_id),this._readUpload(e?.logo_dark_upload_id)]);this.logo_on_light.set(i),this.logo_on_dark.set(t),(i||t)&&this.include_logo()&&this.layer_state.set(m(l({},this.layer_state()),{logo:!0}))}_readUpload(e){return e?this._ai.loadImage(`/api/engine/v2/uploads/${encodeURIComponent(e)}/url`).catch(()=>``):Promise.resolve(``)}_name(){return(this.brief()||this._data.source_name||``).trim().split(/\s+/).slice(0,6).join(` `)||Es(`SIGNAGE_MANAGER.AI_DEFAULT_NAME`)}_tags(e){return[`ai-generated`]}static{this.ɵfac=function(i){return new(i||a)}}static{this.ɵcmp=ve({type:a,selectors:[[`ai-image-modal`]],viewQuery:function(i,t){i&1&&OI(t._layer,Me,5),i&2&&I0()},decls:26,vars:11,consts:[[1,`bg-base-200`,`flex`,`h-full`,`w-full`,`flex-col`,`overflow-hidden`],[1,`border-base-content/10`,`bg-base-100`,`flex`,`h-14`,`shrink-0`,`items-center`,`justify-between`,`border-b`,`px-4`],[1,`m-0`,`text-lg`,`font-medium`],[`icon`,``,`mat-dialog-close`,``,3,`disabled`],[1,`flex`,`min-h-0`,`flex-1`,`flex-col`,`md:flex-row`],[1,`flex`,`min-h-48`,`min-w-0`,`flex-1`,`flex-col`,`gap-3`,`p-4`,`md:min-h-0`],[1,`border-base-content/10`,`bg-base-300`,`relative`,`flex`,`min-h-0`,`flex-1`,`items-center`,`justify-center`,`overflow-hidden`,`rounded`,`border`],[1,`h-full`,`w-full`,3,`opacity-40`,`image_url`,`logo_on_light`,`logo_on_dark`,`brand`,`state`],[`auth`,``,1,`max-h-full`,`max-w-full`,`object-contain`,3,`source`,`opacity-40`,`alt`],[1,`text-base-content/50`,`m-0`,`px-6`,`text-sm`],[1,`absolute`,`inset-0`,`flex`,`flex-col`,`items-center`,`justify-center`,`gap-3`],[1,`flex`,`shrink-0`,`flex-col`,`gap-1`],[1,`border-base-content/10`,`bg-base-100`,`flex`,`min-h-0`,`w-full`,`flex-1`,`flex-col`,`border-t`,`md:w-96`,`md:flex-none`,`md:shrink-0`,`md:border-t-0`,`md:border-l`],[1,`flex-1`,`space-y-4`,`overflow-y-auto`,`p-4`],[1,`text-base-content/60`,`m-0`,`text-xs`],[1,`border-base-content/10`,`flex`,`shrink-0`,`items-center`,`justify-end`,`gap-2`,`border-t`,`p-4`],[`mat-stroked-button`,``,`type`,`button`],[`btn`,``,`matRipple`,``,1,`min-w-32`,3,`disabled`],[`btn`,``,`matRipple`,``,1,`flex`,`min-w-32`,`items-center`,`justify-center`,`gap-2`,3,`disabled`],[1,`h-full`,`w-full`,3,`changed`,`failed`,`image_url`,`logo_on_light`,`logo_on_dark`,`brand`,`state`],[`auth`,``,1,`max-h-full`,`max-w-full`,`object-contain`,3,`source`,`alt`],[`diameter`,`48`],[1,`m-0`,`text-sm`],[1,`text-base-content/60`,`m-0`,`text-xs`,`uppercase`],[1,`flex`,`gap-2`,`overflow-x-auto`,`pb-1`],[`type`,`button`,1,`border-base-content/10`,`h-16`,`w-28`,`shrink-0`,`overflow-hidden`,`rounded`,`border`,3,`disabled`,`ring-2`,`matTooltip`],[`type`,`button`,1,`border-base-content/10`,`h-16`,`w-28`,`shrink-0`,`overflow-hidden`,`rounded`,`border`,3,`click`,`disabled`,`matTooltip`],[`auth`,``,1,`h-full`,`w-full`,`object-cover`,3,`source`,`alt`],[1,`flex`,`flex-col`],[`for`,`ai-brief`,1,`mb-1`,`text-sm`],[`appearance`,`outline`,1,`w-full`],[`matInput`,``,`id`,`ai-brief`,`rows`,`4`,3,`ngModelChange`,`placeholder`,`ngModel`],[1,`flex`,`flex-col`,`gap-3`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`,1,`w-full`],[3,`ngModelChange`,`ngModel`],[3,`value`],[1,`flex`,`flex-col`,`gap-1`],[`title`,`SIGNAGE_MANAGER.AI_INCLUDE_IMAGES`,`hint`,`SIGNAGE_MANAGER.AI_INCLUDE_IMAGES_HINT`,3,`picked`,`removed`,`items`,`uploading`,`max`],[`title`,`SIGNAGE_MANAGER.AI_STYLE_REFERENCE`,`hint`,`SIGNAGE_MANAGER.AI_STYLE_REFERENCE_HINT`,`add_label`,`SIGNAGE_MANAGER.AI_REFERENCE_ADD_ONE`,3,`picked`,`removed`,`items`,`uploading`,`max`,`offset`],[3,`ngModel`],[1,`text-base-content/60`,`m-0`,`text-xs`,`italic`],[`for`,`ai-refine`,1,`mb-1`,`text-sm`],[`matInput`,``,`id`,`ai-refine`,`rows`,`2`,3,`ngModelChange`,`placeholder`,`ngModel`],[`mat-stroked-button`,``,`type`,`button`,1,`self-start`,3,`click`,`disabled`],[1,`border-base-content/10`,`border-t`,`pt-4`],[1,`m-0`,`mb-2`,`text-sm`,`font-medium`],[3,`changed`,`logoPicked`,`state`,`logo_on_light`,`logo_on_dark`,`brand`,`can_set_logo`,`uploading`],[`mat-stroked-button`,``,`type`,`button`,3,`click`],[`btn`,``,`matRipple`,``,1,`min-w-32`,3,`click`,`disabled`],[`btn`,``,`matRipple`,``,1,`flex`,`min-w-32`,`items-center`,`justify-center`,`gap-2`,3,`click`,`disabled`],[`diameter`,`18`]],template:function(i,t){i&1&&(ar(0,`div`,0)(1,`header`,1)(2,`h2`,2),Pa(3),ig(4,`translate`),$r(),ar(5,`button`,3)(6,`icon`),Pa(7,`close`),$r()()(),ar(8,`div`,4)(9,`section`,5)(10,`div`,6),Gr(11,_i,1,7,`ai-layer`,7)(12,mi,2,6,`img`,8)(13,pi,3,3,`p`,9),Gr(14,hi,7,4,`div`,10),$r(),Gr(15,ui,7,3,`div`,11),$r(),ar(16,`aside`,12)(17,`div`,13),Gr(18,yi,20,21)(19,Ci,18,28),Gr(20,Si,2,1,`p`,14),Gr(21,Ei,2,1,`p`,14),$r(),ar(22,`footer`,15),Gr(23,Ii,3,3,`button`,16)(24,Mi,3,4,`button`,17)(25,Ri,3,2,`button`,18),$r()()()()),i&2&&(Vt$1(3),Wi(` `,sP(4,9,t.heading()),` `),Vt$1(2),Zo(`disabled`,t.saving()),Vt$1(6),jr(t.selected_object_url()?11:t.source_url()?12:t.state()!==`generating`?13:-1),Vt$1(3),jr(t.state()===`generating`?14:-1),Vt$1(),jr(t.rail().length?15:-1),Vt$1(3),jr(t.rail().length?19:18),Vt$1(2),jr(t.quota_note()?20:-1),Vt$1(),jr(t.engine_note()?21:-1),Vt$1(2),jr(t.state()===`generating`?23:t.rail().length?25:24))},dependencies:[S7,eT,p7,Mx,og,sm,$se,jse,qr,Cn,Ue,Be,Pe,J,Z,CE,TE,Bt$2,Pt,aO,Ie,se,Yt$1,mt,O,Yae,Me,kt,Gt,f],encapsulation:2})}}return a})();export{Hn as AiImageModalComponent};
//# debugId=7989b346-a9fd-5ae0-8de8-03c78cd5b235
//# sourceMappingURL=ai-image-modal.component-Ce0UdIVP.js.map