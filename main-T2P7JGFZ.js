import{n as m,t as l}from"./chunk-BiC_2twR.js";import{$n as ZA,$t as QY,An as Vd,Ao as zj,Bn as X3,Bt as OF,C as Be$1,Co as yt$1,Ct as Lhe,D as CEe,Da as qf,Di as jm,Dn as VA,E as CC,Ea as qe$1,Ei as jh,En as V3,Et as Lt$1,F as ED,Fa as s0,Fi as ki$1,Fn as WW,Ft as Nl,Gi as ll,Gt as PTe,Hr as ez,Ht as Ohe,I as EIe,Ia as s8,Ii as kn$1,J as Gd,Ji as m3,Jn as Yn$1,Jr as ft$2,Ki as lr$1,Kn as YW,Kr as fe,Kt as Pc,L as Ei$1,La as sT,Ln as Wf,M as DEe,Mn as Vt$1,Mo as zn$1,Mr as de$1,Mt as Na,N as Do,Oa as qn$1,Oi as jr,Oo as zc,Or as cT,Ot as MA,P as E0,Pn as WRe,Pr as ds,Q as H$e,Qa as us,Qi as mIe,R as F$1,Rn as Wr,Rt as O$1,Sa as qM,Sn as Ue,Sr as bje,St as LS,T as Bm,Ti as jg,Tt as Lo,Ui as lY,Ur as fD,V as FS,Vt as OP,Wa as tt$1,Wi as le,Wr as fNe,Wt as Ot$1,X as Gt$1,Xa as ue,Xt as Q$2,Ya as uY,Yn as Yr,Yr as g,Z as H$1,Za as ul,Zn as Z$1,_ as Ao,_a as p2e,_i as iH,_n as Tje,_o as xo$1,ai as gn$1,an as R,ao as vo,at as Ije,b as BJ,bi as ie$2,bo as yje,br as b_,bt as LB,ca as nE,ci as h3,cn as S2,co as w0,ct as JY,d as $t,da as o0,dn as Sx,do as wn$1,dr as _Ie,dt as Jr,ea as me,ei as gD,eo as v2,et as HGe,f as AEe,fn as T$1,fo as wt$1,fr as _e$1,gi as iD,gn as TT,gt as Ka,h as Aje,hi as hx,hn as TN,ho as xY,hr as a0,i as $P,ii as gi$1,io as vn$1,ir as Zg,it as I$1,j as DC,ja as rK,ji as kA,jn as Ve,jo as zk,k as Che,ka as qt$1,kn as VJ,ko as ze,kr as cr$1,la as n_,li as hD,lt as Jb,m as AN,ma as oNe,mi as ht$3,mn as TI,mr as _r,na as mn$1,ni as gIe,nn as Ql,no as va,oa as n8,oi as gr,on as REe,p as AK,pi as hn$1,pn as T6,pr as _i$1,pt as KH,qa as uH,qi as m0,r as $Ge,ri as gT,rn as Qn$1,ro as vje,rt as Ht$1,s as $h,sa as n9,si as gt$2,sn as S0,so as w,sr as _9,st as JRe,t as $$1,ta as mi$1,ti as gH,tn as Qk,tt as HY,u as $r,ua as nu,ui as hDe,uo as whe,ut as Jl,v as B3,va as pI,vi as iT,vn as Tt$1,vt as Kf,wo as z$1,wr as c8,wt as Ln$1,x as BN,xi as j3,xr as bf,xt as LEe,yo as yF,yr as b,yt as Kn$1,zn as X,zr as eH,zt as OEe}from"./chunk-CdC1DvXi.js";function z(n,d){n&1&&mi$1(0,`div`,2)}var A$1=new b(`MAT_PROGRESS_BAR_DEFAULT_OPTIONS`);var L=(()=>{class n{_elementRef=g(ue);_ngZone=g(X);_changeDetectorRef=g(gn$1);_renderer=g(ht$3);_cleanupTransitionEnd;constructor(){let r=_9(),e=g(A$1,{optional:!0});this._isNoopAnimation=r===`di-disabled`,r===`reduced-motion`&&this._elementRef.nativeElement.classList.add(`mat-progress-bar-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),this.mode=e.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(r){this._color=r}_color;_defaultColor=`primary`;get value(){return this._value}set value(r){this._value=M(r||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(r){this._bufferValue=M(r||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new le;get mode(){return this._mode}set mode(r){this._mode=r,this._changeDetectorRef.markForCheck()}_mode=`determinate`;ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode===`buffer`?this.bufferValue:100}%`}_isIndeterminate(){return this.mode===`indeterminate`||this.mode===`query`}_transitionendHandler=r=>{this.animationEnd.observers.length===0||!r.target||!r.target.classList.contains(`mdc-linear-progress__primary-bar`)||(this.mode===`determinate`||this.mode===`buffer`)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static ɵfac=function(e){return new(e||n)};static ɵcmp=Ve({type:n,selectors:[[`mat-progress-bar`]],hostAttrs:[`role`,`progressbar`,`aria-valuemin`,`0`,`aria-valuemax`,`100`,`tabindex`,`-1`,1,`mat-mdc-progress-bar`,`mdc-linear-progress`],hostVars:10,hostBindings:function(e,a){e&2&&(zn$1(`aria-valuenow`,a._isIndeterminate()?null:a.value)(`mode`,a.mode),Vd(`mat-`+a.color),gt$2(`_mat-animation-noopable`,a._isNoopAnimation)(`mdc-linear-progress--animation-ready`,!a._isNoopAnimation)(`mdc-linear-progress--indeterminate`,a._isIndeterminate()))},inputs:{color:`color`,value:[2,`value`,`value`,TT],bufferValue:[2,`bufferValue`,`bufferValue`,TT],mode:`mode`},outputs:{animationEnd:`animationEnd`},exportAs:[`matProgressBar`],decls:7,vars:5,consts:[[`aria-hidden`,`true`,1,`mdc-linear-progress__buffer`],[1,`mdc-linear-progress__buffer-bar`],[1,`mdc-linear-progress__buffer-dots`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__primary-bar`],[1,`mdc-linear-progress__bar-inner`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__secondary-bar`]],template:function(e,a){e&1&&(gr(0,`div`,0),mi$1(1,`div`,1),Kn$1(2,z,1,0,`div`,2),_r(),gr(3,`div`,3),mi$1(4,`span`,4),_r(),gr(5,`div`,5),mi$1(6,`span`,4),_r()),e&2&&(Tt$1(),sT(`flex-basis`,a._getBufferBarFlexBasis()),Tt$1(),qn$1(a.mode===`buffer`?2:-1),Tt$1(),sT(`transform`,a._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --%NS%mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --%NS%mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--%NS%mat-progress-bar-track-height, 4px), var(--%NS%mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--%NS%mat-progress-bar-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--%NS%mat-progress-bar-track-height, 4px);
  border-radius: var(--%NS%mat-progress-bar-track-shape, var(--%NS%mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant)) calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--%NS%mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2})}return n})();function M(n,d=0,r=100){return Math.max(d,Math.min(r,n))}var Z=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=_e$1({type:n});static ɵinj=fe({imports:[vn$1]})}return n})();var qe=class{_box;_destroyed=new w;_resizeSubject=new w;_resizeObserver;_elementObservables=new Map;constructor(e){this._box=e,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)))}observe(e){return this._elementObservables.has(e)||this._elementObservables.set(e,new $$1(t=>{let i=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(e,{box:this._box}),()=>{this._resizeObserver?.unobserve(e),i.unsubscribe(),this._elementObservables.delete(e)}}).pipe(Ue(t=>t.some(i=>i.target===e)),AN({bufferSize:1,refCount:!0}),cr$1(this._destroyed))),this._elementObservables.get(e)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var cn=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=g(X);constructor(){}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(t,i){let r=i?.box||`content-box`;return this._observers.has(r)||this._observers.set(r,new qe(r)),this._observers.get(r).observe(t)}static ɵfac=function(i){return new(i||n)};static ɵprov=O$1({token:n,factory:n.ɵfac})}return n})();var Jn=[`notch`];var ei=[`*`];var fn=[`iconPrefixContainer`];var un=[`textPrefixContainer`];var mn=[`iconSuffixContainer`];var hn=[`textSuffixContainer`];var ti=[`textField`];var ni=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]];var ii=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function ri(n,e){n&1&&Ao(0,`span`,21)}function oi(n,e){if(n&1&&(jr(0,`label`,20),mn$1(1,1),Kn$1(2,ri,1,0,`span`,21),$r()),n&2){let t=Wr(2);ll(`floating`,t._shouldLabelFloat())(`monitorResize`,t._hasOutline())(`id`,t._labelId),zn$1(`for`,t._control.disableAutomaticLabeling?null:t._control.id),Tt$1(2),qn$1(!t.hideRequiredMarker&&t._control.required?2:-1)}}function ai(n,e){if(n&1&&Kn$1(0,oi,3,5,`label`,20),n&2)qn$1(Wr()._hasFloatingLabel()?0:-1)}function di(n,e){n&1&&Ao(0,`div`,7)}function li(n,e){}function si(n,e){if(n&1&&Bm(0,li,0,0,`ng-template`,13),n&2){Wr(2);ll(`ngTemplateOutlet`,uY(1))}}function ci(n,e){if(n&1&&(jr(0,`div`,9),Kn$1(1,si,1,1,null,13),$r()),n&2){let t=Wr();ll(`matFormFieldNotchedOutlineOpen`,t._shouldLabelFloat()),Tt$1(),qn$1(t._forceDisplayInfixLabel()?-1:1)}}function fi(n,e){n&1&&(jr(0,`div`,10,2),mn$1(2,2),$r())}function ui(n,e){n&1&&(jr(0,`div`,11,3),mn$1(2,3),$r())}function mi(n,e){}function hi(n,e){if(n&1&&Bm(0,mi,0,0,`ng-template`,13),n&2){Wr();ll(`ngTemplateOutlet`,uY(1))}}function pi(n,e){n&1&&(jr(0,`div`,14,4),mn$1(2,4),$r())}function gi(n,e){n&1&&(jr(0,`div`,15,5),mn$1(2,5),$r())}function bi(n,e){n&1&&Ao(0,`div`,16)}function vi(n,e){n&1&&(jr(0,`div`,18),mn$1(1,6),$r())}function yi(n,e){if(n&1&&(jr(0,`mat-hint`,22),ds(1),$r()),n&2){let t=Wr(2);ll(`id`,t._hintLabelId),Tt$1(),m0(t.hintLabel)}}function _i(n,e){if(n&1&&(jr(0,`div`,19),Kn$1(1,yi,2,2,`mat-hint`,22),mn$1(2,7),Ao(3,`div`,23),mn$1(4,8),$r()),n&2){let t=Wr();Tt$1(),qn$1(t.hintLabel?1:-1)}}var We=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=Z$1({type:n,selectors:[[`mat-label`]]})}return n})();var xn=new b(`MatError`);var xi=(()=>{class n{id=g(ki$1).getId(`mat-mdc-error-`);static ɵfac=function(i){return new(i||n)};static ɵdir=Z$1({type:n,selectors:[[`mat-error`],[``,`matError`,``]],hostAttrs:[1,`mat-mdc-form-field-error`,`mat-mdc-form-field-bottom-align`],hostVars:1,hostBindings:function(i,r){i&2&&ul(`id`,r.id)},inputs:{id:`id`},features:[Qn$1([{provide:xn,useExisting:n}])]})}return n})();var Ge=(()=>{class n{align=`start`;id=g(ki$1).getId(`mat-mdc-hint-`);static ɵfac=function(i){return new(i||n)};static ɵdir=Z$1({type:n,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(i,r){i&2&&(ul(`id`,r.id),zn$1(`align`,null),gt$2(`mat-mdc-form-field-hint-end`,r.align===`end`))},inputs:{align:`align`,id:`id`}})}return n})();var Sn=new b(`MatPrefix`);var Si=(()=>{class n{set _isTextSelector(t){this._isText=!0}_isText=!1;static ɵfac=function(i){return new(i||n)};static ɵdir=Z$1({type:n,selectors:[[``,`matPrefix`,``],[``,`matIconPrefix`,``],[``,`matTextPrefix`,``]],inputs:{_isTextSelector:[0,`matTextPrefix`,`_isTextSelector`]},features:[Qn$1([{provide:Sn,useExisting:n}])]})}return n})();var Nn=new b(`MatSuffix`);var Ni=(()=>{class n{set _isTextSelector(t){this._isText=!0}_isText=!1;static ɵfac=function(i){return new(i||n)};static ɵdir=Z$1({type:n,selectors:[[``,`matSuffix`,``],[``,`matIconSuffix`,``],[``,`matTextSuffix`,``]],inputs:{_isTextSelector:[0,`matTextSuffix`,`_isTextSelector`]},features:[Qn$1([{provide:Nn,useExisting:n}])]})}return n})();var wn=new b(`FloatingLabelParent`);var pn=(()=>{class n{_elementRef=g(ue);get floating(){return this._floating}set floating(t){this._floating=t,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(t){this._monitorResize=t,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=g(cn);_ngZone=g(X);_parent=g(wn);_resizeSubscription=new me;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return wi(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(i){return new(i||n)};static ɵdir=Z$1({type:n,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(i,r){i&2&&gt$2(`mdc-floating-label--float-above`,r.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return n})();function wi(n){let e=n;if(e.offsetParent!==null)return e.scrollWidth;let t=e.cloneNode(!0);t.style.setProperty(`position`,`absolute`),t.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(t);let i=t.scrollWidth;return t.remove(),i}var gn=`mdc-line-ripple--active`;var pe=`mdc-line-ripple--deactivating`;var bn=(()=>{class n{_elementRef=g(ue);_cleanupTransitionEnd;constructor(){let t=g(X),i=g(ht$3);t.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let t=this._elementRef.nativeElement.classList;t.remove(pe),t.add(gn)}deactivate(){this._elementRef.nativeElement.classList.add(pe)}_handleTransitionEnd=t=>{let i=this._elementRef.nativeElement.classList,r=i.contains(pe);t.propertyName===`opacity`&&r&&i.remove(gn,pe)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(i){return new(i||n)};static ɵdir=Z$1({type:n,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return n})();var vn=(()=>{class n{_elementRef=g(ue);_ngZone=g(X);open=!1;_notch;ngAfterViewInit(){let t=this._elementRef.nativeElement,i=t.querySelector(`.mdc-floating-label`);i?(t.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(i.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration=``)}))):t.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(t){let i=this._notch.nativeElement;!this.open||!t?i.style.width=``:i.style.width=`calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(t){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${t}px)`)}static ɵfac=function(i){return new(i||n)};static ɵcmp=Ve({type:n,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(i,r){if(i&1&&va(Jn,5),i&2){let o;gi$1(o=_i$1())&&(r._notch=o.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(i,r){i&2&&gt$2(`mdc-notched-outline--notched`,r.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:ei,decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(i,r){i&1&&(Yr(),mi$1(0,`div`,1),gr(1,`div`,2,0),mn$1(3),_r(),mi$1(4,`div`,3))},encapsulation:2})}return n})();var Mi=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static ɵfac=function(i){return new(i||n)};static ɵdir=Z$1({type:n})}return n})();var Ci=new b(`MatFormField`);var Ei=new b(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var yn=`fill`;var Fi=`auto`;var _n=`fixed`;var Ri=`translateY(-50%)`;var Mn=(()=>{class n{_elementRef=g(ue);_changeDetectorRef=g(gn$1);_platform=g(qe$1);_idGenerator=g(ki$1);_ngZone=g(X);_defaults=g(Ei,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Ohe(`iconPrefixContainer`);_textPrefixContainerSignal=Ohe(`textPrefixContainer`);_iconSuffixContainerSignal=Ohe(`iconSuffixContainer`);_textSuffixContainerSignal=Ohe(`textSuffixContainer`);_prefixSuffixContainers=de$1(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(t=>t?.nativeElement).filter(t=>t!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=whe(We);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(t){this._hideRequiredMarker=JRe(t)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Fi}set floatLabel(t){t!==this._floatLabel&&(this._floatLabel=t,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(t){let i=t||this._defaults?.appearance||yn;this._appearanceSignal.set(i)}_appearanceSignal=I$1(yn);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||_n}set subscriptSizing(t){this._subscriptSizing=t||this._defaults?.subscriptSizing||_n}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(t){this._hintLabel=t,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(t){this._explicitFormFieldControl=t}_destroyed=new w;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Jr();constructor(){let t=this._defaults,i=g(Jl);t&&(t.appearance&&(this.appearance=t.appearance),this._hideRequiredMarker=!!t?.hideRequiredMarker,t.color&&(this.color=t.color)),qt$1(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=de$1(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(t){let i=this._control,r=`mat-mdc-form-field-type-`;t&&this._elementRef.nativeElement.classList.remove(r+t.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(Pc([void 0,void 0]),ie$2(()=>[i.errorState,i.userAriaDescribedBy]),TN(),Ue(([[o,a],[l,s]])=>o!==l||a!==s)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(cr$1(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(t=>!t._isText),this._hasTextPrefix=!!this._prefixChildren.find(t=>t._isText),this._hasIconSuffix=!!this._suffixChildren.find(t=>!t._isText),this._hasTextSuffix=!!this._suffixChildren.find(t=>t._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),KH(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let t=this._control.focused;t&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!t&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,t),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,t)}_syncOutlineLabelOffset(){Lhe({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let t of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(t,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:t=>this._writeOutlinedLabelStyles(t())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=de$1(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(t){let i=this._control?this._control.ngControl:null;return i&&i[t]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let t=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&t.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let o=this._hintChildren?this._hintChildren.find(l=>l.align===`start`):null,a=this._hintChildren?this._hintChildren.find(l=>l.align===`end`):null;o?t.push(o.id):this._hintLabel&&t.push(this._hintLabelId),a&&t.push(a.id)}else this._errorChildren&&t.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||t;r=t.concat(i.filter(a=>a&&!o.includes(a)))}else r=t;this._control.setDescribedByIds(r),this._describedByIds=t}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let t=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=t?.getBoundingClientRect().width??0,l=i?.getBoundingClientRect().width??0,s=r?.getBoundingClientRect().width??0,u=o?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${Ri} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${a+l}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,a+l+s+u]}_writeOutlinedLabelStyles(t){if(t!==null){let[i,r]=t;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let t=this._elementRef.nativeElement;if(t.getRootNode){let i=t.getRootNode();return i&&i!==t}return document.documentElement.contains(t)}static ɵfac=function(i){return new(i||n)};static ɵcmp=Ve({type:n,selectors:[[`mat-form-field`]],contentQueries:function(i,r,o){if(i&1&&(s0(o,r._labelChild,We,5),jm(o,Mi,5)(o,Sn,5)(o,Nn,5)(o,xn,5)(o,Ge,5)),i&2){lY();let a;gi$1(a=_i$1())&&(r._formFieldControl=a.first),gi$1(a=_i$1())&&(r._prefixChildren=a),gi$1(a=_i$1())&&(r._suffixChildren=a),gi$1(a=_i$1())&&(r._errorChildren=a),gi$1(a=_i$1())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(a0(r._iconPrefixContainerSignal,fn,5)(r._textPrefixContainerSignal,un,5)(r._iconSuffixContainerSignal,mn,5)(r._textSuffixContainerSignal,hn,5),va(ti,5)(fn,5)(un,5)(mn,5)(hn,5)(pn,5)(vn,5)(bn,5)),i&2){lY(4);let o;gi$1(o=_i$1())&&(r._textField=o.first),gi$1(o=_i$1())&&(r._iconPrefixContainer=o.first),gi$1(o=_i$1())&&(r._textPrefixContainer=o.first),gi$1(o=_i$1())&&(r._iconSuffixContainer=o.first),gi$1(o=_i$1())&&(r._textSuffixContainer=o.first),gi$1(o=_i$1())&&(r._floatingLabel=o.first),gi$1(o=_i$1())&&(r._notchedOutline=o.first),gi$1(o=_i$1())&&(r._lineRipple=o.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(i,r){i&2&&gt$2(`mat-mdc-form-field-label-always-float`,r._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,r._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,r._hasIconSuffix)(`mat-form-field-invalid`,r._control.errorState)(`mat-form-field-disabled`,r._control.disabled)(`mat-form-field-autofilled`,r._control.autofilled)(`mat-form-field-appearance-fill`,r.appearance==`fill`)(`mat-form-field-appearance-outline`,r.appearance==`outline`)(`mat-form-field-hide-placeholder`,r._hasFloatingLabel()&&!r._shouldLabelFloat())(`mat-primary`,r.color!==`accent`&&r.color!==`warn`)(`mat-accent`,r.color===`accent`)(`mat-warn`,r.color===`warn`)(`ng-untouched`,r._shouldForward(`untouched`))(`ng-touched`,r._shouldForward(`touched`))(`ng-pristine`,r._shouldForward(`pristine`))(`ng-dirty`,r._shouldForward(`dirty`))(`ng-valid`,r._shouldForward(`valid`))(`ng-invalid`,r._shouldForward(`invalid`))(`ng-pending`,r._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[Qn$1([{provide:Ci,useExisting:n},{provide:wn,useExisting:n}])],ngContentSelectors:ii,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(i,r){if(i&1&&(Yr(ni),Bm(0,ai,1,1,`ng-template`,null,0,JY),jr(2,`div`,6,1),Ht$1(`click`,function(a){return r._control.onContainerClick(a)}),Kn$1(4,di,1,0,`div`,7),jr(5,`div`,8),Kn$1(6,ci,2,2,`div`,9),Kn$1(7,fi,3,0,`div`,10),Kn$1(8,ui,3,0,`div`,11),jr(9,`div`,12),Kn$1(10,hi,1,1,null,13),mn$1(11),$r(),Kn$1(12,pi,3,0,`div`,14),Kn$1(13,gi,3,0,`div`,15),$r(),Kn$1(14,bi,1,0,`div`,16),$r(),jr(15,`div`,17),Kn$1(16,vi,2,0,`div`,18)(17,_i,5,1,`div`,19),$r()),i&2){let o;Tt$1(2),gt$2(`mdc-text-field--filled`,!r._hasOutline())(`mdc-text-field--outlined`,r._hasOutline())(`mdc-text-field--no-label`,!r._hasFloatingLabel())(`mdc-text-field--disabled`,r._control.disabled)(`mdc-text-field--invalid`,r._control.errorState),Tt$1(2),qn$1(!r._hasOutline()&&!r._control.disabled?4:-1),Tt$1(2),qn$1(r._hasOutline()?6:-1),Tt$1(),qn$1(r._hasIconPrefix?7:-1),Tt$1(),qn$1(r._hasTextPrefix?8:-1),Tt$1(2),qn$1(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),Tt$1(2),qn$1(r._hasTextSuffix?12:-1),Tt$1(),qn$1(r._hasIconSuffix?13:-1),Tt$1(),qn$1(r._hasOutline()?-1:14),Tt$1(),gt$2(`mat-mdc-form-field-subscript-dynamic-size`,r.subscriptSizing===`dynamic`);let a=r._getSubscriptMessageType();Tt$1(),qn$1((o=a)===`error`?16:o===`hint`?17:-1)}},dependencies:[pn,vn,rK,bn,Ge],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})}return n})();var Br=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=_e$1({type:n});static ɵinj=fe({imports:[OF,Mn,vn$1]})}return n})();var Tn=Symbol(`FIELD_TREE`);var $e=0;function Ti(){return $e}function A(n,e){return(...t)=>{try{return $e=e,n(...t)}finally{$e=0}}}function Di(n){return!n}function Cn(n){return n}function O(n){return Array.isArray(n)}function be(n){return(typeof n==`object`||typeof n==`function`)&&n!=null}var B=Symbol();var Me=Symbol();var ie$1=class{predicates;fns=[];constructor(e){this.predicates=e}push(e){this.fns.push(En(this.predicates,e))}mergeIn(e){let t=this.predicates?e.fns.map(i=>En(this.predicates,i)):e.fns;this.fns.push(...t)}hasRules(){return this.fns.length>0}};var ve=class extends ie$1{get defaultValue(){return!1}compute(e){return this.fns.some(t=>{let i=t(e);return i&&i!==Me})}};var q=class n extends ie$1{ignore;static ignoreNull(e){return new n(e,t=>t===null)}constructor(e,t){super(e),this.ignore=t}get defaultValue(){return[]}compute(e){return this.fns.reduce((t,i)=>{let r=i(e);return r===void 0||r===Me?t:O(r)?[...t,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?t:[...t,r]},[])}};var Qe=class extends q{constructor(e){super(e,void 0)}};var Ye=class extends ie$1{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(e,t){super(e),this.key=t}compute(e){if(this.fns.length===0)return this.key.reducer.getInitial();let t=this.key.reducer.getInitial();for(let i=0;i<this.fns.length;i++){let r=this.fns[i](e);r!==Me&&(t=this.key.reducer.reduce(t,r))}return t}};function En(n,e){return n.length===0?e:t=>{for(let i of n){let r=t.stateOf(i.path),o=F$1(r.structure.pathKeys).length-i.depth;for(let a=0;a<o;a++)r=r.structure.parent;if(!i.fn(r.context))return Me}return e(t)}}var U=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(e){this.predicates=e,this.hidden=new ve(e),this.disabledReasons=new Qe(e),this.readonly=new ve(e),this.syncErrors=q.ignoreNull(e),this.syncTreeErrors=q.ignoreNull(e),this.asyncErrors=q.ignoreNull(e)}hasAnyLogic(){return this.hidden.hasRules()||this.disabledReasons.hasRules()||this.readonly.hasRules()||this.syncErrors.hasRules()||this.syncTreeErrors.hasRules()||this.asyncErrors.hasRules()||this.metadata.size>0}hasMetadata(e){return this.metadata.has(e)}hasMetadataKeys(){return this.metadata.size>0}getMetadataKeys(){return this.metadata.keys()}getMetadata(e){return this.metadata.has(e)||this.metadata.set(e,new Ye(this.predicates,e)),this.metadata.get(e)}mergeIn(e){this.hidden.mergeIn(e.hidden),this.disabledReasons.mergeIn(e.disabledReasons),this.readonly.mergeIn(e.readonly),this.syncErrors.mergeIn(e.syncErrors),this.syncTreeErrors.mergeIn(e.syncTreeErrors),this.asyncErrors.mergeIn(e.asyncErrors);for(let t of e.getMetadataKeys()){let i=e.metadata.get(t);this.getMetadata(t).mergeIn(i)}}};var ye=class{depth;constructor(e){this.depth=e}build(){return new _e(this,[],0)}};var W$1=class n extends ye{constructor(e){super(e)}current;all=[];addHiddenRule(e){this.getCurrent().addHiddenRule(e)}addDisabledReasonRule(e){this.getCurrent().addDisabledReasonRule(e)}addReadonlyRule(e){this.getCurrent().addReadonlyRule(e)}addSyncErrorRule(e){this.getCurrent().addSyncErrorRule(e)}addSyncTreeErrorRule(e){this.getCurrent().addSyncTreeErrorRule(e)}addAsyncErrorRule(e){this.getCurrent().addAsyncErrorRule(e)}addMetadataRule(e,t){this.getCurrent().addMetadataRule(e,t)}getChild(e){if(e===B){let t=this.getCurrent().children;t.size>(t.has(B)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(e)}hasLogic(e){return this===e?!0:this.all.some(({builder:t})=>t.hasLogic(e))}hasRules(){return this.all.length>0}anyChildHasLogic(){return this.all.some(({builder:e})=>e.anyChildHasLogic())}mergeIn(e,t){t?this.all.push({builder:e,predicate:{fn:A(t.fn,this.depth),path:t.path}}):this.all.push({builder:e}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new re(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new n(0)}};var re=class extends ye{logic=new U([]);children=new Map;constructor(e){super(e)}addHiddenRule(e){this.logic.hidden.push(A(e,this.depth))}addDisabledReasonRule(e){this.logic.disabledReasons.push(A(e,this.depth))}addReadonlyRule(e){this.logic.readonly.push(A(e,this.depth))}addSyncErrorRule(e){this.logic.syncErrors.push(A(e,this.depth))}addSyncTreeErrorRule(e){this.logic.syncTreeErrors.push(A(e,this.depth))}addAsyncErrorRule(e){this.logic.asyncErrors.push(A(e,this.depth))}addMetadataRule(e,t){this.logic.getMetadata(e).push(A(t,this.depth))}getChild(e){return this.children.has(e)||this.children.set(e,new W$1(this.depth+1)),this.children.get(e)}hasLogic(e){return this===e}hasRules(){return this.logic.hasAnyLogic()||this.children.size>0}anyChildHasLogic(){for(let e of this.children.values())if(e.hasRules())return!0;return!1}};var _e=class n{builder;predicates;depth;logic;constructor(e,t,i){this.builder=e,this.predicates=t,this.depth=i,this.logic=e?Ai(e,t,i):new U([])}getChild(e){let t=this.builder?Dn(this.builder,e):[];if(t.length===0)return new n(void 0,[],this.depth+1);if(t.length===1){let{builder:i,predicates:r}=t[0];return new n(i,[...this.predicates,...r.map(o=>Ze(o,this.depth))],this.depth+1)}else return new Xe(t.map(({builder:r,predicates:o})=>new n(r,[...this.predicates,...o.map(a=>Ze(a,this.depth))],this.depth+1)))}hasLogic(e){return this.builder?this.builder.hasLogic(e):!1}hasRules(){return this.builder?this.builder.hasRules():!1}anyChildHasLogic(){return this.builder?this.builder.anyChildHasLogic():!1}};var Xe=class n{all;logic;constructor(e){this.all=e,this.logic=new U([]);for(let t of e)this.logic.mergeIn(t.logic)}getChild(e){return new n(this.all.flatMap(t=>t.getChild(e)))}hasLogic(e){return this.all.some(t=>t.hasLogic(e))}hasRules(){return this.all.some(e=>e.hasRules())}anyChildHasLogic(){return this.all.some(e=>e.anyChildHasLogic())}};function Dn(n,e){if(n instanceof W$1)return n.all.flatMap(({builder:t,predicate:i})=>{let r=Dn(t,e);return i?r.map(({builder:o,predicates:a})=>({builder:o,predicates:[...a,i]})):r});if(n instanceof re)return[...e!==B&&n.children.has(B)?[{builder:n.getChild(B),predicates:[]}]:[],...n.children.has(e)?[{builder:n.getChild(e),predicates:[]}]:[]];throw new T$1(1909,!1)}function Ai(n,e,t){let i=new U(e);if(n instanceof W$1){let r=n.all.map(({builder:o,predicate:a})=>new _e(o,a?[...e,Ze(a,t)]:e,t));for(let o of r)i.mergeIn(o.logic)}else if(n instanceof re)i.mergeIn(n.logic);else throw new T$1(1909,!1);return i}function Ze(n,e){return m(l({},n),{depth:e})}var An=Symbol(`PATH`);var F=class n{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,Oi);logicBuilder;constructor(e,t,i,r){this.keys=e,this.parent=i,this.keyInParent=r,this.root=t??this,i||(this.logicBuilder=W$1.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(e){return this.children.has(e)||this.children.set(e,new n([...this.keys,e],this.root,this,e)),this.children.get(e)}mergeIn(e,t){let i=e.compile();this.builder.mergeIn(i.builder,t)}static unwrapFieldPath(e){return e[An]}static newRoot(){return new n([],void 0,void 0,void 0)}};var Oi={get(n,e){return e===An?n:n.getChild(e).fieldPathProxy}};var ge;var ne=new Map;var xe=class n{schemaFn;constructor(e){this.schemaFn=e}compile(){if(ne.has(this))return ne.get(this);let e=F.newRoot();ne.set(this,e);let t=ge;try{ge=e,this.schemaFn(e.fieldPathProxy)}finally{ge=t}return e}static create(e){return e instanceof n?e:new n(e)}static rootCompile(e){try{return ne.clear(),e===void 0?F.newRoot():e instanceof n?e.compile():new n(e).compile()}finally{ne.clear()}}};function Ii(n){return n instanceof xe||typeof n==`function`}function Ce(n){if(ge!==F.unwrapFieldPath(n).root)throw new T$1(1908,!1)}function ae(n,e,t){return Ce(n),F.unwrapFieldPath(n).builder.addMetadataRule(e,t),e}var G={list(){return{reduce:(n,e)=>e===void 0?n:[...n,e],getInitial:()=>[]}},min(){return{reduce:(n,e)=>n===void 0||e===void 0?n??e:e<n?e:n,getInitial:()=>{}}},max(){return{reduce:(n,e)=>n===void 0||e===void 0?n??e:e>n?e:n,getInitial:()=>{}}},or(){return{reduce:(n,e)=>n||e,getInitial:()=>!1}},and(){return{reduce:(n,e)=>n&&e,getInitial:()=>!0}},override:Pi};function Pi(n){return{reduce:(e,t)=>t,getInitial:()=>n?.()}}var st=Symbol(`IS_ASYNC_VALIDATION_RESOURCE`);var Se=class{reducer;create;brand;[st];constructor(e,t){this.reducer=e,this.create=t}};function T(n){return new Se(n??G.override())}function ct$1(){return T()}var ft$1=T(G.or());var On=ct$1();var In=ct$1();var Pn=T(G.max());var kn=T(G.min());var ut$1=T(G.list());function S(n,e){if(n===e)return!0;if(!n||!e||n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(!Object.is(n[t],e[t]))return!1;return!0}function ki(n){return n.errors().length>0?`invalid`:n.pending()?`unknown`:`valid`}var Je=class{node;constructor(e){this.node=e}rawSyncTreeErrors=de$1(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]],{equal:S});syncErrors=de$1(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...Li(this.node.submitState.submissionErrors())],{equal:S});syncValid=de$1(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(e,t)=>t&&e.validationState.syncValid(),Di));syncTreeErrors=de$1(()=>this.rawSyncTreeErrors().filter(e=>e.fieldTree===this.node.fieldTree),{equal:S});rawAsyncErrors=de$1(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]],{equal:S});asyncErrors=de$1(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(e=>e===`pending`||e.fieldTree===this.node.fieldTree),{equal:S});parseErrors=de$1(()=>this.node.formFieldBindings().flatMap(e=>e.parseErrors()),{equal:S});errors=de$1(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(e=>e!==`pending`)],{equal:S});errorSummary=de$1(()=>{let e=this.node.structure.reduceChildren(this.errors(),(t,i)=>[...i,...t.errorSummary()]);return F$1(()=>e.sort(zi)),e},{equal:S});pending=de$1(()=>this.node.structure.reduceChildren(this.asyncErrors().includes(`pending`),(e,t)=>t||e.validationState.pending()));status=de$1(()=>{if(this.shouldSkipValidation())return`valid`;let e=ki(this);return this.node.structure.reduceChildren(e,(t,i)=>i===`invalid`||t.validationState.status()===`invalid`?`invalid`:i===`unknown`||t.validationState.status()===`unknown`?`unknown`:`valid`,t=>t===`invalid`)});valid=de$1(()=>this.status()===`valid`);invalid=de$1(()=>this.status()===`invalid`);shouldSkipValidation=de$1(()=>this.node.hidden()||this.node.disabled()||this.node.readonly()||this.node.structure.isOrphaned())};function Li(n){return n===void 0?[]:O(n)?n:[n]}function Ln(n,e){if(O(n))for(let t of n)t.fieldTree??=e;else n&&(n.fieldTree??=e);return n}function Fn(n){return n.formField?n.formField.element:n.fieldTree().formFieldBindings().reduce((e,t)=>!e||!t.element?e??t.element:e.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_PRECEDING?t.element:e,void 0)}function zi(n,e){let t=Fn(n),i=Fn(e);return t===i?0:t===void 0||i===void 0?t===void 0?1:-1:t.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var et$1=T();var tt=class{node;cache=new WeakMap;constructor(e){this.node=e,this.fieldTreeOf=this.fieldTreeOf.bind(this),this.stateOf=this.stateOf.bind(this)}resolve(e){if(!this.cache.has(e)){let t=de$1(()=>{let i=F.unwrapFieldPath(e),r=this.node,o=Ti();for(;o>0||!r.structure.logic.hasLogic(i.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new T$1(1900,!1);for(let a of i.keys)if(r=r.structure.getChild(a),r===void 0)throw new T$1(1901,!1);return r.fieldTree});this.cache.set(e,t)}return this.cache.get(e)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=de$1(()=>{let e=this.key();if(!O(F$1(this.node.structure.parent.value)))throw new T$1(1906,!1);return Number(e)});fieldTreeOf(e){return this.resolve(e)}stateOf(e){return this.resolve(e)()}valueOf=e=>{let t=this.resolve(e)().value();if(t instanceof Zg)throw new T$1(1907,!1);return t}};var nt$1=class{node;metadata=new Map;constructor(e){this.node=e}runMetadataCreateLifecycle(){if(!this.node.logicNode.logic.hasMetadataKeys())return;let e=w0();e&&gT(!1);try{F$1(()=>Ot$1(this.node.structure.injector,()=>{for(let t of this.node.logicNode.logic.getMetadataKeys())if(t.create){let i=this.node.logicNode.logic.getMetadata(t),r=t.create(this.node,de$1(()=>i.compute(this.node.context)));this.metadata.set(t,r)}}))}finally{e&&gT(!0)}}get(e){if(this.has(e)&&!this.metadata.has(e)){if(e.create)throw new T$1(1912,!1);let t=this.node.logicNode.logic.getMetadata(e);this.metadata.set(e,de$1(()=>t.compute(this.node.context)))}return this.metadata.get(e)}has(e){return this.node.logicNode.logic.hasMetadata(e)}};var Vi={get(n,e,t){if(e===Tn)return!0;let i=n(),r=i.structure.getChild(e);if(r!==void 0)return r.fieldTree;let o=F$1(i.value);if(O(o)){if(e===`length`)return i.value().length;if(e===Symbol.iterator)return()=>(i.value(),Array.prototype[Symbol.iterator].apply(i.fieldTree))}if(be(o)&&e===Symbol.iterator)return function*(){for(let a in t)yield[a,t[a]]}},getOwnPropertyDescriptor(n,e){let t=F$1(n().value),i=Reflect.getOwnPropertyDescriptor(t,e);return i&&!i.configurable&&(i.configurable=!0),i},ownKeys(n){let e=F$1(n().value);return typeof e==`object`&&e!==null?Reflect.ownKeys(e):[]}};function Bi(n,e){let t=de$1(()=>n()[e()]);return t[ze]=n[ze],t.set=i=>{Object.is(F$1(t),i)||n.update(r=>ji(r,i,e()))},t.update=i=>{t.set(i(F$1(t)))},t.asReadonly=()=>t,t}function ji(n,e,t){if(O(n)){let i=[...n];return i[t]=e,i}else return m(l({},n),{[t]:e})}var H=Symbol(``);var zn=de$1(()=>!1);var Ne=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;_anyChildHasLogic;get injector(){return this._injector??=Q$2.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(e,t,i){this.logic=e,this.node=t,this.createChildNode=i}children(){this.ensureChildrenMap();let e=this.childrenMap();return e===void 0?[]:Array.from(e.byPropertyKey.values()).map(t=>F$1(t.reader))}materializedChildren(){let e=this.childrenMap();return e===void 0?[]:Array.from(e.byPropertyKey.values()).map(t=>t.node)}_areChildrenMaterialized(){return F$1(this.childrenMap)!==void 0}ensureChildrenMap(){this._areChildrenMaterialized()||F$1(()=>{this.childrenMap.update(e=>this.computeChildrenMap(this.value(),e,!0))})}getChild(e){this.ensureChildrenMap();let t=e.toString(),i=F$1(this.childrenMap)?.byPropertyKey.get(t)?.reader;return i||(i=this.createReader(t)),i()}reduceChildren(e,t,i){let r=this.childrenMap();if(!r)return e;let o=e;for(let a of r.byPropertyKey.values()){if(i?.(o))break;o=t(F$1(a.reader),o)}return o}destroy(){this.injector.destroy()}createKeyOrOrphanSignals(e,t,i){if(e===`root`)return{keyInParent:Vn,isOrphaned:zn};let r=this.parent,o=i,a=de$1(()=>{if(r.structure.isOrphaned())return H;let u=r.structure.childrenMap();if(!u)return H;let x=u.byPropertyKey.get(o);if(x&&x.node===this.node)return o;if(t===void 0)return H;for(let[$,R]of u.byPropertyKey)if(R.node===this.node)return o=$;return H}),l=de$1(()=>a()===H);return{keyInParent:de$1(()=>{let u=a();if(u===H)throw t===void 0?new T$1(-1902,!1):new T$1(1904,!1);return u}),isOrphaned:l}}createChildrenMap(){return Gd({source:this.value,computation:(e,t)=>this.computeChildrenMap(e,t?.value,!1)})}computeChildrenMap(e,t,i){if(!be(e)||!i&&t===void 0&&!(this._anyChildHasLogic??=this.logic.anyChildHasLogic()))return;t??={byPropertyKey:new Map};let r,o=O(e);t!==void 0&&(o?r=Hi(t,e,this.identitySymbol):r=qi(t,e));for(let a of Object.keys(e)){let l$1,s=e[a];if(s===void 0){t.byPropertyKey.has(a)&&(r??=l({},t),r.byPropertyKey.delete(a));continue}o&&be(s)&&!O(s)&&(l$1=s[this.identitySymbol]??=Symbol(``));let u;l$1&&(t.byTrackingKey?.has(l$1)||(r??=l({},t),r.byTrackingKey??=new Map,r.byTrackingKey.set(l$1,this.createChildNode(a,l$1,o))),u=(r??t).byTrackingKey.get(l$1));let x=t.byPropertyKey.get(a);x===void 0?(r??=l({},t),r.byPropertyKey.set(a,{reader:this.createReader(a),node:u??this.createChildNode(a,l$1,o)})):u&&u!==x.node&&(r??=l({},t),x.node=u)}return r??t}createReader(e){return de$1(()=>this.childrenMap()?.byPropertyKey.get(e)?.node)}};var it$1=class extends Ne{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return Ki}get keyInParent(){return Vn}isOrphaned=zn;childrenMap;constructor(e,t,i,r,o){super(t,e,o),this.fieldManager=i,this.value=r,this.childrenMap=this.createChildrenMap()}};var rt$1=class extends Ne{logic;parent;root;pathKeys;keyInParent;value;childrenMap;isOrphaned;get fieldManager(){return this.root.structure.fieldManager}constructor(e,t,i,r,o,a){super(t,e,a),this.logic=t,this.parent=i,this.root=this.parent.structure.root;let l=this.createKeyOrOrphanSignals(`child`,r,o);this.isOrphaned=l.isOrphaned,this.keyInParent=l.keyInParent,this.pathKeys=de$1(()=>[...i.structure.pathKeys(),this.keyInParent()]),this.value=Bi(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var Ki=de$1(()=>[]);var Vn=de$1(()=>{throw new T$1(1905,!1)});function Hi(n,e,t){let i,r=new Set(n.byPropertyKey.keys()),o=n.byTrackingKey&&new Set(n.byTrackingKey.keys());for(let a=0;a<e.length;a++){let l=e[a];r.delete(a.toString()),o&&be(l)&&Object.hasOwn(l,t)&&o.delete(l[t])}if(r.size>0){i??=l({},n);for(let a of r)i.byPropertyKey.delete(a)}if(o&&o.size>0){i??=l({},n);for(let a of o)i.byTrackingKey.delete(a)}return i}function qi(n,e){let t;for(let i of n.byPropertyKey.keys())Object.hasOwn(e,i)||(t??=l({},n),t.byPropertyKey.delete(i));return t}var ot=class{node;selfSubmitting=I$1(!1);submissionErrors;constructor(e){this.node=e,this.submissionErrors=Gd({source:this.node.structure.value,computation:()=>[]})}submitting=de$1(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))};var oe=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new tt(this)}fieldProxy=new Proxy(()=>this,Vi);pathNode;constructor(e){this.pathNode=e.pathNode,this.fieldAdapter=e.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,e),this.validationState=this.fieldAdapter.createValidationState(this,e),this.nodeState=this.fieldAdapter.createNodeState(this,e),this.metadataState=new nt$1(this),this.submitState=new ot(this),this.controlValue=this.controlValueSignal(),this.metadataState.runMetadataCreateLifecycle()}focusBoundControl(e){this.getBindingForFocus()?.focus(e)}getBindingForFocus(){return this.formFieldBindings().filter(t=>t.focus!==void 0).reduce(Rn,void 0)||this.structure.children().map(t=>t.getBindingForFocus()).reduce(Rn,void 0)}pendingSync=Gd({source:()=>this.value(),computation:(e,t)=>{t?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){let e=this.metadata(In)?.();return e?this.metadata(e):void 0}get maxLength(){return this.metadata(kn)}get min(){let e=this.metadata(On)?.();return e?this.metadata(e):void 0}get minLength(){return this.metadata(Pn)}get pattern(){return this.metadata(ut$1)??Ui}get required(){return this.metadata(ft$1)??Wi}metadata(e){return this.metadataState.get(e)}getError(e){return this.errors().find(t=>t.kind===e)}hasMetadata(e){return this.metadataState.has(e)}markAsTouched(e){this.structure.isOrphaned()||F$1(()=>{this.markAsTouchedInternal(e),this.flushSync()})}markAsTouchedInternal(e){if(!this.structure.isOrphaned()&&!this.validationState.shouldSkipValidation()&&(this.nodeState.markAsTouched(),!e?.skipDescendants))for(let t of this.structure.children())t.markAsTouchedInternal()}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(e){F$1(()=>this._reset(e))}_reset(e){this.pendingSync()?.abort(),e!==void 0&&this.value.set(e),this.controlValue.rawSet(this.value()),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let t of this.formFieldBindings())t.reset();for(let t of this.structure.materializedChildren())t._reset()}reloadValidation(){F$1(()=>this._reloadValidation())}_reloadValidation(){let e=this.logicNode.logic.getMetadataKeys();for(let t of e)t[st]&&this.metadata(t).reload?.();for(let t of this.structure.children())t._reloadValidation()}controlValueSignal(){let e=Gd(this.value);e.rawSet=e.set,e.set=i=>{e.rawSet(i),this.markAsDirty(),this.debounceSync()};let t=e.update;return e.update=i=>{t(i),this.markAsDirty(),this.debounceSync()},e}sync(){this.value.set(this.controlValue())}flushSync(){let e=this.pendingSync();e&&!e.signal.aborted&&(e.abort(),this.sync())}async debounceSync(){let e=F$1(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(e){let t=new AbortController,i=e(t.signal);if(i&&(this.pendingSync.set(t),await i,t.signal.aborted))return}this.structure.isOrphaned()||this.sync()}static newRoot(e,t,i,r){return r.newRoot(e,t,i,r)}createStructure(e){return e.kind===`root`?new it$1(this,e.logic,e.fieldManager,e.value,this.newChild.bind(this)):new rt$1(this,e.logic,e.parent,e.identityInParent,e.initialKeyInParent,this.newChild.bind(this))}newChild(e,t,i){let r,o;return i?(r=this.pathNode.getChild(B),o=this.structure.logic.getChild(B)):(r=this.pathNode.getChild(e),o=this.structure.logic.getChild(e)),this.fieldAdapter.newChild({kind:`child`,parent:this,pathNode:r,logic:o,initialKeyInParent:e,identityInParent:t,fieldAdapter:this.fieldAdapter})}};var Ui=de$1(()=>[]);var Wi=de$1(()=>!1);function Rn(n,e){return n?e&&n.element.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e:n:e}var at$1=class{node;selfTouched=I$1(!1);selfDirty=I$1(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=I$1([]);constructor(e){this.node=e}dirty=de$1(()=>{let e=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,i)=>i||t.nodeState.dirty(),Cn)});touched=de$1(()=>{let e=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,i)=>i||t.nodeState.touched(),Cn)});disabledReasons=de$1(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)],{equal:S});disabled=de$1(()=>!!this.disabledReasons().length);readonly=de$1(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=de$1(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=de$1(()=>{let e=this.node.structure.parent;return e?`${e.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=de$1(()=>{if(this.node.logicNode.logic.hasMetadata(et$1)){let t=this.node.logicNode.logic.getMetadata(et$1).compute(this.node.context);if(t)return i=>t(this.node.context,i)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=de$1(()=>this.hidden()||this.disabled()||this.readonly())};var dt$1=class{newRoot(e,t,i,r){return new oe({kind:`root`,fieldManager:e,value:t,pathNode:i,logic:i.builder.build(),fieldAdapter:r})}newChild(e){return new oe(e)}createNodeState(e){return new at$1(e)}createValidationState(e){return new Je(e)}createStructure(e,t){return e.createStructure(t)}};var lt$1=class{injector;rootName;submitOptions;constructor(e,t,i){this.injector=e,this.rootName=t??`${this.injector.get(vo)}.form${Gi++}`,this.submitOptions=i}structures=new Set;createFieldManagementEffect(e){qt$1(()=>{let t=new Set;this.markStructuresLive(e,t);for(let i of this.structures)t.has(i)||(this.structures.delete(i),F$1(()=>i.destroy()))},{injector:this.injector})}markStructuresLive(e,t){t.add(e);for(let i of e.children())this.markStructuresLive(i.structure,t)}};var Gi=0;var Bn=new b(``);function $i(n){let e,t,i;return n.length===3?[e,t,i]=n:n.length===2?Ii(n[1])?[e,t]=n:[e,i]=n:[e]=n,[e,t,i]}function Qi(...n){let[e,t,i]=$i(n),r=i?.injector??g(Q$2),o=Ot$1(r,()=>xe.rootCompile(t)),a=new lt$1(r,i?.name,i?.submission),l=i?.adapter??new dt$1,s=oe.newRoot(a,e,o,l);a.createFieldManagementEffect(s.structure);let{experimentalWebMcpTool:u}=i??{};if(u){let x=Ot$1(r,()=>g(Bn,{optional:!0}));x&&Ot$1(r,()=>x(s.fieldTree,{name:u.name,description:u.description}))}return s.fieldTree}var we=class{kind=`compat`;control;fieldTree;context;message;constructor({context:e,kind:t,control:i}){this.context=e,this.kind=t,this.control=i}};function jn(n){if(n.length===0)return null;let e={};for(let t of n)e[t.kind]=t instanceof we?t.context:t;return e}function Kn(n,e){return n===null?[]:Object.entries(n).map(([t,i])=>new we({context:i,kind:t,control:e}))}var Yi=new b(``);function xo(n,e){Ce(n);let t=F.unwrapFieldPath(n),i;typeof e==`function`||typeof e==`string`?i=e:i=e?.when,t.builder.addDisabledReasonRule(r=>{let o=!0;return typeof i==`string`?o=i:i&&(o=i(r)),typeof o==`string`?{fieldTree:r.fieldTree,message:o}:o?{fieldTree:r.fieldTree}:void 0})}function Ee(n,e){return n instanceof Function?n(e):n}function Gn(n){return typeof n==`number`?isNaN(n):n===``||n===!1||n==null}function Hn(n){return n===void 0?[]:Array.isArray(n)?n:[n]}function $n(n,e){Ce(n),F.unwrapFieldPath(n).builder.addSyncErrorRule(i=>Ln(e(i),i.fieldTree))}function Xi(n){return new mt$1(n)}function Zi(n,e){return new ht$2(n,e)}var de=class{__brand=void 0;kind=``;fieldTree;message;constructor(e){e&&Object.assign(this,e)}};var mt$1=class extends de{kind=`required`};var ht$2=class extends de{pattern;kind=`pattern`;constructor(e,t){super(t),this.pattern=e}};var Fe=class extends de{kind=`parse`};function So(n,e,t){let i=ae(n,T(),r=>{if(!(t?.when&&!t.when(r)))return e instanceof RegExp?e:e(r)});ae(n,ut$1,({state:r})=>r.metadata(i)()),$n(n,r=>{if(Gn(r.value()))return;let o=r.state.metadata(i)();if(o!==void 0&&!o.test(r.value()))return t?.error?Ee(t.error,r):Zi(o,{message:Ee(t?.message,r)})})}function No(n,e){let t=ae(n,T(),i=>e?.when?e.when(i):!0);ae(n,ft$1,({state:i})=>i.metadata(t)()),$n(n,i=>{if(i.state.metadata(t)()&&Gn(i.value()))return e?.error?Ee(e.error,i):Xi({message:Ee(e?.message,i)})})}function Ji(n,e,t){let i=Gd({source:n,computation:()=>[],equal:S}),r=a=>{let l=t(a);i.set(Hn(l.error)),l.value!==void 0&&e(l.value),i.set(Hn(l.error))},o=()=>{i.set([])};return{errors:i.asReadonly(),setRawValue:r,reset:o}}var pt$1=class{field;constructor(e){this.field=e}control=this;get value(){return this.field().controlValue()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return jn(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return`DISABLED`;if(this.field().valid())return`VALID`;if(this.field().invalid())return`INVALID`;if(this.field().pending())return`PENDING`;throw new T$1(1910,!1)}valueAccessor=null;hasValidator(e){return e===TI.required?this.field().required():!1}updateValueAndValidity(){}};var gt$1={disabled:`disabled`,disabledReasons:`disabledReasons`,dirty:`dirty`,errors:`errors`,hidden:`hidden`,invalid:`invalid`,max:`max`,maxLength:`maxLength`,min:`min`,minLength:`minLength`,name:`name`,pattern:`pattern`,pending:`pending`,readonly:`readonly`,required:`required`,touched:`touched`};var er=(()=>{let n={};for(let e of Object.keys(gt$1))n[gt$1[e]]=e;return n})();function bt$1(n,e){return n[er[e]]?.()}var vt$1=Object.values(gt$1);function Re(){return{}}function I(n,e,t){return n[e]!==t?(n[e]=t,!0):!1}function tr(n,e,t){let i;if(Qn(n)&&t.isBadInput(n))return{error:new Fe};switch(n.type){case`checkbox`:return{value:n.checked};case`number`:case`range`:case`datetime-local`:if(i=F$1(e),typeof i==`number`||i===null)return{value:n.value===``?null:n.valueAsNumber};break;case`date`:case`month`:case`time`:case`week`:if(i=F$1(e),i===null||i instanceof Date)return{value:n.valueAsDate};if(typeof i==`number`)return{value:n.valueAsNumber};break}if(n.tagName===`INPUT`&&n.type===`text`&&(i??=F$1(e),typeof i==`number`||i===null)){if(n.value===``)return{value:null};let r=Number(n.value);return Number.isNaN(r)?{error:new Fe}:{value:r}}return{value:n.value}}function qn(n,e){switch(n.type){case`checkbox`:n.checked=e;return;case`radio`:n.checked=e===n.value;return;case`number`:case`range`:case`datetime-local`:if(typeof e==`number`){Un(n,e);return}else if(e===null){n.value=``;return}break;case`date`:case`month`:case`time`:case`week`:if(e===null||e instanceof Date){n.valueAsDate=e;return}else if(typeof e==`number`){Un(n,e);return}}if(n.tagName===`INPUT`&&n.type===`text`){if(typeof e==`number`){n.value=isNaN(e)?``:String(e);return}if(e===null){n.value=``;return}}n.value=e}function Un(n,e){isNaN(e)?n.value=``:n.valueAsNumber=e}function Qn(n){return n.tagName===`INPUT`}function nr(n){return n.type===`date`||n.type===`datetime-local`||n.type===`month`||n.type===`time`||n.type===`week`}function ir(n,e){let t=n.getUTCFullYear(),i=String(n.getUTCMonth()+1).padStart(2,`0`);if(e===`month`)return`${t}-${i}`;return`${t}-${i}-${String(n.getUTCDate()).padStart(2,`0`)}`}function Yn(n,e,t){return e instanceof Date&&(n===`min`||n===`max`)&&(t===`date`||t===`month`)?ir(e,t):e}function rr(n,e){n.listenToCustomControlModel(i=>e.state().controlValue.set(i)),n.listenToCustomControlOutput(`touch`,()=>e.state().markAsTouched()),e.registerAsBinding(n.customControl);let t=Re();return()=>{let i=e.state(),r=i.controlValue();I(t,`controlValue`,r)&&n.setCustomControlModelInput(r);for(let o of vt$1){let a;if(o===`errors`?a=e.errors():a=bt$1(i,o),I(t,o,a)&&(n.setInputOnDirectives(o,a),e.elementAcceptsNativeProperty(o)&&!n.customControlHasInput(o))){let l=Yn(o,a,e.nativeFormElement.type);B3(e.renderer,e.nativeFormElement,o,l)}}}}function or(n){return typeof n==`object`&&n!==null}function ar(n,e){let t=Re();e.controlValueAccessor.registerOnChange(r=>{t.controlValue=r,e.state().controlValue.set(r)}),e.controlValueAccessor.registerOnTouched(()=>e.state().markAsTouched());let i=e.injector.get(n_,null,{optional:!0,self:!0});if(i){let r;for(let s of i)or(s)&&s.registerOnValidatorChange&&(r??=I$1(0),s.registerOnValidatorChange(()=>{r.update(u=>u+1)}));let o=i.map(s=>typeof s==`function`?s:s.validate.bind(s)),a=TI.compose(o),l=de$1(()=>{r?.();return Kn(a?a(e.interopNgControl.control):null,e.interopNgControl.control)});e.parseErrorsSource.set(l)}return e.registerAsBinding({reset:()=>{let r=e.state().value();t.controlValue=r,F$1(()=>e.controlValueAccessor.writeValue(r))}}),()=>{let r=e.state(),o=r.controlValue();I(t,`controlValue`,o)&&F$1(()=>e.controlValueAccessor.writeValue(o));for(let a of vt$1){let l=bt$1(r,a);if(I(t,a,l)){let s=n.setInputOnDirectives(a,l,a===`name`?dr:void 0);a===`disabled`&&e.controlValueAccessor.setDisabledState?F$1(()=>e.controlValueAccessor.setDisabledState(l)):!s&&e.elementAcceptsNativeProperty(a)&&B3(e.renderer,e.nativeFormElement,a,l)}}}}function dr(n){return n==null}function lr(n,e,t){if(typeof MutationObserver!=`function`)return;let i=new MutationObserver(r=>{r.some(o=>sr(o))&&e()});i.observe(n,{attributes:!0,attributeFilter:[`value`],characterData:!0,childList:!0,subtree:!0}),t.onDestroy(()=>i.disconnect())}function sr(n){if(n.type===`childList`||n.type===`characterData`){if(n.target instanceof Comment)return!1;for(let e of n.addedNodes)if(!(e instanceof Comment))return!0;for(let e of n.removedNodes)if(!(e instanceof Comment))return!0;return!1}return n.type===`attributes`&&n.target instanceof HTMLOptionElement}function cr(n,e,t,i){let r=!1,o=e.nativeFormElement,a=Ji(()=>e.state().value(),s=>e.state().controlValue.set(s),s=>tr(o,e.state().value,i));t.set(a.errors),e.onReset=()=>{a.reset();let s=e.state().value();l.controlValue=s,qn(o,s)},n.listenToDom(`input`,()=>a.setRawValue(void 0)),n.listenToDom(`blur`,()=>e.state().markAsTouched()),Qn(o)&&nr(o)&&i.watchValidity(e.destroyRef,o,()=>a.setRawValue(void 0)),e.registerAsBinding(),o.tagName===`SELECT`&&lr(o,()=>{r&&(o.value=e.state().controlValue())},e.destroyRef);let l=Re();return()=>{let s=e.state();for(let R of vt$1){let Q=bt$1(s,R);if(I(l,R,Q)&&(n.setInputOnDirectives(R,Q),e.elementAcceptsNativeProperty(R))){let Te=Yn(R,Q,o.type);B3(e.renderer,o,R,Te)}}let u=s.controlValue(),x=I(l,`controlValue`,u),$=o.type===`radio`&&I(l,`radioValue`,o.value);(x||$)&&qn(o,u),r=!0}}var Xn=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵprov=R({token:n,factory:t=>fr.ɵfac(t),providedIn:`root`})}return n})();var fr=(()=>{class n extends Xn{document=g(H$1);cspNonce=g(zc,{optional:!0});injectedStyles=new WeakMap;watchValidity(t,i,r){let o=i.getRootNode();this.injectedStyles.has(o)||this.injectedStyles.set(o,this.createTransitionStyle(o));let a=l=>{let s=l;(s.animationName===`ng-valid`||s.animationName===`ng-invalid`)&&r()};i.addEventListener(`animationstart`,a),t.onDestroy(()=>{i.removeEventListener(`animationstart`,a)})}isBadInput(t){return t.validity?.badInput??!1}createTransitionStyle(t){let i=this.document.createElement(`style`);return this.cspNonce&&(i.nonce=this.cspNonce),i.textContent=`
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `,t.nodeType===9?t.head?.appendChild(i):t.appendChild(i),i}ngOnDestroy(){this.injectedStyles.get(this.document)?.remove()}static ɵfac=(()=>{let t;return function(r){return(t||(t=wn$1(n)))(r||n)}})();static ɵprov=R({token:n,factory:n.ɵfac})}return n})();var ur=Symbol();var Wn=new b(``);var wo=(()=>{class n{field=Ei$1.required({alias:`formField`});state=de$1(()=>this.field()());renderer=g(ht$3);destroyRef=g(ft$2);injector=g(Q$2);element=g(ue).nativeElement;elementIsNativeFormElement=V3(this.element);elementAcceptsTextualValues=DEe(this.element);_elementAcceptsMinMax;nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=t=>this.element.focus(t);controlValueAccessors=g(bf,{optional:!0,self:!0});config=g(Yi,{optional:!0});validityMonitor=g(Xn);parseErrorsSource=I$1(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new pt$1(this.state)}parseErrors=de$1(()=>this.parseErrorsSource()?.().map(t=>m(l({},t),{fieldTree:F$1(this.state).fieldTree,formField:this}))??[],{equal:S});errors=de$1(()=>this.state().errors().filter(t=>!t.formField||t.formField===this),{equal:S});isFieldBinding=!1;resetter=()=>{};parseErrorsResetCallback;setParseErrors(t){this.parseErrorsSource.set(t)}set onReset(t){this.parseErrorsResetCallback=t}get onReset(){return this.parseErrorsResetCallback}get controlValueAccessor(){return!this.controlValueAccessors||this.controlValueAccessors.length===0?this.interopNgControl?.valueAccessor??void 0:X3(this.interopNgControl,this.controlValueAccessors)??void 0}installClassBindingEffect(){let t=Object.entries(this.config?.classes??{}).map(([r,o])=>[r,de$1(()=>o(this))]);if(t.length===0)return;let i=Re();Lhe({write:()=>{for(let[r,o]of t){let a=o();I(i,r,a)&&(a?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r))}}},{injector:this.injector})}focus(t){this.focuser(t)}reset(){this.resetter(),this.parseErrorsResetCallback?.(this.state().value())}registerAsBinding(t){if(this.isFieldBinding)throw new T$1(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),t?.focus&&(this.focuser=i=>t.focus(i)),t?.reset&&(this.resetter=()=>t.reset()),qt$1(i=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),i(()=>{r.nodeState.formFieldBindings.update(o=>o.filter(a=>a!==this))})},{injector:this.injector})}[ur];ɵngControlCreate(t){if(!t.hasPassThrough)if(this.controlValueAccessor)this.ɵngControlUpdate=ar(t,this);else if(t.customControl)this.ɵngControlUpdate=rr(t,this);else if(this.elementIsNativeFormElement)this.ɵngControlUpdate=cr(t,this,this.parseErrorsSource,this.validityMonitor);else throw new T$1(1914,!1)}ɵngControlUpdate;elementAcceptsNativeProperty(t){if(!this.elementIsNativeFormElement)return!1;switch(t){case`min`:case`max`:return this._elementAcceptsMinMax??=AEe(this.element);case`minLength`:case`maxLength`:return this.elementAcceptsTextualValues;case`disabled`:case`required`:case`readonly`:case`name`:return!0;default:return!1}}static ɵfac=function(i){return new(i||n)};static ɵdir=Z$1({type:n,selectors:[[``,`formField`,``]],inputs:{field:[1,`formField`,`field`]},exportAs:[`formField`],features:[Qn$1([{provide:Wn,useExisting:n},{provide:Nl,useFactory:()=>g(n).interopNgControl},{provide:j3,useFactory:()=>g(Wn,{self:!0})}]),Jb(`formField`)]})}return n})();var J=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵcmp=Ve({type:s,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(t,i){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return s})();var Q$1={passive:!0};var $=(()=>{class s{_platform=g(qe$1);_ngZone=g(X);_renderer=g(wt$1).createRenderer(null,null);_styleLoader=g(kn$1);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return yt$1;this._styleLoader.load(J);let t=xo$1(e),i=this._monitoredElements.get(t);if(i)return i.subject;let r=new w,o=`cdk-text-field-autofilled`,a=d=>{d.animationName===`cdk-text-field-autofill-start`&&!t.classList.contains(o)?(t.classList.add(o),this._ngZone.run(()=>r.next({target:d.target,isAutofilled:!0}))):d.animationName===`cdk-text-field-autofill-end`&&t.classList.contains(o)&&(t.classList.remove(o),this._ngZone.run(()=>r.next({target:d.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(t.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(t,`animationstart`,a,Q$1)));return this._monitoredElements.set(t,{subject:r,unlisten:l}),r}stopMonitoring(e){let t=xo$1(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove(`cdk-text-field-autofill-monitored`),t.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static ɵfac=function(t){return new(t||s)};static ɵprov=O$1({token:s,factory:s.ɵfac})}return s})();var W=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵmod=_e$1({type:s});static ɵinj=fe({})}return s})();var Y=new b(`MAT_INPUT_VALUE_ACCESSOR`);var ee=[`button`,`checkbox`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`];var te=new b(`MAT_INPUT_CONFIG`);var Pe=(()=>{class s{_elementRef=g(ue);_platform=g(qe$1);ngControl=g(Nl,{optional:!0,self:!0});_autofillMonitor=g($);_ngZone=g(X);_formField=g(Ci,{optional:!0});_renderer=g(ht$3);_uid=g(ki$1).getId(`mat-input-`);_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=g(te,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new w;controlType=`mat-input`;autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=JRe(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(TI.required)??!1}set required(e){this._required=JRe(e)}_required;get type(){return this._type}set type(e){this._type=e||`text`,this._validateType(),!this._isTextarea&&WRe().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type=`text`;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=JRe(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=[`date`,`datetime`,`datetime-local`,`month`,`time`,`week`].filter(e=>WRe().has(e));constructor(){let e=g(n8,{optional:!0}),t=g(s8,{optional:!0}),i=g(H$e),r=g(Y,{optional:!0,self:!0}),o=g(Wn,{optional:!0,self:!0}),a=this._elementRef.nativeElement,l=a.nodeName.toLowerCase();r?Yn$1(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,`keyup`,this._iOSKeyupListener)}),this._errorStateTracker=new gH(i,o||this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=l===`select`,this._isTextarea=l===`textarea`,this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?`mat-native-select-multiple`:`mat-native-select`),this._signalBasedValueAccessor&&qt$1(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type===`number`?(t.type=`text`,t.setSelectionRange(0,0),t.type=`number`):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute(`placeholder`,e):t.removeAttribute(`placeholder`)}}_getPlaceholder(){return this.placeholder||null}_validateType(){ee.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(t){return new(t||s)};static ɵdir=Z$1({type:s,selectors:[[`input`,`matInput`,``],[`textarea`,`matInput`,``],[`select`,`matNativeControl`,``],[`input`,`matNativeControl`,``],[`textarea`,`matNativeControl`,``]],hostAttrs:[1,`mat-mdc-input-element`],hostVars:21,hostBindings:function(t,i){t&1&&Ht$1(`focus`,function(){return i._focusChanged(!0)})(`blur`,function(){return i._focusChanged(!1)})(`input`,function(){return i._onInput()}),t&2&&(ul(`id`,i.id)(`disabled`,i.disabled&&!i.disabledInteractive)(`required`,i.required),zn$1(`name`,i.name||null)(`readonly`,i._getReadonlyAttribute())(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null)(`aria-invalid`,i.empty&&i.required?null:i.errorState)(`aria-required`,i.required)(`id`,i.id),gt$2(`mat-input-server`,i._isServer)(`mat-mdc-form-field-textarea-control`,i._isInFormField&&i._isTextarea)(`mat-mdc-form-field-input-control`,i._isInFormField)(`mat-mdc-input-disabled-interactive`,i.disabledInteractive)(`mdc-text-field__input`,i._isInFormField)(`mat-mdc-native-select-inline`,i._isInlineSelect()))},inputs:{disabled:`disabled`,id:`id`,placeholder:`placeholder`,name:`name`,required:`required`,type:`type`,errorStateMatcher:`errorStateMatcher`,userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],value:`value`,readonly:`readonly`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Be$1]},exportAs:[`matInput`],features:[Qn$1([{provide:Mi,useExisting:s}]),Vt$1]})}return s})();var Be=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵmod=_e$1({type:s});static ɵinj=fe({imports:[Br,Br,W,vn$1]})}return s})();var nt=[`tooltip`];var at=20;var rt=new b(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=g(Q$2);return()=>fD(n,{scrollThrottle:at})}});var lt=new b(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var et=`tooltip-panel`;var ht$1={passive:!0};var dt=8;var ct=8;var pt=24;var _t$1=200;var mt=(()=>{class n{_elementRef=g(ue);_ngZone=g(X);_platform=g(qe$1);_ariaDescriber=g(hDe);_focusMonitor=g(ZA);_dir=g(Jl);_injector=g(Q$2);_viewContainerRef=g(Ln$1);_mediaMatcher=g(nE);_document=g(H$1);_renderer=g(ht$3);_animationsDisabled=Jr();_defaultOptions=g(lt,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=it;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=JRe(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let e=JRe(t);this._disabled!==e&&(this._disabled=e,e?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=yF(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=yF(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(t){let e=this._message;this._message=t!=null?String(t).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(e)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new w;_isDestroyed=!1;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=dt}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(cr$1(this._destroyed)).subscribe(t=>{t?t===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(e=>e()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(t,this.message,`tooltip`),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,e){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(e);this._detach(),this._portal=this._portal||new nu(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=i.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(cr$1(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(t)}hide(t=this.hideDelay){let e=this._tooltipInstance;e&&(e.isVisible()?e.hide(t):(e._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let s=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&s._origin instanceof ue)return this._overlayRef;this._detach()}let e=this._injector.get(Wf).getAncestorScrollContainers(this._elementRef),i=`${this._cssClassPrefix}-${et}`,o=hD(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(e).withPopoverLocation(`global`);return o.positionChanges.pipe(cr$1(this._destroyed)).subscribe(s=>{this._updateCurrentPositionClass(s.connectionPair),this._tooltipInstance&&s.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Kf(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,i]:i,scrollStrategy:this._injector.get(rt)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(cr$1(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(cr$1(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(cr$1(this._destroyed)).subscribe(s=>{s.preventDefault(),s.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(cr$1(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let e=t.getConfig().positionStrategy,i=this._getOrigin(),o=this._getOverlayPosition();e.withPositions([this._addOffset(l(l({},i.main),o.main)),this._addOffset(l(l({},i.fallback),o.fallback))])}_addOffset(t){let e=ct,i=!this._dir||this._dir.value==`ltr`;return t.originY===`top`?t.offsetY=-e:t.originY===`bottom`?t.offsetY=e:t.originX===`start`?t.offsetX=i?-e:e:t.originX===`end`&&(t.offsetX=i?e:-e),t}_getOrigin(){let t=!this._dir||this._dir.value==`ltr`,e=this.position,i;e==`above`||e==`below`?i={originX:`center`,originY:e==`above`?`top`:`bottom`}:e==`before`||e==`left`&&t||e==`right`&&!t?i={originX:`start`,originY:`center`}:(e==`after`||e==`right`&&t||e==`left`&&!t)&&(i={originX:`end`,originY:`center`});let{x:o,y:s}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:o,originY:s}}}_getOverlayPosition(){let t=!this._dir||this._dir.value==`ltr`,e=this.position,i;e==`above`?i={overlayX:`center`,overlayY:`bottom`}:e==`below`?i={overlayX:`center`,overlayY:`top`}:e==`before`||e==`left`&&t||e==`right`&&!t?i={overlayX:`end`,overlayY:`center`}:(e==`after`||e==`right`&&t||e==`left`&&!t)&&(i={overlayX:`start`,overlayY:`center`});let{x:o,y:s}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:o,overlayY:s}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),hn$1(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck())}_invertPosition(t,e){return this.position===`above`||this.position===`below`?e===`top`?e=`bottom`:e===`bottom`&&(e=`top`):t===`end`?t=`start`:t===`start`&&(t=`end`),{x:t,y:e}}_updateCurrentPositionClass(t){let{overlayY:e,originX:i,originY:o}=t,s;if(e===`center`?this._dir&&this._dir.value===`rtl`?s=i===`end`?`left`:`right`:s=i===`start`?`left`:`right`:s=e===`bottom`&&o===`top`?`above`:`below`,s!==this._currentPosition){let d=this._overlayRef;if(d){let b=`${this._cssClassPrefix}-${et}-`;d.removePanelClass(b+this._currentPosition),d.addPanelClass(b+s)}this._currentPosition=s}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,t=>{let e=t.targetTouches?.[0],i=e?{x:e.clientX,y:e.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener(`mouseenter`,t=>{this._setupPointerExitEventsIfNeeded();let e;t.x!==void 0&&t.y!==void 0&&(e=t),this.show(void 0,e)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,t=>{let e=t.relatedTarget;(!e||!this._overlayRef?.overlayElement.contains(e))&&this.hide()}),this._addListener(`wheel`,t=>{if(this._isTooltipVisible()){let e=this._document.elementFromPoint(t.clientX,t.clientY),i=this._elementRef.nativeElement;e!==i&&!i.contains(e)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,t),this._addListener(`touchcancel`,t)}}}_addListener(t,e){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,e,ht$1))}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t==`function`?!t():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!==`off`){let e=this._elementRef.nativeElement,i=e.style;(t===`on`||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`)&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect=`none`),(t===`on`||!e.draggable)&&(i.webkitUserDrag=`none`),i.touchAction=`none`,i.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,`tooltip`),this._isDestroyed||hn$1({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=t=>t.type===`keydown`?this._isTooltipVisible()&&t.keyCode===27&&!Ql(t):!0;static ɵfac=function(e){return new(e||n)};static ɵdir=Z$1({type:n,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(e,i){e&2&&gt$2(`mat-mdc-tooltip-disabled`,i.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return n})();var it=(()=>{class n{_changeDetectorRef=g(gn$1);_elementRef=g(ue);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Jr();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new w;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>pt&&t.width>=_t$1}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let e=this._tooltip.nativeElement,i=this._showAnimation,o=this._hideAnimation;if(e.classList.remove(t?o:i),e.classList.add(t?i:o),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let s=getComputedStyle(e);(s.getPropertyValue(`animation-duration`)===`0s`||s.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(e.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(t))}static ɵfac=function(e){return new(e||n)};static ɵcmp=Ve({type:n,selectors:[[`mat-tooltip-component`]],viewQuery:function(e,i){if(e&1&&va(nt,7),e&2){let o;gi$1(o=_i$1())&&(i._tooltip=o.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(e,i){e&1&&Ht$1(`mouseleave`,function(s){return i._handleMouseLeave(s)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(e,i){e&1&&(gr(0,`div`,1,0),o0(`animationend`,function(s){return i._handleAnimationEnd(s)}),gr(2,`div`,2),ds(3),_r()()),e&2&&(Vd(i.tooltipClass),gt$2(`mdc-tooltip--multiline`,i._isMultiline),Tt$1(3),m0(i.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})}return n})();var Yt$1=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=_e$1({type:n});static ɵinj=fe({imports:[n9,gD,vn$1,iD]})}return n})();var f=(()=>{class t{constructor(){this._locale=g(zk)}transform(e,r={},s){return this._locale.get(e,r,s)||e}static{this.ɵfac=function(r){return new(r||t)}}static{this.ɵpipe=us({name:`translate`,type:t,pure:!1})}}return t})();function Dt(e,m){if(e&1&&Ao(0,`div`,1)(1,`div`,2),e&2){let t=m;sT(`background-color`,t),Tt$1(),sT(`background-color`,t)}}function Mt(e,m){if(e&1){let t=iT();jr(0,`div`,3)(1,`div`,4),ds(2),$r(),jr(3,`button`,5),Ht$1(`click`,function(){jh(t);return $h(Wr().close())}),jr(4,`icon`),ds(5,`close`),$r()()()}if(e&2){let t=Wr();gt$2(`bg-info`,t.banner().type===`info`||!t.banner().type)(`text-info-content`,t.banner().type===`info`||!t.banner().type)(`bg-warning`,t.banner().type===`warn`)(`text-warning-content`,t.banner().type===`warn`)(`bg-error`,t.banner().type===`error`)(`text-error-content`,t.banner().type===`error`),Tt$1(2),Do(` `,t.banner()?.content||t.banner()?.message,` `)}}var ut=(()=>{class e{constructor(){this._org=g(FS),this._change=I$1(0),this.is_setup=I$1(!1),this.banner=T6(`banner`),this.environment_bar=T6(`environment_bar`),this._environment_bar_padding=qt$1(()=>{document.body.classList.toggle(`has-environment-bar`,!!this.environment_bar())}),this.has_been_closed=de$1(()=>this.is_setup()?(this._change(),!this.banner()?.content&&!this.banner()?.message||localStorage.getItem(`PLACE.last_banner`)===this.banner().id):!0)}async ngOnInit(){await this._org.waitUntilInitialised(),setTimeout(()=>this.is_setup.set(!0),500)}async close(){localStorage.setItem(`PLACE.last_banner`,this.banner()?.id||``),this._change.set(Date.now())}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵcmp=Ve({type:e,selectors:[[`global-banner`]],decls:2,vars:2,consts:[[1,`flex`,`w-full`,`items-center`,`space-x-4`,`p-4`,`print:hidden`,3,`bg-info`,`text-info-content`,`bg-warning`,`text-warning-content`,`bg-error`,`text-error-content`],[`aria-hidden`,`true`,1,`environment-bar`,`top-0`,`print:hidden`],[`aria-hidden`,`true`,1,`environment-bar`,`bottom-0`,`print:hidden`],[1,`flex`,`w-full`,`items-center`,`space-x-4`,`p-4`,`print:hidden`],[1,`flex-1`],[`icon`,``,`matRipple`,``,3,`click`]],template:function(i,n){if(i&1&&(Kn$1(0,Dt,2,4),Kn$1(1,Mt,6,13,`div`,0)),i&2){let l;qn$1((l=n.environment_bar())?0:-1,l),Tt$1(),qn$1(!n.has_been_closed()&&n.banner()?1:-1)}},dependencies:[p2e],styles:[`[_nghost-%COMP%]{display:block;width:100%}.environment-bar[_ngcontent-%COMP%]{height:.5rem;left:0;pointer-events:none;position:fixed;width:100%;z-index:10000}`]})}}return e})();function kt(e,m){e&1&&ds(0,` Enter the address of your PlaceOS server to connect this app. `)}function At(e,m){e&1&&ds(0,` Enter your work email to find your PlaceOS server and connect this app. `)}function Et(e,m){if(e&1&&(jr(0,`p`,6),ds(1),$r()),e&2){let t=Wr();Tt$1(),Do(` `,t.error(),` `)}}function Nt(e,m){if(e&1&&(jr(0,`p`,7),ds(1),$r()),e&2){let t=Wr();Tt$1(),Do(` Settings provided by your administrator will be applied automatically in `,t.auto_accept_in(),`s. `)}}function Tt(e,m){if(e&1){let t=iT();jr(0,`div`,8)(1,`label`,12),ds(2,`Server Address`),$r(),jr(3,`mat-form-field`,13)(4,`icon`,14),ds(5,`dns`),$r(),jr(6,`input`,15),S0(`ngModelChange`,function(n){jh(t);let l=Wr();return xY(l.server_address,n)||(l.server_address=n),$h(n)}),$r(),S2(),$r()(),jr(7,`div`,8)(8,`label`,16),ds(9,`API Key (optional)`),$r(),jr(10,`mat-form-field`,13)(11,`icon`,14),ds(12,`key`),$r(),jr(13,`input`,17),S0(`ngModelChange`,function(n){jh(t);let l=Wr();return xY(l.api_key,n)||(l.api_key=n),$h(n)}),$r(),S2(),$r(),jr(14,`p`,18),ds(15,` When set, the app authenticates with this key instead of asking you to sign in. `),$r()()}if(e&2){let t=Wr();Tt$1(6),E0(`ngModel`,t.server_address),ll(`disabled`,t.loading()),v2(),Tt$1(7),E0(`ngModel`,t.api_key),ll(`disabled`,t.loading()),v2()}}function Ot(e,m){if(e&1){let t=iT();jr(0,`div`,8)(1,`label`,19),ds(2,`Work Email`),$r(),jr(3,`mat-form-field`,13)(4,`icon`,14),ds(5,`mail`),$r(),jr(6,`input`,20),S0(`ngModelChange`,function(n){jh(t);let l=Wr();return xY(l.email,n)||(l.email=n),$h(n)}),$r(),S2(),$r()()}if(e&2){let t=Wr();Tt$1(6),E0(`ngModel`,t.email),ll(`disabled`,t.loading()),v2()}}function It(e,m){e&1&&ds(0,` Find my server using my work email `)}function Pt(e,m){e&1&&ds(0,` Enter a server address manually `)}var ht=15;var ft=(()=>{class e{constructor(){this.serverError=Ei$1(``),this.autoAccept=Ei$1(!1),this.domainSet=Che(),this.email=I$1($Ge()??``),this.server_address=I$1(LS()??``),this.api_key=I$1(CC()??``),this.manual_entry=I$1(!!LS()),this.error=I$1(``),this.loading=I$1(!1),this.auto_accept_in=I$1(0),this._auto_accept_timer=null,qt$1(()=>{let t=this.serverError();t&&(this.error.set(t),F$1(()=>this.stopAutoAccept()))}),qt$1(()=>{this.autoAccept()&&F$1(this.server_address)&&F$1(()=>this.startAutoAccept())})}ngOnDestroy(){this.stopAutoAccept()}resetAutoAccept(){this._auto_accept_timer&&this.auto_accept_in.set(ht)}startAutoAccept(){this.auto_accept_in.set(ht),!this._auto_accept_timer&&(this._auto_accept_timer=setInterval(()=>{let t=this.auto_accept_in()-1;this.auto_accept_in.set(t),!(t>0)&&(this.stopAutoAccept(),this.submit())},1e3))}stopAutoAccept(){this._auto_accept_timer&&clearInterval(this._auto_accept_timer),this._auto_accept_timer=null,this.auto_accept_in.set(0)}toggleManualEntry(){this.loading()||(this.manual_entry.update(t=>!t),this.error.set(``))}async submit(){if(this.loading())return;if(this.stopAutoAccept(),this.manual_entry())return this.submitManual();let t=this.email().trim();if(!t){this.error.set(`A work email is required.`);return}this.loading.set(!0),this.error.set(``);try{let i=await iH(t);eH(t),DC(i),VJ(``),this.domainSet.emit(i)}catch{this.error.set(`Unable to find a server for this email address.`)}finally{this.loading.set(!1)}}submitManual(){let t=BJ(this.server_address());if(!t){this.error.set(`A valid server address is required.`);return}this.error.set(``),DC(t),VJ(this.api_key()),this.domainSet.emit(t)}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵcmp=Ve({type:e,selectors:[[`native-domain-overlay`]],hostBindings:function(i,n){i&1&&Ht$1(`pointerdown`,function(){return n.resetAutoAccept()},zj)(`keydown`,function(){return n.resetAutoAccept()},zj)},inputs:{serverError:[1,`serverError`],autoAccept:[1,`autoAccept`]},outputs:{domainSet:`domainSet`},decls:19,vars:8,consts:[[1,`bg-base-200`,`pointer-events-auto`,`fixed`,`inset-0`,`z-9999`,`flex`,`items-center`,`justify-center`,`p-4`],[1,`border-base-300`,`bg-base-100`,`flex`,`w-full`,`max-w-md`,`flex-col`,`rounded-sm`,`border`,`shadow-sm`,3,`ngSubmit`],[1,`bg-base-200`,`m-2`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[1,`flex`,`flex-col`,`space-y-4`,`p-4`],[1,`text-sm`,`opacity-60`],[1,`bg-error/10`,`text-error`,`rounded-sm`,`px-3`,`py-2`,`text-xs`],[1,`bg-info/10`,`text-info`,`rounded-sm`,`px-3`,`py-2`,`text-xs`],[1,`flex`,`w-full`,`flex-col`],[`type`,`button`,1,`self-start`,`text-sm`,`underline`,`opacity-60`,3,`click`,`disabled`],[1,`bg-base-200`,`m-2`,`flex`,`items-center`,`justify-center`,`space-x-2`,`rounded-sm`,`border-none`,`p-2`],[`btn`,``,`matRipple`,``,`type`,`submit`,1,`flex-1`,3,`disabled`],[`for`,`server-address`],[`appearance`,`outline`,1,`w-full`],[`matPrefix`,``],[`matInput`,``,`name`,`server-address`,`placeholder`,`placeos.company.com`,`type`,`text`,`autocapitalize`,`off`,`autocomplete`,`url`,`spellcheck`,`false`,`required`,``,3,`ngModelChange`,`ngModel`,`disabled`],[`for`,`api-key`],[`matInput`,``,`name`,`api-key`,`placeholder`,`Leave empty to sign in`,`type`,`password`,`autocapitalize`,`off`,`autocomplete`,`off`,`spellcheck`,`false`,3,`ngModelChange`,`ngModel`,`disabled`],[1,`text-xs`,`opacity-60`],[`for`,`email`],[`matInput`,``,`name`,`email`,`placeholder`,`name@company.com`,`type`,`email`,`autocapitalize`,`off`,`autocomplete`,`email`,`spellcheck`,`false`,`required`,``,3,`ngModelChange`,`ngModel`,`disabled`]],template:function(i,n){i&1&&(jr(0,`div`,0)(1,`form`,1),Ht$1(`ngSubmit`,function(){return n.submit()}),jr(2,`header`,2)(3,`h2`,3),ds(4,`Connect to Server`),$r()(),jr(5,`main`,4)(6,`p`,5),Kn$1(7,kt,1,0)(8,At,1,0),$r(),Kn$1(9,Et,2,1,`p`,6),Kn$1(10,Nt,2,1,`p`,7),Kn$1(11,Tt,16,4)(12,Ot,7,2,`div`,8),jr(13,`button`,9),Ht$1(`click`,function(){return n.toggleManualEntry()}),Kn$1(14,It,1,0)(15,Pt,1,0),$r()(),jr(16,`footer`,10)(17,`button`,11),ds(18),$r()()()()),i&2&&(Tt$1(7),qn$1(n.manual_entry()?7:8),Tt$1(2),qn$1(n.error()?9:-1),Tt$1(),qn$1(n.auto_accept_in()>0?10:-1),Tt$1(),qn$1(n.manual_entry()?11:12),Tt$1(2),ll(`disabled`,n.loading()),Tt$1(),qn$1(n.manual_entry()?14:15),Tt$1(3),ll(`disabled`,n.loading()),Tt$1(),Do(` `,n.loading()?`Looking up...`:`Connect`,` `))},dependencies:[LEe,OEe,OP,REe,CEe,$P,c8,n8,p2e,Br,Mn,Si,Be,Pe,qf,ED],encapsulation:2})}}return e})();function Ft(e,m){if(e&1){let t=iT();jr(0,`aside`,0)(1,`div`,1)(2,`h2`,2),ds(3),$r(),jr(4,`p`,3),ds(5),$r()(),jr(6,`button`,4),Ht$1(`click`,function(){jh(t);return $h(Wr().reloadApp())}),jr(7,`icon`),ds(8,`refresh`),$r()()()}if(e&2){let t=m;Tt$1(3),Do(` `,t.message||`Update available`,` `),Tt$1(2),Do(` `,t.details||`Refresh the page to get the new version of the application`,` `),Tt$1(),ll(`matTooltip`,t.action||`Reload App`)}}var _t=(()=>{class e{constructor(){this.update=mIe()}reloadApp(){location.reload()}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵcmp=Ve({type:e,selectors:[[`placeos-service-worker-update-card`]],decls:1,vars:1,consts:[[`role`,`status`,`aria-live`,`assertive`,1,`border-base-300`,`bg-base-100`,`text-base-content`,`pointer-events-auto`,`fixed`,`right-4`,`bottom-4`,`z-9999`,`flex`,`w-[20rem]`,`max-w-[calc(100vw-2rem)]`,`items-center`,`gap-3`,`rounded-lg`,`border`,`p-4`,`shadow-xl`],[1,`min-w-0`,`flex-1`],[1,`m-0`,`text-sm`,`leading-tight`,`font-medium`],[1,`m-0`,`mt-1`,`text-xs`,`opacity-70`],[`icon`,``,`default`,``,3,`click`,`matTooltip`]],template:function(i,n){if(i&1&&Kn$1(0,Ft,9,3,`aside`,0),i&2){let l;qn$1((l=n.update())?0:-1,l)}},dependencies:[p2e,Yt$1,mt],encapsulation:2})}}return e})();function Lt(e,m){if(e&1){let t=iT();jr(0,`native-domain-overlay`,3),Ht$1(`domainSet`,function(){jh(t);return $h(Wr().onDomainSet())}),$r()}if(e&2){let t=Wr();ll(`serverError`,t.domain_error())(`autoAccept`,t.auto_confirm())}}function Bt(e,m){e&1&&(jr(0,`div`,1),ds(1),cT(2,`translate`),$r()),e&2&&(Tt$1(),Do(` `,QY(2,1,`COMMON.SERVER_DOWN`),` `))}function Vt(e,m){if(e&1){let t=iT();jr(0,`div`,4)(1,`p`,5),ds(2),$r(),jr(3,`button`,6),Ht$1(`click`,function(){jh(t);return $h(Wr(2).retry())}),ds(4,` Try again `),$r()()}if(e&2){let t=Wr(2);Tt$1(2),Do(` `,t.initialisation_error(),` `)}}function Wt(e,m){if(e&1&&(jr(0,`div`,7)(1,`p`,8),ds(2),$r()(),jr(3,`div`,9),Ao(4,`mat-progress-bar`,10),$r()),e&2){let t=Wr(2);Tt$1(2),m0(t.message())}}function Gt(e,m){if(e&1&&(jr(0,`div`,2),Kn$1(1,Vt,5,1,`div`,4)(2,Wt,5,1),$r()),e&2){let t=Wr();Tt$1(),qn$1(t.initialisation_error()?1:2)}}var gt=(()=>{class e extends Na{constructor(){super(...arguments),this._placeos=g(Aje),this.online=I$1(!0),this.connection_checked=I$1(!1),this.message=yje(),this.show_domain_overlay=vje(),this.domain_error=bje(),this.auto_confirm=Tje(),this.initialisation_error=gIe(),this.initialisation_complete=_Ie(),this.loading=de$1(()=>!this.initialisation_complete())}retry(){EIe()}onDomainSet(){this._placeos.onNativeDomainSet()}ngOnInit(){let t=()=>{this.online.set(b_()),this.online()&&(this.connection_checked.set(!0),this.clearTimeout(`initial-connection`))};this.timeout(`initial-connection`,()=>{t(),this.connection_checked.set(!0)},5e3),t(),this.interval(`online`,t,1e3)}static{this.ɵfac=(()=>{let t;return function(n){return(t||(t=wn$1(e)))(n||e)}})()}static{this.ɵcmp=Ve({type:e,selectors:[[`global-loading`]],features:[tt$1],decls:4,vars:3,consts:[[3,`serverError`,`autoAccept`],[1,`bg-error`,`fixed`,`top-2`,`left-1/2`,`z-9999`,`-translate-x-1/2`,`rounded-3xl`,`px-4`,`py-2`,`text-xs`,`text-white`,`shadow-sm`],[`loader`,``,1,`bg-base-300`,`pointer-events-auto`,`fixed`,`inset-0`,`z-9998`,`flex`,`flex-col`,`items-center`,`justify-end`,`space-y-2`,`p-4`],[3,`domainSet`,`serverError`,`autoAccept`],[1,`border-base-300`,`bg-base-100`,`w-[24rem]`,`max-w-[calc(100vw-2rem)]`,`rounded-lg`,`border`,`p-4`,`text-center`,`text-xs`,`shadow-sm`],[`initialisation-error`,``],[`type`,`button`,1,`bg-primary`,`text-primary-content`,`mt-3`,`rounded`,`px-4`,`py-2`,3,`click`],[1,`border-base-300`,`bg-base-100`,`w-[24rem]`,`max-w-[calc(100vw-2rem)]`,`rounded-lg`,`border`,`p-2`,`text-center`,`text-xs`,`shadow-sm`],[1,`text-center`,`font-mono`],[1,`border-base-300`,`w-[24rem]`,`max-w-[calc(100vw-2rem)]`,`overflow-hidden`,`rounded-full`,`border`,`shadow-sm`],[`mode`,`indeterminate`,1,`scale-150`,`rounded-sm`]],template:function(i,n){i&1&&(Kn$1(0,Lt,1,2,`native-domain-overlay`,0),Kn$1(1,Bt,3,3,`div`,1),Kn$1(2,Gt,3,1,`div`,2),Ao(3,`placeos-service-worker-update-card`)),i&2&&(qn$1(n.show_domain_overlay()?0:-1),Tt$1(),qn$1(n.connection_checked()&&!n.online()?1:-1),Tt$1(),qn$1(n.loading()||n.initialisation_error()?2:-1))},dependencies:[Z,L,ft,_t,f],styles:[`[_nghost-%COMP%]{pointer-events:none}[loader][_ngcontent-%COMP%]{background-image:linear-gradient(to right,#f15b55,#f68c50)}`]})}}return e})();var Ut=()=>[import(`./chunk-lz47fuAp.js`).then(e=>e.SettingsDebugPanelComponent)];function Rt(e,m){if(e&1){let t=iT();jr(0,`settings-debug-panel`,0),S0(`showChange`,function(n){jh(t);let l=Wr();return xY(l.show,n)||(l.show=n),$h(n)}),$r()}if(e&2){let t=Wr();E0(`show`,t.show),ll(`schema`,t.schema())}}var vt=(()=>{class e extends Na{constructor(){super(...arguments),this._hotkey=g(VA),this._loaded=I$1(!1),this.loadSchema=Ei$1.required(),this.schema=I$1(null),this.show=I$1(!1)}ngOnInit(){this.subscription(`toggle`,this._hotkey.listen([`Control`,`Alt`,`Shift`,`KeyS`],()=>{this.toggle()}))}async toggle(){if(this.show()){this.show.set(!1);return}if(!this._loaded()){try{this.schema.set(await this.loadSchema()())}catch{this.schema.set(null)}this._loaded.set(!0)}this.show.set(!0)}static{this.ɵfac=(()=>{let t;return function(n){return(t||(t=wn$1(e)))(n||e)}})()}static{this.ɵcmp=Ve({type:e,selectors:[[`settings-debug-panel-launcher`]],inputs:{loadSchema:[1,`loadSchema`]},features:[tt$1],decls:3,vars:1,consts:[[3,`showChange`,`show`,`schema`]],template:function(i,n){i&1&&(qM(0,Rt,1,2),WW(1,0,Ut)),i&2&&(Tt$1(),YW(n.show()))},encapsulation:2})}}return e})();var jt=()=>[`/`];var Ct=(()=>{class e{static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵcmp=Ve({type:e,selectors:[[`app-unauthorised`]],decls:15,vars:11,consts:[[`unauthorised`,``,1,`absolute`,`inset-0`],[1,`border-base-300`,`bg-base-100`,`text-base-content`,`mx-auto`,`my-4`,`flex`,`w-104`,`max-w-[calc(100%-1rem)]`,`flex-col`,`gap-2`,`rounded-xl`,`border`,`p-4`,`text-center`,`shadow-lg`],[1,`text-4xl`],[1,`py-4`],[`btn`,``,3,`routerLink`]],template:function(i,n){i&1&&(jr(0,`div`,0)(1,`div`,1)(2,`h1`,2),ds(3,`403`),$r(),jr(4,`h3`),ds(5),cT(6,`translate`),$r(),jr(7,`p`,3),ds(8),cT(9,`translate`),$r(),jr(10,`p`),ds(11),cT(12,`translate`),$r(),jr(13,`a`,4),ds(14,`Try Again`),$r()()()),i&2&&(Tt$1(5),m0(QY(6,4,`COMMON.FORBIDDEN`)),Tt$1(3),Do(` `,QY(9,6,`COMMON.INVALID_PAGE_PERMISSIONS`),` `),Tt$1(3),Do(` `,QY(12,8,`COMMON.CONTACT_ADMIN`),` `),Tt$1(2),ll(`routerLink`,HY(10,jt)))},dependencies:[jg,f],styles:[`[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center}[unauthorised][_ngcontent-%COMP%]{background-image:linear-gradient(to right,#c62828,#ef5350)}`]})}}return e})();var Ht=20*1e3;function zt(){try{return!!Lt$1()}catch{return!1}}function qt(e,m){return new Promise(t=>{let i=setTimeout(()=>t(!1),m);e.then(()=>{clearTimeout(i),t(!0)},()=>{clearTimeout(i),t(!1)})})}var ie=class{};var D=(()=>{class e{constructor(){this._router=g(Gt$1),this._settings=g(Ka),this._org=g(FS),this._injector=g(Q$2),this._access=g(ie,{optional:!0})}async canActivate(t,i){return this.checkUser()}async canLoad(t,i){return this.checkUser()}async canActivateChild(t,i){return this.checkUser()}async checkUser(){if(!await this.waitForBackend(Promise.all([this._org.waitUntilInitialised(),uH(kA,Boolean,this._injector)])))return this.offlineAccess();let i=this._access?.group?[this._access.group]:this._settings.get(`app.allow_access_groups`)||[],n=await this.useGroupSubsystemAccess(),l=!1;if(n){let M=await this.waitForUser();if(!M)return this.offlineAccess();l=this.checkSubsystemAccess(M),z$1(`ACCESS`,`Checking subsystem access`,l)}else if(!i.length)l=!0,z$1(`ACCESS`,`No access groups`,l);else{let M=await this.waitForUser();if(!M)return this.offlineAccess();l=!!(M&&i.find(St=>M.groups.includes(St))),z$1(`ACCESS`,`Checking access groups`,l)}return l||this._router.navigate([`/unauthorised`]),!!l}async waitForUser(){if(!await this.waitForBackend(hx(Sx(),Boolean)))return null;let i=null;return await this.waitForBackend(MA(Qk).then(l=>i=l))?i:null}async waitForBackend(t){return qt(t,Ht)}offlineAccess(){return zt()?(z$1(`ACCESS`,`Backend unreachable. Continuing with cached credentials.`),!0):(z$1(`ACCESS`,`Backend unreachable and no cached credentials.`,void 0,`warn`),this._router.navigate([`/unauthorised`]),!1)}async useGroupSubsystemAccess(){let t=Lo()?.config?.use_group_subsystem_access;return t===!0||t===`true`}checkSubsystemAccess(t){if(!t)return!1;let n=(`${this._settings.get(`app.access_subsystem`)||``}`.trim()||`${this._settings.app_name||``}`).trim().toLowerCase();return n?PTe(n,$t.Read):!1}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵprov=R({token:e,factory:e.ɵfac,providedIn:`root`})}}return e})();function bt(){z$1(`MOCKS`,`No mocks available in production`)}var Kt=()=>[import(`./chunk-OFrA2JcP.js`).then(e=>e.ChatComponent)];function Yt(e,m){e&1&&Ao(0,`global-chat`)}var yt=(()=>{class e{constructor(){this.load_settings_schema=()=>import(`./chunk-C_d41ROx.js`),this.has_chat=T6(`chat.enabled`,!1),this._placeos=g(Aje)}ngOnInit(){Ije(bt),this._placeos.init()}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵcmp=Ve({type:e,selectors:[[`app-root`]],decls:10,vars:2,consts:[[`href`,`#stagehand-page-content`,1,`skip-link`],[1,`relative`,`h-1/2`,`w-full`,`flex-1`],[3,`loadSchema`]],template:function(i,n){i&1&&(jr(0,`a`,0),ds(1,` Skip to page content `),$r(),Ao(2,`global-banner`),jr(3,`div`,1),Ao(4,`router-outlet`),$r(),qM(5,Yt,1,0),WW(6,5,Kt),Ao(8,`global-loading`)(9,`settings-debug-panel-launcher`,2)),i&2&&(Tt$1(6),YW(n.has_chat()),Tt$1(3),ll(`loadSchema`,n.load_settings_schema))},dependencies:[pI,ut,gt,vt],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}`]})}}return e})();var Q={production:!0};var xt=[{path:`unauthorised`,component:Ct},{path:`alerts`,loadComponent:()=>import(`./chunk-f0gYRM-c.js`).then(e=>e.AlertsComponent),canActivate:[D]},{path:`alerts/:id`,loadComponent:()=>import(`./chunk-f0gYRM-c.js`).then(e=>e.AlertsComponent),canActivate:[D]},{path:`remote-support`,loadComponent:()=>import(`./chunk-p_Z3UkS2.js`).then(e=>e.RemoteSupportComponent),canActivate:[D]},{path:`analytics`,loadComponent:()=>import(`./chunk-HKaclElI.js`).then(e=>e.AnalyticsComponent),canActivate:[D]},{path:`dashboards`,loadComponent:()=>import(`./chunk-B7A_uUYv.js`).then(e=>e.DashboardsComponent),canActivate:[D],children:[{path:`list`,loadComponent:()=>import(`./chunk-Cy-hYS4H.js`).then(e=>e.DashboardListComponent)},{path:`:id/alerts`,loadComponent:()=>import(`./chunk-DZLqzzYH.js`).then(e=>e.DashboardAlertListComponent)},{path:`:id/alerts/manage`,loadComponent:()=>import(`./chunk-CWz1zQ8T.js`).then(e=>e.DashboardAlertManageComponent)},{path:`:id/alerts/manage/:alert_id`,loadComponent:()=>import(`./chunk-CWz1zQ8T.js`).then(e=>e.DashboardAlertManageComponent)},{path:`manage`,loadComponent:()=>import(`./chunk-CL-hZJAO.js`).then(e=>e.DashboardManageComponent)},{path:`manage/:id`,loadComponent:()=>import(`./chunk-CL-hZJAO.js`).then(e=>e.DashboardManageComponent)},{path:`view/:id`,loadComponent:()=>import(`./chunk-CO1Ivouh.js`).then(e=>e.DashboardViewComponent)},{path:`**`,redirectTo:`list`}]},{path:`recorder-grid`,loadComponent:()=>import(`./chunk-BuKNGV_8.js`).then(e=>e.RecorderGridViewComponent),canActivate:[D]},{path:`**`,redirectTo:`alerts`}];var wt={providers:[ez(),h3(xt,m3()),BN(oNe),fNe(`ngsw-worker.js`,{enabled:Q.production}),{provide:lr$1,useValue:HGe({showDialog:!1})},{provide:LB,deps:[Gt$1]}]};Q.production;AK(yt,wt).catch(e=>console.error(e));export{xi as _,Pe as a,Z as b,Mi as c,No as d,Qi as f,wo as g,Wn as h,Be as i,Mn as l,So as m,Yt$1 as n,Br as o,Si as p,mt as r,Ci as s,f as t,Ni as u,xo as v,L as y};