"use strict";(self.webpackChunkplaceos=self.webpackChunkplaceos||[]).push([["apps_workplace_src_app_schedule_schedule_module_ts"],{1694:(Ue,b,o)=>{o.r(b),o.d(b,{AppScheduleModule:()=>Se});var h=o(7056),r=o(93),g=o(9298),u=o(1560),D=o(6148),p=o(3786),d=o(7715),J=o(1387),w=o(7326),A=o(5660),_=o(3927),y=o(3466),v=o(8820),f=o(412),S=o(1361),I=o(6186),E=o(8703),x=o(6491),j=o(9097),F=o(2720),V=o(639),Q=o(5816),N=o(8293),Y=o(8636),B=o(2597),e=o(8946);let P=(()=>{class n extends d.KG{constructor(){super(...arguments),this._poll=new x.X(0),this._options=new x.X({start:Date.now()}),this._loading=new x.X(""),this._schedule=new x.X([]),this.options=this._options.asObservable(),this.loading=this._loading.asObservable(),this.schedule=this._loading.asObservable(),this.events=(0,j.aj)([this._options,this._poll]).pipe((0,V.b)(1e3),(0,Q.zg)(([t])=>{this._loading.next("Loading schedule...");const i={period_start:(0,S.Z)((0,I.Z)(t.start)),period_end:(0,S.Z)((0,A.Z)((0,E.Z)(t.start),6))};return t.calendar&&(i.calendar=t.calendar),this._schedule.next(this._schedule.getValue().filter(s=>!(0,d.MZ)(1e3*i.period_start,1e3*i.period_end,s.date,s.date+60*s.duration*1e3))),(0,F.D)([(0,f.u$)(Object.assign({},i)),(0,v.F2)(Object.assign(Object.assign({},i),{type:"desk"}))])}),(0,_.U)(([t,i])=>{const s=[...this._schedule.getValue(),...t,...i.filter(a=>"declined"!==a.status)].sort((a,c)=>a.date-c.date);return this._schedule.next((0,d.Tw)(s,"id")),s}),(0,N.K)(t=>[]),(0,Y.b)(t=>this._loading.next("")),(0,B.d)(1))}startPolling(t=15e3){this.interval("poll",()=>this._poll.next(Date.now()),t)}stopPolling(){this.clearInterval("poll")}setOptions(t){this._options.next(Object.assign(Object.assign({},this._options.getValue()),t))}}return n.\u0275fac=function(){let l;return function(i){return(l||(l=e.n5z(n)))(i||n)}}(),n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var C=o(3176),$=o(7820),z=o(6360),m=o(5159),U=o(7227),Z=o(5306),H=o(4813),T=o(5877),q=o(8292);const G=["schedule-list-item",""];function W(n,l){if(1&n&&(e.TgZ(0,"div",5),e._uU(1),e.ALo(2,"date"),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.hij(" No events for ",e.xi3(2,1,t.item.date,"longDate")," ")}}function X(n,l){if(1&n&&(e.TgZ(0,"div"),e.TgZ(1,"div",3),e._uU(2),e.ALo(3,"date"),e.qZA(),e.YNc(4,W,3,4,"div",4),e.qZA()),2&n){const t=e.oxw();e.xp6(2),e.AsE(" ",e.xi3(3,3,t.item.date,"longDate")," (",t.item.duration,") "),e.xp6(2),e.Q6J("ngIf",!t.item.duration)}}function R(n,l){if(1&n&&(e.TgZ(0,"div",15),e.TgZ(1,"app-icon",16),e._uU(2,"place"),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"slice"),e.qZA(),e.qZA()),2&n){const t=e.oxw(2);e.xp6(4),e.hij(" ",e.Dn7(5,1,(null==t.item?null:t.item.location)||(null==t.item?null:t.item.description),0,255)," ")}}const K=function(n,l){return["/schedule","view",n,l]};function ee(n,l){if(1&n&&(e.TgZ(0,"a",6),e.TgZ(1,"div",7),e.TgZ(2,"div",8),e.TgZ(3,"app-icon",9),e._uU(4),e.qZA(),e.TgZ(5,"div",10),e._uU(6),e.ALo(7,"date"),e.qZA(),e.TgZ(8,"div",11),e._uU(9),e.qZA(),e.qZA(),e.TgZ(10,"div",12),e.TgZ(11,"div",13),e._uU(12),e.qZA(),e.YNc(13,R,6,5,"div",14),e.qZA(),e.qZA(),e.qZA()),2&n){const t=e.oxw();e.ekj("opacity-50",t.has_ended),e.Q6J("routerLink",e.WLB(17,K,null==t.item?null:t.item.id,t.type)),e.xp6(2),e.ekj("bg-success","approved"===t.status)("bg-pending","tentative"===t.status)("bg-error","declined"===t.status),e.xp6(2),e.Oqu(t.icon),e.xp6(2),e.hij(" ",null!=t.item&&t.item.all_day?"All Day":e.xi3(7,14,null==t.item?null:t.item.date,"shortTime")," "),e.xp6(3),e.hij(" (",t.status,") "),e.xp6(3),e.hij(" ",(null==t.item?null:t.item.title)||"Untitled Event"," "),e.xp6(1),e.Q6J("ngIf",(null==t.item?null:t.item.location)||(null==t.item?null:t.item.description))}}let te=(()=>{class n{get type(){return this.item instanceof v.$N?"booking":"event"}get has_ended(){return!this.item||"date"===this.item.id||(0,q.Z)(new Date,this.item.date+60*this.item.duration*1e3)}get icon(){if("declined"===this.status)return"cancel";if(this.item.asset_id)switch(this.item.booking_type){case"desk":return"view_quilt";case"parking":return"local_parking"}return"event"}get status(){return this.item&&"date"!==this.item.id?this.item.status:"declined"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["","schedule-list-item",""]],inputs:{item:"item"},attrs:G,decls:3,vars:2,consts:[[3,"ngSwitch"],[4,"ngSwitchCase"],["mat-button","","class","rounded-none my-1 mx-4 w-[calc(100%-2rem)] h-20 bg-white hover:shadow p-0",3,"opacity-50","routerLink",4,"ngSwitchDefault"],[1,"mx-4","w-full","h-12","text-xl","flex","items-center"],["class","mx-4 w-full h-10 text-lg text-center font-normal opacity-60",4,"ngIf"],[1,"mx-4","w-full","h-10","text-lg","text-center","font-normal","opacity-60"],["mat-button","",1,"rounded-none","my-1","mx-4","w-[calc(100%-2rem)]","h-20","bg-white","hover:shadow","p-0",3,"routerLink"],[1,"flex","items-center","border","border-gray-200"],["status","",1,"h-20","w-20","flex","flex-col","items-center","justify-center","text-white","leading-tight"],[1,"text-2xl"],[1,"font-normal"],[1,"capitalize","text-xs","font-medium"],[1,"flex-1","flex","flex-col","text-left","p-2"],[1,"text-xl","pl-1"],["class","flex items-center font-normal",4,"ngIf"],[1,"flex","items-center","font-normal"],[1,"text-lg","mr-1"]],template:function(t,i){1&t&&(e.ynx(0,0),e.YNc(1,X,5,6,"div",1),e.YNc(2,ee,14,20,"a",2),e.BQk()),2&t&&(e.Q6J("ngSwitch",null==i.item?null:i.item.id),e.xp6(1),e.Q6J("ngSwitchCase","date"))},directives:[r.RF,r.n9,r.ED,r.O5,m.zs,u.yS,Z.o],pipes:[r.uU,r.OU],encapsulation:2}),n})();var ne=o(4590);function ie(n,l){1&n&&e._UZ(0,"div",20),2&n&&e.Q6J("item",l.$implicit)}function oe(n,l){1&n&&e._UZ(0,"mat-progress-bar",21)}let se=(()=>{class n{constructor(t){this._state=t,this.today=new Date,this.max_date=(0,J.Z)(this.today,4),this.options=this._state.options,this.loading=this._state.loading,this.date=this.options.pipe((0,_.U)(i=>new Date(i.start))),this.event_list=this._state.events.pipe((0,_.U)(i=>{let s=[],a=new Date(this.today);for(;a<this.max_date;){const c=i.filter(Ce=>(0,w.Z)(a,Ce.date));s=c.length?[...s,{id:"date",date:a.valueOf(),duration:c.length},...c]:[...s,{id:"date",date:a.valueOf(),duration:0}],a=(0,A.Z)(a,1)}return s}))}get user(){return(0,d.ar)()}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}setDate(t){this._state.setOptions({start:t.valueOf()})}updateDate(t){return(0,p.mG)(this,void 0,void 0,function*(){const s=((yield this.event_list.pipe((0,y.q)(1)).toPromise())||[])[t]||{};s&&this.setDate(s.date)})}scrollTo(t){return(0,p.mG)(this,void 0,void 0,function*(){const i=yield this.event_list.pipe((0,y.q)(1)).toPromise(),s=i.findIndex(a=>"date"===a.id&&(0,w.Z)(a.date,t));if(s>=0&&this._viewport){let a=0;for(let c=0;c<i.length&&c<s;c++)a+=1;this._viewport.scrollTo({top:Math.round(88*a),behavior:"smooth"})}this.setDate(t)})}trackByFn(t,i){return i?`${i.id}|${i.date}`:void 0}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(P))},n.\u0275cmp=e.Xpm({type:n,selectors:[["schedule-list"]],viewQuery:function(t,i){if(1&t&&e.Gf(h.N7,7),2&t){let s;e.iGM(s=e.CRH())&&(i._viewport=s.first)}},decls:34,vars:17,consts:[[1,"w-full","h-16","flex","items-center","justify-between","bg-white","border-b","border-gray-300","shadow","p-2"],["appearance","outline",1,"h-[3.25rem]"],[3,"placeholder"],[1,"flex","items-center","space-x-2"],["mat-button","",1,"clear","underline",3,"matMenuTriggerFor"],["mat-icon-button","",1,"relative"],["dateMenu",""],["matInput","",1,"opacity-0","absolute","inset-0",3,"ngModel","matDatepicker","min","max","ngModelChange"],["matSuffix","",1,"opacity-0","absolute","inset-0",3,"for"],["picker",""],[1,"w-full","flex-1","overflow-hidden","bg-gray-100"],["itemSize","88",1,"h-full","w-full",3,"scrolledIndexChange"],["schedule-list-item","",3,"item",4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTrackBy"],["mode","indeterminate","class","w-full",4,"ngIf"],["xPosition","before"],["legend","matMenu"],[1,"flex","items-center","px-4","py-2","hover:bg-gray-100"],[1,"bg-success","h-2","w-2","rounded-full","mr-4"],[1,"bg-pending","h-2","w-2","rounded-full","mr-4"],[1,"bg-error","h-2","w-2","rounded-full","mr-4"],["schedule-list-item","",3,"item"],["mode","indeterminate",1,"w-full"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"mat-form-field",1),e.TgZ(2,"mat-select",2),e.TgZ(3,"mat-option"),e._uU(4),e.qZA(),e.qZA(),e.qZA(),e.TgZ(5,"div",3),e.TgZ(6,"button",4),e._uU(7," Legend "),e.qZA(),e.TgZ(8,"button",5,6),e.TgZ(10,"app-icon"),e._uU(11,"event"),e.qZA(),e.TgZ(12,"input",7),e.NdJ("ngModelChange",function(a){return i.scrollTo(a)}),e.ALo(13,"async"),e.qZA(),e._UZ(14,"mat-datepicker-toggle",8),e.qZA(),e._UZ(15,"mat-datepicker",null,9),e.qZA(),e.qZA(),e.TgZ(17,"div",10),e.TgZ(18,"cdk-virtual-scroll-viewport",11),e.NdJ("scrolledIndexChange",function(a){return i.updateDate(a)}),e.YNc(19,ie,1,1,"div",12),e.ALo(20,"async"),e.qZA(),e.qZA(),e.YNc(21,oe,1,0,"mat-progress-bar",13),e.ALo(22,"async"),e.TgZ(23,"mat-menu",14,15),e.TgZ(25,"div",16),e._UZ(26,"div",17),e._uU(27," Approved "),e.qZA(),e.TgZ(28,"div",16),e._UZ(29,"div",18),e._uU(30," Tentative "),e.qZA(),e.TgZ(31,"div",16),e._UZ(32,"div",19),e._uU(33," Declined "),e.qZA(),e.qZA()),2&t){const s=e.MAs(16),a=e.MAs(24);e.xp6(2),e.Q6J("placeholder",null==i.user?null:i.user.name),e.xp6(2),e.Oqu(null==i.user?null:i.user.name),e.xp6(2),e.Q6J("matMenuTriggerFor",a),e.xp6(6),e.Q6J("ngModel",e.lcZ(13,11,i.date))("matDatepicker",s)("min",i.today)("max",i.max_date),e.xp6(2),e.Q6J("for",s),e.xp6(5),e.Q6J("cdkVirtualForOf",e.lcZ(20,13,i.event_list))("cdkVirtualForTrackBy",i.trackByFn),e.xp6(2),e.Q6J("ngIf",e.lcZ(22,15,i.loading))}},directives:[C.KE,$.gD,z.ey,m.lW,U.p6,Z.o,H.Nt,g.Fj,T.hl,g.JJ,g.On,T.nW,C.R9,T.Mq,h.N7,h.xd,h.x0,r.O5,U.VK,te,ne.pW],pipes:[r.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}"]}),n})();var k=o(5320),le=o(9756),O=o(2878),M=o(8931),L=o(1039);function ae(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"button",17),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).viewLocation()}),e._uU(1," Map "),e.qZA()}}function re(n,l){if(1&n&&(e.TgZ(0,"div",15),e.TgZ(1,"div",11),e.TgZ(2,"app-icon"),e._uU(3,"menu_book"),e.qZA(),e.qZA(),e.TgZ(4,"div",12),e._uU(5),e.qZA(),e.YNc(6,ae,2,0,"button",16),e.qZA()),2&n){const t=e.oxw(2);e.xp6(5),e.hij(" ",t.event.description||"<No Asset>"," "),e.xp6(1),e.Q6J("ngIf",t.event.extension_data.map_id)}}function de(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",18),e.TgZ(1,"button",19),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).confirmDelete()}),e._uU(2),e.qZA(),e.qZA()}if(2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("disabled",t.loading),e.xp6(1),e.hij(" ",t.is_host?"Delete":"Decline"," Event ")}}function ce(n,l){if(1&n&&(e.TgZ(0,"div",8),e.TgZ(1,"h2",9),e._uU(2),e.qZA(),e.TgZ(3,"div",10),e.TgZ(4,"div",11),e.TgZ(5,"app-icon"),e._uU(6,"event"),e.qZA(),e.qZA(),e.TgZ(7,"div",12),e._uU(8),e.ALo(9,"date"),e.ALo(10,"date"),e.ALo(11,"date"),e.qZA(),e.qZA(),e.TgZ(12,"div",10),e.TgZ(13,"div",11),e.TgZ(14,"app-icon"),e._uU(15,"schedule"),e.qZA(),e.qZA(),e.TgZ(16,"div",12),e._uU(17),e.qZA(),e.qZA(),e.YNc(18,re,7,2,"div",13),e.YNc(19,de,3,2,"div",14),e.qZA()),2&n){const t=e.oxw();e.xp6(2),e.hij(" ",t.event.title," "),e.xp6(6),e.lnq(" ",e.xi3(9,7,t.event.date,"longDate")," at ",e.xi3(10,10,t.event.date,"shortTime")," ~ ",e.xi3(11,13,t.event.date+60*t.event.duration*1e3,"shortTime")," "),e.xp6(9),e.Oqu(t.duration),e.xp6(1),e.Q6J("ngIf",t.event.asset_id),e.xp6(1),e.Q6J("ngIf",!t.has_ended&&t.is_host)}}function ue(n,l){1&n&&(e.TgZ(0,"div",20),e._UZ(1,"mat-spinner",21),e.TgZ(2,"p"),e._uU(3,"Loading booking data..."),e.qZA(),e.qZA()),2&n&&(e.xp6(1),e.Q6J("diameter",32))}const pe=function(){return["/schedule"]};let me=(()=>{class n extends d.KG{constructor(t,i,s,a){super(),this._route=t,this._router=i,this._dialog=s,this._bookings=a}get is_host(){var t,i;return(null===(t=this.event)||void 0===t?void 0:t.user_email)===(null===(i=(0,d.ar)())||void 0===i?void 0:i.email)}get duration(){var t,i;return(0,k.Z)({hours:Math.floor((null===(t=this.event)||void 0===t?void 0:t.duration)/60),minutes:(null===(i=this.event)||void 0===i?void 0:i.duration)%60})}get has_ended(){return this.event&&(0,q.Z)(new Date,(0,le.Z)(this.event.date,this.event.duration))}ngOnInit(){this.subscription("route.params",this._route.paramMap.subscribe(t=>(0,p.mG)(this,void 0,void 0,function*(){t.has("id")&&(this.event=yield(0,v.Fo)(t.get("id")).toPromise().catch(()=>null))}))),this.timeout("return",()=>this.event?"":this._router.navigate(["/schedule"]),8e3)}viewLocation(){this._dialog.open(O.p,{maxWidth:"95vw",maxHeight:"95vh",data:{item:{id:this.event.asset_id,map_id:this.event.extension_data.map_id,name:this.event.description,zones:this.event.zones}}})}editEvent(){this._bookings.newForm(this.event),this._router.navigate(["/book","desks","form"])}confirmDelete(){return(0,p.mG)(this,void 0,void 0,function*(){const t=yield(0,d._5)({title:(this.is_host?"Delete":"Decline")+" event",content:`Are you sure you wish to ${this.is_host?"delete":"decline"} this event?`,icon:{content:this.is_host?"delete":"event_busy"}},this._dialog);"done"===t.reason&&(t.loading("Removing booking..."),yield(0,v.FP)(this.event.id).toPromise().catch(i=>{throw t.loading(""),(0,d.cB)(`Error removing booking. ${i}`),i}),(0,d.t5)("Successfully removed booking."),this._router.navigate(["/schedule"]),t.close())})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.gz),e.Y36(u.F0),e.Y36(M.uw),e.Y36(v.fy))},n.\u0275cmp=e.Xpm({type:n,selectors:[["schedule-view-booking"]],inputs:{event:"event"},features:[e.qOj],decls:11,vars:4,consts:[["topbar","",1,""],["button","","mat-button","",1,"clear","h-[2.75rem]","text-white",3,"routerLink"],[1,"flex","items-center","justify-center","h-full"],[1,"text-xl"],[1,"ml-2","mx-4"],[1,"flex-1","w-full","flex","flex-col","items-center","bg-gray-200","p-4","overflow-auto"],["class","max-w-full w-[28rem] bg-white border border-gray-300 px-4 pb-4",4,"ngIf","ngIfElse"],["load_state",""],[1,"max-w-full","w-[28rem]","bg-white","border","border-gray-300","px-4","pb-4"],[1,"text-xl","uppercase","font-medium","w-full","my-4"],[1,"flex","items-center","py-2","space-x-2","border-b","border-gray-200","w-full"],[1,"p-2","rounded-full","bg-gray-300","mr-2"],[1,"flex-1","truncate"],["class","flex items-center py-2 space-x-2 w-full",4,"ngIf"],["class","flex items-center justify-center space-x-2 mt-4",4,"ngIf"],[1,"flex","items-center","py-2","space-x-2","w-full"],["mat-button","","locate","","class","bg-transparent border-none underline text-black",3,"click",4,"ngIf"],["mat-button","","locate","",1,"bg-transparent","border-none","underline","text-black",3,"click"],[1,"flex","items-center","justify-center","space-x-2","mt-4"],["mat-button","","remove","",1,"w-32","error","inverse",3,"disabled","click"],[1,"h-full","w-full","flex","flex-col","items-center","justify-center","space-y-2"],[3,"diameter"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"a",1),e.TgZ(2,"div",2),e.TgZ(3,"app-icon",3),e._uU(4,"arrow_back"),e.qZA(),e.TgZ(5,"span",4),e._uU(6,"Back"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"div",5),e.YNc(8,ce,20,16,"div",6),e.qZA(),e.YNc(9,ue,4,1,"ng-template",null,7,e.W1O)),2&t){const s=e.MAs(10);e.xp6(1),e.Q6J("routerLink",e.DdM(3,pe)),e.xp6(7),e.Q6J("ngIf",i.event)("ngIfElse",s)}},directives:[m.zs,u.yS,Z.o,r.O5,m.lW,L.$g],pipes:[r.uU],styles:["[_nghost-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column}[topbar][_ngcontent-%COMP%]{background-color:#00539f}[list][_ngcontent-%COMP%]{transition:height .2s}"]}),n})();var he=o(9685);function ve(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",20),e.TgZ(1,"span",12),e._uU(2),e.qZA(),e._UZ(3,"span",21),e.TgZ(4,"button",22),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw(2).viewLocation(a)}),e._uU(5," Map "),e.qZA(),e.qZA()}if(2&n){const t=l.$implicit;e.xp6(2),e.AsE(" ",t.display_name||t.name," [",(null==t.level?null:t.level.display_name)||(null==t.level?null:t.level.name),"] "),e.xp6(1),e.ekj("bg-success","accepted"===t.response_status)("bg-pending","tentative"===t.response_status)("bg-error","declined"===t.response_status)}}function ge(n,l){if(1&n&&(e.TgZ(0,"div",23),e._UZ(1,"a-user-avatar",24),e.TgZ(2,"span",12),e._uU(3),e.qZA(),e._UZ(4,"span",25),e.qZA()),2&n){const t=l.$implicit;e.xp6(1),e.Q6J("user",t),e.xp6(2),e.Oqu(t.name||t.email),e.xp6(1),e.ekj("bg-success","accepted"===t.response_status)("bg-pending","tentative"===t.response_status)("bg-error","declined"===t.response_status)}}function fe(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"button",29),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).editEvent()}),e._uU(1," Edit Event "),e.qZA()}if(2&n){const t=e.oxw(3);e.Q6J("disabled",t.loading)}}function xe(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",26),e.YNc(1,fe,2,1,"button",27),e.TgZ(2,"button",28),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).confirmDelete()}),e._uU(3),e.qZA(),e.qZA()}if(2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.is_host),e.xp6(1),e.Q6J("disabled",t.loading),e.xp6(1),e.hij(" ",t.is_host?"Delete":"Decline"," Event ")}}function Ze(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",8),e.TgZ(1,"h2",9),e._uU(2),e.qZA(),e.TgZ(3,"div",10),e.TgZ(4,"div",11),e.TgZ(5,"app-icon"),e._uU(6,"event"),e.qZA(),e.qZA(),e.TgZ(7,"div",12),e._uU(8),e.ALo(9,"date"),e.ALo(10,"date"),e.ALo(11,"date"),e.qZA(),e.qZA(),e.TgZ(12,"div",10),e.TgZ(13,"div",11),e.TgZ(14,"app-icon"),e._uU(15,"schedule"),e.qZA(),e.qZA(),e.TgZ(16,"div",12),e._uU(17),e.qZA(),e.qZA(),e.TgZ(18,"div",13),e.TgZ(19,"div",14),e.TgZ(20,"div",11),e.TgZ(21,"app-icon"),e._uU(22,"place"),e.qZA(),e.qZA(),e.TgZ(23,"div",12),e._uU(24),e.qZA(),e.TgZ(25,"button",15),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return s.show_spaces=!s.show_spaces}),e._uU(26),e.qZA(),e.qZA(),e.TgZ(27,"div",16),e.YNc(28,ve,6,8,"div",17),e.qZA(),e.qZA(),e.TgZ(29,"div",13),e.TgZ(30,"div",14),e.TgZ(31,"div",11),e.TgZ(32,"app-icon"),e._uU(33,"group"),e.qZA(),e.qZA(),e.TgZ(34,"div",12),e._uU(35),e.qZA(),e.TgZ(36,"button",15),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return s.show_people=!s.show_people}),e._uU(37),e.qZA(),e.qZA(),e.TgZ(38,"div",16),e.YNc(39,ge,5,8,"div",18),e.qZA(),e.qZA(),e.YNc(40,xe,4,3,"div",19),e.qZA()}if(2&n){const t=e.oxw();e.xp6(2),e.hij(" ",t.event.title," "),e.xp6(6),e.lnq(" ",e.xi3(9,18,t.event.date,"longDate")," at ",e.xi3(10,21,t.event.date,"shortTime")," ~ ",e.xi3(11,24,t.event.date+60*t.event.duration*1e3,"shortTime")," "),e.xp6(9),e.Oqu(t.duration),e.xp6(7),e.hij(" ",null==t.event.resources?null:t.event.resources.length," Space(s) "),e.xp6(1),e.Q6J("disabled",!(null!=t.event.resources&&t.event.resources.length)),e.xp6(1),e.hij(" ",t.show_spaces?"Hide":"Show"," "),e.xp6(1),e.Udp("height",t.show_spaces?2.5*(null==t.event.resources?null:t.event.resources.length)+"rem":"0"),e.xp6(1),e.Q6J("ngForOf",t.event.resources),e.xp6(7),e.hij(" ",(null==t.event.attendees?null:t.event.attendees.length)||0," Attendee(s) "),e.xp6(1),e.Q6J("disabled",!(null!=t.event.attendees&&t.event.attendees.length)),e.xp6(1),e.hij(" ",t.show_people?"Hide":"Show"," "),e.xp6(1),e.Udp("height",t.show_people?3*t.event.attendees.length+"rem":"0"),e.xp6(1),e.Q6J("ngForOf",t.event.attendees),e.xp6(1),e.Q6J("ngIf","done"!==t.event.state)}}function _e(n,l){1&n&&(e.TgZ(0,"div",30),e._UZ(1,"mat-spinner",31),e.TgZ(2,"p"),e._uU(3,"Loading event data..."),e.qZA(),e.qZA()),2&n&&(e.xp6(1),e.Q6J("diameter",32))}const Te=function(){return["/schedule"]};let be=(()=>{class n extends d.KG{constructor(t,i,s,a){super(),this._route=t,this._router=i,this._dialog=s,this._events=a}get is_host(){var t;return null===(t=this.event)||void 0===t?void 0:t.host}get duration(){var t,i;return(0,k.Z)({hours:Math.floor((null===(t=this.event)||void 0===t?void 0:t.duration)/60),minutes:(null===(i=this.event)||void 0===i?void 0:i.duration)%60})}ngOnInit(){this.subscription("route.params",this._route.paramMap.subscribe(t=>(0,p.mG)(this,void 0,void 0,function*(){t.has("id")&&(this.event=yield(0,f.Vh)(t.get("id")).toPromise())}))),this.timeout("return",()=>this.event?"":this._router.navigate(["/schedule"]),8e3)}viewLocation(t){this._dialog.open(O.p,{maxWidth:"95vw",maxHeight:"95vh",data:{item:t}})}editEvent(){"event_start"in this.event&&(this._events.newForm(this.event),this._router.navigate(["/book","spaces","form"]))}confirmDelete(){return(0,p.mG)(this,void 0,void 0,function*(){const t=yield(0,d._5)({title:(this.is_host?"Delete":"Decline")+" event",content:`Are you sure you wish to ${this.is_host?"delete":"decline"} this event?`,icon:{content:this.is_host?"delete":"event_busy"}},this._dialog);"done"===t.reason&&(t.loading("Removing event..."),yield(0,f.xC)(this.event.id).toPromise().catch(i=>{throw t.loading(""),(0,d.cB)(`Error removing event. ${i}`),i}),(0,d.t5)("Successfully removed event."),this._router.navigate(["/schedule"]),t.close())})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.gz),e.Y36(u.F0),e.Y36(M.uw),e.Y36(f.MH))},n.\u0275cmp=e.Xpm({type:n,selectors:[["schedule-view-event"]],inputs:{event:"event"},features:[e.qOj],decls:11,vars:4,consts:[["topbar","",1,""],["button","","mat-button","",1,"clear","h-[2.75rem]","text-white",3,"routerLink"],[1,"flex","items-center","justify-center","h-full"],[1,"text-xl"],[1,"ml-2","mx-4"],[1,"flex-1","w-full","flex","flex-col","items-center","bg-gray-200","p-4","overflow-auto"],["class","max-w-full w-[28rem] bg-white border border-gray-300 px-4 pb-4",4,"ngIf","ngIfElse"],["load_state",""],[1,"max-w-full","w-[28rem]","bg-white","border","border-gray-300","px-4","pb-4"],[1,"text-xl","uppercase","font-medium","w-full","my-4"],[1,"flex","items-center","py-2","space-x-2","border-b","border-gray-200","w-full"],[1,"p-2","rounded-full","bg-gray-300","mr-2"],[1,"flex-1","truncate"],[1,"border-b","border-gray-200","w-full"],[1,"flex","items-center","py-2","space-x-2"],["mat-button","",1,"clear","bg-transparent","border-none","underline",3,"disabled","click"],["list","",1,"overflow-hidden"],["class","flex items-center h-10 pl-12",4,"ngFor","ngForOf"],["class","flex items-center h-12 pl-12 pr-2 space-x-2",4,"ngFor","ngForOf"],["class","flex items-center justify-center space-x-2 mt-4",4,"ngIf"],[1,"flex","items-center","h-10","pl-12"],[1,"h-2","w-2","rounded","mr-2"],["mat-button","","locate","",1,"bg-transparent","border-none","underline","text-black",3,"click"],[1,"flex","items-center","h-12","pl-12","pr-2","space-x-2"],[1,"text-sm",3,"user"],[1,"h-2","w-2","rounded","mr-4"],[1,"flex","items-center","justify-center","space-x-2","mt-4"],["mat-button","","edit","","class","w-32",3,"disabled","click",4,"ngIf"],["mat-button","","remove","",1,"w-32","error","inverse",3,"disabled","click"],["mat-button","","edit","",1,"w-32",3,"disabled","click"],[1,"h-full","w-full","flex","flex-col","items-center","justify-center","space-y-2"],[3,"diameter"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"a",1),e.TgZ(2,"div",2),e.TgZ(3,"app-icon",3),e._uU(4,"arrow_back"),e.qZA(),e.TgZ(5,"span",4),e._uU(6,"Back"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"div",5),e.YNc(8,Ze,41,27,"div",6),e.qZA(),e.YNc(9,_e,4,1,"ng-template",null,7,e.W1O)),2&t){const s=e.MAs(10);e.xp6(1),e.Q6J("routerLink",e.DdM(3,Te)),e.xp6(7),e.Q6J("ngIf",i.event)("ngIfElse",s)}},directives:[m.zs,u.yS,Z.o,r.O5,m.lW,r.sg,he.k,L.$g],pipes:[r.uU],styles:["[_nghost-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column}[topbar][_ngcontent-%COMP%]{background-color:#00539f}[list][_ngcontent-%COMP%]{transition:height .2s}"]}),n})();var we=o(4187),Ae=o(6012);const ye=[{path:"",component:(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["schedule"]],decls:5,vars:0,consts:[[1,"flex-1","flex","sm:flex-row","flex-col-reverse","h-1/2"],[1,"relative","flex","flex-col","flex-1","h-1/2","sm:h-auto","overflow-hidden"]],template:function(t,i){1&t&&(e._UZ(0,"topbar"),e.TgZ(1,"div",0),e.TgZ(2,"main",1),e._UZ(3,"router-outlet"),e.qZA(),e.qZA(),e._UZ(4,"footer-menu"))},directives:[we.o,u.lC,Ae.i],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}"]}),n})(),children:[{path:"",component:se},{path:"view/:id/booking",component:me},{path:"view/:id/event",component:be}]},{path:"*",redirectTo:""}];let Se=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[r.ez,g.u5,D.v,h.Cl,u.Bz.forChild(ye)]]}),n})()}}]);
//# sourceMappingURL=apps_workplace_src_app_schedule_schedule_module_ts.js.map