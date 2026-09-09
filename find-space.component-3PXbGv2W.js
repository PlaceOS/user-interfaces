import{$t as dM,A as Hy,At as Y_,Bn as n_,Bt as _o,Cr as v_,D as Gi,Dr as w_,Dt as XT,En as kg,Er as vi,Ft as ZS,Gn as oS,Hr as l,Ht as _y,I as JT,Ir as xy,Jn as p,Kn as oc,Kt as bc,Ln as me,Lt as Zy,Nt as Z,P as JD,Pr as xc,Q as Pe,Rr as y_,Rt as _,St as W2,Tn as kN,Un as oD,Ur as m,V as Lf,Y as Og,Yt as cM,Zt as cn,bt as Vf,d as By,er as qS,fn as g_,fr as tD,ft as Sn,hr as t_,ht as Te,i as $t$1,j as Ic,kn as lM,l as Ac,m as D,or as r_,p as Cc,rn as eD,t as $_,u as Ar,ur as rv,wt as Wf,xt as Vy,yn as iD,yr as u_,zn as nM}from"./chunk-DtKoY7OQ.js";import{$ as JO,$i as zO,Gi as xt$1,L as Ey,Li as wd,Mt as PR,Q as J2,Si as tG,Vt as Qe,Zt as SS,_i as sG,_r as iae,an as Up,c as on,di as ra,ft as Ku,mr as iG,nr as eG,on as Ut$1,ri as pi$1,t as Qr,vi as sa,vt as MR,wn as Yt$1}from"./chunk-CQWJilv5.js";import{d as qe,n as mt$1,s as Kt$1,t as Yt$2}from"./main.js";import"./chunk-CBk-UeuZ.js";import"./chunk-DS8GxeXU.js";import{n as Me}from"./chunk-Dk01E-wf.js";import{t as _s}from"./chunk-E7xM0VsC.js";import{a as ui$1,n as Et$1,r as hi,t as Dt$1}from"./chunk-DVGSw_yq.js";import{i as en}from"./chunk-rW0cxW2d.js";import{a as zi,i as ci$1,n as Vn,r as ao,t as $i}from"./chunk-DPx-M3_X.js";import{n as sn,t as Ji}from"./chunk-B4OAfatQ.js";import{t as p$1}from"./chunk-BpSF6lCt.js";import{a as st,i as mt$2,n as Ot$1,r as f}from"./chunk-D1CMdDdF.js";var ht=[`button`];var vt=[`*`];function xt(t,s){if(t&1&&(oc(0,`div`,2),Cc(1,`mat-pseudo-checkbox`,6),Vf()),t&2){let e=g_();oS(),xy(`disabled`,e.disabled)}}var St=new D(`MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS`,{providedIn:`root`,factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})});var Ct=new D(`MatButtonToggleGroup`);var he=class{source;value;constructor(s,e){this.source=s,this.value=e}};var yt=(()=>{class t{_changeDetectorRef=p(_o);_elementRef=p(cn);_focusMonitor=p(ra);_idGenerator=p(Yt$1);_animationDisabled=Ut$1();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new Pe;constructor(){p(xt$1).load(wd);let e=p(Ct,{optional:!0}),a=p(new Ac(`tabindex`),{optional:!0})||``,i=p(St,{optional:!0});this._tabIndex=Z(parseInt(a)||0),this.buttonToggleGroup=e,this._appearance=i&&i.appearance?i.appearance:`standard`,this._disabledInteractive=i?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId(`mat-button-toggle-`),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add(`mat-button-toggle-animations-enabled`),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let a=this.buttonToggleGroup._buttonToggles.find(i=>i.tabIndex===0);a&&(a.tabIndex=-1),this.tabIndex=0}this.change.emit(new he(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static ɵfac=function(a){return new(a||t)};static ɵcmp=Lf({type:t,selectors:[[`mat-button-toggle`]],viewQuery:function(a,i){if(a&1&&By(ht,5),a&2){let d;Vy(d=Hy())&&(i._buttonElement=d.first)}},hostAttrs:[`role`,`presentation`,1,`mat-button-toggle`],hostVars:14,hostBindings:function(a,i){a&1&&bc(`focus`,function(){return i.focus()}),a&2&&(Ic(`aria-label`,null)(`aria-labelledby`,null)(`id`,i.id)(`name`,null),Zy(`mat-button-toggle-standalone`,!i.buttonToggleGroup)(`mat-button-toggle-checked`,i.checked)(`mat-button-toggle-disabled`,i.disabled)(`mat-button-toggle-disabled-interactive`,i.disabledInteractive)(`mat-button-toggle-appearance-standard`,i.appearance===`standard`))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],id:`id`,name:`name`,value:`value`,tabIndex:`tabIndex`,disableRipple:[2,`disableRipple`,`disableRipple`,Gi],appearance:`appearance`,checked:[2,`checked`,`checked`,Gi],disabled:[2,`disabled`,`disabled`,Gi],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Gi]},outputs:{change:`change`},exportAs:[`matButtonToggle`],ngContentSelectors:vt,decls:7,vars:13,consts:[[`button`,``],[`type`,`button`,1,`mat-button-toggle-button`,`mat-focus-indicator`,3,`click`,`id`,`disabled`],[1,`mat-button-toggle-checkbox-wrapper`],[1,`mat-button-toggle-label-content`],[1,`mat-button-toggle-focus-overlay`],[`matRipple`,``,1,`mat-button-toggle-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,3,`disabled`]],template:function(a,i){if(a&1&&(v_(),oc(0,`button`,1,0),bc(`click`,function(){return i._onButtonClick()}),XT(2,xt,2,1,`div`,2),oc(3,`span`,3),y_(4),Vf()(),Cc(5,`span`,4)(6,`span`,5)),a&2){let d=w_(1);xy(`id`,i.buttonId)(`disabled`,i.disabled&&!i.disabledInteractive||null),Ic(`role`,i.isSingleSelector()?`radio`:`button`)(`tabindex`,i.disabled&&!i.disabledInteractive?-1:i.tabIndex)(`aria-pressed`,i.isSingleSelector()?null:i.checked)(`aria-checked`,i.isSingleSelector()?i.checked:null)(`name`,i._getButtonName())(`aria-label`,i.ariaLabel)(`aria-labelledby`,i.ariaLabelledby)(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null),oS(2),JT(i.buttonToggleGroup&&(!i.buttonToggleGroup.multiple&&!i.buttonToggleGroup.hideSingleSelectionIndicator||i.buttonToggleGroup.multiple&&!i.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),oS(4),xy(`matRippleTrigger`,d)(`matRippleDisabled`,i.disableRipple||i.disabled)}},dependencies:[Up,MR],styles:[`.mat-button-toggle-standalone,
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
`],encapsulation:2})}return t})();var mt=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵmod=Ar({type:t});static ɵinj=Sn({imports:[sa,yt,Qe]})}return t})();var de=()=>({standalone:!0});function Tt(t,s){t&1&&(oc(0,`label`,11),$_(1,` Location `),Vf())}function Et(t,s){if(t&1&&(oc(0,`mat-option`,27),$_(1),Vf()),t&2){let e=s.$implicit;xy(`value`,e),oS(),Wf(` `,e.display_name||e.name,` `)}}function Ft(t,s){if(t&1){let e=u_();oc(0,`mat-form-field`,12)(1,`mat-select`,26),bc(`ngModelChange`,function(i){Og(e);return kg(g_(2).setBuilding(i))}),n_(2,Et,2,2,`mat-option`,27,t_),Vf(),qS(),Vf()}if(t&2){let e=g_(2);oS(),xy(`ngModel`,e.building())(`ngModelOptions`,nM(2,de)),ZS(),oS(),r_(e.buildings())}}function Nt(t,s){if(t&1){let e=u_();oc(0,`div`)(1,`div`,28)(2,`span`),$_(3),Vf(),oc(4,`mat-checkbox`,29),iD(`ngModelChange`,function(i){let d=Og(e).$implicit;return Y_(d.value,i)||(d.value=i),kg(i)}),bc(`change`,function(){Og(e);return kg(g_(2).getSelectedFeatures())}),Vf(),qS(),Vf()()}if(t&2){let e=s.$implicit;oS(3),Wf(` `,e.name),oS(),oD(`ngModel`,e.value),xy(`ngModelOptions`,nM(3,de)),ZS()}}function It(t,s){if(t&1){let e=u_();oc(0,`form`,1),bc(`ngSubmit`,function(){Og(e);return kg(g_().applyFilters())}),oc(1,`section`,2)(2,`div`,3)(3,`div`,4)(4,`button`,5),bc(`click`,function(){Og(e);return kg(g_().closeModal())}),oc(5,`icon`,6),$_(6,`close`),Vf()(),oc(7,`span`,7),$_(8,` Space Filters`),Vf()()()(),oc(9,`section`,8)(10,`div`,3)(11,`div`,9),$_(12,`Details`),Vf(),oc(13,`div`,10),XT(14,Tt,2,0,`label`,11),XT(15,Ft,4,3,`mat-form-field`,12),oc(16,`div`,10)(17,`label`,11),$_(18,` Date `),Vf(),Cc(19,`a-date-field`,13),qS(),oc(20,`div`,14)(21,`div`,15)(22,`label`,11),$_(23,` Start Time* `),Vf(),oc(24,`a-time-field`,16),bc(`ngModelChange`,function(i){Og(e);return kg(g_().model.update(W=>m(l({},W),{date:i})))}),Vf(),qS(),Vf(),oc(25,`div`,17)(26,`label`,11),$_(27,` End Time* `),Vf(),Cc(28,`a-duration-field`,18),qS(),Vf()()()()()(),oc(29,`section`,8)(30,`div`,3)(31,`div`,9),$_(32,`Favourites`),Vf(),oc(33,`div`,19)(34,`span`),$_(35,`Only show favourite rooms`),Vf(),oc(36,`mat-checkbox`,20),iD(`ngModelChange`,function(i){Og(e);let d=g_();return Y_(d.show_favourites,i)||(d.show_favourites=i),kg(i)}),Vf(),qS(),Vf()()(),oc(37,`section`,21)(38,`div`,22)(39,`div`,9),$_(40,`Features`),Vf(),n_(41,Nt,5,4,`div`,null,t_),Vf()(),oc(43,`section`,23)(44,`button`,24)(45,`span`,25),$_(46,`Apply Filters`),Vf()()()()}if(t&2){let e=g_();oS(14),JT(e.has_multiple_buildings()?14:-1),oS(),JT(e.has_multiple_buildings()?15:-1),oS(4),xy(`from`,e.minDate)(`formField`,e.form.date),ZS(),oS(5),xy(`ngModel`,e.model().date)(`ngModelOptions`,nM(13,de)),ZS(),oS(4),xy(`time`,e.model().date)(`max`,600)(`min`,60)(`step`,60)(`formField`,e.form.duration),ZS(),oS(8),oD(`ngModel`,e.show_favourites),xy(`ngModelOptions`,nM(14,de)),ZS(),oS(5),r_(e.features())}}var pt=(()=>{class t{constructor(){this.data=p(st),this._bottomsheetRef=p(f),this._featuresFilterService=p(p$1),this._state=p(_s),this._org=p(Ku),this.buildings=this._org.building_list,this.building=this._org.active_building,this.features=this._featuresFilterService.features,this.show_favourites=this._featuresFilterService.show_favourites,this.has_multiple_buildings=Te(()=>this.buildings().length>1),this.form=this._state.form,this.model=this._state.model,this.minDate=Date.now(),this.setBuilding=e=>this._org.building=e}applyFilters(){this._featuresFilterService.applyFilter(),this._bottomsheetRef.dismiss(!0)}getSelectedFeatures(){this._featuresFilterService.getSelectedFeatures()}closeModal(){this._bottomsheetRef.dismiss()}static{this.ɵfac=function(a){return new(a||t)}}static{this.ɵcmp=Lf({type:t,selectors:[[``,`filter-space`,``]],decls:2,vars:1,consts:[[1,`z-0`,`m-0`,`flex`,`min-h-[800px]`,`flex-1`,`flex-col`,`overflow-y-auto`],[3,`ngSubmit`],[1,`border-base-200`,`flex`,`flex-col`,`items-center`,`border-b`,`py-5`],[1,`flex`,`w-[calc(100%-2rem)]`,`max-w-90`,`flex-col`,`self-center`],[1,`flex`,`flex-row`,`items-center`],[`icon`,``,`matRipple`,``,`type`,`button`,3,`click`],[1,`flex`,`items-center`,`justify-center`,`text-3xl`,`text-gray-700`],[1,`ml-6`,`flex`,`items-center`,`text-xl`,`font-bold`],[1,`border-base-200`,`flex`,`flex-col`,`items-center`,`border-b`],[1,`my-2`,`text-lg`],[1,`flex`,`flex-col`],[1,`mb-1`,`text-sm`,`font-bold`,`text-gray-700`],[`overlay`,``,`buildings`,``,`appearance`,`outline`,1,`w-full`],[3,`from`,`formField`],[1,`flex`,`w-full`,`flex-row`,`space-x-2`],[1,`flex`,`w-1/3`,`flex-1`,`flex-col`],[3,`ngModelChange`,`ngModel`,`ngModelOptions`],[1,`ml-auto`,`flex`,`w-1/3`,`flex-1`,`flex-col`],[3,`time`,`max`,`min`,`step`,`formField`],[1,`mb-2`,`flex`,`flex-row`],[1,`ml-auto`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[1,`border-base-200`,`flex`,`flex-col`],[1,`mx-auto`,`w-[calc(100%-2rem)]`,`max-w-90`],[1,`top-box-shadow`,`border-base-200`,`mt-5`,`flex`,`flex-col`,`items-center`,`justify-center`,`border-t`,`py-3`],[`btn`,``,`matRipple`,``,`type`,`submit`,1,`filter-button`,`max-w-[calc(100%`,`-`,`2rem)]`,`border-secondary`,`bg-secondary`,`mx-auto`,`min-w-[300px]`,`text-center`,`text-sm`],[1,``],[`placeholder`,`Select Building...`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[3,`value`],[1,`mb-1`,`flex`,`flex-row`],[1,`checkbox`,`ml-auto`,3,`ngModelChange`,`change`,`ngModel`,`ngModelOptions`]],template:function(a,i){a&1&&(oc(0,`div`,0),XT(1,It,47,15,`form`),Vf()),a&2&&(oS(),JT(i.form?1:-1))},dependencies:[sa,Up,ao,Vn,sG,iG,eG,tG,JO,zO,Qr,zi,ci$1,$i,Kt$1,qe,ui$1,hi,PR,iae],encapsulation:2})}}return t})();var ut=(()=>{class t{constructor(){this._org=p(Ku),this.space=xc(void 0),this.selected=xc(!1),this.selectedChange=W2(),this.level_name=Te(()=>{let e=this._org.levelWithID(this.space()?.zones||[]);return e?.display_name||e?.name||``}),this.space_name=Te(()=>this.space()?.display_name||this.space()?.name||``),this.capacity=Te(()=>this.space()?.capacity||0),this.toggleSelected=()=>this.selectedChange.emit(!this.selected())}static{this.ɵfac=function(a){return new(a||t)}}static{this.ɵcmp=Lf({type:t,selectors:[[`find-space-item`]],inputs:{space:[1,`space`],selected:[1,`selected`]},outputs:{selectedChange:`selectedChange`},decls:11,vars:5,consts:[[`mat-ripple`,``,1,`border-base-300`,`bg-base-100`,`hover:border-info`,`mx-auto`,`flex`,`w-full`,`flex-col`,`space-y-2`,`rounded-lg`,`border`,`p-4`,3,`click`],[1,`flex`,`w-full`,`flex-row`,`items-center`,`space-x-2`],[1,`text-lg`]],template:function(a,i){a&1&&(oc(0,`button`,0),bc(`click`,function(){return i.toggleSelected()}),oc(1,`div`,1)(2,`icon`,2),$_(3,`meeting_room`),Vf(),oc(4,`div`),$_(5),Vf()(),oc(6,`div`,1)(7,`icon`,2),$_(8,`group`),Vf(),oc(9,`div`),$_(10),Vf()()()),a&2&&(Zy(`bg-base-200`,i.selected()),oS(5),tD(` `,i.level_name(),`, `,i.space_name(),` `),oS(5),Wf(``,i.capacity(),` People`))},dependencies:[sa,Up,iae],styles:[`[_nghost-%COMP%]{padding:0 .5rem}
/*# sourceMappingURL=find-space-item.component.css.map */`]})}}return t})();function Rt(t,s){if(t&1&&(oc(0,`div`,14)(1,`div`,7)(2,`icon`,12),$_(3,`people`),Vf()(),oc(4,`div`,7)(5,`span`,19),$_(6),Vf()()()),t&2){let e=s.$implicit;oS(6),eD(e?.email)}}var gt=(()=>{class t{constructor(){this.data=p(st),this._bottomSheetRef=p(f),this._state=p(_s),this._roomConfirmService=p(j),this.form=this._state.form,this.model=this._state.model,this.loading=this._state.loading,this.show_submit_button=Z(!0),this.space=Z(this.data),this._form_value=this.model,this.unix_time=Te(()=>this._form_value()?.date),this.start_time=Te(()=>new Date(this.unix_time()).toLocaleTimeString(`en-US`,{hour:`numeric`,minute:`numeric`,hour12:!0})),this.end_time=Te(()=>{let e=this._form_value()?.duration,a=this.unix_time()+e*60*1e3;return new Date(a).toLocaleTimeString(`en-US`,{hour:`numeric`,minute:`numeric`,hour12:!0})}),this.attendees=Te(()=>this._form_value()?.attendees||[]),this.creator=Te(()=>this._form_value()?.creator||``),this.title=Te(()=>this._form_value()?.title)}closeModal(){this._bottomSheetRef.dismiss(`cancel`)}async confirmBooking(){this.show_submit_button.set(!1),await this._roomConfirmService.bookRoom(this.space())?this._bottomSheetRef.dismiss(!0):this.show_submit_button.set(!0)}static{this.ɵfac=function(a){return new(a||t)}}static{this.ɵcmp=Lf({type:t,selectors:[[`room-confirm`]],decls:63,vars:11,consts:[[1,`z-0`,`mx-auto`,`flex`,`min-h-[800px]`,`w-[calc(100%-2rem)]`,`w-full`,`flex-1`,`flex-col`,`overflow-y-auto`],[1,`border-base-200`,`flex`,`flex-col`,`border-b`,`py-2`],[1,`justify-content`,`flex`,`flex-row`,`items-center`,`space-x-4`],[`icon`,``,`matRipple`,``,3,`click`],[1,`flex`,`items-center`,`justify-center`,`text-3xl`,`text-gray-700`],[1,`mr-auto`,`text-lg`,`font-bold`],[1,`border-base-200`,`mt-4`,`flex`,`flex-row`,`space-x-4`,`border-b`,`pb-4`],[1,`flex`,`flex-col`],[1,`text-base`],[`src`,`assets/tick.svg`],[1,`flex`,`text-base`,`font-bold`,`text-gray-700`],[1,`mt-2`,`flex`,`items-center`,`text-sm`,`text-gray-700`],[1,`flex`,`items-center`],[1,`flex`],[1,`mt-2`,`flex`,`flex-row`,`items-center`,`text-sm`,`text-gray-700`],[1,`mt-4`,`flex`,`flex-row`,`space-x-4`,`pb-4`],[1,`top-box-shadow`,`border-base-200`,`-mx-4`,`mt-5`,`mb-10`,`flex`,`flex-col`,`items-center`,`border-t`,`p-3`],[`matRipple`,``,1,`border-secondary`,`bg-secondary`,`mx-4`,`ml-2`,`w-[300px]`,3,`click`,`disabled`],[1,``],[1,`w-full`]],template:function(a,i){a&1&&(oc(0,`div`,0)(1,`section`,1)(2,`div`,2)(3,`button`,3),bc(`click`,function(){return i.closeModal()}),oc(4,`icon`,4),$_(5,`close`),Vf()(),oc(6,`span`,5),$_(7,` Confirm Room Booking`),Vf()()(),oc(8,`section`,6)(9,`div`,7)(10,`span`,8),Cc(11,`img`,9),Vf()(),oc(12,`div`,7)(13,`span`,10),$_(14),Vf(),oc(15,`div`,11)(16,`icon`,12),$_(17,`calendar_today`),Vf(),oc(18,`span`,13),$_(19),cM(20,`date`),Vf()(),oc(21,`div`,11)(22,`icon`,12),$_(23,`schedule`),Vf(),oc(24,`span`,13),$_(25),Vf()()()(),oc(26,`section`,6)(27,`div`,7)(28,`span`,8),Cc(29,`img`,9),Vf()(),oc(30,`div`,7)(31,`span`,10),$_(32,`Attendees `),Vf(),n_(33,Rt,7,1,`div`,14,t_),oc(35,`div`,14)(36,`div`,7)(37,`icon`,12),$_(38,`people`),Vf()(),oc(39,`div`,7)(40,`span`),$_(41),Vf()()()()(),oc(42,`section`,15)(43,`div`,7)(44,`span`,8),Cc(45,`img`,9),Vf()(),oc(46,`div`,7)(47,`span`,10),$_(48,`Rooms `),Vf(),oc(49,`div`,11)(50,`icon`,12),$_(51,`meeting_room`),Vf(),oc(52,`span`,13),$_(53),Vf()(),oc(54,`div`,11)(55,`icon`,12),$_(56,`room`),Vf(),oc(57,`span`,13),$_(58),Vf()()()(),oc(59,`div`,16)(60,`button`,17),bc(`click`,function(){return i.confirmBooking()}),oc(61,`span`,18),$_(62,`Confirm`),Vf()()()()),a&2&&(oS(14),Wf(``,i.title(),` `),oS(5),Wf(` `,dM(20,8,i.unix_time(),`dd MMMM yyyy`),` `),oS(6),tD(``,i.start_time(),` -`,i.end_time()),oS(8),r_(i.attendees()),oS(8),eD(i.creator()),oS(12),Wf(` `,i.space().name,` `),oS(5),Wf(` `,i.space().level?.name),oS(2),xy(`disabled`,!i.show_submit_button()))},dependencies:[JD,sa,Up,iae,kN],encapsulation:2})}}return t})();function Dt(t,s){if(t&1&&(oc(0,`section`,1),Cc(1,`img`,18),Vf()),t&2){let e=g_();oS(),xy(`source`,e.space()?.images?.[0])(`alt`,`Image of `+(e.space()?.display_name||e.space()?.name))}}function Bt(t,s){t&1&&(oc(0,`button`,5)(1,`span`,19),$_(2,`+ Add this room`),Vf()())}function Vt(t,s){t&1&&(oc(0,`button`,6)(1,`span`,20),$_(2,`- Remove this room`),Vf()())}function Ot(t,s){t&1&&(oc(0,`div`)(1,`icon`,10),$_(2,`panorama`),Vf()())}function At(t,s){t&1&&(oc(0,`div`)(1,`icon`,10),$_(2,`video_camera_front`),Vf()())}function Gt(t,s){t&1&&(oc(0,`div`)(1,`icon`,10),$_(2,`contact_phone`),Vf()())}function jt(t,s){t&1&&(oc(0,`div`)(1,`icon`,10),$_(2,`drive_file_rename_outline`),Vf()())}function Lt(t,s){t&1&&(oc(0,`div`)(1,`icon`,10),$_(2,`draw`),Vf()())}function Pt(t,s){t&1&&(oc(0,`div`)(1,`icon`,10),$_(2,`nest_remote_comfort_sensor`),Vf()())}function zt(t,s){if(t&1&&(oc(0,`div`,22)(1,`div`),XT(2,Ot,3,0,`div`)(3,At,3,0,`div`)(4,Gt,3,0,`div`)(5,jt,3,0,`div`)(6,Lt,3,0,`div`)(7,Pt,3,0,`div`),Vf(),oc(8,`span`,11),$_(9),Vf()()),t&2){let e,a=s.$implicit;oS(2),JT((e=a)===`Views`?2:e===`Projector`?3:e===`VidConf`?4:e===`Whiteboard`?5:e===`Jamboard`?6:e===`Wifi`?7:-1),oS(7),Wf(` `,a,` `)}}function Ut(t,s){if(t&1&&(oc(0,`section`,14)(1,`span`,21),$_(2,`Room Features`),Vf(),n_(3,zt,10,2,`div`,22,t_),Vf()),t&2){let e=g_();oS(3),r_(e.space()?.feature_list)}}function Wt(t,s){if(t&1){let e=u_();oc(0,`button`,23),bc(`click`,function(){Og(e);return kg(g_().back())}),oc(1,`span`,24),$_(2,`Back`),Vf()()}}function Ht(t,s){if(t&1){let e=u_();oc(0,`button`,25),bc(`click`,function(){Og(e);return kg(g_().back())}),oc(1,`span`,19),$_(2,`Confirm`),Vf()()}}var _t=(()=>{class t{constructor(){this.data=p(st),this._bottomSheetRef=p(f),this.space=Z(this.data),this.room_added=Z(!1)}selectRoom(){this.room_added.update(e=>!e)}back(){this.room_added()?this._bottomSheetRef.dismiss(this.space()):this._bottomSheetRef.dismiss(null)}static{this.ɵfac=function(a){return new(a||t)}}static{this.ɵcmp=Lf({type:t,selectors:[[`placeos-room-details`]],decls:25,vars:10,consts:[[1,`z-0`,`flex`,`min-h-[800px]`,`w-full`,`flex-1`,`flex-col`,`overflow-hidden`],[1,`bg-base-200`,`flex`,`min-h-[300px]`,`items-center`,`justify-center`,`text-gray-500`],[1,`border-base-200`,`mx-auto`,`flex`,`w-[calc(100%-2rem)]`,`flex-col`,`border-b`],[1,`mt-3`,`text-lg`,`font-bold`],[1,`w-max-[375px]`,3,`click`],[`btn`,``,`matRipple`,``,1,`border-secondary`,`bg-secondary`,`m-3`,`mx-auto`,`w-full`],[`btn`,``,`matRipple`,``,1,`border-base-200`,`bg-base-200`,`m-3`,`mx-auto`,`w-full`],[1,`border-base-200`,`mx-auto`,`flex`,`w-[calc(100%-2rem)]`,`flex-col`,`border-b`,`p-3`,`pl-0`],[1,`text-base`,`font-bold`],[1,`mt-3`,`flex`,`flex-row`,`items-center`,`text-sm`],[1,`text-info`],[1,`text-sm`,`text-gray-500`],[1,`mt-1`,`flex`,`flex-row`,`items-center`,`text-sm`],[1,`text-gray-500`],[1,`mx-auto`,`flex`,`w-[calc(100%-2rem)]`,`flex-col`,`py-3`],[1,`top-box-shadow`,`border-base-200`,`bg-base-100`,`flex`,`flex-col`,`border-t`,`p-3`],[`btn`,``,`matRipple`,``,1,`border-secondary`,`bg-base-100`,`mx-auto`,`w-full`],[`btn`,``,`matRipple`,``,1,`border-secondary`,`bg-secondary`,`mx-auto`,`w-full`],[`auth`,``,`width`,`100%`,`height`,`100%`,1,`z-20`,`flex`,`rounded-lg`,3,`source`,`alt`],[1,`text-white`],[1,`text-black`],[1,`mb-3`,`text-base`,`font-bold`],[1,`mb-1`,`flex`,`w-full`,`flex-row`],[`btn`,``,`matRipple`,``,1,`border-secondary`,`bg-base-100`,`mx-auto`,`w-full`,3,`click`],[1,`text-secondary`],[`btn`,``,`matRipple`,``,1,`border-secondary`,`bg-secondary`,`mx-auto`,`w-full`,3,`click`]],template:function(a,i){a&1&&(oc(0,`div`,0),XT(1,Dt,2,2,`section`,1),oc(2,`section`,2)(3,`span`,3),$_(4),Vf(),oc(5,`div`,4),bc(`click`,function(){return i.selectRoom()}),XT(6,Bt,3,0,`button`,5),XT(7,Vt,3,0,`button`,6),Vf()(),oc(8,`section`,7)(9,`span`,8),$_(10,`Details`),Vf(),oc(11,`div`,9)(12,`icon`,10),$_(13,`people`),Vf(),oc(14,`span`,11),$_(15),Vf()(),oc(16,`div`,12)(17,`icon`,10),$_(18,`room`),Vf(),oc(19,`span`,13),$_(20),Vf()()(),XT(21,Ut,5,0,`section`,14),oc(22,`div`,15),XT(23,Wt,3,0,`button`,16),XT(24,Ht,3,0,`button`,17),Vf()()),a&2&&(oS(),JT(i.space()?.images?.length>0?1:-1),oS(3),Wf(` `,i.space()?.name),oS(2),JT(i.room_added()?-1:6),oS(),JT(i.room_added()?7:-1),oS(8),Wf(` `,i.space()?.capacity,` People`),oS(5),tD(` `,i.space()?.level?.name,`, `,i.space()?.level?.parent_id),oS(),JT(i.space()?.feature_list.length>0?21:-1),oS(2),JT(i.room_added()?-1:23),oS(),JT(i.room_added()?24:-1))},dependencies:[sa,Up,iae,en],encapsulation:2})}}return t})();var j=(()=>{class t{get form(){return this._state.form}get model(){return this._state.model}constructor(){this._bottomSheet=p(mt$2),this._router=p($t$1),this._state=p(_s),this._spaces=p(Ot$1),this._space_pipe=new Me,this.book_space={},this.space_list=[],this.selected_space=Z(null),this.book_space={},(this._state.model().resources||[]).forEach(a=>this.book_space[a.id]=!0),this.space_list=this._spaces.filter(a=>this.book_space[a.id])}openRoomDetail(e=this.selected_space()){this._bottomSheet.open(_t,{data:e}).afterDismissed().subscribe(i=>{i&&this.openRoomConfirm(i)})}openRoomConfirm(e){e&&this._bottomSheet.open(gt,{data:e})}updateSelectedSpace(e){this.selected_space.set(e)}handleBookEvent(e,a=!0){this.book_space={},this.book_space[e.id]=a}async bookRoom(e){if(!e)return!1;this.handleBookEvent(e);let a=Object.keys(this.book_space).filter(d=>this.book_space[d]),i=await Promise.all(a.map(d=>this._space_pipe.transform(d)));return this.model.update(d=>m(l({},d),{resources:i,system:i[0]})),this.space_list=this._spaces.filter(d=>this.book_space[d.id]),this.postForm()}async postForm(){try{return await this._state.postForm(),await this._router.navigate([`/confirm/success`]),!0}catch(e){return SS(J2(e)||`Unable to book the room.`),!1}}static{this.ɵfac=function(a){return new(a||t)}}static{this.ɵprov=_({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();function $t(t,s){if(t&1&&Cc(0,`img`,4),t&2)xy(`source`,g_().space()?.images?.[0])}function Qt(t,s){t&1&&(oc(0,`div`)(1,`icon`,14),$_(2,`image`),Vf()())}var ft=(()=>{class t{constructor(){this.data=p(st),this._bottomSheetRef=p(f),this._roomConfirmService=p(j),this.space=Z(this.data)}openRoomDetail(){this._roomConfirmService.openRoomDetail(this.space())}cancel(){this._bottomSheetRef.dismiss(null)}static{this.ɵfac=function(a){return new(a||t)}}static{this.ɵcmp=Lf({type:t,selectors:[[`placeos-room-tile`]],decls:23,vars:6,consts:[[1,`z-0`,`flex`,`min-h-min`,`w-full`,`min-w-[400px]`,`flex-1`,`flex-col`,`overflow-hidden`],[1,`justify-content`,`mx-auto`,`flex`,`w-[calc(100%-2rem)]`,`max-w-[375px]`,`items-center`,3,`click`],[1,`bg-base-100`,`mx-4`,`flex`,`h-full`,`w-full`,`flex-col`,`rounded-lg`,`border`],[1,`bg-base-200`,`m-3`,`flex`,`h-44`,`items-center`,`justify-center`,`rounded-lg`,`text-gray-500`],[`auth`,``,`alt`,`image of building `,`width`,`100%`,`height`,`100%`,1,`z-20`,`flex`,`rounded-lg`,3,`source`],[1,`mb-4`,`flex`,`flex-col`],[1,`mx-3`,`mt-1`,`text-xl`,`font-bold`],[1,`mx-3`,`mt-1`,`flex`,`flex-row`,`items-center`,`text-base`],[1,`text-info`],[1,`text-gray-500`],[1,`text-info`,`flex`,`items-center`],[1,`top-box-shadow`,`border-base-200`,`bg-base-100`,`-mx-4`,`mt-5`,`mb-10`,`flex`,`h-full`,`flex-col`,`items-center`,`border-t`,`p-3`],[`btn`,``,`matRipple`,``,1,`border-secondary`,`bg-base-100`,`mx-4`,`ml-2`,`w-[460px]`,3,`click`],[1,`text-secondary`],[1,`text-[8rem]`]],template:function(a,i){a&1&&(oc(0,`div`,0)(1,`div`,1),bc(`click`,function(){return i.openRoomDetail()}),oc(2,`div`,2)(3,`div`,3),XT(4,$t,1,1,`img`,4),XT(5,Qt,3,0,`div`),Vf(),oc(6,`div`,5)(7,`span`,6),$_(8),Vf(),oc(9,`div`,7)(10,`icon`,8),$_(11,`room`),Vf(),oc(12,`span`,9),$_(13),Vf()(),oc(14,`div`,7)(15,`icon`,10),$_(16,`people`),Vf(),oc(17,`span`,9),$_(18),Vf()()()()()(),oc(19,`div`,11)(20,`button`,12),bc(`click`,function(){return i.cancel()}),oc(21,`span`,13),$_(22,`Back`),Vf()()()),a&2&&(oS(4),JT(i.space()?.images?.length>0?4:-1),oS(),JT(i.space()?.images?.length==0?5:-1),oS(3),Wf(` `,i.space()?.name),oS(5),tD(` `,i.space()?.level?.name,`, `,i.space()?.level?.parent_id),oS(5),Wf(` `,i.space()?.capacity))},dependencies:[sa,Up,iae,en],encapsulation:2})}}return t})();var bt=(()=>{class t extends pi$1{constructor(){super(...arguments),this._bottomSheet=p(mt$2),this._roomConfirmService=p(j),this.style_map={},this.map_features=Z([]),this.map_actions=Z([]),this.map_loaded=Z(!1),this.features_loaded=Z(!1),this.selected_space=this._roomConfirmService.selected_space,this.locatable_spaces=Z([]),this.maps_list=Z([])}async locateSpaces(e){let a=e||[];this.locatable_spaces.set(a.map(i=>({id:i.id,name:i.name,map_id:i.map_id,level:i.level}))),await this.loadMap(),this.timeout(`init`,()=>{this.processFeature()},1e3),this.processStyles(),this.map_actions.set(a.map(i=>({id:i.map_id,action:`click`,callback:()=>{this.openRoomTile(i)}})))}async loadMap(){this.map_loaded.set(!1);let e=this.locatable_spaces().map(a=>({map_id:a.level.map_id,level:a.level.name}));this.maps_list.set([...new Map(e.map(a=>[a.map_id,a])).values()]),this.map_loaded.set(!0)}processFeature(){this.features_loaded.set(!1);let e=this.locatable_spaces().map(a=>({location:a.map_id,content:sn,data:{name:a.name},z_index:99,zoom:100}));this.map_features.set(e),this.features_loaded.set(!0)}processStyles(){let e={};e[`#zones`]={display:`none`},e[`#Zones`]={display:`none`},this.style_map=e}openRoomTile(e){this._bottomSheet.open(ft,{panelClass:`bottom-sheet-transparent`,data:e}),this._roomConfirmService.handleBookEvent(e,!0)}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=rv(t)))(i||t)}})()}static{this.ɵprov=_({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();function qt(t,s){if(t&1&&(oc(0,`span`),$_(1),Vf()),t&2){let e=g_();oS(),Wf(` (`,e.selected_feature_count(),` applied) `)}}function Zt(t,s){if(t&1){let e=u_();oc(0,`find-space-item`,36),bc(`selectedChange`,function(i){let d=Og(e).$implicit;return kg(g_(4).handleBookEvent(d,i))}),Vf()}if(t&2){let e=s.$implicit,a=g_(4);xy(`space`,e)(`selected`,a.book_space()[e.id])}}function Jt(t,s){if(t&1&&(oc(0,`div`,33),n_(1,Zt,1,2,`find-space-item`,35,t_),Vf()),t&2){let e=g_(3);oS(),r_(e.spaces())}}function Kt(t,s){if(t&1&&(oc(0,`mat-option`,38),$_(1),Vf()),t&2){let e=s.$implicit;xy(`value`,e),oS(),eD(e.level)}}function Xt(t,s){if(t&1){let e=u_();oc(0,`mat-form-field`,34)(1,`mat-select`,37),bc(`ngModelChange`,function(i){Og(e);return kg(g_(3).updateSelectedLevel(i))}),oc(2,`mat-option`,38),$_(3),cM(4,`translate`),Vf(),n_(5,Kt,2,2,`mat-option`,38,t_),Vf(),qS(),Vf()}if(t&2){let e=g_(3);oS(),xy(`ngModel`,e.selected_level()),ZS(),oS(),xy(`value`,e.maps_list()),oS(),Wf(` `,lM(4,3,`COMMON.LEVEL_ALL`),` `),oS(2),r_(e.maps_list())}}function Yt(t,s){if(t&1&&XT(0,Jt,3,0,`div`,33)(1,Xt,7,5,`mat-form-field`,34),t&2)JT(g_(2).view()===`list`?0:1)}function ei(t,s){t&1&&(oc(0,`div`,32)(1,`div`,39)(2,`p`,40),$_(3,`No spaces`),Vf()()())}function ti(t,s){if(t&1&&XT(0,Yt,2,1)(1,ei,4,0,`div`,32),t&2)JT(g_().spaces().length>0?0:1)}function ii(t,s){if(t&1&&(oc(0,`div`,12),Cc(1,`mat-spinner`,41),oc(2,`p`),$_(3),Vf()()),t&2){let e=g_();oS(),xy(`diameter`,32),oS(2),eD(e.loading())}}function ni(t,s){if(t&1&&(oc(0,`span`),$_(1),Vf()),t&2){let e=g_();oS(),Wf(` (`,e.selected_feature_count(),` applied) `)}}function oi(t,s){if(t&1){let e=u_();oc(0,`find-space-item`,46),bc(`selectedChange`,function(i){let d=Og(e).$implicit;return kg(g_(4).handleBookEvent(d,i))}),Vf()}if(t&2){let e=s.$implicit,a=g_(4);xy(`space`,e)(`selected`,a.book_space()[e.id])}}function ai(t,s){if(t&1&&(oc(0,`div`),n_(1,oi,1,2,`find-space-item`,45,t_),Vf()),t&2){let e=g_(3);oS(),r_(e.spaces())}}function li(t,s){if(t&1&&(oc(0,`mat-option`,38),$_(1),Vf()),t&2){let e=s.$implicit;xy(`value`,e),oS(),eD(e.level)}}function ri(t,s){if(t&1){let e=u_();oc(0,`div`)(1,`mat-form-field`,48)(2,`mat-select`,37),bc(`ngModelChange`,function(i){Og(e);return kg(g_(4).updateSelectedLevel(i))}),oc(3,`mat-option`,38),$_(4),cM(5,`translate`),Vf(),n_(6,li,2,2,`mat-option`,38,t_),Vf(),qS(),Vf()()}if(t&2){let e=g_(4);oS(2),xy(`ngModel`,e.selected_level()),ZS(),oS(),xy(`value`,e.maps_list()),oS(),Wf(` `,lM(5,3,`COMMON.LEVEL_ALL`),` `),oS(2),r_(e.maps_list())}}function si(t,s){if(t&1&&(oc(0,`div`,50),Cc(1,`interactive-map`,51),Vf()),t&2){let e=s.$implicit,a=g_(6);oS(),xy(`src`,e?.map_id)(`styles`,a.map_styles())(`features`,a.map_features())(`actions`,a.map_actions())}}function ci(t,s){if(t&1&&(oc(0,`div`),n_(1,si,2,4,`div`,50,t_),Vf()),t&2){let e=g_(5);oS(),r_(e.selected_level_maps())}}function di(t,s){if(t&1&&(oc(0,`div`,49),Cc(1,`interactive-map`,51),Vf()),t&2){let e=g_(5);oS(),xy(`src`,e.selected_map()?.map_id)(`styles`,e.map_styles())(`features`,e.map_features())(`actions`,e.map_actions())}}function mi(t,s){if(t&1&&(oc(0,`div`,47),XT(1,ci,3,0,`div`),XT(2,di,2,4,`div`,49),Vf()),t&2){let e=g_(4);oS(),JT(e.selected_all_levels()?1:-1),oS(),JT(e.selected_all_levels()?-1:2)}}function pi(t,s){if(t&1&&(oc(0,`div`,43),XT(1,ri,8,5,`div`),XT(2,mi,3,2,`div`,47),Vf()),t&2){let e=g_(3);oS(),JT(e.maps_list().length>1?1:-1),oS(),JT(e.selected_level()?2:-1)}}function ui(t,s){if(t&1&&(XT(0,ai,3,0,`div`),XT(1,pi,3,2,`div`,43),oc(2,`p`,44),$_(3,` End of available spaces list `),Vf()),t&2){let e=g_(2);JT(e.view()===`list`?0:-1),oS(),JT(e.view()===`map`&&e.map_features().length>0?1:-1)}}function gi(t,s){t&1&&(oc(0,`div`,42)(1,`p`),$_(2,` No available spaces for selected time, capacity or level(s) `),Vf()())}function _i(t,s){if(t&1&&XT(0,ui,4,2)(1,gi,3,0,`div`,42),t&2)JT(g_().spaces().length>0?0:1)}function fi(t,s){t&1&&(oc(0,`div`,30),Cc(1,`mat-spinner`,41),oc(2,`p`),$_(3,`Retrieving available spaces...`),Vf()()),t&2&&(oS(),xy(`diameter`,32))}function bi(t,s){if(t&1){let e=u_();oc(0,`div`)(1,`button`,52),bc(`click`,function(){Og(e);return kg(g_().openRoomDetails())}),oc(2,`span`,40),$_(3,`View Room`),Vf()()()}}var xo=(()=>{class t extends pi$1{get form(){return this._state.form}get model(){return this._state.model}constructor(){super(),this._bottomSheet=p(mt$2),this._org=p(Ku),this._spaces=p(Ot$1),this._state=p(_s),this._featuresFilterService=p(p$1),this._mapService=p(bt),this._roomConfirmService=p(j),this._router=p($t$1),this._injector=p(me),this.show_room_details=Z(!1),this.view=Z(`list`),this.selected_features=this._featuresFilterService.selected_features,this.selected_feature_count=Te(()=>this.selected_features()?.length||0),this.loading=this._state.loading,this.spaces=this._featuresFilterService.filtered_spaces,this.maps_list=this._mapService.maps_list,this.map_features=Z([]),this.map_actions=this._mapService.map_actions,this.map_styles=Z(null),this.selected_level=Z(null),this.selected_all_levels=Te(()=>Array.isArray(this.selected_level())),this.selected_level_maps=Te(()=>{let e=this.selected_level();return Array.isArray(e)?e:[]}),this.selected_map=Te(()=>{let e=this.selected_level();return Array.isArray(e)?null:e}),this.book_space=Z({}),this.buildings=this._org.building_list,this.setBuilding=e=>this._org.building=e,vi(()=>{let e=this.maps_list();e?.length&&!this.selected_level()&&this.selected_level.set(e)})}async ngOnInit(){this.view.set(`list`),this._state.setView(`find`),await this._org.waitUntilInitialised(),await Ey(this._spaces.initialised,e=>!!e,this._injector),await this._state.listAvailableSpaces(),this.setBuilding(this._org.building),this.book_space.set({}),await this._mapService.locateSpaces(this.spaces()),await Ey(this._mapService.features_loaded,e=>!!e,this._injector),this.applyMapDecorations(),this.map_features.set(this._mapService.map_features())}handleBookEvent(e,a=!0){this.book_space.set(a?{[e.id]:!0}:{}),this._roomConfirmService.book_space=this.book_space(),this._roomConfirmService.handleBookEvent(e,a),this.show_room_details.set(a),this._roomConfirmService.updateSelectedSpace(a?e:null)}openFilter(){this.bottomSheetRef=this._bottomSheet.open(pt,{data:this.buildings()}),this.subscription(`filter-sheet`,this.bottomSheetRef.afterDismissed().subscribe(e=>{e&&this.refreshMap()}))}async refreshMap(){await this._mapService.locateSpaces(this.spaces()),this._mapService.processFeature(),this.selected_level.set(this.maps_list()),this.processStyles(),this.map_features.set(this._mapService.map_features())}openRoomDetails(){this._roomConfirmService.openRoomDetail()}updateSelectedLevel(e){this.selected_level.set(e),Array.isArray(this.selected_level())||this.applyMapDecorations()}applyMapDecorations(){this.timeout(`init`,()=>{this.processFeature(),this.processStyles()},1500)}processFeature(){this.map_features.set(this._mapService.map_features())}processStyles(){this.map_styles.set(this._mapService.style_map)}closeModal(){this._router.navigate([`/book/spaces`]),this._featuresFilterService.clearFilter()}static{this.ɵfac=function(a){return new(a||t)}}static{this.ɵcmp=Lf({type:t,selectors:[[`find-space`]],features:[_y],decls:61,vars:42,consts:[[1,`bg-base-200`,`fixed`,`inset-0`,`z-10`,`flex`,`flex-col`],[1,`border-base-300`,`bg-base-100`,`mx-auto`,`flex`,`h-full`,`w-lg`,`max-w-full`,`flex-col`,`border-x`],[1,`space-y-2`,`p-2`],[1,`bg-base-200`,`flex`,`items-center`,`justify-between`,`rounded-sm`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,3,`click`],[1,`border-base-200`,`flex`,`items-center`,`justify-between`,`rounded-lg`,`border`,`p-1`],[`btn`,``,`matRipple`,``,1,`w-40`,3,`click`],[1,`divide-secondary`,`border-secondary`,`mx-1`,`flex`,`divide-x`,`rounded-sm`,`border`],[`icon`,``,`matRipple`,``,1,`rounded-l`,`rounded-r-none`,3,`click`,`matTooltip`],[`icon`,``,`matRipple`,``,1,`rounded-l-none`,`rounded-r`,3,`click`,`matTooltip`],[1,`flex`,`h-1/2`,`w-full`,`flex-1`,`flex-col`],[1,`flex`,`h-full`,`w-full`,`flex-1`,`items-center`,`justify-center`],[1,`bg-base-200`,`z-0`,`flex`,`h-full`,`w-full`,`flex-1`,`flex-col`,`overflow-auto`],[1,`flex`,`flex-col`,`py-5`],[1,`mx-auto`,`w-[calc(100%-2rem)]`,`max-w-[375px]`],[1,`flex`,`flex-row`,`items-center`],[3,`click`],[1,`text-base-400`,`flex`,`items-center`,`justify-center`,`text-3xl`],[1,`ml-6`,`flex`,`items-center`,`text-lg`,`font-bold`],[1,`mt-3`,`flex`,`flex-row`,`justify-between`,`align-middle`],[1,`flex`,`w-7/12`,`justify-center`],[`btn`,``,`matRipple`,``,1,`filter-button`,`bg-base-200`,`h-9`,`w-full`,`text-sm`,3,`click`],[1,`divide-secondary`,`border-secondary`,`flex`,`divide-x`,`rounded-sm`,`border`],[1,`flex`,`flex-row`],[1,`my-2`,`flex`,`flex-row`,`border-t`],[1,`flex`,`flex-col`],[1,`mt-3`,`text-lg`,`font-bold`],[1,`mt-1`,`text-xs`,`text-gray-500`],[1,`bg-base-200`,`w-full`,`flex-1`],[1,`my-3`,`flex`,`h-full`,`w-full`,`flex-col`,`items-center`,`justify-center`,`space-y-4`],[1,`top-box-shadow`,`border-base-200`,`flex`,`flex-col`,`items-center`,`justify-center`,`border-t`,`py-1`],[1,`h-1/2`,`w-full`,`flex-1`,`px-2`,`pb-2`],[1,`flex`,`flex-col`,`space-y-2`],[`appearance`,`outline`,1,`mr-2`,`ml-auto`,`flex`,`text-sm`],[3,`space`,`selected`],[3,`selectedChange`,`space`,`selected`],[3,`ngModelChange`,`ngModel`],[3,`value`],[1,`bg-base-200`,`flex`,`h-full`,`w-full`,`items-center`,`justify-center`,`rounded-sm`,`opacity-30`],[1,``],[3,`diameter`],[1,`my-6`,`flex`,`h-full`,`w-full`,`flex-col`,`items-center`,`justify-center`,`space-y-2`,`p-2`,`text-center`],[1,`h-full`,`text-center`],[1,`p-2`,`text-center`,`text-sm`,`opacity-60`],[1,`text-sm`,3,`space`,`selected`],[1,`text-sm`,3,`selectedChange`,`space`,`selected`],[1,`relative`,`m-6`,`max-w-screen`],[`appearance`,`outline`,1,`m-3`,`ml-auto`,`flex`,`text-sm`],[1,`relative`,`m-3`,`h-96`,`max-w-screen`],[1,`relative`,`m-3`,`h-48`,`max-w-screen`],[1,`m-1`,`max-w-screen`,`p-1`,3,`src`,`styles`,`features`,`actions`],[`matRipple`,``,`type`,`submit`,1,`open-details-button`,`border-secondary`,`bg-secondary`,`my-1`,`w-[300px]`,3,`click`]],template:function(a,i){a&1&&(oc(0,`div`,0)(1,`div`,1)(2,`header`,2)(3,`div`,3)(4,`h2`,4),$_(5,`Find Space`),Vf(),oc(6,`button`,5),bc(`click`,function(){return i.closeModal()}),oc(7,`icon`),$_(8,`close`),Vf()()(),oc(9,`div`,6)(10,`button`,7),bc(`click`,function(){return i.openFilter()}),$_(11,` Filters `),XT(12,qt,2,1,`span`),Vf(),oc(13,`div`,8)(14,`button`,9),cM(15,`translate`),bc(`click`,function(){return i.view.set(`list`)}),oc(16,`icon`),$_(17,`list`),Vf()(),oc(18,`button`,10),cM(19,`translate`),bc(`click`,function(){return i.view.set(`map`)}),oc(20,`icon`),$_(21,`map`),Vf()()()()(),oc(22,`main`,11),XT(23,ti,2,1)(24,ii,4,2,`div`,12),Vf()()(),oc(25,`div`,13)(26,`section`,14)(27,`div`,15)(28,`div`,16)(29,`button`,17),bc(`click`,function(){return i.closeModal()}),oc(30,`icon`,18),$_(31,`close`),Vf()(),oc(32,`span`,19),$_(33,` Find Space`),Vf()(),oc(34,`div`,20)(35,`div`,21)(36,`button`,22),bc(`click`,function(){return i.openFilter()}),oc(37,`span`),$_(38,`Filter`),Vf(),XT(39,ni,2,1,`span`),Vf()(),oc(40,`div`,23)(41,`button`,9),cM(42,`translate`),bc(`click`,function(){return i.view.set(`list`)}),oc(43,`icon`),$_(44,`list`),Vf()(),oc(45,`button`,10),cM(46,`translate`),bc(`click`,function(){return i.view.set(`map`)}),oc(47,`icon`),$_(48,`map`),Vf()()()(),Cc(49,`section`,24),oc(50,`section`,25)(51,`div`,26)(52,`span`,27),$_(53,` Results`),Vf(),oc(54,`span`,28),$_(55),Vf()()(),oc(56,`div`,29),XT(57,_i,2,1)(58,fi,4,1,`div`,30),Vf()(),oc(59,`section`,31),XT(60,bi,4,0,`div`),Vf()()()),a&2&&(oS(12),JT(i.selected_feature_count()?12:-1),oS(2),Zy(`bg-base-100`,i.view()!==`list`)(`bg-secondary`,i.view()===`list`)(`text-secondary-content`,i.view()===`list`),xy(`matTooltip`,lM(15,34,`COMMON.LIST`)),oS(4),Zy(`bg-base-100`,i.view()!==`map`)(`bg-secondary`,i.view()===`map`)(`text-secondary-content`,i.view()===`map`),xy(`matTooltip`,lM(19,36,`COMMON.MAP`)),oS(5),JT(i.loading()?24:23),oS(16),JT(i.selected_feature_count()?39:-1),oS(2),Zy(`bg-base-100`,i.view()!==`list`)(`bg-secondary`,i.view()===`list`)(`text-secondary-content`,i.view()===`list`),xy(`matTooltip`,lM(42,38,`COMMON.LIST`)),oS(4),Zy(`bg-base-100`,i.view()!==`map`)(`bg-secondary`,i.view()===`map`)(`text-secondary-content`,i.view()===`map`),xy(`matTooltip`,lM(46,40,`COMMON.MAP`)),oS(10),Wf(` `,i.spaces().length||0,` results found`),oS(2),JT(i.loading()?58:57),oS(3),JT(i.show_room_details()?60:-1))},dependencies:[sa,Up,Dt$1,Et$1,Ji,Kt$1,qe,ui$1,hi,PR,ut,mt,sG,eG,JO,iae,Yt$2,mt$1,on],styles:[`.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]{height:2.25rem}.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle-label-content[_ngcontent-%COMP%]{line-height:2.25rem;font-size:.875rem}.mat-button-toggle-label-content[_ngcontent-%COMP%]{font-size:.875rem}.mat-button-toggle-checked[_ngcontent-%COMP%]{border:1px solid var(--%NS%secondary);border-radius:5px;box-shadow:none}.mat-focus-indicator[_ngcontent-%COMP%]{border:none}
/*# sourceMappingURL=find-space.component.css.map */`]})}}return t})();export{xo as FindSpaceComponent};
//# debugId=38603a21-7395-5464-850d-c4c8db3ffb8f
//# sourceMappingURL=find-space.component-3PXbGv2W.js.map