import{$a as ne,$r as bt$1,Aa as lH,Ai as fc,Ar as Yue,At as KD,B as Ee,Bn as Sd$1,Bo as sA,Br as _a$1,Bs as xt$1,C as CM,Ca as kk,Ci as eO,Cn as Pue,Da as kv,Do as qD,Dr as Ys$1,Ds as wb,E as Ct$1,Eo as q,Er as Yie,Et as Jf,F as Ds$1,Fs as xE,Ft as Kv,Gi as gt,Go as se,Gs as ya$1,H as Et$1,Ha as m,Hi as go$1,I as Due,Ia as ln$1,In as Rs$1,Ja as me$1,Jn as Ts$1,Jt as Md$1,Ka as mc,Ki as hQ,Ko as sne,Kr as ane,La as lne,Ls as xb,Lt as Lb,N as Dn,No as r$,Nt as Kn,Oa as kx,Os as we$1,Pa as lc,Pr as Zie,Qi as hr,Qn as Ur,Qr as br,Qt as Mt$1,R as E_,Rn as SM,Rt as Le,Sa as kj,Ta as kse,Tn as Q$1,Ts as wG,Tt as Je$1,Ut as Lx,Va as ly,Vi as gj,W as FE,Wi as gs$1,Wn as Td$1,Wo as sa$1,Xa as mt,Xi as hc,Xo as tA,Yi as hb,Yn as Tt$1,Yo as sue,Ys as yo$1,Z as G,Za as n$,Zo as tG,_ as BV,_a as k,_i as dse,_r as Wv,_s as ve,_t as Io$1,a as $k,ac as l,ar as Ve,as as uQ,at as Hj,bt as J$1,ca as ix,ci as cn$1,cn as Od$1,cs as une,ct as I,da as je,di as cse,do as os$1,dr as We,ds as uy,ea as hu$1,ei as bte,er as Ux,es as tse,f as AM,fr as Wie,fs as v,gi as dne,gn as Ote,gs as vd$1,h as Aue,ha as jt,ho as pA,ia as io,io as oG,ji as fi$1,js as wn$1,kn as Qn,ko as qV,li as cne,ln as Oe,ls as use,lt as IF,m as As$1,ma as jk,mi as dQ,mo as oy,nc as zn,ni as cG,nn as Ne$1,nr as VD,nt as H,o as $s$1,oc as m$1,oi as c_,oo as oi$1,os as ua$1,pr as Wj,ps as vL,pt as Id$1,q as Ff,qa as md$1,qn as Tn,qr as ao,qt as Mce,ra as ine,rc as zt,ri as cH,ro as nu,rs as uH,s as $t,sa as it,sc as n,ss as uc,t as $,tr as V,ts as tu,ua as jV,us as ut,wn as Pv,ws as w,xa as kh,xi as eA,xn as Pt,xo as pc,xt as JN,y as Bt,yr as XF,yt as It$1,z as Ed$1,zi as gc}from"./chunk-QgSOCsNi.js";import{C as Gd$1,D as He,Et as ed$1,G as Rh,J as Ti$1,Kt as nE,Lt as jV$1,Nt as iY,P as KW,Pt as iu,S as GV,Sn as ze,Wt as lr,Xt as oo,Yt as on,Z as Uh,at as WS,b as Fh,et as VS,l as Bt$1,nn as qW,pt as Zd,tn as pr,u as C6,un as tu$1,vt as as$1,w as Gh,xt as cr,yn as y0,zt as kC}from"./chunk-Bnmpt-am.js";import{t as f}from"./chunk-CqTEhgL0.js";var Wa=[`determinateSpinner`];function Qa(n,t){if(n&1&&(Kv(),oi$1(0,`svg`,11),ao(1,`circle`,12),Ds$1()),n&2){let e=fc();Qn(`viewBox`,e._viewBox()),gs$1(),sA(`stroke-dasharray`,e._strokeCircumference(),`px`)(`stroke-dashoffset`,e._strokeCircumference()/2,`px`)(`stroke-width`,e._circleStrokeWidth(),`%`),Qn(`r`,e._circleRadius())}}var Ya=new I(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:fo})});var fo=100;var Xa=10;var ho=(()=>{class n{_elementRef=m(we$1);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let e=m(Ya),i=Hj(),r=this._elementRef.nativeElement;this._noopAnimations=i===`di-disabled`&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&i===`reduced-motion`&&r.classList.add(`mat-progress-spinner-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=fo;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Xa)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(i){return new(i||n)};static ɵcmp=Tt$1({type:n,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(i,r){if(i&1&&Td$1(Wa,5),i&2){let o;pc(o=mc())&&(r._determinateCircle=o.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(i,r){i&2&&(Qn(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,r.mode===`determinate`?r.value:null)(`mode`,r.mode),ix(`mat-`+r.color),sA(`width`,r.diameter,`px`)(`height`,r.diameter,`px`)(`--%NS%mat-progress-spinner-size`,r.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,r.diameter+`px`),jt(`_mat-animation-noopable`,r._noopAnimations)(`mdc-circular-progress--indeterminate`,r.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,IF],diameter:[2,`diameter`,`diameter`,IF],strokeWidth:[2,`strokeWidth`,`strokeWidth`,IF]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(i,r){if(i&1&&(VD(0,Qa,2,8,`ng-template`,null,0,Ux),oi$1(2,`div`,2,1),Kv(),oi$1(4,`svg`,3),ao(5,`circle`,4),Ds$1()(),Wv(),oi$1(6,`div`,5)(7,`div`,6)(8,`div`,7),qD(9,8),Ds$1(),oi$1(10,`div`,9),qD(11,8),Ds$1(),oi$1(12,`div`,10),qD(13,8),Ds$1()()()),i&2){let o=$k(1);gs$1(4),Qn(`viewBox`,r._viewBox()),gs$1(),sA(`stroke-dasharray`,r._strokeCircumference(),`px`)(`stroke-dashoffset`,r._strokeDashOffset(),`px`)(`stroke-width`,r._circleStrokeWidth(),`%`),Qn(`r`,r._circleRadius()),gs$1(4),Ts$1(`ngTemplateOutlet`,o),gs$1(2),Ts$1(`ngTemplateOutlet`,o),gs$1(2),Ts$1(`ngTemplateOutlet`,o)}},dependencies:[XF],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2})}return n})();var po=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Ve({type:n});static ɵinj=Le({imports:[ua$1]})}return n})();var Ja=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Tt$1({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return n})();var es={passive:!0};var _o=(()=>{class n{_platform=m(Ct$1);_ngZone=m(me$1);_renderer=m(Tn).createRenderer(null,null);_styleLoader=m(Ur);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return We;this._styleLoader.load(Ja);let i=Io$1(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new q,a=`cdk-text-field-autofilled`,s=l=>{l.animationName===`cdk-text-field-autofill-start`&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!0}))):l.animationName===`cdk-text-field-autofill-end`&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!1})))},d=this._ngZone.runOutsideAngular(()=>(i.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(i,`animationstart`,s,es)));return this._monitoredElements.set(i,{subject:o,unlisten:d}),o}stopMonitoring(e){let i=Io$1(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove(`cdk-text-field-autofill-monitored`),i.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static ɵfac=function(i){return new(i||n)};static ɵprov=k({token:n,factory:n.ɵfac})}return n})();var go=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Ve({type:n});static ɵinj=Le({})}return n})();var So=Symbol(`FIELD_TREE`);var ei=0;function ts(){return ei}function we(n,t){return(...e)=>{try{return ei=t,n(...e)}finally{ei=0}}}function ns(n){return!n}function bo(n){return n}function Ce(n){return Array.isArray(n)}function ln(n){return(typeof n==`object`||typeof n==`function`)&&n!=null}var Fe=Symbol();var gn=Symbol();var yt=class{predicates;fns=[];constructor(t){this.predicates=t}push(t){this.fns.push(yo(this.predicates,t))}mergeIn(t){let e=this.predicates?t.fns.map(i=>yo(this.predicates,i)):t.fns;this.fns.push(...e)}hasRules(){return this.fns.length>0}};var cn=class extends yt{get defaultValue(){return!1}compute(t){return this.fns.some(e=>{let i=e(t);return i&&i!==gn})}};var Ye=class n extends yt{ignore;static ignoreNull(t){return new n(t,e=>e===null)}constructor(t,e){super(t),this.ignore=e}get defaultValue(){return[]}compute(t){return this.fns.reduce((e,i)=>{let r=i(t);return r===void 0||r===gn?e:Ce(r)?[...e,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?e:[...e,r]},[])}};var ti=class extends Ye{constructor(t){super(t,void 0)}};var ni=class extends yt{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(t,e){super(t),this.key=e}compute(t){if(this.fns.length===0)return this.key.reducer.getInitial();let e=this.key.reducer.getInitial();for(let i=0;i<this.fns.length;i++){let r=this.fns[i](t);r!==gn&&(e=this.key.reducer.reduce(e,r))}return e}};function yo(n,t){return n.length===0?t:e=>{for(let i of n){let r=e.stateOf(i.path),o=w(r.structure.pathKeys).length-i.depth;for(let a=0;a<o;a++)r=r.structure.parent;if(!i.fn(r.context))return gn}return t(e)}}var Xe=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(t){this.predicates=t,this.hidden=new cn(t),this.disabledReasons=new ti(t),this.readonly=new cn(t),this.syncErrors=Ye.ignoreNull(t),this.syncTreeErrors=Ye.ignoreNull(t),this.asyncErrors=Ye.ignoreNull(t)}hasAnyLogic(){return this.hidden.hasRules()||this.disabledReasons.hasRules()||this.readonly.hasRules()||this.syncErrors.hasRules()||this.syncTreeErrors.hasRules()||this.asyncErrors.hasRules()||this.metadata.size>0}hasMetadata(t){return this.metadata.has(t)}hasMetadataKeys(){return this.metadata.size>0}getMetadataKeys(){return this.metadata.keys()}getMetadata(t){return this.metadata.has(t)||this.metadata.set(t,new ni(this.predicates,t)),this.metadata.get(t)}mergeIn(t){this.hidden.mergeIn(t.hidden),this.disabledReasons.mergeIn(t.disabledReasons),this.readonly.mergeIn(t.readonly),this.syncErrors.mergeIn(t.syncErrors),this.syncTreeErrors.mergeIn(t.syncTreeErrors),this.asyncErrors.mergeIn(t.asyncErrors);for(let e of t.getMetadataKeys()){let i=t.metadata.get(e);this.getMetadata(e).mergeIn(i)}}};var mn=class{depth;constructor(t){this.depth=t}build(){return new un(this,[],0)}};var Ze=class n extends mn{constructor(t){super(t)}current;all=[];addHiddenRule(t){this.getCurrent().addHiddenRule(t)}addDisabledReasonRule(t){this.getCurrent().addDisabledReasonRule(t)}addReadonlyRule(t){this.getCurrent().addReadonlyRule(t)}addSyncErrorRule(t){this.getCurrent().addSyncErrorRule(t)}addSyncTreeErrorRule(t){this.getCurrent().addSyncTreeErrorRule(t)}addAsyncErrorRule(t){this.getCurrent().addAsyncErrorRule(t)}addMetadataRule(t,e){this.getCurrent().addMetadataRule(t,e)}getChild(t){if(t===Fe){let e=this.getCurrent().children;e.size>(e.has(Fe)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(t)}hasLogic(t){return this===t?!0:this.all.some(({builder:e})=>e.hasLogic(t))}hasRules(){return this.all.length>0}anyChildHasLogic(){return this.all.some(({builder:t})=>t.anyChildHasLogic())}mergeIn(t,e){e?this.all.push({builder:t,predicate:{fn:we(e.fn,this.depth),path:e.path}}):this.all.push({builder:t}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new vt(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new n(0)}};var vt=class extends mn{logic=new Xe([]);children=new Map;constructor(t){super(t)}addHiddenRule(t){this.logic.hidden.push(we(t,this.depth))}addDisabledReasonRule(t){this.logic.disabledReasons.push(we(t,this.depth))}addReadonlyRule(t){this.logic.readonly.push(we(t,this.depth))}addSyncErrorRule(t){this.logic.syncErrors.push(we(t,this.depth))}addSyncTreeErrorRule(t){this.logic.syncTreeErrors.push(we(t,this.depth))}addAsyncErrorRule(t){this.logic.asyncErrors.push(we(t,this.depth))}addMetadataRule(t,e){this.logic.getMetadata(t).push(we(e,this.depth))}getChild(t){return this.children.has(t)||this.children.set(t,new Ze(this.depth+1)),this.children.get(t)}hasLogic(t){return this===t}hasRules(){return this.logic.hasAnyLogic()||this.children.size>0}anyChildHasLogic(){for(let t of this.children.values())if(t.hasRules())return!0;return!1}};var un=class n{builder;predicates;depth;logic;constructor(t,e,i){this.builder=t,this.predicates=e,this.depth=i,this.logic=t?is(t,e,i):new Xe([])}getChild(t){let e=this.builder?wo(this.builder,t):[];if(e.length===0)return new n(void 0,[],this.depth+1);if(e.length===1){let{builder:i,predicates:r}=e[0];return new n(i,[...this.predicates,...r.map(o=>ri(o,this.depth))],this.depth+1)}else return new ii(e.map(({builder:r,predicates:o})=>new n(r,[...this.predicates,...o.map(a=>ri(a,this.depth))],this.depth+1)))}hasLogic(t){return this.builder?this.builder.hasLogic(t):!1}hasRules(){return this.builder?this.builder.hasRules():!1}anyChildHasLogic(){return this.builder?this.builder.anyChildHasLogic():!1}};var ii=class n{all;logic;constructor(t){this.all=t,this.logic=new Xe([]);for(let e of t)this.logic.mergeIn(e.logic)}getChild(t){return new n(this.all.flatMap(e=>e.getChild(t)))}hasLogic(t){return this.all.some(e=>e.hasLogic(t))}hasRules(){return this.all.some(t=>t.hasRules())}anyChildHasLogic(){return this.all.some(t=>t.anyChildHasLogic())}};function wo(n,t){if(n instanceof Ze)return n.all.flatMap(({builder:e,predicate:i})=>{let r=wo(e,t);return i?r.map(({builder:o,predicates:a})=>({builder:o,predicates:[...a,i]})):r});if(n instanceof vt)return[...t!==Fe&&n.children.has(Fe)?[{builder:n.getChild(Fe),predicates:[]}]:[],...n.children.has(t)?[{builder:n.getChild(t),predicates:[]}]:[]];throw new v(1909,!1)}function is(n,t,e){let i=new Xe(t);if(n instanceof Ze){let r=n.all.map(({builder:o,predicate:a})=>new un(o,a?[...t,ri(a,e)]:t,e));for(let o of r)i.mergeIn(o.logic)}else if(n instanceof vt)i.mergeIn(n.logic);else throw new v(1909,!1);return i}function ri(n,t){return m$1(l({},n),{depth:t})}var Co=Symbol(`PATH`);var ce=class n{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,rs);logicBuilder;constructor(t,e,i,r){this.keys=t,this.parent=i,this.keyInParent=r,this.root=e??this,i||(this.logicBuilder=Ze.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(t){return this.children.has(t)||this.children.set(t,new n([...this.keys,t],this.root,this,t)),this.children.get(t)}mergeIn(t,e){let i=t.compile();this.builder.mergeIn(i.builder,e)}static unwrapFieldPath(t){return t[Co]}static newRoot(){return new n([],void 0,void 0,void 0)}};var rs={get(n,t){return t===Co?n:n.getChild(t).fieldPathProxy}};var dn;var bt=new Map;var fn=class n{schemaFn;constructor(t){this.schemaFn=t}compile(){if(bt.has(this))return bt.get(this);let t=ce.newRoot();bt.set(this,t);let e=dn;try{dn=t,this.schemaFn(t.fieldPathProxy)}finally{dn=e}return t}static create(t){return t instanceof n?t:new n(t)}static rootCompile(t){try{return bt.clear(),t===void 0?ce.newRoot():t instanceof n?t.compile():new n(t).compile()}finally{bt.clear()}}};function os(n){return n instanceof fn||typeof n==`function`}function bn(n){if(dn!==ce.unwrapFieldPath(n).root)throw new v(1908,!1)}function pi(n,t,e){return bn(n),ce.unwrapFieldPath(n).builder.addMetadataRule(t,e),t}var Je={list(){return{reduce:(n,t)=>t===void 0?n:[...n,t],getInitial:()=>[]}},min(){return{reduce:(n,t)=>n===void 0||t===void 0?n??t:t<n?t:n,getInitial:()=>{}}},max(){return{reduce:(n,t)=>n===void 0||t===void 0?n??t:t>n?t:n,getInitial:()=>{}}},or(){return{reduce:(n,t)=>n||t,getInitial:()=>!1}},and(){return{reduce:(n,t)=>n&&t,getInitial:()=>!0}},override:as};function as(n){return{reduce:(t,e)=>e,getInitial:()=>n?.()}}var _i=Symbol(`IS_ASYNC_VALIDATION_RESOURCE`);var hn=class{reducer;create;brand;[_i];constructor(t,e){this.reducer=t,this.create=e}};function Ne(n){return new hn(n??Je.override())}function gi(){return Ne()}var bi=Ne(Je.or());var No=gi();var Mo=gi();var ko=Ne(Je.max());var Eo=Ne(Je.min());var Ro=Ne(Je.list());function Q(n,t){if(n===t)return!0;if(!n||!t||n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(!Object.is(n[e],t[e]))return!1;return!0}function ss(n){return n.errors().length>0?`invalid`:n.pending()?`unknown`:`valid`}var oi=class{node;constructor(t){this.node=t}rawSyncTreeErrors=Ne$1(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]],{equal:Q});syncErrors=Ne$1(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...ds(this.node.submitState.submissionErrors())],{equal:Q});syncValid=Ne$1(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(t,e)=>e&&t.validationState.syncValid(),ns));syncTreeErrors=Ne$1(()=>this.rawSyncTreeErrors().filter(t=>t.fieldTree===this.node.fieldTree),{equal:Q});rawAsyncErrors=Ne$1(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]],{equal:Q});asyncErrors=Ne$1(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(t=>t===`pending`||t.fieldTree===this.node.fieldTree),{equal:Q});parseErrors=Ne$1(()=>this.node.formFieldBindings().flatMap(t=>t.parseErrors()),{equal:Q});errors=Ne$1(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(t=>t!==`pending`)],{equal:Q});errorSummary=Ne$1(()=>{let t=this.node.structure.reduceChildren(this.errors(),(e,i)=>[...i,...e.errorSummary()]);return w(()=>t.sort(ls)),t},{equal:Q});pending=Ne$1(()=>this.node.structure.reduceChildren(this.asyncErrors().includes(`pending`),(t,e)=>e||t.validationState.pending()));status=Ne$1(()=>{if(this.shouldSkipValidation())return`valid`;let t=ss(this);return this.node.structure.reduceChildren(t,(e,i)=>i===`invalid`||e.validationState.status()===`invalid`?`invalid`:i===`unknown`||e.validationState.status()===`unknown`?`unknown`:`valid`,e=>e===`invalid`)});valid=Ne$1(()=>this.status()===`valid`);invalid=Ne$1(()=>this.status()===`invalid`);shouldSkipValidation=Ne$1(()=>this.node.hidden()||this.node.disabled()||this.node.readonly()||this.node.structure.isOrphaned())};function ds(n){return n===void 0?[]:Ce(n)?n:[n]}function Ao(n,t){if(Ce(n))for(let e of n)e.fieldTree??=t;else n&&(n.fieldTree??=t);return n}function vo(n){return n.formField?n.formField.element:n.fieldTree().formFieldBindings().reduce((t,e)=>!t||!e.element?t??e.element:t.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e.element:t,void 0)}function ls(n,t){let e=vo(n),i=vo(t);return e===i?0:e===void 0||i===void 0?e===void 0?1:-1:e.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var ai=Ne();var si=class{node;cache=new WeakMap;constructor(t){this.node=t,this.fieldTreeOf=this.fieldTreeOf.bind(this),this.stateOf=this.stateOf.bind(this)}resolve(t){if(!this.cache.has(t)){let e=Ne$1(()=>{let i=ce.unwrapFieldPath(t),r=this.node,o=ts();for(;o>0||!r.structure.logic.hasLogic(i.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new v(1900,!1);for(let a of i.keys)if(r=r.structure.getChild(a),r===void 0)throw new v(1901,!1);return r.fieldTree});this.cache.set(t,e)}return this.cache.get(t)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=Ne$1(()=>{let t=this.key();if(!Ce(w(this.node.structure.parent.value)))throw new v(1906,!1);return Number(t)});fieldTreeOf(t){return this.resolve(t)}stateOf(t){return this.resolve(t)()}valueOf=t=>{let e=this.resolve(t)().value();if(e instanceof Ff)throw new v(1907,!1);return e}};var di=class{node;metadata=new Map;constructor(t){this.node=t}runMetadataCreateLifecycle(){if(!this.node.logicNode.logic.hasMetadataKeys())return;let t=E_();t&&fi$1(!1);try{w(()=>Je$1(this.node.structure.injector,()=>{for(let e of this.node.logicNode.logic.getMetadataKeys())if(e.create){let i=this.node.logicNode.logic.getMetadata(e),r=e.create(this.node,Ne$1(()=>i.compute(this.node.context)));this.metadata.set(e,r)}}))}finally{t&&fi$1(!0)}}get(t){if(this.has(t)&&!this.metadata.has(t)){if(t.create)throw new v(1912,!1);let e=this.node.logicNode.logic.getMetadata(t);this.metadata.set(t,Ne$1(()=>e.compute(this.node.context)))}return this.metadata.get(t)}has(t){return this.node.logicNode.logic.hasMetadata(t)}};var cs={get(n,t,e){if(t===So)return!0;let i=n(),r=i.structure.getChild(t);if(r!==void 0)return r.fieldTree;let o=w(i.value);if(Ce(o)){if(t===`length`)return i.value().length;if(t===Symbol.iterator)return()=>(i.value(),Array.prototype[Symbol.iterator].apply(i.fieldTree))}if(ln(o)&&t===Symbol.iterator)return function*(){for(let a in e)yield[a,e[a]]}},getOwnPropertyDescriptor(n,t){let e=w(n().value),i=Reflect.getOwnPropertyDescriptor(e,t);return i&&!i.configurable&&(i.configurable=!0),i},ownKeys(n){let t=w(n().value);return typeof t==`object`&&t!==null?Reflect.ownKeys(t):[]}};function ms(n,t){let e=Ne$1(()=>n()[t()]);return e[Oe]=n[Oe],e.set=i=>{Object.is(w(e),i)||n.update(r=>us(r,i,t()))},e.update=i=>{e.set(i(w(e)))},e.asReadonly=()=>e,e}function us(n,t,e){if(Ce(n)){let i=[...n];return i[e]=t,i}else return m$1(l({},n),{[e]:t})}var Qe=Symbol(``);var Io=Ne$1(()=>!1);var pn=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;_anyChildHasLogic;get injector(){return this._injector??=se.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(t,e,i){this.logic=t,this.node=e,this.createChildNode=i}children(){this.ensureChildrenMap();let t=this.childrenMap();return t===void 0?[]:Array.from(t.byPropertyKey.values()).map(e=>w(e.reader))}materializedChildren(){let t=this.childrenMap();return t===void 0?[]:Array.from(t.byPropertyKey.values()).map(e=>e.node)}_areChildrenMaterialized(){return w(this.childrenMap)!==void 0}ensureChildrenMap(){this._areChildrenMaterialized()||w(()=>{this.childrenMap.update(t=>this.computeChildrenMap(this.value(),t,!0))})}getChild(t){this.ensureChildrenMap();let e=t.toString(),i=w(this.childrenMap)?.byPropertyKey.get(e)?.reader;return i||(i=this.createReader(e)),i()}reduceChildren(t,e,i){let r=this.childrenMap();if(!r)return t;let o=t;for(let a of r.byPropertyKey.values()){if(i?.(o))break;o=e(w(a.reader),o)}return o}destroy(){this.injector.destroy()}createKeyOrOrphanSignals(t,e,i){if(t===`root`)return{keyInParent:To,isOrphaned:Io};let r=this.parent,o=i,a=Ne$1(()=>{if(r.structure.isOrphaned())return Qe;let l=r.structure.childrenMap();if(!l)return Qe;let m=l.byPropertyKey.get(o);if(m&&m.node===this.node)return o;if(e===void 0)return Qe;for(let[u,h]of l.byPropertyKey)if(h.node===this.node)return o=u;return Qe}),s=Ne$1(()=>a()===Qe);return{keyInParent:Ne$1(()=>{let l=a();if(l===Qe)throw e===void 0?new v(-1902,!1):new v(1904,!1);return l}),isOrphaned:s}}createChildrenMap(){return Rs$1({source:this.value,computation:(t,e)=>this.computeChildrenMap(t,e?.value,!1)})}computeChildrenMap(t,e,i){if(!ln(t)||!i&&e===void 0&&!(this._anyChildHasLogic??=this.logic.anyChildHasLogic()))return;e??={byPropertyKey:new Map};let r,o=Ce(t);e!==void 0&&(o?r=hs(e,t,this.identitySymbol):r=ps(e,t));for(let a of Object.keys(t)){let s,d=t[a];if(d===void 0){e.byPropertyKey.has(a)&&(r??=l({},e),r.byPropertyKey.delete(a));continue}o&&ln(d)&&!Ce(d)&&(s=d[this.identitySymbol]??=Symbol(``));let l$1;s&&(e.byTrackingKey?.has(s)||(r??=l({},e),r.byTrackingKey??=new Map,r.byTrackingKey.set(s,this.createChildNode(a,s,o))),l$1=(r??e).byTrackingKey.get(s));let m=e.byPropertyKey.get(a);m===void 0?(r??=l({},e),r.byPropertyKey.set(a,{reader:this.createReader(a),node:l$1??this.createChildNode(a,s,o)})):l$1&&l$1!==m.node&&(r??=l({},e),m.node=l$1)}return r??e}createReader(t){return Ne$1(()=>this.childrenMap()?.byPropertyKey.get(t)?.node)}};var li=class extends pn{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return fs}get keyInParent(){return To}isOrphaned=Io;childrenMap;constructor(t,e,i,r,o){super(e,t,o),this.fieldManager=i,this.value=r,this.childrenMap=this.createChildrenMap()}};var ci=class extends pn{logic;parent;root;pathKeys;keyInParent;value;childrenMap;isOrphaned;get fieldManager(){return this.root.structure.fieldManager}constructor(t,e,i,r,o,a){super(e,t,a),this.logic=e,this.parent=i,this.root=this.parent.structure.root;let s=this.createKeyOrOrphanSignals(`child`,r,o);this.isOrphaned=s.isOrphaned,this.keyInParent=s.keyInParent,this.pathKeys=Ne$1(()=>[...i.structure.pathKeys(),this.keyInParent()]),this.value=ms(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var fs=Ne$1(()=>[]);var To=Ne$1(()=>{throw new v(1905,!1)});function hs(n,t,e){let i,r=new Set(n.byPropertyKey.keys()),o=n.byTrackingKey&&new Set(n.byTrackingKey.keys());for(let a=0;a<t.length;a++){let s=t[a];r.delete(a.toString()),o&&ln(s)&&Object.hasOwn(s,e)&&o.delete(s[e])}if(r.size>0){i??=l({},n);for(let a of r)i.byPropertyKey.delete(a)}if(o&&o.size>0){i??=l({},n);for(let a of o)i.byTrackingKey.delete(a)}return i}function ps(n,t){let e;for(let i of n.byPropertyKey.keys())Object.hasOwn(t,i)||(e??=l({},n),e.byPropertyKey.delete(i));return e}var mi=class{node;selfSubmitting=H(!1);submissionErrors;constructor(t){this.node=t,this.submissionErrors=Rs$1({source:this.node.structure.value,computation:()=>[]})}submitting=Ne$1(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))};var xt=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new si(this)}fieldProxy=new Proxy(()=>this,cs);pathNode;constructor(t){this.pathNode=t.pathNode,this.fieldAdapter=t.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,t),this.validationState=this.fieldAdapter.createValidationState(this,t),this.nodeState=this.fieldAdapter.createNodeState(this,t),this.metadataState=new di(this),this.submitState=new mi(this),this.controlValue=this.controlValueSignal(),this.metadataState.runMetadataCreateLifecycle()}focusBoundControl(t){this.getBindingForFocus()?.focus(t)}getBindingForFocus(){return this.formFieldBindings().filter(e=>e.focus!==void 0).reduce(xo,void 0)||this.structure.children().map(e=>e.getBindingForFocus()).reduce(xo,void 0)}pendingSync=Rs$1({source:()=>this.value(),computation:(t,e)=>{e?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){let t=this.metadata(Mo)?.();return t?this.metadata(t):void 0}get maxLength(){return this.metadata(Eo)}get min(){let t=this.metadata(No)?.();return t?this.metadata(t):void 0}get minLength(){return this.metadata(ko)}get pattern(){return this.metadata(Ro)??_s}get required(){return this.metadata(bi)??gs}metadata(t){return this.metadataState.get(t)}getError(t){return this.errors().find(e=>e.kind===t)}hasMetadata(t){return this.metadataState.has(t)}markAsTouched(t){this.structure.isOrphaned()||w(()=>{this.markAsTouchedInternal(t),this.flushSync()})}markAsTouchedInternal(t){if(!this.structure.isOrphaned()&&!this.validationState.shouldSkipValidation()&&(this.nodeState.markAsTouched(),!t?.skipDescendants))for(let e of this.structure.children())e.markAsTouchedInternal()}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(t){w(()=>this._reset(t))}_reset(t){this.pendingSync()?.abort(),t!==void 0&&this.value.set(t),this.controlValue.rawSet(this.value()),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let e of this.formFieldBindings())e.reset();for(let e of this.structure.materializedChildren())e._reset()}reloadValidation(){w(()=>this._reloadValidation())}_reloadValidation(){let t=this.logicNode.logic.getMetadataKeys();for(let e of t)e[_i]&&this.metadata(e).reload?.();for(let e of this.structure.children())e._reloadValidation()}controlValueSignal(){let t=Rs$1(this.value);t.rawSet=t.set,t.set=i=>{t.rawSet(i),this.markAsDirty(),this.debounceSync()};let e=t.update;return t.update=i=>{e(i),this.markAsDirty(),this.debounceSync()},t}sync(){this.value.set(this.controlValue())}flushSync(){let t=this.pendingSync();t&&!t.signal.aborted&&(t.abort(),this.sync())}async debounceSync(){let t=w(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(t){let e=new AbortController,i=t(e.signal);if(i&&(this.pendingSync.set(e),await i,e.signal.aborted))return}this.structure.isOrphaned()||this.sync()}static newRoot(t,e,i,r){return r.newRoot(t,e,i,r)}createStructure(t){return t.kind===`root`?new li(this,t.logic,t.fieldManager,t.value,this.newChild.bind(this)):new ci(this,t.logic,t.parent,t.identityInParent,t.initialKeyInParent,this.newChild.bind(this))}newChild(t,e,i){let r,o;return i?(r=this.pathNode.getChild(Fe),o=this.structure.logic.getChild(Fe)):(r=this.pathNode.getChild(t),o=this.structure.logic.getChild(t)),this.fieldAdapter.newChild({kind:`child`,parent:this,pathNode:r,logic:o,initialKeyInParent:t,identityInParent:e,fieldAdapter:this.fieldAdapter})}};var _s=Ne$1(()=>[]);var gs=Ne$1(()=>!1);function xo(n,t){return n?t&&n.element.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_PRECEDING?t:n:t}var ui=class{node;selfTouched=H(!1);selfDirty=H(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=H([]);constructor(t){this.node=t}dirty=Ne$1(()=>{let t=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(t,(e,i)=>i||e.nodeState.dirty(),bo)});touched=Ne$1(()=>{let t=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(t,(e,i)=>i||e.nodeState.touched(),bo)});disabledReasons=Ne$1(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)],{equal:Q});disabled=Ne$1(()=>!!this.disabledReasons().length);readonly=Ne$1(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=Ne$1(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=Ne$1(()=>{let t=this.node.structure.parent;return t?`${t.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=Ne$1(()=>{if(this.node.logicNode.logic.hasMetadata(ai)){let e=this.node.logicNode.logic.getMetadata(ai).compute(this.node.context);if(e)return i=>e(this.node.context,i)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=Ne$1(()=>this.hidden()||this.disabled()||this.readonly())};var fi=class{newRoot(t,e,i,r){return new xt({kind:`root`,fieldManager:t,value:e,pathNode:i,logic:i.builder.build(),fieldAdapter:r})}newChild(t){return new xt(t)}createNodeState(t){return new ui(t)}createValidationState(t){return new oi(t)}createStructure(t,e){return t.createStructure(e)}};var hi=class{injector;rootName;submitOptions;constructor(t,e,i){this.injector=t,this.rootName=e??`${this.injector.get(Kn)}.form${bs++}`,this.submitOptions=i}structures=new Set;createFieldManagementEffect(t){bt$1(()=>{let e=new Set;this.markStructuresLive(t,e);for(let i of this.structures)e.has(i)||(this.structures.delete(i),w(()=>i.destroy()))},{injector:this.injector})}markStructuresLive(t,e){e.add(t);for(let i of t.children())this.markStructuresLive(i.structure,e)}};var bs=0;var Oo=new I(``);function ys(n){let t,e,i;return n.length===3?[t,e,i]=n:n.length===2?os(n[1])?[t,e]=n:[t,i]=n:[t]=n,[t,e,i]}function yi(...n){let[t,e,i]=ys(n),r=i?.injector??m(se),o=Je$1(r,()=>fn.rootCompile(e)),a=new hi(r,i?.name,i?.submission),s=i?.adapter??new fi,d=xt.newRoot(a,t,o,s);a.createFieldManagementEffect(d.structure);let{experimentalWebMcpTool:l}=i??{};if(l){let m$2=Je$1(r,()=>m(Oo,{optional:!0}));m$2&&Je$1(r,()=>m$2(d.fieldTree,{name:l.name,description:l.description}))}return d.fieldTree}var _n=class{kind=`compat`;control;fieldTree;context;message;constructor({context:t,kind:e,control:i}){this.context=t,this.kind=e,this.control=i}};function Fo(n){if(n.length===0)return null;let t={};for(let e of n)t[e.kind]=e instanceof _n?e.context:e;return t}function Do(n,t){return n===null?[]:Object.entries(n).map(([e,i])=>new _n({context:i,kind:e,control:t}))}var vs=new I(``);function Bo(n,t){bn(n);let e=ce.unwrapFieldPath(n),i;typeof t==`function`||typeof t==`string`?i=t:i=t?.when,e.builder.addDisabledReasonRule(r=>{let o=!0;return typeof i==`string`?o=i:i&&(o=i(r)),typeof o==`string`?{fieldTree:r.fieldTree,message:o}:o?{fieldTree:r.fieldTree}:void 0})}function yn(n,t){return n instanceof Function?n(t):n}function qo(n){return typeof n==`number`?isNaN(n):n===``||n===!1||n==null}function Po(n){return n===void 0?[]:Array.isArray(n)?n:[n]}function tt(n,t){bn(n),ce.unwrapFieldPath(n).builder.addSyncErrorRule(i=>Ao(t(i),i.fieldTree))}function xs(n){return new vi(n)}function Ss(n){return new xi(n)}var St=class{__brand=void 0;kind=``;fieldTree;message;constructor(t){t&&Object.assign(this,t)}};var vi=class extends St{kind=`required`};var xi=class extends St{kind=`email`};var vn=class extends St{kind=`parse`};var ws=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function Vo(n,t){tt(n,e=>{if(!(t?.when&&!t.when(e))&&!qo(e.value())&&!ws.test(e.value()))return t?.error?yn(t.error,e):Ss({message:yn(t?.message,e)})})}function xn(n,t){let e=pi(n,Ne(),i=>t?.when?t.when(i):!0);pi(n,bi,({state:i})=>i.metadata(e)()),tt(n,i=>{if(i.state.metadata(e)()&&qo(i.value()))return t?.error?yn(t.error,i):xs({message:yn(t?.message,i)})})}function Cs(n,t,e){let i=Rs$1({source:n,computation:()=>[],equal:Q}),r=a=>{let s=e(a);i.set(Po(s.error)),s.value!==void 0&&t(s.value),i.set(Po(s.error))},o=()=>{i.set([])};return{errors:i.asReadonly(),setRawValue:r,reset:o}}var Si=class{field;constructor(t){this.field=t}control=this;get value(){return this.field().controlValue()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return Fo(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return`DISABLED`;if(this.field().valid())return`VALID`;if(this.field().invalid())return`INVALID`;if(this.field().pending())return`PENDING`;throw new v(1910,!1)}valueAccessor=null;hasValidator(t){return t===FE.required?this.field().required():!1}updateValueAndValidity(){}};var wi={disabled:`disabled`,disabledReasons:`disabledReasons`,dirty:`dirty`,errors:`errors`,hidden:`hidden`,invalid:`invalid`,max:`max`,maxLength:`maxLength`,min:`min`,minLength:`minLength`,name:`name`,pattern:`pattern`,pending:`pending`,readonly:`readonly`,required:`required`,touched:`touched`};var Ns=(()=>{let n={};for(let t of Object.keys(wi))n[wi[t]]=t;return n})();function Ci(n,t){return n[Ns[t]]?.()}var Ni=Object.values(wi);function Sn(){return{}}function Me(n,t,e){return n[t]!==e?(n[t]=e,!0):!1}function Ms(n,t,e){let i;if($o(n)&&e.isBadInput(n))return{error:new vn};switch(n.type){case`checkbox`:return{value:n.checked};case`number`:case`range`:case`datetime-local`:if(i=w(t),typeof i==`number`||i===null)return{value:n.value===``?null:n.valueAsNumber};break;case`date`:case`month`:case`time`:case`week`:if(i=w(t),i===null||i instanceof Date)return{value:n.valueAsDate};if(typeof i==`number`)return{value:n.valueAsNumber};break}if(n.tagName===`INPUT`&&n.type===`text`&&(i??=w(t),typeof i==`number`||i===null)){if(n.value===``)return{value:null};let r=Number(n.value);return Number.isNaN(r)?{error:new vn}:{value:r}}return{value:n.value}}function Lo(n,t){switch(n.type){case`checkbox`:n.checked=t;return;case`radio`:n.checked=t===n.value;return;case`number`:case`range`:case`datetime-local`:if(typeof t==`number`){zo(n,t);return}else if(t===null){n.value=``;return}break;case`date`:case`month`:case`time`:case`week`:if(t===null||t instanceof Date){n.valueAsDate=t;return}else if(typeof t==`number`){zo(n,t);return}}if(n.tagName===`INPUT`&&n.type===`text`){if(typeof t==`number`){n.value=isNaN(t)?``:String(t);return}if(t===null){n.value=``;return}}n.value=t}function zo(n,t){isNaN(t)?n.value=``:n.valueAsNumber=t}function $o(n){return n.tagName===`INPUT`}function ks(n){return n.type===`date`||n.type===`datetime-local`||n.type===`month`||n.type===`time`||n.type===`week`}function Es(n,t){let e=n.getUTCFullYear(),i=String(n.getUTCMonth()+1).padStart(2,`0`);if(t===`month`)return`${e}-${i}`;return`${e}-${i}-${String(n.getUTCDate()).padStart(2,`0`)}`}function Ho(n,t,e){return t instanceof Date&&(n===`min`||n===`max`)&&(e===`date`||e===`month`)?Es(t,e):t}function Rs(n,t){n.listenToCustomControlModel(i=>t.state().controlValue.set(i)),n.listenToCustomControlOutput(`touch`,()=>t.state().markAsTouched()),t.registerAsBinding(n.customControl);let e=Sn();return()=>{let i=t.state(),r=i.controlValue();Me(e,`controlValue`,r)&&n.setCustomControlModelInput(r);for(let o of Ni){let a;if(o===`errors`?a=t.errors():a=Ci(i,o),Me(e,o,a)&&(n.setInputOnDirectives(o,a),t.elementAcceptsNativeProperty(o)&&!n.customControlHasInput(o))){let s=Ho(o,a,t.nativeFormElement.type);jV(t.renderer,t.nativeFormElement,o,s)}}}}function As(n){return typeof n==`object`&&n!==null}function Is(n,t){let e=Sn();t.controlValueAccessor.registerOnChange(r=>{e.controlValue=r,t.state().controlValue.set(r)}),t.controlValueAccessor.registerOnTouched(()=>t.state().markAsTouched());let i=t.injector.get(Ys$1,null,{optional:!0,self:!0});if(i){let r;for(let d of i)As(d)&&d.registerOnValidatorChange&&(r??=H(0),d.registerOnValidatorChange(()=>{r.update(l=>l+1)}));let o=i.map(d=>typeof d==`function`?d:d.validate.bind(d)),a=FE.compose(o),s=Ne$1(()=>{r?.();return Do(a?a(t.interopNgControl.control):null,t.interopNgControl.control)});t.parseErrorsSource.set(s)}return t.registerAsBinding({reset:()=>{let r=t.state().value();e.controlValue=r,w(()=>t.controlValueAccessor.writeValue(r))}}),()=>{let r=t.state(),o=r.controlValue();Me(e,`controlValue`,o)&&w(()=>t.controlValueAccessor.writeValue(o));for(let a of Ni){let s=Ci(r,a);if(Me(e,a,s)){let d=n.setInputOnDirectives(a,s,a===`name`?Ts:void 0);a===`disabled`&&t.controlValueAccessor.setDisabledState?w(()=>t.controlValueAccessor.setDisabledState(s)):!d&&t.elementAcceptsNativeProperty(a)&&jV(t.renderer,t.nativeFormElement,a,s)}}}}function Ts(n){return n==null}function Os(n,t,e){if(typeof MutationObserver!=`function`)return;let i=new MutationObserver(r=>{r.some(o=>Fs(o))&&t()});i.observe(n,{attributes:!0,attributeFilter:[`value`],characterData:!0,childList:!0,subtree:!0}),e.onDestroy(()=>i.disconnect())}function Fs(n){if(n.type===`childList`||n.type===`characterData`){if(n.target instanceof Comment)return!1;for(let t of n.addedNodes)if(!(t instanceof Comment))return!0;for(let t of n.removedNodes)if(!(t instanceof Comment))return!0;return!1}return n.type===`attributes`&&n.target instanceof HTMLOptionElement}function Ds(n,t,e,i){let r=!1,o=t.nativeFormElement,a=Cs(()=>t.state().value(),d=>t.state().controlValue.set(d),d=>Ms(o,t.state().value,i));e.set(a.errors),t.onReset=()=>{a.reset();let d=t.state().value();s.controlValue=d,Lo(o,d)},n.listenToDom(`input`,()=>a.setRawValue(void 0)),n.listenToDom(`blur`,()=>t.state().markAsTouched()),$o(o)&&ks(o)&&i.watchValidity(t.destroyRef,o,()=>a.setRawValue(void 0)),t.registerAsBinding(),o.tagName===`SELECT`&&Os(o,()=>{r&&(o.value=t.state().controlValue())},t.destroyRef);let s=Sn();return()=>{let d=t.state();for(let h of Ni){let x=Ci(d,h);if(Me(s,h,x)&&(n.setInputOnDirectives(h,x),t.elementAcceptsNativeProperty(h))){let G=Ho(h,x,o.type);jV(t.renderer,o,h,G)}}let l=d.controlValue(),m=Me(s,`controlValue`,l),u=o.type===`radio`&&Me(s,`radioValue`,o.value);(m||u)&&Lo(o,l),r=!0}}var jo=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵprov=G({token:n,factory:e=>Ps.ɵfac(e),providedIn:`root`})}return n})();var Ps=(()=>{class n extends jo{document=m(Q$1);cspNonce=m(os$1,{optional:!0});injectedStyles=new WeakMap;watchValidity(e,i,r){let o=i.getRootNode();this.injectedStyles.has(o)||this.injectedStyles.set(o,this.createTransitionStyle(o));let a=s=>{let d=s;(d.animationName===`ng-valid`||d.animationName===`ng-invalid`)&&r()};i.addEventListener(`animationstart`,a),e.onDestroy(()=>{i.removeEventListener(`animationstart`,a)})}isBadInput(e){return e.validity?.badInput??!1}createTransitionStyle(e){let i=this.document.createElement(`style`);return this.cspNonce&&(i.nonce=this.cspNonce),i.textContent=`
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `,e.nodeType===9?e.head?.appendChild(i):e.appendChild(i),i}ngOnDestroy(){this.injectedStyles.get(this.document)?.remove()}static ɵfac=(()=>{let e;return function(r){return(e||(e=zn(n)))(r||n)}})();static ɵprov=G({token:n,factory:n.ɵfac})}return n})();var Ls=Symbol();var et=new I(``);var Gc=(()=>{class n{field=Md$1.required({alias:`formField`});state=Ne$1(()=>this.field()());renderer=m(ut);destroyRef=m(je);injector=m(se);element=m(we$1).nativeElement;elementIsNativeFormElement=BV(this.element);elementAcceptsTextualValues=bte(this.element);_elementAcceptsMinMax;nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=e=>this.element.focus(e);controlValueAccessors=m($s$1,{optional:!0,self:!0});config=m(vs,{optional:!0});validityMonitor=m(jo);parseErrorsSource=H(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new Si(this.state)}parseErrors=Ne$1(()=>this.parseErrorsSource()?.().map(e=>m$1(l({},e),{fieldTree:w(this.state).fieldTree,formField:this}))??[],{equal:Q});errors=Ne$1(()=>this.state().errors().filter(e=>!e.formField||e.formField===this),{equal:Q});isFieldBinding=!1;resetter=()=>{};parseErrorsResetCallback;setParseErrors(e){this.parseErrorsSource.set(e)}set onReset(e){this.parseErrorsResetCallback=e}get onReset(){return this.parseErrorsResetCallback}get controlValueAccessor(){return!this.controlValueAccessors||this.controlValueAccessors.length===0?this.interopNgControl?.valueAccessor??void 0:tG(this.interopNgControl,this.controlValueAccessors)??void 0}installClassBindingEffect(){let e=Object.entries(this.config?.classes??{}).map(([r,o])=>[r,Ne$1(()=>o(this))]);if(e.length===0)return;let i=Sn();hQ({write:()=>{for(let[r,o]of e){let a=o();Me(i,r,a)&&(a?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r))}}},{injector:this.injector})}focus(e){this.focuser(e)}reset(){this.resetter(),this.parseErrorsResetCallback?.(this.state().value())}registerAsBinding(e){if(this.isFieldBinding)throw new v(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),e?.focus&&(this.focuser=i=>e.focus(i)),e?.reset&&(this.resetter=()=>e.reset()),bt$1(i=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),i(()=>{r.nodeState.formFieldBindings.update(o=>o.filter(a=>a!==this))})},{injector:this.injector})}[Ls];ɵngControlCreate(e){if(!e.hasPassThrough)if(this.controlValueAccessor)this.ɵngControlUpdate=Is(e,this);else if(e.customControl)this.ɵngControlUpdate=Rs(e,this);else if(this.elementIsNativeFormElement)this.ɵngControlUpdate=Ds(e,this,this.parseErrorsSource,this.validityMonitor);else throw new v(1914,!1)}ɵngControlUpdate;elementAcceptsNativeProperty(e){if(!this.elementIsNativeFormElement)return!1;switch(e){case`min`:case`max`:return this._elementAcceptsMinMax??=Ote(this.element);case`minLength`:case`maxLength`:return this.elementAcceptsTextualValues;case`disabled`:case`required`:case`readonly`:case`name`:return!0;default:return!1}}static ɵfac=function(i){return new(i||n)};static ɵdir=J$1({type:n,selectors:[[``,`formField`,``]],inputs:{field:[1,`formField`,`field`]},exportAs:[`formField`],features:[Pt([{provide:et,useExisting:n},{provide:go$1,useFactory:()=>m(n).interopNgControl},{provide:qV,useFactory:()=>m(et,{self:!0})}]),md$1(`formField`)]})}return n})();var Uo=new I(`MAT_INPUT_VALUE_ACCESSOR`);var Mi=class{_box;_destroyed=new q;_resizeSubject=new q;_resizeObserver;_elementObservables=new Map;constructor(t){this._box=t,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(t){return this._elementObservables.has(t)||this._elementObservables.set(t,new V(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(t,{box:this._box}),()=>{this._resizeObserver?.unobserve(t),i.unsubscribe(),this._elementObservables.delete(t)}}).pipe(mt(e=>e.some(i=>i.target===t)),CM({bufferSize:1,refCount:!0}),hr(this._destroyed))),this._elementObservables.get(t)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var Go=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=m(me$1);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||`content-box`;return this._observers.has(r)||this._observers.set(r,new Mi(r)),this._observers.get(r).observe(e)}static ɵfac=function(i){return new(i||n)};static ɵprov=k({token:n,factory:n.ɵfac})}return n})();var zs=[`notch`];var Bs=[`*`];var Ko=[`iconPrefixContainer`];var Wo=[`textPrefixContainer`];var Qo=[`iconSuffixContainer`];var Yo=[`textSuffixContainer`];var qs=[`textField`];var Vs=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]];var $s=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function Hs(n,t){n&1&&ao(0,`span`,21)}function js(n,t){if(n&1&&(oi$1(0,`label`,20),As$1(1,1),uc(2,Hs,1,0,`span`,21),Ds$1()),n&2){let e=fc(2);Ts$1(`floating`,e._shouldLabelFloat())(`monitorResize`,e._hasOutline())(`id`,e._labelId),Qn(`for`,e._control.disableAutomaticLabeling?null:e._control.id),gs$1(2),lc(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Us(n,t){if(n&1&&uc(0,js,3,5,`label`,20),n&2)lc(fc()._hasFloatingLabel()?0:-1)}function Gs(n,t){n&1&&ao(0,`div`,7)}function Ks(n,t){}function Ws(n,t){if(n&1&&VD(0,Ks,0,0,`ng-template`,13),n&2){fc(2);Ts$1(`ngTemplateOutlet`,$k(1))}}function Qs(n,t){if(n&1&&(oi$1(0,`div`,9),uc(1,Ws,1,1,null,13),Ds$1()),n&2){let e=fc();Ts$1(`matFormFieldNotchedOutlineOpen`,e._shouldLabelFloat()),gs$1(),lc(e._forceDisplayInfixLabel()?-1:1)}}function Ys(n,t){n&1&&(oi$1(0,`div`,10,2),As$1(2,2),Ds$1())}function Xs(n,t){n&1&&(oi$1(0,`div`,11,3),As$1(2,3),Ds$1())}function Zs(n,t){}function Js(n,t){if(n&1&&VD(0,Zs,0,0,`ng-template`,13),n&2){fc();Ts$1(`ngTemplateOutlet`,$k(1))}}function ed(n,t){n&1&&(oi$1(0,`div`,14,4),As$1(2,4),Ds$1())}function td(n,t){n&1&&(oi$1(0,`div`,15,5),As$1(2,5),Ds$1())}function nd(n,t){n&1&&ao(0,`div`,16)}function id(n,t){n&1&&(oi$1(0,`div`,18),As$1(1,6),Ds$1())}function rd(n,t){if(n&1&&(oi$1(0,`mat-hint`,22),c_(1),Ds$1()),n&2){let e=fc(2);Ts$1(`id`,e._hintLabelId),gs$1(),pA(e.hintLabel)}}function od(n,t){if(n&1&&(oi$1(0,`div`,19),uc(1,rd,2,2,`mat-hint`,22),As$1(2,7),ao(3,`div`,23),As$1(4,8),Ds$1()),n&2){let e=fc();gs$1(),lc(e.hintLabel?1:-1)}}var ki=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=J$1({type:n,selectors:[[`mat-label`]]})}return n})();var ia=new I(`MatError`);var ad=(()=>{class n{id=m(hu$1).getId(`mat-mdc-error-`);static ɵfac=function(i){return new(i||n)};static ɵdir=J$1({type:n,selectors:[[`mat-error`],[``,`matError`,``]],hostAttrs:[1,`mat-mdc-form-field-error`,`mat-mdc-form-field-bottom-align`],hostVars:1,hostBindings:function(i,r){i&2&&vd$1(`id`,r.id)},inputs:{id:`id`},features:[Pt([{provide:ia,useExisting:n}])]})}return n})();var Ei=(()=>{class n{align=`start`;id=m(hu$1).getId(`mat-mdc-hint-`);static ɵfac=function(i){return new(i||n)};static ɵdir=J$1({type:n,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(i,r){i&2&&(vd$1(`id`,r.id),Qn(`align`,null),jt(`mat-mdc-form-field-hint-end`,r.align===`end`))},inputs:{align:`align`,id:`id`}})}return n})();var ra=new I(`MatPrefix`);var sd=(()=>{class n{set _isTextSelector(e){this._isText=!0}_isText=!1;static ɵfac=function(i){return new(i||n)};static ɵdir=J$1({type:n,selectors:[[``,`matPrefix`,``],[``,`matIconPrefix`,``],[``,`matTextPrefix`,``]],inputs:{_isTextSelector:[0,`matTextPrefix`,`_isTextSelector`]},features:[Pt([{provide:ra,useExisting:n}])]})}return n})();var oa=new I(`MatSuffix`);var dd=(()=>{class n{set _isTextSelector(e){this._isText=!0}_isText=!1;static ɵfac=function(i){return new(i||n)};static ɵdir=J$1({type:n,selectors:[[``,`matSuffix`,``],[``,`matIconSuffix`,``],[``,`matTextSuffix`,``]],inputs:{_isTextSelector:[0,`matTextSuffix`,`_isTextSelector`]},features:[Pt([{provide:oa,useExisting:n}])]})}return n})();var aa=new I(`FloatingLabelParent`);var Xo=(()=>{class n{_elementRef=m(we$1);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=m(Go);_ngZone=m(me$1);_parent=m(aa);_resizeSubscription=new Ee;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return ld(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(i){return new(i||n)};static ɵdir=J$1({type:n,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(i,r){i&2&&jt(`mdc-floating-label--float-above`,r.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return n})();function ld(n){let t=n;if(t.offsetParent!==null)return t.scrollWidth;let e=t.cloneNode(!0);e.style.setProperty(`position`,`absolute`),e.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var Zo=`mdc-line-ripple--active`;var wn=`mdc-line-ripple--deactivating`;var Jo=(()=>{class n{_elementRef=m(we$1);_cleanupTransitionEnd;constructor(){let e=m(me$1),i=m(ut);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(wn),e.add(Zo)}deactivate(){this._elementRef.nativeElement.classList.add(wn)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(wn);e.propertyName===`opacity`&&r&&i.remove(Zo,wn)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(i){return new(i||n)};static ɵdir=J$1({type:n,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return n})();var ea=(()=>{class n{_elementRef=m(we$1);_ngZone=m(me$1);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(`.mdc-floating-label`);i?(e.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(i.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration=``)}))):e.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width=``:i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${e}px)`)}static ɵfac=function(i){return new(i||n)};static ɵcmp=Tt$1({type:n,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(i,r){if(i&1&&Td$1(zs,5),i&2){let o;pc(o=mc())&&(r._notch=o.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(i,r){i&2&&jt(`mdc-notched-outline--notched`,r.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:Bs,decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(i,r){i&1&&(hc(),KD(0,`div`,1),Ed$1(1,`div`,2,0),As$1(3),Sd$1(),KD(4,`div`,3))},encapsulation:2})}return n})();var wt=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static ɵfac=function(i){return new(i||n)};static ɵdir=J$1({type:n})}return n})();var Ct=new I(`MatFormField`);var cd=new I(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var ta=`fill`;var md=`auto`;var na=`fixed`;var ud=`translateY(-50%)`;var sa=(()=>{class n{_elementRef=m(we$1);_changeDetectorRef=m($t);_platform=m(Ct$1);_idGenerator=m(hu$1);_ngZone=m(me$1);_defaults=m(cd,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=uQ(`iconPrefixContainer`);_textPrefixContainerSignal=uQ(`textPrefixContainer`);_iconSuffixContainerSignal=uQ(`iconSuffixContainer`);_textSuffixContainerSignal=uQ(`textSuffixContainer`);_prefixSuffixContainers=Ne$1(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=dQ(ki);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Mce(e)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||md}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||ta;this._appearanceSignal.set(i)}_appearanceSignal=H(ta);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||na}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||na}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new q;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=sa$1();constructor(){let e=this._defaults,i=m(Wj);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),bt$1(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Ne$1(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(e){let i=this._control,r=`mat-mdc-form-field-type-`;e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(ya$1([void 0,void 0]),ne(()=>[i.errorState,i.userAriaDescribedBy]),AM(),mt(([[o,a],[s,d]])=>o!==s||a!==d)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(hr(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),SM(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,e),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,e)}_syncOutlineLabelOffset(){hQ({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Ne$1(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&e.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let o=this._hintChildren?this._hintChildren.find(s=>s.align===`start`):null,a=this._hintChildren?this._hintChildren.find(s=>s.align===`end`):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=i?.getBoundingClientRect().width??0,d=r?.getBoundingClientRect().width??0,l=o?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${ud} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${a+s}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,a+s+d+l]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static ɵfac=function(i){return new(i||n)};static ɵcmp=Tt$1({type:n,selectors:[[`mat-form-field`]],contentQueries:function(i,r,o){if(i&1&&(eA(o,r._labelChild,ki,5),Id$1(o,wt,5)(o,ra,5)(o,oa,5)(o,ia,5)(o,Ei,5)),i&2){jk();let a;pc(a=mc())&&(r._formFieldControl=a.first),pc(a=mc())&&(r._prefixChildren=a),pc(a=mc())&&(r._suffixChildren=a),pc(a=mc())&&(r._errorChildren=a),pc(a=mc())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(tA(r._iconPrefixContainerSignal,Ko,5)(r._textPrefixContainerSignal,Wo,5)(r._iconSuffixContainerSignal,Qo,5)(r._textSuffixContainerSignal,Yo,5),Td$1(qs,5)(Ko,5)(Wo,5)(Qo,5)(Yo,5)(Xo,5)(ea,5)(Jo,5)),i&2){jk(4);let o;pc(o=mc())&&(r._textField=o.first),pc(o=mc())&&(r._iconPrefixContainer=o.first),pc(o=mc())&&(r._textPrefixContainer=o.first),pc(o=mc())&&(r._iconSuffixContainer=o.first),pc(o=mc())&&(r._textSuffixContainer=o.first),pc(o=mc())&&(r._floatingLabel=o.first),pc(o=mc())&&(r._notchedOutline=o.first),pc(o=mc())&&(r._lineRipple=o.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(i,r){i&2&&jt(`mat-mdc-form-field-label-always-float`,r._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,r._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,r._hasIconSuffix)(`mat-form-field-invalid`,r._control.errorState)(`mat-form-field-disabled`,r._control.disabled)(`mat-form-field-autofilled`,r._control.autofilled)(`mat-form-field-appearance-fill`,r.appearance==`fill`)(`mat-form-field-appearance-outline`,r.appearance==`outline`)(`mat-form-field-hide-placeholder`,r._hasFloatingLabel()&&!r._shouldLabelFloat())(`mat-primary`,r.color!==`accent`&&r.color!==`warn`)(`mat-accent`,r.color===`accent`)(`mat-warn`,r.color===`warn`)(`ng-untouched`,r._shouldForward(`untouched`))(`ng-touched`,r._shouldForward(`touched`))(`ng-pristine`,r._shouldForward(`pristine`))(`ng-dirty`,r._shouldForward(`dirty`))(`ng-valid`,r._shouldForward(`valid`))(`ng-invalid`,r._shouldForward(`invalid`))(`ng-pending`,r._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[Pt([{provide:Ct,useExisting:n},{provide:aa,useExisting:n}])],ngContentSelectors:$s,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(i,r){if(i&1&&(hc(Vs),VD(0,Us,1,1,`ng-template`,null,0,Ux),oi$1(2,`div`,6,1),Bt(`click`,function(a){return r._control.onContainerClick(a)}),uc(4,Gs,1,0,`div`,7),oi$1(5,`div`,8),uc(6,Qs,2,2,`div`,9),uc(7,Ys,3,0,`div`,10),uc(8,Xs,3,0,`div`,11),oi$1(9,`div`,12),uc(10,Js,1,1,null,13),As$1(11),Ds$1(),uc(12,ed,3,0,`div`,14),uc(13,td,3,0,`div`,15),Ds$1(),uc(14,nd,1,0,`div`,16),Ds$1(),oi$1(15,`div`,17),uc(16,id,2,0,`div`,18)(17,od,5,1,`div`,19),Ds$1()),i&2){let o;gs$1(2),jt(`mdc-text-field--filled`,!r._hasOutline())(`mdc-text-field--outlined`,r._hasOutline())(`mdc-text-field--no-label`,!r._hasFloatingLabel())(`mdc-text-field--disabled`,r._control.disabled)(`mdc-text-field--invalid`,r._control.errorState),gs$1(2),lc(!r._hasOutline()&&!r._control.disabled?4:-1),gs$1(2),lc(r._hasOutline()?6:-1),gs$1(),lc(r._hasIconPrefix?7:-1),gs$1(),lc(r._hasTextPrefix?8:-1),gs$1(2),lc(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),gs$1(2),lc(r._hasTextSuffix?12:-1),gs$1(),lc(r._hasIconSuffix?13:-1),gs$1(),lc(r._hasOutline()?-1:14),gs$1(),jt(`mat-mdc-form-field-subscript-dynamic-size`,r.subscriptSizing===`dynamic`);let a=r._getSubscriptMessageType();gs$1(),lc((o=a)===`error`?16:o===`hint`?17:-1)}},dependencies:[Xo,ea,XF,Jo,Ei],styles:[`.mdc-text-field {
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
`],encapsulation:2})}return n})();var Nt=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Ve({type:n});static ɵinj=Le({imports:[hb,sa,ua$1]})}return n})();var fd=[`button`,`checkbox`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`];var hd=new I(`MAT_INPUT_CONFIG`);var Hm=(()=>{class n{_elementRef=m(we$1);_platform=m(Ct$1);ngControl=m(go$1,{optional:!0,self:!0});_autofillMonitor=m(_o);_ngZone=m(me$1);_formField=m(Ct,{optional:!0});_renderer=m(ut);_uid=m(hu$1).getId(`mat-input-`);_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=m(hd,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new q;controlType=`mat-input`;autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Mce(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(FE.required)??!1}set required(e){this._required=Mce(e)}_required;get type(){return this._type}set type(e){this._type=e||`text`,this._validateType(),!this._isTextarea&&kse().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type=`text`;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Mce(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=[`date`,`datetime`,`datetime-local`,`month`,`time`,`week`].filter(e=>kse().has(e));constructor(){let e=m(oG,{optional:!0}),i=m(cG,{optional:!0}),r=m(sue),o=m(Uo,{optional:!0,self:!0}),a=m(et,{optional:!0,self:!0}),s=this._elementRef.nativeElement,d=s.nodeName.toLowerCase();o?Mt$1(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=s,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(s,`keyup`,this._iOSKeyupListener)}),this._errorStateTracker=new xb(r,a||this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=d===`select`,this._isTextarea=d===`textarea`,this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=s.multiple?`mat-native-select-multiple`:`mat-native-select`),this._signalBasedValueAccessor&&bt$1(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type===`number`?(i.type=`text`,i.setSelectionRange(0,0),i.type=`number`):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute(`placeholder`,e):i.removeAttribute(`placeholder`)}}_getPlaceholder(){return this.placeholder||null}_validateType(){fd.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute(`aria-describedby`,e.join(` `)):i.removeAttribute(`aria-describedby`)}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(i){return new(i||n)};static ɵdir=J$1({type:n,selectors:[[`input`,`matInput`,``],[`textarea`,`matInput`,``],[`select`,`matNativeControl`,``],[`input`,`matNativeControl`,``],[`textarea`,`matNativeControl`,``]],hostAttrs:[1,`mat-mdc-input-element`],hostVars:21,hostBindings:function(i,r){i&1&&Bt(`focus`,function(){return r._focusChanged(!0)})(`blur`,function(){return r._focusChanged(!1)})(`input`,function(){return r._onInput()}),i&2&&(vd$1(`id`,r.id)(`disabled`,r.disabled&&!r.disabledInteractive)(`required`,r.required),Qn(`name`,r.name||null)(`readonly`,r._getReadonlyAttribute())(`aria-disabled`,r.disabled&&r.disabledInteractive?`true`:null)(`aria-invalid`,r.empty&&r.required?null:r.errorState)(`aria-required`,r.required)(`id`,r.id),jt(`mat-input-server`,r._isServer)(`mat-mdc-form-field-textarea-control`,r._isInFormField&&r._isTextarea)(`mat-mdc-form-field-input-control`,r._isInFormField)(`mat-mdc-input-disabled-interactive`,r.disabledInteractive)(`mdc-text-field__input`,r._isInFormField)(`mat-mdc-native-select-inline`,r._isInlineSelect()))},inputs:{disabled:`disabled`,id:`id`,placeholder:`placeholder`,name:`name`,required:`required`,type:`type`,errorStateMatcher:`errorStateMatcher`,userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],value:`value`,readonly:`readonly`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Dn]},exportAs:[`matInput`],features:[Pt([{provide:wt,useExisting:n}]),It$1]})}return n})();var jm=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Ve({type:n});static ɵinj=Le({imports:[Nt,Nt,go,ua$1]})}return n})();function Km(n,t,e){let i=$(n,e?.in);return i.setHours(t),i}var Mt=`/api/staff/v1/calendars`;async function Xm(){return(await nu(Mt)).map(t=>new WS(t))}async function da(n){let t=C6(n);return(await nu(`${Mt}/availability${t?`?`+t:``}`)).map(i=>new WS(i))}var pd=(n,t)=>n.filter(e=>!!e.resource).map(e=>new cr(m$1(l({},e.resource),{level:t?.levelWithID(e.resource.zones),availability:e.availability}))).filter(e=>e.bookable);async function Zm(n){let t=C6(n);return await nu(`${Mt}/free_busy${t?`?`+t:``}`)}async function la(n,t){let e=C6(n);return pd((await nu(`${Mt}/free_busy${e?`?`+e:``}`)).map(r=>new WS(r)),t)}async function Jm(n){return await nu(`${Mt}/${encodeURIComponent(n)}/permission`)}var ye=`/api/staff/v1/events`;var _d=as$1.raw||as$1.version||as$1.hash;function gd(){return Gh(`app.name`)||Gh(`app.short_name`)||`PlaceOS`}function ca(n){return m$1(l({},n),{extension_data:m$1(l({},n.extension_data||{}),{app_name:gd(),app_version:_d})})}async function au(n){return bd(n).catch(()=>[])}async function bd(n){return(await yd(n)).events}async function yd(n){let t=C6(n),e=`${ye}${t?`?`+t:``}`,i=await nu(e),r=cH(new URL(e,document.baseURI).href)[`x-calendar-issue`]||``;return{events:i.map(o=>new Uh(o)),failed_calendars:r.split(`,`).map(o=>o.trim().toLowerCase()).filter(Boolean)}}async function vd(n){return new Uh(await JN(`${ye}`,new Uh(ca(n)).toJSON()))}async function xd(n,t,e={},i=`patch`){let r=C6(e);return new Uh(await(i===`patch`?uH:eO)(`${ye}/${encodeURIComponent(n)}${r?`?`+r:``}`,new Uh(ca(t)).toJSON()))}var su=async(n,t)=>{let e=n.update_master&&n.recurring_event_id||n.id;return delete n?.status,e?xd(e,m$1(l({},n),{id:e}),t):vd(n)};function du(n,t={}){let e=C6(t);return lH(`${ye}/${encodeURIComponent(n)}${e?`?`+e:``}`,{response_type:`void`})}async function lu(n,t,e,i={}){let r=C6(m$1(l({},i),{state:e}));return new Rh(await JN(`${ye}/${encodeURIComponent(n)}/guests/${t}/checkin${r?`?`+r:``}`,``))}async function cu(n,t,e={}){let i=C6(e);return new Rh(await JN(`${ye}/${encodeURIComponent(n)}/attendee${i?`?`+i:``}`,t))}async function mu(n,t,e={}){let i=C6(e);return new Rh(await lH(`${ye}/${encodeURIComponent(n)}/attendee/${encodeURIComponent(t.email)}${i?`?`+i:``}`))}async function uu(n,t,e={}){let i=C6(l({},e));return await nu(`${ye}/${encodeURIComponent(n)}/metadata/${encodeURIComponent(t)}${i?`?`+i:``}`)}async function fu(n,t,e,i,r,o=[0,0]){let a=br(t,e).valueOf(),[s,d]=await Promise.all([da({system_ids:n.join(),period_start:Bt$1(t),period_end:Bt$1(a)}).catch(()=>[]),i&&n.includes(i)?la({period_start:Bt$1(t),period_end:Bt$1(a),system_ids:i}):Promise.resolve([])]),l=n.map(m=>!!s.find(u=>u.id===m||u.resource?.id===m));for(let m of d){if(!n.includes(m.id))continue;let u=m.availability.filter(h=>!(h.date===o[0]&&h.duration===o[1]));l[n.indexOf(m.id)]=!u.find(h=>h.status!==`free`)}return l}async function hu(n,t={}){let e=C6(m$1(l({},t),{limit:1e4}));try{let i=await JN(`${ye}/clashing-assets${e?`?`+e:``}`,n.toJSON());return t.include_clash_time,i}catch{return[]}}var J=`/api/staff/v1/bookings`;var Sd=as$1.raw||as$1.version||as$1.hash;function fa(){return Gh(`app.name`)||Gh(`app.short_name`)||`PlaceOS`}function Et(){return`${fa()}_${as$1.hash}_${ze().email||``}`}function Ri(n){let t=l({},n instanceof VS?n.toJSON():n);return delete t.created_at,m$1(l({},t),{extension_data:m$1(l({},t.extension_data||{}),{app_name:fa(),app_version:Sd})})}async function Rt(n){return ha(n).catch(()=>[])}async function ha(n){let t=C6(n);return(await nu(`${J}${t?`?`+t:``}`)).map(i=>new VS(i))}async function wd(n,t){try{let{data:e,next:i,total:r}=await yo$1({query_params:m$1(l({},n),{limit:Math.max(200,t||0)}),endpoint:J,path:`booked`}),o=[...e],a=1;for(;i&&(!r||o.length<r)&&a<=pa;){let s=await i();e=s.data,i=s.next,r=s.total,o=[...o,...e],a+=1}return Yie(o)}catch{return[]}}async function wu(n,t={}){let e=C6(m$1(l({},t),{limit:1e3}));try{let i=await JN(`${J}/clashing-assets${e?`?`+e:``}`,n.toJSON()).catch(()=>[]);return t.include_clash_time,i}catch{return[]}}var pa=50;async function Cu(n){try{let{data:t,next:e}=await yo$1({query_params:n,fn:o=>new VS(o),endpoint:J,path:``}),i=[...t],r=1;for(;e&&r<=pa;){let o=await e();t=o.data,e=o.next,i=[...i,...t],r+=1}return Yie(i,`id`)}catch{return[]}}async function Nu(n){return new VS(await nu(`${J}/${encodeURIComponent(n)}`))}function Ai(n){if(!n)throw new Error(`Missing parent booking id`);let t=Number(n);return Number.isSafeInteger(t)?t:n}async function nt(n,t){let e=C6(m$1(l({},t),{utm_source:Et()}));return new VS(await JN(`${J}${e?`?`+e:``}`,Ri(n)))}async function _a(n,t,e=`patch`){return new VS(await(e===`patch`?uH:eO)(`${J}/${encodeURIComponent(n)}`,Ri(t)))}async function Cd(n,t,e,i=`patch`){return new VS(await(i===`patch`?uH:eO)(`${J}/${encodeURIComponent(n)}/instance/${t}`,Ri(e)))}var Mu=async(n,t)=>{let e=n.id;delete n.id;let i=t?.instance;return t&&delete t.instance,e?i?Cd(e,n.instance||n.booking_start,n):_a(e,n):nt(wG(n,[``,null,void 0])||{},t)};function kt(n,t={}){if(t.instance)return Nd(n,t.start_time);let e=C6({utm_source:Et()});return lH(`${J}/${encodeURIComponent(n)}?${e}`,{response_type:`void`})}function Nd(n,t){let e=C6({utm_source:Et()});return lH(`${J}/${encodeURIComponent(n)}/instance/${t}?${e}`,{response_type:`void`})}async function Md(n,t){let e=C6({state:t});try{return new VS(await JN(`${J}/${encodeURIComponent(n)}/check_in?${e}&utm_source=${Et()}`,``))}catch(i){let r=await i.json();throw r.error||r.message||r}}async function kd(n,t,e){let i=C6({state:e});try{return new VS(await JN(`${J}/${encodeURIComponent(n)}/check_in/${t}?${i}&utm_source=${Et()}`,``))}catch(r){let o=await r.json();throw o.error||o.message||o}}async function ku(n,t){return!!n.instance||!!n.recurrence_type&&n.recurrence_type!==`none`?kd(n.id,n.instance||n.booking_start,t):Md(n.id,t)}async function Eu(n,t,e,i,r=`room`){let o=await Rt({type:r,period_start:Bt$1(t),period_end:Bt$1(br(t,e))});return n.map(a=>!o.find(s=>(s.asset_id===a||s.asset_ids.includes(a))&&(!i||i!==s.id)))}async function Ed(n,t){return n.from_bookings?n.linked_bookings.filter(i=>i.booking_type===t).map(i=>new VS(i)):(await ha({type:t,event_id:n.id,period_start:Bt$1(n.date),period_end:Bt$1(br(n.date,n.duration)),limit:500})).filter(i=>i.extension_data?.parent_id===n.id)}function Rd(n,t){return n.from_bookings?[]:(n.linked_bookings||[]).filter(e=>{let i=e.extension_data?.parent_id;return e.booking_type===t&&!!i&&i!==n.id}).map(e=>e.id)}function Ad(n,t){return t.id&&n.extension_data?.details?.id===t.id||t.email&&n.attendees?.find(e=>e.email===t.email)?!0:!!n.asset_ids?.find(e=>t.items?.find(i=>i.item_ids?.includes(e)))}function ma(n){let t=JSON.parse(JSON.stringify(n??null));return t&&typeof t==`object`&&delete t.deliver_at_time,JSON.stringify(t,(e,i)=>i&&typeof i==`object`&&!Array.isArray(i)?Object.fromEntries(Object.entries(i).sort(([r],[o])=>r<o?-1:1)):i)}function ua(n=[]){return n.map(t=>t.email?.toLowerCase()).sort().join(`,`)}function Id(n,t){let e={};(n.booking_start!==t.booking_start||n.booking_end!==t.booking_end)&&(e.booking_start=t.booking_start,e.booking_end=t.booking_end,e.all_day=t.all_day);for(let r of[`title`,`description`,`asset_name`])n[r]!==t[r]&&(e[r]=t[r]);return n.user_email.toLowerCase()!==t.user_email.toLowerCase()&&(e.user_email=t.user_email),n.asset_id!==t.asset_id&&(e.asset_id=t.asset_id,e.asset_ids=t.asset_ids),[...n.zones].sort().join()!==[...t.zones].sort().join()&&(e.zones=t.zones),ua(n.attendees)!==ua(t.attendees)&&(e.attendees=t.attendees),!(ma(n.extension_data?.details)!==ma(t.extension_data?.details))&&!Object.keys(e).length?null:m$1(l({},e),{extension_data:t.extension_data})}async function Ru(n,t,e){let i=await Ed(n,t),r=n.system?.zones||Yie(Zie(n.resources.map(s=>s.zones)))||[],o=new Set,a=[];try{for(let s of Rd(n,t))await kt(s);for(let s of e){let d=i.find(x=>!o.has(x.id)&&Ad(x,s)),l$2=t===`catering-order`&&s.system_id?n.resources.find(x=>x.id===s.system_id||x.email===s.system_id):void 0,m=l$2?.id||s.system_id||s.email||s.id,u=l$2?.display_name||l$2?.name||s.name,h=new VS({type:t,booking_type:t,date:n.date,duration:n.duration,description:n.title||s.name,user_email:n.host,asset_id:m,asset_name:u,title:n.title,attendees:s.email?[new oo(s)]:[],extension_data:{parent_id:n.id,name:u,location_id:l$2?.id||n.location,details:s},zones:l$2?.zones||r});if(d){o.add(d.id);let x=Id(d,h);x&&await _a(d.id,x);continue}a.push(n.from_bookings?await nt(m$1(l({},h.toJSON()),{parent_id:Ai(n.id)})):await nt(h.toJSON(),{ical_uid:n.ical_uid,event_id:n.id}))}for(let s of i)o.has(s.id)||await kt(s.id)}catch(s){throw await Promise.all(a.filter(d=>!!d.id).map(d=>kt(d.id).catch(()=>{}))),s}}function Nn(n,t=``){let e=t.trim().toLowerCase();return n.filter(i=>(i.name||``).trim().toLowerCase()===e).sort((i,r)=>(i.created_at||0)-(r.created_at||0))[0]}function Td(n){return m$1(l({},n),{data:n.data.filter(t=>!t?.hidden)})}async function Od(){let n=await une({});return new Set(n.data.filter(t=>!t?.hidden).map(t=>t.id))}async function Uu(n$1={}){if(n$1.hidden===!0)return une(n$1);let i=n$1,{hidden:t}=i;return Td(await une(n(i,[`hidden`])))}async function Fd(n$2={}){if(n$2.hidden===!0)return sne(n$2);let o=n$2,{hidden:t}=o,e=n(o,[`hidden`]),[i,r]=await Promise.all([sne(e),Od()]);return m$1(l({},i),{data:i.data.filter(a=>!a?.hidden&&r.has(a.category_id))})}async function Gu(n$3={}){if(n$3.hidden===!0)return ine(n$3);let a=n$3,{hidden:t}=a,e=n(a,[`hidden`]),[i,r]=await Promise.all([ine(e),Fd(m$1(l({},e.zone_id?{zone_id:e.zone_id}:{}),{limit:2e3}))]),o=new Set(r.data.map(s=>s.id));return m$1(l({},i),{data:i.data.filter(s=>!s?.hidden&&o.has(s.asset_type_id))})}function ga(n){return n.id?lne(n.id,n):dne(n)}var Cn=new Map;var Dd=[`period_start`,`period_end`,`type`,`rejected`];async function Pd(n={}){let t=await ine(m$1(l({},n),{limit:n.limit||500})),e=t.total,i=[...t.data];for(;typeof t.next==`function`;){let r=t.next();if(!r)break;t=await r,e=t.total,i.push(...t.data)}return{total:e,next:()=>null,data:i}}async function Ld(n={}){let t=JSON.stringify({zones:n.zones||n.zone_id||``,category_id:n.category_id||``,q:n.q||``,type_id:n.type_id||``});if(Cn.has(t))return Cn.get(t);let e=l({},n);for(let l of Dd)l in e&&delete e[l];e.zones&&!e.zone_id&&(e.zone_id=e.zones),e.zones&&delete e.zones;let[i,r]=await Promise.all([sne(e),Pd(e)]),o=i.data.filter(l=>!l?.hidden);e.type_id&&(o=o.filter(l=>l.id===e.type_id));let a=new Set(o.map(l=>l.id)),s=new Map;for(let l of r.data){if(l?.hidden||!a.has(l.asset_type_id))continue;let m=s.get(l.asset_type_id)||[];m.push(l),s.set(l.asset_type_id,m)}let d=o.map(l$3=>m$1(l({},l$3),{assets:s.get(l$3.id)||[]}));return Cn.set(t,d),setTimeout(()=>Cn.delete(t),300*1e3),d}function ba(n){return n.id?ane(n.id,n):cne(n)}async function zd(n,t=[]){let[e,i]=await Promise.all([Ld(n),Rt(m$1(l({},n),{type:`asset-request`}))]),r=i.filter(o=>o.status!==`declined`&&o.status!==`cancelled`);return e.map(o=>m$1(l({},o),{assets:o.assets.filter(a=>t?.includes(a.id)||!r.find(s=>!t.includes(s.id)&&(s.asset_id===a.id||s.asset_ids?.includes(a.id))))}))}function Bd(n,t){if((!n||n?.length<=0)&&t?.length)return[];if(!t)return[];let e=[];for(let i of n){let r=t.find(o=>o.id===i.id);(!r||r.ref_id!==i.ref_id)&&e.push(i.id)}return e}async function Ku({id:n,ical_uid:t,from_booking:e,from_bookings:i},{date:r,duration:o,all_day:a,host:s,location_name:d,location_id:l$4,zones:m,reset_state:u},h=[],x=!1){let G=await Rt({period_start:Bt$1(r),period_end:Bt$1(br(r,o)),type:`asset-request`,zones:m.join(`,`)}),ue=!!(e||i),it=n&&(t||ue)?(await Rt({period_start:Bt$1(cn$1(r)),period_end:Bt$1(xE(r)),type:`asset-request`,email:s,event_id:ue?``:n,ical_uid:t})).filter(y=>!ue||String(y.extension_data?.parent_id)===String(n)):[],En=it.map(y=>[y.id,new He(y.extension_data.request)]);h?.forEach(y=>y.conflict=!1);let rt=x?h.map(y=>y.id):Bd(h,En.map(([y,k])=>k));if(u){let y=it.filter(k=>k.approved||k.rejected);rt=Yie([...rt,...y.map(k=>k.extension_data.request_id)])}let qi=En.filter(([y,k])=>!rt.includes(k.id)),Ha=En.filter(([y,{id:k}])=>rt.includes(k)),ja=h.filter(({id:y})=>rt.includes(y)),Pe=Zie(G.filter(y=>!y.rejected&&(!it.find(k=>k.id===y.id)||qi.find(([k])=>y.event_id===k))).map(y=>y.asset_ids));for(let[y,k]of qi)Pe=[...Pe,...Zie(k.items.map(Ot=>Ot.item_ids))];let Ga=await zd({period_start:Bt$1(r),period_end:Bt$1(br(r,o)),type:`asset-request`,zones:(m||[]).join(`,`)},it.map(y=>y.id)),Ka=ja.map(y=>{let k=Zie(y.items.map(({id:fe,item_ids:Rn,quantity:An})=>{let ot=Rn||[],$i=Ga.find(Hi=>Hi.id===fe)?.assets;if(!$i)return ot;let In=[];return new Array(An).fill(0).map((Hi,Ft)=>{let Tn=Pe.includes(ot[Ft])||In.includes(ot[Ft])||!ot[Ft]?$i?.find(({id:ji})=>!Pe.includes(ji)&&!In.includes(ji))?.id:ot[Ft];if(!Tn)throw y.conflict=!0,`Unable to find available asset for request`;return In.push(Tn),Tn})}));if(!k.length||k.some(fe=>!fe))throw y.conflict=!0,`Unable to find available asset for request`;let Ot=it.find(fe=>fe.asset_ids.find(Rn=>y.items?.find(An=>An.item_ids?.includes(Rn))));Pe=[...Pe,...k];let Vi={type:`asset-request`,booking_type:`asset-request`,date:r,duration:o,all_day:a,description:d,user_email:s,asset_id:k[0],asset_ids:k,asset_name:y.items.map(fe=>fe.name).join(`, `),title:y.items.map(fe=>fe.name).join(`, `),approved:!u&&Ot?.approved&&!y._changed,rejected:!u&&Ot?.rejected&&!y._changed,extension_data:{parent_id:n,request_id:y.id,location_id:l$4,request:new He(m$1(l({},y),{event:null}))},zones:m||[]};return()=>ue?nt(m$1(l({},new VS(Vi).toJSON()),{parent_id:Ai(n)})):nt(new VS(Vi),{ical_uid:t,event_id:n})});return async()=>{await Promise.all(Ha.map(([y])=>kt(y))),await Promise.all(Ka.map(y=>y()))}}var qd=64;var Vd=64;var $d=30*1e3;var Hd=`PlaceOS.image-cache-v1`;var jd=`PlaceOS.image-cache-keys-v1`;var me=new Map;var Ii=new Map;var De=new Map;var ya=!1;function Ud(){if(!ya&&(ya=!0,typeof caches<`u`&&caches.delete(Hd).catch(()=>!1),typeof sessionStorage<`u`))try{sessionStorage.removeItem(jd)}catch{}}function Gd(n){let t=me.get(n);if(t)return me.delete(n),me.set(n,t),t}function Kd(n,t){let e=me.get(n);for(e&&e!==t&&URL.revokeObjectURL(e),me.delete(n),me.set(n,t);me.size>qd;){let i=me.keys().next().value;if(!i)break;let r=me.get(i);me.delete(i),r&&URL.revokeObjectURL(r)}return t}function Wd(n){for(De.delete(n),De.set(n,Date.now()+$d);De.size>Vd;){let t=De.keys().next().value;if(!t)break;De.delete(t)}}function Ti(n){let t=ln$1();document.cookie=`${t===`x-api-key`?`api-key=`+encodeURIComponent(tu()):`bearer_token=`+encodeURIComponent(t)};max-age=30;path=${n};samesite=strict;${location.protocol===`https:`?`secure;`:``}`}function Qd(){let n=ln$1();return n===`x-api-key`?{"X-API-Key":tu()}:{Authorization:`Bearer ${n}`}}function Xu(n,t){return va(n,()=>(Ti(t),fetch(n)))}function Zu(n){return va(n,()=>fetch(n,{headers:Qd()}))}async function va(n,t){Ud();let e=Gd(n);if(e)return e;if((De.get(n)||0)>Date.now())throw new Error(`Image load is in retry cooldown`);De.delete(n);let r=Ii.get(n);if(r)return r;let o=t().then(async a=>{if(!a?.ok)throw new Error(`Failed to fetch image: ${a?.status}`);return Kd(n,URL.createObjectURL(await a.blob()))}).catch(a=>{throw Wd(n),a}).finally(()=>Ii.delete(n));return Ii.set(n,o),o}var At=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new q;bulk={select:t=>this._select(t),deselect:t=>this._deselect(t),setSelection:t=>this._setSelection(t)};constructor(t=!1,e,i=!0,r){this._multiple=t,this._emitChanges=i,this.compareWith=r,e&&e.length&&(t?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...t){return this._select(t)}deselect(...t){return this._deselect(t)}setSelection(...t){return this._setSelection(t)}toggle(t){return this.isSelected(t)?this.deselect(t):this.select(t)}clear(t=!0){this._unmarkAll();let e=this._hasQueuedChanges();return t&&this._emitChangeEvent(),e}isSelected(t){return this._selection.has(this._getConcreteValue(t))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(t){this._multiple&&this.selected&&this._selected.sort(t)}isMultipleSelection(){return this._multiple}_select(t){this._verifyValueAssignment(t),t.forEach(i=>this._markSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(t){this._verifyValueAssignment(t),t.forEach(i=>this._unmarkSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(t){this._verifyValueAssignment(t);let e=this.selected,i=new Set(t.map(o=>this._getConcreteValue(o)));t.forEach(o=>this._markSelected(o)),e.filter(o=>!i.has(this._getConcreteValue(o,i))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(t){t=this._getConcreteValue(t),this.isSelected(t)||(this._multiple||this._unmarkAll(),this.isSelected(t)||this._selection.add(t),this._emitChanges&&this._selectedToEmit.push(t))}_unmarkSelected(t){t=this._getConcreteValue(t),this.isSelected(t)&&(this._selection.delete(t),this._emitChanges&&this._deselectedToEmit.push(t))}_unmarkAll(){this.isEmpty()||this._selection.forEach(t=>this._unmarkSelected(t))}_verifyValueAssignment(t){t.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(t,e){if(this.compareWith){e=e??this._selection;for(let i of e)if(this.compareWith(t,i))return i;return t}else return t}};var Oi=(()=>{class n{_listeners=[];notify(e,i){for(let r of this._listeners)r(e,i)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(i=>e!==i)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(i){return new(i||n)};static ɵprov=k({token:n,factory:n.ɵfac})}return n})();var el=[`trigger`];var tl=[`panel`];var nl=[[[`mat-select-trigger`]],`*`];var il=[`mat-select-trigger`,`*`];function rl(n,t){if(n&1&&(oi$1(0,`span`,4),c_(1),Ds$1()),n&2){let e=fc();gs$1(),pA(e.placeholder)}}function ol(n,t){n&1&&As$1(0)}function al(n,t){if(n&1&&(oi$1(0,`span`,11),c_(1),Ds$1()),n&2){let e=fc(2);gs$1(),pA(e.triggerValue)}}function sl(n,t){if(n&1&&(oi$1(0,`span`,5),uc(1,ol,1,0)(2,al,2,1,`span`,11),Ds$1()),n&2){let e=fc();gs$1(),lc(e.customTrigger?1:2)}}function dl(n,t){if(n&1){let e=kk();oi$1(0,`div`,12,1),Bt(`keydown`,function(r){Pv(e);return kv(fc()._handleKeydown(r))}),As$1(2,1),Ds$1()}if(n&2){let e=fc();ix(e.panelClass),jt(`mat-select-panel-animations-enabled`,!e._animationsDisabled)(`mat-primary`,e._parentFormField?.color===`primary`)(`mat-accent`,e._parentFormField?.color===`accent`)(`mat-warn`,e._parentFormField?.color===`warn`)(`mat-undefined`,!e._parentFormField?.color),Qn(`id`,e.id+`-panel`)(`aria-multiselectable`,e.multiple)(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e._getPanelAriaLabelledby())}}var ll=new I(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=m(se);return()=>tu$1(n)}});var cl=new I(`MAT_SELECT_CONFIG`);var Na=new I(`MatSelectTrigger`);var Fi=class{source;value;constructor(t,e){this.source=t,this.value=e}};var Pf=(()=>{class n{_viewportRuler=m(lr);_changeDetectorRef=m($t);_elementRef=m(we$1);_dir=m(Wj,{optional:!0});_idGenerator=m(hu$1);_renderer=m(ut);_parentFormField=m(Ct,{optional:!0});ngControl=m(go$1,{self:!0,optional:!0});_liveAnnouncer=m(kj);_defaultOptions=m(cl,{optional:!0});_animationsDisabled=sa$1();_popoverLocation;_initialized=new q;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let i=this.options.toArray()[e];if(i){let r=this.panel.nativeElement,o=Due(e,this.options,this.optionGroups),a=i._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=Aue(a.offsetTop,a.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Fi(this,e)}_scrollStrategyFactory=m(ll);_panelOpen=!1;_compareWith=(e,i)=>e===i;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new q;_errorStateTracker;stateChanges=new q;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=H(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(FE.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=_a$1(()=>{let e=this.options;return e?e.changes.pipe(ya$1(e),xt$1(()=>SM(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(xt$1(()=>this.optionSelectionChanges))});openedChange=new ve;_openedStream=this.openedChange.pipe(mt(e=>e),ne(()=>{}));_closedStream=this.openedChange.pipe(mt(e=>!e),ne(()=>{}));selectionChange=new ve;valueChange=new ve;constructor(){let e=m(sue),i=m(oG,{optional:!0}),r=m(cG,{optional:!0}),o=m(new Od$1(`tabindex`),{optional:!0}),a=m(iu,{optional:!0}),s=m(et,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new xb(e,s||this.ngControl,r,i,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=a?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new At(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(hr(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(hr(this._destroy)).subscribe(e=>{e.added.forEach(i=>i.select()),e.removed.forEach(i=>i.deselect())}),this.options.changes.pipe(ya$1(null),hr(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),i=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute(`aria-labelledby`,e):r.removeAttribute(`aria-labelledby`)}i&&(this._previousControl!==i.control&&(this._previousControl!==void 0&&i.disabled!==null&&i.disabled!==this.disabled&&(this.disabled=i.disabled),this._previousControl=i.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(gt(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{i(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,i=this._renderer.listen(e,`animationend`,o=>{o.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(i=>i.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let i=e.keyCode,r=i===40||i===38||i===37||i===39,o=i===13||i===32,a=this._keyManager;if(!a.isTyping()&&o&&!kh(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;a.onKeydown(e);let d=this.selected;d&&s!==d&&this._liveAnnouncer.announce(d.viewValue,1e4)}}_handleOpenKeydown(e){let i=this._keyManager,r=e.keyCode,o=r===40||r===38,a=i.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!a&&(r===13||r===32)&&i.activeItem&&!kh(e))e.preventDefault(),i.activeItem._selectViaInteraction();else if(!a&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(d=>!d.disabled&&!d.selected);this.options.forEach(d=>{d.disabled||(s?d.select():d.deselect())})}else{let s=i.activeItemIndex;i.onKeydown(e),this._multiple&&o&&e.shiftKey&&i.activeItem&&i.activeItemIndex!==s&&i.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!kh(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(i=>i.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(i=>this._selectOptionByValue(i)),this._sortValues();else{let i=this._selectOptionByValue(e);i?this._keyManager.updateActiveItem(i):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let i=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return i&&this._selectionModel.select(i),i}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof Zd?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new oy(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=SM(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(hr(e)).subscribe(i=>{this._onSelect(i.source,i.isUserInput),i.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),SM(...this.options.map(i=>i._stateChanges)).pipe(hr(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,i){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),i&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),i&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((i,r)=>this.sortComparator?this.sortComparator(i,r,e):e.indexOf(i)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let i;this.multiple?i=this.selected.map(r=>r.value):i=this.selected?this.selected.value:e,this._value=i,this.valueChange.emit(i),this._onChange(i),this.selectionChange.emit(this._getChangeEvent(i)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let i=0;i<this.options.length;i++)if(!this.options.get(i).disabled){e=i;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,i=e?e+` `:``;return this.ariaLabelledby?i+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute(`aria-describedby`,e.join(` `)):i.removeAttribute(`aria-describedby`)}onContainerClick(e){let i=wn$1(e);i&&(i.tagName===`MAT-OPTION`||i.classList.contains(`cdk-overlay-backdrop`)||i.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(i){return new(i||n)};static ɵcmp=Tt$1({type:n,selectors:[[`mat-select`]],contentQueries:function(i,r,o){if(i&1&&Id$1(o,Na,5)(o,Lb,5)(o,r$,5),i&2){let a;pc(a=mc())&&(r.customTrigger=a.first),pc(a=mc())&&(r.options=a),pc(a=mc())&&(r.optionGroups=a)}},viewQuery:function(i,r){if(i&1&&Td$1(el,5)(tl,5)(nE,5),i&2){let o;pc(o=mc())&&(r.trigger=o.first),pc(o=mc())&&(r.panel=o.first),pc(o=mc())&&(r._overlayDir=o.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(i,r){i&1&&Bt(`keydown`,function(a){return r._handleKeydown(a)})(`focus`,function(){return r._onFocus()})(`blur`,function(){return r._onBlur()}),i&2&&(Qn(`id`,r.id)(`tabindex`,r.disabled?-1:r.tabIndex)(`aria-controls`,r.panelOpen?r.id+`-panel`:null)(`aria-expanded`,r.panelOpen)(`aria-label`,r.ariaLabel||null)(`aria-required`,r.required.toString())(`aria-disabled`,r.disabled.toString())(`aria-invalid`,r.errorState)(`aria-activedescendant`,r._getAriaActiveDescendant()),jt(`mat-mdc-select-disabled`,r.disabled)(`mat-mdc-select-invalid`,r.errorState)(`mat-mdc-select-required`,r.required)(`mat-mdc-select-empty`,r.empty)(`mat-mdc-select-multiple`,r.multiple)(`mat-select-open`,r.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,Dn],disableRipple:[2,`disableRipple`,`disableRipple`,Dn],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:IF(e)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,Dn],placeholder:`placeholder`,required:[2,`required`,`required`,Dn],multiple:[2,`multiple`,`multiple`,Dn],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,Dn],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,IF],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,Dn]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[Pt([{provide:wt,useExisting:n},{provide:n$,useExisting:n}]),It$1],ngContentSelectors:il,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(i,r){if(i&1&&(hc(nl),oi$1(0,`div`,2,0),Bt(`click`,function(){return r.open()}),oi$1(3,`div`,3),uc(4,rl,2,1,`span`,4)(5,sl,3,1,`span`,5),Ds$1(),oi$1(6,`div`,6)(7,`div`,7),Kv(),oi$1(8,`svg`,8),ao(9,`path`,9),Ds$1()()()(),VD(10,dl,3,16,`ng-template`,10),Bt(`detach`,function(){return r.close()})(`backdropClick`,function(){return r.close()})(`overlayKeydown`,function(a){return r._handleOverlayKeydown(a)})),i&2){let o=$k(1);gs$1(3),Qn(`id`,r._valueId),gs$1(),lc(r.empty?4:5),gs$1(6),Ts$1(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,r._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,r._scrollStrategy)(`cdkConnectedOverlayOrigin`,r._preferredOverlayOrigin||o)(`cdkConnectedOverlayPositions`,r._positions)(`cdkConnectedOverlayWidth`,r._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,r._popoverLocation)}},dependencies:[Zd,nE],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2})}return n})();var Lf=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=J$1({type:n,selectors:[[`mat-select-trigger`]],features:[Pt([{provide:Na,useExisting:n}])]})}return n})();var zf=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Ve({type:n});static ɵinj=Le({imports:[pr,Pue,ua$1,Gd$1,Nt,Pue]})}return n})();var ml=`_LOCKERS_`;var ul=`_LOCKER_BANKS_`;var fl=`_LOCKERS_`;var Di=null;var Pi=null;var Li=null;var zi=null;var It=null;var Mn=new Map;async function Ma(){return It||(It=une({hidden:!0,limit:500}).then(n=>n.data).catch(()=>[])),It}async function hl(n){return Mn.has(n)||Mn.set(n,sne({category_id:n,limit:500}).then(t=>t.data).catch(()=>[])),Mn.get(n)}async function pl(n){let t=Nn(await Ma(),n);if(t||(It=null,t=Nn(await Ma(),n),t))return t;let e=await ga({name:n,hidden:!0});return It=null,e}async function _l(n,t){let e=Nn(await hl(n),t);if(e)return e;let i=await ba({name:t,brand:`PlaceOS`,category_id:n});return Mn.delete(n),i}async function ka(n){return(await _l((await pl(ml)).id,n)).id}function gl(){return Di?Promise.resolve(Di):(Pi||(Pi=ka(ul).then(n=>(Di=n,n))),Pi)}function bl(){return Li?Promise.resolve(Li):(zi||(zi=ka(fl).then(n=>(Li=n,n))),zi)}async function Ea(n){if(!n?.length)return[];let t=await gl();return Zie(await Promise.all(n.map(i=>ine({zone_id:i,type_id:t,limit:500}).then(r=>r.data))))}async function Ra(n){if(!n?.length)return[];let t=await bl();return Zie(await Promise.all(n.map(i=>ine({zone_id:i,type_id:t,limit:500}).then(r=>r.data))))}function yl(n,t){if(n&1&&(oi$1(0,`main`,2),ao(1,`icon`,5)(2,`p`,6),Ds$1()),n&2){let e=fc();gs$1(),Ts$1(`icon`,e.icon()),gs$1(),Ts$1(`innerHTML`,e.content(),vL)}}function vl(n,t){if(n&1&&(oi$1(0,`main`,3)(1,`div`,7),ao(2,`mat-spinner`,8),oi$1(3,`p`),c_(4),Ds$1()()()),n&2){let e=fc();gs$1(4),pA(e.loading())}}function xl(n,t){if(n&1){let e=kk();oi$1(0,`footer`,4)(1,`button`,9),c_(2),Lx(3,`translate`),Ds$1(),oi$1(4,`button`,10),Bt(`click`,function(){Pv(e);return kv(fc().onConfirm())}),c_(5),Lx(6,`translate`),Ds$1()()}if(n&2){let e=fc();gs$1(2),gc(` `,kx(3,2,e.cancel_text()),` `),gs$1(3),gc(` `,kx(6,4,e.confirm_text()),` `)}}var Sl={height:`auto`};async function rh(n,t){let e=t.open(wl,m$1(l({},Sl),{data:n}));return m$1(l({},await Promise.race([e.componentInstance.event.pipe(zt(i=>i.reason===`done`)).toPromise(),e.afterClosed().toPromise()])),{loading:i=>e.componentInstance.loading?.set(i),close:()=>e.close()})}var wl=(()=>{class n extends on{constructor(){super(),this._dialog_ref=m(ed$1),this._data=m(kC),this.loading=H(``),this.event=new ve,this.title=H(this._data.title||`COMMON.CONFIRM`),this.content=H(this._data.content||`Are you sure?`),this.confirm_text=H(this._data.confirm_text||`COMMON.ACCEPT`),this.cancel_text=H(this._data.cancel_text||`COMMON.CANCEL`),this.icon=H(this._data.icon||{class:`material-symbols-rounded`,content:`done`}),this.disableClose=()=>this._dialog_ref.disableClose=!0,this.enableClose=()=>this._dialog_ref.disableClose=!1}ngOnInit(){this._data.close_delay&&this.timeout(`close`,()=>this._dialog_ref.close(),this._data.close_delay)}onConfirm(){this.event.emit({reason:`done`})}static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵcmp=Tt$1({type:n,selectors:[[`confirm-modal`]],features:[it],decls:6,vars:3,consts:[[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`h-14`,`w-[calc(100%-1rem)]`,`min-w-[20rem]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[1,`flex`,`w-md`,`max-w-[85vw]`,`flex-col`,`items-center`,`space-y-4`,`p-4`,`sm:h-auto`],[`loading`,``],[1,`bg-base-200`,`sticky`,`bottom-0`,`m-2`,`flex`,`items-center`,`justify-center`,`space-x-2`,`rounded-sm`,`border-none`,`p-2`],[1,`text-5xl`,3,`icon`],[`content`,``,1,`text-center`,3,`innerHTML`],[1,`flex`,`h-48`,`w-full`,`flex-col`,`items-center`,`justify-center`,`space-y-4`],[`diameter`,`32`],[`btn`,``,`matRipple`,``,`mat-dialog-close`,``,1,`inverse`,`bg-base-100`,`flex-1`],[`btn`,``,`matRipple`,``,`name`,`accept`,1,`flex-1`,3,`click`]],template:function(i,r){i&1&&(oi$1(0,`header`,0)(1,`h2`,1),c_(2),Ds$1()(),uc(3,yl,3,2,`main`,2)(4,vl,5,1,`main`,3),uc(5,xl,7,6,`footer`,4)),i&2&&(gs$1(2),pA(r.title()),gs$1(),lc(r.loading()?4:3),gs$1(2),lc(r.loading()?-1:5))},dependencies:[po,ho,iY,ly,uy,KW,qW,f],encapsulation:2})}}return n})();var Aa=10;var Ia=1;var Cl=.05;var Ta=16;var Oa=4;var Fa=2;var Da=8192;function Pa(){if(typeof window>`u`||!window.matchMedia)return!1;let n=window.matchMedia(`(pointer: coarse)`).matches,t=window.matchMedia(`(max-width: 1024px)`).matches;return n&&t}function Nl(n){return n.replace(/[!"#$%&'()*+,.\/;<=>?@[\\\]^`{|}~]/g,`\\$&`).split(` `).map(e=>e.replace(/^\\/,``)).join(` `)}function Ml(n){let t=0,e=0,i=0,r=0,o=n.getAttribute(`viewBox`);if(o){let a=o.split(/[\s,]+/).map(parseFloat);a.length>=4&&(t=a[0]||0,e=a[1]||0,i=a[2],r=a[3])}if(!i||!r){let a=n.getAttribute(`width`),s=n.getAttribute(`height`);i=a?parseFloat(a):0,r=s?parseFloat(s):0}if(!i||!r)try{let a=n.getBBox();t=a.x,e=a.y,i=a.width,r=a.height}catch{}return{x:t,y:e,width:i||1,height:r||1}}function kl(n,t){let e=n.getBBox(),i=t&&n.getScreenCTM?.();if(!i)return e;let r=t.multiply(i),o=[{x:e.x,y:e.y},{x:e.x+e.width,y:e.y},{x:e.x,y:e.y+e.height},{x:e.x+e.width,y:e.y+e.height}].map(d=>({x:r.a*d.x+r.c*d.y+r.e,y:r.b*d.x+r.d*d.y+r.f})),a=Math.min(...o.map(d=>d.x)),s=Math.min(...o.map(d=>d.y));return{x:a,y:s,width:Math.max(...o.map(d=>d.x))-a,height:Math.max(...o.map(d=>d.y))-s}}function El(n){let t=new Map,e=document.createElement(`div`);e.style.position=`absolute`,e.style.visibility=`hidden`,e.style.pointerEvents=`none`,e.style.left=`-9999px`,e.style.top=`-9999px`,e.innerHTML=n,document.body.appendChild(e);let i=e.querySelector(`svg`);if(!i)return document.body.removeChild(e),{bounds:t,aspect_ratio:1};let{x:r,y:o,width:a,height:s}=Ml(i),d=a/s,l=i.getScreenCTM?.(),m=l?l.inverse():null;return i.querySelectorAll(`[id]`).forEach(h=>{let x=h.getAttribute(`id`);if(x&&typeof h.getBBox==`function`)try{let G=kl(h,m);t.set(x,{x:(G.x-r)/a,y:(G.y-o)/s,w:G.width/a,h:G.height/s})}catch{}}),document.body.removeChild(e),{bounds:t,aspect_ratio:d}}var Bi=class{constructor(){this.store=new Map}get(t){if(!this.store.has(t)){let e=this._load(t);e.catch(()=>this.store.delete(t)),this.store.set(t,e)}return this.store.get(t)}async _load(t){for(;!Jf();)await new Promise(l=>setTimeout(l,300));let e={},i=ln$1(),r=new URL(t,location.origin).origin===location.origin;i&&r&&(tse()?Ti(`/`):e.headers=i===`x-api-key`?{"x-api-key":tu()}:{Authorization:`Bearer ${i}`});let o=await fetch(t,e);if(!o.ok)throw new Error(`Failed to load map`);let a=await o.text(),{bounds:s,aspect_ratio:d}=El(a);return{raw_data:a,element_bounds:s,aspect_ratio:d}}};var za=new Bi;function Ba(n){return za.get(n)}var La=class{constructor(t){this.map_image=null,this.styles_string=``,this.center={x:.5,y:.5},this.zoom=1,this.fixed_resolution_megapixels=0,this.disable_zoom=!1,this.disable_pan=!1,this.onViewChange=null,this.debug=!1,this.debug_info={pointer:null,hover_id:``,highlight_id:``,last_draw_ms:0,draws_last_second:0},this._map_path=``,this._image_generation=0,this._texture_width=0,this._texture_height=0,this._image_frame_id=null,this._draw_frame_id=null,this._notify_frame_id=null,this._debug_draw_count=0,this._debug_count_start=0,this._events=new Map,this._resize_observer=null,this._pointers=new Map,this._is_panning=!1,this._pinch_distance=null,this._pan_start_time=null,this._pan_exceeded_threshold=!1,this._overlay_instances=[],this._actions=[],this._action_event_handlers=new Map,this._action_pointerdown_pos=null,this._action_last_triggered=new Map,this.container=t,this.id=`m_view-${Wie(8,`0123456789ABCDEF`)}`,this.container.innerHTML=``,this.container.style.overflow=`hidden`,this.container.style.touchAction=`none`,this.canvas=document.createElement(`canvas`),this.canvas.style.cssText=`position: absolute; inset: 0; pointer-events: none;`,this._ctx=this.canvas.getContext(`2d`),this.container.appendChild(this.canvas),this.overlays=document.createElement(`div`),this.overlays.id=`${this.id}-overlays`,this.overlays.style.cssText=`position: absolute; inset: 0; z-index: 0; pointer-events: none;`,this.container.appendChild(this.overlays),this._resize_observer=new ResizeObserver(()=>this._onResize()),this._resize_observer.observe(this.container),this._events.set(`wheel`,e=>this._onWheel(e)),this.container.addEventListener(`wheel`,this._events.get(`wheel`),{passive:!1}),this._events.set(`pointerdown`,e=>this._onPointerDown(e)),this._events.set(`pointermove`,e=>this._onPointerMove(e)),this._events.set(`pointerup`,e=>this._onPointerUp(e)),this.container.addEventListener(`pointerdown`,this._events.get(`pointerdown`)),window.addEventListener(`pointermove`,this._events.get(`pointermove`)),window.addEventListener(`pointerup`,this._events.get(`pointerup`)),window.addEventListener(`pointercancel`,this._events.get(`pointerup`))}async setMap(t){this._map_path=t;let e=await za.get(t);this._map_path===t&&(this.map=e,this._renderMapImage())}setCenter(t){let e=this._clampCenter(t);e.x===this.center.x&&e.y===this.center.y||(this.center=e,this._renderMap())}setZoom(t){t=Math.max(Ia,Math.min(Aa,t)),t!==this.zoom&&(this.zoom=t,this._renderMap())}setFixedResolution(t){let e=t>0?t:0;this.fixed_resolution_megapixels!==e&&(this.fixed_resolution_megapixels=e,this.disable_zoom&&this._renderMapImage())}setOptions(t){let e=this.disable_zoom;this.disable_zoom=!!t?.disable_zoom,this.disable_pan=!!t?.disable_pan,e!==this.disable_zoom&&this._renderMapImage()}get overlay_count(){return this._overlay_instances.length}get texture_mode(){return this.disable_zoom?this.fixed_resolution_megapixels?`fixed ${this.fixed_resolution_megapixels}MP`:`fixed ${Fa}\xD7 container`:Pa()?`mobile ${Oa}MP`:`desktop ${Ta}MP`}setDebug(t){if(this.debug!==t){if(this.debug=t,t){let e=o=>{this.debug_info.pointer=this._eventToMap(o),this.debug_info.hover_id=this._elementAt(this.debug_info.pointer),this._renderMap()},i=()=>{this.debug_info.pointer=null,this.debug_info.hover_id=``,this._renderMap()},r=o=>{let a=this._eventToMap(o);console.log(`[MAP][DEBUG] Click at { x: ${a.x.toFixed(4)}, y: ${a.y.toFixed(4)} } on "${this._elementAt(a)||`no element`}"`)};this._events.set(`debug_move`,e),this._events.set(`debug_leave`,i),this._events.set(`debug_click`,r),this.container.addEventListener(`pointermove`,e),this.container.addEventListener(`pointerleave`,i),this.container.addEventListener(`click`,r)}else{for(let e of[`debug_move`,`debug_leave`,`debug_click`]){let i=this._events.get(e);if(!i)continue;let r=e===`debug_move`?`pointermove`:e===`debug_leave`?`pointerleave`:`click`;this.container.removeEventListener(r,i),this._events.delete(e)}this.debug_info.pointer=null,this.debug_info.hover_id=``,this.debug_info.highlight_id=``}this._applyOverlayOutlines(),this._renderMap()}}setDebugHighlight(t){this.debug_info.highlight_id!==t&&(this.debug_info.highlight_id=t,this.debug&&this._renderMap())}focusOn(t){let e=this.map?.element_bounds.get(t);e&&(this.setCenter({x:e.x+e.w/2,y:e.y+e.h/2}),this._notifyViewChange())}setOverlays(t){for(let e of this._overlay_instances)e.element.remove();this._overlay_instances=[];for(let e of t){let i=document.createElement(`div`);i.style.cssText=`position: absolute; top: 0; left: 0; display: flex; align-items: center; justify-content: center; transform-origin: center center; pointer-events: none;`,e.z_index!=null&&(i.style.zIndex=`${e.z_index}`),e.hover&&i.classList.add(`map-overlay-hover`),typeof e.contents==`string`?i.innerHTML=e.contents:i.appendChild(e.contents),this.overlays.appendChild(i),this._overlay_instances.push({overlay:e,element:i})}this._applyOverlayOutlines(),this._updateOverlayPositions()}_applyOverlayOutlines(){for(let{element:t}of this._overlay_instances)t.style.outline=this.debug?`1px dashed #f0f`:``}_elementAt(t){let e=``,i=Number.POSITIVE_INFINITY;for(let[r,o]of this.map?.element_bounds||[]){if(t.x<o.x||t.x>o.x+o.w||t.y<o.y||t.y>o.y+o.h)continue;let a=o.w*o.h;a<i&&(e=r,i=a)}return e}setActions(t){for(let[i,r]of this._action_event_handlers)this.container.removeEventListener(i,r);this._action_event_handlers.clear(),this._action_last_triggered.clear(),this._actions=t;let e=new Set(t.flatMap(i=>i.events));for(let i of e){let r=o=>this._handleActionEvent(i,o);this._action_event_handlers.set(i,r),this.container.addEventListener(i,r)}if(!this._events.has(`action_pointerdown`)){let i=r=>{this._action_pointerdown_pos={x:r.clientX,y:r.clientY}};this._events.set(`action_pointerdown`,i),this.container.addEventListener(`pointerdown`,i)}}setStyles(t){let e=``;for(let[i,r]of Object.entries(t))r&&(e+=`svg ${Nl(i)} { ${r} }
`);e!==this.styles_string&&(this.styles_string=e,this._renderMapImage())}destroy(){this.setDebug(!1),this._resize_observer?.disconnect(),this._resize_observer=null,this.container.removeEventListener(`wheel`,this._events.get(`wheel`)),this.container.removeEventListener(`pointerdown`,this._events.get(`pointerdown`)),window.removeEventListener(`pointermove`,this._events.get(`pointermove`)),window.removeEventListener(`pointerup`,this._events.get(`pointerup`)),window.removeEventListener(`pointercancel`,this._events.get(`pointerup`));for(let[t,e]of this._action_event_handlers)this.container.removeEventListener(t,e);if(this._action_event_handlers.clear(),this._action_last_triggered.clear(),this._actions=[],this._events.has(`action_pointerdown`)){let t=this._events.get(`action_pointerdown`);this.container.removeEventListener(`pointerdown`,t),this._events.delete(`action_pointerdown`)}this._action_pointerdown_pos=null,this._image_generation++,this._map_path=``,this._image_frame_id!==null&&(cancelAnimationFrame(this._image_frame_id),this._image_frame_id=null),this._draw_frame_id!==null&&(cancelAnimationFrame(this._draw_frame_id),this._draw_frame_id=null),this._notify_frame_id!==null&&(cancelAnimationFrame(this._notify_frame_id),this._notify_frame_id=null);for(let t of this._overlay_instances)t.element.remove();this._overlay_instances=[],this.map_image=null,this.container.innerHTML=``}_viewScale(t=this.zoom){let e=this.map?.aspect_ratio||1,i=this.container.clientWidth||1,r=this.container.clientHeight||1,o=Math.min(r,i/e)*(1-Cl*2)*t;return{x:o*e,y:o}}_eventToMap(t,e=this.container.getBoundingClientRect()){let i=this._viewScale();return{x:(t.clientX-e.left-e.width/2)/i.x+this.center.x,y:(t.clientY-e.top-e.height/2)/i.y+this.center.y}}_clampCenter(t){return{x:Math.max(0,Math.min(1,t.x)),y:Math.max(0,Math.min(1,t.y))}}_zoomAboutPoint(t,e){let i=this.zoom;if(t=Math.max(Ia,Math.min(Aa,t)),t===i)return;let r=this.container.getBoundingClientRect(),o=this._eventToMap({clientX:e.x,clientY:e.y},r),a=this._viewScale(t),s={x:o.x-(e.x-r.left-r.width/2)/a.x,y:o.y-(e.y-r.top-r.height/2)/a.y};this.zoom=t,this.center=this._clampCenter(s),this._renderMap(),this._notifyViewChange()}_onWheel(t){if(t.preventDefault(),this.disable_zoom||!this.map_image)return;let e=t.deltaY>0?.97:1.03;this._zoomAboutPoint(this.zoom*e,{x:t.clientX,y:t.clientY})}_onPointerDown(t){if(this.map_image&&t.button===0){if(this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY}),this._pointers.size===2){this._is_panning=!1;let[e,i]=[...this._pointers.values()];this._pinch_distance=Math.hypot(i.x-e.x,i.y-e.y);return}this.disable_pan||(this._is_panning=!0,this._pan_start_time=Date.now(),this._pan_exceeded_threshold=!1,this.container.style.cursor=`grabbing`)}}_onPointerMove(t){let e=this._pointers.get(t.pointerId);if(!e)return;if(this._pointers.set(t.pointerId,{x:t.clientX,y:t.clientY}),this._pointers.size===2&&this._pinch_distance){if(this.disable_zoom)return;let[r,o]=[...this._pointers.values()],a=Math.hypot(o.x-r.x,o.y-r.y);a>0&&(this._zoomAboutPoint(this.zoom*(a/this._pinch_distance),{x:(r.x+o.x)/2,y:(r.y+o.y)/2}),this._pinch_distance=a);return}if(!this._is_panning)return;this._pan_start_time&&!this._pan_exceeded_threshold&&Date.now()-this._pan_start_time>200&&(this._pan_exceeded_threshold=!0);let i=this._viewScale();this.center=this._clampCenter({x:this.center.x-(t.clientX-e.x)/i.x,y:this.center.y-(t.clientY-e.y)/i.y}),this._renderMap(),this._notifyViewChange()}_onPointerUp(t){this._pointers.delete(t.pointerId),this._pointers.size<2&&(this._pinch_distance=null),this._is_panning&&this._pointers.size===0&&(this._is_panning=!1,this.container.style.cursor=``)}_onResize(){if(this._renderMap(),this.disable_zoom&&!this.fixed_resolution_megapixels){let{width:t,height:e}=this._textureDimensions();(t!==this._texture_width||e!==this._texture_height)&&this._renderMapImage()}}_targetTexturePixels(){return this.disable_zoom?this.fixed_resolution_megapixels>0?this.fixed_resolution_megapixels*1e6:(this.container.clientWidth||1)*(this.container.clientHeight||1)*Fa:(Pa()?Oa:Ta)*1e6}_textureDimensions(){let t=this.map?.aspect_ratio||1,e=this._targetTexturePixels(),i=Math.sqrt(e/t),r=i*t;return{width:Math.max(1,Math.min(Da,Math.round(r))),height:Math.max(1,Math.min(Da,Math.round(i)))}}_renderMapImage(){this._image_frame_id!==null&&cancelAnimationFrame(this._image_frame_id),this._image_frame_id=requestAnimationFrame(()=>{this._image_frame_id=null,this._doRenderMapImage()})}_doRenderMapImage(){if(!this.map?.raw_data)return;let t=++this._image_generation,i=new DOMParser().parseFromString(this.map.raw_data,`image/svg+xml`),r=i.querySelector(`svg`);if(!r)return;let{width:o,height:a}=this._textureDimensions();if(this._texture_width=o,this._texture_height=a,!r.getAttribute(`viewBox`)){let h=parseFloat(r.getAttribute(`width`)||``),x=parseFloat(r.getAttribute(`height`)||``);h>0&&x>0&&r.setAttribute(`viewBox`,`0 0 ${h} ${x}`)}if(r.getAttribute(`viewBox`)&&(r.setAttribute(`width`,`${o}`),r.setAttribute(`height`,`${a}`)),this.styles_string){let h=i.createElementNS(`http://www.w3.org/2000/svg`,`style`);h.textContent=this.styles_string,r.appendChild(h)}let d=new XMLSerializer().serializeToString(r),l=new Blob([d],{type:`image/svg+xml`}),m=URL.createObjectURL(l),u=new Image;u.onload=()=>{if(URL.revokeObjectURL(m),t!==this._image_generation)return;let h=document.createElement(`canvas`);h.width=o,h.height=a;let x=h.getContext(`2d`);if(!x){console.error(`Failed to get canvas context`);return}x.drawImage(u,0,0,o,a),this.map_image=h,this._renderMap()},u.onerror=()=>{URL.revokeObjectURL(m),console.error(`Failed to load map image`)},u.src=m}_renderMap(){this._draw_frame_id===null&&(this._draw_frame_id=requestAnimationFrame(()=>{this._draw_frame_id=null,this._drawMap()}))}_drawMap(){if(!this.map_image)return;let t=this.debug?performance.now():0,e=this.container.clientWidth||1,i=this.container.clientHeight||1,r=window.devicePixelRatio||1;(this.canvas.width!==Math.round(e*r)||this.canvas.height!==Math.round(i*r))&&(this.canvas.width=Math.round(e*r),this.canvas.height=Math.round(i*r),this.canvas.style.width=`${e}px`,this.canvas.style.height=`${i}px`);let o=this._viewScale(),a=this.center.x-e/2/o.x,s=this.center.y-i/2/o.y,d=Math.max(0,a),l=Math.max(0,s),m=Math.min(1,a+e/o.x),u=Math.min(1,s+i/o.y);if(this._ctx.setTransform(r,0,0,r,0,0),this._ctx.clearRect(0,0,e,i),m>d&&u>l){this._ctx.imageSmoothingEnabled=!0,this._ctx.imageSmoothingQuality=`high`;let h=this.map_image.width,x=this.map_image.height;this._ctx.drawImage(this.map_image,d*h,l*x,(m-d)*h,(u-l)*x,(d-a)*o.x,(l-s)*o.y,(m-d)*o.x,(u-l)*o.y)}if(this.debug){this._drawDebugInfo(o,a,s);let h=performance.now();this.debug_info.last_draw_ms=h-t,this._debug_draw_count++,h-this._debug_count_start>=1e3&&(this.debug_info.draws_last_second=this._debug_draw_count,this._debug_draw_count=0,this._debug_count_start=h)}this._updateOverlayPositions()}_drawDebugInfo(t,e,i){if(!this.map)return;let r=this._ctx,o=this.container.clientWidth||1,a=this.container.clientHeight||1,s=u=>(u-e)*t.x,d=u=>(u-i)*t.y;r.strokeStyle=`#f0f`,r.lineWidth=2,r.strokeRect(s(0),d(0),t.x,t.y),r.strokeStyle=`rgba(0, 200, 255, 0.6)`,r.lineWidth=1;for(let[,u]of this.map.element_bounds){let h=s(u.x),x=d(u.y),G=u.w*t.x,ue=u.h*t.y;h+G<0||x+ue<0||h>o||x>a||r.strokeRect(h,x,G,ue)}let l=this.debug_info.highlight_id||this.debug_info.hover_id,m=l?this.map.element_bounds.get(l):null;if(m){let u=s(m.x),h=d(m.y);r.fillStyle=`rgba(255, 0, 255, 0.25)`,r.fillRect(u,h,m.w*t.x,m.h*t.y);let x=`#${l}`;r.font=`12px monospace`,r.fillStyle=`rgba(0, 0, 0, 0.7)`,r.fillRect(u,h-16,r.measureText(x).width+8,16),r.fillStyle=`#fff`,r.fillText(x,u+4,h-4)}r.strokeStyle=`#f00`,r.lineWidth=1,r.beginPath(),r.moveTo(o/2-8,a/2),r.lineTo(o/2+8,a/2),r.moveTo(o/2,a/2-8),r.lineTo(o/2,a/2+8),r.stroke()}_updateOverlayPositions(){if(!this.map?.element_bounds)return;let t=this.container.clientWidth||1,e=this.container.clientHeight||1,i=this._viewScale(),r=d=>({x:(d.x-this.center.x)*i.x+t/2,y:(d.y-this.center.y)*i.y+e/2}),o=(d,l)=>{d.last_display!==l&&(d.last_display=l,d.element.style.display=l)},a=(d,l)=>{d.last_transform!==l&&(d.last_transform=l,d.element.style.transform=l)},s=(d,l,m)=>{let u=`${l} ${m}`;d.last_size!==u&&(d.last_size=u,d.element.style.width=l,d.element.style.height=m)};for(let d of this._overlay_instances){let{overlay:l$5}=d;if(l$5.min_zoom&&this.zoom<l$5.min_zoom){o(d,`none`);continue}let m;if(typeof l$5.ref==`string`){if(m=this.map.element_bounds.get(l$5.ref),!m){o(d,`none`);continue}}else m=l({w:0,h:0},l$5.ref);if(o(d,``),l$5.type===`box`&&m.w>0&&m.h>0){let u=r({x:m.x,y:m.y});a(d,`translate(${u.x}px, ${u.y}px)`),s(d,`${m.w*i.x}px`,`${m.h*i.y}px`)}else{let u=r({x:m.x+m.w/2,y:m.y+m.h/2});s(d,``,``),a(d,l$5.scale_with_zoom?`translate(${u.x}px, ${u.y}px) translate(-50%, -50%) scale(${this.zoom})`:`translate(${u.x}px, ${u.y}px) translate(-50%, -50%)`)}}}_handleActionEvent(t,e){if(!this.map_image||!this.map?.element_bounds||this._pan_exceeded_threshold)return;if(t===`click`&&this._action_pointerdown_pos){let l=e.clientX-this._action_pointerdown_pos.x,m=e.clientY-this._action_pointerdown_pos.y;if(Math.hypot(l,m)>5)return}let i=this._eventToMap(e);if(i.x<0||i.x>1||i.y<0||i.y>1)return;let r=null,o=Number.POSITIVE_INFINITY;for(let l of this._actions){if(!l.events.includes(t))continue;if(l.ref===`*`){r||(r=l);continue}let m=this.map.element_bounds.get(l.ref);if(!m||i.x<m.x||i.x>m.x+m.w||i.y<m.y||i.y>m.y+m.h)continue;let u=m.w*m.h;(!r||r.ref===`*`||(l.priority||0)>(r.priority||0)||(l.priority||0)===(r.priority||0)&&u<o)&&(r=l,o=u)}if(!r)return;let a=Date.now(),s=`${r.ref}:${t}`;a-(this._action_last_triggered.get(s)||0)<300||(this._action_last_triggered.set(s,a),r.callback(i))}_notifyViewChange(){!this.onViewChange||this._notify_frame_id!==null||(this._notify_frame_id=requestAnimationFrame(()=>{this._notify_frame_id=null,this.onViewChange?.({zoom:this.zoom,center:l({},this.center)})}))}};var Rl=[`input`];var Al=[`formField`];var Il=[`*`];var kn=class{source;value;constructor(t,e){this.source=t,this.value=e}};var Tl={provide:$s$1,useExisting:Et$1(()=>Fl),multi:!0};var qa=new I(`MatRadioGroup`);var Ol=new I(`mat-radio-default-options`,{providedIn:`root`,factory:()=>({color:`accent`,disabledInteractive:!1})});var Fl=(()=>{class n{_changeDetector=m($t);_value=null;_name=m(hu$1).getId(`mat-radio-group-`);_selected=null;_isInitialized=!1;_labelPosition=`after`;_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new ve;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e===`before`?`before`:`after`,this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(i=>{i.checked=this.value===i.value,i.checked&&(this._selected=i)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new kn(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static ɵfac=function(i){return new(i||n)};static ɵdir=J$1({type:n,selectors:[[`mat-radio-group`]],contentQueries:function(i,r,o){if(i&1&&Id$1(o,Va,5),i&2){let a;pc(a=mc())&&(r._radios=a)}},hostAttrs:[`role`,`radiogroup`,1,`mat-mdc-radio-group`],inputs:{color:`color`,name:`name`,labelPosition:`labelPosition`,value:`value`,selected:`selected`,disabled:[2,`disabled`,`disabled`,Dn],required:[2,`required`,`required`,Dn],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Dn]},outputs:{change:`change`},exportAs:[`matRadioGroup`],features:[Pt([Tl,{provide:qa,useExisting:n}])]})}return n})();var Va=(()=>{class n{_elementRef=m(we$1);_changeDetector=m($t);_focusMonitor=m(gj);_radioDispatcher=m(Oi);_defaultOptions=m(Ol,{optional:!0});_ngZone=m(me$1);_renderer=m(ut);_uniqueId=m(hu$1).getId(`mat-radio-`);_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||`after`}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||`accent`}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new ve;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=sa$1();_injector=m(se);constructor(){m(Ur).load(wb);let e=m(qa,{optional:!0}),i=m(new Od$1(`tabindex`),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,i&&(this.tabIndex=IF(i,0))}focus(e,i){i?this._focusMonitor.focusVia(this._inputElement,i,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,i)=>{e!==this.id&&i===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,`click`,this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new kn(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let i=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),i&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,i;if(!e||!e.selected||this.disabled?i=this.tabIndex:i=e.selected===this?this.tabIndex:-1,i!==this._previousTabIndex){let r=this._inputElement?.nativeElement;r&&(r.setAttribute(`tabindex`,i+``),this._previousTabIndex=i,io(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===r&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===r&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static ɵfac=function(i){return new(i||n)};static ɵcmp=Tt$1({type:n,selectors:[[`mat-radio-button`]],viewQuery:function(i,r){if(i&1&&Td$1(Rl,5)(Al,7,we$1),i&2){let o;pc(o=mc())&&(r._inputElement=o.first),pc(o=mc())&&(r._rippleTrigger=o.first)}},hostAttrs:[1,`mat-mdc-radio-button`],hostVars:19,hostBindings:function(i,r){i&1&&Bt(`focus`,function(){return r._inputElement.nativeElement.focus()}),i&2&&(Qn(`id`,r.id)(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null),jt(`mat-primary`,r.color===`primary`)(`mat-accent`,r.color===`accent`)(`mat-warn`,r.color===`warn`)(`mat-mdc-radio-checked`,r.checked)(`mat-mdc-radio-disabled`,r.disabled)(`mat-mdc-radio-disabled-interactive`,r.disabledInteractive)(`_mat-animation-noopable`,r._noopAnimations))},inputs:{id:`id`,name:`name`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],disableRipple:[2,`disableRipple`,`disableRipple`,Dn],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:IF(e)],checked:[2,`checked`,`checked`,Dn],value:`value`,labelPosition:`labelPosition`,disabled:[2,`disabled`,`disabled`,Dn],required:[2,`required`,`required`,Dn],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Dn]},outputs:{change:`change`},exportAs:[`matRadioButton`],ngContentSelectors:Il,decls:13,vars:17,consts:[[`formField`,``],[`input`,``],[`mat-internal-form-field`,``,3,`labelPosition`,`for`],[1,`mdc-radio`],[1,`mat-mdc-radio-touch-target`],[`type`,`radio`,`aria-invalid`,`false`,1,`mdc-radio__native-control`,3,`change`,`id`,`checked`,`disabled`,`required`],[`aria-hidden`,`true`,1,`mdc-radio__background`],[1,`mdc-radio__outer-circle`],[1,`mdc-radio__inner-circle`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-radio-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-ripple-element`,`mat-radio-persistent-ripple`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(i,r){i&1&&(hc(),oi$1(0,`label`,2,0)(2,`span`,3),ao(3,`span`,4),oi$1(4,`input`,5,1),Bt(`change`,function(a){return r._onInputInteraction(a)}),Ds$1(),oi$1(6,`span`,6),ao(7,`span`,7)(8,`span`,8),Ds$1(),oi$1(9,`span`,9),ao(10,`span`,10),Ds$1()(),oi$1(11,`span`,11),As$1(12),Ds$1()()),i&2&&(Ts$1(`labelPosition`,r.labelPosition)(`for`,r.inputId),gs$1(2),jt(`mdc-radio--disabled`,r.disabled),gs$1(2),Ts$1(`id`,r.inputId)(`checked`,r.checked)(`disabled`,r.disabled&&!r.disabledInteractive)(`required`,r.required),Qn(`name`,r.name)(`value`,r.value)(`aria-label`,r.ariaLabel)(`aria-labelledby`,r.ariaLabelledby)(`aria-describedby`,r.ariaDescribedby)(`aria-disabled`,r.disabled&&r.disabledInteractive?`true`:null),gs$1(5),Ts$1(`matRippleTrigger`,r._rippleTrigger.nativeElement)(`matRippleDisabled`,r._isRippleDisabled())(`matRippleCentered`,!0))},dependencies:[uy,Yue],styles:[`.mat-mdc-radio-button {
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
`],encapsulation:2})}return n})();var Ih=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Ve({type:n});static ɵinj=Le({imports:[ly,Va,ua$1]})}return n})();function Tt(n,t){if(!n)return t;try{return JSON.parse(n)}catch{return t}}function Bh(n){let t=!!n?.extension_data?.requires_manual_approval;return n?.approved!==!1?`pending`:t?`approval_required`:n.process_state===`wait_list`?`waitlist`:`pending`}function Dl(n){let t=n.other_data||{};return{id:n.id,map_id:n.map_id||t.map_id||``,level_id:n.zone_id,name:n.identifier||t.name||``,height:+(t.height||3),notes:n.notes||``,zones:n.zones||[n.zone_id].filter(e=>e),tags:n.tags||Tt(t.tags,[]),images:Tt(t.images,[])}}function Pl(n,t){let e=n.other_data||{},i=n.parent_id||``,r=t.find(o=>o.id===i);return{id:n.id,bank_id:i,map_id:n.map_id||e.map_id,assigned_to:n.assigned_to||e.assigned_to,assigned_name:n.assigned_name||e.assigned_name,name:n.identifier||e.name||``,accessible:e.accessible===`true`,bookable:n.bookable!==!1,position:Tt(e.position,[0,0]),size:Tt(e.size,[1,1]),bank:r,zone:r?.zone,features:n.features||Tt(e.features,[])}}function Ll(n,t){if(!t){n.update(e=>m$1(l({},e),{asset_id:``}));return}n.update(e=>m$1(l({},e),{asset_id:t.id,asset_name:t.name,name:t.display_name||t.name||t.id,map_id:t.map_id||t.id,description:t.name,zones:t.zone?[t.zone?.parent_id,t.zone?.id]:[],booking_asset:t}))}var zl=n=>`${(n.extension_data?.group_members||[]).find(i=>i?.email===n.asset_id)?.name||``}`.trim()||``;var Bl=n=>`${((n.attendees||[]).find(i=>i?.email===n.asset_id)||n.attendees?.[0])?.name||``}`.trim()||``;var ql=n=>{if(!n.includes(`@`))return n;let[t]=n.split(`@`),e=t.replace(/[._-]+/g,` `).replace(/\s+/g,` `).trim();return e?e.replace(/\b\w/g,i=>i.toUpperCase()):n};var qh=n=>{let t=`${n?.asset_id||``}`.trim(),e=zl(n);if(e)return e;let i=Bl(n);if(i)return i;let r=`${n?.extension_data?.visitor_name||n?.asset_name||``}`.trim(),o=[`${n?.title||``}`.trim().toLowerCase(),`${n?.description||``}`.trim().toLowerCase()].filter(a=>!!a);return r&&r.toLowerCase()!==t.toLowerCase()&&!o.includes(r.toLowerCase())?r:ql(t||r||`Visitor`)};function Vl(n=new VS){n=n||new VS;let t=n.extension_data||{};return[...t.attachments||[],...t.p2_document_names||[]].filter(e=>!!e)}function $l(n=new VS){return n?.user_email?new oo({id:n.user_id||``,email:n.user_email,name:n.user_name||n.user_email}):ze()}function $a(n=new VS){let t=n.extension_data||{},e=n.booking_type===`visitor`?t.visitor_name||n.asset_name||``:n.asset_name||n.description;return{id:n.id||``,parent_id:n.parent_id||``,event_id:n.event_id||``,ical_uid:t.ical_uid||``,date:n.date??0,date_end:n.date_end??0,all_day:n.all_day??!1,name:t.name||n.asset_name||``,duration:n.duration??0,booking_type:n.booking_type,zones:n.zones||[],title:n.title||``,description:n.description||``,booking_asset:{},resources:[],company:t.company||``,asset_id:n.asset_id||``,asset_name:e||``,assets:t.assets||[],attendees:n.attendees||[],map_id:t.map_id||``,featured:t.featured||!1,user:$l(n),user_id:n.user_id||``,group:n.group??{},user_email:n.user_email||``,user_name:n.user_name||``,timezone:n.timezone||``,booked_by:ze(),booked_by_id:n.booked_by_id||``,booked_by_email:n.booked_by_email||``,secondary_resource:t.other_asset_type||t.secondary_resource||{},location:t.location||``,attendance_type:t.attendance_type||`ANY`,phone:t.phone||``,permission:n.permission||`PRIVATE`,images:n.images||[],tags:n?.tags||[],plate_number:t.plate_number||``,vehicle_type:t.vehicle_type||`car`,request_type:t.request_type||`standard`,requires_manual_approval:t.requires_manual_approval??!1,space_restrictions:t.space_restrictions??!1,extra_space_restrictions:t.extra_space_restrictions??[],approver_group:t.approver_group||``,prefer_booked_location_first:t.prefer_booked_location_first??!1,pass_number:t.pass_number||``,international:t.international??!1,recurrence_custom:t.recurrence_custom??!1,recurrence_type:n.recurrence_type||`none`,recurrence_days:n.recurrence_days??0,recurrence_nth_of_month:n.recurrence_nth_of_month??0,recurrence_interval:n.recurrence_interval??0,recurrence_end:n.recurrence_end??0,recurrence_instances:t.recurrence_instances??0,notes:t.notes||``,attachments:Vl(n),update_master:!1,self_registered:!1,is_assgined:!1}}function Vh(n=new VS,t){let e=n.state===`started`,i=H($a(n));cse(i,$a(new VS));let r=y0(`parking.require_plate_number`,!1),o=y0(`parking.require_space_restriction`,!1),a=yi(i,d=>{xn(d.date),xn(d.asset_id),Vo(d.asset_id,{when:({valueOf:l})=>l(d.booking_type)===`visitor`}),xn(d.plate_number,{when:({valueOf:l})=>l(d.booking_type)===`parking`&&r()}),tt(d.plate_number,({value:l,valueOf:m})=>m(d.booking_type)===`parking`&&r()&&!`${l()||``}`.trim()?{kind:`required`}:void 0),tt(d.space_restrictions,({value:l,valueOf:m})=>m(d.booking_type)===`parking`&&o()&&!l()?{kind:`required`}:void 0),tt(d.duration,({value:l,valueOf:m})=>{let u=m(d.date);return l()<=0?{kind:`duration`}:u&&Ti$1(Date.now(),br(u,l()))?{kind:`duration`}:void 0}),Bo(d.date,({value:l})=>e?!0:l()<Date.now()&&!!w(i).id)},{injector:t});use(i,d=>d.user,d=>{d&&i.update(l$6=>m$1(l({},l$6),{user:d,user_id:d?.id??``,user_email:d?.email??``,user_name:d?.name??``}))},t),use(i,d=>d.resources,d=>{w(i).booking_type!==`visitor`&&Ll(i,(d||[])[0])},t),Fh.subscribe(d=>{d&&i.update(l$7=>m$1(l({},l$7),{booked_by:d,booked_by_id:d?.id,booked_by_email:d?.email}))});let s=dse(i,{},t);return a._time_sync=s,i._time_sync=s,{model:i,form:a,time_sync:s}}async function $h(n,t,e=[]){let i=await Ba(n),r=d=>{let l=i.element_bounds.get(d);return l?{x:l.x+l.w/2,y:l.y+l.h/2}:null},o=(typeof t==`string`?r(t):t)||{x:.5,y:.5},a=10,s=``;for(let d of e){let{x:l,y:m}=r(d)||{x:2,y:2},u=Math.sqrt((l-o.x)*(l-o.x)+(m-o.y)*(m-o.y));u<a&&(a=u,s=d)}return s}function Hh(n){let t=n.date||n.event_start*1e3,e=n.duration??(n.event_end-n.event_start)/60,i=n.recurrence?.pattern?GV(jV$1(n.recurrence),t):{},r=[n.system,...n.resources||[]].filter(s=>!!s?.id),{system_id:o}=n,a=Yie([...r.map(s=>s.id),o].filter(s=>!!s));return new VS(m$1(l({id:n.id,user_id:n.organiser?.id||n.host,user_email:n.host,user_name:n.organiser?.name||n.host,title:n.title||void 0,date:t,duration:e,all_day:n.all_day,timezone:n.timezone,asset_id:a[0],asset_ids:a,asset_name:n.system?.display_name||n.system?.name,zones:Yie(r.flatMap(s=>s.zones||[])),booking_type:`room`,approved:n.status===`approved`},i),{extension_data:l({},n)}))}async function Hl(n,t){if(!t)return[];let i=(await Ea([t]).catch(()=>[])).map(Dl);for(let r of i)r.zone=n.levelWithID(r.zones||[]);return i}async function jl(n,t,e){if(!t)return[];let r=(await Ra([t]).catch(()=>[])).map(o=>Pl(o,e));for(let o of e){let a=m$1(l({},o),{lockers:[]});o.lockers=r.filter(s=>s.bank_id===o.id).map(s=>m$1(l({},s),{bank:a}))}return r.filter(o=>o.bank)}async function jh(n,t){return jl(n,t,await Hl(n,t))}
/*! Bundled license information:

@angular/forms/fesm2022/_validation_errors-chunk.mjs:
@angular/forms/fesm2022/signals.mjs:
(**
* @license Angular v22.1.5
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*)
*/
export{ho as $,Ra as A,Zm as B,Lf as C,zf as Ct,Nu as D,Nt as E,Vh as F,ba as G,_a as H,Vl as I,dd as J,cu as K,Vo as L,Ru as M,Uu as N,Pf as O,Va as P,ga as Q,Xm as R,La as S,zd as St,Nn as T,ad as U,Zu as V,au as W,et as X,du as Y,fu as Z,Hm as _,wd as _t,Bo as a,ku as at,Km as b,xn as bt,Dl as c,mu as ct,Fl as d,rh as dt,hu as et,Gc as f,sa as ft,Hl as g,uu as gt,Hh as h,tt as ht,Bh as i,kt as it,Rt as j,Pl as k,Ea as l,po as lt,Gu as m,su as mt,$h as n,jl as nt,Ct as o,la as ot,Gd as p,sd as pt,da as q,$l as r,jm as rt,Cu as s,lu as st,$a as t,jh as tt,Eu as u,qh as ut,Ih as v,wt as vt,Mu as w,Ku as x,yi as xt,Jm as y,wu as yt,Xu as z};
//# debugId=741b91fb-4861-5eec-ae26-8ac73afc6d6b
//# sourceMappingURL=chunk-Dn0XGplr.js.map