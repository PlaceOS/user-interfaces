(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{BvlG:function(e,t,n){"use strict";n.r(t),n.d(t,"VisitorsModule",function(){return oe});var i=n("SVse"),s=n("s7LF"),o=n("iInd"),l=n("URK9"),c=n("8Y7J"),r=n("mrSG"),a=n("2Vo4"),d=n("itXk"),u=n("Kj3r"),b=n("eIep"),h=n("lJxs"),v=n("UXun"),g=n("aetl"),f=n("M34a"),m=n("L8hi"),p=n("piIK"),_=n("odh7"),w=n("grfs"),O=n("D01k");let y=(()=>{class e extends w.b{constructor(){super(),this._poll=new a.a(0),this._filters=new a.a({}),this._search=new a.a(""),this._loading=new a.a(!1),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this.events=Object(d.a)([this._filters,this._poll]).pipe(Object(u.a)(500),Object(b.a)(([e])=>{this._loading.next(!0);const t=e.date?new Date(e.date):new Date,n=e.show_week?Object(g.a)(t):Object(f.a)(t),i=e.show_week?Object(m.a)(t):Object(p.a)(t);return Object(O.d)({period_start:Object(_.a)(n),period_end:Object(_.a)(i),zone_ids:(e.zones||[]).join(",")})}),Object(h.a)(e=>(this._loading.next(!1),this._filters.getValue().all_bookings?e:e.filter(e=>e.guests.length&&e.attendees.length>1))),Object(v.a)(1)),this.filtered_events=Object(d.a)([this._search,this.events]).pipe(Object(h.a)(e=>{const[t,n]=e,i=t.toLowerCase();return n.filter(e=>e.attendees.find(e=>e.name.toLowerCase().includes(i)||e.email.toLowerCase().includes(i)))}))}get search(){return this._search.getValue()}setFilters(e){this._filters.next(Object.assign(Object.assign({},this._filters.getValue()),e))}setSearchString(e){this._search.next(e)}startPolling(e=3e4){this.interval("poll",()=>this._poll.next((new Date).valueOf()),e)}stopPolling(){this.clearInterval("poll")}checkGuestIn(e,t){var n,i;return Object(r.a)(this,void 0,void 0,function*(){const s=Object(O.b)(e.id,t.id,!0,{system_id:(null===(n=e.system)||void 0===n?void 0:n.id)||(null===(i=e.resources[0])||void 0===i?void 0:i.id)}).toPromise().catch(n=>{throw Object(w.l)(`Error checking in ${t.name} for ${e.organiser.name}'s meeting`),n});Object(w.n)(`Successfully checked in ${t.name} for ${e.organiser.name}'s meeting`);const o=Object(w.y)([s,...e.attendees],"email");return o.sort((e,t)=>e.organizer?-1:e.email.localeCompare(t.email)),new O.a(Object.assign(Object.assign({},e),{attendees:o}))})}checkGuestOut(e,t){var n,i;return Object(r.a)(this,void 0,void 0,function*(){const s=yield Object(O.b)(e.id,t.id,!1,{system_id:(null===(n=e.system)||void 0===n?void 0:n.id)||(null===(i=e.resources[0])||void 0===i?void 0:i.id)}).toPromise().catch(n=>{throw Object(w.l)(`Error checking out ${t.name} from ${e.organiser.name}'s meeting`),n});Object(w.n)(`Successfully checked out ${t.name} from ${e.organiser.name}'s meeting`);const o=Object(w.y)([s,...e.attendees],"email");return o.sort((e,t)=>e.organizer?-1:e.email.localeCompare(t.email)),new O.a(Object.assign(Object.assign({},e),{attendees:o}))})}checkAllGuestsIn(e){return Object(r.a)(this,void 0,void 0,function*(){const t=e.attendees.filter(e=>e.is_external&&!e.checked_in);if(t.length<=0)throw new Error("No Guests to checkin");const n=yield Promise.all(t.map(t=>{var n,i;return Object(O.b)(e.id,t.id,!0,{system_id:(null===(n=e.system)||void 0===n?void 0:n.id)||(null===(i=e.resources[0])||void 0===i?void 0:i.id)}).toPromise()})).catch(t=>{throw Object(w.l)(`Error checking in all guests for ${e.organiser.name}'s meeting`),t});Object(w.n)(`Successfully checked in all guests for ${e.organiser.name}'s meeting`);const i=Object(w.y)([...n,...e.attendees],"email");return i.sort((e,t)=>e.organizer?-1:e.email.localeCompare(t.email)),new O.a(Object.assign(Object.assign({},e),{attendees:i}))})}checkAllGuestsOut(e){return Object(r.a)(this,void 0,void 0,function*(){const t=e.attendees.filter(e=>e.is_external&&e.checked_in&&!e.organizer);if(t.length<=0)throw new Error("No Guests to checkout");const n=yield Promise.all(t.map(t=>{var n,i;return Object(O.b)(e.id,t.id,!1,{system_id:(null===(n=e.system)||void 0===n?void 0:n.id)||(null===(i=e.resources[0])||void 0===i?void 0:i.id)}).toPromise()})).catch(t=>{throw Object(w.l)(`Error checking out all guests from ${e.organiser.name}'s meeting`),t});Object(w.n)(`Successfully checked out all guests from ${e.organiser.name}'s meeting`);const i=Object(w.y)([...n,...e.attendees],"email");return i.sort((e,t)=>e.organizer?-1:e.email.localeCompare(t.email)),new O.a(Object.assign(Object.assign({},e),{attendees:i}))})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=c.Nb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var k=n("ORrl"),x=n("SxV6"),j=n("InVF"),X=n("Q2Ze"),W=n("ZTz/"),C=n("jMqV"),F=n("yJcF"),P=n("jfXU"),M=n("UhP/");function I(e,t){if(1&e&&(c.Xb(0,"mat-option",8),c.Nc(1),c.Wb()),2&e){const e=t.$implicit;c.tc("value",e.id),c.Fb(1),c.Pc(" ",e.display_name||e.name," ")}}let N=(()=>{class e extends w.b{constructor(e,t,n,i){super(),this._state=e,this._org=t,this._route=n,this._router=i,this.zones=[],this.levels=this._org.active_levels,this.filters=this._state.filters,this.setDate=e=>this._state.setFilters({date:e}),this.setFilters=e=>this._state.setFilters(e),this.setSearch=e=>this._state.setSearchString(e),this.updateZones=e=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:e.join(",")}}),this._state.setFilters({zones:e})}}ngOnInit(){return Object(r.a)(this,void 0,void 0,function*(){yield this._org.initialised.pipe(Object(x.a)(e=>e)).toPromise(),this.subscription("route.query",this._route.queryParamMap.subscribe(e=>{if(e.has("zone_ids")){const t=e.get("zone_ids").split(",");if(t.length){const e=this._org.levelWithID(t);if(!e)return;this._org.building=this._org.buildings.find(t=>t.id===e.parent_id),this.zones=t}}})),this.subscription("levels",this._org.active_levels.subscribe(e=>{this.zones=this.zones.filter(t=>e.find(e=>e.id===t)),!this.zones.length&&e.length&&this.zones.push(e[0].id),this.updateZones(this.zones)})),this.setSearch("")})}}return e.\u0275fac=function(t){return new(t||e)(c.Rb(y),c.Rb(j.c),c.Rb(o.a),c.Rb(o.d))},e.\u0275cmp=c.Lb({type:e,selectors:[["visitors-topbar"]],features:[c.Cb],decls:15,vars:10,consts:[["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"m-2",3,"ngModel","ngModelChange"],[1,"text-xs"],[1,"flex-1","w-2"],[1,"mr-2",3,"modelChange"],[3,"dateChange"],[3,"value"]],template:function(e,t){if(1&e&&(c.Xb(0,"mat-form-field",0),c.Xb(1,"mat-select",1),c.ic("ngModelChange",function(e){return t.zones=e})("ngModelChange",function(e){return t.updateZones(e)}),c.Lc(2,I,2,2,"mat-option",2),c.nc(3,"async"),c.Wb(),c.Wb(),c.Xb(4,"mat-slide-toggle",3),c.ic("ngModelChange",function(e){return t.setFilters({all_bookings:e})}),c.nc(5,"async"),c.Xb(6,"div",4),c.Nc(7,"All Bookings"),c.Wb(),c.Wb(),c.Xb(8,"mat-slide-toggle",3),c.ic("ngModelChange",function(e){return t.setFilters({show_week:e})}),c.nc(9,"async"),c.Xb(10,"div",4),c.Nc(11,"Show Week"),c.Wb(),c.Wb(),c.Sb(12,"div",5),c.Xb(13,"searchbar",6),c.ic("modelChange",function(e){return t.setSearch(e)}),c.Wb(),c.Xb(14,"date-options",7),c.ic("dateChange",function(e){return t.setDate(e)}),c.Wb()),2&e){let e=null,n=null;c.Fb(1),c.tc("ngModel",t.zones),c.Fb(1),c.tc("ngForOf",c.oc(3,4,t.levels)),c.Fb(2),c.tc("ngModel",null==(e=c.oc(5,6,t.filters))?null:e.all_bookings),c.Fb(4),c.tc("ngModel",null==(n=c.oc(9,8,t.filters))?null:n.show_week)}},directives:[X.c,W.a,s.l,s.o,i.m,C.a,F.a,P.a,M.l],pipes:[i.b],styles:["[_nghost-%COMP%] {\n                display: flex;\n                align-items: center;\n                background-color: #fff;\n                height: 5em;\n                padding: 0 1em;\n                border-bottom: 1px solid #ccc;\n            }\n\n            [_nghost-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n                margin-left: 0.5rem;\n            }\n\n            mat-form-field[_ngcontent-%COMP%] {\n                height: 3.25em;\n                width: 8em;\n            }"]}),e})();var S=n("VCaO"),L=n("ZFy/"),z=n("Dxy4"),G=n("z03u"),T=n("qdGH");function E(e,t){1&e&&(c.Xb(0,"i",14),c.Nc(1,"face"),c.Wb())}function R(e,t){if(1&e&&(c.Vb(0),c.Lc(1,E,2,0,"i",13),c.Ub()),2&e){const e=c.mc(),t=c.yc(3);c.Fb(1),c.tc("ngIf",!(null!=e.visitor&&e.visitor.checked_in))("ngIfElse",t)}}function q(e,t){1&e&&(c.Xb(0,"i",15),c.Nc(1,"done"),c.Wb())}function $(e,t){1&e&&(c.Xb(0,"i",16),c.Nc(1,"assignment_ind"),c.Wb())}function V(e,t){if(1&e&&(c.Xb(0,"div",17),c.Xb(1,"h2"),c.Nc(2),c.Wb(),c.Xb(3,"div"),c.Xb(4,"span"),c.Nc(5,"Host:"),c.Wb(),c.Nc(6),c.Wb(),c.Xb(7,"div"),c.Xb(8,"span"),c.Nc(9,"Purpose:"),c.Wb(),c.Nc(10),c.Wb(),c.Xb(11,"div"),c.Xb(12,"span"),c.Nc(13,"Location:"),c.Wb(),c.Nc(14),c.Wb(),c.Xb(15,"div"),c.Xb(16,"span"),c.Nc(17,"Issue Date:"),c.Wb(),c.Nc(18),c.nc(19,"date"),c.Wb(),c.Xb(20,"div",18),c.Sb(21,"img",19),c.Wb(),c.Wb()),2&e){const e=c.mc();c.Fb(2),c.Oc((null==e.visitor?null:e.visitor.name)||(null==e.visitor?null:e.visitor.email)),c.Fb(4),c.Pc(" ",(null==e.event||null==e.event.organiser?null:e.event.organiser.name)||(null==e.event||null==e.event.organiser?null:e.event.organiser.name)||(null==e.event?null:e.event.creator)," "),c.Fb(4),c.Pc(" ",null==e.event?null:e.event.title,""),c.Fb(4),c.Pc(" ",(null==e.event?null:e.event.location)||"<Unspecified>"," "),c.Fb(4),c.Pc(" ",c.pc(19,6,e.today,"mediumDate"),""),c.Fb(3),c.tc("src",(null==e.visitor||null==e.visitor.extension_data||null==e.visitor.extension_data.qr?null:e.visitor.extension_data.qr.code)||"",c.Ec)}}let D=(()=>{class e extends w.b{constructor(e,t){super(),this._state=e,this._settings=t,this.eventChange=new c.p,this.checkin=()=>Object(r.a)(this,void 0,void 0,function*(){this.loading="checkin",this.event=yield this._state.checkGuestIn(this.event,this.visitor).catch(e=>this.event),this.eventChange.emit(this.event),this.loading=""}),this.toggleRemote=()=>Object(r.a)(this,void 0,void 0,function*(){var e;this.loading="remote";const t=null===(e=this.event.ext("remote"))||void 0===e?void 0:e.filter(e=>e!==this.visitor.email);this.remote||t.push(this.visitor.email);const n=new O.a(Object.assign(Object.assign({},this.event.toJSON()),{remote:t})).toJSON();this.event=yield Object(O.g)(n).toPromise().catch(e=>(Object(w.l)(`Error setting visitor status. Error: ${e.statusText||e.message||e}`),this.event)),this.eventChange.emit(this.event),this.loading=""}),this.checkout=()=>Object(r.a)(this,void 0,void 0,function*(){this.loading="checkout",this.event=yield this._state.checkGuestOut(this.event,this.visitor).catch(e=>this.event),this.eventChange.emit(this.event),this.loading=""}),this.printQRCode=()=>{this.show_qr_code=!0,this.timeout("print",()=>{window.print(),this.show_qr_code=!1},50)}}get can_print(){var e;return this._settings.get("app.can_print_qr")&&this.visitor.checked_in&&(null===(e=this.visitor)||void 0===e?void 0:e.extension_data.qr)}get today(){return Date.now()}get remote(){var e,t;return!!(null===(t=null===(e=this.event)||void 0===e?void 0:e.ext("remote"))||void 0===t?void 0:t.find(e=>{var t;return e===(null===(t=this.visitor)||void 0===t?void 0:t.email)}))}ngOnChanges(e){e.visitor&&this.loadGuest()}loadGuest(e=0){var t,n;return Object(r.a)(this,void 0,void 0,function*(){if(this.visitor)if(this.loading="printing",this.visitor.checked_in){const i=yield Object(T.h)(this.visitor.email).toPromise().catch(e=>null);!(null===(n=null===(t=null==i?void 0:i.extension_data)||void 0===t?void 0:t.qr)||void 0===n?void 0:n.code)&&e<5?this.timeout("load_guest",()=>this.loadGuest(++e),1e3):this.loading=""}else this.loading=""})}}return e.\u0275fac=function(t){return new(t||e)(c.Rb(y),c.Rb(w.d))},e.\u0275cmp=c.Lb({type:e,selectors:[["visitor-details"]],inputs:{event:"event",visitor:"visitor"},outputs:{eventChange:"eventChange"},features:[c.Cb,c.Db],decls:18,vars:21,consts:[[1,"w-12","text-lg","flex","justify-center"],[4,"ngIf","ngIfElse"],["checkin_state",""],["host_state",""],["flex","",1,"p-2","flex-1"],[1,"w-48","py-2","flex","items-center","justify-end"],[3,"matTooltip","loading","content","click"],["matTooltip","Checkin Guest","content","event_available",3,"loading","state","click"],["matTooltip","Checkout Guest","content","event_busy",3,"loading","click"],["mat-icon-button","",3,"href","matTooltip"],["matTooltip","Print QR Code","content","event_busy",3,"loading","click"],[1,"w-14","p-2"],["qr-code","","class","print-only fixed inset-0 flex flex-col justify-center bg-white space-y-2",4,"ngIf"],["class","p-2 rounded-full material-icons border-2 border-dotted border-gray-600",4,"ngIf","ngIfElse"],[1,"p-2","rounded-full","material-icons","border-2","border-dotted","border-gray-600"],[1,"p-2","rounded-full","material-icons","bg-green-600","border-2","border-green-600","text-white"],[1,"p-2","rounded-full","material-icons","bg-blue-600","border-2","border-blue-600","text-white"],["qr-code","",1,"print-only","fixed","inset-0","flex","flex-col","justify-center","bg-white","space-y-2"],[1,"flex","justify-center"],["alt","qr-code",3,"src"]],template:function(e,t){if(1&e&&(c.Xb(0,"div",0),c.Lc(1,R,2,2,"ng-container",1),c.Lc(2,q,2,0,"ng-template",null,2,c.Mc),c.Lc(4,$,2,0,"ng-template",null,3,c.Mc),c.Wb(),c.Xb(6,"div",4),c.Nc(7),c.Wb(),c.Xb(8,"div",5),c.Xb(9,"action-icon",6),c.ic("click",function(){return t.toggleRemote()}),c.Wb(),c.Xb(10,"action-icon",7),c.ic("click",function(){return t.checkin()}),c.Wb(),c.Xb(11,"action-icon",8),c.ic("click",function(){return t.checkout()}),c.Wb(),c.Xb(12,"a",9),c.Xb(13,"app-icon"),c.Nc(14,"email"),c.Wb(),c.Wb(),c.Xb(15,"action-icon",10),c.ic("click",function(){return t.printQRCode()}),c.Wb(),c.Wb(),c.Sb(16,"div",11),c.Lc(17,V,22,9,"div",12)),2&e){const e=c.yc(5);c.Fb(1),c.tc("ngIf",!t.visitor.organizer)("ngIfElse",e),c.Fb(6),c.Oc((null==t.visitor?null:t.visitor.name)||(null==t.visitor?null:t.visitor.email)),c.Fb(2),c.Jb("invisible",!(null!=t.visitor&&t.visitor.is_external)||(null==t.visitor?null:t.visitor.organizer)),c.tc("matTooltip",t.remote?"Set as In-Person Visitor":"Set as Remote Visitior")("loading","remote"===t.loading)("content",t.remote?"tap_and_play":"business"),c.Fb(1),c.Jb("invisible",!(null!=t.visitor&&t.visitor.is_external)||(null==t.visitor?null:t.visitor.organizer)),c.tc("loading","checkin"===t.loading)("state",null!=t.visitor&&t.visitor.checked_in?"success":""),c.Fb(1),c.Jb("invisible",!(null!=t.visitor&&t.visitor.is_external)||(null==t.visitor?null:t.visitor.organizer)),c.tc("loading","checkout"===t.loading),c.Fb(1),c.tc("href","mailto:"+(null==t.visitor?null:t.visitor.email),c.Ec)("matTooltip",null!=t.visitor&&t.visitor.organizer?"Email Host":"Email Guest"),c.Fb(3),c.Jb("invisible",!t.can_print),c.tc("loading","printing"===t.loading),c.Fb(2),c.tc("ngIf",t.show_qr_code)}},directives:[i.n,S.a,L.a,z.a,G.a],pipes:[i.f],styles:["[_nghost-%COMP%] {\n                display: flex;\n                align-items: center;\n                width: 100%;\n                padding: 0 0.5rem;\n            }\n\n            [_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n                display: flex;\n                align-items: center;\n                height: 100%;\n                border-bottom: 1px solid #ccc;\n                height: 3.5rem;\n            }\n\n            [_nghost-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n                border: none;\n            }\n\n            .invisible[_ngcontent-%COMP%] {\n                opacity: 0;\n                pointer-events: none;\n            }"]}),e})();function A(e,t){1&e&&(c.Xb(0,"i",16),c.Nc(1,"event"),c.Wb())}function J(e,t){1&e&&(c.Xb(0,"i",16),c.Nc(1,"close"),c.Wb())}function U(e,t){1&e&&(c.Xb(0,"i",16),c.Nc(1,"done"),c.Wb())}function B(e,t){if(1&e){const e=c.Yb();c.Xb(0,"div",18),c.Sb(1,"div",19),c.Xb(2,"visitor-details",20),c.ic("eventChange",function(t){return c.Cc(e),c.mc(2).event=t}),c.Wb(),c.Wb()}if(2&e){const e=t.$implicit,n=c.mc(2);c.Fb(2),c.tc("visitor",e)("event",n.event),c.Gb("disabled",!n.matches[e.email])}}function H(e,t){if(1&e&&(c.Vb(0),c.Lc(1,B,3,3,"div",17),c.Ub()),2&e){const e=c.mc();c.Fb(1),c.tc("ngForOf",e.event.attendees)}}let Z=(()=>{class e extends w.b{constructor(e){super(),this._state=e,this.matches={},this.filters=this._state.filters,this.checkinGuests=()=>Object(r.a)(this,void 0,void 0,function*(){this.loading="checkin",this.event=yield this._state.checkAllGuestsIn(this.event).catch(e=>this.event),this.loading=""}),this.checkoutGuests=()=>Object(r.a)(this,void 0,void 0,function*(){this.loading="checkout",this.event=yield this._state.checkAllGuestsOut(this.event).catch(e=>this.event),this.loading=""})}get guestCount(){var e;return(null===(e=this.event)||void 0===e?void 0:e.attendees.reduce((e,t)=>e+(t.is_external&&!t.organizer?1:0),0))||0}get has_search(){return this._state.search}ngOnInit(){this.subscription("events",this._state.filtered_events.subscribe(()=>this.updateMatches()))}updateMatches(){this.matches={};const e=(this._state.search||"").toLowerCase();for(const t of this.event.attendees)this.matches[t.email]=!e||t.email.toLowerCase().includes(e)||t.name.toLowerCase().includes(e)}}return e.\u0275fac=function(t){return new(t||e)(c.Rb(y))},e.\u0275cmp=c.Lb({type:e,selectors:[["visitor-event"]],inputs:{event:"event"},features:[c.Cb],decls:28,vars:25,consts:[[1,"flex","items-center","px-2","bg-gray-100"],[1,"w-12","text-lg","flex","justify-center"],["class","p-2 rounded-full material-icons bg-gray-400",4,"ngIf"],[1,"w-24","p-2"],[1,"w-48","p-2"],["flex","",1,"p-2","flex-1"],[1,"w-64","p-2","truncate"],[1,"w-32","py-2","flex","items-center"],["matTooltip","Checkin All Guests","content","event_available",3,"loading","disabled","click"],["matTooltip","Checkout All Guests","content","event_busy",3,"loading","disabled","click"],["mat-icon-button","","matTooltip","Email Host",3,"href"],[1,"w-16","p-2"],["mat-icon-button","",3,"disabled","matTooltip","click"],["attendees","",1,"w-full","overflow-hidden","relative","border-b","border-gray-300"],["bar","",1,"absolute","top-0","bg-gray-400","z-10"],[4,"ngIf"],[1,"p-2","rounded-full","material-icons","bg-gray-400"],["visitor","","class","relative w-full pl-12 bg-gray-200",4,"ngFor","ngForOf"],["visitor","",1,"relative","w-full","pl-12","bg-gray-200"],["l-bar","",1,"absolute","bg-gray-400"],[3,"visitor","event","eventChange"]],template:function(e,t){if(1&e&&(c.Xb(0,"div",0),c.Xb(1,"div",1),c.Lc(2,A,2,0,"i",2),c.Lc(3,J,2,0,"i",2),c.Lc(4,U,2,0,"i",2),c.Wb(),c.Xb(5,"div",3),c.Nc(6),c.nc(7,"date"),c.nc(8,"async"),c.Wb(),c.Xb(9,"div",4),c.Nc(10),c.Wb(),c.Xb(11,"div",5),c.Nc(12),c.Wb(),c.Xb(13,"div",6),c.Nc(14),c.Wb(),c.Xb(15,"div",7),c.Xb(16,"action-icon",8),c.ic("click",function(){return t.checkinGuests()}),c.Wb(),c.Xb(17,"action-icon",9),c.ic("click",function(){return t.checkoutGuests()}),c.Wb(),c.Xb(18,"a",10),c.Xb(19,"app-icon"),c.Nc(20,"email"),c.Wb(),c.Wb(),c.Wb(),c.Xb(21,"div",11),c.Xb(22,"button",12),c.ic("click",function(){return t.show_attendees=!t.show_attendees}),c.Xb(23,"app-icon"),c.Nc(24),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Xb(25,"div",13),c.Sb(26,"div",14),c.Lc(27,H,2,1,"ng-container",15),c.Wb()),2&e){let e=null;c.Fb(2),c.tc("ngIf","cancelled"!==(null==t.event?null:t.event.status)&&"done"!==(null==t.event?null:t.event.state)),c.Fb(1),c.tc("ngIf","cancelled"===(null==t.event?null:t.event.status)),c.Fb(1),c.tc("ngIf","done"===(null==t.event?null:t.event.state)&&"cancelled"!==(null==t.event?null:t.event.status)),c.Fb(2),c.Pc(" ",c.pc(7,20,null==t.event?null:t.event.date,null!=(e=c.oc(8,23,t.filters))&&e.show_week?"MMM d, h:mm a":"shortTime")," "),c.Fb(4),c.Pc(" ",(null==t.event||null==t.event.organiser?null:t.event.organiser.name)||(null==t.event||null==t.event.organiser?null:t.event.organiser.email)," "),c.Fb(2),c.Oc(null==t.event?null:t.event.title),c.Fb(2),c.Oc(null==t.event?null:t.event.location),c.Fb(2),c.tc("loading","checkin"===t.loading)("disabled",t.guestCount<=0),c.Fb(1),c.tc("loading","checkout"===t.loading)("disabled",t.guestCount<=0),c.Fb(1),c.tc("href","mailto:"+(null==t.event||null==t.event.organiser?null:t.event.organiser.email),c.Ec),c.Fb(4),c.tc("disabled",!(null!=t.event&&null!=t.event.attendees&&t.event.attendees.length))("matTooltip",t.show_attendees||t.has_search?"Hide Attendees":"Show Attendees"),c.Fb(2),c.Oc(t.show_attendees?"keyboard_arrow_down":"keyboard_arrow_right"),c.Fb(1),c.Ic("height",t.show_attendees||t.has_search?3.5*t.event.attendees.length+"rem":"0rem"),c.Fb(1),c.Ic("height","calc("+(3.5*(t.event.attendees.length-1)+1.75)+"rem + 1px)"),c.Fb(1),c.tc("ngIf",t.show_attendees||t.has_search)}},directives:[i.n,S.a,L.a,z.a,G.a,z.b,i.m,D],pipes:[i.f,i.b],styles:["[_nghost-%COMP%] {\n                width: 100%;\n            }\n\n            visitor-details[_ngcontent-%COMP%] {\n                transition: opacity 200ms;\n            }\n\n            [attendees][_ngcontent-%COMP%] {\n                transition: height 200ms;\n            }\n\n            [visitor][_ngcontent-%COMP%] {\n                height: 3.5rem;\n            }\n\n            [bar][_ngcontent-%COMP%] {\n                width: 2px;\n                left: calc(2rem - 1px);\n            }\n\n            [l-bar][_ngcontent-%COMP%] {\n                height: 2px;\n                left: 2rem;\n                top: calc(50% - 1px);\n                width: 1rem;\n            }\n\n            [disabled='true'][_ngcontent-%COMP%] {\n                opacity: 0.35;\n            }"]}),e})();function Q(e,t){1&e&&c.Sb(0,"visitor-event",13),2&e&&c.tc("event",t.$implicit)}function K(e,t){if(1&e&&(c.Vb(0),c.Lc(1,Q,1,1,"visitor-event",12),c.nc(2,"async"),c.Ub()),2&e){const e=c.mc();c.Fb(1),c.tc("ngForOf",c.oc(2,2,e.bookings))("ngForTrackBy",e.trackByFn)}}function Y(e,t){1&e&&(c.Xb(0,"div",14),c.Xb(1,"p",15),c.Nc(2," There are no visitors for the currently selected date. "),c.Wb(),c.Wb())}let ee=(()=>{class e{constructor(e){this._state=e,this.bookings=this._state.filtered_events}trackByFn(e,t){return t?t.id:void 0}}return e.\u0275fac=function(t){return new(t||e)(c.Rb(y))},e.\u0275cmp=c.Lb({type:e,selectors:[["visitor-listings"]],decls:19,vars:4,consts:[[1,"w-full","flex","flex-col","flex-1","text-sm","h-full"],[1,"w-full","flex","items-center","bg-white","border-b","border-gray-500","p-2","font-medium"],[1,"w-12","p-2"],[1,"w-24","p-2"],[1,"w-48","p-2"],["flex","",1,"p-2","flex-1"],[1,"w-64","p-2"],[1,"w-32","p-2"],[1,"w-16","p-2"],[1,"w-full","flex-1","overflow-auto","h-1/2"],[4,"ngIf","ngIfElse"],["empty_state",""],[3,"event",4,"ngFor","ngForOf","ngForTrackBy"],[3,"event"],[1,"h-full","w-full","flex","items-center","justify-center"],[1,"p-8"]],template:function(e,t){if(1&e&&(c.Xb(0,"div",0),c.Xb(1,"div",1),c.Sb(2,"div",2),c.Xb(3,"div",3),c.Nc(4,"Time"),c.Wb(),c.Xb(5,"div",4),c.Nc(6,"Host"),c.Wb(),c.Xb(7,"div",5),c.Nc(8,"Title"),c.Wb(),c.Xb(9,"div",6),c.Nc(10,"Location"),c.Wb(),c.Xb(11,"div",7),c.Nc(12,"Actions"),c.Wb(),c.Sb(13,"div",8),c.Wb(),c.Xb(14,"div",9),c.Lc(15,K,3,4,"ng-container",10),c.nc(16,"async"),c.Wb(),c.Wb(),c.Lc(17,Y,3,0,"ng-template",null,11,c.Mc)),2&e){const e=c.yc(18);let n=null;c.Fb(15),c.tc("ngIf",null==(n=c.oc(16,2,t.bookings))?null:n.length)("ngIfElse",e)}},directives:[i.n,i.m,Z],pipes:[i.b],styles:[""]}),e})();var te=n("BTe0");const ne=["app-visitors",""];function ie(e,t){1&e&&c.Sb(0,"mat-progress-bar",4)}const se=[{path:"",component:(()=>{class e{constructor(e){this._state=e,this.loading=this._state.loading}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}}return e.\u0275fac=function(t){return new(t||e)(c.Rb(y))},e.\u0275cmp=c.Lb({type:e,selectors:[["","app-visitors",""]],attrs:ne,decls:6,vars:3,consts:[[1,"relative","overflow-hidden","flex-1","flex","flex-col"],[1,"w-full"],[1,"w-full","flex-1","h-0"],["class","w-full","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"w-full"]],template:function(e,t){1&e&&(c.Sb(0,"sidebar"),c.Xb(1,"main",0),c.Sb(2,"visitors-topbar",1),c.Sb(3,"visitor-listings",2),c.Lc(4,ie,1,0,"mat-progress-bar",3),c.nc(5,"async"),c.Wb()),2&e&&(c.Fb(4),c.tc("ngIf",c.oc(5,1,t.loading)))},directives:[k.a,N,ee,i.n,te.a],pipes:[i.b],styles:["[_nghost-%COMP%] {\n                display: flex;\n                height: 100%;\n                width: 100%;\n                background: var(--bg);\n            }"]}),e})()}];let oe=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Pb({type:e}),e.\u0275inj=c.Ob({imports:[[i.c,s.h,l.a,o.g.forChild(se)]]}),e})()}}]);
//# sourceMappingURL=visitors-visitors-module.js.map