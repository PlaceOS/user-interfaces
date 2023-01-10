"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_visitors_visitors_module_ts"],{4513:(Kt,F,r)=>{r.r(F),r.d(F,{VisitorsModule:()=>x});var d=r(4666),G=r(2508),J=r(9885),R=r(3045),_=r(3918),M=r(4505),U=r(7716),K=r(9727),L=r(4139),Y=r(823),j=r(9095),$=r(8759),P=r(9128),O=r(7418),Z=r(6942),B=r(3910),z=r(9377),D=r(312),h=r(1810),S=r(3861),u=r(3770),m=r(9830),v=r(711),N=r(9232),H=r(6221),t=r(2560),W=r(5699);class g extends u.KG{constructor(i,e){super(),this._dialog=i,this._org=e,this._poll=new M.X(0),this._filters=new M.X({}),this._search=new M.X(""),this._loading=new M.X(!1),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this.guests=(0,U.aj)([this._filters,this._poll]).pipe((0,Y.b)(150),(0,j.w)(([n])=>{this._loading.next(!0);const s=n.date?new Date(n.date):new Date,l=(0,z.Z)(s),a=(0,D.Z)(l,n.period||1);return(0,v.ro)({period_start:(0,h.Z)(l),period_end:(0,h.Z)(a),zone_ids:(n.zones||[]).join(",")})}),(0,$.b)(()=>this._loading.next(!1)),(0,P.d)(1)),this.events=(0,U.aj)([this._filters,this._poll]).pipe((0,Y.b)(150),(0,j.w)(([n])=>{this._loading.next(!0);const s=n.date?new Date(n.date):new Date,l=(0,z.Z)(s),a=(0,D.Z)(l,n.period||1);return(0,K.$R)((0,m.u$)({period_start:(0,h.Z)(l),period_end:(0,h.Z)(a),zone_ids:(n.zones||[]).join(",")}).pipe((0,O.K)(c=>(0,L.of)([]))),(0,N.F2)({type:"visitor",period_start:(0,h.Z)(l),period_end:(0,h.Z)(a),zones:this._org.building?.id}).pipe((0,Z.U)(c=>c.map(f=>(0,m.Yd)(f))),(0,O.K)(c=>(0,L.of)([]))),(0,N.F2)({type:"room",period_start:(0,h.Z)(l),period_end:(0,h.Z)(a),zones:(n.zones||[]).join(",")}).pipe((0,Z.U)(c=>c.map(f=>(0,m.Yd)(f))),(0,O.K)(c=>(0,L.of)([]))))}),(0,Z.U)(([n,s,l])=>{const a=[...n,...s,...l];return this._loading.next(!1),this._filters.getValue().all_bookings?a:a.filter(c=>c?.guests?.length&&c?.attendees?.length>1)}),(0,P.d)(1)),this.filtered_events=(0,U.aj)([this._search,this.events]).pipe((0,Z.U)(([n,s])=>{const l=n.toLowerCase();return s.filter(a=>a.attendees.find(c=>c.name?.toLowerCase().includes(l)||c.email?.toLowerCase().includes(l)))})),this.filtered_guests=(0,U.aj)([this._search,this.filtered_events,this.guests]).pipe((0,Z.U)(([n,s,l])=>{const a=n.toLowerCase();return(0,u.xH)(s.map(c=>c.attendees.filter(p=>p.is_external&&(p.name?.toLowerCase().includes(a)||p.email?.toLowerCase().includes(a))).map(p=>{const A=l.find(Rt=>Rt.email===p.email)||{};return new v.OO({...p,...A,extension_data:{...p.extension_data,...A.extension_data,date:c.date,host:c.organiser?.name||c.organiser?.email||c.host}})})))}))}get search(){return this._search.getValue()}setFilters(i){this._filters.next({...this._filters.getValue(),...i})}setSearchString(i){this._search.next(i)}startPolling(i=3e4){this.interval("poll",()=>this._poll.next(Date.now()),i)}stopPolling(){this.clearInterval("poll")}checkGuestIn(i,e){var n=this;return(0,_.Z)(function*(){const l=yield n._checkinCall(i,e.email,!0).toPromise().catch(c=>{throw(0,u.cB)(`Error checking in ${e.name} for ${i.organiser?.name}'s meeting`),c});(0,u.t5)(`Successfully checked in ${e.name} for ${i.organiser?.name}'s meeting`);const a=(0,u.Tw)([l,...i.attendees],"email");return a.sort((c,f)=>c.organizer?-1:c.email.localeCompare(f.email)),new m.ym({...i,attendees:a})})()}setExt(i,e,n){return(0,_.Z)(function*(){const s={...i.extension_data};s[e]=n,yield(0,v.sF)(i.id,{...i,extension_data:s}).toPromise()})()}approveVisitor(i){var e=this;return(0,_.Z)(function*(){const n=yield(0,u._5)({title:"Approve Visitor",content:`Approve attendance of ${i.name} to their meeting?`,icon:{content:"event_available"}},e._dialog);if("done"!==n.reason)return n.close();n.loading("Updating guest details"),yield(0,v.sF)(i.id,{...i,extension_data:{...i.extension_data,status:"approved"}}).toPromise(),n.close()})()}declineVisitor(i){var e=this;return(0,_.Z)(function*(){const n=yield(0,u._5)({title:"Decline Visitor",content:`Decline attendance of ${i.name} to their meeting?`,icon:{content:"event_available"}},e._dialog);if("done"!==n.reason)return n.close();n.loading("Updating guest details"),yield(0,v.sF)(i.id,{...i,extension_data:{...i.extension_data,status:"declined"}}).toPromise(),n.close()})()}checkGuestOut(i,e){var n=this;return(0,_.Z)(function*(){const s=yield n._checkinCall(i,e.email,!1).toPromise().catch(a=>{throw(0,u.cB)(`Error checking out ${e.name} from ${i.organiser?.name}'s meeting`),a});(0,u.t5)(`Successfully checked out ${e.name} from ${i.organiser?.name}'s meeting`);const l=(0,u.Tw)([s,...i.attendees],"email");return l.sort((a,c)=>a.organizer?-1:a.email.localeCompare(c.email)),new m.ym({...i,attendees:l})})()}checkAllGuestsIn(i){var e=this;return(0,_.Z)(function*(){const n=i.attendees.filter(a=>a.is_external&&!a.checked_in);if(n.length<=0)throw new Error("No Guests to checkin");const s=yield Promise.all(n.map(a=>e._checkinCall(i,a.email,!0).toPromise())).catch(a=>{throw(0,u.cB)(`Error checking in all guests for ${i.organiser?.name}'s meeting`),a});(0,u.t5)(`Successfully checked in all guests for ${i.organiser?.name}'s meeting`);const l=(0,u.Tw)([...s,...i.attendees],"email");return l.sort((a,c)=>a.organizer?-1:a.email.localeCompare(c.email)),new m.ym({...i,attendees:l})})()}checkAllGuestsOut(i){var e=this;return(0,_.Z)(function*(){const n=i.attendees.filter(a=>a.is_external&&a.checked_in&&!a.organizer);if(n.length<=0)throw new Error("No Guests to checkout");const s=yield Promise.all(n.map(a=>e._checkinCall(i,a.email,!1).toPromise())).catch(a=>{throw(0,u.cB)(`Error checking out all guests from ${i.organiser?.name}'s meeting`),a});(0,u.t5)(`Successfully checked out all guests from ${i.organiser?.name}'s meeting`);const l=(0,u.Tw)([...s,...i.attendees],"email");return l.sort((a,c)=>a.organizer?-1:a.email.localeCompare(c.email)),new m.ym({...i,attendees:l})})()}_checkinCall(i,e,n=!0){return i.from_bookings?(0,N.ad)(i.id,e,n):(0,m.rq)(i.id,e,n,{system_id:i.system?.id||i.resources[0]?.id})}downloadVisitorsList(){var i=this;return(0,_.Z)(function*(){const e=yield i.filtered_guests.pipe((0,B.q)(1)).toPromise();if(!e.length)return;const{date:n}=i._filters.getValue(),s=e.map(a=>({Name:a.name,Email:a.email,"Checked In":a.checked_in,Host:a.extension_data?.host||"",Status:a.status,Date:(0,S.Z)(a.extension_data?.date,"dd MMM h:mm a")})),l=(0,u.o3)(s);(0,u.Sv)(`visitor-list-${(0,S.Z)(n||Date.now(),"MMM-dd")}.csv`,l)})()}}g.\u0275fac=function(i){return new(i||g)(t.LFG(W.uw),t.LFG(H.w7))},g.\u0275prov=t.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"});var X=r(4945),tt=r(1294),et=r(5670),nt=r(8441),it=r(9396),ot=r(5074),st=r(7371),V=r(207),lt=r(4714);function at(o,i){if(1&o&&(t.TgZ(0,"mat-option",5),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.display_name||e.name," ")}}function rt(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"mat-slide-toggle",6),t.NdJ("ngModelChange",function(s){t.CHM(e);const l=t.oxw();return t.KtG(l.setFilters({all_bookings:s}))}),t.ALo(1,"async"),t.TgZ(2,"div",7),t._uU(3,"All Bookings"),t.qZA()()}if(2&o){const e=t.oxw();let n;t.Q6J("ngModel",null==(n=t.lcZ(1,1,e.filters))?null:n.all_bookings)}}class T extends u.KG{constructor(i,e,n,s){super(),this._state=i,this._org=e,this._route=n,this._router=s,this.zones=[],this.levels=this._org.active_levels,this.filters=this._state.filters,this.setDate=l=>this._state.setFilters({date:l}),this.setFilters=l=>this._state.setFilters(l),this.setSearch=l=>this._state.setSearchString(l),this.updateZones=l=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:l.join(",")}}),this._state.setFilters({zones:l})}}ngOnInit(){var i=this;return(0,_.Z)(function*(){yield i._org.initialised.pipe((0,et.P)(e=>e)).toPromise(),i.subscription("route.query",i._route.queryParamMap.subscribe(e=>{if(e.has("zone_ids")){const n=e.get("zone_ids").split(",");if(n.length){const s=i._org.levelWithID(n);if(i.zones=n,!s)return;i._org.building=i._org.buildings.find(l=>l.id===s.parent_id)}}})),i.subscription("levels",i._org.active_levels.subscribe(e=>{i.zones=i.zones.filter(n=>e.find(s=>s.id===n)),!i.zones.length&&e.length&&i.zones.push(e[0].id),i.updateZones(i.zones)})),i.setSearch("")})()}}T.\u0275fac=function(i){return new(i||T)(t.Y36(g),t.Y36(H.w7),t.Y36(J.gz),t.Y36(J.F0))},T.\u0275cmp=t.Xpm({type:T,selectors:[["visitors-topbar"]],features:[t.qOj],decls:23,vars:16,consts:[[1,"flex","items-center","bg-white","dark:bg-neutral-700","h-20","px-4","border-b","border-gray-300","dark:border-neutral-500","space-x-2"],["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["placeholder","Viewing Period",3,"ngModel","ngModelChange"],[3,"value"],[1,"m-2",3,"ngModel","ngModelChange"],[1,"text-xs"],["class","m-2",3,"ngModel","ngModelChange",4,"ngIf"],[1,"flex-1","w-2"],[1,"mr-2",3,"modelChange"],[3,"dateChange"]],template:function(i,e){if(1&i&&(t.TgZ(0,"div",0)(1,"mat-form-field",1)(2,"mat-select",2),t.NdJ("ngModelChange",function(s){return e.zones=s})("ngModelChange",function(s){return e.updateZones(s)}),t.YNc(3,at,2,2,"mat-option",3),t.ALo(4,"async"),t.qZA()(),t.TgZ(5,"mat-form-field",1)(6,"mat-select",4),t.NdJ("ngModelChange",function(s){return e.setFilters({period:s})}),t.ALo(7,"async"),t.TgZ(8,"mat-option",5),t._uU(9,"Show Day"),t.qZA(),t.TgZ(10,"mat-option",5),t._uU(11,"Show Week"),t.qZA(),t.TgZ(12,"mat-option",5),t._uU(13,"Show Month"),t.qZA()()(),t.TgZ(14,"mat-slide-toggle",6),t.NdJ("ngModelChange",function(s){return e.setFilters({show_guests:s})}),t.ALo(15,"async"),t.TgZ(16,"div",7),t._uU(17,"Only Guests"),t.qZA()(),t.YNc(18,rt,4,3,"mat-slide-toggle",8),t.ALo(19,"async"),t._UZ(20,"div",9),t.TgZ(21,"searchbar",10),t.NdJ("modelChange",function(s){return e.setSearch(s)}),t.qZA(),t.TgZ(22,"date-options",11),t.NdJ("dateChange",function(s){return e.setDate(s)}),t.qZA()()),2&i){let n,s,l;t.xp6(2),t.Q6J("ngModel",e.zones),t.xp6(1),t.Q6J("ngForOf",t.lcZ(4,8,e.levels)),t.xp6(3),t.Q6J("ngModel",(null==(n=t.lcZ(7,10,e.filters))?null:n.period)||1),t.xp6(2),t.Q6J("value",1),t.xp6(2),t.Q6J("value",7),t.xp6(2),t.Q6J("value",30),t.xp6(2),t.Q6J("ngModel",null==(s=t.lcZ(15,12,e.filters))?null:s.show_guests),t.xp6(4),t.Q6J("ngIf",!(null!=(l=t.lcZ(19,14,e.filters))&&l.show_guests))}},dependencies:[d.sg,d.O5,G.JJ,G.On,nt.E,it.U,ot.KE,st.gD,V.ey,lt.Rr,d.Ov],styles:["mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n/*# sourceMappingURL=visitors-topbar.component.ts-angular-inline--82.css.map*/"]});var Q=r(6896),I=r(1637),q=r(5306);function ct(o,i){1&o&&(t.TgZ(0,"i",15),t._uU(1,"face"),t.qZA())}function ut(o,i){if(1&o&&(t.ynx(0),t.YNc(1,ct,2,0,"i",14),t.BQk()),2&o){t.oxw();const e=t.MAs(4),n=t.oxw();t.xp6(1),t.Q6J("ngIf",!(null!=n.visitor&&n.visitor.checked_in))("ngIfElse",e)}}function dt(o,i){1&o&&(t.TgZ(0,"i",16),t._uU(1,"done"),t.qZA())}function _t(o,i){1&o&&(t.TgZ(0,"i",17),t._uU(1,"assignment_ind"),t.qZA())}function gt(o,i){if(1&o&&(t.TgZ(0,"div",18)(1,"h2"),t._uU(2),t.qZA(),t.TgZ(3,"div")(4,"span"),t._uU(5,"Host:"),t.qZA(),t._uU(6),t.qZA(),t.TgZ(7,"div")(8,"span"),t._uU(9,"Purpose:"),t.qZA(),t._uU(10),t.qZA(),t.TgZ(11,"div")(12,"span"),t._uU(13,"Location:"),t.qZA(),t._uU(14),t.qZA(),t.TgZ(15,"div")(16,"span"),t._uU(17,"Issue Date:"),t.qZA(),t._uU(18),t.ALo(19,"date"),t.qZA(),t.TgZ(20,"div",19),t._UZ(21,"img",20),t.qZA()()),2&o){const e=t.oxw(2);t.xp6(2),t.Oqu((null==e.visitor?null:e.visitor.name)||(null==e.visitor?null:e.visitor.email)),t.xp6(4),t.hij(" ",(null==e.event||null==e.event.organiser?null:e.event.organiser.name)||(null==e.event||null==e.event.organiser?null:e.event.organiser.name)||(null==e.event?null:e.event.creator)," "),t.xp6(4),t.hij(" ",null==e.event?null:e.event.title,""),t.xp6(4),t.hij(" ",(null==e.event?null:e.event.location)||"<Unspecified>"," "),t.xp6(4),t.hij(" ",t.xi3(19,6,e.today,"mediumDate")," "),t.xp6(3),t.Q6J("src",(null==e.visitor||null==e.visitor.extension_data||null==e.visitor.extension_data.qr?null:e.visitor.extension_data.qr.code)||"",t.LSH)}}function mt(o,i){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",1),t.YNc(2,ut,2,2,"ng-container",2),t.YNc(3,dt,2,0,"ng-template",null,3,t.W1O),t.YNc(5,_t,2,0,"ng-template",null,4,t.W1O),t.qZA(),t.TgZ(7,"div",5),t._uU(8),t.qZA(),t.TgZ(9,"div",6)(10,"action-icon",7),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.toggleRemote())}),t.qZA(),t.TgZ(11,"action-icon",8),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.checkin())}),t.qZA(),t.TgZ(12,"action-icon",9),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.checkout())}),t.qZA(),t.TgZ(13,"a",10)(14,"app-icon"),t._uU(15,"email"),t.qZA()(),t.TgZ(16,"action-icon",11),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.printQRCode())}),t.qZA()(),t._UZ(17,"div",12),t.YNc(18,gt,22,9,"div",13),t.BQk()}if(2&o){const e=t.MAs(6),n=t.oxw();t.xp6(2),t.Q6J("ngIf",!(null!=n.visitor&&n.visitor.organizer))("ngIfElse",e),t.xp6(6),t.hij(" ",(null==n.visitor?null:n.visitor.name)||(null==n.visitor?null:n.visitor.email)," "),t.xp6(2),t.ekj("invisible",!(null!=n.visitor&&n.visitor.is_external)||(null==n.visitor?null:n.visitor.organizer)),t.Q6J("matTooltip",n.remote?"Set as In-Person Visitor":"Set as Remote Visitior")("loading","remote"===n.loading)("content",n.remote?"tap_and_play":"business"),t.xp6(1),t.ekj("invisible",!(null!=n.visitor&&n.visitor.is_external)||(null==n.visitor?null:n.visitor.organizer)),t.Q6J("loading","checkin"===n.loading)("state",null!=n.visitor&&n.visitor.checked_in?"success":""),t.xp6(1),t.ekj("invisible",!(null!=n.visitor&&n.visitor.is_external)||(null==n.visitor?null:n.visitor.organizer)),t.Q6J("loading","checkout"===n.loading),t.xp6(1),t.Q6J("href","mailto:"+(null==n.visitor?null:n.visitor.email),t.LSH)("matTooltip",null!=n.visitor&&n.visitor.organizer?"Email Host":"Email Guest"),t.xp6(3),t.ekj("invisible",!n.can_print),t.Q6J("loading","printing"===n.loading),t.xp6(2),t.Q6J("ngIf",n.show_qr_code)}}class w extends u.KG{constructor(i,e){var n;super(),n=this,this._state=i,this._settings=e,this.eventChange=new t.vpe,this.checkin=(0,_.Z)(function*(){n.loading="checkin",n.event=yield n._state.checkGuestIn(n.event,n.visitor).catch(s=>n.event),n.eventChange.emit(n.event),n.loading=""}),this.toggleRemote=(0,_.Z)(function*(){n.loading="remote";const s=n.event.ext("remote")?.filter(a=>a!==n.visitor.email)||[];n.remote||s.push(n.visitor.email);const l=new m.ym({...n.event.toJSON(),remote:s}).toJSON();n.event=yield(0,m.ry)(l).toPromise().catch(a=>((0,u.cB)(`Error setting visitor status. Error: ${a.statusText||a.message||a}`),n.event)),n.eventChange.emit(n.event),n.loading=""}),this.checkout=(0,_.Z)(function*(){n.loading="checkout",n.event=yield n._state.checkGuestOut(n.event,n.visitor).catch(s=>n.event),n.eventChange.emit(n.event),n.loading=""}),this.printQRCode=()=>{this.show_qr_code=!0,this.timeout("print",()=>{window.print(),this.show_qr_code=!1},50)}}get can_print(){return this._settings.get("app.can_print_qr")&&this.visitor.checked_in&&this.visitor?.extension_data.qr}get today(){return Date.now()}get remote(){return!!this.event?.extension_data?.remote?.find(i=>i===this.visitor?.email)}ngOnChanges(i){i.visitor&&this.loadGuest()}loadGuest(i=0){var e=this;return(0,_.Z)(function*(){!e.visitor||(e.loading="printing",e.visitor.checked_in&&!(yield(0,v.pP)(e.visitor.email).toPromise().catch(s=>null))?.extension_data?.qr?.code&&i<5?e.timeout("load_guest",()=>e.loadGuest(++i),1e3):e.loading="")})()}}function pt(o,i){1&o&&(t.TgZ(0,"i",17),t._uU(1,"event"),t.qZA())}function ht(o,i){1&o&&(t.TgZ(0,"i",17),t._uU(1,"close"),t.qZA())}function ft(o,i){1&o&&(t.TgZ(0,"i",18),t._uU(1,"done"),t.qZA())}function vt(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",3)(1,"div",4),t.YNc(2,pt,2,0,"i",5),t.YNc(3,ht,2,0,"i",5),t.YNc(4,ft,2,0,"i",6),t.qZA(),t.TgZ(5,"div",7),t._uU(6),t.ALo(7,"date"),t.ALo(8,"async"),t.qZA(),t.TgZ(9,"div",8),t._uU(10),t.qZA(),t.TgZ(11,"div",9),t._uU(12),t.qZA(),t.TgZ(13,"div",10),t._uU(14),t.qZA(),t.TgZ(15,"div",11)(16,"action-icon",12),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.checkinGuests())}),t.qZA(),t.TgZ(17,"action-icon",13),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.checkoutGuests())}),t.qZA(),t.TgZ(18,"a",14)(19,"app-icon"),t._uU(20,"email"),t.qZA()()(),t.TgZ(21,"div",15)(22,"button",16),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.show_attendees=!s.show_attendees)}),t.TgZ(23,"app-icon"),t._uU(24),t.qZA()()()()}if(2&o){const e=t.oxw();let n;t.xp6(2),t.Q6J("ngIf","declined"!==(null==e.event?null:e.event.status)&&"done"!==(null==e.event?null:e.event.state)),t.xp6(1),t.Q6J("ngIf","declined"===(null==e.event?null:e.event.status)),t.xp6(1),t.Q6J("ngIf","done"===(null==e.event?null:e.event.state)&&"declined"!==(null==e.event?null:e.event.status)),t.xp6(2),t.hij(" ",t.xi3(7,15,null==e.event?null:e.event.date,(null==(n=t.lcZ(8,18,e.filters))?null:n.period)>1?"MMM d, h:mm a":"shortTime")," "),t.xp6(4),t.hij(" ",(null==e.event||null==e.event.organiser?null:e.event.organiser.name)||(null==e.event||null==e.event.organiser?null:e.event.organiser.email)," "),t.xp6(2),t.Oqu(null==e.event?null:e.event.title),t.xp6(2),t.Oqu(null==e.event?null:e.event.location),t.xp6(2),t.Q6J("loading","checkin"===e.loading)("disabled",e.guestCount<=0),t.xp6(1),t.Q6J("loading","checkout"===e.loading)("disabled",e.guestCount<=0),t.xp6(1),t.Q6J("href","mailto:"+(null==e.event||null==e.event.organiser?null:e.event.organiser.email),t.LSH),t.xp6(4),t.Q6J("disabled",!(null!=e.event&&null!=e.event.attendees&&e.event.attendees.length))("matTooltip",e.show_attendees||e.has_search?"Hide Attendees":"Show Attendees"),t.xp6(2),t.Oqu(e.show_attendees?"keyboard_arrow_down":"keyboard_arrow_right")}}function xt(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",20),t._UZ(1,"div",21),t.TgZ(2,"visitor-details",22),t.NdJ("eventChange",function(s){t.CHM(e);const l=t.oxw(2);return t.KtG(l.event=s)}),t.qZA()()}if(2&o){const e=i.$implicit,n=t.oxw(2);t.xp6(2),t.Q6J("visitor",e)("event",n.event),t.uIk("disabled",!n.matches[e.email])}}w.\u0275fac=function(i){return new(i||w)(t.Y36(g),t.Y36(u.gb))},w.\u0275cmp=t.Xpm({type:w,selectors:[["visitor-details"]],inputs:{event:"event",visitor:"visitor"},outputs:{eventChange:"eventChange"},features:[t.qOj,t.TTD],decls:1,vars:1,consts:[[4,"ngIf"],["details","",1,"w-12","text-lg","flex","justify-center"],[4,"ngIf","ngIfElse"],["checkin_state",""],["host_state",""],["flex","",1,"p-2","flex-1"],[1,"w-48","py-2","flex","items-center","justify-end"],["remote","",3,"matTooltip","loading","content","click"],["checkin","","matTooltip","Checkin Guest","content","event_available",3,"loading","state","click"],["checkout","","matTooltip","Checkout Guest","content","event_busy",3,"loading","click"],["icon","","matRipple","",3,"href","matTooltip"],["matTooltip","Print QR Code","content","event_busy",3,"loading","click"],[1,"w-14","p-2"],["qr-code","","class","print-only fixed inset-0 flex flex-col justify-center bg-white space-y-2",4,"ngIf"],["class","p-2 rounded-full material-icons border-2 border-dotted border-gray-600 dark:border-neutral-800",4,"ngIf","ngIfElse"],[1,"p-2","rounded-full","material-icons","border-2","border-dotted","border-gray-600","dark:border-neutral-800"],[1,"p-2","rounded-full","material-icons","bg-green-600","border-2","border-green-600","text-white"],[1,"p-2","rounded-full","material-icons","bg-blue-600","border-2","border-blue-600","text-white"],["qr-code","",1,"print-only","fixed","inset-0","flex","flex-col","justify-center","bg-white","space-y-2"],[1,"flex","justify-center"],["alt","qr-code",3,"src"]],template:function(i,e){1&i&&t.YNc(0,mt,19,21,"ng-container",0),2&i&&t.Q6J("ngIf",e.visitor)},dependencies:[d.O5,Q.gM,V.wG,I.m,q.o,d.uU],styles:["[_nghost-%COMP%]{display:flex;align-items:center;width:100%;padding:0 .5rem}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center;height:100%;border-bottom:1px solid #ccc;height:3.5rem}[_nghost-%COMP%] > div[_ngcontent-%COMP%]:first-child{border:none}.invisible[_ngcontent-%COMP%]{opacity:0;pointer-events:none}\n/*# sourceMappingURL=visitor-details.component.ts-angular-inline--84.css.map*/"]});const Zt=function(){return[]};function Tt(o,i){if(1&o&&(t.ynx(0),t.YNc(1,xt,3,3,"div",19),t.BQk()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",(null==e.event?null:e.event.attendees)||t.DdM(1,Zt))}}class C extends u.KG{constructor(i){var e;super(),e=this,this._state=i,this.matches={},this.filters=this._state.filters,this.checkinGuests=(0,_.Z)(function*(){e.loading="checkin",e.event=yield e._state.checkAllGuestsIn(e.event).catch(n=>e.event),e.loading=""}),this.checkoutGuests=(0,_.Z)(function*(){e.loading="checkout",e.event=yield e._state.checkAllGuestsOut(e.event).catch(n=>e.event),e.loading=""})}get guestCount(){return this.event?.attendees?.reduce((i,e)=>i+(e.is_external&&!e.organizer?1:0),0)||0}get has_search(){return this._state.search}ngOnInit(){this.subscription("events",this._state.filtered_events.subscribe(()=>this.updateMatches()))}updateMatches(){if(!this.event)return;this.matches={};const i=(this._state.search||"").toLowerCase();for(const e of this.event?.attendees||[])this.matches[e.email]=!i||e.email.toLowerCase().includes(i)||e.name.toLowerCase().includes(i)}}function wt(o,i){1&o&&t._UZ(0,"visitor-event",13),2&o&&t.Q6J("event",i.$implicit)}function Ct(o,i){if(1&o&&(t.ynx(0),t.YNc(1,wt,1,1,"visitor-event",12),t.ALo(2,"async"),t.BQk()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,2,e.bookings))("ngForTrackBy",e.trackByFn)}}function bt(o,i){1&o&&(t.TgZ(0,"div",14)(1,"p",15),t._uU(2," There are no visitors for the currently selected date. "),t.qZA()())}C.\u0275fac=function(i){return new(i||C)(t.Y36(g))},C.\u0275cmp=t.Xpm({type:C,selectors:[["visitor-event"]],inputs:{event:"event"},features:[t.qOj],decls:3,vars:4,consts:[["event","","class","flex items-center px-2 bg-gray-100 dark:bg-neutral-700",4,"ngIf"],["attendees","",1,"w-full","overflow-hidden","relative","border-b","border-gray-300","dark:border-neutral-600"],[4,"ngIf"],["event","",1,"flex","items-center","px-2","bg-gray-100","dark:bg-neutral-700"],[1,"w-12","text-lg","flex","justify-center"],["class","p-2 rounded-full material-icons bg-gray-400 dark:bg-neutral-800",4,"ngIf"],["class","p-2 rounded-full material-icons bg-gray-400 dark:bg-neutral-800 opacity-40",4,"ngIf"],[1,"w-24","p-2"],[1,"w-48","p-2"],["flex","",1,"p-2","flex-1"],[1,"w-64","p-2","truncate"],[1,"w-32","py-2","flex","items-center"],["checkin","","matTooltip","Checkin All Guests","content","event_available",3,"loading","disabled","click"],["checkout","","matTooltip","Checkout All Guests","content","event_busy",3,"loading","disabled","click"],["icon","","matRipple","","matTooltip","Email Host",3,"href"],[1,"w-16","p-2"],["icon","","matRipple","",3,"disabled","matTooltip","click"],[1,"p-2","rounded-full","material-icons","bg-gray-400","dark:bg-neutral-800"],[1,"p-2","rounded-full","material-icons","bg-gray-400","dark:bg-neutral-800","opacity-40"],["visitor","","class","relative w-full pl-12 bg-gray-200 dark:bg-neutral-600",4,"ngFor","ngForOf"],["visitor","",1,"relative","w-full","pl-12","bg-gray-200","dark:bg-neutral-600"],[1,"absolute","left-8","top-1/2","-translate-y-full","border-b-2","border-l-2","border-gray-400","dark:border-neutral-700","w-4","h-full"],[3,"visitor","event","eventChange"]],template:function(i,e){1&i&&(t.YNc(0,vt,25,20,"div",0),t.TgZ(1,"div",1),t.YNc(2,Tt,2,2,"ng-container",2),t.qZA()),2&i&&(t.Q6J("ngIf",e.event),t.xp6(1),t.Udp("height",e.show_attendees||e.has_search?3.5*(null==e.event||null==e.event.attendees?null:e.event.attendees.length)+"rem":"0rem"),t.xp6(1),t.Q6J("ngIf",e.show_attendees||e.has_search))},dependencies:[d.sg,d.O5,Q.gM,V.wG,I.m,q.o,w,d.Ov,d.uU],styles:["[_nghost-%COMP%]{width:100%}visitor-details[_ngcontent-%COMP%]{transition:opacity .2s}[attendees][_ngcontent-%COMP%]{transition:height .2s}[visitor][_ngcontent-%COMP%]{height:3.5rem}[disabled=true][_ngcontent-%COMP%]{opacity:.35}\n/*# sourceMappingURL=visitor-event.component.ts-angular-inline--83.css.map*/"]});class b{constructor(i){this._state=i,this.bookings=this._state.filtered_events}trackByFn(i,e){return e?e.id:void 0}}b.\u0275fac=function(i){return new(i||b)(t.Y36(g))},b.\u0275cmp=t.Xpm({type:b,selectors:[["visitor-listings"]],decls:19,vars:4,consts:[[1,"w-full","flex","flex-col","flex-1","text-sm","h-full"],[1,"w-full","flex","items-center","bg-white","dark:bg-neutral-700","border-b","border-gray-500","p-2","font-medium"],[1,"w-12","p-2"],[1,"w-24","p-2"],[1,"w-48","p-2"],["flex","",1,"p-2","flex-1"],[1,"w-64","p-2"],[1,"w-32","p-2"],[1,"w-16","p-2"],[1,"w-full","flex-1","overflow-auto","h-1/2"],[4,"ngIf","ngIfElse"],["empty_state",""],[3,"event",4,"ngFor","ngForOf","ngForTrackBy"],[3,"event"],[1,"h-full","w-full","flex","items-center","justify-center"],[1,"p-8"]],template:function(i,e){if(1&i&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"div",2),t.TgZ(3,"div",3),t._uU(4,"Time"),t.qZA(),t.TgZ(5,"div",4),t._uU(6,"Host"),t.qZA(),t.TgZ(7,"div",5),t._uU(8,"Title"),t.qZA(),t.TgZ(9,"div",6),t._uU(10,"Location"),t.qZA(),t.TgZ(11,"div",7),t._uU(12,"Actions"),t.qZA(),t._UZ(13,"div",8),t.qZA(),t.TgZ(14,"div",9),t.YNc(15,Ct,3,4,"ng-container",10),t.ALo(16,"async"),t.qZA()(),t.YNc(17,bt,3,0,"ng-template",null,11,t.W1O)),2&i){const n=t.MAs(18);let s;t.xp6(15),t.Q6J("ngIf",null==(s=t.lcZ(16,2,e.bookings))?null:s.length)("ngIfElse",n)}},dependencies:[d.sg,d.O5,C,d.Ov]});var E=r(8589),yt=r(1110),kt=r(3970);function At(o,i){1&o&&(t.TgZ(0,"i",12),t._uU(1,"face"),t.qZA())}function Mt(o,i){1&o&&(t.TgZ(0,"i",13),t._uU(1,"done"),t.qZA())}function Ut(o,i){if(1&o&&(t.YNc(0,At,2,0,"i",10),t.YNc(1,Mt,2,0,"ng-template",null,11,t.W1O)),2&o){const e=i.row,n=t.MAs(2);t.Q6J("ngIf",!(null!=e&&e.checked_in))("ngIfElse",n)}}function Vt(o,i){if(1&o&&t._uU(0),2&o){const e=i.row;t.hij(" ",null==e.extension_data?null:e.extension_data.host," ")}}function Gt(o,i){if(1&o&&(t.TgZ(0,"button",17),t._uU(1),t.qZA()),2&o){const e=t.oxw().row;t.xp6(1),t.hij(" ",null!=e.extension_data&&e.extension_data.vaccination_confirmed?"Confirmed":!1===(null==e.extension_data?null:e.extension_data.vaccination_confirmed)?"Rejected":"Submitted"," ")}}function Jt(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",18),t._UZ(1,"img",19),t.TgZ(2,"button",20),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().row,l=t.oxw();return t.KtG(l.setExt(s,"vaccination_confirmed",!0))}),t._uU(3," Confirm Vaccination Proof "),t.qZA(),t.TgZ(4,"button",21),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().row,l=t.oxw();return t.KtG(l.setExt(s,"vaccination_confirmed",!1))}),t._uU(5," Reject Vaccination Proof "),t.qZA()()}if(2&o){const e=t.oxw().row;t.xp6(1),t.Q6J("src",null==e.extension_data||null==e.extension_data.vaccination_proof?null:e.extension_data.vaccination_proof.url,t.LSH)}}function Lt(o,i){if(1&o&&(t.TgZ(0,"div",14),t.YNc(1,Gt,2,1,"button",15),t.qZA(),t.YNc(2,Jt,6,1,"ng-template",null,16,t.W1O)),2&o){const e=i.row,n=t.MAs(3);t.Q6J("content",n),t.xp6(1),t.Q6J("ngIf",null==e.extension_data||null==e.extension_data.vaccination_proof?null:e.extension_data.vaccination_proof.url)}}function Ot(o,i){if(1&o&&(t.TgZ(0,"button",17),t._uU(1),t.qZA()),2&o){const e=t.oxw().row;t.xp6(1),t.hij(" ",null!=e.extension_data&&e.extension_data.id_confirmed?"Confirmed":!1===(null==e.extension_data?null:e.extension_data.id_confirmed)?"Rejected":"Submitted"," ")}}function Nt(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",18),t._UZ(1,"img",23),t.TgZ(2,"button",20),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().row,l=t.oxw();return t.KtG(l.setExt(s,"id_confirmed",!0))}),t._uU(3," Confirm ID "),t.qZA(),t.TgZ(4,"button",21),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().row,l=t.oxw();return t.KtG(l.setExt(s,"id_confirmed",!1))}),t._uU(5," Reject ID "),t.qZA()()}if(2&o){const e=t.oxw().row;t.xp6(1),t.Q6J("src",null==e.extension_data||null==e.extension_data.id_data?null:e.extension_data.id_data.url,t.LSH)}}function Qt(o,i){if(1&o&&(t.TgZ(0,"div",14),t.YNc(1,Ot,2,1,"button",15),t.qZA(),t.YNc(2,Nt,6,1,"ng-template",null,22,t.W1O)),2&o){const e=i.row,n=t.MAs(3);t.Q6J("content",n),t.xp6(1),t.Q6J("ngIf",null==e.extension_data||null==e.extension_data.id_data?null:e.extension_data.id_data.url)}}function It(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",24)(1,"div",25)(2,"div",26),t._uU(3),t.qZA(),t.TgZ(4,"app-icon",27),t._uU(5,"arrow_drop_down"),t.qZA()()(),t.TgZ(6,"mat-menu",null,28)(8,"button",29),t.NdJ("click",function(){const l=t.CHM(e).row,a=t.oxw();return t.KtG(a.approveVisitor(l))}),t._uU(9," Approve Visitor "),t.qZA(),t.TgZ(10,"button",29),t.NdJ("click",function(){const l=t.CHM(e).row,a=t.oxw();return t.KtG(a.declineVisitor(l))}),t._uU(11," Decline Visitor "),t.qZA()()}if(2&o){const e=i.row,n=t.MAs(7);t.ekj("bg-success","approved"===(null==e?null:e.status))("!bg-error","declined"===(null==e?null:e.status)),t.Q6J("matMenuTriggerFor",n),t.xp6(3),t.hij(" ","approved"===(null==e?null:e.status)?"Approved":"declined"===(null==e?null:e.status)?"Declined":"Pending"," ")}}function qt(o,i){if(1&o&&(t._uU(0),t.ALo(1,"date"),t.ALo(2,"async")),2&o){const e=i.row,n=t.oxw();let s;t.hij(" ",t.xi3(1,1,null==e.extension_data?null:e.extension_data.date,(null==(s=t.lcZ(2,4,n.filters))?null:s.period)>1?"MMM d, h:mm a":"shortTime")," ")}}function Et(o,i){if(1&o&&(t.TgZ(0,"a",37),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.Q6J("href",e.url,t.LSH),t.xp6(1),t.Oqu(e.name)}}function Ft(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",30)(1,"app-icon"),t._uU(2,"attachment"),t.qZA()(),t.TgZ(3,"mat-menu",null,28),t.YNc(5,Et,2,2,"a",31),t.qZA(),t.TgZ(6,"action-icon",32),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.toggleRemote())}),t.qZA(),t.TgZ(7,"action-icon",33),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.checkin())}),t.qZA(),t.TgZ(8,"action-icon",34),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.checkout())}),t.qZA(),t.TgZ(9,"a",35)(10,"app-icon"),t._uU(11,"email"),t.qZA()(),t.TgZ(12,"action-icon",36),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.printQRCode())}),t.qZA()}if(2&o){const e=i.row,n=t.MAs(4),s=t.oxw();t.Q6J("disabled",!(null!=e.attachments&&e.attachments.length))("matMenuTriggerFor",n),t.xp6(5),t.Q6J("ngForOf",e.attachments),t.xp6(1),t.ekj("invisible",!(null!=e&&e.is_external)||(null==e?null:e.organizer)),t.Q6J("matTooltip",s.remote?"Set as In-Person Visitor":"Set as Remote Visitior")("loading","remote"===s.loading)("content",s.remote?"tap_and_play":"business"),t.xp6(1),t.ekj("invisible",!(null!=e&&e.is_external)||(null==e?null:e.organizer)),t.Q6J("loading","checkin"===s.loading)("state",null!=e&&e.checked_in?"success":""),t.xp6(1),t.ekj("invisible",!(null!=e&&e.is_external)||(null==e?null:e.organizer)),t.Q6J("loading","checkout"===s.loading),t.xp6(1),t.Q6J("href","mailto:"+(null==e?null:e.email),t.LSH)("matTooltip",null!=e&&e.organizer?"Email Host":"Email Guest"),t.xp6(3),t.ekj("invisible",!s.can_print),t.Q6J("loading","printing"===s.loading)}}function Yt(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",38),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.downloadVisitorList())}),t.TgZ(1,"app-icon"),t._uU(2,"download"),t.qZA()()}}const jt=function(o,i,e,n,s,l,a){return{state:o,status:i,date:e,host:n,vaccinated:s,id_data:l,actions:a}};class y{constructor(i,e){this._state=i,this._settings=e,this.guests=this._state.filtered_guests,this.search=this._state.search,this.filters=this._state.filters,this.downloadVisitorList=()=>this._state.downloadVisitorsList(),this.approveVisitor=n=>this._state.approveVisitor(n),this.declineVisitor=n=>this._state.declineVisitor(n),this.setExt=(n,s,l)=>this._state.setExt(n,s,l)}get columns(){return this._settings.get("app.guests.vaccine_check")?["state","date","name","host","email","vaccinated","id_data","status","actions"]:["state","date","name","host","email","status","actions"]}get display_columns(){const i={state:" ",date:"Date",name:"Person",host:"Host",email:"Email",vaccinated:"Vaccinated",id_data:"ID",status:"State",actions:" "};return this.columns.map(e=>i[e]||e)}get column_sizes(){const i={state:"3.5r",date:"8r",name:"12r",host:"12r",email:"flex",vaccinated:"8r",id_data:"8r",status:"10r",actions:"12r"};return this.columns.map(e=>i[e]||e)}}function zt(o,i){1&o&&t._UZ(0,"visitor-listings",4)}function Dt(o,i){1&o&&t._UZ(0,"guest-listings",4)}function St(o,i){1&o&&t._UZ(0,"mat-progress-bar",5)}y.\u0275fac=function(i){return new(i||y)(t.Y36(g),t.Y36(u.gb))},y.\u0275cmp=t.Xpm({type:y,selectors:[["guest-listings"]],decls:20,vars:22,consts:[[1,"w-full","flex","flex-col","flex-1","text-sm","h-full","overflow-auto","pb-20"],[1,"min-w-[88rem]",3,"dataSource","filter","columns","display_column","column_size","template","empty"],["state_template",""],["host_template",""],["vaccinated_template",""],["id_template",""],["status_template",""],["date_template",""],["action_template",""],["class","bg-secondary hover:shadow-lg shadow absolute bottom-4 right-4 text-white h-12 w-12","matTooltip","Download Visitor List","matTooltipPosition","left","icon","","matRipple","",3,"click",4,"ngIf"],["class","p-2 rounded-full material-icons border-2 border-dotted border-gray-600 dark:border-neutral-800",4,"ngIf","ngIfElse"],["checkin_state",""],[1,"p-2","rounded-full","material-icons","border-2","border-dotted","border-gray-600","dark:border-neutral-800"],[1,"p-2","rounded-full","material-icons","bg-green-600","border-2","border-green-600","text-white"],["customTooltip","",3,"content"],["matRipple","","class","bg-success rounded-3xl px-4 py-2 text-white",4,"ngIf"],["vaccine_confirmation",""],["matRipple","",1,"bg-success","rounded-3xl","px-4","py-2","text-white"],[1,"bg-white","rounded","p-2","flex","flex-col","space-y-2","my-2","w-[20rem]"],[1,"max-w-[20rem]","max-h-[20rem]","p-2","object-contain",3,"src"],["matRipple","",3,"click"],["matRipple","",1,"inverse","mt-2",3,"click"],["id_confirmation",""],[1,"max-w-[20rem]","max-h-[20rem]","object-contain",3,"src"],["matRipple","",1,"rounded-3xl","bg-pending","border-none",3,"matMenuTriggerFor"],[1,"flex","items-center"],[1,"mx-2"],[1,"text-2xl"],["menu","matMenu"],["mat-menu-item","",3,"click"],["icon","","matRipple","","title","","matTooltip","View Attachments",3,"disabled","matMenuTriggerFor"],["mat-menu-item","",3,"href",4,"ngFor","ngForOf"],["remote","",3,"matTooltip","loading","content","click"],["checkin","","matTooltip","Checkin Guest","content","event_available",3,"loading","state","click"],["checkout","","matTooltip","Checkout Guest","content","event_busy",3,"loading","click"],["icon","","matRipple","",3,"href","matTooltip"],["matTooltip","Print QR Code","content","event_busy",3,"loading","click"],["mat-menu-item","",3,"href"],["matTooltip","Download Visitor List","matTooltipPosition","left","icon","","matRipple","",1,"bg-secondary","hover:shadow-lg","shadow","absolute","bottom-4","right-4","text-white","h-12","w-12",3,"click"]],template:function(i,e){if(1&i&&(t.TgZ(0,"div",0),t._UZ(1,"custom-table",1),t.ALo(2,"async"),t.ALo(3,"async"),t.qZA(),t.YNc(4,Ut,3,2,"ng-template",null,2,t.W1O),t.YNc(6,Vt,1,1,"ng-template",null,3,t.W1O),t.YNc(8,Lt,4,2,"ng-template",null,4,t.W1O),t.YNc(10,Qt,4,2,"ng-template",null,5,t.W1O),t.YNc(12,It,12,6,"ng-template",null,6,t.W1O),t.YNc(14,qt,3,6,"ng-template",null,7,t.W1O),t.YNc(16,Ft,13,20,"ng-template",null,8,t.W1O),t.YNc(18,Yt,3,0,"button",9),t.ALo(19,"async")),2&i){const n=t.MAs(5),s=t.MAs(7),l=t.MAs(9),a=t.MAs(11),c=t.MAs(13),f=t.MAs(15),p=t.MAs(17);let A;t.xp6(1),t.Q6J("dataSource",e.guests)("filter",t.lcZ(2,8,e.search))("columns",e.columns)("display_column",e.display_columns)("column_size",e.column_sizes)("template",t.Hh0(14,jt,n,c,f,s,l,a,p))("empty",t.lcZ(3,10,e.search)?"No matching visitors":"There are visitors for the currently selected date."),t.xp6(17),t.Q6J("ngIf",null==(A=t.lcZ(19,12,e.guests))?null:A.length)}},dependencies:[d.sg,d.O5,E.VK,E.OP,E.p6,Q.gM,V.wG,I.m,q.o,yt.C,kt.X,d.Ov,d.uU]});class k{constructor(i){this._state=i,this.loading=this._state.loading,this.filters=this._state.filters}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}}k.\u0275fac=function(i){return new(i||k)(t.Y36(g))},k.\u0275cmp=t.Xpm({type:k,selectors:[["","app-visitors",""]],attrs:["app-visitors",""],decls:9,vars:9,consts:[[1,"relative","w-full","flex","flex-col","bg-gray-200","dark:bg-neutral-600"],[1,"w-full"],["class","w-full flex-1 h-0",4,"ngIf"],["class","w-full","mode","indeterminate",4,"ngIf"],[1,"w-full","flex-1","h-0"],["mode","indeterminate",1,"w-full"]],template:function(i,e){if(1&i&&(t._UZ(0,"sidebar"),t.TgZ(1,"main",0),t._UZ(2,"visitors-topbar",1),t.YNc(3,zt,1,0,"visitor-listings",2),t.ALo(4,"async"),t.YNc(5,Dt,1,0,"guest-listings",2),t.ALo(6,"async"),t.YNc(7,St,1,0,"mat-progress-bar",3),t.ALo(8,"async"),t.qZA()),2&i){let n,s;t.xp6(3),t.Q6J("ngIf",!(null!=(n=t.lcZ(4,3,e.filters))&&n.show_guests)),t.xp6(2),t.Q6J("ngIf",null==(s=t.lcZ(6,5,e.filters))?null:s.show_guests),t.xp6(2),t.Q6J("ngIf",t.lcZ(8,7,e.loading))}},dependencies:[d.O5,X.k,tt.pW,T,b,y,d.Ov],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%}\n/*# sourceMappingURL=visitors.component.ts-angular-inline--81.css.map*/"]});const Ht=[{path:"",component:k}];class x{}x.\u0275fac=function(i){return new(i||x)},x.\u0275mod=t.oAB({type:x}),x.\u0275inj=t.cJS({imports:[d.ez,G.u5,R.v,J.Bz.forChild(Ht)]})}}]);
//# sourceMappingURL=apps_concierge_src_app_visitors_visitors_module_ts.js.map