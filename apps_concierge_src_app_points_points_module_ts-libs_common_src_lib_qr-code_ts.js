(self.webpackChunkplaceos=self.webpackChunkplaceos||[]).push([["apps_concierge_src_app_points_points_module_ts-libs_common_src_lib_qr-code_ts"],{1287:(e,t,n)=>{"use strict";n.r(t),n.d(t,{PointsModule:()=>ge});var o=n(1511),r=n(6073),i=n(33),s=n(5109),a=n(7629),l=n(787),c=n(1572),d=n(4762),u=n(6687),f=n(8512),p=n(3530),g=n(4608),m=n(5090),h=n(6280);function v(e){(0,h.Z)(1,arguments);var t=(0,m.Z)(e);return t.setMinutes(0,0,0),t}var Z=n(6547),_=n(3080),b=n(9996),x=n(4019),A=n(8303),w=n(7209),T=n(2693),q=n(5980),M=n(6283),C=n(4786),y=n(1522),k=n(1548),N=n(6756),O=n(84),U=n(5135),J=n(9236),P=n(7806),I=n(5089);function S(e,t){1&e&&c._UZ(0,"mat-spinner",29),2&e&&c.Q6J("diameter",32)}function j(e,t){if(1&e&&(c.TgZ(0,"mat-option",30),c._uU(1),c.qZA()),2&e){const e=t.$implicit;c.Q6J("value",(null==e?null:e.display_name)||(null==e?null:e.name)),c.xp6(1),c.hij(" ",(null==e?null:e.display_name)||(null==e?null:e.name)," ")}}function Q(e,t){1&e&&(c.TgZ(0,"mat-option",31),c._uU(1," No matching options "),c.qZA()),2&e&&c.Q6J("disabled",!0)}const E=function(){return{standalone:!0}};function L(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"a-time-field",43),c.NdJ("ngModelChange",function(t){return c.CHM(e),c.oxw().$implicit.second=t}),c.qZA()}if(2&e){const e=c.oxw().$implicit;c.Q6J("ngModel",e.second)("from",e.first)("ngModelOptions",c.DdM(3,E))}}function D(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"div",32),c.TgZ(1,"div",33),c.TgZ(2,"mat-form-field",34),c.TgZ(3,"mat-select",35),c.NdJ("ngModelChange",function(t){return c.CHM(e).$implicit.type=t}),c.TgZ(4,"mat-option",36),c._uU(5," Before "),c.qZA(),c.TgZ(6,"mat-option",37),c._uU(7," Between "),c.qZA(),c.TgZ(8,"mat-option",38),c._uU(9," After "),c.qZA(),c.qZA(),c.qZA(),c.TgZ(10,"a-time-field",39),c.NdJ("ngModelChange",function(t){return c.CHM(e).$implicit.first=t}),c.qZA(),c.YNc(11,L,1,4,"a-time-field",40),c.qZA(),c.TgZ(12,"span",41),c._uU(13,"@"),c.qZA(),c.TgZ(14,"a-counter",42),c.NdJ("ngModelChange",function(t){return c.CHM(e).$implicit.rate=t}),c.qZA(),c.qZA()}if(2&e){const e=t.$implicit,n=c.oxw(2);c.xp6(3),c.Q6J("ngModel",e.type)("ngModelOptions",c.DdM(11,E)),c.xp6(7),c.Q6J("ngModel",e.first)("ngModelOptions",c.DdM(12,E)),c.xp6(1),c.Q6J("ngIf","between"===e.type),c.xp6(3),c.Q6J("ngModel",e.rate)("ngModelOptions",c.DdM(13,E))("min",0)("max",300)("step",5)("render_fn",n.renderPercent)}}const Y=function(){return[]};function z(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"main",5),c.TgZ(1,"section",6),c.TgZ(2,"div",7),c.TgZ(3,"label",8),c._uU(4,"Asset Type"),c.qZA(),c.TgZ(5,"mat-form-field",9),c.TgZ(6,"mat-select",10),c.TgZ(7,"mat-option",11),c._uU(8,"Space"),c.qZA(),c.TgZ(9,"mat-option",12),c._uU(10,"Desk"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(11,"div",7),c.TgZ(12,"label",8),c._uU(13,"Asset"),c.qZA(),c.TgZ(14,"mat-form-field",9),c.TgZ(15,"app-icon",13),c._uU(16,"search"),c.qZA(),c._UZ(17,"input",14),c.YNc(18,S,1,1,"mat-spinner",15),c.qZA(),c.TgZ(19,"mat-autocomplete",null,16),c.YNc(21,j,2,2,"mat-option",17),c.ALo(22,"async"),c.YNc(23,Q,2,1,"mat-option",18),c.ALo(24,"async"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(25,"section",19),c.TgZ(26,"div",7),c.TgZ(27,"label",20),c._uU(28,"Standard hourly rate"),c.qZA(),c._UZ(29,"a-counter",21),c.qZA(),c.TgZ(30,"div",22),c.TgZ(31,"h2"),c._uU(32,"Rate Rules"),c.qZA(),c.TgZ(33,"div"),c.YNc(34,D,15,14,"div",23),c.qZA(),c.TgZ(35,"button",24),c.NdJ("click",function(){return c.CHM(e),c.oxw().newRule()}),c.TgZ(36,"div",25),c.TgZ(37,"app-icon",0),c._uU(38,"add"),c.qZA(),c.TgZ(39,"span",26),c._uU(40,"Add new rule"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(41,"section",19),c.TgZ(42,"div",7),c.TgZ(43,"label"),c._uU(44,"Accept Points?"),c.qZA(),c._UZ(45,"mat-checkbox",27),c.qZA(),c.TgZ(46,"div",7),c.TgZ(47,"label",20),c._uU(48,"Discount Cap"),c.qZA(),c._UZ(49,"a-counter",28),c.qZA(),c.qZA(),c.qZA()}if(2&e){const e=c.MAs(20),t=c.oxw();let n,o;c.Q6J("formGroup",t.form),c.xp6(15),c.ekj("opacity-30",!t.form.get("type").value),c.xp6(2),c.Q6J("disabled",!t.form.get("type").value)("matAutocomplete",e),c.xp6(1),c.Q6J("ngIf",t.loading),c.xp6(3),c.Q6J("ngForOf",c.lcZ(22,17,t.asset_options)),c.xp6(2),c.Q6J("ngIf",!(null!=(n=c.lcZ(24,19,t.asset_options))&&n.length)),c.xp6(6),c.Q6J("min",500)("max",8e4)("step",500)("render_fn",t.renderPrice),c.xp6(5),c.Q6J("ngForOf",(null==(o=t.form.get("custom_rates"))?null:o.value)||c.DdM(21,Y)),c.xp6(15),c.Q6J("min",0)("max",100)("step",5)("render_fn",t.renderPercent)}}let F=(()=>{class e{constructor(e,t,n){var o,i,s,a,l,d,u,f,p;this._spaces=e,this._desks=t,this._data=n,this.event=new c.vpe,this.form=new r.cw({id:new r.NI((null===(o=this._data.asset)||void 0===o?void 0:o.id)||""),asset_id:new r.NI((null===(i=this._data.asset)||void 0===i?void 0:i.asset_id)||""),name:new r.NI((null===(s=this._data.asset)||void 0===s?void 0:s.name)||""),type:new r.NI((null===(a=this._data.asset)||void 0===a?void 0:a.type)||""),accept_points:new r.NI(null!==(d=null===(l=this._data.asset)||void 0===l?void 0:l.accept_points)&&void 0!==d&&d),discount_cap:new r.NI((null===(u=this._data.asset)||void 0===u?void 0:u.discount_cap)||50),unit_price:new r.NI((null===(f=this._data.asset)||void 0===f?void 0:f.unit_price)||1e3),custom_rates:new r.NI((null===(p=this._data.asset)||void 0===p?void 0:p.custom_rates)||[])}),this.asset_options=(0,_.aj)([this.form.valueChanges,this._spaces.list,this._desks.desks]).pipe((0,b.U)(([{type:e,name:t},n,o])=>{this.loading=!0;const r=(t||"").toLowerCase();return e?"space"===e?n.filter(e=>e.name.toLowerCase().includes(r)):o.filter(e=>e.name.toLowerCase().includes(r)):[]}),(0,x.b)(()=>this.loading=!1),(0,A.d)(1)),this._desks.setFilters({zones:["All"]})}renderPrice(e=0){var t;return`$${null===(t=e/100)||void 0===t?void 0:t.toFixed(2)}`}renderPercent(e=0){return`${e}%`}newRule(){this.form.get("custom_rates").setValue([...this.form.get("custom_rates").value,{type:"before",first:v(new Date),second:(0,Z.Z)(v(new Date),1),rate:100}])}save(){this.event.emit({reason:"done",metadata:Object.assign({},this.form.value)})}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(w.sK),c.Y36(T.H),c.Y36(g.WI))},e.\u0275cmp=c.Xpm({type:e,selectors:[["points-asset-modal"]],outputs:{event:"event"},decls:9,vars:3,consts:[[1,"text-lg"],["class","min-w-[24rem] overflow-hidden",3,"formGroup",4,"ngIf"],[1,"flex","items-center","justify-center","p-2","space-x-2","border-t","border-gray-200"],["mat-button","","mat-dialog-close","",1,"inverse","flex-1"],["mat-button","",1,"flex-1",3,"disabled","click"],[1,"min-w-[24rem]","overflow-hidden",3,"formGroup"],[1,"p-2"],[1,"flex","items-center"],[1,"w-24"],["appearance","outline",1,"flex-1","h-[3.25rem]"],["formControlName","type","placeholder","Select asset type"],["value","space"],["value","desk"],["matPrefix","",1,"text-2xl"],["matInput","","formControlName","name","placeholder","Search for asset...",3,"disabled","matAutocomplete"],["matSuffix","",3,"diameter",4,"ngIf"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"disabled",4,"ngIf"],[1,"border-t","border-gray-200","p-2"],[1,"flex-1"],["formControlName","unit_price",1,"border","border-gray-200","rounded",3,"min","max","step","render_fn"],[1,""],["rule","","class","flex items-center",4,"ngFor","ngForOf"],["mat-button","",1,"clear","w-full",3,"click"],[1,"flex","items-center","justify-center","w-full"],[1,"underline"],["formControlName","accept_points"],["formControlName","discount_cap",1,"border","border-gray-200","rounded",3,"min","max","step","render_fn"],["matSuffix","",3,"diameter"],[3,"value"],[3,"disabled"],["rule","",1,"flex","items-center"],[1,"flex","items-center","flex-1","w-1/2","space-x-2"],["appearance","outline",1,"flex-2","h-[3.25rem]","w-32"],[3,"ngModel","ngModelOptions","ngModelChange"],["value","before"],["value","between"],["value","after"],[1,"flex-1","mt-2","w-40",3,"ngModel","ngModelOptions","ngModelChange"],["class","flex-1 mt-2 w-40",3,"ngModel","from","ngModelOptions","ngModelChange",4,"ngIf"],[1,"mx-2"],[1,"border","border-gray-200","rounded",3,"ngModel","ngModelOptions","min","max","step","render_fn","ngModelChange"],[1,"flex-1","mt-2","w-40",3,"ngModel","from","ngModelOptions","ngModelChange"]],template:function(e,t){1&e&&(c.TgZ(0,"header"),c.TgZ(1,"h2",0),c._uU(2),c.qZA(),c.qZA(),c.YNc(3,z,50,22,"main",1),c.TgZ(4,"footer",2),c.TgZ(5,"button",3),c._uU(6," Cancel "),c.qZA(),c.TgZ(7,"button",4),c.NdJ("click",function(){return t.save()}),c._uU(8," Save "),c.qZA(),c.qZA()),2&e&&(c.xp6(2),c.hij(" ",null!=t.form&&null!=t.form.value&&t.form.value.id?"Edit":"New"," Points Asset "),c.xp6(1),c.Q6J("ngIf",t.form),c.xp6(4),c.Q6J("disabled",!t.form.value.name))},directives:[o.O5,q.lW,g.ZT,r.JL,r.sg,M.KE,C.gD,r.JJ,r.u,y.ey,k.o,M.qo,N.Nt,r.Fj,O.ZL,O.XC,o.sg,U.R,J.oG,P.$g,M.R9,r.On,I.N],pipes:[o.Ov],styles:["label[_ngcontent-%COMP%]{width:auto;min-width:0;margin:0 1rem 0 0}"]}),e})(),B=(()=>{class e{constructor(e){this._dialog=e,this._assets=new f.X([]),this.assets=this._assets.asObservable(),this._assets.next(JSON.parse(localStorage.getItem("PLACEOS.point_assets")||"[]")),this.assets.subscribe(e=>{localStorage.setItem("PLACEOS.point_assets",JSON.stringify(e))})}newAsset(e){return(0,d.mG)(this,void 0,void 0,function*(){const t=this._dialog.open(F,{data:{asset:e}}),n=yield Promise.race([t.componentInstance.event.pipe((0,p.P)(e=>"done"===e.reason)).toPromise(),t.afterClosed().toPromise()]);if("done"!==n.reason)return t.close();this._assets.next([...this._assets.getValue().filter(t=>t.id!==(null==e?void 0:e.id)),Object.assign(Object.assign({},n.metadata),{id:n.metadata.id||`PA-${(0,u.Iy)(999999999)}`})]),t.close()})}removeAsset(e){this._assets.next(this._assets.getValue().filter(t=>t.id!==e))}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(g.uw))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var W=n(1354);function $(e,t){if(1&e&&(c.TgZ(0,"span",6),c._uU(1),c.qZA()),2&e){const e=t.data;c.xp6(1),c.Oqu(e)}}function H(e,t){if(1&e&&(c.TgZ(0,"span",7),c._uU(1),c.ALo(2,"currency"),c.qZA()),2&e){const e=t.data;c.xp6(1),c.hij(" ",c.lcZ(2,1,e/100)," per hour ")}}function R(e,t){if(1&e&&(c.TgZ(0,"div",8),c.TgZ(1,"app-icon",9),c._uU(2),c.qZA(),c.qZA()),2&e){const e=t.data;c.xp6(1),c.ekj("text-success",e)("text-error",!e),c.xp6(1),c.hij(" ",e?"check_circle":"cancel"," ")}}function G(e,t){if(1&e&&(c.TgZ(0,"div",10),c._uU(1),c.qZA()),2&e){const e=t.data;c.xp6(1),c.hij("",e,"%")}}function X(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"div",11),c.TgZ(1,"button",12),c.NdJ("click",function(){const t=c.CHM(e).row;return c.oxw().edit(t)}),c.TgZ(2,"app-icon"),c._uU(3,"edit"),c.qZA(),c.qZA(),c.TgZ(4,"button",12),c.NdJ("click",function(){const t=c.CHM(e).row;return c.oxw().remove(t)}),c.TgZ(5,"app-icon"),c._uU(6,"delete"),c.qZA(),c.qZA(),c.qZA()}}const K=function(){return["name","type","unit_price","accept_points","discount_cap","actions"]},V=function(){return["Name","Type","Unit Price","Accepts Points","Discount %"," "]},ee=function(){return["flex"]},te=function(e,t,n,o,r){return{type:e,unit_price:t,accept_points:n,discount_cap:o,actions:r}};let ne=(()=>{class e{constructor(e){this._state=e,this.asset_list=this._state.assets,this.edit=e=>this._state.newAsset(e),this.remove=e=>this._state.removeAsset(null==e?void 0:e.id)}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(B))},e.\u0275cmp=c.Xpm({type:e,selectors:[["points-assets"]],decls:11,vars:14,consts:[["empty","No priced assets",1,"w-full","h-full",3,"dataSource","columns","display_column","column_size","template"],["type_template",""],["price_template",""],["accept_template",""],["discount_template",""],["action_template",""],[1,"p-2","bg-gray-200","rounded","capitalize"],[1,"text-xs"],[1,"flex","justify-center","h-px"],[1,"text-2xl"],[1,"text-right","px-4"],[1,"h-6","flex","items-center","justify-end"],["mat-icon-button","",3,"click"]],template:function(e,t){if(1&e&&(c._UZ(0,"custom-table",0),c.YNc(1,$,2,1,"ng-template",null,1,c.W1O),c.YNc(3,H,3,3,"ng-template",null,2,c.W1O),c.YNc(5,R,3,5,"ng-template",null,3,c.W1O),c.YNc(7,G,2,1,"ng-template",null,4,c.W1O),c.YNc(9,X,7,0,"ng-template",null,5,c.W1O)),2&e){const e=c.MAs(2),n=c.MAs(4),o=c.MAs(6),r=c.MAs(8),i=c.MAs(10);c.Q6J("dataSource",t.asset_list)("columns",c.DdM(5,K))("display_column",c.DdM(6,V))("column_size",c.DdM(7,ee))("template",c.qbA(8,te,e,n,o,r,i))}},directives:[W.C,k.o,q.lW],pipes:[o.H9],styles:["[_nghost-%COMP%]{height:100%;width:100%;overflow-x:auto;overflow-y:hidden}"]}),e})();var oe=n(6828);let re=(()=>{class e{constructor(){this.points={value:.1,desk_checkin:2,room_checkin:2,booking_cancel:3,wellness_card:1}}ngOnInit(){this.loadPoints()}renderPrice(e=0){return`$${null==e?void 0:e.toFixed(2)}`}loadPoints(){this.points=Object.assign(Object.assign({},this.points),JSON.parse(localStorage.getItem("PLACEOS.point_details")||"{}"))}storePoints(){localStorage.setItem("PLACEOS.point_details",JSON.stringify(this.points))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Xpm({type:e,selectors:[["points-overview"]],decls:31,vars:7,consts:[[1,"p-2","bg-secondary","text-white","w-full","font-medium","text-lg"],[1,"bg-white","w-full"],[1,"p-2","underline","font-medium","text-lg"],[1,"flex","items-center","space-x-2","p-2","mb-4"],[1,"bg-white","rounded","border","border-gray-200",3,"step","ngModel","render_fn","ngModelChange"],["matTooltip","Set point redemption caps on menu items"],[1,"bg-white","w-full","flex-1"],[1,"p-4"],[1,"flex","items-center","space-x-2","p-2","border-b","border-gray-200"],[1,"bg-white","rounded","border","border-gray-200",3,"ngModel","ngModelChange"],[1,"flex","items-center","space-x-2","p-2"]],template:function(e,t){1&e&&(c.TgZ(0,"h2",0),c._uU(1," Point Overview "),c.qZA(),c.TgZ(2,"section",1),c.TgZ(3,"h2",2),c._uU(4,"Point Value"),c.qZA(),c.TgZ(5,"div",3),c.TgZ(6,"span"),c._uU(7,"1 point ="),c.qZA(),c.TgZ(8,"a-counter",4),c.NdJ("ngModelChange",function(e){return t.points.value=e})("ngModelChange",function(){return t.storePoints()}),c.qZA(),c.TgZ(9,"app-icon",5),c._uU(10," info "),c.qZA(),c.qZA(),c.qZA(),c.TgZ(11,"section",6),c.TgZ(12,"h2",2),c._uU(13,"Automatic Rewards"),c.qZA(),c.TgZ(14,"div",7),c.TgZ(15,"div",8),c.TgZ(16,"a-counter",9),c.NdJ("ngModelChange",function(e){return t.points.desk_checkin=e})("ngModelChange",function(){return t.storePoints()}),c.qZA(),c.TgZ(17,"span"),c._uU(18,"Points for desk check-in"),c.qZA(),c.qZA(),c.TgZ(19,"div",8),c.TgZ(20,"a-counter",9),c.NdJ("ngModelChange",function(e){return t.points.room_checkin=e})("ngModelChange",function(){return t.storePoints()}),c.qZA(),c.TgZ(21,"span"),c._uU(22,"Points for room check-in"),c.qZA(),c.qZA(),c.TgZ(23,"div",8),c.TgZ(24,"a-counter",9),c.NdJ("ngModelChange",function(e){return t.points.booking_cancel=e})("ngModelChange",function(){return t.storePoints()}),c.qZA(),c.TgZ(25,"span"),c._uU(26,"Points for booking cancellation with 24 hour notice"),c.qZA(),c.qZA(),c.TgZ(27,"div",10),c.TgZ(28,"a-counter",9),c.NdJ("ngModelChange",function(e){return t.points.wellness_card=e})("ngModelChange",function(){return t.storePoints()}),c.qZA(),c.TgZ(29,"span"),c._uU(30,"Points for completing wellness card"),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(8),c.Q6J("step",.1)("ngModel",t.points.value)("render_fn",t.renderPrice),c.xp6(8),c.Q6J("ngModel",t.points.desk_checkin),c.xp6(4),c.Q6J("ngModel",t.points.room_checkin),c.xp6(4),c.Q6J("ngModel",t.points.booking_cancel),c.xp6(4),c.Q6J("ngModel",t.points.wellness_card))},directives:[U.R,r.JJ,r.On,k.o,oe.gM],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}"]}),e})();var ie=n(1490),se=n(1496),ae=n(1521);const le=["*"];let ce=(()=>{class e extends u.KG{constructor(e){super(),this._org=e}ngOnInit(){return(0,d.mG)(this,void 0,void 0,function*(){yield this._org.initialised.pipe((0,p.P)(e=>e)).toPromise()})}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(se.w7))},e.\u0275cmp=c.Xpm({type:e,selectors:[["points-topbar"]],features:[c.qOj],ngContentSelectors:le,decls:3,vars:0,consts:[[1,"flex-1","w-2"]],template:function(e,t){1&e&&(c.F$t(),c.TgZ(0,"div",0),c.Hsn(1),c.qZA(),c._UZ(2,"date-options"))},directives:[ae.E],styles:["[_nghost-%COMP%]{display:flex;align-items:center;background-color:#fff;height:5em;padding:0 1em;border-bottom:1px solid #ccc}[_nghost-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin-left:.5rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}"]}),e})();function de(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"button",6),c.NdJ("click",function(){return c.CHM(e),c.oxw().newAsset()}),c._uU(1," New Asset "),c.qZA()}}const ue=function(){return["/points","overview"]},fe=function(){return["/points","assets"]},pe=[{path:"",component:(()=>{class e extends u.KG{constructor(e,t){super(),this._state=e,this._router=t,this.newAsset=()=>this._state.newAsset()}ngOnInit(){var e;this.subscription("route.params",this._router.events.subscribe(()=>{var e;const t=(null===(e=this._router.url)||void 0===e?void 0:e.split("/"))||[""];this.page=t[t.length-1]}));const t=(null===(e=this._router.url)||void 0===e?void 0:e.split("/"))||[""];this.page=t[t.length-1]}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(B),c.Y36(a.F0))},e.\u0275cmp=c.Xpm({type:e,selectors:[["placeos-points"]],features:[c.qOj],decls:11,vars:7,consts:[[1,"relative","w-full","flex","flex-col"],[1,"relative","z-10"],["mat-button","",3,"click",4,"ngIf"],["mat-tab-nav-bar",""],["mat-tab-link","",3,"routerLink","active"],[1,"flex-1","w-full","h-1/2","overflow-auto"],["mat-button","",3,"click"]],template:function(e,t){1&e&&(c._UZ(0,"sidebar"),c.TgZ(1,"main",0),c.TgZ(2,"points-topbar",1),c.YNc(3,de,2,0,"button",2),c.qZA(),c.TgZ(4,"nav",3),c.TgZ(5,"a",4),c._uU(6," Overview "),c.qZA(),c.TgZ(7,"a",4),c._uU(8," Assets "),c.qZA(),c.qZA(),c.TgZ(9,"div",5),c._UZ(10,"router-outlet"),c.qZA(),c.qZA()),2&e&&(c.xp6(3),c.Q6J("ngIf","assets"===t.page),c.xp6(2),c.Q6J("routerLink",c.DdM(5,ue))("active","overview"===t.page),c.xp6(2),c.Q6J("routerLink",c.DdM(6,fe))("active","assets"===t.page))},directives:[ie.k,ce,o.O5,s.BU,a.yS,s.Nj,a.lC,q.lW],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;background:var(--bg)}"]}),e})(),children:[{path:"",redirectTo:"overview"},{path:"assets",component:ne},{path:"overview",component:re},{path:"*",redirectTo:"overview"}]}];let ge=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[o.ez,r.u5,r.UX,l.v,s.Nh,i.Hi,a.Bz.forChild(pe)]]}),e})()},2892:(e,t,n)=>{"use strict";function o(e){var t=this;e="object"==typeof e?e:{},t.revision=3,t.imageTypes={bmp:"image/bmp",gif:"image/gif",jpeg:"image/jpeg",jpg:"image/jpg",png:"image/png","svg+xml":"image/svg+xml",tiff:"image/tiff",webp:"image/webp","x-icon":"image/x-icon"},t.toTable=e.toTable,t.domElement=t.toTable?document.createElement("div"):document.createElement("canvas"),t.url=e.url||"",t.size=e.size||280,t.qrc=!1,t.colorLight=e.colorLight||"#fff",t.colorDark=e.colorDark||"#000",t.ecclevel=e.ecclevel||1,t.noBorder=e.noBorder,t.borderSize=e.borderSize||4;var n,r,i,s,a,l,c,d=[],u=[],f=[],p=[],g=[],m=[],h=function(e,t){var n;e>t&&(n=e,e=t,t=n),n=t,n*=t,n+=t,n>>=1,p[n+=e]=1},v=function(e,t){var n;for(f[e+i*t]=1,n=-2;n<2;n++)f[e+n+i*(t-2)]=1,f[e-2+i*(t+n+1)]=1,f[e+2+i*(t+n)]=1,f[e+n+1+i*(t+2)]=1;for(n=0;n<2;n++)h(e-1,t+n),h(e+1,t-n),h(e-n,t-1),h(e+n,t+1)},Z=function(e){for(;e>=255;)e=((e-=255)>>8)+(255&e);return e},_=function(e,t,n,r){var i,s,a,l=o.gexp,c=o.glog;for(i=0;i<r;i++)d[n+i]=0;for(i=0;i<t;i++){if(255!=(a=c[d[e+i]^d[n]]))for(s=1;s<r;s++)d[n+s-1]=d[n+s]^l[Z(a+m[r-s])];else for(s=n;s<n+r;s++)d[s]=d[s+1];d[n+r-1]=255==a?0:l[Z(a+m[0])]}},b=function(e,t){var n;return e>t&&(n=e,e=t,t=n),n=t,n+=t*t,n>>=1,p[n+=e]},x=function(e){var t,n,o,r;switch(e){case 0:for(n=0;n<i;n++)for(t=0;t<i;t++)t+n&1||b(t,n)||(f[t+n*i]^=1);break;case 1:for(n=0;n<i;n++)for(t=0;t<i;t++)1&n||b(t,n)||(f[t+n*i]^=1);break;case 2:for(n=0;n<i;n++)for(o=0,t=0;t<i;t++,o++)3==o&&(o=0),o||b(t,n)||(f[t+n*i]^=1);break;case 3:for(r=0,n=0;n<i;n++,r++)for(3==r&&(r=0),o=r,t=0;t<i;t++,o++)3==o&&(o=0),o||b(t,n)||(f[t+n*i]^=1);break;case 4:for(n=0;n<i;n++)for(o=0,r=n>>1&1,t=0;t<i;t++,o++)3==o&&(o=0,r=!r),r||b(t,n)||(f[t+n*i]^=1);break;case 5:for(r=0,n=0;n<i;n++,r++)for(3==r&&(r=0),o=0,t=0;t<i;t++,o++)3==o&&(o=0),(t&n&1)+!(!o|!r)||b(t,n)||(f[t+n*i]^=1);break;case 6:for(r=0,n=0;n<i;n++,r++)for(3==r&&(r=0),o=0,t=0;t<i;t++,o++)3==o&&(o=0),(t&n&1)+(o&&o==r)&1||b(t,n)||(f[t+n*i]^=1);break;case 7:for(r=0,n=0;n<i;n++,r++)for(3==r&&(r=0),o=0,t=0;t<i;t++,o++)3==o&&(o=0),(o&&o==r)+(t+n&1)&1||b(t,n)||(f[t+n*i]^=1)}},A=function(e){var t,n=0;for(t=0;t<=e;t++)g[t]>=5&&(n+=o.N1+g[t]-5);for(t=3;t<e-1;t+=2)g[t-2]==g[t+2]&&g[t+2]==g[t-1]&&g[t-1]==g[t+1]&&3*g[t-1]==g[t]&&(0==g[t-3]||t+3>e||3*g[t-3]>=4*g[t]||3*g[t+3]>=4*g[t])&&(n+=o.N3);return n},w=function(){var e,t,n,r,s,a=0,l=0;for(t=0;t<i-1;t++)for(e=0;e<i-1;e++)(f[e+i*t]&&f[e+1+i*t]&&f[e+i*(t+1)]&&f[e+1+i*(t+1)]||!(f[e+i*t]||f[e+1+i*t]||f[e+i*(t+1)]||f[e+1+i*(t+1)]))&&(a+=o.N2);for(t=0;t<i;t++){for(g[0]=0,n=r=e=0;e<i;e++)(s=f[e+i*t])==r?g[n]++:g[++n]=1,l+=(r=s)?1:-1;a+=A(n)}l<0&&(l=-l);var c=l,d=0;for(c+=c<<2,c<<=1;c>i*i;)c-=i*i,d++;for(a+=d*o.N4,e=0;e<i;e++){for(g[0]=0,n=r=t=0;t<i;t++)(s=f[e+i*t])==r?g[n]++:g[++n]=1,r=s;a+=A(n)}return a};t.genframe=function(e){var t,g,A,T,q,M,C,y,k=o.eccblocks,N=o.gexp,O=o.glog;T=e.length,r=0;do{if(r++,A=4*(n-1)+16*(r-1),s=k[A++],a=k[A++],l=k[A++],c=k[A],T<=(A=l*(s+a)+a-3+(r<=9)))break}while(r<40);for(i=17+4*r,q=l+(l+c)*(s+a)+a,T=0;T<q;T++)u[T]=0;for(d=e.slice(0),T=0;T<i*i;T++)f[T]=0;for(T=0;T<(i*(i+1)+1)/2;T++)p[T]=0;for(T=0;T<3;T++){for(A=0,g=0,1==T&&(A=i-7),2==T&&(g=i-7),f[g+3+i*(A+3)]=1,t=0;t<6;t++)f[g+t+i*A]=1,f[g+i*(A+t+1)]=1,f[g+6+i*(A+t)]=1,f[g+t+1+i*(A+6)]=1;for(t=1;t<5;t++)h(g+t,A+1),h(g+1,A+t+1),h(g+5,A+t),h(g+t+1,A+5);for(t=2;t<4;t++)f[g+t+i*(A+2)]=1,f[g+2+i*(A+t+1)]=1,f[g+4+i*(A+t)]=1,f[g+t+1+i*(A+4)]=1}if(r>1)for(T=o.adelta[r],g=i-7;;){for(t=i-7;t>T-3&&(v(t,g),!(t<T));)t-=T;if(g<=T+9)break;v(6,g-=T),v(g,6)}for(f[8+i*(i-8)]=1,g=0;g<7;g++)h(7,g),h(i-8,g),h(7,g+i-7);for(t=0;t<8;t++)h(t,7),h(t+i-8,7),h(t,i-8);for(t=0;t<9;t++)h(t,8);for(t=0;t<8;t++)h(t+i-8,8),h(8,t);for(g=0;g<7;g++)h(8,g+i-7);for(t=0;t<i-14;t++)1&t?(h(8+t,6),h(6,8+t)):(f[8+t+6*i]=1,f[6+i*(8+t)]=1);if(r>6)for(T=o.vpat[r-7],A=17,t=0;t<6;t++)for(g=0;g<3;g++,A--)1&(A>11?r>>A-12:T>>A)?(f[5-t+i*(2-g+i-11)]=1,f[2-g+i-11+i*(5-t)]=1):(h(5-t,2-g+i-11),h(2-g+i-11,5-t));for(g=0;g<i;g++)for(t=0;t<=g;t++)f[t+i*g]&&h(t,g);for(q=d.length,M=0;M<q;M++)u[M]=d.charCodeAt(M);if(d=u.slice(0),q>=(t=l*(s+a)+a)-2&&(q=t-2,r>9&&q--),M=q,r>9){for(d[M+2]=0,d[M+3]=0;M--;)d[M+3]|=255&(T=d[M])<<4,d[M+2]=T>>4;d[2]|=255&q<<4,d[1]=q>>4,d[0]=64|q>>12}else{for(d[M+1]=0,d[M+2]=0;M--;)d[M+2]|=255&(T=d[M])<<4,d[M+1]=T>>4;d[1]|=255&q<<4,d[0]=64|q>>4}for(M=q+3-(r<10);M<t;)d[M++]=236,d[M++]=17;for(m[0]=1,M=0;M<c;M++){for(m[M+1]=1,C=M;C>0;C--)m[C]=m[C]?m[C-1]^N[Z(O[m[C]]+M)]:m[C-1];m[0]=N[Z(O[m[0]]+M)]}for(M=0;M<=c;M++)m[M]=O[m[M]];for(A=t,g=0,M=0;M<s;M++)_(g,l,A,c),g+=l,A+=c;for(M=0;M<a;M++)_(g,l+1,A,c),g+=l+1,A+=c;for(g=0,M=0;M<l;M++){for(C=0;C<s;C++)u[g++]=d[M+C*l];for(C=0;C<a;C++)u[g++]=d[s*l+M+C*(l+1)]}for(C=0;C<a;C++)u[g++]=d[s*l+M+C*(l+1)];for(M=0;M<c;M++)for(C=0;C<s+a;C++)u[g++]=d[t+M+C*c];for(d=u,t=g=i-1,A=q=1,y=(l+c)*(s+a)+a,M=0;M<y;M++)for(T=d[M],C=0;C<8;C++,T<<=1){128&T&&(f[t+i*g]=1);do{q?t--:(t++,A?0!=g?g--:(A=!A,6==(t-=2)&&(t--,g=9)):g!=i-1?g++:(A=!A,6==(t-=2)&&(t--,g-=8))),q=!q}while(b(t,g))}for(d=f.slice(0),T=0,g=3e4,A=0;A<8&&(x(A),(t=w())<g&&(g=t,T=A),7!=T);A++)f=d.slice(0);for(T!=A&&x(T),g=o.fmtword[T+(n-1<<3)],A=0;A<8;A++,g>>=1)1&g&&(f[i-1-A+8*i]=1,A<6?f[8+i*A]=1:f[8+i*(A+1)]=1);for(A=0;A<7;A++,g>>=1)1&g&&(f[8+i*(i-7+A)]=1,A?f[6-A+8*i]=1:f[7+8*i]=1);return f},t.init=function(){n=t.ecclevel;var e=t.genframe(t.url);t.toTable?t.tableWrite(e,i):t.canvasWrite(e,i)},t.init()}function r(e,t="#fff0",n="#000"){var r;const i=new o({url:e||"Hello",size:360,colorLight:t,colorDark:n,toTable:!1,ecclevel:1,noBorder:!0,borderSize:0});return null===(r=null==i?void 0:i.toImage("svg+xml"))||void 0===r?void 0:r.src}n.d(t,{w:()=>r}),o.prototype={canvasWrite:function(e,t){if(!this.qrc&&(this.qrc=this.getContext(this.domElement),!this.qrc))return this.toTable=!0,this.domElement=document.createElement("div"),void this.tableWrite(e,t);var n=this.size,o=this.qrc;o.lineWidth=1;var r=n;r/=t+10,r=Math.round(r-.5);var i=4;this.noBorder?(o.canvas.width=o.canvas.height=r*t,i=0):o.canvas.width=o.canvas.height=n,o.clearRect(0,0,n,n),o.fillStyle=this.colorLight,o.fillRect(0,0,r*(t+8),r*(t+8)),o.fillStyle=this.colorDark;for(var s=0;s<t;s++)for(var a=0;a<t;a++)e[a*t+s]&&o.fillRect(r*(i+s),r*(i+a),r,r)},tableWrite:function(e,t){var n=this,o=Math.round(this.size/t-3.5)+"px",r=t+(n.noBorder?0:2*n.borderSize),i=n.borderSize,s="width:"+o+";height:"+o+";",a=n.colorLight,l=n.colorDark,c=document.createElement("table");c.style.cssText="border:0;border-collapse:collapse;";for(var d,u=document.createElement("tr"),f=document.createElement("td"),p=function(){return f.cloneNode()},g=function(){var e=p();return e.style.cssText=s+"background:"+a,e},m=function(e){for(var t=e.firstChild,n=0;n<i;n++)e.insertBefore(g(),t),e.appendChild(g())},h=0;h<t;h++){var v=u.cloneNode();c.appendChild(v);for(var Z=0;Z<t;Z++)if(1===e[h*t+Z]){var _=(d=void 0,(d=p()).style.cssText=s+"background:"+l,d);v.appendChild(_)}else{var b=g();v.appendChild(b)}n.noBorder||m(v)}n.noBorder||function(e){for(var t=e.firstChild,o=0;o<n.borderSize;o++){for(var i=u.cloneNode(),s=0;s<r;s++){var a=g();i.appendChild(a)}e.appendChild(i),e.insertBefore(i.cloneNode(!0),t)}}(c),n.domElement.innerHTML="",n.domElement.appendChild(c)},getContext:function(e){return e.getContext&&e.getContext("2d")?e.getContext("2d"):(console.log("Browser does not have 2d Canvas support"),!1)},toImage:function(e){if(this.qrc){var t=this.imageTypes[e];if(!t)throw new Error(e+" is not a valid image type ");var n=new Image;return n.src=this.domElement.toDataURL(t),n}}},o.adelta=[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28],o.vpat=[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177],o.fmtword=[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],o.eccblocks=[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],o.glog=[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175],o.gexp=[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],o.N1=3,o.N2=3,o.N3=40,o.N4=10}}]);
//# sourceMappingURL=apps_concierge_src_app_points_points_module_ts-libs_common_src_lib_qr-code_ts.js.map