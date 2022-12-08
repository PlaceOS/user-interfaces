"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["apps_workplace_src_app_landing_landing_module_ts"],{368:(ln,w,c)=>{c.r(w),c.d(w,{AppLandingModule:()=>sn});var p=c(4666),y=c(2508),v=c(959),K=c(8147),u=c(232),F=c(6221),d=c(1670),h=c(3690),x=c(4505),T=c(7716),R=c(4139),k=c(9151),E=c(9095),b=c(9128),$=c(8759),C=c(6942),X=c(823),B=c(7418),z=c(5670),H=c(3910),ee=c(2886),f=c(1299),N=c(3149),ne=c(9434),te=c(7625),e=c(9676);let U=(()=>{class t extends u.KG{constructor(n,i,o){super(),this._calendar=n,this._schedule=i,this._org=o,this._options=new x.X({}),this._loading=new x.X(""),this._loading_spaces=new x.X(!1),this._contacts=new x.X([]),this._level_occupancy=new x.X([]),this._space_list=this._org.active_building.pipe((0,k.h)(s=>!!s),(0,E.w)(s=>(0,ee.u2)(s.id)),(0,b.d)(1)),this._space_statuses=this._space_list.pipe((0,$.b)(s=>this.unsubWith("bind:")),(0,E.w)(s=>(0,T.aj)((s||[]).map(l=>{const r=(0,h.rTZ)(l.id,"Bookings").binding("status"),_=r.listen();return this.subscription(`bind:${l.id}`,r.bind()),_}))),(0,b.d)(1)),this.free_space_list=(0,T.aj)([this._space_list,this._space_statuses]).pipe((0,C.U)(([s,l])=>(s||[]).filter((r,_)=>"free"===l[_]).sort((r,_)=>r.capacity-_.capacity)),(0,b.d)(1)),this.upcoming_events=this._schedule.filtered_bookings.pipe((0,C.U)(s=>s.filter(l=>l instanceof f.ym))),this.contacts=this._contacts.asObservable(),this.options=this._options.asObservable(),this.loading=this._loading.asObservable(),this.loading_spaces=this._loading_spaces.asObservable(),this.search_results=this._options.pipe((0,X.b)(500),(0,E.w)(({search:s})=>(this._loading.next("Loading users..."),s?(0,N.VE)(s).pipe((0,B.K)(()=>(0,R.of)([]))):(0,R.of)([]))),(0,$.b)(()=>this._loading.next("")),(0,b.d)(1)),this.level_occupancy=this._level_occupancy.asObservable(),this.init()}init(){var n=this;return(0,d.Z)(function*(){yield n._org.initialised.pipe((0,z.P)(s=>s)).toPromise(),n.updateContacts(),n.subscription("building",n._org.active_building.pipe((0,k.h)(s=>!!s)).subscribe(()=>{n.updateBuildingMetadata(),n.updateOccupancy({})}));let i=n._org.binding("area_management");if(!i)return;const o=(0,h.rTZ)(i,"AreaManagement").binding("overview");o.listen().subscribe(s=>n.updateOccupancy(s||{})),o.bind()})()}setOptions(n){this._options.next({...this._options.getValue(),...n})}pollUpcomingEvents(n=3e5){return this._schedule.setDate(Date.now()),this._schedule.startPolling(n)}stopPollingUpcomingEvents(){this._schedule.stopPolling()}refreshUpcomingEvents(){this._schedule.triggerPoll()}updateContacts(){var n=this;return(0,d.Z)(function*(){const i=yield(0,h.rlq)((0,u.ar)().id,"contacts").toPromise();n._contacts.next((i.details instanceof Array?i.details:[]).map(s=>new N.n5(s)))})()}addContact(n){var i=this;return(0,d.Z)(function*(){let o=[...i._contacts.getValue()];o.push(n),o=(0,u.Tw)(o,"email");const s=yield(0,h.Ymr)((0,u.ar)().id,{name:"contacts",description:"Contacts for the User",details:o}).toPromise();i._contacts.next((s.details instanceof Array?s.details:[]).map(r=>new N.n5(r)))})()}removeContact(n){var i=this;return(0,d.Z)(function*(){let o=[...i._contacts.getValue()];o=o.filter(r=>r.email!==n.email);const s=yield(0,h.Ymr)((0,u.ar)().id,{name:"contacts",description:"Contacts for the User",details:o}).toPromise();i._contacts.next((s.details instanceof Array?s.details:[]).map(r=>new N.n5(r)))})()}updateOccupancy(n){var i=this;return(0,d.Z)(function*(){const o=[...yield i._org.active_levels.pipe((0,H.q)(1)).toPromise()];o.sort((s,l)=>n[s.id]?.recommendation-n[l.id]?.recommendation),i._level_occupancy.next(o)})()}updateBuildingMetadata(){var n=this;return(0,d.Z)(function*(){n._level_occupancy.next([]);const i=n._org.binding("occupancy");if(!i)return;const{sys:o,module:s,index:l}=i,r=(0,h.rTZ)(o,s,l);!r||(n._occupancy_binding&&n._occupancy_binding.unbind(),n._occupancy_binding=r.binding("occupancy"),n._occupancy_binding.bind(),n.subscription("occupancy_binding",n._occupancy_binding.listen().subscribe(_=>{const g=Object.keys(_).map(m=>({id:m,..._[m]}));g.sort((m,an)=>m.recommendation_factor-an.recommendation_factor),n._level_occupancy.next(g.map(m=>n._org.levelWithID([m.id])))})))})()}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(ne.ot),e.LFG(te.I),e.LFG(F.w7))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var O=c(5306),G=c(1708),I=c(207),L=c(8699),P=c(6198);function ie(t,a){1&t&&(e.TgZ(0,"div",5),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"WPA.AVAILABLE_NOW")," "))}function oe(t,a){1&t&&(e.TgZ(0,"div",6)(1,"div"),e._uU(2),e.ALo(3,"translate"),e.qZA()()),2&t&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.SPACES")))}function se(t,a){if(1&t&&e._UZ(0,"img",18),2&t){const n=e.oxw().$implicit;e.Q6J("src",null==n?null:n.images[0],e.LSH)}}function ae(t,a){1&t&&e._UZ(0,"img",19)}const D=function(){return["/explore"]},le=function(t){return{level:t}};function ce(t,a){if(1&t&&(e.TgZ(0,"button",10)(1,"div",11),e.YNc(2,se,1,1,"img",12),e.YNc(3,ae,1,0,"ng-template",null,13,e.W1O),e.qZA(),e.TgZ(5,"div",14)(6,"div",15),e._uU(7),e.qZA(),e.TgZ(8,"div",16)(9,"app-icon",17),e._uU(10,"place"),e.qZA(),e.TgZ(11,"span"),e._uU(12),e.qZA()()()()),2&t){const n=a.$implicit,i=e.MAs(4),o=e.oxw(2);let s;e.Q6J("routerLink",e.DdM(6,D))("queryParams",e.VKq(7,le,n.id)),e.xp6(2),e.Q6J("ngIf",null==n||null==n.images?null:n.images.length)("ngIfElse",i),e.xp6(5),e.hij(" ",n.display_name||n.name," "),e.xp6(5),e.Oqu((null==(s=o.building(n.parent_id))?null:s.display_name)||(null==(s=o.building(n.parent_id))?null:s.name))}}function re(t,a){1&t&&(e.TgZ(0,"span",20),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"WPA.NO_FREE_SPACES")," "))}function _e(t,a){if(1&t&&(e.TgZ(0,"div",7),e.YNc(1,ce,13,9,"button",8),e.ALo(2,"async"),e.YNc(3,re,3,3,"span",9),e.ALo(4,"async"),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,2,n.levels_free)),e.xp6(2),e.Q6J("ngIf",!e.lcZ(4,4,n.levels_free).length)}}function pe(t,a){1&t&&e._UZ(0,"mat-spinner",22)}function ge(t,a){if(1&t&&(e.TgZ(0,"div",6)(1,"div"),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.YNc(4,pe,1,0,"mat-spinner",21),e.ALo(5,"async"),e.qZA()),2&t){const n=e.oxw();e.xp6(2),e.Oqu(e.lcZ(3,2,"WPA.ROOMS")),e.xp6(2),e.Q6J("ngIf",e.lcZ(5,4,n.loading_spaces))}}function ue(t,a){if(1&t&&(e._UZ(0,"img",18),e.ALo(1,"async"),e.ALo(2,"space")),2&t){const n=e.oxw().$implicit;let i;e.Q6J("src",null==(i=e.lcZ(1,1,e.lcZ(2,3,n.id)))?null:i.images[0],e.LSH)}}const de=function(t){return{space:t}};function me(t,a){if(1&t&&(e.TgZ(0,"button",10)(1,"div",24),e.YNc(2,ue,3,5,"img",12),e.ALo(3,"async"),e.ALo(4,"space"),e.qZA(),e.TgZ(5,"div",14)(6,"div",15),e._uU(7),e.qZA(),e.TgZ(8,"div",16)(9,"app-icon",17),e._uU(10,"place"),e.qZA(),e.TgZ(11,"span"),e._uU(12),e.qZA()()()()),2&t){const n=a.$implicit,i=e.oxw(2),o=e.MAs(7);let s,l;e.Q6J("routerLink",e.DdM(10,D))("queryParams",e.VKq(11,de,n.email)),e.xp6(2),e.Q6J("ngIf",null==(s=e.lcZ(3,6,e.lcZ(4,8,n.id)))||null==s.images?null:s.images.length)("ngIfElse",o),e.xp6(5),e.hij(" ",n.display_name||n.name," "),e.xp6(5),e.Oqu((null==(l=i.level(n.zones))?null:l.display_name)||(null==(l=i.level(n.zones))?null:l.name))}}function fe(t,a){1&t&&(e.TgZ(0,"span",20),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"WPA.NO_FREE_ROOMS")," "))}function ve(t,a){if(1&t&&(e.TgZ(0,"div",7),e.YNc(1,me,13,13,"button",23),e.ALo(2,"async"),e.YNc(3,fe,3,3,"span",9),e.ALo(4,"async"),e.qZA()),2&t){const n=e.oxw();let i;e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,3,n.space_list))("ngForTrackBy",n.trackBySpaceId),e.xp6(2),e.Q6J("ngIf",!(null!=(i=e.lcZ(4,5,n.space_list))&&i.length))}}function he(t,a){1&t&&e._UZ(0,"img",25)}let J=(()=>{class t{constructor(n,i,o){this._state=n,this._org=i,this._settings=o,this.space_list=this._state.free_space_list,this.loading_spaces=this._state.loading_spaces,this.levels_free=this._state.level_occupancy}trackBySpaceId(n,i){return i.id}level(n){return this._org.levelWithID(n)}building(n){return this._org.buildings.find(i=>i.id===n)}get hide_spaces(){return this._settings.get("app.general.hide_spaces")}get hide_rooms(){return this._settings.get("app.general.hide_rooms")}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(U),e.Y36(F.w7),e.Y36(u.gb))},t.\u0275cmp=e.Xpm({type:t,selectors:[["landing-availability"]],decls:8,vars:5,consts:[[1,"py-2"],["class","sm:text-lg font-medium mb-2 sm:mb-4 px-4",4,"ngIf"],["class","flex items-center text-sm sm:text-base px-4 space-x-2",4,"ngIf"],["class","w-full overflow-auto flex items-center space-x-4 px-4 py-2",4,"ngIf"],["space_placeholder",""],[1,"sm:text-lg","font-medium","mb-2","sm:mb-4","px-4"],[1,"flex","items-center","text-sm","sm:text-base","px-4","space-x-2"],[1,"w-full","overflow-auto","flex","items-center","space-x-4","px-4","py-2"],["matRipple","","class","flex items-center h-24 min-w-[12.5rem] rounded-lg bg-white dark:bg-[#1F2021] shadow p-4 space-x-2",3,"routerLink","queryParams",4,"ngFor","ngForOf"],["class","opacity-60 text-sm mb-2",4,"ngIf"],["matRipple","",1,"flex","items-center","h-24","min-w-[12.5rem]","rounded-lg","bg-white","dark:bg-[#1F2021]","shadow","p-4","space-x-2",3,"routerLink","queryParams"],[1,"min-w-[4.5rem]","h-[4.5rem]","rounded","bg-gray-200","dark:bg-neutral-800","flex","items-center","justify-center"],["class","min-h-full object-cover",3,"src",4,"ngIf","ngIfElse"],["placeholder",""],[1,"text-left"],[1,"max-w-full","truncate","px-1.5"],[1,"max-w-full","truncate","text-sm","opacity-60","flex","items-center"],[1,"text-blue-500","text-lg"],[1,"min-h-full","object-cover",3,"src"],["src","assets/icons/desk-placeholder.svg",1,"m-auto"],[1,"opacity-60","text-sm","mb-2"],["diameter","24",4,"ngIf"],["diameter","24"],["matRipple","","class","flex items-center h-24 min-w-[12.5rem] rounded-lg bg-white dark:bg-[#1F2021] shadow p-4 space-x-2",3,"routerLink","queryParams",4,"ngFor","ngForOf","ngForTrackBy"],[1,"w-[4.5rem]","h-[4.5rem]","rounded","bg-gray-200","dark:bg-neutral-800","overflow-hidden","flex","items-center","justify-center"],["src","assets/icons/room-placeholder.svg",1,"m-auto"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0),e.YNc(1,ie,3,3,"div",1),e.YNc(2,oe,4,3,"div",2),e.YNc(3,_e,5,6,"div",3),e.YNc(4,ge,6,6,"div",2),e.YNc(5,ve,5,7,"div",3),e.qZA(),e.YNc(6,he,1,0,"ng-template",null,4,e.W1O)),2&n&&(e.xp6(1),e.Q6J("ngIf",!i.hide_rooms||!i.hide_spaces),e.xp6(1),e.Q6J("ngIf",!i.hide_spaces),e.xp6(1),e.Q6J("ngIf",!i.hide_spaces),e.xp6(1),e.Q6J("ngIf",!i.hide_rooms),e.xp6(1),e.Q6J("ngIf",!i.hide_rooms))},dependencies:[p.sg,p.O5,O.o,G.Ou,I.wG,v.rH,p.Ov,L.X$,P.X],styles:["*[_ngcontent-%COMP%]{flex-shrink:0}\n/*# sourceMappingURL=landing-availability.component.ts-angular-inline--73.css.map*/"]}),t})();var Ae=c(9685),A=c(8589),S=c(4522);const xe=["search_input"];function be(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"div",15)(1,"div",16),e._UZ(2,"a-user-avatar",17)(3,"div",18),e.qZA(),e.TgZ(4,"div",19)(5,"div",20),e._uU(6),e.qZA(),e.TgZ(7,"div",21),e._uU(8),e.qZA(),e.TgZ(9,"div",22),e._uU(10),e.qZA()(),e.TgZ(11,"button",23)(12,"app-icon"),e._uU(13,"more_horiz"),e.qZA()(),e.TgZ(14,"mat-menu",24,25)(16,"button",26),e.NdJ("click",function(){const s=e.CHM(n).$implicit,l=e.oxw(2);return e.KtG(l.newMeeting(s))}),e.TgZ(17,"app-icon",27),e._uU(18,"today"),e.qZA(),e.TgZ(19,"div"),e._uU(20),e.ALo(21,"translate"),e.qZA()(),e.TgZ(22,"button",26),e.NdJ("click",function(){const s=e.CHM(n).$implicit,l=e.oxw(2);return e.KtG(l.removeContact(s))}),e.TgZ(23,"app-icon",27),e._uU(24,"cancel"),e.qZA(),e.TgZ(25,"div"),e._uU(26),e.ALo(27,"translate"),e.qZA()()()()}if(2&t){const n=a.$implicit,i=e.MAs(15);e.xp6(2),e.Q6J("user",n),e.xp6(1),e.ekj("bg-error",!n.location)("bg-success",n.location),e.xp6(3),e.Oqu(n.name),e.xp6(2),e.hij(" ",n.organisation," "),e.xp6(2),e.hij(" ",n.location," "),e.xp6(1),e.Q6J("matMenuTriggerFor",i),e.xp6(9),e.Oqu(e.lcZ(21,11,"WPA.CREATE_MEETING")),e.xp6(6),e.Oqu(e.lcZ(27,13,"WPA.REMOVE_COLLEAGUE"))}}function Le(t,a){if(1&t&&(e.ynx(0),e.YNc(1,be,28,15,"div",14),e.ALo(2,"async"),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,n.contacts))}}function Ze(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"button",30),e.NdJ("click",function(){const s=e.CHM(n).$implicit,l=e.oxw(3);return e.KtG(l.addUser(s))}),e.TgZ(1,"div",31),e._UZ(2,"a-user-avatar",17)(3,"div",18),e.qZA(),e.TgZ(4,"div",32)(5,"div",20),e._uU(6),e.qZA(),e.TgZ(7,"div",21),e._uU(8),e.qZA()()()}if(2&t){const n=a.$implicit;e.xp6(2),e.Q6J("user",n),e.xp6(1),e.ekj("bg-error",!n.location)("bg-success",n.location),e.xp6(3),e.Oqu(n.name),e.xp6(2),e.hij(" ",n.organisation," ")}}function ye(t,a){if(1&t&&(e.ynx(0),e.YNc(1,Ze,9,7,"button",29),e.ALo(2,"async"),e.BQk()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,n.search_results))}}function Te(t,a){if(1&t&&(e.TgZ(0,"div",28),e.YNc(1,ye,3,3,"ng-container",4),e.ALo(2,"async"),e.qZA()),2&t){const n=e.oxw(),i=e.MAs(23);let o;e.xp6(1),e.Q6J("ngIf",null==(o=e.lcZ(2,2,n.search_results))?null:o.length)("ngIfElse",i)}}function Ce(t,a){1&t&&(e.TgZ(0,"div",33),e._UZ(1,"img",34),e.TgZ(2,"p",35),e.SDv(3,36),e.ALo(4,"translate"),e.qZA()()),2&t&&(e.xp6(4),e.pQV(e.lcZ(4,1,"WPA.COLLEAGUES_EMPTY")),e.QtT(3))}function Ne(t,a){if(1&t&&(e.TgZ(0,"div",33)(1,"p",35),e._uU(2),e.ALo(3,"async"),e.ALo(4,"async"),e.qZA()()),2&t){const n=e.oxw();let i;e.xp6(2),e.hij(" ",null!=(i=e.lcZ(3,1,n.options))&&i.search?'Unable for find any users matching "'+(null==(i=e.lcZ(4,3,n.options))?null:i.search)+'"':"Start typing to search for users."," ")}}function Oe(t,a){1&t&&(e.TgZ(0,"div",33),e._UZ(1,"mat-spinner",37),e.TgZ(2,"p",35),e._uU(3),e.ALo(4,"translate"),e.qZA()()),2&t&&(e.xp6(3),e.Oqu(e.lcZ(4,1,"WPA.COLLEAGUES_SEARCHING")))}let Q=(()=>{class t extends u.KG{constructor(n,i,o,s){var l;super(),l=this,this._state=n,this._settings=i,this._event_form=o,this._router=s,this.show_search=!1,this.contacts=this._state.contacts,this.search_results=(0,T.aj)([this._state.search_results,this._state.contacts]).pipe((0,C.U)(([r,_])=>r.filter(g=>!_.find(m=>m.id!==g.id&&m.email!==g.email)))),this.options=this._state.options,this.loading=this._state.loading,this.addUser=function(){var r=(0,d.Z)(function*(_){yield l._state.addContact(_),(0,u.t5)(`Successfully added "${_.name}" to contacts`),l.show_search=!1});return function(_){return r.apply(this,arguments)}}(),this.removeUser=function(){var r=(0,d.Z)(function*(_){yield l._state.removeContact(_),(0,u.t5)(`Successfully removed "${_.name}" from contacts`)});return function(_){return r.apply(this,arguments)}}(),this.updateSearch=r=>this._state.setOptions({search:r})}newMeeting(n){this._event_form.newForm(),this._event_form.form.patchValue({attendees:[n]}),this._settings.get("app.new_features")?this._router.navigate(["/book","meeting"]):this._router.navigate(["/book","spaces"])}openSearch(){this.updateSearch(""),this.show_search=!0,this.timeout("open",()=>this._input_el.nativeElement.focus(),100)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(U),e.Y36(u.gb),e.Y36(f.MH),e.Y36(v.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["landing-colleagues"]],viewQuery:function(n,i){if(1&n&&e.Gf(xe,7),2&n){let o;e.iGM(o=e.CRH())&&(i._input_el=o.first)}},features:[e.qOj],decls:26,vars:22,consts:function(){let a,n,i;return a=$localize`:␟9fe8e61e3855a29d7d5fb9b55a5f0c640b0e0a37␟3604407389403754414:{VAR_PLURAL, plural, =1 {Person } other {People }}`,a=e.Zx4(a,{VAR_PLURAL:"\ufffd1\ufffd"}),n=$localize`:␟d28ecc1b59327a5190b5b81cfdf0520546265763␟6833675758051664854:${"\ufffd0\ufffd"}:INTERPOLATION: ${a}:ICU:`,i=$localize`:␟4b8da467631c67cd3d0efa2c66a6a970036cbef2␟8905501336210127028: ${"\ufffd0\ufffd"}:INTERPOLATION: `,[[1,"flex","items-center","justify-between","py-2","mx-2","border-b","border-gray-200"],[1,"mx-2"],n,[1,"flex-1","h-1/2","w-full","space-y-4","overflow-auto","pt-4"],[4,"ngIf","ngIfElse"],["mat-button","",1,"inverse","w-[calc(100%-1rem)]","m-2",3,"click"],["search","",1,"absolute","inset-x-2","top-2","bottom-[3.5rem]","rounded-lg","overflow-hidden","flex","flex-col","bg-white","dark:bg-neutral-600","shadow","border","border-gray-200"],["placeholder","Search for users...",1,"w-full","border-b","border-gray-200","p-2","rounded-t-lg",3,"ngModel","ngModelChange"],["search_input",""],["mat-icon-button","",1,"absolute","top-0","right-0",3,"click"],["class","overflow-auto flex-1 h-1/2 flex flex-col space-y-2",4,"ngIf","ngIfElse"],["empty_state",""],["search_empty",""],["load_state",""],["class","flex items-center px-2 space-x-2 relative","user","",4,"ngFor","ngForOf"],["user","",1,"flex","items-center","px-2","space-x-2","relative"],[1,"text-xl","relative"],[3,"user"],[1,"rounded-full","h-3","w-3","border","border-white","dark:border-neutral-400","absolute","bottom-1","right-1"],[1,"leading-tight","flex-1","w-1/2"],[1,"truncate"],[1,"text-sm","truncate"],[1,"text-xs","opacity-60","truncate"],["mat-icon-button","",1,"rounded","bg-gray-300",3,"matMenuTriggerFor"],["xPosition","before"],["menu","matMenu"],["mat-menu-item","",1,"flex","items-center","space-x-2",3,"click"],[1,"text-2xl"],[1,"overflow-auto","flex-1","h-1/2","flex","flex-col","space-y-2"],["matRipple","","class","flex items-center p-2 space-x-2 w-full text-left",3,"click",4,"ngFor","ngForOf"],["matRipple","",1,"flex","items-center","p-2","space-x-2","w-full","text-left",3,"click"],[1,"text-base","relative"],[1,"leading-tight"],[1,"w-full","h-full","flex","flex-col","items-center","justify-center","space-y-2","p-8"],["src","assets/icons/no-contacts.svg"],[1,"opacity-60","text-sm","text-center"],i,["diameter","32"]]},template:function(n,i){if(1&n&&(e.TgZ(0,"div",0)(1,"h2",1),e.SDv(2,2),e.ALo(3,"async"),e.ALo(4,"async"),e.qZA()(),e.TgZ(5,"div",3),e.YNc(6,Le,3,3,"ng-container",4),e.ALo(7,"async"),e.qZA(),e.TgZ(8,"button",5),e.NdJ("click",function(){return i.openSearch()}),e._uU(9),e.ALo(10,"translate"),e.qZA(),e.TgZ(11,"div",6)(12,"input",7,8),e.NdJ("ngModelChange",function(s){return i.updateSearch(s)}),e.ALo(14,"async"),e.qZA(),e.TgZ(15,"button",9),e.NdJ("click",function(){return i.show_search=!1}),e.TgZ(16,"app-icon"),e._uU(17,"close"),e.qZA()(),e.YNc(18,Te,3,4,"div",10),e.ALo(19,"async"),e.qZA(),e.YNc(20,Ce,5,3,"ng-template",null,11,e.W1O),e.YNc(22,Ne,5,5,"ng-template",null,12,e.W1O),e.YNc(24,Oe,5,3,"ng-template",null,13,e.W1O)),2&n){const o=e.MAs(21),s=e.MAs(25);let l,r,_,g;e.xp6(4),e.pQV((null==(l=e.lcZ(3,10,i.contacts))?null:l.length)||0)(null==(r=e.lcZ(4,12,i.contacts))?null:r.length),e.QtT(2),e.xp6(2),e.Q6J("ngIf",null==(_=e.lcZ(7,14,i.contacts))?null:_.length)("ngIfElse",o),e.xp6(3),e.hij(" ",e.lcZ(10,16,"WPA.ADD")," "),e.xp6(2),e.ekj("hidden",!i.show_search),e.xp6(1),e.Q6J("ngModel",null==(g=e.lcZ(14,18,i.options))?null:g.search),e.xp6(6),e.Q6J("ngIf",!e.lcZ(19,20,i.loading))("ngIfElse",s)}},dependencies:[p.sg,p.O5,O.o,Ae.k,A.VK,A.OP,A.p6,S.lW,G.Ou,I.wG,y.Fj,y.JJ,y.On,p.Ov,L.X$],styles:["[user][_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column}\n/*# sourceMappingURL=landing-colleagues.component.ts-angular-inline--74.css.map*/"]}),t})();var Z=c(9638),Y=c(6485);function Pe(t,a){if(1&t&&(e._UZ(0,"img",24),e.ALo(1,"async"),e.ALo(2,"space")),2&t){const n=e.oxw().$implicit;let i;e.Q6J("src",null==(i=e.lcZ(1,1,e.lcZ(2,3,n)))?null:i.images[0],e.LSH)}}function Fe(t,a){1&t&&e._UZ(0,"img",25)}function Ee(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"div",7)(1,"div",8)(2,"div",9),e.YNc(3,Pe,3,5,"img",10),e.ALo(4,"async"),e.ALo(5,"space"),e.YNc(6,Fe,1,0,"ng-template",null,11,e.W1O),e.qZA(),e.TgZ(8,"div",12)(9,"div",13),e._uU(10),e.ALo(11,"async"),e.ALo(12,"space"),e.ALo(13,"async"),e.ALo(14,"space"),e.qZA(),e.TgZ(15,"div",14)(16,"app-icon",15),e._uU(17,"place"),e.qZA(),e.TgZ(18,"div"),e._uU(19),e.ALo(20,"async"),e.ALo(21,"space"),e.qZA()(),e.TgZ(22,"div",16)(23,"app-icon",15),e._uU(24,"people"),e.qZA(),e.TgZ(25,"div"),e.SDv(26,17),e.ALo(27,"async"),e.ALo(28,"space"),e.ALo(29,"async"),e.ALo(30,"space"),e.qZA()()()(),e.TgZ(31,"button",18),e.NdJ("click",function(){const s=e.CHM(n).$implicit,l=e.oxw(2);return e.KtG(l.newSpaceMeeting(s))}),e._uU(32),e.ALo(33,"translate"),e.qZA(),e.TgZ(34,"button",19)(35,"app-icon"),e._uU(36,"more_horiz"),e.qZA()(),e.TgZ(37,"mat-menu",20,21)(39,"button",22),e.NdJ("click",function(){const s=e.CHM(n).$implicit,l=e.oxw(2);return e.KtG(l.toggleFavourite("space",s))}),e.TgZ(40,"app-icon",23),e._uU(41,"cancel"),e.qZA(),e.TgZ(42,"div"),e._uU(43),e.ALo(44,"translate"),e.qZA()()()()}if(2&t){const n=a.$implicit,i=e.MAs(7),o=e.MAs(38);let s,l,r,_,g;e.xp6(3),e.Q6J("ngIf",null==(s=e.lcZ(4,9,e.lcZ(5,11,n)))||null==s.images?null:s.images.length)("ngIfElse",i),e.xp6(7),e.hij(" ",(null==(l=e.lcZ(11,13,e.lcZ(12,15,n)))?null:l.display_name)||(null==(l=e.lcZ(13,17,e.lcZ(14,19,n)))?null:l.name)," "),e.xp6(9),e.hij(" ",null==(r=e.lcZ(20,21,e.lcZ(21,23,n)))||null==r.level?null:r.level.display_name," "),e.xp6(11),e.pQV((null==(_=e.lcZ(27,25,e.lcZ(28,27,n)))?null:_.capacity)||2)((null==(g=e.lcZ(29,29,e.lcZ(30,31,n)))?null:g.capacity)||2),e.QtT(26),e.xp6(2),e.hij(" ",e.lcZ(33,33,"WPA.BOOK")," "),e.xp6(2),e.Q6J("matMenuTriggerFor",o),e.xp6(9),e.Oqu(e.lcZ(44,35,"WPA.FAVOURITES_REMOVE"))}}function Ue(t,a){if(1&t&&e._UZ(0,"img",24),2&t){const n=e.oxw().$implicit;e.Q6J("src",null==n?null:n.images[0],e.LSH)}}function Ie(t,a){if(1&t&&e._UZ(0,"img",30),2&t){const n=e.oxw().$implicit;e.Q6J("src","assets/icons/"+("desk"===n.type?"desk":"car")+"-placeholder.svg",e.LSH)}}function Se(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"div",7)(1,"div",8)(2,"div",9),e.YNc(3,Ue,1,1,"img",10),e.YNc(4,Ie,1,1,"ng-template",null,26,e.W1O),e.qZA(),e.TgZ(6,"div",27)(7,"div",28),e._uU(8),e.qZA(),e.TgZ(9,"div",14)(10,"app-icon",15),e._uU(11,"place"),e.qZA(),e.TgZ(12,"div"),e._uU(13),e.qZA()()()(),e.TgZ(14,"button",18),e.NdJ("click",function(){const s=e.CHM(n).$implicit,l=e.oxw(2);return e.KtG(l.newBooking(s.type,s))}),e.SDv(15,29),e.ALo(16,"translate"),e.qZA(),e.TgZ(17,"button",19)(18,"app-icon"),e._uU(19,"more_horiz"),e.qZA()(),e.TgZ(20,"mat-menu",20,21)(22,"button",22),e.NdJ("click",function(){const s=e.CHM(n).$implicit,l=e.oxw(2);return e.KtG(l.toggleFavourite(s.type,s.id))}),e.TgZ(23,"app-icon",23),e._uU(24,"cancel"),e.qZA(),e.TgZ(25,"div"),e._uU(26),e.ALo(27,"translate"),e.qZA()()()()}if(2&t){const n=a.$implicit,i=e.MAs(5),o=e.MAs(21);e.xp6(3),e.Q6J("ngIf",null==n||null==n.images?null:n.images.length)("ngIfElse",i),e.xp6(5),e.hij(" ",(null==n?null:n.display_name)||(null==n?null:n.name)," "),e.xp6(5),e.hij(" ",null==n||null==n.zone?null:n.zone.display_name," "),e.xp6(3),e.pQV(e.lcZ(16,7,"WPA.BOOK")),e.QtT(15),e.xp6(1),e.Q6J("matMenuTriggerFor",o),e.xp6(9),e.hij("",e.lcZ(27,9,"WPA.FAVOURITES_REMOVE")," ")}}function Me(t,a){if(1&t&&(e.ynx(0),e.YNc(1,Ee,45,37,"div",6),e.YNc(2,Se,28,11,"div",6),e.ALo(3,"async"),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",n.spaces),e.xp6(1),e.Q6J("ngForOf",e.lcZ(3,2,n.assets))}}function we(t,a){1&t&&(e.TgZ(0,"div",31),e._UZ(1,"img",32),e.TgZ(2,"p",33),e._uU(3),e.ALo(4,"translate"),e.qZA()()),2&t&&(e.xp6(3),e.hij(" ",e.lcZ(4,1,"WPA.FAVOURITES_EMPTY")," "))}const M=[];let q=(()=>{class t extends u.KG{constructor(n,i,o,s,l){super(),this._settings=n,this._space_pipe=i,this._event_form=o,this._booking_form=s,this._router=l,this.assets=(0,T.aj)([this._booking_form.loadAssets("desks"),this._booking_form.loadAssets("parking_spaces")]).pipe((0,C.U)(([r,_])=>[...r.filter(({id:g})=>this.desks.includes(g)).map(g=>({...g,type:"desk"})),..._.filter(({id:g})=>this.parking_spaces.includes(g)).map(g=>({...g,type:"parking"}))]),(0,b.d)(1))}get spaces(){return this._settings.get("favourite_spaces")||M}get desks(){return this._settings.get(Y.v)||M}get parking_spaces(){return this._settings.get(Z.Bi)||M}ngOnInit(){}toggleFavourite(n,i){let o=this.spaces,s="favourite_spaces";switch(n){case"desk":o=this.desks,s=Y.v;break;case"parking":o=this.parking_spaces,s=Z.Bi}o.includes(i)?this._settings.saveUserSetting(s,o.filter(r=>r!==i)):this._settings.saveUserSetting(s,[...o,i])}newSpaceMeeting(n){var i=this;return(0,d.Z)(function*(){const o=yield i._space_pipe.transform(n);!o||(i._event_form.newForm(),i._event_form.form.patchValue({resources:[o]}),i._settings.get("app.new_features")?i._router.navigate(["/book","meeting"]):i._router.navigate(["/book","spaces"]))})()}newBooking(n,i){var o=this;return(0,d.Z)(function*(){!i||(o._booking_form.newForm(),o._booking_form.setOptions({type:n}),o._booking_form.form.patchValue({asset_id:i,booking_type:n}),o._settings.get("app.new_features")?o._router.navigate(["/book","desk"===n?"newdesk":"new-parking"]):o._router.navigate(["/book","desk"===n?"desks":"parking"]))})()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(u.gb),e.Y36(P.X),e.Y36(f.MH),e.Y36(Z.fy),e.Y36(v.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["landing-favourites"]],features:[e._Bn([P.X]),e.qOj],decls:8,vars:6,consts:function(){let a,n,i,o,s;return a=$localize`:␟e5191f926bd1e4e3a04904f3ed70be128d0df68e␟8885797130863755638:{VAR_PLURAL, plural, =1 {Resource } other {Resources }}`,a=e.Zx4(a,{VAR_PLURAL:"\ufffd1\ufffd"}),n=$localize`:␟9cfeafbe7fccbc1ea0e77b117ee30a235d3fbcbb␟1802740986701741685: ${"\ufffd0\ufffd"}:INTERPOLATION: ${a}:ICU: `,i=$localize`:␟292b0c8f5459f832824fbde4939054e5d313cfac␟3604407389403754414:{VAR_PLURAL, plural, =1 {Person } other {People }}`,i=e.Zx4(i,{VAR_PLURAL:"\ufffd1\ufffd"}),o=$localize`:␟3debb02c945d77818d916bf21e734def0311a492␟5508454923022029915: ${"\ufffd0\ufffd"}:INTERPOLATION: ${i}:ICU: `,s=$localize`:␟477a2990dc9e7a47c36b57d54f8150408a0c309b␟8490385903680845804: ${"\ufffd0\ufffd"}:INTERPOLATION: `,[[1,"flex","items-center","justify-between","py-2","mx-2","border-b","border-gray-200"],[1,"mx-2"],n,[1,"flex-1","h-1/2","w-full","space-y-2","overflow-auto","pt-4","divide-y","divide-gray-300"],[4,"ngIf","ngIfElse"],["empty_state",""],["class","flex flex-col items-center mx-2 pt-4 space-y-2 relative","item","",4,"ngFor","ngForOf"],["item","",1,"flex","flex-col","items-center","mx-2","pt-4","space-y-2","relative"],[1,"flex","w-full","items-center","space-x-2","relative"],[1,"w-20","h-20","overflow-hidden","rounded","relative","flex","items-center","justify-center","bg-black/10","dark:bg-white/5"],["class","absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover min-w-full min-h-full",3,"src",4,"ngIf","ngIfElse"],["space_placeholder",""],[1,"h-20","flex-1","w-1/2"],[1,"truncate","mb-4","w-full","pr-12"],[1,"flex","items-center","text-xs","opacity-60","truncate","space-x-2","mb-2"],[1,"text-blue-500"],[1,"flex","items-center","text-xs","opacity-60","truncate","space-x-2"],o,["mat-button","",1,"w-full","inverse",3,"click"],["mat-icon-button","",1,"absolute","top-2","right-0","bg-gray-200","dark:bg-neutral-600","rounded","!m-0",3,"matMenuTriggerFor"],["xPosition","before"],["menu","matMenu"],["mat-menu-item","",1,"flex","items-center","space-x-2",3,"click"],[1,"text-2xl"],[1,"absolute","top-1/2","left-1/2","-translate-x-1/2","-translate-y-1/2","object-cover","min-w-full","min-h-full",3,"src"],["src","assets/icons/room-placeholder.svg",1,"m-auto"],["asset_placeholder",""],[1,"h-20"],[1,"truncate","mb-4"],s,[1,"m-auto",3,"src"],[1,"w-full","h-full","flex","flex-col","items-center","justify-center","space-y-2","p-8"],["src","assets/icons/no-favourites.svg"],[1,"opacity-60","text-sm","text-center"]]},template:function(n,i){if(1&n&&(e.TgZ(0,"div",0)(1,"h2",1),e.SDv(2,2),e.qZA()(),e.TgZ(3,"div",3),e.YNc(4,Me,4,4,"ng-container",4),e.ALo(5,"async"),e.qZA(),e.YNc(6,we,5,3,"ng-template",null,5,e.W1O)),2&n){const o=e.MAs(7);let s;e.xp6(2),e.pQV((null==i.spaces?null:i.spaces.length)||0)(null==i.spaces?null:i.spaces.length),e.QtT(2),e.xp6(2),e.Q6J("ngIf",(null==i.spaces?null:i.spaces.length)||(null==(s=e.lcZ(5,4,i.assets))?null:s.length))("ngIfElse",o)}},dependencies:[p.sg,p.O5,O.o,A.VK,A.OP,A.p6,S.lW,p.Ov,L.X$,P.X],styles:["[user][_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column}\n/*# sourceMappingURL=landing-favourites.component.ts-angular-inline--75.css.map*/"]}),t})();var Re=c(5148),ke=c(1484),$e=c(2551),Ge=c(4088);function De(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"event-card",12),e.NdJ("edit",function(){e.CHM(n);const o=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.edit(o))})("remove",function(){e.CHM(n);const o=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.remove(o))}),e.qZA()}if(2&t){const n=e.oxw().$implicit;e.Q6J("event",n)("show_day",!0)}}function Je(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"booking-card",13),e.NdJ("remove",function(){e.CHM(n);const o=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.remove(o))}),e.qZA()}if(2&t){const n=e.oxw().$implicit;e.Q6J("booking",n)("show_day",!0)}}function Qe(t,a){if(1&t&&(e.ynx(0)(1,9),e.YNc(2,De,1,2,"event-card",10),e.YNc(3,Je,1,2,"booking-card",11),e.BQk()()),2&t){const n=a.$implicit,i=e.oxw(2);e.xp6(1),e.Q6J("ngSwitch",i.type(n)),e.xp6(1),e.Q6J("ngSwitchCase","event"),e.xp6(1),e.Q6J("ngSwitchCase","booking")}}function Ye(t,a){if(1&t&&(e.ynx(0),e.YNc(1,Qe,4,3,"ng-container",8),e.ALo(2,"slice"),e.ALo(3,"async"),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.Dn7(2,2,e.lcZ(3,6,n.upcoming_events),0,3))("ngForTrackBy",n.trackByFn)}}function qe(t,a){1&t&&(e.TgZ(0,"div",14),e._UZ(1,"img",15),e.TgZ(2,"p",16),e._uU(3),e.ALo(4,"translate"),e.qZA()()),2&t&&(e.xp6(3),e.Oqu(e.lcZ(4,1,"WPA.NO_UPCOMING_BOOKINGS")))}const W=function(){return["/your-bookings"]};let j=(()=>{class t{constructor(n,i,o,s){this._state=n,this._event_form=i,this._router=o,this._dialog=s,this.upcoming_events=this._state.upcoming_events}type(n){return n instanceof Z.$N?"booking":"event"}ngOnInit(){this._state.refreshUpcomingEvents()}ngOnDestroy(){this._state.stopPollingUpcomingEvents()}trackByFn(n,i){return i?.id}edit(n){this._router.navigate(["/book","meeting","form"]),this._event_form.newForm(n)}remove(n){var i=this;return(0,d.Z)(function*(){const o=`${(0,Re.Z)(n.date,"dd MMM yyyy h:mma")}`,l=`Delete the booking for ${n instanceof f.ym?n.space?.display_name:n.asset_name||n.asset_id} at ${o}`,r=yield(0,u._5)({title:"Delete booking",content:l,icon:{content:"delete"}},i._dialog);"done"===r.reason&&(r.loading("Requesting booking deletion..."),yield(n instanceof f.ym?f.xC:Z.pv)(n.id).toPromise().catch(_=>{throw(0,u.cB)(`Unable to delete booking. ${_}`),r.close(),_}),(0,u.t5)("Successfully deleted booking."),r.close())})()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(U),e.Y36(f.MH),e.Y36(v.F0),e.Y36(ke.uw))},t.\u0275cmp=e.Xpm({type:t,selectors:[["landing-upcoming"]],decls:16,vars:17,consts:[[1,"py-2"],[1,"flex","items-center","justify-between","mb-2","sm:mb-4","px-4"],[1,"sm:text-lg","font-medium"],["button","","mat-button","",1,"inverse","hidden","sm:block",3,"routerLink"],[1,"inverse","block","sm:hidden","text-blue-500","underline","relative","top-8",3,"routerLink"],[1,"space-y-4","px-4"],[4,"ngIf","ngIfElse"],["empty_state",""],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"ngSwitch"],[3,"event","show_day","edit","remove",4,"ngSwitchCase"],[3,"booking","show_day","remove",4,"ngSwitchCase"],[3,"event","show_day","edit","remove"],[3,"booking","show_day","remove"],[1,"w-full","p-8","flex","flex-col","items-center","justify-center","space-y-4"],["src","assets/img/no-events.svg",1,"mr-4"],[1,"opacity-30"]],template:function(n,i){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"a",3),e._uU(6),e.ALo(7,"translate"),e.qZA(),e.TgZ(8,"a",4),e._uU(9),e.ALo(10,"translate"),e.qZA()(),e.TgZ(11,"div",5),e.YNc(12,Ye,4,8,"ng-container",6),e.ALo(13,"async"),e.qZA()(),e.YNc(14,qe,5,3,"ng-template",null,7,e.W1O)),2&n){const o=e.MAs(15);let s;e.xp6(3),e.Oqu(e.lcZ(4,7,"WPA.YOUR_BOOKINGS")),e.xp6(2),e.Q6J("routerLink",e.DdM(15,W)),e.xp6(1),e.hij(" ",e.lcZ(7,9,"WPA.VIEW_ALL")," "),e.xp6(2),e.Q6J("routerLink",e.DdM(16,W)),e.xp6(1),e.hij(" ",e.lcZ(10,11,"WPA.VIEW_ALL")," "),e.xp6(3),e.Q6J("ngIf",null==(s=e.lcZ(13,13,i.upcoming_events))?null:s.length)("ngIfElse",o)}},dependencies:[p.sg,p.O5,p.RF,p.n9,S.zs,$e.j,Ge.E,v.yS,p.Ov,p.OU,L.X$]}),t})();var We=c(6361),je=c(4187),Ve=c(6012);function Ke(t,a){1&t&&e._UZ(0,"topbar",13)}function Xe(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"button",17),e.NdJ("click",function(){e.CHM(n);const o=e.oxw(2);return e.KtG(o.tab="people")}),e.TgZ(1,"app-icon"),e._uU(2,"people"),e.qZA(),e.TgZ(3,"div"),e._uU(4),e.ALo(5,"translate"),e.ALo(6,"uppercase"),e.qZA()()}if(2&t){const n=e.oxw(2);e.ekj("border-b","people"!==n.tab)("border-gray-300","people"!==n.tab)("bg-black","people"!==n.tab)("bg-opacity-5","people"!==n.tab),e.xp6(4),e.Oqu(e.lcZ(5,9,e.lcZ(6,11,"WPA.COLLEAGUES")))}}function Be(t,a){1&t&&e._UZ(0,"landing-colleagues")}function ze(t,a){1&t&&e._UZ(0,"landing-favourites")}function He(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"div",14)(1,"div",15),e.YNc(2,Xe,7,13,"button",16),e.TgZ(3,"button",17),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.tab="fav")}),e.TgZ(4,"app-icon"),e._uU(5,"favorite"),e.qZA(),e.TgZ(6,"div"),e._uU(7),e.ALo(8,"translate"),e.qZA()()(),e.TgZ(9,"div",18),e.YNc(10,Be,1,0,"landing-colleagues",12),e.YNc(11,ze,1,0,"landing-favourites",12),e.qZA()()}if(2&t){const n=e.oxw();e.xp6(2),e.Q6J("ngIf",!n.hide_colleagues),e.xp6(1),e.ekj("border-b","fav"!==n.tab)("border-gray-300","fav"!==n.tab)("bg-black","fav"!==n.tab)("bg-opacity-5","fav"!==n.tab),e.xp6(4),e.Oqu(e.lcZ(8,12,"WPA.FAVOURITES")),e.xp6(3),e.Q6J("ngIf","people"===n.tab&&!n.hide_colleagues),e.xp6(1),e.Q6J("ngIf","fav"===n.tab||n.hide_colleagues)}}function en(t,a){if(1&t&&(e.TgZ(0,"div",19),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.hij(" ",n.building.address||n.building.display_name||n.building.name," ")}}function nn(t,a){1&t&&e._UZ(0,"footer-menu")}const tn=function(t){return{name:t}};const on=[{path:"",component:(()=>{class t{constructor(n,i){this._org=n,this._settings=i,this.tab="people"}get hide_nav(){return"true"===localStorage.getItem("PlaceOS.hide_nav")}get date(){return(0,We.Z)(this.time||Date.now())}get user(){return(0,u.ar)()}get building(){return this._org.building}get hide_landing_sidebar(){return this._settings.get("app.general.hide_landing_sidebar")}get hide_colleagues(){return this._settings.get("app.general.hide_colleagues")}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(F.w7),e.Y36(u.gb))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-dashboard"]],decls:19,vars:14,consts:[["class","z-10",4,"ngIf"],[1,"flex","flex-1","h-1/2","bg-[#F8F8FA]","dark:bg-neutral-900"],["class","relative hidden sm:flex flex-col w-[18rem] h-full overflow-hidden bg-white dark:bg-[#1F2021] border-r border-gray-200 dark:border-neutral-700",4,"ngIf"],[1,"flex-1","h-full","w-1/2","sm:px-4","overflow-auto","z-0"],[1,"sticky","top-0","z-50","bg-[#ECF0F3]","dark:bg-zinc-800","px-4","sm:rounded-b","flex","items-center","justify-between","overflow-hidden"],[1,""],[1,"sm:text-xl","font-medium"],["date","",1,"text-sm","sm:text-base"],["class","text-sm sm:text-base",4,"ngIf"],[1,"h-32","pt-4"],["src","assets/img/landing.svg"],[1,"mx-4","w-[calc(100%-2rem)]","h-px","bg-gray-300","mb-2"],[4,"ngIf"],[1,"z-10"],[1,"relative","hidden","sm:flex","flex-col","w-[18rem]","h-full","overflow-hidden","bg-white","dark:bg-[#1F2021]","border-r","border-gray-200","dark:border-neutral-700"],[1,"flex","items-center","divide-x","divide-gray-300"],["matRipple","","class","flex-1 font-medium p-2 flex items-center justify-center space-x-2",3,"border-b","border-gray-300","bg-black","bg-opacity-5","click",4,"ngIf"],["matRipple","",1,"flex-1","font-medium","p-2","flex","items-center","justify-center","space-x-2",3,"click"],[1,"flex-1","w-full","h-1/2"],[1,"text-sm","sm:text-base"]],template:function(n,i){1&n&&(e.YNc(0,Ke,1,0,"topbar",0),e.TgZ(1,"div",1),e.YNc(2,He,12,14,"div",2),e.TgZ(3,"div",3)(4,"header",4)(5,"div",5)(6,"div",6),e._uU(7),e.ALo(8,"translate"),e.qZA(),e.TgZ(9,"div",7),e._uU(10),e.ALo(11,"date"),e.qZA(),e.YNc(12,en,2,1,"div",8),e.qZA(),e.TgZ(13,"div",9),e._UZ(14,"img",10),e.qZA()(),e._UZ(15,"landing-availability")(16,"div",11)(17,"landing-upcoming"),e.qZA()(),e.YNc(18,nn,1,0,"footer-menu",12)),2&n&&(e.Q6J("ngIf",!i.hide_nav),e.xp6(2),e.Q6J("ngIf",!i.hide_landing_sidebar),e.xp6(5),e.hij(" ",e.xi3(8,6,"WPA.WELCOME_MESSAGE",e.VKq(12,tn,null==i.user?null:i.user.name))," "),e.xp6(3),e.hij(" ",e.xi3(11,9,i.date,"fullDate")," "),e.xp6(2),e.Q6J("ngIf",(null==i.building?null:i.building.address)||(null==i.building?null:i.building.name)),e.xp6(6),e.Q6J("ngIf",!i.hide_nav))},dependencies:[p.O5,je.o,Ve.i,O.o,I.wG,Q,J,j,q,p.gd,p.uU,L.X$],styles:["[_nghost-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;display:flex;flex-direction:column}main[_ngcontent-%COMP%]{min-height:50%}\n/*# sourceMappingURL=landing.component.ts-angular-inline--76.css.map*/"]}),t})()}];let sn=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.ez,K.v,y.u5,v.Bz.forChild(on)]}),t})()}}]);
//# sourceMappingURL=apps_workplace_src_app_landing_landing_module_ts.js.map