import{$a as ob,$i as ht,$n as Ux,$o as uv,Aa as lie,Ar as ZH,C as Bee,Ca as kr,Ci as dd$1,Cs as xb,Ct as Iv,D as CT,Da as lc$1,Di as ek,Dn as Roe,Ds as xt,Dt as Ji,Ei as ece,En as Rh,Eo as sc$1,Er as Yb,Es as xr,F as Doe,Fa as m,Fi as fT,Fo as ti,Ft as KZ,Ga as ne,Gn as UN,Go as uc$1,Gr as _j,Gt as Le,H as Eo,Hi as gE,Hn as Tk,Hs as l,Ia as mE,Ii as fa$1,In as TG,Is as ys,J as G,Ja as no,Ji as gt,Jn as Uee,Ka as nj,Ko as uce,Ln as TO,Ls as yt,Mr as Zk,Ms as yce,Na as ls$1,Ns as ye,O as Ce$1,Oa as ld$1,Oi as eo,Oo as se,Ot as Jk,Pa as lv,Pn as Ss,Qi as hd$1,Qn as Us$1,Qo as ur$1,Qr as ad$1,Ra as md$1,Rn as TV,Rr as _E,St as Ioe,Ta as lV,To as sae,Tt as Jae,U as Es$1,Ua as n_$1,Ur as _V,Us as m$1,Ut as LT,V as Ej,Vi as fo,Vo as tx,Vs as zt$1,Vt as L,Wa as na$1,Wi as gS,Wo as ua$1,Ws as n,Xo as uo,Xr as ab,Xt as Me,Yo as uk,Yt as MH,Z as GS,Za as oV,Zn as Uoe,Zr as ac$1,_i as ck,_n as Pt$1,_o as qne,an as Nt,b as BS,ba as kae,bi as cu,bn as Qc,bo as rb,br as Xe,cr as Vs$1,ct as HZ,d as $t$1,da as jb,di as boe,dn as Of,do as q0,ds as vv,eo as oc$1,er as V,es as v,et as Gee,f as AG,fa as je,fi as bt,fs as w,ft as Ht,gi as cj,gr as Wn$1,ha as jt,hi as ci,hs as we,i as $Z,ia as it,ir as Vee,is as vd$1,j as Cr,ja as ln,ji as et,jn as ST,jr as Zc,js as yV,jt as Js$1,ka as lee,kr as Z,li as bn,ln as Oe,lo as pt,lr as Vw,lt as Hee,mo as qV,mr as We,mt as I,na as iV,ni as at$1,nt as Goe,o as $ee,on as OO,oo as pd$1,p as AO,pa as jee,pi as cc$1,pr as WZ,q as Foe,qi as go,qn as Ue,qo as uee,qr as _s$1,ro as pF,rs as vT,s as $f,sn as OT,ss as vn,st as HT,t as $,ti as aoe,ts as vF,u as $n$1,uo as q,ur as W0,us as vt,v as At$1,va as kO,vi as cn,vr as X,vt as Id$1,x as BT,xo as rc$1,xr as Xk,xt as In$1,y as B,ya as kS,ys as wr,za as me,zs as zn$1,zt as Kg}from"./chunk-98u3vKtn.js";import{$t as to,Bt as oe,D as Kr,Et as jd$1,F as PG,Gt as ph,Jt as ql$1,Lt as nr$1,Ot as ke$1,Q as Wd$1,Rt as ns$1,U as Si,Vt as on,Wt as pW,X as VS,Z as Vk,at as Zi,c as Bd$1,dn as yS,f as Dl$1,ft as bS,gt as d6,k as Ln$1,kt as kh,m as Fn$1,on as vh,pt as bh,qt as qd$1,r as $e,rn as v0,st as _V$1,tn as uW,tt as YS,xt as fV}from"./chunk-BhbvlhUt.js";import{t as f}from"./chunk-BS6NPll0.js";var Cs=[`determinateSpinner`];function Ns(i,t){if(i&1&&(vv(),ti(0,`svg`,11),no(1,`circle`,12),Es$1()),i&2){let e=sc$1();zn$1(`viewBox`,e._viewBox()),ls$1(),LT(`stroke-dasharray`,e._strokeCircumference(),`px`)(`stroke-dashoffset`,e._strokeCircumference()/2,`px`)(`stroke-width`,e._circleStrokeWidth(),`%`),zn$1(`r`,e._circleRadius())}}var Ms=new v(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:qo})});var qo=100;var Es=10;var Bo=(()=>{class i{_elementRef=m(Me);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let e=m(Ms),n=nj(),r=this._elementRef.nativeElement;this._noopAnimations=n===`di-disabled`&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&n===`reduced-motion`&&r.classList.add(`mat-progress-spinner-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=qo;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Es)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(n){return new(n||i)};static ɵcmp=vt({type:i,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(n,r){if(n&1&&md$1(Cs,5),n&2){let o;cc$1(o=uc$1())&&(r._determinateCircle=o.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(n,r){n&2&&(zn$1(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,r.mode===`determinate`?r.value:null)(`mode`,r.mode),Tk(`mat-`+r.color),LT(`width`,r.diameter,`px`)(`height`,r.diameter,`px`)(`--%NS%mat-progress-spinner-size`,r.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,r.diameter+`px`),jt(`_mat-animation-noopable`,r._noopAnimations)(`mdc-circular-progress--indeterminate`,r.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,Ux],diameter:[2,`diameter`,`diameter`,Ux],strokeWidth:[2,`strokeWidth`,`strokeWidth`,Ux]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(n,r){if(n&1&&(fT(0,Ns,2,8,`ng-template`,null,0,tx),ti(2,`div`,2,1),vv(),ti(4,`svg`,3),no(5,`circle`,4),Es$1()(),Iv(),ti(6,`div`,5)(7,`div`,6)(8,`div`,7),vT(9,8),Es$1(),ti(10,`div`,9),vT(11,8),Es$1(),ti(12,`div`,10),vT(13,8),Es$1()()()),n&2){let o=uk(1);ls$1(4),zn$1(`viewBox`,r._viewBox()),ls$1(),LT(`stroke-dasharray`,r._strokeCircumference(),`px`)(`stroke-dashoffset`,r._strokeDashOffset(),`px`)(`stroke-width`,r._circleStrokeWidth(),`%`),zn$1(`r`,r._circleRadius()),ls$1(4),_s$1(`ngTemplateOutlet`,o),ls$1(2),_s$1(`ngTemplateOutlet`,o),ls$1(2),_s$1(`ngTemplateOutlet`,o)}},dependencies:[pF],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2})}return i})();var $o=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Ue({type:i});static ɵinj=Le({imports:[na$1]})}return i})();var Rs=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=vt({type:i,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(n,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return i})();var As={passive:!0};var Vo=(()=>{class i{_platform=m(At$1);_ngZone=m(me);_renderer=m(vn).createRenderer(null,null);_styleLoader=m(xr);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return We;this._styleLoader.load(Rs);let n=Eo(e),r=this._monitoredElements.get(n);if(r)return r.subject;let o=new q,a=`cdk-text-field-autofilled`,d=l=>{l.animationName===`cdk-text-field-autofill-start`&&!n.classList.contains(a)?(n.classList.add(a),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!0}))):l.animationName===`cdk-text-field-autofill-end`&&n.classList.contains(a)&&(n.classList.remove(a),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!1})))},s=this._ngZone.runOutsideAngular(()=>(n.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(n,`animationstart`,d,As)));return this._monitoredElements.set(n,{subject:o,unlisten:s}),o}stopMonitoring(e){let n=Eo(e),r=this._monitoredElements.get(n);r&&(r.unlisten(),r.subject.complete(),n.classList.remove(`cdk-text-field-autofill-monitored`),n.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((e,n)=>this.stopMonitoring(n))}static ɵfac=function(n){return new(n||i)};static ɵprov=L({token:i,factory:i.ɵfac})}return i})();var Ho=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Ue({type:i});static ɵinj=Le({})}return i})();var Wo=Symbol(`FIELD_TREE`);var xn=0;function Is(){return xn}function Ee(i,t){return(...e)=>{try{return xn=t,i(...e)}finally{xn=0}}}function Ds(i){return!i}function jo(i){return i}function ke(i){return Array.isArray(i)}function Ri(i){return(typeof i==`object`||typeof i==`function`)&&i!=null}var Ve=Symbol();var Li=Symbol();var Rt=class{predicates;fns=[];constructor(t){this.predicates=t}push(t){this.fns.push(Uo(this.predicates,t))}mergeIn(t){let e=this.predicates?t.fns.map(n=>Uo(this.predicates,n)):t.fns;this.fns.push(...e)}hasRules(){return this.fns.length>0}};var Ai=class extends Rt{get defaultValue(){return!1}compute(t){return this.fns.some(e=>{let n=e(t);return n&&n!==Li})}};var st=class i extends Rt{ignore;static ignoreNull(t){return new i(t,e=>e===null)}constructor(t,e){super(t),this.ignore=e}get defaultValue(){return[]}compute(t){return this.fns.reduce((e,n)=>{let r=n(t);return r===void 0||r===Li?e:ke(r)?[...e,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?e:[...e,r]},[])}};var Sn=class extends st{constructor(t){super(t,void 0)}};var wn=class extends Rt{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(t,e){super(t),this.key=e}compute(t){if(this.fns.length===0)return this.key.reducer.getInitial();let e=this.key.reducer.getInitial();for(let n=0;n<this.fns.length;n++){let r=this.fns[n](t);r!==Li&&(e=this.key.reducer.reduce(e,r))}return e}};function Uo(i,t){return i.length===0?t:e=>{for(let n of i){let r=e.stateOf(n.path),o=w(r.structure.pathKeys).length-n.depth;for(let a=0;a<o;a++)r=r.structure.parent;if(!n.fn(r.context))return Li}return t(e)}}var dt=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(t){this.predicates=t,this.hidden=new Ai(t),this.disabledReasons=new Sn(t),this.readonly=new Ai(t),this.syncErrors=st.ignoreNull(t),this.syncTreeErrors=st.ignoreNull(t),this.asyncErrors=st.ignoreNull(t)}hasAnyLogic(){return this.hidden.hasRules()||this.disabledReasons.hasRules()||this.readonly.hasRules()||this.syncErrors.hasRules()||this.syncTreeErrors.hasRules()||this.asyncErrors.hasRules()||this.metadata.size>0}hasMetadata(t){return this.metadata.has(t)}hasMetadataKeys(){return this.metadata.size>0}getMetadataKeys(){return this.metadata.keys()}getMetadata(t){return this.metadata.has(t)||this.metadata.set(t,new wn(this.predicates,t)),this.metadata.get(t)}mergeIn(t){this.hidden.mergeIn(t.hidden),this.disabledReasons.mergeIn(t.disabledReasons),this.readonly.mergeIn(t.readonly),this.syncErrors.mergeIn(t.syncErrors),this.syncTreeErrors.mergeIn(t.syncTreeErrors),this.asyncErrors.mergeIn(t.asyncErrors);for(let e of t.getMetadataKeys()){let n=t.metadata.get(e);this.getMetadata(e).mergeIn(n)}}};var Ii=class{depth;constructor(t){this.depth=t}build(){return new Di(this,[],0)}};var lt=class i extends Ii{constructor(t){super(t)}current;all=[];addHiddenRule(t){this.getCurrent().addHiddenRule(t)}addDisabledReasonRule(t){this.getCurrent().addDisabledReasonRule(t)}addReadonlyRule(t){this.getCurrent().addReadonlyRule(t)}addSyncErrorRule(t){this.getCurrent().addSyncErrorRule(t)}addSyncTreeErrorRule(t){this.getCurrent().addSyncTreeErrorRule(t)}addAsyncErrorRule(t){this.getCurrent().addAsyncErrorRule(t)}addMetadataRule(t,e){this.getCurrent().addMetadataRule(t,e)}getChild(t){if(t===Ve){let e=this.getCurrent().children;e.size>(e.has(Ve)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(t)}hasLogic(t){return this===t?!0:this.all.some(({builder:e})=>e.hasLogic(t))}hasRules(){return this.all.length>0}anyChildHasLogic(){return this.all.some(({builder:t})=>t.anyChildHasLogic())}mergeIn(t,e){e?this.all.push({builder:t,predicate:{fn:Ee(e.fn,this.depth),path:e.path}}):this.all.push({builder:t}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new At(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new i(0)}};var At=class extends Ii{logic=new dt([]);children=new Map;constructor(t){super(t)}addHiddenRule(t){this.logic.hidden.push(Ee(t,this.depth))}addDisabledReasonRule(t){this.logic.disabledReasons.push(Ee(t,this.depth))}addReadonlyRule(t){this.logic.readonly.push(Ee(t,this.depth))}addSyncErrorRule(t){this.logic.syncErrors.push(Ee(t,this.depth))}addSyncTreeErrorRule(t){this.logic.syncTreeErrors.push(Ee(t,this.depth))}addAsyncErrorRule(t){this.logic.asyncErrors.push(Ee(t,this.depth))}addMetadataRule(t,e){this.logic.getMetadata(t).push(Ee(e,this.depth))}getChild(t){return this.children.has(t)||this.children.set(t,new lt(this.depth+1)),this.children.get(t)}hasLogic(t){return this===t}hasRules(){return this.logic.hasAnyLogic()||this.children.size>0}anyChildHasLogic(){for(let t of this.children.values())if(t.hasRules())return!0;return!1}};var Di=class i{builder;predicates;depth;logic;constructor(t,e,n){this.builder=t,this.predicates=e,this.depth=n,this.logic=t?Ts(t,e,n):new dt([])}getChild(t){let e=this.builder?Qo(this.builder,t):[];if(e.length===0)return new i(void 0,[],this.depth+1);if(e.length===1){let{builder:n,predicates:r}=e[0];return new i(n,[...this.predicates,...r.map(o=>Nn(o,this.depth))],this.depth+1)}else return new Cn(e.map(({builder:r,predicates:o})=>new i(r,[...this.predicates,...o.map(a=>Nn(a,this.depth))],this.depth+1)))}hasLogic(t){return this.builder?this.builder.hasLogic(t):!1}hasRules(){return this.builder?this.builder.hasRules():!1}anyChildHasLogic(){return this.builder?this.builder.anyChildHasLogic():!1}};var Cn=class i{all;logic;constructor(t){this.all=t,this.logic=new dt([]);for(let e of t)this.logic.mergeIn(e.logic)}getChild(t){return new i(this.all.flatMap(e=>e.getChild(t)))}hasLogic(t){return this.all.some(e=>e.hasLogic(t))}hasRules(){return this.all.some(t=>t.hasRules())}anyChildHasLogic(){return this.all.some(t=>t.anyChildHasLogic())}};function Qo(i,t){if(i instanceof lt)return i.all.flatMap(({builder:e,predicate:n})=>{let r=Qo(e,t);return n?r.map(({builder:o,predicates:a})=>({builder:o,predicates:[...a,n]})):r});if(i instanceof At)return[...t!==Ve&&i.children.has(Ve)?[{builder:i.getChild(Ve),predicates:[]}]:[],...i.children.has(t)?[{builder:i.getChild(t),predicates:[]}]:[]];throw new I(1909,!1)}function Ts(i,t,e){let n=new dt(t);if(i instanceof lt){let r=i.all.map(({builder:o,predicate:a})=>new Di(o,a?[...t,Nn(a,e)]:t,e));for(let o of r)n.mergeIn(o.logic)}else if(i instanceof At)n.mergeIn(i.logic);else throw new I(1909,!1);return n}function Nn(i,t){return m$1(l({},i),{depth:t})}var Yo=Symbol(`PATH`);var _e=class i{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,Os);logicBuilder;constructor(t,e,n,r){this.keys=t,this.parent=n,this.keyInParent=r,this.root=e??this,n||(this.logicBuilder=lt.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(t){return this.children.has(t)||this.children.set(t,new i([...this.keys,t],this.root,this,t)),this.children.get(t)}mergeIn(t,e){let n=t.compile();this.builder.mergeIn(n.builder,e)}static unwrapFieldPath(t){return t[Yo]}static newRoot(){return new i([],void 0,void 0,void 0)}};var Os={get(i,t){return t===Yo?i:i.getChild(t).fieldPathProxy}};var ki;var kt=new Map;var Ti=class i{schemaFn;constructor(t){this.schemaFn=t}compile(){if(kt.has(this))return kt.get(this);let t=_e.newRoot();kt.set(this,t);let e=ki;try{ki=t,this.schemaFn(t.fieldPathProxy)}finally{ki=e}return t}static create(t){return t instanceof i?t:new i(t)}static rootCompile(t){try{return kt.clear(),t===void 0?_e.newRoot():t instanceof i?t.compile():new i(t).compile()}finally{kt.clear()}}};function Fs(i){return i instanceof Ti||typeof i==`function`}function zi(i){if(ki!==_e.unwrapFieldPath(i).root)throw new I(1908,!1)}function Pn(i,t,e){return zi(i),_e.unwrapFieldPath(i).builder.addMetadataRule(t,e),t}var ct={list(){return{reduce:(i,t)=>t===void 0?i:[...i,t],getInitial:()=>[]}},min(){return{reduce:(i,t)=>i===void 0||t===void 0?i??t:t<i?t:i,getInitial:()=>{}}},max(){return{reduce:(i,t)=>i===void 0||t===void 0?i??t:t>i?t:i,getInitial:()=>{}}},or(){return{reduce:(i,t)=>i||t,getInitial:()=>!1}},and(){return{reduce:(i,t)=>i&&t,getInitial:()=>!0}},override:Ps};function Ps(i){return{reduce:(t,e)=>e,getInitial:()=>i?.()}}var Ln=Symbol(`IS_ASYNC_VALIDATION_RESOURCE`);var Oi=class{reducer;create;brand;[Ln];constructor(t,e){this.reducer=t,this.create=e}};function Re(i){return new Oi(i??ct.override())}function zn(){return Re()}var qn=Re(ct.or());var Xo=zn();var Zo=zn();var Jo=Re(ct.max());var ea=Re(ct.min());var ta=Re(ct.list());function J(i,t){if(i===t)return!0;if(!i||!t||i.length!==t.length)return!1;for(let e=0;e<i.length;e++)if(!Object.is(i[e],t[e]))return!1;return!0}function Ls(i){return i.errors().length>0?`invalid`:i.pending()?`unknown`:`valid`}var Mn=class{node;constructor(t){this.node=t}rawSyncTreeErrors=Ce$1(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]],{equal:J});syncErrors=Ce$1(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...zs(this.node.submitState.submissionErrors())],{equal:J});syncValid=Ce$1(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(t,e)=>e&&t.validationState.syncValid(),Ds));syncTreeErrors=Ce$1(()=>this.rawSyncTreeErrors().filter(t=>t.fieldTree===this.node.fieldTree),{equal:J});rawAsyncErrors=Ce$1(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]],{equal:J});asyncErrors=Ce$1(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(t=>t===`pending`||t.fieldTree===this.node.fieldTree),{equal:J});parseErrors=Ce$1(()=>this.node.formFieldBindings().flatMap(t=>t.parseErrors()),{equal:J});errors=Ce$1(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(t=>t!==`pending`)],{equal:J});errorSummary=Ce$1(()=>{let t=this.node.structure.reduceChildren(this.errors(),(e,n)=>[...n,...e.errorSummary()]);return w(()=>t.sort(qs)),t},{equal:J});pending=Ce$1(()=>this.node.structure.reduceChildren(this.asyncErrors().includes(`pending`),(t,e)=>e||t.validationState.pending()));status=Ce$1(()=>{if(this.shouldSkipValidation())return`valid`;let t=Ls(this);return this.node.structure.reduceChildren(t,(e,n)=>n===`invalid`||e.validationState.status()===`invalid`?`invalid`:n===`unknown`||e.validationState.status()===`unknown`?`unknown`:`valid`,e=>e===`invalid`)});valid=Ce$1(()=>this.status()===`valid`);invalid=Ce$1(()=>this.status()===`invalid`);shouldSkipValidation=Ce$1(()=>this.node.hidden()||this.node.disabled()||this.node.readonly()||this.node.structure.isOrphaned())};function zs(i){return i===void 0?[]:ke(i)?i:[i]}function ia(i,t){if(ke(i))for(let e of i)e.fieldTree??=t;else i&&(i.fieldTree??=t);return i}function Go(i){return i.formField?i.formField.element:i.fieldTree().formFieldBindings().reduce((t,e)=>!t||!e.element?t??e.element:t.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e.element:t,void 0)}function qs(i,t){let e=Go(i),n=Go(t);return e===n?0:e===void 0||n===void 0?e===void 0?1:-1:e.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var En=Re();var kn=class{node;cache=new WeakMap;constructor(t){this.node=t,this.fieldTreeOf=this.fieldTreeOf.bind(this),this.stateOf=this.stateOf.bind(this)}resolve(t){if(!this.cache.has(t)){let e=Ce$1(()=>{let n=_e.unwrapFieldPath(t),r=this.node,o=Is();for(;o>0||!r.structure.logic.hasLogic(n.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new I(1900,!1);for(let a of n.keys)if(r=r.structure.getChild(a),r===void 0)throw new I(1901,!1);return r.fieldTree});this.cache.set(t,e)}return this.cache.get(t)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=Ce$1(()=>{let t=this.key();if(!ke(w(this.node.structure.parent.value)))throw new I(1906,!1);return Number(t)});fieldTreeOf(t){return this.resolve(t)}stateOf(t){return this.resolve(t)()}valueOf=t=>{let e=this.resolve(t)().value();if(e instanceof Of)throw new I(1907,!1);return e}};var Rn=class{node;metadata=new Map;constructor(t){this.node=t}runMetadataCreateLifecycle(){if(!this.node.logicNode.logic.hasMetadataKeys())return;let t=n_$1();t&&ci(!1);try{w(()=>Xe(this.node.structure.injector,()=>{for(let e of this.node.logicNode.logic.getMetadataKeys())if(e.create){let n=this.node.logicNode.logic.getMetadata(e),r=e.create(this.node,Ce$1(()=>n.compute(this.node.context)));this.metadata.set(e,r)}}))}finally{t&&ci(!0)}}get(t){if(this.has(t)&&!this.metadata.has(t)){if(t.create)throw new I(1912,!1);let e=this.node.logicNode.logic.getMetadata(t);this.metadata.set(t,Ce$1(()=>e.compute(this.node.context)))}return this.metadata.get(t)}has(t){return this.node.logicNode.logic.hasMetadata(t)}};var Bs={get(i,t,e){if(t===Wo)return!0;let n=i(),r=n.structure.getChild(t);if(r!==void 0)return r.fieldTree;let o=w(n.value);if(ke(o)){if(t===`length`)return n.value().length;if(t===Symbol.iterator)return()=>(n.value(),Array.prototype[Symbol.iterator].apply(n.fieldTree))}if(Ri(o)&&t===Symbol.iterator)return function*(){for(let a in e)yield[a,e[a]]}},getOwnPropertyDescriptor(i,t){let e=w(i().value),n=Reflect.getOwnPropertyDescriptor(e,t);return n&&!n.configurable&&(n.configurable=!0),n},ownKeys(i){let t=w(i().value);return typeof t==`object`&&t!==null?Reflect.ownKeys(t):[]}};function $s(i,t){let e=Ce$1(()=>i()[t()]);return e[Oe]=i[Oe],e.set=n=>{Object.is(w(e),n)||i.update(r=>Vs(r,n,t()))},e.update=n=>{e.set(n(w(e)))},e.asReadonly=()=>e,e}function Vs(i,t,e){if(ke(i)){let n=[...i];return n[e]=t,n}else return m$1(l({},i),{[e]:t})}var at=Symbol(``);var na=Ce$1(()=>!1);var Fi=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;_anyChildHasLogic;get injector(){return this._injector??=se.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(t,e,n){this.logic=t,this.node=e,this.createChildNode=n}children(){this.ensureChildrenMap();let t=this.childrenMap();return t===void 0?[]:Array.from(t.byPropertyKey.values()).map(e=>w(e.reader))}materializedChildren(){let t=this.childrenMap();return t===void 0?[]:Array.from(t.byPropertyKey.values()).map(e=>e.node)}_areChildrenMaterialized(){return w(this.childrenMap)!==void 0}ensureChildrenMap(){this._areChildrenMaterialized()||w(()=>{this.childrenMap.update(t=>this.computeChildrenMap(this.value(),t,!0))})}getChild(t){this.ensureChildrenMap();let e=t.toString(),n=w(this.childrenMap)?.byPropertyKey.get(e)?.reader;return n||(n=this.createReader(e)),n()}reduceChildren(t,e,n){let r=this.childrenMap();if(!r)return t;let o=t;for(let a of r.byPropertyKey.values()){if(n?.(o))break;o=e(w(a.reader),o)}return o}destroy(){this.injector.destroy()}createKeyOrOrphanSignals(t,e,n){if(t===`root`)return{keyInParent:ra,isOrphaned:na};let r=this.parent,o=n,a=Ce$1(()=>{if(r.structure.isOrphaned())return at;let l=r.structure.childrenMap();if(!l)return at;let u=l.byPropertyKey.get(o);if(u&&u.node===this.node)return o;if(e===void 0)return at;for(let[m,p]of l.byPropertyKey)if(p.node===this.node)return o=m;return at}),d=Ce$1(()=>a()===at);return{keyInParent:Ce$1(()=>{let l=a();if(l===at)throw e===void 0?new I(-1902,!1):new I(1904,!1);return l}),isOrphaned:d}}createChildrenMap(){return ys({source:this.value,computation:(t,e)=>this.computeChildrenMap(t,e?.value,!1)})}computeChildrenMap(t,e,n){if(!Ri(t)||!n&&e===void 0&&!(this._anyChildHasLogic??=this.logic.anyChildHasLogic()))return;e??={byPropertyKey:new Map};let r,o=ke(t);e!==void 0&&(o?r=js(e,t,this.identitySymbol):r=Us(e,t));for(let a of Object.keys(t)){let d,s=t[a];if(s===void 0){e.byPropertyKey.has(a)&&(r??=l({},e),r.byPropertyKey.delete(a));continue}o&&Ri(s)&&!ke(s)&&(d=s[this.identitySymbol]??=Symbol(``));let l$1;d&&(e.byTrackingKey?.has(d)||(r??=l({},e),r.byTrackingKey??=new Map,r.byTrackingKey.set(d,this.createChildNode(a,d,o))),l$1=(r??e).byTrackingKey.get(d));let u=e.byPropertyKey.get(a);u===void 0?(r??=l({},e),r.byPropertyKey.set(a,{reader:this.createReader(a),node:l$1??this.createChildNode(a,d,o)})):l$1&&l$1!==u.node&&(r??=l({},e),u.node=l$1)}return r??e}createReader(t){return Ce$1(()=>this.childrenMap()?.byPropertyKey.get(t)?.node)}};var An=class extends Fi{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return Hs}get keyInParent(){return ra}isOrphaned=na;childrenMap;constructor(t,e,n,r,o){super(e,t,o),this.fieldManager=n,this.value=r,this.childrenMap=this.createChildrenMap()}};var In=class extends Fi{logic;parent;root;pathKeys;keyInParent;value;childrenMap;isOrphaned;get fieldManager(){return this.root.structure.fieldManager}constructor(t,e,n,r,o,a){super(e,t,a),this.logic=e,this.parent=n,this.root=this.parent.structure.root;let d=this.createKeyOrOrphanSignals(`child`,r,o);this.isOrphaned=d.isOrphaned,this.keyInParent=d.keyInParent,this.pathKeys=Ce$1(()=>[...n.structure.pathKeys(),this.keyInParent()]),this.value=$s(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var Hs=Ce$1(()=>[]);var ra=Ce$1(()=>{throw new I(1905,!1)});function js(i,t,e){let n,r=new Set(i.byPropertyKey.keys()),o=i.byTrackingKey&&new Set(i.byTrackingKey.keys());for(let a=0;a<t.length;a++){let d=t[a];r.delete(a.toString()),o&&Ri(d)&&Object.hasOwn(d,e)&&o.delete(d[e])}if(r.size>0){n??=l({},i);for(let a of r)n.byPropertyKey.delete(a)}if(o&&o.size>0){n??=l({},i);for(let a of o)n.byTrackingKey.delete(a)}return n}function Us(i,t){let e;for(let n of i.byPropertyKey.keys())Object.hasOwn(t,n)||(e??=l({},i),e.byPropertyKey.delete(n));return e}var Dn=class{node;selfSubmitting=B(!1);submissionErrors;constructor(t){this.node=t,this.submissionErrors=ys({source:this.node.structure.value,computation:()=>[]})}submitting=Ce$1(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))};var It=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new kn(this)}fieldProxy=new Proxy(()=>this,Bs);pathNode;constructor(t){this.pathNode=t.pathNode,this.fieldAdapter=t.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,t),this.validationState=this.fieldAdapter.createValidationState(this,t),this.nodeState=this.fieldAdapter.createNodeState(this,t),this.metadataState=new Rn(this),this.submitState=new Dn(this),this.controlValue=this.controlValueSignal(),this.metadataState.runMetadataCreateLifecycle()}focusBoundControl(t){this.getBindingForFocus()?.focus(t)}getBindingForFocus(){return this.formFieldBindings().filter(e=>e.focus!==void 0).reduce(Ko,void 0)||this.structure.children().map(e=>e.getBindingForFocus()).reduce(Ko,void 0)}pendingSync=ys({source:()=>this.value(),computation:(t,e)=>{e?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){let t=this.metadata(Zo)?.();return t?this.metadata(t):void 0}get maxLength(){return this.metadata(ea)}get min(){let t=this.metadata(Xo)?.();return t?this.metadata(t):void 0}get minLength(){return this.metadata(Jo)}get pattern(){return this.metadata(ta)??Gs}get required(){return this.metadata(qn)??Ks}metadata(t){return this.metadataState.get(t)}getError(t){return this.errors().find(e=>e.kind===t)}hasMetadata(t){return this.metadataState.has(t)}markAsTouched(t){this.structure.isOrphaned()||w(()=>{this.markAsTouchedInternal(t),this.flushSync()})}markAsTouchedInternal(t){if(!this.structure.isOrphaned()&&!this.validationState.shouldSkipValidation()&&(this.nodeState.markAsTouched(),!t?.skipDescendants))for(let e of this.structure.children())e.markAsTouchedInternal()}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(t){w(()=>this._reset(t))}_reset(t){this.pendingSync()?.abort(),t!==void 0&&this.value.set(t),this.controlValue.rawSet(this.value()),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let e of this.formFieldBindings())e.reset();for(let e of this.structure.materializedChildren())e._reset()}reloadValidation(){w(()=>this._reloadValidation())}_reloadValidation(){let t=this.logicNode.logic.getMetadataKeys();for(let e of t)e[Ln]&&this.metadata(e).reload?.();for(let e of this.structure.children())e._reloadValidation()}controlValueSignal(){let t=ys(this.value);t.rawSet=t.set,t.set=n=>{t.rawSet(n),this.markAsDirty(),this.debounceSync()};let e=t.update;return t.update=n=>{e(n),this.markAsDirty(),this.debounceSync()},t}sync(){this.value.set(this.controlValue())}flushSync(){let t=this.pendingSync();t&&!t.signal.aborted&&(t.abort(),this.sync())}async debounceSync(){let t=w(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(t){let e=new AbortController,n=t(e.signal);if(n&&(this.pendingSync.set(e),await n,e.signal.aborted))return}this.structure.isOrphaned()||this.sync()}static newRoot(t,e,n,r){return r.newRoot(t,e,n,r)}createStructure(t){return t.kind===`root`?new An(this,t.logic,t.fieldManager,t.value,this.newChild.bind(this)):new In(this,t.logic,t.parent,t.identityInParent,t.initialKeyInParent,this.newChild.bind(this))}newChild(t,e,n){let r,o;return n?(r=this.pathNode.getChild(Ve),o=this.structure.logic.getChild(Ve)):(r=this.pathNode.getChild(t),o=this.structure.logic.getChild(t)),this.fieldAdapter.newChild({kind:`child`,parent:this,pathNode:r,logic:o,initialKeyInParent:t,identityInParent:e,fieldAdapter:this.fieldAdapter})}};var Gs=Ce$1(()=>[]);var Ks=Ce$1(()=>!1);function Ko(i,t){return i?t&&i.element.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_PRECEDING?t:i:t}var Tn=class{node;selfTouched=B(!1);selfDirty=B(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=B([]);constructor(t){this.node=t}dirty=Ce$1(()=>{let t=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(t,(e,n)=>n||e.nodeState.dirty(),jo)});touched=Ce$1(()=>{let t=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(t,(e,n)=>n||e.nodeState.touched(),jo)});disabledReasons=Ce$1(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)],{equal:J});disabled=Ce$1(()=>!!this.disabledReasons().length);readonly=Ce$1(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=Ce$1(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=Ce$1(()=>{let t=this.node.structure.parent;return t?`${t.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=Ce$1(()=>{if(this.node.logicNode.logic.hasMetadata(En)){let e=this.node.logicNode.logic.getMetadata(En).compute(this.node.context);if(e)return n=>e(this.node.context,n)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=Ce$1(()=>this.hidden()||this.disabled()||this.readonly())};var On=class{newRoot(t,e,n,r){return new It({kind:`root`,fieldManager:t,value:e,pathNode:n,logic:n.builder.build(),fieldAdapter:r})}newChild(t){return new It(t)}createNodeState(t){return new Tn(t)}createValidationState(t){return new Mn(t)}createStructure(t,e){return t.createStructure(e)}};var Fn=class{injector;rootName;submitOptions;constructor(t,e,n){this.injector=t,this.rootName=e??`${this.injector.get($n$1)}.form${Ws++}`,this.submitOptions=n}structures=new Set;createFieldManagementEffect(t){Nt(()=>{let e=new Set;this.markStructuresLive(t,e);for(let n of this.structures)e.has(n)||(this.structures.delete(n),w(()=>n.destroy()))},{injector:this.injector})}markStructuresLive(t,e){e.add(t);for(let n of t.children())this.markStructuresLive(n.structure,e)}};var Ws=0;var oa=new v(``);function Qs(i){let t,e,n;return i.length===3?[t,e,n]=i:i.length===2?Fs(i[1])?[t,e]=i:[t,n]=i:[t]=i,[t,e,n]}function Bn(...i){let[t,e,n]=Qs(i),r=n?.injector??m(se),o=Xe(r,()=>Ti.rootCompile(e)),a=new Fn(r,n?.name,n?.submission),d=n?.adapter??new On,s=It.newRoot(a,t,o,d);a.createFieldManagementEffect(s.structure);let{experimentalWebMcpTool:l}=n??{};if(l){let u=Xe(r,()=>m(oa,{optional:!0}));u&&Xe(r,()=>u(s.fieldTree,{name:l.name,description:l.description}))}return s.fieldTree}var Pi=class{kind=`compat`;control;fieldTree;context;message;constructor({context:t,kind:e,control:n}){this.context=t,this.kind=e,this.control=n}};function aa(i){if(i.length===0)return null;let t={};for(let e of i)t[e.kind]=e instanceof Pi?e.context:e;return t}function sa(i,t){return i===null?[]:Object.entries(i).map(([e,n])=>new Pi({context:n,kind:e,control:t}))}var Ys=new v(``);function ua(i,t){zi(i);let e=_e.unwrapFieldPath(i),n;typeof t==`function`||typeof t==`string`?n=t:n=t?.when,e.builder.addDisabledReasonRule(r=>{let o=!0;return typeof n==`string`?o=n:n&&(o=n(r)),typeof o==`string`?{fieldTree:r.fieldTree,message:o}:o?{fieldTree:r.fieldTree}:void 0})}function qi(i,t){return i instanceof Function?i(t):i}function ma(i){return typeof i==`number`?isNaN(i):i===``||i===!1||i==null}function da(i){return i===void 0?[]:Array.isArray(i)?i:[i]}function mt(i,t){zi(i),_e.unwrapFieldPath(i).builder.addSyncErrorRule(n=>ia(t(n),n.fieldTree))}function Xs(i){return new $n(i)}function Zs(i){return new Vn(i)}var Dt=class{__brand=void 0;kind=``;fieldTree;message;constructor(t){t&&Object.assign(this,t)}};var $n=class extends Dt{kind=`required`};var Vn=class extends Dt{kind=`email`};var Bi=class extends Dt{kind=`parse`};var Js=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function fa(i,t){mt(i,e=>{if(!(t?.when&&!t.when(e))&&!ma(e.value())&&!Js.test(e.value()))return t?.error?qi(t.error,e):Zs({message:qi(t?.message,e)})})}function $i(i,t){let e=Pn(i,Re(),n=>t?.when?t.when(n):!0);Pn(i,qn,({state:n})=>n.metadata(e)()),mt(i,n=>{if(n.state.metadata(e)()&&ma(n.value()))return t?.error?qi(t.error,n):Xs({message:qi(t?.message,n)})})}function ed(i,t,e){let n=ys({source:i,computation:()=>[],equal:J}),r=a=>{let d=e(a);n.set(da(d.error)),d.value!==void 0&&t(d.value),n.set(da(d.error))},o=()=>{n.set([])};return{errors:n.asReadonly(),setRawValue:r,reset:o}}var Hn=class{field;constructor(t){this.field=t}control=this;get value(){return this.field().controlValue()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return aa(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return`DISABLED`;if(this.field().valid())return`VALID`;if(this.field().invalid())return`INVALID`;if(this.field().pending())return`PENDING`;throw new I(1910,!1)}valueAccessor=null;hasValidator(t){return t===_E.required?this.field().required():!1}updateValueAndValidity(){}};var jn={disabled:`disabled`,disabledReasons:`disabledReasons`,dirty:`dirty`,errors:`errors`,hidden:`hidden`,invalid:`invalid`,max:`max`,maxLength:`maxLength`,min:`min`,minLength:`minLength`,name:`name`,pattern:`pattern`,pending:`pending`,readonly:`readonly`,required:`required`,touched:`touched`};var td=(()=>{let i={};for(let t of Object.keys(jn))i[jn[t]]=t;return i})();function Un(i,t){return i[td[t]]?.()}var Gn=Object.values(jn);function Vi(){return{}}function Ae(i,t,e){return i[t]!==e?(i[t]=e,!0):!1}function id(i,t,e){let n;if(ha(i)&&e.isBadInput(i))return{error:new Bi};switch(i.type){case`checkbox`:return{value:i.checked};case`number`:case`range`:case`datetime-local`:if(n=w(t),typeof n==`number`||n===null)return{value:i.value===``?null:i.valueAsNumber};break;case`date`:case`month`:case`time`:case`week`:if(n=w(t),n===null||n instanceof Date)return{value:i.valueAsDate};if(typeof n==`number`)return{value:i.valueAsNumber};break}if(i.tagName===`INPUT`&&i.type===`text`&&(n??=w(t),typeof n==`number`||n===null)){if(i.value===``)return{value:null};let r=Number(i.value);return Number.isNaN(r)?{error:new Bi}:{value:r}}return{value:i.value}}function la(i,t){switch(i.type){case`checkbox`:i.checked=t;return;case`radio`:i.checked=t===i.value;return;case`number`:case`range`:case`datetime-local`:if(typeof t==`number`){ca(i,t);return}else if(t===null){i.value=``;return}break;case`date`:case`month`:case`time`:case`week`:if(t===null||t instanceof Date){i.valueAsDate=t;return}else if(typeof t==`number`){ca(i,t);return}}if(i.tagName===`INPUT`&&i.type===`text`){if(typeof t==`number`){i.value=isNaN(t)?``:String(t);return}if(t===null){i.value=``;return}}i.value=t}function ca(i,t){isNaN(t)?i.value=``:i.valueAsNumber=t}function ha(i){return i.tagName===`INPUT`}function nd(i){return i.type===`date`||i.type===`datetime-local`||i.type===`month`||i.type===`time`||i.type===`week`}function rd(i,t){let e=i.getUTCFullYear(),n=String(i.getUTCMonth()+1).padStart(2,`0`);if(t===`month`)return`${e}-${n}`;return`${e}-${n}-${String(i.getUTCDate()).padStart(2,`0`)}`}function pa(i,t,e){return t instanceof Date&&(i===`min`||i===`max`)&&(e===`date`||e===`month`)?rd(t,e):t}function od(i,t){i.listenToCustomControlModel(n=>t.state().controlValue.set(n)),i.listenToCustomControlOutput(`touch`,()=>t.state().markAsTouched()),t.registerAsBinding(i.customControl);let e=Vi();return()=>{let n=t.state(),r=n.controlValue();Ae(e,`controlValue`,r)&&i.setCustomControlModelInput(r);for(let o of Gn){let a;if(o===`errors`?a=t.errors():a=Un(n,o),Ae(e,o,a)&&(i.setInputOnDirectives(o,a),t.elementAcceptsNativeProperty(o)&&!i.customControlHasInput(o))){let d=pa(o,a,t.nativeFormElement.type);iV(t.renderer,t.nativeFormElement,o,d)}}}}function ad(i){return typeof i==`object`&&i!==null}function sd(i,t){let e=Vi();t.controlValueAccessor.registerOnChange(r=>{e.controlValue=r,t.state().controlValue.set(r)}),t.controlValueAccessor.registerOnTouched(()=>t.state().markAsTouched());let n=t.injector.get(Vs$1,null,{optional:!0,self:!0});if(n){let r;for(let s of n)ad(s)&&s.registerOnValidatorChange&&(r??=B(0),s.registerOnValidatorChange(()=>{r.update(l=>l+1)}));let o=n.map(s=>typeof s==`function`?s:s.validate.bind(s)),a=_E.compose(o),d=Ce$1(()=>{r?.();return sa(a?a(t.interopNgControl.control):null,t.interopNgControl.control)});t.parseErrorsSource.set(d)}return t.registerAsBinding({reset:()=>{let r=t.state().value();e.controlValue=r,w(()=>t.controlValueAccessor.writeValue(r))}}),()=>{let r=t.state(),o=r.controlValue();Ae(e,`controlValue`,o)&&w(()=>t.controlValueAccessor.writeValue(o));for(let a of Gn){let d=Un(r,a);if(Ae(e,a,d)){let s=i.setInputOnDirectives(a,d,a===`name`?dd:void 0);a===`disabled`&&t.controlValueAccessor.setDisabledState?w(()=>t.controlValueAccessor.setDisabledState(d)):!s&&t.elementAcceptsNativeProperty(a)&&iV(t.renderer,t.nativeFormElement,a,d)}}}}function dd(i){return i==null}function ld(i,t,e){if(typeof MutationObserver!=`function`)return;let n=new MutationObserver(r=>{r.some(o=>cd(o))&&t()});n.observe(i,{attributes:!0,attributeFilter:[`value`],characterData:!0,childList:!0,subtree:!0}),e.onDestroy(()=>n.disconnect())}function cd(i){if(i.type===`childList`||i.type===`characterData`){if(i.target instanceof Comment)return!1;for(let t of i.addedNodes)if(!(t instanceof Comment))return!0;for(let t of i.removedNodes)if(!(t instanceof Comment))return!0;return!1}return i.type===`attributes`&&i.target instanceof HTMLOptionElement}function ud(i,t,e,n){let r=!1,o=t.nativeFormElement,a=ed(()=>t.state().value(),s=>t.state().controlValue.set(s),s=>id(o,t.state().value,n));e.set(a.errors),t.onReset=()=>{a.reset();let s=t.state().value();d.controlValue=s,la(o,s)},i.listenToDom(`input`,()=>a.setRawValue(void 0)),i.listenToDom(`blur`,()=>t.state().markAsTouched()),ha(o)&&nd(o)&&n.watchValidity(t.destroyRef,o,()=>a.setRawValue(void 0)),t.registerAsBinding(),o.tagName===`SELECT`&&ld(o,()=>{r&&(o.value=t.state().controlValue())},t.destroyRef);let d=Vi();return()=>{let s=t.state();for(let p of Gn){let x=Un(s,p);if(Ae(d,p,x)&&(i.setInputOnDirectives(p,x),t.elementAcceptsNativeProperty(p))){let I=pa(p,x,o.type);iV(t.renderer,o,p,I)}}let l=s.controlValue(),u=Ae(d,`controlValue`,l),m=o.type===`radio`&&Ae(d,`radioValue`,o.value);(u||m)&&la(o,l),r=!0}}var _a=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵprov=G({token:i,factory:e=>md.ɵfac(e),providedIn:`root`})}return i})();var md=(()=>{class i extends _a{document=m(Z);cspNonce=m(Ji,{optional:!0});injectedStyles=new WeakMap;watchValidity(e,n,r){let o=n.getRootNode();this.injectedStyles.has(o)||this.injectedStyles.set(o,this.createTransitionStyle(o));let a=d=>{let s=d;(s.animationName===`ng-valid`||s.animationName===`ng-invalid`)&&r()};n.addEventListener(`animationstart`,a),e.onDestroy(()=>{n.removeEventListener(`animationstart`,a)})}isBadInput(e){return e.validity?.badInput??!1}createTransitionStyle(e){let n=this.document.createElement(`style`);return this.cspNonce&&(n.nonce=this.cspNonce),n.textContent=`
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `,e.nodeType===9?e.head?.appendChild(n):e.appendChild(n),n}ngOnDestroy(){this.injectedStyles.get(this.document)?.remove()}static ɵfac=(()=>{let e;return function(r){return(e||(e=Wn$1(i)))(r||i)}})();static ɵprov=G({token:i,factory:i.ɵfac})}return i})();var fd=Symbol();var ut=new v(``);var xu=(()=>{class i{field=Id$1.required({alias:`formField`});state=Ce$1(()=>this.field()());renderer=m(at$1);destroyRef=m(je);injector=m(se);element=m(Me).nativeElement;elementIsNativeFormElement=oV(this.element);elementAcceptsTextualValues=lee(this.element);_elementAcceptsMinMax;nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=e=>this.element.focus(e);controlValueAccessors=m(Us$1,{optional:!0,self:!0});config=m(Ys,{optional:!0});validityMonitor=m(_a);parseErrorsSource=B(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new Hn(this.state)}parseErrors=Ce$1(()=>this.parseErrorsSource()?.().map(e=>m$1(l({},e),{fieldTree:w(this.state).fieldTree,formField:this}))??[],{equal:J});errors=Ce$1(()=>this.state().errors().filter(e=>!e.formField||e.formField===this),{equal:J});isFieldBinding=!1;resetter=()=>{};parseErrorsResetCallback;setParseErrors(e){this.parseErrorsSource.set(e)}set onReset(e){this.parseErrorsResetCallback=e}get onReset(){return this.parseErrorsResetCallback}get controlValueAccessor(){return!this.controlValueAccessors||this.controlValueAccessors.length===0?this.interopNgControl?.valueAccessor??void 0:_V(this.interopNgControl,this.controlValueAccessors)??void 0}installClassBindingEffect(){let e=Object.entries(this.config?.classes??{}).map(([r,o])=>[r,Ce$1(()=>o(this))]);if(e.length===0)return;let n=Vi();KZ({write:()=>{for(let[r,o]of e){let a=o();Ae(n,r,a)&&(a?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r))}}},{injector:this.injector})}focus(e){this.focuser(e)}reset(){this.resetter(),this.parseErrorsResetCallback?.(this.state().value())}registerAsBinding(e){if(this.isFieldBinding)throw new I(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),e?.focus&&(this.focuser=n=>e.focus(n)),e?.reset&&(this.resetter=()=>e.reset()),Nt(n=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),n(()=>{r.nodeState.formFieldBindings.update(o=>o.filter(a=>a!==this))})},{injector:this.injector})}[fd];ɵngControlCreate(e){if(!e.hasPassThrough)if(this.controlValueAccessor)this.ɵngControlUpdate=sd(e,this);else if(e.customControl)this.ɵngControlUpdate=od(e,this);else if(this.elementIsNativeFormElement)this.ɵngControlUpdate=ud(e,this,this.parseErrorsSource,this.validityMonitor);else throw new I(1914,!1)}ɵngControlUpdate;elementAcceptsNativeProperty(e){if(!this.elementIsNativeFormElement)return!1;switch(e){case`min`:case`max`:return this._elementAcceptsMinMax??=uee(this.element);case`minLength`:case`maxLength`:return this.elementAcceptsTextualValues;case`disabled`:case`required`:case`readonly`:case`name`:return!0;default:return!1}}static ɵfac=function(n){return new(n||i)};static ɵdir=X({type:i,selectors:[[``,`formField`,``]],inputs:{field:[1,`formField`,`field`]},exportAs:[`formField`],features:[Pt$1([{provide:ut,useExisting:i},{provide:fo,useFactory:()=>m(i).interopNgControl},{provide:lV,useFactory:()=>m(ut,{self:!0})}]),ad$1(`formField`)]})}return i})();var ga=new v(`MAT_INPUT_VALUE_ACCESSOR`);var Kn=class{_box;_destroyed=new q;_resizeSubject=new q;_resizeObserver;_elementObservables=new Map;constructor(t){this._box=t,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(t){return this._elementObservables.has(t)||this._elementObservables.set(t,new V(e=>{let n=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(t,{box:this._box}),()=>{this._resizeObserver?.unobserve(t),n.unsubscribe(),this._elementObservables.delete(t)}}).pipe(ht(e=>e.some(n=>n.target===t)),Yb({bufferSize:1,refCount:!0}),ur$1(this._destroyed))),this._elementObservables.get(t)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var ba=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=m(me);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,n){let r=n?.box||`content-box`;return this._observers.has(r)||this._observers.set(r,new Kn(r)),this._observers.get(r).observe(e)}static ɵfac=function(n){return new(n||i)};static ɵprov=L({token:i,factory:i.ɵfac})}return i})();var hd=[`notch`];var pd=[`*`];var ya=[`iconPrefixContainer`];var va=[`textPrefixContainer`];var xa=[`iconSuffixContainer`];var Sa=[`textSuffixContainer`];var _d=[`textField`];var gd=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]];var bd=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function yd(i,t){i&1&&no(0,`span`,21)}function vd(i,t){if(i&1&&(ti(0,`label`,20),Ss(1,1),rc$1(2,yd,1,0,`span`,21),Es$1()),i&2){let e=sc$1(2);_s$1(`floating`,e._shouldLabelFloat())(`monitorResize`,e._hasOutline())(`id`,e._labelId),zn$1(`for`,e._control.disableAutomaticLabeling?null:e._control.id),ls$1(2),oc$1(!e.hideRequiredMarker&&e._control.required?2:-1)}}function xd(i,t){if(i&1&&rc$1(0,vd,3,5,`label`,20),i&2)oc$1(sc$1()._hasFloatingLabel()?0:-1)}function Sd(i,t){i&1&&no(0,`div`,7)}function wd(i,t){}function Cd(i,t){if(i&1&&fT(0,wd,0,0,`ng-template`,13),i&2){sc$1(2);_s$1(`ngTemplateOutlet`,uk(1))}}function Nd(i,t){if(i&1&&(ti(0,`div`,9),rc$1(1,Cd,1,1,null,13),Es$1()),i&2){let e=sc$1();_s$1(`matFormFieldNotchedOutlineOpen`,e._shouldLabelFloat()),ls$1(),oc$1(e._forceDisplayInfixLabel()?-1:1)}}function Md(i,t){i&1&&(ti(0,`div`,10,2),Ss(2,2),Es$1())}function Ed(i,t){i&1&&(ti(0,`div`,11,3),Ss(2,3),Es$1())}function kd(i,t){}function Rd(i,t){if(i&1&&fT(0,kd,0,0,`ng-template`,13),i&2){sc$1();_s$1(`ngTemplateOutlet`,uk(1))}}function Ad(i,t){i&1&&(ti(0,`div`,14,4),Ss(2,4),Es$1())}function Id(i,t){i&1&&(ti(0,`div`,15,5),Ss(2,5),Es$1())}function Dd(i,t){i&1&&no(0,`div`,16)}function Td(i,t){i&1&&(ti(0,`div`,18),Ss(1,6),Es$1())}function Od(i,t){if(i&1&&(ti(0,`mat-hint`,22),Kg(1),Es$1()),i&2){let e=sc$1(2);_s$1(`id`,e._hintLabelId),ls$1(),BT(e.hintLabel)}}function Fd(i,t){if(i&1&&(ti(0,`div`,19),rc$1(1,Od,2,2,`mat-hint`,22),Ss(2,7),no(3,`div`,23),Ss(4,8),Es$1()),i&2){let e=sc$1();ls$1(),oc$1(e.hintLabel?1:-1)}}var Wn=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵdir=X({type:i,selectors:[[`mat-label`]]})}return i})();var Ra=new v(`MatError`);var Pd=(()=>{class i{id=m(cu).getId(`mat-mdc-error-`);static ɵfac=function(n){return new(n||i)};static ɵdir=X({type:i,selectors:[[`mat-error`],[``,`matError`,``]],hostAttrs:[1,`mat-mdc-form-field-error`,`mat-mdc-form-field-bottom-align`],hostVars:1,hostBindings:function(n,r){n&2&&hd$1(`id`,r.id)},inputs:{id:`id`},features:[Pt$1([{provide:Ra,useExisting:i}])]})}return i})();var Qn=(()=>{class i{align=`start`;id=m(cu).getId(`mat-mdc-hint-`);static ɵfac=function(n){return new(n||i)};static ɵdir=X({type:i,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(n,r){n&2&&(hd$1(`id`,r.id),zn$1(`align`,null),jt(`mat-mdc-form-field-hint-end`,r.align===`end`))},inputs:{align:`align`,id:`id`}})}return i})();var Aa=new v(`MatPrefix`);var Ld=(()=>{class i{set _isTextSelector(e){this._isText=!0}_isText=!1;static ɵfac=function(n){return new(n||i)};static ɵdir=X({type:i,selectors:[[``,`matPrefix`,``],[``,`matIconPrefix`,``],[``,`matTextPrefix`,``]],inputs:{_isTextSelector:[0,`matTextPrefix`,`_isTextSelector`]},features:[Pt$1([{provide:Aa,useExisting:i}])]})}return i})();var Ia=new v(`MatSuffix`);var zd=(()=>{class i{set _isTextSelector(e){this._isText=!0}_isText=!1;static ɵfac=function(n){return new(n||i)};static ɵdir=X({type:i,selectors:[[``,`matSuffix`,``],[``,`matIconSuffix`,``],[``,`matTextSuffix`,``]],inputs:{_isTextSelector:[0,`matTextSuffix`,`_isTextSelector`]},features:[Pt$1([{provide:Ia,useExisting:i}])]})}return i})();var Da=new v(`FloatingLabelParent`);var wa=(()=>{class i{_elementRef=m(Me);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=m(ba);_ngZone=m(me);_parent=m(Da);_resizeSubscription=new we;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return qd(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(n){return new(n||i)};static ɵdir=X({type:i,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(n,r){n&2&&jt(`mdc-floating-label--float-above`,r.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return i})();function qd(i){let t=i;if(t.offsetParent!==null)return t.scrollWidth;let e=t.cloneNode(!0);e.style.setProperty(`position`,`absolute`),e.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(e);let n=e.scrollWidth;return e.remove(),n}var Ca=`mdc-line-ripple--active`;var Hi=`mdc-line-ripple--deactivating`;var Na=(()=>{class i{_elementRef=m(Me);_cleanupTransitionEnd;constructor(){let e=m(me),n=m(at$1);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=n.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Hi),e.add(Ca)}deactivate(){this._elementRef.nativeElement.classList.add(Hi)}_handleTransitionEnd=e=>{let n=this._elementRef.nativeElement.classList,r=n.contains(Hi);e.propertyName===`opacity`&&r&&n.remove(Ca,Hi)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(n){return new(n||i)};static ɵdir=X({type:i,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return i})();var Ma=(()=>{class i{_elementRef=m(Me);_ngZone=m(me);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,n=e.querySelector(`.mdc-floating-label`);n?(e.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(n.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>n.style.transitionDuration=``)}))):e.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(e){let n=this._notch.nativeElement;!this.open||!e?n.style.width=``:n.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${e}px)`)}static ɵfac=function(n){return new(n||i)};static ɵcmp=vt({type:i,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(n,r){if(n&1&&md$1(hd,5),n&2){let o;cc$1(o=uc$1())&&(r._notch=o.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(n,r){n&2&&jt(`mdc-notched-outline--notched`,r.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:pd,decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(n,r){n&1&&(ac$1(),ST(0,`div`,1),ld$1(1,`div`,2,0),Ss(3),dd$1(),ST(4,`div`,3))},encapsulation:2})}return i})();var Tt=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static ɵfac=function(n){return new(n||i)};static ɵdir=X({type:i})}return i})();var Ot=new v(`MatFormField`);var Bd=new v(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var Ea=`fill`;var $d=`auto`;var ka=`fixed`;var Vd=`translateY(-50%)`;var Ta=(()=>{class i{_elementRef=m(Me);_changeDetectorRef=m($t$1);_platform=m(At$1);_idGenerator=m(cu);_ngZone=m(me);_defaults=m(Bd,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=HZ(`iconPrefixContainer`);_textPrefixContainerSignal=HZ(`textPrefixContainer`);_iconSuffixContainerSignal=HZ(`iconSuffixContainer`);_textSuffixContainerSignal=HZ(`textSuffixContainer`);_prefixSuffixContainers=Ce$1(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=$Z(Wn);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=sae(e)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||$d}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let n=e||this._defaults?.appearance||Ea;this._appearanceSignal.set(n)}_appearanceSignal=B(Ea);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||ka}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||ka}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new q;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Js$1();constructor(){let e=this._defaults,n=m(cj);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Nt(()=>this._currentDirection=n.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Ce$1(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(e){let n=this._control,r=`mat-mdc-form-field-type-`;e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),n.controlType&&this._elementRef.nativeElement.classList.add(r+n.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=n.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=n.stateChanges.pipe(fa$1([void 0,void 0]),ne(()=>[n.errorState,n.userAriaDescribedBy]),jb(),ht(([[o,a],[d,s]])=>o!==d||a!==s)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),n.ngControl&&n.ngControl.valueChanges&&(this._valueChanges=n.ngControl.valueChanges.pipe(ur$1(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),xb(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,e),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,e)}_syncOutlineLabelOffset(){KZ({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Ce$1(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let n=this._control?this._control.ngControl:null;return n&&n[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&e.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let o=this._hintChildren?this._hintChildren.find(d=>d.align===`start`):null,a=this._hintChildren?this._hintChildren.find(d=>d.align===`end`):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let n=this._control.describedByIds,r;if(n){let o=this._describedByIds||e;r=e.concat(n.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,n=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,d=n?.getBoundingClientRect().width??0,s=r?.getBoundingClientRect().width??0,l=o?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${Vd} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${a+d}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,a+d+s+l]}_writeOutlinedLabelStyles(e){if(e!==null){let[n,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=n),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let n=e.getRootNode();return n&&n!==e}return document.documentElement.contains(e)}static ɵfac=function(n){return new(n||i)};static ɵcmp=vt({type:i,selectors:[[`mat-form-field`]],contentQueries:function(n,r,o){if(n&1&&(CT(o,r._labelChild,Wn,5),pd$1(o,Tt,5)(o,Aa,5)(o,Ia,5)(o,Ra,5)(o,Qn,5)),n&2){ck();let a;cc$1(a=uc$1())&&(r._formFieldControl=a.first),cc$1(a=uc$1())&&(r._prefixChildren=a),cc$1(a=uc$1())&&(r._suffixChildren=a),cc$1(a=uc$1())&&(r._errorChildren=a),cc$1(a=uc$1())&&(r._hintChildren=a)}},viewQuery:function(n,r){if(n&1&&(OT(r._iconPrefixContainerSignal,ya,5)(r._textPrefixContainerSignal,va,5)(r._iconSuffixContainerSignal,xa,5)(r._textSuffixContainerSignal,Sa,5),md$1(_d,5)(ya,5)(va,5)(xa,5)(Sa,5)(wa,5)(Ma,5)(Na,5)),n&2){ck(4);let o;cc$1(o=uc$1())&&(r._textField=o.first),cc$1(o=uc$1())&&(r._iconPrefixContainer=o.first),cc$1(o=uc$1())&&(r._textPrefixContainer=o.first),cc$1(o=uc$1())&&(r._iconSuffixContainer=o.first),cc$1(o=uc$1())&&(r._textSuffixContainer=o.first),cc$1(o=uc$1())&&(r._floatingLabel=o.first),cc$1(o=uc$1())&&(r._notchedOutline=o.first),cc$1(o=uc$1())&&(r._lineRipple=o.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(n,r){n&2&&jt(`mat-mdc-form-field-label-always-float`,r._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,r._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,r._hasIconSuffix)(`mat-form-field-invalid`,r._control.errorState)(`mat-form-field-disabled`,r._control.disabled)(`mat-form-field-autofilled`,r._control.autofilled)(`mat-form-field-appearance-fill`,r.appearance==`fill`)(`mat-form-field-appearance-outline`,r.appearance==`outline`)(`mat-form-field-hide-placeholder`,r._hasFloatingLabel()&&!r._shouldLabelFloat())(`mat-primary`,r.color!==`accent`&&r.color!==`warn`)(`mat-accent`,r.color===`accent`)(`mat-warn`,r.color===`warn`)(`ng-untouched`,r._shouldForward(`untouched`))(`ng-touched`,r._shouldForward(`touched`))(`ng-pristine`,r._shouldForward(`pristine`))(`ng-dirty`,r._shouldForward(`dirty`))(`ng-valid`,r._shouldForward(`valid`))(`ng-invalid`,r._shouldForward(`invalid`))(`ng-pending`,r._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[Pt$1([{provide:Ot,useExisting:i},{provide:Da,useExisting:i}])],ngContentSelectors:bd,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(n,r){if(n&1&&(ac$1(gd),fT(0,xd,1,1,`ng-template`,null,0,tx),ti(2,`div`,6,1),Ht(`click`,function(a){return r._control.onContainerClick(a)}),rc$1(4,Sd,1,0,`div`,7),ti(5,`div`,8),rc$1(6,Nd,2,2,`div`,9),rc$1(7,Md,3,0,`div`,10),rc$1(8,Ed,3,0,`div`,11),ti(9,`div`,12),rc$1(10,Rd,1,1,null,13),Ss(11),Es$1(),rc$1(12,Ad,3,0,`div`,14),rc$1(13,Id,3,0,`div`,15),Es$1(),rc$1(14,Dd,1,0,`div`,16),Es$1(),ti(15,`div`,17),rc$1(16,Td,2,0,`div`,18)(17,Fd,5,1,`div`,19),Es$1()),n&2){let o;ls$1(2),jt(`mdc-text-field--filled`,!r._hasOutline())(`mdc-text-field--outlined`,r._hasOutline())(`mdc-text-field--no-label`,!r._hasFloatingLabel())(`mdc-text-field--disabled`,r._control.disabled)(`mdc-text-field--invalid`,r._control.errorState),ls$1(2),oc$1(!r._hasOutline()&&!r._control.disabled?4:-1),ls$1(2),oc$1(r._hasOutline()?6:-1),ls$1(),oc$1(r._hasIconPrefix?7:-1),ls$1(),oc$1(r._hasTextPrefix?8:-1),ls$1(2),oc$1(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),ls$1(2),oc$1(r._hasTextSuffix?12:-1),ls$1(),oc$1(r._hasIconSuffix?13:-1),ls$1(),oc$1(r._hasOutline()?-1:14),ls$1(),jt(`mat-mdc-form-field-subscript-dynamic-size`,r.subscriptSizing===`dynamic`);let a=r._getSubscriptMessageType();ls$1(),oc$1((o=a)===`error`?16:o===`hint`?17:-1)}},dependencies:[wa,Ma,pF,Na,Qn],styles:[`.mdc-text-field {
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
`],encapsulation:2})}return i})();var Ft=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Ue({type:i});static ɵinj=Le({imports:[UN,Ta,na$1]})}return i})();var Hd=[`button`,`checkbox`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`];var jd=new v(`MAT_INPUT_CONFIG`);var bm=(()=>{class i{_elementRef=m(Me);_platform=m(At$1);ngControl=m(fo,{optional:!0,self:!0});_autofillMonitor=m(Vo);_ngZone=m(me);_formField=m(Ot,{optional:!0});_renderer=m(at$1);_uid=m(cu).getId(`mat-input-`);_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=m(jd,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new q;controlType=`mat-input`;autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=sae(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(_E.required)??!1}set required(e){this._required=sae(e)}_required;get type(){return this._type}set type(e){this._type=e||`text`,this._validateType(),!this._isTextarea&&lie().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type=`text`;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=sae(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=[`date`,`datetime`,`datetime-local`,`month`,`time`,`week`].filter(e=>lie().has(e));constructor(){let e=m(yV,{optional:!0}),n=m(TV,{optional:!0}),r=m(kae),o=m(ga,{optional:!0,self:!0}),a=m(ut,{optional:!0,self:!0}),d=this._elementRef.nativeElement,s=d.nodeName.toLowerCase();o?bt(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=d,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(d,`keyup`,this._iOSKeyupListener)}),this._errorStateTracker=new ab(r,a||this.ngControl,n,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s===`select`,this._isTextarea=s===`textarea`,this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=d.multiple?`mat-native-select-multiple`:`mat-native-select`),this._signalBasedValueAccessor&&Nt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let n=this._elementRef.nativeElement;n.type===`number`?(n.type=`text`,n.setSelectionRange(0,0),n.type=`number`):n.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let n=this._elementRef.nativeElement;this._previousPlaceholder=e,e?n.setAttribute(`placeholder`,e):n.removeAttribute(`placeholder`)}}_getPlaceholder(){return this.placeholder||null}_validateType(){Hd.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,n=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&n&&n.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute(`aria-describedby`,e.join(` `)):n.removeAttribute(`aria-describedby`)}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let n=e.target;!n.value&&n.selectionStart===0&&n.selectionEnd===0&&(n.setSelectionRange(1,1),n.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(n){return new(n||i)};static ɵdir=X({type:i,selectors:[[`input`,`matInput`,``],[`textarea`,`matInput`,``],[`select`,`matNativeControl`,``],[`input`,`matNativeControl`,``],[`textarea`,`matNativeControl`,``]],hostAttrs:[1,`mat-mdc-input-element`],hostVars:21,hostBindings:function(n,r){n&1&&Ht(`focus`,function(){return r._focusChanged(!0)})(`blur`,function(){return r._focusChanged(!1)})(`input`,function(){return r._onInput()}),n&2&&(hd$1(`id`,r.id)(`disabled`,r.disabled&&!r.disabledInteractive)(`required`,r.required),zn$1(`name`,r.name||null)(`readonly`,r._getReadonlyAttribute())(`aria-disabled`,r.disabled&&r.disabledInteractive?`true`:null)(`aria-invalid`,r.empty&&r.required?null:r.errorState)(`aria-required`,r.required)(`id`,r.id),jt(`mat-input-server`,r._isServer)(`mat-mdc-form-field-textarea-control`,r._isInFormField&&r._isTextarea)(`mat-mdc-form-field-input-control`,r._isInFormField)(`mat-mdc-input-disabled-interactive`,r.disabledInteractive)(`mdc-text-field__input`,r._isInFormField)(`mat-mdc-native-select-inline`,r._isInlineSelect()))},inputs:{disabled:`disabled`,id:`id`,placeholder:`placeholder`,name:`name`,required:`required`,type:`type`,errorStateMatcher:`errorStateMatcher`,userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],value:`value`,readonly:`readonly`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,In$1]},exportAs:[`matInput`],features:[Pt$1([{provide:Tt,useExisting:i}]),yt]})}return i})();var ym=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Ue({type:i});static ɵinj=Le({imports:[Ft,Ft,Ho,na$1]})}return i})();function Oa(i,t){let e=$(i,t?.in);return e.setSeconds(59,999),e}function Fa(i,t,e){return kO(i,-t,e)}function Yn(i,t,e){let n=$(i,e?.in);return n.setHours(t),n}function Xn(i,t,e){return mE(i,-t,e)}function Kd(i,t){if(i&1&&(ti(0,`main`,2),no(1,`icon`,5)(2,`p`,6),Es$1()),i&2){let e=sc$1();ls$1(),_s$1(`icon`,e.icon()),ls$1(),_s$1(`innerHTML`,e.content(),Vw)}}function Wd(i,t){if(i&1&&(ti(0,`main`,3)(1,`div`,7),no(2,`mat-spinner`,8),ti(3,`p`),Kg(4),Es$1()()()),i&2){let e=sc$1();ls$1(4),BT(e.loading())}}function Qd(i,t){if(i&1){let e=ek();ti(0,`footer`,4)(1,`button`,9),Kg(2),Zk(3,`translate`),Es$1(),ti(4,`button`,10),Ht(`click`,function(){uv(e);return lv(sc$1().onConfirm())}),Kg(5),Zk(6,`translate`),Es$1()()}if(i&2){let e=sc$1();ls$1(2),lc$1(` `,Xk(3,2,e.cancel_text()),` `),ls$1(3),lc$1(` `,Xk(6,4,e.confirm_text()),` `)}}var Yd={height:`auto`};async function zm(i,t){let e=t.open(Xd,m$1(l({},Yd),{data:i}));return m$1(l({},await Promise.race([e.componentInstance.event.pipe(zt$1(n=>n.reason===`done`)).toPromise(),e.afterClosed().toPromise()])),{loading:n=>e.componentInstance.loading?.set(n),close:()=>e.close()})}var Xd=(()=>{class i extends Ln$1{constructor(){super(),this._dialog_ref=m(ql$1),this._data=m(Vk),this.loading=B(``),this.event=new ye,this.title=B(this._data.title||`COMMON.CONFIRM`),this.content=B(this._data.content||`Are you sure?`),this.confirm_text=B(this._data.confirm_text||`COMMON.ACCEPT`),this.cancel_text=B(this._data.cancel_text||`COMMON.CANCEL`),this.icon=B(this._data.icon||{class:`material-symbols-rounded`,content:`done`}),this.disableClose=()=>this._dialog_ref.disableClose=!0,this.enableClose=()=>this._dialog_ref.disableClose=!1}ngOnInit(){this._data.close_delay&&this.timeout(`close`,()=>this._dialog_ref.close(),this._data.close_delay)}onConfirm(){this.event.emit({reason:`done`})}static{this.ɵfac=function(n){return new(n||i)}}static{this.ɵcmp=vt({type:i,selectors:[[`confirm-modal`]],features:[it],decls:6,vars:3,consts:[[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`h-14`,`w-[calc(100%-1rem)]`,`min-w-[20rem]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[1,`flex`,`w-md`,`max-w-[85vw]`,`flex-col`,`items-center`,`space-y-4`,`p-4`,`sm:h-auto`],[`loading`,``],[1,`bg-base-200`,`sticky`,`bottom-0`,`m-2`,`flex`,`items-center`,`justify-center`,`space-x-2`,`rounded-sm`,`border-none`,`p-2`],[1,`text-5xl`,3,`icon`],[`content`,``,1,`text-center`,3,`innerHTML`],[1,`flex`,`h-48`,`w-full`,`flex-col`,`items-center`,`justify-center`,`space-y-4`],[`diameter`,`32`],[`btn`,``,`matRipple`,``,`mat-dialog-close`,``,1,`inverse`,`bg-base-100`,`flex-1`],[`btn`,``,`matRipple`,``,`name`,`accept`,1,`flex-1`,3,`click`]],template:function(n,r){n&1&&(ti(0,`header`,0)(1,`h2`,1),Kg(2),Es$1()(),rc$1(3,Kd,3,2,`main`,2)(4,Wd,5,1,`main`,3),rc$1(5,Qd,7,6,`footer`,4)),n&2&&(ls$1(2),BT(r.title()),ls$1(),oc$1(r.loading()?4:3),ls$1(2),oc$1(r.loading()?-1:5))},dependencies:[$o,Bo,d6,BS,GS,pW,uW,f],encapsulation:2})}}return i})();function Km(i,t,e=kh(`app.parking.waitlist_week_start`)){let n=e?.day??5,r=e?.hour??18,o=e?.minute??0,a=kh(`app.bookings.use_building_timezone`)||kh(`app.parking.use_building_timezone`)?t:``,d=Date.now(),s=a?et(d,a):new Date(d),l=uo(wr(s,{weekStartsOn:n}),{hours:r,minutes:o,seconds:0,milliseconds:0});s<l&&(l=Fa(l,7));let u=kO(l,7),m=p=>a?kr(p,a).valueOf():p.valueOf();return i.valueOf()>=m(l)&&i.valueOf()<m(u)}var re=`/api/staff/v1/bookings`;var Zd=ns$1.raw||ns$1.version||ns$1.hash;function Pa(){return kh(`app.name`)||kh(`app.short_name`)||`PlaceOS`}function Lt(){return`${Pa()}_${ns$1.hash}_${on().email||``}`}function Zn(i){let t=l({},i instanceof bS?i.toJSON():i);return delete t.created_at,m$1(l({},t),{extension_data:m$1(l({},t.extension_data||{}),{app_name:Pa(),app_version:Zd})})}async function Ie(i){let t=PG(i);try{return(await Qc(`${re}${t?`?`+t:``}`)).map(n=>new bS(n))}catch{return[]}}async function Jd(i,t){try{let{data:e,next:n,total:r}=await go({query_params:m$1(l({},i),{limit:Math.max(200,t||0)}),endpoint:re,path:`booked`}),o=[...e],a=1;for(;n&&(!r||o.length<r)&&a<=La;){let d=await n();e=d.data,n=d.next,r=d.total,o=[...o,...e],a+=1}return Ioe(o)}catch{return[]}}async function Wm(i,t={}){let e=PG(m$1(l({},t),{limit:1e3}));try{let n=await TO(`${re}/clashing-assets${e?`?`+e:``}`,i.toJSON()).catch(()=>[]);return t.include_clash_time,n}catch{return[]}}var La=50;async function Qm(i){try{let{data:t,next:e}=await go({query_params:i,fn:o=>new bS(o),endpoint:re,path:``}),n=[...t],r=1;for(;e&&r<=La;){let o=await e();t=o.data,e=o.next,n=[...n,...t],r+=1}return Ioe(n,`id`)}catch{return[]}}async function Ym(i){return new bS(await Qc(`${re}/${encodeURIComponent(i)}`))}async function ji(i,t){let e=PG(m$1(l({},t),{utm_source:Lt()}));return new bS(await TO(`${re}${e?`?`+e:``}`,Zn(i)))}async function el(i,t,e=`patch`){return new bS(await(e===`patch`?TG:AO)(`${re}/${encodeURIComponent(i)}`,Zn(t)))}async function tl(i,t,e,n=`patch`){return new bS(await(n===`patch`?TG:AO)(`${re}/${encodeURIComponent(i)}/instance/${t}`,Zn(e)))}var Xm=async(i,t)=>{let e=i.id;delete i.id;let n=t?.instance;return t&&delete t.instance,e?n?tl(e,i.instance||i.booking_start,i):el(e,i):ji(qV(i,[``,null,void 0])||{},t)};function Pt(i,t={}){if(t.instance)return il(i,t.start_time);let e=PG({utm_source:Lt()});return AG(`${re}/${encodeURIComponent(i)}?${e}`,{response_type:`void`})}function il(i,t){let e=PG({utm_source:Lt()});return AG(`${re}/${encodeURIComponent(i)}/instance/${t}?${e}`,{response_type:`void`})}async function nl(i,t){let e=PG({state:t});try{return new bS(await TO(`${re}/${encodeURIComponent(i)}/check_in?${e}&utm_source=${Lt()}`,``))}catch(n){let r=await n.json();throw r.error||r.message||r}}async function rl(i,t,e){let n=PG({state:e});try{return new bS(await TO(`${re}/${encodeURIComponent(i)}/check_in/${t}?${n}&utm_source=${Lt()}`,``))}catch(r){let o=await r.json();throw o.error||o.message||o}}async function Zm(i,t){return!!i.instance||!!i.recurrence_type&&i.recurrence_type!==`none`?rl(i.id,i.instance||i.booking_start,t):nl(i.id,t)}async function Jm(i,t,e,n,r=`room`){let o=await Ie({type:r,period_start:oe(t),period_end:oe(Cr(t,e))});return i.map(a=>!o.find(d=>d.asset_id===a&&(!n||n!==d.id)))}async function ef(i,t,e){let n=(await Ie({type:t,period_start:oe(i.date),period_end:oe(Cr(i.date,i.duration))})).filter(a=>a.parent_id===i.id);await Promise.all(n.map(a=>Pt(a.id))),await Promise.all(i.linked_bookings.filter(a=>a.booking_type===t).map(a=>Pt(a.id)));let r=i.system?.zones||Ioe(Roe(i.resources.map(a=>a.zones)))||[],o=[];try{for(let a of e){let d=n.find(m=>m.extension_data?.details?.id===a.id||m.asset_ids.find(p=>a.items?.find(x=>x.item_ids.includes(p)))),s=t===`catering-order`&&a.system_id?i.resources.find(m=>m.id===a.system_id||m.email===a.system_id):void 0,l=s?.id||a.system_id||a.email||a.id,u=s?.display_name||s?.name||a.name;o.push(await ji(new bS({type:t,booking_type:t,date:i.date,duration:i.duration,description:i.title||a.name,user_email:i.host,asset_id:l,asset_name:u,title:i.title,attendees:a.email?[new Kr(a)]:[],approved:d?.approved&&!a._changed,rejected:d?.rejected&&!a._changed,extension_data:{parent_id:i.id,name:u,location_id:s?.id||i.location,details:a},zones:s?.zones||r}).toJSON(),{ical_uid:i.ical_uid,event_id:i.id}))}}catch(a){throw await Promise.all(o.filter(d=>!!d.id).map(d=>Pt(d.id).catch(()=>{}))),a}}var Ui=`/api/staff/v1/calendars`;async function Jn(){return(await Qc(Ui)).map(t=>new yS(t))}async function zt(i){let t=PG(i);return(await Qc(`${Ui}/availability${t?`?`+t:``}`)).map(n=>new yS(n))}var ol=(i,t)=>i.filter(e=>!!e.resource).map(e=>new Zi(m$1(l({},e.resource),{level:t?.levelWithID(e.resource.zones),availability:e.availability}))).filter(e=>e.bookable);async function af(i){let t=PG(i);return await Qc(`${Ui}/free_busy${t?`?`+t:``}`)}async function qt(i,t){let e=PG(i);return ol((await Qc(`${Ui}/free_busy${e?`?`+e:``}`)).map(r=>new yS(r)),t)}var Ce=`/api/staff/v1/events`;var al=ns$1.raw||ns$1.version||ns$1.hash;function sl(){return kh(`app.name`)||kh(`app.short_name`)||`PlaceOS`}function za(i){return m$1(l({},i),{extension_data:m$1(l({},i.extension_data||{}),{app_name:sl(),app_version:al})})}async function ff(i){let t=PG(i);try{return(await Qc(`${Ce}${t?`?`+t:``}`)).map(n=>new bh(n))}catch{return[]}}async function dl(i){return new bh(await TO(`${Ce}`,new bh(za(i)).toJSON()))}async function ll(i,t,e={},n=`patch`){let r=PG(e);return new bh(await(n===`patch`?TG:AO)(`${Ce}/${encodeURIComponent(i)}${r?`?`+r:``}`,new bh(za(t)).toJSON()))}var hf=async(i,t)=>{let e=i.update_master&&i.recurring_event_id||i.id;return delete i?.status,e?ll(e,m$1(l({},i),{id:e}),t):dl(i)};function pf(i,t={}){let e=PG(t);return AG(`${Ce}/${encodeURIComponent(i)}${e?`?`+e:``}`,{response_type:`void`})}async function _f(i,t,e,n={}){let r=PG(m$1(l({},n),{state:e}));return new ph(await TO(`${Ce}/${encodeURIComponent(i)}/guests/${t}/checkin${r?`?`+r:``}`,``))}async function gf(i,t,e={}){let n=PG(e);return new ph(await TO(`${Ce}/${encodeURIComponent(i)}/attendee${n?`?`+n:``}`,t))}async function bf(i,t,e={}){let n=PG(e);return new ph(await AG(`${Ce}/${encodeURIComponent(i)}/attendee/${encodeURIComponent(t.email)}${n?`?`+n:``}`))}async function yf(i,t,e={}){let n=PG(l({},e));return await Qc(`${Ce}/${encodeURIComponent(i)}/metadata/${encodeURIComponent(t)}${n?`?`+n:``}`)}async function vf(i,t,e,n,r,o=[0,0]){let a=Cr(t,e).valueOf(),[d,s]=await Promise.all([zt({system_ids:i.join(),period_start:oe(t),period_end:oe(a)}).catch(()=>[]),n&&i.includes(n)?qt({period_start:oe(t),period_end:oe(a),system_ids:n}):Promise.resolve([])]),l=i.map(u=>!!d.find(m=>m.id===u||m.resource?.id===u));for(let u of s){if(!i.includes(u.id))continue;let m=u.availability.filter(p=>!(p.date===o[0]&&p.duration===o[1]));l[i.indexOf(u.id)]=!m.find(p=>p.status!==`free`)}return l}async function xf(i,t={}){let e=PG(m$1(l({},t),{limit:1e4}));try{let n=await TO(`${Ce}/clashing-assets${e?`?`+e:``}`,i.toJSON());return t.include_clash_time,n}catch{return[]}}var qa=[];function Ba(i){for(let t of i)qa.find(({id:e})=>e===t.id)||qa.push(t)}var er={};function $a(i,t=!1){return i?((!er[i]||t)&&(er[i]=OO(i,`assets_config`).then(e=>e.details instanceof Array?e.details:[]).catch(()=>[])),er[i]):Promise.resolve([])}function Va(i,t,e){let n=Date.now(),r=new Date(e.date),o=d=>i.name===d.name||i.category?.name.includes(d.name)||e.resources?.some(s=>s.zones?.includes(d.name))||e.space?.zones?.includes(d.name)||d.name===`*`,a=d=>d.rules.reduce((s,l)=>{switch(l[0]){case`is_before`:return s+(ke$1(n,Xn(r,l[1]))?1:0);case`within_hours`:return s+(Si(n,Xn(r,l[1]))?1:0);case`after_hour`:return s+(Si(r,Yn(r,l[1]))?1:0);case`before_hour`:return s+(ke$1(r,Yn(r,l[1]))?1:0);case`min_length`:return s+(e.duration>=YS(l[1])?1:0);case`max_length`:return s+(e.duration<=YS(l[1])?1:0);case`visitor_type`:return s+(e.ext(`visitor_type`)===l[1]?1:0);default:return s+1}},0);for(let d of t)if(o(d)&&a(d)<d.rules.length)return!1;return!0}function Ki(i,t=``){let e=t.trim().toLowerCase();return i.filter(n=>(n.name||``).trim().toLowerCase()===e).sort((n,r)=>(n.created_at||0)-(r.created_at||0))[0]}function ul(i){return m$1(l({},i),{data:i.data.filter(t=>!t?.hidden)})}async function ml(){let i=await Hee({});return new Set(i.data.filter(t=>!t?.hidden).map(t=>t.id))}async function Ha(i={}){if(i.hidden===!0)return Hee(i);let n$1=i,{hidden:t}=n$1;return ul(await Hee(n(n$1,[`hidden`])))}async function fl(i={}){if(i.hidden===!0)return Vee(i);let o=i,{hidden:t}=o,e=n(o,[`hidden`]),[n$2,r]=await Promise.all([Vee(e),ml()]);return m$1(l({},n$2),{data:n$2.data.filter(a=>!a?.hidden&&r.has(a.category_id))})}async function ja(i={}){if(i.hidden===!0)return Uee(i);let a=i,{hidden:t}=a,e=n(a,[`hidden`]),[n$3,r]=await Promise.all([Uee(e),fl(m$1(l({},e.zone_id?{zone_id:e.zone_id}:{}),{limit:2e3}))]),o=new Set(r.data.map(d=>d.id));return m$1(l({},n$3),{data:n$3.data.filter(d=>!d?.hidden&&o.has(d.asset_type_id))})}function Ua(i){return i.id?jee(i.id,i):$ee(i)}var Gi=new Map;var hl=[`period_start`,`period_end`,`type`,`rejected`];async function pl(i={}){let t=await Uee(m$1(l({},i),{limit:i.limit||500})),e=t.total,n=[...t.data];for(;typeof t.next==`function`;){let r=t.next();if(!r)break;t=await r,e=t.total,n.push(...t.data)}return{total:e,next:()=>null,data:n}}async function _l(i={}){let t=JSON.stringify({zones:i.zones||i.zone_id||``,category_id:i.category_id||``,q:i.q||``,type_id:i.type_id||``});if(Gi.has(t))return Gi.get(t);let e=l({},i);for(let l of hl)l in e&&delete e[l];e.zones&&!e.zone_id&&(e.zone_id=e.zones),e.zones&&delete e.zones;let[n,r]=await Promise.all([Vee(e),pl(e)]),o=n.data.filter(l=>!l?.hidden);e.type_id&&(o=o.filter(l=>l.id===e.type_id));let a=new Set(o.map(l=>l.id)),d=new Map;for(let l of r.data){if(l?.hidden||!a.has(l.asset_type_id))continue;let u=d.get(l.asset_type_id)||[];u.push(l),d.set(l.asset_type_id,u)}let s=o.map(l$2=>m$1(l({},l$2),{assets:d.get(l$2.id)||[]}));return Gi.set(t,s),setTimeout(()=>Gi.delete(t),300*1e3),s}function Ga(i){return i.id?Gee(i.id,i):Bee(i)}async function tr(i,t=[]){let[e,n]=await Promise.all([_l(i),Ie(m$1(l({},i),{type:`asset-request`}))]),r=n.filter(o=>o.status!==`declined`&&o.status!==`cancelled`);return e.map(o=>m$1(l({},o),{assets:o.assets.filter(a=>t?.includes(a.id)||!r.find(d=>!t.includes(d.id)&&(d.asset_id===a.id||d.asset_ids?.includes(a.id))))}))}function gl(i,t){if((!i||i?.length<=0)&&t?.length)return[];if(!t)return[];let e=[];for(let n of i){let r=t.find(o=>o.id===n.id);(!r||r.ref_id!==n.ref_id)&&e.push(n.id)}return e}async function Hf({id:i,ical_uid:t,from_booking:e},{date:n,duration:r,all_day:o,host:a,location_name:d,location_id:s,zones:l$3,reset_state:u},m=[],p=!1){let x=await Ie({period_start:oe(n),period_end:oe(Cr(n,r)),type:`asset-request`,zones:l$3.join(`,`)}),I=i&&t?await Ie({period_start:oe(cn(n)),period_end:oe(gE(n)),type:`asset-request`,email:a,event_id:e?``:i,booking_id:e?i:``,ical_uid:t}):[],me=I.map(v=>[v.id,new $e(v.extension_data.request)]);m?.forEach(v=>v.conflict=!1);let ft=p?m.map(v=>v.id):gl(m,me.map(([v,R])=>R));if(u){let v=I.filter(R=>R.approved||R.rejected);ft=Ioe([...ft,...v.map(R=>R.extension_data.request_id)])}let mr=me.filter(([v,R])=>!ft.includes(R.id)),ys=me.filter(([v,{id:R}])=>ft.includes(R)),vs=m.filter(({id:v})=>ft.includes(v)),je=Roe(x.filter(v=>!v.rejected&&(!I.find(R=>R.id===v.id)||mr.find(([R])=>v.event_id===R))).map(v=>v.asset_ids));for(let[v,R]of mr)je=[...je,...Roe(R.items.map(Ht=>Ht.item_ids))];let Ss=await tr({period_start:oe(n),period_end:oe(Cr(n,r)),type:`asset-request`,zones:(l$3||[]).join(`,`)},I.map(v=>v.id)),ws=vs.map(v=>{let R=Roe(v.items.map(({id:be,item_ids:Zi,quantity:Ji})=>{let ht=Zi||[],hr=Ss.find(pr=>pr.id===be)?.assets;if(!hr)return ht;let en=[];return new Array(Ji).fill(0).map((pr,jt)=>{let tn=je.includes(ht[jt])||en.includes(ht[jt])||!ht[jt]?hr?.find(({id:_r})=>!je.includes(_r)&&!en.includes(_r))?.id:ht[jt];if(!tn)throw v.conflict=!0,`Unable to find available asset for request`;return en.push(tn),tn})}));if(!R.length||R.some(be=>!be))throw v.conflict=!0,`Unable to find available asset for request`;let Ht=I.find(be=>be.asset_ids.find(Zi=>v.items?.find(Ji=>Ji.item_ids?.includes(Zi))));je=[...je,...R];let fr={type:`asset-request`,booking_type:`asset-request`,date:n,duration:r,all_day:o,description:d,user_email:a,asset_id:R[0],asset_ids:R,asset_name:v.items.map(be=>be.name).join(`, `),title:v.items.map(be=>be.name).join(`, `),approved:!u&&Ht?.approved&&!v._changed,rejected:!u&&Ht?.rejected&&!v._changed,extension_data:{parent_id:i,request_id:v.id,location_id:s,request:new $e(m$1(l({},v),{event:null}))},zones:l$3||[]};return e&&(fr.parent_id=i),()=>ji(new bS(fr),{ical_uid:t,event_id:e?``:i})});return async()=>{await Promise.all(ys.map(([v])=>Pt(v))),await Promise.all(ws.map(v=>v()))}}function Ka(i,t){return Array.from(new Set([...Object.keys(i),...Object.keys(t)])).every(n=>Object.is(i[n],t[n]))}var th=(()=>{class i{constructor(){this._org=m(Dl$1),this._settings_service=m(Fn$1),this._injector=m(se),this._options=B({date:Date.now()}),this._search=B(``),this._category=B([]),this._loading=B(``),this._rules=B([]),this._asset_list=B(null),this._asset_bookings=B([]),this._available_groups=B([]),this._category_list=B([]),this._settings=B({}),this._network_requested=!1,this._network_consumed=B(!1),this._asset_list_request=null,this._category_list_request=null,this._booking_requests=new Map,this._available_group_requests=new Map,this._settings_requests=new Map,this._options_debounced=WZ(this._options,300,{injector:this._injector,equal:Ka}),this._requests_ready=Ce$1(()=>{let e=this._org.active_building(),n=this._settings_service.overrides();return this._network_consumed()&&this._assetsEnabled()&&this._org.initialised()&&!!e?.id&&n.length>=(this._org.settings?.length||0)+2}),this.search=this._search.asReadonly(),this.category=this._category.asReadonly(),this.options=this._options.asReadonly(),this.loading=this._loading.asReadonly(),this.rules=Ce$1(()=>(this._requestNetwork(),this._rules())),this.asset_list=Ce$1(()=>(this._requestNetwork(),this._asset_list())),this.asset_bookings=Ce$1(()=>(this._requestNetwork(),this._asset_bookings())),this.available_groups=Ce$1(()=>(this._requestNetwork(),this._available_groups())),this.category_list=Ce$1(()=>(this._requestNetwork(),this._category_list())),this.visible_category_ids=Ce$1(()=>this._category_list().map(e=>e.id)),this.filtered_assets=Ce$1(()=>{this._requestNetwork();let e=this._search().toLowerCase(),n=this._category(),r=this.visible_category_ids(),o=this._available_groups(),a=this._rules();return o.filter(d=>d.assets?.length&&r.includes(d.category_id)&&(!n.length||n.includes(d.category_id))&&(d.name.toLowerCase().includes(e)||d.description.toLowerCase().includes(e))&&Va(d,a,this._options()))}),this.settings=Ce$1(()=>(this._requestNetwork(),this._settings())),this.disabled_rooms=Ce$1(()=>(this._requestNetwork(),this._settings().disabled_rooms||[])),Nt(()=>{let e=this._options_debounced.value(),n=this._org.active_building();!this._requests_ready()||!n?.id||!e||w(()=>{this._loadRules(e,n.id),this._loadAssetList(),this._loadAssetBookings(e),this._loadAvailableGroups(e,n.id),this._loadSettings(n.id),this._loadCategories()})}),Nt(()=>{let e=this.visible_category_ids(),n=this._category(),r=n.filter(o=>e.includes(o));r.length!==n.length&&this._category.set(r)})}_requestNetwork(){this._network_requested||(this._network_requested=!0,queueMicrotask(()=>this._network_consumed.set(!0)))}_assetsEnabled(){return this._settings_service.get(`app.has_assets`)!==!1}setSearch(e){this._search.set(`${e}`)}toggleCategory(e){let n=w(this._category);n.includes(e)?this._category.set(n.filter(r=>r!==e)):this._category.set([...n,e])}getOptions(){return this._options()}setOptions(e){let n=w(this._options),r=l(l({},n),e);Ka(n,r)||this._options.set(r)}_appendLoading(e){this._loading.set(this._loading()+e)}_removeLoading(e){this._loading.set(this._loading().split(e).join(``))}async _loadRules(e,n){let r=e.zone||e.zone_id||n||``;this._appendLoading(`[Rules]`),this._rules.set(await $a(r)),this._removeLoading(`[Rules]`)}async _loadAssetList(){return this._asset_list_request?this._asset_list_request:(this._appendLoading(`[Assets]`),this._asset_list_request=ja().then(e=>(this._asset_list.set(e),e)).finally(()=>{this._asset_list_request=null,this._removeLoading(`[Assets]`)}),this._asset_list_request)}async _loadAssetBookings({zone:e,zone_id:n,date:r}){let o={zones:e||n||``,period_start:oe(cn(r)),period_end:oe(gE(r)),type:`asset-request`},a=JSON.stringify(o),d=this._booking_requests.get(a);this._appendLoading(`[Bookings]`);let s=d||Ie(o);d||this._booking_requests.set(a,s),this._asset_bookings.set(await s),s.finally(()=>this._booking_requests.delete(a)),this._removeLoading(`[Bookings]`)}async _loadAvailableGroups({zone:e,zone_id:n,date:r,duration:o,ignore:a},d){let s={zones:e||n||d||``,period_start:oe(gS(r)),period_end:oe(Oa(Cr(r,o||30))),type:`asset-request`,rejected:!1},l=JSON.stringify({query:s,ignore:a}),u=this._available_group_requests.get(l),m=u||tr(s,a).catch(I=>(console.error(I),[]));u||this._available_group_requests.set(l,m);let p=await m;m.finally(()=>this._available_group_requests.delete(l));let x=p.sort((I,me)=>I.name.localeCompare(me.name));Ba(x),this._available_groups.set(x)}async _loadCategories(){return this._category_list_request?this._category_list_request:(this._category_list_request=Ha().then(e=>(this._category_list.set(e.data.sort((n,r)=>n.name.localeCompare(r.name)).filter(n=>!n.hidden)),e)).finally(()=>this._category_list_request=null),this._category_list_request)}async _loadSettings(e){let n=this._settings_requests.get(e),r=n||OO(e,`assets-settings`).then(o=>o.details||{}).catch(()=>({}));n||this._settings_requests.set(e,r),this._settings.set(await r),r.finally(()=>this._settings_requests.delete(e))}static{this.ɵfac=function(n){return new(n||i)}}static{this.ɵprov=G({token:i,factory:i.ɵfac,providedIn:`root`})}}return i})();var bl=64;var yl=64;var vl=30*1e3;var xl=`PlaceOS.image-cache-v1`;var Sl=`PlaceOS.image-cache-keys-v1`;var ge=new Map;var ir=new Map;var He=new Map;var Wa=!1;function wl(){if(!Wa&&(Wa=!0,typeof caches<`u`&&caches.delete(xl).catch(()=>!1),typeof sessionStorage<`u`))try{sessionStorage.removeItem(Sl)}catch{}}function Cl(i){let t=ge.get(i);if(t)return ge.delete(i),ge.set(i,t),t}function Nl(i,t){let e=ge.get(i);for(e&&e!==t&&URL.revokeObjectURL(e),ge.delete(i),ge.set(i,t);ge.size>bl;){let n=ge.keys().next().value;if(!n)break;let r=ge.get(n);ge.delete(n),r&&URL.revokeObjectURL(r)}return t}function Ml(i){for(He.delete(i),He.set(i,Date.now()+vl);He.size>yl;){let t=He.keys().next().value;if(!t)break;He.delete(t)}}function nr(i){let t=ln();document.cookie=`${t===`x-api-key`?`api-key=`+encodeURIComponent(Zc()):`bearer_token=`+encodeURIComponent(t)};max-age=30;path=${i};samesite=strict;${location.protocol===`https:`?`secure;`:``}`}function El(){let i=ln();return i===`x-api-key`?{"X-API-Key":Zc()}:{Authorization:`Bearer ${i}`}}function oh(i,t){return Qa(i,()=>(nr(t),fetch(i)))}function ah(i){return Qa(i,()=>fetch(i,{headers:El()}))}async function Qa(i,t){wl();let e=Cl(i);if(e)return e;if((He.get(i)||0)>Date.now())throw new Error(`Image load is in retry cooldown`);He.delete(i);let r=ir.get(i);if(r)return r;let o=t().then(async a=>{if(!a?.ok)throw new Error(`Failed to fetch image: ${a?.status}`);return Nl(i,URL.createObjectURL(await a.blob()))}).catch(a=>{throw Ml(i),a}).finally(()=>ir.delete(i));return ir.set(i,o),o}var Bt=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new q;bulk={select:t=>this._select(t),deselect:t=>this._deselect(t),setSelection:t=>this._setSelection(t)};constructor(t=!1,e,n=!0,r){this._multiple=t,this._emitChanges=n,this.compareWith=r,e&&e.length&&(t?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...t){return this._select(t)}deselect(...t){return this._deselect(t)}setSelection(...t){return this._setSelection(t)}toggle(t){return this.isSelected(t)?this.deselect(t):this.select(t)}clear(t=!0){this._unmarkAll();let e=this._hasQueuedChanges();return t&&this._emitChangeEvent(),e}isSelected(t){return this._selection.has(this._getConcreteValue(t))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(t){this._multiple&&this.selected&&this._selected.sort(t)}isMultipleSelection(){return this._multiple}_select(t){this._verifyValueAssignment(t),t.forEach(n=>this._markSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(t){this._verifyValueAssignment(t),t.forEach(n=>this._unmarkSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(t){this._verifyValueAssignment(t);let e=this.selected,n=new Set(t.map(o=>this._getConcreteValue(o)));t.forEach(o=>this._markSelected(o)),e.filter(o=>!n.has(this._getConcreteValue(o,n))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(t){t=this._getConcreteValue(t),this.isSelected(t)||(this._multiple||this._unmarkAll(),this.isSelected(t)||this._selection.add(t),this._emitChanges&&this._selectedToEmit.push(t))}_unmarkSelected(t){t=this._getConcreteValue(t),this.isSelected(t)&&(this._selection.delete(t),this._emitChanges&&this._deselectedToEmit.push(t))}_unmarkAll(){this.isEmpty()||this._selection.forEach(t=>this._unmarkSelected(t))}_verifyValueAssignment(t){t.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(t,e){if(this.compareWith){e=e??this._selection;for(let n of e)if(this.compareWith(t,n))return n;return t}else return t}};var rr=(()=>{class i{_listeners=[];notify(e,n){for(let r of this._listeners)r(e,n)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(n=>e!==n)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(n){return new(n||i)};static ɵprov=L({token:i,factory:i.ɵfac})}return i})();var Dl=[`trigger`];var Tl=[`panel`];var Ol=[[[`mat-select-trigger`]],`*`];var Fl=[`mat-select-trigger`,`*`];function Pl(i,t){if(i&1&&(ti(0,`span`,4),Kg(1),Es$1()),i&2){let e=sc$1();ls$1(),BT(e.placeholder)}}function Ll(i,t){i&1&&Ss(0)}function zl(i,t){if(i&1&&(ti(0,`span`,11),Kg(1),Es$1()),i&2){let e=sc$1(2);ls$1(),BT(e.triggerValue)}}function ql(i,t){if(i&1&&(ti(0,`span`,5),rc$1(1,Ll,1,0)(2,zl,2,1,`span`,11),Es$1()),i&2){let e=sc$1();ls$1(),oc$1(e.customTrigger?1:2)}}function Bl(i,t){if(i&1){let e=ek();ti(0,`div`,12,1),Ht(`keydown`,function(r){uv(e);return lv(sc$1()._handleKeydown(r))}),Ss(2,1),Es$1()}if(i&2){let e=sc$1();Tk(e.panelClass),jt(`mat-select-panel-animations-enabled`,!e._animationsDisabled)(`mat-primary`,e._parentFormField?.color===`primary`)(`mat-accent`,e._parentFormField?.color===`accent`)(`mat-warn`,e._parentFormField?.color===`warn`)(`mat-undefined`,!e._parentFormField?.color),zn$1(`id`,e.id+`-panel`)(`aria-multiselectable`,e.multiple)(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e._getPanelAriaLabelledby())}}var $l=new v(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=m(se);return()=>Wd$1(i)}});var Vl=new v(`MAT_SELECT_CONFIG`);var es=new v(`MatSelectTrigger`);var or=class{source;value;constructor(t,e){this.source=t,this.value=e}};var Hh=(()=>{class i{_viewportRuler=m(to);_changeDetectorRef=m($t$1);_elementRef=m(Me);_dir=m(cj,{optional:!0});_idGenerator=m(cu);_renderer=m(at$1);_parentFormField=m(Ot,{optional:!0});ngControl=m(fo,{self:!0,optional:!0});_liveAnnouncer=m(ZH);_defaultOptions=m(Vl,{optional:!0});_animationsDisabled=Js$1();_popoverLocation;_initialized=new q;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let n=this.options.toArray()[e];if(n){let r=this.panel.nativeElement,o=Jae(e,this.options,this.optionGroups),a=n._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=ece(a.offsetTop,a.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new or(this,e)}_scrollStrategyFactory=m($l);_panelOpen=!1;_compareWith=(e,n)=>e===n;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new q;_errorStateTracker;stateChanges=new q;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=B(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(_E.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=ua$1(()=>{let e=this.options;return e?e.changes.pipe(fa$1(e),xt(()=>xb(...e.map(n=>n.onSelectionChange)))):this._initialized.pipe(xt(()=>this.optionSelectionChanges))});openedChange=new ye;_openedStream=this.openedChange.pipe(ht(e=>e),ne(()=>{}));_closedStream=this.openedChange.pipe(ht(e=>!e),ne(()=>{}));selectionChange=new ye;valueChange=new ye;constructor(){let e=m(kae),n=m(yV,{optional:!0}),r=m(TV,{optional:!0}),o=m(new vd$1(`tabindex`),{optional:!0}),a=m(qd$1,{optional:!0}),d=m(ut,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new ab(e,d||this.ngControl,r,n,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=a?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new Bt(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(ur$1(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(ur$1(this._destroy)).subscribe(e=>{e.added.forEach(n=>n.select()),e.removed.forEach(n=>n.deselect())}),this.options.changes.pipe(fa$1(null),ur$1(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),n=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute(`aria-labelledby`,e):r.removeAttribute(`aria-labelledby`)}n&&(this._previousControl!==n.control&&(this._previousControl!==void 0&&n.disabled!==null&&n.disabled!==this.disabled&&(this.disabled=n.disabled),this._previousControl=n.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(pt(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{n(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,n=this._renderer.listen(e,`animationend`,o=>{o.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(n=>n.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let n=e.keyCode,r=n===40||n===38||n===37||n===39,o=n===13||n===32,a=this._keyManager;if(!a.isTyping()&&o&&!Rh(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let d=this.selected;a.onKeydown(e);let s=this.selected;s&&d!==s&&this._liveAnnouncer.announce(s.viewValue,1e4)}}_handleOpenKeydown(e){let n=this._keyManager,r=e.keyCode,o=r===40||r===38,a=n.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!a&&(r===13||r===32)&&n.activeItem&&!Rh(e))e.preventDefault(),n.activeItem._selectViaInteraction();else if(!a&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let d=this.options.some(s=>!s.disabled&&!s.selected);this.options.forEach(s=>{s.disabled||(d?s.select():s.deselect())})}else{let d=n.activeItemIndex;n.onKeydown(e),this._multiple&&o&&e.shiftKey&&n.activeItem&&n.activeItemIndex!==d&&n.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Rh(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(n=>n.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(n=>this._selectOptionByValue(n)),this._sortValues();else{let n=this._selectOptionByValue(e);n?this._keyManager.updateActiveItem(n):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let n=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return n&&this._selectionModel.select(n),n}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof jd$1?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new kS(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=xb(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(ur$1(e)).subscribe(n=>{this._onSelect(n.source,n.isUserInput),n.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),xb(...this.options.map(n=>n._stateChanges)).pipe(ur$1(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,n){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),n&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),n&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((n,r)=>this.sortComparator?this.sortComparator(n,r,e):e.indexOf(n)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let n;this.multiple?n=this.selected.map(r=>r.value):n=this.selected?this.selected.value:e,this._value=n,this.valueChange.emit(n),this._onChange(n),this.selectionChange.emit(this._getChangeEvent(n)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let n=0;n<this.options.length;n++)if(!this.options.get(n).disabled){e=n;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,n=e?e+` `:``;return this.ariaLabelledby?n+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute(`aria-describedby`,e.join(` `)):n.removeAttribute(`aria-describedby`)}onContainerClick(e){let n=bn(e);n&&(n.tagName===`MAT-OPTION`||n.classList.contains(`cdk-overlay-backdrop`)||n.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(n){return new(n||i)};static ɵcmp=vt({type:i,selectors:[[`mat-select`]],contentQueries:function(n,r,o){if(n&1&&pd$1(o,es,5)(o,ob,5)(o,Ej,5),n&2){let a;cc$1(a=uc$1())&&(r.customTrigger=a.first),cc$1(a=uc$1())&&(r.options=a),cc$1(a=uc$1())&&(r.optionGroups=a)}},viewQuery:function(n,r){if(n&1&&md$1(Dl,5)(Tl,5)(v0,5),n&2){let o;cc$1(o=uc$1())&&(r.trigger=o.first),cc$1(o=uc$1())&&(r.panel=o.first),cc$1(o=uc$1())&&(r._overlayDir=o.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(n,r){n&1&&Ht(`keydown`,function(a){return r._handleKeydown(a)})(`focus`,function(){return r._onFocus()})(`blur`,function(){return r._onBlur()}),n&2&&(zn$1(`id`,r.id)(`tabindex`,r.disabled?-1:r.tabIndex)(`aria-controls`,r.panelOpen?r.id+`-panel`:null)(`aria-expanded`,r.panelOpen)(`aria-label`,r.ariaLabel||null)(`aria-required`,r.required.toString())(`aria-disabled`,r.disabled.toString())(`aria-invalid`,r.errorState)(`aria-activedescendant`,r._getAriaActiveDescendant()),jt(`mat-mdc-select-disabled`,r.disabled)(`mat-mdc-select-invalid`,r.errorState)(`mat-mdc-select-required`,r.required)(`mat-mdc-select-empty`,r.empty)(`mat-mdc-select-multiple`,r.multiple)(`mat-select-open`,r.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,In$1],disableRipple:[2,`disableRipple`,`disableRipple`,In$1],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:Ux(e)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,In$1],placeholder:`placeholder`,required:[2,`required`,`required`,In$1],multiple:[2,`multiple`,`multiple`,In$1],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,In$1],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,Ux],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,In$1]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[Pt$1([{provide:Tt,useExisting:i},{provide:_j,useExisting:i}]),yt],ngContentSelectors:Fl,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(n,r){if(n&1&&(ac$1(Ol),ti(0,`div`,2,0),Ht(`click`,function(){return r.open()}),ti(3,`div`,3),rc$1(4,Pl,2,1,`span`,4)(5,ql,3,1,`span`,5),Es$1(),ti(6,`div`,6)(7,`div`,7),vv(),ti(8,`svg`,8),no(9,`path`,9),Es$1()()()(),fT(10,Bl,3,16,`ng-template`,10),Ht(`detach`,function(){return r.close()})(`backdropClick`,function(){return r.close()})(`overlayKeydown`,function(a){return r._handleOverlayKeydown(a)})),n&2){let o=uk(1);ls$1(3),zn$1(`id`,r._valueId),ls$1(),oc$1(r.empty?4:5),ls$1(6),_s$1(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,r._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,r._scrollStrategy)(`cdkConnectedOverlayOrigin`,r._preferredOverlayOrigin||o)(`cdkConnectedOverlayPositions`,r._positions)(`cdkConnectedOverlayWidth`,r._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,r._popoverLocation)}},dependencies:[jd$1,v0],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})}return i})();var jh=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵdir=X({type:i,selectors:[[`mat-select-trigger`]],features:[Pt$1([{provide:es,useExisting:i}])]})}return i})();var Uh=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Ue({type:i});static ɵinj=Le({imports:[nr$1,uce,na$1,Bd$1,Ft,uce]})}return i})();var Hl=`_LOCKERS_`;var jl=`_LOCKER_BANKS_`;var Ul=`_LOCKERS_`;var ar=null;var sr=null;var dr=null;var lr=null;var $t=null;var Wi=new Map;async function ts(){return $t||($t=Hee({hidden:!0,limit:500}).then(i=>i.data).catch(()=>[])),$t}async function Gl(i){return Wi.has(i)||Wi.set(i,Vee({category_id:i,limit:500}).then(t=>t.data).catch(()=>[])),Wi.get(i)}async function Kl(i){let t=Ki(await ts(),i);if(t||($t=null,t=Ki(await ts(),i),t))return t;let e=await Ua({name:i,hidden:!0});return $t=null,e}async function Wl(i,t){let e=Ki(await Gl(i),t);if(e)return e;let n=await Ga({name:t,brand:`PlaceOS`,category_id:i});return Wi.delete(i),n}async function is(i){return(await Wl((await Kl(Hl)).id,i)).id}function Ql(){return ar?Promise.resolve(ar):(sr||(sr=is(jl).then(i=>(ar=i,i))),sr)}function Yl(){return dr?Promise.resolve(dr):(lr||(lr=is(Ul).then(i=>(dr=i,i))),lr)}async function ns(i){if(!i?.length)return[];let t=await Ql();return Roe(await Promise.all(i.map(n=>Uee({zone_id:n,type_id:t,limit:500}).then(r=>r.data))))}async function rs(i){if(!i?.length)return[];let t=await Yl();return Roe(await Promise.all(i.map(n=>Uee({zone_id:n,type_id:t,limit:500}).then(r=>r.data))))}var os=10;var as=1;var Xl=.05;var ss=16;var ds=4;var ls=2;var cs=8192;function us(){if(typeof window>`u`||!window.matchMedia)return!1;let i=window.matchMedia(`(pointer: coarse)`).matches,t=window.matchMedia(`(max-width: 1024px)`).matches;return i&&t}function Zl(i){return i.replace(/[!"#$%&'()*+,.\/;<=>?@[\\\]^`{|}~]/g,`\\$&`).split(` `).map(e=>e.replace(/^\\/,``)).join(` `)}function Jl(i){let t=0,e=0,n=0,r=0,o=i.getAttribute(`viewBox`);if(o){let a=o.split(/[\s,]+/).map(parseFloat);a.length>=4&&(t=a[0]||0,e=a[1]||0,n=a[2],r=a[3])}if(!n||!r){let a=i.getAttribute(`width`),d=i.getAttribute(`height`);n=a?parseFloat(a):0,r=d?parseFloat(d):0}if(!n||!r)try{let a=i.getBBox();t=a.x,e=a.y,n=a.width,r=a.height}catch{}return{x:t,y:e,width:n||1,height:r||1}}function ec(i,t){let e=i.getBBox(),n=t&&i.getScreenCTM?.();if(!n)return e;let r=t.multiply(n),o=[{x:e.x,y:e.y},{x:e.x+e.width,y:e.y},{x:e.x,y:e.y+e.height},{x:e.x+e.width,y:e.y+e.height}].map(s=>({x:r.a*s.x+r.c*s.y+r.e,y:r.b*s.x+r.d*s.y+r.f})),a=Math.min(...o.map(s=>s.x)),d=Math.min(...o.map(s=>s.y));return{x:a,y:d,width:Math.max(...o.map(s=>s.x))-a,height:Math.max(...o.map(s=>s.y))-d}}function tc(i){let t=new Map,e=document.createElement(`div`);e.style.position=`absolute`,e.style.visibility=`hidden`,e.style.pointerEvents=`none`,e.style.left=`-9999px`,e.style.top=`-9999px`,e.innerHTML=i,document.body.appendChild(e);let n=e.querySelector(`svg`);if(!n)return document.body.removeChild(e),{bounds:t,aspect_ratio:1};let{x:r,y:o,width:a,height:d}=Jl(n),s=a/d,l=n.getScreenCTM?.(),u=l?l.inverse():null;return n.querySelectorAll(`[id]`).forEach(p=>{let x=p.getAttribute(`id`);if(x&&typeof p.getBBox==`function`)try{let I=ec(p,u);t.set(x,{x:(I.x-r)/a,y:(I.y-o)/d,w:I.width/a,h:I.height/d})}catch{}}),document.body.removeChild(e),{bounds:t,aspect_ratio:s}}var cr=class{constructor(){this.store=new Map}get(t){if(!this.store.has(t)){let e=this._load(t);e.catch(()=>this.store.delete(t)),this.store.set(t,e)}return this.store.get(t)}async _load(t){for(;!$f();)await new Promise(l=>setTimeout(l,300));let e={},n=ln(),r=new URL(t,location.origin).origin===location.origin;n&&r&&(boe()?nr(`/`):e.headers=n===`x-api-key`?{"x-api-key":Zc()}:{Authorization:`Bearer ${n}`});let o=await fetch(t,e);if(!o.ok)throw new Error(`Failed to load map`);let a=await o.text(),{bounds:d,aspect_ratio:s}=tc(a);return{raw_data:a,element_bounds:d,aspect_ratio:s}}};var fs=new cr;function hs(i){return fs.get(i)}var ms=class{constructor(t){this.map_image=null,this.styles_string=``,this.center={x:.5,y:.5},this.zoom=1,this.fixed_resolution_megapixels=0,this.disable_zoom=!1,this.disable_pan=!1,this.onViewChange=null,this.debug=!1,this.debug_info={pointer:null,hover_id:``,highlight_id:``,last_draw_ms:0,draws_last_second:0},this._map_path=``,this._image_generation=0,this._texture_width=0,this._texture_height=0,this._image_frame_id=null,this._draw_frame_id=null,this._notify_frame_id=null,this._debug_draw_count=0,this._debug_count_start=0,this._events=new Map,this._resize_observer=null,this._pointers=new Map,this._is_panning=!1,this._pinch_distance=null,this._pan_start_time=null,this._pan_exceeded_threshold=!1,this._overlay_instances=[],this._actions=[],this._action_event_handlers=new Map,this._action_pointerdown_pos=null,this._action_last_triggered=new Map,this.container=t,this.id=`m_view-${Doe(8,`0123456789ABCDEF`)}`,this.container.innerHTML=``,this.container.style.overflow=`hidden`,this.container.style.touchAction=`none`,this.canvas=document.createElement(`canvas`),this.canvas.style.cssText=`position: absolute; inset: 0; pointer-events: none;`,this._ctx=this.canvas.getContext(`2d`),this.container.appendChild(this.canvas),this.overlays=document.createElement(`div`),this.overlays.id=`${this.id}-overlays`,this.overlays.style.cssText=`position: absolute; inset: 0; z-index: 0; pointer-events: none;`,this.container.appendChild(this.overlays),this._resize_observer=new ResizeObserver(()=>this._onResize()),this._resize_observer.observe(this.container),this._events.set(`wheel`,e=>this._onWheel(e)),this.container.addEventListener(`wheel`,this._events.get(`wheel`),{passive:!1}),this._events.set(`pointerdown`,e=>this._onPointerDown(e)),this._events.set(`pointermove`,e=>this._onPointerMove(e)),this._events.set(`pointerup`,e=>this._onPointerUp(e)),this.container.addEventListener(`pointerdown`,this._events.get(`pointerdown`)),window.addEventListener(`pointermove`,this._events.get(`pointermove`)),window.addEventListener(`pointerup`,this._events.get(`pointerup`)),window.addEventListener(`pointercancel`,this._events.get(`pointerup`))}async setMap(t){this._map_path=t;let e=await fs.get(t);this._map_path===t&&(this.map=e,this._renderMapImage())}setCenter(t){let e=this._clampCenter(t);e.x===this.center.x&&e.y===this.center.y||(this.center=e,this._renderMap())}setZoom(t){t=Math.max(as,Math.min(os,t)),t!==this.zoom&&(this.zoom=t,this._renderMap())}setFixedResolution(t){let e=t>0?t:0;this.fixed_resolution_megapixels!==e&&(this.fixed_resolution_megapixels=e,this.disable_zoom&&this._renderMapImage())}setOptions(t){let e=this.disable_zoom;this.disable_zoom=!!t?.disable_zoom,this.disable_pan=!!t?.disable_pan,e!==this.disable_zoom&&this._renderMapImage()}get overlay_count(){return this._overlay_instances.length}get texture_mode(){return this.disable_zoom?this.fixed_resolution_megapixels?`fixed ${this.fixed_resolution_megapixels}MP`:`fixed ${ls}\xD7 container`:us()?`mobile ${ds}MP`:`desktop ${ss}MP`}setDebug(t){if(this.debug!==t){if(this.debug=t,t){let e=o=>{this.debug_info.pointer=this._eventToMap(o),this.debug_info.hover_id=this._elementAt(this.debug_info.pointer),this._renderMap()},n=()=>{this.debug_info.pointer=null,this.debug_info.hover_id=``,this._renderMap()},r=o=>{let a=this._eventToMap(o);console.log(`[MAP][DEBUG] Click at { x: ${a.x.toFixed(4)}, y: ${a.y.toFixed(4)} } on "${this._elementAt(a)||`no element`}"`)};this._events.set(`debug_move`,e),this._events.set(`debug_leave`,n),this._events.set(`debug_click`,r),this.container.addEventListener(`pointermove`,e),this.container.addEventListener(`pointerleave`,n),this.container.addEventListener(`click`,r)}else{for(let e of[`debug_move`,`debug_leave`,`debug_click`]){let n=this._events.get(e);if(!n)continue;let r=e===`debug_move`?`pointermove`:e===`debug_leave`?`pointerleave`:`click`;this.container.removeEventListener(r,n),this._events.delete(e)}this.debug_info.pointer=null,this.debug_info.hover_id=``,this.debug_info.highlight_id=``}this._applyOverlayOutlines(),this._renderMap()}}setDebugHighlight(t){this.debug_info.highlight_id!==t&&(this.debug_info.highlight_id=t,this.debug&&this._renderMap())}focusOn(t){let e=this.map?.element_bounds.get(t);e&&(this.setCenter({x:e.x+e.w/2,y:e.y+e.h/2}),this._notifyViewChange())}setOverlays(t){for(let e of this._overlay_instances)e.element.remove();this._overlay_instances=[];for(let e of t){let n=document.createElement(`div`);n.style.cssText=`position: absolute; top: 0; left: 0; display: flex; align-items: center; justify-content: center; transform-origin: center center; pointer-events: none;`,e.z_index!=null&&(n.style.zIndex=`${e.z_index}`),e.hover&&n.classList.add(`map-overlay-hover`),typeof e.contents==`string`?n.innerHTML=e.contents:n.appendChild(e.contents),this.overlays.appendChild(n),this._overlay_instances.push({overlay:e,element:n})}this._applyOverlayOutlines(),this._updateOverlayPositions()}_applyOverlayOutlines(){for(let{element:t}of this._overlay_instances)t.style.outline=this.debug?`1px dashed #f0f`:``}_elementAt(t){let e=``,n=Number.POSITIVE_INFINITY;for(let[r,o]of this.map?.element_bounds||[]){if(t.x<o.x||t.x>o.x+o.w||t.y<o.y||t.y>o.y+o.h)continue;let a=o.w*o.h;a<n&&(e=r,n=a)}return e}setActions(t){for(let[n,r]of this._action_event_handlers)this.container.removeEventListener(n,r);this._action_event_handlers.clear(),this._action_last_triggered.clear(),this._actions=t;let e=new Set(t.flatMap(n=>n.events));for(let n of e){let r=o=>this._handleActionEvent(n,o);this._action_event_handlers.set(n,r),this.container.addEventListener(n,r)}if(!this._events.has(`action_pointerdown`)){let n=r=>{this._action_pointerdown_pos={x:r.clientX,y:r.clientY}};this._events.set(`action_pointerdown`,n),this.container.addEventListener(`pointerdown`,n)}}setStyles(t){let e=``;for(let[n,r]of Object.entries(t))r&&(e+=`svg ${Zl(n)} { ${r} }
`);e!==this.styles_string&&(this.styles_string=e,this._renderMapImage())}destroy(){this.setDebug(!1),this._resize_observer?.disconnect(),this._resize_observer=null,this.container.removeEventListener(`wheel`,this._events.get(`wheel`)),this.container.removeEventListener(`pointerdown`,this._events.get(`pointerdown`)),window.removeEventListener(`pointermove`,this._events.get(`pointermove`)),window.removeEventListener(`pointerup`,this._events.get(`pointerup`)),window.removeEventListener(`pointercancel`,this._events.get(`pointerup`));for(let[t,e]of this._action_event_handlers)this.container.removeEventListener(t,e);if(this._action_event_handlers.clear(),this._action_last_triggered.clear(),this._actions=[],this._events.has(`action_pointerdown`)){let t=this._events.get(`action_pointerdown`);this.container.removeEventListener(`pointerdown`,t),this._events.delete(`action_pointerdown`)}this._action_pointerdown_pos=null,this._image_generation++,this._map_path=``,this._image_frame_id!==null&&(cancelAnimationFrame(this._image_frame_id),this._image_frame_id=null),this._draw_frame_id!==null&&(cancelAnimationFrame(this._draw_frame_id),this._draw_frame_id=null),this._notify_frame_id!==null&&(cancelAnimationFrame(this._notify_frame_id),this._notify_frame_id=null);for(let t of this._overlay_instances)t.element.remove();this._overlay_instances=[],this.map_image=null,this.container.innerHTML=``}_viewScale(t=this.zoom){let e=this.map?.aspect_ratio||1,n=this.container.clientWidth||1,r=this.container.clientHeight||1,o=Math.min(r,n/e)*(1-Xl*2)*t;return{x:o*e,y:o}}_eventToMap(t,e=this.container.getBoundingClientRect()){let n=this._viewScale();return{x:(t.clientX-e.left-e.width/2)/n.x+this.center.x,y:(t.clientY-e.top-e.height/2)/n.y+this.center.y}}_clampCenter(t){return{x:Math.max(0,Math.min(1,t.x)),y:Math.max(0,Math.min(1,t.y))}}_zoomAboutPoint(t,e){let n=this.zoom;if(t=Math.max(as,Math.min(os,t)),t===n)return;let r=this.container.getBoundingClientRect(),o=this._eventToMap({clientX:e.x,clientY:e.y},r),a=this._viewScale(t),d={x:o.x-(e.x-r.left-r.width/2)/a.x,y:o.y-(e.y-r.top-r.height/2)/a.y};this.zoom=t,this.center=this._clampCenter(d),this._renderMap(),this._notifyViewChange()}_onWheel(t){if(t.preventDefault(),this.disable_zoom||!this.map_image)return;let e=t.deltaY>0?.97:1.03;this._zoomAboutPoint(this.zoom*e,{x:t.clientX,y:t.clientY})}_onPointerDown(t){if(this.map_image&&t.button===0){if(this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY}),this._pointers.size===2){this._is_panning=!1;let[e,n]=[...this._pointers.values()];this._pinch_distance=Math.hypot(n.x-e.x,n.y-e.y);return}this.disable_pan||(this._is_panning=!0,this._pan_start_time=Date.now(),this._pan_exceeded_threshold=!1,this.container.style.cursor=`grabbing`)}}_onPointerMove(t){let e=this._pointers.get(t.pointerId);if(!e)return;if(this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY}),this._pointers.size===2&&this._pinch_distance){if(this.disable_zoom)return;let[r,o]=[...this._pointers.values()],a=Math.hypot(o.x-r.x,o.y-r.y);a>0&&(this._zoomAboutPoint(this.zoom*(a/this._pinch_distance),{x:(r.x+o.x)/2,y:(r.y+o.y)/2}),this._pinch_distance=a);return}if(!this._is_panning)return;this._pan_start_time&&!this._pan_exceeded_threshold&&Date.now()-this._pan_start_time>200&&(this._pan_exceeded_threshold=!0);let n=this._viewScale();this.center=this._clampCenter({x:this.center.x-(t.clientX-e.x)/n.x,y:this.center.y-(t.clientY-e.y)/n.y}),this._renderMap(),this._notifyViewChange()}_onPointerUp(t){this._pointers.delete(t.pointerId),this._pointers.size<2&&(this._pinch_distance=null),this._is_panning&&this._pointers.size===0&&(this._is_panning=!1,this.container.style.cursor=``)}_onResize(){if(this._renderMap(),this.disable_zoom&&!this.fixed_resolution_megapixels){let{width:t,height:e}=this._textureDimensions();(t!==this._texture_width||e!==this._texture_height)&&this._renderMapImage()}}_targetTexturePixels(){return this.disable_zoom?this.fixed_resolution_megapixels>0?this.fixed_resolution_megapixels*1e6:(this.container.clientWidth||1)*(this.container.clientHeight||1)*ls:(us()?ds:ss)*1e6}_textureDimensions(){let t=this.map?.aspect_ratio||1,e=this._targetTexturePixels(),n=Math.sqrt(e/t),r=n*t;return{width:Math.max(1,Math.min(cs,Math.round(r))),height:Math.max(1,Math.min(cs,Math.round(n)))}}_renderMapImage(){this._image_frame_id!==null&&cancelAnimationFrame(this._image_frame_id),this._image_frame_id=requestAnimationFrame(()=>{this._image_frame_id=null,this._doRenderMapImage()})}_doRenderMapImage(){if(!this.map?.raw_data)return;let t=++this._image_generation,n=new DOMParser().parseFromString(this.map.raw_data,`image/svg+xml`),r=n.querySelector(`svg`);if(!r)return;let{width:o,height:a}=this._textureDimensions();if(this._texture_width=o,this._texture_height=a,!r.getAttribute(`viewBox`)){let p=parseFloat(r.getAttribute(`width`)||``),x=parseFloat(r.getAttribute(`height`)||``);p>0&&x>0&&r.setAttribute(`viewBox`,`0 0 ${p} ${x}`)}if(r.getAttribute(`viewBox`)&&(r.setAttribute(`width`,`${o}`),r.setAttribute(`height`,`${a}`)),this.styles_string){let p=n.createElementNS(`http://www.w3.org/2000/svg`,`style`);p.textContent=this.styles_string,r.appendChild(p)}let s=new XMLSerializer().serializeToString(r),l=new Blob([s],{type:`image/svg+xml`}),u=URL.createObjectURL(l),m=new Image;m.onload=()=>{if(URL.revokeObjectURL(u),t!==this._image_generation)return;let p=document.createElement(`canvas`);p.width=o,p.height=a;let x=p.getContext(`2d`);if(!x){console.error(`Failed to get canvas context`);return}x.drawImage(m,0,0,o,a),this.map_image=p,this._renderMap()},m.onerror=()=>{URL.revokeObjectURL(u),console.error(`Failed to load map image`)},m.src=u}_renderMap(){this._draw_frame_id===null&&(this._draw_frame_id=requestAnimationFrame(()=>{this._draw_frame_id=null,this._drawMap()}))}_drawMap(){if(!this.map_image)return;let t=this.debug?performance.now():0,e=this.container.clientWidth||1,n=this.container.clientHeight||1,r=window.devicePixelRatio||1;(this.canvas.width!==Math.round(e*r)||this.canvas.height!==Math.round(n*r))&&(this.canvas.width=Math.round(e*r),this.canvas.height=Math.round(n*r),this.canvas.style.width=`${e}px`,this.canvas.style.height=`${n}px`);let o=this._viewScale(),a=this.center.x-e/2/o.x,d=this.center.y-n/2/o.y,s=Math.max(0,a),l=Math.max(0,d),u=Math.min(1,a+e/o.x),m=Math.min(1,d+n/o.y);if(this._ctx.setTransform(r,0,0,r,0,0),this._ctx.clearRect(0,0,e,n),u>s&&m>l){this._ctx.imageSmoothingEnabled=!0,this._ctx.imageSmoothingQuality=`high`;let p=this.map_image.width,x=this.map_image.height;this._ctx.drawImage(this.map_image,s*p,l*x,(u-s)*p,(m-l)*x,(s-a)*o.x,(l-d)*o.y,(u-s)*o.x,(m-l)*o.y)}if(this.debug){this._drawDebugInfo(o,a,d);let p=performance.now();this.debug_info.last_draw_ms=p-t,this._debug_draw_count++,p-this._debug_count_start>=1e3&&(this.debug_info.draws_last_second=this._debug_draw_count,this._debug_draw_count=0,this._debug_count_start=p)}this._updateOverlayPositions()}_drawDebugInfo(t,e,n){if(!this.map)return;let r=this._ctx,o=this.container.clientWidth||1,a=this.container.clientHeight||1,d=m=>(m-e)*t.x,s=m=>(m-n)*t.y;r.strokeStyle=`#f0f`,r.lineWidth=2,r.strokeRect(d(0),s(0),t.x,t.y),r.strokeStyle=`rgba(0, 200, 255, 0.6)`,r.lineWidth=1;for(let[,m]of this.map.element_bounds){let p=d(m.x),x=s(m.y),I=m.w*t.x,me=m.h*t.y;p+I<0||x+me<0||p>o||x>a||r.strokeRect(p,x,I,me)}let l=this.debug_info.highlight_id||this.debug_info.hover_id,u=l?this.map.element_bounds.get(l):null;if(u){let m=d(u.x),p=s(u.y);r.fillStyle=`rgba(255, 0, 255, 0.25)`,r.fillRect(m,p,u.w*t.x,u.h*t.y);let x=`#${l}`;r.font=`12px monospace`,r.fillStyle=`rgba(0, 0, 0, 0.7)`,r.fillRect(m,p-16,r.measureText(x).width+8,16),r.fillStyle=`#fff`,r.fillText(x,m+4,p-4)}r.strokeStyle=`#f00`,r.lineWidth=1,r.beginPath(),r.moveTo(o/2-8,a/2),r.lineTo(o/2+8,a/2),r.moveTo(o/2,a/2-8),r.lineTo(o/2,a/2+8),r.stroke()}_updateOverlayPositions(){if(!this.map?.element_bounds)return;let t=this.container.clientWidth||1,e=this.container.clientHeight||1,n=this._viewScale(),r=s=>({x:(s.x-this.center.x)*n.x+t/2,y:(s.y-this.center.y)*n.y+e/2}),o=(s,l)=>{s.last_display!==l&&(s.last_display=l,s.element.style.display=l)},a=(s,l)=>{s.last_transform!==l&&(s.last_transform=l,s.element.style.transform=l)},d=(s,l,u)=>{let m=`${l} ${u}`;s.last_size!==m&&(s.last_size=m,s.element.style.width=l,s.element.style.height=u)};for(let s of this._overlay_instances){let{overlay:l$4}=s;if(l$4.min_zoom&&this.zoom<l$4.min_zoom){o(s,`none`);continue}let u;if(typeof l$4.ref==`string`){if(u=this.map.element_bounds.get(l$4.ref),!u){o(s,`none`);continue}}else u=l({w:0,h:0},l$4.ref);if(o(s,``),l$4.type===`box`&&u.w>0&&u.h>0){let m=r({x:u.x,y:u.y});a(s,`translate(${m.x}px, ${m.y}px)`),d(s,`${u.w*n.x}px`,`${u.h*n.y}px`)}else{let m=r({x:u.x+u.w/2,y:u.y+u.h/2});d(s,``,``),a(s,l$4.scale_with_zoom?`translate(${m.x}px, ${m.y}px) translate(-50%, -50%) scale(${this.zoom})`:`translate(${m.x}px, ${m.y}px) translate(-50%, -50%)`)}}}_handleActionEvent(t,e){if(!this.map_image||!this.map?.element_bounds||this._pan_exceeded_threshold)return;if(t===`click`&&this._action_pointerdown_pos){let l=e.clientX-this._action_pointerdown_pos.x,u=e.clientY-this._action_pointerdown_pos.y;if(Math.hypot(l,u)>5)return}let n=this._eventToMap(e);if(n.x<0||n.x>1||n.y<0||n.y>1)return;let r=null,o=Number.POSITIVE_INFINITY;for(let l of this._actions){if(!l.events.includes(t))continue;if(l.ref===`*`){r||(r=l);continue}let u=this.map.element_bounds.get(l.ref);if(!u||n.x<u.x||n.x>u.x+u.w||n.y<u.y||n.y>u.y+u.h)continue;let m=u.w*u.h;(!r||r.ref===`*`||(l.priority||0)>(r.priority||0)||(l.priority||0)===(r.priority||0)&&m<o)&&(r=l,o=m)}if(!r)return;let a=Date.now(),d=`${r.ref}:${t}`;a-(this._action_last_triggered.get(d)||0)<300||(this._action_last_triggered.set(d,a),r.callback(n))}_notifyViewChange(){!this.onViewChange||this._notify_frame_id!==null||(this._notify_frame_id=requestAnimationFrame(()=>{this._notify_frame_id=null,this.onViewChange?.({zoom:this.zoom,center:l({},this.center)})}))}};var ic=[`input`];var nc=[`formField`];var rc=[`*`];var Qi=class{source;value;constructor(t,e){this.source=t,this.value=e}};var oc={provide:Us$1,useExisting:gt(()=>sc),multi:!0};var ps=new v(`MatRadioGroup`);var ac=new v(`mat-radio-default-options`,{providedIn:`root`,factory:()=>({color:`accent`,disabledInteractive:!1})});var sc=(()=>{class i{_changeDetector=m($t$1);_value=null;_name=m(cu).getId(`mat-radio-group-`);_selected=null;_isInitialized=!1;_labelPosition=`after`;_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new ye;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e===`before`?`before`:`after`,this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(n=>{n.checked=this.value===n.value,n.checked&&(this._selected=n)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new Qi(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static ɵfac=function(n){return new(n||i)};static ɵdir=X({type:i,selectors:[[`mat-radio-group`]],contentQueries:function(n,r,o){if(n&1&&pd$1(o,_s,5),n&2){let a;cc$1(a=uc$1())&&(r._radios=a)}},hostAttrs:[`role`,`radiogroup`,1,`mat-mdc-radio-group`],inputs:{color:`color`,name:`name`,labelPosition:`labelPosition`,value:`value`,selected:`selected`,disabled:[2,`disabled`,`disabled`,In$1],required:[2,`required`,`required`,In$1],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,In$1]},outputs:{change:`change`},exportAs:[`matRadioGroup`],features:[Pt$1([oc,{provide:ps,useExisting:i}])]})}return i})();var _s=(()=>{class i{_elementRef=m(Me);_changeDetector=m($t$1);_focusMonitor=m(MH);_radioDispatcher=m(rr);_defaultOptions=m(ac,{optional:!0});_ngZone=m(me);_renderer=m(at$1);_uniqueId=m(cu).getId(`mat-radio-`);_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||`after`}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||`accent`}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new ye;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=Js$1();_injector=m(se);constructor(){m(xr).load(rb);let e=m(ps,{optional:!0}),n=m(new vd$1(`tabindex`),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,n&&(this.tabIndex=Ux(n,0))}focus(e,n){n?this._focusMonitor.focusVia(this._inputElement,n,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,n)=>{e!==this.id&&n===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,`click`,this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new Qi(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let n=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),n&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,n;if(!e||!e.selected||this.disabled?n=this.tabIndex:n=e.selected===this?this.tabIndex:-1,n!==this._previousTabIndex){let r=this._inputElement?.nativeElement;r&&(r.setAttribute(`tabindex`,n+``),this._previousTabIndex=n,eo(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===r&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===r&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static ɵfac=function(n){return new(n||i)};static ɵcmp=vt({type:i,selectors:[[`mat-radio-button`]],viewQuery:function(n,r){if(n&1&&md$1(ic,5)(nc,7,Me),n&2){let o;cc$1(o=uc$1())&&(r._inputElement=o.first),cc$1(o=uc$1())&&(r._rippleTrigger=o.first)}},hostAttrs:[1,`mat-mdc-radio-button`],hostVars:19,hostBindings:function(n,r){n&1&&Ht(`focus`,function(){return r._inputElement.nativeElement.focus()}),n&2&&(zn$1(`id`,r.id)(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null),jt(`mat-primary`,r.color===`primary`)(`mat-accent`,r.color===`accent`)(`mat-warn`,r.color===`warn`)(`mat-mdc-radio-checked`,r.checked)(`mat-mdc-radio-disabled`,r.disabled)(`mat-mdc-radio-disabled-interactive`,r.disabledInteractive)(`_mat-animation-noopable`,r._noopAnimations))},inputs:{id:`id`,name:`name`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],disableRipple:[2,`disableRipple`,`disableRipple`,In$1],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:Ux(e)],checked:[2,`checked`,`checked`,In$1],value:`value`,labelPosition:`labelPosition`,disabled:[2,`disabled`,`disabled`,In$1],required:[2,`required`,`required`,In$1],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,In$1]},outputs:{change:`change`},exportAs:[`matRadioButton`],ngContentSelectors:rc,decls:13,vars:17,consts:[[`formField`,``],[`input`,``],[`mat-internal-form-field`,``,3,`labelPosition`,`for`],[1,`mdc-radio`],[1,`mat-mdc-radio-touch-target`],[`type`,`radio`,`aria-invalid`,`false`,1,`mdc-radio__native-control`,3,`change`,`id`,`checked`,`disabled`,`required`],[`aria-hidden`,`true`,1,`mdc-radio__background`],[1,`mdc-radio__outer-circle`],[1,`mdc-radio__inner-circle`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-radio-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-ripple-element`,`mat-radio-persistent-ripple`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(n,r){n&1&&(ac$1(),ti(0,`label`,2,0)(2,`span`,3),no(3,`span`,4),ti(4,`input`,5,1),Ht(`change`,function(a){return r._onInputInteraction(a)}),Es$1(),ti(6,`span`,6),no(7,`span`,7)(8,`span`,8),Es$1(),ti(9,`span`,9),no(10,`span`,10),Es$1()(),ti(11,`span`,11),Ss(12),Es$1()()),n&2&&(_s$1(`labelPosition`,r.labelPosition)(`for`,r.inputId),ls$1(2),jt(`mdc-radio--disabled`,r.disabled),ls$1(2),_s$1(`id`,r.inputId)(`checked`,r.checked)(`disabled`,r.disabled&&!r.disabledInteractive)(`required`,r.required),zn$1(`name`,r.name)(`value`,r.value)(`aria-label`,r.ariaLabel)(`aria-labelledby`,r.ariaLabelledby)(`aria-describedby`,r.ariaDescribedby)(`aria-disabled`,r.disabled&&r.disabledInteractive?`true`:null),ls$1(5),_s$1(`matRippleTrigger`,r._rippleTrigger.nativeElement)(`matRippleDisabled`,r._isRippleDisabled())(`matRippleCentered`,!0))},dependencies:[GS,yce],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-pressed-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-radio-button .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-radio-button .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-radio-button .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {
  transform: scale(1);
  opacity: 0.12;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-checked-ripple-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--%NS%mat-radio-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-radio-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-radio-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-radio-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-radio-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-radio-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio--disabled + .mat-internal-form-field-label {
  color: var(--%NS%mat-radio-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-radio-button .mat-radio-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
}
.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {
  opacity: 0.14;
}
.mat-mdc-radio-button .mat-radio-ripple::before {
  border-radius: 50%;
}
.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-radio-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-radio-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-radio-touch-target-size, 48px);
  width: var(--%NS%mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})}return i})();var Cp=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Ue({type:i});static ɵinj=Le({imports:[BS,_s,na$1]})}return i})();function Vt(i,t){if(!i)return t;try{return JSON.parse(i)}catch{return t}}function Dp(i){let t=!!i?.extension_data?.requires_manual_approval;return i?.approved!==!1?`pending`:t?`approval_required`:i.process_state===`wait_list`?`waitlist`:`pending`}function dc(i){let t=i.other_data||{};return{id:i.id,map_id:i.map_id||t.map_id||``,level_id:i.zone_id,name:i.identifier||t.name||``,height:+(t.height||3),notes:i.notes||``,zones:i.zones||[i.zone_id].filter(e=>e),tags:i.tags||Vt(t.tags,[]),images:Vt(t.images,[])}}function lc(i,t){let e=i.other_data||{},n=i.parent_id||``,r=t.find(o=>o.id===n);return{id:i.id,bank_id:n,map_id:i.map_id||e.map_id,assigned_to:i.assigned_to||e.assigned_to,assigned_name:i.assigned_name||e.assigned_name,name:i.identifier||e.name||``,accessible:e.accessible===`true`,bookable:i.bookable!==!1,position:Vt(e.position,[0,0]),size:Vt(e.size,[1,1]),bank:r,zone:r?.zone,features:i.features||Vt(e.features,[])}}function cc(i,t){if(!t){i.update(e=>m$1(l({},e),{asset_id:``}));return}i.update(e=>m$1(l({},e),{asset_id:t.id,asset_name:t.name,name:t.display_name||t.name||t.id,map_id:t.map_id||t.id,description:t.name,zones:t.zone?[t.zone?.parent_id,t.zone?.id]:[],booking_asset:t}))}var uc=i=>`${(i.extension_data?.group_members||[]).find(n=>n?.email===i.asset_id)?.name||``}`.trim()||``;var mc=i=>`${((i.attendees||[]).find(n=>n?.email===i.asset_id)||i.attendees?.[0])?.name||``}`.trim()||``;var fc=i=>{if(!i.includes(`@`))return i;let[t]=i.split(`@`),e=t.replace(/[._-]+/g,` `).replace(/\s+/g,` `).trim();return e?e.replace(/\b\w/g,n=>n.toUpperCase()):i};var Tp=i=>{let t=`${i?.asset_id||``}`.trim(),e=uc(i);if(e)return e;let n=mc(i);if(n)return n;let r=`${i?.extension_data?.visitor_name||i?.asset_name||``}`.trim(),o=[`${i?.title||``}`.trim().toLowerCase(),`${i?.description||``}`.trim().toLowerCase()].filter(a=>!!a);return r&&r.toLowerCase()!==t.toLowerCase()&&!o.includes(r.toLowerCase())?r:fc(t||r||`Visitor`)};function Op(i,t){let e=``,n=``;if(i instanceof bS){e=i.booking_type===`visitor`?i.extension_data?.location||``:i.location||i.asset_name||``,e.startsWith(`unallocated`)&&(e=``);let r=t.levelWithID(i.zones);n=r?.display_name||r?.name||``}else e=i.location||i.space?.display_name||i.space?.name||i.system?.name||``,n=i.space?.level?.display_name||i.space?.level?.name||i.system?.zones?t.levelWithID(i.system?.zones||[])?.display_name||t.levelWithID(i.system?.zones||[])?.name:``;return e&&n?`${e} - ${n}`:e||n||``}function hc(i=new bS){i=i||new bS;let t=i.extension_data||{};return[...t.attachments||[],...t.p2_document_names||[]].filter(e=>!!e)}function pc(i=new bS){return i?.user_email?new Kr({id:i.user_id||``,email:i.user_email,name:i.user_name||i.user_email}):on()}function gs(i=new bS){let t=i.extension_data||{},e=i.booking_type===`visitor`?t.visitor_name||i.asset_name||``:i.asset_name||i.description;return{id:i.id||``,parent_id:i.parent_id||``,event_id:i.event_id||``,ical_uid:t.ical_uid||``,date:i.date??0,date_end:i.date_end??0,all_day:i.all_day??!1,name:t.name||i.asset_name||``,duration:i.duration??0,booking_type:i.booking_type||``,zones:i.zones||[],title:i.title||``,description:i.description||``,booking_asset:{},resources:[],company:t.company||``,asset_id:i.asset_id||``,asset_name:e||``,assets:t.assets||[],attendees:i.attendees||[],map_id:t.map_id||``,featured:t.featured||!1,user:pc(i),user_id:i.user_id||``,group:i.group??{},user_email:i.user_email||``,user_name:i.user_name||``,timezone:i.timezone||``,booked_by:on(),booked_by_id:i.booked_by_id||``,booked_by_email:i.booked_by_email||``,secondary_resource:t.other_asset_type||t.secondary_resource||{},location:t.location||``,attendance_type:t.attendance_type||`ANY`,phone:t.phone||``,permission:i.permission||`PRIVATE`,images:i.images||[],tags:i?.tags||[],plate_number:t.plate_number||``,vehicle_type:t.vehicle_type||`car`,request_type:t.request_type||`standard`,requires_manual_approval:t.requires_manual_approval??!1,space_restrictions:t.space_restrictions??!1,extra_space_restrictions:t.extra_space_restrictions??[],approver_group:t.approver_group||``,prefer_booked_location_first:t.prefer_booked_location_first??!1,pass_number:t.pass_number||``,international:t.international??!1,recurrence_custom:t.recurrence_custom??!1,recurrence_type:i.recurrence_type||`none`,recurrence_days:i.recurrence_days??0,recurrence_nth_of_month:i.recurrence_nth_of_month??0,recurrence_interval:i.recurrence_interval??0,recurrence_end:i.recurrence_end??0,recurrence_instances:t.recurrence_instances??0,notes:t.notes||``,attachments:hc(i),update_master:!1,self_registered:!1,is_assgined:!1}}function Fp(i=new bS,t){let e=i.state===`started`,n=B(gs(i));Foe(n,gs(new bS));let r=VS(`parking.require_plate_number`,!1),o=VS(`parking.require_space_restriction`,!1),a=Bn(n,s=>{$i(s.date),$i(s.asset_id),fa(s.asset_id,{when:({valueOf:l})=>l(s.booking_type)===`visitor`}),$i(s.plate_number,{when:({valueOf:l})=>l(s.booking_type)===`parking`&&r()}),mt(s.plate_number,({value:l,valueOf:u})=>u(s.booking_type)===`parking`&&r()&&!`${l()||``}`.trim()?{kind:`required`}:void 0),mt(s.space_restrictions,({value:l,valueOf:u})=>u(s.booking_type)===`parking`&&o()&&!l()?{kind:`required`}:void 0),mt(s.duration,({value:l,valueOf:u})=>{let m=u(s.date);return l()<=0?{kind:`duration`}:m&&Si(Date.now(),Cr(m,l()))?{kind:`duration`}:void 0}),ua(s.date,({value:l})=>e?!0:l()<Date.now()&&!!w(n).id)},{injector:t});Uoe(n,s=>s.user,s=>{s&&n.update(l$5=>m$1(l({},l$5),{user:s,user_id:s?.id??``,user_email:s?.email??``,user_name:s?.name??``}))},t),Uoe(n,s=>s.resources,s=>{w(n).booking_type!==`visitor`&&cc(n,(s||[])[0])},t),vh.subscribe(s=>{s&&n.update(l$6=>m$1(l({},l$6),{booked_by:s,booked_by_id:s?.id,booked_by_email:s?.email}))});let d=Goe(n,{},t);return a._time_sync=d,n._time_sync=d,{model:n,form:a,time_sync:d}}async function Pp(i,t,e=[]){let n=await hs(i),r=s=>{let l=n.element_bounds.get(s);return l?{x:l.x+l.w/2,y:l.y+l.h/2}:null},o=(typeof t==`string`?r(t):t)||{x:.5,y:.5},a=10,d=``;for(let s of e){let{x:l,y:u}=r(s)||{x:2,y:2},m=Math.sqrt((l-o.x)*(l-o.x)+(u-o.y)*(u-o.y));m<a&&(a=m,d=s)}return d}function Lp(i){let t=i.date||i.event_start*1e3,e=i.recurrence?.pattern?_V$1(fV(i.recurrence),t):{};return new bS(m$1(l({id:i.id,user_email:i.host,date:t,duration:i.duration,asset_id:i.system?.id||i.system_id,asset_name:i.system?.display_name||i.system?.name,booking_type:`room`,approved:i.status===`approved`},e),{extension_data:l({},i)}))}async function _c(i,t){if(!t)return[];let n=(await ns([t]).catch(()=>[])).map(dc);for(let r of n)r.zone=i.levelWithID(r.zones||[]);return n}async function gc(i,t,e){if(!t)return[];let r=(await rs([t]).catch(()=>[])).map(o=>lc(o,e));for(let o of e)o.lockers=r.filter(a=>a.bank_id===o.id).map(a=>l({},a));return r.filter(o=>o.bank)}async function zp(i,t){return gc(i,t,await _c(i,t))}var bc=(i,t)=>t.booking_start;function yc(i,t){if(i&1&&(ti(0,`tr`,10)(1,`td`,15),Kg(2),Zk(3,`date`),Es$1(),ti(4,`td`,15),Kg(5),Zk(6,`date`),Zk(7,`date`),Es$1()()),i&2){let e=t.$implicit;ls$1(2),lc$1(` `,Jk(3,3,e.booking_start*1e3,`EEE, MMM d, yyyy`),` `),ls$1(3),HT(` `,Jk(6,6,e.booking_start*1e3,`h:mm a`),` - `,Jk(7,9,e.booking_end*1e3,`h:mm a`),` `)}}async function Yp(i,t){let e=t.open(vc,{data:i});return Promise.race([e.componentInstance.event.pipe(zt$1(n=>n.reason===`done`)).toPromise(),e.afterClosed().toPromise()])}var vc=(()=>{class i{constructor(){this.event=new ye,this._data=m(Vk),this._dialog_ref=m(ql$1)}get clashes(){return this._data.clashes||[]}onConfirm(){this.event.emit({reason:`done`}),this._dialog_ref.close({reason:`done`})}static{this.ɵfac=function(n){return new(n||i)}}static{this.ɵcmp=vt({type:i,selectors:[[`placeos-recurring-clash-modal`]],outputs:{event:`event`},decls:35,vars:21,consts:[[1,`relative`],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`h-14`,`w-[calc(100%-1rem)]`,`min-w-[20rem]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[1,`flex`,`max-h-[60vh]`,`w-full`,`max-w-[calc(100vw-2rem)]`,`flex-col`,`items-center`,`space-y-4`,`overflow-auto`,`px-4`,`py-2`,`sm:max-w-md`],[1,`border-base-200`,`bg-warning`,`text-warning-content`,`flex`,`items-center`,`space-x-2`,`rounded-xl`,`border`,`p-2`,`shadow-sm`],[1,`text-5xl`],[1,`border-base-300`,`bg-base-100`,`max-h-48`,`w-full`,`overflow-auto`,`rounded-sm`,`border`],[1,`w-full`,`text-sm`],[1,`bg-base-200`,`sticky`,`top-0`],[1,`p-2`,`text-left`],[1,`border-base-300`,`border-t`],[1,`text-base-content/70`,`text-center`,`text-xs`],[1,`bg-base-200`,`sticky`,`bottom-0`,`m-2`,`flex`,`items-center`,`justify-center`,`space-x-2`,`rounded-sm`,`border-none`,`p-2`],[`btn`,``,`matRipple`,``,`mat-dialog-close`,``,1,`inverse`,`bg-base-100`,`flex-1`],[`btn`,``,`matRipple`,``,1,`flex-1`,3,`click`],[1,`p-2`]],template:function(n,r){n&1&&(ti(0,`div`,0)(1,`header`,1)(2,`h2`,2),Kg(3),Zk(4,`translate`),Es$1()(),ti(5,`main`,3)(6,`div`,4)(7,`icon`,5),Kg(8,`warning`),Es$1(),ti(9,`p`),Kg(10),Zk(11,`translate`),Es$1()(),ti(12,`div`,6)(13,`table`,7)(14,`thead`,8)(15,`tr`)(16,`th`,9),Kg(17),Zk(18,`translate`),Es$1(),ti(19,`th`,9),Kg(20),Zk(21,`translate`),Es$1()()(),ti(22,`tbody`),W0(23,yc,8,12,`tr`,10,bc),Es$1()()(),ti(25,`p`,11),Kg(26),Zk(27,`translate`),Es$1()(),ti(28,`footer`,12)(29,`button`,13),Kg(30),Zk(31,`translate`),Es$1(),ti(32,`button`,14),Ht(`click`,function(){return r.onConfirm()}),Kg(33),Zk(34,`translate`),Es$1()()()),n&2&&(ls$1(3),lc$1(` `,Xk(4,7,`BOOKINGS.RECURRING_CLASHES_TITLE`),` `),ls$1(7),lc$1(` `,Xk(11,9,`BOOKINGS.RECURRING_CLASHES_MSG`),` `),ls$1(7),lc$1(` `,Xk(18,11,`FORM.DATE`),` `),ls$1(3),lc$1(` `,Xk(21,13,`COMMON.TIME`),` `),ls$1(3),q0(r.clashes),ls$1(3),lc$1(` `,Xk(27,15,`BOOKINGS.RECURRING_CLASHES_CONFIRM`),` `),ls$1(4),lc$1(` `,Xk(31,17,`COMMON.CANCEL`),` `),ls$1(3),lc$1(` `,Xk(34,19,`BOOKINGS.CONTINUE_BOOKING`),` `))},dependencies:[d6,pW,uW,BS,GS,f,vF],encapsulation:2})}}return i})();var n_=(()=>{class i extends Ln$1{constructor(){super(),this._org=m(Dl$1),this._settings=m(Fn$1),this._calendars=B([]),this._calendars_request=null,this.calendar_list=this._calendars.asReadonly(),this.query=()=>Jn(),this.freeBusy=e=>qt(e,this._org),this.availability=e=>zt(e),this._waitForOrg()}async init(){this._settings.get(`app.events.use_bookings`)||this._initialised.next(!0)}get calendars(){return this._calendars()}getFreeBusyDate(e,n){return qt({period_start:oe(cn(e)),period_end:oe(gE(e)),calendars:n},this._org)}async checkSpacesAvailability(e,n,r,o){let a=await zt({period_start:n,period_end:r,system_ids:e.join(`,`)}),d=new Date(o?.date).valueOf(),s=Cr(d,o?.duration).valueOf();return!!a.every(u=>{let m=u.availability;if(o&&u.id===o.system?.email){let p=m.findIndex(x=>x.date>=d&&Cr(x.date,x.duration).valueOf()<=s);p!==-1&&m.splice(p,1)}return!m.length})}async loadCalendars(){this._calendars().length||(this._calendars_request=this._calendars_request||Jn().then(e=>this._calendars.set(e)).finally(()=>this._calendars_request=null),await this._calendars_request)}_waitForOrg(){let e=()=>{if(this._org.initialised())return this.init();this.timeout(`init`,e,100)};e()}static{this.ɵfac=function(n){return new(n||i)}}static{this.ɵprov=G({token:i,factory:i.ɵfac,providedIn:`root`})}}return i})();function Xi(i){let t=aoe(i,`UTC`);return`${qne(t,`yyyyMMdd`)}T${qne(t,`HHmmss`)}Z`}function ur(i){return`${qne(i,`yyyyMMdd`)}`}function Yi(i){return(i||``).replace(/\\|;|,|\n/g,t=>{switch(t){case`\\`:return`\\\\`;case`;`:return`\\;`;case`,`:return`\\,`;case`
`:return`\\n`;default:return t}})}function s_(i){if(!i)return`data:text/calendar;charset=utf8,`;let t=[],e=Yi(`${i.body||``}${i.id?`

[ID|`+i.id+`]`:``}`),n=Yi(`${i.location}`);t.push([`BEGIN`,`VCALENDAR`]),t.push([`VERSION`,`2.0`]),t.push([`BEGIN`,`VEVENT`]),t.push([`UID`,`${i.id||`uid-`+Date.now()}`]),t.push([`DTSTAMP`,Xi(new Date)]),i.meeting_url&&t.push([`URL`,`${i.meeting_url}`]),i.all_day?(t.push([`DTSTART;VALUE=DATE`,ur(i.date)]),t.push([`DTEND;VALUE=DATE`,ur(kO(i.date,1))])):(t.push([`DTSTART`,Xi(i.date)]),t.push([`DTEND`,Xi(Cr(i.date,i.duration||60))])),t.push([`SUMMARY`,Yi(i.title)]),t.push([`DESCRIPTION`,e]),t.push([`LOCATION`,n]);let r=i.host||i.user_email||`no-reply@place.tech`,o=i.organiser?.name||r.split(`@`)[0]||`Staff`;t.push([`ORGANIZER`,`CN=${Yi(o)}:mailto:${r}`]),t.push([`END`,`VEVENT`]),t.push([`END`,`VCALENDAR`]);let a=t.map(([s,l])=>`${s}:${l}`).join(`\r
`);return`data:text/calendar;charset=utf8,${encodeURIComponent(a)}`}function d_(i){let t=i.all_day?ur:Xi,e={action:`TEMPLATE`,text:i.title,details:`${i.body||``}${i.id?`

[ID|`+i.id+`]`:``}`,location:i.location,trp:!1,dates:`${t(i.date)}/${t(Cr(i.date,i.duration??60))}`},n=(i.attendees||[]).map(o=>o.email||o),r=((i.resources?.length?i.resources:null)||[i.system]).map(o=>o?.email||o);return(n.length||r.length)&&(e.add=Ioe([...n,...r]).join()),`https://calendar.google.com/calendar/render?${PG(e)}`}function bs(i){return`${qne(i,`yyyy-MM-dd`)}T${qne(i,`HH:mm:ss`)}`}function l_(i,t=`office`,e=`free`){i.date||(i.date=Date.now());let n={startdt:bs(i.date),enddt:bs(Cr(i.date,i.duration??60)),subject:i.title,body:`${i.body||``}${i.id?`


[ID|`+i.id+`]`:``}`,location:i.location,allday:i.all_day??!1};i.all_day&&delete n.enddt;let r=(i.attendees||[]).map(a=>a.email||a),o=((i.resources?.length?i.resources:null)||[i.system]).map(a=>a?.email||a);return(r.length||o.length)&&(n.to=Ioe([...r,...o]).filter(a=>!!a).join(`,`)),t===`office`?`https://outlook.office.com/calendar/deeplink/compose?${PG(n)}`:`https://outlook.live.com/calendar/deeplink/compose?${PG(n)}`}export{gf as $,Tt as A,_f as B,Ot as C,yf as Ct,Qm as D,zp as Dt,Pt as E,zm as Et,Ym as F,bm as G,af as H,Yn as I,ef as J,d_ as K,Yp as L,Uh as M,Wm as N,Ta as O,Xm as P,gc as Q,Zm as R,Op as S,xu as St,Pp as T,zd as Tt,ah as U,_s as V,bf as W,fa as X,el as Y,ff as Z,Jn as _,th as _t,Cl as a,lc as at,Ld as b,vf as bt,Fa as c,n_ as ct,Ga as d,oh as dt,gs as et,Hf as f,pc as ft,Jm as g,sc as gt,Jd as h,s_ as ht,Bo as i,l_ as it,Ua as j,Tp as k,Fp as l,nl as lt,Ie as m,rs as mt,$o as n,hf as nt,Cp as o,ms as ot,Hh as p,pf as pt,dc as q,Bn as r,jh as rt,Dp as s,mt as st,$i as t,hc as tt,Ft as u,ns as ut,Ki as v,ua as vt,Pd as w,ym as wt,Lp as x,xf as xt,Km as y,ut as yt,_c as z};