import{n as m,r as n,t as l}from"./chunk-BwCtja5l.js";import{$ as Jn$1,$t as Vv,A as Ee,Bn as eb,Bt as T,C as Dm,Di as zi,Dn as ap,Dt as Pm,E,Gr as sT,H as Hs,Hr as re,Ir as ql,It as Rm,Jn as fe,Jt as Uv,Kt as Um,Lt as SD,Mn as cy,Mr as p_,Mt as Qb,N as FI,Nr as pt,Oi as zm,Or as oa$1,P as FT,Pn as d_,Q as Jm,Qn as gT,Rn as eS,S as Df,Si as yd,Sn as _t,Sr as m_,Ti as zT,Tr as nn,U as Hv,Ut as Ty,Wn as ey,Wr as rw,X as Jb,Xr as tn,Xt as VS,Y as J_,Yr as sp,Zr as tt,_r as km,ar as h_,bi as yT,bn as _e,bt as Om,c as A,cr as hs,h as Bv,ii as vT,ir as hT,k as ET,ki as zr,kr as oe,o as $s,oi as vp,pi as xH,pr as io,pt as Mw,q as Im,qn as fT,qt as Uo,sn as Xl,ti as uy,tn as Wm,un as Yb,vt as OS,w as Dp,wr as n_,zn as eT,zt as Sr$1}from"./chunk-BzRy2LMn.js";import{B as Q$1,Cn as ut,Et as cc,H as Qe$1,M as Kt,On as we,Pt as es,Q as Ve$1,Qt as lt,Sn as us$1,V as Qa$1,Vt as ic$1,W as Qr$1,_n as te$1,a as As$1,an as oc,bn as uc$1,cn as rc,dt as Y,et as Vr$1,fn as sc,gt as Zn$1,h as Gh,i as $t$1,jt as dt,k as Ka$1,kn as xt,q as Sh,st as Xh,t as $a$1,tn as mt,v as Hh,vn as tf,w as J,wn as v,yn as to,yt as ac}from"./chunk-BcAdeOCR.js";import{n as y}from"./chunk-DvtHWPP3.js";import{i as Kt$1,k as zt,m as V,t as I,v as ge}from"./chunk-BXb7Eop8.js";import{t as Et}from"./chunk-Dexfg6kX.js";import{$ as Ts,At as p_$1,Bt as ve,Ct as ld,F as H,Ft as so$1,G as O$1,J as Ol,Kt as ys,N as Fe,O as C,Ot as oa$2,Q as Te,Z as So,_t as fe$1,a as d,et as U,g as De,i as a,lt as b,m as $,r as f,st as _s,t as O,v as V$1,vt as g_,w as $$1,y as be}from"./main.js";import{D as z$1,T as ut$1,_ as b$1,h as Ye,l as Pe,m as Y$1,t as A$1}from"./chunk-DO7u6ymS.js";import{E as zt$1,n as A$2,o as Ht,p as Vt,s as It,v as ci$1,y as di$1}from"./chunk-DDdSxmIW.js";import{c as yt,r as Rt,t as Mt}from"./chunk-YEzmpn4x.js";import{a as Te$1,c as ce$1,i as Oe,l as le$1,n as He$1,o as Ue$1,r as J$1,s as X,u as me}from"./chunk-CjnrCtmz.js";import{c as T$1,i as Ht$1,n as Bt,t as $e}from"./chunk-De6wTNoc.js";import{a as de,i as ae,o as le$2}from"./chunk-CapvjZaO.js";var Lr=[`determinateSpinner`];function Pr(t,i){if(t&1&&(vp(),Hs(0,`svg`,11),km(1,`circle`,12),ql()),t&2){let e=fT();Rm(`viewBox`,e._viewBox()),Mw(),Jm(`stroke-dasharray`,e._strokeCircumference(),`px`)(`stroke-dashoffset`,e._strokeCircumference()/2,`px`)(`stroke-width`,e._circleStrokeWidth(),`%`),Rm(`r`,e._circleRadius())}}var Fr=new T(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:Un})});var Un=100;var Br=10;var Gn=(()=>{class t{_elementRef=E(nn);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let e=E(Fr),n=$(),r=this._elementRef.nativeElement;this._noopAnimations=n===`di-disabled`&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&n===`reduced-motion`&&r.classList.add(`mat-progress-spinner-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=Un;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Br)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(n){return new(n||t)};static ɵcmp=eb({type:t,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(n,r){if(n&1&&Wm(Lr,5),n&2){let a;yT(a=vT())&&(r._determinateCircle=a.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(n,r){n&2&&(Rm(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,r.mode===`determinate`?r.value:null)(`mode`,r.mode),FT(`mat-`+r.color),Jm(`width`,r.diameter,`px`)(`height`,r.diameter,`px`)(`--%NS%mat-progress-spinner-size`,r.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,r.diameter+`px`),ey(`_mat-animation-noopable`,r._noopAnimations)(`mdc-circular-progress--indeterminate`,r.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,eS],diameter:[2,`diameter`,`diameter`,eS],strokeWidth:[2,`strokeWidth`,`strokeWidth`,eS]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(n,r){if(n&1&&(Im(0,Pr,2,8,`ng-template`,null,0,m_),Hs(2,`div`,2,1),vp(),Hs(4,`svg`,3),km(5,`circle`,4),ql()(),Dp(),Hs(6,`div`,5)(7,`div`,6)(8,`div`,7),Pm(9,8),ql(),Hs(10,`div`,9),Pm(11,8),ql(),Hs(12,`div`,10),Pm(13,8),ql()()()),n&2){let a=ET(1);Mw(4),Rm(`viewBox`,r._viewBox()),Mw(),Jm(`stroke-dasharray`,r._strokeCircumference(),`px`)(`stroke-dashoffset`,r._strokeDashOffset(),`px`)(`stroke-width`,r._circleStrokeWidth(),`%`),Rm(`r`,r._circleRadius()),Mw(4),Om(`ngTemplateOutlet`,a),Mw(2),Om(`ngTemplateOutlet`,a),Mw(2),Om(`ngTemplateOutlet`,a)}},dependencies:[OS],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2})}return t})();var Vn=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=oa$1({type:t});static ɵinj=io({imports:[be]})}return t})();function jn(t,i){let e=v(t,i?.in);return e.setSeconds(59,999),e}function ri(t,i,e){return Ve$1(t,-i,e)}function Vr(t,i){if(t&1&&(Hs(0,`main`,2),km(1,`icon`,5)(2,`p`,6),ql()),t&2){let e=fT();Mw(),Om(`icon`,e.icon()),Mw(),Om(`innerHTML`,e.content(),FI)}}function jr(t,i){if(t&1&&(Hs(0,`main`,3)(1,`div`,7),km(2,`mat-spinner`,8),Hs(3,`p`),zT(4),ql()()()),t&2){let e=fT();Mw(4),cy(e.loading())}}function Wr(t,i){if(t&1){let e=sT();Hs(0,`footer`,4)(1,`button`,9),zT(2),d_(3,`translate`),ql(),Hs(4,`button`,10),Um(`click`,function(){sp(e);return ap(fT().onConfirm())}),zT(5),d_(6,`translate`),ql()()}if(t&2){let e=fT();Mw(2),Xl(` `,p_(3,2,e.cancel_text()),` `),Mw(3),Xl(` `,p_(6,4,e.confirm_text()),` `)}}var Hr={height:`auto`};async function Wo(t,i){let e=i.open(Kr,m(l({},Hr),{data:t}));return m(l({},await Promise.race([e.componentInstance.event.pipe(Df(n=>n.reason===`done`)).toPromise(),e.afterClosed().toPromise()])),{loading:n=>e.componentInstance.loading?.set(n),close:()=>e.close()})}var Kr=(()=>{class t extends y{constructor(){super(),this._dialog_ref=E(T$1),this._data=E($e),this.loading=pt(``),this.event=new _t,this.title=pt(this._data.title||`COMMON.CONFIRM`),this.content=pt(this._data.content||`Are you sure?`),this.confirm_text=pt(this._data.confirm_text||`COMMON.ACCEPT`),this.cancel_text=pt(this._data.cancel_text||`COMMON.CANCEL`),this.icon=pt(this._data.icon||{class:`material-symbols-rounded`,content:`done`}),this.disableClose=()=>this._dialog_ref.disableClose=!0,this.enableClose=()=>this._dialog_ref.disableClose=!1}ngOnInit(){this._data.close_delay&&this.timeout(`close`,()=>this._dialog_ref.close(),this._data.close_delay)}onConfirm(){this.event.emit({reason:`done`})}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=eb({type:t,selectors:[[`confirm-modal`]],features:[Dm],decls:6,vars:3,consts:[[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`h-14`,`w-[calc(100%-1rem)]`,`min-w-[20rem]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[1,`flex`,`w-md`,`max-w-[85vw]`,`flex-col`,`items-center`,`space-y-4`,`p-4`,`sm:h-auto`],[`loading`,``],[1,`bg-base-200`,`sticky`,`bottom-0`,`m-2`,`flex`,`items-center`,`justify-center`,`space-x-2`,`rounded-sm`,`border-none`,`p-2`],[1,`text-5xl`,3,`icon`],[`content`,``,1,`text-center`,3,`innerHTML`],[1,`flex`,`h-48`,`w-full`,`flex-col`,`items-center`,`justify-center`,`space-y-4`],[`diameter`,`32`],[`btn`,``,`matRipple`,``,`mat-dialog-close`,``,1,`inverse`,`bg-base-100`,`flex-1`],[`btn`,``,`matRipple`,``,`name`,`accept`,1,`flex-1`,3,`click`]],template:function(n,r){n&1&&(Hs(0,`header`,0)(1,`h2`,1),zT(2),ql()(),Yb(3,Vr,3,2,`main`,2)(4,jr,5,1,`main`,3),Yb(5,Wr,7,6,`footer`,4)),n&2&&(Mw(2),cy(r.title()),Mw(),Qb(r.loading()?4:3),Mw(2),Qb(r.loading()?-1:5))},dependencies:[Vn,Gn,O,Mt,yt,Ht$1,Bt,f],encapsulation:2})}}return t})();var Ue=`/api/staff/v1/calendars`;async function ai(){return(await te$1(Ue)).map(i=>new So(i))}async function Ge(t){let i=ld(t);return(await te$1(`${Ue}/availability${i?`?`+i:``}`)).map(n=>new So(n))}var Qr=(t,i)=>t.filter(e=>!!e.resource).map(e=>new ve(m(l({},e.resource),{level:i?.levelWithID(e.resource.zones),availability:e.availability}))).filter(e=>e.bookable);async function Xo(t){let i=ld(t);return await te$1(`${Ue}/free_busy${i?`?`+i:``}`)}async function Ve(t,i){let e=ld(t);return Qr((await te$1(`${Ue}/free_busy${e?`?`+e:``}`)).map(r=>new So(r)),i)}async function Jo(t){return await te$1(`${Ue}/${encodeURIComponent(t)}/permission`)}var te=`/api/staff/v1/events`;var Yr=H.raw||H.version||H.hash;function Xr(){return Ts(`app.name`)||Ts(`app.short_name`)||`PlaceOS`}function Wn(t){return m(l({},t),{extension_data:m(l({},t.extension_data||{}),{app_name:Xr(),app_version:Yr})})}async function as(t){return Jr(t).catch(()=>[])}async function Jr(t){return(await Zr(t)).events}async function Zr(t){let i=ld(t),e=`${te}${i?`?`+i:``}`,n=await te$1(e),r=Qa$1(new URL(e,document.baseURI).href)[`x-calendar-issue`]||``;return{events:n.map(a=>new ys(a)),failed_calendars:r.split(`,`).map(a=>a.trim().toLowerCase()).filter(Boolean)}}async function ea(t){return new ys(await Vr$1(`${te}`,new ys(Wn(t)).toJSON()))}async function ta(t,i,e={},n=`patch`){let r=ld(e);return new ys(await(n===`patch`?Ka$1:Qr$1)(`${te}/${encodeURIComponent(t)}${r?`?`+r:``}`,new ys(Wn(i)).toJSON()))}var os=async(t,i)=>{let e=t.update_master&&t.recurring_event_id||t.id;return delete t?.status,e?ta(e,m(l({},t),{id:e}),i):ea(t)};function ss(t,i={}){let e=ld(i);return to(`${te}/${encodeURIComponent(t)}${e?`?`+e:``}`,{response_type:`void`})}async function cs(t,i,e,n={}){let r=ld(m(l({},n),{state:e}));return new _s(await Vr$1(`${te}/${encodeURIComponent(t)}/guests/${i}/checkin${r?`?`+r:``}`,``))}async function ls(t,i,e={}){let n=ld(e);return new _s(await Vr$1(`${te}/${encodeURIComponent(t)}/attendee${n?`?`+n:``}`,i))}async function ds(t,i,e={}){let n=ld(e);return new _s(await to(`${te}/${encodeURIComponent(t)}/attendee/${encodeURIComponent(i.email)}${n?`?`+n:``}`))}async function ms(t,i,e={}){let n=ld(l({},e));return await te$1(`${te}/${encodeURIComponent(t)}/metadata/${encodeURIComponent(i)}${n?`?`+n:``}`)}async function us(t,i,e,n,r,a=[0,0]){let o=dt(i,e).valueOf(),[s,c]=await Promise.all([Ge({system_ids:t.join(),period_start:b(i),period_end:b(o)}).catch(()=>[]),n&&t.includes(n)?Ve({period_start:b(i),period_end:b(o),system_ids:n}):Promise.resolve([])]),l=t.map(d=>!!s.find(m=>m.id===d||m.resource?.id===d));for(let d of c){if(!t.includes(d.id))continue;let m=d.availability.filter(_=>!(_.date===a[0]&&_.duration===a[1]));l[t.indexOf(d.id)]=!m.find(_=>_.status!==`free`)}return l}async function ps(t,i={}){let e=ld(m(l({},i),{limit:1e4}));try{let n=await Vr$1(`${te}/clashing-assets${e?`?`+e:``}`,t.toJSON());return i.include_clash_time,n}catch{return[]}}function xs(t,i,e=Ts(`app.parking.waitlist_week_start`)){let n=e?.day??5,r=e?.hour??18,a$1=e?.minute??0,o=Ts(`app.bookings.use_building_timezone`)||Ts(`app.parking.use_building_timezone`)?i:``,s=Date.now(),c=o?Y(s,o):new Date(s),l=lt(mt(c,{weekStartsOn:n}),{hours:r,minutes:a$1,seconds:0,milliseconds:0});c<l&&(l=a(l,7));let d=us$1(l,7),m=_=>o?ut(_,o).valueOf():_.valueOf();return t.valueOf()>=m(l)&&t.valueOf()<m(d)}var z=`/api/staff/v1/bookings`;var ia=H.raw||H.version||H.hash;function Qn(){return Ts(`app.name`)||Ts(`app.short_name`)||`PlaceOS`}function We(){return`${Qn()}_${H.hash}_${O$1().email||``}`}function oi(t){let i=l({},t instanceof so$1?t.toJSON():t);return delete i.created_at,m(l({},i),{extension_data:m(l({},i.extension_data||{}),{app_name:Qn(),app_version:ia})})}async function ce(t){return Yn(t).catch(()=>[])}async function Yn(t){let i=ld(t);return(await te$1(`${z}${i?`?`+i:``}`)).map(n=>new so$1(n))}async function na(t,i){try{let{data:e,next:n,total:r}=await $t$1({query_params:m(l({},t),{limit:Math.max(200,i||0)}),endpoint:z,path:`booked`}),a=[...e],o=1;for(;n&&(!r||a.length<r)&&o<=Xn;){let s=await n();e=s.data,n=s.next,r=s.total,a=[...a,...e],o+=1}return Hh(a)}catch{return[]}}async function ks(t,i={}){let e=ld(m(l({},i),{limit:1e3}));try{let n=await Vr$1(`${z}/clashing-assets${e?`?`+e:``}`,t.toJSON()).catch(()=>[]);return i.include_clash_time,n}catch{return[]}}var Xn=50;async function Ss(t,i={}){let{signal:e}=i;try{if(e?.aborted)return[];let{data:n,next:r}=await $t$1({query_params:t,fn:s=>new so$1(s),endpoint:z,path:``}),a=[...n],o=1;for(;r&&o<=Xn;){if(e?.aborted)return[];let s=await r();n=s.data,r=s.next,a.push(...n),o+=1}return e?.aborted?[]:Hh(a,`id`)}catch{return[]}}async function Cs(t){return new so$1(await te$1(`${z}/${encodeURIComponent(t)}`))}function si(t){if(!t)throw new Error(`Missing parent booking id`);let i=Number(t);return Number.isSafeInteger(i)?i:t}async function Ie(t,i){let e=ld(m(l({},i),{utm_source:We()}));return new so$1(await Vr$1(`${z}${e?`?`+e:``}`,oi(t)))}async function Jn(t,i,e=`patch`){return new so$1(await(e===`patch`?Ka$1:Qr$1)(`${z}/${encodeURIComponent(t)}`,oi(i)))}async function ra(t,i,e,n=`patch`){return new so$1(await(n===`patch`?Ka$1:Qr$1)(`${z}/${encodeURIComponent(t)}/instance/${i}`,oi(e)))}var Ms=async(t,i)=>{let e=t.id;delete t.id;let n=i?.instance;return i&&delete i.instance,e?n?ra(e,t.instance||t.booking_start,t):Jn(e,t):Ie($a$1(t,[``,null,void 0])||{},i)};function je(t,i={}){if(i.instance)return aa(t,i.start_time);let e=ld({utm_source:We()});return to(`${z}/${encodeURIComponent(t)}?${e}`,{response_type:`void`})}function aa(t,i){let e=ld({utm_source:We()});return to(`${z}/${encodeURIComponent(t)}/instance/${i}?${e}`,{response_type:`void`})}async function oa(t,i){let e=ld({state:i});try{return new so$1(await Vr$1(`${z}/${encodeURIComponent(t)}/check_in?${e}&utm_source=${We()}`,``))}catch(n){let r=await n.json();throw r.error||r.message||r}}async function sa(t,i,e){let n=ld({state:e});try{return new so$1(await Vr$1(`${z}/${encodeURIComponent(t)}/check_in/${i}?${n}&utm_source=${We()}`,``))}catch(r){let a=await r.json();throw a.error||a.message||a}}async function Es(t,i){return!!t.instance||!!t.recurrence_type&&t.recurrence_type!==`none`?sa(t.id,t.instance||t.booking_start,i):oa(t.id,i)}async function Is(t,i,e,n,r=`room`){let a=await ce({type:r,period_start:b(i),period_end:b(dt(i,e))});return t.map(o=>!a.find(s=>(s.asset_id===o||s.asset_ids.includes(o))&&(!n||n!==s.id)))}async function ca(t,i){return t.from_bookings?t.linked_bookings.filter(n=>n.booking_type===i).map(n=>new so$1(n)):(await Yn({type:i,event_id:t.id,period_start:b(t.date),period_end:b(dt(t.date,t.duration)),limit:500})).filter(n=>n.extension_data?.parent_id===t.id)}function la(t,i){return t.from_bookings?[]:(t.linked_bookings||[]).filter(e=>{let n=e.extension_data?.parent_id;return e.booking_type===i&&!!n&&n!==t.id}).map(e=>e.id)}function da(t,i){return i.id&&t.extension_data?.details?.id===i.id||i.email&&t.attendees?.find(e=>e.email===i.email)?!0:!!t.asset_ids?.find(e=>i.items?.find(n=>n.item_ids?.includes(e)))}function Hn(t){let i=JSON.parse(JSON.stringify(t??null));return i&&typeof i==`object`&&delete i.deliver_at_time,JSON.stringify(i,(e,n)=>n&&typeof n==`object`&&!Array.isArray(n)?Object.fromEntries(Object.entries(n).sort(([r],[a])=>r<a?-1:1)):n)}function Kn(t=[]){return t.map(i=>i.email?.toLowerCase()).sort().join(`,`)}function ma(t,i){let e={};(t.booking_start!==i.booking_start||t.booking_end!==i.booking_end)&&(e.booking_start=i.booking_start,e.booking_end=i.booking_end,e.all_day=i.all_day);for(let r of[`title`,`description`,`asset_name`])t[r]!==i[r]&&(e[r]=i[r]);return t.user_email.toLowerCase()!==i.user_email.toLowerCase()&&(e.user_email=i.user_email),t.asset_id!==i.asset_id&&(e.asset_id=i.asset_id,e.asset_ids=i.asset_ids),[...t.zones].sort().join()!==[...i.zones].sort().join()&&(e.zones=i.zones),Kn(t.attendees)!==Kn(i.attendees)&&(e.attendees=i.attendees),!(Hn(t.extension_data?.details)!==Hn(i.extension_data?.details))&&!Object.keys(e).length?null:m(l({},e),{extension_data:i.extension_data})}function ua(t){return l(l({},Ol(t)),Ol(t.extension_data||{}))}async function As(t,i,e){let n=await ca(t,i),r=t.system?.zones||Hh(Xh(t.resources.map(s=>s.zones)))||[],a=new Set,o=[];try{for(let s of la(t,i))await je(s);for(let s of e){let c=n.find(y=>!a.has(y.id)&&da(y,s)),l$1=i===`catering-order`&&s.system_id?t.resources.find(y=>y.id===s.system_id||y.email===s.system_id):void 0,d=l$1?.id||s.system_id||s.email||s.id,m$1=l$1?.display_name||l$1?.name||s.name,_=new so$1({type:i,booking_type:i,date:t.date,duration:t.duration,description:t.title||s.name,user_email:t.host,asset_id:d,asset_name:m$1,title:t.title,attendees:s.email?[new Te(s)]:[],extension_data:l({parent_id:t.id,name:m$1,location_id:l$1?.id||t.location,details:s},i===`visitor`?ua(s):{}),zones:l$1?.zones||r});if(c){a.add(c.id);let y=ma(c,_);y&&await Jn(c.id,y);continue}o.push(t.from_bookings?await Ie(m(l({},_.toJSON()),{parent_id:si(t.id)})):await Ie(_.toJSON(),{ical_uid:t.ical_uid,event_id:t.id}))}for(let s of n)a.has(s.id)||await je(s.id)}catch(s){throw await Promise.all(o.filter(c=>!!c.id).map(c=>je(c.id).catch(()=>{}))),s}}function Dt(t,i=``){let e=i.trim().toLowerCase();return t.filter(n=>(n.name||``).trim().toLowerCase()===e).sort((n,r)=>(n.created_at||0)-(r.created_at||0))[0]}function _a(t){return m(l({},t),{data:t.data.filter(i=>!i?.hidden)})}async function ha(){let t=await ic$1({});return new Set(t.data.filter(i=>!i?.hidden).map(i=>i.id))}async function Zn(t={}){if(t.hidden===!0)return ic$1(t);let n$1=t,{hidden:i}=n$1;return _a(await ic$1(n(n$1,[`hidden`])))}async function fa(t={}){if(t.hidden===!0)return sc(t);let a=t,{hidden:i}=a,e=n(a,[`hidden`]),[n$2,r]=await Promise.all([sc(e),ha()]);return m(l({},n$2),{data:n$2.data.filter(o=>!o?.hidden&&r.has(o.category_id))})}async function er(t={}){if(t.hidden===!0)return rc(t);let o=t,{hidden:i}=o,e=n(o,[`hidden`]),[n$3,r]=await Promise.all([rc(e),fa(m(l({},e.zone_id?{zone_id:e.zone_id}:{}),{limit:2e3}))]),a=new Set(r.data.map(s=>s.id));return m(l({},n$3),{data:n$3.data.filter(s=>!s?.hidden&&a.has(s.asset_type_id))})}function tr(t){return t.id?uc$1(t.id,t):cc(t)}var Nt=new Map;var ga=[`period_start`,`period_end`,`type`,`rejected`];async function ya(t={}){let i=await rc(m(l({},t),{limit:t.limit||500})),e=i.total,n=[...i.data];for(;typeof i.next==`function`;){let r=i.next();if(!r)break;i=await r,e=i.total,n.push(...i.data)}return{total:e,next:()=>null,data:n}}async function ba(t={}){let i=JSON.stringify({zones:t.zones||t.zone_id||``,category_id:t.category_id||``,q:t.q||``,type_id:t.type_id||``});if(Nt.has(i))return Nt.get(i);let e=l({},t);for(let l of ga)l in e&&delete e[l];e.zones&&!e.zone_id&&(e.zone_id=e.zones),e.zones&&delete e.zones;let[n,r]=await Promise.all([sc(e),ya(e)]),a=n.data.filter(l=>!l?.hidden);e.type_id&&(a=a.filter(l=>l.id===e.type_id));let o=new Set(a.map(l=>l.id)),s=new Map;for(let l of r.data){if(l?.hidden||!o.has(l.asset_type_id))continue;let d=s.get(l.asset_type_id)||[];d.push(l),s.set(l.asset_type_id,d)}let c=a.map(l$2=>m(l({},l$2),{assets:s.get(l$2.id)||[]}));return Nt.set(i,c),setTimeout(()=>Nt.delete(i),300*1e3),c}function ir(t){return t.id?ac(t.id,t):oc(t)}async function ci(t,i=[]){let[e,n]=await Promise.all([ba(t),ce(m(l({},t),{type:`asset-request`}))]),r=n.filter(a=>a.status!==`declined`&&a.status!==`cancelled`);return e.map(a=>m(l({},a),{assets:a.assets.filter(o=>i?.includes(o.id)||!r.find(s=>!i.includes(s.id)&&(s.asset_id===o.id||s.asset_ids?.includes(o.id))))}))}function va(t,i){if((!t||t?.length<=0)&&i?.length)return[];if(!i)return[];let e=[];for(let n of t){let r=i.find(a=>a.id===n.id);(!r||r.ref_id!==n.ref_id)&&e.push(n.id)}return e}async function Vs({id:t,ical_uid:i,from_booking:e,from_bookings:n},{date:r,duration:a,all_day:o,host:s,location_name:c,location_id:l$3,zones:d,reset_state:m$2},_=[],y=!1){let U$1=await ce({period_start:b(r),period_end:b(dt(r,a)),type:`asset-request`,zones:d.join(`,`)}),A=!!(e||n),Ae=t&&(i||A)?(await ce({period_start:b(J(r)),period_end:b(Qe$1(r)),type:`asset-request`,email:s,event_id:A?``:t,ical_uid:i})).filter(f=>!A||String(f.extension_data?.parent_id)===String(t)):[],Pt=Ae.map(f=>[f.id,new U(f.extension_data.request)]);_?.forEach(f=>f.conflict=!1);let Oe=y?_.map(f=>f.id):va(_,Pt.map(([f,S])=>S));if(m$2){let f=Ae.filter(S=>S.approved||S.rejected);Oe=Hh([...Oe,...f.map(S=>S.extension_data.request_id)])}let vi=Pt.filter(([f,S])=>!Oe.includes(S.id)),Nr=Pt.filter(([f,{id:S}])=>Oe.includes(S)),Dr=_.filter(({id:f})=>Oe.includes(f)),de=Xh(U$1.filter(f=>!f.rejected&&(!Ae.find(S=>S.id===f.id)||vi.find(([S])=>f.event_id===S))).map(f=>f.asset_ids));for(let[f,S]of vi)de=[...de,...Xh(S.items.map(Ye=>Ye.item_ids))];let qr=await ci({period_start:b(r),period_end:b(dt(r,a)),type:`asset-request`,zones:(d||[]).join(`,`)},Ae.map(f=>f.id)),$r=Dr.map(f=>{let S=Xh(f.items.map(({id:Y,item_ids:Ft,quantity:Bt})=>{let Re=Ft||[],xi=qr.find(ki=>ki.id===Y)?.assets;if(!xi)return Re;let zt=[];return new Array(Bt).fill(0).map((ki,Xe)=>{let Ut=de.includes(Re[Xe])||zt.includes(Re[Xe])||!Re[Xe]?xi?.find(({id:Si})=>!de.includes(Si)&&!zt.includes(Si))?.id:Re[Xe];if(!Ut)throw f.conflict=!0,`Unable to find available asset for request`;return zt.push(Ut),Ut})}));if(!S.length||S.some(Y=>!Y))throw f.conflict=!0,`Unable to find available asset for request`;let Ye=Ae.find(Y=>Y.asset_ids.find(Ft=>f.items?.find(Bt=>Bt.item_ids?.includes(Ft))));de=[...de,...S];let wi={type:`asset-request`,booking_type:`asset-request`,date:r,duration:a,all_day:o,description:c,user_email:s,asset_id:S[0],asset_ids:S,asset_name:f.items.map(Y=>Y.name).join(`, `),title:f.items.map(Y=>Y.name).join(`, `),approved:!m$2&&Ye?.approved&&!f._changed,rejected:!m$2&&Ye?.rejected&&!f._changed,extension_data:{parent_id:t,request_id:f.id,location_id:l$3,request:new U(m(l({},f),{event:null}))},zones:d||[]};return()=>A?Ie(m(l({},new so$1(wi).toJSON()),{parent_id:si(t)})):Ie(new so$1(wi),{ical_uid:i,event_id:t})});return async()=>{await Promise.all(Nr.map(([f])=>je(f))),await Promise.all($r.map(f=>f()))}}var wa=`_LOCKERS_`;var xa=`_LOCKER_BANKS_`;var ka=`_LOCKERS_`;var li=null;var di=null;var mi=null;var ui=null;var He=null;var Tt=new Map;async function nr(){return He||(He=ic$1({hidden:!0,limit:500}).then(t=>t.data).catch(()=>[])),He}async function Sa(t){return Tt.has(t)||Tt.set(t,sc({category_id:t,limit:500}).then(i=>i.data).catch(()=>[])),Tt.get(t)}async function Ca(t){let i=Dt(await nr(),t);if(i||(He=null,i=Dt(await nr(),t),i))return i;let e=await tr({name:t,hidden:!0});return He=null,e}async function Ma(t,i){let e=Dt(await Sa(t),i);if(e)return e;let n=await ir({name:i,brand:`PlaceOS`,category_id:t});return Tt.delete(t),n}async function rr(t){return(await Ma((await Ca(wa)).id,t)).id}function Ea(){return li?Promise.resolve(li):(di||(di=rr(xa).then(t=>(li=t,t))),di)}function Ia(){return mi?Promise.resolve(mi):(ui||(ui=rr(ka).then(t=>(mi=t,t))),ui)}async function ar(t){if(!t?.length)return[];let i=await Ea();return Xh(await Promise.all(t.map(n=>rc({zone_id:n,type_id:i,limit:500}).then(r=>r.data))))}async function or(t){if(!t?.length)return[];let i=await Ia();return Xh(await Promise.all(t.map(n=>rc({zone_id:n,type_id:i,limit:500}).then(r=>r.data))))}var Aa=64;var Oa=64;var Ra=30*1e3;var Na=`PlaceOS.image-cache-v1`;var Da=`PlaceOS.image-cache-keys-v1`;var Q=new Map;var pi=new Map;var le=new Map;var sr=!1;function Ta(){if(!sr&&(sr=!0,typeof caches<`u`&&caches.delete(Na).catch(()=>!1),typeof sessionStorage<`u`))try{sessionStorage.removeItem(Da)}catch{}}function qa(t){let i=Q.get(t);if(i)return Q.delete(t),Q.set(t,i),i}function $a(t,i){let e=Q.get(t);for(e&&e!==i&&URL.revokeObjectURL(e),Q.delete(t),Q.set(t,i);Q.size>Aa;){let n=Q.keys().next().value;if(!n)break;let r=Q.get(n);Q.delete(n),r&&URL.revokeObjectURL(r)}return i}function La(t){for(le.delete(t),le.set(t,Date.now()+Ra);le.size>Oa;){let i=le.keys().next().value;if(!i)break;le.delete(i)}}function _i(t){let i=Q$1();document.cookie=`${i===`x-api-key`?`api-key=`+encodeURIComponent(Kt()):`bearer_token=`+encodeURIComponent(i)};max-age=30;path=${t};samesite=strict;${location.protocol===`https:`?`secure;`:``}`}function Pa(){let t=Q$1();return t===`x-api-key`?{"X-API-Key":Kt()}:{Authorization:`Bearer ${t}`}}function tc(t,i){return cr(t,()=>(_i(i),fetch(t)))}function ic(t){return cr(t,()=>fetch(t,{headers:Pa()}))}async function cr(t,i){Ta();let e=qa(t);if(e)return e;if((le.get(t)||0)>Date.now())throw new Error(`Image load is in retry cooldown`);le.delete(t);let r=pi.get(t);if(r)return r;let a=i().then(async o=>{if(!o?.ok)throw new Error(`Failed to fetch image: ${o?.status}`);return $a(t,URL.createObjectURL(await o.blob()))}).catch(o=>{throw La(t),o}).finally(()=>pi.delete(t));return pi.set(t,a),a}var lr=10;var dr=1;var Fa=.05;var mr=16;var ur=4;var pr=2;var _r=8192;function hr(){if(typeof window>`u`||!window.matchMedia)return!1;let t=window.matchMedia(`(pointer: coarse)`).matches,i=window.matchMedia(`(max-width: 1024px)`).matches;return t&&i}function Ba(t){return t.replace(/[!"#$%&'()*+,.\/;<=>?@[\\\]^`{|}~]/g,`\\$&`).split(` `).map(e=>e.replace(/^\\/,``)).join(` `)}function za(t){let i=0,e=0,n=0,r=0,a=t.getAttribute(`viewBox`);if(a){let o=a.split(/[\s,]+/).map(parseFloat);o.length>=4&&(i=o[0]||0,e=o[1]||0,n=o[2],r=o[3])}if(!n||!r){let o=t.getAttribute(`width`),s=t.getAttribute(`height`);n=o?parseFloat(o):0,r=s?parseFloat(s):0}if(!n||!r)try{let o=t.getBBox();i=o.x,e=o.y,n=o.width,r=o.height}catch{}return{x:i,y:e,width:n||1,height:r||1}}function Ua(t,i){let e=t.getBBox(),n=i&&t.getScreenCTM?.();if(!n)return e;let r=i.multiply(n),a=[{x:e.x,y:e.y},{x:e.x+e.width,y:e.y},{x:e.x,y:e.y+e.height},{x:e.x+e.width,y:e.y+e.height}].map(c=>({x:r.a*c.x+r.c*c.y+r.e,y:r.b*c.x+r.d*c.y+r.f})),o=Math.min(...a.map(c=>c.x)),s=Math.min(...a.map(c=>c.y));return{x:o,y:s,width:Math.max(...a.map(c=>c.x))-o,height:Math.max(...a.map(c=>c.y))-s}}var Ga=`http://www.w3.org/2000/svg`;function Va(t){for(let i of[t,...Array.from(t.querySelectorAll(`*`))]){if(i.namespaceURI!==Ga||i.localName===`script`||i.localName===`foreignObject`){i.remove();continue}for(let{name:e,value:n}of Array.from(i.attributes)){let r=n.replace(/[\s\u0000-\u001f]/g,``).toLowerCase();(e.toLowerCase().startsWith(`on`)||r.includes(`javascript:`))&&i.removeAttribute(e)}}}function ja(t){let i=new Map,e=new DOMParser().parseFromString(t,`image/svg+xml`).querySelector(`svg`);if(!(e instanceof SVGSVGElement))return{bounds:i,aspect_ratio:1};Va(e);let n=document.importNode(e,!0),r=document.createElement(`div`);r.style.position=`absolute`,r.style.visibility=`hidden`,r.style.pointerEvents=`none`,r.style.left=`-9999px`,r.style.top=`-9999px`,r.appendChild(n),document.body.appendChild(r);let{x:a,y:o,width:s,height:c}=za(n),l=s/c,d=n.getScreenCTM?.(),m=d?d.inverse():null;return n.querySelectorAll(`[id]`).forEach(y=>{let U=y.getAttribute(`id`);if(U&&typeof y.getBBox==`function`)try{let A=Ua(y,m);i.set(U,{x:(A.x-a)/s,y:(A.y-o)/c,w:A.width/s,h:A.height/c})}catch{}}),document.body.removeChild(r),{bounds:i,aspect_ratio:l}}var hi=class{constructor(){this.store=new Map}get(i){if(!this.store.has(i)){let e=this._load(i);e.catch(()=>this.store.delete(i)),this.store.set(i,e)}return this.store.get(i)}async _load(i){for(;!we();)await new Promise(l=>setTimeout(l,300));let e={},n=Q$1(),r=new URL(i,location.origin).origin===location.origin;n&&r&&(tf()?_i(`/`):e.headers=n===`x-api-key`?{"x-api-key":Kt()}:{Authorization:`Bearer ${n}`});let a=await fetch(i,e);if(!a.ok)throw new Error(`Failed to load map`);let o=await a.text(),{bounds:s,aspect_ratio:c}=ja(o);return{raw_data:o,element_bounds:s,aspect_ratio:c}}};var gr=new hi;function yr(t){return gr.get(t)}var fr=class{constructor(i){this.map_image=null,this.styles_string=``,this.center={x:.5,y:.5},this.zoom=1,this.fixed_resolution_megapixels=0,this.disable_zoom=!1,this.disable_pan=!1,this.onViewChange=null,this.debug=!1,this.debug_info={pointer:null,hover_id:``,highlight_id:``,last_draw_ms:0,draws_last_second:0},this._map_path=``,this._image_generation=0,this._texture_width=0,this._texture_height=0,this._image_frame_id=null,this._draw_frame_id=null,this._notify_frame_id=null,this._debug_draw_count=0,this._debug_count_start=0,this._events=new Map,this._resize_observer=null,this._pointers=new Map,this._is_panning=!1,this._pinch_distance=null,this._pan_start_time=null,this._pan_exceeded_threshold=!1,this._overlay_instances=[],this._actions=[],this._action_event_handlers=new Map,this._action_pointerdown_pos=null,this._action_last_triggered=new Map,this.container=i,this.id=`m_view-${Gh(8,`0123456789ABCDEF`)}`,this.container.innerHTML=``,this.container.style.overflow=`hidden`,this.container.style.touchAction=`none`,this.canvas=document.createElement(`canvas`),this.canvas.style.cssText=`position: absolute; inset: 0; pointer-events: none;`,this._ctx=this.canvas.getContext(`2d`),this.container.appendChild(this.canvas),this.overlays=document.createElement(`div`),this.overlays.id=`${this.id}-overlays`,this.overlays.style.cssText=`position: absolute; inset: 0; z-index: 0; pointer-events: none;`,this.container.appendChild(this.overlays),this._resize_observer=new ResizeObserver(()=>this._onResize()),this._resize_observer.observe(this.container),this._events.set(`wheel`,e=>this._onWheel(e)),this.container.addEventListener(`wheel`,this._events.get(`wheel`),{passive:!1}),this._events.set(`pointerdown`,e=>this._onPointerDown(e)),this._events.set(`pointermove`,e=>this._onPointerMove(e)),this._events.set(`pointerup`,e=>this._onPointerUp(e)),this.container.addEventListener(`pointerdown`,this._events.get(`pointerdown`)),window.addEventListener(`pointermove`,this._events.get(`pointermove`)),window.addEventListener(`pointerup`,this._events.get(`pointerup`)),window.addEventListener(`pointercancel`,this._events.get(`pointerup`))}async setMap(i){this._map_path=i;let e=await gr.get(i);this._map_path===i&&(this.map=e,this._renderMapImage())}setCenter(i){let e=this._clampCenter(i);e.x===this.center.x&&e.y===this.center.y||(this.center=e,this._renderMap())}setZoom(i){i=Math.max(dr,Math.min(lr,i)),i!==this.zoom&&(this.zoom=i,this._renderMap())}setFixedResolution(i){let e=i>0?i:0;this.fixed_resolution_megapixels!==e&&(this.fixed_resolution_megapixels=e,this.disable_zoom&&this._renderMapImage())}setOptions(i){let e=this.disable_zoom;this.disable_zoom=!!i?.disable_zoom,this.disable_pan=!!i?.disable_pan,e!==this.disable_zoom&&this._renderMapImage()}get overlay_count(){return this._overlay_instances.length}get texture_mode(){return this.disable_zoom?this.fixed_resolution_megapixels?`fixed ${this.fixed_resolution_megapixels}MP`:`fixed ${pr}\xD7 container`:hr()?`mobile ${ur}MP`:`desktop ${mr}MP`}setDebug(i){if(this.debug!==i){if(this.debug=i,i){let e=a=>{this.debug_info.pointer=this._eventToMap(a),this.debug_info.hover_id=this._elementAt(this.debug_info.pointer),this._renderMap()},n=()=>{this.debug_info.pointer=null,this.debug_info.hover_id=``,this._renderMap()},r=a=>{let o=this._eventToMap(a);console.log(`[MAP][DEBUG] Click at { x: ${o.x.toFixed(4)}, y: ${o.y.toFixed(4)} } on "${this._elementAt(o)||`no element`}"`)};this._events.set(`debug_move`,e),this._events.set(`debug_leave`,n),this._events.set(`debug_click`,r),this.container.addEventListener(`pointermove`,e),this.container.addEventListener(`pointerleave`,n),this.container.addEventListener(`click`,r)}else{for(let e of[`debug_move`,`debug_leave`,`debug_click`]){let n=this._events.get(e);if(!n)continue;let r=e===`debug_move`?`pointermove`:e===`debug_leave`?`pointerleave`:`click`;this.container.removeEventListener(r,n),this._events.delete(e)}this.debug_info.pointer=null,this.debug_info.hover_id=``,this.debug_info.highlight_id=``}this._applyOverlayOutlines(),this._renderMap()}}setDebugHighlight(i){this.debug_info.highlight_id!==i&&(this.debug_info.highlight_id=i,this.debug&&this._renderMap())}focusOn(i){let e=this.map?.element_bounds.get(i);e&&(this.setCenter({x:e.x+e.w/2,y:e.y+e.h/2}),this._notifyViewChange())}setOverlays(i){let e=new Map;for(let{overlay:a,element:o}of this._overlay_instances)typeof a.contents==`string`?o.remove():e.set(a.contents,o);this._overlay_instances=[];let n=[];for(let a of i){let o=typeof a.contents==`string`?void 0:e.get(a.contents);o&&e.delete(a.contents);let s=o||document.createElement(`div`);s.style.cssText=`position: absolute; top: 0; left: 0; display: flex; align-items: center; justify-content: center; transform-origin: center center; pointer-events: none;`,a.z_index!=null&&(s.style.zIndex=`${a.z_index}`),s.classList.toggle(`map-overlay-hover`,!!a.hover),typeof a.contents==`string`?s.innerHTML=a.contents:a.contents.parentNode!==s&&s.appendChild(a.contents),n.push(s),this._overlay_instances.push({overlay:a,element:s})}for(let a of e.values())a.remove();let r=this.overlays.firstChild;for(let a of n)a===r?r=a.nextSibling:this.overlays.insertBefore(a,r);this._applyOverlayOutlines(),this._updateOverlayPositions()}_applyOverlayOutlines(){for(let{element:i}of this._overlay_instances)i.style.outline=this.debug?`1px dashed #f0f`:``}_elementAt(i){let e=``,n=Number.POSITIVE_INFINITY;for(let[r,a]of this.map?.element_bounds||[]){if(i.x<a.x||i.x>a.x+a.w||i.y<a.y||i.y>a.y+a.h)continue;let o=a.w*a.h;o<n&&(e=r,n=o)}return e}setActions(i){for(let[n,r]of this._action_event_handlers)this.container.removeEventListener(n,r);this._action_event_handlers.clear(),this._action_last_triggered.clear(),this._actions=i;let e=new Set(i.flatMap(n=>n.events));for(let n of e){let r=a=>this._handleActionEvent(n,a);this._action_event_handlers.set(n,r),this.container.addEventListener(n,r)}if(!this._events.has(`action_pointerdown`)){let n=r=>{this._action_pointerdown_pos={x:r.clientX,y:r.clientY}};this._events.set(`action_pointerdown`,n),this.container.addEventListener(`pointerdown`,n)}}setStyles(i){let e=``;for(let[n,r]of Object.entries(i))r&&(e+=`svg ${Ba(n)} { ${r} }
`);e!==this.styles_string&&(this.styles_string=e,this._renderMapImage())}destroy(){this.setDebug(!1),this._resize_observer?.disconnect(),this._resize_observer=null,this.container.removeEventListener(`wheel`,this._events.get(`wheel`)),this.container.removeEventListener(`pointerdown`,this._events.get(`pointerdown`)),window.removeEventListener(`pointermove`,this._events.get(`pointermove`)),window.removeEventListener(`pointerup`,this._events.get(`pointerup`)),window.removeEventListener(`pointercancel`,this._events.get(`pointerup`));for(let[i,e]of this._action_event_handlers)this.container.removeEventListener(i,e);if(this._action_event_handlers.clear(),this._action_last_triggered.clear(),this._actions=[],this._events.has(`action_pointerdown`)){let i=this._events.get(`action_pointerdown`);this.container.removeEventListener(`pointerdown`,i),this._events.delete(`action_pointerdown`)}this._action_pointerdown_pos=null,this._image_generation++,this._map_path=``,this._image_frame_id!==null&&(cancelAnimationFrame(this._image_frame_id),this._image_frame_id=null),this._draw_frame_id!==null&&(cancelAnimationFrame(this._draw_frame_id),this._draw_frame_id=null),this._notify_frame_id!==null&&(cancelAnimationFrame(this._notify_frame_id),this._notify_frame_id=null);for(let i of this._overlay_instances)i.element.remove();this._overlay_instances=[],this.map_image=null,this.container.innerHTML=``}_viewScale(i=this.zoom){let e=this.map?.aspect_ratio||1,n=this.container.clientWidth||1,r=this.container.clientHeight||1,a=Math.min(r,n/e)*(1-Fa*2)*i;return{x:a*e,y:a}}_eventToMap(i,e=this.container.getBoundingClientRect()){let n=this._viewScale();return{x:(i.clientX-e.left-e.width/2)/n.x+this.center.x,y:(i.clientY-e.top-e.height/2)/n.y+this.center.y}}_clampCenter(i){return{x:Math.max(0,Math.min(1,i.x)),y:Math.max(0,Math.min(1,i.y))}}_zoomAboutPoint(i,e){let n=this.zoom;if(i=Math.max(dr,Math.min(lr,i)),i===n)return;let r=this.container.getBoundingClientRect(),a=this._eventToMap({clientX:e.x,clientY:e.y},r),o=this._viewScale(i),s={x:a.x-(e.x-r.left-r.width/2)/o.x,y:a.y-(e.y-r.top-r.height/2)/o.y};this.zoom=i,this.center=this._clampCenter(s),this._renderMap(),this._notifyViewChange()}_onWheel(i){if(i.preventDefault(),this.disable_zoom||!this.map_image)return;let e=i.deltaY>0?.97:1.03;this._zoomAboutPoint(this.zoom*e,{x:i.clientX,y:i.clientY})}_onPointerDown(i){if(this.map_image&&i.button===0){if(this._pointers.set(i.pointerId,{x:i.clientX,y:i.clientY}),this._pointers.size===2){this._is_panning=!1;let[e,n]=[...this._pointers.values()];this._pinch_distance=Math.hypot(n.x-e.x,n.y-e.y);return}this.disable_pan||(this._is_panning=!0,this._pan_start_time=Date.now(),this._pan_exceeded_threshold=!1,this.container.style.cursor=`grabbing`)}}_onPointerMove(i){let e=this._pointers.get(i.pointerId);if(!e)return;if(this._pointers.set(i.pointerId,{x:i.clientX,y:i.clientY}),this._pointers.size===2&&this._pinch_distance){if(this.disable_zoom)return;let[r,a]=[...this._pointers.values()],o=Math.hypot(a.x-r.x,a.y-r.y);o>0&&(this._zoomAboutPoint(this.zoom*(o/this._pinch_distance),{x:(r.x+a.x)/2,y:(r.y+a.y)/2}),this._pinch_distance=o);return}if(!this._is_panning)return;this._pan_start_time&&!this._pan_exceeded_threshold&&Date.now()-this._pan_start_time>200&&(this._pan_exceeded_threshold=!0);let n=this._viewScale();this.center=this._clampCenter({x:this.center.x-(i.clientX-e.x)/n.x,y:this.center.y-(i.clientY-e.y)/n.y}),this._renderMap(),this._notifyViewChange()}_onPointerUp(i){this._pointers.delete(i.pointerId),this._pointers.size<2&&(this._pinch_distance=null),this._is_panning&&this._pointers.size===0&&(this._is_panning=!1,this.container.style.cursor=``)}_onResize(){if(this._renderMap(),this.disable_zoom&&!this.fixed_resolution_megapixels){let{width:i,height:e}=this._textureDimensions();(i!==this._texture_width||e!==this._texture_height)&&this._renderMapImage()}}_targetTexturePixels(){return this.disable_zoom?this.fixed_resolution_megapixels>0?this.fixed_resolution_megapixels*1e6:(this.container.clientWidth||1)*(this.container.clientHeight||1)*pr:(hr()?ur:mr)*1e6}_textureDimensions(){let i=this.map?.aspect_ratio||1,e=this._targetTexturePixels(),n=Math.sqrt(e/i),r=n*i;return{width:Math.max(1,Math.min(_r,Math.round(r))),height:Math.max(1,Math.min(_r,Math.round(n)))}}_renderMapImage(){this._image_frame_id!==null&&cancelAnimationFrame(this._image_frame_id),this._image_frame_id=requestAnimationFrame(()=>{this._image_frame_id=null,this._doRenderMapImage()})}_doRenderMapImage(){if(!this.map?.raw_data)return;let i=++this._image_generation,n=new DOMParser().parseFromString(this.map.raw_data,`image/svg+xml`),r=n.querySelector(`svg`);if(!r)return;let{width:a,height:o}=this._textureDimensions();if(this._texture_width=a,this._texture_height=o,!r.getAttribute(`viewBox`)){let _=parseFloat(r.getAttribute(`width`)||``),y=parseFloat(r.getAttribute(`height`)||``);_>0&&y>0&&r.setAttribute(`viewBox`,`0 0 ${_} ${y}`)}if(r.getAttribute(`viewBox`)&&(r.setAttribute(`width`,`${a}`),r.setAttribute(`height`,`${o}`)),this.styles_string){let _=n.createElementNS(`http://www.w3.org/2000/svg`,`style`);_.textContent=this.styles_string,r.appendChild(_)}let c=new XMLSerializer().serializeToString(r),l=new Blob([c],{type:`image/svg+xml`}),d=URL.createObjectURL(l),m=new Image;m.onload=()=>{if(URL.revokeObjectURL(d),i!==this._image_generation)return;let _=document.createElement(`canvas`);_.width=a,_.height=o;let y=_.getContext(`2d`);if(!y){console.error(`Failed to get canvas context`);return}y.drawImage(m,0,0,a,o),this.map_image=_,this._renderMap()},m.onerror=()=>{URL.revokeObjectURL(d),console.error(`Failed to load map image`)},m.src=d}_renderMap(){this._draw_frame_id===null&&(this._draw_frame_id=requestAnimationFrame(()=>{this._draw_frame_id=null,this._drawMap()}))}_drawMap(){if(!this.map_image)return;let i=this.debug?performance.now():0,e=this.container.clientWidth||1,n=this.container.clientHeight||1,r=window.devicePixelRatio||1;(this.canvas.width!==Math.round(e*r)||this.canvas.height!==Math.round(n*r))&&(this.canvas.width=Math.round(e*r),this.canvas.height=Math.round(n*r),this.canvas.style.width=`${e}px`,this.canvas.style.height=`${n}px`);let a=this._viewScale(),o=this.center.x-e/2/a.x,s=this.center.y-n/2/a.y,c=Math.max(0,o),l=Math.max(0,s),d=Math.min(1,o+e/a.x),m=Math.min(1,s+n/a.y);if(this._ctx.setTransform(r,0,0,r,0,0),this._ctx.clearRect(0,0,e,n),d>c&&m>l){this._ctx.imageSmoothingEnabled=!0,this._ctx.imageSmoothingQuality=`high`;let _=this.map_image.width,y=this.map_image.height;this._ctx.drawImage(this.map_image,c*_,l*y,(d-c)*_,(m-l)*y,(c-o)*a.x,(l-s)*a.y,(d-c)*a.x,(m-l)*a.y)}if(this.debug){this._drawDebugInfo(a,o,s);let _=performance.now();this.debug_info.last_draw_ms=_-i,this._debug_draw_count++,_-this._debug_count_start>=1e3&&(this.debug_info.draws_last_second=this._debug_draw_count,this._debug_draw_count=0,this._debug_count_start=_)}this._updateOverlayPositions()}_drawDebugInfo(i,e,n){if(!this.map)return;let r=this._ctx,a=this.container.clientWidth||1,o=this.container.clientHeight||1,s=m=>(m-e)*i.x,c=m=>(m-n)*i.y;r.strokeStyle=`#f0f`,r.lineWidth=2,r.strokeRect(s(0),c(0),i.x,i.y),r.strokeStyle=`rgba(0, 200, 255, 0.6)`,r.lineWidth=1;for(let[,m]of this.map.element_bounds){let _=s(m.x),y=c(m.y),U=m.w*i.x,A=m.h*i.y;_+U<0||y+A<0||_>a||y>o||r.strokeRect(_,y,U,A)}let l=this.debug_info.highlight_id||this.debug_info.hover_id,d=l?this.map.element_bounds.get(l):null;if(d){let m=s(d.x),_=c(d.y);r.fillStyle=`rgba(255, 0, 255, 0.25)`,r.fillRect(m,_,d.w*i.x,d.h*i.y);let y=`#${l}`;r.font=`12px monospace`,r.fillStyle=`rgba(0, 0, 0, 0.7)`,r.fillRect(m,_-16,r.measureText(y).width+8,16),r.fillStyle=`#fff`,r.fillText(y,m+4,_-4)}r.strokeStyle=`#f00`,r.lineWidth=1,r.beginPath(),r.moveTo(a/2-8,o/2),r.lineTo(a/2+8,o/2),r.moveTo(a/2,o/2-8),r.lineTo(a/2,o/2+8),r.stroke()}_updateOverlayPositions(){if(!this.map?.element_bounds)return;let i=this.container.clientWidth||1,e=this.container.clientHeight||1,n=this._viewScale(),r=c=>({x:(c.x-this.center.x)*n.x+i/2,y:(c.y-this.center.y)*n.y+e/2}),a=(c,l)=>{c.last_display!==l&&(c.last_display=l,c.element.style.display=l)},o=(c,l)=>{c.last_transform!==l&&(c.last_transform=l,c.element.style.transform=l)},s=(c,l,d)=>{let m=`${l} ${d}`;c.last_size!==m&&(c.last_size=m,c.element.style.width=l,c.element.style.height=d)};for(let c of this._overlay_instances){let{overlay:l$4}=c;if(l$4.min_zoom&&this.zoom<l$4.min_zoom){a(c,`none`);continue}let d;if(typeof l$4.ref==`string`){if(d=this.map.element_bounds.get(l$4.ref),!d){a(c,`none`);continue}}else d=l({w:0,h:0},l$4.ref);if(a(c,``),l$4.type===`box`&&d.w>0&&d.h>0){let m=r({x:d.x,y:d.y});o(c,`translate(${m.x}px, ${m.y}px)`),s(c,`${d.w*n.x}px`,`${d.h*n.y}px`)}else{let m=r({x:d.x+d.w/2,y:d.y+d.h/2});s(c,``,``),o(c,l$4.scale_with_zoom?`translate(${m.x}px, ${m.y}px) translate(-50%, -50%) scale(${this.zoom})`:`translate(${m.x}px, ${m.y}px) translate(-50%, -50%)`)}}}_handleActionEvent(i,e){if(!this.map_image||!this.map?.element_bounds||this._pan_exceeded_threshold)return;if(i===`click`&&this._action_pointerdown_pos){let l=e.clientX-this._action_pointerdown_pos.x,d=e.clientY-this._action_pointerdown_pos.y;if(Math.hypot(l,d)>5)return}let n=this._eventToMap(e);if(n.x<0||n.x>1||n.y<0||n.y>1)return;let r=null,a=Number.POSITIVE_INFINITY;for(let l of this._actions){if(!l.events.includes(i))continue;if(l.ref===`*`){r||(r=l);continue}let d=this.map.element_bounds.get(l.ref);if(!d||n.x<d.x||n.x>d.x+d.w||n.y<d.y||n.y>d.y+d.h)continue;let m=d.w*d.h;(!r||r.ref===`*`||(l.priority||0)>(r.priority||0)||(l.priority||0)===(r.priority||0)&&m<a)&&(r=l,a=m)}if(!r)return;let o=Date.now(),s=`${r.ref}:${i}`;o-(this._action_last_triggered.get(s)||0)<300||(this._action_last_triggered.set(s,o),r.callback(n))}_notifyViewChange(){!this.onViewChange||this._notify_frame_id!==null||(this._notify_frame_id=requestAnimationFrame(()=>{this._notify_frame_id=null,this.onViewChange?.({zoom:this.zoom,center:l({},this.center)})}))}};function Ke(t,i){if(!t)return i;try{return JSON.parse(t)}catch{return i}}function uc(t){let i=!!t?.extension_data?.requires_manual_approval;return t?.approved!==!1?`pending`:i?`approval_required`:t.process_state===`wait_list`?`waitlist`:`pending`}function Wa(t){let i=t.other_data||{};return{id:t.id,map_id:t.map_id||i.map_id||``,level_id:t.zone_id,name:t.identifier||i.name||``,height:+(i.height||3),notes:t.notes||``,zones:t.zones||[t.zone_id].filter(e=>e),tags:t.tags||Ke(i.tags,[]),images:Ke(i.images,[])}}function Ha(t,i){let e=t.other_data||{},n=t.parent_id||``,r=i.find(a=>a.id===n);return{id:t.id,bank_id:n,map_id:t.map_id||e.map_id,assigned_to:t.assigned_to||e.assigned_to,assigned_name:t.assigned_name||e.assigned_name,name:t.identifier||e.name||``,accessible:e.accessible===`true`,bookable:t.bookable!==!1,position:Ke(e.position,[0,0]),size:Ke(e.size,[1,1]),bank:r,zone:r?.zone,features:t.features||Ke(e.features,[])}}var Ka=t=>`${(t.extension_data?.group_members||[]).find(n=>n?.email===t.asset_id)?.name||``}`.trim()||``;var Qa=t=>`${((t.attendees||[]).find(n=>n?.email===t.asset_id)||t.attendees?.[0])?.name||``}`.trim()||``;var Ya=t=>{if(!t.includes(`@`))return t;let[i]=t.split(`@`),e=i.replace(/[._-]+/g,` `).replace(/\s+/g,` `).trim();return e?e.replace(/\b\w/g,n=>n.toUpperCase()):t};var pc=t=>{let i=`${t?.asset_id||``}`.trim(),e=Ka(t);if(e)return e;let n=Qa(t);if(n)return n;let r=`${t?.extension_data?.visitor_name||t?.asset_name||``}`.trim(),a=[`${t?.title||``}`.trim().toLowerCase(),`${t?.description||``}`.trim().toLowerCase()].filter(o=>!!o);return r&&r.toLowerCase()!==i.toLowerCase()&&!a.includes(r.toLowerCase())?r:Ya(i||r||`Visitor`)};function _c(t,i,e=!1){let n=``,r=``;if(t instanceof so$1){n=t.booking_type===`visitor`?t.extension_data?.location||``:t.location||t.asset_name||``,n.startsWith(`unallocated`)&&(n=``),e&&t.booking_type===`parking`&&(n=``);let a=i.levelWithID(t.zones);r=a?.display_name||a?.name||``}else{n=t.location||t.space?.display_name||t.space?.name||t.system?.name||``;let a=i.levelWithID([...t.system?.zones||[]]);r=t.space?.level?.display_name||t.space?.level?.name||a?.display_name||a?.name||``}return n&&r?`${n} - ${r}`:n||r||``}async function hc(t,i,e=[]){let n=await yr(t),r=c=>{let l=n.element_bounds.get(c);return l?{x:l.x+l.w/2,y:l.y+l.h/2}:null},a=(typeof i==`string`?r(i):i)||{x:.5,y:.5},o=10,s=``;for(let c of e){let{x:l,y:d}=r(c)||{x:2,y:2},m=Math.sqrt((l-a.x)*(l-a.x)+(d-a.y)*(d-a.y));m<o&&(o=m,s=c)}return s}function fc(t){let i=t.date||t.event_start*1e3,e=t.duration??(t.event_end-t.event_start)/60,n=t.recurrence?.pattern?g_(p_$1(t.recurrence),i):{},r=[t.system,...t.resources||[]].filter(s=>!!s?.id),{system_id:a}=t,o=Hh([...r.map(s=>s.id),a].filter(s=>!!s));return new so$1(m(l({id:t.id,user_id:t.organiser?.id||t.host,user_email:t.host,user_name:t.organiser?.name||t.host,title:t.title||void 0,date:i,duration:e,all_day:t.all_day,timezone:t.timezone,asset_id:o[0],asset_ids:o,asset_name:t.system?.display_name||t.system?.name,zones:Hh(r.flatMap(s=>s.zones||[])),booking_type:`room`,approved:t.status===`approved`},n),{extension_data:l({},t)}))}async function Xa(t,i){if(!i)return[];let n=(await ar([i]).catch(()=>[])).map(Wa);for(let r of n)r.zone=t.levelWithID(r.zones||[]);return n}async function Ja(t,i,e){if(!i)return[];let r=(await or([i]).catch(()=>[])).map(a=>Ha(a,e));for(let a of e){let o=m(l({},a),{lockers:[]});a.lockers=r.filter(s=>s.bank_id===a.id).map(s=>m(l({},s),{bank:o}))}return r.filter(a=>a.bank)}async function gc(t,i){return Ja(t,i,await Xa(t,i))}var Qe=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new re;bulk={select:i=>this._select(i),deselect:i=>this._deselect(i),setSelection:i=>this._setSelection(i)};constructor(i=!1,e,n=!0,r){this._multiple=i,this._emitChanges=n,this.compareWith=r,e&&e.length&&(i?e.forEach(a=>this._markSelected(a)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){return this._select(i)}deselect(...i){return this._deselect(i)}setSelection(...i){return this._setSelection(i)}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_select(i){this._verifyValueAssignment(i),i.forEach(n=>this._markSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(i){this._verifyValueAssignment(i),i.forEach(n=>this._unmarkSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(i){this._verifyValueAssignment(i);let e=this.selected,n=new Set(i.map(a=>this._getConcreteValue(a)));i.forEach(a=>this._markSelected(a)),e.filter(a=>!n.has(this._getConcreteValue(a,n))).forEach(a=>this._unmarkSelected(a));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let n of e)if(this.compareWith(i,n))return n;return i}else return i}};var fi=(()=>{class t{_listeners=[];notify(e,n){for(let r of this._listeners)r(e,n)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(n=>e!==n)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(n){return new(n||t)};static ɵprov=tn({token:t,factory:t.ɵfac})}return t})();var no=[`trigger`];var ro=[`panel`];var ao=[[[`mat-select-trigger`]],`*`];var oo=[`mat-select-trigger`,`*`];function so(t,i){if(t&1&&(Hs(0,`span`,4),zT(1),ql()),t&2){let e=fT();Mw(),cy(e.placeholder)}}function co(t,i){t&1&&gT(0)}function lo(t,i){if(t&1&&(Hs(0,`span`,11),zT(1),ql()),t&2){let e=fT(2);Mw(),cy(e.triggerValue)}}function mo(t,i){if(t&1&&(Hs(0,`span`,5),Yb(1,co,1,0)(2,lo,2,1,`span`,11),ql()),t&2){let e=fT();Mw(),Qb(e.customTrigger?1:2)}}function uo(t,i){if(t&1){let e=sT();Hs(0,`div`,12,1),Um(`keydown`,function(r){sp(e);return ap(fT()._handleKeydown(r))}),gT(2,1),ql()}if(t&2){let e=fT();FT(e.panelClass),ey(`mat-select-panel-animations-enabled`,!e._animationsDisabled)(`mat-primary`,e._parentFormField?.color===`primary`)(`mat-accent`,e._parentFormField?.color===`accent`)(`mat-warn`,e._parentFormField?.color===`warn`)(`mat-undefined`,!e._parentFormField?.color),Rm(`id`,e.id+`-panel`)(`aria-multiselectable`,e.multiple)(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e._getPanelAriaLabelledby())}}var po=new T(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let t=E(fe);return()=>It(t)}});var _o=new T(`MAT_SELECT_CONFIG`);var kr=new T(`MatSelectTrigger`);var gi=class{source;value;constructor(i,e){this.source=i,this.value=e}};var tl=(()=>{class t{_viewportRuler=E(A$2);_changeDetectorRef=E(yd);_elementRef=E(nn);_dir=E(V$1,{optional:!0});_idGenerator=E(Y$1);_renderer=E(Sr$1);_parentFormField=E(le$2,{optional:!0});ngControl=E(V,{self:!0,optional:!0});_liveAnnouncer=E(ut$1);_defaultOptions=E(_o,{optional:!0});_animationsDisabled=De();_popoverLocation;_initialized=new re;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let n=this.options.toArray()[e];if(n){let r=this.panel.nativeElement,a=Te$1(e,this.options,this.optionGroups),o=n._getHostElement();e===0&&a===1?r.scrollTop=0:r.scrollTop=Oe(o.offsetTop,o.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new gi(this,e)}_scrollStrategyFactory=E(po);_panelOpen=!1;_compareWith=(e,n)=>e===n;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new re;_errorStateTracker;stateChanges=new re;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=pt(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(ge.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Bv(()=>{let e=this.options;return e?e.changes.pipe(Hv(e),SD(()=>Vv(...e.map(n=>n.onSelectionChange)))):this._initialized.pipe(SD(()=>this.optionSelectionChanges))});openedChange=new _t;_openedStream=this.openedChange.pipe(zr(e=>e),tt(()=>{}));_closedStream=this.openedChange.pipe(zr(e=>!e),tt(()=>{}));selectionChange=new _t;valueChange=new _t;constructor(){let e=E(me),n=E(zt,{optional:!0}),r=E(Kt$1,{optional:!0}),a=E(new Ty(`tabindex`),{optional:!0}),o=E(Ht,{optional:!0}),s=E(Et,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new J$1(e,s||this.ngControl,r,n,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=o?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new Qe(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Uv(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Uv(this._destroy)).subscribe(e=>{e.added.forEach(n=>n.select()),e.removed.forEach(n=>n.deselect())}),this.options.changes.pipe(Hv(null),Uv(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),n=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute(`aria-labelledby`,e):r.removeAttribute(`aria-labelledby`)}n&&(this._previousControl!==n.control&&(this._previousControl!==void 0&&n.disabled!==null&&n.disabled!==this.disabled&&(this.disabled=n.disabled),this._previousControl=n.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Jn$1(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{n(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,n=this._renderer.listen(e,`animationend`,a=>{a.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(n=>n.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let n=e.keyCode,r=n===40||n===38||n===37||n===39,a=n===13||n===32,o=this._keyManager;if(!o.isTyping()&&a&&!Pe(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;o.onKeydown(e);let c=this.selected;c&&s!==c&&this._liveAnnouncer.announce(c.viewValue,1e4)}}_handleOpenKeydown(e){let n=this._keyManager,r=e.keyCode,a=r===40||r===38,o=n.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!o&&(r===13||r===32)&&n.activeItem&&!Pe(e))e.preventDefault(),n.activeItem._selectViaInteraction();else if(!o&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(c=>!c.disabled&&!c.selected);this.options.forEach(c=>{c.disabled||(s?c.select():c.deselect())})}else{let s=n.activeItemIndex;n.onKeydown(e),this._multiple&&a&&e.shiftKey&&n.activeItem&&n.activeItemIndex!==s&&n.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Pe(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(n=>n.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(n=>this._selectOptionByValue(n)),this._sortValues();else{let n=this._selectOptionByValue(e);n?this._keyManager.updateActiveItem(n):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let n=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return n&&this._selectionModel.select(n),n}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof zt$1?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new z$1(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Vv(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Uv(e)).subscribe(n=>{this._onSelect(n.source,n.isUserInput),n.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Vv(...this.options.map(n=>n._stateChanges)).pipe(Uv(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,n){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),n&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),n&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((n,r)=>this.sortComparator?this.sortComparator(n,r,e):e.indexOf(n)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let n;this.multiple?n=this.selected.map(r=>r.value):n=this.selected?this.selected.value:e,this._value=n,this.valueChange.emit(n),this._onChange(n),this.selectionChange.emit(this._getChangeEvent(n)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let n=0;n<this.options.length;n++)if(!this.options.get(n).disabled){e=n;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,n=e?e+` `:``;return this.ariaLabelledby?n+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute(`aria-describedby`,e.join(` `)):n.removeAttribute(`aria-describedby`)}onContainerClick(e){let n=b$1(e);n&&(n.tagName===`MAT-OPTION`||n.classList.contains(`cdk-overlay-backdrop`)||n.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(n){return new(n||t)};static ɵcmp=eb({type:t,selectors:[[`mat-select`]],contentQueries:function(n,r,a){if(n&1&&zm(a,kr,5)(a,X,5)(a,ce$1,5),n&2){let o;yT(o=vT())&&(r.customTrigger=o.first),yT(o=vT())&&(r.options=o),yT(o=vT())&&(r.optionGroups=o)}},viewQuery:function(n,r){if(n&1&&Wm(no,5)(ro,5)(ci$1,5),n&2){let a;yT(a=vT())&&(r.trigger=a.first),yT(a=vT())&&(r.panel=a.first),yT(a=vT())&&(r._overlayDir=a.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(n,r){n&1&&Um(`keydown`,function(o){return r._handleKeydown(o)})(`focus`,function(){return r._onFocus()})(`blur`,function(){return r._onBlur()}),n&2&&(Rm(`id`,r.id)(`tabindex`,r.disabled?-1:r.tabIndex)(`aria-controls`,r.panelOpen?r.id+`-panel`:null)(`aria-expanded`,r.panelOpen)(`aria-label`,r.ariaLabel||null)(`aria-required`,r.required.toString())(`aria-disabled`,r.disabled.toString())(`aria-invalid`,r.errorState)(`aria-activedescendant`,r._getAriaActiveDescendant()),ey(`mat-mdc-select-disabled`,r.disabled)(`mat-mdc-select-invalid`,r.errorState)(`mat-mdc-select-required`,r.required)(`mat-mdc-select-empty`,r.empty)(`mat-mdc-select-multiple`,r.multiple)(`mat-select-open`,r.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,J_],disableRipple:[2,`disableRipple`,`disableRipple`,J_],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:eS(e)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,J_],placeholder:`placeholder`,required:[2,`required`,`required`,J_],multiple:[2,`multiple`,`multiple`,J_],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,J_],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,eS],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,J_]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[n_([{provide:ae,useExisting:t},{provide:le$1,useExisting:t}]),$s],ngContentSelectors:oo,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(n,r){if(n&1&&(hT(ao),Hs(0,`div`,2,0),Um(`click`,function(){return r.open()}),Hs(3,`div`,3),Yb(4,so,2,1,`span`,4)(5,mo,3,1,`span`,5),ql(),Hs(6,`div`,6)(7,`div`,7),vp(),Hs(8,`svg`,8),km(9,`path`,9),ql()()()(),Im(10,uo,3,16,`ng-template`,10),Um(`detach`,function(){return r.close()})(`backdropClick`,function(){return r.close()})(`overlayKeydown`,function(o){return r._handleOverlayKeydown(o)})),n&2){let a=ET(1);Mw(3),Rm(`id`,r._valueId),Mw(),Qb(r.empty?4:5),Mw(6),Om(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,r._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,r._scrollStrategy)(`cdkConnectedOverlayOrigin`,r._preferredOverlayOrigin||a)(`cdkConnectedOverlayPositions`,r._positions)(`cdkConnectedOverlayWidth`,r._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,r._popoverLocation)}},dependencies:[zt$1,ci$1],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2})}return t})();var il=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵdir=Uo({type:t,selectors:[[`mat-select-trigger`]],features:[n_([{provide:kr,useExisting:t}])]})}return t})();var nl=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=oa$1({type:t});static ɵinj=io({imports:[di$1,He$1,be,Vt,de,He$1]})}return t})();var ho=[`input`];var fo=[`formField`];var go=[`*`];var qt=class{source;value;constructor(i,e){this.source=i,this.value=e}};var yo={provide:I,useExisting:zi(()=>vo),multi:!0};var Sr=new T(`MatRadioGroup`);var bo=new T(`mat-radio-default-options`,{providedIn:`root`,factory:()=>({color:`accent`,disabledInteractive:!1})});var vo=(()=>{class t{_changeDetector=E(yd);_value=null;_name=E(Y$1).getId(`mat-radio-group-`);_selected=null;_isInitialized=!1;_labelPosition=`after`;_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new _t;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e===`before`?`before`:`after`,this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(n=>{n.checked=this.value===n.value,n.checked&&(this._selected=n)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new qt(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static ɵfac=function(n){return new(n||t)};static ɵdir=Uo({type:t,selectors:[[`mat-radio-group`]],contentQueries:function(n,r,a){if(n&1&&zm(a,Cr,5),n&2){let o;yT(o=vT())&&(r._radios=o)}},hostAttrs:[`role`,`radiogroup`,1,`mat-mdc-radio-group`],inputs:{color:`color`,name:`name`,labelPosition:`labelPosition`,value:`value`,selected:`selected`,disabled:[2,`disabled`,`disabled`,J_],required:[2,`required`,`required`,J_],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,J_]},outputs:{change:`change`},exportAs:[`matRadioGroup`],features:[n_([yo,{provide:Sr,useExisting:t}])]})}return t})();var Cr=(()=>{class t{_elementRef=E(nn);_changeDetector=E(yd);_focusMonitor=E(Ye);_radioDispatcher=E(fi);_defaultOptions=E(bo,{optional:!0});_ngZone=E(Ee);_renderer=E(Sr$1);_uniqueId=E(Y$1).getId(`mat-radio-`);_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||`after`}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||`accent`}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new _t;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=De();_injector=E(fe);constructor(){E(A$1).load(Rt);let e=E(Sr,{optional:!0}),n=E(new Ty(`tabindex`),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,n&&(this.tabIndex=eS(n,0))}focus(e,n){n?this._focusMonitor.focusVia(this._inputElement,n,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,n)=>{e!==this.id&&n===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,`click`,this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new qt(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let n=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),n&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,n;if(!e||!e.selected||this.disabled?n=this.tabIndex:n=e.selected===this?this.tabIndex:-1,n!==this._previousTabIndex){let r=this._inputElement?.nativeElement;r&&(r.setAttribute(`tabindex`,n+``),this._previousTabIndex=n,rw(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===r&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===r&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static ɵfac=function(n){return new(n||t)};static ɵcmp=eb({type:t,selectors:[[`mat-radio-button`]],viewQuery:function(n,r){if(n&1&&Wm(ho,5)(fo,7,nn),n&2){let a;yT(a=vT())&&(r._inputElement=a.first),yT(a=vT())&&(r._rippleTrigger=a.first)}},hostAttrs:[1,`mat-mdc-radio-button`],hostVars:19,hostBindings:function(n,r){n&1&&Um(`focus`,function(){return r._inputElement.nativeElement.focus()}),n&2&&(Rm(`id`,r.id)(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null),ey(`mat-primary`,r.color===`primary`)(`mat-accent`,r.color===`accent`)(`mat-warn`,r.color===`warn`)(`mat-mdc-radio-checked`,r.checked)(`mat-mdc-radio-disabled`,r.disabled)(`mat-mdc-radio-disabled-interactive`,r.disabledInteractive)(`_mat-animation-noopable`,r._noopAnimations))},inputs:{id:`id`,name:`name`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],disableRipple:[2,`disableRipple`,`disableRipple`,J_],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:eS(e)],checked:[2,`checked`,`checked`,J_],value:`value`,labelPosition:`labelPosition`,disabled:[2,`disabled`,`disabled`,J_],required:[2,`required`,`required`,J_],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,J_]},outputs:{change:`change`},exportAs:[`matRadioButton`],ngContentSelectors:go,decls:13,vars:17,consts:[[`formField`,``],[`input`,``],[`mat-internal-form-field`,``,3,`labelPosition`,`for`],[1,`mdc-radio`],[1,`mat-mdc-radio-touch-target`],[`type`,`radio`,`aria-invalid`,`false`,1,`mdc-radio__native-control`,3,`change`,`id`,`checked`,`disabled`,`required`],[`aria-hidden`,`true`,1,`mdc-radio__background`],[1,`mdc-radio__outer-circle`],[1,`mdc-radio__inner-circle`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-radio-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-ripple-element`,`mat-radio-persistent-ripple`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(n,r){n&1&&(hT(),Hs(0,`label`,2,0)(2,`span`,3),km(3,`span`,4),Hs(4,`input`,5,1),Um(`change`,function(o){return r._onInputInteraction(o)}),ql(),Hs(6,`span`,6),km(7,`span`,7)(8,`span`,8),ql(),Hs(9,`span`,9),km(10,`span`,10),ql()(),Hs(11,`span`,11),gT(12),ql()()),n&2&&(Om(`labelPosition`,r.labelPosition)(`for`,r.inputId),Mw(2),ey(`mdc-radio--disabled`,r.disabled),Mw(2),Om(`id`,r.inputId)(`checked`,r.checked)(`disabled`,r.disabled&&!r.disabledInteractive)(`required`,r.required),Rm(`name`,r.name)(`value`,r.value)(`aria-label`,r.ariaLabel)(`aria-labelledby`,r.ariaLabelledby)(`aria-describedby`,r.ariaDescribedby)(`aria-disabled`,r.disabled&&r.disabledInteractive?`true`:null),Mw(5),Om(`matRippleTrigger`,r._rippleTrigger.nativeElement)(`matRippleDisabled`,r._isRippleDisabled())(`matRippleCentered`,!0))},dependencies:[yt,Ue$1],styles:[`.mat-mdc-radio-button {
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
`],encapsulation:2})}return t})();var Sl=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=oa$1({type:t});static ɵinj=io({imports:[Mt,Cr,be]})}return t})();var Mr=[];function Er(t){for(let i of t)Mr.find(({id:e})=>e===i.id)||Mr.push(i)}var yi={};function Ir(t,i=!1){return t?((!yi[t]||i)&&(yi[t]=es(t,`assets_config`).then(e=>e.details instanceof Array?e.details:[]).catch(()=>[])),yi[t]):Promise.resolve([])}function Ar(t,i,e){let n=Date.now(),r=new Date(e.date),a=s=>t.name===s.name||t.category?.name.includes(s.name)||e.resources?.some(c=>c.zones?.includes(s.name))||e.space?.zones?.includes(s.name)||s.name===`*`,o=s=>s.rules.reduce((c,l)=>{switch(l[0]){case`is_before`:return c+(C(n,ri(r,l[1]))?1:0);case`within_hours`:return c+(fe$1(n,ri(r,l[1]))?1:0);case`after_hour`:return c+(fe$1(r,d(r,l[1]))?1:0);case`before_hour`:return c+(C(r,d(r,l[1]))?1:0);case`min_length`:return c+(e.duration>=oa$2(l[1])?1:0);case`max_length`:return c+(e.duration<=oa$2(l[1])?1:0);case`visitor_type`:return c+(e.ext(`visitor_type`)===l[1]?1:0);default:return c+1}},0);for(let s of i)if(a(s)&&o(s)<s.rules.length)return!1;return!0}function Or(t,i){return Array.from(new Set([...Object.keys(t),...Object.keys(i)])).every(n=>Object.is(t[n],i[n]))}var Ul=(()=>{class t{constructor(){this._org=E(Fe),this._settings_service=E($$1),this._injector=E(fe),this._options=pt({date:Date.now()}),this._search=pt(``),this._category=pt([]),this._loading=pt(``),this._rules=pt([]),this._asset_list=pt(null),this._asset_bookings=pt([]),this._available_groups=pt([]),this._category_list=pt([]),this._settings=pt({}),this._network_requested=!1,this._network_consumed=pt(!1),this._asset_list_request=null,this._category_list_request=null,this._booking_requests=new Map,this._available_group_requests=new Map,this._settings_requests=new Map,this._options_debounced=xH(this._options,300,{injector:this._injector,equal:Or}),this._requests_ready=_e(()=>{let e=this._org.active_building(),n=this._settings_service.overrides();return this._network_consumed()&&this._assetsEnabled()&&this._org.initialised()&&!!e?.id&&n.length>=(this._org.settings?.length||0)+2}),this.search=this._search.asReadonly(),this.category=this._category.asReadonly(),this.options=this._options.asReadonly(),this.loading=this._loading.asReadonly(),this.rules=_e(()=>(this._requestNetwork(),this._rules())),this.asset_list=_e(()=>(this._requestNetwork(),this._asset_list())),this.asset_bookings=_e(()=>(this._requestNetwork(),this._asset_bookings())),this.available_groups=_e(()=>(this._requestNetwork(),this._available_groups())),this.category_list=_e(()=>(this._requestNetwork(),this._category_list())),this.visible_category_ids=_e(()=>this._category_list().map(e=>e.id)),this.filtered_assets=_e(()=>{this._requestNetwork();let e=this._search().toLowerCase(),n=this._category(),r=this.visible_category_ids(),a=this._available_groups(),o=this._rules();return a.filter(s=>s.assets?.length&&r.includes(s.category_id)&&(!n.length||n.includes(s.category_id))&&(s.name.toLowerCase().includes(e)||s.description.toLowerCase().includes(e))&&Ar(s,o,this._options()))}),this.settings=_e(()=>(this._requestNetwork(),this._settings())),this.disabled_rooms=_e(()=>(this._requestNetwork(),this._settings().disabled_rooms||[])),hs(()=>{let e=this._options_debounced.value(),n=this._org.active_building();!this._requests_ready()||!n?.id||!e||oe(()=>{this._loadRules(e,n.id),this._loadAssetList(),this._loadAssetBookings(e),this._loadAvailableGroups(e,n.id),this._loadSettings(n.id),this._loadCategories()})}),hs(()=>{let e=this.visible_category_ids(),n=this._category(),r=n.filter(a=>e.includes(a));r.length!==n.length&&this._category.set(r)})}_requestNetwork(){this._network_requested||(this._network_requested=!0,queueMicrotask(()=>this._network_consumed.set(!0)))}_assetsEnabled(){return this._settings_service.get(`app.has_assets`)!==!1}setSearch(e){this._search.set(`${e}`)}toggleCategory(e){let n=oe(this._category);n.includes(e)?this._category.set(n.filter(r=>r!==e)):this._category.set([...n,e])}getOptions(){return this._options()}setOptions(e){let n=oe(this._options),r=l(l({},n),e);Or(n,r)||this._options.set(r)}_appendLoading(e){this._loading.set(this._loading()+e)}_removeLoading(e){this._loading.set(this._loading().split(e).join(``))}async _loadRules(e,n){let r=e.zone||e.zone_id||n||``;this._appendLoading(`[Rules]`),this._rules.set(await Ir(r)),this._removeLoading(`[Rules]`)}async _loadAssetList(){return this._asset_list_request?this._asset_list_request:(this._appendLoading(`[Assets]`),this._asset_list_request=er().then(e=>(this._asset_list.set(e),e)).finally(()=>{this._asset_list_request=null,this._removeLoading(`[Assets]`)}),this._asset_list_request)}async _loadAssetBookings({zone:e,zone_id:n,date:r}){let a={zones:e||n||``,period_start:b(J(r)),period_end:b(Qe$1(r)),type:`asset-request`},o=JSON.stringify(a),s=this._booking_requests.get(o);this._appendLoading(`[Bookings]`);let c=s||ce(a);s||this._booking_requests.set(o,c),this._asset_bookings.set(await c),c.finally(()=>this._booking_requests.delete(o)),this._removeLoading(`[Bookings]`)}async _loadAvailableGroups({zone:e,zone_id:n,date:r,duration:a,ignore:o},s){let c={zones:e||n||s||``,period_start:b(Zn$1(r)),period_end:b(jn(dt(r,a||30))),type:`asset-request`,rejected:!1},l=JSON.stringify({query:c,ignore:o}),d=this._available_group_requests.get(l),m=d||ci(c,o).catch(U=>(console.error(U),[]));d||this._available_group_requests.set(l,m);let _=await m;m.finally(()=>this._available_group_requests.delete(l));let y=_.sort((U,A)=>U.name.localeCompare(A.name));Er(y),this._available_groups.set(y)}async _loadCategories(){return this._category_list_request?this._category_list_request:(this._category_list_request=Zn().then(e=>(this._category_list.set(e.data.sort((n,r)=>n.name.localeCompare(r.name)).filter(n=>!n.hidden)),e)).finally(()=>this._category_list_request=null),this._category_list_request)}async _loadSettings(e){let n=this._settings_requests.get(e),r=n||es(e,`assets-settings`).then(a=>a.details||{}).catch(()=>({}));n||this._settings_requests.set(e,r),this._settings.set(await r),r.finally(()=>this._settings_requests.delete(e))}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵprov=A({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();var Yl=(()=>{class t extends y{constructor(){super(),this._org=E(Fe),this._settings=E($$1),this._calendars=pt([]),this._calendars_request=null,this.calendar_list=this._calendars.asReadonly(),this.query=()=>ai(),this.freeBusy=e=>Ve(e,this._org),this.availability=e=>Ge(e),this._waitForOrg()}async init(){this._settings.get(`app.events.use_bookings`)||this._initialised.next(!0)}get calendars(){return this._calendars()}getFreeBusyDate(e,n){return Ve({period_start:b(J(e)),period_end:b(Qe$1(e)),calendars:n},this._org)}async checkSpacesAvailability(e,n,r,a){let o=await Ge({period_start:n,period_end:r,system_ids:e.join(`,`)}),s=new Date(a?.date).valueOf(),c=dt(s,a?.duration).valueOf();return!!o.every(d=>{let m=d.availability;if(a&&d.id===a.system?.email){let _=m.findIndex(y=>y.date>=s&&dt(y.date,y.duration).valueOf()<=c);_!==-1&&m.splice(_,1)}return!m.length})}async loadCalendars(){this._calendars().length||(this._calendars_request=this._calendars_request||ai().then(e=>this._calendars.set(e)).catch(e=>{xt(`CalendarService`,`Failed to load calendars`,e,`warn`)}).finally(()=>this._calendars_request=null),await this._calendars_request)}_waitForOrg(){let e=()=>{if(this._org.initialised())return this.init();this.timeout(`init`,e,100)};e()}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵprov=A({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();function Lt(t){let i=Sh(t,`UTC`);return`${As$1(i,`yyyyMMdd`)}T${As$1(i,`HHmmss`)}Z`}function bi(t){return`${As$1(t,`yyyyMMdd`)}`}function $t(t){return(t||``).replace(/\\|;|,|\n/g,i=>{switch(i){case`\\`:return`\\\\`;case`;`:return`\\;`;case`,`:return`\\,`;case`
`:return`\\n`;default:return i}})}function ed(t){if(!t)return`data:text/calendar;charset=utf8,`;let i=[],e=$t(`${t.body||``}${t.id?`

[ID|`+t.id+`]`:``}`),n=$t(`${t.location}`);i.push([`BEGIN`,`VCALENDAR`]),i.push([`VERSION`,`2.0`]),i.push([`BEGIN`,`VEVENT`]),i.push([`UID`,`${t.id||`uid-`+Date.now()}`]),i.push([`DTSTAMP`,Lt(new Date)]),t.meeting_url&&i.push([`URL`,`${t.meeting_url}`]),t.all_day?(i.push([`DTSTART;VALUE=DATE`,bi(t.date)]),i.push([`DTEND;VALUE=DATE`,bi(us$1(t.date,1))])):(i.push([`DTSTART`,Lt(t.date)]),i.push([`DTEND`,Lt(dt(t.date,t.duration||60))])),i.push([`SUMMARY`,$t(t.title)]),i.push([`DESCRIPTION`,e]),i.push([`LOCATION`,n]);let r=t.host||t.user_email||`no-reply@place.tech`,a=t.organiser?.name||r.split(`@`)[0]||`Staff`;i.push([`ORGANIZER`,`CN=${$t(a)}:mailto:${r}`]),i.push([`END`,`VEVENT`]),i.push([`END`,`VCALENDAR`]);let o=i.map(([c,l])=>`${c}:${l}`).join(`\r
`);return`data:text/calendar;charset=utf8,${encodeURIComponent(o)}`}function td(t){let i=t.all_day?bi:Lt,e={action:`TEMPLATE`,text:t.title,details:`${t.body||``}${t.id?`

[ID|`+t.id+`]`:``}`,location:t.location,trp:!1,dates:`${i(t.date)}/${i(dt(t.date,t.duration??60))}`},n=(t.attendees||[]).map(a=>a.email||a),r=((t.resources?.length?t.resources:null)||[t.system]).map(a=>a?.email||a);return(n.length||r.length)&&(e.add=Hh([...n,...r]).join()),`https://calendar.google.com/calendar/render?${ld(e)}`}function Rr(t){return`${As$1(t,`yyyy-MM-dd`)}T${As$1(t,`HH:mm:ss`)}`}function id(t,i=`office`,e=`free`){t.date||(t.date=Date.now());let n={startdt:Rr(t.date),enddt:Rr(dt(t.date,t.duration??60)),subject:t.title,body:`${t.body||``}${t.id?`


[ID|`+t.id+`]`:``}`,location:t.location,allday:t.all_day??!1};t.all_day&&delete n.enddt;let r=(t.attendees||[]).map(o=>o.email||o),a=((t.resources?.length?t.resources:null)||[t.system]).map(o=>o?.email||o);return(r.length||a.length)&&(n.to=Hh([...r,...a]).filter(o=>!!o).join(`,`)),i===`office`?`https://outlook.office.com/calendar/deeplink/compose?${ld(n)}`:`https://outlook.live.com/calendar/deeplink/compose?${ld(n)}`}var wo=(t,i)=>i.booking_start;function xo(t,i){if(t&1&&(Hs(0,`tr`,10)(1,`td`,15),zT(2),d_(3,`date`),ql(),Hs(4,`td`,15),zT(5),d_(6,`date`),d_(7,`date`),ql()()),t&2){let e=i.$implicit;Mw(2),Xl(` `,h_(3,3,e.booking_start*1e3,`EEE, MMM d, yyyy`),` `),Mw(3),uy(` `,h_(6,6,e.booking_start*1e3,`h:mm a`),` - `,h_(7,9,e.booking_end*1e3,`h:mm a`),` `)}}async function pd(t,i){let e=i.open(ko,{data:t});return Promise.race([e.componentInstance.event.pipe(Df(n=>n.reason===`done`)).toPromise(),e.afterClosed().toPromise()])}var ko=(()=>{class t{constructor(){this.event=new _t,this._data=E($e),this._dialog_ref=E(T$1)}get clashes(){return this._data.clashes||[]}onConfirm(){this.event.emit({reason:`done`}),this._dialog_ref.close({reason:`done`})}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=eb({type:t,selectors:[[`placeos-recurring-clash-modal`]],outputs:{event:`event`},decls:35,vars:21,consts:[[1,`relative`],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`h-14`,`w-[calc(100%-1rem)]`,`min-w-[20rem]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[1,`flex`,`max-h-[60vh]`,`w-full`,`max-w-[calc(100vw-2rem)]`,`flex-col`,`items-center`,`space-y-4`,`overflow-auto`,`px-4`,`py-2`,`sm:max-w-md`],[1,`border-base-200`,`bg-warning`,`text-warning-content`,`flex`,`items-center`,`space-x-2`,`rounded-xl`,`border`,`p-2`,`shadow-sm`],[1,`text-5xl`],[1,`border-base-300`,`bg-base-100`,`max-h-48`,`w-full`,`overflow-auto`,`rounded-sm`,`border`],[1,`w-full`,`text-sm`],[1,`bg-base-200`,`sticky`,`top-0`],[1,`p-2`,`text-left`],[1,`border-base-300`,`border-t`],[1,`text-base-content/70`,`text-center`,`text-xs`],[1,`bg-base-200`,`sticky`,`bottom-0`,`m-2`,`flex`,`items-center`,`justify-center`,`space-x-2`,`rounded-sm`,`border-none`,`p-2`],[`btn`,``,`matRipple`,``,`mat-dialog-close`,``,1,`inverse`,`bg-base-100`,`flex-1`],[`btn`,``,`matRipple`,``,1,`flex-1`,3,`click`],[1,`p-2`]],template:function(n,r){n&1&&(Hs(0,`div`,0)(1,`header`,1)(2,`h2`,2),zT(3),d_(4,`translate`),ql()(),Hs(5,`main`,3)(6,`div`,4)(7,`icon`,5),zT(8,`warning`),ql(),Hs(9,`p`),zT(10),d_(11,`translate`),ql()(),Hs(12,`div`,6)(13,`table`,7)(14,`thead`,8)(15,`tr`)(16,`th`,9),zT(17),d_(18,`translate`),ql(),Hs(19,`th`,9),zT(20),d_(21,`translate`),ql()()(),Hs(22,`tbody`),Jb(23,xo,8,12,`tr`,10,wo),ql()()(),Hs(25,`p`,11),zT(26),d_(27,`translate`),ql()(),Hs(28,`footer`,12)(29,`button`,13),zT(30),d_(31,`translate`),ql(),Hs(32,`button`,14),Um(`click`,function(){return r.onConfirm()}),zT(33),d_(34,`translate`),ql()()()),n&2&&(Mw(3),Xl(` `,p_(4,7,`BOOKINGS.RECURRING_CLASHES_TITLE`),` `),Mw(7),Xl(` `,p_(11,9,`BOOKINGS.RECURRING_CLASHES_MSG`),` `),Mw(7),Xl(` `,p_(18,11,`FORM.DATE`),` `),Mw(3),Xl(` `,p_(21,13,`COMMON.TIME`),` `),Mw(3),eT(r.clashes),Mw(3),Xl(` `,p_(27,15,`BOOKINGS.RECURRING_CLASHES_CONFIRM`),` `),Mw(4),Xl(` `,p_(31,17,`COMMON.CANCEL`),` `),Mw(3),Xl(` `,p_(34,19,`BOOKINGS.CONTINUE_BOOKING`),` `))},dependencies:[O,Ht$1,Bt,Mt,yt,f,VS],encapsulation:2})}}return t})();export{qa as $,ce as A,il as B,Ya as C,ai as D,_c as E,fr as F,ms as G,je as H,gc as I,or as J,na as K,hc as L,ds as M,ed as N,ar as O,fc as P,ps as Q,ic as R,Xo as S,Yn as T,ks as U,ir as V,ls as W,pc as X,os as Y,pd as Z,Vn as _,Es as a,uc as at,Wo as b,Is as c,xs as ct,Jo as d,ss as et,Jr as f,Ul as g,Ss as h,Dt as i,tr as it,cs as j,as as k,Ja as l,Sl as m,Cr as n,td as nt,Gn as o,us as ot,Ms as p,nl as q,Cs as r,tl as rt,Ha as s,vo as st,As as t,tc as tt,Jn as u,Vs as v,Yl as w,Xa as x,Wa as y,id as z};
;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1850fc67-7713-55e7-beac-b1ce5c85397c")}catch(e){}}();
//# debugId=1850fc67-7713-55e7-beac-b1ce5c85397c
//# sourceMappingURL=chunk-CmtYAsEW.js.map