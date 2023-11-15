"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([[555],{4555:(Ee,w,a)=>{a.r(w),a.d(w,{LockersModule:()=>Ie});var d=a(6814),h=a(6223),g=a(6980),G=a(7466),Z=a(4104),$=a(2978),H=a(7910),p=a(7109),u=a(5861),M=a(5125),U=a(2079),j=a(2994),S=a(9193),K=a(6776),F=a(7927),q=a(2068),W=a(5222),v=a(6124),X=a(4003),V=a(9185),J=a(3740),ee=a(9189),te=a(8372),N=a(2411),m=a(8466),b=a(3121),e=(a(9680),a(3092),a(9212)),T=a(9347);let x=(()=>{class s extends p.cx{nextPage(){this._call_next_page.next(`NEXT_${Date.now()}`)}constructor(t,n){super(),this._org=t,this._dialog=n,this._filters=new M.X({}),this._locker_bookings=[],this._loading=new M.X(!1),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this._next_page=new U.xQ,this._call_next_page=new U.xQ,this._all_zones_keys=["All",-1,"-1"],this.setup_paging=(0,j.aj)([this._filters,this._org.initialised]).pipe((0,K.b)(500),(0,F.b)(([o,i])=>{if(!i)return;const r=o.date||Date.now(),c=!o.zones||o.zones.some(_=>this._all_zones_keys.includes(_))?[this._org.building.id]:o.zones;this._next_page.next(()=>(0,m.pS)({period_start:(0,J.Z)((0,ee.Z)(r)),period_end:(0,J.Z)((0,te.Z)(r)),type:"locker",zones:c.join(","),include_checked_out:!0})),this._call_next_page.next(`RESET_${Date.now()}`)})),this.paged_bookings=(0,j.aj)([this._next_page,this._call_next_page]).pipe((0,q.x)((o,i)=>o[1]===i[1]),(0,W.w)(([o,i])=>(this._loading.next(!0),o?i.includes("RESET")?o().pipe((0,v.U)(r=>({...r,reset:!0}))):o().pipe((0,v.U)(r=>({...r,reset:!1}))):(0,S.of)({data:[],total:0,next:null,reset:i.includes("RESET")}))),(0,X.R)((o,{data:i,total:r,next:c,reset:_})=>{const f=i;return this._next_page.next(c),_?{list:f,total:r}:{list:[...o.list,...f],total:r}},{list:[],total:0}),(0,F.b)(o=>this._loading.next(!1)),(0,V.d)(1)),this.has_more_pages=this.paged_bookings.pipe((0,v.U)(o=>o.list.length<o.total)),this.bookings=this.paged_bookings.pipe((0,v.U)(o=>o.list)),this.setup_paging.subscribe()}setFilters(t){t.zones?.includes("All")?t.zones=["All",...this._org.levelsForBuilding(this._org.building).map(n=>n.id)]:t.zones&&this._filters.getValue()?.zones?.includes("All")&&(t.zones=[]),this._filters.next({...this._filters.getValue(),...t})}refresh(){this._loading.next(!0),this.timeout("poll",()=>this.setFilters(this._filters.getValue()))}checkinLocker(t,n=!0){return(0,u.Z)(function*(){console.log("Check-in:",t);const o=yield(0,m.FD)(t.id,n??!0).toPromise().catch(i=>({failed:!0,error:i}));if(o.failed)throw(0,p.cB)(o.error?`Error: ${o.error}`:`Error checking ${n?"in":"out"} locker booking`),o.error;(0,p.t5)(`Checked ${n?"in":"out"} ${t.user_name}.`)})()}approveLocker(t){return(0,u.Z)(function*(){if("failed"===(yield(0,m.jT)(t.id).toPromise().catch(o=>"failed")))return(0,p.cB)("Error approving in locker booking");(0,p.t5)(`Approved locker booking for ${t.user_name} on ${(0,N.Z)(t.date,"MMM do")}.`),t.approved=!0,t.rejected=!1})()}rejectLocker(t){return(0,u.Z)(function*(){if("failed"===(yield(0,m.FP)(t.id).toPromise().catch(o=>"failed")))return(0,p.cB)("Error rejecting in locker booking");(0,p.t5)(`Rejected locker booking for ${t.user_name} on ${(0,N.Z)(t.date,"MMM do")}.`),t.approved=!1,t.rejected=!0})()}giveAccess(t){var n=this;return(0,u.Z)(function*(){const o=yield(0,m.km)(new m.$N({...t,access:!0})).toPromise().catch(i=>"failed");if("failed"===o)return(0,p.cB)("Error giving building access booking host");(0,p.t5)(`Successfully gave building access to ${t.user_name} for locker booking.`),n._locker_bookings=[...n._locker_bookings,o]})()}rejectAllLockers(){var t=this;return(0,u.Z)(function*(){const n=t._locker_bookings||[];if(n.length<=0)return(0,p.QD)("No lockers to reject for the selected date");const o=yield(0,p._5)({title:"Cancel all locker bookings",content:"Are you sure you want to cancel all bookings for the selected date?",icon:{type:"icon",class:"material-icons",content:"delete"}},t._dialog);"done"===o.reason&&(o.loading("Rejecting all lockers for selected date..."),yield Promise.all(n.map(i=>(0,m.FP)(i.id).toPromise())),(0,p.t5)("Successfully rejected all locker bookings for selected date."),o.close())})()}static#e=this.\u0275fac=function(n){return new(n||s)(e.LFG(b.w7),e.LFG(T.uw))};static#t=this.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var oe=a(2349),O=a(4025),ne=a(8419),B=a(1418),Q=a(7232),P=a(5484),D=a(7338),y=a(4170),R=a(8525),k=a(3680),C=a(2596),A=a(4888);function se(s,l){1&s&&(e.TgZ(0,"mat-option",9),e._uU(1,"All Levels"),e.qZA())}function ie(s,l){if(1&s&&(e.TgZ(0,"mat-option",10),e._uU(1),e.qZA()),2&s){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.display_name||t.name," ")}}function re(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"button",11),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.manageRestrictions())}),e.TgZ(1,"app-icon"),e._uU(2,"lock_open"),e.qZA()()}}let ae=(()=>{class s extends p.cx{constructor(t,n,o,i,r){super(),this._lockers=t,this._org=n,this._route=o,this._router=i,this._dialog=r,this.levels=this._org.active_levels,this.filters=this._lockers.filters,this.manage=!1,this.is_map=!1,this.setDate=c=>this._lockers.setFilters({date:c}),this.setFilters=c=>this._lockers.setFilters(c),this.updateZones=c=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:c.join(",")},queryParamsHandling:"merge"}),this._lockers.setFilters({zones:c})}}ngOnInit(){var t=this;return(0,u.Z)(function*(){yield t._org.initialised.pipe((0,ne.P)(n=>n)).toPromise(),t.subscription("route.query",t._route.queryParamMap.subscribe(n=>{if(n.has("zone_ids")){const o=n.get("zone_ids").split(",");if(o.length){t.updateZones(o);const i=t._org.levelWithID(o);if(!i)return;t._org.building=t._org.buildings.find(r=>r.id===i.parent_id)}}n.has("date")&&t.setDate(new Date(+n.get("date"))),n.has("approve")?t.approve(n.get("approve")):n.has("reject")&&t.reject(n.get("reject")),t.manage=t._router.url?.includes("manage"),t.is_map=t._router.url?.includes("map")})),t.subscription("router.events",t._router.events.subscribe(()=>{t.manage=t._router.url?.includes("manage"),t.is_map=t._router.url?.includes("map")})),t.subscription("levels",t._org.active_levels.subscribe(function(){var n=(0,u.Z)(function*(o){const r=(yield t.filters.pipe((0,B.q)(1)).toPromise())?.zones?.filter(c=>o.find(_=>_.id===c)||"All"===c)||[];!r.length&&o.length&&r.push(o[0].id),t.updateZones(r)});return function(o){return n.apply(this,arguments)}}())),t.manage=t._router.url?.includes("manage"),t.is_map=t._router.url?.includes("map")})()}manageRestrictions(){this._dialog.open(Q.i,{data:{type:"locker"}})}approve(t){var n=this;return(0,u.Z)(function*(){const o=yield(0,m.Fo)(t).toPromise();o&&n._lockers.approveLocker(o)})()}reject(t){var n=this;return(0,u.Z)(function*(){const o=yield(0,m.Fo)(t).toPromise();o&&n._lockers.rejectLocker(o)})()}static#e=this.\u0275fac=function(n){return new(n||s)(e.Y36(x),e.Y36(b.w7),e.Y36(g.gz),e.Y36(g.F0),e.Y36(T.uw))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["lockers-topbar"]],features:[e.qOj],decls:13,vars:13,consts:[[1,"flex","items-center","bg-base-100","h-20","px-4","border-b","border-base-200","space-x-2"],["appearance","outline"],["placeholder","All Levels",3,"ngModel","ngModelChange"],["value","All",4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],["btn","","icon","","matRipple","","class","bg-primary mx-2 text-white rounded","matTooltip","Locker Restrictions",3,"click",4,"ngIf"],[1,"flex-1","w-2"],[1,"mr-2",3,"model","modelChange"],[3,"dateChange"],["value","All"],[3,"value"],["btn","","icon","","matRipple","","matTooltip","Locker Restrictions",1,"bg-primary","mx-2","text-white","rounded",3,"click"]],template:function(n,o){if(1&n&&(e.TgZ(0,"div",0)(1,"mat-form-field",1)(2,"mat-select",2),e.NdJ("ngModelChange",function(r){return o.updateZones([r])}),e.ALo(3,"async"),e.ALo(4,"async"),e.YNc(5,se,2,0,"mat-option",3)(6,ie,2,2,"mat-option",4),e.ALo(7,"async"),e.qZA()(),e.YNc(8,re,3,0,"button",5),e._UZ(9,"div",6),e.TgZ(10,"searchbar",7),e.NdJ("modelChange",function(r){return o.setFilters({search:r})}),e.ALo(11,"async"),e.qZA(),e.TgZ(12,"date-options",8),e.NdJ("dateChange",function(r){return o.setDate(r)}),e.qZA()()),2&n){let i;e.xp6(2),e.Q6J("ngModel",e.lcZ(3,5,o.filters).zones?e.lcZ(4,7,o.filters).zones[0]:"All"),e.xp6(3),e.Q6J("ngIf",!o.is_map),e.xp6(1),e.Q6J("ngForOf",e.lcZ(7,9,o.levels)),e.xp6(2),e.Q6J("ngIf",o.manage),e.xp6(2),e.Q6J("model",null==(i=e.lcZ(11,11,o.filters))?null:i.search)}},dependencies:[d.sg,d.O5,h.JJ,h.On,P.E,D.U,y.KE,R.gD,k.ey,C.gM,k.wG,A.o,d.Ov],styles:["mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}"]})}return s})();const le=["app-lockers",""];function ce(s,l){1&s&&e._UZ(0,"mat-progress-bar",7)}const pe=()=>["/book","lockers","events"],ue=()=>["/book","lockers","map"],de=()=>["/book","lockers","manage"];let ge=(()=>{class s extends p.cx{constructor(t,n){super(),this._state=t,this._router=n,this.loading=this._state.loading}ngOnInit(){this._state.refresh(),this.subscription("router.events",this._router.events.subscribe(n=>{if(n instanceof g.m2){const o=this._router.url?.split("/")||[""];this.path=o[t.length-1].split("?")[0]}}));const t=this._router.url?.split("/")||[""];this.path=t[t.length-1].split("?")[0]}ngOnDestroy(){super.ngOnDestroy()}static#e=this.\u0275fac=function(n){return new(n||s)(e.Y36(x),e.Y36(g.F0))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["","app-lockers",""]],features:[e.qOj],attrs:le,decls:15,vars:12,consts:[[1,"flex-1","relative","w-1/2","flex","flex-col","bg-base-200","overflow-hidden"],[1,"w-full"],[1,"dark"],["mat-tab-nav-bar",""],["mat-tab-link","","queryParamsHandling","merge",3,"routerLink","active"],[1,"flex-1","h-1/2","w-full","relative","overflow-auto"],["class","w-full","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"w-full"]],template:function(n,o){1&n&&(e._UZ(0,"sidebar"),e.TgZ(1,"main",0),e._UZ(2,"lockers-topbar",1),e.TgZ(3,"div",2)(4,"nav",3)(5,"a",4),e._uU(6," Bookings "),e.qZA(),e.TgZ(7,"a",4),e._uU(8," Map View "),e.qZA(),e.TgZ(9,"a",4),e._uU(10," Manage Lockers "),e.qZA()()(),e.TgZ(11,"div",5),e._UZ(12,"router-outlet"),e.qZA(),e.YNc(13,ce,1,0,"mat-progress-bar",6),e.ALo(14,"async"),e.qZA()),2&n&&(e.xp6(5),e.Q6J("routerLink",e.DdM(9,pe))("active","events"===o.path),e.xp6(2),e.Q6J("routerLink",e.DdM(10,ue))("active","map"===o.path),e.xp6(2),e.Q6J("routerLink",e.DdM(11,de))("active","manage"===o.path),e.xp6(4),e.Q6J("ngIf",e.lcZ(14,7,o.loading)))},dependencies:[d.O5,Z.BU,Z.Nj,oe.k,O.pW,g.lC,g.rH,ae,d.Ov],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%}"]})}return s})();var L=a(7988),me=a(7442);function _e(s,l){if(1&s&&(e.TgZ(0,"div",13)(1,"div",14),e._uU(2),e.ALo(3,"date"),e.qZA(),e.TgZ(4,"div",15),e._uU(5),e.ALo(6,"date"),e.qZA()()),2&s){const t=l.data;e.xp6(2),e.Oqu(e.xi3(3,2,t,"MMM")),e.xp6(3),e.Oqu(e.xi3(6,5,t,"dd"))}}function he(s,l){if(1&s&&(e.ynx(0),e._uU(1),e.ALo(2,"date"),e.ALo(3,"date"),e.BQk()),2&s){const t=e.oxw(2).row,n=e.oxw();e.xp6(1),e.AsE(" ",e.xi3(2,2,t.date,n.time_format)," \u2013 ",e.xi3(3,5,t.end,n.time_format)," ")}}function fe(s,l){1&s&&(e.ynx(0),e._uU(1,"All Day"),e.BQk())}function ve(s,l){if(1&s&&(e.ynx(0),e.YNc(1,he,4,8,"ng-container",16)(2,fe,2,0,"ng-container",16),e.BQk()),2&s){const t=e.oxw().row;e.xp6(1),e.Q6J("ngIf",!t.all_day),e.xp6(1),e.Q6J("ngIf",t.all_day)}}function ke(s,l){1&s&&(e.ynx(0),e.TgZ(1,"div",17),e._uU(2," Expired "),e.qZA(),e.BQk())}function xe(s,l){if(1&s&&e.YNc(0,ve,3,2,"ng-container",16)(1,ke,3,0,"ng-container",16),2&s){const t=l.row;e.Q6J("ngIf","declined"!==t.status&&!t.deleted),e.xp6(1),e.Q6J("ngIf","declined"===t.status||t.deleted)}}function Ze(s,l){if(1&s&&e._uU(0),2&s){const t=l.row;e.hij(" ",t.asset_name||t.asset_id," ")}}function be(s,l){if(1&s&&(e.TgZ(0,"div",21),e._uU(1),e.qZA()),2&s){const t=e.oxw().row;e.xp6(1),e.hij(" ",t.user_email," ")}}function Te(s,l){if(1&s&&(e.TgZ(0,"div",18)(1,"div",19),e._uU(2),e.qZA(),e.YNc(3,be,2,1,"div",20),e.qZA()),2&s){const t=l.row;e.xp6(2),e.hij(" ",t.user_name||t.user_email||t.booked_by_name||t.booked_by_email," "),e.xp6(1),e.Q6J("ngIf",t.user_name)}}function ye(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"button",22)(1,"div",23),e._uU(2),e.qZA(),e.TgZ(3,"app-icon",15),e._uU(4,"arrow_drop_down"),e.qZA()(),e.TgZ(5,"mat-menu",null,24)(7,"button",12),e.NdJ("click",function(){const i=e.CHM(t).row,r=e.oxw();return e.KtG(r.approve(i))}),e.TgZ(8,"div",25)(9,"app-icon",26),e._uU(10,"event_available"),e.qZA(),e.TgZ(11,"div"),e._uU(12,"Approve Locker"),e.qZA()()(),e.TgZ(13,"button",12),e.NdJ("click",function(){const i=e.CHM(t).row,r=e.oxw();return e.KtG(r.reject(i))}),e.TgZ(14,"div",25)(15,"app-icon",26),e._uU(16,"event_busy"),e.qZA(),e.TgZ(17,"div"),e._uU(18,"Decline Locker"),e.qZA()()()()}if(2&s){const t=l.row,n=e.MAs(6);e.ekj("bg-success",t.approved)("text-white",t.approved||t.rejected)("bg-warning",!t.approved&&!t.rejected)("text-black",!t.approved&&!t.rejected)("bg-error",t.rejected),e.Q6J("matMenuTriggerFor",n),e.xp6(2),e.hij(" ",t.approved?"Approved":t.rejected?"Declined":"Tentative"," ")}}function Ce(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"button",27)(1,"div",23),e._uU(2),e.qZA(),e.TgZ(3,"app-icon",15),e._uU(4,"arrow_drop_down"),e.qZA()(),e.TgZ(5,"mat-menu",null,28)(7,"button",12),e.NdJ("click",function(){const i=e.CHM(t).row,r=e.oxw();return e.KtG(r.checkin(i,!0))}),e.TgZ(8,"div",25)(9,"app-icon",26),e._uU(10,"check"),e.qZA(),e.TgZ(11,"div"),e._uU(12,"Check-in"),e.qZA()()(),e.TgZ(13,"button",12),e.NdJ("click",function(){const i=e.CHM(t).row,r=e.oxw();return e.KtG(r.checkin(i,!1))}),e.TgZ(14,"div",25)(15,"app-icon",26),e._uU(16,"cancel"),e.qZA(),e.TgZ(17,"div"),e._uU(18,"Check-out"),e.qZA()()()()}if(2&s){const t=l.data,n=l.row,o=e.MAs(6);e.ekj("bg-neutral-600",!t)("bg-success",t)("opacity-30","ended"===n.status),e.Q6J("matMenuTriggerFor",o)("disabled","ended"===n.status)("matTooltip","ended"===n.status?"Locker booking has ended":"Check-in or check-out locker"),e.xp6(2),e.Oqu(t?"Yes":"No")}}function Ae(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"button",29),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.loadMore())}),e._uU(1," Load More "),e.qZA()}}const Le=()=>["date","period","user_name","group","asset_name","approver_name","status","checked_in"],we=()=>["Date","Period","Person","Group","Locker","Approver","Status","Checked In"],Me=()=>["4r","10r","flex","10r","10r","10r","8r","7r"],Ue=(s,l,t,n,o,i,r)=>({user_name:s,asset_name:l,date:t,period:n,status:o,checked_in:i,access:r});let z=(()=>{class s{get time_format(){return this._settings.time_format}constructor(t,n){var o=this;this._state=t,this._settings=n,this.filters=this._state.filters,this.has_more_pages=this._state.has_more_pages,this.bookings=this._state.bookings.pipe((0,v.U)(i=>i.map(r=>({...r,end:r.date+60*r.duration*1e3})))),this.rejectAll=()=>this._state.rejectAllLockers(),this.loadMore=()=>this._state.nextPage(),this.checkin=(i,r)=>this.runMethod("checkin",(0,u.Z)(function*(){yield o._state.checkinLocker(i,r),i.checked_in=r??!0})),this.approve=i=>this.runMethod("approve",(0,u.Z)(function*(){return o._state.approveLocker(i)})),this.reject=i=>this.runMethod("reject",(0,u.Z)(function*(){return o._state.rejectLocker(i)}))}runMethod(t,n){var o=this;return(0,u.Z)(function*(){o.loading=t,yield n().catch(i=>null),o.loading=""})()}static#e=this.\u0275fac=function(n){return new(n||s)(e.Y36(x),e.Y36(p.gb))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["locker-bookings"]],decls:26,vars:26,consts:[[1,"w-full","h-4"],[1,"overflow-auto","h-full","w-full","px-4","pb-4"],[1,"min-w-[76rem]","block",3,"dataSource","filter","columns","display_column","column_size","template","empty"],["date_template",""],["period_template",""],["locker_template",""],["user_template",""],["status_template",""],["option_template",""],["btn","","matRipple","","class","absolute bottom-2 left-2 w-32 mx-auto my-4",3,"click",4,"ngIf"],["icon","","matRipple","",1,"absolute","bottom-2","right-2","bg-base-100","shadow",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"flex","flex-col","items-center","justify-center","w-full"],[1,"opacity-60"],[1,"text-xl"],[4,"ngIf"],[1,"text-xs","py-1","px-2","bg-error","rounded-2xl","text-white"],[1,"flex","flex-col","justify-center"],[1,"select-all"],["class","text-xs opacity-30 select-all",4,"ngIf"],[1,"text-xs","opacity-30","select-all"],["matRipple","",1,"rounded-3xl","px-2","py-1","flex","items-center","space-x-2","capitalize",3,"matMenuTriggerFor"],[1,"ml-2"],["statusMenu","matMenu"],[1,"flex","items-center","space-x-2"],[1,"text-2xl"],["matRipple","",1,"rounded-3xl","px-2","py-1","text-white","flex","items-center","space-x-2",3,"matMenuTriggerFor","disabled","matTooltip"],["checkinMenu","matMenu"],["btn","","matRipple","",1,"absolute","bottom-2","left-2","w-32","mx-auto","my-4",3,"click"]],template:function(n,o){if(1&n&&(e._UZ(0,"div",0),e.TgZ(1,"div",1),e._UZ(2,"custom-table",2),e.ALo(3,"async"),e.ALo(4,"async"),e.YNc(5,_e,7,8,"ng-template",null,3,e.W1O)(7,xe,2,2,"ng-template",null,4,e.W1O)(9,Ze,1,1,"ng-template",null,5,e.W1O)(11,Te,4,2,"ng-template",null,6,e.W1O)(13,ye,19,12,"ng-template",null,7,e.W1O)(15,Ce,19,10,"ng-template",null,8,e.W1O),e.qZA(),e.YNc(17,Ae,2,0,"button",9),e.ALo(18,"async"),e.TgZ(19,"button",10)(20,"app-icon"),e._uU(21,"more_vert"),e.qZA()(),e.TgZ(22,"mat-menu",null,11)(24,"button",12),e.NdJ("click",function(){return o.rejectAll()}),e._uU(25,"Reject All"),e.qZA()()),2&n){const i=e.MAs(6),r=e.MAs(8),c=e.MAs(10),_=e.MAs(12),f=e.MAs(14),I=e.MAs(16),Ye=e.MAs(23);let Y,E;e.xp6(2),e.Q6J("dataSource",o.bookings)("filter",null==(Y=e.lcZ(3,9,o.filters))?null:Y.search)("columns",e.DdM(15,Le))("display_column",e.DdM(16,we))("column_size",e.DdM(17,Me))("template",e.Hh0(18,Ue,_,c,i,r,f,I,I))("empty",null!=(E=e.lcZ(4,11,o.filters))&&E.search?"No matching locker bookings":"There are no locker booking for the currently selected date."),e.xp6(15),e.Q6J("ngIf",!o.loading&&e.lcZ(18,13,o.has_more_pages)),e.xp6(2),e.Q6J("matMenuTriggerFor",Ye)}},dependencies:[d.O5,L.VK,L.OP,L.p6,C.gM,k.wG,A.o,me.C,d.Ov,d.uU],styles:["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;height:100%;width:100%}"]})}return s})();var je=a(5986),Fe=a(8582),Je=a(9304),Ne=a(3005),Oe=a(9842);const Be=["app-new-lockers",""];function Qe(s,l){if(1&s&&(e.TgZ(0,"mat-option",15),e._uU(1),e.qZA()),2&s){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.display_name||t.name," ")}}function Pe(s,l){if(1&s){const t=e.EpF();e.ynx(0),e.TgZ(1,"date-options",16),e.NdJ("dateChange",function(o){e.CHM(t);const i=e.oxw();return e.KtG(i.setDate(o))}),e.qZA(),e.TgZ(2,"button",17),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.refresh())}),e.ALo(3,"async"),e.TgZ(4,"app-icon"),e._uU(5,"refresh"),e.qZA()(),e.BQk()}if(2&s){const t=e.oxw();e.xp6(2),e.Q6J("disabled",e.lcZ(3,1,t.loading))}}function De(s,l){if(1&s){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",18),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.manageRestrictions())}),e.TgZ(2,"app-icon"),e._uU(3,"lock_open"),e.qZA()(),e.BQk()}}function Re(s,l){1&s&&e._UZ(0,"mat-progress-bar",19)}const ze=[{path:"new",component:(()=>{class s extends p.cx{constructor(t,n,o,i,r){super(),this._state=t,this._router=n,this._route=o,this._dialog=i,this._org=r,this.loading=this._state.loading,this.filters=this._state.filters,this.levels=this._org.active_levels,this.setDate=c=>this._state.setFilters({date:c}),this.setFilters=c=>this._state.setFilters(c),this.refresh=()=>this._state.refresh(),this.updateZones=c=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:c.join(",")},queryParamsHandling:"merge"}),this._state.setFilters({zones:c})}}ngOnInit(){var t=this;this._state.refresh(),this.subscription("router.events",this._router.events.subscribe(o=>{if(o instanceof g.m2){const i=this._router.url?.split("/")||[""];this.path=i[n.length-1].split("?")[0],console.log("Path:",this.path)}})),this.subscription("levels",this._org.active_levels.subscribe(function(){var o=(0,u.Z)(function*(i){const c=(yield t.filters.pipe((0,B.q)(1)).toPromise())?.zones?.filter(_=>i.find(f=>f.id===_)||"All"===_)||[];!c.length&&i.length&&c.push(i[0].id),t.updateZones(c)});return function(i){return o.apply(this,arguments)}}()));const n=this._router.url?.split("/")||[""];this.path=n[n.length-1].split("?")[0]}ngOnDestroy(){super.ngOnDestroy()}manageRestrictions(){this._dialog.open(Q.i,{data:{type:"locker"}})}static#e=this.\u0275fac=function(n){return new(n||s)(e.Y36(x),e.Y36(g.F0),e.Y36(g.gz),e.Y36(T.uw),e.Y36(b.w7))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["","app-new-lockers",""]],features:[e.qOj],attrs:Be,decls:24,vars:14,consts:[[1,"print:hidden"],[1,"flex","flex-1","h-px","print:hidden"],[1,"flex","flex-col","flex-1","w-1/2","h-full"],[1,"flex","items-center","w-full","py-4","px-8","space-x-2"],[1,"text-2xl","font-medium"],[1,"flex-1","w-px"],[1,"mr-2",3,"model","modelChange"],[1,"w-full","flex","items-center","px-8","space-x-2"],["appearance","outline",1,"h-[3.5rem]"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"border-l","h-full","!ml-8","!mr-4"],[4,"ngIf"],[1,"flex-1","h-1/2","w-full","relative","overflow-auto","px-4"],["class","w-full","mode","indeterminate",4,"ngIf"],[3,"value"],[3,"dateChange"],["btn","","icon","","matRipple","","matTooltip","Refresh List",1,"ml-2","rounded","border","border-base-200",3,"disabled","click"],["btn","","icon","","matRipple","","matTooltip","Locker Restrictions",1,"bg-primary","text-white","rounded",3,"click"],["mode","indeterminate",1,"w-full"]],template:function(n,o){if(1&n&&(e._UZ(0,"app-topbar",0),e.TgZ(1,"div",1),e._UZ(2,"app-sidebar"),e.TgZ(3,"main",2)(4,"div",3)(5,"h2",4),e._uU(6,"Locker Bookings"),e.qZA(),e._UZ(7,"div",5),e.TgZ(8,"searchbar",6),e.NdJ("modelChange",function(r){return o.setFilters({search:r})}),e.ALo(9,"async"),e.qZA()(),e.TgZ(10,"div",7)(11,"mat-form-field",8)(12,"mat-select",9),e.NdJ("ngModelChange",function(r){return o.updateZones(r)}),e.ALo(13,"async"),e.YNc(14,Qe,2,2,"mat-option",10),e.ALo(15,"async"),e.qZA()(),e._UZ(16,"div",11)(17,"div",5),e.YNc(18,Pe,6,3,"ng-container",12)(19,De,4,0,"ng-container",12),e.qZA(),e.TgZ(20,"div",13),e._UZ(21,"router-outlet"),e.qZA(),e.YNc(22,Re,1,0,"mat-progress-bar",14),e.ALo(23,"async"),e.qZA()()),2&n){let i,r;e.xp6(8),e.Q6J("model",null==(i=e.lcZ(9,6,o.filters))?null:i.search),e.xp6(4),e.Q6J("ngModel",null==(r=e.lcZ(13,8,o.filters))?null:r.zones),e.xp6(2),e.Q6J("ngForOf",e.lcZ(15,10,o.levels)),e.xp6(4),e.Q6J("ngIf","events"===o.path),e.xp6(1),e.Q6J("ngIf","manage"===o.path),e.xp6(3),e.Q6J("ngIf",e.lcZ(23,12,o.loading)&&"events"===o.path)}},dependencies:[d.sg,d.O5,h.JJ,h.On,P.E,D.U,Ne.O,Oe.u,y.KE,R.gD,k.ey,C.gM,O.pW,k.wG,A.o,g.lC,d.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--b1)}"]})}return s})(),children:[{path:"events",component:z},{path:"**",redirectTo:"events"}]},{path:"",component:ge,children:[{path:"events",component:z},{path:"**",redirectTo:"events"}]}];let Ie=(()=>{class s{static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275mod=e.oAB({type:s});static#o=this.\u0275inj=e.cJS({imports:[d.ez,h.u5,Z.Nh,h.UX,H.v,$.P2,m.EP,Je.W9,G.Fk,y.lN,je.p9,Fe.c,g.Bz.forChild(ze)]})}return s})()}}]);