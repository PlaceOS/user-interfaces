"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_points_points_module_ts"],{1881:(Te,y,a)=>{a.r(y),a.d(y,{PointsModule:()=>m});var d=a(4666),l=a(2508),q=a(1169),A=a(5892),v=a(9885),Q=a(3045),O=a(6221),U=a(1670),Z=a(9112),F=a(4505),N=a(5670),e=a(2560),x=a(1484),L=a(2886),Y=a(8325),R=a(1170);function J(o){(0,R.Z)(1,arguments);var n=(0,Y.Z)(o);return n.setMinutes(0,0,0),n}var j=a(2757),D=a(7716),G=a(6942),H=a(8759),$=a(9128),E=a(9519),M=a(5074),K=a(1267),z=a(7371),T=a(207),X=a(4792),B=a(1708),I=a(8550),S=a(2793),W=a(7303),P=a(5306);function V(o,n){1&o&&e._UZ(0,"mat-spinner",29),2&o&&e.Q6J("diameter",32)}function ee(o,n){if(1&o&&(e.TgZ(0,"mat-option",30),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.Q6J("value",(null==t?null:t.display_name)||(null==t?null:t.name)),e.xp6(1),e.hij(" ",(null==t?null:t.display_name)||(null==t?null:t.name)," ")}}function te(o,n){1&o&&(e.TgZ(0,"mat-option",31),e._uU(1," No matching options "),e.qZA()),2&o&&e.Q6J("disabled",!0)}const C=function(){return{standalone:!0}};function ne(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"a-time-field",43),e.NdJ("ngModelChange",function(i){e.CHM(t);const r=e.oxw().$implicit;return e.KtG(r.second=i)}),e.qZA()}if(2&o){const t=e.oxw().$implicit;e.Q6J("ngModel",t.second)("from",t.first)("ngModelOptions",e.DdM(3,C))}}function oe(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",32)(1,"div",33)(2,"mat-form-field",34)(3,"mat-select",35),e.NdJ("ngModelChange",function(i){const c=e.CHM(t).$implicit;return e.KtG(c.type=i)}),e.TgZ(4,"mat-option",36),e._uU(5," Before "),e.qZA(),e.TgZ(6,"mat-option",37),e._uU(7," Between "),e.qZA(),e.TgZ(8,"mat-option",38),e._uU(9," After "),e.qZA()()(),e.TgZ(10,"a-time-field",39),e.NdJ("ngModelChange",function(i){const c=e.CHM(t).$implicit;return e.KtG(c.first=i)}),e.qZA(),e.YNc(11,ne,1,4,"a-time-field",40),e.qZA(),e.TgZ(12,"span",41),e._uU(13,"@"),e.qZA(),e.TgZ(14,"a-counter",42),e.NdJ("ngModelChange",function(i){const c=e.CHM(t).$implicit;return e.KtG(c.rate=i)}),e.qZA()()}if(2&o){const t=n.$implicit,s=e.oxw(2);e.xp6(3),e.Q6J("ngModel",t.type)("ngModelOptions",e.DdM(11,C)),e.xp6(7),e.Q6J("ngModel",t.first)("ngModelOptions",e.DdM(12,C)),e.xp6(1),e.Q6J("ngIf","between"===t.type),e.xp6(3),e.Q6J("ngModel",t.rate)("ngModelOptions",e.DdM(13,C))("min",0)("max",300)("step",5)("render_fn",s.renderPercent)}}const se=function(){return[]};function ie(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"main",5)(1,"section",6)(2,"div",7)(3,"label",8),e._uU(4,"Asset Type"),e.qZA(),e.TgZ(5,"mat-form-field",9)(6,"mat-select",10)(7,"mat-option",11),e._uU(8,"Space"),e.qZA(),e.TgZ(9,"mat-option",12),e._uU(10,"Desk"),e.qZA()()()(),e.TgZ(11,"div",7)(12,"label",8),e._uU(13,"Asset"),e.qZA(),e.TgZ(14,"mat-form-field",9)(15,"app-icon",13),e._uU(16,"search"),e.qZA(),e._UZ(17,"input",14),e.YNc(18,V,1,1,"mat-spinner",15),e.qZA(),e.TgZ(19,"mat-autocomplete",null,16),e.YNc(21,ee,2,2,"mat-option",17),e.ALo(22,"async"),e.YNc(23,te,2,1,"mat-option",18),e.ALo(24,"async"),e.qZA()()(),e.TgZ(25,"section",19)(26,"div",7)(27,"label",20),e._uU(28,"Standard hourly rate"),e.qZA(),e._UZ(29,"a-counter",21),e.qZA(),e.TgZ(30,"div",22)(31,"h2"),e._uU(32,"Rate Rules"),e.qZA(),e.TgZ(33,"div"),e.YNc(34,oe,15,14,"div",23),e.qZA(),e.TgZ(35,"button",24),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.newRule())}),e.TgZ(36,"div",25)(37,"app-icon",0),e._uU(38,"add"),e.qZA(),e.TgZ(39,"span",26),e._uU(40,"Add new rule"),e.qZA()()()()(),e.TgZ(41,"section",19)(42,"div",7)(43,"label"),e._uU(44,"Accept Points?"),e.qZA(),e._UZ(45,"mat-checkbox",27),e.qZA(),e.TgZ(46,"div",7)(47,"label",20),e._uU(48,"Discount Cap"),e.qZA(),e._UZ(49,"a-counter",28),e.qZA()()()}if(2&o){const t=e.MAs(20),s=e.oxw();let i,r;e.Q6J("formGroup",s.form),e.xp6(15),e.ekj("opacity-30",!s.form.get("type").value),e.xp6(2),e.Q6J("matAutocomplete",t),e.xp6(1),e.Q6J("ngIf",s.loading),e.xp6(3),e.Q6J("ngForOf",e.lcZ(22,16,s.asset_options)),e.xp6(2),e.Q6J("ngIf",!(null!=(i=e.lcZ(24,18,s.asset_options))&&i.length)),e.xp6(6),e.Q6J("min",500)("max",8e4)("step",500)("render_fn",s.renderPrice),e.xp6(5),e.Q6J("ngForOf",(null==(r=s.form.get("custom_rates"))?null:r.value)||e.DdM(20,se)),e.xp6(15),e.Q6J("min",0)("max",100)("step",5)("render_fn",s.renderPercent)}}class u extends Z.cx{constructor(n,t,s){super(),this._spaces=n,this._desks=t,this._data=s,this.event=new e.vpe,this.form=new l.cw({id:new l.NI(this._data.asset?.id||""),asset_id:new l.NI(this._data.asset?.asset_id||""),name:new l.NI(this._data.asset?.name||""),type:new l.NI(this._data.asset?.type||""),accept_points:new l.NI(this._data.asset?.accept_points??!1),discount_cap:new l.NI(this._data.asset?.discount_cap||50),unit_price:new l.NI(this._data.asset?.unit_price||1e3),custom_rates:new l.NI(this._data.asset?.custom_rates||[])}),this.asset_options=(0,D.aj)([this.form.valueChanges,this._spaces.list,this._desks.desks]).pipe((0,G.U)(([{type:i,name:r},c,w])=>{this.loading=!0;const k=(r||"").toLowerCase();return i?"space"===i?c.filter(b=>b.name.toLowerCase().includes(k)):w.filter(b=>b.name.toLowerCase().includes(k)):[]}),(0,H.b)(()=>this.loading=!1),(0,$.d)(1)),this._desks.setFilters({zones:["All"]}),this.subscription("type_change",this.form.get("type").valueChanges.subscribe(i=>{const r=this.form.get("name");i?r.enable():r.disable()}))}renderPrice(n=0){return`$${(n/100).toFixed(2)}`}renderPercent(n=0){return`${n}%`}newRule(){this.form.get("custom_rates").setValue([...this.form.get("custom_rates").value,{type:"before",first:J(new Date),second:(0,j.Z)(J(new Date),1),rate:100}])}save(){this.event.emit({reason:"done",metadata:{...this.form.value}})}}u.\u0275fac=function(n){return new(n||u)(e.Y36(L.sK),e.Y36(E.H),e.Y36(x.WI))},u.\u0275cmp=e.Xpm({type:u,selectors:[["points-asset-modal"]],outputs:{event:"event"},features:[e.qOj],decls:9,vars:3,consts:[[1,"text-lg"],["class","min-w-[24rem] overflow-hidden",3,"formGroup",4,"ngIf"],[1,"flex","items-center","justify-center","p-2","space-x-2","border-t","border-gray-200"],["btn","","matRipple","","mat-dialog-close","",1,"inverse","flex-1"],["matRipple","",1,"flex-1",3,"disabled","click"],[1,"min-w-[24rem]","overflow-hidden",3,"formGroup"],[1,"p-2"],[1,"flex","items-center"],[1,"w-24"],["appearance","outline",1,"flex-1","h-[3.25rem]"],["formControlName","type","placeholder","Select asset type"],["value","space"],["value","desk"],["matPrefix","",1,"text-2xl"],["matInput","","formControlName","name","placeholder","Search for asset...",3,"matAutocomplete"],["matSuffix","",3,"diameter",4,"ngIf"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"disabled",4,"ngIf"],[1,"border-t","border-gray-200","p-2"],[1,"flex-1"],["formControlName","unit_price",1,"border","border-gray-200","rounded",3,"min","max","step","render_fn"],[1,""],["rule","","class","flex items-center",4,"ngFor","ngForOf"],["btn","","matRipple","",1,"clear","w-full",3,"click"],[1,"flex","items-center","justify-center","w-full"],[1,"underline"],["formControlName","accept_points"],["formControlName","discount_cap",1,"border","border-gray-200","rounded",3,"min","max","step","render_fn"],["matSuffix","",3,"diameter"],[3,"value"],[3,"disabled"],["rule","",1,"flex","items-center"],[1,"flex","items-center","flex-1","w-1/2","space-x-2"],["appearance","outline",1,"flex-2","h-[3.25rem]","w-32"],[3,"ngModel","ngModelOptions","ngModelChange"],["value","before"],["value","between"],["value","after"],[1,"flex-1","mt-2","w-40",3,"ngModel","ngModelOptions","ngModelChange"],["class","flex-1 mt-2 w-40",3,"ngModel","from","ngModelOptions","ngModelChange",4,"ngIf"],[1,"mx-2"],[1,"border","border-gray-200","rounded",3,"ngModel","ngModelOptions","min","max","step","render_fn","ngModelChange"],[1,"flex-1","mt-2","w-40",3,"ngModel","from","ngModelOptions","ngModelChange"]],template:function(n,t){1&n&&(e.TgZ(0,"header")(1,"h2",0),e._uU(2),e.qZA()(),e.YNc(3,ie,50,21,"main",1),e.TgZ(4,"footer",2)(5,"button",3),e._uU(6," Cancel "),e.qZA(),e.TgZ(7,"button",4),e.NdJ("click",function(){return t.save()}),e._uU(8," Save "),e.qZA()()),2&n&&(e.xp6(2),e.hij(" ",null!=t.form&&null!=t.form.value&&t.form.value.id?"Edit":"New"," Points Asset "),e.xp6(1),e.Q6J("ngIf",t.form),e.xp6(4),e.Q6J("disabled",!t.form.value.name))},dependencies:[d.sg,d.O5,l.Fj,l.JJ,l.JL,l.On,l.sg,l.u,M.KE,M.qo,M.R9,K.Nt,z.gD,T.ey,X.oG,B.Ou,x.ZT,I.XC,I.ZL,T.wG,S.R,W.N,P.o,d.Ov],styles:["label[_ngcontent-%COMP%]{width:auto;min-width:0;margin:0 1rem 0 0}\n/*# sourceMappingURL=asset-modal.component.ts-angular-inline--129.css.map*/"]});class p{constructor(n){this._dialog=n,this._assets=new F.X([]),this.assets=this._assets.asObservable(),this._assets.next(JSON.parse(localStorage.getItem("PLACEOS.point_assets")||"[]")),this.assets.subscribe(t=>{localStorage.setItem("PLACEOS.point_assets",JSON.stringify(t))})}newAsset(n){var t=this;return(0,U.Z)(function*(){const s=t._dialog.open(u,{data:{asset:n}}),i=yield Promise.race([s.componentInstance.event.pipe((0,N.P)(r=>"done"===r.reason)).toPromise(),s.afterClosed().toPromise()]);if("done"!==i.reason)return s.close();t._assets.next([...t._assets.getValue().filter(r=>r.id!==n?.id),{...i.metadata,id:i.metadata.id||`PA-${(0,Z.Iy)(999999999)}`}]),s.close()})()}removeAsset(n){this._assets.next(this._assets.getValue().filter(t=>t.id!==n))}}p.\u0275fac=function(n){return new(n||p)(e.LFG(x.uw))},p.\u0275prov=e.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"});var ae=a(1110);function re(o,n){if(1&o&&(e.TgZ(0,"span",6),e._uU(1),e.qZA()),2&o){const t=n.data;e.xp6(1),e.Oqu(t)}}function le(o,n){if(1&o&&(e.TgZ(0,"span",7),e._uU(1),e.ALo(2,"currency"),e.qZA()),2&o){const t=n.data,s=e.oxw();e.xp6(1),e.hij(" ",e.xi3(2,1,t/100,s.code)," per hour ")}}function ce(o,n){if(1&o&&(e.TgZ(0,"div",8)(1,"app-icon",9),e._uU(2),e.qZA()()),2&o){const t=n.data;e.xp6(1),e.ekj("text-success",t)("text-error",!t),e.xp6(1),e.hij(" ",t?"check_circle":"cancel"," ")}}function pe(o,n){if(1&o&&(e.TgZ(0,"div",10),e._uU(1),e.qZA()),2&o){const t=n.data;e.xp6(1),e.hij("",t,"%")}}function de(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",11)(1,"button",12),e.NdJ("click",function(){const r=e.CHM(t).row,c=e.oxw();return e.KtG(c.edit(r))}),e.TgZ(2,"app-icon"),e._uU(3,"edit"),e.qZA()(),e.TgZ(4,"button",12),e.NdJ("click",function(){const r=e.CHM(t).row,c=e.oxw();return e.KtG(c.remove(r))}),e.TgZ(5,"app-icon"),e._uU(6,"delete"),e.qZA()()()}}const me=function(){return["name","type","unit_price","accept_points","discount_cap","actions"]},ue=function(){return["Name","Type","Unit Price","Accepts Points","Discount %"," "]},ge=function(){return["flex"]},_e=function(o,n,t,s,i){return{type:o,unit_price:n,accept_points:t,discount_cap:s,actions:i}};class g{get code(){return this._org.currency_code}constructor(n,t){this._state=n,this._org=t,this.asset_list=this._state.assets,this.edit=s=>this._state.newAsset(s),this.remove=s=>this._state.removeAsset(s?.id)}}g.\u0275fac=function(n){return new(n||g)(e.Y36(p),e.Y36(O.w7))},g.\u0275cmp=e.Xpm({type:g,selectors:[["points-assets"]],decls:11,vars:14,consts:[["empty","No priced assets",1,"w-full","h-full",3,"dataSource","columns","display_column","column_size","template"],["type_template",""],["price_template",""],["accept_template",""],["discount_template",""],["action_template",""],[1,"p-2","bg-gray-200","dark:bg-neutral-500","rounded","capitalize"],[1,"text-xs"],[1,"flex","justify-center","h-px"],[1,"text-2xl"],[1,"text-right","px-4"],[1,"h-6","flex","items-center","justify-end"],["icon","",3,"click"]],template:function(n,t){if(1&n&&(e._UZ(0,"custom-table",0),e.YNc(1,re,2,1,"ng-template",null,1,e.W1O),e.YNc(3,le,3,4,"ng-template",null,2,e.W1O),e.YNc(5,ce,3,5,"ng-template",null,3,e.W1O),e.YNc(7,pe,2,1,"ng-template",null,4,e.W1O),e.YNc(9,de,7,0,"ng-template",null,5,e.W1O)),2&n){const s=e.MAs(2),i=e.MAs(4),r=e.MAs(6),c=e.MAs(8),w=e.MAs(10);e.Q6J("dataSource",t.asset_list)("columns",e.DdM(5,me))("display_column",e.DdM(6,ue))("column_size",e.DdM(7,ge))("template",e.qbA(8,_e,s,i,r,c,w))}},dependencies:[P.o,ae.C,d.H9],styles:["[_nghost-%COMP%]{height:100%;width:100%;overflow-x:auto;overflow-y:hidden}\n/*# sourceMappingURL=points-assets.component.ts-angular-inline--130.css.map*/"]});var fe=a(6896);class _{constructor(){this.points={value:.1,desk_checkin:2,room_checkin:2,booking_cancel:3,wellness_card:1}}ngOnInit(){this.loadPoints()}renderPrice(n=0){return`$${n?.toFixed(2)}`}loadPoints(){this.points={...this.points,...JSON.parse(localStorage.getItem("PLACEOS.point_details")||"{}")}}storePoints(){localStorage.setItem("PLACEOS.point_details",JSON.stringify(this.points))}}_.\u0275fac=function(n){return new(n||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["points-overview"]],decls:31,vars:7,consts:[[1,"p-2","bg-secondary","text-white","w-full","font-medium","text-lg"],[1,"bg-white","dark:bg-neutral-700","w-full"],[1,"p-2","underline","font-medium","text-lg"],[1,"flex","items-center","space-x-2","p-2","mb-4"],[1,"bg-white","dark:bg-neutral-700","rounded","border","border-gray-200","dark:border-neutral-500",3,"step","ngModel","render_fn","ngModelChange"],["matTooltip","Set point redemption caps on menu items"],[1,"bg-white","dark:bg-neutral-700","w-full","flex-1"],[1,"p-4"],[1,"flex","items-center","space-x-2","p-2","border-b","border-gray-200","dark:border-neutral-500"],[1,"bg-white","dark:bg-neutral-700","rounded","border","border-gray-200","dark:border-neutral-500",3,"ngModel","ngModelChange"],[1,"flex","items-center","space-x-2","p-2"]],template:function(n,t){1&n&&(e.TgZ(0,"h2",0),e._uU(1," Point Overview "),e.qZA(),e.TgZ(2,"section",1)(3,"h2",2),e._uU(4,"Point Value"),e.qZA(),e.TgZ(5,"div",3)(6,"span"),e._uU(7,"1 point ="),e.qZA(),e.TgZ(8,"a-counter",4),e.NdJ("ngModelChange",function(i){return t.points.value=i})("ngModelChange",function(){return t.storePoints()}),e.qZA(),e.TgZ(9,"app-icon",5),e._uU(10," info "),e.qZA()()(),e.TgZ(11,"section",6)(12,"h2",2),e._uU(13,"Automatic Rewards"),e.qZA(),e.TgZ(14,"div",7)(15,"div",8)(16,"a-counter",9),e.NdJ("ngModelChange",function(i){return t.points.desk_checkin=i})("ngModelChange",function(){return t.storePoints()}),e.qZA(),e.TgZ(17,"span"),e._uU(18,"Points for desk check-in"),e.qZA()(),e.TgZ(19,"div",8)(20,"a-counter",9),e.NdJ("ngModelChange",function(i){return t.points.room_checkin=i})("ngModelChange",function(){return t.storePoints()}),e.qZA(),e.TgZ(21,"span"),e._uU(22,"Points for room check-in"),e.qZA()(),e.TgZ(23,"div",8)(24,"a-counter",9),e.NdJ("ngModelChange",function(i){return t.points.booking_cancel=i})("ngModelChange",function(){return t.storePoints()}),e.qZA(),e.TgZ(25,"span"),e._uU(26,"Points for booking cancellation with 24 hour notice"),e.qZA()(),e.TgZ(27,"div",10)(28,"a-counter",9),e.NdJ("ngModelChange",function(i){return t.points.wellness_card=i})("ngModelChange",function(){return t.storePoints()}),e.qZA(),e.TgZ(29,"span"),e._uU(30,"Points for completing wellness card"),e.qZA()()()()),2&n&&(e.xp6(8),e.Q6J("step",.1)("ngModel",t.points.value)("render_fn",t.renderPrice),e.xp6(8),e.Q6J("ngModel",t.points.desk_checkin),e.xp6(4),e.Q6J("ngModel",t.points.room_checkin),e.xp6(4),e.Q6J("ngModel",t.points.booking_cancel),e.xp6(4),e.Q6J("ngModel",t.points.wellness_card))},dependencies:[l.JJ,l.On,fe.gM,S.R,P.o],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}\n/*# sourceMappingURL=points-overview.component.ts-angular-inline--131.css.map*/"]});var he=a(4945),ve=a(8441);class f extends Z.cx{constructor(n){super(),this._org=n}ngOnInit(){var n=this;return(0,U.Z)(function*(){yield n._org.initialised.pipe((0,N.P)(t=>t)).toPromise()})()}}function Ce(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.newAsset())}),e._uU(1," New Asset "),e.qZA()}}f.\u0275fac=function(n){return new(n||f)(e.Y36(O.w7))},f.\u0275cmp=e.Xpm({type:f,selectors:[["points-topbar"]],features:[e.qOj],ngContentSelectors:["*"],decls:4,vars:0,consts:[[1,"flex","items-center","bg-white","dark:bg-neutral-700","h-20","px-4","border-b","border-gray-300","dark:border-neutral-500","space-x-2"],[1,"flex-1","w-2"]],template:function(n,t){1&n&&(e.F$t(),e.TgZ(0,"div",0)(1,"div",1),e.Hsn(2),e.qZA(),e._UZ(3,"date-options"),e.qZA())},dependencies:[ve.E],styles:["mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n/*# sourceMappingURL=points-topbar.component.ts-angular-inline--132.css.map*/"]});const Ae=function(){return["/points","overview"]},xe=function(){return["/points","assets"]};class h extends Z.cx{constructor(n,t){super(),this._state=n,this._router=t,this.newAsset=()=>this._state.newAsset()}ngOnInit(){this.subscription("route.params",this._router.events.subscribe(()=>{const t=this._router.url?.split("/")||[""];this.page=t[t.length-1]}));const n=this._router.url?.split("/")||[""];this.page=n[n.length-1]}}h.\u0275fac=function(n){return new(n||h)(e.Y36(p),e.Y36(v.F0))},h.\u0275cmp=e.Xpm({type:h,selectors:[["placeos-points"]],features:[e.qOj],decls:11,vars:7,consts:[[1,"relative","w-full","flex","flex-col","bg-gray-200","dark:bg-neutral-600"],[1,"relative","z-10"],["btn","","matRipple","",3,"click",4,"ngIf"],["mat-tab-nav-bar",""],["mat-tab-link","",3,"routerLink","active"],[1,"flex-1","w-full","h-1/2","overflow-auto"],["btn","","matRipple","",3,"click"]],template:function(n,t){1&n&&(e._UZ(0,"sidebar"),e.TgZ(1,"main",0)(2,"points-topbar",1),e.YNc(3,Ce,2,0,"button",2),e.qZA(),e.TgZ(4,"nav",3)(5,"a",4),e._uU(6," Overview "),e.qZA(),e.TgZ(7,"a",4),e._uU(8," Assets "),e.qZA()(),e.TgZ(9,"div",5),e._UZ(10,"router-outlet"),e.qZA()()),2&n&&(e.xp6(3),e.Q6J("ngIf","assets"===t.page),e.xp6(2),e.Q6J("routerLink",e.DdM(5,Ae))("active","overview"===t.page),e.xp6(2),e.Q6J("routerLink",e.DdM(6,xe))("active","assets"===t.page))},dependencies:[d.O5,he.k,T.wG,A.BU,A.Nj,v.lC,v.rH,f],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%}\n/*# sourceMappingURL=points.component.ts-angular-inline--133.css.map*/"]});const Me=[{path:"",component:h,children:[{path:"assets",component:g},{path:"overview",component:_},{path:"**",redirectTo:"overview",pathMatch:"full"}]}];class m{}m.\u0275fac=function(n){return new(n||m)},m.\u0275mod=e.oAB({type:m}),m.\u0275inj=e.cJS({imports:[d.ez,l.u5,l.UX,Q.v,A.Nh,q.Hi,v.Bz.forChild(Me)]})}}]);
//# sourceMappingURL=apps_concierge_src_app_points_points_module_ts.js.map