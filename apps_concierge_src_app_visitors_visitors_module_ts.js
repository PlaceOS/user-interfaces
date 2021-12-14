"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_visitors_visitors_module_ts"],{9552:(zt,q,c)=>{c.r(q),c.d(q,{VisitorsModule:()=>Dt});var m=c(8267),w=c(8346),y=c(1733),E=c(9323),p=c(8806),T=c(1119),b=c(899),U=c(9820),L=c(9026),P=c(5029),J=c(8537),A=c(8377),F=c(6928),G=c(9735),j=c(8975),C=c(373),N=c(6613),g=c(3867),h=c(7794),f=c(9148),t=c(4001),Y=c(6298);let x=(()=>{class i extends g.KG{constructor(e){super(),this._dialog=e,this._poll=new T.X(0),this._filters=new T.X({}),this._search=new T.X(""),this._loading=new T.X(!1),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this.guests=(0,b.aj)([this._filters,this._poll]).pipe((0,U.b)(150),(0,L.w)(([n])=>{this._loading.next(!0);const o=n.date?new Date(n.date):new Date,s=(0,G.Z)(o),a=(0,j.Z)(s,n.period||1);return(0,f.ro)({period_start:(0,C.Z)(s),period_end:(0,C.Z)(a),zone_ids:(n.zones||[]).join(",")})}),(0,P.b)(()=>this._loading.next(!1)),(0,J.d)(1)),this.events=(0,b.aj)([this._filters,this._poll]).pipe((0,U.b)(150),(0,L.w)(([n])=>{this._loading.next(!0);const o=n.date?new Date(n.date):new Date,s=(0,G.Z)(o),a=(0,j.Z)(s,n.period||1);return(0,h.u$)({period_start:(0,C.Z)(s),period_end:(0,C.Z)(a),zone_ids:(n.zones||[]).join(",")})}),(0,A.U)(n=>(this._loading.next(!1),this._filters.getValue().all_bookings?n:n.filter(o=>{var s,a;return(null===(s=o.guests)||void 0===s?void 0:s.length)&&(null===(a=o.attendees)||void 0===a?void 0:a.length)>1}))),(0,J.d)(1)),this.filtered_events=(0,b.aj)([this._search,this.events]).pipe((0,A.U)(([n,o])=>{const s=n.toLowerCase();return o.filter(a=>a.attendees.find(r=>{var u,d;return(null===(u=r.name)||void 0===u?void 0:u.toLowerCase().includes(s))||(null===(d=r.email)||void 0===d?void 0:d.toLowerCase().includes(s))}))})),this.filtered_guests=(0,b.aj)([this._search,this.filtered_events,this.guests]).pipe((0,A.U)(([n,o,s])=>{const a=n.toLowerCase();return(0,g.xH)(o.map(r=>r.attendees.filter(d=>{var _,v;return d.is_external&&((null===(_=d.name)||void 0===_?void 0:_.toLowerCase().includes(a))||(null===(v=d.email)||void 0===v?void 0:v.toLowerCase().includes(a)))}).map(d=>{var _,v;const I=s.find(St=>St.email===d.email)||{};return new f.OO(Object.assign(Object.assign(Object.assign({},d),I),{extension_data:Object.assign(Object.assign(Object.assign({},d.extension_data),I.extension_data),{date:r.date,host:(null===(_=r.organiser)||void 0===_?void 0:_.name)||(null===(v=r.organiser)||void 0===v?void 0:v.email)||r.host})}))})))}))}get search(){return this._search.getValue()}setFilters(e){this._filters.next(Object.assign(Object.assign({},this._filters.getValue()),e))}setSearchString(e){this._search.next(e)}startPolling(e=3e4){this.interval("poll",()=>this._poll.next(Date.now()),e)}stopPolling(){this.clearInterval("poll")}checkGuestIn(e,n){var o,s,a;return(0,p.mG)(this,void 0,void 0,function*(){const r=yield(0,h.rq)(e.id,n.email,!0,{system_id:(null===(o=e.system)||void 0===o?void 0:o.id)||(null===(s=e.resources[0])||void 0===s?void 0:s.id)}).toPromise().catch(d=>{var _;throw(0,g.cB)(`Error checking in ${n.name} for ${null===(_=e.organiser)||void 0===_?void 0:_.name}'s meeting`),d});(0,g.t5)(`Successfully checked in ${n.name} for ${null===(a=e.organiser)||void 0===a?void 0:a.name}'s meeting`);const u=(0,g.Tw)([r,...e.attendees],"email");return u.sort((d,_)=>d.organizer?-1:d.email.localeCompare(_.email)),new h.ym(Object.assign(Object.assign({},e),{attendees:u}))})}setExt(e,n,o){return(0,p.mG)(this,void 0,void 0,function*(){const s=Object.assign({},e.extension_data);s[n]=o,yield(0,f.sF)(e.id,Object.assign(Object.assign({},e),{extension_data:s})).toPromise()})}approveVisitor(e){return(0,p.mG)(this,void 0,void 0,function*(){const n=yield(0,g._5)({title:"Approve Visitor",content:`Approve attendance of ${e.name} to their meeting?`,icon:{content:"event_available"}},this._dialog);if(console.log("Details:",n),"done"!==n.reason)return n.close();n.loading("Updating guest details"),yield(0,f.sF)(e.id,Object.assign(Object.assign({},e),{extension_data:Object.assign(Object.assign({},e.extension_data),{status:"approved"})})).toPromise(),n.close()})}declineVisitor(e){return(0,p.mG)(this,void 0,void 0,function*(){const n=yield(0,g._5)({title:"Decline Visitor",content:`Decline attendance of ${e.name} to their meeting?`,icon:{content:"event_available"}},this._dialog);if(console.log("Details:",n),"done"!==n.reason)return n.close();n.loading("Updating guest details"),yield(0,f.sF)(e.id,Object.assign(Object.assign({},e),{extension_data:Object.assign(Object.assign({},e.extension_data),{status:"declined"})})).toPromise(),n.close()})}checkGuestOut(e,n){var o,s,a;return(0,p.mG)(this,void 0,void 0,function*(){const r=yield(0,h.rq)(e.id,n.email,!1,{system_id:(null===(o=e.system)||void 0===o?void 0:o.id)||(null===(s=e.resources[0])||void 0===s?void 0:s.id)}).toPromise().catch(d=>{var _;throw(0,g.cB)(`Error checking out ${n.name} from ${null===(_=e.organiser)||void 0===_?void 0:_.name}'s meeting`),d});(0,g.t5)(`Successfully checked out ${n.name} from ${null===(a=e.organiser)||void 0===a?void 0:a.name}'s meeting`);const u=(0,g.Tw)([r,...e.attendees],"email");return u.sort((d,_)=>d.organizer?-1:d.email.localeCompare(_.email)),new h.ym(Object.assign(Object.assign({},e),{attendees:u}))})}checkAllGuestsIn(e){var n;return(0,p.mG)(this,void 0,void 0,function*(){const o=e.attendees.filter(r=>r.is_external&&!r.checked_in);if(o.length<=0)throw new Error("No Guests to checkin");const s=yield Promise.all(o.map(r=>{var u,d;return(0,h.rq)(e.id,r.email,!0,{system_id:(null===(u=e.system)||void 0===u?void 0:u.id)||(null===(d=e.resources[0])||void 0===d?void 0:d.id)}).toPromise()})).catch(r=>{var u;throw(0,g.cB)(`Error checking in all guests for ${null===(u=e.organiser)||void 0===u?void 0:u.name}'s meeting`),r});(0,g.t5)(`Successfully checked in all guests for ${null===(n=e.organiser)||void 0===n?void 0:n.name}'s meeting`);const a=(0,g.Tw)([...s,...e.attendees],"email");return a.sort((r,u)=>r.organizer?-1:r.email.localeCompare(u.email)),new h.ym(Object.assign(Object.assign({},e),{attendees:a}))})}checkAllGuestsOut(e){var n;return(0,p.mG)(this,void 0,void 0,function*(){const o=e.attendees.filter(r=>r.is_external&&r.checked_in&&!r.organizer);if(o.length<=0)throw new Error("No Guests to checkout");const s=yield Promise.all(o.map(r=>{var u,d;return(0,h.rq)(e.id,r.email,!1,{system_id:(null===(u=e.system)||void 0===u?void 0:u.id)||(null===(d=e.resources[0])||void 0===d?void 0:d.id)}).toPromise()})).catch(r=>{var u;throw(0,g.cB)(`Error checking out all guests from ${null===(u=e.organiser)||void 0===u?void 0:u.name}'s meeting`),r});(0,g.t5)(`Successfully checked out all guests from ${null===(n=e.organiser)||void 0===n?void 0:n.name}'s meeting`);const a=(0,g.Tw)([...s,...e.attendees],"email");return a.sort((r,u)=>r.organizer?-1:r.email.localeCompare(u.email)),new h.ym(Object.assign(Object.assign({},e),{attendees:a}))})}downloadVisitorsList(){return(0,p.mG)(this,void 0,void 0,function*(){const e=yield this.filtered_guests.pipe((0,F.q)(1)).toPromise();if(!e.length)return;const{date:n}=this._filters.getValue(),o=e.map(a=>{var r,u;return{Name:a.name,Email:a.email,"Checked In":a.checked_in,Host:(null===(r=a.extension_data)||void 0===r?void 0:r.host)||"",Status:a.status,Date:(0,N.Z)(null===(u=a.extension_data)||void 0===u?void 0:u.date,"dd MMM h:mm a")}}),s=(0,g.o3)(o);(0,g.Sv)(`visitor-list-${(0,N.Z)(n||Date.now(),"MMM-dd")}.csv`,s)})}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(Y.uw))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var D=c(2146),S=c(4452),z=c(4555),H=c(3981),R=c(1036),Q=c(2157),$=c(1232),W=c(8961),B=c(3928);function X(i,l){if(1&i&&(t.TgZ(0,"mat-option",4),t._uU(1),t.qZA()),2&i){const e=l.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.display_name||e.name," ")}}function K(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"mat-slide-toggle",5),t.NdJ("ngModelChange",function(o){return t.CHM(e),t.oxw().setFilters({all_bookings:o})}),t.ALo(1,"async"),t.TgZ(2,"div",6),t._uU(3,"All Bookings"),t.qZA(),t.qZA()}if(2&i){const e=t.oxw();let n;t.Q6J("ngModel",null==(n=t.lcZ(1,1,e.filters))?null:n.all_bookings)}}let tt=(()=>{class i extends g.KG{constructor(e,n,o,s){super(),this._state=e,this._org=n,this._route=o,this._router=s,this.zones=[],this.levels=this._org.active_levels,this.filters=this._state.filters,this.setDate=a=>this._state.setFilters({date:a}),this.setFilters=a=>this._state.setFilters(a),this.setSearch=a=>this._state.setSearchString(a),this.updateZones=a=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:a.join(",")}}),this._state.setFilters({zones:a})}}ngOnInit(){return(0,p.mG)(this,void 0,void 0,function*(){yield this._org.initialised.pipe((0,S.P)(e=>e)).toPromise(),this.subscription("route.query",this._route.queryParamMap.subscribe(e=>{if(e.has("zone_ids")){const n=e.get("zone_ids").split(",");if(n.length){const o=this._org.levelWithID(n);if(this.zones=n,!o)return;this._org.building=this._org.buildings.find(s=>s.id===o.parent_id)}}})),this.subscription("levels",this._org.active_levels.subscribe(e=>{this.zones=this.zones.filter(n=>e.find(o=>o.id===n)),!this.zones.length&&e.length&&this.zones.push(e[0].id),this.updateZones(this.zones)})),this.setSearch("")})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(x),t.Y36(z.w7),t.Y36(y.gz),t.Y36(y.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["visitors-topbar"]],features:[t.qOj],decls:22,vars:16,consts:[["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["placeholder","Viewing Period",3,"ngModel","ngModelChange"],[3,"value"],[1,"m-2",3,"ngModel","ngModelChange"],[1,"text-xs"],["class","m-2",3,"ngModel","ngModelChange",4,"ngIf"],[1,"flex-1","w-2"],[1,"mr-2",3,"modelChange"],[3,"dateChange"]],template:function(e,n){if(1&e&&(t.TgZ(0,"mat-form-field",0),t.TgZ(1,"mat-select",1),t.NdJ("ngModelChange",function(s){return n.zones=s})("ngModelChange",function(s){return n.updateZones(s)}),t.YNc(2,X,2,2,"mat-option",2),t.ALo(3,"async"),t.qZA(),t.qZA(),t.TgZ(4,"mat-form-field",0),t.TgZ(5,"mat-select",3),t.NdJ("ngModelChange",function(s){return n.setFilters({period:s})}),t.ALo(6,"async"),t.TgZ(7,"mat-option",4),t._uU(8,"Show Day"),t.qZA(),t.TgZ(9,"mat-option",4),t._uU(10,"Show Week"),t.qZA(),t.TgZ(11,"mat-option",4),t._uU(12,"Show Month"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"mat-slide-toggle",5),t.NdJ("ngModelChange",function(s){return n.setFilters({show_guests:s})}),t.ALo(14,"async"),t.TgZ(15,"div",6),t._uU(16,"Only Guests"),t.qZA(),t.qZA(),t.YNc(17,K,4,3,"mat-slide-toggle",7),t.ALo(18,"async"),t._UZ(19,"div",8),t.TgZ(20,"searchbar",9),t.NdJ("modelChange",function(s){return n.setSearch(s)}),t.qZA(),t.TgZ(21,"date-options",10),t.NdJ("dateChange",function(s){return n.setDate(s)}),t.qZA()),2&e){let o,s,a;t.xp6(1),t.Q6J("ngModel",n.zones),t.xp6(1),t.Q6J("ngForOf",t.lcZ(3,8,n.levels)),t.xp6(3),t.Q6J("ngModel",(null==(o=t.lcZ(6,10,n.filters))?null:o.period)||1),t.xp6(2),t.Q6J("value",1),t.xp6(2),t.Q6J("value",7),t.xp6(2),t.Q6J("value",30),t.xp6(2),t.Q6J("ngModel",null==(s=t.lcZ(14,12,n.filters))?null:s.show_guests),t.xp6(4),t.Q6J("ngIf",!(null!=(a=t.lcZ(18,14,n.filters))&&a.show_guests))}},directives:[H.KE,R.gD,w.JJ,w.On,m.sg,Q.ey,$.Rr,m.O5,W.U,B.E],pipes:[m.Ov],styles:["[_nghost-%COMP%]{display:flex;align-items:center;background-color:#fff;height:5em;padding:0 1em;border-bottom:1px solid #ccc}[_nghost-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin-left:.5rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n/*# sourceMappingURL=visitors-topbar.component.ts-angular-inline--56.css.map*/"]}),i})();var k=c(3595),O=c(4731),Z=c(7752),M=c(9680);function et(i,l){1&i&&(t.TgZ(0,"i",14),t._uU(1,"face"),t.qZA())}function nt(i,l){if(1&i&&(t.ynx(0),t.YNc(1,et,2,0,"i",13),t.BQk()),2&i){const e=t.oxw(),n=t.MAs(3);t.xp6(1),t.Q6J("ngIf",!(null!=e.visitor&&e.visitor.checked_in))("ngIfElse",n)}}function it(i,l){1&i&&(t.TgZ(0,"i",15),t._uU(1,"done"),t.qZA())}function ot(i,l){1&i&&(t.TgZ(0,"i",16),t._uU(1,"assignment_ind"),t.qZA())}function st(i,l){if(1&i&&(t.TgZ(0,"div",17),t.TgZ(1,"h2"),t._uU(2),t.qZA(),t.TgZ(3,"div"),t.TgZ(4,"span"),t._uU(5,"Host:"),t.qZA(),t._uU(6),t.qZA(),t.TgZ(7,"div"),t.TgZ(8,"span"),t._uU(9,"Purpose:"),t.qZA(),t._uU(10),t.qZA(),t.TgZ(11,"div"),t.TgZ(12,"span"),t._uU(13,"Location:"),t.qZA(),t._uU(14),t.qZA(),t.TgZ(15,"div"),t.TgZ(16,"span"),t._uU(17,"Issue Date:"),t.qZA(),t._uU(18),t.ALo(19,"date"),t.qZA(),t.TgZ(20,"div",18),t._UZ(21,"img",19),t.qZA(),t.qZA()),2&i){const e=t.oxw();t.xp6(2),t.Oqu((null==e.visitor?null:e.visitor.name)||(null==e.visitor?null:e.visitor.email)),t.xp6(4),t.hij(" ",(null==e.event||null==e.event.organiser?null:e.event.organiser.name)||(null==e.event||null==e.event.organiser?null:e.event.organiser.name)||(null==e.event?null:e.event.creator)," "),t.xp6(4),t.hij(" ",null==e.event?null:e.event.title,""),t.xp6(4),t.hij(" ",(null==e.event?null:e.event.location)||"<Unspecified>"," "),t.xp6(4),t.hij(" ",t.xi3(19,6,e.today,"mediumDate"),""),t.xp6(3),t.Q6J("src",(null==e.visitor||null==e.visitor.extension_data||null==e.visitor.extension_data.qr?null:e.visitor.extension_data.qr.code)||"",t.LSH)}}let lt=(()=>{class i extends g.KG{constructor(e,n){super(),this._state=e,this._settings=n,this.eventChange=new t.vpe,this.checkin=()=>(0,p.mG)(this,void 0,void 0,function*(){this.loading="checkin",this.event=yield this._state.checkGuestIn(this.event,this.visitor).catch(o=>this.event),this.eventChange.emit(this.event),this.loading=""}),this.toggleRemote=()=>(0,p.mG)(this,void 0,void 0,function*(){var o;this.loading="remote";const s=(null===(o=this.event.ext("remote"))||void 0===o?void 0:o.filter(r=>r!==this.visitor.email))||[];this.remote||s.push(this.visitor.email);const a=new h.ym(Object.assign(Object.assign({},this.event.toJSON()),{remote:s})).toJSON();this.event=yield(0,h.ry)(a).toPromise().catch(r=>((0,g.cB)(`Error setting visitor status. Error: ${r.statusText||r.message||r}`),this.event)),this.eventChange.emit(this.event),this.loading=""}),this.checkout=()=>(0,p.mG)(this,void 0,void 0,function*(){this.loading="checkout",this.event=yield this._state.checkGuestOut(this.event,this.visitor).catch(o=>this.event),this.eventChange.emit(this.event),this.loading=""}),this.printQRCode=()=>{this.show_qr_code=!0,this.timeout("print",()=>{window.print(),this.show_qr_code=!1},50)}}get can_print(){var e;return this._settings.get("app.can_print_qr")&&this.visitor.checked_in&&(null===(e=this.visitor)||void 0===e?void 0:e.extension_data.qr)}get today(){return Date.now()}get remote(){var e,n,o;return!!(null===(o=null===(n=null===(e=this.event)||void 0===e?void 0:e.extension_data)||void 0===n?void 0:n.remote)||void 0===o?void 0:o.find(s=>{var a;return s===(null===(a=this.visitor)||void 0===a?void 0:a.email)}))}ngOnChanges(e){e.visitor&&this.loadGuest()}loadGuest(e=0){var n,o;return(0,p.mG)(this,void 0,void 0,function*(){if(this.visitor)if(this.loading="printing",this.visitor.checked_in){const s=yield(0,f.pP)(this.visitor.email).toPromise().catch(a=>null);!(null===(o=null===(n=null==s?void 0:s.extension_data)||void 0===n?void 0:n.qr)||void 0===o?void 0:o.code)&&e<5?this.timeout("load_guest",()=>this.loadGuest(++e),1e3):this.loading=""}else this.loading=""})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(x),t.Y36(g.gb))},i.\u0275cmp=t.Xpm({type:i,selectors:[["visitor-details"]],inputs:{event:"event",visitor:"visitor"},outputs:{eventChange:"eventChange"},features:[t.qOj,t.TTD],decls:18,vars:21,consts:[[1,"w-12","text-lg","flex","justify-center"],[4,"ngIf","ngIfElse"],["checkin_state",""],["host_state",""],["flex","",1,"p-2","flex-1"],[1,"w-48","py-2","flex","items-center","justify-end"],["remote","",3,"matTooltip","loading","content","click"],["checkin","","matTooltip","Checkin Guest","content","event_available",3,"loading","state","click"],["checkout","","matTooltip","Checkout Guest","content","event_busy",3,"loading","click"],["mat-icon-button","",3,"href","matTooltip"],["matTooltip","Print QR Code","content","event_busy",3,"loading","click"],[1,"w-14","p-2"],["qr-code","","class","print-only fixed inset-0 flex flex-col justify-center bg-white space-y-2",4,"ngIf"],["class","p-2 rounded-full material-icons border-2 border-dotted border-gray-600",4,"ngIf","ngIfElse"],[1,"p-2","rounded-full","material-icons","border-2","border-dotted","border-gray-600"],[1,"p-2","rounded-full","material-icons","bg-green-600","border-2","border-green-600","text-white"],[1,"p-2","rounded-full","material-icons","bg-blue-600","border-2","border-blue-600","text-white"],["qr-code","",1,"print-only","fixed","inset-0","flex","flex-col","justify-center","bg-white","space-y-2"],[1,"flex","justify-center"],["alt","qr-code",3,"src"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0),t.YNc(1,nt,2,2,"ng-container",1),t.YNc(2,it,2,0,"ng-template",null,2,t.W1O),t.YNc(4,ot,2,0,"ng-template",null,3,t.W1O),t.qZA(),t.TgZ(6,"div",4),t._uU(7),t.qZA(),t.TgZ(8,"div",5),t.TgZ(9,"action-icon",6),t.NdJ("click",function(){return n.toggleRemote()}),t.qZA(),t.TgZ(10,"action-icon",7),t.NdJ("click",function(){return n.checkin()}),t.qZA(),t.TgZ(11,"action-icon",8),t.NdJ("click",function(){return n.checkout()}),t.qZA(),t.TgZ(12,"a",9),t.TgZ(13,"app-icon"),t._uU(14,"email"),t.qZA(),t.qZA(),t.TgZ(15,"action-icon",10),t.NdJ("click",function(){return n.printQRCode()}),t.qZA(),t.qZA(),t._UZ(16,"div",11),t.YNc(17,st,22,9,"div",12)),2&e){const o=t.MAs(5);t.xp6(1),t.Q6J("ngIf",!(null!=n.visitor&&n.visitor.organizer))("ngIfElse",o),t.xp6(6),t.Oqu((null==n.visitor?null:n.visitor.name)||(null==n.visitor?null:n.visitor.email)),t.xp6(2),t.ekj("invisible",!(null!=n.visitor&&n.visitor.is_external)||(null==n.visitor?null:n.visitor.organizer)),t.Q6J("matTooltip",n.remote?"Set as In-Person Visitor":"Set as Remote Visitior")("loading","remote"===n.loading)("content",n.remote?"tap_and_play":"business"),t.xp6(1),t.ekj("invisible",!(null!=n.visitor&&n.visitor.is_external)||(null==n.visitor?null:n.visitor.organizer)),t.Q6J("loading","checkin"===n.loading)("state",null!=n.visitor&&n.visitor.checked_in?"success":""),t.xp6(1),t.ekj("invisible",!(null!=n.visitor&&n.visitor.is_external)||(null==n.visitor?null:n.visitor.organizer)),t.Q6J("loading","checkout"===n.loading),t.xp6(1),t.Q6J("href","mailto:"+(null==n.visitor?null:n.visitor.email),t.LSH)("matTooltip",null!=n.visitor&&n.visitor.organizer?"Email Host":"Email Guest"),t.xp6(3),t.ekj("invisible",!n.can_print),t.Q6J("loading","printing"===n.loading),t.xp6(2),t.Q6J("ngIf",n.show_qr_code)}},directives:[m.O5,k.m,O.gM,Z.zs,M.o],pipes:[m.uU],styles:["[_nghost-%COMP%]{display:flex;align-items:center;width:100%;padding:0 .5rem}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center;height:100%;border-bottom:1px solid #ccc;height:3.5rem}[_nghost-%COMP%] > div[_ngcontent-%COMP%]:first-child{border:none}.invisible[_ngcontent-%COMP%]{opacity:0;pointer-events:none}\n/*# sourceMappingURL=visitor-details.component.ts-angular-inline--58.css.map*/"]}),i})();function at(i,l){1&i&&(t.TgZ(0,"i",18),t._uU(1,"event"),t.qZA())}function rt(i,l){1&i&&(t.TgZ(0,"i",18),t._uU(1,"close"),t.qZA())}function ct(i,l){1&i&&(t.TgZ(0,"i",19),t._uU(1,"done"),t.qZA())}function ut(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"div",4),t.TgZ(1,"div",5),t.YNc(2,at,2,0,"i",6),t.YNc(3,rt,2,0,"i",6),t.YNc(4,ct,2,0,"i",7),t.qZA(),t.TgZ(5,"div",8),t._uU(6),t.ALo(7,"date"),t.ALo(8,"async"),t.qZA(),t.TgZ(9,"div",9),t._uU(10),t.qZA(),t.TgZ(11,"div",10),t._uU(12),t.qZA(),t.TgZ(13,"div",11),t._uU(14),t.qZA(),t.TgZ(15,"div",12),t.TgZ(16,"action-icon",13),t.NdJ("click",function(){return t.CHM(e),t.oxw().checkinGuests()}),t.qZA(),t.TgZ(17,"action-icon",14),t.NdJ("click",function(){return t.CHM(e),t.oxw().checkoutGuests()}),t.qZA(),t.TgZ(18,"a",15),t.TgZ(19,"app-icon"),t._uU(20,"email"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(21,"div",16),t.TgZ(22,"button",17),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return o.show_attendees=!o.show_attendees}),t.TgZ(23,"app-icon"),t._uU(24),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&i){const e=t.oxw();let n;t.xp6(2),t.Q6J("ngIf","declined"!==(null==e.event?null:e.event.status)&&"done"!==(null==e.event?null:e.event.state)),t.xp6(1),t.Q6J("ngIf","declined"===(null==e.event?null:e.event.status)),t.xp6(1),t.Q6J("ngIf","done"===(null==e.event?null:e.event.state)&&"declined"!==(null==e.event?null:e.event.status)),t.xp6(2),t.hij(" ",t.xi3(7,15,null==e.event?null:e.event.date,(null==(n=t.lcZ(8,18,e.filters))?null:n.period)>1?"MMM d, h:mm a":"shortTime")," "),t.xp6(4),t.hij(" ",(null==e.event||null==e.event.organiser?null:e.event.organiser.name)||(null==e.event||null==e.event.organiser?null:e.event.organiser.email)," "),t.xp6(2),t.Oqu(null==e.event?null:e.event.title),t.xp6(2),t.Oqu(null==e.event?null:e.event.location),t.xp6(2),t.Q6J("loading","checkin"===e.loading)("disabled",e.guestCount<=0),t.xp6(1),t.Q6J("loading","checkout"===e.loading)("disabled",e.guestCount<=0),t.xp6(1),t.Q6J("href","mailto:"+(null==e.event||null==e.event.organiser?null:e.event.organiser.email),t.LSH),t.xp6(4),t.Q6J("disabled",!(null!=e.event&&null!=e.event.attendees&&e.event.attendees.length))("matTooltip",e.show_attendees||e.has_search?"Hide Attendees":"Show Attendees"),t.xp6(2),t.Oqu(e.show_attendees?"keyboard_arrow_down":"keyboard_arrow_right")}}function dt(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"div",21),t._UZ(1,"div",22),t.TgZ(2,"visitor-details",23),t.NdJ("eventChange",function(o){return t.CHM(e),t.oxw(2).event=o}),t.qZA(),t.qZA()}if(2&i){const e=l.$implicit,n=t.oxw(2);t.xp6(2),t.Q6J("visitor",e)("event",n.event),t.uIk("disabled",!n.matches[e.email])}}const gt=function(){return[]};function _t(i,l){if(1&i&&(t.ynx(0),t.YNc(1,dt,3,3,"div",20),t.BQk()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",(null==e.event?null:e.event.attendees)||t.DdM(1,gt))}}let mt=(()=>{class i extends g.KG{constructor(e){super(),this._state=e,this.matches={},this.filters=this._state.filters,this.checkinGuests=()=>(0,p.mG)(this,void 0,void 0,function*(){this.loading="checkin",this.event=yield this._state.checkAllGuestsIn(this.event).catch(n=>this.event),this.loading=""}),this.checkoutGuests=()=>(0,p.mG)(this,void 0,void 0,function*(){this.loading="checkout",this.event=yield this._state.checkAllGuestsOut(this.event).catch(n=>this.event),this.loading=""})}get guestCount(){var e;return(null===(e=this.event)||void 0===e?void 0:e.attendees.reduce((n,o)=>n+(o.is_external&&!o.organizer?1:0),0))||0}get has_search(){return this._state.search}ngOnInit(){this.subscription("events",this._state.filtered_events.subscribe(()=>this.updateMatches()))}updateMatches(){var e;if(!this.event)return;this.matches={};const n=(this._state.search||"").toLowerCase();for(const o of(null===(e=this.event)||void 0===e?void 0:e.attendees)||[])this.matches[o.email]=!n||o.email.toLowerCase().includes(n)||o.name.toLowerCase().includes(n)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(x))},i.\u0275cmp=t.Xpm({type:i,selectors:[["visitor-event"]],inputs:{event:"event"},features:[t.qOj],decls:4,vars:6,consts:[["class","flex items-center px-2 bg-gray-100",4,"ngIf"],["attendees","",1,"w-full","overflow-hidden","relative","border-b","border-gray-300"],["bar","",1,"absolute","top-0","bg-gray-400","z-10"],[4,"ngIf"],[1,"flex","items-center","px-2","bg-gray-100"],[1,"w-12","text-lg","flex","justify-center"],["class","p-2 rounded-full material-icons bg-gray-400",4,"ngIf"],["class","p-2 rounded-full material-icons bg-gray-400 opacity-40",4,"ngIf"],[1,"w-24","p-2"],[1,"w-48","p-2"],["flex","",1,"p-2","flex-1"],[1,"w-64","p-2","truncate"],[1,"w-32","py-2","flex","items-center"],["checkin","","matTooltip","Checkin All Guests","content","event_available",3,"loading","disabled","click"],["checkout","","matTooltip","Checkout All Guests","content","event_busy",3,"loading","disabled","click"],["mat-icon-button","","matTooltip","Email Host",3,"href"],[1,"w-16","p-2"],["mat-icon-button","",3,"disabled","matTooltip","click"],[1,"p-2","rounded-full","material-icons","bg-gray-400"],[1,"p-2","rounded-full","material-icons","bg-gray-400","opacity-40"],["visitor","","class","relative w-full pl-12 bg-gray-200",4,"ngFor","ngForOf"],["visitor","",1,"relative","w-full","pl-12","bg-gray-200"],["l-bar","",1,"absolute","bg-gray-400"],[3,"visitor","event","eventChange"]],template:function(e,n){1&e&&(t.YNc(0,ut,25,20,"div",0),t.TgZ(1,"div",1),t._UZ(2,"div",2),t.YNc(3,_t,2,2,"ng-container",3),t.qZA()),2&e&&(t.Q6J("ngIf",n.event),t.xp6(1),t.Udp("height",n.show_attendees||n.has_search?3.5*(null==n.event?null:n.event.attendees.length)+"rem":"0rem"),t.xp6(1),t.Udp("height","calc("+(3.5*((null==n.event?null:n.event.attendees.length)-1)+1.75)+"rem + 1px)"),t.xp6(1),t.Q6J("ngIf",n.show_attendees||n.has_search))},directives:[m.O5,k.m,O.gM,Z.zs,M.o,Z.lW,m.sg,lt],pipes:[m.uU,m.Ov],styles:["[_nghost-%COMP%]{width:100%}visitor-details[_ngcontent-%COMP%]{transition:opacity .2s}[attendees][_ngcontent-%COMP%]{transition:height .2s}[visitor][_ngcontent-%COMP%]{height:3.5rem}[bar][_ngcontent-%COMP%]{width:2px;left:calc(2rem - 1px)}[l-bar][_ngcontent-%COMP%]{height:2px;left:2rem;top:calc(50% - 1px);width:1rem}[disabled=true][_ngcontent-%COMP%]{opacity:.35}\n/*# sourceMappingURL=visitor-event.component.ts-angular-inline--57.css.map*/"]}),i})();function pt(i,l){1&i&&t._UZ(0,"visitor-event",13),2&i&&t.Q6J("event",l.$implicit)}function ht(i,l){if(1&i&&(t.ynx(0),t.YNc(1,pt,1,1,"visitor-event",12),t.ALo(2,"async"),t.BQk()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,2,e.bookings))("ngForTrackBy",e.trackByFn)}}function vt(i,l){1&i&&(t.TgZ(0,"div",14),t.TgZ(1,"p",15),t._uU(2," There are no visitors for the currently selected date. "),t.qZA(),t.qZA())}let ft=(()=>{class i{constructor(e){this._state=e,this.bookings=this._state.filtered_events}trackByFn(e,n){return n?n.id:void 0}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(x))},i.\u0275cmp=t.Xpm({type:i,selectors:[["visitor-listings"]],decls:19,vars:4,consts:[[1,"w-full","flex","flex-col","flex-1","text-sm","h-full"],[1,"w-full","flex","items-center","bg-white","border-b","border-gray-500","p-2","font-medium"],[1,"w-12","p-2"],[1,"w-24","p-2"],[1,"w-48","p-2"],["flex","",1,"p-2","flex-1"],[1,"w-64","p-2"],[1,"w-32","p-2"],[1,"w-16","p-2"],[1,"w-full","flex-1","overflow-auto","h-1/2"],[4,"ngIf","ngIfElse"],["empty_state",""],[3,"event",4,"ngFor","ngForOf","ngForTrackBy"],[3,"event"],[1,"h-full","w-full","flex","items-center","justify-center"],[1,"p-8"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._UZ(2,"div",2),t.TgZ(3,"div",3),t._uU(4,"Time"),t.qZA(),t.TgZ(5,"div",4),t._uU(6,"Host"),t.qZA(),t.TgZ(7,"div",5),t._uU(8,"Title"),t.qZA(),t.TgZ(9,"div",6),t._uU(10,"Location"),t.qZA(),t.TgZ(11,"div",7),t._uU(12,"Actions"),t.qZA(),t._UZ(13,"div",8),t.qZA(),t.TgZ(14,"div",9),t.YNc(15,ht,3,4,"ng-container",10),t.ALo(16,"async"),t.qZA(),t.qZA(),t.YNc(17,vt,3,0,"ng-template",null,11,t.W1O)),2&e){const o=t.MAs(18);let s;t.xp6(15),t.Q6J("ngIf",null==(s=t.lcZ(16,2,n.bookings))?null:s.length)("ngIfElse",o)}},directives:[m.O5,m.sg,mt],pipes:[m.Ov],styles:[""]}),i})();var xt=c(5966),Zt=c(1949),V=c(9872);function Tt(i,l){1&i&&(t.TgZ(0,"i",12),t._uU(1,"face"),t.qZA())}function bt(i,l){1&i&&(t.TgZ(0,"i",13),t._uU(1,"done"),t.qZA())}function Ct(i,l){if(1&i&&(t.YNc(0,Tt,2,0,"i",10),t.YNc(1,bt,2,0,"ng-template",null,11,t.W1O)),2&i){const e=l.row,n=t.MAs(2);t.Q6J("ngIf",!(null!=e&&e.checked_in))("ngIfElse",n)}}function wt(i,l){if(1&i&&t._uU(0),2&i){const e=l.row;t.hij(" ",null==e.extension_data?null:e.extension_data.host," ")}}function yt(i,l){if(1&i&&(t.TgZ(0,"button",17),t._uU(1),t.qZA()),2&i){const e=t.oxw().row;t.xp6(1),t.hij(" ",null!=e.extension_data&&e.extension_data.vaccination_confirmed?"Confirmed":!1===(null==e.extension_data?null:e.extension_data.vaccination_confirmed)?"Rejected":"Submitted"," ")}}function At(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"div",18),t._UZ(1,"img",19),t.TgZ(2,"button",20),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().row;return t.oxw().setExt(o,"vaccination_confirmed",!0)}),t._uU(3," Confirm Vaccination Proof "),t.qZA(),t.TgZ(4,"button",21),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().row;return t.oxw().setExt(o,"vaccination_confirmed",!1)}),t._uU(5," Reject Vaccination Proof "),t.qZA(),t.qZA()}if(2&i){const e=t.oxw().row;t.xp6(1),t.Q6J("src",null==e.extension_data||null==e.extension_data.vaccination_proof?null:e.extension_data.vaccination_proof.url,t.LSH)}}function kt(i,l){if(1&i&&(t.TgZ(0,"div",14),t.YNc(1,yt,2,1,"button",15),t.qZA(),t.YNc(2,At,6,1,"ng-template",null,16,t.W1O)),2&i){const e=l.row,n=t.MAs(3);t.Q6J("content",n),t.xp6(1),t.Q6J("ngIf",null==e.extension_data||null==e.extension_data.vaccination_proof?null:e.extension_data.vaccination_proof.url)}}function Ot(i,l){if(1&i&&(t.TgZ(0,"button",17),t._uU(1),t.qZA()),2&i){const e=t.oxw().row;t.xp6(1),t.hij(" ",null!=e.extension_data&&e.extension_data.id_confirmed?"Confirmed":!1===(null==e.extension_data?null:e.extension_data.id_confirmed)?"Rejected":"Submitted"," ")}}function Mt(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"div",18),t._UZ(1,"img",23),t.TgZ(2,"button",20),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().row;return t.oxw().setExt(o,"id_confirmed",!0)}),t._uU(3," Confirm ID "),t.qZA(),t.TgZ(4,"button",21),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().row;return t.oxw().setExt(o,"id_confirmed",!1)}),t._uU(5," Reject ID "),t.qZA(),t.qZA()}if(2&i){const e=t.oxw().row;t.xp6(1),t.Q6J("src",null==e.extension_data||null==e.extension_data.id_data?null:e.extension_data.id_data.url,t.LSH)}}function Vt(i,l){if(1&i&&(t.TgZ(0,"div",14),t.YNc(1,Ot,2,1,"button",15),t.qZA(),t.YNc(2,Mt,6,1,"ng-template",null,22,t.W1O)),2&i){const e=l.row,n=t.MAs(3);t.Q6J("content",n),t.xp6(1),t.Q6J("ngIf",null==e.extension_data||null==e.extension_data.id_data?null:e.extension_data.id_data.url)}}function qt(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"button",24),t.TgZ(1,"div",25),t.TgZ(2,"div",26),t._uU(3),t.qZA(),t.TgZ(4,"app-icon",27),t._uU(5,"arrow_drop_down"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"mat-menu",null,28),t.TgZ(8,"button",29),t.NdJ("click",function(){const s=t.CHM(e).row;return t.oxw().approveVisitor(s)}),t._uU(9," Approve Visitor "),t.qZA(),t.TgZ(10,"button",29),t.NdJ("click",function(){const s=t.CHM(e).row;return t.oxw().declineVisitor(s)}),t._uU(11," Decline Visitor "),t.qZA(),t.qZA()}if(2&i){const e=l.row,n=t.MAs(7);t.ekj("bg-success","approved"===(null==e?null:e.status))("!bg-error","declined"===(null==e?null:e.status)),t.Q6J("matMenuTriggerFor",n),t.xp6(3),t.hij(" ","approved"===(null==e?null:e.status)?"Approved":"declined"===(null==e?null:e.status)?"Declined":"Pending"," ")}}function Ut(i,l){if(1&i&&(t._uU(0),t.ALo(1,"date"),t.ALo(2,"async")),2&i){const e=l.row,n=t.oxw();let o;t.hij(" ",t.xi3(1,1,null==e.extension_data?null:e.extension_data.date,(null==(o=t.lcZ(2,4,n.filters))?null:o.period)>1?"MMM d, h:mm a":"shortTime")," ")}}function Lt(i,l){if(1&i&&(t.TgZ(0,"a",37),t._uU(1),t.qZA()),2&i){const e=l.$implicit;t.Q6J("href",e.url,t.LSH),t.xp6(1),t.Oqu(e.name)}}function Jt(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"button",30),t.TgZ(1,"app-icon"),t._uU(2,"attachment"),t.qZA(),t.qZA(),t.TgZ(3,"mat-menu",null,28),t.YNc(5,Lt,2,2,"a",31),t.qZA(),t.TgZ(6,"action-icon",32),t.NdJ("click",function(){return t.CHM(e),t.oxw().toggleRemote()}),t.qZA(),t.TgZ(7,"action-icon",33),t.NdJ("click",function(){return t.CHM(e),t.oxw().checkin()}),t.qZA(),t.TgZ(8,"action-icon",34),t.NdJ("click",function(){return t.CHM(e),t.oxw().checkout()}),t.qZA(),t.TgZ(9,"a",35),t.TgZ(10,"app-icon"),t._uU(11,"email"),t.qZA(),t.qZA(),t.TgZ(12,"action-icon",36),t.NdJ("click",function(){return t.CHM(e),t.oxw().printQRCode()}),t.qZA()}if(2&i){const e=l.row,n=t.MAs(4),o=t.oxw();t.Q6J("disabled",!(null!=e.attachments&&e.attachments.length))("matMenuTriggerFor",n),t.xp6(5),t.Q6J("ngForOf",e.attachments),t.xp6(1),t.ekj("invisible",!(null!=e&&e.is_external)||(null==e?null:e.organizer)),t.Q6J("matTooltip",o.remote?"Set as In-Person Visitor":"Set as Remote Visitior")("loading","remote"===o.loading)("content",o.remote?"tap_and_play":"business"),t.xp6(1),t.ekj("invisible",!(null!=e&&e.is_external)||(null==e?null:e.organizer)),t.Q6J("loading","checkin"===o.loading)("state",null!=e&&e.checked_in?"success":""),t.xp6(1),t.ekj("invisible",!(null!=e&&e.is_external)||(null==e?null:e.organizer)),t.Q6J("loading","checkout"===o.loading),t.xp6(1),t.Q6J("href","mailto:"+(null==e?null:e.email),t.LSH)("matTooltip",null!=e&&e.organizer?"Email Host":"Email Guest"),t.xp6(3),t.ekj("invisible",!o.can_print),t.Q6J("loading","printing"===o.loading)}}function Gt(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"button",38),t.NdJ("click",function(){return t.CHM(e),t.oxw().downloadVisitorList()}),t.TgZ(1,"app-icon"),t._uU(2,"download"),t.qZA(),t.qZA()}}const jt=function(i,l,e,n,o,s,a){return{state:i,status:l,date:e,host:n,vaccinated:o,id_data:s,actions:a}};let Nt=(()=>{class i{constructor(e,n){this._state=e,this._settings=n,this.guests=this._state.filtered_guests,this.search=this._state.search,this.filters=this._state.filters,this.downloadVisitorList=()=>this._state.downloadVisitorsList(),this.approveVisitor=o=>this._state.approveVisitor(o),this.declineVisitor=o=>this._state.declineVisitor(o),this.setExt=(o,s,a)=>this._state.setExt(o,s,a)}get columns(){return this._settings.get("app.guests.vaccine_check")?["state","date","name","host","email","vaccinated","id_data","status","actions"]:["state","date","name","host","email","status","actions"]}get display_columns(){const e={state:" ",date:"Date",name:"Person",host:"Host",email:"Email",vaccinated:"Vaccinated",id_data:"ID",status:"State",actions:" "};return this.columns.map(n=>e[n]||n)}get column_sizes(){const e={state:"3.5r",date:"8r",name:"12r",host:"12r",email:"flex",vaccinated:"8r",id_data:"8r",status:"10r",actions:"12r"};return this.columns.map(n=>e[n]||n)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(x),t.Y36(g.gb))},i.\u0275cmp=t.Xpm({type:i,selectors:[["guest-listings"]],decls:20,vars:22,consts:[[1,"w-full","flex","flex-col","flex-1","text-sm","h-full","overflow-auto","pb-20"],[1,"min-w-[88rem]",3,"dataSource","filter","columns","display_column","column_size","template","empty"],["state_template",""],["host_template",""],["vaccinated_template",""],["id_template",""],["status_template",""],["date_template",""],["action_template",""],["class","bg-secondary hover:shadow-lg shadow absolute bottom-4 right-4 text-white h-12 w-12","matTooltip","Download Visitor List","matTooltipPosition","left","mat-icon-button","",3,"click",4,"ngIf"],["class","p-2 rounded-full material-icons border-2 border-dotted border-gray-600",4,"ngIf","ngIfElse"],["checkin_state",""],[1,"p-2","rounded-full","material-icons","border-2","border-dotted","border-gray-600"],[1,"p-2","rounded-full","material-icons","bg-green-600","border-2","border-green-600","text-white"],["customTooltip","",3,"content"],["matRipple","","class","bg-success rounded-3xl px-4 py-2 text-white",4,"ngIf"],["vaccine_confirmation",""],["matRipple","",1,"bg-success","rounded-3xl","px-4","py-2","text-white"],[1,"bg-white","rounded","p-2","flex","flex-col","space-y-2","my-2"],[1,"max-w-[20rem]","max-h-[20rem]","p-2","object-contain",3,"src"],["mat-button","",3,"click"],["mat-button","",1,"inverse","mt-2",3,"click"],["id_confirmation",""],[1,"max-w-[20rem]","max-h-[20rem]","object-contain",3,"src"],["mat-button","",1,"rounded-3xl","bg-pending","border-none",3,"matMenuTriggerFor"],[1,"flex","items-center"],[1,"mx-2"],[1,"text-2xl"],["menu","matMenu"],["mat-menu-item","",3,"click"],["mat-icon-button","","title","","matTooltip","View Attachments",3,"disabled","matMenuTriggerFor"],["mat-menu-item","",3,"href",4,"ngFor","ngForOf"],["remote","",3,"matTooltip","loading","content","click"],["checkin","","matTooltip","Checkin Guest","content","event_available",3,"loading","state","click"],["checkout","","matTooltip","Checkout Guest","content","event_busy",3,"loading","click"],["mat-icon-button","",3,"href","matTooltip"],["matTooltip","Print QR Code","content","event_busy",3,"loading","click"],["mat-menu-item","",3,"href"],["matTooltip","Download Visitor List","matTooltipPosition","left","mat-icon-button","",1,"bg-secondary","hover:shadow-lg","shadow","absolute","bottom-4","right-4","text-white","h-12","w-12",3,"click"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0),t._UZ(1,"custom-table",1),t.ALo(2,"async"),t.ALo(3,"async"),t.qZA(),t.YNc(4,Ct,3,2,"ng-template",null,2,t.W1O),t.YNc(6,wt,1,1,"ng-template",null,3,t.W1O),t.YNc(8,kt,4,2,"ng-template",null,4,t.W1O),t.YNc(10,Vt,4,2,"ng-template",null,5,t.W1O),t.YNc(12,qt,12,6,"ng-template",null,6,t.W1O),t.YNc(14,Ut,3,6,"ng-template",null,7,t.W1O),t.YNc(16,Jt,13,20,"ng-template",null,8,t.W1O),t.YNc(18,Gt,3,0,"button",9),t.ALo(19,"async")),2&e){const o=t.MAs(5),s=t.MAs(7),a=t.MAs(9),r=t.MAs(11),u=t.MAs(13),d=t.MAs(15),_=t.MAs(17);let v;t.xp6(1),t.Q6J("dataSource",n.guests)("filter",t.lcZ(2,8,n.search))("columns",n.columns)("display_column",n.display_columns)("column_size",n.column_sizes)("template",t.Hh0(14,jt,o,u,d,s,a,r,_))("empty",t.lcZ(3,10,n.search)?"No matching visitors":"There are visitors for the currently selected date."),t.xp6(17),t.Q6J("ngIf",null==(v=t.lcZ(19,12,n.guests))?null:v.length)}},directives:[xt.C,m.O5,Zt.X,Q.wG,Z.lW,V.p6,M.o,V.VK,V.OP,O.gM,m.sg,k.m,Z.zs],pipes:[m.Ov,m.uU],styles:[""]}),i})();var Qt=c(3776);const It=["app-visitors",""];function Et(i,l){1&i&&t._UZ(0,"visitor-listings",4)}function Pt(i,l){1&i&&t._UZ(0,"guest-listings",4)}function Ft(i,l){1&i&&t._UZ(0,"mat-progress-bar",5)}const Yt=[{path:"",component:(()=>{class i{constructor(e){this._state=e,this.loading=this._state.loading,this.filters=this._state.filters}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(x))},i.\u0275cmp=t.Xpm({type:i,selectors:[["","app-visitors",""]],attrs:It,decls:9,vars:9,consts:[[1,"relative","overflow-hidden","flex-1","flex","flex-col"],[1,"w-full"],["class","w-full flex-1 h-0",4,"ngIf"],["class","w-full","mode","indeterminate",4,"ngIf"],[1,"w-full","flex-1","h-0"],["mode","indeterminate",1,"w-full"]],template:function(e,n){if(1&e&&(t._UZ(0,"sidebar"),t.TgZ(1,"main",0),t._UZ(2,"visitors-topbar",1),t.YNc(3,Et,1,0,"visitor-listings",2),t.ALo(4,"async"),t.YNc(5,Pt,1,0,"guest-listings",2),t.ALo(6,"async"),t.YNc(7,Ft,1,0,"mat-progress-bar",3),t.ALo(8,"async"),t.qZA()),2&e){let o,s;t.xp6(3),t.Q6J("ngIf",!(null!=(o=t.lcZ(4,3,n.filters))&&o.show_guests)),t.xp6(2),t.Q6J("ngIf",null==(s=t.lcZ(6,5,n.filters))?null:s.show_guests),t.xp6(2),t.Q6J("ngIf",t.lcZ(8,7,n.loading))}},directives:[D.k,tt,m.O5,ft,Nt,Qt.pW],pipes:[m.Ov],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;background:var(--bg)}\n/*# sourceMappingURL=visitors.component.ts-angular-inline--55.css.map*/"]}),i})()}];let Dt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[m.ez,w.u5,E.v,y.Bz.forChild(Yt)]]}),i})()}}]);
//# sourceMappingURL=apps_concierge_src_app_visitors_visitors_module_ts.js.map