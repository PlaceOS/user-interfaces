(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{sNqh:function(e,t,s){"use strict";s.r(t),s.d(t,"DesksModule",function(){return ge});var n=s("SVse"),i=s("s7LF"),o=s("iInd"),c=s("zQhy"),l=s("URK9"),a=s("8Y7J"),r=s("mrSG"),d=s("2Vo4"),b=s("Kj3r"),u=s("eIep"),h=s("lJxs"),f=s("JIr8"),g=s("UXun"),p=s("SxV6"),m=s("M34a"),v=s("piIK"),k=s("sWYD"),_=s("Qfz5"),O=s("grfs"),w=s("K2Fw"),y=s("InVF"),j=s("gXqq"),X=s("iELJ"),W=s("itXk"),x=s("Dxy4"),F=s("z03u"),M=s("yJcF"),C=s("pMoy"),P=s("vGyW"),N=s("pu8Q");function D(e,t){if(1&e&&(a.Xb(0,"div",22),a.Xb(1,"div",14),a.Nc(2),a.Wb(),a.Xb(3,"div",15),a.Nc(4),a.Wb(),a.Xb(5,"div",16),a.Xb(6,"mat-checkbox",23),a.ic("ngModelChange",function(e){return t.$implicit.bookable=e}),a.Wb(),a.Wb(),a.Xb(7,"div",24),a.Xb(8,"item-list-field",25),a.ic("ngModelChange",function(e){return t.$implicit.groups=e}),a.Wb(),a.Wb(),a.Wb()),2&e){const e=t.$implicit;a.Fb(2),a.Pc(" ",e.id," "),a.Fb(2),a.Oc(e.name),a.Fb(2),a.tc("ngModel",e.bookable),a.Fb(2),a.tc("ngModel",e.groups)}}function I(e,t){if(1&e){const e=a.Yb();a.Vb(0),a.Xb(1,"main",5),a.Xb(2,"div",6),a.Xb(3,"searchbar",7),a.ic("modelChange",function(t){return a.Cc(e),a.mc().filter$.next(t)}),a.nc(4,"async"),a.Wb(),a.Sb(5,"div",8),a.Xb(6,"button",9),a.Nc(7," Upload List "),a.Xb(8,"input",10),a.ic("change",function(t){return a.Cc(e),a.mc().upload(t)}),a.Wb(),a.Wb(),a.Xb(9,"button",11),a.ic("click",function(){return a.Cc(e),a.mc().download()}),a.Nc(10," Download List "),a.Wb(),a.Wb(),a.Xb(11,"div",12),a.Xb(12,"div",13),a.Xb(13,"div",14),a.Nc(14,"ID"),a.Wb(),a.Xb(15,"div",15),a.Nc(16,"Name"),a.Wb(),a.Xb(17,"div",16),a.Nc(18,"Bookable"),a.Wb(),a.Xb(19,"div",17),a.Nc(20,"Groups"),a.Wb(),a.Wb(),a.Xb(21,"div",18),a.Lc(22,D,9,4,"div",19),a.nc(23,"async"),a.Wb(),a.Wb(),a.Wb(),a.Xb(24,"footer",20),a.Xb(25,"button",21),a.ic("click",function(){return a.Cc(e),a.mc().save()}),a.Nc(26,"Save"),a.Wb(),a.Wb(),a.Ub()}if(2&e){const e=a.mc();a.Fb(3),a.tc("model",a.oc(4,2,e.filter$)),a.Fb(19),a.tc("ngForOf",a.oc(23,4,e.desk_list))}}function L(e,t){if(1&e&&(a.Xb(0,"main",26),a.Sb(1,"mat-spinner",27),a.Xb(2,"p"),a.Nc(3),a.Wb(),a.Wb()),2&e){const e=a.mc();a.Fb(1),a.tc("diameter",48),a.Fb(2),a.Oc(e.loading)}}let z=(()=>{class e{constructor(e,t){this._data=e,this._dialog_ref=t,this.building=this._data.building,this.level=this._data.level,this.desks$=new d.a(this._data.desks),this.filter$=new d.a(""),this.desk_list=Object(W.a)([this.filter$,this.desks$]).pipe(Object(h.a)(e=>{const[t,s]=e;return s.filter(e=>e.name.toLowerCase().includes(t.toLowerCase())||e.id.toLowerCase().includes(t.toLowerCase()))}))}download(){const e=this.desks$.getValue().map(e=>e.format()),t=Object(O.k)(e),s=this.level.display_name.split(" ").join("-").toLowerCase();Object(O.h)(`desks_${s}.csv`,t)}upload(e){if(e.target){const t=e.target.files[0];if(t){this.loading="Uploading...";const e=new FileReader;e.readAsText(t,"UTF-8"),e.onload=()=>{this.processCSV(e.result),this.loading=""},e.onerror=e=>{this.loading="",Object(O.l)("Error reading file.")}}}}save(){return Object(r.a)(this,void 0,void 0,function*(){this.loading="Saving changes to desks...",yield Object(w.w)(this.level.id,{name:"desks",description:"desks",details:this.desks$.getValue()}).toPromise().catch(e=>{throw this.loading="",Object(O.l)(`Error saving desk data. Error: ${e.message||e}`),e}),Object(O.n)("Successfully updated desks"),this.loading="",this._dialog_ref.close()})}processCSV(e){const t=Object(O.e)(e);this.desks$.next(t.map(e=>new y.b(e))),Object(O.n)("Upload was sucessful. Click Save Button to save the changes")}}return e.\u0275fac=function(t){return new(t||e)(a.Rb(X.a),a.Rb(X.e))},e.\u0275cmp=a.Lb({type:e,selectors:[["desk-list-modal"]],decls:11,vars:4,consts:[[1,"flex","items-center"],[2,"margin-right","1rem"],["mat-icon-button","","mat-dialog-close",""],[4,"ngIf","ngIfElse"],["load_state",""],[1,"flex","flex-col"],[1,"flex","items-center","p-2","space-x-2","w-full","border-b","border-gray-300"],[3,"model","modelChange"],[1,"flex-1","w-0"],["mat-button","",1,"relative"],["type","file",1,"absolute","inset-0","opacity-0",3,"change"],["mat-button","",3,"click"],[1,"flex","flex-col","flex-1","w-full"],[1,"flex","items-center","p-2","border-b","border-gray-300","font-medium"],["flex","",1,"w-40","p-1","flex-1"],[1,"w-32","p-1"],[1,"w-24","p-1"],[1,"w-52","p-1"],["table","",1,"flex-1","overflow-auto"],["class","flex item-center p-2 border-b border-gray-200",4,"ngFor","ngForOf"],[1,"flex","items-center","justify-center","space-x-2","p-2","border-t","border-gray-300"],["mat-button","",1,"w-32",3,"click"],[1,"flex","item-center","p-2","border-b","border-gray-200"],[3,"ngModel","ngModelChange"],[1,"w-52"],["hide-outline","","no-wrapper","",3,"ngModel","ngModelChange"],[1,"w-64","h-48","mx-auto","flex","flex-col","items-center","justify-center"],[1,"m-4",3,"diameter"]],template:function(e,t){if(1&e&&(a.Xb(0,"header",0),a.Xb(1,"h2",1),a.Xb(2,"strong"),a.Nc(3,"List of Desks"),a.Wb(),a.Nc(4),a.Wb(),a.Xb(5,"button",2),a.Xb(6,"app-icon"),a.Nc(7,"close"),a.Wb(),a.Wb(),a.Wb(),a.Lc(8,I,27,6,"ng-container",3),a.Lc(9,L,4,2,"ng-template",null,4,a.Mc)),2&e){const e=a.yc(10);a.Fb(4),a.Qc(" - ",t.building.display_name||t.building.name,", ",t.level.display_name||t.level.name," "),a.Fb(4),a.tc("ngIf",!t.loading)("ngIfElse",e)}},directives:[x.b,X.c,F.a,n.n,M.a,n.m,C.a,i.l,i.o,P.a,N.b],pipes:[n.b],styles:["main[_ngcontent-%COMP%] {\n                max-height: 65vh;\n            }\n\n            [table][_ngcontent-%COMP%] {\n                height: 1px;\n                max-height: 50vh;\n            }"]}),e})(),S=(()=>{class e extends O.b{constructor(e,t){super(),this._org=e,this._dialog=t,this._filters=new d.a({}),this._desk_bookings=[],this._desks=[],this._loading=new d.a(!1),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this.desks=this._filters.pipe(Object(b.a)(500),Object(u.a)(e=>{var t;const s=e.zones||[];return s.includes("All")?Object(w.i)(null===(t=this._org.building)||void 0===t?void 0:t.id,{name:"desks"}).pipe(Object(h.a)(e=>e.map(e=>e.metadata.desks.details).reduce((e,t)=>[...e,...t],[]))):Object(w.t)(s[0],{name:"desks"}).pipe(Object(h.a)(e=>e.details))}),Object(f.a)(e=>[]),Object(h.a)(e=>(e instanceof Array||(e=[]),e.sort((e,t)=>e.name.localeCompare(t.name)),this._desks=e.map(e=>new y.b(e)),this._desks)),Object(g.a)()),this.bookings=this._filters.pipe(Object(b.a)(500),Object(u.a)(e=>{this._loading.next(!0);const t=e.date?new Date(e.date):new Date;let s=(e.zones||[]).filter(e=>-1!==e&&"-1"!==e&&"All"!==e);return(null==s?void 0:s.length)||(s=this._org.levelsForBuilding(this._org.building).map(e=>e.id)),Object(_.e)({period_start:Math.floor(Object(m.a)(t).valueOf()/1e3),period_end:Math.floor(Object(v.a)(t).valueOf()/1e3),type:"desk",zones:(s||[]).join(",")})}),Object(h.a)(e=>(e.sort((e,t)=>e.date-t.date),this._desk_bookings=e,this._loading.next(!1),e)),Object(g.a)())}setFilters(e){var t,s,n;(null===(t=e.zones)||void 0===t?void 0:t.includes("All"))?e.zones=["All",...this._org.levelsForBuilding(this._org.building).map(e=>e.id)]:e.zones&&(null===(n=null===(s=this._filters.getValue())||void 0===s?void 0:s.zones)||void 0===n?void 0:n.includes("All"))&&(e.zones=[]),console.warn("Zones:",e.zones),this._filters.next(Object.assign(Object.assign({},this._filters.getValue()),e))}startPolling(e=3e4){this.interval("poll",()=>this.setFilters(this._filters.getValue()),e)}stopPolling(){this.clearInterval("poll")}checkinDesk(e){return Object(r.a)(this,void 0,void 0,function*(){"failed"===(yield Object(_.d)(e.id,!0).toPromise().catch(e=>"failed"))?Object(O.l)("Error checking in desk booking"):Object(O.n)(`Checked in ${e.user_name}.`)})}approveDesk(e){return Object(r.a)(this,void 0,void 0,function*(){"failed"===(yield Object(_.c)(e.id).toPromise().catch(e=>"failed"))?Object(O.l)("Error approving in desk booking"):Object(O.n)(`Approved desk booking for ${e.user_name} on ${Object(k.a)(e.date,"MMM Do")}.`)})}rejectDesk(e){return Object(r.a)(this,void 0,void 0,function*(){"failed"===(yield Object(_.f)(e.id).toPromise().catch(e=>"failed"))?Object(O.l)("Error rejecting in desk booking"):Object(O.n)(`Rejected desk booking for ${e.user_name} on ${Object(k.a)(e.date,"MMM Do")}.`)})}giveAccess(e){return Object(r.a)(this,void 0,void 0,function*(){const t=yield Object(_.g)(new _.a(Object.assign(Object.assign({},e),{access:!0}))).toPromise().catch(e=>"failed");if("failed"===t)return Object(O.l)("Error giving building access booking host");Object(O.n)(`Successfully gave building access to ${e.user_name} for desk booking.`),this._desk_bookings=[...this._desk_bookings,t]})}rejectAllDesks(){return Object(r.a)(this,void 0,void 0,function*(){const e=this._desk_bookings||[];if(e.length>0){const t=this._dialog.open(j.c,{data:{title:"Cancel all desk bookings",content:"Are you sure you want to cancel all bookings for the selected date?",icon:{type:"icon",class:"material-icons",content:"delete"}}});return new Promise((s,n)=>Object(r.a)(this,void 0,void 0,function*(){let i=!1;t.componentInstance.event.pipe(Object(p.a)(e=>"done"===e.reason)).subscribe(()=>Object(r.a)(this,void 0,void 0,function*(){t.componentInstance.loading="Rejecting all desks for selected date...",i=!0,yield Promise.all(e.map(e=>Object(_.f)(e.id).toPromise())),s(""),Object(O.n)("Successfull rejected all desk bookings for selected date."),t.close()})),yield t.afterClosed().toPromise(),i||n()}))}Object(O.m)("No desks to reject for the selected date")})}updateDesks(){return Object(r.a)(this,void 0,void 0,function*(){const e=this._dialog.open(z,{data:{level:this._org.levelWithID(this._filters.getValue().zones)||this._org.level_list[0],building:this._org.building,desks:this._desks}});yield e.afterClosed().toPromise(),this._desks=e.componentInstance.desks$.getValue()})}}return e.\u0275fac=function(t){return new(t||e)(a.ec(y.c),a.ec(X.b))},e.\u0275prov=a.Nb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var $=s("ORrl"),A=s("IzEk"),R=s("Q2Ze"),V=s("ZTz/"),E=s("UhP/"),q=s("jfXU");function T(e,t){if(1&e&&(a.Xb(0,"mat-option",7),a.Nc(1),a.Wb()),2&e){const e=t.$implicit;a.tc("value",e.id),a.Fb(1),a.Pc(" ",e.display_name||e.name," ")}}const U=function(){return["/desks"]},J=function(e){return{show_map:e}};function Z(e,t){if(1&e){const e=a.Yb();a.Xb(0,"a",8),a.ic("click",function(){return a.Cc(e),a.mc().toggleMapShow()}),a.nc(1,"async"),a.Nc(2),a.nc(3,"async"),a.Wb()}if(2&e){const e=a.mc();let t=null,s=null;a.tc("routerLink",a.uc(7,U))("queryParams",a.vc(8,J,!(null!=(t=a.oc(1,3,e.filters))&&t.show_map))),a.Fb(2),a.Pc(" ",null!=(s=a.oc(3,5,e.filters))&&s.show_map?"Show List View":"Show Map View"," ")}}const H=function(){return[]};let Q=(()=>{class e extends O.b{constructor(e,t,s,n){super(),this._desks=e,this._org=t,this._route=s,this._router=n,this.levels=this._org.active_levels,this.filters=this._desks.filters,this.toggleMapShow=()=>{this._desks.setFilters({show_map:!this.show_map}),this.show_map=!this.show_map},this.setDate=e=>this._desks.setFilters({date:e}),this.updateZones=e=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:e.join(",")},queryParamsHandling:"merge"}),this._desks.setFilters({zones:e})}}ngOnInit(){return Object(r.a)(this,void 0,void 0,function*(){yield this._org.initialised.pipe(Object(p.a)(e=>e)).toPromise(),this.subscription("route.query",this._route.queryParamMap.subscribe(e=>{if(e.has("zone_ids")){const t=e.get("zone_ids").split(",");if(t.length){const e=this._org.levelWithID(t);if(!e)return;this._org.building=this._org.buildings.find(t=>t.id===e.parent_id),this.updateZones(t)}}e.has("date")&&this.setDate(new Date(+e.get("date"))),e.has("approve")?this.approve(e.get("approve")):e.has("reject")&&this.reject(e.get("reject")),this.show_map=e.has("show_map")&&"true"===e.get("show_map"),this._desks.setFilters({show_map:this.show_map})})),this.subscription("levels",this._org.active_levels.subscribe(e=>Object(r.a)(this,void 0,void 0,function*(){var t;const s=(null===(t=(yield this.filters.pipe(Object(A.a)(1)).toPromise()).zones)||void 0===t?void 0:t.filter(t=>e.find(e=>e.id===t)||"All"===t))||[];!s.length&&e.length&&s.push(e[0].id),this.updateZones(s)})))})}approve(e){return Object(r.a)(this,void 0,void 0,function*(){const t=yield Object(_.h)(e).toPromise();t&&this._desks.approveDesk(t)})}reject(e){return Object(r.a)(this,void 0,void 0,function*(){const t=yield Object(_.h)(e).toPromise();t&&this._desks.rejectDesk(t)})}}return e.\u0275fac=function(t){return new(t||e)(a.Rb(S),a.Rb(y.c),a.Rb(o.a),a.Rb(o.d))},e.\u0275cmp=a.Lb({type:e,selectors:[["desks-topbar"]],features:[a.Cb],decls:11,vars:10,consts:[["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],["value","All"],[3,"value",4,"ngFor","ngForOf"],["button","","mat-button","","queryParamsHandling","merge",3,"routerLink","queryParams","click",4,"ngIf"],[1,"flex-1","w-2"],[3,"dateChange"],[3,"value"],["button","","mat-button","","queryParamsHandling","merge",3,"routerLink","queryParams","click"]],template:function(e,t){1&e&&(a.Xb(0,"mat-form-field",0),a.Xb(1,"mat-select",1),a.ic("ngModelChange",function(e){return t.updateZones(e)}),a.nc(2,"async"),a.Xb(3,"mat-option",2),a.Nc(4,"All Levels"),a.Wb(),a.Lc(5,T,2,2,"mat-option",3),a.nc(6,"async"),a.Wb(),a.Wb(),a.Lc(7,Z,4,10,"a",4),a.nc(8,"async"),a.Sb(9,"div",5),a.Xb(10,"date-options",6),a.ic("dateChange",function(e){return t.setDate(e)}),a.Wb()),2&e&&(a.Fb(1),a.tc("ngModel",a.oc(2,3,t.filters).zones||a.uc(9,H)),a.Fb(4),a.tc("ngForOf",a.oc(6,5,t.levels)),a.Fb(2),a.tc("ngIf",1===(null==a.oc(8,7,t.filters).zones?null:a.oc(8,7,t.filters).zones.length)))},directives:[R.c,V.a,i.l,i.o,E.l,n.m,n.n,q.a,x.a,o.f],pipes:[n.b],styles:["[_nghost-%COMP%] {\n                display: flex;\n                align-items: center;\n                background-color: #fff;\n                height: 5em;\n                padding: 0 1em;\n                border-bottom: 1px solid #ccc;\n            }\n\n            [_nghost-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n                margin-left: 0.5rem;\n            }\n\n            mat-form-field[_ngcontent-%COMP%] {\n                height: 3.25em;\n                width: 8em;\n            }"]}),e})();var Y=s("rJgo"),B=s("VCaO");let G=(()=>{class e{constructor(e){this._state=e,this.checkin=()=>this.runMethod("checkin",()=>Object(r.a)(this,void 0,void 0,function*(){return this._state.checkinDesk(this.desk)})),this.approve=()=>this.runMethod("approve",()=>Object(r.a)(this,void 0,void 0,function*(){return this._state.approveDesk(this.desk)})),this.reject=()=>this.runMethod("reject",()=>Object(r.a)(this,void 0,void 0,function*(){return this._state.rejectDesk(this.desk)}))}runMethod(e,t){return Object(r.a)(this,void 0,void 0,function*(){this.loading=e,yield t().catch(e=>null),this.loading=""})}}return e.\u0275fac=function(t){return new(t||e)(a.Rb(S))},e.\u0275cmp=a.Lb({type:e,selectors:[["desk-details"]],inputs:{desk:"desk"},decls:21,vars:19,consts:[[1,"w-32","p-2","bg"],[1,"w-32","p-2"],[1,"w-24","p-2"],["flex","",1,"p-2","flex-1","truncate"],[1,"w-32","p-2","flex","items-center"],["mat-icon-button","","content","how_to_reg",3,"loading","state","click"],["mat-icon-button","","content","event_available",3,"loading","state","click"],["mat-icon-button","","content","event_busy",3,"loading","state","click"]],template:function(e,t){1&e&&(a.Xb(0,"div",0),a.Nc(1),a.Wb(),a.Xb(2,"div",1),a.Nc(3),a.Wb(),a.Xb(4,"div",2),a.Nc(5),a.nc(6,"date"),a.Wb(),a.Xb(7,"div",3),a.Nc(8),a.Wb(),a.Xb(9,"div"),a.Nc(10),a.Wb(),a.Xb(11,"div",1),a.Nc(12),a.Wb(),a.Xb(13,"div",1),a.Nc(14),a.Wb(),a.Xb(15,"div",2),a.Nc(16),a.Wb(),a.Xb(17,"div",4),a.Xb(18,"action-icon",5),a.ic("click",function(){return t.checkin()}),a.Wb(),a.Xb(19,"action-icon",6),a.ic("click",function(){return t.approve()}),a.Wb(),a.Xb(20,"action-icon",7),a.ic("click",function(){return t.reject()}),a.Wb(),a.Wb()),2&e&&(a.Fb(1),a.Oc(null==t.desk?null:t.desk.user_name),a.Fb(2),a.Oc(null==t.desk||null==t.desk.extension_data?null:t.desk.extension_data.group),a.Fb(2),a.Oc(a.pc(6,16,t.desk.date,"shortTime")),a.Fb(3),a.Oc(null==t.desk?null:t.desk.description),a.Fb(1),a.Hb("w-24 p-2 capitalize text-red-600 "+(null==t.desk?null:t.desk.status)),a.Fb(1),a.Pc(" ",null==t.desk?null:t.desk.status," "),a.Fb(2),a.Oc(null==t.desk?null:t.desk.approver_name),a.Fb(2),a.Oc(null!=t.desk&&t.desk.checked_in?"Yes":"No"),a.Fb(2),a.Oc(null!=t.desk&&t.desk.access?"Yes":"No"),a.Fb(2),a.tc("loading","checkin"===t.loading)("state",null!=t.desk&&t.desk.checked_in?"success":""),a.Fb(1),a.tc("loading","approve"===t.loading)("state",null!=t.desk&&t.desk.approved?"success":""),a.Fb(1),a.tc("loading","reject"===t.loading)("state","declined"===(null==t.desk?null:t.desk.status)?"success":""))},directives:[B.a],pipes:[n.f],styles:["[_nghost-%COMP%] {\n                width: 100%;\n                display: flex;\n                align-items: center;\n                padding: 0 0.5rem;\n                background-color: #f8f8f8;\n                border-bottom: 1px solid #ccc;\n            }\n\n            [_nghost-%COMP%]:hover {\n                background-color: #f0f0f0;\n            }\n\n            .tentative[_ngcontent-%COMP%] {\n                color: #ffa000 !important;\n            }\n\n            .approved[_ngcontent-%COMP%] {\n                color: #388e3c !important;\n            }"]}),e})();var K=s("s5id"),ee=s("OuDT"),te=s("j4gA"),se=s("+QZd");let ne=(()=>{class e extends O.b{constructor(e,t,s){super(),this._state=e,this._desk=t,this._desks_state=s,this.url=this._state.map_url,this.styles=this._state.map_styles,this.positions=this._state.map_positions,this.actions=this._state.map_actions,this.features=this._state.map_features,this.setHost=e=>this._desks_state.setOptions({host:e})}ngOnInit(){this.subscription("date",this._desk.filters.subscribe(e=>{this._desks_state.setOptions({date:e.date?new Date(e.date):new Date,zones:e.zones})}))}}return e.\u0275fac=function(t){return new(t||e)(a.Rb(K.b),a.Rb(S),a.Rb(K.a))},e.\u0275cmp=a.Lb({type:e,selectors:[["desk-map-view"]],features:[a.Eb([K.a]),a.Cb],decls:13,vars:19,consts:[["map","",1,"h-full","w-full","relative"],[3,"src","zoom","center","styles","features","actions"],[1,"absolute","bottom-0","right-0"],[1,"absolute","top-0","left-0","p-2","text-black"],["placeholder","User for bookings...",3,"ngModel","ngModelChange"],["info","",1,"absolute","bottom-0","rounded","p-2","m-2","bg-white","shadow","text-center"]],template:function(e,t){1&e&&(a.Xb(0,"div",0),a.Sb(1,"i-map",1),a.nc(2,"async"),a.nc(3,"async"),a.nc(4,"async"),a.nc(5,"async"),a.nc(6,"async"),a.nc(7,"async"),a.Sb(8,"explore-zoom-controls",2),a.Xb(9,"div",3),a.Xb(10,"a-user-search-field",4),a.ic("ngModelChange",function(e){return t.setHost(e)}),a.Wb(),a.Wb(),a.Xb(11,"div",5),a.Nc(12," Click/Tap an available desk to book it. "),a.Wb(),a.Wb()),2&e&&(a.Fb(1),a.tc("src",a.oc(2,7,t.url))("zoom",a.oc(3,9,t.positions).zoom)("center",a.oc(4,11,t.positions).center)("styles",a.oc(5,13,t.styles))("features",a.oc(6,15,t.features))("actions",a.oc(7,17,t.actions)),a.Fb(9),a.tc("ngModel",null))},directives:[ee.a,te.a,se.a,i.l,i.o],pipes:[n.b],styles:["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                position: relative;\n                height: 100%;\n                width: 100%;\n            }\n\n            [info][_ngcontent-%COMP%] {\n                left: 50%;\n                transform: translateX(-50%);\n            }"]}),e})();function ie(e,t){if(1&e&&(a.Xb(0,"button",18),a.Xb(1,"app-icon"),a.Nc(2,"more_vert"),a.Wb(),a.Wb()),2&e){a.mc(2);const e=a.yc(5);a.tc("matMenuTriggerFor",e)}}function oe(e,t){1&e&&a.Sb(0,"desk-details",20),2&e&&a.tc("desk",t.$implicit)}function ce(e,t){if(1&e&&(a.Vb(0),a.Lc(1,oe,1,1,"desk-details",19),a.nc(2,"async"),a.Ub()),2&e){const e=a.mc(2);a.Fb(1),a.tc("ngForOf",a.oc(2,1,e.bookings))}}function le(e,t){if(1&e&&(a.Vb(0),a.Xb(1,"div",7),a.Sb(2,"div",8),a.Xb(3,"div",9),a.Nc(4),a.nc(5,"async"),a.Wb(),a.Xb(6,"div",10),a.Nc(7),a.nc(8,"async"),a.nc(9,"async"),a.Wb(),a.Lc(10,ie,3,1,"button",11),a.nc(11,"async"),a.Wb(),a.Xb(12,"div",12),a.Xb(13,"div",13),a.Xb(14,"div",14),a.Nc(15,"Person"),a.Wb(),a.Xb(16,"div",14),a.Nc(17,"Group"),a.Wb(),a.Xb(18,"div",15),a.Nc(19,"Date"),a.Wb(),a.Xb(20,"div",16),a.Nc(21,"Desk"),a.Wb(),a.Xb(22,"div",15),a.Nc(23,"Status"),a.Wb(),a.Xb(24,"div",14),a.Nc(25,"Approver"),a.Wb(),a.Xb(26,"div",14),a.Nc(27,"Checked In"),a.Wb(),a.Xb(28,"div",15),a.Nc(29,"Access"),a.Wb(),a.Sb(30,"div",14),a.Wb(),a.Xb(31,"div",17),a.Lc(32,ce,3,3,"ng-container",0),a.nc(33,"async"),a.Wb(),a.Wb(),a.Ub()),2&e){const e=a.mc(),t=a.yc(3);let s=null,n=null,i=null;a.Fb(4),a.Pc(" Requests: ",(null==(s=a.oc(5,5,e.bookings))?null:s.length)||"0"," "),a.Fb(3),a.Pc(" Free Desks: ",((null==(n=a.oc(8,7,e.desks))?null:n.length)||0)-((null==(n=a.oc(9,9,e.bookings))?null:n.length)||0)," "),a.Fb(3),a.tc("ngIf",null==a.oc(11,11,e.filters).zones?null:a.oc(11,11,e.filters).zones.length),a.Fb(22),a.tc("ngIf",null==(i=a.oc(33,13,e.bookings))?null:i.length)("ngIfElse",t)}}function ae(e,t){1&e&&(a.Xb(0,"div",21),a.Xb(1,"p",22),a.Nc(2," There are no desks for the currently selected date. "),a.Wb(),a.Wb())}function re(e,t){1&e&&(a.Xb(0,"div",23),a.Sb(1,"desk-map-view"),a.Wb())}let de=(()=>{class e{constructor(e){this._state=e,this.filters=this._state.filters,this.desks=this._state.desks.pipe(Object(h.a)(e=>e.filter(e=>e.bookable))),this.bookings=this._state.bookings,this.rejectAll=()=>this._state.rejectAllDesks(),this.updateDesks=()=>this._state.updateDesks()}}return e.\u0275fac=function(t){return new(t||e)(a.Rb(S))},e.\u0275cmp=a.Lb({type:e,selectors:[["desk-listings"]],decls:20,vars:4,consts:[[4,"ngIf","ngIfElse"],["empty_state",""],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"flex","items-center"],[1,"pl-2"],["map_state",""],["details","",1,"w-full","bg-gray-900","text-white","flex","items-center","px-2"],[1,"flex-1","w-0"],[1,"p-2"],[1,"px-8"],["mat-icon-button","",3,"matMenuTriggerFor",4,"ngIf"],[1,"w-full","flex","flex-col","flex-1","text-sm","h-1/2"],[1,"w-full","flex","items-center","bg-white","border-b","border-gray-500","p-2","font-medium"],[1,"w-32","p-2"],[1,"w-24","p-2"],["flex","",1,"p-2","flex-1"],[1,"w-full","flex-1","overflow-auto","h-1/2"],["mat-icon-button","",3,"matMenuTriggerFor"],[3,"desk",4,"ngFor","ngForOf"],[3,"desk"],[1,"h-full","w-full","flex","items-center","justify-center"],[1,"p-8"],[1,"absolute","inset-0"]],template:function(e,t){if(1&e&&(a.Lc(0,le,34,15,"ng-container",0),a.nc(1,"async"),a.Lc(2,ae,3,0,"ng-template",null,1,a.Mc),a.Xb(4,"mat-menu",null,2),a.Xb(6,"button",3),a.ic("click",function(){return t.updateDesks()}),a.Xb(7,"div",4),a.Xb(8,"app-icon"),a.Nc(9,"edit"),a.Wb(),a.Xb(10,"span",5),a.Nc(11,"Edit Desks"),a.Wb(),a.Wb(),a.Wb(),a.Xb(12,"button",3),a.ic("click",function(){return t.rejectAll()}),a.Xb(13,"div",4),a.Xb(14,"app-icon"),a.Nc(15,"event_busy"),a.Wb(),a.Xb(16,"span",5),a.Nc(17,"Reject All"),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Lc(18,re,2,0,"ng-template",null,6,a.Mc)),2&e){const e=a.yc(19);let s=null;a.tc("ngIf",!(null!=(s=a.oc(1,2,t.filters))&&s.show_map))("ngIfElse",e)}},directives:[n.n,Y.a,Y.b,F.a,x.b,Y.d,n.m,G,ne],pipes:[n.b],styles:["[_nghost-%COMP%] {\n                position: relative;\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                overflow: hidden;\n            }\n\n            [details][_ngcontent-%COMP%] {\n                height: 3.5rem;\n            }\n\n            [flex][_ngcontent-%COMP%] {\n                min-width: 8rem;\n            }"]}),e})();var be=s("BTe0");const ue=["app-desks",""];function he(e,t){1&e&&a.Sb(0,"mat-progress-bar",4)}const fe=[{path:"",component:(()=>{class e{constructor(e){this._state=e,this.loading=this._state.loading}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}}return e.\u0275fac=function(t){return new(t||e)(a.Rb(S))},e.\u0275cmp=a.Lb({type:e,selectors:[["","app-desks",""]],attrs:ue,decls:6,vars:3,consts:[[1,"relative","overflow-hidden","flex-1","flex","flex-col"],[1,"w-full"],[1,"w-full","flex-1","h-0"],["class","w-full","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"w-full"]],template:function(e,t){1&e&&(a.Sb(0,"sidebar"),a.Xb(1,"main",0),a.Sb(2,"desks-topbar",1),a.Sb(3,"desk-listings",2),a.Lc(4,he,1,0,"mat-progress-bar",3),a.nc(5,"async"),a.Wb()),2&e&&(a.Fb(4),a.tc("ngIf",a.oc(5,1,t.loading)))},directives:[$.a,Q,de,n.n,be.a],pipes:[n.b],styles:["[_nghost-%COMP%] {\n                display: flex;\n                height: 100%;\n                width: 100%;\n                background: var(--bg);\n            }"]}),e})()}];let ge=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Pb({type:e}),e.\u0275inj=a.Ob({imports:[[n.c,i.h,i.p,l.a,K.c,c.c,o.g.forChild(fe)]]}),e})()}}]);
//# sourceMappingURL=desks-desks-module.js.map