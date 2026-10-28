import{Bn as hb,Cr as pm,Ct as Qt,Dr as py,En as f_,Fn as gm,Ft as Tb,G as Kh,Gr as ub,Hn as hm,I as Hm,Ir as sT,It as Tm,Kt as Wf,Nn as gC,O as Fn,Ot as Sb,Pr as rp,Q as Mb,Qr as wT,Rt as UI,S as Dt$1,St as Qr,Tn as fT,Tt as Ri,Ur as ty,Vr as tT,Wt as Vm,a as Ab,ai as xm,br as pT,cn as aT,cr as mv,di as zf,dt as Ob,fi as zs,fn as bT,gn as cT,gt as Pm,ht as Pl,ii as xb,j as Gb,m as C,n as $m,o as Am,oi as xs,rr as lb,rt as Mw,sn as _w,tt as Ms,w as Eb,x as Dm,xr as pb,y as D,yn as d_,z as Im,zr as st$1,zt as Ul}from"./chunk-Cz0q0ipF.js";import{f as ts,s as kt$1,u as ss}from"./chunk-By9YFpYz.js";import{A as H$1,D as H$2,E as f,I as We,M as Q,f as In,g as T,it as De,l as An,st as be,t as H,x as ee,y as Zt}from"./main.js";import{b as Ye$1,c as A,r as Rt$1,s as yt$1,t as Mt$1,y as Y}from"./chunk-CUzzbHy3.js";import{n as mt$1,t as Yt}from"./chunk-DSgj6oVT.js";import{c as X,s as Ue}from"./chunk-DIOnlQ6x.js";import{a as qe,t as Kt}from"./chunk-Ce9Gest3.js";import{r as zt$1,t as Bt}from"./chunk-C69n8GDr.js";import{i as gu,l as ee$1,n as Ip,o as Bt$1,s as Ht}from"./chunk-BkrYRyNj.js";var Je=[`switch`];var Ke=[`*`];function et(i,s){i&1&&(Ms(0,`span`,11),rp(),Ms(1,`svg`,13),gm(2,`path`,14),Pl(),Ms(3,`svg`,15),gm(4,`path`,16),Pl()())}var tt=new C(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var F=class{source;checked;constructor(s,e){this.source=s,this.checked=e}};var Z=(()=>{class i{_elementRef=D(Fn);_focusMonitor=D(Ye$1);_changeDetectorRef=D(py);defaults=D(tt);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new F(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=De();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new Dt$1;toggleChange=new Dt$1;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){D(A).load(Rt$1);let e=D(new ty(`tabindex`),{optional:!0}),l=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=l.color||`accent`,this.id=this._uniqueId=D(Y).getId(`mat-mdc-slide-toggle-`),this.hideIcon=l.hideIcon??!1,this.disabledInteractive=l.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new F(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(l){return new(l||i)};static ɵcmp=gC({type:i,selectors:[[`mat-slide-toggle`]],viewQuery:function(l,t){if(l&1&&Tm(Je,5),l&2){let p;xb(p=Ab())&&(t._switchElement=p.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(l,t){l&2&&(Dm(`id`,t.id),pm(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),Gb(t.color?`mat-`+t.color:``),Am(`mat-mdc-slide-toggle-focused`,t._focused)(`mat-mdc-slide-toggle-checked`,t.checked)(`mat-slide-toggle-full-width`,t.fullWidth)(`_mat-animation-noopable`,t._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,d_],color:`color`,disabled:[2,`disabled`,`disabled`,d_],fullWidth:[2,`fullWidth`,`fullWidth`,d_],disableRipple:[2,`disableRipple`,`disableRipple`,d_],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:f_(e)],checked:[2,`checked`,`checked`,d_],hideIcon:[2,`hideIcon`,`hideIcon`,d_],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,d_]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[fT([{provide:T,useExisting:Ri(()=>i),multi:!0},{provide:ee,useExisting:i,multi:!0}]),xs],ngContentSelectors:Ke,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(l,t){if(l&1&&(Sb(),Ms(0,`div`,1)(1,`button`,2,0),Im(`click`,function(){return t._handleClick()}),gm(3,`div`,3)(4,`span`,4),Ms(5,`span`,5)(6,`span`,6)(7,`span`,7),gm(8,`span`,8),Pl(),Ms(9,`span`,9),gm(10,`span`,10),Pl(),ub(11,et,5,0,`span`,11),Pl()()(),Ms(12,`label`,12),Im(`click`,function(O){return O.stopPropagation()}),Mb(13),Pl()()),l&2){let p=Ob(2);hm(`labelPosition`,t.labelPosition),UI(),Am(`mdc-switch--selected`,t.checked)(`mdc-switch--unselected`,!t.checked)(`mdc-switch--checked`,t.checked)(`mdc-switch--disabled`,t.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,t.disabledInteractive),hm(`tabIndex`,t.disabled&&!t.disabledInteractive?-1:t.tabIndex)(`disabled`,t.disabled&&!t.disabledInteractive),pm(`id`,t.buttonId)(`name`,t.name)(`aria-label`,t.ariaLabel)(`aria-labelledby`,t._getAriaLabelledBy())(`aria-describedby`,t.ariaDescribedby)(`aria-required`,t.required||null)(`aria-checked`,t.checked)(`aria-disabled`,t.disabled&&t.disabledInteractive?`true`:null),UI(9),hm(`matRippleTrigger`,p)(`matRippleDisabled`,t.disableRipple||t.disabled)(`matRippleCentered`,!0),UI(),lb(t.hideIcon?-1:11),UI(),hm(`for`,t.buttonId),pm(`id`,t._labelId)}},dependencies:[yt$1,Ue],styles:[`.mdc-switch {
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
`],encapsulation:2})}return i})();var Qe=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵmod=zs({type:i});static ɵinj=Qr({imports:[Z,be]})}return i})();var at=(i,s)=>s.key;function ot(i,s){i&1&&(Ms(0,`div`,5)(1,`icon`),tT(2,`warning`),Pl(),Ms(3,`span`,10),tT(4,`Push notifications are not supported in this browser`),Pl()())}function lt(i,s){i&1&&(Ms(0,`div`,6)(1,`icon`),tT(2,`block`),Pl(),Ms(3,`span`,10),tT(4,`Notifications have been blocked. Please enable them in your browser settings.`),Pl()())}function rt(i,s){if(i&1){let e=Eb();Ms(0,`div`,7)(1,`icon`,11),tT(2,`notifications_off`),Pl(),Ms(3,`p`,12),tT(4,` Enable push notifications to receive alerts even when the app is in the background. `),Pl(),Ms(5,`button`,13),Im(`click`,function(){zf(e);return Wf(Tb().requestPermission())}),Ms(6,`icon`,14),tT(7,`notifications_active`),Pl(),tT(8,` Enable Notifications `),Pl()()}}function st(i,s){if(i&1){let e=Eb();Ms(0,`div`,17)(1,`div`,22)(2,`icon`),tT(3),Pl(),Ms(4,`div`)(5,`div`,23),tT(6),Pl(),Ms(7,`div`,21),tT(8),Pl()()(),Ms(9,`mat-slide-toggle`,24),Im(`change`,function(t){let p=zf(e).$implicit;return Wf(Tb(2).toggleSeverity(p.key,t.checked))}),Pl()()}if(i&2){let e=s.$implicit,l=Tb(2);UI(2),Gb(`text-3xl `+e.color_class),UI(),Pm(e.icon),UI(3),Ul(` `,e.label,` `),UI(2),Ul(` `,e.description,` `),UI(),hm(`checked`,l.push.config()[e.key]),pm(`aria-label`,`Toggle `+e.label+` notifications`)}}function ct(i,s){if(i&1&&(Ms(0,`p`,15),tT(1,` Choose which alert severity levels should trigger push notifications. `),Pl(),Ms(2,`div`,16),pb(3,st,10,7,`div`,17,at),Pl(),Ms(5,`div`,18)(6,`div`,19)(7,`icon`,20),tT(8,`info`),Pl(),Ms(9,`span`,21),tT(10,`Notifications will be sent when new alerts matching these severities are detected.`),Pl()()()),i&2){let e=Tb();UI(3),hb(e.severity_options)}}var Ze=(()=>{class i{constructor(){this.push=D(gu),this.severity_options=[{key:`critical`,label:`Critical`,description:`Immediate attention required`,icon:`dangerous`,color_class:`text-error`},{key:`high`,label:`High`,description:`Important issues that may need attention`,icon:`warning`,color_class:`text-warning`},{key:`medium`,label:`Medium`,description:`Informational alerts`,icon:`error`,color_class:`text-info`},{key:`low`,label:`Low`,description:`Low priority notifications`,icon:`info`,color_class:`text-base-400`}]}async requestPermission(){await this.push.requestPermission()}toggleSeverity(e,l){this.push.setSeverityEnabled(e,l)}static{this.ɵfac=function(l){return new(l||i)}}static{this.ɵcmp=gC({type:i,selectors:[[`placeos-push-notification-settings`]],decls:15,vars:1,consts:[[1,`w-md`,`max-w-full`],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`mx-2`,`mt-2`,`h-14`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`type`,`button`,`matRipple`,``,`aria-label`,`Close notification settings`,`mat-dialog-close`,``,1,`rounded-sm`],[1,`p-4`],[1,`bg-warning-light`,`text-warning`,`flex`,`items-center`,`space-x-2`,`rounded-sm`,`p-3`],[1,`bg-error-light`,`text-error`,`flex`,`items-center`,`space-x-2`,`rounded-sm`,`p-3`],[1,`flex`,`flex-col`,`items-center`,`space-y-4`,`py-4`],[1,`border-base-300`,`flex`,`justify-end`,`border-t`,`p-2`],[`btn`,``,`matRipple`,``,`mat-dialog-close`,``,1,`inverse`,`w-40`],[1,`text-sm`],[1,`text-base-400`,`text-6xl`],[1,`stagehand-subtle`,`text-center`,`text-sm`],[`btn`,``,`matRipple`,``,1,`w-full`,3,`click`],[1,`mr-2`],[1,`stagehand-subtle`,`mb-4`,`text-sm`],[1,`space-y-3`],[1,`border-base-300`,`flex`,`items-center`,`justify-between`,`rounded-sm`,`border`,`p-3`],[1,`bg-info-light`,`mt-4`,`rounded-sm`,`p-3`],[1,`flex`,`items-center`,`space-x-2`],[1,`text-info`,`text-2xl`],[1,`stagehand-subtle`,`text-xs`],[1,`flex`,`items-center`,`space-x-3`],[1,`font-medium`],[3,`change`,`checked`]],template:function(l,t){l&1&&(Ms(0,`div`,0)(1,`header`,1)(2,`h2`,2),tT(3,`Push Notifications`),Pl(),Ms(4,`button`,3)(5,`icon`),tT(6,`close`),Pl()()(),Ms(7,`main`,4),ub(8,ot,5,0,`div`,5)(9,lt,5,0,`div`,6)(10,rt,9,0,`div`,7)(11,ct,11,0),Pl(),Ms(12,`footer`,8)(13,`button`,9),tT(14,` Close `),Pl()()()),l&2&&(UI(8),lb(t.push.supported()?t.push.permission()===`denied`?9:t.push.enabled()?11:10:8))},dependencies:[Ht,Bt$1,Mt$1,yt$1,Qe,Z,H,In],encapsulation:2})}}return i})();var dt=()=>[`/alerts`];var mt=()=>[`/remote-support`];var pt=()=>[`/dashboards`];var ht=()=>[`/analytics`];var gt=()=>[`/recorder-grid`];var Ye=(i,s)=>s.id;function _t(i,s){if(i&1&&(Ms(0,`div`,28)(1,`div`,29),tT(2,` Support group `),Pl(),Ms(3,`div`,24),tT(4),Pl()(),Ms(5,`icon`,30),tT(6,`unfold_more`),Pl()),i&2){let e=Tb(2);UI(4),Ul(` `,e.group_label(),` `)}}function ut(i,s){if(i&1){let e=Eb();Ms(0,`div`,8)(1,`button`,27),Im(`click`,function(){zf(e);return Wf(Tb().selectGroup())}),Ms(2,`icon`,20),tT(3),Pl(),ub(4,_t,7,1),Pl()()}if(i&2){let e=Tb();UI(),Am(`justify-center`,e.is_compact()),hm(`matTooltip`,e.is_compact()?e.group_label():``),pm(`aria-label`,`Support group: `+e.group_label()),UI(2),Pm(e.selected_group()?`group`:`public`),UI(),lb(e.is_compact()?-1:4)}}function bt(i,s){if(i&1){let e=Eb();Ms(0,`mat-option`,37),Im(`click`,function(){let t=zf(e).$implicit;return Wf(Tb(4).setRegion(t))}),tT(1),Pl()}if(i&2){let e=s.$implicit;hm(`value`,e.id),UI(),Pm(e.display_name||e.name)}}function ft(i,s){if(i&1){let e=Eb();Ms(0,`label`,32),tT(1,` Region `),Pl(),Ms(2,`mat-form-field`,33)(3,`mat-select`,34),Hm(`ngModelChange`,function(t){zf(e);let p=Tb(3);return sT(p.region,t)||(p.region=t),Wf(t)}),Ms(4,`mat-option`,35),Im(`click`,function(){zf(e);return Wf(Tb(3).setRegion(null))}),tT(5),wT(6,`translate`),Pl(),pb(7,bt,2,2,`mat-option`,36,Ye),Pl(),_w(),Pl()}if(i&2){Tb(2);let e=cT(0),l=Tb();UI(3),Vm(`ngModel`,l.region),Mw(),UI(2),Pm(bT(6,2,`COMMON.REGION_ALL`)),UI(2),hb(e)}}function vt(i,s){if(i&1){let e=Eb();Ms(0,`mat-option`,37),Im(`click`,function(){let t=zf(e).$implicit;return Wf(Tb(4).setBuilding(t))}),tT(1),Pl()}if(i&2){let e=s.$implicit;hm(`value`,e.id),UI(),Pm(e.display_name||e.name)}}function wt(i,s){if(i&1){let e=Eb();Ms(0,`label`,38),tT(1,` Building `),Pl(),Ms(2,`mat-form-field`,33)(3,`mat-select`,39),Hm(`ngModelChange`,function(t){zf(e);let p=Tb(3);return sT(p.building,t)||(p.building=t),Wf(t)}),Ms(4,`mat-option`,35),Im(`click`,function(){zf(e);return Wf(Tb(3).setBuilding(null))}),tT(5),wT(6,`translate`),Pl(),pb(7,vt,2,2,`mat-option`,36,Ye),Pl(),_w(),Pl()}if(i&2){Tb(2);let e=cT(1),l=Tb();UI(3),Vm(`ngModel`,l.building),Mw(),UI(2),Pm(bT(6,2,`COMMON.BUILDING_ALL`)),UI(2),hb(e)}}function St(i,s){if(i&1&&(Ms(0,`div`,31),ub(1,ft,9,4),ub(2,wt,9,4),Pl()),i&2){Tb();let e=cT(0),l=cT(1),t=Tb();UI(),lb(e.length>0?1:-1),UI(),lb(l.length>0&&t.region()?2:-1)}}function xt(i,s){if(i&1&&($m(0)(1),ub(2,St,3,2,`div`,31)),i&2){let e=Tb(),l=aT(e.region_list());UI();let t=aT(e.building_list());UI(),lb(l.length||t.length?2:-1)}}function yt(i,s){i&1&&(Ms(0,`span`,12),tT(1,`Alerts`),Pl())}function kt(i,s){i&1&&(Ms(0,`span`,12),tT(1,`Remote Support`),Pl())}function Ct(i,s){i&1&&(Ms(0,`span`,12),tT(1,`Analytics`),Pl())}function Nt(i,s){if(i&1&&(Ms(0,`a`,14)(1,`icon`,11),tT(2,`show_chart`),Pl(),ub(3,Ct,2,0,`span`,12),Pl()),i&2){let e=Tb();hm(`routerLink`,pT(3,ht))(`matTooltip`,e.is_compact()?`Analytics`:``),UI(3),lb(e.is_compact()?-1:3)}}function Tt(i,s){i&1&&(Ms(0,`span`,12),tT(1,`Manage Dashboards`),Pl())}function Et(i,s){i&1&&(Ms(0,`span`,12),tT(1,`Recorder Streams`),Pl())}function Mt(i,s){if(i&1&&(Ms(0,`a`,16),gm(1,`div`,40),Ms(2,`icon`,41),tT(3,`stream`),Pl(),ub(4,Et,2,0,`span`,12),Pl()),i&2){let e=Tb();hm(`routerLink`,pT(3,gt))(`matTooltip`,e.is_compact()?`Recorder Streams`:``),UI(4),lb(e.is_compact()?-1:4)}}function It(i,s){if(i&1&&(Ms(0,`span`,21),tT(1,`Dark Mode`),Pl(),Ms(2,`span`,43),tT(3),Pl()),i&2){let e=Tb(2);UI(2),Am(`bg-success`,e.dark_mode())(`text-success-content`,e.dark_mode())(`bg-base-100`,!e.dark_mode())(`text-base-content`,!e.dark_mode()),UI(),Ul(` `,e.dark_mode()?`ON`:`OFF`,` `)}}function Lt(i,s){if(i&1){let e=Eb();Ms(0,`button`,42),Im(`click`,function(){zf(e);return Wf(Tb().toggleDarkMode())}),Ms(1,`icon`,20),tT(2),Pl(),ub(3,It,4,9),Pl()}if(i&2){let e=Tb();hm(`matTooltip`,e.is_compact()?e.dark_mode()?`Switch to Light Mode`:`Switch to Dark Mode`:``),pm(`aria-label`,e.dark_mode()?`Switch to light mode`:`Switch to dark mode`),UI(2),Pm(e.dark_mode()?`dark_mode`:`light_mode`),UI(),lb(e.is_compact()?-1:3)}}function Pt(i,s){i&1&&(Ms(0,`span`,21),tT(1,`Notifications`),Pl())}function Rt(i,s){i&1&&(Ms(0,`span`,22),tT(1,`ON`),Pl())}function Dt(i,s){i&1&&(Ms(0,`span`,24),tT(1,` Launch PlaceOS Backoffice `),Pl())}function zt(i,s){i&1&&(Ms(0,`icon`,25),tT(1,`open_in_new`),Pl())}function At(i,s){i&1&&(Ms(0,`p`,26),tT(1,` Access system configuration and management `),Pl())}var Vt=st$1(!1);var Ii=(()=>{class i{constructor(){this._dash=D(Ip),this._org=D(We),this._dialog=D(ee$1),this._settings=D(H$1),this._groups=D(H$2),this.push=D(gu),this.is_compact=Vt,this._allow_dark_mode=this._settings.signal(`allow_dark_mode`,!1),this._theme=this._settings.theme_signal,this.notifications_active=Qt(()=>{if(!this.push.enabled())return!1;let e=this.push.config();return e.critical||e.high||e.medium||e.low}),this.dark_mode=Qt(()=>this._theme()===`dark`),this.can_change_dark_mode=Qt(()=>!!this._allow_dark_mode()),this.backoffice_link=Q(`backoffice_link`,`${location.origin}/backoffice/`),this.show_recorder_view=Q(`show_recorder_view`,!1),this.analytics_pages=Q(`analytics_pages`,[]),this.region=this._dash.region_id,this.building=this._dash.building_id,this.selected_group=this._groups.selected_group,this.group_label=Qt(()=>this.selected_group()?.group.name||`All groups`),this.show_group_selector=Qt(()=>this._groups.can_view_all()||this._groups.groups().length>0),this.region_list=Qt(()=>{let e=this._groups.scope(),l=this._org.region_list();return e?l.filter(t=>e.zones.has(t.id)):l}),this.building_list=Qt(()=>{let e=this._groups.scope(),l=this._org.active_buildings();return e?l.filter(t=>e.zones.has(t.id)):l}),this.setRegion=e=>{this._org.region=e,this.building.set(``),this._dash.listenForDashboardAlerts(!0)},this.setBuilding=e=>{this._org.building=e,this._dash.listenForDashboardAlerts(!0)}}async selectGroup(){let{GroupSelectModalComponent:e}=await import(`./chunk-DlSS5Y3G2.js`),t=await mv(this._dialog.open(e,{data:{groups:this._groups.groups(),selected_group_id:this._groups.group_id(),show_all_groups:this._groups.can_view_all()}}).afterClosed(),{defaultValue:void 0});t!==void 0&&this._groups.setSelectedGroup(t)}toggleCompact(){this.is_compact.update(e=>!e)}toggleDarkMode(){this._settings.setTheme(this.dark_mode()?`light`:`dark`)}openNotificationSettings(){this._dialog.open(Ze)}static{this.ɵfac=function(l){return new(l||i)}}static{this.ɵcmp=gC({type:i,selectors:[[`sidebar`]],decls:39,vars:45,consts:[[`sidebar`,``,`aria-label`,`Primary`,1,`bg-secondary`,`text-secondary-content`,`flex`,`h-full`,`flex-col`],[1,`flex`,`items-center`,`px-1`],[`header`,``,1,`overflow-hidden`],[1,`px-2`,`py-4`],[1,`truncate`,`text-2xl`,`font-medium`],[1,`stagehand-muted`,`truncate`,`text-xs`],[`icon`,``,`type`,`button`,`matRipple`,``,`matTooltipPosition`,`right`,1,`rounded-sm`,3,`click`,`matTooltip`],[1,`text-3xl`],[1,`px-2`,`pt-1`],[1,`mt-2`,`flex-1`,`space-y-1`,`overflow-auto`],[`matRipple`,``,`routerLinkActive`,`bg-secondary-focus!`,`ariaCurrentWhenActive`,`page`,`aria-label`,`Alerts`,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`relative`,`flex`,`w-full`,`items-center`,`space-x-4`,`p-2`,3,`routerLink`,`matTooltip`],[1,`ml-0!`,`text-3xl`],[1,`truncate`],[`matRipple`,``,`routerLinkActive`,`bg-secondary-focus!`,`ariaCurrentWhenActive`,`page`,`aria-label`,`Remote support`,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`relative`,`flex`,`w-full`,`items-center`,`space-x-4`,`p-2`,3,`routerLink`,`matTooltip`],[`matRipple`,``,`routerLinkActive`,`bg-secondary-focus!`,`ariaCurrentWhenActive`,`page`,`aria-label`,`Analytics`,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`relative`,`flex`,`w-full`,`items-center`,`space-x-4`,`p-2`,3,`routerLink`,`matTooltip`],[`matRipple`,``,`routerLinkActive`,`bg-secondary-focus!`,`ariaCurrentWhenActive`,`page`,`aria-label`,`Manage dashboards`,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`relative`,`flex`,`w-full`,`items-center`,`space-x-4`,`p-2`,3,`routerLink`,`matTooltip`],[`matRipple`,``,`routerLinkActive`,`bg-secondary-focus`,`ariaCurrentWhenActive`,`page`,`aria-label`,`Recorder streams`,`matTooltipPosition`,`right`,1,`relative`,`flex`,`w-full`,`items-center`,`space-x-4`,`p-2`,3,`routerLink`,`matTooltip`],[1,`flex`,`flex-col`,`gap-2`,`py-4`],[`matRipple`,``,`type`,`button`,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`relative`,`flex`,`w-full`,`items-center`,`justify-center`,`gap-2`,`rounded-sm`,`p-2`,3,`matTooltip`],[`matRipple`,``,`type`,`button`,`aria-label`,`Notification settings`,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`relative`,`flex`,`w-full`,`items-center`,`justify-center`,`gap-2`,`rounded-sm`,`p-2`,3,`click`,`matTooltip`],[1,`text-2xl`],[1,`flex-1`,`truncate`,`text-left`,`text-sm`],[1,`bg-success`,`text-success-content`,`ml-auto`,`rounded-full`,`px-2`,`py-0.5`,`text-xs`],[`btn`,``,`matRipple`,``,`matTooltipPosition`,`right`,`aria-label`,`Launch PlaceOS Backoffice in a new tab`,`target`,`_blank`,`rel`,`noopener noreferrer`,1,`inverse`,3,`matTooltip`,`href`],[1,`truncate`,`text-sm`],[1,`text-base-100`,`text-3xl`],[1,`stagehand-muted`,`text-center`,`text-xs`],[`matRipple`,``,`type`,`button`,`group-selector`,``,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`border-base-100/20`,`flex`,`w-full`,`items-center`,`gap-2`,`rounded-sm`,`border`,`p-2`,`text-left`,3,`click`,`matTooltip`],[1,`min-w-0`,`flex-1`],[1,`stagehand-muted`,`text-xs`,`font-medium`,`tracking-wide`,`uppercase`],[1,`text-xl`],[1,`space-y-2`,`p-2`],[`for`,`sidebar-region`,1,`block`,`px-1`,`text-xs`,`font-medium`,`tracking-wide`,`uppercase`],[`appearance`,`outline`,1,`no-subscript`,`white-faded`,`w-full`],[`id`,`sidebar-region`,`aria-label`,`Region`,3,`ngModelChange`,`ngModel`],[`value`,``,3,`click`],[3,`value`],[3,`click`,`value`],[`for`,`sidebar-building`,1,`block`,`px-1`,`text-xs`,`font-medium`,`tracking-wide`,`uppercase`],[`id`,`sidebar-building`,`aria-label`,`Building`,3,`ngModelChange`,`ngModel`],[1,`bg-base-100`,`absolute`,`inset-0`,`opacity-0`,`hover:opacity-10`],[1,`ml-0!`,`text-2xl`],[`matRipple`,``,`type`,`button`,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`relative`,`flex`,`w-full`,`items-center`,`justify-center`,`gap-2`,`rounded-sm`,`p-2`,3,`click`,`matTooltip`],[1,`ml-auto`,`rounded-full`,`px-2`,`py-0.5`,`text-xs`]],template:function(l,t){l&1&&(Ms(0,`nav`,0)(1,`div`,1)(2,`div`,2)(3,`div`,3)(4,`div`,4),tT(5,` Stagehand `),Pl(),Ms(6,`div`,5),tT(7,` by PlaceOS `),Pl()()(),Ms(8,`button`,6),Im(`click`,function(){return t.toggleCompact()}),Ms(9,`icon`,7),tT(10),Pl()()(),ub(11,ut,5,6,`div`,8),ub(12,xt,3,3),Ms(13,`div`,9)(14,`a`,10)(15,`icon`,11),tT(16,`notifications`),Pl(),ub(17,yt,2,0,`span`,12),Pl(),Ms(18,`a`,13)(19,`icon`,11),tT(20,`wifi`),Pl(),ub(21,kt,2,0,`span`,12),Pl(),ub(22,Nt,4,4,`a`,14),Ms(23,`a`,15)(24,`icon`,11),tT(25,`dashboard`),Pl(),ub(26,Tt,2,0,`span`,12),Pl(),ub(27,Mt,5,4,`a`,16),Pl(),Ms(28,`div`,17),ub(29,Lt,4,4,`button`,18),Ms(30,`button`,19),Im(`click`,function(){return t.openNotificationSettings()}),Ms(31,`icon`,20),tT(32),Pl(),ub(33,Pt,2,0,`span`,21),ub(34,Rt,2,0,`span`,22),Pl(),Ms(35,`a`,23),ub(36,Dt,2,0,`span`,24),ub(37,zt,2,0,`icon`,25),Pl(),ub(38,At,2,0,`p`,26),Pl()()),l&2&&(xm(`width`,t.is_compact()?`3.5rem`:`16rem`),UI(2),xm(`width`,t.is_compact()?`0rem`:`13rem`),UI(6),Am(`w-14`,t.is_compact()),hm(`matTooltip`,t.is_compact()?`Expand Sidebar`:`Collapse Sidebar`),pm(`aria-label`,t.is_compact()?`Expand sidebar`:`Collapse sidebar`),UI(2),Pm(t.is_compact()?`menu`:`close`),UI(),lb(t.show_group_selector()?11:-1),UI(),lb(t.is_compact()?-1:12),UI(2),hm(`routerLink`,pT(42,dt))(`matTooltip`,t.is_compact()?`Alerts`:``),UI(3),lb(t.is_compact()?-1:17),UI(),hm(`routerLink`,pT(43,mt))(`matTooltip`,t.is_compact()?`Remote Support`:``),UI(3),lb(t.is_compact()?-1:21),UI(),lb(t.analytics_pages()?.length>0?22:-1),UI(),hm(`routerLink`,pT(44,pt))(`matTooltip`,t.is_compact()?`Manage Dashboards`:``),UI(3),lb(t.is_compact()?-1:26),UI(),lb(t.show_recorder_view()?27:-1),UI(),Am(`px-4`,!t.is_compact())(`px-0`,t.is_compact()),UI(),lb(t.can_change_dark_mode()?29:-1),UI(),hm(`matTooltip`,t.is_compact()?`Notification Settings`:``),UI(2),Pm(t.notifications_active()?`notifications_active`:`notifications_off`),UI(),lb(t.is_compact()?-1:33),UI(),lb(t.notifications_active()&&!t.is_compact()?34:-1),UI(),Am(`min-w-0`,t.is_compact())(`base`,!t.is_compact())(`clear`,t.is_compact()),hm(`matTooltip`,t.is_compact()?`Launch PlaceOS Backoffice`:``)(`href`,t.backoffice_link(),Kh),UI(),lb(t.is_compact()?-1:36),UI(),lb(t.is_compact()?37:-1),UI(),lb(t.is_compact()?-1:38))},dependencies:[Mt$1,yt$1,Yt,mt$1,H,ss,kt$1,ts,Kt,qe,zt$1,Bt,X,In,An,Zt,f],styles:[`[sidebar][_ngcontent-%COMP%], [header][_ngcontent-%COMP%]{transition:width .2s}
/*# sourceMappingURL=sidebar.component.css.map */`]})}}return i})();export{Ii as t};
;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="df1a5269-7e12-592e-a80b-bdc6e2d1aea2")}catch(e){}}();
//# debugId=df1a5269-7e12-592e-a80b-bdc6e2d1aea2
//# sourceMappingURL=chunk-BFHW8epO.js.map