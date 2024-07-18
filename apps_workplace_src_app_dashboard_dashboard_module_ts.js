"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["apps_workplace_src_app_dashboard_dashboard_module_ts"],{4640:(Ne,j,o)=>{o.r(j),o.d(j,{DashboardModule:()=>Oe});var G=o(4053),d=o(316),p=o(4456),I=o(9805),P=o(6591),u=o(1157),e=o(8559),U=o(7434),w=o(895),h=o(9204),v=o(6484),b=o(521),V=o(1536),S=o(9803),Y=o(1963),B=o(9314),A=o(7841),E=o(7871),X=o(8627),J=o(3602),k=o(5443),L=o(1874),R=o(6441),y=o(8113),_=o(8390),T=o(2185),H=o(4055),M=o(7915);let x=(()=>{class n extends u.Tv{constructor(t,a,s,i){super(),this._settings=t,this._calendar=a,this._org=s,this._event_form=i,this._options=new b.t({}),this._free_spaces=new b.t([]),this._upcoming_events=new b.t([]),this._contacts=new b.t([]),this._level_occupancy=new b.t([]),this.free_spaces=this._free_spaces.asObservable(),this.upcoming_events=this._upcoming_events.asObservable(),this.contacts=this._contacts.asObservable(),this.options=this._options.asObservable(),this.search_results=this._options.pipe((0,S.B)(500),(0,Y.n)(({search:c})=>c?(0,_.N8)(c):(0,V.of)([])),(0,B.W)(c=>[]),(0,A.t)(1)),this.level_occupancy=this._level_occupancy.asObservable(),this.init()}init(){var t=this;return(0,h.A)(function*(){yield t._org.initialised.pipe((0,E.$)(i=>i)).toPromise(),t.subscription("building",t._org.active_building.pipe((0,X.p)(i=>!!i)).subscribe(()=>t.updateBuildingMetadata()));let a=t._org.binding("contact_tracing");if(!a)return;const s=(0,v.f_4)(a,"AreaManagement").binding("overview");s.listen().subscribe(i=>t.updateOccupancy(i||{})),s.bind()})()}setOptions(t){this._options.next({...this._options.getValue(),...t})}pollFreeSpaces(t=1e4){this.updateFreeSpaces(),this.interval("free_spaces",()=>this.updateFreeSpaces(),t)}stopPollingFreeSpaces(){this.clearInterval("free_spaces")}pollUpcomingEvents(t=1e4){this.updateUpcomingEvents(),this.interval("upcoming_events",()=>this.updateUpcomingEvents(),t)}stopPollingUpcomingEvents(){this.clearInterval("upcoming_events")}updateContacts(){var t=this;return(0,h.A)(function*(){const a=yield(0,v.bpY)((0,u.Ny)().id,"contacts").toPromise();t._contacts.next((a.details instanceof Array?a.details:[]).map(i=>new _.KJ(i)))})()}addContact(t){var a=this;return(0,h.A)(function*(){let s=[...a._contacts.getValue()];s.push(t),s=(0,u.Am)(s,"email");const i=yield(0,v.D58)((0,u.Ny)().id,{name:"contacts",description:"Contacts for the User",details:s}).toPromise();a._contacts.next((i.details instanceof Array?i.details:[]).map(m=>new _.KJ(m)))})()}removeContact(t){var a=this;return(0,h.A)(function*(){let s=[...a._contacts.getValue()];s=s.filter(m=>m.email!==t.email);const i=yield(0,v.D58)((0,u.Ny)().id,{name:"contacts",description:"Contacts for the User",details:s}).toPromise();a._contacts.next((i.details instanceof Array?i.details:[]).map(m=>new _.KJ(m)))})()}updateOccupancy(t){var a=this;return(0,h.A)(function*(){const s=[...a._org.levels];s.sort((i,c)=>t[i.id]?.recommendation-t[c.id]?.recommendation),a._level_occupancy.next(s)})()}updateFreeSpaces(){var t=this;return(0,h.A)(function*(){if(!t._org.building)return;const a=Math.abs((0,L.o)(Date.now(),(0,R.D)(Date.now())));t._event_form.setOptions({zone_ids:[],capacity:0,features:[],show_fav:!1}),t._event_form.form.patchValue({date:Date.now(),duration:a});const s=yield t._event_form.available_spaces.pipe((0,J.s)(1)).toPromise();s.sort((i,c)=>i.capacity-c.capacity),t._free_spaces.next(s)})()}updateUpcomingEvents(){var t=this;return(0,h.A)(function*(){const a=Math.floor((new Date).valueOf()/1e3),s=Math.floor((0,R.D)(new Date).valueOf()/1e3),m=[...yield(t._settings.get("app.events.use_bookings")?(0,M.tj)({period_start:a,period_end:s,type:"room",email:(0,u.Ny)().email}).pipe((0,k.T)(l=>l.map(f=>(0,y.Uv)(f)))):(0,y.UU)({period_start:a,period_end:s,calendars:(0,u.Ny)().email})).toPromise().catch(l=>[]),...yield(0,M.tj)({period_start:a,period_end:s,type:"desk",user:(0,u.Ny)().email}).toPromise().catch(l=>[])].sort((l,f)=>l.date-f.date);t._upcoming_events.next(m)})()}updateBuildingMetadata(){var t=this;return(0,h.A)(function*(){const a=t._org.building,s=yield(0,v.bpY)(a.id,"bindings").toPromise();if(!s.details.occupancy)return;const i=s.details.occupancy,c=(0,v.f_4)(i.sys,i.module,i.index);c&&(t._occupancy_binding&&t._occupancy_binding.unbind(),t._occupancy_binding=c.binding("occupancy"),t._occupancy_binding.bind(),t.subscription("occupancy_binding",t._occupancy_binding.listen().subscribe(m=>{const l=Object.keys(m).map(f=>({id:f,...m[f]}));l.sort((f,$e)=>f.recommendation_factor-$e.recommendation_factor),t._level_occupancy.next(l.map(f=>t._org.levelWithID([f.id])))})))})()}static#e=this.\u0275fac=function(a){return new(a||n)(e.KVO(u.h$),e.KVO(H.IE),e.KVO(T.yb),e.KVO(y.Ws))};static#t=this.\u0275prov=e.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var g=o(5060);const O=()=>["/explore"],K=n=>({level:n}),z=n=>({space:n});function W(n,r){if(1&n&&(e.j41(0,"a",7)(1,"div",8),e.EFF(2),e.k0s()()),2&n){const t=r.$implicit;e.Y8G("routerLink",e.lJ4(3,O))("queryParams",e.eq3(4,K,t.id)),e.R7$(2),e.SpI(" ",t.display_name||t.name," ")}}function Q(n,r){1&n&&(e.j41(0,"span",9),e.EFF(1,"No free spaces in building"),e.k0s())}function Z(n,r){if(1&n&&(e.j41(0,"a",7)(1,"div",8),e.EFF(2),e.k0s()()),2&n){const t=r.$implicit;e.Y8G("routerLink",e.lJ4(3,O))("queryParams",e.eq3(4,z,t.id)),e.R7$(2),e.SpI(" ",t.display_name||t.name," ")}}function q(n,r){1&n&&(e.j41(0,"span",13),e.EFF(1,"No free spaces"),e.k0s())}function ee(n,r){if(1&n&&(e.j41(0,"div",10)(1,"div",2)(2,"div"),e.EFF(3,"Spaces"),e.k0s()(),e.j41(4,"div",11),e.DNE(5,Z,3,6,"a",4),e.nI1(6,"async"),e.nI1(7,"slice"),e.DNE(8,q,2,0,"span",12),e.nI1(9,"async"),e.k0s()()),2&n){const t=e.XpG();e.R7$(5),e.Y8G("ngForOf",e.brH(7,4,e.bMT(6,2,t.space_list),0,3)),e.R7$(3),e.Y8G("ngIf",!e.bMT(9,8,t.space_list).length)}}let te=(()=>{class n{constructor(t){this._state=t,this.space_list=this._state.free_spaces,this.levels_free=this._state.level_occupancy}ngOnInit(){var t=this;return(0,h.A)(function*(){t._state.pollFreeSpaces()})()}ngOnDestroy(){this._state.stopPollingFreeSpaces()}static#e=this.\u0275fac=function(a){return new(a||n)(e.rXU(x))};static#t=this.\u0275cmp=e.VBU({type:n,selectors:[["a-dashboard-availability"]],decls:14,vars:13,consts:[[1,"m-0","font-medium","text-xl"],[1,"flex","flex-col","items-center","p-2","bg-base-100","shadow","my-4","rounded-lg"],[1,"flex","items-center","w-full","mb-2"],["free-levels","",1,"items","space-y-2","w-full"],["btn","","matRipple","","class","w-full",3,"routerLink","queryParams",4,"ngFor","ngForOf"],["class","text-black/30/30 text-sm mb-2",4,"ngIf"],["free-spaces","","class","flex items-center flex-col rounded-lg bg-base-100 shadow my-4 p-2",4,"ngIf"],["btn","","matRipple","",1,"w-full",3,"routerLink","queryParams"],[1,"max-w-full","truncate"],[1,"text-black/30/30","text-sm","mb-2"],["free-spaces","",1,"flex","items-center","flex-col","rounded-lg","bg-base-100","shadow","my-4","p-2"],[1,"items","space-y-2","w-full"],["class","text-dark-fade text-sm mb-2",4,"ngIf"],[1,"text-dark-fade","text-sm","mb-2"]],template:function(a,s){if(1&a&&(e.j41(0,"h3",0),e.EFF(1,"Available Now"),e.k0s(),e.j41(2,"div",1)(3,"div",2)(4,"div"),e.EFF(5,"Building Levels"),e.k0s()(),e.j41(6,"div",3),e.DNE(7,W,3,6,"a",4),e.nI1(8,"async"),e.nI1(9,"slice"),e.DNE(10,Q,2,0,"span",5),e.nI1(11,"async"),e.k0s()(),e.DNE(12,ee,10,10,"div",6),e.nI1(13,"async")),2&a){let i;e.R7$(7),e.Y8G("ngForOf",e.brH(9,5,e.bMT(8,3,s.levels_free),0,2)),e.R7$(3),e.Y8G("ngIf",!e.bMT(11,9,s.levels_free).length),e.R7$(2),e.Y8G("ngIf",null==(i=e.bMT(13,11,s.space_list))?null:i.length)}},dependencies:[d.Sq,d.bT,g.r6,I.Wk,d.Jj,d.P9],styles:["[_nghost-%COMP%]{padding:1em;min-width:16rem}\n\n/*# sourceMappingURL=dashboard-availability.component.ts-angular-inline--85.css.map*/"]})}return n})();var ne=o(6337),se=o(4351),ae=o(9184),F=o(2587),C=o(9434),$=o(3574),ie=o(640);const oe=()=>({class:"material-icons",content:"group"});function re(n,r){if(1&n&&(e.j41(0,"div",13),e.nrm(1,"app-icon",14),e.EFF(2),e.k0s()),2&n){const t=e.XpG().$implicit;e.R7$(),e.Y8G("icon",e.lJ4(3,oe)),e.R7$(),e.Lme(" ",null==t.guests?null:t.guests.length," Guest",1===(null==t.guests?null:t.guests.length)?"":"s"," ")}}function ce(n,r){1&n&&e.nrm(0,"a-user-avatar",17),2&n&&e.Y8G("user",r.$implicit)}function le(n,r){if(1&n&&(e.j41(0,"div",15),e.DNE(1,ce,1,1,"a-user-avatar",16),e.k0s()),2&n){const t=e.XpG().$implicit;e.R7$(),e.Y8G("ngForOf",t.guests)}}function de(n,r){if(1&n&&(e.j41(0,"a",18),e.EFF(1,"Join Call"),e.k0s()),2&n){const t=e.XpG().$implicit;e.Y8G("href",t.meeting_link,e.B4B)}}function me(n,r){if(1&n){const t=e.RV6();e.j41(0,"div",2),e.nrm(1,"div",3),e.j41(2,"div",4)(3,"div",5),e.EFF(4),e.nI1(5,"date"),e.k0s(),e.j41(6,"div",6),e.EFF(7),e.k0s(),e.j41(8,"div",7)(9,"app-icon",8),e.EFF(10,"room"),e.k0s(),e.j41(11,"a",9),e.bIt("click",function(){const s=e.eBV(t).$implicit,i=e.XpG();return e.Njj(s.space||s.asset_id?i.locateSpace(s.space||s):"")}),e.EFF(12),e.k0s()(),e.DNE(13,re,3,4,"div",10)(14,le,2,1,"div",11),e.k0s(),e.DNE(15,de,2,1,"a",12),e.k0s()}if(2&n){const t=r.$implicit;e.R7$(),e.AVh("bg-primary",t.asset_id),e.R7$(3),e.SpI(" ",e.i5U(5,12,t.date,"shortTime")," "),e.R7$(3),e.SpI(" ",t.title," "),e.R7$(4),e.AVh("underline",!!t.space||!!t.asset_id),e.Y8G("matTooltip",t.space?"Locate Space":""),e.R7$(),e.Lme(" ",(null==t.space?null:t.space.display_name)||(null==t.space?null:t.space.name)||t.asset_name||"<No Location>"," ",null!=t.space&&null!=t.space.level&&t.space.level.display_name||null!=t.space&&null!=t.space.level&&t.space.level.name?", "+t.space.level.display_name||0:""," "),e.R7$(),e.Y8G("ngIf",t.guests),e.R7$(),e.Y8G("ngIf",t.guests),e.R7$(),e.Y8G("ngIf",t.meeting_link)}}let pe=(()=>{class n{constructor(t,a,s,i){this._org=t,this._state=a,this._schedule=s,this._dialog=i,this.today=new Date,this.max_date=(0,ne.P)(this.today,4),this.upcoming_events=this._state.upcoming_events,this.event_list=this._schedule.events.pipe((0,k.T)(c=>c.filter(l=>"done"!==l.state&&!0!==l.is_done).map(l=>l.space?l:{...l,space:{name:l.asset_name||l.asset_id,map_id:l.asset_id,level:this._org.levelWithID(l.zones),zones:l.zones}})))}ngOnInit(){this._state.pollUpcomingEvents(),this._schedule.startPolling()}ngOnDestroy(){this._state.stopPollingUpcomingEvents(),this._schedule.stopPolling()}locateSpace(t){this._dialog.open(se.VJ,{data:{item:{...t,level:null}}})}trackByFn(t,a){return a?`${a.id}|${a.date}`:void 0}static#e=this.\u0275fac=function(a){return new(a||n)(e.rXU(T.yb),e.rXU(x),e.rXU(ae.y),e.rXU(F.bZ))};static#t=this.\u0275cmp=e.VBU({type:n,selectors:[["a-dashboard-upcoming"]],decls:5,vars:7,consts:[[1,"m-0","mb-4","font-medium","text-xl"],["name","event","class","flex bg-base-100 shadow rounded-lg relative overflow-hidden mb-4",4,"ngFor","ngForOf"],["name","event",1,"flex","bg-base-100","shadow","rounded-lg","relative","overflow-hidden","mb-4"],["name","status",1,"absolute","rounded-lg"],["name","details",1,"flex-1","mr-2"],["time","",1,"text-primary","text-sm","font-bold","mb-2"],["name","title",1,"text-sm","font-bold","mb-2"],["name","space",1,"text-xs","flex","items-center","mb-2"],[1,"mr-2"],[1,"text-black",3,"click","matTooltip"],["name","attendees","class","text-xs flex items-center mb-2",4,"ngIf"],["name","guests","class","flex space-x-2 text-sm",4,"ngIf"],["btn","","matRipple","","class","uppercase h-12",3,"href",4,"ngIf"],["name","attendees",1,"text-xs","flex","items-center","mb-2"],[1,"mr-2",3,"icon"],["name","guests",1,"flex","space-x-2","text-sm"],[3,"user",4,"ngFor","ngForOf"],[3,"user"],["btn","","matRipple","",1,"uppercase","h-12",3,"href"]],template:function(a,s){1&a&&(e.j41(0,"h3",0),e.EFF(1,"Your Bookings"),e.k0s(),e.DNE(2,me,16,15,"div",1),e.nI1(3,"async"),e.nI1(4,"slice")),2&a&&(e.R7$(2),e.Y8G("ngForOf",e.brH(4,3,e.bMT(3,1,s.event_list),0,3)))},dependencies:[d.Sq,d.bT,C.R,$.a,g.r6,ie.oV,d.Jj,d.P9,d.vh],styles:["[_nghost-%COMP%]{padding:1em;min-width:16rem}[name=event][_ngcontent-%COMP%]{padding:1rem 1rem 1rem 2rem}[name=status][_ngcontent-%COMP%]{top:1rem;left:-.8rem;height:2.5rem;width:1.6rem;background-color:#00529b}button[_ngcontent-%COMP%]{height:3em}app-icon[_ngcontent-%COMP%]{margin-left:-.25rem}\n\n/*# sourceMappingURL=dashboard-upcoming.component.ts-angular-inline--87.css.map*/"]})}return n})();var D=o(1034),N=o(4950),ue=o(5175),he=o(7984);let fe=(()=>{class n{constructor(){this.events=new e.bkB,this.form=new p.gE({name:new p.MJ("",[p.k0.required]),description:new p.MJ(""),sender:new p.MJ(""),priority:new p.MJ("")})}register(){this.form.markAllAsTouched(),this.form.valid&&this.events.emit({reason:"done",metadata:this.form.value})}static#e=this.\u0275fac=function(a){return new(a||n)};static#t=this.\u0275cmp=e.VBU({type:n,selectors:[["dashboard-delivery-modal"]],outputs:{events:"events"},decls:47,vars:1,consts:[[1,"flex","items-center","justify-between"],["icon","","mat-dialog-close",""],[1,"p-2","w-[24rem]",3,"formGroup"],["appearance","outline",1,"w-full"],["matInput","","placeholder","Name of items being delivered","formControlName","name"],["matInput","","placeholder","Description of items being delivered","formControlName","description"],["matInput","","placeholder","Name of sender","formControlName","sender"],["placeholder","Low","formControlName","priority"],[1,"p-2","flex","items-center","justify-center","border-t","border-base-200"],["btn","","matRipple","",1,"w-32",3,"click"]],template:function(a,s){1&a&&(e.j41(0,"header",0)(1,"h3"),e.EFF(2,"Register Delivery"),e.k0s(),e.j41(3,"button",1)(4,"app-icon"),e.EFF(5,"close"),e.k0s()()(),e.j41(6,"main",2)(7,"div")(8,"label"),e.EFF(9,"Name"),e.j41(10,"span"),e.EFF(11,"*"),e.k0s(),e.EFF(12,":"),e.k0s(),e.j41(13,"mat-form-field",3),e.nrm(14,"input",4),e.j41(15,"mat-error"),e.EFF(16,"Name is required"),e.k0s()()(),e.j41(17,"div")(18,"label"),e.EFF(19,"Description:"),e.k0s(),e.j41(20,"mat-form-field",3),e.nrm(21,"textarea",5),e.k0s()(),e.j41(22,"div")(23,"label"),e.EFF(24,"Sender:"),e.k0s(),e.j41(25,"mat-form-field",3),e.nrm(26,"input",6),e.j41(27,"mat-error"),e.EFF(28,"Sender is required"),e.k0s()()(),e.j41(29,"div")(30,"label"),e.EFF(31,"Priority:"),e.k0s(),e.j41(32,"mat-form-field",3)(33,"mat-select",7)(34,"mat-option"),e.EFF(35,"Very Low"),e.k0s(),e.j41(36,"mat-option"),e.EFF(37,"Low"),e.k0s(),e.j41(38,"mat-option"),e.EFF(39,"Normal"),e.k0s(),e.j41(40,"mat-option"),e.EFF(41,"High"),e.k0s(),e.j41(42,"mat-option"),e.EFF(43,"Very Height"),e.k0s()()()()(),e.j41(44,"footer",8)(45,"button",9),e.bIt("click",function(){return s.register()}),e.EFF(46," Register "),e.k0s()()),2&a&&(e.R7$(6),e.Y8G("formGroup",s.form))},dependencies:[p.me,p.BC,p.cb,C.R,g.wT,N.rl,N.TL,ue.VO,g.r6,F.tx,he.fg,p.j4,p.JD]})}return n})();function ve(n,r){if(1&n&&(e.j41(0,"div",7)(1,"div",8)(2,"div",9),e.EFF(3),e.k0s(),e.j41(4,"div",10),e.EFF(5),e.nI1(6,"date"),e.k0s()(),e.nrm(7,"div",11),e.k0s()),2&n){const t=r.$implicit;e.R7$(3),e.SpI(" ",(null==t?null:t.name)||"Untitled Delivery"," "),e.R7$(2),e.SpI(" ",t&&t.received?e.i5U(6,6,t.received,"medium"):"Not received"," "),e.R7$(2),e.AVh("bg-warning",!t.received)("bg-success",t.received)}}function ge(n,r){if(1&n){const t=e.RV6();e.j41(0,"div",4),e.DNE(1,ve,8,9,"div",5),e.j41(2,"button",6),e.bIt("click",function(){e.eBV(t);const s=e.XpG();return e.Njj(s.registerDelivery())}),e.EFF(3," Register Delivery "),e.k0s()()}if(2&n){const t=e.XpG();e.R7$(),e.Y8G("ngForOf",t.deliveries)}}function be(n,r){1&n&&(e.j41(0,"div",12),e.EFF(1," No registered deliveries "),e.k0s())}let _e=(()=>{class n{constructor(t){this._dialog=t,this.deliveries=[{name:"USB-C Cables",received:Date.now()},{name:"Desk Fan"}]}registerDelivery(){var t=this;return(0,h.A)(function*(){const a=t._dialog.open(fe),s=yield Promise.race([a.componentInstance.events.pipe((0,E.$)(i=>"done"===i.reason)).toPromise(),a.afterClosed().toPromise()]);"done"===s.reason&&(t.deliveries.push(s.metadata),a.close())})()}static#e=this.\u0275fac=function(a){return new(a||n)(e.rXU(F.bZ))};static#t=this.\u0275cmp=e.VBU({type:n,selectors:[["dashboard-deliveries"]],decls:6,vars:2,consts:[["empty_state",""],[1,"m-0","my-2","font-medium","text-xl"],[1,"bg-base-100","shadow","p-2","rounded"],["class","divide-y",4,"ngIf","ngIfElse"],[1,"divide-y"],["class","flex items-center py-2",4,"ngFor","ngForOf"],["matRipple","",1,"w-full","mt-2",3,"click"],[1,"flex","items-center","py-2"],[1,"flex-1","pl-2"],[1,""],[1,"text-xs","opacity-60"],[1,"m-4","h-2","w-2","rounded-full"],[1,"p-8","flex","items-center","justify-center","opacity-40"]],template:function(a,s){if(1&a&&(e.j41(0,"h3",1),e.EFF(1,"Deliveries"),e.k0s(),e.j41(2,"div",2),e.DNE(3,ge,4,1,"div",3),e.k0s(),e.DNE(4,be,2,0,"ng-template",null,0,e.C5r)),2&a){const i=e.sdS(5);e.R7$(3),e.Y8G("ngIf",null==s.deliveries?null:s.deliveries.length)("ngIfElse",i)}},dependencies:[d.Sq,d.bT,g.r6,d.vh]})}return n})();const ye=["input"],xe=()=>({class:"material-icons",content:"person_add"}),Fe=()=>({class:"material-icons",content:"close"});function Ce(n,r){if(1&n){const t=e.RV6();e.j41(0,"div",15),e.nrm(1,"a-user-avatar",16),e.j41(2,"div",17),e.EFF(3),e.k0s(),e.j41(4,"button",18),e.bIt("click",function(){const s=e.eBV(t).$implicit,i=e.XpG();return e.Njj(i.removeUser(s))}),e.nrm(5,"app-icon",19),e.k0s()()}if(2&n){const t=r.$implicit;e.R7$(),e.Y8G("user",t),e.R7$(2),e.SpI(" ",t.name," "),e.R7$(2),e.Y8G("icon",e.lJ4(3,Fe))}}function De(n,r){if(1&n&&(e.j41(0,"button",20),e.EFF(1),e.k0s()),2&n){const t=e.XpG();e.R7$(),e.SpI(" ",t.search_str?'No matches for "'+t.search_str+'"':"Type to search for users..."," ")}}function je(n,r){if(1&n){const t=e.RV6();e.j41(0,"button",21),e.bIt("click",function(){const s=e.eBV(t).$implicit,i=e.XpG();return e.Njj(i.addUser(s))}),e.j41(1,"div",22),e.nrm(2,"a-user-avatar",23),e.j41(3,"div",24)(4,"div"),e.EFF(5),e.k0s(),e.j41(6,"div",25),e.EFF(7),e.k0s()()()()}if(2&n){const t=r.$implicit;e.R7$(2),e.Y8G("user",t),e.R7$(3),e.JRh(t.name),e.R7$(2),e.SpI(" ",t.email," ")}}function Ie(n,r){1&n&&e.nrm(0,"dashboard-deliveries")}let Ee=(()=>{class n extends u.Tv{get can_deliver(){return!!this._settings.get("app.can_deliver")}constructor(t,a){super(),this._state=t,this._settings=a,this.contacts=this._state.contacts,this.search_results=this._state.search_results,this.addUser=s=>this._state.addContact(s),this.removeUser=s=>this._state.removeContact(s),this.updateSearch=s=>this._state.setOptions({search:s}),this.search_str=""}ngOnInit(){this._state.updateContacts()}focusInput(){this.timeout("focus",()=>{this._input_el&&this._input_el.nativeElement.focus()})}clearInput(){this.search_str="",this._state.setOptions({search:""})}static#e=this.\u0275fac=function(a){return new(a||n)(e.rXU(x),e.rXU(u.h$))};static#t=this.\u0275cmp=e.VBU({type:n,selectors:[["a-dashboard-contacts"]],viewQuery:function(a,s){if(1&a&&e.GBs(ye,5),2&a){let i;e.mGM(i=e.lsd())&&(s._input_el=i.first)}},features:[e.Vt3],decls:21,vars:18,consts:[["menu","matMenu"],["input",""],[1,"m-0","mb-2","font-medium","text-xl"],["name","contact-list",1,"bg-base-300","border","border-base-200","shadow","rounded-lg","p-2","pl-0","space-y-2","flex","flex-wrap"],["name","contact","class","bg-base-100 rounded-lg flex-1 flex flex-col items-center p-2 relative",4,"ngFor","ngForOf"],["name","contact","btn","","matRipple","",1,"rounded-lg","flex-1","w-full",3,"menuOpened","menuClosed","matMenuTriggerFor"],[1,"flex","flex-col","items-center","p-4","text-black","w-full"],[1,"text-2xl",3,"icon"],[1,"w-full","leading-tight","whitespace-normal"],["xPosition","before"],["mat-menu-item","",1,"p-0",3,"click"],["placeholder","Search for user...",1,"w-full","p-2","text-base",3,"ngModelChange","ngModel"],["mat-menu-item","",4,"ngIf"],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"],[4,"ngIf"],["name","contact",1,"bg-base-100","rounded-lg","flex-1","flex","flex-col","items-center","p-2","relative"],[1,"text-2xl","mb-2",3,"user"],["name","contact-name",1,"text-sm","mb-2"],["icon","","name","close",3,"click"],[3,"icon"],["mat-menu-item",""],["mat-menu-item","",3,"click"],[1,"flex","items-center","leading-tight"],[1,"text-xl","mr-2",3,"user"],[1,"flex-1"],[1,"text-xs","text-dark-fade"]],template:function(a,s){if(1&a){const i=e.RV6();e.j41(0,"h3",2),e.EFF(1,"Colleagues"),e.k0s(),e.j41(2,"div",3),e.DNE(3,Ce,6,4,"div",4),e.nI1(4,"async"),e.j41(5,"button",5),e.bIt("menuOpened",function(){return e.eBV(i),e.Njj(s.focusInput())})("menuClosed",function(){return e.eBV(i),e.Njj(s.clearInput())}),e.j41(6,"div",6),e.nrm(7,"app-icon",7),e.j41(8,"span",8),e.EFF(9,"Click to add a person to contacts"),e.k0s()()()(),e.j41(10,"mat-menu",9,0)(12,"div",10),e.bIt("click",function(m){return e.eBV(i),m.stopPropagation(),e.Njj(m.preventDefault())}),e.j41(13,"input",11,1),e.mxI("ngModelChange",function(m){return e.eBV(i),e.DH7(s.search_str,m)||(s.search_str=m),e.Njj(m)}),e.bIt("ngModelChange",function(){return e.eBV(i),e.Njj(s.updateSearch(s.search_str))}),e.k0s()(),e.DNE(15,De,2,1,"button",12),e.nI1(16,"async"),e.DNE(17,je,8,3,"button",13),e.nI1(18,"async"),e.nI1(19,"slice"),e.k0s(),e.DNE(20,Ie,1,0,"dashboard-deliveries",14)}if(2&a){let i;const c=e.sdS(11);e.R7$(3),e.Y8G("ngForOf",e.bMT(4,7,s.contacts)),e.R7$(2),e.Y8G("matMenuTriggerFor",c),e.R7$(2),e.Y8G("icon",e.lJ4(17,xe)),e.R7$(6),e.R50("ngModel",s.search_str),e.R7$(2),e.Y8G("ngIf",!(null!=(i=e.bMT(16,9,s.search_results))&&i.length)),e.R7$(2),e.Y8G("ngForOf",e.brH(19,13,e.bMT(18,11,s.search_results),0,8)),e.R7$(3),e.Y8G("ngIf",s.can_deliver)}},dependencies:[d.Sq,d.bT,p.me,p.BC,p.vS,C.R,$.a,D.kk,D.fb,D.Cp,g.r6,_e,d.Jj,d.P9],styles:["[_nghost-%COMP%]{padding:1em;min-width:16rem}[name=contact-list][_ngcontent-%COMP%]{padding:0 .5rem .5rem 0}[name=contact][_ngcontent-%COMP%]{min-width:8rem;width:8rem;margin-left:.5rem;margin-top:.5rem}[name=contact-name][_ngcontent-%COMP%]{font-weight:400}[name=dot][_ngcontent-%COMP%]{height:8px;width:8px;border-radius:8px;background-color:#22992e}button[name=close][_ngcontent-%COMP%]{position:absolute;display:none;top:.25rem;right:.25rem}[name=contact][_ngcontent-%COMP%]:hover   button[name=close][_ngcontent-%COMP%]{display:initial}button[name=contact][_ngcontent-%COMP%]{background-color:#f0f0f0;border:none;min-width:calc(100% - .5rem)!important}\n\n/*# sourceMappingURL=dashboard-contacts.component.ts-angular-inline--86.css.map*/"]})}return n})();const ke=["dashboard",""];function Re(n,r){1&n&&e.nrm(0,"a-dashboard-availability",4)}function Te(n,r){1&n&&e.nrm(0,"a-dashboard-contacts",4)}const Me=[{path:"",component:(()=>{class n{constructor(t){this._settings=t}get hide_availability(){return!1!==this._settings.get("app.hide_availability")}get hide_contacts(){return!1!==this._settings.get("app.hide_contacts")}static#e=this.\u0275fac=function(a){return new(a||n)(e.rXU(u.h$))};static#t=this.\u0275cmp=e.VBU({type:n,selectors:[["","dashboard",""]],attrs:ke,decls:8,vars:2,consts:[[1,"flex-1","flex","sm:flex-row","flex-col-reverse","h-1/2","bg-base-200"],[1,"relative","z-0","flex","flex-col","flex-1","h-1/2","sm:h-auto","overflow-hidden"],[1,"flex","flex-1","px-0","sm:px-8","flex-wrap","overflow-auto","h-px","sm:h-auto"],["class","flex-1 min-w-64",4,"ngIf"],[1,"flex-1","min-w-64"]],template:function(a,s){1&a&&(e.nrm(0,"topbar"),e.j41(1,"div",0)(2,"div",1)(3,"main",2),e.DNE(4,Re,1,0,"a-dashboard-availability",3),e.nrm(5,"a-dashboard-upcoming",4),e.DNE(6,Te,1,0,"a-dashboard-contacts",3),e.k0s()()(),e.nrm(7,"footer-menu")),2&a&&(e.R7$(4),e.Y8G("ngIf",!s.hide_availability),e.R7$(2),e.Y8G("ngIf",!s.hide_contacts))},dependencies:[d.bT,U.G,w.e,te,pe,Ee],styles:["[_nghost-%COMP%]{position:absolute;inset:0;overflow:hidden;display:flex;flex-direction:column}main[_ngcontent-%COMP%]{min-height:50%}.top[_ngcontent-%COMP%]{background-color:#007ac8}a[button].tile[_ngcontent-%COMP%]{flex:1;border-radius:0;background-color:#fff;color:#000000d9;border:none;border-right:1px solid #ccc}a[button].tile[_ngcontent-%COMP%]:last-child{border:none}\n\n/*# sourceMappingURL=dashboard.component.ts-angular-inline--88.css.map*/"]})}return n})()}];let Oe=(()=>{class n{static#e=this.\u0275fac=function(a){return new(a||n)};static#t=this.\u0275mod=e.$C({type:n});static#n=this.\u0275inj=e.G2t({imports:[d.MD,p.YN,P.p,p.X1,G.E9,I.iI.forChild(Me)]})}return n})()}}]);
//# sourceMappingURL=apps_workplace_src_app_dashboard_dashboard_module_ts.js.map