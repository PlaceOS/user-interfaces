(self.webpackChunkplaceos=self.webpackChunkplaceos||[]).push([[881],{9881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{DirectoryModule:()=>$});var r=s(1511),n=s(6898),i=s(5959),o=s(7701),c=s(8720),a=s(4689),l=s(9996),u=s(5005),f=s(4587),h=s(2619),g=s(4892),p=s(2142),m=s(6283),x=s(1548),d=s(6756),_=s(6073),w=s(7806),Z=s(5980),v=s(5969),y=s(7695);function b(e,t){if(1&e&&h._UZ(0,"a-user-avatar",9),2&e){const e=h.oxw(2);h.Q6J("user",e.user)}}function q(e,t){if(1&e){const e=h.EpF();h.TgZ(0,"a",10),h.NdJ("click",function(){return h.CHM(e),h.oxw(2).sendCallEvent()}),h.ALo(1,"safe"),h._uU(2," Call "),h.qZA()}if(2&e){const e=h.oxw(2);h.Q6J("href",h.xi3(1,1,"tel:"+e.user.phone,"url"),h.LSH)}}const A=function(){return["/explore"]},J=function(e){return{user:e}};function Q(e,t){if(1&e){const e=h.EpF();h.TgZ(0,"div",1),h.YNc(1,b,1,1,"a-user-avatar",2),h.TgZ(2,"div",3),h.TgZ(3,"div",4),h._uU(4),h.qZA(),h.TgZ(5,"a",5),h.ALo(6,"safe"),h._uU(7),h.qZA(),h.qZA(),h.TgZ(8,"div",6),h.TgZ(9,"a",7),h.NdJ("click",function(){return h.CHM(e),h.oxw().sendLocateEvent()}),h._uU(10," Locate "),h.qZA(),h.YNc(11,q,3,4,"a",8),h.qZA(),h.qZA()}if(2&e){const e=h.oxw();h.ekj("with-image",e.show_image),h.xp6(1),h.Q6J("ngIf",e.show_image),h.xp6(3),h.Oqu(e.user.name),h.xp6(1),h.Q6J("href",h.xi3(6,9,"mailto:"+e.user.email,"url"),h.LSH),h.xp6(2),h.hij(" ",e.user.email," "),h.xp6(2),h.Q6J("routerLink",h.DdM(12,A))("queryParams",h.VKq(13,J,e.user.email)),h.xp6(2),h.Q6J("ngIf",e.user.phone)}}let T=(()=>{class e{constructor(e){this._settings=e}get show_image(){return this._settings.get("app.directory.show_avatars")}sendLocateEvent(){}sendCallEvent(){}}return e.\u0275fac=function(t){return new(t||e)(h.Y36(u.gb))},e.\u0275cmp=h.Xpm({type:e,selectors:[["a-directory-user-list-item"]],inputs:{user:"user"},decls:1,vars:1,consts:[["class","flex flex-wrap items-center sm:space-x-4 bg-white hover:bg-gray-100 overflow-hidden p-4 mb-2",3,"with-image",4,"ngIf"],[1,"flex","flex-wrap","items-center","sm:space-x-4","bg-white","hover:bg-gray-100","overflow-hidden","p-4","mb-2"],[3,"user",4,"ngIf"],[1,"flex","flex-col","flex-1","w-1/2","ml-4","sm:ml-0"],[1,"name"],["name","email",1,"text-sm","underline",3,"href"],[1,"flex","w-full","sm:w-auto","sm:flex-col","items-center","space-x-2","sm:space-x-0","sm:space-y-2","mt-4","sm:mt-0"],["mat-button","","button","","locate","",1,"w-32","flex-1","sm:flex-none",3,"routerLink","queryParams","click"],["mat-button","","button","","class","w-32 flex-1 sm:flex-nones","call","",3,"href","click",4,"ngIf"],[3,"user"],["mat-button","","button","","call","",1,"w-32","flex-1","sm:flex-nones",3,"href","click"]],template:function(e,t){1&e&&h.YNc(0,Q,12,15,"div",0),2&e&&h.Q6J("ngIf",t.user)},directives:[r.O5,Z.zs,n.yS,v.k],pipes:[y.y],styles:[""]}),e})();const U=["a-directory-user-list",""];function k(e,t){1&e&&h._UZ(0,"mat-spinner",11),2&e&&h.Q6J("diameter",32)}function I(e,t){1&e&&h._UZ(0,"a-directory-user-list-item",16),2&e&&h.Q6J("user",t.$implicit)}function C(e,t){if(1&e&&(h.ynx(0),h.TgZ(1,"div",14),h._uU(2),h.qZA(),h.YNc(3,I,1,1,"a-directory-user-list-item",15),h.BQk()),2&e){const e=h.oxw().$implicit,t=h.oxw(2);h.xp6(2),h.hij(" ",e," "),h.xp6(1),h.Q6J("ngForOf",t.groupedUsers[e])}}function N(e,t){if(1&e&&(h.ynx(0),h.YNc(1,C,4,2,"ng-container",13),h.BQk()),2&e){const e=t.$implicit,s=h.oxw(2);h.xp6(1),h.Q6J("ngIf",s.groupedUsers[e].length)}}function O(e,t){if(1&e&&(h.ynx(0),h.YNc(1,N,2,1,"ng-container",12),h.BQk()),2&e){const e=h.oxw();h.xp6(1),h.Q6J("ngForOf",e.letters)}}function M(e,t){if(1&e&&(h.TgZ(0,"div",17),h.TgZ(1,"app-icon",18),h._uU(2),h.qZA(),h.TgZ(3,"div",19),h._uU(4),h.qZA(),h.qZA()),2&e){const e=h.oxw();h.xp6(2),h.Oqu(e.search_str&&e.search_str.length>=e.min_search_length?"close":"arrow_upward"),h.xp6(2),h.hij(" ",e.search_str&&e.search_str.length>=e.min_search_length?' No matches for "'+e.search_str+'"':"Type above to search for users"," ")}}const Y="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");let E=(()=>{class e extends u.KG{constructor(e){super(),this._settings=e,this.user_list=[],this.groupedUsers={},this.search$=new i.xQ,this.search_results$=this.search$.pipe((0,o.b)(400),(0,c.x)(),(0,a.w)(e=>(this.loading=!0,e.length>=this.min_search_length?(0,f.VE)(e).toPromise().catch(()=>[]):Promise.resolve(this.user_list||[]))),(0,l.U)(e=>(this.loading=!1,e)))}get min_search_length(){const e=this._settings.get("app.directory.min_search_length");return"number"==typeof e&&e>=0?e:3}ngOnInit(){this.subscription("search_results",this.search_results$.subscribe(e=>{this.user_list=e,this.buildGroups(this.user_list)})),this.search$.next("")}get letters(){return Y}buildGroups(e){const t=e.sort((e,t)=>e.name.localeCompare(t.name));for(const s of this.letters)this.groupedUsers[s]=t.filter(e=>e.name.startsWith(s))}}return e.\u0275fac=function(t){return new(t||e)(h.Y36(u.gb))},e.\u0275cmp=h.Xpm({type:e,selectors:[["","a-directory-user-list",""]],features:[h.qOj],attrs:U,decls:14,vars:4,consts:[[1,"flex-1","flex","sm:flex-row","flex-col-reverse","h-1/2"],[1,"relative","z-10"],[1,"relative","z-0","flex","flex-col","flex-1","h-1/2","sm:h-auto","overflow-hidden"],[1,"w-full","flex","items-center","justify-center","p-2"],["overlay","","appearance","outline",1,"rounded"],["matPrefix","",1,"text-xl"],["matInput","","placeholder","Search for a person...",3,"ngModel","ngModelChange"],["matSuffix","","class","top-2",3,"diameter",4,"ngIf"],[1,"flex-1","h-1/2","w-full"],[4,"ngIf","ngIfElse"],["empty_state",""],["matSuffix","",1,"top-2",3,"diameter"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"py-2","px-4","font-medium"],[3,"user",4,"ngFor","ngForOf"],[3,"user"],[1,"flex","flex-col","items-center","p-8"],[1,"text-5xl"],[1,"text"]],template:function(e,t){if(1&e&&(h._UZ(0,"topbar"),h.TgZ(1,"div",0),h._UZ(2,"nav-menu",1),h.TgZ(3,"div",2),h.TgZ(4,"div",3),h.TgZ(5,"mat-form-field",4),h.TgZ(6,"app-icon",5),h._uU(7,"search"),h.qZA(),h.TgZ(8,"input",6),h.NdJ("ngModelChange",function(e){return t.search_str=e})("ngModelChange",function(e){return t.search$.next(e)}),h.qZA(),h.YNc(9,k,1,1,"mat-spinner",7),h.qZA(),h.qZA(),h.TgZ(10,"main",8),h.YNc(11,O,2,1,"ng-container",9),h.qZA(),h.qZA(),h.qZA(),h.YNc(12,M,5,2,"ng-template",null,10,h.W1O)),2&e){const e=h.MAs(13);h.xp6(8),h.Q6J("ngModel",t.search_str),h.xp6(1),h.Q6J("ngIf",t.loading),h.xp6(2),h.Q6J("ngIf",t.groupedUsers&&t.user_list.length)("ngIfElse",e)}},directives:[g.o,p.D,m.KE,x.o,m.qo,d.Nt,_.Fj,_.JJ,_.On,r.O5,w.$g,m.R9,r.sg,T],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background:#f0f0f0}mat-form-field[_ngcontent-%COMP%]{width:768px;max-width:calc(100% - 2rem)}"]}),e})();var F=s(6125);const L=[{path:"",component:E}];let $=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h.oAB({type:e}),e.\u0275inj=h.cJS({imports:[[r.ez,_.u5,n.Bz.forChild(L),F.v]]}),e})()}}]);