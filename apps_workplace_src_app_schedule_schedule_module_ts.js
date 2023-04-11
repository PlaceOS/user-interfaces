"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["apps_workplace_src_app_schedule_schedule_module_ts"],{6326:(Je,C,s)=>{s.r(C),s.d(C,{AppScheduleModule:()=>v});var g=s(2355),r=s(4666),b=s(2508),d=s(959),F=s(3149),q=s(8147),p=s(1670),c=s(232),D=s(8053),U=s(5845),N=s(312),A=s(6942),S=s(3910),j=s(8676),e=s(9676),y=s(5306),h=s(207),L=s(8589),J=s(5074),V=s(7371),k=s(2298),Y=s(1267),R=s(1294),m=s(9541),M=s(1233),B=s(6198);function P(i,n){if(1&i&&(e.TgZ(0,"div",7),e._uU(1),e.ALo(2,"date"),e.qZA()),2&i){const t=e.oxw(3);e.xp6(1),e.hij(" No events for ",e.xi3(2,1,t.item.date,"longDate")," ")}}function $(i,n){if(1&i&&(e.TgZ(0,"div",4)(1,"div",5),e._uU(2),e.ALo(3,"date"),e.qZA(),e.YNc(4,P,3,4,"div",6),e.qZA()),2&i){const t=e.oxw(2);e.xp6(2),e.AsE(" ",e.xi3(3,3,t.item.date,"longDate")," (",t.item.duration,") "),e.xp6(2),e.Q6J("ngIf",!t.item.duration)}}function G(i,n){if(1&i&&(e.TgZ(0,"div",17)(1,"app-icon",18),e._uU(2,"place"),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"slice"),e.qZA()()),2&i){const t=e.oxw(3);e.xp6(4),e.hij(" ",e.Dn7(5,1,(null==t.item?null:t.item.location)||(null==t.item?null:t.item.description),0,255)," ")}}const K=function(i,n){return["/schedule","view",i,n]};function z(i,n){if(1&i&&(e.TgZ(0,"a",8),e.ALo(1,"async"),e.ALo(2,"space"),e.ALo(3,"async"),e.ALo(4,"space"),e.TgZ(5,"div",9)(6,"div",10),e._UZ(7,"app-icon",11),e.TgZ(8,"div",12),e._uU(9),e.ALo(10,"date"),e.qZA(),e.TgZ(11,"div",13),e._uU(12),e.qZA()(),e.TgZ(13,"div",14)(14,"div",15),e._uU(15),e.qZA(),e.YNc(16,G,6,5,"div",16),e.qZA()()()),2&i){const t=e.oxw(2);let o;e.ekj("opacity-50",t.has_ended),e.Q6J("routerLink",e.WLB(25,K,(null==t.item?null:t.item.id)+(null!=(o=e.lcZ(1,14,e.lcZ(2,16,null==t.item||null==t.item.system?null:t.item.system.email)))&&o.id?"|"+(null==(o=e.lcZ(3,18,e.lcZ(4,20,null==t.item||null==t.item.system?null:t.item.system.email)))?null:o.id):""),t.type)),e.xp6(6),e.ekj("bg-success","approved"===t.status)("bg-pending","tentative"===t.status)("bg-error","declined"===t.status),e.xp6(1),e.Q6J("icon",t.icon),e.xp6(2),e.hij(" ",null!=t.item&&t.item.all_day?"All Day":e.xi3(10,22,null==t.item?null:t.item.date,"shortTime")," "),e.xp6(3),e.hij(" (",t.status,") "),e.xp6(3),e.hij(" ",(null==t.item?null:t.item.title)||"Untitled Event"," "),e.xp6(1),e.Q6J("ngIf",(null==t.item?null:t.item.location)||(null==t.item?null:t.item.description))}}function W(i,n){if(1&i&&(e.ynx(0,1),e.YNc(1,$,5,6,"div",2),e.YNc(2,z,17,28,"a",3),e.BQk()),2&i){const t=e.oxw();e.Q6J("ngSwitch",null==t.item?null:t.item.id),e.xp6(1),e.Q6J("ngSwitchCase","date")}}class _{get type(){return this.item instanceof m.$N?"booking":"event"}get has_ended(){return!this.item||"date"===this.item.id||(0,M.Z)(new Date,this.item.date+60*this.item.duration*1e3)}get icon(){if("declined"===this.status)return"event_busy";if(this.item.asset_id)switch(this.item.booking_type){case"room":return{content:"meeting_room"};case"desk":return{type:"img",src:"assets/img/desk.svg"};case"parking":return{content:"local_parking"}}return{content:"event"}}get status(){return this.item&&"date"!==this.item.id?this.item.status:"declined"}}_.\u0275fac=function(n){return new(n||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["","schedule-list-item",""]],inputs:{item:"item"},attrs:["schedule-list-item",""],decls:1,vars:1,consts:[[3,"ngSwitch",4,"ngIf"],[3,"ngSwitch"],["date","",4,"ngSwitchCase"],["btn","","matRipple","","item","","class","rounded-none my-1 mx-4 w-[calc(100%-2rem)] h-20 bg-white dark:bg-neutral-700 hover:shadow p-0",3,"opacity-50","routerLink",4,"ngSwitchDefault"],["date",""],[1,"mx-4","w-full","h-12","text-xl","flex","items-center"],["class","mx-4 w-full h-10 text-lg text-center font-normal opacity-60",4,"ngIf"],[1,"mx-4","w-full","h-10","text-lg","text-center","font-normal","opacity-60"],["btn","","matRipple","","item","",1,"rounded-none","my-1","mx-4","w-[calc(100%-2rem)]","h-20","bg-white","dark:bg-neutral-700","hover:shadow","p-0",3,"routerLink"],[1,"flex","items-center","border","border-gray-200","dark:border-neutral-500"],["status","",1,"h-20","w-20","flex","flex-col","items-center","justify-center","text-white","leading-tight"],[1,"text-2xl",3,"icon"],[1,"font-normal"],[1,"capitalize","text-xs","font-medium"],[1,"flex-1","flex","flex-col","text-left","p-2"],[1,"text-xl","pl-1"],["class","flex items-center font-normal",4,"ngIf"],[1,"flex","items-center","font-normal"],[1,"text-lg","mr-1"]],template:function(n,t){1&n&&e.YNc(0,W,3,2,"ng-container",0),2&n&&e.Q6J("ngIf",t.item)},dependencies:[r.O5,r.RF,r.n9,r.ED,y.o,h.wG,d.rH,r.Ov,r.OU,r.uU,B.X],encapsulation:2});var X=s(1060);function ee(i,n){if(1&i&&(e.TgZ(0,"mat-option",21),e._uU(1),e.ALo(2,"async"),e.ALo(3,"user"),e.qZA()),2&i){const t=n.$implicit;let o;e.Q6J("value",t.id),e.xp6(1),e.Oqu((null==(o=e.lcZ(2,2,e.lcZ(3,4,t.id)))?null:o.name)||t.id)}}function te(i,n){1&i&&e._UZ(0,"div",22),2&i&&e.Q6J("item",n.$implicit)}function ne(i,n){1&i&&e._UZ(0,"mat-progress-bar",23)}class f{get user(){return(0,c.ar)()}constructor(n){this._state=n,this.today=new Date,this.max_date=(0,D.Z)(this.today,4),this.options=this._state.options,this.loading=this._state.loading,this.calendars=this._state.calendars,this.date=this.options.pipe((0,A.U)(t=>new Date(t.start))),this.setOptions=t=>this._state.setOptions(t),this.event_list=this._state.events.pipe((0,A.U)(t=>{let o=[],l=new Date(this.today);for(;l<this.max_date;){const a=t.filter(u=>(0,U.Z)(l,u.date));o=a.length?[...o,{id:"date",date:l.valueOf(),duration:a.length},...a]:[...o,{id:"date",date:l.valueOf(),duration:0}],l=(0,N.Z)(l,1)}return o}))}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}setDate(n){this._state.setOptions({start:n.valueOf()})}updateDate(n){var t=this;return(0,p.Z)(function*(){const l=((yield t.event_list.pipe((0,S.q)(1)).toPromise())||[])[n]||{};l&&t.setDate(l.date)})()}scrollTo(n){var t=this;return(0,p.Z)(function*(){const o=yield t.event_list.pipe((0,S.q)(1)).toPromise(),l=o.findIndex(a=>"date"===a.id&&(0,U.Z)(a.date,n));if(l>=0&&t._viewport){let a=0;for(let u=0;u<o.length&&u<l;u++)a+=1;t._viewport.scrollTo({top:Math.round(88*a),behavior:"smooth"})}t.setDate(n)})()}trackByFn(n,t){return t?`${t.id}|${t.date}`:void 0}}f.\u0275fac=function(n){return new(n||f)(e.Y36(j.I))},f.\u0275cmp=e.Xpm({type:f,selectors:[["schedule-list"]],viewQuery:function(n,t){if(1&n&&e.Gf(g.N7,7),2&n){let o;e.iGM(o=e.CRH())&&(t._viewport=o.first)}},decls:35,vars:22,consts:[[1,"w-full","h-16","flex","items-center","justify-between","bg-white","dark:bg-neutral-700","border-b","border-gray-300","dark:border-neutral-900","shadow","p-2"],["appearance","outline",1,"h-[3.25rem]"],[3,"ngModel","placeholder","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"flex","items-center","space-x-2"],["matRipple","",1,"clear","underline",3,"matMenuTriggerFor"],["icon","",1,"relative"],["dateMenu",""],["matInput","",1,"opacity-0","absolute","inset-0",3,"ngModel","matDatepicker","min","max","ngModelChange"],["matSuffix","",1,"opacity-0","absolute","inset-0",3,"for"],["picker",""],[1,"w-full","flex-1","overflow-hidden","bg-gray-100","dark:bg-neutral-600"],["itemSize","88",1,"h-full","w-full",3,"scrolledIndexChange"],["schedule-list-item","",3,"item",4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTrackBy"],["mode","indeterminate","class","w-full",4,"ngIf"],["xPosition","before"],["legend","matMenu"],[1,"flex","items-center","px-4","py-2","hover:bg-black/60"],[1,"bg-success","h-2","w-2","rounded-full","mr-4"],[1,"bg-pending","h-2","w-2","rounded-full","mr-4"],[1,"bg-error","h-2","w-2","rounded-full","mr-4"],[3,"value"],["schedule-list-item","",3,"item"],["mode","indeterminate",1,"w-full"]],template:function(n,t){if(1&n&&(e.TgZ(0,"div",0)(1,"mat-form-field",1)(2,"mat-select",2),e.NdJ("ngModelChange",function(l){return t.setOptions({calendar:l})}),e.ALo(3,"async"),e.YNc(4,ee,4,6,"mat-option",3),e.ALo(5,"async"),e.qZA()(),e.TgZ(6,"div",4)(7,"button",5),e._uU(8," Legend "),e.qZA(),e.TgZ(9,"button",6,7)(11,"app-icon"),e._uU(12,"event"),e.qZA(),e.TgZ(13,"input",8),e.NdJ("ngModelChange",function(l){return t.scrollTo(l)}),e.ALo(14,"async"),e.qZA(),e._UZ(15,"mat-datepicker-toggle",9),e.qZA(),e._UZ(16,"mat-datepicker",null,10),e.qZA()(),e.TgZ(18,"div",11)(19,"cdk-virtual-scroll-viewport",12),e.NdJ("scrolledIndexChange",function(l){return t.updateDate(l)}),e.YNc(20,te,1,1,"div",13),e.ALo(21,"async"),e.qZA()(),e.YNc(22,ne,1,0,"mat-progress-bar",14),e.ALo(23,"async"),e.TgZ(24,"mat-menu",15,16)(26,"div",17),e._UZ(27,"div",18),e._uU(28," Approved "),e.qZA(),e.TgZ(29,"div",17),e._UZ(30,"div",19),e._uU(31," Tentative "),e.qZA(),e.TgZ(32,"div",17),e._UZ(33,"div",20),e._uU(34," Declined "),e.qZA()()),2&n){const o=e.MAs(17),l=e.MAs(25);let a;e.xp6(2),e.Q6J("ngModel",null==(a=e.lcZ(3,12,t.options))?null:a.calendar)("placeholder",null==t.user?null:t.user.name),e.xp6(2),e.Q6J("ngForOf",e.lcZ(5,14,t.calendars)),e.xp6(3),e.Q6J("matMenuTriggerFor",l),e.xp6(6),e.Q6J("ngModel",e.lcZ(14,16,t.date))("matDatepicker",o)("min",t.today)("max",t.max_date),e.xp6(2),e.Q6J("for",o),e.xp6(5),e.Q6J("cdkVirtualForOf",e.lcZ(21,18,t.event_list))("cdkVirtualForTrackBy",t.trackByFn),e.xp6(2),e.Q6J("ngIf",e.lcZ(23,20,t.loading))}},dependencies:[r.sg,r.O5,b.Fj,b.JJ,b.On,y.o,h.ey,L.VK,L.p6,J.KE,J.R9,V.gD,h.wG,k.Mq,k.hl,k.nW,Y.Nt,g.xd,g.x0,g.N7,R.pW,_,r.Ov,X.d],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}\n/*# sourceMappingURL=schedule-list.component.ts-angular-inline--118.css.map*/"]});var I=s(1799),ie=s(2317),E=s(6725),O=s(1484),Q=s(1708);function oe(i,n){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"date"),e.ALo(3,"date"),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.AsE(" at ",e.xi3(2,2,t.event.date,"shortTime")," ~ ",e.xi3(3,5,t.event.date+60*t.event.duration*1e3,"shortTime")," ")}}function le(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"button",18),e.NdJ("click",function(){e.CHM(t);const l=e.oxw(3);return e.KtG(l.viewLocation())}),e._uU(1," Map "),e.qZA()}}function se(i,n){if(1&i&&(e.TgZ(0,"div",14)(1,"div",11)(2,"app-icon"),e._uU(3,"menu_book"),e.qZA()(),e.TgZ(4,"div",12),e._uU(5),e.qZA(),e.YNc(6,le,2,0,"button",17),e.qZA()),2&i){const t=e.oxw(2);e.xp6(5),e.hij(" ",t.event.description||"<No Asset>"," "),e.xp6(1),e.Q6J("ngIf",t.event.extension_data.map_id&&t.can_view_location)}}function ae(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"div",19)(1,"button",20),e.NdJ("click",function(){e.CHM(t);const l=e.oxw(2);return e.KtG(l.confirmDelete())}),e._uU(2),e.qZA()()}if(2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("disabled",t.loading),e.xp6(1),e.hij(" ",t.is_host?"Delete":"Decline"," Event ")}}function re(i,n){if(1&i&&(e.TgZ(0,"div",8)(1,"h2",9),e._uU(2),e.qZA(),e.TgZ(3,"div",10)(4,"div",11)(5,"app-icon"),e._uU(6,"event"),e.qZA()(),e.TgZ(7,"div",12),e._uU(8),e.ALo(9,"date"),e.YNc(10,oe,4,8,"span",13),e.qZA()(),e.TgZ(11,"div",14)(12,"div",11)(13,"app-icon"),e._uU(14,"schedule"),e.qZA()(),e.TgZ(15,"div",12),e._uU(16),e.qZA()(),e.YNc(17,se,7,2,"div",15),e.YNc(18,ae,3,2,"div",16),e.qZA()),2&i){const t=e.oxw();e.xp6(2),e.hij(" ",t.event.title," "),e.xp6(6),e.hij(" ",e.xi3(9,6,t.event.date,"longDate")," "),e.xp6(2),e.Q6J("ngIf",!t.event.all_day&&t.event.duration<720),e.xp6(6),e.hij(" ",!t.event.all_day&&t.event.duration<720?t.duration:"All Day"," "),e.xp6(1),e.Q6J("ngIf",t.event.asset_id),e.xp6(1),e.Q6J("ngIf",!t.has_ended&&t.is_host)}}function ce(i,n){1&i&&(e.TgZ(0,"div",21),e._UZ(1,"mat-spinner",22),e.TgZ(2,"p"),e._uU(3,"Loading booking data..."),e.qZA()()),2&i&&(e.xp6(1),e.Q6J("diameter",32))}const de=function(){return["/schedule"]};class x extends c.cx{get is_host(){return this.event?.user_email===(0,c.ar)()?.email}get can_view_location(){return!this._settings.get("app.no_maps")}get duration(){return this.event.all_day||this.event.duration>=720?"All Day":(0,I.Z)({hours:Math.floor(this.event?.duration/60),minutes:this.event?.duration%60})}get has_ended(){return this.event&&(0,M.Z)(new Date,(0,ie.Z)(this.event.date,this.event.duration))}constructor(n,t,o,l,a){super(),this._route=n,this._router=t,this._dialog=o,this._bookings=l,this._settings=a}ngOnInit(){var n=this;this.subscription("route.params",this._route.paramMap.subscribe(function(){var t=(0,p.Z)(function*(o){o.has("id")&&(n.event=yield(0,m.Fo)(o.get("id")).toPromise().catch(()=>null))});return function(o){return t.apply(this,arguments)}}())),this.timeout("return",()=>this.event?"":this._router.navigate(["/schedule"]),8e3)}viewLocation(){this._dialog.open(E.p6,{maxWidth:"95vw",maxHeight:"95vh",data:{item:{id:this.event.asset_id,map_id:this.event.extension_data.map_id,name:this.event.description,zones:this.event.zones}}})}editEvent(){this._bookings.newForm(this.event),this._router.navigate(["/book","desks","form"])}confirmDelete(){var n=this;return(0,p.Z)(function*(){const t=yield(0,c._5)({title:(n.is_host?"Delete":"Decline")+" event",content:`Are you sure you wish to ${n.is_host?"delete":"decline"} this event?`,icon:{content:n.is_host?"delete":"event_busy"}},n._dialog);"done"===t.reason&&(t.loading("Removing booking..."),yield(0,m.FP)(n.event.id).toPromise().catch(o=>{throw t.loading(""),(0,c.cB)(`Error removing booking. ${o}`),o}),(0,c.t5)("Successfully removed booking."),n._router.navigate(["/schedule"]),t.close())})()}}x.\u0275fac=function(n){return new(n||x)(e.Y36(d.gz),e.Y36(d.F0),e.Y36(O.uw),e.Y36(m.fy),e.Y36(c.gb))},x.\u0275cmp=e.Xpm({type:x,selectors:[["schedule-view-booking"]],inputs:{event:"event"},features:[e.qOj],decls:11,vars:4,consts:[["topbar","",1,""],["button","","btn","","matRipple","",1,"clear","h-[2.75rem]","text-white",3,"routerLink"],[1,"flex","items-center","justify-center","h-full"],[1,"text-xl"],[1,"ml-2","mx-4"],[1,"flex-1","w-full","flex","flex-col","items-center","bg-gray-200","dark:bg-neutral-600","p-4","overflow-auto"],["class","max-w-full w-[28rem] bg-white dark:bg-neutral-700 border border-gray-300 dark:border-neutral-500 px-4 pb-4 divide-y divide-gray-300 dark:divide-neutral-500",4,"ngIf","ngIfElse"],["load_state",""],[1,"max-w-full","w-[28rem]","bg-white","dark:bg-neutral-700","border","border-gray-300","dark:border-neutral-500","px-4","pb-4","divide-y","divide-gray-300","dark:divide-neutral-500"],[1,"text-xl","uppercase","font-medium","w-full","my-4"],[1,"flex","items-center","py-2","space-x-2","w-full","!border-none"],[1,"p-2","rounded-full","bg-gray-300","dark:bg-neutral-600","mr-2"],[1,"flex-1","truncate"],[4,"ngIf"],[1,"flex","items-center","py-2","space-x-2","w-full"],["class","flex items-center py-2 space-x-2 w-full",4,"ngIf"],["class","flex items-center justify-center space-x-2 mt-4 !border-none",4,"ngIf"],["matRipple","","locate","","class","bg-transparent border-none underline text-black",3,"click",4,"ngIf"],["matRipple","","locate","",1,"bg-transparent","border-none","underline","text-black",3,"click"],[1,"flex","items-center","justify-center","space-x-2","mt-4","!border-none"],["matRipple","","remove","",1,"w-32","error","inverse",3,"disabled","click"],[1,"h-full","w-full","flex","flex-col","items-center","justify-center","space-y-2"],[3,"diameter"]],template:function(n,t){if(1&n&&(e.TgZ(0,"div",0)(1,"a",1)(2,"div",2)(3,"app-icon",3),e._uU(4,"arrow_back"),e.qZA(),e.TgZ(5,"span",4),e._uU(6,"Back"),e.qZA()()()(),e.TgZ(7,"div",5),e.YNc(8,re,19,9,"div",6),e.qZA(),e.YNc(9,ce,4,1,"ng-template",null,7,e.W1O)),2&n){const o=e.MAs(10);e.xp6(1),e.Q6J("routerLink",e.DdM(3,de)),e.xp6(7),e.Q6J("ngIf",t.event)("ngIfElse",o)}},dependencies:[r.O5,y.o,h.wG,Q.Ou,d.rH,r.uU],styles:["[_nghost-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column}[topbar][_ngcontent-%COMP%]{background-color:#00539f}[list][_ngcontent-%COMP%]{transition:height .2s}\n/*# sourceMappingURL=schedule-view-booking.component.ts-angular-inline--119.css.map*/"]});var T=s(1299),ue=s(2886),pe=s(9685),me=s(6896),ve=s(7202);function ge(i,n){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"date"),e.ALo(3,"date"),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.AsE("at ",e.xi3(2,2,t.event.date,"shortTime")," ~ ",e.xi3(3,5,t.event.date+60*t.event.duration*1e3,"shortTime"),"")}}function he(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"button",27),e.NdJ("click",function(){e.CHM(t);const l=e.oxw().$implicit,a=e.oxw(2);return e.KtG(a.viewLocation(l))}),e._uU(1," Map "),e.qZA()}}function _e(i,n){if(1&i&&(e.TgZ(0,"div",24)(1,"span",12),e._uU(2),e.qZA(),e._UZ(3,"span",25),e.YNc(4,he,2,0,"button",26),e.qZA()),2&i){const t=n.$implicit,o=e.oxw(2);e.xp6(2),e.AsE(" ",t.display_name||t.name," [",(null==t.level?null:t.level.display_name)||(null==t.level?null:t.level.name),"] "),e.xp6(1),e.ekj("bg-success","accepted"===t.response_status)("bg-pending","tentative"===t.response_status)("bg-error","declined"===t.response_status),e.xp6(1),e.Q6J("ngIf",o.can_view_location)}}function fe(i,n){if(1&i&&(e.TgZ(0,"div",28),e._UZ(1,"a-user-avatar",29),e.TgZ(2,"span",12),e._uU(3),e.qZA(),e._UZ(4,"span",30),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Q6J("user",t),e.xp6(2),e.Oqu(t.name||t.email),e.xp6(1),e.ekj("bg-success","accepted"===t.response_status)("bg-pending","tentative"===t.response_status)("bg-error","declined"===t.response_status)}}function xe(i,n){if(1&i&&(e.TgZ(0,"div",39),e._uU(1),e.qZA()),2&i){const t=e.oxw().$implicit,o=e.oxw(3);e.Q6J("matTooltip",o.optionsFor(t)),e.xp6(1),e.AsE(" ",t.options.length," option",1===t.options.length?"":"s"," selected ")}}function Ze(i,n){if(1&i&&(e.TgZ(0,"div",34)(1,"div",35)(2,"div",35),e._uU(3),e.qZA(),e.YNc(4,xe,2,3,"div",36),e.qZA(),e.TgZ(5,"div",37),e._uU(6),e.ALo(7,"currency"),e.qZA(),e.TgZ(8,"div",38),e._uU(9),e.qZA()()),2&i){const t=n.$implicit;e.xp6(3),e.hij(" ",t.name," "),e.xp6(1),e.Q6J("ngIf",t.options.length),e.xp6(2),e.hij(" ",e.lcZ(7,4,t.total_cost/100)," "),e.xp6(3),e.hij(" ",t.quantity," ")}}function we(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"div",15)(1,"div",31)(2,"div",16)(3,"div",11)(4,"app-icon"),e._uU(5,"group"),e.qZA()(),e.TgZ(6,"div",12),e._uU(7),e.qZA(),e.TgZ(8,"button",32),e.NdJ("click",function(){e.CHM(t);const l=e.oxw(2);return e.KtG(l.show_catering=!l.show_catering)}),e._uU(9),e.qZA()(),e.TgZ(10,"div",18),e.YNc(11,Ze,10,6,"div",33),e.qZA()()()}if(2&i){const t=e.oxw(2);e.xp6(7),e.hij(" ",(null==t.event.extension_data.catering[0]?null:t.event.extension_data.catering[0].item_count)||0," Catering Item(s) "),e.xp6(2),e.hij(" ",t.show_people?"Hide":"Show"," "),e.xp6(1),e.Udp("height",t.show_catering?3*(null==t.event.extension_data.catering[0]?null:t.event.extension_data.catering[0].items.length)+"rem":"0"),e.xp6(1),e.Q6J("ngForOf",null==t.event.extension_data.catering[0]?null:t.event.extension_data.catering[0].items)}}function be(i,n){if(1&i&&(e.TgZ(0,"div",14)(1,"div",11)(2,"app-icon"),e._uU(3,"event_note"),e.qZA()(),e._UZ(4,"div",40),e.ALo(5,"sanitize"),e.qZA()),2&i){const t=e.oxw(2);e.xp6(4),e.Q6J("innerHTML",e.lcZ(5,1,t.event.body),e.oJD)}}function ye(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"button",44),e.NdJ("click",function(){e.CHM(t);const l=e.oxw(3);return e.KtG(l.editEvent())}),e._uU(1," Edit Event "),e.qZA()}if(2&i){const t=e.oxw(3);e.Q6J("disabled",t.loading)}}function Te(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"div",41),e.YNc(1,ye,2,1,"button",42),e.TgZ(2,"button",43),e.NdJ("click",function(){e.CHM(t);const l=e.oxw(2);return e.KtG(l.confirmDelete())}),e._uU(3),e.qZA()()}if(2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.is_host),e.xp6(1),e.Q6J("disabled",t.loading),e.xp6(1),e.hij(" ",t.is_host?"Delete":"Decline"," Event ")}}function Ae(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"div",8)(1,"h2",9),e._uU(2),e.qZA(),e.TgZ(3,"div",10)(4,"div",11)(5,"app-icon"),e._uU(6,"event"),e.qZA()(),e.TgZ(7,"div",12),e._uU(8),e.ALo(9,"date"),e.YNc(10,ge,4,8,"span",13),e.qZA()(),e.TgZ(11,"div",14)(12,"div",11)(13,"app-icon"),e._uU(14,"schedule"),e.qZA()(),e.TgZ(15,"div",12),e._uU(16),e.qZA()(),e.TgZ(17,"div",15)(18,"div",16)(19,"div",11)(20,"app-icon"),e._uU(21,"place"),e.qZA()(),e.TgZ(22,"div",12),e._uU(23),e.qZA(),e.TgZ(24,"button",17),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.show_spaces=!l.show_spaces)}),e._uU(25),e.qZA()(),e.TgZ(26,"div",18),e.YNc(27,_e,5,9,"div",19),e.qZA()(),e.TgZ(28,"div",15)(29,"div",16)(30,"div",11)(31,"app-icon"),e._uU(32,"group"),e.qZA()(),e.TgZ(33,"div",12),e._uU(34),e.qZA(),e.TgZ(35,"button",17),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.show_people=!l.show_people)}),e._uU(36),e.qZA()(),e.TgZ(37,"div",18),e.YNc(38,fe,5,8,"div",20),e.qZA()(),e.YNc(39,we,12,5,"div",21),e.TgZ(40,"div",15),e.YNc(41,be,6,3,"div",22),e.qZA(),e.YNc(42,Te,4,3,"div",23),e.qZA()}if(2&i){const t=e.oxw();e.xp6(2),e.hij(" ",t.event.title," "),e.xp6(6),e.hij(" ",e.xi3(9,19,t.event.date,"longDate")," "),e.xp6(2),e.Q6J("ngIf",!t.event.all_day),e.xp6(6),e.Oqu(t.duration),e.xp6(7),e.hij(" ",null==t.event.resources?null:t.event.resources.length," Space(s) "),e.xp6(1),e.Q6J("disabled",!(null!=t.event.resources&&t.event.resources.length)),e.xp6(1),e.hij(" ",t.show_spaces?"Hide":"Show"," "),e.xp6(1),e.Udp("height",t.show_spaces?2.5*(null==t.event.resources?null:t.event.resources.length)+"rem":"0"),e.xp6(1),e.Q6J("ngForOf",t.event.resources),e.xp6(7),e.hij(" ",(null==t.event.attendees?null:t.event.attendees.length)||0," Attendee(s) "),e.xp6(1),e.Q6J("disabled",!(null!=t.event.attendees&&t.event.attendees.length)),e.xp6(1),e.hij(" ",t.show_people?"Hide":"Show"," "),e.xp6(1),e.Udp("height",t.show_people?3*t.event.attendees.length+"rem":"0"),e.xp6(1),e.Q6J("ngForOf",t.event.attendees),e.xp6(1),e.Q6J("ngIf",null==t.event.extension_data.catering?null:t.event.extension_data.catering.length),e.xp6(2),e.Q6J("ngIf",t.event.body),e.xp6(1),e.Q6J("ngIf","done"!==t.event.state)}}function ke(i,n){1&i&&(e.TgZ(0,"div",45),e._UZ(1,"mat-spinner",46),e.TgZ(2,"p"),e._uU(3,"Loading event data..."),e.qZA()()),2&i&&(e.xp6(1),e.Q6J("diameter",32))}const Ce=function(){return["/schedule"]};class Z extends c.cx{get is_host(){return this.event?.host}get can_view_location(){return!this._settings.get("app.no_maps")}get duration(){return this.event.all_day?"All Day":(0,I.Z)({hours:Math.floor(this.event?.duration/60),minutes:this.event?.duration%60})}constructor(n,t,o,l,a,u){super(),this._route=n,this._router=t,this._dialog=o,this._events=l,this._spaces=a,this._settings=u}ngOnInit(){var n=this;this.subscription("route.params",this._route.paramMap.subscribe(function(){var t=(0,p.Z)(function*(o){if(o.has("id")){const l=o.get("id").split("|");n.event=n._settings.get("app.events.use_bookings")?yield(0,m.Fo)(l[0]).pipe((0,A.U)(a=>(0,T.Yd)(a))).toPromise():yield(0,T.Vh)(l[0],{system_id:l[1]}).toPromise()}});return function(o){return t.apply(this,arguments)}}())),this.timeout("return",()=>this.event?"":this._router.navigate(["/schedule"]),8e3)}optionsFor(n){return n.options.map(t=>t.name).join("\n")}viewLocation(n){n=this._spaces.find(n.id||n.email)||n,this._dialog.open(E.p6,{maxWidth:"95vw",maxHeight:"95vh",data:{item:n}})}editEvent(){"event_start"in this.event&&(this._events.newForm(this.event),this._router.navigate(["/book","spaces","form"]))}confirmDelete(){var n=this;return(0,p.Z)(function*(){const t=yield(0,c._5)({title:(n.is_host?"Delete":"Decline")+" event",content:`Are you sure you wish to ${n.is_host?"delete":"decline"} this event?`,icon:{content:n.is_host?"delete":"event_busy"}},n._dialog);"done"===t.reason&&(t.loading("Removing event..."),yield(n._settings.get("app.events.use_bookings")?m.pv:T.xC)(n.event.id).toPromise().catch(o=>{throw t.loading(""),(0,c.cB)(`Error removing event. ${o}`),o}),(0,c.t5)("Successfully removed event."),n._router.navigate(["/schedule"]),t.close())})()}}Z.\u0275fac=function(n){return new(n||Z)(e.Y36(d.gz),e.Y36(d.F0),e.Y36(O.uw),e.Y36(T.MH),e.Y36(ue.sK),e.Y36(c.gb))},Z.\u0275cmp=e.Xpm({type:Z,selectors:[["schedule-view-event"]],inputs:{event:"event"},features:[e.qOj],decls:11,vars:4,consts:[["topbar","",1,""],["button","","btn","","matRipple","",1,"clear","h-[2.75rem]","text-white",3,"routerLink"],[1,"flex","items-center","justify-center","h-full"],[1,"text-xl"],[1,"ml-2","mx-4"],[1,"flex-1","w-full","flex","flex-col","items-center","bg-gray-200","dark:bg-neutral-600","p-4","overflow-auto"],["class","max-w-full w-[28rem] bg-white dark:bg-neutral-700 border border-gray-300 dark:border-neutral-500 px-4 pb-4 divide-y divide-gray-300 dark:divide-neutral-500",4,"ngIf","ngIfElse"],["load_state",""],[1,"max-w-full","w-[28rem]","bg-white","dark:bg-neutral-700","border","border-gray-300","dark:border-neutral-500","px-4","pb-4","divide-y","divide-gray-300","dark:divide-neutral-500"],[1,"text-xl","uppercase","font-medium","w-full","my-4"],[1,"flex","items-center","py-2","space-x-2","w-full","!border-none"],[1,"p-2","rounded-full","bg-gray-300","dark:bg-neutral-600","mr-2"],[1,"flex-1","truncate"],[4,"ngIf"],[1,"flex","items-center","py-2","space-x-2","w-full"],[1,"w-full"],[1,"flex","items-center","py-2","space-x-2"],["matRipple","",1,"clear","bg-transparent","border-none","underline",3,"disabled","click"],["list","",1,"overflow-hidden"],["class","flex items-center h-10 pl-12",4,"ngFor","ngForOf"],["class","flex items-center h-12 pl-12 pr-2 space-x-2",4,"ngFor","ngForOf"],["class","w-full",4,"ngIf"],["class","flex items-center py-2 space-x-2 w-full",4,"ngIf"],["class","flex items-center justify-center space-x-2 mt-4 !border-none",4,"ngIf"],[1,"flex","items-center","h-10","pl-12"],[1,"h-2","w-2","rounded","mr-2"],["matRipple","","locate","","class","bg-transparent border-none underline text-black",3,"click",4,"ngIf"],["matRipple","","locate","",1,"bg-transparent","border-none","underline","text-black",3,"click"],[1,"flex","items-center","h-12","pl-12","pr-2","space-x-2"],[1,"text-sm",3,"user"],[1,"h-2","w-2","rounded","mr-4"],[1,"border-b","border-gray-200","w-full"],["matRipple","",1,"clear","bg-transparent","border-none","underline",3,"click"],["class","flex items-center h-12 pl-12 space-x-2",4,"ngFor","ngForOf"],[1,"flex","items-center","h-12","pl-12","space-x-2"],[1,"flex-1","w-1/2"],["class","text-xs underline",3,"matTooltip",4,"ngIf"],[1,"bg-primary","text-xs","rounded","px-4","py-2","mx-2","text-white","font-medium"],[1,"m-2","bg-neutral-500","text-white","h-8","w-8","rounded-full","flex","items-center","justify-center","text-sm"],[1,"text-xs","underline",3,"matTooltip"],["notes","",1,"flex-1","w-1/2","overflow-auto",3,"innerHTML"],[1,"flex","items-center","justify-center","space-x-2","mt-4","!border-none"],["matRipple","","edit","","class","w-32",3,"disabled","click",4,"ngIf"],["matRipple","","remove","",1,"w-32","error","inverse",3,"disabled","click"],["matRipple","","edit","",1,"w-32",3,"disabled","click"],[1,"h-full","w-full","flex","flex-col","items-center","justify-center","space-y-2"],[3,"diameter"]],template:function(n,t){if(1&n&&(e.TgZ(0,"div",0)(1,"a",1)(2,"div",2)(3,"app-icon",3),e._uU(4,"arrow_back"),e.qZA(),e.TgZ(5,"span",4),e._uU(6,"Back"),e.qZA()()()(),e.TgZ(7,"div",5),e.YNc(8,Ae,43,22,"div",6),e.qZA(),e.YNc(9,ke,4,1,"ng-template",null,7,e.W1O)),2&n){const o=e.MAs(10);e.xp6(1),e.Q6J("routerLink",e.DdM(3,Ce)),e.xp6(7),e.Q6J("ngIf",t.event)("ngIfElse",o)}},dependencies:[r.sg,r.O5,y.o,pe.k,h.wG,Q.Ou,me.gM,d.rH,r.H9,r.uU,ve.n],styles:["[_nghost-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column}[topbar][_ngcontent-%COMP%]{background-color:#00539f}[list][_ngcontent-%COMP%]{transition:height .2s}\n/*# sourceMappingURL=schedule-view-event.component.ts-angular-inline--120.css.map*/"]});var Ue=s(4187),Se=s(6012);class w{}w.\u0275fac=function(n){return new(n||w)},w.\u0275cmp=e.Xpm({type:w,selectors:[["schedule"]],decls:5,vars:0,consts:[[1,"flex-1","flex","sm:flex-row","flex-col-reverse","h-1/2"],[1,"relative","flex","flex-col","flex-1","h-1/2","sm:h-auto","overflow-hidden"]],template:function(n,t){1&n&&(e._UZ(0,"topbar"),e.TgZ(1,"div",0)(2,"main",1),e._UZ(3,"router-outlet"),e.qZA()(),e._UZ(4,"footer-menu"))},dependencies:[Ue.o,Se.i,d.lC],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}\n/*# sourceMappingURL=schedule.component.ts-angular-inline--121.css.map*/"]});const Le=[{path:"",component:w,children:[{path:"",component:f},{path:"view/:id/booking",component:x},{path:"view/:id/event",component:Z}]},{path:"*",redirectTo:""}];class v{}v.\u0275fac=function(n){return new(n||v)},v.\u0275mod=e.oAB({type:v}),v.\u0275inj=e.cJS({imports:[r.ez,b.u5,q.v,F.PP,g.Cl,d.Bz.forChild(Le)]})}}]);
//# sourceMappingURL=apps_workplace_src_app_schedule_schedule_module_ts.js.map