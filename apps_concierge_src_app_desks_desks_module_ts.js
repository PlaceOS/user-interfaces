"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_desks_desks_module_ts"],{9950:(Oe,C,r)=>{r.r(C),r.d(C,{DesksModule:()=>we});var p=r(8267),m=r(8346),g=r(1733),N=r(7435),T=r(9391),k=r(3792),j=r(9323),h=r(3867),f=r(5696),e=r(4001),F=r(2146),u=r(8806),Y=r(4452),b=r(6928),v=r(4555),x=r(3231),M=r(3981),L=r(1036),P=r(2157),Q=r(8961),z=r(3928);function B(s,a){if(1&s&&(e.TgZ(0,"mat-option",7),e._uU(1),e.qZA()),2&s){const t=a.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.display_name||t.name," ")}}const H=function(){return[]};let I=(()=>{class s extends h.KG{constructor(t,n,i,o){super(),this._desks=t,this._org=n,this._route=i,this._router=o,this.levels=this._org.active_levels,this.filters=this._desks.filters,this.setDate=l=>this._desks.setFilters({date:l}),this.setFilters=l=>this._desks.setFilters(l),this.updateZones=l=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:l.join(",")},queryParamsHandling:"merge"}),this._desks.setFilters({zones:l})}}ngOnInit(){return(0,u.mG)(this,void 0,void 0,function*(){yield this._org.initialised.pipe((0,Y.P)(t=>t)).toPromise(),this.subscription("route.query",this._route.queryParamMap.subscribe(t=>{if(t.has("zone_ids")){const n=t.get("zone_ids").split(",");if(n.length){this.updateZones(n);const i=this._org.levelWithID(n);if(!i)return;this._org.building=this._org.buildings.find(o=>o.id===i.parent_id)}}t.has("date")&&this.setDate(new Date(+t.get("date"))),t.has("approve")?this.approve(t.get("approve")):t.has("reject")&&this.reject(t.get("reject"))})),this.subscription("levels",this._org.active_levels.subscribe(t=>(0,u.mG)(this,void 0,void 0,function*(){var n;const i=yield this.filters.pipe((0,b.q)(1)).toPromise(),o=(null===(n=null==i?void 0:i.zones)||void 0===n?void 0:n.filter(l=>t.find(c=>c.id===l)||"All"===l))||[];!o.length&&t.length&&o.push(t[0].id),this.updateZones(o)})))})}approve(t){return(0,u.mG)(this,void 0,void 0,function*(){const n=yield(0,x.Fo)(t).toPromise();n&&this._desks.approveDesk(n)})}reject(t){return(0,u.mG)(this,void 0,void 0,function*(){const n=yield(0,x.Fo)(t).toPromise();n&&this._desks.rejectDesk(n)})}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(f.H),e.Y36(v.w7),e.Y36(g.gz),e.Y36(g.F0))},s.\u0275cmp=e.Xpm({type:s,selectors:[["desks-topbar"]],features:[e.qOj],decls:11,vars:10,consts:[["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],["value","All"],[3,"value",4,"ngFor","ngForOf"],[1,"flex-1","w-2"],[1,"mr-2",3,"model","modelChange"],[3,"dateChange"],[3,"value"]],template:function(t,n){if(1&t&&(e.TgZ(0,"mat-form-field",0),e.TgZ(1,"mat-select",1),e.NdJ("ngModelChange",function(o){return n.updateZones(o)}),e.ALo(2,"async"),e.TgZ(3,"mat-option",2),e._uU(4,"All Levels"),e.qZA(),e.YNc(5,B,2,2,"mat-option",3),e.ALo(6,"async"),e.qZA(),e.qZA(),e._UZ(7,"div",4),e.TgZ(8,"searchbar",5),e.NdJ("modelChange",function(o){return n.setFilters({search:o})}),e.ALo(9,"async"),e.qZA(),e.TgZ(10,"date-options",6),e.NdJ("dateChange",function(o){return n.setDate(o)}),e.qZA()),2&t){let i;e.xp6(1),e.Q6J("ngModel",e.lcZ(2,3,n.filters).zones||e.DdM(9,H)),e.xp6(4),e.Q6J("ngForOf",e.lcZ(6,5,n.levels)),e.xp6(3),e.Q6J("model",null==(i=e.lcZ(9,7,n.filters))?null:i.search)}},directives:[M.KE,L.gD,m.JJ,m.On,P.ey,p.sg,Q.U,z.E],pipes:[p.Ov],styles:["[_nghost-%COMP%]{display:flex;align-items:center;background-color:#fff;height:5em;padding:0 1em;border-bottom:1px solid #ccc}[_nghost-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin-left:.5rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n/*# sourceMappingURL=desks-topbar.component.ts-angular-inline--69.css.map*/"]}),s})();var G=r(3776);const W=["app-desks",""];function S(s,a){1&s&&e._UZ(0,"mat-progress-bar",7)}const E=function(){return["/desks","events"]},R=function(){return["/desks","map"]},V=function(){return["/desks","manage"]};let X=(()=>{class s extends h.KG{constructor(t,n){super(),this._state=t,this._router=n,this.loading=this._state.loading}ngOnInit(){var t;this._state.startPolling(),this.subscription("router.events",this._router.events.subscribe(i=>{var o;if(i instanceof g.m2){const l=(null===(o=this._router.url)||void 0===o?void 0:o.split("/"))||[""];this.path=l[n.length-1].split("?")[0]}}));const n=(null===(t=this._router.url)||void 0===t?void 0:t.split("/"))||[""];this.path=n[n.length-1].split("?")[0]}ngOnDestroy(){super.ngOnDestroy(),this._state.stopPolling()}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(f.H),e.Y36(g.F0))},s.\u0275cmp=e.Xpm({type:s,selectors:[["","app-desks",""]],features:[e.qOj],attrs:W,decls:15,vars:12,consts:[[1,"relative","overflow-hidden","flex-1","flex","flex-col"],[1,"w-full"],[1,"dark"],["mat-tab-nav-bar",""],["mat-tab-link","","queryParamsHandling","merge",3,"routerLink","active"],[1,"flex-1","h-1/2","w-full","relative","overflow-auto"],["class","w-full","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"w-full"]],template:function(t,n){1&t&&(e._UZ(0,"sidebar"),e.TgZ(1,"main",0),e._UZ(2,"desks-topbar",1),e.TgZ(3,"div",2),e.TgZ(4,"nav",3),e.TgZ(5,"a",4),e._uU(6," Bookings "),e.qZA(),e.TgZ(7,"a",4),e._uU(8," Map View "),e.qZA(),e.TgZ(9,"a",4),e._uU(10," Manage Desks "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"div",5),e._UZ(12,"router-outlet"),e.qZA(),e.YNc(13,S,1,0,"mat-progress-bar",6),e.ALo(14,"async"),e.qZA()),2&t&&(e.xp6(5),e.Q6J("routerLink",e.DdM(9,E))("active","events"===n.path),e.xp6(2),e.Q6J("routerLink",e.DdM(10,R))("active","map"===n.path),e.xp6(2),e.Q6J("routerLink",e.DdM(11,V))("active","manage"===n.path),e.xp6(4),e.Q6J("ngIf",e.lcZ(14,7,n.loading)))},directives:[F.k,I,T.BU,g.yS,T.Nj,g.lC,p.O5,G.pW],pipes:[p.Ov],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;background:var(--bg)}\n/*# sourceMappingURL=desks.component.ts-angular-inline--67.css.map*/"]}),s})();var A=r(5966),y=r(7752),_=r(9872),D=r(9680),K=r(3595),w=r(4731);function $(s,a){if(1&s&&(e._uU(0),e.ALo(1,"date"),e.ALo(2,"date")),2&s){const t=a.data;e.AsE(" ",e.lcZ(1,2,t)," at ",e.xi3(2,4,t,"shortTime")," ")}}function ee(s,a){if(1&s&&e._uU(0),2&s){const t=a.row;e.hij(" ",t.user_name||t.user_email||t.booked_by_name||t.booked_by_email," ")}}function te(s,a){if(1&s&&(e.TgZ(0,"span",10),e._uU(1),e.qZA()),2&s){const t=a.data;e.ekj("bg-success","approved"===t)("bg-pending","tentative"===t)("bg-error","cancelled"===t||"declined"===t),e.xp6(1),e.hij(" ",t," ")}}function ne(s,a){1&s&&e._uU(0),2&s&&e.hij(" ",a.data?"Yes":"No"," ")}function se(s,a){1&s&&(e.TgZ(0,"app-icon"),e._uU(1," qr_code "),e.qZA())}function oe(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"div",11),e.TgZ(1,"action-icon",12),e.NdJ("click",function(){const o=e.CHM(t).row;return e.oxw().checkin(o)}),e._uU(2,"how_to_reg"),e.qZA(),e.TgZ(3,"button",13),e.NdJ("click",function(){const o=e.CHM(t).row;return e.oxw().approve(o)}),e.TgZ(4,"app-icon"),e._uU(5,"event_available"),e.qZA(),e.qZA(),e.TgZ(6,"button",14),e.NdJ("click",function(){const o=e.CHM(t).row;return e.oxw().reject(o)}),e.TgZ(7,"app-icon"),e._uU(8,"event_busy"),e.qZA(),e.qZA(),e.TgZ(9,"button",15),e.YNc(10,se,2,0,"app-icon",16),e.qZA(),e.TgZ(11,"mat-menu",null,8),e.TgZ(13,"div",17),e._UZ(14,"img",18),e.qZA(),e.TgZ(15,"div",19),e.TgZ(16,"button",20),e._uU(17," Print QR Code "),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&s){const t=a.row,n=e.MAs(12);e.xp6(9),e.Q6J("disabled",!(null!=t.extension_data&&t.extension_data.checkin_qr_code))("matMenuTriggerFor",n),e.xp6(1),e.Q6J("ngIf",null==t.extension_data?null:t.extension_data.checkin_qr_code),e.xp6(4),e.Q6J("src",null==t.extension_data?null:t.extension_data.checkin_qr_code,e.LSH)}}const ie=function(){return["user_name","group","date","status","approver_name","checked_in","access","actions"]},ae=function(){return["Person","Group","Date","Status","Approver","Checked In","Access"," "]},le=function(){return["flex","","12r","","10r","","","12r"]},re=function(s,a,t,n,i,o){return{user_name:s,date:a,status:t,checked_in:n,access:i,actions:o}};let ce=(()=>{class s{constructor(t){this._state=t,this.filters=this._state.filters,this.bookings=this._state.bookings,this.rejectAll=()=>this._state.rejectAllDesks(),this.checkin=n=>this.runMethod("checkin",()=>(0,u.mG)(this,void 0,void 0,function*(){return this._state.checkinDesk(n)})),this.approve=n=>this.runMethod("approve",()=>(0,u.mG)(this,void 0,void 0,function*(){return this._state.approveDesk(n)})),this.reject=n=>this.runMethod("reject",()=>(0,u.mG)(this,void 0,void 0,function*(){return this._state.rejectDesk(n)}))}runMethod(t,n){return(0,u.mG)(this,void 0,void 0,function*(){this.loading=t,yield n().catch(i=>null),this.loading=""})}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(f.H))},s.\u0275cmp=e.Xpm({type:s,selectors:[["desk-bookings"]],decls:21,vars:22,consts:[[1,"overflow-auto","h-full","w-full"],[1,"min-w-[76rem]",3,"dataSource","filter","columns","display_column","column_size","template","empty"],["date_template",""],["user_template",""],["status_template",""],["bool_template",""],["action_template",""],["mat-icon-button","",1,"absolute","bottom-2","right-2","bg-white","shadow",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"capitalize","text-white","px-2","py-1","rounded","border","border-gray-200"],[1,"flex","items-center","justify-end","space-x-2"],[3,"click"],["mat-icon-button","","matTooltip","Approve Desk",3,"click"],["mat-icon-button","","matTooltip","Reject Desk",3,"click"],["mat-icon-button","","matTooltip","View Desk QR code",3,"disabled","matMenuTriggerFor"],[4,"ngIf"],[1,"p-2","mx-4","my-2","rounded-lg","border","border-black"],[1,"w-48",3,"src"],["mat-menu-item","",1,"underline"],["mat-button","",1,"w-full"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0),e._UZ(1,"custom-table",1),e.ALo(2,"async"),e.ALo(3,"async"),e.YNc(4,$,3,7,"ng-template",null,2,e.W1O),e.YNc(6,ee,1,1,"ng-template",null,3,e.W1O),e.YNc(8,te,2,7,"ng-template",null,4,e.W1O),e.YNc(10,ne,1,1,"ng-template",null,5,e.W1O),e.YNc(12,oe,18,4,"ng-template",null,6,e.W1O),e.qZA(),e.TgZ(14,"button",7),e.TgZ(15,"app-icon"),e._uU(16,"more_vert"),e.qZA(),e.qZA(),e.TgZ(17,"mat-menu",null,8),e.TgZ(19,"button",9),e.NdJ("click",function(){return n.rejectAll()}),e._uU(20,"Reject All"),e.qZA(),e.qZA()),2&t){const i=e.MAs(5),o=e.MAs(7),l=e.MAs(9),c=e.MAs(11),d=e.MAs(13),Z=e.MAs(18);let J,q;e.xp6(1),e.Q6J("dataSource",n.bookings)("filter",null==(J=e.lcZ(2,8,n.filters))?null:J.search)("columns",e.DdM(12,ie))("display_column",e.DdM(13,ae))("column_size",e.DdM(14,le))("template",e.HTZ(15,re,o,i,l,c,c,d))("empty",null!=(q=e.lcZ(3,10,n.filters))&&q.search?"No matching desk bookings":"There are no desk booking for the currently selected date."),e.xp6(13),e.Q6J("matMenuTriggerFor",Z)}},directives:[A.C,y.lW,_.p6,D.o,_.VK,_.OP,K.m,w.gM,p.O5],pipes:[p.Ov,p.uU],styles:["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;height:100%;width:100%}\n/*# sourceMappingURL=desk-bookings.component.ts-angular-inline--68.css.map*/"]}),s})();var de=r(4125),pe=r(3409),me=r(8641);let ue=(()=>{class s extends h.KG{constructor(t,n,i,o){super(),this._state=t,this._desk=n,this._desks_state=i,this._org=o,this.url=this._state.map_url,this.styles=this._state.map_styles,this.positions=this._state.map_positions,this.actions=this._state.map_actions,this.features=this._state.map_features,this.setHost=l=>this._desks_state.setOptions({host:l})}ngOnInit(){this.subscription("date",this._desk.filters.subscribe(t=>{const n=this._org.levelWithID(t.zones);n&&this._state.setLevel(n.id),this._desks_state.setOptions({date:t.date?new Date(t.date):new Date,zones:t.zones})}))}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(k.ck),e.Y36(f.H),e.Y36(k.Xp),e.Y36(v.w7))},s.\u0275cmp=e.Xpm({type:s,selectors:[["desk-map-view"]],features:[e._Bn([k.Xp]),e.qOj],decls:13,vars:19,consts:[["map","",1,"h-full","w-full","relative"],[3,"src","zoom","center","styles","features","actions"],[1,"absolute","bottom-0","right-0"],[1,"absolute","top-0","left-0","p-2","text-black"],["placeholder","User for bookings...",3,"ngModel","ngModelChange"],["info","",1,"absolute","bottom-0","rounded","p-2","m-2","bg-white","shadow","text-center"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"i-map",1),e.ALo(2,"async"),e.ALo(3,"async"),e.ALo(4,"async"),e.ALo(5,"async"),e.ALo(6,"async"),e.ALo(7,"async"),e._UZ(8,"explore-zoom-controls",2),e.TgZ(9,"div",3),e.TgZ(10,"a-user-search-field",4),e.NdJ("ngModelChange",function(o){return n.setHost(o)}),e.qZA(),e.qZA(),e.TgZ(11,"div",5),e._uU(12," Click/Tap an available desk to book it. "),e.qZA(),e.qZA()),2&t&&(e.xp6(1),e.Q6J("src",e.lcZ(2,7,n.url))("zoom",e.lcZ(3,9,n.positions).zoom)("center",e.lcZ(4,11,n.positions).center)("styles",e.lcZ(5,13,n.styles))("features",e.lcZ(6,15,n.features))("actions",e.lcZ(7,17,n.actions)),e.xp6(9),e.Q6J("ngModel",null))},directives:[de.p,pe.s,me.d,m.JJ,m.On],pipes:[p.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;position:relative;height:100%;width:100%}[info][_ngcontent-%COMP%]{left:50%;transform:translate(-50%)}\n/*# sourceMappingURL=desk-map-view.component.ts-angular-inline--70.css.map*/"]}),s})();var ge=r(8222),_e=r(2356),O=r(8482),U=r(9188),he=r(9372);function fe(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"item-list-field",7),e.NdJ("ngModelChange",function(i){const o=e.CHM(t),l=o.row,c=o.key,d=e.oxw();return d.changes[l.id]&&d.changes[l.id][c]||(d.changes[l.id]={}),d.changes[l.id][c]=i}),e.qZA()}if(2&s){const t=a.data,n=a.row,i=a.key,o=e.oxw();let l;e.Q6J("placeholder","groups"===i?"User Groups":"Features")("ngModel",null!==(l=o.changes[n.id]?o.changes[n.id][i]:null)&&void 0!==l?l:t)}}function ke(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"div",8),e.TgZ(1,"mat-form-field",9),e.TgZ(2,"input",10),e.NdJ("ngModelChange",function(i){const o=e.CHM(t),l=o.row,c=o.key,d=e.oxw();return d.changes[l.id]&&d.changes[l.id][c]||(d.changes[l.id]={}),d.changes[l.id][c]=i}),e.qZA(),e.qZA(),e.qZA()}if(2&s){const t=a.data,n=a.row,i=a.key,o=e.oxw();let l;e.xp6(2),e.Q6J("placeholder",i)("ngModel",null!==(l=o.changes[n.id]?o.changes[n.id][i]:null)&&void 0!==l?l:t)}}function ve(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"div",11),e.TgZ(1,"mat-checkbox",12),e.NdJ("ngModelChange",function(i){const l=e.CHM(t).row,c=e.oxw();return c.changes[l.id]?c.changes[l.id].bookable=i:c.changes[l.id]={bookable:i}}),e.qZA(),e.qZA()}if(2&s){const t=a.data,n=a.row,i=e.oxw();let o;e.xp6(1),e.Q6J("ngModel",null!==(o=null==i.changes[n.id]?null:i.changes[n.id].bookable)&&void 0!==o?o:t)}}function Ze(s,a){1&s&&(e.TgZ(0,"app-icon"),e._uU(1,"qr_code"),e.qZA())}function Te(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"div",13),e.TgZ(1,"div",14),e.TgZ(2,"app-icon"),e._uU(3,"warning"),e.qZA(),e.qZA(),e.TgZ(4,"button",15),e.NdJ("click",function(){const o=e.CHM(t).row;return e.oxw().removeDesk(o)}),e.TgZ(5,"app-icon"),e._uU(6,"delete"),e.qZA(),e.qZA(),e.TgZ(7,"button",16),e.YNc(8,Ze,2,0,"app-icon",17),e.qZA(),e.TgZ(9,"mat-menu",null,18),e.TgZ(11,"div",19),e._UZ(12,"img",20),e.qZA(),e.TgZ(13,"div",21),e.TgZ(14,"button",22),e._uU(15,"Print QR Code"),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&s){const t=a.row,n=e.MAs(10),i=e.oxw();e.xp6(1),e.ekj("opacity-0",!i.changes[t.id]),e.xp6(6),e.Q6J("disabled",!t.qr_code)("matMenuTriggerFor",n),e.xp6(1),e.Q6J("ngIf",t.qr_code),e.xp6(4),e.Q6J("src",t.qr_code,e.LSH)}}function be(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"div",23),e.TgZ(1,"p",24),e._uU(2),e.qZA(),e.TgZ(3,"div",25),e.TgZ(4,"button",26),e.NdJ("click",function(){return e.CHM(t),e.oxw().save()}),e._uU(5,"Save Changes"),e.qZA(),e.qZA(),e.qZA()}if(2&s){const t=e.oxw();e.xp6(2),e.hij(" ",t.changed," Desk(s) with unsaved changes ")}}function Me(s,a){if(1&s&&(e.TgZ(0,"div",27),e._UZ(1,"mat-spinner",28),e.TgZ(2,"p"),e._uU(3),e.qZA(),e.qZA()),2&s){const t=e.oxw();e.xp6(3),e.Oqu(t.loading)}}const Ce=function(){return["id","bookable","name","groups","features","actions"]},xe=function(){return["ID","Bookable","Name","Groups","Features"," "]},Ae=function(){return["8r","6r","12r","flex","16r","10r"]},ye=function(s,a,t,n,i,o){return{id:s,name:a,bookable:t,groups:n,features:i,actions:o}},De=[{path:"",component:X,children:[{path:"events",component:ce},{path:"map",component:ue},{path:"manage",component:(()=>{class s{constructor(t,n){this._state=t,this._org=n,this.changes={},this.filters=this._state.filters,this.desks=this._state.desks}get changed(){return Object.keys(this.changes).length}save(){return(0,u.mG)(this,void 0,void 0,function*(){this.loading="Saving changes to desks...";const n=(yield this.desks.pipe((0,b.q)(1)).toPromise()).map(l=>new v.nk(Object.assign(Object.assign({},l),this.changes[l.id]||{})).toJSON()),i=yield this.filters.pipe((0,b.q)(1)).toPromise(),o=this._org.levelWithID(i.zones);yield(0,ge.Ymr)(o.id,{name:"desks",description:"desks",details:n}).toPromise().catch(l=>{throw this.loading="",(0,h.cB)(`Error saving desk data. Error: ${l.message||l}`),l}),(0,h.t5)("Successfully updated desks"),this.loading="",this.changes={}})}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(f.H),e.Y36(v.w7))},s.\u0275cmp=e.Xpm({type:s,selectors:[["desks-manage"]],decls:13,vars:23,consts:[[1,"min-w-[72rem]","block",3,"dataSource","filter","columns","display_column","column_size","template","empty"],["list_edit_template",""],["text_edit_template",""],["bookable_edit_template",""],["action_template",""],["class","fixed bottom-2 left-1/2 transform -translate-x-1/2 p-4 rounded bg-white shadow",4,"ngIf"],["class","absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-white bg-opacity-60",4,"ngIf"],["hide-outline","",1,"w-full",3,"placeholder","ngModel","ngModelChange"],["hide-outline","",1,"w-full","h-12"],["appearance","outline",1,"h-12","w-full"],["matInput","",3,"placeholder","ngModel","ngModelChange"],[1,"flex","items-center","justify-center","pl-4"],[3,"ngModel","ngModelChange"],[1,"flex","items-center","justify-end","space-x-2"],["matTooltip","Desk has unsaved changes",1,"p-2","text-2xl","text-pending"],["mat-icon-button","",3,"click"],["mat-icon-button","",3,"disabled","matMenuTriggerFor"],[4,"ngIf"],["menu","matMenu"],[1,"p-2","mx-4","my-2","rounded-lg","border","border-black"],[1,"w-48",3,"src"],["mat-menu-item","",1,"underline"],["mat-button","",1,"w-full"],[1,"fixed","bottom-2","left-1/2","transform","-translate-x-1/2","p-4","rounded","bg-white","shadow"],[1,"mb-2","text-xl"],[1,"flex","items-center","justify-center"],["save","","mat-button","",3,"click"],[1,"absolute","inset-0","flex","flex-col","items-center","justify-center","space-y-2","bg-white","bg-opacity-60"],["diameter","32"]],template:function(t,n){if(1&t&&(e._UZ(0,"custom-table",0),e.ALo(1,"async"),e.ALo(2,"async"),e.YNc(3,fe,1,2,"ng-template",null,1,e.W1O),e.YNc(5,ke,3,2,"ng-template",null,2,e.W1O),e.YNc(7,ve,2,1,"ng-template",null,3,e.W1O),e.YNc(9,Te,16,6,"ng-template",null,4,e.W1O),e.YNc(11,be,6,1,"div",5),e.YNc(12,Me,4,1,"div",6)),2&t){const i=e.MAs(4),o=e.MAs(6),l=e.MAs(8),c=e.MAs(10);let d,Z;e.Q6J("dataSource",n.desks)("filter",null==(d=e.lcZ(1,9,n.filters))?null:d.search)("columns",e.DdM(13,Ce))("display_column",e.DdM(14,xe))("column_size",e.DdM(15,Ae))("template",e.HTZ(16,ye,o,o,l,i,i,c))("empty",null!=(Z=e.lcZ(2,11,n.filters))&&Z.search?"No matching desks":"No desks for selected level"),e.xp6(11),e.Q6J("ngIf",n.changed>0),e.xp6(1),e.Q6J("ngIf",n.loading)}},directives:[A.C,p.O5,_e.q9,m.JJ,m.On,M.KE,O.Nt,m.Fj,U.oG,w.gM,D.o,y.lW,_.p6,_.VK,_.OP,he.$g],pipes:[p.Ov],styles:[""]}),s})()},{path:"**",redirectTo:"events"}]},{path:"**",redirectTo:"events"}];let we=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[p.ez,m.u5,T.Nh,m.UX,j.v,k.P2,N.Fk,M.lN,U.p9,O.c,g.Bz.forChild(De)]]}),s})()}}]);
//# sourceMappingURL=apps_concierge_src_app_desks_desks_module_ts.js.map