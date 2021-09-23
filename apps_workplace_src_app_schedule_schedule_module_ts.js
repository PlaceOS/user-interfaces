(self.webpackChunkplaceos=self.webpackChunkplaceos||[]).push([["apps_workplace_src_app_schedule_schedule_module_ts"],{8137:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AppScheduleModule:()=>fe});var i=n(856),s=n(1511),o=n(6073),l=n(6898),r=n(1781),a=n(4762),d=n(9962),c=n(3975),u=n(4941),p=n(3848),h=n(9996),g=n(611),v=n(2619),f=n(1663),m=n(4266),Z=n(4914),x=n(205),_=n(8125),w=n(8512),b=n(3080),A=n(3148),T=n(7701),q=n(3982),y=n(7727),U=n(4019),k=n(8303);let O=(()=>{class e extends d.KG{constructor(){super(...arguments),this._poll=new w.X(0),this._options=new w.X({start:Date.now()}),this._loading=new w.X(""),this._schedule=new w.X([]),this.options=this._options.asObservable(),this.loading=this._loading.asObservable(),this.schedule=this._loading.asObservable(),this.events=(0,b.aj)([this._options,this._poll]).pipe((0,T.b)(1e3),(0,q.zg)(([e])=>{this._loading.next("Loading schedule...");const t={period_start:(0,Z.Z)((0,x.Z)(e.start)),period_end:(0,Z.Z)((0,p.Z)((0,_.Z)(e.start),6))};return e.calendar&&(t.calendar=e.calendar),this._schedule.next(this._schedule.getValue().filter(e=>!(0,d.MZ)(1e3*t.period_start,1e3*t.period_end,e.date,e.date+60*e.duration*1e3))),(0,A.D)([(0,m.u$)(Object.assign({},t)),(0,f.F2)(Object.assign(Object.assign({},t),{type:"desk"}))])}),(0,h.U)(([e,t])=>{const n=[...this._schedule.getValue(),...e,...t].sort((e,t)=>e.date-t.date);return this._schedule.next((0,d.Tw)(n,"id")),n}),(0,y.K)(e=>[]),(0,U.b)(e=>this._loading.next("")),(0,k.d)(1))}startPolling(e=15e3){this.interval("poll",()=>this._poll.next(Date.now()),e)}stopPolling(){this.clearInterval("poll")}setOptions(e){this._options.next(Object.assign(Object.assign({},this._options.getValue()),e))}}return e.\u0275fac=function(){let t;return function(n){return(t||(t=v.n5z(e)))(n||e)}}(),e.\u0275prov=v.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var J=n(6283),D=n(4786),M=n(1522),j=n(5980),Q=n(8055),N=n(1548),I=n(6756),F=n(5812),C=n(8774);const Y=["schedule-list-item",""];function L(e,t){if(1&e&&(v.TgZ(0,"div",5),v._uU(1),v.ALo(2,"date"),v.qZA()),2&e){const e=v.oxw(2);v.xp6(1),v.hij(" No events for ",v.xi3(2,1,e.item.date,"longDate")," ")}}function E(e,t){if(1&e&&(v.TgZ(0,"div"),v.TgZ(1,"div",3),v._uU(2),v.ALo(3,"date"),v.qZA(),v.YNc(4,L,3,4,"div",4),v.qZA()),2&e){const e=v.oxw();v.xp6(2),v.AsE(" ",v.xi3(3,3,e.item.date,"longDate")," (",e.item.duration,") "),v.xp6(2),v.Q6J("ngIf",!e.item.duration)}}const P=function(e){return["/schedule","view",e]};function S(e,t){if(1&e&&(v.TgZ(0,"a",6),v.TgZ(1,"div",7),v.TgZ(2,"div",8),v.TgZ(3,"app-icon",9),v._uU(4),v.qZA(),v.TgZ(5,"div",10),v._uU(6),v.ALo(7,"date"),v.qZA(),v.TgZ(8,"div",11),v._uU(9),v.qZA(),v.qZA(),v.TgZ(10,"div",12),v.TgZ(11,"div",13),v._uU(12),v.qZA(),v.TgZ(13,"div",14),v.TgZ(14,"app-icon",15),v._uU(15,"place"),v.qZA(),v.TgZ(16,"span"),v._uU(17),v.ALo(18,"slice"),v.qZA(),v.qZA(),v.qZA(),v.qZA(),v.qZA()),2&e){const e=v.oxw();v.ekj("opacity-50",e.has_ended),v.Q6J("routerLink",v.VKq(21,P,null==e.item?null:e.item.id)),v.xp6(2),v.ekj("bg-success","approved"===e.status)("bg-pending","tentative"===e.status)("bg-error","declined"===e.status),v.xp6(2),v.Oqu(e.icon),v.xp6(2),v.hij(" ",null!=e.item&&e.item.all_day?"All Day":v.xi3(7,14,null==e.item?null:e.item.date,"shortTime")," "),v.xp6(3),v.hij(" (",e.status,") "),v.xp6(3),v.hij(" ",(null==e.item?null:e.item.title)||"Untitled Event"," "),v.xp6(5),v.Oqu(v.Dn7(18,17,(null==e.item?null:e.item.location)||(null==e.item?null:e.item.description),0,255))}}let z=(()=>{class e{get has_ended(){return!this.item||"date"===this.item.id||(0,C.Z)(new Date,this.item.date+60*this.item.duration*1e3)}get icon(){if("declined"===this.status)return"cancel";if(this.item.asset_id)switch(this.item.booking_type){case"desk":return"view_quilt";case"parking":return"local_parking"}return"event"}get status(){return this.item&&"date"!==this.item.id?this.item.status:"declined"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=v.Xpm({type:e,selectors:[["","schedule-list-item",""]],inputs:{item:"item"},attrs:Y,decls:3,vars:2,consts:[[3,"ngSwitch"],[4,"ngSwitchCase"],["mat-button","","class","rounded-none my-1 mx-4 w-[calc(100%-2rem)] h-20 bg-white hover:shadow p-0",3,"opacity-50","routerLink",4,"ngSwitchDefault"],[1,"mx-4","w-full","h-12","text-xl","flex","items-center"],["class","mx-4 w-full h-10 text-lg text-center font-normal opacity-60",4,"ngIf"],[1,"mx-4","w-full","h-10","text-lg","text-center","font-normal","opacity-60"],["mat-button","",1,"rounded-none","my-1","mx-4","w-[calc(100%-2rem)]","h-20","bg-white","hover:shadow","p-0",3,"routerLink"],[1,"flex","items-center","border","border-gray-200"],["status","",1,"h-20","w-20","flex","flex-col","items-center","justify-center","text-white","leading-tight"],[1,"text-2xl"],[1,"font-normal"],[1,"capitalize","text-xs","font-medium"],[1,"flex-1","flex","flex-col","text-left","p-2"],[1,"text-xl","pl-1"],[1,"flex","items-center","font-normal"],[1,"text-lg","mr-1"]],template:function(e,t){1&e&&(v.ynx(0,0),v.YNc(1,E,5,6,"div",1),v.YNc(2,S,19,23,"a",2),v.BQk()),2&e&&(v.Q6J("ngSwitch",null==t.item?null:t.item.id),v.xp6(1),v.Q6J("ngSwitchCase","date"))},directives:[s.RF,s.n9,s.ED,s.O5,j.zs,l.yS,N.o],pipes:[s.uU,s.OU],encapsulation:2}),e})();var V=n(5994);function $(e,t){1&e&&v._UZ(0,"div",20),2&e&&v.Q6J("item",t.$implicit)}function H(e,t){1&e&&v._UZ(0,"mat-progress-bar",21)}let B=(()=>{class e{constructor(e){this._state=e,this.today=new Date,this.max_date=(0,c.Z)(this.today,4),this.options=this._state.options,this.loading=this._state.loading,this.date=this.options.pipe((0,h.U)(e=>new Date(e.start))),this.event_list=this._state.events.pipe((0,h.U)(e=>{let t=[],n=new Date(this.today);for(;n<this.max_date;){const i=e.filter(e=>(0,u.Z)(n,e.date));t=i.length?[...t,{id:"date",date:n.valueOf(),duration:i.length},...i]:[...t,{id:"date",date:n.valueOf(),duration:0}],n=(0,p.Z)(n,1)}return t}))}get user(){return(0,d.ar)()}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}setDate(e){this._state.setOptions({start:e.valueOf()})}updateDate(e){return(0,a.mG)(this,void 0,void 0,function*(){const t=((yield this.event_list.pipe((0,g.q)(1)).toPromise())||[])[e]||{};t&&this.setDate(t.date)})}scrollTo(e){return(0,a.mG)(this,void 0,void 0,function*(){const t=yield this.event_list.pipe((0,g.q)(1)).toPromise(),n=t.findIndex(t=>"date"===t.id&&(0,u.Z)(t.date,e));if(n>=0&&this._viewport){let e=0;for(let i=0;i<t.length&&i<n;i++)e+=1;this._viewport.scrollTo({top:Math.round(88*e),behavior:"smooth"})}this.setDate(e)})}trackByFn(e,t){return t?`${t.id}|${t.date}`:void 0}}return e.\u0275fac=function(t){return new(t||e)(v.Y36(O))},e.\u0275cmp=v.Xpm({type:e,selectors:[["schedule-list"]],viewQuery:function(e,t){if(1&e&&v.Gf(i.N7,7),2&e){let e;v.iGM(e=v.CRH())&&(t._viewport=e.first)}},decls:34,vars:17,consts:[[1,"w-full","h-16","flex","items-center","justify-between","bg-white","border-b","border-gray-300","shadow","p-2"],["appearance","outline",1,"h-[3.25rem]"],[3,"placeholder"],[1,"flex","items-center","space-x-2"],["mat-button","",1,"clear","underline",3,"matMenuTriggerFor"],["mat-icon-button","",1,"relative"],["dateMenu",""],["matInput","",1,"opacity-0","absolute","inset-0",3,"ngModel","matDatepicker","min","max","ngModelChange"],["matSuffix","",1,"opacity-0","absolute","inset-0",3,"for"],["picker",""],[1,"w-full","flex-1","overflow-hidden","bg-gray-100"],["itemSize","88",1,"h-full","w-full",3,"scrolledIndexChange"],["schedule-list-item","",3,"item",4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTrackBy"],["mode","indeterminate","class","w-full",4,"ngIf"],["xPosition","before"],["legend","matMenu"],[1,"flex","items-center","px-4","py-2","hover:bg-gray-100"],[1,"bg-success","h-2","w-2","rounded-full","mr-4"],[1,"bg-pending","h-2","w-2","rounded-full","mr-4"],[1,"bg-error","h-2","w-2","rounded-full","mr-4"],["schedule-list-item","",3,"item"],["mode","indeterminate",1,"w-full"]],template:function(e,t){if(1&e&&(v.TgZ(0,"div",0),v.TgZ(1,"mat-form-field",1),v.TgZ(2,"mat-select",2),v.TgZ(3,"mat-option"),v._uU(4),v.qZA(),v.qZA(),v.qZA(),v.TgZ(5,"div",3),v.TgZ(6,"button",4),v._uU(7," Legend "),v.qZA(),v.TgZ(8,"button",5,6),v.TgZ(10,"app-icon"),v._uU(11,"event"),v.qZA(),v.TgZ(12,"input",7),v.NdJ("ngModelChange",function(e){return t.scrollTo(e)}),v.ALo(13,"async"),v.qZA(),v._UZ(14,"mat-datepicker-toggle",8),v.qZA(),v._UZ(15,"mat-datepicker",null,9),v.qZA(),v.qZA(),v.TgZ(17,"div",10),v.TgZ(18,"cdk-virtual-scroll-viewport",11),v.NdJ("scrolledIndexChange",function(e){return t.updateDate(e)}),v.YNc(19,$,1,1,"div",12),v.ALo(20,"async"),v.qZA(),v.qZA(),v.YNc(21,H,1,0,"mat-progress-bar",13),v.ALo(22,"async"),v.TgZ(23,"mat-menu",14,15),v.TgZ(25,"div",16),v._UZ(26,"div",17),v._uU(27," Approved "),v.qZA(),v.TgZ(28,"div",16),v._UZ(29,"div",18),v._uU(30," Tentative "),v.qZA(),v.TgZ(31,"div",16),v._UZ(32,"div",19),v._uU(33," Declined "),v.qZA(),v.qZA()),2&e){const e=v.MAs(16),n=v.MAs(24);v.xp6(2),v.Q6J("placeholder",null==t.user?null:t.user.name),v.xp6(2),v.Oqu(null==t.user?null:t.user.name),v.xp6(2),v.Q6J("matMenuTriggerFor",n),v.xp6(6),v.Q6J("ngModel",v.lcZ(13,11,t.date))("matDatepicker",e)("min",t.today)("max",t.max_date),v.xp6(2),v.Q6J("for",e),v.xp6(5),v.Q6J("cdkVirtualForOf",v.lcZ(20,13,t.event_list))("cdkVirtualForTrackBy",t.trackByFn),v.xp6(2),v.Q6J("ngIf",v.lcZ(22,15,t.loading))}},directives:[J.KE,D.gD,M.ey,j.lW,Q.p6,N.o,I.Nt,o.Fj,F.hl,o.JJ,o.On,F.nW,J.R9,F.Mq,i.N7,i.xd,i.x0,s.O5,Q.VK,z,V.pW],pipes:[s.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}"]}),e})();var G=n(8276),X=n(804),K=n(8282),W=n(4608),R=n(5969),ee=n(7806);function te(e,t){if(1&e&&(v.TgZ(0,"div",10),v.TgZ(1,"div",11),v.TgZ(2,"app-icon"),v._uU(3,"menu_book"),v.qZA(),v.qZA(),v.TgZ(4,"div",12),v._uU(5),v.qZA(),v.qZA()),2&e){const e=v.oxw(2);v.xp6(5),v.hij(" ",e.event.description||"<No Asset>"," ")}}function ne(e,t){if(1&e){const e=v.EpF();v.TgZ(0,"div",21),v.TgZ(1,"span",12),v._uU(2),v.qZA(),v._UZ(3,"span",22),v.TgZ(4,"button",23),v.NdJ("click",function(){const t=v.CHM(e).$implicit;return v.oxw(3).viewLocation(t)}),v._uU(5," Map "),v.qZA(),v.qZA()}if(2&e){const e=t.$implicit;v.xp6(2),v.AsE(" ",e.display_name||e.name," [",(null==e.level?null:e.level.display_name)||(null==e.level?null:e.level.name),"] "),v.xp6(1),v.ekj("bg-success","accepted"===e.response_status)("bg-pending","tentative"===e.response_status)("bg-error","declined"===e.response_status)}}function ie(e,t){if(1&e){const e=v.EpF();v.TgZ(0,"div",16),v.TgZ(1,"div",17),v.TgZ(2,"div",11),v.TgZ(3,"app-icon"),v._uU(4,"place"),v.qZA(),v.qZA(),v.TgZ(5,"div",12),v._uU(6),v.qZA(),v.TgZ(7,"button",18),v.NdJ("click",function(){v.CHM(e);const t=v.oxw(2);return t.show_spaces=!t.show_spaces}),v._uU(8),v.qZA(),v.qZA(),v.TgZ(9,"div",19),v.YNc(10,ne,6,8,"div",20),v.qZA(),v.qZA()}if(2&e){const e=v.oxw(2);v.xp6(6),v.hij(" ",null==e.event.resources?null:e.event.resources.length," Space(s) "),v.xp6(1),v.Q6J("disabled",!(null!=e.event.resources&&e.event.resources.length)),v.xp6(1),v.hij(" ",e.show_spaces?"Hide":"Show"," "),v.xp6(1),v.Udp("height",e.show_spaces?2.5*(null==e.event.resources?null:e.event.resources.length)+"rem":"0"),v.xp6(1),v.Q6J("ngForOf",e.event.resources)}}function se(e,t){if(1&e&&(v.TgZ(0,"div",25),v._UZ(1,"a-user-avatar",26),v.TgZ(2,"span",12),v._uU(3),v.qZA(),v._UZ(4,"span",27),v.qZA()),2&e){const e=t.$implicit;v.xp6(1),v.Q6J("user",e),v.xp6(2),v.Oqu(e.name||e.email),v.xp6(1),v.ekj("bg-success","accepted"===e.response_status)("bg-pending","tentative"===e.response_status)("bg-error","declined"===e.response_status)}}function oe(e,t){if(1&e){const e=v.EpF();v.TgZ(0,"div",16),v.TgZ(1,"div",17),v.TgZ(2,"div",11),v.TgZ(3,"app-icon"),v._uU(4,"group"),v.qZA(),v.qZA(),v.TgZ(5,"div",12),v._uU(6),v.qZA(),v.TgZ(7,"button",18),v.NdJ("click",function(){v.CHM(e);const t=v.oxw(2);return t.show_people=!t.show_people}),v._uU(8),v.qZA(),v.qZA(),v.TgZ(9,"div",19),v.YNc(10,se,5,8,"div",24),v.qZA(),v.qZA()}if(2&e){const e=v.oxw(2);v.xp6(6),v.hij(" ",(null==e.event.attendees?null:e.event.attendees.length)||0," Attendee(s) "),v.xp6(1),v.Q6J("disabled",!(null!=e.event.attendees&&e.event.attendees.length)),v.xp6(1),v.hij(" ",e.show_people?"Hide":"Show"," "),v.xp6(1),v.Udp("height",e.show_people?3*e.event.attendees.length+"rem":"0"),v.xp6(1),v.Q6J("ngForOf",e.event.attendees)}}function le(e,t){if(1&e){const e=v.EpF();v.TgZ(0,"button",31),v.NdJ("click",function(){return v.CHM(e),v.oxw(3).editEvent()}),v._uU(1," Edit Event "),v.qZA()}if(2&e){const e=v.oxw(3);v.Q6J("disabled",e.loading)}}function re(e,t){if(1&e){const e=v.EpF();v.TgZ(0,"button",32),v.NdJ("click",function(){return v.CHM(e),v.oxw(3).confirmDelete()}),v._uU(1),v.qZA()}if(2&e){const e=v.oxw(3);v.Q6J("disabled",e.loading),v.xp6(1),v.hij(" ",e.is_host?"Delete":"Decline"," Event ")}}function ae(e,t){if(1&e&&(v.TgZ(0,"div",28),v.YNc(1,le,2,1,"button",29),v.YNc(2,re,2,2,"button",30),v.qZA()),2&e){const e=v.oxw(2);v.xp6(1),v.Q6J("ngIf",e.is_host&&!e.event.asset_id),v.xp6(1),v.Q6J("ngIf",e.is_host)}}function de(e,t){if(1&e&&(v.TgZ(0,"div",8),v.TgZ(1,"h2",9),v._uU(2),v.qZA(),v.TgZ(3,"div",10),v.TgZ(4,"div",11),v.TgZ(5,"app-icon"),v._uU(6,"event"),v.qZA(),v.qZA(),v.TgZ(7,"div",12),v._uU(8),v.ALo(9,"date"),v.ALo(10,"date"),v.ALo(11,"date"),v.qZA(),v.qZA(),v.TgZ(12,"div",10),v.TgZ(13,"div",11),v.TgZ(14,"app-icon"),v._uU(15,"schedule"),v.qZA(),v.qZA(),v.TgZ(16,"div",12),v._uU(17),v.qZA(),v.qZA(),v.YNc(18,te,6,1,"div",13),v.YNc(19,ie,11,6,"div",14),v.YNc(20,oe,11,6,"div",14),v.YNc(21,ae,3,2,"div",15),v.qZA()),2&e){const e=v.oxw();v.xp6(2),v.hij(" ",e.event.title," "),v.xp6(6),v.lnq(" ",v.xi3(9,9,e.event.date,"longDate")," at ",v.xi3(10,12,e.event.date,"shortTime")," ~ ",v.xi3(11,15,e.event.date+60*e.event.duration*1e3,"shortTime")," "),v.xp6(9),v.Oqu(e.duration),v.xp6(1),v.Q6J("ngIf",e.event.asset_id),v.xp6(1),v.Q6J("ngIf",!e.event.asset_id),v.xp6(1),v.Q6J("ngIf",!e.event.asset_id),v.xp6(1),v.Q6J("ngIf",!e.has_ended)}}function ce(e,t){1&e&&(v.TgZ(0,"div",33),v._UZ(1,"mat-spinner",34),v.TgZ(2,"p"),v._uU(3,"Loading event data..."),v.qZA(),v.qZA()),2&e&&(v.xp6(1),v.Q6J("diameter",32))}const ue=function(){return["/schedule"]};let pe=(()=>{class e extends d.KG{constructor(e,t,n,i){super(),this._route=e,this._router=t,this._dialog=n,this._events=i}get is_host(){var e;return this.event&&(this.event.host||this.event.user_email)===(null===(e=(0,d.ar)())||void 0===e?void 0:e.email)}get duration(){var e,t;return(0,G.Z)({hours:Math.floor((null===(e=this.event)||void 0===e?void 0:e.duration)/60),minutes:(null===(t=this.event)||void 0===t?void 0:t.duration)%60})}get has_ended(){return this.event&&(0,C.Z)(new Date,(0,X.Z)(this.event.date,this.event.duration))}ngOnInit(){this.subscription("route.params",this._route.paramMap.subscribe(e=>(0,a.mG)(this,void 0,void 0,function*(){if(e.has("id"))try{this.event=yield(0,m.Vh)(e.get("id")).toPromise()}catch(t){this.event=yield(0,f.Fo)(e.get("id")).toPromise().catch(()=>null)}}))),this.timeout("return",()=>this.event?"":this._router.navigate(["/schedule"]),8e3)}viewLocation(e){this._dialog.open(K.p,{width:"32em",maxWidth:"95vw",maxHeight:"95vh",data:{item:e}})}editEvent(){"event_start"in this.event&&(this._events.newForm(this.event),this._router.navigate(["/book","spaces","form"]))}confirmDelete(){return(0,a.mG)(this,void 0,void 0,function*(){const e=yield(0,d._5)({title:(this.is_host?"Delete":"Decline")+" event",content:`Are you sure you wish to ${this.is_host?"delete":"decline"} this event?`,icon:{content:this.is_host?"delete":"event_busy"}},this._dialog);if("done"!==e.reason)return;e.loading("Removing event...");const t=this.event instanceof f.$N?f.pv:m.xC;yield t(this.event.id).toPromise().catch(t=>{throw e.loading(""),(0,d.cB)(`Error removing event. ${t}`),t}),(0,d.t5)("Successfully removed event."),this._router.navigate(["/schedule"]),e.close()})}}return e.\u0275fac=function(t){return new(t||e)(v.Y36(l.gz),v.Y36(l.F0),v.Y36(W.uw),v.Y36(m.MH))},e.\u0275cmp=v.Xpm({type:e,selectors:[["schedule-view"]],features:[v.qOj],decls:11,vars:4,consts:[["topbar","",1,""],["button","","mat-button","",1,"clear","h-[2.75rem]","text-white",3,"routerLink"],[1,"flex","items-center","justify-center","h-full"],[1,"text-xl"],[1,"ml-2","mx-4"],[1,"flex-1","w-full","flex","flex-col","items-center","bg-gray-200","p-4","overflow-auto"],["class","max-w-full w-[28rem] bg-white border border-gray-300 px-4 pb-4",4,"ngIf","ngIfElse"],["load_state",""],[1,"max-w-full","w-[28rem]","bg-white","border","border-gray-300","px-4","pb-4"],[1,"text-xl","uppercase","font-medium","w-full","my-4"],[1,"flex","items-center","py-2","space-x-2","border-b","border-gray-200","w-full"],[1,"p-2","rounded-full","bg-gray-300","mr-2"],[1,"flex-1","truncate"],["class","flex items-center py-2 space-x-2 border-b border-gray-200 w-full",4,"ngIf"],["class","border-b border-gray-200 w-full",4,"ngIf"],["class","flex items-center justify-center space-x-2 mt-4",4,"ngIf"],[1,"border-b","border-gray-200","w-full"],[1,"flex","items-center","py-2","space-x-2"],["mat-button","",1,"clear","bg-transparent","border-none","underline",3,"disabled","click"],["list","",1,"overflow-hidden"],["class","flex items-center h-10 pl-12",4,"ngFor","ngForOf"],[1,"flex","items-center","h-10","pl-12"],[1,"h-2","w-2","rounded","mr-2"],["mat-button","","locate","",1,"bg-transparent","border-none","underline","text-black",3,"click"],["class","flex items-center h-12 pl-12 pr-2 space-x-2",4,"ngFor","ngForOf"],[1,"flex","items-center","h-12","pl-12","pr-2","space-x-2"],[1,"text-sm",3,"user"],[1,"h-2","w-2","rounded","mr-4"],[1,"flex","items-center","justify-center","space-x-2","mt-4"],["mat-button","","edit","","class","w-32",3,"disabled","click",4,"ngIf"],["mat-button","","remove","","class","w-32 error inverse",3,"disabled","click",4,"ngIf"],["mat-button","","edit","",1,"w-32",3,"disabled","click"],["mat-button","","remove","",1,"w-32","error","inverse",3,"disabled","click"],[1,"h-full","w-full","flex","flex-col","items-center","justify-center","space-y-2"],[3,"diameter"]],template:function(e,t){if(1&e&&(v.TgZ(0,"div",0),v.TgZ(1,"a",1),v.TgZ(2,"div",2),v.TgZ(3,"app-icon",3),v._uU(4,"arrow_back"),v.qZA(),v.TgZ(5,"span",4),v._uU(6,"Back"),v.qZA(),v.qZA(),v.qZA(),v.qZA(),v.TgZ(7,"div",5),v.YNc(8,de,22,18,"div",6),v.qZA(),v.YNc(9,ce,4,1,"ng-template",null,7,v.W1O)),2&e){const e=v.MAs(10);v.xp6(1),v.Q6J("routerLink",v.DdM(3,ue)),v.xp6(7),v.Q6J("ngIf",t.event)("ngIfElse",e)}},directives:[j.zs,l.yS,N.o,s.O5,j.lW,s.sg,R.k,ee.$g],pipes:[s.uU],styles:["[_nghost-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column}[topbar][_ngcontent-%COMP%]{background-color:#00539f}[list][_ngcontent-%COMP%]{transition:height .2s}"]}),e})();var he=n(4892),ge=n(2142);const ve=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=v.Xpm({type:e,selectors:[["schedule"]],decls:5,vars:0,consts:[[1,"flex-1","flex","sm:flex-row","flex-col-reverse","h-1/2"],[1,"relative","z-10"],[1,"relative","flex","flex-col","flex-1","h-1/2","sm:h-auto","overflow-hidden"]],template:function(e,t){1&e&&(v._UZ(0,"topbar"),v.TgZ(1,"div",0),v._UZ(2,"nav-menu",1),v.TgZ(3,"main",2),v._UZ(4,"router-outlet"),v.qZA(),v.qZA())},directives:[he.o,ge.D,l.lC],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}"]}),e})(),children:[{path:"",component:B},{path:"view/:id",component:pe}]},{path:"*",redirectTo:""}];let fe=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=v.oAB({type:e}),e.\u0275inj=v.cJS({imports:[[s.ez,o.u5,r.v,i.Cl,l.Bz.forChild(ve)]]}),e})()}}]);
//# sourceMappingURL=apps_workplace_src_app_schedule_schedule_module_ts.js.map