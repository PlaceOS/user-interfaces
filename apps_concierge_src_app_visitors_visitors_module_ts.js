"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_visitors_visitors_module_ts"],{4513:(Wt,O,c)=>{c.r(O),c.d(O,{VisitorsModule:()=>$t});var _=c(6477),y=c(9542),k=c(6585),P=c(5454),g=c(1670),C=c(4505),w=c(7716),D=c(9727),A=c(4139),N=c(823),Q=c(9095),S=c(8759),I=c(9128),M=c(7418),Z=c(6942),z=c(3910),E=c(9377),q=c(312),f=c(1810),F=c(3861),d=c(1426),p=c(1320),v=c(5533),V=c(5375),Y=c(5912),t=c(6839),H=c(7486);let x=(()=>{class i extends d.cx{get search(){return this._search.getValue()}constructor(e,n){super(),this._dialog=e,this._org=n,this._poll=new C.X(0),this._filters=new C.X({}),this._search=new C.X(""),this._loading=new C.X(!1),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this.guests=(0,w.aj)([this._filters,this._poll]).pipe((0,N.b)(150),(0,Q.w)(([o])=>{this._loading.next(!0);const s=o.date?new Date(o.date):new Date,a=(0,E.Z)(s),r=(0,q.Z)(a,o.period||1);return(0,v.ro)({period_start:(0,f.Z)(a),period_end:(0,f.Z)(r),zone_ids:(o.zones||[]).join(",")})}),(0,S.b)(()=>this._loading.next(!1)),(0,I.d)(1)),this.events=(0,w.aj)([this._filters,this._poll]).pipe((0,N.b)(150),(0,Q.w)(([o])=>{this._loading.next(!0);const s=o.date?new Date(o.date):new Date,a=(0,E.Z)(s),r=(0,q.Z)(a,o.period||1);return(0,D.$R)((0,p.u$)({period_start:(0,f.Z)(a),period_end:(0,f.Z)(r),zone_ids:(o.zones||[]).join(",")}).pipe((0,M.K)(u=>(0,A.of)([]))),(0,V.F2)({type:"visitor",period_start:(0,f.Z)(a),period_end:(0,f.Z)(r),zones:this._org.building?.id}).pipe((0,Z.U)(u=>u.map(m=>(0,p.Yd)(m))),(0,M.K)(u=>(0,A.of)([]))),(0,V.F2)({type:"room",period_start:(0,f.Z)(a),period_end:(0,f.Z)(r),zones:(o.zones||[]).join(",")}).pipe((0,Z.U)(u=>u.map(m=>(0,p.Yd)(m))),(0,M.K)(u=>(0,A.of)([]))))}),(0,Z.U)(([o,s,a])=>{const r=[...o,...s,...a];return this._loading.next(!1),this._filters.getValue().all_bookings?r:r.filter(u=>u?.guests?.length&&u?.attendees?.length>1)}),(0,I.d)(1)),this.filtered_events=(0,w.aj)([this._search,this.events]).pipe((0,Z.U)(([o,s])=>{const a=o.toLowerCase();return s.filter(r=>r.attendees.find(u=>u.name?.toLowerCase().includes(a)||u.email?.toLowerCase().includes(a)))})),this.filtered_guests=(0,w.aj)([this._search,this.filtered_events,this.guests]).pipe((0,Z.U)(([o,s,a])=>{const r=o.toLowerCase();return(0,d.xH)(s.map(u=>u.attendees.filter(h=>h.is_external&&(h.name?.toLowerCase().includes(r)||h.email?.toLowerCase().includes(r))).map(h=>{const T=a.find(Bt=>Bt.email===h.email)||{};return new v.OO({...h,...T,extension_data:{...h.extension_data,...T.extension_data,date:u.date,host:u.organiser?.name||u.organiser?.email||u.host}})})))}))}setFilters(e){this._filters.next({...this._filters.getValue(),...e})}setSearchString(e){this._search.next(e)}startPolling(e=3e4){this.interval("poll",()=>this._poll.next(Date.now()),e)}stopPolling(){this.clearInterval("poll")}checkGuestIn(e,n){var o=this;return(0,g.Z)(function*(){const a=yield o._checkinCall(e,n.email,!0).toPromise().catch(u=>{throw(0,d.cB)(`Error checking in ${n.name} for ${e.organiser?.name}'s meeting`),u});(0,d.t5)(`Successfully checked in ${n.name} for ${e.organiser?.name}'s meeting`);const r=(0,d.Tw)([a,...e.attendees],"email");return r.sort((u,m)=>u.organizer?-1:u.email.localeCompare(m.email)),new p.ym({...e,attendees:r})})()}setExt(e,n,o){return(0,g.Z)(function*(){const s={...e.extension_data};s[n]=o,yield(0,v.sF)(e.id,{...e,extension_data:s}).toPromise()})()}approveVisitor(e){var n=this;return(0,g.Z)(function*(){const o=yield(0,d._5)({title:"Approve Visitor",content:`Approve attendance of ${e.name} to their meeting?`,icon:{content:"event_available"}},n._dialog);if("done"!==o.reason)return o.close();o.loading("Updating guest details"),yield(0,v.sF)(e.id,{...e,extension_data:{...e.extension_data,status:"approved"}}).toPromise(),o.close()})()}declineVisitor(e){var n=this;return(0,g.Z)(function*(){const o=yield(0,d._5)({title:"Decline Visitor",content:`Decline attendance of ${e.name} to their meeting?`,icon:{content:"event_available"}},n._dialog);if("done"!==o.reason)return o.close();o.loading("Updating guest details"),yield(0,v.sF)(e.id,{...e,extension_data:{...e.extension_data,status:"declined"}}).toPromise(),o.close()})()}checkGuestOut(e,n){var o=this;return(0,g.Z)(function*(){const s=yield o._checkinCall(e,n.email,!1).toPromise().catch(r=>{throw(0,d.cB)(`Error checking out ${n.name} from ${e.organiser?.name}'s meeting`),r});(0,d.t5)(`Successfully checked out ${n.name} from ${e.organiser?.name}'s meeting`);const a=(0,d.Tw)([s,...e.attendees],"email");return a.sort((r,u)=>r.organizer?-1:r.email.localeCompare(u.email)),new p.ym({...e,attendees:a})})()}checkAllGuestsIn(e){var n=this;return(0,g.Z)(function*(){const o=e.attendees.filter(r=>r.is_external&&!r.checked_in);if(o.length<=0)throw new Error("No Guests to checkin");const s=yield Promise.all(o.map(r=>n._checkinCall(e,r.email,!0).toPromise())).catch(r=>{throw(0,d.cB)(`Error checking in all guests for ${e.organiser?.name}'s meeting`),r});(0,d.t5)(`Successfully checked in all guests for ${e.organiser?.name}'s meeting`);const a=(0,d.Tw)([...s,...e.attendees],"email");return a.sort((r,u)=>r.organizer?-1:r.email.localeCompare(u.email)),new p.ym({...e,attendees:a})})()}checkAllGuestsOut(e){var n=this;return(0,g.Z)(function*(){const o=e.attendees.filter(r=>r.is_external&&r.checked_in&&!r.organizer);if(o.length<=0)throw new Error("No Guests to checkout");const s=yield Promise.all(o.map(r=>n._checkinCall(e,r.email,!1).toPromise())).catch(r=>{throw(0,d.cB)(`Error checking out all guests from ${e.organiser?.name}'s meeting`),r});(0,d.t5)(`Successfully checked out all guests from ${e.organiser?.name}'s meeting`);const a=(0,d.Tw)([...s,...e.attendees],"email");return a.sort((r,u)=>r.organizer?-1:r.email.localeCompare(u.email)),new p.ym({...e,attendees:a})})()}_checkinCall(e,n,o=!0){return e.from_bookings?(0,V.ad)(e.id,n,o):(0,p.rq)(e.id,n,o,{system_id:e.system?.id||e.resources[0]?.id})}downloadVisitorsList(){var e=this;return(0,g.Z)(function*(){const n=yield e.filtered_guests.pipe((0,z.q)(1)).toPromise();if(!n.length)return;const{date:o}=e._filters.getValue(),s=n.map(r=>({Name:r.name,Email:r.email,"Checked In":r.checked_in,Host:r.extension_data?.host||"",Status:r.status,Date:(0,F.Z)(r.extension_data?.date,"dd MMM h:mm a")})),a=(0,d.o3)(s);(0,d.Sv)(`visitor-list-${(0,F.Z)(o||Date.now(),"MMM-dd")}.csv`,a)})()}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(H.uw),t.LFG(Y.w7))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var R=c(6866),K=c(3320),$=c(6297),B=c(5670),W=c(8441),X=c(9396),tt=c(8750),et=c(6508),b=c(7728),nt=c(4291);function it(i,l){if(1&i&&(t.TgZ(0,"mat-option",5),t._uU(1),t.qZA()),2&i){const e=l.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.display_name||e.name," ")}}function ot(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"mat-slide-toggle",6),t.NdJ("ngModelChange",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.setFilters({all_bookings:o}))}),t.ALo(1,"async"),t.TgZ(2,"div",7),t._uU(3,"All Bookings"),t.qZA()()}if(2&i){const e=t.oxw();let n;t.Q6J("ngModel",null==(n=t.lcZ(1,1,e.filters))?null:n.all_bookings)}}let st=(()=>{class i extends d.cx{constructor(e,n,o,s){super(),this._state=e,this._org=n,this._route=o,this._router=s,this.zones=[],this.levels=this._org.active_levels,this.filters=this._state.filters,this.setDate=a=>this._state.setFilters({date:a}),this.setFilters=a=>this._state.setFilters(a),this.setSearch=a=>this._state.setSearchString(a),this.updateZones=a=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:a.join(",")}}),this._state.setFilters({zones:a})}}ngOnInit(){var e=this;return(0,g.Z)(function*(){yield e._org.initialised.pipe((0,B.P)(n=>n)).toPromise(),e.subscription("route.query",e._route.queryParamMap.subscribe(n=>{if(n.has("zone_ids")){const o=n.get("zone_ids").split(",");if(o.length){const s=e._org.levelWithID(o);if(e.zones=o,!s)return;e._org.building=e._org.buildings.find(a=>a.id===s.parent_id)}}})),e.subscription("levels",e._org.active_levels.subscribe(n=>{e.zones=e.zones.filter(o=>n.find(s=>s.id===o)),!e.zones.length&&n.length&&e.zones.push(n[0].id),e.updateZones(e.zones)})),e.setSearch("")})()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(x),t.Y36(Y.w7),t.Y36(k.gz),t.Y36(k.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["visitors-topbar"]],features:[t.qOj],decls:23,vars:16,consts:[[1,"flex","items-center","bg-white","dark:bg-neutral-700","h-20","px-4","border-b","border-gray-300","dark:border-neutral-500","space-x-2"],["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["placeholder","Viewing Period",3,"ngModel","ngModelChange"],[3,"value"],[1,"m-2",3,"ngModel","ngModelChange"],[1,"text-xs"],["class","m-2",3,"ngModel","ngModelChange",4,"ngIf"],[1,"flex-1","w-2"],[1,"mr-2",3,"modelChange"],[3,"dateChange"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0)(1,"mat-form-field",1)(2,"mat-select",2),t.NdJ("ngModelChange",function(s){return n.zones=s})("ngModelChange",function(s){return n.updateZones(s)}),t.YNc(3,it,2,2,"mat-option",3),t.ALo(4,"async"),t.qZA()(),t.TgZ(5,"mat-form-field",1)(6,"mat-select",4),t.NdJ("ngModelChange",function(s){return n.setFilters({period:s})}),t.ALo(7,"async"),t.TgZ(8,"mat-option",5),t._uU(9,"Show Day"),t.qZA(),t.TgZ(10,"mat-option",5),t._uU(11,"Show Week"),t.qZA(),t.TgZ(12,"mat-option",5),t._uU(13,"Show Month"),t.qZA()()(),t.TgZ(14,"mat-slide-toggle",6),t.NdJ("ngModelChange",function(s){return n.setFilters({show_guests:s})}),t.ALo(15,"async"),t.TgZ(16,"div",7),t._uU(17,"Only Guests"),t.qZA()(),t.YNc(18,ot,4,3,"mat-slide-toggle",8),t.ALo(19,"async"),t._UZ(20,"div",9),t.TgZ(21,"searchbar",10),t.NdJ("modelChange",function(s){return n.setSearch(s)}),t.qZA(),t.TgZ(22,"date-options",11),t.NdJ("dateChange",function(s){return n.setDate(s)}),t.qZA()()),2&e){let o,s,a;t.xp6(2),t.Q6J("ngModel",n.zones),t.xp6(1),t.Q6J("ngForOf",t.lcZ(4,8,n.levels)),t.xp6(3),t.Q6J("ngModel",(null==(o=t.lcZ(7,10,n.filters))?null:o.period)||1),t.xp6(2),t.Q6J("value",1),t.xp6(2),t.Q6J("value",7),t.xp6(2),t.Q6J("value",30),t.xp6(2),t.Q6J("ngModel",null==(s=t.lcZ(15,12,n.filters))?null:s.show_guests),t.xp6(4),t.Q6J("ngIf",!(null!=(a=t.lcZ(19,14,n.filters))&&a.show_guests))}},dependencies:[_.sg,_.O5,y.JJ,y.On,W.E,X.U,tt.KE,et.gD,b.ey,nt.Rr,_.Ov],styles:["mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n/*# sourceMappingURL=visitors-topbar.component.ts-angular-inline--108.css.map*/"]}),i})();var U=c(2423),L=c(1637),J=c(5306),j=c(6198);function lt(i,l){1&i&&(t.TgZ(0,"i",15),t._uU(1,"face"),t.qZA())}function at(i,l){if(1&i&&(t.ynx(0),t.YNc(1,lt,2,0,"i",14),t.BQk()),2&i){t.oxw();const e=t.MAs(4),n=t.oxw();t.xp6(1),t.Q6J("ngIf",!(null!=n.visitor&&n.visitor.checked_in))("ngIfElse",e)}}function rt(i,l){1&i&&(t.TgZ(0,"i",16),t._uU(1,"done"),t.qZA())}function ct(i,l){1&i&&(t.TgZ(0,"i",17),t._uU(1,"assignment_ind"),t.qZA())}function ut(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"action-icon",18),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.toggleRemote())}),t.qZA()}if(2&i){const e=t.oxw(2);t.ekj("invisible",!(null!=e.visitor&&e.visitor.is_external)||(null==e.visitor?null:e.visitor.organizer)),t.Q6J("matTooltip",e.remote?"Set as In-Person Visitor":"Set as Remote Visitior")("loading","remote"===e.loading)("content",e.remote?"tap_and_play":"business")}}function dt(i,l){if(1&i&&(t.TgZ(0,"div",19)(1,"h2"),t._uU(2),t.qZA(),t.TgZ(3,"div")(4,"span"),t._uU(5,"Host:"),t.qZA(),t._uU(6),t.qZA(),t.TgZ(7,"div")(8,"span"),t._uU(9,"Purpose:"),t.qZA(),t._uU(10),t.qZA(),t.TgZ(11,"div")(12,"span"),t._uU(13,"Location:"),t.qZA(),t._uU(14),t.qZA(),t.TgZ(15,"div")(16,"span"),t._uU(17,"Issue Date:"),t.qZA(),t._uU(18),t.ALo(19,"date"),t.qZA(),t.TgZ(20,"div",20),t._UZ(21,"img",21),t.qZA()()),2&i){const e=t.oxw(2);t.xp6(2),t.Oqu((null==e.visitor?null:e.visitor.name)||(null==e.visitor?null:e.visitor.email)),t.xp6(4),t.hij(" ",(null==e.event||null==e.event.organiser?null:e.event.organiser.name)||(null==e.event||null==e.event.organiser?null:e.event.organiser.name)||(null==e.event?null:e.event.creator)," "),t.xp6(4),t.hij(" ",null==e.event?null:e.event.title,""),t.xp6(4),t.hij(" ",(null==e.event?null:e.event.location)||"<Unspecified>"," "),t.xp6(4),t.hij(" ",t.xi3(19,6,e.today,"mediumDate")," "),t.xp6(3),t.Q6J("src",(null==e.visitor||null==e.visitor.extension_data||null==e.visitor.extension_data.qr?null:e.visitor.extension_data.qr.code)||"",t.LSH)}}function _t(i,l){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",1),t.YNc(2,at,2,2,"ng-container",2),t.YNc(3,rt,2,0,"ng-template",null,3,t.W1O),t.YNc(5,ct,2,0,"ng-template",null,4,t.W1O),t.qZA(),t.TgZ(7,"div",5),t._uU(8),t.qZA(),t.TgZ(9,"div",6),t.YNc(10,ut,1,5,"action-icon",7),t.TgZ(11,"action-icon",8),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.checkin())}),t.qZA(),t.TgZ(12,"action-icon",9),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.checkout())}),t.qZA(),t.TgZ(13,"a",10)(14,"app-icon"),t._uU(15,"email"),t.qZA()(),t.TgZ(16,"action-icon",11),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.printQRCode())}),t.qZA()(),t._UZ(17,"div",12),t.YNc(18,dt,22,9,"div",13),t.BQk()}if(2&i){const e=t.MAs(6),n=t.oxw();t.xp6(2),t.Q6J("ngIf",!(null!=n.visitor&&n.visitor.organizer))("ngIfElse",e),t.xp6(6),t.hij(" ",(null==n.visitor?null:n.visitor.name)||(null==n.visitor?null:n.visitor.email)," "),t.xp6(2),t.Q6J("ngIf",n.is_event),t.xp6(1),t.ekj("invisible",!(null!=n.visitor&&n.visitor.is_external)||(null==n.visitor?null:n.visitor.organizer)),t.Q6J("loading","checkin"===n.loading)("state",null!=n.visitor&&n.visitor.checked_in?"success":""),t.xp6(1),t.ekj("invisible",!(null!=n.visitor&&n.visitor.is_external)||(null==n.visitor?null:n.visitor.organizer)),t.Q6J("loading","checkout"===n.loading),t.xp6(1),t.Q6J("href","mailto:"+(null==n.visitor?null:n.visitor.email),t.LSH)("matTooltip",null!=n.visitor&&n.visitor.organizer?"Email Host":"Email Guest"),t.xp6(3),t.ekj("invisible",!n.can_print),t.Q6J("loading","printing"===n.loading),t.xp6(2),t.Q6J("ngIf",n.show_qr_code)}}let gt=(()=>{class i extends d.cx{get is_event(){return!this.event.from_bookings}get can_print(){return this._settings.get("app.can_print_qr")&&this.visitor.checked_in&&this.visitor?.extension_data.qr}get today(){return Date.now()}get remote(){return!!this.event?.extension_data?.remote?.find(e=>e===this.visitor?.email)}constructor(e,n,o){var s;super(),s=this,this._state=e,this._settings=n,this._space_pipe=o,this.eventChange=new t.vpe,this.checkin=(0,g.Z)(function*(){s.loading="checkin",s.event=yield s._state.checkGuestIn(s.event,s.visitor).catch(a=>s.event),s.eventChange.emit(s.event),s.loading=""}),this.toggleRemote=(0,g.Z)(function*(){if(!s.is_event)return(0,d.cB)("Unable to set remote status for standalone visitor bookings.");s.loading="remote";const a=s.event.ext("remote")?.filter(m=>m!==s.visitor.email)||[];s.remote||a.push(s.visitor.email);const r=new p.ym({...s.event.toJSON(),remote:a}).toJSON(),u=yield s._space_pipe?.transform(s.event?.resources[0]?.email);s.event=yield(0,p.ry)(r,{system_id:s.event?.resources[0]?.id||s.event?.system?.id||u.id}).toPromise().catch(m=>((0,d.cB)(`Error setting visitor status. Error: ${m.statusText||m.message||m}`),s.event)),s.eventChange.emit(s.event),s.loading=""}),this.checkout=(0,g.Z)(function*(){s.loading="checkout",s.event=yield s._state.checkGuestOut(s.event,s.visitor).catch(a=>s.event),s.eventChange.emit(s.event),s.loading=""}),this.printQRCode=()=>{this.show_qr_code=!0,this.timeout("print",()=>{window.print(),this.show_qr_code=!1},50)}}ngOnChanges(e){e.visitor&&this.loadGuest()}loadGuest(e=0){var n=this;return(0,g.Z)(function*(){n.visitor&&(n.loading="printing",n.visitor.checked_in&&!(yield(0,v.pP)(n.visitor.email).toPromise().catch(s=>null))?.extension_data?.qr?.code&&e<5?n.timeout("load_guest",()=>n.loadGuest(++e),1e3):n.loading="")})()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(x),t.Y36(d.gb),t.Y36(j.X,8))},i.\u0275cmp=t.Xpm({type:i,selectors:[["visitor-details"]],inputs:{event:"event",visitor:"visitor"},outputs:{eventChange:"eventChange"},features:[t._Bn([j.X]),t.qOj,t.TTD],decls:1,vars:1,consts:[[4,"ngIf"],["details","",1,"w-12","text-lg","flex","justify-center"],[4,"ngIf","ngIfElse"],["checkin_state",""],["host_state",""],["flex","",1,"p-2","flex-1"],[1,"w-48","py-2","flex","items-center","justify-end"],["remote","",3,"matTooltip","loading","content","invisible","click",4,"ngIf"],["checkin","","matTooltip","Checkin Guest","content","event_available",3,"loading","state","click"],["checkout","","matTooltip","Checkout Guest","content","event_busy",3,"loading","click"],["icon","","matRipple","",3,"href","matTooltip"],["matTooltip","Print QR Code","content","event_busy",3,"loading","click"],[1,"w-14","p-2"],["qr-code","","class","print-only fixed inset-0 flex flex-col justify-center bg-white space-y-2",4,"ngIf"],["class","p-2 rounded-full material-icons border-2 border-dotted border-gray-600 dark:border-neutral-800",4,"ngIf","ngIfElse"],[1,"p-2","rounded-full","material-icons","border-2","border-dotted","border-gray-600","dark:border-neutral-800"],[1,"p-2","rounded-full","material-icons","bg-green-600","border-2","border-green-600","text-white"],[1,"p-2","rounded-full","material-icons","bg-blue-600","border-2","border-blue-600","text-white"],["remote","",3,"matTooltip","loading","content","click"],["qr-code","",1,"print-only","fixed","inset-0","flex","flex-col","justify-center","bg-white","space-y-2"],[1,"flex","justify-center"],["alt","qr-code",3,"src"]],template:function(e,n){1&e&&t.YNc(0,_t,19,17,"ng-container",0),2&e&&t.Q6J("ngIf",n.visitor)},dependencies:[_.O5,U.gM,b.wG,L.m,J.o,_.uU],styles:["[_nghost-%COMP%]{display:flex;align-items:center;width:100%;padding:0 .5rem}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center;height:100%;border-bottom:1px solid #ccc;height:3.5rem}[_nghost-%COMP%] > div[_ngcontent-%COMP%]:first-child{border:none}.invisible[_ngcontent-%COMP%]{opacity:0;pointer-events:none}\n/*# sourceMappingURL=visitor-details.component.ts-angular-inline--110.css.map*/"]}),i})();function mt(i,l){1&i&&(t.TgZ(0,"i",17),t._uU(1,"event"),t.qZA())}function pt(i,l){1&i&&(t.TgZ(0,"i",17),t._uU(1,"close"),t.qZA())}function ht(i,l){1&i&&(t.TgZ(0,"i",18),t._uU(1,"done"),t.qZA())}function ft(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"div",3)(1,"div",4),t.YNc(2,mt,2,0,"i",5),t.YNc(3,pt,2,0,"i",5),t.YNc(4,ht,2,0,"i",6),t.qZA(),t.TgZ(5,"div",7),t._uU(6),t.ALo(7,"date"),t.ALo(8,"async"),t.qZA(),t.TgZ(9,"div",8),t._uU(10),t.qZA(),t.TgZ(11,"div",9),t._uU(12),t.qZA(),t.TgZ(13,"div",10),t._uU(14),t.qZA(),t.TgZ(15,"div",11)(16,"action-icon",12),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.checkinGuests())}),t.qZA(),t.TgZ(17,"action-icon",13),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.checkoutGuests())}),t.qZA(),t.TgZ(18,"a",14)(19,"app-icon"),t._uU(20,"email"),t.qZA()()(),t.TgZ(21,"div",15)(22,"button",16),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.show_attendees=!o.show_attendees)}),t.TgZ(23,"app-icon"),t._uU(24),t.qZA()()()()}if(2&i){const e=t.oxw();let n;t.xp6(2),t.Q6J("ngIf","declined"!==(null==e.event?null:e.event.status)&&"done"!==(null==e.event?null:e.event.state)),t.xp6(1),t.Q6J("ngIf","declined"===(null==e.event?null:e.event.status)),t.xp6(1),t.Q6J("ngIf","done"===(null==e.event?null:e.event.state)&&"declined"!==(null==e.event?null:e.event.status)),t.xp6(2),t.hij(" ",t.xi3(7,15,null==e.event?null:e.event.date,(null==(n=t.lcZ(8,18,e.filters))?null:n.period)>1?"MMM d, h:mm a":"shortTime")," "),t.xp6(4),t.hij(" ",(null==e.event||null==e.event.organiser?null:e.event.organiser.name)||(null==e.event||null==e.event.organiser?null:e.event.organiser.email)," "),t.xp6(2),t.Oqu(null==e.event?null:e.event.title),t.xp6(2),t.Oqu(null==e.event?null:e.event.location),t.xp6(2),t.Q6J("loading","checkin"===e.loading)("disabled",e.guestCount<=0),t.xp6(1),t.Q6J("loading","checkout"===e.loading)("disabled",e.guestCount<=0),t.xp6(1),t.Q6J("href","mailto:"+(null==e.event||null==e.event.organiser?null:e.event.organiser.email),t.LSH),t.xp6(4),t.Q6J("disabled",!(null!=e.event&&null!=e.event.attendees&&e.event.attendees.length))("matTooltip",e.show_attendees||e.has_search?"Hide Attendees":"Show Attendees"),t.xp6(2),t.Oqu(e.show_attendees?"keyboard_arrow_down":"keyboard_arrow_right")}}function vt(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"div",20),t._UZ(1,"div",21),t.TgZ(2,"visitor-details",22),t.NdJ("eventChange",function(o){t.CHM(e);const s=t.oxw(2);return t.KtG(s.event=o)}),t.qZA()()}if(2&i){const e=l.$implicit,n=t.oxw(2);t.xp6(2),t.Q6J("visitor",e)("event",n.event),t.uIk("disabled",!n.matches[e.email])}}const xt=function(){return[]};function Zt(i,l){if(1&i&&(t.ynx(0),t.YNc(1,vt,3,3,"div",19),t.BQk()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",(null==e.event?null:e.event.attendees)||t.DdM(1,xt))}}let Tt=(()=>{class i extends d.cx{get guestCount(){return this.event?.attendees?.reduce((e,n)=>e+(n.is_external&&!n.organizer?1:0),0)||0}get has_search(){return this._state.search}constructor(e){var n;super(),n=this,this._state=e,this.matches={},this.filters=this._state.filters,this.checkinGuests=(0,g.Z)(function*(){n.loading="checkin",n.event=yield n._state.checkAllGuestsIn(n.event).catch(o=>n.event),n.loading=""}),this.checkoutGuests=(0,g.Z)(function*(){n.loading="checkout",n.event=yield n._state.checkAllGuestsOut(n.event).catch(o=>n.event),n.loading=""})}ngOnInit(){this.subscription("events",this._state.filtered_events.subscribe(()=>this.updateMatches()))}updateMatches(){if(!this.event)return;this.matches={};const e=(this._state.search||"").toLowerCase();for(const n of this.event?.attendees||[])this.matches[n.email]=!e||n.email.toLowerCase().includes(e)||n.name.toLowerCase().includes(e)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(x))},i.\u0275cmp=t.Xpm({type:i,selectors:[["visitor-event"]],inputs:{event:"event"},features:[t.qOj],decls:3,vars:4,consts:[["event","","class","flex items-center px-2 bg-gray-100 dark:bg-neutral-700",4,"ngIf"],["attendees","",1,"w-full","overflow-hidden","relative","border-b","border-gray-300","dark:border-neutral-600"],[4,"ngIf"],["event","",1,"flex","items-center","px-2","bg-gray-100","dark:bg-neutral-700"],[1,"w-12","text-lg","flex","justify-center"],["class","p-2 rounded-full material-icons bg-gray-400 dark:bg-neutral-800",4,"ngIf"],["class","p-2 rounded-full material-icons bg-gray-400 dark:bg-neutral-800 opacity-40",4,"ngIf"],[1,"w-24","p-2"],[1,"w-48","p-2"],["flex","",1,"p-2","flex-1"],[1,"w-64","p-2","truncate"],[1,"w-32","py-2","flex","items-center"],["checkin","","matTooltip","Checkin All Guests","content","event_available",3,"loading","disabled","click"],["checkout","","matTooltip","Checkout All Guests","content","event_busy",3,"loading","disabled","click"],["icon","","matRipple","","matTooltip","Email Host",3,"href"],[1,"w-16","p-2"],["icon","","matRipple","",3,"disabled","matTooltip","click"],[1,"p-2","rounded-full","material-icons","bg-gray-400","dark:bg-neutral-800"],[1,"p-2","rounded-full","material-icons","bg-gray-400","dark:bg-neutral-800","opacity-40"],["visitor","","class","relative w-full pl-12 bg-gray-200 dark:bg-neutral-600",4,"ngFor","ngForOf"],["visitor","",1,"relative","w-full","pl-12","bg-gray-200","dark:bg-neutral-600"],[1,"absolute","left-8","top-1/2","-translate-y-full","border-b-2","border-l-2","border-gray-400","dark:border-neutral-700","w-4","h-full"],[3,"visitor","event","eventChange"]],template:function(e,n){1&e&&(t.YNc(0,ft,25,20,"div",0),t.TgZ(1,"div",1),t.YNc(2,Zt,2,2,"ng-container",2),t.qZA()),2&e&&(t.Q6J("ngIf",n.event),t.xp6(1),t.Udp("height",n.show_attendees||n.has_search?3.5*(null==n.event||null==n.event.attendees?null:n.event.attendees.length)+"rem":"0rem"),t.xp6(1),t.Q6J("ngIf",n.show_attendees||n.has_search))},dependencies:[_.sg,_.O5,U.gM,b.wG,L.m,J.o,gt,_.Ov,_.uU],styles:["[_nghost-%COMP%]{width:100%}visitor-details[_ngcontent-%COMP%]{transition:opacity .2s}[attendees][_ngcontent-%COMP%]{transition:height .2s}[visitor][_ngcontent-%COMP%]{height:3.5rem}[disabled=true][_ngcontent-%COMP%]{opacity:.35}\n/*# sourceMappingURL=visitor-event.component.ts-angular-inline--109.css.map*/"]}),i})();function Ct(i,l){1&i&&t._UZ(0,"visitor-event",13),2&i&&t.Q6J("event",l.$implicit)}function wt(i,l){if(1&i&&(t.ynx(0),t.YNc(1,Ct,1,1,"visitor-event",12),t.ALo(2,"async"),t.BQk()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,2,e.bookings))("ngForTrackBy",e.trackByFn)}}function bt(i,l){1&i&&(t.TgZ(0,"div",14)(1,"p",15),t._uU(2," There are no visitors for the currently selected date. "),t.qZA()())}let yt=(()=>{class i{constructor(e){this._state=e,this.bookings=this._state.filtered_events}trackByFn(e,n){return n?n.id:void 0}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(x))},i.\u0275cmp=t.Xpm({type:i,selectors:[["visitor-listings"]],decls:19,vars:4,consts:[[1,"w-full","flex","flex-col","flex-1","text-sm","h-full"],[1,"w-full","flex","items-center","bg-white","dark:bg-neutral-700","border-b","border-gray-500","p-2","font-medium"],[1,"w-12","p-2"],[1,"w-24","p-2"],[1,"w-48","p-2"],["flex","",1,"p-2","flex-1"],[1,"w-64","p-2"],[1,"w-32","p-2"],[1,"w-16","p-2"],[1,"w-full","flex-1","overflow-auto","h-1/2"],[4,"ngIf","ngIfElse"],["empty_state",""],[3,"event",4,"ngFor","ngForOf","ngForTrackBy"],[3,"event"],[1,"h-full","w-full","flex","items-center","justify-center"],[1,"p-8"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"div",2),t.TgZ(3,"div",3),t._uU(4,"Time"),t.qZA(),t.TgZ(5,"div",4),t._uU(6,"Host"),t.qZA(),t.TgZ(7,"div",5),t._uU(8,"Title"),t.qZA(),t.TgZ(9,"div",6),t._uU(10,"Location"),t.qZA(),t.TgZ(11,"div",7),t._uU(12,"Actions"),t.qZA(),t._UZ(13,"div",8),t.qZA(),t.TgZ(14,"div",9),t.YNc(15,wt,3,4,"ng-container",10),t.ALo(16,"async"),t.qZA()(),t.YNc(17,bt,3,0,"ng-template",null,11,t.W1O)),2&e){const o=t.MAs(18);let s;t.xp6(15),t.Q6J("ngIf",null==(s=t.lcZ(16,2,n.bookings))?null:s.length)("ngIfElse",o)}},dependencies:[_.sg,_.O5,Tt,_.Ov]}),i})();var G=c(9314),kt=c(1110),At=c(3970);function Mt(i,l){1&i&&(t.TgZ(0,"i",12),t._uU(1,"face"),t.qZA())}function Vt(i,l){1&i&&(t.TgZ(0,"i",13),t._uU(1,"done"),t.qZA())}function Ut(i,l){if(1&i&&(t.YNc(0,Mt,2,0,"i",10),t.YNc(1,Vt,2,0,"ng-template",null,11,t.W1O)),2&i){const e=l.row,n=t.MAs(2);t.Q6J("ngIf",!(null!=e&&e.checked_in))("ngIfElse",n)}}function Lt(i,l){if(1&i&&t._uU(0),2&i){const e=l.row;t.hij(" ",null==e.extension_data?null:e.extension_data.host," ")}}function Jt(i,l){if(1&i&&(t.TgZ(0,"button",17),t._uU(1),t.qZA()),2&i){const e=t.oxw().row;t.xp6(1),t.hij(" ",null!=e.extension_data&&e.extension_data.vaccination_confirmed?"Confirmed":!1===(null==e.extension_data?null:e.extension_data.vaccination_confirmed)?"Rejected":"Submitted"," ")}}function Gt(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"div",18),t._UZ(1,"img",19),t.TgZ(2,"button",20),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().row,s=t.oxw();return t.KtG(s.setExt(o,"vaccination_confirmed",!0))}),t._uU(3," Confirm Vaccination Proof "),t.qZA(),t.TgZ(4,"button",21),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().row,s=t.oxw();return t.KtG(s.setExt(o,"vaccination_confirmed",!1))}),t._uU(5," Reject Vaccination Proof "),t.qZA()()}if(2&i){const e=t.oxw().row;t.xp6(1),t.Q6J("src",null==e.extension_data||null==e.extension_data.vaccination_proof?null:e.extension_data.vaccination_proof.url,t.LSH)}}function Ot(i,l){if(1&i&&(t.TgZ(0,"div",14),t.YNc(1,Jt,2,1,"button",15),t.qZA(),t.YNc(2,Gt,6,1,"ng-template",null,16,t.W1O)),2&i){const e=l.row,n=t.MAs(3);t.Q6J("content",n),t.xp6(1),t.Q6J("ngIf",null==e.extension_data||null==e.extension_data.vaccination_proof?null:e.extension_data.vaccination_proof.url)}}function Nt(i,l){if(1&i&&(t.TgZ(0,"button",17),t._uU(1),t.qZA()),2&i){const e=t.oxw().row;t.xp6(1),t.hij(" ",null!=e.extension_data&&e.extension_data.id_confirmed?"Confirmed":!1===(null==e.extension_data?null:e.extension_data.id_confirmed)?"Rejected":"Submitted"," ")}}function Qt(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"div",18),t._UZ(1,"img",23),t.TgZ(2,"button",20),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().row,s=t.oxw();return t.KtG(s.setExt(o,"id_confirmed",!0))}),t._uU(3," Confirm ID "),t.qZA(),t.TgZ(4,"button",21),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().row,s=t.oxw();return t.KtG(s.setExt(o,"id_confirmed",!1))}),t._uU(5," Reject ID "),t.qZA()()}if(2&i){const e=t.oxw().row;t.xp6(1),t.Q6J("src",null==e.extension_data||null==e.extension_data.id_data?null:e.extension_data.id_data.url,t.LSH)}}function It(i,l){if(1&i&&(t.TgZ(0,"div",14),t.YNc(1,Nt,2,1,"button",15),t.qZA(),t.YNc(2,Qt,6,1,"ng-template",null,22,t.W1O)),2&i){const e=l.row,n=t.MAs(3);t.Q6J("content",n),t.xp6(1),t.Q6J("ngIf",null==e.extension_data||null==e.extension_data.id_data?null:e.extension_data.id_data.url)}}function Et(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"button",24)(1,"div",25)(2,"div",26),t._uU(3),t.qZA(),t.TgZ(4,"app-icon",27),t._uU(5,"arrow_drop_down"),t.qZA()()(),t.TgZ(6,"mat-menu",null,28)(8,"button",29),t.NdJ("click",function(){const s=t.CHM(e).row,a=t.oxw();return t.KtG(a.approveVisitor(s))}),t._uU(9," Approve Visitor "),t.qZA(),t.TgZ(10,"button",29),t.NdJ("click",function(){const s=t.CHM(e).row,a=t.oxw();return t.KtG(a.declineVisitor(s))}),t._uU(11," Decline Visitor "),t.qZA()()}if(2&i){const e=l.row,n=t.MAs(7);t.ekj("bg-success","approved"===(null==e?null:e.status))("!bg-error","declined"===(null==e?null:e.status)),t.Q6J("matMenuTriggerFor",n),t.xp6(3),t.hij(" ","approved"===(null==e?null:e.status)?"Approved":"declined"===(null==e?null:e.status)?"Declined":"Pending"," ")}}function qt(i,l){if(1&i&&(t._uU(0),t.ALo(1,"date"),t.ALo(2,"async")),2&i){const e=l.row,n=t.oxw();let o;t.hij(" ",t.xi3(1,1,null==e.extension_data?null:e.extension_data.date,(null==(o=t.lcZ(2,4,n.filters))?null:o.period)>1?"MMM d, h:mm a":"shortTime")," ")}}function Ft(i,l){if(1&i&&(t.TgZ(0,"a",37),t._uU(1),t.qZA()),2&i){const e=l.$implicit;t.Q6J("href",e.url,t.LSH),t.xp6(1),t.Oqu(e.name)}}function Yt(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"button",30)(1,"app-icon"),t._uU(2,"attachment"),t.qZA()(),t.TgZ(3,"mat-menu",null,28),t.YNc(5,Ft,2,2,"a",31),t.qZA(),t.TgZ(6,"action-icon",32),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.toggleRemote())}),t.qZA(),t.TgZ(7,"action-icon",33),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.checkin())}),t.qZA(),t.TgZ(8,"action-icon",34),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.checkout())}),t.qZA(),t.TgZ(9,"a",35)(10,"app-icon"),t._uU(11,"email"),t.qZA()(),t.TgZ(12,"action-icon",36),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.printQRCode())}),t.qZA()}if(2&i){const e=l.row,n=t.MAs(4),o=t.oxw();t.Q6J("disabled",!(null!=e.attachments&&e.attachments.length))("matMenuTriggerFor",n),t.xp6(5),t.Q6J("ngForOf",e.attachments),t.xp6(1),t.ekj("invisible",!(null!=e&&e.is_external)||(null==e?null:e.organizer)),t.Q6J("matTooltip",o.remote?"Set as In-Person Visitor":"Set as Remote Visitior")("loading","remote"===o.loading)("content",o.remote?"tap_and_play":"business"),t.xp6(1),t.ekj("invisible",!(null!=e&&e.is_external)||(null==e?null:e.organizer)),t.Q6J("loading","checkin"===o.loading)("state",null!=e&&e.checked_in?"success":""),t.xp6(1),t.ekj("invisible",!(null!=e&&e.is_external)||(null==e?null:e.organizer)),t.Q6J("loading","checkout"===o.loading),t.xp6(1),t.Q6J("href","mailto:"+(null==e?null:e.email),t.LSH)("matTooltip",null!=e&&e.organizer?"Email Host":"Email Guest"),t.xp6(3),t.ekj("invisible",!o.can_print),t.Q6J("loading","printing"===o.loading)}}function jt(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"button",38),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.downloadVisitorList())}),t.TgZ(1,"app-icon"),t._uU(2,"download"),t.qZA()()}}const Pt=function(i,l,e,n,o,s,a){return{state:i,status:l,date:e,host:n,vaccinated:o,id_data:s,actions:a}};let Dt=(()=>{class i{get columns(){return this._settings.get("app.guests.vaccine_check")?["state","date","name","host","email","vaccinated","id_data","status","actions"]:["state","date","name","host","email","status","actions"]}get display_columns(){const e={state:" ",date:"Date",name:"Person",host:"Host",email:"Email",vaccinated:"Vaccinated",id_data:"ID",status:"State",actions:" "};return this.columns.map(n=>e[n]||n)}get column_sizes(){const e={state:"3.5r",date:"8r",name:"12r",host:"12r",email:"flex",vaccinated:"8r",id_data:"8r",status:"10r",actions:"12r"};return this.columns.map(n=>e[n]||n)}constructor(e,n){this._state=e,this._settings=n,this.guests=this._state.filtered_guests,this.search=this._state.search,this.filters=this._state.filters,this.downloadVisitorList=()=>this._state.downloadVisitorsList(),this.approveVisitor=o=>this._state.approveVisitor(o),this.declineVisitor=o=>this._state.declineVisitor(o),this.setExt=(o,s,a)=>this._state.setExt(o,s,a)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(x),t.Y36(d.gb))},i.\u0275cmp=t.Xpm({type:i,selectors:[["guest-listings"]],decls:20,vars:22,consts:[[1,"w-full","flex","flex-col","flex-1","text-sm","h-full","overflow-auto","pb-20"],[1,"min-w-[88rem]",3,"dataSource","filter","columns","display_column","column_size","template","empty"],["state_template",""],["host_template",""],["vaccinated_template",""],["id_template",""],["status_template",""],["date_template",""],["action_template",""],["class","bg-secondary hover:shadow-lg shadow absolute bottom-4 right-4 text-white h-12 w-12","matTooltip","Download Visitor List","matTooltipPosition","left","icon","","matRipple","",3,"click",4,"ngIf"],["class","p-2 rounded-full material-icons border-2 border-dotted border-gray-600 dark:border-neutral-800",4,"ngIf","ngIfElse"],["checkin_state",""],[1,"p-2","rounded-full","material-icons","border-2","border-dotted","border-gray-600","dark:border-neutral-800"],[1,"p-2","rounded-full","material-icons","bg-green-600","border-2","border-green-600","text-white"],["customTooltip","",3,"content"],["matRipple","","class","bg-success rounded-3xl px-4 py-2 text-white",4,"ngIf"],["vaccine_confirmation",""],["matRipple","",1,"bg-success","rounded-3xl","px-4","py-2","text-white"],[1,"bg-white","rounded","p-2","flex","flex-col","space-y-2","my-2","w-[20rem]"],[1,"max-w-[20rem]","max-h-[20rem]","p-2","object-contain",3,"src"],["matRipple","",3,"click"],["matRipple","",1,"inverse","mt-2",3,"click"],["id_confirmation",""],[1,"max-w-[20rem]","max-h-[20rem]","object-contain",3,"src"],["matRipple","",1,"rounded-3xl","bg-pending","border-none",3,"matMenuTriggerFor"],[1,"flex","items-center"],[1,"mx-2"],[1,"text-2xl"],["menu","matMenu"],["mat-menu-item","",3,"click"],["icon","","matRipple","","title","","matTooltip","View Attachments",3,"disabled","matMenuTriggerFor"],["mat-menu-item","",3,"href",4,"ngFor","ngForOf"],["remote","",3,"matTooltip","loading","content","click"],["checkin","","matTooltip","Checkin Guest","content","event_available",3,"loading","state","click"],["checkout","","matTooltip","Checkout Guest","content","event_busy",3,"loading","click"],["icon","","matRipple","",3,"href","matTooltip"],["matTooltip","Print QR Code","content","event_busy",3,"loading","click"],["mat-menu-item","",3,"href"],["matTooltip","Download Visitor List","matTooltipPosition","left","icon","","matRipple","",1,"bg-secondary","hover:shadow-lg","shadow","absolute","bottom-4","right-4","text-white","h-12","w-12",3,"click"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0),t._UZ(1,"custom-table",1),t.ALo(2,"async"),t.ALo(3,"async"),t.qZA(),t.YNc(4,Ut,3,2,"ng-template",null,2,t.W1O),t.YNc(6,Lt,1,1,"ng-template",null,3,t.W1O),t.YNc(8,Ot,4,2,"ng-template",null,4,t.W1O),t.YNc(10,It,4,2,"ng-template",null,5,t.W1O),t.YNc(12,Et,12,6,"ng-template",null,6,t.W1O),t.YNc(14,qt,3,6,"ng-template",null,7,t.W1O),t.YNc(16,Yt,13,20,"ng-template",null,8,t.W1O),t.YNc(18,jt,3,0,"button",9),t.ALo(19,"async")),2&e){const o=t.MAs(5),s=t.MAs(7),a=t.MAs(9),r=t.MAs(11),u=t.MAs(13),m=t.MAs(15),h=t.MAs(17);let T;t.xp6(1),t.Q6J("dataSource",n.guests)("filter",t.lcZ(2,8,n.search))("columns",n.columns)("display_column",n.display_columns)("column_size",n.column_sizes)("template",t.Hh0(14,Pt,o,u,m,s,a,r,h))("empty",t.lcZ(3,10,n.search)?"No matching visitors":"There are visitors for the currently selected date."),t.xp6(17),t.Q6J("ngIf",null==(T=t.lcZ(19,12,n.guests))?null:T.length)}},dependencies:[_.sg,_.O5,G.VK,G.OP,G.p6,U.gM,b.wG,L.m,J.o,kt.C,At.X,_.Ov,_.uU]}),i})();const St=["app-visitors",""];function zt(i,l){1&i&&t._UZ(0,"visitor-listings",5)}function Ht(i,l){1&i&&t._UZ(0,"guest-listings",5)}function Rt(i,l){1&i&&t._UZ(0,"mat-progress-bar",6)}const Kt=[{path:"",component:(()=>{class i{constructor(e){this._state=e,this.loading=this._state.loading,this.filters=this._state.filters}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(x))},i.\u0275cmp=t.Xpm({type:i,selectors:[["","app-visitors",""]],attrs:St,decls:11,vars:9,consts:[[1,"flex","flex-1","h-px"],[1,"flex","flex-col","flex-1","w-1/2","h-full"],[1,"w-full"],["class","w-full flex-1 h-0",4,"ngIf"],["class","w-full","mode","indeterminate",4,"ngIf"],[1,"w-full","flex-1","h-0"],["mode","indeterminate",1,"w-full"]],template:function(e,n){if(1&e&&(t._UZ(0,"app-topbar"),t.TgZ(1,"div",0),t._UZ(2,"app-sidebar"),t.TgZ(3,"main",1),t._UZ(4,"visitors-topbar",2),t.YNc(5,zt,1,0,"visitor-listings",3),t.ALo(6,"async"),t.YNc(7,Ht,1,0,"guest-listings",3),t.ALo(8,"async"),t.YNc(9,Rt,1,0,"mat-progress-bar",4),t.ALo(10,"async"),t.qZA()()),2&e){let o,s;t.xp6(5),t.Q6J("ngIf",!(null!=(o=t.lcZ(6,3,n.filters))&&o.show_guests)),t.xp6(2),t.Q6J("ngIf",null==(s=t.lcZ(8,5,n.filters))?null:s.show_guests),t.xp6(2),t.Q6J("ngIf",t.lcZ(10,7,n.loading))}},dependencies:[_.O5,R.O,K.u,$.pW,st,yt,Dt,_.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:#fff}\n/*# sourceMappingURL=visitors.component.ts-angular-inline--107.css.map*/"]}),i})()}];let $t=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[_.ez,y.u5,P.v,k.Bz.forChild(Kt)]}),i})()}}]);
//# sourceMappingURL=apps_concierge_src_app_visitors_visitors_module_ts.js.map