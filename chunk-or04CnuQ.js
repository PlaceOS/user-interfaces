import{At as Rm,Br as sb,C as Dt$1,Cn as cv,D as Em,Dr as qh,E as Eb,Et as Qt,G as Iw,Hn as ib,I as Gf,J as Jb,Jt as Xb,Kn as jm,Kr as um,Ln as hT,Lt as Tb,M as Fn,Mn as fb,Nr as r_,Qn as lC,Rt as Tm,Sn as cm,Tr as qb,Tt as Qr,Ur as tb,Vn as iT,Vr as st$1,Xr as wb,_ as Cw,b as Db,di as zs,dn as _m,f as C,fr as np,hr as o_,ir as mT,j as Fm,kn as eT,li as zf,lt as Ms,nt as Ll,o as Ai,oi as yb,or as mm,p as Cb,pr as oT,ri as xs,rt as Lm,tr as lm,tt as Lb,ur as nb,v as D,wn as cy,wt as Qm,yt as PI,z as Hl,zn as hm}from"./chunk-CkhTnm3U.js";import{_ as Zt,b as ee,f as T,o as In,t as An}from"./chunk-BzwxvZEd.js";import{f as ts,s as kt$1,u as ss}from"./chunk-xLBtG_48.js";import{I as De,c as Ge,f as Q,i as H$1,l as H,r as f,t as O,z as be}from"./main-MDWS47QT.js";import{D as ss$1,O as us,d as T$1,r as Et$1,v as ae,y as as}from"./chunk-Bgrvm3QI.js";import{c as X,s as Ue$1}from"./chunk-BE6vWLus.js";import{i as Mn,t as Br}from"./chunk-p2iMNJXr.js";import{r as zt$1,t as Bt}from"./chunk-N8YoIZOt.js";import{a as Pt$1,n as mu,o as Re,r as xp,s as Rt$1}from"./chunk-CoI1dN8x.js";import{n as mt$1,t as Yt}from"./chunk-mytgHlj5.js";var Je=[`switch`];var Ke=[`*`];function et(i,r){i&1&&(Ms(0,`span`,11),np(),Ms(1,`svg`,13),lm(2,`path`,14),Ll(),Ms(3,`svg`,15),lm(4,`path`,16),Ll()())}var tt=new C(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var V=class{source;checked;constructor(r,e){this.source=r,this.checked=e}};var Z=(()=>{class i{_elementRef=D(Fn);_focusMonitor=D(Et$1);_changeDetectorRef=D(cy);defaults=D(tt);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new V(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=De();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new Dt$1;toggleChange=new Dt$1;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){D(T$1).load(as);let e=D(new Qm(`tabindex`),{optional:!0}),l=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=l.color||`accent`,this.id=this._uniqueId=D(ae).getId(`mat-mdc-slide-toggle-`),this.hideIcon=l.hideIcon??!1,this.disabledInteractive=l.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new V(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(l){return new(l||i)};static ɵcmp=lC({type:i,selectors:[[`mat-slide-toggle`]],viewQuery:function(l,t){if(l&1&&Em(Je,5),l&2){let p;wb(p=Cb())&&(t._switchElement=p.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(l,t){l&2&&(hm(`id`,t.id),cm(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),Lb(t.color?`mat-`+t.color:``),_m(`mat-mdc-slide-toggle-focused`,t._focused)(`mat-mdc-slide-toggle-checked`,t.checked)(`mat-slide-toggle-full-width`,t.fullWidth)(`_mat-animation-noopable`,t._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,r_],color:`color`,disabled:[2,`disabled`,`disabled`,r_],fullWidth:[2,`fullWidth`,`fullWidth`,r_],disableRipple:[2,`disableRipple`,`disableRipple`,r_],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:o_(e)],checked:[2,`checked`,`checked`,r_],hideIcon:[2,`hideIcon`,`hideIcon`,r_],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,r_]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[oT([{provide:T,useExisting:Ai(()=>i),multi:!0},{provide:ee,useExisting:i,multi:!0}]),xs],ngContentSelectors:Ke,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(l,t){if(l&1&&(Db(),Ms(0,`div`,1)(1,`button`,2,0),mm(`click`,function(){return t._handleClick()}),lm(3,`div`,3)(4,`span`,4),Ms(5,`span`,5)(6,`span`,6)(7,`span`,7),lm(8,`span`,8),Ll(),Ms(9,`span`,9),lm(10,`span`,10),Ll(),tb(11,et,5,0,`span`,11),Ll()()(),Ms(12,`label`,12),mm(`click`,function(O){return O.stopPropagation()}),Eb(13),Ll()()),l&2){let p=Tb(2);um(`labelPosition`,t.labelPosition),PI(),_m(`mdc-switch--selected`,t.checked)(`mdc-switch--unselected`,!t.checked)(`mdc-switch--checked`,t.checked)(`mdc-switch--disabled`,t.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,t.disabledInteractive),um(`tabIndex`,t.disabled&&!t.disabledInteractive?-1:t.tabIndex)(`disabled`,t.disabled&&!t.disabledInteractive),cm(`id`,t.buttonId)(`name`,t.name)(`aria-label`,t.ariaLabel)(`aria-labelledby`,t._getAriaLabelledBy())(`aria-describedby`,t.ariaDescribedby)(`aria-required`,t.required||null)(`aria-checked`,t.checked)(`aria-disabled`,t.disabled&&t.disabledInteractive?`true`:null),PI(9),um(`matRippleTrigger`,p)(`matRippleDisabled`,t.disableRipple||t.disabled)(`matRippleCentered`,!0),PI(),nb(t.hideIcon?-1:11),PI(),um(`for`,t.buttonId),cm(`id`,t._labelId)}},dependencies:[ss$1,Ue$1],styles:[`.mdc-switch {
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
`],encapsulation:2})}return i})();var Ue=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵmod=zs({type:i});static ɵinj=Qr({imports:[Z,be]})}return i})();var at=(i,r)=>r.key;function ot(i,r){i&1&&(Ms(0,`div`,5)(1,`icon`),qb(2,`warning`),Ll(),Ms(3,`span`,10),qb(4,`Push notifications are not supported in this browser`),Ll()())}function lt(i,r){i&1&&(Ms(0,`div`,6)(1,`icon`),qb(2,`block`),Ll(),Ms(3,`span`,10),qb(4,`Notifications have been blocked. Please enable them in your browser settings.`),Ll()())}function st(i,r){if(i&1){let e=fb();Ms(0,`div`,7)(1,`icon`,11),qb(2,`notifications_off`),Ll(),Ms(3,`p`,12),qb(4,` Enable push notifications to receive alerts even when the app is in the background. `),Ll(),Ms(5,`button`,13),mm(`click`,function(){Gf(e);return zf(yb().requestPermission())}),Ms(6,`icon`,14),qb(7,`notifications_active`),Ll(),qb(8,` Enable Notifications `),Ll()()}}function rt(i,r){if(i&1){let e=fb();Ms(0,`div`,17)(1,`div`,22)(2,`icon`),qb(3),Ll(),Ms(4,`div`)(5,`div`,23),qb(6),Ll(),Ms(7,`div`,21),qb(8),Ll()()(),Ms(9,`mat-slide-toggle`,24),mm(`change`,function(t){let p=Gf(e).$implicit;return zf(yb(2).toggleSeverity(p.key,t.checked))}),Ll()()}if(i&2){let e=r.$implicit,l=yb(2);PI(2),Lb(`text-3xl `+e.color_class),PI(),Rm(e.icon),PI(3),Hl(` `,e.label,` `),PI(2),Hl(` `,e.description,` `),PI(),um(`checked`,l.push.config()[e.key]),cm(`aria-label`,`Toggle `+e.label+` notifications`)}}function ct(i,r){if(i&1&&(Ms(0,`p`,15),qb(1,` Choose which alert severity levels should trigger push notifications. `),Ll(),Ms(2,`div`,16),ib(3,rt,10,7,`div`,17,at),Ll(),Ms(5,`div`,18)(6,`div`,19)(7,`icon`,20),qb(8,`info`),Ll(),Ms(9,`span`,21),qb(10,`Notifications will be sent when new alerts matching these severities are detected.`),Ll()()()),i&2){let e=yb();PI(3),sb(e.severity_options)}}var Ze=(()=>{class i{constructor(){this.push=D(mu),this.severity_options=[{key:`critical`,label:`Critical`,description:`Immediate attention required`,icon:`dangerous`,color_class:`text-error`},{key:`high`,label:`High`,description:`Important issues that may need attention`,icon:`warning`,color_class:`text-warning`},{key:`medium`,label:`Medium`,description:`Informational alerts`,icon:`error`,color_class:`text-info`},{key:`low`,label:`Low`,description:`Low priority notifications`,icon:`info`,color_class:`text-base-400`}]}async requestPermission(){await this.push.requestPermission()}toggleSeverity(e,l){this.push.setSeverityEnabled(e,l)}static{this.ɵfac=function(l){return new(l||i)}}static{this.ɵcmp=lC({type:i,selectors:[[`placeos-push-notification-settings`]],decls:15,vars:1,consts:[[1,`w-md`,`max-w-full`],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`mx-2`,`mt-2`,`h-14`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`type`,`button`,`matRipple`,``,`aria-label`,`Close notification settings`,`mat-dialog-close`,``,1,`rounded-sm`],[1,`p-4`],[1,`bg-warning-light`,`text-warning`,`flex`,`items-center`,`space-x-2`,`rounded-sm`,`p-3`],[1,`bg-error-light`,`text-error`,`flex`,`items-center`,`space-x-2`,`rounded-sm`,`p-3`],[1,`flex`,`flex-col`,`items-center`,`space-y-4`,`py-4`],[1,`border-base-300`,`flex`,`justify-end`,`border-t`,`p-2`],[`btn`,``,`matRipple`,``,`mat-dialog-close`,``,1,`inverse`,`w-40`],[1,`text-sm`],[1,`text-base-400`,`text-6xl`],[1,`stagehand-subtle`,`text-center`,`text-sm`],[`btn`,``,`matRipple`,``,1,`w-full`,3,`click`],[1,`mr-2`],[1,`stagehand-subtle`,`mb-4`,`text-sm`],[1,`space-y-3`],[1,`border-base-300`,`flex`,`items-center`,`justify-between`,`rounded-sm`,`border`,`p-3`],[1,`bg-info-light`,`mt-4`,`rounded-sm`,`p-3`],[1,`flex`,`items-center`,`space-x-2`],[1,`text-info`,`text-2xl`],[1,`stagehand-subtle`,`text-xs`],[1,`flex`,`items-center`,`space-x-3`],[1,`font-medium`],[3,`change`,`checked`]],template:function(l,t){l&1&&(Ms(0,`div`,0)(1,`header`,1)(2,`h2`,2),qb(3,`Push Notifications`),Ll(),Ms(4,`button`,3)(5,`icon`),qb(6,`close`),Ll()()(),Ms(7,`main`,4),tb(8,ot,5,0,`div`,5)(9,lt,5,0,`div`,6)(10,st,9,0,`div`,7)(11,ct,11,0),Ll(),Ms(12,`footer`,8)(13,`button`,9),qb(14,` Close `),Ll()()()),l&2&&(PI(8),nb(t.push.supported()?t.push.permission()===`denied`?9:t.push.enabled()?11:10:8))},dependencies:[Pt$1,Rt$1,us,ss$1,Ue,Z,O,In],encapsulation:2})}}return i})();var dt=()=>[`/alerts`];var mt=()=>[`/remote-support`];var pt=()=>[`/dashboards`];var ht=()=>[`/analytics`];var gt=()=>[`/recorder-grid`];var Ye=(i,r)=>r.id;function _t(i,r){if(i&1&&(Ms(0,`div`,28)(1,`div`,29),qb(2,` Support group `),Ll(),Ms(3,`div`,24),qb(4),Ll()(),Ms(5,`icon`,30),qb(6,`unfold_more`),Ll()),i&2){let e=yb(2);PI(4),Hl(` `,e.group_label(),` `)}}function ut(i,r){if(i&1){let e=fb();Ms(0,`div`,8)(1,`button`,27),mm(`click`,function(){Gf(e);return zf(yb().selectGroup())}),Ms(2,`icon`,20),qb(3),Ll(),tb(4,_t,7,1),Ll()()}if(i&2){let e=yb();PI(),_m(`justify-center`,e.is_compact()),um(`matTooltip`,e.is_compact()?e.group_label():``),cm(`aria-label`,`Support group: `+e.group_label()),PI(2),Rm(e.selected_group()?`group`:`public`),PI(),nb(e.is_compact()?-1:4)}}function bt(i,r){if(i&1&&(Ms(0,`mat-option`,36),qb(1),Ll()),i&2){let e=r.$implicit;um(`value`,e.id),PI(),Rm(e.display_name||e.name)}}function ft(i,r){if(i&1){let e=fb();Ms(0,`label`,32),qb(1,` Region `),Ll(),Ms(2,`mat-form-field`,33)(3,`mat-select`,34),Lm(`ngModelChange`,function(t){Gf(e);let p=yb(3);return Xb(p.region,t)||(p.region=t),zf(t)}),mm(`selectionChange`,function(t){Gf(e);let p=yb(3);return zf(p.setRegion(p.regionById(t.value)))}),Ms(4,`mat-option`,35),qb(5),hT(6,`translate`),Ll(),ib(7,bt,2,2,`mat-option`,36,Ye),Ll(),Iw(),Ll()}if(i&2){yb(2);let e=eT(0),l=yb();PI(3),Fm(`ngModel`,l.region),Cw(),PI(2),Rm(mT(6,2,`COMMON.REGION_ALL`)),PI(2),sb(e)}}function vt(i,r){if(i&1&&(Ms(0,`mat-option`,36),qb(1),Ll()),i&2){let e=r.$implicit;um(`value`,e.id),PI(),Rm(e.display_name||e.name)}}function wt(i,r){if(i&1){let e=fb();Ms(0,`label`,37),qb(1,` Building `),Ll(),Ms(2,`mat-form-field`,33)(3,`mat-select`,38),Lm(`ngModelChange`,function(t){Gf(e);let p=yb(3);return Xb(p.building,t)||(p.building=t),zf(t)}),mm(`selectionChange`,function(t){Gf(e);let p=yb(3);return zf(p.setBuilding(p.buildingById(t.value)))}),Ms(4,`mat-option`,35),qb(5),hT(6,`translate`),Ll(),ib(7,vt,2,2,`mat-option`,36,Ye),Ll(),Iw(),Ll()}if(i&2){yb(2);let e=eT(1),l=yb();PI(3),Fm(`ngModel`,l.building),Cw(),PI(2),Rm(mT(6,2,`COMMON.BUILDING_ALL`)),PI(2),sb(e)}}function St(i,r){if(i&1&&(Ms(0,`div`,31),tb(1,ft,9,4),tb(2,wt,9,4),Ll()),i&2){yb();let e=eT(0),l=eT(1),t=yb();PI(),nb(e.length>0?1:-1),PI(),nb(l.length>0&&t.region()?2:-1)}}function yt(i,r){if(i&1&&(jm(0)(1),tb(2,St,3,2,`div`,31)),i&2){let e=yb(),l=Jb(e.region_list());PI();let t=Jb(e.building_list());PI(),nb(l.length||t.length?2:-1)}}function xt(i,r){i&1&&(Ms(0,`span`,12),qb(1,`Alerts`),Ll())}function kt(i,r){i&1&&(Ms(0,`span`,12),qb(1,`Remote Support`),Ll())}function Ct(i,r){i&1&&(Ms(0,`span`,12),qb(1,`Analytics`),Ll())}function Nt(i,r){if(i&1&&(Ms(0,`a`,14)(1,`icon`,11),qb(2,`show_chart`),Ll(),tb(3,Ct,2,0,`span`,12),Ll()),i&2){let e=yb();um(`routerLink`,iT(3,ht))(`matTooltip`,e.is_compact()?`Analytics`:``),PI(3),nb(e.is_compact()?-1:3)}}function Tt(i,r){i&1&&(Ms(0,`span`,12),qb(1,`Manage Dashboards`),Ll())}function Et(i,r){i&1&&(Ms(0,`span`,12),qb(1,`Recorder Streams`),Ll())}function Mt(i,r){if(i&1&&(Ms(0,`a`,16)(1,`icon`,11),qb(2,`stream`),Ll(),tb(3,Et,2,0,`span`,12),Ll()),i&2){let e=yb();um(`routerLink`,iT(3,gt))(`matTooltip`,e.is_compact()?`Recorder Streams`:``),PI(3),nb(e.is_compact()?-1:3)}}function It(i,r){if(i&1&&(Ms(0,`span`,21),qb(1,`Dark Mode`),Ll(),Ms(2,`span`,40),qb(3),Ll()),i&2){let e=yb(2);PI(2),_m(`bg-success`,e.dark_mode())(`text-success-content`,e.dark_mode())(`bg-base-100`,!e.dark_mode())(`text-base-content`,!e.dark_mode()),PI(),Hl(` `,e.dark_mode()?`ON`:`OFF`,` `)}}function Lt(i,r){if(i&1){let e=fb();Ms(0,`button`,39),mm(`click`,function(){Gf(e);return zf(yb().toggleDarkMode())}),Ms(1,`icon`,20),qb(2),Ll(),tb(3,It,4,9),Ll()}if(i&2){let e=yb();um(`matTooltip`,e.is_compact()?e.dark_mode()?`Switch to Light Mode`:`Switch to Dark Mode`:``),cm(`aria-label`,e.dark_mode()?`Switch to light mode`:`Switch to dark mode`),PI(2),Rm(e.dark_mode()?`dark_mode`:`light_mode`),PI(),nb(e.is_compact()?-1:3)}}function Pt(i,r){i&1&&(Ms(0,`span`,21),qb(1,`Notifications`),Ll())}function Rt(i,r){i&1&&(Ms(0,`span`,22),qb(1,`ON`),Ll())}function Dt(i,r){i&1&&(Ms(0,`span`,24),qb(1,` Launch PlaceOS Backoffice `),Ll())}function zt(i,r){i&1&&(Ms(0,`icon`,25),qb(1,`open_in_new`),Ll())}function At(i,r){i&1&&(Ms(0,`p`,26),qb(1,` Access system configuration and management `),Ll())}var Ft=st$1(typeof matchMedia==`function`&&matchMedia(`(max-width: 767px)`).matches);var Ii=(()=>{class i{constructor(){this._dash=D(xp),this._org=D(Ge),this._dialog=D(Re),this._settings=D(H),this._groups=D(H$1),this.push=D(mu),this.is_compact=Ft,this._allow_dark_mode=this._settings.signal(`allow_dark_mode`,!1),this._theme=this._settings.theme_signal,this.notifications_active=Qt(()=>{if(!this.push.enabled())return!1;let e=this.push.config();return e.critical||e.high||e.medium||e.low}),this.dark_mode=Qt(()=>this._theme()===`dark`),this.can_change_dark_mode=Qt(()=>!!this._allow_dark_mode()),this.backoffice_link=Q(`backoffice_link`,`${location.origin}/backoffice/`),this.show_recorder_view=Q(`show_recorder_view`,!1),this.analytics_pages=Q(`analytics_pages`,[]),this.region=this._dash.region_id,this.building=this._dash.building_id,this.selected_group=this._groups.selected_group,this.group_label=Qt(()=>this.selected_group()?.group.name||`All groups`),this.show_group_selector=Qt(()=>this._groups.can_view_all()||this._groups.groups().length>0),this.region_list=Qt(()=>{let e=this._groups.scope(),l=this._org.region_list();return e?l.filter(t=>e.zones.has(t.id)):l}),this.building_list=Qt(()=>{let e=this._groups.scope(),l=this._org.active_buildings();return e?l.filter(t=>e.zones.has(t.id)):l}),this.setRegion=e=>{this._org.region=e,this.building.set(``),this._dash.listenForDashboardAlerts(!0)},this.setBuilding=e=>{this._org.building=e,this._dash.listenForDashboardAlerts(!0)}}regionById(e){return this.region_list().find(l=>l.id===e)||null}buildingById(e){return this.building_list().find(l=>l.id===e)||null}async selectGroup(){let{GroupSelectModalComponent:e}=await import(`./chunk-CxiaDdE_.js`),t=await cv(this._dialog.open(e,{data:{groups:this._groups.groups(),selected_group_id:this._groups.group_id(),show_all_groups:this._groups.can_view_all()}}).afterClosed(),{defaultValue:void 0});t!==void 0&&this._groups.setSelectedGroup(t)}toggleCompact(){this.is_compact.update(e=>!e)}toggleDarkMode(){this._settings.setTheme(this.dark_mode()?`light`:`dark`)}openNotificationSettings(){this._dialog.open(Ze)}static{this.ɵfac=function(l){return new(l||i)}}static{this.ɵcmp=lC({type:i,selectors:[[`sidebar`]],decls:39,vars:45,consts:[[`sidebar`,``,`aria-label`,`Primary`,1,`bg-secondary`,`text-secondary-content`,`flex`,`h-full`,`flex-col`],[1,`flex`,`items-center`,`px-1`],[`header`,``,1,`overflow-hidden`],[1,`px-2`,`py-4`],[1,`truncate`,`text-2xl`,`font-medium`],[1,`stagehand-muted`,`truncate`,`text-xs`],[`icon`,``,`type`,`button`,`matRipple`,``,`matTooltipPosition`,`right`,1,`rounded-sm`,3,`click`,`matTooltip`],[1,`text-3xl`],[1,`px-2`,`pt-1`],[1,`mt-2`,`flex-1`,`space-y-1`,`overflow-auto`],[`matRipple`,``,`routerLinkActive`,`bg-secondary-focus!`,`ariaCurrentWhenActive`,`page`,`aria-label`,`Alerts`,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`relative`,`flex`,`w-full`,`items-center`,`space-x-4`,`p-2`,3,`routerLink`,`matTooltip`],[1,`ml-0!`,`text-3xl`],[1,`truncate`],[`matRipple`,``,`routerLinkActive`,`bg-secondary-focus!`,`ariaCurrentWhenActive`,`page`,`aria-label`,`Remote support`,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`relative`,`flex`,`w-full`,`items-center`,`space-x-4`,`p-2`,3,`routerLink`,`matTooltip`],[`matRipple`,``,`routerLinkActive`,`bg-secondary-focus!`,`ariaCurrentWhenActive`,`page`,`aria-label`,`Analytics`,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`relative`,`flex`,`w-full`,`items-center`,`space-x-4`,`p-2`,3,`routerLink`,`matTooltip`],[`matRipple`,``,`routerLinkActive`,`bg-secondary-focus!`,`ariaCurrentWhenActive`,`page`,`aria-label`,`Manage dashboards`,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`relative`,`flex`,`w-full`,`items-center`,`space-x-4`,`p-2`,3,`routerLink`,`matTooltip`],[`matRipple`,``,`routerLinkActive`,`bg-secondary-focus!`,`ariaCurrentWhenActive`,`page`,`aria-label`,`Recorder streams`,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`relative`,`flex`,`w-full`,`items-center`,`space-x-4`,`p-2`,3,`routerLink`,`matTooltip`],[1,`flex`,`flex-col`,`gap-2`,`py-4`],[`matRipple`,``,`type`,`button`,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`relative`,`flex`,`w-full`,`items-center`,`justify-center`,`gap-2`,`rounded-sm`,`p-2`,3,`matTooltip`],[`matRipple`,``,`type`,`button`,`aria-label`,`Notification settings`,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`relative`,`flex`,`w-full`,`items-center`,`justify-center`,`gap-2`,`rounded-sm`,`p-2`,3,`click`,`matTooltip`],[1,`text-2xl`],[1,`flex-1`,`truncate`,`text-left`,`text-sm`],[1,`bg-success`,`text-success-content`,`ml-auto`,`rounded-full`,`px-2`,`py-0.5`,`text-xs`],[`btn`,``,`matRipple`,``,`matTooltipPosition`,`right`,`aria-label`,`Launch PlaceOS Backoffice in a new tab`,`target`,`_blank`,`rel`,`noopener noreferrer`,1,`inverse`,3,`matTooltip`,`href`],[1,`truncate`,`text-sm`],[1,`text-base-100`,`text-3xl`],[1,`stagehand-muted`,`text-center`,`text-xs`],[`matRipple`,``,`type`,`button`,`group-selector`,``,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`border-base-100/20`,`flex`,`w-full`,`items-center`,`gap-2`,`rounded-sm`,`border`,`p-2`,`text-left`,3,`click`,`matTooltip`],[1,`min-w-0`,`flex-1`],[1,`stagehand-muted`,`text-xs`,`font-medium`,`tracking-wide`,`uppercase`],[1,`text-xl`],[1,`space-y-2`,`p-2`],[`for`,`sidebar-region`,1,`block`,`px-1`,`text-xs`,`font-medium`,`tracking-wide`,`uppercase`],[`appearance`,`outline`,1,`no-subscript`,`white-faded`,`w-full`],[`id`,`sidebar-region`,`aria-label`,`Region`,3,`ngModelChange`,`selectionChange`,`ngModel`],[`value`,``],[3,`value`],[`for`,`sidebar-building`,1,`block`,`px-1`,`text-xs`,`font-medium`,`tracking-wide`,`uppercase`],[`id`,`sidebar-building`,`aria-label`,`Building`,3,`ngModelChange`,`selectionChange`,`ngModel`],[`matRipple`,``,`type`,`button`,`matTooltipPosition`,`right`,1,`hover:bg-base-100/10`,`relative`,`flex`,`w-full`,`items-center`,`justify-center`,`gap-2`,`rounded-sm`,`p-2`,3,`click`,`matTooltip`],[1,`ml-auto`,`rounded-full`,`px-2`,`py-0.5`,`text-xs`]],template:function(l,t){l&1&&(Ms(0,`nav`,0)(1,`div`,1)(2,`div`,2)(3,`div`,3)(4,`div`,4),qb(5,` Stagehand `),Ll(),Ms(6,`div`,5),qb(7,` by PlaceOS `),Ll()()(),Ms(8,`button`,6),mm(`click`,function(){return t.toggleCompact()}),Ms(9,`icon`,7),qb(10),Ll()()(),tb(11,ut,5,6,`div`,8),tb(12,yt,3,3),Ms(13,`div`,9)(14,`a`,10)(15,`icon`,11),qb(16,`notifications`),Ll(),tb(17,xt,2,0,`span`,12),Ll(),Ms(18,`a`,13)(19,`icon`,11),qb(20,`wifi`),Ll(),tb(21,kt,2,0,`span`,12),Ll(),tb(22,Nt,4,4,`a`,14),Ms(23,`a`,15)(24,`icon`,11),qb(25,`dashboard`),Ll(),tb(26,Tt,2,0,`span`,12),Ll(),tb(27,Mt,4,4,`a`,16),Ll(),Ms(28,`div`,17),tb(29,Lt,4,4,`button`,18),Ms(30,`button`,19),mm(`click`,function(){return t.openNotificationSettings()}),Ms(31,`icon`,20),qb(32),Ll(),tb(33,Pt,2,0,`span`,21),tb(34,Rt,2,0,`span`,22),Ll(),Ms(35,`a`,23),tb(36,Dt,2,0,`span`,24),tb(37,zt,2,0,`icon`,25),Ll(),tb(38,At,2,0,`p`,26),Ll()()),l&2&&(Tm(`width`,t.is_compact()?`3.5rem`:`16rem`),PI(2),Tm(`width`,t.is_compact()?`0rem`:`13rem`),PI(6),_m(`w-14`,t.is_compact()),um(`matTooltip`,t.is_compact()?`Expand Sidebar`:`Collapse Sidebar`),cm(`aria-label`,t.is_compact()?`Expand sidebar`:`Collapse sidebar`),PI(2),Rm(t.is_compact()?`menu`:`close`),PI(),nb(t.show_group_selector()?11:-1),PI(),nb(t.is_compact()?-1:12),PI(2),um(`routerLink`,iT(42,dt))(`matTooltip`,t.is_compact()?`Alerts`:``),PI(3),nb(t.is_compact()?-1:17),PI(),um(`routerLink`,iT(43,mt))(`matTooltip`,t.is_compact()?`Remote Support`:``),PI(3),nb(t.is_compact()?-1:21),PI(),nb(t.analytics_pages()?.length>0?22:-1),PI(),um(`routerLink`,iT(44,pt))(`matTooltip`,t.is_compact()?`Manage Dashboards`:``),PI(3),nb(t.is_compact()?-1:26),PI(),nb(t.show_recorder_view()?27:-1),PI(),_m(`px-4`,!t.is_compact())(`px-0`,t.is_compact()),PI(),nb(t.can_change_dark_mode()?29:-1),PI(),um(`matTooltip`,t.is_compact()?`Notification Settings`:``),PI(2),Rm(t.notifications_active()?`notifications_active`:`notifications_off`),PI(),nb(t.is_compact()?-1:33),PI(),nb(t.notifications_active()&&!t.is_compact()?34:-1),PI(),_m(`min-w-0`,t.is_compact())(`base`,!t.is_compact())(`clear`,t.is_compact()),um(`matTooltip`,t.is_compact()?`Launch PlaceOS Backoffice`:``)(`href`,t.backoffice_link(),qh),PI(),nb(t.is_compact()?-1:36),PI(),nb(t.is_compact()?37:-1),PI(),nb(t.is_compact()?-1:38))},dependencies:[us,ss$1,Yt,mt$1,O,ss,kt$1,ts,Br,Mn,zt$1,Bt,X,In,An,Zt,f],styles:[`[sidebar][_ngcontent-%COMP%], [header][_ngcontent-%COMP%]{transition:width .2s}`]})}}return i})();export{Ii as t};
//# debugId=f6fbd669-3b0c-5be6-9f27-7af0225eb4ad
