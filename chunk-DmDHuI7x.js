import{$r as w,A as F_,B as HT,Bt as UT,D as Ed,Dn as e2,En as dy,Et as Rp,F as GT,G as IS,H as Hm,It as Tb,Jr as ue,Kr as ty,Mn as ey,Nn as fM,Or as os,Pn as f_,Pr as py,Q as Kn,Qn as jC,R as Gp,Rn as gd,St as Qo,T as ET,Tt as Re,Un as he,Wn as ht,Wr as t_,Wt as Vy,Y as Jm,Yt as XH,Zn as iy,bn as cM,br as na,cr as lg,d as BT,dn as ay,er as jT,et as LC,fi as yy,ft as O_,g as CT,hi as zp,hn as b_,i as $m,it as L_,jt as Sv,k as Er,kn as ea,l as At,mn as bT,nr as jd,o as A_,oi as y,pt as Op,q as JH,ri as xT,rt as LT,sr as k_,t as $T,tn as Yw,v as Cy,w as ES,y as DT,yn as by,zt as Ty}from"./chunk-BAwOJ6nI.js";import{$ as Ye,Ct as gl,It as nt,P as Qn,Pt as mt,Rt as oi,Tt as ht$1,U as V,V as Uh,Wt as rn$1,Xt as tr,Yt as tf,Z as Xo,Zt as ui,at,d as Ef,et as Yh,on as z,q as Wh,r as $s,rn as wu,t as $,vt as ff,w as Ms,xt as ft}from"./chunk-DJ3iXP9W.js";import{F as zn$1,P as qn,j as oe,o as N}from"./chunk-BLOUne-x.js";import{c as yt,r as Rt,t as Mt}from"./chunk-DCMs69CX.js";import{H as Re$1,Ht as nt$1,K as Se,Mt as jc,Ot as ge,Pt as k_$1,V as R,ct as Wf,en as st,h as Ea,jt as ii,nn as te,w as Ia,z as O_$1}from"./chunk-DOqUrnHl.js";import{n as f}from"./main-5MWXQ2NS.js";import{n as ue$1}from"./chunk-DKY_GZq1.js";import{i as ht$2,t as Kt$1}from"./chunk-tGBRSnrj.js";import{i as Lt$1,n as G,r as I,t as Bt$1}from"./chunk-DDSxv9LZ.js";function Oe(i,s){let e=+$(i)-+$(s);return e<0?-1:e>0?1:e}function Pt(i,s){let e=$(i,s?.in);return+Qn(e,s)==+Ia(e,s)}function Lt(i,s,e){let[n,t,o]=Ye(e?.in,i,i,s),d=Oe(t,o),l=Math.abs(Ea(t,o));if(l<1)return 0;t.getMonth()===1&&t.getDate()>27&&t.setDate(30),t.setMonth(t.getMonth()-d*l);let u=Oe(t,o)===-d;Pt(n)&&l===1&&Oe(n,o)===1&&(u=!1);let v=d*(l-+u);return v===0?0:v}function Le(i,s){let e=$(i,s?.in);return e.setDate(1),e.setHours(0,0,0,0),e}function jt(i,s,e){let[n,t]=Ye(e?.in,i,s);return n.getFullYear()===t.getFullYear()&&n.getMonth()===t.getMonth()}var Zt=[`*`];var Xt=(i,s)=>s.id;function Yt(i,s){if(i&1&&(ea(0,`div`,4),f_(1),A_(2,`date`),gd()),i&2){let e=LT();Yw(),Ed(` `,F_(2,1,e.active_time(),e.time_format()+` (z)`,e.tz()),` `)}}function Wt(i,s){if(i&1&&(ea(0,`div`,13),f_(1),A_(2,`date`),gd()),i&2){let e=LT(2);Yw(),Ed(` `,F_(2,1,e.force_time(),e.time_format()+` (z)`,e.tz()),` `)}}function Kt(i,s){i&1&&(ea(0,`icon`,14),f_(1,` done `),gd())}function Jt(i,s){if(i&1){let e=xT();ea(0,`button`,9),ay(`click`,function(){Rp(e);let t=LT();return Op(t.setValue(t.force_time().toString()))}),ea(1,`div`,10)(2,`div`,11)(3,`div`,12),f_(4),A_(5,`date`),gd(),DT(6,Wt,3,5,`div`,13),gd(),DT(7,Kt,2,0,`icon`,14),gd()()}if(i&2){let e=LT();ey(`value`,e.force_time()),Yw(4),Ed(` `,k_(5,4,e.force_time(),e.time_format()),` `),Yw(2),ET(e.timezone()&&e.tz()?6:-1),Yw(),ET(e.active_time()===e.force_time()?7:-1)}}function en(i,s){if(i&1&&(ea(0,`div`,13),f_(1),A_(2,`date`),gd()),i&2){let e=LT().$implicit,n=LT();Yw(),Ed(` `,F_(2,1,e.date,n.time_format()+` (z)`,n.tz()),` `)}}function tn(i,s){i&1&&(ea(0,`icon`,14),f_(1,` done `),gd())}function nn(i,s){if(i&1){let e=xT();ea(0,`button`,9),ay(`click`,function(){let t=Rp(e).$implicit;return Op(LT().setValue(t.id))}),ea(1,`div`,10)(2,`div`,11)(3,`div`,12),f_(4),A_(5,`date`),gd(),DT(6,en,3,5,`div`,13),gd(),DT(7,tn,2,0,`icon`,14),gd()()}if(i&2){let e=s.$implicit,n=LT();ey(`value`,e.id),Jm(`data-time`,e.id),Yw(4),by(` `,k_(5,6,e.date,n.time_format()),` `,n.extra_info_fn()(e.date),` `),Yw(2),ET(n.timezone()&&n.tz()?6:-1),Yw(),ET(n.active_time()===e.date?7:-1)}}function on(i,s){i&1&&(ea(0,`div`,8),f_(1,`No time options to select`),gd())}function an(i,s){i&1&&(ea(0,`mat-error`),BT(1),gd())}function Bt(i){if(i==null||i===``)return null;let s=Number(i);return Number.isFinite(s)?s:null}var ci=(()=>{class i extends wu{constructor(){super(...arguments),this.step=XH(15),this.disabled=JH(void 0),this.no_past_times=XH(!0),this.use_24hr=XH(!1),this.force_time=XH(void 0),this.no_error=XH(void 0),this.extra_info_fn=XH(e=>``),this.from=XH(V(Date.now()).valueOf()),this.range=XH(void 0),this._range=Re(()=>{let e=this.range();if(!e)return;let n=Bt(e.start),t=Bt(e.end);if(!(n===null||t===null||t<=n))return{start:n,end:t}}),this.min_duration=XH(0),this.timezone=XH(``),this.date=ht(new Date().valueOf()),this.time=ht(gl(new Date,`HH:mm`)),this._time_options=ht([]),this.show_select=ht(!1),this.active_time=ht(Date.now()),this.no_options=ht(!1),this._menu_trigger=e2(Bt$1),this.time_format=Re(()=>this.use_24hr()?`HH : mm`:`h : mm a`),this._local_tz=Uh(Intl.DateTimeFormat().resolvedOptions().timeZone),this.tz=Re(()=>{let e=this.timezone();if(!e)return``;let n=Uh(e);return n===this._local_tz?``:n})}ngOnInit(){this.show_select.set(!0),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions(),this.timeout(`hide`,()=>this.show_select.set(!1));let e=this.timezone()||void 0;this.active_time.set(this._time_options().find(n=>n.id===Wh(this.date(),e))?.date||this.active_time())}ngOnChanges(e){(e.no_past_times||e.step||e.from||e.range||e.min_duration)&&(this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions())}ngAfterViewInit(){let e=this._menu_trigger();e&&this.subscription(`menu_opened`,e.menuOpened.subscribe(()=>{this._scrollToSelectedTime()}))}_scrollToSelectedTime(){requestAnimationFrame(()=>{if(!this._menu_trigger()?.menu)return;let n=document.querySelector(`.mat-mdc-menu-panel`);if(!n)return;let t=this.timezone()||void 0,o=this.time()||Wh(new Date,t),d=n.querySelector(`[data-time="${o}"]`);if(!d&&this._time_options().length){let l=this._timeToMinutes(o),u=this._time_options()[0],v=Infinity;for(let $ of this._time_options()){let F=this._timeToMinutes($.id),p=Math.abs(F-l);p<v&&(v=p,u=$)}d=n.querySelector(`[data-time="${u.id}"]`)}if(d){if(typeof d.scrollIntoView!=`function`)return;d.scrollIntoView({block:`center`,behavior:`instant`})}})}_timeToMinutes(e){let[n,t]=e.split(`:`).map(Number);return n*60+t}time_options(){let e=this.timezone()||void 0,n=(this.time()||`00:00`).split(`:`),t=Yh(this.date(),+n[0],+n[1],e),{minutes:o}=Xo(t,e),d=Wh(t,e),l=[...this._time_options()];return o%this.step()!==0&&this._isWithinRange(t)&&!l.find(u=>u.id===d)&&(l.push({date:t,id:d}),l.sort((u,v)=>`${u.id}`.localeCompare(`${v.id}`))),l}setValue(e){this.time.set(e);let n=this.timezone()||void 0;if(this._onChange){let l=(this.time()||`00:00`).split(`:`),u=Yh(this.date(),+l[0],+l[1],n);tf(),this._onChange(u)}let t=this.force_time()||this.time(),o=(typeof t==`string`?t:Wh(t,n)).split(`:`),d=Yh(this.date(),+o[0],+o[1],n);this.active_time.set(this._time_options().find(l=>l.id===(typeof t==`string`?t:Wh(t,n)))?.date||d)}writeValue(e){this.date.set(e||this.date());let n=this.timezone()||void 0,t=rn$1(this.date());t=tr(t,{nearestTo:5}),this.time.set(Wh(t,n)),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions();let o=this.force_time(),d=o?Wh(o,n):this.time();this.active_time.set(this._time_options().find(l=>l.id===d)?.date||t.valueOf())}setDisabledState(e){this.disabled.set(e),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times()||e,this.step())),this._updateNoOptions()}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouch=e}_updateNoOptions(){this.no_options.set(!this.disabled()&&(!this._time_options()||this._time_options().length===0)&&!this.force_time())}generateAvailableTimes(e,n,t=15){let o=n?this.from():Math.max(this.from(),Date.now()),d=[],l=this._range(),u=this.timezone()||void 0,v=u?oi(e,u):V(e).valueOf(),$=u?ui(e,u):Qn(e).valueOf(),F=this.min_duration()||0,p=l?l.start*60:void 0,G=l?l.end*60:void 0,ke=G!=null&&F>0?G-F:G,qe=Math.max(v,o,p!=null?v+p*60*1e3:v),Ue=Math.min($,ke!=null?v+ke*60*1e3:$);if(qe>Ue)return d;let pe=this._roundUpToStep(qe,t),Ht=this._roundDownToStep(Ue,t);for(;!ge(pe,Ht);)d.push({date:pe.valueOf(),id:Wh(pe,u)}),pe=ft(pe,t);return d}_isWithinRange(e){if(R(e,this.from()))return!1;let n=this._range();if(!n)return!0;let t=n.start*60,o=n.end*60,d=this.min_duration()||0,l=d>0?o-d:o,{hours:v,minutes:$}=Xo(e,this.timezone()||void 0),F=v*60+$;return!(F<t||F>l)}_roundUpToStep(e,n){let t=tr(e,{nearestTo:n});return R(t,e)&&(t=ft(t,n)),rn$1(t)}_roundDownToStep(e,n){let t=tr(e,{nearestTo:n});return ge(t,e)&&(t=ft(t,-n)),rn$1(t)}static{this.ɵfac=(()=>{let e;return function(t){return(e||(e=lg(i)))(t||i)}})()}static{this.ɵcmp=Tb({type:i,selectors:[[`a-time-field`],[`time-field`]],viewQuery:function(n,t){n&1&&py(t._menu_trigger,Bt$1,5),n&2&&$T()},inputs:{step:[1,`step`],disabled:[1,`disabled`],no_past_times:[1,`no_past_times`],use_24hr:[1,`use_24hr`],force_time:[1,`force_time`],no_error:[1,`no_error`],extra_info_fn:[1,`extra_info_fn`],from:[1,`from`],range:[1,`range`],min_duration:[1,`min_duration`],timezone:[1,`timezone`]},outputs:{disabled:`disabledChange`},features:[b_([{provide:nt$1,useExisting:os(()=>i),multi:!0}]),Hm,na],ngContentSelectors:Zt,decls:15,vars:12,consts:[[`menu`,`matMenu`],[`type`,`button`,`time-field`,``,`matRipple`,``,1,`border-neutral`,`flex`,`h-12`,`w-full`,`items-center`,`justify-between`,`rounded-sm`,`border`,`px-2`,3,`disabled`,`matMenuTriggerFor`],[1,`flex`,`w-1/2`,`flex-1`,`flex-col`,`px-2`,`text-left`,`leading-tight`],[1,`truncate`],[1,`truncate`,`text-xs`,`opacity-30`],[1,`text-2xl`],[1,`max-h-60`,`min-w-[18rem]`],[`type`,`button`,`mat-menu-item`,``,1,`text-left`,3,`value`],[`mat-menu-item`,``,`disabled`,``],[`type`,`button`,`mat-menu-item`,``,1,`text-left`,3,`click`,`value`],[1,`flex`,`items-center`,`justify-between`],[1,`flex`,`flex-col`,`leading-tight`],[1,``],[1,`text-xs`,`opacity-30`],[1,`ml-2`,`text-2xl`]],template:function(n,t){if(n&1&&(jT(),ea(0,`button`,1)(1,`div`,2)(2,`div`,3),f_(3),A_(4,`date`),gd(),DT(5,Yt,3,5,`div`,4),gd(),ea(6,`icon`,5),f_(7,`arrow_drop_down`),gd()(),ea(8,`mat-menu`,6,0),DT(10,Jt,8,7,`button`,7),CT(11,nn,8,9,`button`,7,Xt,!1,on,2,0,`div`,8),gd(),DT(14,an,2,0,`mat-error`)),n&2){let o=GT(9);yy(`opacity-30`,t.disabled()||t.no_options()),ey(`disabled`,t.disabled()||t.no_options())(`matMenuTriggerFor`,o),Yw(3),Ed(` `,k_(4,9,t.active_time(),t.time_format()),` `),Yw(2),ET(t.timezone()&&t.tz()?5:-1),Yw(5),ET(t.force_time()?10:-1),Yw(),bT(t.time_options()),Yw(3),ET(t.no_error()?-1:14)}},dependencies:[Sv,Lt$1,I,G,Bt$1,Kt$1,ht$2,Ef,cM],styles:[`mat-form-field[_ngcontent-%COMP%]{width:100%}`]})}}return i})();var $t=(i,s)=>s.id;function rn(i,s){if(i&1&&(ea(0,`div`,7),f_(1),A_(2,`date`),gd()),i&2){let e=s.$implicit;Yw(),Ed(` `,k_(2,1,e?.id,`EE`),` `)}}function dn(i,s){i&1&&ty(0,`div`,11)}function sn(i,s){if(i&1){let e=xT();ea(0,`button`,10),ay(`click`,function(){let t=Rp(e).$implicit;return Op(LT().setValue(t.id))}),f_(1),A_(2,`date`),DT(3,dn,1,0,`div`,11),ty(4,`div`,12),gd()}if(i&2){let e=s.$implicit,n=LT();yy(`hover:bg-base-200`,e.id!==n.active_date())(`text-base-300!`,!e.is_month)(`text-secondary-content`,e.id===n.active_date())(`text-base-content`,e.id!==n.active_date())(`bg-secondary`,e.id===n.active_date())(`font-normal`,e.id!==n.active_date()),ey(`disabled`,e.id<n.from()||e.id>n.to()),Yw(),Ed(` `,k_(2,15,e.id,`d`),` `),Yw(2),ET(n.today===e.id?3:-1)}}var qt=(()=>{class i extends wu{constructor(){super(),this._settings=y(Re$1),this.from=XH(0),this.to=XH(Date.now()*10),this.offset_weekday=XH(0),this.today=V(Date.now()).valueOf(),this.date=ht(Date.now()),this.active_date=ht(V(Date.now()).valueOf()),this.offset=ht(0),this.date_list=ht([]),this.displayed_dates=this.date_list.asReadonly(),this.display_date=Re(()=>this.displayed_dates()[6]?.id||this.date()),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e}ngOnInit(){this.generateDates()}ngOnChanges(e){e.offset_weekday&&this.generateDates()}setValue(e){if(!Ms(e)||e<this.from()||e>=this.to())return;let n=new Date(e);this.date.set(mt(this.date(),{date:n.getDate(),month:n.getMonth(),year:n.getFullYear()}).valueOf()),this.active_date.set(V(this.date()).valueOf()),this._onChange&&this._onChange(e)}writeValue(e){let n=this._validDate(e);this.date.set(n),this.active_date.set(V(n).valueOf()),this.offset.set(0),this.generateDates()}changeMonth(e){this.offset.update(n=>n+e),this.generateDates()}setMonthToCurrent(){let e=Lt(this.date(),Le(Date.now()));this.offset.set(-e),this.generateDates()}generateDates(){let e=this._settings.signal(`week_start`,this.offset_weekday())(),n=te(this._validDate(this.date()),this.offset()),t=ht$1(Le(n),{weekStartsOn:this._validWeekday(e)}),o=V(Date.now()),d=[];for(;d.length<42;)d.push({id:t.valueOf(),is_past:R(t,o),is_month:jt(t,n)}),t=$s(t,1);this.date_list.set(d)}_validDate(e){return Ms(e)?e:Date.now()}_validWeekday(e){return Number.isInteger(e)&&e>=0&&e<=6?e:0}static{this.ɵfac=function(n){return new(n||i)}}static{this.ɵcmp=Tb({type:i,selectors:[[`date-calendar`]],inputs:{from:[1,`from`],to:[1,`to`],offset_weekday:[1,`offset_weekday`]},features:[b_([{provide:nt$1,useExisting:os(()=>i),multi:!0}]),Hm,na],decls:19,vars:10,consts:[[1,`p-2`],[1,`flex`,`items-center`,`justify-between`],[1,`pr-2`,`pl-1.5`,`font-medium`,3,`dblclick`],[1,`flex`,`items-center`],[`icon`,``,`matRipple`,``,`name`,`schedule-next-month`,3,`click`,`disabled`],[`icon`,``,`matRipple`,``,`name`,`schedule-previous-month`,3,`click`,`disabled`],[1,`border-base-200`,`mb-2`,`flex`,`items-center`,`border-b`,`pb-2`,`text-sm`],[1,`flex-1`,`text-center`,`opacity-60`],[1,`flex`,`flex-wrap`,`items-center`,`justify-between`],[`icon`,``,`name`,`schedule-set-date`,1,`relative`,`my-0.5`,`h-9`,`w-9`,`min-w-[14%]`,`overflow-visible`,3,`hover:bg-base-200`,`text-base-300!`,`text-secondary-content`,`text-base-content`,`bg-secondary`,`font-normal`,`disabled`],[`icon`,``,`name`,`schedule-set-date`,1,`relative`,`my-0.5`,`h-9`,`w-9`,`min-w-[14%]`,`overflow-visible`,3,`click`,`disabled`],[`matRipple`,``,1,`border-secondary`,`absolute`,`-inset-0.5`,`z-20`,`overflow-hidden`,`rounded-full`,`border`],[`matRipple`,``,1,`absolute`,`inset-0`,`overflow-hidden`,`rounded-full`]],template:function(n,t){n&1&&(ea(0,`div`,0)(1,`div`,1)(2,`button`,2),ay(`dblclick`,function(){return t.setMonthToCurrent()}),f_(3),A_(4,`date`),gd(),ea(5,`div`,3)(6,`button`,4),ay(`click`,function(){return t.changeMonth(-1)}),ea(7,`icon`),f_(8,`chevron_left`),gd()(),ea(9,`button`,5),ay(`click`,function(){return t.changeMonth(1)}),ea(10,`icon`),f_(11,`chevron_right`),gd()()()(),ea(12,`div`,6),CT(13,rn,3,4,`div`,7,$t),A_(15,`slice`),gd(),ea(16,`div`,8),CT(17,sn,5,18,`button`,9,$t),gd()()),n&2&&(Yw(3),Ed(` `,k_(4,3,t.display_date(),`LLLL yyyy`),` `),Yw(3),ey(`disabled`,t.displayed_dates()[0]?.id<t.from()),Yw(3),ey(`disabled`,t.displayed_dates()[34]?.id>t.to()),Yw(4),bT(F_(15,6,t.displayed_dates(),0,7)),Yw(4),bT(t.displayed_dates()))},dependencies:[Sv,Ef,Mt,yt,fM,cM],encapsulation:2})}}return i})();var mn=[`*`];function ln(i,s){if(i&1&&(f_(0),A_(1,`date`)),i&2){let e=LT();Ed(` `,k_(1,1,e.date(),e.date_format()),` `)}}function hn(i,s){i&1&&(ea(0,`span`,5),f_(1),A_(2,`translate`),gd()),i&2&&(Yw(),Cy(O_(2,1,`FORM.DATE_EMPTY`)))}function _n(i,s){if(i&1&&(ea(0,`span`),f_(1),gd()),i&2){let e=LT(2);Yw(),Cy(e.start_of_day())}}function un(i,s){i&1&&(ea(0,`span`),f_(1,` - `),gd())}function pn(i,s){if(i&1&&(ea(0,`span`),f_(1),gd()),i&2){let e=LT(2);Yw(),Cy(e.end_of_day())}}function bn(i,s){if(i&1&&(ea(0,`div`,6),DT(1,_n,2,1,`span`),DT(2,un,2,0,`span`),DT(3,pn,2,1,`span`),gd()),i&2){let e=LT();Yw(),ET(e.range()!==2?1:-1),Yw(),ET(e.range()===0?2:-1),Yw(),ET(e.range()!==1?3:-1)}}function fn(i,s){if(i&1){let e=xT();ea(0,`button`,10),ay(`click`,function(t){Rp(e);return Op(LT().clearValue(t))}),ea(1,`icon`),f_(2,`close`),gd()()}if(i&2){let e=LT();ey(`disabled`,e.date()===null||e.date()===void 0||e.disabled()),Jm(`aria-label`,`Clear date`)}}function kn(i,s){i&1&&(ea(0,`span`),BT(1),gd())}function xn(i,s){if(i&1){let e=xT();ea(0,`div`,11)(1,`date-calendar`,12),ay(`ngModelChange`,function(t){Rp(e);return Op(LT().setValue(t))}),gd(),LC(),gd()}if(i&2){let e=LT();Yw(),ey(`ngModel`,e.date()||e.now)(`from`,e.from().valueOf())(`to`,e.until().valueOf())(`offset_weekday`,e.week_start()),jC()}}var Ut=(function(i){return i[i.Both=0]=`Both`,i[i.Start=1]=`Start`,i[i.End=2]=`End`,i})(Ut||{});var zi=(()=>{class i extends wu{get has_error(){return this._control?.invalid&&this._control?.touched}constructor(){super(),this._injector=y(he),this.from_date=XH(V(Date.now()).valueOf(),{alias:`from`}),this.to_date=XH(void 0,{alias:`to`}),this.week_start=XH(0),this.use_24hr=XH(!1),this.disabled=JH(void 0),this.short=XH(!1),this.timezone=XH(``),this.range=XH(Ut.Both),this.clear=XH(!1),this.date=ht(null),this.now=Date.now(),this.date_format=Re(()=>this.short()?`MMM d, yyyy`:`MMMM d, yyyy`),this.time_format=Re(()=>this.use_24hr()?`HH : mm`:`h : mm a`),this._date_pipe=new cM(`en`),this.start_of_day=Re(()=>{let e=V(this.date()||Date.now()).valueOf(),n=`MMM d, ${this.time_format()}${this.range()===1?` (z)`:``}`;return this._date_pipe.transform(e,n,this.tz())}),this.end_of_day=Re(()=>{let e=Qn(this.date()||Date.now()).valueOf(),n=`MMM d, ${this.time_format()}${this.range()===1?` (z)`:``}`;return this._date_pipe.transform(e,n,this.tz())}),this._local_tz=Uh(Intl.DateTimeFormat().resolvedOptions().timeZone),this.tz=Re(()=>{let e=this.timezone();if(!e)return``;let n=Uh(e);return n===this._local_tz?``:n}),this._tooltip=e2(ue$1),this.from=Re(()=>this.from_date()?new Date(this.from_date()):V(new Date)),this.until=Re(()=>this.to_date()?new Date(this.to_date()):ii(Qn(new Date),1))}ngOnInit(){this._control=this._injector.get(Se)}setValue(e){let n=this.timezone()||void 0,{hours:t,minutes:o}=Xo(this.date()||Date.now(),n),d=Yh(e,t,o,n);if(n){let l=new Date(e);d=rn$1(at(mt(z(this.date()||Date.now(),n),{year:l.getFullYear(),month:l.getMonth(),date:l.getDate(),hours:t,minutes:o,seconds:0,milliseconds:0}),n)).valueOf()}d<this.from().valueOf()&&(d=this.from().valueOf()),this.date.set(d),tf(),this._onChange&&this._onChange(d),this._tooltip()?.close()}clearValue(e){e?.stopPropagation(),this.date.set(null),tf(),this._onTouch&&this._onTouch(null),this._onChange&&this._onChange(null)}writeValue(e){this.date.set(e??null),this._tooltip()?.close()}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouch=e}setDisabledState(e){this.disabled.set(e)}static{this.ɵfac=function(n){return new(n||i)}}static{this.ɵcmp=Tb({type:i,selectors:[[`a-date-field`],[`date-field`]],viewQuery:function(n,t){n&1&&py(t._tooltip,ue$1,5),n&2&&$T()},inputs:{from_date:[1,`from`,`from_date`],to_date:[1,`to`,`to_date`],week_start:[1,`week_start`],use_24hr:[1,`use_24hr`],disabled:[1,`disabled`],short:[1,`short`],timezone:[1,`timezone`],range:[1,`range`],clear:[1,`clear`]},outputs:{disabled:`disabledChange`},features:[b_([{provide:nt$1,useExisting:os(()=>i),multi:!0}]),Hm],ngContentSelectors:mn,decls:15,vars:8,consts:[[`calendar_picker`,``],[1,`flex`,`items-center`,`gap-1`],[`type`,`button`,`customTooltip`,``,`yPosition`,`top`,`matRipple`,``,1,`border-neutral`,`flex`,`h-12`,`w-full`,`flex-1`,`items-center`,`justify-between`,`rounded-sm`,`border`,3,`content`,`disabled`],[1,`flex`,`w-1/2`,`flex-1`,`flex-col`,`truncate`,`px-4`,`py-2`,`text-left`,`leading-tight`],[1,`text-base`,`font-normal`],[1,`opacity-30`],[1,`truncate`,`text-xs`,`opacity-30`],[1,`flex`,`h-10`,`w-10`,`items-center`,`justify-center`,`text-2xl`],[`type`,`button`,`icon`,``,`matRipple`,``,1,`border-error`,`text-error`,`flex`,`h-12`,`w-12`,`items-center`,`justify-center`,`rounded-sm`,`border`,3,`disabled`],[1,`error`,`text-error`,`h-5`,`p-1`,`text-xs`],[`type`,`button`,`icon`,``,`matRipple`,``,1,`border-error`,`text-error`,`flex`,`h-12`,`w-12`,`items-center`,`justify-center`,`rounded-sm`,`border`,3,`click`,`disabled`],[1,`bg-base-100`,`relative`,`w-[18rem]`,`rounded-sm`,`px-2`,`py-4`],[3,`ngModelChange`,`ngModel`,`from`,`to`,`offset_weekday`]],template:function(n,t){if(n&1&&(jT(),ea(0,`div`,1)(1,`button`,2)(2,`div`,3)(3,`div`,4),DT(4,ln,2,4)(5,hn,3,3,`span`,5),gd(),DT(6,bn,4,3,`div`,6),gd(),ea(7,`div`,7)(8,`icon`),f_(9,`today`),gd()()(),DT(10,fn,3,2,`button`,8),gd(),ea(11,`div`,9),DT(12,kn,2,0,`span`),gd(),$m(13,xn,2,4,`ng-template`,null,0,L_)),n&2){let o=GT(14);Yw(),yy(`opacity-30`,t.disabled()),ey(`content`,o)(`disabled`,t.disabled()),Yw(3),ET(t.date()!==null&&t.date()!==void 0?4:5),Yw(2),ET(t.timezone()&&t.tz()&&t.date()!==null&&t.date()!==void 0?6:-1),Yw(4),ET(t.clear()?10:-1),Yw(2),ET(t.has_error?12:-1)}},dependencies:[Sv,O_$1,k_$1,jc,qt,Ef,ue$1,Mt,yt,cM,f],styles:[`.no-subscript[_nghost-%COMP%] > .error[_ngcontent-%COMP%]{display:none}`]})}}return i})();var gn=[`*`];var vn=(i,s)=>s.id;function yn(i,s){if(i&1&&(ea(0,`div`,10),f_(1),A_(2,`date`),gd()),i&2){let e=LT(2);Yw(),Ed(` `,F_(2,1,e.time()+e.duration()*6e4,e.time_format()+` (z)`,e.tz()),` `)}}function Cn(i,s){if(i&1&&(ea(0,`div`,11),f_(1),gd()),i&2){let e=LT(2);Yw(),Ed(` `,e.end_time_error(),` `)}}function Dn(i,s){if(i&1){let e=xT();ea(0,`div`,6)(1,`input`,7,1),ay(`change`,function(){Rp(e);let t=GT(2);return Op(LT().setEndTime(t.value))})(`blur`,function(){Rp(e);return Op(LT().touch())}),gd(),ea(3,`button`,8)(4,`icon`,9),f_(5,`arrow_drop_down`),gd()()(),DT(6,yn,3,5,`div`,10),DT(7,Cn,2,1,`div`,11)}if(i&2){let e=LT(),n=GT(3);yy(`opacity-30`,e.disabled()||e.no_options()),Yw(),ey(`value`,e.end_time_value())(`disabled`,e.disabled()||e.no_options()),Jm(`aria-invalid`,!!e.end_time_error()),Yw(2),ey(`disabled`,e.disabled()||e.no_options())(`matMenuTriggerFor`,n),Yw(3),ET(e.timezone()&&e.tz()?6:-1),Yw(),ET(e.end_time_error()?7:-1)}}function Mn(i,s){if(i&1&&(ea(0,`div`,15),f_(1),A_(2,`date`),gd()),i&2){let e=LT(2);Yw(),Ed(` `,F_(2,1,e.selected()?.date,e.time_format()+` (z)`,e.tz()),` `)}}function Nn(i,s){if(i&1&&(ea(0,`button`,12)(1,`div`,13)(2,`div`,14),f_(3),A_(4,`date`),gd(),DT(5,Mn,3,5,`div`,15),gd(),ea(6,`icon`,9),f_(7,`arrow_drop_down`),gd()()),i&2){let e=LT(),n=GT(3);yy(`opacity-30`,e.disabled()||e.no_options()),ey(`disabled`,e.disabled()||e.no_options())(`matMenuTriggerFor`,n),Yw(3),Ty(` `,e.selected()?.date?k_(4,8,e.selected()?.date,e.selected().id>=1440?`mediumDate`:e.time_format())+` (`:e.duration_options()?.length?``:`No duration options available`,``,e.selected()?.name,``,e.selected()?.date?`)`:``,` `),Yw(2),ET(e.timezone()&&e.tz()?5:-1)}}function Sn(i,s){if(i&1&&(ea(0,`div`,15),f_(1),A_(2,`date`),gd()),i&2){let e=LT(2).$implicit,n=LT();Yw(),Ed(` `,F_(2,1,e.date,n.time_format()+` (z)`,n.tz()),` `)}}function wn(i,s){if(i&1&&(ea(0,`div`,18)(1,`div`,14),f_(2),A_(3,`date`),gd(),DT(4,Sn,3,5,`div`,15),gd()),i&2){let e=LT().$implicit,n=LT();Yw(2),Ty(` `,e.date?k_(3,4,e.date,e.id>=1440?`mediumDate`:n.time_format())+` (`:``,``,e.name,``,e.date?`)`:``,` `),Yw(2),ET(n.timezone()&&n.tz()?4:-1)}}function Tn(i,s){i&1&&(ea(0,`icon`,19),f_(1,` done `),gd())}function En(i,s){if(i&1){let e=xT();ea(0,`button`,16),ay(`click`,function(){let t=Rp(e).$implicit,o=LT();return o.setValue(t.id),Op(o.touch())}),ea(1,`div`,17),DT(2,wn,5,7,`div`,18),ea(3,`div`),f_(4),gd(),DT(5,Tn,2,0,`icon`,19),gd()()}if(i&2){let e=s.$implicit,n=LT();Jm(`data-duration`,e.id),Yw(2),ET(n.force()?-1:2),Yw(2),Cy(n.force()),Yw(),ET(n.selected()?.id===e.id?5:-1)}}function zn(i,s){i&1&&(ea(0,`div`,5),f_(1,`No duration options to select`),gd())}var $i=(()=>{class i{constructor(){this.max=XH(240),this.min=XH(30),this.step=XH(15),this.time=XH(void 0),this.disabled=JH(void 0),this.custom_options=XH([]),this.force=XH(void 0),this.use_24hr=XH(!1),this.timezone=XH(``),this.end_time=XH(void 0),this.allow_end_time=XH(!1),this.end_time_error=ht(``),this.end_time_value=Re(()=>this.time()!=null?gl(ft(this.time(),this.duration()),`HH:mm`):``),this.duration=ht(60),this.duration_options=ht([]),this.no_options=ht(!1),this.time_format=Re(()=>this.use_24hr()?`HH : mm`:`h : mm a`),this.selected=Re(()=>this.duration_options().find(e=>e.id===this.duration())),this._local_tz=Uh(Intl.DateTimeFormat().resolvedOptions().timeZone),this.tz=Re(()=>{let e=this.timezone();if(!e)return``;let n=Uh(e);return n===this._local_tz?``:n})}ngOnInit(){this._setDurationOptions(),this._updateNoOptions(),this._updateOption()}ngOnChanges(e){this._clearEndTimeError(),(e.max||e.min||e.step||e.time||e.custom_options||e.end_time||e.timezone)&&(this._setDurationOptions(),this._updateNoOptions(),this._updateOption())}setValue(e){this._clearEndTimeError(),this.duration.set(e),this._onChange&&this._onChange(+e)}touch(){this._onTouch?.(this.duration())}setEndTime(e){let n=this.time();if(!this.allow_end_time()||n==null||this.disabled()||this.no_options())return;let t=/^([01]\d|2[0-3]):([0-5]\d)$/.exec(e),o=t?mt(n,{hours:+t[1],minutes:+t[2],seconds:0,milliseconds:0}):void 0,d=o?nt(o,n):NaN;if(!Number.isFinite(d)||d<=0||d<this.min()||d>this._effectiveMax(this.max(),n)){this.end_time_error.set(`Enter an end time after the start time and within the allowed duration.`),this._onValidatorChange?.(),this.touch();return}this.setValue(d),this._setDurationOptions(),this._updateNoOptions(),this.touch()}_clearEndTimeError(){this.end_time_error()&&(this.end_time_error.set(``),this._onValidatorChange?.())}writeValue(e){this._clearEndTimeError(),this.duration.set(e),this._setDurationOptions(),this._updateNoOptions(),this._updateOption()}_setDurationOptions(){this.duration_options.set(this.generateDurationOptions(this.max(),this.min(),this.step()))}setDisabledState(e){this.disabled.set(e),this._updateNoOptions()}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouch=e}validate(e){return this.no_options()?{no_duration_options:!0}:this.end_time_error()?{invalid_end_time:!0}:null}registerOnValidatorChange(e){this._onValidatorChange=e}generateDurationOptions(e,n,t){let o=[],d=n,l=this.time(),u=l||null,v=this._effectiveMax(e,l),$=this._effectiveMax(Number.POSITIVE_INFINITY,l),F=new Set([...this.custom_options(),this.duration()].map(p=>Math.round(+p||0)).filter(p=>p>0));for(let p of F)o.push({id:p,date:u&&p<1440?ft(u,p).valueOf():void 0,name:p>=1440?`${ff({days:Math.floor(p/1440)})}`:`${ff({hours:Math.floor(p/60),minutes:p%60})}`});for(;d<=v;)o.push({id:d,date:u&&d<1440?ft(u,d).valueOf():void 0,name:d===0?ff({minutes:0},{zero:!0}):d>=1440?`${ff({days:Math.floor(d/1440)})}`:`${ff({hours:Math.floor(Math.abs(d)/60),minutes:d%60})}`}),d+=t;return o.sort((p,G)=>p.id-G.id),o.filter((p,G,ke)=>(G===0||ke[G-1].id!==p.id)&&p.id>0&&(F.has(p.id)?p.id<=$:p.id>=n&&p.id<=v))}_updateNoOptions(){let e=!this.disabled()&&(!this.duration_options()||this.duration_options().length===0);this.no_options()!==e&&(this.no_options.set(e),this._onValidatorChange?.())}_updateOption(){let e=this.duration_options();if(!e?.length)return;e.findIndex(t=>t.id===this.duration())<0&&this.setValue(e[0]?.id??this.min())}_effectiveMax(e,n){let t=this.end_time();if(t==null||!n)return e;let o=t*60,{hours:l,minutes:u}=Xo(n,this.timezone()||void 0),v=l*60+u;return Math.max(0,Math.min(e,o-v))}static{this.ɵfac=function(n){return new(n||i)}}static{this.ɵcmp=Tb({type:i,selectors:[[`a-duration-field`],[`duration-field`]],inputs:{max:[1,`max`],min:[1,`min`],step:[1,`step`],time:[1,`time`],disabled:[1,`disabled`],custom_options:[1,`custom_options`],force:[1,`force`],use_24hr:[1,`use_24hr`],timezone:[1,`timezone`],end_time:[1,`end_time`],allow_end_time:[1,`allow_end_time`]},outputs:{disabled:`disabledChange`},features:[b_([{provide:nt$1,useExisting:os(()=>i),multi:!0},{provide:st,useExisting:os(()=>i),multi:!0}]),na],ngContentSelectors:gn,decls:9,vars:2,consts:[[`menu`,`matMenu`],[`end_input`,``],[`type`,`button`,`duration-field`,``,`matRipple`,``,1,`border-neutral`,`flex`,`h-12`,`w-full`,`items-center`,`justify-between`,`rounded-sm`,`border`,`px-2`,3,`disabled`,`opacity-30`,`matMenuTriggerFor`],[`xPosition`,`before`,1,`max-h-60`,`min-w-[18rem]`],[`type`,`button`,`mat-menu-item`,``,1,`text-left`],[`mat-menu-item`,``,`disabled`,``],[1,`border-neutral`,`flex`,`h-12`,`w-full`,`items-center`,`rounded-sm`,`border`],[`type`,`time`,`aria-label`,`End time`,1,`h-full`,`min-w-0`,`flex-1`,`border-0`,`bg-transparent`,`px-4`,3,`change`,`blur`,`value`,`disabled`],[`type`,`button`,`end-time-options`,``,`aria-label`,`Choose duration`,1,`flex`,`h-full`,`w-12`,`shrink-0`,`items-center`,`justify-center`,3,`disabled`,`matMenuTriggerFor`],[1,`text-2xl`],[1,`text-xs`,`opacity-30`],[`role`,`alert`,1,`text-error`,`text-sm`],[`type`,`button`,`duration-field`,``,`matRipple`,``,1,`border-neutral`,`flex`,`h-12`,`w-full`,`items-center`,`justify-between`,`rounded-sm`,`border`,`px-2`,3,`disabled`,`matMenuTriggerFor`],[1,`flex`,`w-1/2`,`flex-1`,`flex-col`,`px-2`,`text-left`,`leading-tight`],[1,`truncate`],[1,`truncate`,`text-xs`,`opacity-30`],[`type`,`button`,`mat-menu-item`,``,1,`text-left`,3,`click`],[1,`flex`,`items-center`,`justify-between`],[1,`flex`,`flex-col`,`leading-tight`],[1,`ml-2`,`text-2xl`]],template:function(n,t){n&1&&(jT(),DT(0,Dn,8,9)(1,Nn,8,11,`button`,2),ea(2,`mat-menu`,3,0),CT(4,En,6,4,`button`,4,vn,!1,zn,2,0,`div`,5),gd(),ea(7,`mat-error`),BT(8),gd()),n&2&&(ET(t.allow_end_time()&&t.time()!=null&&!t.force()?0:1),Yw(4),bT(t.duration_options()))},dependencies:[Lt$1,I,G,Bt$1,Kt$1,ht$2,Sv,Ef,cM],styles:[`[_nghost-%COMP%]{width:100%}.no-subscript[_nghost-%COMP%]   mat-error[_ngcontent-%COMP%]{display:none}mat-form-field[_ngcontent-%COMP%]{width:100%}`]})}}return i})();var In=[`input`];var On=[`*`];var Be={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var Fn=new w(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>Be});var M=(function(i){return i[i.Init=0]=`Init`,i[i.Checked=1]=`Checked`,i[i.Unchecked=2]=`Unchecked`,i[i.Indeterminate=3]=`Indeterminate`,i})(M||{});var $e=class{source;checked};var Vn=(()=>{class i{_elementRef=y(Kn);_changeDetectorRef=y(jd);_ngZone=y(ue);_animationsDisabled=qn();_options=y(Fn,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let n=new $e;return n.source=this,n.checked=e,n}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new At;indeterminateChange=new At;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=M.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){y(N).load(Rt);let e=y(new Vy(`tabindex`),{optional:!0});this._options=this._options||Be,this.color=this._options.color||Be.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=y(oe).getId(`mat-mdc-checkbox-`),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let n=e!=this._indeterminate();this._indeterminate.set(e),n&&(e?this._transitionCheckState(M.Indeterminate):this._transitionCheckState(this.checked?M.Checked:M.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=ht(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let n=this._currentCheckState,t=this._getAnimationTargetElement();if(!(n===e||!t)&&(this._currentAnimationClass&&t.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(n,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){t.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{t.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!==`noop`?(this.indeterminate&&e!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?M.Checked:M.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,n){if(this._animationsDisabled)return``;switch(e){case M.Init:if(n===M.Checked)return this._animationClasses.uncheckedToChecked;if(n==M.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case M.Unchecked:return n===M.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case M.Checked:return n===M.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case M.Indeterminate:return n===M.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(e){let n=this._inputElement;n&&(n.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static ɵfac=function(n){return new(n||i)};static ɵcmp=Tb({type:i,selectors:[[`mat-checkbox`]],viewQuery:function(n,t){if(n&1&&dy(In,5),n&2){let o;HT(o=UT())&&(t._inputElement=o.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(n,t){n&2&&(iy(`id`,t.id),Jm(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),t_(t.color?`mat-`+t.color:`mat-accent`),yy(`_mat-animation-noopable`,t._animationsDisabled)(`mdc-checkbox--disabled`,t.disabled)(`mat-mdc-checkbox-disabled`,t.disabled)(`mat-mdc-checkbox-checked`,t.checked)(`mat-mdc-checkbox-disabled-interactive`,t.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,ES],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,ES],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,ES],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?void 0:IS(e)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,ES],checked:[2,`checked`,`checked`,ES],disabled:[2,`disabled`,`disabled`,ES],indeterminate:[2,`indeterminate`,`indeterminate`,ES]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[b_([{provide:nt$1,useExisting:os(()=>i),multi:!0},{provide:st,useExisting:i,multi:!0}]),na],ngContentSelectors:On,decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(n,t){if(n&1&&(jT(),ea(0,`label`,3),ay(`click`,function(d){return t._preventBubblingFromLabel(d)}),ea(1,`span`,4,0),ty(3,`span`,5),ea(4,`input`,6,1),ay(`blur`,function(){return t._onBlur()})(`click`,function(){return t._onInputClick()})(`change`,function(d){return t._onInteractionEvent(d)}),gd(),ty(6,`span`,7),ea(7,`span`,8),Gp(),ea(8,`svg`,9),ty(9,`path`,10),gd(),zp(),ty(10,`span`,11),gd(),ty(11,`span`,12),gd(),ea(12,`span`,13,2),BT(14),gd()()),n&2){let o=GT(2);ey(`labelPosition`,t.labelPosition)(`for`,t.inputId),Yw(4),yy(`mdc-checkbox--selected`,t.checked),ey(`checked`,t.checked)(`indeterminate`,t.indeterminate)(`disabled`,t.disabled&&!t.disabledInteractive)(`id`,t.inputId)(`required`,t.required)(`tabIndex`,t.disabled&&!t.disabledInteractive?-1:t.tabIndex),Jm(`aria-label`,t.ariaLabel||null)(`aria-labelledby`,t.ariaLabelledby)(`aria-describedby`,t.ariaDescribedby)(`aria-checked`,t.indeterminate?`mixed`:null)(`aria-controls`,t.ariaControls)(`aria-disabled`,t.disabled&&t.disabledInteractive?!0:null)(`aria-expanded`,t.ariaExpanded)(`aria-owns`,t.ariaOwns)(`name`,t.name)(`value`,t.value),Yw(7),ey(`matRippleTrigger`,o)(`matRippleDisabled`,t.disableRipple||t.disabled)(`matRippleCentered`,!0)}},dependencies:[yt,Wf],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-checkbox-state-layer-size, 40px);
  height: var(--%NS%mat-checkbox-state-layer-size, 40px);
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--%NS%mat-checkbox-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--%NS%mat-checkbox-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-checkbox-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-checkbox-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-checkbox-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-checkbox-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-checkbox-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
  color: var(--%NS%mat-checkbox-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
    color: GrayText;
  }
}
.mat-mdc-checkbox .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-checkbox-touch-target-size, 48px);
  width: var(--%NS%mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return i})();var ao=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Qo({type:i});static ɵinj=Er({imports:[Vn,zn$1]})}return i})();export{zi as a,ci as i,Vn as n,ao as r,$i as t};