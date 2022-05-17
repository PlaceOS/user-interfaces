"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["apps_workplace_src_app_dashboard_dashboard_module_ts"],{4571:(Ft,C,i)=>{i.r(C),i.d(C,{DashboardModule:()=>Nt});var P=i(5629),d=i(6362),m=i(587),T=i(9504),F=i(1992),u=i(6365),t=i(6723),J=i(4187),h=i(4929),g=i(3499),f=i(4505),I=i(4139),Q=i(823),L=i(9095),Y=i(7418),j=i(9128),D=i(5670),S=i(9151),U=i(6942),A=i(3200),q=i(8426),_=i(6862),O=i(3619),E=i(9434),G=i(4509);let b=(()=>{class n extends u.KG{constructor(e,o){super(),this._calendar=e,this._org=o,this._options=new f.X({}),this._free_spaces=new f.X([]),this._upcoming_events=new f.X([]),this._contacts=new f.X([]),this._level_occupancy=new f.X([]),this.free_spaces=this._free_spaces.asObservable(),this.upcoming_events=this._upcoming_events.asObservable(),this.contacts=this._contacts.asObservable(),this.options=this._options.asObservable(),this.search_results=this._options.pipe((0,Q.b)(500),(0,L.w)(({search:s})=>s?(0,_.VE)(s):(0,I.of)([])),(0,Y.K)(s=>[]),(0,j.d)(1)),this.level_occupancy=this._level_occupancy.asObservable(),this.init()}init(){return(0,h.mG)(this,void 0,void 0,function*(){yield this._org.initialised.pipe((0,D.P)(s=>s)).toPromise(),this.subscription("building",this._org.active_building.pipe((0,S.h)(s=>!!s)).subscribe(()=>this.updateBuildingMetadata()));let e=this._org.binding("contact_tracing");if(!e)return;const o=(0,g.rTZ)(e,"AreaManagement").binding("overview");o.listen().subscribe(s=>this.updateOccupancy(s||{})),o.bind()})}setOptions(e){this._options.next(Object.assign(Object.assign({},this._options.getValue()),e))}pollFreeSpaces(e=1e4){this.updateFreeSpaces(),this.interval("free_spaces",()=>this.updateFreeSpaces(),e)}stopPollingFreeSpaces(){this.clearInterval("free_spaces")}pollUpcomingEvents(e=1e4){this.updateUpcomingEvents(),this.interval("upcoming_events",()=>this.updateUpcomingEvents(),e)}stopPollingUpcomingEvents(){this.clearInterval("upcoming_events")}updateContacts(){return(0,h.mG)(this,void 0,void 0,function*(){const e=yield(0,g.rlq)((0,u.ar)().id,"contacts").toPromise();this._contacts.next((e.details instanceof Array?e.details:[]).map(s=>new _.n5(s)))})}addContact(e){return(0,h.mG)(this,void 0,void 0,function*(){let o=[...this._contacts.getValue()];o.push(e),o=(0,u.Tw)(o,"email");const s=yield(0,g.Ymr)((0,u.ar)().id,{name:"contacts",description:"Contacts for the User",details:o}).toPromise();this._contacts.next((s.details instanceof Array?s.details:[]).map(c=>new _.n5(c)))})}removeContact(e){return(0,h.mG)(this,void 0,void 0,function*(){let o=[...this._contacts.getValue()];o=o.filter(c=>c.email!==e.email);const s=yield(0,g.Ymr)((0,u.ar)().id,{name:"contacts",description:"Contacts for the User",details:o}).toPromise();this._contacts.next((s.details instanceof Array?s.details:[]).map(c=>new _.n5(c)))})}updateOccupancy(e){return(0,h.mG)(this,void 0,void 0,function*(){const o=[...this._org.levels];o.sort((s,r)=>{var c,p;return(null===(c=e[s.id])||void 0===c?void 0:c.recommendation)-(null===(p=e[r.id])||void 0===p?void 0:p.recommendation)}),this._level_occupancy.next(o)})}updateFreeSpaces(){return(0,h.mG)(this,void 0,void 0,function*(){if(!this._org.building)return;const e=Math.floor((new Date).valueOf()/1e3),o=Math.floor((0,A.Z)(new Date).valueOf()/1e3),s=yield this._calendar.freeBusy({period_start:e,period_end:o,zone_ids:this._org.building.id}).pipe((0,U.U)(r=>r.filter(c=>!c.availability.length||c.availability.find(p=>"busy"!==p.status)))).toPromise();s.sort((r,c)=>r.capacity-c.capacity),this._free_spaces.next(s)})}updateUpcomingEvents(){return(0,h.mG)(this,void 0,void 0,function*(){const e=Math.floor((new Date).valueOf()/1e3),o=Math.floor((0,A.Z)(new Date).valueOf()/1e3),c=[...yield(0,q.u$)({period_start:e,period_end:o,calendars:(0,u.ar)().email}).toPromise().catch(p=>[]),...yield(0,G.F2)({period_start:e,period_end:o,type:"desk",user:(0,u.ar)().email}).toPromise().catch(p=>[])].sort((p,l)=>p.date-l.date);this._upcoming_events.next(c)})}updateBuildingMetadata(){return(0,h.mG)(this,void 0,void 0,function*(){const e=this._org.building,o=yield(0,g.rlq)(e.id,"bindings").toPromise();if(!o.details.occupancy)return;const s=o.details.occupancy,r=(0,g.rTZ)(s.sys,s.module,s.index);!r||(this._occupancy_binding&&this._occupancy_binding.unbind(),this._occupancy_binding=r.binding("occupancy"),this._occupancy_binding.bind(),this.subscription("occupancy_binding",this._occupancy_binding.listen().subscribe(c=>{const p=Object.keys(c).map(l=>Object.assign({id:l},c[l]));p.sort((l,Pt)=>l.recommendation_factor-Pt.recommendation_factor),this._level_occupancy.next(p.map(l=>this._org.levelWithID([l.id])))})))})}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(E.ot),t.LFG(O.w7))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var v=i(7317);const w=function(){return["/explore"]},k=function(n){return{level:n}};function $(n,a){if(1&n&&(t.TgZ(0,"a",7)(1,"div",8),t._uU(2),t.qZA()()),2&n){const e=a.$implicit;t.Q6J("routerLink",t.DdM(3,w))("queryParams",t.VKq(4,k,e.id)),t.xp6(2),t.hij(" ",e.display_name||e.name,"\n")}}function X(n,a){1&n&&(t.TgZ(0,"span",9),t._uU(1,"No free spaces in building"),t.qZA())}const z=function(n){return{space:n}};function B(n,a){if(1&n&&(t.TgZ(0,"a",7)(1,"div",8),t._uU(2),t.qZA()()),2&n){const e=a.$implicit;t.Q6J("routerLink",t.DdM(3,w))("queryParams",t.VKq(4,z,e.id)),t.xp6(2),t.hij(" ",e.display_name||e.name," ")}}function R(n,a){1&n&&(t.TgZ(0,"span",9),t._uU(1,"No free spaces"),t.qZA())}function V(n,a){if(1&n&&(t.TgZ(0,"div",10)(1,"div",2)(2,"div"),t._uU(3,"Spaces"),t.qZA()(),t.TgZ(4,"div",11),t.YNc(5,B,3,6,"a",4),t.ALo(6,"slice"),t.ALo(7,"async"),t.YNc(8,R,2,0,"span",5),t.ALo(9,"async"),t.qZA()()),2&n){const e=t.oxw();t.xp6(5),t.Q6J("ngForOf",t.Dn7(6,2,t.lcZ(7,6,e.space_list),0,3)),t.xp6(3),t.Q6J("ngIf",!t.lcZ(9,8,e.space_list).length)}}let H=(()=>{class n{constructor(e){this._state=e,this.space_list=this._state.free_spaces,this.levels_free=this._state.level_occupancy}ngOnInit(){return(0,h.mG)(this,void 0,void 0,function*(){this._state.pollFreeSpaces()})}ngOnDestroy(){this._state.stopPollingFreeSpaces()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(b))},n.\u0275cmp=t.Xpm({type:n,selectors:[["a-dashboard-availability"]],decls:14,vars:13,consts:[[1,"m-0","font-medium","text-xl"],[1,"flex","flex-col","items-center","p-2","bg-white","shadow","my-4","rounded-lg"],[1,"flex","items-center","w-full","mb-2"],["free-levels","",1,"items","space-y-2","w-full"],["button","","mat-button","","class","w-full",3,"routerLink","queryParams",4,"ngFor","ngForOf"],["class","text-dark-fade text-sm mb-2",4,"ngIf"],["free-spaces","","class","flex items-center flex-col rounded-lg bg-white shadow my-4 p-2",4,"ngIf"],["button","","mat-button","",1,"w-full",3,"routerLink","queryParams"],[1,"max-w-full","truncate"],[1,"text-dark-fade","text-sm","mb-2"],["free-spaces","",1,"flex","items-center","flex-col","rounded-lg","bg-white","shadow","my-4","p-2"],[1,"items","space-y-2","w-full"]],template:function(e,o){if(1&e&&(t.TgZ(0,"h3",0),t._uU(1,"Available Now"),t.qZA(),t.TgZ(2,"div",1)(3,"div",2)(4,"div"),t._uU(5,"Building Levels"),t.qZA()(),t.TgZ(6,"div",3),t.YNc(7,$,3,6,"a",4),t.ALo(8,"slice"),t.ALo(9,"async"),t.YNc(10,X,2,0,"span",5),t.ALo(11,"async"),t.qZA()(),t.YNc(12,V,10,10,"div",6),t.ALo(13,"async")),2&e){let s;t.xp6(7),t.Q6J("ngForOf",t.Dn7(8,3,t.lcZ(9,7,o.levels_free),0,2)),t.xp6(3),t.Q6J("ngIf",!t.lcZ(11,9,o.levels_free).length),t.xp6(2),t.Q6J("ngIf",null==(s=t.lcZ(13,11,o.space_list))?null:s.length)}},directives:[d.sg,v.zs,T.yS,d.O5],pipes:[d.OU,d.Ov],styles:["[_nghost-%COMP%]{padding:1em;min-width:16rem}\n/*# sourceMappingURL=dashboard-availability.component.ts-angular-inline--50.css.map*/"]}),n})();var K=i(8053),W=i(8442),tt=i(8676),x=i(5758),y=i(5306),et=i(89),M=i(9685);const nt=function(){return{class:"material-icons",content:"group"}};function ot(n,a){if(1&n&&(t.TgZ(0,"div",13),t._UZ(1,"app-icon",8),t._uU(2),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("icon",t.DdM(3,nt)),t.xp6(1),t.AsE(" ",null==e.guests?null:e.guests.length," Guest",1===(null==e.guests?null:e.guests.length)?"":"s"," ")}}function st(n,a){1&n&&t._UZ(0,"a-user-avatar",16),2&n&&t.Q6J("user",a.$implicit)}function at(n,a){if(1&n&&(t.TgZ(0,"div",14),t.YNc(1,st,1,1,"a-user-avatar",15),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",e.guests)}}function it(n,a){if(1&n&&(t.TgZ(0,"a",17),t._uU(1,"Join Call"),t.qZA()),2&n){const e=t.oxw().$implicit;t.Q6J("href",e.meeting_link,t.LSH)}}const rt=function(){return{class:"material-icons",content:"room"}};function ct(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",2),t._UZ(1,"div",3),t.TgZ(2,"div",4)(3,"div",5),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"div",6),t._uU(7),t.qZA(),t.TgZ(8,"div",7),t._UZ(9,"app-icon",8),t.TgZ(10,"a",9),t.NdJ("click",function(){const r=t.CHM(e).$implicit,c=t.oxw();return r.space||r.asset_id?c.locateSpace(r.space||r):""}),t._uU(11),t.qZA()(),t.YNc(12,ot,3,4,"div",10),t.YNc(13,at,2,1,"div",11),t.qZA(),t.YNc(14,it,2,1,"a",12),t.qZA()}if(2&n){const e=a.$implicit;t.xp6(1),t.ekj("bg-primary",e.asset_id),t.xp6(3),t.hij(" ",t.xi3(5,13,e.date,"shortTime")," "),t.xp6(3),t.hij(" ",e.title," "),t.xp6(2),t.Q6J("icon",t.DdM(16,rt)),t.xp6(1),t.ekj("underline",!!e.space||!!e.asset_id),t.Q6J("matTooltip",e.space?"Locate Space":""),t.xp6(1),t.AsE(" ",(null==e.space?null:e.space.display_name)||(null==e.space?null:e.space.name)||e.asset_name||"<No Location>"," ",null!=e.space&&null!=e.space.level&&e.space.level.display_name||null!=e.space&&null!=e.space.level&&e.space.level.name?", "+e.space.level.display_name||0:""," "),t.xp6(1),t.Q6J("ngIf",e.guests),t.xp6(1),t.Q6J("ngIf",e.guests),t.xp6(1),t.Q6J("ngIf",e.meeting_link)}}let lt=(()=>{class n{constructor(e,o,s,r){this._org=e,this._state=o,this._schedule=s,this._dialog=r,this.today=new Date,this.max_date=(0,K.Z)(this.today,4),this.upcoming_events=this._state.upcoming_events,this.event_list=this._schedule.events.pipe((0,U.U)(c=>c.filter(l=>"done"!==l.state&&!0!==l.is_done).map(l=>l.space?l:Object.assign(Object.assign({},l),{space:{name:l.asset_name||l.asset_id,map_id:l.asset_id,level:this._org.levelWithID(l.zones),zones:l.zones}}))))}ngOnInit(){this._state.pollUpcomingEvents(),this._schedule.startPolling()}ngOnDestroy(){this._state.stopPollingUpcomingEvents(),this._schedule.stopPolling()}locateSpace(e){this._dialog.open(W.p6,{data:{item:Object.assign(Object.assign({},e),{level:null})}})}trackByFn(e,o){return o?`${o.id}|${o.date}`:void 0}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(O.w7),t.Y36(b),t.Y36(tt.I),t.Y36(x.uw))},n.\u0275cmp=t.Xpm({type:n,selectors:[["a-dashboard-upcoming"]],decls:5,vars:7,consts:[[1,"m-0","mb-4","font-medium","text-xl"],["name","event","class","flex bg-white shadow rounded-lg relative overflow-hidden mb-4",4,"ngFor","ngForOf"],["name","event",1,"flex","bg-white","shadow","rounded-lg","relative","overflow-hidden","mb-4"],["name","status",1,"absolute","rounded-lg"],["name","details",1,"flex-1","mr-2"],["name","time",1,"text-sm","text-bold","mb-2"],["name","title",1,"text-sm","text-bold","mb-2"],["name","space",1,"text-xs","flex","items-center","mb-2"],[1,"mr-2",3,"icon"],[1,"text-black",3,"matTooltip","click"],["name","attendees","class","text-xs flex items-center mb-2",4,"ngIf"],["name","guests","class","flex space-x-2 text-sm",4,"ngIf"],["button","","mat-button","","class","uppercase h-12",3,"href",4,"ngIf"],["name","attendees",1,"text-xs","flex","items-center","mb-2"],["name","guests",1,"flex","space-x-2","text-sm"],[3,"user",4,"ngFor","ngForOf"],[3,"user"],["button","","mat-button","",1,"uppercase","h-12",3,"href"]],template:function(e,o){1&e&&(t.TgZ(0,"h3",0),t._uU(1,"Your Bookings"),t.qZA(),t.YNc(2,ct,15,17,"div",1),t.ALo(3,"slice"),t.ALo(4,"async")),2&e&&(t.xp6(2),t.Q6J("ngForOf",t.Dn7(3,1,t.lcZ(4,5,o.event_list),0,3)))},directives:[d.sg,y.o,et.gM,d.O5,M.k,v.zs],pipes:[d.OU,d.Ov,d.uU],styles:["[_nghost-%COMP%]{padding:1em;min-width:16rem}[name=time][_ngcontent-%COMP%]{color:#00529b}[name=event][_ngcontent-%COMP%]{padding:1rem 1rem 1rem 2rem}[name=status][_ngcontent-%COMP%]{top:1rem;left:-.8rem;height:2.5rem;width:1.6rem;background-color:#00529b}button[_ngcontent-%COMP%]{height:3em}app-icon[_ngcontent-%COMP%]{margin-left:-.25rem}\n/*# sourceMappingURL=dashboard-upcoming.component.ts-angular-inline--52.css.map*/"]}),n})();var Z=i(2796),N=i(4770),dt=i(4683),mt=i(1434),pt=i(1130);let ut=(()=>{class n{constructor(){this.events=new t.vpe,this.form=new m.cw({name:new m.NI("",[m.kI.required]),description:new m.NI(""),sender:new m.NI(""),priority:new m.NI("")})}register(){this.form.markAllAsTouched(),this.form.valid&&this.events.emit({reason:"done",metadata:this.form.value})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["dashboard-delivery-modal"]],outputs:{events:"events"},decls:47,vars:1,consts:[[1,"flex","items-center","justify-between"],["mat-icon-button","","mat-dialog-close",""],[1,"p-2","w-[24rem]",3,"formGroup"],["appearance","outline",1,"w-full"],["matInput","","placeholder","Name of items being delivered","formControlName","name"],["matInput","","placeholder","Description of items being delivered","formControlName","description"],["matInput","","placeholder","Name of sender","formControlName","sender"],["placeholder","Low","formControlName","priority"],[1,"p-2","flex","items-center","justify-center","border-t","border-gray-100"],["mat-button","",1,"w-32",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"header",0)(1,"h3"),t._uU(2,"Register Delivery"),t.qZA(),t.TgZ(3,"button",1)(4,"app-icon"),t._uU(5,"close"),t.qZA()()(),t.TgZ(6,"main",2)(7,"div")(8,"label"),t._uU(9,"Name"),t.TgZ(10,"span"),t._uU(11,"*"),t.qZA(),t._uU(12,":"),t.qZA(),t.TgZ(13,"mat-form-field",3),t._UZ(14,"input",4),t.TgZ(15,"mat-error"),t._uU(16,"Name is required"),t.qZA()()(),t.TgZ(17,"div")(18,"label"),t._uU(19,"Description:"),t.qZA(),t.TgZ(20,"mat-form-field",3),t._UZ(21,"textarea",5),t.qZA()(),t.TgZ(22,"div")(23,"label"),t._uU(24,"Sender:"),t.qZA(),t.TgZ(25,"mat-form-field",3),t._UZ(26,"input",6),t.TgZ(27,"mat-error"),t._uU(28,"Sender is required"),t.qZA()()(),t.TgZ(29,"div")(30,"label"),t._uU(31,"Priority:"),t.qZA(),t.TgZ(32,"mat-form-field",3)(33,"mat-select",7)(34,"mat-option"),t._uU(35,"Very Low"),t.qZA(),t.TgZ(36,"mat-option"),t._uU(37,"Low"),t.qZA(),t.TgZ(38,"mat-option"),t._uU(39,"Normal"),t.qZA(),t.TgZ(40,"mat-option"),t._uU(41,"High"),t.qZA(),t.TgZ(42,"mat-option"),t._uU(43,"Very Height"),t.qZA()()()()(),t.TgZ(44,"footer",8)(45,"button",9),t.NdJ("click",function(){return o.register()}),t._uU(46," Register "),t.qZA()()),2&e&&(t.xp6(6),t.Q6J("formGroup",o.form))},directives:[v.lW,x.ZT,y.o,m.JL,m.sg,N.KE,dt.Nt,m.Fj,m.JJ,m.u,N.TO,mt.gD,pt.ey],styles:[""]}),n})();function ht(n,a){if(1&n&&(t.TgZ(0,"div",7)(1,"div",8)(2,"div",9),t._uU(3),t.qZA(),t.TgZ(4,"div",10),t._uU(5),t.ALo(6,"date"),t.qZA()(),t._UZ(7,"div",11),t.qZA()),2&n){const e=a.$implicit;t.xp6(3),t.hij(" ",(null==e?null:e.name)||"Untitled Delivery"," "),t.xp6(2),t.hij(" ",e&&e.received?t.xi3(6,6,e.received,"medium"):"Not received"," "),t.xp6(2),t.ekj("bg-pending",!e.received)("bg-success",e.received)}}function gt(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",4),t.YNc(1,ht,8,9,"div",5),t.TgZ(2,"button",6),t.NdJ("click",function(){return t.CHM(e),t.oxw().registerDelivery()}),t._uU(3," Register Delivery "),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.deliveries)}}function ft(n,a){1&n&&(t.TgZ(0,"div",12),t._uU(1," No registered deliveries "),t.qZA())}let vt=(()=>{class n{constructor(e){this._dialog=e,this.deliveries=[{name:"USB-C Cables",received:Date.now()},{name:"Desk Fan"}]}registerDelivery(){return(0,h.mG)(this,void 0,void 0,function*(){const e=this._dialog.open(ut),o=yield Promise.race([e.componentInstance.events.pipe((0,D.P)(s=>"done"===s.reason)).toPromise(),e.afterClosed().toPromise()]);"done"===o.reason&&(this.deliveries.push(o.metadata),e.close())})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(x.uw))},n.\u0275cmp=t.Xpm({type:n,selectors:[["dashboard-deliveries"]],decls:6,vars:2,consts:[[1,"m-0","my-2","font-medium","text-xl"],[1,"bg-white","shadow","p-2","rounded"],["class","divide-y",4,"ngIf","ngIfElse"],["empty_state",""],[1,"divide-y"],["class","flex items-center py-2",4,"ngFor","ngForOf"],["mat-button","",1,"w-full","mt-2",3,"click"],[1,"flex","items-center","py-2"],[1,"flex-1","pl-2"],[1,""],[1,"text-xs","opacity-60"],[1,"m-4","h-2","w-2","rounded-full"],[1,"p-8","flex","items-center","justify-center","opacity-40"]],template:function(e,o){if(1&e&&(t.TgZ(0,"h3",0),t._uU(1,"Deliveries"),t.qZA(),t.TgZ(2,"div",1),t.YNc(3,gt,4,1,"div",2),t.qZA(),t.YNc(4,ft,2,0,"ng-template",null,3,t.W1O)),2&e){const s=t.MAs(5);t.xp6(3),t.Q6J("ngIf",null==o.deliveries?null:o.deliveries.length)("ngIfElse",s)}},directives:[d.O5,d.sg,v.lW],pipes:[d.uU],styles:[""]}),n})();const _t=["input"],bt=function(){return{class:"material-icons",content:"close"}};function xt(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",15),t._UZ(1,"a-user-avatar",16),t.TgZ(2,"div",17),t._uU(3),t.qZA(),t.TgZ(4,"button",18),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return t.oxw().removeUser(r)}),t._UZ(5,"app-icon",19),t.qZA()()}if(2&n){const e=a.$implicit;t.xp6(1),t.Q6J("user",e),t.xp6(2),t.hij(" ",e.name," "),t.xp6(2),t.Q6J("icon",t.DdM(3,bt))}}function yt(n,a){if(1&n&&(t.TgZ(0,"button",20),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",e.search_str?'No matches for "'+e.search_str+'"':"Type to search for users..."," ")}}function Zt(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",21),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return t.oxw().addUser(r)}),t.TgZ(1,"div",22),t._UZ(2,"a-user-avatar",23),t.TgZ(3,"div",24)(4,"div"),t._uU(5),t.qZA(),t.TgZ(6,"div",25),t._uU(7),t.qZA()()()()}if(2&n){const e=a.$implicit;t.xp6(2),t.Q6J("user",e),t.xp6(3),t.Oqu(e.name),t.xp6(2),t.hij(" ",e.email," ")}}function Ct(n,a){1&n&&t._UZ(0,"dashboard-deliveries")}const Tt=function(){return{class:"material-icons",content:"person_add"}};let Dt=(()=>{class n extends u.KG{constructor(e,o){super(),this._state=e,this._settings=o,this.contacts=this._state.contacts,this.search_results=this._state.search_results,this.addUser=s=>this._state.addContact(s),this.removeUser=s=>this._state.removeContact(s),this.updateSearch=s=>this._state.setOptions({search:s}),this.search_str=""}get can_deliver(){return!!this._settings.get("app.can_deliver")}ngOnInit(){this._state.updateContacts()}focusInput(){this.timeout("focus",()=>{this._input_el&&this._input_el.nativeElement.focus()})}clearInput(){this.search_str="",this._state.setOptions({search:""})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(b),t.Y36(u.gb))},n.\u0275cmp=t.Xpm({type:n,selectors:[["a-dashboard-contacts"]],viewQuery:function(e,o){if(1&e&&t.Gf(_t,5),2&e){let s;t.iGM(s=t.CRH())&&(o._input_el=s.first)}},features:[t.qOj],decls:21,vars:18,consts:[[1,"m-0","mb-2","font-medium","text-xl"],["name","contact-list",1,"bg-gray-400","shadow","rounded-lg","p-2","pl-0","space-y-2","flex","flex-wrap"],["name","contact","class","bg-white rounded-lg flex-1 flex flex-col items-center p-2 relative",4,"ngFor","ngForOf"],["name","contact","mat-button","",1,"rounded-lg","flex-1","w-full",3,"matMenuTriggerFor","menuOpened","menuClosed"],[1,"flex","flex-col","items-center","p-4","text-black","w-full"],[1,"text-2xl",3,"icon"],[1,"w-full","leading-tight","whitespace-normal"],["xPosition","before"],["menu","matMenu"],["mat-menu-item","",1,"p-0",3,"click"],["placeholder","Search for user...",1,"w-full","p-2","text-base",3,"ngModel","ngModelChange"],["input",""],["mat-menu-item","",4,"ngIf"],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"],[4,"ngIf"],["name","contact",1,"bg-white","rounded-lg","flex-1","flex","flex-col","items-center","p-2","relative"],[1,"text-2xl","mb-2",3,"user"],["name","contact-name",1,"text-sm","mb-2"],["mat-icon-button","","name","close",3,"click"],[3,"icon"],["mat-menu-item",""],["mat-menu-item","",3,"click"],[1,"flex","items-center","leading-tight"],[1,"text-xl","mr-2",3,"user"],[1,"flex-1"],[1,"text-xs","text-dark-fade"]],template:function(e,o){if(1&e&&(t.TgZ(0,"h3",0),t._uU(1,"Colleagues"),t.qZA(),t.TgZ(2,"div",1),t.YNc(3,xt,6,4,"div",2),t.ALo(4,"async"),t.TgZ(5,"button",3),t.NdJ("menuOpened",function(){return o.focusInput()})("menuClosed",function(){return o.clearInput()}),t.TgZ(6,"div",4),t._UZ(7,"app-icon",5),t.TgZ(8,"span",6),t._uU(9,"Click to add a person to contacts"),t.qZA()()()(),t.TgZ(10,"mat-menu",7,8)(12,"div",9),t.NdJ("click",function(r){return r.stopPropagation(),r.preventDefault()}),t.TgZ(13,"input",10,11),t.NdJ("ngModelChange",function(r){return o.search_str=r})("ngModelChange",function(){return o.updateSearch(o.search_str)}),t.qZA()(),t.YNc(15,yt,2,1,"button",12),t.ALo(16,"async"),t.YNc(17,Zt,8,3,"button",13),t.ALo(18,"slice"),t.ALo(19,"async"),t.qZA(),t.YNc(20,Ct,1,0,"dashboard-deliveries",14)),2&e){const s=t.MAs(11);let r;t.xp6(3),t.Q6J("ngForOf",t.lcZ(4,7,o.contacts)),t.xp6(2),t.Q6J("matMenuTriggerFor",s),t.xp6(2),t.Q6J("icon",t.DdM(17,Tt)),t.xp6(6),t.Q6J("ngModel",o.search_str),t.xp6(2),t.Q6J("ngIf",!(null!=(r=t.lcZ(16,9,o.search_results))&&r.length)),t.xp6(2),t.Q6J("ngForOf",t.Dn7(18,11,t.lcZ(19,15,o.search_results),0,8)),t.xp6(3),t.Q6J("ngIf",o.can_deliver)}},directives:[d.sg,M.k,v.lW,y.o,Z.p6,Z.VK,Z.OP,m.Fj,m.JJ,m.On,d.O5,vt],pipes:[d.Ov,d.OU],styles:["[_nghost-%COMP%]{padding:1em;min-width:16rem}[name=contact-list][_ngcontent-%COMP%]{padding:0 .5rem .5rem 0}[name=contact][_ngcontent-%COMP%]{min-width:8rem;width:8rem;margin-left:.5rem;margin-top:.5rem}[name=contact-name][_ngcontent-%COMP%]{font-weight:400}[name=dot][_ngcontent-%COMP%]{height:8px;width:8px;border-radius:8px;background-color:#22992e}button[name=close][_ngcontent-%COMP%]{position:absolute;display:none;top:.25rem;right:.25rem}[name=contact][_ngcontent-%COMP%]:hover   button[name=close][_ngcontent-%COMP%]{display:initial}button[name=contact][_ngcontent-%COMP%]{background-color:#f0f0f0;border:none;min-width:calc(100% - .5rem)!important}\n/*# sourceMappingURL=dashboard-contacts.component.ts-angular-inline--51.css.map*/"]}),n})();var Ut=i(6012);const At=["dashboard",""];function Ot(n,a){1&n&&t._UZ(0,"a-dashboard-availability",4)}function wt(n,a){1&n&&t._UZ(0,"a-dashboard-contacts",4)}const Mt=[{path:"",component:(()=>{class n{constructor(e){this._settings=e}get hide_availability(){return!1!==this._settings.get("app.hide_availability")}get hide_contacts(){return!1!==this._settings.get("app.hide_contacts")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.gb))},n.\u0275cmp=t.Xpm({type:n,selectors:[["","dashboard",""]],attrs:At,decls:8,vars:2,consts:[[1,"flex-1","flex","sm:flex-row","flex-col-reverse","h-1/2","bg-gray-200"],[1,"relative","z-0","flex","flex-col","flex-1","h-1/2","sm:h-auto","overflow-hidden"],[1,"flex","flex-1","px-0","sm:px-8","flex-wrap","overflow-auto","h-px","sm:h-auto"],["class","flex-1 min-w-64",4,"ngIf"],[1,"flex-1","min-w-64"]],template:function(e,o){1&e&&(t._UZ(0,"topbar"),t.TgZ(1,"div",0)(2,"div",1)(3,"main",2),t.YNc(4,Ot,1,0,"a-dashboard-availability",3),t._UZ(5,"a-dashboard-upcoming",4),t.YNc(6,wt,1,0,"a-dashboard-contacts",3),t.qZA()()(),t._UZ(7,"footer-menu")),2&e&&(t.xp6(4),t.Q6J("ngIf",!o.hide_availability),t.xp6(2),t.Q6J("ngIf",!o.hide_contacts))},directives:[J.o,d.O5,H,lt,Dt,Ut.i],styles:["[_nghost-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;display:flex;flex-direction:column}main[_ngcontent-%COMP%]{min-height:50%}.top[_ngcontent-%COMP%]{background-color:#007ac8}a[button].tile[_ngcontent-%COMP%]{flex:1;border-radius:0;background-color:#fff;color:#000000d9;border:none;border-right:1px solid #ccc}a[button].tile[_ngcontent-%COMP%]:last-child{border:none}\n/*# sourceMappingURL=dashboard.component.ts-angular-inline--53.css.map*/"]}),n})()}];let Nt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[d.ez,m.u5,F.v,m.UX,P.Cl,T.Bz.forChild(Mt)]]}),n})()}}]);
//# sourceMappingURL=apps_workplace_src_app_dashboard_dashboard_module_ts.js.map