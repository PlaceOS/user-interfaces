(self.webpackChunkplaceos=self.webpackChunkplaceos||[]).push([[137],{8137:(e,t,i)=>{"use strict";i.r(t),i.d(t,{AppScheduleModule:()=>ve});var n=i(856),s=i(1511),o=i(6073),l=i(6898),r=i(4493),a=i(4762),d=i(5005),c=i(3975),u=i(4941),p=i(3848),h=i(9996),g=i(611),v=i(6839),f=i(7141),m=i(4914),Z=i(205),x=i(8125),_=i(8512),w=i(3080),b=i(3148),A=i(7701),T=i(3982),q=i(7727),y=i(4019),U=i(8303),k=i(2619);let O=(()=>{class e extends d.KG{constructor(){super(...arguments),this._poll=new _.X(0),this._options=new _.X({start:Date.now()}),this._loading=new _.X(""),this._schedule=new _.X([]),this.options=this._options.asObservable(),this.loading=this._loading.asObservable(),this.schedule=this._loading.asObservable(),this.events=(0,w.aj)([this._options,this._poll]).pipe((0,A.b)(1e3),(0,T.zg)(([e])=>{this._loading.next("Loading schedule...");const t={period_start:(0,m.Z)((0,Z.Z)(e.start)),period_end:(0,m.Z)((0,p.Z)((0,x.Z)(e.start),6))};return e.calendar&&(t.calendar=e.calendar),this._schedule.next(this._schedule.getValue().filter(e=>!(0,d.MZ)(1e3*t.period_start,1e3*t.period_end,e.date,e.date+60*e.duration*1e3))),(0,b.D)([(0,f.u$)(Object.assign({},t)),(0,v.F2)(Object.assign(Object.assign({},t),{type:"desk"}))])}),(0,h.U)(([e,t])=>{const i=[...this._schedule.getValue(),...e,...t].sort((e,t)=>e.date-t.date);return console.log("List:",i),this._schedule.next((0,d.Tw)(i,"id")),i}),(0,q.K)(e=>[]),(0,y.b)(e=>this._loading.next("")),(0,U.d)(1))}startPolling(e=15e3){this.interval("poll",()=>this._poll.next(Date.now()),e)}stopPolling(){this.clearInterval("poll")}setOptions(e){this._options.next(Object.assign(Object.assign({},this._options.getValue()),e))}}return e.\u0275fac=function(){let t;return function(i){return(t||(t=k.n5z(e)))(i||e)}}(),e.\u0275prov=k.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var J=i(6283),D=i(4786),M=i(1522),j=i(5980),Q=i(8055),N=i(1548),F=i(6756),I=i(5812),C=i(8774);const L=["schedule-list-item",""];function Y(e,t){if(1&e&&(k.TgZ(0,"div",5),k._uU(1),k.ALo(2,"date"),k.qZA()),2&e){const e=k.oxw(2);k.xp6(1),k.hij(" No events for ",k.xi3(2,1,e.item.date,"longDate")," ")}}function E(e,t){if(1&e&&(k.TgZ(0,"div"),k.TgZ(1,"div",3),k._uU(2),k.ALo(3,"date"),k.qZA(),k.YNc(4,Y,3,4,"div",4),k.qZA()),2&e){const e=k.oxw();k.xp6(2),k.AsE(" ",k.xi3(3,3,e.item.date,"longDate")," (",e.item.duration,") "),k.xp6(2),k.Q6J("ngIf",!e.item.duration)}}const P=function(e){return["/schedule","view",e]};function S(e,t){if(1&e&&(k.TgZ(0,"a",6),k.TgZ(1,"div",7),k.TgZ(2,"div",8),k.TgZ(3,"app-icon",9),k._uU(4),k.qZA(),k.TgZ(5,"div",10),k._uU(6),k.ALo(7,"date"),k.qZA(),k.TgZ(8,"div",11),k._uU(9),k.qZA(),k.qZA(),k.TgZ(10,"div",12),k.TgZ(11,"div",13),k._uU(12),k.qZA(),k.TgZ(13,"div",14),k.TgZ(14,"app-icon",15),k._uU(15,"place"),k.qZA(),k.TgZ(16,"span"),k._uU(17),k.qZA(),k.qZA(),k.qZA(),k.qZA(),k.qZA()),2&e){const e=k.oxw();k.ekj("opacity-50",e.has_ended),k.Q6J("routerLink",k.VKq(17,P,null==e.item?null:e.item.id)),k.xp6(2),k.ekj("bg-success","approved"===e.status)("bg-pending","tentative"===e.status)("bg-error","declined"===e.status),k.xp6(2),k.Oqu(e.icon),k.xp6(2),k.hij(" ",null!=e.item&&e.item.all_day?"All Day":k.xi3(7,14,null==e.item?null:e.item.date,"shortTime")," "),k.xp6(3),k.hij(" (",e.status,") "),k.xp6(3),k.hij(" ",(null==e.item?null:e.item.title)||"Untitled Event"," "),k.xp6(5),k.Oqu(null==e.item?null:e.item.location)}}let z=(()=>{class e{get has_ended(){return!this.item||"date"===this.item.id||(0,C.Z)(new Date,this.item.date+60*this.item.duration*1e3)}get icon(){if("declined"===this.status)return"cancel";if(this.item.asset_id)switch(this.item.booking_type){case"desk":return"view_quilt";case"parking":return"local_parking"}return"event"}get status(){return this.item&&"date"!==this.item.id?this.item.status:"declined"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=k.Xpm({type:e,selectors:[["","schedule-list-item",""]],inputs:{item:"item"},attrs:L,decls:3,vars:2,consts:[[3,"ngSwitch"],[4,"ngSwitchCase"],["mat-button","","class","rounded-none my-1 mx-4 w-[calc(100%-2rem)] h-20 bg-white hover:shadow p-0",3,"opacity-50","routerLink",4,"ngSwitchDefault"],[1,"mx-4","w-full","h-12","text-xl","flex","items-center"],["class","mx-4 w-full h-10 text-lg text-center font-normal opacity-60",4,"ngIf"],[1,"mx-4","w-full","h-10","text-lg","text-center","font-normal","opacity-60"],["mat-button","",1,"rounded-none","my-1","mx-4","w-[calc(100%-2rem)]","h-20","bg-white","hover:shadow","p-0",3,"routerLink"],[1,"flex","items-center","border","border-gray-200"],["status","",1,"h-20","w-20","flex","flex-col","items-center","justify-center","text-white","leading-tight"],[1,"text-2xl"],[1,"font-normal"],[1,"capitalize","text-xs","font-medium"],[1,"flex-1","flex","flex-col","text-left","p-2"],[1,"text-xl","pl-1"],[1,"flex","items-center","font-normal"],[1,"text-lg","mr-1"]],template:function(e,t){1&e&&(k.ynx(0,0),k.YNc(1,E,5,6,"div",1),k.YNc(2,S,18,19,"a",2),k.BQk()),2&e&&(k.Q6J("ngSwitch",null==t.item?null:t.item.id),k.xp6(1),k.Q6J("ngSwitchCase","date"))},directives:[s.RF,s.n9,s.ED,s.O5,j.zs,l.yS,N.o],pipes:[s.uU],encapsulation:2}),e})();var V=i(5994);function $(e,t){1&e&&k._UZ(0,"div",20),2&e&&k.Q6J("item",t.$implicit)}function H(e,t){1&e&&k._UZ(0,"mat-progress-bar",21)}let B=(()=>{class e{constructor(e){this._state=e,this.today=new Date,this.max_date=(0,c.Z)(this.today,4),this.options=this._state.options,this.loading=this._state.loading,this.date=this.options.pipe((0,h.U)(e=>new Date(e.start))),this.event_list=this._state.events.pipe((0,h.U)(e=>{let t=[],i=new Date(this.today);for(;i<this.max_date;){const n=e.filter(e=>(0,u.Z)(i,e.date));t=n.length?[...t,{id:"date",date:i.valueOf(),duration:n.length},...n]:[...t,{id:"date",date:i.valueOf(),duration:0}],i=(0,p.Z)(i,1)}return t}))}get user(){return(0,d.ar)()}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}setDate(e){this._state.setOptions({start:e.valueOf()})}updateDate(e){return(0,a.mG)(this,void 0,void 0,function*(){const t=((yield this.event_list.pipe((0,g.q)(1)).toPromise())||[])[e]||{};t&&this.setDate(t.date)})}scrollTo(e){return(0,a.mG)(this,void 0,void 0,function*(){const t=yield this.event_list.pipe((0,g.q)(1)).toPromise(),i=t.findIndex(t=>"date"===t.id&&(0,u.Z)(t.date,e));if(i>=0&&this._viewport){let e=0;for(let n=0;n<t.length&&n<i;n++)e+=1;this._viewport.scrollTo({top:Math.round(88*e),behavior:"smooth"})}this.setDate(e)})}trackByFn(e,t){return t?`${t.id}|${t.date}`:void 0}}return e.\u0275fac=function(t){return new(t||e)(k.Y36(O))},e.\u0275cmp=k.Xpm({type:e,selectors:[["schedule-list"]],viewQuery:function(e,t){if(1&e&&k.Gf(n.N7,7),2&e){let e;k.iGM(e=k.CRH())&&(t._viewport=e.first)}},decls:34,vars:17,consts:[[1,"w-full","h-16","flex","items-center","justify-between","bg-white","border-b","border-gray-300","shadow","p-2"],["appearance","outline",1,"h-[3.25rem]"],[3,"placeholder"],[1,"flex","items-center","space-x-2"],["mat-button","",1,"clear","underline",3,"matMenuTriggerFor"],["mat-icon-button","",1,"relative"],["dateMenu",""],["matInput","",1,"opacity-0","absolute","inset-0",3,"ngModel","matDatepicker","min","max","ngModelChange"],["matSuffix","",1,"opacity-0","absolute","inset-0",3,"for"],["picker",""],[1,"w-full","flex-1","overflow-hidden","bg-gray-100"],["itemSize","88",1,"h-full","w-full",3,"scrolledIndexChange"],["schedule-list-item","",3,"item",4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTrackBy"],["mode","indeterminate","class","w-full",4,"ngIf"],["xPosition","before"],["legend","matMenu"],[1,"flex","items-center","px-4","py-2","hover:bg-gray-100"],[1,"bg-success","h-2","w-2","rounded-full","mr-4"],[1,"bg-pending","h-2","w-2","rounded-full","mr-4"],[1,"bg-error","h-2","w-2","rounded-full","mr-4"],["schedule-list-item","",3,"item"],["mode","indeterminate",1,"w-full"]],template:function(e,t){if(1&e&&(k.TgZ(0,"div",0),k.TgZ(1,"mat-form-field",1),k.TgZ(2,"mat-select",2),k.TgZ(3,"mat-option"),k._uU(4),k.qZA(),k.qZA(),k.qZA(),k.TgZ(5,"div",3),k.TgZ(6,"button",4),k._uU(7," Legend "),k.qZA(),k.TgZ(8,"button",5,6),k.TgZ(10,"app-icon"),k._uU(11,"event"),k.qZA(),k.TgZ(12,"input",7),k.NdJ("ngModelChange",function(e){return t.scrollTo(e)}),k.ALo(13,"async"),k.qZA(),k._UZ(14,"mat-datepicker-toggle",8),k.qZA(),k._UZ(15,"mat-datepicker",null,9),k.qZA(),k.qZA(),k.TgZ(17,"div",10),k.TgZ(18,"cdk-virtual-scroll-viewport",11),k.NdJ("scrolledIndexChange",function(e){return t.updateDate(e)}),k.YNc(19,$,1,1,"div",12),k.ALo(20,"async"),k.qZA(),k.qZA(),k.YNc(21,H,1,0,"mat-progress-bar",13),k.ALo(22,"async"),k.TgZ(23,"mat-menu",14,15),k.TgZ(25,"div",16),k._UZ(26,"div",17),k._uU(27," Approved "),k.qZA(),k.TgZ(28,"div",16),k._UZ(29,"div",18),k._uU(30," Tentative "),k.qZA(),k.TgZ(31,"div",16),k._UZ(32,"div",19),k._uU(33," Declined "),k.qZA(),k.qZA()),2&e){const e=k.MAs(16),i=k.MAs(24);k.xp6(2),k.Q6J("placeholder",null==t.user?null:t.user.name),k.xp6(2),k.Oqu(null==t.user?null:t.user.name),k.xp6(2),k.Q6J("matMenuTriggerFor",i),k.xp6(6),k.Q6J("ngModel",k.lcZ(13,11,t.date))("matDatepicker",e)("min",t.today)("max",t.max_date),k.xp6(2),k.Q6J("for",e),k.xp6(5),k.Q6J("cdkVirtualForOf",k.lcZ(20,13,t.event_list))("cdkVirtualForTrackBy",t.trackByFn),k.xp6(2),k.Q6J("ngIf",k.lcZ(22,15,t.loading))}},directives:[J.KE,D.gD,M.ey,j.lW,Q.p6,N.o,F.Nt,o.Fj,I.hl,o.JJ,o.On,I.nW,J.R9,I.Mq,n.N7,n.xd,n.x0,s.O5,Q.VK,z,V.pW],pipes:[s.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}"]}),e})();var G=i(8276),X=i(804),K=i(8282),W=i(4608),R=i(5969),ee=i(7806);function te(e,t){if(1&e&&(k.TgZ(0,"div",10),k.TgZ(1,"div",11),k.TgZ(2,"app-icon"),k._uU(3,"menu_book"),k.qZA(),k.qZA(),k.TgZ(4,"div",12),k._uU(5),k.qZA(),k.qZA()),2&e){const e=k.oxw(2);k.xp6(5),k.hij(" ",e.event.asset_id||"<No Asset>"," ")}}function ie(e,t){if(1&e){const e=k.EpF();k.TgZ(0,"div",21),k.TgZ(1,"span",12),k._uU(2),k.qZA(),k._UZ(3,"span",22),k.TgZ(4,"button",23),k.NdJ("click",function(){const t=k.CHM(e).$implicit;return k.oxw(3).viewLocation(t)}),k._uU(5," Map "),k.qZA(),k.qZA()}if(2&e){const e=t.$implicit;k.xp6(2),k.AsE(" ",e.display_name||e.name," [",(null==e.level?null:e.level.display_name)||(null==e.level?null:e.level.name),"] "),k.xp6(1),k.ekj("bg-success","accepted"===e.response_status)("bg-pending","tentative"===e.response_status)("bg-error","declined"===e.response_status)}}function ne(e,t){if(1&e){const e=k.EpF();k.TgZ(0,"div",16),k.TgZ(1,"div",17),k.TgZ(2,"div",11),k.TgZ(3,"app-icon"),k._uU(4,"place"),k.qZA(),k.qZA(),k.TgZ(5,"div",12),k._uU(6),k.qZA(),k.TgZ(7,"button",18),k.NdJ("click",function(){k.CHM(e);const t=k.oxw(2);return t.show_spaces=!t.show_spaces}),k._uU(8),k.qZA(),k.qZA(),k.TgZ(9,"div",19),k.YNc(10,ie,6,8,"div",20),k.qZA(),k.qZA()}if(2&e){const e=k.oxw(2);k.xp6(6),k.hij(" ",null==e.event.resources?null:e.event.resources.length," Space(s) "),k.xp6(1),k.Q6J("disabled",!(null!=e.event.resources&&e.event.resources.length)),k.xp6(1),k.hij(" ",e.show_spaces?"Hide":"Show"," "),k.xp6(1),k.Udp("height",e.show_spaces?2.5*(null==e.event.resources?null:e.event.resources.length)+"rem":"0"),k.xp6(1),k.Q6J("ngForOf",e.event.resources)}}function se(e,t){if(1&e&&(k.TgZ(0,"div",25),k._UZ(1,"a-user-avatar",26),k.TgZ(2,"span",12),k._uU(3),k.qZA(),k._UZ(4,"span",27),k.qZA()),2&e){const e=t.$implicit;k.xp6(1),k.Q6J("user",e),k.xp6(2),k.Oqu(e.name||e.email),k.xp6(1),k.ekj("bg-success","accepted"===e.response_status)("bg-pending","tentative"===e.response_status)("bg-error","declined"===e.response_status)}}function oe(e,t){if(1&e){const e=k.EpF();k.TgZ(0,"div",16),k.TgZ(1,"div",17),k.TgZ(2,"div",11),k.TgZ(3,"app-icon"),k._uU(4,"group"),k.qZA(),k.qZA(),k.TgZ(5,"div",12),k._uU(6),k.qZA(),k.TgZ(7,"button",18),k.NdJ("click",function(){k.CHM(e);const t=k.oxw(2);return t.show_people=!t.show_people}),k._uU(8),k.qZA(),k.qZA(),k.TgZ(9,"div",19),k.YNc(10,se,5,8,"div",24),k.qZA(),k.qZA()}if(2&e){const e=k.oxw(2);k.xp6(6),k.hij(" ",(null==e.event.attendees?null:e.event.attendees.length)||0," Attendee(s) "),k.xp6(1),k.Q6J("disabled",!(null!=e.event.attendees&&e.event.attendees.length)),k.xp6(1),k.hij(" ",e.show_people?"Hide":"Show"," "),k.xp6(1),k.Udp("height",e.show_people?3*e.event.attendees.length+"rem":"0"),k.xp6(1),k.Q6J("ngForOf",e.event.attendees)}}function le(e,t){if(1&e){const e=k.EpF();k.TgZ(0,"button",31),k.NdJ("click",function(){return k.CHM(e),k.oxw(3).editEvent()}),k._uU(1," Edit Event "),k.qZA()}if(2&e){const e=k.oxw(3);k.Q6J("disabled",e.loading)}}function re(e,t){if(1&e){const e=k.EpF();k.TgZ(0,"div",28),k.YNc(1,le,2,1,"button",29),k.TgZ(2,"button",30),k.NdJ("click",function(){return k.CHM(e),k.oxw(2).confirmDelete()}),k._uU(3),k.qZA(),k.qZA()}if(2&e){const e=k.oxw(2);k.xp6(1),k.Q6J("ngIf",e.is_host),k.xp6(1),k.Q6J("disabled",e.loading),k.xp6(1),k.hij(" ",e.is_host?"Delete":"Decline"," Event ")}}function ae(e,t){if(1&e&&(k.TgZ(0,"div",8),k.TgZ(1,"h2",9),k._uU(2),k.qZA(),k.TgZ(3,"div",10),k.TgZ(4,"div",11),k.TgZ(5,"app-icon"),k._uU(6,"event"),k.qZA(),k.qZA(),k.TgZ(7,"div",12),k._uU(8),k.ALo(9,"date"),k.ALo(10,"date"),k.ALo(11,"date"),k.qZA(),k.qZA(),k.TgZ(12,"div",10),k.TgZ(13,"div",11),k.TgZ(14,"app-icon"),k._uU(15,"schedule"),k.qZA(),k.qZA(),k.TgZ(16,"div",12),k._uU(17),k.qZA(),k.qZA(),k.YNc(18,te,6,1,"div",13),k.YNc(19,ne,11,6,"div",14),k.YNc(20,oe,11,6,"div",14),k.YNc(21,re,4,3,"div",15),k.qZA()),2&e){const e=k.oxw();k.xp6(2),k.hij(" ",e.event.title," "),k.xp6(6),k.lnq(" ",k.xi3(9,9,e.event.date,"longDate")," at ",k.xi3(10,12,e.event.date,"shortTime")," ~ ",k.xi3(11,15,e.event.date+60*e.event.duration*1e3,"shortTime")," "),k.xp6(9),k.Oqu(e.duration),k.xp6(1),k.Q6J("ngIf",e.event.asset_id),k.xp6(1),k.Q6J("ngIf",!e.event.asset_id),k.xp6(1),k.Q6J("ngIf",!e.event.asset_id),k.xp6(1),k.Q6J("ngIf",!e.has_ended)}}function de(e,t){1&e&&(k.TgZ(0,"div",32),k._UZ(1,"mat-spinner",33),k.TgZ(2,"p"),k._uU(3,"Loading event data..."),k.qZA(),k.qZA()),2&e&&(k.xp6(1),k.Q6J("diameter",32))}const ce=function(){return["/schedule"]};let ue=(()=>{class e extends d.KG{constructor(e,t,i,n){super(),this._route=e,this._router=t,this._dialog=i,this._events=n}get is_host(){var e;return this.event&&(this.event.host||this.event.user_email)===(null===(e=(0,d.ar)())||void 0===e?void 0:e.email)}get duration(){var e,t;return(0,G.Z)({hours:Math.floor((null===(e=this.event)||void 0===e?void 0:e.duration)/60),minutes:(null===(t=this.event)||void 0===t?void 0:t.duration)%60})}get has_ended(){return this.event&&(0,C.Z)(new Date,(0,X.Z)(this.event.date,this.event.duration))}ngOnInit(){this.subscription("route.params",this._route.paramMap.subscribe(e=>(0,a.mG)(this,void 0,void 0,function*(){if(e.has("id"))try{this.event=yield(0,f.Vh)(e.get("id")).toPromise()}catch(t){this.event=yield(0,v.Fo)(e.get("id")).toPromise().catch(()=>null)}}))),this.timeout("return",()=>this.event?"":this._router.navigate(["/schedule"]),8e3)}viewLocation(e){this._dialog.open(K.p,{width:"32em",maxWidth:"95vw",maxHeight:"95vh",data:{item:e}})}editEvent(){"event_start"in this.event&&(this._events.newForm(this.event),this._router.navigate(["/book","spaces","form"]))}confirmDelete(){return(0,a.mG)(this,void 0,void 0,function*(){const e=yield(0,d._5)({title:(this.is_host?"Delete":"Decline")+" event",content:`Are you sure you wish to ${this.is_host?"delete":"decline"} this event?`,icon:{content:this.is_host?"delete":"event_busy"}},this._dialog);if("done"!==e.reason)return;e.loading("Removing event...");const t=this.event instanceof v.$N?v.pv:f.xC;yield t(this.event.id).toPromise().catch(t=>{throw e.loading(""),(0,d.cB)(`Error removing event. ${t}`),t}),(0,d.t5)("Successfully removed event."),this._router.navigate(["/schedule"]),e.close()})}}return e.\u0275fac=function(t){return new(t||e)(k.Y36(l.gz),k.Y36(l.F0),k.Y36(W.uw),k.Y36(f.MH))},e.\u0275cmp=k.Xpm({type:e,selectors:[["schedule-view"]],features:[k.qOj],decls:11,vars:4,consts:[["topbar","",1,""],["button","","mat-button","",1,"clear","h-[2.75rem]","text-white",3,"routerLink"],[1,"flex","items-center","justify-center","h-full"],[1,"text-xl"],[1,"ml-2","mx-4"],[1,"flex-1","w-full","flex","flex-col","items-center","bg-gray-200","p-4","overflow-auto"],["class","max-w-full w-[28rem] bg-white border border-gray-300 px-4 pb-4",4,"ngIf","ngIfElse"],["load_state",""],[1,"max-w-full","w-[28rem]","bg-white","border","border-gray-300","px-4","pb-4"],[1,"text-xl","uppercase","font-medium","w-full","my-4"],[1,"flex","items-center","py-2","space-x-2","border-b","border-gray-200","w-full"],[1,"p-2","rounded-full","bg-gray-300","mr-2"],[1,"flex-1","truncate"],["class","flex items-center py-2 space-x-2 border-b border-gray-200 w-full",4,"ngIf"],["class","border-b border-gray-200 w-full",4,"ngIf"],["class","flex items-center justify-center space-x-2 mt-4",4,"ngIf"],[1,"border-b","border-gray-200","w-full"],[1,"flex","items-center","py-2","space-x-2"],["mat-button","",1,"clear","bg-transparent","border-none","underline",3,"disabled","click"],["list","",1,"overflow-hidden"],["class","flex items-center h-10 pl-12",4,"ngFor","ngForOf"],[1,"flex","items-center","h-10","pl-12"],[1,"h-2","w-2","rounded","mr-2"],["mat-button","","locate","",1,"bg-transparent","border-none","underline","text-black",3,"click"],["class","flex items-center h-12 pl-12 pr-2 space-x-2",4,"ngFor","ngForOf"],[1,"flex","items-center","h-12","pl-12","pr-2","space-x-2"],[1,"text-sm",3,"user"],[1,"h-2","w-2","rounded","mr-4"],[1,"flex","items-center","justify-center","space-x-2","mt-4"],["mat-button","","edit","","class","w-32",3,"disabled","click",4,"ngIf"],["mat-button","","remove","",1,"w-32","error","inverse",3,"disabled","click"],["mat-button","","edit","",1,"w-32",3,"disabled","click"],[1,"h-full","w-full","flex","flex-col","items-center","justify-center","space-y-2"],[3,"diameter"]],template:function(e,t){if(1&e&&(k.TgZ(0,"div",0),k.TgZ(1,"a",1),k.TgZ(2,"div",2),k.TgZ(3,"app-icon",3),k._uU(4,"arrow_back"),k.qZA(),k.TgZ(5,"span",4),k._uU(6,"Back"),k.qZA(),k.qZA(),k.qZA(),k.qZA(),k.TgZ(7,"div",5),k.YNc(8,ae,22,18,"div",6),k.qZA(),k.YNc(9,de,4,1,"ng-template",null,7,k.W1O)),2&e){const e=k.MAs(10);k.xp6(1),k.Q6J("routerLink",k.DdM(3,ce)),k.xp6(7),k.Q6J("ngIf",t.event)("ngIfElse",e)}},directives:[j.zs,l.yS,N.o,s.O5,j.lW,s.sg,R.k,ee.$g],pipes:[s.uU],styles:["[_nghost-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column}[topbar][_ngcontent-%COMP%]{background-color:#00539f}[list][_ngcontent-%COMP%]{transition:height .2s}"]}),e})();var pe=i(4892),he=i(2142);const ge=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=k.Xpm({type:e,selectors:[["schedule"]],decls:5,vars:0,consts:[[1,"flex-1","flex","sm:flex-row","flex-col-reverse","h-1/2"],[1,"relative","z-10"],[1,"relative","flex","flex-col","flex-1","h-1/2","sm:h-auto","overflow-hidden"]],template:function(e,t){1&e&&(k._UZ(0,"topbar"),k.TgZ(1,"div",0),k._UZ(2,"nav-menu",1),k.TgZ(3,"main",2),k._UZ(4,"router-outlet"),k.qZA(),k.qZA())},directives:[pe.o,he.D,l.lC],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}"]}),e})(),children:[{path:"",component:B},{path:"view/:id",component:ue}]},{path:"*",redirectTo:""}];let ve=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=k.oAB({type:e}),e.\u0275inj=k.cJS({imports:[[s.ez,o.u5,r.v,n.Cl,l.Bz.forChild(ge)]]}),e})()}}]);