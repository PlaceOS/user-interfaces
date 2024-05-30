"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_lockers_lockers_module_ts"],{79746:(ze,L,r)=>{r.r(L),r.d(L,{LockersModule:()=>Ue});var d=r(60316),f=r(34456),_=r(26842),O=r(53804),j=r(38223),z=r(18823),P=r(40363),p=r(82333),g=r(89204),I=r(90521),M=r(33119),E=r(42175),J=r(71536),k=r(35443),Z=r(19803),w=r(66e3),H=r(6109),W=r(71963),K=r(22508),Q=r(7841),$=r(67450),q=r(27419),ee=r(13264),G=r(83866),h=r(57915),V=r(12185),e=r(68559),F=r(12587);let x=(()=>{class s extends p.Tv{nextPage(){this._call_next_page.next(`NEXT_${Date.now()}`)}constructor(t,n,o){super(),this._org=t,this._dialog=n,this._settings=o,this._filters=new I.t({}),this._locker_bookings=[],this._loading=new I.t(!1),this.levels=this._org.level_list.pipe((0,k.T)(i=>{if(!this._settings.get("app.use_region")){const a=this._org.buildingsForRegion(),c=a.map(u=>u.id),m=i.filter(u=>c.includes(u.parent_id));return m.map(u=>({...u,display_name:`${a.find(v=>v.id===u.parent_id)?.display_name} - ${u.display_name}`})),m}return i.filter(a=>a.parent_id===this._org.building.id)})),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this._next_page=new M.B7,this._call_next_page=new M.B7,this._all_zones_keys=["All",-1,"-1"],this.setup_paging=(0,E.zV)([this._filters,this._org.initialised]).pipe((0,Z.B)(500),(0,w.M)(([i,a])=>{if(!a)return;const c=i.date||Date.now(),m=!i.zones||i.zones.some(u=>this._all_zones_keys.includes(u))?this._settings.get("app.use_region")?[this._org.region.id]:[this._org.building.id]:i.zones;this._next_page.next(()=>(0,h.WE)({period_start:(0,$.A)((0,q.A)(c)),period_end:(0,$.A)((0,ee.A)(c)),type:"locker",zones:m.join(","),include_checked_out:!0})),this._call_next_page.next(`RESET_${Date.now()}`)})),this.paged_bookings=(0,E.zV)([this._next_page,this._call_next_page]).pipe((0,H.F)((i,a)=>i[1]===a[1]),(0,W.n)(([i,a])=>(this._loading.next(!0),i?a.includes("RESET")?i().pipe((0,k.T)(c=>({...c,reset:!0}))):i().pipe((0,k.T)(c=>({...c,reset:!1}))):(0,J.of)({data:[],total:0,next:null,reset:a.includes("RESET")}))),(0,K.S)((i,{data:a,total:c,next:m,reset:u})=>{const v=a;return this._next_page.next(m),u?{list:v,total:c}:{list:[...i.list,...v],total:c}},{list:[],total:0}),(0,w.M)(i=>this._loading.next(!1)),(0,Q.t)(1)),this.has_more_pages=this.paged_bookings.pipe((0,k.T)(i=>i.list.length<i.total)),this.bookings=this.paged_bookings.pipe((0,k.T)(i=>i.list)),this.setup_paging.subscribe()}setFilters(t){t.zones?.includes("All")?t.zones=["All",...this._org.levelsForBuilding(this._org.building).map(n=>n.id)]:t.zones&&this._filters.getValue()?.zones?.includes("All")&&(t.zones=[]),this._filters.next({...this._filters.getValue(),...t})}refresh(){this._loading.next(!0),this.timeout("poll",()=>this.setFilters(this._filters.getValue()))}checkinLocker(t,n=!0){return(0,g.A)(function*(){console.log("Check-in:",t);const o=yield(0,h.Z$)(t.id,n??!0).toPromise().catch(i=>({failed:!0,error:i}));if(o.failed)throw(0,p.UG)(o.error?`Error: ${o.error}`:`Error checking ${n?"in":"out"} locker booking`),o.error;(0,p.VX)(`Checked ${n?"in":"out"} ${t.user_name}.`)})()}approveLocker(t){return(0,g.A)(function*(){if("failed"===(yield(0,h.DD)(t.id).toPromise().catch(o=>"failed")))return(0,p.UG)("Error approving in locker booking");(0,p.VX)(`Approved locker booking for ${t.user_name} on ${(0,G.A)(t.date,"MMM do")}.`),t.approved=!0,t.rejected=!1})()}rejectLocker(t){return(0,g.A)(function*(){if("failed"===(yield(0,h.vB)(t.id).toPromise().catch(o=>"failed")))return(0,p.UG)("Error rejecting in locker booking");(0,p.VX)(`Rejected locker booking for ${t.user_name} on ${(0,G.A)(t.date,"MMM do")}.`),t.approved=!1,t.rejected=!0})()}giveAccess(t){var n=this;return(0,g.A)(function*(){const o=yield(0,h.X0)(new h.Qr({...t,access:!0})).toPromise().catch(i=>"failed");if("failed"===o)return(0,p.UG)("Error giving building access booking host");(0,p.VX)(`Successfully gave building access to ${t.user_name} for locker booking.`),n._locker_bookings=[...n._locker_bookings,o]})()}rejectAllLockers(){var t=this;return(0,g.A)(function*(){const n=t._locker_bookings||[];if(n.length<=0)return(0,p.uA)("No lockers to reject for the selected date");const o=yield(0,p.GE)({title:"Cancel all locker bookings",content:"Are you sure you want to cancel all bookings for the selected date?",icon:{type:"icon",class:"material-icons",content:"delete"}},t._dialog);"done"===o.reason&&(o.loading("Rejecting all lockers for selected date..."),yield Promise.all(n.map(i=>(0,h.vB)(i.id).toPromise())),(0,p.VX)("Successfully rejected all locker bookings for selected date."),o.close())})()}static#e=this.\u0275fac=function(n){return new(n||s)(e.KVO(V.yb),e.KVO(F.bZ),e.KVO(p.h$))};static#t=this.\u0275prov=e.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var te=r(74605),B=r(26354),ne=r(57871),X=r(46864),N=r(94584),A=r(12236),y=r(24950),D=r(25175),b=r(85060),T=r(80640),C=r(69434),S=r(56062);function oe(s,l){if(1&s&&(e.j41(0,"div",11),e.EFF(1),e.nI1(2,"building"),e.j41(3,"span",12),e.EFF(4," - "),e.k0s()()),2&s){let t;const n=e.XpG().$implicit;e.R7$(),e.SpI(" ",null==(t=e.bMT(2,1,n.parent_id))?null:t.display_name," ")}}function se(s,l){if(1&s&&(e.j41(0,"mat-option",8)(1,"div",9),e.DNE(2,oe,5,3,"div",10),e.j41(3,"div"),e.EFF(4),e.k0s()()()),2&s){const t=l.$implicit,n=e.XpG();e.Y8G("value",t.id),e.R7$(2),e.Y8G("ngIf",n.use_region),e.R7$(2),e.JRh(t.display_name||t.name)}}function ie(s,l){if(1&s){const t=e.RV6();e.j41(0,"button",13),e.bIt("click",function(){e.eBV(t);const o=e.XpG();return e.Njj(o.manageRestrictions())}),e.j41(1,"app-icon"),e.EFF(2,"lock_open"),e.k0s()()}}let re=(()=>{class s extends p.Tv{get use_region(){return this._settings.get("app.use_region")}constructor(t,n,o,i,a,c){super(),this._lockers=t,this._org=n,this._route=o,this._router=i,this._dialog=a,this._settings=c,this.levels=this._lockers.levels,this.filters=this._lockers.filters,this.manage=!1,this.is_map=!1,this.setDate=m=>this._lockers.setFilters({date:m}),this.setFilters=m=>this._lockers.setFilters(m),this.updateZones=m=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:m.join(",")}}),this._lockers.setFilters({zones:m})}}ngOnInit(){var t=this;return(0,g.A)(function*(){yield t._org.initialised.pipe((0,ne.$)(n=>n)).toPromise(),t.subscription("route.query",t._route.queryParamMap.subscribe(n=>{if(n.has("zone_ids")){const o=n.get("zone_ids").split(",");if(o.length){t.updateZones(o);const i=t._org.levelWithID(o);if(!i)return;t._org.building=t._org.buildings.find(a=>a.id===i.parent_id)}}n.has("date")&&t.setDate(new Date(+n.get("date"))),n.has("approve")?t.approve(n.get("approve")):n.has("reject")&&t.reject(n.get("reject")),t.manage=t._router.url?.includes("manage"),t.is_map=t._router.url?.includes("map")})),t.subscription("router.events",t._router.events.subscribe(()=>{t.manage=t._router.url?.includes("manage"),t.is_map=t._router.url?.includes("map")})),t.manage=t._router.url?.includes("manage"),t.is_map=t._router.url?.includes("map")})()}manageRestrictions(){this._dialog.open(X.F,{data:{type:"locker"}})}approve(t){var n=this;return(0,g.A)(function*(){const o=yield(0,h.DO)(t).toPromise();o&&n._lockers.approveLocker(o)})()}reject(t){var n=this;return(0,g.A)(function*(){const o=yield(0,h.DO)(t).toPromise();o&&n._lockers.rejectLocker(o)})()}static#e=this.\u0275fac=function(n){return new(n||s)(e.rXU(x),e.rXU(V.yb),e.rXU(_.nX),e.rXU(_.Ix),e.rXU(F.bZ),e.rXU(p.h$))};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["lockers-topbar"]],features:[e.Vt3],decls:11,vars:10,consts:[[1,"flex","items-center","bg-base-100","h-20","px-4","border-b","border-base-200","space-x-2"],["appearance","outline",1,"w-60"],["placeholder","All Levels","multiple","",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],["btn","","icon","","matRipple","","class","bg-primary mx-2 text-white rounded","matTooltip","Locker Restrictions",3,"click",4,"ngIf"],[1,"flex-1","w-2"],[1,"mr-2",3,"modelChange","model"],[3,"dateChange"],[3,"value"],[1,"flex","flex-col-reverse"],["class","text-xs opacity-30",4,"ngIf"],[1,"text-xs","opacity-30"],[1,"opacity-0"],["btn","","icon","","matRipple","","matTooltip","Locker Restrictions",1,"bg-primary","mx-2","text-white","rounded",3,"click"]],template:function(n,o){if(1&n&&(e.j41(0,"div",0)(1,"mat-form-field",1)(2,"mat-select",2),e.nI1(3,"async"),e.bIt("ngModelChange",function(a){return o.updateZones(a)}),e.DNE(4,se,5,3,"mat-option",3),e.nI1(5,"async"),e.k0s()(),e.DNE(6,ie,3,0,"button",4),e.nrm(7,"div",5),e.j41(8,"searchbar",6),e.nI1(9,"async"),e.bIt("modelChange",function(a){return o.setFilters({search:a})}),e.k0s(),e.j41(10,"date-options",7),e.bIt("dateChange",function(a){return o.setDate(a)}),e.k0s()()),2&n){let i,a;e.R7$(2),e.Y8G("ngModel",null==(i=e.bMT(3,4,o.filters))?null:i.zones),e.R7$(2),e.Y8G("ngForOf",e.bMT(5,6,o.levels)),e.R7$(2),e.Y8G("ngIf",o.manage),e.R7$(2),e.Y8G("model",null==(a=e.bMT(9,8,o.filters))?null:a.search)}},dependencies:[d.Sq,d.bT,f.BC,f.vS,N.o,A.x,y.rl,D.VO,b.wT,T.oV,b.r6,C.R,d.Jj,S.b],styles:["mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n\n/*# sourceMappingURL=locker-topbar.component.ts-angular-inline--130.css.map*/"]})}return s})();const ae=["app-lockers",""],le=()=>["/book","lockers","events"],ce=()=>["/book","lockers","map"],pe=()=>["/book","lockers","manage"];function me(s,l){1&s&&e.nrm(0,"mat-progress-bar",7)}let ue=(()=>{class s extends p.Tv{constructor(t,n){super(),this._state=t,this._router=n,this.loading=this._state.loading}ngOnInit(){this._state.refresh(),this.subscription("router.events",this._router.events.subscribe(n=>{if(n instanceof _.wF){const o=this._router.url?.split("/")||[""];this.path=o[t.length-1].split("?")[0]}}));const t=this._router.url?.split("/")||[""];this.path=t[t.length-1].split("?")[0]}ngOnDestroy(){super.ngOnDestroy()}static#e=this.\u0275fac=function(n){return new(n||s)(e.rXU(x),e.rXU(_.Ix))};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["","app-lockers",""]],features:[e.Vt3],attrs:ae,decls:15,vars:12,consts:[[1,"flex-1","relative","w-1/2","flex","flex-col","bg-base-200","overflow-hidden"],[1,"w-full"],[1,"dark"],["mat-tab-nav-bar",""],["mat-tab-link","","queryParamsHandling","merge",3,"routerLink","active"],[1,"flex-1","h-1/2","w-full","relative","overflow-auto"],["class","w-full","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"w-full"]],template:function(n,o){1&n&&(e.nrm(0,"sidebar"),e.j41(1,"main",0),e.nrm(2,"lockers-topbar",1),e.j41(3,"div",2)(4,"nav",3)(5,"a",4),e.EFF(6," Bookings "),e.k0s(),e.j41(7,"a",4),e.EFF(8," Map View "),e.k0s(),e.j41(9,"a",4),e.EFF(10," Manage Lockers "),e.k0s()()(),e.j41(11,"div",5),e.nrm(12,"router-outlet"),e.k0s(),e.DNE(13,me,1,0,"mat-progress-bar",6),e.nI1(14,"async"),e.k0s()),2&n&&(e.R7$(5),e.Y8G("routerLink",e.lJ4(9,le))("active","events"===o.path),e.R7$(2),e.Y8G("routerLink",e.lJ4(10,ce))("active","map"===o.path),e.R7$(2),e.Y8G("routerLink",e.lJ4(11,pe))("active","manage"===o.path),e.R7$(4),e.Y8G("ngIf",e.bMT(14,7,o.loading)))},dependencies:[d.bT,j.Bu,j.Ql,te.k,B.HM,_.n3,_.Wk,re,d.Jj],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%}\n\n/*# sourceMappingURL=lockers.component.ts-angular-inline--128.css.map*/"]})}return s})();var R=r(31034),de=r(12993);const ge=()=>["date","period","user_name","group","asset_name","approver_name","status","checked_in"],_e=()=>["Date","Period","Person","Group","Locker","Approver","Status","Checked In"],he=()=>["4r","10r","flex","10r","10r","10r","8r","7r"],fe=(s,l,t,n,o,i,a)=>({user_name:s,asset_name:l,date:t,period:n,status:o,checked_in:i,access:a});function ke(s,l){if(1&s&&(e.j41(0,"div",15)(1,"div",16),e.EFF(2),e.nI1(3,"date"),e.k0s(),e.j41(4,"div",17),e.EFF(5),e.nI1(6,"date"),e.k0s()()),2&s){const t=l.data;e.R7$(2),e.JRh(e.i5U(3,2,t,"MMM")),e.R7$(3),e.JRh(e.i5U(6,5,t,"dd"))}}function ve(s,l){if(1&s&&(e.qex(0),e.EFF(1),e.nI1(2,"date"),e.nI1(3,"date"),e.bVm()),2&s){const t=e.XpG(2).row,n=e.XpG();e.R7$(),e.Lme(" ",e.i5U(2,2,t.date,n.time_format)," \u2013 ",e.i5U(3,5,t.end,n.time_format)," ")}}function be(s,l){1&s&&(e.qex(0),e.EFF(1,"All Day"),e.bVm())}function xe(s,l){if(1&s&&(e.qex(0),e.DNE(1,ve,4,8,"ng-container",18)(2,be,2,0,"ng-container",18),e.bVm()),2&s){const t=e.XpG().row;e.R7$(),e.Y8G("ngIf",!t.all_day),e.R7$(),e.Y8G("ngIf",t.all_day)}}function je(s,l){1&s&&(e.qex(0),e.j41(1,"div",19),e.EFF(2," Expired "),e.k0s(),e.bVm())}function Fe(s,l){if(1&s&&e.DNE(0,xe,3,2,"ng-container",18)(1,je,3,0,"ng-container",18),2&s){const t=l.row;e.Y8G("ngIf","declined"!==t.status&&!t.deleted),e.R7$(),e.Y8G("ngIf","declined"===t.status||t.deleted)}}function ye(s,l){if(1&s&&e.EFF(0),2&s){const t=l.row;e.SpI(" ",t.asset_name||t.asset_id," ")}}function Te(s,l){if(1&s&&(e.j41(0,"div",23),e.EFF(1),e.k0s()),2&s){const t=e.XpG().row;e.R7$(),e.SpI(" ",t.user_email," ")}}function Ce(s,l){if(1&s&&(e.j41(0,"div",20)(1,"div",21),e.EFF(2),e.k0s(),e.DNE(3,Te,2,1,"div",22),e.k0s()),2&s){const t=l.row;e.R7$(2),e.SpI(" ",t.user_name||t.user_email||t.booked_by_name||t.booked_by_email," "),e.R7$(),e.Y8G("ngIf",t.user_name)}}function Re(s,l){if(1&s){const t=e.RV6();e.j41(0,"button",24)(1,"div",25),e.EFF(2),e.k0s(),e.j41(3,"app-icon",17),e.EFF(4,"arrow_drop_down"),e.k0s()(),e.j41(5,"mat-menu",null,7)(7,"button",14),e.bIt("click",function(){const o=e.eBV(t).row,i=e.XpG();return e.Njj(i.approve(o))}),e.j41(8,"div",26)(9,"app-icon",27),e.EFF(10,"event_available"),e.k0s(),e.j41(11,"div"),e.EFF(12,"Approve Locker"),e.k0s()()(),e.j41(13,"button",14),e.bIt("click",function(){const o=e.eBV(t).row,i=e.XpG();return e.Njj(i.reject(o))}),e.j41(14,"div",26)(15,"app-icon",27),e.EFF(16,"event_busy"),e.k0s(),e.j41(17,"div"),e.EFF(18,"Decline Locker"),e.k0s()()()()}if(2&s){const t=l.row,n=e.sdS(6);e.AVh("bg-success",t.approved)("text-white",t.approved||t.rejected)("bg-warning",!t.approved&&!t.rejected)("text-black",!t.approved&&!t.rejected)("bg-error",t.rejected),e.Y8G("matMenuTriggerFor",n),e.R7$(2),e.SpI(" ",t.approved?"Approved":t.rejected?"Declined":"Tentative"," ")}}function Le(s,l){if(1&s){const t=e.RV6();e.j41(0,"button",28)(1,"div",25),e.EFF(2),e.k0s(),e.j41(3,"app-icon",17),e.EFF(4,"arrow_drop_down"),e.k0s()(),e.j41(5,"mat-menu",null,8)(7,"button",14),e.bIt("click",function(){const o=e.eBV(t).row,i=e.XpG();return e.Njj(i.checkin(o,!0))}),e.j41(8,"div",26)(9,"app-icon",27),e.EFF(10,"check"),e.k0s(),e.j41(11,"div"),e.EFF(12,"Check-in"),e.k0s()()(),e.j41(13,"button",14),e.bIt("click",function(){const o=e.eBV(t).row,i=e.XpG();return e.Njj(i.checkin(o,!1))}),e.j41(14,"div",26)(15,"app-icon",27),e.EFF(16,"cancel"),e.k0s(),e.j41(17,"div"),e.EFF(18,"Check-out"),e.k0s()()()()}if(2&s){const t=l.data,n=l.row,o=e.sdS(6);e.AVh("bg-neutral-600",!t)("bg-success",t)("opacity-30","ended"===n.status),e.Y8G("matMenuTriggerFor",o)("disabled","ended"===n.status)("matTooltip","ended"===n.status?"Locker booking has ended":"Check-in or check-out locker"),e.R7$(2),e.JRh(t?"Yes":"No")}}function Ie(s,l){if(1&s){const t=e.RV6();e.j41(0,"button",29),e.bIt("click",function(){e.eBV(t);const o=e.XpG();return e.Njj(o.loadMore())}),e.EFF(1," Load More "),e.k0s()}}let U=(()=>{class s{get time_format(){return this._settings.time_format}constructor(t,n){var o=this;this._state=t,this._settings=n,this.filters=this._state.filters,this.has_more_pages=this._state.has_more_pages,this.bookings=this._state.bookings.pipe((0,k.T)(i=>i.map(a=>({...a,end:a.date+60*a.duration*1e3})))),this.rejectAll=()=>this._state.rejectAllLockers(),this.loadMore=()=>this._state.nextPage(),this.checkin=(i,a)=>this.runMethod("checkin",(0,g.A)(function*(){yield o._state.checkinLocker(i,a),i.checked_in=a??!0})),this.approve=i=>this.runMethod("approve",(0,g.A)(function*(){return o._state.approveLocker(i)})),this.reject=i=>this.runMethod("reject",(0,g.A)(function*(){return o._state.rejectLocker(i)}))}runMethod(t,n){var o=this;return(0,g.A)(function*(){o.loading=t,yield n().catch(i=>null),o.loading=""})()}static#e=this.\u0275fac=function(n){return new(n||s)(e.rXU(x),e.rXU(p.h$))};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["locker-bookings"]],decls:26,vars:26,consts:[["date_template",""],["period_template",""],["locker_template",""],["user_template",""],["status_template",""],["option_template",""],["menu","matMenu"],["statusMenu","matMenu"],["checkinMenu","matMenu"],[1,"w-full","h-4"],[1,"overflow-auto","h-full","w-full","px-4","pb-4"],[1,"min-w-[76rem]","block",3,"dataSource","filter","columns","display_column","column_size","template","empty"],["btn","","matRipple","","class","absolute bottom-2 left-2 w-32 mx-auto my-4",3,"click",4,"ngIf"],["icon","","matRipple","",1,"absolute","bottom-2","right-2","bg-base-100","shadow",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],[1,"flex","flex-col","items-center","justify-center","w-full"],[1,"opacity-60"],[1,"text-xl"],[4,"ngIf"],[1,"text-xs","py-1","px-2","bg-error","rounded-2xl","text-white"],[1,"flex","flex-col","justify-center"],[1,"select-all"],["class","text-xs opacity-30 select-all",4,"ngIf"],[1,"text-xs","opacity-30","select-all"],["matRipple","",1,"rounded-3xl","px-2","py-1","flex","items-center","space-x-2","capitalize",3,"matMenuTriggerFor"],[1,"ml-2"],[1,"flex","items-center","space-x-2"],[1,"text-2xl"],["matRipple","",1,"rounded-3xl","px-2","py-1","text-white","flex","items-center","space-x-2",3,"matMenuTriggerFor","disabled","matTooltip"],["btn","","matRipple","",1,"absolute","bottom-2","left-2","w-32","mx-auto","my-4",3,"click"]],template:function(n,o){if(1&n){const i=e.RV6();e.nrm(0,"div",9),e.j41(1,"div",10),e.nrm(2,"custom-table",11),e.nI1(3,"async"),e.nI1(4,"async"),e.DNE(5,ke,7,8,"ng-template",null,0,e.C5r)(7,Fe,2,2,"ng-template",null,1,e.C5r)(9,ye,1,1,"ng-template",null,2,e.C5r)(11,Ce,4,2,"ng-template",null,3,e.C5r)(13,Re,19,12,"ng-template",null,4,e.C5r)(15,Le,19,10,"ng-template",null,5,e.C5r),e.k0s(),e.DNE(17,Ie,2,0,"button",12),e.nI1(18,"async"),e.j41(19,"button",13)(20,"app-icon"),e.EFF(21,"more_vert"),e.k0s()(),e.j41(22,"mat-menu",null,6)(24,"button",14),e.bIt("click",function(){return e.eBV(i),e.Njj(o.rejectAll())}),e.EFF(25,"Reject All"),e.k0s()()}if(2&n){let i,a;const c=e.sdS(6),m=e.sdS(8),u=e.sdS(10),v=e.sdS(12),Ye=e.sdS(14),Y=e.sdS(16),Oe=e.sdS(23);e.R7$(2),e.Y8G("dataSource",o.bookings)("filter",null==(i=e.bMT(3,9,o.filters))?null:i.search)("columns",e.lJ4(15,ge))("display_column",e.lJ4(16,_e))("column_size",e.lJ4(17,he))("template",e.sGs(18,fe,v,u,c,m,Ye,Y,Y))("empty",null!=(a=e.bMT(4,11,o.filters))&&a.search?"No matching locker bookings":"There are no locker booking for the currently selected date."),e.R7$(15),e.Y8G("ngIf",!o.loading&&e.bMT(18,13,o.has_more_pages)),e.R7$(2),e.Y8G("matMenuTriggerFor",Oe)}},dependencies:[d.bT,R.kk,R.fb,R.Cp,T.oV,b.r6,C.R,de.r,d.Jj,d.vh],styles:["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;height:100%;width:100%}\n\n/*# sourceMappingURL=locker-bookings.component.ts-angular-inline--129.css.map*/"]})}return s})();var Me=r(97024),Ee=r(87984),we=r(63046),$e=r(45189),Ge=r(96843);const Ve=["app-new-lockers",""];function Be(s,l){if(1&s&&(e.j41(0,"div",17),e.EFF(1),e.nI1(2,"building"),e.j41(3,"span",18),e.EFF(4," - "),e.k0s()()),2&s){let t;const n=e.XpG().$implicit;e.R7$(),e.SpI(" ",null==(t=e.bMT(2,1,n.parent_id))?null:t.display_name," ")}}function Xe(s,l){if(1&s&&(e.j41(0,"mat-option",14)(1,"div",15),e.DNE(2,Be,5,3,"div",16),e.j41(3,"div"),e.EFF(4),e.k0s()()()),2&s){const t=l.$implicit,n=e.XpG();e.Y8G("value",t.id),e.R7$(2),e.Y8G("ngIf",n.use_region),e.R7$(2),e.SpI(" ",t.display_name||t.name," ")}}function Ne(s,l){if(1&s){const t=e.RV6();e.qex(0),e.j41(1,"date-options",19),e.bIt("dateChange",function(o){e.eBV(t);const i=e.XpG();return e.Njj(i.setDate(o))}),e.k0s(),e.j41(2,"button",20),e.nI1(3,"async"),e.bIt("click",function(){e.eBV(t);const o=e.XpG();return e.Njj(o.refresh())}),e.j41(4,"app-icon"),e.EFF(5,"refresh"),e.k0s()(),e.bVm()}if(2&s){const t=e.XpG();e.R7$(2),e.Y8G("disabled",e.bMT(3,1,t.loading))}}function Ae(s,l){if(1&s){const t=e.RV6();e.qex(0),e.j41(1,"button",21),e.bIt("click",function(){e.eBV(t);const o=e.XpG();return e.Njj(o.manageRestrictions())}),e.j41(2,"app-icon"),e.EFF(3,"lock_open"),e.k0s()(),e.bVm()}}function De(s,l){1&s&&e.nrm(0,"mat-progress-bar",22)}const Se=[{path:"new",component:(()=>{class s extends p.Tv{get use_region(){return!!this._settings.get("app.use_region")}constructor(t,n,o,i,a){super(),this._state=t,this._router=n,this._route=o,this._dialog=i,this._settings=a,this.loading=this._state.loading,this.filters=this._state.filters,this.levels=this._state.levels,this.setDate=c=>this._state.setFilters({date:c}),this.setFilters=c=>this._state.setFilters(c),this.refresh=()=>this._state.refresh(),this.updateZones=c=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:c.join(",")},queryParamsHandling:"merge"}),this._state.setFilters({zones:c})}}ngOnInit(){this._state.refresh(),this.subscription("router.events",this._router.events.subscribe(n=>{if(n instanceof _.wF){const o=this._router.url?.split("/")||[""];this.path=o[t.length-1].split("?")[0]}}));const t=this._router.url?.split("/")||[""];this.path=t[t.length-1].split("?")[0]}ngOnDestroy(){super.ngOnDestroy()}manageRestrictions(){this._dialog.open(X.F,{data:{type:"locker"}})}static#e=this.\u0275fac=function(n){return new(n||s)(e.rXU(x),e.rXU(_.Ix),e.rXU(_.nX),e.rXU(F.bZ),e.rXU(p.h$))};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["","app-new-lockers",""]],features:[e.Vt3],attrs:Ve,decls:23,vars:14,consts:[[1,"print:hidden"],[1,"flex","flex-1","h-px","print:hidden"],[1,"flex","flex-col","flex-1","w-1/2","h-full"],[1,"flex","items-center","w-full","py-4","px-8","space-x-2"],[1,"text-2xl","font-medium"],[1,"flex-1","w-px"],[1,"mr-2",3,"modelChange","model"],[1,"w-full","flex","items-center","px-8","space-x-2"],["appearance","outline",1,"no-subscript","w-60"],["placeholder","All Levels","multiple","",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"flex-1","h-1/2","w-full","relative","overflow-auto","px-4"],["class","w-full","mode","indeterminate",4,"ngIf"],[3,"value"],[1,"flex","flex-col-reverse"],["class","text-xs opacity-30",4,"ngIf"],[1,"text-xs","opacity-30"],[1,"opacity-0"],[3,"dateChange"],["btn","","icon","","matRipple","","matTooltip","Refresh List",1,"ml-2","rounded","border","border-base-200",3,"click","disabled"],["btn","","icon","","matRipple","","matTooltip","Locker Restrictions",1,"bg-primary","text-white","rounded",3,"click"],["mode","indeterminate",1,"w-full"]],template:function(n,o){if(1&n&&(e.nrm(0,"app-topbar",0),e.j41(1,"div",1),e.nrm(2,"app-sidebar"),e.j41(3,"main",2)(4,"div",3)(5,"h2",4),e.EFF(6,"Locker Bookings"),e.k0s(),e.nrm(7,"div",5),e.j41(8,"searchbar",6),e.nI1(9,"async"),e.bIt("modelChange",function(a){return o.setFilters({search:a})}),e.k0s()(),e.j41(10,"div",7)(11,"mat-form-field",8)(12,"mat-select",9),e.nI1(13,"async"),e.bIt("ngModelChange",function(a){return o.updateZones(a)}),e.DNE(14,Xe,5,3,"mat-option",10),e.nI1(15,"async"),e.k0s()(),e.nrm(16,"div",5),e.DNE(17,Ne,6,3,"ng-container",11)(18,Ae,4,0,"ng-container",11),e.k0s(),e.j41(19,"div",12),e.nrm(20,"router-outlet"),e.k0s(),e.DNE(21,De,1,0,"mat-progress-bar",13),e.nI1(22,"async"),e.k0s()()),2&n){let i,a;e.R7$(8),e.Y8G("model",null==(i=e.bMT(9,6,o.filters))?null:i.search),e.R7$(4),e.Y8G("ngModel",null==(a=e.bMT(13,8,o.filters))?null:a.zones),e.R7$(2),e.Y8G("ngForOf",e.bMT(15,10,o.levels)),e.R7$(3),e.Y8G("ngIf","events"===o.path),e.R7$(),e.Y8G("ngIf","manage"===o.path),e.R7$(3),e.Y8G("ngIf",e.bMT(22,12,o.loading)&&"events"===o.path)}},dependencies:[d.Sq,d.bT,f.BC,f.vS,N.o,A.x,$e.S,Ge.c,y.rl,D.VO,b.wT,T.oV,B.HM,b.r6,C.R,_.n3,d.Jj,S.b],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--b1)}\n\n/*# sourceMappingURL=new-lockers.component.ts-angular-inline--131.css.map*/"]})}return s})(),children:[{path:"events",component:U},{path:"**",redirectTo:"events"}]},{path:"",component:ue,children:[{path:"events",component:U},{path:"**",redirectTo:"events"}]}];let Ue=(()=>{class s{static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275mod=e.$C({type:s});static#n=this.\u0275inj=e.G2t({imports:[d.MD,f.YN,j.RI,f.X1,P.r,z.Rp,h.SG,we.cQ,O.Wk,y.RG,Me.g7,Ee.fS,_.iI.forChild(Se)]})}return s})()}}]);
//# sourceMappingURL=apps_concierge_src_app_lockers_lockers_module_ts.js.map