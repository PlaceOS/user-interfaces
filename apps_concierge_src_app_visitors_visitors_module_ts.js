"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_visitors_visitors_module_ts"],{1579:(Ut,y,l)=>{l.r(y),l.d(y,{VisitorsModule:()=>Jt});var m=l(6575),h=l(8849),f=l(2649),S=l(7910),d=l(1670),v=l(462),A=l(8159),D=l(9681),P=l(5046),E=l(5933),Q=l(6520),j=l(8175),I=l(5746),z=l(680),Y=l(7422),M=l(6939),R=l(7016),H=l(5822),L=l(7343),k=l(4884),u=l(7109),$=l(8377),g=l(8466),C=l(3121),t=l(9039),w=l(7401);let x=(()=>{class s extends u.cx{get search(){return this._search.getValue()}get time_format(){return this._settings.time_format}constructor(e,n,o){super(),this._dialog=e,this._org=n,this._settings=o,this._poll=new v.X(0),this._filters=new v.X({}),this._search=new v.X(""),this._loading=new v.X(!1),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this.bookings=(0,A.aj)([this._org.active_building,this._filters,this._poll]).pipe((0,P.h)(([i])=>!!i),(0,E.b)(150),(0,Q.w)(([i,a])=>{this._loading.next(!0);const r=a.date?new Date(a.date):new Date,_=(0,R.Z)(r),p=(0,H.Z)(_,a.period||1);return(0,g.F2)({type:"visitor",period_start:(0,L.Z)(_),period_end:(0,L.Z)(p),zones:(a.zones||[]).join(",")||i.id,include_checked_out:!0}).pipe((0,j.K)(Z=>(0,D.of)([])))}),(0,I.b)(()=>this._loading.next(!1)),(0,z.d)(1)),this.filtered_bookings=(0,A.aj)([this._search,this.bookings]).pipe((0,Y.U)(([i,a])=>{const r=i.toLowerCase();return a.filter(p=>p.asset_name?.toLowerCase().includes(r)||p.user_name?.toLowerCase().includes(r)||p.user_email?.toLowerCase().includes(r)||p.asset_id?.toLowerCase().includes(r)).sort((p,Z)=>p.date-Z.date)}))}setFilters(e){this._filters.next({...this._filters.getValue(),...e})}setSearchString(e){this._search.next(e)}poll(){this._poll.next(Date.now())}startPolling(e=3e4){this.interval("poll",()=>this._poll.next(Date.now()),e)}stopPolling(){this.clearInterval("poll")}setExt(e,n,o){var i=this;return(0,d.Z)(function*(){const a={...e.extension_data};a[n]=o,yield(0,$.sF)(e.id,{...e,extension_data:a}).toPromise(),i._poll.next(Date.now())})()}approveVisitor(e){var n=this;return(0,d.Z)(function*(){const o=yield(0,u._5)({title:"Approve Visitor",content:`Approve attendance of ${e.asset_name||e.asset_id} to their meeting?`,icon:{content:"event_available"}},n._dialog);if("done"!==o.reason)return o.close();o.loading("Updating guest details"),yield(0,g.jT)(e.id).toPromise().catch(i=>{throw(0,u.cB)(`Error approving visitor: ${i.message||i.error||i}`),o.close(),i}),(0,u.t5)("Successfully approved visitor"),n._poll.next(Date.now()),o.close()})()}declineVisitor(e){var n=this;return(0,d.Z)(function*(){const o=yield(0,u._5)({title:"Decline Visitor",content:`Decline attendance of ${e.asset_name||e.asset_id} to their meeting?`,icon:{content:"event_available"}},n._dialog);if("done"!==o.reason)return o.close();o.loading("Updating guest details"),yield(0,g.FP)(e.id).toPromise().catch(i=>{throw(0,u.cB)(`Error declining visitor: ${i.message||i.error||i}`),o.close(),i}),(0,u.t5)("Successfully declining visitor"),n._poll.next(Date.now()),o.close()})()}setCheckinState(e,n=!0){return(0,d.Z)(function*(){yield(0,g.FD)(e.id,n).toPromise().catch(i=>{throw(0,u.cB)(`Error checking ${n?"in":"out"} ${e.asset_name||e.asset_id} for ${e.user_name}'s meeting`),i}),(0,u.t5)(`Successfully checked ${n?"in":"out"} ${e.asset_name||e.asset_id} from ${e.user_name}'s meeting`)})()}setCheckinStateForEvent(e,n=!0){var o=this;return(0,d.Z)(function*(){if(!e)return;const a=(yield o.bookings.pipe((0,M.q)(1)).toPromise()).filter(r=>r.parent_id===e||r.extension_data.parent_id===e||r.linked_event?.id===e||r.linked_event?.event_id===e);a.length&&(yield Promise.all(a.map(r=>(0,g.FD)(r.id,n).toPromise().catch(_=>{throw(0,u.cB)(`Error checking ${n?"in":"out"} ${r.asset_name||r.asset_id} for ${r.user_name}'s meeting`),_}))),(0,u.t5)(`Successfully checked ${n?"in":"out"} all visitors from ${a[0].user_name}'s meeting`),o._poll.next(Date.now()))})()}downloadVisitorsList(){var e=this;return(0,d.Z)(function*(){const n=yield e.filtered_bookings.pipe((0,M.q)(1)).toPromise();if(!n.length)return;const{date:o}=e._filters.getValue(),i=n.map(r=>({Name:r.asset_name,Email:r.asset_id,"Checked In":r.checked_in,Host:r.user_email||"",Status:r.status,Date:(0,k.Z)(r.date,"dd MMM "+e.time_format)})),a=(0,u.o3)(i);(0,u.Sv)(`visitor-list-${(0,k.Z)(o||Date.now(),"MMM-dd")}.csv`,a)})()}static#t=this.\u0275fac=function(n){return new(n||s)(t.LFG(w.uw),t.LFG(C.w7),t.LFG(u.gb))};static#e=this.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var K=l(2349),V=l(8173),W=l(7627),J=l(1771),U=l(6410),G=l(1268),F=l(162),T=l(257);function B(s,c){if(1&s&&(t.TgZ(0,"mat-option",5),t._uU(1),t.qZA()),2&s){const e=c.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.display_name||e.name," ")}}let X=(()=>{class s extends u.cx{constructor(e,n,o,i){super(),this._state=e,this._org=n,this._route=o,this._router=i,this.zones=[],this.levels=this._org.active_levels,this.filters=this._state.filters,this.setDate=a=>this._state.setFilters({date:a}),this.setFilters=a=>this._state.setFilters(a),this.setSearch=a=>this._state.setSearchString(a),this.updateZones=a=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:a.join(",")}}),this._state.setFilters({zones:a})}}ngOnInit(){var e=this;return(0,d.Z)(function*(){yield e._org.initialised.pipe((0,W.P)(n=>n)).toPromise(),e.subscription("route.query",e._route.queryParamMap.subscribe(n=>{if(n.has("zone_ids")){const o=n.get("zone_ids").split(",");if(o.length){const i=e._org.levelWithID(o);if(e.zones=o,!i)return;e._org.building=e._org.buildings.find(a=>a.id===i.parent_id)}}})),e.subscription("levels",e._org.active_levels.subscribe(n=>{e.zones=e.zones.filter(o=>n.find(i=>i.id===o)),!e.zones.length&&n.length&&e.zones.push(n[0].id),e.updateZones(e.zones)})),e.setSearch("")})()}static#t=this.\u0275fac=function(n){return new(n||s)(t.Y36(x),t.Y36(C.w7),t.Y36(f.gz),t.Y36(f.F0))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["visitors-topbar"]],features:[t.qOj],decls:17,vars:10,consts:[[1,"flex","items-center","bg-base-100","h-20","px-4","border-b","border-base-200","space-x-2"],["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["placeholder","Viewing Period",3,"ngModel","ngModelChange"],[3,"value"],[1,"flex-1","w-2"],[1,"mr-2",3,"modelChange"],[3,"dateChange"]],template:function(n,o){if(1&n&&(t.TgZ(0,"div",0)(1,"mat-form-field",1)(2,"mat-select",2),t.NdJ("ngModelChange",function(a){return o.zones=a})("ngModelChange",function(a){return o.updateZones(a)}),t.YNc(3,B,2,2,"mat-option",3),t.ALo(4,"async"),t.qZA()(),t.TgZ(5,"mat-form-field",1)(6,"mat-select",4),t.NdJ("ngModelChange",function(a){return o.setFilters({period:a})}),t.ALo(7,"async"),t.TgZ(8,"mat-option",5),t._uU(9,"Show Day"),t.qZA(),t.TgZ(10,"mat-option",5),t._uU(11,"Show Week"),t.qZA(),t.TgZ(12,"mat-option",5),t._uU(13,"Show Month"),t.qZA()()(),t._UZ(14,"div",6),t.TgZ(15,"searchbar",7),t.NdJ("modelChange",function(a){return o.setSearch(a)}),t.qZA(),t.TgZ(16,"date-options",8),t.NdJ("dateChange",function(a){return o.setDate(a)}),t.qZA()()),2&n){let i;t.xp6(2),t.Q6J("ngModel",o.zones),t.xp6(1),t.Q6J("ngForOf",t.lcZ(4,6,o.levels)),t.xp6(3),t.Q6J("ngModel",(null==(i=t.lcZ(7,8,o.filters))?null:i.period)||1),t.xp6(2),t.Q6J("value",1),t.xp6(2),t.Q6J("value",7),t.xp6(2),t.Q6J("value",30)}},dependencies:[m.sg,h.JJ,h.On,J.E,U.U,G.KE,F.gD,T.ey,m.Ov],styles:["mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n\n/*# sourceMappingURL=visitors-topbar.component.ts-angular-inline--112.css.map*/"]})}return s})();var b=l(8128),q=l(702),tt=l(4702),et=l(4888),nt=l(7442),ot=l(3884);function it(s,c){1&s&&(t.TgZ(0,"i",12),t._uU(1," close "),t.qZA())}function st(s,c){1&s&&(t.TgZ(0,"i",13),t._uU(1," done "),t.qZA())}function at(s,c){if(1&s&&t.YNc(0,it,2,0,"i",10)(1,st,2,0,"ng-template",null,11,t.W1O),2&s){const e=c.row,n=t.MAs(2);t.Q6J("ngIf",!(null!=e&&e.checked_in))("ngIfElse",n)}}function lt(s,c){if(1&s&&t._uU(0),2&s){const e=c.row;t.hij(" ",null==e.extension_data?null:e.extension_data.host," ")}}function rt(s,c){if(1&s&&(t.TgZ(0,"button",17),t._uU(1),t.qZA()),2&s){const e=t.oxw().row;t.xp6(1),t.hij(" ",null!=e.extension_data&&e.extension_data.vaccination_confirmed?"Confirmed":!1===(null==e.extension_data?null:e.extension_data.vaccination_confirmed)?"Rejected":"Submitted"," ")}}function ct(s,c){if(1&s){const e=t.EpF();t.TgZ(0,"div",18),t._UZ(1,"img",19),t.TgZ(2,"button",20),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().row,i=t.oxw();return t.KtG(i.setExt(o,"vaccination_confirmed",!0))}),t._uU(3," Confirm Vaccination Proof "),t.qZA(),t.TgZ(4,"button",21),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().row,i=t.oxw();return t.KtG(i.setExt(o,"vaccination_confirmed",!1))}),t._uU(5," Reject Vaccination Proof "),t.qZA()()}if(2&s){const e=t.oxw().row;t.xp6(1),t.Q6J("src",null==e.extension_data||null==e.extension_data.vaccination_proof?null:e.extension_data.vaccination_proof.url,t.LSH)}}function ut(s,c){if(1&s&&(t.TgZ(0,"div",14),t.YNc(1,rt,2,1,"button",15),t.qZA(),t.YNc(2,ct,6,1,"ng-template",null,16,t.W1O)),2&s){const e=c.row,n=t.MAs(3);t.Q6J("content",n),t.xp6(1),t.Q6J("ngIf",null==e.extension_data||null==e.extension_data.vaccination_proof?null:e.extension_data.vaccination_proof.url)}}function mt(s,c){if(1&s&&(t.TgZ(0,"button",17),t._uU(1),t.qZA()),2&s){const e=t.oxw().row;t.xp6(1),t.hij(" ",null!=e.extension_data&&e.extension_data.id_confirmed?"Confirmed":!1===(null==e.extension_data?null:e.extension_data.id_confirmed)?"Rejected":"Submitted"," ")}}function pt(s,c){if(1&s){const e=t.EpF();t.TgZ(0,"div",18),t._UZ(1,"img",23),t.TgZ(2,"button",20),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().row,i=t.oxw();return t.KtG(i.setExt(o,"id_confirmed",!0))}),t._uU(3," Confirm ID "),t.qZA(),t.TgZ(4,"button",21),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().row,i=t.oxw();return t.KtG(i.setExt(o,"id_confirmed",!1))}),t._uU(5," Reject ID "),t.qZA()()}if(2&s){const e=t.oxw().row;t.xp6(1),t.Q6J("src",null==e.extension_data||null==e.extension_data.id_data?null:e.extension_data.id_data.url,t.LSH)}}function dt(s,c){if(1&s&&(t.TgZ(0,"div",14),t.YNc(1,mt,2,1,"button",15),t.qZA(),t.YNc(2,pt,6,1,"ng-template",null,22,t.W1O)),2&s){const e=c.row,n=t.MAs(3);t.Q6J("content",n),t.xp6(1),t.Q6J("ngIf",null==e.extension_data||null==e.extension_data.id_data?null:e.extension_data.id_data.url)}}function _t(s,c){if(1&s){const e=t.EpF();t.TgZ(0,"button",24)(1,"div",25)(2,"div",26),t._uU(3),t.qZA(),t.TgZ(4,"app-icon",27),t._uU(5,"arrow_drop_down"),t.qZA()()(),t.TgZ(6,"mat-menu",null,28)(8,"button",29),t.NdJ("click",function(){const i=t.CHM(e).row,a=t.oxw();return t.KtG(a.approveVisitor(i))}),t._uU(9," Approve Visitor "),t.qZA(),t.TgZ(10,"button",29),t.NdJ("click",function(){const i=t.CHM(e).row,a=t.oxw();return t.KtG(a.declineVisitor(i))}),t._uU(11," Decline Visitor "),t.qZA()()}if(2&s){const e=c.row,n=t.MAs(7);t.ekj("!text-success-content","approved"===(null==e?null:e.status))("!bg-success","approved"===(null==e?null:e.status))("!text-error-content","declined"===(null==e?null:e.status))("!bg-error","declined"===(null==e?null:e.status)),t.Q6J("matMenuTriggerFor",n),t.xp6(3),t.hij(" ","approved"===(null==e?null:e.status)?"Approved":"declined"===(null==e?null:e.status)?"Declined":"Pending"," ")}}function gt(s,c){if(1&s&&(t._uU(0),t.ALo(1,"date"),t.ALo(2,"async")),2&s){const e=c.row,n=t.oxw();let o;t.hij(" ",t.xi3(1,1,e.date,(null==(o=t.lcZ(2,4,n.filters))?null:o.period)>1?"MMM d, "+n.time_format:n.time_format)," ")}}function ht(s,c){if(1&s&&(t.TgZ(0,"a",40),t._uU(1),t.qZA()),2&s){const e=c.$implicit;t.Q6J("href",e.url,t.LSH),t.xp6(1),t.Oqu(e.name)}}function ft(s,c){if(1&s){const e=t.EpF();t.TgZ(0,"button",30)(1,"app-icon",27),t._uU(2," event "),t.qZA()(),t.TgZ(3,"mat-menu",null,31)(5,"button",29),t.NdJ("click",function(){const i=t.CHM(e).row,a=t.oxw();return t.KtG(a.checkinAllVisitors(i))}),t.TgZ(6,"div",32)(7,"app-icon",27),t._uU(8,"event_available"),t.qZA(),t.TgZ(9,"div"),t._uU(10,"Checkin All for Booking"),t.qZA()()(),t.TgZ(11,"button",29),t.NdJ("click",function(){const i=t.CHM(e).row,a=t.oxw();return t.KtG(a.checkoutAllVisitors(i))}),t.TgZ(12,"div",32)(13,"app-icon",27),t._uU(14,"event_busy"),t.qZA(),t.TgZ(15,"div"),t._uU(16,"Checkout All for Booking"),t.qZA()()()(),t.TgZ(17,"button",33)(18,"app-icon"),t._uU(19,"attachment"),t.qZA()(),t.TgZ(20,"mat-menu",null,28),t.YNc(22,ht,2,2,"a",34),t.qZA(),t.TgZ(23,"action-icon",35),t.NdJ("click",function(){const i=t.CHM(e).row,a=t.oxw();return t.KtG(a.setExt(i,"remote",!i.extension_data.remote))}),t.qZA(),t.TgZ(24,"action-icon",36),t.NdJ("click",function(){const i=t.CHM(e).row,a=t.oxw();return t.KtG(a.checkin(i))}),t.qZA(),t.TgZ(25,"action-icon",37),t.NdJ("click",function(){const i=t.CHM(e).row,a=t.oxw();return t.KtG(a.checkout(i))}),t.qZA(),t.TgZ(26,"a",38)(27,"app-icon"),t._uU(28,"email"),t.qZA()(),t.TgZ(29,"action-icon",39),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.printQRCode())}),t.qZA()}if(2&s){const e=c.row,n=t.MAs(4),o=t.MAs(21),i=t.oxw();t.ekj("pointer-events-none",!e.linked_event),t.Q6J("matMenuTriggerFor",n),t.xp6(1),t.ekj("opacity-0",!e.linked_event),t.xp6(16),t.Q6J("disabled",!(null!=e.attachments&&e.attachments.length))("matMenuTriggerFor",o),t.xp6(5),t.Q6J("ngForOf",e.attachments),t.xp6(1),t.Q6J("matTooltip",e.extension_data.remote?"Set as In-Person Visitor":"Set as Remote Visitior")("loading","remote"===i.loading)("content",e.extension_data.remote?"tap_and_play":"business"),t.xp6(1),t.Q6J("loading","checkin"===i.loading)("state",null!=e&&e.checked_in?"success":""),t.xp6(1),t.Q6J("loading","checkout"===i.loading),t.xp6(1),t.Q6J("href","mailto:"+(null==e?null:e.asset_id),t.LSH)("matTooltip",(null==e?null:e.user_email)===(null==e?null:e.asset_id)?"Email Host":"Email Guest"),t.xp6(3),t.ekj("invisible",!i.can_print),t.Q6J("loading","printing"===i.loading)}}function vt(s,c){if(1&s){const e=t.EpF();t.TgZ(0,"button",41),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.downloadVisitorList())}),t.TgZ(1,"app-icon"),t._uU(2,"download"),t.qZA()()}}const xt=(s,c,e,n,o,i)=>({state:s,status:c,date:e,host:n,id_data:o,actions:i});let N=(()=>{class s{get columns(){return["state","date","asset_name","user_name","asset_id","status","actions"]}get display_columns(){const e={state:" ",date:"Time",asset_name:"Person",user_name:"Host",asset_id:"Email",id_data:"ID",status:"State",actions:" "};return this.columns.map(n=>e[n]||n)}get column_sizes(){const e={state:"3.5r",date:"8r",asset_name:"12r",user_name:"12r",asset_id:"flex",id_data:"8r",status:"10r",actions:"16r"};return this.columns.map(n=>e[n]||n)}get time_format(){return this._settings.time_format}constructor(e,n){var o=this;this._state=e,this._settings=n,this.guests=this._state.filtered_bookings,this.search=this._state.search,this.filters=this._state.filters,this.downloadVisitorList=()=>this._state.downloadVisitorsList(),this.approveVisitor=i=>this._state.approveVisitor(i),this.declineVisitor=i=>this._state.declineVisitor(i),this.checkinAllVisitors=i=>this._state.setCheckinStateForEvent(i.linked_event?.id,!0),this.checkoutAllVisitors=i=>this._state.setCheckinStateForEvent(i.linked_event?.id,!1),this.setExt=(i,a,r)=>this._state.setExt(i,a,r),this.checkin=function(){var i=(0,d.Z)(function*(a){yield o._state.setCheckinState(a,!0),o._state.poll()});return function(a){return i.apply(this,arguments)}}(),this.checkout=function(){var i=(0,d.Z)(function*(a){yield o._state.setCheckinState(a,!1),o._state.poll()});return function(a){return i.apply(this,arguments)}}()}static#t=this.\u0275fac=function(n){return new(n||s)(t.Y36(x),t.Y36(u.gb))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["guest-listings"]],decls:20,vars:21,consts:[[1,"w-full","flex","flex-col","flex-1","text-sm","h-full","overflow-auto","pb-20"],[1,"min-w-[72rem]",3,"dataSource","filter","columns","display_column","column_size","template","empty"],["state_template",""],["host_template",""],["vaccinated_template",""],["id_template",""],["status_template",""],["date_template",""],["action_template",""],["class","bg-secondary hover:shadow-lg shadow absolute bottom-4 right-4 text-white h-12 w-12","matTooltip","Download Visitor List","matTooltipPosition","left","icon","","matRipple","",3,"click",4,"ngIf"],["matTooltip","Not checked in","class","flex items-center justify-center rounded-full material-icons border-2 border-dashed border-neutral text-xl h-9 w-9",4,"ngIf","ngIfElse"],["checkin_state",""],["matTooltip","Not checked in",1,"flex","items-center","justify-center","rounded-full","material-icons","border-2","border-dashed","border-neutral","text-xl","h-9","w-9"],["matTooltip","Checked In",1,"flex","items-center","justify-center","rounded-full","material-icons","bg-success","border-2","border-neutral","text-white","text-xl","h-9","w-9"],["customTooltip","",3,"content"],["matRipple","","class","bg-success rounded-3xl px-4 py-2 text-white",4,"ngIf"],["vaccine_confirmation",""],["matRipple","",1,"bg-success","rounded-3xl","px-4","py-2","text-white"],[1,"bg-base-100","rounded","p-2","flex","flex-col","space-y-2","my-2","w-[20rem]"],[1,"max-w-[20rem]","max-h-[20rem]","p-2","object-contain",3,"src"],["matRipple","",3,"click"],["matRipple","",1,"inverse","mt-2",3,"click"],["id_confirmation",""],[1,"max-w-[20rem]","max-h-[20rem]","object-contain",3,"src"],["matRipple","",1,"rounded-3xl","bg-warning","text-warning-content","border-none",3,"matMenuTriggerFor"],[1,"flex","items-center"],[1,"mx-2"],[1,"text-2xl"],["menu","matMenu"],["mat-menu-item","",3,"click"],["icon","","matRipple","","matTooltip","Linked to Room Booking",1,"pl-2",3,"matMenuTriggerFor"],["checkin_menu","matMenu"],[1,"flex","items-center","space-x-2"],["icon","","matRipple","","title","","matTooltip","View Attachments",3,"disabled","matMenuTriggerFor"],["mat-menu-item","",3,"href",4,"ngFor","ngForOf"],["remote","",3,"matTooltip","loading","content","click"],["checkin","","matTooltip","Checkin Guest","content","event_available",3,"loading","state","click"],["checkout","","matTooltip","Checkout Guest","content","event_busy",3,"loading","click"],["icon","","matRipple","",3,"href","matTooltip"],["matTooltip","Print QR Code","content","event_busy",3,"loading","click"],["mat-menu-item","",3,"href"],["matTooltip","Download Visitor List","matTooltipPosition","left","icon","","matRipple","",1,"bg-secondary","hover:shadow-lg","shadow","absolute","bottom-4","right-4","text-white","h-12","w-12",3,"click"]],template:function(n,o){if(1&n&&(t.TgZ(0,"div",0),t._UZ(1,"custom-table",1),t.ALo(2,"async"),t.ALo(3,"async"),t.qZA(),t.YNc(4,at,3,2,"ng-template",null,2,t.W1O)(6,lt,1,1,"ng-template",null,3,t.W1O)(8,ut,4,2,"ng-template",null,4,t.W1O)(10,dt,4,2,"ng-template",null,5,t.W1O)(12,_t,12,10,"ng-template",null,6,t.W1O)(14,gt,3,6,"ng-template",null,7,t.W1O)(16,ft,30,19,"ng-template",null,8,t.W1O)(18,vt,3,0,"button",9),t.ALo(19,"async")),2&n){const i=t.MAs(5),a=t.MAs(7),r=t.MAs(11),_=t.MAs(13),p=t.MAs(15),Z=t.MAs(17);let O;t.xp6(1),t.Q6J("dataSource",o.guests)("filter",t.lcZ(2,8,o.search))("columns",o.columns)("display_column",o.display_columns)("column_size",o.column_sizes)("template",t.HTZ(14,xt,i,_,p,a,r,Z))("empty",t.lcZ(3,10,o.search)?"No matching visitors":"There are visitors for the currently selected date."),t.xp6(17),t.Q6J("ngIf",null==(O=t.lcZ(19,12,o.guests))?null:O.length)}},dependencies:[m.sg,m.O5,b.VK,b.OP,b.p6,q.gM,T.wG,tt.m,et.o,nt.C,ot.X,m.Ov,m.uU]})}return s})();const Tt=["app-visitors",""];function Zt(s,c){1&s&&t._UZ(0,"mat-progress-bar",4)}let Ct=(()=>{class s{constructor(e){this._state=e,this.loading=this._state.loading,this.filters=this._state.filters}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}static#t=this.\u0275fac=function(n){return new(n||s)(t.Y36(x))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["","app-visitors",""]],attrs:Tt,decls:6,vars:3,consts:[[1,"relative","w-full","flex","flex-col","bg-base-200"],[1,"w-full"],[1,"w-full","flex-1","h-0"],["class","w-full","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"w-full"]],template:function(n,o){1&n&&(t._UZ(0,"sidebar"),t.TgZ(1,"main",0),t._UZ(2,"visitors-topbar",1)(3,"guest-listings",2),t.YNc(4,Zt,1,0,"mat-progress-bar",3),t.ALo(5,"async"),t.qZA()),2&n&&(t.xp6(4),t.Q6J("ngIf",t.lcZ(5,1,o.loading)))},dependencies:[m.O5,K.k,V.pW,X,N,m.Ov],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%}\n\n/*# sourceMappingURL=visitors.component.ts-angular-inline--111.css.map*/"]})}return s})();var wt=l(5080);let bt=(()=>{class s{constructor(e){this._dialog_ref=e}onDone(){this._dialog_ref.close()}static#t=this.\u0275fac=function(n){return new(n||s)(t.Y36(w.so))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["invite-visitor-modal"]],decls:2,vars:0,consts:[[1,"relative","min-w-[40rem]","min-h-[40rem]"],[3,"done"]],template:function(n,o){1&n&&(t.TgZ(0,"main",0)(1,"invite-visitor-form",1),t.NdJ("done",function(){return o.onDone()}),t.qZA()())},dependencies:[wt.C]})}return s})();var yt=l(3005),At=l(9842);const Mt=["app-new-visitors",""];function Lt(s,c){if(1&s&&(t.TgZ(0,"mat-option",14),t._uU(1),t.qZA()),2&s){const e=c.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.display_name||e.name," ")}}function kt(s,c){1&s&&t._UZ(0,"mat-progress-bar",15)}const Vt=[{path:"",component:Ct},{path:"new",component:(()=>{class s{constructor(e,n,o,i,a){this._state=e,this._org=n,this._router=o,this._route=i,this._dialog=a,this.loading=this._state.loading,this.filters=this._state.filters,this.zones=[],this.levels=this._org.active_levels,this.setDate=r=>this._state.setFilters({date:r}),this.setFilters=r=>this._state.setFilters(r),this.setSearch=r=>this._state.setSearchString(r),this.updateZones=r=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:r.join(",")}}),this._state.setFilters({zones:r})}}inviteVisitor(){this._dialog.open(bt)}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}static#t=this.\u0275fac=function(n){return new(n||s)(t.Y36(x),t.Y36(C.w7),t.Y36(f.F0),t.Y36(f.gz),t.Y36(w.uw))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["","app-new-visitors",""]],attrs:Mt,decls:21,vars:7,consts:[[1,"flex","flex-1","h-px"],[1,"flex","flex-col","flex-1","w-1/2","h-full"],[1,"flex","items-center","p-4","space-x-2"],[1,"text-2xl","font-medium"],[1,"flex-1","w-2"],[3,"dateChange"],["btn","","matRipple","",3,"click"],[1,"flex","items-center","px-4","pb-4"],["appearance","outline",1,"no-subscript"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"modelChange"],[1,"w-full","flex-1","h-0"],["class","w-full","mode","indeterminate",4,"ngIf"],[3,"value"],["mode","indeterminate",1,"w-full"]],template:function(n,o){1&n&&(t._UZ(0,"app-topbar"),t.TgZ(1,"div",0),t._UZ(2,"app-sidebar"),t.TgZ(3,"main",1)(4,"div",2)(5,"h2",3),t._uU(6,"Visitors"),t.qZA(),t._UZ(7,"div",4),t.TgZ(8,"date-options",5),t.NdJ("dateChange",function(a){return o.setDate(a)}),t.qZA(),t.TgZ(9,"button",6),t.NdJ("click",function(){return o.inviteVisitor()}),t._uU(10," Invite Visitor "),t.qZA()(),t.TgZ(11,"div",7)(12,"mat-form-field",8)(13,"mat-select",9),t.NdJ("ngModelChange",function(a){return o.zones=a})("ngModelChange",function(a){return o.updateZones(a)}),t.YNc(14,Lt,2,2,"mat-option",10),t.ALo(15,"async"),t.qZA()(),t._UZ(16,"div",4),t.TgZ(17,"searchbar",11),t.NdJ("modelChange",function(a){return o.setSearch(a)}),t.qZA()(),t._UZ(18,"guest-listings",12),t.YNc(19,kt,1,0,"mat-progress-bar",13),t.ALo(20,"async"),t.qZA()()),2&n&&(t.xp6(13),t.Q6J("ngModel",o.zones),t.xp6(1),t.Q6J("ngForOf",t.lcZ(15,3,o.levels)),t.xp6(5),t.Q6J("ngIf",t.lcZ(20,5,o.loading)))},dependencies:[m.sg,m.O5,h.JJ,h.On,J.E,U.U,yt.O,At.u,G.KE,F.gD,T.ey,V.pW,T.wG,N,m.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--b1)}\n\n/*# sourceMappingURL=new-visitors.component.ts-angular-inline--113.css.map*/"]})}return s})()}];let Jt=(()=>{class s{static#t=this.\u0275fac=function(n){return new(n||s)};static#e=this.\u0275mod=t.oAB({type:s});static#n=this.\u0275inj=t.cJS({imports:[m.ez,h.u5,S.v,g.EP,f.Bz.forChild(Vt)]})}return s})()}}]);
//# sourceMappingURL=apps_concierge_src_app_visitors_visitors_module_ts.js.map