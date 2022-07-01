"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["default-libs_bookings_src_index_ts"],{1847:(W,E,s)=>{s.d(E,{$N:()=>F.$,fy:()=>ge,jT:()=>D.jT,FD:()=>D.FD,gV:()=>se,F2:()=>D.F2,FP:()=>D.FP,km:()=>D.km,Fo:()=>D.Fo,Wp:()=>D.Wp}),s(3560);var e=s(2560),v=s(1484),h=s(3294),w=s(4666),l=s(2508),N=(s(5074),s(1267),s(4522));s(1708),s(2306),s(9697);var Y=s(2922);function ie(o,u){if(1&o){const t=e.EpF();e.TgZ(0,"div",2)(1,"h2",3),e._uU(2,"COVID-19 Questionnaire"),e.qZA(),e.TgZ(3,"main",4)(4,"div",5)(5,"label"),e._uU(6," Have you travelled overseas within the last 14 days?"),e.TgZ(7,"span"),e._uU(8,"*"),e.qZA()(),e.TgZ(9,"mat-radio-group",6)(10,"mat-radio-button",7),e._uU(11,"Yes"),e.qZA(),e.TgZ(12,"mat-radio-button",7),e._uU(13,"No"),e.qZA()()(),e.TgZ(14,"div",5)(15,"label"),e._uU(16," Are you unwell or experiencing any cold or flu-like symptoms?"),e.TgZ(17,"span"),e._uU(18,"*"),e.qZA()(),e.TgZ(19,"mat-radio-group",8)(20,"mat-radio-button",7),e._uU(21,"Yes"),e.qZA(),e.TgZ(22,"mat-radio-button",7),e._uU(23,"No"),e.qZA()()(),e.TgZ(24,"div",9)(25,"label"),e._uU(26," Have you had contact with anyone with suspected COVID-19?"),e.TgZ(27,"span"),e._uU(28,"*"),e.qZA()(),e.TgZ(29,"mat-radio-group",10)(30,"mat-radio-button",7),e._uU(31,"Yes"),e.qZA(),e.TgZ(32,"mat-radio-button",7),e._uU(33,"No"),e.qZA()()()(),e.TgZ(34,"footer",11)(35,"button",12),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.submit())}),e._uU(36,"Submit"),e.qZA()(),e.TgZ(37,"button",13)(38,"i",14),e._uU(39,"close"),e.qZA()()()}if(2&o){const t=e.oxw();e.xp6(3),e.Q6J("formGroup",t.form),e.xp6(7),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1),e.xp6(8),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1),e.xp6(8),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1)}}function ae(o,u){1&o&&(e.TgZ(0,"main",15)(1,"p",16),e._uU(2," Your request to work from the office has been rejected based on your response to the compulsory Covid-19 questions. Please feel free to submit a new request when circumstances change in a way that changes your answer to the questions. "),e.qZA(),e.TgZ(3,"button",13)(4,"i",14),e._uU(5,"close"),e.qZA()()())}let G=(()=>{class o{constructor(){this.event=new e.vpe,this.form=new l.cw({travelled:new l.NI("",[l.kI.required]),unwell:new l.NI("",[l.kI.required]),contact:new l.NI("",[l.kI.required])})}submit(){this.form.markAllAsTouched(),this.form.valid?Object.keys(this.form.value).find(t=>!0===this.form.value[t]||"true"===this.form.value[t])?this.failure=!0:this.event.emit({reason:"done"}):(0,h.cB)("All the questions must be answered")}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["desk-question-modal"]],outputs:{event:"event"},decls:3,vars:2,consts:[["class","relative",4,"ngIf","ngIfElse"],["fail_state",""],[1,"relative"],[1,"p-4","text-xl"],[1,"p-4",3,"formGroup"],[1,"flex","flex-col","mb-4"],["formControlName","travelled",1,"space-x-2"],[3,"value"],["formControlName","unwell",1,"space-x-2"],[1,"flex","flex-col"],["formControlName","contact",1,"space-x-2"],[1,"flex","justify-center","items-center","p-2"],["mat-button","",3,"click"],["close","","mat-icon-button","","mat-dialog-close",""],[1,"material-icons"],["failure","",1,"pt-8","relative"],[1,"p-4"]],template:function(t,n){if(1&t&&(e.YNc(0,ie,40,7,"div",0),e.YNc(1,ae,6,0,"ng-template",null,1,e.W1O)),2&t){const i=e.MAs(2);e.Q6J("ngIf",!n.failure)("ngIfElse",i)}},dependencies:[w.O5,l.JJ,l.JL,l.sg,l.u,Y.VQ,Y.U0,N.lW,v.ZT],styles:["main[_ngcontent-%COMP%]{width:24rem;max-width:calc(100vw - 4.5rem)}[close][_ngcontent-%COMP%]{position:absolute;top:.5rem;right:.5rem}\n/*# sourceMappingURL=desk-questions-modal.component.ts-angular-inline--57.css.map*/"]}),o})();var O=s(1670),H=s(9885),re=s(3619),le=s(3690),S=s(1810),de=s(2317),X=s(3861),ce=s(8235),A=s(4505),q=s(4139),ee=s(7716),B=s(9128),ue=s(3298),te=s(9095),$=s(6942),L=s(8759),_e=s(823),oe=s(5670),fe=s(3910),F=s(6962),R=s(4922);function ne(o=new F.$){const u=new l.cw({id:new l.NI(o.id||""),date:new l.NI(o.date,[]),all_day:new l.NI(o.all_day??!1),duration:new l.NI(o.duration),booking_type:new l.NI(o.booking_type),zones:new l.NI(o.zones),title:new l.NI(o.title),description:new l.NI(o.description),asset_id:new l.NI(o.asset_id),asset_name:new l.NI(o.description),map_id:new l.NI(o.extension_data?.map_id),user:new l.NI((0,h.ar)()),user_id:new l.NI(o.user_id),user_email:new l.NI(o.user_email),booked_by:new l.NI((0,h.ar)()),booked_by_id:new l.NI(o.booked_by_id),booked_by_email:new l.NI(o.booked_by_email)});return u.valueChanges.subscribe(t=>{const n=t.user,i=t.booked_by;(i||n)&&u.patchValue({user_id:n.id||i.id,user_email:n.email||i.id,booked_by_id:i.id,booked_by_email:i.email},{emitEvent:!1})}),u}function se(o,u){return j.apply(this,arguments)}function j(){return(j=(0,O.Z)(function*(o,u,t=[]){const n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="1000px",n.style.height="1000px",document.body.appendChild(n);const i=yield(0,R.i9)({url:o,element:n}),c=(0,R.gA)(i),a=("string"==typeof u?c.mappings[u]:u)||{x:.5,y:.5};let d=10,m="";console.log("Desks:",t),console.log("Mappings:",c.mappings),console.log("Point:",a);for(const f of t){const{x:p,y:_}=c.mappings[f]||{x:2,y:2},y=Math.sqrt((p-a.x)*(p-a.x)+(_-a.y)*(_-a.y));console.log(`Desk ${f}:`,c.mappings[f],y),y<d&&(d=y,m=f)}return document.body.removeChild(n),(0,R.hX)(i),m})).apply(this,arguments)}var D=s(354);const pe=["book/desks"];let ge=(()=>{class o extends h.KG{constructor(t,n,i,c){super(),this._router=t,this._settings=n,this._org=i,this._dialog=c,this._view=new A.X("form"),this._options=new A.X({type:"desk"}),this._form=new A.X(ne()),this._form_value=new A.X({}),this._booking=new A.X(null),this._loading=new A.X(""),this.last_success=new F.$(JSON.parse(sessionStorage.getItem("PLACEOS.last_booked_booking")||"{}")),this.loading=this._loading.asObservable(),this.options=this._options.pipe((0,B.d)(1)),this.assets=this.options.pipe(function me(o,u){return(0,ue.x)((t,n)=>u?u(t[o],n[o]):t[o]===n[o])}("zone_id"),(0,te.w)(({type:a})=>this._org.building&&"desk"===a?(this._loading.next("Loading desks..."),(0,le.BW_)(this._org.building.id,{name:"desks"}).pipe((0,$.U)(d=>(0,h.xH)(d.map(m=>(m.metadata.desks?.details instanceof Array?m.metadata.desks?.details:[]).map(f=>({...f,zone:m.zone}))))))):(0,q.of)([])),(0,L.b)(()=>this._loading.next("")),(0,B.d)(1)),this.features=this.assets.pipe((0,$.U)(a=>{const d=[];for(const{features:m}of a)m instanceof Array&&m.forEach(f=>d.push(f));return(0,h.Tw)(d).sort((m,f)=>m.localeCompare(f))}),(0,B.d)(1)),this.available_assets=(0,ee.aj)([this.options,this.assets,this._form_value]).pipe((0,_e.b)(500),(0,L.b)(([{type:a}])=>this._loading.next(`Checking ${a} availability...`)),(0,te.w)(([a,d,m])=>(0,D.F2)({period_start:(0,S.Z)(m.date),period_end:(0,S.Z)((0,de.Z)(m.date,m.duration||1440)),type:a.type,zones:a.zone_id}).pipe((0,$.U)(f=>d.filter(p=>!1!==p.bookable&&(!a.features||a.features?.every(_=>p.features.includes(_)))&&(!a.zone_id||a.zone_id===p.zone?.id||a.zone_id===p.zone?.parent_id)&&!f.find(_=>_.asset_id===p.id&&"declined"!==_.status))))),(0,L.b)(()=>this._loading.next("")),(0,B.d)(1)),this.grouped_availability=(0,ee.aj)([this.options,this.available_assets]).pipe((0,$.U)(([a,d])=>{const m=[],f=[...d].sort((_,y)=>_.zone?.id?.localeCompare(y.zone?.id)),p=a.members?.length?a.members:[(0,h.ar)()];for(;f.length;){const _=[];let y=f.pop();for(;_.length<p.length&&(!_.length||_.find(b=>b.zone?.id===y.zone?.id));)_.push(y),y=f.pop();_.length<p.length||m.push(_)}return m})),this.subscription("router.bookings",this._router.events.subscribe(a=>{a instanceof H.m2&&!pe.find(d=>a.url.includes(d))&&this.clearForm()})),this._org.initialised.pipe((0,oe.P)(a=>a)).subscribe(()=>this.setOptions({}))}get view(){return this._view.getValue()}get form(){return this._form.getValue()}get booking(){return this._booking.getValue()}newForm(t=new F.$){this._form.next(ne(t)),this.subscription("form_change",this._form.getValue().valueChanges.subscribe(()=>this.storeForm())),this._booking.next(t),this._options.next({type:this._options.getValue().type})}setView(t){this._view.next(t)}setOptions(t){this._options.next({...this._options.getValue(),...t})}resetForm(){this._form.getValue()||this.newForm();const t=this._booking.getValue();this._form.getValue().patchValue({...t||{},...t?.extension_data||{}}),this._options.next({type:this._options.getValue().type})}clearForm(){sessionStorage.removeItem("PLACEOS.booking_form"),sessionStorage.removeItem("PLACEOS.booking_form_options"),this.newForm()}storeForm(){sessionStorage.setItem("PLACEOS.booking_form",JSON.stringify(this._form.getValue()?.value||{})),sessionStorage.setItem("PLACEOS.booking_form_filters",JSON.stringify(this._options.getValue()||{})),this._form_value.next(this._form.getValue()?.value||{})}loadForm(){this._form.getValue()||this.newForm(),this._form.getValue().patchValue({...JSON.parse(sessionStorage.getItem("PLACEOS.booking_form")||"{}")}),this.setOptions({zone_id:this._org.building?.id,...JSON.parse(sessionStorage.getItem("PLACEOS.booking_form_filters")||"{}")})}confirmPost(){var t=this;return(0,O.Z)(function*(){yield t.checkQuestions();const n=t._options.getValue(),i=t._form.getValue();let c=`Would you like to book the ${n.type} ${i.value.asset_name} for ${(0,X.Z)(i.value.date,"dd MMM yyyy")}${i.value.duration<720?" at "+(0,X.Z)(i.value.date,"h:mm a"):""}`;n.group&&(c=`${c}.<br>You group members will be assigned desks nearby your selected desk.`);const a=yield(0,h._5)({title:`Book ${n.type}`,content:c,icon:{content:"event_available"}},t._dialog);if("done"!==a?.reason)throw"User cancelled";a.loading("Performing booking request..."),n.group?yield t.postFormForGroup().catch(d=>{throw(0,h.cB)(d),a.close(),d}):yield t.postForm().catch(d=>{throw(0,h.cB)(d),a.close(),d}),a.close()})()}postForm(t=!1){var n=this;return(0,O.Z)(function*(){const i=n._form.getValue();if(!i)throw"No form for booking";if(!i.valid)throw`Some form fields are invalid. [${(0,h.RD)(i).join(", ")}]`;t||(yield n.checkResourceAvailable(i.value,n._options.getValue().type)),(i.value.duration>=720||i.value.all_day)&&i.patchValue({date:(0,ce.Z)(i.value.date,{hours:11,minutes:59}).valueOf(),duration:720});const c=yield(0,D.km)(new F.$(i.value)).toPromise(),{booking_type:a}=i.value;return n.clearForm(),n._form.getValue()?.patchValue({booking_type:a}),n.last_success=c,sessionStorage.setItem("PLACEOS.last_booked_booking",JSON.stringify(c)),n.setView("success"),c})()}postFormForGroup(){var t=this;return(0,O.Z)(function*(){const{members:n,group:i,type:c}=t._options.getValue();if(!i)throw"No group available to book for";const a=n.filter(b=>b.email!==(0,h.ar)().email);if(a.length<=0)throw"No members in your group to book for.";const d=t._form.getValue().value,m=yield t.available_assets.pipe((0,fe.q)(1)).toPromise(),f=m.find(b=>b.id===d.asset_id||b.map_id===d.asset_id),p=t._org.levelWithID([f.zone?.id]),_=[f,...yield t._getNearbyResources(p.map_id,d.asset_id,m,a.length)];console.log("Selected Assets:",_);const y=[(0,h.ar)(),...a];yield Promise.all(y.map((b,I)=>t.checkResourceAvailable({...d,asset_id:_[I].map_id||_[I].id,user_email:b.email},c)));for(let b=0;b<y.length;b++){const I=y[b],Z=_[b];t._form.getValue().patchValue({...d,user:I,asset_id:Z?.id,asset_name:Z.name,map_id:Z?.map_id||Z?.id,description:Z.name,zones:Z.zone?[Z.zone?.parent_id,Z.zone?.id]:[]}),console.log("Form Value:",t._form.getValue().value),t.postForm(!0)}})()}checkQuestions(){var t=this;return(0,O.Z)(function*(){if(!1!==t._settings.get("app.desks.ignore_questions"))return;const n=t._dialog.open(G);if("done"!==(yield Promise.race([n.componentInstance.event.pipe((0,oe.P)(a=>"done"===a.reason)).toPromise(),n.afterClosed().toPromise()]))?.reason)throw"User cancelled";const c=n.componentInstance.form.value;for(const a in c)if(c[a])throw"User failed questionaire";n.close()})()}checkResourceAvailable({asset_id:t,date:n,duration:i,user_email:c,all_day:a},d){var m=this;return(0,O.Z)(function*(){i=a?720:i||60;const f=yield(0,D.F2)({period_start:(0,S.Z)(n),period_end:(0,S.Z)(n+60*i*1e3),type:d}).toPromise();if(f.find(_=>_.asset_id===t))throw`${t} is not available at the selected time`;const p=m._settings.get(`app.booking.allowed_daily_${d}_count`)??1;if(p>0&&f.filter(_=>_.user_email===(c||(0,h.ar)()?.email)&&"declined"!==_.status).length>=p){const _=c===(0,h.ar)().email;throw`${_?"You":c} already ${_?"have":"has"} a desk booked`}return!0})()}_getNearbyResources(t,n,i,c){return(0,O.Z)(function*(){const a=[];let d=i.filter(m=>m.id!==n&&m.map_id!==n);console.log("Assets:",i,d,n);for(let m=0;m<c;m++){const f=yield se(t,n,d.map(p=>p.map_id||p.id));f&&(a.push(i.find(p=>p.id===f||p.map_id===f)),d=d.filter(p=>p.id!==f&&p.map_id!==f)),console.log("Asset List:",d)}return a})()}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(H.F0),e.LFG(h.gb),e.LFG(re.w7),e.LFG(v.uw))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},6962:(W,E,s)=>{s.d(E,{$:()=>P});var x=s(1810),e=s(5692),v=s(2317),h=s(8987),w=s(5845),l=s(2757),M=s(1233);class P{constructor(r={}){this.id=r.id||"",this.asset_id=r.asset_id||"",this.asset_name=r.asset_name||r.extension_data?.asset_name||"",this.zones=r.zones||[],this.booking_start=r.date/1e3||r.booking_start||(0,x.Z)((0,e.Z)((0,v.Z)(Date.now(),5),{nearestTo:5})),this.booking_end=r.date/1e3+60*r.duration||r.booking_end||(0,x.Z)((0,v.Z)(1e3*this.booking_start,r.duration||60)),this.booking_type=r.booking_type||"",this.type=r.type||"booking",this.date=r.date||1e3*this.booking_start,this.duration=r.duration||Math.abs((0,h.Z)(1e3*this.booking_start,1e3*this.booking_end)),this.timezone=r.timezone||Intl.DateTimeFormat().resolvedOptions().timeZone,this.user_email=r.user_email||"",this.user_id=r.user_id||"",this.user_name=r.user_name||"",this.title=r.title||"Desk booking",this.description=r.description||"",this.checked_in=!!r.checked_in,this.rejected=!!r.rejected,this.approved=!!r.approved,this.deleted=!!r.deleted,this.booked_by_id=r.booked_by_id||"",this.booked_by_name=r.booked_by_name||"",this.booked_by_email=r.booked_by_email||"",this.approver_id=r.approver_id||"",this.approver_email=r.approver_email||"",this.approver_name=r.approver_name||"",this.extension_data=r.extension_data||{},this.access=!!r.extension_data?.access,this.all_day=r.all_day??this.duration>720,this.status=this.rejected?"declined":this.approved?"approved":"tentative";for(const C in r)C in this||(this.extension_data[C]=r[C]||this.extension_data[C])}toJSON(){const r={...this};return this.id||delete r.id,delete r.date,delete r.duration,r}get location(){return this.description}get is_today(){return(0,w.Z)(this.date,new Date)}get is_done(){const r=new Date,C=this.all_day?(0,l.Z)(this.date,24):(0,v.Z)(this.date,this.duration);return(0,M.Z)(r,C)}}},354:(W,E,s)=>{s.d(E,{F2:()=>P,FD:()=>J,FP:()=>Q,Fo:()=>N,Wp:()=>C,jT:()=>V,km:()=>z});var x=s(3690),e=s(4139),v=s(6942),h=s(7418),w=s(5038),l=s(6962);const M="/api/staff/v1/bookings";function P(g){const k=(0,w.U)(g);return(0,x.U2M)(`${M}${k?"?"+k:""}`).pipe((0,v.U)(T=>T.map(U=>new l.$(U))),(0,h.K)(T=>(0,e.of)([])))}function N(g){return(0,x.U2M)(`${M}/${encodeURIComponent(g)}`).pipe((0,v.U)(k=>new l.$(k)))}function C(g,k,T="patch"){return("patch"===T?x.r$K:x.gzd)(`${M}/${encodeURIComponent(g)}`,k).pipe((0,v.U)(U=>new l.$(U)))}const z=g=>g.id?C(g.id,g):function r(g){return(0,x.v_Q)(`${M}`,g).pipe((0,v.U)(k=>new l.$(k)))}(g);function V(g){return(0,x.v_Q)(`${M}/${encodeURIComponent(g)}/approve`,"").pipe((0,v.U)(k=>new l.$(k)))}function Q(g){return(0,x.v_Q)(`${M}/${encodeURIComponent(g)}/reject`,"").pipe((0,v.U)(k=>new l.$(k)))}function J(g,k){const T=(0,w.U)({state:k});return(0,x.v_Q)(`${M}/${encodeURIComponent(g)}/check_in?${T}`,"").pipe((0,v.U)(U=>new l.$(U)))}}}]);
//# sourceMappingURL=default-libs_bookings_src_index_ts.js.map