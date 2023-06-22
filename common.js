"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["common"],{7625:(S,W,t)=>{t.d(W,{I:()=>g});var C=t(1670),u=t(3496),M=t(3610),f=t(5915),T=t(5912),A=t(2886),m=t(7502),R=t(5845),_=t(1810),L=t(9377),I=t(3200),x=t(4505),l=t(7716),E=t(4139),U=t(823),a=t(8759),K=t(9151),r=t(6116),d=t(9095),p=t(3298),O=t(6942),h=t(7418),c=t(9128),D=t(9445);let g=(()=>{class o extends M.cx{constructor(i,y){super(),this._settings=i,this._org=y,this._poll=new x.X(0),this._poll_type=new x.X("api"),this._loading=new x.X(!1),this._filters=new x.X({shown_types:["event","desk","parking","visitor","locker"]}),this._date=new x.X(Date.now()),this._update=(0,l.aj)([this._date,this._poll]).pipe((0,U.b)(500),(0,a.b)(s=>this._loading.next(!0))),this._deleted=[],this._space_bookings=this._org.active_building.pipe((0,K.h)(s=>!!s),(0,r.g)("id"),(0,U.b)(300),(0,a.b)(s=>this.unsubWith("bind:")),(0,d.w)(({id:s})=>(this._loading.next(!0),(0,A.u2)(s))),(0,p.x)(([s],[e])=>s!==e),(0,d.w)(s=>(this._loading.next(!1),(0,l.aj)((s||[]).map(e=>{const n=(0,m.rTZ)(e.id,"Bookings").binding("bookings"),P=n.listen().pipe((0,O.U)(B=>(B||[]).map(Z=>new f.ym({...Z,resources:Z.attendees.filter(j=>j.email===e.email||j.resource),system:e}))),(0,h.K)(B=>(0,E.of)([])));return this.hasSubscription(`bind:${e.id}`)||this.subscription(`bind:${e.id}`,n.bind()),P})))),(0,O.U)(s=>(0,M.xH)(s)),(0,c.d)(1)),this.ws_events=(0,l.aj)([this._space_bookings,this._update]).pipe((0,O.U)(([s,[e]])=>{const n=(0,M.ar)();return s.filter(P=>(0,R.Z)(P.date,e)&&(P.host.toLowerCase()===n.email.toLowerCase()||P.attendees.find(B=>B.email.toLowerCase()===n.email.toLowerCase())))})),this.api_events=this._update.pipe((0,d.w)(([s])=>{const e={period_start:(0,_.Z)((0,L.Z)(s)),period_end:(0,_.Z)((0,I.Z)(s))};return this._settings.get("app.events.use_bookings")?(0,u.F2)({...e,type:"room"}).pipe((0,O.U)(n=>n.map(P=>(0,f.Yd)(P))),(0,h.K)(n=>(0,E.of)([]))):(0,f.u$)({...e}).pipe((0,h.K)(n=>(0,E.of)([])))}),(0,c.d)(1)),this.events=(0,l.aj)([this._poll_type]).pipe((0,d.w)(([s])=>"api"===s?this.api_events:this.ws_events),(0,a.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,c.d)(1)),this.visitors=this._update.pipe((0,d.w)(([s])=>(0,u.F2)({period_start:(0,_.Z)((0,L.Z)(s)),period_end:(0,_.Z)((0,I.Z)(s)),type:"visitor"}).pipe((0,h.K)(e=>(console.error(e),(0,E.of)([]))))),(0,a.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,c.d)(1)),this.desks=this._update.pipe((0,d.w)(([s])=>(0,u.F2)({period_start:(0,_.Z)((0,L.Z)(s)),period_end:(0,_.Z)((0,I.Z)(s)),include_checked_out:!0,type:"desk"}).pipe((0,h.K)(e=>(console.error(e),(0,E.of)([]))))),(0,a.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,c.d)(1)),this.parking=this._update.pipe((0,d.w)(([s])=>(0,u.F2)({period_start:(0,_.Z)((0,L.Z)(s)),period_end:(0,_.Z)((0,I.Z)(s)),type:"parking"}).pipe((0,h.K)(e=>(0,E.of)([])))),(0,a.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,c.d)(1)),this.lockers=this._org.active_building.pipe((0,K.h)(s=>!!s),(0,r.g)("id"),(0,U.b)(300),(0,a.b)(s=>this.unsubWith("bind:")),(0,d.w)(s=>{const e=this._org.binding("lockers");return console.log("Lockers:",s,e),e?(0,m.rTZ)(e,"LockerLocations").execute("lockers_allocated_to_me").catch(P=>[]):(0,E.of)([])}),(0,O.U)(s=>s.map(e=>new u.$N({date:(0,L.Z)(Date.now()).valueOf(),duration:1439,asset_id:e.locker_id,asset_name:e.locker_name,zones:[e.building,e.level],extension_data:{map_id:e.locker_id}}))),(0,h.K)(s=>(console.error(s),(0,E.of)([]))),(0,a.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,c.d)(1)),this.bookings=(0,l.aj)([this.events,this.visitors,this.desks,this.parking,this.lockers]).pipe((0,O.U)(([s,e,n,P,B])=>[...s,...e,...n,...P,...B].sort((Z,j)=>Z.date-j.date))),this.filtered_bookings=(0,l.aj)([this.bookings,this._filters]).pipe((0,O.U)(([s,e])=>s.filter(n=>!this._deleted.includes(n.id)&&n instanceof f.ym&&e?.shown_types?.includes("event")||e?.shown_types?.includes(n.booking_type)))),this.filters=this._filters.asObservable(),this.date=this._date.asObservable(),this.loading=this._loading.asObservable(),this.subscription("poll_type",this._org.active_building.subscribe(()=>this._poll_type.next(this._settings.get("app.schedule.use_websocket")?"ws":"api"))),this._deleted=JSON.parse(sessionStorage.getItem("PLACEOS.events.deleted")||"[]")}triggerPoll(){this._poll.next(Date.now())}startPolling(i=6e4){return this.interval("poll",()=>{"visible"===document.visibilityState&&this._poll.next(Date.now())},i),()=>this.stopPolling()}stopPolling(){this.clearInterval("poll")}setDate(i){this._date.next(i)}removeItem(i){this.setAsDeleted(i.id),this._poll.next(Date.now())}setAsDeleted(i){this._deleted.push(i),sessionStorage.setItem("PLACEOS.events.deleted",JSON.stringify(this._deleted))}toggleType(i,y=!1){var s=this;return(0,C.Z)(function*(){const e=s._filters.getValue()||{shown_types:[]},{shown_types:n}=e;n&&(n.includes(i)||y)?s._filters.next({...e,shown_types:n.filter(P=>P!==i)}):s._filters.next({...e,shown_types:[...n,i]})})()}}return o.\u0275fac=function(i){return new(i||o)(D.LFG(M.gb),D.LFG(T.w7))},o.\u0275prov=D.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},8676:(S,W,t)=>{t.d(W,{I:()=>O});var C=t(3496),u=t(9434),M=t(3610),f=t(5915),T=t(1810),A=t(9377),m=t(312),R=t(3200),_=t(4505),L=t(5398),I=t(7716),x=t(4350),l=t(9095),E=t(9128),U=t(823),a=t(522),K=t(6942),r=t(7418),d=t(8759),p=t(9445);let O=(()=>{class h extends M.cx{constructor(D){super(),this._settings=D,this._poll=new _.X(0),this._options=new _.X({start:Date.now()}),this._loading=new _.X(""),this._schedule=new _.X([]),this.options=this._options.asObservable(),this.loading=this._loading.asObservable(),this.schedule=this._loading.asObservable(),this.calendars=(0,L.H)(1e3).pipe((0,l.w)(g=>(0,u.yJ)()),(0,E.d)(1)),this.events=(0,I.aj)([this._options,this._poll]).pipe((0,U.b)(1e3),(0,a.zg)(([g])=>{this._loading.next("Loading schedule...");const o={period_start:(0,T.Z)((0,A.Z)(g.start)),period_end:(0,T.Z)((0,m.Z)((0,R.Z)(g.start),6))};return g.calendar&&(o.calendar=g.calendar),this._schedule.next(this._schedule.getValue().filter(v=>!(0,M.MZ)(1e3*o.period_start,1e3*o.period_end,v.date,v.date+60*v.duration*1e3))),(0,x.D)([!0===this._settings.get("app.events.use_bookings")?(0,C.F2)({...o,type:"room"}).pipe((0,K.U)(v=>v.map(i=>(0,f.Yd)(i)))):(0,f.u$)({...o}),(0,C.F2)({...o,type:"desk"}),(0,C.F2)({...o,type:"parking"})]).pipe((0,r.K)(v=>[]))}),(0,K.U)(([g,o])=>{const v=[...this._schedule.getValue(),...g,...o.filter(i=>"declined"!==i.status)].sort((i,y)=>i.date-y.date);return this._schedule.next((0,M.Tw)(v,"id")),v}),(0,r.K)(g=>[]),(0,d.b)(g=>this._loading.next("")),(0,E.d)(1))}startPolling(D=15e3){this.interval("poll",()=>this._poll.next(Date.now()),D)}stopPolling(){this.clearInterval("poll")}setOptions(D){this._options.next({...this._options.getValue(),...D})}}return h.\u0275fac=function(D){return new(D||h)(p.LFG(M.gb))},h.\u0275prov=p.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},9434:(S,W,t)=>{t.d(W,{ot:()=>U,yJ:()=>l.yJ});var C=t(1670),u=t(4505),M=t(8759),f=t(9128),T=t(5670),A=t(1810),m=t(9377),R=t(3200),_=t(2317),L=t(4871),I=t(719),x=t(3174),l=t(8313),E=t(9445);let U=(()=>{class a extends L.c{constructor(r,d){super(),this._org=r,this._settings=d,this._calendars=new u.X([]),this.calendar_list=(0,l.yJ)().pipe((0,M.b)(p=>this._calendars.next(p)),(0,f.d)(1)),this.query=()=>(0,l.yJ)(),this.freeBusy=p=>(0,l.tS)(p,this._org),this.availability=p=>(0,l.v7)(p),this._org.initialised.pipe((0,T.P)(p=>p)).subscribe(()=>this.init())}init(){var r=this;return(0,C.Z)(function*(){r._settings.get("app.events.use_bookings")||r._initialised.next(!0)})()}get calendars(){return this._calendars.getValue()}getFreeBusyDate(r,d){return(0,l.tS)({period_start:(0,A.Z)((0,m.Z)(r)),period_end:(0,A.Z)((0,R.Z)(r)),calendars:d},this._org)}checkSpacesAvailability(r,d,p,O){return(0,C.Z)(function*(){const h=yield(0,l.v7)({period_start:d,period_end:p,system_ids:r.join(",")}).toPromise(),c=new Date(O?.date).valueOf(),D=(0,_.Z)(c,O?.duration).valueOf();return!!h.every(o=>{const v=o.availability;if(O&&o.id===O.system?.email){const i=v.findIndex(y=>y.date>=c&&(0,_.Z)(y.date,y.duration).valueOf()<=D);-1!==i&&v.splice(i,1)}return!v.length})})()}}return a.\u0275fac=function(r){return new(r||a)(E.LFG(x.w),E.LFG(I.g))},a.\u0275prov=E.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()}}]);
//# sourceMappingURL=common.js.map