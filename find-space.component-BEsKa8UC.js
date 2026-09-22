import{$ as KE,A as FN,B as Hc,Br as xi,Ct as QT,Gr as yh,Gt as Vr,In as gm,Ir as wN,K as Ic,Kr as zM,L as Gv,M as Fz,Mn as g,Mt as SM,Pn as gN,St as QD,Tn as dn,Ur as yD,Ut as VM,Wn as is,Wr as ye,Wt as Vc,X as JD,Xn as kN,Xr as l,Yt as WM,Zr as m,an as YD,at as MM,cn as _,et as LD,gn as bM,hn as aT,i as $c,in as Y,j as Fe,jn as fh,k as FD,kn as eE,kt as Rn,ln as _D,lt as NM,mn as aA,n as $M,on as ZT,ot as MN,st as Me,t as $D,tn as Xc,tr as mm,tt as LN,u as Bo,un as _M,v as D,vn as bh,vt as PD,wt as Qc,yr as qt$1,yt as PM}from"./chunk-B5hGj_t1.js";import{$n as et,Jr as nO,Jt as Ut$1,N as Gy,Qr as oB,Ti as tO,Ui as wb,Y as Kt$1,_n as _a,fi as rK,hr as ip,ht as PN,ji as uB,jn as cB,k as Ft$1,n as $d,oi as pa,on as Xp,t as $ae,u as Cn,ut as ON,vi as sB}from"./chunk-Cr0EOu-9.js";import{C as qe,g as Xr,n as mt$1,r as f,t as Yt$1,y as Kt$2}from"./main.js";import"./chunk-2YL8ASqD.js";import"./chunk-DhEYSYb3.js";import{n as Me$1}from"./chunk-Dpvrkuxk.js";import"./chunk-BdEGVhPW.js";import{t as ds}from"./chunk-CglXYJ-n.js";import"./chunk-BFiagU9W.js";import{a as ui$1,n as Et$1,r as hi,t as Dt$1}from"./chunk-CvCiJQg3.js";import{t as O}from"./chunk-C3KoK4Nc.js";import{a as zi,i as ci$1,n as Vn,r as ao,t as $i}from"./chunk-L4i6vx_c.js";import{n as sn,t as Ji}from"./chunk-DEvv6iTP.js";import{t as p}from"./chunk-CxohL0wx.js";import{a as st,i as mt$2,n as Ot$1,r as f$1}from"./chunk-DR2MyiV6.js";var ht=[`button`];var vt=[`*`];function xt(t,s){if(t&1&&(Ic(0,`div`,2),Hc(1,`mat-pseudo-checkbox`,6),yh()),t&2){let e=VM();aT(),_D(`disabled`,e.disabled)}}var St=new D(`MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS`,{providedIn:`root`,factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})});var Ct=new D(`MatButtonToggleGroup`);var he=class{source;value;constructor(s,e){this.source=s,this.value=e}};var yt=(()=>{class t{_changeDetectorRef=g(Bo);_elementRef=g(dn);_focusMonitor=g(pa);_idGenerator=g(Kt$1);_animationDisabled=Ft$1();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new Fe;constructor(){g(Ut$1).load($d);let e=g(Ct,{optional:!0}),a=g(new Qc(`tabindex`),{optional:!0})||``,i=g(St,{optional:!0});this._tabIndex=Y(parseInt(a)||0),this.buttonToggleGroup=e,this._appearance=i&&i.appearance?i.appearance:`standard`,this._disabledInteractive=i?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId(`mat-button-toggle-`),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add(`mat-button-toggle-animations-enabled`),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let a=this.buttonToggleGroup._buttonToggles.find(i=>i.tabIndex===0);a&&(a.tabIndex=-1),this.tabIndex=0}this.change.emit(new he(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static ɵfac=function(a){return new(a||t)};static ɵcmp=fh({type:t,selectors:[[`mat-button-toggle`]],viewQuery:function(a,i){if(a&1&&PD(ht,5),a&2){let d;LD(d=FD())&&(i._buttonElement=d.first)}},hostAttrs:[`role`,`presentation`,1,`mat-button-toggle`],hostVars:14,hostBindings:function(a,i){a&1&&$c(`focus`,function(){return i.focus()}),a&2&&(Vc(`aria-label`,null)(`aria-labelledby`,null)(`id`,i.id)(`name`,null),$D(`mat-button-toggle-standalone`,!i.buttonToggleGroup)(`mat-button-toggle-checked`,i.checked)(`mat-button-toggle-disabled`,i.disabled)(`mat-button-toggle-disabled-interactive`,i.disabledInteractive)(`mat-button-toggle-appearance-standard`,i.appearance===`standard`))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],id:`id`,name:`name`,value:`value`,tabIndex:`tabIndex`,disableRipple:[2,`disableRipple`,`disableRipple`,is],appearance:`appearance`,checked:[2,`checked`,`checked`,is],disabled:[2,`disabled`,`disabled`,is],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,is]},outputs:{change:`change`},exportAs:[`matButtonToggle`],ngContentSelectors:vt,decls:7,vars:13,consts:[[`button`,``],[`type`,`button`,1,`mat-button-toggle-button`,`mat-focus-indicator`,3,`click`,`id`,`disabled`],[1,`mat-button-toggle-checkbox-wrapper`],[1,`mat-button-toggle-label-content`],[1,`mat-button-toggle-focus-overlay`],[`matRipple`,``,1,`mat-button-toggle-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,3,`disabled`]],template:function(a,i){if(a&1&&($M(),Ic(0,`button`,1,0),$c(`click`,function(){return i._onButtonClick()}),bM(2,xt,2,1,`div`,2),Ic(3,`span`,3),zM(4),yh()(),Hc(5,`span`,4)(6,`span`,5)),a&2){let d=WM(1);_D(`id`,i.buttonId)(`disabled`,i.disabled&&!i.disabledInteractive||null),Vc(`role`,i.isSingleSelector()?`radio`:`button`)(`tabindex`,i.disabled&&!i.disabledInteractive?-1:i.tabIndex)(`aria-pressed`,i.isSingleSelector()?null:i.checked)(`aria-checked`,i.isSingleSelector()?i.checked:null)(`name`,i._getButtonName())(`aria-label`,i.ariaLabel)(`aria-labelledby`,i.ariaLabelledby)(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null),aT(2),SM(i.buttonToggleGroup&&(!i.buttonToggleGroup.multiple&&!i.buttonToggleGroup.hideSingleSelectionIndicator||i.buttonToggleGroup.multiple&&!i.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),aT(4),_D(`matRippleTrigger`,d)(`matRippleDisabled`,i.disableRipple||i.disabled)}},dependencies:[Xp,tO],styles:[`.mat-button-toggle-standalone,
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
`],encapsulation:2})}return t})();var mt=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵmod=Vr({type:t});static ɵinj=Rn({imports:[_a,yt,et]})}return t})();var de=()=>({standalone:!0});function Tt(t,s){t&1&&(Ic(0,`label`,11),gN(1,` Location `),yh())}function Et(t,s){if(t&1&&(Ic(0,`mat-option`,27),gN(1),yh()),t&2){let e=s.$implicit;_D(`value`,e),aT(),bh(` `,e.display_name||e.name,` `)}}function Ft(t,s){if(t&1){let e=PM();Ic(0,`mat-form-field`,12)(1,`mat-select`,26),$c(`ngModelChange`,function(i){gm(e);return mm(VM(2).setBuilding(i))}),MM(2,Et,2,2,`mat-option`,27,_M),yh(),ZT(),yh()}if(t&2){let e=VM(2);aT(),_D(`ngModel`,e.building())(`ngModelOptions`,MN(2,de)),QT(),aT(),NM(e.buildings())}}function Nt(t,s){if(t&1){let e=PM();Ic(0,`div`)(1,`div`,28)(2,`span`),gN(3),yh(),Ic(4,`mat-checkbox`,29),eE(`ngModelChange`,function(i){let d=gm(e).$implicit;return wN(d.value,i)||(d.value=i),mm(i)}),$c(`change`,function(){gm(e);return mm(VM(2).getSelectedFeatures())}),yh(),ZT(),yh()()}if(t&2){let e=s.$implicit;aT(3),bh(` `,e.name),aT(),JD(`ngModel`,e.value),_D(`ngModelOptions`,MN(3,de)),QT()}}function It(t,s){if(t&1){let e=PM();Ic(0,`form`,1),$c(`ngSubmit`,function(){gm(e);return mm(VM().applyFilters())}),Ic(1,`section`,2)(2,`div`,3)(3,`div`,4)(4,`button`,5),$c(`click`,function(){gm(e);return mm(VM().closeModal())}),Ic(5,`icon`,6),gN(6,`close`),yh()(),Ic(7,`span`,7),gN(8,` Space Filters`),yh()()()(),Ic(9,`section`,8)(10,`div`,3)(11,`div`,9),gN(12,`Details`),yh(),Ic(13,`div`,10),bM(14,Tt,2,0,`label`,11),bM(15,Ft,4,3,`mat-form-field`,12),Ic(16,`div`,10)(17,`label`,11),gN(18,` Date `),yh(),Hc(19,`a-date-field`,13),ZT(),Ic(20,`div`,14)(21,`div`,15)(22,`label`,11),gN(23,` Start Time* `),yh(),Ic(24,`a-time-field`,16),$c(`ngModelChange`,function(i){gm(e);return mm(VM().model.update(W=>m(l({},W),{date:i})))}),yh(),ZT(),yh(),Ic(25,`div`,17)(26,`label`,11),gN(27,` End Time* `),yh(),Hc(28,`a-duration-field`,18),ZT(),yh()()()()()(),Ic(29,`section`,8)(30,`div`,3)(31,`div`,9),gN(32,`Favourites`),yh(),Ic(33,`div`,19)(34,`span`),gN(35,`Only show favourite rooms`),yh(),Ic(36,`mat-checkbox`,20),eE(`ngModelChange`,function(i){gm(e);let d=VM();return wN(d.show_favourites,i)||(d.show_favourites=i),mm(i)}),yh(),ZT(),yh()()(),Ic(37,`section`,21)(38,`div`,22)(39,`div`,9),gN(40,`Features`),yh(),MM(41,Nt,5,4,`div`,null,_M),yh()(),Ic(43,`section`,23)(44,`button`,24)(45,`span`,25),gN(46,`Apply Filters`),yh()()()()}if(t&2){let e=VM();aT(14),SM(e.has_multiple_buildings()?14:-1),aT(),SM(e.has_multiple_buildings()?15:-1),aT(4),_D(`from`,e.minDate)(`formField`,e.form.date),QT(),aT(5),_D(`ngModel`,e.model().date)(`ngModelOptions`,MN(13,de)),QT(),aT(4),_D(`time`,e.model().date)(`max`,600)(`min`,60)(`step`,60)(`formField`,e.form.duration),QT(),aT(8),JD(`ngModel`,e.show_favourites),_D(`ngModelOptions`,MN(14,de)),QT(),aT(5),NM(e.features())}}var pt=(()=>{class t{constructor(){this.data=g(st),this._bottomsheetRef=g(f$1),this._featuresFilterService=g(p),this._state=g(ds),this._org=g(ip),this.buildings=this._org.building_list,this.building=this._org.active_building,this.features=this._featuresFilterService.features,this.show_favourites=this._featuresFilterService.show_favourites,this.has_multiple_buildings=Me(()=>this.buildings().length>1),this.form=this._state.form,this.model=this._state.model,this.minDate=Date.now(),this.setBuilding=e=>this._org.building=e}applyFilters(){this._featuresFilterService.applyFilter(),this._bottomsheetRef.dismiss(!0)}getSelectedFeatures(){this._featuresFilterService.getSelectedFeatures()}closeModal(){this._bottomsheetRef.dismiss()}static{this.ɵfac=function(a){return new(a||t)}}static{this.ɵcmp=fh({type:t,selectors:[[``,`filter-space`,``]],decls:2,vars:1,consts:[[1,`z-0`,`m-0`,`flex`,`min-h-[800px]`,`flex-1`,`flex-col`,`overflow-y-auto`],[3,`ngSubmit`],[1,`border-base-200`,`flex`,`flex-col`,`items-center`,`border-b`,`py-5`],[1,`flex`,`w-[calc(100%-2rem)]`,`max-w-90`,`flex-col`,`self-center`],[1,`flex`,`flex-row`,`items-center`],[`icon`,``,`matRipple`,``,`type`,`button`,3,`click`],[1,`flex`,`items-center`,`justify-center`,`text-3xl`,`text-gray-700`],[1,`ml-6`,`flex`,`items-center`,`text-xl`,`font-bold`],[1,`border-base-200`,`flex`,`flex-col`,`items-center`,`border-b`],[1,`my-2`,`text-lg`],[1,`flex`,`flex-col`],[1,`mb-1`,`text-sm`,`font-bold`,`text-gray-700`],[`overlay`,``,`buildings`,``,`appearance`,`outline`,1,`w-full`],[3,`from`,`formField`],[1,`flex`,`w-full`,`flex-row`,`space-x-2`],[1,`flex`,`w-1/3`,`flex-1`,`flex-col`],[3,`ngModelChange`,`ngModel`,`ngModelOptions`],[1,`ml-auto`,`flex`,`w-1/3`,`flex-1`,`flex-col`],[3,`time`,`max`,`min`,`step`,`formField`],[1,`mb-2`,`flex`,`flex-row`],[1,`ml-auto`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[1,`border-base-200`,`flex`,`flex-col`],[1,`mx-auto`,`w-[calc(100%-2rem)]`,`max-w-90`],[1,`top-box-shadow`,`border-base-200`,`mt-5`,`flex`,`flex-col`,`items-center`,`justify-center`,`border-t`,`py-3`],[`btn`,``,`matRipple`,``,`type`,`submit`,1,`filter-button`,`max-w-[calc(100%`,`-`,`2rem)]`,`border-secondary`,`bg-secondary`,`mx-auto`,`min-w-[300px]`,`text-center`,`text-sm`],[1,``],[`placeholder`,`Select Building...`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[3,`value`],[1,`mb-1`,`flex`,`flex-row`],[1,`checkbox`,`ml-auto`,3,`ngModelChange`,`change`,`ngModel`,`ngModelOptions`]],template:function(a,i){a&1&&(Ic(0,`div`,0),bM(1,It,47,15,`form`),yh()),a&2&&(aT(),SM(i.form?1:-1))},dependencies:[_a,Xp,ao,Vn,uB,cB,oB,sB,PN,ON,Xr,zi,ci$1,$i,Kt$2,qe,ui$1,hi,nO,$ae],encapsulation:2})}}return t})();var ut=(()=>{class t{constructor(){this._org=g(ip),this.space=Xc(void 0),this.selected=Xc(!1),this.selectedChange=Fz(),this.level_name=Me(()=>{let e=this._org.levelWithID(this.space()?.zones||[]);return e?.display_name||e?.name||``}),this.space_name=Me(()=>this.space()?.display_name||this.space()?.name||``),this.capacity=Me(()=>this.space()?.capacity||0),this.toggleSelected=()=>this.selectedChange.emit(!this.selected())}static{this.ɵfac=function(a){return new(a||t)}}static{this.ɵcmp=fh({type:t,selectors:[[`find-space-item`]],inputs:{space:[1,`space`],selected:[1,`selected`]},outputs:{selectedChange:`selectedChange`},decls:11,vars:5,consts:[[`mat-ripple`,``,1,`border-base-300`,`bg-base-100`,`hover:border-info`,`mx-auto`,`flex`,`w-full`,`flex-col`,`space-y-2`,`rounded-lg`,`border`,`p-4`,3,`click`],[1,`flex`,`w-full`,`flex-row`,`items-center`,`space-x-2`],[1,`text-lg`]],template:function(a,i){a&1&&(Ic(0,`button`,0),$c(`click`,function(){return i.toggleSelected()}),Ic(1,`div`,1)(2,`icon`,2),gN(3,`meeting_room`),yh(),Ic(4,`div`),gN(5),yh()(),Ic(6,`div`,1)(7,`icon`,2),gN(8,`group`),yh(),Ic(9,`div`),gN(10),yh()()()),a&2&&($D(`bg-base-200`,i.selected()),aT(5),QD(` `,i.level_name(),`, `,i.space_name(),` `),aT(5),bh(``,i.capacity(),` People`))},dependencies:[_a,Xp,$ae],styles:[`[_nghost-%COMP%]{padding:0 .5rem}
/*# sourceMappingURL=find-space-item.component.css.map */`]})}}return t})();function Rt(t,s){if(t&1&&(Ic(0,`div`,14)(1,`div`,7)(2,`icon`,12),gN(3,`people`),yh()(),Ic(4,`div`,7)(5,`span`,19),gN(6),yh()()()),t&2){let e=s.$implicit;aT(6),YD(e?.email)}}var gt=(()=>{class t{constructor(){this.data=g(st),this._bottomSheetRef=g(f$1),this._state=g(ds),this._roomConfirmService=g(j),this.form=this._state.form,this.model=this._state.model,this.loading=this._state.loading,this.show_submit_button=Y(!0),this.space=Y(this.data),this._form_value=this.model,this.unix_time=Me(()=>this._form_value()?.date),this.start_time=Me(()=>new Date(this.unix_time()).toLocaleTimeString(`en-US`,{hour:`numeric`,minute:`numeric`,hour12:!0})),this.end_time=Me(()=>{let e=this._form_value()?.duration,a=this.unix_time()+e*60*1e3;return new Date(a).toLocaleTimeString(`en-US`,{hour:`numeric`,minute:`numeric`,hour12:!0})}),this.attendees=Me(()=>this._form_value()?.attendees||[]),this.creator=Me(()=>this._form_value()?.creator||``),this.title=Me(()=>this._form_value()?.title)}closeModal(){this._bottomSheetRef.dismiss(`cancel`)}async confirmBooking(){this.show_submit_button.set(!1),await this._roomConfirmService.bookRoom(this.space())?this._bottomSheetRef.dismiss(!0):this.show_submit_button.set(!0)}static{this.ɵfac=function(a){return new(a||t)}}static{this.ɵcmp=fh({type:t,selectors:[[`room-confirm`]],decls:63,vars:11,consts:[[1,`z-0`,`mx-auto`,`flex`,`min-h-[800px]`,`w-[calc(100%-2rem)]`,`w-full`,`flex-1`,`flex-col`,`overflow-y-auto`],[1,`border-base-200`,`flex`,`flex-col`,`border-b`,`py-2`],[1,`justify-content`,`flex`,`flex-row`,`items-center`,`space-x-4`],[`icon`,``,`matRipple`,``,3,`click`],[1,`flex`,`items-center`,`justify-center`,`text-3xl`,`text-gray-700`],[1,`mr-auto`,`text-lg`,`font-bold`],[1,`border-base-200`,`mt-4`,`flex`,`flex-row`,`space-x-4`,`border-b`,`pb-4`],[1,`flex`,`flex-col`],[1,`text-base`],[`src`,`assets/tick.svg`],[1,`flex`,`text-base`,`font-bold`,`text-gray-700`],[1,`mt-2`,`flex`,`items-center`,`text-sm`,`text-gray-700`],[1,`flex`,`items-center`],[1,`flex`],[1,`mt-2`,`flex`,`flex-row`,`items-center`,`text-sm`,`text-gray-700`],[1,`mt-4`,`flex`,`flex-row`,`space-x-4`,`pb-4`],[1,`top-box-shadow`,`border-base-200`,`-mx-4`,`mt-5`,`mb-10`,`flex`,`flex-col`,`items-center`,`border-t`,`p-3`],[`matRipple`,``,1,`border-secondary`,`bg-secondary`,`mx-4`,`ml-2`,`w-[300px]`,3,`click`,`disabled`],[1,``],[1,`w-full`]],template:function(a,i){a&1&&(Ic(0,`div`,0)(1,`section`,1)(2,`div`,2)(3,`button`,3),$c(`click`,function(){return i.closeModal()}),Ic(4,`icon`,4),gN(5,`close`),yh()(),Ic(6,`span`,5),gN(7,` Confirm Room Booking`),yh()()(),Ic(8,`section`,6)(9,`div`,7)(10,`span`,8),Hc(11,`img`,9),yh()(),Ic(12,`div`,7)(13,`span`,10),gN(14),yh(),Ic(15,`div`,11)(16,`icon`,12),gN(17,`calendar_today`),yh(),Ic(18,`span`,13),gN(19),kN(20,`date`),yh()(),Ic(21,`div`,11)(22,`icon`,12),gN(23,`schedule`),yh(),Ic(24,`span`,13),gN(25),yh()()()(),Ic(26,`section`,6)(27,`div`,7)(28,`span`,8),Hc(29,`img`,9),yh()(),Ic(30,`div`,7)(31,`span`,10),gN(32,`Attendees `),yh(),MM(33,Rt,7,1,`div`,14,_M),Ic(35,`div`,14)(36,`div`,7)(37,`icon`,12),gN(38,`people`),yh()(),Ic(39,`div`,7)(40,`span`),gN(41),yh()()()()(),Ic(42,`section`,15)(43,`div`,7)(44,`span`,8),Hc(45,`img`,9),yh()(),Ic(46,`div`,7)(47,`span`,10),gN(48,`Rooms `),yh(),Ic(49,`div`,11)(50,`icon`,12),gN(51,`meeting_room`),yh(),Ic(52,`span`,13),gN(53),yh()(),Ic(54,`div`,11)(55,`icon`,12),gN(56,`room`),yh(),Ic(57,`span`,13),gN(58),yh()()()(),Ic(59,`div`,16)(60,`button`,17),$c(`click`,function(){return i.confirmBooking()}),Ic(61,`span`,18),gN(62,`Confirm`),yh()()()()),a&2&&(aT(14),bh(``,i.title(),` `),aT(5),bh(` `,FN(20,8,i.unix_time(),`dd MMMM yyyy`),` `),aT(6),QD(``,i.start_time(),` -`,i.end_time()),aT(8),NM(i.attendees()),aT(8),YD(i.creator()),aT(12),bh(` `,i.space().name,` `),aT(5),bh(` `,i.space().level?.name),aT(2),_D(`disabled`,!i.show_submit_button()))},dependencies:[KE,_a,Xp,$ae,aA],encapsulation:2})}}return t})();function Dt(t,s){if(t&1&&(Ic(0,`section`,1),Hc(1,`img`,18),yh()),t&2){let e=VM();aT(),_D(`source`,e.space()?.images?.[0])(`alt`,`Image of `+(e.space()?.display_name||e.space()?.name))}}function Bt(t,s){t&1&&(Ic(0,`button`,5)(1,`span`,19),gN(2,`+ Add this room`),yh()())}function Vt(t,s){t&1&&(Ic(0,`button`,6)(1,`span`,20),gN(2,`- Remove this room`),yh()())}function Ot(t,s){t&1&&(Ic(0,`div`)(1,`icon`,10),gN(2,`panorama`),yh()())}function At(t,s){t&1&&(Ic(0,`div`)(1,`icon`,10),gN(2,`video_camera_front`),yh()())}function Gt(t,s){t&1&&(Ic(0,`div`)(1,`icon`,10),gN(2,`contact_phone`),yh()())}function jt(t,s){t&1&&(Ic(0,`div`)(1,`icon`,10),gN(2,`drive_file_rename_outline`),yh()())}function Lt(t,s){t&1&&(Ic(0,`div`)(1,`icon`,10),gN(2,`draw`),yh()())}function Pt(t,s){t&1&&(Ic(0,`div`)(1,`icon`,10),gN(2,`nest_remote_comfort_sensor`),yh()())}function zt(t,s){if(t&1&&(Ic(0,`div`,22)(1,`div`),bM(2,Ot,3,0,`div`)(3,At,3,0,`div`)(4,Gt,3,0,`div`)(5,jt,3,0,`div`)(6,Lt,3,0,`div`)(7,Pt,3,0,`div`),yh(),Ic(8,`span`,11),gN(9),yh()()),t&2){let e,a=s.$implicit;aT(2),SM((e=a)===`Views`?2:e===`Projector`?3:e===`VidConf`?4:e===`Whiteboard`?5:e===`Jamboard`?6:e===`Wifi`?7:-1),aT(7),bh(` `,a,` `)}}function Ut(t,s){if(t&1&&(Ic(0,`section`,14)(1,`span`,21),gN(2,`Room Features`),yh(),MM(3,zt,10,2,`div`,22,_M),yh()),t&2){let e=VM();aT(3),NM(e.space()?.feature_list)}}function Wt(t,s){if(t&1){let e=PM();Ic(0,`button`,23),$c(`click`,function(){gm(e);return mm(VM().back())}),Ic(1,`span`,24),gN(2,`Back`),yh()()}}function Ht(t,s){if(t&1){let e=PM();Ic(0,`button`,25),$c(`click`,function(){gm(e);return mm(VM().back())}),Ic(1,`span`,19),gN(2,`Confirm`),yh()()}}var _t=(()=>{class t{constructor(){this.data=g(st),this._bottomSheetRef=g(f$1),this.space=Y(this.data),this.room_added=Y(!1)}selectRoom(){this.room_added.update(e=>!e)}back(){this.room_added()?this._bottomSheetRef.dismiss(this.space()):this._bottomSheetRef.dismiss(null)}static{this.ɵfac=function(a){return new(a||t)}}static{this.ɵcmp=fh({type:t,selectors:[[`placeos-room-details`]],decls:25,vars:10,consts:[[1,`z-0`,`flex`,`min-h-[800px]`,`w-full`,`flex-1`,`flex-col`,`overflow-hidden`],[1,`bg-base-200`,`flex`,`min-h-[300px]`,`items-center`,`justify-center`,`text-gray-500`],[1,`border-base-200`,`mx-auto`,`flex`,`w-[calc(100%-2rem)]`,`flex-col`,`border-b`],[1,`mt-3`,`text-lg`,`font-bold`],[1,`w-max-[375px]`,3,`click`],[`btn`,``,`matRipple`,``,1,`border-secondary`,`bg-secondary`,`m-3`,`mx-auto`,`w-full`],[`btn`,``,`matRipple`,``,1,`border-base-200`,`bg-base-200`,`m-3`,`mx-auto`,`w-full`],[1,`border-base-200`,`mx-auto`,`flex`,`w-[calc(100%-2rem)]`,`flex-col`,`border-b`,`p-3`,`pl-0`],[1,`text-base`,`font-bold`],[1,`mt-3`,`flex`,`flex-row`,`items-center`,`text-sm`],[1,`text-info`],[1,`text-sm`,`text-gray-500`],[1,`mt-1`,`flex`,`flex-row`,`items-center`,`text-sm`],[1,`text-gray-500`],[1,`mx-auto`,`flex`,`w-[calc(100%-2rem)]`,`flex-col`,`py-3`],[1,`top-box-shadow`,`border-base-200`,`bg-base-100`,`flex`,`flex-col`,`border-t`,`p-3`],[`btn`,``,`matRipple`,``,1,`border-secondary`,`bg-base-100`,`mx-auto`,`w-full`],[`btn`,``,`matRipple`,``,1,`border-secondary`,`bg-secondary`,`mx-auto`,`w-full`],[`auth`,``,`width`,`100%`,`height`,`100%`,1,`z-20`,`flex`,`rounded-lg`,3,`source`,`alt`],[1,`text-white`],[1,`text-black`],[1,`mb-3`,`text-base`,`font-bold`],[1,`mb-1`,`flex`,`w-full`,`flex-row`],[`btn`,``,`matRipple`,``,1,`border-secondary`,`bg-base-100`,`mx-auto`,`w-full`,3,`click`],[1,`text-secondary`],[`btn`,``,`matRipple`,``,1,`border-secondary`,`bg-secondary`,`mx-auto`,`w-full`,3,`click`]],template:function(a,i){a&1&&(Ic(0,`div`,0),bM(1,Dt,2,2,`section`,1),Ic(2,`section`,2)(3,`span`,3),gN(4),yh(),Ic(5,`div`,4),$c(`click`,function(){return i.selectRoom()}),bM(6,Bt,3,0,`button`,5),bM(7,Vt,3,0,`button`,6),yh()(),Ic(8,`section`,7)(9,`span`,8),gN(10,`Details`),yh(),Ic(11,`div`,9)(12,`icon`,10),gN(13,`people`),yh(),Ic(14,`span`,11),gN(15),yh()(),Ic(16,`div`,12)(17,`icon`,10),gN(18,`room`),yh(),Ic(19,`span`,13),gN(20),yh()()(),bM(21,Ut,5,0,`section`,14),Ic(22,`div`,15),bM(23,Wt,3,0,`button`,16),bM(24,Ht,3,0,`button`,17),yh()()),a&2&&(aT(),SM(i.space()?.images?.length>0?1:-1),aT(3),bh(` `,i.space()?.name),aT(2),SM(i.room_added()?-1:6),aT(),SM(i.room_added()?7:-1),aT(8),bh(` `,i.space()?.capacity,` People`),aT(5),QD(` `,i.space()?.level?.name,`, `,i.space()?.level?.parent_id),aT(),SM(i.space()?.feature_list.length>0?21:-1),aT(2),SM(i.room_added()?-1:23),aT(),SM(i.room_added()?24:-1))},dependencies:[_a,Xp,$ae,O],encapsulation:2})}}return t})();var j=(()=>{class t{get form(){return this._state.form}get model(){return this._state.model}constructor(){this._bottomSheet=g(mt$2),this._router=g(qt$1),this._state=g(ds),this._spaces=g(Ot$1),this._space_pipe=new Me$1,this.book_space={},this.space_list=[],this.selected_space=Y(null),this.book_space={},(this._state.model().resources||[]).forEach(a=>this.book_space[a.id]=!0),this.space_list=this._spaces.filter(a=>this.book_space[a.id])}openRoomDetail(e=this.selected_space()){this._bottomSheet.open(_t,{data:e}).afterDismissed().subscribe(i=>{i&&this.openRoomConfirm(i)})}openRoomConfirm(e){e&&this._bottomSheet.open(gt,{data:e})}updateSelectedSpace(e){this.selected_space.set(e)}handleBookEvent(e,a=!0){this.book_space={},this.book_space[e.id]=a}async bookRoom(e){if(!e)return!1;this.handleBookEvent(e);let a=Object.keys(this.book_space).filter(d=>this.book_space[d]),i=await Promise.all(a.map(d=>this._space_pipe.transform(d)));return this.model.update(d=>m(l({},d),{resources:i,system:i[0]})),this.space_list=this._spaces.filter(d=>this.book_space[d.id]),this.postForm()}async postForm(){try{return await this._state.postForm(),await this._router.navigate([`/confirm/success`]),!0}catch(e){return wb(rK(e)||`Unable to book the room.`),!1}}static{this.ɵfac=function(a){return new(a||t)}}static{this.ɵprov=_({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();function $t(t,s){if(t&1&&Hc(0,`img`,4),t&2)_D(`source`,VM().space()?.images?.[0])}function Qt(t,s){t&1&&(Ic(0,`div`)(1,`icon`,14),gN(2,`image`),yh()())}var ft=(()=>{class t{constructor(){this.data=g(st),this._bottomSheetRef=g(f$1),this._roomConfirmService=g(j),this.space=Y(this.data)}openRoomDetail(){this._roomConfirmService.openRoomDetail(this.space())}cancel(){this._bottomSheetRef.dismiss(null)}static{this.ɵfac=function(a){return new(a||t)}}static{this.ɵcmp=fh({type:t,selectors:[[`placeos-room-tile`]],decls:23,vars:6,consts:[[1,`z-0`,`flex`,`min-h-min`,`w-full`,`min-w-[400px]`,`flex-1`,`flex-col`,`overflow-hidden`],[1,`justify-content`,`mx-auto`,`flex`,`w-[calc(100%-2rem)]`,`max-w-[375px]`,`items-center`,3,`click`],[1,`bg-base-100`,`mx-4`,`flex`,`h-full`,`w-full`,`flex-col`,`rounded-lg`,`border`],[1,`bg-base-200`,`m-3`,`flex`,`h-44`,`items-center`,`justify-center`,`rounded-lg`,`text-gray-500`],[`auth`,``,`alt`,`image of building `,`width`,`100%`,`height`,`100%`,1,`z-20`,`flex`,`rounded-lg`,3,`source`],[1,`mb-4`,`flex`,`flex-col`],[1,`mx-3`,`mt-1`,`text-xl`,`font-bold`],[1,`mx-3`,`mt-1`,`flex`,`flex-row`,`items-center`,`text-base`],[1,`text-info`],[1,`text-gray-500`],[1,`text-info`,`flex`,`items-center`],[1,`top-box-shadow`,`border-base-200`,`bg-base-100`,`-mx-4`,`mt-5`,`mb-10`,`flex`,`h-full`,`flex-col`,`items-center`,`border-t`,`p-3`],[`btn`,``,`matRipple`,``,1,`border-secondary`,`bg-base-100`,`mx-4`,`ml-2`,`w-[460px]`,3,`click`],[1,`text-secondary`],[1,`text-[8rem]`]],template:function(a,i){a&1&&(Ic(0,`div`,0)(1,`div`,1),$c(`click`,function(){return i.openRoomDetail()}),Ic(2,`div`,2)(3,`div`,3),bM(4,$t,1,1,`img`,4),bM(5,Qt,3,0,`div`),yh(),Ic(6,`div`,5)(7,`span`,6),gN(8),yh(),Ic(9,`div`,7)(10,`icon`,8),gN(11,`room`),yh(),Ic(12,`span`,9),gN(13),yh()(),Ic(14,`div`,7)(15,`icon`,10),gN(16,`people`),yh(),Ic(17,`span`,9),gN(18),yh()()()()()(),Ic(19,`div`,11)(20,`button`,12),$c(`click`,function(){return i.cancel()}),Ic(21,`span`,13),gN(22,`Back`),yh()()()),a&2&&(aT(4),SM(i.space()?.images?.length>0?4:-1),aT(),SM(i.space()?.images?.length==0?5:-1),aT(3),bh(` `,i.space()?.name),aT(5),QD(` `,i.space()?.level?.name,`, `,i.space()?.level?.parent_id),aT(5),bh(` `,i.space()?.capacity))},dependencies:[_a,Xp,$ae,O],encapsulation:2})}}return t})();var bt=(()=>{class t extends Cn{constructor(){super(...arguments),this._bottomSheet=g(mt$2),this._roomConfirmService=g(j),this.style_map={},this.map_features=Y([]),this.map_actions=Y([]),this.map_loaded=Y(!1),this.features_loaded=Y(!1),this.selected_space=this._roomConfirmService.selected_space,this.locatable_spaces=Y([]),this.maps_list=Y([])}async locateSpaces(e){let a=e||[];this.locatable_spaces.set(a.map(i=>({id:i.id,name:i.name,map_id:i.map_id,level:i.level}))),await this.loadMap(),this.timeout(`init`,()=>{this.processFeature()},1e3),this.processStyles(),this.map_actions.set(a.map(i=>({id:i.map_id,action:`click`,callback:()=>{this.openRoomTile(i)}})))}async loadMap(){this.map_loaded.set(!1);let e=this.locatable_spaces().map(a=>({map_id:a.level.map_id,level:a.level.name}));this.maps_list.set([...new Map(e.map(a=>[a.map_id,a])).values()]),this.map_loaded.set(!0)}processFeature(){this.features_loaded.set(!1);let e=this.locatable_spaces().map(a=>({location:a.map_id,content:sn,data:{name:a.name},z_index:99,zoom:100}));this.map_features.set(e),this.features_loaded.set(!0)}processStyles(){let e={};e[`#zones`]={display:`none`},e[`#Zones`]={display:`none`},this.style_map=e}openRoomTile(e){this._bottomSheet.open(ft,{panelClass:`bottom-sheet-transparent`,data:e}),this._roomConfirmService.handleBookEvent(e,!0)}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=Gv(t)))(i||t)}})()}static{this.ɵprov=_({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();function qt(t,s){if(t&1&&(Ic(0,`span`),gN(1),yh()),t&2){let e=VM();aT(),bh(` (`,e.selected_feature_count(),` applied) `)}}function Zt(t,s){if(t&1){let e=PM();Ic(0,`find-space-item`,36),$c(`selectedChange`,function(i){let d=gm(e).$implicit;return mm(VM(4).handleBookEvent(d,i))}),yh()}if(t&2){let e=s.$implicit,a=VM(4);_D(`space`,e)(`selected`,a.book_space()[e.id])}}function Jt(t,s){if(t&1&&(Ic(0,`div`,33),MM(1,Zt,1,2,`find-space-item`,35,_M),yh()),t&2){let e=VM(3);aT(),NM(e.spaces())}}function Kt(t,s){if(t&1&&(Ic(0,`mat-option`,38),gN(1),yh()),t&2){let e=s.$implicit;_D(`value`,e),aT(),YD(e.level)}}function Xt(t,s){if(t&1){let e=PM();Ic(0,`mat-form-field`,34)(1,`mat-select`,37),$c(`ngModelChange`,function(i){gm(e);return mm(VM(3).updateSelectedLevel(i))}),Ic(2,`mat-option`,38),gN(3),kN(4,`translate`),yh(),MM(5,Kt,2,2,`mat-option`,38,_M),yh(),ZT(),yh()}if(t&2){let e=VM(3);aT(),_D(`ngModel`,e.selected_level()),QT(),aT(),_D(`value`,e.maps_list()),aT(),bh(` `,LN(4,3,`COMMON.LEVEL_ALL`),` `),aT(2),NM(e.maps_list())}}function Yt(t,s){if(t&1&&bM(0,Jt,3,0,`div`,33)(1,Xt,7,5,`mat-form-field`,34),t&2)SM(VM(2).view()===`list`?0:1)}function ei(t,s){t&1&&(Ic(0,`div`,32)(1,`div`,39)(2,`p`,40),gN(3,`No spaces`),yh()()())}function ti(t,s){if(t&1&&bM(0,Yt,2,1)(1,ei,4,0,`div`,32),t&2)SM(VM().spaces().length>0?0:1)}function ii(t,s){if(t&1&&(Ic(0,`div`,12),Hc(1,`mat-spinner`,41),Ic(2,`p`),gN(3),yh()()),t&2){let e=VM();aT(),_D(`diameter`,32),aT(2),YD(e.loading())}}function ni(t,s){if(t&1&&(Ic(0,`span`),gN(1),yh()),t&2){let e=VM();aT(),bh(` (`,e.selected_feature_count(),` applied) `)}}function oi(t,s){if(t&1){let e=PM();Ic(0,`find-space-item`,46),$c(`selectedChange`,function(i){let d=gm(e).$implicit;return mm(VM(4).handleBookEvent(d,i))}),yh()}if(t&2){let e=s.$implicit,a=VM(4);_D(`space`,e)(`selected`,a.book_space()[e.id])}}function ai(t,s){if(t&1&&(Ic(0,`div`),MM(1,oi,1,2,`find-space-item`,45,_M),yh()),t&2){let e=VM(3);aT(),NM(e.spaces())}}function li(t,s){if(t&1&&(Ic(0,`mat-option`,38),gN(1),yh()),t&2){let e=s.$implicit;_D(`value`,e),aT(),YD(e.level)}}function ri(t,s){if(t&1){let e=PM();Ic(0,`div`)(1,`mat-form-field`,48)(2,`mat-select`,37),$c(`ngModelChange`,function(i){gm(e);return mm(VM(4).updateSelectedLevel(i))}),Ic(3,`mat-option`,38),gN(4),kN(5,`translate`),yh(),MM(6,li,2,2,`mat-option`,38,_M),yh(),ZT(),yh()()}if(t&2){let e=VM(4);aT(2),_D(`ngModel`,e.selected_level()),QT(),aT(),_D(`value`,e.maps_list()),aT(),bh(` `,LN(5,3,`COMMON.LEVEL_ALL`),` `),aT(2),NM(e.maps_list())}}function si(t,s){if(t&1&&(Ic(0,`div`,50),Hc(1,`interactive-map`,51),yh()),t&2){let e=s.$implicit,a=VM(6);aT(),_D(`src`,e?.map_id)(`styles`,a.map_styles())(`features`,a.map_features())(`actions`,a.map_actions())}}function ci(t,s){if(t&1&&(Ic(0,`div`),MM(1,si,2,4,`div`,50,_M),yh()),t&2){let e=VM(5);aT(),NM(e.selected_level_maps())}}function di(t,s){if(t&1&&(Ic(0,`div`,49),Hc(1,`interactive-map`,51),yh()),t&2){let e=VM(5);aT(),_D(`src`,e.selected_map()?.map_id)(`styles`,e.map_styles())(`features`,e.map_features())(`actions`,e.map_actions())}}function mi(t,s){if(t&1&&(Ic(0,`div`,47),bM(1,ci,3,0,`div`),bM(2,di,2,4,`div`,49),yh()),t&2){let e=VM(4);aT(),SM(e.selected_all_levels()?1:-1),aT(),SM(e.selected_all_levels()?-1:2)}}function pi(t,s){if(t&1&&(Ic(0,`div`,43),bM(1,ri,8,5,`div`),bM(2,mi,3,2,`div`,47),yh()),t&2){let e=VM(3);aT(),SM(e.maps_list().length>1?1:-1),aT(),SM(e.selected_level()?2:-1)}}function ui(t,s){if(t&1&&(bM(0,ai,3,0,`div`),bM(1,pi,3,2,`div`,43),Ic(2,`p`,44),gN(3,` End of available spaces list `),yh()),t&2){let e=VM(2);SM(e.view()===`list`?0:-1),aT(),SM(e.view()===`map`&&e.map_features().length>0?1:-1)}}function gi(t,s){t&1&&(Ic(0,`div`,42)(1,`p`),gN(2,` No available spaces for selected time, capacity or level(s) `),yh()())}function _i(t,s){if(t&1&&bM(0,ui,4,2)(1,gi,3,0,`div`,42),t&2)SM(VM().spaces().length>0?0:1)}function fi(t,s){t&1&&(Ic(0,`div`,30),Hc(1,`mat-spinner`,41),Ic(2,`p`),gN(3,`Retrieving available spaces...`),yh()()),t&2&&(aT(),_D(`diameter`,32))}function bi(t,s){if(t&1){let e=PM();Ic(0,`div`)(1,`button`,52),$c(`click`,function(){gm(e);return mm(VM().openRoomDetails())}),Ic(2,`span`,40),gN(3,`View Room`),yh()()()}}var xo=(()=>{class t extends Cn{get form(){return this._state.form}get model(){return this._state.model}constructor(){super(),this._bottomSheet=g(mt$2),this._org=g(ip),this._spaces=g(Ot$1),this._state=g(ds),this._featuresFilterService=g(p),this._mapService=g(bt),this._roomConfirmService=g(j),this._router=g(qt$1),this._injector=g(ye),this.show_room_details=Y(!1),this.view=Y(`list`),this.selected_features=this._featuresFilterService.selected_features,this.selected_feature_count=Me(()=>this.selected_features()?.length||0),this.loading=this._state.loading,this.spaces=this._featuresFilterService.filtered_spaces,this.maps_list=this._mapService.maps_list,this.map_features=Y([]),this.map_actions=this._mapService.map_actions,this.map_styles=Y(null),this.selected_level=Y(null),this.selected_all_levels=Me(()=>Array.isArray(this.selected_level())),this.selected_level_maps=Me(()=>{let e=this.selected_level();return Array.isArray(e)?e:[]}),this.selected_map=Me(()=>{let e=this.selected_level();return Array.isArray(e)?null:e}),this.book_space=Y({}),this.buildings=this._org.building_list,this.setBuilding=e=>this._org.building=e,xi(()=>{let e=this.maps_list();e?.length&&!this.selected_level()&&this.selected_level.set(e)})}async ngOnInit(){this.view.set(`list`),this._state.setView(`find`),await this._org.waitUntilInitialised(),await Gy(this._spaces.initialised,e=>!!e,this._injector),await this._state.listAvailableSpaces(),this.setBuilding(this._org.building),this.book_space.set({}),await this._mapService.locateSpaces(this.spaces()),await Gy(this._mapService.features_loaded,e=>!!e,this._injector),this.applyMapDecorations(),this.map_features.set(this._mapService.map_features())}handleBookEvent(e,a=!0){this.book_space.set(a?{[e.id]:!0}:{}),this._roomConfirmService.book_space=this.book_space(),this._roomConfirmService.handleBookEvent(e,a),this.show_room_details.set(a),this._roomConfirmService.updateSelectedSpace(a?e:null)}openFilter(){this.bottomSheetRef=this._bottomSheet.open(pt,{data:this.buildings()}),this.subscription(`filter-sheet`,this.bottomSheetRef.afterDismissed().subscribe(e=>{e&&this.refreshMap()}))}async refreshMap(){await this._mapService.locateSpaces(this.spaces()),this._mapService.processFeature(),this.selected_level.set(this.maps_list()),this.processStyles(),this.map_features.set(this._mapService.map_features())}openRoomDetails(){this._roomConfirmService.openRoomDetail()}updateSelectedLevel(e){this.selected_level.set(e),Array.isArray(this.selected_level())||this.applyMapDecorations()}applyMapDecorations(){this.timeout(`init`,()=>{this.processFeature(),this.processStyles()},1500)}processFeature(){this.map_features.set(this._mapService.map_features())}processStyles(){this.map_styles.set(this._mapService.style_map)}closeModal(){this._router.navigate([`/book/spaces`]),this._featuresFilterService.clearFilter()}static{this.ɵfac=function(a){return new(a||t)}}static{this.ɵcmp=fh({type:t,selectors:[[`find-space`]],features:[yD],decls:61,vars:42,consts:[[1,`bg-base-200`,`fixed`,`inset-0`,`z-10`,`flex`,`flex-col`],[1,`border-base-300`,`bg-base-100`,`mx-auto`,`flex`,`h-full`,`w-lg`,`max-w-full`,`flex-col`,`border-x`],[1,`space-y-2`,`p-2`],[1,`bg-base-200`,`flex`,`items-center`,`justify-between`,`rounded-sm`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,3,`click`],[1,`border-base-200`,`flex`,`items-center`,`justify-between`,`rounded-lg`,`border`,`p-1`],[`btn`,``,`matRipple`,``,1,`w-40`,3,`click`],[1,`divide-secondary`,`border-secondary`,`mx-1`,`flex`,`divide-x`,`rounded-sm`,`border`],[`icon`,``,`matRipple`,``,1,`rounded-l`,`rounded-r-none`,3,`click`,`matTooltip`],[`icon`,``,`matRipple`,``,1,`rounded-l-none`,`rounded-r`,3,`click`,`matTooltip`],[1,`flex`,`h-1/2`,`w-full`,`flex-1`,`flex-col`],[1,`flex`,`h-full`,`w-full`,`flex-1`,`items-center`,`justify-center`],[1,`bg-base-200`,`z-0`,`flex`,`h-full`,`w-full`,`flex-1`,`flex-col`,`overflow-auto`],[1,`flex`,`flex-col`,`py-5`],[1,`mx-auto`,`w-[calc(100%-2rem)]`,`max-w-[375px]`],[1,`flex`,`flex-row`,`items-center`],[3,`click`],[1,`text-base-400`,`flex`,`items-center`,`justify-center`,`text-3xl`],[1,`ml-6`,`flex`,`items-center`,`text-lg`,`font-bold`],[1,`mt-3`,`flex`,`flex-row`,`justify-between`,`align-middle`],[1,`flex`,`w-7/12`,`justify-center`],[`btn`,``,`matRipple`,``,1,`filter-button`,`bg-base-200`,`h-9`,`w-full`,`text-sm`,3,`click`],[1,`divide-secondary`,`border-secondary`,`flex`,`divide-x`,`rounded-sm`,`border`],[1,`flex`,`flex-row`],[1,`my-2`,`flex`,`flex-row`,`border-t`],[1,`flex`,`flex-col`],[1,`mt-3`,`text-lg`,`font-bold`],[1,`mt-1`,`text-xs`,`text-gray-500`],[1,`bg-base-200`,`w-full`,`flex-1`],[1,`my-3`,`flex`,`h-full`,`w-full`,`flex-col`,`items-center`,`justify-center`,`space-y-4`],[1,`top-box-shadow`,`border-base-200`,`flex`,`flex-col`,`items-center`,`justify-center`,`border-t`,`py-1`],[1,`h-1/2`,`w-full`,`flex-1`,`px-2`,`pb-2`],[1,`flex`,`flex-col`,`space-y-2`],[`appearance`,`outline`,1,`mr-2`,`ml-auto`,`flex`,`text-sm`],[3,`space`,`selected`],[3,`selectedChange`,`space`,`selected`],[3,`ngModelChange`,`ngModel`],[3,`value`],[1,`bg-base-200`,`flex`,`h-full`,`w-full`,`items-center`,`justify-center`,`rounded-sm`,`opacity-30`],[1,``],[3,`diameter`],[1,`my-6`,`flex`,`h-full`,`w-full`,`flex-col`,`items-center`,`justify-center`,`space-y-2`,`p-2`,`text-center`],[1,`h-full`,`text-center`],[1,`p-2`,`text-center`,`text-sm`,`opacity-60`],[1,`text-sm`,3,`space`,`selected`],[1,`text-sm`,3,`selectedChange`,`space`,`selected`],[1,`relative`,`m-6`,`max-w-screen`],[`appearance`,`outline`,1,`m-3`,`ml-auto`,`flex`,`text-sm`],[1,`relative`,`m-3`,`h-96`,`max-w-screen`],[1,`relative`,`m-3`,`h-48`,`max-w-screen`],[1,`m-1`,`max-w-screen`,`p-1`,3,`src`,`styles`,`features`,`actions`],[`matRipple`,``,`type`,`submit`,1,`open-details-button`,`border-secondary`,`bg-secondary`,`my-1`,`w-[300px]`,3,`click`]],template:function(a,i){a&1&&(Ic(0,`div`,0)(1,`div`,1)(2,`header`,2)(3,`div`,3)(4,`h2`,4),gN(5,`Find Space`),yh(),Ic(6,`button`,5),$c(`click`,function(){return i.closeModal()}),Ic(7,`icon`),gN(8,`close`),yh()()(),Ic(9,`div`,6)(10,`button`,7),$c(`click`,function(){return i.openFilter()}),gN(11,` Filters `),bM(12,qt,2,1,`span`),yh(),Ic(13,`div`,8)(14,`button`,9),kN(15,`translate`),$c(`click`,function(){return i.view.set(`list`)}),Ic(16,`icon`),gN(17,`list`),yh()(),Ic(18,`button`,10),kN(19,`translate`),$c(`click`,function(){return i.view.set(`map`)}),Ic(20,`icon`),gN(21,`map`),yh()()()()(),Ic(22,`main`,11),bM(23,ti,2,1)(24,ii,4,2,`div`,12),yh()()(),Ic(25,`div`,13)(26,`section`,14)(27,`div`,15)(28,`div`,16)(29,`button`,17),$c(`click`,function(){return i.closeModal()}),Ic(30,`icon`,18),gN(31,`close`),yh()(),Ic(32,`span`,19),gN(33,` Find Space`),yh()(),Ic(34,`div`,20)(35,`div`,21)(36,`button`,22),$c(`click`,function(){return i.openFilter()}),Ic(37,`span`),gN(38,`Filter`),yh(),bM(39,ni,2,1,`span`),yh()(),Ic(40,`div`,23)(41,`button`,9),kN(42,`translate`),$c(`click`,function(){return i.view.set(`list`)}),Ic(43,`icon`),gN(44,`list`),yh()(),Ic(45,`button`,10),kN(46,`translate`),$c(`click`,function(){return i.view.set(`map`)}),Ic(47,`icon`),gN(48,`map`),yh()()()(),Hc(49,`section`,24),Ic(50,`section`,25)(51,`div`,26)(52,`span`,27),gN(53,` Results`),yh(),Ic(54,`span`,28),gN(55),yh()()(),Ic(56,`div`,29),bM(57,_i,2,1)(58,fi,4,1,`div`,30),yh()(),Ic(59,`section`,31),bM(60,bi,4,0,`div`),yh()()()),a&2&&(aT(12),SM(i.selected_feature_count()?12:-1),aT(2),$D(`bg-base-100`,i.view()!==`list`)(`bg-secondary`,i.view()===`list`)(`text-secondary-content`,i.view()===`list`),_D(`matTooltip`,LN(15,34,`COMMON.LIST`)),aT(4),$D(`bg-base-100`,i.view()!==`map`)(`bg-secondary`,i.view()===`map`)(`text-secondary-content`,i.view()===`map`),_D(`matTooltip`,LN(19,36,`COMMON.MAP`)),aT(5),SM(i.loading()?24:23),aT(16),SM(i.selected_feature_count()?39:-1),aT(2),$D(`bg-base-100`,i.view()!==`list`)(`bg-secondary`,i.view()===`list`)(`text-secondary-content`,i.view()===`list`),_D(`matTooltip`,LN(42,38,`COMMON.LIST`)),aT(4),$D(`bg-base-100`,i.view()!==`map`)(`bg-secondary`,i.view()===`map`)(`text-secondary-content`,i.view()===`map`),_D(`matTooltip`,LN(46,40,`COMMON.MAP`)),aT(10),bh(` `,i.spaces().length||0,` results found`),aT(2),SM(i.loading()?58:57),aT(3),SM(i.show_room_details()?60:-1))},dependencies:[_a,Xp,Dt$1,Et$1,Ji,Kt$2,qe,ui$1,hi,nO,ut,mt,uB,oB,PN,$ae,Yt$1,mt$1,f],styles:[`.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]{height:2.25rem}.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle-label-content[_ngcontent-%COMP%]{line-height:2.25rem;font-size:.875rem}.mat-button-toggle-label-content[_ngcontent-%COMP%]{font-size:.875rem}.mat-button-toggle-checked[_ngcontent-%COMP%]{border:1px solid var(--%NS%secondary);border-radius:5px;box-shadow:none}.mat-focus-indicator[_ngcontent-%COMP%]{border:none}
/*# sourceMappingURL=find-space.component.css.map */`]})}}return t})();export{xo as FindSpaceComponent};
//# debugId=a7e9ebba-3091-51a5-8b41-b91b4343ab79
//# sourceMappingURL=find-space.component-BEsKa8UC.js.map