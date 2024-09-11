"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_points_points_module_ts"],{97687:(Et,w,a)=>{a.r(w),a.d(w,{PointsModule:()=>At});var p=a(60316),c=a(34456),O=a(12772),d=a(38223),m=a(26842),G=a(40363),P=a(12185),j=a(89204),u=a(77375),N=a(90521),x=a(57871),t=a(7404),h=a(12587),S=a(22168),V=a(58700);function y(n){const l=(0,V.a)(n);return l.setMinutes(0,0,0),l}var $=a(29533),Y=a(42175),D=a(35443),J=a(66e3),U=a(7841),B=a(71578),v=a(24950),L=a(87984),X=a(25175),f=a(85060),H=a(97024),z=a(41134),R=a(79771),T=a(55507),Q=a(81413),b=a(69434);const W=()=>[],_=()=>({standalone:!0});function K(n,l){1&n&&t.nrm(0,"mat-spinner",29),2&n&&t.Y8G("diameter",32)}function Z(n,l){if(1&n&&(t.j41(0,"mat-option",30),t.EFF(1),t.k0s()),2&n){const e=l.$implicit;t.Y8G("value",(null==e?null:e.display_name)||(null==e?null:e.name)),t.R7$(),t.SpI(" ",(null==e?null:e.display_name)||(null==e?null:e.name)," ")}}function q(n,l){1&n&&(t.j41(0,"mat-option",31),t.EFF(1," No matching options "),t.k0s()),2&n&&t.Y8G("disabled",!0)}function tt(n,l){if(1&n){const e=t.RV6();t.j41(0,"a-time-field",43),t.mxI("ngModelChange",function(s){t.eBV(e);const i=t.XpG().$implicit;return t.DH7(i.second,s)||(i.second=s),t.Njj(s)}),t.k0s()}if(2&n){const e=t.XpG().$implicit;t.R50("ngModel",e.second),t.Y8G("from",e.first)("ngModelOptions",t.lJ4(3,_))}}function et(n,l){if(1&n){const e=t.RV6();t.j41(0,"div",32)(1,"div",33)(2,"mat-form-field",34)(3,"mat-select",35),t.mxI("ngModelChange",function(s){const i=t.eBV(e).$implicit;return t.DH7(i.type,s)||(i.type=s),t.Njj(s)}),t.j41(4,"mat-option",36),t.EFF(5," Before "),t.k0s(),t.j41(6,"mat-option",37),t.EFF(7," Between "),t.k0s(),t.j41(8,"mat-option",38),t.EFF(9," After "),t.k0s()()(),t.j41(10,"a-time-field",39),t.mxI("ngModelChange",function(s){const i=t.eBV(e).$implicit;return t.DH7(i.first,s)||(i.first=s),t.Njj(s)}),t.k0s(),t.DNE(11,tt,1,4,"a-time-field",40),t.k0s(),t.j41(12,"span",41),t.EFF(13,"@"),t.k0s(),t.j41(14,"a-counter",42),t.mxI("ngModelChange",function(s){const i=t.eBV(e).$implicit;return t.DH7(i.rate,s)||(i.rate=s),t.Njj(s)}),t.k0s()()}if(2&n){const e=l.$implicit,o=t.XpG(2);t.R7$(3),t.R50("ngModel",e.type),t.Y8G("ngModelOptions",t.lJ4(11,_)),t.R7$(7),t.R50("ngModel",e.first),t.Y8G("ngModelOptions",t.lJ4(12,_)),t.R7$(),t.Y8G("ngIf","between"===e.type),t.R7$(3),t.R50("ngModel",e.rate),t.Y8G("ngModelOptions",t.lJ4(13,_))("min",0)("max",300)("step",5)("render_fn",o.renderPercent)}}function nt(n,l){if(1&n){const e=t.RV6();t.j41(0,"main",6)(1,"section",7)(2,"div",8)(3,"label",9),t.EFF(4,"Asset Type"),t.k0s(),t.j41(5,"mat-form-field",10)(6,"mat-select",11)(7,"mat-option",12),t.EFF(8,"Space"),t.k0s(),t.j41(9,"mat-option",13),t.EFF(10,"Desk"),t.k0s()()()(),t.j41(11,"div",8)(12,"label",9),t.EFF(13,"Asset"),t.k0s(),t.j41(14,"mat-form-field",10)(15,"app-icon",14),t.EFF(16,"search"),t.k0s(),t.nrm(17,"input",15),t.DNE(18,K,1,1,"mat-spinner",16),t.k0s(),t.j41(19,"mat-autocomplete",null,0),t.DNE(21,Z,2,2,"mat-option",17),t.nI1(22,"async"),t.DNE(23,q,2,1,"mat-option",18),t.nI1(24,"async"),t.k0s()()(),t.j41(25,"section",19)(26,"div",8)(27,"label",20),t.EFF(28,"Standard hourly rate"),t.k0s(),t.nrm(29,"a-counter",21),t.k0s(),t.j41(30,"div",22)(31,"h2"),t.EFF(32,"Rate Rules"),t.k0s(),t.j41(33,"div"),t.DNE(34,et,15,14,"div",23),t.k0s(),t.j41(35,"button",24),t.bIt("click",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.newRule())}),t.j41(36,"div",25)(37,"app-icon",1),t.EFF(38,"add"),t.k0s(),t.j41(39,"span",26),t.EFF(40,"Add new rule"),t.k0s()()()()(),t.j41(41,"section",19)(42,"div",8)(43,"label"),t.EFF(44,"Accept Points?"),t.k0s(),t.nrm(45,"mat-checkbox",27),t.k0s(),t.j41(46,"div",8)(47,"label",20),t.EFF(48,"Discount Cap"),t.k0s(),t.nrm(49,"a-counter",28),t.k0s()()()}if(2&n){let e,o;const s=t.sdS(20),i=t.XpG();t.Y8G("formGroup",i.form),t.R7$(15),t.AVh("opacity-30",!i.form.get("type").value),t.R7$(2),t.Y8G("matAutocomplete",s),t.R7$(),t.Y8G("ngIf",i.loading),t.R7$(3),t.Y8G("ngForOf",t.bMT(22,16,i.asset_options)),t.R7$(2),t.Y8G("ngIf",!(null!=(e=t.bMT(24,18,i.asset_options))&&e.length)),t.R7$(6),t.Y8G("min",500)("max",8e4)("step",500)("render_fn",i.renderPrice),t.R7$(5),t.Y8G("ngForOf",(null==(o=i.form.get("custom_rates"))?null:o.value)||t.lJ4(20,W)),t.R7$(15),t.Y8G("min",0)("max",100)("step",5)("render_fn",i.renderPercent)}}let st=(()=>{class n extends u.Tv{constructor(e,o,s){super(),this._spaces=e,this._desks=o,this._data=s,this.event=new t.bkB,this.form=new c.gE({id:new c.MJ(this._data.asset?.id||""),asset_id:new c.MJ(this._data.asset?.asset_id||""),name:new c.MJ(this._data.asset?.name||""),type:new c.MJ(this._data.asset?.type||""),accept_points:new c.MJ(this._data.asset?.accept_points??!1),discount_cap:new c.MJ(this._data.asset?.discount_cap||50),unit_price:new c.MJ(this._data.asset?.unit_price||1e3),custom_rates:new c.MJ(this._data.asset?.custom_rates||[])}),this.asset_options=(0,Y.zV)([this.form.valueChanges,this._spaces.list,this._desks.desks]).pipe((0,D.T)(([{type:i,name:r},M,F])=>{this.loading=!0;const g=(r||"").toLowerCase();return i?"space"===i?M.filter(k=>k.name.toLowerCase().includes(g)):F.filter(k=>k.name.toLowerCase().includes(g)):[]}),(0,J.M)(()=>this.loading=!1),(0,U.t)(1)),this._desks.setFilters({zones:["All"]}),this.subscription("type_change",this.form.get("type").valueChanges.subscribe(i=>{const r=this.form.get("name");i?r.enable():r.disable()}))}renderPrice(e=0){return`$${(e/100).toFixed(2)}`}renderPercent(e=0){return`${e}%`}newRule(){this.form.get("custom_rates").setValue([...this.form.get("custom_rates").value,{type:"before",first:y(new Date),second:(0,$.L)(y(new Date),1),rate:100}])}save(){this.event.emit({reason:"done",metadata:{...this.form.value}})}static#t=this.\u0275fac=function(o){return new(o||n)(t.rXU(S.bh),t.rXU(B.v),t.rXU(h.Vh))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["points-asset-modal"]],outputs:{event:"event"},features:[t.Vt3],decls:9,vars:3,consts:[["auto","matAutocomplete"],[1,"text-lg"],["class","min-w-[24rem] overflow-hidden",3,"formGroup",4,"ngIf"],[1,"flex","items-center","justify-end","p-2","space-x-2","border-t","border-base-200"],["btn","","matRipple","","mat-dialog-close","",1,"inverse","w-32"],["btn","","matRipple","",1,"w-32",3,"click","disabled"],[1,"min-w-[24rem]","overflow-hidden",3,"formGroup"],[1,"p-2"],[1,"flex","items-center"],[1,"w-24"],["appearance","outline",1,"flex-1","h-[3.25rem]"],["formControlName","type","placeholder","Select asset type"],["value","space"],["value","desk"],["matPrefix","",1,"text-2xl"],["matInput","","formControlName","name","placeholder","Search for asset...",3,"matAutocomplete"],["matSuffix","",3,"diameter",4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],[3,"disabled",4,"ngIf"],[1,"border-t","border-base-200","p-2"],[1,"flex-1"],["formControlName","unit_price",1,"border","border-base-200","rounded",3,"min","max","step","render_fn"],[1,""],["rule","","class","flex items-center",4,"ngFor","ngForOf"],["btn","","matRipple","",1,"clear","w-full",3,"click"],[1,"flex","items-center","justify-center","w-full"],[1,"underline"],["formControlName","accept_points"],["formControlName","discount_cap",1,"border","border-base-200","rounded",3,"min","max","step","render_fn"],["matSuffix","",3,"diameter"],[3,"value"],[3,"disabled"],["rule","",1,"flex","items-center"],[1,"flex","items-center","flex-1","w-1/2","space-x-2"],["appearance","outline",1,"flex-2","h-[3.25rem]","w-32"],[3,"ngModelChange","ngModel","ngModelOptions"],["value","before"],["value","between"],["value","after"],[1,"flex-1","mt-2","w-40",3,"ngModelChange","ngModel","ngModelOptions"],["class","flex-1 mt-2 w-40",3,"ngModel","from","ngModelOptions","ngModelChange",4,"ngIf"],[1,"mx-2"],[1,"border","border-base-200","rounded",3,"ngModelChange","ngModel","ngModelOptions","min","max","step","render_fn"],[1,"flex-1","mt-2","w-40",3,"ngModelChange","ngModel","from","ngModelOptions"]],template:function(o,s){1&o&&(t.j41(0,"header")(1,"h2",1),t.EFF(2),t.k0s()(),t.DNE(3,nt,50,21,"main",2),t.j41(4,"footer",3)(5,"button",4),t.EFF(6," Cancel "),t.k0s(),t.j41(7,"button",5),t.bIt("click",function(){return s.save()}),t.EFF(8," Save "),t.k0s()()),2&o&&(t.R7$(2),t.SpI(" ",null!=s.form&&null!=s.form.value&&s.form.value.id?"Edit":"New"," Points Asset "),t.R7$(),t.Y8G("ngIf",s.form),t.R7$(4),t.Y8G("disabled",!s.form.value.name))},dependencies:[p.Sq,p.bT,c.me,c.BC,c.cb,c.vS,c.j4,c.JD,v.rl,v.JW,v.yw,L.fg,X.VO,f.wT,H.So,z.LG,h.tx,R.$3,R.pN,f.r6,T.s,Q.t,b.R,p.Jj],styles:["label[_ngcontent-%COMP%]{width:auto;min-width:0;margin:0 1rem 0 0}\n\n/*# sourceMappingURL=asset-modal.component.ts-angular-inline--159.css.map*/"]})}return n})(),C=(()=>{class n{constructor(e){this._dialog=e,this._assets=new N.t([]),this.assets=this._assets.asObservable(),this._assets.next(JSON.parse(localStorage.getItem("PLACEOS.point_assets")||"[]")),this.assets.subscribe(o=>{localStorage.setItem("PLACEOS.point_assets",JSON.stringify(o))})}newAsset(e){var o=this;return(0,j.A)(function*(){const s=o._dialog.open(st,{data:{asset:e}}),i=yield Promise.race([s.componentInstance.event.pipe((0,x.$)(r=>"done"===r.reason)).toPromise(),s.afterClosed().toPromise()]);if("done"!==i.reason)return s.close();o._assets.next([...o._assets.getValue().filter(r=>r.id!==e?.id),{...i.metadata,id:i.metadata.id||`PA-${(0,u.HO)(999999999)}`}]),s.close()})()}removeAsset(e){this._assets.next(this._assets.getValue().filter(o=>o.id!==e))}static#t=this.\u0275fac=function(o){return new(o||n)(t.KVO(h.bZ))};static#e=this.\u0275prov=t.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ot=a(88328);const it=()=>({key:"name",name:"Name"}),at=n=>({key:"type",name:"Type",content:n}),rt=n=>({key:"unit_price",name:"Unit Price",content:n}),lt=n=>({key:"accept_points",name:"Points",content:n,size:"5.5rem"}),ct=n=>({key:"discount_cap",name:"Discount %",content:n,size:"9rem"}),pt=n=>({key:"actions",name:" ",content:n,size:"6.5rem"}),mt=(n,l,e,o,s,i)=>[n,l,e,o,s,i];function dt(n,l){if(1&n&&(t.j41(0,"div",6)(1,"span",7),t.EFF(2),t.k0s()()),2&n){const e=l.data;t.R7$(2),t.SpI(" ",e," ")}}function ut(n,l){if(1&n&&(t.j41(0,"span",8),t.EFF(1),t.nI1(2,"currency"),t.k0s()),2&n){const e=l.data,o=t.XpG();t.R7$(),t.SpI(" ",t.i5U(2,1,e/100,o.code)," p/h ")}}function ft(n,l){if(1&n&&(t.j41(0,"div",9)(1,"app-icon"),t.EFF(2),t.k0s()()),2&n){const e=l.data;t.AVh("bg-error",!e)("bg-success",e),t.R7$(2),t.JRh(e?"done":"close")}}function _t(n,l){if(1&n&&(t.j41(0,"div",10),t.EFF(1),t.k0s()),2&n){const e=l.data;t.R7$(),t.SpI("",e,"%")}}function gt(n,l){if(1&n){const e=t.RV6();t.j41(0,"div",11)(1,"button",12),t.bIt("click",function(){const s=t.eBV(e).row,i=t.XpG();return t.Njj(i.edit(s))}),t.j41(2,"app-icon"),t.EFF(3,"edit"),t.k0s()(),t.j41(4,"button",12),t.bIt("click",function(){const s=t.eBV(e).row,i=t.XpG();return t.Njj(i.remove(s))}),t.j41(5,"app-icon",13),t.EFF(6,"delete"),t.k0s()()()}}let A=(()=>{class n{get code(){return this._org.currency_code}constructor(e,o){this._state=e,this._org=o,this.asset_list=this._state.assets,this.edit=s=>this._state.newAsset(s),this.remove=s=>this._state.removeAsset(s?.id)}static#t=this.\u0275fac=function(o){return new(o||n)(t.rXU(C),t.rXU(P.yb))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["points-assets"]],decls:11,vars:21,consts:[["type_template",""],["price_template",""],["bool_template",""],["discount_template",""],["action_template",""],["empty_message","No priced assets",1,"block","min-w-[32rem]","w-full",3,"data","columns","sortable"],[1,"p-2"],[1,"bg-base-200","rounded","capitalize","px-2","py-1","text-sm"],[1,"text-xs","p-4","font-mono"],[1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","text-white","mx-auto"],[1,"text-right","p-4"],[1,"flex","items-center","justify-end","p-2","mx-auto"],["icon","","matRipple","",3,"click"],[1,"text-error"]],template:function(o,s){if(1&o&&(t.nrm(0,"simple-table",5),t.DNE(1,dt,3,1,"ng-template",null,0,t.C5r)(3,ut,3,4,"ng-template",null,1,t.C5r)(5,ft,3,5,"ng-template",null,2,t.C5r)(7,_t,2,1,"ng-template",null,3,t.C5r)(9,gt,7,0,"ng-template",null,4,t.C5r)),2&o){const i=t.sdS(2),r=t.sdS(4),M=t.sdS(6),F=t.sdS(8),g=t.sdS(10);t.Y8G("data",s.asset_list)("columns",t.l4e(14,mt,t.lJ4(3,it),t.eq3(4,at,i),t.eq3(6,rt,r),t.eq3(8,lt,M),t.eq3(10,ct,F),t.eq3(12,pt,g)))("sortable",!0)}},dependencies:[f.r6,b.R,ot.O,p.oe],styles:["[_nghost-%COMP%]{height:100%;width:100%;overflow-x:auto;overflow-y:hidden}\n\n/*# sourceMappingURL=points-assets.component.ts-angular-inline--160.css.map*/"]})}return n})();var ht=a(80640);let E=(()=>{class n{constructor(){this.points={value:.1,desk_checkin:2,room_checkin:2,booking_cancel:3,wellness_card:1}}ngOnInit(){this.loadPoints()}renderPrice(e=0){return`$${e?.toFixed(2)}`}loadPoints(){this.points={...this.points,...JSON.parse(localStorage.getItem("PLACEOS.point_details")||"{}")}}storePoints(){localStorage.setItem("PLACEOS.point_details",JSON.stringify(this.points))}static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["points-overview"]],decls:31,vars:7,consts:[[1,"px-4","py-3","bg-secondary","text-white","w-full","rounded","font-medium","text-lg","shadow"],[1,"bg-base-100","w-full"],[1,"p-2","underline","font-medium","text-lg"],[1,"flex","items-center","space-x-2","p-4","mb-4"],[3,"ngModelChange","step","ngModel","render_fn"],["matTooltip","Set point redemption caps on menu items"],[1,"bg-base-100","w-full","flex-1"],[1,"p-4"],[1,"flex","items-center","space-x-2","p-2","border-b","border-base-200"],[3,"ngModelChange","ngModel"],[1,"flex","items-center","space-x-2","p-2"]],template:function(o,s){1&o&&(t.j41(0,"h2",0),t.EFF(1," Point Overview "),t.k0s(),t.j41(2,"section",1)(3,"h2",2),t.EFF(4,"Point Value"),t.k0s(),t.j41(5,"div",3)(6,"span"),t.EFF(7,"1 point ="),t.k0s(),t.j41(8,"a-counter",4),t.mxI("ngModelChange",function(r){return t.DH7(s.points.value,r)||(s.points.value=r),r}),t.bIt("ngModelChange",function(){return s.storePoints()}),t.k0s(),t.j41(9,"app-icon",5),t.EFF(10," info "),t.k0s()()(),t.j41(11,"section",6)(12,"h2",2),t.EFF(13,"Automatic Rewards"),t.k0s(),t.j41(14,"div",7)(15,"div",8)(16,"a-counter",9),t.mxI("ngModelChange",function(r){return t.DH7(s.points.desk_checkin,r)||(s.points.desk_checkin=r),r}),t.bIt("ngModelChange",function(){return s.storePoints()}),t.k0s(),t.j41(17,"span"),t.EFF(18,"Points for desk check-in"),t.k0s()(),t.j41(19,"div",8)(20,"a-counter",9),t.mxI("ngModelChange",function(r){return t.DH7(s.points.room_checkin,r)||(s.points.room_checkin=r),r}),t.bIt("ngModelChange",function(){return s.storePoints()}),t.k0s(),t.j41(21,"span"),t.EFF(22,"Points for room check-in"),t.k0s()(),t.j41(23,"div",8)(24,"a-counter",9),t.mxI("ngModelChange",function(r){return t.DH7(s.points.booking_cancel,r)||(s.points.booking_cancel=r),r}),t.bIt("ngModelChange",function(){return s.storePoints()}),t.k0s(),t.j41(25,"span"),t.EFF(26,"Points for booking cancellation with 24 hour notice"),t.k0s()(),t.j41(27,"div",10)(28,"a-counter",9),t.mxI("ngModelChange",function(r){return t.DH7(s.points.wellness_card,r)||(s.points.wellness_card=r),r}),t.bIt("ngModelChange",function(){return s.storePoints()}),t.k0s(),t.j41(29,"span"),t.EFF(30,"Points for completing wellness card"),t.k0s()()()()),2&o&&(t.R7$(8),t.Y8G("step",.1),t.R50("ngModel",s.points.value),t.Y8G("render_fn",s.renderPrice),t.R7$(8),t.R50("ngModel",s.points.desk_checkin),t.R7$(4),t.R50("ngModel",s.points.room_checkin),t.R7$(4),t.R50("ngModel",s.points.booking_cancel),t.R7$(4),t.R50("ngModel",s.points.wellness_card))},dependencies:[c.BC,c.vS,ht.oV,T.s,b.R],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}\n\n/*# sourceMappingURL=points-overview.component.ts-angular-inline--161.css.map*/"]})}return n})();var vt=a(74605),bt=a(94584);const Ct=["*"];let I=(()=>{class n extends u.Tv{constructor(e){super(),this._org=e}ngOnInit(){var e=this;return(0,j.A)(function*(){yield e._org.initialised.pipe((0,x.$)(o=>o)).toPromise()})()}static#t=this.\u0275fac=function(o){return new(o||n)(t.rXU(P.yb))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["points-topbar"]],features:[t.Vt3],ngContentSelectors:Ct,decls:7,vars:0,consts:[[1,"flex","items-center","bg-base-100","h-20","px-8","py-4","space-x-2"],[1,"text-2xl","font-medium"],[1,"flex-1","w-px"],[1,"pl-2"]],template:function(o,s){1&o&&(t.NAR(),t.j41(0,"div",0)(1,"h2",1),t.EFF(2,"Points Management"),t.k0s(),t.nrm(3,"div",2)(4,"date-options"),t.j41(5,"div",3),t.SdG(6),t.k0s()())},dependencies:[bt.o],styles:["mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n\n/*# sourceMappingURL=points-topbar.component.ts-angular-inline--162.css.map*/"]})}return n})();const Mt=()=>["/points","overview"],Ft=()=>["/points","assets"];function kt(n,l){if(1&n){const e=t.RV6();t.j41(0,"button",6),t.bIt("click",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.newAsset())}),t.EFF(1," New Asset "),t.k0s()}}let wt=(()=>{class n extends u.Tv{constructor(e,o){super(),this._state=e,this._router=o,this.newAsset=()=>this._state.newAsset()}ngOnInit(){this.subscription("route.params",this._router.events.subscribe(()=>{const o=this._router.url?.split("/")||[""];this.page=o[o.length-1]}));const e=this._router.url?.split("/")||[""];this.page=e[e.length-1]}static#t=this.\u0275fac=function(o){return new(o||n)(t.rXU(C),t.rXU(m.Ix))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["placeos-points"]],features:[t.Vt3],decls:11,vars:7,consts:[[1,"relative","w-full","flex","flex-col","bg-base-200"],[1,"relative","z-10"],["btn","","matRipple","",3,"click",4,"ngIf"],["mat-tab-nav-bar",""],["mat-tab-link","",3,"routerLink","active"],[1,"flex-1","w-full","h-1/2","overflow-auto"],["btn","","matRipple","",3,"click"]],template:function(o,s){1&o&&(t.nrm(0,"sidebar"),t.j41(1,"main",0)(2,"points-topbar",1),t.DNE(3,kt,2,0,"button",2),t.k0s(),t.j41(4,"nav",3)(5,"a",4),t.EFF(6," Overview "),t.k0s(),t.j41(7,"a",4),t.EFF(8," Assets "),t.k0s()(),t.j41(9,"div",5),t.nrm(10,"router-outlet"),t.k0s()()),2&o&&(t.R7$(3),t.Y8G("ngIf","assets"===s.page),t.R7$(2),t.Y8G("routerLink",t.lJ4(5,Mt))("active","overview"===s.page),t.R7$(2),t.Y8G("routerLink",t.lJ4(6,Ft))("active","assets"===s.page))},dependencies:[p.bT,vt.k,f.r6,d.Bu,d.Ql,m.n3,m.Wk,I],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%}\n\n/*# sourceMappingURL=points.component.ts-angular-inline--163.css.map*/"]})}return n})();var Pt=a(45189),jt=a(96843);const xt=()=>["/points-management","new","overview"],yt=()=>["/points-management","new","assets"];function Rt(n,l){if(1&n){const e=t.RV6();t.j41(0,"button",9),t.bIt("click",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.newAsset())}),t.EFF(1," New Asset "),t.k0s()}}const Tt=[{path:"new",component:(()=>{class n extends u.Tv{constructor(e,o){super(),this._state=e,this._router=o,this.newAsset=()=>this._state.newAsset()}ngOnInit(){this.subscription("route.params",this._router.events.subscribe(()=>{const o=this._router.url?.split("/")||[""];this.page=o[o.length-1]}));const e=this._router.url?.split("/")||[""];this.page=e[e.length-1]}static#t=this.\u0275fac=function(o){return new(o||n)(t.rXU(C),t.rXU(m.Ix))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["placeos-new-points"]],features:[t.Vt3],decls:15,vars:8,consts:[["tabPanel",""],[1,"flex","flex-1","h-px"],[1,"flex","flex-col","flex-1","w-1/2","h-full"],[1,"relative","z-10"],["btn","","matRipple","","class","w-40",3,"click",4,"ngIf"],[1,"px-8","mb-4"],["mat-tab-nav-bar","",3,"tabPanel"],["mat-tab-link","",3,"routerLink","active"],[1,"flex-1","w-full","h-1/2","overflow-auto","px-8"],["btn","","matRipple","",1,"w-40",3,"click"]],template:function(o,s){if(1&o&&(t.nrm(0,"app-topbar"),t.j41(1,"div",1),t.nrm(2,"app-sidebar"),t.j41(3,"main",2)(4,"points-topbar",3),t.DNE(5,Rt,2,0,"button",4),t.k0s(),t.j41(6,"div",5)(7,"nav",6)(8,"a",7),t.EFF(9," Overview "),t.k0s(),t.j41(10,"a",7),t.EFF(11," Assets "),t.k0s()()(),t.j41(12,"mat-tab-nav-panel",8,0),t.nrm(14,"router-outlet"),t.k0s()()()),2&o){const i=t.sdS(13);t.R7$(5),t.Y8G("ngIf","assets"===s.page),t.R7$(2),t.Y8G("tabPanel",i),t.R7$(),t.Y8G("routerLink",t.lJ4(6,xt))("active","overview"===s.page),t.R7$(2),t.Y8G("routerLink",t.lJ4(7,yt))("active","assets"===s.page)}},dependencies:[p.bT,Pt.S,jt.c,f.r6,d.Bu,d.hQ,d.Ql,m.n3,m.Wk,I],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--b1)}\n\n/*# sourceMappingURL=new-points.component.ts-angular-inline--164.css.map*/"]})}return n})(),children:[{path:"assets",component:A},{path:"overview",component:E},{path:"**",redirectTo:"overview",pathMatch:"full"}]},{path:"",component:wt,children:[{path:"assets",component:A},{path:"overview",component:E},{path:"**",redirectTo:"overview",pathMatch:"full"}]}];let At=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.$C({type:n});static#n=this.\u0275inj=t.G2t({imports:[p.MD,c.YN,c.X1,G.r,d.RI,O.YN,m.iI.forChild(Tt)]})}return n})()}}]);
//# sourceMappingURL=apps_concierge_src_app_points_points_module_ts.js.map