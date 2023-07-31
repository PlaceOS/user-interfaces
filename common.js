"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["common"],{7625:(F,R,t)=>{t.d(R,{I:()=>P});var f=t(1670),M=t(3496),u=t(3610),y=t(5915),T=t(5912),A=t(2886),B=t(7502),Z=t(5845),l=t(1810),L=t(9377),U=t(3200),x=t(4505),a=t(7716),p=t(4139),K=t(823),d=t(8759),m=t(9151),r=t(6116),h=t(9095),c=t(3298),g=t(6942),v=t(7418),D=t(9128),O=t(9445);let P=(()=>{class o extends u.cx{constructor(n,I,j){var W;super(),W=this,this._settings=n,this._org=I,this._lockers=j,this._poll=new x.X(0),this._poll_type=new x.X("api"),this._loading=new x.X(!1),this._filters=new x.X({shown_types:["event","desk","parking","visitor","locker"]}),this._date=new x.X(Date.now()),this._update=(0,a.aj)([this._date,this._poll]).pipe((0,K.b)(500),(0,d.b)(s=>this._loading.next(!0))),this._deleted=[],this._space_bookings=this._org.active_building.pipe((0,m.h)(s=>!!s),(0,r.g)("id"),(0,K.b)(300),(0,d.b)(s=>this.unsubWith("bind:")),(0,h.w)(({id:s})=>(this._loading.next(!0),(0,A.u2)(s))),(0,c.x)(([s],[i])=>s!==i),(0,h.w)(s=>(this._loading.next(!1),(0,a.aj)((s||[]).map(i=>{const e=(0,B.rTZ)(i.id,"Bookings").binding("bookings"),_=e.listen().pipe((0,g.U)(C=>(C||[]).map(S=>new y.ym({...S,resources:S.attendees.filter(b=>b.email===i.email||b.resource),system:i}))),(0,v.K)(C=>(0,p.of)([])));return this.hasSubscription(`bind:${i.id}`)||this.subscription(`bind:${i.id}`,e.bind()),_})))),(0,g.U)(s=>(0,u.xH)(s)),(0,D.d)(1)),this.ws_events=(0,a.aj)([this._space_bookings,this._update]).pipe((0,g.U)(([s,[i]])=>{const e=(0,u.ar)();return s.filter(_=>(0,Z.Z)(_.date,i)&&(_.host.toLowerCase()===e.email.toLowerCase()||_.attendees.find(C=>C.email.toLowerCase()===e.email.toLowerCase())))})),this.api_events=this._update.pipe((0,h.w)(([s])=>{const i={period_start:(0,l.Z)((0,L.Z)(s)),period_end:(0,l.Z)((0,U.Z)(s))};return this._settings.get("app.events.use_bookings")?(0,M.F2)({...i,type:"room"}).pipe((0,g.U)(e=>e.map(_=>(0,y.Yd)(_))),(0,v.K)(e=>(0,p.of)([]))):(0,y.u$)({...i}).pipe((0,v.K)(e=>(0,p.of)([])))}),(0,D.d)(1)),this.events=(0,a.aj)([this._poll_type]).pipe((0,h.w)(([s])=>"api"===s?this.api_events:this.ws_events),(0,d.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,D.d)(1)),this.visitors=this._update.pipe((0,h.w)(([s])=>(0,M.F2)({period_start:(0,l.Z)((0,L.Z)(s)),period_end:(0,l.Z)((0,U.Z)(s)),type:"visitor"}).pipe((0,v.K)(i=>(0,p.of)([])))),(0,d.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,D.d)(1)),this.desks=this._update.pipe((0,h.w)(([s])=>(0,M.F2)({period_start:(0,l.Z)((0,L.Z)(s)),period_end:(0,l.Z)((0,U.Z)(s)),include_checked_out:!0,type:"desk"}).pipe((0,v.K)(i=>(0,p.of)([])))),(0,d.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,D.d)(1)),this.parking=this._update.pipe((0,h.w)(([s])=>(0,M.F2)({period_start:(0,l.Z)((0,L.Z)(s)),period_end:(0,l.Z)((0,U.Z)(s)),type:"parking"}).pipe((0,v.K)(i=>(0,p.of)([])))),(0,d.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,D.d)(1)),this.lockers=(0,a.aj)([this._org.active_building.pipe((0,m.h)(s=>!!s),(0,r.g)("id")),this._lockers.lockers$]).pipe((0,K.b)(300),(0,h.w)(function(){var s=(0,f.Z)(function*([i,e]){const _=W._org.binding("lockers");return _?[yield(0,B.rTZ)(_,"LockerLocations").execute("lockers_allocated_to_me").catch(S=>[]),e]:(0,p.of)([[],e])});return function(i){return s.apply(this,arguments)}}()),(0,g.U)(([s,i])=>s.map(e=>{const _=i.find(C=>C.id===e.locker_id);return _||e.level&&e.building?(e.level=e.level||_?.level_id,e.building=e.building||this._org.levelWithID([_?.level_id])?.parent_id,new M.$N({date:(0,L.Z)(Date.now()).valueOf(),duration:1439,title:"Locker Booking",description:e.locker_name,booking_type:"locker",all_day:!0,asset_id:_.map_id,asset_name:e.locker_name,zones:[e.building,e.level],extension_data:{map_id:e.locker_id}})):null}).filter(e=>e)),(0,v.K)(()=>(0,p.of)([])),(0,d.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,D.d)(1)),this.bookings=(0,a.aj)([this.events,this.visitors,this.desks,this.parking,this.lockers]).pipe((0,g.U)(([s,i,e,_,C])=>[...s,...i,...e,..._,...C].sort((S,b)=>S.date-b.date))),this.filtered_bookings=(0,a.aj)([this.bookings,this._filters]).pipe((0,g.U)(([s,i])=>s.filter(e=>!this._deleted.includes(e.id)&&e instanceof y.ym&&i?.shown_types?.includes("event")||i?.shown_types?.includes(e.booking_type)))),this.filters=this._filters.asObservable(),this.date=this._date.asObservable(),this.loading=this._loading.asObservable(),this.subscription("poll_type",this._org.active_building.subscribe(()=>this._poll_type.next(this._settings.get("app.schedule.use_websocket")?"ws":"api"))),this._deleted=JSON.parse(sessionStorage.getItem("PLACEOS.events.deleted")||"[]")}triggerPoll(){this._poll.next(Date.now())}startPolling(n=6e4){return this.interval("poll",()=>{"visible"===document.visibilityState&&this._poll.next(Date.now())},n),()=>this.stopPolling()}stopPolling(){this.clearInterval("poll")}setDate(n){this._date.next(n)}removeItem(n){this.setAsDeleted(n.id),this._poll.next(Date.now())}setAsDeleted(n){this._deleted.push(n),sessionStorage.setItem("PLACEOS.events.deleted",JSON.stringify(this._deleted))}toggleType(n,I=!1){var j=this;return(0,f.Z)(function*(){const W=j._filters.getValue()||{shown_types:[]},{shown_types:s}=W;s&&(s.includes(n)||I)?j._filters.next({...W,shown_types:s.filter(i=>i!==n)}):j._filters.next({...W,shown_types:[...s,n]})})()}}return o.\u0275fac=function(n){return new(n||o)(O.LFG(u.gb),O.LFG(T.w7),O.LFG(M.At))},o.\u0275prov=O.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},8676:(F,R,t)=>{t.d(R,{I:()=>g});var f=t(3496),M=t(9434),u=t(3610),y=t(5915),T=t(1810),A=t(9377),B=t(312),Z=t(3200),l=t(4505),L=t(5398),U=t(7716),x=t(4350),a=t(9095),p=t(9128),K=t(823),d=t(522),m=t(6942),r=t(7418),h=t(8759),c=t(9445);let g=(()=>{class v extends u.cx{constructor(O){super(),this._settings=O,this._poll=new l.X(0),this._options=new l.X({start:Date.now()}),this._loading=new l.X(""),this._schedule=new l.X([]),this.options=this._options.asObservable(),this.loading=this._loading.asObservable(),this.schedule=this._loading.asObservable(),this.calendars=(0,L.H)(1e3).pipe((0,a.w)(P=>(0,M.yJ)()),(0,p.d)(1)),this.events=(0,U.aj)([this._options,this._poll]).pipe((0,K.b)(1e3),(0,d.zg)(([P])=>{this._loading.next("Loading schedule...");const o={period_start:(0,T.Z)((0,A.Z)(P.start)),period_end:(0,T.Z)((0,B.Z)((0,Z.Z)(P.start),6))};return P.calendar&&(o.calendar=P.calendar),this._schedule.next(this._schedule.getValue().filter(E=>!(0,u.MZ)(1e3*o.period_start,1e3*o.period_end,E.date,E.date+60*E.duration*1e3))),(0,x.D)([!0===this._settings.get("app.events.use_bookings")?(0,f.F2)({...o,type:"room"}).pipe((0,m.U)(E=>E.map(n=>(0,y.Yd)(n)))):(0,y.u$)({...o}),(0,f.F2)({...o,type:"desk"}),(0,f.F2)({...o,type:"parking"})]).pipe((0,r.K)(E=>[]))}),(0,m.U)(([P,o])=>{const E=[...this._schedule.getValue(),...P,...o.filter(n=>"declined"!==n.status)].sort((n,I)=>n.date-I.date);return this._schedule.next((0,u.Tw)(E,"id")),E}),(0,r.K)(P=>[]),(0,h.b)(P=>this._loading.next("")),(0,p.d)(1))}startPolling(O=15e3){this.interval("poll",()=>this._poll.next(Date.now()),O)}stopPolling(){this.clearInterval("poll")}setOptions(O){this._options.next({...this._options.getValue(),...O})}}return v.\u0275fac=function(O){return new(O||v)(c.LFG(u.gb))},v.\u0275prov=c.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})()},9434:(F,R,t)=>{t.d(R,{ot:()=>K,yJ:()=>a.yJ});var f=t(1670),M=t(4505),u=t(8759),y=t(9128),T=t(5670),A=t(1810),B=t(9377),Z=t(3200),l=t(2317),L=t(4871),U=t(719),x=t(3174),a=t(8313),p=t(9445);let K=(()=>{class d extends L.c{constructor(r,h){super(),this._org=r,this._settings=h,this._calendars=new M.X([]),this.calendar_list=(0,a.yJ)().pipe((0,u.b)(c=>this._calendars.next(c)),(0,y.d)(1)),this.query=()=>(0,a.yJ)(),this.freeBusy=c=>(0,a.tS)(c,this._org),this.availability=c=>(0,a.v7)(c),this._org.initialised.pipe((0,T.P)(c=>c)).subscribe(()=>this.init())}init(){var r=this;return(0,f.Z)(function*(){r._settings.get("app.events.use_bookings")||r._initialised.next(!0)})()}get calendars(){return this._calendars.getValue()}getFreeBusyDate(r,h){return(0,a.tS)({period_start:(0,A.Z)((0,B.Z)(r)),period_end:(0,A.Z)((0,Z.Z)(r)),calendars:h},this._org)}checkSpacesAvailability(r,h,c,g){return(0,f.Z)(function*(){const v=yield(0,a.v7)({period_start:h,period_end:c,system_ids:r.join(",")}).toPromise(),D=new Date(g?.date).valueOf(),O=(0,l.Z)(D,g?.duration).valueOf();return!!v.every(o=>{const E=o.availability;if(g&&o.id===g.system?.email){const n=E.findIndex(I=>I.date>=D&&(0,l.Z)(I.date,I.duration).valueOf()<=O);-1!==n&&E.splice(n,1)}return!E.length})})()}}return d.\u0275fac=function(r){return new(r||d)(p.LFG(x.w),p.LFG(U.g))},d.\u0275prov=p.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);
//# sourceMappingURL=common.js.map