"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["apps_workplace_src_app_schedule_schedule_module_ts"],{6326:(fe,Z,l)=>{l.r(Z),l.d(Z,{AppScheduleModule:()=>he});var v=l(5629),a=l(6362),h=l(587),u=l(9504),M=l(1992),p=l(4929),c=l(6365),L=l(8053),T=l(5845),J=l(312),w=l(6942),A=l(3910),I=l(8676),e=l(6723),b=l(4770),D=l(1434),E=l(1130),m=l(7317),y=l(2796),g=l(5306),O=l(4683),x=l(5818),f=l(4509),C=l(1233);const F=["schedule-list-item",""];function Q(n,o){if(1&n&&(e.TgZ(0,"div",5),e._uU(1),e.ALo(2,"date"),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.hij(" No events for ",e.xi3(2,1,t.item.date,"longDate")," ")}}function V(n,o){if(1&n&&(e.TgZ(0,"div"),e.TgZ(1,"div",3),e._uU(2),e.ALo(3,"date"),e.qZA(),e.YNc(4,Q,3,4,"div",4),e.qZA()),2&n){const t=e.oxw();e.xp6(2),e.AsE(" ",e.xi3(3,3,t.item.date,"longDate")," (",t.item.duration,") "),e.xp6(2),e.Q6J("ngIf",!t.item.duration)}}function j(n,o){if(1&n&&(e.TgZ(0,"div",15),e.TgZ(1,"app-icon",16),e._uU(2,"place"),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"slice"),e.qZA(),e.qZA()),2&n){const t=e.oxw(2);e.xp6(4),e.hij(" ",e.Dn7(5,1,(null==t.item?null:t.item.location)||(null==t.item?null:t.item.description),0,255)," ")}}const N=function(n,o){return["/schedule","view",n,o]};function Y(n,o){if(1&n&&(e.TgZ(0,"a",6),e.TgZ(1,"div",7),e.TgZ(2,"div",8),e.TgZ(3,"app-icon",9),e._uU(4),e.qZA(),e.TgZ(5,"div",10),e._uU(6),e.ALo(7,"date"),e.qZA(),e.TgZ(8,"div",11),e._uU(9),e.qZA(),e.qZA(),e.TgZ(10,"div",12),e.TgZ(11,"div",13),e._uU(12),e.qZA(),e.YNc(13,j,6,5,"div",14),e.qZA(),e.qZA(),e.qZA()),2&n){const t=e.oxw();e.ekj("opacity-50",t.has_ended),e.Q6J("routerLink",e.WLB(17,N,null==t.item?null:t.item.id,t.type)),e.xp6(2),e.ekj("bg-success","approved"===t.status)("bg-pending","tentative"===t.status)("bg-error","declined"===t.status),e.xp6(2),e.Oqu(t.icon),e.xp6(2),e.hij(" ",null!=t.item&&t.item.all_day?"All Day":e.xi3(7,14,null==t.item?null:t.item.date,"shortTime")," "),e.xp6(3),e.hij(" (",t.status,") "),e.xp6(3),e.hij(" ",(null==t.item?null:t.item.title)||"Untitled Event"," "),e.xp6(1),e.Q6J("ngIf",(null==t.item?null:t.item.location)||(null==t.item?null:t.item.description))}}let B=(()=>{class n{get type(){return this.item instanceof f.$N?"booking":"event"}get has_ended(){return!this.item||"date"===this.item.id||(0,C.Z)(new Date,this.item.date+60*this.item.duration*1e3)}get icon(){if("declined"===this.status)return"cancel";if(this.item.asset_id)switch(this.item.booking_type){case"desk":return"view_quilt";case"parking":return"local_parking"}return"event"}get status(){return this.item&&"date"!==this.item.id?this.item.status:"declined"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["","schedule-list-item",""]],inputs:{item:"item"},attrs:F,decls:3,vars:2,consts:[[3,"ngSwitch"],[4,"ngSwitchCase"],["mat-button","","class","rounded-none my-1 mx-4 w-[calc(100%-2rem)] h-20 bg-white hover:shadow p-0",3,"opacity-50","routerLink",4,"ngSwitchDefault"],[1,"mx-4","w-full","h-12","text-xl","flex","items-center"],["class","mx-4 w-full h-10 text-lg text-center font-normal opacity-60",4,"ngIf"],[1,"mx-4","w-full","h-10","text-lg","text-center","font-normal","opacity-60"],["mat-button","",1,"rounded-none","my-1","mx-4","w-[calc(100%-2rem)]","h-20","bg-white","hover:shadow","p-0",3,"routerLink"],[1,"flex","items-center","border","border-gray-200"],["status","",1,"h-20","w-20","flex","flex-col","items-center","justify-center","text-white","leading-tight"],[1,"text-2xl"],[1,"font-normal"],[1,"capitalize","text-xs","font-medium"],[1,"flex-1","flex","flex-col","text-left","p-2"],[1,"text-xl","pl-1"],["class","flex items-center font-normal",4,"ngIf"],[1,"flex","items-center","font-normal"],[1,"text-lg","mr-1"]],template:function(t,i){1&t&&(e.ynx(0,0),e.YNc(1,V,5,6,"div",1),e.YNc(2,Y,14,20,"a",2),e.BQk()),2&t&&(e.Q6J("ngSwitch",null==i.item?null:i.item.id),e.xp6(1),e.Q6J("ngSwitchCase","date"))},directives:[a.RF,a.n9,a.O5,a.ED,m.zs,u.yS,g.o],pipes:[a.uU,a.OU],encapsulation:2}),n})();var P=l(833);function $(n,o){1&n&&e._UZ(0,"div",20),2&n&&e.Q6J("item",o.$implicit)}function H(n,o){1&n&&e._UZ(0,"mat-progress-bar",21)}let z=(()=>{class n{constructor(t){this._state=t,this.today=new Date,this.max_date=(0,L.Z)(this.today,4),this.options=this._state.options,this.loading=this._state.loading,this.date=this.options.pipe((0,w.U)(i=>new Date(i.start))),this.event_list=this._state.events.pipe((0,w.U)(i=>{let s=[],r=new Date(this.today);for(;r<this.max_date;){const d=i.filter(ge=>(0,T.Z)(r,ge.date));s=d.length?[...s,{id:"date",date:r.valueOf(),duration:d.length},...d]:[...s,{id:"date",date:r.valueOf(),duration:0}],r=(0,J.Z)(r,1)}return s}))}get user(){return(0,c.ar)()}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}setDate(t){this._state.setOptions({start:t.valueOf()})}updateDate(t){return(0,p.mG)(this,void 0,void 0,function*(){const s=((yield this.event_list.pipe((0,A.q)(1)).toPromise())||[])[t]||{};s&&this.setDate(s.date)})}scrollTo(t){return(0,p.mG)(this,void 0,void 0,function*(){const i=yield this.event_list.pipe((0,A.q)(1)).toPromise(),s=i.findIndex(r=>"date"===r.id&&(0,T.Z)(r.date,t));if(s>=0&&this._viewport){let r=0;for(let d=0;d<i.length&&d<s;d++)r+=1;this._viewport.scrollTo({top:Math.round(88*r),behavior:"smooth"})}this.setDate(t)})}trackByFn(t,i){return i?`${i.id}|${i.date}`:void 0}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(I.I))},n.\u0275cmp=e.Xpm({type:n,selectors:[["schedule-list"]],viewQuery:function(t,i){if(1&t&&e.Gf(v.N7,7),2&t){let s;e.iGM(s=e.CRH())&&(i._viewport=s.first)}},decls:34,vars:17,consts:[[1,"w-full","h-16","flex","items-center","justify-between","bg-white","border-b","border-gray-300","shadow","p-2"],["appearance","outline",1,"h-[3.25rem]"],[3,"placeholder"],[1,"flex","items-center","space-x-2"],["mat-button","",1,"clear","underline",3,"matMenuTriggerFor"],["mat-icon-button","",1,"relative"],["dateMenu",""],["matInput","",1,"opacity-0","absolute","inset-0",3,"ngModel","matDatepicker","min","max","ngModelChange"],["matSuffix","",1,"opacity-0","absolute","inset-0",3,"for"],["picker",""],[1,"w-full","flex-1","overflow-hidden","bg-gray-100"],["itemSize","88",1,"h-full","w-full",3,"scrolledIndexChange"],["schedule-list-item","",3,"item",4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTrackBy"],["mode","indeterminate","class","w-full",4,"ngIf"],["xPosition","before"],["legend","matMenu"],[1,"flex","items-center","px-4","py-2","hover:bg-gray-100"],[1,"bg-success","h-2","w-2","rounded-full","mr-4"],[1,"bg-pending","h-2","w-2","rounded-full","mr-4"],[1,"bg-error","h-2","w-2","rounded-full","mr-4"],["schedule-list-item","",3,"item"],["mode","indeterminate",1,"w-full"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"mat-form-field",1),e.TgZ(2,"mat-select",2),e.TgZ(3,"mat-option"),e._uU(4),e.qZA(),e.qZA(),e.qZA(),e.TgZ(5,"div",3),e.TgZ(6,"button",4),e._uU(7," Legend "),e.qZA(),e.TgZ(8,"button",5,6),e.TgZ(10,"app-icon"),e._uU(11,"event"),e.qZA(),e.TgZ(12,"input",7),e.NdJ("ngModelChange",function(r){return i.scrollTo(r)}),e.ALo(13,"async"),e.qZA(),e._UZ(14,"mat-datepicker-toggle",8),e.qZA(),e._UZ(15,"mat-datepicker",null,9),e.qZA(),e.qZA(),e.TgZ(17,"div",10),e.TgZ(18,"cdk-virtual-scroll-viewport",11),e.NdJ("scrolledIndexChange",function(r){return i.updateDate(r)}),e.YNc(19,$,1,1,"div",12),e.ALo(20,"async"),e.qZA(),e.qZA(),e.YNc(21,H,1,0,"mat-progress-bar",13),e.ALo(22,"async"),e.TgZ(23,"mat-menu",14,15),e.TgZ(25,"div",16),e._UZ(26,"div",17),e._uU(27," Approved "),e.qZA(),e.TgZ(28,"div",16),e._UZ(29,"div",18),e._uU(30," Tentative "),e.qZA(),e.TgZ(31,"div",16),e._UZ(32,"div",19),e._uU(33," Declined "),e.qZA(),e.qZA()),2&t){const s=e.MAs(16),r=e.MAs(24);e.xp6(2),e.Q6J("placeholder",null==i.user?null:i.user.name),e.xp6(2),e.Oqu(null==i.user?null:i.user.name),e.xp6(2),e.Q6J("matMenuTriggerFor",r),e.xp6(6),e.Q6J("ngModel",e.lcZ(13,11,i.date))("matDatepicker",s)("min",i.today)("max",i.max_date),e.xp6(2),e.Q6J("for",s),e.xp6(5),e.Q6J("cdkVirtualForOf",e.lcZ(20,13,i.event_list))("cdkVirtualForTrackBy",i.trackByFn),e.xp6(2),e.Q6J("ngIf",e.lcZ(22,15,i.loading))}},directives:[b.KE,D.gD,E.ey,m.lW,y.p6,g.o,O.Nt,h.Fj,x.hl,h.JJ,h.On,x.nW,b.R9,x.Mq,v.N7,v.xd,v.x0,B,a.O5,P.pW,y.VK],pipes:[a.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}\n/*# sourceMappingURL=schedule-list.component.ts-angular-inline--82.css.map*/"]}),n})();var q=l(1799),G=l(2317),U=l(2878),S=l(5758),k=l(4742);function R(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"button",17),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).viewLocation()}),e._uU(1," Map "),e.qZA()}}function W(n,o){if(1&n&&(e.TgZ(0,"div",15),e.TgZ(1,"div",11),e.TgZ(2,"app-icon"),e._uU(3,"menu_book"),e.qZA(),e.qZA(),e.TgZ(4,"div",12),e._uU(5),e.qZA(),e.YNc(6,R,2,0,"button",16),e.qZA()),2&n){const t=e.oxw(2);e.xp6(5),e.hij(" ",t.event.description||"<No Asset>"," "),e.xp6(1),e.Q6J("ngIf",t.event.extension_data.map_id)}}function X(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",18),e.TgZ(1,"button",19),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).confirmDelete()}),e._uU(2),e.qZA(),e.qZA()}if(2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("disabled",t.loading),e.xp6(1),e.hij(" ",t.is_host?"Delete":"Decline"," Event ")}}function K(n,o){if(1&n&&(e.TgZ(0,"div",8),e.TgZ(1,"h2",9),e._uU(2),e.qZA(),e.TgZ(3,"div",10),e.TgZ(4,"div",11),e.TgZ(5,"app-icon"),e._uU(6,"event"),e.qZA(),e.qZA(),e.TgZ(7,"div",12),e._uU(8),e.ALo(9,"date"),e.ALo(10,"date"),e.ALo(11,"date"),e.qZA(),e.qZA(),e.TgZ(12,"div",10),e.TgZ(13,"div",11),e.TgZ(14,"app-icon"),e._uU(15,"schedule"),e.qZA(),e.qZA(),e.TgZ(16,"div",12),e._uU(17),e.qZA(),e.qZA(),e.YNc(18,W,7,2,"div",13),e.YNc(19,X,3,2,"div",14),e.qZA()),2&n){const t=e.oxw();e.xp6(2),e.hij(" ",t.event.title," "),e.xp6(6),e.lnq(" ",e.xi3(9,7,t.event.date,"longDate")," at ",e.xi3(10,10,t.event.date,"shortTime")," ~ ",e.xi3(11,13,t.event.date+60*t.event.duration*1e3,"shortTime")," "),e.xp6(9),e.Oqu(t.duration),e.xp6(1),e.Q6J("ngIf",t.event.asset_id),e.xp6(1),e.Q6J("ngIf",!t.has_ended&&t.is_host)}}function ee(n,o){1&n&&(e.TgZ(0,"div",20),e._UZ(1,"mat-spinner",21),e.TgZ(2,"p"),e._uU(3,"Loading booking data..."),e.qZA(),e.qZA()),2&n&&(e.xp6(1),e.Q6J("diameter",32))}const te=function(){return["/schedule"]};let ne=(()=>{class n extends c.KG{constructor(t,i,s,r){super(),this._route=t,this._router=i,this._dialog=s,this._bookings=r}get is_host(){var t,i;return(null===(t=this.event)||void 0===t?void 0:t.user_email)===(null===(i=(0,c.ar)())||void 0===i?void 0:i.email)}get duration(){var t,i;return(0,q.Z)({hours:Math.floor((null===(t=this.event)||void 0===t?void 0:t.duration)/60),minutes:(null===(i=this.event)||void 0===i?void 0:i.duration)%60})}get has_ended(){return this.event&&(0,C.Z)(new Date,(0,G.Z)(this.event.date,this.event.duration))}ngOnInit(){this.subscription("route.params",this._route.paramMap.subscribe(t=>(0,p.mG)(this,void 0,void 0,function*(){t.has("id")&&(this.event=yield(0,f.Fo)(t.get("id")).toPromise().catch(()=>null))}))),this.timeout("return",()=>this.event?"":this._router.navigate(["/schedule"]),8e3)}viewLocation(){this._dialog.open(U.p,{maxWidth:"95vw",maxHeight:"95vh",data:{item:{id:this.event.asset_id,map_id:this.event.extension_data.map_id,name:this.event.description,zones:this.event.zones}}})}editEvent(){this._bookings.newForm(this.event),this._router.navigate(["/book","desks","form"])}confirmDelete(){return(0,p.mG)(this,void 0,void 0,function*(){const t=yield(0,c._5)({title:(this.is_host?"Delete":"Decline")+" event",content:`Are you sure you wish to ${this.is_host?"delete":"decline"} this event?`,icon:{content:this.is_host?"delete":"event_busy"}},this._dialog);"done"===t.reason&&(t.loading("Removing booking..."),yield(0,f.FP)(this.event.id).toPromise().catch(i=>{throw t.loading(""),(0,c.cB)(`Error removing booking. ${i}`),i}),(0,c.t5)("Successfully removed booking."),this._router.navigate(["/schedule"]),t.close())})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.gz),e.Y36(u.F0),e.Y36(S.uw),e.Y36(f.fy))},n.\u0275cmp=e.Xpm({type:n,selectors:[["schedule-view-booking"]],inputs:{event:"event"},features:[e.qOj],decls:11,vars:4,consts:[["topbar","",1,""],["button","","mat-button","",1,"clear","h-[2.75rem]","text-white",3,"routerLink"],[1,"flex","items-center","justify-center","h-full"],[1,"text-xl"],[1,"ml-2","mx-4"],[1,"flex-1","w-full","flex","flex-col","items-center","bg-gray-200","p-4","overflow-auto"],["class","max-w-full w-[28rem] bg-white border border-gray-300 px-4 pb-4",4,"ngIf","ngIfElse"],["load_state",""],[1,"max-w-full","w-[28rem]","bg-white","border","border-gray-300","px-4","pb-4"],[1,"text-xl","uppercase","font-medium","w-full","my-4"],[1,"flex","items-center","py-2","space-x-2","border-b","border-gray-200","w-full"],[1,"p-2","rounded-full","bg-gray-300","mr-2"],[1,"flex-1","truncate"],["class","flex items-center py-2 space-x-2 w-full",4,"ngIf"],["class","flex items-center justify-center space-x-2 mt-4",4,"ngIf"],[1,"flex","items-center","py-2","space-x-2","w-full"],["mat-button","","locate","","class","bg-transparent border-none underline text-black",3,"click",4,"ngIf"],["mat-button","","locate","",1,"bg-transparent","border-none","underline","text-black",3,"click"],[1,"flex","items-center","justify-center","space-x-2","mt-4"],["mat-button","","remove","",1,"w-32","error","inverse",3,"disabled","click"],[1,"h-full","w-full","flex","flex-col","items-center","justify-center","space-y-2"],[3,"diameter"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"a",1),e.TgZ(2,"div",2),e.TgZ(3,"app-icon",3),e._uU(4,"arrow_back"),e.qZA(),e.TgZ(5,"span",4),e._uU(6,"Back"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"div",5),e.YNc(8,K,20,16,"div",6),e.qZA(),e.YNc(9,ee,4,1,"ng-template",null,7,e.W1O)),2&t){const s=e.MAs(10);e.xp6(1),e.Q6J("routerLink",e.DdM(3,te)),e.xp6(7),e.Q6J("ngIf",i.event)("ngIfElse",s)}},directives:[m.zs,u.yS,g.o,a.O5,m.lW,k.$g],pipes:[a.uU],styles:["[_nghost-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column}[topbar][_ngcontent-%COMP%]{background-color:#00539f}[list][_ngcontent-%COMP%]{transition:height .2s}\n/*# sourceMappingURL=schedule-view-booking.component.ts-angular-inline--83.css.map*/"]}),n})();var _=l(8426),ie=l(9685);function oe(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",20),e.TgZ(1,"span",12),e._uU(2),e.qZA(),e._UZ(3,"span",21),e.TgZ(4,"button",22),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.oxw(2).viewLocation(r)}),e._uU(5," Map "),e.qZA(),e.qZA()}if(2&n){const t=o.$implicit;e.xp6(2),e.AsE(" ",t.display_name||t.name," [",(null==t.level?null:t.level.display_name)||(null==t.level?null:t.level.name),"] "),e.xp6(1),e.ekj("bg-success","accepted"===t.response_status)("bg-pending","tentative"===t.response_status)("bg-error","declined"===t.response_status)}}function se(n,o){if(1&n&&(e.TgZ(0,"div",23),e._UZ(1,"a-user-avatar",24),e.TgZ(2,"span",12),e._uU(3),e.qZA(),e._UZ(4,"span",25),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("user",t),e.xp6(2),e.Oqu(t.name||t.email),e.xp6(1),e.ekj("bg-success","accepted"===t.response_status)("bg-pending","tentative"===t.response_status)("bg-error","declined"===t.response_status)}}function le(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"button",29),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).editEvent()}),e._uU(1," Edit Event "),e.qZA()}if(2&n){const t=e.oxw(3);e.Q6J("disabled",t.loading)}}function re(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",26),e.YNc(1,le,2,1,"button",27),e.TgZ(2,"button",28),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).confirmDelete()}),e._uU(3),e.qZA(),e.qZA()}if(2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.is_host),e.xp6(1),e.Q6J("disabled",t.loading),e.xp6(1),e.hij(" ",t.is_host?"Delete":"Decline"," Event ")}}function ae(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",8),e.TgZ(1,"h2",9),e._uU(2),e.qZA(),e.TgZ(3,"div",10),e.TgZ(4,"div",11),e.TgZ(5,"app-icon"),e._uU(6,"event"),e.qZA(),e.qZA(),e.TgZ(7,"div",12),e._uU(8),e.ALo(9,"date"),e.ALo(10,"date"),e.ALo(11,"date"),e.qZA(),e.qZA(),e.TgZ(12,"div",10),e.TgZ(13,"div",11),e.TgZ(14,"app-icon"),e._uU(15,"schedule"),e.qZA(),e.qZA(),e.TgZ(16,"div",12),e._uU(17),e.qZA(),e.qZA(),e.TgZ(18,"div",13),e.TgZ(19,"div",14),e.TgZ(20,"div",11),e.TgZ(21,"app-icon"),e._uU(22,"place"),e.qZA(),e.qZA(),e.TgZ(23,"div",12),e._uU(24),e.qZA(),e.TgZ(25,"button",15),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return s.show_spaces=!s.show_spaces}),e._uU(26),e.qZA(),e.qZA(),e.TgZ(27,"div",16),e.YNc(28,oe,6,8,"div",17),e.qZA(),e.qZA(),e.TgZ(29,"div",13),e.TgZ(30,"div",14),e.TgZ(31,"div",11),e.TgZ(32,"app-icon"),e._uU(33,"group"),e.qZA(),e.qZA(),e.TgZ(34,"div",12),e._uU(35),e.qZA(),e.TgZ(36,"button",15),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return s.show_people=!s.show_people}),e._uU(37),e.qZA(),e.qZA(),e.TgZ(38,"div",16),e.YNc(39,se,5,8,"div",18),e.qZA(),e.qZA(),e.YNc(40,re,4,3,"div",19),e.qZA()}if(2&n){const t=e.oxw();e.xp6(2),e.hij(" ",t.event.title," "),e.xp6(6),e.lnq(" ",e.xi3(9,18,t.event.date,"longDate")," at ",e.xi3(10,21,t.event.date,"shortTime")," ~ ",e.xi3(11,24,t.event.date+60*t.event.duration*1e3,"shortTime")," "),e.xp6(9),e.Oqu(t.duration),e.xp6(7),e.hij(" ",null==t.event.resources?null:t.event.resources.length," Space(s) "),e.xp6(1),e.Q6J("disabled",!(null!=t.event.resources&&t.event.resources.length)),e.xp6(1),e.hij(" ",t.show_spaces?"Hide":"Show"," "),e.xp6(1),e.Udp("height",t.show_spaces?2.5*(null==t.event.resources?null:t.event.resources.length)+"rem":"0"),e.xp6(1),e.Q6J("ngForOf",t.event.resources),e.xp6(7),e.hij(" ",(null==t.event.attendees?null:t.event.attendees.length)||0," Attendee(s) "),e.xp6(1),e.Q6J("disabled",!(null!=t.event.attendees&&t.event.attendees.length)),e.xp6(1),e.hij(" ",t.show_people?"Hide":"Show"," "),e.xp6(1),e.Udp("height",t.show_people?3*t.event.attendees.length+"rem":"0"),e.xp6(1),e.Q6J("ngForOf",t.event.attendees),e.xp6(1),e.Q6J("ngIf","done"!==t.event.state)}}function ce(n,o){1&n&&(e.TgZ(0,"div",30),e._UZ(1,"mat-spinner",31),e.TgZ(2,"p"),e._uU(3,"Loading event data..."),e.qZA(),e.qZA()),2&n&&(e.xp6(1),e.Q6J("diameter",32))}const de=function(){return["/schedule"]};let ue=(()=>{class n extends c.KG{constructor(t,i,s,r){super(),this._route=t,this._router=i,this._dialog=s,this._events=r}get is_host(){var t;return null===(t=this.event)||void 0===t?void 0:t.host}get duration(){var t,i;return(0,q.Z)({hours:Math.floor((null===(t=this.event)||void 0===t?void 0:t.duration)/60),minutes:(null===(i=this.event)||void 0===i?void 0:i.duration)%60})}ngOnInit(){this.subscription("route.params",this._route.paramMap.subscribe(t=>(0,p.mG)(this,void 0,void 0,function*(){t.has("id")&&(this.event=yield(0,_.Vh)(t.get("id")).toPromise())}))),this.timeout("return",()=>this.event?"":this._router.navigate(["/schedule"]),8e3)}viewLocation(t){this._dialog.open(U.p,{maxWidth:"95vw",maxHeight:"95vh",data:{item:t}})}editEvent(){"event_start"in this.event&&(this._events.newForm(this.event),this._router.navigate(["/book","spaces","form"]))}confirmDelete(){return(0,p.mG)(this,void 0,void 0,function*(){const t=yield(0,c._5)({title:(this.is_host?"Delete":"Decline")+" event",content:`Are you sure you wish to ${this.is_host?"delete":"decline"} this event?`,icon:{content:this.is_host?"delete":"event_busy"}},this._dialog);"done"===t.reason&&(t.loading("Removing event..."),yield(0,_.xC)(this.event.id).toPromise().catch(i=>{throw t.loading(""),(0,c.cB)(`Error removing event. ${i}`),i}),(0,c.t5)("Successfully removed event."),this._router.navigate(["/schedule"]),t.close())})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.gz),e.Y36(u.F0),e.Y36(S.uw),e.Y36(_.MH))},n.\u0275cmp=e.Xpm({type:n,selectors:[["schedule-view-event"]],inputs:{event:"event"},features:[e.qOj],decls:11,vars:4,consts:[["topbar","",1,""],["button","","mat-button","",1,"clear","h-[2.75rem]","text-white",3,"routerLink"],[1,"flex","items-center","justify-center","h-full"],[1,"text-xl"],[1,"ml-2","mx-4"],[1,"flex-1","w-full","flex","flex-col","items-center","bg-gray-200","p-4","overflow-auto"],["class","max-w-full w-[28rem] bg-white border border-gray-300 px-4 pb-4",4,"ngIf","ngIfElse"],["load_state",""],[1,"max-w-full","w-[28rem]","bg-white","border","border-gray-300","px-4","pb-4"],[1,"text-xl","uppercase","font-medium","w-full","my-4"],[1,"flex","items-center","py-2","space-x-2","border-b","border-gray-200","w-full"],[1,"p-2","rounded-full","bg-gray-300","mr-2"],[1,"flex-1","truncate"],[1,"border-b","border-gray-200","w-full"],[1,"flex","items-center","py-2","space-x-2"],["mat-button","",1,"clear","bg-transparent","border-none","underline",3,"disabled","click"],["list","",1,"overflow-hidden"],["class","flex items-center h-10 pl-12",4,"ngFor","ngForOf"],["class","flex items-center h-12 pl-12 pr-2 space-x-2",4,"ngFor","ngForOf"],["class","flex items-center justify-center space-x-2 mt-4",4,"ngIf"],[1,"flex","items-center","h-10","pl-12"],[1,"h-2","w-2","rounded","mr-2"],["mat-button","","locate","",1,"bg-transparent","border-none","underline","text-black",3,"click"],[1,"flex","items-center","h-12","pl-12","pr-2","space-x-2"],[1,"text-sm",3,"user"],[1,"h-2","w-2","rounded","mr-4"],[1,"flex","items-center","justify-center","space-x-2","mt-4"],["mat-button","","edit","","class","w-32",3,"disabled","click",4,"ngIf"],["mat-button","","remove","",1,"w-32","error","inverse",3,"disabled","click"],["mat-button","","edit","",1,"w-32",3,"disabled","click"],[1,"h-full","w-full","flex","flex-col","items-center","justify-center","space-y-2"],[3,"diameter"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"a",1),e.TgZ(2,"div",2),e.TgZ(3,"app-icon",3),e._uU(4,"arrow_back"),e.qZA(),e.TgZ(5,"span",4),e._uU(6,"Back"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"div",5),e.YNc(8,ae,41,27,"div",6),e.qZA(),e.YNc(9,ce,4,1,"ng-template",null,7,e.W1O)),2&t){const s=e.MAs(10);e.xp6(1),e.Q6J("routerLink",e.DdM(3,de)),e.xp6(7),e.Q6J("ngIf",i.event)("ngIfElse",s)}},directives:[m.zs,u.yS,g.o,a.O5,m.lW,a.sg,ie.k,k.$g],pipes:[a.uU],styles:["[_nghost-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column}[topbar][_ngcontent-%COMP%]{background-color:#00539f}[list][_ngcontent-%COMP%]{transition:height .2s}\n/*# sourceMappingURL=schedule-view-event.component.ts-angular-inline--84.css.map*/"]}),n})();var pe=l(4187),me=l(6012);const ve=[{path:"",component:(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["schedule"]],decls:5,vars:0,consts:[[1,"flex-1","flex","sm:flex-row","flex-col-reverse","h-1/2"],[1,"relative","flex","flex-col","flex-1","h-1/2","sm:h-auto","overflow-hidden"]],template:function(t,i){1&t&&(e._UZ(0,"topbar"),e.TgZ(1,"div",0),e.TgZ(2,"main",1),e._UZ(3,"router-outlet"),e.qZA(),e.qZA(),e._UZ(4,"footer-menu"))},directives:[pe.o,u.lC,me.i],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}\n/*# sourceMappingURL=schedule.component.ts-angular-inline--85.css.map*/"]}),n})(),children:[{path:"",component:z},{path:"view/:id/booking",component:ne},{path:"view/:id/event",component:ue}]},{path:"*",redirectTo:""}];let he=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[a.ez,h.u5,M.v,v.Cl,u.Bz.forChild(ve)]]}),n})()}}]);
//# sourceMappingURL=apps_workplace_src_app_schedule_schedule_module_ts.js.map