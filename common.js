"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["common"],{7625:(m,I,t)=>{t.d(I,{I:()=>A});var x=t(1415),P=t(9638),D=t(232),g=t(1299),K=t(6221),T=t(2886),L=t(1091),p=t(7895),O=t(3841),M=t(5039),c=t(8406),f=t(8005),U=t(572),o=t(1265),y=t(4266),B=t(1230),r=t(3800),C=t(2606),a=t(9258),E=t(7693),_=t(1325),h=t(9523);let A=(()=>{class l extends D.KG{constructor(n,d){super(),this._settings=n,this._org=d,this._poll=new c.X(0),this._poll_type=new c.X("api"),this._loading=new c.X(!1),this._filters=new c.X({shown_types:["event","desk","parking","visitor"]}),this._date=new c.X(Date.now()),this._update=(0,f.aj)([this._date,this._poll]).pipe((0,U.b)(500),(0,o.b)(s=>this._loading.next(!0))),this._space_bookings=this._org.active_building.pipe((0,y.h)(s=>!!s),(0,B.g)("id"),(0,U.b)(300),(0,o.b)(s=>this.unsubWith("bind:")),(0,r.w)(({id:s})=>(this._loading.next(!0),(0,T.u2)(s))),(0,C.x)(([s],[e])=>s!==e),(0,r.w)(s=>(this._loading.next(!1),(0,f.aj)((s||[]).map(e=>{const i=(0,L.rTZ)(e.id,"Bookings").binding("bookings"),u=i.listen().pipe((0,a.U)(W=>(W||[]).map(R=>new g.ym({...R,resources:R.attendees.filter(Z=>Z.email===e.email||Z.resource),system:e}))));return this.hasSubscription(`bind:${e.id}`)||this.subscription(`bind:${e.id}`,i.bind()),u})))),(0,a.U)(s=>(0,D.xH)(s)),(0,E.d)(1)),this.ws_events=this._space_bookings.pipe((0,o.b)(s=>console.log("Events:",s.map(e=>`${e.host} | [${e.attendees.map(i=>i.email).join(",")}]`))),(0,a.U)(s=>{const e=(0,D.ar)();return console.log("User:",e),s.filter(i=>i.host.toLowerCase()===e.email.toLowerCase()||i.attendees.find(u=>u.email.toLowerCase()===e.email.toLowerCase()))}),(0,o.b)(s=>console.log("Your events:",s))),this.api_events=this._update.pipe((0,r.w)(([s])=>{const e={period_start:(0,p.Z)((0,O.Z)(s)),period_end:(0,p.Z)((0,M.Z)(s))};return this._settings.get("app.events.use_bookings")?(0,P.F2)({...e,type:"room"}).pipe((0,a.U)(i=>i.map(u=>(0,g.Yd)(u))),(0,_.K)(i=>[])):(0,g.u$)({...e}).pipe((0,_.K)(i=>[]))}),(0,o.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,E.d)(1)),this.events=this._poll_type.pipe((0,r.w)(s=>"api"===s?this.api_events:this.ws_events)),this.visitors=this._update.pipe((0,r.w)(([s])=>(0,P.F2)({period_start:(0,p.Z)((0,O.Z)(s)),period_end:(0,p.Z)((0,M.Z)(s)),type:"visitor"}).pipe((0,_.K)(e=>(console.error(e),[])))),(0,o.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,E.d)(1)),this.desks=this._update.pipe((0,r.w)(([s])=>(0,P.F2)({period_start:(0,p.Z)((0,O.Z)(s)),period_end:(0,p.Z)((0,M.Z)(s)),type:"desk"}).pipe((0,_.K)(e=>(console.error(e),[])))),(0,o.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,E.d)(1)),this.parking=this._update.pipe((0,r.w)(([s])=>(0,P.F2)({period_start:(0,p.Z)((0,O.Z)(s)),period_end:(0,p.Z)((0,M.Z)(s)),type:"parking"}).pipe((0,_.K)(e=>[]))),(0,o.b)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,E.d)(1)),this.bookings=(0,f.aj)([this.events,this.visitors,this.desks,this.parking]).pipe((0,a.U)(([s,e,i,u])=>[...s,...e,...i,...u].sort((W,R)=>W.date-R.date))),this.filtered_bookings=(0,f.aj)([this.bookings,this._filters]).pipe((0,a.U)(([s,e])=>s.filter(i=>i instanceof g.ym&&e?.shown_types?.includes("event")||e?.shown_types?.includes(i.booking_type)))),this.filters=this._filters.asObservable(),this.date=this._date.asObservable(),this.loading=this._loading.asObservable(),this.subscription("poll_type",this._org.active_building.subscribe(()=>this._poll_type.next(this._settings.get("app.schedule.use_websocket")?"ws":"api")))}triggerPoll(){this._poll.next(Date.now())}startPolling(n=6e4){return this.interval("poll",()=>{"visible"===document.visibilityState&&this._poll.next(Date.now())},n),()=>this.stopPolling()}stopPolling(){this.clearInterval("poll")}setDate(n){this._date.next(n)}removeItem(n){this._poll.next(Date.now())}toggleType(n,d=!1){var s=this;return(0,x.Z)(function*(){const e=s._filters.getValue()||{shown_types:[]},{shown_types:i}=e;i&&(i.includes(n)||d)?s._filters.next({...e,shown_types:i.filter(u=>u!==n)}):s._filters.next({...e,shown_types:[...i,n]})})()}}return l.\u0275fac=function(n){return new(n||l)(h.LFG(D.gb),h.LFG(K.w7))},l.\u0275prov=h.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},8676:(m,I,t)=>{t.d(I,{I:()=>_});var x=t(9638),P=t(9434),D=t(232),g=t(1299),K=t(7895),T=t(3841),L=t(5868),p=t(5039),O=t(8406),M=t(3468),c=t(8005),f=t(5661),U=t(3800),o=t(7693),y=t(572),B=t(3932),r=t(9258),C=t(1325),a=t(1265),E=t(9523);let _=(()=>{class h extends D.KG{constructor(l){super(),this._settings=l,this._poll=new O.X(0),this._options=new O.X({start:Date.now()}),this._loading=new O.X(""),this._schedule=new O.X([]),this.options=this._options.asObservable(),this.loading=this._loading.asObservable(),this.schedule=this._loading.asObservable(),this.calendars=(0,M.H)(1e3).pipe((0,U.w)(v=>(0,P.yJ)()),(0,o.d)(1)),this.events=(0,c.aj)([this._options,this._poll]).pipe((0,y.b)(1e3),(0,B.zg)(([v])=>{this._loading.next("Loading schedule...");const n={period_start:(0,K.Z)((0,T.Z)(v.start)),period_end:(0,K.Z)((0,L.Z)((0,p.Z)(v.start),6))};return v.calendar&&(n.calendar=v.calendar),this._schedule.next(this._schedule.getValue().filter(d=>!(0,D.MZ)(1e3*n.period_start,1e3*n.period_end,d.date,d.date+60*d.duration*1e3))),(0,f.D)([!0===this._settings.get("app.events.use_bookings")?(0,x.F2)({...n,type:"room"}).pipe((0,r.U)(d=>d.map(s=>(0,g.Yd)(s)))):(0,g.u$)({...n}),(0,x.F2)({...n,type:"desk"}),(0,x.F2)({...n,type:"parking"})]).pipe((0,C.K)(d=>[]))}),(0,r.U)(([v,n])=>{const d=[...this._schedule.getValue(),...v,...n.filter(s=>"declined"!==s.status)].sort((s,e)=>s.date-e.date);return this._schedule.next((0,D.Tw)(d,"id")),d}),(0,C.K)(v=>[]),(0,a.b)(v=>this._loading.next("")),(0,o.d)(1))}startPolling(l=15e3){this.interval("poll",()=>this._poll.next(Date.now()),l)}stopPolling(){this.clearInterval("poll")}setOptions(l){this._options.next({...this._options.getValue(),...l})}}return h.\u0275fac=function(l){return new(l||h)(E.LFG(D.gb))},h.\u0275prov=E.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},9434:(m,I,t)=>{t.d(I,{ot:()=>B,yJ:()=>o.yJ}),t(4603);var P=t(1415),D=t(8406),g=t(1265),K=t(7693),T=t(3155),L=t(7895),p=t(3841),O=t(5039),M=t(7807),c=t(8939),f=t(719),U=t(565),o=t(6217),y=t(9523);let B=(()=>{class r extends c.K{constructor(a,E){super(),this._org=a,this._settings=E,this._calendars=new D.X([]),this.calendar_list=(0,o.yJ)().pipe((0,g.b)(_=>this._calendars.next(_)),(0,K.d)(1)),this.query=()=>(0,o.yJ)(),this.freeBusy=_=>(0,o.tS)(_,this._org),this.availability=_=>(0,o.v7)(_),this._org.initialised.pipe((0,T.P)(_=>_)).subscribe(()=>this.init())}init(){var a=this;return(0,P.Z)(function*(){a._settings.get("app.events.use_bookings")||a._initialised.next(!0)})()}get calendars(){return this._calendars.getValue()}getFreeBusyDate(a,E){return(0,o.tS)({period_start:(0,L.Z)((0,p.Z)(a)),period_end:(0,L.Z)((0,O.Z)(a)),calendars:E},this._org)}checkSpacesAvailability(a,E,_,h){return(0,P.Z)(function*(){const A=yield(0,o.v7)({period_start:E,period_end:_,system_ids:a.join(",")}).toPromise(),l=new Date(h?.date).valueOf(),v=(0,M.Z)(l,h?.duration).valueOf();return!!A.every(d=>{const s=d.availability;if(h&&d.id===h.system?.email){const e=s.findIndex(i=>i.date>=l&&(0,M.Z)(i.date,i.duration).valueOf()<=v);-1!==e&&s.splice(e,1)}return!s.length})})()}}return r.\u0275fac=function(a){return new(a||r)(y.LFG(U.w),y.LFG(f.g))},r.\u0275prov=y.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);
//# sourceMappingURL=common.js.map