"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_desks_desks_module_ts"],{4655:(Ye,Z,r)=>{r.r(Z),r.d(Z,{DesksModule:()=>Fe});var p=r(6362),g=r(587),_=r(9481),F=r(8390),x=r(2379),b=r(6125),Y=r(2656),c=r(3294),k=r(9519),e=r(3184),P=r(4945),m=r(4929),Q=r(5670),v=r(3910),h=r(3619),y=r(4099),T=r(4770),L=r(1434),I=r(1130),M=r(7317),z=r(9396),H=r(8441);function B(s,a){1&s&&(e.TgZ(0,"mat-option",9),e._uU(1,"All Levels"),e.qZA())}function S(s,a){if(1&s&&(e.TgZ(0,"mat-option",10),e._uU(1),e.qZA()),2&s){const t=a.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.display_name||t.name," ")}}function q(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"button",11),e.NdJ("click",function(){return e.CHM(t),e.oxw().newDesk()}),e._uU(1,"New Desk"),e.qZA()}}function G(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"button",12),e._uU(1," Upload CSV "),e.TgZ(2,"input",13),e.NdJ("change",function(o){return e.CHM(t),e.oxw().loadCSVData(o)}),e.qZA()()}}let V=(()=>{class s extends c.KG{constructor(t,n,o,i){super(),this._desks=t,this._org=n,this._route=o,this._router=i,this.levels=this._org.active_levels,this.filters=this._desks.filters,this.manage=!1,this.is_map=!1,this.setDate=l=>this._desks.setFilters({date:l}),this.setFilters=l=>this._desks.setFilters(l),this.updateZones=l=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:l.join(",")},queryParamsHandling:"merge"}),this._desks.setFilters({zones:l})}}ngOnInit(){return(0,m.mG)(this,void 0,void 0,function*(){yield this._org.initialised.pipe((0,Q.P)(t=>t)).toPromise(),this.subscription("route.query",this._route.queryParamMap.subscribe(t=>{if(t.has("zone_ids")){const n=t.get("zone_ids").split(",");if(n.length){this.updateZones(n);const o=this._org.levelWithID(n);if(!o)return;this._org.building=this._org.buildings.find(i=>i.id===o.parent_id)}}t.has("date")&&this.setDate(new Date(+t.get("date"))),t.has("approve")?this.approve(t.get("approve")):t.has("reject")&&this.reject(t.get("reject")),this.manage=this._router.url.includes("manage"),this.is_map=this._router.url.includes("map")})),this.subscription("levels",this._org.active_levels.subscribe(t=>(0,m.mG)(this,void 0,void 0,function*(){var n;const o=yield this.filters.pipe((0,v.q)(1)).toPromise(),i=(null===(n=null==o?void 0:o.zones)||void 0===n?void 0:n.filter(l=>t.find(d=>d.id===l)||"All"===l))||[];!i.length&&t.length&&i.push(t[0].id),this.updateZones(i)}))),this.manage=this._router.url.includes("manage"),this.is_map=this._router.url.includes("map")})}newDesk(){this._desks.addDesks([new h.nk({id:`desk-${(0,c.Iy)(999999)}`})]),(0,c.t5)("New desk added to local data. Make sure to save the desk before using it.")}loadCSVData(t){return(0,m.mG)(this,void 0,void 0,function*(){const n=yield(0,c.fT)(t).catch(([o,i])=>{throw(0,c.cB)(o),i});try{const o=(0,c.n5)(n)||[];this._desks.addDesks(o.map(i=>new h.nk(Object.assign(Object.assign({},i),{id:i.id||`desk-${(0,c.Iy)(999999)}`}))))}catch(o){console.error(o)}})}approve(t){return(0,m.mG)(this,void 0,void 0,function*(){const n=yield(0,y.Fo)(t).toPromise();n&&this._desks.approveDesk(n)})}reject(t){return(0,m.mG)(this,void 0,void 0,function*(){const n=yield(0,y.Fo)(t).toPromise();n&&this._desks.rejectDesk(n)})}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(k.H),e.Y36(h.w7),e.Y36(_.gz),e.Y36(_.F0))},s.\u0275cmp=e.Xpm({type:s,selectors:[["desks-topbar"]],features:[e.qOj],decls:13,vars:14,consts:[["appearance","outline"],["placeholder","All Levels",3,"ngModel","ngModelChange"],["value","All",4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],["mat-button","","class","mx-2 w-32",3,"click",4,"ngIf"],["mat-button","","class","relative w-32",4,"ngIf"],[1,"flex-1","w-2"],[1,"mr-2",3,"model","modelChange"],[3,"dateChange"],["value","All"],[3,"value"],["mat-button","",1,"mx-2","w-32",3,"click"],["mat-button","",1,"relative","w-32"],["type","file",1,"absolute","inset-0","opacity-0",3,"change"]],template:function(t,n){if(1&t&&(e.TgZ(0,"mat-form-field",0)(1,"mat-select",1),e.NdJ("ngModelChange",function(i){return n.updateZones([i])}),e.ALo(2,"async"),e.ALo(3,"async"),e.YNc(4,B,2,0,"mat-option",2),e.YNc(5,S,2,2,"mat-option",3),e.ALo(6,"async"),e.qZA()(),e.YNc(7,q,2,0,"button",4),e.YNc(8,G,3,0,"button",5),e._UZ(9,"div",6),e.TgZ(10,"searchbar",7),e.NdJ("modelChange",function(i){return n.setFilters({search:i})}),e.ALo(11,"async"),e.qZA(),e.TgZ(12,"date-options",8),e.NdJ("dateChange",function(i){return n.setDate(i)}),e.qZA()),2&t){let o;e.xp6(1),e.Q6J("ngModel",e.lcZ(2,6,n.filters).zones?e.lcZ(3,8,n.filters).zones[0]:"All"),e.xp6(3),e.Q6J("ngIf",!n.is_map),e.xp6(1),e.Q6J("ngForOf",e.lcZ(6,10,n.levels)),e.xp6(2),e.Q6J("ngIf",n.manage),e.xp6(1),e.Q6J("ngIf",n.manage),e.xp6(2),e.Q6J("model",null==(o=e.lcZ(11,12,n.filters))?null:o.search)}},directives:[T.KE,L.gD,g.JJ,g.On,p.O5,I.ey,p.sg,M.lW,z.U,H.E],pipes:[p.Ov],styles:["[_nghost-%COMP%]{display:flex;align-items:center;background-color:#fff;height:5em;padding:0 1em;border-bottom:1px solid #ccc}[_nghost-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin-left:.5rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n/*# sourceMappingURL=desks-topbar.component.ts-angular-inline--70.css.map*/"]}),s})();var E=r(833);const R=["app-desks",""];function W(s,a){1&s&&e._UZ(0,"mat-progress-bar",7)}const $=function(){return["/desks","events"]},K=function(){return["/desks","map"]},X=function(){return["/desks","manage"]};let ee=(()=>{class s extends c.KG{constructor(t,n){super(),this._state=t,this._router=n,this.loading=this._state.loading}ngOnInit(){var t;this._state.startPolling(),this.subscription("router.events",this._router.events.subscribe(o=>{var i;if(o instanceof _.m2){const l=(null===(i=this._router.url)||void 0===i?void 0:i.split("/"))||[""];this.path=l[n.length-1].split("?")[0]}}));const n=(null===(t=this._router.url)||void 0===t?void 0:t.split("/"))||[""];this.path=n[n.length-1].split("?")[0]}ngOnDestroy(){super.ngOnDestroy(),this._state.stopPolling()}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(k.H),e.Y36(_.F0))},s.\u0275cmp=e.Xpm({type:s,selectors:[["","app-desks",""]],features:[e.qOj],attrs:R,decls:15,vars:12,consts:[[1,"relative","overflow-hidden","flex-1","flex","flex-col"],[1,"w-full"],[1,"dark"],["mat-tab-nav-bar",""],["mat-tab-link","","queryParamsHandling","merge",3,"routerLink","active"],[1,"flex-1","h-1/2","w-full","relative","overflow-auto"],["class","w-full","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"w-full"]],template:function(t,n){1&t&&(e._UZ(0,"sidebar"),e.TgZ(1,"main",0),e._UZ(2,"desks-topbar",1),e.TgZ(3,"div",2)(4,"nav",3)(5,"a",4),e._uU(6," Bookings "),e.qZA(),e.TgZ(7,"a",4),e._uU(8," Map View "),e.qZA(),e.TgZ(9,"a",4),e._uU(10," Manage Desks "),e.qZA()()(),e.TgZ(11,"div",5),e._UZ(12,"router-outlet"),e.qZA(),e.YNc(13,W,1,0,"mat-progress-bar",6),e.ALo(14,"async"),e.qZA()),2&t&&(e.xp6(5),e.Q6J("routerLink",e.DdM(9,$))("active","events"===n.path),e.xp6(2),e.Q6J("routerLink",e.DdM(10,K))("active","map"===n.path),e.xp6(2),e.Q6J("routerLink",e.DdM(11,X))("active","manage"===n.path),e.xp6(4),e.Q6J("ngIf",e.lcZ(14,7,n.loading)))},directives:[P.k,V,x.BU,_.yS,x.Nj,_.lC,p.O5,E.pW],pipes:[p.Ov],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;background:var(--bg)}\n/*# sourceMappingURL=desks.component.ts-angular-inline--68.css.map*/"]}),s})();var D=r(1110),te=r(1637),w=r(89),A=r(5306),f=r(2796);function ne(s,a){if(1&s&&(e._uU(0),e.ALo(1,"date"),e.ALo(2,"date")),2&s){const t=a.data;e.AsE(" ",e.lcZ(1,2,t)," at ",e.xi3(2,4,t,"shortTime")," ")}}function se(s,a){if(1&s&&e._uU(0),2&s){const t=a.row;e.hij(" ",t.user_name||t.user_email||t.booked_by_name||t.booked_by_email," ")}}function oe(s,a){if(1&s&&(e.TgZ(0,"span",10),e._uU(1),e.qZA()),2&s){const t=a.data;e.ekj("bg-success","approved"===t)("bg-pending","tentative"===t)("bg-error","cancelled"===t||"declined"===t),e.xp6(1),e.hij(" ",t," ")}}function ie(s,a){1&s&&e._uU(0),2&s&&e.hij(" ",a.data?"Yes":"No"," ")}function ae(s,a){1&s&&(e.TgZ(0,"app-icon"),e._uU(1," qr_code "),e.qZA())}function re(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"div",11)(1,"action-icon",12),e.NdJ("click",function(){const i=e.CHM(t).row;return e.oxw().checkin(i)}),e._uU(2,"how_to_reg"),e.qZA(),e.TgZ(3,"button",13),e.NdJ("click",function(){const i=e.CHM(t).row;return e.oxw().approve(i)}),e.TgZ(4,"app-icon"),e._uU(5,"event_available"),e.qZA()(),e.TgZ(6,"button",14),e.NdJ("click",function(){const i=e.CHM(t).row;return e.oxw().reject(i)}),e.TgZ(7,"app-icon"),e._uU(8,"event_busy"),e.qZA()(),e.TgZ(9,"button",15),e.YNc(10,ae,2,0,"app-icon",16),e.qZA(),e.TgZ(11,"mat-menu",null,8)(13,"div",17),e._UZ(14,"img",18),e.qZA(),e.TgZ(15,"div",19)(16,"button",20),e._uU(17," Print QR Code "),e.qZA()()()()}if(2&s){const t=a.row,n=e.MAs(12);e.xp6(9),e.Q6J("disabled",!(null!=t.extension_data&&t.extension_data.checkin_qr_code))("matMenuTriggerFor",n),e.xp6(1),e.Q6J("ngIf",null==t.extension_data?null:t.extension_data.checkin_qr_code),e.xp6(4),e.Q6J("src",null==t.extension_data?null:t.extension_data.checkin_qr_code,e.LSH)}}const le=function(){return["user_name","group","date","status","approver_name","checked_in","access","actions"]},ce=function(){return["Person","Group","Date","Status","Approver","Checked In","Access"," "]},de=function(){return["flex","","12r","","10r","","","12r"]},pe=function(s,a,t,n,o,i){return{user_name:s,date:a,status:t,checked_in:n,access:o,actions:i}};let me=(()=>{class s{constructor(t){this._state=t,this.filters=this._state.filters,this.bookings=this._state.bookings,this.rejectAll=()=>this._state.rejectAllDesks(),this.checkin=n=>this.runMethod("checkin",()=>(0,m.mG)(this,void 0,void 0,function*(){return this._state.checkinDesk(n)})),this.approve=n=>this.runMethod("approve",()=>(0,m.mG)(this,void 0,void 0,function*(){return this._state.approveDesk(n)})),this.reject=n=>this.runMethod("reject",()=>(0,m.mG)(this,void 0,void 0,function*(){return this._state.rejectDesk(n)}))}runMethod(t,n){return(0,m.mG)(this,void 0,void 0,function*(){this.loading=t,yield n().catch(o=>null),this.loading=""})}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(k.H))},s.\u0275cmp=e.Xpm({type:s,selectors:[["desk-bookings"]],decls:21,vars:22,consts:[[1,"overflow-auto","h-full","w-full"],[1,"min-w-[76rem]",3,"dataSource","filter","columns","display_column","column_size","template","empty"],["date_template",""],["user_template",""],["status_template",""],["bool_template",""],["action_template",""],["mat-icon-button","",1,"absolute","bottom-2","right-2","bg-white","shadow",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"capitalize","text-white","px-2","py-1","rounded","border","border-gray-200"],[1,"flex","items-center","justify-end","space-x-2"],[3,"click"],["mat-icon-button","","matTooltip","Approve Desk",3,"click"],["mat-icon-button","","matTooltip","Reject Desk",3,"click"],["mat-icon-button","","matTooltip","View Desk QR code",3,"disabled","matMenuTriggerFor"],[4,"ngIf"],[1,"p-2","mx-4","my-2","rounded-lg","border","border-black"],[1,"w-48",3,"src"],["mat-menu-item","",1,"underline"],["mat-button","",1,"w-full"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0),e._UZ(1,"custom-table",1),e.ALo(2,"async"),e.ALo(3,"async"),e.YNc(4,ne,3,7,"ng-template",null,2,e.W1O),e.YNc(6,se,1,1,"ng-template",null,3,e.W1O),e.YNc(8,oe,2,7,"ng-template",null,4,e.W1O),e.YNc(10,ie,1,1,"ng-template",null,5,e.W1O),e.YNc(12,re,18,4,"ng-template",null,6,e.W1O),e.qZA(),e.TgZ(14,"button",7)(15,"app-icon"),e._uU(16,"more_vert"),e.qZA()(),e.TgZ(17,"mat-menu",null,8)(19,"button",9),e.NdJ("click",function(){return n.rejectAll()}),e._uU(20,"Reject All"),e.qZA()()),2&t){const o=e.MAs(5),i=e.MAs(7),l=e.MAs(9),d=e.MAs(11),u=e.MAs(13),C=e.MAs(18);let N,j;e.xp6(1),e.Q6J("dataSource",n.bookings)("filter",null==(N=e.lcZ(2,8,n.filters))?null:N.search)("columns",e.DdM(12,le))("display_column",e.DdM(13,ce))("column_size",e.DdM(14,de))("template",e.HTZ(15,pe,i,o,l,d,d,u))("empty",null!=(j=e.lcZ(3,10,n.filters))&&j.search?"No matching desk bookings":"There are no desk booking for the currently selected date."),e.xp6(13),e.Q6J("matMenuTriggerFor",C)}},directives:[D.C,te.m,M.lW,w.gM,A.o,f.p6,p.O5,f.VK,f.OP],pipes:[p.Ov,p.uU],styles:["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;height:100%;width:100%}\n/*# sourceMappingURL=desk-bookings.component.ts-angular-inline--69.css.map*/"]}),s})();var ue=r(9136),ge=r(8461),_e=r(9697);let he=(()=>{class s extends c.KG{constructor(t,n,o,i){super(),this._state=t,this._desk=n,this._desks_state=o,this._org=i,this.url=this._state.map_url,this.styles=this._state.map_styles,this.positions=this._state.map_positions,this.actions=this._state.map_actions,this.features=this._state.map_features,this.setHost=l=>this._desks_state.setOptions({host:l})}ngOnInit(){this.subscription("desk_polling",this._desks_state.startPolling()),this.subscription("date",this._desk.filters.subscribe(t=>{const n=this._org.levelWithID(t.zones);n&&this._state.setLevel(n.id),this._desks_state.setOptions({date:t.date?new Date(t.date):new Date,zones:t.zones})}))}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(b.ck),e.Y36(k.H),e.Y36(b.Xp),e.Y36(h.w7))},s.\u0275cmp=e.Xpm({type:s,selectors:[["desk-map-view"]],features:[e._Bn([b.Xp]),e.qOj],decls:13,vars:19,consts:[["map","",1,"h-full","w-full","relative"],[3,"src","zoom","center","styles","features","actions"],[1,"absolute","bottom-0","right-0"],[1,"absolute","top-0","left-0","p-2","text-black"],["placeholder","User for bookings...",3,"ngModel","ngModelChange"],["info","",1,"absolute","bottom-0","rounded","p-2","m-2","bg-white","shadow","text-center"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"i-map",1),e.ALo(2,"async"),e.ALo(3,"async"),e.ALo(4,"async"),e.ALo(5,"async"),e.ALo(6,"async"),e.ALo(7,"async"),e._UZ(8,"explore-zoom-controls",2),e.TgZ(9,"div",3)(10,"a-user-search-field",4),e.NdJ("ngModelChange",function(i){return n.setHost(i)}),e.qZA()(),e.TgZ(11,"div",5),e._uU(12," Click/Tap an available desk to book it. "),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("src",e.lcZ(2,7,n.url))("zoom",e.lcZ(3,9,n.positions).zoom)("center",e.lcZ(4,11,n.positions).center)("styles",e.lcZ(5,13,n.styles))("features",e.lcZ(6,15,n.features))("actions",e.lcZ(7,17,n.actions)),e.xp6(9),e.Q6J("ngModel",null))},directives:[ue.p,ge.s,_e.d,g.JJ,g.On],pipes:[p.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;position:relative;height:100%;width:100%}[info][_ngcontent-%COMP%]{left:50%;transform:translate(-50%)}\n/*# sourceMappingURL=desk-map-view.component.ts-angular-inline--71.css.map*/"]}),s})();var O=r(3499),fe=r(6168),ke=r(7716),ve=r(6942),be=r(5758),Ce=r(6048),J=r(4683),U=r(1534),xe=r(4742);function Te(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"item-list-field",9),e.NdJ("ngModelChange",function(o){const i=e.CHM(t),l=i.row,d=i.key;return e.oxw().setRowValue(l.id,d,o)}),e.qZA()}if(2&s){const t=a.data,n=a.row,o=a.key,i=e.oxw();e.Q6J("placeholder","groups"===o?"User Groups":"Features")("name",o)("ngModel",(i.changes[n.id]?i.changes[n.id][o]:null)||t)}}function Me(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"div",10)(1,"mat-form-field",11)(2,"input",12),e.NdJ("ngModelChange",function(o){const i=e.CHM(t),l=i.row,d=i.key;return e.oxw().setRowValue(l.id,d,o)}),e.qZA()()()}if(2&s){const t=a.data,n=a.row,o=a.key,i=e.oxw();e.xp6(2),e.Q6J("placeholder",o)("name",o)("ngModel",(i.changes[n.id]?i.changes[n.id][o]:null)||t)}}function Ze(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"div",13)(1,"mat-checkbox",14),e.NdJ("ngModelChange",function(o){const l=e.CHM(t).row;return e.oxw().setRowValue(l.id,"bookable",o)}),e.qZA()()}if(2&s){const t=a.data,n=a.row,o=e.oxw();let i;e.xp6(1),e.Q6J("ngModel",null!==(i=null==o.changes[n.id]?null:o.changes[n.id].bookable)&&void 0!==i?i:t)}}function ye(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"div",15)(1,"div",16)(2,"app-icon"),e._uU(3,"warning"),e.qZA()(),e.TgZ(4,"button",17),e.NdJ("click",function(){const i=e.CHM(t).row;return e.oxw().removeDesk(i)}),e.TgZ(5,"app-icon"),e._uU(6,"delete"),e.qZA()(),e.TgZ(7,"button",18),e.NdJ("click",function(){const i=e.CHM(t).row;return e.oxw().loadQrCode(i)}),e.TgZ(8,"app-icon"),e._uU(9,"qr_code"),e.qZA()(),e.TgZ(10,"mat-menu",null,19)(12,"div",20),e._UZ(13,"img",21),e.qZA(),e.TgZ(14,"div",22)(15,"button",23),e._uU(16," Print QR Code "),e.qZA()()()()}if(2&s){const t=a.row,n=e.MAs(11),o=e.oxw();e.xp6(1),e.ekj("opacity-0",!o.changes[t.id]),e.xp6(6),e.Q6J("matMenuTriggerFor",n),e.xp6(6),e.Q6J("src",t.qr_code,e.LSH)}}function De(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"div",24)(1,"p",25),e._uU(2),e.qZA(),e.TgZ(3,"div",26)(4,"button",27),e.NdJ("click",function(){return e.CHM(t),e.oxw().save()}),e._uU(5," Save Changes "),e.qZA()()()}if(2&s){const t=e.oxw();e.xp6(2),e.hij(" ",t.changed," Desk(s) with unsaved changes ")}}function we(s,a){if(1&s&&(e.TgZ(0,"div",28),e._UZ(1,"mat-spinner",29),e.TgZ(2,"p"),e._uU(3),e.qZA()()),2&s){const t=e.oxw();e.xp6(3),e.Oqu(t.loading)}}function Ae(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"div",30)(1,"div",31)(2,"div",32),e._uU(3," Drop CSV file to add desks "),e.qZA()(),e.TgZ(4,"input",33),e.NdJ("change",function(o){return e.CHM(t),e.oxw().loadCSVData(o)}),e.qZA()()}}const Oe=function(){return["map_id","bookable","name","groups","features","actions"]},Je=function(){return["ID","Bookable","Name","Groups","Features"," "]},Ue=function(){return["8r","6r","12r","flex","16r","10r"]},Ne=function(s,a,t,n,o,i){return{map_id:s,name:a,bookable:t,groups:n,features:o,actions:i}},je=[{path:"",component:ee,children:[{path:"events",component:me},{path:"map",component:he},{path:"manage",component:(()=>{class s extends c.KG{constructor(t,n,o){super(),this._state=t,this._org=n,this._dialog=o,this.changes={},this.dragging=!1,this.filters=this._state.filters,this.desks=(0,ke.aj)([this._state.desks,this._state.new_desks]).pipe((0,ve.U)(([i,l])=>i.concat(l)))}get changed(){return Object.keys(this.changes).length+this._state.new_desk_count}setRowValue(t,n,o){this.changes[t]||(this.changes[t]={}),this.changes[t][n]=o}removeDesk(t){return(0,m.mG)(this,void 0,void 0,function*(){const n=yield(0,c._5)({title:"Remove desk",content:`Remove desk ${t.name}?`,icon:{content:"delete"}},this._dialog);if("done"!==n.reason)return;n.close();const i=(yield this.desks.pipe((0,v.q)(1)).toPromise()).filter(u=>u.id!==t.id),l=yield this.filters.pipe((0,v.q)(1)).toPromise(),d=this._org.levelWithID(l.zones);this.loading="Removing desk...",yield(0,O.Ymr)(d.id,{name:"desks",description:"desks",details:i}).toPromise().catch(u=>{throw this.loading="",(0,c.cB)(`Error saving desk data. Error: ${u.message||u}`),u}),(0,c.t5)("Successfully updated desks"),this.loading="",this.changes={}})}save(){return(0,m.mG)(this,void 0,void 0,function*(){this.loading="Saving changes to desks...";const t=yield this.desks.pipe((0,v.q)(1)).toPromise(),n=(0,c.Tw)(t.map(l=>new h.nk(Object.assign(Object.assign({},l),this.changes[l.id]||{})).toJSON()),"id"),o=yield this.filters.pipe((0,v.q)(1)).toPromise(),i=this._org.levelWithID(o.zones);yield(0,O.Ymr)(i.id,{name:"desks",description:"desks",details:n}).toPromise().catch(l=>{throw this.loading="",(0,c.cB)(`Error saving desk data. Error: ${l.message||l}`),l}),(0,c.t5)("Successfully updated desks"),this._state.clearNewDesks(),this.loading="",this.changes={}})}loadQrCode(t){t.qr_code=(0,fe.w)(`${location.origin}/workplace/#/book/code?checkin=${encodeURIComponent(t.id)}`)}loadCSVData(t){return(0,m.mG)(this,void 0,void 0,function*(){this.loading="Loading CSV file...",this.dragging=!1;const n=yield(0,c.fT)(t).catch(([o,i])=>{throw(0,c.cB)(o),i});try{const o=(0,c.n5)(n)||[];this._state.addDesks(o.map(i=>new h.nk(Object.assign(Object.assign({},i),{id:i.id||`desk-${(0,c.Iy)(999999)}`}))))}catch(o){console.error(o)}this.loading=""})}handleDrag(t,n){this.dragging="enter"===t}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(k.H),e.Y36(h.w7),e.Y36(be.uw))},s.\u0275cmp=e.Xpm({type:s,selectors:[["desks-manage"]],features:[e.qOj],decls:15,vars:26,consts:[[1,"w-full","h-full","overflow-auto","relative",3,"dragenter","dragend"],[1,"min-w-[72rem]","block",3,"dataSource","filter","columns","display_column","column_size","template","pagination","page_size","empty"],["list_edit_template",""],["text_edit_template",""],["bookable_edit_template",""],["action_template",""],["class","fixed bottom-2 left-1/2 transform -translate-x-1/2 p-4 rounded bg-white shadow",4,"ngIf"],["class","absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-white bg-opacity-60",4,"ngIf"],["class","absolute inset-0 bg-black/60 flex items-center justify-center",4,"ngIf"],["hide-outline","",1,"w-full",3,"placeholder","name","ngModel","ngModelChange"],["hide-outline","",1,"w-full","h-12"],["appearance","outline",1,"h-12","w-full"],["matInput","",3,"placeholder","name","ngModel","ngModelChange"],[1,"flex","items-center","justify-center","pl-4"],[3,"ngModel","ngModelChange"],[1,"flex","items-center","justify-end","space-x-2"],["matTooltip","Desk has unsaved changes",1,"p-2","text-2xl","text-pending"],["mat-icon-button","",3,"click"],["mat-icon-button","",3,"matMenuTriggerFor","click"],["menu","matMenu"],[1,"p-2","mx-4","my-2","rounded-lg","border","border-black"],[1,"w-48",3,"src"],["mat-menu-item","",1,"underline"],["mat-button","",1,"w-full"],[1,"fixed","bottom-2","left-1/2","transform","-translate-x-1/2","p-4","rounded","bg-white","shadow"],[1,"mb-2","text-xl"],[1,"flex","items-center","justify-center"],["save","","mat-button","",3,"click"],[1,"absolute","inset-0","flex","flex-col","items-center","justify-center","space-y-2","bg-white","bg-opacity-60"],["diameter","32"],[1,"absolute","inset-0","bg-black/60","flex","items-center","justify-center"],[1,"bg-white","p-4","rounded","shadow"],[1,"border-4","border-gray-300","border-dashed","rounded","flex","flex-col","items-center","justify-center","w-64","h-64"],["type","file",1,"absolute","inset-0","opacity-0",3,"change"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0),e.NdJ("dragenter",function(i){return n.handleDrag("enter",i)})("dragend",function(i){return n.handleDrag("end",i)},!1,e.Jf7),e._UZ(1,"custom-table",1),e.ALo(2,"async"),e.ALo(3,"async"),e.YNc(4,Te,1,3,"ng-template",null,2,e.W1O),e.YNc(6,Me,3,3,"ng-template",null,3,e.W1O),e.YNc(8,Ze,2,1,"ng-template",null,4,e.W1O),e.YNc(10,ye,17,4,"ng-template",null,5,e.W1O),e.YNc(12,De,6,1,"div",6),e.YNc(13,we,4,1,"div",7),e.YNc(14,Ae,5,0,"div",8),e.qZA()),2&t){const o=e.MAs(5),i=e.MAs(7),l=e.MAs(9),d=e.MAs(11);let u,C;e.xp6(1),e.Q6J("dataSource",n.desks)("filter",null==(u=e.lcZ(2,12,n.filters))?null:u.search)("columns",e.DdM(16,Oe))("display_column",e.DdM(17,Je))("column_size",e.DdM(18,Ue))("template",e.HTZ(19,Ne,i,i,l,o,o,d))("pagination",!0)("page_size",30)("empty",null!=(C=e.lcZ(3,14,n.filters))&&C.search?"No matching desks":"No desks for selected level"),e.xp6(11),e.Q6J("ngIf",n.changed>0),e.xp6(1),e.Q6J("ngIf",n.loading),e.xp6(1),e.Q6J("ngIf",n.dragging)}},directives:[D.C,Ce.q9,g.JJ,g.On,T.KE,J.Nt,g.Fj,U.oG,w.gM,A.o,M.lW,f.p6,f.VK,f.OP,p.O5,xe.Ou],pipes:[p.Ov],styles:[""]}),s})()},{path:"**",redirectTo:"events"}]},{path:"**",redirectTo:"events"}];let Fe=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[p.ez,g.u5,x.Nh,g.UX,Y.v,b.P2,F.Fk,T.lN,U.p9,J.c,_.Bz.forChild(je)]]}),s})()}}]);
//# sourceMappingURL=apps_concierge_src_app_desks_desks_module_ts.js.map