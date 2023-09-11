"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["common"],{9519:(K,p,e)=>{e.d(p,{H:()=>b});var c=e(1670),E=e(308),u=e(4505),P=e(2218),a=e(7716),I=e(4139),O=e(823),M=e(9095),l=e(6942),A=e(7418),x=e(9128),y=e(8759),U=e(3298),R=e(2647),C=e(1810),T=e(9377),f=e(3200),k=e(3861),_=e(5375),r=e(1426),v=e(5912),m=(e(6168),e(4250),e(6839)),B=e(7486);let b=(()=>{class d extends r.cx{get new_desk_count(){return this._new_desks.getValue()?.length||0}nextPage(){this._call_next_page.next(`NEXT_${Date.now()}`)}constructor(o,n){super(),this._org=o,this._dialog=n,this._filters=new u.X({}),this._new_desks=new u.X([]),this._desk_bookings=[],this._loading=new u.X(!1),this.new_desks=this._new_desks.asObservable(),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this.desks=this._filters.pipe((0,O.b)(500),(0,M.w)(s=>{const t=s.zones||[];return t&&!t.includes("All")?(0,E.rlq)(t[0],"desks").pipe((0,l.U)(i=>i.details)):(0,E.BW_)(this._org.building?.id,{name:"desks"}).pipe((0,l.U)(i=>i.map(h=>h.metadata.desks.details).reduce((h,D)=>[...h,...D],[])))}),(0,A.K)(s=>[]),(0,l.U)(s=>(s instanceof Array||(s=[]),s.sort((t,i)=>t.name?.localeCompare(i.name)),s.map(t=>new v.nk({...t,qr_code:""})))),(0,x.d)(1)),this._next_page=new P.xQ,this._call_next_page=new P.xQ,this._all_zones_keys=["All",-1,"-1"],this.setup_paging=(0,a.aj)([this._filters,this._org.initialised]).pipe((0,O.b)(500),(0,y.b)(([s,t])=>{if(!t)return;const i=s.date||Date.now(),h=!s.zones||s.zones.some(D=>this._all_zones_keys.includes(D))?[this._org.building.id]:s.zones;this._next_page.next(()=>(0,_.pS)({period_start:(0,C.Z)((0,T.Z)(i)),period_end:(0,C.Z)((0,f.Z)(i)),type:"desk",zones:h.join(","),include_checked_out:!0})),this._call_next_page.next(`RESET_${Date.now()}`)})),this.paged_bookings=(0,a.aj)([this._next_page,this._call_next_page]).pipe((0,U.x)((s,t)=>s[1]===t[1]),(0,M.w)(([s,t])=>(this._loading.next(!0),s?t.includes("RESET")?s().pipe((0,l.U)(i=>({...i,reset:!0}))):s().pipe((0,l.U)(i=>({...i,reset:!1}))):(0,I.of)({data:[],total:0,next:null,reset:t.includes("RESET")}))),(0,R.R)((s,{data:t,total:i,next:h,reset:D})=>{const z=t;return this._next_page.next(h),D?{list:z,total:i}:{list:[...s.list,...z],total:i}},{list:[],total:0}),(0,y.b)(s=>this._loading.next(!1)),(0,x.d)(1)),this.has_more_pages=this.paged_bookings.pipe((0,l.U)(s=>s.list.length<s.total)),this.bookings=this.paged_bookings.pipe((0,l.U)(s=>s.list)),this.setup_paging.subscribe()}setFilters(o){o.zones?.includes("All")?o.zones=["All",...this._org.levelsForBuilding(this._org.building).map(n=>n.id)]:o.zones&&this._filters.getValue()?.zones?.includes("All")&&(o.zones=[]),this._filters.next({...this._filters.getValue(),...o})}refresh(){this._loading.next(!0),this.timeout("poll",()=>this.setFilters(this._filters.getValue()))}addDesks(o){this._new_desks.next(this._new_desks.getValue().concat(o))}clearNewDesks(){this._filters.next(this._filters.getValue()),this._new_desks.next([])}checkinDesk(o,n=!0){return(0,c.Z)(function*(){console.log("Check-in:",o),"failed"===(yield(0,_.FD)(o.id,n??!0).toPromise().catch(t=>"failed"))?(0,r.cB)(`Error checking ${n?"in":"out"} desk booking`):(0,r.t5)(`Checked ${n?"in":"out"} ${o.user_name}.`)})()}approveDesk(o){return(0,c.Z)(function*(){"failed"===(yield(0,_.jT)(o.id).toPromise().catch(s=>"failed"))?(0,r.cB)("Error approving in desk booking"):(0,r.t5)(`Approved desk booking for ${o.user_name} on ${(0,k.Z)(o.date,"MMM do")}.`)})()}rejectDesk(o){return(0,c.Z)(function*(){"failed"===(yield(0,_.FP)(o.id).toPromise().catch(s=>"failed"))?(0,r.cB)("Error rejecting in desk booking"):(0,r.t5)(`Rejected desk booking for ${o.user_name} on ${(0,k.Z)(o.date,"MMM do")}.`)})()}giveAccess(o){var n=this;return(0,c.Z)(function*(){const s=yield(0,_.km)(new _.$N({...o,access:!0})).toPromise().catch(t=>"failed");if("failed"===s)return(0,r.cB)("Error giving building access booking host");(0,r.t5)(`Successfully gave building access to ${o.user_name} for desk booking.`),n._desk_bookings=[...n._desk_bookings,s]})()}rejectAllDesks(){var o=this;return(0,c.Z)(function*(){const n=o._desk_bookings||[];if(n.length<=0)return(0,r.QD)("No desks to reject for the selected date");const s=yield(0,r._5)({title:"Cancel all desk bookings",content:"Are you sure you want to cancel all bookings for the selected date?",icon:{type:"icon",class:"material-icons",content:"delete"}},o._dialog);"done"===s.reason&&(s.loading("Rejecting all desks for selected date..."),yield Promise.all(n.map(t=>(0,_.FP)(t.id).toPromise())),(0,r.t5)("Successfully rejected all desk bookings for selected date."),s.close())})()}}return d.\u0275fac=function(o){return new(o||d)(m.LFG(v.w7),m.LFG(B.uw))},d.\u0275prov=m.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},5375:(K,p,e)=>{e.d(p,{$N:()=>u.$,fy:()=>E.f,EP:()=>c.E,jT:()=>a.jT,FD:()=>a.FD,ad:()=>a.ad,NP:()=>a.NP,F2:()=>a.F2,pS:()=>a.pS,FP:()=>a.FP,km:()=>a.km,Fo:()=>a.Fo,Wp:()=>a.Wp});var c=e(5554),E=e(8929),u=e(6962),a=(e(1980),e(354));e(1426),e(3174),e(6165),e(4282),e(7121),e(8883),e(4088),e(7304)}}]);
//# sourceMappingURL=common.js.map