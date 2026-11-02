import{n as m,t as l}from"./chunk-DzscigDP.js";import{$r as w,$t as Ym,A as FT,B as IT,Br as sy,C as Dd,Ct as Rp,E as Dy,Er as pT,In as fy,Kn as hT,Mt as T_,O as Er,On as ea,Or as pt$1,Pr as r_,Qr as vy,S as Db,Sn as dT,Sr as ny,St as Re,Tt as ST,U as JS,Wr as u_,Xn as he$1,Y as Kn,Yn as hd,Z as Lm,_ as Cy,_t as Qm,an as Zm,at as OT,bt as RT,ci as xt$1,dt as Pd,ei as w_,en as Yo,et as N,f as BH,fn as b_,hr as m_,ii as xC,j as Fy,kt as Ss,li as y,ni as wy,nt as NT,s as $w,si as xT,ti as wv,u as Ap,ur as lT,vt as RC,xn as dS,zn as gT,zr as sg,zt as VH}from"./chunk-w_clFm31.js";import{N as Mu,an as uc,b as Hf,qt as pi$1}from"./chunk-BFPoFtKo.js";import{C as ge,E as jt$1,F as tr,N as sr,a as D,j as qs,m as Tt$1,o as Dt$1}from"./chunk-B17E2uQY.js";import{r as V}from"./chunk-D4OXEdLT.js";import{Gt as ka,It as io,Tt as dm,gt as am,in as rm,k as Ia,nt as Uc,on as sm,sn as st,x as Gc}from"./chunk-Cdo8uxQf.js";import{f as Xr,i as G,n as f}from"./main.js";import"./chunk-C57z-79G.js";import{n as mt$1,t as Yt$1}from"./chunk-tJTlzMN8.js";import{a as de$1,l as rt}from"./chunk-Bw_BWfKN.js";import{b as Rs,g as Ls,m as Ia$1,s as Cn}from"./chunk-CDYHAenc.js";import"./chunk-O9IW0Rrj.js";import{i as Ui}from"./chunk-BfGE40Vm.js";import"./chunk-HGD3LSBn.js";import{n as Z,t as J}from"./chunk-DnsCvTD5.js";import{t as Ui$1}from"./chunk-B-hFjasD.js";import"./chunk-DPlIjChK.js";import{t as O}from"./chunk-C2sEMKyZ.js";import{n as sn,r as yi,t as ki}from"./chunk-CyNud8G2.js";import{t as O$1}from"./chunk-Cjr3v4IL.js";import{n as W,r as d,t as K}from"./chunk-CrLQqBZ42.js";import{t as z}from"./chunk-DgOiY8gk2.js";import{t as p}from"./chunk-ARwMsEJY2.js";var ht=[`button`];var vt=[`*`];function xt(t,s){if(t&1&&(ea(0,`div`,2),Qm(1,`mat-pseudo-checkbox`,6),hd()),t&2){let e=ST();$w(),Ym(`disabled`,e.disabled)}}var St=new w(`MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS`,{providedIn:`root`,factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})});var Ct=new w(`MatButtonToggleGroup`);var he=class{source;value;constructor(s,e){this.source=s,this.value=e}};var yt=(()=>{class t{_changeDetectorRef=y(Pd);_elementRef=y(Kn);_focusMonitor=y(jt$1);_idGenerator=y(ge);_animationDisabled=Dt$1();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new xt$1;constructor(){y(D).load(tr);let e=y(Ct,{optional:!0}),a=y(new Fy(`tabindex`),{optional:!0})||``,i=y(St,{optional:!0});this._tabIndex=pt$1(parseInt(a)||0),this.buttonToggleGroup=e,this._appearance=i&&i.appearance?i.appearance:`standard`,this._disabledInteractive=i?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId(`mat-button-toggle-`),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add(`mat-button-toggle-animations-enabled`),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let a=this.buttonToggleGroup._buttonToggles.find(i=>i.tabIndex===0);a&&(a.tabIndex=-1),this.tabIndex=0}this.change.emit(new he(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static ɵfac=function(a){return new(a||t)};static ɵcmp=Db({type:t,selectors:[[`mat-button-toggle`]],viewQuery:function(a,i){if(a&1&&sy(ht,5),a&2){let d;RT(d=OT())&&(i._buttonElement=d.first)}},hostAttrs:[`role`,`presentation`,1,`mat-button-toggle`],hostVars:14,hostBindings:function(a,i){a&1&&ny(`focus`,function(){return i.focus()}),a&2&&(Zm(`aria-label`,null)(`aria-labelledby`,null)(`id`,i.id)(`name`,null),fy(`mat-button-toggle-standalone`,!i.buttonToggleGroup)(`mat-button-toggle-checked`,i.checked)(`mat-button-toggle-disabled`,i.disabled)(`mat-button-toggle-disabled-interactive`,i.disabledInteractive)(`mat-button-toggle-appearance-standard`,i.appearance===`standard`))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],id:`id`,name:`name`,value:`value`,tabIndex:`tabIndex`,disableRipple:[2,`disableRipple`,`disableRipple`,dS],appearance:`appearance`,checked:[2,`checked`,`checked`,dS],disabled:[2,`disabled`,`disabled`,dS],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,dS]},outputs:{change:`change`},exportAs:[`matButtonToggle`],ngContentSelectors:vt,decls:7,vars:13,consts:[[`button`,``],[`type`,`button`,1,`mat-button-toggle-button`,`mat-focus-indicator`,3,`click`,`id`,`disabled`],[1,`mat-button-toggle-checkbox-wrapper`],[1,`mat-button-toggle-label-content`],[1,`mat-button-toggle-focus-overlay`],[`matRipple`,``,1,`mat-button-toggle-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,3,`disabled`]],template:function(a,i){if(a&1&&(NT(),ea(0,`button`,1,0),ny(`click`,function(){return i._onButtonClick()}),lT(2,xt,2,1,`div`,2),ea(3,`span`,3),xT(4),hd()(),Qm(5,`span`,4)(6,`span`,5)),a&2){let d=FT(1);Ym(`id`,i.buttonId)(`disabled`,i.disabled&&!i.disabledInteractive||null),Zm(`role`,i.isSingleSelector()?`radio`:`button`)(`tabindex`,i.disabled&&!i.disabledInteractive?-1:i.tabIndex)(`aria-pressed`,i.isSingleSelector()?null:i.checked)(`aria-checked`,i.isSingleSelector()?i.checked:null)(`name`,i._getButtonName())(`aria-label`,i.ariaLabel)(`aria-labelledby`,i.ariaLabelledby)(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null),$w(2),dT(i.buttonToggleGroup&&(!i.buttonToggleGroup.multiple&&!i.buttonToggleGroup.hideSingleSelectionIndicator||i.buttonToggleGroup.multiple&&!i.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),$w(4),Ym(`matRippleTrigger`,d)(`matRippleDisabled`,i.disableRipple||i.disabled)}},dependencies:[qs,ka],styles:[`.mat-button-toggle-standalone,
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
`],encapsulation:2})}return t})();var mt=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵmod=Yo({type:t});static ɵinj=Er({imports:[sr,yt,Tt$1]})}return t})();var de=()=>({standalone:!0});function Tt(t,s){t&1&&(ea(0,`label`,11),r_(1,` Location `),hd())}function Et(t,s){if(t&1&&(ea(0,`mat-option`,27),r_(1),hd()),t&2){let e=s.$implicit;Ym(`value`,e),$w(),Dd(` `,e.display_name||e.name,` `)}}function Ft(t,s){if(t&1){let e=IT();ea(0,`mat-form-field`,12)(1,`mat-select`,26),ny(`ngModelChange`,function(i){Ap(e);return Rp(ST(2).setBuilding(i))}),hT(2,Et,2,2,`mat-option`,27,pT),hd(),xC(),hd()}if(t&2){let e=ST(2);$w(),Ym(`ngModel`,e.building())(`ngModelOptions`,m_(2,de)),RC(),$w(),gT(e.buildings())}}function Nt(t,s){if(t&1){let e=IT();ea(0,`div`)(1,`div`,28)(2,`span`),r_(3),hd(),ea(4,`mat-checkbox`,29),Cy(`ngModelChange`,function(i){let d=Ap(e).$implicit;return u_(d.value,i)||(d.value=i),Rp(i)}),ny(`change`,function(){Ap(e);return Rp(ST(2).getSelectedFeatures())}),hd(),xC(),hd()()}if(t&2){let e=s.$implicit;$w(3),Dd(` `,e.name),$w(),wy(`ngModel`,e.value),Ym(`ngModelOptions`,m_(3,de)),RC()}}function It(t,s){if(t&1){let e=IT();ea(0,`form`,1),ny(`ngSubmit`,function(){Ap(e);return Rp(ST().applyFilters())}),ea(1,`section`,2)(2,`div`,3)(3,`div`,4)(4,`button`,5),ny(`click`,function(){Ap(e);return Rp(ST().closeModal())}),ea(5,`icon`,6),r_(6,`close`),hd()(),ea(7,`span`,7),r_(8,` Space Filters`),hd()()()(),ea(9,`section`,8)(10,`div`,3)(11,`div`,9),r_(12,`Details`),hd(),ea(13,`div`,10),lT(14,Tt,2,0,`label`,11),lT(15,Ft,4,3,`mat-form-field`,12),ea(16,`div`,10)(17,`label`,11),r_(18,` Date `),hd(),Qm(19,`a-date-field`,13),xC(),ea(20,`div`,14)(21,`div`,15)(22,`label`,11),r_(23,` Start Time* `),hd(),ea(24,`a-time-field`,16),ny(`ngModelChange`,function(i){Ap(e);return Rp(ST().model.update(W=>m(l({},W),{date:i})))}),hd(),xC(),hd(),ea(25,`div`,17)(26,`label`,11),r_(27,` End Time* `),hd(),Qm(28,`a-duration-field`,18),xC(),hd()()()()()(),ea(29,`section`,8)(30,`div`,3)(31,`div`,9),r_(32,`Favourites`),hd(),ea(33,`div`,19)(34,`span`),r_(35,`Only show favourite rooms`),hd(),ea(36,`mat-checkbox`,20),Cy(`ngModelChange`,function(i){Ap(e);let d=ST();return u_(d.show_favourites,i)||(d.show_favourites=i),Rp(i)}),hd(),xC(),hd()()(),ea(37,`section`,21)(38,`div`,22)(39,`div`,9),r_(40,`Features`),hd(),hT(41,Nt,5,4,`div`,null,pT),hd()(),ea(43,`section`,23)(44,`button`,24)(45,`span`,25),r_(46,`Apply Filters`),hd()()()()}if(t&2){let e=ST();$w(14),dT(e.has_multiple_buildings()?14:-1),$w(),dT(e.has_multiple_buildings()?15:-1),$w(4),Ym(`from`,e.minDate)(`formField`,e.form.date),RC(),$w(5),Ym(`ngModel`,e.model().date)(`ngModelOptions`,m_(13,de)),RC(),$w(4),Ym(`time`,e.model().date)(`max`,600)(`min`,60)(`step`,60)(`formField`,e.form.duration),RC(),$w(8),wy(`ngModel`,e.show_favourites),Ym(`ngModelOptions`,m_(14,de)),RC(),$w(5),gT(e.features())}}var pt=(()=>{class t{constructor(){this.data=y(K),this._bottomsheetRef=y(d),this._featuresFilterService=y(p),this._state=y(Ui),this._org=y(st),this.buildings=this._org.building_list,this.building=this._org.active_building,this.features=this._featuresFilterService.features,this.show_favourites=this._featuresFilterService.show_favourites,this.has_multiple_buildings=Re(()=>this.buildings().length>1),this.form=this._state.form,this.model=this._state.model,this.minDate=Date.now(),this.setBuilding=e=>this._org.building=e}applyFilters(){this._featuresFilterService.applyFilter(),this._bottomsheetRef.dismiss(!0)}getSelectedFeatures(){this._featuresFilterService.getSelectedFeatures()}closeModal(){this._bottomsheetRef.dismiss()}static{this.ɵfac=function(a){return new(a||t)}}static{this.ɵcmp=Db({type:t,selectors:[[``,`filter-space`,``]],decls:2,vars:1,consts:[[1,`z-0`,`m-0`,`flex`,`min-h-[800px]`,`flex-1`,`flex-col`,`overflow-y-auto`],[3,`ngSubmit`],[1,`border-base-200`,`flex`,`flex-col`,`items-center`,`border-b`,`py-5`],[1,`flex`,`w-[calc(100%-2rem)]`,`max-w-90`,`flex-col`,`self-center`],[1,`flex`,`flex-row`,`items-center`],[`icon`,``,`matRipple`,``,`type`,`button`,3,`click`],[1,`flex`,`items-center`,`justify-center`,`text-3xl`,`text-gray-700`],[1,`ml-6`,`flex`,`items-center`,`text-xl`,`font-bold`],[1,`border-base-200`,`flex`,`flex-col`,`items-center`,`border-b`],[1,`my-2`,`text-lg`],[1,`flex`,`flex-col`],[1,`mb-1`,`text-sm`,`font-bold`,`text-gray-700`],[`overlay`,``,`buildings`,``,`appearance`,`outline`,1,`w-full`],[3,`from`,`formField`],[1,`flex`,`w-full`,`flex-row`,`space-x-2`],[1,`flex`,`w-1/3`,`flex-1`,`flex-col`],[3,`ngModelChange`,`ngModel`,`ngModelOptions`],[1,`ml-auto`,`flex`,`w-1/3`,`flex-1`,`flex-col`],[3,`time`,`max`,`min`,`step`,`formField`],[1,`mb-2`,`flex`,`flex-row`],[1,`ml-auto`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[1,`border-base-200`,`flex`,`flex-col`],[1,`mx-auto`,`w-[calc(100%-2rem)]`,`max-w-90`],[1,`top-box-shadow`,`border-base-200`,`mt-5`,`flex`,`flex-col`,`items-center`,`justify-center`,`border-t`,`py-3`],[`btn`,``,`matRipple`,``,`type`,`submit`,1,`filter-button`,`max-w-[calc(100%`,`-`,`2rem)]`,`border-secondary`,`bg-secondary`,`mx-auto`,`min-w-[300px]`,`text-center`,`text-sm`],[1,``],[`placeholder`,`Select Building...`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[3,`value`],[1,`mb-1`,`flex`,`flex-row`],[1,`checkbox`,`ml-auto`,3,`ngModelChange`,`change`,`ngModel`,`ngModelOptions`]],template:function(a,i){a&1&&(ea(0,`div`,0),lT(1,It,47,15,`form`),hd()),a&2&&($w(),dT(i.form?1:-1))},dependencies:[sr,qs,Ia$1,Cn,dm,am,rm,sm,Gc,Uc,Xr,sn,yi,ki,de$1,rt,Ls,Rs,Ia,Hf],encapsulation:2})}}return t})();var ut=(()=>{class t{constructor(){this._org=y(st),this.space=VH(void 0),this.selected=VH(!1),this.selectedChange=BH(),this.level_name=Re(()=>{let e=this._org.levelWithID(this.space()?.zones||[]);return e?.display_name||e?.name||``}),this.space_name=Re(()=>this.space()?.display_name||this.space()?.name||``),this.capacity=Re(()=>this.space()?.capacity||0),this.toggleSelected=()=>this.selectedChange.emit(!this.selected())}static{this.ɵfac=function(a){return new(a||t)}}static{this.ɵcmp=Db({type:t,selectors:[[`find-space-item`]],inputs:{space:[1,`space`],selected:[1,`selected`]},outputs:{selectedChange:`selectedChange`},decls:11,vars:5,consts:[[`mat-ripple`,``,1,`border-base-300`,`bg-base-100`,`hover:border-info`,`mx-auto`,`flex`,`w-full`,`flex-col`,`space-y-2`,`rounded-lg`,`border`,`p-4`,3,`click`],[1,`flex`,`w-full`,`flex-row`,`items-center`,`space-x-2`],[1,`text-lg`]],template:function(a,i){a&1&&(ea(0,`button`,0),ny(`click`,function(){return i.toggleSelected()}),ea(1,`div`,1)(2,`icon`,2),r_(3,`meeting_room`),hd(),ea(4,`div`),r_(5),hd()(),ea(6,`div`,1)(7,`icon`,2),r_(8,`group`),hd(),ea(9,`div`),r_(10),hd()()()),a&2&&(fy(`bg-base-200`,i.selected()),$w(5),Dy(` `,i.level_name(),`, `,i.space_name(),` `),$w(5),Dd(``,i.capacity(),` People`))},dependencies:[sr,qs,Hf],styles:[`[_nghost-%COMP%]{padding:0 .5rem}
/*# sourceMappingURL=find-space-item.component.css.map */`]})}}return t})();function Rt(t,s){if(t&1&&(ea(0,`div`,14)(1,`div`,7)(2,`icon`,12),r_(3,`people`),hd()(),ea(4,`div`,7)(5,`span`,19),r_(6),hd()()()),t&2){let e=s.$implicit;$w(6),vy(e?.email)}}var gt=(()=>{class t{constructor(){this.data=y(K),this._bottomSheetRef=y(d),this._state=y(Ui),this._roomConfirmService=y(j),this.form=this._state.form,this.model=this._state.model,this.loading=this._state.loading,this.show_submit_button=pt$1(!0),this.space=pt$1(this.data),this._form_value=this.model,this.unix_time=Re(()=>this._form_value()?.date),this.start_time=Re(()=>new Date(this.unix_time()).toLocaleTimeString(`en-US`,{hour:`numeric`,minute:`numeric`,hour12:!0})),this.end_time=Re(()=>{let e=this._form_value()?.duration,a=this.unix_time()+e*60*1e3;return new Date(a).toLocaleTimeString(`en-US`,{hour:`numeric`,minute:`numeric`,hour12:!0})}),this.attendees=Re(()=>this._form_value()?.attendees||[]),this.creator=Re(()=>this._form_value()?.creator||``),this.title=Re(()=>this._form_value()?.title)}closeModal(){this._bottomSheetRef.dismiss(`cancel`)}async confirmBooking(){this.show_submit_button.set(!1),await this._roomConfirmService.bookRoom(this.space())?this._bottomSheetRef.dismiss(!0):this.show_submit_button.set(!0)}static{this.ɵfac=function(a){return new(a||t)}}static{this.ɵcmp=Db({type:t,selectors:[[`room-confirm`]],decls:63,vars:11,consts:[[1,`z-0`,`mx-auto`,`flex`,`min-h-[800px]`,`w-[calc(100%-2rem)]`,`w-full`,`flex-1`,`flex-col`,`overflow-y-auto`],[1,`border-base-200`,`flex`,`flex-col`,`border-b`,`py-2`],[1,`justify-content`,`flex`,`flex-row`,`items-center`,`space-x-4`],[`icon`,``,`matRipple`,``,3,`click`],[1,`flex`,`items-center`,`justify-center`,`text-3xl`,`text-gray-700`],[1,`mr-auto`,`text-lg`,`font-bold`],[1,`border-base-200`,`mt-4`,`flex`,`flex-row`,`space-x-4`,`border-b`,`pb-4`],[1,`flex`,`flex-col`],[1,`text-base`],[`src`,`assets/tick.svg`],[1,`flex`,`text-base`,`font-bold`,`text-gray-700`],[1,`mt-2`,`flex`,`items-center`,`text-sm`,`text-gray-700`],[1,`flex`,`items-center`],[1,`flex`],[1,`mt-2`,`flex`,`flex-row`,`items-center`,`text-sm`,`text-gray-700`],[1,`mt-4`,`flex`,`flex-row`,`space-x-4`,`pb-4`],[1,`top-box-shadow`,`border-base-200`,`-mx-4`,`mt-5`,`mb-10`,`flex`,`flex-col`,`items-center`,`border-t`,`p-3`],[`matRipple`,``,1,`border-secondary`,`bg-secondary`,`mx-4`,`ml-2`,`w-[300px]`,3,`click`,`disabled`],[1,``],[1,`w-full`]],template:function(a,i){a&1&&(ea(0,`div`,0)(1,`section`,1)(2,`div`,2)(3,`button`,3),ny(`click`,function(){return i.closeModal()}),ea(4,`icon`,4),r_(5,`close`),hd()(),ea(6,`span`,5),r_(7,` Confirm Room Booking`),hd()()(),ea(8,`section`,6)(9,`div`,7)(10,`span`,8),Qm(11,`img`,9),hd()(),ea(12,`div`,7)(13,`span`,10),r_(14),hd(),ea(15,`div`,11)(16,`icon`,12),r_(17,`calendar_today`),hd(),ea(18,`span`,13),r_(19),w_(20,`date`),hd()(),ea(21,`div`,11)(22,`icon`,12),r_(23,`schedule`),hd(),ea(24,`span`,13),r_(25),hd()()()(),ea(26,`section`,6)(27,`div`,7)(28,`span`,8),Qm(29,`img`,9),hd()(),ea(30,`div`,7)(31,`span`,10),r_(32,`Attendees `),hd(),hT(33,Rt,7,1,`div`,14,pT),ea(35,`div`,14)(36,`div`,7)(37,`icon`,12),r_(38,`people`),hd()(),ea(39,`div`,7)(40,`span`),r_(41),hd()()()()(),ea(42,`section`,15)(43,`div`,7)(44,`span`,8),Qm(45,`img`,9),hd()(),ea(46,`div`,7)(47,`span`,10),r_(48,`Rooms `),hd(),ea(49,`div`,11)(50,`icon`,12),r_(51,`meeting_room`),hd(),ea(52,`span`,13),r_(53),hd()(),ea(54,`div`,11)(55,`icon`,12),r_(56,`room`),hd(),ea(57,`span`,13),r_(58),hd()()()(),ea(59,`div`,16)(60,`button`,17),ny(`click`,function(){return i.confirmBooking()}),ea(61,`span`,18),r_(62,`Confirm`),hd()()()()),a&2&&($w(14),Dd(``,i.title(),` `),$w(5),Dd(` `,T_(20,8,i.unix_time(),`dd MMMM yyyy`),` `),$w(6),Dy(``,i.start_time(),` -`,i.end_time()),$w(8),gT(i.attendees()),$w(8),vy(i.creator()),$w(12),Dd(` `,i.space().name,` `),$w(5),Dd(` `,i.space().level?.name),$w(2),Ym(`disabled`,!i.show_submit_button()))},dependencies:[wv,sr,qs,Hf,JS],encapsulation:2})}}return t})();function Dt(t,s){if(t&1&&(ea(0,`section`,1),Qm(1,`img`,18),hd()),t&2){let e=ST();$w(),Ym(`source`,e.space()?.images?.[0])(`alt`,`Image of `+(e.space()?.display_name||e.space()?.name))}}function Bt(t,s){t&1&&(ea(0,`button`,5)(1,`span`,19),r_(2,`+ Add this room`),hd()())}function Vt(t,s){t&1&&(ea(0,`button`,6)(1,`span`,20),r_(2,`- Remove this room`),hd()())}function Ot(t,s){t&1&&(ea(0,`div`)(1,`icon`,10),r_(2,`panorama`),hd()())}function At(t,s){t&1&&(ea(0,`div`)(1,`icon`,10),r_(2,`video_camera_front`),hd()())}function Gt(t,s){t&1&&(ea(0,`div`)(1,`icon`,10),r_(2,`contact_phone`),hd()())}function jt(t,s){t&1&&(ea(0,`div`)(1,`icon`,10),r_(2,`drive_file_rename_outline`),hd()())}function Lt(t,s){t&1&&(ea(0,`div`)(1,`icon`,10),r_(2,`draw`),hd()())}function Pt(t,s){t&1&&(ea(0,`div`)(1,`icon`,10),r_(2,`nest_remote_comfort_sensor`),hd()())}function zt(t,s){if(t&1&&(ea(0,`div`,22)(1,`div`),lT(2,Ot,3,0,`div`)(3,At,3,0,`div`)(4,Gt,3,0,`div`)(5,jt,3,0,`div`)(6,Lt,3,0,`div`)(7,Pt,3,0,`div`),hd(),ea(8,`span`,11),r_(9),hd()()),t&2){let e,a=s.$implicit;$w(2),dT((e=a)===`Views`?2:e===`Projector`?3:e===`VidConf`?4:e===`Whiteboard`?5:e===`Jamboard`?6:e===`Wifi`?7:-1),$w(7),Dd(` `,a,` `)}}function Ut(t,s){if(t&1&&(ea(0,`section`,14)(1,`span`,21),r_(2,`Room Features`),hd(),hT(3,zt,10,2,`div`,22,pT),hd()),t&2){let e=ST();$w(3),gT(e.space()?.feature_list)}}function Wt(t,s){if(t&1){let e=IT();ea(0,`button`,23),ny(`click`,function(){Ap(e);return Rp(ST().back())}),ea(1,`span`,24),r_(2,`Back`),hd()()}}function Ht(t,s){if(t&1){let e=IT();ea(0,`button`,25),ny(`click`,function(){Ap(e);return Rp(ST().back())}),ea(1,`span`,19),r_(2,`Confirm`),hd()()}}var _t=(()=>{class t{constructor(){this.data=y(K),this._bottomSheetRef=y(d),this.space=pt$1(this.data),this.room_added=pt$1(!1)}selectRoom(){this.room_added.update(e=>!e)}back(){this.room_added()?this._bottomSheetRef.dismiss(this.space()):this._bottomSheetRef.dismiss(null)}static{this.ɵfac=function(a){return new(a||t)}}static{this.ɵcmp=Db({type:t,selectors:[[`placeos-room-details`]],decls:25,vars:10,consts:[[1,`z-0`,`flex`,`min-h-[800px]`,`w-full`,`flex-1`,`flex-col`,`overflow-hidden`],[1,`bg-base-200`,`flex`,`min-h-[300px]`,`items-center`,`justify-center`,`text-gray-500`],[1,`border-base-200`,`mx-auto`,`flex`,`w-[calc(100%-2rem)]`,`flex-col`,`border-b`],[1,`mt-3`,`text-lg`,`font-bold`],[1,`w-max-[375px]`,3,`click`],[`btn`,``,`matRipple`,``,1,`border-secondary`,`bg-secondary`,`m-3`,`mx-auto`,`w-full`],[`btn`,``,`matRipple`,``,1,`border-base-200`,`bg-base-200`,`m-3`,`mx-auto`,`w-full`],[1,`border-base-200`,`mx-auto`,`flex`,`w-[calc(100%-2rem)]`,`flex-col`,`border-b`,`p-3`,`pl-0`],[1,`text-base`,`font-bold`],[1,`mt-3`,`flex`,`flex-row`,`items-center`,`text-sm`],[1,`text-info`],[1,`text-sm`,`text-gray-500`],[1,`mt-1`,`flex`,`flex-row`,`items-center`,`text-sm`],[1,`text-gray-500`],[1,`mx-auto`,`flex`,`w-[calc(100%-2rem)]`,`flex-col`,`py-3`],[1,`top-box-shadow`,`border-base-200`,`bg-base-100`,`flex`,`flex-col`,`border-t`,`p-3`],[`btn`,``,`matRipple`,``,1,`border-secondary`,`bg-base-100`,`mx-auto`,`w-full`],[`btn`,``,`matRipple`,``,1,`border-secondary`,`bg-secondary`,`mx-auto`,`w-full`],[`auth`,``,`width`,`100%`,`height`,`100%`,1,`z-20`,`flex`,`rounded-lg`,3,`source`,`alt`],[1,`text-white`],[1,`text-black`],[1,`mb-3`,`text-base`,`font-bold`],[1,`mb-1`,`flex`,`w-full`,`flex-row`],[`btn`,``,`matRipple`,``,1,`border-secondary`,`bg-base-100`,`mx-auto`,`w-full`,3,`click`],[1,`text-secondary`],[`btn`,``,`matRipple`,``,1,`border-secondary`,`bg-secondary`,`mx-auto`,`w-full`,3,`click`]],template:function(a,i){a&1&&(ea(0,`div`,0),lT(1,Dt,2,2,`section`,1),ea(2,`section`,2)(3,`span`,3),r_(4),hd(),ea(5,`div`,4),ny(`click`,function(){return i.selectRoom()}),lT(6,Bt,3,0,`button`,5),lT(7,Vt,3,0,`button`,6),hd()(),ea(8,`section`,7)(9,`span`,8),r_(10,`Details`),hd(),ea(11,`div`,9)(12,`icon`,10),r_(13,`people`),hd(),ea(14,`span`,11),r_(15),hd()(),ea(16,`div`,12)(17,`icon`,10),r_(18,`room`),hd(),ea(19,`span`,13),r_(20),hd()()(),lT(21,Ut,5,0,`section`,14),ea(22,`div`,15),lT(23,Wt,3,0,`button`,16),lT(24,Ht,3,0,`button`,17),hd()()),a&2&&($w(),dT(i.space()?.images?.length>0?1:-1),$w(3),Dd(` `,i.space()?.name),$w(2),dT(i.room_added()?-1:6),$w(),dT(i.room_added()?7:-1),$w(8),Dd(` `,i.space()?.capacity,` People`),$w(5),Dy(` `,i.space()?.level?.name,`, `,i.space()?.level?.parent_id),$w(),dT(i.space()?.feature_list.length>0?21:-1),$w(2),dT(i.room_added()?-1:23),$w(),dT(i.room_added()?24:-1))},dependencies:[sr,qs,Hf,O],encapsulation:2})}}return t})();var j=(()=>{class t{get form(){return this._state.form}get model(){return this._state.model}constructor(){this._bottomSheet=y(W),this._router=y(V),this._state=y(Ui),this._spaces=y(z),this._space_pipe=new G,this.book_space={},this.space_list=[],this.selected_space=pt$1(null),this.book_space={},(this._state.model().resources||[]).forEach(a=>this.book_space[a.id]=!0),this.space_list=this._spaces.filter(a=>this.book_space[a.id])}openRoomDetail(e=this.selected_space()){this._bottomSheet.open(_t,{data:e}).afterDismissed().subscribe(i=>{i&&this.openRoomConfirm(i)})}openRoomConfirm(e){e&&this._bottomSheet.open(gt,{data:e})}updateSelectedSpace(e){this.selected_space.set(e)}handleBookEvent(e,a=!0){this.book_space={},this.book_space[e.id]=a}async bookRoom(e){if(!e)return!1;this.handleBookEvent(e);let a=Object.keys(this.book_space).filter(d=>this.book_space[d]),i=await Promise.all(a.map(d=>this._space_pipe.transform(d)));return this.model.update(d=>m(l({},d),{resources:i,system:i[0]})),this.space_list=this._spaces.filter(d=>this.book_space[d.id]),this.postForm()}async postForm(){try{return await this._state.postForm(),await this._router.navigate([`/confirm/success`]),!0}catch(e){return uc(pi$1(e)||`Unable to book the room.`),!1}}static{this.ɵfac=function(a){return new(a||t)}}static{this.ɵprov=N({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();function $t(t,s){if(t&1&&Qm(0,`img`,4),t&2)Ym(`source`,ST().space()?.images?.[0])}function Qt(t,s){t&1&&(ea(0,`div`)(1,`icon`,14),r_(2,`image`),hd()())}var ft=(()=>{class t{constructor(){this.data=y(K),this._bottomSheetRef=y(d),this._roomConfirmService=y(j),this.space=pt$1(this.data)}openRoomDetail(){this._roomConfirmService.openRoomDetail(this.space())}cancel(){this._bottomSheetRef.dismiss(null)}static{this.ɵfac=function(a){return new(a||t)}}static{this.ɵcmp=Db({type:t,selectors:[[`placeos-room-tile`]],decls:23,vars:6,consts:[[1,`z-0`,`flex`,`min-h-min`,`w-full`,`min-w-[400px]`,`flex-1`,`flex-col`,`overflow-hidden`],[1,`justify-content`,`mx-auto`,`flex`,`w-[calc(100%-2rem)]`,`max-w-[375px]`,`items-center`,3,`click`],[1,`bg-base-100`,`mx-4`,`flex`,`h-full`,`w-full`,`flex-col`,`rounded-lg`,`border`],[1,`bg-base-200`,`m-3`,`flex`,`h-44`,`items-center`,`justify-center`,`rounded-lg`,`text-gray-500`],[`auth`,``,`alt`,`image of building `,`width`,`100%`,`height`,`100%`,1,`z-20`,`flex`,`rounded-lg`,3,`source`],[1,`mb-4`,`flex`,`flex-col`],[1,`mx-3`,`mt-1`,`text-xl`,`font-bold`],[1,`mx-3`,`mt-1`,`flex`,`flex-row`,`items-center`,`text-base`],[1,`text-info`],[1,`text-gray-500`],[1,`text-info`,`flex`,`items-center`],[1,`top-box-shadow`,`border-base-200`,`bg-base-100`,`-mx-4`,`mt-5`,`mb-10`,`flex`,`h-full`,`flex-col`,`items-center`,`border-t`,`p-3`],[`btn`,``,`matRipple`,``,1,`border-secondary`,`bg-base-100`,`mx-4`,`ml-2`,`w-[460px]`,3,`click`],[1,`text-secondary`],[1,`text-[8rem]`]],template:function(a,i){a&1&&(ea(0,`div`,0)(1,`div`,1),ny(`click`,function(){return i.openRoomDetail()}),ea(2,`div`,2)(3,`div`,3),lT(4,$t,1,1,`img`,4),lT(5,Qt,3,0,`div`),hd(),ea(6,`div`,5)(7,`span`,6),r_(8),hd(),ea(9,`div`,7)(10,`icon`,8),r_(11,`room`),hd(),ea(12,`span`,9),r_(13),hd()(),ea(14,`div`,7)(15,`icon`,10),r_(16,`people`),hd(),ea(17,`span`,9),r_(18),hd()()()()()(),ea(19,`div`,11)(20,`button`,12),ny(`click`,function(){return i.cancel()}),ea(21,`span`,13),r_(22,`Back`),hd()()()),a&2&&($w(4),dT(i.space()?.images?.length>0?4:-1),$w(),dT(i.space()?.images?.length==0?5:-1),$w(3),Dd(` `,i.space()?.name),$w(5),Dy(` `,i.space()?.level?.name,`, `,i.space()?.level?.parent_id),$w(5),Dd(` `,i.space()?.capacity))},dependencies:[sr,qs,Hf,O],encapsulation:2})}}return t})();var bt=(()=>{class t extends Mu{constructor(){super(...arguments),this._bottomSheet=y(W),this._roomConfirmService=y(j),this.style_map={},this.map_features=pt$1([]),this.map_actions=pt$1([]),this.map_loaded=pt$1(!1),this.features_loaded=pt$1(!1),this.selected_space=this._roomConfirmService.selected_space,this.locatable_spaces=pt$1([]),this.maps_list=pt$1([])}async locateSpaces(e){let a=e||[];this.locatable_spaces.set(a.map(i=>({id:i.id,name:i.name,map_id:i.map_id,level:i.level}))),await this.loadMap(),this.timeout(`init`,()=>{this.processFeature()},1e3),this.processStyles(),this.map_actions.set(a.map(i=>({id:i.map_id,action:`click`,callback:()=>{this.openRoomTile(i)}})))}async loadMap(){this.map_loaded.set(!1);let e=this.locatable_spaces().map(a=>({map_id:a.level.map_id,level:a.level.name}));this.maps_list.set([...new Map(e.map(a=>[a.map_id,a])).values()]),this.map_loaded.set(!0)}processFeature(){this.features_loaded.set(!1);let e=this.locatable_spaces().map(a=>({location:a.map_id,content:O$1,data:{name:a.name},z_index:99,zoom:100}));this.map_features.set(e),this.features_loaded.set(!0)}processStyles(){let e={};e[`#zones`]={display:`none`},e[`#Zones`]={display:`none`},this.style_map=e}openRoomTile(e){this._bottomSheet.open(ft,{panelClass:`bottom-sheet-transparent`,data:e}),this._roomConfirmService.handleBookEvent(e,!0)}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=sg(t)))(i||t)}})()}static{this.ɵprov=N({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();function qt(t,s){if(t&1&&(ea(0,`span`),r_(1),hd()),t&2){let e=ST();$w(),Dd(` (`,e.selected_feature_count(),` applied) `)}}function Zt(t,s){if(t&1){let e=IT();ea(0,`find-space-item`,36),ny(`selectedChange`,function(i){let d=Ap(e).$implicit;return Rp(ST(4).handleBookEvent(d,i))}),hd()}if(t&2){let e=s.$implicit,a=ST(4);Ym(`space`,e)(`selected`,a.book_space()[e.id])}}function Jt(t,s){if(t&1&&(ea(0,`div`,33),hT(1,Zt,1,2,`find-space-item`,35,pT),hd()),t&2){let e=ST(3);$w(),gT(e.spaces())}}function Kt(t,s){if(t&1&&(ea(0,`mat-option`,38),r_(1),hd()),t&2){let e=s.$implicit;Ym(`value`,e),$w(),vy(e.level)}}function Xt(t,s){if(t&1){let e=IT();ea(0,`mat-form-field`,34)(1,`mat-select`,37),ny(`ngModelChange`,function(i){Ap(e);return Rp(ST(3).updateSelectedLevel(i))}),ea(2,`mat-option`,38),r_(3),w_(4,`translate`),hd(),hT(5,Kt,2,2,`mat-option`,38,pT),hd(),xC(),hd()}if(t&2){let e=ST(3);$w(),Ym(`ngModel`,e.selected_level()),RC(),$w(),Ym(`value`,e.maps_list()),$w(),Dd(` `,b_(4,3,`COMMON.LEVEL_ALL`),` `),$w(2),gT(e.maps_list())}}function Yt(t,s){if(t&1&&lT(0,Jt,3,0,`div`,33)(1,Xt,7,5,`mat-form-field`,34),t&2)dT(ST(2).view()===`list`?0:1)}function ei(t,s){t&1&&(ea(0,`div`,32)(1,`div`,39)(2,`p`,40),r_(3,`No spaces`),hd()()())}function ti(t,s){if(t&1&&lT(0,Yt,2,1)(1,ei,4,0,`div`,32),t&2)dT(ST().spaces().length>0?0:1)}function ii(t,s){if(t&1&&(ea(0,`div`,12),Qm(1,`mat-spinner`,41),ea(2,`p`),r_(3),hd()()),t&2){let e=ST();$w(),Ym(`diameter`,32),$w(2),vy(e.loading())}}function ni(t,s){if(t&1&&(ea(0,`span`),r_(1),hd()),t&2){let e=ST();$w(),Dd(` (`,e.selected_feature_count(),` applied) `)}}function oi(t,s){if(t&1){let e=IT();ea(0,`find-space-item`,46),ny(`selectedChange`,function(i){let d=Ap(e).$implicit;return Rp(ST(4).handleBookEvent(d,i))}),hd()}if(t&2){let e=s.$implicit,a=ST(4);Ym(`space`,e)(`selected`,a.book_space()[e.id])}}function ai(t,s){if(t&1&&(ea(0,`div`),hT(1,oi,1,2,`find-space-item`,45,pT),hd()),t&2){let e=ST(3);$w(),gT(e.spaces())}}function li(t,s){if(t&1&&(ea(0,`mat-option`,38),r_(1),hd()),t&2){let e=s.$implicit;Ym(`value`,e),$w(),vy(e.level)}}function ri(t,s){if(t&1){let e=IT();ea(0,`div`)(1,`mat-form-field`,48)(2,`mat-select`,37),ny(`ngModelChange`,function(i){Ap(e);return Rp(ST(4).updateSelectedLevel(i))}),ea(3,`mat-option`,38),r_(4),w_(5,`translate`),hd(),hT(6,li,2,2,`mat-option`,38,pT),hd(),xC(),hd()()}if(t&2){let e=ST(4);$w(2),Ym(`ngModel`,e.selected_level()),RC(),$w(),Ym(`value`,e.maps_list()),$w(),Dd(` `,b_(5,3,`COMMON.LEVEL_ALL`),` `),$w(2),gT(e.maps_list())}}function si(t,s){if(t&1&&(ea(0,`div`,50),Qm(1,`interactive-map`,51),hd()),t&2){let e=s.$implicit,a=ST(6);$w(),Ym(`src`,e?.map_id)(`styles`,a.map_styles())(`features`,a.map_features())(`actions`,a.map_actions())}}function ci(t,s){if(t&1&&(ea(0,`div`),hT(1,si,2,4,`div`,50,pT),hd()),t&2){let e=ST(5);$w(),gT(e.selected_level_maps())}}function di(t,s){if(t&1&&(ea(0,`div`,49),Qm(1,`interactive-map`,51),hd()),t&2){let e=ST(5);$w(),Ym(`src`,e.selected_map()?.map_id)(`styles`,e.map_styles())(`features`,e.map_features())(`actions`,e.map_actions())}}function mi(t,s){if(t&1&&(ea(0,`div`,47),lT(1,ci,3,0,`div`),lT(2,di,2,4,`div`,49),hd()),t&2){let e=ST(4);$w(),dT(e.selected_all_levels()?1:-1),$w(),dT(e.selected_all_levels()?-1:2)}}function pi(t,s){if(t&1&&(ea(0,`div`,43),lT(1,ri,8,5,`div`),lT(2,mi,3,2,`div`,47),hd()),t&2){let e=ST(3);$w(),dT(e.maps_list().length>1?1:-1),$w(),dT(e.selected_level()?2:-1)}}function ui(t,s){if(t&1&&(lT(0,ai,3,0,`div`),lT(1,pi,3,2,`div`,43),ea(2,`p`,44),r_(3,` End of available spaces list `),hd()),t&2){let e=ST(2);dT(e.view()===`list`?0:-1),$w(),dT(e.view()===`map`&&e.map_features().length>0?1:-1)}}function gi(t,s){t&1&&(ea(0,`div`,42)(1,`p`),r_(2,` No available spaces for selected time, capacity or level(s) `),hd()())}function _i(t,s){if(t&1&&lT(0,ui,4,2)(1,gi,3,0,`div`,42),t&2)dT(ST().spaces().length>0?0:1)}function fi(t,s){t&1&&(ea(0,`div`,30),Qm(1,`mat-spinner`,41),ea(2,`p`),r_(3,`Retrieving available spaces...`),hd()()),t&2&&($w(),Ym(`diameter`,32))}function bi(t,s){if(t&1){let e=IT();ea(0,`div`)(1,`button`,52),ny(`click`,function(){Ap(e);return Rp(ST().openRoomDetails())}),ea(2,`span`,40),r_(3,`View Room`),hd()()()}}var xo=(()=>{class t extends Mu{get form(){return this._state.form}get model(){return this._state.model}constructor(){super(),this._bottomSheet=y(W),this._org=y(st),this._spaces=y(z),this._state=y(Ui),this._featuresFilterService=y(p),this._mapService=y(bt),this._roomConfirmService=y(j),this._router=y(V),this._injector=y(he$1),this.show_room_details=pt$1(!1),this.view=pt$1(`list`),this.selected_features=this._featuresFilterService.selected_features,this.selected_feature_count=Re(()=>this.selected_features()?.length||0),this.loading=this._state.loading,this.spaces=this._featuresFilterService.filtered_spaces,this.maps_list=this._mapService.maps_list,this.map_features=pt$1([]),this.map_actions=this._mapService.map_actions,this.map_styles=pt$1(null),this.selected_level=pt$1(null),this.selected_all_levels=Re(()=>Array.isArray(this.selected_level())),this.selected_level_maps=Re(()=>{let e=this.selected_level();return Array.isArray(e)?e:[]}),this.selected_map=Re(()=>{let e=this.selected_level();return Array.isArray(e)?null:e}),this.book_space=pt$1({}),this.buildings=this._org.building_list,this.setBuilding=e=>this._org.building=e,Ss(()=>{let e=this.maps_list();e?.length&&!this.selected_level()&&this.selected_level.set(e)})}async ngOnInit(){this.view.set(`list`),this._state.setView(`find`),await this._org.waitUntilInitialised(),await io(this._spaces.initialised,e=>!!e,this._injector),await this._state.listAvailableSpaces(),this.setBuilding(this._org.building),this.book_space.set({}),await this._mapService.locateSpaces(this.spaces()),await io(this._mapService.features_loaded,e=>!!e,this._injector),this.applyMapDecorations(),this.map_features.set(this._mapService.map_features())}handleBookEvent(e,a=!0){this.book_space.set(a?{[e.id]:!0}:{}),this._roomConfirmService.book_space=this.book_space(),this._roomConfirmService.handleBookEvent(e,a),this.show_room_details.set(a),this._roomConfirmService.updateSelectedSpace(a?e:null)}openFilter(){this.bottomSheetRef=this._bottomSheet.open(pt,{data:this.buildings()}),this.subscription(`filter-sheet`,this.bottomSheetRef.afterDismissed().subscribe(e=>{e&&this.refreshMap()}))}async refreshMap(){await this._mapService.locateSpaces(this.spaces()),this._mapService.processFeature(),this.selected_level.set(this.maps_list()),this.processStyles(),this.map_features.set(this._mapService.map_features())}openRoomDetails(){this._roomConfirmService.openRoomDetail()}updateSelectedLevel(e){this.selected_level.set(e),Array.isArray(this.selected_level())||this.applyMapDecorations()}applyMapDecorations(){this.timeout(`init`,()=>{this.processFeature(),this.processStyles()},1500)}processFeature(){this.map_features.set(this._mapService.map_features())}processStyles(){this.map_styles.set(this._mapService.style_map)}closeModal(){this._router.navigate([`/book/spaces`]),this._featuresFilterService.clearFilter()}static{this.ɵfac=function(a){return new(a||t)}}static{this.ɵcmp=Db({type:t,selectors:[[`find-space`]],features:[Lm],decls:61,vars:42,consts:[[1,`bg-base-200`,`fixed`,`inset-0`,`z-10`,`flex`,`flex-col`],[1,`border-base-300`,`bg-base-100`,`mx-auto`,`flex`,`h-full`,`w-lg`,`max-w-full`,`flex-col`,`border-x`],[1,`space-y-2`,`p-2`],[1,`bg-base-200`,`flex`,`items-center`,`justify-between`,`rounded-sm`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,3,`click`],[1,`border-base-200`,`flex`,`items-center`,`justify-between`,`rounded-lg`,`border`,`p-1`],[`btn`,``,`matRipple`,``,1,`w-40`,3,`click`],[1,`divide-secondary`,`border-secondary`,`mx-1`,`flex`,`divide-x`,`rounded-sm`,`border`],[`icon`,``,`matRipple`,``,1,`rounded-l`,`rounded-r-none`,3,`click`,`matTooltip`],[`icon`,``,`matRipple`,``,1,`rounded-l-none`,`rounded-r`,3,`click`,`matTooltip`],[1,`flex`,`h-1/2`,`w-full`,`flex-1`,`flex-col`],[1,`flex`,`h-full`,`w-full`,`flex-1`,`items-center`,`justify-center`],[1,`bg-base-200`,`z-0`,`flex`,`h-full`,`w-full`,`flex-1`,`flex-col`,`overflow-auto`],[1,`flex`,`flex-col`,`py-5`],[1,`mx-auto`,`w-[calc(100%-2rem)]`,`max-w-[375px]`],[1,`flex`,`flex-row`,`items-center`],[3,`click`],[1,`text-base-400`,`flex`,`items-center`,`justify-center`,`text-3xl`],[1,`ml-6`,`flex`,`items-center`,`text-lg`,`font-bold`],[1,`mt-3`,`flex`,`flex-row`,`justify-between`,`align-middle`],[1,`flex`,`w-7/12`,`justify-center`],[`btn`,``,`matRipple`,``,1,`filter-button`,`bg-base-200`,`h-9`,`w-full`,`text-sm`,3,`click`],[1,`divide-secondary`,`border-secondary`,`flex`,`divide-x`,`rounded-sm`,`border`],[1,`flex`,`flex-row`],[1,`my-2`,`flex`,`flex-row`,`border-t`],[1,`flex`,`flex-col`],[1,`mt-3`,`text-lg`,`font-bold`],[1,`mt-1`,`text-xs`,`text-gray-500`],[1,`bg-base-200`,`w-full`,`flex-1`],[1,`my-3`,`flex`,`h-full`,`w-full`,`flex-col`,`items-center`,`justify-center`,`space-y-4`],[1,`top-box-shadow`,`border-base-200`,`flex`,`flex-col`,`items-center`,`justify-center`,`border-t`,`py-1`],[1,`h-1/2`,`w-full`,`flex-1`,`px-2`,`pb-2`],[1,`flex`,`flex-col`,`space-y-2`],[`appearance`,`outline`,1,`mr-2`,`ml-auto`,`flex`,`text-sm`],[3,`space`,`selected`],[3,`selectedChange`,`space`,`selected`],[3,`ngModelChange`,`ngModel`],[3,`value`],[1,`bg-base-200`,`flex`,`h-full`,`w-full`,`items-center`,`justify-center`,`rounded-sm`,`opacity-30`],[1,``],[3,`diameter`],[1,`my-6`,`flex`,`h-full`,`w-full`,`flex-col`,`items-center`,`justify-center`,`space-y-2`,`p-2`,`text-center`],[1,`h-full`,`text-center`],[1,`p-2`,`text-center`,`text-sm`,`opacity-60`],[1,`text-sm`,3,`space`,`selected`],[1,`text-sm`,3,`selectedChange`,`space`,`selected`],[1,`relative`,`m-6`,`max-w-screen`],[`appearance`,`outline`,1,`m-3`,`ml-auto`,`flex`,`text-sm`],[1,`relative`,`m-3`,`h-96`,`max-w-screen`],[1,`relative`,`m-3`,`h-48`,`max-w-screen`],[1,`m-1`,`max-w-screen`,`p-1`,3,`src`,`styles`,`features`,`actions`],[`matRipple`,``,`type`,`submit`,1,`open-details-button`,`border-secondary`,`bg-secondary`,`my-1`,`w-[300px]`,3,`click`]],template:function(a,i){a&1&&(ea(0,`div`,0)(1,`div`,1)(2,`header`,2)(3,`div`,3)(4,`h2`,4),r_(5,`Find Space`),hd(),ea(6,`button`,5),ny(`click`,function(){return i.closeModal()}),ea(7,`icon`),r_(8,`close`),hd()()(),ea(9,`div`,6)(10,`button`,7),ny(`click`,function(){return i.openFilter()}),r_(11,` Filters `),lT(12,qt,2,1,`span`),hd(),ea(13,`div`,8)(14,`button`,9),w_(15,`translate`),ny(`click`,function(){return i.view.set(`list`)}),ea(16,`icon`),r_(17,`list`),hd()(),ea(18,`button`,10),w_(19,`translate`),ny(`click`,function(){return i.view.set(`map`)}),ea(20,`icon`),r_(21,`map`),hd()()()()(),ea(22,`main`,11),lT(23,ti,2,1)(24,ii,4,2,`div`,12),hd()()(),ea(25,`div`,13)(26,`section`,14)(27,`div`,15)(28,`div`,16)(29,`button`,17),ny(`click`,function(){return i.closeModal()}),ea(30,`icon`,18),r_(31,`close`),hd()(),ea(32,`span`,19),r_(33,` Find Space`),hd()(),ea(34,`div`,20)(35,`div`,21)(36,`button`,22),ny(`click`,function(){return i.openFilter()}),ea(37,`span`),r_(38,`Filter`),hd(),lT(39,ni,2,1,`span`),hd()(),ea(40,`div`,23)(41,`button`,9),w_(42,`translate`),ny(`click`,function(){return i.view.set(`list`)}),ea(43,`icon`),r_(44,`list`),hd()(),ea(45,`button`,10),w_(46,`translate`),ny(`click`,function(){return i.view.set(`map`)}),ea(47,`icon`),r_(48,`map`),hd()()()(),Qm(49,`section`,24),ea(50,`section`,25)(51,`div`,26)(52,`span`,27),r_(53,` Results`),hd(),ea(54,`span`,28),r_(55),hd()()(),ea(56,`div`,29),lT(57,_i,2,1)(58,fi,4,1,`div`,30),hd()(),ea(59,`section`,31),lT(60,bi,4,0,`div`),hd()()()),a&2&&($w(12),dT(i.selected_feature_count()?12:-1),$w(2),fy(`bg-base-100`,i.view()!==`list`)(`bg-secondary`,i.view()===`list`)(`text-secondary-content`,i.view()===`list`),Ym(`matTooltip`,b_(15,34,`COMMON.LIST`)),$w(4),fy(`bg-base-100`,i.view()!==`map`)(`bg-secondary`,i.view()===`map`)(`text-secondary-content`,i.view()===`map`),Ym(`matTooltip`,b_(19,36,`COMMON.MAP`)),$w(5),dT(i.loading()?24:23),$w(16),dT(i.selected_feature_count()?39:-1),$w(2),fy(`bg-base-100`,i.view()!==`list`)(`bg-secondary`,i.view()===`list`)(`text-secondary-content`,i.view()===`list`),Ym(`matTooltip`,b_(42,38,`COMMON.LIST`)),$w(4),fy(`bg-base-100`,i.view()!==`map`)(`bg-secondary`,i.view()===`map`)(`text-secondary-content`,i.view()===`map`),Ym(`matTooltip`,b_(46,40,`COMMON.MAP`)),$w(10),Dd(` `,i.spaces().length||0,` results found`),$w(2),dT(i.loading()?58:57),$w(3),dT(i.show_room_details()?60:-1))},dependencies:[sr,qs,J,Z,Ui$1,de$1,rt,Ls,Rs,Ia,ut,mt,dm,rm,Gc,Hf,Yt$1,mt$1,f],styles:[`.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]{height:2.25rem}.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle-label-content[_ngcontent-%COMP%]{line-height:2.25rem;font-size:.875rem}.mat-button-toggle-label-content[_ngcontent-%COMP%]{font-size:.875rem}.mat-button-toggle-checked[_ngcontent-%COMP%]{border:1px solid var(--%NS%secondary);border-radius:5px;box-shadow:none}.mat-focus-indicator[_ngcontent-%COMP%]{border:none}
/*# sourceMappingURL=find-space.component.css.map */`]})}}return t})();export{xo as FindSpaceComponent};
;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ded8e0f8-443e-516b-9baf-e2bf8dc93841")}catch(e){}}();
//# debugId=ded8e0f8-443e-516b-9baf-e2bf8dc93841
//# sourceMappingURL=find-space.component-kpOkxRjS.js.map