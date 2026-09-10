import{$ as HZ,$o as tge,Aa as lF,Ai as dr$1,An as Rt$1,Ao as ro,Ar as Xn,As as xT,B as Fa$1,Ba as lr$1,Bn as TK,Bs as zT,Bt as M$1,C as CG,Ci as dA,Cn as Qo$1,Co as qTe,Cr as X,Do as re,Ds as wt$1,Dt as Kg,Es as wr$1,Et as Kf,Fa as lTe,Fs as ye,Ft as Li,Gs as zk,H as Fl,Hn as Te,Ho as so$1,Hr as Yt,Ia as l_,It as Ll$1,J as GU,Ja as nOe,Jn as U,Jr as Zi$1,Js as l,Jt as Mr$1,Ka as my,Ki as fr$1,Kn as Tt,Li as ee$1,Ls as z,Lt as Ln$1,Mo as rt,Ms as xi,N as Ds,Na as lO,Oa as l4,Or as Xe,Os as x,Pi as eI,Ps as xo$1,Pt as Lf,Qi as gk,Ri as ege,Rn as T,Ro as s_,Rr as Y_,Rs as zEe,Sa as k$1,So as qO,Sr as Wo$1,Ss as wf,T as Cs,Tn as R,To as qn,Ts as wn$1,Tt as Ke,Uo as st,Ur as Z0,Us as ze$1,Vr as Yk,W as G3,Wa as mo$1,Wi as fo$1,Ws as zf,X as Ga$1,Xr as Zt,Xt as Mt$1,Yn as U3,Ys as m,Yt as Ms,Zi as ge,_ as Bf,_n as Pi,_t as Jl,aa as hg,ai as aO,as as uTe,at as I,ba as jo$1,bn as Q0,cn as Of,cr as Vl,ct as Ir$1,da as ige,dn as P3,eo as o2,f as As,fa as ij,fi as b3,gi as bz,gn as Pa$1,go as pl$1,gs as vz,ha as j,ho as pg,ir as VE,it as Ht,j as De,ja as lL,jn as S1,jr as Xt,ki as dq,ko as rge,kr as Xl,la as iP,ln as Ol,lo as oo$1,ls as ur$1,lt as Is,mn as PT,mo as pe,ms as ve$1,ni as _k,nr as Uo$1,oa as ho$1,oo as oYe,or as Va$1,p as B,pa as io$1,qi as g,qt as Mn$1,ri as _t$1,ro as oP,rs as uOe,s as $n,sa as ht$1,sn as OP,so as oc,ss as uo$1,st as II,t as $0,tn as NYe,tr as Ul,ts as u4,tt as Hf,ua as ic,ui as af,v as Bt,w as Cn$1,wo as qe,ws as wl,x as C3,xn as QTe,xo as qEe,ya as jl,yt as K,zi as el,zn as T3,zs as zO,zt as Lt}from"./chunk-sZD2XTNT.js";var oo=[`determinateSpinner`];function ao(n,e){if(n&1&&(zO(),ro(0,`svg`,11),Uo$1(1,`circle`,12),oo$1()),n&2){let t=io$1();qn(`viewBox`,t._viewBox()),Mt$1(),PT(`stroke-dasharray`,t._strokeCircumference(),`px`)(`stroke-dashoffset`,t._strokeCircumference()/2,`px`)(`stroke-width`,t._circleStrokeWidth(),`%`),qn(`r`,t._circleRadius())}}var so=new T(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:Wi})});var Wi=100;var lo=10;var ds=(()=>{class n{_elementRef=g(Te);_noopAnimations;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let t=g(so),i=HZ(),r=this._elementRef.nativeElement;this._noopAnimations=i===`di-disabled`&&!!t&&!t._forceAnimations,this.mode=r.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&i===`reduced-motion`&&r.classList.add(`mat-progress-spinner-reduced-motion`),t&&(t.color&&(this.color=this._defaultColor=t.color),t.diameter&&(this.diameter=t.diameter),t.strokeWidth&&(this.strokeWidth=t.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(t){this._value=Math.max(0,Math.min(100,t||0))}_value=0;get diameter(){return this._diameter}set diameter(t){this._diameter=t||0}_diameter=Wi;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(t){this._strokeWidth=t||0}_strokeWidth;_circleRadius(){return(this.diameter-lo)/2}_viewBox(){let t=this._circleRadius()*2+this.strokeWidth;return`0 0 ${t} ${t}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(i){return new(i||n)};static ɵcmp=qe({type:n,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(i,r){if(i&1&&Pa$1(oo,5),i&2){let o;Is(o=As())&&(r._determinateCircle=o.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(i,r){i&2&&(qn(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,r.mode===`determinate`?r.value:null)(`mode`,r.mode),af(`mat-`+r.color),PT(`width`,r.diameter,`px`)(`height`,r.diameter,`px`)(`--%NS%mat-progress-spinner-size`,r.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,r.diameter+`px`),Tt(`_mat-animation-noopable`,r._noopAnimations)(`mdc-circular-progress--indeterminate`,r.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,eI],diameter:[2,`diameter`,`diameter`,eI],strokeWidth:[2,`strokeWidth`,`strokeWidth`,eI]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(i,r){if(i&1&&(hg(0,ao,2,8,`ng-template`,null,0,dq),ro(2,`div`,2,1),zO(),ro(4,`svg`,3),Uo$1(5,`circle`,4),oo$1()(),qO(),ro(6,`div`,5)(7,`div`,6)(8,`div`,7),$0(9,8),oo$1(),ro(10,`div`,9),$0(11,8),oo$1(),ro(12,`div`,10),$0(13,8),oo$1()()()),i&2){let o=bz(1);Mt$1(4),qn(`viewBox`,r._viewBox()),Mt$1(),PT(`stroke-dasharray`,r._strokeCircumference(),`px`)(`stroke-dashoffset`,r._strokeDashOffset(),`px`)(`stroke-width`,r._circleStrokeWidth(),`%`),qn(`r`,r._circleRadius()),Mt$1(4),Ol(`ngTemplateOutlet`,o),Mt$1(2),Ol(`ngTemplateOutlet`,o),Mt$1(2),Ol(`ngTemplateOutlet`,o)}},dependencies:[TK],styles:[`.mat-mdc-progress-spinner {
  --%NS%mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--%NS%mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --%NS%mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--%NS%mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--%NS%mat-progress-spinner-active-indicator-color, var(--%NS%mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2})}return n})();var ls=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=De({type:n});static ɵinj=ve$1({imports:[ho$1]})}return n})();var tn=class{_box;_destroyed=new k$1;_resizeSubject=new k$1;_resizeObserver;_elementObservables=new Map;constructor(e){this._box=e,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)))}observe(e){return this._elementObservables.has(e)||this._elementObservables.set(e,new K(t=>{let i=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(e,{box:this._box}),()=>{this._resizeObserver?.unobserve(e),i.unsubscribe(),this._elementObservables.delete(e)}}).pipe(ze$1(t=>t.some(i=>i.target===e)),lO({bufferSize:1,refCount:!0}),Ir$1(this._destroyed))),this._elementObservables.get(e)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var Qi=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=g(re);constructor(){}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(t,i){let r=i?.box||`content-box`;return this._observers.has(r)||this._observers.set(r,new tn(r)),this._observers.get(r).observe(t)}static ɵfac=function(i){return new(i||n)};static ɵprov=M$1({token:n,factory:n.ɵfac})}return n})();var co=[`notch`];var uo=[`*`];var Zi=[`iconPrefixContainer`];var Xi=[`textPrefixContainer`];var Ji=[`iconSuffixContainer`];var er=[`textSuffixContainer`];var fo=[`textField`];var mo=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]];var ho=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function po(n,e){n&1&&Uo$1(0,`span`,21)}function _o(n,e){if(n&1&&(ro(0,`label`,20),wn$1(1,1),lr$1(2,po,1,0,`span`,21),oo$1()),n&2){let t=io$1(2);Ol(`floating`,t._shouldLabelFloat())(`monitorResize`,t._hasOutline())(`id`,t._labelId),qn(`for`,t._control.disableAutomaticLabeling?null:t._control.id),Mt$1(2),ur$1(!t.hideRequiredMarker&&t._control.required?2:-1)}}function go(n,e){if(n&1&&lr$1(0,_o,3,5,`label`,20),n&2)ur$1(io$1()._hasFloatingLabel()?0:-1)}function yo(n,e){n&1&&Uo$1(0,`div`,7)}function bo(n,e){}function vo(n,e){if(n&1&&hg(0,bo,0,0,`ng-template`,13),n&2){io$1(2);Ol(`ngTemplateOutlet`,bz(1))}}function xo(n,e){if(n&1&&(ro(0,`div`,9),lr$1(1,vo,1,1,null,13),oo$1()),n&2){let t=io$1();Ol(`matFormFieldNotchedOutlineOpen`,t._shouldLabelFloat()),Mt$1(),ur$1(t._forceDisplayInfixLabel()?-1:1)}}function So(n,e){n&1&&(ro(0,`div`,10,2),wn$1(2,2),oo$1())}function wo(n,e){n&1&&(ro(0,`div`,11,3),wn$1(2,3),oo$1())}function No(n,e){}function Eo(n,e){if(n&1&&hg(0,No,0,0,`ng-template`,13),n&2){io$1();Ol(`ngTemplateOutlet`,bz(1))}}function Co(n,e){n&1&&(ro(0,`div`,14,4),wn$1(2,4),oo$1())}function Mo(n,e){n&1&&(ro(0,`div`,15,5),wn$1(2,5),oo$1())}function ko(n,e){n&1&&Uo$1(0,`div`,16)}function Fo(n,e){n&1&&(ro(0,`div`,18),wn$1(1,6),oo$1())}function Do(n,e){if(n&1&&(ro(0,`mat-hint`,22),Ds(1),oo$1()),n&2){let t=io$1(2);Ol(`id`,t._hintLabelId),Mt$1(),lL(t.hintLabel)}}function Ro(n,e){if(n&1&&(ro(0,`div`,19),lr$1(1,Do,2,2,`mat-hint`,22),wn$1(2,7),Uo$1(3,`div`,23),wn$1(4,8),oo$1()),n&2){let t=io$1();Mt$1(),ur$1(t.hintLabel?1:-1)}}var nn=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=ee$1({type:n,selectors:[[`mat-label`]]})}return n})();var sr=new T(`MatError`);var Ao=(()=>{class n{id=g(Zi$1).getId(`mat-mdc-error-`);static ɵfac=function(i){return new(i||n)};static ɵdir=ee$1({type:n,selectors:[[`mat-error`],[``,`matError`,``]],hostAttrs:[1,`mat-mdc-form-field-error`,`mat-mdc-form-field-bottom-align`],hostVars:1,hostBindings:function(i,r){i&2&&wl(`id`,r.id)},inputs:{id:`id`},features:[Mn$1([{provide:sr,useExisting:n}])]})}return n})();var rn=(()=>{class n{align=`start`;id=g(Zi$1).getId(`mat-mdc-hint-`);static ɵfac=function(i){return new(i||n)};static ɵdir=ee$1({type:n,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(i,r){i&2&&(wl(`id`,r.id),qn(`align`,null),Tt(`mat-mdc-form-field-hint-end`,r.align===`end`))},inputs:{align:`align`,id:`id`}})}return n})();var dr=new T(`MatPrefix`);var To=(()=>{class n{set _isTextSelector(t){this._isText=!0}_isText=!1;static ɵfac=function(i){return new(i||n)};static ɵdir=ee$1({type:n,selectors:[[``,`matPrefix`,``],[``,`matIconPrefix`,``],[``,`matTextPrefix`,``]],inputs:{_isTextSelector:[0,`matTextPrefix`,`_isTextSelector`]},features:[Mn$1([{provide:dr,useExisting:n}])]})}return n})();var lr=new T(`MatSuffix`);var Io=(()=>{class n{set _isTextSelector(t){this._isText=!0}_isText=!1;static ɵfac=function(i){return new(i||n)};static ɵdir=ee$1({type:n,selectors:[[``,`matSuffix`,``],[``,`matIconSuffix`,``],[``,`matTextSuffix`,``]],inputs:{_isTextSelector:[0,`matTextSuffix`,`_isTextSelector`]},features:[Mn$1([{provide:lr,useExisting:n}])]})}return n})();var cr=new T(`FloatingLabelParent`);var tr=(()=>{class n{_elementRef=g(Te);get floating(){return this._floating}set floating(t){this._floating=t,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(t){this._monitorResize=t,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=g(Qi);_ngZone=g(re);_parent=g(cr);_resizeSubscription=new ye;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Oo(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(i){return new(i||n)};static ɵdir=ee$1({type:n,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(i,r){i&2&&Tt(`mdc-floating-label--float-above`,r.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return n})();function Oo(n){let e=n;if(e.offsetParent!==null)return e.scrollWidth;let t=e.cloneNode(!0);t.style.setProperty(`position`,`absolute`),t.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(t);let i=t.scrollWidth;return t.remove(),i}var nr=`mdc-line-ripple--active`;var lt=`mdc-line-ripple--deactivating`;var ir=(()=>{class n{_elementRef=g(Te);_cleanupTransitionEnd;constructor(){let t=g(re),i=g(wt$1);t.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let t=this._elementRef.nativeElement.classList;t.remove(lt),t.add(nr)}deactivate(){this._elementRef.nativeElement.classList.add(lt)}_handleTransitionEnd=t=>{let i=this._elementRef.nativeElement.classList,r=i.contains(lt);t.propertyName===`opacity`&&r&&i.remove(nr,lt)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(i){return new(i||n)};static ɵdir=ee$1({type:n,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return n})();var rr=(()=>{class n{_elementRef=g(Te);_ngZone=g(re);open=!1;_notch;ngAfterViewInit(){let t=this._elementRef.nativeElement,i=t.querySelector(`.mdc-floating-label`);i?(t.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(i.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration=``)}))):t.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(t){let i=this._notch.nativeElement;!this.open||!t?i.style.width=``:i.style.width=`calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(t){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${t}px)`)}static ɵfac=function(i){return new(i||n)};static ɵcmp=qe({type:n,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(i,r){if(i&1&&Pa$1(co,5),i&2){let o;Is(o=As())&&(r._notch=o.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(i,r){i&2&&Tt(`mdc-notched-outline--notched`,r.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:uo,decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(i,r){i&1&&(so$1(),xi(0,`div`,1),wr$1(1,`div`,2,0),wn$1(3),Mr$1(),xi(4,`div`,3))},encapsulation:2})}return n})();var on=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static ɵfac=function(i){return new(i||n)};static ɵdir=ee$1({type:n})}return n})();var an=new T(`MatFormField`);var Po=new T(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var or=`fill`;var Lo=`auto`;var ar=`fixed`;var zo=`translateY(-50%)`;var ur=(()=>{class n{_elementRef=g(Te);_changeDetectorRef=g(Ln$1);_platform=g(st);_idGenerator=g(Zi$1);_ngZone=g(re);_defaults=g(Po,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=tge(`iconPrefixContainer`);_textPrefixContainerSignal=tge(`textPrefixContainer`);_iconSuffixContainerSignal=tge(`iconSuffixContainer`);_textSuffixContainerSignal=tge(`textSuffixContainer`);_prefixSuffixContainers=ge(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(t=>t?.nativeElement).filter(t=>t!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=rge(nn);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(t){this._hideRequiredMarker=uOe(t)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Lo}set floatLabel(t){t!==this._floatLabel&&(this._floatLabel=t,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(t){let i=t||this._defaults?.appearance||or;this._appearanceSignal.set(i)}_appearanceSignal=R(or);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||ar}set subscriptSizing(t){this._subscriptSizing=t||this._defaults?.subscriptSizing||ar}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(t){this._hintLabel=t,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(t){this._explicitFormFieldControl=t}_destroyed=new k$1;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=mo$1();constructor(){let t=this._defaults,i=g(VE);t&&(t.appearance&&(this.appearance=t.appearance),this._hideRequiredMarker=!!t?.hideRequiredMarker,t.color&&(this.color=t.color)),_t$1(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=ge(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(t){let i=this._control,r=`mat-mdc-form-field-type-`;t&&this._elementRef.nativeElement.classList.remove(r+t.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(el([void 0,void 0]),pe(()=>[i.errorState,i.userAriaDescribedBy]),aO(),ze$1(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Ir$1(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(t=>!t._isText),this._hasTextPrefix=!!this._prefixChildren.find(t=>t._isText),this._hasIconSuffix=!!this._suffixChildren.find(t=>!t._isText),this._hasTextSuffix=!!this._suffixChildren.find(t=>t._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),ij(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let t=this._control.focused;t&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!t&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,t),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,t)}_syncOutlineLabelOffset(){ige({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let t of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(t,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:t=>this._writeOutlinedLabelStyles(t())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=ge(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(t){let i=this._control?this._control.ngControl:null;return i&&i[t]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let t=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&t.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let o=this._hintChildren?this._hintChildren.find(s=>s.align===`start`):null,a=this._hintChildren?this._hintChildren.find(s=>s.align===`end`):null;o?t.push(o.id):this._hintLabel&&t.push(this._hintLabelId),a&&t.push(a.id)}else this._errorChildren&&t.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||t;r=t.concat(i.filter(a=>a&&!o.includes(a)))}else r=t;this._control.setDescribedByIds(r),this._describedByIds=t}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let t=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=t?.getBoundingClientRect().width??0,s=i?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,u=o?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${zo} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${a+s}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,a+s+l+u]}_writeOutlinedLabelStyles(t){if(t!==null){let[i,r]=t;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let t=this._elementRef.nativeElement;if(t.getRootNode){let i=t.getRootNode();return i&&i!==t}return document.documentElement.contains(t)}static ɵfac=function(i){return new(i||n)};static ɵcmp=qe({type:n,selectors:[[`mat-form-field`]],contentQueries:function(i,r,o){if(i&1&&(Z0(o,r._labelChild,nn,5),xT(o,on,5)(o,dr,5)(o,lr,5)(o,sr,5)(o,rn,5)),i&2){vz();let a;Is(a=As())&&(r._formFieldControl=a.first),Is(a=As())&&(r._prefixChildren=a),Is(a=As())&&(r._suffixChildren=a),Is(a=As())&&(r._errorChildren=a),Is(a=As())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(Q0(r._iconPrefixContainerSignal,Zi,5)(r._textPrefixContainerSignal,Xi,5)(r._iconSuffixContainerSignal,Ji,5)(r._textSuffixContainerSignal,er,5),Pa$1(fo,5)(Zi,5)(Xi,5)(Ji,5)(er,5)(tr,5)(rr,5)(ir,5)),i&2){vz(4);let o;Is(o=As())&&(r._textField=o.first),Is(o=As())&&(r._iconPrefixContainer=o.first),Is(o=As())&&(r._textPrefixContainer=o.first),Is(o=As())&&(r._iconSuffixContainer=o.first),Is(o=As())&&(r._textSuffixContainer=o.first),Is(o=As())&&(r._floatingLabel=o.first),Is(o=As())&&(r._notchedOutline=o.first),Is(o=As())&&(r._lineRipple=o.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(i,r){i&2&&Tt(`mat-mdc-form-field-label-always-float`,r._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,r._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,r._hasIconSuffix)(`mat-form-field-invalid`,r._control.errorState)(`mat-form-field-disabled`,r._control.disabled)(`mat-form-field-autofilled`,r._control.autofilled)(`mat-form-field-appearance-fill`,r.appearance==`fill`)(`mat-form-field-appearance-outline`,r.appearance==`outline`)(`mat-form-field-hide-placeholder`,r._hasFloatingLabel()&&!r._shouldLabelFloat())(`mat-primary`,r.color!==`accent`&&r.color!==`warn`)(`mat-accent`,r.color===`accent`)(`mat-warn`,r.color===`warn`)(`ng-untouched`,r._shouldForward(`untouched`))(`ng-touched`,r._shouldForward(`touched`))(`ng-pristine`,r._shouldForward(`pristine`))(`ng-dirty`,r._shouldForward(`dirty`))(`ng-valid`,r._shouldForward(`valid`))(`ng-invalid`,r._shouldForward(`invalid`))(`ng-pending`,r._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[Mn$1([{provide:an,useExisting:n},{provide:cr,useExisting:n}])],ngContentSelectors:ho,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(i,r){if(i&1&&(so$1(mo),hg(0,go,1,1,`ng-template`,null,0,dq),ro(2,`div`,6,1),Xt(`click`,function(a){return r._control.onContainerClick(a)}),lr$1(4,yo,1,0,`div`,7),ro(5,`div`,8),lr$1(6,xo,2,2,`div`,9),lr$1(7,So,3,0,`div`,10),lr$1(8,wo,3,0,`div`,11),ro(9,`div`,12),lr$1(10,Eo,1,1,null,13),wn$1(11),oo$1(),lr$1(12,Co,3,0,`div`,14),lr$1(13,Mo,3,0,`div`,15),oo$1(),lr$1(14,ko,1,0,`div`,16),oo$1(),ro(15,`div`,17),lr$1(16,Fo,2,0,`div`,18)(17,Ro,5,1,`div`,19),oo$1()),i&2){let o;Mt$1(2),Tt(`mdc-text-field--filled`,!r._hasOutline())(`mdc-text-field--outlined`,r._hasOutline())(`mdc-text-field--no-label`,!r._hasFloatingLabel())(`mdc-text-field--disabled`,r._control.disabled)(`mdc-text-field--invalid`,r._control.errorState),Mt$1(2),ur$1(!r._hasOutline()&&!r._control.disabled?4:-1),Mt$1(2),ur$1(r._hasOutline()?6:-1),Mt$1(),ur$1(r._hasIconPrefix?7:-1),Mt$1(),ur$1(r._hasTextPrefix?8:-1),Mt$1(2),ur$1(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),Mt$1(2),ur$1(r._hasTextSuffix?12:-1),Mt$1(),ur$1(r._hasIconSuffix?13:-1),Mt$1(),ur$1(r._hasOutline()?-1:14),Mt$1(),Tt(`mat-mdc-form-field-subscript-dynamic-size`,r.subscriptSizing===`dynamic`);let a=r._getSubscriptMessageType();Mt$1(),ur$1((o=a)===`error`?16:o===`hint`?17:-1)}},dependencies:[tr,rr,TK,ir,rn],styles:[`.mdc-text-field {
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
`],encapsulation:2})}return n})();var sn=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=De({type:n});static ɵinj=ve$1({imports:[GU,ur,ho$1]})}return n})();var _r=Symbol(`FIELD_TREE`);var dn=0;function Bo(){return dn}function ee(n,e){return(...t)=>{try{return dn=e,n(...t)}finally{dn=0}}}function $o(n){return!n}function fr(n){return n}function te(n){return Array.isArray(n)}function ut(n){return(typeof n==`object`||typeof n==`function`)&&n!=null}var le=Symbol();var bt=Symbol();var Le=class{predicates;fns=[];constructor(e){this.predicates=e}push(e){this.fns.push(mr(this.predicates,e))}mergeIn(e){let t=this.predicates?e.fns.map(i=>mr(this.predicates,i)):e.fns;this.fns.push(...t)}hasRules(){return this.fns.length>0}};var ft=class extends Le{get defaultValue(){return!1}compute(e){return this.fns.some(t=>{let i=t(e);return i&&i!==bt})}};var ve=class n extends Le{ignore;static ignoreNull(e){return new n(e,t=>t===null)}constructor(e,t){super(e),this.ignore=t}get defaultValue(){return[]}compute(e){return this.fns.reduce((t,i)=>{let r=i(e);return r===void 0||r===bt?t:te(r)?[...t,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?t:[...t,r]},[])}};var ln=class extends ve{constructor(e){super(e,void 0)}};var cn=class extends Le{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(e,t){super(e),this.key=t}compute(e){if(this.fns.length===0)return this.key.reducer.getInitial();let t=this.key.reducer.getInitial();for(let i=0;i<this.fns.length;i++){let r=this.fns[i](e);r!==bt&&(t=this.key.reducer.reduce(t,r))}return t}};function mr(n,e){return n.length===0?e:t=>{for(let i of n){let r=t.stateOf(i.path),o=U(r.structure.pathKeys).length-i.depth;for(let a=0;a<o;a++)r=r.structure.parent;if(!i.fn(r.context))return bt}return e(t)}}var xe=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(e){this.predicates=e,this.hidden=new ft(e),this.disabledReasons=new ln(e),this.readonly=new ft(e),this.syncErrors=ve.ignoreNull(e),this.syncTreeErrors=ve.ignoreNull(e),this.asyncErrors=ve.ignoreNull(e)}hasAnyLogic(){return this.hidden.hasRules()||this.disabledReasons.hasRules()||this.readonly.hasRules()||this.syncErrors.hasRules()||this.syncTreeErrors.hasRules()||this.asyncErrors.hasRules()||this.metadata.size>0}hasMetadata(e){return this.metadata.has(e)}hasMetadataKeys(){return this.metadata.size>0}getMetadataKeys(){return this.metadata.keys()}getMetadata(e){return this.metadata.has(e)||this.metadata.set(e,new cn(this.predicates,e)),this.metadata.get(e)}mergeIn(e){this.hidden.mergeIn(e.hidden),this.disabledReasons.mergeIn(e.disabledReasons),this.readonly.mergeIn(e.readonly),this.syncErrors.mergeIn(e.syncErrors),this.syncTreeErrors.mergeIn(e.syncTreeErrors),this.asyncErrors.mergeIn(e.asyncErrors);for(let t of e.getMetadataKeys()){let i=e.metadata.get(t);this.getMetadata(t).mergeIn(i)}}};var mt=class{depth;constructor(e){this.depth=e}build(){return new ht(this,[],0)}};var Se=class n extends mt{constructor(e){super(e)}current;all=[];addHiddenRule(e){this.getCurrent().addHiddenRule(e)}addDisabledReasonRule(e){this.getCurrent().addDisabledReasonRule(e)}addReadonlyRule(e){this.getCurrent().addReadonlyRule(e)}addSyncErrorRule(e){this.getCurrent().addSyncErrorRule(e)}addSyncTreeErrorRule(e){this.getCurrent().addSyncTreeErrorRule(e)}addAsyncErrorRule(e){this.getCurrent().addAsyncErrorRule(e)}addMetadataRule(e,t){this.getCurrent().addMetadataRule(e,t)}getChild(e){if(e===le){let t=this.getCurrent().children;t.size>(t.has(le)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(e)}hasLogic(e){return this===e?!0:this.all.some(({builder:t})=>t.hasLogic(e))}hasRules(){return this.all.length>0}anyChildHasLogic(){return this.all.some(({builder:e})=>e.anyChildHasLogic())}mergeIn(e,t){t?this.all.push({builder:e,predicate:{fn:ee(t.fn,this.depth),path:t.path}}):this.all.push({builder:e}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new ze(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new n(0)}};var ze=class extends mt{logic=new xe([]);children=new Map;constructor(e){super(e)}addHiddenRule(e){this.logic.hidden.push(ee(e,this.depth))}addDisabledReasonRule(e){this.logic.disabledReasons.push(ee(e,this.depth))}addReadonlyRule(e){this.logic.readonly.push(ee(e,this.depth))}addSyncErrorRule(e){this.logic.syncErrors.push(ee(e,this.depth))}addSyncTreeErrorRule(e){this.logic.syncTreeErrors.push(ee(e,this.depth))}addAsyncErrorRule(e){this.logic.asyncErrors.push(ee(e,this.depth))}addMetadataRule(e,t){this.logic.getMetadata(e).push(ee(t,this.depth))}getChild(e){return this.children.has(e)||this.children.set(e,new Se(this.depth+1)),this.children.get(e)}hasLogic(e){return this===e}hasRules(){return this.logic.hasAnyLogic()||this.children.size>0}anyChildHasLogic(){for(let e of this.children.values())if(e.hasRules())return!0;return!1}};var ht=class n{builder;predicates;depth;logic;constructor(e,t,i){this.builder=e,this.predicates=t,this.depth=i,this.logic=e?Ho(e,t,i):new xe([])}getChild(e){let t=this.builder?gr(this.builder,e):[];if(t.length===0)return new n(void 0,[],this.depth+1);if(t.length===1){let{builder:i,predicates:r}=t[0];return new n(i,[...this.predicates,...r.map(o=>fn(o,this.depth))],this.depth+1)}else return new un(t.map(({builder:r,predicates:o})=>new n(r,[...this.predicates,...o.map(a=>fn(a,this.depth))],this.depth+1)))}hasLogic(e){return this.builder?this.builder.hasLogic(e):!1}hasRules(){return this.builder?this.builder.hasRules():!1}anyChildHasLogic(){return this.builder?this.builder.anyChildHasLogic():!1}};var un=class n{all;logic;constructor(e){this.all=e,this.logic=new xe([]);for(let t of e)this.logic.mergeIn(t.logic)}getChild(e){return new n(this.all.flatMap(t=>t.getChild(e)))}hasLogic(e){return this.all.some(t=>t.hasLogic(e))}hasRules(){return this.all.some(e=>e.hasRules())}anyChildHasLogic(){return this.all.some(e=>e.anyChildHasLogic())}};function gr(n,e){if(n instanceof Se)return n.all.flatMap(({builder:t,predicate:i})=>{let r=gr(t,e);return i?r.map(({builder:o,predicates:a})=>({builder:o,predicates:[...a,i]})):r});if(n instanceof ze)return[...e!==le&&n.children.has(le)?[{builder:n.getChild(le),predicates:[]}]:[],...n.children.has(e)?[{builder:n.getChild(e),predicates:[]}]:[]];throw new I(1909,!1)}function Ho(n,e,t){let i=new xe(e);if(n instanceof Se){let r=n.all.map(({builder:o,predicate:a})=>new ht(o,a?[...e,fn(a,t)]:e,t));for(let o of r)i.mergeIn(o.logic)}else if(n instanceof ze)i.mergeIn(n.logic);else throw new I(1909,!1);return i}function fn(n,e){return m(l({},n),{depth:e})}var yr=Symbol(`PATH`);var H=class n{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,Vo);logicBuilder;constructor(e,t,i,r){this.keys=e,this.parent=i,this.keyInParent=r,this.root=t??this,i||(this.logicBuilder=Se.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(e){return this.children.has(e)||this.children.set(e,new n([...this.keys,e],this.root,this,e)),this.children.get(e)}mergeIn(e,t){let i=e.compile();this.builder.mergeIn(i.builder,t)}static unwrapFieldPath(e){return e[yr]}static newRoot(){return new n([],void 0,void 0,void 0)}};var Vo={get(n,e){return e===yr?n:n.getChild(e).fieldPathProxy}};var ct;var Pe=new Map;var pt=class n{schemaFn;constructor(e){this.schemaFn=e}compile(){if(Pe.has(this))return Pe.get(this);let e=H.newRoot();Pe.set(this,e);let t=ct;try{ct=e,this.schemaFn(e.fieldPathProxy)}finally{ct=t}return e}static create(e){return e instanceof n?e:new n(e)}static rootCompile(e){try{return Pe.clear(),e===void 0?H.newRoot():e instanceof n?e.compile():new n(e).compile()}finally{Pe.clear()}}};function Uo(n){return n instanceof pt||typeof n==`function`}function vt(n){if(ct!==H.unwrapFieldPath(n).root)throw new I(1908,!1)}function wn(n,e,t){return vt(n),H.unwrapFieldPath(n).builder.addMetadataRule(e,t),e}var we={list(){return{reduce:(n,e)=>e===void 0?n:[...n,e],getInitial:()=>[]}},min(){return{reduce:(n,e)=>n===void 0||e===void 0?n??e:e<n?e:n,getInitial:()=>{}}},max(){return{reduce:(n,e)=>n===void 0||e===void 0?n??e:e>n?e:n,getInitial:()=>{}}},or(){return{reduce:(n,e)=>n||e,getInitial:()=>!1}},and(){return{reduce:(n,e)=>n&&e,getInitial:()=>!0}},override:jo};function jo(n){return{reduce:(e,t)=>t,getInitial:()=>n?.()}}var Nn=Symbol(`IS_ASYNC_VALIDATION_RESOURCE`);var _t=class{reducer;create;brand;[Nn];constructor(e,t){this.reducer=e,this.create=t}};function ne(n){return new _t(n??we.override())}function En(){return ne()}var Cn=ne(we.or());var br=En();var vr=En();var xr=ne(we.max());var Sr=ne(we.min());var wr=ne(we.list());function M(n,e){if(n===e)return!0;if(!n||!e||n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(!Object.is(n[t],e[t]))return!1;return!0}function Ko(n){return n.errors().length>0?`invalid`:n.pending()?`unknown`:`valid`}var mn=class{node;constructor(e){this.node=e}rawSyncTreeErrors=ge(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]],{equal:M});syncErrors=ge(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...qo(this.node.submitState.submissionErrors())],{equal:M});syncValid=ge(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(e,t)=>t&&e.validationState.syncValid(),$o));syncTreeErrors=ge(()=>this.rawSyncTreeErrors().filter(e=>e.fieldTree===this.node.fieldTree),{equal:M});rawAsyncErrors=ge(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]],{equal:M});asyncErrors=ge(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(e=>e===`pending`||e.fieldTree===this.node.fieldTree),{equal:M});parseErrors=ge(()=>this.node.formFieldBindings().flatMap(e=>e.parseErrors()),{equal:M});errors=ge(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(e=>e!==`pending`)],{equal:M});errorSummary=ge(()=>{let e=this.node.structure.reduceChildren(this.errors(),(t,i)=>[...i,...t.errorSummary()]);return U(()=>e.sort(Yo)),e},{equal:M});pending=ge(()=>this.node.structure.reduceChildren(this.asyncErrors().includes(`pending`),(e,t)=>t||e.validationState.pending()));status=ge(()=>{if(this.shouldSkipValidation())return`valid`;let e=Ko(this);return this.node.structure.reduceChildren(e,(t,i)=>i===`invalid`||t.validationState.status()===`invalid`?`invalid`:i===`unknown`||t.validationState.status()===`unknown`?`unknown`:`valid`,t=>t===`invalid`)});valid=ge(()=>this.status()===`valid`);invalid=ge(()=>this.status()===`invalid`);shouldSkipValidation=ge(()=>this.node.hidden()||this.node.disabled()||this.node.readonly()||this.node.structure.isOrphaned())};function qo(n){return n===void 0?[]:te(n)?n:[n]}function Nr(n,e){if(te(n))for(let t of n)t.fieldTree??=e;else n&&(n.fieldTree??=e);return n}function hr(n){return n.formField?n.formField.element:n.fieldTree().formFieldBindings().reduce((e,t)=>!e||!t.element?e??t.element:e.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_PRECEDING?t.element:e,void 0)}function Yo(n,e){let t=hr(n),i=hr(e);return t===i?0:t===void 0||i===void 0?t===void 0?1:-1:t.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var hn=ne();var pn=class{node;cache=new WeakMap;constructor(e){this.node=e,this.fieldTreeOf=this.fieldTreeOf.bind(this),this.stateOf=this.stateOf.bind(this)}resolve(e){if(!this.cache.has(e)){let t=ge(()=>{let i=H.unwrapFieldPath(e),r=this.node,o=Bo();for(;o>0||!r.structure.logic.hasLogic(i.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new I(1900,!1);for(let a of i.keys)if(r=r.structure.getChild(a),r===void 0)throw new I(1901,!1);return r.fieldTree});this.cache.set(e,t)}return this.cache.get(e)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=ge(()=>{let e=this.key();if(!te(U(this.node.structure.parent.value)))throw new I(1906,!1);return Number(e)});fieldTreeOf(e){return this.resolve(e)}stateOf(e){return this.resolve(e)()}valueOf=e=>{let t=this.resolve(e)().value();if(t instanceof Kg)throw new I(1907,!1);return t}};var _n=class{node;metadata=new Map;constructor(e){this.node=e}runMetadataCreateLifecycle(){if(!this.node.logicNode.logic.hasMetadataKeys())return;let e=zT();e&&Fa$1(!1);try{U(()=>Bt(this.node.structure.injector,()=>{for(let t of this.node.logicNode.logic.getMetadataKeys())if(t.create){let i=this.node.logicNode.logic.getMetadata(t),r=t.create(this.node,ge(()=>i.compute(this.node.context)));this.metadata.set(t,r)}}))}finally{e&&Fa$1(!0)}}get(e){if(this.has(e)&&!this.metadata.has(e)){if(e.create)throw new I(1912,!1);let t=this.node.logicNode.logic.getMetadata(e);this.metadata.set(e,ge(()=>t.compute(this.node.context)))}return this.metadata.get(e)}has(e){return this.node.logicNode.logic.hasMetadata(e)}};var Go={get(n,e,t){if(e===_r)return!0;let i=n(),r=i.structure.getChild(e);if(r!==void 0)return r.fieldTree;let o=U(i.value);if(te(o)){if(e===`length`)return i.value().length;if(e===Symbol.iterator)return()=>(i.value(),Array.prototype[Symbol.iterator].apply(i.fieldTree))}if(ut(o)&&e===Symbol.iterator)return function*(){for(let a in t)yield[a,t[a]]}},getOwnPropertyDescriptor(n,e){let t=U(n().value),i=Reflect.getOwnPropertyDescriptor(t,e);return i&&!i.configurable&&(i.configurable=!0),i},ownKeys(n){let e=U(n().value);return typeof e==`object`&&e!==null?Reflect.ownKeys(e):[]}};function Wo(n,e){let t=ge(()=>n()[e()]);return t[rt]=n[rt],t.set=i=>{Object.is(U(t),i)||n.update(r=>Qo(r,i,e()))},t.update=i=>{t.set(i(U(t)))},t.asReadonly=()=>t,t}function Qo(n,e,t){if(te(n)){let i=[...n];return i[t]=e,i}else return m(l({},n),{[t]:e})}var be=Symbol(``);var Er=ge(()=>!1);var gt=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;_anyChildHasLogic;get injector(){return this._injector??=X.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(e,t,i){this.logic=e,this.node=t,this.createChildNode=i}children(){this.ensureChildrenMap();let e=this.childrenMap();return e===void 0?[]:Array.from(e.byPropertyKey.values()).map(t=>U(t.reader))}materializedChildren(){let e=this.childrenMap();return e===void 0?[]:Array.from(e.byPropertyKey.values()).map(t=>t.node)}_areChildrenMaterialized(){return U(this.childrenMap)!==void 0}ensureChildrenMap(){this._areChildrenMaterialized()||U(()=>{this.childrenMap.update(e=>this.computeChildrenMap(this.value(),e,!0))})}getChild(e){this.ensureChildrenMap();let t=e.toString(),i=U(this.childrenMap)?.byPropertyKey.get(t)?.reader;return i||(i=this.createReader(t)),i()}reduceChildren(e,t,i){let r=this.childrenMap();if(!r)return e;let o=e;for(let a of r.byPropertyKey.values()){if(i?.(o))break;o=t(U(a.reader),o)}return o}destroy(){this.injector.destroy()}createKeyOrOrphanSignals(e,t,i){if(e===`root`)return{keyInParent:Cr,isOrphaned:Er};let r=this.parent,o=i,a=ge(()=>{if(r.structure.isOrphaned())return be;let u=r.structure.childrenMap();if(!u)return be;let S=u.byPropertyKey.get(o);if(S&&S.node===this.node)return o;if(t===void 0)return be;for(let[R,A]of u.byPropertyKey)if(A.node===this.node)return o=R;return be}),s=ge(()=>a()===be);return{keyInParent:ge(()=>{let u=a();if(u===be)throw t===void 0?new I(-1902,!1):new I(1904,!1);return u}),isOrphaned:s}}createChildrenMap(){return Ll$1({source:this.value,computation:(e,t)=>this.computeChildrenMap(e,t?.value,!1)})}computeChildrenMap(e,t,i){if(!ut(e)||!i&&t===void 0&&!(this._anyChildHasLogic??=this.logic.anyChildHasLogic()))return;t??={byPropertyKey:new Map};let r,o=te(e);t!==void 0&&(o?r=Xo(t,e,this.identitySymbol):r=Jo(t,e));for(let a of Object.keys(e)){let s,l$1=e[a];if(l$1===void 0){t.byPropertyKey.has(a)&&(r??=l({},t),r.byPropertyKey.delete(a));continue}o&&ut(l$1)&&!te(l$1)&&(s=l$1[this.identitySymbol]??=Symbol(``));let u;s&&(t.byTrackingKey?.has(s)||(r??=l({},t),r.byTrackingKey??=new Map,r.byTrackingKey.set(s,this.createChildNode(a,s,o))),u=(r??t).byTrackingKey.get(s));let S=t.byPropertyKey.get(a);S===void 0?(r??=l({},t),r.byPropertyKey.set(a,{reader:this.createReader(a),node:u??this.createChildNode(a,s,o)})):u&&u!==S.node&&(r??=l({},t),S.node=u)}return r??t}createReader(e){return ge(()=>this.childrenMap()?.byPropertyKey.get(e)?.node)}};var gn=class extends gt{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return Zo}get keyInParent(){return Cr}isOrphaned=Er;childrenMap;constructor(e,t,i,r,o){super(t,e,o),this.fieldManager=i,this.value=r,this.childrenMap=this.createChildrenMap()}};var yn=class extends gt{logic;parent;root;pathKeys;keyInParent;value;childrenMap;isOrphaned;get fieldManager(){return this.root.structure.fieldManager}constructor(e,t,i,r,o,a){super(t,e,a),this.logic=t,this.parent=i,this.root=this.parent.structure.root;let s=this.createKeyOrOrphanSignals(`child`,r,o);this.isOrphaned=s.isOrphaned,this.keyInParent=s.keyInParent,this.pathKeys=ge(()=>[...i.structure.pathKeys(),this.keyInParent()]),this.value=Wo(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var Zo=ge(()=>[]);var Cr=ge(()=>{throw new I(1905,!1)});function Xo(n,e,t){let i,r=new Set(n.byPropertyKey.keys()),o=n.byTrackingKey&&new Set(n.byTrackingKey.keys());for(let a=0;a<e.length;a++){let s=e[a];r.delete(a.toString()),o&&ut(s)&&Object.hasOwn(s,t)&&o.delete(s[t])}if(r.size>0){i??=l({},n);for(let a of r)i.byPropertyKey.delete(a)}if(o&&o.size>0){i??=l({},n);for(let a of o)i.byTrackingKey.delete(a)}return i}function Jo(n,e){let t;for(let i of n.byPropertyKey.keys())Object.hasOwn(e,i)||(t??=l({},n),t.byPropertyKey.delete(i));return t}var bn=class{node;selfSubmitting=R(!1);submissionErrors;constructor(e){this.node=e,this.submissionErrors=Ll$1({source:this.node.structure.value,computation:()=>[]})}submitting=ge(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))};var Be=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new pn(this)}fieldProxy=new Proxy(()=>this,Go);pathNode;constructor(e){this.pathNode=e.pathNode,this.fieldAdapter=e.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,e),this.validationState=this.fieldAdapter.createValidationState(this,e),this.nodeState=this.fieldAdapter.createNodeState(this,e),this.metadataState=new _n(this),this.submitState=new bn(this),this.controlValue=this.controlValueSignal(),this.metadataState.runMetadataCreateLifecycle()}focusBoundControl(e){this.getBindingForFocus()?.focus(e)}getBindingForFocus(){return this.formFieldBindings().filter(t=>t.focus!==void 0).reduce(pr,void 0)||this.structure.children().map(t=>t.getBindingForFocus()).reduce(pr,void 0)}pendingSync=Ll$1({source:()=>this.value(),computation:(e,t)=>{t?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){let e=this.metadata(vr)?.();return e?this.metadata(e):void 0}get maxLength(){return this.metadata(Sr)}get min(){let e=this.metadata(br)?.();return e?this.metadata(e):void 0}get minLength(){return this.metadata(xr)}get pattern(){return this.metadata(wr)??ea}get required(){return this.metadata(Cn)??ta}metadata(e){return this.metadataState.get(e)}getError(e){return this.errors().find(t=>t.kind===e)}hasMetadata(e){return this.metadataState.has(e)}markAsTouched(e){this.structure.isOrphaned()||U(()=>{this.markAsTouchedInternal(e),this.flushSync()})}markAsTouchedInternal(e){if(!this.structure.isOrphaned()&&!this.validationState.shouldSkipValidation()&&(this.nodeState.markAsTouched(),!e?.skipDescendants))for(let t of this.structure.children())t.markAsTouchedInternal()}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(e){U(()=>this._reset(e))}_reset(e){this.pendingSync()?.abort(),e!==void 0&&this.value.set(e),this.controlValue.rawSet(this.value()),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let t of this.formFieldBindings())t.reset();for(let t of this.structure.materializedChildren())t._reset()}reloadValidation(){U(()=>this._reloadValidation())}_reloadValidation(){let e=this.logicNode.logic.getMetadataKeys();for(let t of e)t[Nn]&&this.metadata(t).reload?.();for(let t of this.structure.children())t._reloadValidation()}controlValueSignal(){let e=Ll$1(this.value);e.rawSet=e.set,e.set=i=>{e.rawSet(i),this.markAsDirty(),this.debounceSync()};let t=e.update;return e.update=i=>{t(i),this.markAsDirty(),this.debounceSync()},e}sync(){this.value.set(this.controlValue())}flushSync(){let e=this.pendingSync();e&&!e.signal.aborted&&(e.abort(),this.sync())}async debounceSync(){let e=U(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(e){let t=new AbortController,i=e(t.signal);if(i&&(this.pendingSync.set(t),await i,t.signal.aborted))return}this.structure.isOrphaned()||this.sync()}static newRoot(e,t,i,r){return r.newRoot(e,t,i,r)}createStructure(e){return e.kind===`root`?new gn(this,e.logic,e.fieldManager,e.value,this.newChild.bind(this)):new yn(this,e.logic,e.parent,e.identityInParent,e.initialKeyInParent,this.newChild.bind(this))}newChild(e,t,i){let r,o;return i?(r=this.pathNode.getChild(le),o=this.structure.logic.getChild(le)):(r=this.pathNode.getChild(e),o=this.structure.logic.getChild(e)),this.fieldAdapter.newChild({kind:`child`,parent:this,pathNode:r,logic:o,initialKeyInParent:e,identityInParent:t,fieldAdapter:this.fieldAdapter})}};var ea=ge(()=>[]);var ta=ge(()=>!1);function pr(n,e){return n?e&&n.element.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e:n:e}var vn=class{node;selfTouched=R(!1);selfDirty=R(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=R([]);constructor(e){this.node=e}dirty=ge(()=>{let e=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,i)=>i||t.nodeState.dirty(),fr)});touched=ge(()=>{let e=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,i)=>i||t.nodeState.touched(),fr)});disabledReasons=ge(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)],{equal:M});disabled=ge(()=>!!this.disabledReasons().length);readonly=ge(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=ge(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=ge(()=>{let e=this.node.structure.parent;return e?`${e.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=ge(()=>{if(this.node.logicNode.logic.hasMetadata(hn)){let t=this.node.logicNode.logic.getMetadata(hn).compute(this.node.context);if(t)return i=>t(this.node.context,i)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=ge(()=>this.hidden()||this.disabled()||this.readonly())};var xn=class{newRoot(e,t,i,r){return new Be({kind:`root`,fieldManager:e,value:t,pathNode:i,logic:i.builder.build(),fieldAdapter:r})}newChild(e){return new Be(e)}createNodeState(e){return new vn(e)}createValidationState(e){return new mn(e)}createStructure(e,t){return e.createStructure(t)}};var Sn=class{injector;rootName;submitOptions;constructor(e,t,i){this.injector=e,this.rootName=t??`${this.injector.get(xo$1)}.form${na++}`,this.submitOptions=i}structures=new Set;createFieldManagementEffect(e){_t$1(()=>{let t=new Set;this.markStructuresLive(e,t);for(let i of this.structures)t.has(i)||(this.structures.delete(i),U(()=>i.destroy()))},{injector:this.injector})}markStructuresLive(e,t){t.add(e);for(let i of e.children())this.markStructuresLive(i.structure,t)}};var na=0;var Mr=new T(``);function ia(n){let e,t,i;return n.length===3?[e,t,i]=n:n.length===2?Uo(n[1])?[e,t]=n:[e,i]=n:[e]=n,[e,t,i]}function ra(...n){let[e,t,i]=ia(n),r=i?.injector??g(X),o=Bt(r,()=>pt.rootCompile(t)),a=new Sn(r,i?.name,i?.submission),s=i?.adapter??new xn,l=Be.newRoot(a,e,o,s);a.createFieldManagementEffect(l.structure);let{experimentalWebMcpTool:u}=i??{};if(u){let S=Bt(r,()=>g(Mr,{optional:!0}));S&&Bt(r,()=>S(l.fieldTree,{name:u.name,description:u.description}))}return l.fieldTree}var yt=class{kind=`compat`;control;fieldTree;context;message;constructor({context:e,kind:t,control:i}){this.context=e,this.kind=t,this.control=i}};function kr(n){if(n.length===0)return null;let e={};for(let t of n)e[t.kind]=t instanceof yt?t.context:t;return e}function Fr(n,e){return n===null?[]:Object.entries(n).map(([t,i])=>new yt({context:i,kind:t,control:e}))}var oa=new T(``);function gd(n,e){vt(n);let t=H.unwrapFieldPath(n),i;typeof e==`function`||typeof e==`string`?i=e:i=e?.when,t.builder.addDisabledReasonRule(r=>{let o=!0;return typeof i==`string`?o=i:i&&(o=i(r)),typeof o==`string`?{fieldTree:r.fieldTree,message:o}:o?{fieldTree:r.fieldTree}:void 0})}function xt(n,e){return n instanceof Function?n(e):n}function Tr(n){return typeof n==`number`?isNaN(n):n===``||n===!1||n==null}function Dr(n){return n===void 0?[]:Array.isArray(n)?n:[n]}function Ir(n,e){vt(n),H.unwrapFieldPath(n).builder.addSyncErrorRule(i=>Nr(e(i),i.fieldTree))}function aa(n){return new Mn(n)}function sa(n){return new kn(n)}var $e=class{__brand=void 0;kind=``;fieldTree;message;constructor(e){e&&Object.assign(this,e)}};var Mn=class extends $e{kind=`required`};var kn=class extends $e{kind=`email`};var St=class extends $e{kind=`parse`};var da=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function yd(n,e){Ir(n,t=>{if(!(e?.when&&!e.when(t))&&!Tr(t.value())&&!da.test(t.value()))return e?.error?xt(e.error,t):sa({message:xt(e?.message,t)})})}function bd(n,e){let t=wn(n,ne(),i=>e?.when?e.when(i):!0);wn(n,Cn,({state:i})=>i.metadata(t)()),Ir(n,i=>{if(i.state.metadata(t)()&&Tr(i.value()))return e?.error?xt(e.error,i):aa({message:xt(e?.message,i)})})}function la(n,e,t){let i=Ll$1({source:n,computation:()=>[],equal:M}),r=a=>{let s=t(a);i.set(Dr(s.error)),s.value!==void 0&&e(s.value),i.set(Dr(s.error))},o=()=>{i.set([])};return{errors:i.asReadonly(),setRawValue:r,reset:o}}var Fn=class{field;constructor(e){this.field=e}control=this;get value(){return this.field().controlValue()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return kr(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return`DISABLED`;if(this.field().valid())return`VALID`;if(this.field().invalid())return`INVALID`;if(this.field().pending())return`PENDING`;throw new I(1910,!1)}valueAccessor=null;hasValidator(e){return e===II.required?this.field().required():!1}updateValueAndValidity(){}};var Dn={disabled:`disabled`,disabledReasons:`disabledReasons`,dirty:`dirty`,errors:`errors`,hidden:`hidden`,invalid:`invalid`,max:`max`,maxLength:`maxLength`,min:`min`,minLength:`minLength`,name:`name`,pattern:`pattern`,pending:`pending`,readonly:`readonly`,required:`required`,touched:`touched`};var ca=(()=>{let n={};for(let e of Object.keys(Dn))n[Dn[e]]=e;return n})();function Rn(n,e){return n[ca[e]]?.()}var An=Object.values(Dn);function Nt(){return{}}function ie(n,e,t){return n[e]!==t?(n[e]=t,!0):!1}function ua(n,e,t){let i;if(Or(n)&&t.isBadInput(n))return{error:new St};switch(n.type){case`checkbox`:return{value:n.checked};case`number`:case`range`:case`datetime-local`:if(i=U(e),typeof i==`number`||i===null)return{value:n.value===``?null:n.valueAsNumber};break;case`date`:case`month`:case`time`:case`week`:if(i=U(e),i===null||i instanceof Date)return{value:n.valueAsDate};if(typeof i==`number`)return{value:n.valueAsNumber};break}if(n.tagName===`INPUT`&&n.type===`text`&&(i??=U(e),typeof i==`number`||i===null)){if(n.value===``)return{value:null};let r=Number(n.value);return Number.isNaN(r)?{error:new St}:{value:r}}return{value:n.value}}function Rr(n,e){switch(n.type){case`checkbox`:n.checked=e;return;case`radio`:n.checked=e===n.value;return;case`number`:case`range`:case`datetime-local`:if(typeof e==`number`){Ar(n,e);return}else if(e===null){n.value=``;return}break;case`date`:case`month`:case`time`:case`week`:if(e===null||e instanceof Date){n.valueAsDate=e;return}else if(typeof e==`number`){Ar(n,e);return}}if(n.tagName===`INPUT`&&n.type===`text`){if(typeof e==`number`){n.value=isNaN(e)?``:String(e);return}if(e===null){n.value=``;return}}n.value=e}function Ar(n,e){isNaN(e)?n.value=``:n.valueAsNumber=e}function Or(n){return n.tagName===`INPUT`}function fa(n){return n.type===`date`||n.type===`datetime-local`||n.type===`month`||n.type===`time`||n.type===`week`}function ma(n,e){let t=n.getUTCFullYear(),i=String(n.getUTCMonth()+1).padStart(2,`0`);if(e===`month`)return`${t}-${i}`;return`${t}-${i}-${String(n.getUTCDate()).padStart(2,`0`)}`}function Pr(n,e,t){return e instanceof Date&&(n===`min`||n===`max`)&&(t===`date`||t===`month`)?ma(e,t):e}function ha(n,e){n.listenToCustomControlModel(i=>e.state().controlValue.set(i)),n.listenToCustomControlOutput(`touch`,()=>e.state().markAsTouched()),e.registerAsBinding(n.customControl);let t=Nt();return()=>{let i=e.state(),r=i.controlValue();ie(t,`controlValue`,r)&&n.setCustomControlModelInput(r);for(let o of An){let a;if(o===`errors`?a=e.errors():a=Rn(i,o),ie(t,o,a)&&(n.setInputOnDirectives(o,a),e.elementAcceptsNativeProperty(o)&&!n.customControlHasInput(o))){let s=Pr(o,a,e.nativeFormElement.type);T3(e.renderer,e.nativeFormElement,o,s)}}}}function pa(n){return typeof n==`object`&&n!==null}function _a(n,e){let t=Nt();e.controlValueAccessor.registerOnChange(r=>{t.controlValue=r,e.state().controlValue.set(r)}),e.controlValueAccessor.registerOnTouched(()=>e.state().markAsTouched());let i=e.injector.get(Ul,null,{optional:!0,self:!0});if(i){let r;for(let l of i)pa(l)&&l.registerOnValidatorChange&&(r??=R(0),l.registerOnValidatorChange(()=>{r.update(u=>u+1)}));let o=i.map(l=>typeof l==`function`?l:l.validate.bind(l)),a=II.compose(o),s=ge(()=>{r?.();return Fr(a?a(e.interopNgControl.control):null,e.interopNgControl.control)});e.parseErrorsSource.set(s)}return e.registerAsBinding({reset:()=>{let r=e.state().value();t.controlValue=r,U(()=>e.controlValueAccessor.writeValue(r))}}),()=>{let r=e.state(),o=r.controlValue();ie(t,`controlValue`,o)&&U(()=>e.controlValueAccessor.writeValue(o));for(let a of An){let s=Rn(r,a);if(ie(t,a,s)){let l=n.setInputOnDirectives(a,s,a===`name`?ga:void 0);a===`disabled`&&e.controlValueAccessor.setDisabledState?U(()=>e.controlValueAccessor.setDisabledState(s)):!l&&e.elementAcceptsNativeProperty(a)&&T3(e.renderer,e.nativeFormElement,a,s)}}}}function ga(n){return n==null}function ya(n,e,t){if(typeof MutationObserver!=`function`)return;let i=new MutationObserver(r=>{r.some(o=>ba(o))&&e()});i.observe(n,{attributes:!0,attributeFilter:[`value`],characterData:!0,childList:!0,subtree:!0}),t.onDestroy(()=>i.disconnect())}function ba(n){if(n.type===`childList`||n.type===`characterData`){if(n.target instanceof Comment)return!1;for(let e of n.addedNodes)if(!(e instanceof Comment))return!0;for(let e of n.removedNodes)if(!(e instanceof Comment))return!0;return!1}return n.type===`attributes`&&n.target instanceof HTMLOptionElement}function va(n,e,t,i){let r=!1,o=e.nativeFormElement,a=la(()=>e.state().value(),l=>e.state().controlValue.set(l),l=>ua(o,e.state().value,i));t.set(a.errors),e.onReset=()=>{a.reset();let l=e.state().value();s.controlValue=l,Rr(o,l)},n.listenToDom(`input`,()=>a.setRawValue(void 0)),n.listenToDom(`blur`,()=>e.state().markAsTouched()),Or(o)&&fa(o)&&i.watchValidity(e.destroyRef,o,()=>a.setRawValue(void 0)),e.registerAsBinding(),o.tagName===`SELECT`&&ya(o,()=>{r&&(o.value=e.state().controlValue())},e.destroyRef);let s=Nt();return()=>{let l=e.state();for(let A of An){let re=Rn(l,A);if(ie(s,A,re)&&(n.setInputOnDirectives(A,re),e.elementAcceptsNativeProperty(A))){let At=Pr(A,re,o.type);T3(e.renderer,o,A,At)}}let u=l.controlValue(),S=ie(s,`controlValue`,u),R=o.type===`radio`&&ie(s,`radioValue`,o.value);(S||R)&&Rr(o,u),r=!0}}var Lr=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵprov=x({token:n,factory:t=>xa.ɵfac(t),providedIn:`root`})}return n})();var xa=(()=>{class n extends Lr{document=g(z);cspNonce=g(pl$1,{optional:!0});injectedStyles=new WeakMap;watchValidity(t,i,r){let o=i.getRootNode();this.injectedStyles.has(o)||this.injectedStyles.set(o,this.createTransitionStyle(o));let a=s=>{let l=s;(l.animationName===`ng-valid`||l.animationName===`ng-invalid`)&&r()};i.addEventListener(`animationstart`,a),t.onDestroy(()=>{i.removeEventListener(`animationstart`,a)})}isBadInput(t){return t.validity?.badInput??!1}createTransitionStyle(t){let i=this.document.createElement(`style`);return this.cspNonce&&(i.nonce=this.cspNonce),i.textContent=`
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `,t.nodeType===9?t.head?.appendChild(i):t.appendChild(i),i}ngOnDestroy(){this.injectedStyles.get(this.document)?.remove()}static ɵfac=(()=>{let t;return function(r){return(t||(t=Cn$1(n)))(r||n)}})();static ɵprov=x({token:n,factory:n.ɵfac})}return n})();var Sa=Symbol();var wt=new T(``);var vd=(()=>{class n{field=Pi.required({alias:`formField`});state=ge(()=>this.field()());renderer=g(wt$1);destroyRef=g(ht$1);injector=g(X);element=g(Te).nativeElement;elementIsNativeFormElement=b3(this.element);elementAcceptsTextualValues=qEe(this.element);_elementAcceptsMinMax;nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=t=>this.element.focus(t);controlValueAccessors=g(Fl,{optional:!0,self:!0});config=g(oa,{optional:!0});validityMonitor=g(Lr);parseErrorsSource=R(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new Fn(this.state)}parseErrors=ge(()=>this.parseErrorsSource()?.().map(t=>m(l({},t),{fieldTree:U(this.state).fieldTree,formField:this}))??[],{equal:M});errors=ge(()=>this.state().errors().filter(t=>!t.formField||t.formField===this),{equal:M});isFieldBinding=!1;resetter=()=>{};parseErrorsResetCallback;setParseErrors(t){this.parseErrorsSource.set(t)}set onReset(t){this.parseErrorsResetCallback=t}get onReset(){return this.parseErrorsResetCallback}get controlValueAccessor(){return!this.controlValueAccessors||this.controlValueAccessors.length===0?this.interopNgControl?.valueAccessor??void 0:P3(this.interopNgControl,this.controlValueAccessors)??void 0}installClassBindingEffect(){let t=Object.entries(this.config?.classes??{}).map(([r,o])=>[r,ge(()=>o(this))]);if(t.length===0)return;let i=Nt();ige({write:()=>{for(let[r,o]of t){let a=o();ie(i,r,a)&&(a?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r))}}},{injector:this.injector})}focus(t){this.focuser(t)}reset(){this.resetter(),this.parseErrorsResetCallback?.(this.state().value())}registerAsBinding(t){if(this.isFieldBinding)throw new I(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),t?.focus&&(this.focuser=i=>t.focus(i)),t?.reset&&(this.resetter=()=>t.reset()),_t$1(i=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),i(()=>{r.nodeState.formFieldBindings.update(o=>o.filter(a=>a!==this))})},{injector:this.injector})}[Sa];ɵngControlCreate(t){if(!t.hasPassThrough)if(this.controlValueAccessor)this.ɵngControlUpdate=_a(t,this);else if(t.customControl)this.ɵngControlUpdate=ha(t,this);else if(this.elementIsNativeFormElement)this.ɵngControlUpdate=va(t,this,this.parseErrorsSource,this.validityMonitor);else throw new I(1914,!1)}ɵngControlUpdate;elementAcceptsNativeProperty(t){if(!this.elementIsNativeFormElement)return!1;switch(t){case`min`:case`max`:return this._elementAcceptsMinMax??=zEe(this.element);case`minLength`:case`maxLength`:return this.elementAcceptsTextualValues;case`disabled`:case`required`:case`readonly`:case`name`:return!0;default:return!1}}static ɵfac=function(i){return new(i||n)};static ɵdir=ee$1({type:n,selectors:[[``,`formField`,``]],inputs:{field:[1,`formField`,`field`]},exportAs:[`formField`],features:[Mn$1([{provide:wt,useExisting:n},{provide:Cs,useFactory:()=>g(n).interopNgControl},{provide:C3,useFactory:()=>g(wt,{self:!0})}]),pg(`formField`)]})}return n})();var wa=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=qe({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return n})();var Na={passive:!0};var zr=(()=>{class n{_platform=g(st);_ngZone=g(re);_renderer=g(Ht).createRenderer(null,null);_styleLoader=g(Xn);_monitoredElements=new Map;monitor(t){if(!this._platform.isBrowser)return Rt$1;this._styleLoader.load(wa);let i=Qo$1(t),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new k$1,a=`cdk-text-field-autofilled`,s=u=>{u.animationName===`cdk-text-field-autofill-start`&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:u.target,isAutofilled:!0}))):u.animationName===`cdk-text-field-autofill-end`&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:u.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(i.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(i,`animationstart`,s,Na)));return this._monitoredElements.set(i,{subject:o,unlisten:l}),o}stopMonitoring(t){let i=Qo$1(t),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove(`cdk-text-field-autofill-monitored`),i.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((t,i)=>this.stopMonitoring(i))}static ɵfac=function(i){return new(i||n)};static ɵprov=M$1({token:n,factory:n.ɵfac})}return n})();var Br=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=De({type:n});static ɵinj=ve$1({})}return n})();var $r=new T(`MAT_INPUT_VALUE_ACCESSOR`);var Ea=[`button`,`checkbox`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`];var Ca=new T(`MAT_INPUT_CONFIG`);var rl=(()=>{class n{_elementRef=g(Te);_platform=g(st);ngControl=g(Cs,{optional:!0,self:!0});_autofillMonitor=g(zr);_ngZone=g(re);_formField=g(an,{optional:!0});_renderer=g(wt$1);_uid=g(Zi$1).getId(`mat-input-`);_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=g(Ca,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new k$1;controlType=`mat-input`;autofilled=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=uOe(t),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(t){this._id=t||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(II.required)??!1}set required(t){this._required=uOe(t)}_required;get type(){return this._type}set type(t){this._type=t||`text`,this._validateType(),!this._isTextarea&&nOe().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type=`text`;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(t){t!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(t):this._inputValueAccessor.value=t,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(t){this._readonly=uOe(t)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}_neverEmptyInputTypes=[`date`,`datetime`,`datetime-local`,`month`,`time`,`week`].filter(t=>nOe().has(t));constructor(){let t=g(U3,{optional:!0}),i=g(G3,{optional:!0}),r=g(NYe),o=g($r,{optional:!0,self:!0}),a=g(wt,{optional:!0,self:!0}),s=this._elementRef.nativeElement,l=s.nodeName.toLowerCase();o?$n(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=s,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(s,`keyup`,this._iOSKeyupListener)}),this._errorStateTracker=new CG(r,a||this.ngControl,i,t,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=l===`select`,this._isTextarea=l===`textarea`,this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=s.multiple?`mat-native-select-multiple`:`mat-native-select`),this._signalBasedValueAccessor&&_t$1(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(t){this._elementRef.nativeElement.focus(t)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(t){if(t!==this.focused){if(!this._isNativeSelect&&t&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type===`number`?(i.type=`text`,i.setSelectionRange(0,0),i.type=`number`):i.setSelectionRange(0,0)}this.focused=t,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}_dirtyCheckPlaceholder(){let t=this._getPlaceholder();if(t!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=t,t?i.setAttribute(`placeholder`,t):i.removeAttribute(`placeholder`)}}_getPlaceholder(){return this.placeholder||null}_validateType(){Ea.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let t=this._elementRef.nativeElement,i=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(t){let i=this._elementRef.nativeElement;t.length?i.setAttribute(`aria-describedby`,t.join(` `)):i.removeAttribute(`aria-describedby`)}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let t=this._elementRef.nativeElement;return this._isNativeSelect&&(t.multiple||t.size>1)}_iOSKeyupListener=t=>{let i=t.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(i){return new(i||n)};static ɵdir=ee$1({type:n,selectors:[[`input`,`matInput`,``],[`textarea`,`matInput`,``],[`select`,`matNativeControl`,``],[`input`,`matNativeControl`,``],[`textarea`,`matNativeControl`,``]],hostAttrs:[1,`mat-mdc-input-element`],hostVars:21,hostBindings:function(i,r){i&1&&Xt(`focus`,function(){return r._focusChanged(!0)})(`blur`,function(){return r._focusChanged(!1)})(`input`,function(){return r._onInput()}),i&2&&(wl(`id`,r.id)(`disabled`,r.disabled&&!r.disabledInteractive)(`required`,r.required),qn(`name`,r.name||null)(`readonly`,r._getReadonlyAttribute())(`aria-disabled`,r.disabled&&r.disabledInteractive?`true`:null)(`aria-invalid`,r.empty&&r.required?null:r.errorState)(`aria-required`,r.required)(`id`,r.id),Tt(`mat-input-server`,r._isServer)(`mat-mdc-form-field-textarea-control`,r._isInFormField&&r._isTextarea)(`mat-mdc-form-field-input-control`,r._isInFormField)(`mat-mdc-input-disabled-interactive`,r.disabledInteractive)(`mdc-text-field__input`,r._isInFormField)(`mat-mdc-native-select-inline`,r._isInlineSelect()))},inputs:{disabled:`disabled`,id:`id`,placeholder:`placeholder`,name:`name`,required:`required`,type:`type`,errorStateMatcher:`errorStateMatcher`,userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],value:`value`,readonly:`readonly`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Ke]},exportAs:[`matInput`],features:[Mn$1([{provide:on,useExisting:n}]),Zt]})}return n})();var ol=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=De({type:n});static ɵinj=ve$1({imports:[sn,sn,Br,ho$1]})}return n})();function Ma(n,e,t){let[i,r]=l_(t?.in,n,e),o=i.getFullYear()-r.getFullYear(),a=i.getMonth()-r.getMonth();return o*12+a}function ka(n,e){let t=j(n,e?.in),i=t.getMonth();return t.setFullYear(t.getFullYear(),i+1,0),t.setHours(23,59,59,999),t}var Y=(function(n){return n[n.SUNDAY=1]=`SUNDAY`,n[n.MONDAY=2]=`MONDAY`,n[n.TUESDAY=4]=`TUESDAY`,n[n.WEDNESDAY=8]=`WEDNESDAY`,n[n.THURSDAY=16]=`THURSDAY`,n[n.FRIDAY=32]=`FRIDAY`,n[n.SATURDAY=64]=`SATURDAY`,n[n.ALL=127]=`ALL`,n})(Y||{});var Fa=[Y.SUNDAY,Y.MONDAY,Y.TUESDAY,Y.WEDNESDAY,Y.THURSDAY,Y.FRIDAY,Y.SATURDAY];var Da=10080*60*1e3;function Et(n){let t=new Date(n).getDate(),i=Math.floor(t/7)+(t%7?1:0);return i===4&&t>=25||i===5?-1:i}function Vr(n,e,t){let i=new Date(n),r=i.getFullYear(),o=i.getMonth(),a;if(e<0){let l=new Date(r,o+1,0);a=l.getDate()-(l.getDay()-t+7)%7+(e+1)*7}else a=1+(t-new Date(r,o,1).getDay()+7)%7+(e-1)*7;let s=new Date(n);return s.setDate(a),s.getMonth()!==o&&s.setDate(a-7),s.valueOf()}function Hr(n){let e=new Date(n);return e.setDate(e.getDate()-e.getDay()),e.setHours(0,0,0,0),e.valueOf()}function Ct(n){return n?.size?Array.from(n).filter(e=>e>=0&&e<7).sort((e,t)=>e-t):[]}function Tn(n){let e=typeof n==`number`?n:typeof n==`string`?Number(n):NaN;return Number.isFinite(e)&&e>=1?Math.floor(e):void 0}function Ur(n,e,t,i){let r=new Date(n).getDay(),o=Ct(i);if(o.length&&!o.includes(r))return!1;let a=Math.floor((Hr(n)-Hr(e))/Da);return a>=0&&a%Math.max(t,1)===0}function Ra(n,e=Date.now()){if(n.type===`weekly`)for(let t=0;t<7*Math.max(n.interval,1);t++){let i=dr$1(e,t).valueOf();if(Ur(i,e,n.interval,n.weekdays))return i}if(n.type===`monthly`&&n.monthly_type===`day_of_week`&&n.weekdays?.size){let t=Ct(n.weekdays)[0],i=n.week||Et(e);for(let r=0;r<=Math.max(n.interval,1);r++){let o=Vr(Vl(e,r).valueOf(),i,t);if(o>=e)return o}}return e}function Aa(n,e=Date.now()){let t=Math.max((Tn(n.end_instances)||1)-1,0),i=Math.max(n.interval,1),r=Ra(n,e);if(n.type===`daily`)return wf(dr$1(r,i*t)).valueOf();if(n.type===`weekly`){if(Ct(n.weekdays).length>1){let a=0,s=r;for(;a<t;)s=dr$1(s,1).valueOf(),Ur(s,e,i,n.weekdays)&&a++;return wf(s).valueOf()}return wf(oP(r,i*t)).valueOf()}if(n.type===`monthly`&&n.monthly_type===`day_of_week`&&n.weekdays?.size){let o=Ct(n.weekdays)[0],a=n.week||Et(e);return wf(Vr(Vl(r,i*t).valueOf(),a,o)).valueOf()}return n.type===`yearly`?wf(iP(r,i*t)).valueOf():wf(Vl(r,i*t)).valueOf()}function pl(n){if(!n.pattern||n._pattern===`none`)return{_custom:!1,type:`none`,interval:1,end_type:`never`};let e=Tn(n.occurrences),t={_custom:n._pattern==`custom_display`,type:n.pattern,interval:n.interval||1,end_type:n._end_type??(e?`instances`:n.end?`date`:`never`)};return n.end&&(t.end_date=n.end),e&&(t.end_instances=e),n.pattern===`weekly`&&n.days_of_week?.length&&(t.weekdays=new Set(n.days_of_week)),n.pattern===`monthly`&&(t.type=`monthly`,t.monthly_type=`day_of_week`,n.days_of_week?.length&&(t.weekdays=new Set(n.days_of_week)),n.nth_of_month?t.week=n.nth_of_month:n.start&&(t.week=Et(n.start))),n.pattern===`month_day`&&n.days_of_week?.length?(t.type=`monthly`,t.monthly_type=`day_of_week`,t.weekdays=new Set(n.days_of_week),n.nth_of_month?t.week=n.nth_of_month:n.start&&(t.week=Et(n.start))):n.pattern===`month_day`&&(t.type=`monthly`,t.monthly_type=`day_of_month`),t}function _l(n,e=Date.now()){if(n.type===`none`)return{recurrence_custom:!1,recurrence_type:`none`,recurrence_days:void 0,recurrence_nth_of_month:void 0,recurrence_interval:void 0,recurrence_end:void 0,recurrence_instances:void 0};let t={recurrence_custom:n._custom,recurrence_type:n.type===`yearly`?`monthly`:n.type,recurrence_days:void 0,recurrence_nth_of_month:void 0,recurrence_interval:n.type===`yearly`?n.interval*12:n.interval,recurrence_end:void 0,recurrence_instances:void 0};if(n.end_type===`date`&&n.end_date?t.recurrence_end=jo$1(n.end_date):n.end_type===`instances`&&(t.recurrence_instances=Tn(n.end_instances),t.recurrence_end=jo$1(Aa(n,e))),n.type===`daily`&&(t.recurrence_days=Y.ALL),n.type===`weekly`&&n.weekdays){let i=0;n.weekdays.forEach(r=>{i|=Fa[r]}),t.recurrence_days=i,t.recurrence_type=`daily`}if((n.type===`monthly`||n.type===`yearly`)&&n.weekdays){let i=0;n.weekdays.forEach(r=>{i|=1<<r}),t.recurrence_days=i}return(n.type===`monthly`||n.type===`yearly`)&&n.week&&(t.recurrence_nth_of_month=n.week),t}var Ta=[`user`,`booked_by`,`resources`,`assets`,`members`];var k=class{get group(){return this.extension_data.group||``}get is_all_day(){return this.all_day||this.duration>=720}get has_ended(){return this.checked_out_at>0||OP(Date.now(),this.date_end)}get valid_assets(){if(this._valid_cache_expiry>Date.now()&&this._valid_asset_cache.length)return this._valid_asset_cache;let e=this.linked_bookings;return this._valid_asset_cache=(this.extension_data.assets||[]).map(t=>new Jl(m(l({},t),{event:this}))).filter(t=>t.deliver_at<this.date_end).map(t=>{let i=e.find(r=>r.extension_data.request_id===t.id);return i&&(t.state=i.approved?`approved`:i.rejected?`rejected`:`pending`),t}),this._valid_cache_expiry=Lt(Date.now(),5).valueOf(),this._valid_asset_cache}constructor(e={}){this._valid_asset_cache=[],this._valid_cache_expiry=0;let t=!!(e.extension_data?.custom_all_day||e.custom_all_day);this.id=e.id||``,this.parent_id=e.parent_id||``,this.asset_id=e.asset_id||``,this.asset_ids=e.asset_ids||[e.asset_id].filter(o=>o);let i=e.booking_type||e.type||` `;this.asset_name=i===`visitor`?e.extension_data?.visitor_name||e.asset_name||e.extension_data?.asset_name||e.extension_data?.name||e.asset_id||``:e.asset_name||e.extension_data?.asset_name||e.extension_data?.name||e.description||e.asset_id||``,this.zones=e.zones||[];let r=!!e.date;this.booking_start=r?Math.floor(e.date/1e3):e.booking_start||jo$1(Lf(Lt(Date.now(),5),{nearestTo:5})),this.booking_end=r?this.booking_start+(e.duration||60)*60:e.booking_end||jo$1(Lt(this.booking_start*1e3,e.duration||60)),this.booking_type=e.booking_type||` `,this.type=e.type||e.booking_type||`booking`,this.date=e.date||this.booking_start*1e3||Date.now(),this.duration=e.duration||Math.abs(fr$1(this.booking_start*1e3,this.booking_end*1e3))||60,this.date_end=this.booking_end*1e3||this.date+this.duration*60*1e3,this.timezone=e.timezone||Intl.DateTimeFormat().resolvedOptions().timeZone,this.user_email=e.user_email||``,this.user_id=e.user_id||``,this.user_name=e.user_name||``,this.title=e.title??(this.booking_type?`${QTe(this.booking_type)} Booking`.trim():``),this.description=e.description||``,this.checked_in=!!e.checked_in,this.rejected=!!e.rejected,this.approved=!!e.approved,this.deleted=!!e.deleted,this.booked_by_id=e.booked_by_id||``,this.booked_by_name=e.booked_by_name||``,this.booked_by_email=e.booked_by_email||``,this.approver_id=e.approver_id||``,this.approver_email=e.approver_email||``,this.approver_name=e.approver_name||``,this.extension_data=e.extension_data||{},this.access=!!e.extension_data?.access,this.event_id=e.event_id,this.permission=(e.permission||`PRIVATE`).toUpperCase(),this.attendees=e.attendees||e.guests||e.members||[],this.tags=e.tags||e.extension_data?.tags||[],this.images=e.images||[],this.all_day=!!e.all_day||t||this.duration>=1440,this.induction=e.induction||void 0,this.created_at=e.created_at||Date.now(),this.history=e.history||[],this.all_day&&(!e.duration&&!e.date_end&&!e.booking_end?(this.date=oc(this.date,this.timezone),this.duration=1439,this.date_end=ic(this.date,this.timezone)):this.duration%1440===0&&(this.date=oc(this.date,this.timezone),this.duration=Math.max(1,this.duration-1),this.date_end=ic(this.date,this.timezone))),this.checked_out_at=e.checked_out_at,this.checked_in_at=e.checked_in_at,this.linked_event=e.linked_event||null,this.linked_bookings=e.linked_bookings||[],this.linked_parent_booking=e.linked_parent_booking||null,this.images=e.images||[],this.status=this.deleted||e.status===`cancelled`?`cancelled`:this.rejected||e.status===`declined`?`declined`:this.checked_out_at>0||OP(Date.now(),this.date_end)?`ended`:this.approved||e.status===`approved`?`approved`:`tentative`,this.process_state=e.process_state||`pending`,this.recurrence_type=e.recurrence_type||`none`,this.recurrence_days=e.recurrence_days,this.recurrence_nth_of_month=e.recurrence_nth_of_month,this.recurrence_interval=e.recurrence_interval,this.recurrence_end=e.recurrence_end,this.instance=e.instance;for(let o in e)!(o in this)&&!Ta.includes(o)&&e[o]&&(this.extension_data[o]=e[o]||this.extension_data[o]);this.extension_data.assets=(this.extension_data.assets||[]).map(o=>new Jl(m(l({},o),{event:this,date:this.date}))),this.extension_data.tags=e.tags||[],this.extension_data.request&&(this.extension_data.request=new Jl(m(l({},this.extension_data.request),{event:this,date:this.date})))}toJSON(){let e=l({},this);return this.id||delete e.id,e.extension_data.assets=e.extension_data.assets.map(t=>new Jl(m(l({},t),{event:null}))),e.extension_data.request&&(e.extension_data.request=new Jl(m(l({},e.extension_data.request),{event:null}))),e.parent_id||delete e.parent_id,e.zones=e.zones.filter(t=>t),delete e.date,delete e.duration,delete e.created_at,delete e.history,delete e.process_state,Yk(e),e}get location(){return this.extension_data?.location||this.description}get is_today(){return Ga$1(this.date,new Date)}get is_done(){let e=new Date,t=this.all_day?Of(this.date,24):Lt(this.date,this.duration),i=(this.checked_out_at||this.extension_data.checked_out_at||0)*1e3,r=t.getTime();return i&&Date.now()>i?!0:OP(e,new Date(r))}get state(){let e=new Date,t=this.date;return jl(e,s_(t,{minutes:-15}))?`future`:jl(e,t)?`upcoming`:jl(e,s_(t,{minutes:15}))?`started`:jl(e,s_(t,{minutes:this.duration}))?`in_progress`:`done`}};var Ia=64;var Oa=64;var Pa=30*1e3;var La=`PlaceOS.image-cache-v1`;var za=`PlaceOS.image-cache-keys-v1`;var V=new Map;var In=new Map;var ce=new Map;var jr=!1;function Ba(){if(!jr&&(jr=!0,typeof caches<`u`&&caches.delete(La).catch(()=>!1),typeof sessionStorage<`u`))try{sessionStorage.removeItem(za)}catch{}}function On(n){let e=V.get(n);if(e)return V.delete(n),V.set(n,e),e}function $a(n,e){let t=V.get(n);for(t&&t!==e&&URL.revokeObjectURL(t),V.delete(n),V.set(n,e);V.size>Ia;){let i=V.keys().next().value;if(!i)break;let r=V.get(i);V.delete(i),r&&URL.revokeObjectURL(r)}return e}function Ha(n){for(ce.delete(n),ce.set(n,Date.now()+Pa);ce.size>Oa;){let e=ce.keys().next().value;if(!e)break;ce.delete(e)}}function Va(n){let e=Yt();document.cookie=`${e===`x-api-key`?`api-key=`+encodeURIComponent(Bf()):`bearer_token=`+encodeURIComponent(e)};max-age=30;path=${n};samesite=strict;${location.protocol===`https:`?`secure;`:``}`}function Ua(){let n=Yt();return n===`x-api-key`?{"X-API-Key":Bf()}:{Authorization:`Bearer ${n}`}}function Kr(n,e){return Yr(n,()=>(Va(e),fetch(n)))}function qr(n){return Yr(n,()=>fetch(n,{headers:Ua()}))}async function Yr(n,e){Ba();let t=On(n);if(t)return t;if((ce.get(n)||0)>Date.now())throw new Error(`Image load is in retry cooldown`);ce.delete(n);let r=In.get(n);if(r)return r;let o=e().then(async a=>{if(!a?.ok)throw new Error(`Failed to fetch image: ${a?.status}`);return $a(n,URL.createObjectURL(await a.blob()))}).catch(a=>{throw Ha(n),a}).finally(()=>In.delete(n));return In.set(n,o),o}var Rl=(()=>{class n extends Va$1{constructor(){super(...arguments),this._element=g(Te),this._observer=null,this._source_version=0,this.source=Pi(void 0)}ngOnChanges(t){if(!t.source)return;this._source_version+=1,this.clearTimeout(`load`),this._observer?.disconnect(),this._observer=null;let i=this.source();if(i){if(!this._isLocalUrl(i)){this._element.nativeElement.src=i;return}this._loadWhenVisible(i,this._source_version)}}ngOnDestroy(){this._observer?.disconnect(),this._observer=null,super.ngOnDestroy()}_loadWhenVisible(t,i){if(typeof IntersectionObserver>`u`){this._loadImage(t,i);return}this._observer=new IntersectionObserver(r=>{r.some(({isIntersecting:o})=>o)&&(this._observer?.disconnect(),this._observer=null,this._loadImage(t,i))},{rootMargin:`300px`}),this._observer.observe(this._element.nativeElement)}async _loadImage(t,i){if(i!==this._source_version||t!==this.source())return;if(!Wo$1()){this.timeout(`load`,()=>{this._loadImage(t,i)},300);return}let r=On(t);if(r){this._element.nativeElement.src=r;return}let o=t.includes(`/api/engine/v2/uploads`)||t.includes(`/api/engine/v2/signage`);try{let a=o?await Kr(t,this._cookiePath(t)):await qr(t);i===this._source_version&&t===this.source()&&(this._element.nativeElement.src=a)}catch(a){i===this._source_version&&this._element.nativeElement.dispatchEvent(new ErrorEvent(`error`,{error:a}))}}_isLocalUrl(t){try{return new URL(t,location.href).origin===location.origin}catch{return!1}}_cookiePath(t){return t.includes(`/api/engine/v2/uploads`)?`/api/engine/v2/uploads`:`/api/engine/v2/signage`}static{this.ɵfac=(()=>{let t;return function(r){return(t||(t=Cn$1(n)))(r||n)}})()}static{this.ɵdir=ee$1({type:n,selectors:[[`img`,`auth`,``],[`video`,`auth`,``],[`audio`,`auth`,``]],inputs:{source:[1,`source`]},features:[Xe,Zt]})}}return n})();var ja=5e3;var Ka=500;var qa=30*1e3;var ue=new Map;var kt=new Map;var Ft=new Map;var Pn=new Map;var fe=new Map;var Mt=new zf({email:`empty.space@place.os`});function Qr(n){let e=n.id||n.email;if(e)for(ue.has(e)&&ue.delete(e),ue.set(e,n),n.id&&kt.set(n.id,n),n.email&&Ft.set(n.email,n);ue.size>ja;){let t=ue.keys().next().value;if(!t)break;let i=ue.get(t);ue.delete(t),i?.id&&kt.get(i.id)===i&&kt.delete(i.id),i?.email&&Ft.get(i.email)===i&&Ft.delete(i.email)}}function Gr(n){return kt.get(n)||Ft.get(n)}function Ya(n){for(fe.delete(n),fe.set(n,Date.now()+qa);fe.size>Ka;){let e=fe.keys().next().value;if(!e)break;fe.delete(e)}}function Ga(n){for(let e of n)Qr(e)}var Wr=null;var Ll=(()=>{class n{get org(){return Wr}set org(t){Wr=t}constructor(t=null){t&&(this.org=t)}async transform(t){if(this.org&&await this.org.waitUntilInitialised(),!t)return Mt;let i=Gr(t);if(i)return i;if((fe.get(t)||0)>Date.now())return Mt;fe.delete(t);let o=Pn.get(t);if(o)return o;let a=this._loadSpace(t).finally(()=>Pn.delete(t));return Pn.set(t,a),a}get(t){return Gr(t)||Mt}updateSpaceList(t){Ga(t)}async _loadSpace(t){if(!t.includes(`@`)){let r=await uTe(t).catch(()=>null);if(r)return this._cacheSystem(r)}let i=(await lTe({in:t}).catch(()=>({data:[]}))).data;return i.length===1?this._cacheSystem(i[0]):(Ya(t),Mt)}_cacheSystem(t){let i=new zf(m(l({},t),{zones:[...t.zones||[]],images:[...t.images||[]],camera_snapshot_urls:[...t.camera_snapshot_urls||[]],level:this.org?.levelWithID([...t.zones||[]])}));return Qr(i),i}static{this.ɵfac=function(i){return new(i||n)(B(my,16))}}static{this.ɵpipe=Li({name:`space`,type:n,pure:!0})}}return n})();var Zr=[`0123456789`.split(``),`qwertyuiop_`.split(``),`asdfghjkl+`.split(``),`zxcvbnm@.-`.split(``),[`{caps}`,`{space}`,`{backspace}`]];var Xr=160;var Jr=class n extends Va$1{static{this._enabled=!1}static{this._instances=new Set}static get enabled(){return this._enabled}static set enabled(e){this._enabled=e;for(let t of this._instances)t.syncNativeKeyboardState()}onFocus(){this.syncNativeKeyboardState(),n.enabled&&(this.open(),this.clearTimeout(`blur-sm`))}onBlur(){this.timeout(`blur-sm`,()=>this.close())}constructor(){super(),this._element=g(Te),this._overlay=g(S1),this.keyset=ege(Zr),this.state=R(`normal`),this._overlay_ref=null,this._keyboard_el=null,this._position=`bottom`,this._native_keyboard_prevented=!1,this._original_readonly=!1,this._original_inputmode=null,n._instances.add(this),this.syncNativeKeyboardState(),_t$1(()=>{this.keyset()||this.keyset.set(Zr)})}ngOnDestroy(){n._instances.delete(this),this.restoreNativeKeyboardState(),super.ngOnDestroy(),this.close(!0)}focusInput(){this._element?.nativeElement?.blur(),this._element?.nativeElement?.focus()}open(){if(this.clearTimeout(`close-animation`),this._overlay_ref){this._overlay_ref.hostElement.style.pointerEvents=`auto`,this._keyboard_el&&(this._keyboard_el.style.opacity=`1`);return}this._position=this.preferredPosition();let e=this._overlay.position().global().centerHorizontally();this._position===`top`?e.top(`0`):e.bottom(`0`),this._overlay_ref=this._overlay.create({width:`100vw`,positionStrategy:e}),this._overlay_ref.hostElement.style.display=`block`,this._overlay_ref.hostElement.style.pointerEvents=`auto`,this.applyOverlayPosition(),this.renderKeyboard()}close(e=!1){if(this._overlay_ref){if(this.clearTimeout(`close-animation`),e||!this._keyboard_el){this._overlay_ref.dispose(),this._overlay_ref=null,this._keyboard_el=null;return}this._overlay_ref.hostElement.style.pointerEvents=`none`,this._keyboard_el.style.opacity=`0`,this.timeout(`close-animation`,()=>{this._overlay_ref?.dispose(),this._overlay_ref=null,this._keyboard_el=null},Xr)}}handleKeyPress(e){let t=this._element.nativeElement,i=t.value||``,r=t.selectionStart??i.length;switch(e.toLowerCase()){case`{caps}`:this.state.set(this.state()===`caps`?`normal`:`caps`);break;case`{shift}`:this.state.set(this.state()===`shift`?`normal`:`shift`);break;case`{backspace}`:t.value=`${i.substr(0,r-1)}${i.substr(r,i.length)}`,r=Math.max(0,r-1);break;case`{space}`:t.value=`${i.substr(0,r)} ${i.substr(r,i.length)}`,r+=1;break;default:this.state()===`shift`&&this.state.set(`normal`),t.value=`${i.substr(0,r)}${e}${i.substr(r,i.length)}`,r+=1}t.dispatchEvent(new InputEvent(`input`)),this.updateKeyState(),this.timeout(`focus`,()=>{this.focusInput();try{t.setSelectionRange(r,r)}catch{}},50)}updateKeyState(){this.keyset.set(this.keyset().map(e=>e.map(t=>t.length>1?t:t[this.state()!==`normal`?`toUpperCase`:`toLowerCase`]()))),this._overlay_ref&&this.renderKeyboard()}syncNativeKeyboardState(){n.enabled?this.preventNativeKeyboard():this.restoreNativeKeyboardState()}reposition(){!this._overlay_ref||this.preferredPosition()===this._position||(this.close(!0),this.open())}renderKeyboard(){if(!this._overlay_ref)return;let e=this._overlay_ref.overlayElement,t=!this._keyboard_el;this.applyOverlayPosition(),e.replaceChildren();let i=document.createElement(`div`);i.setAttribute(`keyboard-view`,``),i.className=`border-base-200 bg-base-200 flex w-screen flex-col gap-[16px] p-[8px]`,i.style.background=`var(--base-200)`,i.style.borderBottom=this._position===`top`?`1px solid var(--base-200)`:``,i.style.borderTop=this._position===`bottom`?`1px solid var(--base-200)`:``,i.style.display=`flex`,i.style.flexDirection=`column`,i.style.gap=`16px`,i.style.opacity=t?`0`:`1`,i.style.padding=`8px`,i.style.transition=`opacity ${Xr}ms ease`,i.style.width=`100vw`;for(let r of this.keyset()){let o=document.createElement(`div`);o.setAttribute(`row`,``),o.className=`flex items-center justify-center gap-[8px]`,o.style.alignItems=`center`,o.style.display=`flex`,o.style.gap=`8px`,o.style.justifyContent=`center`;for(let a of r)o.appendChild(this.renderKey(a));i.appendChild(o)}e.appendChild(i),this._keyboard_el=i,t&&requestAnimationFrame(()=>{this._keyboard_el===i&&(i.style.opacity=`1`)})}renderKey(e){let t=document.createElement(`button`);if(t.setAttribute(`key`,e),t.setAttribute(`tabindex`,`0`),t.type=`button`,t.className=`border-base-200 bg-base-100 relative cursor-pointer rounded-xl border p-[8px]`,t.style.height=`56px`,t.style.width=e[0]===`{`&&e.length>1?`160px`:`64px`,t.style.transition=`box-shadow 200ms, top 200ms`,t.style.boxShadow=`0 4px 0 0.04px rgba(0, 0, 0, 0.1)`,e===`{space}`&&(t.style.flex=`1`,t.style.minWidth=`160px`,t.style.maxWidth=`400px`),t.textContent=this.keyLabel(e),t.addEventListener(`mousedown`,i=>i.preventDefault()),t.addEventListener(`focus`,()=>this.focusInput()),t.addEventListener(`click`,()=>this.handleKeyPress(e)),e===`{caps}`){let i=document.createElement(`div`);i.setAttribute(`dot`,``),i.className=`absolute top-[8px] right-[8px] h-[8px] w-[8px] rounded-full ${this.state()!==`normal`?`bg-success`:`bg-base-200`}`,t.appendChild(i)}return t}keyLabel(e){return e===`{space}`?`Space`:e===`{caps}`?`Caps Lock`:e===`{backspace}`?`Backspace`:e}preventNativeKeyboard(){let e=this._element.nativeElement;this._native_keyboard_prevented||(this._original_readonly=e.readOnly,this._original_inputmode=e.getAttribute(`inputmode`),this._native_keyboard_prevented=!0),e.readOnly=!0,e.setAttribute(`readonly`,``),e.setAttribute(`inputmode`,`none`)}restoreNativeKeyboardState(){if(!this._native_keyboard_prevented)return;let e=this._element.nativeElement;e.readOnly=this._original_readonly,this._original_readonly?e.setAttribute(`readonly`,``):e.removeAttribute(`readonly`),this._original_inputmode===null?e.removeAttribute(`inputmode`):e.setAttribute(`inputmode`,this._original_inputmode),this._native_keyboard_prevented=!1}applyOverlayPosition(){if(!this._overlay_ref)return;let e=this._overlay_ref.overlayElement;e.style.position=`fixed`,e.style.left=`0`,e.style.right=`0`,e.style.width=`100vw`,e.style.top=this._position===`top`?`0`:``,e.style.bottom=this._position===`bottom`?`0`:``}preferredPosition(){let e=this._element.nativeElement.getBoundingClientRect(),t=e.top;return window.innerHeight-e.bottom>=t?`bottom`:`top`}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵdir=ee$1({type:n,selectors:[[`input`,`keyboard`,``],[`textarea`,`keyboard`,``]],hostBindings:function(t,i){t&1&&Xt(`pointerdown`,function(){return i.syncNativeKeyboardState()})(`focus`,function(){return i.onFocus()})(`blur`,function(){return i.onBlur()})(`resize`,function(){return i.reposition()},o2)},inputs:{keyset:[1,`keyset`]},outputs:{keyset:`keysetChange`},features:[Xe]})}};var Dt=`/api/staff/v1/guests`;async function Gl(n){let e=oYe({q:n});return(await Hf(`${Dt}${n?`?`+e:``}`)).map(i=>new zk(i))}async function Wl(n){return new zk(await Hf(`${Dt}/${encodeURIComponent(n)}`))}async function Ql(n,e=``){let r=await Hf(`${`${Dt}/${encodeURIComponent(n)}/catering`}${e?`?booking_id=${encodeURIComponent(e)}`:``}`);return r?new Y_(r):null}async function Zl(n,e,t=``){let o=await l4(`${`${Dt}/${encodeURIComponent(n)}/catering`}${t?`?booking_id=${encodeURIComponent(t)}`:``}`,e);return o?new Y_(o):null}var D=`/api/staff/v1/bookings`;var Wa=Kf.raw||Kf.version||Kf.hash;function eo(){return lF(`app.name`)||lF(`app.short_name`)||`PlaceOS`}function Rt(){return`${eo()}_${Kf.hash}_${fo$1().email||``}`}function zn(n){let e=l({},n instanceof k?n.toJSON():n);return delete e.created_at,m(l({},e),{extension_data:m(l({},e.extension_data||{}),{app_name:eo(),app_version:Wa})})}async function to(n){let e=oYe(n);try{return(await Hf(`${D}${e?`?`+e:``}`)).map(i=>new k(i))}catch{return[]}}async function ac(n,e){try{let{data:t,next:i,total:r}=await Ms({query_params:m(l({},n),{limit:Math.max(200,e||0)}),endpoint:D,path:`booked`}),o=[...t],a=1;for(;i&&(!r||o.length<r)&&a<=no;){let s=await i();t=s.data,i=s.next,r=s.total,o=[...o,...t],a+=1}return uo$1(o)}catch{return[]}}async function sc(n,e={}){let t=oYe(m(l({},e),{limit:1e3}));try{let i=await gk(`${D}/clashing-assets${t?`?`+t:``}`,n.toJSON()).catch(()=>[]);return e.include_clash_time,i}catch{return[]}}var no=50;async function dc(n){try{let{data:e,next:t}=await Ms({query_params:n,fn:o=>new k(o),endpoint:D,path:``}),i=[...e],r=1;for(;t&&r<=no;){let o=await t();e=o.data,t=o.next,i=[...i,...e],r+=1}return uo$1(i,`id`)}catch{return[]}}async function lc(n){return new k(await Hf(`${D}/${encodeURIComponent(n)}`))}async function io(n,e){let t=oYe(m(l({},e),{utm_source:Rt()}));return new k(await gk(`${D}${t?`?`+t:``}`,zn(n)))}async function Qa(n,e,t=`patch`){return new k(await(t===`patch`?l4:_k)(`${D}/${encodeURIComponent(n)}`,zn(e)))}async function cc(n,e){return new k(await gk(`${D}/${encodeURIComponent(n)}/update_induction?induction=${encodeURIComponent(e)}`,{}))}async function Za(n,e,t,i=`patch`){return new k(await(i===`patch`?l4:_k)(`${D}/${encodeURIComponent(n)}/instance/${e}`,zn(t)))}var uc=async(n,e)=>{let t=n.id;delete n.id;let i=e?.instance;return e&&delete e.instance,t?i?Za(t,n.instance||n.booking_start,n):Qa(t,n):io(dA(n,[``,null,void 0])||{},e)};function Ln(n,e={}){if(e.instance)return Xa(n,e.start_time);let t=oYe({utm_source:Rt()});return u4(`${D}/${encodeURIComponent(n)}?${t}`,{response_type:`void`})}function Xa(n,e){let t=oYe({utm_source:Rt()});return u4(`${D}/${encodeURIComponent(n)}/instance/${e}?${t}`,{response_type:`void`})}async function fc(n,e){let t=oYe({state:e});try{return new k(await gk(`${D}/${encodeURIComponent(n)}/check_in?${t}&utm_source=${Rt()}`,``))}catch(i){let r=await i.json();throw r.error||r.message||r}}async function mc(n,e,t,i,r=`room`){let o=await to({type:r,period_start:jo$1(e),period_end:jo$1(Lt(e,t))});return n.map(a=>!o.find(s=>s.asset_id===a&&(!i||i!==s.id)))}async function hc(n,e,t){let i=(await to({type:e,period_start:jo$1(n.date),period_end:jo$1(Lt(n.date,n.duration))})).filter(a=>a.parent_id===n.id);await Promise.all(i.map(a=>Ln(a.id))),await Promise.all(n.linked_bookings.filter(a=>a.booking_type===e).map(a=>Ln(a.id)));let r=n.system?.zones||uo$1(qTe(n.resources.map(a=>a.zones)))||[],o=[];try{for(let a of t){let s=i.find(R=>R.extension_data?.details?.id===a.id||R.asset_ids.find(A=>a.items?.find(re=>re.item_ids.includes(A)))),l=e===`catering-order`&&a.system_id?n.resources.find(R=>R.id===a.system_id||R.email===a.system_id):void 0,u=l?.id||a.system_id||a.email||a.id,S=l?.display_name||l?.name||a.name;o.push(await io(new k({type:e,booking_type:e,date:n.date,duration:n.duration,description:n.title||a.name,user_email:n.host,asset_id:u,asset_name:S,title:n.title,attendees:a.email?[new Xl(a)]:[],approved:s?.approved&&!a._changed,rejected:s?.rejected&&!a._changed,extension_data:{parent_id:n.id,name:S,location_id:l?.id||n.location,details:a},zones:l?.zones||r}).toJSON(),{ical_uid:n.ical_uid,event_id:n.id}))}}catch(a){throw await Promise.all(o.filter(s=>!!s.id).map(s=>Ln(s.id).catch(()=>{}))),a}}
/*! Bundled license information:

@angular/forms/fesm2022/_validation_errors-chunk.mjs:
@angular/forms/fesm2022/signals.mjs:
(**
* @license Angular v22.1.5
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*)
*/
export{lc as A,to as B,ds as C,io as D,hc as E,pl as F,yd as G,ur as H,ra as I,rl as L,mc as M,ol as N,k as O,on as P,sc as R,dc as S,gd as T,vd as U,uc as V,wt as W,_l as _,Ir as a,bd as b,Ln as c,Ql as d,Rl as f,Zl as g,Wl as h,Io as i,ls as j,ka as k,Ma as l,Va as m,Ga as n,Jr as o,To as p,Gl as r,Ll as s,Ao as t,Qa as u,ac as v,fc as w,cc as x,an as y,sn as z};
//# debugId=b21b7cf6-6e6e-5d94-96bc-9b2d286e1fbf
//# sourceMappingURL=chunk-CAZdwrJM.js.map