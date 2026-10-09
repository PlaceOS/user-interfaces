import{$t as Yt,Bn as hm,Bt as Vm,C as ET,Dn as fb,F as Hl,Gn as it$1,H as Jb,Hn as iT,Hr as u_,Ir as sT,It as Ub,Jr as vt$1,Kr as vb,Lt as Um,M as Gf,Mn as fy,Nt as Tb,O as Fn,On as fm,Rt as VI,X as Ll,Yr as wT,Z as Lm,_n as db,bt as Qh,ci as zf,ct as Nm,d as Bm,et as Mb,fn as bw,gn as dT,h as Cb,hr as oT,ln as bm,mn as cb,ni as xm,nn as _b,nr as lT,on as _w,p as C,pr as np,qr as vm,ri as xs,rr as l_,rt as Ms,s as Ab,sn as ab,st as Nb,ui as zs,w as Em,wn as ey,wr as pm,wt as Ri,xr as pC,xt as Qr,y as D}from"./chunk-BqGDXmhU.js";import{F as f,N as ts,Xt as be,d as ks,h as z,j as ss,k as kt$1,n as O,o as Re,qt as De}from"./main-5CSHVZX2.js";import{b as Ye$1,c as A,r as Rt$1,s as yt$1,t as Mt$1,y as Y}from"./chunk-C_3u17dA.js";import{P as z$1,S as ir,T as lt$1,a as Gn,h as _e,r as Ei,y as dr}from"./chunk-D4HOJQ6n.js";import{l as ee,n as pp,o as Bt,s as Ht,t as hu}from"./chunk-Dpb2DUdt.js";import{n as mt$1,t as Yt$1}from"./chunk-ByiGNXI5.js";import{i as Mn,t as Br}from"./chunk-CUZNfMoV.js";import{r as zt,t as Bt$1}from"./chunk-a-nNnKPA.js";var Ze=[`switch`];var Ye=[`*`];function Je(i,s){i&1&&(Ms(0,`span`,11),np(),Ms(1,`svg`,13),hm(2,`path`,14),Ll(),Ms(3,`svg`,15),hm(4,`path`,16),Ll()())}var Ke=new C(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var V=class{source;checked;constructor(s,e){this.source=s,this.checked=e}};var Z=(()=>{class i{_elementRef=D(Fn);_focusMonitor=D(Ye$1);_changeDetectorRef=D(fy);defaults=D(Ke);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new V(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=De();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new vt$1;toggleChange=new vt$1;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){D(A).load(Rt$1);let e=D(new ey(`tabindex`),{optional:!0}),c=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=c.color||`accent`,this.id=this._uniqueId=D(Y).getId(`mat-mdc-slide-toggle-`),this.hideIcon=c.hideIcon??!1,this.disabledInteractive=c.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new V(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(c){return new(c||i)};static ɵcmp=pC({type:i,selectors:[[`mat-slide-toggle`]],viewQuery:function(c,t){if(c&1&&bm(Ze,5),c&2){let h;Mb(h=Nb())&&(t._switchElement=h.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(c,t){c&2&&(vm(`id`,t.id),fm(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),Ub(t.color?`mat-`+t.color:``),xm(`mat-mdc-slide-toggle-focused`,t._focused)(`mat-mdc-slide-toggle-checked`,t.checked)(`mat-slide-toggle-full-width`,t.fullWidth)(`_mat-animation-noopable`,t._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,u_],color:`color`,disabled:[2,`disabled`,`disabled`,u_],fullWidth:[2,`fullWidth`,`fullWidth`,u_],disableRipple:[2,`disableRipple`,`disableRipple`,u_],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:l_(e)],checked:[2,`checked`,`checked`,u_],hideIcon:[2,`hideIcon`,`hideIcon`,u_],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,u_]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[lT([{provide:z$1,useExisting:Ri(()=>i),multi:!0},{provide:_e,useExisting:i,multi:!0}]),xs],ngContentSelectors:Ye,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(c,t){if(c&1&&(Tb(),Ms(0,`div`,1)(1,`button`,2,0),Em(`click`,function(){return t._handleClick()}),hm(3,`div`,3)(4,`span`,4),Ms(5,`span`,5)(6,`span`,6)(7,`span`,7),hm(8,`span`,8),Ll(),Ms(9,`span`,9),hm(10,`span`,10),Ll(),ab(11,Je,5,0,`span`,11),Ll()()(),Ms(12,`label`,12),Em(`click`,function(O){return O.stopPropagation()}),_b(13),Ll()()),c&2){let h=Ab(2);pm(`labelPosition`,t.labelPosition),VI(),xm(`mdc-switch--selected`,t.checked)(`mdc-switch--unselected`,!t.checked)(`mdc-switch--checked`,t.checked)(`mdc-switch--disabled`,t.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,t.disabledInteractive),pm(`tabIndex`,t.disabled&&!t.disabledInteractive?-1:t.tabIndex)(`disabled`,t.disabled&&!t.disabledInteractive),fm(`id`,t.buttonId)(`name`,t.name)(`aria-label`,t.ariaLabel)(`aria-labelledby`,t._getAriaLabelledBy())(`aria-describedby`,t.ariaDescribedby)(`aria-required`,t.required||null)(`aria-checked`,t.checked)(`aria-disabled`,t.disabled&&t.disabledInteractive?`true`:null),VI(9),pm(`matRippleTrigger`,h)(`matRippleDisabled`,t.disableRipple||t.disabled)(`matRippleCentered`,!0),VI(),cb(t.hideIcon?-1:11),VI(),pm(`for`,t.buttonId),fm(`id`,t._labelId)}},dependencies:[yt$1,Ei],styles:[`.mdc-switch {
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
`],encapsulation:2})}return i})();var He=(()=>{class i{static ɵfac=function(c){return new(c||i)};static ɵmod=zs({type:i});static ɵinj=Qr({imports:[Z,be]})}return i})();var it=(i,s)=>s.key;function nt(i,s){i&1&&(Ms(0,`div`,5)(1,`icon`),Jb(2,`warning`),Ll(),Ms(3,`span`,10),Jb(4,`Push notifications are not supported in this browser`),Ll()())}function at(i,s){i&1&&(Ms(0,`div`,6)(1,`icon`),Jb(2,`block`),Ll(),Ms(3,`span`,10),Jb(4,`Notifications have been blocked. Please enable them in your browser settings.`),Ll()())}function ot(i,s){if(i&1){let e=vb();Ms(0,`div`,7)(1,`icon`,11),Jb(2,`notifications_off`),Ll(),Ms(3,`p`,12),Jb(4,` Enable push notifications to receive alerts even when the app is in the background. `),Ll(),Ms(5,`button`,13),Em(`click`,function(){Gf(e);return zf(Cb().requestPermission())}),Ms(6,`icon`,14),Jb(7,`notifications_active`),Ll(),Jb(8,` Enable Notifications `),Ll()()}}function lt(i,s){if(i&1){let e=vb();Ms(0,`div`,17)(1,`div`,22)(2,`icon`),Jb(3),Ll(),Ms(4,`div`)(5,`div`,23),Jb(6),Ll(),Ms(7,`div`,21),Jb(8),Ll()()(),Ms(9,`mat-slide-toggle`,24),Em(`change`,function(t){let h=Gf(e).$implicit;return zf(Cb(2).toggleSeverity(h.key,t.checked))}),Ll()()}if(i&2){let e=s.$implicit,c=Cb(2);VI(2),Ub(`text-3xl `+e.color_class),VI(),Lm(e.icon),VI(3),Hl(` `,e.label,` `),VI(2),Hl(` `,e.description,` `),VI(),pm(`checked`,c.push.config()[e.key]),fm(`aria-label`,`Toggle `+e.label+` notifications`)}}function ct(i,s){if(i&1&&(Ms(0,`p`,15),Jb(1,` Choose which alert severity levels should trigger push notifications. `),Ll(),Ms(2,`div`,16),db(3,lt,10,7,`div`,17,it),Ll(),Ms(5,`div`,18)(6,`div`,19)(7,`icon`,20),Jb(8,`info`),Ll(),Ms(9,`span`,21),Jb(10,`Notifications will be sent when new alerts matching these severities are detected.`),Ll()()()),i&2){let e=Cb();VI(3),fb(e.severity_options)}}var Qe=(()=>{class i{constructor(){this.push=D(hu),this.severity_options=[{key:`critical`,label:`Critical`,description:`Immediate attention required`,icon:`dangerous`,color_class:`text-error`},{key:`high`,label:`High`,description:`Important issues that may need attention`,icon:`warning`,color_class:`text-warning`},{key:`medium`,label:`Medium`,description:`Informational alerts`,icon:`error`,color_class:`text-info`},{key:`low`,label:`Low`,description:`Low priority notifications`,icon:`info`,color_class:`text-base-400`}]}async requestPermission(){await this.push.requestPermission()}toggleSeverity(e,c){this.push.setSeverityEnabled(e,c)}static{this.ɵfac=function(c){return new(c||i)}}static{this.ɵcmp=pC({type:i,selectors:[[`placeos-push-notification-settings`]],decls:15,vars:1,consts:[[1,`w-md`,`max-w-full`],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`mx-2`,`mt-2`,`h-14`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`type`,`button`,`matRipple`,``,`aria-label`,`Close notification settings`,`mat-dialog-close`,``,1,`rounded-sm`],[1,`p-4`],[1,`bg-warning-light`,`text-warning`,`flex`,`items-center`,`space-x-2`,`rounded-sm`,`p-3`],[1,`bg-error-light`,`text-error`,`flex`,`items-center`,`space-x-2`,`rounded-sm`,`p-3`],[1,`flex`,`flex-col`,`items-center`,`space-y-4`,`py-4`],[1,`border-base-300`,`flex`,`justify-end`,`border-t`,`p-2`],[`btn`,``,`matRipple`,``,`mat-dialog-close`,``,1,`inverse`,`w-40`],[1,`text-sm`],[1,`text-base-400`,`text-6xl`],[1,`stagehand-subtle`,`text-center`,`text-sm`],[`btn`,``,`matRipple`,``,1,`w-full`,3,`click`],[1,`mr-2`],[1,`stagehand-subtle`,`mb-4`,`text-sm`],[1,`space-y-3`],[1,`border-base-300`,`flex`,`items-center`,`justify-between`,`rounded-sm`,`border`,`p-3`],[1,`bg-info-light`,`mt-4`,`rounded-sm`,`p-3`],[1,`flex`,`items-center`,`space-x-2`],[1,`text-info`,`text-2xl`],[1,`stagehand-subtle`,`text-xs`],[1,`flex`,`items-center`,`space-x-3`],[1,`font-medium`],[3,`change`,`checked`]],template:function(c,t){c&1&&(Ms(0,`div`,0)(1,`header`,1)(2,`h2`,2),Jb(3,`Push Notifications`),Ll(),Ms(4,`button`,3)(5,`icon`),Jb(6,`close`),Ll()()(),Ms(7,`main`,4),ab(8,nt,5,0,`div`,5)(9,at,5,0,`div`,6)(10,ot,9,0,`div`,7)(11,ct,11,0),Ll(),Ms(12,`footer`,8)(13,`button`,9),Jb(14,` Close `),Ll()()()),c&2&&(VI(8),cb(t.push.supported()?t.push.permission()===`denied`?9:t.push.enabled()?11:10:8))},dependencies:[Ht,Bt,Mt$1,yt$1,He,Z,O,dr],encapsulation:2})}}return i})();var st=()=>[`/alerts`];var rt=()=>[`/remote-support`];var dt=()=>[`/dashboards`];var mt=()=>[`/analytics`];var ht=()=>[`/recorder-grid`];var Ue=(i,s)=>s.id;function pt(i,s){if(i&1){let e=vb();Ms(0,`mat-option`,32),Em(`click`,function(){let t=Gf(e).$implicit;return zf(Cb(4).setRegion(t))}),Jb(1),Ll()}if(i&2){let e=s.$implicit;pm(`value`,e.id),VI(),Lm(e.display_name||e.name)}}function gt(i,s){if(i&1){let e=vb();Ms(0,`label`,27),Jb(1,` Region `),Ll(),Ms(2,`mat-form-field`,28)(3,`mat-select`,29),Vm(`ngModelChange`,function(t){Gf(e);let h=Cb(3);return oT(h.region,t)||(h.region=t),zf(t)}),Ms(4,`mat-option`,30),Em(`click`,function(){Gf(e);return zf(Cb(3).setRegion(null))}),Jb(5),ET(6,`translate`),Ll(),db(7,pt,2,2,`mat-option`,31,Ue),Ll(),bw(),Ll()}if(i&2){Cb(2);let e=sT(0),c=Cb();VI(3),Bm(`ngModel`,c.region),_w(),VI(2),Lm(wT(6,2,`COMMON.REGION_ALL`)),VI(2),fb(e)}}function _t(i,s){if(i&1){let e=vb();Ms(0,`mat-option`,32),Em(`click`,function(){let t=Gf(e).$implicit;return zf(Cb(4).setBuilding(t))}),Jb(1),Ll()}if(i&2){let e=s.$implicit;pm(`value`,e.id),VI(),Lm(e.display_name||e.name)}}function ut(i,s){if(i&1){let e=vb();Ms(0,`label`,33),Jb(1,` Building `),Ll(),Ms(2,`mat-form-field`,28)(3,`mat-select`,34),Vm(`ngModelChange`,function(t){Gf(e);let h=Cb(3);return oT(h.building,t)||(h.building=t),zf(t)}),Ms(4,`mat-option`,30),Em(`click`,function(){Gf(e);return zf(Cb(3).setBuilding(null))}),Jb(5),ET(6,`translate`),Ll(),db(7,_t,2,2,`mat-option`,31,Ue),Ll(),bw(),Ll()}if(i&2){Cb(2);let e=sT(1),c=Cb();VI(3),Bm(`ngModel`,c.building),_w(),VI(2),Lm(wT(6,2,`COMMON.BUILDING_ALL`)),VI(2),fb(e)}}function bt(i,s){if(i&1&&(Ms(0,`div`,26),ab(1,gt,9,4),ab(2,ut,9,4),Ll()),i&2){Cb();let e=sT(0),c=sT(1),t=Cb();VI(),cb(e.length>0?1:-1),VI(),cb(c.length>0&&t.region()?2:-1)}}function ft(i,s){if(i&1&&(Um(0)(1),ab(2,bt,3,2,`div`,26)),i&2){let e=Cb(),c=iT(e.region_list());VI();let t=iT(e.building_list());VI(),cb(c.length||t.length?2:-1)}}function vt(i,s){i&1&&(Ms(0,`span`,11),Jb(1,`Alerts`),Ll())}function wt(i,s){i&1&&(Ms(0,`span`,11),Jb(1,`Remote Support`),Ll())}function St(i,s){i&1&&(Ms(0,`span`,11),Jb(1,`Analytics`),Ll())}function yt(i,s){if(i&1&&(Ms(0,`a`,13)(1,`icon`,10),Jb(2,`show_chart`),Ll(),ab(3,St,2,0,`span`,11),Ll()),i&2){let e=Cb();pm(`routerLink`,dT(3,mt))(`matTooltip`,e.is_compact()?`Analytics`:``),VI(3),cb(e.is_compact()?-1:3)}}function xt(i,s){i&1&&(Ms(0,`span`,11),Jb(1,`Manage Dashboards`),Ll())}function kt(i,s){i&1&&(Ms(0,`span`,11),Jb(1,`Recorder Streams`),Ll())}function Ct(i,s){if(i&1&&(Ms(0,`a`,15),hm(1,`div`,35),Ms(2,`icon`,36),Jb(3,`stream`),Ll(),ab(4,kt,2,0,`span`,11),Ll()),i&2){let e=Cb();pm(`routerLink`,dT(3,ht))(`matTooltip`,e.is_compact()?`Recorder Streams`:``),VI(4),cb(e.is_compact()?-1:4)}}function Nt(i,s){if(i&1&&(Ms(0,`span`,20),Jb(1,`Dark Mode`),Ll(),Ms(2,`span`,38),Jb(3),Ll()),i&2){let e=Cb(2);VI(2),xm(`bg-success`,e.dark_mode())(`text-success-content`,e.dark_mode())(`bg-base-100`,!e.dark_mode())(`text-base-content`,!e.dark_mode()),VI(),Hl(` `,e.dark_mode()?`ON`:`OFF`,` `)}}function Tt(i,s){if(i&1){let e=vb();Ms(0,`button`,37),Em(`click`,function(){Gf(e);return zf(Cb().toggleDarkMode())}),Ms(1,`icon`,19),Jb(2),Ll(),ab(3,Nt,4,9),Ll()}if(i&2){let e=Cb();pm(`matTooltip`,e.is_compact()?e.dark_mode()?`Switch to Light Mode`:`Switch to Dark Mode`:``),fm(`aria-label`,e.dark_mode()?`Switch to light mode`:`Switch to dark mode`),VI(2),Lm(e.dark_mode()?`dark_mode`:`light_mode`),VI(),cb(e.is_compact()?-1:3)}}function Et(i,s){i&1&&(Ms(0,`span`,20),Jb(1,`Notifications`),Ll())}function Mt(i,s){i&1&&(Ms(0,`span`,21),Jb(1,`ON`),Ll())}function It(i,s){i&1&&(Ms(0,`span`,23),Jb(1,` Launch PlaceOS Backoffice `),Ll())}function Lt(i,s){i&1&&(Ms(0,`icon`,24),Jb(1,`open_in_new`),Ll())}function Pt(i,s){i&1&&(Ms(0,`p`,25),Jb(1,` Access system configuration and management `),Ll())}var Rt=it$1(!1);var ki=(()=>{class i{constructor(){this._dash=D(pp),this._org=D(Re),this._dialog=D(ee),this._settings=D(z),this.push=D(hu),this.is_compact=Rt,this._allow_dark_mode=this._settings.signal(`allow_dark_mode`,!1),this._theme=this._settings.theme_signal,this.notifications_active=Yt(()=>{if(!this.push.enabled())return!1;let e=this.push.config();return e.critical||e.high||e.medium||e.low}),this.dark_mode=Yt(()=>this._theme()===`dark`),this.can_change_dark_mode=Yt(()=>!!this._allow_dark_mode()),this.backoffice_link=ks(`backoffice_link`,`${location.origin}/backoffice/`),this.show_recorder_view=ks(`show_recorder_view`,!1),this.analytics_pages=ks(`analytics_pages`,[]),this.region=this._dash.region_id,this.building=this._dash.building_id,this.region_list=this._org.region_list,this.building_list=this._org.active_buildings,this.setRegion=e=>{this._org.region=e,this.building.set(``),this._dash.listenForDashboardAlerts(!0)},this.setBuilding=e=>{this._org.building=e,this._dash.listenForDashboardAlerts(!0)}}toggleCompact(){this.is_compact.update(e=>!e)}toggleDarkMode(){this._settings.setTheme(this.dark_mode()?`light`:`dark`)}openNotificationSettings(){this._dialog.open(Qe)}static{this.ɵfac=function(c){return new(c||i)}}static{this.ɵcmp=pC({type:i,selectors:[[`sidebar`]],decls:38,vars:44,consts:[[`sidebar`,``,`aria-label`,`Primary`,1,`bg-secondary`,`text-secondary-content`,`flex`,`h-full`,`flex-col`],[1,`flex`,`items-center`,`px-1`],[`header`,``,1,`overflow-hidden`],[1,`px-2`,`py-4`],[1,`truncate`,`text-2xl`,`font-medium`],[1,`stagehand-muted`,`truncate`,`text-xs`],[`icon`,``,`type`,`button`,`matRipple`,``,`matTooltipPosition`,`right`,1,`rounded-sm`,3,`click`,`matTooltip`],[1,`text-3xl`],[1,`mt-2`,`flex-1`,`space-y-1`,`overflow-auto`],[`matRipple`,``,`routerLinkActive`,`bg-secondary-focus!`,`ariaCurrentWhenActive`,`page`,`aria-label`,`Alerts`,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`relative`,`flex`,`w-full`,`items-center`,`space-x-4`,`p-2`,3,`routerLink`,`matTooltip`],[1,`ml-0!`,`text-3xl`],[1,`truncate`],[`matRipple`,``,`routerLinkActive`,`bg-secondary-focus!`,`ariaCurrentWhenActive`,`page`,`aria-label`,`Remote support`,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`relative`,`flex`,`w-full`,`items-center`,`space-x-4`,`p-2`,3,`routerLink`,`matTooltip`],[`matRipple`,``,`routerLinkActive`,`bg-secondary-focus!`,`ariaCurrentWhenActive`,`page`,`aria-label`,`Analytics`,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`relative`,`flex`,`w-full`,`items-center`,`space-x-4`,`p-2`,3,`routerLink`,`matTooltip`],[`matRipple`,``,`routerLinkActive`,`bg-secondary-focus!`,`ariaCurrentWhenActive`,`page`,`aria-label`,`Manage dashboards`,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`relative`,`flex`,`w-full`,`items-center`,`space-x-4`,`p-2`,3,`routerLink`,`matTooltip`],[`matRipple`,``,`routerLinkActive`,`bg-secondary-focus`,`ariaCurrentWhenActive`,`page`,`aria-label`,`Recorder streams`,`matTooltipPosition`,`right`,1,`relative`,`flex`,`w-full`,`items-center`,`space-x-4`,`p-2`,3,`routerLink`,`matTooltip`],[1,`flex`,`flex-col`,`gap-2`,`py-4`],[`matRipple`,``,`type`,`button`,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`relative`,`flex`,`w-full`,`items-center`,`justify-center`,`gap-2`,`rounded-sm`,`p-2`,3,`matTooltip`],[`matRipple`,``,`type`,`button`,`aria-label`,`Notification settings`,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`relative`,`flex`,`w-full`,`items-center`,`justify-center`,`gap-2`,`rounded-sm`,`p-2`,3,`click`,`matTooltip`],[1,`text-2xl`],[1,`flex-1`,`truncate`,`text-left`,`text-sm`],[1,`bg-success`,`text-success-content`,`ml-auto`,`rounded-full`,`px-2`,`py-0.5`,`text-xs`],[`btn`,``,`matRipple`,``,`matTooltipPosition`,`right`,`aria-label`,`Launch PlaceOS Backoffice in a new tab`,`target`,`_blank`,`rel`,`noopener noreferrer`,1,`inverse`,3,`matTooltip`,`href`],[1,`truncate`,`text-sm`],[1,`text-base-100`,`text-3xl`],[1,`stagehand-muted`,`text-center`,`text-xs`],[1,`space-y-2`,`p-2`],[`for`,`sidebar-region`,1,`block`,`px-1`,`text-xs`,`font-medium`,`tracking-wide`,`uppercase`],[`appearance`,`outline`,1,`no-subscript`,`white-faded`,`w-full`],[`id`,`sidebar-region`,`aria-label`,`Region`,3,`ngModelChange`,`ngModel`],[`value`,``,3,`click`],[3,`value`],[3,`click`,`value`],[`for`,`sidebar-building`,1,`block`,`px-1`,`text-xs`,`font-medium`,`tracking-wide`,`uppercase`],[`id`,`sidebar-building`,`aria-label`,`Building`,3,`ngModelChange`,`ngModel`],[1,`bg-base-100`,`absolute`,`inset-0`,`opacity-0`,`hover:opacity-10`],[1,`ml-0!`,`text-2xl`],[`matRipple`,``,`type`,`button`,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`relative`,`flex`,`w-full`,`items-center`,`justify-center`,`gap-2`,`rounded-sm`,`p-2`,3,`click`,`matTooltip`],[1,`ml-auto`,`rounded-full`,`px-2`,`py-0.5`,`text-xs`]],template:function(c,t){c&1&&(Ms(0,`nav`,0)(1,`div`,1)(2,`div`,2)(3,`div`,3)(4,`div`,4),Jb(5,` Stagehand `),Ll(),Ms(6,`div`,5),Jb(7,` by PlaceOS `),Ll()()(),Ms(8,`button`,6),Em(`click`,function(){return t.toggleCompact()}),Ms(9,`icon`,7),Jb(10),Ll()()(),ab(11,ft,3,3),Ms(12,`div`,8)(13,`a`,9)(14,`icon`,10),Jb(15,`notifications`),Ll(),ab(16,vt,2,0,`span`,11),Ll(),Ms(17,`a`,12)(18,`icon`,10),Jb(19,`wifi`),Ll(),ab(20,wt,2,0,`span`,11),Ll(),ab(21,yt,4,4,`a`,13),Ms(22,`a`,14)(23,`icon`,10),Jb(24,`dashboard`),Ll(),ab(25,xt,2,0,`span`,11),Ll(),ab(26,Ct,5,4,`a`,15),Ll(),Ms(27,`div`,16),ab(28,Tt,4,4,`button`,17),Ms(29,`button`,18),Em(`click`,function(){return t.openNotificationSettings()}),Ms(30,`icon`,19),Jb(31),Ll(),ab(32,Et,2,0,`span`,20),ab(33,Mt,2,0,`span`,21),Ll(),Ms(34,`a`,22),ab(35,It,2,0,`span`,23),ab(36,Lt,2,0,`icon`,24),Ll(),ab(37,Pt,2,0,`p`,25),Ll()()),c&2&&(Nm(`width`,t.is_compact()?`3.5rem`:`16rem`),VI(2),Nm(`width`,t.is_compact()?`0rem`:`13rem`),VI(6),xm(`w-14`,t.is_compact()),pm(`matTooltip`,t.is_compact()?`Expand Sidebar`:`Collapse Sidebar`),fm(`aria-label`,t.is_compact()?`Expand sidebar`:`Collapse sidebar`),VI(2),Lm(t.is_compact()?`menu`:`close`),VI(),cb(t.is_compact()?-1:11),VI(2),pm(`routerLink`,dT(41,st))(`matTooltip`,t.is_compact()?`Alerts`:``),VI(3),cb(t.is_compact()?-1:16),VI(),pm(`routerLink`,dT(42,rt))(`matTooltip`,t.is_compact()?`Remote Support`:``),VI(3),cb(t.is_compact()?-1:20),VI(),cb(t.analytics_pages()?.length>0?21:-1),VI(),pm(`routerLink`,dT(43,dt))(`matTooltip`,t.is_compact()?`Manage Dashboards`:``),VI(3),cb(t.is_compact()?-1:25),VI(),cb(t.show_recorder_view()?26:-1),VI(),xm(`px-4`,!t.is_compact())(`px-0`,t.is_compact()),VI(),cb(t.can_change_dark_mode()?28:-1),VI(),pm(`matTooltip`,t.is_compact()?`Notification Settings`:``),VI(2),Lm(t.notifications_active()?`notifications_active`:`notifications_off`),VI(),cb(t.is_compact()?-1:32),VI(),cb(t.notifications_active()&&!t.is_compact()?33:-1),VI(),xm(`min-w-0`,t.is_compact())(`base`,!t.is_compact())(`clear`,t.is_compact()),pm(`matTooltip`,t.is_compact()?`Launch PlaceOS Backoffice`:``)(`href`,t.backoffice_link(),Qh),VI(),cb(t.is_compact()?-1:35),VI(),cb(t.is_compact()?36:-1),VI(),cb(t.is_compact()?-1:37))},dependencies:[Mt$1,yt$1,Yt$1,mt$1,O,ss,kt$1,ts,Br,Mn,zt,Bt$1,lt$1,dr,ir,Gn,f],styles:[`[sidebar][_ngcontent-%COMP%], [header][_ngcontent-%COMP%]{transition:width .2s}`]})}}return i})();export{ki as t};