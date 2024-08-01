"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["default-libs_explore_src_index_ts"],{3685:(me,q,c)=>{c.d(q,{vz:()=>pe,XU:()=>de,Oe:()=>G.O,Rp:()=>jt});var x=c(316),h=c(4456),j=c(6815),A=c(8827),ee=c(1570),U=c(9168),z=c(481),ie=c(9478),v=c(9204),u=c(2333),E=c(7871),T=c(5762),G=c(2455),e=c(7404),K=(c(6842),c(5060)),ae=c(4950);c(5175);var O=c(3998),te=c(3602),Z=(c(8390),c(7401),c(1865),c(5384),c(2011),c(5897)),V=c(8627),I=c(5443),B=c(9803),ne=c(9434),le=c(2238),R=c(521),M=c(2175);c(7558);var J=c(6441),W=c(9908),ye=c(3240),xe=c(8797),P=c(1536),S=c(1963),H=c(9314),L=c(7841),oe=c(6e3),Ce=c(8379),Je=c(7451),se=c(2587),We=c(9608),Ie=c(3476),He=c(1413),Oe=c(8e3);const Qe=()=>({standalone:!0});function qe(i,f){if(1&i&&(e.j41(0,"div",7)(1,"div",13)(2,"label"),e.EFF(3,"Resource:"),e.k0s(),e.j41(4,"div",14),e.EFF(5),e.k0s()()()),2&i){const t=e.XpG(2);e.R7$(5),e.SpI(" ",t.resource.name||t.resource.map_id||"Unknown Resource"," ")}}function et(i,f){1&i&&(e.j41(0,"div",7)(1,"div",8)(2,"label"),e.EFF(3,"Host"),e.k0s(),e.nrm(4,"a-user-search-field",15),e.k0s()())}function tt(i,f){if(1&i){const t=e.RV6();e.j41(0,"main",5),e.DNE(1,qe,6,1,"div",6)(2,et,5,0,"div",6),e.j41(3,"div",7)(4,"div",8)(5,"label"),e.EFF(6,"Date"),e.k0s(),e.j41(7,"a-date-field",9),e.EFF(8," Date and time must be in the future "),e.k0s()()(),e.j41(9,"div",7)(10,"div",10)(11,"label"),e.EFF(12,"Start Time"),e.k0s(),e.j41(13,"a-time-field",11),e.bIt("ngModelChange",function(s){e.eBV(t);const o=e.XpG();return e.Njj(o.form.patchValue({date:s}))}),e.k0s()(),e.j41(14,"div",10)(15,"label"),e.EFF(16,"End Time"),e.k0s(),e.nrm(17,"a-duration-field",12),e.k0s()()()}if(2&i){let t;const n=e.XpG();e.Y8G("formGroup",n.form),e.R7$(),e.Y8G("ngIf",n.resource),e.R7$(),e.Y8G("ngIf",n.host),e.R7$(5),e.Y8G("to",n.book_until),e.R7$(6),e.Y8G("ngModel",n.form.value.date)("ngModelOptions",e.lJ4(12,Qe))("use_24hr",n.use_24hr_time),e.R7$(4),e.Y8G("time",null==(t=n.form.get("date"))?null:t.value)("max",600)("min",60)("step",60)("use_24hr",n.use_24hr_time)}}let ce=(()=>{class i{get use_24hr_time(){return this._settings.get("app.use_24_hour_time")}constructor(t,n){this._data=t,this._settings=n,this.host=this._data.host,this.form=new h.gE({user:new h.MJ(this._data.user),date:new h.MJ(this._data.date),duration:new h.MJ(this._data.duration)}),this.book_until=this._data.until,this.resource=this._data.resource}static#e=this.\u0275fac=function(n){return new(n||i)(e.rXU(se.Vh),e.rXU(u.h$))};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["set-datetime-modal"]],decls:10,vars:2,consts:[["classs","flex items-center justify-between"],["icon","","mat-dialog-close",""],["class","w-[24rem] max-w-[85vw] pt-4",3,"formGroup",4,"ngIf"],[1,"w-full","p-2","border-t","border-base-200","flex","items-center","justify-center"],["btn","","matRipple","",1,"w-32",3,"mat-dialog-close"],[1,"w-[24rem]","max-w-[85vw]","pt-4",3,"formGroup"],["class","flex flex-col sm:flex-row space-x-0 sm:space-x-2 w-[640px] max-w-[calc(100%-2rem)] mx-auto",4,"ngIf"],[1,"flex","flex-col","sm:flex-row","space-x-0","sm:space-x-2","w-[640px]","max-w-[calc(100%-2rem)]","mx-auto"],[1,"flex","flex-col","flex-1","w-full","sm:w-1/4"],["formControlName","date",3,"to"],[1,"flex","flex-col","flex-1","w-full","sm:w-1/3"],[3,"ngModelChange","ngModel","ngModelOptions","use_24hr"],["formControlName","duration",3,"time","max","min","step","use_24hr"],[1,"flex","flex-col","flex-1","w-full","sm:w-1/4","mb-2"],[1,"px-4","py-3","border","border-base-200","rounded","w-full","mb-4"],["formControlName","user",1,"mb-4"]],template:function(n,s){1&n&&(e.j41(0,"header",0)(1,"h2"),e.EFF(2,"Set date and time"),e.k0s(),e.j41(3,"button",1)(4,"app-icon"),e.EFF(5,"close"),e.k0s()()(),e.DNE(6,tt,18,13,"main",2),e.j41(7,"footer",3)(8,"button",4),e.EFF(9," Continue "),e.k0s()()),2&n&&(e.R7$(6),e.Y8G("ngIf",s.form),e.R7$(2),e.Y8G("mat-dialog-close",s.form.value))},dependencies:[x.bT,ne.R,K.r6,se.tx,h.BC,h.cb,h.vS,h.j4,h.JD,We.G,Ie.y,He.t,Oe.$]})}return i})();var Me=c(2882),st=c(8578),nt=c(1874),Te=c(4918);const ot=["explore-device-info",""];function it(i,f){if(1&i&&(e.j41(0,"p",23)(1,"label"),e.pXf(2,4),e.k0s(),e.EFF(3),e.k0s()),2&i){const t=e.XpG(2);e.R7$(3),e.SpI(" ",t.mac," ")}}function at(i,f){if(1&i&&(e.j41(0,"p",24)(1,"label"),e.pXf(2,5),e.k0s(),e.EFF(3),e.k0s()),2&i){const t=e.XpG(2);e.R7$(3),e.SpI(" ",t.manufacturer," ")}}function rt(i,f){if(1&i&&(e.j41(0,"p",25)(1,"label"),e.pXf(2,6),e.k0s(),e.EFF(3),e.k0s()),2&i){const t=e.XpG(2);e.R7$(3),e.SpI(" ",t.os," ")}}function lt(i,f){if(1&i&&(e.j41(0,"p",26)(1,"label"),e.pXf(2,7),e.k0s(),e.EFF(3),e.k0s()),2&i){const t=e.XpG(2);e.R7$(3),e.SpI(" ",t.ssid," ")}}function ct(i,f){if(1&i&&(e.j41(0,"p",27)(1,"label"),e.pXf(2,8),e.k0s(),e.EFF(3),e.k0s()),2&i){const t=e.XpG(2);e.R7$(3),e.SpI(" ",(null==t.user?null:t.user.name)||(null==t.user?null:t.user.username)||t.username," ")}}function _t(i,f){if(1&i&&(e.j41(0,"p",28)(1,"label"),e.pXf(2,9),e.k0s(),e.EFF(3),e.k0s()),2&i){const t=e.XpG(2);e.R7$(3),e.SpI(" ",t.user.type," ")}}function pt(i,f){if(1&i){const t=e.RV6();e.j41(0,"div",14),e.bIt("mouseleave",function(){e.eBV(t);const s=e.XpG();return e.Njj(s.close())}),e.nrm(1,"div",15),e.j41(2,"div",16),e.DNE(3,it,4,1,"p",17),e.j41(4,"p")(5,"label"),e.pXf(6,2),e.k0s(),e.EFF(7),e.k0s(),e.j41(8,"p")(9,"label"),e.pXf(10,3),e.k0s(),e.EFF(11),e.k0s(),e.DNE(12,at,4,1,"p",18)(13,rt,4,1,"p",19)(14,lt,4,1,"p",20)(15,ct,4,1,"p",21)(16,_t,4,1,"p",22),e.k0s()()}if(2&i){const t=e.XpG();e.R7$(3),e.Y8G("ngIf",t.mac&&!t.hide_fields.includes("mac")),e.R7$(4),e.SpI(" ",t.variance,"m"),e.R7$(4),e.SpI(" ",t.last_seen,""),e.R7$(),e.Y8G("ngIf",t.manufacturer&&!t.hide_fields.includes("manufacturer")),e.R7$(),e.Y8G("ngIf",t.os&&!t.hide_fields.includes("os")),e.R7$(),e.Y8G("ngIf",t.ssid&&!t.hide_fields.includes("ssid")),e.R7$(),e.Y8G("ngIf",t.username&&!t.hide_fields.includes("username")),e.R7$(),e.Y8G("ngIf",t.user&&!t.hide_fields.includes("user"))}}const dt=[];let Re=(()=>{class i extends u.Tv{get hide_fields(){return this._settings.get("app.explore.hide_device_fields")||dt}get last_seen(){return(0,st.m)(1e3*(this._details.last_seen||0),{addSuffix:!0})}get diameter(){return 100*this._details.variance*this.zoom}get distance(){return Math.abs((0,nt.o)(1e3*(this._details.last_seen||0),new Date))}get distance_color(){return this.distance<10?"#43a047":this.distance<20?"#ffb300":"#e53935"}constructor(t,n,s){super(),this._details=t,this._settings=n,this._element=s,this.username="",this.user=this._details.user,this.mac=this._details.mac,this.manufacturer=this._details.manufacturer,this.os=this._details.os,this.ssid=this._details.ssid,this.variance=this._details.variance?.toFixed(2),this.bg_color=this._details.bg_color||this.distance_color,this.zoom=1}ngOnInit(t=0){t>10||setTimeout(()=>{const n=this._element.nativeElement.parentElement?.parentElement;if(!n)return this.ngOnInit(++t);const s_y=parseInt(n.style.top,10)/100,s_x=parseInt(n.style.left,10)/100;this.y_pos=s_y>=.5?"bottom":"top",this.x_pos=s_x>=.5?"end":"start",this.subscription("zoom",this._details.zoom$.subscribe(o=>this.zoom=o))},200)}loadUser(){var t=this;return(0,v.A)(function*(){if(t.username)return;const n=(0,O.f_4)(t._details.system,"LocationServices");if(!n)return;t.username="Loading...";const s=yield n.execute("check_ownership_of",[t.mac]).catch(o=>null);t.username=s&&s.assigned_to?s.assigned_to:""})()}static#e=this.\u0275fac=function(n){return new(n||i)(e.rXU(Te.N),e.rXU(u.h$),e.rXU(e.aKT))};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["","explore-device-info",""]],features:[e.Vt3],attrs:ot,decls:7,vars:9,consts:()=>{let t,n,s,o,a,l,r,_;return t=$localize`:␟4e79bc7b2a23c2e4e80d256c8167411cf124bd20␟1921442792032576180:Accuracy:`,n=$localize`:␟1c564bebf178f9c70f2c66a80393137bfa0d2ea8␟5291488112436395082:Last Seen:`,s=$localize`:␟14802d5580219b4522c9c50e1a9f401aee191e1e␟5080596488336446120:MAC:`,o=$localize`:␟a082daef9c0b66268ce56dfa8d96d47a04d2c4b1␟6296767522110275448:Manufacturer:`,a=$localize`:␟5544405b325c518c94412239610d44250d5a223a␟2346706060395913038:OS:`,l=$localize`:␟afd0fc7b37f54299537ba2abc9babf749adf383e␟4345272263810420547:SSID:`,r=$localize`:␟67fc3fe0566f8700b84a908c35497759db78addc␟140822705245800362:Username:`,_=$localize`:␟e78c0d60ac39787f62c9159646fe0b3c1ed55a1d␟2736556170366900089:Type:`,[["dot",""],["device_tooltip",""],t,n,s,o,a,l,r,_,["name","radius",1,"radius","absolute","center","bg-info","bg-opacity-25","border-8","border-dashed","border-blue-600","rounded-full"],["shadow","",1,"absolute","center","bg-neutral","h-8","w-8","rounded-full"],["name","dot",1,"h-3","w-3","absolute","center","rounded-full","shadow","border-2","border-white"],["customTooltip","",1,"absolute","inset-0","pointer-events-auto",3,"mouseenter","content","backdrop","xPosition","yPosition","hover"],["name","device-info",1,"w-64","rounded","bg-base-100","p-4","top-0","left-0","shadow","pointer-events-none","mx-2",3,"mouseleave"],[1,"arrow"],[1,"details"],["class","break-words",4,"ngIf"],["type","",4,"ngIf"],["os","",4,"ngIf"],["ssid","",4,"ngIf"],["username","",4,"ngIf"],["user","",4,"ngIf"],[1,"break-words"],["type",""],["os",""],["ssid",""],["username",""],["user",""]]},template:function(n,s){if(1&n){const o=e.RV6();e.nrm(0,"div",10)(1,"div",11)(2,"div",12,0),e.j41(4,"div",13),e.bIt("mouseenter",function(){return e.eBV(o),e.Njj(s.loadUser())}),e.k0s(),e.DNE(5,pt,17,8,"ng-template",null,1,e.C5r)}if(2&n){const o=e.sdS(6);e.Aen("height: "+s.diameter+"%; width: "+s.diameter+"%;"),e.R7$(2),e.xc7("background-color",s.bg_color),e.R7$(2),e.Y8G("content",o)("backdrop",!1)("xPosition",s.x_pos)("yPosition",s.y_pos)("hover",!0)}},dependencies:[x.bT,le.I],styles:["[_nghost-%COMP%]{pointer-events:auto}[_nghost-%COMP%] > [name=dot][_ngcontent-%COMP%]{background-color:#616161}[_nghost-%COMP%]:hover > [name=radius][_ngcontent-%COMP%]{opacity:1}[name=radius][_ngcontent-%COMP%]{opacity:0;transition:opacity .2s;pointer-events:none}\n\n/*# sourceMappingURL=explore-device-info.component.ts-angular-inline--105.css.map*/"]})}return i})();var _e=c(8026);let pe=(()=>{class i extends u.Tv{constructor(t,n,s,o,a){var l;super(),l=this,this._state=t,this._org=n,this._settings=s,this._bookings=o,this._dialog=a,this._in_use=new R.t([]),this._options=new R.t({}),this._presence=new R.t([]),this._signs_of_life=new R.t([]),this._statuses={},this._users={},this._departments={},this._checked_in=new R.t([]),this.booking_rules=this._org.active_building.pipe((0,V.p)(r=>!!r),(0,S.n)(r=>(0,O.bpY)(r.id,"desk_booking_rules").pipe((0,H.W)(()=>(0,P.of)({details:[]})))),(0,I.T)(r=>r?.details instanceof Array?r.details:[]),(0,L.t)(1)),this.desk_list=this._state.level.pipe((0,B.B)(50),(0,S.n)(r=>(0,O.bpY)(r.id,"desks").pipe((0,H.W)(()=>(0,P.of)({details:[]})),(0,I.T)(_=>(_?.details instanceof Array?_.details:[]).map(p=>new Je.g({...p,zone:r}))))),(0,H.W)(r=>[]),(0,L.t)(1)),this._bind=(0,M.zV)([this._state.level,this._state.options]).pipe((0,B.B)(300),(0,V.p)(([r,{is_public:_}])=>!!r&&!_),(0,I.T)(([r])=>{this._statuses={};const _=this._org.binding("area_management");if(!_)return;let p=(0,O.f_4)(_,"AreaManagement")?.binding(r.id);p&&(this.subscription("lvl-in_use",p.listen().subscribe(g=>this.processBindingChange(g||{},_))),this.subscription("lvl-in_use_bind",p.bind()))})),this._booking_list=(0,M.zV)([this._options,this._state.level]).pipe((0,V.p)(([r,_])=>(r.use_api||r.date>(0,J.D)(Date.now()).valueOf())&&!!_),(0,S.n)(([r,_])=>(0,_e.tj)({type:"desk",period_start:(0,W._)((0,ye.o)(r.date||Date.now())),period_end:(0,W._)((0,J.D)(r.date||Date.now())),zones:_.id})),(0,B.B)(200),(0,oe.M)(r=>{this._in_use.next(r.map(_=>_.asset_id)),this._checked_in.next(r.filter(_=>_.checked_in).map(_=>_.asset_id))}),(0,L.t)(1)),this._state_change=(0,M.zV)([this.desk_list,this._in_use,this._presence,this._checked_in,this._signs_of_life,this.booking_rules,this._options]).pipe((0,B.B)(50),(0,I.T)(function(){var r=(0,v.A)(function*([_,p,g,b,m,d]){l._statuses={};const y=yield l._state.level.pipe((0,te.s)(1)).toPromise();for(const{id:C,bookable:D}of _){const N=p.some($=>C===$),X=g.some($=>C===$),F=m.some($=>C===$),w=b.some($=>C===$)||N&&l._settings.get("app.desk.auto_checkin"),Q=(0,u.RH)({date:Date.now(),duration:60,host:(0,u.Ny)(),resource:{id:C,zones:[y.parent_id,y.id]}},d)?.hidden;l._statuses[C]=D&&!Q?N||X||w?X||w?"busy":"pending":F?"signs-of-life":"free":"not-bookable"}l.processDesks(_)});return function(_){return r.apply(this,arguments)}}())),this.init()}init(){var t=this;return(0,v.A)(function*(){yield t._org.initialised.pipe((0,E.$)(n=>n)).toPromise(),t.setOptions({enable_booking:!1!==t._settings.get("app.desks.enable_maps")}),t.subscription("bookings",t._booking_list.subscribe()),t.subscription("bind",t._bind.subscribe()),t.subscription("booking_rules",t.booking_rules.subscribe()),t.subscription("changes",t._state_change.subscribe()),t.subscription("desks",t.desk_list.subscribe(n=>t.processDesks(n)))})()}setOptions(t){this._options.next({...this._options.getValue(),...t})}processBindingChange({value:t},n){const s=(t||[]).filter(r=>!["desk","booking"].includes(r.location)),o=(t||[]).filter(r=>"desk"===r.location||"booking"===r.location&&"desk"===r.type);(this._options.getValue().date||Date.now())<=(0,J.D)(Date.now()).valueOf()&&!this._options.getValue().use_api&&(this._in_use.next(o.filter(r=>"booking"===r.location).map(r=>r.map_id||r.asset_id)),this._checked_in.next(o.filter(r=>"booking"===r.location&&r.checked_in).map(r=>r.map_id||r.asset_id)),this._presence.next(o.filter(r=>r.at_location).map(r=>r.map_id||r.asset_id)),this._signs_of_life.next(o.filter(r=>r.signs_of_life).map(r=>r.map_id||r.asset_id)));const l=this._settings.get("app.department_map")||{};for(const r of o)this._users[r.map_id||r.asset_id]=r.staff_name,this._departments[r.map_id||r.asset_id]=l[r.department]||"";this.processDevices(s,n),this.timeout("update",()=>this.updateStatus(),100)}updateStatus(){const t={},n=this._settings.get("app.explore.colors")||{};for(const s in this._statuses)this._statuses[s]&&(t[`#${s}`]={fill:n[`desk-${this._statuses[s]}`]||n[`${this._statuses[s]}`]||Z.U[`${this._statuses[s]}`]});this._state.setStyles("desks",t)}processDevices(t,n){const s=[];for(const o of t){const a=o.x/o.map_width,l=o.y/o.map_height;s.push({track_id:`device:hover:${a},${l}`,location:{x:o.coordinates_from?.includes("right")?1-a:a,y:o.coordinates_from?.includes("bottom")?1-l:l},content:Re,z_index:20,data:{...o,system:n}})}this._state.setFeatures("devices",s)}processDesks(t){var n=this;const s=[],o=[],a=this._options.getValue();for(const l of t){if(s.push({track_id:`desk:hover:${l.map_id||l.id}`,location:l.id,content:Me.Y,full_size:!0,no_scale:!0,data:{id:l.map_id||l.id,map_id:l.name,name:l.name||l.map_id,user:this._users[l.map_id]||l.staff_name,status:this._statuses[l.map_id],department:this._departments[l.map_id]||""},z_index:20}),!l.bookable)continue;let r=!0;const _=function(){var p=(0,v.A)(function*(){if(!r)return;if("free"!==n._statuses[l.id])return(0,u.UG)(`${l.name||"Desk"} is unavailable at this time.`);if(l.groups?.length&&!l.groups.find(y=>(0,u.Ny)().groups.includes(y)))return(0,u.UG)(`You are not allowed to book ${l.name}.`);n._bookings.newForm(),n._bookings.setOptions({type:"desk"}),a.date&&(n._bookings.form.patchValue({date:a.date}),n._bookings.form.patchValue({all_day:!!a.all_day}));let{date:g,duration:b,user:m}=yield n._setBookingTime(n._bookings.form.value.date,n._bookings.form.value.duration,n._options.getValue()?.custom??!1,l);m=m||a.host||(0,u.Ny)();const d=m?.email;n._bookings.form.patchValue({resources:[l],asset_id:l.id,asset_name:l.name,date:g,duration:a.all_day?720:b,map_id:l?.map_id||l?.id,description:l.name,user:m,user_email:d,booking_type:"desk",zones:l.zone?[l.zone?.parent_id,l.zone?.id]:[]}),yield n._bookings.confirmPost().catch(y=>{throw console.log(y),(0,u.UG)(`Failed to book desk ${l.name||l.id}. ${y.message||y.error||y}`),y}),n._users[l.map_id]=(a.host||(0,u.Ny)())?.name,(0,u.VX)(`Successfully booked desk ${l.name||l.id}`)});return function(){return p.apply(this,arguments)}}();["mousedown","touchstart"].forEach(p=>o.push({id:l.id,action:p,priority:10,callback:()=>{r=!0,this.timeout("booking",()=>r=!1)}})),["mouseup","touchend"].forEach(p=>o.push({id:l.id,action:p,priority:10,callback:_}))}this._state.setActions("desks",this._options.getValue().enable_booking?o:[]),this._state.setFeatures("desks",s),this.timeout("update",()=>this.updateStatus(),100)}_setBookingTime(t,n,s=!1,o=null){var a=this;return(0,v.A)(function*(){let l=null;if(a._settings.get("app.desks.allow_time_changes")){const r=(0,J.D)((0,xe.f)(Date.now(),a._settings.get("app.desks.available_period")||90)),p=yield a._dialog.open(ce,{data:{date:t,duration:n,until:r,host:s,resource:o}}).afterClosed().toPromise();if(!p)throw"User cancelled";t=p.date,n=p.duration,l=p.user}return{date:t,duration:n,user:l}})()}static#e=this.\u0275fac=function(n){return new(n||i)(e.KVO(G.O),e.KVO(T.y),e.KVO(u.h$),e.KVO(Ce.n),e.KVO(se.bZ))};static#t=this.\u0275prov=e.jDH({token:i,factory:i.\u0275fac})}return i})();var ut=c(3206),mt=c(5469),ht=c(8757);function ft(i,f){if(1&i&&(e.j41(0,"div",7)(1,"div",8),e.EFF(2," Plate Number "),e.k0s(),e.j41(3,"div",9),e.EFF(4),e.k0s()()),2&i){const t=e.XpG();e.R7$(4),e.SpI(" ",t.plate_number||"ABC3"," ")}}let Se=(()=>{class i{get is_concierge(){return this._settings.app_name.toLowerCase().includes("concierge")}constructor(t,n,s){this._data=t,this._element=n,this._settings=s,this.status=this._data.assigned_to===this._data.user&&this._data.user?"reserved":this._data.status,this.user=this._data.user,this.name=this._data.name,this.map_id=this._data.map_id,this.plate_number=this._data.plate_number}static#e=this.\u0275fac=function(n){return new(n||i)(e.rXU(j.Nw),e.rXU(e.aKT),e.rXU(u.h$))};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["explore-parking-info"]],decls:9,vars:15,consts:[[1,"absolute","bg-base-300","p-2","rounded-lg","!rounded-tl-none","shadow","top-1/2","left-1/2","text-left"],[1,"absolute","top-0.5","left-0.5","triangle"],[1,"flex","space-x-2"],[1,"flex","flex-col","leading-tight","min-w-24","pl-1"],[1,"whitespace-nowrap"],[1,"capitalize","text-sm","font-medium"],["class","flex flex-col relative h-full px-2 rounded bg-base-100 text-base-content shadow leading-tight",4,"ngIf"],[1,"flex","flex-col","relative","h-full","px-2","rounded","bg-base-100","text-base-content","shadow","leading-tight"],[1,"text-[0.625rem]","w-full","text-center","pt-1","whitespace-nowrap","font-medium"],[1,"font-mono","pb-1","w-full","text-center"]],template:function(n,s){1&n&&(e.j41(0,"div",0),e.nrm(1,"div",1),e.j41(2,"div",2)(3,"div",3)(4,"div",4),e.EFF(5),e.k0s(),e.j41(6,"div",5),e.EFF(7),e.k0s()(),e.DNE(8,ft,5,1,"div",6),e.k0s()()),2&n&&(e.AVh("!bg-error","busy"===s.status)("!text-error-content","busy"===s.status)("!bg-warning","reserved"===s.status)("!text-warning-content","reserved"===s.status)("!bg-success","free"===s.status)("!text-success-content","free"===s.status),e.R7$(5),e.JRh(s.name),e.R7$(2),e.SpI(" ",s.status," "),e.R7$(),e.Y8G("ngIf",s.is_concierge&&s.plate_number))},dependencies:[x.bT],styles:[".triangle[_ngcontent-%COMP%]{width:0px;height:0px;border-style:solid;border-width:.5rem .5rem 0 0;border-color:currentColor transparent transparent transparent;transform:rotate(0)}\n\n/*# sourceMappingURL=explore-parking-info.component.ts-angular-inline--106.css.map*/"]})}return i})();var gt=c(1593);let de=(()=>{class i extends u.Tv{constructor(t,n,s,o,a,l){super(),this._org=t,this._state=n,this._settings=s,this._bookings=o,this._parking=a,this._dialog=l,this._options=new R.t({}),this._poll=new R.t(0),this.options=this._options.asObservable(),this.on_book=null,this.levels=this._org.active_levels.pipe((0,I.T)(r=>r.filter(_=>_.tags.includes("parking")))),this.events=(0,M.zV)([this._org.active_building,this._options,this._poll,this._state.options]).pipe((0,S.n)(([r,_,p,{is_public:g}])=>g?(0,P.of)([]):(0,_e.tj)({period_start:(0,W._)((0,ut.c)(_.date||Date.now())),period_end:(0,W._)((0,mt.V)(_.date||Date.now())),type:"parking",zones:r?.id})),(0,L.t)(1)),this.user_events=(0,M.zV)([this._options]).pipe((0,S.n)(([r])=>(0,_e.tj)({period_start:(0,W._)((0,ye.o)(r.date||Date.now())),period_end:(0,W._)((0,J.D)(r.date||Date.now())),type:"parking",email:r?.user||(0,u.Ny)()?.email})),(0,L.t)(1)),this.spaces=this.levels.pipe((0,S.n)(r=>(0,ht.p)(r.map(_=>(0,O.bpY)(_.id,"parking-spaces").pipe((0,I.T)(p=>(p.details instanceof Array?p.details:[]).map(g=>({...g,zone_id:_.id}))))))),(0,I.T)(r=>(0,u.Bq)(r)),(0,L.t)(1)),this.active_spaces=(0,M.zV)([this.spaces,this._state.level]).pipe((0,I.T)(([r,_])=>r.filter(p=>p.zone_id===_.id))),this._users={},this._plate_numbers={},this.available_spaces=(0,M.zV)([this.events,this.active_spaces,this._parking.users]).pipe((0,I.T)(([r,_,p])=>{const g=_.filter(b=>{const m=r.find(C=>C.asset_id===b.id),d=`${m?.user_email||b.assigned_to||""}`.toLowerCase(),y=p.find(C=>C.email.toLowerCase()===d.toLowerCase());return this._users[b.id]=d,this._plate_numbers[b.id]=m?.extension_data?.plate_number||y?.plate_number||void 0,!d});return this._updateParkingSpaces(_,g),g})),this.subscription("spaces",this.available_spaces.subscribe()),this.setOptions({enable_booking:!1!==this._settings.get("app.parking.enable_maps")})}startPolling(){return this.interval("poll",()=>this._poll.next(Date.now()),1e4),this._poll.next(Date.now()),()=>this.stopPolling()}stopPolling(){this.clearInterval("poll")}setOptions(t){this._options.next({...this._options.getValue(),...t})}_updateParkingSpaces(t,n){var s=this;return(0,v.A)(function*(){const o={},a=[],l=[],r=s._settings.get("app.explore.colors")||{},_=s._options.getValue(),g=(yield s._parking.assigned_space.pipe((0,te.s)(1)).toPromise(),yield s._parking.deny_parking_access.pipe((0,te.s)(1)).toPromise()),b=yield s._parking.booked_space.pipe((0,te.s)(1)).toPromise();for(const m of t){const d=!!n.find(N=>N.id===m.id),y=!!m.assigned_to,C=d?"free":y?"pending":"busy";if(o[`#${m.map_id}`]={fill:r[`parking-${C}`]||r[`${C}`]||Z.U[`${C}`],opacity:.6},a.push({location:`${m.map_id}`,content:Se,z_index:20,hover:!0,data:{...m,user:s._users[m.id],plate_number:s._plate_numbers[m.id],status:"pending"===C&&y?"reserved":C}}),!d)continue;const D=function(){var N=(0,v.A)(function*(){if(s.on_book)return s.on_book(m);if(g)return(0,u.UG)(`Your user account has been denied parking access to ${m.zone?.display_name||m.zone?.name}.`);if(y)return(0,u.UG)(`You are already assigned to parking space "${m.name||m.id}".`);if(b?.find(k=>k.id===m.id))return(0,u.UG)("You already have a parking space booked for the selected time.");if("free"!==C)return(0,u.UG)(`${m.name||"Parking Space"} is unavailable at this time.`);if(m.groups?.length&&!m.groups.find(k=>(0,u.Ny)().groups.includes(k)))return(0,u.UG)(`You are not allowed to book ${m.name}.`);s._bookings.newForm(),s._bookings.setOptions({type:"parking"}),_.date&&(s._bookings.form.patchValue({date:_.date}),s._bookings.form.patchValue({all_day:!!_.all_day}));let{date:X,duration:F,user:w}=yield s._setBookingTime(s._bookings.form.value.date,s._bookings.form.value.duration,s._options.getValue()?.custom??!1,m);w=w||_.host||(0,u.Ny)();const Q=w?.email,$=s._state.active_level;s._bookings.form.patchValue({resources:[m],asset_id:m.id,asset_name:m.name,date:X,duration:_.all_day?720:F,map_id:m?.map_id||m?.id,description:m.name,user:w,user_email:Q,booking_type:"parking",zones:m.zone?[m.zone?.parent_id,m.zone?.id]:[$.parent_id,$.id]}),yield s._bookings.confirmPost().catch(k=>{throw"User cancelled"===k||(0,u.UG)(`Failed to book parking space ${m.name||m.id}. ${k.message||k.error||k}`),k}),(0,u.VX)(`Successfully booked parking space ${m.name||m.id}`)});return function(){return N.apply(this,arguments)}}();l.push({id:m?.map_id||m?.id,action:"click",priority:10,callback:D})}s._state.setActions("parking",_.enable_booking?l:[]),s._state.setStyles("parking",o),s._state.setFeatures("parking",a)})()}_setBookingTime(t,n,s=!1,o=null){var a=this;return(0,v.A)(function*(){let l=null;if(a._settings.get("app.parking.allow_time_changes")){const r=(0,J.D)((0,xe.f)(Date.now(),a._settings.get("app.parking.available_period")||90)),p=yield a._dialog.open(ce,{data:{date:t,duration:n,until:r,host:s,resource:o}}).afterClosed().toPromise();if(!p)throw"User cancelled";t=p.date,n=p.duration,l=p.user}return{date:t,duration:n,user:l}})()}static#e=this.\u0275fac=function(n){return new(n||i)(e.KVO(T.y),e.KVO(G.O),e.KVO(u.h$),e.KVO(Ce.n),e.KVO(gt.w),e.KVO(se.bZ))};static#t=this.\u0275prov=e.jDH({token:i,factory:i.\u0275fac})}return i})();c(8796),c(2185),c(4810),c(9420),c(735),c(2372),c(5080),c(9771);var Pe=c(1134),Ne=c(8303),Xe=(c(9801),c(6301)),Vt=(c(2213),c(795),c(3208)),Dt=c(7984);let jt=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=e.$C({type:i});static#s=this.\u0275inj=e.G2t({imports:[x.MD,j.hI,h.YN,h.X1,A.mV,ee.z_,U.jc,z.c,ie.S]})}return i})();e.wjB(Ne.x,[x.Sq,x.bT,le.I,Vt.U],[]),e.wjB(Xe.t,[x.bT,ne.R,ae.rl,ae.TL,K.r6,se.tx,Dt.fg,Pe.LG,h.me,h.BC,h.cb,h.j4,h.JD,Ie.y,Oe.$],[x.Jj,x.vh])},9801:(me,q,c)=>{c.d(q,{l:()=>U});var x=c(2455),h=c(7404),j=c(9434),A=c(5060),ee=c(640);let U=(()=>{class z{constructor(v){this._state=v,this.zoomIn=()=>this._state.setPositions(Math.min(10,1.2*this._state.positions.zoom),this._state.positions.center),this.zoomOut=()=>this._state.setPositions(Math.max(1,this._state.positions.zoom*(1/1.2)),this._state.positions.center),this.reset=()=>this._state.setPositions(1,{x:.5,y:.5})}static#e=this.\u0275fac=function(u){return new(u||z)(h.rXU(x.O))};static#t=this.\u0275cmp=h.VBU({type:z,selectors:[["explore-zoom-controls"]],decls:9,vars:0,consts:()=>{let v,u,E;return v=$localize`:␟34fb6028a6630cf3a7308084b31e86e89d057965␟1470758907984185227:Zoom In`,u=$localize`:␟677ce9c57b5558cb10f0b39327d5a965bfb21dc5␟1356460275822781324:Zoom Out`,E=$localize`:␟77981432124895c410e5b9157b3deb948831ffc6␟5016012668378976433:Reset Zoom & Center`,[["z-in","","icon","","matRipple","","matTooltip",v,1,"bg-base-100",3,"click"],["z-out","","icon","","matRipple","","matTooltip",u,1,"bg-base-100",3,"click"],["reset","","icon","","matRipple","","matTooltip",E,1,"bg-base-100",3,"click"]]},template:function(u,E){1&u&&(h.j41(0,"button",0),h.bIt("click",function(){return E.zoomIn()}),h.j41(1,"app-icon"),h.EFF(2,"add"),h.k0s()(),h.j41(3,"button",1),h.bIt("click",function(){return E.zoomOut()}),h.j41(4,"app-icon"),h.EFF(5,"remove"),h.k0s()(),h.j41(6,"button",2),h.bIt("click",function(){return E.reset()}),h.j41(7,"app-icon"),h.EFF(8,"autorenew"),h.k0s()())},dependencies:[j.R,A.r6,ee.oV],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}button[_ngcontent-%COMP%]{border:1px solid #9998;border-radius:0}button[_ngcontent-%COMP%]:first-child{border-radius:.25rem .25rem 0 0;border-bottom:none}button[_ngcontent-%COMP%]:last-child{border-radius:0 0 .25rem .25rem;border-top:none}\n\n/*# sourceMappingURL=explore-zoom-control.component.ts-angular-inline--109.css.map*/"]})}return z})()},8390:(me,q,c)=>{c.d(q,{g8:()=>ee,kR:()=>x.k,Gp:()=>U.Gp,KJ:()=>U.KJ,N8:()=>v.N8,SZ:()=>v.SZ,is:()=>ie.is});var x=c(1081),A=(c(3924),c(4621),c(9908));class ee{constructor(E={}){this.type=E.type||E.location||"other",this.position=E.position||E.map_id||E.asset_id||{x:E.x/E.map_width||0,y:E.y/E.map_height||0},this.variance=E.variance||0,this.last_seen=E.last_seen||(0,A._)(new Date),this.level=E.level,this.building=E.building,this.at_location=!!E.at_location,this.coordinates_from=E.coordinates_from||"top-left"}}var U=c(3693),ie=(c(4129),c(6039)),v=c(2372)}}]);
//# sourceMappingURL=default-libs_explore_src_index_ts.js.map