"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_lockers_lockers_module_ts"],{3601:(Ie,M,i)=>{i.r(M),i.d(M,{LockersModule:()=>De});var d=i(6477),f=i(9542),m=i(647),E=i(8046),Z=i(2128),S=i(1983),G=i(3045),p=i(9743),u=i(1670),w=i(4505),U=i(2218),N=i(7716),$=i(4139),H=i(823),j=i(8759),K=i(3298),q=i(9095),k=i(6942),W=i(2647),X=i(9128),F=i(1810),V=i(9377),ee=i(3200),J=i(1535),g=i(5375),b=i(5912),e=(i(6168),i(4250),i(6839)),T=i(7486);let x=(()=>{class s extends p.cx{nextPage(){this._call_next_page.next(`NEXT_${Date.now()}`)}constructor(t,o){super(),this._org=t,this._dialog=o,this._filters=new w.X({}),this._locker_bookings=[],this._loading=new w.X(!1),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this._next_page=new U.xQ,this._call_next_page=new U.xQ,this._all_zones_keys=["All",-1,"-1"],this.setup_paging=(0,N.aj)([this._filters,this._org.initialised]).pipe((0,H.b)(500),(0,j.b)(([n,r])=>{if(!r)return;const l=n.date||Date.now(),c=!n.zones||n.zones.some(_=>this._all_zones_keys.includes(_))?[this._org.building.id]:n.zones;this._next_page.next(()=>(0,g.pS)({period_start:(0,F.Z)((0,V.Z)(l)),period_end:(0,F.Z)((0,ee.Z)(l)),type:"locker",zones:c.join(","),include_checked_out:!0})),this._call_next_page.next(`RESET_${Date.now()}`)})),this.paged_bookings=(0,N.aj)([this._next_page,this._call_next_page]).pipe((0,K.x)((n,r)=>n[1]===r[1]),(0,q.w)(([n,r])=>(this._loading.next(!0),n?r.includes("RESET")?n().pipe((0,k.U)(l=>({...l,reset:!0}))):n().pipe((0,k.U)(l=>({...l,reset:!1}))):(0,$.of)({data:[],total:0,next:null,reset:r.includes("RESET")}))),(0,W.R)((n,{data:r,total:l,next:c,reset:_})=>{const h=r;return this._next_page.next(c),_?{list:h,total:l}:{list:[...n.list,...h],total:l}},{list:[],total:0}),(0,j.b)(n=>this._loading.next(!1)),(0,X.d)(1)),this.has_more_pages=this.paged_bookings.pipe((0,k.U)(n=>n.list.length<n.total)),this.bookings=this.paged_bookings.pipe((0,k.U)(n=>n.list)),this.setup_paging.subscribe()}setFilters(t){t.zones?.includes("All")?t.zones=["All",...this._org.levelsForBuilding(this._org.building).map(o=>o.id)]:t.zones&&this._filters.getValue()?.zones?.includes("All")&&(t.zones=[]),this._filters.next({...this._filters.getValue(),...t})}refresh(){this._loading.next(!0),this.timeout("poll",()=>this.setFilters(this._filters.getValue()))}checkinLocker(t,o=!0){return(0,u.Z)(function*(){console.log("Check-in:",t);const n=yield(0,g.FD)(t.id,o??!0).toPromise().catch(r=>({failed:!0,error:r}));if(n.failed)throw(0,p.cB)(n.error?`Error: ${n.error}`:`Error checking ${o?"in":"out"} locker booking`),n.error;(0,p.t5)(`Checked ${o?"in":"out"} ${t.user_name}.`)})()}approveLocker(t){return(0,u.Z)(function*(){if("failed"===(yield(0,g.jT)(t.id).toPromise().catch(n=>"failed")))return(0,p.cB)("Error approving in locker booking");(0,p.t5)(`Approved locker booking for ${t.user_name} on ${(0,J.Z)(t.date,"MMM do")}.`),t.approved=!0,t.rejected=!1})()}rejectLocker(t){return(0,u.Z)(function*(){if("failed"===(yield(0,g.FP)(t.id).toPromise().catch(n=>"failed")))return(0,p.cB)("Error rejecting in locker booking");(0,p.t5)(`Rejected locker booking for ${t.user_name} on ${(0,J.Z)(t.date,"MMM do")}.`),t.approved=!1,t.rejected=!0})()}giveAccess(t){var o=this;return(0,u.Z)(function*(){const n=yield(0,g.km)(new g.$N({...t,access:!0})).toPromise().catch(r=>"failed");if("failed"===n)return(0,p.cB)("Error giving building access booking host");(0,p.t5)(`Successfully gave building access to ${t.user_name} for locker booking.`),o._locker_bookings=[...o._locker_bookings,n]})()}rejectAllLockers(){var t=this;return(0,u.Z)(function*(){const o=t._locker_bookings||[];if(o.length<=0)return(0,p.QD)("No lockers to reject for the selected date");const n=yield(0,p._5)({title:"Cancel all locker bookings",content:"Are you sure you want to cancel all bookings for the selected date?",icon:{type:"icon",class:"material-icons",content:"delete"}},t._dialog);"done"===n.reason&&(n.loading("Rejecting all lockers for selected date..."),yield Promise.all(o.map(r=>(0,g.FP)(r.id).toPromise())),(0,p.t5)("Successfully rejected all locker bookings for selected date."),n.close())})()}}return s.\u0275fac=function(t){return new(t||s)(e.LFG(b.w7),e.LFG(T.uw))},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();var te=i(4945),O=i(6297),oe=i(5670),B=i(3910),Q=i(9243),Y=i(8441),R=i(9396),L=i(8750),P=i(6508),v=i(7728),y=i(2423),C=i(5306);function ne(s,a){1&s&&(e.TgZ(0,"mat-option",9),e._uU(1,"All Levels"),e.qZA())}function se(s,a){if(1&s&&(e.TgZ(0,"mat-option",10),e._uU(1),e.qZA()),2&s){const t=a.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.display_name||t.name," ")}}function re(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"button",11),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.manageRestrictions())}),e.TgZ(1,"app-icon"),e._uU(2,"lock_open"),e.qZA()()}}let ie=(()=>{class s extends p.cx{constructor(t,o,n,r,l){super(),this._lockers=t,this._org=o,this._route=n,this._router=r,this._dialog=l,this.levels=this._org.active_levels,this.filters=this._lockers.filters,this.manage=!1,this.is_map=!1,this.setDate=c=>this._lockers.setFilters({date:c}),this.setFilters=c=>this._lockers.setFilters(c),this.updateZones=c=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:c.join(",")},queryParamsHandling:"merge"}),this._lockers.setFilters({zones:c})}}ngOnInit(){var t=this;return(0,u.Z)(function*(){yield t._org.initialised.pipe((0,oe.P)(o=>o)).toPromise(),t.subscription("route.query",t._route.queryParamMap.subscribe(o=>{if(o.has("zone_ids")){const n=o.get("zone_ids").split(",");if(n.length){t.updateZones(n);const r=t._org.levelWithID(n);if(!r)return;t._org.building=t._org.buildings.find(l=>l.id===r.parent_id)}}o.has("date")&&t.setDate(new Date(+o.get("date"))),o.has("approve")?t.approve(o.get("approve")):o.has("reject")&&t.reject(o.get("reject")),t.manage=t._router.url?.includes("manage"),t.is_map=t._router.url?.includes("map")})),t.subscription("router.events",t._router.events.subscribe(()=>{t.manage=t._router.url?.includes("manage"),t.is_map=t._router.url?.includes("map")})),t.subscription("levels",t._org.active_levels.subscribe(function(){var o=(0,u.Z)(function*(n){const l=(yield t.filters.pipe((0,B.q)(1)).toPromise())?.zones?.filter(c=>n.find(_=>_.id===c)||"All"===c)||[];!l.length&&n.length&&l.push(n[0].id),t.updateZones(l)});return function(n){return o.apply(this,arguments)}}())),t.manage=t._router.url?.includes("manage"),t.is_map=t._router.url?.includes("map")})()}manageRestrictions(){this._dialog.open(Q.i,{data:{type:"locker"}})}approve(t){var o=this;return(0,u.Z)(function*(){const n=yield(0,g.Fo)(t).toPromise();n&&o._lockers.approveLocker(n)})()}reject(t){var o=this;return(0,u.Z)(function*(){const n=yield(0,g.Fo)(t).toPromise();n&&o._lockers.rejectLocker(n)})()}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(x),e.Y36(b.w7),e.Y36(m.gz),e.Y36(m.F0),e.Y36(T.uw))},s.\u0275cmp=e.Xpm({type:s,selectors:[["lockers-topbar"]],features:[e.qOj],decls:13,vars:13,consts:[[1,"flex","items-center","bg-base-100","h-20","px-4","border-b","border-base-200","space-x-2"],["appearance","outline"],["placeholder","All Levels",3,"ngModel","ngModelChange"],["value","All",4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],["btn","","icon","","matRipple","","class","bg-primary mx-2 text-white rounded","matTooltip","Locker Restrictions",3,"click",4,"ngIf"],[1,"flex-1","w-2"],[1,"mr-2",3,"model","modelChange"],[3,"dateChange"],["value","All"],[3,"value"],["btn","","icon","","matRipple","","matTooltip","Locker Restrictions",1,"bg-primary","mx-2","text-white","rounded",3,"click"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"mat-form-field",1)(2,"mat-select",2),e.NdJ("ngModelChange",function(r){return o.updateZones([r])}),e.ALo(3,"async"),e.ALo(4,"async"),e.YNc(5,ne,2,0,"mat-option",3),e.YNc(6,se,2,2,"mat-option",4),e.ALo(7,"async"),e.qZA()(),e.YNc(8,re,3,0,"button",5),e._UZ(9,"div",6),e.TgZ(10,"searchbar",7),e.NdJ("modelChange",function(r){return o.setFilters({search:r})}),e.ALo(11,"async"),e.qZA(),e.TgZ(12,"date-options",8),e.NdJ("dateChange",function(r){return o.setDate(r)}),e.qZA()()),2&t){let n;e.xp6(2),e.Q6J("ngModel",e.lcZ(3,5,o.filters).zones?e.lcZ(4,7,o.filters).zones[0]:"All"),e.xp6(3),e.Q6J("ngIf",!o.is_map),e.xp6(1),e.Q6J("ngForOf",e.lcZ(7,9,o.levels)),e.xp6(2),e.Q6J("ngIf",o.manage),e.xp6(2),e.Q6J("model",null==(n=e.lcZ(11,11,o.filters))?null:n.search)}},dependencies:[d.sg,d.O5,f.JJ,f.On,Y.E,R.U,L.KE,P.gD,v.ey,y.gM,v.wG,C.o,d.Ov],styles:["mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n/*# sourceMappingURL=locker-topbar.component.ts-angular-inline--129.css.map*/"]}),s})();const ae=["app-lockers",""];function le(s,a){1&s&&e._UZ(0,"mat-progress-bar",7)}const ce=function(){return["/book","lockers","events"]},pe=function(){return["/book","lockers","map"]},ue=function(){return["/book","lockers","manage"]};let de=(()=>{class s extends p.cx{constructor(t,o){super(),this._state=t,this._router=o,this.loading=this._state.loading}ngOnInit(){this._state.refresh(),this.subscription("router.events",this._router.events.subscribe(o=>{if(o instanceof m.m2){const n=this._router.url?.split("/")||[""];this.path=n[t.length-1].split("?")[0]}}));const t=this._router.url?.split("/")||[""];this.path=t[t.length-1].split("?")[0]}ngOnDestroy(){super.ngOnDestroy()}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(x),e.Y36(m.F0))},s.\u0275cmp=e.Xpm({type:s,selectors:[["","app-lockers",""]],features:[e.qOj],attrs:ae,decls:15,vars:12,consts:[[1,"flex-1","relative","w-1/2","flex","flex-col","bg-base-200","overflow-hidden"],[1,"w-full"],[1,"dark"],["mat-tab-nav-bar",""],["mat-tab-link","","queryParamsHandling","merge",3,"routerLink","active"],[1,"flex-1","h-1/2","w-full","relative","overflow-auto"],["class","w-full","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"w-full"]],template:function(t,o){1&t&&(e._UZ(0,"sidebar"),e.TgZ(1,"main",0),e._UZ(2,"lockers-topbar",1),e.TgZ(3,"div",2)(4,"nav",3)(5,"a",4),e._uU(6," Bookings "),e.qZA(),e.TgZ(7,"a",4),e._uU(8," Map View "),e.qZA(),e.TgZ(9,"a",4),e._uU(10," Manage Lockers "),e.qZA()()(),e.TgZ(11,"div",5),e._UZ(12,"router-outlet"),e.qZA(),e.YNc(13,le,1,0,"mat-progress-bar",6),e.ALo(14,"async"),e.qZA()),2&t&&(e.xp6(5),e.Q6J("routerLink",e.DdM(9,ce))("active","events"===o.path),e.xp6(2),e.Q6J("routerLink",e.DdM(10,pe))("active","map"===o.path),e.xp6(2),e.Q6J("routerLink",e.DdM(11,ue))("active","manage"===o.path),e.xp6(4),e.Q6J("ngIf",e.lcZ(14,7,o.loading)))},dependencies:[d.O5,Z.BU,Z.Nj,te.k,O.pW,m.lC,m.rH,ie,d.Ov],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%}\n/*# sourceMappingURL=lockers.component.ts-angular-inline--127.css.map*/"]}),s})();var A=i(9314),me=i(1110);function ge(s,a){if(1&s&&(e.TgZ(0,"div",13)(1,"div",14),e._uU(2),e.ALo(3,"date"),e.qZA(),e.TgZ(4,"div",15),e._uU(5),e.ALo(6,"date"),e.qZA()()),2&s){const t=a.data;e.xp6(2),e.Oqu(e.xi3(3,2,t,"MMM")),e.xp6(3),e.Oqu(e.xi3(6,5,t,"dd"))}}function _e(s,a){if(1&s&&(e.ynx(0),e._uU(1),e.ALo(2,"date"),e.ALo(3,"date"),e.BQk()),2&s){const t=e.oxw(2).row,o=e.oxw();e.xp6(1),e.AsE(" ",e.xi3(2,2,t.date,o.time_format)," \u2013 ",e.xi3(3,5,t.end,o.time_format)," ")}}function he(s,a){1&s&&(e.ynx(0),e._uU(1,"All Day"),e.BQk())}function fe(s,a){if(1&s&&(e.ynx(0),e.YNc(1,_e,4,8,"ng-container",16),e.YNc(2,he,2,0,"ng-container",16),e.BQk()),2&s){const t=e.oxw().row;e.xp6(1),e.Q6J("ngIf",!t.all_day),e.xp6(1),e.Q6J("ngIf",t.all_day)}}function ke(s,a){1&s&&(e.ynx(0),e.TgZ(1,"div",17),e._uU(2," Expired "),e.qZA(),e.BQk())}function ve(s,a){if(1&s&&(e.YNc(0,fe,3,2,"ng-container",16),e.YNc(1,ke,3,0,"ng-container",16)),2&s){const t=a.row;e.Q6J("ngIf","declined"!==t.status&&!t.deleted),e.xp6(1),e.Q6J("ngIf","declined"===t.status||t.deleted)}}function xe(s,a){if(1&s&&e._uU(0),2&s){const t=a.row;e.hij(" ",t.asset_name||t.asset_id," ")}}function Ze(s,a){if(1&s&&(e.TgZ(0,"div",21),e._uU(1),e.qZA()),2&s){const t=e.oxw().row;e.xp6(1),e.hij(" ",t.user_email," ")}}function be(s,a){if(1&s&&(e.TgZ(0,"div",18)(1,"div",19),e._uU(2),e.qZA(),e.YNc(3,Ze,2,1,"div",20),e.qZA()),2&s){const t=a.row;e.xp6(2),e.hij(" ",t.user_name||t.user_email||t.booked_by_name||t.booked_by_email," "),e.xp6(1),e.Q6J("ngIf",t.user_name)}}function Te(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"button",22)(1,"div",23),e._uU(2),e.qZA(),e.TgZ(3,"app-icon",15),e._uU(4,"arrow_drop_down"),e.qZA()(),e.TgZ(5,"mat-menu",null,24)(7,"button",12),e.NdJ("click",function(){const r=e.CHM(t).row,l=e.oxw();return e.KtG(l.approve(r))}),e.TgZ(8,"div",25)(9,"app-icon",26),e._uU(10,"event_available"),e.qZA(),e.TgZ(11,"div"),e._uU(12,"Approve Locker"),e.qZA()()(),e.TgZ(13,"button",12),e.NdJ("click",function(){const r=e.CHM(t).row,l=e.oxw();return e.KtG(l.reject(r))}),e.TgZ(14,"div",25)(15,"app-icon",26),e._uU(16,"event_busy"),e.qZA(),e.TgZ(17,"div"),e._uU(18,"Decline Locker"),e.qZA()()()()}if(2&s){const t=a.row,o=e.MAs(6);e.ekj("bg-success",t.approved)("text-white",t.approved||t.rejected)("bg-warning",!t.approved&&!t.rejected)("text-black",!t.approved&&!t.rejected)("bg-error",t.rejected),e.Q6J("matMenuTriggerFor",o),e.xp6(2),e.hij(" ",t.approved?"Approved":t.rejected?"Declined":"Tentative"," ")}}function Le(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"button",27)(1,"div",23),e._uU(2),e.qZA(),e.TgZ(3,"app-icon",15),e._uU(4,"arrow_drop_down"),e.qZA()(),e.TgZ(5,"mat-menu",null,28)(7,"button",12),e.NdJ("click",function(){const r=e.CHM(t).row,l=e.oxw();return e.KtG(l.checkin(r,!0))}),e.TgZ(8,"div",25)(9,"app-icon",26),e._uU(10,"check"),e.qZA(),e.TgZ(11,"div"),e._uU(12,"Check-in"),e.qZA()()(),e.TgZ(13,"button",12),e.NdJ("click",function(){const r=e.CHM(t).row,l=e.oxw();return e.KtG(l.checkin(r,!1))}),e.TgZ(14,"div",25)(15,"app-icon",26),e._uU(16,"cancel"),e.qZA(),e.TgZ(17,"div"),e._uU(18,"Check-out"),e.qZA()()()()}if(2&s){const t=a.data,o=a.row,n=e.MAs(6);e.ekj("bg-neutral-600",!t)("bg-success",t)("opacity-30","ended"===o.status),e.Q6J("matMenuTriggerFor",n)("disabled","ended"===o.status)("matTooltip","ended"===o.status?"Locker booking has ended":"Check-in or check-out locker"),e.xp6(2),e.Oqu(t?"Yes":"No")}}function ye(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"button",29),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.loadMore())}),e._uU(1," Load More "),e.qZA()}}const Ce=function(){return["date","period","user_name","group","asset_name","approver_name","status","checked_in"]},Ae=function(){return["Date","Period","Person","Group","Locker","Approver","Status","Checked In"]},Me=function(){return["4r","10r","flex","10r","10r","10r","8r","7r"]},we=function(s,a,t,o,n,r,l){return{user_name:s,asset_name:a,date:t,period:o,status:n,checked_in:r,access:l}};let D=(()=>{class s{get time_format(){return this._settings.time_format}constructor(t,o){var n=this;this._state=t,this._settings=o,this.filters=this._state.filters,this.has_more_pages=this._state.has_more_pages,this.bookings=this._state.bookings.pipe((0,k.U)(r=>r.map(l=>({...l,end:l.date+60*l.duration*1e3})))),this.rejectAll=()=>this._state.rejectAllLockers(),this.loadMore=()=>this._state.nextPage(),this.checkin=(r,l)=>this.runMethod("checkin",(0,u.Z)(function*(){yield n._state.checkinLocker(r,l),r.checked_in=l??!0})),this.approve=r=>this.runMethod("approve",(0,u.Z)(function*(){return n._state.approveLocker(r)})),this.reject=r=>this.runMethod("reject",(0,u.Z)(function*(){return n._state.rejectLocker(r)}))}runMethod(t,o){var n=this;return(0,u.Z)(function*(){n.loading=t,yield o().catch(r=>null),n.loading=""})()}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(x),e.Y36(p.gb))},s.\u0275cmp=e.Xpm({type:s,selectors:[["locker-bookings"]],decls:26,vars:26,consts:[[1,"w-full","h-4"],[1,"overflow-auto","h-full","w-full","px-4","pb-4"],[1,"min-w-[76rem]","block",3,"dataSource","filter","columns","display_column","column_size","template","empty"],["date_template",""],["period_template",""],["locker_template",""],["user_template",""],["status_template",""],["option_template",""],["btn","","matRipple","","class","absolute bottom-2 left-2 w-32 mx-auto my-4",3,"click",4,"ngIf"],["icon","","matRipple","",1,"absolute","bottom-2","right-2","bg-base-100","shadow",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"flex","flex-col","items-center","justify-center","w-full"],[1,"opacity-60"],[1,"text-xl"],[4,"ngIf"],[1,"text-xs","py-1","px-2","bg-error","rounded-2xl","text-white"],[1,"flex","flex-col","justify-center"],[1,"select-all"],["class","text-xs opacity-30 select-all",4,"ngIf"],[1,"text-xs","opacity-30","select-all"],["matRipple","",1,"rounded-3xl","px-2","py-1","flex","items-center","space-x-2","capitalize",3,"matMenuTriggerFor"],[1,"ml-2"],["statusMenu","matMenu"],[1,"flex","items-center","space-x-2"],[1,"text-2xl"],["matRipple","",1,"rounded-3xl","px-2","py-1","text-white","flex","items-center","space-x-2",3,"matMenuTriggerFor","disabled","matTooltip"],["checkinMenu","matMenu"],["btn","","matRipple","",1,"absolute","bottom-2","left-2","w-32","mx-auto","my-4",3,"click"]],template:function(t,o){if(1&t&&(e._UZ(0,"div",0),e.TgZ(1,"div",1),e._UZ(2,"custom-table",2),e.ALo(3,"async"),e.ALo(4,"async"),e.YNc(5,ge,7,8,"ng-template",null,3,e.W1O),e.YNc(7,ve,2,2,"ng-template",null,4,e.W1O),e.YNc(9,xe,1,1,"ng-template",null,5,e.W1O),e.YNc(11,be,4,2,"ng-template",null,6,e.W1O),e.YNc(13,Te,19,12,"ng-template",null,7,e.W1O),e.YNc(15,Le,19,10,"ng-template",null,8,e.W1O),e.qZA(),e.YNc(17,ye,2,0,"button",9),e.ALo(18,"async"),e.TgZ(19,"button",10)(20,"app-icon"),e._uU(21,"more_vert"),e.qZA()(),e.TgZ(22,"mat-menu",null,11)(24,"button",12),e.NdJ("click",function(){return o.rejectAll()}),e._uU(25,"Reject All"),e.qZA()()),2&t){const n=e.MAs(6),r=e.MAs(8),l=e.MAs(10),c=e.MAs(12),_=e.MAs(14),h=e.MAs(16),ze=e.MAs(23);let z,I;e.xp6(2),e.Q6J("dataSource",o.bookings)("filter",null==(z=e.lcZ(3,9,o.filters))?null:z.search)("columns",e.DdM(15,Ce))("display_column",e.DdM(16,Ae))("column_size",e.DdM(17,Me))("template",e.Hh0(18,we,c,l,n,r,_,h,h))("empty",null!=(I=e.lcZ(4,11,o.filters))&&I.search?"No matching locker bookings":"There are no locker booking for the currently selected date."),e.xp6(15),e.Q6J("ngIf",!o.loading&&e.lcZ(18,13,o.has_more_pages)),e.xp6(2),e.Q6J("matMenuTriggerFor",ze)}},dependencies:[d.O5,A.VK,A.OP,A.p6,y.gM,v.wG,C.o,me.C,d.Ov,d.uU],styles:["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;height:100%;width:100%}\n/*# sourceMappingURL=locker-bookings.component.ts-angular-inline--128.css.map*/"]}),s})();var Ue=i(7672),Ne=i(380),je=i(9816),Fe=i(6866),Je=i(3320);const Oe=["app-new-lockers",""];function Be(s,a){if(1&s&&(e.TgZ(0,"mat-option",15),e._uU(1),e.qZA()),2&s){const t=a.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.display_name||t.name," ")}}function Qe(s,a){if(1&s){const t=e.EpF();e.ynx(0),e.TgZ(1,"date-options",16),e.NdJ("dateChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.setDate(n))}),e.qZA(),e.TgZ(2,"button",17),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.refresh())}),e.ALo(3,"async"),e.TgZ(4,"app-icon"),e._uU(5,"refresh"),e.qZA()(),e.BQk()}if(2&s){const t=e.oxw();e.xp6(2),e.Q6J("disabled",e.lcZ(3,1,t.loading))}}function Ye(s,a){if(1&s){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",18),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.manageRestrictions())}),e.TgZ(2,"app-icon"),e._uU(3,"lock_open"),e.qZA()(),e.BQk()}}function Re(s,a){1&s&&e._UZ(0,"mat-progress-bar",19)}const Pe=[{path:"new",component:(()=>{class s extends p.cx{constructor(t,o,n,r,l){super(),this._state=t,this._router=o,this._route=n,this._dialog=r,this._org=l,this.loading=this._state.loading,this.filters=this._state.filters,this.levels=this._org.active_levels,this.setDate=c=>this._state.setFilters({date:c}),this.setFilters=c=>this._state.setFilters(c),this.refresh=()=>this._state.refresh(),this.updateZones=c=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:c.join(",")},queryParamsHandling:"merge"}),this._state.setFilters({zones:c})}}ngOnInit(){var t=this;this._state.refresh(),this.subscription("router.events",this._router.events.subscribe(n=>{if(n instanceof m.m2){const r=this._router.url?.split("/")||[""];this.path=r[o.length-1].split("?")[0],console.log("Path:",this.path)}})),this.subscription("levels",this._org.active_levels.subscribe(function(){var n=(0,u.Z)(function*(r){const c=(yield t.filters.pipe((0,B.q)(1)).toPromise())?.zones?.filter(_=>r.find(h=>h.id===_)||"All"===_)||[];!c.length&&r.length&&c.push(r[0].id),t.updateZones(c)});return function(r){return n.apply(this,arguments)}}()));const o=this._router.url?.split("/")||[""];this.path=o[o.length-1].split("?")[0]}ngOnDestroy(){super.ngOnDestroy()}manageRestrictions(){this._dialog.open(Q.i,{data:{type:"locker"}})}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(x),e.Y36(m.F0),e.Y36(m.gz),e.Y36(T.uw),e.Y36(b.w7))},s.\u0275cmp=e.Xpm({type:s,selectors:[["","app-new-lockers",""]],features:[e.qOj],attrs:Oe,decls:24,vars:14,consts:[[1,"print:hidden"],[1,"flex","flex-1","h-px","print:hidden"],[1,"flex","flex-col","flex-1","w-1/2","h-full"],[1,"flex","items-center","w-full","py-4","px-8","space-x-2"],[1,"text-2xl","font-medium"],[1,"flex-1","w-px"],[1,"mr-2",3,"model","modelChange"],[1,"w-full","flex","items-center","px-8","space-x-2"],["appearance","outline",1,"h-[3.5rem]"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"border-l","h-full","!ml-8","!mr-4"],[4,"ngIf"],[1,"flex-1","h-1/2","w-full","relative","overflow-auto","px-4"],["class","w-full","mode","indeterminate",4,"ngIf"],[3,"value"],[3,"dateChange"],["btn","","icon","","matRipple","","matTooltip","Refresh List",1,"ml-2","rounded","border","border-base-200",3,"disabled","click"],["btn","","icon","","matRipple","","matTooltip","Locker Restrictions",1,"bg-primary","text-white","rounded",3,"click"],["mode","indeterminate",1,"w-full"]],template:function(t,o){if(1&t&&(e._UZ(0,"app-topbar",0),e.TgZ(1,"div",1),e._UZ(2,"app-sidebar"),e.TgZ(3,"main",2)(4,"div",3)(5,"h2",4),e._uU(6,"Locker Bookings"),e.qZA(),e._UZ(7,"div",5),e.TgZ(8,"searchbar",6),e.NdJ("modelChange",function(r){return o.setFilters({search:r})}),e.ALo(9,"async"),e.qZA()(),e.TgZ(10,"div",7)(11,"mat-form-field",8)(12,"mat-select",9),e.NdJ("ngModelChange",function(r){return o.updateZones(r)}),e.ALo(13,"async"),e.YNc(14,Be,2,2,"mat-option",10),e.ALo(15,"async"),e.qZA()(),e._UZ(16,"div",11)(17,"div",5),e.YNc(18,Qe,6,3,"ng-container",12),e.YNc(19,Ye,4,0,"ng-container",12),e.qZA(),e.TgZ(20,"div",13),e._UZ(21,"router-outlet"),e.qZA(),e.YNc(22,Re,1,0,"mat-progress-bar",14),e.ALo(23,"async"),e.qZA()()),2&t){let n,r;e.xp6(8),e.Q6J("model",null==(n=e.lcZ(9,6,o.filters))?null:n.search),e.xp6(4),e.Q6J("ngModel",null==(r=e.lcZ(13,8,o.filters))?null:r.zones),e.xp6(2),e.Q6J("ngForOf",e.lcZ(15,10,o.levels)),e.xp6(4),e.Q6J("ngIf","events"===o.path),e.xp6(1),e.Q6J("ngIf","manage"===o.path),e.xp6(3),e.Q6J("ngIf",e.lcZ(23,12,o.loading)&&"events"===o.path)}},dependencies:[d.sg,d.O5,f.JJ,f.On,Y.E,R.U,Fe.O,Je.u,L.KE,P.gD,v.ey,y.gM,O.pW,v.wG,C.o,m.lC,d.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--b1)}\n/*# sourceMappingURL=new-lockers.component.ts-angular-inline--130.css.map*/"]}),s})(),children:[{path:"events",component:D},{path:"**",redirectTo:"events"}]},{path:"",component:de,children:[{path:"events",component:D},{path:"**",redirectTo:"events"}]}];let De=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[d.ez,f.u5,Z.Nh,f.UX,G.v,S.P2,g.EP,je.W9,E.Fk,L.lN,Ue.p9,Ne.c,m.Bz.forChild(Pe)]}),s})()}}]);
//# sourceMappingURL=apps_concierge_src_app_lockers_lockers_module_ts.js.map