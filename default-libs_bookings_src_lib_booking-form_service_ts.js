"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["default-libs_bookings_src_lib_booking-form_service_ts"],{8929:(k,P,s)=>{s.d(P,{f:()=>C});var e=s(3918),S=s(9885),f=s(3770),F=s(3690),t=s(1810),N=s(2317),D=s(3861),b=s(7485),O=s(4505),m=s(4139),u=s(7716),c=s(9128),M=s(823),v=s(6116),B=s(9095),T=s(8759),R=s(6942),x=s(9151),$=s(5670),Z=s(3910),G=s(565),y=s(6962),K=s(1980),U=s(354),w=s(4282),V=s(8871),W=s(4367),L=s(2560),Q=s(5699);const z=["book/desks","book/parking","book/newdesk","book/new-parking"];class C extends f.KG{constructor(o,n,_,i,g){super(),this._router=o,this._settings=n,this._org=_,this._dialog=i,this._payments=g,this._view=new O.X("form"),this._options=new O.X({type:"desk"}),this._form=new O.X((0,K.PR)()),this._booking=new O.X(null),this._loading=new O.X(""),this.last_success=new y.$(JSON.parse(sessionStorage.getItem("PLACEOS.last_booked_booking")||"{}")),this.loading=this._loading.asObservable(),this.options=this._options.pipe((0,c.d)(1)),this.assets=this.options.pipe((0,M.b)(300),(0,v.g)("type"),(0,B.w)(({type:a})=>{if(!this._org.building)return(0,m.of)([]);switch(a){case"desk":return this._loading.next("Loading desks..."),this.loadAssets("desks");case"parking":return this._loading.next("Loading parking spaces..."),this.loadAssets("parking_spaces")}return(0,m.of)([])}),(0,T.b)(()=>this._loading.next("")),(0,c.d)(1)),this.features=this.assets.pipe((0,R.U)(a=>{const l=[];for(const{features:r}of a)r instanceof Array&&r.forEach(d=>l.push(d));return(0,f.Tw)(l).sort((r,d)=>r.localeCompare(d))}),(0,c.d)(1)),this.available_assets=(0,u.aj)([this.options,this.assets,this._form]).pipe((0,x.h)(([a,l,r])=>r.getRawValue().date>0&&r.getRawValue().duration>0),(0,M.b)(500),(0,T.b)(([{type:a}])=>this._loading.next(`Checking ${a} availability...`)),(0,B.w)(([a,l,r])=>(0,U.F2)({period_start:(0,t.Z)(r.getRawValue().date),period_end:(0,t.Z)((0,N.Z)(r.getRawValue().date,r.getRawValue().duration||1440)),type:a.type,zones:a.zone_id}).pipe((0,R.U)(d=>l.filter(p=>!1!==p.bookable&&(!a.features||a.features?.every(E=>p.features.includes(E)))&&(!a.zone_id||a.zone_id===p.zone?.id||a.zone_id===p.zone?.parent_id)&&!d.find(E=>E.asset_id===p.id&&"declined"!==E.status))))),(0,T.b)(()=>this._loading.next("")),(0,c.d)(1)),this.grouped_availability=(0,u.aj)([this.options,this.available_assets]).pipe((0,R.U)(([a,l])=>{const r=[],d=[...l].sort((E,h)=>E.zone?.id?.localeCompare(h.zone?.id)),p=a.members?.length?a.members:[(0,f.ar)()];for(;d.length;){const E=[];let h=d.pop();for(;E.length<p.length&&(!E.length||E.find(A=>A.zone?.id===h.zone?.id));)E.push(h),h=d.pop();E.length<p.length||r.push(E)}return r})),this.subscription("router.bookings",this._router.events.subscribe(a=>{a instanceof S.m2&&!z.find(l=>a.url.includes(l))&&this.clearForm()})),this._org.initialised.pipe((0,$.P)(a=>a)).subscribe(()=>this.setOptions({}))}get view(){return this._view.getValue()}get form(){return this._form.getValue()}get booking(){return this._booking.getValue()}newForm(o=new y.$){this._form.next((0,K.PR)(o)),this.subscription("form_change",this._form.getValue().valueChanges.subscribe(()=>this.storeForm())),this._booking.next(o),this._options.next({type:this._options.getValue().type})}setView(o){this._view.next(o)}setOptions(o){this._options.next({...this._options.getValue(),...o})}setFeature(o,n){if(!o?.length)return;const _=this._options.getValue()?.features||[];n&&!_.includes(o)&&_.push(o),!n&&_.includes(o)&&_.splice(_.findIndex(i=>i===o),1),this.setOptions({features:_})}resetForm(){this._form.getValue()||this.newForm();const o=this._booking.getValue();this._form.getValue().patchValue({...o||{},...o?.extension_data||{}}),this._options.next({type:this._options.getValue().type})}clearForm(){sessionStorage.removeItem("PLACEOS.booking_form"),sessionStorage.removeItem("PLACEOS.booking_form_options"),this.newForm()}storeForm(){sessionStorage.setItem("PLACEOS.booking_form",JSON.stringify(this._form.getValue()?.getRawValue()||{})),sessionStorage.setItem("PLACEOS.booking_form_filters",JSON.stringify(this._options.getValue()||{}))}loadForm(){this._form.getValue()||this.newForm(),this._form.getValue().patchValue({...JSON.parse(sessionStorage.getItem("PLACEOS.booking_form")||"{}")}),this.setOptions({zone_id:this._org.building?.id,...JSON.parse(sessionStorage.getItem("PLACEOS.booking_form_filters")||"{}")})}openBookingLinkModal(o=!1){const n=this._form.getValue();if(n.markAllAsTouched(),!n.valid&&!o)return;const _=new y.$({...this.booking,...n.getRawValue()});this._dialog.open(W.w,{data:_})}confirmPost(){var o=this;return(0,e.Z)(function*(){yield o.checkQuestions();const n=o._options.getValue(),i=o._form.getValue().getRawValue();let g=`Would you like to book the ${n.type} ${i.asset_name} for ${(0,D.Z)(i.date,"dd MMM yyyy")}${i.duration<720?" at "+(0,D.Z)(i.date,"h:mm a"):""}`;n.group&&(g=`${g}.<br>You group members will be assigned desks nearby your selected desk.`);const a=yield(0,f._5)({title:`Book ${n.type}`,content:g,icon:{content:"event_available"}},o._dialog);if("done"!==a?.reason)throw"User cancelled";a.loading("Performing booking request..."),n.group?yield o.postFormForGroup().catch(l=>{throw(0,f.cB)(l),a.close(),l}):yield o.postForm().catch(l=>{throw(0,f.cB)(l),a.close(),l}),a.close()})()}postForm(o=!1){var n=this;return(0,e.Z)(function*(){const _=n._form.getValue();if(!_)throw"No form for booking";if(!_.valid)throw`Some form fields are invalid. [${(0,f.RD)(_).join(", ")}]`;_.patchValue({booking_type:_.getRawValue().booking_type||n._options.getValue().type});const i=_.getRawValue();if(o||(yield n.checkResourceAvailable(i,n._options.getValue().type)),(i.duration>=720||i.all_day)&&_.patchValue({date:(0,b.Z)(i.date,{hours:11,minutes:59}).valueOf(),duration:720}),n._payments.payment_module){const l=yield n._payments.makePayment({type:n._options.getValue().type,resource_name:i.asset_name,date:i.date,duration:i.duration,all_day:i.all_day});if(!l?.success)return;i.extension_data={invoice:l,invoice_id:l.invoice_id}}n._loading.next("Saving booking");const g=yield(0,U.km)(new y.$({...n._options.getValue(),...i,approved:!!n._settings.get("app.bookings.no_approval")})).toPromise();n._loading.next("");const{booking_type:a}=i;return n.clearForm(),_?.patchValue({booking_type:a}),n.last_success=g,sessionStorage.setItem("PLACEOS.last_booked_booking",JSON.stringify(g)),n.setView("success"),g})()}postFormForGroup(){var o=this;return(0,e.Z)(function*(){const{members:n,group:_,type:i}=o._options.getValue();if(!_)throw"No group available to book for";const g=n.filter(h=>h.email!==(0,f.ar)().email);if(g.length<=0)throw"No members in your group to book for.";const a=o._form.getValue().value,l=yield o.available_assets.pipe((0,Z.q)(1)).toPromise(),r=l.find(h=>h.id===a.asset_id||h.map_id===a.asset_id),d=o._org.levelWithID([r.zone?.id]),p=[r,...yield o._getNearbyResources(d.map_id,a.asset_id,l,g.length)],E=[(0,f.ar)(),...g];yield Promise.all(E.map((h,A)=>o.checkResourceAvailable({...a,asset_id:p[A].map_id||p[A].id,user_email:h.email},i)));for(let h=0;h<E.length;h++){const A=E[h],I=p[h];o._form.getValue().patchValue({...a,user:A,asset_id:I?.id,asset_name:I.name,map_id:I?.map_id||I?.id,description:I.name,zones:I.zone?[I.zone?.parent_id,I.zone?.id]:[]}),o.postForm(!0)}})()}checkQuestions(){var o=this;return(0,e.Z)(function*(){if(!1!==o._settings.get("app.desks.ignore_questions"))return;const n=o._dialog.open(w.I);if("done"!==(yield Promise.race([n.componentInstance.event.pipe((0,$.P)(g=>"done"===g.reason)).toPromise(),n.afterClosed().toPromise()]))?.reason)throw"User cancelled";const i=n.componentInstance.form.getRawValue();for(const g in i)if(i[g])throw"User failed questionaire";n.close()})()}checkResourceAvailable({asset_id:o,date:n,duration:_,user_email:i,all_day:g},a){var l=this;return(0,e.Z)(function*(){_=g?720:_||60;const r=yield(0,U.F2)({period_start:(0,t.Z)(n),period_end:(0,t.Z)(n+60*_*1e3),type:a}).toPromise();if(r.find(p=>p.asset_id===o))throw o.includes("@")?`${o} already has an invite for the selected time`:`${o} is not available at the selected time`;const d=l._settings.get(`app.booking.allowed_daily_${a}_count`)??1;if(d>0&&r.filter(p=>p.user_email===(i||(0,f.ar)()?.email)&&"declined"!==p.status).length>=d){const p=i===(0,f.ar)()?.email;throw`${p?"You":i} already ${p?"have":"has"} a ${a} booked`}return!0})()}loadAssets(o){return(0,F.BW_)(this._org.building.id,{name:o}).pipe((0,R.U)(n=>(0,f.xH)(n.map(_=>(_.metadata[o]?.details instanceof Array?_.metadata[o]?.details:[]).map(i=>({...i,zone:_.zone}))))))}_getNearbyResources(o,n,_,i){return(0,e.Z)(function*(){const g=[];let a=_.filter(l=>l.id!==n&&l.map_id!==n);for(let l=0;l<i;l++){const r=yield(0,K.gV)(o,n,a.map(d=>d.map_id||d.id));r&&(g.push(_.find(d=>d.id===r||d.map_id===r)),a=a.filter(d=>d.id!==r&&d.map_id!==r))}return g})()}}C.\u0275fac=function(o){return new(o||C)(L.LFG(S.F0),L.LFG(f.gb),L.LFG(G.w),L.LFG(Q.uw),L.LFG(V.c))},C.\u0275prov=L.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"})},4367:(k,P,s)=>{s.d(P,{w:()=>O});var e=s(5699),S=s(719),f=s(9497),t=(s(6962),s(2560)),N=s(5306),D=s(158),b=s(7202);class O{constructor(u,c){this._event=u,this._settings=c,this.outlook_link=(0,f.Y$)(this._event),this.google_link=(0,f.T$)(this._event),this.ical_link=(0,f.KS)(this._event)}}O.\u0275fac=function(u){return new(u||O)(t.Y36(e.WI),t.Y36(S.g))},O.\u0275cmp=t.Xpm({type:O,selectors:[["booking-link-modal"]],decls:22,vars:12,consts:function(){let m,u,c;return m=$localize`:␟34c16b14ad0e33db574c8bea543e66e766aa3a01␟4015832758698516701:Create in Outlook`,u=$localize`:␟f745484670e6b6bbb8a1c327c222e665fb25b863␟3788591245559456526:Create in Google Calendar`,c=$localize`:␟1af54061e7f4bcfb1048ffaa05c9b8f7c4b41679␟4894641609416495396:Download iCal File`,[[1,"p-4","w-full","pb-2"],[1,"flex","flex-col","items-center","space-y-4","p-4","relative"],["button","","matRipple","","target","_blank","rel","noopener noreferer",1,"flex","items-center","p-2","space-x-2","pr-4","w-64","rounded","inverse",3,"href"],["src","assets/icons/outlook.svg",1,"w-6"],m,["src","assets/icons/gcal.svg",1,"w-6"],u,[1,"text-xl"],c,["icon","","mat-dialog-close","",1,"absolute","top-2","right-0"]]},template:function(u,c){1&u&&(t.TgZ(0,"div",0),t._uU(1,"Add event to your calendar"),t.qZA(),t.TgZ(2,"div",1)(3,"a",2),t.ALo(4,"sanitize"),t._UZ(5,"img",3),t.TgZ(6,"span"),t.SDv(7,4),t.qZA()(),t.TgZ(8,"a",2),t.ALo(9,"sanitize"),t._UZ(10,"img",5),t.TgZ(11,"span"),t.SDv(12,6),t.qZA()(),t.TgZ(13,"a",2),t.ALo(14,"safe"),t.TgZ(15,"app-icon",7),t._uU(16,"download"),t.qZA(),t.TgZ(17,"span"),t.SDv(18,8),t.qZA()()(),t.TgZ(19,"button",9)(20,"app-icon"),t._uU(21,"close"),t.qZA()()),2&u&&(t.xp6(3),t.Q6J("href",t.xi3(4,3,c.outlook_link,"url"),t.LSH),t.xp6(5),t.Q6J("href",t.xi3(9,6,c.google_link,"url"),t.LSH),t.xp6(5),t.Q6J("href",t.xi3(14,9,c.ical_link,"url"),t.LSH))},dependencies:[e.ZT,N.o,D.y,b.n],styles:["[_nghost-%COMP%]{position:relative}\n/*# sourceMappingURL=booking-link-modal.component.ts-angular-inline--62.css.map*/"]})},4282:(k,P,s)=>{s.d(P,{I:()=>O});var e=s(2560),S=s(2508),F=(s(3770),s(4666)),t=s(2922),N=s(5699);function D(m,u){if(1&m){const c=e.EpF();e.TgZ(0,"div",2)(1,"h2",3),e.SDv(2,4),e.qZA(),e.TgZ(3,"main",5)(4,"div",6)(5,"label"),e.tHW(6,7),e._UZ(7,"span"),e.N_p(),e.qZA(),e.TgZ(8,"mat-radio-group",8)(9,"mat-radio-button",9),e._uU(10,"Yes"),e.qZA(),e.TgZ(11,"mat-radio-button",9),e._uU(12,"No"),e.qZA()()(),e.TgZ(13,"div",6)(14,"label"),e.tHW(15,10),e._UZ(16,"span"),e.N_p(),e.qZA(),e.TgZ(17,"mat-radio-group",11)(18,"mat-radio-button",9),e._uU(19,"Yes"),e.qZA(),e.TgZ(20,"mat-radio-button",9),e._uU(21,"No"),e.qZA()()(),e.TgZ(22,"div",12)(23,"label"),e.tHW(24,13),e._UZ(25,"span"),e.N_p(),e.qZA(),e.TgZ(26,"mat-radio-group",14)(27,"mat-radio-button",9),e._uU(28,"Yes"),e.qZA(),e.TgZ(29,"mat-radio-button",9),e._uU(30,"No"),e.qZA()()()(),e.TgZ(31,"footer",15)(32,"button",16),e.NdJ("click",function(){e.CHM(c);const v=e.oxw();return e.KtG(v.submit())}),e.SDv(33,17),e.qZA()(),e.TgZ(34,"button",18)(35,"i",19),e._uU(36,"close"),e.qZA()()()}if(2&m){const c=e.oxw();e.xp6(3),e.Q6J("formGroup",c.form),e.xp6(6),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1),e.xp6(7),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1),e.xp6(7),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1)}}function b(m,u){1&m&&(e.TgZ(0,"main",20)(1,"p",21),e.SDv(2,22),e.qZA(),e.TgZ(3,"button",18)(4,"i",19),e._uU(5,"close"),e.qZA()()())}class O{constructor(){this.event=new e.vpe,this.form=new S.cw({travelled:new S.NI(!1),unwell:new S.NI(!1),contact:new S.NI(!1)})}submit(){this.form.markAllAsTouched(),Object.keys(this.form.value).find(u=>!0===this.form.value[u]||"true"===this.form.value[u])?this.failure=!0:this.event.emit({reason:"done"})}}O.\u0275fac=function(u){return new(u||O)},O.\u0275cmp=e.Xpm({type:O,selectors:[["desk-question-modal"]],outputs:{event:"event"},decls:3,vars:2,consts:function(){let m,u,c,M,v,B;return m=$localize`:␟02006a13b8e6aacb7a6e15bafd8004ed529f5d81␟877348132538805077:COVID-19 Questionnaire`,u=$localize`:␟dad7efbd2320e5ea935aef911f18cbcb24690133␟1650520403092579087: Have you travelled overseas within the last 14 days?${"\ufffd#7\ufffd"}:START_TAG_SPAN:*${"\ufffd/#7\ufffd"}:CLOSE_TAG_SPAN:`,c=$localize`:␟cf50bf8de6c6db836da440c89a375631f7ba3fb0␟1182497320820036810: Are you unwell or experiencing any cold or flu-like symptoms?${"\ufffd#16\ufffd"}:START_TAG_SPAN:*${"\ufffd/#16\ufffd"}:CLOSE_TAG_SPAN:`,M=$localize`:␟273153c91358de15d124ff2966859d9949080f4c␟737527639567676154: Have you had contact with anyone with suspected COVID-19?${"\ufffd#25\ufffd"}:START_TAG_SPAN:*${"\ufffd/#25\ufffd"}:CLOSE_TAG_SPAN:`,v=$localize`:␟71c77bb8cecdf11ec3eead24dd1ba506573fa9cd␟935187492052582731:Submit`,B=$localize`:␟17d62f424c2c025579e1ec0e3f5ad971f57681df␟4401678084033805848: Your request to work from the office has been rejected based on your response to the compulsory Covid-19 questions. Please feel free to submit a new request when circumstances change in a way that changes your answer to the questions. `,[["class","relative",4,"ngIf","ngIfElse"],["fail_state",""],[1,"relative"],[1,"p-4","text-xl"],m,[1,"p-4",3,"formGroup"],[1,"flex","flex-col","mb-4"],u,["formControlName","travelled",1,"space-x-2"],[3,"value"],c,["formControlName","unwell",1,"space-x-2"],[1,"flex","flex-col"],M,["formControlName","contact",1,"space-x-2"],[1,"flex","justify-center","items-center","p-2"],["btn","","matRipple","",3,"click"],v,["close","","icon","","matRipple","","mat-dialog-close",""],[1,"material-icons"],["failure","",1,"pt-8","relative"],[1,"p-4"],B]},template:function(u,c){if(1&u&&(e.YNc(0,D,37,7,"div",0),e.YNc(1,b,6,0,"ng-template",null,1,e.W1O)),2&u){const M=e.MAs(2);e.Q6J("ngIf",!c.failure)("ngIfElse",M)}},dependencies:[F.O5,S.JJ,S.JL,S.sg,S.u,t.VQ,t.U0,N.ZT],styles:["main[_ngcontent-%COMP%]{width:24rem;max-width:calc(100vw - 4.5rem)}[close][_ngcontent-%COMP%]{position:absolute;top:.5rem;right:.5rem}\n/*# sourceMappingURL=desk-questions-modal.component.ts-angular-inline--61.css.map*/"]})}}]);
//# sourceMappingURL=default-libs_bookings_src_lib_booking-form_service_ts.js.map