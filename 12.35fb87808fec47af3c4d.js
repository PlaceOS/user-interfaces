(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"2sop":function(e,t,n){"use strict";n.r(t),n.d(t,"VisitorsModule",(function(){return ie}));var i=n("EM62"),s=n("2kYt"),c=n("nIj0"),l=n("sEIs"),o=n("oRDy"),a=n("D57K"),r=n("20lr"),d=n("eZII"),u=n("zYp8"),h=n("9MvL"),v=n("JS2V"),g=n("KuCG"),m=n("C05f"),f=n("HM3f"),b=n("mWib"),p=n("TLy2"),_=n("YtkY"),w=n("wqq/");let O=(()=>{class e extends r.b{constructor(){super(),this._filters=new m.a({}),this._search=new m.a(""),this._loading=new m.a(!1),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this.events=Object(f.a)([this._filters]).pipe(Object(b.a)(500),Object(p.a)(e=>{this._loading.next(!0);const[t]=e,n=t.date?new Date(t.date):new Date,i=(t.show_week?Object(u.a)(n):Object(h.a)(n)).valueOf(),s=(t.show_week?Object(v.a)(n):Object(g.a)(n)).valueOf();return Object(d.d)({period_start:Math.floor(i/1e3),period_end:Math.floor(s/1e3),zone_ids:(t.zones||[]).join(",")})}),Object(_.a)(e=>(this._loading.next(!1),this._filters.getValue().all_bookings?e:e.filter(e=>e.has_visitors&&e.attendees.length>1))),Object(w.a)()),this.filtered_events=Object(f.a)([this._search,this.events]).pipe(Object(_.a)(e=>{const[t,n]=e,i=t.toLowerCase();return n.filter(e=>e.attendees.find(e=>e.name.toLowerCase().includes(i)||e.email.toLowerCase().includes(i)))}))}get search(){return this._search.getValue()}setFilters(e){this._filters.next(Object.assign(Object.assign({},this._filters.getValue()),e))}setSearchString(e){this._search.next(e)}startPolling(e=3e4){this.interval("poll",()=>this.setFilters(this._filters.getValue()),e)}stopPolling(){this.clearInterval("poll")}checkGuestIn(e,t){var n,i;return Object(a.a)(this,void 0,void 0,(function*(){const s=Object(d.b)(e.id,t.id,!0,{system_id:(null===(n=e.system)||void 0===n?void 0:n.id)||(null===(i=e.resources[0])||void 0===i?void 0:i.id)}).toPromise().catch(n=>{throw Object(r.m)(`Error checking in ${t.name} for ${e.organiser.name}'s meeting`),n});Object(r.o)(`Successfully checked in ${t.name} for ${e.organiser.name}'s meeting`);const c=Object(r.y)([s,...e.attendees],"email");return c.sort((e,t)=>e.organizer?-1:e.email.localeCompare(t.email)),new d.a(Object.assign(Object.assign({},e),{attendees:c}))}))}checkGuestOut(e,t){var n,i;return Object(a.a)(this,void 0,void 0,(function*(){const s=yield Object(d.b)(e.id,t.id,!1,{system_id:(null===(n=e.system)||void 0===n?void 0:n.id)||(null===(i=e.resources[0])||void 0===i?void 0:i.id)}).toPromise().catch(n=>{throw Object(r.m)(`Error checking out ${t.name} from ${e.organiser.name}'s meeting`),n});Object(r.o)(`Successfully checked out ${t.name} from ${e.organiser.name}'s meeting`);const c=Object(r.y)([s,...e.attendees],"email");return c.sort((e,t)=>e.organizer?-1:e.email.localeCompare(t.email)),new d.a(Object.assign(Object.assign({},e),{attendees:c}))}))}checkAllGuestsIn(e){return Object(a.a)(this,void 0,void 0,(function*(){const t=e.attendees.filter(e=>e.is_external&&!e.checked_in);if(t.length<=0)throw new Error("No Guests to checkin");const n=yield Promise.all(t.map(t=>{var n,i;return Object(d.b)(e.id,t.id,!0,{system_id:(null===(n=e.system)||void 0===n?void 0:n.id)||(null===(i=e.resources[0])||void 0===i?void 0:i.id)}).toPromise()})).catch(t=>{throw Object(r.m)(`Error checking in all guests for ${e.organiser.name}'s meeting`),t});Object(r.o)(`Successfully checked in all guests for ${e.organiser.name}'s meeting`);const i=Object(r.y)([...n,...e.attendees],"email");return i.sort((e,t)=>e.organizer?-1:e.email.localeCompare(t.email)),new d.a(Object.assign(Object.assign({},e),{attendees:i}))}))}checkAllGuestsOut(e){return Object(a.a)(this,void 0,void 0,(function*(){const t=e.attendees.filter(e=>e.is_external&&e.checked_in&&!e.organizer);if(t.length<=0)throw new Error("No Guests to checkout");const n=yield Promise.all(t.map(t=>{var n,i;return Object(d.b)(e.id,t.id,!1,{system_id:(null===(n=e.system)||void 0===n?void 0:n.id)||(null===(i=e.resources[0])||void 0===i?void 0:i.id)}).toPromise()})).catch(t=>{throw Object(r.m)(`Error checking out all guests from ${e.organiser.name}'s meeting`),t});Object(r.o)(`Successfully checked out all guests from ${e.organiser.name}'s meeting`);const i=Object(r.y)([...n,...e.attendees],"email");return i.sort((e,t)=>e.organizer?-1:e.email.localeCompare(t.email)),new d.a(Object.assign(Object.assign({},e),{attendees:i}))}))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.cc({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var y=n("UfDH"),k=n("jOdJ"),x=n("dJst"),j=n("29Wa"),C=n("R7+U"),M=n("k8N0"),U=n("wobF"),P=n("wrRZ"),I=n("mFH5");function H(e,t){if(1&e&&(i.mc(0,"mat-option",8),i.ad(1),i.lc()),2&e){const e=t.$implicit;i.Hc("value",e.id),i.Ub(1),i.cd(" ",e.display_name||e.name," ")}}let z=(()=>{class e extends r.b{constructor(e,t,n,i){super(),this._state=e,this._org=t,this._route=n,this._router=i,this.zones=[],this.levels=this._org.active_levels,this.filters=this._state.filters,this.setDate=e=>this._state.setFilters({date:e}),this.setFilters=e=>this._state.setFilters(e),this.setSearch=e=>this._state.setSearchString(e),this.updateZones=e=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:e.join(",")}}),this._state.setFilters({zones:e})}}ngOnInit(){return Object(a.a)(this,void 0,void 0,(function*(){yield this._org.initialised.pipe(Object(k.a)(e=>e)).toPromise(),this.subscription("route.query",this._route.queryParamMap.subscribe(e=>{if(e.has("zone_ids")){const t=e.get("zone_ids").split(",");if(t.length){const e=this._org.levelWithID(t);if(!e)return;this._org.building=this._org.buildings.find(t=>t.id===e.parent_id),this.zones=t}}})),this.subscription("levels",this._org.active_levels.subscribe(e=>{this.zones=this.zones.filter(t=>e.find(e=>e.id===t)),!this.zones.length&&e.length&&this.zones.push(e[0].id),this.updateZones(this.zones)})),this.setSearch("")}))}}return e.\u0275fac=function(t){return new(t||e)(i.gc(O),i.gc(x.c),i.gc(l.a),i.gc(l.d))},e.\u0275cmp=i.ac({type:e,selectors:[["visitors-topbar"]],features:[i.Rb],decls:15,vars:10,consts:[["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"m-2",3,"ngModel","ngModelChange"],[1,"text-xs"],[1,"flex-1","w-2"],[1,"mr-2",3,"modelChange"],[3,"dateChange"],[3,"value"]],template:function(e,t){if(1&e&&(i.mc(0,"mat-form-field",0),i.mc(1,"mat-select",1),i.xc("ngModelChange",(function(e){return t.zones=e}))("ngModelChange",(function(e){return t.updateZones(e)})),i.Yc(2,H,2,2,"mat-option",2),i.Cc(3,"async"),i.lc(),i.lc(),i.mc(4,"mat-slide-toggle",3),i.xc("ngModelChange",(function(e){return t.setFilters({all_bookings:e})})),i.Cc(5,"async"),i.mc(6,"div",4),i.ad(7,"All Bookings"),i.lc(),i.lc(),i.mc(8,"mat-slide-toggle",3),i.xc("ngModelChange",(function(e){return t.setFilters({show_week:e})})),i.Cc(9,"async"),i.mc(10,"div",4),i.ad(11,"Show Week"),i.lc(),i.lc(),i.hc(12,"div",5),i.mc(13,"searchbar",6),i.xc("modelChange",(function(e){return t.setSearch(e)})),i.lc(),i.mc(14,"date-options",7),i.xc("dateChange",(function(e){return t.setDate(e)})),i.lc()),2&e){let e=null,n=null;i.Ub(1),i.Hc("ngModel",t.zones),i.Ub(1),i.Hc("ngForOf",i.Dc(3,4,t.levels)),i.Ub(2),i.Hc("ngModel",null==(e=i.Dc(5,6,t.filters))?null:e.all_bookings),i.Ub(4),i.Hc("ngModel",null==(n=i.Dc(9,8,t.filters))?null:n.show_week)}},directives:[j.c,C.a,c.l,c.o,s.m,M.a,U.a,P.a,I.l],pipes:[s.b],styles:["[_nghost-%COMP%] {\n                display: flex;\n                align-items: center;\n                background-color: #fff;\n                height: 5em;\n                padding: 0 1em;\n                border-bottom: 1px solid #ccc;\n            }\n\n            [_nghost-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n                margin-left: 0.5rem;\n            }\n\n            mat-form-field[_ngcontent-%COMP%] {\n                height: 3.25em;\n                width: 8em;\n            }"]}),e})();var F=n("WKsi"),G=n("Y2X+"),Y=n("PBFl"),E=n("0/Ep"),T=n("mjT4");function D(e,t){1&e&&(i.mc(0,"i",14),i.ad(1,"face"),i.lc())}function S(e,t){if(1&e&&(i.kc(0),i.Yc(1,D,2,0,"i",13),i.jc()),2&e){const e=i.Bc(),t=i.Mc(3);i.Ub(1),i.Hc("ngIf",!(null!=e.visitor&&e.visitor.checked_in))("ngIfElse",t)}}function q(e,t){1&e&&(i.mc(0,"i",15),i.ad(1,"done"),i.lc())}function R(e,t){1&e&&(i.mc(0,"i",16),i.ad(1,"assignment_ind"),i.lc())}function $(e,t){if(1&e&&(i.mc(0,"div",17),i.mc(1,"h2"),i.ad(2),i.lc(),i.mc(3,"div"),i.mc(4,"span"),i.ad(5,"Host:"),i.lc(),i.ad(6),i.lc(),i.mc(7,"div"),i.mc(8,"span"),i.ad(9,"Purpose:"),i.lc(),i.ad(10),i.lc(),i.mc(11,"div"),i.mc(12,"span"),i.ad(13,"Location:"),i.lc(),i.ad(14),i.lc(),i.mc(15,"div"),i.mc(16,"span"),i.ad(17,"Issue Date:"),i.lc(),i.ad(18),i.Cc(19,"date"),i.lc(),i.mc(20,"div",18),i.hc(21,"img",19),i.lc(),i.lc()),2&e){const e=i.Bc();i.Ub(2),i.bd((null==e.visitor?null:e.visitor.name)||(null==e.visitor?null:e.visitor.email)),i.Ub(4),i.cd(" ",(null==e.event||null==e.event.organiser?null:e.event.organiser.name)||(null==e.event||null==e.event.organiser?null:e.event.organiser.name)||(null==e.event?null:e.event.creator)," "),i.Ub(4),i.cd(" ",null==e.event?null:e.event.title,""),i.Ub(4),i.cd(" ",(null==e.event?null:e.event.location)||"<Unspecified>"," "),i.Ub(4),i.cd(" ",i.Ec(19,6,e.today,"mediumDate"),""),i.Ub(3),i.Hc("src",(null==e.visitor||null==e.visitor.extension_data||null==e.visitor.extension_data.qr?null:e.visitor.extension_data.qr.code)||"",i.Rc)}}let A=(()=>{class e extends r.b{constructor(e,t){super(),this._state=e,this._settings=t,this.eventChange=new i.u,this.checkin=()=>Object(a.a)(this,void 0,void 0,(function*(){this.loading="checkin",this.event=yield this._state.checkGuestIn(this.event,this.visitor).catch(e=>this.event),this.eventChange.emit(this.event),this.loading=""})),this.toggleRemote=()=>Object(a.a)(this,void 0,void 0,(function*(){this.loading="remote";const e=this.event.remote.filter(e=>e!==this.visitor.email);this.remote||e.push(this.visitor.email);const t=new d.a(Object.assign(Object.assign({},this.event.toJSON()),{remote:e})).toJSON();this.event=yield Object(d.g)(t).toPromise().catch(e=>(Object(r.m)("Error setting visitor status. Error: "+(e.statusText||e.message||e)),this.event)),this.eventChange.emit(this.event),this.loading=""})),this.checkout=()=>Object(a.a)(this,void 0,void 0,(function*(){this.loading="checkout",this.event=yield this._state.checkGuestOut(this.event,this.visitor).catch(e=>this.event),this.eventChange.emit(this.event),this.loading=""})),this.printQRCode=()=>{this.show_qr_code=!0,this.timeout("print",()=>{window.print(),this.show_qr_code=!1},50)}}get can_print(){var e;return this._settings.get("app.can_print_qr")&&this.visitor.checked_in&&(null===(e=this.visitor)||void 0===e?void 0:e.extension_data.qr)}get today(){return 60*Math.floor((new Date).valueOf()/60/1e3)*1e3}get remote(){var e;return!!(null===(e=this.event)||void 0===e?void 0:e.remote.find(e=>{var t;return e===(null===(t=this.visitor)||void 0===t?void 0:t.email)}))}ngOnChanges(e){e.visitor&&this.loadGuest()}loadGuest(e=0){var t,n;return Object(a.a)(this,void 0,void 0,(function*(){if(this.visitor)if(this.loading="printing",this.visitor.checked_in){const i=yield Object(T.g)(this.visitor.email).toPromise().catch(e=>null);!(null===(n=null===(t=null==i?void 0:i.extension_data)||void 0===t?void 0:t.qr)||void 0===n?void 0:n.code)&&e<5?this.timeout("load_guest",()=>this.loadGuest(++e),1e3):this.loading=""}else this.loading=""}))}}return e.\u0275fac=function(t){return new(t||e)(i.gc(O),i.gc(r.e))},e.\u0275cmp=i.ac({type:e,selectors:[["visitor-details"]],inputs:{event:"event",visitor:"visitor"},outputs:{eventChange:"eventChange"},features:[i.Rb,i.Sb],decls:18,vars:21,consts:[[1,"w-12","text-lg","flex","justify-center"],[4,"ngIf","ngIfElse"],["checkin_state",""],["host_state",""],["flex","",1,"p-2","flex-1"],[1,"w-48","p-2","flex","items-center","justify-end"],[3,"matTooltip","loading","content","click"],["matTooltip","Checkin Guest","content","event_available",3,"loading","state","click"],["matTooltip","Checkout Guest","content","event_busy",3,"loading","click"],["mat-icon-button","",3,"href","matTooltip"],["matTooltip","Print QR Code","content","event_busy",3,"loading","click"],[1,"w-8","p-2"],["qr-code","","class","print-only fixed inset-0 flex flex-col justify-center bg-white space-y-2",4,"ngIf"],["class","p-2 rounded-full material-icons border-2 border-dotted border-gray-600",4,"ngIf","ngIfElse"],[1,"p-2","rounded-full","material-icons","border-2","border-dotted","border-gray-600"],[1,"p-2","rounded-full","material-icons","bg-green-600","border-2","border-green-600","text-white"],[1,"p-2","rounded-full","material-icons","bg-blue-600","border-2","border-blue-600","text-white"],["qr-code","",1,"print-only","fixed","inset-0","flex","flex-col","justify-center","bg-white","space-y-2"],[1,"flex","justify-center"],["alt","qr-code",3,"src"]],template:function(e,t){if(1&e&&(i.mc(0,"div",0),i.Yc(1,S,2,2,"ng-container",1),i.Yc(2,q,2,0,"ng-template",null,2,i.Zc),i.Yc(4,R,2,0,"ng-template",null,3,i.Zc),i.lc(),i.mc(6,"div",4),i.ad(7),i.lc(),i.mc(8,"div",5),i.mc(9,"action-icon",6),i.xc("click",(function(){return t.toggleRemote()})),i.lc(),i.mc(10,"action-icon",7),i.xc("click",(function(){return t.checkin()})),i.lc(),i.mc(11,"action-icon",8),i.xc("click",(function(){return t.checkout()})),i.lc(),i.mc(12,"a",9),i.mc(13,"app-icon"),i.ad(14,"email"),i.lc(),i.lc(),i.mc(15,"action-icon",10),i.xc("click",(function(){return t.printQRCode()})),i.lc(),i.lc(),i.hc(16,"div",11),i.Yc(17,$,22,9,"div",12)),2&e){const e=i.Mc(5);i.Ub(1),i.Hc("ngIf",!t.visitor.organizer)("ngIfElse",e),i.Ub(6),i.bd((null==t.visitor?null:t.visitor.name)||(null==t.visitor?null:t.visitor.email)),i.Ub(2),i.Yb("invisible",!(null!=t.visitor&&t.visitor.is_external)||(null==t.visitor?null:t.visitor.organizer)),i.Hc("matTooltip",t.remote?"Set as In-Person Visitor":"Set as Remote Visitior")("loading","remote"===t.loading)("content",t.remote?"tap_and_play":"business"),i.Ub(1),i.Yb("invisible",!(null!=t.visitor&&t.visitor.is_external)||(null==t.visitor?null:t.visitor.organizer)),i.Hc("loading","checkin"===t.loading)("state",null!=t.visitor&&t.visitor.checked_in?"success":""),i.Ub(1),i.Yb("invisible",!(null!=t.visitor&&t.visitor.is_external)||(null==t.visitor?null:t.visitor.organizer)),i.Hc("loading","checkout"===t.loading),i.Ub(1),i.Hc("href","mailto:"+(null==t.visitor?null:t.visitor.email),i.Rc)("matTooltip",null!=t.visitor&&t.visitor.organizer?"Email Host":"Email Guest"),i.Ub(3),i.Yb("invisible",!t.can_print),i.Hc("loading","printing"===t.loading),i.Ub(2),i.Hc("ngIf",t.show_qr_code)}},directives:[s.n,F.a,G.a,Y.a,E.a],pipes:[s.f],styles:["[_nghost-%COMP%] {\n                display: flex;\n                align-items: center;\n                width: 100%;\n                padding: 0 0.5rem;\n            }\n\n            [_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n                display: flex;\n                align-items: center;\n                height: 100%;\n                border-bottom: 1px solid #ccc;\n                height: 3.5rem;\n            }\n\n            [_nghost-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n                border: none;\n            }\n\n            .invisible[_ngcontent-%COMP%] {\n                opacity: 0;\n                pointer-events: none;\n            }"]}),e})();function B(e,t){1&e&&(i.mc(0,"i",16),i.ad(1,"event"),i.lc())}function L(e,t){1&e&&(i.mc(0,"i",16),i.ad(1,"close"),i.lc())}function V(e,t){1&e&&(i.mc(0,"i",16),i.ad(1,"done"),i.lc())}function Z(e,t){if(1&e){const e=i.nc();i.mc(0,"div",17),i.hc(1,"div",18),i.mc(2,"visitor-details",19),i.xc("eventChange",(function(t){return i.Pc(e),i.Bc().event=t})),i.lc(),i.lc()}if(2&e){const e=t.$implicit,n=i.Bc();i.Ub(2),i.Hc("visitor",e)("event",n.event),i.Vb("disabled",!n.matches[e.email])}}let J=(()=>{class e extends r.b{constructor(e){super(),this._state=e,this.matches={},this.filters=this._state.filters,this.checkinGuests=()=>Object(a.a)(this,void 0,void 0,(function*(){this.loading="checkin",this.event=yield this._state.checkAllGuestsIn(this.event).catch(e=>this.event),this.loading=""})),this.checkoutGuests=()=>Object(a.a)(this,void 0,void 0,(function*(){this.loading="checkout",this.event=yield this._state.checkAllGuestsOut(this.event).catch(e=>this.event),this.loading=""}))}get guestCount(){var e;return(null===(e=this.event)||void 0===e?void 0:e.attendees.reduce((e,t)=>e+(t.is_external&&!t.organizer?1:0),0))||0}get has_search(){return this._state.search}ngOnInit(){this.subscription("events",this._state.filtered_events.subscribe(()=>this.updateMatches()))}updateMatches(){this.matches={};const e=(this._state.search||"").toLowerCase();for(const t of this.event.attendees)this.matches[t.email]=!e||t.email.toLowerCase().includes(e)||t.name.toLowerCase().includes(e)}}return e.\u0275fac=function(t){return new(t||e)(i.gc(O))},e.\u0275cmp=i.ac({type:e,selectors:[["visitor-event"]],inputs:{event:"event"},features:[i.Rb],decls:28,vars:25,consts:[[1,"flex","items-center","px-2","bg-gray-100"],[1,"w-12","text-lg","flex","justify-center"],["class","p-2 rounded-full material-icons bg-gray-400",4,"ngIf"],[1,"w-24","p-2"],[1,"w-48","p-2"],["flex","",1,"p-2","flex-1"],[1,"w-64","p-2","truncate"],[1,"w-32","p-2","flex","items-center","justify-end"],["matTooltip","Checkin All Guests","content","event_available",3,"loading","disabled","click"],["matTooltip","Checkout All Guests","content","event_busy",3,"loading","disabled","click"],["mat-icon-button","","matTooltip","Email Host",3,"href"],[1,"w-16","p-2"],["mat-icon-button","",3,"disabled","matTooltip","click"],["attendees","",1,"w-full","overflow-hidden","relative","border-b","border-gray-300"],["bar","",1,"absolute","top-0","bg-gray-400","z-10"],["visitor","","class","relative w-full pl-12 bg-gray-200",4,"ngFor","ngForOf"],[1,"p-2","rounded-full","material-icons","bg-gray-400"],["visitor","",1,"relative","w-full","pl-12","bg-gray-200"],["l-bar","",1,"absolute","bg-gray-400"],[3,"visitor","event","eventChange"]],template:function(e,t){if(1&e&&(i.mc(0,"div",0),i.mc(1,"div",1),i.Yc(2,B,2,0,"i",2),i.Yc(3,L,2,0,"i",2),i.Yc(4,V,2,0,"i",2),i.lc(),i.mc(5,"div",3),i.ad(6),i.Cc(7,"date"),i.Cc(8,"async"),i.lc(),i.mc(9,"div",4),i.ad(10),i.lc(),i.mc(11,"div",5),i.ad(12),i.lc(),i.mc(13,"div",6),i.ad(14),i.lc(),i.mc(15,"div",7),i.mc(16,"action-icon",8),i.xc("click",(function(){return t.checkinGuests()})),i.lc(),i.mc(17,"action-icon",9),i.xc("click",(function(){return t.checkoutGuests()})),i.lc(),i.mc(18,"a",10),i.mc(19,"app-icon"),i.ad(20,"email"),i.lc(),i.lc(),i.lc(),i.mc(21,"div",11),i.mc(22,"button",12),i.xc("click",(function(){return t.show_attendees=!t.show_attendees})),i.mc(23,"app-icon"),i.ad(24),i.lc(),i.lc(),i.lc(),i.lc(),i.mc(25,"div",13),i.hc(26,"div",14),i.Yc(27,Z,3,3,"div",15),i.lc()),2&e){let e=null;i.Ub(2),i.Hc("ngIf","cancelled"!==(null==t.event?null:t.event.status)&&"done"!==(null==t.event?null:t.event.state)),i.Ub(1),i.Hc("ngIf","cancelled"===(null==t.event?null:t.event.status)),i.Ub(1),i.Hc("ngIf","done"===(null==t.event?null:t.event.state)&&"cancelled"!==(null==t.event?null:t.event.status)),i.Ub(2),i.bd(i.Ec(7,20,null==t.event?null:t.event.date,null!=(e=i.Dc(8,23,t.filters))&&e.show_week?"MMM d, h:mm a":"shortTime")),i.Ub(4),i.cd(" ",(null==t.event||null==t.event.organiser?null:t.event.organiser.name)||(null==t.event||null==t.event.organiser?null:t.event.organiser.email)," "),i.Ub(2),i.bd(null==t.event?null:t.event.title),i.Ub(2),i.bd(null==t.event?null:t.event.location),i.Ub(2),i.Hc("loading","checkin"===t.loading)("disabled",t.guestCount<=0),i.Ub(1),i.Hc("loading","checkout"===t.loading)("disabled",t.guestCount<=0),i.Ub(1),i.Hc("href","mailto:"+(null==t.event||null==t.event.organiser?null:t.event.organiser.email),i.Rc),i.Ub(4),i.Hc("disabled",!(null!=t.event&&null!=t.event.attendees&&t.event.attendees.length))("matTooltip",t.show_attendees||t.has_search?"Hide Attendees":"Show Attendees"),i.Ub(2),i.bd(t.show_attendees?"keyboard_arrow_down":"keyboard_arrow_right"),i.Ub(1),i.Vc("height",t.show_attendees||t.has_search?3.5*t.event.attendees.length+"rem":"0rem"),i.Ub(1),i.Vc("height","calc("+(3.5*(t.event.attendees.length-1)+1.75)+"rem + 1px)"),i.Ub(1),i.Hc("ngForOf",t.event.attendees)}},directives:[s.n,F.a,G.a,Y.a,E.a,Y.b,s.m,A],pipes:[s.f,s.b],styles:['[_nghost-%COMP%] {\n                width: 100%;\n            }\n\n            visitor-details[_ngcontent-%COMP%] {\n                transition: opacity 200ms;\n            }\n\n            [attendees][_ngcontent-%COMP%] {\n                transition: height 200ms;\n            }\n\n            [visitor][_ngcontent-%COMP%] {\n                height: 3.5rem;\n            }\n\n            [bar][_ngcontent-%COMP%] {\n                width: 2px;\n                left: calc(2rem - 1px);\n            }\n\n            [l-bar][_ngcontent-%COMP%] {\n                height: 2px;\n                left: 2rem;\n                top: calc(50% - 1px);\n                width: 1rem;\n            }\n\n            [disabled="true"][_ngcontent-%COMP%] {\n                opacity: 0.35;\n            }']}),e})();function N(e,t){1&e&&i.hc(0,"visitor-event",13),2&e&&i.Hc("event",t.$implicit)}function W(e,t){if(1&e&&(i.kc(0),i.Yc(1,N,1,1,"visitor-event",12),i.Cc(2,"async"),i.jc()),2&e){const e=i.Bc();i.Ub(1),i.Hc("ngForOf",i.Dc(2,2,e.bookings))("ngForTrackBy",e.trackByFn)}}function K(e,t){1&e&&(i.mc(0,"div",14),i.mc(1,"p",15),i.ad(2," There are no visitors for the currently selected date. "),i.lc(),i.lc())}let Q=(()=>{class e{constructor(e){this._state=e,this.bookings=this._state.filtered_events}trackByFn(e,t){return t?t.id:void 0}}return e.\u0275fac=function(t){return new(t||e)(i.gc(O))},e.\u0275cmp=i.ac({type:e,selectors:[["visitor-listings"]],decls:19,vars:4,consts:[[1,"w-full","flex-1","text-sm"],[1,"w-full","flex","items-center","bg-white","border-b","border-gray-500","p-2","font-medium"],[1,"w-12","p-2"],[1,"w-24","p-2"],[1,"w-48","p-2"],["flex","",1,"p-2","flex-1"],[1,"w-64","p-2"],[1,"w-32","p-2"],[1,"w-16","p-2"],[1,"w-full","flex-1","overflow-auto"],[4,"ngIf","ngIfElse"],["empty_state",""],[3,"event",4,"ngFor","ngForOf","ngForTrackBy"],[3,"event"],[1,"h-full","w-full","flex","items-center","justify-center"],[1,"p-8"]],template:function(e,t){if(1&e&&(i.mc(0,"div",0),i.mc(1,"div",1),i.hc(2,"div",2),i.mc(3,"div",3),i.ad(4,"Time"),i.lc(),i.mc(5,"div",4),i.ad(6,"Host"),i.lc(),i.mc(7,"div",5),i.ad(8,"Title"),i.lc(),i.mc(9,"div",6),i.ad(10,"Location"),i.lc(),i.mc(11,"div",7),i.ad(12,"Actions"),i.lc(),i.hc(13,"div",8),i.lc(),i.mc(14,"div",9),i.Yc(15,W,3,4,"ng-container",10),i.Cc(16,"async"),i.lc(),i.lc(),i.Yc(17,K,3,0,"ng-template",null,11,i.Zc)),2&e){const e=i.Mc(18);let n=null;i.Ub(15),i.Hc("ngIf",null==(n=i.Dc(16,2,t.bookings))?null:n.length)("ngIfElse",e)}},directives:[s.n,s.m,J],pipes:[s.b],styles:[""]}),e})();var X=n("66mq");const ee=["app-visitors",""];function te(e,t){1&e&&i.hc(0,"mat-progress-bar",4)}const ne=[{path:"",component:(()=>{class e{constructor(e){this._state=e,this.loading=this._state.loading}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}}return e.\u0275fac=function(t){return new(t||e)(i.gc(O))},e.\u0275cmp=i.ac({type:e,selectors:[["","app-visitors",""]],attrs:ee,decls:6,vars:3,consts:[[1,"relative","overflow-hidden","flex-1","flex","flex-col"],[1,"w-full"],[1,"w-full","flex-1","h-0"],["class","w-full","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"w-full"]],template:function(e,t){1&e&&(i.hc(0,"sidebar"),i.mc(1,"main",0),i.hc(2,"visitors-topbar",1),i.hc(3,"visitor-listings",2),i.Yc(4,te,1,0,"mat-progress-bar",3),i.Cc(5,"async"),i.lc()),2&e&&(i.Ub(4),i.Hc("ngIf",i.Dc(5,1,t.loading)))},directives:[y.a,z,Q,s.n,X.a],pipes:[s.b],styles:["[_nghost-%COMP%] {\n                display: flex;\n                height: 100%;\n                width: 100%;\n                background: var(--bg);\n            }"]}),e})()}];let ie=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.ec({type:e}),e.\u0275inj=i.dc({imports:[[s.c,c.h,o.a,l.g.forChild(ne)]]}),e})()}}]);