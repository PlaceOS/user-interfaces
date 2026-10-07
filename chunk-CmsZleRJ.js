import{$a as ne,$r as bt$1,Aa as lH,Ai as fc,Ar as Yue,At as KD,B as Ee,Bn as Sd$1,Bo as sA,Br as _a$1,Bs as xt$1,C as CM,Ca as kk,Ci as eO,Cn as Pue,Da as kv,Do as qD,Dr as Ys$1,Ds as wb,E as Ct$1,Eo as q,Er as Yie,Et as Jf,F as Ds$1,Fs as xE,Ft as Kv,Gi as gt$1,Go as se,Gs as ya,H as Et$1,Ha as m,Hi as go$1,I as Due,Ia as ln$1,In as Rs$1,Ja as me$1,Jn as Ts$1,Jt as Md$1,Ka as mc,Ki as hQ,Ko as sne,Kr as ane,La as lne,Ls as xb,Lt as Lb,N as Dn$1,No as r$,Nt as Kn,Oa as kx,Os as we$1,Pa as lc,Pr as Zie,Qi as hr,Qn as Ur,Qr as br,Qt as Mt$1,R as E_,Rn as SM,Rt as Le,Sa as kj,Ta as kse,Tn as Q$1,Ts as wG,Tt as Je$1,Ut as Lx,Va as ly,Vi as gj,W as FE,Wi as gs$1,Wn as Td$1,Wo as sa$1,Xa as mt,Xi as hc,Xo as tA,Yi as hb,Yn as Tt,Yo as sue,Ys as yo$1,Z as G,Za as n$,Zo as tG,_ as BV,_a as k,_i as dse,_r as Wv,_s as ve,_t as Io$1,a as $k,ac as l,ar as Ve,as as uQ,at as Hj,bt as J$1,ca as ix,ci as cn$1,cn as Od$1,cs as une,ct as I,da as je,di as cse,do as os$1,dr as We,ds as uy,ea as hu,ei as bte,er as Ux,es as tse,f as AM,fr as Wie,fs as v,gi as dne,gn as Ote,gs as vd$1,h as Aue,ha as jt,ho as pA,ia as io,io as oG,ji as fi$1,js as wn$1,kn as Qn,ko as qV,li as cne,ln as Oe,ls as use,lt as IF,m as As$1,ma as jk,mi as dQ,mo as oy,nc as zn,ni as cG,nn as Ne$1,nr as VD,nt as H,o as $s$1,oc as m$1,oi as c_,oo as oi$1,os as ua$1,pr as Wj,ps as vL,pt as Id$1,q as Ff$1,qa as md$1,qn as Tn$1,qr as ao,qt as Mce,ra as ine,rc as zt,ri as cH,ro as nu$1,rs as uH,s as $t,sa as it,sc as n,ss as uc,t as $,tr as V,ts as tu,ua as jV,us as ut,wn as Pv,ws as w,xa as kh$1,xi as eA,xn as Pt,xo as pc,xt as JN,y as Bt,yr as XF,yt as It,z as Ed$1,zi as gc}from"./chunk-DTwkiiu0.js";import{C as Gd$1,D as He,Et as ed$1,G as Rh,J as Ti,Kt as nE,Lt as jV$1,Nt as iY,P as KW,Pt as iu,S as GV,Sn as ze,Wt as lr,Xt as oo,Yt as on$1,Z as Uh,at as WS,b as Fh,et as VS,l as Bt$1,nn as qW,pt as Zd$1,tn as pr,u as C6,un as tu$1,vt as as$1,w as Gh,xt as cr,yn as y0,zt as kC}from"./chunk-C27fSli6.js";import{t as f}from"./chunk-DZFiiXfK.js";var Ua=[`determinateSpinner`];function Ga(i,t){if(i&1&&(Kv(),oi$1(0,`svg`,11),ao(1,`circle`,12),Ds$1()),i&2){let e=fc();Qn(`viewBox`,e._viewBox()),gs$1(),sA(`stroke-dasharray`,e._strokeCircumference(),`px`)(`stroke-dashoffset`,e._strokeCircumference()/2,`px`)(`stroke-width`,e._circleStrokeWidth(),`%`),Qn(`r`,e._circleRadius())}}var Ka=new I(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:co})});var co=100;var Wa=10;var mo=(()=>{class i{_elementRef=m(we$1);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let e=m(Ka),n=Hj(),r=this._elementRef.nativeElement;this._noopAnimations=n===`di-disabled`&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&n===`reduced-motion`&&r.classList.add(`mat-progress-spinner-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=co;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Wa)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(n){return new(n||i)};static ɵcmp=Tt({type:i,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(n,r){if(n&1&&Td$1(Ua,5),n&2){let o;pc(o=mc())&&(r._determinateCircle=o.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(n,r){n&2&&(Qn(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,r.mode===`determinate`?r.value:null)(`mode`,r.mode),ix(`mat-`+r.color),sA(`width`,r.diameter,`px`)(`height`,r.diameter,`px`)(`--%NS%mat-progress-spinner-size`,r.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,r.diameter+`px`),jt(`_mat-animation-noopable`,r._noopAnimations)(`mdc-circular-progress--indeterminate`,r.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,IF],diameter:[2,`diameter`,`diameter`,IF],strokeWidth:[2,`strokeWidth`,`strokeWidth`,IF]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(n,r){if(n&1&&(VD(0,Ga,2,8,`ng-template`,null,0,Ux),oi$1(2,`div`,2,1),Kv(),oi$1(4,`svg`,3),ao(5,`circle`,4),Ds$1()(),Wv(),oi$1(6,`div`,5)(7,`div`,6)(8,`div`,7),qD(9,8),Ds$1(),oi$1(10,`div`,9),qD(11,8),Ds$1(),oi$1(12,`div`,10),qD(13,8),Ds$1()()()),n&2){let o=$k(1);gs$1(4),Qn(`viewBox`,r._viewBox()),gs$1(),sA(`stroke-dasharray`,r._strokeCircumference(),`px`)(`stroke-dashoffset`,r._strokeDashOffset(),`px`)(`stroke-width`,r._circleStrokeWidth(),`%`),Qn(`r`,r._circleRadius()),gs$1(4),Ts$1(`ngTemplateOutlet`,o),gs$1(2),Ts$1(`ngTemplateOutlet`,o),gs$1(2),Ts$1(`ngTemplateOutlet`,o)}},dependencies:[XF],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2})}return i})();var uo=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Ve({type:i});static ɵinj=Le({imports:[ua$1]})}return i})();var Ya=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=Tt({type:i,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(n,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return i})();var Xa={passive:!0};var fo=(()=>{class i{_platform=m(Ct$1);_ngZone=m(me$1);_renderer=m(Tn$1).createRenderer(null,null);_styleLoader=m(Ur);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return We;this._styleLoader.load(Ya);let n=Io$1(e),r=this._monitoredElements.get(n);if(r)return r.subject;let o=new q,a=`cdk-text-field-autofilled`,d=l=>{l.animationName===`cdk-text-field-autofill-start`&&!n.classList.contains(a)?(n.classList.add(a),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!0}))):l.animationName===`cdk-text-field-autofill-end`&&n.classList.contains(a)&&(n.classList.remove(a),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!1})))},s=this._ngZone.runOutsideAngular(()=>(n.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(n,`animationstart`,d,Xa)));return this._monitoredElements.set(n,{subject:o,unlisten:s}),o}stopMonitoring(e){let n=Io$1(e),r=this._monitoredElements.get(n);r&&(r.unlisten(),r.subject.complete(),n.classList.remove(`cdk-text-field-autofill-monitored`),n.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((e,n)=>this.stopMonitoring(n))}static ɵfac=function(n){return new(n||i)};static ɵprov=k({token:i,factory:i.ɵfac})}return i})();var ho=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Ve({type:i});static ɵinj=Le({})}return i})();var yo=Symbol(`FIELD_TREE`);var Xi=0;function Za(){return Xi}function we(i,t){return(...e)=>{try{return Xi=t,i(...e)}finally{Xi=0}}}function Ja(i){return!i}function po(i){return i}function Ce(i){return Array.isArray(i)}function ai(i){return(typeof i==`object`||typeof i==`function`)&&i!=null}var Fe=Symbol();var hi=Symbol();var gt=class{predicates;fns=[];constructor(t){this.predicates=t}push(t){this.fns.push(_o(this.predicates,t))}mergeIn(t){let e=this.predicates?t.fns.map(n=>_o(this.predicates,n)):t.fns;this.fns.push(...e)}hasRules(){return this.fns.length>0}};var si=class extends gt{get defaultValue(){return!1}compute(t){return this.fns.some(e=>{let n=e(t);return n&&n!==hi})}};var Ye=class i extends gt{ignore;static ignoreNull(t){return new i(t,e=>e===null)}constructor(t,e){super(t),this.ignore=e}get defaultValue(){return[]}compute(t){return this.fns.reduce((e,n)=>{let r=n(t);return r===void 0||r===hi?e:Ce(r)?[...e,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?e:[...e,r]},[])}};var Zi=class extends Ye{constructor(t){super(t,void 0)}};var Ji=class extends gt{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(t,e){super(t),this.key=e}compute(t){if(this.fns.length===0)return this.key.reducer.getInitial();let e=this.key.reducer.getInitial();for(let n=0;n<this.fns.length;n++){let r=this.fns[n](t);r!==hi&&(e=this.key.reducer.reduce(e,r))}return e}};function _o(i,t){return i.length===0?t:e=>{for(let n of i){let r=e.stateOf(n.path),o=w(r.structure.pathKeys).length-n.depth;for(let a=0;a<o;a++)r=r.structure.parent;if(!n.fn(r.context))return hi}return t(e)}}var Xe=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(t){this.predicates=t,this.hidden=new si(t),this.disabledReasons=new Zi(t),this.readonly=new si(t),this.syncErrors=Ye.ignoreNull(t),this.syncTreeErrors=Ye.ignoreNull(t),this.asyncErrors=Ye.ignoreNull(t)}hasAnyLogic(){return this.hidden.hasRules()||this.disabledReasons.hasRules()||this.readonly.hasRules()||this.syncErrors.hasRules()||this.syncTreeErrors.hasRules()||this.asyncErrors.hasRules()||this.metadata.size>0}hasMetadata(t){return this.metadata.has(t)}hasMetadataKeys(){return this.metadata.size>0}getMetadataKeys(){return this.metadata.keys()}getMetadata(t){return this.metadata.has(t)||this.metadata.set(t,new Ji(this.predicates,t)),this.metadata.get(t)}mergeIn(t){this.hidden.mergeIn(t.hidden),this.disabledReasons.mergeIn(t.disabledReasons),this.readonly.mergeIn(t.readonly),this.syncErrors.mergeIn(t.syncErrors),this.syncTreeErrors.mergeIn(t.syncTreeErrors),this.asyncErrors.mergeIn(t.asyncErrors);for(let e of t.getMetadataKeys()){let n=t.metadata.get(e);this.getMetadata(e).mergeIn(n)}}};var di=class{depth;constructor(t){this.depth=t}build(){return new li(this,[],0)}};var Ze=class i extends di{constructor(t){super(t)}current;all=[];addHiddenRule(t){this.getCurrent().addHiddenRule(t)}addDisabledReasonRule(t){this.getCurrent().addDisabledReasonRule(t)}addReadonlyRule(t){this.getCurrent().addReadonlyRule(t)}addSyncErrorRule(t){this.getCurrent().addSyncErrorRule(t)}addSyncTreeErrorRule(t){this.getCurrent().addSyncTreeErrorRule(t)}addAsyncErrorRule(t){this.getCurrent().addAsyncErrorRule(t)}addMetadataRule(t,e){this.getCurrent().addMetadataRule(t,e)}getChild(t){if(t===Fe){let e=this.getCurrent().children;e.size>(e.has(Fe)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(t)}hasLogic(t){return this===t?!0:this.all.some(({builder:e})=>e.hasLogic(t))}hasRules(){return this.all.length>0}anyChildHasLogic(){return this.all.some(({builder:t})=>t.anyChildHasLogic())}mergeIn(t,e){e?this.all.push({builder:t,predicate:{fn:we(e.fn,this.depth),path:e.path}}):this.all.push({builder:t}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new bt(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new i(0)}};var bt=class extends di{logic=new Xe([]);children=new Map;constructor(t){super(t)}addHiddenRule(t){this.logic.hidden.push(we(t,this.depth))}addDisabledReasonRule(t){this.logic.disabledReasons.push(we(t,this.depth))}addReadonlyRule(t){this.logic.readonly.push(we(t,this.depth))}addSyncErrorRule(t){this.logic.syncErrors.push(we(t,this.depth))}addSyncTreeErrorRule(t){this.logic.syncTreeErrors.push(we(t,this.depth))}addAsyncErrorRule(t){this.logic.asyncErrors.push(we(t,this.depth))}addMetadataRule(t,e){this.logic.getMetadata(t).push(we(e,this.depth))}getChild(t){return this.children.has(t)||this.children.set(t,new Ze(this.depth+1)),this.children.get(t)}hasLogic(t){return this===t}hasRules(){return this.logic.hasAnyLogic()||this.children.size>0}anyChildHasLogic(){for(let t of this.children.values())if(t.hasRules())return!0;return!1}};var li=class i{builder;predicates;depth;logic;constructor(t,e,n){this.builder=t,this.predicates=e,this.depth=n,this.logic=t?es(t,e,n):new Xe([])}getChild(t){let e=this.builder?vo(this.builder,t):[];if(e.length===0)return new i(void 0,[],this.depth+1);if(e.length===1){let{builder:n,predicates:r}=e[0];return new i(n,[...this.predicates,...r.map(o=>tn(o,this.depth))],this.depth+1)}else return new en(e.map(({builder:r,predicates:o})=>new i(r,[...this.predicates,...o.map(a=>tn(a,this.depth))],this.depth+1)))}hasLogic(t){return this.builder?this.builder.hasLogic(t):!1}hasRules(){return this.builder?this.builder.hasRules():!1}anyChildHasLogic(){return this.builder?this.builder.anyChildHasLogic():!1}};var en=class i{all;logic;constructor(t){this.all=t,this.logic=new Xe([]);for(let e of t)this.logic.mergeIn(e.logic)}getChild(t){return new i(this.all.flatMap(e=>e.getChild(t)))}hasLogic(t){return this.all.some(e=>e.hasLogic(t))}hasRules(){return this.all.some(t=>t.hasRules())}anyChildHasLogic(){return this.all.some(t=>t.anyChildHasLogic())}};function vo(i,t){if(i instanceof Ze)return i.all.flatMap(({builder:e,predicate:n})=>{let r=vo(e,t);return n?r.map(({builder:o,predicates:a})=>({builder:o,predicates:[...a,n]})):r});if(i instanceof bt)return[...t!==Fe&&i.children.has(Fe)?[{builder:i.getChild(Fe),predicates:[]}]:[],...i.children.has(t)?[{builder:i.getChild(t),predicates:[]}]:[]];throw new v(1909,!1)}function es(i,t,e){let n=new Xe(t);if(i instanceof Ze){let r=i.all.map(({builder:o,predicate:a})=>new li(o,a?[...t,tn(a,e)]:t,e));for(let o of r)n.mergeIn(o.logic)}else if(i instanceof bt)n.mergeIn(i.logic);else throw new v(1909,!1);return n}function tn(i,t){return m$1(l({},i),{depth:t})}var xo=Symbol(`PATH`);var ce=class i{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,ts);logicBuilder;constructor(t,e,n,r){this.keys=t,this.parent=n,this.keyInParent=r,this.root=e??this,n||(this.logicBuilder=Ze.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(t){return this.children.has(t)||this.children.set(t,new i([...this.keys,t],this.root,this,t)),this.children.get(t)}mergeIn(t,e){let n=t.compile();this.builder.mergeIn(n.builder,e)}static unwrapFieldPath(t){return t[xo]}static newRoot(){return new i([],void 0,void 0,void 0)}};var ts={get(i,t){return t===xo?i:i.getChild(t).fieldPathProxy}};var oi;var _t=new Map;var ci=class i{schemaFn;constructor(t){this.schemaFn=t}compile(){if(_t.has(this))return _t.get(this);let t=ce.newRoot();_t.set(this,t);let e=oi;try{oi=t,this.schemaFn(t.fieldPathProxy)}finally{oi=e}return t}static create(t){return t instanceof i?t:new i(t)}static rootCompile(t){try{return _t.clear(),t===void 0?ce.newRoot():t instanceof i?t.compile():new i(t).compile()}finally{_t.clear()}}};function is(i){return i instanceof ci||typeof i==`function`}function pi(i){if(oi!==ce.unwrapFieldPath(i).root)throw new v(1908,!1)}function fn(i,t,e){return pi(i),ce.unwrapFieldPath(i).builder.addMetadataRule(t,e),t}var Je={list(){return{reduce:(i,t)=>t===void 0?i:[...i,t],getInitial:()=>[]}},min(){return{reduce:(i,t)=>i===void 0||t===void 0?i??t:t<i?t:i,getInitial:()=>{}}},max(){return{reduce:(i,t)=>i===void 0||t===void 0?i??t:t>i?t:i,getInitial:()=>{}}},or(){return{reduce:(i,t)=>i||t,getInitial:()=>!1}},and(){return{reduce:(i,t)=>i&&t,getInitial:()=>!0}},override:ns};function ns(i){return{reduce:(t,e)=>e,getInitial:()=>i?.()}}var hn=Symbol(`IS_ASYNC_VALIDATION_RESOURCE`);var mi=class{reducer;create;brand;[hn];constructor(t,e){this.reducer=t,this.create=e}};function Ne(i){return new mi(i??Je.override())}function pn(){return Ne()}var _n=Ne(Je.or());var So=pn();var wo=pn();var Co=Ne(Je.max());var No=Ne(Je.min());var Mo=Ne(Je.list());function Q(i,t){if(i===t)return!0;if(!i||!t||i.length!==t.length)return!1;for(let e=0;e<i.length;e++)if(!Object.is(i[e],t[e]))return!1;return!0}function rs(i){return i.errors().length>0?`invalid`:i.pending()?`unknown`:`valid`}var nn=class{node;constructor(t){this.node=t}rawSyncTreeErrors=Ne$1(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]],{equal:Q});syncErrors=Ne$1(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...os(this.node.submitState.submissionErrors())],{equal:Q});syncValid=Ne$1(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(t,e)=>e&&t.validationState.syncValid(),Ja));syncTreeErrors=Ne$1(()=>this.rawSyncTreeErrors().filter(t=>t.fieldTree===this.node.fieldTree),{equal:Q});rawAsyncErrors=Ne$1(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]],{equal:Q});asyncErrors=Ne$1(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(t=>t===`pending`||t.fieldTree===this.node.fieldTree),{equal:Q});parseErrors=Ne$1(()=>this.node.formFieldBindings().flatMap(t=>t.parseErrors()),{equal:Q});errors=Ne$1(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(t=>t!==`pending`)],{equal:Q});errorSummary=Ne$1(()=>{let t=this.node.structure.reduceChildren(this.errors(),(e,n)=>[...n,...e.errorSummary()]);return w(()=>t.sort(as)),t},{equal:Q});pending=Ne$1(()=>this.node.structure.reduceChildren(this.asyncErrors().includes(`pending`),(t,e)=>e||t.validationState.pending()));status=Ne$1(()=>{if(this.shouldSkipValidation())return`valid`;let t=rs(this);return this.node.structure.reduceChildren(t,(e,n)=>n===`invalid`||e.validationState.status()===`invalid`?`invalid`:n===`unknown`||e.validationState.status()===`unknown`?`unknown`:`valid`,e=>e===`invalid`)});valid=Ne$1(()=>this.status()===`valid`);invalid=Ne$1(()=>this.status()===`invalid`);shouldSkipValidation=Ne$1(()=>this.node.hidden()||this.node.disabled()||this.node.readonly()||this.node.structure.isOrphaned())};function os(i){return i===void 0?[]:Ce(i)?i:[i]}function Eo(i,t){if(Ce(i))for(let e of i)e.fieldTree??=t;else i&&(i.fieldTree??=t);return i}function go(i){return i.formField?i.formField.element:i.fieldTree().formFieldBindings().reduce((t,e)=>!t||!e.element?t??e.element:t.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e.element:t,void 0)}function as(i,t){let e=go(i),n=go(t);return e===n?0:e===void 0||n===void 0?e===void 0?1:-1:e.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var rn=Ne();var on=class{node;cache=new WeakMap;constructor(t){this.node=t,this.fieldTreeOf=this.fieldTreeOf.bind(this),this.stateOf=this.stateOf.bind(this)}resolve(t){if(!this.cache.has(t)){let e=Ne$1(()=>{let n=ce.unwrapFieldPath(t),r=this.node,o=Za();for(;o>0||!r.structure.logic.hasLogic(n.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new v(1900,!1);for(let a of n.keys)if(r=r.structure.getChild(a),r===void 0)throw new v(1901,!1);return r.fieldTree});this.cache.set(t,e)}return this.cache.get(t)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=Ne$1(()=>{let t=this.key();if(!Ce(w(this.node.structure.parent.value)))throw new v(1906,!1);return Number(t)});fieldTreeOf(t){return this.resolve(t)}stateOf(t){return this.resolve(t)()}valueOf=t=>{let e=this.resolve(t)().value();if(e instanceof Ff$1)throw new v(1907,!1);return e}};var an=class{node;metadata=new Map;constructor(t){this.node=t}runMetadataCreateLifecycle(){if(!this.node.logicNode.logic.hasMetadataKeys())return;let t=E_();t&&fi$1(!1);try{w(()=>Je$1(this.node.structure.injector,()=>{for(let e of this.node.logicNode.logic.getMetadataKeys())if(e.create){let n=this.node.logicNode.logic.getMetadata(e),r=e.create(this.node,Ne$1(()=>n.compute(this.node.context)));this.metadata.set(e,r)}}))}finally{t&&fi$1(!0)}}get(t){if(this.has(t)&&!this.metadata.has(t)){if(t.create)throw new v(1912,!1);let e=this.node.logicNode.logic.getMetadata(t);this.metadata.set(t,Ne$1(()=>e.compute(this.node.context)))}return this.metadata.get(t)}has(t){return this.node.logicNode.logic.hasMetadata(t)}};var ss={get(i,t,e){if(t===yo)return!0;let n=i(),r=n.structure.getChild(t);if(r!==void 0)return r.fieldTree;let o=w(n.value);if(Ce(o)){if(t===`length`)return n.value().length;if(t===Symbol.iterator)return()=>(n.value(),Array.prototype[Symbol.iterator].apply(n.fieldTree))}if(ai(o)&&t===Symbol.iterator)return function*(){for(let a in e)yield[a,e[a]]}},getOwnPropertyDescriptor(i,t){let e=w(i().value),n=Reflect.getOwnPropertyDescriptor(e,t);return n&&!n.configurable&&(n.configurable=!0),n},ownKeys(i){let t=w(i().value);return typeof t==`object`&&t!==null?Reflect.ownKeys(t):[]}};function ds(i,t){let e=Ne$1(()=>i()[t()]);return e[Oe]=i[Oe],e.set=n=>{Object.is(w(e),n)||i.update(r=>ls(r,n,t()))},e.update=n=>{e.set(n(w(e)))},e.asReadonly=()=>e,e}function ls(i,t,e){if(Ce(i)){let n=[...i];return n[e]=t,n}else return m$1(l({},i),{[e]:t})}var Qe=Symbol(``);var ko=Ne$1(()=>!1);var ui=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;_anyChildHasLogic;get injector(){return this._injector??=se.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(t,e,n){this.logic=t,this.node=e,this.createChildNode=n}children(){this.ensureChildrenMap();let t=this.childrenMap();return t===void 0?[]:Array.from(t.byPropertyKey.values()).map(e=>w(e.reader))}materializedChildren(){let t=this.childrenMap();return t===void 0?[]:Array.from(t.byPropertyKey.values()).map(e=>e.node)}_areChildrenMaterialized(){return w(this.childrenMap)!==void 0}ensureChildrenMap(){this._areChildrenMaterialized()||w(()=>{this.childrenMap.update(t=>this.computeChildrenMap(this.value(),t,!0))})}getChild(t){this.ensureChildrenMap();let e=t.toString(),n=w(this.childrenMap)?.byPropertyKey.get(e)?.reader;return n||(n=this.createReader(e)),n()}reduceChildren(t,e,n){let r=this.childrenMap();if(!r)return t;let o=t;for(let a of r.byPropertyKey.values()){if(n?.(o))break;o=e(w(a.reader),o)}return o}destroy(){this.injector.destroy()}createKeyOrOrphanSignals(t,e,n){if(t===`root`)return{keyInParent:Ro,isOrphaned:ko};let r=this.parent,o=n,a=Ne$1(()=>{if(r.structure.isOrphaned())return Qe;let l=r.structure.childrenMap();if(!l)return Qe;let m=l.byPropertyKey.get(o);if(m&&m.node===this.node)return o;if(e===void 0)return Qe;for(let[u,p]of l.byPropertyKey)if(p.node===this.node)return o=u;return Qe}),d=Ne$1(()=>a()===Qe);return{keyInParent:Ne$1(()=>{let l=a();if(l===Qe)throw e===void 0?new v(-1902,!1):new v(1904,!1);return l}),isOrphaned:d}}createChildrenMap(){return Rs$1({source:this.value,computation:(t,e)=>this.computeChildrenMap(t,e?.value,!1)})}computeChildrenMap(t,e,n){if(!ai(t)||!n&&e===void 0&&!(this._anyChildHasLogic??=this.logic.anyChildHasLogic()))return;e??={byPropertyKey:new Map};let r,o=Ce(t);e!==void 0&&(o?r=ms(e,t,this.identitySymbol):r=us(e,t));for(let a of Object.keys(t)){let d,s=t[a];if(s===void 0){e.byPropertyKey.has(a)&&(r??=l({},e),r.byPropertyKey.delete(a));continue}o&&ai(s)&&!Ce(s)&&(d=s[this.identitySymbol]??=Symbol(``));let l$1;d&&(e.byTrackingKey?.has(d)||(r??=l({},e),r.byTrackingKey??=new Map,r.byTrackingKey.set(d,this.createChildNode(a,d,o))),l$1=(r??e).byTrackingKey.get(d));let m=e.byPropertyKey.get(a);m===void 0?(r??=l({},e),r.byPropertyKey.set(a,{reader:this.createReader(a),node:l$1??this.createChildNode(a,d,o)})):l$1&&l$1!==m.node&&(r??=l({},e),m.node=l$1)}return r??e}createReader(t){return Ne$1(()=>this.childrenMap()?.byPropertyKey.get(t)?.node)}};var sn=class extends ui{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return cs}get keyInParent(){return Ro}isOrphaned=ko;childrenMap;constructor(t,e,n,r,o){super(e,t,o),this.fieldManager=n,this.value=r,this.childrenMap=this.createChildrenMap()}};var dn=class extends ui{logic;parent;root;pathKeys;keyInParent;value;childrenMap;isOrphaned;get fieldManager(){return this.root.structure.fieldManager}constructor(t,e,n,r,o,a){super(e,t,a),this.logic=e,this.parent=n,this.root=this.parent.structure.root;let d=this.createKeyOrOrphanSignals(`child`,r,o);this.isOrphaned=d.isOrphaned,this.keyInParent=d.keyInParent,this.pathKeys=Ne$1(()=>[...n.structure.pathKeys(),this.keyInParent()]),this.value=ds(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var cs=Ne$1(()=>[]);var Ro=Ne$1(()=>{throw new v(1905,!1)});function ms(i,t,e){let n,r=new Set(i.byPropertyKey.keys()),o=i.byTrackingKey&&new Set(i.byTrackingKey.keys());for(let a=0;a<t.length;a++){let d=t[a];r.delete(a.toString()),o&&ai(d)&&Object.hasOwn(d,e)&&o.delete(d[e])}if(r.size>0){n??=l({},i);for(let a of r)n.byPropertyKey.delete(a)}if(o&&o.size>0){n??=l({},i);for(let a of o)n.byTrackingKey.delete(a)}return n}function us(i,t){let e;for(let n of i.byPropertyKey.keys())Object.hasOwn(t,n)||(e??=l({},i),e.byPropertyKey.delete(n));return e}var ln=class{node;selfSubmitting=H(!1);submissionErrors;constructor(t){this.node=t,this.submissionErrors=Rs$1({source:this.node.structure.value,computation:()=>[]})}submitting=Ne$1(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))};var yt=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new on(this)}fieldProxy=new Proxy(()=>this,ss);pathNode;constructor(t){this.pathNode=t.pathNode,this.fieldAdapter=t.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,t),this.validationState=this.fieldAdapter.createValidationState(this,t),this.nodeState=this.fieldAdapter.createNodeState(this,t),this.metadataState=new an(this),this.submitState=new ln(this),this.controlValue=this.controlValueSignal(),this.metadataState.runMetadataCreateLifecycle()}focusBoundControl(t){this.getBindingForFocus()?.focus(t)}getBindingForFocus(){return this.formFieldBindings().filter(e=>e.focus!==void 0).reduce(bo,void 0)||this.structure.children().map(e=>e.getBindingForFocus()).reduce(bo,void 0)}pendingSync=Rs$1({source:()=>this.value(),computation:(t,e)=>{e?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){let t=this.metadata(wo)?.();return t?this.metadata(t):void 0}get maxLength(){return this.metadata(No)}get min(){let t=this.metadata(So)?.();return t?this.metadata(t):void 0}get minLength(){return this.metadata(Co)}get pattern(){return this.metadata(Mo)??fs}get required(){return this.metadata(_n)??hs}metadata(t){return this.metadataState.get(t)}getError(t){return this.errors().find(e=>e.kind===t)}hasMetadata(t){return this.metadataState.has(t)}markAsTouched(t){this.structure.isOrphaned()||w(()=>{this.markAsTouchedInternal(t),this.flushSync()})}markAsTouchedInternal(t){if(!this.structure.isOrphaned()&&!this.validationState.shouldSkipValidation()&&(this.nodeState.markAsTouched(),!t?.skipDescendants))for(let e of this.structure.children())e.markAsTouchedInternal()}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(t){w(()=>this._reset(t))}_reset(t){this.pendingSync()?.abort(),t!==void 0&&this.value.set(t),this.controlValue.rawSet(this.value()),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let e of this.formFieldBindings())e.reset();for(let e of this.structure.materializedChildren())e._reset()}reloadValidation(){w(()=>this._reloadValidation())}_reloadValidation(){let t=this.logicNode.logic.getMetadataKeys();for(let e of t)e[hn]&&this.metadata(e).reload?.();for(let e of this.structure.children())e._reloadValidation()}controlValueSignal(){let t=Rs$1(this.value);t.rawSet=t.set,t.set=n=>{t.rawSet(n),this.markAsDirty(),this.debounceSync()};let e=t.update;return t.update=n=>{e(n),this.markAsDirty(),this.debounceSync()},t}sync(){this.value.set(this.controlValue())}flushSync(){let t=this.pendingSync();t&&!t.signal.aborted&&(t.abort(),this.sync())}async debounceSync(){let t=w(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(t){let e=new AbortController,n=t(e.signal);if(n&&(this.pendingSync.set(e),await n,e.signal.aborted))return}this.structure.isOrphaned()||this.sync()}static newRoot(t,e,n,r){return r.newRoot(t,e,n,r)}createStructure(t){return t.kind===`root`?new sn(this,t.logic,t.fieldManager,t.value,this.newChild.bind(this)):new dn(this,t.logic,t.parent,t.identityInParent,t.initialKeyInParent,this.newChild.bind(this))}newChild(t,e,n){let r,o;return n?(r=this.pathNode.getChild(Fe),o=this.structure.logic.getChild(Fe)):(r=this.pathNode.getChild(t),o=this.structure.logic.getChild(t)),this.fieldAdapter.newChild({kind:`child`,parent:this,pathNode:r,logic:o,initialKeyInParent:t,identityInParent:e,fieldAdapter:this.fieldAdapter})}};var fs=Ne$1(()=>[]);var hs=Ne$1(()=>!1);function bo(i,t){return i?t&&i.element.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_PRECEDING?t:i:t}var cn=class{node;selfTouched=H(!1);selfDirty=H(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=H([]);constructor(t){this.node=t}dirty=Ne$1(()=>{let t=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(t,(e,n)=>n||e.nodeState.dirty(),po)});touched=Ne$1(()=>{let t=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(t,(e,n)=>n||e.nodeState.touched(),po)});disabledReasons=Ne$1(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)],{equal:Q});disabled=Ne$1(()=>!!this.disabledReasons().length);readonly=Ne$1(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=Ne$1(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=Ne$1(()=>{let t=this.node.structure.parent;return t?`${t.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=Ne$1(()=>{if(this.node.logicNode.logic.hasMetadata(rn)){let e=this.node.logicNode.logic.getMetadata(rn).compute(this.node.context);if(e)return n=>e(this.node.context,n)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=Ne$1(()=>this.hidden()||this.disabled()||this.readonly())};var mn=class{newRoot(t,e,n,r){return new yt({kind:`root`,fieldManager:t,value:e,pathNode:n,logic:n.builder.build(),fieldAdapter:r})}newChild(t){return new yt(t)}createNodeState(t){return new cn(t)}createValidationState(t){return new nn(t)}createStructure(t,e){return t.createStructure(e)}};var un=class{injector;rootName;submitOptions;constructor(t,e,n){this.injector=t,this.rootName=e??`${this.injector.get(Kn)}.form${ps++}`,this.submitOptions=n}structures=new Set;createFieldManagementEffect(t){bt$1(()=>{let e=new Set;this.markStructuresLive(t,e);for(let n of this.structures)e.has(n)||(this.structures.delete(n),w(()=>n.destroy()))},{injector:this.injector})}markStructuresLive(t,e){e.add(t);for(let n of t.children())this.markStructuresLive(n.structure,e)}};var ps=0;var Ao=new I(``);function _s(i){let t,e,n;return i.length===3?[t,e,n]=i:i.length===2?is(i[1])?[t,e]=i:[t,n]=i:[t]=i,[t,e,n]}function gn(...i){let[t,e,n]=_s(i),r=n?.injector??m(se),o=Je$1(r,()=>ci.rootCompile(e)),a=new un(r,n?.name,n?.submission),d=n?.adapter??new mn,s=yt.newRoot(a,t,o,d);a.createFieldManagementEffect(s.structure);let{experimentalWebMcpTool:l}=n??{};if(l){let m$2=Je$1(r,()=>m(Ao,{optional:!0}));m$2&&Je$1(r,()=>m$2(s.fieldTree,{name:l.name,description:l.description}))}return s.fieldTree}var fi=class{kind=`compat`;control;fieldTree;context;message;constructor({context:t,kind:e,control:n}){this.context=t,this.kind=e,this.control=n}};function Io(i){if(i.length===0)return null;let t={};for(let e of i)t[e.kind]=e instanceof fi?e.context:e;return t}function To(i,t){return i===null?[]:Object.entries(i).map(([e,n])=>new fi({context:n,kind:e,control:t}))}var gs=new I(``);function Po(i,t){pi(i);let e=ce.unwrapFieldPath(i),n;typeof t==`function`||typeof t==`string`?n=t:n=t?.when,e.builder.addDisabledReasonRule(r=>{let o=!0;return typeof n==`string`?o=n:n&&(o=n(r)),typeof o==`string`?{fieldTree:r.fieldTree,message:o}:o?{fieldTree:r.fieldTree}:void 0})}function _i(i,t){return i instanceof Function?i(t):i}function Lo(i){return typeof i==`number`?isNaN(i):i===``||i===!1||i==null}function Oo(i){return i===void 0?[]:Array.isArray(i)?i:[i]}function tt(i,t){pi(i),ce.unwrapFieldPath(i).builder.addSyncErrorRule(n=>Eo(t(n),n.fieldTree))}function bs(i){return new bn(i)}function ys(i){return new yn(i)}var vt=class{__brand=void 0;kind=``;fieldTree;message;constructor(t){t&&Object.assign(this,t)}};var bn=class extends vt{kind=`required`};var yn=class extends vt{kind=`email`};var gi=class extends vt{kind=`parse`};var vs=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function zo(i,t){tt(i,e=>{if(!(t?.when&&!t.when(e))&&!Lo(e.value())&&!vs.test(e.value()))return t?.error?_i(t.error,e):ys({message:_i(t?.message,e)})})}function bi(i,t){let e=fn(i,Ne(),n=>t?.when?t.when(n):!0);fn(i,_n,({state:n})=>n.metadata(e)()),tt(i,n=>{if(n.state.metadata(e)()&&Lo(n.value()))return t?.error?_i(t.error,n):bs({message:_i(t?.message,n)})})}function xs(i,t,e){let n=Rs$1({source:i,computation:()=>[],equal:Q}),r=a=>{let d=e(a);n.set(Oo(d.error)),d.value!==void 0&&t(d.value),n.set(Oo(d.error))},o=()=>{n.set([])};return{errors:n.asReadonly(),setRawValue:r,reset:o}}var vn=class{field;constructor(t){this.field=t}control=this;get value(){return this.field().controlValue()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return Io(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return`DISABLED`;if(this.field().valid())return`VALID`;if(this.field().invalid())return`INVALID`;if(this.field().pending())return`PENDING`;throw new v(1910,!1)}valueAccessor=null;hasValidator(t){return t===FE.required?this.field().required():!1}updateValueAndValidity(){}};var xn={disabled:`disabled`,disabledReasons:`disabledReasons`,dirty:`dirty`,errors:`errors`,hidden:`hidden`,invalid:`invalid`,max:`max`,maxLength:`maxLength`,min:`min`,minLength:`minLength`,name:`name`,pattern:`pattern`,pending:`pending`,readonly:`readonly`,required:`required`,touched:`touched`};var Ss=(()=>{let i={};for(let t of Object.keys(xn))i[xn[t]]=t;return i})();function Sn(i,t){return i[Ss[t]]?.()}var wn=Object.values(xn);function yi(){return{}}function Me(i,t,e){return i[t]!==e?(i[t]=e,!0):!1}function ws(i,t,e){let n;if(Bo(i)&&e.isBadInput(i))return{error:new gi};switch(i.type){case`checkbox`:return{value:i.checked};case`number`:case`range`:case`datetime-local`:if(n=w(t),typeof n==`number`||n===null)return{value:i.value===``?null:i.valueAsNumber};break;case`date`:case`month`:case`time`:case`week`:if(n=w(t),n===null||n instanceof Date)return{value:i.valueAsDate};if(typeof n==`number`)return{value:i.valueAsNumber};break}if(i.tagName===`INPUT`&&i.type===`text`&&(n??=w(t),typeof n==`number`||n===null)){if(i.value===``)return{value:null};let r=Number(i.value);return Number.isNaN(r)?{error:new gi}:{value:r}}return{value:i.value}}function Fo(i,t){switch(i.type){case`checkbox`:i.checked=t;return;case`radio`:i.checked=t===i.value;return;case`number`:case`range`:case`datetime-local`:if(typeof t==`number`){Do(i,t);return}else if(t===null){i.value=``;return}break;case`date`:case`month`:case`time`:case`week`:if(t===null||t instanceof Date){i.valueAsDate=t;return}else if(typeof t==`number`){Do(i,t);return}}if(i.tagName===`INPUT`&&i.type===`text`){if(typeof t==`number`){i.value=isNaN(t)?``:String(t);return}if(t===null){i.value=``;return}}i.value=t}function Do(i,t){isNaN(t)?i.value=``:i.valueAsNumber=t}function Bo(i){return i.tagName===`INPUT`}function Cs(i){return i.type===`date`||i.type===`datetime-local`||i.type===`month`||i.type===`time`||i.type===`week`}function Ns(i,t){let e=i.getUTCFullYear(),n=String(i.getUTCMonth()+1).padStart(2,`0`);if(t===`month`)return`${e}-${n}`;return`${e}-${n}-${String(i.getUTCDate()).padStart(2,`0`)}`}function qo(i,t,e){return t instanceof Date&&(i===`min`||i===`max`)&&(e===`date`||e===`month`)?Ns(t,e):t}function Ms(i,t){i.listenToCustomControlModel(n=>t.state().controlValue.set(n)),i.listenToCustomControlOutput(`touch`,()=>t.state().markAsTouched()),t.registerAsBinding(i.customControl);let e=yi();return()=>{let n=t.state(),r=n.controlValue();Me(e,`controlValue`,r)&&i.setCustomControlModelInput(r);for(let o of wn){let a;if(o===`errors`?a=t.errors():a=Sn(n,o),Me(e,o,a)&&(i.setInputOnDirectives(o,a),t.elementAcceptsNativeProperty(o)&&!i.customControlHasInput(o))){let d=qo(o,a,t.nativeFormElement.type);jV(t.renderer,t.nativeFormElement,o,d)}}}}function Es(i){return typeof i==`object`&&i!==null}function ks(i,t){let e=yi();t.controlValueAccessor.registerOnChange(r=>{e.controlValue=r,t.state().controlValue.set(r)}),t.controlValueAccessor.registerOnTouched(()=>t.state().markAsTouched());let n=t.injector.get(Ys$1,null,{optional:!0,self:!0});if(n){let r;for(let s of n)Es(s)&&s.registerOnValidatorChange&&(r??=H(0),s.registerOnValidatorChange(()=>{r.update(l=>l+1)}));let o=n.map(s=>typeof s==`function`?s:s.validate.bind(s)),a=FE.compose(o),d=Ne$1(()=>{r?.();return To(a?a(t.interopNgControl.control):null,t.interopNgControl.control)});t.parseErrorsSource.set(d)}return t.registerAsBinding({reset:()=>{let r=t.state().value();e.controlValue=r,w(()=>t.controlValueAccessor.writeValue(r))}}),()=>{let r=t.state(),o=r.controlValue();Me(e,`controlValue`,o)&&w(()=>t.controlValueAccessor.writeValue(o));for(let a of wn){let d=Sn(r,a);if(Me(e,a,d)){let s=i.setInputOnDirectives(a,d,a===`name`?Rs:void 0);a===`disabled`&&t.controlValueAccessor.setDisabledState?w(()=>t.controlValueAccessor.setDisabledState(d)):!s&&t.elementAcceptsNativeProperty(a)&&jV(t.renderer,t.nativeFormElement,a,d)}}}}function Rs(i){return i==null}function As(i,t,e){if(typeof MutationObserver!=`function`)return;let n=new MutationObserver(r=>{r.some(o=>Is(o))&&t()});n.observe(i,{attributes:!0,attributeFilter:[`value`],characterData:!0,childList:!0,subtree:!0}),e.onDestroy(()=>n.disconnect())}function Is(i){if(i.type===`childList`||i.type===`characterData`){if(i.target instanceof Comment)return!1;for(let t of i.addedNodes)if(!(t instanceof Comment))return!0;for(let t of i.removedNodes)if(!(t instanceof Comment))return!0;return!1}return i.type===`attributes`&&i.target instanceof HTMLOptionElement}function Ts(i,t,e,n){let r=!1,o=t.nativeFormElement,a=xs(()=>t.state().value(),s=>t.state().controlValue.set(s),s=>ws(o,t.state().value,n));e.set(a.errors),t.onReset=()=>{a.reset();let s=t.state().value();d.controlValue=s,Fo(o,s)},i.listenToDom(`input`,()=>a.setRawValue(void 0)),i.listenToDom(`blur`,()=>t.state().markAsTouched()),Bo(o)&&Cs(o)&&n.watchValidity(t.destroyRef,o,()=>a.setRawValue(void 0)),t.registerAsBinding(),o.tagName===`SELECT`&&As(o,()=>{r&&(o.value=t.state().controlValue())},t.destroyRef);let d=yi();return()=>{let s=t.state();for(let p of wn){let x=Sn(s,p);if(Me(d,p,x)&&(i.setInputOnDirectives(p,x),t.elementAcceptsNativeProperty(p))){let L=qo(p,x,o.type);jV(t.renderer,o,p,L)}}let l=s.controlValue(),m=Me(d,`controlValue`,l),u=o.type===`radio`&&Me(d,`radioValue`,o.value);(m||u)&&Fo(o,l),r=!0}}var Vo=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵprov=G({token:i,factory:e=>Os.ɵfac(e),providedIn:`root`})}return i})();var Os=(()=>{class i extends Vo{document=m(Q$1);cspNonce=m(os$1,{optional:!0});injectedStyles=new WeakMap;watchValidity(e,n,r){let o=n.getRootNode();this.injectedStyles.has(o)||this.injectedStyles.set(o,this.createTransitionStyle(o));let a=d=>{let s=d;(s.animationName===`ng-valid`||s.animationName===`ng-invalid`)&&r()};n.addEventListener(`animationstart`,a),e.onDestroy(()=>{n.removeEventListener(`animationstart`,a)})}isBadInput(e){return e.validity?.badInput??!1}createTransitionStyle(e){let n=this.document.createElement(`style`);return this.cspNonce&&(n.nonce=this.cspNonce),n.textContent=`
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `,e.nodeType===9?e.head?.appendChild(n):e.appendChild(n),n}ngOnDestroy(){this.injectedStyles.get(this.document)?.remove()}static ɵfac=(()=>{let e;return function(r){return(e||(e=zn(i)))(r||i)}})();static ɵprov=G({token:i,factory:i.ɵfac})}return i})();var Fs=Symbol();var et=new I(``);var Hc=(()=>{class i{field=Md$1.required({alias:`formField`});state=Ne$1(()=>this.field()());renderer=m(ut);destroyRef=m(je);injector=m(se);element=m(we$1).nativeElement;elementIsNativeFormElement=BV(this.element);elementAcceptsTextualValues=bte(this.element);_elementAcceptsMinMax;nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=e=>this.element.focus(e);controlValueAccessors=m($s$1,{optional:!0,self:!0});config=m(gs,{optional:!0});validityMonitor=m(Vo);parseErrorsSource=H(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new vn(this.state)}parseErrors=Ne$1(()=>this.parseErrorsSource()?.().map(e=>m$1(l({},e),{fieldTree:w(this.state).fieldTree,formField:this}))??[],{equal:Q});errors=Ne$1(()=>this.state().errors().filter(e=>!e.formField||e.formField===this),{equal:Q});isFieldBinding=!1;resetter=()=>{};parseErrorsResetCallback;setParseErrors(e){this.parseErrorsSource.set(e)}set onReset(e){this.parseErrorsResetCallback=e}get onReset(){return this.parseErrorsResetCallback}get controlValueAccessor(){return!this.controlValueAccessors||this.controlValueAccessors.length===0?this.interopNgControl?.valueAccessor??void 0:tG(this.interopNgControl,this.controlValueAccessors)??void 0}installClassBindingEffect(){let e=Object.entries(this.config?.classes??{}).map(([r,o])=>[r,Ne$1(()=>o(this))]);if(e.length===0)return;let n=yi();hQ({write:()=>{for(let[r,o]of e){let a=o();Me(n,r,a)&&(a?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r))}}},{injector:this.injector})}focus(e){this.focuser(e)}reset(){this.resetter(),this.parseErrorsResetCallback?.(this.state().value())}registerAsBinding(e){if(this.isFieldBinding)throw new v(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),e?.focus&&(this.focuser=n=>e.focus(n)),e?.reset&&(this.resetter=()=>e.reset()),bt$1(n=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),n(()=>{r.nodeState.formFieldBindings.update(o=>o.filter(a=>a!==this))})},{injector:this.injector})}[Fs];ɵngControlCreate(e){if(!e.hasPassThrough)if(this.controlValueAccessor)this.ɵngControlUpdate=ks(e,this);else if(e.customControl)this.ɵngControlUpdate=Ms(e,this);else if(this.elementIsNativeFormElement)this.ɵngControlUpdate=Ts(e,this,this.parseErrorsSource,this.validityMonitor);else throw new v(1914,!1)}ɵngControlUpdate;elementAcceptsNativeProperty(e){if(!this.elementIsNativeFormElement)return!1;switch(e){case`min`:case`max`:return this._elementAcceptsMinMax??=Ote(this.element);case`minLength`:case`maxLength`:return this.elementAcceptsTextualValues;case`disabled`:case`required`:case`readonly`:case`name`:return!0;default:return!1}}static ɵfac=function(n){return new(n||i)};static ɵdir=J$1({type:i,selectors:[[``,`formField`,``]],inputs:{field:[1,`formField`,`field`]},exportAs:[`formField`],features:[Pt([{provide:et,useExisting:i},{provide:go$1,useFactory:()=>m(i).interopNgControl},{provide:qV,useFactory:()=>m(et,{self:!0})}]),md$1(`formField`)]})}return i})();var $o=new I(`MAT_INPUT_VALUE_ACCESSOR`);var Cn=class{_box;_destroyed=new q;_resizeSubject=new q;_resizeObserver;_elementObservables=new Map;constructor(t){this._box=t,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(t){return this._elementObservables.has(t)||this._elementObservables.set(t,new V(e=>{let n=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(t,{box:this._box}),()=>{this._resizeObserver?.unobserve(t),n.unsubscribe(),this._elementObservables.delete(t)}}).pipe(mt(e=>e.some(n=>n.target===t)),CM({bufferSize:1,refCount:!0}),hr(this._destroyed))),this._elementObservables.get(t)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var Ho=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=m(me$1);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,n){let r=n?.box||`content-box`;return this._observers.has(r)||this._observers.set(r,new Cn(r)),this._observers.get(r).observe(e)}static ɵfac=function(n){return new(n||i)};static ɵprov=k({token:i,factory:i.ɵfac})}return i})();var Ds=[`notch`];var Ps=[`*`];var jo=[`iconPrefixContainer`];var Uo=[`textPrefixContainer`];var Go=[`iconSuffixContainer`];var Ko=[`textSuffixContainer`];var Ls=[`textField`];var zs=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]];var Bs=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function qs(i,t){i&1&&ao(0,`span`,21)}function Vs(i,t){if(i&1&&(oi$1(0,`label`,20),As$1(1,1),uc(2,qs,1,0,`span`,21),Ds$1()),i&2){let e=fc(2);Ts$1(`floating`,e._shouldLabelFloat())(`monitorResize`,e._hasOutline())(`id`,e._labelId),Qn(`for`,e._control.disableAutomaticLabeling?null:e._control.id),gs$1(2),lc(!e.hideRequiredMarker&&e._control.required?2:-1)}}function $s(i,t){if(i&1&&uc(0,Vs,3,5,`label`,20),i&2)lc(fc()._hasFloatingLabel()?0:-1)}function Hs(i,t){i&1&&ao(0,`div`,7)}function js(i,t){}function Us(i,t){if(i&1&&VD(0,js,0,0,`ng-template`,13),i&2){fc(2);Ts$1(`ngTemplateOutlet`,$k(1))}}function Gs(i,t){if(i&1&&(oi$1(0,`div`,9),uc(1,Us,1,1,null,13),Ds$1()),i&2){let e=fc();Ts$1(`matFormFieldNotchedOutlineOpen`,e._shouldLabelFloat()),gs$1(),lc(e._forceDisplayInfixLabel()?-1:1)}}function Ks(i,t){i&1&&(oi$1(0,`div`,10,2),As$1(2,2),Ds$1())}function Ws(i,t){i&1&&(oi$1(0,`div`,11,3),As$1(2,3),Ds$1())}function Qs(i,t){}function Ys(i,t){if(i&1&&VD(0,Qs,0,0,`ng-template`,13),i&2){fc();Ts$1(`ngTemplateOutlet`,$k(1))}}function Xs(i,t){i&1&&(oi$1(0,`div`,14,4),As$1(2,4),Ds$1())}function Zs(i,t){i&1&&(oi$1(0,`div`,15,5),As$1(2,5),Ds$1())}function Js(i,t){i&1&&ao(0,`div`,16)}function ed(i,t){i&1&&(oi$1(0,`div`,18),As$1(1,6),Ds$1())}function td(i,t){if(i&1&&(oi$1(0,`mat-hint`,22),c_(1),Ds$1()),i&2){let e=fc(2);Ts$1(`id`,e._hintLabelId),gs$1(),pA(e.hintLabel)}}function id(i,t){if(i&1&&(oi$1(0,`div`,19),uc(1,td,2,2,`mat-hint`,22),As$1(2,7),ao(3,`div`,23),As$1(4,8),Ds$1()),i&2){let e=fc();gs$1(),lc(e.hintLabel?1:-1)}}var Nn=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵdir=J$1({type:i,selectors:[[`mat-label`]]})}return i})();var ea=new I(`MatError`);var nd=(()=>{class i{id=m(hu).getId(`mat-mdc-error-`);static ɵfac=function(n){return new(n||i)};static ɵdir=J$1({type:i,selectors:[[`mat-error`],[``,`matError`,``]],hostAttrs:[1,`mat-mdc-form-field-error`,`mat-mdc-form-field-bottom-align`],hostVars:1,hostBindings:function(n,r){n&2&&vd$1(`id`,r.id)},inputs:{id:`id`},features:[Pt([{provide:ea,useExisting:i}])]})}return i})();var Mn=(()=>{class i{align=`start`;id=m(hu).getId(`mat-mdc-hint-`);static ɵfac=function(n){return new(n||i)};static ɵdir=J$1({type:i,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(n,r){n&2&&(vd$1(`id`,r.id),Qn(`align`,null),jt(`mat-mdc-form-field-hint-end`,r.align===`end`))},inputs:{align:`align`,id:`id`}})}return i})();var ta=new I(`MatPrefix`);var rd=(()=>{class i{set _isTextSelector(e){this._isText=!0}_isText=!1;static ɵfac=function(n){return new(n||i)};static ɵdir=J$1({type:i,selectors:[[``,`matPrefix`,``],[``,`matIconPrefix`,``],[``,`matTextPrefix`,``]],inputs:{_isTextSelector:[0,`matTextPrefix`,`_isTextSelector`]},features:[Pt([{provide:ta,useExisting:i}])]})}return i})();var ia=new I(`MatSuffix`);var od=(()=>{class i{set _isTextSelector(e){this._isText=!0}_isText=!1;static ɵfac=function(n){return new(n||i)};static ɵdir=J$1({type:i,selectors:[[``,`matSuffix`,``],[``,`matIconSuffix`,``],[``,`matTextSuffix`,``]],inputs:{_isTextSelector:[0,`matTextSuffix`,`_isTextSelector`]},features:[Pt([{provide:ia,useExisting:i}])]})}return i})();var na=new I(`FloatingLabelParent`);var Wo=(()=>{class i{_elementRef=m(we$1);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=m(Ho);_ngZone=m(me$1);_parent=m(na);_resizeSubscription=new Ee;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return ad(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(n){return new(n||i)};static ɵdir=J$1({type:i,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(n,r){n&2&&jt(`mdc-floating-label--float-above`,r.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return i})();function ad(i){let t=i;if(t.offsetParent!==null)return t.scrollWidth;let e=t.cloneNode(!0);e.style.setProperty(`position`,`absolute`),e.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(e);let n=e.scrollWidth;return e.remove(),n}var Qo=`mdc-line-ripple--active`;var vi=`mdc-line-ripple--deactivating`;var Yo=(()=>{class i{_elementRef=m(we$1);_cleanupTransitionEnd;constructor(){let e=m(me$1),n=m(ut);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=n.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(vi),e.add(Qo)}deactivate(){this._elementRef.nativeElement.classList.add(vi)}_handleTransitionEnd=e=>{let n=this._elementRef.nativeElement.classList,r=n.contains(vi);e.propertyName===`opacity`&&r&&n.remove(Qo,vi)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(n){return new(n||i)};static ɵdir=J$1({type:i,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return i})();var Xo=(()=>{class i{_elementRef=m(we$1);_ngZone=m(me$1);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,n=e.querySelector(`.mdc-floating-label`);n?(e.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(n.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>n.style.transitionDuration=``)}))):e.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(e){let n=this._notch.nativeElement;!this.open||!e?n.style.width=``:n.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${e}px)`)}static ɵfac=function(n){return new(n||i)};static ɵcmp=Tt({type:i,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(n,r){if(n&1&&Td$1(Ds,5),n&2){let o;pc(o=mc())&&(r._notch=o.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(n,r){n&2&&jt(`mdc-notched-outline--notched`,r.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:Ps,decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(n,r){n&1&&(hc(),KD(0,`div`,1),Ed$1(1,`div`,2,0),As$1(3),Sd$1(),KD(4,`div`,3))},encapsulation:2})}return i})();var xt=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static ɵfac=function(n){return new(n||i)};static ɵdir=J$1({type:i})}return i})();var St=new I(`MatFormField`);var sd=new I(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var Zo=`fill`;var dd=`auto`;var Jo=`fixed`;var ld=`translateY(-50%)`;var ra=(()=>{class i{_elementRef=m(we$1);_changeDetectorRef=m($t);_platform=m(Ct$1);_idGenerator=m(hu);_ngZone=m(me$1);_defaults=m(sd,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=uQ(`iconPrefixContainer`);_textPrefixContainerSignal=uQ(`textPrefixContainer`);_iconSuffixContainerSignal=uQ(`iconSuffixContainer`);_textSuffixContainerSignal=uQ(`textSuffixContainer`);_prefixSuffixContainers=Ne$1(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=dQ(Nn);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Mce(e)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||dd}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let n=e||this._defaults?.appearance||Zo;this._appearanceSignal.set(n)}_appearanceSignal=H(Zo);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Jo}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Jo}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new q;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=sa$1();constructor(){let e=this._defaults,n=m(Wj);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),bt$1(()=>this._currentDirection=n.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Ne$1(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(e){let n=this._control,r=`mat-mdc-form-field-type-`;e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),n.controlType&&this._elementRef.nativeElement.classList.add(r+n.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=n.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=n.stateChanges.pipe(ya([void 0,void 0]),ne(()=>[n.errorState,n.userAriaDescribedBy]),AM(),mt(([[o,a],[d,s]])=>o!==d||a!==s)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),n.ngControl&&n.ngControl.valueChanges&&(this._valueChanges=n.ngControl.valueChanges.pipe(hr(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),SM(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,e),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,e)}_syncOutlineLabelOffset(){hQ({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Ne$1(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let n=this._control?this._control.ngControl:null;return n&&n[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&e.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let o=this._hintChildren?this._hintChildren.find(d=>d.align===`start`):null,a=this._hintChildren?this._hintChildren.find(d=>d.align===`end`):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let n=this._control.describedByIds,r;if(n){let o=this._describedByIds||e;r=e.concat(n.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,n=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,d=n?.getBoundingClientRect().width??0,s=r?.getBoundingClientRect().width??0,l=o?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${ld} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${a+d}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,a+d+s+l]}_writeOutlinedLabelStyles(e){if(e!==null){let[n,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=n),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let n=e.getRootNode();return n&&n!==e}return document.documentElement.contains(e)}static ɵfac=function(n){return new(n||i)};static ɵcmp=Tt({type:i,selectors:[[`mat-form-field`]],contentQueries:function(n,r,o){if(n&1&&(eA(o,r._labelChild,Nn,5),Id$1(o,xt,5)(o,ta,5)(o,ia,5)(o,ea,5)(o,Mn,5)),n&2){jk();let a;pc(a=mc())&&(r._formFieldControl=a.first),pc(a=mc())&&(r._prefixChildren=a),pc(a=mc())&&(r._suffixChildren=a),pc(a=mc())&&(r._errorChildren=a),pc(a=mc())&&(r._hintChildren=a)}},viewQuery:function(n,r){if(n&1&&(tA(r._iconPrefixContainerSignal,jo,5)(r._textPrefixContainerSignal,Uo,5)(r._iconSuffixContainerSignal,Go,5)(r._textSuffixContainerSignal,Ko,5),Td$1(Ls,5)(jo,5)(Uo,5)(Go,5)(Ko,5)(Wo,5)(Xo,5)(Yo,5)),n&2){jk(4);let o;pc(o=mc())&&(r._textField=o.first),pc(o=mc())&&(r._iconPrefixContainer=o.first),pc(o=mc())&&(r._textPrefixContainer=o.first),pc(o=mc())&&(r._iconSuffixContainer=o.first),pc(o=mc())&&(r._textSuffixContainer=o.first),pc(o=mc())&&(r._floatingLabel=o.first),pc(o=mc())&&(r._notchedOutline=o.first),pc(o=mc())&&(r._lineRipple=o.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(n,r){n&2&&jt(`mat-mdc-form-field-label-always-float`,r._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,r._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,r._hasIconSuffix)(`mat-form-field-invalid`,r._control.errorState)(`mat-form-field-disabled`,r._control.disabled)(`mat-form-field-autofilled`,r._control.autofilled)(`mat-form-field-appearance-fill`,r.appearance==`fill`)(`mat-form-field-appearance-outline`,r.appearance==`outline`)(`mat-form-field-hide-placeholder`,r._hasFloatingLabel()&&!r._shouldLabelFloat())(`mat-primary`,r.color!==`accent`&&r.color!==`warn`)(`mat-accent`,r.color===`accent`)(`mat-warn`,r.color===`warn`)(`ng-untouched`,r._shouldForward(`untouched`))(`ng-touched`,r._shouldForward(`touched`))(`ng-pristine`,r._shouldForward(`pristine`))(`ng-dirty`,r._shouldForward(`dirty`))(`ng-valid`,r._shouldForward(`valid`))(`ng-invalid`,r._shouldForward(`invalid`))(`ng-pending`,r._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[Pt([{provide:St,useExisting:i},{provide:na,useExisting:i}])],ngContentSelectors:Bs,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(n,r){if(n&1&&(hc(zs),VD(0,$s,1,1,`ng-template`,null,0,Ux),oi$1(2,`div`,6,1),Bt(`click`,function(a){return r._control.onContainerClick(a)}),uc(4,Hs,1,0,`div`,7),oi$1(5,`div`,8),uc(6,Gs,2,2,`div`,9),uc(7,Ks,3,0,`div`,10),uc(8,Ws,3,0,`div`,11),oi$1(9,`div`,12),uc(10,Ys,1,1,null,13),As$1(11),Ds$1(),uc(12,Xs,3,0,`div`,14),uc(13,Zs,3,0,`div`,15),Ds$1(),uc(14,Js,1,0,`div`,16),Ds$1(),oi$1(15,`div`,17),uc(16,ed,2,0,`div`,18)(17,id,5,1,`div`,19),Ds$1()),n&2){let o;gs$1(2),jt(`mdc-text-field--filled`,!r._hasOutline())(`mdc-text-field--outlined`,r._hasOutline())(`mdc-text-field--no-label`,!r._hasFloatingLabel())(`mdc-text-field--disabled`,r._control.disabled)(`mdc-text-field--invalid`,r._control.errorState),gs$1(2),lc(!r._hasOutline()&&!r._control.disabled?4:-1),gs$1(2),lc(r._hasOutline()?6:-1),gs$1(),lc(r._hasIconPrefix?7:-1),gs$1(),lc(r._hasTextPrefix?8:-1),gs$1(2),lc(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),gs$1(2),lc(r._hasTextSuffix?12:-1),gs$1(),lc(r._hasIconSuffix?13:-1),gs$1(),lc(r._hasOutline()?-1:14),gs$1(),jt(`mat-mdc-form-field-subscript-dynamic-size`,r.subscriptSizing===`dynamic`);let a=r._getSubscriptMessageType();gs$1(),lc((o=a)===`error`?16:o===`hint`?17:-1)}},dependencies:[Wo,Xo,XF,Yo,Mn],styles:[`.mdc-text-field {
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
`],encapsulation:2})}return i})();var wt=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Ve({type:i});static ɵinj=Le({imports:[hb,ra,ua$1]})}return i})();var cd=[`button`,`checkbox`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`];var md=new I(`MAT_INPUT_CONFIG`);var qm=(()=>{class i{_elementRef=m(we$1);_platform=m(Ct$1);ngControl=m(go$1,{optional:!0,self:!0});_autofillMonitor=m(fo);_ngZone=m(me$1);_formField=m(St,{optional:!0});_renderer=m(ut);_uid=m(hu).getId(`mat-input-`);_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=m(md,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new q;controlType=`mat-input`;autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Mce(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(FE.required)??!1}set required(e){this._required=Mce(e)}_required;get type(){return this._type}set type(e){this._type=e||`text`,this._validateType(),!this._isTextarea&&kse().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type=`text`;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Mce(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=[`date`,`datetime`,`datetime-local`,`month`,`time`,`week`].filter(e=>kse().has(e));constructor(){let e=m(oG,{optional:!0}),n=m(cG,{optional:!0}),r=m(sue),o=m($o,{optional:!0,self:!0}),a=m(et,{optional:!0,self:!0}),d=this._elementRef.nativeElement,s=d.nodeName.toLowerCase();o?Mt$1(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=d,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(d,`keyup`,this._iOSKeyupListener)}),this._errorStateTracker=new xb(r,a||this.ngControl,n,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s===`select`,this._isTextarea=s===`textarea`,this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=d.multiple?`mat-native-select-multiple`:`mat-native-select`),this._signalBasedValueAccessor&&bt$1(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let n=this._elementRef.nativeElement;n.type===`number`?(n.type=`text`,n.setSelectionRange(0,0),n.type=`number`):n.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let n=this._elementRef.nativeElement;this._previousPlaceholder=e,e?n.setAttribute(`placeholder`,e):n.removeAttribute(`placeholder`)}}_getPlaceholder(){return this.placeholder||null}_validateType(){cd.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,n=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&n&&n.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute(`aria-describedby`,e.join(` `)):n.removeAttribute(`aria-describedby`)}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let n=e.target;!n.value&&n.selectionStart===0&&n.selectionEnd===0&&(n.setSelectionRange(1,1),n.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(n){return new(n||i)};static ɵdir=J$1({type:i,selectors:[[`input`,`matInput`,``],[`textarea`,`matInput`,``],[`select`,`matNativeControl`,``],[`input`,`matNativeControl`,``],[`textarea`,`matNativeControl`,``]],hostAttrs:[1,`mat-mdc-input-element`],hostVars:21,hostBindings:function(n,r){n&1&&Bt(`focus`,function(){return r._focusChanged(!0)})(`blur`,function(){return r._focusChanged(!1)})(`input`,function(){return r._onInput()}),n&2&&(vd$1(`id`,r.id)(`disabled`,r.disabled&&!r.disabledInteractive)(`required`,r.required),Qn(`name`,r.name||null)(`readonly`,r._getReadonlyAttribute())(`aria-disabled`,r.disabled&&r.disabledInteractive?`true`:null)(`aria-invalid`,r.empty&&r.required?null:r.errorState)(`aria-required`,r.required)(`id`,r.id),jt(`mat-input-server`,r._isServer)(`mat-mdc-form-field-textarea-control`,r._isInFormField&&r._isTextarea)(`mat-mdc-form-field-input-control`,r._isInFormField)(`mat-mdc-input-disabled-interactive`,r.disabledInteractive)(`mdc-text-field__input`,r._isInFormField)(`mat-mdc-native-select-inline`,r._isInlineSelect()))},inputs:{disabled:`disabled`,id:`id`,placeholder:`placeholder`,name:`name`,required:`required`,type:`type`,errorStateMatcher:`errorStateMatcher`,userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],value:`value`,readonly:`readonly`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Dn$1]},exportAs:[`matInput`],features:[Pt([{provide:xt,useExisting:i}]),It]})}return i})();var Vm=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Ve({type:i});static ɵinj=Le({imports:[wt,wt,ho,ua$1]})}return i})();function jm(i,t,e){let n=$(i,e?.in);return n.setHours(t),n}var Ct=`/api/staff/v1/calendars`;async function Wm(){return(await nu$1(Ct)).map(t=>new WS(t))}async function oa(i){let t=C6(i);return(await nu$1(`${Ct}/availability${t?`?`+t:``}`)).map(n=>new WS(n))}var ud=(i,t)=>i.filter(e=>!!e.resource).map(e=>new cr(m$1(l({},e.resource),{level:t?.levelWithID(e.resource.zones),availability:e.availability}))).filter(e=>e.bookable);async function Qm(i){let t=C6(i);return await nu$1(`${Ct}/free_busy${t?`?`+t:``}`)}async function aa(i,t){let e=C6(i);return ud((await nu$1(`${Ct}/free_busy${e?`?`+e:``}`)).map(r=>new WS(r)),t)}async function Ym(i){return await nu$1(`${Ct}/${encodeURIComponent(i)}/permission`)}var be=`/api/staff/v1/events`;var fd=as$1.raw||as$1.version||as$1.hash;function hd(){return Gh(`app.name`)||Gh(`app.short_name`)||`PlaceOS`}function sa(i){return m$1(l({},i),{extension_data:m$1(l({},i.extension_data||{}),{app_name:hd(),app_version:fd})})}async function nu(i){return pd(i).catch(()=>[])}async function pd(i){return(await _d(i)).events}async function _d(i){let t=C6(i),e=`${be}${t?`?`+t:``}`,n=await nu$1(e),r=cH(new URL(e,document.baseURI).href)[`x-calendar-issue`]||``;return{events:n.map(o=>new Uh(o)),failed_calendars:r.split(`,`).map(o=>o.trim().toLowerCase()).filter(Boolean)}}async function gd(i){return new Uh(await JN(`${be}`,new Uh(sa(i)).toJSON()))}async function bd(i,t,e={},n=`patch`){let r=C6(e);return new Uh(await(n===`patch`?uH:eO)(`${be}/${encodeURIComponent(i)}${r?`?`+r:``}`,new Uh(sa(t)).toJSON()))}var ru=async(i,t)=>{let e=i.update_master&&i.recurring_event_id||i.id;return delete i?.status,e?bd(e,m$1(l({},i),{id:e}),t):gd(i)};function ou(i,t={}){let e=C6(t);return lH(`${be}/${encodeURIComponent(i)}${e?`?`+e:``}`,{response_type:`void`})}async function au(i,t,e,n={}){let r=C6(m$1(l({},n),{state:e}));return new Rh(await JN(`${be}/${encodeURIComponent(i)}/guests/${t}/checkin${r?`?`+r:``}`,``))}async function su(i,t,e={}){let n=C6(e);return new Rh(await JN(`${be}/${encodeURIComponent(i)}/attendee${n?`?`+n:``}`,t))}async function du(i,t,e={}){let n=C6(e);return new Rh(await lH(`${be}/${encodeURIComponent(i)}/attendee/${encodeURIComponent(t.email)}${n?`?`+n:``}`))}async function lu(i,t,e={}){let n=C6(l({},e));return await nu$1(`${be}/${encodeURIComponent(i)}/metadata/${encodeURIComponent(t)}${n?`?`+n:``}`)}async function cu(i,t,e,n,r,o=[0,0]){let a=br(t,e).valueOf(),[d,s]=await Promise.all([oa({system_ids:i.join(),period_start:Bt$1(t),period_end:Bt$1(a)}).catch(()=>[]),n&&i.includes(n)?aa({period_start:Bt$1(t),period_end:Bt$1(a),system_ids:n}):Promise.resolve([])]),l=i.map(m=>!!d.find(u=>u.id===m||u.resource?.id===m));for(let m of s){if(!i.includes(m.id))continue;let u=m.availability.filter(p=>!(p.date===o[0]&&p.duration===o[1]));l[i.indexOf(m.id)]=!u.find(p=>p.status!==`free`)}return l}async function mu(i,t={}){let e=C6(m$1(l({},t),{limit:1e4}));try{let n=await JN(`${be}/clashing-assets${e?`?`+e:``}`,i.toJSON());return t.include_clash_time,n}catch{return[]}}var J=`/api/staff/v1/bookings`;var yd=as$1.raw||as$1.version||as$1.hash;function ca(){return Gh(`app.name`)||Gh(`app.short_name`)||`PlaceOS`}function Mt(){return`${ca()}_${as$1.hash}_${ze().email||``}`}function En(i){let t=l({},i instanceof VS?i.toJSON():i);return delete t.created_at,m$1(l({},t),{extension_data:m$1(l({},t.extension_data||{}),{app_name:ca(),app_version:yd})})}async function Et(i){return ma(i).catch(()=>[])}async function ma(i){let t=C6(i);return(await nu$1(`${J}${t?`?`+t:``}`)).map(n=>new VS(n))}async function vd(i,t){try{let{data:e,next:n,total:r}=await yo$1({query_params:m$1(l({},i),{limit:Math.max(200,t||0)}),endpoint:J,path:`booked`}),o=[...e],a=1;for(;n&&(!r||o.length<r)&&a<=ua;){let d=await n();e=d.data,n=d.next,r=d.total,o=[...o,...e],a+=1}return Yie(o)}catch{return[]}}async function vu(i,t={}){let e=C6(m$1(l({},t),{limit:1e3}));try{let n=await JN(`${J}/clashing-assets${e?`?`+e:``}`,i.toJSON()).catch(()=>[]);return t.include_clash_time,n}catch{return[]}}var ua=50;async function xu(i){try{let{data:t,next:e}=await yo$1({query_params:i,fn:o=>new VS(o),endpoint:J,path:``}),n=[...t],r=1;for(;e&&r<=ua;){let o=await e();t=o.data,e=o.next,n=[...n,...t],r+=1}return Yie(n,`id`)}catch{return[]}}async function Su(i){return new VS(await nu$1(`${J}/${encodeURIComponent(i)}`))}async function xi(i,t){let e=C6(m$1(l({},t),{utm_source:Mt()}));return new VS(await JN(`${J}${e?`?`+e:``}`,En(i)))}async function fa(i,t,e=`patch`){return new VS(await(e===`patch`?uH:eO)(`${J}/${encodeURIComponent(i)}`,En(t)))}async function xd(i,t,e,n=`patch`){return new VS(await(n===`patch`?uH:eO)(`${J}/${encodeURIComponent(i)}/instance/${t}`,En(e)))}var wu=async(i,t)=>{let e=i.id;delete i.id;let n=t?.instance;return t&&delete t.instance,e?n?xd(e,i.instance||i.booking_start,i):fa(e,i):xi(wG(i,[``,null,void 0])||{},t)};function Nt(i,t={}){if(t.instance)return Sd(i,t.start_time);let e=C6({utm_source:Mt()});return lH(`${J}/${encodeURIComponent(i)}?${e}`,{response_type:`void`})}function Sd(i,t){let e=C6({utm_source:Mt()});return lH(`${J}/${encodeURIComponent(i)}/instance/${t}?${e}`,{response_type:`void`})}async function wd(i,t){let e=C6({state:t});try{return new VS(await JN(`${J}/${encodeURIComponent(i)}/check_in?${e}&utm_source=${Mt()}`,``))}catch(n){let r=await n.json();throw r.error||r.message||r}}async function Cd(i,t,e){let n=C6({state:e});try{return new VS(await JN(`${J}/${encodeURIComponent(i)}/check_in/${t}?${n}&utm_source=${Mt()}`,``))}catch(r){let o=await r.json();throw o.error||o.message||o}}async function Cu(i,t){return!!i.instance||!!i.recurrence_type&&i.recurrence_type!==`none`?Cd(i.id,i.instance||i.booking_start,t):wd(i.id,t)}async function Nu(i,t,e,n,r=`room`){let o=await Et({type:r,period_start:Bt$1(t),period_end:Bt$1(br(t,e))});return i.map(a=>!o.find(d=>(d.asset_id===a||d.asset_ids.includes(a))&&(!n||n!==d.id)))}async function Nd(i,t){return(await ma({type:t,event_id:i.id,period_start:Bt$1(i.date),period_end:Bt$1(br(i.date,i.duration)),limit:500})).filter(n=>n.extension_data?.parent_id===i.id)}function Md(i,t){return(i.linked_bookings||[]).filter(e=>{let n=e.extension_data?.parent_id;return e.booking_type===t&&!!n&&n!==i.id}).map(e=>e.id)}function Ed(i,t){return t.id&&i.extension_data?.details?.id===t.id||t.email&&i.attendees?.find(e=>e.email===t.email)?!0:!!i.asset_ids?.find(e=>t.items?.find(n=>n.item_ids?.includes(e)))}function da(i){let t=JSON.parse(JSON.stringify(i??null));return t&&typeof t==`object`&&delete t.deliver_at_time,JSON.stringify(t,(e,n)=>n&&typeof n==`object`&&!Array.isArray(n)?Object.fromEntries(Object.entries(n).sort(([r],[o])=>r<o?-1:1)):n)}function la(i=[]){return i.map(t=>t.email?.toLowerCase()).sort().join(`,`)}function kd(i,t){let e={};(i.booking_start!==t.booking_start||i.booking_end!==t.booking_end)&&(e.booking_start=t.booking_start,e.booking_end=t.booking_end,e.all_day=t.all_day);for(let r of[`title`,`description`,`asset_name`])i[r]!==t[r]&&(e[r]=t[r]);return i.user_email.toLowerCase()!==t.user_email.toLowerCase()&&(e.user_email=t.user_email),i.asset_id!==t.asset_id&&(e.asset_id=t.asset_id,e.asset_ids=t.asset_ids),[...i.zones].sort().join()!==[...t.zones].sort().join()&&(e.zones=t.zones),la(i.attendees)!==la(t.attendees)&&(e.attendees=t.attendees),!(da(i.extension_data?.details)!==da(t.extension_data?.details))&&!Object.keys(e).length?null:m$1(l({},e),{extension_data:t.extension_data})}async function Mu(i,t,e){let n=await Nd(i,t),r=i.system?.zones||Yie(Zie(i.resources.map(d=>d.zones)))||[],o=new Set,a=[];try{for(let d of Md(i,t))await Nt(d);for(let d of e){let s=n.find(x=>!o.has(x.id)&&Ed(x,d)),l=t===`catering-order`&&d.system_id?i.resources.find(x=>x.id===d.system_id||x.email===d.system_id):void 0,m=l?.id||d.system_id||d.email||d.id,u=l?.display_name||l?.name||d.name,p=new VS({type:t,booking_type:t,date:i.date,duration:i.duration,description:i.title||d.name,user_email:i.host,asset_id:m,asset_name:u,title:i.title,attendees:d.email?[new oo(d)]:[],extension_data:{parent_id:i.id,name:u,location_id:l?.id||i.location,details:d},zones:l?.zones||r});if(s){o.add(s.id);let x=kd(s,p);x&&await fa(s.id,x);continue}a.push(await xi(p.toJSON(),{ical_uid:i.ical_uid,event_id:i.id}))}for(let d of n)o.has(d.id)||await Nt(d.id)}catch(d){throw await Promise.all(a.filter(s=>!!s.id).map(s=>Nt(s.id).catch(()=>{}))),d}}function wi(i,t=``){let e=t.trim().toLowerCase();return i.filter(n=>(n.name||``).trim().toLowerCase()===e).sort((n,r)=>(n.created_at||0)-(r.created_at||0))[0]}function Rd(i){return m$1(l({},i),{data:i.data.filter(t=>!t?.hidden)})}async function Ad(){let i=await une({});return new Set(i.data.filter(t=>!t?.hidden).map(t=>t.id))}async function $u(i={}){if(i.hidden===!0)return une(i);let n$1=i,{hidden:t}=n$1;return Rd(await une(n(n$1,[`hidden`])))}async function Id(i={}){if(i.hidden===!0)return sne(i);let o=i,{hidden:t}=o,e=n(o,[`hidden`]),[n$2,r]=await Promise.all([sne(e),Ad()]);return m$1(l({},n$2),{data:n$2.data.filter(a=>!a?.hidden&&r.has(a.category_id))})}async function Hu(i={}){if(i.hidden===!0)return ine(i);let a=i,{hidden:t}=a,e=n(a,[`hidden`]),[n$3,r]=await Promise.all([ine(e),Id(m$1(l({},e.zone_id?{zone_id:e.zone_id}:{}),{limit:2e3}))]),o=new Set(r.data.map(d=>d.id));return m$1(l({},n$3),{data:n$3.data.filter(d=>!d?.hidden&&o.has(d.asset_type_id))})}function ha(i){return i.id?lne(i.id,i):dne(i)}var Si=new Map;var Td=[`period_start`,`period_end`,`type`,`rejected`];async function Od(i={}){let t=await ine(m$1(l({},i),{limit:i.limit||500})),e=t.total,n=[...t.data];for(;typeof t.next==`function`;){let r=t.next();if(!r)break;t=await r,e=t.total,n.push(...t.data)}return{total:e,next:()=>null,data:n}}async function Fd(i={}){let t=JSON.stringify({zones:i.zones||i.zone_id||``,category_id:i.category_id||``,q:i.q||``,type_id:i.type_id||``});if(Si.has(t))return Si.get(t);let e=l({},i);for(let l of Td)l in e&&delete e[l];e.zones&&!e.zone_id&&(e.zone_id=e.zones),e.zones&&delete e.zones;let[n,r]=await Promise.all([sne(e),Od(e)]),o=n.data.filter(l=>!l?.hidden);e.type_id&&(o=o.filter(l=>l.id===e.type_id));let a=new Set(o.map(l=>l.id)),d=new Map;for(let l of r.data){if(l?.hidden||!a.has(l.asset_type_id))continue;let m=d.get(l.asset_type_id)||[];m.push(l),d.set(l.asset_type_id,m)}let s=o.map(l$2=>m$1(l({},l$2),{assets:d.get(l$2.id)||[]}));return Si.set(t,s),setTimeout(()=>Si.delete(t),300*1e3),s}function pa(i){return i.id?ane(i.id,i):cne(i)}async function Dd(i,t=[]){let[e,n]=await Promise.all([Fd(i),Et(m$1(l({},i),{type:`asset-request`}))]),r=n.filter(o=>o.status!==`declined`&&o.status!==`cancelled`);return e.map(o=>m$1(l({},o),{assets:o.assets.filter(a=>t?.includes(a.id)||!r.find(d=>!t.includes(d.id)&&(d.asset_id===a.id||d.asset_ids?.includes(a.id))))}))}function Pd(i,t){if((!i||i?.length<=0)&&t?.length)return[];if(!t)return[];let e=[];for(let n of i){let r=t.find(o=>o.id===n.id);(!r||r.ref_id!==n.ref_id)&&e.push(n.id)}return e}async function ju({id:i,ical_uid:t,from_booking:e},{date:n,duration:r,all_day:o,host:a,location_name:d,location_id:s,zones:l$3,reset_state:m},u=[],p=!1){let x=await Et({period_start:Bt$1(n),period_end:Bt$1(br(n,r)),type:`asset-request`,zones:l$3.join(`,`)}),L=i&&t?await Et({period_start:Bt$1(cn$1(n)),period_end:Bt$1(xE(n)),type:`asset-request`,email:a,event_id:e?``:i,booking_id:e?i:``,ical_uid:t}):[],ye=L.map(v=>[v.id,new He(v.extension_data.request)]);u?.forEach(v=>v.conflict=!1);let it=p?u.map(v=>v.id):Pd(u,ye.map(([v,M])=>M));if(m){let v=L.filter(M=>M.approved||M.rejected);it=Yie([...it,...v.map(M=>M.extension_data.request_id)])}let Ln=ye.filter(([v,M])=>!it.includes(M.id)),qa=ye.filter(([v,{id:M}])=>it.includes(M)),Va=u.filter(({id:v})=>it.includes(v)),Pe=Zie(x.filter(v=>!v.rejected&&(!L.find(M=>M.id===v.id)||Ln.find(([M])=>v.event_id===M))).map(v=>v.asset_ids));for(let[v,M]of Ln)Pe=[...Pe,...Zie(M.items.map(It=>It.item_ids))];let Ha=await Dd({period_start:Bt$1(n),period_end:Bt$1(br(n,r)),type:`asset-request`,zones:(l$3||[]).join(`,`)},L.map(v=>v.id)),ja=Va.map(v=>{let M=Zie(v.items.map(({id:ue,item_ids:Mi,quantity:Ei})=>{let nt=Mi||[],Bn=Ha.find(qn=>qn.id===ue)?.assets;if(!Bn)return nt;let ki=[];return new Array(Ei).fill(0).map((qn,Tt)=>{let Ri=Pe.includes(nt[Tt])||ki.includes(nt[Tt])||!nt[Tt]?Bn?.find(({id:Vn})=>!Pe.includes(Vn)&&!ki.includes(Vn))?.id:nt[Tt];if(!Ri)throw v.conflict=!0,`Unable to find available asset for request`;return ki.push(Ri),Ri})}));if(!M.length||M.some(ue=>!ue))throw v.conflict=!0,`Unable to find available asset for request`;let It=L.find(ue=>ue.asset_ids.find(Mi=>v.items?.find(Ei=>Ei.item_ids?.includes(Mi))));Pe=[...Pe,...M];let zn={type:`asset-request`,booking_type:`asset-request`,date:n,duration:r,all_day:o,description:d,user_email:a,asset_id:M[0],asset_ids:M,asset_name:v.items.map(ue=>ue.name).join(`, `),title:v.items.map(ue=>ue.name).join(`, `),approved:!m&&It?.approved&&!v._changed,rejected:!m&&It?.rejected&&!v._changed,extension_data:{parent_id:i,request_id:v.id,location_id:s,request:new He(m$1(l({},v),{event:null}))},zones:l$3||[]};return e&&(zn.parent_id=i),()=>xi(new VS(zn),{ical_uid:t,event_id:e?``:i})});return async()=>{await Promise.all(qa.map(([v])=>Nt(v))),await Promise.all(ja.map(v=>v()))}}var Ld=64;var zd=64;var Bd=30*1e3;var qd=`PlaceOS.image-cache-v1`;var Vd=`PlaceOS.image-cache-keys-v1`;var me=new Map;var kn=new Map;var De=new Map;var _a=!1;function $d(){if(!_a&&(_a=!0,typeof caches<`u`&&caches.delete(qd).catch(()=>!1),typeof sessionStorage<`u`))try{sessionStorage.removeItem(Vd)}catch{}}function Hd(i){let t=me.get(i);if(t)return me.delete(i),me.set(i,t),t}function jd(i,t){let e=me.get(i);for(e&&e!==t&&URL.revokeObjectURL(e),me.delete(i),me.set(i,t);me.size>Ld;){let n=me.keys().next().value;if(!n)break;let r=me.get(n);me.delete(n),r&&URL.revokeObjectURL(r)}return t}function Ud(i){for(De.delete(i),De.set(i,Date.now()+Bd);De.size>zd;){let t=De.keys().next().value;if(!t)break;De.delete(t)}}function Rn(i){let t=ln$1();document.cookie=`${t===`x-api-key`?`api-key=`+encodeURIComponent(tu()):`bearer_token=`+encodeURIComponent(t)};max-age=30;path=${i};samesite=strict;${location.protocol===`https:`?`secure;`:``}`}function Gd(){let i=ln$1();return i===`x-api-key`?{"X-API-Key":tu()}:{Authorization:`Bearer ${i}`}}function Wu(i,t){return ga(i,()=>(Rn(t),fetch(i)))}function Qu(i){return ga(i,()=>fetch(i,{headers:Gd()}))}async function ga(i,t){$d();let e=Hd(i);if(e)return e;if((De.get(i)||0)>Date.now())throw new Error(`Image load is in retry cooldown`);De.delete(i);let r=kn.get(i);if(r)return r;let o=t().then(async a=>{if(!a?.ok)throw new Error(`Failed to fetch image: ${a?.status}`);return jd(i,URL.createObjectURL(await a.blob()))}).catch(a=>{throw Ud(i),a}).finally(()=>kn.delete(i));return kn.set(i,o),o}var kt=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new q;bulk={select:t=>this._select(t),deselect:t=>this._deselect(t),setSelection:t=>this._setSelection(t)};constructor(t=!1,e,n=!0,r){this._multiple=t,this._emitChanges=n,this.compareWith=r,e&&e.length&&(t?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...t){return this._select(t)}deselect(...t){return this._deselect(t)}setSelection(...t){return this._setSelection(t)}toggle(t){return this.isSelected(t)?this.deselect(t):this.select(t)}clear(t=!0){this._unmarkAll();let e=this._hasQueuedChanges();return t&&this._emitChangeEvent(),e}isSelected(t){return this._selection.has(this._getConcreteValue(t))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(t){this._multiple&&this.selected&&this._selected.sort(t)}isMultipleSelection(){return this._multiple}_select(t){this._verifyValueAssignment(t),t.forEach(n=>this._markSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(t){this._verifyValueAssignment(t),t.forEach(n=>this._unmarkSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(t){this._verifyValueAssignment(t);let e=this.selected,n=new Set(t.map(o=>this._getConcreteValue(o)));t.forEach(o=>this._markSelected(o)),e.filter(o=>!n.has(this._getConcreteValue(o,n))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(t){t=this._getConcreteValue(t),this.isSelected(t)||(this._multiple||this._unmarkAll(),this.isSelected(t)||this._selection.add(t),this._emitChanges&&this._selectedToEmit.push(t))}_unmarkSelected(t){t=this._getConcreteValue(t),this.isSelected(t)&&(this._selection.delete(t),this._emitChanges&&this._deselectedToEmit.push(t))}_unmarkAll(){this.isEmpty()||this._selection.forEach(t=>this._unmarkSelected(t))}_verifyValueAssignment(t){t.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(t,e){if(this.compareWith){e=e??this._selection;for(let n of e)if(this.compareWith(t,n))return n;return t}else return t}};var An=(()=>{class i{_listeners=[];notify(e,n){for(let r of this._listeners)r(e,n)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(n=>e!==n)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(n){return new(n||i)};static ɵprov=k({token:i,factory:i.ɵfac})}return i})();var Xd=[`trigger`];var Zd=[`panel`];var Jd=[[[`mat-select-trigger`]],`*`];var el=[`mat-select-trigger`,`*`];function tl(i,t){if(i&1&&(oi$1(0,`span`,4),c_(1),Ds$1()),i&2){let e=fc();gs$1(),pA(e.placeholder)}}function il(i,t){i&1&&As$1(0)}function nl(i,t){if(i&1&&(oi$1(0,`span`,11),c_(1),Ds$1()),i&2){let e=fc(2);gs$1(),pA(e.triggerValue)}}function rl(i,t){if(i&1&&(oi$1(0,`span`,5),uc(1,il,1,0)(2,nl,2,1,`span`,11),Ds$1()),i&2){let e=fc();gs$1(),lc(e.customTrigger?1:2)}}function ol(i,t){if(i&1){let e=kk();oi$1(0,`div`,12,1),Bt(`keydown`,function(r){Pv(e);return kv(fc()._handleKeydown(r))}),As$1(2,1),Ds$1()}if(i&2){let e=fc();ix(e.panelClass),jt(`mat-select-panel-animations-enabled`,!e._animationsDisabled)(`mat-primary`,e._parentFormField?.color===`primary`)(`mat-accent`,e._parentFormField?.color===`accent`)(`mat-warn`,e._parentFormField?.color===`warn`)(`mat-undefined`,!e._parentFormField?.color),Qn(`id`,e.id+`-panel`)(`aria-multiselectable`,e.multiple)(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e._getPanelAriaLabelledby())}}var al=new I(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=m(se);return()=>tu$1(i)}});var sl=new I(`MAT_SELECT_CONFIG`);var Sa=new I(`MatSelectTrigger`);var In=class{source;value;constructor(t,e){this.source=t,this.value=e}};var Of=(()=>{class i{_viewportRuler=m(lr);_changeDetectorRef=m($t);_elementRef=m(we$1);_dir=m(Wj,{optional:!0});_idGenerator=m(hu);_renderer=m(ut);_parentFormField=m(St,{optional:!0});ngControl=m(go$1,{self:!0,optional:!0});_liveAnnouncer=m(kj);_defaultOptions=m(sl,{optional:!0});_animationsDisabled=sa$1();_popoverLocation;_initialized=new q;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let n=this.options.toArray()[e];if(n){let r=this.panel.nativeElement,o=Due(e,this.options,this.optionGroups),a=n._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=Aue(a.offsetTop,a.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new In(this,e)}_scrollStrategyFactory=m(al);_panelOpen=!1;_compareWith=(e,n)=>e===n;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new q;_errorStateTracker;stateChanges=new q;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=H(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(FE.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=_a$1(()=>{let e=this.options;return e?e.changes.pipe(ya(e),xt$1(()=>SM(...e.map(n=>n.onSelectionChange)))):this._initialized.pipe(xt$1(()=>this.optionSelectionChanges))});openedChange=new ve;_openedStream=this.openedChange.pipe(mt(e=>e),ne(()=>{}));_closedStream=this.openedChange.pipe(mt(e=>!e),ne(()=>{}));selectionChange=new ve;valueChange=new ve;constructor(){let e=m(sue),n=m(oG,{optional:!0}),r=m(cG,{optional:!0}),o=m(new Od$1(`tabindex`),{optional:!0}),a=m(iu,{optional:!0}),d=m(et,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new xb(e,d||this.ngControl,r,n,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=a?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new kt(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(hr(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(hr(this._destroy)).subscribe(e=>{e.added.forEach(n=>n.select()),e.removed.forEach(n=>n.deselect())}),this.options.changes.pipe(ya(null),hr(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),n=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute(`aria-labelledby`,e):r.removeAttribute(`aria-labelledby`)}n&&(this._previousControl!==n.control&&(this._previousControl!==void 0&&n.disabled!==null&&n.disabled!==this.disabled&&(this.disabled=n.disabled),this._previousControl=n.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(gt$1(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{n(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,n=this._renderer.listen(e,`animationend`,o=>{o.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(n=>n.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let n=e.keyCode,r=n===40||n===38||n===37||n===39,o=n===13||n===32,a=this._keyManager;if(!a.isTyping()&&o&&!kh$1(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let d=this.selected;a.onKeydown(e);let s=this.selected;s&&d!==s&&this._liveAnnouncer.announce(s.viewValue,1e4)}}_handleOpenKeydown(e){let n=this._keyManager,r=e.keyCode,o=r===40||r===38,a=n.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!a&&(r===13||r===32)&&n.activeItem&&!kh$1(e))e.preventDefault(),n.activeItem._selectViaInteraction();else if(!a&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let d=this.options.some(s=>!s.disabled&&!s.selected);this.options.forEach(s=>{s.disabled||(d?s.select():s.deselect())})}else{let d=n.activeItemIndex;n.onKeydown(e),this._multiple&&o&&e.shiftKey&&n.activeItem&&n.activeItemIndex!==d&&n.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!kh$1(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(n=>n.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(n=>this._selectOptionByValue(n)),this._sortValues();else{let n=this._selectOptionByValue(e);n?this._keyManager.updateActiveItem(n):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let n=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return n&&this._selectionModel.select(n),n}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof Zd$1?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new oy(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=SM(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(hr(e)).subscribe(n=>{this._onSelect(n.source,n.isUserInput),n.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),SM(...this.options.map(n=>n._stateChanges)).pipe(hr(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,n){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),n&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),n&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((n,r)=>this.sortComparator?this.sortComparator(n,r,e):e.indexOf(n)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let n;this.multiple?n=this.selected.map(r=>r.value):n=this.selected?this.selected.value:e,this._value=n,this.valueChange.emit(n),this._onChange(n),this.selectionChange.emit(this._getChangeEvent(n)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let n=0;n<this.options.length;n++)if(!this.options.get(n).disabled){e=n;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,n=e?e+` `:``;return this.ariaLabelledby?n+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute(`aria-describedby`,e.join(` `)):n.removeAttribute(`aria-describedby`)}onContainerClick(e){let n=wn$1(e);n&&(n.tagName===`MAT-OPTION`||n.classList.contains(`cdk-overlay-backdrop`)||n.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(n){return new(n||i)};static ɵcmp=Tt({type:i,selectors:[[`mat-select`]],contentQueries:function(n,r,o){if(n&1&&Id$1(o,Sa,5)(o,Lb,5)(o,r$,5),n&2){let a;pc(a=mc())&&(r.customTrigger=a.first),pc(a=mc())&&(r.options=a),pc(a=mc())&&(r.optionGroups=a)}},viewQuery:function(n,r){if(n&1&&Td$1(Xd,5)(Zd,5)(nE,5),n&2){let o;pc(o=mc())&&(r.trigger=o.first),pc(o=mc())&&(r.panel=o.first),pc(o=mc())&&(r._overlayDir=o.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(n,r){n&1&&Bt(`keydown`,function(a){return r._handleKeydown(a)})(`focus`,function(){return r._onFocus()})(`blur`,function(){return r._onBlur()}),n&2&&(Qn(`id`,r.id)(`tabindex`,r.disabled?-1:r.tabIndex)(`aria-controls`,r.panelOpen?r.id+`-panel`:null)(`aria-expanded`,r.panelOpen)(`aria-label`,r.ariaLabel||null)(`aria-required`,r.required.toString())(`aria-disabled`,r.disabled.toString())(`aria-invalid`,r.errorState)(`aria-activedescendant`,r._getAriaActiveDescendant()),jt(`mat-mdc-select-disabled`,r.disabled)(`mat-mdc-select-invalid`,r.errorState)(`mat-mdc-select-required`,r.required)(`mat-mdc-select-empty`,r.empty)(`mat-mdc-select-multiple`,r.multiple)(`mat-select-open`,r.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,Dn$1],disableRipple:[2,`disableRipple`,`disableRipple`,Dn$1],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:IF(e)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,Dn$1],placeholder:`placeholder`,required:[2,`required`,`required`,Dn$1],multiple:[2,`multiple`,`multiple`,Dn$1],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,Dn$1],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,IF],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,Dn$1]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[Pt([{provide:xt,useExisting:i},{provide:n$,useExisting:i}]),It],ngContentSelectors:el,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(n,r){if(n&1&&(hc(Jd),oi$1(0,`div`,2,0),Bt(`click`,function(){return r.open()}),oi$1(3,`div`,3),uc(4,tl,2,1,`span`,4)(5,rl,3,1,`span`,5),Ds$1(),oi$1(6,`div`,6)(7,`div`,7),Kv(),oi$1(8,`svg`,8),ao(9,`path`,9),Ds$1()()()(),VD(10,ol,3,16,`ng-template`,10),Bt(`detach`,function(){return r.close()})(`backdropClick`,function(){return r.close()})(`overlayKeydown`,function(a){return r._handleOverlayKeydown(a)})),n&2){let o=$k(1);gs$1(3),Qn(`id`,r._valueId),gs$1(),lc(r.empty?4:5),gs$1(6),Ts$1(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,r._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,r._scrollStrategy)(`cdkConnectedOverlayOrigin`,r._preferredOverlayOrigin||o)(`cdkConnectedOverlayPositions`,r._positions)(`cdkConnectedOverlayWidth`,r._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,r._popoverLocation)}},dependencies:[Zd$1,nE],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2})}return i})();var Ff=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵdir=J$1({type:i,selectors:[[`mat-select-trigger`]],features:[Pt([{provide:Sa,useExisting:i}])]})}return i})();var Df=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Ve({type:i});static ɵinj=Le({imports:[pr,Pue,ua$1,Gd$1,wt,Pue]})}return i})();var dl=`_LOCKERS_`;var ll=`_LOCKER_BANKS_`;var cl=`_LOCKERS_`;var Tn=null;var On=null;var Fn=null;var Dn=null;var Rt=null;var Ci=new Map;async function wa(){return Rt||(Rt=une({hidden:!0,limit:500}).then(i=>i.data).catch(()=>[])),Rt}async function ml(i){return Ci.has(i)||Ci.set(i,sne({category_id:i,limit:500}).then(t=>t.data).catch(()=>[])),Ci.get(i)}async function ul(i){let t=wi(await wa(),i);if(t||(Rt=null,t=wi(await wa(),i),t))return t;let e=await ha({name:i,hidden:!0});return Rt=null,e}async function fl(i,t){let e=wi(await ml(i),t);if(e)return e;let n=await pa({name:t,brand:`PlaceOS`,category_id:i});return Ci.delete(i),n}async function Ca(i){return(await fl((await ul(dl)).id,i)).id}function hl(){return Tn?Promise.resolve(Tn):(On||(On=Ca(ll).then(i=>(Tn=i,i))),On)}function pl(){return Fn?Promise.resolve(Fn):(Dn||(Dn=Ca(cl).then(i=>(Fn=i,i))),Dn)}async function Na(i){if(!i?.length)return[];let t=await hl();return Zie(await Promise.all(i.map(n=>ine({zone_id:n,type_id:t,limit:500}).then(r=>r.data))))}async function Ma(i){if(!i?.length)return[];let t=await pl();return Zie(await Promise.all(i.map(n=>ine({zone_id:n,type_id:t,limit:500}).then(r=>r.data))))}function _l(i,t){if(i&1&&(oi$1(0,`main`,2),ao(1,`icon`,5)(2,`p`,6),Ds$1()),i&2){let e=fc();gs$1(),Ts$1(`icon`,e.icon()),gs$1(),Ts$1(`innerHTML`,e.content(),vL)}}function gl(i,t){if(i&1&&(oi$1(0,`main`,3)(1,`div`,7),ao(2,`mat-spinner`,8),oi$1(3,`p`),c_(4),Ds$1()()()),i&2){let e=fc();gs$1(4),pA(e.loading())}}function bl(i,t){if(i&1){let e=kk();oi$1(0,`footer`,4)(1,`button`,9),c_(2),Lx(3,`translate`),Ds$1(),oi$1(4,`button`,10),Bt(`click`,function(){Pv(e);return kv(fc().onConfirm())}),c_(5),Lx(6,`translate`),Ds$1()()}if(i&2){let e=fc();gs$1(2),gc(` `,kx(3,2,e.cancel_text()),` `),gs$1(3),gc(` `,kx(6,4,e.confirm_text()),` `)}}var yl={height:`auto`};async function th(i,t){let e=t.open(vl,m$1(l({},yl),{data:i}));return m$1(l({},await Promise.race([e.componentInstance.event.pipe(zt(n=>n.reason===`done`)).toPromise(),e.afterClosed().toPromise()])),{loading:n=>e.componentInstance.loading?.set(n),close:()=>e.close()})}var vl=(()=>{class i extends on$1{constructor(){super(),this._dialog_ref=m(ed$1),this._data=m(kC),this.loading=H(``),this.event=new ve,this.title=H(this._data.title||`COMMON.CONFIRM`),this.content=H(this._data.content||`Are you sure?`),this.confirm_text=H(this._data.confirm_text||`COMMON.ACCEPT`),this.cancel_text=H(this._data.cancel_text||`COMMON.CANCEL`),this.icon=H(this._data.icon||{class:`material-symbols-rounded`,content:`done`}),this.disableClose=()=>this._dialog_ref.disableClose=!0,this.enableClose=()=>this._dialog_ref.disableClose=!1}ngOnInit(){this._data.close_delay&&this.timeout(`close`,()=>this._dialog_ref.close(),this._data.close_delay)}onConfirm(){this.event.emit({reason:`done`})}static{this.ɵfac=function(n){return new(n||i)}}static{this.ɵcmp=Tt({type:i,selectors:[[`confirm-modal`]],features:[it],decls:6,vars:3,consts:[[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`h-14`,`w-[calc(100%-1rem)]`,`min-w-[20rem]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[1,`flex`,`w-md`,`max-w-[85vw]`,`flex-col`,`items-center`,`space-y-4`,`p-4`,`sm:h-auto`],[`loading`,``],[1,`bg-base-200`,`sticky`,`bottom-0`,`m-2`,`flex`,`items-center`,`justify-center`,`space-x-2`,`rounded-sm`,`border-none`,`p-2`],[1,`text-5xl`,3,`icon`],[`content`,``,1,`text-center`,3,`innerHTML`],[1,`flex`,`h-48`,`w-full`,`flex-col`,`items-center`,`justify-center`,`space-y-4`],[`diameter`,`32`],[`btn`,``,`matRipple`,``,`mat-dialog-close`,``,1,`inverse`,`bg-base-100`,`flex-1`],[`btn`,``,`matRipple`,``,`name`,`accept`,1,`flex-1`,3,`click`]],template:function(n,r){n&1&&(oi$1(0,`header`,0)(1,`h2`,1),c_(2),Ds$1()(),uc(3,_l,3,2,`main`,2)(4,gl,5,1,`main`,3),uc(5,bl,7,6,`footer`,4)),n&2&&(gs$1(2),pA(r.title()),gs$1(),lc(r.loading()?4:3),gs$1(2),lc(r.loading()?-1:5))},dependencies:[uo,mo,iY,ly,uy,KW,qW,f],encapsulation:2})}}return i})();var Ea=10;var ka=1;var xl=.05;var Ra=16;var Aa=4;var Ia=2;var Ta=8192;function Oa(){if(typeof window>`u`||!window.matchMedia)return!1;let i=window.matchMedia(`(pointer: coarse)`).matches,t=window.matchMedia(`(max-width: 1024px)`).matches;return i&&t}function Sl(i){return i.replace(/[!"#$%&'()*+,.\/;<=>?@[\\\]^`{|}~]/g,`\\$&`).split(` `).map(e=>e.replace(/^\\/,``)).join(` `)}function wl(i){let t=0,e=0,n=0,r=0,o=i.getAttribute(`viewBox`);if(o){let a=o.split(/[\s,]+/).map(parseFloat);a.length>=4&&(t=a[0]||0,e=a[1]||0,n=a[2],r=a[3])}if(!n||!r){let a=i.getAttribute(`width`),d=i.getAttribute(`height`);n=a?parseFloat(a):0,r=d?parseFloat(d):0}if(!n||!r)try{let a=i.getBBox();t=a.x,e=a.y,n=a.width,r=a.height}catch{}return{x:t,y:e,width:n||1,height:r||1}}function Cl(i,t){let e=i.getBBox(),n=t&&i.getScreenCTM?.();if(!n)return e;let r=t.multiply(n),o=[{x:e.x,y:e.y},{x:e.x+e.width,y:e.y},{x:e.x,y:e.y+e.height},{x:e.x+e.width,y:e.y+e.height}].map(s=>({x:r.a*s.x+r.c*s.y+r.e,y:r.b*s.x+r.d*s.y+r.f})),a=Math.min(...o.map(s=>s.x)),d=Math.min(...o.map(s=>s.y));return{x:a,y:d,width:Math.max(...o.map(s=>s.x))-a,height:Math.max(...o.map(s=>s.y))-d}}function Nl(i){let t=new Map,e=document.createElement(`div`);e.style.position=`absolute`,e.style.visibility=`hidden`,e.style.pointerEvents=`none`,e.style.left=`-9999px`,e.style.top=`-9999px`,e.innerHTML=i,document.body.appendChild(e);let n=e.querySelector(`svg`);if(!n)return document.body.removeChild(e),{bounds:t,aspect_ratio:1};let{x:r,y:o,width:a,height:d}=wl(n),s=a/d,l=n.getScreenCTM?.(),m=l?l.inverse():null;return n.querySelectorAll(`[id]`).forEach(p=>{let x=p.getAttribute(`id`);if(x&&typeof p.getBBox==`function`)try{let L=Cl(p,m);t.set(x,{x:(L.x-r)/a,y:(L.y-o)/d,w:L.width/a,h:L.height/d})}catch{}}),document.body.removeChild(e),{bounds:t,aspect_ratio:s}}var Pn=class{constructor(){this.store=new Map}get(t){if(!this.store.has(t)){let e=this._load(t);e.catch(()=>this.store.delete(t)),this.store.set(t,e)}return this.store.get(t)}async _load(t){for(;!Jf();)await new Promise(l=>setTimeout(l,300));let e={},n=ln$1(),r=new URL(t,location.origin).origin===location.origin;n&&r&&(tse()?Rn(`/`):e.headers=n===`x-api-key`?{"x-api-key":tu()}:{Authorization:`Bearer ${n}`});let o=await fetch(t,e);if(!o.ok)throw new Error(`Failed to load map`);let a=await o.text(),{bounds:d,aspect_ratio:s}=Nl(a);return{raw_data:a,element_bounds:d,aspect_ratio:s}}};var Da=new Pn;function Pa(i){return Da.get(i)}var Fa=class{constructor(t){this.map_image=null,this.styles_string=``,this.center={x:.5,y:.5},this.zoom=1,this.fixed_resolution_megapixels=0,this.disable_zoom=!1,this.disable_pan=!1,this.onViewChange=null,this.debug=!1,this.debug_info={pointer:null,hover_id:``,highlight_id:``,last_draw_ms:0,draws_last_second:0},this._map_path=``,this._image_generation=0,this._texture_width=0,this._texture_height=0,this._image_frame_id=null,this._draw_frame_id=null,this._notify_frame_id=null,this._debug_draw_count=0,this._debug_count_start=0,this._events=new Map,this._resize_observer=null,this._pointers=new Map,this._is_panning=!1,this._pinch_distance=null,this._pan_start_time=null,this._pan_exceeded_threshold=!1,this._overlay_instances=[],this._actions=[],this._action_event_handlers=new Map,this._action_pointerdown_pos=null,this._action_last_triggered=new Map,this.container=t,this.id=`m_view-${Wie(8,`0123456789ABCDEF`)}`,this.container.innerHTML=``,this.container.style.overflow=`hidden`,this.container.style.touchAction=`none`,this.canvas=document.createElement(`canvas`),this.canvas.style.cssText=`position: absolute; inset: 0; pointer-events: none;`,this._ctx=this.canvas.getContext(`2d`),this.container.appendChild(this.canvas),this.overlays=document.createElement(`div`),this.overlays.id=`${this.id}-overlays`,this.overlays.style.cssText=`position: absolute; inset: 0; z-index: 0; pointer-events: none;`,this.container.appendChild(this.overlays),this._resize_observer=new ResizeObserver(()=>this._onResize()),this._resize_observer.observe(this.container),this._events.set(`wheel`,e=>this._onWheel(e)),this.container.addEventListener(`wheel`,this._events.get(`wheel`),{passive:!1}),this._events.set(`pointerdown`,e=>this._onPointerDown(e)),this._events.set(`pointermove`,e=>this._onPointerMove(e)),this._events.set(`pointerup`,e=>this._onPointerUp(e)),this.container.addEventListener(`pointerdown`,this._events.get(`pointerdown`)),window.addEventListener(`pointermove`,this._events.get(`pointermove`)),window.addEventListener(`pointerup`,this._events.get(`pointerup`)),window.addEventListener(`pointercancel`,this._events.get(`pointerup`))}async setMap(t){this._map_path=t;let e=await Da.get(t);this._map_path===t&&(this.map=e,this._renderMapImage())}setCenter(t){let e=this._clampCenter(t);e.x===this.center.x&&e.y===this.center.y||(this.center=e,this._renderMap())}setZoom(t){t=Math.max(ka,Math.min(Ea,t)),t!==this.zoom&&(this.zoom=t,this._renderMap())}setFixedResolution(t){let e=t>0?t:0;this.fixed_resolution_megapixels!==e&&(this.fixed_resolution_megapixels=e,this.disable_zoom&&this._renderMapImage())}setOptions(t){let e=this.disable_zoom;this.disable_zoom=!!t?.disable_zoom,this.disable_pan=!!t?.disable_pan,e!==this.disable_zoom&&this._renderMapImage()}get overlay_count(){return this._overlay_instances.length}get texture_mode(){return this.disable_zoom?this.fixed_resolution_megapixels?`fixed ${this.fixed_resolution_megapixels}MP`:`fixed ${Ia}\xD7 container`:Oa()?`mobile ${Aa}MP`:`desktop ${Ra}MP`}setDebug(t){if(this.debug!==t){if(this.debug=t,t){let e=o=>{this.debug_info.pointer=this._eventToMap(o),this.debug_info.hover_id=this._elementAt(this.debug_info.pointer),this._renderMap()},n=()=>{this.debug_info.pointer=null,this.debug_info.hover_id=``,this._renderMap()},r=o=>{let a=this._eventToMap(o);console.log(`[MAP][DEBUG] Click at { x: ${a.x.toFixed(4)}, y: ${a.y.toFixed(4)} } on "${this._elementAt(a)||`no element`}"`)};this._events.set(`debug_move`,e),this._events.set(`debug_leave`,n),this._events.set(`debug_click`,r),this.container.addEventListener(`pointermove`,e),this.container.addEventListener(`pointerleave`,n),this.container.addEventListener(`click`,r)}else{for(let e of[`debug_move`,`debug_leave`,`debug_click`]){let n=this._events.get(e);if(!n)continue;let r=e===`debug_move`?`pointermove`:e===`debug_leave`?`pointerleave`:`click`;this.container.removeEventListener(r,n),this._events.delete(e)}this.debug_info.pointer=null,this.debug_info.hover_id=``,this.debug_info.highlight_id=``}this._applyOverlayOutlines(),this._renderMap()}}setDebugHighlight(t){this.debug_info.highlight_id!==t&&(this.debug_info.highlight_id=t,this.debug&&this._renderMap())}focusOn(t){let e=this.map?.element_bounds.get(t);e&&(this.setCenter({x:e.x+e.w/2,y:e.y+e.h/2}),this._notifyViewChange())}setOverlays(t){for(let e of this._overlay_instances)e.element.remove();this._overlay_instances=[];for(let e of t){let n=document.createElement(`div`);n.style.cssText=`position: absolute; top: 0; left: 0; display: flex; align-items: center; justify-content: center; transform-origin: center center; pointer-events: none;`,e.z_index!=null&&(n.style.zIndex=`${e.z_index}`),e.hover&&n.classList.add(`map-overlay-hover`),typeof e.contents==`string`?n.innerHTML=e.contents:n.appendChild(e.contents),this.overlays.appendChild(n),this._overlay_instances.push({overlay:e,element:n})}this._applyOverlayOutlines(),this._updateOverlayPositions()}_applyOverlayOutlines(){for(let{element:t}of this._overlay_instances)t.style.outline=this.debug?`1px dashed #f0f`:``}_elementAt(t){let e=``,n=Number.POSITIVE_INFINITY;for(let[r,o]of this.map?.element_bounds||[]){if(t.x<o.x||t.x>o.x+o.w||t.y<o.y||t.y>o.y+o.h)continue;let a=o.w*o.h;a<n&&(e=r,n=a)}return e}setActions(t){for(let[n,r]of this._action_event_handlers)this.container.removeEventListener(n,r);this._action_event_handlers.clear(),this._action_last_triggered.clear(),this._actions=t;let e=new Set(t.flatMap(n=>n.events));for(let n of e){let r=o=>this._handleActionEvent(n,o);this._action_event_handlers.set(n,r),this.container.addEventListener(n,r)}if(!this._events.has(`action_pointerdown`)){let n=r=>{this._action_pointerdown_pos={x:r.clientX,y:r.clientY}};this._events.set(`action_pointerdown`,n),this.container.addEventListener(`pointerdown`,n)}}setStyles(t){let e=``;for(let[n,r]of Object.entries(t))r&&(e+=`svg ${Sl(n)} { ${r} }
`);e!==this.styles_string&&(this.styles_string=e,this._renderMapImage())}destroy(){this.setDebug(!1),this._resize_observer?.disconnect(),this._resize_observer=null,this.container.removeEventListener(`wheel`,this._events.get(`wheel`)),this.container.removeEventListener(`pointerdown`,this._events.get(`pointerdown`)),window.removeEventListener(`pointermove`,this._events.get(`pointermove`)),window.removeEventListener(`pointerup`,this._events.get(`pointerup`)),window.removeEventListener(`pointercancel`,this._events.get(`pointerup`));for(let[t,e]of this._action_event_handlers)this.container.removeEventListener(t,e);if(this._action_event_handlers.clear(),this._action_last_triggered.clear(),this._actions=[],this._events.has(`action_pointerdown`)){let t=this._events.get(`action_pointerdown`);this.container.removeEventListener(`pointerdown`,t),this._events.delete(`action_pointerdown`)}this._action_pointerdown_pos=null,this._image_generation++,this._map_path=``,this._image_frame_id!==null&&(cancelAnimationFrame(this._image_frame_id),this._image_frame_id=null),this._draw_frame_id!==null&&(cancelAnimationFrame(this._draw_frame_id),this._draw_frame_id=null),this._notify_frame_id!==null&&(cancelAnimationFrame(this._notify_frame_id),this._notify_frame_id=null);for(let t of this._overlay_instances)t.element.remove();this._overlay_instances=[],this.map_image=null,this.container.innerHTML=``}_viewScale(t=this.zoom){let e=this.map?.aspect_ratio||1,n=this.container.clientWidth||1,r=this.container.clientHeight||1,o=Math.min(r,n/e)*(1-xl*2)*t;return{x:o*e,y:o}}_eventToMap(t,e=this.container.getBoundingClientRect()){let n=this._viewScale();return{x:(t.clientX-e.left-e.width/2)/n.x+this.center.x,y:(t.clientY-e.top-e.height/2)/n.y+this.center.y}}_clampCenter(t){return{x:Math.max(0,Math.min(1,t.x)),y:Math.max(0,Math.min(1,t.y))}}_zoomAboutPoint(t,e){let n=this.zoom;if(t=Math.max(ka,Math.min(Ea,t)),t===n)return;let r=this.container.getBoundingClientRect(),o=this._eventToMap({clientX:e.x,clientY:e.y},r),a=this._viewScale(t),d={x:o.x-(e.x-r.left-r.width/2)/a.x,y:o.y-(e.y-r.top-r.height/2)/a.y};this.zoom=t,this.center=this._clampCenter(d),this._renderMap(),this._notifyViewChange()}_onWheel(t){if(t.preventDefault(),this.disable_zoom||!this.map_image)return;let e=t.deltaY>0?.97:1.03;this._zoomAboutPoint(this.zoom*e,{x:t.clientX,y:t.clientY})}_onPointerDown(t){if(this.map_image&&t.button===0){if(this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY}),this._pointers.size===2){this._is_panning=!1;let[e,n]=[...this._pointers.values()];this._pinch_distance=Math.hypot(n.x-e.x,n.y-e.y);return}this.disable_pan||(this._is_panning=!0,this._pan_start_time=Date.now(),this._pan_exceeded_threshold=!1,this.container.style.cursor=`grabbing`)}}_onPointerMove(t){let e=this._pointers.get(t.pointerId);if(!e)return;if(this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY}),this._pointers.size===2&&this._pinch_distance){if(this.disable_zoom)return;let[r,o]=[...this._pointers.values()],a=Math.hypot(o.x-r.x,o.y-r.y);a>0&&(this._zoomAboutPoint(this.zoom*(a/this._pinch_distance),{x:(r.x+o.x)/2,y:(r.y+o.y)/2}),this._pinch_distance=a);return}if(!this._is_panning)return;this._pan_start_time&&!this._pan_exceeded_threshold&&Date.now()-this._pan_start_time>200&&(this._pan_exceeded_threshold=!0);let n=this._viewScale();this.center=this._clampCenter({x:this.center.x-(t.clientX-e.x)/n.x,y:this.center.y-(t.clientY-e.y)/n.y}),this._renderMap(),this._notifyViewChange()}_onPointerUp(t){this._pointers.delete(t.pointerId),this._pointers.size<2&&(this._pinch_distance=null),this._is_panning&&this._pointers.size===0&&(this._is_panning=!1,this.container.style.cursor=``)}_onResize(){if(this._renderMap(),this.disable_zoom&&!this.fixed_resolution_megapixels){let{width:t,height:e}=this._textureDimensions();(t!==this._texture_width||e!==this._texture_height)&&this._renderMapImage()}}_targetTexturePixels(){return this.disable_zoom?this.fixed_resolution_megapixels>0?this.fixed_resolution_megapixels*1e6:(this.container.clientWidth||1)*(this.container.clientHeight||1)*Ia:(Oa()?Aa:Ra)*1e6}_textureDimensions(){let t=this.map?.aspect_ratio||1,e=this._targetTexturePixels(),n=Math.sqrt(e/t),r=n*t;return{width:Math.max(1,Math.min(Ta,Math.round(r))),height:Math.max(1,Math.min(Ta,Math.round(n)))}}_renderMapImage(){this._image_frame_id!==null&&cancelAnimationFrame(this._image_frame_id),this._image_frame_id=requestAnimationFrame(()=>{this._image_frame_id=null,this._doRenderMapImage()})}_doRenderMapImage(){if(!this.map?.raw_data)return;let t=++this._image_generation,n=new DOMParser().parseFromString(this.map.raw_data,`image/svg+xml`),r=n.querySelector(`svg`);if(!r)return;let{width:o,height:a}=this._textureDimensions();if(this._texture_width=o,this._texture_height=a,!r.getAttribute(`viewBox`)){let p=parseFloat(r.getAttribute(`width`)||``),x=parseFloat(r.getAttribute(`height`)||``);p>0&&x>0&&r.setAttribute(`viewBox`,`0 0 ${p} ${x}`)}if(r.getAttribute(`viewBox`)&&(r.setAttribute(`width`,`${o}`),r.setAttribute(`height`,`${a}`)),this.styles_string){let p=n.createElementNS(`http://www.w3.org/2000/svg`,`style`);p.textContent=this.styles_string,r.appendChild(p)}let s=new XMLSerializer().serializeToString(r),l=new Blob([s],{type:`image/svg+xml`}),m=URL.createObjectURL(l),u=new Image;u.onload=()=>{if(URL.revokeObjectURL(m),t!==this._image_generation)return;let p=document.createElement(`canvas`);p.width=o,p.height=a;let x=p.getContext(`2d`);if(!x){console.error(`Failed to get canvas context`);return}x.drawImage(u,0,0,o,a),this.map_image=p,this._renderMap()},u.onerror=()=>{URL.revokeObjectURL(m),console.error(`Failed to load map image`)},u.src=m}_renderMap(){this._draw_frame_id===null&&(this._draw_frame_id=requestAnimationFrame(()=>{this._draw_frame_id=null,this._drawMap()}))}_drawMap(){if(!this.map_image)return;let t=this.debug?performance.now():0,e=this.container.clientWidth||1,n=this.container.clientHeight||1,r=window.devicePixelRatio||1;(this.canvas.width!==Math.round(e*r)||this.canvas.height!==Math.round(n*r))&&(this.canvas.width=Math.round(e*r),this.canvas.height=Math.round(n*r),this.canvas.style.width=`${e}px`,this.canvas.style.height=`${n}px`);let o=this._viewScale(),a=this.center.x-e/2/o.x,d=this.center.y-n/2/o.y,s=Math.max(0,a),l=Math.max(0,d),m=Math.min(1,a+e/o.x),u=Math.min(1,d+n/o.y);if(this._ctx.setTransform(r,0,0,r,0,0),this._ctx.clearRect(0,0,e,n),m>s&&u>l){this._ctx.imageSmoothingEnabled=!0,this._ctx.imageSmoothingQuality=`high`;let p=this.map_image.width,x=this.map_image.height;this._ctx.drawImage(this.map_image,s*p,l*x,(m-s)*p,(u-l)*x,(s-a)*o.x,(l-d)*o.y,(m-s)*o.x,(u-l)*o.y)}if(this.debug){this._drawDebugInfo(o,a,d);let p=performance.now();this.debug_info.last_draw_ms=p-t,this._debug_draw_count++,p-this._debug_count_start>=1e3&&(this.debug_info.draws_last_second=this._debug_draw_count,this._debug_draw_count=0,this._debug_count_start=p)}this._updateOverlayPositions()}_drawDebugInfo(t,e,n){if(!this.map)return;let r=this._ctx,o=this.container.clientWidth||1,a=this.container.clientHeight||1,d=u=>(u-e)*t.x,s=u=>(u-n)*t.y;r.strokeStyle=`#f0f`,r.lineWidth=2,r.strokeRect(d(0),s(0),t.x,t.y),r.strokeStyle=`rgba(0, 200, 255, 0.6)`,r.lineWidth=1;for(let[,u]of this.map.element_bounds){let p=d(u.x),x=s(u.y),L=u.w*t.x,ye=u.h*t.y;p+L<0||x+ye<0||p>o||x>a||r.strokeRect(p,x,L,ye)}let l=this.debug_info.highlight_id||this.debug_info.hover_id,m=l?this.map.element_bounds.get(l):null;if(m){let u=d(m.x),p=s(m.y);r.fillStyle=`rgba(255, 0, 255, 0.25)`,r.fillRect(u,p,m.w*t.x,m.h*t.y);let x=`#${l}`;r.font=`12px monospace`,r.fillStyle=`rgba(0, 0, 0, 0.7)`,r.fillRect(u,p-16,r.measureText(x).width+8,16),r.fillStyle=`#fff`,r.fillText(x,u+4,p-4)}r.strokeStyle=`#f00`,r.lineWidth=1,r.beginPath(),r.moveTo(o/2-8,a/2),r.lineTo(o/2+8,a/2),r.moveTo(o/2,a/2-8),r.lineTo(o/2,a/2+8),r.stroke()}_updateOverlayPositions(){if(!this.map?.element_bounds)return;let t=this.container.clientWidth||1,e=this.container.clientHeight||1,n=this._viewScale(),r=s=>({x:(s.x-this.center.x)*n.x+t/2,y:(s.y-this.center.y)*n.y+e/2}),o=(s,l)=>{s.last_display!==l&&(s.last_display=l,s.element.style.display=l)},a=(s,l)=>{s.last_transform!==l&&(s.last_transform=l,s.element.style.transform=l)},d=(s,l,m)=>{let u=`${l} ${m}`;s.last_size!==u&&(s.last_size=u,s.element.style.width=l,s.element.style.height=m)};for(let s of this._overlay_instances){let{overlay:l$4}=s;if(l$4.min_zoom&&this.zoom<l$4.min_zoom){o(s,`none`);continue}let m;if(typeof l$4.ref==`string`){if(m=this.map.element_bounds.get(l$4.ref),!m){o(s,`none`);continue}}else m=l({w:0,h:0},l$4.ref);if(o(s,``),l$4.type===`box`&&m.w>0&&m.h>0){let u=r({x:m.x,y:m.y});a(s,`translate(${u.x}px, ${u.y}px)`),d(s,`${m.w*n.x}px`,`${m.h*n.y}px`)}else{let u=r({x:m.x+m.w/2,y:m.y+m.h/2});d(s,``,``),a(s,l$4.scale_with_zoom?`translate(${u.x}px, ${u.y}px) translate(-50%, -50%) scale(${this.zoom})`:`translate(${u.x}px, ${u.y}px) translate(-50%, -50%)`)}}}_handleActionEvent(t,e){if(!this.map_image||!this.map?.element_bounds||this._pan_exceeded_threshold)return;if(t===`click`&&this._action_pointerdown_pos){let l=e.clientX-this._action_pointerdown_pos.x,m=e.clientY-this._action_pointerdown_pos.y;if(Math.hypot(l,m)>5)return}let n=this._eventToMap(e);if(n.x<0||n.x>1||n.y<0||n.y>1)return;let r=null,o=Number.POSITIVE_INFINITY;for(let l of this._actions){if(!l.events.includes(t))continue;if(l.ref===`*`){r||(r=l);continue}let m=this.map.element_bounds.get(l.ref);if(!m||n.x<m.x||n.x>m.x+m.w||n.y<m.y||n.y>m.y+m.h)continue;let u=m.w*m.h;(!r||r.ref===`*`||(l.priority||0)>(r.priority||0)||(l.priority||0)===(r.priority||0)&&u<o)&&(r=l,o=u)}if(!r)return;let a=Date.now(),d=`${r.ref}:${t}`;a-(this._action_last_triggered.get(d)||0)<300||(this._action_last_triggered.set(d,a),r.callback(n))}_notifyViewChange(){!this.onViewChange||this._notify_frame_id!==null||(this._notify_frame_id=requestAnimationFrame(()=>{this._notify_frame_id=null,this.onViewChange?.({zoom:this.zoom,center:l({},this.center)})}))}};var Ml=[`input`];var El=[`formField`];var kl=[`*`];var Ni=class{source;value;constructor(t,e){this.source=t,this.value=e}};var Rl={provide:$s$1,useExisting:Et$1(()=>Il),multi:!0};var La=new I(`MatRadioGroup`);var Al=new I(`mat-radio-default-options`,{providedIn:`root`,factory:()=>({color:`accent`,disabledInteractive:!1})});var Il=(()=>{class i{_changeDetector=m($t);_value=null;_name=m(hu).getId(`mat-radio-group-`);_selected=null;_isInitialized=!1;_labelPosition=`after`;_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new ve;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e===`before`?`before`:`after`,this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(n=>{n.checked=this.value===n.value,n.checked&&(this._selected=n)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new Ni(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static ɵfac=function(n){return new(n||i)};static ɵdir=J$1({type:i,selectors:[[`mat-radio-group`]],contentQueries:function(n,r,o){if(n&1&&Id$1(o,za,5),n&2){let a;pc(a=mc())&&(r._radios=a)}},hostAttrs:[`role`,`radiogroup`,1,`mat-mdc-radio-group`],inputs:{color:`color`,name:`name`,labelPosition:`labelPosition`,value:`value`,selected:`selected`,disabled:[2,`disabled`,`disabled`,Dn$1],required:[2,`required`,`required`,Dn$1],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Dn$1]},outputs:{change:`change`},exportAs:[`matRadioGroup`],features:[Pt([Rl,{provide:La,useExisting:i}])]})}return i})();var za=(()=>{class i{_elementRef=m(we$1);_changeDetector=m($t);_focusMonitor=m(gj);_radioDispatcher=m(An);_defaultOptions=m(Al,{optional:!0});_ngZone=m(me$1);_renderer=m(ut);_uniqueId=m(hu).getId(`mat-radio-`);_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||`after`}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||`accent`}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new ve;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=sa$1();_injector=m(se);constructor(){m(Ur).load(wb);let e=m(La,{optional:!0}),n=m(new Od$1(`tabindex`),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,n&&(this.tabIndex=IF(n,0))}focus(e,n){n?this._focusMonitor.focusVia(this._inputElement,n,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,n)=>{e!==this.id&&n===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,`click`,this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new Ni(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let n=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),n&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,n;if(!e||!e.selected||this.disabled?n=this.tabIndex:n=e.selected===this?this.tabIndex:-1,n!==this._previousTabIndex){let r=this._inputElement?.nativeElement;r&&(r.setAttribute(`tabindex`,n+``),this._previousTabIndex=n,io(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===r&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===r&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static ɵfac=function(n){return new(n||i)};static ɵcmp=Tt({type:i,selectors:[[`mat-radio-button`]],viewQuery:function(n,r){if(n&1&&Td$1(Ml,5)(El,7,we$1),n&2){let o;pc(o=mc())&&(r._inputElement=o.first),pc(o=mc())&&(r._rippleTrigger=o.first)}},hostAttrs:[1,`mat-mdc-radio-button`],hostVars:19,hostBindings:function(n,r){n&1&&Bt(`focus`,function(){return r._inputElement.nativeElement.focus()}),n&2&&(Qn(`id`,r.id)(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null),jt(`mat-primary`,r.color===`primary`)(`mat-accent`,r.color===`accent`)(`mat-warn`,r.color===`warn`)(`mat-mdc-radio-checked`,r.checked)(`mat-mdc-radio-disabled`,r.disabled)(`mat-mdc-radio-disabled-interactive`,r.disabledInteractive)(`_mat-animation-noopable`,r._noopAnimations))},inputs:{id:`id`,name:`name`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],disableRipple:[2,`disableRipple`,`disableRipple`,Dn$1],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:IF(e)],checked:[2,`checked`,`checked`,Dn$1],value:`value`,labelPosition:`labelPosition`,disabled:[2,`disabled`,`disabled`,Dn$1],required:[2,`required`,`required`,Dn$1],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Dn$1]},outputs:{change:`change`},exportAs:[`matRadioButton`],ngContentSelectors:kl,decls:13,vars:17,consts:[[`formField`,``],[`input`,``],[`mat-internal-form-field`,``,3,`labelPosition`,`for`],[1,`mdc-radio`],[1,`mat-mdc-radio-touch-target`],[`type`,`radio`,`aria-invalid`,`false`,1,`mdc-radio__native-control`,3,`change`,`id`,`checked`,`disabled`,`required`],[`aria-hidden`,`true`,1,`mdc-radio__background`],[1,`mdc-radio__outer-circle`],[1,`mdc-radio__inner-circle`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-radio-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-ripple-element`,`mat-radio-persistent-ripple`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(n,r){n&1&&(hc(),oi$1(0,`label`,2,0)(2,`span`,3),ao(3,`span`,4),oi$1(4,`input`,5,1),Bt(`change`,function(a){return r._onInputInteraction(a)}),Ds$1(),oi$1(6,`span`,6),ao(7,`span`,7)(8,`span`,8),Ds$1(),oi$1(9,`span`,9),ao(10,`span`,10),Ds$1()(),oi$1(11,`span`,11),As$1(12),Ds$1()()),n&2&&(Ts$1(`labelPosition`,r.labelPosition)(`for`,r.inputId),gs$1(2),jt(`mdc-radio--disabled`,r.disabled),gs$1(2),Ts$1(`id`,r.inputId)(`checked`,r.checked)(`disabled`,r.disabled&&!r.disabledInteractive)(`required`,r.required),Qn(`name`,r.name)(`value`,r.value)(`aria-label`,r.ariaLabel)(`aria-labelledby`,r.ariaLabelledby)(`aria-describedby`,r.ariaDescribedby)(`aria-disabled`,r.disabled&&r.disabledInteractive?`true`:null),gs$1(5),Ts$1(`matRippleTrigger`,r._rippleTrigger.nativeElement)(`matRippleDisabled`,r._isRippleDisabled())(`matRippleCentered`,!0))},dependencies:[uy,Yue],styles:[`.mat-mdc-radio-button {
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
`],encapsulation:2})}return i})();var kh=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Ve({type:i});static ɵinj=Le({imports:[ly,za,ua$1]})}return i})();function At(i,t){if(!i)return t;try{return JSON.parse(i)}catch{return t}}function Ph(i){let t=!!i?.extension_data?.requires_manual_approval;return i?.approved!==!1?`pending`:t?`approval_required`:i.process_state===`wait_list`?`waitlist`:`pending`}function Tl(i){let t=i.other_data||{};return{id:i.id,map_id:i.map_id||t.map_id||``,level_id:i.zone_id,name:i.identifier||t.name||``,height:+(t.height||3),notes:i.notes||``,zones:i.zones||[i.zone_id].filter(e=>e),tags:i.tags||At(t.tags,[]),images:At(t.images,[])}}function Ol(i,t){let e=i.other_data||{},n=i.parent_id||``,r=t.find(o=>o.id===n);return{id:i.id,bank_id:n,map_id:i.map_id||e.map_id,assigned_to:i.assigned_to||e.assigned_to,assigned_name:i.assigned_name||e.assigned_name,name:i.identifier||e.name||``,accessible:e.accessible===`true`,bookable:i.bookable!==!1,position:At(e.position,[0,0]),size:At(e.size,[1,1]),bank:r,zone:r?.zone,features:i.features||At(e.features,[])}}function Fl(i,t){if(!t){i.update(e=>m$1(l({},e),{asset_id:``}));return}i.update(e=>m$1(l({},e),{asset_id:t.id,asset_name:t.name,name:t.display_name||t.name||t.id,map_id:t.map_id||t.id,description:t.name,zones:t.zone?[t.zone?.parent_id,t.zone?.id]:[],booking_asset:t}))}var Dl=i=>`${(i.extension_data?.group_members||[]).find(n=>n?.email===i.asset_id)?.name||``}`.trim()||``;var Pl=i=>`${((i.attendees||[]).find(n=>n?.email===i.asset_id)||i.attendees?.[0])?.name||``}`.trim()||``;var Ll=i=>{if(!i.includes(`@`))return i;let[t]=i.split(`@`),e=t.replace(/[._-]+/g,` `).replace(/\s+/g,` `).trim();return e?e.replace(/\b\w/g,n=>n.toUpperCase()):i};var Lh=i=>{let t=`${i?.asset_id||``}`.trim(),e=Dl(i);if(e)return e;let n=Pl(i);if(n)return n;let r=`${i?.extension_data?.visitor_name||i?.asset_name||``}`.trim(),o=[`${i?.title||``}`.trim().toLowerCase(),`${i?.description||``}`.trim().toLowerCase()].filter(a=>!!a);return r&&r.toLowerCase()!==t.toLowerCase()&&!o.includes(r.toLowerCase())?r:Ll(t||r||`Visitor`)};function zl(i=new VS){i=i||new VS;let t=i.extension_data||{};return[...t.attachments||[],...t.p2_document_names||[]].filter(e=>!!e)}function Bl(i=new VS){return i?.user_email?new oo({id:i.user_id||``,email:i.user_email,name:i.user_name||i.user_email}):ze()}function Ba(i=new VS){let t=i.extension_data||{},e=i.booking_type===`visitor`?t.visitor_name||i.asset_name||``:i.asset_name||i.description;return{id:i.id||``,parent_id:i.parent_id||``,event_id:i.event_id||``,ical_uid:t.ical_uid||``,date:i.date??0,date_end:i.date_end??0,all_day:i.all_day??!1,name:t.name||i.asset_name||``,duration:i.duration??0,booking_type:i.booking_type||``,zones:i.zones||[],title:i.title||``,description:i.description||``,booking_asset:{},resources:[],company:t.company||``,asset_id:i.asset_id||``,asset_name:e||``,assets:t.assets||[],attendees:i.attendees||[],map_id:t.map_id||``,featured:t.featured||!1,user:Bl(i),user_id:i.user_id||``,group:i.group??{},user_email:i.user_email||``,user_name:i.user_name||``,timezone:i.timezone||``,booked_by:ze(),booked_by_id:i.booked_by_id||``,booked_by_email:i.booked_by_email||``,secondary_resource:t.other_asset_type||t.secondary_resource||{},location:t.location||``,attendance_type:t.attendance_type||`ANY`,phone:t.phone||``,permission:i.permission||`PRIVATE`,images:i.images||[],tags:i?.tags||[],plate_number:t.plate_number||``,vehicle_type:t.vehicle_type||`car`,request_type:t.request_type||`standard`,requires_manual_approval:t.requires_manual_approval??!1,space_restrictions:t.space_restrictions??!1,extra_space_restrictions:t.extra_space_restrictions??[],approver_group:t.approver_group||``,prefer_booked_location_first:t.prefer_booked_location_first??!1,pass_number:t.pass_number||``,international:t.international??!1,recurrence_custom:t.recurrence_custom??!1,recurrence_type:i.recurrence_type||`none`,recurrence_days:i.recurrence_days??0,recurrence_nth_of_month:i.recurrence_nth_of_month??0,recurrence_interval:i.recurrence_interval??0,recurrence_end:i.recurrence_end??0,recurrence_instances:t.recurrence_instances??0,notes:t.notes||``,attachments:zl(i),update_master:!1,self_registered:!1,is_assgined:!1}}function zh(i=new VS,t){let e=i.state===`started`,n=H(Ba(i));cse(n,Ba(new VS));let r=y0(`parking.require_plate_number`,!1),o=y0(`parking.require_space_restriction`,!1),a=gn(n,s=>{bi(s.date),bi(s.asset_id),zo(s.asset_id,{when:({valueOf:l})=>l(s.booking_type)===`visitor`}),bi(s.plate_number,{when:({valueOf:l})=>l(s.booking_type)===`parking`&&r()}),tt(s.plate_number,({value:l,valueOf:m})=>m(s.booking_type)===`parking`&&r()&&!`${l()||``}`.trim()?{kind:`required`}:void 0),tt(s.space_restrictions,({value:l,valueOf:m})=>m(s.booking_type)===`parking`&&o()&&!l()?{kind:`required`}:void 0),tt(s.duration,({value:l,valueOf:m})=>{let u=m(s.date);return l()<=0?{kind:`duration`}:u&&Ti(Date.now(),br(u,l()))?{kind:`duration`}:void 0}),Po(s.date,({value:l})=>e?!0:l()<Date.now()&&!!w(n).id)},{injector:t});use(n,s=>s.user,s=>{s&&n.update(l$5=>m$1(l({},l$5),{user:s,user_id:s?.id??``,user_email:s?.email??``,user_name:s?.name??``}))},t),use(n,s=>s.resources,s=>{w(n).booking_type!==`visitor`&&Fl(n,(s||[])[0])},t),Fh.subscribe(s=>{s&&n.update(l$6=>m$1(l({},l$6),{booked_by:s,booked_by_id:s?.id,booked_by_email:s?.email}))});let d=dse(n,{},t);return a._time_sync=d,n._time_sync=d,{model:n,form:a,time_sync:d}}async function Bh(i,t,e=[]){let n=await Pa(i),r=s=>{let l=n.element_bounds.get(s);return l?{x:l.x+l.w/2,y:l.y+l.h/2}:null},o=(typeof t==`string`?r(t):t)||{x:.5,y:.5},a=10,d=``;for(let s of e){let{x:l,y:m}=r(s)||{x:2,y:2},u=Math.sqrt((l-o.x)*(l-o.x)+(m-o.y)*(m-o.y));u<a&&(a=u,d=s)}return d}function qh(i){let t=i.date||i.event_start*1e3,e=i.duration??(i.event_end-i.event_start)/60,n=i.recurrence?.pattern?GV(jV$1(i.recurrence),t):{},r=[i.system,...i.resources||[]].filter(d=>!!d?.id),{system_id:o}=i,a=Yie([...r.map(d=>d.id),o].filter(d=>!!d));return new VS(m$1(l({id:i.id,user_id:i.organiser?.id||i.host,user_email:i.host,user_name:i.organiser?.name||i.host,title:i.title||void 0,date:t,duration:e,all_day:i.all_day,timezone:i.timezone,asset_id:a[0],asset_ids:a,asset_name:i.system?.display_name||i.system?.name,zones:Yie(r.flatMap(d=>d.zones||[])),booking_type:`room`,approved:i.status===`approved`},n),{extension_data:l({},i)}))}async function ql(i,t){if(!t)return[];let n=(await Na([t]).catch(()=>[])).map(Tl);for(let r of n)r.zone=i.levelWithID(r.zones||[]);return n}async function Vl(i,t,e){if(!t)return[];let r=(await Ma([t]).catch(()=>[])).map(o=>Ol(o,e));for(let o of e)o.lockers=r.filter(a=>a.bank_id===o.id).map(a=>l({},a));return r.filter(o=>o.bank)}async function Vh(i,t){return Vl(i,t,await ql(i,t))}
/*! Bundled license information:

@angular/forms/fesm2022/_validation_errors-chunk.mjs:
@angular/forms/fesm2022/signals.mjs:
(**
* @license Angular v22.1.5
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*)
*/
export{oa as $,Vh as A,du as B,Ph as C,zo as Ct,St as D,Qu as E,Ym as F,jm as G,fa as H,aa as I,lu as J,ju as K,au as L,Vm as M,Wm as N,Su as O,Wu as P,nu as Q,bi as R,Ol as S,zl as St,Qm as T,gn as U,et as V,ha as W,mu as X,mo as Y,nd as Z,Mu as _,wu as _t,Cu as a,qm as at,Nu as b,za as bt,Et as c,ru as ct,Hc as d,tt as dt,od as et,Hd as f,uo as ft,Ma as g,wt as gt,Lh as h,wi as ht,Bl as i,ql as it,Vl as j,Tl as k,Fa as l,su as lt,Il as m,vu as mt,Ba as n,pa as nt,Dd as o,ra as ot,Hu as p,vd as pt,kh as q,Bh as r,qh as rt,Df as s,rd as st,$u as t,ou as tt,Ff as u,th as ut,Na as v,xt as vt,Po as w,Of as x,zh as xt,Nt as y,xu as yt,cu as z};
//# debugId=59dc01aa-28bb-5176-9c7c-b723ea34a7a4
//# sourceMappingURL=chunk-CmsZleRJ.js.map