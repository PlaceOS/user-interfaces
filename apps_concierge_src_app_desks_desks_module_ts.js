"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_desks_desks_module_ts"],{4655:(Qe,D,l)=>{l.r(D),l.d(D,{DesksModule:()=>Ye});var u=l(4666),_=l(2508),h=l(9885),F=l(2922),Z=l(5892),C=l(1709),Y=l(3045),d=l(9112),v=l(9519),e=l(2560),P=l(4945),Q=l(1294),m=l(1670),L=l(5670),b=l(3910),f=l(6221),x=l(7173),I=l(8441),z=l(9396),T=l(4522),M=l(5074),B=l(7371),H=l(207);function S(o,i){1&o&&(e.TgZ(0,"mat-option",9),e._uU(1,"All Levels"),e.qZA())}function q(o,i){if(1&o&&(e.TgZ(0,"mat-option",10),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.display_name||t.name," ")}}function G(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"button",11),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.newDesk())}),e._uU(1,"New Desk"),e.qZA()}}function K(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"button",12),e._uU(1," Upload CSV "),e.TgZ(2,"input",13),e.NdJ("change",function(s){e.CHM(t);const a=e.oxw();return e.KtG(a.loadCSVData(s))}),e.qZA()()}}let V=(()=>{class o extends d.KG{constructor(t,n,s,a){super(),this._desks=t,this._org=n,this._route=s,this._router=a,this.levels=this._org.active_levels,this.filters=this._desks.filters,this.manage=!1,this.is_map=!1,this.setDate=r=>this._desks.setFilters({date:r}),this.setFilters=r=>this._desks.setFilters(r),this.updateZones=r=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:r.join(",")},queryParamsHandling:"merge"}),this._desks.setFilters({zones:r})}}ngOnInit(){var t=this;return(0,m.Z)(function*(){yield t._org.initialised.pipe((0,L.P)(n=>n)).toPromise(),t.subscription("route.query",t._route.queryParamMap.subscribe(n=>{if(n.has("zone_ids")){const s=n.get("zone_ids").split(",");if(s.length){t.updateZones(s);const a=t._org.levelWithID(s);if(!a)return;t._org.building=t._org.buildings.find(r=>r.id===a.parent_id)}}n.has("date")&&t.setDate(new Date(+n.get("date"))),n.has("approve")?t.approve(n.get("approve")):n.has("reject")&&t.reject(n.get("reject")),t.manage=t._router.url?.includes("manage"),t.is_map=t._router.url?.includes("map")})),t.subscription("levels",t._org.active_levels.subscribe(function(){var n=(0,m.Z)(function*(s){const r=(yield t.filters.pipe((0,b.q)(1)).toPromise())?.zones?.filter(c=>s.find(p=>p.id===c)||"All"===c)||[];!r.length&&s.length&&r.push(s[0].id),t.updateZones(r)});return function(s){return n.apply(this,arguments)}}())),t.manage=t._router.url?.includes("manage"),t.is_map=t._router.url?.includes("map")})()}newDesk(){this._desks.addDesks([new f.nk({id:`desk-${(0,d.Iy)(999999)}`})]),(0,d.t5)("New desk added to local data. Make sure to save the desk before using it.")}loadCSVData(t){var n=this;return(0,m.Z)(function*(){const s=yield(0,d.fT)(t).catch(([a,r])=>{throw(0,d.cB)(a),r});try{const a=(0,d.n5)(s)||[];n._desks.addDesks(a.map(r=>new f.nk({...r,id:r.id||`desk-${(0,d.Iy)(999999)}`})))}catch(a){console.error(a)}})()}approve(t){var n=this;return(0,m.Z)(function*(){const s=yield(0,x.Fo)(t).toPromise();s&&n._desks.approveDesk(s)})()}reject(t){var n=this;return(0,m.Z)(function*(){const s=yield(0,x.Fo)(t).toPromise();s&&n._desks.rejectDesk(s)})()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(v.H),e.Y36(f.w7),e.Y36(h.gz),e.Y36(h.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["desks-topbar"]],features:[e.qOj],decls:13,vars:14,consts:[["appearance","outline"],["placeholder","All Levels",3,"ngModel","ngModelChange"],["value","All",4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],["mat-button","","class","mx-2 w-32",3,"click",4,"ngIf"],["mat-button","","class","relative w-32",4,"ngIf"],[1,"flex-1","w-2"],[1,"mr-2",3,"model","modelChange"],[3,"dateChange"],["value","All"],[3,"value"],["mat-button","",1,"mx-2","w-32",3,"click"],["mat-button","",1,"relative","w-32"],["type","file",1,"absolute","inset-0","opacity-0",3,"change"]],template:function(t,n){if(1&t&&(e.TgZ(0,"mat-form-field",0)(1,"mat-select",1),e.NdJ("ngModelChange",function(a){return n.updateZones([a])}),e.ALo(2,"async"),e.ALo(3,"async"),e.YNc(4,S,2,0,"mat-option",2),e.YNc(5,q,2,2,"mat-option",3),e.ALo(6,"async"),e.qZA()(),e.YNc(7,G,2,0,"button",4),e.YNc(8,K,3,0,"button",5),e._UZ(9,"div",6),e.TgZ(10,"searchbar",7),e.NdJ("modelChange",function(a){return n.setFilters({search:a})}),e.ALo(11,"async"),e.qZA(),e.TgZ(12,"date-options",8),e.NdJ("dateChange",function(a){return n.setDate(a)}),e.qZA()),2&t){let s;e.xp6(1),e.Q6J("ngModel",e.lcZ(2,6,n.filters).zones?e.lcZ(3,8,n.filters).zones[0]:"All"),e.xp6(3),e.Q6J("ngIf",!n.is_map),e.xp6(1),e.Q6J("ngForOf",e.lcZ(6,10,n.levels)),e.xp6(2),e.Q6J("ngIf",n.manage),e.xp6(1),e.Q6J("ngIf",n.manage),e.xp6(2),e.Q6J("model",null==(s=e.lcZ(11,12,n.filters))?null:s.search)}},dependencies:[u.sg,u.O5,_.JJ,_.On,I.E,z.U,T.lW,M.KE,B.gD,H.ey,u.Ov],styles:["[_nghost-%COMP%]{display:flex;align-items:center;background-color:#fff;height:5em;padding:0 1em;border-bottom:1px solid #ccc}[_nghost-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin-left:.5rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n/*# sourceMappingURL=desks-topbar.component.ts-angular-inline--85.css.map*/"]}),o})();const E=["app-desks",""];function R(o,i){1&o&&e._UZ(0,"mat-progress-bar",7)}const W=function(){return["/desks","events"]},$=function(){return["/desks","map"]},X=function(){return["/desks","manage"]};let ee=(()=>{class o extends d.KG{constructor(t,n){super(),this._state=t,this._router=n,this.loading=this._state.loading}ngOnInit(){this._state.startPolling(),this.subscription("router.events",this._router.events.subscribe(n=>{if(n instanceof h.m2){const s=this._router.url?.split("/")||[""];this.path=s[t.length-1].split("?")[0]}}));const t=this._router.url?.split("/")||[""];this.path=t[t.length-1].split("?")[0]}ngOnDestroy(){super.ngOnDestroy(),this._state.stopPolling()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(v.H),e.Y36(h.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["","app-desks",""]],features:[e.qOj],attrs:E,decls:15,vars:12,consts:[[1,"relative","overflow-hidden","flex-1","flex","flex-col"],[1,"w-full"],[1,"dark"],["mat-tab-nav-bar",""],["mat-tab-link","","queryParamsHandling","merge",3,"routerLink","active"],[1,"flex-1","h-1/2","w-full","relative","overflow-auto"],["class","w-full","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"w-full"]],template:function(t,n){1&t&&(e._UZ(0,"sidebar"),e.TgZ(1,"main",0),e._UZ(2,"desks-topbar",1),e.TgZ(3,"div",2)(4,"nav",3)(5,"a",4),e._uU(6," Bookings "),e.qZA(),e.TgZ(7,"a",4),e._uU(8," Map View "),e.qZA(),e.TgZ(9,"a",4),e._uU(10," Manage Desks "),e.qZA()()(),e.TgZ(11,"div",5),e._UZ(12,"router-outlet"),e.qZA(),e.YNc(13,R,1,0,"mat-progress-bar",6),e.ALo(14,"async"),e.qZA()),2&t&&(e.xp6(5),e.Q6J("routerLink",e.DdM(9,W))("active","events"===n.path),e.xp6(2),e.Q6J("routerLink",e.DdM(10,$))("active","map"===n.path),e.xp6(2),e.Q6J("routerLink",e.DdM(11,X))("active","manage"===n.path),e.xp6(4),e.Q6J("ngIf",e.lcZ(14,7,n.loading)))},dependencies:[u.O5,Z.BU,Z.Nj,P.k,Q.pW,h.lC,h.yS,V,u.Ov],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;background:var(--bg)}\n/*# sourceMappingURL=desks.component.ts-angular-inline--83.css.map*/"]}),o})();var k=l(8589),y=l(6896),te=l(1637),w=l(5306),A=l(1110);function ne(o,i){if(1&o&&(e._uU(0),e.ALo(1,"date"),e.ALo(2,"date")),2&o){const t=i.data;e.AsE(" ",e.lcZ(1,2,t)," at ",e.xi3(2,4,t,"shortTime")," ")}}function se(o,i){if(1&o&&e._uU(0),2&o){const t=i.row;e.hij(" ",t.asset_name||t.asset_id," ")}}function oe(o,i){if(1&o&&e._uU(0),2&o){const t=i.row;e.hij(" ",t.user_name||t.user_email||t.booked_by_name||t.booked_by_email," ")}}function ae(o,i){if(1&o&&(e.TgZ(0,"span",11),e._uU(1),e.qZA()),2&o){const t=i.data;e.ekj("bg-success","approved"===t)("bg-pending","tentative"===t)("bg-error","cancelled"===t||"declined"===t),e.xp6(1),e.hij(" ",t," ")}}function ie(o,i){1&o&&e._uU(0),2&o&&e.hij(" ",i.data?"Yes":"No"," ")}function re(o,i){1&o&&(e.TgZ(0,"app-icon"),e._uU(1," qr_code "),e.qZA())}function le(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",12)(1,"action-icon",13),e.NdJ("click",function(){const a=e.CHM(t).row,r=e.oxw();return e.KtG(r.checkin(a))}),e._uU(2,"how_to_reg"),e.qZA(),e.TgZ(3,"button",14),e.NdJ("click",function(){const a=e.CHM(t).row,r=e.oxw();return e.KtG(r.approve(a))}),e.TgZ(4,"app-icon"),e._uU(5,"event_available"),e.qZA()(),e.TgZ(6,"button",15),e.NdJ("click",function(){const a=e.CHM(t).row,r=e.oxw();return e.KtG(r.reject(a))}),e.TgZ(7,"app-icon"),e._uU(8,"event_busy"),e.qZA()(),e.TgZ(9,"button",16),e.YNc(10,re,2,0,"app-icon",17),e.qZA(),e.TgZ(11,"mat-menu",null,9)(13,"div",18),e._UZ(14,"img",19),e.qZA(),e.TgZ(15,"div",20)(16,"button",21),e._uU(17," Print QR Code "),e.qZA()()()()}if(2&o){const t=i.row,n=e.MAs(12);e.xp6(9),e.Q6J("disabled",!(null!=t.extension_data&&t.extension_data.checkin_qr_code))("matMenuTriggerFor",n),e.xp6(1),e.Q6J("ngIf",null==t.extension_data?null:t.extension_data.checkin_qr_code),e.xp6(4),e.Q6J("src",null==t.extension_data?null:t.extension_data.checkin_qr_code,e.LSH)}}const ce=function(){return["user_name","group","desk_name","date","status","approver_name","checked_in","access","actions"]},de=function(){return["Person","Group","Desk","Date","Status","Approver","Checked In","Access"," "]},pe=function(){return["flex","","","12r","","10r","","","12r"]},ue=function(o,i,t,n,s,a,r){return{user_name:o,desk_name:i,date:t,status:n,checked_in:s,access:a,actions:r}};let me=(()=>{class o{constructor(t){var n=this;this._state=t,this.filters=this._state.filters,this.bookings=this._state.bookings,this.rejectAll=()=>this._state.rejectAllDesks(),this.checkin=s=>this.runMethod("checkin",(0,m.Z)(function*(){return n._state.checkinDesk(s)})),this.approve=s=>this.runMethod("approve",(0,m.Z)(function*(){return n._state.approveDesk(s)})),this.reject=s=>this.runMethod("reject",(0,m.Z)(function*(){return n._state.rejectDesk(s)}))}runMethod(t,n){var s=this;return(0,m.Z)(function*(){s.loading=t,yield n().catch(a=>null),s.loading=""})()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(v.H))},o.\u0275cmp=e.Xpm({type:o,selectors:[["desk-bookings"]],decls:23,vars:23,consts:[[1,"overflow-auto","h-full","w-full"],[1,"min-w-[76rem]",3,"dataSource","filter","columns","display_column","column_size","template","empty"],["date_template",""],["desk_template",""],["user_template",""],["status_template",""],["bool_template",""],["action_template",""],["mat-icon-button","",1,"absolute","bottom-2","right-2","bg-white","shadow",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"capitalize","text-white","px-2","py-1","rounded","border","border-gray-200"],[1,"flex","items-center","justify-end","space-x-2"],[3,"click"],["mat-icon-button","","matTooltip","Approve Desk",3,"click"],["mat-icon-button","","matTooltip","Reject Desk",3,"click"],["mat-icon-button","","matTooltip","View Desk QR code",3,"disabled","matMenuTriggerFor"],[4,"ngIf"],[1,"p-2","mx-4","my-2","rounded-lg","border","border-black"],[1,"w-48",3,"src"],["mat-menu-item","",1,"underline"],["mat-button","",1,"w-full"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0),e._UZ(1,"custom-table",1),e.ALo(2,"async"),e.ALo(3,"async"),e.YNc(4,ne,3,7,"ng-template",null,2,e.W1O),e.YNc(6,se,1,1,"ng-template",null,3,e.W1O),e.YNc(8,oe,1,1,"ng-template",null,4,e.W1O),e.YNc(10,ae,2,7,"ng-template",null,5,e.W1O),e.YNc(12,ie,1,1,"ng-template",null,6,e.W1O),e.YNc(14,le,18,4,"ng-template",null,7,e.W1O),e.qZA(),e.TgZ(16,"button",8)(17,"app-icon"),e._uU(18,"more_vert"),e.qZA()(),e.TgZ(19,"mat-menu",null,9)(21,"button",10),e.NdJ("click",function(){return n.rejectAll()}),e._uU(22,"Reject All"),e.qZA()()),2&t){const s=e.MAs(5),a=e.MAs(7),r=e.MAs(9),c=e.MAs(11),p=e.MAs(13),g=e.MAs(15),Pe=e.MAs(20);let N,j;e.xp6(1),e.Q6J("dataSource",n.bookings)("filter",null==(N=e.lcZ(2,8,n.filters))?null:N.search)("columns",e.DdM(12,ce))("display_column",e.DdM(13,de))("column_size",e.DdM(14,pe))("template",e.Hh0(15,ue,r,a,s,c,p,p,g))("empty",null!=(j=e.lcZ(3,10,n.filters))&&j.search?"No matching desk bookings":"There are no desk booking for the currently selected date."),e.xp6(15),e.Q6J("matMenuTriggerFor",Pe)}},dependencies:[u.O5,T.lW,k.VK,k.OP,k.p6,y.gM,te.m,w.o,A.C,u.Ov,u.uU],styles:["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;height:100%;width:100%}\n/*# sourceMappingURL=desk-bookings.component.ts-angular-inline--84.css.map*/"]}),o})();var ge=l(9697),_e=l(9136),he=l(8461);let fe=(()=>{class o extends d.KG{constructor(t,n,s,a){super(),this._state=t,this._desk=n,this._desks_state=s,this._org=a,this.url=this._state.map_url,this.styles=this._state.map_styles,this.positions=this._state.map_positions,this.actions=this._state.map_actions,this.features=this._state.map_features,this.setHost=r=>this._desks_state.setOptions({host:r})}ngOnInit(){this.subscription("desk_polling",this._desks_state.startPolling()),this.subscription("date",this._desk.filters.subscribe(t=>{const n=this._org.levelWithID(t.zones);n&&this._state.setLevel(n.id),this._desks_state.setOptions({date:t.date?new Date(t.date):new Date,zones:t.zones})}))}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(C.ck),e.Y36(v.H),e.Y36(C.Xp),e.Y36(f.w7))},o.\u0275cmp=e.Xpm({type:o,selectors:[["desk-map-view"]],features:[e._Bn([C.Xp]),e.qOj],decls:13,vars:19,consts:[["map","",1,"h-full","w-full","relative"],[3,"src","zoom","center","styles","features","actions"],[1,"absolute","bottom-0","right-0"],[1,"absolute","top-0","left-0","p-2","text-black"],["placeholder","User for bookings...",3,"ngModel","ngModelChange"],["info","",1,"absolute","bottom-0","rounded","p-2","m-2","bg-white","shadow","text-center"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"i-map",1),e.ALo(2,"async"),e.ALo(3,"async"),e.ALo(4,"async"),e.ALo(5,"async"),e.ALo(6,"async"),e.ALo(7,"async"),e._UZ(8,"explore-zoom-controls",2),e.TgZ(9,"div",3)(10,"a-user-search-field",4),e.NdJ("ngModelChange",function(a){return n.setHost(a)}),e.qZA()(),e.TgZ(11,"div",5),e._uU(12," Click/Tap an available desk to book it. "),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("src",e.lcZ(2,7,n.url))("zoom",e.lcZ(3,9,n.positions).zoom)("center",e.lcZ(4,11,n.positions).center)("styles",e.lcZ(5,13,n.styles))("features",e.lcZ(6,15,n.features))("actions",e.lcZ(7,17,n.actions)),e.xp6(9),e.Q6J("ngModel",null))},dependencies:[_.JJ,_.On,ge.d,_e.p,he.s,u.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;position:relative;height:100%;width:100%}[info][_ngcontent-%COMP%]{left:50%;transform:translate(-50%)}\n/*# sourceMappingURL=desk-map-view.component.ts-angular-inline--86.css.map*/"]}),o})();var J=l(3690),ke=l(6168),ve=l(7716),be=l(6942),Ce=l(1484),U=l(1267),O=l(4792),Ze=l(1708),Te=l(6048);function Me(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"item-list-field",9),e.NdJ("ngModelChange",function(s){const a=e.CHM(t),r=a.row,c=a.key,p=e.oxw();return e.KtG(p.setRowValue(r.id,c,s))}),e.qZA()}if(2&o){const t=i.data,n=i.row,s=i.key,a=e.oxw();e.Q6J("placeholder","groups"===s?"User Groups":"Features")("name",s)("ngModel",(a.changes[n.id]?a.changes[n.id][s]:null)||t)}}function De(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",10)(1,"mat-form-field",11)(2,"input",12),e.NdJ("ngModelChange",function(s){const a=e.CHM(t),r=a.row,c=a.key,p=e.oxw();return e.KtG(p.setRowValue(r.id,c,s))}),e.qZA()()()}if(2&o){const t=i.data,n=i.row,s=i.key,a=e.oxw();e.xp6(2),e.Q6J("placeholder",s)("name",s)("ngModel",(a.changes[n.id]?a.changes[n.id][s]:null)||t)}}function xe(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",13)(1,"mat-checkbox",14),e.NdJ("ngModelChange",function(s){const r=e.CHM(t).row,c=e.oxw();return e.KtG(c.setRowValue(r.id,"bookable",s))}),e.qZA()()}if(2&o){const t=i.data,n=i.row,s=e.oxw();let a;e.xp6(1),e.Q6J("ngModel",null!==(a=null==s.changes[n.id]?null:s.changes[n.id].bookable)&&void 0!==a?a:t)}}function ye(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",15)(1,"div",16)(2,"app-icon"),e._uU(3,"warning"),e.qZA()(),e.TgZ(4,"button",17),e.NdJ("click",function(){const a=e.CHM(t).row,r=e.oxw();return e.KtG(r.removeDesk(a))}),e.TgZ(5,"app-icon"),e._uU(6,"delete"),e.qZA()(),e.TgZ(7,"button",18),e.NdJ("click",function(){const a=e.CHM(t).row,r=e.oxw();return e.KtG(r.loadQrCode(a))}),e.TgZ(8,"app-icon"),e._uU(9,"qr_code"),e.qZA()(),e.TgZ(10,"mat-menu",null,19)(12,"div",20),e._UZ(13,"img",21),e.qZA(),e.TgZ(14,"div",22)(15,"button",23),e._uU(16," Print QR Code "),e.qZA()()()()}if(2&o){const t=i.row,n=e.MAs(11),s=e.oxw();e.xp6(1),e.ekj("opacity-0",!s.changes[t.id]),e.xp6(6),e.Q6J("matMenuTriggerFor",n),e.xp6(6),e.Q6J("src",t.qr_code,e.LSH)}}function we(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",24)(1,"p",25),e._uU(2),e.qZA(),e.TgZ(3,"div",26)(4,"button",27),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.save())}),e._uU(5," Save Changes "),e.qZA()()()}if(2&o){const t=e.oxw();e.xp6(2),e.hij(" ",t.changed," Desk(s) with unsaved changes ")}}function Ae(o,i){if(1&o&&(e.TgZ(0,"div",28),e._UZ(1,"mat-spinner",29),e.TgZ(2,"p"),e._uU(3),e.qZA()()),2&o){const t=e.oxw();e.xp6(3),e.Oqu(t.loading)}}function Je(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",30)(1,"div",31)(2,"div",32),e._uU(3," Drop CSV file to add desks "),e.qZA()(),e.TgZ(4,"input",33),e.NdJ("change",function(s){e.CHM(t);const a=e.oxw();return e.KtG(a.loadCSVData(s))}),e.qZA()()}}const Ue=function(){return["map_id","bookable","name","groups","features","actions"]},Oe=function(){return["ID","Bookable","Name","Groups","Features"," "]},Ne=function(){return["8r","6r","12r","flex","16r","10r"]},je=function(o,i,t,n,s,a){return{map_id:o,name:i,bookable:t,groups:n,features:s,actions:a}},Fe=[{path:"",component:ee,children:[{path:"events",component:me},{path:"map",component:fe},{path:"manage",component:(()=>{class o extends d.KG{constructor(t,n,s){super(),this._state=t,this._org=n,this._dialog=s,this.changes={},this.dragging=!1,this.filters=this._state.filters,this.desks=(0,ve.aj)([this._state.desks,this._state.new_desks]).pipe((0,be.U)(([a,r])=>a.concat(r)))}get changed(){return(Object.keys(this.changes).length||0)+(this._state.new_desk_count||0)}setRowValue(t,n,s){this.changes[t]||(this.changes[t]={}),this.changes[t][n]=s}removeDesk(t){var n=this;return(0,m.Z)(function*(){const s=yield(0,d._5)({title:"Remove desk",content:`Remove desk ${t.name}?`,icon:{content:"delete"}},n._dialog);if("done"!==s.reason)return;s.close();const r=(yield n.desks.pipe((0,b.q)(1)).toPromise()).filter(g=>g.id!==t.id),c=yield n.filters.pipe((0,b.q)(1)).toPromise(),p=n._org.levelWithID(c.zones);n.loading="Removing desk...",yield(0,J.Ymr)(p.id,{name:"desks",description:"desks",details:r}).toPromise().catch(g=>{throw n.loading="",(0,d.cB)(`Error saving desk data. Error: ${g.message||g}`),g}),(0,d.t5)("Successfully updated desks"),n.loading="",n.changes={}})()}save(){var t=this;return(0,m.Z)(function*(){t.loading="Saving changes to desks...";const n=yield t.desks.pipe((0,b.q)(1)).toPromise(),s=(0,d.Tw)(n.map(c=>new f.nk({...c,...t.changes[c.id]||{}}).toJSON()),"id"),a=yield t.filters.pipe((0,b.q)(1)).toPromise(),r=t._org.levelWithID(a.zones);yield(0,J.Ymr)(r.id,{name:"desks",description:"desks",details:s}).toPromise().catch(c=>{throw t.loading="",(0,d.cB)(`Error saving desk data. Error: ${c.message||c}`),c}),(0,d.t5)("Successfully updated desks"),t._state.clearNewDesks(),t.loading="",t.changes={}})()}loadQrCode(t){t.qr_code=(0,ke.w)(`${location.origin}/workplace/#/book/code?checkin=${encodeURIComponent(t.id)}`)}loadCSVData(t){var n=this;return(0,m.Z)(function*(){n.loading="Loading CSV file...",n.dragging=!1;const s=yield(0,d.fT)(t).catch(([a,r])=>{throw(0,d.cB)(a),r});try{const a=(0,d.n5)(s)||[];n._state.addDesks(a.map(r=>new f.nk({...r,id:r.id||`desk-${(0,d.Iy)(999999)}`})))}catch(a){console.error(a)}n.loading=""})()}handleDrag(t,n){this.dragging="enter"===t}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(v.H),e.Y36(f.w7),e.Y36(Ce.uw))},o.\u0275cmp=e.Xpm({type:o,selectors:[["desks-manage"]],features:[e.qOj],decls:15,vars:26,consts:[[1,"w-full","h-full","overflow-auto","relative",3,"dragenter","dragend"],[1,"min-w-[72rem]","block",3,"dataSource","filter","columns","display_column","column_size","template","pagination","page_size","empty"],["list_edit_template",""],["text_edit_template",""],["bookable_edit_template",""],["action_template",""],["class","fixed bottom-2 left-1/2 transform -translate-x-1/2 p-4 rounded bg-white shadow",4,"ngIf"],["class","absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-white bg-opacity-60",4,"ngIf"],["class","absolute inset-0 bg-black/60 flex items-center justify-center",4,"ngIf"],["hide-outline","",1,"w-full",3,"placeholder","name","ngModel","ngModelChange"],["hide-outline","",1,"w-full","h-12"],["appearance","outline",1,"h-12","w-full"],["matInput","",3,"placeholder","name","ngModel","ngModelChange"],[1,"flex","items-center","justify-center","pl-4"],[3,"ngModel","ngModelChange"],[1,"flex","items-center","justify-end","space-x-2"],["matTooltip","Desk has unsaved changes",1,"p-2","text-2xl","text-pending"],["mat-icon-button","",3,"click"],["mat-icon-button","",3,"matMenuTriggerFor","click"],["menu","matMenu"],[1,"p-2","mx-4","my-2","rounded-lg","border","border-black"],[1,"w-48",3,"src"],["mat-menu-item","",1,"underline"],["mat-button","",1,"w-full"],[1,"fixed","bottom-2","left-1/2","transform","-translate-x-1/2","p-4","rounded","bg-white","shadow"],[1,"mb-2","text-xl"],[1,"flex","items-center","justify-center"],["save","","mat-button","",3,"click"],[1,"absolute","inset-0","flex","flex-col","items-center","justify-center","space-y-2","bg-white","bg-opacity-60"],["diameter","32"],[1,"absolute","inset-0","bg-black/60","flex","items-center","justify-center"],[1,"bg-white","p-4","rounded","shadow"],[1,"border-4","border-gray-300","border-dashed","rounded","flex","flex-col","items-center","justify-center","w-64","h-64"],["type","file",1,"absolute","inset-0","opacity-0",3,"change"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0),e.NdJ("dragenter",function(a){return n.handleDrag("enter",a)})("dragend",function(a){return n.handleDrag("end",a)},!1,e.Jf7),e._UZ(1,"custom-table",1),e.ALo(2,"async"),e.ALo(3,"async"),e.YNc(4,Me,1,3,"ng-template",null,2,e.W1O),e.YNc(6,De,3,3,"ng-template",null,3,e.W1O),e.YNc(8,xe,2,1,"ng-template",null,4,e.W1O),e.YNc(10,ye,17,4,"ng-template",null,5,e.W1O),e.YNc(12,we,6,1,"div",6),e.YNc(13,Ae,4,1,"div",7),e.YNc(14,Je,5,0,"div",8),e.qZA()),2&t){const s=e.MAs(5),a=e.MAs(7),r=e.MAs(9),c=e.MAs(11);let p,g;e.xp6(1),e.Q6J("dataSource",n.desks)("filter",null==(p=e.lcZ(2,12,n.filters))?null:p.search)("columns",e.DdM(16,Ue))("display_column",e.DdM(17,Oe))("column_size",e.DdM(18,Ne))("template",e.HTZ(19,je,a,a,r,s,s,c))("pagination",!0)("page_size",30)("empty",null!=(g=e.lcZ(3,14,n.filters))&&g.search?"No matching desks":"No desks for selected level"),e.xp6(11),e.Q6J("ngIf",n.changed>0),e.xp6(1),e.Q6J("ngIf",n.loading),e.xp6(1),e.Q6J("ngIf",n.dragging)}},dependencies:[u.O5,_.Fj,_.JJ,_.On,T.lW,M.KE,U.Nt,O.oG,k.VK,k.OP,k.p6,y.gM,Ze.Ou,Te.q9,w.o,A.C,u.Ov]}),o})()},{path:"**",redirectTo:"events"}]},{path:"**",redirectTo:"events"}];let Ye=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.ez,_.u5,Z.Nh,_.UX,Y.v,C.P2,F.Fk,M.lN,O.p9,U.c,h.Bz.forChild(Fe)]}),o})()}}]);
//# sourceMappingURL=apps_concierge_src_app_desks_desks_module_ts.js.map