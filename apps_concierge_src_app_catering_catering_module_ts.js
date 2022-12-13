"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_catering_catering_module_ts"],{9526:(V,m,i)=>{i.r(m),i.d(m,{CateringModule:()=>B});var l=i(4666),p=i(2508),c=i(9885),_=i(5892),b=i(1169),v=i(3045),f=i(9112),t=i(2560),T=i(4945),h=i(207),x=i(8501),Z=i(2189),y=i(1670),M=i(5670),z=i(6221),u=i(1950),J=i(2481),A=i(1484),U=i(8441),w=i(4522),I=i(5074),N=i(7371);function O(n,a){if(1&n&&(t.TgZ(0,"mat-option",3),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.display_name||e.name," ")}}function Y(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.addItem())}),t._uU(1," Add Item "),t.qZA()}}function Q(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.editConfig())}),t._uU(1," Edit Config "),t.qZA()}}function j(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.importMenu())}),t._uU(1," Import Menu "),t.qZA()}}function F(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.setRoomAvailability())}),t._uU(1," Room Availability "),t.qZA()}}function E(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.setChargeCodes())}),t._uU(1," Charge Codes "),t.qZA()}}let P=(()=>{class n extends f.KG{constructor(e,o,r,s,d,W){super(),this._orders=e,this._catering=o,this._org=r,this._route=s,this._router=d,this._dialog=W,this.zones=[],this.levels=this._org.active_levels,this.setDate=g=>this._orders.filters={...this._orders.filters,date:g},this.updateZones=g=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:g.join(",")}}),this._orders.filters={...this._orders.filters,zones:[g]},this._catering.zone=g[0]||this._catering.zone},this.addItem=()=>this._catering.addItem(),this.editConfig=()=>this._catering.editConfig(),this.importMenu=()=>this._catering.importMenu()}get building(){return this._org.building}ngOnInit(){var e=this;return(0,y.Z)(function*(){yield e._org.initialised.pipe((0,M.P)(o=>o)).toPromise(),e._catering.zone=(e._orders.filters?.zones||[])[0]||e._org.building?.id,e.subscription("route.query",e._route.queryParamMap.subscribe(o=>{if(o.has("zone_ids")){const r=o.get("zone_ids").split(",");if(!r.length)return;const s=e._org.levelWithID(r);if(e.zones=r,!s)return;e._org.building=e._org.buildings.find(d=>d.id===s.parent_id)}})),e.subscription("route.params",e._route.paramMap.subscribe(o=>e.page=o.has("view")?o.get("view"):"")),e.subscription("levels",e._org.active_levels.subscribe(o=>{e.zones=e.zones.filter(r=>o.find(s=>s.id===r)),!e.zones.length&&o.length&&e.zones.push(o[0].id),e.updateZones(e.zones)}))})()}setRoomAvailability(){this._dialog.open(J.C)}setChargeCodes(){this._dialog.open(u.F7)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.Ii),t.Y36(u.jW),t.Y36(z.w7),t.Y36(c.gz),t.Y36(c.F0),t.Y36(A.uw))},n.\u0275cmp=t.Xpm({type:n,selectors:[["catering-topbar"]],features:[t.qOj],decls:14,vars:10,consts:[[1,"flex","items-center","bg-white","dark:bg-neutral-700","h-20","px-4","border-b","border-gray-300","dark:border-neutral-500","space-x-2"],["appearance","outline"],["placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],["mat-button","",3,"click",4,"ngIf"],[1,"flex-1","w-2"],[3,"dateChange"],["mat-button","",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"mat-form-field",1)(2,"mat-select",2),t.NdJ("ngModelChange",function(s){return o.zones[0]=s})("ngModelChange",function(s){return o.updateZones([s])}),t.TgZ(3,"mat-option",3),t._uU(4," All Levels "),t.qZA(),t.YNc(5,O,2,2,"mat-option",4),t.ALo(6,"async"),t.qZA()(),t.YNc(7,Y,2,0,"button",5),t.YNc(8,Q,2,0,"button",5),t.YNc(9,j,2,0,"button",5),t.YNc(10,F,2,0,"button",5),t.YNc(11,E,2,0,"button",5),t._UZ(12,"div",6),t.TgZ(13,"date-options",7),t.NdJ("dateChange",function(s){return o.setDate(s)}),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("ngModel",o.zones[0]),t.xp6(1),t.Q6J("value",null==o.building?null:o.building.id),t.xp6(2),t.Q6J("ngForOf",t.lcZ(6,8,o.levels)),t.xp6(2),t.Q6J("ngIf","menu"===o.page&&(!o.zones[0]||o.zones[0]===(null==o.building?null:o.building.id))),t.xp6(1),t.Q6J("ngIf","menu"===o.page),t.xp6(1),t.Q6J("ngIf","menu"===o.page),t.xp6(1),t.Q6J("ngIf","menu"===o.page),t.xp6(1),t.Q6J("ngIf","menu"===o.page))},dependencies:[l.sg,l.O5,p.JJ,p.On,U.E,w.lW,I.KE,N.gD,h.ey,l.Ov],styles:["mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n/*# sourceMappingURL=catering-topbar.component.ts-angular-inline--123.css.map*/"]}),n})();const G=["app-catering",""];function L(n,a){1&n&&(t.TgZ(0,"div",7),t._uU(1,' To edit the menu select "All Levels" from the top left '),t.qZA())}function S(n,a){1&n&&t._UZ(0,"catering-order-list",8)}function k(n,a){1&n&&t._UZ(0,"catering-menu",8)}const D=function(){return["/catering","menu"]},K=function(){return["/catering","orders"]};function R(n,a){1&n&&(t.TgZ(0,"div",9)(1,"a",10)(2,"div",11),t._UZ(3,"div",12),t.TgZ(4,"span",13),t._uU(5,"Menus and Pricing"),t.qZA()(),t.TgZ(6,"div",14),t._uU(7," View and Edit Menus and Pricing "),t.qZA()(),t.TgZ(8,"a",10)(9,"div",11),t._UZ(10,"div",12),t.TgZ(11,"span",13),t._uU(12,"Today's Orders"),t.qZA()(),t.TgZ(13,"div",14),t._uU(14," View Catering Orders and their statuses upon arrival "),t.qZA()()()),2&n&&(t.xp6(1),t.Q6J("routerLink",t.DdM(6,D)),t.xp6(1),t.Udp("background-image","url(assets/menus.jpg)"),t.xp6(6),t.Q6J("routerLink",t.DdM(7,K)),t.xp6(1),t.Udp("background-image","url(assets/orders.jpg)"))}let C=(()=>{class n extends f.KG{constructor(e){super(),this._route=e}ngOnInit(){this.subscription("route.params",this._route.paramMap.subscribe(e=>this.page=e.has("view")?e.get("view"):""))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["","app-catering",""]],features:[t.qOj],attrs:G,decls:9,vars:4,consts:[[1,"relative","w-full","flex","flex-col","bg-gray-200","dark:bg-neutral-600"],[1,"relative","z-10"],["class","p-2 flex items-center justify-center bg-blue-600 text-white text-sm",4,"ngIf"],[1,"flex","flex-1","h-1/2","w-full","overflow-auto"],[3,"ngSwitch"],["class","flex-1",4,"ngSwitchCase"],["class","flex flex-1 flex-wrap items-center justify-center",4,"ngSwitchDefault"],[1,"p-2","flex","items-center","justify-center","bg-blue-600","text-white","text-sm"],[1,"flex-1"],[1,"flex","flex-1","flex-wrap","items-center","justify-center"],["matRipple","",1,"rounded","flex","flex-col","items-center","bg-white","dark:bg-neutral-700","shadow","text-black","dark:text-white",3,"routerLink"],["name","img",1,"relative","w-full","flex","flex-1","items-center","justify-center","text-2xl","text-white","bg-center","bg-cover"],[1,"absolute","inset-0","bg-black","opacity-60","z-0"],[1,"z-10"],[1,"p-2","h-14","w-full","text-sm","text-center","flex","items-center","justify-center"]],template:function(e,o){1&e&&(t._UZ(0,"sidebar"),t.TgZ(1,"main",0),t._UZ(2,"catering-topbar",1),t.YNc(3,L,2,0,"div",2),t.TgZ(4,"div",3),t.ynx(5,4),t.YNc(6,S,1,0,"catering-order-list",5),t.YNc(7,k,1,0,"catering-menu",5),t.YNc(8,R,15,8,"div",6),t.BQk(),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("ngIf","menu"===o.page),t.xp6(2),t.Q6J("ngSwitch",o.page),t.xp6(1),t.Q6J("ngSwitchCase","orders"),t.xp6(1),t.Q6J("ngSwitchCase","menu"))},dependencies:[l.O5,l.RF,l.n9,l.ED,T.k,h.wG,x.B,Z.I,c.yS,P],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%}a[_ngcontent-%COMP%]{width:28rem;height:16rem;margin-left:.5rem;text-decoration:none;transition:background .2s}a[_ngcontent-%COMP%]:hover{opacity:.8}a[_ngcontent-%COMP%]:first-child{margin:0}\n/*# sourceMappingURL=catering.component.ts-angular-inline--122.css.map*/"]}),n})();const H=[{path:"",component:C},{path:":view",component:C}];let B=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,p.u5,v.v,_.Nh,b.Hi,u.uy,c.Bz.forChild(H)]}),n})()}}]);
//# sourceMappingURL=apps_concierge_src_app_catering_catering_module_ts.js.map