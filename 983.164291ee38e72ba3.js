"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([[983],{1983:(Le,te,c)=>{c.d(te,{Xp:()=>le,ck:()=>k.c,P2:()=>Pt});var x=c(4755),h=c(9401),V=c(2921),Q=c(877),oe=c(9002),se=c(8023),w=c(8150),A=c(5554),g=c(5861),m=c(337),T=c(7224),F=c(3174),k=c(6667),e=c(2223),j=(c(4731),c(1217));c(9114),c(787);var y=c(8186),G=(c(2986),c(7577),c(73),c(4702),c(3159),c(6198),c(6888)),b=(c(1228),c(4850)),ie=(c(9627),c(5306)),$=c(2722),N=c(9972),ae=c(8115),H=c(5650),M=c(591),X=c(1086),L=c(3426),z=c(13),I=c(7545),J=c(7221),P=c(5154),K=c(2198),Y=c(2994),fe=c(2084),ze=c(9502),W=c(6286),Be=c(2306),De=c(1022),Fe=c(7303),Ue=c(9697);function Ge(n,_){if(1&n&&(e.TgZ(0,"div",7)(1,"div",13)(2,"label"),e._uU(3,"Resource:"),e.qZA(),e.TgZ(4,"div",14),e._uU(5),e.qZA()()()),2&n){const t=e.oxw(2);e.xp6(5),e.hij(" ",t.resource.name||t.resource.map_id||"Unknown Resource"," ")}}function Je(n,_){1&n&&(e.TgZ(0,"div",7)(1,"div",8)(2,"label"),e._uU(3,"Host"),e.qZA(),e._UZ(4,"a-user-search-field",15),e.qZA()())}const Ye=function(){return{standalone:!0}};function Ve(n,_){if(1&n){const t=e.EpF();e.TgZ(0,"main",5),e.YNc(1,Ge,6,1,"div",6),e.YNc(2,Je,5,0,"div",6),e.TgZ(3,"div",7)(4,"div",8)(5,"label"),e._uU(6,"Date"),e.qZA(),e.TgZ(7,"a-date-field",9),e._uU(8," Date and time must be in the future "),e.qZA()()(),e.TgZ(9,"div",7)(10,"div",10)(11,"label"),e._uU(12,"Start Time"),e.qZA(),e.TgZ(13,"a-time-field",11),e.NdJ("ngModelChange",function(s){e.CHM(t);const a=e.oxw();return e.KtG(a.form.patchValue({date:s}))}),e.qZA()(),e.TgZ(14,"div",10)(15,"label"),e._uU(16,"End Time"),e.qZA(),e._UZ(17,"a-duration-field",12),e.qZA()()()}if(2&n){const t=e.oxw();let o;e.Q6J("formGroup",t.form),e.xp6(1),e.Q6J("ngIf",t.resource),e.xp6(1),e.Q6J("ngIf",t.host),e.xp6(5),e.Q6J("to",t.book_until),e.xp6(6),e.Q6J("ngModel",t.form.value.date)("ngModelOptions",e.DdM(12,Ye))("use_24hr",t.use_24hr_time),e.xp6(4),e.Q6J("time",null==(o=t.form.get("date"))?null:o.value)("max",600)("min",60)("step",60)("use_24hr",t.use_24hr_time)}}let re=(()=>{class n{get use_24hr_time(){return this._settings.get("app.use_24_hour_time")}constructor(t,o){this._data=t,this._settings=o,this.host=this._data.host,this.form=new h.cw({user:new h.NI(this._data.user),date:new h.NI(this._data.date),duration:new h.NI(this._data.duration)}),this.book_until=this._data.until,this.resource=this._data.resource}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(W.WI),e.Y36(m.gb))},n.\u0275cmp=e.Xpm({type:n,selectors:[["set-datetime-modal"]],decls:10,vars:2,consts:[["classs","flex items-center justify-between"],["icon","","mat-dialog-close",""],["class","w-[24rem] max-w-[85vw] pt-4",3,"formGroup",4,"ngIf"],[1,"w-full","p-2","border-t","border-gray-200","flex","items-center","justify-center"],["btn","","matRipple","",1,"w-32",3,"mat-dialog-close"],[1,"w-[24rem]","max-w-[85vw]","pt-4",3,"formGroup"],["class","flex flex-col sm:flex-row space-x-0 sm:space-x-2 w-[640px] max-w-[calc(100%-2rem)] mx-auto",4,"ngIf"],[1,"flex","flex-col","sm:flex-row","space-x-0","sm:space-x-2","w-[640px]","max-w-[calc(100%-2rem)]","mx-auto"],[1,"flex","flex-col","flex-1","w-full","sm:w-1/4"],["formControlName","date",3,"to"],[1,"flex","flex-col","flex-1","w-full","sm:w-1/3"],[3,"ngModel","ngModelOptions","use_24hr","ngModelChange"],["formControlName","duration",3,"time","max","min","step","use_24hr"],[1,"flex","flex-col","flex-1","w-full","sm:w-1/4","mb-2"],[1,"px-4","py-3","border","border-gray-200","rounded","w-full","mb-4"],["formControlName","user"]],template:function(t,o){1&t&&(e.TgZ(0,"header",0)(1,"h2"),e._uU(2,"Set date and time"),e.qZA(),e.TgZ(3,"button",1)(4,"app-icon"),e._uU(5,"close"),e.qZA()()(),e.YNc(6,Ve,18,13,"main",2),e.TgZ(7,"footer",3)(8,"button",4),e._uU(9," Continue "),e.qZA()()),2&t&&(e.xp6(6),e.Q6J("ngIf",o.form),e.xp6(2),e.Q6J("mat-dialog-close",o.form.value))},dependencies:[x.O5,ie.o,j.wG,W.ZT,h.JJ,h.JL,h.On,h.sg,h.u,Be.Q,De.B,Fe.N,Ue.d]}),n})();var ge=c(1838),Qe=c(3779),je=c(3494),Ee=c(9136),He=c(3970);const Ke=["explore-device-info",""];function We(n,_){if(1&n&&(e.TgZ(0,"p",17)(1,"label"),e.SDv(2,18),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.mac," ")}}function qe(n,_){if(1&n&&(e.TgZ(0,"p",19)(1,"label"),e.SDv(2,20),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.manufacturer," ")}}function et(n,_){if(1&n&&(e.TgZ(0,"p",21)(1,"label"),e.SDv(2,22),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.os," ")}}function tt(n,_){if(1&n&&(e.TgZ(0,"p",23)(1,"label"),e.SDv(2,24),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.ssid," ")}}function ot(n,_){if(1&n&&(e.TgZ(0,"p",25)(1,"label"),e.SDv(2,26),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",(null==t.user?null:t.user.name)||(null==t.user?null:t.user.username)||t.username," ")}}function st(n,_){if(1&n&&(e.TgZ(0,"p",27)(1,"label"),e.SDv(2,28),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.user.type," ")}}function nt(n,_){if(1&n){const t=e.EpF();e.TgZ(0,"div",6),e.NdJ("mouseleave",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.close())}),e._UZ(1,"div",7),e.TgZ(2,"div",8),e.YNc(3,We,4,1,"p",9),e.TgZ(4,"p")(5,"label"),e.SDv(6,10),e.qZA(),e._uU(7),e.qZA(),e.TgZ(8,"p")(9,"label"),e.SDv(10,11),e.qZA(),e._uU(11),e.qZA(),e.YNc(12,qe,4,1,"p",12),e.YNc(13,et,4,1,"p",13),e.YNc(14,tt,4,1,"p",14),e.YNc(15,ot,4,1,"p",15),e.YNc(16,st,4,1,"p",16),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(3),e.Q6J("ngIf",t.mac&&!t.hide_fields.includes("mac")),e.xp6(4),e.hij(" ",t.variance,"m"),e.xp6(4),e.hij(" ",t.last_seen,""),e.xp6(1),e.Q6J("ngIf",t.manufacturer&&!t.hide_fields.includes("manufacturer")),e.xp6(1),e.Q6J("ngIf",t.os&&!t.hide_fields.includes("os")),e.xp6(1),e.Q6J("ngIf",t.ssid&&!t.hide_fields.includes("ssid")),e.xp6(1),e.Q6J("ngIf",t.username&&!t.hide_fields.includes("username")),e.xp6(1),e.Q6J("ngIf",t.user&&!t.hide_fields.includes("user"))}}const it=[];let ve=(()=>{class n extends m.cx{get hide_fields(){return this._settings.get("app.explore.hide_device_fields")||it}get last_seen(){return(0,Qe.Z)(1e3*(this._details.last_seen||0),{addSuffix:!0})}get diameter(){return 100*this._details.variance*this.zoom}get distance(){return Math.abs((0,je.Z)(1e3*(this._details.last_seen||0),new Date))}get distance_color(){return this.distance<10?"#43a047":this.distance<20?"#ffb300":"#e53935"}constructor(t,o,s){super(),this._details=t,this._settings=o,this._element=s,this.username="",this.user=this._details.user,this.mac=this._details.mac,this.manufacturer=this._details.manufacturer,this.os=this._details.os,this.ssid=this._details.ssid,this.variance=this._details.variance?.toFixed(2),this.bg_color=this._details.bg_color||this.distance_color,this.zoom=1}ngOnInit(t=0){t>10||setTimeout(()=>{const o=this._element.nativeElement.parentElement?.parentElement;if(!o)return this.ngOnInit(++t);const s_y=parseInt(o.style.top,10)/100,s_x=parseInt(o.style.left,10)/100;this.y_pos=s_y>=.5?"bottom":"top",this.x_pos=s_x>=.5?"end":"start",this.subscription("zoom",this._details.zoom$.subscribe(a=>this.zoom=a))},200)}loadUser(){var t=this;return(0,g.Z)(function*(){if(t.username)return;const o=(0,y.rTZ)(t._details.system,"LocationServices");if(!o)return;t.username="Loading...";const s=yield o.execute("check_ownership_of",[t.mac]).catch(a=>null);t.username=s&&s.assigned_to?s.assigned_to:""})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(Ee.u),e.Y36(m.gb),e.Y36(e.SBq))},n.\u0275cmp=e.Xpm({type:n,selectors:[["","explore-device-info",""]],features:[e.qOj],attrs:Ke,decls:7,vars:9,consts:function(){let _,t,o,s,a,r,i,l;return _=$localize`:␟4e79bc7b2a23c2e4e80d256c8167411cf124bd20␟1921442792032576180:Accuracy:`,t=$localize`:␟1c564bebf178f9c70f2c66a80393137bfa0d2ea8␟5291488112436395082:Last Seen:`,o=$localize`:␟14802d5580219b4522c9c50e1a9f401aee191e1e␟5080596488336446120:MAC:`,s=$localize`:␟a082daef9c0b66268ce56dfa8d96d47a04d2c4b1␟6296767522110275448:Manufacturer:`,a=$localize`:␟5544405b325c518c94412239610d44250d5a223a␟2346706060395913038:OS:`,r=$localize`:␟afd0fc7b37f54299537ba2abc9babf749adf383e␟4345272263810420547:SSID:`,i=$localize`:␟67fc3fe0566f8700b84a908c35497759db78addc␟140822705245800362:Username:`,l=$localize`:␟e78c0d60ac39787f62c9159646fe0b3c1ed55a1d␟2736556170366900089:Type:`,[["name","radius",1,"radius","absolute","center","bg-blue-600","bg-opacity-25","border-8","border-dashed","border-blue-600","rounded-full"],["shadow","",1,"absolute","center","bg-black/40","h-8","w-8","rounded-full"],["name","dot",1,"h-3","w-3","absolute","center","rounded-full","shadow","border-2","border-white"],["dot",""],["customTooltip","",1,"absolute","inset-0","pointer-events-auto",3,"content","backdrop","xPosition","yPosition","hover","mouseenter"],["device_tooltip",""],["name","device-info",1,"w-64","rounded","bg-white","dark:bg-neutral-800","p-4","top-0","left-0","shadow","pointer-events-none","mx-2",3,"mouseleave"],[1,"arrow"],[1,"details"],["class","break-words",4,"ngIf"],_,t,["type","",4,"ngIf"],["os","",4,"ngIf"],["ssid","",4,"ngIf"],["username","",4,"ngIf"],["user","",4,"ngIf"],[1,"break-words"],o,["type",""],s,["os",""],a,["ssid",""],r,["username",""],i,["user",""],l]},template:function(t,o){if(1&t&&(e._UZ(0,"div",0)(1,"div",1)(2,"div",2,3),e.TgZ(4,"div",4),e.NdJ("mouseenter",function(){return o.loadUser()}),e.qZA(),e.YNc(5,nt,17,8,"ng-template",null,5,e.W1O)),2&t){const s=e.MAs(6);e.Akn("height: "+o.diameter+"%; width: "+o.diameter+"%;"),e.xp6(2),e.Udp("background-color",o.bg_color),e.xp6(2),e.Q6J("content",s)("backdrop",!1)("xPosition",o.x_pos)("yPosition",o.y_pos)("hover",!0)}},dependencies:[x.O5,He.X],styles:["[_nghost-%COMP%]{pointer-events:auto}[_nghost-%COMP%] > [name=dot][_ngcontent-%COMP%]{background-color:#616161}[_nghost-%COMP%]:hover > [name=radius][_ngcontent-%COMP%]{opacity:1}[name=radius][_ngcontent-%COMP%]{opacity:0;transition:opacity .2s;pointer-events:none}"]}),n})();var q=c(354);let le=(()=>{class n extends m.cx{constructor(t,o,s,a,r){super(),this._state=t,this._org=o,this._settings=s,this._bookings=a,this._dialog=r,this._in_use=new M.X([]),this._options=new M.X({}),this._presence=new M.X([]),this._signs_of_life=new M.X([]),this._statuses={},this._users={},this._departments={},this._checked_in=new M.X([]),this.restrictions=this._org.active_building.pipe((0,z.b)(50),(0,I.w)(()=>(0,y.rlq)(this._org.building.id,"desk_restrictions").pipe((0,J.K)(()=>(0,X.of)({details:[]})))),(0,b.U)(i=>i?.details instanceof Array?i.details:[]),(0,P.d)(1)),this.desk_list=this._state.level.pipe((0,z.b)(50),(0,I.w)(i=>(0,y.rlq)(i.id,"desks").pipe((0,J.K)(()=>(0,X.of)({details:[]})),(0,b.U)(l=>(l?.details instanceof Array?l.details:[]).map(p=>new ze.n({...p,zone:i}))))),(0,J.K)(i=>[]),(0,P.d)(1)),this._bind=this._state.level.pipe((0,z.b)(300),(0,K.h)(i=>!!i),(0,Y.b)(i=>{this._statuses={};const l=this._org.binding("area_management");if(!l)return;let p=(0,y.rTZ)(l,"AreaManagement")?.binding(i.id);p&&(this.subscription("lvl-in_use",p.listen().subscribe(d=>this.processBindingChange(d||{},l))),this.subscription("lvl-in_use_bind",p.bind()))})),this._booking_list=(0,L.aj)([this._options,this._state.level]).pipe((0,K.h)(([i,l])=>(i.use_api||i.date>(0,$.Z)(Date.now()).valueOf())&&!!l),(0,I.w)(([i,l])=>(0,q.F2)({type:"desk",period_start:(0,N.Z)((0,ae.Z)(i.date||Date.now())),period_end:(0,N.Z)((0,$.Z)(i.date||Date.now())),zones:l.id})),(0,z.b)(200),(0,Y.b)(i=>{this._in_use.next(i.map(l=>l.asset_id)),this._checked_in.next(i.filter(l=>l.checked_in).map(l=>l.asset_id))}),(0,P.d)(1)),this._state_change=(0,L.aj)([this.desk_list,this._in_use,this._presence,this._checked_in,this._signs_of_life,this.restrictions,this._options]).pipe((0,z.b)(50),(0,b.U)(([i,l,p,d,u,E])=>{this._statuses={};for(const{id:v,bookable:f}of i){const S=l.some(O=>v===O),R=p.some(O=>v===O),Z=u.some(O=>v===O),B=d.some(O=>v===O)||S&&this._settings.get("app.desk.auto_checkin"),C=E.filter(O=>O.items?.includes(v)||O.assets?.includes(v)).find(({start:O,end:ee})=>Date.now()>=O&&Date.now()<ee);this._statuses[v]=f&&!C?S||R||B?R||B?"busy":"pending":Z?"signs-of-life":"free":"not-bookable"}this.processDesks(i)})),this.init()}init(){var t=this;return(0,g.Z)(function*(){yield t._org.initialised.pipe((0,T.P)(o=>o)).toPromise(),t.setOptions({enable_booking:!1!==t._settings.get("app.desks.enable_maps")}),t.subscription("bookings",t._booking_list.subscribe()),t.subscription("bind",t._bind.subscribe()),t.subscription("restrictions",t.restrictions.subscribe()),t.subscription("changes",t._state_change.subscribe()),t.subscription("desks",t.desk_list.subscribe(o=>t.processDesks(o)))})()}setOptions(t){this._options.next({...this._options.getValue(),...t})}processBindingChange({value:t},o){const s=(t||[]).filter(l=>!["desk","booking"].includes(l.location)),a=(t||[]).filter(l=>"desk"===l.location||"booking"===l.location&&"desk"===l.type);(this._options.getValue().date||Date.now())<=(0,$.Z)(Date.now()).valueOf()&&!this._options.getValue().use_api&&(this._in_use.next(a.filter(l=>"booking"===l.location).map(l=>l.map_id||l.asset_id)),this._checked_in.next(a.filter(l=>"booking"===l.location&&l.checked_in).map(l=>l.map_id||l.asset_id)),this._presence.next(a.filter(l=>l.at_location).map(l=>l.map_id||l.asset_id)),this._signs_of_life.next(a.filter(l=>l.signs_of_life).map(l=>l.map_id||l.asset_id)));const i=this._settings.get("app.department_map")||{};for(const l of a)this._users[l.map_id||l.asset_id]=l.staff_name,this._departments[l.map_id||l.asset_id]=i[l.department]||"";this.processDevices(s,o),this.timeout("update",()=>this.updateStatus(),100)}updateStatus(){const t={},o=this._settings.get("app.explore.colors")||{};for(const s in this._statuses)this._statuses[s]&&(t[`#${s}`]={fill:o[`desk-${this._statuses[s]}`]||o[`${this._statuses[s]}`]||G.y[`${this._statuses[s]}`]});this._state.setStyles("desks",t)}processDevices(t,o){const s=[];for(const a of t){const r=a.x/a.map_width,i=a.y/a.map_height;s.push({track_id:`device:hover:${r},${i}`,location:{x:a.coordinates_from?.includes("right")?1-r:r,y:a.coordinates_from?.includes("bottom")?1-i:i},content:ve,z_index:20,data:{...a,system:o}})}this._state.setFeatures("devices",s)}processDesks(t){var o=this;const s=[],a=[],r=this._options.getValue();for(const i of t){if(s.push({track_id:`desk:hover:${i.map_id||i.id}`,location:i.id,content:ge.c,full_size:!0,no_scale:!0,data:{id:i.map_id||i.id,map_id:i.name,name:i.name||i.map_id,user:this._users[i.map_id]||i.staff_name,status:this._statuses[i.map_id],department:this._departments[i.map_id]||""},z_index:20}),!i.bookable)continue;const l=function(){var p=(0,g.Z)(function*(){if("free"!==o._statuses[i.id])return(0,m.cB)(`${i.name||"Desk"} is unavailable at this time.`);if(i.groups?.length&&!i.groups.find(f=>(0,m.ar)().groups.includes(f)))return(0,m.cB)(`You are not allowed to book ${i.name}.`);o._bookings.newForm(),o._bookings.setOptions({type:"desk"}),r.date&&(o._bookings.form.patchValue({date:r.date}),o._bookings.form.patchValue({all_day:!!r.all_day}));let{date:d,duration:u,user:E}=yield o._setBookingTime(o._bookings.form.value.date,o._bookings.form.value.duration,o._options.getValue()?.custom??!1,i);E=E||r.host||(0,m.ar)();const v=E?.email;o._bookings.form.patchValue({resources:[i],asset_id:i.id,asset_name:i.name,date:d,duration:r.all_day?720:u,map_id:i?.map_id||i?.id,description:i.name,user:E,user_email:v,booking_type:"desk",zones:i.zone?[i.zone?.parent_id,i.zone?.id]:[]}),yield o._bookings.confirmPost().catch(f=>{throw console.log(f),(0,m.cB)(`Failed to book desk ${i.name||i.id}. ${f.message||f.error||f}`),f}),o._users[i.map_id]=(r.host||(0,m.ar)())?.name,(0,m.t5)(`Successfully booked desk ${i.name||i.id}`)});return function(){return p.apply(this,arguments)}}();a.push({id:i.id,action:"click",priority:10,callback:l}),a.push({id:i.id,action:"touchend",priority:10,callback:l})}this._state.setActions("desks",this._options.getValue().enable_booking?a:[]),this._state.setFeatures("desks",s),this.timeout("update",()=>this.updateStatus(),100)}_setBookingTime(t,o,s=!1,a=null){var r=this;return(0,g.Z)(function*(){let i=null;if(r._settings.get("app.desks.allow_time_changes")){const l=(0,$.Z)((0,H.Z)(Date.now(),r._settings.get("app.desks.available_period")||90)),d=yield r._dialog.open(re,{data:{date:t,duration:o,until:l,host:s,resource:a}}).afterClosed().toPromise();if(!d)throw"User cancelled";t=d.date,o=d.duration,i=d.user}return{date:t,duration:o,user:i}})()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(k.c),e.LFG(F.w),e.LFG(m.gb),e.LFG(fe.f),e.LFG(W.uw))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();c(7552),c(4402),c(2641),c(567),c(7121),c(5912),c(437),c(8461),c(656),c(9012),c(4618),c(7184),c(8467),c(9275),c(1718),c(3496),c(3905);let Pt=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[x.ez,V.Kk,h.u5,h.UX,Q.rP,oe.U8,se.eL,w.W,A.E]}),n})()},8461:(Le,te,c)=>{c.d(te,{s:()=>se});var x=c(6667),h=c(2223),V=c(5306),Q=c(1217),oe=c(3649);let se=(()=>{class w{constructor(g){this._state=g,this.zoomIn=()=>this._state.setPositions(Math.min(10,1.2*this._state.positions.zoom),this._state.positions.center),this.zoomOut=()=>this._state.setPositions(Math.max(1,this._state.positions.zoom*(1/1.2)),this._state.positions.center),this.reset=()=>this._state.setPositions(1,{x:.5,y:.5})}}return w.\u0275fac=function(g){return new(g||w)(h.Y36(x.c))},w.\u0275cmp=h.Xpm({type:w,selectors:[["explore-zoom-controls"]],decls:9,vars:0,consts:function(){let A,g,m;return A=$localize`:␟34fb6028a6630cf3a7308084b31e86e89d057965␟1470758907984185227:Zoom In`,g=$localize`:␟677ce9c57b5558cb10f0b39327d5a965bfb21dc5␟1356460275822781324:Zoom Out`,m=$localize`:␟77981432124895c410e5b9157b3deb948831ffc6␟5016012668378976433:Reset Zoom & Center`,[["z-in","","icon","","matRipple","","matTooltip",A,1,"bg-white","dark:bg-neutral-800",3,"click"],["z-out","","icon","","matRipple","","matTooltip",g,1,"bg-white","dark:bg-neutral-800",3,"click"],["reset","","icon","","matRipple","","matTooltip",m,1,"bg-white","dark:bg-neutral-800",3,"click"]]},template:function(g,m){1&g&&(h.TgZ(0,"button",0),h.NdJ("click",function(){return m.zoomIn()}),h.TgZ(1,"app-icon"),h._uU(2,"add"),h.qZA()(),h.TgZ(3,"button",1),h.NdJ("click",function(){return m.zoomOut()}),h.TgZ(4,"app-icon"),h._uU(5,"remove"),h.qZA()(),h.TgZ(6,"button",2),h.NdJ("click",function(){return m.reset()}),h.TgZ(7,"app-icon"),h._uU(8,"autorenew"),h.qZA()())},dependencies:[V.o,Q.wG,oe.gM],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}button[_ngcontent-%COMP%]{border:1px solid #9998;border-radius:0}button[_ngcontent-%COMP%]:first-child{border-radius:.25rem .25rem 0 0;border-bottom:none}button[_ngcontent-%COMP%]:last-child{border-radius:0 0 .25rem .25rem;border-top:none}"]}),w})()}}]);