import{n as m,r as n,t as l}from"./chunk-Da4-SChG.js";import{$ as K_,$n as io,Ar as qb,Bn as gT,C as Dp,Ci as zi,Ct as Qm,Dr as p_,Et as RT,G as JT,Gr as tn,Gt as Wb,H as Hs,In as fT,Ir as ra$1,It as UT,J as Jn$1,Jt as XI,K as Je,Mn as en,Pr as rT,Qr as ut$1,Rn as fe$1,Rr as re,Rt as Um,S as Dm,Ti as zr$1,Tn as dT,Vr as sp,Wn as hT,Yr as uT,Z as KC,Zt as Xl,_ as Ct,_i as yT,a as $s,b as De$1,bt as Q_,c as Am,ci as xI,di as xm,dr as l_,er as iy,f as Bm,hn as b,ii as wD,it as Lv,jr as ql,jt as Sr$1,li as xS,m as Bv,oi as wy,or as km,pn as ap,r as $m,ri as vp,rr as jv,st as Nm,tt as Km,v as Cw,vi as yd,w as E,wr as oe,x as Df,yi as ym,yn as c_,yt as Pv,zt as Uo}from"./chunk-DifyR4po.js";import{B as Oh,Cn as zr$2,Ct as Yu,D as Ih,E as Hr,F as Lu,G as Q,I as Mh,M as Kt$1,N as La$1,T as Hh,Y as Qt,bt as Xe,c as Ch,dn as vt,gt as Wh,h as Fa,k as J,kt as be,ln as ut$2,m as Eu,pt as Uu,sn as ua$1,st as Ua,t as $,tt as Ru,x as Fu,xt as Yh,yt as Wu}from"./chunk-CMmxNyUB.js";import{B as e_,Ft as at,G as hd,It as f,Nt as Y,R as dd,S as Rs,T as To,U as eo,Ut as V,Vt as De$2,Wt as be$1,_ as N,_t as xe,et as js,ft as te,g as Ms,ht as v,o as As,pt as to,rt as me,s as C,ut as re$1,zt as $$1}from"./main-HUQIH4AP.js";import{E as z,c as Pe$1,g as b$1,m as Ye,p as Y$1,t as A,w as ut$3}from"./chunk-CqOaRFEh.js";import{E as zt$1,n as A$1,o as Ht$1,p as Vt$1,s as It,v as ci,y as di}from"./chunk-Bnp2HL-f.js";import{c as yt,r as Rt,t as Mt}from"./chunk-Cx_fCDDE.js";import{i as Kt$2,k as zt$2,m as V$1,t as I,v as ge}from"./chunk-CrkT5Ho7.js";import{a as Te$1,c as ce,i as Oe,l as le,n as He,o as Ue,r as J$1,s as X,u as me$1}from"./chunk-Blts2F-3.js";import{c as at$1,d as mr$1,f as na$1,g as st,h as ra$2,i as He$1,l as fi,m as ot,u as ia$1}from"./chunk-BM5K9Aq1.js";import{c as T,i as Ht$2,n as Bt$1,t as $e$1}from"./chunk-CogODR46.js";var ar=[`determinateSpinner`];function or(t,i){if(t&1&&(vp(),Hs(0,`svg`,11),Am(1,`circle`,12),ql()),t&2){let e=uT();Nm(`viewBox`,e._viewBox()),Cw(),Qm(`stroke-dasharray`,e._strokeCircumference(),`px`)(`stroke-dashoffset`,e._strokeCircumference()/2,`px`)(`stroke-width`,e._circleStrokeWidth(),`%`),Nm(`r`,e._circleRadius())}}var sr=new b(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:fn})});var fn=100;var cr=10;var gn=(()=>{class t{_elementRef=E(tn);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let e=E(sr),n=$$1(),r=this._elementRef.nativeElement;this._noopAnimations=n===`di-disabled`&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&n===`reduced-motion`&&r.classList.add(`mat-progress-spinner-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=fn;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-cr)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(n){return new(n||t)};static ɵcmp=KC({type:t,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(n,r){if(n&1&&$m(ar,5),n&2){let a;hT(a=gT())&&(r._determinateCircle=a.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(n,r){n&2&&(Nm(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,r.mode===`determinate`?r.value:null)(`mode`,r.mode),RT(`mat-`+r.color),Qm(`width`,r.diameter,`px`)(`height`,r.diameter,`px`)(`--%NS%mat-progress-spinner-size`,r.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,r.diameter+`px`),Km(`_mat-animation-noopable`,r._noopAnimations)(`mdc-circular-progress--indeterminate`,r.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,K_],diameter:[2,`diameter`,`diameter`,K_],strokeWidth:[2,`strokeWidth`,`strokeWidth`,K_]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(n,r){if(n&1&&(Dm(0,or,2,8,`ng-template`,null,0,p_),Hs(2,`div`,2,1),vp(),Hs(4,`svg`,3),Am(5,`circle`,4),ql()(),Dp(),Hs(6,`div`,5)(7,`div`,6)(8,`div`,7),km(9,8),ql(),Hs(10,`div`,9),km(11,8),ql(),Hs(12,`div`,10),km(13,8),ql()()()),n&2){let a=yT(1);Cw(4),Nm(`viewBox`,r._viewBox()),Cw(),Qm(`stroke-dasharray`,r._strokeCircumference(),`px`)(`stroke-dashoffset`,r._strokeDashOffset(),`px`)(`stroke-width`,r._circleStrokeWidth(),`%`),Nm(`r`,r._circleRadius()),Cw(4),xm(`ngTemplateOutlet`,a),Cw(2),xm(`ngTemplateOutlet`,a),Cw(2),xm(`ngTemplateOutlet`,a)}},dependencies:[xS],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2})}return t})();var yn=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=ra$1({type:t});static ɵinj=io({imports:[be$1]})}return t})();function Ya(t,i,e){let n=$(t,e?.in);return n.setHours(i),n}var D=`/api/staff/v1/bookings`;var lr=re$1.raw||re$1.version||re$1.hash;function wn(){return js(`app.name`)||js(`app.short_name`)||`PlaceOS`}function Ne(){return`${wn()}_${re$1.hash}_${N().email||``}`}function zt(t){let i=l({},t instanceof eo?t.toJSON():t);return delete i.created_at,m(l({},i),{extension_data:m(l({},i.extension_data||{}),{app_name:wn(),app_version:lr})})}async function De(t){return xn(t).catch(()=>[])}async function xn(t){let i=e_(t);return(await Kt$1(`${D}${i?`?`+i:``}`)).map(n=>new eo(n))}async function mr(t,i){try{let{data:e,next:n,total:r}=await vt({query_params:m(l({},t),{limit:Math.max(200,i||0)}),endpoint:D,path:`booked`}),a=[...e],o=1;for(;n&&(!r||a.length<r)&&o<=kn;){let c=await n();e=c.data,n=c.next,r=c.total,a=[...a,...e],o+=1}return Mh(a)}catch{return[]}}async function ro(t,i={}){let e=e_(m(l({},i),{limit:1e3}));try{let n=await zr$2(`${D}/clashing-assets${e?`?`+e:``}`,t.toJSON()).catch(()=>[]);return i.include_clash_time,n}catch{return[]}}var kn=50;async function ao(t){try{let{data:i,next:e}=await vt({query_params:t,fn:a=>new eo(a),endpoint:D,path:``}),n=[...i],r=1;for(;e&&r<=kn;){let a=await e();i=a.data,e=a.next,n=[...n,...i],r+=1}return Mh(n,`id`)}catch{return[]}}async function oo(t){return new eo(await Kt$1(`${D}/${encodeURIComponent(t)}`))}function qt(t){if(!t)throw new Error(`Missing parent booking id`);let i=Number(t);return Number.isSafeInteger(i)?i:t}async function fe(t,i){let e=e_(m(l({},i),{utm_source:Ne()}));return new eo(await zr$2(`${D}${e?`?`+e:``}`,zt(t)))}async function Cn(t,i,e=`patch`){return new eo(await(e===`patch`?Fa:Hr)(`${D}/${encodeURIComponent(t)}`,zt(i)))}async function ur(t,i,e,n=`patch`){return new eo(await(n===`patch`?Fa:Hr)(`${D}/${encodeURIComponent(t)}/instance/${i}`,zt(e)))}var so=async(t,i)=>{let e=t.id;delete t.id;let n=i?.instance;return i&&delete i.instance,e?n?ur(e,t.instance||t.booking_start,t):Cn(e,t):fe(ua$1(t,[``,null,void 0])||{},i)};function Re(t,i={}){if(i.instance)return pr(t,i.start_time);let e=e_({utm_source:Ne()});return La$1(`${D}/${encodeURIComponent(t)}?${e}`,{response_type:`void`})}function pr(t,i){let e=e_({utm_source:Ne()});return La$1(`${D}/${encodeURIComponent(t)}/instance/${i}?${e}`,{response_type:`void`})}async function _r(t,i){let e=e_({state:i});try{return new eo(await zr$2(`${D}/${encodeURIComponent(t)}/check_in?${e}&utm_source=${Ne()}`,``))}catch(n){let r=await n.json();throw r.error||r.message||r}}async function hr(t,i,e){let n=e_({state:e});try{return new eo(await zr$2(`${D}/${encodeURIComponent(t)}/check_in/${i}?${n}&utm_source=${Ne()}`,``))}catch(r){let a=await r.json();throw a.error||a.message||a}}async function co(t,i){return!!t.instance||!!t.recurrence_type&&t.recurrence_type!==`none`?hr(t.id,t.instance||t.booking_start,i):_r(t.id,i)}async function lo(t,i,e,n,r=`room`){let a=await De({type:r,period_start:v(i),period_end:v(ut$2(i,e))});return t.map(o=>!a.find(c=>(c.asset_id===o||c.asset_ids.includes(o))&&(!n||n!==c.id)))}async function fr(t,i){return t.from_bookings?t.linked_bookings.filter(n=>n.booking_type===i).map(n=>new eo(n)):(await xn({type:i,event_id:t.id,period_start:v(t.date),period_end:v(ut$2(t.date,t.duration)),limit:500})).filter(n=>n.extension_data?.parent_id===t.id)}function gr(t,i){return t.from_bookings?[]:(t.linked_bookings||[]).filter(e=>{let n=e.extension_data?.parent_id;return e.booking_type===i&&!!n&&n!==t.id}).map(e=>e.id)}function yr(t,i){return i.id&&t.extension_data?.details?.id===i.id||i.email&&t.attendees?.find(e=>e.email===i.email)?!0:!!t.asset_ids?.find(e=>i.items?.find(n=>n.item_ids?.includes(e)))}function bn(t){let i=JSON.parse(JSON.stringify(t??null));return i&&typeof i==`object`&&delete i.deliver_at_time,JSON.stringify(i,(e,n)=>n&&typeof n==`object`&&!Array.isArray(n)?Object.fromEntries(Object.entries(n).sort(([r],[a])=>r<a?-1:1)):n)}function vn(t=[]){return t.map(i=>i.email?.toLowerCase()).sort().join(`,`)}function br(t,i){let e={};(t.booking_start!==i.booking_start||t.booking_end!==i.booking_end)&&(e.booking_start=i.booking_start,e.booking_end=i.booking_end,e.all_day=i.all_day);for(let r of[`title`,`description`,`asset_name`])t[r]!==i[r]&&(e[r]=i[r]);return t.user_email.toLowerCase()!==i.user_email.toLowerCase()&&(e.user_email=i.user_email),t.asset_id!==i.asset_id&&(e.asset_id=i.asset_id,e.asset_ids=i.asset_ids),[...t.zones].sort().join()!==[...i.zones].sort().join()&&(e.zones=i.zones),vn(t.attendees)!==vn(i.attendees)&&(e.attendees=i.attendees),!(bn(t.extension_data?.details)!==bn(i.extension_data?.details))&&!Object.keys(e).length?null:m(l({},e),{extension_data:i.extension_data})}async function mo(t,i,e){let n=await fr(t,i),r=t.system?.zones||Mh(Ih(t.resources.map(c=>c.zones)))||[],a=new Set,o=[];try{for(let c of gr(t,i))await Re(c);for(let c of e){let s=n.find(g=>!a.has(g.id)&&yr(g,c)),d=i===`catering-order`&&c.system_id?t.resources.find(g=>g.id===c.system_id||g.email===c.system_id):void 0,l$1=d?.id||c.system_id||c.email||c.id,m$1=d?.display_name||d?.name||c.name,p=new eo({type:i,booking_type:i,date:t.date,duration:t.duration,description:t.title||c.name,user_email:t.host,asset_id:l$1,asset_name:m$1,title:t.title,attendees:c.email?[new xe(c)]:[],extension_data:{parent_id:t.id,name:m$1,location_id:d?.id||t.location,details:c},zones:d?.zones||r});if(s){a.add(s.id);let g=br(s,p);g&&await Cn(s.id,g);continue}o.push(t.from_bookings?await fe(m(l({},p.toJSON()),{parent_id:qt(t.id)})):await fe(p.toJSON(),{ical_uid:t.ical_uid,event_id:t.id}))}for(let c of n)a.has(c.id)||await Re(c.id)}catch(c){throw await Promise.all(o.filter(s=>!!s.id).map(s=>Re(s.id).catch(()=>{}))),c}}var Te=`/api/staff/v1/calendars`;async function fo(){return(await Kt$1(Te)).map(i=>new to(i))}async function Sn(t){let i=e_(t);return(await Kt$1(`${Te}/availability${i?`?`+i:``}`)).map(n=>new to(n))}var vr=(t,i)=>t.filter(e=>!!e.resource).map(e=>new me(m(l({},e.resource),{level:i?.levelWithID(e.resource.zones),availability:e.availability}))).filter(e=>e.bookable);async function go(t){let i=e_(t);return await Kt$1(`${Te}/free_busy${i?`?`+i:``}`)}async function Mn(t,i){let e=e_(t);return vr((await Kt$1(`${Te}/free_busy${e?`?`+e:``}`)).map(r=>new to(r)),i)}async function yo(t){return await Kt$1(`${Te}/${encodeURIComponent(t)}/permission`)}var H=`/api/staff/v1/events`;var wr=re$1.raw||re$1.version||re$1.hash;function xr(){return js(`app.name`)||js(`app.short_name`)||`PlaceOS`}function In(t){return m(l({},t),{extension_data:m(l({},t.extension_data||{}),{app_name:xr(),app_version:wr})})}async function So(t){return kr(t).catch(()=>[])}async function kr(t){return(await Cr(t)).events}async function Cr(t){let i=e_(t),e=`${H}${i?`?`+i:``}`,n=await Kt$1(e),r=Ua(new URL(e,document.baseURI).href)[`x-calendar-issue`]||``;return{events:n.map(a=>new Ms(a)),failed_calendars:r.split(`,`).map(a=>a.trim().toLowerCase()).filter(Boolean)}}async function Sr(t){return new Ms(await zr$2(`${H}`,new Ms(In(t)).toJSON()))}async function Mr(t,i,e={},n=`patch`){let r=e_(e);return new Ms(await(n===`patch`?Fa:Hr)(`${H}/${encodeURIComponent(t)}${r?`?`+r:``}`,new Ms(In(i)).toJSON()))}var Mo=async(t,i)=>{let e=t.update_master&&t.recurring_event_id||t.id;return delete t?.status,e?Mr(e,m(l({},t),{id:e}),i):Sr(t)};function Io(t,i={}){let e=e_(i);return La$1(`${H}/${encodeURIComponent(t)}${e?`?`+e:``}`,{response_type:`void`})}async function Eo(t,i,e,n={}){let r=e_(m(l({},n),{state:e}));return new As(await zr$2(`${H}/${encodeURIComponent(t)}/guests/${i}/checkin${r?`?`+r:``}`,``))}async function Oo(t,i,e={}){let n=e_(e);return new As(await zr$2(`${H}/${encodeURIComponent(t)}/attendee${n?`?`+n:``}`,i))}async function Ao(t,i,e={}){let n=e_(e);return new As(await La$1(`${H}/${encodeURIComponent(t)}/attendee/${encodeURIComponent(i.email)}${n?`?`+n:``}`))}async function Ro(t,i,e={}){let n=e_(l({},e));return await Kt$1(`${H}/${encodeURIComponent(t)}/metadata/${encodeURIComponent(i)}${n?`?`+n:``}`)}async function No(t,i,e,n,r,a=[0,0]){let o=ut$2(i,e).valueOf(),[c,s]=await Promise.all([Sn({system_ids:t.join(),period_start:v(i),period_end:v(o)}).catch(()=>[]),n&&t.includes(n)?Mn({period_start:v(i),period_end:v(o),system_ids:n}):Promise.resolve([])]),d=t.map(l=>!!c.find(m=>m.id===l||m.resource?.id===l));for(let l of s){if(!t.includes(l.id))continue;let m=l.availability.filter(p=>!(p.date===a[0]&&p.duration===a[1]));d[t.indexOf(l.id)]=!m.find(p=>p.status!==`free`)}return d}async function Do(t,i={}){let e=e_(m(l({},i),{limit:1e4}));try{let n=await zr$2(`${H}/clashing-assets${e?`?`+e:``}`,t.toJSON());return i.include_clash_time,n}catch{return[]}}function pt(t,i=``){let e=i.trim().toLowerCase();return t.filter(n=>(n.name||``).trim().toLowerCase()===e).sort((n,r)=>(n.created_at||0)-(r.created_at||0))[0]}function Ir(t){return m(l({},t),{data:t.data.filter(i=>!i?.hidden)})}async function Er(){let t=await Lu({});return new Set(t.data.filter(i=>!i?.hidden).map(i=>i.id))}async function Qo(t={}){if(t.hidden===!0)return Lu(t);let n$1=t,{hidden:i}=n$1;return Ir(await Lu(n(n$1,[`hidden`])))}async function Or(t={}){if(t.hidden===!0)return Ru(t);let a=t,{hidden:i}=a,e=n(a,[`hidden`]),[n$2,r]=await Promise.all([Ru(e),Er()]);return m(l({},n$2),{data:n$2.data.filter(o=>!o?.hidden&&r.has(o.category_id))})}async function Yo(t={}){if(t.hidden===!0)return Eu(t);let o=t,{hidden:i}=o,e=n(o,[`hidden`]),[n$3,r]=await Promise.all([Eu(e),Or(m(l({},e.zone_id?{zone_id:e.zone_id}:{}),{limit:2e3}))]),a=new Set(r.data.map(c=>c.id));return m(l({},n$3),{data:n$3.data.filter(c=>!c?.hidden&&a.has(c.asset_type_id))})}function En(t){return t.id?Wu(t.id,t):Yu(t)}var ut=new Map;var Ar=[`period_start`,`period_end`,`type`,`rejected`];async function Rr(t={}){let i=await Eu(m(l({},t),{limit:t.limit||500})),e=i.total,n=[...i.data];for(;typeof i.next==`function`;){let r=i.next();if(!r)break;i=await r,e=i.total,n.push(...i.data)}return{total:e,next:()=>null,data:n}}async function Nr(t={}){let i=JSON.stringify({zones:t.zones||t.zone_id||``,category_id:t.category_id||``,q:t.q||``,type_id:t.type_id||``});if(ut.has(i))return ut.get(i);let e=l({},t);for(let d of Ar)d in e&&delete e[d];e.zones&&!e.zone_id&&(e.zone_id=e.zones),e.zones&&delete e.zones;let[n,r]=await Promise.all([Ru(e),Rr(e)]),a=n.data.filter(d=>!d?.hidden);e.type_id&&(a=a.filter(d=>d.id===e.type_id));let o=new Set(a.map(d=>d.id)),c=new Map;for(let d of r.data){if(d?.hidden||!o.has(d.asset_type_id))continue;let l=c.get(d.asset_type_id)||[];l.push(d),c.set(d.asset_type_id,l)}let s=a.map(d=>m(l({},d),{assets:c.get(d.id)||[]}));return ut.set(i,s),setTimeout(()=>ut.delete(i),300*1e3),s}function On(t){return t.id?Uu(t.id,t):Fu(t)}async function Dr(t,i=[]){let[e,n]=await Promise.all([Nr(t),De(m(l({},t),{type:`asset-request`}))]),r=n.filter(a=>a.status!==`declined`&&a.status!==`cancelled`);return e.map(a=>m(l({},a),{assets:a.assets.filter(o=>i?.includes(o.id)||!r.find(c=>!i.includes(c.id)&&(c.asset_id===o.id||c.asset_ids?.includes(o.id))))}))}function Tr(t,i){if((!t||t?.length<=0)&&i?.length)return[];if(!i)return[];let e=[];for(let n of t){let r=i.find(a=>a.id===n.id);(!r||r.ref_id!==n.ref_id)&&e.push(n.id)}return e}async function Xo({id:t,ical_uid:i,from_booking:e,from_bookings:n},{date:r,duration:a,all_day:o,host:c,location_name:s,location_id:d,zones:l$2,reset_state:m$2},p=[],g=!1){let F=await De({period_start:v(r),period_end:v(ut$2(r,a)),type:`asset-request`,zones:l$2.join(`,`)}),X=!!(e||n),ge=t&&(i||X)?(await De({period_start:v(J(r)),period_end:v(Xe(r)),type:`asset-request`,email:c,event_id:X?``:t,ical_uid:i})).filter(h=>!X||String(h.extension_data?.parent_id)===String(t)):[],ft=ge.map(h=>[h.id,new C(h.extension_data.request)]);p?.forEach(h=>h.conflict=!1);let ye=g?p.map(h=>h.id):Tr(p,ft.map(([h,x])=>x));if(m$2){let h=ge.filter(x=>x.approved||x.rejected);ye=Mh([...ye,...h.map(x=>x.extension_data.request_id)])}let Qt=ft.filter(([h,x])=>!ye.includes(x.id)),er=ft.filter(([h,{id:x}])=>ye.includes(x)),tr=p.filter(({id:h})=>ye.includes(h)),te=Ih(F.filter(h=>!h.rejected&&(!ge.find(x=>x.id===h.id)||Qt.find(([x])=>h.event_id===x))).map(h=>h.asset_ids));for(let[h,x]of Qt)te=[...te,...Ih(x.items.map(ze=>ze.item_ids))];let nr=await Dr({period_start:v(r),period_end:v(ut$2(r,a)),type:`asset-request`,zones:(l$2||[]).join(`,`)},ge.map(h=>h.id)),rr=tr.map(h=>{let x=Ih(h.items.map(({id:B,item_ids:gt,quantity:yt})=>{let be=gt||[],Xt=nr.find(Jt=>Jt.id===B)?.assets;if(!Xt)return be;let bt=[];return new Array(yt).fill(0).map((Jt,qe)=>{let vt=te.includes(be[qe])||bt.includes(be[qe])||!be[qe]?Xt?.find(({id:Zt})=>!te.includes(Zt)&&!bt.includes(Zt))?.id:be[qe];if(!vt)throw h.conflict=!0,`Unable to find available asset for request`;return bt.push(vt),vt})}));if(!x.length||x.some(B=>!B))throw h.conflict=!0,`Unable to find available asset for request`;let ze=ge.find(B=>B.asset_ids.find(gt=>h.items?.find(yt=>yt.item_ids?.includes(gt))));te=[...te,...x];let Yt={type:`asset-request`,booking_type:`asset-request`,date:r,duration:a,all_day:o,description:s,user_email:c,asset_id:x[0],asset_ids:x,asset_name:h.items.map(B=>B.name).join(`, `),title:h.items.map(B=>B.name).join(`, `),approved:!m$2&&ze?.approved&&!h._changed,rejected:!m$2&&ze?.rejected&&!h._changed,extension_data:{parent_id:t,request_id:h.id,location_id:d,request:new C(m(l({},h),{event:null}))},zones:l$2||[]};return()=>X?fe(m(l({},new eo(Yt).toJSON()),{parent_id:qt(t)})):fe(new eo(Yt),{ical_uid:i,event_id:t})});return async()=>{await Promise.all(er.map(([h])=>Re(h))),await Promise.all(rr.map(h=>h()))}}var $r=64;var Pr=64;var Lr=30*1e3;var zr=`PlaceOS.image-cache-v1`;var qr=`PlaceOS.image-cache-keys-v1`;var q=new Map;var Ft=new Map;var ee=new Map;var An=!1;function Fr(){if(!An&&(An=!0,typeof caches<`u`&&caches.delete(zr).catch(()=>!1),typeof sessionStorage<`u`))try{sessionStorage.removeItem(qr)}catch{}}function Br(t){let i=q.get(t);if(i)return q.delete(t),q.set(t,i),i}function Ur(t,i){let e=q.get(t);for(e&&e!==i&&URL.revokeObjectURL(e),q.delete(t),q.set(t,i);q.size>$r;){let n=q.keys().next().value;if(!n)break;let r=q.get(n);q.delete(n),r&&URL.revokeObjectURL(r)}return i}function Gr(t){for(ee.delete(t),ee.set(t,Date.now()+Lr);ee.size>Pr;){let i=ee.keys().next().value;if(!i)break;ee.delete(i)}}function Bt(t){let i=Q();document.cookie=`${i===`x-api-key`?`api-key=`+encodeURIComponent(Qt()):`bearer_token=`+encodeURIComponent(i)};max-age=30;path=${t};samesite=strict;${location.protocol===`https:`?`secure;`:``}`}function Vr(){let t=Q();return t===`x-api-key`?{"X-API-Key":Qt()}:{Authorization:`Bearer ${t}`}}function ts(t,i){return Rn(t,()=>(Bt(i),fetch(t)))}function is(t){return Rn(t,()=>fetch(t,{headers:Vr()}))}async function Rn(t,i){Fr();let e=Br(t);if(e)return e;if((ee.get(t)||0)>Date.now())throw new Error(`Image load is in retry cooldown`);ee.delete(t);let r=Ft.get(t);if(r)return r;let a=i().then(async o=>{if(!o?.ok)throw new Error(`Failed to fetch image: ${o?.status}`);return Ur(t,URL.createObjectURL(await o.blob()))}).catch(o=>{throw Gr(t),o}).finally(()=>Ft.delete(t));return Ft.set(t,a),a}var $e=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new re;bulk={select:i=>this._select(i),deselect:i=>this._deselect(i),setSelection:i=>this._setSelection(i)};constructor(i=!1,e,n=!0,r){this._multiple=i,this._emitChanges=n,this.compareWith=r,e&&e.length&&(i?e.forEach(a=>this._markSelected(a)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){return this._select(i)}deselect(...i){return this._deselect(i)}setSelection(...i){return this._setSelection(i)}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_select(i){this._verifyValueAssignment(i),i.forEach(n=>this._markSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(i){this._verifyValueAssignment(i),i.forEach(n=>this._unmarkSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(i){this._verifyValueAssignment(i);let e=this.selected,n=new Set(i.map(a=>this._getConcreteValue(a)));i.forEach(a=>this._markSelected(a)),e.filter(a=>!n.has(this._getConcreteValue(a,n))).forEach(a=>this._unmarkSelected(a));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let n of e)if(this.compareWith(i,n))return n;return i}else return i}};var Ut=(()=>{class t{_listeners=[];notify(e,n){for(let r of this._listeners)r(e,n)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(n=>e!==n)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(n){return new(n||t)};static ɵprov=en({token:t,factory:t.ɵfac})}return t})();var Qr=[`trigger`];var Yr=[`panel`];var Xr=[[[`mat-select-trigger`]],`*`];var Jr=[`mat-select-trigger`,`*`];function Zr(t,i){if(t&1&&(Hs(0,`span`,4),UT(1),ql()),t&2){let e=uT();Cw(),iy(e.placeholder)}}function ea(t,i){t&1&&fT(0)}function ta(t,i){if(t&1&&(Hs(0,`span`,11),UT(1),ql()),t&2){let e=uT(2);Cw(),iy(e.triggerValue)}}function ia(t,i){if(t&1&&(Hs(0,`span`,5),Wb(1,ea,1,0)(2,ta,2,1,`span`,11),ql()),t&2){let e=uT();Cw(),qb(e.customTrigger?1:2)}}function na(t,i){if(t&1){let e=rT();Hs(0,`div`,12,1),Bm(`keydown`,function(r){sp(e);return ap(uT()._handleKeydown(r))}),fT(2,1),ql()}if(t&2){let e=uT();RT(e.panelClass),Km(`mat-select-panel-animations-enabled`,!e._animationsDisabled)(`mat-primary`,e._parentFormField?.color===`primary`)(`mat-accent`,e._parentFormField?.color===`accent`)(`mat-warn`,e._parentFormField?.color===`warn`)(`mat-undefined`,!e._parentFormField?.color),Nm(`id`,e.id+`-panel`)(`aria-multiselectable`,e.multiple)(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e._getPanelAriaLabelledby())}}var ra=new b(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let t=E(fe$1);return()=>It(t)}});var aa=new b(`MAT_SELECT_CONFIG`);var Pn=new b(`MatSelectTrigger`);var Gt=class{source;value;constructor(i,e){this.source=i,this.value=e}};var qs=(()=>{class t{_viewportRuler=E(A$1);_changeDetectorRef=E(yd);_elementRef=E(tn);_dir=E(V,{optional:!0});_idGenerator=E(Y$1);_renderer=E(Sr$1);_parentFormField=E(at$1,{optional:!0});ngControl=E(V$1,{self:!0,optional:!0});_liveAnnouncer=E(ut$3);_defaultOptions=E(aa,{optional:!0});_animationsDisabled=De$2();_popoverLocation;_initialized=new re;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let n=this.options.toArray()[e];if(n){let r=this.panel.nativeElement,a=Te$1(e,this.options,this.optionGroups),o=n._getHostElement();e===0&&a===1?r.scrollTop=0:r.scrollTop=Oe(o.offsetTop,o.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Gt(this,e)}_scrollStrategyFactory=E(ra);_panelOpen=!1;_compareWith=(e,n)=>e===n;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new re;_errorStateTracker;stateChanges=new re;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=ut$1(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(ge.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Lv(()=>{let e=this.options;return e?e.changes.pipe(jv(e),wD(()=>Pv(...e.map(n=>n.onSelectionChange)))):this._initialized.pipe(wD(()=>this.optionSelectionChanges))});openedChange=new Ct;_openedStream=this.openedChange.pipe(zr$1(e=>e),Je(()=>{}));_closedStream=this.openedChange.pipe(zr$1(e=>!e),Je(()=>{}));selectionChange=new Ct;valueChange=new Ct;constructor(){let e=E(me$1),n=E(zt$2,{optional:!0}),r=E(Kt$2,{optional:!0}),a=E(new wy(`tabindex`),{optional:!0}),o=E(Ht$1,{optional:!0}),c=E(He$1,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new J$1(e,c||this.ngControl,r,n,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=o?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new $e(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Bv(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Bv(this._destroy)).subscribe(e=>{e.added.forEach(n=>n.select()),e.removed.forEach(n=>n.deselect())}),this.options.changes.pipe(jv(null),Bv(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),n=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute(`aria-labelledby`,e):r.removeAttribute(`aria-labelledby`)}n&&(this._previousControl!==n.control&&(this._previousControl!==void 0&&n.disabled!==null&&n.disabled!==this.disabled&&(this.disabled=n.disabled),this._previousControl=n.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Jn$1(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{n(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,n=this._renderer.listen(e,`animationend`,a=>{a.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(n=>n.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let n=e.keyCode,r=n===40||n===38||n===37||n===39,a=n===13||n===32,o=this._keyManager;if(!o.isTyping()&&a&&!Pe$1(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let c=this.selected;o.onKeydown(e);let s=this.selected;s&&c!==s&&this._liveAnnouncer.announce(s.viewValue,1e4)}}_handleOpenKeydown(e){let n=this._keyManager,r=e.keyCode,a=r===40||r===38,o=n.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!o&&(r===13||r===32)&&n.activeItem&&!Pe$1(e))e.preventDefault(),n.activeItem._selectViaInteraction();else if(!o&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let c=this.options.some(s=>!s.disabled&&!s.selected);this.options.forEach(s=>{s.disabled||(c?s.select():s.deselect())})}else{let c=n.activeItemIndex;n.onKeydown(e),this._multiple&&a&&e.shiftKey&&n.activeItem&&n.activeItemIndex!==c&&n.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Pe$1(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(n=>n.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(n=>this._selectOptionByValue(n)),this._sortValues();else{let n=this._selectOptionByValue(e);n?this._keyManager.updateActiveItem(n):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let n=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return n&&this._selectionModel.select(n),n}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof zt$1?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new z(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Pv(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Bv(e)).subscribe(n=>{this._onSelect(n.source,n.isUserInput),n.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Pv(...this.options.map(n=>n._stateChanges)).pipe(Bv(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,n){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),n&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),n&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((n,r)=>this.sortComparator?this.sortComparator(n,r,e):e.indexOf(n)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let n;this.multiple?n=this.selected.map(r=>r.value):n=this.selected?this.selected.value:e,this._value=n,this.valueChange.emit(n),this._onChange(n),this.selectionChange.emit(this._getChangeEvent(n)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let n=0;n<this.options.length;n++)if(!this.options.get(n).disabled){e=n;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,n=e?e+` `:``;return this.ariaLabelledby?n+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute(`aria-describedby`,e.join(` `)):n.removeAttribute(`aria-describedby`)}onContainerClick(e){let n=b$1(e);n&&(n.tagName===`MAT-OPTION`||n.classList.contains(`cdk-overlay-backdrop`)||n.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(n){return new(n||t)};static ɵcmp=KC({type:t,selectors:[[`mat-select`]],contentQueries:function(n,r,a){if(n&1&&Um(a,Pn,5)(a,X,5)(a,ce,5),n&2){let o;hT(o=gT())&&(r.customTrigger=o.first),hT(o=gT())&&(r.options=o),hT(o=gT())&&(r.optionGroups=o)}},viewQuery:function(n,r){if(n&1&&$m(Qr,5)(Yr,5)(ci,5),n&2){let a;hT(a=gT())&&(r.trigger=a.first),hT(a=gT())&&(r.panel=a.first),hT(a=gT())&&(r._overlayDir=a.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(n,r){n&1&&Bm(`keydown`,function(o){return r._handleKeydown(o)})(`focus`,function(){return r._onFocus()})(`blur`,function(){return r._onBlur()}),n&2&&(Nm(`id`,r.id)(`tabindex`,r.disabled?-1:r.tabIndex)(`aria-controls`,r.panelOpen?r.id+`-panel`:null)(`aria-expanded`,r.panelOpen)(`aria-label`,r.ariaLabel||null)(`aria-required`,r.required.toString())(`aria-disabled`,r.disabled.toString())(`aria-invalid`,r.errorState)(`aria-activedescendant`,r._getAriaActiveDescendant()),Km(`mat-mdc-select-disabled`,r.disabled)(`mat-mdc-select-invalid`,r.errorState)(`mat-mdc-select-required`,r.required)(`mat-mdc-select-empty`,r.empty)(`mat-mdc-select-multiple`,r.multiple)(`mat-select-open`,r.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,Q_],disableRipple:[2,`disableRipple`,`disableRipple`,Q_],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:K_(e)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,Q_],placeholder:`placeholder`,required:[2,`required`,`required`,Q_],multiple:[2,`multiple`,`multiple`,Q_],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,Q_],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,K_],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,Q_]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[JT([{provide:ot,useExisting:t},{provide:le,useExisting:t}]),$s],ngContentSelectors:Jr,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(n,r){if(n&1&&(dT(Xr),Hs(0,`div`,2,0),Bm(`click`,function(){return r.open()}),Hs(3,`div`,3),Wb(4,Zr,2,1,`span`,4)(5,ia,3,1,`span`,5),ql(),Hs(6,`div`,6)(7,`div`,7),vp(),Hs(8,`svg`,8),Am(9,`path`,9),ql()()()(),Dm(10,na,3,16,`ng-template`,10),Bm(`detach`,function(){return r.close()})(`backdropClick`,function(){return r.close()})(`overlayKeydown`,function(o){return r._handleOverlayKeydown(o)})),n&2){let a=yT(1);Cw(3),Nm(`id`,r._valueId),Cw(),qb(r.empty?4:5),Cw(6),xm(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,r._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,r._scrollStrategy)(`cdkConnectedOverlayOrigin`,r._preferredOverlayOrigin||a)(`cdkConnectedOverlayPositions`,r._positions)(`cdkConnectedOverlayWidth`,r._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,r._popoverLocation)}},dependencies:[zt$1,ci],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2})}return t})();var Fs=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵdir=Uo({type:t,selectors:[[`mat-select-trigger`]],features:[JT([{provide:Pn,useExisting:t}])]})}return t})();var Bs=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=ra$1({type:t});static ɵinj=io({imports:[di,He,be$1,Vt$1,st,He]})}return t})();var oa=`_LOCKERS_`;var sa=`_LOCKER_BANKS_`;var ca=`_LOCKERS_`;var Vt=null;var Wt=null;var jt=null;var Ht=null;var Pe=null;var _t=new Map;async function Ln(){return Pe||(Pe=Lu({hidden:!0,limit:500}).then(t=>t.data).catch(()=>[])),Pe}async function da(t){return _t.has(t)||_t.set(t,Ru({category_id:t,limit:500}).then(i=>i.data).catch(()=>[])),_t.get(t)}async function la(t){let i=pt(await Ln(),t);if(i||(Pe=null,i=pt(await Ln(),t),i))return i;let e=await En({name:t,hidden:!0});return Pe=null,e}async function ma(t,i){let e=pt(await da(t),i);if(e)return e;let n=await On({name:i,brand:`PlaceOS`,category_id:t});return _t.delete(t),n}async function zn(t){return(await ma((await la(oa)).id,t)).id}function ua(){return Vt?Promise.resolve(Vt):(Wt||(Wt=zn(sa).then(t=>(Vt=t,t))),Wt)}function pa(){return jt?Promise.resolve(jt):(Ht||(Ht=zn(ca).then(t=>(jt=t,t))),Ht)}async function qn(t){if(!t?.length)return[];let i=await ua();return Ih(await Promise.all(t.map(n=>Eu({zone_id:n,type_id:i,limit:500}).then(r=>r.data))))}async function Fn(t){if(!t?.length)return[];let i=await pa();return Ih(await Promise.all(t.map(n=>Eu({zone_id:n,type_id:i,limit:500}).then(r=>r.data))))}function _a(t,i){if(t&1&&(Hs(0,`main`,2),Am(1,`icon`,5)(2,`p`,6),ql()),t&2){let e=uT();Cw(),xm(`icon`,e.icon()),Cw(),xm(`innerHTML`,e.content(),xI)}}function ha(t,i){if(t&1&&(Hs(0,`main`,3)(1,`div`,7),Am(2,`mat-spinner`,8),Hs(3,`p`),UT(4),ql()()()),t&2){let e=uT();Cw(4),iy(e.loading())}}function fa(t,i){if(t&1){let e=rT();Hs(0,`footer`,4)(1,`button`,9),UT(2),c_(3,`translate`),ql(),Hs(4,`button`,10),Bm(`click`,function(){sp(e);return ap(uT().onConfirm())}),UT(5),c_(6,`translate`),ql()()}if(t&2){let e=uT();Cw(2),Xl(` `,l_(3,2,e.cancel_text()),` `),Cw(3),Xl(` `,l_(6,4,e.confirm_text()),` `)}}var ga={height:`auto`};async function sc(t,i){let e=i.open(ya,m(l({},ga),{data:t}));return m(l({},await Promise.race([e.componentInstance.event.pipe(Df(n=>n.reason===`done`)).toPromise(),e.afterClosed().toPromise()])),{loading:n=>e.componentInstance.loading?.set(n),close:()=>e.close()})}var ya=(()=>{class t extends Y{constructor(){super(),this._dialog_ref=E(T),this._data=E($e$1),this.loading=ut$1(``),this.event=new Ct,this.title=ut$1(this._data.title||`COMMON.CONFIRM`),this.content=ut$1(this._data.content||`Are you sure?`),this.confirm_text=ut$1(this._data.confirm_text||`COMMON.ACCEPT`),this.cancel_text=ut$1(this._data.cancel_text||`COMMON.CANCEL`),this.icon=ut$1(this._data.icon||{class:`material-symbols-rounded`,content:`done`}),this.disableClose=()=>this._dialog_ref.disableClose=!0,this.enableClose=()=>this._dialog_ref.disableClose=!1}ngOnInit(){this._data.close_delay&&this.timeout(`close`,()=>this._dialog_ref.close(),this._data.close_delay)}onConfirm(){this.event.emit({reason:`done`})}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=KC({type:t,selectors:[[`confirm-modal`]],features:[ym],decls:6,vars:3,consts:[[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`h-14`,`w-[calc(100%-1rem)]`,`min-w-[20rem]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[1,`flex`,`w-md`,`max-w-[85vw]`,`flex-col`,`items-center`,`space-y-4`,`p-4`,`sm:h-auto`],[`loading`,``],[1,`bg-base-200`,`sticky`,`bottom-0`,`m-2`,`flex`,`items-center`,`justify-center`,`space-x-2`,`rounded-sm`,`border-none`,`p-2`],[1,`text-5xl`,3,`icon`],[`content`,``,1,`text-center`,3,`innerHTML`],[1,`flex`,`h-48`,`w-full`,`flex-col`,`items-center`,`justify-center`,`space-y-4`],[`diameter`,`32`],[`btn`,``,`matRipple`,``,`mat-dialog-close`,``,1,`inverse`,`bg-base-100`,`flex-1`],[`btn`,``,`matRipple`,``,`name`,`accept`,1,`flex-1`,3,`click`]],template:function(n,r){n&1&&(Hs(0,`header`,0)(1,`h2`,1),UT(2),ql()(),Wb(3,_a,3,2,`main`,2)(4,ha,5,1,`main`,3),Wb(5,fa,7,6,`footer`,4)),n&2&&(Cw(2),iy(r.title()),Cw(),qb(r.loading()?4:3),Cw(2),qb(r.loading()?-1:5))},dependencies:[yn,gn,at,Mt,yt,Ht$2,Bt$1,f],encapsulation:2})}}return t})();var Bn=10;var Un=1;var ba=.05;var Gn=16;var Vn=4;var Wn=2;var jn=8192;function Hn(){if(typeof window>`u`||!window.matchMedia)return!1;let t=window.matchMedia(`(pointer: coarse)`).matches,i=window.matchMedia(`(max-width: 1024px)`).matches;return t&&i}function va(t){return t.replace(/[!"#$%&'()*+,.\/;<=>?@[\\\]^`{|}~]/g,`\\$&`).split(` `).map(e=>e.replace(/^\\/,``)).join(` `)}function wa(t){let i=0,e=0,n=0,r=0,a=t.getAttribute(`viewBox`);if(a){let o=a.split(/[\s,]+/).map(parseFloat);o.length>=4&&(i=o[0]||0,e=o[1]||0,n=o[2],r=o[3])}if(!n||!r){let o=t.getAttribute(`width`),c=t.getAttribute(`height`);n=o?parseFloat(o):0,r=c?parseFloat(c):0}if(!n||!r)try{let o=t.getBBox();i=o.x,e=o.y,n=o.width,r=o.height}catch{}return{x:i,y:e,width:n||1,height:r||1}}function xa(t,i){let e=t.getBBox(),n=i&&t.getScreenCTM?.();if(!n)return e;let r=i.multiply(n),a=[{x:e.x,y:e.y},{x:e.x+e.width,y:e.y},{x:e.x,y:e.y+e.height},{x:e.x+e.width,y:e.y+e.height}].map(s=>({x:r.a*s.x+r.c*s.y+r.e,y:r.b*s.x+r.d*s.y+r.f})),o=Math.min(...a.map(s=>s.x)),c=Math.min(...a.map(s=>s.y));return{x:o,y:c,width:Math.max(...a.map(s=>s.x))-o,height:Math.max(...a.map(s=>s.y))-c}}function ka(t){let i=new Map,e=document.createElement(`div`);e.style.position=`absolute`,e.style.visibility=`hidden`,e.style.pointerEvents=`none`,e.style.left=`-9999px`,e.style.top=`-9999px`,e.innerHTML=t,document.body.appendChild(e);let n=e.querySelector(`svg`);if(!n)return document.body.removeChild(e),{bounds:i,aspect_ratio:1};let{x:r,y:a,width:o,height:c}=wa(n),s=o/c,d=n.getScreenCTM?.(),l=d?d.inverse():null;return n.querySelectorAll(`[id]`).forEach(p=>{let g=p.getAttribute(`id`);if(g&&typeof p.getBBox==`function`)try{let F=xa(p,l);i.set(g,{x:(F.x-r)/o,y:(F.y-a)/c,w:F.width/o,h:F.height/c})}catch{}}),document.body.removeChild(e),{bounds:i,aspect_ratio:s}}var Kt=class{constructor(){this.store=new Map}get(i){if(!this.store.has(i)){let e=this._load(i);e.catch(()=>this.store.delete(i)),this.store.set(i,e)}return this.store.get(i)}async _load(i){for(;!be();)await new Promise(d=>setTimeout(d,300));let e={},n=Q(),r=new URL(i,location.origin).origin===location.origin;n&&r&&(Ch()?Bt(`/`):e.headers=n===`x-api-key`?{"x-api-key":Qt()}:{Authorization:`Bearer ${n}`});let a=await fetch(i,e);if(!a.ok)throw new Error(`Failed to load map`);let o=await a.text(),{bounds:c,aspect_ratio:s}=ka(o);return{raw_data:o,element_bounds:c,aspect_ratio:s}}};var Qn=new Kt;function Yn(t){return Qn.get(t)}var Kn=class{constructor(i){this.map_image=null,this.styles_string=``,this.center={x:.5,y:.5},this.zoom=1,this.fixed_resolution_megapixels=0,this.disable_zoom=!1,this.disable_pan=!1,this.onViewChange=null,this.debug=!1,this.debug_info={pointer:null,hover_id:``,highlight_id:``,last_draw_ms:0,draws_last_second:0},this._map_path=``,this._image_generation=0,this._texture_width=0,this._texture_height=0,this._image_frame_id=null,this._draw_frame_id=null,this._notify_frame_id=null,this._debug_draw_count=0,this._debug_count_start=0,this._events=new Map,this._resize_observer=null,this._pointers=new Map,this._is_panning=!1,this._pinch_distance=null,this._pan_start_time=null,this._pan_exceeded_threshold=!1,this._overlay_instances=[],this._actions=[],this._action_event_handlers=new Map,this._action_pointerdown_pos=null,this._action_last_triggered=new Map,this.container=i,this.id=`m_view-${Oh(8,`0123456789ABCDEF`)}`,this.container.innerHTML=``,this.container.style.overflow=`hidden`,this.container.style.touchAction=`none`,this.canvas=document.createElement(`canvas`),this.canvas.style.cssText=`position: absolute; inset: 0; pointer-events: none;`,this._ctx=this.canvas.getContext(`2d`),this.container.appendChild(this.canvas),this.overlays=document.createElement(`div`),this.overlays.id=`${this.id}-overlays`,this.overlays.style.cssText=`position: absolute; inset: 0; z-index: 0; pointer-events: none;`,this.container.appendChild(this.overlays),this._resize_observer=new ResizeObserver(()=>this._onResize()),this._resize_observer.observe(this.container),this._events.set(`wheel`,e=>this._onWheel(e)),this.container.addEventListener(`wheel`,this._events.get(`wheel`),{passive:!1}),this._events.set(`pointerdown`,e=>this._onPointerDown(e)),this._events.set(`pointermove`,e=>this._onPointerMove(e)),this._events.set(`pointerup`,e=>this._onPointerUp(e)),this.container.addEventListener(`pointerdown`,this._events.get(`pointerdown`)),window.addEventListener(`pointermove`,this._events.get(`pointermove`)),window.addEventListener(`pointerup`,this._events.get(`pointerup`)),window.addEventListener(`pointercancel`,this._events.get(`pointerup`))}async setMap(i){this._map_path=i;let e=await Qn.get(i);this._map_path===i&&(this.map=e,this._renderMapImage())}setCenter(i){let e=this._clampCenter(i);e.x===this.center.x&&e.y===this.center.y||(this.center=e,this._renderMap())}setZoom(i){i=Math.max(Un,Math.min(Bn,i)),i!==this.zoom&&(this.zoom=i,this._renderMap())}setFixedResolution(i){let e=i>0?i:0;this.fixed_resolution_megapixels!==e&&(this.fixed_resolution_megapixels=e,this.disable_zoom&&this._renderMapImage())}setOptions(i){let e=this.disable_zoom;this.disable_zoom=!!i?.disable_zoom,this.disable_pan=!!i?.disable_pan,e!==this.disable_zoom&&this._renderMapImage()}get overlay_count(){return this._overlay_instances.length}get texture_mode(){return this.disable_zoom?this.fixed_resolution_megapixels?`fixed ${this.fixed_resolution_megapixels}MP`:`fixed ${Wn}\xD7 container`:Hn()?`mobile ${Vn}MP`:`desktop ${Gn}MP`}setDebug(i){if(this.debug!==i){if(this.debug=i,i){let e=a=>{this.debug_info.pointer=this._eventToMap(a),this.debug_info.hover_id=this._elementAt(this.debug_info.pointer),this._renderMap()},n=()=>{this.debug_info.pointer=null,this.debug_info.hover_id=``,this._renderMap()},r=a=>{let o=this._eventToMap(a);console.log(`[MAP][DEBUG] Click at { x: ${o.x.toFixed(4)}, y: ${o.y.toFixed(4)} } on "${this._elementAt(o)||`no element`}"`)};this._events.set(`debug_move`,e),this._events.set(`debug_leave`,n),this._events.set(`debug_click`,r),this.container.addEventListener(`pointermove`,e),this.container.addEventListener(`pointerleave`,n),this.container.addEventListener(`click`,r)}else{for(let e of[`debug_move`,`debug_leave`,`debug_click`]){let n=this._events.get(e);if(!n)continue;let r=e===`debug_move`?`pointermove`:e===`debug_leave`?`pointerleave`:`click`;this.container.removeEventListener(r,n),this._events.delete(e)}this.debug_info.pointer=null,this.debug_info.hover_id=``,this.debug_info.highlight_id=``}this._applyOverlayOutlines(),this._renderMap()}}setDebugHighlight(i){this.debug_info.highlight_id!==i&&(this.debug_info.highlight_id=i,this.debug&&this._renderMap())}focusOn(i){let e=this.map?.element_bounds.get(i);e&&(this.setCenter({x:e.x+e.w/2,y:e.y+e.h/2}),this._notifyViewChange())}setOverlays(i){for(let e of this._overlay_instances)e.element.remove();this._overlay_instances=[];for(let e of i){let n=document.createElement(`div`);n.style.cssText=`position: absolute; top: 0; left: 0; display: flex; align-items: center; justify-content: center; transform-origin: center center; pointer-events: none;`,e.z_index!=null&&(n.style.zIndex=`${e.z_index}`),e.hover&&n.classList.add(`map-overlay-hover`),typeof e.contents==`string`?n.innerHTML=e.contents:n.appendChild(e.contents),this.overlays.appendChild(n),this._overlay_instances.push({overlay:e,element:n})}this._applyOverlayOutlines(),this._updateOverlayPositions()}_applyOverlayOutlines(){for(let{element:i}of this._overlay_instances)i.style.outline=this.debug?`1px dashed #f0f`:``}_elementAt(i){let e=``,n=Number.POSITIVE_INFINITY;for(let[r,a]of this.map?.element_bounds||[]){if(i.x<a.x||i.x>a.x+a.w||i.y<a.y||i.y>a.y+a.h)continue;let o=a.w*a.h;o<n&&(e=r,n=o)}return e}setActions(i){for(let[n,r]of this._action_event_handlers)this.container.removeEventListener(n,r);this._action_event_handlers.clear(),this._action_last_triggered.clear(),this._actions=i;let e=new Set(i.flatMap(n=>n.events));for(let n of e){let r=a=>this._handleActionEvent(n,a);this._action_event_handlers.set(n,r),this.container.addEventListener(n,r)}if(!this._events.has(`action_pointerdown`)){let n=r=>{this._action_pointerdown_pos={x:r.clientX,y:r.clientY}};this._events.set(`action_pointerdown`,n),this.container.addEventListener(`pointerdown`,n)}}setStyles(i){let e=``;for(let[n,r]of Object.entries(i))r&&(e+=`svg ${va(n)} { ${r} }
`);e!==this.styles_string&&(this.styles_string=e,this._renderMapImage())}destroy(){this.setDebug(!1),this._resize_observer?.disconnect(),this._resize_observer=null,this.container.removeEventListener(`wheel`,this._events.get(`wheel`)),this.container.removeEventListener(`pointerdown`,this._events.get(`pointerdown`)),window.removeEventListener(`pointermove`,this._events.get(`pointermove`)),window.removeEventListener(`pointerup`,this._events.get(`pointerup`)),window.removeEventListener(`pointercancel`,this._events.get(`pointerup`));for(let[i,e]of this._action_event_handlers)this.container.removeEventListener(i,e);if(this._action_event_handlers.clear(),this._action_last_triggered.clear(),this._actions=[],this._events.has(`action_pointerdown`)){let i=this._events.get(`action_pointerdown`);this.container.removeEventListener(`pointerdown`,i),this._events.delete(`action_pointerdown`)}this._action_pointerdown_pos=null,this._image_generation++,this._map_path=``,this._image_frame_id!==null&&(cancelAnimationFrame(this._image_frame_id),this._image_frame_id=null),this._draw_frame_id!==null&&(cancelAnimationFrame(this._draw_frame_id),this._draw_frame_id=null),this._notify_frame_id!==null&&(cancelAnimationFrame(this._notify_frame_id),this._notify_frame_id=null);for(let i of this._overlay_instances)i.element.remove();this._overlay_instances=[],this.map_image=null,this.container.innerHTML=``}_viewScale(i=this.zoom){let e=this.map?.aspect_ratio||1,n=this.container.clientWidth||1,r=this.container.clientHeight||1,a=Math.min(r,n/e)*(1-ba*2)*i;return{x:a*e,y:a}}_eventToMap(i,e=this.container.getBoundingClientRect()){let n=this._viewScale();return{x:(i.clientX-e.left-e.width/2)/n.x+this.center.x,y:(i.clientY-e.top-e.height/2)/n.y+this.center.y}}_clampCenter(i){return{x:Math.max(0,Math.min(1,i.x)),y:Math.max(0,Math.min(1,i.y))}}_zoomAboutPoint(i,e){let n=this.zoom;if(i=Math.max(Un,Math.min(Bn,i)),i===n)return;let r=this.container.getBoundingClientRect(),a=this._eventToMap({clientX:e.x,clientY:e.y},r),o=this._viewScale(i),c={x:a.x-(e.x-r.left-r.width/2)/o.x,y:a.y-(e.y-r.top-r.height/2)/o.y};this.zoom=i,this.center=this._clampCenter(c),this._renderMap(),this._notifyViewChange()}_onWheel(i){if(i.preventDefault(),this.disable_zoom||!this.map_image)return;let e=i.deltaY>0?.97:1.03;this._zoomAboutPoint(this.zoom*e,{x:i.clientX,y:i.clientY})}_onPointerDown(i){if(this.map_image&&i.button===0){if(this._pointers.set(i.pointerId,{x:i.clientX,y:i.clientY}),this._pointers.size===2){this._is_panning=!1;let[e,n]=[...this._pointers.values()];this._pinch_distance=Math.hypot(n.x-e.x,n.y-e.y);return}this.disable_pan||(this._is_panning=!0,this._pan_start_time=Date.now(),this._pan_exceeded_threshold=!1,this.container.style.cursor=`grabbing`)}}_onPointerMove(i){let e=this._pointers.get(i.pointerId);if(!e)return;if(this._pointers.set(i.pointerId,{x:i.clientX,y:i.clientY}),this._pointers.size===2&&this._pinch_distance){if(this.disable_zoom)return;let[r,a]=[...this._pointers.values()],o=Math.hypot(a.x-r.x,a.y-r.y);o>0&&(this._zoomAboutPoint(this.zoom*(o/this._pinch_distance),{x:(r.x+a.x)/2,y:(r.y+a.y)/2}),this._pinch_distance=o);return}if(!this._is_panning)return;this._pan_start_time&&!this._pan_exceeded_threshold&&Date.now()-this._pan_start_time>200&&(this._pan_exceeded_threshold=!0);let n=this._viewScale();this.center=this._clampCenter({x:this.center.x-(i.clientX-e.x)/n.x,y:this.center.y-(i.clientY-e.y)/n.y}),this._renderMap(),this._notifyViewChange()}_onPointerUp(i){this._pointers.delete(i.pointerId),this._pointers.size<2&&(this._pinch_distance=null),this._is_panning&&this._pointers.size===0&&(this._is_panning=!1,this.container.style.cursor=``)}_onResize(){if(this._renderMap(),this.disable_zoom&&!this.fixed_resolution_megapixels){let{width:i,height:e}=this._textureDimensions();(i!==this._texture_width||e!==this._texture_height)&&this._renderMapImage()}}_targetTexturePixels(){return this.disable_zoom?this.fixed_resolution_megapixels>0?this.fixed_resolution_megapixels*1e6:(this.container.clientWidth||1)*(this.container.clientHeight||1)*Wn:(Hn()?Vn:Gn)*1e6}_textureDimensions(){let i=this.map?.aspect_ratio||1,e=this._targetTexturePixels(),n=Math.sqrt(e/i),r=n*i;return{width:Math.max(1,Math.min(jn,Math.round(r))),height:Math.max(1,Math.min(jn,Math.round(n)))}}_renderMapImage(){this._image_frame_id!==null&&cancelAnimationFrame(this._image_frame_id),this._image_frame_id=requestAnimationFrame(()=>{this._image_frame_id=null,this._doRenderMapImage()})}_doRenderMapImage(){if(!this.map?.raw_data)return;let i=++this._image_generation,n=new DOMParser().parseFromString(this.map.raw_data,`image/svg+xml`),r=n.querySelector(`svg`);if(!r)return;let{width:a,height:o}=this._textureDimensions();if(this._texture_width=a,this._texture_height=o,!r.getAttribute(`viewBox`)){let p=parseFloat(r.getAttribute(`width`)||``),g=parseFloat(r.getAttribute(`height`)||``);p>0&&g>0&&r.setAttribute(`viewBox`,`0 0 ${p} ${g}`)}if(r.getAttribute(`viewBox`)&&(r.setAttribute(`width`,`${a}`),r.setAttribute(`height`,`${o}`)),this.styles_string){let p=n.createElementNS(`http://www.w3.org/2000/svg`,`style`);p.textContent=this.styles_string,r.appendChild(p)}let s=new XMLSerializer().serializeToString(r),d=new Blob([s],{type:`image/svg+xml`}),l=URL.createObjectURL(d),m=new Image;m.onload=()=>{if(URL.revokeObjectURL(l),i!==this._image_generation)return;let p=document.createElement(`canvas`);p.width=a,p.height=o;let g=p.getContext(`2d`);if(!g){console.error(`Failed to get canvas context`);return}g.drawImage(m,0,0,a,o),this.map_image=p,this._renderMap()},m.onerror=()=>{URL.revokeObjectURL(l),console.error(`Failed to load map image`)},m.src=l}_renderMap(){this._draw_frame_id===null&&(this._draw_frame_id=requestAnimationFrame(()=>{this._draw_frame_id=null,this._drawMap()}))}_drawMap(){if(!this.map_image)return;let i=this.debug?performance.now():0,e=this.container.clientWidth||1,n=this.container.clientHeight||1,r=window.devicePixelRatio||1;(this.canvas.width!==Math.round(e*r)||this.canvas.height!==Math.round(n*r))&&(this.canvas.width=Math.round(e*r),this.canvas.height=Math.round(n*r),this.canvas.style.width=`${e}px`,this.canvas.style.height=`${n}px`);let a=this._viewScale(),o=this.center.x-e/2/a.x,c=this.center.y-n/2/a.y,s=Math.max(0,o),d=Math.max(0,c),l=Math.min(1,o+e/a.x),m=Math.min(1,c+n/a.y);if(this._ctx.setTransform(r,0,0,r,0,0),this._ctx.clearRect(0,0,e,n),l>s&&m>d){this._ctx.imageSmoothingEnabled=!0,this._ctx.imageSmoothingQuality=`high`;let p=this.map_image.width,g=this.map_image.height;this._ctx.drawImage(this.map_image,s*p,d*g,(l-s)*p,(m-d)*g,(s-o)*a.x,(d-c)*a.y,(l-s)*a.x,(m-d)*a.y)}if(this.debug){this._drawDebugInfo(a,o,c);let p=performance.now();this.debug_info.last_draw_ms=p-i,this._debug_draw_count++,p-this._debug_count_start>=1e3&&(this.debug_info.draws_last_second=this._debug_draw_count,this._debug_draw_count=0,this._debug_count_start=p)}this._updateOverlayPositions()}_drawDebugInfo(i,e,n){if(!this.map)return;let r=this._ctx,a=this.container.clientWidth||1,o=this.container.clientHeight||1,c=m=>(m-e)*i.x,s=m=>(m-n)*i.y;r.strokeStyle=`#f0f`,r.lineWidth=2,r.strokeRect(c(0),s(0),i.x,i.y),r.strokeStyle=`rgba(0, 200, 255, 0.6)`,r.lineWidth=1;for(let[,m]of this.map.element_bounds){let p=c(m.x),g=s(m.y),F=m.w*i.x,X=m.h*i.y;p+F<0||g+X<0||p>a||g>o||r.strokeRect(p,g,F,X)}let d=this.debug_info.highlight_id||this.debug_info.hover_id,l=d?this.map.element_bounds.get(d):null;if(l){let m=c(l.x),p=s(l.y);r.fillStyle=`rgba(255, 0, 255, 0.25)`,r.fillRect(m,p,l.w*i.x,l.h*i.y);let g=`#${d}`;r.font=`12px monospace`,r.fillStyle=`rgba(0, 0, 0, 0.7)`,r.fillRect(m,p-16,r.measureText(g).width+8,16),r.fillStyle=`#fff`,r.fillText(g,m+4,p-4)}r.strokeStyle=`#f00`,r.lineWidth=1,r.beginPath(),r.moveTo(a/2-8,o/2),r.lineTo(a/2+8,o/2),r.moveTo(a/2,o/2-8),r.lineTo(a/2,o/2+8),r.stroke()}_updateOverlayPositions(){if(!this.map?.element_bounds)return;let i=this.container.clientWidth||1,e=this.container.clientHeight||1,n=this._viewScale(),r=s=>({x:(s.x-this.center.x)*n.x+i/2,y:(s.y-this.center.y)*n.y+e/2}),a=(s,d)=>{s.last_display!==d&&(s.last_display=d,s.element.style.display=d)},o=(s,d)=>{s.last_transform!==d&&(s.last_transform=d,s.element.style.transform=d)},c=(s,d,l)=>{let m=`${d} ${l}`;s.last_size!==m&&(s.last_size=m,s.element.style.width=d,s.element.style.height=l)};for(let s of this._overlay_instances){let{overlay:d}=s;if(d.min_zoom&&this.zoom<d.min_zoom){a(s,`none`);continue}let l$3;if(typeof d.ref==`string`){if(l$3=this.map.element_bounds.get(d.ref),!l$3){a(s,`none`);continue}}else l$3=l({w:0,h:0},d.ref);if(a(s,``),d.type===`box`&&l$3.w>0&&l$3.h>0){let m=r({x:l$3.x,y:l$3.y});o(s,`translate(${m.x}px, ${m.y}px)`),c(s,`${l$3.w*n.x}px`,`${l$3.h*n.y}px`)}else{let m=r({x:l$3.x+l$3.w/2,y:l$3.y+l$3.h/2});c(s,``,``),o(s,d.scale_with_zoom?`translate(${m.x}px, ${m.y}px) translate(-50%, -50%) scale(${this.zoom})`:`translate(${m.x}px, ${m.y}px) translate(-50%, -50%)`)}}}_handleActionEvent(i,e){if(!this.map_image||!this.map?.element_bounds||this._pan_exceeded_threshold)return;if(i===`click`&&this._action_pointerdown_pos){let d=e.clientX-this._action_pointerdown_pos.x,l=e.clientY-this._action_pointerdown_pos.y;if(Math.hypot(d,l)>5)return}let n=this._eventToMap(e);if(n.x<0||n.x>1||n.y<0||n.y>1)return;let r=null,a=Number.POSITIVE_INFINITY;for(let d of this._actions){if(!d.events.includes(i))continue;if(d.ref===`*`){r||(r=d);continue}let l=this.map.element_bounds.get(d.ref);if(!l||n.x<l.x||n.x>l.x+l.w||n.y<l.y||n.y>l.y+l.h)continue;let m=l.w*l.h;(!r||r.ref===`*`||(d.priority||0)>(r.priority||0)||(d.priority||0)===(r.priority||0)&&m<a)&&(r=d,a=m)}if(!r)return;let o=Date.now(),c=`${r.ref}:${i}`;o-(this._action_last_triggered.get(c)||0)<300||(this._action_last_triggered.set(c,o),r.callback(n))}_notifyViewChange(){!this.onViewChange||this._notify_frame_id!==null||(this._notify_frame_id=requestAnimationFrame(()=>{this._notify_frame_id=null,this.onViewChange?.({zoom:this.zoom,center:l({},this.center)})}))}};var Ca=[`input`];var Sa=[`formField`];var Ma=[`*`];var ht=class{source;value;constructor(i,e){this.source=i,this.value=e}};var Ia={provide:I,useExisting:zi(()=>Oa),multi:!0};var Xn=new b(`MatRadioGroup`);var Ea=new b(`mat-radio-default-options`,{providedIn:`root`,factory:()=>({color:`accent`,disabledInteractive:!1})});var Oa=(()=>{class t{_changeDetector=E(yd);_value=null;_name=E(Y$1).getId(`mat-radio-group-`);_selected=null;_isInitialized=!1;_labelPosition=`after`;_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new Ct;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e===`before`?`before`:`after`,this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(n=>{n.checked=this.value===n.value,n.checked&&(this._selected=n)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new ht(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static ɵfac=function(n){return new(n||t)};static ɵdir=Uo({type:t,selectors:[[`mat-radio-group`]],contentQueries:function(n,r,a){if(n&1&&Um(a,Jn,5),n&2){let o;hT(o=gT())&&(r._radios=o)}},hostAttrs:[`role`,`radiogroup`,1,`mat-mdc-radio-group`],inputs:{color:`color`,name:`name`,labelPosition:`labelPosition`,value:`value`,selected:`selected`,disabled:[2,`disabled`,`disabled`,Q_],required:[2,`required`,`required`,Q_],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Q_]},outputs:{change:`change`},exportAs:[`matRadioGroup`],features:[JT([Ia,{provide:Xn,useExisting:t}])]})}return t})();var Jn=(()=>{class t{_elementRef=E(tn);_changeDetector=E(yd);_focusMonitor=E(Ye);_radioDispatcher=E(Ut);_defaultOptions=E(Ea,{optional:!0});_ngZone=E(De$1);_renderer=E(Sr$1);_uniqueId=E(Y$1).getId(`mat-radio-`);_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||`after`}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||`accent`}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new Ct;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=De$2();_injector=E(fe$1);constructor(){E(A).load(Rt);let e=E(Xn,{optional:!0}),n=E(new wy(`tabindex`),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,n&&(this.tabIndex=K_(n,0))}focus(e,n){n?this._focusMonitor.focusVia(this._inputElement,n,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,n)=>{e!==this.id&&n===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,`click`,this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new ht(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let n=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),n&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,n;if(!e||!e.selected||this.disabled?n=this.tabIndex:n=e.selected===this?this.tabIndex:-1,n!==this._previousTabIndex){let r=this._inputElement?.nativeElement;r&&(r.setAttribute(`tabindex`,n+``),this._previousTabIndex=n,XI(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===r&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===r&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static ɵfac=function(n){return new(n||t)};static ɵcmp=KC({type:t,selectors:[[`mat-radio-button`]],viewQuery:function(n,r){if(n&1&&$m(Ca,5)(Sa,7,tn),n&2){let a;hT(a=gT())&&(r._inputElement=a.first),hT(a=gT())&&(r._rippleTrigger=a.first)}},hostAttrs:[1,`mat-mdc-radio-button`],hostVars:19,hostBindings:function(n,r){n&1&&Bm(`focus`,function(){return r._inputElement.nativeElement.focus()}),n&2&&(Nm(`id`,r.id)(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null),Km(`mat-primary`,r.color===`primary`)(`mat-accent`,r.color===`accent`)(`mat-warn`,r.color===`warn`)(`mat-mdc-radio-checked`,r.checked)(`mat-mdc-radio-disabled`,r.disabled)(`mat-mdc-radio-disabled-interactive`,r.disabledInteractive)(`_mat-animation-noopable`,r._noopAnimations))},inputs:{id:`id`,name:`name`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],disableRipple:[2,`disableRipple`,`disableRipple`,Q_],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:K_(e)],checked:[2,`checked`,`checked`,Q_],value:`value`,labelPosition:`labelPosition`,disabled:[2,`disabled`,`disabled`,Q_],required:[2,`required`,`required`,Q_],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Q_]},outputs:{change:`change`},exportAs:[`matRadioButton`],ngContentSelectors:Ma,decls:13,vars:17,consts:[[`formField`,``],[`input`,``],[`mat-internal-form-field`,``,3,`labelPosition`,`for`],[1,`mdc-radio`],[1,`mat-mdc-radio-touch-target`],[`type`,`radio`,`aria-invalid`,`false`,1,`mdc-radio__native-control`,3,`change`,`id`,`checked`,`disabled`,`required`],[`aria-hidden`,`true`,1,`mdc-radio__background`],[1,`mdc-radio__outer-circle`],[1,`mdc-radio__inner-circle`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-radio-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-ripple-element`,`mat-radio-persistent-ripple`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(n,r){n&1&&(dT(),Hs(0,`label`,2,0)(2,`span`,3),Am(3,`span`,4),Hs(4,`input`,5,1),Bm(`change`,function(o){return r._onInputInteraction(o)}),ql(),Hs(6,`span`,6),Am(7,`span`,7)(8,`span`,8),ql(),Hs(9,`span`,9),Am(10,`span`,10),ql()(),Hs(11,`span`,11),fT(12),ql()()),n&2&&(xm(`labelPosition`,r.labelPosition)(`for`,r.inputId),Cw(2),Km(`mdc-radio--disabled`,r.disabled),Cw(2),xm(`id`,r.inputId)(`checked`,r.checked)(`disabled`,r.disabled&&!r.disabledInteractive)(`required`,r.required),Nm(`name`,r.name)(`value`,r.value)(`aria-label`,r.ariaLabel)(`aria-labelledby`,r.ariaLabelledby)(`aria-describedby`,r.ariaDescribedby)(`aria-disabled`,r.disabled&&r.disabledInteractive?`true`:null),Cw(5),xm(`matRippleTrigger`,r._rippleTrigger.nativeElement)(`matRippleDisabled`,r._isRippleDisabled())(`matRippleCentered`,!0))},dependencies:[yt,Ue],styles:[`.mat-mdc-radio-button {
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
`],encapsulation:2})}return t})();var Tc=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=ra$1({type:t});static ɵinj=io({imports:[Mt,Jn,be$1]})}return t})();function Le(t,i){if(!t)return i;try{return JSON.parse(t)}catch{return i}}function Uc(t){let i=!!t?.extension_data?.requires_manual_approval;return t?.approved!==!1?`pending`:i?`approval_required`:t.process_state===`wait_list`?`waitlist`:`pending`}function Aa(t){let i=t.other_data||{};return{id:t.id,map_id:t.map_id||i.map_id||``,level_id:t.zone_id,name:t.identifier||i.name||``,height:+(i.height||3),notes:t.notes||``,zones:t.zones||[t.zone_id].filter(e=>e),tags:t.tags||Le(i.tags,[]),images:Le(i.images,[])}}function Ra(t,i){let e=t.other_data||{},n=t.parent_id||``,r=i.find(a=>a.id===n);return{id:t.id,bank_id:n,map_id:t.map_id||e.map_id,assigned_to:t.assigned_to||e.assigned_to,assigned_name:t.assigned_name||e.assigned_name,name:t.identifier||e.name||``,accessible:e.accessible===`true`,bookable:t.bookable!==!1,position:Le(e.position,[0,0]),size:Le(e.size,[1,1]),bank:r,zone:r?.zone,features:t.features||Le(e.features,[])}}function Na(t,i){if(!i){t.update(e=>m(l({},e),{asset_id:``}));return}t.update(e=>m(l({},e),{asset_id:i.id,asset_name:i.name,name:i.display_name||i.name||i.id,map_id:i.map_id||i.id,description:i.name,zones:i.zone?[i.zone?.parent_id,i.zone?.id]:[],booking_asset:i}))}var Da=t=>`${(t.extension_data?.group_members||[]).find(n=>n?.email===t.asset_id)?.name||``}`.trim()||``;var Ta=t=>`${((t.attendees||[]).find(n=>n?.email===t.asset_id)||t.attendees?.[0])?.name||``}`.trim()||``;var $a=t=>{if(!t.includes(`@`))return t;let[i]=t.split(`@`),e=i.replace(/[._-]+/g,` `).replace(/\s+/g,` `).trim();return e?e.replace(/\b\w/g,n=>n.toUpperCase()):t};var Gc=t=>{let i=`${t?.asset_id||``}`.trim(),e=Da(t);if(e)return e;let n=Ta(t);if(n)return n;let r=`${t?.extension_data?.visitor_name||t?.asset_name||``}`.trim(),a=[`${t?.title||``}`.trim().toLowerCase(),`${t?.description||``}`.trim().toLowerCase()].filter(o=>!!o);return r&&r.toLowerCase()!==i.toLowerCase()&&!a.includes(r.toLowerCase())?r:$a(i||r||`Visitor`)};function Pa(t=new eo){t=t||new eo;let i=t.extension_data||{};return[...i.attachments||[],...i.p2_document_names||[]].filter(e=>!!e)}function La(t=new eo){return t?.user_email?new xe({id:t.user_id||``,email:t.user_email,name:t.user_name||t.user_email}):N()}function Zn(t=new eo){let i=t.extension_data||{},e=t.booking_type===`visitor`?i.visitor_name||t.asset_name||``:t.asset_name||t.description;return{id:t.id||``,parent_id:t.parent_id||``,event_id:t.event_id||``,ical_uid:i.ical_uid||``,date:t.date??0,date_end:t.date_end??0,all_day:t.all_day??!1,name:i.name||t.asset_name||``,duration:t.duration??0,booking_type:t.booking_type,zones:t.zones||[],title:t.title||``,description:t.description||``,booking_asset:{},resources:[],company:i.company||``,asset_id:t.asset_id||``,asset_name:e||``,assets:i.assets||[],attendees:t.attendees||[],map_id:i.map_id||``,featured:i.featured||!1,user:La(t),user_id:t.user_id||``,group:t.group??{},user_email:t.user_email||``,user_name:t.user_name||``,timezone:t.timezone||``,booked_by:N(),booked_by_id:t.booked_by_id||``,booked_by_email:t.booked_by_email||``,secondary_resource:i.other_asset_type||i.secondary_resource||{},location:i.location||``,attendance_type:i.attendance_type||`ANY`,phone:i.phone||``,permission:t.permission||`PRIVATE`,images:t.images||[],tags:t?.tags||[],plate_number:i.plate_number||``,vehicle_type:i.vehicle_type||`car`,request_type:i.request_type||`standard`,requires_manual_approval:i.requires_manual_approval??!1,space_restrictions:i.space_restrictions??!1,extra_space_restrictions:i.extra_space_restrictions??[],approver_group:i.approver_group||``,prefer_booked_location_first:i.prefer_booked_location_first??!1,pass_number:i.pass_number||``,international:i.international??!1,recurrence_custom:i.recurrence_custom??!1,recurrence_type:t.recurrence_type||`none`,recurrence_days:t.recurrence_days??0,recurrence_nth_of_month:t.recurrence_nth_of_month??0,recurrence_interval:t.recurrence_interval??0,recurrence_end:t.recurrence_end??0,recurrence_instances:i.recurrence_instances??0,notes:i.notes||``,attachments:Pa(t),update_master:!1,self_registered:!1,is_assgined:!1}}function Vc(t=new eo,i){let e=t.state===`started`,n=ut$1(Zn(t));Wh(n,Zn(new eo));let r=To(`parking.require_plate_number`,!1),a=To(`parking.require_space_restriction`,!1),o=mr$1(n,s=>{ra$2(s.date),ra$2(s.asset_id),ia$1(s.asset_id,{when:({valueOf:d})=>d(s.booking_type)===`visitor`}),ra$2(s.plate_number,{when:({valueOf:d})=>d(s.booking_type)===`parking`&&r()}),fi(s.plate_number,({value:d,valueOf:l})=>l(s.booking_type)===`parking`&&r()&&!`${d()||``}`.trim()?{kind:`required`}:void 0),fi(s.space_restrictions,({value:d,valueOf:l})=>l(s.booking_type)===`parking`&&a()&&!d()?{kind:`required`}:void 0),fi(s.duration,({value:d,valueOf:l})=>{let m=l(s.date);return d()<=0?{kind:`duration`}:m&&te(Date.now(),ut$2(m,d()))?{kind:`duration`}:void 0}),na$1(s.date,({value:d})=>e?!0:d()<Date.now()&&!!oe(n).id)},{injector:i});Yh(n,s=>s.user,s=>{s&&n.update(d=>m(l({},d),{user:s,user_id:s?.id??``,user_email:s?.email??``,user_name:s?.name??``}))},i),Yh(n,s=>s.resources,s=>{oe(n).booking_type!==`visitor`&&Na(n,(s||[])[0])},i),Rs.subscribe(s=>{s&&n.update(d=>m(l({},d),{booked_by:s,booked_by_id:s?.id,booked_by_email:s?.email}))});let c=Hh(n,{},i);return o._time_sync=c,n._time_sync=c,{model:n,form:o,time_sync:c}}async function Wc(t,i,e=[]){let n=await Yn(t),r=s=>{let d=n.element_bounds.get(s);return d?{x:d.x+d.w/2,y:d.y+d.h/2}:null},a=(typeof i==`string`?r(i):i)||{x:.5,y:.5},o=10,c=``;for(let s of e){let{x:d,y:l}=r(s)||{x:2,y:2},m=Math.sqrt((d-a.x)*(d-a.x)+(l-a.y)*(l-a.y));m<o&&(o=m,c=s)}return c}function jc(t){let i=t.date||t.event_start*1e3,e=t.duration??(t.event_end-t.event_start)/60,n=t.recurrence?.pattern?hd(dd(t.recurrence),i):{},r=[t.system,...t.resources||[]].filter(c=>!!c?.id),{system_id:a}=t,o=Mh([...r.map(c=>c.id),a].filter(c=>!!c));return new eo(m(l({id:t.id,user_id:t.organiser?.id||t.host,user_email:t.host,user_name:t.organiser?.name||t.host,title:t.title||void 0,date:i,duration:e,all_day:t.all_day,timezone:t.timezone,asset_id:o[0],asset_ids:o,asset_name:t.system?.display_name||t.system?.name,zones:Mh(r.flatMap(c=>c.zones||[])),booking_type:`room`,approved:t.status===`approved`},n),{extension_data:l({},t)}))}async function za(t,i){if(!i)return[];let n=(await qn([i]).catch(()=>[])).map(Aa);for(let r of n)r.zone=t.levelWithID(r.zones||[]);return n}async function qa(t,i,e){if(!i)return[];let r=(await Fn([i]).catch(()=>[])).map(a=>Ra(a,e));for(let a of e){let o=m(l({},a),{lockers:[]});a.lockers=r.filter(c=>c.bank_id===a.id).map(c=>m(l({},c),{bank:o}))}return r.filter(a=>a.bank)}async function Hc(t,i){return qa(t,i,await za(t,i))}export{qn as $,Sn as A,ao as B,On as C,Ra as D,Qo as E,Wc as F,is as G,fo as H,Xo as I,mo as J,jc as K,Ya as L,Tc as M,Uc as N,Re as O,Vc as P,qa as Q,Yo as R,Oa as S,Pa as T,gn as U,co as V,go as W,oo as X,mr as Y,pt as Z,Kn as _,Cn as a,yn as at,Mo as b,Dr as c,Fn as d,qs as et,Fs as f,Jn as g,Io as h,Bs as i,ts as it,So as j,Ro as k,En as l,Hc as m,Ao as n,sc as nt,De as o,yo as ot,Gc as p,lo as q,Br as r,so as rt,Do as s,za as st,Aa as t,ro as tt,Eo as u,La as v,Oo as w,No as x,Mn as y,Zn as z};