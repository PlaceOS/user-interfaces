(self.webpackChunkplaceos=self.webpackChunkplaceos||[]).push([["apps_concierge_src_app_desks_desks_module_ts"],{6461:(e,t,s)=>{"use strict";s.r(t),s.d(t,{DesksModule:()=>K});var n=s(1511),i=s(6073),o=s(6898),l=s(4810),a=s(787),r=s(2619),c=s(5633),u=s(1490),d=s(4762),p=s(3530),g=s(611),h=s(8223),f=s(6839),_=s(9294),m=s(6283),Z=s(4786),k=s(1522),v=s(1521),A=s(5980);function x(e,t){if(1&e&&(r.TgZ(0,"mat-option",7),r._uU(1),r.qZA()),2&e){const e=t.$implicit;r.Q6J("value",e.id),r.xp6(1),r.hij(" ",e.display_name||e.name," ")}}const q=function(){return["/desks"]},w=function(e){return{show_map:e}};function b(e,t){if(1&e){const e=r.EpF();r.TgZ(0,"a",8),r.NdJ("click",function(){return r.CHM(e),r.oxw().toggleMapShow()}),r.ALo(1,"async"),r._uU(2),r.ALo(3,"async"),r.qZA()}if(2&e){const e=r.oxw();let t,s;r.Q6J("routerLink",r.DdM(7,q))("queryParams",r.VKq(8,w,!(null!=(t=r.lcZ(1,3,e.filters))&&t.show_map))),r.xp6(2),r.hij(" ",null!=(s=r.lcZ(3,5,e.filters))&&s.show_map?"Show List View":"Show Map View"," ")}}const y=function(){return[]};let T=(()=>{class e extends h.KG{constructor(e,t,s,n){super(),this._desks=e,this._org=t,this._route=s,this._router=n,this.levels=this._org.active_levels,this.filters=this._desks.filters,this.toggleMapShow=()=>{this._desks.setFilters({show_map:!this.show_map}),this.show_map=!this.show_map},this.setDate=e=>this._desks.setFilters({date:e}),this.updateZones=e=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:e.join(",")},queryParamsHandling:"merge"}),this._desks.setFilters({zones:e})}}ngOnInit(){return(0,d.mG)(this,void 0,void 0,function*(){yield this._org.initialised.pipe((0,p.P)(e=>e)).toPromise(),this.subscription("route.query",this._route.queryParamMap.subscribe(e=>{if(e.has("zone_ids")){const t=e.get("zone_ids").split(",");if(t.length){const e=this._org.levelWithID(t);if(!e)return;this._org.building=this._org.buildings.find(t=>t.id===e.parent_id),this.updateZones(t)}}e.has("date")&&this.setDate(new Date(+e.get("date"))),e.has("approve")?this.approve(e.get("approve")):e.has("reject")&&this.reject(e.get("reject")),this.show_map=e.has("show_map")&&"true"===e.get("show_map"),this._desks.setFilters({show_map:this.show_map})})),this.subscription("levels",this._org.active_levels.subscribe(e=>(0,d.mG)(this,void 0,void 0,function*(){var t;const s=(null===(t=(yield this.filters.pipe((0,g.q)(1)).toPromise()).zones)||void 0===t?void 0:t.filter(t=>e.find(e=>e.id===t)||"All"===t))||[];!s.length&&e.length&&s.push(e[0].id),this.updateZones(s)})))})}approve(e){return(0,d.mG)(this,void 0,void 0,function*(){const t=yield(0,f.Fo)(e).toPromise();t&&this._desks.approveDesk(t)})}reject(e){return(0,d.mG)(this,void 0,void 0,function*(){const t=yield(0,f.Fo)(e).toPromise();t&&this._desks.rejectDesk(t)})}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(c.H),r.Y36(_.w7),r.Y36(o.gz),r.Y36(o.F0))},e.\u0275cmp=r.Xpm({type:e,selectors:[["desks-topbar"]],features:[r.qOj],decls:11,vars:10,consts:[["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],["value","All"],[3,"value",4,"ngFor","ngForOf"],["button","","mat-button","","queryParamsHandling","merge",3,"routerLink","queryParams","click",4,"ngIf"],[1,"flex-1","w-2"],[3,"dateChange"],[3,"value"],["button","","mat-button","","queryParamsHandling","merge",3,"routerLink","queryParams","click"]],template:function(e,t){1&e&&(r.TgZ(0,"mat-form-field",0),r.TgZ(1,"mat-select",1),r.NdJ("ngModelChange",function(e){return t.updateZones(e)}),r.ALo(2,"async"),r.TgZ(3,"mat-option",2),r._uU(4,"All Levels"),r.qZA(),r.YNc(5,x,2,2,"mat-option",3),r.ALo(6,"async"),r.qZA(),r.qZA(),r.YNc(7,b,4,10,"a",4),r.ALo(8,"async"),r._UZ(9,"div",5),r.TgZ(10,"date-options",6),r.NdJ("dateChange",function(e){return t.setDate(e)}),r.qZA()),2&e&&(r.xp6(1),r.Q6J("ngModel",r.lcZ(2,3,t.filters).zones||r.DdM(9,y)),r.xp6(4),r.Q6J("ngForOf",r.lcZ(6,5,t.levels)),r.xp6(2),r.Q6J("ngIf",1===(null==r.lcZ(8,7,t.filters).zones?null:r.lcZ(8,7,t.filters).zones.length)))},directives:[m.KE,Z.gD,i.JJ,i.On,k.ey,n.sg,n.O5,v.E,A.zs,o.yS],pipes:[n.Ov],styles:["[_nghost-%COMP%]{display:flex;align-items:center;background-color:#fff;height:5em;padding:0 1em;border-bottom:1px solid #ccc}[_nghost-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin-left:.5rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}"]}),e})();var O=s(9996),U=s(8055),M=s(1548),P=s(9436);let J=(()=>{class e{constructor(e){this._state=e,this.checkin=()=>this.runMethod("checkin",()=>(0,d.mG)(this,void 0,void 0,function*(){return this._state.checkinDesk(this.desk)})),this.approve=()=>this.runMethod("approve",()=>(0,d.mG)(this,void 0,void 0,function*(){return this._state.approveDesk(this.desk)})),this.reject=()=>this.runMethod("reject",()=>(0,d.mG)(this,void 0,void 0,function*(){return this._state.rejectDesk(this.desk)}))}runMethod(e,t){return(0,d.mG)(this,void 0,void 0,function*(){this.loading=e,yield t().catch(e=>null),this.loading=""})}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(c.H))},e.\u0275cmp=r.Xpm({type:e,selectors:[["desk-details"]],inputs:{desk:"desk"},decls:21,vars:19,consts:[[1,"w-32","p-2","bg"],[1,"w-32","p-2"],[1,"w-24","p-2"],["flex","",1,"p-2","flex-1","truncate"],[1,"w-32","p-2","flex","items-center"],["mat-icon-button","","content","how_to_reg",3,"loading","state","click"],["mat-icon-button","","content","event_available",3,"loading","state","click"],["mat-icon-button","","content","event_busy",3,"loading","state","click"]],template:function(e,t){1&e&&(r.TgZ(0,"div",0),r._uU(1),r.qZA(),r.TgZ(2,"div",1),r._uU(3),r.qZA(),r.TgZ(4,"div",2),r._uU(5),r.ALo(6,"date"),r.qZA(),r.TgZ(7,"div",3),r._uU(8),r.qZA(),r.TgZ(9,"div"),r._uU(10),r.qZA(),r.TgZ(11,"div",1),r._uU(12),r.qZA(),r.TgZ(13,"div",1),r._uU(14),r.qZA(),r.TgZ(15,"div",2),r._uU(16),r.qZA(),r.TgZ(17,"div",4),r.TgZ(18,"action-icon",5),r.NdJ("click",function(){return t.checkin()}),r.qZA(),r.TgZ(19,"action-icon",6),r.NdJ("click",function(){return t.approve()}),r.qZA(),r.TgZ(20,"action-icon",7),r.NdJ("click",function(){return t.reject()}),r.qZA(),r.qZA()),2&e&&(r.xp6(1),r.Oqu(null==t.desk?null:t.desk.user_name),r.xp6(2),r.Oqu(null==t.desk||null==t.desk.extension_data?null:t.desk.extension_data.group),r.xp6(2),r.Oqu(r.xi3(6,16,t.desk.date,"shortTime")),r.xp6(3),r.Oqu(null==t.desk?null:t.desk.description),r.xp6(1),r.Tol("w-24 p-2 capitalize text-red-600 "+(null==t.desk?null:t.desk.status)),r.xp6(1),r.hij(" ",null==t.desk?null:t.desk.status," "),r.xp6(2),r.Oqu(null==t.desk?null:t.desk.approver_name),r.xp6(2),r.Oqu(null!=t.desk&&t.desk.checked_in?"Yes":"No"),r.xp6(2),r.Oqu(null!=t.desk&&t.desk.access?"Yes":"No"),r.xp6(2),r.Q6J("loading","checkin"===t.loading)("state",null!=t.desk&&t.desk.checked_in?"success":""),r.xp6(1),r.Q6J("loading","approve"===t.loading)("state",null!=t.desk&&t.desk.approved?"success":""),r.xp6(1),r.Q6J("loading","reject"===t.loading)("state","declined"===(null==t.desk?null:t.desk.status)?"success":""))},directives:[P.m],pipes:[n.uU],styles:["[_nghost-%COMP%]{width:100%;display:flex;align-items:center;padding:0 .5rem;background-color:#f8f8f8;border-bottom:1px solid #ccc}[_nghost-%COMP%]:hover{background-color:#f0f0f0}.tentative[_ngcontent-%COMP%]{color:#ffa000!important}.approved[_ngcontent-%COMP%]{color:#388e3c!important}"]}),e})();var C=s(6393),L=s(7256),D=s(2571),j=s(3881);let z=(()=>{class e extends h.KG{constructor(e,t,s){super(),this._state=e,this._desk=t,this._desks_state=s,this.url=this._state.map_url,this.styles=this._state.map_styles,this.positions=this._state.map_positions,this.actions=this._state.map_actions,this.features=this._state.map_features,this.setHost=e=>this._desks_state.setOptions({host:e})}ngOnInit(){this.subscription("date",this._desk.filters.subscribe(e=>{this._desks_state.setOptions({date:e.date?new Date(e.date):new Date,zones:e.zones})}))}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(C.ck),r.Y36(c.H),r.Y36(C.Xp))},e.\u0275cmp=r.Xpm({type:e,selectors:[["desk-map-view"]],features:[r._Bn([C.Xp]),r.qOj],decls:13,vars:19,consts:[["map","",1,"h-full","w-full","relative"],[3,"src","zoom","center","styles","features","actions"],[1,"absolute","bottom-0","right-0"],[1,"absolute","top-0","left-0","p-2","text-black"],["placeholder","User for bookings...",3,"ngModel","ngModelChange"],["info","",1,"absolute","bottom-0","rounded","p-2","m-2","bg-white","shadow","text-center"]],template:function(e,t){1&e&&(r.TgZ(0,"div",0),r._UZ(1,"i-map",1),r.ALo(2,"async"),r.ALo(3,"async"),r.ALo(4,"async"),r.ALo(5,"async"),r.ALo(6,"async"),r.ALo(7,"async"),r._UZ(8,"explore-zoom-controls",2),r.TgZ(9,"div",3),r.TgZ(10,"a-user-search-field",4),r.NdJ("ngModelChange",function(e){return t.setHost(e)}),r.qZA(),r.qZA(),r.TgZ(11,"div",5),r._uU(12," Click/Tap an available desk to book it. "),r.qZA(),r.qZA()),2&e&&(r.xp6(1),r.Q6J("src",r.lcZ(2,7,t.url))("zoom",r.lcZ(3,9,t.positions).zoom)("center",r.lcZ(4,11,t.positions).center)("styles",r.lcZ(5,13,t.styles))("features",r.lcZ(6,15,t.features))("actions",r.lcZ(7,17,t.actions)),r.xp6(9),r.Q6J("ngModel",null))},directives:[L.p,D.s,j.d,i.JJ,i.On],pipes:[n.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;position:relative;height:100%;width:100%}[info][_ngcontent-%COMP%]{left:50%;transform:translateX(-50%)}"]}),e})();function Y(e,t){if(1&e&&(r.TgZ(0,"button",18),r.TgZ(1,"app-icon"),r._uU(2,"more_vert"),r.qZA(),r.qZA()),2&e){r.oxw(2);const e=r.MAs(5);r.Q6J("matMenuTriggerFor",e)}}function N(e,t){1&e&&r._UZ(0,"desk-details",20),2&e&&r.Q6J("desk",t.$implicit)}function F(e,t){if(1&e&&(r.ynx(0),r.YNc(1,N,1,1,"desk-details",19),r.ALo(2,"async"),r.BQk()),2&e){const e=r.oxw(2);r.xp6(1),r.Q6J("ngForOf",r.lcZ(2,1,e.bookings))}}function Q(e,t){if(1&e&&(r.ynx(0),r.TgZ(1,"div",7),r._UZ(2,"div",8),r.TgZ(3,"div",9),r._uU(4),r.ALo(5,"async"),r.qZA(),r.TgZ(6,"div",10),r._uU(7),r.ALo(8,"async"),r.ALo(9,"async"),r.qZA(),r.YNc(10,Y,3,1,"button",11),r.ALo(11,"async"),r.qZA(),r.TgZ(12,"div",12),r.TgZ(13,"div",13),r.TgZ(14,"div",14),r._uU(15,"Person"),r.qZA(),r.TgZ(16,"div",14),r._uU(17,"Group"),r.qZA(),r.TgZ(18,"div",15),r._uU(19,"Date"),r.qZA(),r.TgZ(20,"div",16),r._uU(21,"Desk"),r.qZA(),r.TgZ(22,"div",15),r._uU(23,"Status"),r.qZA(),r.TgZ(24,"div",14),r._uU(25,"Approver"),r.qZA(),r.TgZ(26,"div",14),r._uU(27,"Checked In"),r.qZA(),r.TgZ(28,"div",15),r._uU(29,"Access"),r.qZA(),r._UZ(30,"div",14),r.qZA(),r.TgZ(31,"div",17),r.YNc(32,F,3,3,"ng-container",0),r.ALo(33,"async"),r.qZA(),r.qZA(),r.BQk()),2&e){const e=r.oxw(),t=r.MAs(3);let s,n,i;r.xp6(4),r.hij(" Requests: ",(null==(s=r.lcZ(5,5,e.bookings))?null:s.length)||"0"," "),r.xp6(3),r.hij(" Free Desks: ",((null==(n=r.lcZ(8,7,e.desks))?null:n.length)||0)-((null==(n=r.lcZ(9,9,e.bookings))?null:n.length)||0)," "),r.xp6(3),r.Q6J("ngIf",null==r.lcZ(11,11,e.filters).zones?null:r.lcZ(11,11,e.filters).zones.length),r.xp6(22),r.Q6J("ngIf",null==(i=r.lcZ(33,13,e.bookings))?null:i.length)("ngIfElse",t)}}function I(e,t){1&e&&(r.TgZ(0,"div",21),r.TgZ(1,"p",22),r._uU(2," There are no desks for the currently selected date. "),r.qZA(),r.qZA())}function G(e,t){1&e&&(r.TgZ(0,"div",23),r._UZ(1,"desk-map-view"),r.qZA())}let H=(()=>{class e{constructor(e){this._state=e,this.filters=this._state.filters,this.desks=this._state.desks.pipe((0,O.U)(e=>e.filter(e=>e.bookable))),this.bookings=this._state.bookings,this.rejectAll=()=>this._state.rejectAllDesks(),this.updateDesks=()=>this._state.updateDesks()}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(c.H))},e.\u0275cmp=r.Xpm({type:e,selectors:[["desk-listings"]],decls:20,vars:4,consts:[[4,"ngIf","ngIfElse"],["empty_state",""],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"flex","items-center"],[1,"pl-2"],["map_state",""],["details","",1,"w-full","bg-gray-900","text-white","flex","items-center","px-2"],[1,"flex-1","w-0"],[1,"p-2"],[1,"px-8"],["mat-icon-button","",3,"matMenuTriggerFor",4,"ngIf"],[1,"w-full","flex","flex-col","flex-1","text-sm","h-1/2"],[1,"w-full","flex","items-center","bg-white","border-b","border-gray-500","p-2","font-medium"],[1,"w-32","p-2"],[1,"w-24","p-2"],["flex","",1,"p-2","flex-1"],[1,"w-full","flex-1","overflow-auto","h-1/2"],["mat-icon-button","",3,"matMenuTriggerFor"],[3,"desk",4,"ngFor","ngForOf"],[3,"desk"],[1,"h-full","w-full","flex","items-center","justify-center"],[1,"p-8"],[1,"absolute","inset-0"]],template:function(e,t){if(1&e&&(r.YNc(0,Q,34,15,"ng-container",0),r.ALo(1,"async"),r.YNc(2,I,3,0,"ng-template",null,1,r.W1O),r.TgZ(4,"mat-menu",null,2),r.TgZ(6,"button",3),r.NdJ("click",function(){return t.updateDesks()}),r.TgZ(7,"div",4),r.TgZ(8,"app-icon"),r._uU(9,"edit"),r.qZA(),r.TgZ(10,"span",5),r._uU(11,"Edit Desks"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(12,"button",3),r.NdJ("click",function(){return t.rejectAll()}),r.TgZ(13,"div",4),r.TgZ(14,"app-icon"),r._uU(15,"event_busy"),r.qZA(),r.TgZ(16,"span",5),r._uU(17,"Reject All"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.YNc(18,G,2,0,"ng-template",null,6,r.W1O)),2&e){const e=r.MAs(19);let s;r.Q6J("ngIf",!(null!=(s=r.lcZ(1,2,t.filters))&&s.show_map))("ngIfElse",e)}},directives:[n.O5,U.VK,U.OP,M.o,A.lW,U.p6,n.sg,J,z],pipes:[n.Ov],styles:["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;height:100%;width:100%;overflow:hidden}[details][_ngcontent-%COMP%]{height:3.5rem}[flex][_ngcontent-%COMP%]{min-width:8rem}"]}),e})();var X=s(5994);const E=["app-desks",""];function S(e,t){1&e&&r._UZ(0,"mat-progress-bar",4)}const B=[{path:"",component:(()=>{class e{constructor(e){this._state=e,this.loading=this._state.loading}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(c.H))},e.\u0275cmp=r.Xpm({type:e,selectors:[["","app-desks",""]],attrs:E,decls:6,vars:3,consts:[[1,"relative","overflow-hidden","flex-1","flex","flex-col"],[1,"w-full"],[1,"w-full","flex-1","h-0"],["class","w-full","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"w-full"]],template:function(e,t){1&e&&(r._UZ(0,"sidebar"),r.TgZ(1,"main",0),r._UZ(2,"desks-topbar",1),r._UZ(3,"desk-listings",2),r.YNc(4,S,1,0,"mat-progress-bar",3),r.ALo(5,"async"),r.qZA()),2&e&&(r.xp6(4),r.Q6J("ngIf",r.lcZ(5,1,t.loading)))},directives:[u.k,T,H,n.O5,X.pW],pipes:[n.Ov],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;background:var(--bg)}"]}),e})()}];let K=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[n.ez,i.u5,i.UX,a.v,C.P2,l.Fk,o.Bz.forChild(B)]]}),e})()}}]);
//# sourceMappingURL=apps_concierge_src_app_desks_desks_module_ts.js.map