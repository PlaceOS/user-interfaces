"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["apps_workplace_src_app_dashboard_dashboard_module_ts"],{4571:(Je,D,r)=>{r.r(D),r.d(D,{DashboardModule:()=>Ne});var P=r(9015),d=r(6477),p=r(9542),U=r(854),k=r(3696),m=r(1686),e=r(9445),L=r(4187),Q=r(6012),g=r(1670),f=r(7502),_=r(4505),Y=r(4139),S=r(823),q=r(9095),j=r(7418),E=r(9128),A=r(5670),G=r(9151),R=r(3910),w=r(6942),$=r(8987),O=r(3200),x=r(5915),b=r(3149),M=r(5912),X=r(9434),F=r(3496);let Z=(()=>{class n extends m.cx{constructor(t,a,o,i){super(),this._settings=t,this._calendar=a,this._org=o,this._event_form=i,this._options=new _.X({}),this._free_spaces=new _.X([]),this._upcoming_events=new _.X([]),this._contacts=new _.X([]),this._level_occupancy=new _.X([]),this.free_spaces=this._free_spaces.asObservable(),this.upcoming_events=this._upcoming_events.asObservable(),this.contacts=this._contacts.asObservable(),this.options=this._options.asObservable(),this.search_results=this._options.pipe((0,S.b)(500),(0,q.w)(({search:c})=>c?(0,b.VE)(c):(0,Y.of)([])),(0,j.K)(c=>[]),(0,E.d)(1)),this.level_occupancy=this._level_occupancy.asObservable(),this.init()}init(){var t=this;return(0,g.Z)(function*(){yield t._org.initialised.pipe((0,A.P)(i=>i)).toPromise(),t.subscription("building",t._org.active_building.pipe((0,G.h)(i=>!!i)).subscribe(()=>t.updateBuildingMetadata()));let a=t._org.binding("contact_tracing");if(!a)return;const o=(0,f.rTZ)(a,"AreaManagement").binding("overview");o.listen().subscribe(i=>t.updateOccupancy(i||{})),o.bind()})()}setOptions(t){this._options.next({...this._options.getValue(),...t})}pollFreeSpaces(t=1e4){this.updateFreeSpaces(),this.interval("free_spaces",()=>this.updateFreeSpaces(),t)}stopPollingFreeSpaces(){this.clearInterval("free_spaces")}pollUpcomingEvents(t=1e4){this.updateUpcomingEvents(),this.interval("upcoming_events",()=>this.updateUpcomingEvents(),t)}stopPollingUpcomingEvents(){this.clearInterval("upcoming_events")}updateContacts(){var t=this;return(0,g.Z)(function*(){const a=yield(0,f.rlq)((0,m.ar)().id,"contacts").toPromise();t._contacts.next((a.details instanceof Array?a.details:[]).map(i=>new b.n5(i)))})()}addContact(t){var a=this;return(0,g.Z)(function*(){let o=[...a._contacts.getValue()];o.push(t),o=(0,m.Tw)(o,"email");const i=yield(0,f.Ymr)((0,m.ar)().id,{name:"contacts",description:"Contacts for the User",details:o}).toPromise();a._contacts.next((i.details instanceof Array?i.details:[]).map(u=>new b.n5(u)))})()}removeContact(t){var a=this;return(0,g.Z)(function*(){let o=[...a._contacts.getValue()];o=o.filter(u=>u.email!==t.email);const i=yield(0,f.Ymr)((0,m.ar)().id,{name:"contacts",description:"Contacts for the User",details:o}).toPromise();a._contacts.next((i.details instanceof Array?i.details:[]).map(u=>new b.n5(u)))})()}updateOccupancy(t){var a=this;return(0,g.Z)(function*(){const o=[...a._org.levels];o.sort((i,c)=>t[i.id]?.recommendation-t[c.id]?.recommendation),a._level_occupancy.next(o)})()}updateFreeSpaces(){var t=this;return(0,g.Z)(function*(){if(!t._org.building)return;const a=Math.abs((0,$.Z)(Date.now(),(0,O.Z)(Date.now())));t._event_form.setOptions({zone_ids:[],capacity:0,features:[],show_fav:!1}),t._event_form.form.patchValue({date:Date.now(),duration:a});const o=yield t._event_form.available_spaces.pipe((0,R.q)(1)).toPromise();o.sort((i,c)=>i.capacity-c.capacity),t._free_spaces.next(o)})()}updateUpcomingEvents(){var t=this;return(0,g.Z)(function*(){const a=Math.floor((new Date).valueOf()/1e3),o=Math.floor((0,O.Z)(new Date).valueOf()/1e3),u=[...yield(t._settings.get("app.events.use_bookings")?(0,F.F2)({period_start:a,period_end:o,type:"room",email:(0,m.ar)().email}).pipe((0,w.U)(l=>l.map(h=>(0,x.Yd)(h)))):(0,x.u$)({period_start:a,period_end:o,calendars:(0,m.ar)().email})).toPromise().catch(l=>[]),...yield(0,F.F2)({period_start:a,period_end:o,type:"desk",user:(0,m.ar)().email}).toPromise().catch(l=>[])].sort((l,h)=>l.date-h.date);t._upcoming_events.next(u)})()}updateBuildingMetadata(){var t=this;return(0,g.Z)(function*(){const a=t._org.building,o=yield(0,f.rlq)(a.id,"bindings").toPromise();if(!o.details.occupancy)return;const i=o.details.occupancy,c=(0,f.rTZ)(i.sys,i.module,i.index);c&&(t._occupancy_binding&&t._occupancy_binding.unbind(),t._occupancy_binding=c.binding("occupancy"),t._occupancy_binding.bind(),t.subscription("occupancy_binding",t._occupancy_binding.listen().subscribe(u=>{const l=Object.keys(u).map(h=>({id:h,...u[h]}));l.sort((h,Ie)=>h.recommendation_factor-Ie.recommendation_factor),t._level_occupancy.next(l.map(h=>t._org.levelWithID([h.id])))})))})()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(m.gb),e.LFG(X.ot),e.LFG(M.w7),e.LFG(x.MH))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var v=r(7728);const N=function(){return["/explore"]},H=function(n){return{level:n}};function V(n,s){if(1&n&&(e.TgZ(0,"a",7)(1,"div",8),e._uU(2),e.qZA()()),2&n){const t=s.$implicit;e.Q6J("routerLink",e.DdM(3,N))("queryParams",e.VKq(4,H,t.id)),e.xp6(2),e.hij(" ",t.display_name||t.name," ")}}function B(n,s){1&n&&(e.TgZ(0,"span",9),e._uU(1,"No free spaces in building"),e.qZA())}const K=function(n){return{space:n}};function z(n,s){if(1&n&&(e.TgZ(0,"a",7)(1,"div",8),e._uU(2),e.qZA()()),2&n){const t=s.$implicit;e.Q6J("routerLink",e.DdM(3,N))("queryParams",e.VKq(4,K,t.id)),e.xp6(2),e.hij(" ",t.display_name||t.name," ")}}function W(n,s){1&n&&(e.TgZ(0,"span",13),e._uU(1,"No free spaces"),e.qZA())}function ee(n,s){if(1&n&&(e.TgZ(0,"div",10)(1,"div",2)(2,"div"),e._uU(3,"Spaces"),e.qZA()(),e.TgZ(4,"div",11),e.YNc(5,z,3,6,"a",4),e.ALo(6,"slice"),e.ALo(7,"async"),e.YNc(8,W,2,0,"span",12),e.ALo(9,"async"),e.qZA()()),2&n){const t=e.oxw();e.xp6(5),e.Q6J("ngForOf",e.Dn7(6,2,e.lcZ(7,6,t.space_list),0,3)),e.xp6(3),e.Q6J("ngIf",!e.lcZ(9,8,t.space_list).length)}}let te=(()=>{class n{constructor(t){this._state=t,this.space_list=this._state.free_spaces,this.levels_free=this._state.level_occupancy}ngOnInit(){var t=this;return(0,g.Z)(function*(){t._state.pollFreeSpaces()})()}ngOnDestroy(){this._state.stopPollingFreeSpaces()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(Z))},n.\u0275cmp=e.Xpm({type:n,selectors:[["a-dashboard-availability"]],decls:14,vars:13,consts:[[1,"m-0","font-medium","text-xl"],[1,"flex","flex-col","items-center","p-2","bg-white","dark:bg-neutral-600","shadow","my-4","rounded-lg"],[1,"flex","items-center","w-full","mb-2"],["free-levels","",1,"items","space-y-2","w-full"],["button","","btn","","matRipple","","class","w-full",3,"routerLink","queryParams",4,"ngFor","ngForOf"],["class","text-black/30 dark:text-white/30 text-sm mb-2",4,"ngIf"],["free-spaces","","class","flex items-center flex-col rounded-lg bg-white dark:bg-neutral-600 shadow my-4 p-2",4,"ngIf"],["button","","btn","","matRipple","",1,"w-full",3,"routerLink","queryParams"],[1,"max-w-full","truncate"],[1,"text-black/30","dark:text-white/30","text-sm","mb-2"],["free-spaces","",1,"flex","items-center","flex-col","rounded-lg","bg-white","dark:bg-neutral-600","shadow","my-4","p-2"],[1,"items","space-y-2","w-full"],["class","text-dark-fade text-sm mb-2",4,"ngIf"],[1,"text-dark-fade","text-sm","mb-2"]],template:function(t,a){if(1&t&&(e.TgZ(0,"h3",0),e._uU(1,"Available Now"),e.qZA(),e.TgZ(2,"div",1)(3,"div",2)(4,"div"),e._uU(5,"Building Levels"),e.qZA()(),e.TgZ(6,"div",3),e.YNc(7,V,3,6,"a",4),e.ALo(8,"slice"),e.ALo(9,"async"),e.YNc(10,B,2,0,"span",5),e.ALo(11,"async"),e.qZA()(),e.YNc(12,ee,10,10,"div",6),e.ALo(13,"async")),2&t){let o;e.xp6(7),e.Q6J("ngForOf",e.Dn7(8,3,e.lcZ(9,7,a.levels_free),0,2)),e.xp6(3),e.Q6J("ngIf",!e.lcZ(11,9,a.levels_free).length),e.xp6(2),e.Q6J("ngIf",null==(o=e.lcZ(13,11,a.space_list))?null:o.length)}},dependencies:[d.sg,d.O5,v.wG,U.rH,d.Ov,d.OU],styles:["[_nghost-%COMP%]{padding:1em;min-width:16rem}\n/*# sourceMappingURL=dashboard-availability.component.ts-angular-inline--79.css.map*/"]}),n})();var ne=r(8053),ae=r(6725),oe=r(8676),y=r(7486),C=r(5306),I=r(9685),se=r(2423);const ie=function(){return{class:"material-icons",content:"group"}};function re(n,s){if(1&n&&(e.TgZ(0,"div",13),e._UZ(1,"app-icon",14),e._uU(2),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("icon",e.DdM(3,ie)),e.xp6(1),e.AsE(" ",null==t.guests?null:t.guests.length," Guest",1===(null==t.guests?null:t.guests.length)?"":"s"," ")}}function ce(n,s){1&n&&e._UZ(0,"a-user-avatar",17),2&n&&e.Q6J("user",s.$implicit)}function le(n,s){if(1&n&&(e.TgZ(0,"div",15),e.YNc(1,ce,1,1,"a-user-avatar",16),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngForOf",t.guests)}}function de(n,s){if(1&n&&(e.TgZ(0,"a",18),e._uU(1,"Join Call"),e.qZA()),2&n){const t=e.oxw().$implicit;e.Q6J("href",t.meeting_link,e.LSH)}}function pe(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",2),e._UZ(1,"div",3),e.TgZ(2,"div",4)(3,"div",5),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"div",6),e._uU(7),e.qZA(),e.TgZ(8,"div",7)(9,"app-icon",8),e._uU(10,"room"),e.qZA(),e.TgZ(11,"a",9),e.NdJ("click",function(){const i=e.CHM(t).$implicit,c=e.oxw();return e.KtG(i.space||i.asset_id?c.locateSpace(i.space||i):"")}),e._uU(12),e.qZA()(),e.YNc(13,re,3,4,"div",10),e.YNc(14,le,2,1,"div",11),e.qZA(),e.YNc(15,de,2,1,"a",12),e.qZA()}if(2&n){const t=s.$implicit;e.xp6(1),e.ekj("bg-primary",t.asset_id),e.xp6(3),e.hij(" ",e.xi3(5,12,t.date,"shortTime")," "),e.xp6(3),e.hij(" ",t.title," "),e.xp6(4),e.ekj("underline",!!t.space||!!t.asset_id),e.Q6J("matTooltip",t.space?"Locate Space":""),e.xp6(1),e.AsE(" ",(null==t.space?null:t.space.display_name)||(null==t.space?null:t.space.name)||t.asset_name||"<No Location>"," ",null!=t.space&&null!=t.space.level&&t.space.level.display_name||null!=t.space&&null!=t.space.level&&t.space.level.name?", "+t.space.level.display_name||0:""," "),e.xp6(1),e.Q6J("ngIf",t.guests),e.xp6(1),e.Q6J("ngIf",t.guests),e.xp6(1),e.Q6J("ngIf",t.meeting_link)}}let me=(()=>{class n{constructor(t,a,o,i){this._org=t,this._state=a,this._schedule=o,this._dialog=i,this.today=new Date,this.max_date=(0,ne.Z)(this.today,4),this.upcoming_events=this._state.upcoming_events,this.event_list=this._schedule.events.pipe((0,w.U)(c=>c.filter(l=>"done"!==l.state&&!0!==l.is_done).map(l=>l.space?l:{...l,space:{name:l.asset_name||l.asset_id,map_id:l.asset_id,level:this._org.levelWithID(l.zones),zones:l.zones}})))}ngOnInit(){this._state.pollUpcomingEvents(),this._schedule.startPolling()}ngOnDestroy(){this._state.stopPollingUpcomingEvents(),this._schedule.stopPolling()}locateSpace(t){this._dialog.open(ae.p6,{data:{item:{...t,level:null}}})}trackByFn(t,a){return a?`${a.id}|${a.date}`:void 0}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(M.w7),e.Y36(Z),e.Y36(oe.I),e.Y36(y.uw))},n.\u0275cmp=e.Xpm({type:n,selectors:[["a-dashboard-upcoming"]],decls:5,vars:7,consts:[[1,"m-0","mb-4","font-medium","text-xl"],["name","event","class","flex bg-white shadow rounded-lg relative overflow-hidden mb-4 dark:bg-neutral-700",4,"ngFor","ngForOf"],["name","event",1,"flex","bg-white","shadow","rounded-lg","relative","overflow-hidden","mb-4","dark:bg-neutral-700"],["name","status",1,"absolute","rounded-lg"],["name","details",1,"flex-1","mr-2"],["time","",1,"text-primary","dark:text-secondary","text-sm","font-bold","mb-2"],["name","title",1,"text-sm","font-bold","mb-2"],["name","space",1,"text-xs","flex","items-center","mb-2"],[1,"mr-2"],[1,"text-black","dark:text-white",3,"matTooltip","click"],["name","attendees","class","text-xs flex items-center mb-2",4,"ngIf"],["name","guests","class","flex space-x-2 text-sm",4,"ngIf"],["button","","btn","","matRipple","","class","uppercase h-12",3,"href",4,"ngIf"],["name","attendees",1,"text-xs","flex","items-center","mb-2"],[1,"mr-2",3,"icon"],["name","guests",1,"flex","space-x-2","text-sm"],[3,"user",4,"ngFor","ngForOf"],[3,"user"],["button","","btn","","matRipple","",1,"uppercase","h-12",3,"href"]],template:function(t,a){1&t&&(e.TgZ(0,"h3",0),e._uU(1,"Your Bookings"),e.qZA(),e.YNc(2,pe,16,15,"div",1),e.ALo(3,"slice"),e.ALo(4,"async")),2&t&&(e.xp6(2),e.Q6J("ngForOf",e.Dn7(3,1,e.lcZ(4,5,a.event_list),0,3)))},dependencies:[d.sg,d.O5,C.o,I.k,v.wG,se.gM,d.Ov,d.OU,d.uU],styles:["[_nghost-%COMP%]{padding:1em;min-width:16rem}[name=event][_ngcontent-%COMP%]{padding:1rem 1rem 1rem 2rem}[name=status][_ngcontent-%COMP%]{top:1rem;left:-.8rem;height:2.5rem;width:1.6rem;background-color:#00529b}button[_ngcontent-%COMP%]{height:3em}app-icon[_ngcontent-%COMP%]{margin-left:-.25rem}\n/*# sourceMappingURL=dashboard-upcoming.component.ts-angular-inline--81.css.map*/"]}),n})();var T=r(9314),J=r(8750),ue=r(6508),ge=r(380);let he=(()=>{class n{constructor(){this.events=new e.vpe,this.form=new p.cw({name:new p.NI("",[p.kI.required]),description:new p.NI(""),sender:new p.NI(""),priority:new p.NI("")})}register(){this.form.markAllAsTouched(),this.form.valid&&this.events.emit({reason:"done",metadata:this.form.value})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["dashboard-delivery-modal"]],outputs:{events:"events"},decls:47,vars:1,consts:[[1,"flex","items-center","justify-between"],["icon","","mat-dialog-close",""],[1,"p-2","w-[24rem]",3,"formGroup"],["appearance","outline",1,"w-full"],["matInput","","placeholder","Name of items being delivered","formControlName","name"],["matInput","","placeholder","Description of items being delivered","formControlName","description"],["matInput","","placeholder","Name of sender","formControlName","sender"],["placeholder","Low","formControlName","priority"],[1,"p-2","flex","items-center","justify-center","border-t","border-gray-100"],["btn","","matRipple","",1,"w-32",3,"click"]],template:function(t,a){1&t&&(e.TgZ(0,"header",0)(1,"h3"),e._uU(2,"Register Delivery"),e.qZA(),e.TgZ(3,"button",1)(4,"app-icon"),e._uU(5,"close"),e.qZA()()(),e.TgZ(6,"main",2)(7,"div")(8,"label"),e._uU(9,"Name"),e.TgZ(10,"span"),e._uU(11,"*"),e.qZA(),e._uU(12,":"),e.qZA(),e.TgZ(13,"mat-form-field",3),e._UZ(14,"input",4),e.TgZ(15,"mat-error"),e._uU(16,"Name is required"),e.qZA()()(),e.TgZ(17,"div")(18,"label"),e._uU(19,"Description:"),e.qZA(),e.TgZ(20,"mat-form-field",3),e._UZ(21,"textarea",5),e.qZA()(),e.TgZ(22,"div")(23,"label"),e._uU(24,"Sender:"),e.qZA(),e.TgZ(25,"mat-form-field",3),e._UZ(26,"input",6),e.TgZ(27,"mat-error"),e._uU(28,"Sender is required"),e.qZA()()(),e.TgZ(29,"div")(30,"label"),e._uU(31,"Priority:"),e.qZA(),e.TgZ(32,"mat-form-field",3)(33,"mat-select",7)(34,"mat-option"),e._uU(35,"Very Low"),e.qZA(),e.TgZ(36,"mat-option"),e._uU(37,"Low"),e.qZA(),e.TgZ(38,"mat-option"),e._uU(39,"Normal"),e.qZA(),e.TgZ(40,"mat-option"),e._uU(41,"High"),e.qZA(),e.TgZ(42,"mat-option"),e._uU(43,"Very Height"),e.qZA()()()()(),e.TgZ(44,"footer",8)(45,"button",9),e.NdJ("click",function(){return a.register()}),e._uU(46," Register "),e.qZA()()),2&t&&(e.xp6(6),e.Q6J("formGroup",a.form))},dependencies:[p.Fj,p.JJ,p.JL,C.o,v.ey,J.KE,J.TO,ue.gD,v.wG,y.ZT,ge.Nt,p.sg,p.u]}),n})();function fe(n,s){if(1&n&&(e.TgZ(0,"div",7)(1,"div",8)(2,"div",9),e._uU(3),e.qZA(),e.TgZ(4,"div",10),e._uU(5),e.ALo(6,"date"),e.qZA()(),e._UZ(7,"div",11),e.qZA()),2&n){const t=s.$implicit;e.xp6(3),e.hij(" ",(null==t?null:t.name)||"Untitled Delivery"," "),e.xp6(2),e.hij(" ",t&&t.received?e.xi3(6,6,t.received,"medium"):"Not received"," "),e.xp6(2),e.ekj("bg-pending",!t.received)("bg-success",t.received)}}function ve(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",4),e.YNc(1,fe,8,9,"div",5),e.TgZ(2,"button",6),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.registerDelivery())}),e._uU(3," Register Delivery "),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.deliveries)}}function _e(n,s){1&n&&(e.TgZ(0,"div",12),e._uU(1," No registered deliveries "),e.qZA())}let be=(()=>{class n{constructor(t){this._dialog=t,this.deliveries=[{name:"USB-C Cables",received:Date.now()},{name:"Desk Fan"}]}registerDelivery(){var t=this;return(0,g.Z)(function*(){const a=t._dialog.open(he),o=yield Promise.race([a.componentInstance.events.pipe((0,A.P)(i=>"done"===i.reason)).toPromise(),a.afterClosed().toPromise()]);"done"===o.reason&&(t.deliveries.push(o.metadata),a.close())})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(y.uw))},n.\u0275cmp=e.Xpm({type:n,selectors:[["dashboard-deliveries"]],decls:6,vars:2,consts:[[1,"m-0","my-2","font-medium","text-xl"],[1,"bg-white","shadow","p-2","rounded","dark:bg-neutral-700"],["class","divide-y",4,"ngIf","ngIfElse"],["empty_state",""],[1,"divide-y"],["class","flex items-center py-2",4,"ngFor","ngForOf"],["matRipple","",1,"w-full","mt-2",3,"click"],[1,"flex","items-center","py-2"],[1,"flex-1","pl-2"],[1,""],[1,"text-xs","opacity-60"],[1,"m-4","h-2","w-2","rounded-full"],[1,"p-8","flex","items-center","justify-center","opacity-40"]],template:function(t,a){if(1&t&&(e.TgZ(0,"h3",0),e._uU(1,"Deliveries"),e.qZA(),e.TgZ(2,"div",1),e.YNc(3,ve,4,1,"div",2),e.qZA(),e.YNc(4,_e,2,0,"ng-template",null,3,e.W1O)),2&t){const o=e.MAs(5);e.xp6(3),e.Q6J("ngIf",null==a.deliveries?null:a.deliveries.length)("ngIfElse",o)}},dependencies:[d.sg,d.O5,v.wG,d.uU]}),n})();const xe=["input"],Ze=function(){return{class:"material-icons",content:"close"}};function ye(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",15),e._UZ(1,"a-user-avatar",16),e.TgZ(2,"div",17),e._uU(3),e.qZA(),e.TgZ(4,"button",18),e.NdJ("click",function(){const i=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.removeUser(i))}),e._UZ(5,"app-icon",19),e.qZA()()}if(2&n){const t=s.$implicit;e.xp6(1),e.Q6J("user",t),e.xp6(2),e.hij(" ",t.name," "),e.xp6(2),e.Q6J("icon",e.DdM(3,Ze))}}function Ce(n,s){if(1&n&&(e.TgZ(0,"button",20),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.hij(" ",t.search_str?'No matches for "'+t.search_str+'"':"Type to search for users..."," ")}}function Te(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"button",21),e.NdJ("click",function(){const i=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.addUser(i))}),e.TgZ(1,"div",22),e._UZ(2,"a-user-avatar",23),e.TgZ(3,"div",24)(4,"div"),e._uU(5),e.qZA(),e.TgZ(6,"div",25),e._uU(7),e.qZA()()()()}if(2&n){const t=s.$implicit;e.xp6(2),e.Q6J("user",t),e.xp6(3),e.Oqu(t.name),e.xp6(2),e.hij(" ",t.email," ")}}function De(n,s){1&n&&e._UZ(0,"dashboard-deliveries")}const Ue=function(){return{class:"material-icons",content:"person_add"}};let Ae=(()=>{class n extends m.cx{get can_deliver(){return!!this._settings.get("app.can_deliver")}constructor(t,a){super(),this._state=t,this._settings=a,this.contacts=this._state.contacts,this.search_results=this._state.search_results,this.addUser=o=>this._state.addContact(o),this.removeUser=o=>this._state.removeContact(o),this.updateSearch=o=>this._state.setOptions({search:o}),this.search_str=""}ngOnInit(){this._state.updateContacts()}focusInput(){this.timeout("focus",()=>{this._input_el&&this._input_el.nativeElement.focus()})}clearInput(){this.search_str="",this._state.setOptions({search:""})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(Z),e.Y36(m.gb))},n.\u0275cmp=e.Xpm({type:n,selectors:[["a-dashboard-contacts"]],viewQuery:function(t,a){if(1&t&&e.Gf(xe,5),2&t){let o;e.iGM(o=e.CRH())&&(a._input_el=o.first)}},features:[e.qOj],decls:21,vars:18,consts:[[1,"m-0","mb-2","font-medium","text-xl"],["name","contact-list",1,"bg-gray-400","dark:bg-neutral-600","border","border-gray-200","dark:border-neutral-500","shadow","rounded-lg","p-2","pl-0","space-y-2","flex","flex-wrap"],["name","contact","class","bg-white rounded-lg flex-1 flex flex-col items-center p-2 relative dark:bg-neutral-700",4,"ngFor","ngForOf"],["name","contact","btn","","matRipple","",1,"rounded-lg","flex-1","w-full","dark:bg-neutral-800",3,"matMenuTriggerFor","menuOpened","menuClosed"],[1,"flex","flex-col","items-center","p-4","text-black","dark:text-white","w-full"],[1,"text-2xl",3,"icon"],[1,"w-full","leading-tight","whitespace-normal"],["xPosition","before"],["menu","matMenu"],["mat-menu-item","",1,"p-0",3,"click"],["placeholder","Search for user...",1,"w-full","p-2","text-base",3,"ngModel","ngModelChange"],["input",""],["mat-menu-item","",4,"ngIf"],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"],[4,"ngIf"],["name","contact",1,"bg-white","rounded-lg","flex-1","flex","flex-col","items-center","p-2","relative","dark:bg-neutral-700"],[1,"text-2xl","mb-2",3,"user"],["name","contact-name",1,"text-sm","mb-2"],["icon","","name","close",3,"click"],[3,"icon"],["mat-menu-item",""],["mat-menu-item","",3,"click"],[1,"flex","items-center","leading-tight"],[1,"text-xl","mr-2",3,"user"],[1,"flex-1"],[1,"text-xs","text-dark-fade"]],template:function(t,a){if(1&t&&(e.TgZ(0,"h3",0),e._uU(1,"Colleagues"),e.qZA(),e.TgZ(2,"div",1),e.YNc(3,ye,6,4,"div",2),e.ALo(4,"async"),e.TgZ(5,"button",3),e.NdJ("menuOpened",function(){return a.focusInput()})("menuClosed",function(){return a.clearInput()}),e.TgZ(6,"div",4),e._UZ(7,"app-icon",5),e.TgZ(8,"span",6),e._uU(9,"Click to add a person to contacts"),e.qZA()()()(),e.TgZ(10,"mat-menu",7,8)(12,"div",9),e.NdJ("click",function(i){return i.stopPropagation(),i.preventDefault()}),e.TgZ(13,"input",10,11),e.NdJ("ngModelChange",function(i){return a.search_str=i})("ngModelChange",function(){return a.updateSearch(a.search_str)}),e.qZA()(),e.YNc(15,Ce,2,1,"button",12),e.ALo(16,"async"),e.YNc(17,Te,8,3,"button",13),e.ALo(18,"slice"),e.ALo(19,"async"),e.qZA(),e.YNc(20,De,1,0,"dashboard-deliveries",14)),2&t){const o=e.MAs(11);let i;e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,7,a.contacts)),e.xp6(2),e.Q6J("matMenuTriggerFor",o),e.xp6(2),e.Q6J("icon",e.DdM(17,Ue)),e.xp6(6),e.Q6J("ngModel",a.search_str),e.xp6(2),e.Q6J("ngIf",!(null!=(i=e.lcZ(16,9,a.search_results))&&i.length)),e.xp6(2),e.Q6J("ngForOf",e.Dn7(18,11,e.lcZ(19,15,a.search_results),0,8)),e.xp6(3),e.Q6J("ngIf",a.can_deliver)}},dependencies:[d.sg,d.O5,p.Fj,p.JJ,p.On,C.o,I.k,T.VK,T.OP,T.p6,v.wG,be,d.Ov,d.OU],styles:["[_nghost-%COMP%]{padding:1em;min-width:16rem}[name=contact-list][_ngcontent-%COMP%]{padding:0 .5rem .5rem 0}[name=contact][_ngcontent-%COMP%]{min-width:8rem;width:8rem;margin-left:.5rem;margin-top:.5rem}[name=contact-name][_ngcontent-%COMP%]{font-weight:400}[name=dot][_ngcontent-%COMP%]{height:8px;width:8px;border-radius:8px;background-color:#22992e}button[name=close][_ngcontent-%COMP%]{position:absolute;display:none;top:.25rem;right:.25rem}[name=contact][_ngcontent-%COMP%]:hover button[name=close]{display:initial}button[name=contact][_ngcontent-%COMP%]{background-color:#f0f0f0;border:none;min-width:calc(100% - .5rem)!important}\n/*# sourceMappingURL=dashboard-contacts.component.ts-angular-inline--80.css.map*/"]}),n})();const we=["dashboard",""];function Oe(n,s){1&n&&e._UZ(0,"a-dashboard-availability",4)}function Me(n,s){1&n&&e._UZ(0,"a-dashboard-contacts",4)}const Fe=[{path:"",component:(()=>{class n{constructor(t){this._settings=t}get hide_availability(){return!1!==this._settings.get("app.hide_availability")}get hide_contacts(){return!1!==this._settings.get("app.hide_contacts")}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(m.gb))},n.\u0275cmp=e.Xpm({type:n,selectors:[["","dashboard",""]],attrs:we,decls:8,vars:2,consts:[[1,"flex-1","flex","sm:flex-row","flex-col-reverse","h-1/2","bg-gray-200","dark:bg-neutral-600","dark:text-white"],[1,"relative","z-0","flex","flex-col","flex-1","h-1/2","sm:h-auto","overflow-hidden"],[1,"flex","flex-1","px-0","sm:px-8","flex-wrap","overflow-auto","h-px","sm:h-auto"],["class","flex-1 min-w-64",4,"ngIf"],[1,"flex-1","min-w-64"]],template:function(t,a){1&t&&(e._UZ(0,"topbar"),e.TgZ(1,"div",0)(2,"div",1)(3,"main",2),e.YNc(4,Oe,1,0,"a-dashboard-availability",3),e._UZ(5,"a-dashboard-upcoming",4),e.YNc(6,Me,1,0,"a-dashboard-contacts",3),e.qZA()()(),e._UZ(7,"footer-menu")),2&t&&(e.xp6(4),e.Q6J("ngIf",!a.hide_availability),e.xp6(2),e.Q6J("ngIf",!a.hide_contacts))},dependencies:[d.O5,L.o,Q.i,te,me,Ae],styles:["[_nghost-%COMP%]{position:absolute;inset:0;overflow:hidden;display:flex;flex-direction:column}main[_ngcontent-%COMP%]{min-height:50%}.top[_ngcontent-%COMP%]{background-color:#007ac8}a[button].tile[_ngcontent-%COMP%]{flex:1;border-radius:0;background-color:#fff;color:#000000d9;border:none;border-right:1px solid #ccc}a[button].tile[_ngcontent-%COMP%]:last-child{border:none}\n/*# sourceMappingURL=dashboard.component.ts-angular-inline--82.css.map*/"]}),n})()}];let Ne=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,p.u5,k.v,p.UX,P.Cl,U.Bz.forChild(Fe)]}),n})()}}]);
//# sourceMappingURL=apps_workplace_src_app_dashboard_dashboard_module_ts.js.map