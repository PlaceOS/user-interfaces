"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_catering_catering_module_ts"],{28206:(ft,b,r)=>{r.r(b),r.d(b,{CateringModule:()=>gt});var c=r(60316),f=r(34456),g=r(26842),T=r(38223),j=r(12772),R=r(40363),m=r(82333),t=r(68559),w=r(74605),d=r(85060),v=r(48519),x=r(41623),h=r(89204),F=r(35443),I=r(57871),k=r(33602),M=r(12185),u=r(75566),G=r(46815),$=r(42175),E=r(12587),V=r(94584),Y=r(12236),O=r(24950),S=r(25175),N=r(80640),z=r(69434),X=r(56062);function P(n,a){if(1&n&&(t.j41(0,"div",18),t.EFF(1),t.nI1(2,"building"),t.j41(3,"span",19),t.EFF(4," - "),t.k0s()()),2&n){let e;const o=t.XpG().$implicit;t.R7$(),t.SpI(" ",null==(e=t.bMT(2,1,o.parent_id))?null:e.display_name," ")}}function U(n,a){if(1&n&&(t.j41(0,"mat-option",15)(1,"div",16),t.DNE(2,P,5,3,"div",17),t.j41(3,"div"),t.EFF(4),t.k0s()()()),2&n){const e=a.$implicit,o=t.XpG();t.Y8G("value",e.id),t.R7$(2),t.Y8G("ngIf",o.use_region),t.R7$(2),t.SpI(" ",e.display_name||e.name," ")}}function D(n,a){if(1&n){const e=t.RV6();t.j41(0,"button",20),t.bIt("click",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.addItem())}),t.j41(1,"app-icon",21),t.EFF(2,"add"),t.k0s()()}}function L(n,a){if(1&n){const e=t.RV6();t.j41(0,"button",22),t.bIt("click",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.editConfig())}),t.j41(1,"app-icon",21),t.EFF(2,"menu_book"),t.k0s()()}}function A(n,a){if(1&n){const e=t.RV6();t.j41(0,"button",23),t.bIt("click",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.importMenu())}),t.j41(1,"app-icon",21),t.EFF(2,"cloud_upload"),t.k0s()()}}function B(n,a){if(1&n){const e=t.RV6();t.j41(0,"button",24),t.bIt("click",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.setRoomAvailability())}),t.j41(1,"app-icon",21),t.EFF(2,"event_available"),t.k0s()()}}function J(n,a){if(1&n){const e=t.RV6();t.j41(0,"button",25),t.bIt("click",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.setChargeCodes())}),t.j41(1,"app-icon",21),t.EFF(2,"payments"),t.k0s()()}}let C=(()=>{class n extends m.Tv{get building(){return this._org.building}get use_region(){return!!this._settings.get("app.use_region")}constructor(e,o,i,s,l,mt,dt){super(),this._orders=e,this._catering=o,this._org=i,this._route=s,this._router=l,this._dialog=mt,this._settings=dt,this.zones=[],this.filters=this._orders.filters,this.levels=(0,$.zV)([this._org.active_building,this._org.active_region]).pipe((0,F.T)(([p,ut])=>this._settings.get("app.use_region")?this._org.levelsForRegion(ut):this._org.levelsForBuilding(p))),this.setDate=p=>this._orders.filters={...this._orders.filters,date:p},this.setSearch=p=>this._orders.filters={...this._orders.filters,search:p},this.updateZones=p=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:p.join(",")}}),this._orders.filters={...this._orders.filters,zones:[p]},this._catering.zone=p[0]||this._catering.zone},this.addItem=()=>this._catering.addItem(),this.editConfig=()=>this._catering.editConfig(),this.importMenu=()=>this._catering.importMenu()}ngOnInit(){var e=this;return(0,h.A)(function*(){yield e._org.initialised.pipe((0,I.$)(o=>o)).toPromise(),e._catering.zone=(e._orders.filters?.zones||[])[0]||e._org.building?.id,e.subscription("route.query",e._route.queryParamMap.subscribe(o=>{if(o.has("zone_ids")){const i=o.get("zone_ids").split(",");if(!i.length)return;const s=e._org.levelWithID(i);if(e.zones=i,!s)return;e._org.building=e._org.buildings.find(l=>l.id===s.parent_id)}})),e.subscription("route.params",e._route.paramMap.subscribe(o=>e.page=o.has("view")?o.get("view"):""))})()}setRoomAvailability(){var e=this;return(0,h.A)(function*(){const o=e._dialog.open(G.DJ,{data:{type:"Catering",disabled_rooms:yield e._catering.availability.pipe((0,k.s)(1)).toPromise()}});e.subscription("room-availability",o.componentInstance.change.subscribe(function(){var i=(0,h.A)(function*(s){yield e._catering.saveSettings({disabled_rooms:s}).catch(),o.componentInstance.loading=!1});return function(s){return i.apply(this,arguments)}}()))})()}setChargeCodes(){this._dialog.open(u.sp)}static#t=this.\u0275fac=function(o){return new(o||n)(t.rXU(u.QB),t.rXU(u._I),t.rXU(M.yb),t.rXU(g.nX),t.rXU(g.Ix),t.rXU(E.bZ),t.rXU(m.h$))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["catering-topbar"]],features:[t.Vt3],decls:19,vars:14,consts:[[1,"flex","items-center","w-full","pt-4","pb-2","px-8","space-x-2"],[1,"text-2xl","font-medium"],[1,"flex-1","w-px"],[1,"mr-2",3,"modelChange","model"],[1,"flex","items-center","bg-base-100","h-20","px-8","border-b","border-base-200","space-x-2"],["appearance","outline",1,"no-subscript","w-60"],["placeholder","All Levels","multiple","",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],["icon","","matRipple","","matTooltip","Add Item","class","bg-secondary text-secondary-content rounded h-12 w-12",3,"click",4,"ngIf"],["icon","","matRipple","","matTooltip","Edit Config","class","bg-secondary text-secondary-content rounded h-12 w-12",3,"click",4,"ngIf"],["icon","","matRipple","","matTooltip","Import Menu","class","bg-secondary text-secondary-content rounded h-12 w-12",3,"click",4,"ngIf"],["icon","","matRipple","","matTooltip","Room Availability","class","bg-secondary text-secondary-content rounded h-12 w-12",3,"click",4,"ngIf"],["icon","","matRipple","","matTooltip","Charge Codes","class","bg-secondary text-secondary-content rounded h-12 w-12",3,"click",4,"ngIf"],[1,"flex-1","w-2"],[3,"dateChange"],[3,"value"],[1,"flex","flex-col-reverse"],["class","text-xs opacity-30",4,"ngIf"],[1,"text-xs","opacity-30"],[1,"opacity-0"],["icon","","matRipple","","matTooltip","Add Item",1,"bg-secondary","text-secondary-content","rounded","h-12","w-12",3,"click"],[1,"text-2xl"],["icon","","matRipple","","matTooltip","Edit Config",1,"bg-secondary","text-secondary-content","rounded","h-12","w-12",3,"click"],["icon","","matRipple","","matTooltip","Import Menu",1,"bg-secondary","text-secondary-content","rounded","h-12","w-12",3,"click"],["icon","","matRipple","","matTooltip","Room Availability",1,"bg-secondary","text-secondary-content","rounded","h-12","w-12",3,"click"],["icon","","matRipple","","matTooltip","Charge Codes",1,"bg-secondary","text-secondary-content","rounded","h-12","w-12",3,"click"]],template:function(o,i){if(1&o&&(t.j41(0,"div",0)(1,"h2",1),t.EFF(2,"Catering Orders"),t.k0s(),t.nrm(3,"div",2),t.j41(4,"searchbar",3),t.nI1(5,"async"),t.bIt("modelChange",function(l){return i.setSearch(l)}),t.k0s()(),t.j41(6,"div",4)(7,"mat-form-field",5)(8,"mat-select",6),t.nI1(9,"async"),t.bIt("ngModelChange",function(l){return i.updateZones(l)}),t.DNE(10,U,5,3,"mat-option",7),t.nI1(11,"async"),t.k0s()(),t.DNE(12,D,3,0,"button",8)(13,L,3,0,"button",9)(14,A,3,0,"button",10)(15,B,3,0,"button",11)(16,J,3,0,"button",12),t.nrm(17,"div",13),t.j41(18,"date-options",14),t.bIt("dateChange",function(l){return i.setDate(l)}),t.k0s()()),2&o){let s,l;t.R7$(4),t.Y8G("model",null==(s=t.bMT(5,8,i.filters))?null:s.search),t.R7$(4),t.Y8G("ngModel",null==(l=t.bMT(9,10,i.filters))?null:l.zones),t.R7$(2),t.Y8G("ngForOf",t.bMT(11,12,i.levels)),t.R7$(2),t.Y8G("ngIf","menu"===i.page&&(!i.zones[0]||i.zones[0]===(null==i.building?null:i.building.id))),t.R7$(),t.Y8G("ngIf","menu"===i.page),t.R7$(),t.Y8G("ngIf","menu"===i.page),t.R7$(),t.Y8G("ngIf","menu"===i.page),t.R7$(),t.Y8G("ngIf","menu"===i.page)}},dependencies:[c.Sq,c.bT,f.BC,f.vS,V.o,Y.x,O.rl,S.VO,d.wT,N.oV,d.r6,z.R,c.Jj,X.b],styles:["mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n\n/*# sourceMappingURL=catering-topbar.component.ts-angular-inline--155.css.map*/"]})}return n})();const W=["app-catering",""],Z=()=>["/book","catering","menu"],Q=()=>["/book","catering","orders"];function H(n,a){1&n&&(t.j41(0,"div",7),t.EFF(1,' To edit the menu select "All Levels" from the top left '),t.k0s())}function K(n,a){1&n&&t.nrm(0,"catering-order-list",8)}function q(n,a){1&n&&t.nrm(0,"catering-menu",8)}function tt(n,a){1&n&&(t.j41(0,"div",9)(1,"a",10)(2,"div",11),t.nrm(3,"div",12),t.j41(4,"span",13),t.EFF(5,"Menus and Pricing"),t.k0s()(),t.j41(6,"div",14),t.EFF(7," View and Edit Menus and Pricing "),t.k0s()(),t.j41(8,"a",10)(9,"div",11),t.nrm(10,"div",12),t.j41(11,"span",13),t.EFF(12,"Today's Orders"),t.k0s()(),t.j41(13,"div",14),t.EFF(14," View Catering Orders and their statuses upon arrival "),t.k0s()()()),2&n&&(t.R7$(),t.Y8G("routerLink",t.lJ4(6,Z)),t.R7$(),t.xc7("background-image","url(assets/menus.jpg)"),t.R7$(6),t.Y8G("routerLink",t.lJ4(7,Q)),t.R7$(),t.xc7("background-image","url(assets/orders.jpg)"))}let _=(()=>{class n extends m.Tv{constructor(e){super(),this._route=e}ngOnInit(){this.subscription("route.params",this._route.paramMap.subscribe(e=>this.page=e.has("view")?e.get("view"):""))}static#t=this.\u0275fac=function(o){return new(o||n)(t.rXU(g.nX))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["","app-catering",""]],features:[t.Vt3],attrs:W,decls:9,vars:4,consts:[[1,"relative","w-full","flex","flex-col","bg-base-200"],[1,"relative","z-10"],["class","p-2 flex items-center justify-center bg-info text-info-content text-sm",4,"ngIf"],[1,"flex","flex-1","h-1/2","w-full","overflow-auto"],[3,"ngSwitch"],["class","flex-1",4,"ngSwitchCase"],["class","flex flex-1 flex-wrap items-center justify-center",4,"ngSwitchDefault"],[1,"p-2","flex","items-center","justify-center","bg-info","text-info-content","text-sm"],[1,"flex-1"],[1,"flex","flex-1","flex-wrap","items-center","justify-center"],["matRipple","",1,"rounded","flex","flex-col","items-center","bg-base-100","shadow","text-black",3,"routerLink"],["name","img",1,"relative","w-full","flex","flex-1","items-center","justify-center","text-2xl","text-white","bg-center","bg-cover"],[1,"absolute","inset-0","bg-neutral","opacity-60","z-0"],[1,"z-10"],[1,"p-2","h-14","w-full","text-sm","text-center","flex","items-center","justify-center"]],template:function(o,i){1&o&&(t.nrm(0,"sidebar"),t.j41(1,"main",0),t.nrm(2,"catering-topbar",1),t.DNE(3,H,2,0,"div",2),t.j41(4,"div",3),t.qex(5,4),t.DNE(6,K,1,0,"catering-order-list",5)(7,q,1,0,"catering-menu",5)(8,tt,15,8,"div",6),t.bVm(),t.k0s()()),2&o&&(t.R7$(3),t.Y8G("ngIf","menu"===i.page),t.R7$(2),t.Y8G("ngSwitch",i.page),t.R7$(),t.Y8G("ngSwitchCase","orders"),t.R7$(),t.Y8G("ngSwitchCase","menu"))},dependencies:[c.bT,c.ux,c.e1,c.fG,w.k,d.r6,v.o,x.r,g.Wk,C],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%}a[_ngcontent-%COMP%]{width:28rem;height:16rem;margin-left:.5rem;text-decoration:none;transition:background .2s}a[_ngcontent-%COMP%]:hover{opacity:.8}a[_ngcontent-%COMP%]:first-child{margin:0}\n\n/*# sourceMappingURL=catering.component.ts-angular-inline--154.css.map*/"]})}return n})();var et=r(45189),nt=r(96843);const it=["app-new-catering",""],ot=()=>["/catering","menu"],rt=()=>["/catering","orders"];function at(n,a){1&n&&(t.j41(0,"div",8),t.EFF(1,' To edit the menu select "All Levels" from the top left '),t.k0s())}function st(n,a){1&n&&t.nrm(0,"catering-order-list",9)}function ct(n,a){1&n&&t.nrm(0,"catering-menu",9)}function lt(n,a){1&n&&(t.j41(0,"div",10)(1,"a",11)(2,"div",12),t.nrm(3,"div",13),t.j41(4,"span",14),t.EFF(5,"Menus and Pricing"),t.k0s()(),t.j41(6,"div",15),t.EFF(7," View and Edit Menus and Pricing "),t.k0s()(),t.j41(8,"a",11)(9,"div",12),t.nrm(10,"div",13),t.j41(11,"span",14),t.EFF(12,"Today's Orders"),t.k0s()(),t.j41(13,"div",15),t.EFF(14," View Catering Orders and their statuses upon arrival "),t.k0s()()()),2&n&&(t.R7$(),t.Y8G("routerLink",t.lJ4(6,ot)),t.R7$(),t.xc7("background-image","url(assets/menus.jpg)"),t.R7$(6),t.Y8G("routerLink",t.lJ4(7,rt)),t.R7$(),t.xc7("background-image","url(assets/orders.jpg)"))}let y=(()=>{class n extends m.Tv{constructor(e){super(),this._route=e}ngOnInit(){this.subscription("route.params",this._route.paramMap.subscribe(e=>this.page=e.has("view")?e.get("view"):""))}static#t=this.\u0275fac=function(o){return new(o||n)(t.rXU(g.nX))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["","app-new-catering",""]],features:[t.Vt3],attrs:it,decls:11,vars:4,consts:[[1,"flex","flex-1","h-px"],[1,"flex","flex-col","flex-1","w-1/2","h-full"],[1,"relative","z-10"],["class","p-2 flex items-center justify-center bg-info text-white text-sm",4,"ngIf"],[1,"flex","flex-1","h-1/2","w-full","overflow-auto"],[3,"ngSwitch"],["class","flex-1",4,"ngSwitchCase"],["class","flex flex-1 flex-wrap items-center justify-center",4,"ngSwitchDefault"],[1,"p-2","flex","items-center","justify-center","bg-info","text-white","text-sm"],[1,"flex-1"],[1,"flex","flex-1","flex-wrap","items-center","justify-center"],["matRipple","",1,"rounded","flex","flex-col","items-center","bg-base-100","shadow","text-black",3,"routerLink"],["name","img",1,"relative","w-full","flex","flex-1","items-center","justify-center","text-2xl","text-white","bg-center","bg-cover"],[1,"absolute","inset-0","bg-neutral","opacity-60","z-0"],[1,"z-10"],[1,"p-2","h-14","w-full","text-sm","text-center","flex","items-center","justify-center"]],template:function(o,i){1&o&&(t.nrm(0,"app-topbar"),t.j41(1,"div",0),t.nrm(2,"app-sidebar"),t.j41(3,"main",1),t.nrm(4,"catering-topbar",2),t.DNE(5,at,2,0,"div",3),t.j41(6,"div",4),t.qex(7,5),t.DNE(8,st,1,0,"catering-order-list",6)(9,ct,1,0,"catering-menu",6)(10,lt,15,8,"div",7),t.bVm(),t.k0s()()()),2&o&&(t.R7$(5),t.Y8G("ngIf","menu"===i.page),t.R7$(2),t.Y8G("ngSwitch",i.page),t.R7$(),t.Y8G("ngSwitchCase","orders"),t.R7$(),t.Y8G("ngSwitchCase","menu"))},dependencies:[c.bT,c.ux,c.e1,c.fG,et.S,nt.c,d.r6,v.o,x.r,g.Wk,C],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--b1)}a[_ngcontent-%COMP%]{width:28rem;height:16rem;margin-left:.5rem;text-decoration:none;transition:background .2s}a[_ngcontent-%COMP%]:hover{opacity:.8}a[_ngcontent-%COMP%]:first-child{margin:0}\n\n/*# sourceMappingURL=new-catering.component.ts-angular-inline--156.css.map*/"]})}return n})();const pt=[{path:"",component:_},{path:"new",component:y},{path:":view",component:_},{path:"new/:view",component:y}];let gt=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.$C({type:n});static#n=this.\u0275inj=t.G2t({imports:[c.MD,f.YN,R.r,T.RI,j.YN,u.bR,g.iI.forChild(pt)]})}return n})()}}]);
//# sourceMappingURL=apps_concierge_src_app_catering_catering_module_ts.js.map