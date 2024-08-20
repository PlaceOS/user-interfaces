"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["common"],{5323:(X,H,t)=>{t.d(H,{y:()=>et});var P=t(9204),D=t(7915),O=t(2768),m=t(8113),U=t(2185),R=t(2168),j=t(6484),S=t(1257),_=t(9908),A=t(3240),x=t(6441),k=t(3206),u=t(9675),I=t(1874),F=t(5213),y=t(2730),W=t(521),a=t(2175),l=t(1536),c=t(6020),C=t(9803),h=t(6e3),V=t(8627),M=t(7504),r=t(1963),p=t(6109),o=t(5443),E=t(9314),v=t(7841),K=t(9273),B=t(7404),tt=t(2587);let et=(()=>{class G extends O.Tv{constructor(d,Y,Z,N,$){var T;super(),T=this,this._settings=d,this._org=Y,this._lockers=Z,this._dialog=N,this._parking=$,this._poll=new W.t(0),this._poll_type=new W.t("api"),this._loading=new W.t(!1),this._filters=new W.t({shown_types:["event","desk","parking","visitor","locker","group-event"]}),this._date=new W.t(Date.now()),this._update=(0,a.zV)([this._date,this._poll]).pipe((0,C.B)(500),(0,h.M)(e=>this._loading.next(!0))),this._deleted=[],this._space_bookings=this._org.active_building.pipe((0,V.p)(e=>!!e),(0,M.w)("id"),(0,C.B)(300),(0,h.M)(e=>this.unsubWith("bind:")),(0,r.n)(({id:e})=>(this._loading.next(!0),(0,R.Ot)(e))),(0,p.F)(([e],[i])=>e!==i),(0,r.n)(e=>(this._loading.next(!1),(0,a.zV)((e||[]).map(i=>{const s=(0,j.f_4)(i.id,"Bookings").binding("bookings"),n=s.listen().pipe((0,o.T)(g=>(g||[]).map(L=>new m.LR({...L,resources:L.attendees.filter(b=>b.email===i.email||b.resource),system:i}))),(0,E.W)(g=>(0,l.of)([])));return this.hasSubscription(`bind:${i.id}`)||this.subscription(`bind:${i.id}`,s.bind()),n})))),(0,o.T)(e=>(0,O.Bq)(e)),(0,v.t)(1)),this.ws_events=(0,a.zV)([this._space_bookings,this._update]).pipe((0,o.T)(([e,[i]])=>{const s=(0,O.Ny)();return e.filter(n=>(0,S.r)(n.date,i)&&(n.host.toLowerCase()===s.email.toLowerCase()||n.attendees.find(g=>g.email.toLowerCase()===s.email.toLowerCase()))&&!n.linked_bookings?.find(g=>"group-event"===g.booking_type))})),this.api_events=this._update.pipe((0,r.n)(([e])=>{const i={period_start:(0,_._)((0,A.o)(e)),period_end:(0,_._)((0,x.D)(e))};return this._settings.get("app.events.use_bookings")?(0,D.tj)({...i,type:"room"}).pipe((0,o.T)(s=>s.map(n=>(0,m.Uv)(n))),(0,E.W)(s=>(0,l.of)([]))):(0,m.UU)({...i}).pipe((0,E.W)(s=>(0,l.of)([])))}),(0,v.t)(1)),this.raw_events=(0,a.zV)([this._poll_type]).pipe((0,r.n)(([e])=>"api"===e?this.api_events:this.ws_events),(0,h.M)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,v.t)(1)),this.events=this.raw_events.pipe((0,o.T)(e=>e.filter(i=>!i.extension_data?.shared_event))),this.visitors=this._update.pipe((0,r.n)(([e])=>(0,D.tj)({period_start:(0,_._)((0,A.o)(e)),period_end:(0,_._)((0,x.D)(e)),type:"visitor"}).pipe((0,E.W)(i=>(0,l.of)([])))),(0,o.T)(e=>e.filter(i=>!i.parent_id&&!i.linked_event)),(0,h.M)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,v.t)(1)),this.desks=this._update.pipe((0,r.n)(([e])=>(0,D.tj)({period_start:(0,_._)((0,A.o)(e)),period_end:(0,_._)((0,x.D)(e)),include_checked_out:!0,type:"desk"}).pipe((0,E.W)(i=>(0,l.of)([])))),(0,h.M)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,v.t)(1)),this.parking=this._update.pipe((0,r.n)(([e])=>(0,D.tj)({period_start:(0,_._)((0,A.o)(e)),period_end:(0,_._)((0,x.D)(e)),type:"parking",include_deleted:"recurring"}).pipe((0,E.W)(i=>(0,l.of)([])))),(0,h.M)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,v.t)(1)),this.group_events=this.raw_events.pipe((0,o.T)(e=>e.filter(i=>i.extension_data?.shared_event))),this.lockers=(0,a.zV)([this._org.active_building.pipe((0,V.p)(e=>!!e),(0,M.w)("id")),this._lockers.lockers$]).pipe((0,C.B)(300),(0,r.n)(function(){var e=(0,P.A)(function*([i,s]){const n=T._org.binding("lockers");return n?[yield(0,j.f_4)(n,"LockerLocations").execute("lockers_allocated_to_me").catch(b=>[]),s]:[[],s]});return function(i){return e.apply(this,arguments)}}()),(0,o.T)(([e,i])=>e.map(s=>{const n=i.find(g=>g.id===s.locker_id);return n||s.level&&s.building?(s.level=s.level||n?.level_id,s.building=s.building||this._org.levelWithID([n?.level_id])?.parent_id,new D.Qr({date:(0,A.o)(Date.now()).valueOf(),duration:1439,title:"Locker Booking",description:s.locker_name,booking_type:"locker",all_day:!0,asset_id:n.map_id,asset_name:s.locker_name,zones:[s.building,s.level],extension_data:{}})):null}).filter(s=>s)),(0,E.W)(e=>(console.error(e),(0,l.of)([]))),(0,h.M)(()=>this.timeout("end_loading",()=>this._loading.next(!1))),(0,v.t)(1)),this.bookings=(0,a.zV)([this.events,this.visitors,this.desks,this.parking,this.lockers,this.group_events]).pipe((0,o.T)(([e,i,s,n,g,L])=>[...e.filter(z=>!s.find(f=>`${z.meeting_id}`==`${f.id}`)&&"group-event"!==z.linked_bookings[0]?.booking_type),...i,...s,...n,...g,...L].sort((z,f)=>z.date-f.date))),this.filtered_bookings=(0,a.zV)([this.bookings,this._filters]).pipe((0,o.T)(([e,i])=>e.filter(s=>!(this._deleted.includes(s.instance?`${s.id}|${s.instance}`:s.id)||s.extension_data?.shared_event&&!i?.shown_types?.includes("group-event")||s instanceof m.LR&&!s.extension_data?.shared_event&&!i?.shown_types?.includes("event"))&&(s instanceof m.LR||i?.shown_types?.includes(s.booking_type))))),this.filters=this._filters.asObservable(),this.date=this._date.asObservable(),this.loading=this._loading.asObservable(),this._ignore_cancel=[],this._checkCancel=(0,a.zV)([O.U5,(0,c.Y)(6e4).pipe((0,K.Z)(0))]).pipe((0,V.p)(([e])=>!!e),(0,o.T)(function(){var e=(0,P.A)(function*([i]){const s="wfo"!==i.location,n=T._settings.get("app.auto_release");if(n&&s&&(n.time_after||n.time_before)&&n.resources?.length){const g=Math.min(60,n.time_before||0);for(const L of n.resources){const b=yield(0,D.tj)({period_start:(0,_._)((0,k.c)(Date.now())),period_end:(0,_._)((0,u.z)(Date.now(),(n.time_after||5)+g)),type:L}).toPromise(),z=(n.time_after||0)+g;for(const f of b){if(T._ignore_cancel.includes(f.id)||f.checked_in||f.rejected)continue;T._dialog.closeAll();const w=(0,I.o)((0,u.z)(f.date,n.time_after||0),Date.now());if(w>z||w<0)continue;const q=(0,u.z)(f.date,n.time_after||0),st=(0,F.b)(q.getTime()+6e4,Date.now()),J="parking"===L?"reservation":"booking",Q=yield(0,O.GE)({title:`Keep ${L} ${J}`,content:`You have indicated you are not in the office. \n                                Your  ${J} for "<i>${f.asset_name||f.title}</i>" at ${(0,y.GP)(f.date,T._settings.time_format)} will be cancelled at ${(0,y.GP)(q,T._settings.time_format)}.<br/><br/>\n                                Do you wish to keep this ${J}?`,icon:{content:"event_busy"},confirm_text:"Keep",cancel_text:"Dismiss",close_delay:st},T._dialog);"done"===Q.reason?(Q.loading("Checking in booking..."),yield(0,D.Z$)(f.id,!0).toPromise(),Q.close()):T._ignore_cancel.push(f.id)}}}});return function(i){return e.apply(this,arguments)}}())),this.subscription("poll_type",this._org.active_building.subscribe(()=>this._poll_type.next(this._settings.get("app.schedule.use_websocket")?"ws":"api"))),this.subscription("chat_event",this._settings.listen("CHAT:task_complete").subscribe(()=>this.triggerPoll())),this.subscription("wfh_checks",this._checkCancel.subscribe()),this._deleted=JSON.parse(sessionStorage.getItem("PLACEOS.events.deleted")||"[]")}triggerPoll(){this._poll.next(Date.now())}startPolling(d=6e4){return this.interval("poll",()=>this._poll.next(Date.now()),d),()=>this.stopPolling()}stopPolling(){this.clearInterval("poll")}setDate(d){this._date.next(d)}removeItem(d){this.setAsDeleted(d.instance?`${d.id}|${d.instance}`:d.id),this._poll.next(Date.now())}setAsDeleted(d){this._deleted.push(d),sessionStorage.setItem("PLACEOS.events.deleted",JSON.stringify(this._deleted))}toggleType(d,Y=!1){var Z=this;return(0,P.A)(function*(){const N=Z._filters.getValue()||{shown_types:[]},{shown_types:$}=N;$&&($.includes(d)||Y)?Z._filters.next({...N,shown_types:$.filter(T=>T!==d)}):Z._filters.next({...N,shown_types:[...$,d]})})()}static#t=this.\u0275fac=function(Y){return new(Y||G)(B.KVO(O.h$),B.KVO(U.yb),B.KVO(D.$H),B.KVO(tt.bZ),B.KVO(D.wu))};static#e=this.\u0275prov=B.jDH({token:G,factory:G.\u0275fac,providedIn:"root"})}return G})()},9184:(X,H,t)=>{t.d(H,{y:()=>C});var P=t(7915),D=t(4055),O=t(2768),m=t(8113),U=t(9908),R=t(3240),j=t(8797),S=t(6441),_=t(521),A=t(6320),x=t(2175),k=t(8757),u=t(1963),I=t(7841),F=t(9803),y=t(3107),W=t(5443),a=t(9314),l=t(6e3),c=t(7404);let C=(()=>{class h extends O.Tv{constructor(M){super(),this._settings=M,this._poll=new _.t(0),this._options=new _.t({start:Date.now()}),this._loading=new _.t(""),this._schedule=new _.t([]),this.options=this._options.asObservable(),this.loading=this._loading.asObservable(),this.schedule=this._loading.asObservable(),this.calendars=(0,A.O)(1e3).pipe((0,u.n)(r=>(0,D.CH)()),(0,I.t)(1)),this.events=(0,x.zV)([this._options,this._poll]).pipe((0,F.B)(1e3),(0,y.ZZ)(([r])=>{this._loading.next("Loading schedule...");const p={period_start:(0,U._)((0,R.o)(r.start)),period_end:(0,U._)((0,j.f)((0,S.D)(r.start),6))};return r.calendar&&(p.calendar=r.calendar),this._schedule.next(this._schedule.getValue().filter(o=>!(0,O.dH)(1e3*p.period_start,1e3*p.period_end,o.date,o.date+60*o.duration*1e3))),(0,k.p)([!0===this._settings.get("app.events.use_bookings")?(0,P.tj)({...p,type:"room"}).pipe((0,W.T)(o=>o.map(E=>(0,m.Uv)(E)))):(0,m.UU)({...p}),(0,P.tj)({...p,type:"desk"}),(0,P.tj)({...p,type:"parking"}),(0,P.tj)({...p,type:"group-event"})]).pipe((0,a.W)(o=>[]))}),(0,W.T)(([r,p,o,E])=>{const v=[...this._schedule.getValue(),...r,...p.filter(K=>"declined"!==K.status),...E.filter(K=>"declined"!==K.status)].sort((K,B)=>K.date-B.date);return this._schedule.next((0,O.Am)(v,"id")),v}),(0,a.W)(r=>[]),(0,l.M)(r=>this._loading.next("")),(0,I.t)(1))}startPolling(M=15e3){this.interval("poll",()=>this._poll.next(Date.now()),M)}stopPolling(){this.clearInterval("poll")}setOptions(M){this._options.next({...this._options.getValue(),...M})}static#t=this.\u0275fac=function(r){return new(r||h)(c.KVO(O.h$))};static#e=this.\u0275prov=c.jDH({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})()},4055:(X,H,t)=>{t.d(H,{IE:()=>F,CH:()=>u.CH});var P=t(9204),D=t(521),O=t(6e3),m=t(7841),U=t(7871),R=t(9908),j=t(3240),S=t(6441),_=t(9675),A=t(5354),x=t(4233),k=t(5762),u=t(6576),I=t(7404);let F=(()=>{class y extends A.T{constructor(a,l){super(),this._org=a,this._settings=l,this._calendars=new D.t([]),this.calendar_list=(0,u.CH)().pipe((0,O.M)(c=>this._calendars.next(c)),(0,m.t)(1)),this.query=()=>(0,u.CH)(),this.freeBusy=c=>(0,u.Yj)(c,this._org),this.availability=c=>(0,u.Sh)(c),this._org.initialised.pipe((0,U.$)(c=>c)).subscribe(()=>this.init())}init(){var a=this;return(0,P.A)(function*(){a._settings.get("app.events.use_bookings")||a._initialised.next(!0)})()}get calendars(){return this._calendars.getValue()}getFreeBusyDate(a,l){return(0,u.Yj)({period_start:(0,R._)((0,j.o)(a)),period_end:(0,R._)((0,S.D)(a)),calendars:l},this._org)}checkSpacesAvailability(a,l,c,C){return(0,P.A)(function*(){const h=yield(0,u.Sh)({period_start:l,period_end:c,system_ids:a.join(",")}).toPromise(),V=new Date(C?.date).valueOf(),M=(0,_.z)(V,C?.duration).valueOf();return!!h.every(p=>{const o=p.availability;if(C&&p.id===C.system?.email){const E=o.findIndex(v=>v.date>=V&&(0,_.z)(v.date,v.duration).valueOf()<=M);-1!==E&&o.splice(E,1)}return!o.length})})()}static#t=this.\u0275fac=function(l){return new(l||y)(I.KVO(k.y),I.KVO(x.h))};static#e=this.\u0275prov=I.jDH({token:y,factory:y.\u0275fac,providedIn:"root"})}return y})()}}]);
//# sourceMappingURL=common.js.map