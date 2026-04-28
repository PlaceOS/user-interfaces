import{$ as Ye,$a as $n,$c as dd,A as Gt,Aa as Mn,Ac as co,Ad as Vi,B as Ht,Ba as Ze,Bb as Cs,Bd as Tl,C as mh,Ca as Ah,Cb as Wh,Cc as ho,D as bl,Db as Xh,Dc as td,Dd as mo,Eb as lr,Ec as uo,Ed,Fb as Rs,G as Ml,Gc as id,Gd as Jn,Hb as qh,Hc as nd,Ib as Yh,Ic as sd,J as Ue,Ja as jr,Jb as Is,Jc as rd,Jd as Al,K as vi,Ka as Qr,Kb as $h,Kc as di,Kd as Jt,L as _h,Lc as od,Ld as Ls,M as $r,Mb as Zh,Mc as ad,Md as Cl,N as Ms,Na as Pt,Nb as io,Nc as Ii,Oa as Dt,Ob as ki,P as gh,Pb as El,Q as cn,Qa as Ts,Qb as Jh,R as j,Rb as Kh,Rd as Td,S as xh,Sb as no,Sd as _o,T as vh,Ta as Ft,Tb as vt,Tc as jt,Ua as Ch,V as It,Va as Rh,Vb as so,W as Zr,Wa as ji,Wb as Wt,Wc as ld,Wd as Ad,X as Ki,Xa as Yn,Xc as Ds,Xd as Rl,Y as hn,Ya as Ih,Yb as Ps,Yc as cd,Yd as dr,Z as Ss,Za as As,Zb as ro,Zc as hd,_ as qe,_a as Ph,_b as jh,_c as fo,a as ct,aa as Xn,ab as Dh,ac as Zn,b as ni,ba as Ui,bb as Lh,bd as po,ca as Oi,cb as Nh,cc as Qh,cd as ud,ce as Cd,d as $t,da as $e,dc as oi,de as Rd,e as hh,ea as Y,eb as Fh,ec as oo,ed as Ut,ee as Id,f as Et,fa as J,fc as En,fd,fe as go,g as dh,ga as dt,gc as ao,gd as pd,ge as Pd,ha as yh,he as xo,i as Xe,ia as Sl,ie as Dd,j as xt,ja as ri,jb as eo,je as Ld,k as uh,ka as bh,kb as to,kd as md,ke as Nd,l as si,la as et,lc as Bi,ld as _d,le as Fd,m as Zt,ma as Ie,mb as Uh,me as Ud,n as Kt,na as Jr,nb as Oh,nc as cr,ne as Il,o as bs,oa as Kr,ob as Sn,oc as Xt,p as Vt,pa as Mh,pb as kh,pc as hr,pd as bi,pe as Od,qa as Sh,qb as Bh,qe as Kn,r as Rt,ra as wh,rb as wn,re as vo,s as Wn,sa as ws,sb as wl,sd as gd,se as Pl,ta as Es,td as xd,u as fh,ua as yi,ub as zh,ud as vd,v as bn,va as qn,vb as ar,vd as yd,w as Yr,wa as dn,wb as Lt,wd as bd,x as ph,xa as Eh,xb as Vh,xc as ed,xd as Md,ya as Th,yb as Gh,yc as lo,yd as Sd,z as ge,za as fe,zb as Hh,zc as zi,zd as wd}from"./chunk-4AIN2HTP.js";var Uf=["switch"],Of=["*"];function kf(n,t){n&1&&(Y(0,"span",11),mh(),Y(1,"svg",13),dt(2,"path",14),J(),Y(3,"svg",15),dt(4,"path",16),J()())}var Bf=new ph("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),yo=class{source;checked;constructor(t,e){this.source=t,this.checked=e}},Dl=(()=>{class n{_elementRef=ge(Ms);_focusMonitor=ge(id);_changeDetectorRef=ge(Ph);defaults=ge(Bf);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new yo(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=rd();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new Ml;toggleChange=new Ml;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){ge(nd).load(od);let e=ge(new Ch("tabindex"),{optional:!0}),i=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=i.color||"accent",this.id=this._uniqueId=ge(sd).getId("mat-mdc-slide-toggle-"),this.hideIcon=i.hideIcon??!1,this.disabledInteractive=i.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new yo(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=It({type:n,selectors:[["mat-slide-toggle"]],viewQuery:function(i,s){if(i&1&&Mh(Uf,5),i&2){let r;Sh(r=wh())&&(s._switchElement=r.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(i,s){i&2&&(bh("id",s.id),Ss("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),Th(s.color?"mat-"+s.color:""),dn("mat-mdc-slide-toggle-focused",s._focused)("mat-mdc-slide-toggle-checked",s.checked)("_mat-animation-noopable",s._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",$n],color:"color",disabled:[2,"disabled","disabled",$n],disableRipple:[2,"disableRipple","disableRipple",$n],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Dh(e)],checked:[2,"checked","checked",$n],hideIcon:[2,"hideIcon","hideIcon",$n],disabledInteractive:[2,"disabledInteractive","disabledInteractive",$n]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[jr([{provide:Vh,useExisting:fh(()=>n),multi:!0},{provide:Hh,useExisting:n,multi:!0}]),_h],ngContentSelectors:Of,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(i,s){if(i&1&&(Jr(),Y(0,"div",1)(1,"button",2,0),et("click",function(){return s._handleClick()}),dt(3,"div",3)(4,"span",4),Y(5,"span",5)(6,"span",6)(7,"span",7),dt(8,"span",8),J(),Y(9,"span",9),dt(10,"span",10),J(),qe(11,kf,5,0,"span",11),J()()(),Y(12,"label",12),et("click",function(o){return o.stopPropagation()}),Kr(13),J()()),i&2){let r=yi(2);$e("labelPosition",s.labelPosition),j(),dn("mdc-switch--selected",s.checked)("mdc-switch--unselected",!s.checked)("mdc-switch--checked",s.checked)("mdc-switch--disabled",s.disabled)("mat-mdc-slide-toggle-disabled-interactive",s.disabledInteractive),$e("tabIndex",s.disabled&&!s.disabledInteractive?-1:s.tabIndex)("disabled",s.disabled&&!s.disabledInteractive),Ss("id",s.buttonId)("name",s.name)("aria-label",s.ariaLabel)("aria-labelledby",s._getAriaLabelledBy())("aria-describedby",s.ariaDescribedby)("aria-required",s.required||null)("aria-checked",s.checked)("aria-disabled",s.disabled&&s.disabledInteractive?"true":null),j(9),$e("matRippleTrigger",r)("matRippleDisabled",s.disableRipple||s.disabled)("matRippleCentered",!0),j(),Ye(s.hideIcon?-1:11),j(),$e("for",s.buttonId),Ss("id",s._labelId)}},dependencies:[di,fd],styles:[`.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative;width:var(--mat-slide-toggle-track-width, 52px)}.mdc-switch.mdc-switch--disabled{cursor:default;pointer-events:none}.mdc-switch.mat-mdc-slide-toggle-disabled-interactive{pointer-events:auto}.mdc-switch__track{overflow:hidden;position:relative;width:100%;height:var(--mat-slide-toggle-track-height, 32px);border-radius:var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full))}.mdc-switch--disabled.mdc-switch .mdc-switch__track{opacity:var(--mat-slide-toggle-disabled-track-opacity, 0.12)}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%;border-width:var(--mat-slide-toggle-track-outline-width, 2px);border-color:var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline))}.mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track::after{border-width:var(--mat-slide-toggle-selected-track-outline-width, 2px);border-color:var(--mat-slide-toggle-selected-track-outline-color, transparent)}.mdc-switch--disabled .mdc-switch__track::before,.mdc-switch--disabled .mdc-switch__track::after{border-width:var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);border-color:var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface))}@media(forced-colors: active){.mdc-switch__track{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0);background:var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::before{opacity:var(--mat-slide-toggle-hidden-track-opacity, 0);transition:var(--mat-slide-toggle-hidden-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::before{opacity:var(--mat-slide-toggle-visible-track-opacity, 1);transition:var(--mat-slide-toggle-visible-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:active .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before,.mdc-switch.mdc-switch--disabled .mdc-switch__track::before{background:var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch__track::after{transform:translateX(-100%);background:var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary))}[dir=rtl] .mdc-switch__track::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::after{transform:translateX(0)}.mdc-switch--selected .mdc-switch__track::after{opacity:var(--mat-slide-toggle-visible-track-opacity, 1);transition:var(--mat-slide-toggle-visible-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::after{opacity:var(--mat-slide-toggle-hidden-track-opacity, 0);transition:var(--mat-slide-toggle-hidden-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:active .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after,.mdc-switch.mdc-switch--disabled .mdc-switch__track::after{background:var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface))}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0);width:calc(100% - var(--mat-slide-toggle-handle-width))}[dir=rtl] .mdc-switch__handle-track{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto;transition:width 75ms cubic-bezier(0.4, 0, 0.2, 1),height 75ms cubic-bezier(0.4, 0, 0.2, 1),margin 75ms cubic-bezier(0.4, 0, 0.2, 1);width:var(--mat-slide-toggle-handle-width);height:var(--mat-slide-toggle-handle-height);border-radius:var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full))}[dir=rtl] .mdc-switch__handle{left:auto;right:0}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle{width:var(--mat-slide-toggle-unselected-handle-size, 16px);height:var(--mat-slide-toggle-unselected-handle-size, 16px);margin:var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle{width:var(--mat-slide-toggle-selected-handle-size, 24px);height:var(--mat-slide-toggle-selected-handle-size, 24px);margin:var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons){width:var(--mat-slide-toggle-with-icon-handle-size, 24px);height:var(--mat-slide-toggle-with-icon-handle-size, 24px)}.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle{width:var(--mat-slide-toggle-pressed-handle-size, 28px);height:var(--mat-slide-toggle-pressed-handle-size, 28px)}.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px)}.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after{opacity:var(--mat-slide-toggle-disabled-selected-handle-opacity, 1)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after{opacity:var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38)}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media(forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch--selected:enabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary))}.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after,.mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface))}.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline))}.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface))}.mdc-switch__handle::before{background:var(--mat-slide-toggle-handle-surface-color)}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mat-slide-toggle-handle-elevation-shadow)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow,.mdc-switch.mdc-switch--disabled .mdc-switch__shadow{box-shadow:var(--mat-slide-toggle-disabled-handle-elevation-shadow)}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1;width:var(--mat-slide-toggle-state-layer-size, 40px);height:var(--mat-slide-toggle-state-layer-size, 40px)}.mdc-switch__ripple::after{content:"";opacity:0}.mdc-switch--disabled .mdc-switch__ripple::after{display:none}.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after{display:block}.mdc-switch:hover .mdc-switch__ripple::after{transition:75ms opacity cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after,.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch__icons{position:relative;height:100%;width:100%;z-index:1;transform:translateZ(0)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons{opacity:var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons{opacity:var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38)}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--unselected .mdc-switch__icon{width:var(--mat-slide-toggle-unselected-icon-size, 16px);height:var(--mat-slide-toggle-unselected-icon-size, 16px);fill:var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__icon{width:var(--mat-slide-toggle-selected-icon-size, 16px);height:var(--mat-slide-toggle-selected-icon-size, 16px);fill:var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container))}.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface))}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle{-webkit-user-select:none;user-select:none;display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,.mat-mdc-slide-toggle .mdc-switch__ripple::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty){transform:translateZ(0)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before{content:""}.mat-mdc-slide-toggle .mat-internal-form-field{color:var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-slide-toggle .mat-ripple-element{opacity:.12}.mat-mdc-slide-toggle .mat-focus-indicator::before{border-radius:50%}.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after{transition:none}.mat-mdc-slide-toggle .mdc-switch:enabled+.mdc-label{cursor:pointer}.mat-mdc-slide-toggle .mdc-switch--disabled+label{color:var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-slide-toggle label:empty{display:none}.mat-mdc-slide-toggle-touch-target{position:absolute;top:50%;left:50%;height:var(--mat-slide-toggle-touch-target-size, 48px);width:100%;transform:translate(-50%, -50%);display:var(--mat-slide-toggle-touch-target-display, block)}[dir=rtl] .mat-mdc-slide-toggle-touch-target{left:auto;right:50%;transform:translate(50%, -50%)}
`],encapsulation:2,changeDetection:0})}return n})(),kd=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Zr({type:n});static \u0275inj=Yr({imports:[Dl,ad]})}return n})();function Vf(n,t){if(n&1){let e=ri();Y(0,"button",1),et("click",function(){Gt(e);let s=Ie();return Ht(s.setDarkMode(!s.dark_mode()))}),Y(1,"div"),fe(2,"Dark Mode"),J(),Y(3,"mat-slide-toggle",2),et("ngModelChange",function(s){Gt(e);let r=Ie();return Ht(r.setDarkMode(s))}),J()()}if(n&2){let e=Ie();j(3),$e("ngModel",e.dark_mode())}}var bo=(()=>{class n extends Lt{constructor(){super(...arguments),this._settings=ge(Xt),this._allow_dark_mode=this._settings.signal("allow_dark_mode",!1),this._accessible=this._settings.signal("accessible",!1,!0),this._font_size=this._settings.signal("font_size",16,!0),this.can_change_dark_mode=Ft(()=>!!this._allow_dark_mode()),this.dark_mode=Ft(()=>this.can_change_dark_mode()&&this._settings.theme_signal()==="dark"),this.isometric=Ue(localStorage.getItem("KIOSK.isometric")==="true"),this.accessible=Ft(()=>!!this._accessible()),this.font_size=Ft(()=>this._font_size()||16),this.applySetting=(e,i)=>this.timeout("apply_setting",()=>this._settings.saveUserSetting(e,i),1e3)}onIsometricChange(e){this.isometric.set(e.detail)}setIsometric(e){this.isometric.set(e),localStorage.setItem("KIOSK.isometric",String(e)),window.dispatchEvent(new CustomEvent("isometric-change",{detail:e}))}setDarkMode(e){this.timeout("dark_mode",()=>{let i=this._settings.theme_signal();e&&i!=="dark"?this._settings.setTheme("dark"):!e&&i==="dark"&&this._settings.setTheme("light")},100)}static{this.\u0275fac=(()=>{let e;return function(s){return(e||(e=$r(n)))(s||n)}})()}static{this.\u0275cmp=It({type:n,selectors:[["accessibility-controls"]],hostBindings:function(i,s){i&1&&et("isometric-change",function(o){return s.onIsometricChange(o)},cn)},features:[Ki],decls:5,vars:2,consts:[["matRipple","",1,"hover:bg-base-200","flex","w-full","items-center","justify-between","rounded-sm","p-2"],["matRipple","",1,"hover:bg-base-200","flex","w-full","items-center","justify-between","rounded-sm","p-2",3,"click"],[3,"ngModelChange","ngModel"]],template:function(i,s){i&1&&(qe(0,Vf,4,1,"button",0),Y(1,"button",1),et("click",function(){return s.setIsometric(!s.isometric())}),Y(2,"div"),fe(3,"Isometric View"),J(),Y(4,"mat-slide-toggle",2),et("ngModelChange",function(o){return s.setIsometric(o)}),J()()),i&2&&(Ye(s.can_change_dark_mode()?0:-1),j(4),$e("ngModel",s.isometric()))},dependencies:[Ii,di,kd,Dl,Is,Cs,Rs],encapsulation:2})}}return n})();var Gf=()=>({standalone:!0});function Hf(n,t){if(n&1&&(Y(0,"div",6)(1,"div",12)(2,"label"),fe(3,"Resource:"),J(),Y(4,"div",13),fe(5),J()()()),n&2){let e=Ie(2);j(5),Ze(" ",e.resource().name||e.resource().map_id||"Unknown Resource"," ")}}function Wf(n,t){n&1&&(Y(0,"div",6)(1,"div",7)(2,"label"),fe(3,"Host"),J(),dt(4,"a-user-search-field",14),J()())}function Xf(n,t){if(n&1&&(Y(0,"div",9)(1,"label"),fe(2,"End Time"),J(),dt(3,"a-duration-field",15),J()),n&2){let e,i,s=Ie(2);j(3),$e("time",(e=s.form.get("date"))==null?null:e.value)("max",600)("min",60)("step",60)("end_time",(i=s.bookable_hours())==null?null:i.end)("use_24hr",s.use_24hr_time())}}function qf(n,t){n&1&&(Y(0,"div",11)(1,"mat-checkbox",16),fe(2),Pt(3,"translate"),J()()),n&2&&(j(2),Ze(" ",Dt(3,1,"COMMON.ALL_DAY")," "))}function Yf(n,t){if(n&1){let e=ri();Y(0,"main",3),qe(1,Hf,6,1,"div",6),qe(2,Wf,5,0,"div",6),Y(3,"div",6)(4,"div",7)(5,"label"),fe(6,"Date"),J(),Y(7,"a-date-field",8),fe(8," Date and time must be in the future "),J()()(),Y(9,"div",6)(10,"div",9)(11,"label"),fe(12,"Start Time"),J(),Y(13,"a-time-field",10),et("ngModelChange",function(s){Gt(e);let r=Ie();return Ht(r.form.patchValue({date:s}))}),J()(),qe(14,Xf,4,6,"div",9),J(),qe(15,qf,4,3,"div",11),J()}if(n&2){let e=Ie();$e("formGroup",e.form),j(),Ye(e.resource()?1:-1),j(),Ye(e.host()?2:-1),j(5),$e("to",e.book_until()),j(6),$e("ngModel",e.form.value.date)("ngModelOptions",Qr(10,Gf))("range",e.bookable_hours())("use_24hr",e.use_24hr_time()),j(),Ye(e.all_day()?-1:14),j(),Ye(e.allow_all_day()?15:-1)}}var fr=(()=>{class n{constructor(){this._data=ge(ld),this._settings=ge(Xt),this.host=Ue(this._data.host),this.form=new Xh({user:new lr(this._data.user),date:new lr(this._data.date),duration:new lr(this._data.duration),all_day:new lr(this._data.all_day??!1)}),this.book_until=Ue(this._data.until),this.resource=Ue(this._data.resource),this.allow_all_day=Ue(this._data.allow_all_day??!1),this.bookable_hours=Ue(this._data.bookable_hours??null),this.all_day=Ut(this.form.controls.all_day.valueChanges,{initialValue:this.form.controls.all_day.value}),this.use_24hr_time=cr("use_24_hour_time",!1)}ngOnInit(){if(this.bookable_hours()){let e=En(this.form.value.date,this.bookable_hours());e!==this.form.value.date&&this.form.patchValue({date:e})}this.form.controls.date.valueChanges.subscribe(e=>{if(this.bookable_hours()&&e){let i=En(e,this.bookable_hours(),this._data.date);i!==e&&this.form.patchValue({date:i})}}),this.form.controls.all_day.valueChanges.subscribe(e=>{e?this.form.controls.duration.disable():this.form.controls.duration.enable()}),this._data.all_day&&this.form.controls.duration.disable()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=It({type:n,selectors:[["set-datetime-modal"]],decls:11,vars:5,consts:[[1,"bg-base-200","m-2","flex","h-14","w-[calc(100%-1rem)]","items-center","justify-between","rounded-sm","border-none","p-2"],[1,"px-2","text-xl","font-medium"],["icon","","matRipple","","mat-dialog-close",""],[1,"w-[24rem]","max-w-[85vw]",3,"formGroup"],[1,"bg-base-200","mx-2","mb-2","flex","w-[calc(100%-1rem)]","items-center","justify-end","rounded-sm","border-none","p-2"],["btn","","matRipple","",1,"w-32",3,"mat-dialog-close"],[1,"mx-auto","flex","w-[640px]","max-w-[calc(100%-2rem)]","flex-col","space-x-0","sm:flex-row","sm:space-x-2"],[1,"flex","w-full","flex-1","flex-col","sm:w-1/4"],["formControlName","date",3,"to"],[1,"flex","w-full","flex-1","flex-col","sm:w-1/3"],[3,"ngModelChange","ngModel","ngModelOptions","range","use_24hr"],[1,"mx-auto","flex","w-[640px]","max-w-[calc(100%-2rem)]","justify-end"],[1,"mb-2","flex","w-full","flex-1","flex-col","sm:w-1/4"],[1,"border-base-200","mb-4","w-full","rounded-sm","border","px-4","py-3"],["formControlName","user",1,"mb-4"],["formControlName","duration",3,"time","max","min","step","end_time","use_24hr"],["formControlName","all_day"]],template:function(i,s){i&1&&(Y(0,"header",0)(1,"h2",1),fe(2,"Set date and time"),J(),Y(3,"button",2)(4,"icon"),fe(5,"close"),J()()(),qe(6,Yf,16,11,"main",3),Y(7,"footer",4)(8,"button",5),fe(9),Pt(10,"translate"),J()()),i&2&&(j(6),Ye(s.form?6:-1),j(2),$e("mat-dialog-close",s.form.value),j(),Ze(" ",Dt(10,3,"COMMON.CONTINUE")," "))},dependencies:[Ii,di,hd,cd,Md,bd,bi,Cd,Td,Pd,Ud,Is,Cs,Wh,Rs,$h,Yh,qh,Vi],encapsulation:2})}}return n})();var $f=["explore-device-info",""];function Zf(n,t){if(n&1&&dt(0,"div",6),n&2){let e=Ie();Eh("height: "+e.diameter()+"%; width: "+e.diameter()+"%;")}}function Jf(n,t){if(n&1&&(Y(0,"p",10)(1,"label"),fe(2),Pt(3,"translate"),J(),fe(4),J()),n&2){let e=Ie(2);j(2),Ze("",Dt(3,2,"EXPLORE.DEVICE_MAC"),":"),j(2),Ze(" ",e.mac," ")}}function Kf(n,t){if(n&1&&(Y(0,"p",11)(1,"label"),fe(2),Pt(3,"translate"),J(),fe(4),J()),n&2){let e=Ie(2);j(2),Ze("",Dt(3,2,"EXPLORE.DEVICE_MANUFACTURER"),":"),j(2),Ze(" ",e.manufacturer," ")}}function jf(n,t){if(n&1&&(Y(0,"p",12)(1,"label"),fe(2),Pt(3,"translate"),J(),fe(4),J()),n&2){let e=Ie(2);j(2),Ze("",Dt(3,2,"EXPLORE.DEVICE_OS"),":"),j(2),Ze(" ",e.os," ")}}function Qf(n,t){if(n&1&&(Y(0,"p",13)(1,"label"),fe(2),Pt(3,"translate"),J(),fe(4),J()),n&2){let e=Ie(2);j(2),Ze("",Dt(3,2,"EXPLORE.DEVICE_SSID"),":"),j(2),Ze(" ",e.ssid," ")}}function ep(n,t){if(n&1&&(Y(0,"p",14)(1,"label"),fe(2),Pt(3,"translate"),J(),fe(4),J()),n&2){let e=Ie(2);j(2),Ze("",Dt(3,2,"EXPLORE.DEVICE_USERNAME"),":"),j(2),Ze(" ",(e.user==null?null:e.user.name)||(e.user==null?null:e.user.username)||e.username()," ")}}function tp(n,t){if(n&1&&(Y(0,"p",15)(1,"label"),fe(2),Pt(3,"translate"),J(),fe(4),J()),n&2){let e=Ie(2);j(2),Ze("",Dt(3,2,"EXPLORE.DEVICE_TYPE"),":"),j(2),Ze(" ",e.user.type," ")}}function ip(n,t){if(n&1&&(Y(0,"div",7),dt(1,"div",8),Y(2,"div",9),qe(3,Jf,5,4,"p",10),Y(4,"p")(5,"label"),fe(6),Pt(7,"translate"),J(),fe(8),J(),Y(9,"p")(10,"label"),fe(11),Pt(12,"translate"),J(),fe(13),J(),qe(14,Kf,5,4,"p",11),qe(15,jf,5,4,"p",12),qe(16,Qf,5,4,"p",13),qe(17,ep,5,4,"p",14),qe(18,tp,5,4,"p",15),J()()),n&2){let e=Ie();j(3),Ye(e.mac&&!e.hide_fields().includes("mac")?3:-1),j(3),Ze("",Dt(7,10,"EXPLORE.DEVICE_ACCURACY"),":"),j(2),Ze(" ",e.variance,"m "),j(3),Ze("",Dt(12,12,"EXPLORE.DEVICE_LAST_SEEN"),":"),j(2),Ze(" ",e.last_seen()," "),j(),Ye(e.manufacturer&&!e.hide_fields().includes("manufacturer")?14:-1),j(),Ye(e.os&&!e.hide_fields().includes("os")?15:-1),j(),Ye(e.ssid&&!e.hide_fields().includes("ssid")?16:-1),j(),Ye(e.username()&&!e.hide_fields().includes("username")?17:-1),j(),Ye(e.user&&!e.hide_fields().includes("user")?18:-1)}}var np=[],Ll=(()=>{class n{get _distance(){return Math.abs(Oh((this._details.last_seen||0)*1e3,new Date))}get _distance_color(){return this._distance<10?"#43a047":this._distance<20?"#ffb300":"#e53935"}constructor(){this._details=ge(zi),this._settings=ge(Xt),this._element=ge(Ms),this.username=Ue(""),this.show_radius=Ue(!1),this.user=this._details.user,this.mac=this._details.mac,this.manufacturer=this._details.manufacturer,this.os=this._details.os,this.ssid=this._details.ssid,this.variance=this._details.variance?.toFixed(2),this.bg_color=this._details.bg_color||this._distance_color,this.zoom=Ut(this._details.zoom$,{initialValue:1}),this.hide_fields=Ft(()=>this._settings.get("app.explore.hide_device_fields")||np),this.last_seen=Ft(()=>Bh((this._details.last_seen||0)*1e3,{addSuffix:!0})),this.y_pos=Ue("top"),this.x_pos=Ue("start"),this.diameter=Ft(()=>this._details.variance*100*this.zoom()),xh(()=>this._initPosition())}_initPosition(e=0){if(e>10)return;let i=this._element.nativeElement.parentElement?.parentElement;if(!i){setTimeout(()=>this._initPosition(++e),200);return}let s={y:parseInt(i.style.top,10)/100,x:parseInt(i.style.left,10)/100};this.y_pos.set(s.y>=.5?"bottom":"top"),this.x_pos.set(s.x>=.5?"end":"start")}async loadUser(){if(this.username())return;let e=no(this._details.system,"LocationServices");if(!e)return;this.username.set("Loading...");let i=await e.execute("check_ownership_of",[this.mac]).catch(()=>null);this.username.set(i&&i.assigned_to?i.assigned_to:"")}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=It({type:n,selectors:[["","explore-device-info",""]],attrs:$f,decls:7,vars:8,consts:[["dot",""],["device_tooltip",""],["name","radius",1,"radius","center","border-info","bg-info","absolute","rounded-full","border-8","border-dashed","border-blue-600","opacity-30",3,"style"],["shadow","",1,"center","pointer-events-auto","absolute","h-8","w-8","rounded-full","bg-black","opacity-30",3,"mouseenter","click","mouseleave"],["name","dot",1,"center","absolute","h-3","w-3","rounded-full","border-2","border-white","shadow-sm"],["customTooltip","",1,"pointer-events-auto","absolute","inset-0",3,"mouseenter","content","backdrop","xPosition","yPosition","hover"],["name","radius",1,"radius","center","border-info","bg-info","absolute","rounded-full","border-8","border-dashed","border-blue-600","opacity-30"],["name","device-info",1,"bg-base-100","pointer-events-none","top-0","left-0","mx-2","w-64","rounded-sm","p-4","shadow-sm"],[1,"arrow"],[1,"details"],[1,"wrap-break-word"],["type",""],["os",""],["ssid",""],["username",""],["user",""]],template:function(i,s){if(i&1&&(qe(0,Zf,1,2,"div",2),Y(1,"div",3),et("mouseenter",function(){return s.show_radius.set(!0)})("click",function(){return s.show_radius.set(!1)},cn)("click",function(){return s.show_radius.set(!0)})("mouseleave",function(){return s.show_radius.set(!1)}),J(),dt(2,"div",4,0),Y(4,"div",5),et("mouseenter",function(){return s.loadUser()}),J(),hn(5,ip,19,14,"ng-template",null,1,Ts)),i&2){let r=yi(6);Ye(s.show_radius()?0:-1),j(2),qn("background-color",s.bg_color),j(2),$e("content",r)("backdrop",!1)("xPosition",s.x_pos())("yPosition",s.y_pos())("hover",!0)}},dependencies:[Jn,Vi],styles:["[_nghost-%COMP%]{pointer-events:auto}[_nghost-%COMP%] > [name=dot][_ngcontent-%COMP%]{background-color:#616161}[_nghost-%COMP%]:hover > [name=radius][_ngcontent-%COMP%]{opacity:1}[name=radius][_ngcontent-%COMP%]{opacity:0;transition:opacity .2s;pointer-events:none}"]})}}return n})();var Mo=(()=>{class n extends Lt{_desk_key(e){return e?.map_id||e?.id||""}constructor(){super(),this._state=ge(Jt),this._org=ge(jt),this._settings=ge(Xt),this._bookings=ge(go),this._dialog=ge(Ds),this._in_use=new $t([]),this._options=new $t({}),this._presence=new $t([]),this._signs_of_life=new $t([]),this._statuses={},this._users={},this._departments={},this._desk_bookings=new Map,this._checked_in=new $t([]),this.booking_rules=this._org.active_building.pipe(si(e=>!!e),Rt(e=>ki(e.id,"desk_booking_rules").pipe(Zt(()=>Et({details:[]})))),Xe(e=>e?.details instanceof Array?e.details:[]),Vt(1)),this.desk_list=this._state.level.pipe(Kt(50),Rt(e=>ki(e.id,"desks").pipe(Zt(()=>Et({details:[]})),Xe(i=>(i?.details instanceof Array?i.details:[]).map(s=>new po(ni(ct({},s),{zone:e})))))),Zt(e=>[]),Vt(1)),this._bind=xt([this._state.level,this._state.options]).pipe(Kt(300),si(([e,{is_public:i}])=>!!e&&!i),Xe(([e])=>{let i=this._org.module("area_management","AreaManagement");if(!i)return;let s=i.variable(e.id);s&&this.subscription("lvl-in_use",s.bindThenSubscribe(r=>this.processBindingChange(r||{},i.id)))})),this._bind_desk_bookings=xt([this._state.level,this._state.options]).pipe(Kt(300),si(([e,{is_public:i}])=>!!e&&!i),Xe(([e])=>{let i=this._org.module("area_management","AreaManagement");if(!i)return;let s=i.variable(`${e.id}:desk_bookings`);s&&this.subscription("lvl-desk_bookings",s.bindThenSubscribe(r=>{let o=ct({},r||{});for(let a in o){let l=o[a].map(c=>new fo(ni(ct({},c),{booking_start:c.booking_start||c.started_at,booking_end:c.booking_end||c.ends_at,duration:c.duration/60})));this._desk_bookings[a]?this._desk_bookings[a].set(l):this._desk_bookings[a]=Ue(l)}}))})),this._booking_list=xt([this._options,this._state.level]).pipe(si(([e,i])=>(e.use_api||e.date>Sn(Date.now()).valueOf())&&!!i),Rt(([e,i])=>dr({type:"desk",period_start:wn(to(e.date||Date.now())),period_end:wn(Sn(e.date||Date.now())),zones:i.id})),Kt(200),Wn(e=>{this._in_use.next(e.map(i=>i.asset_id)),this._checked_in.next(e.filter(i=>i.checked_in).map(i=>i.asset_id))}),Vt(1)),this._state_change=xt([this.desk_list,this._in_use,this._presence,this._checked_in,this._signs_of_life,this.booking_rules,this._options]).pipe(Kt(50),Xe(async([e,i,s,r,o,a])=>{let l=await oi(this._state.level),c=new Set;for(let{id:h,bookable:u,map_id:d}of e){let m=d||h;c.add(m);let g=i.some(S=>m===S),v=s.some(S=>m===S),p=o.some(S=>m===S),f=r.some(S=>m===S)||g&&this._settings.get("app.desks.auto_checkin"),w=ar({date:Date.now(),duration:60,host:Bi(),resource:{id:h,zones:[l.parent_id,l.id]}},a)?.hidden;this._statuses[m]||(this._statuses[m]=Ue("free")),this._statuses[m].set(u&&!w?!g&&!v&&!f?p?"signs-of-life":"free":!v&&!f?"pending":"busy":"not-bookable")}for(let h in this._statuses)c.has(h)||delete this._statuses[h];this.processDesks(e)})),this.init()}async init(){await oo(this._org.initialised),this.setOptions({enable_booking:this._settings.get("app.desks.enable_maps")!==!1}),this.subscription("bookings",this._booking_list.subscribe()),this.subscription("bind",this._bind.subscribe()),this.subscription("bind_desk_bookings",this._bind_desk_bookings.subscribe()),this.subscription("booking_rules",this.booking_rules.subscribe()),this.subscription("changes",this._state_change.subscribe()),this.subscription("desks",this.desk_list.subscribe(e=>this.processDesks(e)))}setOptions(e){this._options.next(ct(ct({},this._options.getValue()),e))}processBindingChange({value:e},i){let s=(e||[]).filter(l=>!["desk","booking"].includes(l.location)),r=(e||[]).filter(l=>l.location==="desk"||l.location==="booking"&&l.type==="desk");(this._options.getValue().date||Date.now())<=Sn(Date.now()).valueOf()&&!this._options.getValue().use_api&&(this._in_use.next(r.filter(l=>l.location==="booking").map(l=>l.map_id||l.asset_id)),this._checked_in.next(r.filter(l=>l.location==="booking"&&l.checked_in).map(l=>l.map_id||l.asset_id)),this._presence.next(r.filter(l=>l.at_location).map(l=>l.map_id||l.asset_id)),this._signs_of_life.next(r.filter(l=>l.signs_of_life).map(l=>l.map_id||l.asset_id)));let a=this._settings.get("app.department_map")||{};for(let l of r){let c=l.map_id||l.asset_id;this._users[c]||(this._users[c]=Ue("")),this._users[c].set(l.staff_name),this._departments[c]=a[l.department]||""}this.processDevices(s,i),this.timeout("update",()=>this.updateStatus(),100)}updateStatus(){let e={},i=this._settings.get("app.explore.colors")||{};for(let s in this._statuses){this._statuses[s]||(this._statuses[s]=Ue("free"));let r=this._statuses[s]();e[`#${s}`]={fill:i[`desk-${r}`]||i[`${r}`]||Kn[`${r}`]}}this._state.setStyles("desks",e)}processDevices(e,i){let s=[];for(let r of e){let o=r.x/r.map_width,a=r.y/r.map_height;s.push({track_id:`device:hover:${o},${a}`,location:{x:r.coordinates_from?.includes("right")?1-o:o,y:r.coordinates_from?.includes("bottom")?1-a:a},content:Ll,z_index:20,data:ni(ct({},r),{system:i})})}this._state.setFeatures("devices",s)}processDesks(e){let i=[],s=[],r=this._options.getValue(),o=this._settings.get("app.desks.show_users")??!0;for(let a of e){let l=this._desk_key(a);if(this._statuses[l]||(this._statuses[l]=Ue("free")),this._desk_bookings[l]||(this._desk_bookings[l]=Ue([])),this._users[l]||(this._users[l]=Ue("")),o){let u=this._users[l]()||a.staff_name||a.assigned_name||"";this._users[l].set(u)}else this._users[l].set("");if(i.push({track_id:`desk:hover:${l}`,location:l,content:xo,full_size:!0,no_scale:!0,data:{id:l,map_id:a.name,name:a.name||a.map_id,user:this._users[l],status:this._statuses[l],department:this._departments[l]||"",bookings:this._desk_bookings[l],date:r.date||Date.now()},z_index:20}),!a.bookable)continue;let c=!0,h=async()=>{c&&await this._bookDesk(a,r)};["mousedown","touchstart"].forEach(u=>s.push({id:l,action:u,priority:10,callback:()=>{c=!0,this.timeout("booking",()=>c=!1)}})),["mouseup","touchend"].forEach(u=>s.push({id:l,action:u,priority:10,callback:h}))}this._state.setActions("desks",this._options.getValue().enable_booking?s:[]),this._state.setFeatures("desks",i),this.timeout("update",()=>this.updateStatus(),100)}async _setBookingTime(e,i,s=!1,r=null,o=!1,a=null){let l=null;if(this._settings.get("app.desks.allow_time_changes")){let c=Sn(eo(Date.now(),this._settings.get("app.desks.available_period")||90)),h=!!this._settings.get("app.desks.allow_all_day"),u=this._dialog.open(fr,{data:{date:e,duration:i,until:c,host:s,resource:r,all_day:o,allow_all_day:h,bookable_hours:a}}),d=await dh(u.afterClosed());if(!d)throw"User cancelled";e=d.date,i=d.duration,l=d.user,o=d.all_day}return{date:e,duration:i,user:l,all_day:o}}async _bookDesk(e,i){let s=this._desk_key(e);if(this._statuses[s]?.()!=="free")return Wt(vt("EXPLORE.DESK_AVAILABLE_ERROR",{name:e.name||"Desk"}));if(e.groups?.length&&!e.groups.find(m=>Bi().groups.includes(m)))return Wt(vt("EXPLORE.DESK_GROUP_ERROR",{name:e.name||"Desk"}));this._bookings.newForm("desk"),this._bookings.setOptions({type:"desk"});let r=this._settings.get("app.desks.bookable_hours")||this._settings.get("app.bookings.bookable_hours")||null;if(r&&!this._settings.get("app.desks.allow_time_changes")&&!ao(Date.now(),r))return Wt(vt("EXPLORE.OUTSIDE_BOOKABLE_HOURS"));i.date?(this._bookings.form.patchValue({date:r?En(i.date,r):i.date}),this._bookings.form.patchValue({all_day:!!i.all_day})):r&&this._bookings.form.patchValue({date:En(this._bookings.form.value.date,r)});let{date:o,duration:a,user:l,all_day:c}=await this._setBookingTime(this._bookings.form.value.date,this._bookings.form.value.duration,this._options.getValue()?.custom??!1,e,!!i.all_day,r);l=l||i.host||Bi();let h=l?.email;this._bookings.form.patchValue({resources:[e],asset_id:e.id,asset_name:e.name,date:o,duration:c?720:a,all_day:c,map_id:e?.map_id||e?.id,description:e.name,user:l,user_email:h,booking_type:"desk",zones:e.zone?[e.zone?.parent_id,e.zone?.id]:[]});let u=await oi(this.booking_rules);if(ar({date:o,duration:a,host:Bi(),resource:{id:e.id,zones:[e.zone?.parent_id,e.zone?.id]}},u)?.hidden)return Wt(vt("EXPLORE.DESK_RESTRICTION_ERROR",{name:e.name||"Desk"}));await this._bookings.confirmPost().catch(m=>{throw console.log(m),Wt(vt("EXPLORE.DESK_BOOKING_ERROR",{name:e.name||"Desk",error:m.message||m.error||m})),m}),this._users[s]||(this._users[s]=Ue("")),this._users[s].set((i.host||Bi())?.name),so(vt("EXPLORE.DESK_BOOKING_SUCCESS",{name:e.name||"Desk"}))}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=bn({token:n,factory:n.\u0275fac})}}return n})();var So=(()=>{class n extends Lt{constructor(){super(),this._org=ge(jt),this._state=ge(Jt),this._settings=ge(Xt),this._bookings=ge(go),this._parking=ge(Id),this._dialog=ge(Ds),this._options=new $t({}),this._poll=new $t(0),this.options=this._options.asObservable(),this.on_book=null,this.levels=this._org.active_levels.pipe(Xe(e=>e.filter(i=>i.tags.includes("parking")))),this.booking_rules=this._org.active_building.pipe(si(e=>!!e),Rt(e=>ki(e.id,"parking_booking_rules").pipe(Zt(()=>Et({details:[]})))),Xe(e=>e?.details instanceof Array?e.details:[]),Vt(1)),this.events=xt([this._org.active_building,this._state.options,this._options,this._poll]).pipe(Kt(300),Rt(([e,{is_public:i},s])=>i?Et([]):dr({period_start:wn(wl(s.date||Date.now())),period_end:wn(kh(s.date||Date.now())),type:"parking",zones:this._settings.get("app.use_region")?e?.parent_id:e?.id,rejected:!1})),Vt(1)),this.user_events=xt([this._options]).pipe(Rt(([e])=>dr({period_start:wn(to(e.date||Date.now())),period_end:wn(Sn(e.date||Date.now())),type:"parking",email:e?.user||Bi()?.email})),Vt(1)),this.spaces=this.levels.pipe(Rt(e=>Rd(e.map(i=>i.id))),Vt(1)),this.active_spaces=xt([this.spaces,this._state.level]).pipe(Xe(([e,i])=>e.filter(s=>s.zone_id===i.id))),this._users={},this._plate_numbers={},this.available_spaces=xt([this.events,this.active_spaces,this._parking.users,this.booking_rules,this._options]).pipe(Xe(([e,i,s,r,{date:o}])=>{let a=i.filter(l=>{let c=e.find(g=>g.asset_id===l.id&&!g.rejected),h=this._org.levelWithID([l.zone_id]),u=`${c?.user_email||l.assigned_to||""}`.toLowerCase(),d=s.find(g=>g.email.toLowerCase()===u.toLowerCase()),m=ar({date:o||Date.now(),duration:60,host:Bi(),resource:{id:l.id,zones:[h.parent_id,h.id]}},r)?.hidden;return console.log("Assigned:",u,l.id),this._users[l.id]=u,this._plate_numbers[l.id]=c?.extension_data?.plate_number||d?.plate_number||void 0,!c&&!m&&l.bookable!==!1});return this._updateParkingSpaces(i,a),a})),this.subscription("spaces",this.available_spaces.subscribe()),this.setOptions({enable_booking:this._settings.get("app.parking.enable_maps")!==!1})}startPolling(){return this.interval("poll",()=>this._poll.next(Date.now()),10*1e3),this._poll.next(Date.now()),()=>this.stopPolling()}stopPolling(){this.clearInterval("poll")}setOptions(e){this._options.next(ct(ct({},this._options.getValue()),e))}async _updateParkingSpaces(e,i){let s={},r=[],o=[],a=this._settings.get("app.explore.colors")||{},l=this._options.getValue(),c=await oi(this._parking.assigned_space),h=await oi(this._parking.deny_parking_access),u=await oi(this._parking.booked_space);for(let d of e){let m=!!i.find(S=>S.id===d.id),v=this._settings.app_name.toLowerCase().includes("workplace")||this._settings.app_name.toLowerCase().includes("staff")?!1:!!d.assigned_to,p=d.map_id||d.id,f=d.bookable===!1?"not-bookable":v?m?"pending":"busy":m?"free":"busy";if(s[`#${p}`]={fill:a[`parking-${f}`]||a[`${f}`]||Kn[`${f}`],opacity:.6},r.push({location:`${p}`,content:Pl,z_index:20,hover:!0,data:ni(ct({},d),{user:this._users[d.id],plate_number:this._plate_numbers[d.id],status:f==="pending"&&v?"reserved":f})}),!m)continue;let w=async()=>{if(this.on_book){await this.on_book(d),this._poll.next(Date.now());return}if(h){let F=this._org.levelWithID([d.zone_id]);return Wt(vt("EXPLORE.PARKING_PERMISSIONS_ERROR",{name:F?.display_name||F?.name}))}if(console.log("Booked Space:",u),c&&u)return Wt(vt("EXPLORE.PARKING_ASSIGNED_ERROR",{name:d.name||d.id}));if(u)return Wt(vt("EXPLORE.PARKING_EXISTING_ERROR"));if(f!=="free")return Wt(vt("EXPLORE.PARKING_AVAILABLE_ERROR",{name:d.name||"Parking Space"}));if(d.place_groups?.length&&!d.place_groups.find(F=>Bi().groups.includes(F)))return Wt(vt("EXPLORE.PARKING_GROUP_ERROR",{name:d.name}));this._bookings.newForm("parking"),this._bookings.setOptions({type:"parking"}),l=this._options.getValue();let S=this._settings.get("app.parking.bookable_hours")||this._settings.get("app.bookings.bookable_hours")||null;if(S&&!this._settings.get("app.parking.allow_time_changes")&&!ao(Date.now(),S))return Wt(vt("EXPLORE.OUTSIDE_BOOKABLE_HOURS"));let E=l.host||Bi(),T=E?.email,A=this._org.levelWithID([d.zone_id||d.zone])||this._state.active_level,R=!l.date||Uh(l.date,Date.now())?wl(Date.now()).valueOf():zh(l.date,8).valueOf();S&&(R=En(R,S)),this._bookings.form.patchValue({resources:[d],asset_id:d.id,asset_name:d.name,date:R,duration:660,all_day:!0,map_id:d?.map_id||d?.id,description:d.name,user:E,user_email:T,booking_type:"parking",zones:[this._org.organisation.id,this._org.region?.id,A.parent_id,A.id]}),await this._bookings.confirmPost().catch(F=>{throw F==="User cancelled"||Wt(vt("EXPLORE.PARKING_BOOKING_ERROR",{name:d.name||d.id,error:F.message||F.error||F})),F}),so(vt("EXPLORE.PARKING_BOOKING_SUCCESS",{name:d.name||d.id})),this.timeout("poll",()=>this._poll.next(Date.now()),1e3)};o.push({id:p,action:"click",priority:10,callback:w})}this._state.setActions("parking",l.enable_booking?o:[]),this._state.setStyles("parking",s),this._state.setFeatures("parking",r)}async _setBookingTime(e,i,s=!1,r=null,o=null){let a=null;if(this._settings.get("app.parking.allow_time_changes")){let l=Sn(eo(Date.now(),this._settings.get("app.parking.available_period")||90)),h=await this._dialog.open(fr,{data:{date:e,duration:i,until:l,host:s,resource:r,bookable_hours:o}}).afterClosed().toPromise();if(!h)throw"User cancelled";e=h.date,i=h.duration,a=h.user}return{date:e,duration:i,user:a}}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=bn({token:n,factory:n.\u0275fac})}}return n})();var op=["canvas"],ap=["map-canvas",""],zd=(()=>{class n extends Lt{constructor(){super(),this._data=ge(zi),this.zoom=Ue(1),this.ratio=Ue(1),this.svg_ratio=Ue(1),this.width=Ue(1e4),this.canvas_element=Yn("canvas"),this.ratioed_height=Ft(()=>+(this.width()*this.ratio()).toFixed(2))}ngOnInit(){this.subscription("state",xt([this._data.ratio$,this._data.zoom$,this._data.svg_ratio$]).subscribe(([e,i,s])=>this._handleMapChange(e,i,s))),this.subscription("polygons",this._data.polygons$.subscribe(e=>this._handleStateChange(e)))}async _handleMapChange(e,i,s){let r=this.ratio();this.zoom.set(i),this.ratio.set(e),this.svg_ratio.set(s);let o=this.width()/10,a=this.width()*this.ratio()/10;if(r===e)return;let l=this.canvas_element().nativeElement;l.width=o,l.height=a;let c=await oi(this._data.polygons$);this._handleStateChange(c)}_handleStateChange(e){let i=this.canvas_element().nativeElement;i.getContext("2d").clearRect(0,0,i.width,i.height),e.forEach(r=>this._drawPolygon(r))}_drawPolygon(e){let i=e.points;if(!i?.length)return;let s=this.canvas_element().nativeElement,r=s.getContext("2d"),o=s.width,a=s.height;if(r.fillStyle=e.color+"80",r.beginPath(),r.moveTo(i[0][0]*o,i[0][1]*a),i.forEach(([l,c])=>r.lineTo(l*o,c*a)),r.closePath(),r.fill(),r.strokeStyle=Qh(e.color,"#888888",.5),r.lineWidth=3,r.beginPath(),r.moveTo(i[0][0]*o,i[0][1]*a),i.forEach(([l,c])=>r.lineTo(l*o,c*a)),r.closePath(),r.stroke(),this._data.draw_points!==!1&&(r.fillStyle="#fff",r.strokeStyle=e.color,r.lineWidth=4,i.forEach(([l,c])=>{r.beginPath(),r.arc(l*o,c*a,8,0,Math.PI*2),r.fill(),r.stroke()})),this._data.draw_labels!==!1){let l=i.reduce((c,[h,u])=>[c[0]+h,c[1]+u],[0,0]);l[0]/=i.length,l[1]/=i.length,r.textAlign="center",r.textBaseline="middle",r.fillStyle="#FFF",r.font="32px sans-serif",r.fillText(e.name,l[0]*o+1,l[1]*a+2),r.fillStyle="#000",r.fillText(e.name,l[0]*o,l[1]*a)}}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=It({type:n,selectors:[["","map-canvas",""]],viewQuery:function(i,s){i&1&&ws(s.canvas_element,op,5),i&2&&Es()},features:[Ki],attrs:ap,decls:2,vars:4,consts:[["canvas",""],[1,"absolute","top-1/2","left-1/2","-translate-x-1/2","-translate-y-1/2"]],template:function(i,s){i&1&&yh(0,"canvas",1,0),i&2&&qn("width",s.width()*s.svg_ratio()*s.zoom()+"%")("height",s.width()*s.svg_ratio()*s.ratio()*s.zoom()+"%")},encapsulation:2})}}return n})();function lp(n,t){if(n&1&&(Y(0,"div",3)(1,"icon"),fe(2,"thermostat"),J(),Y(3,"div",5),fe(4),J()()),n&2){let e=Ie(2);j(4),Ah("",e.temp(),"\u02DA",e.temp_unit())}}function cp(n,t){if(n&1&&(Y(0,"div",3)(1,"icon"),fe(2,"opacity"),J(),Y(3,"div",5),fe(4),J()()),n&2){let e=Ie(2);j(4),Ze("",e.humidity(),"%")}}function hp(n,t){n&1&&(Y(0,"div",4)(1,"icon",6),fe(2,"error"),J()())}function dp(n,t){if(n&1&&(Y(0,"div",2),qe(1,lp,5,2,"div",3),qe(2,cp,5,1,"div",3),qe(3,hp,3,0,"div",4),J()),n&2){let e=Ie();j(),Ye(e.temp()?1:-1),j(),Ye(e.humidity()?2:-1),j(),Ye(e.temp()>82?3:-1)}}var Vd="",Nl=(()=>{class n extends Lt{constructor(){super(),this._details=ge(zi),this.temp=Ue(this._details.temp||0),this.temp_unit=Ue(this._details.temp_unit||"C"),this.humidity=Ue(this._details.humidity||0),this.show=Ft(()=>Vd===this._details.id),this.setShow=e=>{this.timeout("show",()=>Vd=e?this._details.id:"")}}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=It({type:n,selectors:[["explore-sensor-info"]],features:[Ki],decls:5,vars:1,consts:[["stats",""],["icon","","matRipple","","customTooltip","","yPosition","center","xPosition","center",1,"bg-base-100","pointer-events-auto","absolute","top-1/2","left-1/2","h-7","w-7","min-w-0","-translate-x-1/2","-translate-y-1/2","shadow-sm",3,"content"],[1,"border-base-200","bg-base-100","absolute","top-1/2","left-1/2","-translate-x-1/2","-translate-y-1/2","rounded-lg","border","p-2","text-xl"],[1,"flex","items-center","space-x-2","pr-2","whitespace-nowrap"],[1,"border-base-200","bg-base-100","absolute","top-0","right-0","translate-x-1/2","-translate-y-1/2","rounded-full","border"],[1,""],[1,"text-error","text-xl"]],template:function(i,s){if(i&1&&(Y(0,"button",1)(1,"icon"),fe(2," visibility "),J()(),hn(3,dp,4,3,"ng-template",null,0,Ts)),i&2){let r=yi(4);$e("content",r)}},dependencies:[Jn,bi],encapsulation:2})}}return n})();var wo=(()=>{class n extends Lt{constructor(){super(),this._state=ge(Jt),this._org=ge(jt),this._settings=ge(Xt),this._area_list=[],this._statuses={},this._count_key={},this._location={},this._label_location={},this._capacity={},this._draw={},this._points={},this._features=[],this._polygons$=new $t([]),this._bind=xt([this._org.active_building,this._state.level,this._state.options]).pipe(si(([e,i,{is_public:s}])=>!!e&&!!i&&!s),Xe(([e,i])=>{this._statuses={};let s=this._org.module("area_management","AreaManagement");if(!s)return;let r=s.variable(`${i.id}:areas`),o=s.variable(`${i.id}`),a=xt([r.listen(),o.listen()]).pipe(Kt(100),Xe(([l,c])=>[...l?.value||[],...(c?.value||[]).filter(h=>h.location==="area")]));this.subscription("zones-status",a.subscribe(l=>this.parseData(l))),this.subscription("binding",r.bind()),this.subscription("zone-binding",o.bind())})),this.init()}async init(){await oo(this._org.initialised);let e=await Promise.all(this._org.levels.map(i=>ki(i.id,"map_regions").toPromise()));this._area_list=[];for(let i of e){let s=i?.details?.areas;if(s)for(let r of s){let{capacity:o,hide_label:a,label_location:l,draw_polygon:c,area_count_key:h}=r.properties||{},{coordinates:u}=r.geometry||{};this._capacity[r.id]=o||100,this._count_key[r.id]=h||"",this._location[r.id]=u?.length?up(u):null,this._label_location[r.id]=a===!1?l||this._location[r.id]:null,this._draw[r.id]=!!c||this._settings.get("app.explore.use_zone_polygons"),this._points[r.id]=u||[],this._area_list.push(r.map_id||r.id)}}this._state.setFeatures("zones-canvas",[{track_id:"zones-canvas",location:{x:.5,y:.5},content:zd,data:{polygons$:this._polygons$,draw_points:!1,draw_labels:!1}}]),this.updateStatus(),this.subscription("bind",this._bind.subscribe())}parseData(e=[]){let i=[],s=[],r=this._settings.get("app.use_imperial_units")?"F":"C";for(let o of e){let a=o.map_id||o.area_id,l=o.capacity||this._capacity[a]||100,h=(o[this._count_key[a]||this._settings.get("app.explore.area_count_key")||"count"]||0)/l;if(this._statuses[a]=o.at_location?"busy":h<.4?"free":h<.75?"pending":"busy",!this._location[a])continue;let u="";o.count&&(u+=vt("EXPLORE.DEVICE_COUNT",{count:o.count})+`
`),o.temperature&&(u+=vt("EXPLORE.SENSORS_TEMP",{value:`${o.temperature} \xB0${r}
`})),o.people_count>0&&(u+=vt("EXPLORE.SENSORS_PEOPLE",{count:`${o.people_count_sum}
`})),o.humidity&&(u+=vt("EXPLORE.SENSORS_HUMIDITY",{value:`${o.humidity}
`})),o.queue_size&&(u+=vt("EXPLORE.SENSORS_QUEUE",{value:`${o.humidity}
`})),o.counter&&(u+=vt("EXPLORE.SENSORS_COUNT",{value:`${o.humidity}
`})),this._label_location[a]&&!this._settings.get("app.explore.show_zone_labels")&&i.push({location:this._label_location[a],content:u,z_index:100}),this._settings.get("app.explore.show_zone_sensor_info")&&(o.temperature||o.humidity)&&s.push({track_id:`sensors:${a}`,location:this._location[a],content:Nl,data:{id:a,temp:o.temperature||10,temp_unit:r,humidity:o.humidity||10},z_index:98})}this._features=s,this._state.setLabels("zones",i),this.updateStatus()}updateStatus(){let e={},i=[],s=this._settings.get("app.explore.colors")||{},r=[];for(let o in this._statuses){let a=s[`zone-${this._statuses[o]}`]||s[`${this._statuses[o]}`]||Kn[`${this._statuses[o]}`];this._draw[o]?r.push({name:o,points:this._points[o],color:a}):this._state.has("style",o,["zones","zones-styles"])?i.push({location:o,content:Od,data:{icon:{content:"pin_drop"}},full_size:!0,z_index:98}):e[`#${o}`]={fill:a,opacity:.6}}this._polygons$.next(r),this._state.setFeatures("zones",[...i,...this._features]),this._state.setStyles("zones-styles",e)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=bn({token:n,factory:n.\u0275fac})}}return n})();function up(n){let t=(n||[]).reduce((e,[i,s])=>({x_min:i<e.x_min?i:e.x_min,x_max:i>e.x_max?i:e.x_max,y_min:s<e.y_min?s:e.y_min,y_max:s>e.y_max?s:e.y_max}),{x_min:100,x_max:-100,y_min:100,y_max:-100});return{x:t.x_min+(t.x_max-t.x_min)/2,y:t.y_min+(t.y_max-t.y_min)/2}}var Gd="_EMERGENCY_CONTACTS_",Fl="/api/engine/v2",Hd=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});function pp(n={}){let t=lo(n);return io(`${Fl}/asset_categories${t?"?"+t:""}`).pipe(Xe(e=>e))}function mp(n={}){let t=lo(n);return io(`${Fl}/asset_types${t?"?"+t:""}`).pipe(Xe(e=>e))}function _p(n={}){let t=lo(n);return io(`${Fl}/assets${t?"?"+t:""}`).pipe(Xe(e=>e))}var gp=["space","feature","contact","user"];function Eo(n){return gp.indexOf(n.is_role?"contact":n.type)}function Wd(n,t){return Hd.compare(n.name||"",t.name||"")||Hd.compare(n.description||"",t.description||"")||Eo(n)-Eo(t)}function xp(n,t){let e=new Set(t.filter(r=>!!r)),i=n.filter(r=>r.is_role&&!!r.zone&&e.has(r.zone||"")).sort(Wd),s=n.filter(r=>!(r.is_role&&r.zone&&e.has(r.zone||""))).sort(Wd);return[...i,...s]}var Xd=(()=>{class n{_getInProgressZones(e){if(!e?.length)return[];let i=[];for(let s of e)s instanceof ud?(s.system?.zones?.length&&i.push(...s.system.zones),s.resources?.forEach(r=>{r.zones?.length&&i.push(...r.zones)})):s instanceof fo&&s.zones?.length&&i.push(...s.zones);return i.filter(s=>this._org.levelWithID([s]))}_getPriorityZones(e,i){return Array.from(new Set([...i?[i]:[],...this._getInProgressZones(e)]))}hideItem(e){return(this._settings.get("app.hide_global_search_items")||[]).includes(e)}constructor(){this._org=ge(jt),this._settings=ge(Xt),this._maps_people=ge(hr),this._state=ge(Jt),this._in_progress_bookings=new hh(1),this._emergency_contacts=new $t([]),this._filter=new $t(""),this._loading=new $t(!1),this.emergency_contacts=this._emergency_contacts.asObservable(),this._asset_based_contacts=xt([this._org.active_building,this._filter.pipe(Kt(400))]).pipe(si(([e])=>!!e),Rt(([e,i])=>pp({zone_id:e.id}).pipe(Zt(()=>Et([])),Xe(s=>s.find(r=>r.name===Gd)||null),Rt(s=>s?mp({zone_id:e.id,q:`"${s.name}"`}).pipe(Zt(()=>Et([])),Xe(r=>r.find(o=>o.name===Gd&&o.category_id===s.id)||null)):Et(null)),Rt(s=>{if(!s)return Et([]);let r={zone_id:e.id,type_id:s.id,limit:200};return _p(r).pipe(Zt(()=>Et([])),Xe(o=>o.filter(a=>a.asset_type_id===s.id).map(a=>{let l=this._org.levelWithID(a.zones)||this._org.buildings.find(c=>a.zones.includes(c.id));return{id:a.id,name:a.identifier||"",email:a.other_data?.email||"",phone:a.other_data?.phone||"",roles:a.other_data?.roles||[],zone:l.id,zone_name:l?.display_name||l?.name}})))}))),Vt(1)),this._legacy_metadata_contacts=this._org.active_building.pipe(si(e=>!!e),Rt(e=>ki(e.id,"emergency_contacts").pipe(Zt(()=>Et({details:{contacts:[],migrated:!1}})))),Xe(({details:e})=>{let i=e;return i?.migrated?[]:i?.contacts||[]}),Vt(1)),this._role_assigned_contacts=xt([this._asset_based_contacts,this._legacy_metadata_contacts]).pipe(Xe(([e,i])=>e.length>0?e:i),Vt(1)),this._user_search=this._filter.pipe(Kt(400),Wn(()=>this._loading.next(!0)),Rt(e=>e?.length>2?this.search_fn(e).pipe(Zt(()=>Et([]))):Et([])),Vt(1)),this._space_search=this._filter.pipe(Kt(400),Wn(()=>this._loading.next(!0)),Rt(e=>e?.length>2?Jh({q:e,zone_id:this._org.organisation.id}).pipe(Xe(({data:i})=>i.filter(s=>s.map_id).map(s=>new dd(ni(ct({},s),{level:this._org.levelWithID(s.zones)}))))):Et([])),Zt(()=>[])),this._desk_search=xt([this._org.active_building]).pipe(Kt(400),Wn(()=>this._loading.next(!0)),Rt(([e])=>e?El(e.id,{name:"desks"}).pipe(Zt(()=>Et([])),Xe(i=>Zn(i.map(s=>(s.metadata.desks?.details||[]).map(r=>new po(ni(ct({},r),{zone:s.zone}))))))):Et([])),Zt(()=>[])),this._maps_people_search=xt([this._maps_people.available$,this._filter,this._org.active_building]).pipe(Kt(1e3),Rt(([e,i])=>e&&i.length>2?mapsindoors?.services.LocationsService.getLocations({q:i}):Et([])),Xe(e=>e.map(i=>({id:i.properties?.externalId||i.properties?.roomId||i.roomId||i.id,map_id:i.properties?.externalId||i.properties?.roomId||i.roomId||"",type:"feature",name:i.properties?.name||"",description:`${i.properties?.roomId} , Level ${i.properties?.floorName}`}))),Vt(1)),this._map_features=this._org.active_building.pipe(si(e=>!!e),Rt(()=>El(this._org.building.id,{name:"map_features"}).pipe(Zt(()=>Et({details:[]})))),Xe(e=>{let i=[];for(let s of e){let r=s.metadata.map_features;if(!r)continue;let o=r.details instanceof Array?r.details:[];for(let a of o)i.push({id:a.id,type:"feature",name:a.name,description:"",zone:s.zone})}return i})),this._poi_metadata=this._org.initialised.pipe(si(e=>e),Rt(()=>ki(this._org.organisation.id,"points-of-interest").pipe(Zt(e=>Et({details:{}})))),Vt(1)),this._poi_list=xt([this._org.active_building,this._poi_metadata]).pipe(si(([e])=>!!e?.id),Xe(([e,i])=>{let s=i.details||{},r=this._org.levelsForBuilding(e);return Zn(r.map(a=>s[a.id]||[])).filter(a=>a.can_search)})),this._points_of_interest=this._poi_list.pipe(Xe(e=>e.map(i=>({id:i.location||i.id,type:"feature",name:i.name,description:"",zone:i.level_id})))),this.search_results=xt([this._filter,this._space_search,this._desk_search,this._user_search,this._emergency_contacts,this._role_assigned_contacts,this._map_features,this._maps_people_search,this._points_of_interest,this._state.level,this._in_progress_bookings]).pipe(Xe(([e,i,s,r,o,a,l,c,h,u,d])=>{let m=e.toLowerCase(),g=[];this.hideItem("mapspeople")||(g=g.concat(c)),this.hideItem("spaces")||(g=g.concat(i.map(p=>({id:p.id,type:"space",email:p.email,name:p.display_name||p.name,description:`Capacity: ${p.capacity} `,zone:p.level?.id||""})))),this.hideItem("desks")||(g=g.concat(s.map(p=>({id:p.id,type:"feature",email:p.assigned_to,description:p.id,name:p.name||p.id,zone:p.zone?.id||""})))),this.hideItem("emergency_contacts")||(g=g.concat(Zn(a.map(p=>p.roles.map(f=>({id:p.email,type:f||"contact",is_role:!0,name:p.name,email:p.email,description:p.email,zone:p.zone,zone_name:p.zone_name})))))),this.hideItem("features")||(g=g.concat(l.filter(p=>p.name.toLowerCase().includes(m)).map(p=>({id:p.id,type:"feature",name:p.name,description:"",zone:p.zone?.id,level_name:p.zone?.display_name||p.zone?.name})))),this.hideItem("points_of_interest")||(g=g.concat(h)),this.hideItem("contacts")||(g=g.concat(o.map(p=>({id:p.email,type:p.type||"contact",is_role:!0,name:p.name,email:p.email,description:p.email})))),this.hideItem("users")||(g=g.concat(r.map(p=>({id:p.email,type:"user",name:p.name,email:p.email,description:p.email})))),g=g.filter(p=>p.name.toLowerCase().includes(m)||p.description.toLowerCase().includes(m)||(p.email||"").toLowerCase().includes(m)||p.type.toLowerCase().includes(m)||p.zone_name?.toLowerCase().includes(m));let v=this._getInProgressZones(d);return g.sort((p,f)=>{if(u?.id){let w=p.zone===u.id,S=f.zone===u.id;if(w&&!S)return-1;if(!w&&S)return 1}if(v.length>0){let w=v.includes(p.zone),S=v.includes(f.zone);if(w&&!S)return-1;if(!w&&S)return 1}return Eo(p)-Eo(f)||p.name.localeCompare(f.name)}),g}),Wn(()=>this._loading.next(!1)),Vt(1)),this.global_search_results=xt([this.search_results,this._state.level,this._in_progress_bookings]).pipe(Xe(([e,i,s])=>xp(e,this._getPriorityZones(s,i?.id))),Vt(1)),this.loading=this._loading.asObservable(),this.search_fn=e=>this._settings.get("app.basic_user_search")?Kh({q:e,authority_id:Zh()?.id}).pipe(Xe(i=>i.data)):Ad(e),this._in_progress_bookings.next([]),this.search_results.subscribe(),this.init()}async init(){await this._org.initialised.pipe(bs(s=>s)).toPromise(),await uh(500).toPromise();let{is_public:e}=await oi(this._state.options);if(e)return;let i=this._org.module("location_services","LocationServices");if(i){let s=i.variable("emergency_contacts");s.listen().subscribe(r=>{let o=[];for(let a in r)for(let l of r[a])o.push(ni(ct({},l),{type:a}));this._emergency_contacts.next(o)}),s.bind()}}setFilter(e){this._filter.next(e)}setInProgressBookings(e){this._in_progress_bookings.next(e||[])}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=bn({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var vp=["input"],yp=["button"],bp=(n,t)=>t.name;function Mp(n,t){n&1&&dt(0,"mat-spinner",7),n&2&&$e("diameter",32)}function Sp(n,t){n&1&&(Y(0,"mat-option",8),fe(1),Pt(2,"translate"),J()),n&2&&(j(),Ze(" ",Dt(2,1,"COMMON.SEARCH_EMPTY")," "))}function wp(n,t){if(n&1){let e=ri();Y(0,"mat-option",10),et("click",function(){let s=Gt(e).$implicit,r=Ie(2);return Ht(r.select(s))}),Y(1,"div",11)(2,"div",12)(3,"div",13),fe(4),J(),Y(5,"div",14),fe(6),J()(),Y(7,"div",15),fe(8),J()()()}if(n&2){let e=t.$implicit;$e("value",e.name),j(4),Ze(" ",e.name," "),j(2),Ze(" ",e.description," "),j(2),Ze(" ",e.type," ")}}function Ep(n,t){if(n&1&&(qe(0,Sp,3,3,"mat-option",8),Ui(1,wp,9,4,"mat-option",9,bp)),n&2){let e=Ie();Ye(e.results_list().length?-1:0),j(),Oi(e.results_list().slice(0,5))}}var Ul=(()=>{class n extends Lt{get show(){return this._show()}set show(e){this._show.set(e)}get search_str(){return this._search_str()}set search_str(e){this._search_str.set(e||"")}get right_size(){return this._right_size()}set right_size(e){this._right_size.set(e)}constructor(){super(),this._el=ge(Ms),this._search=ge(Xd),this._router=ge(ho),this._route=ge(co),this._show=Ue(!1),this._search_str=Ue(""),this._right_size=Ue(!1),this.results=Ut(this._search.search_results,{initialValue:[]}),this.results_list=Ft(()=>this.results()||[]),this.loading=Ut(this._search.loading,{initialValue:!1}),this.setFilter=e=>{this.search_str=e||"",this._search.setFilter(e)},this._input_el=Yn("input"),this._button_el=Yn("button")}ngOnInit(){this.checkButtonPosition()}clear(){this.timeout("clear",()=>{this.show=!1,this.setFilter("")})}cancelClear(){this.clearTimeout("clear")}focusInput(){this._input_el()?.nativeElement&&this.timeout("focus",()=>this._input_el().nativeElement.focus(),300)}showSearch(){this.show=!0,this.focusInput()}closeSearch(e){this.show=!1,this.setFilter("");let i=this._input_el();i?.nativeElement&&(i.nativeElement.focus(),i.nativeElement.blur())}select(e){this.search_str=e.name;let i={},s=e.type==="space"?"space":e.type==="feature"?"locate":"user";i[s]=e.id,s==="locate"&&(i.name=e.name,i.zone=e.zone),this._router.navigate([],{relativeTo:this._route,queryParams:i}),this.focusInput()}checkButtonPosition(){let e=window.innerWidth,i=this._button_el().nativeElement.getBoundingClientRect(),s=i.left+i.width/2;this.right_size=s>e/2}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=It({type:n,selectors:[["explore-search"]],viewQuery:function(i,s){i&1&&ws(s._input_el,vp,5)(s._button_el,yp,5),i&2&&Es(2)},features:[Ki],decls:13,vars:19,consts:[["button",""],["origin","matAutocompleteOrigin"],["input",""],["auto","matAutocomplete"],["icon","","matRipple","",1,"bg-base-200","m-2",3,"resize","click"],["role","search","tabindex","0","matRipple","","matAutocompleteOrigin","",1,"bg-base-100","absolute","top-1/2","z-10","flex","max-w-[calc(100vw-7rem)]","-translate-y-1/2","items-center","overflow-hidden","px-4","outline-hidden",3,"click"],["keyboard","",1,"flex-1","border-none","text-base","outline-hidden",3,"ngModelChange","focus","blur","ngModel","placeholder","matAutocomplete","matAutocompleteConnectedTo"],[1,"mr-2",3,"diameter"],[1,"pointer-events-none"],[3,"value"],[3,"click","value"],[1,"flex","w-88","max-w-[calc(100vw-2rem)]","items-center","leading-tight"],[1,"w-1/2","flex-1","overflow-hidden"],[1,"w-full","truncate"],[1,"text-xs"],[1,"bg-base-300","rounded-sm","p-2","text-xs","font-bold","text-white","capitalize"]],template:function(i,s){if(i&1&&(Y(0,"button",4,0),et("resize",function(){return s.checkButtonPosition()},cn)("click",function(o){return s.show?s.closeSearch(o):s.showSearch()}),Y(2,"icon"),fe(3),J()(),Y(4,"div",5,1),et("click",function(){return s.focusInput()}),Y(6,"input",6,2),Pt(8,"translate"),et("ngModelChange",function(o){return s.setFilter(o)})("focus",function(){return s.cancelClear()})("blur",function(){return s.clear()}),J(),qe(9,Mp,1,1,"mat-spinner",7),J(),Y(10,"mat-autocomplete",null,3),qe(12,Ep,3,1),J()),i&2){let r=yi(5),o=yi(11);j(3),Mn(s.show||s.search_str?"close":"search"),j(),dn("right-0",s.right_size)("-translate-x-14",s.right_size)("left-0",!s.right_size)("translate-x-14",!s.right_size)("show",s.show||s.search_str),j(2),$e("ngModel",s.search_str)("placeholder",Dt(8,17,"COMMON.SEARCH"))("matAutocomplete",o)("matAutocompleteConnectedTo",r),j(3),Ye(s.loading()?9:-1),j(3),Ye(s.loading()!==!0&&(s.show||s.search_str)?12:-1)}},dependencies:[bi,Ii,di,_d,md,Fd,Dd,pd,Nd,Ld,_o,Is,Gh,Cs,Rs,Vi],styles:["[_nghost-%COMP%]{z-index:99;position:relative}[role=search][_ngcontent-%COMP%]{height:3rem;width:0;border-radius:1.5rem;border:1px solid var(--base-300);transition:width .2s opacity .2s;opacity:0;pointer-events:none}[role=search].show[_ngcontent-%COMP%]{width:24rem;opacity:1;pointer-events:auto}"]})}}return n})();function Tp(n,t){if(n&1){let e=ri();Y(0,"button",2),et("click",function(){let s=Gt(e).$implicit,r=Ie();return Ht(r.setLevel(s))}),Y(1,"div",3),fe(2),J(),Y(3,"p",4),fe(4),J()()}if(n&2){let e,i=t.$implicit,s=Ie();dn("active",i.id===((e=s.level())==null?null:e.id)),j(2),Mn(i.number),j(2),Ze(" ",i.display_name||i.name," ")}}var qd=(()=>{class n{constructor(){this._org=ge(jt),this._state=ge(Jt),this.levels=Ut(this._org.active_levels,{initialValue:[]}),this.level=Ut(this._state.level,{initialValue:void 0}),this.setLevel=e=>this._state.setLevel(e.id)}async ngOnInit(){await this._org.initialised.pipe(bs(i=>i)).toPromise();let e=await oi(this._org.active_levels)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=It({type:n,selectors:[["explore-level-select"]],decls:3,vars:0,consts:[[1,"border-base-300","bg-base-100","m-2","overflow-hidden","rounded-sm","border","border-solid","shadow-sm"],["matRipple","",1,"flex","h-16","w-16","flex-col","items-center","justify-center","border-none","p-2",3,"active"],["matRipple","",1,"flex","h-16","w-16","flex-col","items-center","justify-center","border-none","p-2",3,"click"],[1,"text-2xl"],[1,"m-0","text-sm","whitespace-nowrap"]],template:function(i,s){i&1&&(Y(0,"div",0),Ui(1,Tp,5,4,"button",1,Xn),J()),i&2&&(j(),Oi(s.levels()))},dependencies:[Ii,di],styles:[".active[_ngcontent-%COMP%]{background:var(--secondary)!important;color:#fff!important}button[_ngcontent-%COMP%]:not(:first-child){border-top:1px solid var(--base-300)!important}"]})}}return n})();var uu=0,pc=1,fu=2;var Nr=1,pu=2,er=3,xn=0,li=1,Ni=2,nn=0,ss=1,mc=2,_c=3,gc=4,mu=5,Ln=100,_u=101,gu=102,xu=103,vu=104,yu=200,bu=201,Mu=202,Su=203,Xo=204,qo=205,wu=206,Eu=207,Tu=208,Au=209,Cu=210,Ru=211,Iu=212,Pu=213,Du=214,pa=0,ma=1,_a=2,rs=3,ga=4,xa=5,va=6,ya=7,xc=0,Lu=1,Nu=2,qi=0,vc=1,yc=2,bc=3,Mc=4,Sc=5,wc=6,Ec=7;var oc=300,Bn=301,fs=302,ba=303,Ma=304,Fr=306,Yo=1e3,Qi=1001,$o=1002,Yt=1003,Fu=1004;var Ur=1005;var Ot=1006,Sa=1007;var sn=1008;var Ci=1009,Tc=1010,Ac=1011,tr=1012,wa=1013,Yi=1014,$i=1015,rn=1016,Ea=1017,Ta=1018,ir=1020,Cc=35902,Rc=35899,Ic=1021,Pc=1022,Fi=1023,en=1026,zn=1027,Dc=1028,Aa=1029,ps=1030,Ca=1031;var Ra=1033,Or=33776,kr=33777,Br=33778,zr=33779,Ia=35840,Pa=35841,Da=35842,La=35843,Na=36196,Fa=37492,Ua=37496,Oa=37488,ka=37489,Ba=37490,za=37491,Va=37808,Ga=37809,Ha=37810,Wa=37811,Xa=37812,qa=37813,Ya=37814,$a=37815,Za=37816,Ja=37817,Ka=37818,ja=37819,Qa=37820,el=37821,tl=36492,il=36494,nl=36495,sl=36283,rl=36284,ol=36285,al=36286;var vr=2300,Zo=2301,Wo=2302,ac=2400,lc=2401,cc=2402;var Uu=3200;var Ou=0,ku=1,yn="",ai="srgb",os="srgb-linear",yr="linear",rt="srgb";var is=7680;var hc=519,Bu=512,zu=513,Vu=514,ll=515,Gu=516,Hu=517,cl=518,Wu=519,dc=35044;var Lc="300 es",Xi=2e3,br=2001;function Nc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ap(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Mr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Xu(){let n=Mr("canvas");return n.style.display="block",n}var Yd={},Ys=null;function Fc(...n){let t="THREE."+n.shift();Ys?Ys("log",t,...n):console.log(t,...n)}function Ne(...n){let t="THREE."+n.shift();Ys?Ys("warn",t,...n):console.warn(t,...n)}function Pe(...n){let t="THREE."+n.shift();Ys?Ys("error",t,...n):console.error(t,...n)}function $s(...n){let t=n.join(" ");t in Yd||(Yd[t]=!0,Ne(...n))}function qu(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var vn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ol=Math.PI/180,Jo=180/Math.PI;function Vr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]+"-"+Qt[t&255]+Qt[t>>8&255]+"-"+Qt[t>>16&15|64]+Qt[t>>24&255]+"-"+Qt[e&63|128]+Qt[e>>8&255]+"-"+Qt[e>>16&255]+Qt[e>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function Je(n,t,e){return Math.max(t,Math.min(e,n))}function Cp(n,t){return(n%t+t)%t}function kl(n,t,e){return(1-e)*n+e*t}function pr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function fi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var je=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Je(this.x,t.x,e.x),this.y=Je(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Je(this.x,t,e),this.y=Je(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Je(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},mi=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],m=r[o+1],g=r[o+2],v=r[o+3];if(a<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a>=1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==m||h!==g){let p=l*d+c*m+h*g+u*v;p<0&&(d=-d,m=-m,g=-g,v=-v,p=-p);let f=1-a;if(p<.9995){let w=Math.acos(p),S=Math.sin(w);f=Math.sin(f*w)/S,a=Math.sin(a*w)/S,l=l*f+d*a,c=c*f+m*a,h=h*f+g*a,u=u*f+v*a}else{l=l*f+d*a,c=c*f+m*a,h=h*f+g*a,u=u*f+v*a;let w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*m-c*d,t[e+1]=l*g+h*d+c*u-a*m,t[e+2]=c*g+h*m+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>u){let m=2*Math.sqrt(1+i-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){let m=2*Math.sqrt(1+a-i-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Je(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($d.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($d.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Je(this.x,t.x,e.x),this.y=Je(this.y,t.y,e.y),this.z=Je(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Je(this.x,t,e),this.y=Je(this.y,t,e),this.z=Je(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Bl.copy(this).projectOnVector(t),this.sub(Bl)}reflect(t){return this.sub(Bl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Je(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bl=new U,$d=new mi,Oe=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],m=i[5],g=i[8],v=s[0],p=s[3],f=s[6],w=s[1],S=s[4],E=s[7],T=s[2],A=s[5],R=s[8];return r[0]=o*v+a*w+l*T,r[3]=o*p+a*S+l*A,r[6]=o*f+a*E+l*R,r[1]=c*v+h*w+u*T,r[4]=c*p+h*S+u*A,r[7]=c*f+h*E+u*R,r[2]=d*v+m*w+g*T,r[5]=d*p+m*S+g*A,r[8]=d*f+m*E+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,m=c*r-o*l,g=e*u+i*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=u*v,t[1]=(s*c-h*i)*v,t[2]=(a*i-s*o)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=m*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(zl.makeScale(t,e)),this}rotate(t){return this.premultiply(zl.makeRotation(-t)),this}translate(t,e){return this.premultiply(zl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},zl=new Oe,Zd=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jd=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rp(){let n={enabled:!0,workingColorSpace:os,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===rt&&(s.r=gn(s.r),s.g=gn(s.g),s.b=gn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(s.r=qs(s.r),s.g=qs(s.g),s.b=qs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yn?yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return $s("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return $s("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[os]:{primaries:t,whitePoint:i,transfer:yr,toXYZ:Zd,fromXYZ:Jd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:t,whitePoint:i,transfer:rt,toXYZ:Zd,fromXYZ:Jd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),n}var Ke=Rp();function gn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ns,Ko=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ns===void 0&&(Ns=Mr("canvas")),Ns.width=t.width,Ns.height=t.height;let s=Ns.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ns}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Mr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(gn(e[i]/255)*255):e[i]=gn(e[i]);return{data:e,width:t.width,height:t.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ip=0,Zs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Vr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Vl(s[o].image)):r.push(Vl(s[o]))}else r=Vl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Vl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ko.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}var Pp=0,Gl=new U,Zi=(()=>{class n extends vn{constructor(e=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,s=Qi,r=Qi,o=Ot,a=sn,l=Fi,c=Ci,h=n.DEFAULT_ANISOTROPY,u=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Vr(),this.name="",this.source=new Zs(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gl).x}get height(){return this.source.getSize(Gl).y}get depth(){return this.source.getSize(Gl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let i in e){let s=e[i];if(s===void 0){Ne(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let r=this[i];if(r===void 0){Ne(`Texture.setValues(): property '${i}' does not exist.`);continue}r&&s&&r.isVector2&&s.isVector2||r&&s&&r.isVector3&&s.isVector3||r&&s&&r.isMatrix3&&s.isMatrix3?r.copy(s):this[i]=s}}toJSON(e){let i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yo:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case $o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yo:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case $o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=oc,n.DEFAULT_ANISOTROPY=1,n})(),wt=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],v=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,E=(m+1)/2,T=(f+1)/2,A=(h+d)/4,R=(u+v)/4,F=(g+p)/4;return S>E&&S>T?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=A/i,r=R/i):E>T?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=A/s,r=F/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=R/r,s=F/r),this.set(i,s,r,e),this}let w=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(u-v)/w,this.z=(d-h)/w,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Je(this.x,t.x,e.x),this.y=Je(this.y,t.y,e.y),this.z=Je(this.z,t.z,e.z),this.w=Je(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Je(this.x,t,e),this.y=Je(this.y,t,e),this.z=Je(this.z,t,e),this.w=Je(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jo=class extends vn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new wt(0,0,t,e),this.scissorTest=!1,this.viewport=new wt(0,0,t,e);let s={width:t,height:e,depth:i.depth},r=new Zi(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let e={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Zs(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ei=class extends jo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Sr=class extends Zi{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qo=class extends Zi{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Gi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Gi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Gi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Gi):Gi.fromBufferAttribute(r,o),Gi.applyMatrix4(t.matrixWorld),this.expandByPoint(Gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),To.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),To.copy(i.boundingBox)),To.applyMatrix4(t.matrixWorld),this.union(To)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gi),Gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mr),Ao.subVectors(this.max,mr),Fs.subVectors(t.a,mr),Us.subVectors(t.b,mr),Os.subVectors(t.c,mr),Tn.subVectors(Us,Fs),An.subVectors(Os,Us),jn.subVectors(Fs,Os);let e=[0,-Tn.z,Tn.y,0,-An.z,An.y,0,-jn.z,jn.y,Tn.z,0,-Tn.x,An.z,0,-An.x,jn.z,0,-jn.x,-Tn.y,Tn.x,0,-An.y,An.x,0,-jn.y,jn.x,0];return!Hl(e,Fs,Us,Os,Ao)||(e=[1,0,0,0,1,0,0,0,1],!Hl(e,Fs,Us,Os,Ao))?!1:(Co.crossVectors(Tn,An),e=[Co.x,Co.y,Co.z],Hl(e,Fs,Us,Os,Ao))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},un=[new U,new U,new U,new U,new U,new U,new U,new U],Gi=new U,To=new Nn,Fs=new U,Us=new U,Os=new U,Tn=new U,An=new U,jn=new U,mr=new U,Ao=new U,Co=new U,Qn=new U;function Hl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Qn.fromArray(n,r);let a=s.x*Math.abs(Qn.x)+s.y*Math.abs(Qn.y)+s.z*Math.abs(Qn.z),l=t.dot(Qn),c=e.dot(Qn),h=i.dot(Qn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Dp=new Nn,_r=new U,Wl=new U,Js=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Dp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_r.subVectors(t,this.center);let e=_r.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(_r,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_r.copy(t.center).add(Wl)),this.expandByPoint(_r.copy(t.center).sub(Wl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},fn=new U,Xl=new U,Ro=new U,Cn=new U,ql=new U,Io=new U,Yl=new U,wr=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fn.copy(this.origin).addScaledVector(this.direction,e),fn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Xl.copy(t).add(e).multiplyScalar(.5),Ro.copy(e).sub(t).normalize(),Cn.copy(this.origin).sub(Xl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ro),a=Cn.dot(this.direction),l=-Cn.dot(Ro),c=Cn.lengthSq(),h=Math.abs(1-o*o),u,d,m,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,m=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Xl).addScaledVector(Ro,d),m}intersectSphere(t,e){fn.subVectors(t.center,this.origin);let i=fn.dot(this.direction),s=fn.dot(fn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,fn)!==null}intersectTriangle(t,e,i,s,r){ql.subVectors(e,t),Io.subVectors(i,t),Yl.crossVectors(ql,Io);let o=this.direction.dot(Yl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Cn.subVectors(this.origin,t);let l=a*this.direction.dot(Io.crossVectors(Cn,Io));if(l<0)return null;let c=a*this.direction.dot(ql.cross(Cn));if(c<0||l+c>o)return null;let h=-a*Cn.dot(Yl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Tt=class n{constructor(t,e,i,s,r,o,a,l,c,h,u,d,m,g,v,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,m,g,v,p)}set(t,e,i,s,r,o,a,l,c,h,u,d,m,g,v,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();let e=this.elements,i=t.elements,s=1/ks.setFromMatrixColumn(t,0).length(),r=1/ks.setFromMatrixColumn(t,1).length(),o=1/ks.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,m=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,m=l*u,g=c*h,v=c*u;e[0]=d+v*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,m=l*u,g=c*h,v=c*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,m=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=g*c-m,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,m=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*u+g,e[10]=d-v*u}else if(t.order==="XZY"){let d=o*l,m=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lp,t,Np)}lookAt(t,e,i){let s=this.elements;return Mi.subVectors(t,e),Mi.lengthSq()===0&&(Mi.z=1),Mi.normalize(),Rn.crossVectors(i,Mi),Rn.lengthSq()===0&&(Math.abs(i.z)===1?Mi.x+=1e-4:Mi.z+=1e-4,Mi.normalize(),Rn.crossVectors(i,Mi)),Rn.normalize(),Po.crossVectors(Mi,Rn),s[0]=Rn.x,s[4]=Po.x,s[8]=Mi.x,s[1]=Rn.y,s[5]=Po.y,s[9]=Mi.y,s[2]=Rn.z,s[6]=Po.z,s[10]=Mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],m=i[13],g=i[2],v=i[6],p=i[10],f=i[14],w=i[3],S=i[7],E=i[11],T=i[15],A=s[0],R=s[4],F=s[8],y=s[12],b=s[1],D=s[5],z=s[9],B=s[13],W=s[2],$=s[6],V=s[10],H=s[14],Q=s[3],pe=s[7],ce=s[11],me=s[15];return r[0]=o*A+a*b+l*W+c*Q,r[4]=o*R+a*D+l*$+c*pe,r[8]=o*F+a*z+l*V+c*ce,r[12]=o*y+a*B+l*H+c*me,r[1]=h*A+u*b+d*W+m*Q,r[5]=h*R+u*D+d*$+m*pe,r[9]=h*F+u*z+d*V+m*ce,r[13]=h*y+u*B+d*H+m*me,r[2]=g*A+v*b+p*W+f*Q,r[6]=g*R+v*D+p*$+f*pe,r[10]=g*F+v*z+p*V+f*ce,r[14]=g*y+v*B+p*H+f*me,r[3]=w*A+S*b+E*W+T*Q,r[7]=w*R+S*D+E*$+T*pe,r[11]=w*F+S*z+E*V+T*ce,r[15]=w*y+S*B+E*H+T*me,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],v=t[7],p=t[11],f=t[15],w=l*m-c*d,S=a*m-c*u,E=a*d-l*u,T=o*m-c*h,A=o*d-l*h,R=o*u-a*h;return e*(v*w-p*S+f*E)-i*(g*w-p*T+f*A)+s*(g*S-v*T+f*R)-r*(g*E-v*A+p*R)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],v=t[13],p=t[14],f=t[15],w=u*p*c-v*d*c+v*l*m-a*p*m-u*l*f+a*d*f,S=g*d*c-h*p*c-g*l*m+o*p*m+h*l*f-o*d*f,E=h*v*c-g*u*c+g*a*m-o*v*m-h*a*f+o*u*f,T=g*u*l-h*v*l-g*a*d+o*v*d+h*a*p-o*u*p,A=e*w+i*S+s*E+r*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return t[0]=w*R,t[1]=(v*d*r-u*p*r-v*s*m+i*p*m+u*s*f-i*d*f)*R,t[2]=(a*p*r-v*l*r+v*s*c-i*p*c-a*s*f+i*l*f)*R,t[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*m-i*l*m)*R,t[4]=S*R,t[5]=(h*p*r-g*d*r+g*s*m-e*p*m-h*s*f+e*d*f)*R,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*f-e*l*f)*R,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*m+e*l*m)*R,t[8]=E*R,t[9]=(g*u*r-h*v*r-g*i*m+e*v*m+h*i*f-e*u*f)*R,t[10]=(o*v*r-g*a*r+g*i*c-e*v*c-o*i*f+e*a*f)*R,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*m-e*a*m)*R,t[12]=T*R,t[13]=(h*v*s-g*u*s+g*i*d-e*v*d-h*i*p+e*u*p)*R,t[14]=(g*a*s-o*v*s-g*i*l+e*v*l+o*i*p-e*a*p)*R,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*d+e*a*d)*R,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,m=r*h,g=r*u,v=o*h,p=o*u,f=a*u,w=l*c,S=l*h,E=l*u,T=i.x,A=i.y,R=i.z;return s[0]=(1-(v+f))*T,s[1]=(m+E)*T,s[2]=(g-S)*T,s[3]=0,s[4]=(m-E)*A,s[5]=(1-(d+f))*A,s[6]=(p+w)*A,s[7]=0,s[8]=(g+S)*R,s[9]=(p-w)*R,s[10]=(1-(d+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;if(t.x=s[12],t.y=s[13],t.z=s[14],this.determinant()===0)return i.set(1,1,1),e.identity(),this;let r=ks.set(s[0],s[1],s[2]).length(),o=ks.set(s[4],s[5],s[6]).length(),a=ks.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),Hi.copy(this);let c=1/r,h=1/o,u=1/a;return Hi.elements[0]*=c,Hi.elements[1]*=c,Hi.elements[2]*=c,Hi.elements[4]*=h,Hi.elements[5]*=h,Hi.elements[6]*=h,Hi.elements[8]*=u,Hi.elements[9]*=u,Hi.elements[10]*=u,e.setFromRotationMatrix(Hi),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Xi,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),m=(i+s)/(i-s),g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===Xi)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===br)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Xi,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-s),d=-(e+t)/(e-t),m=-(i+s)/(i-s),g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===Xi)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===br)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},ks=new U,Hi=new Tt,Lp=new U(0,0,0),Np=new U(1,1,1),Rn=new U,Po=new U,Mi=new U,Kd=new Tt,jd=new mi,as=(()=>{class n{constructor(e=0,i=0,s=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,r=this._order){return this._x=e,this._y=i,this._z=s,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){let r=e.elements,o=r[0],a=r[4],l=r[8],c=r[1],h=r[5],u=r[9],d=r[2],m=r[6],g=r[10];switch(i){case"XYZ":this._y=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Je(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-u,g),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Kd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kd,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return jd.setFromEuler(this),this.setFromQuaternion(jd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Ks=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Fp=0,Qd=new U,Bs=new mi,pn=new Tt,Do=new U,gr=new U,Up=new U,Op=new mi,eu=new U(1,0,0),tu=new U(0,1,0),iu=new U(0,0,1),nu={type:"added"},kp={type:"removed"},zs={type:"childadded",child:null},$l={type:"childremoved",child:null},ms=(()=>{class n extends vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new U,i=new as,s=new mi,r=new U(1,1,1);function o(){s.setFromEuler(i,!1)}function a(){i.setFromQuaternion(s,void 0,!1)}i._onChange(o),s._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Oe}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Bs.setFromAxisAngle(e,i),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,i){return Bs.setFromAxisAngle(e,i),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(eu,e)}rotateY(e){return this.rotateOnAxis(tu,e)}rotateZ(e){return this.rotateOnAxis(iu,e)}translateOnAxis(e,i){return Qd.copy(e).applyQuaternion(this.quaternion),this.position.add(Qd.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(eu,e)}translateY(e){return this.translateOnAxis(tu,e)}translateZ(e){return this.translateOnAxis(iu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Do.copy(e):Do.set(e,i,s);let r=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(gr,Do,this.up):pn.lookAt(Do,gr,this.up),this.quaternion.setFromRotationMatrix(pn),r&&(pn.extractRotation(r.matrixWorld),Bs.setFromRotationMatrix(pn),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Pe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nu),zs.child=e,this.dispatchEvent(zs),zs.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}let i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(kp),$l.child=e,this.dispatchEvent($l),$l.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nu),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,r=this.children.length;s<r;s++){let a=this.children[s].getObjectByProperty(e,i);if(a!==void 0)return a}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,Up),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,Op,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].traverseVisible(e)}traverseAncestors(e){let i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){let i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>ni(ct({},l),{boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>ct({},l)),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let d=c[h];o(e.shapes,d)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(o(e.materials,this.material[c]));r.material=l}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];r.animations.push(o(e.animations,c))}}if(i){let l=a(e.geometries),c=a(e.materials),h=a(e.textures),u=a(e.images),d=a(e.shapes),m=a(e.skeletons),g=a(e.animations),v=a(e.nodes);l.length>0&&(s.geometries=l),c.length>0&&(s.materials=c),h.length>0&&(s.textures=h),u.length>0&&(s.images=u),d.length>0&&(s.shapes=d),m.length>0&&(s.skeletons=m),g.length>0&&(s.animations=g),v.length>0&&(s.nodes=v)}return s.object=r,s;function a(l){let c=[];for(let h in l){let u=l[h];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){let r=e.children[s];this.add(r.clone())}return this}}return n.DEFAULT_UP=new U(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Wi=new U,mn=new U,Zl=new U,_n=new U,Vs=new U,Gs=new U,su=new U,Jl=new U,Kl=new U,jl=new U,Ql=new wt,ec=new wt,tc=new wt,Dn=class n{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Wi.subVectors(t,e),s.cross(Wi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Wi.subVectors(s,e),mn.subVectors(i,e),Zl.subVectors(t,e);let o=Wi.dot(Wi),a=Wi.dot(mn),l=Wi.dot(Zl),c=mn.dot(mn),h=mn.dot(Zl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,m=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,_n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_n.x),l.addScaledVector(o,_n.y),l.addScaledVector(a,_n.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Ql.setScalar(0),ec.setScalar(0),tc.setScalar(0),Ql.fromBufferAttribute(t,e),ec.fromBufferAttribute(t,i),tc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ql,r.x),o.addScaledVector(ec,r.y),o.addScaledVector(tc,r.z),o}static isFrontFacing(t,e,i,s){return Wi.subVectors(i,e),mn.subVectors(t,e),Wi.cross(mn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wi.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Wi.cross(mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Vs.subVectors(s,i),Gs.subVectors(r,i),Jl.subVectors(t,i);let l=Vs.dot(Jl),c=Gs.dot(Jl);if(l<=0&&c<=0)return e.copy(i);Kl.subVectors(t,s);let h=Vs.dot(Kl),u=Gs.dot(Kl);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Vs,o);jl.subVectors(t,r);let m=Vs.dot(jl),g=Gs.dot(jl);if(g>=0&&m<=g)return e.copy(r);let v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Gs,a);let p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return su.subVectors(r,s),a=(u-h)/(u-h+(m-g)),e.copy(s).addScaledVector(su,a);let f=1/(p+v+d);return o=v*f,a=d*f,e.copy(i).addScaledVector(Vs,o).addScaledVector(Gs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function ic(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var nt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ke.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Ke.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ke.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Ke.workingColorSpace){if(t=Cp(t,1),e=Je(e,0,1),i=Je(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ic(o,r,t+1/3),this.g=ic(o,r,t),this.b=ic(o,r,t-1/3)}return Ke.colorSpaceToWorking(this,s),this}setStyle(t,e=ai){function i(r){r!==void 0&&parseFloat(r)<1&&Ne("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ne("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ne("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ai){let i=Yu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ne("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gn(t.r),this.g=gn(t.g),this.b=gn(t.b),this}copyLinearToSRGB(t){return this.r=qs(t.r),this.g=qs(t.g),this.b=qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ai){return Ke.workingToColorSpace(ei.copy(this),t),Math.round(Je(ei.r*255,0,255))*65536+Math.round(Je(ei.g*255,0,255))*256+Math.round(Je(ei.b*255,0,255))}getHexString(t=ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ke.workingColorSpace){Ke.workingToColorSpace(ei.copy(this),e);let i=ei.r,s=ei.g,r=ei.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ke.workingColorSpace){return Ke.workingToColorSpace(ei.copy(this),e),t.r=ei.r,t.g=ei.g,t.b=ei.b,t}getStyle(t=ai){Ke.workingToColorSpace(ei.copy(this),t);let e=ei.r,i=ei.g,s=ei.b;return t!==ai?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(In),this.setHSL(In.h+t,In.s+e,In.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(In),t.getHSL(Lo);let i=kl(In.h,Lo.h,e),s=kl(In.s,Lo.s,e),r=kl(In.l,Lo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ei=new nt;nt.NAMES=Yu;var Bp=0,ls=class extends vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Vr(),this.name="",this.type="Material",this.blending=ss,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xo,this.blendDst=qo,this.blendEquation=Ln,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ne(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ne(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(i.blending=this.blending),this.side!==xn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xo&&(i.blendSrc=this.blendSrc),this.blendDst!==qo&&(i.blendDst=this.blendDst),this.blendEquation!==Ln&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},cs=class extends ls{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Nt=new U,No=new je,zp=0,wi=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=dc,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)No.fromBufferAttribute(this,e),No.applyMatrix3(t),this.setXY(e,No.x,No.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Nt.fromBufferAttribute(this,e),Nt.applyMatrix3(t),this.setXYZ(e,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Nt.fromBufferAttribute(this,e),Nt.applyMatrix4(t),this.setXYZ(e,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Nt.fromBufferAttribute(this,e),Nt.applyNormalMatrix(t),this.setXYZ(e,Nt.x,Nt.y,Nt.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Nt.fromBufferAttribute(this,e),Nt.transformDirection(t),this.setXYZ(e,Nt.x,Nt.y,Nt.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=pr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fi(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pr(e,this.array)),e}setX(t,e){return this.normalized&&(e=fi(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pr(e,this.array)),e}setY(t,e){return this.normalized&&(e=fi(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fi(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pr(e,this.array)),e}setW(t,e){return this.normalized&&(e=fi(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=fi(e,this.array),i=fi(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=fi(e,this.array),i=fi(i,this.array),s=fi(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=fi(e,this.array),i=fi(i,this.array),s=fi(s,this.array),r=fi(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dc&&(t.usage=this.usage),t}};var Er=class extends wi{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Tr=class extends wi{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Li=class extends wi{constructor(t,e,i){super(new Float32Array(t),e,i)}},Vp=0,Pi=new Tt,nc=new ms,Hs=new U,Si=new Nn,xr=new Nn,qt=new U,tn=class n extends vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nc(t)?Tr:Er)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Oe().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pi.makeRotationFromQuaternion(t),this.applyMatrix4(Pi),this}rotateX(t){return Pi.makeRotationX(t),this.applyMatrix4(Pi),this}rotateY(t){return Pi.makeRotationY(t),this.applyMatrix4(Pi),this}rotateZ(t){return Pi.makeRotationZ(t),this.applyMatrix4(Pi),this}translate(t,e,i){return Pi.makeTranslation(t,e,i),this.applyMatrix4(Pi),this}scale(t,e,i){return Pi.makeScale(t,e,i),this.applyMatrix4(Pi),this}lookAt(t){return nc.lookAt(t),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Li(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Si.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Js);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let i=this.boundingSphere.center;if(Si.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];xr.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(Si.min,xr.min),Si.expandByPoint(qt),qt.addVectors(Si.max,xr.max),Si.expandByPoint(qt)):(Si.expandByPoint(xr.min),Si.expandByPoint(xr.max))}Si.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)qt.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(qt));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)qt.fromBufferAttribute(a,c),l&&(Hs.fromBufferAttribute(t,c),qt.add(Hs)),s=Math.max(s,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new U,l[F]=new U;let c=new U,h=new U,u=new U,d=new je,m=new je,g=new je,v=new U,p=new U;function f(F,y,b){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,y),u.fromBufferAttribute(i,b),d.fromBufferAttribute(r,F),m.fromBufferAttribute(r,y),g.fromBufferAttribute(r,b),h.sub(c),u.sub(c),m.sub(d),g.sub(d);let D=1/(m.x*g.y-g.x*m.y);isFinite(D)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(D),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(D),a[F].add(v),a[y].add(v),a[b].add(v),l[F].add(p),l[y].add(p),l[b].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let F=0,y=w.length;F<y;++F){let b=w[F],D=b.start,z=b.count;for(let B=D,W=D+z;B<W;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let S=new U,E=new U,T=new U,A=new U;function R(F){T.fromBufferAttribute(s,F),A.copy(T);let y=a[F];S.copy(y),S.sub(T.multiplyScalar(T.dot(y))).normalize(),E.crossVectors(A,y);let D=E.dot(l[F])<0?-1:1;o.setXYZW(F,S.x,S.y,S.z,D)}for(let F=0,y=w.length;F<y;++F){let b=w[F],D=b.start,z=b.count;for(let B=D,W=D+z;B<W;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let d=0,m=t.count;d<m;d+=3){let g=t.getX(d+0),v=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)qt.fromBufferAttribute(t,e),qt.normalize(),t.setXYZ(e,qt.x,qt.y,qt.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),m=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*h;for(let f=0;f<h;f++)d[g++]=c[m++]}return new wi(d,h,u)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],m=t(d,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ru=new Tt,es=new wr,Fo=new Js,ou=new U,Uo=new U,Oo=new U,ko=new U,sc=new U,Bo=new U,au=new U,zo=new U,_i=class extends ms{constructor(t=new tn,e=new cs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Bo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(sc.fromBufferAttribute(u,t),o?Bo.addScaledVector(sc,h):Bo.addScaledVector(sc.sub(e),h))}e.add(Bo)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fo.copy(i.boundingSphere),Fo.applyMatrix4(r),es.copy(t.ray).recast(t.near),!(Fo.containsPoint(es.origin)===!1&&(es.intersectSphere(Fo,ou)===null||es.origin.distanceToSquared(ou)>(t.far-t.near)**2))&&(ru.copy(r).invert(),es.copy(t.ray).applyMatrix4(ru),!(i.boundingBox!==null&&es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,es)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let p=d[g],f=o[p.materialIndex],w=Math.max(p.start,m.start),S=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=w,T=S;E<T;E+=3){let A=a.getX(E),R=a.getX(E+1),F=a.getX(E+2);s=Vo(this,f,t,i,c,h,u,A,R,F),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){let w=a.getX(p),S=a.getX(p+1),E=a.getX(p+2);s=Vo(this,o,t,i,c,h,u,w,S,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let p=d[g],f=o[p.materialIndex],w=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=w,T=S;E<T;E+=3){let A=E,R=E+1,F=E+2;s=Vo(this,f,t,i,c,h,u,A,R,F),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){let w=p,S=p+1,E=p+2;s=Vo(this,o,t,i,c,h,u,w,S,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Gp(n,t,e,i,s,r,o,a){let l;if(t.side===li?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===xn,a),l===null)return null;zo.copy(a),zo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(zo);return c<e.near||c>e.far?null:{distance:c,point:zo.clone(),object:n}}function Vo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Uo),n.getVertexPosition(l,Oo),n.getVertexPosition(c,ko);let h=Gp(n,t,e,i,Uo,Oo,ko,au);if(h){let u=new U;Dn.getBarycoord(au,Uo,Oo,ko,u),s&&(h.uv=Dn.getInterpolatedAttribute(s,a,l,c,u,new je)),r&&(h.uv1=Dn.getInterpolatedAttribute(r,a,l,c,u,new je)),o&&(h.normal=Dn.getInterpolatedAttribute(o,a,l,c,u,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new U,materialIndex:0};Dn.getNormal(Uo,Oo,ko,d.normal),h.face=d,h.barycoord=u}return h}var js=class n extends tn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,m=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Li(c,3)),this.setAttribute("normal",new Li(h,3)),this.setAttribute("uv",new Li(u,2));function g(v,p,f,w,S,E,T,A,R,F,y){let b=E/R,D=T/F,z=E/2,B=T/2,W=A/2,$=R+1,V=F+1,H=0,Q=0,pe=new U;for(let ce=0;ce<V;ce++){let me=ce*D-B;for(let He=0;He<$;He++){let ze=He*b-z;pe[v]=ze*w,pe[p]=me*S,pe[f]=W,c.push(pe.x,pe.y,pe.z),pe[v]=0,pe[p]=0,pe[f]=A>0?1:-1,h.push(pe.x,pe.y,pe.z),u.push(He/R),u.push(1-ce/F),H+=1}}for(let ce=0;ce<F;ce++)for(let me=0;me<R;me++){let He=d+me+$*ce,ze=d+me+$*(ce+1),yt=d+(me+1)+$*(ce+1),gt=d+(me+1)+$*ce;l.push(He,ze,gt),l.push(ze,yt,gt),Q+=6}a.addGroup(m,Q,y),m+=Q,d+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function _s(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function ti(n){let t={};for(let e=0;e<n.length;e++){let i=_s(n[e]);for(let s in i)t[s]=i[s]}return t}function Hp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Uc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ke.workingColorSpace}var $u={clone:_s,merge:ti},Wp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ti=class extends ls{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wp,this.fragmentShader=Xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=Hp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Ar=class extends ms{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pn=new U,lu=new je,cu=new je,pi=class extends Ar{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Jo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ol*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan(Ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z)}getViewSize(t,e){return this.getViewBounds(t,lu,cu),e.subVectors(cu,lu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ol*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ws=-90,Xs=1,ea=class extends ms{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pi(Ws,Xs,t,e);s.layers=this.layers,this.add(s);let r=new pi(Ws,Xs,t,e);r.layers=this.layers,this.add(r);let o=new pi(Ws,Xs,t,e);o.layers=this.layers,this.add(o);let a=new pi(Ws,Xs,t,e);a.layers=this.layers,this.add(a);let l=new pi(Ws,Xs,t,e);l.layers=this.layers,this.add(l);let c=new pi(Ws,Xs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Xi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===br)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Cr=class extends Zi{constructor(t=[],e=Bn,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Rr=class extends Ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Cr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new js(5,5,5),r=new Ti({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:li,blending:nn});r.uniforms.tEquirect.value=e;let o=new _i(s,r),a=e.minFilter;return e.minFilter===sn&&(e.minFilter=Ot),new ea(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},ns=class extends ms{constructor(){super(),this.isGroup=!0,this.type="Group"}},qp={type:"move"},Qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let p=e.getJointPose(v,i),f=this._getHandJoint(c,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ns;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}};var Ir=class extends ms{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new as,this.environmentIntensity=1,this.environmentRotation=new as,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ta=class extends Zi{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Yt,h=Yt,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rc=new U,Yp=new U,$p=new Oe,Di=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=rc.subVectors(i,e).cross(Yp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(rc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||$p.getNormalMatrix(t),s=this.coplanarPoint(rc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ts=new Js,Zp=new je(.5,.5),Go=new U,Pr=class{constructor(t=new Di,e=new Di,i=new Di,s=new Di,r=new Di,o=new Di){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Xi,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],m=r[7],g=r[8],v=r[9],p=r[10],f=r[11],w=r[12],S=r[13],E=r[14],T=r[15];if(s[0].setComponents(c-o,m-h,f-g,T-w).normalize(),s[1].setComponents(c+o,m+h,f+g,T+w).normalize(),s[2].setComponents(c+a,m+u,f+v,T+S).normalize(),s[3].setComponents(c-a,m-u,f-v,T-S).normalize(),i)s[4].setComponents(l,d,p,E).normalize(),s[5].setComponents(c-l,m-d,f-p,T-E).normalize();else if(s[4].setComponents(c-l,m-d,f-p,T-E).normalize(),e===Xi)s[5].setComponents(c+l,m+d,f+p,T+E).normalize();else if(e===br)s[5].setComponents(l,d,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(t){ts.center.set(0,0,0);let e=Zp.distanceTo(t.center);return ts.radius=.7071067811865476+e,ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Go.x=s.normal.x>0?t.max.x:t.min.x,Go.y=s.normal.y>0?t.max.y:t.min.y,Go.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Go)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Fn=class extends Zi{constructor(t,e,i=Yi,s,r,o,a=Yt,l=Yt,c,h=en,u=1){if(h!==en&&h!==zn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Zs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ia=class extends Fn{constructor(t,e=Yi,i=Bn,s,r,o=Yt,a=Yt,l,c=en){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Dr=class extends Zi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var hs=class n extends tn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,m=[],g=[],v=[],p=[];for(let f=0;f<h;f++){let w=f*d-o;for(let S=0;S<c;S++){let E=S*u-r;g.push(E,-w,0),v.push(0,0,1),p.push(S/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<a;w++){let S=w+c*f,E=w+c*(f+1),T=w+1+c*(f+1),A=w+1+c*f;m.push(S,E,A),m.push(E,T,A)}this.setIndex(m),this.setAttribute("position",new Li(g,3)),this.setAttribute("normal",new Li(v,3)),this.setAttribute("uv",new Li(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var na=class extends Ti{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var sa=class extends ls{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ra=class extends ls{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ho(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}var ds=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];i:{e:{let o;t:{n:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break e}o=e.length;break t}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break e}o=i,i=0;break t}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},oa=class extends ds{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ac,endingEnd:ac}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case lc:r=t,a=2*e-i;break;case cc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case lc:o=t,l=2*i-e;break;case cc:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(i-e)/(s-e),v=g*g,p=v*g,f=-d*p+2*d*v-d*g,w=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*g+1,S=(-1-m)*p+(1.5+m)*v+.5*g,E=m*p-m*v;for(let T=0;T!==a;++T)r[T]=f*o[h+T]+w*o[c+T]+S*o[l+T]+E*o[u+T];return r}},aa=class extends ds{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},la=class extends ds{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ai=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ho(e,this.TimeBufferType),this.values=Ho(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ho(t.times,Array),values:Ho(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new la(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new aa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new oa(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case vr:e=this.InterpolantFactoryMethodDiscrete;break;case Zo:e=this.InterpolantFactoryMethodLinear;break;case Wo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ne("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return Zo;case this.InterpolantFactoryMethodSmooth:return Wo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Pe("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Pe("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Pe("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Ap(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Pe("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Wo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,d=u-i,m=u+i;for(let g=0;g!==i;++g){let v=e[u+g];if(v!==e[d+g]||v!==e[m+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let m=0;m!==i;++m)e[d+m]=e[u+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Ai.prototype.ValueTypeName="";Ai.prototype.TimeBufferType=Float32Array;Ai.prototype.ValueBufferType=Float32Array;Ai.prototype.DefaultInterpolation=Zo;var Un=class extends Ai{constructor(t,e,i){super(t,e,i)}};Un.prototype.ValueTypeName="bool";Un.prototype.ValueBufferType=Array;Un.prototype.DefaultInterpolation=vr;Un.prototype.InterpolantFactoryMethodLinear=void 0;Un.prototype.InterpolantFactoryMethodSmooth=void 0;var ca=class extends Ai{constructor(t,e,i,s){super(t,e,i,s)}};ca.prototype.ValueTypeName="color";var ha=class extends Ai{constructor(t,e,i,s){super(t,e,i,s)}};ha.prototype.ValueTypeName="number";var da=class extends ds{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)mi.slerpFlat(r,0,o,c-a,o,c,l);return r}},Lr=class extends Ai{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new da(this.times,this.values,this.getValueSize(),t)}};Lr.prototype.ValueTypeName="quaternion";Lr.prototype.InterpolantFactoryMethodSmooth=void 0;var On=class extends Ai{constructor(t,e,i){super(t,e,i)}};On.prototype.ValueTypeName="string";On.prototype.ValueBufferType=Array;On.prototype.DefaultInterpolation=vr;On.prototype.InterpolantFactoryMethodLinear=void 0;On.prototype.InterpolantFactoryMethodSmooth=void 0;var ua=class extends Ai{constructor(t,e,i,s){super(t,e,i,s)}};ua.prototype.ValueTypeName="vector";var us=class extends Ar{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var fa=class extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Oc="\\[\\]\\.:\\/",Jp=new RegExp("["+Oc+"]","g"),kc="[^"+Oc+"]",Kp="[^"+Oc.replace("\\.","")+"]",jp=/((?:WC+[\/:])*)/.source.replace("WC",kc),Qp=/(WCOD+)?/.source.replace("WCOD",Kp),em=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kc),tm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kc),im=new RegExp("^"+jp+Qp+em+tm+"$"),nm=["material","materials","bones","map"],uc=class{constructor(t,e,i){let s=i||St.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},St=(()=>{class n{constructor(e,i,s){this.path=i,this.parsedPath=s||n.parseTrackName(i),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,i,s){return e&&e.isAnimationObjectGroup?new n.Composite(e,i,s):new n(e,i,s)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Jp,"")}static parseTrackName(e){let i=im.exec(e);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let s={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},r=s.nodeName&&s.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=s.nodeName.substring(r+1);nm.indexOf(o)!==-1&&(s.nodeName=s.nodeName.substring(0,r),s.objectName=o)}if(s.propertyName===null||s.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return s}static findNode(e,i){if(i===void 0||i===""||i==="."||i===-1||i===e.name||i===e.uuid)return e;if(e.skeleton){let s=e.skeleton.getBoneByName(i);if(s!==void 0)return s}if(e.children){let s=function(o){for(let a=0;a<o.length;a++){let l=o[a];if(l.name===i||l.uuid===i)return l;let c=s(l.children);if(c)return c}return null},r=s(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,i){e[i]=this.targetObject[this.propertyName]}_getValue_array(e,i){let s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)e[i++]=s[r]}_getValue_arrayElement(e,i){e[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,i){this.resolvedProperty.toArray(e,i)}_setValue_direct(e,i){this.targetObject[this.propertyName]=e[i]}_setValue_direct_setNeedsUpdate(e,i){this.targetObject[this.propertyName]=e[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,i){this.targetObject[this.propertyName]=e[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,i){let s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)s[r]=e[i++]}_setValue_array_setNeedsUpdate(e,i){let s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)s[r]=e[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,i){let s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)s[r]=e[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,i){this.resolvedProperty[this.propertyIndex]=e[i]}_setValue_arrayElement_setNeedsUpdate(e,i){this.resolvedProperty[this.propertyIndex]=e[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,i){this.resolvedProperty[this.propertyIndex]=e[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,i){this.resolvedProperty.fromArray(e,i)}_setValue_fromArray_setNeedsUpdate(e,i){this.resolvedProperty.fromArray(e,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,i){this.resolvedProperty.fromArray(e,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,i){this.bind(),this.getValue(e,i)}_setValue_unbound(e,i){this.bind(),this.setValue(e,i)}bind(){let e=this.node,i=this.parsedPath,s=i.objectName,r=i.propertyName,o=i.propertyIndex;if(e||(e=n.findNode(this.rootNode,i.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(s){let h=i.objectIndex;switch(s){case"materials":if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===h){h=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[s]===void 0){Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[s]}if(h!==void 0){if(e[h]===void 0){Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let a=e[r];if(a===void 0){let h=i.nodeName;Pe("PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=uc,n})();St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var t1=new Float32Array(1);var hu=new Tt,kn=class{constructor(t,e,i=0,s=1/0){this.ray=new wr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Ks,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Pe("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return hu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hu),this}intersectObject(t,e=!0,i=[]){return fc(t,this,i,e),i.sort(du),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)fc(t[s],this,i,e);return i.sort(du),i}};function du(n,t){return n.distance-t.distance}function fc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)fc(r[o],t,e,!0)}}function Bc(n,t,e,i){let s=sm(i);switch(e){case Ic:return n*t;case Dc:return n*t/s.components*s.byteLength;case Aa:return n*t/s.components*s.byteLength;case ps:return n*t*2/s.components*s.byteLength;case Ca:return n*t*2/s.components*s.byteLength;case Pc:return n*t*3/s.components*s.byteLength;case Fi:return n*t*4/s.components*s.byteLength;case Ra:return n*t*4/s.components*s.byteLength;case Or:case kr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Br:case zr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Pa:case La:return Math.max(n,16)*Math.max(t,8)/4;case Ia:case Da:return Math.max(n,8)*Math.max(t,8)/2;case Na:case Fa:case Oa:case ka:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ua:case Ba:case za:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case qa:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case $a:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Za:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ja:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Qa:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case el:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case tl:case il:case nl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case sl:case rl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ol:case al:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sm(n){switch(n){case Ci:case Tc:return{byteLength:1,components:1};case tr:case Ac:case rn:return{byteLength:2,components:1};case Ea:case Ta:return{byteLength:2,components:4};case Yi:case wa:case $i:return{byteLength:4,components:1};case Cc:case Rc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="182");function xf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function om(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<u.length;m++){let g=u[d],v=u[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let m=0,g=u.length;m<g;m++){let v=u[m];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var am=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,um=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_m=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ym=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Im=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Um=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Om="gl_FragColor = linearToOutputTexel( gl_FragColor );",km=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ym=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$m=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Km=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,e_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,r_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,o_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,a_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,l_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,__=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,v_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,S_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,E_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,T_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,I_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,U_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,H_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,W_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,X_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,q_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,J_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,K_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,og=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ag=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Eg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ag=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ig=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Pg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ug=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Og=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:am,alphahash_pars_fragment:lm,alphamap_fragment:cm,alphamap_pars_fragment:hm,alphatest_fragment:dm,alphatest_pars_fragment:um,aomap_fragment:fm,aomap_pars_fragment:pm,batching_pars_vertex:mm,batching_vertex:_m,begin_vertex:gm,beginnormal_vertex:xm,bsdfs:vm,iridescence_fragment:ym,bumpmap_pars_fragment:bm,clipping_planes_fragment:Mm,clipping_planes_pars_fragment:Sm,clipping_planes_pars_vertex:wm,clipping_planes_vertex:Em,color_fragment:Tm,color_pars_fragment:Am,color_pars_vertex:Cm,color_vertex:Rm,common:Im,cube_uv_reflection_fragment:Pm,defaultnormal_vertex:Dm,displacementmap_pars_vertex:Lm,displacementmap_vertex:Nm,emissivemap_fragment:Fm,emissivemap_pars_fragment:Um,colorspace_fragment:Om,colorspace_pars_fragment:km,envmap_fragment:Bm,envmap_common_pars_fragment:zm,envmap_pars_fragment:Vm,envmap_pars_vertex:Gm,envmap_physical_pars_fragment:Qm,envmap_vertex:Hm,fog_vertex:Wm,fog_pars_vertex:Xm,fog_fragment:qm,fog_pars_fragment:Ym,gradientmap_pars_fragment:$m,lightmap_pars_fragment:Zm,lights_lambert_fragment:Jm,lights_lambert_pars_fragment:Km,lights_pars_begin:jm,lights_toon_fragment:e_,lights_toon_pars_fragment:t_,lights_phong_fragment:i_,lights_phong_pars_fragment:n_,lights_physical_fragment:s_,lights_physical_pars_fragment:r_,lights_fragment_begin:o_,lights_fragment_maps:a_,lights_fragment_end:l_,logdepthbuf_fragment:c_,logdepthbuf_pars_fragment:h_,logdepthbuf_pars_vertex:d_,logdepthbuf_vertex:u_,map_fragment:f_,map_pars_fragment:p_,map_particle_fragment:m_,map_particle_pars_fragment:__,metalnessmap_fragment:g_,metalnessmap_pars_fragment:x_,morphinstance_vertex:v_,morphcolor_vertex:y_,morphnormal_vertex:b_,morphtarget_pars_vertex:M_,morphtarget_vertex:S_,normal_fragment_begin:w_,normal_fragment_maps:E_,normal_pars_fragment:T_,normal_pars_vertex:A_,normal_vertex:C_,normalmap_pars_fragment:R_,clearcoat_normal_fragment_begin:I_,clearcoat_normal_fragment_maps:P_,clearcoat_pars_fragment:D_,iridescence_pars_fragment:L_,opaque_fragment:N_,packing:F_,premultiplied_alpha_fragment:U_,project_vertex:O_,dithering_fragment:k_,dithering_pars_fragment:B_,roughnessmap_fragment:z_,roughnessmap_pars_fragment:V_,shadowmap_pars_fragment:G_,shadowmap_pars_vertex:H_,shadowmap_vertex:W_,shadowmask_pars_fragment:X_,skinbase_vertex:q_,skinning_pars_vertex:Y_,skinning_vertex:$_,skinnormal_vertex:Z_,specularmap_fragment:J_,specularmap_pars_fragment:K_,tonemapping_fragment:j_,tonemapping_pars_fragment:Q_,transmission_fragment:eg,transmission_pars_fragment:tg,uv_pars_fragment:ig,uv_pars_vertex:ng,uv_vertex:sg,worldpos_vertex:rg,background_vert:og,background_frag:ag,backgroundCube_vert:lg,backgroundCube_frag:cg,cube_vert:hg,cube_frag:dg,depth_vert:ug,depth_frag:fg,distance_vert:pg,distance_frag:mg,equirect_vert:_g,equirect_frag:gg,linedashed_vert:xg,linedashed_frag:vg,meshbasic_vert:yg,meshbasic_frag:bg,meshlambert_vert:Mg,meshlambert_frag:Sg,meshmatcap_vert:wg,meshmatcap_frag:Eg,meshnormal_vert:Tg,meshnormal_frag:Ag,meshphong_vert:Cg,meshphong_frag:Rg,meshphysical_vert:Ig,meshphysical_frag:Pg,meshtoon_vert:Dg,meshtoon_frag:Lg,points_vert:Ng,points_frag:Fg,shadow_vert:Ug,shadow_frag:Og,sprite_vert:kg,sprite_frag:Bg},he={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},an={basic:{uniforms:ti([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:ti([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new nt(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:ti([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:ti([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:ti([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new nt(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:ti([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:ti([he.points,he.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:ti([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:ti([he.common,he.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:ti([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:ti([he.sprite,he.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:ti([he.common,he.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:ti([he.lights,he.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};an.physical={uniforms:ti([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var hl={r:0,b:0,g:0},gs=new as,zg=new Tt;function Vg(n,t,e,i,s,r,o){let a=new nt(0),l=r===!0?0:1,c,h,u=null,d=0,m=null;function g(S){let E=S.isScene===!0?S.background:null;return E&&E.isTexture&&(E=(S.backgroundBlurriness>0?e:t).get(E)),E}function v(S){let E=!1,T=g(S);T===null?f(a,l):T&&T.isColor&&(f(T,1),E=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(S,E){let T=g(E);T&&(T.isCubeTexture||T.mapping===Fr)?(h===void 0&&(h=new _i(new js(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:_s(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,R,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),gs.copy(E.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zg.makeRotationFromEuler(gs)),h.material.toneMapped=Ke.getTransfer(T.colorSpace)!==rt,(u!==T||d!==T.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,m=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new _i(new hs(2,2),new Ti({name:"BackgroundMaterial",uniforms:_s(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(T.colorSpace)!==rt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=T,d=T.version,m=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,E){S.getRGB(hl,Uc(n)),i.buffers.color.setClear(hl.r,hl.g,hl.b,E,o)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),l=E,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(a,l)},render:v,addToRenderList:p,dispose:w}}function Gg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(b,D,z,B,W){let $=!1,V=u(B,z,D);r!==V&&(r=V,c(r.object)),$=m(b,B,z,W),$&&g(b,B,z,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,E(b,D,z,B),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function u(b,D,z){let B=z.wireframe===!0,W=i[b.id];W===void 0&&(W={},i[b.id]=W);let $=W[D.id];$===void 0&&($={},W[D.id]=$);let V=$[B];return V===void 0&&(V=d(l()),$[B]=V),V}function d(b){let D=[],z=[],B=[];for(let W=0;W<e;W++)D[W]=0,z[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:B,object:b,attributes:{},index:null}}function m(b,D,z,B){let W=r.attributes,$=D.attributes,V=0,H=z.getAttributes();for(let Q in H)if(H[Q].location>=0){let ce=W[Q],me=$[Q];if(me===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(me=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(me=b.instanceColor)),ce===void 0||ce.attribute!==me||me&&ce.data!==me.data)return!0;V++}return r.attributesNum!==V||r.index!==B}function g(b,D,z,B){let W={},$=D.attributes,V=0,H=z.getAttributes();for(let Q in H)if(H[Q].location>=0){let ce=$[Q];ce===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor));let me={};me.attribute=ce,ce&&ce.data&&(me.data=ce.data),W[Q]=me,V++}r.attributes=W,r.attributesNum=V,r.index=B}function v(){let b=r.newAttributes;for(let D=0,z=b.length;D<z;D++)b[D]=0}function p(b){f(b,0)}function f(b,D){let z=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;z[b]=1,B[b]===0&&(n.enableVertexAttribArray(b),B[b]=1),W[b]!==D&&(n.vertexAttribDivisor(b,D),W[b]=D)}function w(){let b=r.newAttributes,D=r.enabledAttributes;for(let z=0,B=D.length;z<B;z++)D[z]!==b[z]&&(n.disableVertexAttribArray(z),D[z]=0)}function S(b,D,z,B,W,$,V){V===!0?n.vertexAttribIPointer(b,D,z,W,$):n.vertexAttribPointer(b,D,z,B,W,$)}function E(b,D,z,B){v();let W=B.attributes,$=z.getAttributes(),V=D.defaultAttributeValues;for(let H in $){let Q=$[H];if(Q.location>=0){let pe=W[H];if(pe===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(pe=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(pe=b.instanceColor)),pe!==void 0){let ce=pe.normalized,me=pe.itemSize,He=t.get(pe);if(He===void 0)continue;let ze=He.buffer,yt=He.type,gt=He.bytesPerElement,q=yt===n.INT||yt===n.UNSIGNED_INT||pe.gpuType===wa;if(pe.isInterleavedBufferAttribute){let ee=pe.data,ve=ee.stride,ke=pe.offset;if(ee.isInstancedInterleavedBuffer){for(let Me=0;Me<Q.locationSize;Me++)f(Q.location+Me,ee.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Me=0;Me<Q.locationSize;Me++)p(Q.location+Me);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let Me=0;Me<Q.locationSize;Me++)S(Q.location+Me,me/Q.locationSize,yt,ce,ve*gt,(ke+me/Q.locationSize*Me)*gt,q)}else{if(pe.isInstancedBufferAttribute){for(let ee=0;ee<Q.locationSize;ee++)f(Q.location+ee,pe.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ee=0;ee<Q.locationSize;ee++)p(Q.location+ee);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let ee=0;ee<Q.locationSize;ee++)S(Q.location+ee,me/Q.locationSize,yt,ce,me*gt,me/Q.locationSize*ee*gt,q)}}else if(V!==void 0){let ce=V[H];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv(Q.location,ce);break;case 3:n.vertexAttrib3fv(Q.location,ce);break;case 4:n.vertexAttrib4fv(Q.location,ce);break;default:n.vertexAttrib1fv(Q.location,ce)}}}}w()}function T(){F();for(let b in i){let D=i[b];for(let z in D){let B=D[z];for(let W in B)h(B[W].object),delete B[W];delete D[z]}delete i[b]}}function A(b){if(i[b.id]===void 0)return;let D=i[b.id];for(let z in D){let B=D[z];for(let W in B)h(B[W].object),delete B[W];delete D[z]}delete i[b.id]}function R(b){for(let D in i){let z=i[D];if(z[b.id]===void 0)continue;let B=z[b.id];for(let W in B)h(B[W].object),delete B[W];delete z[b.id]}}function F(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:y,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:p,disableUnusedAttributes:w}}function Hg(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];e.update(m,i,1)}function l(c,h,u,d){if(u===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Wg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Fi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let F=R===rn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Ci&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==$i&&!F)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ne("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:E,maxSamples:T,samples:A}}function Xg(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Di,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||i!==0||s;return s=d,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){let g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let w=r?0:i,S=w*4,E=f.clippingState||null;l.value=E,E=h(g,d,S,m);for(let T=0;T!==S;++T)E[T]=e[T];f.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,m,g){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=l.value,g!==!0||p===null){let f=m+v*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<f)&&(p=new Float32Array(f));for(let S=0,E=m;S!==v;++S,E+=4)o.copy(u[S]).applyMatrix4(w,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function qg(n){let t=new WeakMap;function e(o,a){return a===ba?o.mapping=Bn:a===Ma&&(o.mapping=fs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===ba||a===Ma)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Rr(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Vn=4,Zu=[.125,.215,.35,.446,.526,.582],vs=20,Yg=256,Gr=new us,Ju=new nt,zc=null,Vc=0,Gc=0,Hc=!1,$g=new U,ul=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=$g}=r;zc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(zc,Vc,Gc),this._renderer.xr.enabled=Hc,t.scissorTest=!1,nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Bn||t.mapping===fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:rn,format:Fi,colorSpace:os,depthBuffer:!1},s=Ku(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ku(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Zg(r)),this._blurMaterial=Kg(r,t,e),this._ggxMaterial=Jg(r,t,e)}return s}_compileMaterial(t){let e=new _i(new tn,t);this._renderer.compile(e,Gr)}_sceneToCubeUV(t,e,i,s,r){let l=new pi(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,m=u.toneMapping;u.getClearColor(Ju),u.toneMapping=qi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _i(new js,new cs({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,p=v.material,f=!1,w=t.background;w?w.isColor&&(p.color.copy(w),t.background=null,f=!0):(p.color.copy(Ju),f=!0);for(let S=0;S<6;S++){let E=S%3;E===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):E===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let T=this._cubeSize;nr(s,E*T,S>2?T:0,T,T),u.setRenderTarget(s),f&&u.render(v,l),u.render(t,l)}u.toneMapping=m,u.autoClear=d,t.background=w}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Bn||t.mapping===fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ju());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;nr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Gr)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,m=u*d,{_lodMax:g}=this,v=this._sizeLods[i],p=3*v*(i>g-Vn?i-g+Vn:0),f=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=g-e,nr(r,p,f,3*v,2*v),s.setRenderTarget(r),s.render(a,Gr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,nr(t,p,f,3*v,2*v),s.setRenderTarget(t),s.render(a,Gr)}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Pe("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[s];u.material=c;let d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*vs-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):vs;p>vs&&Ne(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${vs}`);let f=[],w=0;for(let R=0;R<vs;++R){let F=R/v,y=Math.exp(-F*F/2);f.push(y),R===0?w+=y:R<p&&(w+=2*y)}for(let R=0;R<f.length;R++)f[R]=f[R]/w;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-i;let E=this._sizeLods[s],T=3*E*(s>S-Vn?s-S+Vn:0),A=4*(this._cubeSize-E);nr(e,T,A,3*E,2*E),l.setRenderTarget(e),l.render(u,Gr)}};function Zg(n){let t=[],e=[],i=[],s=n,r=n-Vn+1+Zu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Vn?l=Zu[o-n+Vn-1]:o===0&&(l=0),e.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,v=3,p=2,f=1,w=new Float32Array(v*g*m),S=new Float32Array(p*g*m),E=new Float32Array(f*g*m);for(let A=0;A<m;A++){let R=A%3*2/3-1,F=A>2?0:-1,y=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];w.set(y,v*g*A),S.set(d,p*g*A);let b=[A,A,A,A,A,A];E.set(b,f*g*A)}let T=new tn;T.setAttribute("position",new wi(w,v)),T.setAttribute("uv",new wi(S,p)),T.setAttribute("faceIndex",new wi(E,f)),i.push(new _i(T,null)),s>Vn&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Ku(n,t,e){let i=new Ei(n,t,e);return i.texture.mapping=Fr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function nr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Jg(n,t,e){return new Ti({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Yg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function Kg(n,t,e){let i=new Float32Array(vs),s=new U(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function ju(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function Qu(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function pl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===ba||l===Ma,h=l===Bn||l===fs;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ul(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let m=a.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new ul(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Qg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&$s("WebGLRenderer: "+i+" extension not supported."),s}}}function e0(n,t,e,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let m=r.get(d);m&&(t.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let m in d)t.update(d[m],n.ARRAY_BUFFER)}function c(u){let d=[],m=u.index,g=u.attributes.position,v=0;if(m!==null){let w=m.array;v=m.version;for(let S=0,E=w.length;S<E;S+=3){let T=w[S+0],A=w[S+1],R=w[S+2];d.push(T,A,A,R,R,T)}}else if(g!==void 0){let w=g.array;v=g.version;for(let S=0,E=w.length/3-1;S<E;S+=3){let T=S+0,A=S+1,R=S+2;d.push(T,A,A,R,R,T)}}else return;let p=new(Nc(d)?Tr:Er)(d,1);p.version=v;let f=r.get(u);f&&t.remove(f),r.set(u,p)}function h(u){let d=r.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function t0(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,m){n.drawElements(i,m,r,d*o),e.update(m,i,1)}function c(d,m,g){g!==0&&(n.drawElementsInstanced(i,m,r,d*o,g),e.update(m,i,g))}function h(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];e.update(p,i,1)}function u(d,m,g,v){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/o,m[f],v[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,d,0,v,0,g);let f=0;for(let w=0;w<g;w++)f+=m[w]*v[w];e.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function i0(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:Pe("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function n0(n,t,e){let i=new WeakMap,s=new wt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let y=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],S=0;m===!0&&(S=1),g===!0&&(S=2),v===!0&&(S=3);let E=a.attributes.position.count*S,T=1;E>t.maxTextureSize&&(T=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let A=new Float32Array(E*T*4*u),R=new Sr(A,E,T,u);R.type=$i,R.needsUpdate=!0;let F=S*4;for(let b=0;b<u;b++){let D=p[b],z=f[b],B=w[b],W=E*T*4*b;for(let $=0;$<D.count;$++){let V=$*F;m===!0&&(s.fromBufferAttribute(D,$),A[W+V+0]=s.x,A[W+V+1]=s.y,A[W+V+2]=s.z,A[W+V+3]=0),g===!0&&(s.fromBufferAttribute(z,$),A[W+V+4]=s.x,A[W+V+5]=s.y,A[W+V+6]=s.z,A[W+V+7]=0),v===!0&&(s.fromBufferAttribute(B,$),A[W+V+8]=s.x,A[W+V+9]=s.y,A[W+V+10]=s.z,A[W+V+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new je(E,T)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];let g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function s0(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var r0={[vc]:"LINEAR_TONE_MAPPING",[yc]:"REINHARD_TONE_MAPPING",[bc]:"CINEON_TONE_MAPPING",[Mc]:"ACES_FILMIC_TONE_MAPPING",[wc]:"AGX_TONE_MAPPING",[Ec]:"NEUTRAL_TONE_MAPPING",[Sc]:"CUSTOM_TONE_MAPPING"};function o0(n,t,e,i,s){let r=new Ei(t,e,{type:n,depthBuffer:i,stencilBuffer:s}),o=new Ei(t,e,{type:rn,depthBuffer:!1,stencilBuffer:!1}),a=new tn;a.setAttribute("position",new Li([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Li([0,2,0,0,2,0],2));let l=new na({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new _i(a,l),h=new us(-1,1,1,-1,0,1),u=null,d=null,m=!1,g,v=null,p=[],f=!1;this.setSize=function(w,S){r.setSize(w,S),o.setSize(w,S);for(let E=0;E<p.length;E++){let T=p[E];T.setSize&&T.setSize(w,S)}},this.setEffects=function(w){p=w,f=p.length>0&&p[0].isRenderPass===!0;let S=r.width,E=r.height;for(let T=0;T<p.length;T++){let A=p[T];A.setSize&&A.setSize(S,E)}},this.begin=function(w,S){if(m||w.toneMapping===qi&&p.length===0)return!1;if(v=S,S!==null){let E=S.width,T=S.height;(r.width!==E||r.height!==T)&&this.setSize(E,T)}return f===!1&&w.setRenderTarget(r),g=w.toneMapping,w.toneMapping=qi,!0},this.hasRenderPass=function(){return f},this.end=function(w,S){w.toneMapping=g,m=!0;let E=r,T=o;for(let A=0;A<p.length;A++){let R=p[A];if(R.enabled!==!1&&(R.render(w,T,E,S),R.needsSwap!==!1)){let F=E;E=T,T=F}}if(u!==w.outputColorSpace||d!==w.toneMapping){u=w.outputColorSpace,d=w.toneMapping,l.defines={},Ke.getTransfer(u)===rt&&(l.defines.SRGB_TRANSFER="");let A=r0[d];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,w.setRenderTarget(v),w.render(c,h),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}var vf=new Zi,qc=new Fn(1,1),yf=new Sr,bf=new Qo,Mf=new Cr,ef=[],tf=[],nf=new Float32Array(16),sf=new Float32Array(9),rf=new Float32Array(4);function rr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=ef[s];if(r===void 0&&(r=new Float32Array(s),ef[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function kt(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Bt(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ml(n,t){let e=tf[t];e===void 0&&(e=new Int32Array(t),tf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function a0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function l0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(kt(e,t))return;n.uniform2fv(this.addr,t),Bt(e,t)}}function c0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(kt(e,t))return;n.uniform3fv(this.addr,t),Bt(e,t)}}function h0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(kt(e,t))return;n.uniform4fv(this.addr,t),Bt(e,t)}}function d0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(kt(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Bt(e,t)}else{if(kt(e,i))return;rf.set(i),n.uniformMatrix2fv(this.addr,!1,rf),Bt(e,i)}}function u0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(kt(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Bt(e,t)}else{if(kt(e,i))return;sf.set(i),n.uniformMatrix3fv(this.addr,!1,sf),Bt(e,i)}}function f0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(kt(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Bt(e,t)}else{if(kt(e,i))return;nf.set(i),n.uniformMatrix4fv(this.addr,!1,nf),Bt(e,i)}}function p0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function m0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(kt(e,t))return;n.uniform2iv(this.addr,t),Bt(e,t)}}function _0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(kt(e,t))return;n.uniform3iv(this.addr,t),Bt(e,t)}}function g0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(kt(e,t))return;n.uniform4iv(this.addr,t),Bt(e,t)}}function x0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function v0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(kt(e,t))return;n.uniform2uiv(this.addr,t),Bt(e,t)}}function y0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(kt(e,t))return;n.uniform3uiv(this.addr,t),Bt(e,t)}}function b0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(kt(e,t))return;n.uniform4uiv(this.addr,t),Bt(e,t)}}function M0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(qc.compareFunction=e.isReversedDepthBuffer()?cl:ll,r=qc):r=vf,e.setTexture2D(t||r,s)}function S0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||bf,s)}function w0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Mf,s)}function E0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||yf,s)}function T0(n){switch(n){case 5126:return a0;case 35664:return l0;case 35665:return c0;case 35666:return h0;case 35674:return d0;case 35675:return u0;case 35676:return f0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return _0;case 35669:case 35673:return g0;case 5125:return x0;case 36294:return v0;case 36295:return y0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return E0}}function A0(n,t){n.uniform1fv(this.addr,t)}function C0(n,t){let e=rr(t,this.size,2);n.uniform2fv(this.addr,e)}function R0(n,t){let e=rr(t,this.size,3);n.uniform3fv(this.addr,e)}function I0(n,t){let e=rr(t,this.size,4);n.uniform4fv(this.addr,e)}function P0(n,t){let e=rr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function D0(n,t){let e=rr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function L0(n,t){let e=rr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function N0(n,t){n.uniform1iv(this.addr,t)}function F0(n,t){n.uniform2iv(this.addr,t)}function U0(n,t){n.uniform3iv(this.addr,t)}function O0(n,t){n.uniform4iv(this.addr,t)}function k0(n,t){n.uniform1uiv(this.addr,t)}function B0(n,t){n.uniform2uiv(this.addr,t)}function z0(n,t){n.uniform3uiv(this.addr,t)}function V0(n,t){n.uniform4uiv(this.addr,t)}function G0(n,t,e){let i=this.cache,s=t.length,r=ml(e,s);kt(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=qc:o=vf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function H0(n,t,e){let i=this.cache,s=t.length,r=ml(e,s);kt(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||bf,r[o])}function W0(n,t,e){let i=this.cache,s=t.length,r=ml(e,s);kt(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Mf,r[o])}function X0(n,t,e){let i=this.cache,s=t.length,r=ml(e,s);kt(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||yf,r[o])}function q0(n){switch(n){case 5126:return A0;case 35664:return C0;case 35665:return R0;case 35666:return I0;case 35674:return P0;case 35675:return D0;case 35676:return L0;case 5124:case 35670:return N0;case 35667:case 35671:return F0;case 35668:case 35672:return U0;case 35669:case 35673:return O0;case 5125:return k0;case 36294:return B0;case 36295:return z0;case 36296:return V0;case 35678:case 36198:case 36298:case 36306:case 35682:return G0;case 35679:case 36299:case 36307:return H0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return X0}}var Yc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=T0(e.type)}},$c=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=q0(e.type)}},Zc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Wc=/(\w+)(\])?(\[|\.)?/g;function of(n,t){n.seq.push(t),n.map[t.id]=t}function Y0(n,t,e){let i=n.name,s=i.length;for(Wc.lastIndex=0;;){let r=Wc.exec(i),o=Wc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){of(e,c===void 0?new Yc(a,n,t):new $c(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Zc(a),of(e,u)),e=u}}}var sr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Y0(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function af(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var $0=37297,Z0=0;function J0(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var lf=new Oe;function K0(n){Ke._getMatrix(lf,Ke.workingColorSpace,n);let t=`mat3( ${lf.elements.map(e=>e.toFixed(4))} )`;switch(Ke.getTransfer(n)){case yr:return[t,"LinearTransferOETF"];case rt:return[t,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function cf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+J0(n.getShaderSource(t),a)}else return r}function j0(n,t){let e=K0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Q0={[vc]:"Linear",[yc]:"Reinhard",[bc]:"Cineon",[Mc]:"ACESFilmic",[wc]:"AgX",[Ec]:"Neutral",[Sc]:"Custom"};function ex(n,t){let e=Q0[t];return e===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var dl=new U;function tx(){Ke.getLuminanceCoefficients(dl);let n=dl.x.toFixed(4),t=dl.y.toFixed(4),e=dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ix(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function nx(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function sx(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Wr(n){return n!==""}function hf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function df(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var rx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(n){return n.replace(rx,ax)}var ox=new Map;function ax(n,t){let e=Be[t];if(e===void 0){let i=ox.get(t);if(i!==void 0)e=Be[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Jc(e)}var lx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uf(n){return n.replace(lx,cx)}function cx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ff(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var hx={[Nr]:"SHADOWMAP_TYPE_PCF",[er]:"SHADOWMAP_TYPE_VSM"};function dx(n){return hx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ux={[Bn]:"ENVMAP_TYPE_CUBE",[fs]:"ENVMAP_TYPE_CUBE",[Fr]:"ENVMAP_TYPE_CUBE_UV"};function fx(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":ux[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var px={[fs]:"ENVMAP_MODE_REFRACTION"};function mx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":px[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var _x={[xc]:"ENVMAP_BLENDING_MULTIPLY",[Lu]:"ENVMAP_BLENDING_MIX",[Nu]:"ENVMAP_BLENDING_ADD"};function gx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":_x[n.combine]||"ENVMAP_BLENDING_NONE"}function xx(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function vx(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=dx(e),c=fx(e),h=mx(e),u=gx(e),d=xx(e),m=ix(e),g=nx(r),v=s.createProgram(),p,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wr).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wr).join(`
`),f.length>0&&(f+=`
`)):(p=[ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),f=[ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qi?"#define TONE_MAPPING":"",e.toneMapping!==qi?Be.tonemapping_pars_fragment:"",e.toneMapping!==qi?ex("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,j0("linearToOutputTexel",e.outputColorSpace),tx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wr).join(`
`)),o=Jc(o),o=hf(o,e),o=df(o,e),a=Jc(a),a=hf(a,e),a=df(a,e),o=uf(o),a=uf(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===Lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let S=w+p+o,E=w+f+a,T=af(s,s.VERTEX_SHADER,S),A=af(s,s.FRAGMENT_SHADER,E);s.attachShader(v,T),s.attachShader(v,A),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(D){if(n.debug.checkShaderErrors){let z=s.getProgramInfoLog(v)||"",B=s.getShaderInfoLog(T)||"",W=s.getShaderInfoLog(A)||"",$=z.trim(),V=B.trim(),H=W.trim(),Q=!0,pe=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,T,A);else{let ce=cf(s,T,"vertex"),me=cf(s,A,"fragment");Pe("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+$+`
`+ce+`
`+me)}else $!==""?Ne("WebGLProgram: Program Info Log:",$):(V===""||H==="")&&(pe=!1);pe&&(D.diagnostics={runnable:Q,programLog:$,vertexShader:{log:V,prefix:p},fragmentShader:{log:H,prefix:f}})}s.deleteShader(T),s.deleteShader(A),F=new sr(s,v),y=sx(s,v)}let F;this.getUniforms=function(){return F===void 0&&R(this),F};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,$0)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Z0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=A,this}var yx=0,Kc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new jc(t),e.set(t,i)),i}},jc=class{constructor(t){this.id=yx++,this.code=t,this.usedTimes=0}};function bx(n,t,e,i,s,r,o){let a=new Ks,l=new Kc,c=new Set,h=[],u=new Map,d=s.logarithmicDepthBuffer,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,b,D,z,B){let W=z.fog,$=B.geometry,V=y.isMeshStandardMaterial?z.environment:null,H=(y.isMeshStandardMaterial?e:t).get(y.envMap||V),Q=H&&H.mapping===Fr?H.image.height:null,pe=g[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&Ne("WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));let ce=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,me=ce!==void 0?ce.length:0,He=0;$.morphAttributes.position!==void 0&&(He=1),$.morphAttributes.normal!==void 0&&(He=2),$.morphAttributes.color!==void 0&&(He=3);let ze,yt,gt,q;if(pe){let at=an[pe];ze=at.vertexShader,yt=at.fragmentShader}else ze=y.vertexShader,yt=y.fragmentShader,l.update(y),gt=l.getVertexShaderID(y),q=l.getFragmentShaderID(y);let ee=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),ke=B.isInstancedMesh===!0,Me=B.isBatchedMesh===!0,tt=!!y.map,zt=!!y.matcap,Qe=!!H,ot=!!y.aoMap,ut=!!y.lightMap,Ve=!!y.bumpMap,At=!!y.normalMap,C=!!y.displacementMap,Ct=!!y.emissiveMap,st=!!y.metalnessMap,pt=!!y.roughnessMap,we=y.anisotropy>0,M=y.clearcoat>0,_=y.dispersion>0,P=y.iridescence>0,X=y.sheen>0,K=y.transmission>0,G=we&&!!y.anisotropyMap,Te=M&&!!y.clearcoatMap,re=M&&!!y.clearcoatNormalMap,Se=M&&!!y.clearcoatRoughnessMap,Le=P&&!!y.iridescenceMap,ie=P&&!!y.iridescenceThicknessMap,ae=X&&!!y.sheenColorMap,be=X&&!!y.sheenRoughnessMap,Ee=!!y.specularMap,oe=!!y.specularColorMap,Ge=!!y.specularIntensityMap,I=K&&!!y.transmissionMap,ue=K&&!!y.thicknessMap,ne=!!y.gradientMap,_e=!!y.alphaMap,te=y.alphaTest>0,Z=!!y.alphaHash,se=!!y.extensions,Fe=qi;y.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Fe=n.toneMapping);let mt={shaderID:pe,shaderType:y.type,shaderName:y.name,vertexShader:ze,fragmentShader:yt,defines:y.defines,customVertexShaderID:gt,customFragmentShaderID:q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Me,batchingColor:Me&&B._colorsTexture!==null,instancing:ke,instancingColor:ke&&B.instanceColor!==null,instancingMorph:ke&&B.morphTexture!==null,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:os,alphaToCoverage:!!y.alphaToCoverage,map:tt,matcap:zt,envMap:Qe,envMapMode:Qe&&H.mapping,envMapCubeUVHeight:Q,aoMap:ot,lightMap:ut,bumpMap:Ve,normalMap:At,displacementMap:C,emissiveMap:Ct,normalMapObjectSpace:At&&y.normalMapType===ku,normalMapTangentSpace:At&&y.normalMapType===Ou,metalnessMap:st,roughnessMap:pt,anisotropy:we,anisotropyMap:G,clearcoat:M,clearcoatMap:Te,clearcoatNormalMap:re,clearcoatRoughnessMap:Se,dispersion:_,iridescence:P,iridescenceMap:Le,iridescenceThicknessMap:ie,sheen:X,sheenColorMap:ae,sheenRoughnessMap:be,specularMap:Ee,specularColorMap:oe,specularIntensityMap:Ge,transmission:K,transmissionMap:I,thicknessMap:ue,gradientMap:ne,opaque:y.transparent===!1&&y.blending===ss&&y.alphaToCoverage===!1,alphaMap:_e,alphaTest:te,alphaHash:Z,combine:y.combine,mapUv:tt&&v(y.map.channel),aoMapUv:ot&&v(y.aoMap.channel),lightMapUv:ut&&v(y.lightMap.channel),bumpMapUv:Ve&&v(y.bumpMap.channel),normalMapUv:At&&v(y.normalMap.channel),displacementMapUv:C&&v(y.displacementMap.channel),emissiveMapUv:Ct&&v(y.emissiveMap.channel),metalnessMapUv:st&&v(y.metalnessMap.channel),roughnessMapUv:pt&&v(y.roughnessMap.channel),anisotropyMapUv:G&&v(y.anisotropyMap.channel),clearcoatMapUv:Te&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:re&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:be&&v(y.sheenRoughnessMap.channel),specularMapUv:Ee&&v(y.specularMap.channel),specularColorMapUv:oe&&v(y.specularColorMap.channel),specularIntensityMapUv:Ge&&v(y.specularIntensityMap.channel),transmissionMapUv:I&&v(y.transmissionMap.channel),thicknessMapUv:ue&&v(y.thicknessMap.channel),alphaMapUv:_e&&v(y.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(At||we),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(tt||_e),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ve,skinning:B.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:He,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Fe,decodeVideoTexture:tt&&y.map.isVideoTexture===!0&&Ke.getTransfer(y.map.colorSpace)===rt,decodeVideoTextureEmissive:Ct&&y.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(y.emissiveMap.colorSpace)===rt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ni,flipSided:y.side===li,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:se&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&y.extensions.multiDraw===!0||Me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function f(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let D in y.defines)b.push(D),b.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(w(b,y),S(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function w(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function S(y,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),y.push(a.mask)}function E(y){let b=g[y.type],D;if(b){let z=an[b];D=$u.clone(z.uniforms)}else D=y.uniforms;return D}function T(y,b){let D=u.get(b);return D!==void 0?++D.usedTimes:(D=new vx(n,b,y,r),h.push(D),u.set(b,D)),D}function A(y){if(--y.usedTimes===0){let b=h.indexOf(y);h[b]=h[h.length-1],h.pop(),u.delete(y.cacheKey),y.destroy()}}function R(y){l.remove(y)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:E,acquireProgram:T,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:F}}function Mx(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Sx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function pf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function mf(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,m,g,v,p){let f=n[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},n[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=p),t++,f}function a(u,d,m,g,v,p){let f=o(u,d,m,g,v,p);m.transmission>0?i.push(f):m.transparent===!0?s.push(f):e.push(f)}function l(u,d,m,g,v,p){let f=o(u,d,m,g,v,p);m.transmission>0?i.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Sx),i.length>1&&i.sort(d||pf),s.length>1&&s.sort(d||pf)}function h(){for(let u=t,d=n.length;u<d;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function wx(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new mf,n.set(i,[o])):s>=r.length?(o=new mf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Ex(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new nt};break;case"SpotLight":e={position:new U,direction:new U,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":e={color:new nt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function Tx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Ax=0;function Cx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Rx(n){let t=new Ex,e=Tx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);let s=new U,r=new Tt,o=new Tt;function a(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let m=0,g=0,v=0,p=0,f=0,w=0,S=0,E=0,T=0,A=0,R=0;c.sort(Cx);for(let y=0,b=c.length;y<b;y++){let D=c[y],z=D.color,B=D.intensity,W=D.distance,$=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ps?$=D.shadow.map.texture:$=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=z.r*B,u+=z.g*B,d+=z.b*B;else if(D.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(D.sh.coefficients[V],B);R++}else if(D.isDirectionalLight){let V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let H=D.shadow,Q=e.get(D);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,i.directionalShadow[m]=Q,i.directionalShadowMap[m]=$,i.directionalShadowMatrix[m]=D.shadow.matrix,w++}i.directional[m]=V,m++}else if(D.isSpotLight){let V=t.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(z).multiplyScalar(B),V.distance=W,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,i.spot[v]=V;let H=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,H.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[v]=H.matrix,D.castShadow){let Q=e.get(D);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,i.spotShadow[v]=Q,i.spotShadowMap[v]=$,E++}v++}else if(D.isRectAreaLight){let V=t.get(D);V.color.copy(z).multiplyScalar(B),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=V,p++}else if(D.isPointLight){let V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),V.distance=D.distance,V.decay=D.decay,D.castShadow){let H=D.shadow,Q=e.get(D);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,Q.shadowCameraNear=H.camera.near,Q.shadowCameraFar=H.camera.far,i.pointShadow[g]=Q,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=D.shadow.matrix,S++}i.point[g]=V,g++}else if(D.isHemisphereLight){let V=t.get(D);V.skyColor.copy(D.color).multiplyScalar(B),V.groundColor.copy(D.groundColor).multiplyScalar(B),i.hemi[f]=V,f++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let F=i.hash;(F.directionalLength!==m||F.pointLength!==g||F.spotLength!==v||F.rectAreaLength!==p||F.hemiLength!==f||F.numDirectionalShadows!==w||F.numPointShadows!==S||F.numSpotShadows!==E||F.numSpotMaps!==T||F.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=p,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=E+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,F.directionalLength=m,F.pointLength=g,F.spotLength=v,F.rectAreaLength=p,F.hemiLength=f,F.numDirectionalShadows=w,F.numPointShadows=S,F.numSpotShadows=E,F.numSpotMaps=T,F.numLightProbes=R,i.version=Ax++)}function l(c,h){let u=0,d=0,m=0,g=0,v=0,p=h.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){let S=c[f];if(S.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(S.isSpotLight){let E=i.spot[m];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),m++}else if(S.isRectAreaLight){let E=i.rectArea[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),o.identity(),r.copy(S.matrixWorld),r.premultiply(p),o.extractRotation(r),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let E=i.point[d];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){let E=i.hemi[v];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:i}}function _f(n){let t=new Rx(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ix(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new _f(n),t.set(s,[a])):r>=o.length?(a=new _f(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Lx=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Nx=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],gf=new Tt,Hr=new U,Xc=new U;function Fx(n,t,e){let i=new Pr,s=new je,r=new je,o=new wt,a=new sa,l=new ra,c={},h=e.maxTextureSize,u={[xn]:li,[li]:xn,[Ni]:Ni},d=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:Px,fragmentShader:Dx}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new tn;g.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new _i(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nr;let f=this.type;this.render=function(A,R,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;A.type===pu&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=Nr);let y=n.getRenderTarget(),b=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),z=n.state;z.setBlending(nn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let B=f!==this.type;B&&R.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach($=>$.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,$=A.length;W<$;W++){let V=A[W],H=V.shadow;if(H===void 0){Ne("WebGLShadowMap:",V,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let Q=H.getFrameExtents();if(s.multiply(Q),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,H.mapSize.y=r.y)),H.map===null||B===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===er){if(V.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Ei(s.x,s.y,{format:ps,type:rn,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),H.map.texture.name=V.name+".shadowMap",H.map.depthTexture=new Fn(s.x,s.y,$i),H.map.depthTexture.name=V.name+".shadowMapDepth",H.map.depthTexture.format=en,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Yt,H.map.depthTexture.magFilter=Yt}else{V.isPointLight?(H.map=new Rr(s.x),H.map.depthTexture=new ia(s.x,Yi)):(H.map=new Ei(s.x,s.y),H.map.depthTexture=new Fn(s.x,s.y,Yi)),H.map.depthTexture.name=V.name+".shadowMap",H.map.depthTexture.format=en;let ce=n.state.buffers.depth.getReversed();this.type===Nr?(H.map.depthTexture.compareFunction=ce?cl:ll,H.map.depthTexture.minFilter=Ot,H.map.depthTexture.magFilter=Ot):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Yt,H.map.depthTexture.magFilter=Yt)}H.camera.updateProjectionMatrix()}let pe=H.map.isWebGLCubeRenderTarget?6:1;for(let ce=0;ce<pe;ce++){if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,ce),n.clear();else{ce===0&&(n.setRenderTarget(H.map),n.clear());let me=H.getViewport(ce);o.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),z.viewport(o)}if(V.isPointLight){let me=H.camera,He=H.matrix,ze=V.distance||me.far;ze!==me.far&&(me.far=ze,me.updateProjectionMatrix()),Hr.setFromMatrixPosition(V.matrixWorld),me.position.copy(Hr),Xc.copy(me.position),Xc.add(Lx[ce]),me.up.copy(Nx[ce]),me.lookAt(Xc),me.updateMatrixWorld(),He.makeTranslation(-Hr.x,-Hr.y,-Hr.z),gf.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),H._frustum.setFromProjectionMatrix(gf,me.coordinateSystem,me.reversedDepth)}else H.updateMatrices(V);i=H.getFrustum(),E(R,F,H.camera,V,this.type)}H.isPointLightShadow!==!0&&this.type===er&&w(H,F),H.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(y,b,D)};function w(A,R){let F=t.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ei(s.x,s.y,{format:ps,type:rn})),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,F,d,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,F,m,v,null)}function S(A,R,F,y){let b=null,D=F.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)b=D;else if(b=F.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let z=b.uuid,B=R.uuid,W=c[z];W===void 0&&(W={},c[z]=W);let $=W[B];$===void 0&&($=b.clone(),W[B]=$,R.addEventListener("dispose",T)),b=$}if(b.visible=R.visible,b.wireframe=R.wireframe,y===er?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,F.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let z=n.properties.get(b);z.light=F}return b}function E(A,R,F,y,b){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===er)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,A.matrixWorld);let B=t.update(A),W=A.material;if(Array.isArray(W)){let $=B.groups;for(let V=0,H=$.length;V<H;V++){let Q=$[V],pe=W[Q.materialIndex];if(pe&&pe.visible){let ce=S(A,pe,y,b);A.onBeforeShadow(n,A,R,F,B,ce,Q),n.renderBufferDirect(F,null,B,ce,A,Q),A.onAfterShadow(n,A,R,F,B,ce,Q)}}}else if(W.visible){let $=S(A,W,y,b);A.onBeforeShadow(n,A,R,F,B,$,null),n.renderBufferDirect(F,null,B,$,A,null),A.onAfterShadow(n,A,R,F,B,$,null)}}let z=A.children;for(let B=0,W=z.length;B<W;B++)E(z[B],R,F,y,b)}function T(A){A.target.removeEventListener("dispose",T);for(let F in c){let y=c[F],b=A.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}var Ux={[pa]:ma,[_a]:va,[ga]:ya,[rs]:xa,[ma]:pa,[va]:_a,[ya]:ga,[xa]:rs};function Ox(n,t){function e(){let I=!1,ue=new wt,ne=null,_e=new wt(0,0,0,0);return{setMask:function(te){ne!==te&&!I&&(n.colorMask(te,te,te,te),ne=te)},setLocked:function(te){I=te},setClear:function(te,Z,se,Fe,mt){mt===!0&&(te*=Fe,Z*=Fe,se*=Fe),ue.set(te,Z,se,Fe),_e.equals(ue)===!1&&(n.clearColor(te,Z,se,Fe),_e.copy(ue))},reset:function(){I=!1,ne=null,_e.set(-1,0,0,0)}}}function i(){let I=!1,ue=!1,ne=null,_e=null,te=null;return{setReversed:function(Z){if(ue!==Z){let se=t.get("EXT_clip_control");Z?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),ue=Z;let Fe=te;te=null,this.setClear(Fe)}},getReversed:function(){return ue},setTest:function(Z){Z?ee(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function(Z){ne!==Z&&!I&&(n.depthMask(Z),ne=Z)},setFunc:function(Z){if(ue&&(Z=Ux[Z]),_e!==Z){switch(Z){case pa:n.depthFunc(n.NEVER);break;case ma:n.depthFunc(n.ALWAYS);break;case _a:n.depthFunc(n.LESS);break;case rs:n.depthFunc(n.LEQUAL);break;case ga:n.depthFunc(n.EQUAL);break;case xa:n.depthFunc(n.GEQUAL);break;case va:n.depthFunc(n.GREATER);break;case ya:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=Z}},setLocked:function(Z){I=Z},setClear:function(Z){te!==Z&&(ue&&(Z=1-Z),n.clearDepth(Z),te=Z)},reset:function(){I=!1,ne=null,_e=null,te=null,ue=!1}}}function s(){let I=!1,ue=null,ne=null,_e=null,te=null,Z=null,se=null,Fe=null,mt=null;return{setTest:function(at){I||(at?ee(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(at){ue!==at&&!I&&(n.stencilMask(at),ue=at)},setFunc:function(at,Ji,ln){(ne!==at||_e!==Ji||te!==ln)&&(n.stencilFunc(at,Ji,ln),ne=at,_e=Ji,te=ln)},setOp:function(at,Ji,ln){(Z!==at||se!==Ji||Fe!==ln)&&(n.stencilOp(at,Ji,ln),Z=at,se=Ji,Fe=ln)},setLocked:function(at){I=at},setClear:function(at){mt!==at&&(n.clearStencil(at),mt=at)},reset:function(){I=!1,ue=null,ne=null,_e=null,te=null,Z=null,se=null,Fe=null,mt=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,m=[],g=null,v=!1,p=null,f=null,w=null,S=null,E=null,T=null,A=null,R=new nt(0,0,0),F=0,y=!1,b=null,D=null,z=null,B=null,W=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,H=0,Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Q)[1]),V=H>=1):Q.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),V=H>=2);let pe=null,ce={},me=n.getParameter(n.SCISSOR_BOX),He=n.getParameter(n.VIEWPORT),ze=new wt().fromArray(me),yt=new wt().fromArray(He);function gt(I,ue,ne,_e){let te=new Uint8Array(4),Z=n.createTexture();n.bindTexture(I,Z),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let se=0;se<ne;se++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,te):n.texImage2D(ue+se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,te);return Z}let q={};q[n.TEXTURE_2D]=gt(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=gt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=gt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=gt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(n.DEPTH_TEST),o.setFunc(rs),Ve(!1),At(pc),ee(n.CULL_FACE),ot(nn);function ee(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function ve(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function ke(I,ue){return u[I]!==ue?(n.bindFramebuffer(I,ue),u[I]=ue,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ue),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function Me(I,ue){let ne=m,_e=!1;if(I){ne=d.get(ue),ne===void 0&&(ne=[],d.set(ue,ne));let te=I.textures;if(ne.length!==te.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let Z=0,se=te.length;Z<se;Z++)ne[Z]=n.COLOR_ATTACHMENT0+Z;ne.length=te.length,_e=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,_e=!0);_e&&n.drawBuffers(ne)}function tt(I){return g!==I?(n.useProgram(I),g=I,!0):!1}let zt={[Ln]:n.FUNC_ADD,[_u]:n.FUNC_SUBTRACT,[gu]:n.FUNC_REVERSE_SUBTRACT};zt[xu]=n.MIN,zt[vu]=n.MAX;let Qe={[yu]:n.ZERO,[bu]:n.ONE,[Mu]:n.SRC_COLOR,[Xo]:n.SRC_ALPHA,[Cu]:n.SRC_ALPHA_SATURATE,[Tu]:n.DST_COLOR,[wu]:n.DST_ALPHA,[Su]:n.ONE_MINUS_SRC_COLOR,[qo]:n.ONE_MINUS_SRC_ALPHA,[Au]:n.ONE_MINUS_DST_COLOR,[Eu]:n.ONE_MINUS_DST_ALPHA,[Ru]:n.CONSTANT_COLOR,[Iu]:n.ONE_MINUS_CONSTANT_COLOR,[Pu]:n.CONSTANT_ALPHA,[Du]:n.ONE_MINUS_CONSTANT_ALPHA};function ot(I,ue,ne,_e,te,Z,se,Fe,mt,at){if(I===nn){v===!0&&(ve(n.BLEND),v=!1);return}if(v===!1&&(ee(n.BLEND),v=!0),I!==mu){if(I!==p||at!==y){if((f!==Ln||E!==Ln)&&(n.blendEquation(n.FUNC_ADD),f=Ln,E=Ln),at)switch(I){case ss:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mc:n.blendFunc(n.ONE,n.ONE);break;case _c:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Pe("WebGLState: Invalid blending: ",I);break}else switch(I){case ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case _c:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gc:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",I);break}w=null,S=null,T=null,A=null,R.set(0,0,0),F=0,p=I,y=at}return}te=te||ue,Z=Z||ne,se=se||_e,(ue!==f||te!==E)&&(n.blendEquationSeparate(zt[ue],zt[te]),f=ue,E=te),(ne!==w||_e!==S||Z!==T||se!==A)&&(n.blendFuncSeparate(Qe[ne],Qe[_e],Qe[Z],Qe[se]),w=ne,S=_e,T=Z,A=se),(Fe.equals(R)===!1||mt!==F)&&(n.blendColor(Fe.r,Fe.g,Fe.b,mt),R.copy(Fe),F=mt),p=I,y=!1}function ut(I,ue){I.side===Ni?ve(n.CULL_FACE):ee(n.CULL_FACE);let ne=I.side===li;ue&&(ne=!ne),Ve(ne),I.blending===ss&&I.transparent===!1?ot(nn):ot(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);let _e=I.stencilWrite;a.setTest(_e),_e&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ct(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(I){b!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),b=I)}function At(I){I!==uu?(ee(n.CULL_FACE),I!==D&&(I===pc?n.cullFace(n.BACK):I===fu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),D=I}function C(I){I!==z&&(V&&n.lineWidth(I),z=I)}function Ct(I,ue,ne){I?(ee(n.POLYGON_OFFSET_FILL),(B!==ue||W!==ne)&&(n.polygonOffset(ue,ne),B=ue,W=ne)):ve(n.POLYGON_OFFSET_FILL)}function st(I){I?ee(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)}function pt(I){I===void 0&&(I=n.TEXTURE0+$-1),pe!==I&&(n.activeTexture(I),pe=I)}function we(I,ue,ne){ne===void 0&&(pe===null?ne=n.TEXTURE0+$-1:ne=pe);let _e=ce[ne];_e===void 0&&(_e={type:void 0,texture:void 0},ce[ne]=_e),(_e.type!==I||_e.texture!==ue)&&(pe!==ne&&(n.activeTexture(ne),pe=ne),n.bindTexture(I,ue||q[I]),_e.type=I,_e.texture=ue)}function M(){let I=ce[pe];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(I){Pe("WebGLState:",I)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(I){Pe("WebGLState:",I)}}function X(){try{n.texSubImage2D(...arguments)}catch(I){Pe("WebGLState:",I)}}function K(){try{n.texSubImage3D(...arguments)}catch(I){Pe("WebGLState:",I)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(I){Pe("WebGLState:",I)}}function Te(){try{n.compressedTexSubImage3D(...arguments)}catch(I){Pe("WebGLState:",I)}}function re(){try{n.texStorage2D(...arguments)}catch(I){Pe("WebGLState:",I)}}function Se(){try{n.texStorage3D(...arguments)}catch(I){Pe("WebGLState:",I)}}function Le(){try{n.texImage2D(...arguments)}catch(I){Pe("WebGLState:",I)}}function ie(){try{n.texImage3D(...arguments)}catch(I){Pe("WebGLState:",I)}}function ae(I){ze.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),ze.copy(I))}function be(I){yt.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),yt.copy(I))}function Ee(I,ue){let ne=c.get(ue);ne===void 0&&(ne=new WeakMap,c.set(ue,ne));let _e=ne.get(I);_e===void 0&&(_e=n.getUniformBlockIndex(ue,I.name),ne.set(I,_e))}function oe(I,ue){let _e=c.get(ue).get(I);l.get(ue)!==_e&&(n.uniformBlockBinding(ue,_e,I.__bindingPointIndex),l.set(ue,_e))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},pe=null,ce={},u={},d=new WeakMap,m=[],g=null,v=!1,p=null,f=null,w=null,S=null,E=null,T=null,A=null,R=new nt(0,0,0),F=0,y=!1,b=null,D=null,z=null,B=null,W=null,ze.set(0,0,n.canvas.width,n.canvas.height),yt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ee,disable:ve,bindFramebuffer:ke,drawBuffers:Me,useProgram:tt,setBlending:ot,setMaterial:ut,setFlipSided:Ve,setCullFace:At,setLineWidth:C,setPolygonOffset:Ct,setScissorTest:st,activeTexture:pt,bindTexture:we,unbindTexture:M,compressedTexImage2D:_,compressedTexImage3D:P,texImage2D:Le,texImage3D:ie,updateUBOMapping:Ee,uniformBlockBinding:oe,texStorage2D:re,texStorage3D:Se,texSubImage2D:X,texSubImage3D:K,compressedTexSubImage2D:G,compressedTexSubImage3D:Te,scissor:ae,viewport:be,reset:Ge}}function kx(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,_){return m?new OffscreenCanvas(M,_):Mr("canvas")}function v(M,_,P){let X=1,K=we(M);if((K.width>P||K.height>P)&&(X=P/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let G=Math.floor(X*K.width),Te=Math.floor(X*K.height);u===void 0&&(u=g(G,Te));let re=_?g(G,Te):u;return re.width=G,re.height=Te,re.getContext("2d").drawImage(M,0,0,G,Te),Ne("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+G+"x"+Te+")."),re}else return"data"in M&&Ne("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),M;return M}function p(M){return M.generateMipmaps}function f(M){n.generateMipmap(M)}function w(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(M,_,P,X,K=!1){if(M!==null){if(n[M]!==void 0)return n[M];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let G=_;if(_===n.RED&&(P===n.FLOAT&&(G=n.R32F),P===n.HALF_FLOAT&&(G=n.R16F),P===n.UNSIGNED_BYTE&&(G=n.R8)),_===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(G=n.R8UI),P===n.UNSIGNED_SHORT&&(G=n.R16UI),P===n.UNSIGNED_INT&&(G=n.R32UI),P===n.BYTE&&(G=n.R8I),P===n.SHORT&&(G=n.R16I),P===n.INT&&(G=n.R32I)),_===n.RG&&(P===n.FLOAT&&(G=n.RG32F),P===n.HALF_FLOAT&&(G=n.RG16F),P===n.UNSIGNED_BYTE&&(G=n.RG8)),_===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(G=n.RG8UI),P===n.UNSIGNED_SHORT&&(G=n.RG16UI),P===n.UNSIGNED_INT&&(G=n.RG32UI),P===n.BYTE&&(G=n.RG8I),P===n.SHORT&&(G=n.RG16I),P===n.INT&&(G=n.RG32I)),_===n.RGB_INTEGER&&(P===n.UNSIGNED_BYTE&&(G=n.RGB8UI),P===n.UNSIGNED_SHORT&&(G=n.RGB16UI),P===n.UNSIGNED_INT&&(G=n.RGB32UI),P===n.BYTE&&(G=n.RGB8I),P===n.SHORT&&(G=n.RGB16I),P===n.INT&&(G=n.RGB32I)),_===n.RGBA_INTEGER&&(P===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),P===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),P===n.UNSIGNED_INT&&(G=n.RGBA32UI),P===n.BYTE&&(G=n.RGBA8I),P===n.SHORT&&(G=n.RGBA16I),P===n.INT&&(G=n.RGBA32I)),_===n.RGB&&(P===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),P===n.UNSIGNED_INT_10F_11F_11F_REV&&(G=n.R11F_G11F_B10F)),_===n.RGBA){let Te=K?yr:Ke.getTransfer(X);P===n.FLOAT&&(G=n.RGBA32F),P===n.HALF_FLOAT&&(G=n.RGBA16F),P===n.UNSIGNED_BYTE&&(G=Te===rt?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function E(M,_){let P;return M?_===null||_===Yi||_===ir?P=n.DEPTH24_STENCIL8:_===$i?P=n.DEPTH32F_STENCIL8:_===tr&&(P=n.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Yi||_===ir?P=n.DEPTH_COMPONENT24:_===$i?P=n.DEPTH_COMPONENT32F:_===tr&&(P=n.DEPTH_COMPONENT16),P}function T(M,_){return p(M)===!0||M.isFramebufferTexture&&M.minFilter!==Yt&&M.minFilter!==Ot?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function A(M){let _=M.target;_.removeEventListener("dispose",A),F(_),_.isVideoTexture&&h.delete(_)}function R(M){let _=M.target;_.removeEventListener("dispose",R),b(_)}function F(M){let _=i.get(M);if(_.__webglInit===void 0)return;let P=M.source,X=d.get(P);if(X){let K=X[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&y(M),Object.keys(X).length===0&&d.delete(P)}i.remove(M)}function y(M){let _=i.get(M);n.deleteTexture(_.__webglTexture);let P=M.source,X=d.get(P);delete X[_.__cacheKey],o.memory.textures--}function b(M){let _=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let K=0;K<_.__webglFramebuffer[X].length;K++)n.deleteFramebuffer(_.__webglFramebuffer[X][K]);else n.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)n.deleteFramebuffer(_.__webglFramebuffer[X]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let P=M.textures;for(let X=0,K=P.length;X<K;X++){let G=i.get(P[X]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(P[X])}i.remove(M)}let D=0;function z(){D=0}function B(){let M=D;return M>=s.maxTextures&&Ne("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),D+=1,M}function W(M){let _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function $(M,_){let P=i.get(M);if(M.isVideoTexture&&st(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&P.__version!==M.version){let X=M.image;if(X===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{q(P,M,_);return}}else M.isExternalTexture&&(P.__webglTexture=M.sourceTexture?M.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+_)}function V(M,_){let P=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&P.__version!==M.version){q(P,M,_);return}else M.isExternalTexture&&(P.__webglTexture=M.sourceTexture?M.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+_)}function H(M,_){let P=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&P.__version!==M.version){q(P,M,_);return}e.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+_)}function Q(M,_){let P=i.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&P.__version!==M.version){ee(P,M,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+_)}let pe={[Yo]:n.REPEAT,[Qi]:n.CLAMP_TO_EDGE,[$o]:n.MIRRORED_REPEAT},ce={[Yt]:n.NEAREST,[Fu]:n.NEAREST_MIPMAP_NEAREST,[Ur]:n.NEAREST_MIPMAP_LINEAR,[Ot]:n.LINEAR,[Sa]:n.LINEAR_MIPMAP_NEAREST,[sn]:n.LINEAR_MIPMAP_LINEAR},me={[Bu]:n.NEVER,[Wu]:n.ALWAYS,[zu]:n.LESS,[ll]:n.LEQUAL,[Vu]:n.EQUAL,[cl]:n.GEQUAL,[Gu]:n.GREATER,[Hu]:n.NOTEQUAL};function He(M,_){if(_.type===$i&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ot||_.magFilter===Sa||_.magFilter===Ur||_.magFilter===sn||_.minFilter===Ot||_.minFilter===Sa||_.minFilter===Ur||_.minFilter===sn)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,pe[_.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,pe[_.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,pe[_.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,ce[_.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,ce[_.minFilter]),_.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,me[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Yt||_.minFilter!==Ur&&_.minFilter!==sn||_.type===$i&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");n.texParameterf(M,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ze(M,_){let P=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",A));let X=_.source,K=d.get(X);K===void 0&&(K={},d.set(X,K));let G=W(_);if(G!==M.__cacheKey){K[G]===void 0&&(K[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,P=!0),K[G].usedTimes++;let Te=K[M.__cacheKey];Te!==void 0&&(K[M.__cacheKey].usedTimes--,Te.usedTimes===0&&y(_)),M.__cacheKey=G,M.__webglTexture=K[G].texture}return P}function yt(M,_,P){return Math.floor(Math.floor(M/P)/_)}function gt(M,_,P,X){let G=M.updateRanges;if(G.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,P,X,_.data);else{G.sort((ie,ae)=>ie.start-ae.start);let Te=0;for(let ie=1;ie<G.length;ie++){let ae=G[Te],be=G[ie],Ee=ae.start+ae.count,oe=yt(be.start,_.width,4),Ge=yt(ae.start,_.width,4);be.start<=Ee+1&&oe===Ge&&yt(be.start+be.count-1,_.width,4)===oe?ae.count=Math.max(ae.count,be.start+be.count-ae.start):(++Te,G[Te]=be)}G.length=Te+1;let re=n.getParameter(n.UNPACK_ROW_LENGTH),Se=n.getParameter(n.UNPACK_SKIP_PIXELS),Le=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let ie=0,ae=G.length;ie<ae;ie++){let be=G[ie],Ee=Math.floor(be.start/4),oe=Math.ceil(be.count/4),Ge=Ee%_.width,I=Math.floor(Ee/_.width),ue=oe,ne=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),e.texSubImage2D(n.TEXTURE_2D,0,Ge,I,ue,ne,P,X,_.data)}M.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,re),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Se),n.pixelStorei(n.UNPACK_SKIP_ROWS,Le)}}function q(M,_,P){let X=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=n.TEXTURE_3D);let K=ze(M,_),G=_.source;e.bindTexture(X,M.__webglTexture,n.TEXTURE0+P);let Te=i.get(G);if(G.version!==Te.__version||K===!0){e.activeTexture(n.TEXTURE0+P);let re=Ke.getPrimaries(Ke.workingColorSpace),Se=_.colorSpace===yn?null:Ke.getPrimaries(_.colorSpace),Le=_.colorSpace===yn||re===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ie=v(_.image,!1,s.maxTextureSize);ie=pt(_,ie);let ae=r.convert(_.format,_.colorSpace),be=r.convert(_.type),Ee=S(_.internalFormat,ae,be,_.colorSpace,_.isVideoTexture);He(X,_);let oe,Ge=_.mipmaps,I=_.isVideoTexture!==!0,ue=Te.__version===void 0||K===!0,ne=G.dataReady,_e=T(_,ie);if(_.isDepthTexture)Ee=E(_.format===zn,_.type),ue&&(I?e.texStorage2D(n.TEXTURE_2D,1,Ee,ie.width,ie.height):e.texImage2D(n.TEXTURE_2D,0,Ee,ie.width,ie.height,0,ae,be,null));else if(_.isDataTexture)if(Ge.length>0){I&&ue&&e.texStorage2D(n.TEXTURE_2D,_e,Ee,Ge[0].width,Ge[0].height);for(let te=0,Z=Ge.length;te<Z;te++)oe=Ge[te],I?ne&&e.texSubImage2D(n.TEXTURE_2D,te,0,0,oe.width,oe.height,ae,be,oe.data):e.texImage2D(n.TEXTURE_2D,te,Ee,oe.width,oe.height,0,ae,be,oe.data);_.generateMipmaps=!1}else I?(ue&&e.texStorage2D(n.TEXTURE_2D,_e,Ee,ie.width,ie.height),ne&&gt(_,ie,ae,be)):e.texImage2D(n.TEXTURE_2D,0,Ee,ie.width,ie.height,0,ae,be,ie.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){I&&ue&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_e,Ee,Ge[0].width,Ge[0].height,ie.depth);for(let te=0,Z=Ge.length;te<Z;te++)if(oe=Ge[te],_.format!==Fi)if(ae!==null)if(I){if(ne)if(_.layerUpdates.size>0){let se=Bc(oe.width,oe.height,_.format,_.type);for(let Fe of _.layerUpdates){let mt=oe.data.subarray(Fe*se/oe.data.BYTES_PER_ELEMENT,(Fe+1)*se/oe.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,Fe,oe.width,oe.height,1,ae,mt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,oe.width,oe.height,ie.depth,ae,oe.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Ee,oe.width,oe.height,ie.depth,0,oe.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ne&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,oe.width,oe.height,ie.depth,ae,be,oe.data):e.texImage3D(n.TEXTURE_2D_ARRAY,te,Ee,oe.width,oe.height,ie.depth,0,ae,be,oe.data)}else{I&&ue&&e.texStorage2D(n.TEXTURE_2D,_e,Ee,Ge[0].width,Ge[0].height);for(let te=0,Z=Ge.length;te<Z;te++)oe=Ge[te],_.format!==Fi?ae!==null?I?ne&&e.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,oe.width,oe.height,ae,oe.data):e.compressedTexImage2D(n.TEXTURE_2D,te,Ee,oe.width,oe.height,0,oe.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ne&&e.texSubImage2D(n.TEXTURE_2D,te,0,0,oe.width,oe.height,ae,be,oe.data):e.texImage2D(n.TEXTURE_2D,te,Ee,oe.width,oe.height,0,ae,be,oe.data)}else if(_.isDataArrayTexture)if(I){if(ue&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_e,Ee,ie.width,ie.height,ie.depth),ne)if(_.layerUpdates.size>0){let te=Bc(ie.width,ie.height,_.format,_.type);for(let Z of _.layerUpdates){let se=ie.data.subarray(Z*te/ie.data.BYTES_PER_ELEMENT,(Z+1)*te/ie.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,ie.width,ie.height,1,ae,be,se)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ae,be,ie.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,ie.width,ie.height,ie.depth,0,ae,be,ie.data);else if(_.isData3DTexture)I?(ue&&e.texStorage3D(n.TEXTURE_3D,_e,Ee,ie.width,ie.height,ie.depth),ne&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ae,be,ie.data)):e.texImage3D(n.TEXTURE_3D,0,Ee,ie.width,ie.height,ie.depth,0,ae,be,ie.data);else if(_.isFramebufferTexture){if(ue)if(I)e.texStorage2D(n.TEXTURE_2D,_e,Ee,ie.width,ie.height);else{let te=ie.width,Z=ie.height;for(let se=0;se<_e;se++)e.texImage2D(n.TEXTURE_2D,se,Ee,te,Z,0,ae,be,null),te>>=1,Z>>=1}}else if(Ge.length>0){if(I&&ue){let te=we(Ge[0]);e.texStorage2D(n.TEXTURE_2D,_e,Ee,te.width,te.height)}for(let te=0,Z=Ge.length;te<Z;te++)oe=Ge[te],I?ne&&e.texSubImage2D(n.TEXTURE_2D,te,0,0,ae,be,oe):e.texImage2D(n.TEXTURE_2D,te,Ee,ae,be,oe);_.generateMipmaps=!1}else if(I){if(ue){let te=we(ie);e.texStorage2D(n.TEXTURE_2D,_e,Ee,te.width,te.height)}ne&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ae,be,ie)}else e.texImage2D(n.TEXTURE_2D,0,Ee,ae,be,ie);p(_)&&f(X),Te.__version=G.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function ee(M,_,P){if(_.image.length!==6)return;let X=ze(M,_),K=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+P);let G=i.get(K);if(K.version!==G.__version||X===!0){e.activeTexture(n.TEXTURE0+P);let Te=Ke.getPrimaries(Ke.workingColorSpace),re=_.colorSpace===yn?null:Ke.getPrimaries(_.colorSpace),Se=_.colorSpace===yn||Te===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let Le=_.isCompressedTexture||_.image[0].isCompressedTexture,ie=_.image[0]&&_.image[0].isDataTexture,ae=[];for(let Z=0;Z<6;Z++)!Le&&!ie?ae[Z]=v(_.image[Z],!0,s.maxCubemapSize):ae[Z]=ie?_.image[Z].image:_.image[Z],ae[Z]=pt(_,ae[Z]);let be=ae[0],Ee=r.convert(_.format,_.colorSpace),oe=r.convert(_.type),Ge=S(_.internalFormat,Ee,oe,_.colorSpace),I=_.isVideoTexture!==!0,ue=G.__version===void 0||X===!0,ne=K.dataReady,_e=T(_,be);He(n.TEXTURE_CUBE_MAP,_);let te;if(Le){I&&ue&&e.texStorage2D(n.TEXTURE_CUBE_MAP,_e,Ge,be.width,be.height);for(let Z=0;Z<6;Z++){te=ae[Z].mipmaps;for(let se=0;se<te.length;se++){let Fe=te[se];_.format!==Fi?Ee!==null?I?ne&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,0,0,Fe.width,Fe.height,Ee,Fe.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,Ge,Fe.width,Fe.height,0,Fe.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ne&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,0,0,Fe.width,Fe.height,Ee,oe,Fe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,Ge,Fe.width,Fe.height,0,Ee,oe,Fe.data)}}}else{if(te=_.mipmaps,I&&ue){te.length>0&&_e++;let Z=we(ae[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,_e,Ge,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ie){I?ne&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ae[Z].width,ae[Z].height,Ee,oe,ae[Z].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ge,ae[Z].width,ae[Z].height,0,Ee,oe,ae[Z].data);for(let se=0;se<te.length;se++){let mt=te[se].image[Z].image;I?ne&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,0,0,mt.width,mt.height,Ee,oe,mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,Ge,mt.width,mt.height,0,Ee,oe,mt.data)}}else{I?ne&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ee,oe,ae[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ge,Ee,oe,ae[Z]);for(let se=0;se<te.length;se++){let Fe=te[se];I?ne&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,0,0,Ee,oe,Fe.image[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,Ge,Ee,oe,Fe.image[Z])}}}p(_)&&f(n.TEXTURE_CUBE_MAP),G.__version=K.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function ve(M,_,P,X,K,G){let Te=r.convert(P.format,P.colorSpace),re=r.convert(P.type),Se=S(P.internalFormat,Te,re,P.colorSpace),Le=i.get(_),ie=i.get(P);if(ie.__renderTarget=_,!Le.__hasExternalTextures){let ae=Math.max(1,_.width>>G),be=Math.max(1,_.height>>G);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,G,Se,ae,be,_.depth,0,Te,re,null):e.texImage2D(K,G,Se,ae,be,0,Te,re,null)}e.bindFramebuffer(n.FRAMEBUFFER,M),Ct(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,K,ie.__webglTexture,0,C(_)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,K,ie.__webglTexture,G),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(M,_,P){if(n.bindRenderbuffer(n.RENDERBUFFER,M),_.depthBuffer){let X=_.depthTexture,K=X&&X.isDepthTexture?X.type:null,G=E(_.stencilBuffer,K),Te=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ct(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C(_),G,_.width,_.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,C(_),G,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,G,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,M)}else{let X=_.textures;for(let K=0;K<X.length;K++){let G=X[K],Te=r.convert(G.format,G.colorSpace),re=r.convert(G.type),Se=S(G.internalFormat,Te,re,G.colorSpace);Ct(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C(_),Se,_.width,_.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,C(_),Se,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Se,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Me(M,_,P){let X=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=i.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),He(n.TEXTURE_CUBE_MAP,_.depthTexture);let Le=r.convert(_.depthTexture.format),ie=r.convert(_.depthTexture.type),ae;_.depthTexture.format===en?ae=n.DEPTH_COMPONENT24:_.depthTexture.format===zn&&(ae=n.DEPTH24_STENCIL8);for(let be=0;be<6;be++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ae,_.width,_.height,0,Le,ie,null)}}else $(_.depthTexture,0);let G=K.__webglTexture,Te=C(_),re=X?n.TEXTURE_CUBE_MAP_POSITIVE_X+P:n.TEXTURE_2D,Se=_.depthTexture.format===zn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===en)Ct(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Se,re,G,0,Te):n.framebufferTexture2D(n.FRAMEBUFFER,Se,re,G,0);else if(_.depthTexture.format===zn)Ct(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Se,re,G,0,Te):n.framebufferTexture2D(n.FRAMEBUFFER,Se,re,G,0);else throw new Error("Unknown depthTexture format")}function tt(M){let _=i.get(M),P=M.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==M.depthTexture){let X=M.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){let K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=X}if(M.depthTexture&&!_.__autoAllocateDepthBuffer)if(P)for(let X=0;X<6;X++)Me(_.__webglFramebuffer[X],M,X);else{let X=M.texture.mipmaps;X&&X.length>0?Me(_.__webglFramebuffer[0],M,0):Me(_.__webglFramebuffer,M,0)}else if(P){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=n.createRenderbuffer(),ke(_.__webglDepthbuffer[X],M,!1);else{let K=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,G)}}else{let X=M.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),ke(_.__webglDepthbuffer,M,!1);else{let K=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,G)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(M,_,P){let X=i.get(M);_!==void 0&&ve(X.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&tt(M)}function Qe(M){let _=M.texture,P=i.get(M),X=i.get(_);M.addEventListener("dispose",R);let K=M.textures,G=M.isWebGLCubeRenderTarget===!0,Te=K.length>1;if(Te||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=_.version,o.memory.textures++),G){P.__webglFramebuffer=[];for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer[re]=[];for(let Se=0;Se<_.mipmaps.length;Se++)P.__webglFramebuffer[re][Se]=n.createFramebuffer()}else P.__webglFramebuffer[re]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer=[];for(let re=0;re<_.mipmaps.length;re++)P.__webglFramebuffer[re]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(Te)for(let re=0,Se=K.length;re<Se;re++){let Le=i.get(K[re]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&Ct(M)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let re=0;re<K.length;re++){let Se=K[re];P.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[re]);let Le=r.convert(Se.format,Se.colorSpace),ie=r.convert(Se.type),ae=S(Se.internalFormat,Le,ie,Se.colorSpace,M.isXRRenderTarget===!0),be=C(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,ae,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,P.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),ke(P.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),He(n.TEXTURE_CUBE_MAP,_);for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0)for(let Se=0;Se<_.mipmaps.length;Se++)ve(P.__webglFramebuffer[re][Se],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Se);else ve(P.__webglFramebuffer[re],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);p(_)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Te){for(let re=0,Se=K.length;re<Se;re++){let Le=K[re],ie=i.get(Le),ae=n.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ae=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ae,ie.__webglTexture),He(ae,Le),ve(P.__webglFramebuffer,M,Le,n.COLOR_ATTACHMENT0+re,ae,0),p(Le)&&f(ae)}e.unbindTexture()}else{let re=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(re=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(re,X.__webglTexture),He(re,_),_.mipmaps&&_.mipmaps.length>0)for(let Se=0;Se<_.mipmaps.length;Se++)ve(P.__webglFramebuffer[Se],M,_,n.COLOR_ATTACHMENT0,re,Se);else ve(P.__webglFramebuffer,M,_,n.COLOR_ATTACHMENT0,re,0);p(_)&&f(re),e.unbindTexture()}M.depthBuffer&&tt(M)}function ot(M){let _=M.textures;for(let P=0,X=_.length;P<X;P++){let K=_[P];if(p(K)){let G=w(M),Te=i.get(K).__webglTexture;e.bindTexture(G,Te),f(G),e.unbindTexture()}}}let ut=[],Ve=[];function At(M){if(M.samples>0){if(Ct(M)===!1){let _=M.textures,P=M.width,X=M.height,K=n.COLOR_BUFFER_BIT,G=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(M),re=_.length>1;if(re)for(let Le=0;Le<_.length;Le++)e.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);let Se=M.texture.mipmaps;Se&&Se.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Le=0;Le<_.length;Le++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Le]);let ie=i.get(_[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,P,X,0,0,P,X,K,n.NEAREST),l===!0&&(ut.length=0,Ve.length=0,ut.push(n.COLOR_ATTACHMENT0+Le),M.depthBuffer&&M.resolveDepthBuffer===!1&&(ut.push(G),Ve.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ve)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let Le=0;Le<_.length;Le++){e.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Le]);let ie=i.get(_[Le]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,ie,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){let _=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function C(M){return Math.min(s.maxSamples,M.samples)}function Ct(M){let _=i.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function st(M){let _=o.render.frame;h.get(M)!==_&&(h.set(M,_),M.update())}function pt(M,_){let P=M.colorSpace,X=M.format,K=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||P!==os&&P!==yn&&(Ke.getTransfer(P)===rt?(X!==Fi||K!==Ci)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",P)),_}function we(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.setTexture2D=$,this.setTexture2DArray=V,this.setTexture3D=H,this.setTextureCube=Q,this.rebindTextures=zt,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Bx(n,t){function e(i,s=yn){let r,o=Ke.getTransfer(s);if(i===Ci)return n.UNSIGNED_BYTE;if(i===Ea)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ta)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Cc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Rc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Tc)return n.BYTE;if(i===Ac)return n.SHORT;if(i===tr)return n.UNSIGNED_SHORT;if(i===wa)return n.INT;if(i===Yi)return n.UNSIGNED_INT;if(i===$i)return n.FLOAT;if(i===rn)return n.HALF_FLOAT;if(i===Ic)return n.ALPHA;if(i===Pc)return n.RGB;if(i===Fi)return n.RGBA;if(i===en)return n.DEPTH_COMPONENT;if(i===zn)return n.DEPTH_STENCIL;if(i===Dc)return n.RED;if(i===Aa)return n.RED_INTEGER;if(i===ps)return n.RG;if(i===Ca)return n.RG_INTEGER;if(i===Ra)return n.RGBA_INTEGER;if(i===Or||i===kr||i===Br||i===zr)if(o===rt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ia||i===Pa||i===Da||i===La)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===La)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Na||i===Fa||i===Ua||i===Oa||i===ka||i===Ba||i===za)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Na||i===Fa)return o===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ua)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Oa)return r.COMPRESSED_R11_EAC;if(i===ka)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ba)return r.COMPRESSED_RG11_EAC;if(i===za)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Va||i===Ga||i===Ha||i===Wa||i===Xa||i===qa||i===Ya||i===$a||i===Za||i===Ja||i===Ka||i===ja||i===Qa||i===el)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Va)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ga)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ha)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ya)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$a)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Za)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ja)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ka)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ja)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===el)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===tl||i===il||i===nl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===tl)return o===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sl||i===rl||i===ol||i===al)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===sl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===rl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ol)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ir?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Qc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Dr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ti({vertexShader:zx,fragmentShader:Vx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _i(new hs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},eh=class extends vn{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null,v=typeof XRWebGLBinding<"u",p=new Qc,f={},w=e.getContextAttributes(),S=null,E=null,T=[],A=[],R=new je,F=null,y=new pi;y.viewport=new wt;let b=new pi;b.viewport=new wt;let D=[y,b],z=new fa,B=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=T[q];return ee===void 0&&(ee=new Qs,T[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=T[q];return ee===void 0&&(ee=new Qs,T[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=T[q];return ee===void 0&&(ee=new Qs,T[q]=ee),ee.getHandSpace()};function $(q){let ee=A.indexOf(q.inputSource);if(ee===-1)return;let ve=T[ee];ve!==void 0&&(ve.update(q.inputSource,q.frame,c||o),ve.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",H);for(let q=0;q<T.length;q++){let ee=A[q];ee!==null&&(A[q]=null,T[q].disconnect(ee))}B=null,W=null,p.reset();for(let q in f)delete f[q];t.setRenderTarget(S),m=null,d=null,u=null,s=null,E=null,gt.stop(),i.isPresenting=!1,t.setPixelRatio(F),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",V),s.addEventListener("inputsourceschange",H),w.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,ke=null,Me=null;w.depth&&(Me=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ve=w.stencil?zn:en,ke=w.stencil?ir:Yi);let tt={colorFormat:e.RGBA8,depthFormat:Me,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(tt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Ei(d.textureWidth,d.textureHeight,{format:Fi,type:Ci,depthTexture:new Fn(d.textureWidth,d.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ve={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,ve),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Ei(m.framebufferWidth,m.framebufferHeight,{format:Fi,type:Ci,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),gt.setContext(s),gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function H(q){for(let ee=0;ee<q.removed.length;ee++){let ve=q.removed[ee],ke=A.indexOf(ve);ke>=0&&(A[ke]=null,T[ke].disconnect(ve))}for(let ee=0;ee<q.added.length;ee++){let ve=q.added[ee],ke=A.indexOf(ve);if(ke===-1){for(let tt=0;tt<T.length;tt++)if(tt>=A.length){A.push(ve),ke=tt;break}else if(A[tt]===null){A[tt]=ve,ke=tt;break}if(ke===-1)break}let Me=T[ke];Me&&Me.connect(ve)}}let Q=new U,pe=new U;function ce(q,ee,ve){Q.setFromMatrixPosition(ee.matrixWorld),pe.setFromMatrixPosition(ve.matrixWorld);let ke=Q.distanceTo(pe),Me=ee.projectionMatrix.elements,tt=ve.projectionMatrix.elements,zt=Me[14]/(Me[10]-1),Qe=Me[14]/(Me[10]+1),ot=(Me[9]+1)/Me[5],ut=(Me[9]-1)/Me[5],Ve=(Me[8]-1)/Me[0],At=(tt[8]+1)/tt[0],C=zt*Ve,Ct=zt*At,st=ke/(-Ve+At),pt=st*-Ve;if(ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(pt),q.translateZ(st),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Me[10]===-1)q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let we=zt+st,M=Qe+st,_=C-pt,P=Ct+(ke-pt),X=ot*Qe/M*we,K=ut*Qe/M*we;q.projectionMatrix.makePerspective(_,P,X,K,we,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function me(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ee=q.near,ve=q.far;p.texture!==null&&(p.depthNear>0&&(ee=p.depthNear),p.depthFar>0&&(ve=p.depthFar)),z.near=b.near=y.near=ee,z.far=b.far=y.far=ve,(B!==z.near||W!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),B=z.near,W=z.far),z.layers.mask=q.layers.mask|6,y.layers.mask=z.layers.mask&3,b.layers.mask=z.layers.mask&5;let ke=q.parent,Me=z.cameras;me(z,ke);for(let tt=0;tt<Me.length;tt++)me(Me[tt],ke);Me.length===2?ce(z,y,b):z.projectionMatrix.copy(y.projectionMatrix),He(q,z,ke)};function He(q,ee,ve){ve===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(ve.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Jo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(q){return f[q]};let ze=null;function yt(q,ee){if(h=ee.getViewerPose(c||o),g=ee,h!==null){let ve=h.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let ke=!1;ve.length!==z.cameras.length&&(z.cameras.length=0,ke=!0);for(let Qe=0;Qe<ve.length;Qe++){let ot=ve[Qe],ut=null;if(m!==null)ut=m.getViewport(ot);else{let At=u.getViewSubImage(d,ot);ut=At.viewport,Qe===0&&(t.setRenderTargetTextures(E,At.colorTexture,At.depthStencilTexture),t.setRenderTarget(E))}let Ve=D[Qe];Ve===void 0&&(Ve=new pi,Ve.layers.enable(Qe),Ve.viewport=new wt,D[Qe]=Ve),Ve.matrix.fromArray(ot.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(ot.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(ut.x,ut.y,ut.width,ut.height),Qe===0&&(z.matrix.copy(Ve.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),ke===!0&&z.cameras.push(Ve)}let Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();let Qe=u.getDepthInformation(ve[0]);Qe&&Qe.isValid&&Qe.texture&&p.init(Qe,s.renderState)}if(Me&&Me.includes("camera-access")&&v){t.state.unbindTexture(),u=i.getBinding();for(let Qe=0;Qe<ve.length;Qe++){let ot=ve[Qe].camera;if(ot){let ut=f[ot];ut||(ut=new Dr,f[ot]=ut);let Ve=u.getCameraImage(ot);ut.sourceTexture=Ve}}}}for(let ve=0;ve<T.length;ve++){let ke=A[ve],Me=T[ve];ke!==null&&Me!==void 0&&Me.update(ke,ee,c||o)}ze&&ze(q,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}let gt=new xf;gt.setAnimationLoop(yt),this.setAnimationLoop=function(q){ze=q},this.dispose=function(){}}},xs=new as,Gx=new Tt;function Hx(n,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,Uc(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,w,S,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,E)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),v(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,w,S):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===li&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===li&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let w=t.get(f),S=w.envMap,E=w.envMapRotation;S&&(p.envMap.value=S,xs.copy(E),xs.x*=-1,xs.y*=-1,xs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),p.envMapRotation.value.setFromMatrix4(Gx.makeRotationFromEuler(xs)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,w,S){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*w,p.scale.value=S*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,w){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===li&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){let w=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Wx(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,S){let E=S.program;i.uniformBlockBinding(w,E)}function c(w,S){let E=s[w.id];E===void 0&&(g(w),E=h(w),s[w.id]=E,w.addEventListener("dispose",p));let T=S.program;i.updateUBOMapping(w,T);let A=t.render.frame;r[w.id]!==A&&(d(w),r[w.id]=A)}function h(w){let S=u();w.__bindingPointIndex=S;let E=n.createBuffer(),T=w.__size,A=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,T,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,E),E}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let S=s[w.id],E=w.uniforms,T=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let A=0,R=E.length;A<R;A++){let F=Array.isArray(E[A])?E[A]:[E[A]];for(let y=0,b=F.length;y<b;y++){let D=F[y];if(m(D,A,y,T)===!0){let z=D.__offset,B=Array.isArray(D.value)?D.value:[D.value],W=0;for(let $=0;$<B.length;$++){let V=B[$],H=v(V);typeof V=="number"||typeof V=="boolean"?(D.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,z+W,D.__data)):V.isMatrix3?(D.__data[0]=V.elements[0],D.__data[1]=V.elements[1],D.__data[2]=V.elements[2],D.__data[3]=0,D.__data[4]=V.elements[3],D.__data[5]=V.elements[4],D.__data[6]=V.elements[5],D.__data[7]=0,D.__data[8]=V.elements[6],D.__data[9]=V.elements[7],D.__data[10]=V.elements[8],D.__data[11]=0):(V.toArray(D.__data,W),W+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(w,S,E,T){let A=w.value,R=S+"_"+E;if(T[R]===void 0)return typeof A=="number"||typeof A=="boolean"?T[R]=A:T[R]=A.clone(),!0;{let F=T[R];if(typeof A=="number"||typeof A=="boolean"){if(F!==A)return T[R]=A,!0}else if(F.equals(A)===!1)return F.copy(A),!0}return!1}function g(w){let S=w.uniforms,E=0,T=16;for(let R=0,F=S.length;R<F;R++){let y=Array.isArray(S[R])?S[R]:[S[R]];for(let b=0,D=y.length;b<D;b++){let z=y[b],B=Array.isArray(z.value)?z.value:[z.value];for(let W=0,$=B.length;W<$;W++){let V=B[W],H=v(V),Q=E%T,pe=Q%H.boundary,ce=Q+pe;E+=pe,ce!==0&&T-ce<H.storage&&(E+=T-ce),z.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=H.storage}}}let A=E%T;return A>0&&(E+=T-A),w.__size=E,w.__cache={},this}function v(w){let S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ne("WebGLRenderer: Unsupported uniform value type.",w),S}function p(w){let S=w.target;S.removeEventListener("dispose",p);let E=o.indexOf(S.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function f(){for(let w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Xx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),on=null;function qx(){return on===null&&(on=new ta(Xx,16,16,ps,rn),on.name="DFG_LUT",on.minFilter=Ot,on.magFilter=Ot,on.wrapS=Qi,on.wrapT=Qi,on.generateMipmaps=!1,on.needsUpdate=!0),on}var fl=class{constructor(t={}){let{canvas:e=Xu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Ci}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let v=m,p=new Set([Ra,Ca,Aa]),f=new Set([Ci,Yi,tr,ir,Ea,Ta]),w=new Uint32Array(4),S=new Int32Array(4),E=null,T=null,A=[],R=[],F=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,b=!1;this._outputColorSpace=ai;let D=0,z=0,B=null,W=-1,$=null,V=new wt,H=new wt,Q=null,pe=new nt(0),ce=0,me=e.width,He=e.height,ze=1,yt=null,gt=null,q=new wt(0,0,me,He),ee=new wt(0,0,me,He),ve=!1,ke=new Pr,Me=!1,tt=!1,zt=new Tt,Qe=new U,ot=new wt,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ve=!1;function At(){return B===null?ze:1}let C=i;function Ct(x,L){return e.getContext(x,L)}try{let x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"182"}`),e.addEventListener("webglcontextlost",Fe,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",at,!1),C===null){let L="webgl2";if(C=Ct(L,x),C===null)throw Ct(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw Pe("WebGLRenderer: "+x.message),x}let st,pt,we,M,_,P,X,K,G,Te,re,Se,Le,ie,ae,be,Ee,oe,Ge,I,ue,ne,_e,te;function Z(){st=new Qg(C),st.init(),ne=new Bx(C,st),pt=new Wg(C,st,t,ne),we=new Ox(C,st),pt.reversedDepthBuffer&&d&&we.buffers.depth.setReversed(!0),M=new i0(C),_=new Mx,P=new kx(C,st,we,_,pt,ne,M),X=new qg(y),K=new jg(y),G=new om(C),_e=new Gg(C,G),Te=new e0(C,G,M,_e),re=new s0(C,Te,G,M),Ge=new n0(C,pt,P),be=new Xg(_),Se=new bx(y,X,K,st,pt,_e,be),Le=new Hx(y,_),ie=new wx,ae=new Ix(st),oe=new Vg(y,X,K,we,re,g,l),Ee=new Fx(y,re,pt),te=new Wx(C,M,pt,we),I=new Hg(C,st,M),ue=new t0(C,st,M),M.programs=Se.programs,y.capabilities=pt,y.extensions=st,y.properties=_,y.renderLists=ie,y.shadowMap=Ee,y.state=we,y.info=M}Z(),v!==Ci&&(F=new o0(v,e.width,e.height,s,r));let se=new eh(y,C);this.xr=se,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let x=st.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=st.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return ze},this.setPixelRatio=function(x){x!==void 0&&(ze=x,this.setSize(me,He,!1))},this.getSize=function(x){return x.set(me,He)},this.setSize=function(x,L,k=!0){if(se.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}me=x,He=L,e.width=Math.floor(x*ze),e.height=Math.floor(L*ze),k===!0&&(e.style.width=x+"px",e.style.height=L+"px"),F!==null&&F.setSize(e.width,e.height),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(me*ze,He*ze).floor()},this.setDrawingBufferSize=function(x,L,k){me=x,He=L,ze=k,e.width=Math.floor(x*k),e.height=Math.floor(L*k),this.setViewport(0,0,x,L)},this.setEffects=function(x){if(v===Ci){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let L=0;L<x.length;L++)if(x[L].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(V)},this.getViewport=function(x){return x.copy(q)},this.setViewport=function(x,L,k,O){x.isVector4?q.set(x.x,x.y,x.z,x.w):q.set(x,L,k,O),we.viewport(V.copy(q).multiplyScalar(ze).round())},this.getScissor=function(x){return x.copy(ee)},this.setScissor=function(x,L,k,O){x.isVector4?ee.set(x.x,x.y,x.z,x.w):ee.set(x,L,k,O),we.scissor(H.copy(ee).multiplyScalar(ze).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(x){we.setScissorTest(ve=x)},this.setOpaqueSort=function(x){yt=x},this.setTransparentSort=function(x){gt=x},this.getClearColor=function(x){return x.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(x=!0,L=!0,k=!0){let O=0;if(x){let N=!1;if(B!==null){let le=B.texture.format;N=p.has(le)}if(N){let le=B.texture.type,xe=f.has(le),de=oe.getClearColor(),ye=oe.getClearAlpha(),Ae=de.r,De=de.g,Ce=de.b;xe?(w[0]=Ae,w[1]=De,w[2]=Ce,w[3]=ye,C.clearBufferuiv(C.COLOR,0,w)):(S[0]=Ae,S[1]=De,S[2]=Ce,S[3]=ye,C.clearBufferiv(C.COLOR,0,S))}else O|=C.COLOR_BUFFER_BIT}L&&(O|=C.DEPTH_BUFFER_BIT),k&&(O|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",at,!1),oe.dispose(),ie.dispose(),ae.dispose(),_.dispose(),X.dispose(),K.dispose(),re.dispose(),_e.dispose(),te.dispose(),Se.dispose(),se.dispose(),se.removeEventListener("sessionstart",nh),se.removeEventListener("sessionend",sh),Gn.stop()};function Fe(x){x.preventDefault(),Fc("WebGLRenderer: Context Lost."),b=!0}function mt(){Fc("WebGLRenderer: Context Restored."),b=!1;let x=M.autoReset,L=Ee.enabled,k=Ee.autoUpdate,O=Ee.needsUpdate,N=Ee.type;Z(),M.autoReset=x,Ee.enabled=L,Ee.autoUpdate=k,Ee.needsUpdate=O,Ee.type=N}function at(x){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ji(x){let L=x.target;L.removeEventListener("dispose",Ji),ln(L)}function ln(x){Cf(x),_.remove(x)}function Cf(x){let L=_.get(x).programs;L!==void 0&&(L.forEach(function(k){Se.releaseProgram(k)}),x.isShaderMaterial&&Se.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,k,O,N,le){L===null&&(L=ut);let xe=N.isMesh&&N.matrixWorld.determinant()<0,de=If(x,L,k,O,N);we.setMaterial(O,xe);let ye=k.index,Ae=1;if(O.wireframe===!0){if(ye=Te.getWireframeAttribute(k),ye===void 0)return;Ae=2}let De=k.drawRange,Ce=k.attributes.position,We=De.start*Ae,ht=(De.start+De.count)*Ae;le!==null&&(We=Math.max(We,le.start*Ae),ht=Math.min(ht,(le.start+le.count)*Ae)),ye!==null?(We=Math.max(We,0),ht=Math.min(ht,ye.count)):Ce!=null&&(We=Math.max(We,0),ht=Math.min(ht,Ce.count));let bt=ht-We;if(bt<0||bt===1/0)return;_e.setup(N,O,de,k,ye);let Mt,ft=I;if(ye!==null&&(Mt=G.get(ye),ft=ue,ft.setIndex(Mt)),N.isMesh)O.wireframe===!0?(we.setLineWidth(O.wireframeLinewidth*At()),ft.setMode(C.LINES)):ft.setMode(C.TRIANGLES);else if(N.isLine){let Re=O.linewidth;Re===void 0&&(Re=1),we.setLineWidth(Re*At()),N.isLineSegments?ft.setMode(C.LINES):N.isLineLoop?ft.setMode(C.LINE_LOOP):ft.setMode(C.LINE_STRIP)}else N.isPoints?ft.setMode(C.POINTS):N.isSprite&&ft.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)$s("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))ft.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Re=N._multiDrawStarts,lt=N._multiDrawCounts,it=N._multiDrawCount,gi=ye?G.get(ye).bytesPerElement:1,ys=_.get(O).currentProgram.getUniforms();for(let xi=0;xi<it;xi++)ys.setValue(C,"_gl_DrawID",xi),ft.render(Re[xi]/gi,lt[xi])}else if(N.isInstancedMesh)ft.renderInstances(We,bt,N.count);else if(k.isInstancedBufferGeometry){let Re=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,lt=Math.min(k.instanceCount,Re);ft.renderInstances(We,bt,lt)}else ft.render(We,bt)};function ih(x,L,k){x.transparent===!0&&x.side===Ni&&x.forceSinglePass===!1?(x.side=li,x.needsUpdate=!0,qr(x,L,k),x.side=xn,x.needsUpdate=!0,qr(x,L,k),x.side=Ni):qr(x,L,k)}this.compile=function(x,L,k=null){k===null&&(k=x),T=ae.get(k),T.init(L),R.push(T),k.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(T.pushLight(N),N.castShadow&&T.pushShadow(N))}),x!==k&&x.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(T.pushLight(N),N.castShadow&&T.pushShadow(N))}),T.setupLights();let O=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let le=N.material;if(le)if(Array.isArray(le))for(let xe=0;xe<le.length;xe++){let de=le[xe];ih(de,k,N),O.add(de)}else ih(le,k,N),O.add(le)}),T=R.pop(),O},this.compileAsync=function(x,L,k=null){let O=this.compile(x,L,k);return new Promise(N=>{function le(){if(O.forEach(function(xe){_.get(xe).currentProgram.isReady()&&O.delete(xe)}),O.size===0){N(x);return}setTimeout(le,10)}st.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let xl=null;function Rf(x){xl&&xl(x)}function nh(){Gn.stop()}function sh(){Gn.start()}let Gn=new xf;Gn.setAnimationLoop(Rf),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(x){xl=x,se.setAnimationLoop(x),x===null?Gn.stop():Gn.start()},se.addEventListener("sessionstart",nh),se.addEventListener("sessionend",sh),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;let k=se.enabled===!0&&se.isPresenting===!0,O=F!==null&&(B===null||k)&&F.begin(y,B);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(L),L=se.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,L,B),T=ae.get(x,R.length),T.init(L),R.push(T),zt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),ke.setFromProjectionMatrix(zt,Xi,L.reversedDepth),tt=this.localClippingEnabled,Me=be.init(this.clippingPlanes,tt),E=ie.get(x,A.length),E.init(),A.push(E),se.enabled===!0&&se.isPresenting===!0){let xe=y.xr.getDepthSensingMesh();xe!==null&&vl(xe,L,-1/0,y.sortObjects)}vl(x,L,0,y.sortObjects),E.finish(),y.sortObjects===!0&&E.sort(yt,gt),Ve=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Ve&&oe.addToRenderList(E,x),this.info.render.frame++,Me===!0&&be.beginShadows();let N=T.state.shadowsArray;if(Ee.render(N,x,L),Me===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(O&&F.hasRenderPass())===!1){let xe=E.opaque,de=E.transmissive;if(T.setupLights(),L.isArrayCamera){let ye=L.cameras;if(de.length>0)for(let Ae=0,De=ye.length;Ae<De;Ae++){let Ce=ye[Ae];oh(xe,de,x,Ce)}Ve&&oe.render(x);for(let Ae=0,De=ye.length;Ae<De;Ae++){let Ce=ye[Ae];rh(E,x,Ce,Ce.viewport)}}else de.length>0&&oh(xe,de,x,L),Ve&&oe.render(x),rh(E,x,L)}B!==null&&z===0&&(P.updateMultisampleRenderTarget(B),P.updateRenderTargetMipmap(B)),O&&F.end(y),x.isScene===!0&&x.onAfterRender(y,x,L),_e.resetDefaultState(),W=-1,$=null,R.pop(),R.length>0?(T=R[R.length-1],Me===!0&&be.setGlobalState(y.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?E=A[A.length-1]:E=null};function vl(x,L,k,O){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)k=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLight)T.pushLight(x),x.castShadow&&T.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||ke.intersectsSprite(x)){O&&ot.setFromMatrixPosition(x.matrixWorld).applyMatrix4(zt);let xe=re.update(x),de=x.material;de.visible&&E.push(x,xe,de,k,ot.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||ke.intersectsObject(x))){let xe=re.update(x),de=x.material;if(O&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),ot.copy(x.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),ot.copy(xe.boundingSphere.center)),ot.applyMatrix4(x.matrixWorld).applyMatrix4(zt)),Array.isArray(de)){let ye=xe.groups;for(let Ae=0,De=ye.length;Ae<De;Ae++){let Ce=ye[Ae],We=de[Ce.materialIndex];We&&We.visible&&E.push(x,xe,We,k,ot.z,Ce)}}else de.visible&&E.push(x,xe,de,k,ot.z,null)}}let le=x.children;for(let xe=0,de=le.length;xe<de;xe++)vl(le[xe],L,k,O)}function rh(x,L,k,O){let{opaque:N,transmissive:le,transparent:xe}=x;T.setupLightsView(k),Me===!0&&be.setGlobalState(y.clippingPlanes,k),O&&we.viewport(V.copy(O)),N.length>0&&Xr(N,L,k),le.length>0&&Xr(le,L,k),xe.length>0&&Xr(xe,L,k),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function oh(x,L,k,O){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[O.id]===void 0){let We=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[O.id]=new Ei(1,1,{generateMipmaps:!0,type:We?rn:Ci,minFilter:sn,samples:pt.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}let le=T.state.transmissionRenderTarget[O.id],xe=O.viewport||V;le.setSize(xe.z*y.transmissionResolutionScale,xe.w*y.transmissionResolutionScale);let de=y.getRenderTarget(),ye=y.getActiveCubeFace(),Ae=y.getActiveMipmapLevel();y.setRenderTarget(le),y.getClearColor(pe),ce=y.getClearAlpha(),ce<1&&y.setClearColor(16777215,.5),y.clear(),Ve&&oe.render(k);let De=y.toneMapping;y.toneMapping=qi;let Ce=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),T.setupLightsView(O),Me===!0&&be.setGlobalState(y.clippingPlanes,O),Xr(x,k,O),P.updateMultisampleRenderTarget(le),P.updateRenderTargetMipmap(le),st.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let ht=0,bt=L.length;ht<bt;ht++){let Mt=L[ht],{object:ft,geometry:Re,material:lt,group:it}=Mt;if(lt.side===Ni&&ft.layers.test(O.layers)){let gi=lt.side;lt.side=li,lt.needsUpdate=!0,ah(ft,k,O,Re,lt,it),lt.side=gi,lt.needsUpdate=!0,We=!0}}We===!0&&(P.updateMultisampleRenderTarget(le),P.updateRenderTargetMipmap(le))}y.setRenderTarget(de,ye,Ae),y.setClearColor(pe,ce),Ce!==void 0&&(O.viewport=Ce),y.toneMapping=De}function Xr(x,L,k){let O=L.isScene===!0?L.overrideMaterial:null;for(let N=0,le=x.length;N<le;N++){let xe=x[N],{object:de,geometry:ye,group:Ae}=xe,De=xe.material;De.allowOverride===!0&&O!==null&&(De=O),de.layers.test(k.layers)&&ah(de,L,k,ye,De,Ae)}}function ah(x,L,k,O,N,le){x.onBeforeRender(y,L,k,O,N,le),x.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(y,L,k,O,x,le),N.transparent===!0&&N.side===Ni&&N.forceSinglePass===!1?(N.side=li,N.needsUpdate=!0,y.renderBufferDirect(k,L,O,N,x,le),N.side=xn,N.needsUpdate=!0,y.renderBufferDirect(k,L,O,N,x,le),N.side=Ni):y.renderBufferDirect(k,L,O,N,x,le),x.onAfterRender(y,L,k,O,N,le)}function qr(x,L,k){L.isScene!==!0&&(L=ut);let O=_.get(x),N=T.state.lights,le=T.state.shadowsArray,xe=N.state.version,de=Se.getParameters(x,N.state,le,L,k),ye=Se.getProgramCacheKey(de),Ae=O.programs;O.environment=x.isMeshStandardMaterial?L.environment:null,O.fog=L.fog,O.envMap=(x.isMeshStandardMaterial?K:X).get(x.envMap||O.environment),O.envMapRotation=O.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,Ae===void 0&&(x.addEventListener("dispose",Ji),Ae=new Map,O.programs=Ae);let De=Ae.get(ye);if(De!==void 0){if(O.currentProgram===De&&O.lightsStateVersion===xe)return ch(x,de),De}else de.uniforms=Se.getUniforms(x),x.onBeforeCompile(de,y),De=Se.acquireProgram(de,ye),Ae.set(ye,De),O.uniforms=de.uniforms;let Ce=O.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ce.clippingPlanes=be.uniform),ch(x,de),O.needsLights=Df(x),O.lightsStateVersion=xe,O.needsLights&&(Ce.ambientLightColor.value=N.state.ambient,Ce.lightProbe.value=N.state.probe,Ce.directionalLights.value=N.state.directional,Ce.directionalLightShadows.value=N.state.directionalShadow,Ce.spotLights.value=N.state.spot,Ce.spotLightShadows.value=N.state.spotShadow,Ce.rectAreaLights.value=N.state.rectArea,Ce.ltc_1.value=N.state.rectAreaLTC1,Ce.ltc_2.value=N.state.rectAreaLTC2,Ce.pointLights.value=N.state.point,Ce.pointLightShadows.value=N.state.pointShadow,Ce.hemisphereLights.value=N.state.hemi,Ce.directionalShadowMap.value=N.state.directionalShadowMap,Ce.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ce.spotShadowMap.value=N.state.spotShadowMap,Ce.spotLightMatrix.value=N.state.spotLightMatrix,Ce.spotLightMap.value=N.state.spotLightMap,Ce.pointShadowMap.value=N.state.pointShadowMap,Ce.pointShadowMatrix.value=N.state.pointShadowMatrix),O.currentProgram=De,O.uniformsList=null,De}function lh(x){if(x.uniformsList===null){let L=x.currentProgram.getUniforms();x.uniformsList=sr.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function ch(x,L){let k=_.get(x);k.outputColorSpace=L.outputColorSpace,k.batching=L.batching,k.batchingColor=L.batchingColor,k.instancing=L.instancing,k.instancingColor=L.instancingColor,k.instancingMorph=L.instancingMorph,k.skinning=L.skinning,k.morphTargets=L.morphTargets,k.morphNormals=L.morphNormals,k.morphColors=L.morphColors,k.morphTargetsCount=L.morphTargetsCount,k.numClippingPlanes=L.numClippingPlanes,k.numIntersection=L.numClipIntersection,k.vertexAlphas=L.vertexAlphas,k.vertexTangents=L.vertexTangents,k.toneMapping=L.toneMapping}function If(x,L,k,O,N){L.isScene!==!0&&(L=ut),P.resetTextureUnits();let le=L.fog,xe=O.isMeshStandardMaterial?L.environment:null,de=B===null?y.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:os,ye=(O.isMeshStandardMaterial?K:X).get(O.envMap||xe),Ae=O.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,De=!!k.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Ce=!!k.morphAttributes.position,We=!!k.morphAttributes.normal,ht=!!k.morphAttributes.color,bt=qi;O.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(bt=y.toneMapping);let Mt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ft=Mt!==void 0?Mt.length:0,Re=_.get(O),lt=T.state.lights;if(Me===!0&&(tt===!0||x!==$)){let ii=x===$&&O.id===W;be.setState(O,x,ii)}let it=!1;O.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==lt.state.version||Re.outputColorSpace!==de||N.isBatchedMesh&&Re.batching===!1||!N.isBatchedMesh&&Re.batching===!0||N.isBatchedMesh&&Re.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Re.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Re.instancing===!1||!N.isInstancedMesh&&Re.instancing===!0||N.isSkinnedMesh&&Re.skinning===!1||!N.isSkinnedMesh&&Re.skinning===!0||N.isInstancedMesh&&Re.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Re.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Re.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Re.instancingMorph===!1&&N.morphTexture!==null||Re.envMap!==ye||O.fog===!0&&Re.fog!==le||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==be.numPlanes||Re.numIntersection!==be.numIntersection)||Re.vertexAlphas!==Ae||Re.vertexTangents!==De||Re.morphTargets!==Ce||Re.morphNormals!==We||Re.morphColors!==ht||Re.toneMapping!==bt||Re.morphTargetsCount!==ft)&&(it=!0):(it=!0,Re.__version=O.version);let gi=Re.currentProgram;it===!0&&(gi=qr(O,L,N));let ys=!1,xi=!1,or=!1,_t=gi.getUniforms(),ci=Re.uniforms;if(we.useProgram(gi.program)&&(ys=!0,xi=!0,or=!0),O.id!==W&&(W=O.id,xi=!0),ys||$!==x){we.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),_t.setValue(C,"projectionMatrix",x.projectionMatrix),_t.setValue(C,"viewMatrix",x.matrixWorldInverse);let hi=_t.map.cameraPosition;hi!==void 0&&hi.setValue(C,Qe.setFromMatrixPosition(x.matrixWorld)),pt.logarithmicDepthBuffer&&_t.setValue(C,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&_t.setValue(C,"isOrthographic",x.isOrthographicCamera===!0),$!==x&&($=x,xi=!0,or=!0)}if(Re.needsLights&&(lt.state.directionalShadowMap.length>0&&_t.setValue(C,"directionalShadowMap",lt.state.directionalShadowMap,P),lt.state.spotShadowMap.length>0&&_t.setValue(C,"spotShadowMap",lt.state.spotShadowMap,P),lt.state.pointShadowMap.length>0&&_t.setValue(C,"pointShadowMap",lt.state.pointShadowMap,P)),N.isSkinnedMesh){_t.setOptional(C,N,"bindMatrix"),_t.setOptional(C,N,"bindMatrixInverse");let ii=N.skeleton;ii&&(ii.boneTexture===null&&ii.computeBoneTexture(),_t.setValue(C,"boneTexture",ii.boneTexture,P))}N.isBatchedMesh&&(_t.setOptional(C,N,"batchingTexture"),_t.setValue(C,"batchingTexture",N._matricesTexture,P),_t.setOptional(C,N,"batchingIdTexture"),_t.setValue(C,"batchingIdTexture",N._indirectTexture,P),_t.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&_t.setValue(C,"batchingColorTexture",N._colorsTexture,P));let Ri=k.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&Ge.update(N,k,gi),(xi||Re.receiveShadow!==N.receiveShadow)&&(Re.receiveShadow=N.receiveShadow,_t.setValue(C,"receiveShadow",N.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(ci.envMap.value=ye,ci.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&L.environment!==null&&(ci.envMapIntensity.value=L.environmentIntensity),ci.dfgLUT!==void 0&&(ci.dfgLUT.value=qx()),xi&&(_t.setValue(C,"toneMappingExposure",y.toneMappingExposure),Re.needsLights&&Pf(ci,or),le&&O.fog===!0&&Le.refreshFogUniforms(ci,le),Le.refreshMaterialUniforms(ci,O,ze,He,T.state.transmissionRenderTarget[x.id]),sr.upload(C,lh(Re),ci,P)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(sr.upload(C,lh(Re),ci,P),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&_t.setValue(C,"center",N.center),_t.setValue(C,"modelViewMatrix",N.modelViewMatrix),_t.setValue(C,"normalMatrix",N.normalMatrix),_t.setValue(C,"modelMatrix",N.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){let ii=O.uniformsGroups;for(let hi=0,yl=ii.length;hi<yl;hi++){let Hn=ii[hi];te.update(Hn,gi),te.bind(Hn,gi)}}return gi}function Pf(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function Df(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(x,L,k){let O=_.get(x);O.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),_.get(x.texture).__webglTexture=L,_.get(x.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:k,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,L){let k=_.get(x);k.__webglFramebuffer=L,k.__useDefaultFramebuffer=L===void 0};let Lf=C.createFramebuffer();this.setRenderTarget=function(x,L=0,k=0){B=x,D=L,z=k;let O=null,N=!1,le=!1;if(x){let de=_.get(x);if(de.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(C.FRAMEBUFFER,de.__webglFramebuffer),V.copy(x.viewport),H.copy(x.scissor),Q=x.scissorTest,we.viewport(V),we.scissor(H),we.setScissorTest(Q),W=-1;return}else if(de.__webglFramebuffer===void 0)P.setupRenderTarget(x);else if(de.__hasExternalTextures)P.rebindTextures(x,_.get(x.texture).__webglTexture,_.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let De=x.depthTexture;if(de.__boundDepthTexture!==De){if(De!==null&&_.has(De)&&(x.width!==De.image.width||x.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(x)}}let ye=x.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(le=!0);let Ae=_.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ae[L])?O=Ae[L][k]:O=Ae[L],N=!0):x.samples>0&&P.useMultisampledRTT(x)===!1?O=_.get(x).__webglMultisampledFramebuffer:Array.isArray(Ae)?O=Ae[k]:O=Ae,V.copy(x.viewport),H.copy(x.scissor),Q=x.scissorTest}else V.copy(q).multiplyScalar(ze).floor(),H.copy(ee).multiplyScalar(ze).floor(),Q=ve;if(k!==0&&(O=Lf),we.bindFramebuffer(C.FRAMEBUFFER,O)&&we.drawBuffers(x,O),we.viewport(V),we.scissor(H),we.setScissorTest(Q),N){let de=_.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+L,de.__webglTexture,k)}else if(le){let de=L;for(let ye=0;ye<x.textures.length;ye++){let Ae=_.get(x.textures[ye]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+ye,Ae.__webglTexture,k,de)}}else if(x!==null&&k!==0){let de=_.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,de.__webglTexture,k)}W=-1},this.readRenderTargetPixels=function(x,L,k,O,N,le,xe,de=0){if(!(x&&x.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=_.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&xe!==void 0&&(ye=ye[xe]),ye){we.bindFramebuffer(C.FRAMEBUFFER,ye);try{let Ae=x.textures[de],De=Ae.format,Ce=Ae.type;if(!pt.textureFormatReadable(De)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(Ce)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-O&&k>=0&&k<=x.height-N&&(x.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+de),C.readPixels(L,k,O,N,ne.convert(De),ne.convert(Ce),le))}finally{let Ae=B!==null?_.get(B).__webglFramebuffer:null;we.bindFramebuffer(C.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(x,L,k,O,N,le,xe,de=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=_.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&xe!==void 0&&(ye=ye[xe]),ye)if(L>=0&&L<=x.width-O&&k>=0&&k<=x.height-N){we.bindFramebuffer(C.FRAMEBUFFER,ye);let Ae=x.textures[de],De=Ae.format,Ce=Ae.type;if(!pt.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let We=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,We),C.bufferData(C.PIXEL_PACK_BUFFER,le.byteLength,C.STREAM_READ),x.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+de),C.readPixels(L,k,O,N,ne.convert(De),ne.convert(Ce),0);let ht=B!==null?_.get(B).__webglFramebuffer:null;we.bindFramebuffer(C.FRAMEBUFFER,ht);let bt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await qu(C,bt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,We),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,le),C.deleteBuffer(We),C.deleteSync(bt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,L=null,k=0){let O=Math.pow(2,-k),N=Math.floor(x.image.width*O),le=Math.floor(x.image.height*O),xe=L!==null?L.x:0,de=L!==null?L.y:0;P.setTexture2D(x,0),C.copyTexSubImage2D(C.TEXTURE_2D,k,0,0,xe,de,N,le),we.unbindTexture()};let Nf=C.createFramebuffer(),Ff=C.createFramebuffer();this.copyTextureToTexture=function(x,L,k=null,O=null,N=0,le=null){le===null&&(N!==0?($s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=N,N=0):le=0);let xe,de,ye,Ae,De,Ce,We,ht,bt,Mt=x.isCompressedTexture?x.mipmaps[le]:x.image;if(k!==null)xe=k.max.x-k.min.x,de=k.max.y-k.min.y,ye=k.isBox3?k.max.z-k.min.z:1,Ae=k.min.x,De=k.min.y,Ce=k.isBox3?k.min.z:0;else{let Ri=Math.pow(2,-N);xe=Math.floor(Mt.width*Ri),de=Math.floor(Mt.height*Ri),x.isDataArrayTexture?ye=Mt.depth:x.isData3DTexture?ye=Math.floor(Mt.depth*Ri):ye=1,Ae=0,De=0,Ce=0}O!==null?(We=O.x,ht=O.y,bt=O.z):(We=0,ht=0,bt=0);let ft=ne.convert(L.format),Re=ne.convert(L.type),lt;L.isData3DTexture?(P.setTexture3D(L,0),lt=C.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(P.setTexture2DArray(L,0),lt=C.TEXTURE_2D_ARRAY):(P.setTexture2D(L,0),lt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,L.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,L.unpackAlignment);let it=C.getParameter(C.UNPACK_ROW_LENGTH),gi=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ys=C.getParameter(C.UNPACK_SKIP_PIXELS),xi=C.getParameter(C.UNPACK_SKIP_ROWS),or=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Mt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Mt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ae),C.pixelStorei(C.UNPACK_SKIP_ROWS,De),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ce);let _t=x.isDataArrayTexture||x.isData3DTexture,ci=L.isDataArrayTexture||L.isData3DTexture;if(x.isDepthTexture){let Ri=_.get(x),ii=_.get(L),hi=_.get(Ri.__renderTarget),yl=_.get(ii.__renderTarget);we.bindFramebuffer(C.READ_FRAMEBUFFER,hi.__webglFramebuffer),we.bindFramebuffer(C.DRAW_FRAMEBUFFER,yl.__webglFramebuffer);for(let Hn=0;Hn<ye;Hn++)_t&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_.get(x).__webglTexture,N,Ce+Hn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_.get(L).__webglTexture,le,bt+Hn)),C.blitFramebuffer(Ae,De,xe,de,We,ht,xe,de,C.DEPTH_BUFFER_BIT,C.NEAREST);we.bindFramebuffer(C.READ_FRAMEBUFFER,null),we.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(N!==0||x.isRenderTargetTexture||_.has(x)){let Ri=_.get(x),ii=_.get(L);we.bindFramebuffer(C.READ_FRAMEBUFFER,Nf),we.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ff);for(let hi=0;hi<ye;hi++)_t?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ri.__webglTexture,N,Ce+hi):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ri.__webglTexture,N),ci?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ii.__webglTexture,le,bt+hi):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ii.__webglTexture,le),N!==0?C.blitFramebuffer(Ae,De,xe,de,We,ht,xe,de,C.COLOR_BUFFER_BIT,C.NEAREST):ci?C.copyTexSubImage3D(lt,le,We,ht,bt+hi,Ae,De,xe,de):C.copyTexSubImage2D(lt,le,We,ht,Ae,De,xe,de);we.bindFramebuffer(C.READ_FRAMEBUFFER,null),we.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else ci?x.isDataTexture||x.isData3DTexture?C.texSubImage3D(lt,le,We,ht,bt,xe,de,ye,ft,Re,Mt.data):L.isCompressedArrayTexture?C.compressedTexSubImage3D(lt,le,We,ht,bt,xe,de,ye,ft,Mt.data):C.texSubImage3D(lt,le,We,ht,bt,xe,de,ye,ft,Re,Mt):x.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,le,We,ht,xe,de,ft,Re,Mt.data):x.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,le,We,ht,Mt.width,Mt.height,ft,Mt.data):C.texSubImage2D(C.TEXTURE_2D,le,We,ht,xe,de,ft,Re,Mt);C.pixelStorei(C.UNPACK_ROW_LENGTH,it),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,gi),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ys),C.pixelStorei(C.UNPACK_SKIP_ROWS,xi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,or),le===0&&L.generateMipmaps&&C.generateMipmap(lt),we.unbindTexture()},this.initRenderTarget=function(x){_.get(x).__webglFramebuffer===void 0&&P.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?P.setTextureCube(x,0):x.isData3DTexture?P.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?P.setTexture2DArray(x,0):P.setTexture2D(x,0),we.unbindTexture()},this.resetState=function(){D=0,z=0,B=null,we.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ke._getUnpackColorSpace()}};var Sf=10,wf=.5,$x=.8,Ef={x:1,y:1},Tf={x:-1,y:-1};function Zx(n){let t=new Map,e=document.createElement("div");e.style.position="absolute",e.style.visibility="hidden",e.style.pointerEvents="none",e.style.left="-9999px",e.style.top="-9999px",e.innerHTML=n,document.body.appendChild(e);let i=e.querySelector("svg");if(!i)return document.body.removeChild(e),{bounds:t,aspect_ratio:1};let s=0,r=0,o=i.getAttribute("viewBox");if(o){let c=o.split(/[\s,]+/).map(parseFloat);c.length>=4&&(s=c[2],r=c[3])}if(!s||!r){let c=i.getAttribute("width"),h=i.getAttribute("height");s=c?parseFloat(c):0,r=h?parseFloat(h):0}if(!s||!r){let c=i.getBBox();s=c.width||1,r=c.height||1}let a=s/r;return i.querySelectorAll("[id]").forEach(c=>{let h=c.getAttribute("id");if(h&&typeof c.getBBox=="function")try{let u=c.getBBox(),d={x:u.x/s,y:u.y/r,width:u.width/s,height:u.height/r};t.set(h,d)}catch{}}),document.body.removeChild(e),{bounds:t,aspect_ratio:a}}var th=class{constructor(){this.store=new Map,this.auth_type="cookie",this.token="",this.auth_key=""}setAuthToken(t,e="cookie"){this.token=t,this.auth_type=e}setAuthKey(t,e="cookie"){this.token="api-key",this.auth_key=t,this.auth_type=e}async get(t){return this.store.has(t)?this.store.get(t):this._load(t)}remove(t){this.store.delete(t)}async _load(t){let e={};this.token&&(this.auth_type==="header"?e.headers={Authorization:`Bearer ${this.token}`}:document.cookie=`${this.token==="api-key"?"api-key="+encodeURIComponent(this.auth_key):"bearer_token="+encodeURIComponent(this.token)};max-age=30;path=/;samesite=strict;${location.protocol==="https:"?"secure;":""}`);let i=await fetch(t,e);if(!i.ok)throw new Error("Failed to load map");let s=await i.text(),{bounds:r,aspect_ratio:o}=Zx(s),a={raw_data:s,element_bounds:r,aspect_ratio:o,loaded_at:Date.now()};return this.store.set(t,a),a}},Jx=new th,_l=class{constructor(t){this.styles_string="",this.center={x:0,y:0},this.zoom=1,this.rotation=0,this.mode="3d",this.high_resolution=!1,this.onViewChange=null,this._render_frame_id=null,this._texture=null,this._texture_image=null,this._quad=null,this._events=new Map,this._is_panning=!1,this._pan_start=null,this._pan_start_time=null,this._pan_exceeded_threshold=!1,this._overlay_instances=[],this._actions=[],this._action_event_handlers=new Map,this._action_pointerdown_pos=null,this._action_last_triggered=new Map,this._is_rotating=!1,this._rotate_start_x=null,this._rotate_start_rotation=0,this.container=t,this.id=`m_view-${jh(8,"0123456789ABCDEF")}`,this.container.innerHTML="",this.scene=new Ir,this.camera=new us(-100,100,100,-100,.1,1e3),this.renderer=new fl({antialias:!0,alpha:!0}),this.renderer.setClearColor(0,0),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.container.appendChild(this.renderer.domElement),this.overlays=document.createElement("div"),this.overlays.id=`${this.id}-overlays`,this.overlays.style.cssText="position: absolute; inset: 0; pointer-events: auto; overflow: hidden;",this.container.appendChild(this.overlays),this._events.set("resize",()=>this._renderMap()),window.addEventListener("resize",this._events.get("resize")),this._events.set("wheel",e=>this._onWheel(e)),this.renderer.domElement.addEventListener("wheel",this._events.get("wheel"),{passive:!1}),this.overlays.addEventListener("wheel",this._events.get("wheel"),{passive:!1}),this._events.set("pointerdown",e=>this._onPointerDown(e)),this._events.set("pointermove",e=>this._onPointerMove(e)),this._events.set("pointerup",e=>this._onPointerUp(e)),this.renderer.domElement.addEventListener("pointerdown",this._events.get("pointerdown")),this.renderer.domElement.addEventListener("pointermove",this._events.get("pointermove")),this.renderer.domElement.addEventListener("pointerup",this._events.get("pointerup")),this.overlays.addEventListener("pointerdown",this._events.get("pointerdown")),this.overlays.addEventListener("pointermove",this._events.get("pointermove")),this.overlays.addEventListener("pointerup",this._events.get("pointerup")),window.addEventListener("pointermove",this._events.get("pointermove")),window.addEventListener("pointerup",this._events.get("pointerup")),this._events.set("contextmenu",e=>e.preventDefault()),this.renderer.domElement.addEventListener("contextmenu",this._events.get("contextmenu")),this.overlays.addEventListener("contextmenu",this._events.get("contextmenu"))}async setMap(t){this.map=await Jx.get(t),this._renderMapImage()}setCenter(t){let e=Math.max(Tf.x,Math.min(Ef.x,t.x)),i=Math.max(Tf.y,Math.min(Ef.y,t.y));this.center={x:e,y:i},this._renderMap()}setZoom(t){this.zoom=Math.max(wf,Math.min(Sf,t)),this._renderMap()}setRotation(t){this.rotation=t,this._renderMap()}setMode(t){this.mode!==t&&(this.mode=t,this._renderMap())}setHighResolution(t){this.high_resolution!==t&&(this.high_resolution=t,this._renderMapImage())}getMaxTextureSize(){return this.renderer.capabilities.maxTextureSize}setOverlays(t){for(let e of this._overlay_instances)e.element.remove();this._overlay_instances=[];for(let e of t){let i=document.createElement("div");i.style.cssText="position: absolute; transform-origin: center center; pointer-events: auto;",typeof e.contents=="string"?i.innerHTML=e.contents:(e.contents.classList.remove("pointer-events-none"),i.appendChild(e.contents)),this.overlays.appendChild(i),this._overlay_instances.push({overlay:e,element:i})}this._updateOverlayPositions()}setActions(t){for(let[i,s]of this._action_event_handlers)this.renderer.domElement.removeEventListener(i,s),this.overlays.removeEventListener(i,s);this._action_event_handlers.clear(),this._action_last_triggered.clear(),this._actions=t;let e=new Set;for(let i of t)for(let s of i.events)e.add(s);for(let i of e){let s=r=>this._handleActionEvent(i,r);this._action_event_handlers.set(i,s),this.renderer.domElement.addEventListener(i,s),this.overlays.addEventListener(i,s)}if(!this._events.has("action_pointerdown")){let i=s=>{this._action_pointerdown_pos={x:s.clientX,y:s.clientY}};this._events.set("action_pointerdown",i),this.renderer.domElement.addEventListener("pointerdown",i),this.overlays.addEventListener("pointerdown",i)}}setStyles(t){let e="";t.forEach((s,r)=>{let o=s.cssText;o&&(e+=`${r} { ${o} }
`)});let i=`<style>${e}</style>`;i!==this.styles_string&&(this.styles_string=i,this._renderMapImage())}destroy(){window.removeEventListener("resize",this._events.get("resize")),this.renderer.domElement.removeEventListener("wheel",this._events.get("wheel")),this.renderer.domElement.removeEventListener("pointerdown",this._events.get("pointerdown")),this.renderer.domElement.removeEventListener("pointermove",this._events.get("pointermove")),this.renderer.domElement.removeEventListener("pointerup",this._events.get("pointerup")),this.overlays.removeEventListener("wheel",this._events.get("wheel")),this.overlays.removeEventListener("pointerdown",this._events.get("pointerdown")),this.overlays.removeEventListener("pointermove",this._events.get("pointermove")),this.overlays.removeEventListener("pointerup",this._events.get("pointerup")),window.removeEventListener("pointermove",this._events.get("pointermove")),window.removeEventListener("pointerup",this._events.get("pointerup")),this.renderer.domElement.removeEventListener("contextmenu",this._events.get("contextmenu")),this.overlays.removeEventListener("contextmenu",this._events.get("contextmenu"));for(let[t,e]of this._action_event_handlers)this.renderer.domElement.removeEventListener(t,e),this.overlays.removeEventListener(t,e);if(this._action_event_handlers.clear(),this._action_last_triggered.clear(),this._actions=[],this._events.has("action_pointerdown")){let t=this._events.get("action_pointerdown");this.renderer.domElement.removeEventListener("pointerdown",t),this.overlays.removeEventListener("pointerdown",t),this._events.delete("action_pointerdown")}this._action_pointerdown_pos=null,this._render_frame_id!==null&&(cancelAnimationFrame(this._render_frame_id),this._render_frame_id=null);for(let t of this._overlay_instances)t.element.remove();this._overlay_instances=[],this._quad&&(this._quad.geometry.dispose(),this._quad.material.dispose(),this._quad=null),this._texture&&(this._texture.dispose(),this._texture=null),this._texture_image=null,this.renderer.dispose(),this.container.innerHTML=""}_onWheel(t){if(t.preventDefault(),!this._quad)return;let e=this.renderer.domElement.getBoundingClientRect(),i=100,s=(t.clientX-e.left)/e.width*2-1,r=-((t.clientY-e.top)/e.height)*2+1,o=new kn;o.setFromCamera(new je(s,r),this.camera);let a=o.intersectObject(this._quad);if(a.length===0)return;let l=a[0].point,c=t.deltaY>0?.97:1.03,h=this.zoom,u=Math.max(wf,Math.min(Sf,h*c));if(u===h)return;let d=this.center.x*i,m=this.center.y*i,g=l.x-d,v=l.z-m,p=1-h/u,f=this.center.x+g*p/i,w=this.center.y+v*p/i,S=this._getMaxCenterOffset(u);this.center.x=Math.max(-S.x,Math.min(S.x,f)),this.center.y=Math.max(-S.y,Math.min(S.y,w)),this.zoom=u,this._renderMap(),this._notifyViewChange()}_onPointerDown(t){if(!this._quad)return;if(t.button===2&&this.mode==="3d"){this._is_rotating=!0,this._rotate_start_x=t.clientX,this._rotate_start_rotation=this.rotation,this.renderer.domElement.style.cursor="ew-resize";return}if(t.button!==0)return;let e=this.renderer.domElement.getBoundingClientRect(),i=(t.clientX-e.left)/e.width*2-1,s=-((t.clientY-e.top)/e.height)*2+1,r=new kn;r.setFromCamera(new je(i,s),this.camera);let o=r.intersectObject(this._quad);o.length!==0&&(this._is_panning=!0,this._pan_start=o[0].point.clone(),this._pan_start_time=Date.now(),this._pan_exceeded_threshold=!1,this.renderer.domElement.style.cursor="grabbing")}_onPointerMove(t){if(this._is_rotating&&this._rotate_start_x!==null){let g=t.clientX-this._rotate_start_x,v=Math.PI*2/500;this.rotation=this._rotate_start_rotation+g*v,this._renderMap(),this._notifyViewChange();return}if(!this._is_panning||!this._pan_start)return;this._pan_start_time&&!this._pan_exceeded_threshold&&Date.now()-this._pan_start_time>200&&(this._pan_exceeded_threshold=!0);let e=this.renderer.domElement.getBoundingClientRect(),i=(t.clientX-e.left)/e.width*2-1,s=-((t.clientY-e.top)/e.height)*2+1,r=new kn;r.setFromCamera(new je(i,s),this.camera);let o=new Di(new U(0,1,0),0),a=new U;if(r.ray.intersectPlane(o,a),!a)return;let l=100,c=(a.x-this._pan_start.x)/l,h=(a.z-this._pan_start.z)/l,u=this.center.x-c,d=this.center.y-h,m=this._getMaxCenterOffset(this.zoom);this.center.x=Math.max(-m.x,Math.min(m.x,u)),this.center.y=Math.max(-m.y,Math.min(m.y,d)),this._renderMap(),this._notifyViewChange()}_onPointerUp(t){this._is_panning&&(this._is_panning=!1,this._pan_start=null,this.renderer.domElement.style.cursor=""),this._is_rotating&&(this._is_rotating=!1,this._rotate_start_x=null,this.renderer.domElement.style.cursor="")}_getMaxCenterOffset(t){let e=this.container.clientWidth||1,i=this.container.clientHeight||1,s=e/i,r=100,o=this.mode==="3d"?Math.SQRT2/2:.5,a=r/t,c=a*s/2/r,h=a/2/r,u=Math.max(0,o-c),d=Math.max(0,o-h);return{x:u,y:d}}_renderMapImage(){this._render_frame_id!==null&&cancelAnimationFrame(this._render_frame_id),this._render_frame_id=requestAnimationFrame(()=>{this._render_frame_id=null,this._doRenderMapImage()})}_doRenderMapImage(){if(!this.map?.raw_data)return;let e=new DOMParser().parseFromString(this.map.raw_data,"image/svg+xml"),i=e.querySelector("svg");if(!i)return;let s=i.querySelector("style[data-injected]");if(s&&s.remove(),this.styles_string){let m=this.styles_string.replace("<style>","").replace("</style>",""),g=e.createElementNS("http://www.w3.org/2000/svg","style");g.setAttribute("data-injected","true"),g.textContent=m,i.insertBefore(g,i.firstChild)}let r=0,o=0,a=i.getAttribute("viewBox");if(a){let m=a.split(/[\s,]+/).map(parseFloat);m.length>=4&&(r=m[2],o=m[3])}if(!r||!o){let m=i.getAttribute("width"),g=i.getAttribute("height");r=m?parseFloat(m):0,o=g?parseFloat(g):0}(!r||!o)&&(r=1,o=1);let c=new XMLSerializer().serializeToString(i),h=new Blob([c],{type:"image/svg+xml"}),u=URL.createObjectURL(h),d=new Image;d.onload=()=>{URL.revokeObjectURL(u);let m=this.renderer.capabilities.maxTextureSize,g=4096,v=8192,p=this.high_resolution&&m>=v?v:g,f=document.createElement("canvas");f.width=p,f.height=p;let w=f.getContext("2d");if(!w){console.error("Failed to get canvas context");return}let S=Math.min(p/r,p/o),E=r*S,T=o*S,A=(p-E)/2,R=(p-T)/2;w.clearRect(0,0,p,p),w.drawImage(d,A,R,E,T);let F=new Image;F.onload=()=>{this.map_image=F,this._renderMap()},F.onerror=()=>{console.error("Failed to create final map image")},F.src=f.toDataURL("image/png")},d.onerror=()=>{URL.revokeObjectURL(u),console.error("Failed to load map image")},d.src=u}_renderMap(){if(!this.map_image)return;let t=100;if(this.map_image!==this._texture_image){this._quad&&(this.scene.remove(this._quad),this._quad.geometry.dispose(),this._quad.material.dispose()),this._texture&&this._texture.dispose(),this._texture=new Zi(this.map_image),this._texture.needsUpdate=!0,this._texture.generateMipmaps=!0,this._texture.minFilter=sn,this._texture.magFilter=Ot,this._texture.colorSpace=ai,this._texture_image=this.map_image;let h=new hs(t,t),u=new cs({map:this._texture,side:Ni,transparent:!0});this._quad=new _i(h,u),this._applyQuadRotation(),this.scene.add(this._quad)}if(!this._quad)return;this._applyQuadRotation();let e=this.container.clientWidth||1,i=this.container.clientHeight||1,s=e/i,r=t/this.zoom,o=r*s;this.camera.left=-o/2,this.camera.right=o/2,this.camera.top=r/2,this.camera.bottom=-r/2,this.camera.updateProjectionMatrix();let a=this.center.x*t,l=this.center.y*t,c=500;if(this.mode==="2d")this.camera.position.set(a,c,l),this.camera.lookAt(a,0,l);else{let h=Math.atan(.5);this.camera.position.set(a,c*Math.sin(h),l+c*Math.cos(h)),this.camera.lookAt(a,0,l)}(this.renderer.domElement.width!==e||this.renderer.domElement.height!==i)&&this.renderer.setSize(e,i),this.renderer.render(this.scene,this.camera),this._updateOverlayPositions()}_applyQuadRotation(){if(!this._quad)return;let t=new mi().setFromAxisAngle(new U(1,0,0),-Math.PI/2),e=this.mode==="3d"?Math.PI/4+this.rotation:0,i=new mi().setFromAxisAngle(new U(0,1,0),e);this._quad.quaternion.copy(t).premultiply(i)}_updateOverlayPositions(){if(!this._quad||!this.map?.element_bounds)return;let t=this.container.clientWidth||1,e=this.container.clientHeight||1,i=100;for(let s of this._overlay_instances){let{overlay:r,element:o}=s,a,l,c=0,h=0;if(typeof r.ref=="string"){let d=this.map.element_bounds.get(r.ref);if(!d){o.style.display="none";continue}if(r.type==="box"){let m=r.box_scale??1,g=this.mode==="3d"?m*$x:m,v=d.width*g,p=d.height*g,f=d.x+d.width/2,w=d.y+d.height/2;a=f-v/2,l=w-p/2,c=v,h=p}else a=d.x+d.width/2,l=d.y+d.height/2}else a=r.ref.x,l=r.ref.y;o.style.display="";let u=this._normToWorldPositions(a,l,c,h,i);if(r.type==="box"&&c>0&&h>0){let d=u.map(S=>this._worldToScreen(S,t,e)),m=Math.min(...d.map(S=>S.x)),g=Math.max(...d.map(S=>S.x)),v=Math.min(...d.map(S=>S.y)),p=Math.max(...d.map(S=>S.y)),f=g-m,w=p-v;o.style.left=`${m}px`,o.style.top=`${v}px`,o.style.width=`${f}px`,o.style.height=`${w}px`,o.style.transform=""}else{let d=this._worldToScreen(u[0],t,e);o.style.left=`${d.x}px`,o.style.top=`${d.y}px`,o.style.width="",o.style.height="",o.style.transform="translate(-50%, -50%)",r.scale_with_zoom&&(o.style.transform=`translate(-50%, -50%) scale(${this.zoom})`)}}}_normToWorldPositions(t,e,i,s,r){let o=[];if(i>0&&s>0){let a=[{x:t,y:e},{x:t+i,y:e},{x:t+i,y:e+s},{x:t,y:e+s}];for(let l of a)o.push(this._normToSingleWorldPos(l.x,l.y,r))}else o.push(this._normToSingleWorldPos(t,e,r));return o}_normToSingleWorldPos(t,e,i){let s=this.map?.aspect_ratio??1,r,o;s>=1?(r=t,o=(1-1/s)/2+e/s):(r=(1-s)/2+t*s,o=e);let a=(r-.5)*i,l=(.5-o)*i,c=new U(a,l,0),h=new mi().setFromAxisAngle(new U(1,0,0),-Math.PI/2),u=this.mode==="3d"?Math.PI/4+this.rotation:0,d=new mi().setFromAxisAngle(new U(0,1,0),u),m=h.clone().premultiply(d);return c.applyQuaternion(m),c}_worldToScreen(t,e,i){let s=t.clone();s.project(this.camera);let r=(s.x+1)/2*e,o=(-s.y+1)/2*i;return{x:r,y:o}}_handleActionEvent(t,e){if(!this._quad||!this.map?.element_bounds||this._pan_exceeded_threshold)return;if(t==="click"&&this._action_pointerdown_pos){let d=e.clientX-this._action_pointerdown_pos.x,m=e.clientY-this._action_pointerdown_pos.y;if(Math.sqrt(d*d+m*m)>5)return}let i=this.renderer.domElement.getBoundingClientRect(),s=(e.clientX-i.left)/i.width*2-1,r=-((e.clientY-i.top)/i.height)*2+1,o=new kn;o.setFromCamera(new je(s,r),this.camera);let a=o.intersectObject(this._quad);if(a.length===0)return;let l=a[0].uv;if(!l)return;let c=this._uvToNormalized(l.x,l.y),h=Date.now(),u=300;for(let d of this._actions){if(!d.events.includes(t))continue;let m=this.map.element_bounds.get(d.ref);if(m&&c.x>=m.x&&c.x<=m.x+m.width&&c.y>=m.y&&c.y<=m.y+m.height){let g=`${d.ref}:${t}`,v=this._action_last_triggered.get(g)||0;if(h-v<u)continue;this._action_last_triggered.set(g,h),d.callback(c)}}}_uvToNormalized(t,e){let i=this.map?.aspect_ratio??1,s=t,r=1-e,o,a;if(i>=1){o=s;let l=(1-1/i)/2;a=(r-l)*i}else{let l=(1-i)/2;o=(s-l)/i,a=r}return{x:o,y:a}}_notifyViewChange(){this.onViewChange&&this.onViewChange({zoom:this.zoom,center:ct({},this.center),rotation:this.rotation})}};var Kx=["mapContainer"],jx=["feature"],Qx=["*"],ev=(n,t)=>t.track_id||n;function tv(n,t){if(n&1){let e=ri();Y(0,"div",3)(1,"button",5),Pt(2,"translate"),et("click",function(s){Gt(e);let r=Ie();return r.zoom.set(r.zoom()*1.1),Ht(s.stopPropagation())}),Y(3,"icon"),fe(4,"add"),J()(),Y(5,"button",5),Pt(6,"translate"),et("click",function(s){Gt(e);let r=Ie();return r.zoom.set(r.zoom()*(10/11)),Ht(s.stopPropagation())}),Y(7,"icon"),fe(8,"remove"),J()(),Y(9,"button",5),Pt(10,"translate"),et("click",function(s){Gt(e);let r=Ie();return r.reset.set(r.reset()+1),Ht(s.stopPropagation())}),Y(11,"icon"),fe(12,"refresh"),J()()()}n&2&&(j(),$e("matTooltip",Dt(2,3,"EXPLORE.ZOOM_IN")),j(4),$e("matTooltip",Dt(6,5,"EXPLORE.ZOOM_OUT")),j(4),$e("matTooltip",Dt(10,7,"EXPLORE.ZOOM_RESET")))}function iv(n,t){n&1&&Sl(0)}function nv(n,t){if(n&1&&hn(0,iv,1,0,"ng-container",8),n&2){let e=Ie(2),i=e.$implicit,s=e.$index,r=Ie(2);$e("ngComponentOutlet",i.content)("ngComponentOutletInjector",r.injectors[s])}}function sv(n,t){if(n&1&&(dt(0,"div",7),Pt(1,"sanitize")),n&2){let e=Ie(2).$implicit;$e("innerHTML",Dt(1,1,e.content),gh)}}function rv(n,t){n&1&&Sl(0)}function ov(n,t){if(n&1&&hn(0,rv,1,0,"ng-container",9),n&2){let e=Ie(2).$implicit;$e("ngTemplateOutlet",e.content)("ngTemplateOutletContext",e.data)}}function av(n,t){if(n&1&&(Y(0,"div")(1,"div",6,1),qe(3,nv,1,2,"ng-container")(4,sv,2,3,"div",7)(5,ov,1,2,"ng-container"),J()()),n&2){let e,i=Ie().$implicit,s=Ie(2);j(),Ss("el-id",i.location)("track-id",i.track_id),j(2),Ye((e=s.contentType(i.content))==="component"?3:e==="html"?4:5)}}function lv(n,t){if(n&1&&qe(0,av,6,3,"div"),n&2){let e=t.$implicit;Ye(e?0:-1)}}function cv(n,t){if(n&1&&(Y(0,"div",4),Ui(1,lv,1,1,null,null,ev),J()),n&2){let e=Ie();j(),Oi(e.features())}}var Af=(()=>{class n{constructor(){this._injector=ge(bl),this._map_viewer=null,this._map_container=Yn("mapContainer"),this._feature_elements=Ih("feature",{}),this.src=ji(""),this.zoom=As(1),this.center=As({x:0,y:0}),this.rotation=As(0),this.mode=ji("3d"),this.highResolution=ji(!1),this.reset=As(0),this.metadata=As({}),this.styles=ji({}),this.features=ji([]),this.labels=ji([]),this.actions=ji([]),this.options=ji({}),this.focus=ji(""),this.mapInfo=Rh(),this.injectors=[],this.loading=Ue(!1),this._view_changes=new $t({zoom:1,center:{x:0,y:0},rotation:0}),this._syncing_from_viewer=!1,this._extra_data={zoom$:this._view_changes.pipe(Xe(e=>e.zoom)),center$:this._view_changes.pipe(Xe(e=>e.center)),rotation$:this._view_changes.pipe(Xe(e=>e.rotation))},vi(()=>{let e=this.src();e&&this._map_viewer&&this._map_viewer.setMap(e)}),vi(()=>{let e=this.styles()||this.metadata()?.styles||{};this._map_viewer&&Object.keys(e).length>0&&this._applyStyles(e)}),vi(()=>{let e=this.features()||this.metadata()?.features||[],i=this.labels()||this.metadata()?.labels||[],s=this._feature_elements();this._map_viewer&&this._applyOverlays(e,i,s)}),vi(()=>{this.features(),this._updateInjectors()}),vi(()=>{let e=this.actions()||this.metadata()?.actions||[];this._map_viewer&&this._applyActions(e)}),vi(()=>{let e=this.zoom()??1;this._map_viewer&&!this._syncing_from_viewer&&this._map_viewer.setZoom(e)}),vi(()=>{let e=this.center();this._map_viewer&&!this._syncing_from_viewer&&this._map_viewer.setCenter(e?ct({},e):{x:0,y:0})}),vi(()=>{let e=this.rotation()??0;this._map_viewer&&!this._syncing_from_viewer&&this._map_viewer.setRotation(e)}),vi(()=>{let e=this.mode()??"3d";this._map_viewer&&this._map_viewer.setMode(e)}),vi(()=>{let e=this.highResolution()??!1;this._map_viewer&&this._map_viewer.setHighResolution(e)}),vi(()=>{this.reset()>0&&this._map_viewer&&(this._syncing_from_viewer=!0,this.zoom.set(1),this.center.set({x:0,y:0}),this.rotation.set(0),this._map_viewer.setZoom(1),this._map_viewer.setCenter({x:0,y:0}),this._map_viewer.setRotation(0),this._syncing_from_viewer=!1)}),vi(()=>{let e=this.zoom()??1,i=this.center()??{x:0,y:0},s=this.rotation()??0;this._view_changes.next({zoom:e,center:i,rotation:s})})}ngOnInit(){let e=this._map_container()?.nativeElement;if(e){this._map_viewer=new _l(e),this._map_viewer.onViewChange=s=>{this._syncing_from_viewer=!0,this.zoom.set(s.zoom),this.center.set(s.center),this.rotation.set(s.rotation),this._syncing_from_viewer=!1},this._map_viewer.setMode(this.mode()??"3d"),this._map_viewer.setHighResolution(this.highResolution()??!1),this._map_viewer.setZoom(this.zoom()??1),this._map_viewer.setCenter(this.center()?ct({},this.center()):{x:0,y:0}),this._map_viewer.setRotation(this.rotation()??0);let i=this.src();i&&this._map_viewer.setMap(i)}}ngOnDestroy(){this._map_viewer&&(this._map_viewer.destroy(),this._map_viewer=null)}contentType(e){return typeof e=="string"?"html":e instanceof vh?"template":"component"}_applyStyles(e){if(!this._map_viewer)return;let i=new Map;for(let[s,r]of Object.entries(e)){let o={cssText:this._objectToCssText(r)};i.set(s,o)}this._map_viewer.setStyles(i)}_objectToCssText(e){return Object.entries(e).map(([i,s])=>`${i.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`)}: ${s}`).join("; ")}_applyOverlays(e,i,s){if(!this._map_viewer)return;let r=[];for(let o=0;o<e.length;o++){let a=e[o];if(!a.location)continue;let l,c=this.contentType(a.content);if(c==="component"||c==="template"){let h=s[o]?.nativeElement;if(!h)continue;l=h}else if(a.content instanceof HTMLElement)l=a.content;else if(typeof a.content=="string")l=a.content;else continue;r.push({ref:a.location,type:"box",contents:l,scale_with_zoom:!1,box_scale:1})}for(let o of i)!o.location||!o.content||r.push({ref:o.location,type:"point",contents:o.content,scale_with_zoom:!0});this._map_viewer.setOverlays(r)}_applyActions(e){if(!this._map_viewer)return;let i=[];for(let s of e){if(!s.id)continue;let r=this._convertActionTypes(s.action);if(r.length===0)continue;let o=a=>{let l=new CustomEvent("mapaction",{detail:{point:a}});s.callback(l,{x:a.x,y:a.y})};i.push({ref:s.id,events:r,callback:o})}this._map_viewer.setActions(i)}_convertActionTypes(e){let i=Array.isArray(e)?e:[e],s=[];for(let r of i)switch(r){case"click":s.push("click");break;case"mousedown":case"touchstart":s.push("pointerdown");break;case"mouseup":case"touchend":s.push("pointerup");break;case"enter":s.push("pointerenter");break;case"leave":s.push("pointerleave");break;case"*":s.push("click","pointerdown","pointerup","pointerenter","pointerleave");break;default:s.push(r)}return[...new Set(s)]}_updateInjectors(){let e=this.injectors||[];this.injectors=(this.features()||[]).map(i=>e.find(s=>s.get(zi)?.track_id&&s.get(zi)?.track_id===i.track_id)||bl.create({providers:[{provide:zi,useValue:ct(ct({track_id:i.track_id},i.data),this._extra_data)}],parent:this._injector}))}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=It({type:n,selectors:[["dynamic-map"]],viewQuery:function(i,s){i&1&&ws(s._map_container,Kx,5)(s._feature_elements,jx,5),i&2&&Es(2)},inputs:{src:[1,"src"],zoom:[1,"zoom"],center:[1,"center"],rotation:[1,"rotation"],mode:[1,"mode"],highResolution:[1,"highResolution"],reset:[1,"reset"],metadata:[1,"metadata"],styles:[1,"styles"],features:[1,"features"],labels:[1,"labels"],actions:[1,"actions"],options:[1,"options"],focus:[1,"focus"]},outputs:{zoom:"zoomChange",center:"centerChange",rotation:"rotationChange",reset:"resetChange",metadata:"metadataChange",mapInfo:"mapInfo"},ngContentSelectors:Qx,decls:5,vars:2,consts:[["mapContainer",""],["feature",""],[1,"absolute","inset-0","z-20"],["zoom","",1,"divide-base-200","border-base-200","bg-base-100","text-base-content","absolute","right-1","bottom-16","z-40","flex","flex-col","divide-y","overflow-hidden","rounded-sm","border","shadow-sm"],["hidden",""],["icon","","matRipple","","matTooltipPosition","left",1,"rounded-none",3,"click","matTooltip"],[1,"z-20","h-full","w-full"],[3,"innerHTML"],[4,"ngComponentOutlet","ngComponentOutletInjector"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,s){if(i&1&&(Jr(),dt(0,"div",2,0),Kr(2),qe(3,tv,13,9,"div",3),qe(4,cv,3,0,"div",4)),i&2){let r;j(3),Ye((r=s.options())!=null&&r.controls?3:-1),j(),Ye(s.injectors!=null&&s.injectors.length?4:-1)}},dependencies:[Fh,Lh,Nh,bi,Ii,di,wd,Sd,Vi,Ed],styles:["[_nghost-%COMP%]{display:block;position:relative;width:100%;height:100%}"]})}}return n})();var hv=["app-explore",""],dv=()=>({controls:!0});function uv(n,t){n&1&&dt(0,"explore-search")}function fv(n,t){n&1&&(Y(0,"div",20),dt(1,"accessibility-controls"),J())}function pv(n,t){if(n&1){let e=ri();Y(0,"button",23),et("click",function(){let s=Gt(e).$implicit,r=Ie(3);return Ht(r.setLevel(s))}),fe(1),J()}if(n&2){let e=t.$implicit;j(),Ze(" ",e.display_name||e.name," ")}}function mv(n,t){if(n&1&&(Y(0,"button",21)(1,"div",13),fe(2,"Level"),J(),Y(3,"icon",12),fe(4,"keyboard_arrow_down"),J()(),Y(5,"mat-menu",null,1),Ui(7,pv,2,1,"button",22,Xn),J()),n&2){let e=yi(6),i=Ie(2);$e("matMenuTriggerFor",e),j(7),Oi(i.levels())}}function _v(n,t){if(n&1&&(Y(0,"div",24),dt(1,"div",25),Y(2,"div",26),fe(3),J()()),n&2){let e=t.$implicit;j(),qn("background-color",e.color),j(2),Ze(" ",e.name," ")}}function gv(n,t){if(n&1&&(Y(0,"button",21)(1,"div",13),fe(2,"Legend"),J(),Y(3,"icon",12),fe(4,"keyboard_arrow_down"),J()(),Y(5,"mat-menu",null,2),Ui(7,_v,4,3,"div",24,Xn),J()),n&2){let e=yi(6),i=Ie(2);$e("matMenuTriggerFor",e),j(7),Oi(i.legend)}}function xv(n,t){if(n&1&&(Y(0,"div",8),qe(1,mv,9,1),qe(2,gv,9,1),J()),n&2){let e=Ie();j(),Ye(e.levels().length?1:-1),j(),Ye(e.legend.length?2:-1)}}function vv(n,t){if(n&1){let e=ri();Y(0,"button",28),et("click",function(){let s=Gt(e).$implicit,r=Ie(2);return Ht(r.setLevel(s))}),Y(1,"div",29),fe(2),J()()}if(n&2){let e,i=t.$implicit,s=Ie(2);dn("opacity-30",i.id!==((e=s.level())==null?null:e.id)),j(2),Ze(" ",i.display_name||i.name," ")}}function yv(n,t){if(n&1){let e=ri();Y(0,"button",11),et("click",function(){Gt(e);let s=Ie();return Ht(s.show_levels.set(!s.show_levels()))}),Y(1,"icon",12),fe(2,"corporate_fare"),J(),Y(3,"div",13),fe(4,"Level"),J(),Y(5,"icon",12),fe(6),J()(),Y(7,"div",14)(8,"div",15),Ui(9,vv,3,3,"button",27,Xn),J()(),dt(11,"hr",16)}if(n&2){let e=Ie();j(6),Mn(e.show_levels()?"keyboard_arrow_up":"keyboard_arrow_down"),j(),$e("@show",e.show_levels()?"show":"hide"),j(2),Oi(e.levels())}}function bv(n,t){if(n&1&&(Y(0,"div",24),dt(1,"div",25),Y(2,"div",26),fe(3),J()()),n&2){let e=t.$implicit;j(),qn("background-color",e.color),j(2),Ze(" ",e.name," ")}}function Mv(n,t){if(n&1){let e=ri();Y(0,"button",11),et("click",function(){Gt(e);let s=Ie();return Ht(s.show_legend.set(!s.show_legend()))}),Y(1,"icon",12),fe(2,"place"),J(),Y(3,"div",13),fe(4,"Legend"),J(),Y(5,"icon",12),fe(6),J()(),Y(7,"div",14)(8,"div",15),Ui(9,bv,4,3,"div",24,Xn),J()(),dt(11,"hr",16)}if(n&2){let e=Ie();j(6),Mn(e.show_legend()?"keyboard_arrow_up":"keyboard_arrow_down"),j(),$e("@show",e.show_legend()?"show":"hide"),j(2),Oi(e.legend)}}var gl=(()=>{class n extends Lt{constructor(){super(...arguments),this._state=ge(Jt),this._s=ge(vo),this._desks=ge(Mo),this._zones=ge(wo),this._parking=ge(So),this._settings=ge(Xt),this._org=ge(jt),this._spaces=ge(Al),this._dialog=ge(Ds),this._route=ge(co),this._router=ge(ho),this._space_pipe=ge(mo),this._maps=ge(hr),this.reset_delay=180,this.show_levels=Ue(!0),this.show_legend=Ue(!1),this.show_accessibility=Ue(!1),this.legend=[{id:"free",name:"Space Available",color:"#43a047"},{id:"busy",name:"Space In Use",color:"#e53935"},{id:"pending",name:"Space Pending",color:"#ffb300"},{id:"not-bookable",name:"Space Not-bookable",color:"#ccc"}],this.levels=Ut(xt([this._org.active_region,this._org.active_building]).pipe(Xe(([e,i])=>(this._settings.get("app.use_region")?Zn(this._org.buildings.filter(s=>e.id===s.parent_id).map(s=>this._org.levelsForBuilding(s).map(r=>ni(ct({},r),{display_name:`${s.display_name} - ${r.display_name}`})))):this._org.levelsForBuilding(i))||[])),{initialValue:[]}),this.level=Ut(this._state.level,{initialValue:void 0}),this.logo=Ft(()=>this._settings.theme_signal()==="dark"?this._settings.signal("logo_dark")():this._settings.signal("logo_light")()),this.legend_visible=Ft(()=>this._settings.signal("explore.show_legend")()!==!1),this.hide_zones=this._settings.signal("explore.hide_zones"),this.url=Ut(this._state.map_url,{initialValue:""}),this.styles=Ut(this._state.map_styles,{initialValue:{text:{display:"none"}}}),this.positions=Ut(this._state.map_positions,{initialValue:this._state.positions}),this.features=Ut(this._state.map_features,{initialValue:[]}),this.actions=Ut(this._state.map_actions,{initialValue:[]}),this.labels=Ut(this._state.map_labels,{initialValue:[]}),this.options=this._state.options,this.locate=Ue(""),this.isometric=cr("show_isometric"),this.onMouse=()=>this.timeout("reset",()=>this.resetKiosk(),this.reset_delay*1e3),this.onTouch=()=>this.timeout("reset",()=>this.resetKiosk(),this.reset_delay*1e3),this.setOptions=e=>this._state.setOptions(e),this.setLevel=e=>this._state.setLevel(e.id),this.can_search=Ft(()=>!!this._settings.signal("explore.search_enabled")()),this.use_mapsindoors$=this._maps.available$}updateZoom(e){this._state.setPositions(e,this._state.positions.center)}updateCenter(e){this._state.setPositions(this._state.positions.zoom,e)}async toggleZones(e){let i=await oi(this.options),s=e?i.disable.filter(r=>r!=="zones"&&r!=="devices")||[]:ro([...i.disable||[],"zones","devices"]);this.setOptions({disable:s})}async ngOnInit(){(location.hash.includes("public=true")||location.search.includes("public=true"))&&this._state.setOptions({is_public:!0}),await this._spaces.initialised.pipe(bs(e=>e)).toPromise(),this._desks.setOptions({custom:!0}),this.reset_delay=this._settings.get("app.inactivity_timeout_secs")||180,this.resetKiosk(!1),_o.enabled=localStorage.getItem("OSK.enabled")==="true",this.subscription("level",this._state.level.subscribe(()=>this.timeout("update_location",()=>{this._state.setFeatures("_located",[])}))),this.subscription("route.query",this._route.queryParamMap.subscribe(async e=>{if(e.has("level")){Ps("Explore","Level changed to:",e.get("level")),this._state.setLevel(e.get("level"));let i=this._org.levelWithID([e.get("level")]);if(!i)return;let s=this._org.buildings.find(r=>i.parent_id===r.id);if(!s)return;this._org.building=s}if(this._state.setFeatures("_located",[]),e.has("space"))Ps("Explore","Focusing on space:",e.get("space")),this.locateSpace(e.get("space"));else if(e.has("user")){Ps("Explore","Focusing on user:",e.get("user"));let i=this._settings.value("last_search");if((!i||e.get("user")!==i.email)&&(i=null,i=await Rl(e.get("user")).toPromise()),!i)return Wt(`Unable to user details for ${e.get("user")}`);this.locateUser(i instanceof Array?i[0]:i).catch(s=>{Wt(`Unable to locate ${e.get("user")}`),this._router.navigate([],{relativeTo:this._route,queryParams:{}})})}else e.has("feature")?(Ps("Explore","Focusing on feature:",e.get("feature")),this.timeout("update_location",()=>{this._state.setFeatures("_located",[{location:e.get("feature"),content:Ls,data:{}}])})):e.has("locate")?(Ps("Explore","Focusing on location:",e.get("locate")),this.locate.set(e.get("locate")),this.timeout("update_location",()=>{this._state.setFeatures("_located",[{location:e.get("locate"),content:Ls,data:{}}])})):this.timeout("update_location",()=>{this._state.setFeatures("_located",[])})}))}async locateSpace(e){let i=await this._space_pipe.transform(e);if(!i)return;this._state.setLevel(this._org.levelWithID(i.zones)?.id);let s={location:i.map_id,content:Ls,data:{message:`${i.display_name||i.name} is here`}};this.timeout("update_location",()=>this._state.setFeatures("_located",[s]))}async locateUser(e){let i=this._org.binding("location_services");if(!i)return;typeof i=="string"&&(i={system_id:i,module:"LocationServices"});let r=(await no(i.system_id,i.module).execute("locate_user",[e.email,e.username||e.id])).map(c=>new Il(c));if(r.sort((c,h)=>i.priority.indexOf(c.type)-i.priority.indexOf(h.type)),!r?.length)throw"No locations for the given user";this._state.setLevel(this._org.levelWithID([r[0]?.level])?.id);let o=r[0].position,{coordinates_from:a}=r[0],l={location:r[0].type==="wireless"?{x:a?.includes("right")?1-o.x:o.x,y:a?.includes("bottom")?1-o.y:o.y}:o,content:r[0].type==="wireless"?Cl:Ls,z_index:99,data:{message:`${e.name} is here`,radius:r[0].variance,last_seen:r[0].last_seen}};this.timeout("update_location",()=>{this._state.setFeatures("_located",[l])})}resetKiosk(e=!0){document.activeElement?.blur&&document.activeElement?.blur();let i=localStorage.getItem("KIOSK.level");this._state.setPositions(1,this.isometric()?{x:0,y:0}:{x:.5,y:.5}),i&&this._state.setLevel(i),this._dialog.closeAll(),e&&this._router.navigate(["/"])}static{this.\u0275fac=(()=>{let e;return function(s){return(e||(e=$r(n)))(s||n)}})()}static{this.\u0275cmp=It({type:n,selectors:[["","app-explore",""]],hostBindings:function(i,s){i&1&&et("mousedown",function(){return s.onMouse()},cn)("touchstart",function(){return s.onTouch()},cn)},features:[jr([vo,Mo,wo,So,mo]),Ki],attrs:hv,decls:29,vars:19,consts:[["accessibility_controls",""],["levelMenu","matMenu"],["legendMenu","matMenu"],["topbar","",1,"border-base-300","bg-base-100","text-base-content","relative","flex","items-center","justify-between","border-b","px-4","py-2"],["matRipple","","routerLink","/",1,"rounded-sm","p-2","text-2xl"],["auth","","alt","Logo",1,"h-12",3,"source"],[1,"absolute","top-1/2","right-2","flex","-translate-y-1/2","items-center"],["icon","","matRipple","","customTooltip","",1,"bg-base-200","flex","sm:hidden",3,"content"],["options","",1,"bg-base-content","text-base-100","flex","items-center","space-x-2","p-2","sm:hidden"],[1,"flex","h-1/2","flex-1"],["sidebar","",1,"border-base-300","bg-base-100","text-base-content","hidden","w-[20rem]","overflow-auto","border-r","px-2","py-4","sm:block"],["btn","","matRipple","",1,"items","clear","hover:bg-base-200","flex","w-full","space-x-4",3,"click"],[1,"text-2xl"],[1,"flex-1","text-left","font-medium"],[1,"px-8"],[1,"space-y-2","py-4"],[1,"mx-auto","w-[calc(100%-4rem)]"],[1,"relative","h-full","flex-1"],[1,"absolute","inset-0"],[3,"zoomChange","centerChange","src","zoom","center","styles","features","actions","labels","options","focus","mode"],[1,"bg-base-100","w-[18rem]","rounded-sm","p-2"],["btn","","matRipple","",1,"clear","text-base-100",3,"matMenuTriggerFor"],["mat-menu-item",""],["mat-menu-item","",3,"click"],[1,"hover:bg-base-200","flex","w-full","items-center","space-x-4","rounded-sm","px-4","py-2"],[1,"h-3","w-3","rounded-full"],[1,"text-left","opacity-60"],["btn","","matRipple","",1,"clear","hover:bg-base-200","w-full","hover:opacity-100",3,"opacity-30"],["btn","","matRipple","",1,"clear","hover:bg-base-200","w-full","hover:opacity-100",3,"click"],[1,"w-full","text-left"]],template:function(i,s){if(i&1&&(Y(0,"div",3)(1,"a",4),dt(2,"img",5),J(),Y(3,"div",6),qe(4,uv,1,0,"explore-search"),Y(5,"button",7)(6,"icon"),fe(7,"accessible"),J()(),hn(8,fv,2,0,"ng-template",null,0,Ts),J()(),qe(10,xv,3,2,"div",8),Y(11,"div",9)(12,"div",10),qe(13,yv,12,2),qe(14,Mv,12,2),Y(15,"button",11),et("click",function(){return s.show_accessibility.set(!s.show_accessibility())}),Y(16,"icon",12),fe(17,"accessible"),J(),Y(18,"div",13),fe(19," Accessibility "),J(),Y(20,"icon",12),fe(21),J()(),Y(22,"div",14)(23,"div",15),dt(24,"accessibility-controls"),J()(),dt(25,"hr",16),J(),Y(26,"div",17)(27,"div",18)(28,"dynamic-map",19),et("zoomChange",function(o){return s.updateZoom(o)})("centerChange",function(o){return s.updateCenter(o)}),J()()()()),i&2){let r,o,a,l=yi(9);j(2),$e("source",((r=s.logo())==null?null:r.src)||s.logo()),j(2),Ye(s.can_search()?4:-1),j(),$e("content",l),j(5),Ye(s.levels().length||s.legend.length?10:-1),j(3),Ye(s.levels().length?13:-1),j(),Ye(s.legend.length&&s.legend_visible()?14:-1),j(7),Mn(s.show_accessibility()?"keyboard_arrow_up":"keyboard_arrow_down"),j(),$e("@show",s.show_accessibility()?"show":"hide"),j(6),$e("src",s.url())("zoom",(o=s.positions())==null?null:o.zoom)("center",(a=s.positions())==null?null:a.center)("styles",s.styles())("features",s.features())("actions",s.actions())("labels",s.labels())("options",Qr(18,dv))("focus",s.locate())("mode",s.isometric()?"3d":"2d")}},dependencies:[bo,Ii,di,bi,Tl,Jn,uo,td,yd,xd,gd,vd,Ul,Af],styles:["[_nghost-%COMP%]{position:absolute;display:flex;flex-direction:column;inset:0;background-color:var(--base-200)}hr[_ngcontent-%COMP%]{margin-top:.5rem!important;margin-bottom:.5rem!important}"],data:{animation:[ed]}})}}return n})();var Sv=[{path:"",component:gl},{path:":search_type",component:gl}],wv=[gl,qd,bo],LA=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=Zr({type:n})}static{this.\u0275inj=Yr({imports:[uo.forChild(Sv),wv]})}}return n})();export{LA as AppExploreModule};
