"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_catering_catering_module_ts"],{419:(K,d,i)=>{i.r(d),i.d(d,{CateringModule:()=>L});var c=i(4666),p=i(2508),g=i(9885),v=i(5892),_=i(1169),b=i(3045),f=i(9112),t=i(2560),x=i(4945),h=i(207),T=i(8501),M=i(2189),Z=i(1670),y=i(5670),O=i(6221),u=i(9364),z=i(8441),U=i(4522),J=i(5074),A=i(7371);function P(n,a){if(1&n&&(t.TgZ(0,"mat-option",6),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.display_name||e.name," ")}}function w(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.addItem())}),t._uU(1," Add Item "),t.qZA()}}function I(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.editConfig())}),t._uU(1," Edit Config "),t.qZA()}}function N(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.importMenu())}),t._uU(1," Import Menu "),t.qZA()}}let Y=(()=>{class n extends f.KG{constructor(e,o,r,s,m){super(),this._orders=e,this._catering=o,this._org=r,this._route=s,this._router=m,this.zones=[],this.levels=this._org.active_levels,this.setDate=l=>this._orders.filters={...this._orders.filters,date:l},this.updateZones=l=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:l.join(",")}}),this._orders.filters={...this._orders.filters,zones:[l]}},this.addItem=()=>this._catering.addItem(),this.editConfig=()=>this._catering.editConfig(),this.importMenu=()=>this._catering.importMenu()}ngOnInit(){var e=this;return(0,Z.Z)(function*(){yield e._org.initialised.pipe((0,y.P)(o=>o)).toPromise(),e.subscription("route.query",e._route.queryParamMap.subscribe(o=>{if(o.has("zone_ids")){const r=o.get("zone_ids").split(",");if(!r.length)return;const s=e._org.levelWithID(r);if(e.zones=r,!s)return;e._org.building=e._org.buildings.find(m=>m.id===s.parent_id)}})),e.subscription("route.params",e._route.paramMap.subscribe(o=>e.page=o.has("view")?o.get("view"):"")),e.subscription("levels",e._org.active_levels.subscribe(o=>{e.zones=e.zones.filter(r=>o.find(s=>s.id===r)),!e.zones.length&&o.length&&e.zones.push(o[0].id),e.updateZones(e.zones)}))})()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.Ii),t.Y36(u.jW),t.Y36(O.w7),t.Y36(g.gz),t.Y36(g.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["catering-topbar"]],features:[t.qOj],decls:9,vars:7,consts:[["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["mat-button","",3,"click",4,"ngIf"],[1,"flex-1","w-2"],[3,"dateChange"],[3,"value"],["mat-button","",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"mat-form-field",0)(1,"mat-select",1),t.NdJ("ngModelChange",function(s){return o.zones=s})("ngModelChange",function(s){return o.updateZones(s)}),t.YNc(2,P,2,2,"mat-option",2),t.ALo(3,"async"),t.qZA()(),t.YNc(4,w,2,0,"button",3),t.YNc(5,I,2,0,"button",3),t.YNc(6,N,2,0,"button",3),t._UZ(7,"div",4),t.TgZ(8,"date-options",5),t.NdJ("dateChange",function(s){return o.setDate(s)}),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngModel",o.zones),t.xp6(1),t.Q6J("ngForOf",t.lcZ(3,5,o.levels)),t.xp6(2),t.Q6J("ngIf","menu"===o.page),t.xp6(1),t.Q6J("ngIf","menu"===o.page),t.xp6(1),t.Q6J("ngIf","menu"===o.page))},dependencies:[c.sg,c.O5,p.JJ,p.On,z.E,U.lW,J.KE,A.gD,h.ey,c.Ov],styles:["[_nghost-%COMP%]{display:flex;align-items:center;background-color:#fff;height:5em;padding:0 1em;border-bottom:1px solid #ccc}[_nghost-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin-left:.5rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n/*# sourceMappingURL=catering-topbar.component.ts-angular-inline--118.css.map*/"]}),n})();const j=["app-catering",""];function Q(n,a){1&n&&t._UZ(0,"catering-order-list",5)}function F(n,a){1&n&&t._UZ(0,"catering-menu",5)}const E=function(){return["/catering","menu"]},S=function(){return["/catering","orders"]};function D(n,a){1&n&&(t.TgZ(0,"div",6)(1,"a",7)(2,"div",8),t._UZ(3,"div",9),t.TgZ(4,"span",10),t._uU(5,"Menus and Pricing"),t.qZA()(),t.TgZ(6,"div",11),t._uU(7," View and Edit Menus and Pricing "),t.qZA()(),t.TgZ(8,"a",7)(9,"div",8),t._UZ(10,"div",9),t.TgZ(11,"span",10),t._uU(12,"Today's Orders"),t.qZA()(),t.TgZ(13,"div",11),t._uU(14," View Catering Orders and their statuses upon arrival "),t.qZA()()()),2&n&&(t.xp6(1),t.Q6J("routerLink",t.DdM(6,E)),t.xp6(1),t.Udp("background-image","url(assets/menus.jpg)"),t.xp6(6),t.Q6J("routerLink",t.DdM(7,S)),t.xp6(1),t.Udp("background-image","url(assets/orders.jpg)"))}let C=(()=>{class n extends f.KG{constructor(e){super(),this._route=e}ngOnInit(){this.subscription("route.params",this._route.paramMap.subscribe(e=>this.page=e.has("view")?e.get("view"):""))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["","app-catering",""]],features:[t.qOj],attrs:j,decls:7,vars:3,consts:[[1,"relative","w-full","flex","flex-col"],[1,"relative","z-10"],[3,"ngSwitch"],["class","flex-1",4,"ngSwitchCase"],["class","flex flex-1 flex-wrap items-center justify-center",4,"ngSwitchDefault"],[1,"flex-1"],[1,"flex","flex-1","flex-wrap","items-center","justify-center"],["matRipple","",1,"rounded","flex","flex-col","items-center","bg-white","shadow","text-black",3,"routerLink"],["name","img",1,"relative","w-full","flex","flex-1","items-center","justify-center","text-2xl","text-white","bg-center","bg-cover"],[1,"absolute","inset-0","bg-black","opacity-60","z-0"],[1,"z-10"],[1,"p-2","h-14","w-full","text-sm","text-center","flex","items-center","justify-center"]],template:function(e,o){1&e&&(t._UZ(0,"sidebar"),t.TgZ(1,"main",0),t._UZ(2,"catering-topbar",1),t.ynx(3,2),t.YNc(4,Q,1,0,"catering-order-list",3),t.YNc(5,F,1,0,"catering-menu",3),t.YNc(6,D,15,8,"div",4),t.BQk(),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngSwitch",o.page),t.xp6(1),t.Q6J("ngSwitchCase","orders"),t.xp6(1),t.Q6J("ngSwitchCase","menu"))},dependencies:[c.RF,c.n9,c.ED,x.k,h.wG,T.B,M.I,g.yS,Y],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;background:var(--bg)}a[_ngcontent-%COMP%]{width:28rem;height:16rem;margin-left:.5rem;text-decoration:none;transition:background .2s}a[_ngcontent-%COMP%]:hover{background-color:#00000001!important}a[_ngcontent-%COMP%]:first-child{margin:0}\n/*# sourceMappingURL=catering.component.ts-angular-inline--117.css.map*/"]}),n})();const G=[{path:"",component:C},{path:":view",component:C}];let L=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,p.u5,b.v,v.Nh,_.Hi,u.uy,g.Bz.forChild(G)]}),n})()}}]);
//# sourceMappingURL=apps_concierge_src_app_catering_catering_module_ts.js.map