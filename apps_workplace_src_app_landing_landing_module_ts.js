"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["apps_workplace_src_app_landing_landing_module_ts"],{368:(Qe,L,l)=>{l.r(L),l.d(L,{AppLandingModule:()=>Ne});var p=l(4666),h=l(2508),x=l(959),Y=l(8147),u=l(1670),m=l(3690),_=l(4505),U=l(4139),Z=l(6942),j=l(823),q=l(9095),I=l(7418),P=l(8759),E=l(9128),$=l(5670),B=l(9151),G=l(3200),d=l(232),v=l(1299),b=l(1684),D=l(6221),R=l(9434),K=l(7625),e=l(9676);let T=(()=>{class n extends d.KG{constructor(t,o,a){super(),this._calendar=t,this._schedule=o,this._org=a,this._options=new _.X({}),this._loading=new _.X(""),this._free_spaces=new _.X([]),this._contacts=new _.X([]),this._level_occupancy=new _.X([]),this.free_spaces=this._free_spaces.asObservable(),this.upcoming_events=this._schedule.filtered_bookings.pipe((0,Z.U)(i=>i.filter(c=>c instanceof v.ym))),this.contacts=this._contacts.asObservable(),this.options=this._options.asObservable(),this.loading=this._loading.asObservable(),this.search_results=this._options.pipe((0,j.b)(500),(0,q.w)(({search:i})=>(this._loading.next("Loading users..."),i?(0,b.VE)(i).pipe((0,I.K)(()=>(0,U.of)([]))):(0,U.of)([]))),(0,P.b)(()=>this._loading.next("")),(0,E.d)(1)),this.level_occupancy=this._level_occupancy.asObservable(),this.init()}init(){var t=this;return(0,u.Z)(function*(){yield t._org.initialised.pipe((0,$.P)(i=>i)).toPromise(),t.subscription("building",t._org.active_building.pipe((0,B.h)(i=>!!i)).subscribe(()=>t.updateBuildingMetadata()));let o=t._org.binding("area_management");if(!o)return;const a=(0,m.rTZ)(o,"AreaManagement").binding("overview");a.listen().subscribe(i=>t.updateOccupancy(i||{})),a.bind()})()}setOptions(t){this._options.next({...this._options.getValue(),...t})}pollFreeSpaces(t=1e4){this.updateFreeSpaces(),this.interval("free_spaces",()=>this.updateFreeSpaces(),t)}stopPollingFreeSpaces(){this.clearInterval("free_spaces")}pollUpcomingEvents(t=1e4){return this._schedule.setDate(Date.now()),this._schedule.startPolling(t)}stopPollingUpcomingEvents(){this._schedule.stopPolling()}updateContacts(){var t=this;return(0,u.Z)(function*(){const o=yield(0,m.rlq)((0,d.ar)().id,"contacts").toPromise();t._contacts.next((o.details instanceof Array?o.details:[]).map(i=>new b.n5(i)))})()}addContact(t){var o=this;return(0,u.Z)(function*(){let a=[...o._contacts.getValue()];a.push(t),a=(0,d.Tw)(a,"email");const i=yield(0,m.Ymr)((0,d.ar)().id,{name:"contacts",description:"Contacts for the User",details:a}).toPromise();o._contacts.next((i.details instanceof Array?i.details:[]).map(r=>new b.n5(r)))})()}removeContact(t){var o=this;return(0,u.Z)(function*(){let a=[...o._contacts.getValue()];a=a.filter(r=>r.email!==t.email);const i=yield(0,m.Ymr)((0,d.ar)().id,{name:"contacts",description:"Contacts for the User",details:a}).toPromise();o._contacts.next((i.details instanceof Array?i.details:[]).map(r=>new b.n5(r)))})()}updateOccupancy(t){var o=this;return(0,u.Z)(function*(){const a=[...o._org.levels];a.sort((i,c)=>t[i.id]?.recommendation-t[c.id]?.recommendation),o._level_occupancy.next(a)})()}updateFreeSpaces(){var t=this;return(0,u.Z)(function*(){if(!t._org.building)return;const o=Math.floor((new Date).valueOf()/1e3),a=Math.floor((0,G.Z)(new Date).valueOf()/1e3),i=yield t._calendar.freeBusy({period_start:o,period_end:a,zone_ids:t._org.building.id}).pipe((0,Z.U)(c=>c.filter(r=>!r.availability.length||r.availability.find(g=>"busy"!==g.status)))).toPromise();i.sort((c,r)=>c.capacity-r.capacity),t._free_spaces.next(i)})()}updateBuildingMetadata(){var t=this;return(0,u.Z)(function*(){const o=t._org.building,a=yield(0,m.rlq)(o.id,"bindings").toPromise();if(!a.details.occupancy)return;const i=a.details.occupancy,c=(0,m.rTZ)(i.sys,i.module,i.index);!c||(t._occupancy_binding&&t._occupancy_binding.unbind(),t._occupancy_binding=c.binding("occupancy"),t._occupancy_binding.bind(),t.subscription("occupancy_binding",t._occupancy_binding.listen().subscribe(r=>{const g=Object.keys(r).map(f=>({id:f,...r[f]}));g.sort((f,Se)=>f.recommendation_factor-Se.recommendation_factor),t._level_occupancy.next(g.map(f=>t._org.levelWithID([f.id])))})))})()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(R.ot),e.LFG(K.I),e.LFG(D.w7))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var y=l(5306),C=l(207),X=l(6198);const w=function(){return["/explore"]},H=function(n){return{level:n}};function z(n,s){if(1&n&&(e.TgZ(0,"button",7),e._UZ(1,"div",8),e.TgZ(2,"div",9)(3,"div",10),e._uU(4),e.qZA(),e.TgZ(5,"div",11)(6,"app-icon",12),e._uU(7,"place"),e.qZA(),e.TgZ(8,"span"),e._uU(9,"Unknown Building"),e.qZA()()()()),2&n){const t=s.$implicit;e.Q6J("routerLink",e.DdM(3,w))("queryParams",e.VKq(4,H,t.id)),e.xp6(4),e.hij(" ",t.display_name||t.name," ")}}function V(n,s){1&n&&(e.TgZ(0,"span",13),e._uU(1," No free spaces "),e.qZA())}function W(n,s){if(1&n&&(e._UZ(0,"img",16),e.ALo(1,"async"),e.ALo(2,"space")),2&n){const t=e.oxw().$implicit;let o;e.Q6J("src",null==(o=e.lcZ(1,1,e.lcZ(2,3,t.id)))?null:o.images[0],e.LSH)}}const ee=function(n){return{space:n}};function te(n,s){if(1&n&&(e.TgZ(0,"button",7)(1,"div",14),e.YNc(2,W,3,5,"img",15),e.ALo(3,"async"),e.ALo(4,"space"),e.qZA(),e.TgZ(5,"div",9)(6,"div",10),e._uU(7),e.qZA(),e.TgZ(8,"div",11)(9,"app-icon",12),e._uU(10,"place"),e.qZA(),e.TgZ(11,"span"),e._uU(12),e.qZA()()()()),2&n){const t=s.$implicit;let o;e.Q6J("routerLink",e.DdM(9,w))("queryParams",e.VKq(10,ee,t.email)),e.xp6(2),e.Q6J("ngIf",null==(o=e.lcZ(3,5,e.lcZ(4,7,t.id)))||null==o.images?null:o.images.length),e.xp6(5),e.hij(" ",t.display_name||t.name," "),e.xp6(5),e.Oqu(t.level.display_name||t.level.name)}}function ne(n,s){1&n&&(e.TgZ(0,"span",13),e._uU(1," No free rooms "),e.qZA())}let O=(()=>{class n{constructor(t){this._state=t,this.space_list=this._state.free_spaces,this.levels_free=this._state.level_occupancy}ngOnInit(){var t=this;return(0,u.Z)(function*(){t._state.pollFreeSpaces()})()}ngOnDestroy(){this._state.stopPollingFreeSpaces()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(T))},n.\u0275cmp=e.Xpm({type:n,selectors:[["landing-availability"]],decls:17,vars:12,consts:[[1,"py-2"],[1,"sm:text-lg","font-medium","mb-2","sm:mb-4","px-4"],[1,"text-sm","sm:text-base","px-4"],[1,"w-full","overflow-auto","flex","items-center","space-x-4","px-4","py-2"],["matRipple","","class","flex items-center h-24 min-w-[12.5rem] rounded-lg bg-white dark:bg-neutral-800 shadow p-4 space-x-2",3,"routerLink","queryParams",4,"ngFor","ngForOf"],["class","text-dark-fade text-sm mb-2",4,"ngIf"],[1,"text-sm","sm:text-base","my-2","px-4"],["matRipple","",1,"flex","items-center","h-24","min-w-[12.5rem]","rounded-lg","bg-white","dark:bg-neutral-800","shadow","p-4","space-x-2",3,"routerLink","queryParams"],[1,"min-w-[4.5rem]","h-[4.5rem]","rounded","bg-gray-200","dark:bg-neutral-700"],[1,"text-left"],[1,"max-w-full","truncate","px-1.5"],[1,"max-w-full","truncate","text-sm","opacity-60","flex","items-center"],[1,"text-blue-500","text-lg"],[1,"text-dark-fade","text-sm","mb-2"],[1,"w-[4.5rem]","h-[4.5rem]","rounded","bg-gray-200","dark:bg-neutral-700","overflow-hidden"],["class","min-h-full object-cover",3,"src",4,"ngIf"],[1,"min-h-full","object-cover",3,"src"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2,"Available Now"),e.qZA(),e.TgZ(3,"div",2),e._uU(4,"Spaces"),e.qZA(),e.TgZ(5,"div",3),e.YNc(6,z,10,6,"button",4),e.ALo(7,"async"),e.YNc(8,V,2,0,"span",5),e.ALo(9,"async"),e.qZA(),e.TgZ(10,"div",6),e._uU(11,"Rooms"),e.qZA(),e.TgZ(12,"div",3),e.YNc(13,te,13,12,"button",4),e.ALo(14,"async"),e.YNc(15,ne,2,0,"span",5),e.ALo(16,"async"),e.qZA()()),2&t&&(e.xp6(6),e.Q6J("ngForOf",e.lcZ(7,4,o.levels_free)),e.xp6(2),e.Q6J("ngIf",!e.lcZ(9,6,o.levels_free).length),e.xp6(5),e.Q6J("ngForOf",e.lcZ(14,8,o.space_list)),e.xp6(2),e.Q6J("ngIf",!e.lcZ(16,10,o.space_list).length))},dependencies:[p.sg,p.O5,y.o,C.wG,x.rH,p.Ov,X.X],styles:["*[_ngcontent-%COMP%]{flex-shrink:0}\n/*# sourceMappingURL=landing-availability.component.ts-angular-inline--64.css.map*/"]}),n})();var oe=l(7716),F=l(9685),A=l(4522),ie=l(1708);const ae=["search_input"];function se(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",16)(1,"div",17),e._UZ(2,"a-user-avatar",18)(3,"div",19),e.qZA(),e.TgZ(4,"div",20)(5,"div",21),e._uU(6),e.qZA(),e.TgZ(7,"div",22),e._uU(8),e.qZA(),e.TgZ(9,"div",23),e._uU(10),e.qZA()(),e.TgZ(11,"button",24),e.NdJ("click",function(){const i=e.CHM(t).$implicit,c=e.oxw(2);return e.KtG(c.removeUser(i))}),e.TgZ(12,"app-icon"),e._uU(13,"close"),e.qZA()()()}if(2&n){const t=s.$implicit;e.xp6(2),e.Q6J("user",t),e.xp6(1),e.ekj("bg-error",!t.location)("bg-success",t.location),e.xp6(3),e.Oqu(t.name),e.xp6(2),e.hij(" ",t.organisation," "),e.xp6(2),e.hij(" ",t.location," ")}}function le(n,s){if(1&n&&(e.ynx(0),e.YNc(1,se,14,8,"div",15),e.ALo(2,"async"),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,t.contacts))}}function ce(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"button",27),e.NdJ("click",function(){const i=e.CHM(t).$implicit,c=e.oxw(3);return e.KtG(c.addUser(i))}),e.TgZ(1,"div",28),e._UZ(2,"a-user-avatar",18)(3,"div",19),e.qZA(),e.TgZ(4,"div",20)(5,"div",21),e._uU(6),e.qZA(),e.TgZ(7,"div",22),e._uU(8),e.qZA()()()}if(2&n){const t=s.$implicit;e.xp6(2),e.Q6J("user",t),e.xp6(1),e.ekj("bg-error",!t.location)("bg-success",t.location),e.xp6(3),e.Oqu(t.name),e.xp6(2),e.hij(" ",t.organisation," ")}}function re(n,s){if(1&n&&(e.ynx(0),e.YNc(1,ce,9,7,"button",26),e.ALo(2,"async"),e.BQk()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,t.search_results))}}function pe(n,s){if(1&n&&(e.TgZ(0,"div",25),e.YNc(1,re,3,3,"ng-container",5),e.ALo(2,"async"),e.qZA()),2&n){const t=e.oxw(),o=e.MAs(28);let a;e.xp6(1),e.Q6J("ngIf",null==(a=e.lcZ(2,2,t.search_results))?null:a.length)("ngIfElse",o)}}function de(n,s){1&n&&(e.TgZ(0,"div",29),e._UZ(1,"img",30),e.TgZ(2,"p",31),e._uU(3,' You have no colleagues added. Please select the "Add" button to get started. '),e.qZA()())}function ue(n,s){if(1&n&&(e.TgZ(0,"div",29)(1,"p",31),e._uU(2),e.ALo(3,"async"),e.ALo(4,"async"),e.qZA()()),2&n){const t=e.oxw();let o;e.xp6(2),e.hij(" ",null!=(o=e.lcZ(3,1,t.options))&&o.search?'Unable for find any users matching "'+(null==(o=e.lcZ(4,3,t.options))?null:o.search)+'"':"Start typing to search for users."," ")}}function ge(n,s){1&n&&(e.TgZ(0,"div",29),e._UZ(1,"mat-spinner",32),e.TgZ(2,"p",31),e._uU(3,"Searching users..."),e.qZA()())}let k=(()=>{class n extends d.KG{constructor(t){var o;super(),o=this,this._state=t,this.show_search=!1,this.contacts=this._state.contacts,this.search_results=(0,oe.aj)([this._state.search_results,this._state.contacts]).pipe((0,Z.U)(([a,i])=>a.filter(c=>!i.find(r=>r.id!==c.id&&r.email!==c.email)))),this.options=this._state.options,this.loading=this._state.loading,this.addUser=function(){var a=(0,u.Z)(function*(i){yield o._state.addContact(i),(0,d.t5)(`Successfully added "${i.name}" to contacts`),o.show_search=!1});return function(i){return a.apply(this,arguments)}}(),this.removeUser=function(){var a=(0,u.Z)(function*(i){yield o._state.removeContact(i),(0,d.t5)(`Successfully removed "${i.name}" from contacts`)});return function(i){return a.apply(this,arguments)}}(),this.updateSearch=a=>this._state.setOptions({search:a})}openSearch(){this.updateSearch(""),this.show_search=!0,this.timeout("open",()=>this._input_el.nativeElement.focus(),100)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(T))},n.\u0275cmp=e.Xpm({type:n,selectors:[["landing-colleagues"]],viewQuery:function(t,o){if(1&t&&e.Gf(ae,7),2&t){let a;e.iGM(a=e.CRH())&&(o._input_el=a.first)}},features:[e.qOj],decls:31,vars:16,consts:[[1,"flex","items-center","justify-between","py-2","mx-2","border-b","border-gray-200"],[1,"mx-2"],[1,"flex","items-center","space-x-2","text-primary"],["mat-icon-button","",1,"!border","!border-solid","!border-primary"],[1,"flex-1","h-1/2","w-full","space-y-4","overflow-auto","pt-4"],[4,"ngIf","ngIfElse"],["mat-button","",1,"inverse","w-[calc(100%-1rem)]","m-2",3,"click"],["search","",1,"absolute","inset-x-2","top-2","bottom-[3.5rem]","rounded-lg","overflow-hidden","flex","flex-col","bg-white","dark:bg-neutral-600","shadow","border","border-gray-200"],["placeholder","Search for users...",1,"w-full","border-b","border-gray-200","p-2","rounded-t-lg",3,"ngModel","ngModelChange"],["search_input",""],["mat-icon-button","",1,"absolute","top-0","right-0",3,"click"],["class","overflow-auto flex-1 h-1/2 flex flex-col space-y-2",4,"ngIf","ngIfElse"],["empty_state",""],["search_empty",""],["load_state",""],["class","flex items-center px-4 space-x-4 relative","user","",4,"ngFor","ngForOf"],["user","",1,"flex","items-center","px-4","space-x-4","relative"],[1,"text-xl","relative"],[3,"user"],[1,"rounded-full","h-3","w-3","border","border-white","dark:border-neutral-400","absolute","bottom-1","right-1"],[1,"leading-tight"],[1,"truncate"],[1,"text-sm","truncate"],[1,"text-xs","opacity-60","truncate"],["mat-icon-button","",1,"absolute","top-1/2","right-1","-translate-y-1/2","opacity-0",3,"click"],[1,"overflow-auto","flex-1","h-1/2","flex","flex-col","space-y-2"],["matRipple","","class","flex items-center p-2 space-x-2 w-full text-left",3,"click",4,"ngFor","ngForOf"],["matRipple","",1,"flex","items-center","p-2","space-x-2","w-full","text-left",3,"click"],[1,"text-base","relative"],[1,"w-full","h-full","flex","flex-col","items-center","justify-center","space-y-2","p-8"],["src","assets/icons/no-contacts.svg"],[1,"opacity-60","text-sm","text-center"],["diameter","32"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"h2",1),e._uU(2),e.ALo(3,"async"),e.qZA(),e.TgZ(4,"div",2)(5,"button",3)(6,"app-icon"),e._uU(7,"search"),e.qZA()(),e.TgZ(8,"button",3)(9,"app-icon"),e._uU(10,"filter_list"),e.qZA()()()(),e.TgZ(11,"div",4),e.YNc(12,le,3,3,"ng-container",5),e.ALo(13,"async"),e.qZA(),e.TgZ(14,"button",6),e.NdJ("click",function(){return o.openSearch()}),e._uU(15," Add "),e.qZA(),e.TgZ(16,"div",7)(17,"input",8,9),e.NdJ("ngModelChange",function(i){return o.updateSearch(i)}),e.ALo(19,"async"),e.qZA(),e.TgZ(20,"button",10),e.NdJ("click",function(){return o.show_search=!1}),e.TgZ(21,"app-icon"),e._uU(22,"close"),e.qZA()(),e.YNc(23,pe,3,4,"div",11),e.ALo(24,"async"),e.qZA(),e.YNc(25,de,4,0,"ng-template",null,12,e.W1O),e.YNc(27,ue,5,5,"ng-template",null,13,e.W1O),e.YNc(29,ge,4,0,"ng-template",null,14,e.W1O)),2&t){const a=e.MAs(26),i=e.MAs(30);let c,r,g;e.xp6(2),e.hij("",(null==(c=e.lcZ(3,8,o.contacts))?null:c.length)||0," People"),e.xp6(10),e.Q6J("ngIf",null==(r=e.lcZ(13,10,o.contacts))?null:r.length)("ngIfElse",a),e.xp6(4),e.ekj("hidden",!o.show_search),e.xp6(1),e.Q6J("ngModel",null==(g=e.lcZ(19,12,o.options))?null:g.search),e.xp6(6),e.Q6J("ngIf",!e.lcZ(24,14,o.loading))("ngIfElse",i)}},dependencies:[p.sg,p.O5,y.o,F.k,A.lW,ie.Ou,C.wG,h.Fj,h.JJ,h.On,p.Ov],styles:["[user][_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column}\n/*# sourceMappingURL=landing-colleagues.component.ts-angular-inline--65.css.map*/"]}),n})();function me(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",8)(1,"div",9),e._UZ(2,"a-user-avatar",10)(3,"div",11),e.qZA(),e.TgZ(4,"div",12)(5,"div",13),e._uU(6),e.qZA(),e.TgZ(7,"div",14),e._uU(8),e.qZA(),e.TgZ(9,"div",15),e._uU(10),e.qZA()(),e.TgZ(11,"button",16),e.NdJ("click",function(){const i=e.CHM(t).$implicit,c=e.oxw(2);return e.KtG(c.removeUser(i))}),e.TgZ(12,"app-icon"),e._uU(13,"close"),e.qZA()()()}if(2&n){const t=s.$implicit;e.xp6(2),e.Q6J("user",t),e.xp6(1),e.ekj("bg-error",!t.location)("bg-success",t.location),e.xp6(3),e.Oqu(t.name),e.xp6(2),e.hij(" ",t.organisation," "),e.xp6(2),e.hij(" ",t.location," ")}}function _e(n,s){if(1&n&&(e.ynx(0),e.YNc(1,me,14,8,"div",7),e.ALo(2,"async"),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,t.list))}}function fe(n,s){1&n&&(e.TgZ(0,"div",17),e._UZ(1,"img",18),e.TgZ(2,"p",19),e._uU(3," You have no favourites hearted. To add a favourites heart a room, desk or parking space. "),e.qZA()())}let M=(()=>{class n extends d.KG{constructor(t){super(),this._settings=t,this.list=new _.X([])}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.gb))},n.\u0275cmp=e.Xpm({type:n,selectors:[["landing-favourites"]],features:[e.qOj],decls:16,vars:7,consts:[[1,"flex","items-center","justify-between","py-2","mx-2","border-b","border-gray-200"],[1,"mx-2"],[1,"flex","items-center","space-x-2","text-primary"],["mat-icon-button","",1,"!border","!border-solid","!border-primary"],[1,"flex-1","h-1/2","w-full","space-y-4","overflow-auto","pt-4"],[4,"ngIf","ngIfElse"],["empty_state",""],["class","flex items-center px-4 space-x-4 relative","user","",4,"ngFor","ngForOf"],["user","",1,"flex","items-center","px-4","space-x-4","relative"],[1,"text-xl","relative"],[3,"user"],[1,"rounded-full","h-3","w-3","border","border-white","dark:border-neutral-400","absolute","bottom-1","right-1"],[1,"leading-tight"],[1,"truncate"],[1,"text-sm","truncate"],[1,"text-xs","opacity-60","truncate"],["mat-icon-button","",1,"absolute","top-1/2","right-1","-translate-y-1/2","opacity-0",3,"click"],[1,"w-full","h-full","flex","flex-col","items-center","justify-center","space-y-2","p-8"],["src","assets/icons/no-favourites.svg"],[1,"opacity-60","text-sm","text-center"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"h2",1),e._uU(2),e.ALo(3,"async"),e.qZA(),e.TgZ(4,"div",2)(5,"button",3)(6,"app-icon"),e._uU(7,"search"),e.qZA()(),e.TgZ(8,"button",3)(9,"app-icon"),e._uU(10,"filter_list"),e.qZA()()()(),e.TgZ(11,"div",4),e.YNc(12,_e,3,3,"ng-container",5),e.ALo(13,"async"),e.qZA(),e.YNc(14,fe,4,0,"ng-template",null,6,e.W1O)),2&t){const a=e.MAs(15);let i,c;e.xp6(2),e.hij("",(null==(i=e.lcZ(3,3,o.list))?null:i.length)||0," Resources"),e.xp6(10),e.Q6J("ngIf",null==(c=e.lcZ(13,5,o.list))?null:c.length)("ngIfElse",a)}},dependencies:[p.sg,p.O5,y.o,F.k,A.lW,p.Ov],styles:["[user][_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column}\n/*# sourceMappingURL=landing-favourites.component.ts-angular-inline--66.css.map*/"]}),n})();var J=l(9638),ve=l(5148),he=l(1484),xe=l(2551),be=l(4088);function ye(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"event-card",12),e.NdJ("edit",function(){e.CHM(t);const a=e.oxw().$implicit,i=e.oxw(2);return e.KtG(i.edit(a))})("remove",function(){e.CHM(t);const a=e.oxw().$implicit,i=e.oxw(2);return e.KtG(i.remove(a))}),e.qZA()}if(2&n){const t=e.oxw().$implicit;e.Q6J("event",t)("show_day",!0)}}function Ze(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"booking-card",13),e.NdJ("remove",function(){e.CHM(t);const a=e.oxw().$implicit,i=e.oxw(2);return e.KtG(i.remove(a))}),e.qZA()}if(2&n){const t=e.oxw().$implicit;e.Q6J("booking",t)("show_day",!0)}}function Te(n,s){if(1&n&&(e.ynx(0)(1,9),e.YNc(2,ye,1,2,"event-card",10),e.YNc(3,Ze,1,2,"booking-card",11),e.BQk()()),2&n){const t=s.$implicit,o=e.oxw(2);e.xp6(1),e.Q6J("ngSwitch",o.type(t)),e.xp6(1),e.Q6J("ngSwitchCase","event"),e.xp6(1),e.Q6J("ngSwitchCase","booking")}}function Ce(n,s){if(1&n&&(e.ynx(0),e.YNc(1,Te,4,3,"ng-container",8),e.ALo(2,"slice"),e.ALo(3,"async"),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.Dn7(2,2,e.lcZ(3,6,t.upcoming_events),0,3))("ngForTrackBy",t.trackByFn)}}function Ae(n,s){1&n&&(e.TgZ(0,"div",14),e._UZ(1,"img",15),e.TgZ(2,"p",16),e._uU(3,"You have no upcoming bookings"),e.qZA()())}const N=function(){return["/your-bookings"]};let S=(()=>{class n{constructor(t,o,a,i){this._state=t,this._event_form=o,this._router=a,this._dialog=i,this.upcoming_events=this._state.upcoming_events}type(t){return t instanceof J.$N?"booking":"event"}ngOnInit(){this._state.pollUpcomingEvents()}ngOnDestroy(){this._state.stopPollingUpcomingEvents()}trackByFn(t,o){return o?.id}edit(t){this._router.navigate(["/book","meeting","form"]),this._event_form.newForm(t)}remove(t){var o=this;return(0,u.Z)(function*(){const a=`${(0,ve.Z)(t.date,"dd MMM yyyy h:mma")}`,c=`Delete the booking for ${t instanceof v.ym?t.space?.display_name:t.asset_name||t.asset_id} at ${a}`,r=yield(0,d._5)({title:"Delete booking",content:c,icon:{content:"delete"}},o._dialog);"done"===r.reason&&(r.loading("Requesting booking deletion..."),yield(t instanceof v.ym?v.xC:J.pv)(t.id).toPromise().catch(g=>{throw(0,d.cB)(`Unable to delete booking. ${g}`),r.close(),g}),(0,d.t5)("Successfully deleted booking."),r.close())})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(T),e.Y36(v.MH),e.Y36(x.F0),e.Y36(he.uw))},n.\u0275cmp=e.Xpm({type:n,selectors:[["landing-upcoming"]],decls:13,vars:8,consts:[[1,"py-2"],[1,"flex","items-center","justify-between","mb-2","sm:mb-4","px-4"],[1,"sm:text-lg","font-medium"],["button","","mat-button","",1,"inverse","hidden","sm:block",3,"routerLink"],[1,"inverse","block","sm:hidden","text-blue-500","underline","relative","top-8",3,"routerLink"],[1,"space-y-4","px-4"],[4,"ngIf","ngIfElse"],["empty_state",""],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"ngSwitch"],[3,"event","show_day","edit","remove",4,"ngSwitchCase"],[3,"booking","show_day","remove",4,"ngSwitchCase"],[3,"event","show_day","edit","remove"],[3,"booking","show_day","remove"],[1,"w-full","p-8","flex","flex-col","items-center","justify-center","space-y-4"],["src","assets/img/no-events.svg",1,"mr-4"],[1,"opacity-30"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3,"Your Bookings"),e.qZA(),e.TgZ(4,"a",3),e._uU(5," View All "),e.qZA(),e.TgZ(6,"a",4),e._uU(7," View All "),e.qZA()(),e.TgZ(8,"div",5),e.YNc(9,Ce,4,8,"ng-container",6),e.ALo(10,"async"),e.qZA()(),e.YNc(11,Ae,4,0,"ng-template",null,7,e.W1O)),2&t){const a=e.MAs(12);let i;e.xp6(4),e.Q6J("routerLink",e.DdM(6,N)),e.xp6(2),e.Q6J("routerLink",e.DdM(7,N)),e.xp6(3),e.Q6J("ngIf",null==(i=e.lcZ(10,4,o.upcoming_events))?null:i.length)("ngIfElse",a)}},dependencies:[p.sg,p.O5,p.RF,p.n9,A.zs,xe.j,be.E,x.yS,p.Ov,p.OU]}),n})();var Le=l(6361),Ue=l(4187),we=l(6012);function Oe(n,s){1&n&&e._UZ(0,"topbar",16)}function Fe(n,s){1&n&&e._UZ(0,"landing-colleagues")}function ke(n,s){1&n&&e._UZ(0,"landing-favourites")}function Me(n,s){1&n&&e._UZ(0,"footer-menu")}const Je=[{path:"",component:(()=>{class n{constructor(){this.tab="people"}get hide_nav(){return"true"===localStorage.getItem("PlaceOS.hide_nav")}get date(){return(0,Le.Z)(this.time||Date.now())}get user(){return(0,d.ar)()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-dashboard"]],decls:33,vars:25,consts:[["class","z-10",4,"ngIf"],[1,"flex","flex-1","h-1/2","bg-[#F8F8FA]","dark:bg-zinc-700"],[1,"relative","hidden","sm:flex","flex-col","w-[18rem]","h-full","overflow-hidden","bg-white","dark:bg-neutral-700","border-r","border-gray-200","dark:border-neutral-500"],[1,"flex","items-center","divide-x","divide-gray-300"],["matRipple","",1,"flex-1","font-medium","p-4","flex","items-center","justify-center","space-x-2",3,"click"],[1,"flex-1","w-full","h-1/2"],[4,"ngIf"],[1,"flex-1","h-full","w-1/2","sm:px-4","overflow-auto","z-0"],[1,"sticky","top-0","z-50","bg-[#ECF0F3]","dark:bg-neutral-800","px-4","rounded-b","flex","items-center","justify-between","overflow-hidden"],[1,""],[1,"sm:text-xl","font-medium"],["date","",1,"text-sm","sm:text-base"],[1,"text-sm","sm:text-base"],[1,"h-32","pt-4"],["src","assets/img/landing.svg"],[1,"mx-4","w-[calc(100%-2rem)]","h-px","bg-gray-300","mb-2"],[1,"z-10"]],template:function(t,o){1&t&&(e.YNc(0,Oe,1,0,"topbar",0),e.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"button",4),e.NdJ("click",function(){return o.tab="people"}),e.TgZ(5,"app-icon"),e._uU(6,"people"),e.qZA(),e.TgZ(7,"div"),e._uU(8,"Colleages"),e.qZA()(),e.TgZ(9,"button",4),e.NdJ("click",function(){return o.tab="fav"}),e.TgZ(10,"app-icon"),e._uU(11,"favorite"),e.qZA(),e.TgZ(12,"div"),e._uU(13,"Favourites"),e.qZA()()(),e.TgZ(14,"div",5),e.YNc(15,Fe,1,0,"landing-colleagues",6),e.YNc(16,ke,1,0,"landing-favourites",6),e.qZA()(),e.TgZ(17,"div",7)(18,"header",8)(19,"div",9)(20,"div",10),e._uU(21),e.qZA(),e.TgZ(22,"div",11),e._uU(23),e.ALo(24,"date"),e.qZA(),e.TgZ(25,"div",12),e._uU(26,"Sydney Australia"),e.qZA()(),e.TgZ(27,"div",13),e._UZ(28,"img",14),e.qZA()(),e._UZ(29,"landing-availability")(30,"div",15)(31,"landing-upcoming"),e.qZA()(),e.YNc(32,Me,1,0,"footer-menu",6)),2&t&&(e.Q6J("ngIf",!o.hide_nav),e.xp6(4),e.ekj("border-b","people"!==o.tab)("border-gray-300","people"!==o.tab)("bg-black","people"!==o.tab)("bg-opacity-5","people"!==o.tab),e.xp6(5),e.ekj("border-b","fav"!==o.tab)("border-gray-300","fav"!==o.tab)("bg-black","fav"!==o.tab)("bg-opacity-5","fav"!==o.tab),e.xp6(6),e.Q6J("ngIf","people"===o.tab),e.xp6(1),e.Q6J("ngIf","fav"===o.tab),e.xp6(5),e.hij(" Hello ",null==o.user?null:o.user.name,", "),e.xp6(2),e.hij(" ",e.xi3(24,22,o.date,"fullDate")," "),e.xp6(9),e.Q6J("ngIf",!o.hide_nav))},dependencies:[p.O5,Ue.o,we.i,y.o,C.wG,k,O,S,M,p.uU],styles:["[_nghost-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;display:flex;flex-direction:column}main[_ngcontent-%COMP%]{min-height:50%}\n/*# sourceMappingURL=landing.component.ts-angular-inline--67.css.map*/"]}),n})()}];let Ne=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.ez,Y.v,h.u5,x.Bz.forChild(Je)]}),n})()}}]);
//# sourceMappingURL=apps_workplace_src_app_landing_landing_module_ts.js.map