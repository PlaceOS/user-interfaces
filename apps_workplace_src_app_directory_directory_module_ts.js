"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["apps_workplace_src_app_directory_directory_module_ts"],{6027:(B,g,r)=>{r.r(g),r.d(g,{DirectoryModule:()=>c});var m=r(4666),h=r(959),d=r(2218),x=r(823),_=r(3298),v=r(9095),y=r(6942),u=r(8368),U=r(3149),e=r(9676),p=r(2508),C=r(4187),T=r(6012),L=r(5306),f=r(5074),Z=r(1267),w=r(1708),I=r(9685),D=r(207),J=r(158);function Q(n,s){if(1&n&&e._UZ(0,"a-user-avatar",9),2&n){const t=e.oxw(2);e.Q6J("user",t.user)}}function M(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"a",10),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.sendCallEvent())}),e.ALo(1,"safe"),e._uU(2," Call "),e.qZA()}if(2&n){const t=e.oxw(2);e.Q6J("href",e.xi3(1,1,"tel:"+t.user.phone,"url"),e.LSH)}}const A=function(){return["/explore"]},O=function(n){return{user:n}};function N(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",1),e.YNc(1,Q,1,1,"a-user-avatar",2),e.TgZ(2,"div",3)(3,"div",4),e._uU(4),e.qZA(),e.TgZ(5,"a",5),e.ALo(6,"safe"),e._uU(7),e.qZA()(),e.TgZ(8,"div",6)(9,"a",7),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.sendLocateEvent())}),e._uU(10," Locate "),e.qZA(),e.YNc(11,M,3,4,"a",8),e.qZA()()}if(2&n){const t=e.oxw();e.ekj("with-image",t.show_image),e.xp6(1),e.Q6J("ngIf",t.show_image),e.xp6(3),e.Oqu(t.user.name),e.xp6(1),e.Q6J("href",e.xi3(6,9,"mailto:"+t.user.email,"url"),e.LSH),e.xp6(2),e.hij(" ",t.user.email," "),e.xp6(2),e.Q6J("routerLink",e.DdM(12,A))("queryParams",e.VKq(13,O,t.user.email)),e.xp6(2),e.Q6J("ngIf",t.user.phone)}}class a{constructor(s){this._settings=s}get show_image(){return this._settings.get("app.users.show_avatars")}sendLocateEvent(){}sendCallEvent(){}}function F(n,s){1&n&&e._UZ(0,"mat-spinner",10),2&n&&e.Q6J("diameter",32)}function Y(n,s){1&n&&e._UZ(0,"a-directory-user-list-item",15),2&n&&e.Q6J("user",s.$implicit)}function S(n,s){if(1&n&&(e.ynx(0),e.TgZ(1,"div",13),e._uU(2),e.qZA(),e.YNc(3,Y,1,1,"a-directory-user-list-item",14),e.BQk()),2&n){const t=e.oxw().$implicit,o=e.oxw(2);e.xp6(2),e.hij(" ",t," "),e.xp6(1),e.Q6J("ngForOf",o.groupedUsers[t])}}function j(n,s){if(1&n&&(e.ynx(0),e.YNc(1,S,4,2,"ng-container",12),e.BQk()),2&n){const t=s.$implicit,o=e.oxw(2);e.xp6(1),e.Q6J("ngIf",o.groupedUsers[t].length)}}function $(n,s){if(1&n&&(e.ynx(0),e.YNc(1,j,2,1,"ng-container",11),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.letters)}}function P(n,s){if(1&n&&(e.TgZ(0,"div",16)(1,"app-icon",17),e._uU(2),e.qZA(),e.TgZ(3,"div",18),e._uU(4),e.qZA()()),2&n){const t=e.oxw();e.xp6(2),e.Oqu(t.search_str&&t.search_str.length>=t.min_search_length?"close":"arrow_upward"),e.xp6(2),e.hij(" ",t.search_str&&t.search_str.length>=t.min_search_length?' No matches for "'+t.search_str+'"':"Type above to search for users"," ")}}a.\u0275fac=function(s){return new(s||a)(e.Y36(u.gb))},a.\u0275cmp=e.Xpm({type:a,selectors:[["a-directory-user-list-item"]],inputs:{user:"user"},decls:1,vars:1,consts:[["class","flex flex-wrap items-center sm:space-x-4 bg-white hover:bg-gray-100 overflow-hidden p-4 mb-2",3,"with-image",4,"ngIf"],[1,"flex","flex-wrap","items-center","sm:space-x-4","bg-white","hover:bg-gray-100","overflow-hidden","p-4","mb-2"],[3,"user",4,"ngIf"],[1,"flex","flex-col","flex-1","w-1/2","ml-4","sm:ml-0"],[1,"name"],["name","email",1,"text-sm","underline",3,"href"],[1,"flex","w-full","sm:w-auto","sm:flex-col","items-center","space-x-2","sm:space-x-0","sm:space-y-2","mt-4","sm:mt-0"],["btn","","matRipple","","button","","locate","",1,"w-32","flex-1","sm:flex-none",3,"routerLink","queryParams","click"],["btn","","matRipple","","button","","class","w-32 flex-1 sm:flex-nones","call","",3,"href","click",4,"ngIf"],[3,"user"],["btn","","matRipple","","button","","call","",1,"w-32","flex-1","sm:flex-nones",3,"href","click"]],template:function(s,t){1&s&&e.YNc(0,N,12,15,"div",0),2&s&&e.Q6J("ngIf",t.user)},dependencies:[m.O5,h.rH,I.k,D.wG,J.y]});const R="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");class l extends u.KG{constructor(s){super(),this._settings=s,this.user_list=[],this.groupedUsers={},this.search$=new d.xQ,this.search_results$=this.search$.pipe((0,x.b)(400),(0,_.x)(),(0,v.w)(t=>(this.loading=!0,t.length>=this.min_search_length?(0,U.VE)(t).toPromise().catch(()=>[]):Promise.resolve(this.user_list||[]))),(0,y.U)(t=>(this.loading=!1,t)))}get min_search_length(){const s=this._settings.get("app.users.min_search_length");return"number"==typeof s&&s>=0?s:3}ngOnInit(){this.subscription("search_results",this.search_results$.subscribe(s=>{this.user_list=s,this.buildGroups(this.user_list)})),this.search$.next("")}get letters(){return R}buildGroups(s){const t=s.sort((o,i)=>o.name.localeCompare(i.name));for(const o of this.letters)this.groupedUsers[o]=t.filter(i=>i.name.startsWith(o))}}l.\u0275fac=function(s){return new(s||l)(e.Y36(u.gb))},l.\u0275cmp=e.Xpm({type:l,selectors:[["","a-directory-user-list",""]],features:[e.qOj],attrs:["a-directory-user-list",""],decls:14,vars:4,consts:[[1,"flex-1","flex","sm:flex-row","flex-col-reverse","h-1/2"],[1,"relative","z-0","flex","flex-col","flex-1","h-1/2","sm:h-auto","overflow-hidden"],[1,"w-full","flex","items-center","justify-center","p-2"],["overlay","","appearance","outline",1,"rounded"],["matPrefix","",1,"text-xl"],["matInput","","placeholder","Search for a person...",3,"ngModel","ngModelChange"],["matSuffix","","class","top-2",3,"diameter",4,"ngIf"],[1,"flex-1","h-1/2","w-full"],[4,"ngIf","ngIfElse"],["empty_state",""],["matSuffix","",1,"top-2",3,"diameter"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"py-2","px-4","font-medium"],[3,"user",4,"ngFor","ngForOf"],[3,"user"],[1,"flex","flex-col","items-center","p-8"],[1,"text-5xl"],[1,"text"]],template:function(s,t){if(1&s&&(e._UZ(0,"topbar"),e.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"mat-form-field",3)(5,"app-icon",4),e._uU(6,"search"),e.qZA(),e.TgZ(7,"input",5),e.NdJ("ngModelChange",function(i){return t.search_str=i})("ngModelChange",function(i){return t.search$.next(i)}),e.qZA(),e.YNc(8,F,1,1,"mat-spinner",6),e.qZA()(),e.TgZ(9,"main",7),e.YNc(10,$,2,1,"ng-container",8),e.qZA()()(),e._UZ(11,"footer-menu"),e.YNc(12,P,5,2,"ng-template",null,9,e.W1O)),2&s){const o=e.MAs(13);e.xp6(7),e.Q6J("ngModel",t.search_str),e.xp6(1),e.Q6J("ngIf",t.loading),e.xp6(2),e.Q6J("ngIf",t.groupedUsers&&t.user_list.length)("ngIfElse",o)}},dependencies:[m.sg,m.O5,p.Fj,p.JJ,p.On,C.o,T.i,L.o,f.KE,f.qo,f.R9,Z.Nt,w.Ou,a],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background:#f0f0f0}mat-form-field[_ngcontent-%COMP%]{width:48rem;max-width:calc(100% - 2rem)}\n/*# sourceMappingURL=user-list.component.ts-angular-inline--114.css.map*/"]});var b=r(8147);const G=[{path:"",component:l}];class c{}c.\u0275fac=function(s){return new(s||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({imports:[m.ez,p.u5,h.Bz.forChild(G),b.v]})}}]);
//# sourceMappingURL=apps_workplace_src_app_directory_directory_module_ts.js.map