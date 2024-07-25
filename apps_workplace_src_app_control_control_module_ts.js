"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["apps_workplace_src_app_control_control_module_ts"],{4995:(A,g,o)=>{o.r(g),o.d(g,{ControlModule:()=>V});var p=o(316),v=o(9805),f=o(1157),e=o(7404),_=o(7434),y=o(895),w=o(9204),F=o(7871),x=o(2185),L=o(2168),m=o(4456),C=o(9434),d=o(4950),R=o(7984),S=o(1134),b=o(5060),I=o(6781);const E=()=>["/explore"],j=s=>({space:s});function G(s,r){if(1&s&&(e.j41(0,"div",1)(1,"div",2)(2,"div",3),e.EFF(3),e.k0s(),e.j41(4,"div",4)(5,"div",5),e.EFF(6),e.k0s(),e.j41(7,"div",6)(8,"app-icon"),e.EFF(9,"account_circle"),e.k0s(),e.EFF(10),e.k0s()()(),e.j41(11,"div",7)(12,"a",8),e.nI1(13,"safe"),e.EFF(14," Control "),e.k0s(),e.j41(15,"a",9),e.EFF(16," Find "),e.k0s()()()),2&s){const t=e.XpG();e.AVh("with-image",t.show_image),e.R7$(3),e.JRh(t.space.name),e.R7$(3),e.JRh(t.location),e.R7$(4),e.SpI(" ",t.space.capacity||"0"," "),e.R7$(2),e.Y8G("href",e.i5U(13,8,t.space.support_url,"url"),e.B4B),e.R7$(3),e.Y8G("routerLink",e.lJ4(11,E))("queryParams",e.eq3(12,j,t.space.id))}}let $=(()=>{class s{get show_image(){return this._settings.get("app.spaces.show_images")}get location(){if(!this.space)return"Unable to determine location";const t=this.space.level,n=this._org.buildings.find(l=>l.id===t.parent_id);return`${n?(n.display_name||n.name)+", ":""}${t?.display_name||t?.name||"<No Level>"}`}constructor(t,n){this._settings=t,this._org=n}static#e=this.\u0275fac=function(n){return new(n||s)(e.rXU(f.h$),e.rXU(x.yb))};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["a-control-space-list-item"]],inputs:{space:"space"},decls:1,vars:1,consts:[["class","flex flex-wrap items-center sm:space-x-4 bg-base-100 hover:bg-base-200 overflow-hidden p-2 pl-4 mb-2",3,"with-image",4,"ngIf"],[1,"flex","flex-wrap","items-center","sm:space-x-4","bg-base-100","hover:bg-base-200","overflow-hidden","p-2","pl-4","mb-2"],[1,"flex","flex-col","flex-1"],[1,"text-xl"],[1,"flex","items-center","w-full","text-sm"],[1,"flex-1"],[1,"flex","items-center","text-lg"],[1,"flex","w-full","sm:w-auto","sm:flex-col","items-center","space-x-2","sm:space-x-0","sm:space-y-2","mt-4","sm:mt-0"],["btn","","matRipple","","control","",1,"w-32","flex-1","sm:flex-none",3,"href"],["btn","","matRipple","","locate","",1,"w-32","flex-1","sm:flex-none","inverse",3,"routerLink","queryParams"]],template:function(n,l){1&n&&e.DNE(0,G,17,14,"div",0),2&n&&e.Y8G("ngIf",l.space)},dependencies:[p.bT,v.Wk,C.R,b.r6,I.m]})}return s})();function T(s,r){1&s&&e.nrm(0,"mat-spinner",7),2&s&&e.Y8G("diameter",32)}function M(s,r){1&s&&e.nrm(0,"a-control-space-list-item",10),2&s&&e.Y8G("space",r.$implicit)}function U(s,r){if(1&s&&(e.j41(0,"div",8),e.DNE(1,M,1,1,"a-control-space-list-item",9),e.k0s()),2&s){const t=e.XpG();e.R7$(),e.Y8G("ngForOf",t.filtered_list)}}function O(s,r){if(1&s&&(e.j41(0,"div",11)(1,"app-icon"),e.EFF(2,"close"),e.k0s(),e.j41(3,"p"),e.EFF(4),e.k0s()()),2&s){const t=e.XpG();e.R7$(4),e.SpI(" ",t.search_str?' No matches for "'+t.search_str+'"':"No controllable spaces"," ")}}let N=(()=>{class s extends f.Tv{constructor(t,n){super(),this._spaces=t,this._org=n,this.space_list=[]}ngOnInit(){var t=this;return(0,w.A)(function*(){yield t._spaces.initialised.pipe((0,F.$)(n=>n)).toPromise(),t.space_list=t._spaces.filter(n=>!!n.support_url),t.space_list.sort((n,l)=>t.sortSpaces(n,l))})()}get filtered_list(){const t=(this.search_str||"").toLowerCase();return(this.space_list||[]).filter(n=>{const l=this._org.buildings.find(h=>h.id===n.level.parent_id),i=(n.name||"").toLowerCase(),c=((n.level?n.level.name:"")||"").toLowerCase(),a=((l?l.name:"")||"").toLowerCase();return i.indexOf(t)>=0||c&&c.indexOf(t)>=0||a&&a.indexOf(t)>=0})}sortSpaces(t,n){const l=this._org.buildings.find(u=>u.id===t.level?.parent_id),i=(t.name||"").toLowerCase(),c=((t.level?t.level.name:"")||"").toLowerCase(),a=(l?.name||"").toLowerCase(),h=this._org.buildings.find(u=>u.id===n.level?.parent_id),D=(n.name||"").toLowerCase(),k=((n.level?n.level.name:"")||"").toLowerCase(),J=(h?.name||"").toLowerCase();return a.localeCompare(J)||c.localeCompare(k)||i.localeCompare(D)}static#e=this.\u0275fac=function(n){return new(n||s)(e.rXU(L.bh),e.rXU(x.yb))};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["a-control-space-list"]],features:[e.Vt3],decls:9,vars:4,consts:[["empty_state",""],[1,"w-full","flex","items-center","justify-center","p-2"],["overlay","","appearance","outline",1,"rounded","h-12"],["matPrefix","",1,"text-xl"],["matInput","","placeholder","Search...",3,"ngModelChange","ngModel"],["matSuffix","","class","top-2",3,"diameter",4,"ngIf"],["class","flex flex-col flex-1 overflow-auto w-full",4,"ngIf","ngIfElse"],["matSuffix","",1,"top-2",3,"diameter"],[1,"flex","flex-col","flex-1","overflow-auto","w-full"],[3,"space",4,"ngFor","ngForOf"],[3,"space"],[1,"flex","flex-col","items-center","p-8"]],template:function(n,l){if(1&n){const i=e.RV6();e.j41(0,"div",1)(1,"mat-form-field",2)(2,"app-icon",3),e.EFF(3,"search"),e.k0s(),e.j41(4,"input",4),e.mxI("ngModelChange",function(a){return e.eBV(i),e.DH7(l.search_str,a)||(l.search_str=a),e.Njj(a)}),e.k0s(),e.DNE(5,T,1,1,"mat-spinner",5),e.k0s()(),e.DNE(6,U,2,1,"div",6)(7,O,5,1,"ng-template",null,0,e.C5r)}if(2&n){const i=e.sdS(8);e.R7$(4),e.R50("ngModel",l.search_str),e.R7$(),e.Y8G("ngIf",l.loading),e.R7$(),e.Y8G("ngIf",l.filtered_list.length)("ngIfElse",i)}},dependencies:[p.Sq,p.bT,m.me,m.BC,m.vS,C.R,d.rl,d.JW,d.yw,R.fg,S.LG,$],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}mat-form-field[_ngcontent-%COMP%]{width:48rem;max-width:calc(100% - 2rem)}\n\n/*# sourceMappingURL=space-list.component.ts-angular-inline--126.css.map*/"]})}return s})();const Y=["app-control",""];let X=(()=>{class s{constructor(t){this._settings=t}ngOnInit(){this._settings.title="Control"}static#e=this.\u0275fac=function(n){return new(n||s)(e.rXU(f.h$))};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["","app-control",""]],attrs:Y,decls:5,vars:0,consts:[[1,"flex-1","flex","sm:flex-row","flex-col-reverse","h-1/2"],[1,"relative","z-0","flex","flex-col","flex-1","h-1/2","sm:h-auto","overflow-hidden"]],template:function(n,l){1&n&&(e.nrm(0,"topbar"),e.j41(1,"div",0)(2,"main",1),e.nrm(3,"a-control-space-list"),e.k0s()(),e.nrm(4,"footer-menu"))},dependencies:[_.G,y.e,N],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background:#f0f0f0}\n\n/*# sourceMappingURL=control.component.ts-angular-inline--125.css.map*/"]})}return s})();var B=o(6591);const P=[{path:"",component:X}];let V=(()=>{class s{static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275mod=e.$C({type:s});static#n=this.\u0275inj=e.G2t({imports:[p.MD,m.YN,v.iI.forChild(P),B.p]})}return s})()}}]);
//# sourceMappingURL=apps_workplace_src_app_control_control_module_ts.js.map