"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["apps_workplace_src_app_landing_landing_module_ts"],{368:(ze,G,c)=>{c.r(G),c.d(G,{AppLandingModule:()=>qe});var d=c(4666),T=c(2508),N=c(959),Q=c(8147),p=c(1670),I=c(6221),P=c(3690),L=c(4505),M=c(4139),h=c(6942),q=c(823),z=c(9095),$=c(7418),j=c(8759),D=c(9128),B=c(5670),H=c(9151),ee=c(3910),ne=c(3200),u=c(232),m=c(1299),S=c(3149),te=c(9434),oe=c(7625),e=c(9676);let x=(()=>{class o extends u.KG{constructor(n,t,i){super(),this._calendar=n,this._schedule=t,this._org=i,this._options=new L.X({}),this._loading=new L.X(""),this._loading_spaces=new L.X(!1),this._free_spaces=new L.X([]),this._contacts=new L.X([]),this._level_occupancy=new L.X([]),this.free_spaces=this._free_spaces.asObservable(),this.upcoming_events=this._schedule.filtered_bookings.pipe((0,h.U)(s=>s.filter(_=>_ instanceof m.ym))),this.contacts=this._contacts.asObservable(),this.options=this._options.asObservable(),this.loading=this._loading.asObservable(),this.loading_spaces=this._loading_spaces.asObservable(),this.search_results=this._options.pipe((0,q.b)(500),(0,z.w)(({search:s})=>(this._loading.next("Loading users..."),s?(0,S.VE)(s).pipe((0,$.K)(()=>(0,M.of)([]))):(0,M.of)([]))),(0,j.b)(()=>this._loading.next("")),(0,D.d)(1)),this.level_occupancy=this._level_occupancy.asObservable(),this.init()}init(){var n=this;return(0,p.Z)(function*(){yield n._org.initialised.pipe((0,B.P)(s=>s)).toPromise(),n.subscription("building",n._org.active_building.pipe((0,H.h)(s=>!!s)).subscribe(()=>{n.updateBuildingMetadata(),n.updateOccupancy({})}));let t=n._org.binding("area_management");if(!t)return;const i=(0,P.rTZ)(t,"AreaManagement").binding("overview");i.listen().subscribe(s=>n.updateOccupancy(s||{})),i.bind()})()}setOptions(n){this._options.next({...this._options.getValue(),...n})}pollFreeSpaces(n=6e4){this._loading_spaces.next(!0),this.updateFreeSpaces(),this.interval("free_spaces",()=>this.updateFreeSpaces(),n)}stopPollingFreeSpaces(){this.clearInterval("free_spaces")}pollUpcomingEvents(n=1e4){return this._schedule.setDate(Date.now()),this._schedule.startPolling(n)}stopPollingUpcomingEvents(){this._schedule.stopPolling()}updateContacts(){var n=this;return(0,p.Z)(function*(){const t=yield(0,P.rlq)((0,u.ar)().id,"contacts").toPromise();n._contacts.next((t.details instanceof Array?t.details:[]).map(s=>new S.n5(s)))})()}addContact(n){var t=this;return(0,p.Z)(function*(){let i=[...t._contacts.getValue()];i.push(n),i=(0,u.Tw)(i,"email");const s=yield(0,P.Ymr)((0,u.ar)().id,{name:"contacts",description:"Contacts for the User",details:i}).toPromise();t._contacts.next((s.details instanceof Array?s.details:[]).map(l=>new S.n5(l)))})()}removeContact(n){var t=this;return(0,p.Z)(function*(){let i=[...t._contacts.getValue()];i=i.filter(l=>l.email!==n.email);const s=yield(0,P.Ymr)((0,u.ar)().id,{name:"contacts",description:"Contacts for the User",details:i}).toPromise();t._contacts.next((s.details instanceof Array?s.details:[]).map(l=>new S.n5(l)))})()}updateOccupancy(n){var t=this;return(0,p.Z)(function*(){const i=[...yield t._org.active_levels.pipe((0,ee.q)(1)).toPromise()];i.sort((s,_)=>n[s.id]?.recommendation-n[_.id]?.recommendation),t._level_occupancy.next(i)})()}updateFreeSpaces(){var n=this;return(0,p.Z)(function*(){if(!n._org.building)return;n._loading_spaces.next(!0);const t=Math.floor((new Date).valueOf()/1e3),i=Math.floor((0,ne.Z)(new Date).valueOf()/1e3),s=yield n._calendar.freeBusy({period_start:t,period_end:i,zone_ids:n._org.building.id}).pipe((0,h.U)(_=>_.filter(l=>!l.availability.length||l.availability.find(r=>"busy"!==r.status))),(0,$.K)(_=>(0,M.of)([]))).toPromise();s.sort((_,l)=>_.capacity-l.capacity),n._free_spaces.next(s),n._loading_spaces.next(!1)})()}updateBuildingMetadata(){var n=this;return(0,p.Z)(function*(){n._level_occupancy.next([]);const t=n._org.binding("occupancy");if(!t)return;const{sys:i,module:s,index:_}=t,l=(0,P.rTZ)(i,s,_);!l||(n._occupancy_binding&&n._occupancy_binding.unbind(),n._occupancy_binding=l.binding("occupancy"),n._occupancy_binding.bind(),n.subscription("occupancy_binding",n._occupancy_binding.listen().subscribe(r=>{const g=Object.keys(r).map(f=>({id:f,...r[f]}));g.sort((f,O)=>f.recommendation_factor-O.recommendation_factor),n._level_occupancy.next(g.map(f=>n._org.levelWithID([f.id])))})))})()}}return o.\u0275fac=function(n){return new(n||o)(e.LFG(te.ot),e.LFG(oe.I),e.LFG(I.w7))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var b=c(5306),F=c(1708),y=c(207),E=c(6198);const U=function(){return["/explore"]},ie=function(o){return{level:o}};function se(o,a){if(1&o&&(e.TgZ(0,"button",11)(1,"div",12),e._UZ(2,"img",13),e.qZA(),e.TgZ(3,"div",14)(4,"div",15),e._uU(5),e.qZA(),e.TgZ(6,"div",16)(7,"app-icon",17),e._uU(8,"place"),e.qZA(),e.TgZ(9,"span"),e._uU(10),e.qZA()()()()),2&o){const n=a.$implicit,t=e.oxw();let i;e.Q6J("routerLink",e.DdM(4,U))("queryParams",e.VKq(5,ie,n.id)),e.xp6(5),e.hij(" ",n.display_name||n.name," "),e.xp6(5),e.Oqu((null==(i=t.building(n.parent_id))?null:i.display_name)||(null==(i=t.building(n.parent_id))?null:i.name))}}function ae(o,a){1&o&&(e.TgZ(0,"span",18),e.SDv(1,19),e.qZA())}function _e(o,a){1&o&&e._UZ(0,"mat-spinner",20)}function le(o,a){if(1&o&&(e._UZ(0,"img",23),e.ALo(1,"async"),e.ALo(2,"space")),2&o){const n=e.oxw().$implicit;let t;e.Q6J("src",null==(t=e.lcZ(1,1,e.lcZ(2,3,n.id)))?null:t.images[0],e.LSH)}}const ce=function(o){return{space:o}};function re(o,a){if(1&o&&(e.TgZ(0,"button",11)(1,"div",21),e.YNc(2,le,3,5,"img",22),e.ALo(3,"async"),e.ALo(4,"space"),e.qZA(),e.TgZ(5,"div",14)(6,"div",15),e._uU(7),e.qZA(),e.TgZ(8,"div",16)(9,"app-icon",17),e._uU(10,"place"),e.qZA(),e.TgZ(11,"span"),e._uU(12),e.qZA()()()()),2&o){const n=a.$implicit;e.oxw();const t=e.MAs(22);let i;e.Q6J("routerLink",e.DdM(10,U))("queryParams",e.VKq(11,ce,n.email)),e.xp6(2),e.Q6J("ngIf",null==(i=e.lcZ(3,6,e.lcZ(4,8,n.id)))||null==i.images?null:i.images.length)("ngIfElse",t),e.xp6(5),e.hij(" ",n.display_name||n.name," "),e.xp6(5),e.Oqu(n.level.display_name||n.level.name)}}function ge(o,a){1&o&&(e.TgZ(0,"span",18),e.SDv(1,24),e.qZA())}function de(o,a){1&o&&e._UZ(0,"img",25)}let w=(()=>{class o{constructor(n,t){this._state=n,this._org=t,this.space_list=this._state.free_spaces,this.loading_spaces=this._state.loading_spaces,this.levels_free=this._state.level_occupancy}building(n){return this._org.buildings.find(t=>t.id===n)}ngOnInit(){var n=this;return(0,p.Z)(function*(){n._state.pollFreeSpaces()})()}ngOnDestroy(){this._state.stopPollingFreeSpaces()}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(x),e.Y36(I.w7))},o.\u0275cmp=e.Xpm({type:o,selectors:[["landing-availability"]],decls:23,vars:15,consts:function(){let a,n,t,i,s;return a=$localize`:␟3a751d0557f9c28ff84fe527083c52af75a94e3f␟3922234288564108871: Available Now `,n=$localize`:␟041a8f5e357685f1af16ffb9ffda7f2db6dcef20␟660809762116764762:Spaces`,t=$localize`:␟d3dfb1ca49bb491ad804012a2ea1838e9e263cfd␟6318077128670918892:Rooms`,i=$localize`:␟f1ba51fa203f187b0732f2e00071bba135f83d54␟4848557650126869230: No free spaces `,s=$localize`:␟531acf969f5b51cf6c4b1d141f7e808f354e361d␟8005849633726040802: No free rooms `,[[1,"py-2"],[1,"sm:text-lg","font-medium","mb-2","sm:mb-4","px-4"],a,[1,"flex","items-center","text-sm","sm:text-base","px-4","space-x-2"],n,[1,"w-full","overflow-auto","flex","items-center","space-x-4","px-4","py-2"],["matRipple","","class","flex items-center h-24 min-w-[12.5rem] rounded-lg bg-white dark:bg-[#1F2021] shadow p-4 space-x-2",3,"routerLink","queryParams",4,"ngFor","ngForOf"],["class","opacity-60 text-sm mb-2",4,"ngIf"],t,["diameter","24",4,"ngIf"],["space_placeholder",""],["matRipple","",1,"flex","items-center","h-24","min-w-[12.5rem]","rounded-lg","bg-white","dark:bg-[#1F2021]","shadow","p-4","space-x-2",3,"routerLink","queryParams"],[1,"min-w-[4.5rem]","h-[4.5rem]","rounded","bg-gray-200","dark:bg-neutral-800","flex","items-center","justify-center"],["src","assets/icons/desk-placeholder.svg",1,"m-auto"],[1,"text-left"],[1,"max-w-full","truncate","px-1.5"],[1,"max-w-full","truncate","text-sm","opacity-60","flex","items-center"],[1,"text-blue-500","text-lg"],[1,"opacity-60","text-sm","mb-2"],i,["diameter","24"],[1,"w-[4.5rem]","h-[4.5rem]","rounded","bg-gray-200","dark:bg-neutral-800","overflow-hidden","flex","items-center","justify-center"],["class","min-h-full object-cover",3,"src",4,"ngIf","ngIfElse"],[1,"min-h-full","object-cover",3,"src"],s,["src","assets/icons/room-placeholder.svg",1,"m-auto"]]},template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e.SDv(2,2),e.qZA(),e.TgZ(3,"div",3)(4,"div"),e.SDv(5,4),e.qZA()(),e.TgZ(6,"div",5),e.YNc(7,se,11,7,"button",6),e.ALo(8,"async"),e.YNc(9,ae,2,0,"span",7),e.ALo(10,"async"),e.qZA(),e.TgZ(11,"div",3)(12,"div"),e.SDv(13,8),e.qZA(),e.YNc(14,_e,1,0,"mat-spinner",9),e.ALo(15,"async"),e.qZA(),e.TgZ(16,"div",5),e.YNc(17,re,13,13,"button",6),e.ALo(18,"async"),e.YNc(19,ge,2,0,"span",7),e.ALo(20,"async"),e.qZA()(),e.YNc(21,de,1,0,"ng-template",null,10,e.W1O)),2&n&&(e.xp6(7),e.Q6J("ngForOf",e.lcZ(8,5,t.levels_free)),e.xp6(2),e.Q6J("ngIf",!e.lcZ(10,7,t.levels_free).length),e.xp6(5),e.Q6J("ngIf",e.lcZ(15,9,t.loading_spaces)),e.xp6(3),e.Q6J("ngForOf",e.lcZ(18,11,t.space_list)),e.xp6(2),e.Q6J("ngIf",!e.lcZ(20,13,t.space_list).length))},dependencies:[d.sg,d.O5,b.o,F.Ou,y.wG,N.rH,d.Ov,E.X],styles:["*[_ngcontent-%COMP%]{flex-shrink:0}\n/*# sourceMappingURL=landing-availability.component.ts-angular-inline--72.css.map*/"]}),o})();var k=c(7716),ue=c(9685),v=c(8589),Z=c(4522);const pe=["search_input"];function fe(o,a){if(1&o){const n=e.EpF();e.TgZ(0,"div",15)(1,"div",16),e._UZ(2,"a-user-avatar",17)(3,"div",18),e.qZA(),e.TgZ(4,"div",19)(5,"div",20),e._uU(6),e.qZA(),e.TgZ(7,"div",21),e._uU(8),e.qZA(),e.TgZ(9,"div",22),e._uU(10),e.qZA()(),e.TgZ(11,"button",23)(12,"app-icon"),e._uU(13,"more_horiz"),e.qZA()(),e.TgZ(14,"mat-menu",24,25)(16,"button",26),e.NdJ("click",function(){const s=e.CHM(n).$implicit,_=e.oxw(2);return e.KtG(_.newMeeting(s))}),e.TgZ(17,"app-icon",27),e._uU(18,"today"),e.qZA(),e.TgZ(19,"div"),e.SDv(20,28),e.qZA()(),e.TgZ(21,"button",26),e.NdJ("click",function(){const s=e.CHM(n).$implicit,_=e.oxw(2);return e.KtG(_.removeContact(s))}),e.TgZ(22,"app-icon",27),e._uU(23,"cancel"),e.qZA(),e.TgZ(24,"div"),e.SDv(25,29),e.qZA()()()()}if(2&o){const n=a.$implicit,t=e.MAs(15);e.xp6(2),e.Q6J("user",n),e.xp6(1),e.ekj("bg-error",!n.location)("bg-success",n.location),e.xp6(3),e.Oqu(n.name),e.xp6(2),e.hij(" ",n.organisation," "),e.xp6(2),e.hij(" ",n.location," "),e.xp6(1),e.Q6J("matMenuTriggerFor",t)}}function Ae(o,a){if(1&o&&(e.ynx(0),e.YNc(1,fe,26,9,"div",14),e.ALo(2,"async"),e.BQk()),2&o){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,n.contacts))}}function me(o,a){if(1&o){const n=e.EpF();e.TgZ(0,"button",32),e.NdJ("click",function(){const s=e.CHM(n).$implicit,_=e.oxw(3);return e.KtG(_.addUser(s))}),e.TgZ(1,"div",33),e._UZ(2,"a-user-avatar",17)(3,"div",18),e.qZA(),e.TgZ(4,"div",34)(5,"div",20),e._uU(6),e.qZA(),e.TgZ(7,"div",21),e._uU(8),e.qZA()()()}if(2&o){const n=a.$implicit;e.xp6(2),e.Q6J("user",n),e.xp6(1),e.ekj("bg-error",!n.location)("bg-success",n.location),e.xp6(3),e.Oqu(n.name),e.xp6(2),e.hij(" ",n.organisation," ")}}function Ne(o,a){if(1&o&&(e.ynx(0),e.YNc(1,me,9,7,"button",31),e.ALo(2,"async"),e.BQk()),2&o){const n=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,n.search_results))}}function Le(o,a){if(1&o&&(e.TgZ(0,"div",30),e.YNc(1,Ne,3,3,"ng-container",4),e.ALo(2,"async"),e.qZA()),2&o){const n=e.oxw(),t=e.MAs(22);let i;e.xp6(1),e.Q6J("ngIf",null==(i=e.lcZ(2,2,n.search_results))?null:i.length)("ngIfElse",t)}}function ve(o,a){1&o&&(e.TgZ(0,"div",35),e._UZ(1,"img",36),e.TgZ(2,"p",37),e.SDv(3,38),e.qZA()())}function Pe(o,a){if(1&o&&(e.TgZ(0,"div",35)(1,"p",37),e._uU(2),e.ALo(3,"async"),e.ALo(4,"async"),e.qZA()()),2&o){const n=e.oxw();let t;e.xp6(2),e.hij(" ",null!=(t=e.lcZ(3,1,n.options))&&t.search?'Unable for find any users matching "'+(null==(t=e.lcZ(4,3,n.options))?null:t.search)+'"':"Start typing to search for users."," ")}}function Ce(o,a){1&o&&(e.TgZ(0,"div",35),e._UZ(1,"mat-spinner",39),e.TgZ(2,"p",37),e.SDv(3,40),e.qZA()())}let K=(()=>{class o extends u.KG{constructor(n,t,i,s){var _;super(),_=this,this._state=n,this._settings=t,this._event_form=i,this._router=s,this.show_search=!1,this.contacts=this._state.contacts,this.search_results=(0,k.aj)([this._state.search_results,this._state.contacts]).pipe((0,h.U)(([l,r])=>l.filter(g=>!r.find(f=>f.id!==g.id&&f.email!==g.email)))),this.options=this._state.options,this.loading=this._state.loading,this.addUser=function(){var l=(0,p.Z)(function*(r){yield _._state.addContact(r),(0,u.t5)(`Successfully added "${r.name}" to contacts`),_.show_search=!1});return function(r){return l.apply(this,arguments)}}(),this.removeUser=function(){var l=(0,p.Z)(function*(r){yield _._state.removeContact(r),(0,u.t5)(`Successfully removed "${r.name}" from contacts`)});return function(r){return l.apply(this,arguments)}}(),this.updateSearch=l=>this._state.setOptions({search:l})}newMeeting(n){this._event_form.newForm(),this._event_form.form.patchValue({attendees:[n]}),this._settings.get("app.new_features")?this._router.navigate(["/book","meeting"]):this._router.navigate(["/book","spaces"])}openSearch(){this.updateSearch(""),this.show_search=!0,this.timeout("open",()=>this._input_el.nativeElement.focus(),100)}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(x),e.Y36(u.gb),e.Y36(m.MH),e.Y36(N.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["landing-colleagues"]],viewQuery:function(n,t){if(1&n&&e.Gf(pe,7),2&n){let i;e.iGM(i=e.CRH())&&(t._input_el=i.first)}},features:[e.qOj],decls:25,vars:19,consts:function(){let a,n,t,i,s,_;return a=$localize`:␟9fe8e61e3855a29d7d5fb9b55a5f0c640b0e0a37␟3604407389403754414:{VAR_PLURAL, plural, =1 {Person } other {People }}`,a=e.Zx4(a,{VAR_PLURAL:"\ufffd1\ufffd"}),n=$localize`:␟d28ecc1b59327a5190b5b81cfdf0520546265763␟6833675758051664854:${"\ufffd0\ufffd"}:INTERPOLATION: ${a}:ICU:`,t=$localize`:␟9634f070e1adcfeb5f6b0449395b458036765f9f␟763832470447831212:Create Meeting`,i=$localize`:␟5a7f5ef4e93e9b07d5a785c6be1da737184599ca␟5682716952120564329:Remove Colleague`,s=$localize`:␟c3ba7ea70b42d166eec181b33b0955f7bf81df98␟6915941251612384754: You have no colleagues added. Please select the "Add" button to get started. `,_=$localize`:␟6b0e28b3f026ffa83998f368b99365c4467039af␟9210172911271158667:Searching users...`,[[1,"flex","items-center","justify-between","py-2","mx-2","border-b","border-gray-200"],[1,"mx-2"],n,[1,"flex-1","h-1/2","w-full","space-y-4","overflow-auto","pt-4"],[4,"ngIf","ngIfElse"],["mat-button","",1,"inverse","w-[calc(100%-1rem)]","m-2",3,"click"],["search","",1,"absolute","inset-x-2","top-2","bottom-[3.5rem]","rounded-lg","overflow-hidden","flex","flex-col","bg-white","dark:bg-neutral-600","shadow","border","border-gray-200"],["placeholder","Search for users...",1,"w-full","border-b","border-gray-200","p-2","rounded-t-lg",3,"ngModel","ngModelChange"],["search_input",""],["mat-icon-button","",1,"absolute","top-0","right-0",3,"click"],["class","overflow-auto flex-1 h-1/2 flex flex-col space-y-2",4,"ngIf","ngIfElse"],["empty_state",""],["search_empty",""],["load_state",""],["class","flex items-center px-2 space-x-2 relative","user","",4,"ngFor","ngForOf"],["user","",1,"flex","items-center","px-2","space-x-2","relative"],[1,"text-xl","relative"],[3,"user"],[1,"rounded-full","h-3","w-3","border","border-white","dark:border-neutral-400","absolute","bottom-1","right-1"],[1,"leading-tight","flex-1"],[1,"truncate"],[1,"text-sm","truncate"],[1,"text-xs","opacity-60","truncate"],["mat-icon-button","",1,"rounded","bg-gray-300",3,"matMenuTriggerFor"],["xPosition","before"],["menu","matMenu"],["mat-menu-item","",1,"flex","items-center","space-x-2",3,"click"],[1,"text-2xl"],t,i,[1,"overflow-auto","flex-1","h-1/2","flex","flex-col","space-y-2"],["matRipple","","class","flex items-center p-2 space-x-2 w-full text-left",3,"click",4,"ngFor","ngForOf"],["matRipple","",1,"flex","items-center","p-2","space-x-2","w-full","text-left",3,"click"],[1,"text-base","relative"],[1,"leading-tight"],[1,"w-full","h-full","flex","flex-col","items-center","justify-center","space-y-2","p-8"],["src","assets/icons/no-contacts.svg"],[1,"opacity-60","text-sm","text-center"],s,["diameter","32"],_]},template:function(n,t){if(1&n&&(e.TgZ(0,"div",0)(1,"h2",1),e.SDv(2,2),e.ALo(3,"async"),e.ALo(4,"async"),e.qZA()(),e.TgZ(5,"div",3),e.YNc(6,Ae,3,3,"ng-container",4),e.ALo(7,"async"),e.qZA(),e.TgZ(8,"button",5),e.NdJ("click",function(){return t.openSearch()}),e._uU(9," Add "),e.qZA(),e.TgZ(10,"div",6)(11,"input",7,8),e.NdJ("ngModelChange",function(s){return t.updateSearch(s)}),e.ALo(13,"async"),e.qZA(),e.TgZ(14,"button",9),e.NdJ("click",function(){return t.show_search=!1}),e.TgZ(15,"app-icon"),e._uU(16,"close"),e.qZA()(),e.YNc(17,Le,3,4,"div",10),e.ALo(18,"async"),e.qZA(),e.YNc(19,ve,4,0,"ng-template",null,11,e.W1O),e.YNc(21,Pe,5,5,"ng-template",null,12,e.W1O),e.YNc(23,Ce,4,0,"ng-template",null,13,e.W1O)),2&n){const i=e.MAs(20),s=e.MAs(24);let _,l,r,g;e.xp6(4),e.pQV((null==(_=e.lcZ(3,9,t.contacts))?null:_.length)||0)(null==(l=e.lcZ(4,11,t.contacts))?null:l.length),e.QtT(2),e.xp6(2),e.Q6J("ngIf",null==(r=e.lcZ(7,13,t.contacts))?null:r.length)("ngIfElse",i),e.xp6(4),e.ekj("hidden",!t.show_search),e.xp6(1),e.Q6J("ngModel",null==(g=e.lcZ(13,15,t.options))?null:g.search),e.xp6(6),e.Q6J("ngIf",!e.lcZ(18,17,t.loading))("ngIfElse",s)}},dependencies:[d.sg,d.O5,b.o,ue.k,v.VK,v.OP,v.p6,Z.lW,F.Ou,y.wG,T.Fj,T.JJ,T.On,d.Ov],styles:["[user][_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column}\n/*# sourceMappingURL=landing-colleagues.component.ts-angular-inline--73.css.map*/"]}),o})();var C=c(9638),X=c(6485);function Te(o,a){if(1&o&&(e._UZ(0,"img",28),e.ALo(1,"async"),e.ALo(2,"space")),2&o){const n=e.oxw().$implicit;let t;e.Q6J("src",null==(t=e.lcZ(1,1,e.lcZ(2,3,n)))?null:t.images[0],e.LSH)}}function he(o,a){1&o&&e._UZ(0,"img",29)}function Se(o,a){if(1&o){const n=e.EpF();e.TgZ(0,"div",7)(1,"div",8)(2,"div",9),e.YNc(3,Te,3,5,"img",10),e.ALo(4,"async"),e.ALo(5,"space"),e.YNc(6,he,1,0,"ng-template",null,11,e.W1O),e.qZA(),e.TgZ(8,"div",12)(9,"div",13),e._uU(10),e.ALo(11,"async"),e.ALo(12,"space"),e.ALo(13,"async"),e.ALo(14,"space"),e.qZA(),e.TgZ(15,"div",14)(16,"app-icon",15),e._uU(17,"place"),e.qZA(),e.TgZ(18,"div"),e._uU(19),e.ALo(20,"async"),e.ALo(21,"space"),e.qZA()(),e.TgZ(22,"div",16)(23,"app-icon",15),e._uU(24,"people"),e.qZA(),e.TgZ(25,"div"),e.SDv(26,17),e.ALo(27,"async"),e.ALo(28,"space"),e.ALo(29,"async"),e.ALo(30,"space"),e.qZA()()()(),e.TgZ(31,"button",18),e.NdJ("click",function(){const s=e.CHM(n).$implicit,_=e.oxw(2);return e.KtG(_.newSpaceMeeting(s))}),e.SDv(32,19),e.qZA(),e.TgZ(33,"button",20)(34,"app-icon"),e._uU(35,"more_horiz"),e.qZA()(),e.TgZ(36,"mat-menu",21,22)(38,"button",23)(39,"app-icon",24),e._uU(40,"info"),e.qZA(),e.TgZ(41,"div"),e.SDv(42,25),e.qZA()(),e.TgZ(43,"button",26),e.NdJ("click",function(){e.CHM(n);const i=e.oxw(2);return e.KtG(i.toggleFavourite("space",i.id))}),e.TgZ(44,"app-icon",24),e._uU(45,"cancel"),e.qZA(),e.TgZ(46,"div"),e.SDv(47,27),e.qZA()()()()}if(2&o){const n=a.$implicit,t=e.MAs(7),i=e.MAs(37);let s,_,l,r,g;e.xp6(3),e.Q6J("ngIf",null==(s=e.lcZ(4,7,e.lcZ(5,9,n)))||null==s.images?null:s.images.length)("ngIfElse",t),e.xp6(7),e.hij(" ",(null==(_=e.lcZ(11,11,e.lcZ(12,13,n)))?null:_.display_name)||(null==(_=e.lcZ(13,15,e.lcZ(14,17,n)))?null:_.name)," "),e.xp6(9),e.hij(" ",null==(l=e.lcZ(20,19,e.lcZ(21,21,n)))||null==l.level?null:l.level.display_name," "),e.xp6(11),e.pQV((null==(r=e.lcZ(27,23,e.lcZ(28,25,n)))?null:r.capacity)||2)((null==(g=e.lcZ(29,27,e.lcZ(30,29,n)))?null:g.capacity)||2),e.QtT(26),e.xp6(3),e.Q6J("matMenuTriggerFor",i)}}function be(o,a){if(1&o&&e._UZ(0,"img",28),2&o){const n=e.oxw().$implicit;e.Q6J("src",null==n?null:n.images[0],e.LSH)}}function Ee(o,a){if(1&o&&e._UZ(0,"img",34),2&o){const n=e.oxw().$implicit;e.Q6J("src","assets/icons/"+("desk"===n.type?"desk":"car")+"-placeholder.svg",e.LSH)}}function Oe(o,a){if(1&o){const n=e.EpF();e.TgZ(0,"div",7)(1,"div",8)(2,"div",9),e.YNc(3,be,1,1,"img",10),e.YNc(4,Ee,1,1,"ng-template",null,30,e.W1O),e.qZA(),e.TgZ(6,"div",12)(7,"div",13),e._uU(8),e.qZA(),e.TgZ(9,"div",14)(10,"app-icon",15),e._uU(11,"place"),e.qZA(),e.TgZ(12,"div"),e._uU(13),e.qZA()()()(),e.TgZ(14,"button",18),e.NdJ("click",function(){const s=e.CHM(n).$implicit,_=e.oxw(2);return e.KtG(_.newBooking(s.type,s))}),e.SDv(15,31),e.qZA(),e.TgZ(16,"button",20)(17,"app-icon"),e._uU(18,"more_horiz"),e.qZA()(),e.TgZ(19,"mat-menu",21,22)(21,"button",23)(22,"app-icon",24),e._uU(23,"info"),e.qZA(),e.TgZ(24,"div"),e.SDv(25,32),e.qZA()(),e.TgZ(26,"button",26),e.NdJ("click",function(){const s=e.CHM(n).$implicit,_=e.oxw(2);return e.KtG(_.toggleFavourite(s.type,s.id))}),e.TgZ(27,"app-icon",24),e._uU(28,"cancel"),e.qZA(),e.TgZ(29,"div"),e.SDv(30,33),e.qZA()()()()}if(2&o){const n=a.$implicit,t=e.MAs(5),i=e.MAs(20);e.xp6(3),e.Q6J("ngIf",null==n||null==n.images?null:n.images.length)("ngIfElse",t),e.xp6(5),e.hij(" ",(null==n?null:n.display_name)||(null==n?null:n.name)," "),e.xp6(5),e.hij(" ",null==n||null==n.zone?null:n.zone.display_name," "),e.xp6(3),e.Q6J("matMenuTriggerFor",i)}}function Ie(o,a){if(1&o&&(e.ynx(0),e.YNc(1,Se,48,31,"div",6),e.YNc(2,Oe,31,5,"div",6),e.ALo(3,"async"),e.BQk()),2&o){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",n.spaces),e.xp6(1),e.Q6J("ngForOf",e.lcZ(3,2,n.assets))}}function Me(o,a){1&o&&(e.TgZ(0,"div",35),e._UZ(1,"img",36),e.TgZ(2,"p",37),e.SDv(3,38),e.qZA()())}const R=[];let Y=(()=>{class o extends u.KG{constructor(n,t,i,s,_){super(),this._settings=n,this._space_pipe=t,this._event_form=i,this._booking_form=s,this._router=_,this.assets=(0,k.aj)([this._booking_form.loadAssets("desks"),this._booking_form.loadAssets("parking_spaces")]).pipe((0,h.U)(([l,r])=>[...l.filter(({id:g})=>this.desks.includes(g)).map(g=>({...g,type:"desk"})),...r.filter(({id:g})=>this.parking_spaces.includes(g)).map(g=>({...g,type:"parking"}))]),(0,D.d)(1))}get spaces(){return this._settings.get("favourite_spaces")||R}get desks(){return this._settings.get(X.v)||R}get parking_spaces(){return this._settings.get(C.Bi)||R}ngOnInit(){}toggleFavourite(n,t){let i=this.spaces,s="favourite_spaces";switch(n){case"desk":i=this.desks,s=X.v;break;case"parking":i=this.parking_spaces,s=C.Bi}i.includes(t)?this._settings.saveUserSetting(s,i.filter(l=>l!==t)):this._settings.saveUserSetting(s,[...i,t])}newSpaceMeeting(n){var t=this;return(0,p.Z)(function*(){const i=yield t._space_pipe.transform(n);!i||(t._event_form.newForm(),t._event_form.form.patchValue({resources:[i]}),t._settings.get("app.new_features")?t._router.navigate(["/book","meeting"]):t._router.navigate(["/book","spaces"]))})()}newBooking(n,t){var i=this;return(0,p.Z)(function*(){!t||(i._booking_form.newForm(),i._booking_form.setOptions({type:n}),i._booking_form.form.patchValue({asset_id:t,booking_type:n}),i._settings.get("app.new_features")?i._router.navigate(["/book","desk"===n?"newdesk":"new-parking"]):i._router.navigate(["/book","desk"===n?"desks":"parking"]))})()}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(u.gb),e.Y36(E.X),e.Y36(m.MH),e.Y36(C.fy),e.Y36(N.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["landing-favourites"]],features:[e._Bn([E.X]),e.qOj],decls:8,vars:6,consts:function(){let a,n,t,i,s,_,l,r,g,f,O;return a=$localize`:␟e5191f926bd1e4e3a04904f3ed70be128d0df68e␟8885797130863755638:{VAR_PLURAL, plural, =1 {Resource } other {Resources }}`,a=e.Zx4(a,{VAR_PLURAL:"\ufffd1\ufffd"}),n=$localize`:␟9cfeafbe7fccbc1ea0e77b117ee30a235d3fbcbb␟1802740986701741685: ${"\ufffd0\ufffd"}:INTERPOLATION: ${a}:ICU: `,t=$localize`:␟292b0c8f5459f832824fbde4939054e5d313cfac␟3604407389403754414:{VAR_PLURAL, plural, =1 {Person } other {People }}`,t=e.Zx4(t,{VAR_PLURAL:"\ufffd1\ufffd"}),i=$localize`:␟3debb02c945d77818d916bf21e734def0311a492␟5508454923022029915: ${"\ufffd0\ufffd"}:INTERPOLATION: ${t}:ICU: `,s=$localize`:␟b89f50fad9bbb71fc251bbcde1a68a332a72a73f␟6814022066048259762: Book `,_=$localize`:␟97e7da30de7499fcf212e1e0fd717865ce2aca3d␟1468015720862673946:View Details`,l=$localize`:␟3045ed2495595bd4f7fe1dbe0edbba71aba234f6␟300951778224225135:Remove Favourite`,r=$localize`:␟b89f50fad9bbb71fc251bbcde1a68a332a72a73f␟6814022066048259762: Book `,g=$localize`:␟97e7da30de7499fcf212e1e0fd717865ce2aca3d␟1468015720862673946:View Details`,f=$localize`:␟3045ed2495595bd4f7fe1dbe0edbba71aba234f6␟300951778224225135:Remove Favourite`,O=$localize`:␟ddbdb8ce17790d4e5f9d2c2a389341592061eb30␟2400945604442329826: You have no favourites hearted. To add a favourites heart a room, desk or parking space. `,[[1,"flex","items-center","justify-between","py-2","mx-2","border-b","border-gray-200"],[1,"mx-2"],n,[1,"flex-1","h-1/2","w-full","space-y-2","overflow-auto","pt-4","divide-y","divide-gray-300"],[4,"ngIf","ngIfElse"],["empty_state",""],["class","flex flex-col items-center mx-2 pt-4 space-y-2 relative","item","",4,"ngFor","ngForOf"],["item","",1,"flex","flex-col","items-center","mx-2","pt-4","space-y-2","relative"],[1,"flex","w-full","items-center","space-x-2","relative"],[1,"w-20","h-20","overflow-hidden","rounded","relative","flex","items-center","justify-center","bg-black/10","dark:bg-white/5"],["class","absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover min-w-full min-h-full",3,"src",4,"ngIf","ngIfElse"],["space_placeholder",""],[1,"h-20"],[1,"truncate","mb-4"],[1,"flex","items-center","text-xs","opacity-60","truncate","space-x-2","mb-2"],[1,"text-blue-500"],[1,"flex","items-center","text-xs","opacity-60","truncate","space-x-2"],i,["mat-button","",1,"w-full","inverse",3,"click"],s,["mat-icon-button","",1,"absolute","top-2","right-0","bg-gray-200","dark:bg-neutral-600","rounded","!m-0",3,"matMenuTriggerFor"],["xPosition","before"],["menu","matMenu"],["mat-menu-item","",1,"flex","items-center","space-x-2"],[1,"text-2xl"],_,["mat-menu-item","",1,"flex","items-center","space-x-2",3,"click"],l,[1,"absolute","top-1/2","left-1/2","-translate-x-1/2","-translate-y-1/2","object-cover","min-w-full","min-h-full",3,"src"],["src","assets/icons/room-placeholder.svg",1,"m-auto"],["asset_placeholder",""],r,g,f,[1,"m-auto",3,"src"],[1,"w-full","h-full","flex","flex-col","items-center","justify-center","space-y-2","p-8"],["src","assets/icons/no-favourites.svg"],[1,"opacity-60","text-sm","text-center"],O]},template:function(n,t){if(1&n&&(e.TgZ(0,"div",0)(1,"h2",1),e.SDv(2,2),e.qZA()(),e.TgZ(3,"div",3),e.YNc(4,Ie,4,4,"ng-container",4),e.ALo(5,"async"),e.qZA(),e.YNc(6,Me,4,0,"ng-template",null,5,e.W1O)),2&n){const i=e.MAs(7);let s;e.xp6(2),e.pQV((null==t.spaces?null:t.spaces.length)||0)(null==t.spaces?null:t.spaces.length),e.QtT(2),e.xp6(2),e.Q6J("ngIf",(null==t.spaces?null:t.spaces.length)||(null==(s=e.lcZ(5,4,t.assets))?null:s.length))("ngIfElse",i)}},dependencies:[d.sg,d.O5,b.o,v.VK,v.OP,v.p6,Z.lW,d.Ov,E.X],styles:["[user][_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column}\n/*# sourceMappingURL=landing-favourites.component.ts-angular-inline--74.css.map*/"]}),o})();var xe=c(5148),ye=c(1484),Ze=c(2551),Re=c(4088);function Ge(o,a){if(1&o){const n=e.EpF();e.TgZ(0,"event-card",15),e.NdJ("edit",function(){e.CHM(n);const i=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.edit(i))})("remove",function(){e.CHM(n);const i=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.remove(i))}),e.qZA()}if(2&o){const n=e.oxw().$implicit;e.Q6J("event",n)("show_day",!0)}}function $e(o,a){if(1&o){const n=e.EpF();e.TgZ(0,"booking-card",16),e.NdJ("remove",function(){e.CHM(n);const i=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.remove(i))}),e.qZA()}if(2&o){const n=e.oxw().$implicit;e.Q6J("booking",n)("show_day",!0)}}function De(o,a){if(1&o&&(e.ynx(0)(1,12),e.YNc(2,Ge,1,2,"event-card",13),e.YNc(3,$e,1,2,"booking-card",14),e.BQk()()),2&o){const n=a.$implicit,t=e.oxw(2);e.xp6(1),e.Q6J("ngSwitch",t.type(n)),e.xp6(1),e.Q6J("ngSwitchCase","event"),e.xp6(1),e.Q6J("ngSwitchCase","booking")}}function Fe(o,a){if(1&o&&(e.ynx(0),e.YNc(1,De,4,3,"ng-container",11),e.ALo(2,"slice"),e.ALo(3,"async"),e.BQk()),2&o){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.Dn7(2,2,e.lcZ(3,6,n.upcoming_events),0,3))("ngForTrackBy",n.trackByFn)}}function Ue(o,a){1&o&&(e.TgZ(0,"div",17),e._UZ(1,"img",18),e.TgZ(2,"p",19),e.SDv(3,20),e.qZA()())}const W=function(){return["/your-bookings"]};let V=(()=>{class o{constructor(n,t,i,s){this._state=n,this._event_form=t,this._router=i,this._dialog=s,this.upcoming_events=this._state.upcoming_events}type(n){return n instanceof C.$N?"booking":"event"}ngOnInit(){this._state.pollUpcomingEvents()}ngOnDestroy(){this._state.stopPollingUpcomingEvents()}trackByFn(n,t){return t?.id}edit(n){this._router.navigate(["/book","meeting","form"]),this._event_form.newForm(n)}remove(n){var t=this;return(0,p.Z)(function*(){const i=`${(0,xe.Z)(n.date,"dd MMM yyyy h:mma")}`,_=`Delete the booking for ${n instanceof m.ym?n.space?.display_name:n.asset_name||n.asset_id} at ${i}`,l=yield(0,u._5)({title:"Delete booking",content:_,icon:{content:"delete"}},t._dialog);"done"===l.reason&&(l.loading("Requesting booking deletion..."),yield(n instanceof m.ym?m.xC:C.pv)(n.id).toPromise().catch(r=>{throw(0,u.cB)(`Unable to delete booking. ${r}`),l.close(),r}),(0,u.t5)("Successfully deleted booking."),l.close())})()}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(x),e.Y36(m.MH),e.Y36(N.F0),e.Y36(ye.uw))},o.\u0275cmp=e.Xpm({type:o,selectors:[["landing-upcoming"]],decls:13,vars:8,consts:function(){let a,n,t,i;return a=$localize`:␟cb6378e0658b04a6da5f440c47dbeb7f71584e72␟8703365535684640863:Your Bookings`,n=$localize`:␟1b93ce5d5beacbcfb4e2e71359f730d9867b6d4f␟5839698920401123455: View All `,t=$localize`:␟1b93ce5d5beacbcfb4e2e71359f730d9867b6d4f␟5839698920401123455: View All `,i=$localize`:␟e1b30965200b37cc3d542ebf7d4ec443b9071691␟8888616402107008668:You have no upcoming bookings`,[[1,"py-2"],[1,"flex","items-center","justify-between","mb-2","sm:mb-4","px-4"],[1,"sm:text-lg","font-medium"],a,["button","","mat-button","",1,"inverse","hidden","sm:block",3,"routerLink"],n,[1,"inverse","block","sm:hidden","text-blue-500","underline","relative","top-8",3,"routerLink"],t,[1,"space-y-4","px-4"],[4,"ngIf","ngIfElse"],["empty_state",""],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"ngSwitch"],[3,"event","show_day","edit","remove",4,"ngSwitchCase"],[3,"booking","show_day","remove",4,"ngSwitchCase"],[3,"event","show_day","edit","remove"],[3,"booking","show_day","remove"],[1,"w-full","p-8","flex","flex-col","items-center","justify-center","space-y-4"],["src","assets/img/no-events.svg",1,"mr-4"],[1,"opacity-30"],i]},template:function(n,t){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e.SDv(3,3),e.qZA(),e.TgZ(4,"a",4),e.SDv(5,5),e.qZA(),e.TgZ(6,"a",6),e.SDv(7,7),e.qZA()(),e.TgZ(8,"div",8),e.YNc(9,Fe,4,8,"ng-container",9),e.ALo(10,"async"),e.qZA()(),e.YNc(11,Ue,4,0,"ng-template",null,10,e.W1O)),2&n){const i=e.MAs(12);let s;e.xp6(4),e.Q6J("routerLink",e.DdM(6,W)),e.xp6(2),e.Q6J("routerLink",e.DdM(7,W)),e.xp6(3),e.Q6J("ngIf",null==(s=e.lcZ(10,4,t.upcoming_events))?null:s.length)("ngIfElse",i)}},dependencies:[d.sg,d.O5,d.RF,d.n9,Z.zs,Ze.j,Re.E,N.yS,d.Ov,d.OU]}),o})();var we=c(6361),ke=c(4187),Ke=c(6012);function Xe(o,a){1&o&&e._UZ(0,"topbar",19)}function Ye(o,a){1&o&&e._UZ(0,"landing-colleagues")}function We(o,a){1&o&&e._UZ(0,"landing-favourites")}function Ve(o,a){if(1&o&&(e.TgZ(0,"div",20),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.building.address||n.building.display_name||n.building.name," ")}}function Je(o,a){1&o&&e._UZ(0,"footer-menu")}const Qe=[{path:"",component:(()=>{class o{constructor(n){this._org=n,this.tab="people"}get hide_nav(){return"true"===localStorage.getItem("PlaceOS.hide_nav")}get date(){return(0,we.Z)(this.time||Date.now())}get user(){return(0,u.ar)()}get building(){return this._org.building}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(I.w7))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-dashboard"]],decls:32,vars:26,consts:function(){let a,n,t;return a=$localize`:␟04a67e3f58713320306a4b1dad746f478462031f␟820349652162934765:Colleagues`,n=$localize`:␟62ab0c2bf8d16ce7baf2c8b1da2c561d99522256␟4158925728608139729:Favourites`,t=$localize`:␟c9f80cea8e481a9cfdf75c0fe13acc60046ad0e6␟4737635788020619011: Hello ${"\ufffd0\ufffd"}:INTERPOLATION:, `,[["class","z-10",4,"ngIf"],[1,"flex","flex-1","h-1/2","bg-[#F8F8FA]","dark:bg-neutral-900"],[1,"relative","hidden","sm:flex","flex-col","w-[18rem]","h-full","overflow-hidden","bg-white","dark:bg-[#1F2021]","border-r","border-gray-200","dark:border-neutral-700"],[1,"flex","items-center","divide-x","divide-gray-300"],["matRipple","",1,"flex-1","font-medium","p-2","flex","items-center","justify-center","space-x-2",3,"click"],a,n,[1,"flex-1","w-full","h-1/2"],[4,"ngIf"],[1,"flex-1","h-full","w-1/2","sm:px-4","overflow-auto","z-0"],[1,"sticky","top-0","z-50","bg-[#ECF0F3]","dark:bg-zinc-800","px-4","sm:rounded-b","flex","items-center","justify-between","overflow-hidden"],[1,""],[1,"sm:text-xl","font-medium"],t,["date","",1,"text-sm","sm:text-base"],["class","text-sm sm:text-base",4,"ngIf"],[1,"h-32","pt-4"],["src","assets/img/landing.svg"],[1,"mx-4","w-[calc(100%-2rem)]","h-px","bg-gray-300","mb-2"],[1,"z-10"],[1,"text-sm","sm:text-base"]]},template:function(n,t){1&n&&(e.YNc(0,Xe,1,0,"topbar",0),e.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"button",4),e.NdJ("click",function(){return t.tab="people"}),e.TgZ(5,"app-icon"),e._uU(6,"people"),e.qZA(),e.TgZ(7,"div"),e.SDv(8,5),e.qZA()(),e.TgZ(9,"button",4),e.NdJ("click",function(){return t.tab="fav"}),e.TgZ(10,"app-icon"),e._uU(11,"favorite"),e.qZA(),e.TgZ(12,"div"),e.SDv(13,6),e.qZA()()(),e.TgZ(14,"div",7),e.YNc(15,Ye,1,0,"landing-colleagues",8),e.YNc(16,We,1,0,"landing-favourites",8),e.qZA()(),e.TgZ(17,"div",9)(18,"header",10)(19,"div",11)(20,"div",12),e.SDv(21,13),e.qZA(),e.TgZ(22,"div",14),e._uU(23),e.ALo(24,"date"),e.qZA(),e.YNc(25,Ve,2,1,"div",15),e.qZA(),e.TgZ(26,"div",16),e._UZ(27,"img",17),e.qZA()(),e._UZ(28,"landing-availability")(29,"div",18)(30,"landing-upcoming"),e.qZA()(),e.YNc(31,Je,1,0,"footer-menu",8)),2&n&&(e.Q6J("ngIf",!t.hide_nav),e.xp6(4),e.ekj("border-b","people"!==t.tab)("border-gray-300","people"!==t.tab)("bg-black","people"!==t.tab)("bg-opacity-5","people"!==t.tab),e.xp6(5),e.ekj("border-b","fav"!==t.tab)("border-gray-300","fav"!==t.tab)("bg-black","fav"!==t.tab)("bg-opacity-5","fav"!==t.tab),e.xp6(6),e.Q6J("ngIf","people"===t.tab),e.xp6(1),e.Q6J("ngIf","fav"===t.tab),e.xp6(5),e.pQV(null==t.user?null:t.user.name),e.QtT(21),e.xp6(2),e.hij(" ",e.xi3(24,23,t.date,"fullDate")," "),e.xp6(2),e.Q6J("ngIf",(null==t.building?null:t.building.address)||(null==t.building?null:t.building.name)),e.xp6(6),e.Q6J("ngIf",!t.hide_nav))},dependencies:[d.O5,ke.o,Ke.i,b.o,y.wG,K,w,V,Y,d.uU],styles:["[_nghost-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;display:flex;flex-direction:column}main[_ngcontent-%COMP%]{min-height:50%}\n/*# sourceMappingURL=landing.component.ts-angular-inline--75.css.map*/"]}),o})()}];let qe=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.ez,Q.v,T.u5,N.Bz.forChild(Qe)]}),o})()}}]);
//# sourceMappingURL=apps_workplace_src_app_landing_landing_module_ts.js.map