import{$t as dM,A as Hy,An as la,Bn as n_,Bt as _o,Cr as v_,D as Gi,Dr as w_,Dt as XT,E as Gg,En as kg,Er as vi,Ft as ZS,Gn as oS,H as Ln,Ht as _y,I as JT,Ir as xy,Jn as p,Kn as oc,Kt as bc,Ln as me,Lt as Zy,Mn as ln$1,Nr as x_,Nt as Z$1,Or as we,P as JD,Pr as xc,Pt as Z2,Q as Pe,Rn as nD,Rr as y_,Rt as _,Sn as jN,Tn as kN,U as Ly,V as Lf,Vr as zy,Y as Og,Yt as cM,Zn as pb,Zt as cn,_n as hM,at as RC,b as E_,bt as Vf,d as By,dt as SN,er as qS,et as Py,fn as g_,fr as tD,ft as Sn$1,ht as Te,j as Ic,kn as lM,kt as Y2,l as Ac,ln as fM,m as D,nr as qg,or as r_,p as Cc,pr as tM,q as Ny,rn as eD,rt as QM,t as $_,u as Ar,ur as rv,wt as Wf,xt as Vy,yr as u_,zr as yo,zt as _N}from"./chunk-DtKoY7OQ.js";import{$ as Ji,$t as Ut$1,B as Gse,Br as nn$1,Bt as Ri,Ci as to,Cn as _i,E as D$1,Fi as wd,Fr as nG,Gi as xt,Jn as et,Kr as oae,Mn as cG,Mt as Qe,Ni as w2,Or as lN,P as Ee,Q as Je,Qt as Up,St as P2,V as H2,Vn as dN,X as JO,Yr as on$1,ai as qe,bn as Zy$1,c as on$2,cn as Wt$1,ct as Lr,dn as Xi,ea as zn$1,gi as sa,hn as Yt$1,hr as je,ii as q2,in as Vr,lt as M2,on as Wn,p as AS,pi as rn$1,pr as jD,sn as Wo,ta as zo,ti as pi,tr as gi,vr as jo,x as Bn,yt as Ol}from"./chunk-C3gxUCQr.js";import{s as Kt$1,u as ht}from"./main.js";import{t as E}from"./chunk-LLH18DtY.js";import{a as q,n as Ut$2,r as Wt$2,t as R}from"./chunk-AS70lnc1.js";var G=[`portal_content`];var J=[`*`];function K(t,r){t&1&&Py(0)}function W(t,r){if(t&1&&Ny(0,K,1,0,`ng-container`,3),t&2){let e=g_(2);xy(`ngComponentOutlet`,e.component())(`ngComponentOutletInjector`,e.injector)}}function Z(t,r){if(t&1&&(Cc(0,`div`,2),cM(1,`sanitize`)),t&2)xy(`innerHTML`,lM(1,1,g_(2).html()),pb)}function $(t,r){t&1&&Py(0)}function ee(t,r){if(t&1&&Ny(0,$,1,0,`ng-container`,4),t&2){let e=g_(2);xy(`ngTemplateOutlet`,e.template())(`ngTemplateOutletContext`,e.data())}}function te(t,r){if(t&1&&(oc(0,`div`,1),XT(1,W,1,2,`ng-container`)(2,Z,2,3,`div`,2)(3,ee,1,2,`ng-container`),Vf()),t&2){let e,o=g_();oS(),JT((e=o.type())===`component`?1:e===`html`?2:3)}}var oe=(()=>{class t{static{this.ɵfac=function(o){return new(o||t)}}static{this.ɵprov=_({token:t,factory:t.ɵfac})}}return t})();var he=(()=>{class t extends pi{constructor(){super(...arguments),this._element=p(cn),this._overlay=p(Zy$1),this._injector=p(me),this._view_container_ref=p(ln$1),this.x_pos=xc(`end`,{alias:`xPosition`}),this.y_pos=xc(`top`,{alias:`yPosition`}),this.content=xc(void 0),this.data=xc(void 0),this.backdrop=xc(!0),this.hover=xc(!1),this.delay=xc(0),this.x_offset=xc(0,{alias:`xOffset`}),this.y_offset=xc(0,{alias:`yOffset`}),this.type=Te(()=>this.content()instanceof yo?`template`:this.content()instanceof RC?`component`:`html`),this.template=Te(()=>this.content()),this.html=Te(()=>this.content()),this.component=Te(()=>this.content()),this._overlay_ref=null,this._portal_content=Y2.required(`portal_content`,{read:yo}),this._update_injector=vi(()=>{this.injector=me.create({providers:[{provide:oe,useValue:{data:this.data(),close:()=>this.close()}}],parent:this._injector})})}ngOnInit(){let e=()=>this.hover()?``:this.open(),o=s=>this._canOpenHoverTooltip(s)?this.open():``,i=s=>this._canOpenHoverTooltip(s)?this.close():``;this._element.nativeElement.addEventListener(`click`,e),this._element.nativeElement.addEventListener(`touchend`,e),this._element.nativeElement.addEventListener(`pointerenter`,o),this._element.nativeElement.addEventListener(`pointerleave`,i),this.subscription(`click`,()=>this._element.nativeElement.removeEventListener(`click`,e)),this.subscription(`touchend`,()=>this._element.nativeElement.removeEventListener(`touchend`,e)),this.subscription(`pointerenter`,()=>this._element.nativeElement.removeEventListener(`pointerenter`,o)),this.subscription(`pointerleave`,()=>this._element.nativeElement.removeEventListener(`pointerleave`,i))}ngOnChanges(e){this._overlay_ref&&(e.x_pos||e.y_pos||e.x_offset||e.y_offset||e.content)&&this.open()}ngOnDestroy(){super.ngOnDestroy(),this.close()}open(){this.content()&&this.timeout(`open`,()=>{let e=this.hover(),o=this.delay();e&&o&&this.timeout(`onclose`,()=>this.close(),o),this._overlay_ref&&this.close();let i=new Ri(this._portal_content(),this._view_container_ref),s=`end`,u=`top`,h=this.y_pos();this._overlay_ref=this._overlay.create({hasBackdrop:!!this.backdrop()&&!e,positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withDefaultOffsetX(this.x_offset()).withDefaultOffsetY(this.y_offset()).withPositions([{originX:this.x_pos()||s,originY:(h===`top`?`bottom`:h==`bottom`?`top`:h)||u,overlayX:this.x_pos()||s,overlayY:this.y_pos()||u}])}),this._overlay_ref.attach(i),this.backdrop()&&this.subscription(`backdrop`,this._overlay_ref.backdropClick().subscribe(()=>this.close()))},50)}close(){this.clearTimeout(`open`),this._overlay_ref&&(this._overlay_ref.dispose(),this._overlay_ref=null)}_canOpenHoverTooltip(e){return this.hover()?!(`pointerType`in e)||e.pointerType!==`touch`:!1}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=rv(t)))(i||t)}})()}static{this.ɵcmp=Lf({type:t,selectors:[[``,`customTooltip`,``]],viewQuery:function(o,i){o&1&&zy(i._portal_content,G,5,yo),o&2&&E_()},inputs:{x_pos:[1,`xPosition`,`x_pos`],y_pos:[1,`yPosition`,`y_pos`],content:[1,`content`],data:[1,`data`],backdrop:[1,`backdrop`],hover:[1,`hover`],delay:[1,`delay`],x_offset:[1,`xOffset`,`x_offset`],y_offset:[1,`yOffset`,`y_offset`]},features:[_y,Ln],ngContentSelectors:J,decls:3,vars:0,consts:[[`portal_content`,``],[`custom-tooltip`,``,1,`relative`,`print:hidden`],[3,`innerHTML`],[4,`ngComponentOutlet`,`ngComponentOutletInjector`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(o,i){o&1&&(v_(),y_(0),Ny(1,te,4,1,`ng-template`,null,0,hM))},dependencies:[JD,SN,_N,E],styles:[`[_nghost-%COMP%]{pointer-events:auto!important}
/*# sourceMappingURL=custom-tooltip.component.css.map */`]})}}return t})();function Oe(i,s){let e=+D$1(i)-+D$1(s);return e<0?-1:e>0?1:e}function Pt(i,s){let e=D$1(i,s?.in);return+nn$1(e,s)==+dN(e,s)}function Lt(i,s,e){let[n,t,o]=jo(e?.in,i,i,s),d=Oe(t,o),l=Math.abs(lN(t,o));if(l<1)return 0;t.getMonth()===1&&t.getDate()>27&&t.setDate(30),t.setMonth(t.getMonth()-d*l);let u=Oe(t,o)===-d;Pt(n)&&l===1&&Oe(n,o)===1&&(u=!1);let v=d*(l-+u);return v===0?0:v}function Le(i,s){let e=D$1(i,s?.in);return e.setDate(1),e.setHours(0,0,0,0),e}function jt(i,s,e){let[n,t]=jo(e?.in,i,s);return n.getFullYear()===t.getFullYear()&&n.getMonth()===t.getMonth()}var Zt=[`*`];var Xt=(i,s)=>s.id;function Yt(i,s){if(i&1&&(oc(0,`div`,4),$_(1),cM(2,`date`),Vf()),i&2){let e=g_();oS(),Wf(` `,fM(2,1,e.active_time(),e.time_format()+` (z)`,e.tz()),` `)}}function Wt(i,s){if(i&1&&(oc(0,`div`,13),$_(1),cM(2,`date`),Vf()),i&2){let e=g_(2);oS(),Wf(` `,fM(2,1,e.force_time(),e.time_format()+` (z)`,e.tz()),` `)}}function Kt(i,s){i&1&&(oc(0,`icon`,14),$_(1,` done `),Vf())}function Jt(i,s){if(i&1){let e=u_();oc(0,`button`,9),bc(`click`,function(){Og(e);let t=g_();return kg(t.setValue(t.force_time().toString()))}),oc(1,`div`,10)(2,`div`,11)(3,`div`,12),$_(4),cM(5,`date`),Vf(),XT(6,Wt,3,5,`div`,13),Vf(),XT(7,Kt,2,0,`icon`,14),Vf()()}if(i&2){let e=g_();xy(`value`,e.force_time()),oS(4),Wf(` `,dM(5,4,e.force_time(),e.time_format()),` `),oS(2),JT(e.timezone()&&e.tz()?6:-1),oS(),JT(e.active_time()===e.force_time()?7:-1)}}function en(i,s){if(i&1&&(oc(0,`div`,13),$_(1),cM(2,`date`),Vf()),i&2){let e=g_().$implicit,n=g_();oS(),Wf(` `,fM(2,1,e.date,n.time_format()+` (z)`,n.tz()),` `)}}function tn(i,s){i&1&&(oc(0,`icon`,14),$_(1,` done `),Vf())}function nn(i,s){if(i&1){let e=u_();oc(0,`button`,9),bc(`click`,function(){let t=Og(e).$implicit;return kg(g_().setValue(t.id))}),oc(1,`div`,10)(2,`div`,11)(3,`div`,12),$_(4),cM(5,`date`),Vf(),XT(6,en,3,5,`div`,13),Vf(),XT(7,tn,2,0,`icon`,14),Vf()()}if(i&2){let e=s.$implicit,n=g_();xy(`value`,e.id),Ic(`data-time`,e.id),oS(4),tD(` `,dM(5,6,e.date,n.time_format()),` `,n.extra_info_fn()(e.date),` `),oS(2),JT(n.timezone()&&n.tz()?6:-1),oS(),JT(n.active_time()===e.date?7:-1)}}function on(i,s){i&1&&(oc(0,`div`,8),$_(1,`No time options to select`),Vf())}function an(i,s){i&1&&(oc(0,`mat-error`),y_(1),Vf())}function Bt(i){if(i==null||i===``)return null;let s=Number(i);return Number.isFinite(s)?s:null}var ci=(()=>{class i extends pi{constructor(){super(...arguments),this.step=xc(15),this.disabled=Z2(void 0),this.no_past_times=xc(!0),this.use_24hr=xc(!1),this.force_time=xc(void 0),this.no_error=xc(void 0),this.extra_info_fn=xc(e=>``),this.from=xc(je(Date.now()).valueOf()),this.range=xc(void 0),this._range=Te(()=>{let e=this.range();if(!e)return;let n=Bt(e.start),t=Bt(e.end);if(!(n===null||t===null||t<=n))return{start:n,end:t}}),this.min_duration=xc(0),this.timezone=xc(``),this.date=Z$1(new Date().valueOf()),this.time=Z$1(rn$1(new Date,`HH:mm`)),this._time_options=Z$1([]),this.show_select=Z$1(!1),this.active_time=Z$1(Date.now()),this.no_options=Z$1(!1),this._menu_trigger=Y2(Wt$2),this.time_format=Te(()=>this.use_24hr()?`HH : mm`:`h : mm a`),this._local_tz=w2(Intl.DateTimeFormat().resolvedOptions().timeZone),this.tz=Te(()=>{let e=this.timezone();if(!e)return``;let n=w2(e);return n===this._local_tz?``:n})}ngOnInit(){this.show_select.set(!0),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions(),this.timeout(`hide`,()=>this.show_select.set(!1));let e=this.timezone()||void 0;this.active_time.set(this._time_options().find(n=>n.id===M2(this.date(),e))?.date||this.active_time())}ngOnChanges(e){(e.no_past_times||e.step||e.from||e.range||e.min_duration)&&(this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions())}ngAfterViewInit(){let e=this._menu_trigger();e&&this.subscription(`menu_opened`,e.menuOpened.subscribe(()=>{this._scrollToSelectedTime()}))}_scrollToSelectedTime(){requestAnimationFrame(()=>{if(!this._menu_trigger()?.menu)return;let n=document.querySelector(`.mat-mdc-menu-panel`);if(!n)return;let t=this.timezone()||void 0,o=this.time()||M2(new Date,t),d=n.querySelector(`[data-time="${o}"]`);if(!d&&this._time_options().length){let l=this._timeToMinutes(o),u=this._time_options()[0],v=Infinity;for(let $ of this._time_options()){let F=this._timeToMinutes($.id),p=Math.abs(F-l);p<v&&(v=p,u=$)}d=n.querySelector(`[data-time="${u.id}"]`)}if(d){if(typeof d.scrollIntoView!=`function`)return;d.scrollIntoView({block:`center`,behavior:`instant`})}})}_timeToMinutes(e){let[n,t]=e.split(`:`).map(Number);return n*60+t}time_options(){let e=this.timezone()||void 0,n=(this.time()||`00:00`).split(`:`),t=P2(this.date(),+n[0],+n[1],e),{minutes:o}=jD(t,e),d=M2(t,e),l=[...this._time_options()];return o%this.step()!==0&&this._isWithinRange(t)&&!l.find(u=>u.id===d)&&(l.push({date:t,id:d}),l.sort((u,v)=>`${u.id}`.localeCompare(`${v.id}`))),l}setValue(e){this.time.set(e);let n=this.timezone()||void 0;if(this._onChange){let l=(this.time()||`00:00`).split(`:`),u=P2(this.date(),+l[0],+l[1],n);H2(),this._onChange(u)}let t=this.force_time()||this.time(),o=(typeof t==`string`?t:M2(t,n)).split(`:`),d=P2(this.date(),+o[0],+o[1],n);this.active_time.set(this._time_options().find(l=>l.id===(typeof t==`string`?t:M2(t,n)))?.date||d)}writeValue(e){this.date.set(e||this.date());let n=this.timezone()||void 0,t=Lr(this.date());t=Vr(t,{nearestTo:5}),this.time.set(M2(t,n)),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions();let o=this.force_time(),d=o?M2(o,n):this.time();this.active_time.set(this._time_options().find(l=>l.id===d)?.date||t.valueOf())}setDisabledState(e){this.disabled.set(e),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times()||e,this.step())),this._updateNoOptions()}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouch=e}_updateNoOptions(){this.no_options.set(!this.disabled()&&(!this._time_options()||this._time_options().length===0)&&!this.force_time())}generateAvailableTimes(e,n,t=15){let o=n?this.from():Math.max(this.from(),Date.now()),d=[],l=this._range(),u=this.timezone()||void 0,v=u?Wn(e,u):je(e).valueOf(),$=u?zn$1(e,u):nn$1(e).valueOf(),F=this.min_duration()||0,p=l?l.start*60:void 0,G=l?l.end*60:void 0,ke=G!=null&&F>0?G-F:G,Ue=Math.max(v,o,p!=null?v+p*60*1e3:v),qe=Math.min($,ke!=null?v+ke*60*1e3:$);if(Ue>qe)return d;let pe=this._roundUpToStep(Ue,t),Ht=this._roundDownToStep(qe,t);for(;!Ji(pe,Ht);)d.push({date:pe.valueOf(),id:M2(pe,u)}),pe=Ee(pe,t);return d}_isWithinRange(e){if(Wt$1(e,this.from()))return!1;let n=this._range();if(!n)return!0;let t=n.start*60,o=n.end*60,d=this.min_duration()||0,l=d>0?o-d:o,{hours:v,minutes:$}=jD(e,this.timezone()||void 0),F=v*60+$;return!(F<t||F>l)}_roundUpToStep(e,n){let t=Vr(e,{nearestTo:n});return Wt$1(t,e)&&(t=Ee(t,n)),Lr(t)}_roundDownToStep(e,n){let t=Vr(e,{nearestTo:n});return Ji(t,e)&&(t=Ee(t,-n)),Lr(t)}static{this.ɵfac=(()=>{let e;return function(t){return(e||(e=rv(i)))(t||i)}})()}static{this.ɵcmp=Lf({type:i,selectors:[[`a-time-field`],[`time-field`]],viewQuery:function(n,t){n&1&&zy(t._menu_trigger,Wt$2,5),n&2&&E_()},inputs:{step:[1,`step`],disabled:[1,`disabled`],no_past_times:[1,`no_past_times`],use_24hr:[1,`use_24hr`],force_time:[1,`force_time`],no_error:[1,`no_error`],extra_info_fn:[1,`extra_info_fn`],from:[1,`from`],range:[1,`range`],min_duration:[1,`min_duration`],timezone:[1,`timezone`]},outputs:{disabled:`disabledChange`},features:[tM([{provide:Wo,useExisting:la(()=>i),multi:!0}]),_y,Ln],ngContentSelectors:Zt,decls:15,vars:12,consts:[[`menu`,`matMenu`],[`type`,`button`,`time-field`,``,`matRipple`,``,1,`border-neutral`,`flex`,`h-12`,`w-full`,`items-center`,`justify-between`,`rounded-sm`,`border`,`px-2`,3,`disabled`,`matMenuTriggerFor`],[1,`flex`,`w-1/2`,`flex-1`,`flex-col`,`px-2`,`text-left`,`leading-tight`],[1,`truncate`],[1,`truncate`,`text-xs`,`opacity-30`],[1,`text-2xl`],[1,`max-h-60`,`min-w-[18rem]`],[`type`,`button`,`mat-menu-item`,``,1,`text-left`,3,`value`],[`mat-menu-item`,``,`disabled`,``],[`type`,`button`,`mat-menu-item`,``,1,`text-left`,3,`click`,`value`],[1,`flex`,`items-center`,`justify-between`],[1,`flex`,`flex-col`,`leading-tight`],[1,``],[1,`text-xs`,`opacity-30`],[1,`ml-2`,`text-2xl`]],template:function(n,t){if(n&1&&(v_(),oc(0,`button`,1)(1,`div`,2)(2,`div`,3),$_(3),cM(4,`date`),Vf(),XT(5,Yt,3,5,`div`,4),Vf(),oc(6,`icon`,5),$_(7,`arrow_drop_down`),Vf()(),oc(8,`mat-menu`,6,0),XT(10,Jt,8,7,`button`,7),n_(11,nn,8,9,`button`,7,Xt,!1,on,2,0,`div`,8),Vf(),XT(14,an,2,0,`mat-error`)),n&2){let o=w_(9);Zy(`opacity-30`,t.disabled()||t.no_options()),xy(`disabled`,t.disabled()||t.no_options())(`matMenuTriggerFor`,o),oS(3),Wf(` `,dM(4,9,t.active_time(),t.time_format()),` `),oS(2),JT(t.timezone()&&t.tz()?5:-1),oS(5),JT(t.force_time()?10:-1),oS(),r_(t.time_options()),oS(3),JT(t.no_error()?-1:14)}},dependencies:[JD,Ut$2,R,q,Wt$2,Kt$1,ht,oae,kN],styles:[`mat-form-field[_ngcontent-%COMP%]{width:100%}
/*# sourceMappingURL=time-field.component.css.map */`]})}}return i})();var $t=(i,s)=>s.id;function rn(i,s){if(i&1&&(oc(0,`div`,7),$_(1),cM(2,`date`),Vf()),i&2){let e=s.$implicit;oS(),Wf(` `,dM(2,1,e?.id,`EE`),` `)}}function dn(i,s){i&1&&Cc(0,`div`,11)}function sn(i,s){if(i&1){let e=u_();oc(0,`button`,10),bc(`click`,function(){let t=Og(e).$implicit;return kg(g_().setValue(t.id))}),$_(1),cM(2,`date`),XT(3,dn,1,0,`div`,11),Cc(4,`div`,12),Vf()}if(i&2){let e=s.$implicit,n=g_();Zy(`hover:bg-base-200`,e.id!==n.active_date())(`text-base-300!`,!e.is_month)(`text-secondary-content`,e.id===n.active_date())(`text-base-content`,e.id!==n.active_date())(`bg-secondary`,e.id===n.active_date())(`font-normal`,e.id!==n.active_date()),xy(`disabled`,e.id<n.from()||e.id>n.to()),oS(),Wf(` `,dM(2,15,e.id,`d`),` `),oS(2),JT(n.today===e.id?3:-1)}}var Ut=(()=>{class i extends pi{constructor(){super(),this._settings=p(to),this.from=xc(0),this.to=xc(Date.now()*10),this.offset_weekday=xc(0),this.today=je(Date.now()).valueOf(),this.date=Z$1(Date.now()),this.active_date=Z$1(je(Date.now()).valueOf()),this.offset=Z$1(0),this.date_list=Z$1([]),this.displayed_dates=this.date_list.asReadonly(),this.display_date=Te(()=>this.displayed_dates()[6]?.id||this.date()),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e}ngOnInit(){this.generateDates()}ngOnChanges(e){e.offset_weekday&&this.generateDates()}setValue(e){if(!AS(e)||e<this.from()||e>=this.to())return;let n=new Date(e);this.date.set(on$1(this.date(),{date:n.getDate(),month:n.getMonth(),year:n.getFullYear()}).valueOf()),this.active_date.set(je(this.date()).valueOf()),this._onChange&&this._onChange(e)}writeValue(e){let n=this._validDate(e);this.date.set(n),this.active_date.set(je(n).valueOf()),this.offset.set(0),this.generateDates()}changeMonth(e){this.offset.update(n=>n+e),this.generateDates()}setMonthToCurrent(){let e=Lt(this.date(),Le(Date.now()));this.offset.set(-e),this.generateDates()}generateDates(){let e=this._settings.signal(`week_start`,this.offset_weekday())(),n=Bn(this._validDate(this.date()),this.offset()),t=_i(Le(n),{weekStartsOn:this._validWeekday(e)}),o=je(Date.now()),d=[];for(;d.length<42;)d.push({id:t.valueOf(),is_past:Wt$1(t,o),is_month:jt(t,n)}),t=Je(t,1);this.date_list.set(d)}_validDate(e){return AS(e)?e:Date.now()}_validWeekday(e){return Number.isInteger(e)&&e>=0&&e<=6?e:0}static{this.ɵfac=function(n){return new(n||i)}}static{this.ɵcmp=Lf({type:i,selectors:[[`date-calendar`]],inputs:{from:[1,`from`],to:[1,`to`],offset_weekday:[1,`offset_weekday`]},features:[tM([{provide:Wo,useExisting:la(()=>i),multi:!0}]),_y,Ln],decls:19,vars:10,consts:[[1,`p-2`],[1,`flex`,`items-center`,`justify-between`],[1,`pr-2`,`pl-1.5`,`font-medium`,3,`dblclick`],[1,`flex`,`items-center`],[`icon`,``,`matRipple`,``,`name`,`schedule-next-month`,3,`click`,`disabled`],[`icon`,``,`matRipple`,``,`name`,`schedule-previous-month`,3,`click`,`disabled`],[1,`border-base-200`,`mb-2`,`flex`,`items-center`,`border-b`,`pb-2`,`text-sm`],[1,`flex-1`,`text-center`,`opacity-60`],[1,`flex`,`flex-wrap`,`items-center`,`justify-between`],[`icon`,``,`name`,`schedule-set-date`,1,`relative`,`my-0.5`,`h-9`,`w-9`,`min-w-[14%]`,`overflow-visible`,3,`hover:bg-base-200`,`text-base-300!`,`text-secondary-content`,`text-base-content`,`bg-secondary`,`font-normal`,`disabled`],[`icon`,``,`name`,`schedule-set-date`,1,`relative`,`my-0.5`,`h-9`,`w-9`,`min-w-[14%]`,`overflow-visible`,3,`click`,`disabled`],[`matRipple`,``,1,`border-secondary`,`absolute`,`-inset-0.5`,`z-20`,`overflow-hidden`,`rounded-full`,`border`],[`matRipple`,``,1,`absolute`,`inset-0`,`overflow-hidden`,`rounded-full`]],template:function(n,t){n&1&&(oc(0,`div`,0)(1,`div`,1)(2,`button`,2),bc(`dblclick`,function(){return t.setMonthToCurrent()}),$_(3),cM(4,`date`),Vf(),oc(5,`div`,3)(6,`button`,4),bc(`click`,function(){return t.changeMonth(-1)}),oc(7,`icon`),$_(8,`chevron_left`),Vf()(),oc(9,`button`,5),bc(`click`,function(){return t.changeMonth(1)}),oc(10,`icon`),$_(11,`chevron_right`),Vf()()()(),oc(12,`div`,6),n_(13,rn,3,4,`div`,7,$t),cM(15,`slice`),Vf(),oc(16,`div`,8),n_(17,sn,5,18,`button`,9,$t),Vf()()),n&2&&(oS(3),Wf(` `,dM(4,3,t.display_date(),`LLLL yyyy`),` `),oS(3),xy(`disabled`,t.displayed_dates()[0]?.id<t.from()),oS(3),xy(`disabled`,t.displayed_dates()[34]?.id>t.to()),oS(4),r_(fM(15,6,t.displayed_dates(),0,7)),oS(4),r_(t.displayed_dates()))},dependencies:[JD,oae,sa,Up,jN,kN],encapsulation:2})}}return i})();var mn=[`*`];function ln(i,s){if(i&1&&($_(0),cM(1,`date`)),i&2){let e=g_();Wf(` `,dM(1,1,e.date(),e.date_format()),` `)}}function hn(i,s){i&1&&(oc(0,`span`,5),$_(1),cM(2,`translate`),Vf()),i&2&&(oS(),eD(lM(2,1,`FORM.DATE_EMPTY`)))}function _n(i,s){if(i&1&&(oc(0,`span`),$_(1),Vf()),i&2){let e=g_(2);oS(),eD(e.start_of_day())}}function un(i,s){i&1&&(oc(0,`span`),$_(1,` - `),Vf())}function pn(i,s){if(i&1&&(oc(0,`span`),$_(1),Vf()),i&2){let e=g_(2);oS(),eD(e.end_of_day())}}function bn(i,s){if(i&1&&(oc(0,`div`,6),XT(1,_n,2,1,`span`),XT(2,un,2,0,`span`),XT(3,pn,2,1,`span`),Vf()),i&2){let e=g_();oS(),JT(e.range()!==2?1:-1),oS(),JT(e.range()===0?2:-1),oS(),JT(e.range()!==1?3:-1)}}function fn(i,s){if(i&1){let e=u_();oc(0,`button`,10),bc(`click`,function(t){Og(e);return kg(g_().clearValue(t))}),oc(1,`icon`),$_(2,`close`),Vf()()}if(i&2){let e=g_();xy(`disabled`,e.date()===null||e.date()===void 0||e.disabled()),Ic(`aria-label`,`Clear date`)}}function kn(i,s){i&1&&(oc(0,`span`),y_(1),Vf())}function xn(i,s){if(i&1){let e=u_();oc(0,`div`,11)(1,`date-calendar`,12),bc(`ngModelChange`,function(t){Og(e);return kg(g_().setValue(t))}),Vf(),qS(),Vf()}if(i&2){let e=g_();oS(),xy(`ngModel`,e.date()||e.now)(`from`,e.from().valueOf())(`to`,e.until().valueOf())(`offset_weekday`,e.week_start()),ZS()}}var qt=(function(i){return i[i.Both=0]=`Both`,i[i.Start=1]=`Start`,i[i.End=2]=`End`,i})(qt||{});var zi=(()=>{class i extends pi{get has_error(){return this._control?.invalid&&this._control?.touched}constructor(){super(),this._injector=p(me),this.from_date=xc(je(Date.now()).valueOf(),{alias:`from`}),this.to_date=xc(void 0,{alias:`to`}),this.week_start=xc(0),this.use_24hr=xc(!1),this.disabled=Z2(void 0),this.short=xc(!1),this.timezone=xc(``),this.range=xc(qt.Both),this.clear=xc(!1),this.date=Z$1(null),this.now=Date.now(),this.date_format=Te(()=>this.short()?`MMM d, yyyy`:`MMMM d, yyyy`),this.time_format=Te(()=>this.use_24hr()?`HH : mm`:`h : mm a`),this._date_pipe=new kN(`en`),this.start_of_day=Te(()=>{let e=je(this.date()||Date.now()).valueOf(),n=`MMM d, ${this.time_format()}${this.range()===1?` (z)`:``}`;return this._date_pipe.transform(e,n,this.tz())}),this.end_of_day=Te(()=>{let e=nn$1(this.date()||Date.now()).valueOf(),n=`MMM d, ${this.time_format()}${this.range()===1?` (z)`:``}`;return this._date_pipe.transform(e,n,this.tz())}),this._local_tz=w2(Intl.DateTimeFormat().resolvedOptions().timeZone),this.tz=Te(()=>{let e=this.timezone();if(!e)return``;let n=w2(e);return n===this._local_tz?``:n}),this._tooltip=Y2(he),this.from=Te(()=>this.from_date()?new Date(this.from_date()):je(new Date)),this.until=Te(()=>this.to_date()?new Date(this.to_date()):Ol(nn$1(new Date),1))}ngOnInit(){this._control=this._injector.get(Xi)}setValue(e){let n=this.timezone()||void 0,{hours:t,minutes:o}=jD(this.date()||Date.now(),n),d=P2(e,t,o,n);if(n){let l=new Date(e);d=Lr(gi(on$1(qe(this.date()||Date.now(),n),{year:l.getFullYear(),month:l.getMonth(),date:l.getDate(),hours:t,minutes:o,seconds:0,milliseconds:0}),n)).valueOf()}d<this.from().valueOf()&&(d=this.from().valueOf()),this.date.set(d),H2(),this._onChange&&this._onChange(d),this._tooltip()?.close()}clearValue(e){e?.stopPropagation(),this.date.set(null),H2(),this._onTouch&&this._onTouch(null),this._onChange&&this._onChange(null)}writeValue(e){this.date.set(e??null),this._tooltip()?.close()}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouch=e}setDisabledState(e){this.disabled.set(e)}static{this.ɵfac=function(n){return new(n||i)}}static{this.ɵcmp=Lf({type:i,selectors:[[`a-date-field`],[`date-field`]],viewQuery:function(n,t){n&1&&zy(t._tooltip,he,5),n&2&&E_()},inputs:{from_date:[1,`from`,`from_date`],to_date:[1,`to`,`to_date`],week_start:[1,`week_start`],use_24hr:[1,`use_24hr`],disabled:[1,`disabled`],short:[1,`short`],timezone:[1,`timezone`],range:[1,`range`],clear:[1,`clear`]},outputs:{disabled:`disabledChange`},features:[tM([{provide:Wo,useExisting:la(()=>i),multi:!0}]),_y],ngContentSelectors:mn,decls:15,vars:8,consts:[[`calendar_picker`,``],[1,`flex`,`items-center`,`gap-1`],[`type`,`button`,`customTooltip`,``,`yPosition`,`top`,`matRipple`,``,1,`border-neutral`,`flex`,`h-12`,`w-full`,`flex-1`,`items-center`,`justify-between`,`rounded-sm`,`border`,3,`content`,`disabled`],[1,`flex`,`w-1/2`,`flex-1`,`flex-col`,`truncate`,`px-4`,`py-2`,`text-left`,`leading-tight`],[1,`text-base`,`font-normal`],[1,`opacity-30`],[1,`truncate`,`text-xs`,`opacity-30`],[1,`flex`,`h-10`,`w-10`,`items-center`,`justify-center`,`text-2xl`],[`type`,`button`,`icon`,``,`matRipple`,``,1,`border-error`,`text-error`,`flex`,`h-12`,`w-12`,`items-center`,`justify-center`,`rounded-sm`,`border`,3,`disabled`],[1,`error`,`text-error`,`h-5`,`p-1`,`text-xs`],[`type`,`button`,`icon`,``,`matRipple`,``,1,`border-error`,`text-error`,`flex`,`h-12`,`w-12`,`items-center`,`justify-center`,`rounded-sm`,`border`,3,`click`,`disabled`],[1,`bg-base-100`,`relative`,`w-[18rem]`,`rounded-sm`,`px-2`,`py-4`],[3,`ngModelChange`,`ngModel`,`from`,`to`,`offset_weekday`]],template:function(n,t){if(n&1&&(v_(),oc(0,`div`,1)(1,`button`,2)(2,`div`,3)(3,`div`,4),XT(4,ln,2,4)(5,hn,3,3,`span`,5),Vf(),XT(6,bn,4,3,`div`,6),Vf(),oc(7,`div`,7)(8,`icon`),$_(9,`today`),Vf()()(),XT(10,fn,3,2,`button`,8),Vf(),oc(11,`div`,9),XT(12,kn,2,0,`span`),Vf(),Ny(13,xn,2,4,`ng-template`,null,0,hM)),n&2){let o=w_(14);oS(),Zy(`opacity-30`,t.disabled()),xy(`content`,o)(`disabled`,t.disabled()),oS(3),JT(t.date()!==null&&t.date()!==void 0?4:5),oS(2),JT(t.timezone()&&t.tz()&&t.date()!==null&&t.date()!==void 0?6:-1),oS(4),JT(t.clear()?10:-1),oS(2),JT(t.has_error?12:-1)}},dependencies:[JD,cG,nG,JO,Ut,oae,he,sa,Up,kN,on$2],styles:[`.no-subscript[_nghost-%COMP%] > .error[_ngcontent-%COMP%]{display:none}
/*# sourceMappingURL=date-field.component.css.map */`]})}}return i})();var gn=[`*`];var vn=(i,s)=>s.id;function yn(i,s){if(i&1&&(oc(0,`div`,10),$_(1),cM(2,`date`),Vf()),i&2){let e=g_(2);oS(),Wf(` `,fM(2,1,e.time()+e.duration()*6e4,e.time_format()+` (z)`,e.tz()),` `)}}function Cn(i,s){if(i&1&&(oc(0,`div`,11),$_(1),Vf()),i&2){let e=g_(2);oS(),Wf(` `,e.end_time_error(),` `)}}function Dn(i,s){if(i&1){let e=u_();oc(0,`div`,6)(1,`input`,7,1),bc(`change`,function(){Og(e);let t=w_(2);return kg(g_().setEndTime(t.value))})(`blur`,function(){Og(e);return kg(g_().touch())}),Vf(),oc(3,`button`,8)(4,`icon`,9),$_(5,`arrow_drop_down`),Vf()()(),XT(6,yn,3,5,`div`,10),XT(7,Cn,2,1,`div`,11)}if(i&2){let e=g_(),n=w_(3);Zy(`opacity-30`,e.disabled()||e.no_options()),oS(),xy(`value`,e.end_time_value())(`disabled`,e.disabled()||e.no_options()),Ic(`aria-invalid`,!!e.end_time_error()),oS(2),xy(`disabled`,e.disabled()||e.no_options())(`matMenuTriggerFor`,n),oS(3),JT(e.timezone()&&e.tz()?6:-1),oS(),JT(e.end_time_error()?7:-1)}}function Mn(i,s){if(i&1&&(oc(0,`div`,15),$_(1),cM(2,`date`),Vf()),i&2){let e=g_(2);oS(),Wf(` `,fM(2,1,e.selected()?.date,e.time_format()+` (z)`,e.tz()),` `)}}function Nn(i,s){if(i&1&&(oc(0,`button`,12)(1,`div`,13)(2,`div`,14),$_(3),cM(4,`date`),Vf(),XT(5,Mn,3,5,`div`,15),Vf(),oc(6,`icon`,9),$_(7,`arrow_drop_down`),Vf()()),i&2){let e=g_(),n=w_(3);Zy(`opacity-30`,e.disabled()||e.no_options()),xy(`disabled`,e.disabled()||e.no_options())(`matMenuTriggerFor`,n),oS(3),nD(` `,e.selected()?.date?dM(4,8,e.selected()?.date,e.selected().id>=1440?`mediumDate`:e.time_format())+` (`:e.duration_options()?.length?``:`No duration options available`,``,e.selected()?.name,``,e.selected()?.date?`)`:``,` `),oS(2),JT(e.timezone()&&e.tz()?5:-1)}}function Sn(i,s){if(i&1&&(oc(0,`div`,15),$_(1),cM(2,`date`),Vf()),i&2){let e=g_(2).$implicit,n=g_();oS(),Wf(` `,fM(2,1,e.date,n.time_format()+` (z)`,n.tz()),` `)}}function wn(i,s){if(i&1&&(oc(0,`div`,18)(1,`div`,14),$_(2),cM(3,`date`),Vf(),XT(4,Sn,3,5,`div`,15),Vf()),i&2){let e=g_().$implicit,n=g_();oS(2),nD(` `,e.date?dM(3,4,e.date,e.id>=1440?`mediumDate`:n.time_format())+` (`:``,``,e.name,``,e.date?`)`:``,` `),oS(2),JT(n.timezone()&&n.tz()?4:-1)}}function Tn(i,s){i&1&&(oc(0,`icon`,19),$_(1,` done `),Vf())}function En(i,s){if(i&1){let e=u_();oc(0,`button`,16),bc(`click`,function(){let t=Og(e).$implicit,o=g_();return o.setValue(t.id),kg(o.touch())}),oc(1,`div`,17),XT(2,wn,5,7,`div`,18),oc(3,`div`),$_(4),Vf(),XT(5,Tn,2,0,`icon`,19),Vf()()}if(i&2){let e=s.$implicit,n=g_();Ic(`data-duration`,e.id),oS(2),JT(n.force()?-1:2),oS(2),eD(n.force()),oS(),JT(n.selected()?.id===e.id?5:-1)}}function zn(i,s){i&1&&(oc(0,`div`,5),$_(1,`No duration options to select`),Vf())}var $i=(()=>{class i{constructor(){this.max=xc(240),this.min=xc(30),this.step=xc(15),this.time=xc(void 0),this.disabled=Z2(void 0),this.custom_options=xc([]),this.force=xc(void 0),this.use_24hr=xc(!1),this.timezone=xc(``),this.end_time=xc(void 0),this.allow_end_time=xc(!1),this.end_time_error=Z$1(``),this.end_time_value=Te(()=>this.time()!=null?rn$1(Ee(this.time(),this.duration()),`HH:mm`):``),this.duration=Z$1(60),this.duration_options=Z$1([]),this.no_options=Z$1(!1),this.time_format=Te(()=>this.use_24hr()?`HH : mm`:`h : mm a`),this.selected=Te(()=>this.duration_options().find(e=>e.id===this.duration())),this._local_tz=w2(Intl.DateTimeFormat().resolvedOptions().timeZone),this.tz=Te(()=>{let e=this.timezone();if(!e)return``;let n=w2(e);return n===this._local_tz?``:n})}ngOnInit(){this._setDurationOptions(),this._updateNoOptions(),this._updateOption()}ngOnChanges(e){this._clearEndTimeError(),(e.max||e.min||e.step||e.time||e.custom_options||e.end_time||e.timezone)&&(this._setDurationOptions(),this._updateNoOptions(),this._updateOption())}setValue(e){this._clearEndTimeError(),this.duration.set(e),this._onChange&&this._onChange(+e)}touch(){this._onTouch?.(this.duration())}setEndTime(e){let n=this.time();if(!this.allow_end_time()||n==null||this.disabled()||this.no_options())return;let t=/^([01]\d|2[0-3]):([0-5]\d)$/.exec(e),o=t?on$1(n,{hours:+t[1],minutes:+t[2],seconds:0,milliseconds:0}):void 0,d=o?et(o,n):NaN;if(!Number.isFinite(d)||d<=0||d<this.min()||d>this._effectiveMax(this.max(),n)){this.end_time_error.set(`Enter an end time after the start time and within the allowed duration.`),this._onValidatorChange?.(),this.touch();return}this.setValue(d),this._setDurationOptions(),this._updateNoOptions(),this.touch()}_clearEndTimeError(){this.end_time_error()&&(this.end_time_error.set(``),this._onValidatorChange?.())}writeValue(e){this._clearEndTimeError(),this.duration.set(e),this._setDurationOptions(),this._updateNoOptions(),this._updateOption()}_setDurationOptions(){this.duration_options.set(this.generateDurationOptions(this.max(),this.min(),this.step()))}setDisabledState(e){this.disabled.set(e),this._updateNoOptions()}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouch=e}validate(e){return this.no_options()?{no_duration_options:!0}:this.end_time_error()?{invalid_end_time:!0}:null}registerOnValidatorChange(e){this._onValidatorChange=e}generateDurationOptions(e,n,t){let o=[],d=n,l=this.time(),u=l||null,v=this._effectiveMax(e,l),$=this._effectiveMax(Number.POSITIVE_INFINITY,l),F=new Set([...this.custom_options(),this.duration()].map(p=>Math.round(+p||0)).filter(p=>p>0));for(let p of F)o.push({id:p,date:u&&p<1440?Ee(u,p).valueOf():void 0,name:p>=1440?`${q2({days:Math.floor(p/1440)})}`:`${q2({hours:Math.floor(p/60),minutes:p%60})}`});for(;d<=v;)o.push({id:d,date:u&&d<1440?Ee(u,d).valueOf():void 0,name:d===0?q2({minutes:0},{zero:!0}):d>=1440?`${q2({days:Math.floor(d/1440)})}`:`${q2({hours:Math.floor(Math.abs(d)/60),minutes:d%60})}`}),d+=t;return o.sort((p,G)=>p.id-G.id),o.filter((p,G,ke)=>(G===0||ke[G-1].id!==p.id)&&p.id>0&&(F.has(p.id)?p.id<=$:p.id>=n&&p.id<=v))}_updateNoOptions(){let e=!this.disabled()&&(!this.duration_options()||this.duration_options().length===0);this.no_options()!==e&&(this.no_options.set(e),this._onValidatorChange?.())}_updateOption(){let e=this.duration_options();if(!e?.length)return;e.findIndex(t=>t.id===this.duration())<0&&this.setValue(e[0]?.id??this.min())}_effectiveMax(e,n){let t=this.end_time();if(t==null||!n)return e;let o=t*60,{hours:l,minutes:u}=jD(n,this.timezone()||void 0),v=l*60+u;return Math.max(0,Math.min(e,o-v))}static{this.ɵfac=function(n){return new(n||i)}}static{this.ɵcmp=Lf({type:i,selectors:[[`a-duration-field`],[`duration-field`]],inputs:{max:[1,`max`],min:[1,`min`],step:[1,`step`],time:[1,`time`],disabled:[1,`disabled`],custom_options:[1,`custom_options`],force:[1,`force`],use_24hr:[1,`use_24hr`],timezone:[1,`timezone`],end_time:[1,`end_time`],allow_end_time:[1,`allow_end_time`]},outputs:{disabled:`disabledChange`},features:[tM([{provide:Wo,useExisting:la(()=>i),multi:!0},{provide:zo,useExisting:la(()=>i),multi:!0}]),Ln],ngContentSelectors:gn,decls:9,vars:2,consts:[[`menu`,`matMenu`],[`end_input`,``],[`type`,`button`,`duration-field`,``,`matRipple`,``,1,`border-neutral`,`flex`,`h-12`,`w-full`,`items-center`,`justify-between`,`rounded-sm`,`border`,`px-2`,3,`disabled`,`opacity-30`,`matMenuTriggerFor`],[`xPosition`,`before`,1,`max-h-60`,`min-w-[18rem]`],[`type`,`button`,`mat-menu-item`,``,1,`text-left`],[`mat-menu-item`,``,`disabled`,``],[1,`border-neutral`,`flex`,`h-12`,`w-full`,`items-center`,`rounded-sm`,`border`],[`type`,`time`,`aria-label`,`End time`,1,`h-full`,`min-w-0`,`flex-1`,`border-0`,`bg-transparent`,`px-4`,3,`change`,`blur`,`value`,`disabled`],[`type`,`button`,`end-time-options`,``,`aria-label`,`Choose duration`,1,`flex`,`h-full`,`w-12`,`shrink-0`,`items-center`,`justify-center`,3,`disabled`,`matMenuTriggerFor`],[1,`text-2xl`],[1,`text-xs`,`opacity-30`],[`role`,`alert`,1,`text-error`,`text-sm`],[`type`,`button`,`duration-field`,``,`matRipple`,``,1,`border-neutral`,`flex`,`h-12`,`w-full`,`items-center`,`justify-between`,`rounded-sm`,`border`,`px-2`,3,`disabled`,`matMenuTriggerFor`],[1,`flex`,`w-1/2`,`flex-1`,`flex-col`,`px-2`,`text-left`,`leading-tight`],[1,`truncate`],[1,`truncate`,`text-xs`,`opacity-30`],[`type`,`button`,`mat-menu-item`,``,1,`text-left`,3,`click`],[1,`flex`,`items-center`,`justify-between`],[1,`flex`,`flex-col`,`leading-tight`],[1,`ml-2`,`text-2xl`]],template:function(n,t){n&1&&(v_(),XT(0,Dn,8,9)(1,Nn,8,11,`button`,2),oc(2,`mat-menu`,3,0),n_(4,En,6,4,`button`,4,vn,!1,zn,2,0,`div`,5),Vf(),oc(7,`mat-error`),y_(8),Vf()),n&2&&(JT(t.allow_end_time()&&t.time()!=null&&!t.force()?0:1),oS(4),r_(t.duration_options()))},dependencies:[Ut$2,R,q,Wt$2,Kt$1,ht,JD,oae,kN],styles:[`[_nghost-%COMP%]{width:100%}.no-subscript[_nghost-%COMP%]   mat-error[_ngcontent-%COMP%]{display:none}mat-form-field[_ngcontent-%COMP%]{width:100%}
/*# sourceMappingURL=duration-field.component.css.map */`]})}}return i})();var In=[`input`];var On=[`*`];var Be={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var Fn=new D(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>Be});var M=(function(i){return i[i.Init=0]=`Init`,i[i.Checked=1]=`Checked`,i[i.Unchecked=2]=`Unchecked`,i[i.Indeterminate=3]=`Indeterminate`,i})(M||{});var $e=class{source;checked};var Vn=(()=>{class i{_elementRef=p(cn);_changeDetectorRef=p(_o);_ngZone=p(we);_animationsDisabled=Ut$1();_options=p(Fn,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let n=new $e;return n.source=this,n.checked=e,n}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new Pe;indeterminateChange=new Pe;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=M.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){p(xt).load(wd);let e=p(new Ac(`tabindex`),{optional:!0});this._options=this._options||Be,this.color=this._options.color||Be.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=p(Yt$1).getId(`mat-mdc-checkbox-`),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let n=e!=this._indeterminate();this._indeterminate.set(e),n&&(e?this._transitionCheckState(M.Indeterminate):this._transitionCheckState(this.checked?M.Checked:M.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=Z$1(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let n=this._currentCheckState,t=this._getAnimationTargetElement();if(!(n===e||!t)&&(this._currentAnimationClass&&t.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(n,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){t.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{t.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!==`noop`?(this.indeterminate&&e!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?M.Checked:M.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,n){if(this._animationsDisabled)return``;switch(e){case M.Init:if(n===M.Checked)return this._animationClasses.uncheckedToChecked;if(n==M.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case M.Unchecked:return n===M.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case M.Checked:return n===M.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case M.Indeterminate:return n===M.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(e){let n=this._inputElement;n&&(n.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static ɵfac=function(n){return new(n||i)};static ɵcmp=Lf({type:i,selectors:[[`mat-checkbox`]],viewQuery:function(n,t){if(n&1&&By(In,5),n&2){let o;Vy(o=Hy())&&(t._inputElement=o.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(n,t){n&2&&(Ly(`id`,t.id),Ic(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),x_(t.color?`mat-`+t.color:`mat-accent`),Zy(`_mat-animation-noopable`,t._animationsDisabled)(`mdc-checkbox--disabled`,t.disabled)(`mat-mdc-checkbox-disabled`,t.disabled)(`mat-mdc-checkbox-checked`,t.checked)(`mat-mdc-checkbox-disabled-interactive`,t.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,Gi],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,Gi],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,Gi],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?void 0:QM(e)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Gi],checked:[2,`checked`,`checked`,Gi],disabled:[2,`disabled`,`disabled`,Gi],indeterminate:[2,`indeterminate`,`indeterminate`,Gi]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[tM([{provide:Wo,useExisting:la(()=>i),multi:!0},{provide:zo,useExisting:i,multi:!0}]),Ln],ngContentSelectors:On,decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(n,t){if(n&1&&(v_(),oc(0,`label`,3),bc(`click`,function(d){return t._preventBubblingFromLabel(d)}),oc(1,`span`,4,0),Cc(3,`span`,5),oc(4,`input`,6,1),bc(`blur`,function(){return t._onBlur()})(`click`,function(){return t._onInputClick()})(`change`,function(d){return t._onInteractionEvent(d)}),Vf(),Cc(6,`span`,7),oc(7,`span`,8),Gg(),oc(8,`svg`,9),Cc(9,`path`,10),Vf(),qg(),Cc(10,`span`,11),Vf(),Cc(11,`span`,12),Vf(),oc(12,`span`,13,2),y_(14),Vf()()),n&2){let o=w_(2);xy(`labelPosition`,t.labelPosition)(`for`,t.inputId),oS(4),Zy(`mdc-checkbox--selected`,t.checked),xy(`checked`,t.checked)(`indeterminate`,t.indeterminate)(`disabled`,t.disabled&&!t.disabledInteractive)(`id`,t.inputId)(`required`,t.required)(`tabIndex`,t.disabled&&!t.disabledInteractive?-1:t.tabIndex),Ic(`aria-label`,t.ariaLabel||null)(`aria-labelledby`,t.ariaLabelledby)(`aria-describedby`,t.ariaDescribedby)(`aria-checked`,t.indeterminate?`mixed`:null)(`aria-controls`,t.ariaControls)(`aria-disabled`,t.disabled&&t.disabledInteractive?!0:null)(`aria-expanded`,t.ariaExpanded)(`aria-owns`,t.ariaOwns)(`name`,t.name)(`value`,t.value),oS(7),xy(`matRippleTrigger`,o)(`matRippleDisabled`,t.disableRipple||t.disabled)(`matRippleCentered`,!0)}},dependencies:[Up,Gse],styles:[`.mdc-checkbox {
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
`],encapsulation:2})}return i})();var ao=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Ar({type:i});static ɵinj=Sn$1({imports:[Vn,Qe]})}return i})();export{zi as a,ci as i,Vn as n,he as o,ao as r,$i as t};
//# debugId=56653ca6-05e1-5b95-87f6-a313ac4307ce
//# sourceMappingURL=chunk-kPdsD8i2.js.map