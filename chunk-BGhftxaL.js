import{$ as LT,A as Fy,Bt as Vm,C as Dt$1,Dn as cy,Dr as rT,G as JT,H as Ig,Ir as st,It as Um,J as KT,Jn as jT,K as Jf,Kt as Wl,M as GC,Mr as sT,Mt as UT,N as GT,Nn as ep,Nr as sg,O as Fm,P as Gb,Qn as km,Rr as tC,Rt as V_,S as Ds,Sn as ay,T as Es,Tr as rC,Ut as Vs,X as Km,Xn as js,Xr as w,Y as Kl,Yn as ji,Z as Kr,Zt as Xm,ar as ly,at as Lv,b as D,bt as Qb,ci as yw,d as B_,f as Bb,hr as oy,ht as PT,kn as dp,lr as na,n as $b,nt as Lm,ot as MV,pr as oT,qr as uT,qt as Wm,rn as Yt,rt as Ln,s as AT,vn as aT,w as ET,y as Cy,zr as tT,zt as Vb}from"./chunk-Cw7ux8kt.js";import{o as as,p as ts,t as $t}from"./chunk-hPHK-ePP.js";import{At as xf,C as Zt,E as ee,Et as st$1,M as X,Ut as C,a as pe,en as Qn,f as In,fn as se,j as f,on as _t$1,s as An,t as V,v as T,zt as $n}from"./main-JTEVNHUX.js";import{a as Ue,l as je,t as $e}from"./chunk-ZMC1gMZs.js";import{c as X$1,s as Ue$1}from"./chunk-DtYf20WE.js";import{a as Bt,c as Pt$1,o as J,r as Eu,t as $p}from"./chunk-BF2CAr5B.js";import{n as mt$1,t as Yt$1}from"./chunk-CFUSgIWC.js";import{d as zr,r as Sn}from"./chunk-DzokWsKp.js";import{n as Kt,t as Bt$1}from"./chunk-BUncfC_E.js";var at=[`switch`];var ot=[`*`];function rt(i,d){i&1&&(js(0,`span`,11),dp(),js(1,`svg`,13),Lm(2,`path`,14),Wl(),js(3,`svg`,15),Lm(4,`path`,16),Wl()())}var lt=new w(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var j=class{source;checked;constructor(d,e){this.source=d,this.checked=e}};var te=(()=>{class i{_elementRef=D(Ln);_focusMonitor=D(_t$1);_changeDetectorRef=D(Fy);defaults=D(lt);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new j(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=Qn();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new Dt$1;toggleChange=new Dt$1;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){D(C).load(je);let e=D(new Cy(`tabindex`),{optional:!0}),n=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=n.color||`accent`,this.id=this._uniqueId=D(se).getId(`mat-mdc-slide-toggle-`),this.hideIcon=n.hideIcon??!1,this.disabledInteractive=n.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new j(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(n){return new(n||i)};static ɵcmp=GC({type:i,selectors:[[`mat-slide-toggle`]],viewQuery:function(n,t){if(n&1&&Wm(at,5),n&2){let c;sT(c=aT())&&(t._switchElement=c.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(n,t){n&2&&(Vm(`id`,t.id),km(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),ET(t.color?`mat-`+t.color:``),Xm(`mat-mdc-slide-toggle-focused`,t._focused)(`mat-mdc-slide-toggle-checked`,t.checked)(`mat-slide-toggle-full-width`,t.fullWidth)(`_mat-animation-noopable`,t._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,B_],color:`color`,disabled:[2,`disabled`,`disabled`,B_],fullWidth:[2,`fullWidth`,`fullWidth`,B_],disableRipple:[2,`disableRipple`,`disableRipple`,B_],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:V_(e)],checked:[2,`checked`,`checked`,B_],hideIcon:[2,`hideIcon`,`hideIcon`,B_],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,B_]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[UT([{provide:T,useExisting:ji(()=>i),multi:!0},{provide:ee,useExisting:i,multi:!0}]),Vs],ngContentSelectors:ot,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(n,t){if(n&1&&(rT(),js(0,`div`,1)(1,`button`,2,0),Um(`click`,function(){return t._handleClick()}),Lm(3,`div`,3)(4,`span`,4),js(5,`span`,5)(6,`span`,6)(7,`span`,7),Lm(8,`span`,8),Wl(),js(9,`span`,9),Lm(10,`span`,10),Wl(),Bb(11,rt,5,0,`span`,11),Wl()()(),js(12,`label`,12),Um(`click`,function(q){return q.stopPropagation()}),oT(13),Wl()()),n&2){let c=uT(2);Fm(`labelPosition`,t.labelPosition),yw(),Xm(`mdc-switch--selected`,t.checked)(`mdc-switch--unselected`,!t.checked)(`mdc-switch--checked`,t.checked)(`mdc-switch--disabled`,t.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,t.disabledInteractive),Fm(`tabIndex`,t.disabled&&!t.disabledInteractive?-1:t.tabIndex)(`disabled`,t.disabled&&!t.disabledInteractive),km(`id`,t.buttonId)(`name`,t.name)(`aria-label`,t.ariaLabel)(`aria-labelledby`,t._getAriaLabelledBy())(`aria-describedby`,t.ariaDescribedby)(`aria-required`,t.required||null)(`aria-checked`,t.checked)(`aria-disabled`,t.disabled&&t.disabledInteractive?`true`:null),yw(9),Fm(`matRippleTrigger`,c)(`matRippleDisabled`,t.disableRipple||t.disabled)(`matRippleCentered`,!0),yw(),Vb(t.hideIcon?-1:11),yw(),Fm(`for`,t.buttonId),km(`id`,t._labelId)}},dependencies:[Ue,Ue$1],styles:[`.mdc-switch {
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
`],encapsulation:2})}return i})();var et=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=na({type:i});static ɵinj=Kr({imports:[te,$n]})}return i})();var ct=(i,d)=>d.key;function mt(i,d){i&1&&(js(0,`div`,5)(1,`icon`),AT(2,`warning`),Wl(),js(3,`span`,10),AT(4,`Push notifications are not supported in this browser`),Wl()())}function ht(i,d){i&1&&(js(0,`div`,6)(1,`icon`),AT(2,`block`),Wl(),js(3,`span`,10),AT(4,`Notifications have been blocked. Please enable them in your browser settings.`),Wl()())}function _t(i,d){if(i&1){let e=Qb();js(0,`div`,7)(1,`icon`,11),AT(2,`notifications_off`),Wl(),js(3,`p`,12),AT(4,` Enable push notifications to receive alerts even when the app is in the background. `),Wl(),js(5,`button`,13),Um(`click`,function(){Jf(e);return ep(tT().requestPermission())}),js(6,`icon`,14),AT(7,`notifications_active`),Wl(),AT(8,` Enable Notifications `),Wl()()}}function gt(i,d){if(i&1){let e=Qb();js(0,`div`,17)(1,`div`,22)(2,`icon`),AT(3),Wl(),js(4,`div`)(5,`div`,23),AT(6),Wl(),js(7,`div`,21),AT(8),Wl()()(),js(9,`mat-slide-toggle`,24),Um(`change`,function(t){let c=Jf(e).$implicit;return ep(tT(2).toggleSeverity(c.key,t.checked))}),Wl()()}if(i&2){let e=d.$implicit,n=tT(2);yw(2),ET(`text-3xl `+e.color_class),yw(),oy(e.icon),yw(3),Kl(` `,e.label,` `),yw(2),Kl(` `,e.description,` `),yw(),Fm(`checked`,n.push.config()[e.key]),km(`aria-label`,`Toggle `+e.label+` notifications`)}}function pt(i,d){if(i&1&&(js(0,`p`,15),AT(1,` Choose which alert severity levels should trigger push notifications. `),Wl(),js(2,`div`,16),$b(3,gt,10,7,`div`,17,ct),Wl(),js(5,`div`,18)(6,`div`,19)(7,`icon`,20),AT(8,`info`),Wl(),js(9,`span`,21),AT(10,`Notifications will be sent when new alerts matching these severities are detected.`),Wl()()()),i&2){let e=tT();yw(3),Gb(e.severity_options)}}var ie=`notification-settings-title`;var tt=(()=>{class i{constructor(){this.title_id=ie,this.push=D(Eu),this.severity_options=[{key:`critical`,label:`Critical`,description:`Immediate attention required`,icon:`dangerous`,color_class:`text-error`},{key:`high`,label:`High`,description:`Important issues that may need attention`,icon:`warning`,color_class:`text-warning`},{key:`medium`,label:`Medium`,description:`Informational alerts`,icon:`error`,color_class:`text-info`},{key:`low`,label:`Low`,description:`Low priority notifications`,icon:`info`,color_class:`text-base-400`}]}async requestPermission(){await this.push.requestPermission()}toggleSeverity(e,n){this.push.setSeverityEnabled(e,n)}static{this.ɵfac=function(n){return new(n||i)}}static{this.ɵcmp=GC({type:i,selectors:[[`placeos-push-notification-settings`]],decls:15,vars:2,consts:[[1,`w-md`,`max-w-full`],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`mx-2`,`mt-2`,`h-14`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`,3,`id`],[`icon`,``,`type`,`button`,`matRipple`,``,`aria-label`,`Close notification settings`,`mat-dialog-close`,``,1,`rounded-sm`],[`content`,``,1,`p-4`],[1,`bg-warning-light`,`text-warning`,`flex`,`items-center`,`space-x-2`,`rounded-sm`,`p-3`],[1,`bg-error-light`,`text-error`,`flex`,`items-center`,`space-x-2`,`rounded-sm`,`p-3`],[1,`flex`,`flex-col`,`items-center`,`space-y-4`,`py-4`],[1,`border-base-300`,`flex`,`justify-end`,`border-t`,`p-2`],[`btn`,``,`matRipple`,``,`mat-dialog-close`,``,1,`inverse`,`w-40`],[1,`text-sm`],[1,`text-base-400`,`text-6xl`],[1,`stagehand-subtle`,`text-center`,`text-sm`],[`btn`,``,`matRipple`,``,1,`w-full`,3,`click`],[1,`mr-2`],[1,`stagehand-subtle`,`mb-4`,`text-sm`],[1,`space-y-3`],[1,`border-base-300`,`flex`,`items-center`,`justify-between`,`rounded-sm`,`border`,`p-3`],[1,`bg-info-light`,`mt-4`,`rounded-sm`,`p-3`],[1,`flex`,`items-center`,`space-x-2`],[1,`text-info`,`text-2xl`],[1,`stagehand-subtle`,`text-xs`],[1,`flex`,`items-center`,`space-x-3`],[1,`font-medium`],[3,`change`,`checked`]],template:function(n,t){n&1&&(js(0,`div`,0)(1,`header`,1)(2,`h2`,2),AT(3,` Push Notifications `),Wl(),js(4,`button`,3)(5,`icon`),AT(6,`close`),Wl()()(),js(7,`div`,4),Bb(8,mt,5,0,`div`,5)(9,ht,5,0,`div`,6)(10,_t,9,0,`div`,7)(11,pt,11,0),Wl(),js(12,`footer`,8)(13,`button`,9),AT(14,` Close `),Wl()()()),n&2&&(yw(2),Fm(`id`,t.title_id),yw(6),Vb(t.push.supported()?t.push.permission()===`denied`?9:t.push.enabled()?11:10:8))},dependencies:[Bt,Pt$1,$e,Ue,et,te,V,In],encapsulation:2})}}return i})();var ut=i=>[i];var bt=(i,d)=>d.route;var it=(i,d)=>d.id;function ft(i,d){if(i&1){let e=Qb();js(0,`div`,22),Ds(function(){Jf(e);return ep(tT(2).label_enter())}),Es(`stagehand-fade-out`),js(1,`div`,23),AT(2,` Support group `),Wl(),js(3,`div`,18),AT(4),Wl()(),js(5,`icon`,24),Ds(function(){Jf(e);return ep(tT(2).label_enter())}),Es(`stagehand-fade-out`),AT(6,`unfold_more`),Wl()}if(i&2){let e=tT(2);yw(4),Kl(` `,e.group_label(),` `)}}function vt(i,d){if(i&1){let e=Qb();js(0,`div`,8)(1,`button`,21),Um(`click`,function(){Jf(e);return ep(tT().selectGroup())}),js(2,`icon`,14),AT(3),Wl(),Bb(4,ft,7,1),Wl()()}if(i&2){let e=tT();yw(),Xm(`justify-center`,e.is_compact()),Fm(`matTooltip`,e.is_compact()?e.group_label():``),km(`aria-label`,`Support group: `+e.group_label()),yw(2),oy(e.selected_group()?`group`:`public`),yw(),Vb(e.is_compact()?-1:4)}}function wt(i,d){if(i&1&&(js(0,`mat-option`,30),AT(1),Wl()),i&2){let e=d.$implicit;Fm(`value`,e.id),yw(),oy(e.display_name||e.name)}}function St(i,d){if(i&1){let e=Qb();js(0,`label`,26),AT(1,` Region `),Wl(),js(2,`mat-form-field`,27)(3,`mat-select`,28),cy(`ngModelChange`,function(t){Jf(e);let c=tT(3);return LT(c.region,t)||(c.region=t),ep(t)}),Um(`selectionChange`,function(t){Jf(e);let c=tT(3);return ep(c.setRegion(c.regionById(t.value)))}),js(4,`mat-option`,29),AT(5),KT(6,`translate`),Wl(),$b(7,wt,2,2,`mat-option`,30,it),Wl(),tC(),Wl()}if(i&2){tT(2);let e=jT(0),n=tT();yw(3),ay(`ngModel`,n.region),rC(),yw(2),oy(JT(6,2,`COMMON.REGION_ALL`)),yw(2),Gb(e)}}function xt(i,d){if(i&1&&(js(0,`mat-option`,30),AT(1),Wl()),i&2){let e=d.$implicit;Fm(`value`,e.id),yw(),oy(e.display_name||e.name)}}function yt(i,d){if(i&1){let e=Qb();js(0,`label`,31),AT(1,` Building `),Wl(),js(2,`mat-form-field`,27)(3,`mat-select`,32),cy(`ngModelChange`,function(t){Jf(e);let c=tT(3);return LT(c.building,t)||(c.building=t),ep(t)}),Um(`selectionChange`,function(t){Jf(e);let c=tT(3);return ep(c.setBuilding(c.buildingById(t.value)))}),js(4,`mat-option`,29),AT(5),KT(6,`translate`),Wl(),$b(7,xt,2,2,`mat-option`,30,it),Wl(),tC(),Wl()}if(i&2){tT(2);let e=jT(1),n=tT();yw(3),ay(`ngModel`,n.building),rC(),yw(2),oy(JT(6,2,`COMMON.BUILDING_ALL`)),yw(2),Gb(e)}}function Ct(i,d){if(i&1){let e=Qb();js(0,`div`,25),Ds(function(){Jf(e);return ep(tT(2).label_enter())}),Bb(1,St,9,4),Bb(2,yt,9,4),Wl()}if(i&2){tT();let e=jT(0),n=jT(1),t=tT();yw(),Vb(e.length>0?1:-1),yw(),Vb(n.length>0&&t.region()?2:-1)}}function kt(i,d){if(i&1&&(ly(0)(1),Bb(2,Ct,3,2,`div`,25)),i&2){let e=tT(),n=PT(e.region_list());yw();let t=PT(e.building_list());yw(),Vb(n.length||t.length?2:-1)}}function Nt(i,d){if(i&1){let e=Qb();js(0,`span`,34),Ds(function(){Jf(e);return ep(tT(2).label_enter())}),Es(`stagehand-fade-out`),AT(1),Wl()}if(i&2){let e=tT().$implicit;yw(),oy(e.name)}}function Tt(i,d){if(i&1&&(js(0,`a`,10)(1,`icon`,33),AT(2),Wl(),Bb(3,Nt,2,1,`span`,34),Wl()),i&2){let e=d.$implicit,n=tT();Fm(`routerLink`,GT(5,ut,e.route))(`matTooltip`,n.is_compact()?e.name:``),km(`aria-label`,e.aria_label),yw(2),oy(e.icon),yw(),Vb(n.is_compact()?-1:3)}}function Et(i,d){if(i&1){let e=Qb();js(0,`span`,15),Ds(function(){Jf(e);return ep(tT(2).label_enter())}),Es(`stagehand-fade-out`),AT(1,`Dark Mode`),Wl(),js(2,`span`,36),Ds(function(){Jf(e);return ep(tT(2).label_enter())}),Es(`stagehand-fade-out`),AT(3),Wl()}if(i&2){let e=tT(2);yw(2),Xm(`bg-success`,e.dark_mode())(`text-success-content`,e.dark_mode())(`bg-base-100`,!e.dark_mode())(`text-base-content`,!e.dark_mode()),yw(),Kl(` `,e.dark_mode()?`ON`:`OFF`,` `)}}function Mt(i,d){if(i&1){let e=Qb();js(0,`button`,35),Um(`click`,function(){Jf(e);return ep(tT().toggleDarkMode())}),js(1,`icon`,14),AT(2),Wl(),Bb(3,Et,4,9),Wl()}if(i&2){let e=tT();Fm(`matTooltip`,e.is_compact()?e.dark_mode()?`Switch to Light Mode`:`Switch to Dark Mode`:``),km(`aria-pressed`,e.dark_mode()),yw(2),oy(e.dark_mode()?`dark_mode`:`light_mode`),yw(),Vb(e.is_compact()?-1:3)}}function It(i,d){if(i&1){let e=Qb();js(0,`span`,15),Ds(function(){Jf(e);return ep(tT().label_enter())}),Es(`stagehand-fade-out`),AT(1,`Notifications`),Wl()}}function Lt(i,d){if(i&1){let e=Qb();js(0,`span`,16),Ds(function(){Jf(e);return ep(tT().label_enter())}),Es(`stagehand-fade-out`),AT(1,`ON`),Wl()}}function Vt(i,d){if(i&1){let e=Qb();js(0,`span`,18),Ds(function(){Jf(e);return ep(tT().label_enter())}),Es(`stagehand-fade-out`),AT(1,` Launch PlaceOS Backoffice `),Wl()}}function Pt(i,d){i&1&&(js(0,`icon`,19),AT(1,`open_in_new`),Wl())}function Dt(i,d){if(i&1){let e=Qb();js(0,`div`,20),Ds(function(){Jf(e);return ep(tT().label_enter())}),Es(`stagehand-fade-out`),js(1,`p`,37),AT(2,` Access system configuration and management `),Wl()()}}function Rt(){return st$1(`backoffice_link`,`${location.origin}/backoffice/`)}var zt=st(typeof matchMedia==`function`&&matchMedia(`(max-width: 767px)`).matches);var nt=(()=>{class i{constructor(){this._dash=D($p),this._org=D(pe),this._dialog=D(J),this._settings=D(xf),this._groups=D(X),this.push=D(Eu),this.is_compact=zt,this.label_enter=st(``),this._allow_dark_mode=this._settings.signal(`allow_dark_mode`,!1),this._theme=this._settings.theme_signal,this.notifications_active=Yt(()=>{if(!this.push.enabled())return!1;let e=this.push.config();return e.critical||e.high||e.medium||e.low}),this.dark_mode=Yt(()=>this._theme()===`dark`),this.can_change_dark_mode=Yt(()=>!!this._allow_dark_mode()),this.backoffice_link=Rt(),this.show_recorder_view=st$1(`show_recorder_view`,!1),this.analytics_pages=st$1(`analytics_pages`,[]),this.nav_links=Yt(()=>[{route:`/alerts`,name:`Alerts`,aria_label:`Alerts`,icon:`notifications`},{route:`/remote-support`,name:`Remote Support`,aria_label:`Remote support`,icon:`wifi`},...this.analytics_pages()?.length>0?[{route:`/analytics`,name:`Analytics`,aria_label:`Analytics`,icon:`show_chart`}]:[],{route:`/dashboards`,name:`Manage Dashboards`,aria_label:`Manage dashboards`,icon:`dashboard`},...this.show_recorder_view()?[{route:`/recorder-grid`,name:`Recorder Streams`,aria_label:`Recorder streams`,icon:`stream`}]:[]]),this.region=this._dash.region_id,this.building=this._dash.building_id,this.selected_group=this._groups.selected_group,this.group_label=Yt(()=>this.selected_group()?.group.name||`All groups`),this.show_group_selector=Yt(()=>this._groups.can_view_all()||this._groups.groups().length>0),this.region_list=Yt(()=>{let e=this._groups.scope(),n=this._org.region_list();return e?n.filter(t=>e.zones.has(t.id)):n}),this.building_list=Yt(()=>{let e=this._groups.scope(),n=this._org.active_buildings();return e?n.filter(t=>e.zones.has(t.id)):n}),this.setRegion=e=>{this._org.region=e,this.building.set(``),this._dash.listenForDashboardAlerts(!0)},this.setBuilding=e=>{this._org.building=e,this._dash.listenForDashboardAlerts(!0)},Ig(()=>this.label_enter.set(`stagehand-label-in`))}regionById(e){return this.region_list().find(n=>n.id===e)||null}buildingById(e){return this.building_list().find(n=>n.id===e)||null}async selectGroup(){let{GroupSelectModalComponent:e,GROUP_SELECT_TITLE_ID:n}=await import(`./chunk-CX5Ri3xi.js`),c=await Lv(this._dialog.open(e,{ariaLabelledBy:n,data:{groups:this._groups.groups(),selected_group_id:this._groups.group_id(),show_all_groups:this._groups.can_view_all()}}).afterClosed(),{defaultValue:void 0});c!==void 0&&this._groups.setSelectedGroup(c)}toggleCompact(){this.is_compact.update(e=>!e)}toggleDarkMode(){this._settings.setTheme(this.dark_mode()?`light`:`dark`)}openNotificationSettings(){this._dialog.open(tt,{ariaLabelledBy:ie})}static{this.ɵfac=function(n){return new(n||i)}}static{this.ɵcmp=GC({type:i,selectors:[[`sidebar`]],decls:27,vars:31,consts:[[`sidebar`,``,`aria-label`,`Primary`,1,`bg-secondary`,`text-secondary-content`,`flex`,`h-full`,`flex-col`],[1,`flex`,`items-center`,`px-1`],[`header`,``,1,`overflow-hidden`],[1,`px-2`,`py-4`],[1,`truncate`,`text-2xl`,`font-medium`],[1,`stagehand-muted`,`truncate`,`text-xs`],[`icon`,``,`type`,`button`,`matRipple`,``,`matTooltipPosition`,`right`,1,`rounded-sm`,3,`click`,`matTooltip`],[1,`text-3xl`],[1,`px-2`,`pt-1`],[1,`mt-2`,`flex-1`,`space-y-1`,`overflow-auto`],[`matRipple`,``,`routerLinkActive`,`bg-secondary-focus!`,`ariaCurrentWhenActive`,`page`,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`relative`,`flex`,`w-full`,`items-center`,`space-x-4`,`p-2`,3,`routerLink`,`matTooltip`],[1,`flex`,`flex-col`,`gap-2`,`py-4`],[`matRipple`,``,`type`,`button`,`aria-label`,`Dark mode`,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`relative`,`flex`,`w-full`,`items-center`,`justify-center`,`gap-2`,`rounded-sm`,`p-2`,3,`matTooltip`],[`matRipple`,``,`type`,`button`,`aria-label`,`Notification settings`,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`relative`,`flex`,`w-full`,`items-center`,`justify-center`,`gap-2`,`rounded-sm`,`p-2`,3,`click`,`matTooltip`],[1,`text-2xl`],[1,`flex-1`,`truncate`,`text-left`,`text-sm`],[1,`bg-success`,`text-success-content`,`ml-auto`,`rounded-full`,`px-2`,`py-0.5`,`text-xs`],[`btn`,``,`matRipple`,``,`matTooltipPosition`,`right`,`aria-label`,`Launch PlaceOS Backoffice in a new tab`,`target`,`_blank`,`rel`,`noopener noreferrer`,1,`inverse`,3,`matTooltip`,`href`],[1,`truncate`,`text-sm`],[1,`text-base-100`,`text-3xl`],[1,`overflow-hidden`],[`matRipple`,``,`type`,`button`,`group-selector`,``,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`border-base-100/20`,`flex`,`w-full`,`items-center`,`gap-2`,`rounded-sm`,`border`,`p-2`,`text-left`,3,`click`,`matTooltip`],[1,`min-w-0`,`flex-1`],[1,`stagehand-muted`,`text-xs`,`font-medium`,`tracking-wide`,`uppercase`],[1,`text-xl`],[1,`space-y-2`,`p-2`],[`for`,`sidebar-region`,1,`block`,`px-1`,`text-xs`,`font-medium`,`tracking-wide`,`uppercase`],[`appearance`,`outline`,1,`no-subscript`,`white-faded`,`w-full`],[`id`,`sidebar-region`,`aria-label`,`Region`,3,`ngModelChange`,`selectionChange`,`ngModel`],[`value`,``],[3,`value`],[`for`,`sidebar-building`,1,`block`,`px-1`,`text-xs`,`font-medium`,`tracking-wide`,`uppercase`],[`id`,`sidebar-building`,`aria-label`,`Building`,3,`ngModelChange`,`selectionChange`,`ngModel`],[1,`ml-0!`,`text-3xl`],[1,`truncate`],[`matRipple`,``,`type`,`button`,`aria-label`,`Dark mode`,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`relative`,`flex`,`w-full`,`items-center`,`justify-center`,`gap-2`,`rounded-sm`,`p-2`,3,`click`,`matTooltip`],[`aria-hidden`,`true`,1,`ml-auto`,`rounded-full`,`px-2`,`py-0.5`,`text-xs`],[1,`stagehand-muted`,`w-56`,`text-center`,`text-xs`]],template:function(n,t){n&1&&(js(0,`nav`,0)(1,`div`,1)(2,`div`,2)(3,`div`,3)(4,`div`,4),AT(5,` Stagehand `),Wl(),js(6,`div`,5),AT(7,` by PlaceOS `),Wl()()(),js(8,`button`,6),Um(`click`,function(){return t.toggleCompact()}),js(9,`icon`,7),AT(10),Wl()()(),Bb(11,vt,5,6,`div`,8),Bb(12,kt,3,3),js(13,`div`,9),$b(14,Tt,4,7,`a`,10,bt),Wl(),js(16,`div`,11),Bb(17,Mt,4,4,`button`,12),js(18,`button`,13),Um(`click`,function(){return t.openNotificationSettings()}),js(19,`icon`,14),AT(20),Wl(),Bb(21,It,2,0,`span`,15),Bb(22,Lt,2,0,`span`,16),Wl(),js(23,`a`,17),Bb(24,Vt,2,0,`span`,18),Bb(25,Pt,2,0,`icon`,19),Wl(),Bb(26,Dt,3,0,`div`,20),Wl()()),n&2&&(Km(`width`,t.is_compact()?`3.5rem`:`16rem`),yw(2),Km(`width`,t.is_compact()?`0rem`:`13rem`),yw(6),Xm(`w-14`,t.is_compact()),Fm(`matTooltip`,t.is_compact()?`Expand Sidebar`:`Collapse Sidebar`),km(`aria-label`,t.is_compact()?`Expand sidebar`:`Collapse sidebar`),yw(2),oy(t.is_compact()?`menu`:`close`),yw(),Vb(t.show_group_selector()?11:-1),yw(),Vb(t.is_compact()?-1:12),yw(2),Gb(t.nav_links()),yw(2),Xm(`px-4`,!t.is_compact())(`px-0`,t.is_compact()),yw(),Vb(t.can_change_dark_mode()?17:-1),yw(),Fm(`matTooltip`,t.is_compact()?`Notification Settings`:``),yw(2),oy(t.notifications_active()?`notifications_active`:`notifications_off`),yw(),Vb(t.is_compact()?-1:21),yw(),Vb(t.notifications_active()&&!t.is_compact()?22:-1),yw(),Xm(`min-w-0`,t.is_compact())(`base`,!t.is_compact())(`clear`,t.is_compact()),Fm(`matTooltip`,t.is_compact()?`Launch PlaceOS Backoffice`:``)(`href`,t.backoffice_link(),sg),yw(),Vb(t.is_compact()?-1:24),yw(),Vb(t.is_compact()?25:-1),yw(),Vb(t.is_compact()?-1:26))},dependencies:[$e,Ue,Yt$1,mt$1,V,as,$t,ts,zr,Sn,Kt,Bt$1,X$1,In,An,Zt,f],styles:[`[sidebar][_ngcontent-%COMP%], [header][_ngcontent-%COMP%]{transition:width .2s}@media(prefers-reduced-motion:reduce){[sidebar][_ngcontent-%COMP%], [header][_ngcontent-%COMP%]{transition:none}}`]})}}return i})();var Ot=[[[``,`page-header-start`,``]],[[``,`page-header`,``]],`*`];var At=[`[page-header-start]`,`[page-header]`,`*`];var Ri=(()=>{class i{constructor(){this.heading=MV.required()}static{this.ɵfac=function(n){return new(n||i)}}static{this.ɵcmp=GC({type:i,selectors:[[`stagehand-page`]],inputs:{heading:[1,`heading`]},ngContentSelectors:At,decls:10,vars:1,consts:[[1,`bg-base-200`,`absolute`,`inset-0`,`flex`],[1,`[view-transition-name:stagehand-sidebar]`],[1,`flex`,`w-px`,`flex-1`,`flex-col`],[1,`border-base-400`,`bg-base-100`,`flex`,`h-18`,`w-full`,`items-center`,`justify-between`,`space-x-2`,`p-4`,`[view-transition-name:stagehand-header]`],[1,`text-2xl`,`font-bold`],[`id`,`stagehand-page-content`,1,`w-full`,`flex-1`,`overflow-auto`,`[view-transition-name:stagehand-content]`]],template:function(n,t){n&1&&(rT(Ot),js(0,`div`,0),Lm(1,`sidebar`,1),js(2,`div`,2)(3,`header`,3),oT(4),js(5,`h1`,4),AT(6),Wl(),oT(7,1),Wl(),js(8,`main`,5),oT(9,2),Wl()()()),n&2&&(yw(6),oy(t.heading()))},dependencies:[nt],encapsulation:2})}}return i})();export{Rt as n,Ri as t};
//# debugId=c87e2aeb-e27e-5611-899a-76f377d975a7
