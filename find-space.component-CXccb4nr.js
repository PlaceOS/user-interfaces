import{n as m,t as l}from"./chunk-Da4-SChG.js";import{$r as w,At as Ss,B as HT,Bt as UT,D as Ed,En as dy,Et as Rp,F as GT,Ft as T_,H as Hm,It as Tb,Kr as ty,Mn as ey,Mt as Sy,Pn as f_,Q as Kn,Qn as jC,Rn as gd,St as Qo,T as ET,Tt as Re,Un as he$1,Wn as ht$1,Wt as Vy,Y as Jm,Yt as XH,Z as KH,Zr as v_,bn as cM,cr as lg,d as BT,dn as ay,dt as N,er as jT,et as LC,fi as yy,ft as O_,g as CT,jt as Sv,k as Er,kn as ea,l as At$1,mn as bT,nr as jd,o as A_,oi as y,pt as Op,ri as xT,rt as LT,sr as k_,ti as wT,tn as Yw,ut as My,v as Cy,w as ES,y as DT,yn as by}from"./chunk-DOBr0KAB.js";import{r as V}from"./chunk-Cj6L1LLy.js";import{Qt as vf,d as Ef,qt as tc,rn as wu}from"./chunk-MY0eedT5.js";import{F as zn,P as qn,_ as _t$1,j as oe,o as N$1}from"./chunk-Ccq9wZPF.js";import{c as yt$1,r as Rt$1,t as Mt}from"./chunk-D9kFxY4-.js";import{At as j_,F as P_,K as T_$1,P as Oo,U as Si,Zt as qc,dt as Yr,k as No,l as Bc,m as F_}from"./chunk-Q8XgTAFW.js";import{l as Xr,n as f}from"./main.js";import"./chunk-bAaAQ8r7.js";import{n as mt$1,t as Yt$1}from"./chunk-BTV9wzHn.js";import"./chunk-BStDqb1t.js";import"./chunk-CMvdu40-.js";import"./chunk-DryQDrvT.js";import{r as fe}from"./chunk-DQ9KlHxl.js";import"./chunk-DAyWlGX9.js";import{t as Ws}from"./chunk-DbqCQEkm.js";import"./chunk-CcxYKZ-n.js";import{a as qe,t as Kt$1}from"./chunk-CqLRFNKE.js";import{a as ui$1,n as Et$1,r as hi,t as Dt$1}from"./chunk-C484F1x-.js";import{t as O}from"./chunk-CXucuhMo.js";import"./chunk-B692In0O.js";import{a as zi,i as ci$1,n as Vn,r as ao,t as $i}from"./chunk-BtH1rvB_.js";import{n as sn,t as Ji}from"./chunk-Cfz1bY8z.js";import{t as p}from"./chunk-BKS9D3OI.js";import{a as st,i as mt$2,n as Ot$1,r as f$1}from"./chunk-BC-SoWh12.js";var ht=[`button`];var vt=[`*`];function xt(t,s){if(t&1&&(ea(0,`div`,2),ty(1,`mat-pseudo-checkbox`,6),gd()),t&2){let e=LT();Yw(),ey(`disabled`,e.disabled)}}var St=new w(`MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS`,{providedIn:`root`,factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})});var Ct=new w(`MatButtonToggleGroup`);var he=class{source;value;constructor(s,e){this.source=s,this.value=e}};var yt=(()=>{class t{_changeDetectorRef=y(jd);_elementRef=y(Kn);_focusMonitor=y(_t$1);_idGenerator=y(oe);_animationDisabled=qn();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new At$1;constructor(){y(N$1).load(Rt$1);let e=y(Ct,{optional:!0}),a=y(new Vy(`tabindex`),{optional:!0})||``,i=y(St,{optional:!0});this._tabIndex=ht$1(parseInt(a)||0),this.buttonToggleGroup=e,this._appearance=i&&i.appearance?i.appearance:`standard`,this._disabledInteractive=i?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId(`mat-button-toggle-`),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add(`mat-button-toggle-animations-enabled`),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let a=this.buttonToggleGroup._buttonToggles.find(i=>i.tabIndex===0);a&&(a.tabIndex=-1),this.tabIndex=0}this.change.emit(new he(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static ɵfac=function(a){return new(a||t)};static ɵcmp=Tb({type:t,selectors:[[`mat-button-toggle`]],viewQuery:function(a,i){if(a&1&&dy(ht,5),a&2){let d;HT(d=UT())&&(i._buttonElement=d.first)}},hostAttrs:[`role`,`presentation`,1,`mat-button-toggle`],hostVars:14,hostBindings:function(a,i){a&1&&ay(`focus`,function(){return i.focus()}),a&2&&(Jm(`aria-label`,null)(`aria-labelledby`,null)(`id`,i.id)(`name`,null),yy(`mat-button-toggle-standalone`,!i.buttonToggleGroup)(`mat-button-toggle-checked`,i.checked)(`mat-button-toggle-disabled`,i.disabled)(`mat-button-toggle-disabled-interactive`,i.disabledInteractive)(`mat-button-toggle-appearance-standard`,i.appearance===`standard`))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],id:`id`,name:`name`,value:`value`,tabIndex:`tabIndex`,disableRipple:[2,`disableRipple`,`disableRipple`,ES],appearance:`appearance`,checked:[2,`checked`,`checked`,ES],disabled:[2,`disabled`,`disabled`,ES],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,ES]},outputs:{change:`change`},exportAs:[`matButtonToggle`],ngContentSelectors:vt,decls:7,vars:13,consts:[[`button`,``],[`type`,`button`,1,`mat-button-toggle-button`,`mat-focus-indicator`,3,`click`,`id`,`disabled`],[1,`mat-button-toggle-checkbox-wrapper`],[1,`mat-button-toggle-label-content`],[1,`mat-button-toggle-focus-overlay`],[`matRipple`,``,1,`mat-button-toggle-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,3,`disabled`]],template:function(a,i){if(a&1&&(jT(),ea(0,`button`,1,0),ay(`click`,function(){return i._onButtonClick()}),DT(2,xt,2,1,`div`,2),ea(3,`span`,3),BT(4),gd()(),ty(5,`span`,4)(6,`span`,5)),a&2){let d=GT(1);ey(`id`,i.buttonId)(`disabled`,i.disabled&&!i.disabledInteractive||null),Jm(`role`,i.isSingleSelector()?`radio`:`button`)(`tabindex`,i.disabled&&!i.disabledInteractive?-1:i.tabIndex)(`aria-pressed`,i.isSingleSelector()?null:i.checked)(`aria-checked`,i.isSingleSelector()?i.checked:null)(`name`,i._getButtonName())(`aria-label`,i.ariaLabel)(`aria-labelledby`,i.ariaLabelledby)(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null),Yw(2),ET(i.buttonToggleGroup&&(!i.buttonToggleGroup.multiple&&!i.buttonToggleGroup.hideSingleSelectionIndicator||i.buttonToggleGroup.multiple&&!i.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),Yw(4),ey(`matRippleTrigger`,d)(`matRippleDisabled`,i.disableRipple||i.disabled)}},dependencies:[yt$1,No],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--%NS%mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--%NS%mat-button-toggle-legacy-text-color);
  font-family: var(--%NS%mat-button-toggle-legacy-label-text-font);
  font-size: var(--%NS%mat-button-toggle-legacy-label-text-size);
  line-height: var(--%NS%mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--%NS%mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--%NS%mat-button-toggle-legacy-label-text-tracking);
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--%NS%mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--%NS%mat-button-toggle-legacy-disabled-state-background-color);
  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--%NS%mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--%NS%mat-button-toggle-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-button-toggle-background-color, transparent);
  font-family: var(--%NS%mat-button-toggle-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-toggle-label-text-size, var(--%NS%mat-sys-label-large-size));
  line-height: var(--%NS%mat-button-toggle-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-weight: var(--%NS%mat-button-toggle-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-button-toggle-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-toggle-selected-state-background-color, var(--%NS%mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--%NS%mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--%NS%mat-button-toggle-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--%NS%mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--%NS%mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--%NS%mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
`],encapsulation:2})}return t})();var mt=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵmod=Qo({type:t});static ɵinj=Er({imports:[Mt,yt,zn]})}return t})();var de=()=>({standalone:!0});function Tt(t,s){t&1&&(ea(0,`label`,11),f_(1,` Location `),gd())}function Et(t,s){if(t&1&&(ea(0,`mat-option`,27),f_(1),gd()),t&2){let e=s.$implicit;ey(`value`,e),Yw(),Ed(` `,e.display_name||e.name,` `)}}function Ft(t,s){if(t&1){let e=xT();ea(0,`mat-form-field`,12)(1,`mat-select`,26),ay(`ngModelChange`,function(i){Rp(e);return Op(LT(2).setBuilding(i))}),CT(2,Et,2,2,`mat-option`,27,wT),gd(),LC(),gd()}if(t&2){let e=LT(2);Yw(),ey(`ngModel`,e.building())(`ngModelOptions`,T_(2,de)),jC(),Yw(),bT(e.buildings())}}function Nt(t,s){if(t&1){let e=xT();ea(0,`div`)(1,`div`,28)(2,`span`),f_(3),gd(),ea(4,`mat-checkbox`,29),My(`ngModelChange`,function(i){let d=Rp(e).$implicit;return v_(d.value,i)||(d.value=i),Op(i)}),ay(`change`,function(){Rp(e);return Op(LT(2).getSelectedFeatures())}),gd(),LC(),gd()()}if(t&2){let e=s.$implicit;Yw(3),Ed(` `,e.name),Yw(),Sy(`ngModel`,e.value),ey(`ngModelOptions`,T_(3,de)),jC()}}function It(t,s){if(t&1){let e=xT();ea(0,`form`,1),ay(`ngSubmit`,function(){Rp(e);return Op(LT().applyFilters())}),ea(1,`section`,2)(2,`div`,3)(3,`div`,4)(4,`button`,5),ay(`click`,function(){Rp(e);return Op(LT().closeModal())}),ea(5,`icon`,6),f_(6,`close`),gd()(),ea(7,`span`,7),f_(8,` Space Filters`),gd()()()(),ea(9,`section`,8)(10,`div`,3)(11,`div`,9),f_(12,`Details`),gd(),ea(13,`div`,10),DT(14,Tt,2,0,`label`,11),DT(15,Ft,4,3,`mat-form-field`,12),ea(16,`div`,10)(17,`label`,11),f_(18,` Date `),gd(),ty(19,`a-date-field`,13),LC(),ea(20,`div`,14)(21,`div`,15)(22,`label`,11),f_(23,` Start Time* `),gd(),ea(24,`a-time-field`,16),ay(`ngModelChange`,function(i){Rp(e);return Op(LT().model.update(W=>m(l({},W),{date:i})))}),gd(),LC(),gd(),ea(25,`div`,17)(26,`label`,11),f_(27,` End Time* `),gd(),ty(28,`a-duration-field`,18),LC(),gd()()()()()(),ea(29,`section`,8)(30,`div`,3)(31,`div`,9),f_(32,`Favourites`),gd(),ea(33,`div`,19)(34,`span`),f_(35,`Only show favourite rooms`),gd(),ea(36,`mat-checkbox`,20),My(`ngModelChange`,function(i){Rp(e);let d=LT();return v_(d.show_favourites,i)||(d.show_favourites=i),Op(i)}),gd(),LC(),gd()()(),ea(37,`section`,21)(38,`div`,22)(39,`div`,9),f_(40,`Features`),gd(),CT(41,Nt,5,4,`div`,null,wT),gd()(),ea(43,`section`,23)(44,`button`,24)(45,`span`,25),f_(46,`Apply Filters`),gd()()()()}if(t&2){let e=LT();Yw(14),ET(e.has_multiple_buildings()?14:-1),Yw(),ET(e.has_multiple_buildings()?15:-1),Yw(4),ey(`from`,e.minDate)(`formField`,e.form.date),jC(),Yw(5),ey(`ngModel`,e.model().date)(`ngModelOptions`,T_(13,de)),jC(),Yw(4),ey(`time`,e.model().date)(`max`,600)(`min`,60)(`step`,60)(`formField`,e.form.duration),jC(),Yw(8),Sy(`ngModel`,e.show_favourites),ey(`ngModelOptions`,T_(14,de)),jC(),Yw(5),bT(e.features())}}var pt=(()=>{class t{constructor(){this.data=y(st),this._bottomsheetRef=y(f$1),this._featuresFilterService=y(p),this._state=y(Ws),this._org=y(Si),this.buildings=this._org.building_list,this.building=this._org.active_building,this.features=this._featuresFilterService.features,this.show_favourites=this._featuresFilterService.show_favourites,this.has_multiple_buildings=Re(()=>this.buildings().length>1),this.form=this._state.form,this.model=this._state.model,this.minDate=Date.now(),this.setBuilding=e=>this._org.building=e}applyFilters(){this._featuresFilterService.applyFilter(),this._bottomsheetRef.dismiss(!0)}getSelectedFeatures(){this._featuresFilterService.getSelectedFeatures()}closeModal(){this._bottomsheetRef.dismiss()}static{this.ɵfac=function(a){return new(a||t)}}static{this.ɵcmp=Tb({type:t,selectors:[[``,`filter-space`,``]],decls:2,vars:1,consts:[[1,`z-0`,`m-0`,`flex`,`min-h-[800px]`,`flex-1`,`flex-col`,`overflow-y-auto`],[3,`ngSubmit`],[1,`border-base-200`,`flex`,`flex-col`,`items-center`,`border-b`,`py-5`],[1,`flex`,`w-[calc(100%-2rem)]`,`max-w-90`,`flex-col`,`self-center`],[1,`flex`,`flex-row`,`items-center`],[`icon`,``,`matRipple`,``,`type`,`button`,3,`click`],[1,`flex`,`items-center`,`justify-center`,`text-3xl`,`text-gray-700`],[1,`ml-6`,`flex`,`items-center`,`text-xl`,`font-bold`],[1,`border-base-200`,`flex`,`flex-col`,`items-center`,`border-b`],[1,`my-2`,`text-lg`],[1,`flex`,`flex-col`],[1,`mb-1`,`text-sm`,`font-bold`,`text-gray-700`],[`overlay`,``,`buildings`,``,`appearance`,`outline`,1,`w-full`],[3,`from`,`formField`],[1,`flex`,`w-full`,`flex-row`,`space-x-2`],[1,`flex`,`w-1/3`,`flex-1`,`flex-col`],[3,`ngModelChange`,`ngModel`,`ngModelOptions`],[1,`ml-auto`,`flex`,`w-1/3`,`flex-1`,`flex-col`],[3,`time`,`max`,`min`,`step`,`formField`],[1,`mb-2`,`flex`,`flex-row`],[1,`ml-auto`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[1,`border-base-200`,`flex`,`flex-col`],[1,`mx-auto`,`w-[calc(100%-2rem)]`,`max-w-90`],[1,`top-box-shadow`,`border-base-200`,`mt-5`,`flex`,`flex-col`,`items-center`,`justify-center`,`border-t`,`py-3`],[`btn`,``,`matRipple`,``,`type`,`submit`,1,`filter-button`,`max-w-[calc(100%`,`-`,`2rem)]`,`border-secondary`,`bg-secondary`,`mx-auto`,`min-w-[300px]`,`text-center`,`text-sm`],[1,``],[`placeholder`,`Select Building...`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[3,`value`],[1,`mb-1`,`flex`,`flex-row`],[1,`checkbox`,`ml-auto`,3,`ngModelChange`,`change`,`ngModel`,`ngModelOptions`]],template:function(a,i){a&1&&(ea(0,`div`,0),DT(1,It,47,15,`form`),gd()),a&2&&(Yw(),ET(i.form?1:-1))},dependencies:[Mt,yt$1,ao,Vn,j_,P_,T_$1,F_,qc,Bc,Xr,zi,ci$1,$i,Kt$1,qe,ui$1,hi,Oo,Ef],encapsulation:2})}}return t})();var ut=(()=>{class t{constructor(){this._org=y(Si),this.space=XH(void 0),this.selected=XH(!1),this.selectedChange=KH(),this.level_name=Re(()=>{let e=this._org.levelWithID(this.space()?.zones||[]);return e?.display_name||e?.name||``}),this.space_name=Re(()=>this.space()?.display_name||this.space()?.name||``),this.capacity=Re(()=>this.space()?.capacity||0),this.toggleSelected=()=>this.selectedChange.emit(!this.selected())}static{this.ɵfac=function(a){return new(a||t)}}static{this.ɵcmp=Tb({type:t,selectors:[[`find-space-item`]],inputs:{space:[1,`space`],selected:[1,`selected`]},outputs:{selectedChange:`selectedChange`},decls:11,vars:5,consts:[[`mat-ripple`,``,1,`border-base-300`,`bg-base-100`,`hover:border-info`,`mx-auto`,`flex`,`w-full`,`flex-col`,`space-y-2`,`rounded-lg`,`border`,`p-4`,3,`click`],[1,`flex`,`w-full`,`flex-row`,`items-center`,`space-x-2`],[1,`text-lg`]],template:function(a,i){a&1&&(ea(0,`button`,0),ay(`click`,function(){return i.toggleSelected()}),ea(1,`div`,1)(2,`icon`,2),f_(3,`meeting_room`),gd(),ea(4,`div`),f_(5),gd()(),ea(6,`div`,1)(7,`icon`,2),f_(8,`group`),gd(),ea(9,`div`),f_(10),gd()()()),a&2&&(yy(`bg-base-200`,i.selected()),Yw(5),by(` `,i.level_name(),`, `,i.space_name(),` `),Yw(5),Ed(``,i.capacity(),` People`))},dependencies:[Mt,yt$1,Ef],styles:[`[_nghost-%COMP%]{padding:0 .5rem}
/*# sourceMappingURL=find-space-item.component.css.map */`]})}}return t})();function Rt(t,s){if(t&1&&(ea(0,`div`,14)(1,`div`,7)(2,`icon`,12),f_(3,`people`),gd()(),ea(4,`div`,7)(5,`span`,19),f_(6),gd()()()),t&2){let e=s.$implicit;Yw(6),Cy(e?.email)}}var gt=(()=>{class t{constructor(){this.data=y(st),this._bottomSheetRef=y(f$1),this._state=y(Ws),this._roomConfirmService=y(j),this.form=this._state.form,this.model=this._state.model,this.loading=this._state.loading,this.show_submit_button=ht$1(!0),this.space=ht$1(this.data),this._form_value=this.model,this.unix_time=Re(()=>this._form_value()?.date),this.start_time=Re(()=>new Date(this.unix_time()).toLocaleTimeString(`en-US`,{hour:`numeric`,minute:`numeric`,hour12:!0})),this.end_time=Re(()=>{let e=this._form_value()?.duration,a=this.unix_time()+e*60*1e3;return new Date(a).toLocaleTimeString(`en-US`,{hour:`numeric`,minute:`numeric`,hour12:!0})}),this.attendees=Re(()=>this._form_value()?.attendees||[]),this.creator=Re(()=>this._form_value()?.creator||``),this.title=Re(()=>this._form_value()?.title)}closeModal(){this._bottomSheetRef.dismiss(`cancel`)}async confirmBooking(){this.show_submit_button.set(!1),await this._roomConfirmService.bookRoom(this.space())?this._bottomSheetRef.dismiss(!0):this.show_submit_button.set(!0)}static{this.ɵfac=function(a){return new(a||t)}}static{this.ɵcmp=Tb({type:t,selectors:[[`room-confirm`]],decls:63,vars:11,consts:[[1,`z-0`,`mx-auto`,`flex`,`min-h-[800px]`,`w-[calc(100%-2rem)]`,`w-full`,`flex-1`,`flex-col`,`overflow-y-auto`],[1,`border-base-200`,`flex`,`flex-col`,`border-b`,`py-2`],[1,`justify-content`,`flex`,`flex-row`,`items-center`,`space-x-4`],[`icon`,``,`matRipple`,``,3,`click`],[1,`flex`,`items-center`,`justify-center`,`text-3xl`,`text-gray-700`],[1,`mr-auto`,`text-lg`,`font-bold`],[1,`border-base-200`,`mt-4`,`flex`,`flex-row`,`space-x-4`,`border-b`,`pb-4`],[1,`flex`,`flex-col`],[1,`text-base`],[`src`,`assets/tick.svg`],[1,`flex`,`text-base`,`font-bold`,`text-gray-700`],[1,`mt-2`,`flex`,`items-center`,`text-sm`,`text-gray-700`],[1,`flex`,`items-center`],[1,`flex`],[1,`mt-2`,`flex`,`flex-row`,`items-center`,`text-sm`,`text-gray-700`],[1,`mt-4`,`flex`,`flex-row`,`space-x-4`,`pb-4`],[1,`top-box-shadow`,`border-base-200`,`-mx-4`,`mt-5`,`mb-10`,`flex`,`flex-col`,`items-center`,`border-t`,`p-3`],[`matRipple`,``,1,`border-secondary`,`bg-secondary`,`mx-4`,`ml-2`,`w-[300px]`,3,`click`,`disabled`],[1,``],[1,`w-full`]],template:function(a,i){a&1&&(ea(0,`div`,0)(1,`section`,1)(2,`div`,2)(3,`button`,3),ay(`click`,function(){return i.closeModal()}),ea(4,`icon`,4),f_(5,`close`),gd()(),ea(6,`span`,5),f_(7,` Confirm Room Booking`),gd()()(),ea(8,`section`,6)(9,`div`,7)(10,`span`,8),ty(11,`img`,9),gd()(),ea(12,`div`,7)(13,`span`,10),f_(14),gd(),ea(15,`div`,11)(16,`icon`,12),f_(17,`calendar_today`),gd(),ea(18,`span`,13),f_(19),A_(20,`date`),gd()(),ea(21,`div`,11)(22,`icon`,12),f_(23,`schedule`),gd(),ea(24,`span`,13),f_(25),gd()()()(),ea(26,`section`,6)(27,`div`,7)(28,`span`,8),ty(29,`img`,9),gd()(),ea(30,`div`,7)(31,`span`,10),f_(32,`Attendees `),gd(),CT(33,Rt,7,1,`div`,14,wT),ea(35,`div`,14)(36,`div`,7)(37,`icon`,12),f_(38,`people`),gd()(),ea(39,`div`,7)(40,`span`),f_(41),gd()()()()(),ea(42,`section`,15)(43,`div`,7)(44,`span`,8),ty(45,`img`,9),gd()(),ea(46,`div`,7)(47,`span`,10),f_(48,`Rooms `),gd(),ea(49,`div`,11)(50,`icon`,12),f_(51,`meeting_room`),gd(),ea(52,`span`,13),f_(53),gd()(),ea(54,`div`,11)(55,`icon`,12),f_(56,`room`),gd(),ea(57,`span`,13),f_(58),gd()()()(),ea(59,`div`,16)(60,`button`,17),ay(`click`,function(){return i.confirmBooking()}),ea(61,`span`,18),f_(62,`Confirm`),gd()()()()),a&2&&(Yw(14),Ed(``,i.title(),` `),Yw(5),Ed(` `,k_(20,8,i.unix_time(),`dd MMMM yyyy`),` `),Yw(6),by(``,i.start_time(),` -`,i.end_time()),Yw(8),bT(i.attendees()),Yw(8),Cy(i.creator()),Yw(12),Ed(` `,i.space().name,` `),Yw(5),Ed(` `,i.space().level?.name),Yw(2),ey(`disabled`,!i.show_submit_button()))},dependencies:[Sv,Mt,yt$1,Ef,cM],encapsulation:2})}}return t})();function Dt(t,s){if(t&1&&(ea(0,`section`,1),ty(1,`img`,18),gd()),t&2){let e=LT();Yw(),ey(`source`,e.space()?.images?.[0])(`alt`,`Image of `+(e.space()?.display_name||e.space()?.name))}}function Bt(t,s){t&1&&(ea(0,`button`,5)(1,`span`,19),f_(2,`+ Add this room`),gd()())}function Vt(t,s){t&1&&(ea(0,`button`,6)(1,`span`,20),f_(2,`- Remove this room`),gd()())}function Ot(t,s){t&1&&(ea(0,`div`)(1,`icon`,10),f_(2,`panorama`),gd()())}function At(t,s){t&1&&(ea(0,`div`)(1,`icon`,10),f_(2,`video_camera_front`),gd()())}function Gt(t,s){t&1&&(ea(0,`div`)(1,`icon`,10),f_(2,`contact_phone`),gd()())}function jt(t,s){t&1&&(ea(0,`div`)(1,`icon`,10),f_(2,`drive_file_rename_outline`),gd()())}function Lt(t,s){t&1&&(ea(0,`div`)(1,`icon`,10),f_(2,`draw`),gd()())}function Pt(t,s){t&1&&(ea(0,`div`)(1,`icon`,10),f_(2,`nest_remote_comfort_sensor`),gd()())}function zt(t,s){if(t&1&&(ea(0,`div`,22)(1,`div`),DT(2,Ot,3,0,`div`)(3,At,3,0,`div`)(4,Gt,3,0,`div`)(5,jt,3,0,`div`)(6,Lt,3,0,`div`)(7,Pt,3,0,`div`),gd(),ea(8,`span`,11),f_(9),gd()()),t&2){let e,a=s.$implicit;Yw(2),ET((e=a)===`Views`?2:e===`Projector`?3:e===`VidConf`?4:e===`Whiteboard`?5:e===`Jamboard`?6:e===`Wifi`?7:-1),Yw(7),Ed(` `,a,` `)}}function Ut(t,s){if(t&1&&(ea(0,`section`,14)(1,`span`,21),f_(2,`Room Features`),gd(),CT(3,zt,10,2,`div`,22,wT),gd()),t&2){let e=LT();Yw(3),bT(e.space()?.feature_list)}}function Wt(t,s){if(t&1){let e=xT();ea(0,`button`,23),ay(`click`,function(){Rp(e);return Op(LT().back())}),ea(1,`span`,24),f_(2,`Back`),gd()()}}function Ht(t,s){if(t&1){let e=xT();ea(0,`button`,25),ay(`click`,function(){Rp(e);return Op(LT().back())}),ea(1,`span`,19),f_(2,`Confirm`),gd()()}}var _t=(()=>{class t{constructor(){this.data=y(st),this._bottomSheetRef=y(f$1),this.space=ht$1(this.data),this.room_added=ht$1(!1)}selectRoom(){this.room_added.update(e=>!e)}back(){this.room_added()?this._bottomSheetRef.dismiss(this.space()):this._bottomSheetRef.dismiss(null)}static{this.ɵfac=function(a){return new(a||t)}}static{this.ɵcmp=Tb({type:t,selectors:[[`placeos-room-details`]],decls:25,vars:10,consts:[[1,`z-0`,`flex`,`min-h-[800px]`,`w-full`,`flex-1`,`flex-col`,`overflow-hidden`],[1,`bg-base-200`,`flex`,`min-h-[300px]`,`items-center`,`justify-center`,`text-gray-500`],[1,`border-base-200`,`mx-auto`,`flex`,`w-[calc(100%-2rem)]`,`flex-col`,`border-b`],[1,`mt-3`,`text-lg`,`font-bold`],[1,`w-max-[375px]`,3,`click`],[`btn`,``,`matRipple`,``,1,`border-secondary`,`bg-secondary`,`m-3`,`mx-auto`,`w-full`],[`btn`,``,`matRipple`,``,1,`border-base-200`,`bg-base-200`,`m-3`,`mx-auto`,`w-full`],[1,`border-base-200`,`mx-auto`,`flex`,`w-[calc(100%-2rem)]`,`flex-col`,`border-b`,`p-3`,`pl-0`],[1,`text-base`,`font-bold`],[1,`mt-3`,`flex`,`flex-row`,`items-center`,`text-sm`],[1,`text-info`],[1,`text-sm`,`text-gray-500`],[1,`mt-1`,`flex`,`flex-row`,`items-center`,`text-sm`],[1,`text-gray-500`],[1,`mx-auto`,`flex`,`w-[calc(100%-2rem)]`,`flex-col`,`py-3`],[1,`top-box-shadow`,`border-base-200`,`bg-base-100`,`flex`,`flex-col`,`border-t`,`p-3`],[`btn`,``,`matRipple`,``,1,`border-secondary`,`bg-base-100`,`mx-auto`,`w-full`],[`btn`,``,`matRipple`,``,1,`border-secondary`,`bg-secondary`,`mx-auto`,`w-full`],[`auth`,``,`width`,`100%`,`height`,`100%`,1,`z-20`,`flex`,`rounded-lg`,3,`source`,`alt`],[1,`text-white`],[1,`text-black`],[1,`mb-3`,`text-base`,`font-bold`],[1,`mb-1`,`flex`,`w-full`,`flex-row`],[`btn`,``,`matRipple`,``,1,`border-secondary`,`bg-base-100`,`mx-auto`,`w-full`,3,`click`],[1,`text-secondary`],[`btn`,``,`matRipple`,``,1,`border-secondary`,`bg-secondary`,`mx-auto`,`w-full`,3,`click`]],template:function(a,i){a&1&&(ea(0,`div`,0),DT(1,Dt,2,2,`section`,1),ea(2,`section`,2)(3,`span`,3),f_(4),gd(),ea(5,`div`,4),ay(`click`,function(){return i.selectRoom()}),DT(6,Bt,3,0,`button`,5),DT(7,Vt,3,0,`button`,6),gd()(),ea(8,`section`,7)(9,`span`,8),f_(10,`Details`),gd(),ea(11,`div`,9)(12,`icon`,10),f_(13,`people`),gd(),ea(14,`span`,11),f_(15),gd()(),ea(16,`div`,12)(17,`icon`,10),f_(18,`room`),gd(),ea(19,`span`,13),f_(20),gd()()(),DT(21,Ut,5,0,`section`,14),ea(22,`div`,15),DT(23,Wt,3,0,`button`,16),DT(24,Ht,3,0,`button`,17),gd()()),a&2&&(Yw(),ET(i.space()?.images?.length>0?1:-1),Yw(3),Ed(` `,i.space()?.name),Yw(2),ET(i.room_added()?-1:6),Yw(),ET(i.room_added()?7:-1),Yw(8),Ed(` `,i.space()?.capacity,` People`),Yw(5),by(` `,i.space()?.level?.name,`, `,i.space()?.level?.parent_id),Yw(),ET(i.space()?.feature_list.length>0?21:-1),Yw(2),ET(i.room_added()?-1:23),Yw(),ET(i.room_added()?24:-1))},dependencies:[Mt,yt$1,Ef,O],encapsulation:2})}}return t})();var j=(()=>{class t{get form(){return this._state.form}get model(){return this._state.model}constructor(){this._bottomSheet=y(mt$2),this._router=y(V),this._state=y(Ws),this._spaces=y(Ot$1),this._space_pipe=new fe,this.book_space={},this.space_list=[],this.selected_space=ht$1(null),this.book_space={},(this._state.model().resources||[]).forEach(a=>this.book_space[a.id]=!0),this.space_list=this._spaces.filter(a=>this.book_space[a.id])}openRoomDetail(e=this.selected_space()){this._bottomSheet.open(_t,{data:e}).afterDismissed().subscribe(i=>{i&&this.openRoomConfirm(i)})}openRoomConfirm(e){e&&this._bottomSheet.open(gt,{data:e})}updateSelectedSpace(e){this.selected_space.set(e)}handleBookEvent(e,a=!0){this.book_space={},this.book_space[e.id]=a}async bookRoom(e){if(!e)return!1;this.handleBookEvent(e);let a=Object.keys(this.book_space).filter(d=>this.book_space[d]),i=await Promise.all(a.map(d=>this._space_pipe.transform(d)));return this.model.update(d=>m(l({},d),{resources:i,system:i[0]})),this.space_list=this._spaces.filter(d=>this.book_space[d.id]),this.postForm()}async postForm(){try{return await this._state.postForm(),await this._router.navigate([`/confirm/success`]),!0}catch(e){return tc(vf(e)||`Unable to book the room.`),!1}}static{this.ɵfac=function(a){return new(a||t)}}static{this.ɵprov=N({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();function $t(t,s){if(t&1&&ty(0,`img`,4),t&2)ey(`source`,LT().space()?.images?.[0])}function Qt(t,s){t&1&&(ea(0,`div`)(1,`icon`,14),f_(2,`image`),gd()())}var ft=(()=>{class t{constructor(){this.data=y(st),this._bottomSheetRef=y(f$1),this._roomConfirmService=y(j),this.space=ht$1(this.data)}openRoomDetail(){this._roomConfirmService.openRoomDetail(this.space())}cancel(){this._bottomSheetRef.dismiss(null)}static{this.ɵfac=function(a){return new(a||t)}}static{this.ɵcmp=Tb({type:t,selectors:[[`placeos-room-tile`]],decls:23,vars:6,consts:[[1,`z-0`,`flex`,`min-h-min`,`w-full`,`min-w-[400px]`,`flex-1`,`flex-col`,`overflow-hidden`],[1,`justify-content`,`mx-auto`,`flex`,`w-[calc(100%-2rem)]`,`max-w-[375px]`,`items-center`,3,`click`],[1,`bg-base-100`,`mx-4`,`flex`,`h-full`,`w-full`,`flex-col`,`rounded-lg`,`border`],[1,`bg-base-200`,`m-3`,`flex`,`h-44`,`items-center`,`justify-center`,`rounded-lg`,`text-gray-500`],[`auth`,``,`alt`,`image of building `,`width`,`100%`,`height`,`100%`,1,`z-20`,`flex`,`rounded-lg`,3,`source`],[1,`mb-4`,`flex`,`flex-col`],[1,`mx-3`,`mt-1`,`text-xl`,`font-bold`],[1,`mx-3`,`mt-1`,`flex`,`flex-row`,`items-center`,`text-base`],[1,`text-info`],[1,`text-gray-500`],[1,`text-info`,`flex`,`items-center`],[1,`top-box-shadow`,`border-base-200`,`bg-base-100`,`-mx-4`,`mt-5`,`mb-10`,`flex`,`h-full`,`flex-col`,`items-center`,`border-t`,`p-3`],[`btn`,``,`matRipple`,``,1,`border-secondary`,`bg-base-100`,`mx-4`,`ml-2`,`w-[460px]`,3,`click`],[1,`text-secondary`],[1,`text-[8rem]`]],template:function(a,i){a&1&&(ea(0,`div`,0)(1,`div`,1),ay(`click`,function(){return i.openRoomDetail()}),ea(2,`div`,2)(3,`div`,3),DT(4,$t,1,1,`img`,4),DT(5,Qt,3,0,`div`),gd(),ea(6,`div`,5)(7,`span`,6),f_(8),gd(),ea(9,`div`,7)(10,`icon`,8),f_(11,`room`),gd(),ea(12,`span`,9),f_(13),gd()(),ea(14,`div`,7)(15,`icon`,10),f_(16,`people`),gd(),ea(17,`span`,9),f_(18),gd()()()()()(),ea(19,`div`,11)(20,`button`,12),ay(`click`,function(){return i.cancel()}),ea(21,`span`,13),f_(22,`Back`),gd()()()),a&2&&(Yw(4),ET(i.space()?.images?.length>0?4:-1),Yw(),ET(i.space()?.images?.length==0?5:-1),Yw(3),Ed(` `,i.space()?.name),Yw(5),by(` `,i.space()?.level?.name,`, `,i.space()?.level?.parent_id),Yw(5),Ed(` `,i.space()?.capacity))},dependencies:[Mt,yt$1,Ef,O],encapsulation:2})}}return t})();var bt=(()=>{class t extends wu{constructor(){super(...arguments),this._bottomSheet=y(mt$2),this._roomConfirmService=y(j),this.style_map={},this.map_features=ht$1([]),this.map_actions=ht$1([]),this.map_loaded=ht$1(!1),this.features_loaded=ht$1(!1),this.selected_space=this._roomConfirmService.selected_space,this.locatable_spaces=ht$1([]),this.maps_list=ht$1([])}async locateSpaces(e){let a=e||[];this.locatable_spaces.set(a.map(i=>({id:i.id,name:i.name,map_id:i.map_id,level:i.level}))),await this.loadMap(),this.timeout(`init`,()=>{this.processFeature()},1e3),this.processStyles(),this.map_actions.set(a.map(i=>({id:i.map_id,action:`click`,callback:()=>{this.openRoomTile(i)}})))}async loadMap(){this.map_loaded.set(!1);let e=this.locatable_spaces().map(a=>({map_id:a.level.map_id,level:a.level.name}));this.maps_list.set([...new Map(e.map(a=>[a.map_id,a])).values()]),this.map_loaded.set(!0)}processFeature(){this.features_loaded.set(!1);let e=this.locatable_spaces().map(a=>({location:a.map_id,content:sn,data:{name:a.name},z_index:99,zoom:100}));this.map_features.set(e),this.features_loaded.set(!0)}processStyles(){let e={};e[`#zones`]={display:`none`},e[`#Zones`]={display:`none`},this.style_map=e}openRoomTile(e){this._bottomSheet.open(ft,{panelClass:`bottom-sheet-transparent`,data:e}),this._roomConfirmService.handleBookEvent(e,!0)}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=lg(t)))(i||t)}})()}static{this.ɵprov=N({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();function qt(t,s){if(t&1&&(ea(0,`span`),f_(1),gd()),t&2){let e=LT();Yw(),Ed(` (`,e.selected_feature_count(),` applied) `)}}function Zt(t,s){if(t&1){let e=xT();ea(0,`find-space-item`,36),ay(`selectedChange`,function(i){let d=Rp(e).$implicit;return Op(LT(4).handleBookEvent(d,i))}),gd()}if(t&2){let e=s.$implicit,a=LT(4);ey(`space`,e)(`selected`,a.book_space()[e.id])}}function Jt(t,s){if(t&1&&(ea(0,`div`,33),CT(1,Zt,1,2,`find-space-item`,35,wT),gd()),t&2){let e=LT(3);Yw(),bT(e.spaces())}}function Kt(t,s){if(t&1&&(ea(0,`mat-option`,38),f_(1),gd()),t&2){let e=s.$implicit;ey(`value`,e),Yw(),Cy(e.level)}}function Xt(t,s){if(t&1){let e=xT();ea(0,`mat-form-field`,34)(1,`mat-select`,37),ay(`ngModelChange`,function(i){Rp(e);return Op(LT(3).updateSelectedLevel(i))}),ea(2,`mat-option`,38),f_(3),A_(4,`translate`),gd(),CT(5,Kt,2,2,`mat-option`,38,wT),gd(),LC(),gd()}if(t&2){let e=LT(3);Yw(),ey(`ngModel`,e.selected_level()),jC(),Yw(),ey(`value`,e.maps_list()),Yw(),Ed(` `,O_(4,3,`COMMON.LEVEL_ALL`),` `),Yw(2),bT(e.maps_list())}}function Yt(t,s){if(t&1&&DT(0,Jt,3,0,`div`,33)(1,Xt,7,5,`mat-form-field`,34),t&2)ET(LT(2).view()===`list`?0:1)}function ei(t,s){t&1&&(ea(0,`div`,32)(1,`div`,39)(2,`p`,40),f_(3,`No spaces`),gd()()())}function ti(t,s){if(t&1&&DT(0,Yt,2,1)(1,ei,4,0,`div`,32),t&2)ET(LT().spaces().length>0?0:1)}function ii(t,s){if(t&1&&(ea(0,`div`,12),ty(1,`mat-spinner`,41),ea(2,`p`),f_(3),gd()()),t&2){let e=LT();Yw(),ey(`diameter`,32),Yw(2),Cy(e.loading())}}function ni(t,s){if(t&1&&(ea(0,`span`),f_(1),gd()),t&2){let e=LT();Yw(),Ed(` (`,e.selected_feature_count(),` applied) `)}}function oi(t,s){if(t&1){let e=xT();ea(0,`find-space-item`,46),ay(`selectedChange`,function(i){let d=Rp(e).$implicit;return Op(LT(4).handleBookEvent(d,i))}),gd()}if(t&2){let e=s.$implicit,a=LT(4);ey(`space`,e)(`selected`,a.book_space()[e.id])}}function ai(t,s){if(t&1&&(ea(0,`div`),CT(1,oi,1,2,`find-space-item`,45,wT),gd()),t&2){let e=LT(3);Yw(),bT(e.spaces())}}function li(t,s){if(t&1&&(ea(0,`mat-option`,38),f_(1),gd()),t&2){let e=s.$implicit;ey(`value`,e),Yw(),Cy(e.level)}}function ri(t,s){if(t&1){let e=xT();ea(0,`div`)(1,`mat-form-field`,48)(2,`mat-select`,37),ay(`ngModelChange`,function(i){Rp(e);return Op(LT(4).updateSelectedLevel(i))}),ea(3,`mat-option`,38),f_(4),A_(5,`translate`),gd(),CT(6,li,2,2,`mat-option`,38,wT),gd(),LC(),gd()()}if(t&2){let e=LT(4);Yw(2),ey(`ngModel`,e.selected_level()),jC(),Yw(),ey(`value`,e.maps_list()),Yw(),Ed(` `,O_(5,3,`COMMON.LEVEL_ALL`),` `),Yw(2),bT(e.maps_list())}}function si(t,s){if(t&1&&(ea(0,`div`,50),ty(1,`interactive-map`,51),gd()),t&2){let e=s.$implicit,a=LT(6);Yw(),ey(`src`,e?.map_id)(`styles`,a.map_styles())(`features`,a.map_features())(`actions`,a.map_actions())}}function ci(t,s){if(t&1&&(ea(0,`div`),CT(1,si,2,4,`div`,50,wT),gd()),t&2){let e=LT(5);Yw(),bT(e.selected_level_maps())}}function di(t,s){if(t&1&&(ea(0,`div`,49),ty(1,`interactive-map`,51),gd()),t&2){let e=LT(5);Yw(),ey(`src`,e.selected_map()?.map_id)(`styles`,e.map_styles())(`features`,e.map_features())(`actions`,e.map_actions())}}function mi(t,s){if(t&1&&(ea(0,`div`,47),DT(1,ci,3,0,`div`),DT(2,di,2,4,`div`,49),gd()),t&2){let e=LT(4);Yw(),ET(e.selected_all_levels()?1:-1),Yw(),ET(e.selected_all_levels()?-1:2)}}function pi(t,s){if(t&1&&(ea(0,`div`,43),DT(1,ri,8,5,`div`),DT(2,mi,3,2,`div`,47),gd()),t&2){let e=LT(3);Yw(),ET(e.maps_list().length>1?1:-1),Yw(),ET(e.selected_level()?2:-1)}}function ui(t,s){if(t&1&&(DT(0,ai,3,0,`div`),DT(1,pi,3,2,`div`,43),ea(2,`p`,44),f_(3,` End of available spaces list `),gd()),t&2){let e=LT(2);ET(e.view()===`list`?0:-1),Yw(),ET(e.view()===`map`&&e.map_features().length>0?1:-1)}}function gi(t,s){t&1&&(ea(0,`div`,42)(1,`p`),f_(2,` No available spaces for selected time, capacity or level(s) `),gd()())}function _i(t,s){if(t&1&&DT(0,ui,4,2)(1,gi,3,0,`div`,42),t&2)ET(LT().spaces().length>0?0:1)}function fi(t,s){t&1&&(ea(0,`div`,30),ty(1,`mat-spinner`,41),ea(2,`p`),f_(3,`Retrieving available spaces...`),gd()()),t&2&&(Yw(),ey(`diameter`,32))}function bi(t,s){if(t&1){let e=xT();ea(0,`div`)(1,`button`,52),ay(`click`,function(){Rp(e);return Op(LT().openRoomDetails())}),ea(2,`span`,40),f_(3,`View Room`),gd()()()}}var xo=(()=>{class t extends wu{get form(){return this._state.form}get model(){return this._state.model}constructor(){super(),this._bottomSheet=y(mt$2),this._org=y(Si),this._spaces=y(Ot$1),this._state=y(Ws),this._featuresFilterService=y(p),this._mapService=y(bt),this._roomConfirmService=y(j),this._router=y(V),this._injector=y(he$1),this.show_room_details=ht$1(!1),this.view=ht$1(`list`),this.selected_features=this._featuresFilterService.selected_features,this.selected_feature_count=Re(()=>this.selected_features()?.length||0),this.loading=this._state.loading,this.spaces=this._featuresFilterService.filtered_spaces,this.maps_list=this._mapService.maps_list,this.map_features=ht$1([]),this.map_actions=this._mapService.map_actions,this.map_styles=ht$1(null),this.selected_level=ht$1(null),this.selected_all_levels=Re(()=>Array.isArray(this.selected_level())),this.selected_level_maps=Re(()=>{let e=this.selected_level();return Array.isArray(e)?e:[]}),this.selected_map=Re(()=>{let e=this.selected_level();return Array.isArray(e)?null:e}),this.book_space=ht$1({}),this.buildings=this._org.building_list,this.setBuilding=e=>this._org.building=e,Ss(()=>{let e=this.maps_list();e?.length&&!this.selected_level()&&this.selected_level.set(e)})}async ngOnInit(){this.view.set(`list`),this._state.setView(`find`),await this._org.waitUntilInitialised(),await Yr(this._spaces.initialised,e=>!!e,this._injector),await this._state.listAvailableSpaces(),this.setBuilding(this._org.building),this.book_space.set({}),await this._mapService.locateSpaces(this.spaces()),await Yr(this._mapService.features_loaded,e=>!!e,this._injector),this.applyMapDecorations(),this.map_features.set(this._mapService.map_features())}handleBookEvent(e,a=!0){this.book_space.set(a?{[e.id]:!0}:{}),this._roomConfirmService.book_space=this.book_space(),this._roomConfirmService.handleBookEvent(e,a),this.show_room_details.set(a),this._roomConfirmService.updateSelectedSpace(a?e:null)}openFilter(){this.bottomSheetRef=this._bottomSheet.open(pt,{data:this.buildings()}),this.subscription(`filter-sheet`,this.bottomSheetRef.afterDismissed().subscribe(e=>{e&&this.refreshMap()}))}async refreshMap(){await this._mapService.locateSpaces(this.spaces()),this._mapService.processFeature(),this.selected_level.set(this.maps_list()),this.processStyles(),this.map_features.set(this._mapService.map_features())}openRoomDetails(){this._roomConfirmService.openRoomDetail()}updateSelectedLevel(e){this.selected_level.set(e),Array.isArray(this.selected_level())||this.applyMapDecorations()}applyMapDecorations(){this.timeout(`init`,()=>{this.processFeature(),this.processStyles()},1500)}processFeature(){this.map_features.set(this._mapService.map_features())}processStyles(){this.map_styles.set(this._mapService.style_map)}closeModal(){this._router.navigate([`/book/spaces`]),this._featuresFilterService.clearFilter()}static{this.ɵfac=function(a){return new(a||t)}}static{this.ɵcmp=Tb({type:t,selectors:[[`find-space`]],features:[Hm],decls:61,vars:42,consts:[[1,`bg-base-200`,`fixed`,`inset-0`,`z-10`,`flex`,`flex-col`],[1,`border-base-300`,`bg-base-100`,`mx-auto`,`flex`,`h-full`,`w-lg`,`max-w-full`,`flex-col`,`border-x`],[1,`space-y-2`,`p-2`],[1,`bg-base-200`,`flex`,`items-center`,`justify-between`,`rounded-sm`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,3,`click`],[1,`border-base-200`,`flex`,`items-center`,`justify-between`,`rounded-lg`,`border`,`p-1`],[`btn`,``,`matRipple`,``,1,`w-40`,3,`click`],[1,`divide-secondary`,`border-secondary`,`mx-1`,`flex`,`divide-x`,`rounded-sm`,`border`],[`icon`,``,`matRipple`,``,1,`rounded-l`,`rounded-r-none`,3,`click`,`matTooltip`],[`icon`,``,`matRipple`,``,1,`rounded-l-none`,`rounded-r`,3,`click`,`matTooltip`],[1,`flex`,`h-1/2`,`w-full`,`flex-1`,`flex-col`],[1,`flex`,`h-full`,`w-full`,`flex-1`,`items-center`,`justify-center`],[1,`bg-base-200`,`z-0`,`flex`,`h-full`,`w-full`,`flex-1`,`flex-col`,`overflow-auto`],[1,`flex`,`flex-col`,`py-5`],[1,`mx-auto`,`w-[calc(100%-2rem)]`,`max-w-[375px]`],[1,`flex`,`flex-row`,`items-center`],[3,`click`],[1,`text-base-400`,`flex`,`items-center`,`justify-center`,`text-3xl`],[1,`ml-6`,`flex`,`items-center`,`text-lg`,`font-bold`],[1,`mt-3`,`flex`,`flex-row`,`justify-between`,`align-middle`],[1,`flex`,`w-7/12`,`justify-center`],[`btn`,``,`matRipple`,``,1,`filter-button`,`bg-base-200`,`h-9`,`w-full`,`text-sm`,3,`click`],[1,`divide-secondary`,`border-secondary`,`flex`,`divide-x`,`rounded-sm`,`border`],[1,`flex`,`flex-row`],[1,`my-2`,`flex`,`flex-row`,`border-t`],[1,`flex`,`flex-col`],[1,`mt-3`,`text-lg`,`font-bold`],[1,`mt-1`,`text-xs`,`text-gray-500`],[1,`bg-base-200`,`w-full`,`flex-1`],[1,`my-3`,`flex`,`h-full`,`w-full`,`flex-col`,`items-center`,`justify-center`,`space-y-4`],[1,`top-box-shadow`,`border-base-200`,`flex`,`flex-col`,`items-center`,`justify-center`,`border-t`,`py-1`],[1,`h-1/2`,`w-full`,`flex-1`,`px-2`,`pb-2`],[1,`flex`,`flex-col`,`space-y-2`],[`appearance`,`outline`,1,`mr-2`,`ml-auto`,`flex`,`text-sm`],[3,`space`,`selected`],[3,`selectedChange`,`space`,`selected`],[3,`ngModelChange`,`ngModel`],[3,`value`],[1,`bg-base-200`,`flex`,`h-full`,`w-full`,`items-center`,`justify-center`,`rounded-sm`,`opacity-30`],[1,``],[3,`diameter`],[1,`my-6`,`flex`,`h-full`,`w-full`,`flex-col`,`items-center`,`justify-center`,`space-y-2`,`p-2`,`text-center`],[1,`h-full`,`text-center`],[1,`p-2`,`text-center`,`text-sm`,`opacity-60`],[1,`text-sm`,3,`space`,`selected`],[1,`text-sm`,3,`selectedChange`,`space`,`selected`],[1,`relative`,`m-6`,`max-w-screen`],[`appearance`,`outline`,1,`m-3`,`ml-auto`,`flex`,`text-sm`],[1,`relative`,`m-3`,`h-96`,`max-w-screen`],[1,`relative`,`m-3`,`h-48`,`max-w-screen`],[1,`m-1`,`max-w-screen`,`p-1`,3,`src`,`styles`,`features`,`actions`],[`matRipple`,``,`type`,`submit`,1,`open-details-button`,`border-secondary`,`bg-secondary`,`my-1`,`w-[300px]`,3,`click`]],template:function(a,i){a&1&&(ea(0,`div`,0)(1,`div`,1)(2,`header`,2)(3,`div`,3)(4,`h2`,4),f_(5,`Find Space`),gd(),ea(6,`button`,5),ay(`click`,function(){return i.closeModal()}),ea(7,`icon`),f_(8,`close`),gd()()(),ea(9,`div`,6)(10,`button`,7),ay(`click`,function(){return i.openFilter()}),f_(11,` Filters `),DT(12,qt,2,1,`span`),gd(),ea(13,`div`,8)(14,`button`,9),A_(15,`translate`),ay(`click`,function(){return i.view.set(`list`)}),ea(16,`icon`),f_(17,`list`),gd()(),ea(18,`button`,10),A_(19,`translate`),ay(`click`,function(){return i.view.set(`map`)}),ea(20,`icon`),f_(21,`map`),gd()()()()(),ea(22,`main`,11),DT(23,ti,2,1)(24,ii,4,2,`div`,12),gd()()(),ea(25,`div`,13)(26,`section`,14)(27,`div`,15)(28,`div`,16)(29,`button`,17),ay(`click`,function(){return i.closeModal()}),ea(30,`icon`,18),f_(31,`close`),gd()(),ea(32,`span`,19),f_(33,` Find Space`),gd()(),ea(34,`div`,20)(35,`div`,21)(36,`button`,22),ay(`click`,function(){return i.openFilter()}),ea(37,`span`),f_(38,`Filter`),gd(),DT(39,ni,2,1,`span`),gd()(),ea(40,`div`,23)(41,`button`,9),A_(42,`translate`),ay(`click`,function(){return i.view.set(`list`)}),ea(43,`icon`),f_(44,`list`),gd()(),ea(45,`button`,10),A_(46,`translate`),ay(`click`,function(){return i.view.set(`map`)}),ea(47,`icon`),f_(48,`map`),gd()()()(),ty(49,`section`,24),ea(50,`section`,25)(51,`div`,26)(52,`span`,27),f_(53,` Results`),gd(),ea(54,`span`,28),f_(55),gd()()(),ea(56,`div`,29),DT(57,_i,2,1)(58,fi,4,1,`div`,30),gd()(),ea(59,`section`,31),DT(60,bi,4,0,`div`),gd()()()),a&2&&(Yw(12),ET(i.selected_feature_count()?12:-1),Yw(2),yy(`bg-base-100`,i.view()!==`list`)(`bg-secondary`,i.view()===`list`)(`text-secondary-content`,i.view()===`list`),ey(`matTooltip`,O_(15,34,`COMMON.LIST`)),Yw(4),yy(`bg-base-100`,i.view()!==`map`)(`bg-secondary`,i.view()===`map`)(`text-secondary-content`,i.view()===`map`),ey(`matTooltip`,O_(19,36,`COMMON.MAP`)),Yw(5),ET(i.loading()?24:23),Yw(16),ET(i.selected_feature_count()?39:-1),Yw(2),yy(`bg-base-100`,i.view()!==`list`)(`bg-secondary`,i.view()===`list`)(`text-secondary-content`,i.view()===`list`),ey(`matTooltip`,O_(42,38,`COMMON.LIST`)),Yw(4),yy(`bg-base-100`,i.view()!==`map`)(`bg-secondary`,i.view()===`map`)(`text-secondary-content`,i.view()===`map`),ey(`matTooltip`,O_(46,40,`COMMON.MAP`)),Yw(10),Ed(` `,i.spaces().length||0,` results found`),Yw(2),ET(i.loading()?58:57),Yw(3),ET(i.show_room_details()?60:-1))},dependencies:[Mt,yt$1,Dt$1,Et$1,Ji,Kt$1,qe,ui$1,hi,Oo,ut,mt,j_,T_$1,qc,Ef,Yt$1,mt$1,f],styles:[`.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]{height:2.25rem}.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle-label-content[_ngcontent-%COMP%]{line-height:2.25rem;font-size:.875rem}.mat-button-toggle-label-content[_ngcontent-%COMP%]{font-size:.875rem}.mat-button-toggle-checked[_ngcontent-%COMP%]{border:1px solid var(--%NS%secondary);border-radius:5px;box-shadow:none}.mat-focus-indicator[_ngcontent-%COMP%]{border:none}
/*# sourceMappingURL=find-space.component.css.map */`]})}}return t})();export{xo as FindSpaceComponent};
//# debugId=0613c56b-35d0-52f8-b1d9-9ebc205bd4d7
//# sourceMappingURL=find-space.component-CXccb4nr.js.map