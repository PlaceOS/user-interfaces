"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["apps_workplace_src_app_schedule_schedule_module_ts"],{8392:(Fe,y,s)=>{s.r(y),s.d(y,{AppScheduleModule:()=>Qe});var h=s(2355),c=s(4666),f=s(2508),u=s(959),E=s(1684),O=s(8147),m=s(1670),d=s(232),Q=s(8053),T=s(5845),F=s(312),Z=s(6942),A=s(3910),D=s(8676),e=s(9676),_=s(5306),N=s(207),C=s(8589),U=s(5074),j=s(7371),v=s(4522),w=s(2298),q=s(1267),V=s(1294),g=s(9638),k=s(1233),Y=s(6198);const P=["schedule-list-item",""];function B(n,l){if(1&n&&(e.TgZ(0,"div",7),e._uU(1),e.ALo(2,"date"),e.qZA()),2&n){const t=e.oxw(3);e.xp6(1),e.hij(" No events for ",e.xi3(2,1,t.item.date,"longDate")," ")}}function H(n,l){if(1&n&&(e.TgZ(0,"div",4)(1,"div",5),e._uU(2),e.ALo(3,"date"),e.qZA(),e.YNc(4,B,3,4,"div",6),e.qZA()),2&n){const t=e.oxw(2);e.xp6(2),e.AsE(" ",e.xi3(3,3,t.item.date,"longDate")," (",t.item.duration,") "),e.xp6(2),e.Q6J("ngIf",!t.item.duration)}}function $(n,l){if(1&n&&(e.TgZ(0,"div",17)(1,"app-icon",18),e._uU(2,"place"),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"slice"),e.qZA()()),2&n){const t=e.oxw(3);e.xp6(4),e.hij(" ",e.Dn7(5,1,(null==t.item?null:t.item.location)||(null==t.item?null:t.item.description),0,255)," ")}}const G=function(n,l){return["/schedule","view",n,l]};function K(n,l){if(1&n&&(e.TgZ(0,"a",8),e.ALo(1,"async"),e.ALo(2,"space"),e.ALo(3,"async"),e.ALo(4,"space"),e.TgZ(5,"div",9)(6,"div",10),e._UZ(7,"app-icon",11),e.TgZ(8,"div",12),e._uU(9),e.ALo(10,"date"),e.qZA(),e.TgZ(11,"div",13),e._uU(12),e.qZA()(),e.TgZ(13,"div",14)(14,"div",15),e._uU(15),e.qZA(),e.YNc(16,$,6,5,"div",16),e.qZA()()()),2&n){const t=e.oxw(2);let i;e.ekj("opacity-50",t.has_ended),e.Q6J("routerLink",e.WLB(25,G,(null==t.item?null:t.item.id)+(null!=(i=e.lcZ(1,14,e.lcZ(2,16,null==t.item||null==t.item.system?null:t.item.system.email)))&&i.id?"|"+(null==(i=e.lcZ(3,18,e.lcZ(4,20,null==t.item||null==t.item.system?null:t.item.system.email)))?null:i.id):""),t.type)),e.xp6(6),e.ekj("bg-success","approved"===t.status)("bg-pending","tentative"===t.status)("bg-error","declined"===t.status),e.xp6(1),e.Q6J("icon",t.icon),e.xp6(2),e.hij(" ",null!=t.item&&t.item.all_day?"All Day":e.xi3(10,22,null==t.item?null:t.item.date,"shortTime")," "),e.xp6(3),e.hij(" (",t.status,") "),e.xp6(3),e.hij(" ",(null==t.item?null:t.item.title)||"Untitled Event"," "),e.xp6(1),e.Q6J("ngIf",(null==t.item?null:t.item.location)||(null==t.item?null:t.item.description))}}function z(n,l){if(1&n&&(e.ynx(0,1),e.YNc(1,H,5,6,"div",2),e.YNc(2,K,17,28,"a",3),e.BQk()),2&n){const t=e.oxw();e.Q6J("ngSwitch",null==t.item?null:t.item.id),e.xp6(1),e.Q6J("ngSwitchCase","date")}}let R=(()=>{class n{get type(){return this.item instanceof g.$N?"booking":"event"}get has_ended(){return!this.item||"date"===this.item.id||(0,k.Z)(new Date,this.item.date+60*this.item.duration*1e3)}get icon(){if("declined"===this.status)return"event_busy";if(this.item.asset_id)switch(this.item.booking_type){case"room":return{content:"meeting_room"};case"desk":return{type:"img",src:"assets/img/desk.svg"};case"parking":return{content:"local_parking"}}return{content:"event"}}get status(){return this.item&&"date"!==this.item.id?this.item.status:"declined"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["","schedule-list-item",""]],inputs:{item:"item"},attrs:P,decls:1,vars:1,consts:[[3,"ngSwitch",4,"ngIf"],[3,"ngSwitch"],["date","",4,"ngSwitchCase"],["mat-button","","item","","class","rounded-none my-1 mx-4 w-[calc(100%-2rem)] h-20 bg-white dark:bg-neutral-700 hover:shadow p-0",3,"opacity-50","routerLink",4,"ngSwitchDefault"],["date",""],[1,"mx-4","w-full","h-12","text-xl","flex","items-center"],["class","mx-4 w-full h-10 text-lg text-center font-normal opacity-60",4,"ngIf"],[1,"mx-4","w-full","h-10","text-lg","text-center","font-normal","opacity-60"],["mat-button","","item","",1,"rounded-none","my-1","mx-4","w-[calc(100%-2rem)]","h-20","bg-white","dark:bg-neutral-700","hover:shadow","p-0",3,"routerLink"],[1,"flex","items-center","border","border-gray-200","dark:border-neutral-500"],["status","",1,"h-20","w-20","flex","flex-col","items-center","justify-center","text-white","leading-tight"],[1,"text-2xl",3,"icon"],[1,"font-normal"],[1,"capitalize","text-xs","font-medium"],[1,"flex-1","flex","flex-col","text-left","p-2"],[1,"text-xl","pl-1"],["class","flex items-center font-normal",4,"ngIf"],[1,"flex","items-center","font-normal"],[1,"text-lg","mr-1"]],template:function(t,i){1&t&&e.YNc(0,z,3,2,"ng-container",0),2&t&&e.Q6J("ngIf",i.item)},dependencies:[c.O5,c.RF,c.n9,c.ED,_.o,v.zs,u.yS,c.Ov,c.OU,c.uU,Y.X],encapsulation:2}),n})();var W=s(4283),X=s(9012),ee=s(5197);const b=[],S=new ee.n5;let te=(()=>{class n{transform(t){return(0,m.Z)(function*(){if(!t)return S;let i=b.find(({id:o,email:a})=>o===t||a===t);return i||(i=yield(0,X.w0)(t).toPromise(),i||(i=yield(0,W.pP)(t).toPromise(),i)?(b.push(i),i):S)})()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"user",type:n,pure:!0}),n})();function ne(n,l){if(1&n&&(e.TgZ(0,"mat-option",21),e._uU(1),e.ALo(2,"async"),e.ALo(3,"user"),e.qZA()),2&n){const t=l.$implicit;let i;e.Q6J("value",t.id),e.xp6(1),e.Oqu((null==(i=e.lcZ(2,2,e.lcZ(3,4,t.id)))?null:i.name)||t.id)}}function ie(n,l){1&n&&e._UZ(0,"div",22),2&n&&e.Q6J("item",l.$implicit)}function oe(n,l){1&n&&e._UZ(0,"mat-progress-bar",23)}let le=(()=>{class n{constructor(t){this._state=t,this.today=new Date,this.max_date=(0,Q.Z)(this.today,4),this.options=this._state.options,this.loading=this._state.loading,this.calendars=this._state.calendars,this.date=this.options.pipe((0,Z.U)(i=>new Date(i.start))),this.setOptions=i=>this._state.setOptions(i),this.event_list=this._state.events.pipe((0,Z.U)(i=>{let o=[],a=new Date(this.today);for(;a<this.max_date;){const r=i.filter(p=>(0,T.Z)(a,p.date));o=r.length?[...o,{id:"date",date:a.valueOf(),duration:r.length},...r]:[...o,{id:"date",date:a.valueOf(),duration:0}],a=(0,F.Z)(a,1)}return o}))}get user(){return(0,d.ar)()}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}setDate(t){this._state.setOptions({start:t.valueOf()})}updateDate(t){var i=this;return(0,m.Z)(function*(){const a=((yield i.event_list.pipe((0,A.q)(1)).toPromise())||[])[t]||{};a&&i.setDate(a.date)})()}scrollTo(t){var i=this;return(0,m.Z)(function*(){const o=yield i.event_list.pipe((0,A.q)(1)).toPromise(),a=o.findIndex(r=>"date"===r.id&&(0,T.Z)(r.date,t));if(a>=0&&i._viewport){let r=0;for(let p=0;p<o.length&&p<a;p++)r+=1;i._viewport.scrollTo({top:Math.round(88*r),behavior:"smooth"})}i.setDate(t)})()}trackByFn(t,i){return i?`${i.id}|${i.date}`:void 0}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(D.I))},n.\u0275cmp=e.Xpm({type:n,selectors:[["schedule-list"]],viewQuery:function(t,i){if(1&t&&e.Gf(h.N7,7),2&t){let o;e.iGM(o=e.CRH())&&(i._viewport=o.first)}},decls:35,vars:22,consts:[[1,"w-full","h-16","flex","items-center","justify-between","bg-white","dark:bg-neutral-700","border-b","border-gray-300","dark:border-neutral-500","shadow","p-2"],["appearance","outline",1,"h-[3.25rem]"],[3,"ngModel","placeholder","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"flex","items-center","space-x-2"],["mat-button","",1,"clear","underline",3,"matMenuTriggerFor"],["mat-icon-button","",1,"relative"],["dateMenu",""],["matInput","",1,"opacity-0","absolute","inset-0",3,"ngModel","matDatepicker","min","max","ngModelChange"],["matSuffix","",1,"opacity-0","absolute","inset-0",3,"for"],["picker",""],[1,"w-full","flex-1","overflow-hidden","bg-gray-100","dark:bg-neutral-600"],["itemSize","88",1,"h-full","w-full",3,"scrolledIndexChange"],["schedule-list-item","",3,"item",4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTrackBy"],["mode","indeterminate","class","w-full",4,"ngIf"],["xPosition","before"],["legend","matMenu"],[1,"flex","items-center","px-4","py-2","hover:bg-black/60"],[1,"bg-success","h-2","w-2","rounded-full","mr-4"],[1,"bg-pending","h-2","w-2","rounded-full","mr-4"],[1,"bg-error","h-2","w-2","rounded-full","mr-4"],[3,"value"],["schedule-list-item","",3,"item"],["mode","indeterminate",1,"w-full"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0)(1,"mat-form-field",1)(2,"mat-select",2),e.NdJ("ngModelChange",function(a){return i.setOptions({calendar:a})}),e.ALo(3,"async"),e.YNc(4,ne,4,6,"mat-option",3),e.ALo(5,"async"),e.qZA()(),e.TgZ(6,"div",4)(7,"button",5),e._uU(8," Legend "),e.qZA(),e.TgZ(9,"button",6,7)(11,"app-icon"),e._uU(12,"event"),e.qZA(),e.TgZ(13,"input",8),e.NdJ("ngModelChange",function(a){return i.scrollTo(a)}),e.ALo(14,"async"),e.qZA(),e._UZ(15,"mat-datepicker-toggle",9),e.qZA(),e._UZ(16,"mat-datepicker",null,10),e.qZA()(),e.TgZ(18,"div",11)(19,"cdk-virtual-scroll-viewport",12),e.NdJ("scrolledIndexChange",function(a){return i.updateDate(a)}),e.YNc(20,ie,1,1,"div",13),e.ALo(21,"async"),e.qZA()(),e.YNc(22,oe,1,0,"mat-progress-bar",14),e.ALo(23,"async"),e.TgZ(24,"mat-menu",15,16)(26,"div",17),e._UZ(27,"div",18),e._uU(28," Approved "),e.qZA(),e.TgZ(29,"div",17),e._UZ(30,"div",19),e._uU(31," Tentative "),e.qZA(),e.TgZ(32,"div",17),e._UZ(33,"div",20),e._uU(34," Declined "),e.qZA()()),2&t){const o=e.MAs(17),a=e.MAs(25);let r;e.xp6(2),e.Q6J("ngModel",null==(r=e.lcZ(3,12,i.options))?null:r.calendar)("placeholder",null==i.user?null:i.user.name),e.xp6(2),e.Q6J("ngForOf",e.lcZ(5,14,i.calendars)),e.xp6(3),e.Q6J("matMenuTriggerFor",a),e.xp6(6),e.Q6J("ngModel",e.lcZ(14,16,i.date))("matDatepicker",o)("min",i.today)("max",i.max_date),e.xp6(2),e.Q6J("for",o),e.xp6(5),e.Q6J("cdkVirtualForOf",e.lcZ(21,18,i.event_list))("cdkVirtualForTrackBy",i.trackByFn),e.xp6(2),e.Q6J("ngIf",e.lcZ(23,20,i.loading))}},dependencies:[c.sg,c.O5,f.Fj,f.JJ,f.On,_.o,N.ey,C.VK,C.p6,U.KE,U.R9,j.gD,v.lW,w.Mq,w.hl,w.nW,q.Nt,h.xd,h.x0,h.N7,V.pW,R,c.Ov,te],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}\n/*# sourceMappingURL=schedule-list.component.ts-angular-inline--111.css.map*/"]}),n})();var L=s(1799),se=s(2317),M=s(6725),J=s(1484),I=s(1708);function ae(n,l){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"date"),e.ALo(3,"date"),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.AsE(" at ",e.xi3(2,2,t.event.date,"shortTime")," ~ ",e.xi3(3,5,t.event.date+60*t.event.duration*1e3,"shortTime")," ")}}function re(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"button",18),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(3);return e.KtG(o.viewLocation())}),e._uU(1," Map "),e.qZA()}}function ce(n,l){if(1&n&&(e.TgZ(0,"div",14)(1,"div",11)(2,"app-icon"),e._uU(3,"menu_book"),e.qZA()(),e.TgZ(4,"div",12),e._uU(5),e.qZA(),e.YNc(6,re,2,0,"button",17),e.qZA()),2&n){const t=e.oxw(2);e.xp6(5),e.hij(" ",t.event.description||"<No Asset>"," "),e.xp6(1),e.Q6J("ngIf",t.event.extension_data.map_id&&t.can_view_location)}}function de(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",19)(1,"button",20),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.confirmDelete())}),e._uU(2),e.qZA()()}if(2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("disabled",t.loading),e.xp6(1),e.hij(" ",t.is_host?"Delete":"Decline"," Event ")}}function ue(n,l){if(1&n&&(e.TgZ(0,"div",8)(1,"h2",9),e._uU(2),e.qZA(),e.TgZ(3,"div",10)(4,"div",11)(5,"app-icon"),e._uU(6,"event"),e.qZA()(),e.TgZ(7,"div",12),e._uU(8),e.ALo(9,"date"),e.YNc(10,ae,4,8,"span",13),e.qZA()(),e.TgZ(11,"div",14)(12,"div",11)(13,"app-icon"),e._uU(14,"schedule"),e.qZA()(),e.TgZ(15,"div",12),e._uU(16),e.qZA()(),e.YNc(17,ce,7,2,"div",15),e.YNc(18,de,3,2,"div",16),e.qZA()),2&n){const t=e.oxw();e.xp6(2),e.hij(" ",t.event.title," "),e.xp6(6),e.hij(" ",e.xi3(9,6,t.event.date,"longDate")," "),e.xp6(2),e.Q6J("ngIf",!t.event.all_day&&t.event.duration<720),e.xp6(6),e.Oqu(!t.event.all_day&&t.event.duration<720?t.duration:"All Day"),e.xp6(1),e.Q6J("ngIf",t.event.asset_id),e.xp6(1),e.Q6J("ngIf",!t.has_ended&&t.is_host)}}function pe(n,l){1&n&&(e.TgZ(0,"div",21),e._UZ(1,"mat-spinner",22),e.TgZ(2,"p"),e._uU(3,"Loading booking data..."),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("diameter",32))}const me=function(){return["/schedule"]};let ve=(()=>{class n extends d.KG{constructor(t,i,o,a,r){super(),this._route=t,this._router=i,this._dialog=o,this._bookings=a,this._settings=r}get is_host(){return this.event?.user_email===(0,d.ar)()?.email}get can_view_location(){return!this._settings.get("app.no_maps")}get duration(){return this.event.all_day||this.event.duration>=720?"All Day":(0,L.Z)({hours:Math.floor(this.event?.duration/60),minutes:this.event?.duration%60})}get has_ended(){return this.event&&(0,k.Z)(new Date,(0,se.Z)(this.event.date,this.event.duration))}ngOnInit(){var t=this;this.subscription("route.params",this._route.paramMap.subscribe(function(){var i=(0,m.Z)(function*(o){o.has("id")&&(t.event=yield(0,g.Fo)(o.get("id")).toPromise().catch(()=>null))});return function(o){return i.apply(this,arguments)}}())),this.timeout("return",()=>this.event?"":this._router.navigate(["/schedule"]),8e3)}viewLocation(){this._dialog.open(M.p6,{maxWidth:"95vw",maxHeight:"95vh",data:{item:{id:this.event.asset_id,map_id:this.event.extension_data.map_id,name:this.event.description,zones:this.event.zones}}})}editEvent(){this._bookings.newForm(this.event),this._router.navigate(["/book","desks","form"])}confirmDelete(){var t=this;return(0,m.Z)(function*(){const i=yield(0,d._5)({title:(t.is_host?"Delete":"Decline")+" event",content:`Are you sure you wish to ${t.is_host?"delete":"decline"} this event?`,icon:{content:t.is_host?"delete":"event_busy"}},t._dialog);"done"===i.reason&&(i.loading("Removing booking..."),yield(0,g.FP)(t.event.id).toPromise().catch(o=>{throw i.loading(""),(0,d.cB)(`Error removing booking. ${o}`),o}),(0,d.t5)("Successfully removed booking."),t._router.navigate(["/schedule"]),i.close())})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.gz),e.Y36(u.F0),e.Y36(J.uw),e.Y36(g.fy),e.Y36(d.gb))},n.\u0275cmp=e.Xpm({type:n,selectors:[["schedule-view-booking"]],inputs:{event:"event"},features:[e.qOj],decls:11,vars:4,consts:[["topbar","",1,""],["button","","mat-button","",1,"clear","h-[2.75rem]","text-white",3,"routerLink"],[1,"flex","items-center","justify-center","h-full"],[1,"text-xl"],[1,"ml-2","mx-4"],[1,"flex-1","w-full","flex","flex-col","items-center","bg-gray-200","dark:bg-neutral-600","p-4","overflow-auto"],["class","max-w-full w-[28rem] bg-white dark:bg-neutral-700 border border-gray-300 dark:border-neutral-500 px-4 pb-4 divide-y divide-gray-300 dark:divide-neutral-500",4,"ngIf","ngIfElse"],["load_state",""],[1,"max-w-full","w-[28rem]","bg-white","dark:bg-neutral-700","border","border-gray-300","dark:border-neutral-500","px-4","pb-4","divide-y","divide-gray-300","dark:divide-neutral-500"],[1,"text-xl","uppercase","font-medium","w-full","my-4"],[1,"flex","items-center","py-2","space-x-2","w-full","!border-none"],[1,"p-2","rounded-full","bg-gray-300","dark:bg-neutral-600","mr-2"],[1,"flex-1","truncate"],[4,"ngIf"],[1,"flex","items-center","py-2","space-x-2","w-full"],["class","flex items-center py-2 space-x-2 w-full",4,"ngIf"],["class","flex items-center justify-center space-x-2 mt-4 !border-none",4,"ngIf"],["mat-button","","locate","","class","bg-transparent border-none underline text-black",3,"click",4,"ngIf"],["mat-button","","locate","",1,"bg-transparent","border-none","underline","text-black",3,"click"],[1,"flex","items-center","justify-center","space-x-2","mt-4","!border-none"],["mat-button","","remove","",1,"w-32","error","inverse",3,"disabled","click"],[1,"h-full","w-full","flex","flex-col","items-center","justify-center","space-y-2"],[3,"diameter"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0)(1,"a",1)(2,"div",2)(3,"app-icon",3),e._uU(4,"arrow_back"),e.qZA(),e.TgZ(5,"span",4),e._uU(6,"Back"),e.qZA()()()(),e.TgZ(7,"div",5),e.YNc(8,ue,19,9,"div",6),e.qZA(),e.YNc(9,pe,4,1,"ng-template",null,7,e.W1O)),2&t){const o=e.MAs(10);e.xp6(1),e.Q6J("routerLink",e.DdM(3,me)),e.xp6(7),e.Q6J("ngIf",i.event)("ngIfElse",o)}},dependencies:[c.O5,_.o,v.lW,v.zs,I.Ou,u.yS,c.uU],styles:["[_nghost-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column}[topbar][_ngcontent-%COMP%]{background-color:#00539f}[list][_ngcontent-%COMP%]{transition:height .2s}\n/*# sourceMappingURL=schedule-view-booking.component.ts-angular-inline--112.css.map*/"]}),n})();var x=s(1299),ge=s(8215),he=s(9685),fe=s(6896),_e=s(7202);function xe(n,l){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"date"),e.ALo(3,"date"),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.AsE("at ",e.xi3(2,2,t.event.date,"shortTime")," ~ ",e.xi3(3,5,t.event.date+60*t.event.duration*1e3,"shortTime"),"")}}function Ze(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"button",27),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit,a=e.oxw(2);return e.KtG(a.viewLocation(o))}),e._uU(1," Map "),e.qZA()}}function we(n,l){if(1&n&&(e.TgZ(0,"div",24)(1,"span",12),e._uU(2),e.qZA(),e._UZ(3,"span",25),e.YNc(4,Ze,2,0,"button",26),e.qZA()),2&n){const t=l.$implicit,i=e.oxw(2);e.xp6(2),e.AsE(" ",t.display_name||t.name," [",(null==t.level?null:t.level.display_name)||(null==t.level?null:t.level.name),"] "),e.xp6(1),e.ekj("bg-success","accepted"===t.response_status)("bg-pending","tentative"===t.response_status)("bg-error","declined"===t.response_status),e.xp6(1),e.Q6J("ngIf",i.can_view_location)}}function be(n,l){if(1&n&&(e.TgZ(0,"div",28),e._UZ(1,"a-user-avatar",29),e.TgZ(2,"span",12),e._uU(3),e.qZA(),e._UZ(4,"span",30),e.qZA()),2&n){const t=l.$implicit;e.xp6(1),e.Q6J("user",t),e.xp6(2),e.Oqu(t.name||t.email),e.xp6(1),e.ekj("bg-success","accepted"===t.response_status)("bg-pending","tentative"===t.response_status)("bg-error","declined"===t.response_status)}}function ye(n,l){if(1&n&&(e.TgZ(0,"div",39),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit,i=e.oxw(3);e.Q6J("matTooltip",i.optionsFor(t)),e.xp6(1),e.AsE(" ",t.options.length," option",1===t.options.length?"":"s"," selected ")}}function Te(n,l){if(1&n&&(e.TgZ(0,"div",34)(1,"div",35)(2,"div",35),e._uU(3),e.qZA(),e.YNc(4,ye,2,3,"div",36),e.qZA(),e.TgZ(5,"div",37),e._uU(6),e.ALo(7,"currency"),e.qZA(),e.TgZ(8,"div",38),e._uU(9),e.qZA()()),2&n){const t=l.$implicit;e.xp6(3),e.hij(" ",t.name," "),e.xp6(1),e.Q6J("ngIf",t.options.length),e.xp6(2),e.hij(" ",e.lcZ(7,4,t.total_cost/100)," "),e.xp6(3),e.hij(" ",t.quantity," ")}}function Ae(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",15)(1,"div",31)(2,"div",16)(3,"div",11)(4,"app-icon"),e._uU(5,"group"),e.qZA()(),e.TgZ(6,"div",12),e._uU(7),e.qZA(),e.TgZ(8,"button",32),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.show_catering=!o.show_catering)}),e._uU(9),e.qZA()(),e.TgZ(10,"div",18),e.YNc(11,Te,10,6,"div",33),e.qZA()()()}if(2&n){const t=e.oxw(2);e.xp6(7),e.hij(" ",(null==t.event.extension_data.catering[0]?null:t.event.extension_data.catering[0].item_count)||0," Catering Item(s) "),e.xp6(2),e.hij(" ",t.show_people?"Hide":"Show"," "),e.xp6(1),e.Udp("height",t.show_catering?3*(null==t.event.extension_data.catering[0]?null:t.event.extension_data.catering[0].items.length)+"rem":"0"),e.xp6(1),e.Q6J("ngForOf",null==t.event.extension_data.catering[0]?null:t.event.extension_data.catering[0].items)}}function Ce(n,l){if(1&n&&(e.TgZ(0,"div",14)(1,"div",11)(2,"app-icon"),e._uU(3,"event_note"),e.qZA()(),e._UZ(4,"div",40),e.ALo(5,"sanitize"),e.qZA()),2&n){const t=e.oxw(2);e.xp6(4),e.Q6J("innerHTML",e.lcZ(5,1,t.event.body),e.oJD)}}function Ue(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"button",44),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(3);return e.KtG(o.editEvent())}),e._uU(1," Edit Event "),e.qZA()}if(2&n){const t=e.oxw(3);e.Q6J("disabled",t.loading)}}function ke(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",41),e.YNc(1,Ue,2,1,"button",42),e.TgZ(2,"button",43),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.confirmDelete())}),e._uU(3),e.qZA()()}if(2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.is_host),e.xp6(1),e.Q6J("disabled",t.loading),e.xp6(1),e.hij(" ",t.is_host?"Delete":"Decline"," Event ")}}function Se(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",8)(1,"h2",9),e._uU(2),e.qZA(),e.TgZ(3,"div",10)(4,"div",11)(5,"app-icon"),e._uU(6,"event"),e.qZA()(),e.TgZ(7,"div",12),e._uU(8),e.ALo(9,"date"),e.YNc(10,xe,4,8,"span",13),e.qZA()(),e.TgZ(11,"div",14)(12,"div",11)(13,"app-icon"),e._uU(14,"schedule"),e.qZA()(),e.TgZ(15,"div",12),e._uU(16),e.qZA()(),e.TgZ(17,"div",15)(18,"div",16)(19,"div",11)(20,"app-icon"),e._uU(21,"place"),e.qZA()(),e.TgZ(22,"div",12),e._uU(23),e.qZA(),e.TgZ(24,"button",17),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.show_spaces=!o.show_spaces)}),e._uU(25),e.qZA()(),e.TgZ(26,"div",18),e.YNc(27,we,5,9,"div",19),e.qZA()(),e.TgZ(28,"div",15)(29,"div",16)(30,"div",11)(31,"app-icon"),e._uU(32,"group"),e.qZA()(),e.TgZ(33,"div",12),e._uU(34),e.qZA(),e.TgZ(35,"button",17),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.show_people=!o.show_people)}),e._uU(36),e.qZA()(),e.TgZ(37,"div",18),e.YNc(38,be,5,8,"div",20),e.qZA()(),e.YNc(39,Ae,12,5,"div",21),e.TgZ(40,"div",15),e.YNc(41,Ce,6,3,"div",22),e.qZA(),e.YNc(42,ke,4,3,"div",23),e.qZA()}if(2&n){const t=e.oxw();e.xp6(2),e.hij(" ",t.event.title," "),e.xp6(6),e.hij(" ",e.xi3(9,19,t.event.date,"longDate")," "),e.xp6(2),e.Q6J("ngIf",!t.event.all_day),e.xp6(6),e.Oqu(t.duration),e.xp6(7),e.hij(" ",null==t.event.resources?null:t.event.resources.length," Space(s) "),e.xp6(1),e.Q6J("disabled",!(null!=t.event.resources&&t.event.resources.length)),e.xp6(1),e.hij(" ",t.show_spaces?"Hide":"Show"," "),e.xp6(1),e.Udp("height",t.show_spaces?2.5*(null==t.event.resources?null:t.event.resources.length)+"rem":"0"),e.xp6(1),e.Q6J("ngForOf",t.event.resources),e.xp6(7),e.hij(" ",(null==t.event.attendees?null:t.event.attendees.length)||0," Attendee(s) "),e.xp6(1),e.Q6J("disabled",!(null!=t.event.attendees&&t.event.attendees.length)),e.xp6(1),e.hij(" ",t.show_people?"Hide":"Show"," "),e.xp6(1),e.Udp("height",t.show_people?3*t.event.attendees.length+"rem":"0"),e.xp6(1),e.Q6J("ngForOf",t.event.attendees),e.xp6(1),e.Q6J("ngIf",null==t.event.extension_data.catering?null:t.event.extension_data.catering.length),e.xp6(2),e.Q6J("ngIf",t.event.body),e.xp6(1),e.Q6J("ngIf","done"!==t.event.state)}}function Le(n,l){1&n&&(e.TgZ(0,"div",45),e._UZ(1,"mat-spinner",46),e.TgZ(2,"p"),e._uU(3,"Loading event data..."),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("diameter",32))}const Me=function(){return["/schedule"]};let Je=(()=>{class n extends d.KG{constructor(t,i,o,a,r,p){super(),this._route=t,this._router=i,this._dialog=o,this._events=a,this._spaces=r,this._settings=p}get is_host(){return this.event?.host}get can_view_location(){return!this._settings.get("app.no_maps")}get duration(){return this.event.all_day?"All Day":(0,L.Z)({hours:Math.floor(this.event?.duration/60),minutes:this.event?.duration%60})}ngOnInit(){var t=this;this.subscription("route.params",this._route.paramMap.subscribe(function(){var i=(0,m.Z)(function*(o){if(o.has("id")){const a=o.get("id").split("|");t.event=t._settings.get("app.no_user_calendar")?yield(0,g.Fo)(a[0]).pipe((0,Z.U)(r=>(0,x.Yd)(r))).toPromise():yield(0,x.Vh)(a[0],{system_id:a[1]}).toPromise()}});return function(o){return i.apply(this,arguments)}}())),this.timeout("return",()=>this.event?"":this._router.navigate(["/schedule"]),8e3)}optionsFor(t){return t.options.map(i=>i.name).join("\n")}viewLocation(t){t=this._spaces.find(t.id||t.email)||t,this._dialog.open(M.p6,{maxWidth:"95vw",maxHeight:"95vh",data:{item:t}})}editEvent(){"event_start"in this.event&&(this._events.newForm(this.event),this._router.navigate(["/book","spaces","form"]))}confirmDelete(){var t=this;return(0,m.Z)(function*(){const i=yield(0,d._5)({title:(t.is_host?"Delete":"Decline")+" event",content:`Are you sure you wish to ${t.is_host?"delete":"decline"} this event?`,icon:{content:t.is_host?"delete":"event_busy"}},t._dialog);"done"===i.reason&&(i.loading("Removing event..."),yield(t._settings.get("app.no_user_calendar")?g.pv:x.xC)(t.event.id).toPromise().catch(o=>{throw i.loading(""),(0,d.cB)(`Error removing event. ${o}`),o}),(0,d.t5)("Successfully removed event."),t._router.navigate(["/schedule"]),i.close())})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.gz),e.Y36(u.F0),e.Y36(J.uw),e.Y36(x.MH),e.Y36(ge.sK),e.Y36(d.gb))},n.\u0275cmp=e.Xpm({type:n,selectors:[["schedule-view-event"]],inputs:{event:"event"},features:[e.qOj],decls:11,vars:4,consts:[["topbar","",1,""],["button","","mat-button","",1,"clear","h-[2.75rem]","text-white",3,"routerLink"],[1,"flex","items-center","justify-center","h-full"],[1,"text-xl"],[1,"ml-2","mx-4"],[1,"flex-1","w-full","flex","flex-col","items-center","bg-gray-200","dark:bg-neutral-600","p-4","overflow-auto"],["class","max-w-full w-[28rem] bg-white dark:bg-neutral-700 border border-gray-300 dark:border-neutral-500 px-4 pb-4 divide-y divide-gray-300 dark:divide-neutral-500",4,"ngIf","ngIfElse"],["load_state",""],[1,"max-w-full","w-[28rem]","bg-white","dark:bg-neutral-700","border","border-gray-300","dark:border-neutral-500","px-4","pb-4","divide-y","divide-gray-300","dark:divide-neutral-500"],[1,"text-xl","uppercase","font-medium","w-full","my-4"],[1,"flex","items-center","py-2","space-x-2","w-full","!border-none"],[1,"p-2","rounded-full","bg-gray-300","dark:bg-neutral-600","mr-2"],[1,"flex-1","truncate"],[4,"ngIf"],[1,"flex","items-center","py-2","space-x-2","w-full"],[1,"w-full"],[1,"flex","items-center","py-2","space-x-2"],["mat-button","",1,"clear","bg-transparent","border-none","underline",3,"disabled","click"],["list","",1,"overflow-hidden"],["class","flex items-center h-10 pl-12",4,"ngFor","ngForOf"],["class","flex items-center h-12 pl-12 pr-2 space-x-2",4,"ngFor","ngForOf"],["class","w-full",4,"ngIf"],["class","flex items-center py-2 space-x-2 w-full",4,"ngIf"],["class","flex items-center justify-center space-x-2 mt-4 !border-none",4,"ngIf"],[1,"flex","items-center","h-10","pl-12"],[1,"h-2","w-2","rounded","mr-2"],["mat-button","","locate","","class","bg-transparent border-none underline text-black",3,"click",4,"ngIf"],["mat-button","","locate","",1,"bg-transparent","border-none","underline","text-black",3,"click"],[1,"flex","items-center","h-12","pl-12","pr-2","space-x-2"],[1,"text-sm",3,"user"],[1,"h-2","w-2","rounded","mr-4"],[1,"border-b","border-gray-200","w-full"],["mat-button","",1,"clear","bg-transparent","border-none","underline",3,"click"],["class","flex items-center h-12 pl-12 space-x-2",4,"ngFor","ngForOf"],[1,"flex","items-center","h-12","pl-12","space-x-2"],[1,"flex-1","w-1/2"],["class","text-xs underline",3,"matTooltip",4,"ngIf"],[1,"bg-primary","text-xs","rounded","px-4","py-2","mx-2","text-white","font-medium"],[1,"m-2","bg-neutral-500","text-white","h-8","w-8","rounded-full","flex","items-center","justify-center","text-sm"],[1,"text-xs","underline",3,"matTooltip"],["notes","",1,"flex-1","w-1/2","overflow-auto",3,"innerHTML"],[1,"flex","items-center","justify-center","space-x-2","mt-4","!border-none"],["mat-button","","edit","","class","w-32",3,"disabled","click",4,"ngIf"],["mat-button","","remove","",1,"w-32","error","inverse",3,"disabled","click"],["mat-button","","edit","",1,"w-32",3,"disabled","click"],[1,"h-full","w-full","flex","flex-col","items-center","justify-center","space-y-2"],[3,"diameter"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0)(1,"a",1)(2,"div",2)(3,"app-icon",3),e._uU(4,"arrow_back"),e.qZA(),e.TgZ(5,"span",4),e._uU(6,"Back"),e.qZA()()()(),e.TgZ(7,"div",5),e.YNc(8,Se,43,22,"div",6),e.qZA(),e.YNc(9,Le,4,1,"ng-template",null,7,e.W1O)),2&t){const o=e.MAs(10);e.xp6(1),e.Q6J("routerLink",e.DdM(3,Me)),e.xp6(7),e.Q6J("ngIf",i.event)("ngIfElse",o)}},dependencies:[c.sg,c.O5,_.o,he.k,v.lW,v.zs,I.Ou,fe.gM,u.yS,c.H9,c.uU,_e.n],styles:["[_nghost-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column}[topbar][_ngcontent-%COMP%]{background-color:#00539f}[list][_ngcontent-%COMP%]{transition:height .2s}\n/*# sourceMappingURL=schedule-view-event.component.ts-angular-inline--113.css.map*/"]}),n})();var Ie=s(4187),Ee=s(6012);const Oe=[{path:"",component:(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["schedule"]],decls:5,vars:0,consts:[[1,"flex-1","flex","sm:flex-row","flex-col-reverse","h-1/2"],[1,"relative","flex","flex-col","flex-1","h-1/2","sm:h-auto","overflow-hidden"]],template:function(t,i){1&t&&(e._UZ(0,"topbar"),e.TgZ(1,"div",0)(2,"main",1),e._UZ(3,"router-outlet"),e.qZA()(),e._UZ(4,"footer-menu"))},dependencies:[Ie.o,Ee.i,u.lC],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}\n/*# sourceMappingURL=schedule.component.ts-angular-inline--114.css.map*/"]}),n})(),children:[{path:"",component:le},{path:"view/:id/booking",component:ve},{path:"view/:id/event",component:Je}]},{path:"*",redirectTo:""}];let Qe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,f.u5,O.v,E.PP,h.Cl,u.Bz.forChild(Oe)]}),n})()}}]);
//# sourceMappingURL=apps_workplace_src_app_schedule_schedule_module_ts.js.map