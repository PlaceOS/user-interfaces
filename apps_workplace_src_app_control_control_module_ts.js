"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["apps_workplace_src_app_control_control_module_ts"],{4671:(B,x,s)=>{s.r(x),s.d(x,{ControlModule:()=>z});var c=s(6477),h=s(854),f=s(1686),e=s(9445),_=s(4187),w=s(6012),L=s(1670),Z=s(5670),v=s(5912),y=s(1790),r=s(9542),C=s(5306),d=s(8750),S=s(380),T=s(5312),O=s(7728),U=s(158);const A=function(){return["/explore"]},I=function(o){return{space:o}};function M(o,l){if(1&o&&(e.TgZ(0,"div",1)(1,"div",2)(2,"div",3),e._uU(3),e.qZA(),e.TgZ(4,"div",4)(5,"div",5),e._uU(6),e.qZA(),e.TgZ(7,"div",6)(8,"app-icon"),e._uU(9,"account_circle"),e.qZA(),e._uU(10),e.qZA()()(),e.TgZ(11,"div",7)(12,"a",8),e.ALo(13,"safe"),e._uU(14," Control "),e.qZA(),e.TgZ(15,"a",9),e._uU(16," Find "),e.qZA()()()),2&o){const t=e.oxw();e.ekj("with-image",t.show_image),e.xp6(3),e.Oqu(t.space.name),e.xp6(3),e.Oqu(t.location),e.xp6(4),e.hij(" ",t.space.capacity||"0"," "),e.xp6(2),e.Q6J("href",e.xi3(13,8,t.space.support_url,"url"),e.LSH),e.xp6(3),e.Q6J("routerLink",e.DdM(11,A))("queryParams",e.VKq(12,I,t.space.id))}}let b=(()=>{class o{get show_image(){return this._settings.get("app.spaces.show_images")}get location(){if(!this.space)return"Unable to determine location";const t=this.space.level,n=this._org.buildings.find(a=>a.id===t.parent_id);return`${n?(n.display_name||n.name)+", ":""}${t?.display_name||t?.name||"<No Level>"}`}constructor(t,n){this._settings=t,this._org=n}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(f.gb),e.Y36(v.w7))},o.\u0275cmp=e.Xpm({type:o,selectors:[["a-control-space-list-item"]],inputs:{space:"space"},decls:1,vars:1,consts:[["class","flex flex-wrap items-center sm:space-x-4 bg-white hover:bg-gray-100 overflow-hidden p-2 pl-4 mb-2",3,"with-image",4,"ngIf"],[1,"flex","flex-wrap","items-center","sm:space-x-4","bg-white","hover:bg-gray-100","overflow-hidden","p-2","pl-4","mb-2"],[1,"flex","flex-col","flex-1"],[1,"text-xl"],[1,"flex","items-center","w-full","text-sm"],[1,"flex-1"],[1,"flex","items-center","text-lg"],[1,"flex","w-full","sm:w-auto","sm:flex-col","items-center","space-x-2","sm:space-x-0","sm:space-y-2","mt-4","sm:mt-0"],["btn","","matRipple","","button","","control","",1,"w-32","flex-1","sm:flex-none",3,"href"],["btn","","matRipple","","button","","locate","",1,"w-32","flex-1","sm:flex-none","inverse",3,"routerLink","queryParams"]],template:function(t,n){1&t&&e.YNc(0,M,17,14,"div",0),2&t&&e.Q6J("ngIf",n.space)},dependencies:[c.O5,h.rH,C.o,O.wG,U.y]}),o})();function J(o,l){1&o&&e._UZ(0,"mat-spinner",7),2&o&&e.Q6J("diameter",32)}function N(o,l){1&o&&e._UZ(0,"a-control-space-list-item",10),2&o&&e.Q6J("space",l.$implicit)}function Y(o,l){if(1&o&&(e.TgZ(0,"div",8),e.YNc(1,N,1,1,"a-control-space-list-item",9),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.filtered_list)}}function F(o,l){if(1&o&&(e.TgZ(0,"div",11)(1,"app-icon"),e._uU(2,"close"),e.qZA(),e.TgZ(3,"p"),e._uU(4),e.qZA()()),2&o){const t=e.oxw();e.xp6(4),e.hij(" ",t.search_str?' No matches for "'+t.search_str+'"':"No controllable spaces"," ")}}let Q=(()=>{class o extends f.cx{constructor(t,n){super(),this._spaces=t,this._org=n,this.space_list=[]}ngOnInit(){var t=this;return(0,L.Z)(function*(){yield t._spaces.initialised.pipe((0,Z.P)(n=>n)).toPromise(),t.space_list=t._spaces.filter(n=>!!n.support_url),t.space_list.sort((n,a)=>t.sortSpaces(n,a))})()}get filtered_list(){const t=(this.search_str||"").toLowerCase();return(this.space_list||[]).filter(n=>{const a=this._org.buildings.find(u=>u.id===n.level.parent_id),i=(n.name||"").toLowerCase(),p=((n.level?n.level.name:"")||"").toLowerCase(),m=((a?a.name:"")||"").toLowerCase();return i.indexOf(t)>=0||p&&p.indexOf(t)>=0||m&&m.indexOf(t)>=0})}sortSpaces(t,n){const a=this._org.buildings.find(g=>g.id===t.level?.parent_id),i=(t.name||"").toLowerCase(),p=((t.level?t.level.name:"")||"").toLowerCase(),m=(a?.name||"").toLowerCase(),u=this._org.buildings.find(g=>g.id===n.level?.parent_id),K=(n.name||"").toLowerCase(),X=((n.level?n.level.name:"")||"").toLowerCase(),$=(u?.name||"").toLowerCase();return m.localeCompare($)||p.localeCompare(X)||i.localeCompare(K)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(y.sK),e.Y36(v.w7))},o.\u0275cmp=e.Xpm({type:o,selectors:[["a-control-space-list"]],features:[e.qOj],decls:9,vars:4,consts:[[1,"w-full","flex","items-center","justify-center","p-2"],["overlay","","appearance","outline",1,"rounded","h-12"],["matPrefix","",1,"text-xl"],["matInput","","placeholder","Search...",3,"ngModel","ngModelChange"],["matSuffix","","class","top-2",3,"diameter",4,"ngIf"],["class","flex flex-col flex-1 overflow-auto w-full",4,"ngIf","ngIfElse"],["empty_state",""],["matSuffix","",1,"top-2",3,"diameter"],[1,"flex","flex-col","flex-1","overflow-auto","w-full"],[3,"space",4,"ngFor","ngForOf"],[3,"space"],[1,"flex","flex-col","items-center","p-8"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"mat-form-field",1)(2,"app-icon",2),e._uU(3,"search"),e.qZA(),e.TgZ(4,"input",3),e.NdJ("ngModelChange",function(i){return n.search_str=i}),e.qZA(),e.YNc(5,J,1,1,"mat-spinner",4),e.qZA()(),e.YNc(6,Y,2,1,"div",5),e.YNc(7,F,5,1,"ng-template",null,6,e.W1O)),2&t){const a=e.MAs(8);e.xp6(4),e.Q6J("ngModel",n.search_str),e.xp6(1),e.Q6J("ngIf",n.loading),e.xp6(1),e.Q6J("ngIf",n.filtered_list.length)("ngIfElse",a)}},dependencies:[c.sg,c.O5,r.Fj,r.JJ,r.On,C.o,d.KE,d.qo,d.R9,S.Nt,T.Ou,b],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}mat-form-field[_ngcontent-%COMP%]{width:48rem;max-width:calc(100% - 2rem)}\n/*# sourceMappingURL=space-list.component.ts-angular-inline--123.css.map*/"]}),o})();const P=["app-control",""];let j=(()=>{class o{constructor(t){this._settings=t}ngOnInit(){this._settings.title="Control"}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(f.gb))},o.\u0275cmp=e.Xpm({type:o,selectors:[["","app-control",""]],attrs:P,decls:5,vars:0,consts:[[1,"flex-1","flex","sm:flex-row","flex-col-reverse","h-1/2"],[1,"relative","z-0","flex","flex-col","flex-1","h-1/2","sm:h-auto","overflow-hidden"]],template:function(t,n){1&t&&(e._UZ(0,"topbar"),e.TgZ(1,"div",0)(2,"main",1),e._UZ(3,"a-control-space-list"),e.qZA()(),e._UZ(4,"footer-menu"))},dependencies:[_.o,w.i,Q],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background:#f0f0f0}\n/*# sourceMappingURL=control.component.ts-angular-inline--122.css.map*/"]}),o})();var R=s(3696);const E=[{path:"",component:j}];let z=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.ez,r.u5,h.Bz.forChild(E),R.v]}),o})()}}]);
//# sourceMappingURL=apps_workplace_src_app_control_control_module_ts.js.map