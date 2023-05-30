"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([[592],{1966:(S,R,t)=>{t.d(R,{I:()=>g});var C=t(5861),u=t(3496),M=t(3512),f=t(1299),U=t(6221),K=t(2886),T=t(9909),W=t(2641),o=t(9972),x=t(8115),I=t(2722),y=t(591),r=t(3426),E=t(1086),A=t(13),_=t(2994),m=t(2198),l=t(9184),d=t(7545),v=t(5778),O=t(4850),h=t(7221),P=t(5154),D=t(4401);let g=(()=>{class a extends M.cx{constructor(i,L){super(),this._settings=i,this._org=L,this._poll=new y.X(0),this._poll_type=new y.X("api"),this._loading=new y.X(!1),this._filters=new y.X({shown_types:["event","desk","parking","visitor","locker"]}),this._date=new y.X(Date.now()),this._update=(0,r.aj)([this._date,this._poll]).pipe((0,A.b)(500),(0,_.b)(s=>this._loading.next(!0))),this._deleted=[],this._space_bookings=this._org.active_building.pipe((0,m.h)(s=>!!s),(0,l.g)("id"),(0,A.b)(300),(0,_.b)(s=>this.unsubWith("bind:")),(0,d.w)(({id:s})=>(this._loading.next(!0),(0,K.u2)(s))),(0,v.x)(([s],[e])=>s!==e),(0,d.w)(s=>(this._loading.next(!1),(0,r.aj)((s||[]).map(e=>{const n=(0,T.rTZ)(e.id,"Bookings").binding("bookings"),c=n.listen().pipe((0,O.U)(B=>(B||[]).map(Z=>new f.ym({...Z,resources:Z.attendees.filter(j=>j.email===e.email||j.resource),system:e}))),(0,h.K)(B=>(0,E.of)([])));return this.hasSubscription(`bind:${e.id}`)||this.subscription(`bind:${e.id}`,n.bind()),c})))),(0,O.U)(s=>(0,M.xH)(s)),(0,P.d)(1)),this.ws_events=(0,r.aj)([this._space_bookings,this._update]).pipe((0,O.U)(([s,[e]])=>{const n=(0,M.ar)();return s.filter(c=>(0,W.Z)(c.date,e)&&(c.host.toLowerCase()===n.email.toLowerCase()||c.attendees.find(B=>B.email.toLowerCase()===n.email.toLowerCase())))})),this.api_events=this._update.pipe((0,d.w)(([s])=>{const e={period_start:(0,o.Z)((0,x.Z)(s)),period_end:(0,o.Z)((0,I.Z)(s))};return this._settings.get("app.events.use_bookings")?(0,u.F2)({...e,type:"room"}).pipe((0,O.U)(n=>n.map(c=>(0,f.Yd)(c))),(0,h.K)(n=>(0,E.of)([]))):(0,f.u$)({...e}).pipe((0,h.K)(n=>(0,E.of)([])))}),(0,P.d)(1)),this.events=(0,r.aj)([this._poll_type]).pipe((0,d.w)(([s])=>"api"===s?this.api_events:this.ws_events),(0,_.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,P.d)(1)),this.visitors=this._update.pipe((0,d.w)(([s])=>(0,u.F2)({period_start:(0,o.Z)((0,x.Z)(s)),period_end:(0,o.Z)((0,I.Z)(s)),type:"visitor"}).pipe((0,h.K)(e=>(console.error(e),(0,E.of)([]))))),(0,_.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,P.d)(1)),this.desks=this._update.pipe((0,d.w)(([s])=>(0,u.F2)({period_start:(0,o.Z)((0,x.Z)(s)),period_end:(0,o.Z)((0,I.Z)(s)),include_checked_out:!0,type:"desk"}).pipe((0,h.K)(e=>(console.error(e),(0,E.of)([]))))),(0,_.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,P.d)(1)),this.parking=this._update.pipe((0,d.w)(([s])=>(0,u.F2)({period_start:(0,o.Z)((0,x.Z)(s)),period_end:(0,o.Z)((0,I.Z)(s)),type:"parking"}).pipe((0,h.K)(e=>(0,E.of)([])))),(0,_.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,P.d)(1)),this.lockers=this._update.pipe((0,d.w)(([s])=>{const e=this._org.binding("area_management");return e?(0,T.rTZ)(e,"Lockers").execute("lockers_allocated_to_me").catch(c=>[]):(0,E.of)([])}),(0,O.U)(s=>s.map(e=>new u.$N({date:(0,x.Z)(Date.now()).valueOf(),duration:1439,asset_id:e.locker_id,asset_name:e.locker_name,zones:[e.building,e.level],extension_data:{map_id:e.locker_id}}))),(0,h.K)(()=>(0,E.of)([])),(0,_.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,P.d)(1)),this.bookings=(0,r.aj)([this.events,this.visitors,this.desks,this.parking,this.lockers]).pipe((0,O.U)(([s,e,n,c,B])=>[...s,...e,...n,...c,...B].sort((Z,j)=>Z.date-j.date))),this.filtered_bookings=(0,r.aj)([this.bookings,this._filters]).pipe((0,O.U)(([s,e])=>s.filter(n=>!this._deleted.includes(n.id)&&n instanceof f.ym&&e?.shown_types?.includes("event")||e?.shown_types?.includes(n.booking_type)))),this.filters=this._filters.asObservable(),this.date=this._date.asObservable(),this.loading=this._loading.asObservable(),this.subscription("poll_type",this._org.active_building.subscribe(()=>this._poll_type.next(this._settings.get("app.schedule.use_websocket")?"ws":"api"))),this._deleted=JSON.parse(sessionStorage.getItem("PLACEOS.events.deleted")||"[]")}triggerPoll(){this._poll.next(Date.now())}startPolling(i=6e4){return this.interval("poll",()=>{"visible"===document.visibilityState&&this._poll.next(Date.now())},i),()=>this.stopPolling()}stopPolling(){this.clearInterval("poll")}setDate(i){this._date.next(i)}removeItem(i){this.setAsDeleted(i.id),this._poll.next(Date.now())}setAsDeleted(i){this._deleted.push(i),sessionStorage.setItem("PLACEOS.events.deleted",JSON.stringify(this._deleted))}toggleType(i,L=!1){var s=this;return(0,C.Z)(function*(){const e=s._filters.getValue()||{shown_types:[]},{shown_types:n}=e;n&&(n.includes(i)||L)?s._filters.next({...e,shown_types:n.filter(c=>c!==i)}):s._filters.next({...e,shown_types:[...n,i]})})()}}return a.\u0275fac=function(i){return new(i||a)(D.LFG(M.gb),D.LFG(U.w7))},a.\u0275prov=D.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},8676:(S,R,t)=>{t.d(R,{I:()=>O});var C=t(3496),u=t(9434),M=t(3512),f=t(1299),U=t(9972),K=t(8115),T=t(5650),W=t(2722),o=t(591),x=t(8723),I=t(3426),y=t(567),r=t(7545),E=t(5154),A=t(13),_=t(1709),m=t(4850),l=t(7221),d=t(2994),v=t(4401);let O=(()=>{class h extends M.cx{constructor(D){super(),this._settings=D,this._poll=new o.X(0),this._options=new o.X({start:Date.now()}),this._loading=new o.X(""),this._schedule=new o.X([]),this.options=this._options.asObservable(),this.loading=this._loading.asObservable(),this.schedule=this._loading.asObservable(),this.calendars=(0,x.H)(1e3).pipe((0,r.w)(g=>(0,u.yJ)()),(0,E.d)(1)),this.events=(0,I.aj)([this._options,this._poll]).pipe((0,A.b)(1e3),(0,_.zg)(([g])=>{this._loading.next("Loading schedule...");const a={period_start:(0,U.Z)((0,K.Z)(g.start)),period_end:(0,U.Z)((0,T.Z)((0,W.Z)(g.start),6))};return g.calendar&&(a.calendar=g.calendar),this._schedule.next(this._schedule.getValue().filter(p=>!(0,M.MZ)(1e3*a.period_start,1e3*a.period_end,p.date,p.date+60*p.duration*1e3))),(0,y.D)([!0===this._settings.get("app.events.use_bookings")?(0,C.F2)({...a,type:"room"}).pipe((0,m.U)(p=>p.map(i=>(0,f.Yd)(i)))):(0,f.u$)({...a}),(0,C.F2)({...a,type:"desk"}),(0,C.F2)({...a,type:"parking"})]).pipe((0,l.K)(p=>[]))}),(0,m.U)(([g,a])=>{const p=[...this._schedule.getValue(),...g,...a.filter(i=>"declined"!==i.status)].sort((i,L)=>i.date-L.date);return this._schedule.next((0,M.Tw)(p,"id")),p}),(0,l.K)(g=>[]),(0,d.b)(g=>this._loading.next("")),(0,E.d)(1))}startPolling(D=15e3){this.interval("poll",()=>this._poll.next(Date.now()),D)}stopPolling(){this.clearInterval("poll")}setOptions(D){this._options.next({...this._options.getValue(),...D})}}return h.\u0275fac=function(D){return new(D||h)(v.LFG(M.gb))},h.\u0275prov=v.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},9434:(S,R,t)=>{t.d(R,{ot:()=>A,yJ:()=>r.yJ});var C=t(5861),u=t(591),M=t(2994),f=t(5154),U=t(7224),K=t(9972),T=t(8115),W=t(2722),o=t(9756),x=t(4871),I=t(719),y=t(565),r=t(8313),E=t(4401);let A=(()=>{class _ extends x.c{constructor(l,d){super(),this._org=l,this._settings=d,this._calendars=new u.X([]),this.calendar_list=(0,r.yJ)().pipe((0,M.b)(v=>this._calendars.next(v)),(0,f.d)(1)),this.query=()=>(0,r.yJ)(),this.freeBusy=v=>(0,r.tS)(v,this._org),this.availability=v=>(0,r.v7)(v),this._org.initialised.pipe((0,U.P)(v=>v)).subscribe(()=>this.init())}init(){var l=this;return(0,C.Z)(function*(){l._settings.get("app.events.use_bookings")||l._initialised.next(!0)})()}get calendars(){return this._calendars.getValue()}getFreeBusyDate(l,d){return(0,r.tS)({period_start:(0,K.Z)((0,T.Z)(l)),period_end:(0,K.Z)((0,W.Z)(l)),calendars:d},this._org)}checkSpacesAvailability(l,d,v,O){return(0,C.Z)(function*(){const h=yield(0,r.v7)({period_start:d,period_end:v,system_ids:l.join(",")}).toPromise(),P=new Date(O?.date).valueOf(),D=(0,o.Z)(P,O?.duration).valueOf();return!!h.every(a=>{const p=a.availability;if(O&&a.id===O.system?.email){const i=p.findIndex(L=>L.date>=P&&(0,o.Z)(L.date,L.duration).valueOf()<=D);-1!==i&&p.splice(i,1)}return!p.length})})()}}return _.\u0275fac=function(l){return new(l||_)(E.LFG(y.w),E.LFG(I.g))},_.\u0275prov=E.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()}}]);