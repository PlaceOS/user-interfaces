import{n as m,r as n,t as l}from"./chunk-BwCtja5l.js";import{$r as uT,A as Gb,An as dT,At as Sr$1,Bn as et,Br as re,C as ED,Cr as na$1,Dt as SS,En as c_,Fn as eT,G as Jt,Gr as sp,Hn as fT,Ht as Vs,It as Um,Kr as sy,Kt as Wl,Lt as Uo$1,Mn as de$1,Mr as ps,Mt as Te,Nr as q_,Or as oe,Pr as qb,Qt as Xt,Rt as Us,S as E,St as Qm,Tn as cT,Ur as sT,W as Jn$1,X as Km,Xn as hT,Y as Kl,ai as vp,b as Dm,bn as b,bt as QI,ci as wt,cr as kS,ct as Nm,d as Am,en as YC,f as BT,g as Bv,hn as a_,hr as lt,in as Zb,ir as iy,it as MI,j as Gi,kr as pH,li as wy,lr as km,m as Bm,mi as xm,n as $b,nr as i_,pr as l_,r as $m,rn as Z_,rr as io$1,rt as Lv,s as A,sr as jv,st as NT,vi as ye,vn as ap,vr as md,vt as Pv,wi as zr,x as Dp,xt as QT,y as Df,yi as ym,z as Iw}from"./chunk--InGYtT4.js";import{An as zh,At as Zu,B as Kt,C as H,Dt as Yu,F as Jr$1,It as be,Jt as ha$1,M as J,N as Je,Nn as zu,Qt as jn$1,R as Kd,S as Gu,Sn as vt,Vt as dt,Xt as ja$1,en as ju,fn as pt,ft as Uh,hn as rs$1,i as Ah,k as Hu,kn as za$1,kt as Zr$1,l as Bu,ln as ot,q as Nh,r as $t$1,rt as Qt,t as $,tt as Q,un as ph,w as Ha$1,x as Gr$1,yt as Xe,zt as ct}from"./chunk-XBOFPcii.js";import{i as at,n as Y}from"./chunk-ClEPEZVa.js";import{$t as so$1,A as Oe,E as Mf,K as Vl,Kt as pr$1,L as Sc,M as Qe,U,Z as Y$1,Zt as rt,dn as xc,gn as ze,jt as ke,k as Nr,kt as jn$2,ln as wo,lt as be$1,p as F,pn as ye$1,r as Af,s as D,sn as w_,t as $$1,un as wr}from"./chunk-Dy7RB36_.js";import{t as Et}from"./chunk-B3PgKgrs.js";import{_ as be$2,f as $$2,g as V,m as De,n as a,r as d,t as f}from"./main.js";import{E as z,c as Pe,g as b$1,m as Ye,p as Y$2,t as A$1,w as ut}from"./chunk-B2ggC-Ch.js";import{E as zt,n as A$2,o as Ht,p as Vt,s as It,v as ci$1,y as di$1}from"./chunk-mDw-dW8T.js";import{c as yt,r as Rt$1,t as Mt}from"./chunk-B_k6vwtF.js";import{a as Te$1,c as ce$1,i as Oe$1,l as le,n as He$1,o as Ue$1,r as J$1,s as X,u as me}from"./chunk-Co3Pum90.js";import{n as Bt,r as Ht$1,s as T,t as $e}from"./chunk-D_cJUKMT.js";import{a as de$2,i as ae,o as le$1}from"./chunk-07FyTpVr.js";var $r=[`determinateSpinner`];function Lr(t,i){if(t&1&&(vp(),Vs(0,`svg`,11),Am(1,`circle`,12),Wl()),t&2){let e=sT();Nm(`viewBox`,e._viewBox()),Iw(),Qm(`stroke-dasharray`,e._strokeCircumference(),`px`)(`stroke-dashoffset`,e._strokeCircumference()/2,`px`)(`stroke-width`,e._circleStrokeWidth(),`%`),Nm(`r`,e._circleRadius())}}var Pr=new b(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:zn})});var zn=100;var Fr=10;var Un=(()=>{class t{_elementRef=E(Jt);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let e=E(Pr),n=$$2(),r=this._elementRef.nativeElement;this._noopAnimations=n===`di-disabled`&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&n===`reduced-motion`&&r.classList.add(`mat-progress-spinner-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=zn;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Fr)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(n){return new(n||t)};static ɵcmp=YC({type:t,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(n,r){if(n&1&&$m($r,5),n&2){let a;dT(a=fT())&&(r._determinateCircle=a.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(n,r){n&2&&(Nm(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,r.mode===`determinate`?r.value:null)(`mode`,r.mode),NT(`mat-`+r.color),Qm(`width`,r.diameter,`px`)(`height`,r.diameter,`px`)(`--%NS%mat-progress-spinner-size`,r.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,r.diameter+`px`),Km(`_mat-animation-noopable`,r._noopAnimations)(`mdc-circular-progress--indeterminate`,r.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,Z_],diameter:[2,`diameter`,`diameter`,Z_],strokeWidth:[2,`strokeWidth`,`strokeWidth`,Z_]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(n,r){if(n&1&&(Dm(0,Lr,2,8,`ng-template`,null,0,l_),Vs(2,`div`,2,1),vp(),Vs(4,`svg`,3),Am(5,`circle`,4),Wl()(),Dp(),Vs(6,`div`,5)(7,`div`,6)(8,`div`,7),km(9,8),Wl(),Vs(10,`div`,9),km(11,8),Wl(),Vs(12,`div`,10),km(13,8),Wl()()()),n&2){let a=hT(1);Iw(4),Nm(`viewBox`,r._viewBox()),Iw(),Qm(`stroke-dasharray`,r._strokeCircumference(),`px`)(`stroke-dashoffset`,r._strokeDashOffset(),`px`)(`stroke-width`,r._circleStrokeWidth(),`%`),Nm(`r`,r._circleRadius()),Iw(4),xm(`ngTemplateOutlet`,a),Iw(2),xm(`ngTemplateOutlet`,a),Iw(2),xm(`ngTemplateOutlet`,a)}},dependencies:[SS],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2})}return t})();var Gn=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=na$1({type:t});static ɵinj=io$1({imports:[be$2]})}return t})();function Vn(t,i){let e=$(t,i?.in);return e.setSeconds(59,999),e}function ni(t,i,e){return Xe(t,-i,e)}function Gr(t,i){if(t&1&&(Vs(0,`main`,2),Am(1,`icon`,5)(2,`p`,6),Wl()),t&2){let e=sT();Iw(),xm(`icon`,e.icon()),Iw(),xm(`innerHTML`,e.content(),MI)}}function Vr(t,i){if(t&1&&(Vs(0,`main`,3)(1,`div`,7),Am(2,`mat-spinner`,8),Vs(3,`p`),BT(4),Wl()()()),t&2){let e=sT();Iw(4),iy(e.loading())}}function jr(t,i){if(t&1){let e=eT();Vs(0,`footer`,4)(1,`button`,9),BT(2),i_(3,`translate`),Wl(),Vs(4,`button`,10),Bm(`click`,function(){sp(e);return ap(sT().onConfirm())}),BT(5),i_(6,`translate`),Wl()()}if(t&2){let e=sT();Iw(2),Kl(` `,a_(3,2,e.cancel_text()),` `),Iw(3),Kl(` `,a_(6,4,e.confirm_text()),` `)}}var Wr={height:`auto`};async function Uo(t,i){let e=i.open(Hr,m(l({},Wr),{data:t}));return m(l({},await Promise.race([e.componentInstance.event.pipe(Df(n=>n.reason===`done`)).toPromise(),e.afterClosed().toPromise()])),{loading:n=>e.componentInstance.loading?.set(n),close:()=>e.close()})}var Hr=(()=>{class t extends Y{constructor(){super(),this._dialog_ref=E(T),this._data=E($e),this.loading=lt(``),this.event=new wt,this.title=lt(this._data.title||`COMMON.CONFIRM`),this.content=lt(this._data.content||`Are you sure?`),this.confirm_text=lt(this._data.confirm_text||`COMMON.ACCEPT`),this.cancel_text=lt(this._data.cancel_text||`COMMON.CANCEL`),this.icon=lt(this._data.icon||{class:`material-symbols-rounded`,content:`done`}),this.disableClose=()=>this._dialog_ref.disableClose=!0,this.enableClose=()=>this._dialog_ref.disableClose=!1}ngOnInit(){this._data.close_delay&&this.timeout(`close`,()=>this._dialog_ref.close(),this._data.close_delay)}onConfirm(){this.event.emit({reason:`done`})}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=YC({type:t,selectors:[[`confirm-modal`]],features:[ym],decls:6,vars:3,consts:[[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`h-14`,`w-[calc(100%-1rem)]`,`min-w-[20rem]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[1,`flex`,`w-md`,`max-w-[85vw]`,`flex-col`,`items-center`,`space-y-4`,`p-4`,`sm:h-auto`],[`loading`,``],[1,`bg-base-200`,`sticky`,`bottom-0`,`m-2`,`flex`,`items-center`,`justify-center`,`space-x-2`,`rounded-sm`,`border-none`,`p-2`],[1,`text-5xl`,3,`icon`],[`content`,``,1,`text-center`,3,`innerHTML`],[1,`flex`,`h-48`,`w-full`,`flex-col`,`items-center`,`justify-center`,`space-y-4`],[`diameter`,`32`],[`btn`,``,`matRipple`,``,`mat-dialog-close`,``,1,`inverse`,`bg-base-100`,`flex-1`],[`btn`,``,`matRipple`,``,`name`,`accept`,1,`flex-1`,3,`click`]],template:function(n,r){n&1&&(Vs(0,`header`,0)(1,`h2`,1),BT(2),Wl()(),$b(3,Gr,3,2,`main`,2)(4,Vr,5,1,`main`,3),$b(5,jr,7,6,`footer`,4)),n&2&&(Iw(2),iy(r.title()),Iw(),Gb(r.loading()?4:3),Iw(2),Gb(r.loading()?-1:5))},dependencies:[Gn,Un,at,Mt,yt,Ht$1,Bt,f],encapsulation:2})}}return t})();var Rt=`/api/staff/v1/calendars`;async function ri(){return(await Kt(Rt)).map(i=>new wo(i))}async function Ue(t){let i=w_(t);return(await Kt(`${Rt}/availability${i?`?`+i:``}`)).map(n=>new wo(n))}var Kr=(t,i)=>t.filter(e=>!!e.resource).map(e=>new Oe(m(l({},e.resource),{level:i?.levelWithID(e.resource.zones),availability:e.availability}))).filter(e=>e.bookable);async function Ho(t){let i=w_(t);return await Kt(`${Rt}/free_busy${i?`?`+i:``}`)}async function Ge(t,i){let e=w_(t);return Kr((await Kt(`${Rt}/free_busy${e?`?`+e:``}`)).map(r=>new wo(r)),i)}var te=`/api/staff/v1/events`;var Qr=ye$1.raw||ye$1.version||ye$1.hash;function Yr(){return Nr(`app.name`)||Nr(`app.short_name`)||`PlaceOS`}function jn(t){return m(l({},t),{extension_data:m(l({},t.extension_data||{}),{app_name:Yr(),app_version:Qr})})}async function es(t){return Xr(t).catch(()=>[])}async function Xr(t){return(await Jr(t)).events}async function Jr(t){let i=w_(t),e=`${te}${i?`?`+i:``}`,n=await Kt(e),r=za$1(new URL(e,document.baseURI).href)[`x-calendar-issue`]||``;return{events:n.map(a=>new wr(a)),failed_calendars:r.split(`,`).map(a=>a.trim().toLowerCase()).filter(Boolean)}}async function Zr(t){return new wr(await Gr$1(`${te}`,new wr(jn(t)).toJSON()))}async function ea(t,i,e={},n=`patch`){let r=w_(e);return new wr(await(n===`patch`?Ha$1:Zr$1)(`${te}/${encodeURIComponent(t)}${r?`?`+r:``}`,new wr(jn(i)).toJSON()))}var ts=async(t,i)=>{let e=t.update_master&&t.recurring_event_id||t.id;return delete t?.status,e?ea(e,m(l({},t),{id:e}),i):Zr(t)};function is(t,i={}){let e=w_(i);return ja$1(`${te}/${encodeURIComponent(t)}${e?`?`+e:``}`,{response_type:`void`})}async function ns(t,i,e,n={}){let r=w_(m(l({},n),{state:e}));return new pr$1(await Gr$1(`${te}/${encodeURIComponent(t)}/guests/${i}/checkin${r?`?`+r:``}`,``))}async function rs(t,i,e={}){let n=w_(e);return new pr$1(await Gr$1(`${te}/${encodeURIComponent(t)}/attendee${n?`?`+n:``}`,i))}async function as(t,i,e={}){let n=w_(e);return new pr$1(await ja$1(`${te}/${encodeURIComponent(t)}/attendee/${encodeURIComponent(i.email)}${n?`?`+n:``}`))}async function os(t,i,e={}){let n=w_(l({},e));return await Kt(`${te}/${encodeURIComponent(t)}/metadata/${encodeURIComponent(i)}${n?`?`+n:``}`)}async function ss(t,i,e,n,r,a=[0,0]){let o=ct(i,e).valueOf(),[s,c]=await Promise.all([Ue({system_ids:t.join(),period_start:D(i),period_end:D(o)}).catch(()=>[]),n&&t.includes(n)?Ge({period_start:D(i),period_end:D(o),system_ids:n}):Promise.resolve([])]),d=t.map(l=>!!s.find(m=>m.id===l||m.resource?.id===l));for(let l of c){if(!t.includes(l.id))continue;let m=l.availability.filter(u=>!(u.date===a[0]&&u.duration===a[1]));d[t.indexOf(l.id)]=!m.find(u=>u.status!==`free`)}return d}async function cs(t,i={}){let e=w_(m(l({},i),{limit:1e4}));try{let n=await Gr$1(`${te}/clashing-assets${e?`?`+e:``}`,t.toJSON());return i.include_clash_time,n}catch{return[]}}function gs(t,i,e=Nr(`app.parking.waitlist_week_start`)){let n=e?.day??5,r=e?.hour??18,a$1=e?.minute??0,o=Nr(`app.bookings.use_building_timezone`)||Nr(`app.parking.use_building_timezone`)?i:``,s=Date.now(),c=o?H(s,o):new Date(s),d=dt(pt(c,{weekStartsOn:n}),{hours:r,minutes:a$1,seconds:0,milliseconds:0});c<d&&(d=a(d,7));let l=rs$1(d,7),m=u=>o?ot(u,o).valueOf():u.valueOf();return t.valueOf()>=m(d)&&t.valueOf()<m(l)}var B=`/api/staff/v1/bookings`;var ta=ye$1.raw||ye$1.version||ye$1.hash;function Kn(){return Nr(`app.name`)||Nr(`app.short_name`)||`PlaceOS`}function je(){return`${Kn()}_${ye$1.hash}_${F().email||``}`}function ai(t){let i=l({},t instanceof so$1?t.toJSON():t);return delete i.created_at,m(l({},i),{extension_data:m(l({},i.extension_data||{}),{app_name:Kn(),app_version:ta})})}async function ce(t){return Qn(t).catch(()=>[])}async function Qn(t){let i=w_(t);return(await Kt(`${B}${i?`?`+i:``}`)).map(n=>new so$1(n))}async function ia(t,i){try{let{data:e,next:n,total:r}=await vt({query_params:m(l({},t),{limit:Math.max(200,i||0)}),endpoint:B,path:`booked`}),a=[...e],o=1;for(;n&&(!r||a.length<r)&&o<=Yn;){let s=await n();e=s.data,n=s.next,r=s.total,a=[...a,...e],o+=1}return Ah(a)}catch{return[]}}async function ys(t,i={}){let e=w_(m(l({},i),{limit:1e3}));try{let n=await Gr$1(`${B}/clashing-assets${e?`?`+e:``}`,t.toJSON()).catch(()=>[]);return i.include_clash_time,n}catch{return[]}}var Yn=50;async function bs(t){try{let{data:i,next:e}=await vt({query_params:t,fn:a=>new so$1(a),endpoint:B,path:``}),n=[...i],r=1;for(;e&&r<=Yn;){let a=await e();i=a.data,e=a.next,n=[...n,...i],r+=1}return Ah(n,`id`)}catch{return[]}}async function vs(t){return new so$1(await Kt(`${B}/${encodeURIComponent(t)}`))}function oi(t){if(!t)throw new Error(`Missing parent booking id`);let i=Number(t);return Number.isSafeInteger(i)?i:t}async function Ee(t,i){let e=w_(m(l({},i),{utm_source:je()}));return new so$1(await Gr$1(`${B}${e?`?`+e:``}`,ai(t)))}async function Xn(t,i,e=`patch`){return new so$1(await(e===`patch`?Ha$1:Zr$1)(`${B}/${encodeURIComponent(t)}`,ai(i)))}async function na(t,i,e,n=`patch`){return new so$1(await(n===`patch`?Ha$1:Zr$1)(`${B}/${encodeURIComponent(t)}/instance/${i}`,ai(e)))}var ws=async(t,i)=>{let e=t.id;delete t.id;let n=i?.instance;return i&&delete i.instance,e?n?na(e,t.instance||t.booking_start,t):Xn(e,t):Ee(ha$1(t,[``,null,void 0])||{},i)};function Ve(t,i={}){if(i.instance)return ra(t,i.start_time);let e=w_({utm_source:je()});return ja$1(`${B}/${encodeURIComponent(t)}?${e}`,{response_type:`void`})}function ra(t,i){let e=w_({utm_source:je()});return ja$1(`${B}/${encodeURIComponent(t)}/instance/${i}?${e}`,{response_type:`void`})}async function aa(t,i){let e=w_({state:i});try{return new so$1(await Gr$1(`${B}/${encodeURIComponent(t)}/check_in?${e}&utm_source=${je()}`,``))}catch(n){let r=await n.json();throw r.error||r.message||r}}async function oa(t,i,e){let n=w_({state:e});try{return new so$1(await Gr$1(`${B}/${encodeURIComponent(t)}/check_in/${i}?${n}&utm_source=${je()}`,``))}catch(r){let a=await r.json();throw a.error||a.message||a}}async function xs(t,i){return!!t.instance||!!t.recurrence_type&&t.recurrence_type!==`none`?oa(t.id,t.instance||t.booking_start,i):aa(t.id,i)}async function ks(t,i,e,n,r=`room`){let a=await ce({type:r,period_start:D(i),period_end:D(ct(i,e))});return t.map(o=>!a.find(s=>(s.asset_id===o||s.asset_ids.includes(o))&&(!n||n!==s.id)))}async function sa(t,i){return t.from_bookings?t.linked_bookings.filter(n=>n.booking_type===i).map(n=>new so$1(n)):(await Qn({type:i,event_id:t.id,period_start:D(t.date),period_end:D(ct(t.date,t.duration)),limit:500})).filter(n=>n.extension_data?.parent_id===t.id)}function ca(t,i){return t.from_bookings?[]:(t.linked_bookings||[]).filter(e=>{let n=e.extension_data?.parent_id;return e.booking_type===i&&!!n&&n!==t.id}).map(e=>e.id)}function da(t,i){return i.id&&t.extension_data?.details?.id===i.id||i.email&&t.attendees?.find(e=>e.email===i.email)?!0:!!t.asset_ids?.find(e=>i.items?.find(n=>n.item_ids?.includes(e)))}function Wn(t){let i=JSON.parse(JSON.stringify(t??null));return i&&typeof i==`object`&&delete i.deliver_at_time,JSON.stringify(i,(e,n)=>n&&typeof n==`object`&&!Array.isArray(n)?Object.fromEntries(Object.entries(n).sort(([r],[a])=>r<a?-1:1)):n)}function Hn(t=[]){return t.map(i=>i.email?.toLowerCase()).sort().join(`,`)}function la(t,i){let e={};(t.booking_start!==i.booking_start||t.booking_end!==i.booking_end)&&(e.booking_start=i.booking_start,e.booking_end=i.booking_end,e.all_day=i.all_day);for(let r of[`title`,`description`,`asset_name`])t[r]!==i[r]&&(e[r]=i[r]);return t.user_email.toLowerCase()!==i.user_email.toLowerCase()&&(e.user_email=i.user_email),t.asset_id!==i.asset_id&&(e.asset_id=i.asset_id,e.asset_ids=i.asset_ids),[...t.zones].sort().join()!==[...i.zones].sort().join()&&(e.zones=i.zones),Hn(t.attendees)!==Hn(i.attendees)&&(e.attendees=i.attendees),!(Wn(t.extension_data?.details)!==Wn(i.extension_data?.details))&&!Object.keys(e).length?null:m(l({},e),{extension_data:i.extension_data})}async function Cs(t,i,e){let n=await sa(t,i),r=t.system?.zones||Ah(Uh(t.resources.map(s=>s.zones)))||[],a=new Set,o=[];try{for(let s of ca(t,i))await Ve(s);for(let s of e){let c=n.find(y=>!a.has(y.id)&&da(y,s)),d=i===`catering-order`&&s.system_id?t.resources.find(y=>y.id===s.system_id||y.email===s.system_id):void 0,l$1=d?.id||s.system_id||s.email||s.id,m$1=d?.display_name||d?.name||s.name,u=new so$1({type:i,booking_type:i,date:t.date,duration:t.duration,description:t.title||s.name,user_email:t.host,asset_id:l$1,asset_name:m$1,title:t.title,attendees:s.email?[new ze(s)]:[],extension_data:{parent_id:t.id,name:m$1,location_id:d?.id||t.location,details:s},zones:d?.zones||r});if(c){a.add(c.id);let y=la(c,u);y&&await Xn(c.id,y);continue}o.push(t.from_bookings?await Ee(m(l({},u.toJSON()),{parent_id:oi(t.id)})):await Ee(u.toJSON(),{ical_uid:t.ical_uid,event_id:t.id}))}for(let s of n)a.has(s.id)||await Ve(s.id)}catch(s){throw await Promise.all(o.filter(c=>!!c.id).map(c=>Ve(c.id).catch(()=>{}))),s}}function Nt(t,i=``){let e=i.trim().toLowerCase();return t.filter(n=>(n.name||``).trim().toLowerCase()===e).sort((n,r)=>(n.created_at||0)-(r.created_at||0))[0]}function ua(t){return m(l({},t),{data:t.data.filter(i=>!i?.hidden)})}async function pa(){let t=await Gu({});return new Set(t.data.filter(i=>!i?.hidden).map(i=>i.id))}async function Jn(t={}){if(t.hidden===!0)return Gu(t);let n$1=t,{hidden:i}=n$1;return ua(await Gu(n(n$1,[`hidden`])))}async function _a(t={}){if(t.hidden===!0)return zu(t);let a=t,{hidden:i}=a,e=n(a,[`hidden`]),[n$2,r]=await Promise.all([zu(e),pa()]);return m(l({},n$2),{data:n$2.data.filter(o=>!o?.hidden&&r.has(o.category_id))})}async function Zn(t={}){if(t.hidden===!0)return Yu(t);let o=t,{hidden:i}=o,e=n(o,[`hidden`]),[n$3,r]=await Promise.all([Yu(e),_a(m(l({},e.zone_id?{zone_id:e.zone_id}:{}),{limit:2e3}))]),a=new Set(r.data.map(s=>s.id));return m(l({},n$3),{data:n$3.data.filter(s=>!s?.hidden&&a.has(s.asset_type_id))})}function er(t){return t.id?Zu(t.id,t):Bu(t)}var Dt=new Map;var ha=[`period_start`,`period_end`,`type`,`rejected`];async function fa(t={}){let i=await Yu(m(l({},t),{limit:t.limit||500})),e=i.total,n=[...i.data];for(;typeof i.next==`function`;){let r=i.next();if(!r)break;i=await r,e=i.total,n.push(...i.data)}return{total:e,next:()=>null,data:n}}async function ga(t={}){let i=JSON.stringify({zones:t.zones||t.zone_id||``,category_id:t.category_id||``,q:t.q||``,type_id:t.type_id||``});if(Dt.has(i))return Dt.get(i);let e=l({},t);for(let d of ha)d in e&&delete e[d];e.zones&&!e.zone_id&&(e.zone_id=e.zones),e.zones&&delete e.zones;let[n,r]=await Promise.all([zu(e),fa(e)]),a=n.data.filter(d=>!d?.hidden);e.type_id&&(a=a.filter(d=>d.id===e.type_id));let o=new Set(a.map(d=>d.id)),s=new Map;for(let d of r.data){if(d?.hidden||!o.has(d.asset_type_id))continue;let l=s.get(d.asset_type_id)||[];l.push(d),s.set(d.asset_type_id,l)}let c=a.map(d=>m(l({},d),{assets:s.get(d.id)||[]}));return Dt.set(i,c),setTimeout(()=>Dt.delete(i),300*1e3),c}function tr(t){return t.id?Hu(t.id,t):ju(t)}async function si(t,i=[]){let[e,n]=await Promise.all([ga(t),ce(m(l({},t),{type:`asset-request`}))]),r=n.filter(a=>a.status!==`declined`&&a.status!==`cancelled`);return e.map(a=>m(l({},a),{assets:a.assets.filter(o=>i?.includes(o.id)||!r.find(s=>!i.includes(s.id)&&(s.asset_id===o.id||s.asset_ids?.includes(o.id))))}))}function ya(t,i){if((!t||t?.length<=0)&&i?.length)return[];if(!i)return[];let e=[];for(let n of t){let r=i.find(a=>a.id===n.id);(!r||r.ref_id!==n.ref_id)&&e.push(n.id)}return e}async function Fs({id:t,ical_uid:i,from_booking:e,from_bookings:n},{date:r,duration:a,all_day:o,host:s,location_name:c,location_id:d,zones:l$2,reset_state:m$2},u=[],y=!1){let A=await ce({period_start:D(r),period_end:D(ct(r,a)),type:`asset-request`,zones:l$2.join(`,`)}),Q=!!(e||n),Oe=t&&(i||Q)?(await ce({period_start:D(J(r)),period_end:D(Je(r)),type:`asset-request`,email:s,event_id:Q?``:t,ical_uid:i})).filter(f=>!Q||String(f.extension_data?.parent_id)===String(t)):[],Pt=Oe.map(f=>[f.id,new $$1(f.extension_data.request)]);u?.forEach(f=>f.conflict=!1);let Ae=y?u.map(f=>f.id):ya(u,Pt.map(([f,C])=>C));if(m$2){let f=Oe.filter(C=>C.approved||C.rejected);Ae=Ah([...Ae,...f.map(C=>C.extension_data.request_id)])}let bi=Pt.filter(([f,C])=>!Ae.includes(C.id)),Rr=Pt.filter(([f,{id:C}])=>Ae.includes(C)),Dr=u.filter(({id:f})=>Ae.includes(f)),le=Uh(A.filter(f=>!f.rejected&&(!Oe.find(C=>C.id===f.id)||bi.find(([C])=>f.event_id===C))).map(f=>f.asset_ids));for(let[f,C]of bi)le=[...le,...Uh(C.items.map(Qe=>Qe.item_ids))];let Tr=await si({period_start:D(r),period_end:D(ct(r,a)),type:`asset-request`,zones:(l$2||[]).join(`,`)},Oe.map(f=>f.id)),qr=Dr.map(f=>{let C=Uh(f.items.map(({id:Y,item_ids:Ft,quantity:Bt})=>{let Re=Ft||[],wi=Tr.find(xi=>xi.id===Y)?.assets;if(!wi)return Re;let zt=[];return new Array(Bt).fill(0).map((xi,Ye)=>{let Ut=le.includes(Re[Ye])||zt.includes(Re[Ye])||!Re[Ye]?wi?.find(({id:ki})=>!le.includes(ki)&&!zt.includes(ki))?.id:Re[Ye];if(!Ut)throw f.conflict=!0,`Unable to find available asset for request`;return zt.push(Ut),Ut})}));if(!C.length||C.some(Y=>!Y))throw f.conflict=!0,`Unable to find available asset for request`;let Qe=Oe.find(Y=>Y.asset_ids.find(Ft=>f.items?.find(Bt=>Bt.item_ids?.includes(Ft))));le=[...le,...C];let vi={type:`asset-request`,booking_type:`asset-request`,date:r,duration:a,all_day:o,description:c,user_email:s,asset_id:C[0],asset_ids:C,asset_name:f.items.map(Y=>Y.name).join(`, `),title:f.items.map(Y=>Y.name).join(`, `),approved:!m$2&&Qe?.approved&&!f._changed,rejected:!m$2&&Qe?.rejected&&!f._changed,extension_data:{parent_id:t,request_id:f.id,location_id:d,request:new $$1(m(l({},f),{event:null}))},zones:l$2||[]};return()=>Q?Ee(m(l({},new so$1(vi).toJSON()),{parent_id:oi(t)})):Ee(new so$1(vi),{ical_uid:i,event_id:t})});return async()=>{await Promise.all(Rr.map(([f])=>Ve(f))),await Promise.all(qr.map(f=>f()))}}var ba=`_LOCKERS_`;var va=`_LOCKER_BANKS_`;var wa=`_LOCKERS_`;var ci=null;var di=null;var li=null;var mi=null;var We=null;var Tt=new Map;async function ir(){return We||(We=Gu({hidden:!0,limit:500}).then(t=>t.data).catch(()=>[])),We}async function xa(t){return Tt.has(t)||Tt.set(t,zu({category_id:t,limit:500}).then(i=>i.data).catch(()=>[])),Tt.get(t)}async function ka(t){let i=Nt(await ir(),t);if(i||(We=null,i=Nt(await ir(),t),i))return i;let e=await er({name:t,hidden:!0});return We=null,e}async function Ca(t,i){let e=Nt(await xa(t),i);if(e)return e;let n=await tr({name:i,brand:`PlaceOS`,category_id:t});return Tt.delete(t),n}async function nr(t){return(await Ca((await ka(ba)).id,t)).id}function Sa(){return ci?Promise.resolve(ci):(di||(di=nr(va).then(t=>(ci=t,t))),di)}function Ma(){return li?Promise.resolve(li):(mi||(mi=nr(wa).then(t=>(li=t,t))),mi)}async function rr(t){if(!t?.length)return[];let i=await Sa();return Uh(await Promise.all(t.map(n=>Yu({zone_id:n,type_id:i,limit:500}).then(r=>r.data))))}async function ar(t){if(!t?.length)return[];let i=await Ma();return Uh(await Promise.all(t.map(n=>Yu({zone_id:n,type_id:i,limit:500}).then(r=>r.data))))}var Ia=64;var Ea=64;var Oa=30*1e3;var Aa=`PlaceOS.image-cache-v1`;var Ra=`PlaceOS.image-cache-keys-v1`;var K=new Map;var ui=new Map;var de=new Map;var or=!1;function Da(){if(!or&&(or=!0,typeof caches<`u`&&caches.delete(Aa).catch(()=>!1),typeof sessionStorage<`u`))try{sessionStorage.removeItem(Ra)}catch{}}function Na(t){let i=K.get(t);if(i)return K.delete(t),K.set(t,i),i}function Ta(t,i){let e=K.get(t);for(e&&e!==i&&URL.revokeObjectURL(e),K.delete(t),K.set(t,i);K.size>Ia;){let n=K.keys().next().value;if(!n)break;let r=K.get(n);K.delete(n),r&&URL.revokeObjectURL(r)}return i}function qa(t){for(de.delete(t),de.set(t,Date.now()+Oa);de.size>Ea;){let i=de.keys().next().value;if(!i)break;de.delete(i)}}function pi(t){let i=Q();document.cookie=`${i===`x-api-key`?`api-key=`+encodeURIComponent(Qt()):`bearer_token=`+encodeURIComponent(i)};max-age=30;path=${t};samesite=strict;${location.protocol===`https:`?`secure;`:``}`}function $a(){let t=Q();return t===`x-api-key`?{"X-API-Key":Qt()}:{Authorization:`Bearer ${t}`}}function Ys(t,i){return sr(t,()=>(pi(i),fetch(t)))}function Xs(t){return sr(t,()=>fetch(t,{headers:$a()}))}async function sr(t,i){Da();let e=Na(t);if(e)return e;if((de.get(t)||0)>Date.now())throw new Error(`Image load is in retry cooldown`);de.delete(t);let r=ui.get(t);if(r)return r;let a=i().then(async o=>{if(!o?.ok)throw new Error(`Failed to fetch image: ${o?.status}`);return Ta(t,URL.createObjectURL(await o.blob()))}).catch(o=>{throw qa(t),o}).finally(()=>ui.delete(t));return ui.set(t,a),a}var cr=10;var dr=1;var La=.05;var lr=16;var mr=4;var ur=2;var pr=8192;function _r(){if(typeof window>`u`||!window.matchMedia)return!1;let t=window.matchMedia(`(pointer: coarse)`).matches,i=window.matchMedia(`(max-width: 1024px)`).matches;return t&&i}function Pa(t){return t.replace(/[!"#$%&'()*+,.\/;<=>?@[\\\]^`{|}~]/g,`\\$&`).split(` `).map(e=>e.replace(/^\\/,``)).join(` `)}function Fa(t){let i=0,e=0,n=0,r=0,a=t.getAttribute(`viewBox`);if(a){let o=a.split(/[\s,]+/).map(parseFloat);o.length>=4&&(i=o[0]||0,e=o[1]||0,n=o[2],r=o[3])}if(!n||!r){let o=t.getAttribute(`width`),s=t.getAttribute(`height`);n=o?parseFloat(o):0,r=s?parseFloat(s):0}if(!n||!r)try{let o=t.getBBox();i=o.x,e=o.y,n=o.width,r=o.height}catch{}return{x:i,y:e,width:n||1,height:r||1}}function Ba(t,i){let e=t.getBBox(),n=i&&t.getScreenCTM?.();if(!n)return e;let r=i.multiply(n),a=[{x:e.x,y:e.y},{x:e.x+e.width,y:e.y},{x:e.x,y:e.y+e.height},{x:e.x+e.width,y:e.y+e.height}].map(c=>({x:r.a*c.x+r.c*c.y+r.e,y:r.b*c.x+r.d*c.y+r.f})),o=Math.min(...a.map(c=>c.x)),s=Math.min(...a.map(c=>c.y));return{x:o,y:s,width:Math.max(...a.map(c=>c.x))-o,height:Math.max(...a.map(c=>c.y))-s}}function za(t){let i=new Map,e=document.createElement(`div`);e.style.position=`absolute`,e.style.visibility=`hidden`,e.style.pointerEvents=`none`,e.style.left=`-9999px`,e.style.top=`-9999px`,e.innerHTML=t,document.body.appendChild(e);let n=e.querySelector(`svg`);if(!n)return document.body.removeChild(e),{bounds:i,aspect_ratio:1};let{x:r,y:a,width:o,height:s}=Fa(n),c=o/s,d=n.getScreenCTM?.(),l=d?d.inverse():null;return n.querySelectorAll(`[id]`).forEach(u=>{let y=u.getAttribute(`id`);if(y&&typeof u.getBBox==`function`)try{let A=Ba(u,l);i.set(y,{x:(A.x-r)/o,y:(A.y-a)/s,w:A.width/o,h:A.height/s})}catch{}}),document.body.removeChild(e),{bounds:i,aspect_ratio:c}}var _i=class{constructor(){this.store=new Map}get(i){if(!this.store.has(i)){let e=this._load(i);e.catch(()=>this.store.delete(i)),this.store.set(i,e)}return this.store.get(i)}async _load(i){for(;!be();)await new Promise(d=>setTimeout(d,300));let e={},n=Q(),r=new URL(i,location.origin).origin===location.origin;n&&r&&(zh()?pi(`/`):e.headers=n===`x-api-key`?{"x-api-key":Qt()}:{Authorization:`Bearer ${n}`});let a=await fetch(i,e);if(!a.ok)throw new Error(`Failed to load map`);let o=await a.text(),{bounds:s,aspect_ratio:c}=za(o);return{raw_data:o,element_bounds:s,aspect_ratio:c}}};var fr=new _i;function gr(t){return fr.get(t)}var hr=class{constructor(i){this.map_image=null,this.styles_string=``,this.center={x:.5,y:.5},this.zoom=1,this.fixed_resolution_megapixels=0,this.disable_zoom=!1,this.disable_pan=!1,this.onViewChange=null,this.debug=!1,this.debug_info={pointer:null,hover_id:``,highlight_id:``,last_draw_ms:0,draws_last_second:0},this._map_path=``,this._image_generation=0,this._texture_width=0,this._texture_height=0,this._image_frame_id=null,this._draw_frame_id=null,this._notify_frame_id=null,this._debug_draw_count=0,this._debug_count_start=0,this._events=new Map,this._resize_observer=null,this._pointers=new Map,this._is_panning=!1,this._pinch_distance=null,this._pan_start_time=null,this._pan_exceeded_threshold=!1,this._overlay_instances=[],this._actions=[],this._action_event_handlers=new Map,this._action_pointerdown_pos=null,this._action_last_triggered=new Map,this.container=i,this.id=`m_view-${Nh(8,`0123456789ABCDEF`)}`,this.container.innerHTML=``,this.container.style.overflow=`hidden`,this.container.style.touchAction=`none`,this.canvas=document.createElement(`canvas`),this.canvas.style.cssText=`position: absolute; inset: 0; pointer-events: none;`,this._ctx=this.canvas.getContext(`2d`),this.container.appendChild(this.canvas),this.overlays=document.createElement(`div`),this.overlays.id=`${this.id}-overlays`,this.overlays.style.cssText=`position: absolute; inset: 0; z-index: 0; pointer-events: none;`,this.container.appendChild(this.overlays),this._resize_observer=new ResizeObserver(()=>this._onResize()),this._resize_observer.observe(this.container),this._events.set(`wheel`,e=>this._onWheel(e)),this.container.addEventListener(`wheel`,this._events.get(`wheel`),{passive:!1}),this._events.set(`pointerdown`,e=>this._onPointerDown(e)),this._events.set(`pointermove`,e=>this._onPointerMove(e)),this._events.set(`pointerup`,e=>this._onPointerUp(e)),this.container.addEventListener(`pointerdown`,this._events.get(`pointerdown`)),window.addEventListener(`pointermove`,this._events.get(`pointermove`)),window.addEventListener(`pointerup`,this._events.get(`pointerup`)),window.addEventListener(`pointercancel`,this._events.get(`pointerup`))}async setMap(i){this._map_path=i;let e=await fr.get(i);this._map_path===i&&(this.map=e,this._renderMapImage())}setCenter(i){let e=this._clampCenter(i);e.x===this.center.x&&e.y===this.center.y||(this.center=e,this._renderMap())}setZoom(i){i=Math.max(dr,Math.min(cr,i)),i!==this.zoom&&(this.zoom=i,this._renderMap())}setFixedResolution(i){let e=i>0?i:0;this.fixed_resolution_megapixels!==e&&(this.fixed_resolution_megapixels=e,this.disable_zoom&&this._renderMapImage())}setOptions(i){let e=this.disable_zoom;this.disable_zoom=!!i?.disable_zoom,this.disable_pan=!!i?.disable_pan,e!==this.disable_zoom&&this._renderMapImage()}get overlay_count(){return this._overlay_instances.length}get texture_mode(){return this.disable_zoom?this.fixed_resolution_megapixels?`fixed ${this.fixed_resolution_megapixels}MP`:`fixed ${ur}\xD7 container`:_r()?`mobile ${mr}MP`:`desktop ${lr}MP`}setDebug(i){if(this.debug!==i){if(this.debug=i,i){let e=a=>{this.debug_info.pointer=this._eventToMap(a),this.debug_info.hover_id=this._elementAt(this.debug_info.pointer),this._renderMap()},n=()=>{this.debug_info.pointer=null,this.debug_info.hover_id=``,this._renderMap()},r=a=>{let o=this._eventToMap(a);console.log(`[MAP][DEBUG] Click at { x: ${o.x.toFixed(4)}, y: ${o.y.toFixed(4)} } on "${this._elementAt(o)||`no element`}"`)};this._events.set(`debug_move`,e),this._events.set(`debug_leave`,n),this._events.set(`debug_click`,r),this.container.addEventListener(`pointermove`,e),this.container.addEventListener(`pointerleave`,n),this.container.addEventListener(`click`,r)}else{for(let e of[`debug_move`,`debug_leave`,`debug_click`]){let n=this._events.get(e);if(!n)continue;let r=e===`debug_move`?`pointermove`:e===`debug_leave`?`pointerleave`:`click`;this.container.removeEventListener(r,n),this._events.delete(e)}this.debug_info.pointer=null,this.debug_info.hover_id=``,this.debug_info.highlight_id=``}this._applyOverlayOutlines(),this._renderMap()}}setDebugHighlight(i){this.debug_info.highlight_id!==i&&(this.debug_info.highlight_id=i,this.debug&&this._renderMap())}focusOn(i){let e=this.map?.element_bounds.get(i);e&&(this.setCenter({x:e.x+e.w/2,y:e.y+e.h/2}),this._notifyViewChange())}setOverlays(i){for(let e of this._overlay_instances)e.element.remove();this._overlay_instances=[];for(let e of i){let n=document.createElement(`div`);n.style.cssText=`position: absolute; top: 0; left: 0; display: flex; align-items: center; justify-content: center; transform-origin: center center; pointer-events: none;`,e.z_index!=null&&(n.style.zIndex=`${e.z_index}`),e.hover&&n.classList.add(`map-overlay-hover`),typeof e.contents==`string`?n.innerHTML=e.contents:n.appendChild(e.contents),this.overlays.appendChild(n),this._overlay_instances.push({overlay:e,element:n})}this._applyOverlayOutlines(),this._updateOverlayPositions()}_applyOverlayOutlines(){for(let{element:i}of this._overlay_instances)i.style.outline=this.debug?`1px dashed #f0f`:``}_elementAt(i){let e=``,n=Number.POSITIVE_INFINITY;for(let[r,a]of this.map?.element_bounds||[]){if(i.x<a.x||i.x>a.x+a.w||i.y<a.y||i.y>a.y+a.h)continue;let o=a.w*a.h;o<n&&(e=r,n=o)}return e}setActions(i){for(let[n,r]of this._action_event_handlers)this.container.removeEventListener(n,r);this._action_event_handlers.clear(),this._action_last_triggered.clear(),this._actions=i;let e=new Set(i.flatMap(n=>n.events));for(let n of e){let r=a=>this._handleActionEvent(n,a);this._action_event_handlers.set(n,r),this.container.addEventListener(n,r)}if(!this._events.has(`action_pointerdown`)){let n=r=>{this._action_pointerdown_pos={x:r.clientX,y:r.clientY}};this._events.set(`action_pointerdown`,n),this.container.addEventListener(`pointerdown`,n)}}setStyles(i){let e=``;for(let[n,r]of Object.entries(i))r&&(e+=`svg ${Pa(n)} { ${r} }
`);e!==this.styles_string&&(this.styles_string=e,this._renderMapImage())}destroy(){this.setDebug(!1),this._resize_observer?.disconnect(),this._resize_observer=null,this.container.removeEventListener(`wheel`,this._events.get(`wheel`)),this.container.removeEventListener(`pointerdown`,this._events.get(`pointerdown`)),window.removeEventListener(`pointermove`,this._events.get(`pointermove`)),window.removeEventListener(`pointerup`,this._events.get(`pointerup`)),window.removeEventListener(`pointercancel`,this._events.get(`pointerup`));for(let[i,e]of this._action_event_handlers)this.container.removeEventListener(i,e);if(this._action_event_handlers.clear(),this._action_last_triggered.clear(),this._actions=[],this._events.has(`action_pointerdown`)){let i=this._events.get(`action_pointerdown`);this.container.removeEventListener(`pointerdown`,i),this._events.delete(`action_pointerdown`)}this._action_pointerdown_pos=null,this._image_generation++,this._map_path=``,this._image_frame_id!==null&&(cancelAnimationFrame(this._image_frame_id),this._image_frame_id=null),this._draw_frame_id!==null&&(cancelAnimationFrame(this._draw_frame_id),this._draw_frame_id=null),this._notify_frame_id!==null&&(cancelAnimationFrame(this._notify_frame_id),this._notify_frame_id=null);for(let i of this._overlay_instances)i.element.remove();this._overlay_instances=[],this.map_image=null,this.container.innerHTML=``}_viewScale(i=this.zoom){let e=this.map?.aspect_ratio||1,n=this.container.clientWidth||1,r=this.container.clientHeight||1,a=Math.min(r,n/e)*(1-La*2)*i;return{x:a*e,y:a}}_eventToMap(i,e=this.container.getBoundingClientRect()){let n=this._viewScale();return{x:(i.clientX-e.left-e.width/2)/n.x+this.center.x,y:(i.clientY-e.top-e.height/2)/n.y+this.center.y}}_clampCenter(i){return{x:Math.max(0,Math.min(1,i.x)),y:Math.max(0,Math.min(1,i.y))}}_zoomAboutPoint(i,e){let n=this.zoom;if(i=Math.max(dr,Math.min(cr,i)),i===n)return;let r=this.container.getBoundingClientRect(),a=this._eventToMap({clientX:e.x,clientY:e.y},r),o=this._viewScale(i),s={x:a.x-(e.x-r.left-r.width/2)/o.x,y:a.y-(e.y-r.top-r.height/2)/o.y};this.zoom=i,this.center=this._clampCenter(s),this._renderMap(),this._notifyViewChange()}_onWheel(i){if(i.preventDefault(),this.disable_zoom||!this.map_image)return;let e=i.deltaY>0?.97:1.03;this._zoomAboutPoint(this.zoom*e,{x:i.clientX,y:i.clientY})}_onPointerDown(i){if(this.map_image&&i.button===0){if(this._pointers.set(i.pointerId,{x:i.clientX,y:i.clientY}),this._pointers.size===2){this._is_panning=!1;let[e,n]=[...this._pointers.values()];this._pinch_distance=Math.hypot(n.x-e.x,n.y-e.y);return}this.disable_pan||(this._is_panning=!0,this._pan_start_time=Date.now(),this._pan_exceeded_threshold=!1,this.container.style.cursor=`grabbing`)}}_onPointerMove(i){let e=this._pointers.get(i.pointerId);if(!e)return;if(this._pointers.set(i.pointerId,{x:i.clientX,y:i.clientY}),this._pointers.size===2&&this._pinch_distance){if(this.disable_zoom)return;let[r,a]=[...this._pointers.values()],o=Math.hypot(a.x-r.x,a.y-r.y);o>0&&(this._zoomAboutPoint(this.zoom*(o/this._pinch_distance),{x:(r.x+a.x)/2,y:(r.y+a.y)/2}),this._pinch_distance=o);return}if(!this._is_panning)return;this._pan_start_time&&!this._pan_exceeded_threshold&&Date.now()-this._pan_start_time>200&&(this._pan_exceeded_threshold=!0);let n=this._viewScale();this.center=this._clampCenter({x:this.center.x-(i.clientX-e.x)/n.x,y:this.center.y-(i.clientY-e.y)/n.y}),this._renderMap(),this._notifyViewChange()}_onPointerUp(i){this._pointers.delete(i.pointerId),this._pointers.size<2&&(this._pinch_distance=null),this._is_panning&&this._pointers.size===0&&(this._is_panning=!1,this.container.style.cursor=``)}_onResize(){if(this._renderMap(),this.disable_zoom&&!this.fixed_resolution_megapixels){let{width:i,height:e}=this._textureDimensions();(i!==this._texture_width||e!==this._texture_height)&&this._renderMapImage()}}_targetTexturePixels(){return this.disable_zoom?this.fixed_resolution_megapixels>0?this.fixed_resolution_megapixels*1e6:(this.container.clientWidth||1)*(this.container.clientHeight||1)*ur:(_r()?mr:lr)*1e6}_textureDimensions(){let i=this.map?.aspect_ratio||1,e=this._targetTexturePixels(),n=Math.sqrt(e/i),r=n*i;return{width:Math.max(1,Math.min(pr,Math.round(r))),height:Math.max(1,Math.min(pr,Math.round(n)))}}_renderMapImage(){this._image_frame_id!==null&&cancelAnimationFrame(this._image_frame_id),this._image_frame_id=requestAnimationFrame(()=>{this._image_frame_id=null,this._doRenderMapImage()})}_doRenderMapImage(){if(!this.map?.raw_data)return;let i=++this._image_generation,n=new DOMParser().parseFromString(this.map.raw_data,`image/svg+xml`),r=n.querySelector(`svg`);if(!r)return;let{width:a,height:o}=this._textureDimensions();if(this._texture_width=a,this._texture_height=o,!r.getAttribute(`viewBox`)){let u=parseFloat(r.getAttribute(`width`)||``),y=parseFloat(r.getAttribute(`height`)||``);u>0&&y>0&&r.setAttribute(`viewBox`,`0 0 ${u} ${y}`)}if(r.getAttribute(`viewBox`)&&(r.setAttribute(`width`,`${a}`),r.setAttribute(`height`,`${o}`)),this.styles_string){let u=n.createElementNS(`http://www.w3.org/2000/svg`,`style`);u.textContent=this.styles_string,r.appendChild(u)}let c=new XMLSerializer().serializeToString(r),d=new Blob([c],{type:`image/svg+xml`}),l=URL.createObjectURL(d),m=new Image;m.onload=()=>{if(URL.revokeObjectURL(l),i!==this._image_generation)return;let u=document.createElement(`canvas`);u.width=a,u.height=o;let y=u.getContext(`2d`);if(!y){console.error(`Failed to get canvas context`);return}y.drawImage(m,0,0,a,o),this.map_image=u,this._renderMap()},m.onerror=()=>{URL.revokeObjectURL(l),console.error(`Failed to load map image`)},m.src=l}_renderMap(){this._draw_frame_id===null&&(this._draw_frame_id=requestAnimationFrame(()=>{this._draw_frame_id=null,this._drawMap()}))}_drawMap(){if(!this.map_image)return;let i=this.debug?performance.now():0,e=this.container.clientWidth||1,n=this.container.clientHeight||1,r=window.devicePixelRatio||1;(this.canvas.width!==Math.round(e*r)||this.canvas.height!==Math.round(n*r))&&(this.canvas.width=Math.round(e*r),this.canvas.height=Math.round(n*r),this.canvas.style.width=`${e}px`,this.canvas.style.height=`${n}px`);let a=this._viewScale(),o=this.center.x-e/2/a.x,s=this.center.y-n/2/a.y,c=Math.max(0,o),d=Math.max(0,s),l=Math.min(1,o+e/a.x),m=Math.min(1,s+n/a.y);if(this._ctx.setTransform(r,0,0,r,0,0),this._ctx.clearRect(0,0,e,n),l>c&&m>d){this._ctx.imageSmoothingEnabled=!0,this._ctx.imageSmoothingQuality=`high`;let u=this.map_image.width,y=this.map_image.height;this._ctx.drawImage(this.map_image,c*u,d*y,(l-c)*u,(m-d)*y,(c-o)*a.x,(d-s)*a.y,(l-c)*a.x,(m-d)*a.y)}if(this.debug){this._drawDebugInfo(a,o,s);let u=performance.now();this.debug_info.last_draw_ms=u-i,this._debug_draw_count++,u-this._debug_count_start>=1e3&&(this.debug_info.draws_last_second=this._debug_draw_count,this._debug_draw_count=0,this._debug_count_start=u)}this._updateOverlayPositions()}_drawDebugInfo(i,e,n){if(!this.map)return;let r=this._ctx,a=this.container.clientWidth||1,o=this.container.clientHeight||1,s=m=>(m-e)*i.x,c=m=>(m-n)*i.y;r.strokeStyle=`#f0f`,r.lineWidth=2,r.strokeRect(s(0),c(0),i.x,i.y),r.strokeStyle=`rgba(0, 200, 255, 0.6)`,r.lineWidth=1;for(let[,m]of this.map.element_bounds){let u=s(m.x),y=c(m.y),A=m.w*i.x,Q=m.h*i.y;u+A<0||y+Q<0||u>a||y>o||r.strokeRect(u,y,A,Q)}let d=this.debug_info.highlight_id||this.debug_info.hover_id,l=d?this.map.element_bounds.get(d):null;if(l){let m=s(l.x),u=c(l.y);r.fillStyle=`rgba(255, 0, 255, 0.25)`,r.fillRect(m,u,l.w*i.x,l.h*i.y);let y=`#${d}`;r.font=`12px monospace`,r.fillStyle=`rgba(0, 0, 0, 0.7)`,r.fillRect(m,u-16,r.measureText(y).width+8,16),r.fillStyle=`#fff`,r.fillText(y,m+4,u-4)}r.strokeStyle=`#f00`,r.lineWidth=1,r.beginPath(),r.moveTo(a/2-8,o/2),r.lineTo(a/2+8,o/2),r.moveTo(a/2,o/2-8),r.lineTo(a/2,o/2+8),r.stroke()}_updateOverlayPositions(){if(!this.map?.element_bounds)return;let i=this.container.clientWidth||1,e=this.container.clientHeight||1,n=this._viewScale(),r=c=>({x:(c.x-this.center.x)*n.x+i/2,y:(c.y-this.center.y)*n.y+e/2}),a=(c,d)=>{c.last_display!==d&&(c.last_display=d,c.element.style.display=d)},o=(c,d)=>{c.last_transform!==d&&(c.last_transform=d,c.element.style.transform=d)},s=(c,d,l)=>{let m=`${d} ${l}`;c.last_size!==m&&(c.last_size=m,c.element.style.width=d,c.element.style.height=l)};for(let c of this._overlay_instances){let{overlay:d}=c;if(d.min_zoom&&this.zoom<d.min_zoom){a(c,`none`);continue}let l$3;if(typeof d.ref==`string`){if(l$3=this.map.element_bounds.get(d.ref),!l$3){a(c,`none`);continue}}else l$3=l({w:0,h:0},d.ref);if(a(c,``),d.type===`box`&&l$3.w>0&&l$3.h>0){let m=r({x:l$3.x,y:l$3.y});o(c,`translate(${m.x}px, ${m.y}px)`),s(c,`${l$3.w*n.x}px`,`${l$3.h*n.y}px`)}else{let m=r({x:l$3.x+l$3.w/2,y:l$3.y+l$3.h/2});s(c,``,``),o(c,d.scale_with_zoom?`translate(${m.x}px, ${m.y}px) translate(-50%, -50%) scale(${this.zoom})`:`translate(${m.x}px, ${m.y}px) translate(-50%, -50%)`)}}}_handleActionEvent(i,e){if(!this.map_image||!this.map?.element_bounds||this._pan_exceeded_threshold)return;if(i===`click`&&this._action_pointerdown_pos){let d=e.clientX-this._action_pointerdown_pos.x,l=e.clientY-this._action_pointerdown_pos.y;if(Math.hypot(d,l)>5)return}let n=this._eventToMap(e);if(n.x<0||n.x>1||n.y<0||n.y>1)return;let r=null,a=Number.POSITIVE_INFINITY;for(let d of this._actions){if(!d.events.includes(i))continue;if(d.ref===`*`){r||(r=d);continue}let l=this.map.element_bounds.get(d.ref);if(!l||n.x<l.x||n.x>l.x+l.w||n.y<l.y||n.y>l.y+l.h)continue;let m=l.w*l.h;(!r||r.ref===`*`||(d.priority||0)>(r.priority||0)||(d.priority||0)===(r.priority||0)&&m<a)&&(r=d,a=m)}if(!r)return;let o=Date.now(),s=`${r.ref}:${i}`;o-(this._action_last_triggered.get(s)||0)<300||(this._action_last_triggered.set(s,o),r.callback(n))}_notifyViewChange(){!this.onViewChange||this._notify_frame_id!==null||(this._notify_frame_id=requestAnimationFrame(()=>{this._notify_frame_id=null,this.onViewChange?.({zoom:this.zoom,center:l({},this.center)})}))}};function He(t,i){if(!t)return i;try{return JSON.parse(t)}catch{return i}}function sc(t){let i=!!t?.extension_data?.requires_manual_approval;return t?.approved!==!1?`pending`:i?`approval_required`:t.process_state===`wait_list`?`waitlist`:`pending`}function Ua(t){let i=t.other_data||{};return{id:t.id,map_id:t.map_id||i.map_id||``,level_id:t.zone_id,name:t.identifier||i.name||``,height:+(i.height||3),notes:t.notes||``,zones:t.zones||[t.zone_id].filter(e=>e),tags:t.tags||He(i.tags,[]),images:He(i.images,[])}}function Ga(t,i){let e=t.other_data||{},n=t.parent_id||``,r=i.find(a=>a.id===n);return{id:t.id,bank_id:n,map_id:t.map_id||e.map_id,assigned_to:t.assigned_to||e.assigned_to,assigned_name:t.assigned_name||e.assigned_name,name:t.identifier||e.name||``,accessible:e.accessible===`true`,bookable:t.bookable!==!1,position:He(e.position,[0,0]),size:He(e.size,[1,1]),bank:r,zone:r?.zone,features:t.features||He(e.features,[])}}var Va=t=>`${(t.extension_data?.group_members||[]).find(n=>n?.email===t.asset_id)?.name||``}`.trim()||``;var ja=t=>`${((t.attendees||[]).find(n=>n?.email===t.asset_id)||t.attendees?.[0])?.name||``}`.trim()||``;var Wa=t=>{if(!t.includes(`@`))return t;let[i]=t.split(`@`),e=i.replace(/[._-]+/g,` `).replace(/\s+/g,` `).trim();return e?e.replace(/\b\w/g,n=>n.toUpperCase()):t};var cc=t=>{let i=`${t?.asset_id||``}`.trim(),e=Va(t);if(e)return e;let n=ja(t);if(n)return n;let r=`${t?.extension_data?.visitor_name||t?.asset_name||``}`.trim(),a=[`${t?.title||``}`.trim().toLowerCase(),`${t?.description||``}`.trim().toLowerCase()].filter(o=>!!o);return r&&r.toLowerCase()!==i.toLowerCase()&&!a.includes(r.toLowerCase())?r:Wa(i||r||`Visitor`)};function dc(t,i){let e=``,n=``;if(t instanceof so$1){e=t.booking_type===`visitor`?t.extension_data?.location||``:t.location||t.asset_name||``,e.startsWith(`unallocated`)&&(e=``);let r=i.levelWithID(t.zones);n=r?.display_name||r?.name||``}else{e=t.location||t.space?.display_name||t.space?.name||t.system?.name||``;let r=i.levelWithID([...t.system?.zones||[]]);n=t.space?.level?.display_name||t.space?.level?.name||r?.display_name||r?.name||``}return e&&n?`${e} - ${n}`:e||n||``}async function lc(t,i,e=[]){let n=await gr(t),r=c=>{let d=n.element_bounds.get(c);return d?{x:d.x+d.w/2,y:d.y+d.h/2}:null},a=(typeof i==`string`?r(i):i)||{x:.5,y:.5},o=10,s=``;for(let c of e){let{x:d,y:l}=r(c)||{x:2,y:2},m=Math.sqrt((d-a.x)*(d-a.x)+(l-a.y)*(l-a.y));m<o&&(o=m,s=c)}return s}function mc(t){let i=t.date||t.event_start*1e3,e=t.duration??(t.event_end-t.event_start)/60,n=t.recurrence?.pattern?Mf(Af(t.recurrence),i):{},r=[t.system,...t.resources||[]].filter(s=>!!s?.id),{system_id:a}=t,o=Ah([...r.map(s=>s.id),a].filter(s=>!!s));return new so$1(m(l({id:t.id,user_id:t.organiser?.id||t.host,user_email:t.host,user_name:t.organiser?.name||t.host,title:t.title||void 0,date:i,duration:e,all_day:t.all_day,timezone:t.timezone,asset_id:o[0],asset_ids:o,asset_name:t.system?.display_name||t.system?.name,zones:Ah(r.flatMap(s=>s.zones||[])),booking_type:`room`,approved:t.status===`approved`},n),{extension_data:l({},t)}))}async function Ha(t,i){if(!i)return[];let n=(await rr([i]).catch(()=>[])).map(Ua);for(let r of n)r.zone=t.levelWithID(r.zones||[]);return n}async function Ka(t,i,e){if(!i)return[];let r=(await ar([i]).catch(()=>[])).map(a=>Ga(a,e));for(let a of e){let o=m(l({},a),{lockers:[]});a.lockers=r.filter(s=>s.bank_id===a.id).map(s=>m(l({},s),{bank:o}))}return r.filter(a=>a.bank)}async function uc(t,i){return Ka(t,i,await Ha(t,i))}var Ke=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new re;bulk={select:i=>this._select(i),deselect:i=>this._deselect(i),setSelection:i=>this._setSelection(i)};constructor(i=!1,e,n=!0,r){this._multiple=i,this._emitChanges=n,this.compareWith=r,e&&e.length&&(i?e.forEach(a=>this._markSelected(a)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){return this._select(i)}deselect(...i){return this._deselect(i)}setSelection(...i){return this._setSelection(i)}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_select(i){this._verifyValueAssignment(i),i.forEach(n=>this._markSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(i){this._verifyValueAssignment(i),i.forEach(n=>this._unmarkSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(i){this._verifyValueAssignment(i);let e=this.selected,n=new Set(i.map(a=>this._getConcreteValue(a)));i.forEach(a=>this._markSelected(a)),e.filter(a=>!n.has(this._getConcreteValue(a,n))).forEach(a=>this._unmarkSelected(a));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let n of e)if(this.compareWith(i,n))return n;return i}else return i}};var hi=(()=>{class t{_listeners=[];notify(e,n){for(let r of this._listeners)r(e,n)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(n=>e!==n)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(n){return new(n||t)};static ɵprov=Xt({token:t,factory:t.ɵfac})}return t})();var Za=[`trigger`];var eo=[`panel`];var to=[[[`mat-select-trigger`]],`*`];var io=[`mat-select-trigger`,`*`];function no(t,i){if(t&1&&(Vs(0,`span`,4),BT(1),Wl()),t&2){let e=sT();Iw(),iy(e.placeholder)}}function ro(t,i){t&1&&uT(0)}function ao(t,i){if(t&1&&(Vs(0,`span`,11),BT(1),Wl()),t&2){let e=sT(2);Iw(),iy(e.triggerValue)}}function oo(t,i){if(t&1&&(Vs(0,`span`,5),$b(1,ro,1,0)(2,ao,2,1,`span`,11),Wl()),t&2){let e=sT();Iw(),Gb(e.customTrigger?1:2)}}function so(t,i){if(t&1){let e=eT();Vs(0,`div`,12,1),Bm(`keydown`,function(r){sp(e);return ap(sT()._handleKeydown(r))}),uT(2,1),Wl()}if(t&2){let e=sT();NT(e.panelClass),Km(`mat-select-panel-animations-enabled`,!e._animationsDisabled)(`mat-primary`,e._parentFormField?.color===`primary`)(`mat-accent`,e._parentFormField?.color===`accent`)(`mat-warn`,e._parentFormField?.color===`warn`)(`mat-undefined`,!e._parentFormField?.color),Nm(`id`,e.id+`-panel`)(`aria-multiselectable`,e.multiple)(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e._getPanelAriaLabelledby())}}var co=new b(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let t=E(de$1);return()=>It(t)}});var lo=new b(`MAT_SELECT_CONFIG`);var xr=new b(`MatSelectTrigger`);var fi=class{source;value;constructor(i,e){this.source=i,this.value=e}};var Yc=(()=>{class t{_viewportRuler=E(A$2);_changeDetectorRef=E(md);_elementRef=E(Jt);_dir=E(V,{optional:!0});_idGenerator=E(Y$2);_renderer=E(Sr$1);_parentFormField=E(le$1,{optional:!0});ngControl=E(be$1,{self:!0,optional:!0});_liveAnnouncer=E(ut);_defaultOptions=E(lo,{optional:!0});_animationsDisabled=De();_popoverLocation;_initialized=new re;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let n=this.options.toArray()[e];if(n){let r=this.panel.nativeElement,a=Te$1(e,this.options,this.optionGroups),o=n._getHostElement();e===0&&a===1?r.scrollTop=0:r.scrollTop=Oe$1(o.offsetTop,o.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new fi(this,e)}_scrollStrategyFactory=E(co);_panelOpen=!1;_compareWith=(e,n)=>e===n;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new re;_errorStateTracker;stateChanges=new re;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=lt(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(jn$2.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Lv(()=>{let e=this.options;return e?e.changes.pipe(jv(e),ED(()=>Pv(...e.map(n=>n.onSelectionChange)))):this._initialized.pipe(ED(()=>this.optionSelectionChanges))});openedChange=new wt;_openedStream=this.openedChange.pipe(zr(e=>e),et(()=>{}));_closedStream=this.openedChange.pipe(zr(e=>!e),et(()=>{}));selectionChange=new wt;valueChange=new wt;constructor(){let e=E(me),n=E(Sc,{optional:!0}),r=E(xc,{optional:!0}),a=E(new wy(`tabindex`),{optional:!0}),o=E(Ht,{optional:!0}),s=E(Et,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new J$1(e,s||this.ngControl,r,n,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=o?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new Ke(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Bv(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Bv(this._destroy)).subscribe(e=>{e.added.forEach(n=>n.select()),e.removed.forEach(n=>n.deselect())}),this.options.changes.pipe(jv(null),Bv(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),n=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute(`aria-labelledby`,e):r.removeAttribute(`aria-labelledby`)}n&&(this._previousControl!==n.control&&(this._previousControl!==void 0&&n.disabled!==null&&n.disabled!==this.disabled&&(this.disabled=n.disabled),this._previousControl=n.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Jn$1(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{n(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,n=this._renderer.listen(e,`animationend`,a=>{a.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(n=>n.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let n=e.keyCode,r=n===40||n===38||n===37||n===39,a=n===13||n===32,o=this._keyManager;if(!o.isTyping()&&a&&!Pe(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;o.onKeydown(e);let c=this.selected;c&&s!==c&&this._liveAnnouncer.announce(c.viewValue,1e4)}}_handleOpenKeydown(e){let n=this._keyManager,r=e.keyCode,a=r===40||r===38,o=n.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!o&&(r===13||r===32)&&n.activeItem&&!Pe(e))e.preventDefault(),n.activeItem._selectViaInteraction();else if(!o&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(c=>!c.disabled&&!c.selected);this.options.forEach(c=>{c.disabled||(s?c.select():c.deselect())})}else{let s=n.activeItemIndex;n.onKeydown(e),this._multiple&&a&&e.shiftKey&&n.activeItem&&n.activeItemIndex!==s&&n.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Pe(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(n=>n.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(n=>this._selectOptionByValue(n)),this._sortValues();else{let n=this._selectOptionByValue(e);n?this._keyManager.updateActiveItem(n):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let n=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return n&&this._selectionModel.select(n),n}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof zt?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new z(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Pv(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Bv(e)).subscribe(n=>{this._onSelect(n.source,n.isUserInput),n.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Pv(...this.options.map(n=>n._stateChanges)).pipe(Bv(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,n){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),n&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),n&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((n,r)=>this.sortComparator?this.sortComparator(n,r,e):e.indexOf(n)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let n;this.multiple?n=this.selected.map(r=>r.value):n=this.selected?this.selected.value:e,this._value=n,this.valueChange.emit(n),this._onChange(n),this.selectionChange.emit(this._getChangeEvent(n)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let n=0;n<this.options.length;n++)if(!this.options.get(n).disabled){e=n;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,n=e?e+` `:``;return this.ariaLabelledby?n+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute(`aria-describedby`,e.join(` `)):n.removeAttribute(`aria-describedby`)}onContainerClick(e){let n=b$1(e);n&&(n.tagName===`MAT-OPTION`||n.classList.contains(`cdk-overlay-backdrop`)||n.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(n){return new(n||t)};static ɵcmp=YC({type:t,selectors:[[`mat-select`]],contentQueries:function(n,r,a){if(n&1&&Um(a,xr,5)(a,X,5)(a,ce$1,5),n&2){let o;dT(o=fT())&&(r.customTrigger=o.first),dT(o=fT())&&(r.options=o),dT(o=fT())&&(r.optionGroups=o)}},viewQuery:function(n,r){if(n&1&&$m(Za,5)(eo,5)(ci$1,5),n&2){let a;dT(a=fT())&&(r.trigger=a.first),dT(a=fT())&&(r.panel=a.first),dT(a=fT())&&(r._overlayDir=a.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(n,r){n&1&&Bm(`keydown`,function(o){return r._handleKeydown(o)})(`focus`,function(){return r._onFocus()})(`blur`,function(){return r._onBlur()}),n&2&&(Nm(`id`,r.id)(`tabindex`,r.disabled?-1:r.tabIndex)(`aria-controls`,r.panelOpen?r.id+`-panel`:null)(`aria-expanded`,r.panelOpen)(`aria-label`,r.ariaLabel||null)(`aria-required`,r.required.toString())(`aria-disabled`,r.disabled.toString())(`aria-invalid`,r.errorState)(`aria-activedescendant`,r._getAriaActiveDescendant()),Km(`mat-mdc-select-disabled`,r.disabled)(`mat-mdc-select-invalid`,r.errorState)(`mat-mdc-select-required`,r.required)(`mat-mdc-select-empty`,r.empty)(`mat-mdc-select-multiple`,r.multiple)(`mat-select-open`,r.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,q_],disableRipple:[2,`disableRipple`,`disableRipple`,q_],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:Z_(e)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,q_],placeholder:`placeholder`,required:[2,`required`,`required`,q_],multiple:[2,`multiple`,`multiple`,q_],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,q_],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,Z_],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,q_]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[QT([{provide:ae,useExisting:t},{provide:le,useExisting:t}]),Us],ngContentSelectors:io,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(n,r){if(n&1&&(cT(to),Vs(0,`div`,2,0),Bm(`click`,function(){return r.open()}),Vs(3,`div`,3),$b(4,no,2,1,`span`,4)(5,oo,3,1,`span`,5),Wl(),Vs(6,`div`,6)(7,`div`,7),vp(),Vs(8,`svg`,8),Am(9,`path`,9),Wl()()()(),Dm(10,so,3,16,`ng-template`,10),Bm(`detach`,function(){return r.close()})(`backdropClick`,function(){return r.close()})(`overlayKeydown`,function(o){return r._handleOverlayKeydown(o)})),n&2){let a=hT(1);Iw(3),Nm(`id`,r._valueId),Iw(),Gb(r.empty?4:5),Iw(6),xm(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,r._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,r._scrollStrategy)(`cdkConnectedOverlayOrigin`,r._preferredOverlayOrigin||a)(`cdkConnectedOverlayPositions`,r._positions)(`cdkConnectedOverlayWidth`,r._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,r._popoverLocation)}},dependencies:[zt,ci$1],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2})}return t})();var Xc=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵdir=Uo$1({type:t,selectors:[[`mat-select-trigger`]],features:[QT([{provide:xr,useExisting:t}])]})}return t})();var Jc=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=na$1({type:t});static ɵinj=io$1({imports:[di$1,He$1,be$2,Vt,de$2,He$1]})}return t})();var kr=[];function Cr(t){for(let i of t)kr.find(({id:e})=>e===i.id)||kr.push(i)}var gi={};function Sr(t,i=!1){return t?((!gi[t]||i)&&(gi[t]=Jr$1(t,`assets_config`).then(e=>e.details instanceof Array?e.details:[]).catch(()=>[])),gi[t]):Promise.resolve([])}function Mr(t,i,e){let n=Date.now(),r=new Date(e.date),a=s=>t.name===s.name||t.category?.name.includes(s.name)||e.resources?.some(c=>c.zones?.includes(s.name))||e.space?.zones?.includes(s.name)||s.name===`*`,o=s=>s.rules.reduce((c,d$1)=>{switch(d$1[0]){case`is_before`:return c+(U(n,ni(r,d$1[1]))?1:0);case`within_hours`:return c+(ke(n,ni(r,d$1[1]))?1:0);case`after_hour`:return c+(ke(r,d(r,d$1[1]))?1:0);case`before_hour`:return c+(U(r,d(r,d$1[1]))?1:0);case`min_length`:return c+(e.duration>=Vl(d$1[1])?1:0);case`max_length`:return c+(e.duration<=Vl(d$1[1])?1:0);case`visitor_type`:return c+(e.ext(`visitor_type`)===d$1[1]?1:0);default:return c+1}},0);for(let s of i)if(a(s)&&o(s)<s.rules.length)return!1;return!0}function Ir(t,i){return Array.from(new Set([...Object.keys(t),...Object.keys(i)])).every(n=>Object.is(t[n],i[n]))}var fd=(()=>{class t{constructor(){this._org=E(Qe),this._settings_service=E(Y$1),this._injector=E(de$1),this._options=lt({date:Date.now()}),this._search=lt(``),this._category=lt([]),this._loading=lt(``),this._rules=lt([]),this._asset_list=lt(null),this._asset_bookings=lt([]),this._available_groups=lt([]),this._category_list=lt([]),this._settings=lt({}),this._network_requested=!1,this._network_consumed=lt(!1),this._asset_list_request=null,this._category_list_request=null,this._booking_requests=new Map,this._available_group_requests=new Map,this._settings_requests=new Map,this._options_debounced=pH(this._options,300,{injector:this._injector,equal:Ir}),this._requests_ready=Te(()=>{let e=this._org.active_building(),n=this._settings_service.overrides();return this._network_consumed()&&this._assetsEnabled()&&this._org.initialised()&&!!e?.id&&n.length>=(this._org.settings?.length||0)+2}),this.search=this._search.asReadonly(),this.category=this._category.asReadonly(),this.options=this._options.asReadonly(),this.loading=this._loading.asReadonly(),this.rules=Te(()=>(this._requestNetwork(),this._rules())),this.asset_list=Te(()=>(this._requestNetwork(),this._asset_list())),this.asset_bookings=Te(()=>(this._requestNetwork(),this._asset_bookings())),this.available_groups=Te(()=>(this._requestNetwork(),this._available_groups())),this.category_list=Te(()=>(this._requestNetwork(),this._category_list())),this.visible_category_ids=Te(()=>this._category_list().map(e=>e.id)),this.filtered_assets=Te(()=>{this._requestNetwork();let e=this._search().toLowerCase(),n=this._category(),r=this.visible_category_ids(),a=this._available_groups(),o=this._rules();return a.filter(s=>s.assets?.length&&r.includes(s.category_id)&&(!n.length||n.includes(s.category_id))&&(s.name.toLowerCase().includes(e)||s.description.toLowerCase().includes(e))&&Mr(s,o,this._options()))}),this.settings=Te(()=>(this._requestNetwork(),this._settings())),this.disabled_rooms=Te(()=>(this._requestNetwork(),this._settings().disabled_rooms||[])),ps(()=>{let e=this._options_debounced.value(),n=this._org.active_building();!this._requests_ready()||!n?.id||!e||oe(()=>{this._loadRules(e,n.id),this._loadAssetList(),this._loadAssetBookings(e),this._loadAvailableGroups(e,n.id),this._loadSettings(n.id),this._loadCategories()})}),ps(()=>{let e=this.visible_category_ids(),n=this._category(),r=n.filter(a=>e.includes(a));r.length!==n.length&&this._category.set(r)})}_requestNetwork(){this._network_requested||(this._network_requested=!0,queueMicrotask(()=>this._network_consumed.set(!0)))}_assetsEnabled(){return this._settings_service.get(`app.has_assets`)!==!1}setSearch(e){this._search.set(`${e}`)}toggleCategory(e){let n=oe(this._category);n.includes(e)?this._category.set(n.filter(r=>r!==e)):this._category.set([...n,e])}getOptions(){return this._options()}setOptions(e){let n=oe(this._options),r=l(l({},n),e);Ir(n,r)||this._options.set(r)}_appendLoading(e){this._loading.set(this._loading()+e)}_removeLoading(e){this._loading.set(this._loading().split(e).join(``))}async _loadRules(e,n){let r=e.zone||e.zone_id||n||``;this._appendLoading(`[Rules]`),this._rules.set(await Sr(r)),this._removeLoading(`[Rules]`)}async _loadAssetList(){return this._asset_list_request?this._asset_list_request:(this._appendLoading(`[Assets]`),this._asset_list_request=Zn().then(e=>(this._asset_list.set(e),e)).finally(()=>{this._asset_list_request=null,this._removeLoading(`[Assets]`)}),this._asset_list_request)}async _loadAssetBookings({zone:e,zone_id:n,date:r}){let a={zones:e||n||``,period_start:D(J(r)),period_end:D(Je(r)),type:`asset-request`},o=JSON.stringify(a),s=this._booking_requests.get(o);this._appendLoading(`[Bookings]`);let c=s||ce(a);s||this._booking_requests.set(o,c),this._asset_bookings.set(await c),c.finally(()=>this._booking_requests.delete(o)),this._removeLoading(`[Bookings]`)}async _loadAvailableGroups({zone:e,zone_id:n,date:r,duration:a,ignore:o},s){let c={zones:e||n||s||``,period_start:D(jn$1(r)),period_end:D(Vn(ct(r,a||30))),type:`asset-request`,rejected:!1},d=JSON.stringify({query:c,ignore:o}),l=this._available_group_requests.get(d),m=l||si(c,o).catch(A=>(console.error(A),[]));l||this._available_group_requests.set(d,m);let u=await m;m.finally(()=>this._available_group_requests.delete(d));let y=u.sort((A,Q)=>A.name.localeCompare(Q.name));Cr(y),this._available_groups.set(y)}async _loadCategories(){return this._category_list_request?this._category_list_request:(this._category_list_request=Jn().then(e=>(this._category_list.set(e.data.sort((n,r)=>n.name.localeCompare(r.name)).filter(n=>!n.hidden)),e)).finally(()=>this._category_list_request=null),this._category_list_request)}async _loadSettings(e){let n=this._settings_requests.get(e),r=n||Jr$1(e,`assets-settings`).then(a=>a.details||{}).catch(()=>({}));n||this._settings_requests.set(e,r),this._settings.set(await r),r.finally(()=>this._settings_requests.delete(e))}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵprov=A({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();var Cd=(()=>{class t extends Y{constructor(){super(),this._org=E(Qe),this._settings=E(Y$1),this._calendars=lt([]),this._calendars_request=null,this.calendar_list=this._calendars.asReadonly(),this.query=()=>ri(),this.freeBusy=e=>Ge(e,this._org),this.availability=e=>Ue(e),this._waitForOrg()}async init(){this._settings.get(`app.events.use_bookings`)||this._initialised.next(!0)}get calendars(){return this._calendars()}getFreeBusyDate(e,n){return Ge({period_start:D(J(e)),period_end:D(Je(e)),calendars:n},this._org)}async checkSpacesAvailability(e,n,r,a){let o=await Ue({period_start:n,period_end:r,system_ids:e.join(`,`)}),s=new Date(a?.date).valueOf(),c=ct(s,a?.duration).valueOf();return!!o.every(l=>{let m=l.availability;if(a&&l.id===a.system?.email){let u=m.findIndex(y=>y.date>=s&&ct(y.date,y.duration).valueOf()<=c);u!==-1&&m.splice(u,1)}return!m.length})}async loadCalendars(){this._calendars().length||(this._calendars_request=this._calendars_request||ri().then(e=>this._calendars.set(e)).catch(e=>{$t$1(`CalendarService`,`Failed to load calendars`,e,`warn`)}).finally(()=>this._calendars_request=null),await this._calendars_request)}_waitForOrg(){let e=()=>{if(this._org.initialised())return this.init();this.timeout(`init`,e,100)};e()}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵprov=A({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();function $t(t){let i=ph(t,`UTC`);return`${Kd(i,`yyyyMMdd`)}T${Kd(i,`HHmmss`)}Z`}function yi(t){return`${Kd(t,`yyyyMMdd`)}`}function qt(t){return(t||``).replace(/\\|;|,|\n/g,i=>{switch(i){case`\\`:return`\\\\`;case`;`:return`\\;`;case`,`:return`\\,`;case`
`:return`\\n`;default:return i}})}function Ed(t){if(!t)return`data:text/calendar;charset=utf8,`;let i=[],e=qt(`${t.body||``}${t.id?`

[ID|`+t.id+`]`:``}`),n=qt(`${t.location}`);i.push([`BEGIN`,`VCALENDAR`]),i.push([`VERSION`,`2.0`]),i.push([`BEGIN`,`VEVENT`]),i.push([`UID`,`${t.id||`uid-`+Date.now()}`]),i.push([`DTSTAMP`,$t(new Date)]),t.meeting_url&&i.push([`URL`,`${t.meeting_url}`]),t.all_day?(i.push([`DTSTART;VALUE=DATE`,yi(t.date)]),i.push([`DTEND;VALUE=DATE`,yi(rs$1(t.date,1))])):(i.push([`DTSTART`,$t(t.date)]),i.push([`DTEND`,$t(ct(t.date,t.duration||60))])),i.push([`SUMMARY`,qt(t.title)]),i.push([`DESCRIPTION`,e]),i.push([`LOCATION`,n]);let r=t.host||t.user_email||`no-reply@place.tech`,a=t.organiser?.name||r.split(`@`)[0]||`Staff`;i.push([`ORGANIZER`,`CN=${qt(a)}:mailto:${r}`]),i.push([`END`,`VEVENT`]),i.push([`END`,`VCALENDAR`]);let o=i.map(([c,d])=>`${c}:${d}`).join(`\r
`);return`data:text/calendar;charset=utf8,${encodeURIComponent(o)}`}function Od(t){let i=t.all_day?yi:$t,e={action:`TEMPLATE`,text:t.title,details:`${t.body||``}${t.id?`

[ID|`+t.id+`]`:``}`,location:t.location,trp:!1,dates:`${i(t.date)}/${i(ct(t.date,t.duration??60))}`},n=(t.attendees||[]).map(a=>a.email||a),r=((t.resources?.length?t.resources:null)||[t.system]).map(a=>a?.email||a);return(n.length||r.length)&&(e.add=Ah([...n,...r]).join()),`https://calendar.google.com/calendar/render?${w_(e)}`}function Er(t){return`${Kd(t,`yyyy-MM-dd`)}T${Kd(t,`HH:mm:ss`)}`}function Ad(t,i=`office`,e=`free`){t.date||(t.date=Date.now());let n={startdt:Er(t.date),enddt:Er(ct(t.date,t.duration??60)),subject:t.title,body:`${t.body||``}${t.id?`


[ID|`+t.id+`]`:``}`,location:t.location,allday:t.all_day??!1};t.all_day&&delete n.enddt;let r=(t.attendees||[]).map(o=>o.email||o),a=((t.resources?.length?t.resources:null)||[t.system]).map(o=>o?.email||o);return(r.length||a.length)&&(n.to=Ah([...r,...a]).filter(o=>!!o).join(`,`)),i===`office`?`https://outlook.office.com/calendar/deeplink/compose?${w_(n)}`:`https://outlook.live.com/calendar/deeplink/compose?${w_(n)}`}var mo=(t,i)=>i.booking_start;function uo(t,i){if(t&1&&(Vs(0,`tr`,10)(1,`td`,15),BT(2),i_(3,`date`),Wl(),Vs(4,`td`,15),BT(5),i_(6,`date`),i_(7,`date`),Wl()()),t&2){let e=i.$implicit;Iw(2),Kl(` `,c_(3,3,e.booking_start*1e3,`EEE, MMM d, yyyy`),` `),Iw(3),sy(` `,c_(6,6,e.booking_start*1e3,`h:mm a`),` - `,c_(7,9,e.booking_end*1e3,`h:mm a`),` `)}}async function zd(t,i){let e=i.open(po,{data:t});return Promise.race([e.componentInstance.event.pipe(Df(n=>n.reason===`done`)).toPromise(),e.afterClosed().toPromise()])}var po=(()=>{class t{constructor(){this.event=new wt,this._data=E($e),this._dialog_ref=E(T)}get clashes(){return this._data.clashes||[]}onConfirm(){this.event.emit({reason:`done`}),this._dialog_ref.close({reason:`done`})}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=YC({type:t,selectors:[[`placeos-recurring-clash-modal`]],outputs:{event:`event`},decls:35,vars:21,consts:[[1,`relative`],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`h-14`,`w-[calc(100%-1rem)]`,`min-w-[20rem]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[1,`flex`,`max-h-[60vh]`,`w-full`,`max-w-[calc(100vw-2rem)]`,`flex-col`,`items-center`,`space-y-4`,`overflow-auto`,`px-4`,`py-2`,`sm:max-w-md`],[1,`border-base-200`,`bg-warning`,`text-warning-content`,`flex`,`items-center`,`space-x-2`,`rounded-xl`,`border`,`p-2`,`shadow-sm`],[1,`text-5xl`],[1,`border-base-300`,`bg-base-100`,`max-h-48`,`w-full`,`overflow-auto`,`rounded-sm`,`border`],[1,`w-full`,`text-sm`],[1,`bg-base-200`,`sticky`,`top-0`],[1,`p-2`,`text-left`],[1,`border-base-300`,`border-t`],[1,`text-base-content/70`,`text-center`,`text-xs`],[1,`bg-base-200`,`sticky`,`bottom-0`,`m-2`,`flex`,`items-center`,`justify-center`,`space-x-2`,`rounded-sm`,`border-none`,`p-2`],[`btn`,``,`matRipple`,``,`mat-dialog-close`,``,1,`inverse`,`bg-base-100`,`flex-1`],[`btn`,``,`matRipple`,``,1,`flex-1`,3,`click`],[1,`p-2`]],template:function(n,r){n&1&&(Vs(0,`div`,0)(1,`header`,1)(2,`h2`,2),BT(3),i_(4,`translate`),Wl()(),Vs(5,`main`,3)(6,`div`,4)(7,`icon`,5),BT(8,`warning`),Wl(),Vs(9,`p`),BT(10),i_(11,`translate`),Wl()(),Vs(12,`div`,6)(13,`table`,7)(14,`thead`,8)(15,`tr`)(16,`th`,9),BT(17),i_(18,`translate`),Wl(),Vs(19,`th`,9),BT(20),i_(21,`translate`),Wl()()(),Vs(22,`tbody`),qb(23,uo,8,12,`tr`,10,mo),Wl()()(),Vs(25,`p`,11),BT(26),i_(27,`translate`),Wl()(),Vs(28,`footer`,12)(29,`button`,13),BT(30),i_(31,`translate`),Wl(),Vs(32,`button`,14),Bm(`click`,function(){return r.onConfirm()}),BT(33),i_(34,`translate`),Wl()()()),n&2&&(Iw(3),Kl(` `,a_(4,7,`BOOKINGS.RECURRING_CLASHES_TITLE`),` `),Iw(7),Kl(` `,a_(11,9,`BOOKINGS.RECURRING_CLASHES_MSG`),` `),Iw(7),Kl(` `,a_(18,11,`FORM.DATE`),` `),Iw(3),Kl(` `,a_(21,13,`COMMON.TIME`),` `),Iw(3),Zb(r.clashes),Iw(3),Kl(` `,a_(27,15,`BOOKINGS.RECURRING_CLASHES_CONFIRM`),` `),Iw(4),Kl(` `,a_(31,17,`COMMON.CANCEL`),` `),Iw(3),Kl(` `,a_(34,19,`BOOKINGS.CONTINUE_BOOKING`),` `))},dependencies:[at,Ht$1,Bt,Mt,yt,f,kS],encapsulation:2})}}return t})();var _o=[`input`];var ho=[`formField`];var fo=[`*`];var Lt=class{source;value;constructor(i,e){this.source=i,this.value=e}};var go={provide:rt,useExisting:Gi(()=>bo),multi:!0};var Or=new b(`MatRadioGroup`);var yo=new b(`mat-radio-default-options`,{providedIn:`root`,factory:()=>({color:`accent`,disabledInteractive:!1})});var bo=(()=>{class t{_changeDetector=E(md);_value=null;_name=E(Y$2).getId(`mat-radio-group-`);_selected=null;_isInitialized=!1;_labelPosition=`after`;_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new wt;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e===`before`?`before`:`after`,this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(n=>{n.checked=this.value===n.value,n.checked&&(this._selected=n)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new Lt(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static ɵfac=function(n){return new(n||t)};static ɵdir=Uo$1({type:t,selectors:[[`mat-radio-group`]],contentQueries:function(n,r,a){if(n&1&&Um(a,Ar,5),n&2){let o;dT(o=fT())&&(r._radios=o)}},hostAttrs:[`role`,`radiogroup`,1,`mat-mdc-radio-group`],inputs:{color:`color`,name:`name`,labelPosition:`labelPosition`,value:`value`,selected:`selected`,disabled:[2,`disabled`,`disabled`,q_],required:[2,`required`,`required`,q_],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,q_]},outputs:{change:`change`},exportAs:[`matRadioGroup`],features:[QT([go,{provide:Or,useExisting:t}])]})}return t})();var Ar=(()=>{class t{_elementRef=E(Jt);_changeDetector=E(md);_focusMonitor=E(Ye);_radioDispatcher=E(hi);_defaultOptions=E(yo,{optional:!0});_ngZone=E(ye);_renderer=E(Sr$1);_uniqueId=E(Y$2).getId(`mat-radio-`);_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||`after`}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||`accent`}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new wt;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=De();_injector=E(de$1);constructor(){E(A$1).load(Rt$1);let e=E(Or,{optional:!0}),n=E(new wy(`tabindex`),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,n&&(this.tabIndex=Z_(n,0))}focus(e,n){n?this._focusMonitor.focusVia(this._inputElement,n,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,n)=>{e!==this.id&&n===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,`click`,this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new Lt(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let n=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),n&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,n;if(!e||!e.selected||this.disabled?n=this.tabIndex:n=e.selected===this?this.tabIndex:-1,n!==this._previousTabIndex){let r=this._inputElement?.nativeElement;r&&(r.setAttribute(`tabindex`,n+``),this._previousTabIndex=n,QI(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===r&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===r&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static ɵfac=function(n){return new(n||t)};static ɵcmp=YC({type:t,selectors:[[`mat-radio-button`]],viewQuery:function(n,r){if(n&1&&$m(_o,5)(ho,7,Jt),n&2){let a;dT(a=fT())&&(r._inputElement=a.first),dT(a=fT())&&(r._rippleTrigger=a.first)}},hostAttrs:[1,`mat-mdc-radio-button`],hostVars:19,hostBindings:function(n,r){n&1&&Bm(`focus`,function(){return r._inputElement.nativeElement.focus()}),n&2&&(Nm(`id`,r.id)(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null),Km(`mat-primary`,r.color===`primary`)(`mat-accent`,r.color===`accent`)(`mat-warn`,r.color===`warn`)(`mat-mdc-radio-checked`,r.checked)(`mat-mdc-radio-disabled`,r.disabled)(`mat-mdc-radio-disabled-interactive`,r.disabledInteractive)(`_mat-animation-noopable`,r._noopAnimations))},inputs:{id:`id`,name:`name`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],disableRipple:[2,`disableRipple`,`disableRipple`,q_],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:Z_(e)],checked:[2,`checked`,`checked`,q_],value:`value`,labelPosition:`labelPosition`,disabled:[2,`disabled`,`disabled`,q_],required:[2,`required`,`required`,q_],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,q_]},outputs:{change:`change`},exportAs:[`matRadioButton`],ngContentSelectors:fo,decls:13,vars:17,consts:[[`formField`,``],[`input`,``],[`mat-internal-form-field`,``,3,`labelPosition`,`for`],[1,`mdc-radio`],[1,`mat-mdc-radio-touch-target`],[`type`,`radio`,`aria-invalid`,`false`,1,`mdc-radio__native-control`,3,`change`,`id`,`checked`,`disabled`,`required`],[`aria-hidden`,`true`,1,`mdc-radio__background`],[1,`mdc-radio__outer-circle`],[1,`mdc-radio__inner-circle`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-radio-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-ripple-element`,`mat-radio-persistent-ripple`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(n,r){n&1&&(cT(),Vs(0,`label`,2,0)(2,`span`,3),Am(3,`span`,4),Vs(4,`input`,5,1),Bm(`change`,function(o){return r._onInputInteraction(o)}),Wl(),Vs(6,`span`,6),Am(7,`span`,7)(8,`span`,8),Wl(),Vs(9,`span`,9),Am(10,`span`,10),Wl()(),Vs(11,`span`,11),uT(12),Wl()()),n&2&&(xm(`labelPosition`,r.labelPosition)(`for`,r.inputId),Iw(2),Km(`mdc-radio--disabled`,r.disabled),Iw(2),xm(`id`,r.inputId)(`checked`,r.checked)(`disabled`,r.disabled&&!r.disabledInteractive)(`required`,r.required),Nm(`name`,r.name)(`value`,r.value)(`aria-label`,r.ariaLabel)(`aria-labelledby`,r.ariaLabelledby)(`aria-describedby`,r.ariaDescribedby)(`aria-disabled`,r.disabled&&r.disabledInteractive?`true`:null),Iw(5),xm(`matRippleTrigger`,r._rippleTrigger.nativeElement)(`matRippleDisabled`,r._isRippleDisabled())(`matRippleCentered`,!0))},dependencies:[yt,Ue$1],styles:[`.mat-mdc-radio-button {
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
`],encapsulation:2})}return t})();var cl=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=na$1({type:t});static ɵinj=io$1({imports:[Mt,Ar,be$2]})}return t})();export{ts as $,cc as A,ia as B,Xs as C,as as D,ar as E,er as F,ns as G,ks as H,es as I,rr as J,os as K,fd as L,cl as M,cs as N,bo as O,dc as P,tr as Q,gs as R,Xn as S,Ys as T,lc as U,is as V,mc as W,sc as X,rs as Y,ss as Z,Un as _,Ed as a,zd as at,Wa as b,Gn as c,Jc as d,uc as et,Ka as f,Ua as g,Od as h,Cs as i,ys as it,ce as j,bs as k,Ha as l,Nt as m,Ar as n,ws as nt,Fs as o,Na as p,ri as q,Cd as r,xs as rt,Ga as s,Ad as t,vs as tt,Ho as u,Uo as v,Yc as w,Xc as x,Ve as y,hr as z};
//# debugId=0b845711-f194-51a7-84bc-b6429ce2bbef
//# sourceMappingURL=chunk-Bb4hmZrT.js.map