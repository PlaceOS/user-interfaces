(self.webpackChunkplaceos=self.webpackChunkplaceos||[]).push([["apps_concierge_src_app_desks_desks_module_ts"],{3822:(e,t,s)=>{"use strict";s.r(t),s.d(t,{DesksModule:()=>Ze});var n=s(1511),i=s(6073),o=s(6898),a=s(4810),r=s(5109),l=s(3098),c=s(787),u=s(6687),d=s(2619),p=s(5320),g=s(1490),h=s(4762),m=s(3530),f=s(611),_=s(6839),Z=s(1496),v=s(6283),b=s(4786),k=s(1522),A=s(2319),x=s(1521);function y(e,t){if(1&e&&(d.TgZ(0,"mat-option",7),d._uU(1),d.qZA()),2&e){const e=t.$implicit;d.Q6J("value",e.id),d.xp6(1),d.hij(" ",e.display_name||e.name," ")}}const w=function(){return[]};let q=(()=>{class e extends u.KG{constructor(e,t,s,n){super(),this._desks=e,this._org=t,this._route=s,this._router=n,this.levels=this._org.active_levels,this.filters=this._desks.filters,this.setDate=e=>this._desks.setFilters({date:e}),this.setFilters=e=>this._desks.setFilters(e),this.updateZones=e=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:e.join(",")},queryParamsHandling:"merge"}),this._desks.setFilters({zones:e})}}ngOnInit(){return(0,h.mG)(this,void 0,void 0,function*(){yield this._org.initialised.pipe((0,m.P)(e=>e)).toPromise(),this.subscription("route.query",this._route.queryParamMap.subscribe(e=>{if(e.has("zone_ids")){const t=e.get("zone_ids").split(",");if(t.length){this.updateZones(t);const e=this._org.levelWithID(t);if(!e)return;this._org.building=this._org.buildings.find(t=>t.id===e.parent_id)}}e.has("date")&&this.setDate(new Date(+e.get("date"))),e.has("approve")?this.approve(e.get("approve")):e.has("reject")&&this.reject(e.get("reject"))})),this.subscription("levels",this._org.active_levels.subscribe(e=>(0,h.mG)(this,void 0,void 0,function*(){var t;const s=yield this.filters.pipe((0,f.q)(1)).toPromise(),n=(null===(t=null==s?void 0:s.zones)||void 0===t?void 0:t.filter(t=>e.find(e=>e.id===t)||"All"===t))||[];!n.length&&e.length&&n.push(e[0].id),this.updateZones(n)})))})}approve(e){return(0,h.mG)(this,void 0,void 0,function*(){const t=yield(0,_.Fo)(e).toPromise();t&&this._desks.approveDesk(t)})}reject(e){return(0,h.mG)(this,void 0,void 0,function*(){const t=yield(0,_.Fo)(e).toPromise();t&&this._desks.rejectDesk(t)})}}return e.\u0275fac=function(t){return new(t||e)(d.Y36(p.H),d.Y36(Z.w7),d.Y36(o.gz),d.Y36(o.F0))},e.\u0275cmp=d.Xpm({type:e,selectors:[["desks-topbar"]],features:[d.qOj],decls:11,vars:10,consts:[["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],["value","All"],[3,"value",4,"ngFor","ngForOf"],[1,"flex-1","w-2"],[1,"mr-2",3,"model","modelChange"],[3,"dateChange"],[3,"value"]],template:function(e,t){if(1&e&&(d.TgZ(0,"mat-form-field",0),d.TgZ(1,"mat-select",1),d.NdJ("ngModelChange",function(e){return t.updateZones(e)}),d.ALo(2,"async"),d.TgZ(3,"mat-option",2),d._uU(4,"All Levels"),d.qZA(),d.YNc(5,y,2,2,"mat-option",3),d.ALo(6,"async"),d.qZA(),d.qZA(),d._UZ(7,"div",4),d.TgZ(8,"searchbar",5),d.NdJ("modelChange",function(e){return t.setFilters({search:e})}),d.ALo(9,"async"),d.qZA(),d.TgZ(10,"date-options",6),d.NdJ("dateChange",function(e){return t.setDate(e)}),d.qZA()),2&e){let e;d.xp6(1),d.Q6J("ngModel",d.lcZ(2,3,t.filters).zones||d.DdM(9,w)),d.xp6(4),d.Q6J("ngForOf",d.lcZ(6,5,t.levels)),d.xp6(3),d.Q6J("model",null==(e=d.lcZ(9,7,t.filters))?null:e.search)}},directives:[v.KE,b.gD,i.JJ,i.On,k.ey,n.sg,A.U,x.E],pipes:[n.Ov],styles:["[_nghost-%COMP%]{display:flex;align-items:center;background-color:#fff;height:5em;padding:0 1em;border-bottom:1px solid #ccc}[_nghost-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin-left:.5rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}"]}),e})();var M=s(5994);const T=["app-desks",""];function O(e,t){1&e&&d._UZ(0,"mat-progress-bar",7)}const J=function(){return["/desks","events"]},C=function(){return["/desks","map"]},U=function(){return["/desks","manage"]};let N=(()=>{class e extends u.KG{constructor(e,t){super(),this._state=e,this._router=t,this.loading=this._state.loading}ngOnInit(){var e;this._state.startPolling(),this.subscription("router.events",this._router.events.subscribe(e=>{var s;if(e instanceof o.m2){const e=(null===(s=this._router.url)||void 0===s?void 0:s.split("/"))||[""];this.path=e[t.length-1].split("?")[0]}}));const t=(null===(e=this._router.url)||void 0===e?void 0:e.split("/"))||[""];this.path=t[t.length-1].split("?")[0]}ngOnDestroy(){super.ngOnDestroy(),this._state.stopPolling()}}return e.\u0275fac=function(t){return new(t||e)(d.Y36(p.H),d.Y36(o.F0))},e.\u0275cmp=d.Xpm({type:e,selectors:[["","app-desks",""]],features:[d.qOj],attrs:T,decls:15,vars:12,consts:[[1,"relative","overflow-hidden","flex-1","flex","flex-col"],[1,"w-full"],[1,"dark"],["mat-tab-nav-bar",""],["mat-tab-link","","queryParamsHandling","merge",3,"routerLink","active"],[1,"flex-1","h-1/2","w-full","relative","overflow-auto"],["class","w-full","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"w-full"]],template:function(e,t){1&e&&(d._UZ(0,"sidebar"),d.TgZ(1,"main",0),d._UZ(2,"desks-topbar",1),d.TgZ(3,"div",2),d.TgZ(4,"nav",3),d.TgZ(5,"a",4),d._uU(6," Bookings "),d.qZA(),d.TgZ(7,"a",4),d._uU(8," Map View "),d.qZA(),d.TgZ(9,"a",4),d._uU(10," Manage Desks "),d.qZA(),d.qZA(),d.qZA(),d.TgZ(11,"div",5),d._UZ(12,"router-outlet"),d.qZA(),d.YNc(13,O,1,0,"mat-progress-bar",6),d.ALo(14,"async"),d.qZA()),2&e&&(d.xp6(5),d.Q6J("routerLink",d.DdM(9,J))("active","events"===t.path),d.xp6(2),d.Q6J("routerLink",d.DdM(10,C))("active","map"===t.path),d.xp6(2),d.Q6J("routerLink",d.DdM(11,U))("active","manage"===t.path),d.xp6(4),d.Q6J("ngIf",d.lcZ(14,7,t.loading)))},directives:[g.k,q,r.BU,o.yS,r.Nj,o.lC,n.O5,M.pW],pipes:[n.Ov],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;background:var(--bg)}"]}),e})();var j=s(1354),D=s(5980),Y=s(8055),P=s(1548),F=s(9436);function Q(e,t){if(1&e&&(d._uU(0),d.ALo(1,"date"),d.ALo(2,"date")),2&e){const e=t.data;d.AsE(" ",d.lcZ(1,2,e)," at ",d.xi3(2,4,e,"shortTime")," ")}}function L(e,t){if(1&e&&d._uU(0),2&e){const e=t.row;d.hij(" ",e.user_name||e.user_email||e.booked_by_name||e.booked_by_email," ")}}function z(e,t){if(1&e&&(d.TgZ(0,"span",10),d._uU(1),d.qZA()),2&e){const e=t.data;d.ekj("bg-success","approved"===e)("bg-pending","tentative"===e)("bg-error","cancelled"===e||"declined"===e),d.xp6(1),d.hij(" ",e," ")}}function H(e,t){1&e&&d._uU(0),2&e&&d.hij(" ",t.data?"Yes":"No"," ")}function I(e,t){1&e&&(d.TgZ(0,"app-icon"),d._uU(1,"qr_code"),d.qZA())}function G(e,t){if(1&e){const e=d.EpF();d.TgZ(0,"div",11),d.TgZ(1,"action-icon",12),d.NdJ("click",function(){const t=d.CHM(e).row;return d.oxw().checkin(t)}),d._uU(2,"how_to_reg"),d.qZA(),d.TgZ(3,"button",13),d.NdJ("click",function(){const t=d.CHM(e).row;return d.oxw().approve(t)}),d.TgZ(4,"app-icon"),d._uU(5,"event_available"),d.qZA(),d.qZA(),d.TgZ(6,"button",13),d.NdJ("click",function(){const t=d.CHM(e).row;return d.oxw().reject(t)}),d.TgZ(7,"app-icon"),d._uU(8,"event_busy"),d.qZA(),d.qZA(),d.TgZ(9,"button",14),d.YNc(10,I,2,0,"app-icon",15),d.qZA(),d.TgZ(11,"mat-menu",null,8),d.TgZ(13,"div",16),d._UZ(14,"img",17),d.qZA(),d.TgZ(15,"div",18),d.TgZ(16,"button",19),d._uU(17," Print QR Code "),d.qZA(),d.qZA(),d.qZA(),d.qZA()}if(2&e){const e=t.row,s=d.MAs(12);d.xp6(9),d.Q6J("disabled",!(null!=e.extension_data&&e.extension_data.checkin_qr_code))("matMenuTriggerFor",s),d.xp6(1),d.Q6J("ngIf",null==e.extension_data?null:e.extension_data.checkin_qr_code),d.xp6(4),d.Q6J("src",null==e.extension_data?null:e.extension_data.checkin_qr_code,d.LSH)}}const W=function(){return["user_name","group","date","status","approver_name","checked_in","access","actions"]},S=function(){return["Person","Group","Date","Status","Approver","Checked In","Access"," "]},E=function(){return["flex","","12r","","10r","","","12r"]},X=function(e,t,s,n,i,o){return{user_name:e,date:t,status:s,checked_in:n,access:i,actions:o}};let B=(()=>{class e{constructor(e){this._state=e,this.filters=this._state.filters,this.bookings=this._state.bookings,this.rejectAll=()=>this._state.rejectAllDesks(),this.checkin=e=>this.runMethod("checkin",()=>(0,h.mG)(this,void 0,void 0,function*(){return this._state.checkinDesk(e)})),this.approve=e=>this.runMethod("approve",()=>(0,h.mG)(this,void 0,void 0,function*(){return this._state.approveDesk(e)})),this.reject=e=>this.runMethod("reject",()=>(0,h.mG)(this,void 0,void 0,function*(){return this._state.rejectDesk(e)}))}runMethod(e,t){return(0,h.mG)(this,void 0,void 0,function*(){this.loading=e,yield t().catch(e=>null),this.loading=""})}}return e.\u0275fac=function(t){return new(t||e)(d.Y36(p.H))},e.\u0275cmp=d.Xpm({type:e,selectors:[["desk-bookings"]],decls:21,vars:22,consts:[[1,"overflow-auto","h-full","w-full"],[1,"min-w-[76rem]",3,"dataSource","filter","columns","display_column","column_size","template","empty"],["date_template",""],["user_template",""],["status_template",""],["bool_template",""],["action_template",""],["mat-icon-button","",1,"absolute","bottom-2","right-2","bg-white","shadow",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"capitalize","text-white","px-2","py-1","rounded","border","border-gray-200"],[1,"flex","items-center","justify-end","space-x-2"],[3,"click"],["mat-icon-button","",3,"click"],["mat-icon-button","",3,"disabled","matMenuTriggerFor"],[4,"ngIf"],[1,"p-2","mx-4","my-2","rounded-lg","border","border-black"],[1,"w-48",3,"src"],["mat-menu-item","",1,"underline"],["mat-button","",1,"w-full"]],template:function(e,t){if(1&e&&(d.TgZ(0,"div",0),d._UZ(1,"custom-table",1),d.ALo(2,"async"),d.ALo(3,"async"),d.YNc(4,Q,3,7,"ng-template",null,2,d.W1O),d.YNc(6,L,1,1,"ng-template",null,3,d.W1O),d.YNc(8,z,2,7,"ng-template",null,4,d.W1O),d.YNc(10,H,1,1,"ng-template",null,5,d.W1O),d.YNc(12,G,18,4,"ng-template",null,6,d.W1O),d.qZA(),d.TgZ(14,"button",7),d.TgZ(15,"app-icon"),d._uU(16,"more_vert"),d.qZA(),d.qZA(),d.TgZ(17,"mat-menu",null,8),d.TgZ(19,"button",9),d.NdJ("click",function(){return t.rejectAll()}),d._uU(20,"Reject All"),d.qZA(),d.qZA()),2&e){const e=d.MAs(5),s=d.MAs(7),n=d.MAs(9),i=d.MAs(11),o=d.MAs(13),a=d.MAs(18);let r,l;d.xp6(1),d.Q6J("dataSource",t.bookings)("filter",null==(r=d.lcZ(2,8,t.filters))?null:r.search)("columns",d.DdM(12,W))("display_column",d.DdM(13,S))("column_size",d.DdM(14,E))("template",d.HTZ(15,X,s,e,n,i,i,o))("empty",null!=(l=d.lcZ(3,10,t.filters))&&l.search?"No matching desk bookings":"There are no desk booking for the currently selected date."),d.xp6(13),d.Q6J("matMenuTriggerFor",a)}},directives:[j.C,D.lW,Y.p6,P.o,Y.VK,Y.OP,F.m,n.O5],pipes:[n.Ov,n.uU],styles:["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;height:100%;width:100%}"]}),e})();var K=s(7256),R=s(2571),V=s(3881);let $=(()=>{class e extends u.KG{constructor(e,t,s,n){super(),this._state=e,this._desk=t,this._desks_state=s,this._org=n,this.url=this._state.map_url,this.styles=this._state.map_styles,this.positions=this._state.map_positions,this.actions=this._state.map_actions,this.features=this._state.map_features,this.setHost=e=>this._desks_state.setOptions({host:e})}ngOnInit(){this.subscription("date",this._desk.filters.subscribe(e=>{const t=this._org.levelWithID(e.zones);t&&this._state.setLevel(t.id),this._desks_state.setOptions({date:e.date?new Date(e.date):new Date,zones:e.zones})}))}}return e.\u0275fac=function(t){return new(t||e)(d.Y36(l.ck),d.Y36(p.H),d.Y36(l.Xp),d.Y36(Z.w7))},e.\u0275cmp=d.Xpm({type:e,selectors:[["desk-map-view"]],features:[d._Bn([l.Xp]),d.qOj],decls:13,vars:19,consts:[["map","",1,"h-full","w-full","relative"],[3,"src","zoom","center","styles","features","actions"],[1,"absolute","bottom-0","right-0"],[1,"absolute","top-0","left-0","p-2","text-black"],["placeholder","User for bookings...",3,"ngModel","ngModelChange"],["info","",1,"absolute","bottom-0","rounded","p-2","m-2","bg-white","shadow","text-center"]],template:function(e,t){1&e&&(d.TgZ(0,"div",0),d._UZ(1,"i-map",1),d.ALo(2,"async"),d.ALo(3,"async"),d.ALo(4,"async"),d.ALo(5,"async"),d.ALo(6,"async"),d.ALo(7,"async"),d._UZ(8,"explore-zoom-controls",2),d.TgZ(9,"div",3),d.TgZ(10,"a-user-search-field",4),d.NdJ("ngModelChange",function(e){return t.setHost(e)}),d.qZA(),d.qZA(),d.TgZ(11,"div",5),d._uU(12," Click/Tap an available desk to book it. "),d.qZA(),d.qZA()),2&e&&(d.xp6(1),d.Q6J("src",d.lcZ(2,7,t.url))("zoom",d.lcZ(3,9,t.positions).zoom)("center",d.lcZ(4,11,t.positions).center)("styles",d.lcZ(5,13,t.styles))("features",d.lcZ(6,15,t.features))("actions",d.lcZ(7,17,t.actions)),d.xp6(9),d.Q6J("ngModel",null))},directives:[K.p,R.s,V.d,i.JJ,i.On],pipes:[n.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;position:relative;height:100%;width:100%}[info][_ngcontent-%COMP%]{left:50%;transform:translateX(-50%)}"]}),e})();var ee=s(6817),te=s(7789),se=s(6756),ne=s(9236),ie=s(6828),oe=s(7806);function ae(e,t){if(1&e){const e=d.EpF();d.TgZ(0,"item-list-field",7),d.NdJ("ngModelChange",function(t){const s=d.CHM(e),n=s.row,i=s.key,o=d.oxw();return(!o.changes[n.id]||!o.changes[n.id][i])&&(o.changes[n.id]={}),o.changes[n.id][i]=t}),d.qZA()}if(2&e){const e=t.data,s=t.row,n=t.key,i=d.oxw();let o;d.Q6J("placeholder","groups"===n?"User Groups":"Features")("ngModel",null!==(o=i.changes[s.id]?i.changes[s.id][n]:null)&&void 0!==o?o:e)}}function re(e,t){if(1&e){const e=d.EpF();d.TgZ(0,"div",8),d.TgZ(1,"mat-form-field",9),d.TgZ(2,"input",10),d.NdJ("ngModelChange",function(t){const s=d.CHM(e),n=s.row,i=s.key,o=d.oxw();return(!o.changes[n.id]||!o.changes[n.id][i])&&(o.changes[n.id]={}),o.changes[n.id][i]=t}),d.qZA(),d.qZA(),d.qZA()}if(2&e){const e=t.data,s=t.row,n=t.key,i=d.oxw();let o;d.xp6(2),d.Q6J("placeholder",n)("ngModel",null!==(o=i.changes[s.id]?i.changes[s.id][n]:null)&&void 0!==o?o:e)}}function le(e,t){if(1&e){const e=d.EpF();d.TgZ(0,"div",11),d.TgZ(1,"mat-checkbox",12),d.NdJ("ngModelChange",function(t){const s=d.CHM(e).row,n=d.oxw();return n.changes[s.id]?n.changes[s.id].bookable=t:n.changes[s.id]={bookable:t}}),d.qZA(),d.qZA()}if(2&e){const e=t.data,s=t.row,n=d.oxw();let i;d.xp6(1),d.Q6J("ngModel",null!==(i=null==n.changes[s.id]?null:n.changes[s.id].bookable)&&void 0!==i?i:e)}}function ce(e,t){1&e&&(d.TgZ(0,"app-icon"),d._uU(1,"qr_code"),d.qZA())}function ue(e,t){if(1&e){const e=d.EpF();d.TgZ(0,"div",13),d.TgZ(1,"div",14),d.TgZ(2,"app-icon"),d._uU(3,"warning"),d.qZA(),d.qZA(),d.TgZ(4,"button",15),d.NdJ("click",function(){const t=d.CHM(e).row;return d.oxw().removeDesk(t)}),d.TgZ(5,"app-icon"),d._uU(6,"delete"),d.qZA(),d.qZA(),d.TgZ(7,"button",16),d.YNc(8,ce,2,0,"app-icon",17),d.qZA(),d.TgZ(9,"mat-menu",null,18),d.TgZ(11,"div",19),d._UZ(12,"img",20),d.qZA(),d.TgZ(13,"div",21),d.TgZ(14,"button",22),d._uU(15,"Print QR Code"),d.qZA(),d.qZA(),d.qZA(),d.qZA()}if(2&e){const e=t.row,s=d.MAs(10),n=d.oxw();d.xp6(1),d.ekj("opacity-0",!n.changes[e.id]),d.xp6(6),d.Q6J("disabled",!e.qr_code)("matMenuTriggerFor",s),d.xp6(1),d.Q6J("ngIf",e.qr_code),d.xp6(4),d.Q6J("src",e.qr_code,d.LSH)}}function de(e,t){if(1&e){const e=d.EpF();d.TgZ(0,"div",23),d.TgZ(1,"p",24),d._uU(2),d.qZA(),d.TgZ(3,"div",25),d.TgZ(4,"button",26),d.NdJ("click",function(){return d.CHM(e),d.oxw().save()}),d._uU(5,"Save Changes"),d.qZA(),d.qZA(),d.qZA()}if(2&e){const e=d.oxw();d.xp6(2),d.hij(" ",e.changed," Desk(s) with unsaved changes ")}}function pe(e,t){if(1&e&&(d.TgZ(0,"div",27),d._UZ(1,"mat-spinner",28),d.TgZ(2,"p"),d._uU(3),d.qZA(),d.qZA()),2&e){const e=d.oxw();d.xp6(3),d.Oqu(e.loading)}}const ge=function(){return["id","bookable","name","groups","features","actions"]},he=function(){return["ID","Bookable","Name","Groups","Features"," "]},me=function(){return["8r","6r","12r","flex","16r","10r"]},fe=function(e,t,s,n,i,o){return{id:e,name:t,bookable:s,groups:n,features:i,actions:o}},_e=[{path:"",component:N,children:[{path:"events",component:B},{path:"map",component:$},{path:"manage",component:(()=>{class e{constructor(e,t){this._state=e,this._org=t,this.changes={},this.filters=this._state.filters,this.desks=this._state.desks}get changed(){return Object.keys(this.changes).length}save(){return(0,h.mG)(this,void 0,void 0,function*(){this.loading="Saving changes to desks...";const e=(yield this.desks.pipe((0,f.q)(1)).toPromise()).map(e=>new Z.nk(Object.assign(Object.assign({},e),this.changes[e.id]||{})).toJSON()),t=yield this.filters.pipe((0,f.q)(1)).toPromise(),s=this._org.levelWithID(t.zones);yield(0,ee.Ymr)(s.id,{name:"desks",description:"desks",details:e}).toPromise().catch(e=>{throw this.loading="",(0,u.cB)(`Error saving desk data. Error: ${e.message||e}`),e}),(0,u.t5)("Successfully updated desks"),this.loading="",this.changes={}})}}return e.\u0275fac=function(t){return new(t||e)(d.Y36(p.H),d.Y36(Z.w7))},e.\u0275cmp=d.Xpm({type:e,selectors:[["desks-manage"]],decls:13,vars:23,consts:[[1,"min-w-[72rem]","block",3,"dataSource","filter","columns","display_column","column_size","template","empty"],["list_edit_template",""],["text_edit_template",""],["bookable_edit_template",""],["action_template",""],["class","fixed bottom-2 left-1/2 transform -translate-x-1/2 p-4 rounded bg-white shadow",4,"ngIf"],["class","absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-white bg-opacity-60",4,"ngIf"],["hide-outline","",1,"w-full",3,"placeholder","ngModel","ngModelChange"],["hide-outline","",1,"w-full","h-12"],["appearance","outline",1,"h-12","w-full"],["matInput","",3,"placeholder","ngModel","ngModelChange"],[1,"flex","items-center","justify-center","pl-4"],[3,"ngModel","ngModelChange"],[1,"flex","items-center","justify-end","space-x-2"],["matTooltip","Desk has unsaved changes",1,"p-2","text-2xl","text-pending"],["mat-icon-button","",3,"click"],["mat-icon-button","",3,"disabled","matMenuTriggerFor"],[4,"ngIf"],["menu","matMenu"],[1,"p-2","mx-4","my-2","rounded-lg","border","border-black"],[1,"w-48",3,"src"],["mat-menu-item","",1,"underline"],["mat-button","",1,"w-full"],[1,"fixed","bottom-2","left-1/2","transform","-translate-x-1/2","p-4","rounded","bg-white","shadow"],[1,"mb-2","text-xl"],[1,"flex","items-center","justify-center"],["save","","mat-button","",3,"click"],[1,"absolute","inset-0","flex","flex-col","items-center","justify-center","space-y-2","bg-white","bg-opacity-60"],["diameter","32"]],template:function(e,t){if(1&e&&(d._UZ(0,"custom-table",0),d.ALo(1,"async"),d.ALo(2,"async"),d.YNc(3,ae,1,2,"ng-template",null,1,d.W1O),d.YNc(5,re,3,2,"ng-template",null,2,d.W1O),d.YNc(7,le,2,1,"ng-template",null,3,d.W1O),d.YNc(9,ue,16,6,"ng-template",null,4,d.W1O),d.YNc(11,de,6,1,"div",5),d.YNc(12,pe,4,1,"div",6)),2&e){const e=d.MAs(4),s=d.MAs(6),n=d.MAs(8),i=d.MAs(10);let o,a;d.Q6J("dataSource",t.desks)("filter",null==(o=d.lcZ(1,9,t.filters))?null:o.search)("columns",d.DdM(13,ge))("display_column",d.DdM(14,he))("column_size",d.DdM(15,me))("template",d.HTZ(16,fe,s,s,n,e,e,i))("empty",null!=(a=d.lcZ(2,11,t.filters))&&a.search?"No matching desks":"No desks for selected level"),d.xp6(11),d.Q6J("ngIf",t.changed>0),d.xp6(1),d.Q6J("ngIf",t.loading)}},directives:[j.C,n.O5,te.q9,i.JJ,i.On,v.KE,se.Nt,i.Fj,ne.oG,ie.gM,P.o,D.lW,Y.p6,Y.VK,Y.OP,oe.$g],pipes:[n.Ov],styles:[""]}),e})()},{path:"**",redirectTo:"events"}]},{path:"**",redirectTo:"events"}];let Ze=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[n.ez,i.u5,r.Nh,i.UX,c.v,l.P2,a.Fk,v.lN,ne.p9,se.c,o.Bz.forChild(_e)]]}),e})()}}]);
//# sourceMappingURL=apps_concierge_src_app_desks_desks_module_ts.js.map